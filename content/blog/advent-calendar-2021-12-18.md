---
title: "Advent Calendar - December 18, 2021"
date: 2021-12-18T00:00:00+00:00
description: "Advent Calendar - December 18, 2021."
type: post
image: images/blog/2021-12-18.jpg
author: Andrew Shitov
tags: ["Raku"]
---

[**Advent Calendar 2021**](/blog/advent-calendar-2021)
***

The gift is presented by [**Andrew Shitov**](/blog/meet-the-champion-2020-10). Today he is talking about his solution to [**"The Weekly Challenge - 092"**](/blog/perl-weekly-challenge-092). This is re-produced for **Advent Calendar 2021** from the original [**post**](https://andrewshitov.com/2020/12/22/raku-challenge-week-92-issue-1) by `Andrew Shitov`.

***

<br>

## Task #1: Isomorphic Strings

<br>

You are given two strings `$A` and `$B`.

Write a script to check if the given strings are `Isomorphic`. Print `1` if they are otherwise `0`.

<br>

***

<br>

OK, so if the two strings are isomorphic, their characters are mapped: for each character from the first string, the character at the same position in the second string is always the same.

In the stings `abc` and `def`, `a` always corresponds to `d`, `b` to `e`, and `c` to `f`. That’s a trivial case. But then for the string `abca`, the corresponding string must be `defd`.

The letters do not need to go sequentially, so the strings `aeiou` and `bcdfg` are isomorphic too, as well as `aeiou` and `gxypq`. But also `aaeeiioouu` and `bbccddffgg`, or the pair `aeaieoiuo` and `gxgyxpyqp`.

The definition also means that the number of different characters is equal in both strings. But it also means that if we make the pairs of corresponding letters, the number of unique pairs is also the same, right? If `a` matches `x`, there cannot be any other pair with the first letter `a`.

Let’s exploit these observation:

<br>

```perl6
sub is-isomorphic($a, $b) {
    +(([==] ($a, $b)>>.chars) &&
      ([==] ($a.comb, $b.comb, ($a.comb Z~ $b.comb))>>.unique));
}
```

<br>

First of all, the strings must have the same length.

Then, the strings are split into characters, and the number of unique characters should also be equal. But the collection of the unique pairs from the corresponding letters from both strings should also be of the same size.

Test it:

<br>

```perl6
use Test;

# . . .

is(is-isomorphic('abc', 'def'), 1);
is(is-isomorphic('abb', 'xyy'), 1);
is(is-isomorphic('sum', 'add'), 0);
is(is-isomorphic('ACAB', 'XCXY'), 1);
is(is-isomorphic('AAB', 'XYZ'), 0);
is(is-isomorphic('AAB', 'XXZ'), 1);
is(is-isomorphic('abc', 'abc'), 1);
is(is-isomorphic('abc', 'ab'), 0);
```

<br>

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2021**](/blog/advent-calendar-2021)
