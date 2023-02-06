---
title: "The Weekly Challenge - 203"
date: 2023-02-06T00:00:00+00:00
description: "The Weekly Challenge - 203"
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
### 09. [TASK #1: Special Quadruplets](#TASK1)
### 10. [TASK #2: Copy Directory](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #203` of `The Weekly Challenge`.

We have a new member from `Russia` last week, [**Valerii Dundukov**](https://www.linkedin.com/in/legioneroff). Welcome on board.

Today is the first `Monday` of the month and time to declare our first champion of the year `2023`. With great pleasure, we announce `Bob Lied` as our next champion. As of today, he has contributed `100` solutions in `Perl`.

Today, we are giving away `Coupon #26` to `Flavio Poletti` for the book, [**Learning Perl Exercises**](https://leanpub.com/learning_perl_exercises) by `brian d foy`. I will share the details with you in a separate email.

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
| 25. | &nbsp;`Roger Bell_West`      | 26. |                           |
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

Last week, we missed the target by a bit but I am confident we would get there with some late submissions. Thank you `Team PWC`.

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
|&nbsp;&nbsp; `200` &nbsp;&nbsp;|&nbsp;&nbsp; 55 &nbsp;&nbsp;|&nbsp;&nbsp; 33 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `201` &nbsp;&nbsp;|&nbsp;&nbsp; 55 &nbsp;&nbsp;|&nbsp;&nbsp; 29 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|
|&nbsp;&nbsp; `202` &nbsp;&nbsp;|&nbsp;&nbsp; 47 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|

<br>

I would like to thank every guest contributors for making it special every week. Last week we received `34 guest contributions` in `13 languages`.

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top 10`? If not then why not contribute regularly and make it to the top.

     1. Python  (1302)
     2. Haskell (530)
     3. Ruby    (458)
     4. Lua     (441)
     5. C       (320)
     6. C++     (316)
     7. Rust    (307)
     8. BQN     (268)
     9. Go      (240)
    10. Java    (216)

<br>

### Blogs with Creative Title
***

#### 1. [Into the Odd Wide Valley](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2023/02/05) by Adam Russell.
#### 2. [Odd Valleys](https://raku-musings.com/odd-valleys.html) by Arne Sommer.
#### 3. [How Wide is My Valley?](https://colincrain.com/2023/02/06/how-wide-is-my-valley/) by Colin Crain.
#### 4. [Challenge Accepted](https://jacoby.github.io/2023/01/31/weekly-challenge-202-challenge-accepted.html) by Dave Jacoby.
#### 5. [nested loops everywhere!](https://fluca1978.github.io/2023/01/30/PerlWeeklyChallenge202.html) by Luca Ferrari.
#### 6. [Three odd things in the valleys](https://pjcs-pwc.blogspot.com/2023/02/three-odd-things-in-valleys.html) by Peter Campbell Smith.
#### 7. [Consecutive Valley](https://blog.firedrake.org/archive/2023/02/The_Weekly_Challenge_202__Consecutive_Valley.html) by Roger Bell_West.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 30,555 (`+111`)
#### 2. Pull Requests: 7,522 (`+34`)
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

Quick recap of **[The Weekly Challenge - 202](/blog/recap-challenge-202)** by `Mohammad S Anwar`.

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

[**Valerii Dundukov**](https://www.linkedin.com/in/legioneroff), an experienced `Perl` hacker from `Russia` joined the `Team PWC`.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}
***

Please check out the guest contributions for the [**Week #202**](/blog/guest-contribution/#202).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Special Quadruplets {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given an array of integers.

Write a script to find out the total special quadruplets for the given array.

    Special Quadruplets are such that satisfies the following 2 rules.
    1) nums[a] + nums[b] + nums[c] == nums[d]
    2) a < b < c < d

<br>

### Example 1

    Input: @nums = (1,2,3,6)
    Output: 1

    Since the only special quadruplets found is $nums[0] + $nums[1] + $nums[2] == $nums[3].

### Example 2

    Input: @nums = (1,1,1,3,5)
    Output: 4

    $nums[0] + $nums[1] + $nums[2] == $nums[3]
    $nums[0] + $nums[1] + $nums[3] == $nums[4]
    $nums[0] + $nums[2] + $nums[3] == $nums[4]
    $nums[1] + $nums[2] + $nums[3] == $nums[4]

### Example 3

    Input: @nums = (3,3,6,4,5)
    Output: 0

<br>

## Task 2: Copy Directory {#TASK2}
##### **Submitted by:** [Julien Fiegehenn](https://github.com/simbabque)
***

You are given path to two folders, `$source` and `$target`.

Write a script that recursively copy the directory from `$source` to `$target` except any files.

<br>

### Example

    Input: $source = '/a/b/c' and $target = '/x/y'

    Source directory structure:

    ├── a
    │   └── b
    │       └── c
    │           ├── 1
    │           │   └── 1.txt
    │           ├── 2
    │           │   └── 2.txt
    │           ├── 3
    │           │   └── 3.txt
    │           ├── 4
    │           └── 5
    │               └── 5.txt

    Target directory structure:

    ├── x
    │   └── y

    Expected Result:

    ├── x
    │   └── y
    |       ├── 1
    │       ├── 2
    │       ├── 3
    │       ├── 4
    │       └── 5

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 12th February 2023**.

***
