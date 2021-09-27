---
title: "The Weekly Challenge - 132"
date: 2021-09-27T00:00:00+00:00
description: "The Weekly Challenge - 132"
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
### 09. [TASK #1: Mirror Dates](#TASK1)
### 10. [TASK #2: Hash Join](#TASK2)

<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #132`.

I would like to take this opportunity to thank every member of `Early Bird Club` for helping with task review. Your help and support is much appreciated. I would also like to thank **Team PWC** for suggesting fun tasks.

Contributions to the weekly challenge is growing again as shown below:

    Week #129: 48
    Week #130: 71
    Week #131: 89

Guest contributions is not behind either

    Week #129:  8 ( 6 languages)
    Week #130: 26 (17 languages)
    Week #131: 26 (14 languages)

I noticed, we now have crossed `20,000` commits to the [**Weekly Challenge Club**](https://github.com/manwar/perlweeklychallenge-club).

Welcome back, `Ben Davies` and thanks for sharing [**Raku**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/ben-davies/raku/ch-1.raku) solution.

I have participated second week in a row and shared [**Perl**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-131/mohammad-anwar/perl/ch-1.pl) solution.

<br>

### Blogs with Creative Title
***

#### 1. [Con Se Pair](https://raku-musings.com/con-se-pair.html) by Arne Sommer.

#### 2. [no coffee, no elegance](https://fluca1978.github.io/2021/09/20/PerlWeeklyChallenge131.html) by Luca Ferrari.

#### 3. [Splitting and Splitting More](https://blog.firedrake.org/archive/2021/09/Perl_Weekly_Challenge_131__Splitting_and_Splitting_More.html) by Roger Bell_West.

<br>

Let us share some interesting stats from the [**GitHub repository**](https://github.com/manwar/perlweeklychallenge-club).

#### 1. Commits: 20,074 (+140)
#### 2. Pull Requests: 4,928 (+37)
#### 3. Contributors: 178 (+1)
#### 4. Fork: 225
#### 5. Stars: 105

<br>

Last but not least, I would like to thank each and every member for their support and encouragement.

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2021. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2021. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of **["The Weekly Challenge - 131"](/blog/recap-challenge-131)** by `Mohammad S Anwar`.

<br>

## PERL REVIEW {#PERLREVIEW}
***

Please check out **Perl** solutions review of the **["The Weekly Challenge - 129"](/blog/review-challenge-129)** by `Colin Crain`.

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

Please checkout the guest contributions for the [**Week #131**](/blog/guest-contribution/#131).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## TASK #1 › Mirror Dates {#TASK1}
##### **Submitted by:** `Mark Anderson`
***

You are given a date (yyyy/mm/dd).

Assuming, the given date is your date of birth. Write a script to find the mirror dates of the given date.

`Dave Cross` has built cool [site](https://davorg.dev/mirroryear) that does something similar.

##### Assuming today is 2021/09/22.

### Example 1:

    Input: 2021/09/18
    Output: 2021/09/14, 2021/09/26

    On the date you were born, someone who was your current age, would have been born on 2021/09/14.
    Someone born today will be your current age on 2021/09/26.

### Example 2:

    Input: 1975/10/10
    Output: 1929/10/27, 2067/09/05

    On the date you were born, someone who was your current age, would have been born on 1929/10/27.
    Someone born today will be your current age on 2067/09/05.

### Example 3:

    Input: 1967/02/14
    Output: 1912/07/08, 2076/04/30

    On the date you were born, someone who was your current age, would have been born on 1912/07/08.
    Someone born today will be your current age on 2076/04/30.

<br>

## TASK #2 › Hash Join {#TASK2}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org/)
***

Write a script to implement Hash Join algorithm as suggested by [wikipedia](https://en.wikipedia.org/wiki/Hash_join#Classic_hash_join).

    1. For each tuple r in the build input R
        1.1 Add r to the in-memory hash table
        1.2 If the size of the hash table equals the maximum in-memory size:
            1.2.1 Scan the probe input S, and add matching join tuples to the output relation
            1.2.2 Reset the hash table, and continue scanning the build input R
    2. Do a final scan of the probe input S and add the resulting join tuples to the output relation

### Example

    Input:

        @player_ages = (
            [20, "Alex"  ],
            [28, "Joe"   ],
            [38, "Mike"  ],
            [18, "Alex"  ],
            [25, "David" ],
            [18, "Simon" ],
        );

        @player_names = (
            ["Alex", "Stewart"],
            ["Joe",  "Root"   ],
            ["Mike", "Gatting"],
            ["Joe",  "Blog"   ],
            ["Alex", "Jones"  ],
            ["Simon","Duane"  ],
        );

    Output:

        Based on index = 1 of @players_age and index = 0 of @players_name.

        20, "Alex",  "Stewart"
        20, "Alex",  "Jones"
        18, "Alex",  "Stewart"
        18, "Alex",  "Jones"
        28, "Joe",   "Root"
        28, "Joe",   "Blog"
        38, "Mike",  "Gatting"
        18, "Simon", "Duane"

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 3rd October 2021**.

***
