---
title: "The Weekly Challenge - 211"
date: 2023-04-03T00:00:00+00:00
description: "The Weekly Challenge - 211"
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
### 09. [TASK #1: Toeplitz Matrix](#TASK1)
### 10. [TASK #2: Split Same Average](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #211` of `The Weekly Challenge`.

Let us all welcome, `Shimon Bollinger`, to the `Team PWC`. He is a `Raku` hacker from `United States`.

Today is the first `Monday` of the month and time to declare our next champion. With great pride, I announce, `David Ferrone` as the `Champion of The Weekly Challenge`. Congratulation and keep contributing. `David` joined the `Team PWC` in the `Week #194`. As of today he has contributed `36 Perl`, `6 Raku` and `3 Blogs`.

Today, we are giving away `Coupon #34` to `Avery Adams` for the book, [**Learning Perl Exercises**](https://leanpub.com/learning_perl_exercises) by `brian d foy`. I will share the details with you in a separate email.

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
| 33. | &nbsp;`Carlos Oliveira`      | 34. |                           |
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

As expected the team made it finally, thank you. Having said, the following `Week #210` is now lagging behind. I hope we would get pass the magic number this time too.

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
|&nbsp;&nbsp; `199` &nbsp;&nbsp;|&nbsp;&nbsp; 58 &nbsp;&nbsp;|&nbsp;&nbsp; 34 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|
|&nbsp;&nbsp; `200` &nbsp;&nbsp;|&nbsp;&nbsp; 57 &nbsp;&nbsp;|&nbsp;&nbsp; 33 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `201` &nbsp;&nbsp;|&nbsp;&nbsp; 58 &nbsp;&nbsp;|&nbsp;&nbsp; 29 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|
|&nbsp;&nbsp; `202` &nbsp;&nbsp;|&nbsp;&nbsp; 53 &nbsp;&nbsp;|&nbsp;&nbsp; 27 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|
|&nbsp;&nbsp; `203` &nbsp;&nbsp;|&nbsp;&nbsp; 52 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
|&nbsp;&nbsp; `204` &nbsp;&nbsp;|&nbsp;&nbsp; 56 &nbsp;&nbsp;|&nbsp;&nbsp; 31 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|
|&nbsp;&nbsp; `205` &nbsp;&nbsp;|&nbsp;&nbsp; 64 &nbsp;&nbsp;|&nbsp;&nbsp; 30 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|
|&nbsp;&nbsp; `206` &nbsp;&nbsp;|&nbsp;&nbsp; 59 &nbsp;&nbsp;|&nbsp;&nbsp; 29 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `207` &nbsp;&nbsp;|&nbsp;&nbsp; 59 &nbsp;&nbsp;|&nbsp;&nbsp; 34 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|
|&nbsp;&nbsp; `208` &nbsp;&nbsp;|&nbsp;&nbsp; 60 &nbsp;&nbsp;|&nbsp;&nbsp; 33 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `209` &nbsp;&nbsp;|&nbsp;&nbsp; 53 &nbsp;&nbsp;|&nbsp;&nbsp; 29 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|
|&nbsp;&nbsp; `210` &nbsp;&nbsp;|&nbsp;&nbsp; 49 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|

<br>

I would like to thank every guest contributors for making it special every week. Last week we received `33 guest contributions` in `13 languages`

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top 10`? If not then why not contribute regularly and make it to the top.

     1. Python  (1427)
     2. Haskell (545)
     3. Ruby    (488)
     4. Lua     (455)
     5. C       (385)
     6. C++     (366)
     7. Rust    (340)
     8. BQN     (269)
     9. Go      (251)
    10. Java    (221)

<br>

### Blogs with Creative Title
***

#### 1. [Killing Numbers](https://raku-musings.com/killing-numbers.html) by Arne Sommer.
#### 2. [I didn't get very well](https://fluca1978.github.io/2023/03/30/PerlWeeklyChallenge210.html) by Luca Ferrari.
#### 3. [Kill and collide!](http://ccgi.campbellsmiths.force9.co.uk/challenge/210) by Peter Campbell Smith.
#### 4. [Number Challenges](https://dev.to/simongreennet/numbers-challenges-32k1) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 31,634 (`+152`)
#### 2. Pull Requests: 7,832 (`+34`)
#### 3. Contributors: 222 (`+2`)
#### 4. Fork: 270
#### 5. Stars: 152 (`+1`)

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2023. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2023. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 210](/blog/recap-challenge-210)** by `Mohammad S Anwar`.

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

[**Shimon Bollinger**](https://github.com/deoac), an expert hcker in `Raku`, from `United States` joined the `Team PWC`.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}
***

Please check out the guest contributions for the [**Week #210**](/blog/guest-contribution/#210).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Toeplitz Matrix {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given a matrix `m x n`.

Write a script to find out if the given matrix is `Toeplitz Matrix`.

> A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.

<br>

#### Example 1

    Input: @matrix = [ [4, 3, 2, 1],
                       [5, 4, 3, 2],
                       [6, 5, 4, 3],
                     ]
    Output: true

#### Example 2

    Input: @matrix = [ [1, 2, 3],
                       [3, 2, 1],
                     ]
    Output: false

<br>

## Task 2: Split Same Average {#TASK2}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given an array of integers.

Write a script to find out if the given can be split into two separate arrays whose average are the same.

#### Example 1:

    Input: @nums = (1, 2, 3, 4, 5, 6, 7, 8)
    Output: true

    We can split the given array into (1, 4, 5, 8) and (2, 3, 6, 7).
    The average of the two arrays are the same i.e. 4.5.

#### Example 2:

    Input: @list = (1, 3)
    Output: false

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 9th April 2023**.

***
