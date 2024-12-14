---
title: "Advent Calendar - December 13, 2024"
date: 2024-12-13T00:00:00+00:00
description: "Advent Calendar - December 13, 2024."
type: post
image: images/blog/2024-12-13.jpg
author: Ali Moradi
tags: ["Perl"]
---

## [**Advent Calendar 2024**](/blog/advent-calendar-2024)
### | &nbsp; [**Day 12**](/blog/advent-calendar-2024-12-12) &nbsp; | &nbsp; **Day 13** &nbsp; | &nbsp; [**Day 14**](/blog/advent-calendar-2024-12-14) &nbsp; |
***

The gift is presented by `Bob Lied`. Today he is talking about his solution to [**The Weekly Challenge - 263**](/blog/perl-weekly-challenge-263). This is re-produced for `Advent Calendar 2024` from the original [**post**](https://dev.to/boblied/pwc-2631-dont-sort-it-be-happy-537i).

***

<br>

## Don't Sort It, Be Happy
***

<br>

### Task #1: Target Index
***

<br>

    You are given an array of integers, @ints, and a target element $k.

    Write a script to return the list of indices in the sorted array where the element is the same as the given target element.

<br>

### Dive right in
***

<br>

Well, the example gives it away, doesn't it? Sort the array and waddle up the list to the first index where `$k` exists. Then, because the array is sorted, all the other places where `$k` exists must be adjacent.

<br>

### Or not
***

<br>

But hold on. In every algorithm we have some trouble, but when you sort you make it double.

All the `$k` together means we've effectively partitioned the array into three sets: elements that are less than `$k`, elements equal to `$k`, and the rest.

We don't have to sort the array at all. We just have to traverse the array and count the elements in the first two partitions.

<br>

```perl
sub targetIndex($k, @ints)
{
    my ($below, $same) = (0, 0);
    foreach ( @ints )
    {
        if    ( $_ < $k )  { $below++ }
        elsif ( $_ == $k ) { $same++ }
    }
    return [] if $same == 0;
    return [ $below .. ($same + $below - 1) ];
}
```

<br>

If `$k` doesn't appear at all, we can bail out by returning an empty list. `$below` and `$same` tell us the range of numbers we need in the answer.

<br>

```perl
$below = 1 # 1 element less than $k
$same  = 2 # 2 elements equal to $k
      {         }
   1  {  2   2  }   3   4   5
  [0] { [1] [2] }  [3] [4] [5]
         ^   ^
         |   +---- $below + $same -1 = 1+2-1 = 2
  $below-+
```

<br>

The `..` range operator makes short work of creating the sequence of numbers we want.

Put that range of numbers into an array, and we have our answer. This function is returning array references, not arrays, so the calling function will have to de-reference. In context, it might look like

<br>

```perl
say "(", join(",", targetIndex($Target, @ARGV)->@*), ")";
```

<br>

Now there is the blog I wrote. I hope you liked the way I code. Don't worry, be hacker.

<br>

***

If you have any suggestion then please do share with us **<perlweeklychallenge@yahoo.com>**.

| &nbsp; [**Advent Calendar 2024**](/blog/advent-calendar-2024) &nbsp; |
