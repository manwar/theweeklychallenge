---
title: "Advent Calendar - December 13, 2021"
date: 2021-12-13T00:00:00+00:00
description: "Advent Calendar - December 13, 2021."
type: post
image: images/blog/2021-12-13.jpg
author: W. Luis Mochan
tags: ["Perl"]
---

## [**Advent Calendar 2021**](/blog/advent-calendar-2021)
### | [**Day 12**](/blog/advent-calendar-2021-12-12) | **Day 13** | [**Day 14**](/blog/advent-calendar-2021-12-14) |
***

The gift is presented by [**W. Luis Mochan**](/blog/meet-the-champion-2021-11). Today he is talking about his solution to [**"The Weekly Challenge - 125"**](/blog/perl-weekly-challenge-125). This is re-produced for **Advent Calendar 2021** from the original [**post**](https://wlmb.github.io/2021/08/10/PWC125) by `W. Luis Mochan`.

***

<br>

## Task #1: Pythagorean Triples

<br>

You are given a positive integer `$N`.

Write a script to print all Pythagorean Triples containing `$N` as a member. Print `-1` if it can’t be a member of any.

<br>

***

<br>

Consider a complex number `a+ib` with integer real and imaginary parts `a` and `b`. Its square `(a + i b)2=x+iy` has real and imaginary parts `x=a2-b2` and `y=2ab`. Notice that its squared modulus is `|x+iy|2=x2+y2=(a2-b2)2+4a2b2=(a2+b2)2`, so that `(x, y, z)` with `z=|a+ib|2=a2+b2` form a `Pythagorean Triplet`, `x2+y2=z2`. It turns out that all Pythagorean triplets are integer multiples of triplets of this form. Thus, given `N` we can check if it is a multiple of some `a2-b2`, `2ab` or `a2+b2` for any pair of integers `a`,`b` and some multiplier `k`. If we succeed, a Pythagorean triplet would be `k(a2-b2)`, `k(2ab)` and `k(a2+b2)`. If we only consider positive numbers, then we can assume `b<a`. As `a2-b2=(a-b)(a+b)` is a positive multiple of `a+b`, a may not be larger than `N`, bounding our search. Thus, we can test all pairs such that `0<a<N` and `0<b<a` to get all the Pythagorean triplets that contain `N`, if there is any.

<br>

```perl
#!/usr/bin/env perl
# Perl weekly challenge 125
# Task 1:  Pythagorean triplets
#
# See https://wlmb.github.io/2021/08/10/PWC125/#task-1-pythagorean-triples
use warnings;
use strict;
use v5.12;
use POSIX qw(floor);
use List::Util qw(uniq);

die "Usage: ./ch-1.pl N1 N2... to search for pythagorean triplets containing Ni"
    unless @ARGV;

foreach(@ARGV){
    my $N=floor($_); # check non-negative integer arguments
    warn("Expected natural"), next unless $N>=0 and $N==$_;
    my @found=();
    foreach my $a(1..$N-1){
    foreach my $b (1..$a-1){
        push @found, [$a, $b, $_/($a**2-$b**2)] if $_%($a**2-$b**2)==0;
        push @found, [$a, $b, $_/(2*$a*$b)] if $_%(2*$a*$b)==0;
        push @found, [$a, $b, $_/($a**2+$b**2)] if $_%($a**2+$b**2)==0;
    }
    }
    say "Input; $_\nOutput:";
    say "\t$_" foreach uniq map { #remove duplicates
    my($A,$B,$K)=@$_; # careful not to confuse with $a and $b from sort
    my ($x, $y, $z)=sort {$a <=> $b} map {$K*$_} ($A**2-$B**2, 2*$A*$B, $A**2+$B**2);
    "\t($x, $y, $z)";
    } @found;
    say("\t-1, no result found") unless @found;
}
```

<br>

### Output

<br>

```perl
$ perl ch-1.pl 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15

Input; 1
Output:
        -1, no result found
Input; 2
Output:
        -1, no result found
Input; 3
Output:
                (3, 4, 5)
Input; 4
Output:
                (3, 4, 5)
Input; 5
Output:
                (3, 4, 5)
                (5, 12, 13)
Input; 6
Output:
                (6, 8, 10)
Input; 7
Output:
                (7, 24, 25)

Input; 8
Output:
                (6, 8, 10)
                (8, 15, 17)
Input; 9
Output:
                (9, 12, 15)
                (9, 40, 41)
Input; 10
Output:
                (6, 8, 10)
                (10, 24, 26)
Input; 11
Output:
                (11, 60, 61)
Input; 12
Output:
                (12, 16, 20)
                (9, 12, 15)
                (5, 12, 13)
                (12, 35, 37)
Input; 13
Output:
                (5, 12, 13)
                (13, 84, 85)

Input; 14
Output:
                (14, 48, 50)
Input; 15
Output:
                (15, 20, 25)
                (9, 12, 15)
                (15, 36, 39)
                (8, 15, 17)
                (15, 112, 113)
```

<br>

To my surprise, it seems that most numbers are part of a Pythagorean triplet, if not all numbers beyond `2`. I tested up to `1000` and found no non-Phytagorean number `N>2`. Then I found a reason for that (thanks to `Elías Mochán`): Any even number `N>2` is clearly of the form `2ab` (take `a=N/2`, `b=1`). Any odd number is of the form `a2-b2` (take `a=(N+1)/2` and `b=(N-1)/2`). Thus, either `((N/2)2-1, N, (N/2)2+1/` or `(N, (N2-1)/2,(N2+1)/2)` form a Pythagorean triplet that contains `N` for any `N>2`.

<br>

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2021**](/blog/advent-calendar-2021)
