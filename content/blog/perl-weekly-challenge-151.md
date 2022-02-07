---
title: "The Weekly Challenge - 151"
date: 2022-02-07T00:00:00+00:00
description: "The Weekly Challenge - 151"
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
### 09. [TASK #1: Binary Tree Depth](#TASK1)
### 10. [TASK #2: Rob The House](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Today is the first `Monday` of the month and it is time to announce the next champion, `Alexander Pankoff`, currently ranked `#49` with `62` contributions in `Perl`. Last week, for the first time, he shared two blogs, [#1](https://pankoff.net/pages/perl-weekly-challenge/challenge-150-task-1.html) and [#2](https://pankoff.net/pages/perl-weekly-challenge/challenge-150-task-2.html).

Let us welcome a new member, [Robert Ransbottom](https://github.com/0rir), an expert in `Raku`. He shared his first contributions in [**Raku**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-150/0rir/raku) with us.

We reached the milestone after a gap of `2 weeks`. Last time we reached `100+` contributions in the `Week #147`. Guest contribution is also catching up, we received `75` contributions in the `Week #150` in `36` different languages.

Let's keep sharing code and knowledge.

<br>

### Blogs with Creative Title
***

#### 1. [Fibonacci Squared Again with Raku and Perl](https://raku-musings.com/fibonacci-squared-again.html) by Arne Sommer.
#### 2. [TWC 150: bAbAbbAb and a few Composites](http://blogs.perl.org/users/bruce_gray/2022/02/twc-150-bababbab-and-a-few-composites.html) by Bruce Gray.
#### 3. [The 51st Little Piece of String](https://colincrain.com/2022/02/03/the-51st-little-piece-of-string/) by Colin Crain.
#### 4. [No Squares Allowed](https://colincrain.com/2022/02/04/no-squares-allowed/) by Colin Crain.
#### 5. [Free The Squares!: The Weekly Challenge #150](https://jacoby.github.io/2022/02/02/free-the-squares-the-weekly-challenge-150.html) by Dave Jacoby
#### 6. [Perl Weekly Challenge 150: Fibonacci and squares (again!)](https://fluca1978.github.io/2022/01/31/PerlWeeklyChallenge150.html) by Luca Ferrari,
#### 7. [Fibo, nacci, Fibonacci, nacciFibonacci, FibonaccinacciFibonacci ...](https://pjcs-pwc.blogspot.com/2022/02/fibo-nacci-fibonacci-naccifibonacci.html) by Peter Campbell Smith.
#### 8. [The Weekly Challenge 150: Square-Free Words](https://blog.firedrake.org/archive/2022/02/The_Weekly_Challenge_150__Square_Free_Words.html) by Roger Bell_West.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 23,162 (+136)
#### 2. Pull Requests: 5,614 (+31)
#### 3. Contributors: 186 (+1)
#### 4. Fork: 240 (+2)
#### 5. Stars: 119 (+1)

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2021. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2021. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of **["The Weekly Challenge - 150"](/blog/recap-challenge-150)** by `Mohammad S Anwar`.

<br>

## PERL REVIEW {#PERLREVIEW}
***

Please check out **Perl** solutions review of the **["The Weekly Challenge - 146"](/blog/review-challenge-146)** by `Colin Crain`.

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

[Robert Ransbottom](https://github.com/0rir), an expert **Raku** hacker joined the **Team PWC**.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}
***

Please checkout the guest contributions for the [**Week #150**](/blog/guest-contribution/#150).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## TASK #1 › Binary Tree Depth {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org/)
***

You are given binary tree.

Write a script to find the minimum depth.

> The minimum depth is the number of nodes from the root to the nearest leaf node (node without any children).

### Example 1:

    Input: '1 | 2 3 | 4 5'

                    1
                   / \
                  2   3
                 / \
                4   5

    Output: 2

<br>

### Example 2:

    Input: '1 | 2 3 | 4 *  * 5 | * 6'

                    1
                   / \
                  2   3
                 /     \
                4       5
                 \
                  6
    Output: 3

<br>

## TASK #2 › Rob The House {#TASK2}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org/)
***

You are planning to rob a row of houses, always starting with the first and moving in the same direction. However, you can't rob two adjacent houses.

Write a script to find the highest possible gain that can be achieved.

### Example 1:

    Input: @valuables = (2, 4, 5);
    Output: 7

    If we rob house (index=0) we get 2 and then the only house we can rob is house (index=2) where we have 5.
    So the total valuables in this case is (2 + 5) = 7.

<br>

### Example 2:

    Input: @valuables = (4, 2, 3, 6, 5, 3);
    Output: 13

    The best choice would be to first rob house (index=0) then rob house (index=3) then finally house (index=5).
    This would give us 4 + 6 + 3 =13.

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 13th February 2022**.

***
