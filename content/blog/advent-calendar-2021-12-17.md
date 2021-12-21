---
title: "Advent Calendar - December 17, 2021"
date: 2021-12-17T00:00:00+00:00
description: "Advent Calendar - December 17, 2021."
type: post
image: images/blog/2021-12-17.jpg
author: Walt Mankowski
tags: ["Perl"]
---

## [**Advent Calendar 2021**](/blog/advent-calendar-2021)
### | [**Day 16**](/blog/advent-calendar-2021-12-16) | **Day 17** | [**Day 18**](/blog/advent-calendar-2021-12-18) |
***

The gift is presented by [**Walt Mankowski**](/blog/meet-the-champion-2020-07). Today he is talking about his solution to [**"The Weekly Challenge - 089"**](/blog/perl-weekly-challenge-089). This is re-produced for **Advent Calendar 2021** from the original [**post**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/walt-mankowski/README.md) by `Walt Mankoswki`.

***

<br>

## Task #2: Magical Matrix

<br>

Write a script to display matrix as below with numbers `1 - 9`. Please make sure numbers are used once.

<br>

    [ a b c ]
    [ d e f ]
    [ g h i ]

<br>

So that it satisfies the following:

<br>

    a + b + c = 15
    d + e + f = 15
    g + h + i = 15
    a + d + g = 15
    b + e + h = 15
    c + f + i = 15
    a + e + i = 15
    c + e + g = 15

<br>

***

<br>

For this task we need to create a `3 x 3` magic square; i.e. a matrix where each row, column, and diagonal sums to the same value. We're restricted to the numbers `1-9`, so the sums should all be `15`.

This is trivial in `Matlab` and `Octave` since there's a built in function to create magic squares, so all we need to do is say

<br>

    magic(3)

<br>

We have to do a bit more work in `Perl`, but fortunately there's a simple algorithm for creating these sorts of magic squares called the `Siamese` method. It works for any `m x m` magic square where `m is odd`. Here's the algorithm:

<br>

#### 1. Start with a 1 in the middle column of the top row.

<br>

#### 2. For each subsequent number, try to move to the cell to the northeast (1 row up and 1 column right), wrapping around to the left and bottom when we reach the edge.

<br>

#### 3. If that cell is occupied, move one 1 down (wrapping around to the top if we're on the bottom row) instead of moving to the northeast.

<br>

This is easy to do in `Perl`, and we don't even have to initialize the matrix.

<br>

```perl
my @m;
my $m = 3;
my $r = 0;
my $c = 1;

# fill in the magic square using the Siamese method
for my $i (1..9) {
    $m[$r][$c] = $i;
    my $r1 = ($r - 1) % $m;
    my $c1 = ($c + 1) % $m;
    if (defined $m[$r1][$c1]) {
        $r = ($r + 1) % $m;
    } else {
        $r = $r1;
        $c = $c1;
    }
}
```
<br>

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2021**](/blog/advent-calendar-2021)
