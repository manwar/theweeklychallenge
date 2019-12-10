---
title: "Advent Calendar - December 11, 2019"
date: 2019-12-10T00:00:00+00:00
description: "Advent Calendar - December 11, 2019"
type: post
image: images/blog/2019-12-11.jpg
author: Yet Ebreo
tags: ["Perl"]
---

[**Advent Calendar 2019**](/blog/advent-calendar-2019)
***

The gift is presented by [**Yet Ebreo**](/blog/meet-the-champion-025). Today he is talking about his solutions to **Task #1: Sexy Primes** of [**"The Weekly Challenge - 022"**](/blog/perl-weekly-challenge-022).

#### Write a script to print first 10 Sexy Prime Pairs. Sexy primes are prime numbers that differ from each other by 6. For example, the numbers 5 and 11 are both sexy primes, because 11 - 5 = 6. The term “sexy prime” is a pun stemming from the Latin word for six: sex. For more information, please checkout wiki [page](https://en.wikipedia.org/wiki/Sexy_prime).

***

I was googling about **Perl**, hoping to see an active community that is dedicated to Perl. I have been an active member of **codesignal** and I primarily use **Perl** to solve the challenges. And then, I came across the website [**perlweeklychallenge.org**](https://perlweeklychallenge.org) that is being maintained by **Mohammad S Anwar**. The website as the name implies, post challenges every week it usually consist of three tasks.

For this week, the first task is to print the first 10 sexy primes

### SOLUTION

Below is my **Perl** solution for the task:

Note: The code was intentionally obfuscated for fun.

```perl
@_=grep{@_[ map $x*$_,$_..@_/($x=$_) ] =0 if $_[$_] > 1}@_=0..54;
map { ($_[$_]-$_[$'] == 6) && print "$_[$'] $_[$_]\n" for  $_+//..$#_ } 0..$#_;
```

The first line of the code:

```perl
@_=grep{@_[ map $x*$_,$_..@_/($x=$_) ] =0 if $_[$_] > 1}@_=0..54;
```

Is a actually a [**sieve of erathosenes**](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes). It is an algorithm which finds all primes up to any given limit. In my code this is set by the range 0-54. The maximum value 54 was chosen to limit the sexy primes generated to exactly ten (10) pairs.

The range of values from 0 to 54 are stored in @_ with the code:

```perl
@_=0..54;
```

It was then later on grep'd with:

```perl
@_[ map $x*$_,$_..@_/($x=$_) ] =0 if $_[$_] > 1
```

This piece of code set the multiples of current value of $_ (from $_ to max range / $_) to 0 when $_ is greater than 1, leaving only numbers without multiples (primes).

The prime numbers are then stored to array @_ which was later used in the next line of code:

```perl
map { ($_[$_]-$_[$'] == 6) && print "$_[$'] $_[$_]\n" for  $_+//..$#_ } 0..$#_;
```

The code is pretty straight-forward, two prime values are printed if their difference is equal to 6. But the use of match // and $' variable is a bit tricky, its a golfing technique to avoid use of another variable to store the value of $_ from map which will be used inside the for loop.

The trick is that with //, the value of $_ from map is transferred to the perl special variable $' and would return 1 in: for $_+//..$#_ equivalent to for $_+1..$#_
See [**perlvar**](https://perldoc.perl.org/perlvar.html) for more info

### OUTPUT

    5 11
    7 13
    11 17
    13 19
    17 23
    23 29
    31 37
    37 43
    41 47
    47 53

***
If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2019**](/blog/advent-calendar-2019)
