---
title: "The Weekly Challenge - 280"
date: 2024-07-29T00:00:00+00:00
description: "The Weekly Challenge - 280"
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
### 09. [TASK #1: Twice Appearance](#TASK1)
### 10. [TASK #2: Count Asterisks](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #280` of `The Weekly Challenge`.

Let us all welcome two new guest contributors, [**Tymoteusz Moryto**](https://github.com/PieVieRo) and [**Richard Loveland**](https://logicgrimoire.wordpress.com) to `Team PWC`.

Thank you, `Tymoteusz`, for sharing solution to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-279/pieviero/uiua/ch-1.ua) and [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-279/pieviero/uiua/ch-2.ua) in `Uiua`.

Thank you, `Richard`, for introducing a new programming language [**K**](https://k.miraheze.org/wiki/Main_Page) and sharing solutions to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-279/richard-loveland/k/ch-1.k) and [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-279/richard-loveland/k/ch-2.k).

Welcome back, `Andrezgz` and thanks for sharing solutions to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-279/andrezgz/perl/ch-1.pl) and [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-279/andrezgz/perl/ch-2.pl) in `Perl`.

I would also like to thank `Kjetil Skotheim` for sharing solutions to the [**Week #274**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-274/kjetillll/perl).

Did you notice new [**language breakdown chart**](/chart/#languages) added to the charts page?

We now have contributions breakdown per year. Please find below some interesting data.

***
####


        | Year | Total | Perl | Raku | Blog |
        -------------------------------------
        | 2019 | 3511  | 1959 | 1100 | 452  |
        | 2020 | 5187  | 2689 | 1718 | 780  |
        | 2021 | 4976  | 2663 | 1392 | 921  |
        | 2022 | 5371  | 2761 | 1600 | 1010 |
        | 2023 | 5624  | 2979 | 1630 | 1197 |
        | 2024 | 3240  | 1584 | 920  | 736  |

`Year 2024` stats is as of today i.e. `2024-07-29`.

***

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `275` &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `276` &nbsp;&nbsp;|&nbsp;&nbsp; 62 &nbsp;&nbsp;|&nbsp;&nbsp; 32 &nbsp;&nbsp;|&nbsp;&nbsp; 27 &nbsp;&nbsp;|
|&nbsp;&nbsp; `277` &nbsp;&nbsp;|&nbsp;&nbsp; 62 &nbsp;&nbsp;|&nbsp;&nbsp; 28 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
|&nbsp;&nbsp; `278` &nbsp;&nbsp;|&nbsp;&nbsp; 55 &nbsp;&nbsp;|&nbsp;&nbsp; 28 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|
|&nbsp;&nbsp; `279` &nbsp;&nbsp;|&nbsp;&nbsp; 52 &nbsp;&nbsp;|&nbsp;&nbsp; 28 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `275` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 60 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `276` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 74 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|
|&nbsp;&nbsp; `277` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 47 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `278` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 68 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|
|&nbsp;&nbsp; `279` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 66 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (2672)
     2. Ruby       (711)
     3. Haskell    (695)
     4. Rust       (690)
     5. Lua        (626)
     6. C          (567)
     7. C++        (528)
     8. JavaScript (457)
     9. Go         (390)
    10. BQN        (352)

<br>

### Blogs with Creative Title
***

#### 1. [Weighted Letters and Even Chars](https://github.com/atschneid/perlweeklychallenge-club/blob/master/challenge-279/atschneid/README.md) by Andrew Schneider.
#### 2. [Sort of Again](https://raku-musings.com/sort-of-again.html) by Arne Sommer.
#### 3. [Neither Sort Nor Split](https://github.sommrey.de/the-bears-den/2024/07/26/ch-279.html) by Jorg Sommrey.
#### 4. [More Weight for Examples!](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-279/challenge-279/matthias-muth#readme) by Matthews Muth.
#### 5. [Split 'em away!](https://packy.dardan.com/b/PP) by Packy Anderson.
#### 6. [Scrambled and split](http://ccgi.campbellsmiths.force9.co.uk/pwc/challenge/279) by Peter Campbell Smith.
#### 7. [Split and Sort Strings of Letters](https://blog.firedrake.org/archive/2024/07/The_Weekly_Challenge_279__Split_and_Sort_Strings_of_Letters.html) by Roger Bell_West.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 39,213 (`+112`)
#### 2. Pull Requests: 10,489 (`+37`)
#### 3. Contributors: 250 (`+1`)
#### 4. Fork: 315 (`+1`)
#### 5. Stars: 174

<br>

## SPONSOR {#SPONSOR}
***

With start of `Week #268`, we have a new sponsor `Lance Wicks` for the entire year `2024`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 279](/blog/recap-challenge-279)** by `Mohammad Sajid Anwar`.

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

#### [Tymoteusz Moryto](https://github.com/PieVieRo), an expert `Uiua` hacker joined `Team PWC`.
#### [Richard Loveland](https://logicgrimoire.wordpress.com), an expert `K` hacker joined `Team PWC`.

<br>

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}
***

Please check out the guest contributions for the [**Week #279**](/blog/guest-contribution/#279).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Twice Appearance {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a string, `$str`, containing lowercase English letters only.

Write a script to print the first letter that appears twice.

#### Example 1

    Input: $str = "acbddbca"
    Output: "d"

#### Example 2

    Input: $str = "abccd"
    Output: "c"

#### Example 3

    Input: $str = "abcdabbb"
    Output: "a"

<br>

## Task 2: Count Asterisks {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a string, `$str`, where every two consecutive vertical bars are grouped into a `pair`.

Write a script to return the number of asterisks, `*`, excluding any between each pair of vertical bars.

#### Example 1

    Input: $str = "p|*e*rl|w**e|*ekly|"
    Ouput: 2

    The characters we are looking here are "p" and "w**e".

#### Example 2

    Input: $str = "perl"
    Ouput: 0

#### Example 3

    Input: $str = "th|ewe|e**|k|l***ych|alleng|e"
    Ouput: 5

    The characters we are looking here are "th", "e**", "l***ych" and "e".

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 4th August 2024**.

***
