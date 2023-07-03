---
title: "The Weekly Challenge - 224"
date: 2023-07-03T00:00:00+00:00
description: "The Weekly Challenge - 224"
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
### 09. [TASK #1: Special Notes](#TASK1)
### 10. [TASK #2: Additive Number](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #224` of `The Weekly Challenge`.

I am missing one of the most regular member, `Duncan C. White`. I hope he is fine and would come back to the weekly fun soon.

As you all know, [**The Perl and Raku Conference 2023**](https://tprc.to/tprc-2023-tor), is happening in `Toronto` next week between `11-13 July 2023`. I am all geared up to attend the conference and even prepared to give talk on `The Weekly Challenge`.

How many of you are going to be there? I would love to meet as many as I can.

Time to declare next champion and he is `Matthias Muth` from `Germany`. As of today, he has contributed `38 Perl` solutions and shared `16 blog posts`.

Today, we are giving away `Coupon #47` to `Bruce Gray` for the book, [**Learning Perl Exercises**](https://leanpub.com/learning_perl_exercises) by `brian d foy`. I will share the details with you in a separate email.

I just noticed `Peter Meszaros` is declared twice, `#37` and `#44`. It would mean, we need new member to get this sorted. Apology for the mess.

I am still waiting for `BarrOff` to share email address with us, so that ebook can be shared with him.

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
| 45. | &nbsp;`Jan Krnavek`          | 46. | &nbsp;`Steven Wilson`     |
| 47. |                      | 48. |                   |
| 49. |                      | 50. |                   |
| | | | |

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `219` &nbsp;&nbsp;|&nbsp;&nbsp; 35 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|
|&nbsp;&nbsp; `220` &nbsp;&nbsp;|&nbsp;&nbsp; 49 &nbsp;&nbsp;|&nbsp;&nbsp; 29 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
|&nbsp;&nbsp; `221` &nbsp;&nbsp;|&nbsp;&nbsp; 39 &nbsp;&nbsp;|&nbsp;&nbsp; 27 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `222` &nbsp;&nbsp;|&nbsp;&nbsp; 56 &nbsp;&nbsp;|&nbsp;&nbsp; 30 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `223` &nbsp;&nbsp;|&nbsp;&nbsp; 42 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `219` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 37 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `220` &nbsp;&nbsp;|&nbsp;&nbsp; 06 &nbsp;&nbsp;|&nbsp;&nbsp; 32 &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|
|&nbsp;&nbsp; `221` &nbsp;&nbsp;|&nbsp;&nbsp; 07 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 09 &nbsp;&nbsp;|
|&nbsp;&nbsp; `222` &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|&nbsp;&nbsp; 41 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `223` &nbsp;&nbsp;|&nbsp;&nbsp; 09 &nbsp;&nbsp;|&nbsp;&nbsp; 37 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top 10`? If not then why not contribute regularly and make it to the top.

`Rust` jumped one position up and reached the rank `#6` last week. Congratulations to all `Rust` contributors.

     1. Python  (1624)
     2. Haskell (561)
     3. Ruby    (535)
     4. Lua     (481)
     5. C       (429)
     6. Rust    (387)
     7. C++     (384)
     8. BQN     (299)
     9. Go      (258)
    10. Java    (237)

<br>

### Blogs with Creative Title
***

#### 1. [Boxed Primes](https://raku-musings.com/boxed-primes.html) by Arne Sommer.
#### 2. [Count Primes? I've Never Met the Man](https://dev.to/oldtechaa/perl-weekly-challenge-223-count-primes-ive-never-met-the-man-1o9i) by Avery Adams.
#### 3. [Sieves and Coins](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-223/matthias-muth#readme) by Matthias Muth.
#### 4. [Counting primes and maximising cash](http://ccgi.campbellsmiths.force9.co.uk/challenge/223) by Peter Campbell Smith.
#### 5. [Counting Boxes](https://blog.firedrake.org/archive/2023/07/The_Weekly_Challenge_223__Counting_Boxes.html) by Roger Bell_West.
#### 6. [Counting the coins](https://dev.to/simongreennet/counting-the-coins-3i2f) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 33,083 (`+75`)
#### 2. Pull Requests: 8,305 (`+31`)
#### 3. Contributors: 226 (`+1`)
#### 4. Fork: 285
#### 5. Stars: 159

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2023. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2023. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 223](/blog/recap-challenge-223)** by `Mohammad S Anwar`.

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

Please check out the guest contributions for the [**Week #223**](/blog/guest-contribution/#223).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Special Notes {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given two strings, `$source` and `$target`.

Write a script to find out if using the characters (only once) from source, a target string can be created.

#### Example 1

    Input: $source = "abc"
           $target = "xyz"
    Output: false

#### Example 2

    Input: $source = "scriptinglanguage"
           $target = "perl"
    Output: true

#### Example 3

    Input: $source = "aabbcc"
           $target = "abc"
    Output: true

<br>

## Task 2: Additive Number {#TASK2}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given a string containing digits `0-9` only.

Write a script to find out if the given string is additive number. An additive number is a string whose digits can form an additive sequence.

> A valid additive sequence should contain at least 3 numbers. Except the first 2 numbers, each subsequent number in the sequence must be the sum of the preceding two.

<br>

#### Example 1:

    Input: $string = "112358"
    Output: true

    The additive sequence can be created using the given string digits: 1,1,2,3,5,8
    1 + 1 => 2
    1 + 2 => 3
    2 + 3 => 5
    3 + 5 => 8

#### Example 2:

    Input: $string = "12345"
    Output: false

    No additive sequence can be created using the given string digits.

#### Example 3:

    Input: $string = "199100199"
    Output: true

    The additive sequence can be created using the given string digits: 1,99,100,199
     1 +  99 => 100
    99 + 100 => 199

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 9th July 2023**.

***
