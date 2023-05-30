---
title: "The Weekly Challenge - 219"
date: 2023-05-29T00:00:00+00:00
description: "The Weekly Challenge - 219"
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
### 09. [TASK #1: Sorted Squares](#TASK1)
### 10. [TASK #2: Travel Expenditure](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #219` of `The Weekly Challenge`.

Let us all welcome a new guest contributor to `Team PWC`, [**Andrea Piseri**](https://github.com/ap29600). Thank you for your first contributions in [**BQN**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-218/ap29600/bqn/ch-2.bqn).

Thank you, `BarrOff` for introducing new guest language [**V Lang**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-218/barroff/vlang).

Today, we are giving away `Coupon #42` to `BarrOff` for the book, [**Learning Perl Exercises**](https://leanpub.com/learning_perl_exercises) by `brian d foy`. I will share the details with you in a separate email.

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
| 41. | &nbsp;`Rob Turner`           | 42. |                           |
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
|&nbsp;&nbsp; `214` &nbsp;&nbsp;|&nbsp;&nbsp; 38 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `215` &nbsp;&nbsp;|&nbsp;&nbsp; 60 &nbsp;&nbsp;|&nbsp;&nbsp; 32 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `216` &nbsp;&nbsp;|&nbsp;&nbsp; 39 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|
|&nbsp;&nbsp; `217` &nbsp;&nbsp;|&nbsp;&nbsp; 60 &nbsp;&nbsp;|&nbsp;&nbsp; 32 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `218` &nbsp;&nbsp;|&nbsp;&nbsp; 43 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `214` &nbsp;&nbsp;|&nbsp;&nbsp; 05 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|&nbsp;&nbsp; 08 &nbsp;&nbsp;|
|&nbsp;&nbsp; `215` &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|&nbsp;&nbsp; 47 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `216` &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|&nbsp;&nbsp; 33 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `217` &nbsp;&nbsp;|&nbsp;&nbsp; 09 &nbsp;&nbsp;|&nbsp;&nbsp; 34 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `218` &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|&nbsp;&nbsp; 36 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top 10`? If not then why not contribute regularly and make it to the top.

     1. Python  (1564)
     2. Haskell (552)
     3. Ruby    (519)
     4. Lua     (473)
     5. C       (424)
     6. C++     (376)
     7. Rust    (362)
     8. BQN     (270)
     9. Go      (257)
    10. Java    (224)

<br>

### Blogs with Creative Title
***

#### 1. [Scored Product](https://raku-musings.com/scored-product.html) by Arne Sommer.
#### 2. [Feeling Negative](https://dev.to/oldtechaa/perl-weekly-challenge-218-feeling-negative-3gdc) by Avery Adams.
#### 3. [Highscore!](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-218/challenge-218/matthias-muth#readme) by Matthias Muth.
#### 4. [Multiply three and binary matrix](http://ccgi.campbellsmiths.force9.co.uk/challenge/218) by Peter Campbell Smith.
#### 5. [Maximum Matrix](https://blog.firedrake.org/archive/2023/05/The_Weekly_Challenge_218__Maximum_Matrix.html) by Roger Bell_West.
#### 6. [The one about maximums](https://dev.to/simongreennet/the-one-about-maximums-40cm) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 32,639 (`+98`)
#### 2. Pull Requests: 8,144 (`+34`)
#### 3. Contributors: 224 (`+2`)
#### 4. Fork: 282 (`+2`)
#### 5. Stars: 153

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2023. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2023. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 218](/blog/recap-challenge-218)** by `Mohammad S Anwar`.

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

[**Andrea Piseri**](https://github.com/ap29600), an experienced `BQN` hacker  joined the `Team PWC`.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}
***

Please check out the guest contributions for the [**Week #218**](/blog/guest-contribution/#218).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Sorted Squares {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given a list of numbers.

Write a script to square each number in the list and return the sorted list, increasing order.

#### Example 1

    Input: @list = (-2, -1, 0, 3, 4)
    Output: (0, 1, 4, 9, 16)

#### Example 2

    Input: @list = (5, -4, -1, 3, 6)
    Output: (1, 9, 16, 25, 36)

<br>

## Task 2: Travel Expenditure {#TASK2}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given two list, @costs and @days.

The list @costs contains the cost of three different types of travel cards you can buy.

For example
    @costs = (5, 30, 90)

    Index 0 element represent the cost of  1 day  travel card.
    Index 1 element represent the cost of  7 days travel card.
    Index 2 element represent the cost of 30 days travel card.

The list @days contains the day number you want to travel in the year.

For example:
    @days = (1, 3, 4, 5, 6)

    The above example means you want to travel on day 1, day 3, day 4, day 5 and day 6 of the year.

Write a script to find the minimum travel cost.

#### Example 1:

    Input: @costs = (2, 7, 25)
           @days  = (1, 5, 6, 7, 9, 15)
    Output: 11

    On day 1, we buy a one day pass for 2 which would cover the day 1.
    On day 5, we buy seven days pass for 7 which would cover days 5 - 9.
    On day 15, we buy a one day pass for 2 which would cover the day 15.

    So the total cost is 2 + 7 + 2 => 11.

#### Example 2:

    Input: @costs = (2, 7, 25)
           @days  = (1, 2, 3, 5, 7, 10, 11, 12, 14, 20, 30, 31)
    Output: 20

    On day 1, we buy a seven days pass for 7 which would cover days 1 - 7.
    On day 10, we buy a seven days pass for 7 which would cover days 10 - 14.
    On day 20, we buy a one day pass for 2 which would cover day 20.
    On day 30, we buy a one day pass for 2 which would cover day 30.
    On day 31, we buy a one day pass for 2 which would cover day 31.

    So the total cost is 7 + 7 + 2 + 2 + 2 => 20.

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 4th June 2023**.

***
