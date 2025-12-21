---
title: "Advent Calendar - December 20, 2025"
date: 2025-12-20T00:00:00+00:00
description: "Advent Calendar - December 20, 2025."
type: post
image: images/blog/2025-12-20.jpg
author: Vinod Kumar K
tags: ["Perl","Raku"]
---

## [**Advent Calendar 2025**](/blog/advent-calendar-2025)
### | &nbsp; [**Day 19**](/blog/advent-calendar-2025-12-19) &nbsp; | &nbsp; **Day 20** &nbsp; | &nbsp; [**Day 21**](/blog/advent-calendar-2025-12-21) &nbsp; |
***

The gift is presented by `Vinod Kumar K`. Today he is talking about his solutioni to [**The Weekly Challenge - 344**](/blog/perl-weekly-challenge-344). This is re-produced for `Advent Calendar 2025` from the original [**post**](https://dev.to/vinodk89/perl-weekly-challenge-344-1god).

***

<br>

Writing a blog for first time and this week's challenges provided a fantastic opportunity to explore different problem-solving strategies in `Perl`. I tried to solve one of the problem in `Raku` aswell :)

## Challenge 1: Add to Array Form
<br>

### The Problem

    You are given an array of integers, @ints and an integer, $x.

    Write a script to add $x to the integer in the array-form.

<br>

> The array form of an integer is a digit-by-digit representation stored as an array, where the most significant digit is at the 0th index.

### My Solution:

In `Perl`, when we use a list of digits in a string context, they are automatically concatenated. This allows us to convert the array-form number into a standard integer, perform the addition, and then convert the sum back into its array form in three concise steps.

Here is the add_to_array_form subroutine:

<br>

```perl
sub add_to_array_form {
    my ($ints_ref, $x) = @_;

    # 1. Convert the array of digits into a single string/number.
    my $int_form = join('', @$ints_ref);

    # 2. Perform the arithmetic. Perl handles the large number arithmetic here.
    my $sum = $int_form + $x;

    # 3. Split the resulting sum back into an array of individual digits.
    my @result_array = split //, $sum;

    return @result_array;
}
```

<br>

This solution is highly efficient and perfectly illustrates `Perl`'s strength in handling scalar contexts and type coercion.

### Example

<br>

```bash
vinod@vinod:~/my_folder/git/perlweeklychallenge-club/challenge-344/vinod-k/perl$ perl ch-1.pl

Input Array: (1, 2, 3, 4)
Input X: 12
Output Array: (1, 2, 4, 6)

Input Array: (2, 7, 4)
Input X: 181
Output Array: (4, 5, 5)

Input Array: (9, 9, 9)
Input X: 1
Output Array: (1, 0, 0, 0)

Input Array: (1, 0, 0, 0, 0)
Input X: 9999
Output Array: (1, 9, 9, 9, 9)

Input Array: (0)
Input X: 1000
Output Array: (1, 0, 0, 0)
```

<br>

## Challenge 2: Build Target from Source Subarrays

You are given two list: @source and @target.

Write a script to see if you can build the exact @target by putting these smaller lists from @source together in some order. You cannot break apart or change the order inside any of the smaller lists in @source.

### My Solution:

They way used to solve this is - to convert the array sequences into strings and use the power of `Perl`'s regular expression engine to perform prefix matching and consumption.

- Convert the $target array into a string (e.g., "1234").
- In a loop, iterate through all unused source subarrays.
- For each source subarray, check if it matches the current beginning of the target string.
- If a match is found, use the substitution operator (s///) to remove the matched prefix from the target string, mark the source subarray as used, and continue to the next iteration.

This logic is in the `can_build_target` subroutine:

<br>

```perl
sub can_build_target {
    my ($source_ref, $target_ref) = @_;
    my $target_string = join('', @$target_ref);

    my $source_count = scalar @$source_ref;
    my %used_source_indices = ();
    my @used_order = ();

    while (length $target_string) {
        my $match_found_in_cycle = 0;

        for my $i (0 .. $source_count - 1) {
            next if exists $used_source_indices{$i};

            my $sub_array_ref = $source_ref->[$i];
            my $source_pattern = join('', @$sub_array_ref);

            # The core of the greedy match:
            # s/ ... / / checks for a match AND removes it if successful.
            # ^: Anchors the match to the start of the string.
            # \Q...\E: Quotes the pattern so it's treated literally (no regex metacharacters).
            if ($target_string =~ s/^\Q$source_pattern\E//) {
                $used_source_indices{$i} = 1;
                push @used_order, $sub_array_ref;
                $match_found_in_cycle = 1;
                last; # Move to the next prefix
            }
        }

        # If we couldn't match any source subarray, we fail.
        unless ($match_found_in_cycle) {
            return (0, []);
        }
    }
    return (1, \@used_order);
}
```

<br>

### Example

<br>

```bash
inod@vinod:~/my_folder/git/perlweeklychallenge-club/challenge-344/vinod-k/perl$ perl ch-2.pl
Input: @source = ([2,3], [1], [4])
Input: @target = (1, 2, 3, 4)
Output: true
Use in the order: ([1], [2,3], [4])

Input: @source = ([1,3], [2,4])
Input: @target = (1, 2, 3, 4)
Output: false

Input: @source = ([9,1], [5,8], [2])
Input: @target = (5, 8, 2, 9, 1)
Output: true
Use in the order: ([1], [2,3], [4])

Input: @source = ([1], [3])
Input: @target = (1, 2, 3)
Output: false

Input: @source = ([7,4,6])
Input: @target = (7, 4, 6)
Output: true
Use in the order: ([7,4,6])
```

<br>

***

If you have any suggestion then please do share with us **<perlweeklychallenge@yahoo.com>**.

| &nbsp; [**Advent Calendar 2025**](/blog/advent-calendar-2025) &nbsp; |
