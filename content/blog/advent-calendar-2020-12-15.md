---
title: "Advent Calendar - December 15, 2020"
date: 2020-12-22T00:00:00+00:00
description: "Advent Calendar - December 15, 2020."
type: post
image: images/blog/2020-12-15.jpg
author: Laurent Rosenfeld
tags: ["Perl","Raku"]
---

[**Advent Calendar 2020**](/blog/advent-calendar-2020)
***

The gift is presented by [**Laurent Rosenfeld**](https://perlweeklychallenge.org/blog/meet-the-champion-013), the first champion of the weekly challenge. Today he is talking about his solution to the task `Left Rotation` of **["The Weekly Challenge - 078"](/blog/perl-weekly-challenge-078)**. This is re-produced for **Advent Calendar 2020** from the original [**post**](http://blogs.perl.org/users/laurent_r/2020/09/perl-weekly-challenge-leader-element-and-left-rotation.html) by **Laurent Rosenfeld**.

***

# Left Rotation

You are given array `@A` containing positive numbers and `@B` containing one or more indices from the array `@A`.

Write a script to left rotate `@A` so that the number at the first index of `@B` becomes the first element in the array. Similary, left rotate `@A` again so that the number at the second index of `@B` becomes the first element in the array.

## Example 1:

    Input:
        @A = (10 20 30 40 50)
        @B = (3 4)

#### Explanation:

    a) We left rotate the 3rd index element (40) in the @A to make it 0th index member in the array.
            [40 50 10 20 30]

    b) We left rotate the 4th index element (50) in the @A to make it 0th index member in the array.
            [50 10 20 30 40]

    Output:
        [40 50 10 20 30]
        [50 10 20 30 40]

## Example 2:

    Input:
        @A = (7 4 2 6 3)
        @B = (1 3 4)

#### Explanation:

    a) We left rotate the 1st index element (4) in the @A to make it 0th index member in the array.
            [4 2 6 3 7]

    b) We left rotate the 3rd index element (6) in the @A to make it 0th index member in the array.
            [6 3 7 4 2]

    c) We left rotate the 4th index element (3) in the @A to make it 0th index member in the array.
            [3 7 4 2 6]

    Output:
        [4 2 6 3 7]
        [6 3 7 4 2]
        [3 7 4 2 6]

***

# Left Rotation in Raku

We can simply use array slices to get what we need. The only slight difficulty is that we need to flatten the two index slices into a single list.

```perl6
use v6;

my @a = 10, 20, 30, 40, 50;
my @indices = 3, 4;

say "Input array: ", @a;
for @indices -> $i {
    my @out = @a[($i..@a.end, 0..$i -1).flat];
    say @out;
}
```

## Output:

```perl6
$ raku left_rotate.raku
Input array: [10 20 30 40 50]
[40 50 10 20 30]
[50 10 20 30 40]
```

# Left Rotation in Perl

Again, we use array slices. Here, the only slight difficulty is the relatively heavy use of nested array references.

```perl
use strict;
use warnings;
use feature "say";

my @a = ( [[10, 20, 30, 40, 50],[3, 4]],
          [[7, 4, 2, 6, 3], [1, 3, 4]] );
left_rotate($_) for @a;

sub left_rotate {
    my $inref = shift;
    my ($in, $indices) = @$inref;
    say "\nInput array: @$in - Indices: @$indices";
        for my $i (@$indices){
        my @out = @$in[$i..$#{$in}, 0..$i -1];
        say "@out";
    }
}
```

## Output:

```perl
$ perl left_rotate.pl

Input array: 10 20 30 40 50 - Indices: 3 4
40 50 10 20 30
50 10 20 30 40

Input array: 7 4 2 6 3 - Indices: 1 3 4
4 2 6 3 7
6 3 7 4 2
3 7 4 2 6
```

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2020**](/blog/advent-calendar-2020)
