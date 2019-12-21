---
title: "Advent Calendar - December 21, 2019"
date: 2019-12-21T00:00:00+00:00
description: "Advent Calendar - December 21, 2019"
type: post
image: images/blog/2019-12-21.jpg
author: Khalid
tags: ["Perl"]
---

[**Advent Calendar 2019**](/blog/advent-calendar-2019)
***

The gift is presented by **Gustavo Chaves**. Today he is talking about his solutions to **Task #1: Base35 Representation** of [**"The Weekly Challenge - 002"**](/blog/perl-weekly-challenge-002).

#### Write a script that can convert numbers to and from a base35 representation, using the characters 0-9 and A-Y.

***

I cannot do it as a **one-liner** this time, but it was still fun. While trying to solve it I realized that it wouldn't be much harder to implement a general solution to convert from any base to any base between **2** and **36**.

This is my solution:

```perl
#!/usr/bin/env perl

use 5.026;
use strict;
use integer;
use warnings;

my $usage = "Usage: $0 FROM_BASE TO_BASE NUMBER\n\nError";

die "$usage: invalid number of arguments\n"
    unless @ARGV == 3;

my @digits = ('0' .. '9', 'A' .. 'Z');
my %digits = map {$digits[$_] => $_} 0 .. @digits-1;

my ($from_base, $to_base, $number) = @ARGV;

die "$usage: FROM_BASE must be between 2 and @digits\n"
    if $from_base < 2 || $from_base > @digits;

die "$usage: TO_BASE must be between 2 and @digits\n"
    if $to_base < 2 || $to_base > @digits;

sub from_base {
    my ($base, $string) = @_;
    my $n = 0;
    $string =~ s/^0+//;
    foreach my $char (reverse split //, $string) {
        die "$usage: Invalid char in NUMBER: '$char'\n"
            if $digits{$char} >= $base;
        $n *= $base;
        $n += $digits{$char};
    }
    return $n;
}

sub to_base {
    my ($base, $n) = @_;
    my $string = '';
    for (my $i = $n; $i; $i /= $base) {
        $string .= $digits[$i % $base];
    }
    return length $string ? reverse $string : '0';
}

say to_base($to_base, from_base($from_base, $number));
```

And this is how it works:

    $ ./ch-1.pl 35 10 GUSTAVO
    61183826754

    $ ./ch-1.pl 10 35 61183826754
    GUSTAVO

    $ ./ch-1.pl 36 18 GUSTAVO
    G674BB7G4

    $ ./ch-1.pl 18 9 G674BB7G4
    742882356461

    $ ./ch-1.pl 9 3 742882356461
    12112022222001210211021

    $ ./ch-1.pl 3 2 12112022222001210211021
    000100101011101100011101010110010011

    $ ./ch-1.pl 2 36 000100101011101100011101010110010011
    GUSTAVO

***
If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2019**](/blog/advent-calendar-2019)
