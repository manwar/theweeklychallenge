---
title: "Advent Calendar - December 11, 2024"
date: 2024-12-11T00:00:00+00:00
description: "Advent Calendar - December 11, 2024."
type: post
image: images/blog/2024-12-11.jpg
author: Simon Green
tags: ["Perl", "Python"]
---

## [**Advent Calendar 2024**](/blog/advent-calendar-2024)
### | &nbsp; [**Day 10**](/blog/advent-calendar-2024-12-10) &nbsp; | &nbsp; **Day 11** &nbsp; | &nbsp; [**Day 12**](/blog/advent-calendar-2024-12-12) &nbsp; |
***

The gift is presented by `Simon Green`. Today he is talking about his solution to [**The Weekly Challenge - 261**](/blog/perl-weekly-challenge-261). This is re-produced for `Advent Calendar 2024` from the original [**post**](https://dev.to/simongreennet/weekly-challenge-261-3pg1).

***

<br>

## Weekly Challenge 261
***

<br>

### Task #1: Element Digit Sum
***

<br>

    You are given an array of integers, @ints.

    Write a script to evaluate the absolute difference between element and digit sum of the given arra

<br>

### My solution
***

Given that `Perl` doesn't care (most of the time) between numbers and strings, this is one of those challenges that is easier to do in `Perl`.

<br>

```perl
my $element_sum = sum(@ints);
my $digit_sum   = sum( map { split // } @ints );
say abs( $element_sum - $digit_sum );
```

<br>

The `sum` function comes from `List::Util`. The first line gets the sum of the elements. The second line splits the integers by the digits and calculates the sum. The final line calculates and display the absolute difference.

My `Python` solution is as follows

<br>

```perl
def element_digit_sum(ints: list) -> int:
    element_sum = sum(ints)
    digit_sum = sum(int(i) for s in map(str, ints) for i in s)
    return abs(element_sum - digit_sum)
```

<br>

It follows the same logic and the `Perl` code. The second line does the following

<br>

    - map(str, ints) turns the list of integers into a generator of strings
    - for s in iterates over the generator
    - for i in s iterates over each character in the string
    - int(i) turns that character into an integer
    - sum() turns the list of integers into a sum of the values

<br>

### Examples
***

<br>

```perl
$ ./ch-1.py 1 2 3 45
36

$ ./ch-1.py 1 12 3
9

$ ./ch-1.py 1 2 3 4
0

$ ./ch-1.py 236 416 336 350
1296
```

<br>

### Task #2: Dictionary Rank
***

<br>

    You are given an array of integers, @ints and an integer $start..

    Write a script to do the following:

        1) Look for $start in the array @ints, if found multiply the number by 2
        2) If not found stop the process otherwise repeat

    In the end return the final value.

<br>

### My solution
***

<br>

This seems relatively straight forward. I keep multiplying the start by two until the value does not appear in the list. For performance, I could have converted the list into a set (hash in `Perl`), as checking in-ness (is that a word?) is faster that way. However, we are dealing with a small list, so it is not required.

<br>

```perl
def multiple_by_two(ints: list, start: int) -> int:
    solution = start
    while solution in ints:
        solution *= 2

    return solution
```

<br>

### Examples
***

<br>

```perl
$ ./ch-2.py 5 3 6 1 12 3
24

$ ./ch-2.py 1 2 4 3 1
8

$ ./ch-2.py 5 6 7 2
2
```

<br>

***

If you have any suggestion then please do share with us **<perlweeklychallenge@yahoo.com>**.

| &nbsp; [**Advent Calendar 2024**](/blog/advent-calendar-2024) &nbsp; |
