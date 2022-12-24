---
title: "The Weekly Challenge - 196"
date: 2022-12-19T00:00:00+00:00
description: "The Weekly Challenge - 196"
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
### 09. [TASK #1: Pattern 132](#TASK1)
### 10. [TASK #2: Range List](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #196` of `The Weekly Challenge`.

Welcome `2 new members` to the `Team PWC`, [**Pip Stuart**](https://github.com/pip) and [**Carlos Oliveira**](https://github.com/carlos157oliveira). They are both experienced `Perl` hacker.

[**Advent Calendar 2022**](/blog/advent-calendar-2022) is going on with full swing, thanks to the contributions by the members of `Team PWC`.

| | | |
| :---: | :---: | :---: |
| `Day`   | `Article` | `Author` |
| | | |
| &nbsp;&nbsp; `1` &nbsp;&nbsp; | &nbsp;[**Are Abecedarians from Abecedaria?**](/blog/advent-calendar-2022-12-01) &nbsp; | &nbsp; `Adam Russell` &nbsp; |
| &nbsp;&nbsp; `2` &nbsp;&nbsp; | &nbsp;[**Binary String / Odd String**](/blog/advent-calendar-2022-12-02) &nbsp; | &nbsp; `James Smith` &nbsp; |
| &nbsp;&nbsp; `3` &nbsp;&nbsp; | &nbsp;[**Counting Cute**](/blog/advent-calendar-2022-12-03) &nbsp; | &nbsp; `Colin Crain` &nbsp; |
| &nbsp;&nbsp; `4` &nbsp;&nbsp; | &nbsp;[**Four is Magic**](/blog/advent-calendar-2022-12-04) &nbsp; | &nbsp; `Alexander Pankoff` &nbsp; |
| &nbsp;&nbsp; `5` &nbsp;&nbsp; | &nbsp;[**Farey, Moebius**](/blog/advent-calendar-2022-12-05) &nbsp; | &nbsp; `Arne Sommer` &nbsp; |
| &nbsp;&nbsp; `6` &nbsp;&nbsp; | &nbsp;[**Our Primes**](/blog/advent-calendar-2022-12-06) &nbsp; | &nbsp; `Dave Jacoby` &nbsp; |
| &nbsp;&nbsp; `7` &nbsp;&nbsp; | &nbsp;[**Three means and big bases**](/blog/advent-calendar-2022-12-07) &nbsp; | &nbsp; `Simon Green` &nbsp; |
| &nbsp;&nbsp; `8` &nbsp;&nbsp; | &nbsp;[**Pernicious / Weird Number**](/blog/advent-calendar-2022-12-08) &nbsp; | &nbsp; `Cheok-Yin Fung` &nbsp; |
| &nbsp;&nbsp; `9` &nbsp;&nbsp; | &nbsp;[**Fortune and Pisani**](/blog/advent-calendar-2022-12-09) &nbsp; | &nbsp; `Luca Ferrari` &nbsp; |
| &nbsp;&nbsp; `10` &nbsp;&nbsp; | &nbsp;[**Padawan Missing**](/blog/advent-calendar-2022-12-10) &nbsp; | &nbsp; `Bruce Gray` &nbsp; |
| &nbsp;&nbsp; `11` &nbsp;&nbsp; | &nbsp;[**Factorions**](/blog/advent-calendar-2022-12-11) &nbsp; | &nbsp; `Flavio Poletti` &nbsp; |
| &nbsp;&nbsp; `12` &nbsp;&nbsp; | &nbsp;[**Triangle Sum Path / Rectangle Area**](/blog/advent-calendar-2022-12-12) &nbsp; | &nbsp; `W. Luis Mochan` &nbsp; |
| &nbsp;&nbsp; `13` &nbsp;&nbsp; | &nbsp;[**Capital test and ambiguous encoding**](/blog/advent-calendar-2022-12-13) &nbsp; | &nbsp; `Peter Campbell Smith` &nbsp; |
| &nbsp;&nbsp; `14` &nbsp;&nbsp; | &nbsp;[**Days Together / Mask Code**](/blog/advent-calendar-2022-12-14) &nbsp; | &nbsp; `Andinus` &nbsp; |
| &nbsp;&nbsp; `15` &nbsp;&nbsp; | &nbsp;[**Array Degree**](/blog/advent-calendar-2022-12-15) &nbsp; | &nbsp; `E. Choroba` &nbsp; |
| &nbsp;&nbsp; `16` &nbsp;&nbsp; | &nbsp;[**Divisible Pairs / Total Zero**](/blog/advent-calendar-2022-12-16) &nbsp; | &nbsp; `Jaldhar H. Vyas` &nbsp; |
| &nbsp;&nbsp; `17` &nbsp;&nbsp; | &nbsp;[**Digital Clock and Frequency Equalizer**](/blog/advent-calendar-2022-12-17) &nbsp; | &nbsp; `Laurent Rosenfeld` &nbsp; |
| &nbsp;&nbsp; `18` &nbsp;&nbsp; | &nbsp;[**Odd Abundant Numbers**](/blog/advent-calendar-2022-12-18) &nbsp; | &nbsp; `Ryan Thompson` &nbsp; |
| &nbsp;&nbsp; `19` &nbsp;&nbsp; | &nbsp;[**Zip List / Unicode makeover**](/blog/advent-calendar-2022-12-19) &nbsp; | &nbsp; `Stephen G. Lynn` &nbsp; |

<br>

Another week another achievement. Thank you `Team PWC` for the support and encouragement.

| | | | | | | | | | | | |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| | | | | | | | | | | | |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `184` &nbsp;&nbsp;|&nbsp;&nbsp; `185` &nbsp;&nbsp; |&nbsp;&nbsp; `186` &nbsp;&nbsp; |&nbsp;&nbsp; `187` &nbsp;&nbsp;|&nbsp;&nbsp; `188` &nbsp;&nbsp;|&nbsp;&nbsp; `189` &nbsp;&nbsp;|&nbsp;&nbsp; `190` &nbsp;&nbsp;|&nbsp;&nbsp; `191` &nbsp;&nbsp;|&nbsp;&nbsp; `192` &nbsp;&nbsp;|&nbsp;&nbsp; `193` &nbsp;&nbsp;|&nbsp;&nbsp; `194` &nbsp;&nbsp;|&nbsp;&nbsp; `195` &nbsp;&nbsp;|
| | | | | | | | | | | | |
| `Perl` | 55 | 59 | 56 | 51 | 63 | 60 | 53 | 54 | 59 | 55 | 58 | 56 |
| `Raku` | 31 | 35 | 33 | 34 | 36 | 35 | 32 | 38 | 41 | 31 | 32 | 29 |
| `Blog` | 17 | 19 | 20 | 20 | 16 | 18 | 23 | 21 | 23 | 22 | 19 | 19 |
| | | | | | | | | | | | |

<br>

Last week, we had `36` regular contributors and `10` guest contributors. Thank you everyone for the support and encouragement.

Today, we are giving away `Coupon #19` to `Athanasius` for the book, [**Learning Perl Exercises**](https://leanpub.com/learning_perl_exercises) by `brian d foy`. I will share the details with you in a separate email.

### Past Winners

| | | | |
| :---: | :---: | :---: | :---: |
| | | | |
| &nbsp;&nbsp;`S. No.`&nbsp;&nbsp; | `Name`              | `S. No.` | `Name` |
| | | |
|  1. | Cheok-Yin Fung       |  2. | W. Luis Mochan    |
|  3. | Robert DiCicco       |  4. | Kueppo Wesley     |
|  5. | Solathian            |  6. | Dario Mazzeo      |
|  7. |&nbsp; Peter Campbell Smith &nbsp;|  8. | Kjetil Skotheim   |
|  9. | Neils van Dijke      | 10. |&nbsp; Laurent Rosenfeld &nbsp;|
| 11. | Duncan C. White      | 12. | Ali Moradi        |
| 13. | Jorg Sommrey         | 14. | James Smith       |
| 15. | Alexander Pankoff    | 16. | Simon Green       |
| 17. | Robbie Hatley        | 18. | Bob Lied          |
| 19. |                      | 20. |                   |
| 21. |                      | 22. |                   |
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

I would like to thank every guest contributors for making it special every week. Last week we received `53 guest contributions` in `18 languages`.

With so much going on in the recent weeks, I hardly find time to contribute my solutions. I will try my best in coming weeks to get back on track.

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top 10`? If not then why not contribute regularly and make it to the top.

     1. Python  (1247)
     2. Haskell (520)
     3. Ruby    (436)
     4. Lua     (421)
     5. C       (304)
     6. C++     (304)
     7. Rust    (276)
     8. BQN     (267)
     9. Go      (233)
    10. Java    (211)

<br>

### Blogs with Creative Title
***

#### 1. [Especially Frequent Even](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/12/18) by Adam Russell.
#### 2. [Especially Even](https://raku-musings.com/especially-even.html) by Arne Sommer.
#### 3. [Special Speedy Frequency](https://blogs.perl.org/users/bruce_gray/2022/12/twc-195-special-speedy-frequency.html) by Bruce Gray.
#### 4. [Well Ain’t That Special](https://colincrain.com/2022/12/19/well-aint-that-special/) by Colin Crain.
#### 5. [Bags to the rescue!](https://fluca1978.github.io/2022/12/12/PerlWeeklyChallenge195.html) by Luca Ferrari.
#### 6. [Some numbers are special and others are frequent and even](https://pjcs-pwc.blogspot.com/2022/12/some-numbers-are-special-and-others-are.html) by Peter Campbell Smith.
#### 7. [Frequently Special](https://blog.firedrake.org/archive/2022/12/The_Weekly_Challenge_195__Frequently_Special.html) by Roger Bell_West.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 29,788 (`+103`)
#### 2. Pull Requests:,269 (`+38`)
#### 3. Contributors: 214 (`+1`)
#### 4. Fork: 271 (`+3`)
#### 5. Stars: 148

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2022. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2022. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 195](/blog/recap-challenge-195)** by `Mohammad S Anwar`.

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

#### [**Pip Stuart**](https://github.com/pip), an experienced `Perl` hacker from `Oshkosh, Wisconsin, USA` joined `Team PWC`.

#### [**Carlos Oliveira**](https://github.com/carlos157oliveira), an experienced `Perl` hacker joined `Team PWC`.

<br>

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}
***

Please check out the guest contributions for the [**Week #195**](/blog/guest-contribution/#195).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Pattern 132 {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given a list of integers, `@list`.

Write a script to find out subsequence that respect `Pattern 132`. Return empty array if none found.

<br>

> Pattern 132 in a sequence (a[i], a[j], a[k]) such that `i < j < k and a[i] < a[k] < a[j]`.

<br>

### Example 1

    Input:  @list = (3, 1, 4, 2)
    Output: (1, 4, 2) respect the Pattern 132.

### Example 2

    Input: @list = (1, 2, 3, 4)
    Output: () since no susbsequence can be found.

### Example 3

    Input: @list = (1, 3, 2, 4, 6, 5)
    Output: (1, 3, 2) if more than one subsequence found then return the first.

### Example 4

    Input: @list = (1, 3, 4, 2)
    Output: (1, 3, 2)

<br>

## Task 2: Range List {#TASK2}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given a sorted unique integer array, `@array`.

Write a script to find all possible `Number Range` i.e [x, y] represent range all integers from `x` and `y` (both inclusive).

<br>

> Each subsequence of two or more contiguous integers

<br>

### Example 1

    Input: @array = (1,3,4,5,7)
    Output: [3,5]

### Example 2

    Input: @array = (1,2,3,6,7,9)
    Output: [1,3], [6,7]

### Example 3

    Input: @array = (0,1,2,4,5,6,8,9)
    Output: [0,2], [4,6], [8,9]

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 25th December 2022**.

***
