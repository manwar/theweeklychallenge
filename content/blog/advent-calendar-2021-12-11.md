---
title: "Advent Calendar - December 11, 2021"
date: 2021-12-11T00:00:00+00:00
description: "Advent Calendar - December 11, 2021."
type: post
image: images/blog/2021-12-11.jpg
author: Adam Russell
tags: ["Perl"]
---

[**Advent Calendar 2021**](/blog/advent-calendar-2021)
***

The gift is presented by [**Adam Russell**](/blog/meet-the-champion-016). Today he is talking about his solution to [**"The Weekly Challenge - 122"**](/blog/perl-weekly-challenge-122). This is re-produced for **Advent Calendar 2021** from the original [**post**](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2021/07/25) by `Adam Russell`.

***

<br>

## Task #1: Average of Stream

<br>

You are given a stream of numbers, `@N`.

Write a script to print the average of the stream at every point.

<br>

***

<br>

## Solution:

<br>

```perl
use strict;
use warnings;
sub moving_average{
    my $n = 0;
    my $sum = 0;
    {
        $n += 1;
        $sum += shift;
        print $sum / $n;
        print ", " if @_;
        redo if @_;
    }
    print "\n";
}


MAIN:{
    my @N;
    for(my $i = 10; $i < 1_000_000; $i += 10){
        push @N, $i;
    }
    moving_average(@N);
}
```

<br>

## Output:

<br>

```perl
$ perl perl/ch-1.pl
10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
```

<br>

## Notes

<br>

Typically when one thinks of a stream the idea is of a virtually endless source of data. Or, at least, data which is handled as if this were the case. Here the `"stream"` is simulated by a long (`one million items`) array.

The computation of the average as the simulated stream is evaluated is done using a `redo loop`. I would think it is fair to say that typically my code is somewhat verbose. I prefer to be fairly explicit in that way to enhance readability. Here, however, I try to be more terse. The `"stream"` is evaluated by shifting values off the array passed to the function. The array argument is also used to determine if the block should be repeated, and also to format the output.

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2021**](/blog/advent-calendar-2021)
