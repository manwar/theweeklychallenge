---
title: "The Weekly Challenge - 200"
date: 2023-01-16T00:00:00+00:00
description: "The Weekly Challenge - 200"
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
### 09. [TASK #1: Arithmetic Slices](#TASK1)
### 10. [TASK #2: Seven Segment 200](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #200` of `The Weekly Challenge`.

`Ryan Thompson`, our in-house `Perl` and `Raku` reviewer came up with fun task to celebrate the `200th` week of the weekly challenge. I am sure you will find it fun to work on it. I am looking forward to the interesting solutions and discussions around it.

Thanks to everyone who sent me kind messages, it means a lot.

I am trying my best to get back on track but still struggling. The best part is, I am not giving up for now. Wish me luck.

Today, we are giving away `Coupon #23` to `E. Choroba` for the book, [**Learning Perl Exercises**](https://leanpub.com/learning_perl_exercises) by `brian d foy`. I will share the details with you in a separate email.

### PAST WINNERS

| | | | |
| :---: | --- | :---: | --- |
| | | | |
| &nbsp;&nbsp;`S. No.`&nbsp;&nbsp; | &nbsp;`Name`              | `S. No.` | &nbsp;`Name` |
| | | |
|  1. | &nbsp;`Cheok-Yin Fung`       |  2. | &nbsp;`W. Luis Mochan`    |
|  3. | &nbsp;`Robert DiCicco`       |  4. | &nbsp;`Kueppo Wesley`     |
|  5. | &nbsp;`Solathian`            |  6. | &nbsp;`Dario Mazzeo`      |
|  7. | &nbsp;`Peter Campbell Smith` &nbsp;|  8. | &nbsp;`Kjetil Skotheim`   |
|  9. | &nbsp;`Neils van Dijke`      | 10. | &nbsp;`Laurent Rosenfeld` &nbsp;|
| 11. | &nbsp;`Duncan C. White`      | 12. | &nbsp;`Ali Moradi`        |
| 13. | &nbsp;`Jorg Sommrey`         | 14. | &nbsp;`James Smith`       |
| 15. | &nbsp;`Alexander Pankoff`    | 16. | &nbsp;`Simon Green`       |
| 17. | &nbsp;`Robbie Hatley`        | 18. | &nbsp;`Bob Lied`          |
| 19. | &nbsp;`Athanasius`           | 20. | &nbsp;`David Ferrone`     |
| 21. | &nbsp;`Thomas Kohler`        | 22. | &nbsp;`Adam Russell`      |
| 23. |                      | 24. |                   |
| 25. |                      | 26. |                   |
| 27. |                      | 28. |                   |
| 29. |                      | 30. |                   |
| 31. |                      | 32. |                   |
| 33. |                      | 34. |                   |
| 35. |                      | 36. |                   |
| 37. |                      | 38. |                   |
| 39. |                      | 40. |                   |
| 41. |                      | 42. |                   |
| 43. |                      | 44. |                   |
| 45. |                      | 46. |                   |
| 47. |                      | 48. |                   |
| 49. |                      | 50. |                   |
| | | | |

<br>

Thanks to `Jaldhar H. Vyas`, we are now back on track with regard to reaching milestones every week as you can see below. Thank you `Team PWC`.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `184` &nbsp;&nbsp;|&nbsp;&nbsp; 55 &nbsp;&nbsp;|&nbsp;&nbsp; 31 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|
|&nbsp;&nbsp; `185` &nbsp;&nbsp;|&nbsp;&nbsp; 59 &nbsp;&nbsp;|&nbsp;&nbsp; 35 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `186` &nbsp;&nbsp;|&nbsp;&nbsp; 56 &nbsp;&nbsp;|&nbsp;&nbsp; 33 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|
|&nbsp;&nbsp; `187` &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 34 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|
|&nbsp;&nbsp; `188` &nbsp;&nbsp;|&nbsp;&nbsp; 63 &nbsp;&nbsp;|&nbsp;&nbsp; 36 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `189` &nbsp;&nbsp;|&nbsp;&nbsp; 62 &nbsp;&nbsp;|&nbsp;&nbsp; 35 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
|&nbsp;&nbsp; `190` &nbsp;&nbsp;|&nbsp;&nbsp; 55 &nbsp;&nbsp;|&nbsp;&nbsp; 32 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `191` &nbsp;&nbsp;|&nbsp;&nbsp; 56 &nbsp;&nbsp;|&nbsp;&nbsp; 38 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|
|&nbsp;&nbsp; `192` &nbsp;&nbsp;|&nbsp;&nbsp; 59 &nbsp;&nbsp;|&nbsp;&nbsp; 41 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `193` &nbsp;&nbsp;|&nbsp;&nbsp; 55 &nbsp;&nbsp;|&nbsp;&nbsp; 31 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|
|&nbsp;&nbsp; `194` &nbsp;&nbsp;|&nbsp;&nbsp; 58 &nbsp;&nbsp;|&nbsp;&nbsp; 32 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `195` &nbsp;&nbsp;|&nbsp;&nbsp; 58 &nbsp;&nbsp;|&nbsp;&nbsp; 29 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `196` &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 29 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|
|&nbsp;&nbsp; `197` &nbsp;&nbsp;|&nbsp;&nbsp; 49 &nbsp;&nbsp;|&nbsp;&nbsp; 31 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|
|&nbsp;&nbsp; `198` &nbsp;&nbsp;|&nbsp;&nbsp; 52 &nbsp;&nbsp;|&nbsp;&nbsp; 35 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|
|&nbsp;&nbsp; `199` &nbsp;&nbsp;|&nbsp;&nbsp; 52 &nbsp;&nbsp;|&nbsp;&nbsp; 32 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|

<br>

I would like to thank every guest contributors for making it special every week. Last week we received `47 guest contributions` in `19 languages`.

<br>

### TOP 10 Guest Languages
***

Last week `C` and `C++` swapped positions, other than everybody is holding the position.

Do you see your favourite language in the `Top 10`? If not then why not contribute regularly and make it to the top.

     1. Python  (1279)
     2. Haskell (525)
     3. Ruby    (449)
     4. Lua     (435)
     5. C       (311)
     6. C++     (311)
     7. Rust    (296)
     8. BQN     (267)
     9. Go      (234)
    10. Java    (215)

<br>

### Blogs with Creative Title
***

#### 1. [Multiple Goods](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2023/01/15) by Adam Russell.
#### 2. [Twice as Good](https://raku-musings.com/twice-as-good.html) by Arne Sommer.
#### 3. [Not a Bad Couple… And There’s Always Room for One More, Baby](https://colincrain.com/2023/01/15/not-a-bad-couple-and-theres-always-room-for-one-more-baby) by Colin Crain.
#### 4. [For The Good](https://jacoby.github.io/2023/01/09/for-the-good-the-weekly-challenge-199.html) by Dave Jacoby.
#### 5. [Nested Loops Everywhere!](https://fluca1978.github.io/2023/01/09/PerlWeeklyChallenge199.html) by Luca Ferrari.
#### 6. [All good things](https://pjcs-pwc.blogspot.com/2023/01/all-good-things.html) by Peter Campbell Smith.
#### 7. [Good N-lets](https://blog.firedrake.org/archive/2023/01/The_Weekly_Challenge_199__Good_N_lets.html) by Roger Bell_West.
#### 8. [It's all good](https://dev.to/simongreennet/its-all-good-foe) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 30,227 (`+118`)
#### 2. Pull Requests: 7,413 (`+40`)
#### 3. Contributors: 215
#### 4. Fork: 274 (`+1`)
#### 5. Stars: 150

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2022. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2022. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 199](/blog/recap-challenge-199)** by `Mohammad S Anwar`.

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

