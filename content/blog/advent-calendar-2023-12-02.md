---
title: "Advent Calendar - December 2, 2023"
date: 2023-12-02T00:00:00+00:00
description: "Advent Calendar - December 2, 2023."
type: post
image: images/blog/2023-12-02.jpg
author: Bobby Lied
tags: ["Perl"]
---

## [**Advent Calendar 2023**](/blog/advent-calendar-2023)
### | &nbsp; [**Day 1**](/blog/advent-calendar-2023-12-01) &nbsp; | &nbsp; **Day 2** &nbsp; |
***

The gift is presented by `Bob Lied`. Today he is talking about his solution to [**The Weekly Challenge - 206**](/blog/perl-weekly-challenge-206). This is re-produced for `Advent Calendar 2023` from the original [**post**](https://dev.to/boblied/max-sum-of-minimum-pairs-35i7).

***

<br>

## Task : Array Pairings
***

`Perl Weekly Challenge` number `206` has a task called `"Array Pairings"` to solve:

<br>

    You are given an array of integers having even number of elements..
    Write a script to find the maximum sum of the minimum of each pairs.

<br>

The solution (spoiler alert) is to sort the list and take a slice of every other element. In the `Facebook Perl Programming` group, `Robbie Hatley` asks if we can prove that this is the optimal solution. Here's a proof.

Start by sorting the list descending, so that we have

<br>

```perl
a >= b >= c >= d >= ... x[1] >= x[0]
```

<br>

The first element, `a`, will be greater than anything it is paired with, so it will be eliminated from being in the sum. So what shall we pair with `a`? There are two choices: we can pair it with b, or we can pair it with something that is not `b`.

Suppose that we pair it with `b`. Then the resulting sum will be `b + sum(x[i])`, where all the `x[i]` are less than or equal to b. Let's call this `S1`. The maximum value of `S1` will be if all the list elements are equal to `b`, so `S1 <= b + mb`, where `m` is the number of other pairs contributing to the sum.

Now suppose we take the other choice, a number less than (or equal to) `b` from further down the sorted list; let's call it `x[j]`. The resulting sum, let's call it `S2`, will now have a maximum value of `S2 <= x[j] + mb`.

`S2` must be less than or equal to `S1`, because `x[j] <= b`. So, our best choice to maximize the sum is to pair `a` with `b`.

Having disposed of `a` and `b`, consider the next highest value, `c`. The same reasoning applies: `d` will be the best choice to pair with `c` to maximize the sum. We can proceed down the whole list this way.

The `Perl` solution is a small function that exploits some language features:

<br>

```perl
sub arrayPairs($list)
{
    my @oddIndex = map { $_ * 2 + 1 } 0 .. int( $#{$list} / 2 );
    return sum(  (sort { $b <=> $a } $list->@*)[@oddIndex] );
}
```

<br>

#### * `sub arrayPairs($list)` -- we are using function signatures from `Perl 5.36`. `$list` is a reference to an array of numbers.
#### * `$#{$list}` -- yields the last index of the list (an odd number because we are given that the list has an even number of elements and we index starting from 0).
#### * `0 .. int($#{$list}/2)` -- the range operator generates a list of integers from `0` to half the size of `$list`.
#### * `map { $_ * 2 + 1 }` -- applies the code between the braces to each element of the range. This generates the list `1,3,5,...`
#### * `$list->@*` -- array postfix dereferencing (catchy name) yields the entire array from a reference. We could have used `@$list`, but I've come to use the `->` form consistently.
#### * `sort { $b <=> $a }` -- sorts numerically in descending order. This is idiomatic in `Perl`, using the three-way comparison operator `<=>`. The default sort is for strings.
#### * `(sort ...)[]` -- The sort returns a sorted array. Instead of assigning to a temporary variable, we can index directly into the resulting array by enclosing it in parentheses like this.
#### * `(sort ..)[@oddIndex]` -- Using an array as the index selects more than one value (a slice) from the sorted array. I used the list of odd numbers we generated on the previous line. I could have put that expression in-line within the square brackets, but let's concede something to readability.
#### * `sum((sort..)[..])` -- The `sum` function comes from the `List::Util` module

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

| &nbsp; [**Advent Calendar 2023**](/blog/advent-calendar-2023) &nbsp; |
