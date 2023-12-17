---
title: "Advent Calendar - December 16, 2023"
date: 2023-12-16T00:00:00+00:00
description: "Advent Calendar - December 16, 2023."
type: post
image: images/blog/2023-12-16.jpg
author: Andrew Shitov
tags: ["Raku"]
---

## [**Advent Calendar 2023**](/blog/advent-calendar-2023)
### | &nbsp; [**Day 15**](/blog/advent-calendar-2023-12-15) &nbsp; | &nbsp; **Day 16** &nbsp; | &nbsp; [**Day 17**](/blog/advent-calendar-2023-12-17) &nbsp; |
***

The gift is presented by `Andrew Shitov`. Today he is talking about his solution to [**The Weekly Challenge - 227**](/blog/perl-weekly-challenge-227). This is re-produced for `Advent Calendar 2023` from the original [**post**](https://andrewshitov.com/2023/07/24/counting-friday-the-13th-in-raku).

***

<br>

## Counting Fridays the 13th in Raku
***

The `Task 1` of the `Weekly Challenge 227` is the following:

    You are given a year number in the range 1753 to 9999.

    Write a script to find out how many dates in the year are Friday 13th, assume that the current Gregorian calendar applies.

    Example

    Input: $year = 2023
    Output: 2

    Since there are only 2 Friday 13th in the given year 2023 i.e. 13th Jan and 13th Oct.

<br>

Let us solve it in the `Raku` programming language.

The idea is is to loop over the months of the given year and to count the `Fridays` which happen to be the `13th`.

<br>

```perl
sub count-friday-the13s($year) {
    my $count = 0;

    for 1..12 -> $month {
        my $dt = DateTime.new(
            year => $year, month => $month, day => 13
        );
        $count++ if $dt.day-of-week == 5;
    }

    return $count;
}
```

<br>

The code is very clear and explains itself. The result for `2023` is `2` as it should be:

<br>

```perl
say count-friday-the13s(2023); # 2
```

<br>

Now, let us compactify the code to make it more readable

<br>

```perl
sub count-friday-the13s($year) {
    [+] map {
        5 == DateTime.new(
            year => $year, month => $_, day => 13).day-of-week
    }, 1..12;
}
```

<br>

The loop is now replaced with `map`, and adding up the `Trues` is done using a reduction metaoperation `[+]`. There is no explicit `return` keyword, as `Raku` will use the last computed value as the result of the function call.

Finally, after we have a compact solution, we can return to the task description and discover that the sample output also lists the dates, not only the counter.

So, there’s nothing to do as to return to a more verbose solution and collect the dates too. So, back to explicit loops, and here’s the final solution:

<br>

```perl
my $year = @*ARGS[0] // 2023;

my @dates;
for 1..12 -> $month {
    my $dt = DateTime.new(year => $year, month => $month, day => 13);
    if ($dt.day-of-week == 5) {
        push @dates, $dt;
    }
}

if @dates {
    my $count = @dates.elems;

    if $count == 1 {
        say "There is only one Friday the 13th in $year:";
    }
    else {
        say "There are {@dates.elems} Fridays the 13th in $year:";
    }

    .mm-dd-yyyy.say for @dates;
}
else {
    say "There are no Friday the 13th in $year.";
}
```

<br>

The output for a sample year selection:

<br>

```perl
$ raku ch-1.raku
There are 2 Fridays the 13th in 2023:
01-13-2023
10-13-2023

$ raku ch-1.raku 2023
There are 2 Fridays the 13th in 2023:
01-13-2023
10-13-2023

$ raku ch-1.raku 2021
There is only one Friday the 13th in 2021:
08-13-2021

$ raku ch-1.raku 2022
There is only one Friday the 13th in 2022:
05-13-2022

$ raku ch-1.raku 2024
There are 2 Fridays the 13th in 2024:
09-13-2024
12-13-2024

$ raku ch-1.raku 2025
There is only one Friday the 13th in 2025:
06-13-2025
```

<br>

[**Code on GitHub**](https://github.com/ash/perlweeklychallenge-club/tree/master/challenge-227/ash/raku)

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

| &nbsp; [**Advent Calendar 2023**](/blog/advent-calendar-2023) &nbsp; |
