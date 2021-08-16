---
title: "The Weekly Challenge - 126"
date: 2021-08-16T00:00:00+00:00
description: "The Weekly Challenge - 126"
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
### 09. [TASK #1: Count Numbers](#TASK1)
### 10. [TASK #2: Minesweeper Game](#TASK2)

<br>

## HEADLINES {#HEADLINES}
***

Welcome to yet another edition of the weekly challenge.

I noticed the **Week #125** was not so happening as compare to other weeks.

Could holiday season be the reason? Possibly.

I know some of the **Team PWC** members are enjoying the holiday break. Having said that they are not skipping the weekly contributions.

It makes me feel guilty as I haven't contributed in the last 2 weeks. I am too busy in my day job work. I will try to find some time this week.

I am not sure if you have noticed something about the blog contributions by **Team PWC**?

More and more members come up with catchy blog title now a days. Earlier it was just one or two.

Some of my favourites from last week contributions are as follows:

#### 1. [Pythagorean Tree with Raku](https://raku-musings.com/pythagorean-tree.html) by Arne Sommer.

#### 2. [Triple Tree Rings](https://colincrain.com/2021/08/15/triple-tree-rings) by Colin Crain.

#### 3. [Pythagorean Diameter](https://blog.firedrake.org/archive/2021/08/Perl_Weekly_Challenge_125__Pythagorean_Diameter.html) by Roger Bell_West.

<br>

Let us share some interesting stats from the [**GitHub repository**](https://github.com/manwar/perlweeklychallenge-club).

#### 1. Commits: 19,233 (+137)
#### 2. Pull Requests: 4,713 (+32)
#### 3. Contributors: 173
#### 4. Fork: 219
#### 5. Stars: 98

<br>

Last but not least, I would like to thank each and every member for their support and encouragement.

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2021. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2021. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of **["The Weekly Challenge - 125"](/blog/recap-challenge-125)** by `Mohammad S Anwar`.

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

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}

***

Please checkout the guest contributions for the [**Week #125**](/blog/guest-contribution/#125).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## TASK #1 › Count Numbers {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org/)
***

You are given a positive integer `$N`.

Write a script to print count of numbers from 1 to `$N` that don't contain digit `1`.

## Example

    Input: $N = 15
    Output: 8

        There are 8 numbers between 1 and 15 that don't contain digit 1.
        2, 3, 4, 5, 6, 7, 8, 9.

    Input: $N = 25
    Output: 13

        There are 13 numbers between 1 and 25 that don't contain digit 1.
        2, 3, 4, 5, 6, 7, 8, 9, 20, 22, 23, 24, 25.

<br>

## TASK #2 › Minesweeper Game {#TASK2}
##### **Submitted by:** [Cheok-Yin Fung](https://github.com/E7-87-83)
***

You are given a rectangle with points marked with either `x` or `*`. Please consider the `x` as a land mine.

Write a script to print a rectangle with numbers and `x` as in the Minesweeper game.

> A number in a square of the minesweeper game indicates the number of mines within the neighbouring squares (usually 8), also implies that there are no bombs on that square.

## Example

    Input:
        x * * * x * x x x x
        * * * * * * * * * x
        * * * * x * x * x *
        * * * x x * * * * *
        x * * * x * * * * x

    Output:
        x 1 0 1 x 2 x x x x
        1 1 0 2 2 4 3 5 5 x
        0 0 1 3 x 3 x 2 x 2
        1 1 1 x x 4 1 2 2 2
        x 1 1 3 x 2 0 0 1 x

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 22nd August 2021**.

***
