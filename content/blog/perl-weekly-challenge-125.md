---
title: "The Weekly Challenge - 125"
date: 2021-08-09T00:00:00+00:00
description: "The Weekly Challenge - 125"
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
### 09. [TASK #1: Pythagorean Triples](#TASK1)
### 10. [TASK #2: Binary Tree Diameter](#TASK2)

<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `125`<sup>th</sup> edition of the weekly challenge.

I would like to thank every **Team PWC** members for sharing fun tasks. It is a big help and reduce my work load. So please keep sending new challenges.

Last week, we had new member, `Peter Campbell Smith`, an experienced **Perl** hacker from **Epsom, UK** joining the **Team PWC**.

We also had the first **[Raku Conference](https://conf.raku.org/)** last week. One of our **Team PWC** member, `Andrew Shitov`, gave an interesting presentation talking about **Raku** contributions. It was great to be discussed on such a big platform. I also had the opportunity to give a short talk (30 minutes) about **Making of Raku Developer** on Day 3. If you missed the event then I would highly recommend you watch the recordings available on **YouTube**.

<br>

<iframe width="560" height="315" src="https://www.youtube.com/embed/C3X7r_SxlDs&t=3s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br><br>

Let us share some interesting stats from the [**GitHub repository**](https://github.com/manwar/perlweeklychallenge-club).

<br>

#### 1. Commits: 19,096 (+164)
#### 2. Pull Requests: 4,681 (+40)
#### 3. Contributors: 173 (+2)
#### 4. Fork: 219 (+1)
#### 5. Stars: 98 (+1)

<br>

Last but not least, I would like to thank each and every member for their support and encouragement.

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2021. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2021. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of **["The Weekly Challenge - 124"](/blog/recap-challenge-124)** by `Mohammad S Anwar`.

<br>

## PERL REVIEW {#PERLREVIEW}
***

Please check out **Perl** solutions review of the **["The Weekly Challenge - 122"](/blog/review-challenge-122)** by `Colin Crain`.

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

[Peter Campbell Smith](https://github.com/pjcs00), an experienced **Perl** hacker from Epsom, UK joined the **Team PWC**.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}

***

Please checkout the guest contributions for the [**Week #124**](/blog/guest-contribution/#124).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## TASK #1 › Pythagorean Triples {#TASK1}
##### **Submitted by:** [Cheok-Yin Fung](https://github.com/E7-87-83)
***

You are given a positive integer `$N`.

Write a script to print all `Pythagorean Triples` containing `$N` as a member. Print -1 if it can't be a member of any. i

Triples with the same set of elements are considered the same, i.e. if your script has already printed (3, 4, 5), (4, 3, 5) should not be printed.

> The famous Pythagorean theorem states that in a right angle triangle, the length of the two shorter sides and the length of the longest side are related by a<sup>2</sup>+b<sup>2</sup> = c<sup>2</sup>.

A Pythagorean triple refers to the triple of three integers whose lengths can compose a right-angled triangle.

## Example
        Input: $N = 5
        Output:
            (3, 4, 5)
            (5, 12, 13)

        Input: $N = 13
        Output:
            (5, 12, 13)
            (13, 84, 85)

        Input: $N = 1
        Output:
            -1

<br>

## TASK #2 › Binary Tree Diameter {#TASK2}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org/)
***

You are given binary tree as below:

        1
       / \
      2   5
     / \ / \
    3  4 6  7
           / \
          8  10
         /
        9

Write a script to find the diameter of the given binary tree.

> The diameter of a binary tree is the length of the longest path between any two nodes in a tree. It doesn't have to pass through the root.

For the above given binary tree, possible diameters (7) are:

    3, 2, 1, 5, 7, 8, 9

    or

    4, 2, 1, 5, 7, 8, 9

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 15th August 2021**.

***
