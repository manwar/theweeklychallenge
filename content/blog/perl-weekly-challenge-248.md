---
title: "The Weekly Challenge - 248"
date: 2023-12-18T00:00:00+00:00
description: "The Weekly Challenge - 248"
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
### 09. [TASK #1: Shortest Distance](#TASK1)
### 10. [TASK #2: Submatrix Sum](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #248` of `The Weekly Challenge`.

`Happy Holiday` season to `Team PWC` members. I would like to take this opportunity to thank each member for the support and encouragement. With new year just couple of weeks behind, let us all enjoy the holiday break. I hope you find little time in between to play with `Perl` and `Raku` magic.

It has been great pleasure revisiting some of the blog post for `Advent Calendar`.

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
| &nbsp;&nbsp; `12` &nbsp;&nbsp; | &nbsp;[**Common Squares**](/blog/advent-calendar-2023-12-12) &nbsp; | &nbsp; `Simon Green` &nbsp; |
| &nbsp;&nbsp; `13` &nbsp;&nbsp; | &nbsp;[**Raku Members**](/blog/advent-calendar-2023-12-13) &nbsp; | &nbsp; `Arne Sommer` &nbsp; |
| &nbsp;&nbsp; `14` &nbsp;&nbsp; | &nbsp;[**Counting Boxes**](/blog/advent-calendar-2023-12-14) &nbsp; | &nbsp; `Roger Bell_West` &nbsp; |
| &nbsp;&nbsp; `15` &nbsp;&nbsp; | &nbsp;[**Sentenced To Compute Differences**](/blog/advent-calendar-2023-12-15) &nbsp; | &nbsp; `Adam Russell` &nbsp; |
| &nbsp;&nbsp; `16` &nbsp;&nbsp; | &nbsp;[**Counting Fridays the 13th**](/blog/advent-calendar-2023-12-16) &nbsp; | &nbsp; `Andrew Shitov` &nbsp; |
| &nbsp;&nbsp; `17` &nbsp;&nbsp; | &nbsp;[**Sums and Swaps**](/blog/advent-calendar-2023-12-17) &nbsp; | &nbsp; `Luca Ferrari` &nbsp; |
| &nbsp;&nbsp; `18` &nbsp;&nbsp; | &nbsp;[**Similar Words / Frequency Sort**](/blog/advent-calendar-2023-12-18) &nbsp; | &nbsp; `Lubos Kolouch` &nbsp; |

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `243` &nbsp;&nbsp;|&nbsp;&nbsp; 63 &nbsp;&nbsp;|&nbsp;&nbsp; 34 &nbsp;&nbsp;|&nbsp;&nbsp; 28 &nbsp;&nbsp;|
|&nbsp;&nbsp; `244` &nbsp;&nbsp;|&nbsp;&nbsp; 55 &nbsp;&nbsp;|&nbsp;&nbsp; 36 &nbsp;&nbsp;|&nbsp;&nbsp; 29 &nbsp;&nbsp;|
|&nbsp;&nbsp; `245` &nbsp;&nbsp;|&nbsp;&nbsp; 53 &nbsp;&nbsp;|&nbsp;&nbsp; 30 &nbsp;&nbsp;|&nbsp;&nbsp; 28 &nbsp;&nbsp;|
|&nbsp;&nbsp; `246` &nbsp;&nbsp;|&nbsp;&nbsp; 42 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `247` &nbsp;&nbsp;|&nbsp;&nbsp; 42 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `243` &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 85 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|
|&nbsp;&nbsp; `244` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 56 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|
|&nbsp;&nbsp; `245` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 53 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
|&nbsp;&nbsp; `246` &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|&nbsp;&nbsp; 39 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `247` &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|&nbsp;&nbsp; 37 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top 10`? If not then why not contribute regularly and make it to the top.

     1. Python     (2049)
     2. Ruby       (632)
     3. Haskell    (613)
     4. Lua        (556)
     5. Rust       (478)
     6. C          (465)
     7. C++        (448)
     8. BQN        (315)
     9. Go         (307)
    10. JavaScript (301)

<br>

### Blogs with Creative Title
***

#### 1. [The Santa Letters](https://raku-musings.com/santa-letters.html) by Arne Sommer.
#### 2. [Partridges and Pair Trees](https://jacoby.github.io/2023/12/11/partidges-and-pair-trees-weekly-challenge-247.html) by Dave Jacoby.
#### 3. [Weighing and Counting Pairs](https://github.sommrey.de/blog/pwc/challenge-247) by Jorg Sommrey.
#### 4. [arrays everywhere!](https://fluca1978.github.io/2023/12/11/PerlWeeklyChallenge247.html) by Luca Ferrari.
#### 5. [Writing Letter Pairs to Santa](https://packy.dardan.com/2023/12/13/perl-weekly-challenge/) by Packy Anderson.
#### 6. [Santa’s letters](http://ccgi.campbellsmiths.force9.co.uk/challenge/247) by Peter Campbell Smith.
#### 7. [Most Frequent Santa](https://blog.firedrake.org/archive/2023/12/The_Weekly_Challenge_247__Most_Frequent_Santa.html) by Roger Bell_West.
#### 8. [The one about frequency](https://dev.to/simongreennet/the-one-about-frequency-la6) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 35,678 (`+88`)
#### 2. Pull Requests: 9,239 (`+30`)
#### 3. Contributors: 239
#### 4. Fork: 301
#### 5. Stars: 164

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2023. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2023. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 247](/blog/recap-challenge-247)** by `Mohammad S Anwar`.

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

Please check out the guest contributions for the [**Week #247**](/blog/guest-contribution/#247).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Shortest Distance {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given `a string` and `a character` in the given string.

Write a script to return an array of integers of size same as length of the given string such that:

    distance[i] is the distance from index i to the closest occurence of
    the given character in the given string.

    The distance between two indices i and j is abs(i - j).

#### Example 1

    Input: $str = "loveleetcode", $char = "e"
    Output: (3,2,1,0,1,0,0,1,2,2,1,0)

    The character 'e' appears at indices 3, 5, 6, and 11 (0-indexed).
    The closest occurrence of 'e' for index 0 is at index 3, so the distance is abs(0 - 3) = 3.
    The closest occurrence of 'e' for index 1 is at index 3, so the distance is abs(1 - 3) = 2.
    For index 4, there is a tie between the 'e' at index 3 and the 'e' at index 5,
    but the distance is still the same: abs(4 - 3) == abs(4 - 5) = 1.
    The closest occurrence of 'e' for index 8 is at index 6, so the distance is abs(8 - 6) = 2.

#### Example 2

    Input: $str = "aaab", $char = "b"
    Output: (3,2,1,0)

<br>

## Task 2: Submatrix Sum {#TASK2}
##### **Submitted by:** [Jorg Sommrey](https://github.com/jo-37)
***

You are given a `NxM` matrix `A` of integers.

Write a script to construct a `(N-1)x(M-1)` matrix `B` having elements that are the sum over the `2x2` submatrices of `A`,

    b[i,k] = a[i,k] + a[i,k+1] + a[i+1,k] + a[i+1,k+1]

<br>

#### Example 1

    Input: $a = [
                  [1,  2,  3,  4],
                  [5,  6,  7,  8],
                  [9, 10, 11, 12]
                ]

    Output: $b = [
                   [14, 18, 22],
                   [30, 34, 38]
                 ]

#### Example 2

    Input: $a = [
                  [1, 0, 0, 0],
                  [0, 1, 0, 0],
                  [0, 0, 1, 0],
                  [0, 0, 0, 1]
                ]

    Output: $b = [
                   [2, 1, 0],
                   [1, 2, 1],
                   [0, 1, 2]
                 ]

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 24th December 2023**.

***
