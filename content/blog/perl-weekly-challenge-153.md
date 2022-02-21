---
title: "The Weekly Challenge - 153"
date: 2022-02-21T00:00:00+00:00
description: "The Weekly Challenge - 153"
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
### 09. [TASK #1: Left Factorials](#TASK1)
### 10. [TASK #2: Factorions](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome [**PokGoPun**](https://github.com/pokgopun) to the `Team PWC`. We now have `250 members` in the team.

Last week, we had the opportunity to interview the latest champion, [**Alexander Pankoff**](https://theweeklychallenge.org/blog/meet-the-champion-2022-01). It was pleasure knowing him. Please do checkout to find out more about him.

`Lubos Kolouch` shared solution in [**Java**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-152/lubos-kolouch/java) for the first time. He has also shared in **Python** and **PHP** in the past. While talking about guest contributors, I would like to mention one more name, `Eric Cheung`. He was introduced to the weekly challenge by fellow member, `Cheok-Yin Fung`. He is currently `ranked #12` and recently overtook `Cheok-Yin Fung`.

Enjoy the week with the another set of tasks. Good luck team.

<br>

### Blogs with Creative Title
***

#### 1. [Challenge 152 Task #1 - Summing up minimums](https://pankoff.net/pages/perl-weekly-challenge/challenge-152-task-1.html) by Alexander Pankoff.
#### 2. [Challenge 152 Task #2 - Untangling the rects](https://pankoff.net/pages/perl-weekly-challenge/challenge-152-task-2.html) by Alexander Pankoff.
#### 3. [Triangular Rectangle with Raku](https://raku-musings.com/triangular-rectangle.html) by Arne Sommer.
#### 4. [The Path in the Pyramid](https://colincrain.com/2022/02/16/the-path-in-the-pyramid) by Colin Crain.
#### 5. [Who’s Masking the Mask?](https://colincrain.com/2022/02/19/whos-masking-the-mask) by Colin Crain.
#### 6. [Functional Paths: Weekly Challenge #152 Pt. 1](https://jacoby.github.io/2022/02/15/functional-paths-weekly-challenge-152.html) by Dave Jacoby
#### 7. [Think Inside The Box: Weekly Challenge #152 Pt. 2](https://jacoby.github.io/2022/02/16/think-inside-the-box-weekly-challenge-152-pt-2.html) by Dave Jacoby.
#### 8. [Perl Weekly Challenge 152: St. Valendtine's sums and triangles](https://fluca1978.github.io/2022/02/14/PerlWeeklyChallenge152.html) by Luca Ferrari.
#### 9. [Lots of angles this week](https://pjcs-pwc.blogspot.com/2022/02/lots-of-angles-this-week.html) by Peter Campbell Smith.
#### 10. [The Weekly Challenge 152: Triangles, Rectangles, and Objects](https://blog.firedrake.org/archive/2022/02/The_Weekly_Challenge_152__Triangles__Rectangles__and_Objects.html) by Roger Bell_West.
#### 11. [Triangles and rectangles](https://dev.to/simongreennet/triangles-and-rectangles-45p8) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 23,419 (+123)
#### 2. Pull Requests: 5,677 (+32)
#### 3. Contributors: 186
#### 4. Fork: 243 (+1)
#### 5. Stars: 119

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2021. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2021. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of **["The Weekly Challenge - 152"](/blog/recap-challenge-152)** by `Mohammad S Anwar`.

<br>

## PERL REVIEW {#PERLREVIEW}
***

Please check out **Perl** solutions review of the **["The Weekly Challenge - 148"](/blog/review-challenge-148)** by `Colin Crain`.

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

[PokGoPun](https://github.com/pokgopun), an experienced `Perl` hacker joined the `Team PWC`.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}
***

Please checkout the guest contributions for the [**Week #152**](/blog/guest-contribution/#152).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## TASK #1 › Left Factorials {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org/)
***

Write a script to compute `Left Factorials` of `1 to 10`. Please refer [OEIS A003422](http://oeis.org/A003422) for more information.

### Expected Output:

    1, 2, 4, 10, 34, 154, 874, 5914, 46234, 409114

<br>

## TASK #2 › Factorions {#TASK2}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org/)
***

You are given an integer, `$n`.

Write a script to figure out if the given integer is factorion.

> A factorion is a natural number that equals the sum of the factorials of its digits.

### Example 1:

    Input: $n = 145
    Output: 1

        Since 1! + 4! + 5! => 1 + 24 + 120 = 145

### Example 2:

    Input: $n = 123
    Output: 0

        Since 1! + 2! + 3! => 1 + 2 + 6 <> 123

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 27th February 2022**.

***
