---
title: "The Weekly Challenge - 301"
date: 2024-12-23T00:00:00+00:00
description: "The Weekly Challenge - 301"
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
### 09. [TASK #1: Largest Number](#TASK1)
### 10. [TASK #2: Hamming Distance](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #301` of `The Weekly Challenge`.

Last week, I noticed a slight jump in contributions by `Team PWC` members. Well done team.

`Ryan Thompson` didn't want to miss the celebration either. So here we have his contributions in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-300/ryan-thompson/perl). Not only that we also received a [**blog post**](https://ry.ca/2024/12/pwc-300-you-there-perl) as bonus.

Talking about comeback, we have suprise contribution from `Robert McIntosh` in [**Python**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-300/robert-mcintosh/python) along with two blog posts, one for [**Task #1**](https://dev.to/rcmcintosh/my-python-language-solution-to-task-1-beautiful-arrangement-from-the-weekly-challenge-300-2dfn) and second for [**Task #2**](https://dev.to/rcmcintosh/my-python-language-solution-to-task-2-nested-array-from-the-weekly-challenge-300-2ofg).

Thank you, `Robert Ransbottom`, for sharing solutions to [**Week #298**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-298/0rir/raku).

Welcome back, `Torgny Lyon`, and thanks for sharing solutions to [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-300/torgny-lyon/perl).

Last but not least, thank you everyone for the best wishes and Christmas greetings. Have a fun and healthy Christmas with your loved one.

<br>

### Advent Calendar 2024
***

#### Day 1: [Leaping from Tree to Tree as They Float Down the Mighty Rivers of British Columbia](/blog/advent-calendar-2024-12-01) by `Dave Jacoby`.
#### Day 2: [Special Zeroes](/blog/advent-calendar-2024-12-02) by `Jorg Sommrey`.
#### Day 3: [Split the weakest](/blog/advent-calendar-2024-12-03) by `Peter Campbell Smith`.
#### Day 4: [Reverse Power](/blog/advent-calendar-2024-12-04) by `Arne Sommer`.
#### Day 5: [Odd Character / Most Frequent Word](/blog/advent-calendar-2024-12-05) by `Laurent Rosenfeld`.
#### Day 6: [Easy Pairs - Easy Merge](/blog/advent-calendar-2024-12-06) by `Matthias Muth`.
#### Day 7: [Smaller than Echelon](/blog/advent-calendar-2024-12-07) by `Roger Bell_West`.
#### Day 8: [Count Sumofvaluacula](/blog/advent-calendar-2024-12-08) by `Adam Russell`.
#### Day 9: [Target Index / Merge Items](/blog/advent-calendar-2024-12-09) by `James Smith`.
#### Day 10: [Unique Occurrences / Dictionary Rank](/blog/advent-calendar-2024-12-10) by `Robbie Hatley`.
#### Day 11: [Element Digit Sum / Dictionary Rank](/blog/advent-calendar-2024-12-11) by `Simon Green`.
#### Day 12: [Max Positive Negative / Count Equal Divisible](/blog/advent-calendar-2024-12-12) by `Ali Moradi`.
#### Day 13: [Don’t Sort It, Be Happy](/blog/advent-calendar-2024-12-13) by `Bob Lied`.
#### Day 14: [Greatest English Letter / Target Array](/blog/advent-calendar-2024-12-14) by `W. Luis Mochan`.
#### Day 15: [TDD for Good… strings](/blog/advent-calendar-2024-12-15) by `Lance Wicks`.
#### Day 16: [Complete Day / Maximum Frequency](/blog/advent-calendar-2024-12-16) by `Ryan Thompson`.
#### Day 17: [Strong Password](/blog/advent-calendar-2024-12-17) by `E. Choroba`.
#### Day 18: [Where is the chess piece going to?](/blog/advent-calendar-2024-12-18) by `Cheok-Yin Fung`.
#### Day 19: [Lost Connections and Making Changes](/blog/advent-calendar-2024-12-19) by `David Ferrone`.
#### Day 20: [Occurrences with BQN](/blog/advent-calendar-2024-12-20) by `BarrOff`.
#### Day 21: [Strength Uncombined](/blog/advent-calendar-2024-12-21) by `Bruce Gray`.
#### Day 22: [Spammer Game](/blog/advent-calendar-2024-12-22) by `Packy Anderson`.
#### Day 23: [Maximal Square / Right Interval](/blog/advent-calendar-2024-12-23) by `Luca Ferrari`.

<br>

***

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `296` &nbsp;&nbsp;|&nbsp;&nbsp; 49 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `297` &nbsp;&nbsp;|&nbsp;&nbsp; 44 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `298` &nbsp;&nbsp;|&nbsp;&nbsp; 35 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|
|&nbsp;&nbsp; `299` &nbsp;&nbsp;|&nbsp;&nbsp; 35 &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|
|&nbsp;&nbsp; `300` &nbsp;&nbsp;|&nbsp;&nbsp; 39 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `296` &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|&nbsp;&nbsp; 49 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|
|&nbsp;&nbsp; `297` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 53 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
|&nbsp;&nbsp; `298` &nbsp;&nbsp;|&nbsp;&nbsp; 9 &nbsp;&nbsp;|&nbsp;&nbsp; 45 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `299` &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|&nbsp;&nbsp; 45 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `300` &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|&nbsp;&nbsp; 42 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (3113)
     2. Rust       (816)
     3. Ruby       (755)
     4. Haskell    (731)
     5. Lua        (672)
     6. C          (589)
     7. C++        (573)
     8. JavaScript (518)
     9. Go         (442)
    10. BQN        (400)

<br>

### Blogs with Creative Title
***

#### 1. [Beautifully Nested](https://raku-musings.com/beautifully-nested.html) by Arne Sommer.
#### 2. [Like Tricentennial but for Weeks](https://jacoby-lpwk.onrender.com/2024/12/18/like-tricentennial-but-for-weeks-weekly-challenge-300.html) by Dave Jacoby.
#### 3. [The Beautiful, The Cute and The Nested](https://github.sommrey.de/the-bears-den/2024/12/20/ch-300.html) by Jorg Sommrey.
#### 4. [only Raku before Christmas!](https://fluca1978.github.io/2024/12/19/PerlWeeklyChallenge300.html) by Luca Ferrari.
#### 5. [Beauty and the nest](http://ccgi.campbellsmiths.force9.co.uk/challenge/300) by Peter Campbell Smith.
#### 6. [What a Beautiful Nest](https://blog.firedrake.org/archive/2024/12/The_Weekly_Challenge_300__What_a_Beautiful_Nest.html) by Roger Bell_West.
#### 7. [You there, Perl, may you live forever!](https://ry.ca/2024/12/pwc-300-you-there-perl) by Ryan Thompson.
#### 8. [Nested beauty](https://dev.to/simongreennet/nested-beauty-53ic) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 41,651 (`+95`)
#### 2. Pull Requests: 11,326 (`+33`)
#### 3. Contributors: 254
#### 4. Fork: 321
#### 5. Stars: 179 (`+1`)

<br>

## SPONSOR {#SPONSOR}
***

With start of `Week #268`, we have a new sponsor `Lance Wicks` for the entire year `2024`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 300](/blog/recap-challenge-300)** by `Mohammad Sajid Anwar`.

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

Please check out the guest contributions for the [**Week #300**](/blog/guest-contribution/#300).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Largest Number {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a list of positive integers, `@ints`.

Write a script to arrange all the elements in the given list such that they form the largest number and return it.

#### Example 1

    Input: @ints = (20, 3)
    Output: 320

#### Example 2

    Input: @ints = (3, 30, 34, 5, 9)
    Output: 9534330

<br>

## Task 2: Hamming Distance {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given an array of integers, `@ints`.

Write a script to return the sum of `Hamming` distances between all the pairs of the integers in the given array of integers.

<br>

    The Hamming distance between two integers is the number of places in which their binary representations differ.

<br>

#### Example 1

    Input: @ints = (4, 14, 2)
    Output: 6

    Binary representation:
    4  => 0100
    14 => 1110
    2  => 0010

    HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2 + 2 + 2 = 6.

#### Example 2

    Input: @ints = (4, 14, 4)
    Output: 4

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 29<sup>th</sup> December 2024**.

***
