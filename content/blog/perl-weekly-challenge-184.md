---
title: "The Weekly Challenge - 184"
date: 2022-09-26T00:00:00+00:00
description: "The Weekly Challenge - 184"
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
### 09. [TASK #1: Sequence Number](#TASK1)
### 10. [TASK #2: Split Array](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #184` of `The Weekly Challenge`.

Today, we are giving away `Token #7` to [**Peter Campbell Smith**](/blog/meet-the-champion-2021-12) for the book, [**Learning Perl Exercises**](https://leanpub.com/learning_perl_exercises) by `brian d foy`. I will share the details with you in a separate email.

<br>

### Past Winners

    1) Cheok-Yin Fung
    2) W. Luis Mochan
    3) Robert DiCicco
    4) Kueppo Wesley
    5) Solathian
    6) Dario Mazzeo

<br>

Welcome two new members to the `Team PWC`, [**Robbie Hatley**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-183/robbie-hatley) and [**Baryshev Sergey**](https://github.com/BaryshevS). Please do check out `Baryshev`'s [**one cycle solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-182/baryshevs/perl/ch-1.pl) for the task `Max Index` of `Week 182`.

I noticed, with the addition of two new members, we now have `270 members` in the `Team PWC`.

It is nice to know that `Team PWC` members taking break and coming back with fresh energy. I am grateful to those who take time out and inform us in advance. Although, it is not needed, but nice to know.

My contributions to the `Week 183` is in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-183/mohammad-anwar/perl) only.

<br>

### TOP 10 Guest Languages
***

This week `Rust` moved up one position to the `rank #7`.

Do you see your favourite language in the `Top 10`? If not then why not contribute regularly and make it to the top.

     1. Python  (1099)
     2. Haskell (495)
     3. Ruby    (392)
     4. Lua     (383)
     5. C       (269)
     6. C++     (268)
     7. Rust    (228)
     8. Go      (224)
     9. Node.js (191)
    10. Awk     (187)

<br>

### Blogs with Creative Title
***

#### 1. [Unique Difference](https://raku-musings.com/unique-difference.html) by Arne Sommer.
#### 2. [arrays and days](https://fluca1978.github.io/2022/09/19/PerlWeeklyChallenge183.html) by Luca Ferrari.
#### 3. [Unique arrays and differing dates](https://pjcs-pwc.blogspot.com/2022/09/unique-arrays-and-differing-dates.html) by Peter Campbell Smith.
#### 4. [A Unique Date](https://blog.firedrake.org/archive/2022/09/The_Weekly_Challenge_183__A_Unique_Date.html) by Roger Bell_West.
#### 5. [Unique Differences](https://dev.to/simongreennet/unique-differences-1cci) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 27,960 (+106)
#### 2. Pull Requests: 6,786 (+27)
#### 3. Contributors: 205
#### 4. Fork: 260
#### 5. Stars: 143

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2022. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2022. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 183](/blog/recap-challenge-183)** by `Mohammad S Anwar`.

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

#### 1. [**Baryshev Sergey**](https://github.com/BaryshevS), an experienced `Perl` hacker from `Russia` joined the `Team PWC`.

#### 2. Robbie Hatley, an experienced `Perl` hacker from `USA` joined the `Team PWC`.

<br>

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}
***

Please check out the guest contributions for the [**Week #183**](/blog/guest-contribution/#183).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Sequence Number {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given list of strings in the format `aa9999` i.e. first 2 characters can be anything `'a-z'` followed by 4 digits `'0-9'`.

Write a script to replace the first two characters with sequence starting with `'00'`, `'01'`, `'02'` etc.

#### Example 1

    Input: @list = ( 'ab1234', 'cd5678', 'ef1342')
    Output: ('001234', '015678', '021342')

#### Example 2

    Input: @list = ( 'pq1122', 'rs3334')
    Output: ('001122', '013334')

<br>

## Task 2: Split Array {#TASK2}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given list of strings containing `0-9` and `a-z` separated by `space` only.

Write a script to split the data into two arrays, one for integers and one for alphabets only.

#### Example 1

    Input: @list = ( 'a 1 2 b 0', '3 c 4 d')
    Output: [[1,2,0], [3,4]] and [['a','b'], ['c','d']]

#### Example 2

    Input: @list = ( '1 2', 'p q r', 's 3', '4 5 t')
    Output: [[1,2], [3], [4,5]] and [['p','q','r'], ['s'], ['t']]

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 2nd October 2022**.

***
