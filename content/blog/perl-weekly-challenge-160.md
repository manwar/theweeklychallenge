---
title: "The Weekly Challenge - 160"
date: 2022-04-11T00:00:00+00:00
description: "The Weekly Challenge - 160"
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
### 09. [TASK #1: Four Is Magic](#TASK1)
### 10. [TASK #2: Equilibrium Index](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to yet another fun week, thanks to all the dedicated members of `Team PWC`.

I would like to mention one name, `Laurent Rosenfeld`, one of the few who stayed with us from day one. He is currently `ranked #1` in the leader board. He has maintained a big lead, no immediate threat to his place. As of today, he has contributed `291 Perl`, `297 Raku` and `219 blog`. Similarly, in the guest leaders, `Abigail` is currently `ranked #1`. His place is also very secured just like `Laurent Rosenfeld`.

Talking about ranks, my position in the leader board is under threat because of my irregular contributions. My current `rank #15` is no longer safe. There are immediate threat from `Duncan C. White` and `Paulo Custodio`. Last week, once again I missed the boat, unfortunately.

Welcome back, `Simon Proctor`, we missed you. Thanks for your `Raku` [**contributions**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-159/simon-proctor/raku).

Thank you, `Paulo Custodio`, for your contributions mostly `Perl`.

`Robert DiCicco` has been consistent as well with his `Perl`, `Raku` and few other guest contributions too.

I wish you all the best and good luck.

<br>

### Blogs with Creative Title
***

#### 1. [Farey and Farey Again, but in a Mobius Way](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/04/10) by Adam Russell.
#### 2. [Farey, Moebius and Raku](https://raku-musings.com/farey-moebius.html) by Arne Sommer.
#### 3. [Fareys Wear Boots](https://colincrain.com/2022/04/11/fareys-wear-boots) by Colin Crain.
#### 4. [Squarefree Is Only One Side Of the Story](https://colincrain.com/2022/04/11/squarefree-is-only-one-side-of-the-story) by Colin Crain.
#### 5. [Métal Perlant](https://jacoby.github.io/2022/04/04/mtal-perlant-weekly-challenge-159.html) by Dave Jacoby.
#### 6. [numbers and numbers](https://fluca1978.github.io/2022/04/04/PerlWeeklyChallenge159.html) by Luca Ferarri.
#### 7. [Farey and Moebius](https://blog.firedrake.org/archive/2022/04/The_Weekly_Challenge_159__Farey_and_Moebius.html) by Roger Bell_West.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 24,398 (+139)
#### 2. Pull Requests: 5,903 (+32)
#### 3. Contributors: 188
#### 4. Fork: 244
#### 5. Stars: 125

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2022. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2022. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 159](/blog/recap-challenge-159)** by `Mohammad S Anwar`.

<br>

## PERL REVIEW {#PERLREVIEW}
***

Please check out **Perl** solutions review of **[The Weekly Challenge - 155](/blog/review-challenge-155)** by `Colin Crain`.

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

Please checkout the guest contributions for the [**Week #159**](/blog/guest-contribution/#159).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## TASK #1 › Four Is Magic {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org/)
***

You are given a positive number, `$n < 10`.

Write a script to generate english text sequence starting with the English cardinal representation of the given number, the word 'is' and then the English cardinal representation of the count of characters that made up the first word, followed by a comma. Continue until you reach four.

<br>

### Example 1:

    Input: $n = 5
    Output: Five is four, four is magic.

<br>

### Example 2:

    Input: $n = 7
    Output: Seven is five, five is four, four is magic.

<br>

### Example 3:

    Input: $n = 6
    Output: Six is three, three is five, five is four, four is magic.

<br>

## TASK #2 › Equilibrium Index {#TASK2}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org/)
***

You are give an array of integers, `@n`.

Write a script to find out the `Equilibrium Index` of the given array, if found.

> For an array A consisting n elements, index i is an equilibrium index if the sum of elements of subarray A[0…i-1] is equal to the sum of elements of subarray A[i+1…n-1].

<br>

### Example 1:

    Input: @n = (1, 3, 5, 7, 9)
    Output: 3

<br>

### Example 2:

    Input: @n = (1, 2, 3, 4, 5)
    Output: -1 as no Equilibrium Index found.

<br>

### Example 3:

    Input: @n = (2, 4, 2)
    Output: 1

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 17th April 2022**.

***
