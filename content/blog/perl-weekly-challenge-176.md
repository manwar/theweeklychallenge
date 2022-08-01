---
title: "The Weekly Challenge - 176"
date: 2022-08-01T00:00:00+00:00
description: "The Weekly Challenge - 176"
type: post
image: images/twc-logo.png
author: Mohammad S Anwar
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
### 09. [TASK #1: Permuted Multiples](#TASK1)
### 10. [TASK #2: Reversible Numbers](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to `Week #176` of the weekly challenge.

Today is the first `Monday` of the month and time to declare our next champion. I declare, `Marton Polgar`, an expert in `Raku` as the next champion. As of today, he has contributed `46 solutions` in `Raku`.

`Laurent Rosenfeld`, thank you for the maximum guest contributions, `20 solutions` in `17 different` languages.

`Adam Russell` shared solution to the task `Last Sunday` in `Fortran` for the first time with us. Not only that he also wrote a dedicated [**blog post**](https://adamcrussell.livejournal.com/37064.html). Thank you for sharing your experience with us.

Once again, I shared solutions in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-175/mohammad-anwar/perl), [**Raku**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-175/mohammad-anwar/raku), [**Python**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-175/mohammad-anwar/python), [**Java**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-175/mohammad-anwar/java/theweeklychallenge) and [**Swift**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-175/mohammad-anwar/swift).

<br>

### Task #1: Last Sunday
***

<br>

![Last Sunday](/images/blog/wk-176-3.png)

<br>

### Task #2: Perfect Totient Numbers
***

<br>

![Perfect Totient Numbers](/images/blog/wk-176-2.png)

<br>

### TOP 10 Guest Languages
***

     1. Python  (1035)
     2. Haskell (482)
     3. Ruby    (362)
     4. Lua     (359)
     5. C       (251)
     6. C++     (248)
     7. Go      (207)
     8. Rust    (207)
     9. Node.js (191)
    10. Awk     (181)

<br>

Last but not the least, I have now placed the order of `40 T-shirts`. I will keep you updated as soon as I receive the order.

<br>

![T-shirt Order](/images/blog/wk-176-1.png)

***

<br>

### Blogs with Creative Title
***

#### 1. [Sunday Was Perfectly Totient](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/07/30) by Adam Russell.
#### 2. [Perfect at Last](https://raku-musings.com/perfect-at-last.html) by Arne Sommer.
#### 3. [I Know What You Did Last Sunday](https://colincrain.com/2022/07/30/i-know-what-you-did-last-sunday) by Colin Crain.
#### 4. [No Touchy, No Totient](https://colincrain.com/2022/07/31/no-touchy-no-totient) by Colin Crain.
#### 5. [Sunday Math!](https://fluca1978.github.io/2022/07/25/PerlWeeklyChallenge175.html) by Luca Ferrari.
#### 6. [Perfect Sunday](https://blog.firedrake.org/archive/2022/07/The_Weekly_Challenge_175__Perfect_Sunday.html) by Roger Bell_West.
#### 7. [Totient numbers on a Sunday](https://dev.to/simongreennet/totient-numbers-on-a-sunday-5fnc) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 26,958 (+150)
#### 2. Pull Requests: 6,527 (+39)
#### 3. Contributors: 201
#### 4. Fork: 253
#### 5. Stars: 143

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2022. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2022. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 175](/blog/recap-challenge-175)** by `Mohammad S Anwar`.

<br>

## PERL REVIEW {#PERLREVIEW}
***

Please check out **Perl** solutions review of **[The Weekly Challenge - 170](/blog/review-challenge-170)** by `Colin Crain`.

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

Please checkout the guest contributions for the [**Week #175**](/blog/guest-contribution/#175).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Permuted Multiples {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

Write a script to find the smallest integer `x` such that `x, 2x, 3x, 4x, 5x` and `6x` are permuted multiples of each other.

For example, the integers `125874` and `251748` are permutated multiples of each other as

    251784 = 2 x 125874

    and also both have the same digits but in different order.

<br>

### Output

    142857

<br>

## Task 2: Reversible Numbers {#TASK2}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

Write a script to find out all `Reversible Numbers` below `100`.

<br>

> A number is said to be a reversible if sum of the number and its reverse had only odd digits.

<br>

For example,

    36 is reversible number as 36 + 63 = 99 i.e. all digits are odd.
    17 is not reversible as 17 + 71 = 88, none of the digits are odd.

<br>

### Output

    10, 12, 14, 16, 18, 21, 23, 25, 27,
    30, 32, 34, 36, 41, 43, 45, 50, 52,
    54, 61, 63, 70, 72, 81, 90


<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 7th August 2022**.

***
