---
title: "The Weekly Challenge - 145"
date: 2021-12-27T00:00:00+00:00
description: "The Weekly Challenge - 145"
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
### 09. [TASK #1: Dot Product](#TASK1)
### 10. [TASK #2: Palindromic Tree](#TASK2)
br>

## HEADLINES {#HEADLINES}
***

<br>

`Merry Christmas` to all the members of **Team PWC**. I wish you all the happiness in the world.

Last week for me was for the family. I spent quality time with kids. I have another week off left. I am looking forward to it. I hope and wish you also had great time with your loved ones. I would like to thank the dedicated and passionate members of **Team PWC** who still manage to contribute in the holiday season. I know it is not easy but you still did it. I suggest if you struggle for time for the weekly challenge then simply attempt only task one as it generally takes no time. I would like mention one name specially, `Colin Crain`, for being the one-man army when it comes to **Perl Reviews**. You have done a brilliant job. It is no longer a secret how much your work is appreciated by the **Team PWC** members.

With the regard to the `1000 days T-shirt campaign`, I haven't had any response from the remaining champions. I can understand they are busy with the family. I am hoping in the new year they will find time to respond to my email.

This is the last week of the year `2021`, let me take this opportunity to say `Good Bye` on behalf of **Team PWC**.

<br>

### Revisit The Weekly Challenge - 075 (Task #1: Coins Sum)
***

<iframe width="560" height="315" src="https://www.youtube.com/embed/Q8UPvDMYqJA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br><br>

### Advent Calendar 2021
***

Small improvement to the `Advent Calendar`, it now shows the topic and author on mouse over day image. I hope you like it.

<br>

#### Day 21: [Product SubArray](/blog/advent-calendar-2021-12-21) by E. Choroba.
#### Day 22: [Word Search](/blog/advent-calendar-2021-12-22) by Javier Luque.
#### Day 23: [Transpose CSV File](/blog/advent-calendar-2021-12-23) by Ryan Thompson.
#### Day 24: [Swap Odd/Even bits](/blog/advent-calendar-2021-12-24) by Mohammad S Anwar.

<br>

### Blogs with Creative Title
***

#### 1. [A Stocking Full of Numbers: Semiprimes and the Ulam Sequence](http://www.rabbitfarm.com/cgi-bin/blosxom/2021/12/26/perl) by Adam Russell.
#### 2. [Primarily Ulam with Raku (and perl)](https://raku-musings.com/primarily-ulam.html) by Arne Sommer.
#### 3. [Almost Prime and In Sequence: The Weekly Challenge #144](https://jacoby.github.io/2021/12/20/almost-prime-and-in-sequence-the-weekly-challenge-144.html) by Dave Jacoby
#### 4. [Perl Weekly Challenge 144: headache!](https://fluca1978.github.io/2021/12/20/PerlWeeklyChallenge144.html) by Luca Ferrari.
#### 5. [Illuminating the Ulam](https://pjcs-pwc.blogspot.com/2021/12/illuminating-ulam.html) by Peter Campbell Smith.
#### 6. [The Weekly Challenge 144: Semiprime Ulam](https://blog.firedrake.org/archive/2021/12/The_Weekly_Challenge_144__Semiprime_Ulam.html) by Roger Bell_West.

<br>

Let us share some interesting stats from the [**GitHub repository**](https://github.com/manwar/perlweeklychallenge-club).

#### 1. Commits: 22,225 (+133)
#### 2. Pull Requests: 5,416 (+31)
#### 3. Contributors: 183
#### 4. Fork: 234
#### 5. Stars: 118

<br>

Last but not least, I would like to thank each and every member for their support and encouragement.

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2021. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2021. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of **["The Weekly Challenge - 144"](/blog/recap-challenge-144)** by `Mohammad S Anwar`.

<br>

## PERL REVIEW {#PERLREVIEW}
***

Please check out **Perl** solutions review of the **["The Weekly Challenge - 140"](/blog/review-challenge-140)** by `Colin Crain`.

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

Please checkout the guest contributions for the [**Week #144**](/blog/guest-contribution/#144).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## TASK #1 › Dot Product {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given 2 arrays of same size, `@a` and `@b`.

Write a script to implement `Dot Product`.

## Example:

    @a = (1, 2, 3);
    @b = (4, 5, 6);

    $dot_product = (1 * 4) + (2 * 5) + (3 * 6) => 4 + 10 + 18 => 32

<br>

## TASK #2 › Palindromic Tree {#TASK2}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given a string `$s`.

Write a script to create a `Palindromic Tree` for the given string.

I found this [**blog**](https://medium.com/@alessiopiergiacomi/eertree-or-palindromic-tree-82453e75025b) exaplaining `Palindromic Tree` in detail.

## Example 1:

    Input: $s = 'redivider'
    Output: r redivider e edivide d divid i ivi v

## Example 2:

    Input: $s = 'deific'
    Output: d e i ifi f c

## Example 3:

    Input: $s = 'rotors'
    Output: r rotor o oto t s

## Example 4:

    Input: $s = 'challenge'
    Output: c h a l ll e n g

## Example 5:

    Input: $s = 'champion'
    Output: c h a m p i o n

## Example 6:

    Input: $s = 'christmas'
    Output: c h r i s t m a

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 2nd January 2022**.

***
