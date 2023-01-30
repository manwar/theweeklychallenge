---
title: "The Weekly Challenge - 202"
date: 2023-01-30T00:00:00+00:00
description: "The Weekly Challenge - 202"
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
### 09. [TASK #1: Consecutive Odds](#TASK1)
### 10. [TASK #2: Widest Valley](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #202` of `The Weekly Challenge`.

Last week, India celebrated `Republic Day` on `26th January`. I have some fond memories from my school days. Singing national anthem and getting sweets. Also watching the republic day parade on TV for hours. Ever since, I moved to `England`, the attachment is no longer as strong as it used to be. I hope and wish, all those living in `India` still had fun.

You must have noticed that I don't merge the pull requests during the weekdays? Please bear with me for the time being. I assure you, every single contributions will be accepted, merged and shared with the team before the deadline.

Generally we talk more about the `Perl` and `Raku` contributors as compare to other guest languages. However, I know for a fact the it is not easy to get the job done in so many different languages. One such name is `Roger Bell_West` consistently sharing solutions in `Perl`, `Raku`, `JavaScript`, `Kotlin`, `Lua`, `Postscript`, `Python`, `Ruby` and `Rust`. Hats off to your efforts. Recently `Ali Moradi` joined the gang big time.

I also noticed `Conor Hoekstra` is back in action after a short gap. Welcome back.

`Ulrich Rieke` is another consistent guest contributors. His choice of languages varies.

How can I miss, `Robert DiCicco`?  Sometimes, I wonder how is it possible to do so many different languages. I find it hard to handle just a handfull. Kudos to all guest contributors.

I would also like to thank everyone for suggesting fun tasks. It is a big help for me.

Today, we are giving away `Coupon #25` to `Roger Bell_West` for the book, [**Learning Perl Exercises**](https://leanpub.com/learning_perl_exercises) by `brian d foy`. I will share the details with you in a separate email.

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
| 23. | &nbsp;`E. Choroba`           | 24. | &nbsp;`Pip Stuart`        |
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

We have now reached the milestone of `100+` contributions for the `18th consecutive weeks`. This is no small feat. Thank you `Team PWC`.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `184` &nbsp;&nbsp;|&nbsp;&nbsp; 57 &nbsp;&nbsp;|&nbsp;&nbsp; 31 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|
|&nbsp;&nbsp; `185` &nbsp;&nbsp;|&nbsp;&nbsp; 61 &nbsp;&nbsp;|&nbsp;&nbsp; 35 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `186` &nbsp;&nbsp;|&nbsp;&nbsp; 58 &nbsp;&nbsp;|&nbsp;&nbsp; 33 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|
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
|&nbsp;&nbsp; `198` &nbsp;&nbsp;|&nbsp;&nbsp; 54 &nbsp;&nbsp;|&nbsp;&nbsp; 37 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `199` &nbsp;&nbsp;|&nbsp;&nbsp; 52 &nbsp;&nbsp;|&nbsp;&nbsp; 32 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|
|&nbsp;&nbsp; `200` &nbsp;&nbsp;|&nbsp;&nbsp; 53 &nbsp;&nbsp;|&nbsp;&nbsp; 31 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|
|&nbsp;&nbsp; `201` &nbsp;&nbsp;|&nbsp;&nbsp; 54 &nbsp;&nbsp;|&nbsp;&nbsp; 29 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|

<br>

I would like to thank every guest contributors for making it special every week. Last week we received `57 guest contributions` in `21 languages`.

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top 10`? If not then why not contribute regularly and make it to the top.

     1. Python  (1293)
     2. Haskell (528)
     3. Ruby    (455)
     4. Lua     (439)
     5. C       (320)
     6. C++     (314)
     7. Rust    (303)
     8. BQN     (268)
     9. Go      (238)
    10. Java    (216)

<br>

### Blogs with Creative Title
***

#### 1. [How Many Missing Coins?](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2023/01/29) by Adam Russell.
#### 2. [Pennies by the numbers](https://raku-musings.com/pennies-numbers.html) by Arne Sommer.
#### 3. [not satisfied!](https://fluca1978.github.io/2023/01/23/PerlWeeklyChallenge201.html) by Luca Ferrari.
#### 4. [Penny Numbers](https://blog.firedrake.org/archive/2023/01/The_Weekly_Challenge_201__Penny_Numbers.html) by Roger Bell_West.
#### 5. [Missing pennies](https://dev.to/simongreennet/missing-pennies-3791) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits:30,444 (`+124`)
#### 2. Pull Requests: 7,488 (`+42`)
#### 3. Contributors: 216
#### 4. Fork: 274
#### 5. Stars: 151

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2022. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2022. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 201](/blog/recap-challenge-201)** by `Mohammad S Anwar`.

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

Please check out the guest contributions for the [**Week #201**](/blog/guest-contribution/#201).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Consecutive Odds {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given an array of integers.

Write a script to print `1` if there are `THREE` consecutive odds in the given array otherwise print `0`.

<br>

### Example 1

    Input: @array = (1,5,3,6)
    Output: 1

### Example 2

    Input: @array = (2,6,3,5)
    Output: 0

### Example 3

    Input: @array = (1,2,3,4)
    Output: 0

### Example 4

    Input: @array = (2,3,5,7)
    Output: 1

<br>

## Task 2: Widest Valley {#TASK2}
##### **Submitted by:** [E. Choroba](https://github.com/choroba)
***

Given a profile as a list of altitudes, return the leftmost **widest valley**. A valley is defined as a subarray of the profile consisting of two parts: the first part is non-increasing and the second part is non-decreasing. Either part can be empty.

<br>

### Example 1

    Input: 1, 5, 5, 2, 8
    Output: 5, 5, 2, 8

### Example 2

    Input: 2, 6, 8, 5
    Output: 2, 6, 8

### Example 3

    Input: 9, 8, 13, 13, 2, 2, 15, 17
    Output: 13, 13, 2, 2, 15, 17

### Example 4

    Input: 2, 1, 2, 1, 3
    Output: 2, 1, 2

### Example 5

    Input: 1, 3, 3, 2, 1, 2, 3, 3, 2
    Output: 3, 3, 2, 1, 2, 3, 3

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 5th February 2023**.

***
