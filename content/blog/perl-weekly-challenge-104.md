---
title: "The Weekly Challenge - 104"
date: 2021-03-15T00:00:00+00:00
description: "The Weekly Challenge - 104"
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
### 09. [TASK #1: FUSC Sequence](#TASK1)
### 10. [TASK #2: NIM Game](#TASK2)

<br>

## HEADLINES {#HEADLINES}
***
<br>

This week was relative quiet but the modd was upbeat at always. Thanks to **Team PWC** for their support and encouragement. Special thanks to those who blog about it as well. You are doing great service to promote **Perl** and **Raku**. Keep it up.

We now have done interview with latest **Champion**, [**James Smith**](https://perlweeklychallenge.org/blog/meet-the-champion-2021-02/). It is a great feeling to be associated with such a great personality. Read his interview to find out more about him.

I would like to mention, `Colin Crain`, for his great service week after week. The **Perl** review is liked by every **Team PWC** members. I am sure you all agree the quality of review done by him. I know personally how much effort it takes to get it done. A big round of applause for him.

While talking about **Perl** review, we are still looking for volunteer to do **Raku** review. We now have a long list of backlog. You don't have to do it all. Even if you do one or two weeks that would be a great help.

Enjoy this week challenge and keep sharing the knowledge.

<br>

Let's share some interesting stats for `Week #103` from the [**GitHub repository**](https://github.com/manwar/perlweeklychallenge-club).

#### 1. Commits: 15,162 (+166)
#### 2. Pull Requests: 3,719 (+36)
#### 3. Contributors: 160
#### 4. Fork: 202 (+1)
#### 5. Stars: 91 (+1)

<br>

Last but not least, I would like to thank each and every member for their support and encouragement.

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2021. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2021. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of the [**"The Weekly Challenge - 103"**](/blog/recap-challenge-103) by `Mohammad S Anwar`.

<br>

## PERL REVIEW {#PERLREVIEW}
***

Please check out **Perl** solutions review of the **["Perl Weekly Challenge - 101"](/blog/review-challenge-101)** by `Colin Crain`.

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

Please try the n excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}

***

Please checkout the guest contributions for the [Week #103](https://perlweeklychallenge.org/blog/guest-contribution/#103).

<br>

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

***
## TASK #1 › FUSC Sequence {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org/)
***

Write a script to generate first 50 members of `FUSC Sequence`. Please refer to [OEIS](http://oeis.org/A002487) for more information._

The sequence defined as below:

    fusc(0) = 0
    fusc(1) = 1
    for n > 1:
    when n is even: fusc(n) = fusc(n / 2),
    when n is odd: fusc(n) = fusc((n-1)/2) + fusc((n+1)/2)

<br>

***
## TASK #2 › NIM Game {#TASK2}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org/)
***

Write a script to simulate the `NIM Game`.

It is played between 2 players. For the purpose of this task, let assume you play against the machine.

There are 3 simple rules to follow:

    a) You have 12 tokens
    b) Each player can pick 1, 2 or 3 tokens at a time
    c) The player who picks the last token wins the game

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 21st March 2021**.

***
