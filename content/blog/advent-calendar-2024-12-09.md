---
title: "Advent Calendar - December 9, 2024"
date: 2024-12-09T00:00:00+00:00
description: "Advent Calendar - December 9, 2024."
type: post
image: images/blog/2024-12-09.jpg
author: James Smith
tags: ["Perl"]
---

## [**Advent Calendar 2024**](/blog/advent-calendar-2024)
### | &nbsp; [**Day 8**](/blog/advent-calendar-2024-12-08) &nbsp; | &nbsp; **Day 9** &nbsp; |
***

The gift is presented by `James Smith`. Today he is talking about his solution to [**The Weekly Challenge - 263**](/blog/perl-weekly-challenge-263). This is re-produced for `Advent Calendar 2024` from the original [**post**](https://challenges.jamessmith.me.uk/weekly/weekly-challenge-263/).

***

<br>

## The Weekly Challenge - 263
***

<br>

### Task #1: Target Index
***

<br>

    You are given an array of integers, @ints and a target element $k.

    Write a script to return the list of indices in the sorted array where the element is same as the given target element.

<br>

### Solution
***

<br>

It looks like we need to sort - `BUT WE DON'T` - we know that the first index will be the number of numbers less than `$k`, and the number of matching numbers is the number of numbers equal to `$k`.

Like last week, we use the `spaceship operator` to compute the values larger/smaller than `$k`.

If we create the `counts array (0) x 3`, then the number smaller are in `$c[-1] OR $c[2]`, the number the same are in `$c[0]`.

So we just need to output the list of numbers starting at `$c[2]` of length `$c[0]`...

<br>

```perl
sub target_index {
  my( $k, @c ) = ( pop, 0, 0, 0 );
  $c[ $_ <=> $k ]++ for @_;
  $c[2] .. $c[2] + $c[0] - 1
}
```

<br>

Spaceship operator `<=>` returns values `-1,0,1` depending on the `sign of the difference`.

<br>

### Task #2: Merge Items
***

<br>

    You are given two 2-D array of positive integers, $items1 and $items2 where element is pair of (item_id, item_quantity).

    Write a script to return the merged items.

<br>

### Solution
***

<br>

We don't need to know which group the count is from - in fact the code below works if you have `1, 2, 3 or even 100` lists.

We loop through every pair in every list updating the count for the key...

We code simplify the code to use:

<br>

```perl
$code{ $_->[0] } += $_->[1] for map { @{$_} } @_;
```

<br>

but this could have memory issues as you have to create a new array and loop over it. So we use two loops instead. One example of where code golf can cause a major inefficiency.

We store the values of the hash and return the keys and values as a list of pairs rather than the normal hash structure.

<br>

```perl
sub merge_items {
  my %c;
  for( @_ ) {
    $c{ $_->[0] } += $_->[1] for @{$_}
  }
  map { [ 0 + $_ => $c{$_} ] } keys %c
}
```

<br>

***

If you have any suggestion then please do share with us **<perlweeklychallenge@yahoo.com>**.

| &nbsp; [**Advent Calendar 2024**](/blog/advent-calendar-2024) &nbsp; |
