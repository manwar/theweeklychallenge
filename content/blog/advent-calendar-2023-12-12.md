---
title: "Advent Calendar - December 12, 2023"
date: 2023-12-12T00:00:00+00:00
description: "Advent Calendar - December 12, 2023."
type: post
image: images/blog/2023-12-12.jpg
author: Simon Green
tags: ["Perl", "Python"]
---

## [**Advent Calendar 2023**](/blog/advent-calendar-2023)
### | &nbsp; [**Day 11**](/blog/advent-calendar-2023-12-11) &nbsp; | &nbsp; **Day 12** &nbsp; |
***

The gift is presented by `Simon Green`. Today he is talking about his solution to [**The Weekly Challenge - 220**](/blog/perl-weekly-challenge-220). This is re-produced for `Advent Calendar 2023` from the original [**post**](https://dev.to/simongreennet/common-squares-31do).

***

<br>

## Common Squares
***

### Weekly Challenge 220

This is the second consecutive week I've done the task and written the blog `40,000+ feet` in the air.

### Task 1: Common Characters
***

    You are given a list of words.

    Write a script to return the list of common characters (sorted alphabetically) found in every word of the given list.

<br>

### My solution
***

[ &nbsp; [**Perl**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-220/sgreen/perl/ch-1.pl) &nbsp; | &nbsp; [**Python**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-220/sgreen/python/ch-1.py) &nbsp; ]

<br>

These are the steps I took.

1. From a list (array in `Perl`) of `words`, I create a list called `set_list`. Each item is a `set` (`hash` in `Perl`) of the lower case letters that occur in each word. In `Python` this is achieved using set(word) as strings are an iterable. In `Perl` I have a function called `word_to_hash` as it seemed like a bit too much to stuff into a single `map` statement.

2. I take off the first word from the `set_list` and assign it to the `first_word` variable.

3. I loop through each letter in the first word alphabetically.

4. I check that the letter is indeed a letter from the English alphabet and that it appears in all the words in the `set_list` list. If it is, I append it to the `letters` list.

5. Finally, I print items in the letters list.

<br>

### Examples
***

```perl
$ ./ch-1.py Perl Raku Rust
r

$ ./ch-1.py love live leave
e, l, v
```

<br>

### Task 2: Squareful
***

    You are given an array of integers, @ints.

    An array is squareful if the sum of every pair of adjacent elements is a perfect square.

    Write a script to find all the permutations of the given array that are squareful.

<br>

### My solution
***

[ &nbsp; [**Perl**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-220/sgreen/perl/ch-2.pl) &nbsp; | &nbsp; [**Python**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-220/sgreen/python/ch-2.py) &nbsp; ]

<br>

Rather than reinventing some perfectly good wheels, I use the permutation function from `Python`'s [**itertools**](https://docs.python.org/3/library/itertools.html) and `Perl`'s [**Algorithm::Combinatorics**](https://metacpan.org/pod/Algorithm::Combinatorics) to work through all possible permutations. If we already have a solution with these numbers (e.g. a duplicate number), we skip to the next permutation.

I then have an inner loop from 1 to one less than the number of integers we have. I check that the value at that position and the previous position makes up a perfect square. This is done by calculating the square root of the sum of the two numbers, and checking it is equals to an integer.

<br>

### Examples
***

```perl
$ ./ch-2.py 1 17 8
(1, 8, 17), (17, 8, 1)

$ ./ch-2.py 2 2 2
(2, 2, 2)
```

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

| &nbsp; [**Advent Calendar 2023**](/blog/advent-calendar-2023) &nbsp; |
