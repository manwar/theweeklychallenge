---
title: "Advent Calendar - December 23, 2019"
date: 2019-12-23T00:00:00+00:00
description: "Advent Calendar - December 23, 2019"
type: post
image: images/blog/2019-12-23.jpg
author: Francis J Whittle
tags: ["Raku"]
---

[**Advent Calendar 2019**](/blog/advent-calendar-2019)
***

The gift is presented by **Francis J Whittle**. Today he is talking about his solutions to **Task #1: Perfect Numbers** of [**"The Weekly Challenge - 008"**](/blog/perl-weekly-challenge-008).

#### Write a script that computes the first five perfect numbers. A perfect number is an integer that is the sum of its positive proper divisors (all divisors except itself). Please check [Wiki](https://en.wikipedia.org/wiki/Perfect_number) for more information. This challenge was proposed by Laurent Rosenfeld.

***

## Perfect Numbers

I’m a little late to the blog this week, so I’ve had a look at what other people did before writing this up (I did my solution before checking out others’), and it looks like a number of people tried to filter the list of positive integers directly. As they discovered, this is mostly fine for the first four perfect numbers, but the fifth… takes a while to discover this way. I didn’t run into this timing issue, because I like to generate.

## How do I generate perfect number?

The first step is to find an algorithm. This is pretty well documented on the Wikipedia page:

> Euclid proved that all numbers of the form q(q + 1) / 2 are perfect numbers where q is (what would later be known as) a Mersenne Prime.

> Much more recently, Euler proved that in fact all perfect numbers are formed like this.

So the answer then is to generate Mersenne primes, and calculate perfect numbers using these.

## Lazily we Mersenne

A **Mersenne Prime** is of the form 2p - 1 where p is a prime number. So we lazily gather a list of all prime numbers up to ∞, check if they’re prime, apply the formula, and then check if the result is prime as well, because the sequence can produce composite numbers, but Mersenne numbers / primes are always prime.

I bound this to the term M:

    my \M := (^∞)
           .grep(*.is-prime)
           .map(-> $n { 2 ** $n - 1})
           .grep(*.is-prime);

## Perfect Map

The next step is to bind a mapping of the Mersenne primes to the corresponding perfect number:

    my \P := M.map: -> $q { $q * ($q + 1) div 2 };

I used div so the result is Int not Rat.

## Finally, get the results

P is now a lazily generated array that will find the nth Perfect number as P[n]. ^5 gives a list of the first 5, so

    P[^5]».put

Gets the first 5 perfect numbers, then prints each one on its own line.

***
If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2019**](/blog/advent-calendar-2019)
