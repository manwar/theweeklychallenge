---
title: "Laurent Rosenfeld Weekly Review: Challenge - 011"
date: 2019-11-17T00:00:00+00:00
description: "Laurent Rosenfeld Weekly Review: Challenge - #011."
type: post
image: images/blog/p6-review-challenge-011.jpg
author: Laurent Rosenfeld
tags: ["Raku"]
---
***
# Raku Solutions Weekly Review
***

## Task #2: Displaying the Identity Matrix

This is derived in part from my [blog post](http://blogs.perl.org/users/laurent_r/2019/06/perl-weekly-challenge-11-fahrenheit-celsius-and-identity-matrix.html) made in answer to the [Week 11 of the Perl Weekly Challenge](https://perlweeklychallenge.org/blog/perl-weekly-challenge-011/) organized by  <a href="http://blogs.perl.org/users/mohammad_s_anwar/">Mohammad S. Anwar</a> as well as answers made by others to the same challenge.

The challenge reads as follows:

*Write a script to create an Identity Matrix for the given size. For example, if the size is 4, then create Identity Matrix 4x4. For more information about Identity Matrix, please read the [Wikipedia page](https://en.wikipedia.org/wiki/Identity_matrix).*

An identity matrix is a square matrix with ones on the main diagonal (top left to bottom right) and zeros everywhere else.

## My Solutions

Let's start with a boring plain-vanilla solution using two nested loops, as I would probably have to do in C, Pascal, Ada, or Java:

``` Perl6
use v6;

sub MAIN (Int $size where * > 0) {
    my @matrix;
    $size--;
    for 0..$size -> $i {
        for 0..$size -> $j {
            @matrix[$i][$j] = $i == $j ?? 1 !! 0;
        }
    }
    say @matrix;
}
```
Here, we are using the MAIN subroutine to process the argument passed to the script (which, in this case, must be a strictly positive integer).

When the row index (`$i`) is equal to the column index (`$j`), we populate the item with a one. Otherwise, we set it to zero.

This works as expected, but it is a bit difficult to understand the printed output:

    [[1 0 0] [0 1 0] [0 0 1]]

In such cases, it is useful to write an additional subroutine that can display the result in a way that is easy to understand. This is what the `pretty-print` subroutine below does:

``` Perl6
use v6;

sub pretty-print (@matrix) {
    for @matrix -> @rows {
        say join " ", @rows;
    }
}
sub MAIN (Int $size where * > 0) {
    my @matrix;
    $size--;
    for 0..$size -> $i {
        for 0..$size -> $j {
            @matrix[$i][$j] = $i == $j ?? 1 !! 0;
        }
    }
    pretty-print @matrix;
}
```

The output now shows clearly an identity matrix:

    $ perl6 matrix.p6 5
    1 0 0 0 0
    0 1 0 0 0
    0 0 1 0 0
    0 0 0 1 0
    0 0 0 0 1

If the user omits to pass a parameter (or passes an invalid one), a convenient usage line is printed to the screen:

    $ perl6 matrix.p6
    Usage:
      matrix.p6 <size>

### Identity Matrix in Functional Programming

Using the techniques of functional programming can make our code simpler.

A functional implementation in Raku / Perl 6 may look like this:

``` Perl6
use v6;

sub prettify (@matrix) {
    return join "\n", map { join " ", $_}, @matrix;
}
sub MAIN (Int $size where * > 0) {
    my @matrix = map { my $i = $_; map { $i == $_ ?? 1 !! 0 }, 0..$size },  0..$size;
    say prettify @matrix;
}
```

Since we're aiming at doing functional programming, we have replaced the `pretty-print` subroutine by a pure function, `prettify`, with no side effect: it does not print anything, but only returns a printable formatted string, which the user may then decide to print (as we did here), or may possibly do something else, such as storing it into a file for future use.

Note that the populating the identity matrix takes only one code line. The rest is really for prettifying the result and printing it.

We could also use data pipelines with chained method invocations:

``` Perl6
sub prettify (@matrix) {
    @matrix.map({join(" ",$_)}).join("\n");
}
sub MAIN (Int $size where * > 0) {
    say prettify (1..$size).map( -> $i { (1..$size).map( { $_ == $i ?? 1 !! 0 })});
}
```

although I'm not really convinced this is any better in this specific case, as it is a bit tedious to get these pesky closing parentheses and curlies right.

## Alternative Solutions

[Arne Sommer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-011/arne-sommer/perl6/ch-2c.p6) provided not less than four solutions. One of them uses the [Math::Matrix](https://github.com/pierre-vigier/Perl6-Math-Matrix) module, whose `new-identity` method just creates an identity matrix out-of-the-box! My favorite solution, however,might probably be this quite concise one, which populates a matrix with zeros and then overwrites the zeros of the first diagonal with ones:

``` Perl6
unit sub MAIN (Int $size where $size > 0);

my @im[$size;$size] = 0 xx $size xx $size;
@im[$_;$_] = 1 for ^$size;
say @im;
```

Note the use of [shaped arrays](https://docs.perl6.org/language/list#Fixed_size_arrays) in Arne's solution above. Take the time to study Arne's [other solutions](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-011/arne-sommer/perl6) or read his blog post (see below).

[Fench Chang](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-011/feng-chang/perl6/ch-2.p6) used the same strategy. His program populates a matrix with zeros and then overwrites the zeros of the first diagonal with ones:

``` Perl6
sub MAIN(Int $n where * > 0) {
    my @a = [0 xx $n] xx $n;
    @a[$_][$_] = 1 for 0 .. $n - 1;
    @a.say;
}
```

[Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-011/joelle-maslak/perl6/ch-2.p6) also used the same strategy, although in a different manner, i.e. doing it row by row:

``` Perl6
sub MAIN(UInt:D $size where * ≥ 1) {
    for ^$size -> $row {
        my @row = (^$size).map: { 0 };
        @row[$row] = 1;
        say @row.join(" ");
    }
}
```

[Francis J. Whittle](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-011/fjwhittle/perl6/ch-2.p6) made a very imaginative solution. His program loops over the range (the matrix's dimension) and, for each position, check if the row and column are equal, and finally coerces the Boolean result of that comparison into an integer, thus yielding 1 when they are equal, and 0 otherwise. The matrix is created in just one code line:

``` Perl6
(^$n).map: -> $i { (^$n).map: -> $j { Int($j == $i) } };
```

[Jo-Christian Oterhals](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-011/jo-christian-oterhals/perl6/ch-2.p6) also delivered a creative solution using an `&idm` code block that uses a `gather ... take` construct and returns an array of arrays.

``` Perl6
my &idm = -> $size { gather for ^$size -> $y { take map { Int($_ == $y) }, ^$size } };
.join(' ').say for idm(4); # 4... 2... 16... or whatever...
```

The second line of the code above provided pretty printing of the resulting matrix:

    1 0 0 0
    0 1 0 0
    0 0 1 0
    0 0 0 1

[Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-011/ruben-westerberg/perl6/ch-2.p6)'s solution is also quite creative. He created for each line an array consisting of one 1 and as many zeros are required by the matrix's dimension, and used the [rotate](https://docs.perl6.org/routine/rotate) built-in function to place the 1 in its proper position. Here, populating the matrix and displaying it prettily take just one code line:

``` Perl6
my $s=@*ARGS[0]//10;
(([1,|(0 xx $s-1)].rotate: -$++)  xx $s).map: *.join(" ").say;
```

[Simon Proctor](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-011/simon-proctor/perl6/ch-2.p6) also succeeded to populate and display prettily the matrix in just one code line:

``` Perl6
sub MAIN ( UInt \N where * > 0 ) {
    (1..N).map( -> $i { (1..N).map( -> $j { $j == $i ?? 1 !! 0 }).join(" ") } ).join("\n").say;
}
```

[Jaldhar H. Vyas](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-011/jaldhar-h-vyas/perl6/ch-2.p6) used a straight forward technique quite similar to my first solution, with two nested loops to populate the matrix's cells with 1 when the row and column indexes are equal and with zeros otherwise

``` Perl6
multi sub MAIN(
    Int $n where $n > 1#= the size of the identity matrix
) {

    for (0 .. $n - 1) -> $i {
        for (0 .. $n - 1) -> $j {
            print ($j == $i) ?? '1 ' !! '0 ';
        }
        print "\n";
    }
}
```

[Ozzy](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-011/ozzy/perl6/ch-2.p6) used essentially the same strategy with two nested `for` loops:

``` Perl6
sub MAIN (Int $dim)
{
    my @md[$dim;$dim];

    for 0..$dim-1 -> $i {
        for 0..$dim-1 -> $j {
            @md[$i;$j]= $i==$j ?? 1 !! 0;
            printf "%3i", @md[$i;$j];
        }
    printf "\n";
    }
}
```

## SEE ALSO

Only one blog this time (besides mine):

* Arne Sommer: https://perl6.eu/fc-matrix.html.

## Wrapping up

Please let me know if I forgot any of the challengers or if you think my explanation of your code misses something important (send me an e-mail or just raise an issue against this GitHub page).
