---
title: "Perl Weekly Challenge - 072"
date: 2020-08-03T00:00:00+00:00
description: "Perl Weekly Challenge - 072"
type: post
image: images/blog/pwc-base.svg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

## HEADLINES

***

Today is the first **Monday** of the **August 2020** and it is time to announce the **Champion of the Month**. With great pleasure, we announce the **Champion of the Month**, **Walt Mankowski**, currently ranked #044 with score of **58**. He joined the **Team PWC** in the **Week #013**. As of today, he has contributed **Perl (29)**, **C (6)** and **Python (12)**.

**Andrew Shitov** is on a mission it seems, he has done not one but two weeks **Live Raku Reviews**. Please check out the links down below. Please do like, share and comment the videos to appreciate the hard work he has put in. Great work, **Andrew**. Please keep it up.

**Colin Crain** is making the review process as much automated as possible. I appreciate his hardwork and dedication. We all enjoy your thorough **Perl Reviews**.

I didn't get time to do **live coding session** this week. I promise to catch up next week. If you want to check out past videos then please take a look at my **[YouTube Channel](https://www.youtube.com/channel/UCT91RkThBWByo1NL_M8R8Ig)**. Please do subscribe the channel if you don't want to miss new videos.

Last but not the least, I would like to thank each and every member for their support and encouragement.

## RECAP

***

Quick recap of the [**"Perl Weekly Challenge - 071"**](/blog/recap-challenge-071) by **Mohammad S Anwar**.

## PERL REVIEW

***

Please checkout **Perl** solutions review of the **["Perl Weekly Challenge - 070"](/blog/review-challenge-070)** by **Colin Crain**.

If you missed any past reviews then please checkout the [**collection**](/p5-reviews).

## RAKU REVIEW

***

Please checkout **Raku** solutions review of the **["Perl Weekly Challenge - 067"](/blog/p6-review-challenge-067)** and **["Perl Weekly Challenge - 070"](/blog/p6-review-challenge-070)** by **Andrew Shitov**.

If you missed any past reviews then please checkout the [**collection**](/p6-reviews).

## CHART

***

Please take a look at the [**charts**](/chart) showing interesting data.

I would like to thank every member of the team for their valuable suggestions. Please do share your experience with us.

## NEW MEMBERS

***

Csaba Simandi, **Perl** enthusiast from **Budapest, Hungary** joined the **Team PWC**.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please give it a try to an excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member **Saif Ahmed** of **Team PWC**.

## GUESTS

***

**Cheok-Yin Fung** shared solution to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/cheok-yin-fung/common-lisp/ch-1.lsp) in **Lisp**.

**Dave Jacoby** shared solution to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/dave-jacoby/node/ch-1.js) in **Node**.

**Mohammad S Anwar** shared solution to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/mohammad-anwar/swift/ch-1.swift) in **Swift**.

**Richard Park** shared solution to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/richard-park/apl/ch-1.aplf) in **APL**.

**Walt Mankowski** shared solutions to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/walt-mankowski/c/ch-1.c) and [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/walt-mankowski/c/ch-2.c) in **C**.

**Walt Mankowski** shared solutions to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/walt-mankowski/python/ch-1.py) and [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/walt-mankowski/python/ch-2.py) in **Python**.

**Wanderdoc** shared solution to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/wanderdoc/R/ch-1.R)  in **R**.

Please find out [**past solutions**](/blog/guest-contribution) by respected **guests**. Please do share your creative solutions in other languages.

<br>

***
## TASK #1 › Trailing Zeroes
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given a positive integer `$N (<= 10)`.

Write a script to print number of trailing zeroes in `$N!`.

## Example 1

#### Input: $N = 10
#### Output: 2 as $N! = 3628800 has 2 trailing zeroes

<br>

## Example 2

#### Input: $N = 7
#### Output: 1 as $N! = 5040 has 1 trailing zero

<br>

## Example 3

#### Input: $N = 4
#### Output: 0 as $N! = 24 has 0 trailing zero

<br>

***
## TASK #2 › Lines Range
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given a text file name `$file` and range `$A` -  `$B` where `$A <= $B`.

Write a script to display lines range `$A` and `$B` in the given file.

## Example

#### Input:

```perl
    $ cat input.txt
    L1
    L2
    L3
    L4
    ...
    ...
    ...
    ...
    L100
```
    $A = 4 and $B = 12

#### Output:

```perl
    L4
    L5
    L6
    L7
    L8
    L9
    L10
    L11
    L12
```

***

Last date to submit the solution **23:59 (UK Time) Sunday 9th August 2020**.

***
