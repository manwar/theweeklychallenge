---
title: "The Weekly Challenge - 109"
date: 2021-04-19T00:00:00+00:00
description: "The Weekly Challenge - 109"
type: post
image: images/blog/pwc-base.svg
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
### 09. [TASK #1: Chowla Numbers](#TASK1)
### 10. [TASK #2: Four Squares Puzzle](#TASK2)

<br>

## HEADLINES {#HEADLINES}
***

First thing first, please accept my apology for the delay.

This is the first weekly challenge in the month of **Ramadan 2021**. My routine plan went for a toss. I should have been more prepared to the new routine because of **Ramadan**. Never mind, lesson learnt.

We have a new member, `Lakpa Tashi Bhutia`, joining the **Team PWC**. In the first week itself, he has already shared solutions to the following weeks in **Perl**.

#### [Week #001](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-001/lakpatashi/perl)
#### [Week #002](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-002/lakpatashi/perl)
#### [Week #003](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-003/lakpatashi/perl)
#### [Week #004](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-004/lakpatashi/perl)
#### [Week #005](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-005/lakpatashi/perl)
#### [Week #006](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-006/lakpatashi/perl)
#### [Week #007](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-007/lakpatashi/perl)
#### [Week #008](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-008/lakpatashi/perl)
#### [Week #009](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-009/lakpatashi/perl)
#### [Week #010](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-010/lakpatashi/perl)
#### [Week #011](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-011/lakpatashi/perl)

Well done, **Lakpa**.

As we all know, contributions in guest languages is on the rise. `Pete Houston` helped us this week with contributions in [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/pete-houston/c/ch-1.c), [Fortran](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/pete-houston/fortran/ch-1.f95) and [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/pete-houston/python/ch-1.py) for the first time.

<br>

### Mohammad Anwar: Locate Memory
***

<iframe width="560" height="315" src="https://www.youtube.com/embed/TZUOgXYlrgo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br><br>

### Mohammad Anwar: Bell Numbers
***

<iframe width="560" height="315" src="https://www.youtube.com/embed/dcF3Ojc_unQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br><br>

Let us share some interesting stats from the [**GitHub repository**](https://github.com/manwar/perlweeklychallenge-club).

#### 1. Commits: 15,986 (+183)
#### 2. Pull Requests: 3,914 (+45)
#### 3. Contributors: 163 (+1)
#### 4. Fork: 205 (+1)
#### 5. Stars: 91

<br>

Last but not least, I would like to thank each and every member for their support and encouragement.

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2021. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2021. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of [**"The Weekly Challenge - 108"**](/blog/recap-challenge-108) by `Mohammad S Anwar`.

<br>

## PERL REVIEW {#PERLREVIEW}
***

Please check out **Perl** solutions review of the **["Perl Weekly Challenge - 106"](/blog/review-challenge-106)** by `Colin Crain`.

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

[Lakpa Tash Bhutia](https://github.com/lakpatashi), an experienced **Perl** hacker joined the team.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}

***

Please checkout the guest contributions for the [Week #108](https://perlweeklychallenge.org/blog/guest-contribution/#108).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## TASK #1 › Chowla Numbers {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org/)
***

Write a script to generate first 20 `Chowla Numbers`, named after, **Sarvadaman D. S. Chowla**, a London born Indian American mathematician. It is defined as:

    C(n) = (sum of divisors of n) - 1 - n

## Output:

    0, 0, 0, 2, 0, 5, 0, 6, 3, 7, 0, 15, 0, 9, 8, 14, 0, 20, 0, 21

<br>

## TASK #2 › Four Squares Puzzle {#TASK2}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org/)
***

You are given four squares as below with numbers named a,b,c,d,e,f,g.

                  (1)                    (3)
            ╔══════════════╗      ╔══════════════╗
            ║              ║      ║              ║
            ║      a       ║      ║      e       ║
            ║              ║ (2)  ║              ║  (4)
            ║          ┌───╫──────╫───┐      ┌───╫─────────┐
            ║          │   ║      ║   │      │   ║         │
            ║          │ b ║      ║ d │      │ f ║         │
            ║          │   ║      ║   │      │   ║         │
            ║          │   ║      ║   │      │   ║         │
            ╚══════════╪═══╝      ╚═══╪══════╪═══╝         │
                       │       c      │      │      g      │
                       │              │      │             │
                       │              │      │             │
                       └──────────────┘      └─────────────┘

Write a script to place the given unique numbers in the square box so that sum of numbers in each box is the same.

## Example

    Input: 1,2,3,4,5,6,7

    Output:

        a = 6
        b = 4
        c = 1
        d = 5
        e = 2
        f = 3
        g = 7

        Box 1: a + b = 6 + 4 = 10
        Box 2: b + c + d = 4 + 1 + 5 = 10
        Box 3: d + e + f = 5 + 2 + 3 = 10
        Box 4: f + g = 3 + 7 = 10

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 25th April 2021**.

***
