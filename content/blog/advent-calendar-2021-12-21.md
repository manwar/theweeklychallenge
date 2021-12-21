---
title: "Advent Calendar - December 21, 2021"
date: 2021-12-21T00:00:00+00:00
description: "Advent Calendar - December 21, 2021."
type: post
image: images/blog/2021-12-21.jpg
author: E. Choroba
tags: ["Perl"]
---

## [**Advent Calendar 2021**](/blog/advent-calendar-2021)
### | [**Day 20**](/blog/advent-calendar-2021-12-20) | **Day 21** |
***

The gift is presented by [**E. Choroba**](/blog/meet-the-champion-018). Today he is talking about his solution to [**"The Weekly Challenge - 061"**](/blog/perl-weekly-challenge-061). This is re-produced for **Advent Calendar 2021** from the original [**post**](http://blogs.perl.org/users/e_choroba/2020/05/perl-weekly-challenge-061-product-subarray-and-ipv4-partition.html) by `E. Choroba`.

***

<br>

## Task #1: Product SubArray

<br>

Given a list of `4 or more` numbers, write a script to find the contiguous sublist that has the maximum product. The length of the sublist is irrelevant; your job is to maximize the product.

<br>

***

<br>

The easiest (but probably not the fastest) method would be to start from each position and compute the products of all the possible sublists starting at the position, remembering the positions where the product is maximal.

I automatically reached for [**List::Util**](https://p3rl.org/List::Util)’s product to get the products easily, but alas! Running

<br>

    product(-1, 3)

<br>

caused a `Floating point exception` (bug [**reported**](https://rt.cpan.org/Public/Bug/Display.html?id=132653)). So, I had to implement product myself:

<br>

```perl
#! /usr/bin/perl
use warnings;
use strict;

sub product {
    my @list = @_;
    my $p = 1;
    $p *= $_ for @list;
    return $p
}

sub max_prod {
    my ($list) = @_;
    my $max = [$list->[0]];
    for my $i (0 .. $#$list) {
        for my $j ($i .. $#$list) {
            my $p = product(@$list[$i .. $j]);
            $max = [$p, @$list[$i .. $j]] if $p > $max->[0];
        }
    }
    return $max
}

use Test::More tests => 1;
is_deeply max_prod([2, 5, -1, 3]), [10, 2, 5];
```

<br>

The `max_prod` subroutine returns the product and the list in this order.

`Note`: Don’t confuse `max_prod` with [**Max Brod**](https://en.wikipedia.org/wiki/Max_Brod).

<br>

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2021**](/blog/advent-calendar-2021)
