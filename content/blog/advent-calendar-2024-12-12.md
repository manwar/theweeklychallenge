---
title: "Advent Calendar - December 12, 2024"
date: 2024-12-12T00:00:00+00:00
description: "Advent Calendar - December 12, 2024."
type: post
image: images/blog/2024-12-12.jpg
author: Ali Moradi
tags: ["Perl"]
---

## [**Advent Calendar 2024**](/blog/advent-calendar-2024)
### | &nbsp; [**Day 11**](/blog/advent-calendar-2024-12-11) &nbsp; | &nbsp; **Day 12** &nbsp; |
***

The gift is presented by `Ali Moradi`. Today he is talking about his solution to [**The Weekly Challenge - 262**](/blog/perl-weekly-challenge-262). This is re-produced for `Advent Calendar 2024` from the original [**post**](https://deadmarshal.blogspot.com/2024/03/twc262.html).

***

<br>

## Weekly Challenge 262
***

<br>

### Task #1: Max Positive Negative
***

<br>

    You are given an array of integers, @ints.

    Write a script to return the maximum number of either positive or negative integers in the given array.

<br>

We count the number of `negative` and `positive` numbers in the array and return the `maximum`:

<br>

```perl
#!/usr/bin/env perl
use strict;
use warnings;
use List::Util qw(max);

sub max_positive_negative{
  my ($neg,$pos) = 0 x 2;
  map{$neg++ if $_ < 0;$pos++ if $_ > 0}@{$_[0]};
  max $neg,$pos
}

printf "%d\n",max_positive_negative([-3,1,2,-1,3,-2,4]);
printf "%d\n",max_positive_negative([-1,-2,-3,1]);
printf "%d\n",max_positive_negative([1,2]);
```

<br>

### Task #2: Count Equal Divisible
***

<br>

    You are given an array of integers, @ints and an integer $k.

    Write a script to return the number of pairs (i, j) where

        a) 0 <= i < j < size of @ints
        b) ints[i] == ints[j]
        c) i x j is divisible by k

<br>

For each `(i,j)` pair we check if the condition `(i * j mod k == 0)` holds and `count` them:

<br>

```perl
#!/usr/bin/env perl
use strict;
use warnings;

sub count_equal_divisible{
  my ($arr,$k) = @_;
  my $count = 0;
  foreach my $i(0..@$arr-2){
    foreach my $j($i+1..@$arr-1){
      ++$count if $arr->[$i] == $arr->[$j] && ($i*$j) % $k == 0
    }
  }
  $count
}

printf "%d\n",count_equal_divisible([3,1,2,2,2,1,3],2);
printf "%d\n",count_equal_divisible([1,2,3],1);
```

<br>

***

If you have any suggestion then please do share with us **<perlweeklychallenge@yahoo.com>**.

| &nbsp; [**Advent Calendar 2024**](/blog/advent-calendar-2024) &nbsp; |
