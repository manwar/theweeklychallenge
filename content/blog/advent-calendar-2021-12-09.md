---
title: "Advent Calendar - December 9, 2021"
date: 2021-12-09T00:00:00+00:00
description: "Advent Calendar - December 9, 2021."
type: post
image: images/blog/2021-12-09.jpg
author: Laurent Rosenfeld
tags: ["Perl","Raku"]
---

[**Advent Calendar 2021**](/blog/advent-calendar-2021)
***

The gift is presented by [**Laurent Rosenfeld**](/blog/meet-the-champion-013). Today he is talking about his solution to [**"The Weekly Challenge - 114"**](/blog/perl-weekly-challenge-114). This is re-produced for **Advent Calendar 2021** from the original [**post**](http://blogs.perl.org/users/laurent_r/2021/05/perl-weekly-challenge-114-next-palindrome-number-and-higher-integer-set-bits.html) by `Laurent Rosenfeld`.

***

<br>

## Task #1: Next Palindrome Number

<br>

You are given a positive integer `$N`.

Write a script to find out the next `Palindrome Number` higher than the given integer `$N`.

<br>

***

<br>

### Next Palindrome Number in Raku

<br>

In theory, we could build directly the next palindrome number from the current one. But there are different situations to cover, depending for example on whether the input number has an odd or even number of digits. Also, there are various edge cases. It is not so easy to be sure you’ve covered all possible cases. The alternative is to check each number in ascending order until you get a match. This brute force approach is much easier and in fact quite efficient for small and moderately large input numbers, as it is in most cases quite fast to find a palindrome larger than a given input number. We’ll use this second approach. We assume here that the input is a correct integer.

<br>

```perl6
use v6;

my $input = @*ARGS[0] // 1234;
for $input .. Inf -> $candidate {
    next unless $candidate eq $candidate.flip;
    say $candidate;
    last;
}
```

<br>

This program displays the following output:

<br>

```perl6
$ raku ./palin.raku
1331

$ raku ./palin.raku 3445
3553
```

<br>

### Next Palindrome Number in Perl

<br>

We use the same algorithm, except that we use a `while` loop instead of a `for` because it is not possible to define an infinite range in **Perl**.

<br>

```perl
use strict;
use warnings;
use feature "say";

my $num = shift // 1234;
$num =~ s/^0+//; # remove leading 0s just in case
while (++ $num) {
    say $num and last if $num eq reverse $num;
}
```

<br>

This program displays the following output:

<br>

```perl
$ perl palin.pl
1331

$ perl palin.pl 3554
3663

$ perl palin.pl 075
77
```

<br>

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2021**](/blog/advent-calendar-2021)
