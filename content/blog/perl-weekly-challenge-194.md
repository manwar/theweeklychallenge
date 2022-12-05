---
title: "The Weekly Challenge - 194"
date: 2022-12-05T00:00:00+00:00
description: "The Weekly Challenge - 194"
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
### 09. [TASK #1: Digital Clock](#TASK1)
### 10. [TASK #2: Frequency Equalizer](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #194` of `The Weekly Challenge`.

Today is the first `Monday` of the month and time to declare our next champion. With great pleasure, we announce `Bruce Gray` as the next `Champion of The Weekly Challenge`. We don't have the email address of `Bruce`, unfortunately. If you are reading this message then please share your email address with us.

Two new members joined the `Team PWC` last week, [**Thomas Köhler**](https://github.com/jeanluc2020) and  [**David Ferrone**](https://github.com/zapwai). Welcome on board, we hope you enjoy the fun every week with us.

[**Advent Calendar 2022**](/blog/advent-calendar-2022) is going on with full swing, thanks to the contributions by the members of `Team PWC`.

| | | |
| :---: | :---: | :---: |
| `Day`   | `Article` | `Authors` |
| | | |
| &nbsp;&nbsp; `1` &nbsp;&nbsp; | &nbsp;[**Are Abecedarians from Abecedaria?**](/blog/advent-calendar-2022-12-01) &nbsp; | &nbsp; `Adam Russell` &nbsp; |
| &nbsp;&nbsp; `2` &nbsp;&nbsp; | &nbsp;[**Binary String / Odd String**](/blog/advent-calendar-2022-12-02) &nbsp; | &nbsp; `James Smith` &nbsp; |
| &nbsp;&nbsp; `3` &nbsp;&nbsp; | &nbsp;[**Counting Cute**](/blog/advent-calendar-2022-12-03) &nbsp; | &nbsp; `Colin Crain` &nbsp; |
| &nbsp;&nbsp; `4` &nbsp;&nbsp; | &nbsp;[**Four is Magic**](/blog/advent-calendar-2022-12-04) &nbsp; | &nbsp; `Alexander Pankoff` &nbsp; |
| &nbsp;&nbsp; `5` &nbsp;&nbsp; | &nbsp;[**Farey, Moebius**](/blog/advent-calendar-2022-12-05) &nbsp; | &nbsp; `Arne Sommer` &nbsp; |

<br>

Another busy week with `100+` contributions. This is the record in the history of `The Weekly Challenge`, we achieved the target for the `10th consecutive weeks`. Thank you `Team PWC` for the support and encouragement.

| | | | | | | | | | |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| | | | | | | | | | |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `184` &nbsp;&nbsp;|&nbsp;&nbsp; `185` &nbsp;&nbsp; |&nbsp;&nbsp; `186` &nbsp;&nbsp; |&nbsp;&nbsp; `187` &nbsp;&nbsp;|&nbsp;&nbsp; `188` &nbsp;&nbsp;|&nbsp;&nbsp; `189` &nbsp;&nbsp;|&nbsp;&nbsp; `190` &nbsp;&nbsp;|&nbsp;&nbsp; `191` &nbsp;&nbsp;|&nbsp;&nbsp; `192` &nbsp;&nbsp;|&nbsp;&nbsp; `193` &nbsp;|
| | | | | | | | | | |
| `Perl` | 55 | 59 | 56 | 51 | 63 | 60 | 53 | 54 | 59 | 55 |
| `Raku` | 31 | 35 | 33 | 34 | 36 | 35 | 32 | 38 | 41 | 31 |
| `Blog` | 17 | 19 | 20 | 20 | 16 | 18 | 23 | 21 | 23 | 22 |
| | | | | | | | | | |

<br>

Last week, we had `37` regular contributors and `12` guest contributors. Thank you everyone for the support and encouragement.

Today, we are giving away `Coupon #17` to `Robbie Hatley` for the book, [**Learning Perl Exercises**](https://leanpub.com/learning_perl_exercises) by `brian d foy`. Unfortunately we don't have your email address, can you please share with us so that we can send you the coupon?

### Past Winners

| | | | |
| :---: | :---: | :---: | :---: |
| | | | |
| &nbsp;&nbsp;`S. No.`&nbsp;&nbsp; | `Name`              | `S. No.` | `Name` |
| | | |
|  1. | Cheok-Yin Fung       |  2. | W. Luis Mochan    |
|  3. | Robert DiCicco       |  4. | Kueppo Wesley     |
|  5. | Solathian            |  6. | Dario Mazzeo      |
|  7. |&nbsp; Peter Campbell Smith &nbsp;|  8. | Kjetil Skotheim   |
|  9. | Neils van Dijke      | 10. |&nbsp; Laurent Rosenfeld &nbsp;|
| 11. | Duncan C. White      | 12. | Ali Moradi        |
| 13. | Jorg Sommrey         | 14. | James Smith       |
| 15. | Alexander Pankoff    | 16. | Simon Green       |
| 17. |                      | 18. |                   |
| 19. |                      | 20. |                   |
| 21. |                      | 22. |                   |
| 23. |                      | 24. |                   |
| 25. |                      | 26. |                   |
| 27. |                      | 28. |                   |
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

I would like to thank every guest contributors for making it special every week. Last week we received `43 guest contributions` in `15 languages`.

Please checkout the [**blog post**](https://alvar3z.com/posts/lambdas--printf/) by `E. Alvarez`. Being a guest contributor, it doesn't get space in the [**Weekly Recaps**](/recaps) sections, so I decided to mention it here.

<br>

### TOP 10 Guest Languages
***

`Rust` moved up one position to `rank #7`.

Do you see your favourite language in the `Top 10`? If not then why not contribute regularly and make it to the top.

     1. Python  (1226)
     2. Haskell (516)
     3. Ruby    (429)
     4. Lua     (413)
     5. C++     (296)
     6. C       (295)
     7. Rust    (269)
     8. BQN     (267)
     9. Go      (233)
    10. Java    (209)

<br>

### Blogs with Creative Title
***

#### 1. [An Abundance of Strings](https://raku-musings.com/abundance-strings.html) by Arne Sommer.
#### 2. [evens and Oddballs](https://blogs.perl.org/users/bruce_gray/2022/12/twc-193-evens-and-oddballs.html) by Bruce Gray.
#### 3. [What An Unusual String You Have There! Or Are You Just Glad To Meet Me?](https://colincrain.com/2022/12/04/what-an-unusual-string-you-have-there-or-are-you-just-glad-to-meet-me/) by Colin Crain.
#### 4. [Map, map and remap!](https://fluca1978.github.io/2022/11/28/PerlWeeklyChallenge193.html) by Luca Ferrari.
#### 5. [All the binaries and find the odd man out](https://pjcs-pwc.blogspot.com/2022/11/all-binaries-and-find-odd-man-out.html) by Peter Campbell Smith.
#### 6. [Odd Binary](https://blog.firedrake.org/archive/2022/12/The_Weekly_Challenge_193__Odd_Binary.html) by Roger Bell_West.
#### 7. [The odd binary string](https://dev.to/simongreennet/the-odd-binary-string-p64) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 29,547 (`+145`)
#### 2. Pull Requests: 7,199 (`+37`)
#### 3. Contributors: 213 (`+2`)
#### 4. Fork: 268 (`+1`)
#### 5. Stars: 149 (`+1`)

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2022. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2022. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 193](/blog/recap-challenge-193)** by `Mohammad S Anwar`.

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

[**Thomas Köhler**](https://github.com/jeanluc2020), an experienced `Perl` hacker from `Germany` joined the `Team PWC`.

[**David Ferrone**](https://github.com/zapwai), an experienced `Perl` hacker from `New England, USA` joined the `Team PWC`.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}
***

Please check out the guest contributions for the [**Week #193**](/blog/guest-contribution/#193).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Digital Clock {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given time in the format `hh:mm` with one missing digit.

Write a script to find the highest digit between `0-9` that makes it valid time.

### Example 1

    Input: $time = '?5:00'
    Output: 1

    Since 05:00 and 15:00 are valid time and no other digits can fit in the missing place.

### Example 2

    Input: $time = '?3:00'
    Output: 2

### Example 3

    Input: $time = '1?:00'
    Output: 9

### Example 4

    Input: $time = '2?:00'
    Output: 3

### Example 5

    Input: $time = '12:?5'
    Output: 5

### Example 6

    Input: $time =  '12:5?'
    Output: 9

<br>

## Task 2: Frequency Equalizer {#TASK2}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given a string made of alphabetic characters only, `a-z`.

Write a script to determine whether removing only one character can make the frequency of the remaining characters the same.

#### Example 1:

    Input: $s = 'abbc'
    Output: 1 since removing one alphabet 'b' will give us 'abc' where each alphabet frequency is the same.

#### Example 2:

    Input: $s = 'xyzyyxz'
    Output: 1 since removing 'y' will give us 'xzyyxz'.

#### Example 3:

    Input: $s = 'xzxz'
    Output: 0 since removing any one alphabet would not give us string with same frequency alphabet.

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 11th December 2022**.

***
