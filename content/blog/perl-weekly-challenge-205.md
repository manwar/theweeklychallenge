---
title: "The Weekly Challenge - 205"
date: 2023-02-20T00:00:00+00:00
description: "The Weekly Challenge - 205"
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
### 09. [TASK #1: Third Highest](#TASK1)
### 10. [TASK #2: Maximum XOR](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #205` of `The Weekly Challenge`.

Last week, we had `2 new members` joinging the `Team PWC` and both are `Perl` hackers (`Matthias Muth` and `Tyler Bird`).

`Matthias` even shared [**blog post**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-204/matthias-muth#readme) with solutions in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-204/matthias-muth/perl).

`Tyler Bird` also shared solutions in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-204/tyler-bird/perl).

I would like to request all champions who didn't respond to the interview request, please do share your response with us. This is the only time we get to know about our celebrity champions. Please remind me also if I missed your response by any chance.

`Andrew Shitov` shared [**blog post**](https://andrewshitov.com/2023/02/13/dialogues-with-chatpgp-about-the-raku-programming-languages-solving-the-weekly-challange-204/) about how `ChatGPT` helped solving task in `Raku`.

`Shawn Wagner` introduced us to a new language [**Racket**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-204/shawn-wagner/racket). Thank you. We now have guest contributions in `94 languages`.

Welcome back, `Vamsi Meenavilli` and thanks for your contributions in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-204/vamsi-meenavilli/perl).

Today, we are giving away `Coupon #28` to `Mariano Spadaccini` for the book, [**Learning Perl Exercises**](https://leanpub.com/learning_perl_exercises) by `brian d foy`. I will share the details with you in a separate email.

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
| 27. | &nbsp;`Dave Jacoby`          | 28. |                   |
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

As we all knew, `Week 203` broke the continuity of reaching the magical figure of `100+` contributions. With handful of late submissions, we managed to reduced the gap. As of today, we have received `91` contributions for the `Week 203`. But the `Week 204` brought us back on track with `100+` contributions once again. Thank you `Team PWC` for your support and contributions..

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
|&nbsp;&nbsp; `202` &nbsp;&nbsp;|&nbsp;&nbsp; 50 &nbsp;&nbsp;|&nbsp;&nbsp; 27 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|
|&nbsp;&nbsp; `203` &nbsp;&nbsp;|&nbsp;&nbsp; 50 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
|&nbsp;&nbsp; `204` &nbsp;&nbsp;|&nbsp;&nbsp; 54 &nbsp;&nbsp;|&nbsp;&nbsp; 31 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|

<br>

I would like to thank every guest contributors for making it special every week. Last week we received `42 guest contributions` in `18 languages`.

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top 10`? If not then why not contribute regularly and make it to the top.

     1. Python  (1318)
     2. Haskell (533)
     3. Ruby    (463)
     4. Lua     (444)
     5. C       (324)
     6. C++     (318)
     7. Rust    (313)
     8. BQN     (268)
     9. Go      (244)
    10. Java    (216)

<br>

### Blogs with Creative Title
***

#### 1. [Monotonically Reshaped](https://raku-musings.com/monotonically-reshaped.html) by Arne Sommer.
#### 2. [Arrays everywhere!](https://fluca1978.github.io/2023/02/13/PerlWeeklyChallenge204.html) by Luca Ferrari.
#### 3. [Climbing or falling and reshaping the matrix](http://ccgi.campbellsmiths.force9.co.uk/challenge/204) by Peter Campbell Smith.
#### 4. [Reshape the Monotony](https://blog.firedrake.org/archive/2023/02/The_Weekly_Challenge_204__Reshape_the_Monotony.html) by Roger Bell_West.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits:  30,772 (`+92`)
#### 2. Pull Requests: 7,590 (`+39`)
#### 3. Contributors: 218
#### 4. Fork: 276 (`+1`)
#### 5. Stars: 151

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2022. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2022. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 204](/blog/recap-challenge-204)** by `Mohammad S Anwar`.

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

[**Matthias Muth**](https://github.com/MatthiasMuth), an experienced `Perl` hacker joined `Team PWC`.

**Tyler Bird**, an experienced `Perl` hacker for over 20 years joined `Team PWC`.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}
***

Please check out the guest contributions for the [**Week #204**](/blog/guest-contribution/#204).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Third Highest {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given an array of integers.

Write a script to find out the `Third Highest` if found otherwise return the maximum.

### Example 1

    Input: @array = (5,3,4)
    Output: 3

    First highest is 5. Second highest is 4. Third highest is 3.

### Example 2

    Input: @array = (5,6)
    Output: 6

    First highest is 6. Second highest is 5. Third highest is missing, so maximum is returned.

### Example 3

    Input: @array = (5,4,4,3)
    Output: 3

    First highest is 5. Second highest is 4. Third highest is 3.

<br>

## Task 2: Maximum XOR {#TASK2}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given an array of integers.

Write a script to find the highest value obtained by XORing any two distinct members of the array.

### Example 1

    Input: @array = (1,2,3,4,5,6,7)
    Output: 7

    The maximum result of 1 xor 6 = 7.

### Example 2

    Input: @array = (2,4,1,3)
    Output: 7

    The maximum result of 4 xor 3 = 7.

### Example 3

    Input: @array = (10,5,7,12,8)
    Output: 15

    The maximum result of 10 xor 5 = 15.

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 26th February 2023**.

***
