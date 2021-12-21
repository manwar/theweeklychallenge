---
title: "Advent Calendar - December 6, 2021"
date: 2021-12-06T00:00:00+00:00
description: "Advent Calendar - December 6, 2021."
type: post
image: images/blog/2021-12-06.jpg
author: Aaron Smith
tags: ["Raku"]
---

## [**Advent Calendar 2021**](/blog/advent-calendar-2021)
### | [**Day 5**](/blog/advent-calendar-2021-12-05) | **Day 6** | [**Day 7**](/blog/advent-calendar-2021-12-07) |
***

The gift is presented by [**Aaron Smith**](/blog/meet-the-champion-2021-04). Today he is talking about his solution to [**"The Weekly Challenge - 102"**](/blog/perl-weekly-challenge-102). This is re-produced for **Advent Calendar 2021** from the original [**post**](https://aaronreidsmith.github.io/blog/perl-weekly-challenge-102) by `Aaron Smith`.

***

<br>

## Task #2: Hash-counting String

<br>

You are given a positive integer `$N`.

Write a script to produce Hash-counting string of that length.

The definition of a hash-counting string is as follows:

    - the string consists only of digits 0-9 and hashes, ‘#’
    - there are no two consecutive hashes: ‘##’ does not appear in your string
    - the last character is a hash
    - the number immediately preceding each hash (if it exists) is the position of that hash in the string, with the position being counted up from 1

<br>

***

<br>

### See below for explanation and any implementation-specific comments.

<br>

```perl6
ub challenge(Int $N) returns Str {
    my @output;
    my $index = $N - 1;
    while $index >= 0 {
        @output[$index] = '#';
        my $position = $index + 1; # Position is 1-based while index is 0-based
        for $position.flip.comb.kv -> $offset, $digit {
            @output[$index - ($offset + 1)] = $digit;
        }
        $index -= ($position.chars + 1);
    }
    @output.join;
}

sub MAIN(Int $N) {
    say challenge($N);
}
```

<br>

### This program runs as such:

<br>

```perl6
$ raku ch-2.raku 14
2#4#6#8#11#14#
```

<br>

## Explanation

<br>

We are given two really concrete details about the sequence:

<br>

    * the last character is a hash
    * the number immediately preceding each hash (if it exists) is the position of that hash in the string, with the position being counted up from 1

<br>

### Given that, we follow the following steps:

<br>

#### 1. Define an array (@output) and start from the end ($index = $N - 1, since the array is 0-indexed).

#### 2. While $index is greater-than-or-equal-to zero:

    * Set @output[$index] to #.
    * Find the 1-based index ($position) of that hash character ($index + 1).
    * Iterate backwards through the 1-based index and fill in the indices in front of the newly-placed # with the digits of $position.
    * Decrement $index by the amount of characters in $position + 1 (the 1 is for the hash character).

<br>

## Specific Comments

<br>

Nothing to add here; this one is pretty straight forward.

<br>

## Final Thoughts

<br>

It’s pretty cool that Raku has `.sqrt` built right in, but I find it odd that it doesn’t have some sort of .is-whole functionality (Python has `.is_integer()`, Scala has `.isWhole`). Maybe it does, and the documentation is just bad; it would not be the first time I have run into that! Honestly, if you read back through my blog, I think I have found 3 separate ways to check if a floating-point number (`Num`) is an integer (`Int`) in Raku. Oh well, I guess it is all part of the journey!

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2021**](/blog/advent-calendar-2021)
