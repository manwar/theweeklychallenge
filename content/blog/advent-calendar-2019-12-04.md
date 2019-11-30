---
title: "Advent Calendar - December 4, 2019"
date: 2019-11-30T00:00:00+00:00
description: "Advent Calendar - December 4, 2019"
type: post
image: images/blog/2019-12-04.jpg
author: E. Choroba
tags: ["Perl"]
---

[**Advent Calendar 2019**](/blog/advent-calendar-2019)
***

The gift is presented by [**E. Choroba**](https://perlweeklychallenge.org/blog/meet-the-champion-018). Today he is talking about his solutions to **Task #2: Hofstadter Female and Male Sequences** of [**"The Weekly Challenge - 013"**](/blog/perl-weekly-challenge-013).

#### Write a script to demonstrate Mutually Recursive methods. Two methods are mutually recursive if the first method calls the second and the second calls first in turn. Using the mutually recursive methods, generate [Hofstadter Female and Male sequences](https://en.wikipedia.org/wiki/Hofstadter_sequence#Hofstadter_Female_and_Male_sequences).

***

I used **Function::Parameters** to make the definition of the functions as close as possible to the ones given at Wikipedia.

```perl
#!/usr/bin/perl
use warnings;
use strict;

use Function::Parameters;

fun F ($n) { $n ? $n - M(F($n - 1)) : 1 }
fun M ($n) { $n ? $n - F(M($n - 1)) : 0 }

use Test::More;

is_deeply
    [map F($_), 0 .. 20],
    [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6, 7, 8, 8, 9, 9, 10, 11, 11, 12, 13];

is_deeply
    [map M($_), 0 .. 20],
    [0, 0, 1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 7, 8, 9, 9, 10, 11, 11, 12, 12];

done_testing();
```

It works, but we aren’t done yet. Try using a larger **$n**, e.g. **99**. On my machine, it takes about **1.3 seconds**, and it gives the warning

    Deep recursion on subroutine "main::F" at ...

twice. Using even larger **$n**’s slows the program rapidly and the number of the warnings grows.

If we analyse the flow of the program, we’ll see that we’re counting the function many times with the same argument. We can speed up our code by caching the return value for each argument. There’s even a core module (**since 5.8**) to do that for us: **Memoize**. Adding the following two lines makes the program finish in under **0.07 seconds**:

```perl
use Memoize;
memoize('F', 'M');
```

Lightning fast! Why don't we use memoization all the time?

There are two reasons. First, it only works for pure functions, i.e. subroutines whose output only depends on the input values, with no side effects. And second, we pay a price for each memoized value: it has to be stored somewhere, right?

In fact, memoizing just one of the functions gives almost the same speed benefit (we only call the other function once for each **$n**), but consumes only half the memory.

***
***
If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2019**](/blog/advent-calendar-2019)
