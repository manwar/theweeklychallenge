---
title: "Advent Calendar - December 2, 2020"
date: 2020-12-02T00:00:00+00:00
description: "Advent Calendar - December 2, 2020."
type: post
image: images/blog/2020-12-02.jpg
author: Ryan Thompson
tags: ["Perl", "Raku"]
---

[**Advent Calendar 2020**](/blog/advent-calendar-2020)
***

The gift is presented by [**Ryan Thompson**](https://perlweeklychallenge.org/blog/meet-the-champion-038). Today he is talking about his solutions to the task `Make it $200` of **["The Weekly Challenge - 044"](/blog/perl-weekly-challenge-044)**. This is re-produced for **Advent Calendar 2020** from the original [**post**](http://ry.ca/2020/01/make-it-200/) by **Ryan Thompson**.

***

## Make it $200

For challenge #2 this week, the task is to start with $1, and by either adding $1 or doubling the amount, reach $200 in the smallest possible number of steps.

> “Greedy never works”

In a 75-minute lecture some decades ago, my Advanced Algorithms professor said, over and over, “greedy never works,” while all the while showing us exceptions to that mantra. Greedy algorithms operate by always making the locally optimal choice, which might be the biggest/smallest, closest to the goal, etc., depending on the problem. However, for a great many problems, the locally optimal choice is not always the best. For example, suppose you’re trying to climb the following mountain range (The ASCIIHorn):

```perl
        B
   A   /\
  /\  /  \
 /  \/    \
/    C     \
```

Let’s say you’re at position (A), and your goal is to find the highest point. A greedy algorithm would always choose to go higher, never lower (even temporarily), so you’d reach the smaller left peak, and be stuck there. This is known as a hill climbing problem, for which greedy doesn’t work, because you have to go down through the valley (C) before you go up to the goal (B).

But in the case of this challenge, greedy does work, but only if we go in the opposite direction: given $200, you can divide by 2 or subtract $1, and your goal is now to get to $1 in the least number of steps. So how does it work? If we can divide by two (i.e., if our amount is an even number), then divide by two. Otherwise, subtract 1. This is greedy, because dividing by two will always result in the biggest deduction (or at least a tie, in the case you had $2). We can easily work this out by hand:

```perl
$200    even, divide by 2
 100    even, divide by 2
  50    even, divide by 2
  25     odd, subtract  1
  12    even, divide by 2
   6    even, divide by 2
   3     odd, subtract  1
   2    even, divide by 2 (subtract 1 is equivalent)
   1    done.
```

Thus, the solution is achieved in 8 moves. The moves are in the opposite order to what we want, but making a reversed list is trivial in Perl and Raku.

## Greedy Solution

### Perl

```perl
sub double_or_plus( $start, $end ) {
    my @path = $end;
    while ($end != $start) {
        $end = $end % 2 ? $end - 1 : $end / 2;
        unshift @path, $end;
    }
    @path;
}
```

### Raku

```perl6
sub double-or-plus( Int $start, Int $end is copy ) {
    my @path = $end;
    while ($end != $start) {
        $end = $end %% 2 ?? ($end / 2).Int !! $end -1;
        @path.unshift($end);
    }
    @path;
}
```

Note the use of unshift in both cases, to produce a reversed array on the fly.

## Exhaustive Solution

If you don’t yet trust the greedy solution, it’s easy to write an efficient exhaustive validator (shown here in Perl). This one takes the $start and $end, but it also takes a $max_path value, which is the length of the path from double_or_plus(). That allows us to avoid pointlessly searching paths that are already longer than the one we found.

```perl
sub exhaustive( $start, $end, $max_path ) {
    my @shortest = (0) x ($max_path + 1);

    sub ( $start, $end, @path ) {
        push @path, $start;

        return if @path > @shortest or $start >  $end;
        @shortest = @path and return if $start == $end;

        __SUB__->($start + 1, $end, @path);
        __SUB__->($start * 2, $end, @path);
    }->($start, $end);

    @shortest;
}
```

This uses some newer Perl features: signatures, and current_sub. These made my closure a little bit cleaner looking, but are absolutely not required.

With this sub, we can purchase a bit of confidence that our greedy result really is the optimal one. I ran this in a loop, increasing the $end as high as I was patient enough to wait. (It’s not necessary to increase $start, because we will have already validated 1..$start.) The greedy solution was optimal up to an end of 100,000, which is about when I hit Ctrl-C.

## Why Greedy Works?

A full proof is beyond the scope of this blog post. However, conceptually, you can imagine that dividing by two will always get you at least as close as subtracting $1. (That’s the greedy part.) It’s optimal in this case, because we are always only in one of the following states:

#### 1) Even number: Can divide by 2, which gets us closer more quickly

#### 2) Odd number: Subtracting is the only option, but guarantees next number is even
<br>

Thus, dividing when we can gets us to lower numbers faster, and there is no penalty for our greed, since when we do have to subtract, we just get another even number. To prove otherwise, you would have to find an even number such that subtracting leads to a shorter path than dividing. Try to find that counterexample, and you might just prove our greedy solution is in fact optimal.

***
If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2020**](/blog/advent-calendar-2020)
