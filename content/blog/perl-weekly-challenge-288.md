---
title: "The Weekly Challenge - 288"
date: 2024-09-23T00:00:00+00:00
description: "The Weekly Challenge - 288"
type: post
image: images/twc-logo.png
author: Mohammad Sajid Anwar
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
### 09. [TASK #1: Closest Palindrome](#TASK1)
### 10. [TASK #2: Contiguous Block](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #288` of `The Weekly Challenge`.

Welcome back, `Luca Ferrari`, and thanks for sharing solutions in [**Raku**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-287/luca-ferrari/raku), [**Python**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-287/luca-ferrari/python), [**Java**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-287/luca-ferrari/pljava) and [**PostgreSQL**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-287/luca-ferrari/plpgsql).

Welcome back, `Lubos Kolouch` and thanks for sharing solutions in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-287/lubos-kolouch/perl) and [**Python**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-287/lubos-kolouch/python).

Thank you, `Paulo Custodio`, for still going strong and dealing with past challenges in `Python`.

Thank you, `Peter Meszaros`, for dealing with past challenges.

Thank you, `E. Choroba`, for taking time out for the [**blog post**](https://blogs.perl.org/users/e_choroba/2024/09/strong-password.html).

Last but not least, I would like to thank `Team PWC` for suggesting fun challenges.

***

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `283` &nbsp;&nbsp;|&nbsp;&nbsp; 62 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `284` &nbsp;&nbsp;|&nbsp;&nbsp; 68 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|
|&nbsp;&nbsp; `285` &nbsp;&nbsp;|&nbsp;&nbsp; 61 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
|&nbsp;&nbsp; `286` &nbsp;&nbsp;|&nbsp;&nbsp; 59 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|
|&nbsp;&nbsp; `287` &nbsp;&nbsp;|&nbsp;&nbsp; 50 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 27 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `283` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 67 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|
|&nbsp;&nbsp; `284` &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|&nbsp;&nbsp; 74 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|
|&nbsp;&nbsp; `285` &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|&nbsp;&nbsp; 72 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|
|&nbsp;&nbsp; `286` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 50 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|
|&nbsp;&nbsp; `287` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 63 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (2863)
     2. Rust       (750)
     3. Ruby       (728)
     4. Haskell    (708)
     5. Lua        (641)
     6. C          (583)
     7. C++        (548)
     8. JavaScript (488)
     9. Go         (410)
    10. BQN        (372)

<br>

### Blogs with Creative Title
***

#### 1. [Strong and Valid](https://raku-musings.com/strong-valid.html) by Arne Sommer.
#### 2. [Strength in Numbers](https://dev.to/boblied/pwc-287-strength-in-numbers-4i39) by Bob Lied.
#### 3. [Common Passwords](https://github.sommrey.de/the-bears-den/2024/09/22/ch-287.html) by Jorg Sommrey.
#### 4. [in regexp we trust!](https://fluca1978.github.io/2024/09/20/PerlWeeklyChallenge287.html) by Luca Ferrari.
#### 5. [About Passwords, Birds, and Common Regexes](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-287/challenge-287/matthias-muth#readme) by Matthias Muth.
#### 6. [Strong but Valid](https://packy.dardan.com/b/RU) by Packy Anderson.
#### 7. [Strong and valid](http://ccgi.campbellsmiths.force9.co.uk/challenge/287) by Peter Campbell Smith.
#### 8. [Strong and Valid](https://blog.firedrake.org/archive/2024/09/The_Weekly_Challenge_287__Strong_and_Valid.html) by Roger Bell_West.
#### 9. [Good things](https://dev.to/simongreennet/good-things-1e3a) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 40,358 (`+140`)
#### 2. Pull Requests: 10,880 (`+46`)
#### 3. Contributors: 253
#### 4. Fork: 320 (`+1`)
#### 5. Stars: 175

<br>

## SPONSOR {#SPONSOR}
***

With start of `Week #268`, we have a new sponsor `Lance Wicks` for the entire year `2024`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 287](/blog/recap-challenge-287)** by `Mohammad Sajid Anwar`.

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

Please check out the guest contributions for the [**Week #287**](/blog/guest-contribution/#287).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Closest Palindrome {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a string, `$str`, which is an integer.

Write a script to find out the closest palindrome, not including itself. If there are more than one then return the smallest.

> The closest is defined as the absolute difference minimized between two integers.

#### Example 1

    Input: $str = "123"
    Output: "121"

#### Example 2

    Input: $str = "2"
    Output: "1"

    There are two closest palindrome "1" and "3". Therefore we return the smallest "1".

#### Example 3

    Input: $str = "1400"
    Output: "1441"

#### Example 4

    Input: $str = "1001"
    Output: "999"

<br>

## Task 2: Contiguous Block {#TASK2}
##### **Submitted by:** [Peter Campbell Smith](https://github.com/pjcs00)
***

You are given a rectangular matrix where all the cells contain either `x` or `o`.

Write a script to determine the size of the largest contiguous block.

> A contiguous block consists of elements containing the same symbol which share an edge (not just a corner) with other elements in the block, and where there is a path between any two of these elements that crosses only those shared edges.

#### Example 1

        Input: $matrix = [
                           ['x', 'x', 'x', 'x', 'o'],
                           ['x', 'o', 'o', 'o', 'o'],
                           ['x', 'o', 'o', 'o', 'o'],
                           ['x', 'x', 'x', 'o', 'o'],
                         ]
        Ouput: 11

            There is a block of 9 contiguous cells containing 'x'.
            There is a block of 11 contiguous cells containing 'o'.

#### Example 2

        Input: $matrix = [
                           ['x', 'x', 'x', 'x', 'x'],
                           ['x', 'o', 'o', 'o', 'o'],
                           ['x', 'x', 'x', 'x', 'o'],
                           ['x', 'o', 'o', 'o', 'o'],
                         ]
        Ouput: 11

            There is a block of 11 contiguous cells containing 'x'.
            There is a block of 9 contiguous cells containing 'o'.

#### Example 3

        Input: $matrix = [
                           ['x', 'x', 'x', 'o', 'o'],
                           ['o', 'o', 'o', 'x', 'x'],
                           ['o', 'x', 'x', 'o', 'o'],
                           ['o', 'o', 'o', 'x', 'x'],
                         ]
        Ouput: 7

            There is a block of 7 contiguous cells containing 'o'.
            There are two other 2-cell blocks of 'o'.
            There are three 2-cell blocks of 'x' and one 3-cell.

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 29th September 2024**.

***
