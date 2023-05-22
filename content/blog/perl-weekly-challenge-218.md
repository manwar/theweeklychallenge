---
title: "The Weekly Challenge - 218"
date: 2023-05-22T00:00:00+00:00
description: "The Weekly Challenge - 218"
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
### 09. [TASK #1: Maximum Product](#TASK1)
### 10. [TASK #2: Matrix Score](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #218` of `The Weekly Challenge`.

Let us all welcome a new member to `Team PWC`, [**Israel C. Batista**](https://github.com/rozcovo). Thank you for your first contributions in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-217/rozcovo/perl).

Today, we are giving away `Coupon #41` to `Aut0exec` for the book, [**Learning Perl Exercises**](https://leanpub.com/learning_perl_exercises) by `brian d foy`. I will share the details with you in a separate email. Just now I noticed we don't have your email address, can you please share with us here `perlweeklychallenge@yahoo.com`?

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
| 25. | &nbsp;`Roger Bell_West`      | 26. | &nbsp;`Flavio Poletti`    |
| 27. | &nbsp;`Dave Jacoby`          | 28. | &nbsp;`Mariano Spadaccini`|
| 29. | &nbsp;`Lubos Kolouch`        | 30. | &nbsp;`Matthew Neleigh`   |
| 31. | &nbsp;`Paulo Custodio`       | 32. | &nbsp;`Tyler Bird`        |
| 33. | &nbsp;`Carlos Oliveira`      | 34. | &nbsp;`Avery Adams`       |
| 35. | &nbsp;`Matthias Muth`        | 36. | &nbsp;`Leo Manfredi`      |
| 37. | &nbsp;`Peter Meszaros`       | 38. | &nbsp;`Arne Sommer`       |
| 39. | &nbsp;`Jaldhar H. Vyas`      | 40. | &nbsp;`Mark Anderson`     |
| 41. |                      | 42. |                   |
| 43. |                      | 44. |                   |
| 45. |                      | 46. |                   |
| 47. |                      | 48. |                   |
| 49. |                      | 50. |                   |
| | | | |

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `213` &nbsp;&nbsp;|&nbsp;&nbsp; 49 &nbsp;&nbsp;|&nbsp;&nbsp; 28 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `214` &nbsp;&nbsp;|&nbsp;&nbsp; 38 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `215` &nbsp;&nbsp;|&nbsp;&nbsp; 60 &nbsp;&nbsp;|&nbsp;&nbsp; 32 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `216` &nbsp;&nbsp;|&nbsp;&nbsp; 39 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|
|&nbsp;&nbsp; `217` &nbsp;&nbsp;|&nbsp;&nbsp; 59 &nbsp;&nbsp;|&nbsp;&nbsp; 30 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `213` &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|&nbsp;&nbsp; 33 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `214` &nbsp;&nbsp;|&nbsp;&nbsp; 05 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|&nbsp;&nbsp; 08 &nbsp;&nbsp;|
|&nbsp;&nbsp; `215` &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|&nbsp;&nbsp; 47 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `216` &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|&nbsp;&nbsp; 33 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `217` &nbsp;&nbsp;|&nbsp;&nbsp; 09 &nbsp;&nbsp;|&nbsp;&nbsp; 34 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top 10`? If not then why not contribute regularly and make it to the top.

     1. Python  (1532)
     2. Haskell (550)
     3. Ruby    (515)
     4. Lua     (471)
     5. C       (422)
     6. C++     (374)
     7. Rust    (359)
     8. BQN     (269)
     9. Go      (257)
    10. Java    (223)

<br>

### Blogs with Creative Title
***

#### 1. [Ma\[tri\]x](https://raku-musings.com/ma-tri-x.html) by Arne Sommer.
#### 2. [Flattening the Matrix](https://dev.to/oldtechaa/perl-weekly-challenge-217-flattening-the-matrix-4mk3) by Avery Adams.
#### 3. [Big and Boundless in The Matrix](https://blogs.perl.org/users/bruce_gray/2023/05/twc-217-big-and-boundless-in-the-matrix.html) by Bruce Gray.
#### 4. [Did I misunderstand?](https://fluca1978.github.io/2023/05/15/PerlWeeklyChallenge217.html) by Luca Ferrari.
#### 5. [Permutations not needed!](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-217/challenge-217/matthias-muth#readme) by Matthias Muth.
#### 6. [Sorted them both](http://ccgi.campbellsmiths.force9.co.uk/challenge/217) by Peter Campbell Smith.
#### 7. [Sorted Max](https://blog.firedrake.org/archive/2023/05/The_Weekly_Challenge_217__Sorted_Max.html) by Roger Bell_West.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 32,541 (`+133`)
#### 2. Pull Requests: 8,110 (`+45`)
#### 3. Contributors: 222
#### 4. Fork: 280 (`+1`)
#### 5. Stars: 153 (`+1`)

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2023. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2023. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 217](/blog/recap-challenge-217)** by `Mohammad S Anwar`.

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

[**Israel C. Batista**](https://github.com/rozcovo), an experienced `Perl` hacker from **Marília, Sao Paulo**, joined the `Team PWC`.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}
***

Please check out the guest contributions for the [**Week #217**](/blog/guest-contribution/#217).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Maximum Product {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given a list of 3 or more integers.

Write a script to find the 3 integers whose product is the maximum and return it.

#### Example 1

    Input: @list = (3, 1, 2)
    Output: 6

    1 x 2 x 3 => 6

#### Example 2

    Input: @list = (4, 1, 3, 2)
    Output: 24

    2 x 3 x 4 => 24

#### Example 3

    Input: @list = (-1, 0, 1, 3, 1)
    Output: 3

    1 x 1 x 3 => 3

#### Example 4

    Input: @list = (-8, 2, -9, 0, -4, 3)
    Output: 216

    -9 × -8 × 3 => 216

<br>

## Task 2: Matrix Score {#TASK2}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given a `m x n` binary matrix i.e. having only `1` and `0`.

You are allowed to make as many moves as you want to get the highest score.

> A move can be either toggling each value in a row or column.

To get the score, convert the each row binary to dec and return the sum.

#### Example 1:

    Input: @matrix = [ [0,0,1,1],
                       [1,0,1,0],
                       [1,1,0,0], ]
    Output: 39

    Move #1: convert row #1 => 1100
             [ [1,1,0,0],
               [1,0,1,0],
               [1,1,0,0], ]

    Move #2: convert col #3 => 101
             [ [1,1,1,0],
               [1,0,0,0],
               [1,1,1,0], ]

    Move #3: convert col #4 => 111
             [ [1,1,1,1],
               [1,0,0,1],
               [1,1,1,1], ]

    Score: 0b1111 + 0b1001 + 0b1111 => 15 + 9 + 15 => 39

#### Example 2:

    Input: @matrix = [ [0] ]
    Output: 1

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 28th May 2023**.

***
