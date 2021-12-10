---
title: "Advent Calendar - December 10, 2021"
date: 2021-12-10T00:00:00+00:00
description: "Advent Calendar - December 10, 2021."
type: post
image: images/blog/2021-12-10.jpg
author: Roger Bell_West
tags: ["Raku"]
---

[**Advent Calendar 2021**](/blog/advent-calendar-2021)
***

The gift is presented by [**Roger Bell_West**](/blog/meet-the-champion-026). Today he is talking about his solution to [**"The Weekly Challenge - 120"**](/blog/perl-weekly-challenge-120). This is re-produced for **Advent Calendar 2021** from the original [**post**](https://blog.firedrake.org/archive/2021/07/Perl_Weekly_Challenge_120__Swap_Clock.html) by `Roger Bell_West`.

***

<br>

## Task #2: Clock Angle

<br>

You are given time $T in the format `hh:mm`.

Write a script to find the smaller angle formed by the hands of an analog clock at a given time.

<br>

***

<br>

Which seems again as though it has a fairly straightforward solution: determine the angle of each hand, then reduce the difference.

### Raku:

<br>

```perl6
sub ca($n) {
  my $a=0;
```

<br>

Extract hour and minute:

<br>

```perl6
  if ($n ~~ /(<[0..9]>+)\:(<[0..9]>+)/) {
```

<br>

Convert each one to an angle (note that each minute puts half a degree on the hour hand, so we're in floating point territory):

<br>

```perl6
    my ($ha,$ma)=map {$_ % 360}, ($0*30+$1/2,$1*6);
```

<br>

Take the absolute difference:

<br>

```perl
    $a=abs($ha-$ma);
```

<br>

Reduce until we get an angle lying in (-180..180):

<br>

```perl6
    while ($a > 180) {
      $a-=360;
    }
```

<br>

And take the absolute again.

<br>

```perl6
    $a=abs($a);
  }
  return $a;
}
```

<br>

The complete solution in **Raku**.

<br>

```perl6
#! /usr/bin/perl6

use Test;

plan 2;

is(ca('03:10'),35,'example 1');
is(ca('04:00'),120,'example 2');

sub ca($n) {
  my $a=0;
  if ($n ~~ /(<[0..9]>+)\:(<[0..9]>+)/) {
    my ($ha,$ma)=map {$_ % 360}, ($0*30+$1/2,$1*6);
    $a=abs($ha-$ma);
    while ($a > 180) {
      $a-=360;
    }
    $a=abs($a);
  }
  return $a;
}
```

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2021**](/blog/advent-calendar-2021)
