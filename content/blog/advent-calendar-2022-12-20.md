---
title: "Advent Calendar - December 20, 2022"
date: 2022-12-20T00:00:00+00:00
description: "Advent Calendar - December 20, 2022."
type: post
image: images/blog/2022-12-20.jpg
author: Roger Bell_West
tags: ["Raku", "JavaScript"]
---

## [**Advent Calendar 2022**](/blog/advent-calendar-2022)
### | &nbsp; [**Day 19**](/blog/advent-calendar-2022-12-19) &nbsp; | &nbsp; **Day 20** &nbsp; |
***

The gift is presented by `Roger Bell_West`. Today he is talking about his solution to [**"The Weekly Challenge - 192"**](/blog/perl-weekly-challenge-192). This is re-produced for **Advent Calendar 2022** from the original [**post**](https://blog.firedrake.org/archive/2022/11/The_Weekly_Challenge_192__Equal_Flips_For_All.html) by him.

***

<br>

## Equal Flips For All

<br>

I’ve been doing the [**Weekly Challenges**](http://theweeklychallenge.org).

[**The latest**](https://theweeklychallenge.org/blog/perl-weekly-challenge-192) involved a binary negation and list division. (Note that this is open until `27 November 2022`.)

<br>

## Task 1: Binary Flip

<br>

You are given a positive integer, `$n`.

Write a script to find the binary flip.

***
<br>

This turns out to be: take the binary representation (with no leading zeroes), then exchange all `0s` and `1s` to get an inverse value.

This is clearly intended to be a problem about binary representations. But we don't need to do that. Instead, I find the value of the `leftmost set bit` in the input by counting repeated shift rights until there's nothing left – e.g. `5` is processed as `101`, `10`, `1`, `0`, so `three` shifts. (i.e. `log base 2`.) Then shift `1` left that many times (getting `8`). Subtract 1: `7`, which gives me what in binary would be a series of `"1"` of the same length as the original number. Then subtract the input from that (gosh, an actual legitimate `"take away the number you first thought of"`).

This sequence is [**in the OEIS**](https://oeis.org/A035327) and the graph makes this approach particularly obvious.

Some languages have access to `CPU functions` to count leading zeroes and thus get a binary magnitude that way, but I did this the same way throughout. `JavaScript`:

<br>

```perl
function binaryflip(n) {
    let m = n;
    let r = 0;
    while (m > 0) {
        m >>= 1;
        r += 1;
    }
    return (1 << r) - 1 - n;
}
```

<br>

## Task 2: Equal Distribution

You are given a list of integers greater than or equal to zero, `@list`.

Write a script to distribute the number so that each members are same. If you succeed then print the total moves otherwise print -1.

***
<br>

`"Distribute"` turns out to mean `"subtract one from a list value, adding it to another adjacent list value"`. So this has to be done iteratively `[0 3 0] → [1 2 0] → [1 1 1] = 2 steps` , adding and subtracting `1` each time. If a number is higher than both its neighbours, the process is not immediately obvious, but this one seemed to work.

<br>

## Raku

<br>

```perl
sub equaldistribution(@list) {
```

<br>

Check that an even distribution is possible.

<br>

```perl
    my $s = @list.sum;
    if ($s % @list.elems != 0) {
        return -1;
    }
```

<br>

Get a target value for each element.

<br>

```perl
    my $m = $s div @list.elems;
    my $out = 0;
    my @w = @list;
    while (True) {
        for (0..@w.elems-2) -> $i {
```

<br>

Going through the list, if this value is higher than it needs to be, move any surplus into the next element.

<br>

```perl
            if (@w[$i] > $m) {
                my $v = @w[$i] - $m;
                @w[$i+1] += $v;
                $out += $v;
                @w[$i] = $m;
```

<br>

If it's lower, take as much as possible from the next element (without letting it go below zero.)

<br>

```perl
            } elsif (@w[$i] < $m) {
                my $v = min($m - @w[$i], @w[$i+1]);
                @w[$i+1] -= $v;
                $out += $v;
                @w[$i] += $v;
            }
        }
```

<br>

If the job's done, exit, otherwise loop again.

<br>

```perl
        if (@w.all == $m) {
            last;
        }
    }
    return $out;
}
```

<br>

Full code on [**GitHub**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-192/roger-bell-west).

<br>

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

| &nbsp; [**Advent Calendar 2022**](/blog/advent-calendar-2022) &nbsp; |
