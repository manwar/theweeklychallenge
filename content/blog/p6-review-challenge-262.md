---
title: "Andrew Shitov Weekly Review: Challenge - 262"
date: 2024-04-07T00:00:00+00:00
description: "Andrew Shitov Weekly Review: Challenge - #262."
type: post
image: images/blog/p6-review-challenge-262.jpg
author: Andrew Shitov
tags: ["Raku"]
---
***
# Raku Solutions Weekly Review
***

# Task 1

The first task was to find and display the number of either positive or negative integers, whatever is larger.

Let us start from the easy part. In Raku, there is a a built-in `max` function (or method if you want to use an object notation: `@array.max`). So, the code is:

```raku
say max($neg, $pos);
```

where `$neg` and `$pos` are the numbers of negative and positive data items in the original array.

Now, the second part is to indeed get the number of positives and negatives. At least three methods come to mind:

## 1: for

Scan the array using `for` and count the numbers:

```
my @data = -3, 1, 2, -1, 3, -2, 4;

my $neg = 0;
my $pos = 0;
for @data -> $value {
    $neg++ if $value > 0;
    $pos++ if $value < 0;
}

say max($neg, $pos); # 4
```

This approach is used in the following solutions by:

- [**Asher Harvey-Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-262/ash/raku/ch-1.raku)
- [**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-262/athanasius/raku/ch-1.raku)

## 2: grep

The second way is to use `grep`, again as a method or as a function. For example:

```raku
say max(
    (@data.grep: * > 0).elems,
    (@data.grep: * < 0).elems
); # 4
```

If you prefer a more explicit syntax, use codeblocks instead of [the WhatEver `*` magic](https://perl6advent.wordpress.com/2017/12/11/all-the-stars-of-perl-6/):

```raku
say max(
    +(@data.grep({$_ > 0})),
    +(@data.grep({$_ < 0}))
); # 4
```

(Just to compensate the absense of magic, a unary `+` is used here to count the number of elements after each `grep`.)

A few people used this approach including myself:

- [**Andrew Shitov**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-262/ash/raku/ch-1.raku)
- [**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-262/arne-sommer/raku/ch-1.raku)
- [**BarrOff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-262/barroff/raku/ch-1.p6)
- [**Feng Chang**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-262/feng-chang/raku/ch-1.raku)
- [**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-262/laurent-rosenfeld/raku/ch-1.raku)
- [**Luca Ferrari**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-262/luca-ferrari/raku/ch-1.raku)
- [**Packy Anderson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-262/packy-anderson/raku/ch-1.raku) — using a `map` to convert the comparison with `0` to a Boolean equivalent: `my $pos = [+] @ints.map({ $_ > 0 ?? 1 !! 0 });`
- [**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-262/roger-bell-west/raku/ch-1.p6)
- [**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-262/ulrich-rieke/raku/ch-1.raku)

## 3: classify

The most sophisticated—and at the same time simple—way is to use [the `classify` routine](https://docs.raku.org/routine/classify), which already exists in Raku and is available without loading any modules. It gives the result in one go.

To see how it works with our input data, let’s add a zero element to it and dump the result of `classify`:

```raku
my @data = -3, 1, 2, -1, 3, -2, 4, 0;

dd (@data.classify: * <=> 0);
```

This program prints:

```
(my Any %{Any} = Order::Less => $[-3, -1, -2], Order::Same => $[0], Order::More => $[1, 2, 3, 4])
```

You can see that there are three elements classified as `Order::Less`—those which are less than `0`, four elements were marked as `Order::More`, and the zero item gave `Order::Same`, all in accordance to our condition `* <=> 0`.

Putting it back and getting the maximum of the clusters, here’s a possible program:

```raku
my @data = -3, 1, 2, -1, 3, -2, 4;

my $c = @data.classify: * <=> 0;
# Hash[Any,Any] $c = $(my Any %{Any} = Order::Less => $[-3, -1, -2], Order::More => $[1, 2, 3, 4])

my $d = $c.map: *.value.elems;
# Seq $d = $((4, 3).Seq)

dd $d.max; # 4
```

In the comments, you can see what the program computes on every step.

The submitted solutions utilising `classify`:

- [**Jan Krňávek**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-262/wambash/raku/ch-1.raku)
- [**Mark Anderson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-262/mark-anderson/raku/ch-1.raku)
- [**Robert Ransbottom**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-262/0rir/raku/ch-1.raku)

## 4: Bag!

In the submitted solutions, there is another interesting approach that uses `Bag`s. Perl does not directly support bags, so maybe that’s why they often come to mind later rather than earlier when solving tasks. When we do not need the key—value pairs as in hashes, `Bag` is a better choice. In our case, the value will be the number of items with the same magnitude that were put into the bag.

The core idea of the solution suggested by [Bruce Gray](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-262/bruce-gray/raku/ch-1.raku) is the following:

`my ( $negatives, $zeros, $positives ) = @ns».sign.Bag{-1, 0, 1};`

The input data `@ns` is first converted to an array that has the values `-1`, `0`, or `1` depending on the sign of the data item. For the first test sample it will be:

```raku
Array element = [-1, 1, 1, -1, 1, -1, 1]
```

The next step is to coerce this array to a bag and find the maximum:

```raku
return $negatives max $positives;
```
