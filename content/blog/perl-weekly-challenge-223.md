---
title: "The Weekly Challenge - 223"
date: 2023-06-26T00:00:00+00:00
description: "The Weekly Challenge - 223"
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
### 09. [TASK #1: Count Primes](#TASK1)
### 10. [TASK #2: Box Coins](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #223` of `The Weekly Challenge`.

Last week we had two comebacks, `Colin Crain` and `Dave Jacoby`. You really don't want to miss out the blog posts by them i.e. [Last Number Standing](https://colincrain.com/2023/06/22/last-number-standing/) and [Member-ship has its Privileges](https://jacoby.github.io/2023/06/19/membership-has-its-privileges-weekly-challenge-222.html).

Recently, a very good friend of mine, `Lance Wicks`, also made a comeback recently shared this [**blog post**](https://perl.kiwi/tales/2023/06/18/tdd-for-good-strings/).

Talking about comebacks, `Simon Proctor` also returned back and shared solutions for [**Week 220**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-220/simon-proctor), [**Week 221**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-221/simon-proctor) and [**Week 222**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-222/simon-proctor).

Today, we are giving away `Coupon #46` to `Steven Wilson` for the book, [**Learning Perl Exercises**](https://leanpub.com/learning_perl_exercises) by `brian d foy`. I will share the details with you in a separate email.

I would like to request `BarrOff` to share email address with us, so that ebook can be shared with him.

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
| 43. | &nbsp;`Robert Ransbottom`    | 44. | &nbsp;`Peter Meszaros`    |
| 45. | &nbsp;`Jan Krnavek`          | 46. |                           |
| 47. |                      | 48. |                   |
| 49. |                      | 50. |                   |
| | | | |

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `218` &nbsp;&nbsp;|&nbsp;&nbsp; 43 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `219` &nbsp;&nbsp;|&nbsp;&nbsp; 35 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|
|&nbsp;&nbsp; `220` &nbsp;&nbsp;|&nbsp;&nbsp; 49 &nbsp;&nbsp;|&nbsp;&nbsp; 29 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
|&nbsp;&nbsp; `221` &nbsp;&nbsp;|&nbsp;&nbsp; 39 &nbsp;&nbsp;|&nbsp;&nbsp; 27 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `222` &nbsp;&nbsp;|&nbsp;&nbsp; 56 &nbsp;&nbsp;|&nbsp;&nbsp; 30 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `218` &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|&nbsp;&nbsp; 36 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `219` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 37 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `220` &nbsp;&nbsp;|&nbsp;&nbsp; 06 &nbsp;&nbsp;|&nbsp;&nbsp; 32 &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|
|&nbsp;&nbsp; `221` &nbsp;&nbsp;|&nbsp;&nbsp; 07 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 09 &nbsp;&nbsp;|
|&nbsp;&nbsp; `222` &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|&nbsp;&nbsp; 41 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top 10`? If not then why not contribute regularly and make it to the top.

     1. Python  (1613)
     2. Haskell (559)
     3. Ruby    (532)
     4. Lua     (479)
     5. C       (428)
     6. C++     (382)
     7. Rust    (382)
     8. BQN     (299)
     9. Go      (258)
    10. Java    (235)

<br>

### Blogs with Creative Title
***

#### 1. [Raku Members](https://raku-musings.com/members.html) by Arne Sommer.
#### 2. [Checking Against My List of Members](https://dev.to/oldtechaa/perl-weekly-challenge-222-checking-against-my-list-of-members-171n) by Avery Adams.
#### 3. [Last Number Standing](https://colincrain.com/2023/06/22/last-number-standing/) by Colin Ceain.
#### 4. [Member-ship has its Privileges](https://jacoby.github.io/2023/06/19/membership-has-its-privileges-weekly-challenge-222.html) by Dave Jacoby.
#### 5. [Lazy, Lazy, Lazy Again ...](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-222/matthias-muth#readme) by Matthias Muth.
#### 6. [Members' week](http://ccgi.campbellsmiths.force9.co.uk/challenge/222) by Peter Campbell Smith.
#### 7. [Members Everywhere](https://blog.firedrake.org/archive/2023/06/The_Weekly_Challenge_222__Members_Everywhere.html) by Roger Bell_West.
#### 8. [All the ducks. Two twenty two](https://dev.to/simongreennet/all-the-ducks-two-twenty-two-ed6) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 33,008 (`+105`)
#### 2. Pull Requests: 8,274 (`+35`)
#### 3. Contributors: 225
#### 4. Fork: 285 (`+2`)
#### 5. Stars: 159 (`+1`)

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2023. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2023. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 222](/blog/recap-challenge-222)** by `Mohammad S Anwar`.

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

Please check out the guest contributions for the [**Week #221**](/blog/guest-contribution/#221).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Count Primes {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given a positive integer, `$n`.

Write a script to find the total count of primes less than or equal to the given integer.

<br>

#### Example 1

    Input: $n = 10
    Output: 4

    Since there are 4 primes (2,3,5,7) less than or equal to 10.

#### Example 2

    Input: $n = 1
    Output: 0

#### Example 3

    Input: $n = 20
    Output: 8

    Since there are 4 primes (2,3,5,7,11,13,17,19) less than or equal to 20.

<br>

## Task 2: Box Coins {#TASK2}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given an array representing box coins, @box.

Write a script to collect the maximum coins until you took out all boxes. If we pick `box[i]` then we collect the coins `$box[i-1] * $box[i] * $box[i+1]`. If `$box[i+1]` or `$box[i-1]` is out of bound then treat it as `1 coin`.

<br>

#### Example 1:

    Input: @box = (3, 1, 5, 8)
    Output: 167

    Step 1: pick box [i=1] and collected coins 3 * 1 * 5 => 15.  Boxes available (3, 5, 8).
    Step 2: pick box [i=1] and collected coins 3 * 5 * 8 => 120. Boxes available (3, 8).
    Step 3: pick box [i=0] and collected coins 1 * 3 * 8 => 24.  Boxes available (8).
    Step 4: pick box [i=0] and collected coins 1 * 8 * 1 => 8.   No more box available.

#### Example 2:

    Input: @box = (1, 5)
    Output: 10

    Step 1: pick box [i=0] and collected coins 1 * 1 * 5 => 5. Boxes available (5).
    Step 2: pick box [i=0] and collected coins 1 * 5 * 1 => 5. No more box available.

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 2nd July 2023**.

***
