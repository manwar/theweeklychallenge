---
title: "Advent Calendar - December 2, 2024"
date: 2024-12-02T00:00:00+00:00
description: "Advent Calendar - December 2, 2024."
type: post
image: images/blog/2024-12-02.jpg
author: Jorg Sommrey
tags: ["Perl"]
---

## [**Advent Calendar 2024**](/blog/advent-calendar-2024)
### | &nbsp; [**Day 1**](/blog/advent-calendar-2024-12-01) &nbsp; | &nbsp; **Day 2** &nbsp; | &nbsp; [**Day 3**](/blog/advent-calendar-2024-12-03) &nbsp; |
***

The gift is presented by `Jorg Sommrey`. Today he is talking about his solution to [**The Weekly Challenge - 252**](/blog/perl-weekly-challenge-252). This is re-produced for `Advent Calendar 2024` from the original [**post**](https://github.sommrey.de/the-bears-den/2024/01/16/ch-252.html).

***

<br>

## Special Zeroes
***

<br>

#### Task 1: Special Numbers
***

    You are given an array of integers, @ints.

    Write a script to find the sum of the squares of all special elements of the given array.

    An element $int[i] of @ints is called special if i divides n, i.e. n % i == 0.
    Where n is the length of the given array.
    Also the array is 1-indexed for the task.

<br>

#### Solution
***

We need to sum over the squared values of all elements having an `1-based` index that divides the size of `@ints`. There is [**divisors**](https://metacpan.org/pod/Math::Prime::Util#divisors) in [**Math::Prime::Util**](https://metacpan.org/pod/Math::Prime::Util) that provides all divisors of a given number and there is [**PDL**](https://metacpan.org/pod/PDL) that can pick [**slices**](https://metacpan.org/pod/PDL::NiceSlice#Argument-formats) off, calculate the element-wise [**power**](https://metacpan.org/pod/PDL::Math#pow) of and the [**sum**](https://metacpan.org/pod/PDL::Ufunc#sum) over an `ndarray`.

Putting these together in a single statement:

<br>

```perl
use PDL;
use PDL::NiceSlice;
use Math::Prime::Util 'divisors';

sub snss {
    sum pdl(@_)->(indx(divisors @_) - 1) ** 2
}
```

<br>

See the [**full solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-252/jo-37/perl/ch-1.pl)

<br>

#### Task 2: Unique Sum Zero
***

    You are given an integer, $n.

    Write a script to find an array containing $n unique integers such that they add up to zero.

<br>

#### Solution
***

There are trivial solutions for `even` and `odd` values of `$n`:

    - pairs of positive and negative integers with the same absolute value are distinct and sum to zero
    - adding a zero to such a list keeps the sum at zero, but provides an odd number of elements

<br>

This results in:

<br>

```perl
use experimental 'signatures';

sub uniq_sum_zero ($n) {
    (-$n / 2 .. -1, (0) x ($n % 2), 1 .. $n / 2);
}
```

<br>

See the [**full solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-252/jo-37/perl/ch-2.pl)

<br>

***

If you have any suggestion then please do share with us **<perlweeklychallenge@yahoo.com>**.

| &nbsp; [**Advent Calendar 2024**](/blog/advent-calendar-2024) &nbsp; |
