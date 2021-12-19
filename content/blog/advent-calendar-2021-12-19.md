---
title: "Advent Calendar - December 19, 2021"
date: 2021-12-19T00:00:00+00:00
description: "Advent Calendar - December 19, 2021."
type: post
image: images/blog/2021-12-19.jpg
author: Jorg Sommrey
tags: ["Perl"]
---

[**Advent Calendar 2021**](/blog/advent-calendar-2021)
***

The gift is presented by [**Jorg Sommrey**](/blog/meet-the-champion-2021-08). Today he is talking about his solution to [**"The Weekly Challenge - 085"**](/blog/perl-weekly-challenge-085). This is re-produced for **Advent Calendar 2021** from the original [**post**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-085/jo-37/perl/ch-1.md) by `Jorg Sommrey`.

***

<br>

## Task #1: Triplet Sum

<br>

You are given an array of real numbers greater than zero.

Write a script to find if there exists a triplet `(a,b,c)` such that `1 < a+b+c < 2`. Print `1` if you succeed otherwise `0`.

<br>

***

<br>

## Motivation

<br>

The first attempt to solve this task was a simple combinatorical approach as given in `triplet_sum_combine`. To reduce the search space, some sanity checks were added that would possibly exclude some of the elements. The idea behind it: If a number plus the smallest sum of two other numbers exceeds 2, this number cannot be part of a valid triplet. And the other way round: If a number plus the largest sum of two other numbers is below one, it cannot be part of a valid triplet neither.

This worked well from the beginning, but one piece was missing: There was no test case with a proper list of reduced numbers that failed the combinatorical part. Finding such numbers appeared difficult at first and turned out to be impossible, leading to an unexpected solution to the task.

Trying to find such a non-existent combination of numbers satisfying the filter conditions but violating the sum conditions revealed the complex dependencies between these numbers. Driving one number towards a certain limit never led to a violation of a sum condition but instead to the existence of a new valid triplet or the removal of a number from the reduced list. This experience led to the title `Interwoven numbers`.

<br>

## List reduction

<br>

Let `sps` be the smallest partial sum of two of the given numbers and `lps` be the largest partial sum. These are easily found after the numbers have been sorted. The list of numbers is then reduced by (repeatedly) applying the filter.

<br>

     m > 1 - lps && m < 2 - sps

<br>

on the members m of the list.

The filter condition consists of two parts:

<br>

    m < 2 - sps
    m > 1 - lps

<br>

For the second expression to take effect, `lps` has to be smaller than one, requiring all numbers and sps to be smaller than one, too. But in this case all numbers comply to the first part of the filter condition, making it a no-op, which in turn leaves lps unchanged as there is no modification at the larger values of the list. In summary, a list modification at the lower values can occur only once.

As a consequence, the value of `sps` in the first expression may change only once and thus the whole filter will stay unmodified after it has been applied twice, making two the maximum number of required filter applications.

Note: The maximum loop count of two holds provided that the list has a length of three or more. (Otherwise lower and larger values coincide, invalidating the reasoning.) Shorter lists can be ignored as these reveal the non-existence of a solution anyway.

<br>

## Characteristics of a reduced list

<br>

A list shall be called `reduced list` if it is stable under the list reduction filter. When the filter has been applied twice to a list, it is a reduced list.

If a reduced list consists of less than three elements, then there is obviously no triplet conforming to the sum conditions.

It is easy to see that a reduced list consisting of three elements represents a valid triplet.

So we need to analyse a reduced list consisting of four or more elements.

Let `a`, `b`, `c` and `d` be the smallest and the largest two numbers of the reduced list. Then we have:

<br>

    sps = a + b
    lps = c + d

<br>

Considering the filter conditions of a reduced list and the order of the list elements leads to the following chain of inequalities:

<br>

    C) 1 - c - d < a <= b <= c <= d < 2 - a - b

<br>

There are three fundamental triplets built from these four elements that shall be identified by the missing part as follows:

<br>

    Xb:     (a, c, d)       s_xb = a + c + d
    Xc:     (a, b, d)       s_xc = a + b + d
    Xd:     (a, b, c)       s_xd = a + b + c

<br>

We now distinguish four cases depending on the values of `d` and `s_xb`:

<br>

### Case 1: d > 1

<br>

From C) and the condition of case 1 follows:

<br>

      a + b + d < 2
      a + b + d > d > 1

<br>

i.e.

<br>

      1 < s_xc < 2

<br>

Thus `Xc` is a valid triplet.

<br>

### Case 2: d < 2/3

<br>

From C) and the condition of case 2 follows:

<br>

     a + c + d > 1
     a + c + d <= 3 * d < 3 * 2/3 = 2

<br>

i.e.

<br>

     1 < s_xb < 2

<br>

Hence `Xb` is a valid triplet.

<br>

