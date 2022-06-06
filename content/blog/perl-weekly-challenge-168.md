---
title: "The Weekly Challenge - 168"
date: 2022-06-06T00:00:00+00:00
description: "The Weekly Challenge - 168"
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
### 09. [TASK #1: Perrin Prime](#TASK1)
### 10. [TASK #2: Home Prime](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #168`.

Let us all welcome guest `Matthew DiCicco` from `Little Rock, AR` sharing his first contributions in [**Java**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-167/michael-dicicco/java/challenge167/circularprime.java) and [**Python**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-167/michael-dicicco/python/task1.py).

What a coincidence, we have two members sharing the same surname `DiCicco` and he is none other than our very own champion [**Robert DiCicco**](https://theweeklychallenge.org/blog/meet-the-champion-2022-02).

Today is the first `Monday` of the month and time to declare our next champion. With great pleasure, I announce `Robert Ransbottom` as the next champion. He joined the `Team PWC` in the `Week #150`. As of today, he has contributed `31 solutions` in `Raku`.

The task `Gamma Function` of last week turned out to be untouchable. Could it be, it is more of mathy than the most. However, our champion, [**Ryan Thompson**](https://theweeklychallenge.org/blog/meet-the-champion-038) took all the trouble to give us the lighter side in his [**blog post**]( https://ry.ca/2022/05/lanczos-approximation).

Finally I got the time to participate in the weekly challenge. It was partly because I wanted to try the latest release `Perl v5.36`. After a short gap of two weeks, I share my solution to the task [**Circular Prime**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-167/mohammad-anwar/perl/ch-1.pl) in `Perl v5.36`. I am looking forward to `Colin Crain` comment on the same, if at all, if it's worth his time.

Good luck for the next challenge.

<br>

### Blogs with Creative Title
***

#### 1. [Primarily Functional](https://raku-musings.com/primarily-functional.html) by Arne Sommer.
#### 2. [Perl vs The World Crime League](https://jacoby.github.io/2022/06/02/perl-vs-the-world-crime-league-weekly-challenge-167.html) by Dave Jacoby.
#### 3. [too much math!](https://fluca1978.github.io/2022/05/30/PerlWeeklyChallenge167.html) by Luca Ferrari.
#### 4. [Prime, ePrim, mePri, imePr, rimeP ... and Gamma](https://pjcs-pwc.blogspot.com/2022/05/prime-eprim-mepri-imepr-rimep-and-gamma.html) by Peter Campbell Smith.
#### 5. [Circling the Gamma](https://blog.firedrake.org/archive/2022/06/The_Weekly_Challenge_167__Circling_the_Gamma.html) by Roger Bell_West.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 25,653 (+121)
#### 2. Pull Requests: 6,201 (+30)
#### 3. Contributors: 196 (+1)
#### 4. Fork: 249 (+1)
#### 5. Stars: 135 (+3)

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2022. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2022. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 167](/blog/recap-challenge-167)** by `Mohammad S Anwar`.

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

[**Michael DiCicco**](https://github.com/mikedici) from **Little Rock, AR**, joined the **Team PWC**.


Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}
***

Please checkout the guest contributions for the [**Week #167**](/blog/guest-contribution/#167).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Perrin Prime {#TASK1}
##### **Submitted by:** [Roger Bell_West](https://blog.firedrake.org/)
***

The `Perrin sequence` is defined to start with `[3, 0, 2]`; after that, term `N` is the sum of terms `N-2` and `N-3`. (So it continues `3, 2,
5, 5, 7, …`.)

> A Perrin prime is a number in the Perrin sequence which is also a prime number.

Calculate the first `13 Perrin Primes`.

f(13) = [2, 3, 5, 7, 17, 29, 277, 367, 853, 14197, 43721, 1442968193, 792606555396977]

<br>

## Task 2: Home Prime {#TASK2}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given an integer greater than 1.

Write a script to find the home prime of the given number.

In number theory, the home prime HP(n) of an integer n greater than 1 is the prime number obtained by repeatedly factoring the increasing concatenation of prime factors including repetitions.

Further information can be found on [**Wikipedia**](https://en.wikipedia.org/wiki/Home_prime) and [**OEIS**](https://oeis.org/A037274).

### Example

As given in the Wikipedia page,

    HP(10) = 773, as 10 factors as 2×5 yielding HP10(1) = 25, 25 factors as 5×5 yielding HP10(2) = HP25(1) = 55, 55 = 5×11 implies HP10(3) = HP25(2) = HP55(1) = 511, and 511 = 7×73 gives HP10(4) = HP25(3) = HP55(2) = HP511(1) = 773, a prime number.

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 12th June 2022**.

***
