---
title: "Advent Calendar - December 5, 2025"
date: 2025-12-05T00:00:00+00:00
description: "Advent Calendar - December 5, 2025."
type: post
image: images/blog/2025-12-05.jpg
author: Matthias Muth
tags: ["Perl"]
---

## [**Advent Calendar 2025**](/blog/advent-calendar-2025)
### | &nbsp; [**Day 4**](/blog/advent-calendar-2025-12-04) &nbsp; | &nbsp; **Day 5** &nbsp; | &nbsp; [**Day 6**](/blog/advent-calendar-2025-12-06) &nbsp; |
***

The gift is presented by `Matthias Muth`. Today he is talking about his solution to [**The Weekly Challenge - 307**](/blog/perl-weekly-challenge-307). This is re-produced for `Advent Calendar 2025` from the original [**post**](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-307/challenge-307/matthias-muth#readme).

***

<br>

## Task 1: Check Order

You are given an array of integers, @ints.

Write a script to re-arrange the given array in an increasing order and return the indices where it differs from the original array.

## Example 1

    Input: @ints = (5, 2, 4, 3, 1)
    Output: (0, 2, 3, 4)
    Before: (5, 2, 4, 3, 1)
    After : (1, 2, 3, 4, 5)
    Difference at indices: (0, 2, 3, 4)

## Example 2

    Input: @ints = (1, 2, 1, 1, 3)
    Output: (1, 3)
    Before: (1, 2, 1, 1, 3)
    After : (1, 1, 1, 2, 3)
    Difference at indices: (1, 3)

## Example 3

    Input: @ints = (3, 1, 3, 2, 3)
    Output: (0, 1, 3)
    Before: (3, 1, 3, 2, 3)
    After : (1, 2, 3, 3, 3)
    Difference at indices: (0, 1, 3)

<br>

For this task, I think it is easiest to follow the task description very closely.

First, `'re-arrange the given array in an increasing order'`. Let's use sort with the well-known code block to sort the entries numerically:

<br>

```perl
    my @sorted = sort { $a <=> $b } @ints;
```

<br>

Then, `'return the indices where it differs from the original array'`.

For this, `grep` is the method of choice, walking through the arrays one by one.

I am getting into the habit to write keys `@array` instead of `0..$#array`. This language construct (keys of arrays) has been available since Perl version `5.12`, published in `2010`), so I actually feel like I'm quite late adapting that, but hey!

`grep` returns the indexes that passed the test, which is exactly what we need to return as our function result:

<br>

```perl
    return grep $sorted[$_] != $ints[$_], keys @sorted;
```

<br>

Which completes my short solution:

<br>

```perl
use v5.36;

sub check_order( @ints ) {
    my @sorted = sort { $a <=> $b } @ints;
    return grep $sorted[$_] != $ints[$_], keys @sorted;
}
```

<br>

Nice once again to see how `Perl` makes things easy.

<br>

## Task 2: Find Anagrams

You are given a list of words, @words.

Write a script to find any two consecutive words and if they are anagrams, drop the first word and keep the second. You continue this until there is no more anagrams in the given list and return the count of final list.

## Example 1

    Input: @words = ("acca", "dog", "god", "perl", "repl")
    Output: 3
    Step 1: "dog" and "god" are anagrams, so dropping "dog" and keeping "god" => ("acca", "god", "perl", "repl")
    Step 2: "perl" and "repl" are anagrams, so dropping "perl" and keeping "repl" => ("acca", "god", "repl")

## Example 2

    Input: @words = ("abba", "baba", "aabb", "ab", "ab")
    Output: 2
    Step 1: "abba" and "baba" are anagrams, so dropping "abba" and keeping "baba" => ("baba", "aabb", "ab", "ab")
    Step 2: "baba" and "aabb" are anagrams, so dropping "baba" and keeping "aabb" => ("aabb", "ab", "ab")
    Step 3: "ab" and "ab" are anagrams, so dropping "ab" and keeping "ab" => ("aabb", "ab")

## Normalize

How do I compare whether two words are anagrams? That's not too difficult. We `'normalize'` the words:

- Split both words into their characters,
- sort the characters into the same order
  (it actually doesn't matter which order it used, but it must be the same for both sets of characters),
- recombine the sorted letters into strings.


If the normalized strings are equal, the two words are anagrams.

Let's create the normalizations for all word in the input array:

<br>

```perl
    my @normalized = map join( "", sort split "" ), @words;
```

<br>

Now we can walk through the `@normalized` array instead of the original words to check for neighboring anagrams.

## Watch out! There's a trap!!

It is tempting to just count the number of `unique` normalized words to get the result.

BUT! What happens if two anagrams are not next to each other?

They both will make it into the result list if we follow the instructions. But if we use `uniq`, they will only be counted once.

We cannot simply use `uniq`, for that reason.

Even if it would work without a problem for the examples given.

Do the counting, not the skipping

For any sequence of one ore more anagrams, the instructions say to only keep the last one, and then count in the end. But as we only need the count, it is not relevant whether we count the first or the last word of a sequence. So let's simply count every normalized word that is different from the one before.

We can use a `grep` call for that, which returns the number of times the condition was true in scalar context. That's exactly what we need.

We have to be careful because the word at `index 0` has no predecessor to compare to. So we start the `grep` at `index 1`, and as the first word always starts a sequence, we add `1` for that to the count returned by `grep`. Of course we shouldn't do that when the word list is completely empty (then there is no `'first word'`). So we add a check for that special case right at the beginning.

So here we are:

<br>

```perl
sub find_anagrams( @words ) {
    @words > 0 or return 0;
    my @normalized = map join( "", sort split "", $_ ), @words;
    return 1 + scalar grep(  $normalized[ $_ - 1 ] ne $normalized[$_], 1..$#normalized );
}
```

<br>

The only thing that I don't like about my solution is that that array name (`'@normalized'`) is a bit too long.

But I always prefer `'speaking names'`!

Thank you for the challenge!

<br>

***

If you have any suggestion then please do share with us **<perlweeklychallenge@yahoo.com>**.

| &nbsp; [**Advent Calendar 2025**](/blog/advent-calendar-2025) &nbsp; |
