---
title: "The Weekly Challenge - 209"
date: 2023-03-20T00:00:00+00:00
description: "The Weekly Challenge - 209"
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
### 09. [TASK #1: Special Bit Characters](#TASK1)
### 10. [TASK #2: Merge Account](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #209` of `The Weekly Challenge`.

We have new guest `Simon Dueck` joined `Team PWC` and shared solutions to [**Week #207**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-207/simon-dueck/fsharp) and [**Week #208**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-208/simon-dueck/fsharp) in `F#`.

`E. Alvarez` [**blog post**](https://eax.bearblog.dev/gang-of-misfits-and-their-arithmetic-progressions) sharing `Javascript` magic once again. Please do checkout.

Today, we are giving away `Coupon #32` to `Tyler Bird` for the book, [**Learning Perl Exercises**](https://leanpub.com/learning_perl_exercises) by `brian d foy`. I will share the details with you in a separate email.

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
| 31. | &nbsp;`Paulo Custodio`       | 32. |                           |
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

Another bumper week with `100+` contributions. Thank you `Team PWC`.

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
|&nbsp;&nbsp; `208` &nbsp;&nbsp;|&nbsp;&nbsp; 60 &nbsp;&nbsp;|&nbsp;&nbsp; 32 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|

<br>

I would like to thank every guest contributors for making it special every week. Last week we received `59 guest contributions` in `20 languages`

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top 10`? If not then why not contribute regularly and make it to the top.

     1. Python  (1395)
     2. Haskell (541)
     3. Ruby    (482)
     4. Lua     (452)
     5. C       (356)
     6. C++     (352)
     7. Rust    (334)
     8. BQN     (269)
     9. Go      (251)
    10. Java    (221)

<br>

### Blogs with Creative Title
***

#### 1. [MIS-ing](https://raku-musings.com/mis-ing.html) by Arne Sommer.
#### 2. [Smells like teen SQL](https://dev.to/boblied/pwc-208-smells-like-teen-sql-2bh6) by Bob Lied.
#### 3. [grep, grep and grep!](https://fluca1978.github.io/2023/03/17/PerlWeeklyChallenge208.html) by Luca Ferrari.
#### 4. [Juggling with indexes](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-208/challenge-208/matthias-muth#readme) by Matthias Muth.
#### 5. [Matching strings and missing numbers](http://ccgi.campbellsmiths.force9.co.uk/challenge/208) by Peter Campbell Smith.
#### 6. [Missing Index? Just Duplicate!](https://blog.firedrake.org/archive/2023/03/The_Weekly_Challenge_208__Missing_Index__Just_Duplicate_.html) by Roger Bell_West.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 31,152 (`+252`)
#### 2. Pull Requests: 7,716 (`+85`)
#### 3. Contributors: 219
#### 4. Fork: 275
#### 5. Stars: 151

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2023. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2023. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 208](/blog/recap-challenge-208)** by `Mohammad S Anwar`.

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

[**Simon Dueck**](https://github.com/simon-dueck) joined the `Team PWC` as guest.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}
***

Please check out the guest contributions for the [**Week #208**](/blog/guest-contribution/#208).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Special Bit Characters {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given an array of binary bits that ends with 0.

Valid sequences in the bit string are:

    [0] -decodes-to-> "a"
    [1, 0] -> "b"
    [1, 1] -> "c"

Write a script to print 1 if the last character is an "a" otherwise print 0.

#### Example 1

    Input: @bits = (1, 0, 0)
    Output: 1

    The given array bits can be decoded as 2-bits character (10) followed by 1-bit character (0).

#### Example 2

    Input: @bits = (1, 1, 1, 0)
    Output: 0

    Possible decode can be 2-bits character (11) followed by 2-bits character (10) i.e. the last character is not 1-bit character.

<br>

## Task 2: Merge Account {#TASK2}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given an array of accounts i.e. name with list of email addresses.

Write a script to merge the accounts where possible. The accounts can only be merged if they have at least one email address in common.

Example 1:

    Input: @accounts = [ ["A", "a1@a.com", "a2@a.com"],
                         ["B", "b1@b.com"],
                         ["A", "a3@a.com", "a1@a.com"] ]
                       ]

    Output: [ ["A", "a1@a.com", "a2@a.com", "a3@a.com"],
              ["B", "b1@b.com"] ]

Example 2:

    Input: @accounts = [ ["A", "a1@a.com", "a2@a.com"],
                         ["B", "b1@b.com"],
                         ["A", "a3@a.com"],
                         ["B"m "b2@b.com", "b1@b.com"] ]

    Output: [ ["A", "a1@a.com", "a2@a.com"],
              ["A", "a3@a.com"],
              ["B", "b1@b.com", "b2@b.com"] ]

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 26th March 2023**.

***
