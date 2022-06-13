---
title: "The Weekly Challenge - 169"
date: 2022-06-13T00:00:00+00:00
description: "The Weekly Challenge - 169"
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
### 09. [TASK #1: Brilliant Numbers](#TASK1)
### 10. [TASK #2: Achilles Numbers](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to a very special `Week #169`.

`Why so special?`

Well, we got two new members joining the `Team PWC`, [**Stephen G Lynn**](https://github.com/steve-g-lynn) and [**habere-et-dispertire**](https://github.com/habere-et-dispertire).

There is another reason why it is so special. Thanks to the kind help by `Lance Wicks`, we finally have the design ready for the `1000 days` celebration T-shirt. It is time to finalise the list of champions. I am hoping by next week, I will have the final list. Following that, I will place the order. Sincere apology for the delay.

I missed the deadline to participate last week again. I find it hard to be regular. Talking about regular contributors, `Laurent Rosenfeld` is one of few who hardly missed a week. No wonder he is currently `rank #1` as of today.

Welcome back [**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-168/bruce-gray/raku) and [**Humberto Massa**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-168/massa/raku) after a short break.

Good luck for the next challenge.

<br>

### Blogs with Creative Title
***

#### 1. [Take the Long Way Home](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/06/12) by Adam Russell.
#### 2. [Primarily Prime](https://raku-musings.com/primarily-prime.html) by Arne Sommer.
#### 3. [This Is Gonna Take FOREVER!](https://jacoby.github.io/2022/06/08/this-is-gonna-take-forever-weekly-challenge-168.html) by Dave Jacoby.
#### 4. [prime numbers in many ways!](https://fluca1978.github.io/2022/06/06/PerlWeeklyChallenge168.html) by Luca Ferrari.
#### 5. [More funny numbers ... and a very big one](https://pjcs-pwc.blogspot.com/2022/06/more-funny-numbers-and-very-big-one.html) by Peter Campbell Smith.
#### 6. [At Home with the Perrins](https://blog.firedrake.org/archive/2022/06/The_Weekly_Challenge_168__At_Home_with_the_Perrins.html) by Roger Bell_West.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 25,816 (+163)
#### 2. Pull Requests: 6,247 (+46)
#### 3. Contributors: 197 (+1)
#### 4. Fork: 250 (+1)
#### 5. Stars: 138 (+3)

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2022. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2022. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 168](/blog/recap-challenge-168)** by `Mohammad S Anwar`.

<br>

## PERL REVIEW {#PERLREVIEW}
***

Please check out **Perl** solutions review of **[The Weekly Challenge - 162](/blog/review-challenge-162)** by `Colin Crain`.

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

#### 1. [Stephen G Lynn](https://github.com/steve-g-lynn), an expert `Perl`/`Raku` hacker.

#### 2. [habere-et-dispertire](https://github.com/habere-et-dispertire), an expert `Raku` hacker.

<br>

Please checkout the guest contributions for the [**Week #168**](/blog/guest-contribution/#168).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Brilliant Numbers {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

Write a script to generate first `20 Brilliant Numbers`.

> Brilliant numbers are numbers with two prime factors of the same length.

The number should have _exactly_ two prime factors, i.e. it's the product of two primes of the same length.

For example,

    24287 = 149 x 163
    24289 = 107 x 227

    Therefore 24287 and 24289 are 2-brilliant numbers.
    These two brilliant numbers happen to be consecutive as there are no even brilliant numbers greater than 14.

<br>

#### Output

    4, 6, 9, 10, 14, 15, 21, 25, 35, 49, 121, 143, 169, 187, 209, 221, 247, 253, 289, 299

<br>

## Task 2: Achilles Numbers {#TASK2}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

Write a script to generate first `20 Achilles Numbers`. Please checkout [**wikipedia**](https://en.wikipedia.org/wiki/Achilles_number) for more information.

> An Achilles number is a number that is powerful but imperfect. Named after Achilles, a hero of the Trojan war, who was also powerful but imperfect.

> A positive integer n is a powerful number if, for every prime factor p of n, p^2 is also a divisor.

> A number is imperfect if it has at least two distinct prime factors.

<br>

#### Output

     72, 108,  200,  288,  392,  432,  500,  648,  675,  800,  864, 968, 972, 1125, 1152, 1323, 1352, 1372, 1568, 1800

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 19th June 2022**.

***
