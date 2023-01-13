---
title: "The Weekly Challenge - 195"
date: 2022-12-12T00:00:00+00:00
description: "The Weekly Challenge - 195"
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
### 09. [TASK #1: Special Integers](#TASK1)
### 10. [TASK #2: Most Frequent Even](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #195` of `The Weekly Challenge`.

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

<br>

Finally we reached the milestone one more time last week. Thank you `Team PWC` for the support and encouragement.

| | | | | | | | | | | |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| | | | | | | | | | | |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `184` &nbsp;&nbsp;|&nbsp;&nbsp; `185` &nbsp;&nbsp; |&nbsp;&nbsp; `186` &nbsp;&nbsp; |&nbsp;&nbsp; `187` &nbsp;&nbsp;|&nbsp;&nbsp; `188` &nbsp;&nbsp;|&nbsp;&nbsp; `189` &nbsp;&nbsp;|&nbsp;&nbsp; `190` &nbsp;&nbsp;|&nbsp;&nbsp; `191` &nbsp;&nbsp;|&nbsp;&nbsp; `192` &nbsp;&nbsp;|&nbsp;&nbsp; `193` &nbsp;&nbsp;|&nbsp;&nbsp; `194` &nbsp;&nbsp;|
| | | | | | | | | | | |
| `Perl` | 55 | 59 | 56 | 51 | 63 | 62 | 55 | 56 | 59 | 55 | 58 |
| `Raku` | 31 | 35 | 33 | 34 | 36 | 35 | 32 | 38 | 41 | 31 | 32 |
| `Blog` | 17 | 19 | 20 | 20 | 16 | 18 | 23 | 21 | 23 | 22 | 19 |
| | | | | | | | | | | |

<br>

Last week, we had `35` regular contributors and `11` guest contributors. Thank you everyone for the support and encouragement.

Today, we are giving away `Coupon #18` to `Bob Lied` for the book, [**Learning Perl Exercises**](https://leanpub.com/learning_perl_exercises) by `brian d foy`. Unfortunately we don't have your email address, can you please share with us so that we can send you the coupon?

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
| 17. | Robbie Hatley        | 18. |                   |
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

I would like to thank every guest contributors for making it special every week. Last week we received `39 guest contributions` in `18 languages`.

With so much going on in the recent weeks, I hardly find time to contribute my solutions. I will try my best in coming weeks to get back on track.

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top 10`? If not then why not contribute regularly and make it to the top.

     1. Python  (1238)
     2. Haskell (518)
     3. Ruby    (433)
     4. Lua     (417)
     5. C       (300)
     6. C++     (300)
     7. Rust    (272)
     8. BQN     (267)
     9. Go      (233)
    10. Java    (210)

<br>

### Blogs with Creative Title
***

#### 1. [Digital Frequalizer](https://raku-musings.com/digital-frequalizer.html) by Arne Sommer.
#### 2. [Bag Time!](https://blogs.perl.org/users/bruce_gray/2022/12/twc-194-bag-time.html) by Bruce Gray.
#### 3. [Freq Out, Man!](https://colincrain.com/2022/12/12/freq-out-man/) by Colin Crain.
#### 4. [iffy solutions](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-194/james-smith#readme) by James Smith.
#### 5. [regular expressions everywhere!](https://fluca1978.github.io/2022/12/05/PerlWeeklyChallenge194.html) by Luca Ferrari.
#### 6. [Completing the time and levelling the letters](https://pjcs-pwc.blogspot.com/2022/12/completing-time-and-levelling-letters.html) by Peter Campbell Smith.
#### 7. [Digital Equaliser](https://blog.firedrake.org/archive/2022/12/The_Weekly_Challenge_194__Digital_Equaliser.html) by Roger Bell_West.
#### 8. [Digital frequency](https://dev.to/simongreennet/digital-frequency-l56) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 29,685 (`+138`)
#### 2. Pull Requests: 7,236 (`+37`)
#### 3. Contributors: 213
#### 4. Fork: 268
#### 5. Stars: 149

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2022. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2022. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 194](/blog/recap-challenge-194)** by `Mohammad S Anwar`.

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

Please check out the guest contributions for the [**Week #194**](/blog/guest-contribution/#194).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Special Integers {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given a positive integer, `$n > 0`.

Write a script to print the count of all special integers between `1` and `$n`.

> An integer is special when all of its digits are unique.

### Example 1:

    Input: $n = 15
    Output: 14 as except 11 all other integers between 1 and 15 are spcial.

### Example 2:

    Input: $n = 35
    Output: 32 as except 11, 22, 33 all others are special.

<br>

## Task 2: Most Frequent Even {#TASK2}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given a list of numbers, `@list`.

Write a script to find most frequent even numbers in the list. In case you get more than one even numbers then return the `smallest even integer`. For all other case, return `-1`.

### Example 1

    Input: @list = (1,1,2,6,2)
    Output: 2 as there are only 2 even numbers 2 and 6 and of those 2 appears the most.

### Example 2

    Input: @list = (1,3,5,7)
    Output: -1 since no even numbers found in the list

### Example 3

    Input: @list = (6,4,4,6,1)
    Output: 4 since there are only two even numbers 4 and 6. They both appears the equal number of times, so pick the smallest.

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 18th December 2022**.

***
