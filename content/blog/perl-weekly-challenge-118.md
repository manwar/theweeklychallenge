---
title: "The Weekly Challenge - 118"
date: 2021-06-21T00:00:00+00:00
description: "The Weekly Challenge - 118"
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
### 09. [TASK #1: Binary Palindrome](#TASK1)
### 10. [TASK #2: Adventure of Knight](#TASK2)

<br>

## HEADLINES {#HEADLINES}
***

Last week, I had the opportunity to meet the champion, [**Pete Houston**](/blog/meet-the-champion-2021-05). It was great talking to him.

Two new members, [**Lucas Ransan**](https://github.com/luc65r) and [**Adam Herzog**](https://github.com/adherzog), joined the weekly challenge last week. We now have **225 members** in the **Team PWC**.  Not only that, `Lucas` introduced a new guest language `Zig` to us and shared his [**solutions**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-117/luc65r/zig).

One thing, I did miss last week was the blog by `Abigail`. I hope and wish we would have him back next week. Having said, he continued experimenting with [**guest languages**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-117/abigail) like always.

Talking about missing contribution, I also missed the contributions by my best friend, `Mohammad Meraj Zia`, our own **Java** expert. I hope he comes back this week. I also missed guest contributions by `Ulrich Rieke` last week. I wish he would be back with loads.

I would also like to mention another respected member of **Team PWC**, `Paulo Custodio`. He keeps me busy all week with his witty solutions to past weeks challenge. It is always pleasure to see someone taking interest in solving previous challenges. Please keep it coming.

Welcome back, `Steven Wilson`, after a short break and thanks for sharing solutions in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/steven-wilson/perl/ch-1.pl) and [**Python**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/steven-wilson/python/ch-1.py).

Talking about comebacks, we had another comeback by `Vinod Kumar K`. Thanks for sharing solution in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/vinod-k/perl/ch-1.pl).

After a gap of two weeks, I also shared solution to [**Missing Row**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-117/mohammad-anwar/perl/ch-1.pl) task of last week. I also wanted to do **YouTube** video for the same but couldn't find the time, sorry. I promise I will do it this week.

I would like to request all **Team PWC** members please share the solution to the easier task of the week at least if you are too busy and don't have time for the difficult task. My gut feeling is that **Task #1** mostly can be done without putting too much time and effort. I may be wrong. Reason I am requesting, I would like to keep the momentum going. This also applies to me as well. I will try to keep it in mind like how I did last week.

Let us share some interesting stats from the [**GitHub repository**](https://github.com/manwar/perlweeklychallenge-club).
<br>

#### 1. Commits: 17,588 (+202)
#### 2. Pull Requests: 4,299 (+51)
#### 3. Contributors: 167 (+2)
#### 4. Fork: 212 (+1)
#### 5. Stars: 94 (+1)

<br>

Last but not least, I would like to thank each and every member for their support and encouragement.

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2021. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2021. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of [**"The Weekly Challenge - 117"**](/blog/recap-challenge-117) by `Mohammad S Anwar`.

<br>

## PERL REVIEW {#PERLREVIEW}
***

Please check out **Perl** solutions review of the **["Perl Weekly Challenge - 115"](/blog/review-challenge-115)** by `Colin Crain`.

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

Last week, two new members joined the **Team PWC**.

#### [Lucas Ransan](https://github.com/luc65r), an experienced Raku hacker from France.

#### [Adam Herzog](https://github.com/adherzog), an experienced Perl hacker.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}

***

Please checkout the guest contributions for the [**Week #117**](/blog/guest-contribution/#117).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## TASK #1 › Binary Palindrome {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org/)
***

You are given a positive integer `$N`.

Write a script to find out if the binary representation of the given integer is Palindrome. Print 1 if it is otherwise 0.

## Example

    Input: $N = 5
    Output: 1 as binary representation of 5 is 101 which is Palindrome.

    Input: $N = 4
    Output: 0 as binary representation of 4 is 100 which is NOT Palindrome.

<br>

## TASK #2 › Adventure of Knight {#TASK2}
##### **Submitted by:** [Cheok-Yin Fung](https://github.com/E7-87-83)
***

A knight is restricted to move on an 8×8 chessboard. The knight is denoted by `N` and its way of movement is the same as what it is defined in Chess. `*` represents an empty square. `x` represents a square with treasure.

> The Knight's movement is unique. It may move two squares vertically and one square horizontally, or two squares horizontally and one square vertically (with both forming the shape of an L).

There are `6 squares` with treasures.

Write a script to find the path such that Knight can capture all treasures. The Knight can start from the top-left square.

          a b c d e f g h
        8 N * * * * * * * 8
        7 * * * * * * * * 7
        6 * * * * x * * * 6
        5 * * * * * * * * 5
        4 * * x * * * * * 4
        3 * x * * * * * * 3
        2 x x * * * * * * 2
        1 * x * * * * * * 1
          a b c d e f g h

##### BONUS: If you believe that your algorithm can output one of the shortest possible path.
<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 27th June 2021**.

***
