---
title: "Advent Calendar - December 16, 2025"
date: 2025-12-16T00:00:00+00:00
description: "Advent Calendar - December 16, 2025."
type: post
image: images/blog/2025-12-16.jpg
author: Yitzchak Scott-Thoennes
tags: ["Perl"]
---

## [**Advent Calendar 2025**](/blog/advent-calendar-2025)
### | &nbsp; [**Day 15**](/blog/advent-calendar-2025-12-15) &nbsp; | &nbsp; **Day 16** &nbsp; | &nbsp; [**Day 17**](/blog/advent-calendar-2025-12-17) &nbsp; |
***

The gift is presented by `Yitzchak Scott-Thoennes`. Today he is talking about his solutioni to [**The Weekly Challenge - 324**](/blog/perl-weekly-challenge-324). This is re-produced for `Advent Calendar 2025` from the original [**post**](https://blog.ysth.info/idiomatic-perl-solutions-to-the-weekly-challenge-324/).

***

<br>

[**Task 1:**](https://theweeklychallenge.org/blog/perl-weekly-challenge-324/?ref=blog.ysth.info#TASK1)

    You are given an array of integers and two integers $r amd $c.

    Write a script to create two dimension array having $r rows and $c columns using the given array.

<br>

I'm sure there are modules to facilitate this, but I'm not sure any provides more readability than simply:

<br>

```perl
my @out = map [splice @ints, 0, $c], 1..$r;
```

<br>

`splice array, 0, N, ()` is an easy way to loop over an array in fixed size chunks. Often you will see it in this form:

<br>

```perl
while (my @chunk = splice @array, 0, 1000) {
```

<br>

though it is important to remember it empties the original array; copy first if needed.

[**full script**](https://github.com/ysth/perlweeklychallenge-club/blob/challenge-324-ysth/challenge-324/ysth/perl/ch-1.pl)

<br>

## [**Task 2:**](https://theweeklychallenge.org/blog/perl-weekly-challenge-324/?ref=blog.ysth.info#TASK2)

    You are given an array of integers.

    Write a script to return the sum of total XOR for every subset of given array.

<br>

This is essentially a combinations problem. Perl has many modules for combinations (and permutations); [**here**](https://blogs.perl.org/users/dana_jacobsen/2015/02/short-survey-of-modules-for-combinations-and-permutations.html?ref=blog.ysth.info) is a short survey of some of them. In production code, I would likely use `Algorithm::Combinatorics` for this.

But for a quick and dirty solution, I'd use Perl's builtin that does combinations: `glob`:

<br>

```perl
say List::Util::sum map eval, glob 0 . join '', map "{^$_,}", @array
```

<br>

(Obviously when using eval, validating the data is as expected is important.)

Here we take an array such as `5,1,6` and form a string to glob that provides all combinations, xor'd: `"0{^5,}{^1,}{^6,}"`. These look like:

<br>

```bash
$ perl -E'say for glob "0{^5,}{^1,}{^6,}"'
0^5^1^6
0^5^1
0^5^6
0^5
0^1^6
0^1
0^6
0
```

<br>

Then simply eval and sum them. Yes, `eval`'s operand defaults to `$_`.

When using glob, be very careful in scalar context, where it will take an initial argument and iterate over the results of that argument for each call thereafter until the results are exhausted and it returns undef, with the later arguments not actually used.

[**full script**](https://github.com/ysth/perlweeklychallenge-club/blob/challenge-324-ysth/challenge-324/ysth/perl/ch-2.pl)

<br>

***

If you have any suggestion then please do share with us **<perlweeklychallenge@yahoo.com>**.

| &nbsp; [**Advent Calendar 2025**](/blog/advent-calendar-2025) &nbsp; |
