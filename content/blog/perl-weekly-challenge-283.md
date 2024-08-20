---
title: "The Weekly Challenge - 283"
date: 2024-08-19T00:00:00+00:00
description: "The Weekly Challenge - 283"
type: post
image: images/twc-logo.png
author: Mohammad Sajid Anwar
tags: ["Perl", "Raku"]
---

## TABLE OF CONTENTS
***

### 01. [HEADLINES](#HEADLINES)
### 02. [SPONSOR](#SPONSOR)
### 03. [RECAP](#RECAP)
### 04. [PERL REVIEW](#PERLREVIEW)
### 05. [RAKU REVIEW](#RAKUREVIEW)
### 06. [CHART](#CHART)
### 07. [NEW MEMBERS](#NEWMEMBERS)
### 08. [GUESTS](#GUESTS)
### 09. [TASK #1: Unique Number](#TASK1)
### 10. [TASK #2: Digit Count Value](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #283` of `The Weekly Challenge`.

Thank you, `Paulo Custodio`, for dealing with past weeks challenges. Kudos for your efforts. I know it is not easy and time consuming. It shows your love for `Perl`. It really motivates me to get back to taking part in the weekly challenge. I really miss those days when I used to contribute not in `Perl` but also in `Raku`, `Python`, `Java` and `Swift`. I even used to have time to blog about it. Those who are with us for long enough would remember that.

Thank you, `Santiago Leyva`, for sharing solution to `Task #1` of [**Week #281**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-281/santiago-leyva/perl/ch-1.pl). I always encourage everyone, please try not to skip the week. If you are too busy then atleast find time for one task. This will keep you motivated. For me personally, if I break the continuity then it is very hard to get back.

Welcome back, `Niels van Dijke` and thanks for your contributions in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-282/perlboy1967/perl).

Thank you, `David Ferrone`, for sharing solutions in [**R**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-282/zapwai/r) for the first time. I hope and wish you continue alongwith other guest languages like `C`, `JavaScript`, `Python` and `Rust`.

Those who don't know about `Early Bird Club`, I want to inform you all that anyone can join the club by just sending one line email request. Once you join the club then you would get to try to the future challenges in advance. In return I would get your review to improve the task. This is very handy for me. I just throw challenges and request club member to review it for me. I get instant response from the club member most of the time. It has helped me in making task descriptive and easy to follow with good examples. If anyone interested to help me then they are more than welcome.

***

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `278` &nbsp;&nbsp;|&nbsp;&nbsp; 55 &nbsp;&nbsp;|&nbsp;&nbsp; 28 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|
|&nbsp;&nbsp; `279` &nbsp;&nbsp;|&nbsp;&nbsp; 54 &nbsp;&nbsp;|&nbsp;&nbsp; 28 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `280` &nbsp;&nbsp;|&nbsp;&nbsp; 54 &nbsp;&nbsp;|&nbsp;&nbsp; 28 &nbsp;&nbsp;|&nbsp;&nbsp; 27 &nbsp;&nbsp;|
|&nbsp;&nbsp; `281` &nbsp;&nbsp;|&nbsp;&nbsp; 58 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `282` &nbsp;&nbsp;|&nbsp;&nbsp; 62 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `278` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 68 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|
|&nbsp;&nbsp; `279` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 66 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|
|&nbsp;&nbsp; `280` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 63 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|
|&nbsp;&nbsp; `281` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 64 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `282` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 64 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (2716)
     2. Ruby       (717)
     3. Rust       (715)
     4. Haskell    (696)
     5. Lua        (632)
     6. C          (573)
     7. C++        (536)
     8. JavaScript (469)
     9. Go         (396)
    10. BQN        (358)

<br>

### Blogs with Creative Title
***

#### 1. [It’s Good To Change Keys](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2024/08/12) by Adam Russell.
#### 2. [Exact Triples and Modulation](https://github.com/atschneid/perlweeklychallenge-club/blob/master/challenge-282/atschneid/README.md) by Andrew Schneider.
#### 3. [Changingly Good](https://raku-musings.com/changingly-good.html) by Arne Sommer.
#### 4. [Good Keys](https://github.sommrey.de/the-bears-den/2024/08/16/ch-282.html) by Jorg Sommrey.
#### 5. [Power to the Regex!](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-282/challenge-282/matthias-muth#readme) by Matthias Muth.
#### 6. [Ch-ch-ch-changes!](https://packy.dardan.com/b/Q8) by Packy Anderson.
#### 7. [Integggers and keys](http://ccgi.campbellsmiths.force9.co.uk/challenge/282) by Peter Campbell Smith.
#### 8. [Good Keys for Changing Integers](https://blog.firedrake.org/archive/2024/08/The_Weekly_Challenge_282__Good_Keys_for_Changing_Integers.html) by Roger Bell_West.
#### 9. [Good keys](https://dev.to/simongreennet/good-keys-2elk) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 39,635 (`+159`)
#### 2. Pull Requests: 10,632 (`+59`)
#### 3. Contributors: 250
#### 4. Fork: 316
#### 5. Stars: 175

<br>

## SPONSOR {#SPONSOR}
***

With start of `Week #268`, we have a new sponsor `Lance Wicks` for the entire year `2024`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 282](/blog/recap-challenge-282)** by `Mohammad Sajid Anwar`.

<br>

## PERL REVIEW {#PERLREVIEW}
***

If you missed any past reviews then please check out the [**collection**](/p5-reviews).

<br>

## RAKU REVIEW {#RAKUREVIEW}
***

If you missed any past reviews then please check out the [**collection**](/p6-reviews).

<br>

## CHART {#CHART}
***

Please take a look at the [**charts**](/chart) showing interesting data.

I would like to `THANK` every member of the team for their valuable suggestions. Please do share your experience with us.

<br>

## NEW MEMBERS {#NEWMEMBERS}
***

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}
***

Please check out the guest contributions for the [**Week #282**](/blog/guest-contribution/#282).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Unique Number {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given an array of integers, `@ints`, where every elements appears more than once except one element.

Write a script to find the one element that appears exactly one time.

#### Example 1

    Input: @ints = (3, 3, 1)
    Output: 1

#### Example 2

    Input: @ints = (3, 2, 4, 2, 4)
    Output: 3

#### Example 3

    Input: @ints = (1)
    Output: 1

#### Example 4

    Input: @ints = (4, 3, 1, 1, 1, 4)
    Output: 3

<br>

## Task 2: Digit Count Value {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given an array of positive integers, `@ints`.

Write a script to return `true` if for every index `i` in the range `0 <= i < size of array`, the digit `i` occurs exactly the `$ints[$i]` times in the given array otherwise return `false`.

#### Example 1

    Input: @ints = (1, 2, 1, 0)
    Ouput: true

    $ints[0] = 1, the digit 0 occurs exactly 1 time.
    $ints[1] = 2, the digit 1 occurs exactly 2 times.
    $ints[2] = 1, the digit 2 occurs exactly 1 time.
    $ints[3] = 0, the digit 3 occurs 0 time.

#### Example 2

    Input: @ints = (0, 3, 0)
    Ouput: false

    $ints[0] = 0, the digit 0 occurs 2 times rather than 0 time.
    $ints[1] = 3, the digit 1 occurs 0 time rather than 3 times.
    $ints[2] = 0, the digit 2 occurs exactly 0 time.
<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 25th August 2024**.

***
