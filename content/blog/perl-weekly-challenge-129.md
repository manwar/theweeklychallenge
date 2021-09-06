---
title: "The Weekly Challenge - 129"
date: 2021-09-06T00:00:00+00:00
description: "The Weekly Challenge - 129"
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
### 09. [TASK #1: Root Distance](#TASK1)
### 10. [TASK #2: Add Linked Lists](#TASK2)

<br>

## HEADLINES {#HEADLINES}
***

Welcome to the week 129 and it is time to declare the champion and the winner is `Jorg Sommrey` currently ranked `28th` in the leaderboard with `141` contributions in **Perl** and a blog so far.

Last week was not so busy, still I am grateful to everyone who contributed to the weekly challenge. I am still not in the frame yet. Sorry.

Next week, insha-ALLAH.

<br>

### Blogs with Creative Title
***

#### 1. [With Raku to Mom's platform](https://raku-musings.com/mums-platform.html) by Arne Sommer.

#### 2. [MinMaxing Matrix Platforms](https://jacoby.github.io/2021/09/01/minmaxing-matrix-platforms-the-weekly-challenge-128.html) by Dave Jacoby.

#### 3. [Maxima and Minima](https://blog.firedrake.org/archive/2021/09/Perl_Weekly_Challenge_128__Maxima_and_Minima.html) by Roger Bell_West.

<br>

Let us share some interesting stats from the [**GitHub repository**](https://github.com/manwar/perlweeklychallenge-club).

#### 1. Commits: 19,742 (+126)
#### 2. Pull Requests: 4,842 (+30)
#### 3. Contributors: 176
#### 4. Fork: 222
#### 5. Stars: 103 (+3)

<br>

Last but not least, I would like to thank each and every member for their support and encouragement.

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2021. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2021. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of **["The Weekly Challenge - 128"](/blog/recap-challenge-128)** by `Mohammad S Anwar`.

<br>

## PERL REVIEW {#PERLREVIEW}
***

Please check out **Perl** solutions review of the **["The Weekly Challenge - 126"](/blog/review-challenge-126)** by `Colin Crain`.

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

Please checkout the guest contributions for the [**Week #128**](/blog/guest-contribution/#128).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## TASK #1 › Root Distance {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org/)
***

You are given a tree and a node of the given tree.

Write a script to find out the distance of the given node from the root.

## Example 1:

    Tree:
            1
           / \
          2   3
               \
                4
               / \
              5   6

    Node: 6
    Output: 3 as the distance of given node 6 from the root (1).

    Node: 5
    Output: 3

    Node: 2
    Output: 1

    Node: 4
    Output: 2

## Example 2:

    Tree:
            1
           / \
          2   3
         /     \
        4       5
         \     /
          6   7
         / \
        8   9

    Node: 7
    Output: 3 as the distance of given node 6 from the root (1).

    Node: 8
    Output: 4

    Node: 6
    Output: 3

<br>

## TASK #2 › Add Linked Lists {#TASK2}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***
You are given two linked list having single digit positive numbers.

Write a script to add the two linked list and create a new linked representing the sum of the two linked list numbers. The two linked lists may or may not have the same number of elements.

#### HINT: Just a suggestion, feel free to come up with your own unique way to deal with the task. I am expecting a class representing linked list. It should have methods to create a linked list given list of single digit positive numbers and a method to add new member. Also have a method that takes 2 linked list objects and returns a new linked list. Finally a method to print the linked list object in a user friendly format.

## Example 1:

    Input: L1 = 1 -> 2 -> 3
           L2 = 3 -> 2 -> 1
    Output: 4 -> 4 -> 4

        Operation: Pick the first rightmost element of L1 i.e. 3 and adds to the first rightmost element of L2 i.e. 1. Finally store the result i.e. 3 in the new linked list. Move to the next one of both linked lists L1 and L2, perform the same operation. In case the sum >= 10 then you apply the same rule you would do to regular addition problem i.e. divide the sum by 10 keep the remainder and push to the new linked list. Don't forget to carry, 1, to the next operation. In case one linked list is smaller than the other, you can safely assume it is 0..

## Example 2:

    Input: L1 = 1 -> 2 -> 3 -> 4 -> 5
           L2 =           6 -> 5 -> 5
    Output:     1 -> 3 -> 0 -> 0 -> 0

        Operation:
        a) 1st member of L1 = 5 and 1st member of L2 = 5
        b) 5 + 5 = 10
        c) 0 pushed to the new linked list.
        d) carry forward 1.
        e) 2nd member of L1 = 4 and 2nd member of L2 = 5
        f) 4 + 5 + 1 (carry) = 10
        h) 0 again pushed to the new linked list.
        i) carry forward 1.
        j) 3rd member of L1 = 3 and 3rd member of L2 = 6
        k) 3 + 6 + 1 (carry) = 10
        l) 0 pshed to the new linked list.
        m) carry forward 1.
        n) 4th member of L1 = 2 and assume 0 as the 4th member of L2 since there are only 3 members.
        o) 2 + 1 (carry) = 3
        p) 3 pushed to the new linked list.
        q) 5th member of L1 = 1 and assume 0 as the 5th member of L2 since there are only 3 members.
        r) 1 + 0 = 1
        s) 1 pushed to the new linked list.

        So the new linked list now have: 1 -> 3 -> 0 -> 0 -> 0.

        The above suggestion is one way, not necessarily the best way to deal with it.

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 12th September 2021**.

***