### Case 3: 2/3 <= d <= 1 and s_xb < 2

<br>

Here we have from C) and the condition above:

<br>

      a + c + d > 1
      a + c + d = s_xb < 2

<br>

This identifies `Xb` as a valid triplet.

<br>

### Case 4: 2/3 <= d <= 1 and s_xb >= 2

<br>

This is the most interesting and complex case. Note that there are numbers `a`, `b` and `c` satisfying the condition `s_xb >= 2` because of `2/3 <= d`.

From C) and the conditions of case 4 we conclude:

<br>

    2 <= s_xb = a + c + d < a + c + 1
    1 < a + c

<br>

which in turn leads to:

<br>

    2 > a + b + d >= a + b + c = a + c + b > 1 + b > 1
    2 > a + b + c = s_xd > 1

<br>

This reveals `Xd` as a valid triplet.

In summary, solely from the existence of a reduced list consisting of three or more members we may conclude the existence of a valid triplet. Furthermore, there is a fixed set of three triplets that contains at least one valid triplet. This provides a source for a solution to the given task.

There are some test cases at the end of the script comparing the results from the reduced set implementation with a combinatorical approach for a number of random sets.

<br>

## Conclusion

<br>

Utilizing these findings, the task can be solved by `grep'ing` twice over the list of numbers and then simply comparing the result's length against three.

<br>

## Solution in Perl

<br>

```perl
#!/usr/bin/perl

use 5.012;
use Test2::V0;
use List::Util qw(sum any);
use Algorithm::Combinatorics 'combinations';
use Benchmark 'cmpthese';

# Uncomment to enable debugging output and plausibility checks:
#$::verbose = 1;

# Check if there are three numbers from a given list having a sum
# between one and two.  Verbose "reduced list" implementation.
sub triplet_sum {
    return if @_ < 3;

    say "###" if $::verbose;
    # Need to sort the list in order to identify the two smallest and
    # largest values, not only min and max.
    my @nums = sort {$a <=> $b} @_;
    do {local $" = ', '; say "nums: (@nums)"} if $::verbose;

    # No more than two loops are required.
    for (1 .. 2) {
        @nums = grep {
                $_ > 1 - $nums[$#nums - 1] - $nums[$#nums] &&
                $_ < 2 - $nums[0] - $nums[1]
            } @nums;
        do {local $" = ', '; say "reduced: (@nums)"} if $::verbose;

        last if @nums < 3;
    }

    # Unique solution:
    say "sum: ", sum @nums if $::verbose && @nums == 3;

    # Candidate triplet sums:
    if ($::verbose && @nums > 3) {
        # At least one of these is valid:
        say "s_xb: ", sum @nums[0, $#nums - 1, $#nums];
        say "s_xc: ", sum @nums[0, 1, $#nums];
        say "s_xd: ", sum @nums[0, 1, $#nums - 1];
    }

    # Any proper number of elements ensures a valid triplet.
    @nums >= 3;
}

# Terse reference implementation systematically trying combinations of
# three elements.
sub triplet_sum_combine {
    any {any {1 < $_ && $_ < 2} sum @$_} combinations \@_, 3;
}

is triplet_sum(1.2, 0.4, 0.1, 2.5), T(), 'Example 1';
is triplet_sum(0.2, 1.5, 0.9, 1.1), F(), 'Example 2';
is triplet_sum(0.5, 1.1, 0.3, 0.7), T(), 'Example 3';

is triplet_sum(0.1, 0.2, 0.6, 1.4), T(), 'Case 1';
is triplet_sum(0.1, 0.2, 0.4, 0.6), T(), 'Case 2';
is triplet_sum(0.1, 0.15, 0.4, 0.7), T(), 'Case 3';
is triplet_sum(0.55, 0.6, 0.7, 0.8), T(), 'Case 4';

# A carefully crafted, very rare case where the second reduce step
# actually modifies the list:
is triplet_sum(0.15, 0.2, 0.3, 0.4, 1.8, 1.9), F(),
    'effective second reduce step';

SKIP:
for (1 .. 10) {
    skip 'plausibility checks' unless $::verbose;

    # First generate the maximum and then a list of smaller values
    # of variable length.
    my @num = (rand 2);
    push @num, rand $num[0] for 1 .. 3 + rand 5;
    $_ = 0 + sprintf '%.3f', $_ for @num;

    is triplet_sum(@num), triplet_sum_combine(@num), 'plausibility check';
}

done_testing;

{
    local our $verbose;

    # Uniformly distributed numbers in ascending order.
    my @rand = sort  map rand(2), 1 .. 10;

    say "Benchmark:";
    cmpthese(-1, {
            reduce => sub {triplet_sum(@rand)},
            combine => sub {triplet_sum_combine(@rand)}
        });
}
```

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2021**](/blog/advent-calendar-2021)
