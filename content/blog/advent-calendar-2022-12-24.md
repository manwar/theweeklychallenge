---
title: "Advent Calendar - December 24, 2022"
date: 2022-12-24T00:00:00+00:00
description: "Advent Calendar - December 24, 2022."
type: post
image: images/blog/2022-12-24.jpg
author: Flavio Poletti
tags: ["Perl", "Raku"]
---

## [**Advent Calendar 2022**](/blog/advent-calendar-2022)
### | &nbsp; [**Day 23**](/blog/advent-calendar-2022-12-23) &nbsp; | &nbsp; **Day 24** &nbsp; | &nbsp; [**Day 25**](/blog/advent-calendar-2022-12-25) &nbsp; |
***

The gift is presented by `Flavio Poletti`. Today he is talking about his solution to [**"The Weekly Challenge - 160"**](/blog/perl-weekly-challenge-160). This is re-produced for **Advent Calendar 2022** from the original [**post**](https://github.polettix.it/ETOOBUSY/2022/04/13/pwc160-equilibrium-index/) by him.

***

<br>

## PWC160 - Equilibrium Index

<br>

### TL;DR

<br>

On with [**TASK #2**](https://theweeklychallenge.org/blog/perl-weekly-challenge-160/#TASK2) from [**The Weekly Challenge**](https://theweeklychallenge.org/) `#160`. Enjoy!

<br>

## The challenge

<br>

You are give an array of integers, @n.

Write a script to find out the Equilibrium Index of the given array, if found.

<br>

> For an array A consisting n elements, index i is an equilibrium index if the sum of elements of subarray A[0…i-1] is equal to the sum of elements of subarray A[i+1…n-1].

<br>

### Example 1

    Input: @n = (1, 3, 5, 7, 9)
    Output: 3

### Example 2

    Input: @n = (1, 2, 3, 4, 5)
    Output: -1 as no Equilibrium Index found.

### Example 2

    Input: @n = (2, 4, 2)
    Output: 1

<br>

## The questions

<br>

No real question, but maybe…

<br>

    * are there constraints on the input range, e.g. we have to use “big” stuff or multiple precision libraries?
    *is there a constraint on the size of the input array?

<br>

## The solution

<br>

This challenge reminded me of the exercises we did while practicing for the Computer Science 1 course at the University, way too long ago.

Let’s see the `Perl` solution first:

<br>

```perl
#!/usr/bin/env perl
use v5.24;
use warnings;
use experimental 'signatures';
no warnings 'experimental::signatures';

my @n = @ARGV ? @ARGV : (1, 3, 5, 7, 9);
say equilibrium_index(@n);

sub equilibrium_index (@n) {
   my $i_lo = 0;
   my $i_hi = $#n;
   my $diff = 0;
   $diff += ($diff <= 0 ? $n[$i_lo++] : -$n[$i_hi--]) while $i_lo < $i_hi;
   return @n && $diff == 0 ? $i_lo : -1;
}
```

<br>

The idea is to keep two indexes, one scanning the array from below (aptly named `$i_low`) and the other one from above (`$i_hi`). When the two meet, it’s time to call it a day and see how the two sums compare with one another.

Well, sort of. We can just keep track of the difference between the two sums, which is easy if we add stuff from below and subtract stuff from above. The difference is kept in variable `$diff`.

Last thing to discuss is how to move `$i_lo` and `$i_hi`. When `$diff` is positive, it means that there is an imbalance from below, which we have to compensate from above. When $diff is negative, the imbalance is from above, and we compensate from below. When `$diff` is zero we have to move on from either side (in this case, we get a new element from below).

The `Raku` version is the same, with slight changes in syntax:

<br>

```perl
#!/usr/bin/env raku
use v6;
sub MAIN (*@args) { put equilibrium-index(@args) }

sub equilibrium-index (@n) {
   my $i_lo = 0;
   my $i_hi = @n.end;
   my $diff = 0;
   $diff += ($diff <= 0 ?? @n[$i_lo++] !! -@n[$i_hi--]) while $i_lo < $i_hi;
   return @n && $diff == 0 ?? $i_lo !! -1;
}
```

<br>

Stay safe!

<br>

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

| &nbsp; [**Advent Calendar 2022**](/blog/advent-calendar-2022) &nbsp; |
