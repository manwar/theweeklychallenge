---
title: "Advent Calendar - December 18, 2023"
date: 2023-12-18T00:00:00+00:00
description: "Advent Calendar - December 18, 2023."
type: post
image: images/blog/2023-12-18.jpg
author: Lubos Kolouch
tags: ["Perl", "Python"]
---

## [**Advent Calendar 2023**](/blog/advent-calendar-2023)
### | &nbsp; [**Day 17**](/blog/advent-calendar-2023-12-17) &nbsp; | &nbsp; **Day 18** &nbsp; |
***

The gift is presented by `Lubos Kolouch`. Today he is talking about his solution to [**The Weekly Challenge - 233**](/blog/perl-weekly-challenge-233). This is re-produced for `Advent Calendar 2023` from the original [**post**](https://egroup.kolouch.org/nextcloud/sites/lubos/2023-09-04_Weekly_challenge_233).

***

<br>

## Task 1 - Similar Words
***

### Introduction

Programming often presents challenges that may seem trivial at first glance, but when delved into, bring out intriguing nuances. One such problem is identifying words with similar character sets. Here, we'll unravel the problem and explore its efficient solutions in both `Perl` and `Python`.

<br>

### Problem Statement

Given an array of words composed of alphabets only, find the number of pairs of similar words. Two words are considered similar if they consist of the same characters, irrespective of frequency.

For instance, for the words ["aba", "aabb", "abcd", "bac", "aabc"], there are two similar pairs: ("aba", "aabb") and ("bac", "aabc").

<br>

### Perl Solution

`Perl`, with its rich text processing capabilities, offers a neat solution to the problem:

1. Convert each word into its set of unique characters.

2. Use a hash to count occurrences of each unique set.

3. Calculate the total count of similar words using the combinations formula.

<br>

```perl
use strict;
use warnings;
use Test::More;

sub similar_words_perl {
    my @words = @_;
    my %count;

    # Convert words into a set of unique characters and count occurrences
    for my $word (@words) {
        my $unique_chars = join '', sort keys %{{ map { $_ => 1 } split //, $word }};
        $count{$unique_chars}++;
    }

    # Calculate total count of similar words
    my $total = 0;
    for my $v (values %count) {
        $total += $v * ($v - 1) / 2;
    }

    return $total;
}
```

<br>

### The Pythonic Approach

`Python`, with its simplicity and robust standard library, also provides a compact solution:

1. Convert each word into its set of unique characters.

2. Use `Python`'s Counter to count occurrences of each unique set.

3. Compute the total count of similar words using the combinations formula.

<br>

```perl
from collections import Counter
from typing import List

def similar_words_pythonic(words: List[str]) -> int:
    """
    Calculate the total count of similar words in the given list of words.

    A word is considered similar to another if they have the exact same set of characters.

    Parameters:
    - words (List[str]): A list of words to be checked.

    Returns:
    - int: The total count of similar words.
    """

    # Convert words into a set of unique characters
    unique_sets = [frozenset(word) for word in words]

    # Count occurrences of each unique set
    set_counts = Counter(unique_sets)

    # Calculate total count of similar words
    count = sum(v * (v - 1) // 2 for v in set_counts.values())

    return count
```

<br>

### Concluding Thoughts

The `"Similar Words"` problem provides an engaging journey into the world of character set comparisons. While the challenge may appear straightforward, it brings to light the importance of understanding the problem's nuances. Both `Perl` and `Python`, with their distinctive strengths, offer elegant solutions, exemplifying the beauty of programming languages and the joy of problem-solving.

<br>

## Task 2 - Frequency Sort
***

### Introduction

Sorting is a fundamental operation in computer science, and while we have standard algorithms like `quicksort`, `mergesort`, etc., sometimes, we need to sort based on custom criteria. One such interesting problem is to sort numbers based on their frequency of occurrence. In this article, we'll explore solutions in both `Perl` and `Python` for this intriguing problem.

<br>

### Problem Statement

Given an array of integers, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.

<br>

### Perl Solution

In `Perl`, our approach involves two main steps:

1. Count the frequencies of each number using a hash.

2. Employ a custom sort function that sorts based on frequency and then by value if the frequencies are the same.

<br>

```perl
use strict;
use warnings;

sub frequency_sort {
    my @ints = @_;

    # Count frequencies
    my %frequency;
    $frequency{$_}++ for @ints;

    # Custom sort
    my @sorted = sort {
        $frequency{$a} <=> $frequency{$b} || $b <=> $a
    } @ints;

    return @sorted;
}
```

<br>

### Python Solution

`Python` offers concise ways to tackle this problem:


1. Utilize the Counter class from the collections module to count frequencies.

2. Apply a custom sorting key that sorts by frequency and then by value

<br>

```perl
from collections import Counter

def frequency_sort_python(ints: List[int]) -> List[int]:
    """Sort integers based on frequency and then value."""

    # Count frequencies
    frequency = Counter(ints)

    # Custom sort
    sorted_ints = sorted(ints, key=lambda x: (frequency[x], -x))

    return sorted_ints
```

<br>

### Conclusion

Custom sorting problems like `"Frequency Sort"` challenge us to think beyond standard sorting algorithms and adapt to specific criteria. Both `Perl` and `Python` offer versatile tools that make implementing such solutions efficient and straightforward. Whether you're working with text or numbers, understanding how to manipulate data based on custom conditions is a valuable skill in any programmer's toolkit.

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

| &nbsp; [**Advent Calendar 2023**](/blog/advent-calendar-2023) &nbsp; |
