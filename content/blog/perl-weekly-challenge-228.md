---
title: "The Weekly Challenge - 228"
date: 2023-07-31T00:00:00+00:00
description: "The Weekly Challenge - 228"
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
### 09. [TASK #1: Unique Sum](#TASK1)
### 10. [TASK #2: Empty Array](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #228` of `The Weekly Challenge`.

I would like to share with the `Team PWC` that I am going on `3 weeks` holiday to `India` this `Friday 4th Aug 2023`. During the holiday, there would be big delays in accepting the contributions and updating the charts.

Today, we are giving away `Coupon #50` to `Stephen G. Lynn` for the book, [**Learning Perl Exercises**](https://leanpub.com/learning_perl_exercises) by `brian d foy`. I will share the details with you in a separate email.

<br>

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
| 41. | &nbsp;`Rob Turner`           | 42. | &nbsp;`BarrOff`           |
| 43. | &nbsp;`Robert Ransbottom`    | 44. | &nbsp;`Andreas Voegele`   |
| 45. | &nbsp;`Jan Krnavek`          | 46. | &nbsp;`Steven Wilson`     |
| 47. | &nbsp;`Bruce Gray`           | 48. | &nbsp;`PokGoPun`          |
| 49. | &nbsp;`Luca Ferrari`         | 50. |                   |
| | | | |

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `223` &nbsp;&nbsp;|&nbsp;&nbsp; 44 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `224` &nbsp;&nbsp;|&nbsp;&nbsp; 38 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `225` &nbsp;&nbsp;|&nbsp;&nbsp; 56 &nbsp;&nbsp;|&nbsp;&nbsp; 31 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|
|&nbsp;&nbsp; `226` &nbsp;&nbsp;|&nbsp;&nbsp; 59 &nbsp;&nbsp;|&nbsp;&nbsp; 32 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|
|&nbsp;&nbsp; `227` &nbsp;&nbsp;|&nbsp;&nbsp; 53 &nbsp;&nbsp;|&nbsp;&nbsp; 30 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `223` &nbsp;&nbsp;|&nbsp;&nbsp; 09 &nbsp;&nbsp;|&nbsp;&nbsp; 37 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `224` &nbsp;&nbsp;|&nbsp;&nbsp; 08 &nbsp;&nbsp;|&nbsp;&nbsp; 32 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `225` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 63 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|
|&nbsp;&nbsp; `226` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 52 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `227` &nbsp;&nbsp;|&nbsp;&nbsp; 09 &nbsp;&nbsp;|&nbsp;&nbsp; 36 &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top 10`? If not then why not contribute regularly and make it to the top.

     1. Python  (1688)
     2. Haskell (570)
     3. Ruby    (553)
     4. Lua     (493)
     5. C       (433)
     6. Rust    (403)
     7. C++     (392)
     8. BQN     (302)
     9. Go      (258)
    10. Java    (238)

<br>

### Blogs with Creative Title
***

#### 1. [The 13th Roman](https://raku-musings.com/13th-roman.html) by Arne Sommer.
#### 2. [Friday XIII](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-227/challenge-227/matthias-muth#readme) by Matthias Muth.
#### 3. [Bad luck and mathematica](http://ccgi.campbellsmiths.force9.co.uk/challenge/227) by Peter Campbell Smith.
#### 4. [The 13th Roman](https://blog.firedrake.org/archive/2023/07/The_Weekly_Challenge_227__The_13th_Roman.html) by Roger Bell_West.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 33,503 (`+104`)
#### 2. Pull Requests: 8,461 (`+38`)
#### 3. Contributors: 227
#### 4. Fork: 288
#### 5. Stars: 160

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2023. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2023. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 227](/blog/recap-challenge-227)** by `Mohammad S Anwar`.

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

Please check out the guest contributions for the [**Week #227**](/blog/guest-contribution/#227).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Unique Sum {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given an array of integers.

Write a script to find out the sum of unique elements in the given array.

#### Example 1

    Input: @int = (2, 1, 3, 2)
    Output: 4

    In the given array we have 2 unique elements (1, 3).

#### Example 2

    Input: @int = (1, 1, 1, 1)
    Output: 0

    In the given array no unique element found.

#### Example 3

    Input: @int = (2, 1, 3, 4)
    Output: 10

    In the given array every element is unique.

<br>

## Task 2: Empty Array {#TASK2}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given an array of integers in which all elements are unique.

Write a script to perform the following operations until the array is empty and return the total count of operations.

<br>

    If the first element is the smallest then remove it otherwise move it to the end.

<br>

#### Example 1

    Input: @int = (3, 4, 2)
    Ouput: 5

    Operation 1: move 3 to the end: (4, 2, 3)
    Operation 2: move 4 to the end: (2, 3, 4)
    Operation 3: remove element 2: (3, 4)
    Operation 4: remove element 3: (4)
    Operation 5: remove element 4: ()

#### Example 2

    Input: @int = (1, 2, 3)
    Ouput: 3

    Operation 1: remove element 1: (2, 3)
    Operation 2: remove element 2: (3)
    Operation 3: remove element 3: ()

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 6th August 2023**.

***
