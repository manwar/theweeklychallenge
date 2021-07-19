---
title: "The Weekly Challenge - 122"
date: 2021-07-19T00:00:00+00:00
description: "The Weekly Challenge - 122"
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
### 09. [TASK #1: Average of Stream](#TASK1)
### 10. [TASK #2: Basketball Points](#TASK2)

<br>

## HEADLINES {#HEADLINES}
***

Last week, we had 3 new members joined **Team PWC**. [**jdos22**](https://github.com/jdos22), [**Matthew Neleigh**](https://github.com/mattneleigh) and [**Gurunandan Bhat**](https://github.com/Bhat-Gurunandan) are all experienced **Perl** hackers.

`jdos22` shared his solution to the [**Invert Bit**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/jdos22/perl/ch-1.pl) task in **Perl**. `Matthew Neleigh` not only shared solutions to [**Week 121**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-121/mattneleigh/perl) but also [**Week #119**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-119/mattneleigh/perl) and [**Week #120**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-120/mattneleigh/perl).

`Lucas Ransan` introduced new language [**Miranda**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-121/luc65r/miranda) to the **Team PWC**. Thank you for your contributions.

![Lucas Miranda](/images/blog/lucas-121.jpg)

Top two members of **Team PWC** who scored `1000+` scores are [**Laurent Rosenfeld**](https://theweeklychallenge.org/blog/meet-the-champion-013) and [**Jaldhar H Vyas**](https://theweeklychallenge.org/blog/meet-the-champion-014). What a coincident, they were the first two **Champions** of **The Weekly Challenge**.

<br>

#### Laurent Rosenfeld [Score: 1252]
***

![Laurent Rosenfeld](/images/blog/laurent-stats.jpg)


#### Jaldhar H. Vyas [Score: 1048]
***

![Jaldhar H. Vyas](/images/blog/jaldhar-stats.jpg)

Last couple of weeks, I noticed **Stuart Little** has been busy sharing solutions to past weeks tasks in the language **Lua**. This has pushed him to **rank #2** in the **Guest Leaders** board. Top two guest contributors are **Abigail** and [**Stuart Little**](https://theweeklychallenge.org/blog/meet-the-champion-2021-01).

<br>

#### Abigail [Score: 633]
***

![Abigail](/images/blog/abigail-stats.jpg)

#### Stuart Little [Score: 378]
***

![Stuart Little](/images/blog/stuart-stats.jpg)

<br>

Last but not the least, I am throwing a fun task to all members of **Team PWC**. There is no deadline for this task. You take your own sweet time. The task is to come up with fun title logo to replace the existing one.

![PWC blog title](/images/blog/pwc-blog-title.jpg)

I will pick one from all the received lots. I would like to see how creative you can be with regard to the logo. Just a gentle reminder, we are now known as **The Weekly Challenge - Perl & Raku**. You don't need to put the literal text in the logo.


Let us share some interesting stats from the [**GitHub repository**](https://github.com/manwar/perlweeklychallenge-club).

<br>

#### 1. Commits: 18,583 (+206)
#### 2. Pull Requests: 4,551 (+63)
#### 3. Contributors: 171 (+2)
#### 4. Fork: 217 (+3)
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

Quick recap of [**"The Weekly Challenge - 121**](/blog/recap-challenge-121) by `Mohammad S Anwar`.

<br>

## PERL REVIEW {#PERLREVIEW}
***

Please check out **Perl** solutions review of the **["The Weekly Challenge - 119"](/blog/review-challenge-119)** by `Colin Crain`.

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

#### 1. [jdos22](https://github.com/jdos22), an experienced **Perl** hacker.

#### 2. [Matthew Neleigh](https://github.com/mattneleigh), an experienced **Perl** hacker.

#### 3. [Gurunandan Bhat](https://github.com/Bhat-Gurunandan), an experienced **Perl** hacker.

> I live and work in Amsterdam. I have been using Perl since 1999.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}

***

Please checkout the guest contributions for the [**Week #121**](/blog/guest-contribution/#121).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## TASK #1 ›  Average of Stream {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org/)
***

You are given a stream of numbers, `@N`.

Write a script to print the average of the stream at every point.

## Example

    Input: @N = (10, 20, 30, 40, 50, 60, 70, 80, 90, ...)
    Output:      10, 15, 20, 25, 30, 35, 40, 45, 50, ...

    Average of first number is 10.
    Average of first 2 numbers (10+20)/2 = 15
    Average of first 3 numbers (10+20+30)/3 = 20
    Average of first 4 numbers (10+20+30+40)/4 = 25 and so on.

<br>

## TASK #2 ›  Basketball Points {#TASK2}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org/)
***

You are given a score `$S`.

You can win basketball points e.g. 1 point, 2 points and 3 points.

Write a script to find out the different ways you can score `$S`.

## Example

    Input: $S = 4
    Output: 1 1 1 1
            1 1 2
            1 2 1
            1 3
            2 1 1
            2 2
            3 1

    Input: $S = 5
    Output: 1 1 1 1 1
            1 1 1 2
            1 1 2 1
            1 1 3
            1 2 1 1
            1 2 2
            1 3 1
            2 1 1 1
            2 1 2
            2 2 1
            2 3
            3 1 1
            3 2

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 25th July 2021**.

***
