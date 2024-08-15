---
title: "The Weekly Challenge - 282"
date: 2024-08-12T00:00:00+00:00
description: "The Weekly Challenge - 282"
type: post
image: images/twc-logo.png
author: Mohammad Sajid Anwar
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
### 09. [TASK #1: Good Integer](#TASK1)
### 10. [TASK #2: Changing Keys](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #282` of `The Weekly Challenge`.

Let us all welcome two new `Perl` hackers, `Kavya S P` and `GarciaAutomation` to `Team PWC`.

Thank you, `GarciaAutomation`, for sharing your first contributions in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-281/garciaautomation/perl).

Thank you, `Adam Russell`, for back to back contributions in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-281/adam-russell/perl) and bonus [**blog post**](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2024/08/10).

Thank you, `Andrew Schneider` for sharing contributions in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-281/atschneid/perl), [**Julia**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-281/atschneid/julia), [**Racket**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-281/atschneid/racket) and bonus [**blog post**](https://github.com/atschneid/perlweeklychallenge-club/blob/master/challenge-281/atschneid/README.md) even while on holiday.

Welcome back, `Cheok-Yin Fung`, and thanks for your contributions in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-281/cheok-yin-fung/perl) and bonus [**blog post**](https://cylivesstem.wordpress.com/2024/08/10/where-is-the-chess-piece-going-to).

Welcome back, `Simon Green`, and thanks for your contributions in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-281/sgreen/perl), [**Python**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-281/sgreen/python) and bonus [**blog post**](https://dev.to/simongreennet/the-one-about-a-chess-board-57mh).

***

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `277` &nbsp;&nbsp;|&nbsp;&nbsp; 66 &nbsp;&nbsp;|&nbsp;&nbsp; 30 &nbsp;&nbsp;|&nbsp;&nbsp; 29 &nbsp;&nbsp;|
|&nbsp;&nbsp; `278` &nbsp;&nbsp;|&nbsp;&nbsp; 57 &nbsp;&nbsp;|&nbsp;&nbsp; 28 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|
|&nbsp;&nbsp; `279` &nbsp;&nbsp;|&nbsp;&nbsp; 56 &nbsp;&nbsp;|&nbsp;&nbsp; 28 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `280` &nbsp;&nbsp;|&nbsp;&nbsp; 56 &nbsp;&nbsp;|&nbsp;&nbsp; 28 &nbsp;&nbsp;|&nbsp;&nbsp; 27 &nbsp;&nbsp;|
|&nbsp;&nbsp; `281` &nbsp;&nbsp;|&nbsp;&nbsp; 60 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `277` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 53 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
|&nbsp;&nbsp; `278` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 68 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|
|&nbsp;&nbsp; `279` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 66 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|
|&nbsp;&nbsp; `280` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 63 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|
|&nbsp;&nbsp; `281` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 64 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (2702)
     2. Ruby       (715)
     3. Rust       (707)
     4. Haskell    (694)
     5. Lua        (630)
     6. C          (571)
     7. C++        (532)
     8. JavaScript (465)
     9. Go         (394)
    10. BQN        (356)

<br>

### Blogs with Creative Title
***

#### 1. [Checking Out the Knight’s Moves](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2024/08/10) by Adam Russell.
#### 2. [Chess Moves](https://github.com/atschneid/perlweeklychallenge-club/blob/master/challenge-281/atschneid/README.md) by Andrew Schneider.
#### 3. [Color of Knight](https://raku-musings.com/color-knight.html) by Arne Sommer.
#### 4. [Where is the chess piece going to?](https://cylivesstem.wordpress.com/2024/08/10/where-is-the-chess-piece-going-to) by Cheok-Yin Fung.
#### 5. [Pawning Things Off](https://jacoby-lpwk.onrender.com/2024/08/05/pawning-things-off-weekly-challenge-281.html) by Dave Jacoby.
#### 6. [Colors of the Knight](https://github.sommrey.de/the-bears-den/2024/08/09/ch-281.html) by Jorg Sommrey.
#### 7. [Knights of Class](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-281/challenge-281/matthias-muth#readme) by Matthias Muth.
#### 8. [The Ultimate Test of Cerebral Fitness](https://packy.dardan.com/b/Pd) by Packy Anderson.
#### 9. [Anyone for chess?](http://ccgi.campbellsmiths.force9.co.uk/challenge/281) by Peter Campbell Smith.
#### 10. [Check the Knight's Colour](https://blog.firedrake.org/archive/2024/08/The_Weekly_Challenge_281__Check_the_Knight_s_Colour.html) by Roger Bell_West.
#### 11. [The one about a chess board](https://dev.to/simongreennet/the-one-about-a-chess-board-57mh) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 39,466 (`+130`)
#### 2. Pull Requests: 10,573 (`+45`)
#### 3. Contributors: 250
#### 4. Fork: 316 (`+1`)
#### 5. Stars: 175

<br>

## SPONSOR {#SPONSOR}
***

With start of `Week #268`, we have a new sponsor `Lance Wicks` for the entire year `2024`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 281](/blog/recap-challenge-281)** by `Mohammad Sajid Anwar`.

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

#### `Kavya S P`, an experienced `Perl` hacker from `Washington State, United States` joined `Team PWC`.
#### [**GarciaAutomation**](https://github.com/garciaautomation), an experienced `Perl` hacker joined `Team PWC`.

<br>

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}
***

Please check out the guest contributions for the [**Week #281**](/blog/guest-contribution/#281).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Good Integer {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a positive integer, `$int`, having `3 or more digits`.

Write a script to return the `Good Integer` in the given integer or `-1` if none found.

> A good integer is exactly three consecutive matching digits.

#### Example 1

    Input: $int = 12344456
    Output: "444"

#### Example 2

    Input: $int = 1233334
    Output: -1

#### Example 3

    Input: $int = 10020003
    Output: "000"

<br>

## Task 2: Changing Keys {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given an alphabetic string, `$str`, as typed by user.

Write a script to find the number of times user had to change the key to type the given string. Changing key is defined as using a key different from the last used key. The `shift` and `caps lock` keys won't be counted.

#### Example 1

    Input: $str = 'pPeERrLl'
    Ouput: 3

    p -> P : 0 key change
    P -> e : 1 key change
    e -> E : 0 key change
    E -> R : 1 key change
    R -> r : 0 key change
    r -> L : 1 key change
    L -> l : 0 key change

#### Example 2

    Input: $str = 'rRr'
    Ouput: 0

#### Example 3

    Input: $str = 'GoO'
    Ouput: 1

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 18th August 2024**.

***
