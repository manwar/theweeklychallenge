---
title: "Advent Calendar - December 20, 2021"
date: 2021-12-20T00:00:00+00:00
description: "Advent Calendar - December 20, 2021."
type: post
image: images/blog/2021-12-20.jpg
author: Steven Wilson
tags: ["Perl"]
---

[**Advent Calendar 2021**](/blog/advent-calendar-2021)
***

The gift is presented by [**Steven Wilson**](/blog/meet-the-champion-035). Today he is talking about his solution to [**"The Weekly Challenge - 138"**](/blog/perl-weekly-challenge-138). This is re-produced for **Advent Calendar 2021** from the original [**post**](https://tilde.town/~wlsn/pwc138.html) by `Steven Wilson`.

***

<br>

## Task #1: Workdays

<br>

You are given a year, `$year` in `4-digits` form.

Write a script to calculate the total number of workdays in the given year.

> For the task, we consider, Monday - Friday as workdays.

<br>

***

<br>

Lets assume new `Gregorian` calendar years only. I write a script to work out how many workdays `(Mon-Fri)` occur in a year with a `DateTime` object and while loop which checks every day, incrementing a variable if true.

It occurs to me there should be some sort of relationship between the start day of the year, if the year is a leap year and the number of workdays. I took the script and generated some data points.

<br>

```perl
use strict;
use warnings;
use DateTime;

my $year              = $ARGV[0];
my $workdays          = 0;
my $dt                = DateTime->new( year => $year, month => 1, day => 1 );
my $start_day_of_week = $dt->day_of_week();
my $is_leap_year      = $dt->is_leap_year();

while ( $dt->stringify() ne ( $year + 1 . "-01-01T00:00:00" ) ) {
    if ( $dt->day_of_week() < 6 ) {
        $workdays++;
    }
    $dt->add( days => 1 );
}

print $start_day_of_week . " " . $is_leap_year . " " . $workdays . "\n";
```

<br>

```perl
$ for i in {1900..2021}; do perl ch-1.pl $i; done > data
```

<br>

Then I looked for a pattern.

<br>

```perl
$ cat data | sort | uniq
```

<br>

    1 0 261
    1 1 262
    2 0 261
    2 1 262
    3 0 261
    3 1 262
    4 0 261
    4 1 262
    5 0 261
    5 1 261
    6 0 260
    6 1 260
    7 0 260
    7 1 261

<br>

I can use a `hash` as a look up table with the `start day_of_week` and `is_leap_year` values as the key, as combined they appear to give unique values for the workdays. To find the number of workdays I create a `DateTime` object with `1st January` and the given year; call `day_of_week` and `is_leap_year` on the object; find the value in the hash with `day_of_week` and `is_leap_year` as the key. The final script has no loops and looks like this:

<br>

```perl
use strict;
use warnings;
use feature qw/ say /;
use DateTime;

my $year              = $ARGV[0];
my $dt                = DateTime->new( year => $year, month => 1, day => 1 );
my $start_day_of_week = $dt->day_of_week();
my $is_leap_year      = $dt->is_leap_year();
my %workdays          = (
    10 => 261,
    11 => 262,
    20 => 261,
    21 => 262,
    30 => 261,
    31 => 262,
    40 => 261,
    41 => 262,
    50 => 261,
    51 => 261,
    60 => 260,
    61 => 260,
    70 => 260,
    71 => 261,
);

say $workdays{"$start_day_of_week$is_leap_year"};
```

<br>

```perl
$ perl ch-1.pl 2021
261
$ perl ch-1.pl 2020
262
```

<br>

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2021**](/blog/advent-calendar-2021)
