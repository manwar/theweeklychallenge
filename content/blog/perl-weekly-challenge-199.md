---
title: "The Weekly Challenge - 199"
date: 2023-01-09T00:00:00+00:00
description: "The Weekly Challenge - 199"
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
### 09. [TASK #1: Good Pairs](#TASK1)
### 10. [TASK #2: Good Triplets](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #199` of `The Weekly Challenge`.

Last week, another new member, `Rawley Fowler`, joined the `Team PWC` from `Canada`. We are now a family of `280 members`.

With the start of new year, I feel little tired. In `2 months` time, we would be `4 years old`. It is not easy to keep the same energy level every week for so long. Having said, every time I receive an appreciation from the team members, I am back fully charged.

There is a good news with the new year, `Perl Careers` has agreed to continue our solo sponsor in the `Year 2023`. Thank you `Pete` for the support and encouragements. Immediately after this news, I had another email from one of the member of `Team PWC` enquiring about what can be done to bring back the weekly champions. I am really happy that somebody is even thinking about it. It would be nice if we can go back to the original format in the `Year 2023`.

Today, we are giving away `Coupon #22` to `Adam Russell` for the book, [**Learning Perl Exercises**](https://leanpub.com/learning_perl_exercises) by `brian d foy`. I will share the details with you in a separate email.

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
| 21. | &nbsp;`Thomas Kohler`        | 22. |                           |
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

We missed the target in the `Week 197` after `13 weeks` but then we are back again on the target in the `Week 198`. Thank you `Team PWC`.

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
|&nbsp;&nbsp; `198` &nbsp;&nbsp;|&nbsp;&nbsp; 52 &nbsp;&nbsp;|&nbsp;&nbsp; 35 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|

<br>

I would like to thank every guest contributors for making it special every week. Last week we received `57 guest contributions` in `20 languages`.

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top 10`? If not then why not contribute regularly and make it to the top.

     1. Python  (1270)
     2. Haskell (525)
     3. Ruby    (445)
     4. Lua     (431)
     5. C++     (311)
     6. C       (310)
     7. Rust    (292)
     8. BQN     (267)
     9. Go      (233)
    10. Java    (214)

<br>

### Blogs with Creative Title
***

#### 1. [Prime the Gaps!](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2023/01/08) by Adam Russell.
#### 2. [Prime the Gap](https://raku-musings.com/prime-gap.html) by Arne Sommer.
#### 3. [Mind The Gap](https://jacoby.github.io/2023/01/03/mind-the-gap-weekly-challenge-198.html) by Dave Jacoby.
#### 4. [First Perl Code of the Year!](https://fluca1978.github.io/2023/01/04/PerlWeeklyChallenge198.html) by Luca Ferrari.
#### 5. [Mind the gap!](https://pjcs-pwc.blogspot.com/2023/01/mind-gap.html) by Peter Campbell Smith.
#### 6. [Count Max](https://blog.firedrake.org/archive/2023/01/The_Weekly_Challenge_198__Count_Max.html) by Roger Bell_West.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 30,109 (`+129`)
#### 2. Pull Requests: 7,373 (`+42`)
#### 3. Contributors: 215
#### 4. Fork: 273 (`+2`)
#### 5. Stars: 150

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2022. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2022. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 198](/blog/recap-challenge-198)** by `Mohammad S Anwar`.

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

[**Rawley Fowler**](https://github.com/rawleyfowler), an experienced `Raku` hacker from `Canada` joined the `Team PWC`.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}
***

Please check out the guest contributions for the [**Week #198**](/blog/guest-contribution/#198).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Good Pairs {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given a list of integers, `@list`.

Write a script to find the total count of `Good Pairs`.

<br>

> A pair (i, j) is called good if list[i] == list[j] and i < j.

<br>

### Example 1

    Input: @list = (1,2,3,1,1,3)
    Output: 4

    There are 4 good pairs found as below:
    (0,3)
    (0,4)
    (3,4)
    (2,5)

### Example 2

    Input: @list = (1,2,3)
    Output: 0

### Example 3

    Input: @list = (1,1,1,1)
    Output: 6

    Good pairs are below:
    (0,1)
    (0,2)
    (0,3)
    (1,2)
    (1,3)
    (2,3)

<br>

## Task 2: Good Triplets {#TASK2}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given an array of integers, `@array` and three integers `$x`,`$y`,`$z`.

Write a script to find out total `Good Triplets` in the given array.

A triplet array[i], array[j], array[k] is good if it satisfies the following conditions:

    a) 0 <= i < j < k <= n (size of given array)
    b) abs(array[i] - array[j]) <= x
    c) abs(array[j] - array[k]) <= y
    d) abs(array[i] - array[k]) <= z

### Example 1

    Input: @array = (3,0,1,1,9,7) and $x = 7, $y = 2, $z = 3
    Output: 4

    Good Triplets are as below:
    (3,0,1) where (i=0, j=1, k=2)
    (3,0,1) where (i=0, j=1, k=3)
    (3,1,1) where (i=0, j=2, k=3)
    (0,1,1) where (i=1, j=2, k=3)

### Example 2

    Input: @array = (1,1,2,2,3) and $x = 0, $y = 0, $z = 1
    Output: 0

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 15th January 2023**.

***
