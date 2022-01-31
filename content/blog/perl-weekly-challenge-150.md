---
title: "The Weekly Challenge - 150"
date: 2022-01-31T00:00:00+00:00
description: "The Weekly Challenge - 150"
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
### 09. [TASK #1: Fibonacci Words](#TASK1)
### 10. [TASK #2: Square-free Integer](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

<br>

Welcome to the `Week #150`, we reached another milestone, thanks to the support and dedication of `Team PWC`.

I would like to mention one of the highlights of the weekly challenge is the quality blogs shared by the team members. For the `Perl Weekly newsletter`, I have to go through every single blog every week and I can tell you it is gem of collections. There are so much to learn from each one of them. I appreciate the amount of time each member spend on these quality blogs. As of today, we have received `2234` blogs showing the power of `Perl` and `Raku` in general. I generally bookmark my favourite blogs as I go through the list. I noticed the list is growing very fast. I have to find time to go through and collect all the gems from each one. There are some blogs that only have technical values but also great source of english literature, at least to me.

I have been thinking of creating collection of `Abigail` regex magic for my own knowledge. Unfortunately lack of time is not helping the cause. I am sure, others would benefit from it too. Similarly there are plent of `Raku` expert in the team sharing the magical features. It would be nice to have the collection of `Raku` magics. I want to do so much but I find no time right now unfortunately. One day, may be, I will learn how to prioritise work and be more organised.

In two months time, we would celebrate `3 years` of weekly challenge. It is hard to believe we came so far and still going stronger every day. I would like to thank each one of you for being there every week.

<br>

### Blogs with Creative Title
***

#### 1. [Fibonacci Square with Raku and Perl](https://raku-musings.com/fibonacci-square.html) by Arne Sommer.
#### 2. [TWC 149: Limited Fibs, and Bases of Unusual Size](http://blogs.perl.org/users/bruce_gray/2022/01/twc-149-limited-fibs-and-bases-of-unusual-size.html) by Bruce Gray.
#### 3. [When We Add Up Each Part of the Puzzle, They’re All Lies](https://colincrain.com/2022/01/29/when-we-add-up-each-part-of-the-puzzle-theyre-all-lies) by Colin Crain.
#### 4. [That Big Ol’ Square’ll be Just Perfect](https://colincrain.com/2022/01/30/that-big-ol-squarell-be-just-perfect) by Colin Crain.
#### 5. [Weekly Challenge #149 Task 2: The Terror of the Largest Square](https://jacoby.github.io/2022/01/27/weekly-challenge-149-task-2-the-terror-of-the-largest-square.html) by Dave Jacoby
#### 6. [The Weekly Challenge 149: Fibonacci Squares](https://blog.firedrake.org/archive/2022/01/The_Weekly_Challenge_149__Fibonacci_Squares.html) by Roger Bell_West.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 23,026 (+145)
#### 2. Pull Requests: 5,583 (+33)
#### 3. Contributors: 185
#### 4. Fork: 238
#### 5. Stars: 118

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2021. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2021. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of **["The Weekly Challenge - 149"](/blog/recap-challenge-149)** by `Mohammad S Anwar`.

<br>

## PERL REVIEW {#PERLREVIEW}
***

Please check out **Perl** solutions review of the **["The Weekly Challenge - 145"](/blog/review-challenge-145)** by `Colin Crain`.

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

Please checkout the guest contributions for the [**Week #149**](/blog/guest-contribution/#149).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## TASK #1 › Fibonacci Words {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org/)
***

You are given two strings having same number of digits, `$a` and `$b`.

Write a script to generate `Fibonacci Words` by concatenation of the previous two strings. Finally print 51st digit of the first term having at least 51 digits.

### Example:

        Input: $a = '1234' $b = '5678'
        Output: 7

        Fibonacci Words:

        '1234'
        '5678'
        '12345678'
        '567812345678'
        '12345678567812345678'
        '56781234567812345678567812345678'
        '1234567856781234567856781234567812345678567812345678'

        The 51st digit in the first term having at least 51 digits '1234567856781234567856781234567812345678567812345678' is 7.

<br>

## TASK #2 › Square-free Integer {#TASK2}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org/)
***

Write a script to generate all square-free integers <= 500.

> In mathematics, a square-free integer (or squarefree integer) is an integer which is divisible by no perfect square other than 1. That is, its prime factorization has exactly one factor for each prime that appears in it. For example, 10 = 2 ⋅ 5 is square-free, but 18 = 2 ⋅ 3 ⋅ 3 is not, because 18 is divisible by 9 = 3**2.

### Example

    The smallest positive square-free integers are
        1, 2, 3, 5, 6, 7, 10, 11, 13, 14, 15, 17, 19, 21, 22, 23, 26, 29, 30, ...

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 6th February 2022**.

***
