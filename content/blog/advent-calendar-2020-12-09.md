---
title: "Advent Calendar - December 9, 2020"
date: 2020-12-18T00:00:00+00:00
description: "Advent Calendar - December 9, 2020."
type: post
image: images/blog/2020-12-09.jpg
author: Javier Luque
tags: ["Perl","Raku"]
---

[**Advent Calendar 2020**](/blog/advent-calendar-2020)
***

The gift is presented by [**Arne Sommer**](https://perlweeklychallenge.org/blog/meet-the-champion-019). Today he is talking about his solution to the task `Divide Integers` of **["The Weekly Challenge - 066"](/blog/perl-weekly-challenge-066)**. This is re-produced for **Advent Calendar 2020** from the original [**post**](https://raku-musings.com/dividing-powers.html) by **Arne Sommer**.

***

You are given two integers `$M` and `$N`.

Write a script to divide the given two integers i.e. `$M / $N` without using multiplication, division and mod operator and return the floor of the result of the division.

## Example 1:

    Input: $M = 5, $N = 2
    Output: 2

## Example 2:

    Input: $M = -5, $N = 2
    Output: -3

## Example 3:

    Input: $M = -5, $N = -2
    Output: 2

***

Division is just subtraction in a loop. Off we go. Off we go. Off we go...:

```perl6
#! /usr/bin/env raku

unit sub MAIN (Int $M, Int $N where $N != 0, :$verbose);  # [1]

my $count  = 0;                                           # [2]
my $negate = $M.sign != $N.sign;                          # [3]
my $M-abs  = $M.abs;                                      # [4]
my $N-abs  = $N.abs;                                      # [4]

while $M-abs >= $N-abs                                    # [5]
{
  $M-abs -= $N-abs;                                       # [6]
  $count++;                                               # [7]

  say "M: $M-abs N: $N-abs = $count (negate $negate)" if $verbose;
}

if $negate                                                # [8]
{
  $count = -$count;                                       # [9]
  $count-- if $M-abs;                                     # [10]
}

say $count;                                               # [2]
```

We have to take care of two things; the sign and any remainder (but only if the sign is negative).

[1] Divison by zero is a bad thing, so we prevent that possibility for $N.

[2] The result.

[3] The result is a negative integer if one and only one of $M and $M is neagtive, else it is positive. We use sign to get the sign (-1, 0 or 1).

[4] Are we counting down to - or up to - zero? That depends on the sign. But we can count down if we ensure that both values are positive. That is done with abs, that removes any negative sign. The sign of the result has been taken care of in [3].

[5] As long as the remainder is larger or equal to the divisor,

[6] • subtract the divisor.

[7] • increase the count, which is the end result.

[8] Should the answer be negative?

[9] • negate it.

[10] • subtract 1 (the «floor» part of the challenge description) if we have a remainder.

See [docs.raku.org/routine/sign](https://docs.raku.org/routine/sign) for more information about the sign method.

See [docs.raku.org/routine/abs](https://docs.raku.org/routine/abs) for more information about the abs method.

Running it:

```perl6
$ raku divint 5 2
2

$ raku divint -5 2
-3

$ raku divint -5 -2
2

$ raku divint 5 -2
-3
```

With verbose mode (which would benefit from a rethink, me think...):

```perl6
$ raku divint --verbose 5 2
: Negate the result: No
: M: 3 N: 2 = 1
: M: 1 N: 2 = 2
2

$ raku divint --verbose 25 2
: Negate the result: No
:M: 23 N: 2 = 1
:M: 21 N: 2 = 2
:M: 19 N: 2 = 3
:M: 17 N: 2 = 4
:M: 15 N: 2 = 5
:M: 13 N: 2 = 6
:M: 11 N: 2 = 7
:M: 9 N: 2 = 8
:M: 7 N: 2 = 9
:M: 5 N: 2 = 10
:M: 3 N: 2 = 11
:M: 1 N: 2 = 12
12
```

# A Perl Version

Just for fun...

Perl does not have a «sign» function, so I wrote one. I chose to do command line handling manually. Other than that, the code is pretty much the same as the raku version. Except longer...

```perl
#! /usr/bin/env perl

use feature 'say';
use feature 'signatures';
no warnings qw(experimental::signatures);

my $verbose = 0;

if (@ARGV && $ARGV[0] eq "--verbose")
{
  $verbose++;
  shift @ARGV;
}

my $M = shift(@ARGV) || die 'Specify $M and $N';
my $N = shift(@ARGV) || die 'Specify $N';

die '$M is not an integer' unless int($M) == $M;
die '$N is not an integer' unless int($N) == $N;

die "Unable to divide by zero" if $N == 0;

sub sign ($value)
{
  return  1 if $value  > 0;
  return  0 if $value == 0;
  return -1 if $value < 0;
}

my $count  = 0;
my $negate = sign($M) != sign($N);
my $M_abs  = abs($M);
my $N_abs  = abs($N);

say ": Negate the result: ", $negate ? 'Yes' : 'No' if $verbose;

while ($M_abs >= $N_abs)
{
  $M_abs -= $N_abs;
  $count++;

  say "M: $M_abs N: $N_abs = $count" if $verbose;
}

if ($negate)
{
  $count = -$count;
  $count-- if $M_abs;
}

say $count;
```

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2020**](/blog/advent-calendar-2020)
