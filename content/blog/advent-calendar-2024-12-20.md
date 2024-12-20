---
title: "Advent Calendar - December 20, 2024"
date: 2024-12-20T00:00:00+00:00
description: "Advent Calendar - December 20, 2024."
type: post
image: images/blog/2024-12-20.jpg
author: BarrOff
tags: ["Raku", "BQN"]
---

## [**Advent Calendar 2024**](/blog/advent-calendar-2024)
### | &nbsp; [**Day 19**](/blog/advent-calendar-2024-12-19) &nbsp; | &nbsp; **Day 20** &nbsp; |
***

The gift is presented by `BarrOff`. Today he is talking about his solution to [**The Weekly Challenge - 260**](/blog/perl-weekly-challenge-260). This is re-produced for `Advent Calendar 2024` from the original [**post**](https://barroff.codeberg.page/2024/03/occurrences-with-bqn).

***

<br>

## Occurrences with BQN
***

<br>

### Task #1: Unique Occurrences

    You are given an array of integers, @ints.

    Write a script to return 1 if the number of occurrences of each value in the given array is unique or 0 otherwise.

<br>

The following algorithm solves the problem:

    1. get a list of all available numbers
    2. for each number compare it to each list element, creating a matrix
    3. sum up each row to get the count per number
    4. classify this list
    5. reduce the classified list with a logical and

<br>

This task is well suited for `BQN` to show its’ array processing strength:

<br>

```perl
UniqueOccurrences ← ∧´∘∊(+´˘(∊/⊢)=⌜⊢)
```

<br>

The first step of the algorithm is represented by the innermost brackets `(∊/⊢)`. Here I used an instrument of tacit programming, a train. The argument gets passed to classify, returning a list of the same length. However, the first occurrence of each number in the original argument is replaced with a one, otherwise a zero. The right function of this train is simply the right identity function and returns its argument unaltered. Replicate takes both results and filters the list. This function is itself a left part of the train `(∊/⊢)=⌜⊢` which implements step two. Now that a suitable matrix has been created, `+´˘` sums them up. Notice the need to use the Cells modifier to sum row wise. Step four is just applying classify to the occurrence counts. The atop combinator is necessary, else the logical reduction, classify and the right bracket expression would form a train. Then the last step is achieved by applying the fold modifier to the and function.

In contrast a Raku implementation:

<br>

```perl
sub unique-occurrences(@ints --> Int:D) {
    my @bag_values = Bag(@ints).values;
    @bag_values.unique.elems == @bag_values.elems ?? 1 !! 0;
}
```

<br>

Raku’s `Bag` class makes this task a breeze. It automatically sums up each occurrences for each element and makes the result easily accessible in a dictionary like manner. If each value is unique, applying .unique.elems is the same as directly using the method `.elems`. The function uses this to determine the return value.

<br>

### Task #2: Dictionary Rank

    You are given a word, $word.

    Write a script to compute the dictionary rank of the given word.

<br>

```perl
sub dictionary-rank(Str:D $word --> Int:D) {
    my @words = $word.comb.permutations.map({ $_.join }).unique.sort;
    return 1 + @words.first: * eq $word, :k;
}
```

<br>

***

If you have any suggestion then please do share with us **<perlweeklychallenge@yahoo.com>**.

| &nbsp; [**Advent Calendar 2024**](/blog/advent-calendar-2024) &nbsp; |
