---
title: "The Weekly Challenge - 130"
date: 2021-09-13T00:00:00+00:00
description: "The Weekly Challenge - 130"
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
### 09. [TASK #1: Odd Number](#TASK1)
### 10. [TASK #2: Binary Search Tree](#TASK2)

<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #130`, a very special one.

Why?

Well, we are now `900+` days old today.

The weekly challenge was born on `Monday, 25th March 2019`, so as of today we are `904 days` old to be precise.

On `18th December 2021`, we would complete `1000 days`. I hope and wish we reach there with lots of love and support from everyone.

I find it hard to believe we came this far. For me, personally, it has been great learning experience. And I also made some techie friends as well. I hope you also had the blast with me.

Although, the challenge is now called, `The Weekly Challenge`, I still like to call the team, **Team PWC**.

I was wondering if you are aware of **Early Bird Club**?

Well, I created the club on the request of few members who requested to be informed about the weekly challenge in advance because of various reasons. The idea behind the club is you get notified about the upcoming weekly challenge days before the actual release day. I have missed the notifications few times in the past but I do try my best to give atleast 3 or 4 days advance notice. It has helped me as well as I get the challenge reviewed by the club members before going out in public. So thanks to each and every club member for the guidance and support.

In the past, `Ryan Thompson`, would review the task for me. He would not just review the task but also come up with great examples as well. Sadly he is too busy these days and I am on my own relying on **Early Bird Club** members for the assistance. I am sure you would agree finding fun tasks week after week is not easy. In the past few weeks, I have been getting help with new fun task, thanks to **Team PWC**. Please accept my apology if you find the task not fully defined or explained. Believe it or not, I try to the best of my ability.

In case anyone wants to join the **Early Bird Club**, just drop me a line with your request and I will add you to the mailing list.

I realised, **Linked List**, is not the favourite subject of many of **Team PWC** members, I will try to stay away as much as possible in future. There have been few odd complains with regard to tree representation as input. I have seen some very creative way of accepting tree as input by some **Team PWC** members in the past. I am sure you will also find it very usefull if you take a look some of the past contributions.

If you have any suggestions to make the weekly challenge more interesting and fun then please do share with us.

<br>

### Blogs with Creative Title
***

#### 1. [Linked Roots with Raku](https://raku-musings.com/linked-roots.html) by Arne Sommer.

#### 2. ['List' Ain't Nothin' But 'Tree' Misspelled](https://jacoby.github.io/2021/09/06/list-aint-nothin-but-tree-misspelled-the-perl-weekly-challenge-129.html) by Dave Jacoby.

#### 3. [trees and sums](https://fluca1978.github.io/2021/09/06/PerlWeeklyChallenge129.html) by Luca Ferrari.

#### 4. [Eats Roots and Lists](https://blog.firedrake.org/archive/2021/09/Perl_Weekly_Challenge_129__Eats_Roots_and_Lists.html) by Roger Bell_West.

<br>

Let us share some interesting stats from the [**GitHub repository**](https://github.com/manwar/perlweeklychallenge-club).

#### 1. Commits: 19,818 (+76)
#### 2. Pull Requests: 4,862 (+20)
#### 3. Contributors: 176
#### 4. Fork: 223 (+1)
#### 5. Stars: 103

<br>

Last but not least, I would like to thank each and every member for their support and encouragement.

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2021. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2021. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of **["The Weekly Challenge - 129"](/blog/recap-challenge-129)** by `Mohammad S Anwar`.

<br>

## PERL REVIEW {#PERLREVIEW}
***

Please check out **Perl** solutions review of the **["The Weekly Challenge - 127"](/blog/review-challenge-127)** by `Colin Crain`.

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

Please checkout the guest contributions for the [**Week #129**](/blog/guest-contribution/#129).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## TASK #1 › Odd Number {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org/)
***

You are given an array of positive integers, such that all the numbers appear even number of times except one number.

Write a script to find that integer.

## Example 1

    Input: @N = (2, 5, 4, 4, 5, 5, 2)
    Output: 5 as it appears 3 times in the array where as all other numbers 2 and 4 appears exactly twice.

## Example 2

    Input: @N = (1, 2, 3, 4, 3, 2, 1, 4, 4)
    Output: 4

<br>

## TASK #2 › Binary Search Tree {#TASK2}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given a tree.

Write a script to find out if the given tree is `Binary Search Tree (BST)`.

According to [wikipedia](https://en.wikipedia.org/wiki/Binary_search_tree), the definition of BST:

> A binary search tree is a rooted binary tree, whose internal nodes each store a key (and optionally, an associated value), and each has two distinguished sub-trees, commonly denoted left and right. The tree additionally satisfies the binary search property: the key in each node is greater than or equal to any key stored in the left sub-tree, and less than or equal to any key stored in the right sub-tree. The leaves (final nodes) of the tree contain no key and have no structure to distinguish them from one another.

## Example 1

    Input:
            8
           / \
          5   9
         / \
        4   6

    Output: 1 as the given tree is a BST.

## Example 2

    Input:
            5
           / \
          4   7
         / \
        3   6

    Output: 0 as the given tree is a not BST.

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 19 September 2021**.

***
