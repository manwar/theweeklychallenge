---
title: "Advent Calendar - December 7, 2022"
date: 2022-12-07T00:00:00+00:00
description: "Advent Calendar - December 7, 2022."
type: post
image: images/blog/2022-12-07.jpg
author: Simon Green
tags: ["Perl", "Python"]
---

## [**Advent Calendar 2022**](/blog/advent-calendar-2022)
### | &nbsp; [**Day 6**](/blog/advent-calendar-2022-12-06) &nbsp; | &nbsp; **Day 7** &nbsp; |
***

The gift is presented by `Simon Green`. Today he is talking about his solution to [**"The Weekly Challenge - 157"**](/blog/perl-weekly-challenge-157). This is re-produced for **Advent Calendar 2022** from the original [**post**](https://dev.to/simongreennet/three-means-and-big-bases-3o2f) by him.

***

<br>

## Weekly Challenge 157

I'm back after the `three week hiatus!`

[[**Challenge**](https://theweeklychallenge.org/blog/perl-weekly-challenge-157/)]
<br>
[[**My solution**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-157/sgreen)]

<br>

## TASK #1 › Pythagorean Means

You are given a set of integers.

Write a script to compute all three [**Pythagorean Means**](https://en.wikipedia.org/wiki/Pythagorean_means) i.e `Arithmetic Mean`, `Geometric Mean` and `Harmonic Mean` of the given set of integers.

<br>

## My solution

<br>

This is a relatively straight forward task. `The Wikipedia` page provides the necessary formulas and we can use the `sum`, `reduce` and `lambda` functions to calculate the required figures. Finally we use the `round` function to print the results to one decimal place.

The `Perl` code is similar to the `Python` version, except we use the `product()` method in `List::Utils`. `Python`'s `math.product` is only available for `Python 3.8+`

One thing to note is if the sum of integers is `0`, a `division by zero error` might occur when calculating the harmonic mean. I'm not catching this and let the error pass to the user.

<br>

## Examples

<br>

```perl
$ ./ch-1.py 1 3 5 6 9
AM = 4.8, GM = 3.8, HM = 2.8

$ ./ch-1.py 2 4 6 8 10
AM = 6.0, GM = 5.2, HM = 4.4

$ ./ch-1.py 1 2 3 4 5
AM = 3.0, GM = 2.6, HM = 2.2
```

<br>

## TASK #2 › Brazilian Number

<br>

You are given a number `$n > 3`.

Write a script to find out if the given number is a `Brazilian Number`. A positive integer number `N` has at least one natural number `B` where `1 < B < N-1` where the representation of `N` in `base B` has [the] same digits.

<br>

## My solution

<br>

This was an interesting task. We can't convert numbers into a different base simply by using letters and numbers. For example `1282` is `22` in `base 640`, but how would you express `639` in the same base?

For this task I considered a value having the same digits even if the number itself has different digits. For example, `925` is express as `(25)(25)` in `base 36`.

The guts of this task is to convert the number n in `base 10` to a `specified base`, which I have called `b`. The function is called `same_digits`. I take the modulus (remainder) of `n` and `b` and make this value `d`. I then do an integer division and repeat this process comparing that `n % b` is `d`. I return `False` if any digit isn't the same, or `True` if they all are.

Then it's just a matter of having a loop from `2` to `n - 2`, and calling the `same_digits` function for each base. If there is a match, I print `1` (and the base), or `0` otherwise.

The `Perl` code is a transliteration of the `Python` code.

<br>

## Examples

<br>

```perl
$ ./ch-2.py 6
0

$ ./ch-2.py 7
1 (base 2)

$ ./ch-2.py 8
1 (base 3)
```

<br>

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

| &nbsp; [**Advent Calendar 2022**](/blog/advent-calendar-2022) &nbsp; |
