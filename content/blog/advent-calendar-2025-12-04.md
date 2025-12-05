---
title: "Advent Calendar - December 4, 2025"
date: 2025-12-04T00:00:00+00:00
description: "Advent Calendar - December 4, 2025."
type: post
image: images/blog/2025-12-04.jpg
author: Peter Campbell Smith
tags: ["Perl"]
---

## [**Advent Calendar 2025**](/blog/advent-calendar-2025)
### | &nbsp; [**Day 3**](/blog/advent-calendar-2025-12-03) &nbsp; | &nbsp; **Day 4** &nbsp; | &nbsp; [**Day 5**](/blog/advent-calendar-2025-12-05) &nbsp; |
***

The gift is presented by `Peter Campbell Smith`. Today he is talking about his solution to [**The Weekly Challenge - 306**](/blog/perl-weekly-challenge-306). This is re-produced for `Advent Calendar 2025` from the original [**post**](http://ccgi.campbellsmiths.force9.co.uk/challenge/306).

***

<br>

## Task — Odd sum

You are given an array of positive integers, @ints. Write a script to return the sum of all possible odd-length subarrays of the given array. A subarray is a contiguous subsequence of the array.

## Examples

    Example 1
        Input: @ints = (2, 5, 3, 6, 4)
        Output: 77

        Odd length sub-arrays:
        (2) => 2
        (5) => 5
        (3) => 3
        (6) => 6
        (4) => 4
        (2, 5, 3) => 10
        (5, 3, 6) => 14
        (3, 6, 4) => 13
        (2, 5, 3, 6, 4) => 20
        Sum => 2 + 5 + 3 + 6 + 4 + 10 + 14 + 13 + 20 => 77

    Example 2
        Input: @ints = (1, 3)
        Output: 4

## Analysis

Once again, I can see two ways to do this.

**Method one**, which is what I have submitted, loops over the starting and ending elements of all odd-length subarrays, and adds the sum of each such subarray to an overall sum.

This works - a big plus! - but there is another way which might be faster for an enormous array of `@ints`.

**Method 2** involves creating an array `@mults`, such that the sum of `$mults[$i] * $ints[$i]` gives the required answer. The value of `$mults[$i]` is the number of subarrays that include `$ints[$i]`, and clearly is only a function of the length of `@ints` and not the actual values. However I think the time to calculate `@mults` is possibly of order `$n ** 2` where `$n` is the length of `@ints`.

I'll leave it to someone else to do it that way - and to show whether it is faster.

## Script

```perl
#!/usr/bin/perl

# Blog: http://ccgi.campbellsmiths.force9.co.uk/challenge

use v5.26;    # The Weekly Challenge - 2025-01-27
use utf8;     # Week 306 - task 1 - Odd sum
use warnings; # Peter Campbell Smith
binmode STDOUT, ':utf8';

odd_sum(2, 5, 3, 6, 4);
odd_sum(99);
odd_sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20);

sub odd_sum {

    my (@ints, $sum, $start, $end);

    # initialise
    @ints = @_;
    $sum = 0;

    # loop over start and end points
    for $start (0 .. $#ints) {
        for ($end = $start; $end <= $#ints; $end += 2) {
            $sum += $ints[$_] for $start .. $end;
        }
    }

    # report
    say qq[\nInput:  \@ints = (] . join(', ', @ints) . qq[)];
    say qq[Output: $sum];
}
```

<br>

## Output

```bash
Input:  @ints = (2, 5, 3, 6, 4)
Output: 77

Input:  @ints = (99)
Output: 99

Input:  @ints = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
13, 14, 15, 16, 17, 18, 19, 20)
Output: 8085
```

<br>

## Task — Last element

You are given a array of integers, @ints. Write a script to play a game where you pick two biggest integers in the given array, say x and y. Then do the following:

    a) if x == y then remove both from the given array
    b) if x != y then remove x and replace y with (y - x)

At the end of the game, there is at most one element left. Return the last element if found otherwise return 0.

## Examples

    Example 1
    Input: @ints = (3, 8, 5, 2, 9, 2)
    Output: 1

    Step 1: pick 8 and 9 => (3, 5, 2, 1, 2)
    Step 2: pick 3 and 5 => (2, 2, 1, 2)
    Step 3: pick 2 and 1 => (1, 2, 2)
    Step 4: pick 2 and 1 => (1, 2)
    Step 5: pick 1 and 2 => (1)

    Example 2
    Input: @ints = (3, 2, 5)
    Output: 0

    Step 1: pick 3 and 5 => (2, 2)
    Step 2: pick 2 and 2 => ()

## Analysis

In order to get the results in the examples it is necessary to require that `x > y`, which is not quite clear from the task description.

The order of `@ints` is not significant, so my solution starts by reverse-sorting it, so that `x` is `$ints[0]` and `y` is `$ints[1]`. I then apply the rules repetitively, using shift to pull `x` and `y` off `@ints`.

It is interesting to note that if `@ints` is populated with more than around `100` random positive integers, even with numbers up to a million or more, it almost always converges to `1` or to `0` (i.e. `1, 1`).

<br>

## Script

```perl
#!/usr/bin/perl

# Blog: http://ccgi.campbellsmiths.force9.co.uk/challenge

use v5.26;    # The Weekly Challenge - 2025-01-27
use utf8;     # Week 306 - task 2 - Last element
use warnings; # Peter Campbell Smith
binmode STDOUT, ':utf8';

last_element(3, 8, 5, 2, 9, 2);
last_element(3, 2, 5);
last_element(43, 21, 56, 86, 2, 69, 10, 43, 77, 30);

sub last_element {

    my (@ints, $x);

    # initialise
    @ints = @_;
    say qq[\nInput:  \@ints = (] . join(', ', @_) . ')';

    # loop until 0 or 1 element left
    while ($#ints > 0) {
        @ints = sort {$b <=> $a} @ints;

        # if x == y
        if ($ints[0] == $ints[1]) {
            shift @ints;
            shift @ints;

        # if x != y
        } else {
            $x = shift @ints;
            $ints[0] = $x - $ints[0];
        }
    }
    say qq[Output: ] . ($ints[0] or 0);
}
```

<br>

## Output

```bash
Input:  @ints = (3, 8, 5, 2, 9, 2)
Output: 1

Input:  @ints = (3, 2, 5)
Output: 0

Input:  @ints = (43, 21, 56, 86, 2, 69, 10, 43, 77, 30)
Output: 1
```

<br>

***

If you have any suggestion then please do share with us **<perlweeklychallenge@yahoo.com>**.

| &nbsp; [**Advent Calendar 2025**](/blog/advent-calendar-2025) &nbsp; |
