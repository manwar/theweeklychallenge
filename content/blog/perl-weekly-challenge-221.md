---
title: "The Weekly Challenge - 221"
date: 2023-06-12T00:00:00+00:00
description: "The Weekly Challenge - 221"
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
### 09. [TASK #1: Good Strings](#TASK1)
### 10. [TASK #2: Arithmetic Subsequence](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #221` of `The Weekly Challenge`.

First thing first, let us all welcome new member, `John Horner` from `Sydney, Australia` to the `Team PWC`.

I know I didn't declare the champion last week, sorry.

I will definitely announce the name next week.

Also I have yet to send the link to the `Learning Perl Exercises` book to the last few winners, I will sort that out too next week.

As I mentioned last week that I was in `India` to see my `Dad`. Unfortunately there is no improvement over the time I stayed wi th him (`3rd June - 10th June`).

I had return ticket booked for `10th June`, so I left `India` leaving behind my `Dad` on the ventilator. We have been told by the doctors that there is not much hope left. It was the most difficult moment for me as you can imagine. I am still trying to accept the reality but I find it impossible to digest the truth. Luckily I have strong family and friends support here in the `UK`.

I would like to thanks everyone who sent me kind messages with regard to my Dad's health.

Honestly I wanted to skip this week challenge but then somehome I got the energy in the middle of night and here you go.

I was supposed to edit the [**Perl Weekly Newsletter**](https://perlweekly.com) this week but I decided to skip it. Thanks to `Gabor` for helping me out.

This coming week is going to be very tough for me as I expect the bad news any moment. The worst part is I would miss the last rites. That is killing me to be honest.

I am so grateful to my current company [**Oleeo**](https://www.oleeo.com) for all the support.

Let's get back to the rouine stats.

Today, we are giving away `Coupon #44` to `Peter Meszaros` for the book, [**Learning Perl Exercises**](https://leanpub.com/learning_perl_exercises) by `brian d foy`. I will share the details with you in a separate email.

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
| 43. | &nbsp;`Robert Ransbottom`    | 44. |                   |
| 45. |                      | 46. |                   |
| 47. |                      | 48. |                   |
| 49. |                      | 50. |                   |
| | | | |

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `216` &nbsp;&nbsp;|&nbsp;&nbsp; 39 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|
|&nbsp;&nbsp; `217` &nbsp;&nbsp;|&nbsp;&nbsp; 60 &nbsp;&nbsp;|&nbsp;&nbsp; 32 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `218` &nbsp;&nbsp;|&nbsp;&nbsp; 43 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `219` &nbsp;&nbsp;|&nbsp;&nbsp; 35 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|
|&nbsp;&nbsp; `220` &nbsp;&nbsp;|&nbsp;&nbsp; 49 &nbsp;&nbsp;|&nbsp;&nbsp; 29 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `216` &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|&nbsp;&nbsp; 33 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `217` &nbsp;&nbsp;|&nbsp;&nbsp; 09 &nbsp;&nbsp;|&nbsp;&nbsp; 34 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `218` &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|&nbsp;&nbsp; 36 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `219` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 37 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `220` &nbsp;&nbsp;|&nbsp;&nbsp; 06 &nbsp;&nbsp;|&nbsp;&nbsp; 32 &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top 10`? If not then why not contribute regularly and make it to the top.

     1. Python  (1585)
     2. Haskell (555)
     3. Ruby    (527)
     4. Lua     (477)
     5. C       (424)
     6. C++     (379)
     7. Rust    (370)
     8. BQN     (299)
     9. Go      (258)
    10. Java    (225)

<br>

### Blogs with Creative Title
***

#### 1. [Squarefully Common](https://raku-musings.com/squarefully-common.html) by Arne Sommer.
#### 2. [I've Seen These Characters 'Round These Parts](https://dev.to/oldtechaa/perl-weekly-challenge-220-ive-seen-these-characters-round-these-parts-1ml) by Avery Adams.
#### 3. [Squared Shoulders](https://blogs.perl.org/users/bruce_gray/2023/06/twc-220-squared-shoulders.html) by Bruce Grays.
#### 4. [Perl by Nature - Squareful by Recursion](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-220/matthias-muth#readme) by Matthias Muth.
#### 5. [Square Commoners](https://blog.firedrake.org/archive/2023/06/The_Weekly_Challenge_220__Square_Commoners.html) by Roger Bell_West.
#### 6. [Common squares](https://dev.to/simongreennet/common-squares-31do) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 32,806 (`+84`)
#### 2. Pull Requests: 8,206 (`+32`)
#### 3. Contributors: 224
#### 4. Fork: 281 (`+1`)
#### 5. Stars: 156 (`+3`)

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2023. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2023. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 220](/blog/recap-challenge-220)** by `Mohammad S Anwar`.

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

`John Horner` an experienced `Perl` hacker for over 20 years from `Sydney, Australia` joined the `Team PWC`.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}
***

Please check out the guest contributions for the [**Week #220**](/blog/guest-contribution/#220).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Good Strings {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given a list of `@words` and a string $chars.

<br>

> A string is good if it can be formed by characters from $chars, each character can be used only once.

<br>

Write a script to return the sum of lengths of all good strings in words.

<br>

#### Example 1

    Input: @words = ("cat", "bt", "hat", "tree")
           $chars = "atach"
    Output: 6

    The good strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.

#### Example 2

    Input: @words = ("hello", "world", "challenge")
           $chars = "welldonehopper"
    Output: 10

    The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.

<br>

## Task 2: Arithmetic Subsequence {#TASK2}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given an array of integers, @ints.

Write a script to find the length of the longest `Arithmetic Subsequence` in the given array.

<br>

> A subsequence is an array that can be derived from another array by deleting some or none elements without changing the order of the remaining elements.

> A subsquence is arithmetic if ints[i + 1] - ints[i] are all the same value (for 0 <= i < ints.length - 1).

<br>

#### Example 1:

    Input: @ints = (9, 4, 7, 2, 10)
    Output: 3

    The longest Arithmetic Subsequence (4, 7, 10) can be derived by deleting 9 and 2.

#### Example 2:

    Input: @ints = (3, 6, 9, 12)
    Output: 4

    No need to remove any elements, it is already an Arithmetic Subsequence.

#### Example 3:

    Input: @ints = (20, 1, 15, 3, 10, 5, 8)
    Output: 4

    The longest Arithmetic Subsequence (20, 15, 10, 5) can be derived by deleting 1, 3 and 8.

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 18th June 2023**.

***
