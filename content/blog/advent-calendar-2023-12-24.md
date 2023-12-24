---
title: "Advent Calendar - December 24, 2023"
date: 2023-12-24T00:00:00+00:00
description: "Advent Calendar - December 24, 2023."
type: post
image: images/blog/2023-12-24.jpg
author: Jorg Sommrey
tags: ["Perl"]
---

## [**Advent Calendar 2023**](/blog/advent-calendar-2023)
### | &nbsp; [**Day 23**](/blog/advent-calendar-2023-12-23) &nbsp; | &nbsp; **Day 24** &nbsp; |
***

The gift is presented by `Jorg Sommrey`. Today he is talking about his solution to [**The Weekly Challenge - 243**](/blog/perl-weekly-challenge-243). This is re-produced for `Advent Calendar 2023` from the original [**post**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-243/jo-37/blog/Blog.md).

***

<br>

## Count the Pairs on the Floor
***

### Task 1: Reverse Pairs

    You are given an array of integers.

    Write a script to return the number of reverse pairs in the given array.

    A reverse pair is a pair (i, j) where: a) 0 <= i < j < nums.length and b) nums[i] > 2 * nums[j].

    Example 1:
        Input: @nums = (1, 3, 2, 3, 1)
        Output: 2

        (1, 4) => nums[1] = 3, nums[4] = 1, 3 > 2 * 1
        (3, 4) => nums[3] = 3, nums[4] = 1, 3 > 2 * 1

    Example 2:
        Input: @nums = (2, 4, 3, 5, 1)
        Output: 3

        (1, 4) => nums[1] = 4, nums[4] = 1, 4 > 2 * 1
        (2, 4) => nums[2] = 3, nums[4] = 1, 3 > 2 * 1
        (3, 4) => nums[3] = 5, nums[4] = 1, 5 > 2 * 1

<br>

### Solution

Using the `Perl Data Language` to solve this task.

First we create a `1-d long ndarray` from the given numbers.

<br>

    $nums = long 1, 3, 2, 3, 1;

<br>

Then we create a sequence in the same shape as `$nums`, i.e. a `1-d ndarray` holding the column indices of `$nums` and a second sequence as a single column holding the row indices. When combining these index `ndarrays`, according to `PDL`'s broadcasting rules both will be extended by replicating along a dimension to fit each other. For visualization, these replications may be performed explicitly:

<br>

### A) Add a dummy dimension 1 to the row and replicate it five times.

<br>

    say sequence(5)->dup(1, 5);
    [
      [0 1 2 3 4]
     [0 1 2 3 4]
     [0 1 2 3 4]
     [0 1 2 3 4]
     [0 1 2 3 4]
    ]

<br>

### B) Replicate dimension 0 of the column five times.

<br>

    say sequence(1, 5)->dup(0, 5);
    [
      [0 0 0 0 0]
     [1 1 1 1 1]
     [2 2 2 2 2]
     [3 3 3 3 3]
     [4 4 4 4 4]
    ]

<br>

Hence we get an upper right triangular matrix of ones when comparing the indices:

<br>

    say sequence($nums) > sequence(1, $nums->dim(0));
    [
     [0 1 1 1 1]
     [0 0 1 1 1]
     [0 0 0 1 1]
     [0 0 0 0 1]
     [0 0 0 0 0]
    ]

<br>

In the same manner we can compare `$nums` as a column with itself as a doubled row:

<br>

    say $nums->dummy(0) > 2 * $nums
    [
     [0 0 0 0 0]
     [1 0 0 0 1]
     [0 0 0 0 0]
     [1 0 0 0 1]
     [0 0 0 0 0]
    ]

<br>

The `"bit and"` of both matrices literally follows the definition of reverse pairs. The sum over the and'ed matrices yields the total number of reverse pairs:

<br>

    ((sequence($nums) > sequence(1, $nums->dim(0)))
    & ($nums->dummy(0) > 2 * $nums))->sum;

<br>

```perl
#!/usr/bin/perl -s

use Test2::V0 '!float';
use PDL;

our ($tests, $examples);

run_tests() if $tests || $examples;    # does not return

die <<EOS unless @ARGV;
usage: $0 [-examples] [-tests] [--] [N...]

-examples
    run the examples from the challenge

-tests
    run some tests

N...
    list of integers

EOS


### Input and Output

say count_reverse_pairs(@ARGV);


### Implementation

# Count element pairs where $j > $i and $nums[$i] > 2 * $nums[$j].

sub count_reverse_pairs {
    my $nums = long @_;

    ((sequence($nums) > sequence(1, $nums->dim(0)))
        & ($nums->dummy(0) > 2 * $nums))->sum;
}


### Examples and tests

sub run_tests {
    SKIP: {
        skip "examples" unless $examples;

        is count_reverse_pairs(1, 3, 2, 3, 1), 2, 'example 1';
        is count_reverse_pairs(2, 4, 3, 5, 1), 3, 'example 2';
    }

    SKIP: {
        skip "tests" unless $tests;

        is count_reverse_pairs(1, 0, -1), 3, 'zero and negative';
    }

    done_testing;
    exit;
}
```

<br>

### Task 2: Floor Sum

    You are given an array of positive integers (>=1).

    Write a script to return the sum of floor(nums[i] / nums[j]) where 0 <= i,j < nums.length.
    The floor() function returns the integer part of the division.

    Example 1

        Input: @nums = (2, 5, 9)
        Output: 10

        floor(2 / 5) = 0
        floor(2 / 9) = 0
        floor(5 / 9) = 0
        floor(2 / 2) = 1
        floor(5 / 5) = 1
        floor(9 / 9) = 1
        floor(5 / 2) = 2
        floor(9 / 2) = 4
        floor(9 / 5) = 1

    Example 2

        Input: @nums = (7, 7, 7, 7, 7, 7, 7)
        Output: 49

<br>

### Solution

Again, using `PDL`.

Creating a `1-d double ndarray` from the given numbers:

<br>

    $nums = pdl 2, 5, 9;

<br>

Divide `$nums` as row by `$nums` as column in the same manner as in `task 1` and apply `floor()`:

<br>

    say floor $nums / $nums->dummy(0);
    [
      [1 2 4]
     [0 1 1]
     [0 0 1]
    ]

<br>

Finally, sum over this matrix:

<br>

    floor($nums / $nums->dummy(0))->sum;

<br>

This works not only for positive integers but for all non-zero integers.

<br>

```perl
#!/usr/bin/perl -s

use Test2::V0 '!float';
use PDL;

our ($tests, $examples);

run_tests() if $tests || $examples;    # does not return

die <<EOS unless @ARGV;
usage: $0 [-examples] [-tests] [N...]

-examples
    run the examples from the challenge

-tests
    run some tests

N...
    list of positive integers

EOS


### Input and Output

say floor_sum(@ARGV);


### Implementation

# Sum over floor($nums[$i] / $nums[$j]).

sub floor_sum {
    my $nums = pdl @_;

    floor($nums / $nums->dummy(0))->sum;
}


### Examples and tests

sub run_tests {
    SKIP: {
        skip "examples" unless $examples;

        is floor_sum(2, 5, 9), 10, 'example 1';
        is floor_sum(7, 7, 7, 7, 7, 7, 7), 49, 'example 2';
    }

    SKIP: {
        skip "tests" unless $tests;

        # floor(3 / (-2)) = -2
        # floor((-2) / 3) = -1
        is floor_sum(3, -2), -1, 'negative elements';
    }

    done_testing;
    exit;
}
```

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

| &nbsp; [**Advent Calendar 2023**](/blog/advent-calendar-2023) &nbsp; |
