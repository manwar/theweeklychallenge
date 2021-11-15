---
title: "The Weekly Challenge - 139"
date: 2021-11-15T00:00:00+00:00
description: "The Weekly Challenge - 139"
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
### 09. [TASK #1: JortSort](#TASK1)
### 10. [TASK #2: Long Primes](#TASK2)

<br>

## HEADLINES {#HEADLINES}
***

<br>

Before I forget, please let me share the [**interview**](https://theweeklychallenge.org/blog/meet-the-champion-2021-10) with last month champion, `Paulo Custodio`. It is always great pleasure to know about weekly champion.

As you all know, the season of **Advent Calendar** is coming soon. Continuing the tradition, I would like to get **Advent Calendar 2021** up and running. This year, however, I would like to invite **Team PWC** to suggest one of their blog for the **Advent Calendar**. In total, I am looking for **24** blog posts. Ideally one blog per member. For reference, please take a look at past years advent calendars [**2020**](https://theweeklychallenge.org/blog/advent-calendar-2020) and [**2019**](https://theweeklychallenge.org/blog/advent-calendar-2019).

I am looking forward to another milestone i.e. completing `1000 days` of weekly challenge. For this I have designed the T-shirt to celebrate the milestone.

<br>

![PWC T-Shirt](/images/blog/twc-shirt.jpg)

<br>

Ideally I wanted to gift the T-shirt to all the champions of the weekly challenge. But there are couple of things holding me back. First, collecting postal address of all champions and second the financial aspects of procuring T-shirts and delivering. For record, as of today, we have [**51 Champions**](https://theweeklychallenge.org/champions). If possible gift the same to **Top 10** guest contributors also. Finding the sponsor is never my cup of tea as you all know. So I am not having high hopes, to be honest.

Last but not least, let us welcome two new members to **Team PWC**, `Kaushik Tunuguntla` and `Jake`.

### Blogs with Creative Title
***

#### 1. [The Workdays are Numbered with Raku (and Perl)](https://raku-musings.com/workdays-numbered.html) by Arne Sommer.
#### 2. [I Thank You For The Days: The Weekly Challenge #138](https://jacoby.github.io/2021/11/08/i-thank-you-for-the-days-the-weekly-challenge-138.html) by Dave Jacoby.
#### 3. [Perl Weekly Challenge 138: split working days](https://fluca1978.github.io/2021/11/08/PerlWeeklyChallenge138.html) by Luca Ferrari.
#### 4. [Perl Weekly Challenge 138: Split Work](https://blog.firedrake.org/archive/2021/11/Perl_Weekly_Challenge_138__Split_Work.html) by Roger Bell_West.

<br>

Let us share some interesting stats from the [**GitHub repository**](https://github.com/manwar/perlweeklychallenge-club).

#### 1. Commits: 21,306 (+188)
#### 2. Pull Requests: 5,217 (+46)
#### 3. Contributors: 181
#### 4. Fork: 230
#### 5. Stars: 111 (+1)

<br>

Last but not least, I would like to thank each and every member for their support and encouragement.

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2021. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2021. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of **["The Weekly Challenge - 138"](/blog/recap-challenge-138)** by `Mohammad S Anwar`.

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

#### Jake, Perl enthusiasts.

> I'm new to perl and want to learn.

#### Kaushik Tunuguntla, an experienced Perl Hacker.

> I have about 6 years of experience as a software developer and I primarily worked on perl during this time. I came across Gabor's posts related to perl in the early years googling for perl related stuff and subscribed to his weekly newsletter. He has blogged on all aspects of perl I think. I haven't followed perl weekly challenge closely till now but it's better late than never, so let me jump in and join the party.

<br>

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}
***

Please checkout the guest contributions for the [**Week #138**](/blog/guest-contribution/#138).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## TASK #1 › JortSort {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given a list of numbers.

Write a script to implement JortSort. It should return true/false depending if the given list of numbers are already sorted.

#### Example 1:

    Input: @n = (1,2,3,4,5)
    Output: 1

    Since the array is sorted, it prints 1.

#### Example 2:

    Input: @n = (1,3,2,4,5)
    Output: 0

    Since the array is NOT sorted, it prints 0.

<br>

## TASK #2 › Long Primes {#TASK2}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org/)
***

Write a script to generate first 5 `Long Primes`.

> A prime number (p) is called Long Prime if (1/p) has an infinite decimal expansion repeating every (p-1) digits.

## Example

    7 is a long prime since 1/7 = 0.142857142857...
    The repeating part (142857) size is 6 i.e. one less than the prime number 7.

    Also 17 is a long prime since 1/17 = 0.05882352941176470588235294117647...
    The repeating part (0588235294117647) size is 16 i.e. one less than the prime number 17.

    Another example, 2 is not a long prime as 1/2 = 0.5.
    There is no repeating part in this case.

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 21st November 2021**.

***
