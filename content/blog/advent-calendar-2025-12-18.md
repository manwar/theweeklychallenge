---
title: "Advent Calendar - December 18, 2025"
date: 2025-12-18T00:00:00+00:00
description: "Advent Calendar - December 18, 2025."
type: post
image: images/blog/2025-12-18.jpg
author: Torgny Lyon
tags: ["Perl"]
---

## [**Advent Calendar 2025**](/blog/advent-calendar-2025)
### | &nbsp; [**Day 17**](/blog/advent-calendar-2025-12-17) &nbsp; | &nbsp; **Day 18** &nbsp; |
***

The gift is presented by `Torgny Lyon`. Today he is talking about his solutioni to [**The Weekly Challenge - 339**](/blog/perl-weekly-challenge-339). This is re-produced for `Advent Calendar 2025` from the original [**post**](https://www.abc.se/~torgny/pwc.html#339).

***

<br>

## Lessons learned in Week 339

`Negative array indices` – I had forgotten about those.

My implementation of `find_max_diff()` is indeed broken. It will, for example, not give the correct answer for a list like `(1, 2, 3, -4)`. Thanks to everyone who showed how it can be done properly!

I do not know much about math, but it seems to me that a way of solving the first task for positive integers would be to subtract the product of the two smallest numbers from the product of the two largest numbers. I base this on the assumption that the two smallest numbers will form the smallest product, and that the two largest number will form the largest product, but I cannot prove that such is the case. If the assumption holds, the problem can be solved by sorting the integers and performing the operation using the two first and the two last elements of the resulting list. I guess that throwing in an `abs()` will solve the problem for combinations of negative and positive integers, thanks to some …tive property, but I have not thought too much about it.

<br>

```perl
#!/usr/bin/perl

use v5.42;

use Test::More tests => 5;

sub find_max_diff {
    my @ints = sort { $b <=> $a } map { abs } @_;
    $ints[0] * $ints[1] - $ints[$#ints] * $ints[$#ints - 1];
}

is(find_max_diff(5, 9, 3, 4, 6),   42);
is(find_max_diff(1, -2, 3, -4),    10);
is(find_max_diff(-3, -1, -2, -4),  10);
is(find_max_diff(10, 2, 0, 5, 1),  50);
is(find_max_diff(7, 8, 9, 10, 10), 44);
```

<br>

The second task can be solved by using `map` to convert the gains to altitudes and then getting the maximum altitude. The initial altitude of `0` has to be accounted for in order to handle cases were the altitude never exceeds the starting altitude.

<br>

```perl
#!/usr/bin/perl

use v5.42;

use Test::More tests => 5;

use List::Util qw(max);

sub find_peak_gain {
    my $altitude;
    max(0, map { $altitude += $_ } @_);
}

is(find_peak_gain(-5, 1, 5, -9, 2),    1);
is(find_peak_gain(10, 10, 10, -25),    30);
is(find_peak_gain(3, -4, 2, 5, -6, 1), 6);
is(find_peak_gain(-1, -2, -3, -4),     0);
is(find_peak_gain(-10, 15, 5),         10);
```

<br>

A neater solution could be constructed by calling in another `List::Util` function.

<br>

```perl
use List::Util qw(max reductions);

sub find_peak_gain {
    max(reductions { $a + $b } 0, @_);
}
```

<br>

***

If you have any suggestion then please do share with us **<perlweeklychallenge@yahoo.com>**.

| &nbsp; [**Advent Calendar 2025**](/blog/advent-calendar-2025) &nbsp; |
