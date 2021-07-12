---
title: "The Weekly Challenge - 121"
date: 2021-07-12T00:00:00+00:00
description: "The Weekly Challenge - 121"
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
### 09. [TASK #1: Invert Bit](#TASK1)
### 10. [TASK #2: The Travelling Salesman](#TASK2)

<br>

## HEADLINES {#HEADLINES}
***

The `Week #120` became very special as far as guest contributions are concerned.

We received `92 guest contributions` last week in `33 languages`, thanks to **Team PWC**.

![Guest Contributions Week 120](/images/blog/guest-lang-120.jpg)

`16 guests` contributed to the `Week #120` record best figure.

![Guests Week 120](/images/blog/guests-120.jpg)

I would like to mention one relatively new member, `Lucas Ransan` who contributed in `4 languages` completely unknown to me before. Last week he introduced another new language `Odin`.

![Lucas Ransan Week 120](/images/blog/lucas-ransan-120.jpg)

Regular contributions reached `100+` mark after the gap of **5 weeks**, thanks to `38 members` of **Team PWC**.

![Team PWC Week 120](/images/blog/team-pwc-120.jpg)

Overall figures for **Perl** and **Raku** getting better every week, thanks to the dedications of **Team PWC**.

![Overall Contributions Week 120](/images/blog/overall-contributions-120.jpg)

<br>

Let us share some interesting stats from the [**GitHub repository**](https://github.com/manwar/perlweeklychallenge-club).

<br>

#### 1. Commits: 18,377 (+271)
#### 2. Pull Requests: 4,488 (+69)
#### 3. Contributors: 169 (+1)
#### 4. Fork: 214
#### 5. Stars: 97 (+1)

<br>

Last but not least, I would like to thank each and every member for their support and encouragement.

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2021. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2021. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of [**"The Weekly Challenge - 120"**](/blog/recap-challenge-120) by `Mohammad S Anwar`.

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

Please checkout the guest contributions for the [**Week #120**](/blog/guest-contribution/#120).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## TASK #1 › Invert Bit {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org/)
***

You are given integers 0 <= `$m` <= 255 and 1 <= `$n` <= 8.

Write a script to invert `$n` bit from the end of the binary representation of `$m` and print the decimal representation of the new binary number.

## Example

    Input: $m = 12, $n = 3
    Output: 8

    Binary representation of $m = 00001100
    Invert 3rd bit from the end = 00001000
    Decimal equivalent of 00001000 = 8

    Input $m = 18, $n = 4
    Output: 26

    Binary representation of $m = 00010010
    Invert 4th bit from the end = 00011010
    Decimal equivalent of 00011010 = 26

<br>

## TASK #2 › The Travelling Salesman {#TASK2}
##### **Submitted by:** [Jorg Sommrey](https://github.com/jo-37)
***

You are given a NxN matrix containing the distances between N cities.

Write a script to find a round trip of minimum length visiting all N cities exactly once and returning to the start.

## Example

    Matrix: [0, 5, 2, 7]
            [5, 0, 5, 3]
            [3, 1, 0, 6]
            [4, 5, 4, 0]

    Output:
            length = 10
            tour = (0 2 1 3 0)

##### BONUS 1: For a given number N, create a random NxN distance matrix and find a solution for this matrix.
##### BONUS 2: Find a solution for a random matrix of size 15x15 or 20x20

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 18th July 2021**.

***
