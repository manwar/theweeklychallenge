---
title: "The Weekly Challenge - 225"
date: 2023-07-10T00:00:00+00:00
description: "The Weekly Challenge - 225"
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
### 09. [TASK #1: Max Words](#TASK1)
### 10. [TASK #2: Left Right Sum Diff](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #225` of `The Weekly Challenge`.

I would like to apologize for declaring `Matthias Muth` twice **champion**. It shows my mental state. Let me get this correct first.

So the champion of month, **June 2023**, is `Avery Adams`. He joined the `Team PWC` in the `Week #205`. As of today, he has shared `28 Perl` solutions and `29 blog posts`.

Talking about correction, I need to find new winner for the ebook `#44` as I declared `Peter Meszaros` twice by mistake.

`Andrew Shitov`, our in-house `Raku Reviewer`, surprised us all with the [**blog post**](https://andrewshitov.com/2023/07/06/built-in-classes-in-perl-5-38) showing the power of new `class feature` of `Perl v5.38`.

Today, we are giving away `Coupon #44` to `Andreas Voegele` for the book, [**Learning Perl Exercises**](https://leanpub.com/learning_perl_exercises) by `brian d foy`. I will share the details with you in a separate email.

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
|&nbsp;&nbsp; `220` &nbsp;&nbsp;|&nbsp;&nbsp; 49 &nbsp;&nbsp;|&nbsp;&nbsp; 29 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
|&nbsp;&nbsp; `221` &nbsp;&nbsp;|&nbsp;&nbsp; 39 &nbsp;&nbsp;|&nbsp;&nbsp; 27 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `222` &nbsp;&nbsp;|&nbsp;&nbsp; 56 &nbsp;&nbsp;|&nbsp;&nbsp; 30 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `223` &nbsp;&nbsp;|&nbsp;&nbsp; 44 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `224` &nbsp;&nbsp;|&nbsp;&nbsp; 36 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `220` &nbsp;&nbsp;|&nbsp;&nbsp; 06 &nbsp;&nbsp;|&nbsp;&nbsp; 32 &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|
|&nbsp;&nbsp; `221` &nbsp;&nbsp;|&nbsp;&nbsp; 07 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 09 &nbsp;&nbsp;|
|&nbsp;&nbsp; `222` &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|&nbsp;&nbsp; 41 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `223` &nbsp;&nbsp;|&nbsp;&nbsp; 09 &nbsp;&nbsp;|&nbsp;&nbsp; 37 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `224` &nbsp;&nbsp;|&nbsp;&nbsp; 08 &nbsp;&nbsp;|&nbsp;&nbsp; 32 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top 10`? If not then why not contribute regularly and make it to the top.

     1. Python  (1641)
     2. Haskell (563)
     3. Ruby    (538)
     4. Lua     (483)
     5. C       (429)
     6. Rust    (391)
     7. C++     (385)
     8. BQN     (299)
     9. Go      (258)
    10. Java    (238)

<br>

### Blogs with Creative Title
***

#### 1. [Numbered Notes](https://raku-musings.com/numbered-notes.html) by Arne Sommer.
#### 2. [Passing Notes](https://dev.to/oldtechaa/perl-weekly-challenge-224-passing-notes-3kp5) by Avery Adams.
#### 3. [Addictive additive](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-224/matthias-muth#readme) by Matthias Muth.
#### 4. [Strings and sequences](http://ccgi.campbellsmiths.force9.co.uk/challenge/224) by Peter Campbell Smith.
#### 5. [Specially Additive Number Notes](https://blog.firedrake.org/archive/2023/07/The_Weekly_Challenge_224__Specially_Additive_Number_Notes.html) by Roger Bell_West.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 33,161 (`+78`)
#### 2. Pull Requests: 8,333 (`+28`)
#### 3. Contributors: 226
#### 4. Fork: 285
#### 5. Stars: 159

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2023. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2023. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 224](/blog/recap-challenge-224)** by `Mohammad S Anwar`.

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

Please check out the guest contributions for the [**Week #224**](/blog/guest-contribution/#224).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Max Words {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given a list of sentences, `@list`.

<br>

> A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

<br>

Write a script to find out the maximum number of words that appear in a single sentence.

#### Example 1

    Input: @list = ("Perl and Raku belong to the same family.",
                    "I love Perl.",
                    "The Perl and Raku Conference.")
    Output: 8

#### Example 2

    Input: @list = ("The Weekly Challenge.",
                    "Python is the most popular guest language.",
                    "Team PWC has over 300 members.")
    Output: 7

<br>

## Task 2: Left Right Sum Diff {#TASK2}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given an array of integers, `@ints`.

Write a script to return left right sum diff array as shown below:

<br>

    @ints = (a, b, c, d, e)

    @left  = (0, a, (a+b), (a+b+c))
    @right = ((c+d+e), (d+e), e, 0)
    @left_right_sum_diff = ( | 0 - (c+d+e) |,
                             | a - (d+e)   |,
                             | (a+b) - e   |,
                             | (a+b+c) - 0 | )

<br>

#### Example 1:

    Input: @ints = (10, 4, 8, 3)
    Output: (15, 1, 11, 22)

    @left  = (0, 10, 14, 22)
    @right = (15, 11, 3, 0)

    @left_right_sum_diff = ( |0-15|, |10-11|, |14-3|, |22-0|)
                         = (15, 1, 11, 22)

#### Example 2:

    Input: @ints = (1)
    Output: (0)

    @left  = (0)
    @right = (0)

    @left_right_sum_diff = ( |0-0| ) = (0)

#### Example 3:

    Input: @ints = (1, 2, 3, 4, 5)
    Output: (14, 11, 6, 1, 10)

    @left  = (0, 1, 3, 6, 10)
    @right = (14, 12, 9, 5, 0)

    @left_right_sum_diff = ( |0-14|, |1-12|, |3-9|, |6-5|, |10-0|)
                         = (14, 11, 6, 1, 10)

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 16th July 2023**.

***
