---
title: "The Weekly Challenge - 213"
date: 2023-04-17T00:00:00+00:00
description: "The Weekly Challenge - 213"
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
### 09. [TASK #1: Fun Sort](#TASK1)
### 10. [TASK #2: Shortest Route](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #213` of `The Weekly Challenge`.

Today, we are giving away `Coupon #36` to `Leo Manfredi` for the book, [**Learning Perl Exercises**](https://leanpub.com/learning_perl_exercises) by `brian d foy`. I will share the details with you in a separate email.

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
| 35. | &nbsp;`Matthias Muth`        | 36. |                   |
| 37. |                      | 38. |                   |
| 39. |                      | 40. |                   |
| 41. |                      | 42. |                   |
| 43. |                      | 44. |                   |
| 45. |                      | 46. |                   |
| 47. |                      | 48. |                   |
| 49. |                      | 50. |                   |
| | | | |

<br>

Well done `Team PWC` and thank you for your support and encouragements. We are just one behind the magic figure. I am pretty sure we would get past soon with some late submissions.

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
|&nbsp;&nbsp; `210` &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `211` &nbsp;&nbsp;|&nbsp;&nbsp; 55 &nbsp;&nbsp;|&nbsp;&nbsp; 29 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|
|&nbsp;&nbsp; `212` &nbsp;&nbsp;|&nbsp;&nbsp; 52 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|

<br>

I would like to thank every guest contributors for making it special every week. Last week we received `30 guest contributions` in `11 languages`

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top 10`? If not then why not contribute regularly and make it to the top.

     1. Python  (1463)
     2. Haskell (545)
     3. Ruby    (498)
     4. Lua     (459)
     5. C       (405)
     6. C++     (366)
     7. Rust    (344)
     8. BQN     (269)
     9. Go      (253)
    10. Java    (221)

<br>

### Blogs with Creative Title
***

#### 1. [Letters and Groups](https://raku-musings.com/letters-groups.html) by Arne Sommer.
#### 2. [Jumping words and Batching arrays](https://fluca1978.github.io/2023/04/11/PerlWeeklyChallenge212.html) by Luca Ferrari.
#### 3. [Lead to Gold and 1 2 3](http://ccgi.campbellsmiths.force9.co.uk/challenge/212) by Peter Campbell Smith.
#### 4. [Rearrange by Jumps](https://blog.firedrake.org/archive/2023/04/The_Weekly_Challenge_212__Rearrange_by_Jumps.html) by Roger Bell_West.
#### 5. [Jumping Groups](https://dev.to/simongreennet/jumping-groups-2ld2) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 31,880 (`+122`)
#### 2. Pull Requests: 7,909 (`+40`)
#### 3. Contributors: 222
#### 4. Fork: 277
#### 5. Stars: 152

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2023. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2023. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 212](/blog/recap-challenge-212)** by `Mohammad S Anwar`.

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

Please check out the guest contributions for the [**Week #212**](/blog/guest-contribution/#212).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Fun Sort {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given a list of positive integers.

Write a script to sort the all even integers first then all odds in ascending order.

#### Example 1

    Input: @list = (1,2,3,4,5,6)
    Output: (2,4,6,1,3,5)

#### Example 2

    Input: @list = (1,2)
    Output: (2,1)

#### Example 3

    Input: @list = (1)
    Output: (1)

<br>

## Task 2: Shortest Route {#TASK2}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given a list of bidirectional routes defining a network of nodes, as well as source and destination node numbers.

Write a script to find the route from source to destination that passes through fewest nodes.

#### Example 1:

    Input: @routes = ([1,2,6], [5,6,7])
           $source = 1
           $destination = 7

    Output: (1,2,6,7)

    Source (1) is part of route [1,2,6] so the journey looks like 1 -> 2 -> 6
    then jump to route [5,6,7] and takes the route 6 -> 7.
    So the final route is (1,2,6,7)

#### Example 2:

    Input: @routes = ([1,2,3], [4,5,6])
           $source = 2
           $destination = 5

    Output: -1

#### Example 3:

    Input: @routes = ([1,2,3], [4,5,6], [3,8,9], [7,8])
           $source = 1
           $destination = 7
    Output: (1,2,3,8,7)

    Source (1) is part of route [1,2,3] so the journey looks like 1 -> 2 -> 3
    then jump to route [3,8,9] and takes the route 3 -> 8
    then jump to route [7,8] and takes the route 8 -> 7
    So the final route is (1,2,3,8,7)

<br>


***

Last date to submit the solution **23:59 (UK Time) Sunday 23rd April 2023**.

***
