---
title: "Laurent Rosenfeld Weekly Review: Challenge - 007"
date: 2019-10-13T00:00:00+00:00
description: "Laurent Rosenfeld Weekly Review: Challenge - #007."
type: post
image: images/blog/p6-review-challenge-007.jpg
author: Laurent Rosenfeld
tags: ["Perl6"]
---
***
# Perl6 Solutions Weekly Review
***

## Task #1: Niven (or Harshad) Numbers

This is derived in part from my [blog post](http://blogs.perl.org/users/laurent_r/2019/05/perl-weekly-challenge-7-niven-numbers-and-word-ladders.html) made in answer to the [Week 7 of the Perl Weekly Challenge](https://perlweeklychallenge.org/blog/perl-weekly-challenge-007/) organized by  <a href="http://blogs.perl.org/users/mohammad_s_anwar/">Mohammad S. Anwar</a> as well as answers made by others to the same challenge.

The challenge reads as follows:

*Print all the Niven numbers from 0 to 50 inclusive, each on their own line. A Niven number is a non-negative number that is divisible by the sum of its digits.*

A [Niven number or harshad number](https://en.wikipedia.org/wiki/Harshad_number) is a strictly positive integer that can be evenly divided by the sum of its digits. Note that this property depends on the number base in which the number is expressed (the divisibility property is intrinsic to a pair of numbers, but the sum of digits of a given number depends on the number base in which the number is expressed). Here we will consider only numbers in the common base 10.

Please also note that 0 cannot be a divisor of a number. Therefore, 0 cannot really be a Niven number. We'll start at 1 to avoid problems.

This is an easy challenge, but I thought it was interesting to include it in this blog series because of the diversity of solutions suggested by the various challengers. Really, there is more than one way to do it..

## My solution

For a simple problem like this, I can't resist doing in with a Perl 6 one-liner:

​    $ perl6 -e 'for 1..50 -> $num { my $sum = [+] $num.comb; say $num if $num %% $sum}'
​    1
​    2
​    3
​    4
​    5
​    6
​    7
​    8
​    9
​    10
​    12
​    18
​    20
​    21
​    24
​    27
​    30
​    36
​    40
​    42
​    45
​    48
​    50

As it turns out, I'm afraid I was a bit sloppy here (because I simply translated to P6 my original P5 one-liner, instead of taking full advantage of Perl 6 expressive syntax): in Perl 6, the one-liner could be much more concise, as we will see in other challengers' solutions below.

And it you prefer a real script, this is one way it could be done, using a `gather/take` block:

``` Perl6
use v6;
.say for gather {
    for 1..50 -> $num {
        my $sum = [+] $num.comb;
        take $num if $num %% $sum
    }
}
```

## Alternative Solutions

[Arne Sommer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-007/arne-sommer/perl6/ch-1.p6) provided a script that could have been a Perl 6 one-liner and is significantly more concise than my own one-liner:

``` Perl6
.say if $_ %% $_.comb.sum for 0 .. 50;
```

Arne also provided a solution creating a lazy infinite list of Niven numbers and printing out those up to 50:

``` Perl6
unit sub MAIN (Int $limit where $limit > 0 = 50);
my $niven := gather
{
  for 0..Inf
  {
    take $_ if $_ %% $_.comb.sum;
  }
}
.say for $niven[^$limit];
```

This program is sort of slightly wrong, though, as it does not print the Niven numbers up to 50, as required in the challenge specification, but the first 50 Niven numbers (up to 153). But Arne knows that, and  that's really secondary: it would be no big deal to change the last code line to make it satisfy the requirement.

[Finley](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-007/finley/perl6/ch-1.p6) provided a script, but the real code to compute Niven's number holds in one single line, even slightly shorter than Arne's solution:

``` Perl6
.say if ($_ %% [+] .comb) for 0..50;
```

[Francis J. Whittle](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-007/fjwhittle/perl6/ch-1.p6) also provided a script that could be a simple Perl 6 one-liner:

``` Perl6
.put for (0..50).grep: { $_ %% [+] .comb };
```

[Jo-Christian Oterhals](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-007/jo-christian-oterhals/perl6/ch-1.p6)'s script is the most concise so far and could also become a simple one-liner:

``` Perl6
.say if $_ %% [+] .comb for 0..50;
```

[Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-007/ruben-westerberg/perl6/ch-1.p6) also provided a script that could boil down to a one-liner:

``` Perl6
say join "\n", (0..50) .grep({($_ > 0) && $_ %% (.Str.comb>>.Int .sum)});
```

[Jaldhar H. Vyas](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-007/jaldhar-h-vyas/perl6/ch-1.p6) dedicated his script to the memory of his father,  Dr. Harshad V. Vyas (remember that the Niven numbers are commonly called the Harshad Numbers). His script is significantly longer than all those seen so far (but still fairly short):

``` Perl6
for 1 .. 50 -> $number {
    if $number % $number.comb.sum == 0 {
        say $number;
    }
}
```

[Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-007/joelle-maslak/perl6/ch-1.p6) also wrote a fairly short full-fledged script:

``` Perl6
sub MAIN(UInt:D $max = 50) {
    for 0..$max -> $i {
        say $i if $i %% [+] $i.comb;
    }
}
```

[Ozzy](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-007/ozzy/perl6/ch-1.p6) made the most complicated solution so far:

``` Perl6
sub SumDigits ( Int $x is copy ) {
    my $sum=0;
    while $x != 0 {
        $sum += $x mod 10;
        $x= $x div 10;
    }
    return $sum;
}
sub MAIN {
    for 0..50 -> $x {
        say $x if $x %% SumDigits($x);
    }
}
```

[Simon Proctor](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-007/simon-proctor/perl6/ch-1.p6) also somewhat over-engineered it (in my humble view) with multi subroutines :

``` Perl6
multi sub is-niven( 0 ) { False }

multi sub is-niven( Int $num where * > 0 ) {
    $num %% [+] $num.comb;
}
sub MAIN( UInt() $max=50 ) {
    .say if is-niven($_) for 0..$max;
}
```

## SEE ALSO

Only two blog posts this time:

Arne Sommer: https://perl6.eu/niven-ladder.html

Jo-Christian Oterhals: https://medium.com/@jcoterhals/perl-6-small-stuff-19-a-challenge-of-niven-numbers-and-word-ladders-ed33dcd2b45b

## Wrapping up

Please let me know if I forgot any of the challengers or if you think my explanation of your code misses something important (you can just raise an issue against this GitHub page).

If you want to participate to the Perl Weekly Challenge, please connect to [this site](https://perlweeklychallenge.org/).
