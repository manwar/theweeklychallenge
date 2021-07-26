---
title: "The Weekly Challenge - 123"
date: 2021-07-26T00:00:00+00:00
description: "The Weekly Challenge - 123"
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
### 09. [TASK #1: Ugly Numbers](#TASK1)
### 10. [TASK #2: Square Points](#TASK2)

<br>

## HEADLINES {#HEADLINES}
***

Welcome to the special edition of `Week #123`. Why special? Well, the number `123` is special and magic.

I am glad, we did it again, we crossed the magic number `100+` contributions one more time. Thank you **Team PWC**. What a shame, I couldn't contribute last week. It was really hectic week for me. I am going to make it up this week, I promise.

`Lucas Ransan` seems like on a mission. He, one more time introduced another new laugage, `Coconut` and shared the [**solutions**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-122/luc65r/coconut).

Guest contributions is not behind the regular contributions, thanks to the support and encouragement of **Team PWC**. We crossed `50+` guest contributions. The ultimate target is go past `100` at least once. The closed we went was `92` in the **Week #120**. I am hopefull. There are few who can make it possible, you know who I am talking about. No pressure though :-).

Welcome back `Andinus`, our **Raku Guru**, after a short break and thanks for sharing your [**solutions**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-122/andinus/raku) with us. He also shared solution in [**C**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-122/andinus/c/ch-1.c). We got bonus as well as he wrote a nice [**blog**](https://andinus.tilde.institute/pwc/challenge-122/) about it.

I would also like to thank `Bruce Gray` for sharing profile photo with us and also for being regular contributors to the weekly challenge now. I appreciate your participation and contributions in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-122/bruce-gray/perl) & [**Raku**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-122/bruce-gray/raku).

What a pleasant surprise to have `Markus Holzer` back in action. Technically speaking, he always shared his **Raku** magic on `Twitter`. But this time he favoured us and shared the [**code**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-122/markus-holzer/raku) with pull request. I am a big fan of him and admire his **Raku** knowledge. Reading his post on `Twitter` about the weekly task is always fun and learning experience for me.

I would like to thank every member of **Team PWC** for being regular contributors. A gentle reminder don't feel pressured tackling both tasks if you are short of free time. You can always maintain the continuity by doing the easy one i.e. **Task #1**. I know it applies to me as well. I am sorry once again.

Let us share some interesting stats from the [**GitHub repository**](https://github.com/manwar/perlweeklychallenge-club).

<br>

#### 1. Commits: 18,752 (+169)
#### 2. Pull Requests: 4,596 (+45)
#### 3. Contributors: 171
#### 4. Fork: 216
#### 5. Stars: 97

<br>

Last but not least, I would like to thank each and every member for their support and encouragement.

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2021. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2021. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of [**"The Weekly Challenge - 122**](/blog/recap-challenge-122) by `Mohammad S Anwar`.

<br>

## PERL REVIEW {#PERLREVIEW}
***

Please check out **Perl** solutions review of the **["The Weekly Challenge - 120"](/blog/review-challenge-120)** by `Colin Crain`.

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

Please checkout the guest contributions for the [**Week #121**](/blog/guest-contribution/#121).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## TASK #1 › Ugly Numbers {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org/)
***

You are given an integer `$n` >= 1.

Write a script to find the $n<sup>th</sup> element of Ugly Numbers.

> Ugly numbers are those number whose prime factors are 2, 3 or 5. For example, the first 10 Ugly Numbers are 1, 2, 3, 4, 5, 6, 8, 9, 10, 12.

## Example

    Input: $n = 7
    Output: 8

    Input: $n = 10
    Output: 12

<br>

## TASK #2 › Square Points {#TASK2}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org/)
***

You are given coordinates of four points i.e. (x1, y1), (x2, y2), (x3, y3) and (x4, y4).

Write a script to find out if the given four points form a square.

## Example

    Input: x1 = 10, y1 = 20
           x2 = 20, y2 = 20
           x3 = 20, y3 = 10
           x4 = 10, y4 = 10
    Output: 1 as the given coordinates form a square.

    Input: x1 = 12, y1 = 24
           x2 = 16, y2 = 10
           x3 = 20, y3 = 12
           x4 = 18, y4 = 16
    Output: 0 as the given coordinates doesn't form a square.

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 1st August 2021**.

***
