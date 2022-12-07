---
title: "Advent Calendar - December 6, 2022"
date: 2022-12-06T00:00:00+00:00
description: "Advent Calendar - December 6, 2022."
type: post
image: images/blog/2022-12-06.jpg
author: Dave Jacoby
tags: ["Perl"]
---

## [**Advent Calendar 2022**](/blog/advent-calendar-2022)
### | &nbsp; [**Day 5**](/blog/advent-calendar-2022-12-05) &nbsp; | &nbsp; **Day 6** &nbsp; | &nbsp; [**Day 7**](/blog/advent-calendar-2022-12-07) &nbsp; |
***

The gift is presented by `Dave Jacoby`. Today he is talking about his solution to [**"The Weekly Challenge - 158"**](/blog/perl-weekly-challenge-158). This is re-produced for **Advent Calendar 2022** from the original [**post**](https://jacoby.github.io/2022/03/28/in-our-primes-weekly-challenge-158.html) by him.

***

<br>

## Task #1: Additive Primes

Additive primes are prime numbers for which the sum of their decimal digits are also primes.

<br>

We’re on to **Weekly Challenge #158!**. `158` is even so not prime, but is the product of two primes, `2` (because even) and `79`.

<br>

Because this time, I have every expectation that I’ll have to check if a number is prime twice, I brought in `Memoize`. Because of lack of recursion, I don’t expect it to be as much of an obvious win as, for example, fibonacci, but every little bit helps, and it’s good that I finally remember to use it, instead of just mentioning it.

So, once we know a number is prime, we then have to split it into digits `(split //, $n)` and sum them (`sum0` from one of my go-to’s, `List::Util`), and then testing if that’s prime.

<br>

## Show Me The Code!

<br>

```perl
#!/usr/bin/env perl

use strict;
use warnings;
use feature qw{ say postderef signatures state };
no warnings qw{ experimental };

use List::Util qw{ sum0 product };
use Memoize;

memoize('is_prime');

my @aprimes;
for my $i ( 1 .. 100 ) {
    if ( is_prime($i) ) {
        my $sum = sum0 split //, $i;
        if ( is_prime($sum) ) { push @aprimes, $i; }
    }
}
say join ', ', @aprimes;

sub is_prime ($n) {
    return 0 if $n == 0;
    return 0 if $n == 1;
    for ( 2 .. sqrt $n ) { return 0 unless $n % $_ }
    return 1;
}
```

<br>

```perl
$ ./ch-1.pl
2, 3, 5, 7, 11, 23, 29, 41, 43, 47, 61, 67, 83, 89
```

<br>

## Task #2: First Series Cuban Primes

Write a script to compute first series Cuban Primes <= 1000. Please refer [**wikipedia page**](https://en.wikipedia.org/wiki/Cuban_prime) for more informations.


<br>

So, the `Cuban Prime` is a pun on these relating to cubes.

The first form, when simplified, become:

<br>

> p = 3y2 + 3y + 1, where P is the prime in question

<br>

So, what we’re doing is finding a number for `y`.

It’s simply iteration, multiplication and addition. If we were dealing with large primes that require `Math::BigInt` and have many more numbers between 1 and itself would require a more efficient algorithm, but for primes less than 1,000? This is fast enough.

<br>

## Show Me The Code!

<br>

```perl
#!/usr/bin/env perl

use strict;
use warnings;
use feature qw{ say postderef signatures state };
no warnings qw{ experimental };

use List::Util qw{ sum0 };

my @cprimes;
for my $n ( 1 .. 1000 ) {
    if ( is_prime($n) ) {
        my $c = is_cuban_prime($n);
        push @cprimes, $n if $c;
    }
}
say join ', ', @cprimes;

sub is_cuban_prime ($n) {
    for my $i ( 1 ..  $n ) {
        my $c = sum0 1, ( 3 * $i ), ( 3 * ( $i**2 ) );
        return 1 if $c == $n;
    }
    return 0;
}

sub is_prime ($n) {
    return 0 if $n == 0;
    return 0 if $n == 1;
    for ( 2 .. sqrt $n ) { return 0 unless $n % $_ }
    return 1;
}
```

<br>

```perl
$ ./ch-2.pl
7, 19, 37, 61, 127, 271, 331, 397, 547, 631, 919
```

<br>

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

| &nbsp; [**Advent Calendar 2022**](/blog/advent-calendar-2022) &nbsp; |
