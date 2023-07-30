---
title: "The Weekly Challenge - 227"
date: 2023-07-24T00:00:00+00:00
description: "The Weekly Challenge - 227"
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
### 09. [TASK #1: Friday 13th](#TASK1)
### 10. [TASK #2: Roman Maths](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #227` of `The Weekly Challenge`.

Let us all welcome two new members, `Packy Anderson` and `Adriaan Dens` to the `Team PWC`.

Thank you `Peter Campbell Smith` for the proposed tasks of `Week #227`.

At `The Perl and Raku Conference 2023` in `Toronto`, I handed over the `T-shirt` to `Saif Ahmed` and `Will Braswell`. Those who are new, we decided to celebrate the `1000 days` of weekly challenge by giving away specially designed `T-shirt`. For some unavoidable reasons, I couldn't deliver the T-shirt to the eligible members. I am taking my family to `India` on `3 weeks break`, flying on `4th Aug`. I will get this sorted when I am back, promise.

The details of the [**celebration and eligible members**](/blog/1000-days)  are formally documented for refence.

Today, we are giving away `Coupon #49` to `Luca Ferrari` for the book, [**Learning Perl Exercises**](https://leanpub.com/learning_perl_exercises) by `brian d foy`. I will share the details with you in a separate email.

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
| 49. |                      | 50. |                   |
| | | | |

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `222` &nbsp;&nbsp;|&nbsp;&nbsp; 56 &nbsp;&nbsp;|&nbsp;&nbsp; 30 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `223` &nbsp;&nbsp;|&nbsp;&nbsp; 44 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `224` &nbsp;&nbsp;|&nbsp;&nbsp; 38 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `225` &nbsp;&nbsp;|&nbsp;&nbsp; 56 &nbsp;&nbsp;|&nbsp;&nbsp; 31 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|
|&nbsp;&nbsp; `226` &nbsp;&nbsp;|&nbsp;&nbsp; 61 &nbsp;&nbsp;|&nbsp;&nbsp; 32 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `222` &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|&nbsp;&nbsp; 41 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `223` &nbsp;&nbsp;|&nbsp;&nbsp; 09 &nbsp;&nbsp;|&nbsp;&nbsp; 37 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `224` &nbsp;&nbsp;|&nbsp;&nbsp; 08 &nbsp;&nbsp;|&nbsp;&nbsp; 32 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `225` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 63 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|
|&nbsp;&nbsp; `226` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 52 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top 10`? If not then why not contribute regularly and make it to the top.

     1. Python  (1678)
     2. Haskell (568)
     3. Ruby    (549)
     4. Lua     (491)
     5. C       (433)
     6. Rust    (399)
     7. C++     (391)
     8. BQN     (302)
     9. Go      (258)
    10. Java    (238)

<br>

### Blogs with Creative Title
***

#### 1. [Shuffled Operations](http://rabbitfarm.com/cgi-bin/blosxom/perl/2023/07/23) by Adam Russell.
#### 2. [Zero Shuffle](https://raku-musings.com/zero-shuffle.html) by Arne Sommer.
#### 3. [Shuffle Off To Buffalo](https://jacoby.github.io/2023/07/18/shuffle-off-to-buffalo-weekly-challenge-226.html) by Dave Jacoby.
#### 4. [Array indexes everywhere!](https://fluca1978.github.io/2023/07/17/PerlWeeklyChallenge226.html) by Luca Ferrari.
#### 5. [Gnirsts and nothing left](http://ccgi.campbellsmiths.force9.co.uk/challenge/226) by Peter Campbell Smith.
#### 6. [Shuffling Zeroes](https://blog.firedrake.org/archive/2023/07/The_Weekly_Challenge_226__Shuffling_Zeroes.html) by Roger Bell_West.
#### 7. [Moving and Removing](https://dev.to/simongreennet/moving-and-removing-2c5j) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 33,399 (`+116`)
#### 2. Pull Requests: 8,423 (`+44`)
#### 3. Contributors: 227 (`+1`)
#### 4. Fork: 289 (`+3`)
#### 5. Stars: 160 (`+1`)

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2023. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2023. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 226](/blog/recap-challenge-226)** by `Mohammad S Anwar`.

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

[**Packy Anderson**](https://github.com/packy), an experienced `Perl/Raku` hacker from `Haledon, NJ, USA` joined the `Team PWC`.

[**Adriaan Dens**](https://github.com/adriaandens), an experienced `Perl` hacker joined the `Team PWC`.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}
***

Please check out the guest contributions for the [**Week #226**](/blog/guest-contribution/#226).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Friday 13th {#TASK1}
##### **Submitted by:** [Peter Campbell Smith](http://ccgi.campbellsmiths.force9.co.uk/challenge)
***

You are given a year number in the range 1753 to 9999.

Write a script to find out how many dates in the year are Friday 13th, assume that the current Gregorian calendar applies.

#### Example

    Input: $year = 2023
    Output: 2

    Since there are only 2 Friday 13th in the given year 2023 i.e. 13th Jan and 13th Oct.

<br>

## Task 2: Roman Maths {#TASK2}
##### **Submitted by:** [Peter Campbell Smith](http://ccgi.campbellsmiths.force9.co.uk/challenge)
***

Write a script to handle a 2-term arithmetic operation expressed in Roman numeral.

#### Example

    IV + V     => IX
    M - I      => CMXCIX
    X / II     => V
    XI * VI    => LXVI
    VII ** III => CCCXLIII
    V - V      => nulla (they knew about zero but didn't have a symbol)
    V / II     => non potest (they didn't do fractions)
    MMM + M    => non potest (they only went up to 3999)
    V - X      => non potest (they didn't do negative numbers)

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 30th July 2023**.

***
