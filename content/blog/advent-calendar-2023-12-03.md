---
title: "Advent Calendar - December 3, 2023"
date: 2023-12-03T00:00:00+00:00
description: "Advent Calendar - December 2, 2023."
type: post
image: images/blog/2023-12-03.jpg
author: James Smith
tags: ["Perl"]
---

## [**Advent Calendar 2023**](/blog/advent-calendar-2023)
### | &nbsp; [**Day 2**](/blog/advent-calendar-2023-12-02) &nbsp; | &nbsp; **Day 3** &nbsp; | &nbsp; [**Day 4**](/blog/advent-calendar-2023-12-04) &nbsp; |
***

The gift is presented by `James Smith`. Today he is talking about his solution to [**The Weekly Challenge - 208**](/blog/perl-weekly-challenge-208). This is re-produced for `Advent Calendar 2023` from the original [**post**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-208/james-smith#readme).

***

<br>

## Task 1: Minimum Index Sum
***

You are given two arrays of strings. Write a script to find out all common strings in the given two arrays with minimum index sum. If no common strings found returns an empty list.

## Solution
***

We proceed to do a pass of each array.

<br>

```perl
sub min_index_sum {
  my( $b, %x, $t, $s, @best ) = ( 1e99,                #0
    map { $_[0][$_] => $_ } reverse ( 0 .. $#{$_[0]} ) #1
  );
  exists $x{$t = $_[1][$_]} &&                         #3
    ( $b > ($s=$x{$t}+$_) ?  ($b,@best) = ( $s,$t )    #4
    : $b == $s            && push @best, $t )          #5
    for 0 .. $#{$_[1]};                                #2
  \@best                                               #6
}
```

<br>

First we start with the first array and find the lowest index for each word in it - and store them in the hash `%x`. Note we work backwards through the list to ensure that it is the lowest index if the word is duplicated. This is the `map` in `line 1`.

We then loop through the second list of strings (`#2`) looking for words which are in the first list (`#3`). If it has a lower index sum that the best so far we record this and reset the list of words (`#4`). If it has the same we just push it onto the list. (`#5`)

At the end we just return the current list of words (which could be empty if there are no duplicates). (`#6`)

Note we set the initial best index sum (`#0`) as `10^99` as the index sum will be no where near this and so we can treat this as effectively infinity...

<br>

## Task 2: Duplicate and Missing
***

You are given an array of integers in sequence with one missing and one duplicate. Write a script to find the duplicate and missing integer in the given array. Return -1 if none found. For the sake of this task, let us assume the array contains no more than one duplicate and missing.

<br>

### Observation
***

It is not `100%` clear in the desciption - but we have assumed that it means a list of integers from `n ... m` with a step of `1`.

<br>

### Solution
***

We loop through looking for a duplicate `$p[n+1]==$p[$n]` or gap `$p[n+1]!=$p[$n]+1`.

We have two special cases - if there are no duplicates return -1

<br>

```perl
sub dup_missing {
  my($p,$d,$m) = shift;
  ($_==$p ? ($d=$_) : $_ == $p+2 && ($m=$_-1)), $p=$_ for @_;
  defined $d ? ( defined $m ? [ $d, $m ] : [ $d,$p+1  ] ): [-1]
}
```

<br>

We note that if the two neighbouring values are the same we have found the duplicate, and if the difference is `2` we've found the missing value.

At the end of the loop we have `3` cases:

    1. We have not found the duplicate ($d is undefined) - so we return [-1];
    2. We have found the duplicate and we've found the missing value as well so we return [$d,$m];
    3. We have found the duplicate BUT we haven't found the missing value - there is no solution here - the missing value is
       at one end or other of the list. As at this point we know what the last value of the list is (but not the first - we
       threw that away) we just return "last value + 1".

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

| &nbsp; [**Advent Calendar 2023**](/blog/advent-calendar-2023) &nbsp; |
