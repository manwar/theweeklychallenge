---
title: "The Weekly Challenge - 249"
date: 2023-12-25T00:00:00+00:00
description: "The Weekly Challenge - 249"
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
### 09. [TASK #1: Equal Pairs](#TASK1)
### 10. [TASK #2: DI String Match](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #249` of `The Weekly Challenge`.

`Merry Christmas` everyone !!!

I wish `Team PWC` members great success in everything they do.

I pray new year brings good luck to all.

Please do enjoy quality time with your family and loved ones.

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
| &nbsp;&nbsp; `19` &nbsp;&nbsp; | &nbsp;[**Common, but Unequal, Triplet Characters**](/blog/advent-calendar-2023-12-19) &nbsp; | &nbsp; `Packy Anderson` &nbsp; |
| &nbsp;&nbsp; `20` &nbsp;&nbsp; | &nbsp;[**Remove One / Duplicate Zeros**](/blog/advent-calendar-2023-12-20) &nbsp; | &nbsp; `Jaldhar H. Vyas` &nbsp; |
| &nbsp;&nbsp; `21` &nbsp;&nbsp; | &nbsp;[**Seize The Day and Maximise Greatness**](/blog/advent-calendar-2023-12-21) &nbsp; | &nbsp; `Yves Orton` &nbsp; |
| &nbsp;&nbsp; `22` &nbsp;&nbsp; | &nbsp;[**Running Sum**](/blog/advent-calendar-2023-12-22) &nbsp; | &nbsp; `Augie De Blieck Jr.` &nbsp; |
| &nbsp;&nbsp; `23` &nbsp;&nbsp; | &nbsp;[**A.A.B.A. (Acronym And Build Array)**](/blog/advent-calendar-2023-12-23) &nbsp; | &nbsp; `Ian Rifkin` &nbsp; |
| &nbsp;&nbsp; `24` &nbsp;&nbsp; | &nbsp;[**Count the Pairs on the Floor**](/blog/advent-calendar-2023-12-24) &nbsp; | &nbsp; `Jorg Sommrey` &nbsp; |
| &nbsp;&nbsp; `25` &nbsp;&nbsp; | &nbsp;[**Uniqueness**](/blog/advent-calendar-2023-12-25) &nbsp; | &nbsp; `Cheok-Yin Fung` &nbsp; |

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `244` &nbsp;&nbsp;|&nbsp;&nbsp; 55 &nbsp;&nbsp;|&nbsp;&nbsp; 36 &nbsp;&nbsp;|&nbsp;&nbsp; 29 &nbsp;&nbsp;|
|&nbsp;&nbsp; `245` &nbsp;&nbsp;|&nbsp;&nbsp; 53 &nbsp;&nbsp;|&nbsp;&nbsp; 30 &nbsp;&nbsp;|&nbsp;&nbsp; 28 &nbsp;&nbsp;|
|&nbsp;&nbsp; `246` &nbsp;&nbsp;|&nbsp;&nbsp; 42 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `247` &nbsp;&nbsp;|&nbsp;&nbsp; 42 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|
|&nbsp;&nbsp; `248` &nbsp;&nbsp;|&nbsp;&nbsp; 49 &nbsp;&nbsp;|&nbsp;&nbsp; 27 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `244` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 56 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|
|&nbsp;&nbsp; `245` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 53 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
|&nbsp;&nbsp; `246` &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|&nbsp;&nbsp; 39 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `247` &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|&nbsp;&nbsp; 37 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `248` &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|&nbsp;&nbsp; 41 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top 10`? If not then why not contribute regularly and make it to the top.

     1. Python     (2065)
     2. Ruby       (634)
     3. Haskell    (615)
     4. Lua        (558)
     5. Rust       (482)
     6. C          (465)
     7. C++        (450)
     8. BQN        (315)
     9. Go         (309)
    10. JavaScript (303)

<br>

### Blogs with Creative Title
***

#### 1. [Shortest Sub](https://raku-musings.com/shortest-sub.html) by Arne Sommer.
#### 2. [Tumbling Down The Rabbit Hole](https://jacoby.github.io/2023/12/19/tumbling-down-the-rabbit-hole-weekly-challenge-248.html) by Dave Jacoby.
#### 3. [Distances And Sums](https://github.sommrey.de/blog/pwc/challenge-248) by Jorg Sommrey.
#### 4. [enjoy nested loops!](https://fluca1978.github.io/2023/12/18/PerlWeeklyChallenge248.html) by Luca Ferrari.
#### 5. [The Shortest Distance between Submatrix Sums](https://packy.dardan.com/2023/12/20/perl-weekly-challenge-the-shortest-distance-between-submatrix-sums/) by Packy Anderson.
#### 6. [Closet sum](http://ccgi.campbellsmiths.force9.co.uk/challenge/248) by Peter Campbell Smith.
#### 7. [Shortest Submatrix](https://blog.firedrake.org/archive/2023/12/The_Weekly_Challenge_248__Shortest_Submatrix.html) by Roger Bell_West.
#### 8. [A string, a character and a matrix...](https://dev.to/simongreennet/a-string-a-character-and-a-matrix-5bc9) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 35,778 (`+100`)
#### 2. Pull Requests: 9,273 (`+34`)
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

Quick recap of **[The Weekly Challenge - 248](/blog/recap-challenge-248)** by `Mohammad S Anwar`.

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

Please check out the guest contributions for the [**Week #248**](/blog/guest-contribution/#248).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Equal Pairs {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given an array of integers with even number of elements.

Write a script to divide the given array into equal pairs such that:

    a) Each element belongs to exactly one pair.
    b) The elements present in a pair are equal.

<br>

#### Example 1

    Input: @ints = (3, 2, 3, 2, 2, 2)
    Output: (2, 2), (3, 3), (2, 2)

    There are 6 elements in @ints.
    They should be divided into 6 / 2 = 3 pairs.
    @ints is divided into the pairs (2, 2), (3, 3), and (2, 2) satisfying all the conditions.

#### Example 2

    Input: @ints = (1, 2, 3, 4)
    Output: ()

    There is no way to divide @ints 2 pairs such that the pairs satisfy every condition.

<br>

## Task 2: DI String Match {#TASK2}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given a string `s`, consisting of only the characters `"D"` and `"I"`.

Find a permutation of the integers `[0 .. length(s)]` such that for each character `s[i]` in the string:

    s[i] == 'I' ⇒ perm[i] < perm[i + 1]
    s[i] == 'D' ⇒ perm[i] > perm[i + 1]

<br>

#### Example 1

    Input: $str = "IDID"
    Output: (0, 4, 1, 3, 2)

#### Example 2

    Input: $str = "III"
    Output: (0, 1, 2, 3)

#### Example 3

    Input: $str = "DDI"
    Output: (3, 2, 0, 1)

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 31st December 2023**.

***