Please check out the guest contributions for the [**Week #199**](/blog/guest-contribution/#199).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Arithmetic Slices {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given an array of integers.

Write a script to find out all `Arithmetic Slices` for the given array of integers.

> An integer array is called arithmetic if it has at least 3 elements and the differences between any three consecutive elements are the same.

<br>

### Example 1

    Input: @array = (1,2,3,4)
    Output: (1,2,3), (2,3,4), (1,2,3,4)

### Example 2

    Input: @array = (2)
    Output: () as no slice found.

<br>

## Task 2: Seven Segment 200 {#TASK2}
##### **Submitted by:** [Ryan J Thompson](https://ry.ca)
***

A seven segment display is an electronic component, usually used to display digits. The segments are labeled `'a'` through `'g'` as shown:

<br>

![Seven Segment](/images/blog/wk-200-2.png)

<br>

The encoding of each digit can thus be represented compactly as a truth table:

    my @truth = qw<abcdef bc abdeg abcdg bcfg acdfg a cdefg abc abcdefg abcfg>;

For example, $truth[1] = 'bc'. The digit 1 would have segments 'b' and 'c' enabled.

Write a program that accepts any decimal number and draws that number as a horizontal sequence of ASCII seven segment displays, similar to the following:

<br>

    -------  -------  -------
          |  |     |  |     |
          |  |     |  |     |
    -------
    |        |     |  |     |
    |        |     |  |     |
    -------  -------  -------

To qualify as a seven segment display, each segment must be drawn (or not drawn) according to your @truth table.

The number `"200"` was of course chosen to celebrate our `200th` week!

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 22nd January 2023**.

***
