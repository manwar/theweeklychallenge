---
title: "The Weekly Challenge - 112"
date: 2021-05-10T00:00:00+00:00
description: "The Weekly Challenge - 112"
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
### 09. [TASK #1: Canonical Path](#TASK1)
### 10. [TASK #2: Climb Stairs](#TASK2)

<br>

## HEADLINES {#HEADLINES}
***

Last week we declared `Aaron Smith` as the Champion of the month. We [interview ](https://perlweeklychallenge.org/blog/meet-the-champion-2021-04) with him few days ago, please go check it out.

Let us all welcome, `David Schwartz`, to the **Team PWC**. In the first week itself, we have received solutions in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-111/dms061/perl) and [**Python**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-111/dms061/python3).

<br>

Let us share some interesting stats from the [**GitHub repository**](https://github.com/manwar/perlweeklychallenge-club).

#### 1. Commits: 16,558 (+211)
#### 2. Pull Requests: 4,042 (+44)
#### 3. Contributors: 164 (+1)
#### 4. Fork: 204
#### 5. Stars: 92

<br>

Last but not least, I would like to thank each and every member for their support and encouragement.

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2021. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2021. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of [**"The Weekly Challenge - 111"**](/blog/recap-challenge-111) by `Mohammad S Anwar`.

<br>

## PERL REVIEW {#PERLREVIEW}
***

Please check out **Perl** solutions review of the **["Perl Weekly Challenge - 109"](/blog/review-challenge-109)** by `Colin Crain`.

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

[**David Schwartz**](https://github.com/dms061), an experienced **Perl** hacker, joined the **Team PWC**.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}

***

Please checkout the guest contributions for the [Week #111](https://perlweeklychallenge.org/blog/guest-contribution/#111).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## TASK #1 › Canonical Path {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org/)
***

You are given a string path, starting with a slash '/'.

Write a script to convert the given absolute path to the simplified canonical path.

In a Unix-style file system:

    - A period '.' refers to the current directory
    - A double period '..' refers to the directory up a level
    - Multiple consecutive slashes ('//') are treated as a single slash '/'

The canonical path format:

    - The path starts with a single slash '/'.
    - Any two directories are separated by a single slash '/'.
    - The path does not end with a trailing '/'.
    - The path only contains the directories on the path from the root directory to the target file or directory

## Example

    Input: "/a/"
    Output: "/a"

    Input: "/a/b//c/"
    Output: "/a/b/c"

    Input: "/a/b/c/../.."
    Output: "/a"

<br>

## TASK #2 › Climb Stairs {#TASK2}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org/)
***

You are given `$n` steps to climb

Write a script to find out the distinct ways to climb to the top. You are allowed to climb either 1 or 2 steps at a time.

## Example

    Input: $n = 3
    Output: 3

        Option 1: 1 step + 1 step + 1 step
        Option 2: 1 step + 2 steps
        Option 3: 2 steps + 1 step

    Input: $n = 4
    Output: 5

        Option 1: 1 step + 1 step + 1 step + 1 step
        Option 2: 1 step + 1 step + 2 steps
        Option 3: 2 steps + 1 step + 1 step
        Option 4: 1 step + 2 steps + 1 step
        Option 5: 2 steps + 2 steps

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 16th May 2021**.

***
