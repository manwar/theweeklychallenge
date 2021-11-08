---
title: "The Weekly Challenge - 138"
date: 2021-11-08T00:00:00+00:00
description: "The Weekly Challenge - 138"
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
### 09. [TASK #1: Workdays](#TASK1)
### 10. [TASK #2: Split Number](#TASK2)

<br>

## HEADLINES {#HEADLINES}
***

<br>

Today, we are `960 days` old, very close to the target of 4-digits number. Congratulations to **Team PWC** for the support and encouragements. I am happy to see the growing popularity of guest contributions. I am glad to contribute as well although my contribution is not significant, still it feels nice. Last week, I could only share [**Java**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/mohammad-anwar/java/theweeklychallenge/LongYear.java) and [**Python**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/mohammad-anwar/python/ch-1.py). The best part of my contributions was it is all focussed on unit testing. I couldn't get **Swift** unit testing working in Ubuntu, so I skipped it. I will give it a go next time if time permits. I really enjoyed unit testing in **Java** and **Python**. It was my first attempt in **Python**. I will continue practice in coming weeks. Sometimes I wonder how `Abigail`, `Roger Bell_West`, `Ulrich Rieke`, `Laurent Rosenfeld` and others can do so many different programming languages. The quality is always the best of all. I always take the help from others everytime I am stuck. There is so much to learn from others. I am shameless when it comes to asking for help. Luckily I get help instantly everytime I post my questions on **Twitter**.

I have also recently started contributing in [**Raku**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-137/mohammad-anwar/raku/ch-1.raku) as well. Right now, I aim to do atleast one task (easy one) in **Perl**, **Raku**, **Java**, **Python** and **Swift**. I would appreciate if anyone can help me with unit testing in Swift. I have got a very basic [**example**](https://github.com/manwar/Swift-Unit-Testing) available on **GitHub**. It is broken at the moment. I would appreciate if you can help me get it working. I spent all Saturday without any luck. I gave up in the end as I had others urgent task to complete. The whole point of learning **Swift** is so that I can build mobile app for iOS. I have bought **Mac Mini** and external monitor for the same. I did one small application with the online help. May be one day, I will create an app for the weekly challenge. I know it is an ambitious project but nothing wrong in aiming high.

I have been planning to do some **Perl** live coding for months now without any luck. It is just a matter of getting started then it becomes easy. I know I can do it as I have done it in the past. In the past, I used to blog as well talking about **Perl** and **Raku**. Honestly speaking, I prefer live coding than blogging. I have plenty of holidays left this year. I am planning to take long break around the Christmas so that I can do couple of pending projects. One of them is to get first draft of my **Perl** book ready for review. It is moving along very slowly. I have to sit back and set the priority right.

I would like to thank each and everyone for the kind message. I am feeling lot better now. Everytime I receive a message from team member, it feels great. It gives me extra energy to do more. Sometimes, I receive message with the Pull Request as well. It brings smile on my face everytime I read it. Thank you everyone, once again, for the support and encouragement.

If you have any suggestions to make the weekly challenge better than please do share with me.


<br>

### Blogs with Creative Title
***

#### 1. [Lychrel Longing with Raku and Perl](https://raku-musings.com/lychrel-longing.html) by Arne Sommer.

#### 2. [Perl Weekly Challenge 137: Long Cheryl](https://blog.firedrake.org/archive/2021/11/Perl_Weekly_Challenge_137__Long_Cheryl.html) by Roger Bell_West.

<br>

Let us share some interesting stats from the [**GitHub repository**](https://github.com/manwar/perlweeklychallenge-club).

#### 1. Commits: 21,118 (+186)
#### 2. Pull Requests: 5,171 (+38)
#### 3. Contributors: 181
#### 4. Fork: 231
#### 5. Stars: 110 (+1)

<br>

Last but not least, I would like to thank each and every member for their support and encouragement.

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2021. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2021. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of **["The Weekly Challenge - 137"](/blog/recap-challenge-137)** by `Mohammad S Anwar`.

<br>

## PERL REVIEW {#PERLREVIEW}
***

Please check out **Perl** solutions review of the **["The Weekly Challenge - 134"](/blog/review-challenge-134)** by `Colin Crain`.

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

Please checkout the guest contributions for the [**Week #137**](/blog/guest-contribution/#137).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## TASK #1 › Workdays {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given a year, `$year` in 4-digits form.

Write a script to calculate the total number of workdays in the given year.

> For the task, we consider, Monday - Friday as workdays.

#### Example 1

    Input: $year = 2021
    Output: 260

#### Example 2

    Input: $year = 2020
    Output: 262

<br>

## TASK #2 › Split Number {#TASK2}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org/)
***

You are given a perfect square.

Write a script to figure out if the square root the given number is same as sum of 2 or more splits of the given number.

#### Example 1

    Input: $n = 81
    Output: 1

    Since, sqrt(81) = 8 + 1

#### Example 2

    Input: $n = 9801
    Output: 1

    Since, sqrt(9801) = 98 + 0 + 1

#### Example 3

    Input: $n = 36
    Output: 0

    Since, sqrt(36) != 3 + 6

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 14th November 2021**.

***
