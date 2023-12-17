---
title: "The Weekly Challenge - 247"
date: 2023-12-11T00:00:00+00:00
description: "The Weekly Challenge - 247"
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
### 09. [TASK #1: Secret Santa](#TASK1)
### 10. [TASK #2: Most Frequent Letter Pair](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #247` of `The Weekly Challenge`.

Please checkout the [**interview**](/blog/meet-the-champion-2023-11) with the latest champion, `Peter Meszaros`. Thank you for prompt response.

We also got the [**interview**](/blog/meet-the-champion-2023-08) done with the past champion, `BarrOff`. Thank you for the support and encouragement.

As we all know the festive season is on, I was expecting low turn out but to my surprise, we still received good response. Thanks to all the regular and dedicated contributors.

<br>

### Advent Calendar 2023

| | | |
| --- | --- | --- |
| &nbsp;`Day`   | `Article` | &nbsp;&nbsp;`Author` |
| | | |
| &nbsp;&nbsp; `1` &nbsp;&nbsp; | &nbsp;[**Third Highest and Maximum (Bit-Wise) XOR**](/blog/advent-calendar-2023-12-01) &nbsp; | &nbsp; `Laurent Rosenfeld` &nbsp; |
| &nbsp;&nbsp; `2` &nbsp;&nbsp; | &nbsp;[**Maximum sum of pair minimums**](/blog/advent-calendar-2023-12-02) &nbsp; | &nbsp; `Bob Lied` &nbsp; |
| &nbsp;&nbsp; `3` &nbsp;&nbsp; | &nbsp;[**Minimum Index Sum / Duplicate and Missing**](/blog/advent-calendar-2023-12-03) &nbsp; | &nbsp; `James Smith` &nbsp; |
| &nbsp;&nbsp; `4` &nbsp;&nbsp; | &nbsp;[**Give A Little Bit**](/blog/advent-calendar-2023-12-04) &nbsp; | &nbsp; `Dave Jacoby` &nbsp; |
| &nbsp;&nbsp; `5` &nbsp;&nbsp; | &nbsp;[**Kill And Win / Number Collision**](/blog/advent-calendar-2023-12-05) &nbsp; | &nbsp; `Avery Adams` &nbsp; |
| &nbsp;&nbsp; `6` &nbsp;&nbsp; | &nbsp;[**Lead to Gold and 1 2 3**](/blog/advent-calendar-2023-12-06) &nbsp; | &nbsp; `Peter Campbell Smith` &nbsp; |
| &nbsp;&nbsp; `7` &nbsp;&nbsp; | &nbsp;[**Wow: Another oneliner! But also a complete BFS...!**](/blog/advent-calendar-2023-12-07) &nbsp; | &nbsp; `Matthias Muth` &nbsp; |
| &nbsp;&nbsp; `8` &nbsp;&nbsp; | &nbsp;[**Collect Points**](/blog/advent-calendar-2023-12-08) &nbsp; | &nbsp; `Flavio Poletti` &nbsp; |
| &nbsp;&nbsp; `9` &nbsp;&nbsp; | &nbsp;[**Odd one Out /  Number Placement**](/blog/advent-calendar-2023-12-09) &nbsp; | &nbsp; `Robbie Hatley` &nbsp; |
| &nbsp;&nbsp; `10` &nbsp;&nbsp; | &nbsp;[**Sorted Matrix / Max Number**](/blog/advent-calendar-2023-12-10) &nbsp; | &nbsp; `Stephen G Lynn` &nbsp; |
| &nbsp;&nbsp; `11` &nbsp;&nbsp; | &nbsp;[**Sorted Squares / Travel Expenditure**](/blog/advent-calendar-2023-12-11) &nbsp; | &nbsp; `W. Luis Mochan` &nbsp; |

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `242` &nbsp;&nbsp;|&nbsp;&nbsp; 57 &nbsp;&nbsp;|&nbsp;&nbsp; 37 &nbsp;&nbsp;|&nbsp;&nbsp; 32 &nbsp;&nbsp;|
|&nbsp;&nbsp; `243` &nbsp;&nbsp;|&nbsp;&nbsp; 63 &nbsp;&nbsp;|&nbsp;&nbsp; 34 &nbsp;&nbsp;|&nbsp;&nbsp; 28 &nbsp;&nbsp;|
|&nbsp;&nbsp; `244` &nbsp;&nbsp;|&nbsp;&nbsp; 55 &nbsp;&nbsp;|&nbsp;&nbsp; 36 &nbsp;&nbsp;|&nbsp;&nbsp; 29 &nbsp;&nbsp;|
|&nbsp;&nbsp; `245` &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 28 &nbsp;&nbsp;|&nbsp;&nbsp; 27 &nbsp;&nbsp;|
|&nbsp;&nbsp; `246` &nbsp;&nbsp;|&nbsp;&nbsp; 42 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `242` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 57 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|
|&nbsp;&nbsp; `243` &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 85 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|
|&nbsp;&nbsp; `244` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 56 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|
|&nbsp;&nbsp; `245` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 53 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
|&nbsp;&nbsp; `246` &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|&nbsp;&nbsp; 39 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top 10`? If not then why not contribute regularly and make it to the top.

     1. Python     (2035)
     2. Ruby       (630)
     3. Haskell    (612)
     4. Lua        (554)
     5. Rust       (475)
     6. C          (465)
     7. C++        (447)
     8. BQN        (315)
     9. Go         (305)
    10. JavaScript (299)

<br>

### Blogs with Creative Title
***

#### 1. [Out of Linear](https://raku-musings.com/out-of-linear.html) by Arne Sommer.
#### 2. [Random use of algebra](https://dev.to/boblied/pwc-246-random-use-of-algebra-4675) by Bob Lied.
#### 3. [Uniqueness](https://e7-87-83.github.io/coding/challenge_246.html) by Cheok-Yin Fung.
#### 4. [Make It Unique](https://jacoby.github.io/2023/12/05/make-it-unique-weekly-challenge-246.html) by Dave Jacoby.
#### 5. [Recurring Lotteries](https://github.sommrey.de/blog/pwc/challenge-246/) by Jorg Sommrey.
#### 6. [Brute Force Math!](https://fluca1978.github.io/2023/12/04/PerlWeeklyChallenge246.html) by Luca Ferrari.
#### 7. [25 or 6 out of four… ty-nine](https://packy.dardan.com/2023/12/05/perl-weekly-challenge-25-or-6-out-of-four-ty-nine) by Packy Anderson.
#### 8. [Lotteries and sequences](http://ccgi.campbellsmiths.force9.co.uk/challenge/246) by Peter Campbell Smith.
#### 9. [Linear 49](https://blog.firedrake.org/archive/2023/12/The_Weekly_Challenge_246__Linear_49.html) by Roger Bell_West.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 35,590 (`+99`)
#### 2. Pull Requests: 9,209 (`+39`)
#### 3. Contributors: 239
#### 4. Fork: 301
#### 5. Stars: 164 (`+1`)

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2023. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2023. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 246](/blog/recap-challenge-246)** by `Mohammad S Anwar`.

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

Please check out the guest contributions for the [**Week #246**](/blog/guest-contribution/#246).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Secret Santa {#TASK1}
##### **Submitted by:** [Andreas Voegele](https://github.com/voegelas)
***

Secret Santa is a Christmas tradition in which members of a group are randomly assigned a person to whom they give a gift.

You are given a list of names. Write a script that tries to team persons from different families.

#### Example 1

    The givers are randomly chosen but don't share family names with the receivers.

    Input: @names = ('Mr. Wall',
                     'Mrs. Wall',
                     'Mr. Anwar',
                     'Mrs. Anwar',
                     'Mr. Conway',
                     'Mr. Cross',
                    );

    Output:

        Mr. Conway -> Mr. Wall
        Mr. Anwar -> Mrs. Wall
        Mrs. Wall -> Mr. Anwar
        Mr. Cross -> Mrs. Anwar
        Mr. Wall -> Mr. Conway
        Mrs. Anwar -> Mr. Cross

#### Example 2

    One gift is given to a family member.

    Input: @names = ('Mr. Wall',
                     'Mrs. Wall',
                     'Mr. Anwar',
                    );

    Output:

        Mr. Anwar -> Mr. Wall
        Mr. Wall -> Mrs. Wall
        Mrs. Wall -> Mr. Anwar

<br>

## Task 2: Most Frequent Letter Pair {#TASK2}
##### **Submitted by:** [Jorg Sommrey](https://github.com/jo-37)
***

You are given a string S of lower case letters `'a'..'z'`.

Write a script that finds the pair of consecutive letters in S that appears most frequently. If there is more than one such pair, chose the one that is the lexicographically first.

#### Example 1

    Input: $s = 'abcdbca'
    Output: 'bc'

    'bc' appears twice in `$s`

#### Example 2

    Input: $s = 'cdeabeabfcdfabgcd'
    Output: 'ab'

    'ab' and 'cd' both appear three times in $s and 'ab' is lexicographically smaller than 'cd'.

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 17th December 2023**.

***
