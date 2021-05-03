---
title: "The Weekly Challenge - 111"
date: 2021-05-03T00:00:00+00:00
description: "The Weekly Challenge - 111"
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
### 09. [TASK #1: Search Matrix](#TASK1)
### 10. [TASK #2: Ordered Letters](#TASK2)

<br>

## HEADLINES {#HEADLINES}
***

Here we are in the `Week #111`. The number **111** is very special and has a story as well. I am a big fan of the game of cricket, you shouldn't be surprised by the fact I come from India. In the game of cricket, the number **111** is sometimes called `a Nelson` after `Admiral Nelson`, who allegdly only had `One Eye, One Arm, One Leg`, near the end of his life. This is in fact inaccurate as `Nelson` never lost a leg. So it is a big deal reaching `Nelson Number`, thanks to the support and encouragement of **Team PWC**.

There is another reason that makes this week special as we are going to announce  our next champion. With great pride, I announce `Aaron Smith` as the next champion of **[Perl|Raku] Weekly Challenge**.

Welcome back `Andinus` after the break, thanks for sharing the [blog](https://andinus.tilde.institute/pwc/challenge-110/) and solutions in [Raku](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-110/andinus/raku).

I noticed something unusual this week. Usually I see members sharing solutions in **Perl** or **Raku** or *both*, sometimes even in *guest* languages as well. Normally you would expect more regular contributions than guest but this week one of the respected **Team PWC** member, `Cristina Heredia` shared one [Perl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/cristian-heredia/perl/ch-1.pl) solution but two [Python](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-110/cristian-heredia/python). Please don't get me wrong, I am not complaining, just sharing never seen before incident. The best part of the weekly challenge is `"There is no rule to play the game as we make our own rules as the game progress"`. Thank you for keeping the spirit of game going for so long.

I am pleasantly surprised to see my friend [`Ryan Thompson`](https://perlweeklychallenge.org/blog/meet-the-champion-038) back in action. Thanks for your [contributions](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-110/ryan-thompson). I hope and wish we get to read his blog soon.

I would also like to thank, `Lakpa Tashi Bhutia`, for sharing solutions to [`Week #13`](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-013/lakpatashi/perl), [`Week #14`](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-014/lakpatashi/perl) and [`Week #15`](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-015/lakpatashi/perl).

Last but not the least, we reached the magic number for the second week in a row, thank you everyone.

<br>

### Mohammad Anwar: Valid Phone Numbers
***

<iframe width="560" height="315" src="https://www.youtube.com/embed/nrL0sS-klo0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br><br>

### Mohammad Anwar: Transpose File
***

<iframe width="560" height="315" src="https://www.youtube.com/embed/wIx1m__r4SQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br><br>

Let us share some interesting stats from the [**GitHub repository**](https://github.com/manwar/perlweeklychallenge-club).

#### 1. Commits: 16,347 (+198)
#### 2. Pull Requests: 3,998 (+44)
#### 3. Contributors: 163
#### 4. Fork: 204
#### 5. Stars: 92

<br>

Last but not least, I would like to thank each and every member for their support and encouragement.

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2021. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2021. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of [**"The Weekly Challenge - 110"**](/blog/recap-challenge-110) by `Mohammad S Anwar`.

<br>

## PERL REVIEW {#PERLREVIEW}
***

Please check out **Perl** solutions review of the **["Perl Weekly Challenge - 108"](/blog/review-challenge-108)** by `Colin Crain`.

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

Please checkout the guest contributions for the [Week #110](https://perlweeklychallenge.org/blog/guest-contribution/#110).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## TASK #1 › Search Matrix {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org/)
***

You are given 5x5 matrix filled with integers such that each row is sorted from left to right and the first integer of each row is greater than the last integer of the previous row.

Write a script to find a given integer in the matrix using an efficient search algorithm.

## Example

        Matrix: [  1,  2,  3,  5,  7 ]
                [  9, 11, 15, 19, 20 ]
                [ 23, 24, 25, 29, 31 ]
                [ 32, 33, 39, 40, 42 ]
                [ 45, 47, 48, 49, 50 ]

        Input: 35
        Output: 0 since it is missing in the matrix

        Input: 39
        Output: 1 as it exists in the matrix

<br>

## TASK #2 › Ordered Letters {#TASK2}
##### **Submitted by:** [E. Choroba](https://github.com/choroba)
***

Given a word, you can sort its letters alphabetically (case insensitive). For example, "beekeeper" becomes "beeeeekpr" and "dictionary" becomes "acdiinorty".

Write a script to find the longest English words that don't change when their letters are sorted.

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 9th May 2021**.

***
