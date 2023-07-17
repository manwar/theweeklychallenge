---
title: "The Weekly Challenge - 226"
date: 2023-07-17T00:00:00+00:00
description: "The Weekly Challenge - 226"
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
### 09. [TASK #1: Shuffle String](#TASK1)
### 10. [TASK #2: Zero Array](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #226` of `The Weekly Challenge`.

Let us all welcome a new member, `Dan Friedman`, an expert `Perl` hacker to the `Team PWC`.

We got the detailed conversation with the latest champion, `Avery Adams`. You really don't want to miss it. Please do [**check it out**](/blog/meet-the-champion-2023-06) yourself.

As you all know, we had [**The Perl and Raku Conference 2023**](https://tprc.to/tprc-2023-tor/) last week. I had the pleasure to attend the conference. I was lucky to meet so many members of `Team PWC`. I would like to specially mention, `Bruce Gray`, `Joelle Maslak`, `Saif Ahmed`, `Dave Cross`, `Steven Lembark`, `Kang-min Liu` and `Walt Mankowski`.

It was pleasant meeting, `Sarah Gray`, wife of `Bruce Gray`. She was helping the team running the conference smoothly.

<br>

### Presentation @ TPRC 2023
***

<br>

<iframe width="560" height="315" src="https://www.youtube.com/embed/Gn0fEPy7YLc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br><br>

I would like to thank, `Early Club Members`, for helping me with review of weekly challenge tasks every week. You help me avoid embarrassment. If anyone willing to join the club, please feel free to send me request and I will add you to the club.

I am aware that sometimes task is not clearly explained and make it harder for you all to solve it. I appreciate your understanding and taking the effort to solve it still. You all deserve, `a big round of applause`.

Today, we are giving away `Coupon #48` to `PokGoPun` for the book, [**Learning Perl Exercises**](https://leanpub.com/learning_perl_exercises) by `brian d foy`. I will share the details with you in a separate email.

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
| 47. | &nbsp;`Bruce Gray`           | 48. |                   |
| 49. |                      | 50. |                   |
| | | | |

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `221` &nbsp;&nbsp;|&nbsp;&nbsp; 39 &nbsp;&nbsp;|&nbsp;&nbsp; 27 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `222` &nbsp;&nbsp;|&nbsp;&nbsp; 56 &nbsp;&nbsp;|&nbsp;&nbsp; 30 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `223` &nbsp;&nbsp;|&nbsp;&nbsp; 44 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `224` &nbsp;&nbsp;|&nbsp;&nbsp; 38 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `225` &nbsp;&nbsp;|&nbsp;&nbsp; 56 &nbsp;&nbsp;|&nbsp;&nbsp; 31 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `221` &nbsp;&nbsp;|&nbsp;&nbsp; 07 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 09 &nbsp;&nbsp;|
|&nbsp;&nbsp; `222` &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|&nbsp;&nbsp; 41 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `223` &nbsp;&nbsp;|&nbsp;&nbsp; 09 &nbsp;&nbsp;|&nbsp;&nbsp; 37 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `224` &nbsp;&nbsp;|&nbsp;&nbsp; 08 &nbsp;&nbsp;|&nbsp;&nbsp; 32 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `225` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 63 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|

<br><br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top 10`? If not then why not contribute regularly and make it to the top.

     1. Python  (1666)
     2. Haskell (566)
     3. Ruby    (543)
     4. Lua     (487)
     5. C       (431)
     6. Rust    (395)
     7. C++     (389)
     8. BQN     (300)
     9. Go      (258)
    10. Java    (238)

<br>

### Blogs with Creative Title
***

#### 1. [Sentenced To Compute Differences](http://rabbitfarm.com/cgi-bin/blosxom/perl/2023/07/13) by Adam Russell.
#### 2. [Arithmetically Good](https://raku-musings.com/arithmetically-good.html) by Arne Sommer.
#### 3. [Words to the Max and Diff Sum](https://dev.to/oldtechaa/perl-weekly-challenge-225-words-to-the-max-and-diff-sum-357p) by Avery Adams.
#### 4. [I m back](https://fluca1978.github.io/2023/07/12/PerlWeeklyChallenge225.html) by Luca Ferrari.
#### 5. [Reduce to the max](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-225/matthias-muth#readme) by Matthias Muth.
#### 6. [Counting words and subtracting numbers](http://ccgi.campbellsmiths.force9.co.uk/challenge/225) by Peter Campbell Smith.
#### 7. [Diffs on the Right, Words on the Left](https://blog.firedrake.org/archive/2023/07/The_Weekly_Challenge_225__Diffs_on_the_Right__Words_on_the_Left.html) by Roger Bell_West.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 33,283 (`+122`)
#### 2. Pull Requests: 8,379 (`+46`)
#### 3. Contributors: 226
#### 4. Fork: 286 (`+1`)
#### 5. Stars: 159

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2023. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2023. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 225](/blog/recap-challenge-225)** by `Mohammad S Anwar`.

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

[**Dan Friedman**](https://metacpan.org/author/LAMECH), an experienced `Perl` hacker joined the `Team PWC`.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}
***

Please check out the guest contributions for the [**Week #225**](/blog/guest-contribution/#225).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Shuffle String {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given a string and an array of indices of same length as string.

Write a script to return the string after re-arranging the indices in the correct order.

#### Example 1

    Input: $string = 'lacelengh', @indices = (3,2,0,5,4,8,6,7,1)
    Output: 'challenge'

#### Example 2

    Input: $string = 'rulepark', @indices = (4,7,3,1,0,5,2,6)
    Output: 'perlraku'

<br>

## Task 2: Zero Array {#TASK2}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given an array of non-negative integers, @ints.

Write a script to return the minimum number of operations to make every element equal zero.

> In each operation, you are required to pick a positive number less than or equal to the smallest element in the array, then subtract that from each positive element in the array.

<br>

#### Example 1:

    Input: @ints = (1, 5, 0, 3, 5)
    Output: 3

    operation 1: pick 1 => (0, 4, 0, 2, 4)
    operation 2: pick 2 => (0, 2, 0, 0, 2)
    operation 3: pick 2 => (0, 0, 0, 0, 0)

#### Example 2:

    Input: @ints = (0)
    Output: 0

#### Example 3:

    Input: @ints = (2, 1, 4, 0, 3)
    Output: 4

    operation 1: pick 1 => (1, 0, 3, 0, 2)
    operation 2: pick 1 => (0, 0, 2, 0, 1)
    operation 3: pick 1 => (0, 0, 1, 0, 0)
    operation 4: pick 1 => (0, 0, 0, 0, 0)

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 23rd July 2023**.

***
