---
title: "The Weekly Challenge - 163"
date: 2022-05-02T00:00:00+00:00
description: "The Weekly Challenge - 163"
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
### 09. [TASK #1: Sum Bitwise Operator](#TASK1)
### 10. [TASK #2: Summations](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

We are celebrating `Idd` today in England. Happy `Idd` to all the members of `Team PWC`.

Today is also the first `Monday` of the month, Time to declare the next champion. With great pleasure, we declare `Matthew Neleigh` as our next champion. He is currently ranked `#50` in the leader board with `37` contributions in `Perl` and total score of `74`.

We got back to back contributions by `Ryan Thompson` and `Julien Fiegehenn`. Thank you.

Lets keep the momentum going together.

<br>

### Blogs with Creative Title
***

#### 1. [Thirteen Wheatstones](https://raku-musings.com/thirteen-wheatstones.html) by Arne Sommer.
#### 2. [Magic Spell Books, or 13 Revisited](https://colincrain.com/2022/04/29/magic-spell-books-or-13-revisited/) by Colin Crain.
#### 3. [Fair Play with Your Nose to the Grindstone](https://colincrain.com/2022/05/01/fair-play-with-your-nose-to-the-grindstone) by Colin Crain.
#### 4. [Play Fair and By The Book](https://jacoby.github.io/2022/04/26/play-fair-and-by-the-book-weekly-challenge-162.html) by Dave Jacoby.
#### 5. [Playing Fair with ISBNs](https://blog.firedrake.org/archive/2022/04/The_Weekly_Challenge_162__Playing_Fair_with_ISBNs.html) by Roger Bell_West.
#### 6. [Checksums and early encryption](https://pjcs-pwc.blogspot.com/2022/04/checksums-and-early-encryption.html) by Peter Campbell Smith.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 24,914 (+164)
#### 2. Pull Requests: 6,031 (+42)
#### 3. Contributors: 191 (+2)
#### 4. Fork: 247 (+1)
#### 5. Stars: 129

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2022. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2022. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 162](/blog/recap-challenge-162)** by `Mohammad S Anwar`.

<br>

## PERL REVIEW {#PERLREVIEW}
***

Please check out **Perl** solutions review of **[The Weekly Challenge - 158](/blog/review-challenge-158)** by `Colin Crain`.

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

Please checkout the guest contributions for the [**Week #162**](/blog/guest-contribution/#162).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Sum Bitwise Operator {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given list positive numbers, `@n`.

Write script to calculate the sum of bitwise & operator for all unique pairs.

##### Example 1

    Input: @n = (1, 2, 3)
    Output: 3

    Since (1 & 2) + (2 & 3) + (1 & 3) => 0 + 2 + 1 =>  3.

##### Example 2

    Input: @n = (2, 3, 4)
    Output: 2

    Since (2 & 3) + (2 & 4) + (3 & 4) => 2 + 0 + 0 =>  2.

<br>

## Task 2: Summations {#TASK2}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given a list of positive numbers, `@n`.

Write a script to find out the summations as described below.

##### Example 1

    Input: @n = (1, 2, 3, 4, 5)
    Output: 42

        1 2 3  4  5
          2 5  9 14
            5 14 28
              14 42
                 42

    The nth Row starts with the second element of the (n-1)th row.
    The following element is sum of all elements except first element of previous row.
    You stop once you have just one element in the row.

##### Example 2

    Input: @n = (1, 3, 5, 7, 9)
    Output: 70

        1 3  5  7  9
          3  8 15 24
             8 23 47
               23 70
                  70

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 8th May 2022**.

***
