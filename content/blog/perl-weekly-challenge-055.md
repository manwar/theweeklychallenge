---
title: "Perl Weekly Challenge - 055"
date: 2020-04-06T00:00:00+00:00
description: "Perl Weekly Challenge - 055"
type: post
image: images/blog/pwc-base.svg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---
***
***

## HEADLINES

***
***

Today is the first Monday of the month and time to select the **Champion of the Month**. With great pleasure, we announce the Champion of last month, **Alicia Bielsa**, currently ranked **#029** with score of **86**. As of today, she has contributed **Perl (35)** and **Raku (8)** solutions. Contributions breakdown are listed as below:

    Perl Weekly Challenge - 004: Perl (2)
    Perl Weekly Challenge - 006: Perl (1)
    Perl Weekly Challenge - 007: Perl (1)
    Perl Weekly Challenge - 008: Perl (2)
    Perl Weekly Challenge - 010: Perl (1)
    Perl Weekly Challenge - 011: Perl (2)
    Perl Weekly Challenge - 012: Perl (2)
    Perl Weekly Challenge - 042: Perl (2)
    Perl Weekly Challenge - 043: Perl (1)
    Perl Weekly Challenge - 044: Perl (2)
    Perl Weekly Challenge - 045: Perl (2)
    Perl Weekly Challenge - 046: Perl (2)
    Perl Weekly Challenge - 047: Perl (2), Raku (1)
    Perl Weekly Challenge - 048: Perl (2), Raku (2)
    Perl Weekly Challenge - 049: Perl (2)
    Perl Weekly Challenge - 050: Perl (2), Raku (1)
    Perl Weekly Challenge - 051: Perl (2), Raku (1)
    Perl Weekly Challenge - 052: Perl (2), Raku (1)
    Perl Weekly Challenge - 053: Perl (2), Raku (2)
    Perl Weekly Challenge - 054: Perl (1)

Last but not the least, I woud like to thank each and every member for their support and encouragement.

***
***

## RECAP

***
***

Quick recap of the [**"Perl Weekly Challenge - 054"**](/blog/recap-challenge-054) by **Mohammad S Anwar**.

***
***

## PERL REVIEW

***
***

Please checkout **Perl** solutions review of the **["Perl Weekly Challenge - 052"](/blog/review-challenge-052)** by **Ryan Thompson**.

If you missed any past reviews then please checkout the [**collection**](/p5-reviews).

***
***

## RAKU REVIEW

***
***

If you missed any past reviews then please checkout the [**collection**](/p6-reviews).

***
***

## CHART

***
***

Please take a look at the [**charts**](/chart) showing interesting data.

I would like to thank every member of the team for their valuable suggestions. Please do share your experience with us.

***
***

## NEW MEMBERS

***
***

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please give it a try to an excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member **Saif Ahmed** of **Team PWC**.

***
***

## GUESTS

***
***

**Lubos Kolouch** shared solutions to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/lubos-kolouch/python/ch-1.py) and [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/lubos-kolouch/python/ch-2.py) in **Python**.

**Ulrich Rieke** shared solution to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/ulrich-rieke/cpp/ch-1.cpp) in **C++**.

**Ulrich Rieke** shared solutions to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/ulrich-rieke/haskell/ch-1.hs) and [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/ulrich-rieke/haskell/ch-2.hs) in **Haskell**.

**User Person** shared solutions to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/user-person/python/ch-1.py) and [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/user-person/python/ch-2.py) in **Python**.

Please find out [**past solutions**](/blog/guest-contribution) by respected **guests**. Please do share your creative solutions in other languages.

***
***

## TASK #1

***
***

### Flip Binary

***
***

You are given a binary number **B**, consisting of **N** binary digits `0` or `1`: **s0, s1, …, s(N-1)**.

Choose two indices **L** and **R** such that **0 ≤ L ≤ R < N** and flip the digits **s(L), s(L+1), …, s(R)**. By flipping, we mean change **0** to **1** and vice-versa.

For example, given the binary number `010`, the possible flip pair results are listed below:

* L=0, R=0 the result binary: `110`
* L=0, R=1 the result binary: `100`
* L=0, R=2 the result binary: `101`
* L=1, R=1 the result binary: `000`
* L=1, R=2 the result binary: `001`
* L=2, R=2 the result binary: `011`

Write a script to find the indices (**L,R**) that results in a binary number with maximum number of **1**s. If you find more than one maximal pair **L,R** then print all of them.

Continuing our example, note that we had three pairs **(L=0, R=0)**, **(L=0, R=2)**, and **(L=2, R=2)** that resulted in a binary number with two **1**s, which was the maximum. So we would print all three pairs.

***
***

## TASK #2

***
***

### Wave Array

***

Any array **N** of non-unique, unsorted integers can be arranged into a wave-like array such that **n1 ≥ n2 ≤ n3 ≥ n4 ≤ n5** and so on.

For example, given the array **[1, 2, 3, 4]**, possible wave arrays include **[2, 1, 4, 3]** or **[4, 1, 3, 2]**, since 2 ≥ 1 ≤ 4 ≥ 3 and 4 ≥ 1 ≤ 3 ≥ 2. This is not a complete list.

Write a script to print all possible wave arrays for an integer array **N** of arbitrary length.

#### Notes:

When considering **N** of any length, note that the first element is always greater than or equal to the second, and then the ≤, ≥, ≤, … sequence alternates until the end of the array.

***
***

Last date to submit the solution **23:59 (UK Time) Sunday 12th April 2020**.

***
***
