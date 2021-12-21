---
title: "Advent Calendar - December 16, 2021"
date: 2021-12-16T00:00:00+00:00
description: "Advent Calendar - December 16, 2021."
type: post
image: images/blog/2021-12-16.jpg
author: Jaldhar H. Vyas
tags: ["Perl","Raku"]
---

## [**Advent Calendar 2021**](/blog/advent-calendar-2021)
### | [**Day 15**](/blog/advent-calendar-2021-12-15) | **Day 16** | [**Day 17**](/blog/advent-calendar-2021-12-17) |
***

The gift is presented by [**Jaldhar H. Vyas**](/blog/meet-the-champion-014). Today he is talking about his solution to [**"The Weekly Challenge - 108"**](/blog/perl-weekly-challenge-108). This is re-produced for **Advent Calendar 2021** from the original [**post**](https://www.braincells.com/perl/2021/04/perl_weekly_challenge_week_108.html) by `Jaldhar H. Vyas`.

***

<br>

## Task #2: Bell Numbers

<br>

Write a script to display top 10 `Bell Numbers`. Please refer to [wikipedia page](https://en.wikipedia.org/wiki/Bell_number) for more information.

<br>

***

<br>

Ugh maths again. Not being able to make head nor tail of the referenced wikipedia page, I googled around and found [**this page**](https://www.geeksforgeeks.org/bell-numbers-number-of-ways-to-partition-a-set). The code below is a `Raku` translation of the `C++` example provided there.

<br>

```perl6
sub bellNumber(Int $n) {
    my @bell;
    @bell[0][0] = 1;
    for 1 .. $n -> $i {
        @bell[$i][0] = @bell[$i - 1][$i - 1];

        for 1 .. $i -> $j {
            @bell[$i][$j] = @bell[$i - 1][$j - 1] + @bell[$i][$j - 1];
        }
    }
    return @bell[$n][0];
}
```

<br>

[**Full code on GitHub**](https://github.com/jaldhar/perlweeklychallenge-club/blob/master/challenge-108/jaldhar-h-vyas/raku/ch-2.raku)

Basically we are creating what's known as a `Bell Triangle` by starting with a known value (1 for a set with 0 elements) and using dynamic programming to calculate succeeding values. The leftmost value in the `$nth row` of the triangle is the `Bell number` for `$n`.

This is the same thing in `Perl`:

<br>

```perl
sub bellNumber {
    my ($n) = @_;
    my @bell;
    $bell[0][0] = 1;
    for my $i (1 .. $n) {
        $bell[$i][0] = $bell[$i - 1][$i - 1];

        for my $j (1 .. $i) {
            $bell[$i][$j] = $bell[$i - 1][$j - 1] + $bell[$i][$j - 1];
        }
    }
    return $bell[$n][0];
}
```

<br>

[**Full code on GitHub**](https://github.com/jaldhar/perlweeklychallenge-club/blob/master/challenge-108/jaldhar-h-vyas/perl/ch-2.pl)

The spec asks for the "top ten" Bell numbers by which I assume the first ten is meant. In case you are curious, they are:

<br>

    1 1 2 5 15 52 203 877 4140 21147

<br>

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2021**](/blog/advent-calendar-2021)
