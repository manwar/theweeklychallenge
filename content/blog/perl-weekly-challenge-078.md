---
title: "The Weekly Challenge - 078"
date: 2020-09-14T00:00:00+00:00
description: "The Weekly Challenge - 078"
type: post
image: images/blog/pwc-base.svg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

## TABLE OF CONTENTS
***

### 1. [HEADLINES](#HEADLINES)
### 2. [TASK #1: Leader Element](#TASK1)
### 3. [TASK #2: Left Rotation](#TASK2)
### 4. [RECAP](#RECAP)
### 5. [PERL REVIEW](#PERLREVIEW)
### 6. [RAKU REVIEW](#RAKUREVIEW)
### 7. [CHART](#CHART)
### 8. [NEW MEMBERS](#NEWMEMBERS)
### 9. [GUESTS](#GUESTS)

<br>

## HEADLINES {#HEADLINES}
***

Last week we announced the winner of `August 2020` and today we have the [interview](/blog/meet-the-champion-2020-08) with `Cheok-Yin Fung` available for everyone.

<br>

This week, we had `18 contributions` by guests in **7** different languages. I would like to **THANK** each and every guest contributors.

#### 1) Haskell: 6
#### 2) Python: 5
#### 3) Clojure: 2
#### 4) Lisp: 2
#### 5) C++: 1
#### 6) HTML: 1
#### 7) XSLT: 1

<br>

While we are talking about contributions, lets share some interesting stats from the [**GitHub repository**](https://github.com/manwar/perlweeklychallenge-club).

#### 1) Commits: 9345 (+223)
#### 2) Pull Requests: 2272 (+49)
#### 3) Contributors: 131 (+7)
#### 4) Fork: 159 (+5)
#### 5) Stars: 76 (+2)

<br>

Last but not the least, I would like to thank each and every member for their support and encouragement.

***
## TASK #1 › Leader Element {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given an array `@A` containing distinct integers.

Write a script to find all leader elements in the array `@A`. Print `(0)` if none found.

> An element is leader if it is greater than all the elements to its right side.

## Example 1:

    Input: @A = (9, 10, 7, 5, 6, 1)
    Output: (10, 7, 6, 1)

## Example 2:

    Input: @A = (3, 4, 5)
    Output: (5)

<br>

***
## TASK #2 › Left Rotation {#TASK2}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given array `@A` containing positive numbers and `@B` containing one or more indices from the array `@A`.

Write a script to left rotate `@A` so that the number at the first index of `@B` becomes the first element in the array. Similary, left rotate `@A` again so that the number at the second index of `@B` becomes the first element in the array.

## Example 1:

    Input:
        @A = (10 20 30 40 50)
        @B = (3 4)

#### Explanation:

    a) We left rotate the 3rd index element (40) in the @A to make it 0th index member in the array.
            [40 50 10 20 30]

    b) We left rotate the 4th index element (50) in the @A to make it 0th index member in the array.
            [50 10 20 30 40]

    Output:
        [40 50 10 20 30]
        [50 10 20 30 40]

## Example 2:

    Input:
        @A = (7 4 2 6 3)
        @B = (1 3 4)

#### Explanation:

    a) We left rotate the 1st index element (4) in the @A to make it 0th index member in the array.
            [4 2 6 3 7]

    b) We left rotate the 3rd index element (6) in the @A to make it 0th index member in the array.
            [6 3 7 4 2]

    c) We left rotate the 4th index element (3) in the @A to make it 0th index member in the array.
            [3 7 4 2 6]

    Output:
        [4 2 6 3 7]
        [6 3 7 5 2]
        [3 7 4 2 6]

<br>

## RECAP {#RECAP}
***

Quick recap of the [**"The Weekly Challenge - 077"**](/blog/recap-challenge-077) by `Mohammad S Anwar`.

<br>

## PERL REVIEW {#PERLREVIEW}
***

Please checkout **Perl** solutions review of the **["The Weekly Challenge - 076"](/blog/review-challenge-076)** by `Colin Crain`.

If you missed any past reviews then please checkout the [**collection**](/p5-reviews).

<br>

## RAKU REVIEW {#RAKUREVIEW}
***

If you missed any past reviews then please checkout the [**collection**](/p6-reviews).

<br>

## CHART {#CHART}
***

Please take a look at the [**charts**](/chart) showing interesting data.

I would like to thank every member of the team for their valuable suggestions. Please do share your experience with us.

<br>

## NEW MEMBERS {#NEWMEMBERS}

***

#### 1) [Shasank Shah](https://github.com/shasank-shah), an experienced Perl hacker.

#### 2) [P6steve](https://github.com/p6steve), an experienced Raku hacker.

#### 3) [Flavio Poletti](https://github.polettix.it/ETOOBUSY)

> Perl Hacker from Roma, Italia. I mainly use Perl for my own interests and stuff, trying to blog about it when possible at https://github.polettix.it/ETOOBUSY/.

<br>

With the above additions, we now have `188 members` in the **Team PWC**.

#### [Aviral Goel](https://github.com/aviralg), Programming Languages student at Northeastern University, Boston, MA joined as guest.

<br>

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please give it a try to an excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}

***

#### 1) Andrew Shitov shared solution to [Task #2](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/ash/cpp/ch-2.cpp) in C++.

#### 2) Andrew Shitov shared solution to [Task #2](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/ash/html/ch-2.html) in HTML.

#### 3) Andrew Shitov shared solution to [Task #2](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/ash/xslt/ch-2.xslt) in XSLT.

#### 4) Aviral Goel shared solutions to [Task #1](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/aviral-goel/haskell/ch-1.hs) and [Task #2](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/aviral-goel/haskell/ch-2.hs) in Haskell.

#### 5) Cheok-Yin Fung shared solution to [Task #1](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/cheok-yin-fung/common-lisp/ch-1.lsp) in Lisp.

#### 6) Cheok-Yin Fung shared solution to [Task #1](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/cheok-yin-fung/python/ch-1.py) in Python.

#### 7) Lubos Kolouch shared solution to [Task #1](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/lubos-kolouch/python/ch-1.py) and [Task #2](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/lubos-kolouch/python/ch-2.py) in Python.

#### 8) Myoungjin Jeon shared solutions to [Task #1](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/jeongoon/haskell/ch-1.hs) and [Task #2](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/jeongoon/haskell/ch-2.hs) in Haskell.

#### 9) Myoungjin Jeon shared solutions to [Task #1](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/jeongoon/common-lisp/ch-1.lsp) in Lisp.

#### 10) Roger Bell_West shared solutions to [Task #1](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/roger-bell-west/python/ch-1.py) and [Task #2](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/roger-bell-west/python/ch-2.py) in Python.

#### 11) Tyler Wardhaugh shared solutions to [Task #1](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/tyler-wardhaugh/clojure/src/tw/weekly/ch_1.clj) and [Task #2](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/tyler-wardhaugh/clojure/src/tw/weekly/ch_2.clj) in Clojure.

#### 12) Ulrich Rieke shared solutions to [Task #1](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/ulrich-rieke/haskell/ch-1.hs) and [Task #2](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/ulrich-rieke/haskell/ch-2.hs) in Haskell.

<br>

Please find out [**past solutions**](/blog/guest-contribution) by respected **guests**. Please do share your creative solutions in other languages.

***

Last date to submit the solution **23:59 (UK Time) Sunday 20th September 2020**.

***
