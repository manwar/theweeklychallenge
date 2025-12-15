---
title: "Advent Calendar - December 14, 2025"
date: 2025-12-14T00:00:00+00:00
description: "Advent Calendar - December 14, 2025."
type: post
image: images/blog/2025-12-14.jpg
author: Bob Lied
tags: ["Perl"]
---

## [**Advent Calendar 2025**](/blog/advent-calendar-2025)
### | &nbsp; [**Day 13**](/blog/advent-calendar-2025-12-13) &nbsp; | &nbsp; **Day 14** &nbsp; | &nbsp; [**Day 15**](/blog/advent-calendar-2025-12-15) &nbsp; |
***

The gift is presented by `Bob Lied`. Today he is talking about his solutioni to [**The Weekly Challenge - 318**](/blog/perl-weekly-challenge-318). This is re-produced for `Advent Calendar 2025` from the original [**post**](https://dev.to/boblied/pwc-318-task-2-reverse-equals-o5n).

***

<br>

## PWC 318 Task 2 Reverse Equals

Problem Description

You are given two arrays of integers, each containing the same elements as the other. Write a script to return true if one array can be made to equal to the other by reversing exactly one contiguous subarray.

## Example 1:

    @source = (3, 2, 1, 4)
    @target = (1, 2, 3, 4)
    Output: true (3,2,1 reverses to 1,2,3)

## Example 2:

    @source = (1, 3, 4)
    @target = (4, 1, 3)
    Output: false

## Example 3:

    @source = (2)
    @target = (2)
    Output: true

## The thinking part

At first glance, it seems like we might have to enumerate all the possible sub-sequences and reverse each one. But after a little more time for the coffee to work its magic, there's a simpler approach.

<br>

    @source:   = = = = > > > = = = =
    @target:   = = = = < < < = = = =

<br>

The string has three parts. Somewhere in the middle is a sequence that can be reversed (maybe), and on either side of that are sequences that are equal. With that in mind, let's put on some music and write some `Perl`.

#### [**Shot Reverse Shot, Jack Johnson**](https://www.youtube.com/watch?v=nkmZaJxogI4)
#### [**Run Back to Your Side, Eric Clapton**](https://www.youtube.com/watch?v=gh8tJvJQz4Y)

<br>

## The fun part

<br>

```perl
sub revEq ($source, $target)
{
    use List::Util qw/zip/;
    use List::MoreUtils qw/first_index last_index/;

    # Arrays must be the same size
    return false if $source->$#* != $target->$#*;

    # Combine the two arrays into pairs
    my @pair = zip($source, $target);

    # Find the left segment of equal elements
    my $left = first_index { $_->[0] != $_->[1] } @pair;

    # If strings are equal, we can stop
    return true if $left == -1;

    # Find the right segment of equal elements
    my $right = last_index { $_->[0] != $_->[1] } @pair;

    # Extract the middle that could be reversed.
    my @midsrc = $source->@[$left .. $right];
    my @midtrg = $target->@[$left .. $right];

    # Check that one is the reverse of the other
    while ( @midsrc  &&  shift @midsrc == pop @midtrg ) {}
    return @midsrc == 0;
}
```

<br>

## Programming notes

- There are some sub-problems that we don't need to re-invent. (Previous PWC challenges have already re-invented them anyway). I'm going to use common library routines from `List::Util` and `List::MoreUtils`

- `zip` -- I want to compare corresponding elements. I could loop over indexes and start down the road to off-by-one hell, but I'd rather operate on lists as a whole and let the language and its libraries do my array bookkeeping. zip will turn two lists into one list of pairs.

- `first_index` and `last_index` -- I want the first position on the left and on the right where the two sequences don't match. If the strings are equal, this would return `-1`.

- `array slices` -- Knowing the bounds of the possibly-reversed sub-sequence, I can extract it with a slice. I know that the range will be valid, because I already returned if there was no unequal element, so at this point in the program, $left must be less than or equal to `$right`.

- `reversal check` -- The obvious thing to do would be to reverse either `@midsrc` or `@midtrg` and then do an array compare. What I'm doing here instead is walking over both of them from opposite ends, destroying them in the process. If `@midsrc` is reduced to empty, then the strings must be mirror images.

<br>

***

If you have any suggestion then please do share with us **<perlweeklychallenge@yahoo.com>**.

| &nbsp; [**Advent Calendar 2025**](/blog/advent-calendar-2025) &nbsp; |
