---
title: "The Weekly Challenge - 170"
date: 2022-06-20T00:00:00+00:00
description: "The Weekly Challenge - 170"
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
### 09. [TASK #1: Primorial Numbers](#TASK1)
### 10. [TASK #2: Kronecker Product](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to a yet another fun `Week #170`.

We have new member `Dario Mazzeo`, an experienced Perl hacker, joining the `Team PWC`.

Congratulation everyone for reaching the target of `100+ contributions` once again.

Even the guest contributions is becoming popular among the team members.

Once again, I couldn't participate in the weekly challenge. `Hay Fever` has troubled me a lot. Feeling little better today. I am planning to get back to `YouTube live coding`. Please wish me luck.

Not sure, if you know this, we have `father-son` duo in the team and they are `Robert DiCicco` and `Michael DiCicco`.

Keep sharing knowledge and spread the word among friends.

Good luck for the next challenge.

<br>

### Blogs with Creative Title
***

#### 1. [Brilliantly Discover Achilles' Imperfection](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/06/19) by Adam Russell.
#### 2. [An Abundance of Numbers](https://raku-musings.com/ambundance-numbers.html) by Arne Sommer.
#### 3. [Number Theoretic Quiz](https://e7-87-83.github.io/coding/challenge_169.html) by Cheok-Yin Fung.
#### 4. [Twenty-Two Brilliant Numbers](https://colincrain.com/2022/06/17/twenty-two-brilliant-numbers) by Colin Crain.
#### 5. [A Tendon-ous Task](https://colincrain.com/2022/06/18/a-tendon-ous-task) by Colin Crain.
#### 6. [primes and more primes!](https://fluca1978.github.io/2022/06/13/PerlWeeklyChallenge169.html) by Luca Ferrari.
#### 7. [Brilliant and Achilles](https://pjcs-pwc.blogspot.com/2022/06/brilliant-and-achilles.html) by Peter Campbell Smith.
#### 8. [The Brilliance of Achilles](https://blog.firedrake.org/archive/2022/06/The_Weekly_Challenge_169__The_Brilliance_of_Achilles.html) by Roger Bell_West.
#### 9, [It's all about the numbers](https://dev.to/simongreennet/its-all-about-the-numbers-4fh5) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 26,020 (+204)
#### 2. Pull Requests: 6,291 (+44)
#### 3. Contributors: 197
#### 4. Fork: 251 (+1)
#### 5. Stars: 138

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2022. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2022. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 169](/blog/recap-challenge-169)** by `Mohammad S Anwar`.

<br>

## PERL REVIEW {#PERLREVIEW}
***

Please check out **Perl** solutions review of **[The Weekly Challenge - 163](/blog/review-challenge-163)** by `Colin Crain`.

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

#### `Dario Mazzeo`, an experienced Perl hacker.

<br>

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}
***

Please checkout the guest contributions for the [**Week #169**](/blog/guest-contribution/#169).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Primorial Numbers {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

Write a script to generate first `10 Primorial Numbers`.

<br>

> Primorial numbers are those formed by multiplying successive prime numbers.

<br>

For example,

    P(0) = 1    (1)
    P(1) = 2    (1x2)
    P(2) = 6    (1x2×3)
    P(3) = 30   (1x2×3×5)
    P(4) = 210  (1x2×3×5×7)

<br>

## Task 2: Kronecker Product {#TASK2}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given 2 matrices.

Write a script to implement `Kronecker Product` on the given 2 matrices.

For more information, please refer [**wikipedia page**](https://en.wikipedia.org/wiki/Kronecker_product).

<br>

For example,

    A = [ 1 2 ]
        [ 3 4 ]

    B = [ 5 6 ]
        [ 7 8 ]

    A x B = [ 1 x [ 5 6 ]   2 x [ 5 6 ] ]
            [     [ 7 8 ]       [ 7 8 ] ]
            [ 3 x [ 5 6 ]   4 x [ 5 6 ] ]
            [     [ 7 8 ]       [ 7 8 ] ]

          = [ 1x5 1x6 2x5 2x6 ]
            [ 1x7 1x8 2x7 2x8 ]
            [ 3x5 3x6 4x5 4x6 ]
            [ 3x7 3x8 4x7 4x8 ]

          = [  5  6 10 12 ]
            [  7  8 14 16 ]
            [ 15 18 20 24 ]
            [ 21 24 28 32 ]

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 26th June 2022**.

***
