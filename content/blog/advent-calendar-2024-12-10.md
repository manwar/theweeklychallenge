---
title: "Advent Calendar - December 10, 2024"
date: 2024-12-10T00:00:00+00:00
description: "Advent Calendar - December 10, 2024."
type: post
image: images/blog/2024-12-10.jpg
author: Robbie Hatley
tags: ["Perl"]
---

## [**Advent Calendar 2024**](/blog/advent-calendar-2024)
### | &nbsp; [**Day 9**](/blog/advent-calendar-2024-12-09) &nbsp; | &nbsp; **Day 10** &nbsp; | &nbsp; [**Day 11**](/blog/advent-calendar-2024-12-11) &nbsp; |
***

The gift is presented by `Robbie Hatley`. Today he is talking about his solution to [**The Weekly Challenge - 260**](/blog/perl-weekly-challenge-260). This is re-produced for `Advent Calendar 2024` from the original [**post**](https://hatley-software.blogspot.com/2024/03/robbie-hatleys-solutions-to-weekly.html).

***

<br>

## The Weekly Challenge 260
***

<br>

### Task #1: Unique Occurrences
***

<br>

    You are given an array of integers, @ints.

    Write a script to return 1 if the number of occurrences of each value in the given array is unique or 0 otherwise.

<br>

There are probably other ways to solve this (`TIMTOWTDI`), but the method I stumbled on was to first create a sub called `"occurrences"` which returns a list of the occurrences of the various kinds of elements in the input array, then I apply `"occurrences" twice`, basically `"occurrences of occurrences"`. If the result is a list of `1s`, then the occurrences of element kinds are unique, otherwise they aren't. Instead of checking every element of `"occurrences of occurrences"` individually, I just look at their product; if it's `1`, the occurrences are unique, otherwise they aren't:

<br>

```perl
use v5.38;
use utf8;
use List::Util 'product';

# What are the occurrences of the elements of an array?
sub occurrences(@array) {
   my %a;
   for my $item (@array) {++$a{$item};}
   return values %a;
}

# Are the occurrences of the elements of an array unique?
sub occurrences_are_unique(@array) {
   return 1 == product occurrences occurrences @array;
}

my @arrays = @ARGV ? eval($ARGV[0]) :
(
   [1,2,2,1,1,3],
   [1,2,3],
   [-2,0,1,-2,1,1,0,1,-2,9],
);

for my $aref (@arrays) {
   say '';
   say '@ints = (', join(', ', @$aref), ')';
   occurrences_are_unique @$aref
   and say 1, ' (occurrences are unique)'
   or  say 0, ' (occurrences are not unique)';
}
```

<br>

### Task #2: Dictionary Rank
***

<br>

    You are given a word, $word.

    Write a script to compute the dictionary rank of the given word.

<br>

Example 1 says `"combinations"`, but the context makes it clear that the author actually meant `"permutations"`. With that in mind, I use the `"permute"` function from `CPAN` module `"Math::Combinatorics"` to get a list of all letter orders, then sort, then use the `"uniq"` function from `CPAN` module `"List::Util"` to get rid of duplicates, then use the `"firstidx"` function from `CPAN` module `"List::MoreUtils"` to find the index of the first element which is equal to the original word, then add `1` for `1-indexing`:

<br>

```perl
use v5.38;
use utf8;
use Math::Combinatorics 'permute';
use List::Util 'uniq';
use List::MoreUtils 'firstidx';

# What is the "dictionary order" (as defined in the problem
# description) of a word?
sub dictionary_order ($word) {
   my @dic = uniq sort map {join '', @$_} permute split //, $word;
   return 1 + firstidx {$_ eq $word} @dic;
}

my @words = @ARGV ? @ARGV : qw( CAT GOOGLE SECRET );

for my $word (@words) {
   say '';
   say "word = $word";
   say 'dictionary order = ', dictionary_order($word);
}
```

<br>

***

If you have any suggestion then please do share with us **<perlweeklychallenge@yahoo.com>**.

| &nbsp; [**Advent Calendar 2024**](/blog/advent-calendar-2024) &nbsp; |
