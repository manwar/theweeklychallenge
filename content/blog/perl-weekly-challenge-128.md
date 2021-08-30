---
title: "The Weekly Challenge - 128"
date: 2021-08-30T00:00:00+00:00
description: "The Weekly Challenge - 128"
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
### 09. [TASK #1: Maximum Sub-Matrix](#TASK1)
### 10. [TASK #2: Minimum Platforms](#TASK2)

<br>

## HEADLINES {#HEADLINES}
***

Welcome to yet another fun week. It has been a great journey together.

We have 2 new members joined us last week, [Ioannis Bourlakos](https://github.com/jbourlakos), and [Ian Goodnight](https://github.com/iangoodnight). Welcome on board Ioannis and Ian and thanks for your first contributions.

`Jared Martin` shared an interesting fact.

> "minor" milestone anniversary: 127 == 1111111 in base 2 and next week we'll be entering "Extended ASCII" territory.

I would also like to thank, `Cheok-Yin Fung` for contributing fun tasks. I have been lucky to have such an amazing support. I can't thank enough for the support and kind words.

I would like to appeal **Team PWC** to help with **Raku** reviews. It has been neglected for months now. I am looking for help with **Raku** reviews to at least clear the pending backlog. I don't expect one person to do it all. You can pick and choose a week for review. Before you start working on review, please do let me know so that we know who is working on a particular week. I am looking forward to the resumption of **Raku** weekly review.

Talking about reviews, I would like to thank `Colin Crain` for the **Perl** weekly review without fail for so many months now. It has been appreciated by each member of **Team PWC**. It is the main talking point every week.

<br>

### Blogs with Creative Title
***

#### 1. [Disjoint Conflict](https://raku-musings.com/disjoint-conflict.html) by Arne Sommer.

#### 2. [Time Out-of-Joint — at Set Intervals](https://colincrain.com/2021/08/29/time-out-of-joint-at-set-intervals/) by Colin Crain.

#### 3. [Multiple Sets of Interval Training](https://jacoby.github.io/2021/08/24/multiple-sets-of-interval-training-the-weekly-challenge-127.html) by Dave Jacoby.

#### 4. [Disjoint Conflict](https://blog.firedrake.org/archive/2021/08/Perl_Weekly_Challenge_127__Disjoint_Conflict.html) by Roger Bell_West.

<br>

Let us share some interesting stats from the [**GitHub repository**](https://github.com/manwar/perlweeklychallenge-club).

#### 1. Commits: 19,616 (+178)
#### 2. Pull Requests: 4,812 (+48)
#### 3. Contributors: 176 (+2)
#### 4. Fork: 222 (+2)
#### 5. Stars: 100

<br>

Last but not least, I would like to thank each and every member for their support and encouragement.

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2021. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2021. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of **["The Weekly Challenge - 127"](/blog/recap-challenge-127)** by `Mohammad S Anwar`.

<br>

## PERL REVIEW {#PERLREVIEW}
***

Please check out **Perl** solutions review of the **["The Weekly Challenge - 125"](/blog/review-challenge-125)** by `Colin Crain`.

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

#### 1) [Ioannis Bourlakos](https://github.com/jbourlakos), an experienced Perl hackerfrom Tripoli, Greece.

#### 2) [Ian Goodnight](https://github.com/iangoodnight), an experienced Perl hacker from Tallmadge, OH.

> I've worked primarily with Javascript for the last 4 years. I started using Perl a year or so ago, mainly for text parsing. The Perl Weekly Challenge seems like a fun way to explore Perl and hopefully a couple other languages too. Hopefully, participating in the challenge will give me the push I need to finally start some sort of blog and to get to know some of the community as well.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}

***

Please checkout the guest contributions for the [**Week #127**](/blog/guest-contribution/#127).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## TASK #1 › Maximum Sub-Matrix {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org/)
***

You are given m x n binary matrix having 0 or 1.

Write a script to find out maximum sub-matrix having only 0.

## Example 1:

    Input : [ 1 0 0 0 1 0 ]
            [ 1 1 0 0 0 1 ]
            [ 1 0 0 0 0 0 ]

    Output: [ 0 0 0 ]
            [ 0 0 0 ]

## Example 2:

    Input : [ 0 0 1 1 ]
            [ 0 0 0 1 ]
            [ 0 0 1 0 ]

    Output: [ 0 0 ]
            [ 0 0 ]
            [ 0 0 ]

<br>

## TASK #2 › Minimum Platforms {#TASK2}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given two arrays of arrival and departure times of trains at a railway station.

Write a script to find out the minimum number of platforms needed so that no train needs to wait.

## Example 1:

    Input: @arrivals   = (11:20, 14:30)
           @departutes = (11:50, 15:00)
    Output: 1

        The 1st arrival of train is at 11:20 and this is the only train at the station, so you need 1 platform.
        Before the second arrival at 14:30, the first train left the station at 11:50, so you still need only 1 platform.

## Example 2:

    Input: @arrivals   = (10:20, 11:00, 11:10, 12:20, 16:20, 19:00)
           @departutes = (10:30, 13:20, 12:40, 12:50, 20:20, 21:20)
    Output: 3

        Between 11:00 and 12:20, there would be at least 3 trains at the station, so we need minimum 3 platforms.

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 5th September 2021**.

***
