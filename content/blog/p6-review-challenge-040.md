---
title: "Laurent Rosenfeld Weekly Review: Challenge - 040"
date: 2020-01-05T00:00:00+00:00
description: "Laurent Rosenfeld Weekly Review: Challenge - #040."
type: post
image: images/blog/p6-review-challenge-040.jpg
author: Laurent Rosenfeld
tags: ["Raku"]
---
***
# Raku Solutions Weekly Review
***

## Task #1: Multiple Arrays Content

This is derived in part from my [blog post](http://blogs.perl.org/users/laurent_r/2019/12/perl-weekly-challenge-40-multiple-arrays-content-and-sublist-sorting.html) made in answer to the [Week 40 of the Perl Weekly Challenge](/blog/perl-weekly-challenge-040/) organized by  <a href="http://blogs.perl.org/users/mohammad_s_anwar/">Mohammad S. Anwar</a> as well as answers made by others to the same challenge.

The challenge reads as follows:

*You are given two or more arrays. Write a script to display values of each list at a given index.*

*For example:*

    Array 1: [ I L O V E Y O U ]
    Array 2: [ 2 4 0 3 2 0 1 9 ]
    Array 3: [ ! ? £ $ % ^ & * ]

*We expect the following output:*

    I 2 !
    L 4 ?
    O 0 £
    V 3 $
    E 2 %
    Y 0 ^
    O 1 &
    U 9 *

The task implicitly asks for matrix transposition.

## My Solutions

Let's start with the example provided with the task. We have three arrays, they all have 8 items and each item is just one character long. With such nice input data, we can obtain the desired out with just one line of real code:

``` Perl6
use v6;

my @a1 = < I L O V E Y O U >;
my @a2 = < 2 4 0 3 2 0 1 9 >;
my @a3 = < ! ? £ $ % ^ & * >;

say "@a1[$_] @a2[$_] @a3[$_]" for 0..@a1.end;
```

which duly displays the desired result:

    $ perl6 multi_array.p6
    I 2 !
    L 4 ?
    O 0 £
    V 3 $
    E 2 %
    Y 0 ^
    O 1 &
    U 9 *

But that doesn't work properly if the length of the arrays’ items is not always the same. This can be solved (to a certain extent) using tabulations:

``` Perl6
use v6;

my @a1 = < I L OOO V E Y O U >;
my @a2 = < 2 42 0 33 2 0 1 9 >;
my @a3 = < !!!!! ? £ $ % ^ & * >;

say "@a1[$_]\t@a2[$_]\t@a3[$_]" for 0..@a1.end;
```
The output is satisfactory:

    $ perl6 multi_array.p6
    I       2       !!!!!
    L       42      ?
    OOO     0       £
    V       33      $
    E       2       %
    Y       0       ^
    O       1       &
    U       9       *

But, what if the arrays don't have the same number of items? And, more importantly, since the task relates to two *or more* arrays, we cannot hard code the number of arrays, and we'll therefore use an array of arrays (AoA) structure and perform a proper matrix transposition before trying to output the result.

The Raku programming language has the [Z](https://docs.raku.org/routine/Z) Zip built-in operator, which, used together with the `[]` reduction metaoperator to act on several sub-arrays, gives us a very easy way to transpose lines and columns of a 2-D array:

``` Perl6
use v6;

my @a = < I L O V E Y O U >,
        < 244 42 0 1233 222 0 11 90 >,
        < ! ???? £ $ %% ^ & * >,
        < a b c d e f g f >;

my @b = [Z] @a;  # performs transposition
say join "\t", map {$_ // "" }, @$_ for @b;
```

This displays the following output:

    $ perl6 mult_arrays.p6
    I       244     !       a
    L       42      ????    b
    O       0       £       c
    V       1233    $       d
    E       222     %%      e
    Y       0       ^       f
    O       11      &       g
    U       90      *       f


### Item Lengths Exceeding the Tabulation Size

Now, what if some of the array items have a length exceeding the tabulation size (7 or more character in our case)?  Using tabulations is no longer sufficient. We can construct dynamically a formatting string to be used by the `sprinf`, `printf`, or `fmt` built-in functions:

``` Perl6
use v6;

my @a = < I L O V E Y O U >,
        < 244 42 0 123344556677 222 0 11 >,
        < ! ?????? £ $ %% ^ & * >,
        < a b c d e f g f i j>;

my $max = max map { .elems }, @a;
my @max-lengths = map { .map({.chars}).max  }, @a;
my $fmt = [~] map {"%-" ~ @max-lengths[$_] + 2 ~ "s"}, keys @max-lengths;
say "Format: ", $fmt;   # just displaying the resulting formatting string
my @b;
for ^$max X ^@a.elems -> ($i, $j) {
    @b[$i][$j] = @a[$j][$i] // "";
}
printf "$fmt\n", @$_ for @b;
```

This displays the following output:

    $ perl6 mult_arrays.p6
    Format: %-3s%-14s%-8s%-3s
    I  244           !       a
    L  42            ??????  b
    O  0             £       c
    V  123344556677  $       d
    E  222           %%      e
    Y  0             ^       f
    O  11            &       g
    U                *       f
                             i
                             j

## Alternative Solutions

[Arne Sommer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-040/arne-sommer/perl6/ch-1.p6) made good use of the `>>` hyper operator together with the `max`built-in to find the size of the largest array and the length of the largest string in each array. He then used two nested `for` loops to print out the array of arrays' items *column-wise*:

``` Perl6
@strings = ('I L O V E Y O U', '2 4 0 3 2 0 1 9', '! ? £ $ % ^ & *') unless @strings.elems;

my @arrays = @strings.map(*.words.List);

my $length = @arrays>>.elems.max;
my @width  = @arrays>>.chars>>.max;

for ^$length -> $index
{
  my $col = 0;
  for @arrays
  {
    print "{ ($_[$index] // '').fmt("%-{ @width[$col] }s") } ";
    $col++;
  }
  say "";
}
```

[Noud](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-040/noud/perl6/ch-1.p6) wrote a quite clever and concise `print_intertwined` subroutine that takes a number of arrays as input and then uses the `[Z]` combined zip and reduction operators to transpose the matrix on the fly:

``` Perl6
my @arr1 = <I L O V E Y O U>;
my @arr2 = <2 4 0 3 2 0 1 9 5 6 7 8>;
my @arr3 = <! ? £ $ % ^ & * ( )>;

sub print_intertwined(**@arrs) {
    my $sub_arr_max = max(($_.elems for @arrs));
    @arrs = ((|$_, " " xx $sub_arr_max - $_.elems).flat for @arrs);
    for [Z] @arrs -> @arr {
        say join(" ", @arr);
    }
}
print_intertwined(@arr1, @arr2, @arr3);
```

Quite well done, Noud! Note also how Noud's program deals manually with array items of varying lengths.

[Simon Proctor](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-040/simon-proctor/perl6/ch-1.p6) suggested an even more concise solution that also uses the `[Z]` combined operator:

``` Perl6
sub MAIN(
    *@inputs where { @_.all.codes ~~ @_[0].codes } #= Strings to display
) {
    ([Z] @inputs.map(*.comb)).map(*.join(" ").say);
}
```

[Burkhard Nickels](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-040/burkhard-nickels/perl6/ch-1.p6) participated to the Raku challenge for the first time. His program is very short, but it only covers the simple input provided with the task (as my first solution at the beginning of this post), but not cases where the input data is less regular:

my @a1 = ('I','L','O','V','E','Y','O','U');
my @a2 = ('2','4','0','3','2','0','1','9');
my @a3 = ('!','?','£','$','%','^','&','*');

loop ( my $i = 0; $i <= @a1.end; $i++ ) {
    print "@a1[$i] @a2[$i] @a3[$i]\n";
}

[Javier Luque](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-040/javier-luque/perl6/ch-1.p6)'s solution covers more complicated input data than just three arrays of equal size, but it doesn't cover the case where the array items are larger than a single character:

``` Perl6
sub MAIN() {
    my @arrays = (
        <I L O V E Y O U>,
        <2 4 0 3 2 0 1 9>,
        <! ? £ $ % ^ & *>,
    );

    my $max = @arrays.sort({$^b.elems <=> $^a.elems})
                     .first
                     .elems;

    for (0 .. $max - 1) ->$i {
        say @arrays.map({$_[$i] // ' '})
                   .join(" ");
    }
}
```

Note that `for (0 .. $max - 1) -> $i` might be written more concisely: `for ^$max -> $i`. Also, sorting the data to find the largest element is not very efficient in my view (the `max` function can do that faster), but, or course, it doesn't matter much with such small input data.

[Roger Bell West](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-040/roger-bell-west/perl6/ch-1.p6) used two nested loops to go through the data and populate an intermediate one-line array (`@out`). His solution covers more complicated input data than just three arrays of equal size, but it doesn't cover the case where the array items are larger than a single character:

``` Perl6
my @a=(
    (qw|I L O V E Y O U|),
    (qw|2 4 0 3 2 0 1 9|),
    (qw|! ? £ $ % ^ & *|),
      );

my $ix=0;
my $r=1;
while ($r) {
  $r=0;
  my @out;
  for 0..@a.end -> $iy {
    if (@a[$iy][$ix].defined) {
      push @out,@a[$iy][$ix];
      $r=1;
    } else {
      push @out,' ';
    }
  }
  if ($r) {
    say join(' ',@out);
  }
  $ix++;
}
```

[Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-040/ruben-westerberg/perl6/ch-1.p6) provided a very concise solution that I initially didn't fully grasp:

``` Perl6
my @aoa=( <I L O V E Y O U>, <2 4 0 3 2 0 1 9>, <! ? £ $ % ^ & * >);
my @indexes=@*ARGS==0??(2,3)!!@*ARGS;
put $_ for @indexes.map({@aoa[*;$_].join: " "});
```

and also appeared not to work properly when I first tested it... until I understood that you need to pass to the program the indexes of the items that you want to print. I'm not sure why he did that. His program also doesn't handle well cases where an array is smaller than the others or where some items are longer than one character.

[Ryan Thompson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-040/ryan-thompson/perl6/ch-1.p6) provided two solutions, each holding in a single code line, using the `zip` built-in function of the infix `Z` operator. So, two very concise solutions, but no attempt to handle less regular input data.

``` Perl 6
my @a1 = 'ILOVEYOU'.comb;
my @a2 = '24032019'.comb;
my @a3 = '!?X$%^&*'.comb;

# The zip routine, much like Perl 5's List::Utils:
.Str.say for zip @a1, @a2, @a3;

# Or Raku's new chaining infix Z(ip) operator:
.Str.say for @a1 Z @a2 Z @a3;
```

## Task #2: Sublist Sorting

This is derived in part from my [blog post](http://blogs.perl.org/users/laurent_r/2019/12/perl-weekly-challenge-40-multiple-arrays-content-and-sublist-sorting.html) made in answer to the [Week 40 of the Perl Weekly Challenge](https://perlweeklychallenge.org/blog/perl-weekly-challenge-040/) organized by  <a href="http://blogs.perl.org/users/mohammad_s_anwar/">Mohammad S. Anwar</a> as well as answers made by others to the same challenge.

The challenge reads as follows:

*You are given a list of numbers and set of indices belong to the list. Write a script to sort the values belongs to the indices.*

*For example,*

    List: [ 10, 4, 1, 8, 12, 3 ]
    Indices: 0,2,5

*We would sort the values at indices 0, 2 and 5 i.e. 10, 1 and 3.*

*Final List would look like below:*

    List: [ 1, 4, 3, 8, 12, 10 ]

## My Solution

This is the perfect example for using array slices, which was the subject of a challenge a few weeks ago. We'll use slices twice: once as a *rvalue* to extract from the list the values to be sorted, and once again as a *lvalue* for inserting the sorted values back into the array at their proper position.

Note that Raku's sort procedure is clever enough to discover that it should perform numeric sort when it sees numbers (well, more accurately, it is the default [cmp](https://docs.raku.org/routine/cmp) operator used by `sort` which is smart enough to compare strings with string semantics and numbers with number semantics).

And we end up with a single line of code doing all the real work:

``` Perl6
use v6;

my @numbers = 10, 4, 1, 8, 12, 3;
my @indices = 0, 2, 5;

@numbers[@indices] = sort @numbers[@indices];
say @numbers;
```

This program displays the following output:

    $ perl6 sublists.p6
    [1 4 3 8 12 10]

## Alternative Solutions

[Arne Sommer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-040/arne-sommer/perl6/ch-2.p6) made a solution even simpler than mine and avoided to repeat the name of the array variable. The bulk of the work holds in a short code line:

``` Perl6
@array[@indices].=sort;
```

[Noud](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-040/noud/perl6/ch-2.p6) offered a solution very similar to mine!

``` Perl6
sub subsort(@arr, @ind) {
    @arr[@ind] = @arr[@ind].sort; @arr;
}
say subsort([10, 4, 1, 8, 12, 3], [0, 2, 5]);
```

[Ryan Thompson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-040/ryan-thompson/perl6/ch-2.p6) also made a program quite similar to mine:

``` Perl6
@list[@idx] = @list[@idx].sort;
@list.say;
```

[Simon Proctor](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-040/simon-proctor/perl6/ch-2.p6) used essentially the same technique:

``` Perl6
@list[@indices] = @list[@indices].sort;
```

[Burkhard Nickels](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-040/burkhard-nickels/perl6/ch-2.p6) participated to the Raku challenge for the first time. His program is slightly more complicated than those seen so far, as it involves two steps, but it also relies on slices:

``` Perl6
my @a = (10,4,1,8,12,3);
my @i = (0,2,5);

print "Before:", join(" - ", @a), "\n";
my @d = @a[0,2,5];
@a[0,2,5] = @d.sort( { .Int } );
print "After: ", join(" - ", @a), "\n";
```

[Javier Luque](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-040/javier-luque/perl6/ch-2.p6)'s program also also does the work in two steps:

``` Perl6
my @list = (10, 4, 1, 8, 12, 3);
my @indices = (0, 2, 5);

my @sublist = @list[@indices].sort;

# Override the original array
my $i = 0;
for (@indices) -> $index {
    @list[$index] = @sublist[$i++];
}
say @list;
```

[Roger Bell West](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-040/roger-bell-west/perl6/ch-2.p6) also wrote a program doing the work in two steps:

``` Perl6
my @list=(10, 4, 1, 8, 12, 3);
my @indices=(0,2,5);

my @s=(map {@list[$_]},@indices).sort;
map {@list[@indices[$_]]=@s[$_]},(0..@indices.end);

print join(', ',@list),"\n";
```

[Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-040/ruben-westerberg/perl6/ch-2.p6) clearly wins the conciseness prize on this task:

``` Perl6
put @a[@i].sort;
```

***
***
## SEE ALSO
***
***

Only two blog posts (besides mine), or perhaps three, for this task:

* Arne Sommer: https://raku-musings.com/arrays.html;

* Javier Luque: https://perlchallenges.wordpress.com/2019/12/23/perl-weekly-challenge-040/.

Burkhard Nickels apparently blogged twice about the challenge, but I was unable to find his blog posts, as the links provided seem to be faulty.

***
***

## Wrapping up

After Mohammad's love declaration to all of us, I want to tell him publicly that I love him too. And I should add that I also love all the other challengers contributing to the Raku part of the challenge, because reading their contributions teaches me something new about Raku every week.

Please let me know if I forgot any of the challengers or if you think my explanation of your code misses something important (send me an e-mail or just raise an issue against this GitHub page).

If you want to participate to the Perl Weekly Challenge, please connect to [this site](https://perlweeklychallenge.org/).
