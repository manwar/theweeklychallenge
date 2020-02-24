---
title: "Perl Weekly Challenge - 049"
date: 2020-02-23T00:00:00+00:00
description: "Perl Weekly Challenge - 049"
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

We have seen rise of interest in the **Perl Weekly Challenge** recently and with that we have now **150 members** in the **Team PWC**. We hope to keep you all engaged and interested. Please do share new ideas for challenges and any suggestion for improvement. We would like to thank **Ruben Westerberg** for suggesting task. We would also like to thank **Herbert Bollermann (@HrBollermann)** for interesting ideas for the task. Our superhero, **Ryan Thompson**, also offered ideas for future tasks. We will definitely use in the coming weeks, giving credit where it is due.

I noticed we have **300 followers** now on official [**Twitter account**](https://twitter.com/PerlWChallenge). We are thankful to each and everyone for their support and encouragement.

![PWC Stats](/images/blog/tweet-stat.png)

Last but not the least, I woud like to thank each and every member for their support and encouragement.

***
***

## RECAP

***
***

Quick recap of the [**"Perl Weekly Challenge - 048"**](/blog/recap-challenge-048) by **Mohammad S Anwar**.

***
***

## PERL REVIEW

***
***

Please checkout **Perl** solutions review of the [**"Perl Weekly Challenge - 047"**](/blog/review-challenge-047) by **Ryan Thompson**.

If you missed any past reviews then please checkout the [**collection**](/p5-reviews).

***
***

## RAKU REVIEW

***
***

Please checkout **Raku** solutions review of the [**"Perl Weekly Challenge - 047"**](/blog/p6-review-challenge-047) by **Ryan Thompson**.

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

#### Jen Guerra, an experienced Perl hacker from Massachusetts, USA.

#### Ian Rifkin, an experienced Perl hacker from Massachusetts, USA.

#### Jonas Berlin, an experienced Raku hacker from Finland.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

***
***

## GUESTS

***
***

**Jonas Berlin** shared solution to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/xkr47/rust/ch-1.rs) and [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/xkr47/rust/ch-2.rs) in **Rust**.

**Lubos Kolouch** shared solutions to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/lubos-kolouch/python/ch-1.py) and [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/lubos-kolouch/python/ch-2.py) in **Python**.

**Orestis Zekai** shared solutions to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/orestis-zekai/python/ch-1.py) and [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/orestis-zekai/python/ch-2.py) in **Python**.

**Ulrich Rieke** shared solution to [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/ulrich-rieke/haskell/ch-2.hs) in **Haskell**.

**User Person** shared solutions to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/user-person/python/ch-1.py) and [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-048/user-person/python/ch-2.py) in **Python**.

Please find out [**past solutions**](/blog/guest-contribution) by respected **guests**. Please do share your creative solutions in other languages.

***
***

## TASK #1

***
***

### Smallest Multiple

Write a script to accept a positive number as command line argument and print the smallest multiple of the given number consists of digits **0** and **1**.

For example:

###    For given number **55**, the smallest multiple is **110** consisting of digits **0** and **1**.

***
***

## TASK #2

***
***

### LRU Cache

Write a script to demonstrate **LRU Cache** feature. It should support operations **get** and **set**. Accept the capacity of the **LRU Cache** as command line argument.

> Definition of LRU: An access to an item is defined as a get or a set operation of the item. “Least recently used” item is the one with the oldest access time.

For example:

    capacity = 3
    set(1, 3)
    set(2, 5)
    set(3, 7)

    Cache at this point:
    [Least recently used] 1,2,3 [most recently used]

    get(2)      # returns 5

    Cache looks like now:
    [Least recently used] 1,3,2 [most recently used]

    get(1)      # returns 3

    Cache looks like now:
    [Least recently used] 3,2,1 [most recently used]

    get(4)      # returns -1

    Cache unchanged:
    [Least recently used] 3,2,1 [most recently used]

    set(4, 9)

    Cache is full, so pushes out key = 3:
    [Least recently used] 2,1,4 [most recently used]

    get(3)      # returns -1

I found this amazing post talking about [**LRU Cache**](https://www.interviewcake.com/concept/java/lru-cache).

***
***

Last date to submit the solution **23:59 (UK Time) Sunday 1st March 2020**.

***
***
