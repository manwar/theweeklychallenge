---
title: "Advent Calendar - December 9, 2019"
date: 2019-12-09T00:00:00+00:00
description: "Advent Calendar - December 9, 2019"
type: post
image: images/blog/2019-12-09.jpg
author: Dave Cross
tags: ["Perl"]
---

[**Advent Calendar 2019**](/blog/advent-calendar-2019)
***

The gift is presented by **Dave Cross**. Today he is talking about his solutions to **Task #1: Find 5 Weekends** of [**"The Weekly Challenge - 019"**](/blog/perl-weekly-challenge-019).

#### Write a script to display months from the year 1900 to 2019 where you find 5 weekends i.e. 5 Friday, 5 Saturday and 5 Sunday.

***

This would be simple enough to just brute-force. But when I started to think about it, I realised there’s a bit of a trick we can use which can cut down our search space quite significantly.

If we’re looking for a month with five **Fridays**, **Saturdays** and **Sundays** then we need a month with **31** days (as **four weeks** is **twenty-eight days** and we need **three extra days**). Only **seven months** ever have **31 days** – **January**, **March**, **May**, **July**, **August**, **October** and **December**. There is no point at all in ever looking in any other month. You might also realise that those **three extra days** need to be **Friday 29th**, **Saturday 30th** and **Sunday 31st**. And that means that the first day of the month also needs to be a **Friday**.

So, the problem simplifies to “Find months with **31 days** where the **1st** is a **Friday**”. And here’s the code I wrote to do that:

```perl
#!/usr/bin/perl

use strict;
use warnings;
use feature 'say';

use Time::Piece;

# Array of months with 31 days
my @months = (qw[Jan Mar May Jul Aug Oct Dec]);
my $format = '%Y-%b';

for my $y (1900 .. 2019) {
    for my $m (@months) {
        # Get the first day of the month as a Time::Piece object
        my $first = Time::Piece->strptime("$y-$m", $format);

        # Print the date if the 1st is a Friday
        say $first->strftime('%b %Y') if $first->day eq 'Fri';
    }
}
```

***
If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2019**](/blog/advent-calendar-2019)
