---
title: "The Weekly Challenge - 273"
date: 2024-06-10T00:00:00+00:00
description: "The Weekly Challenge - 273"
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
### 09. [TASK #1: Percentage of Character](#TASK1)
### 10. [TASK #2: B After A](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #273` of `The Weekly Challenge`.

Let us all welcome two new members, [**Chazzka**](https://github.com/chazzka) and `Santiago Leyva`.

`Chazzka` in the first week shared solution in [**Coconut**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-272/chazzka/coconut/ch-2.coco).

`Santiago Levya` shared solution in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-272/santiago-leyva/perl) in the very first week.

Also recently joined member, `Andrew Schneider` shared solutions in [**C**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-272/atschneid/c), [**Prolog**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-272/atschneid/prolog) and [**Racket**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-272/atschneid/racket) this week (his second week).

`E. Choroba`, one of the regular contributors, shared very interesting [**blog post**](https://blogs.perl.org/users/e_choroba/2024/06/equalise-an-array.html). I would highly recommend you must check out.

Welcome back, `Adam Russell`. Thanks for your contributions in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-272/adam-russell/perl) and engaging [**blog post**](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2024/06/08).

***
<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `268` &nbsp;&nbsp;|&nbsp;&nbsp; 48 &nbsp;&nbsp;|&nbsp;&nbsp; 31 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|
|&nbsp;&nbsp; `269` &nbsp;&nbsp;|&nbsp;&nbsp; 44 &nbsp;&nbsp;|&nbsp;&nbsp; 30 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|
|&nbsp;&nbsp; `270` &nbsp;&nbsp;|&nbsp;&nbsp; 39 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|
|&nbsp;&nbsp; `271` &nbsp;&nbsp;|&nbsp;&nbsp; 52 &nbsp;&nbsp;|&nbsp;&nbsp; 28 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|
|&nbsp;&nbsp; `272` &nbsp;&nbsp;|&nbsp;&nbsp; 54 &nbsp;&nbsp;|&nbsp;&nbsp; 30 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `268` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 75 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|
|&nbsp;&nbsp; `269` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 78 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|
|&nbsp;&nbsp; `270` &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|&nbsp;&nbsp; 50 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
|&nbsp;&nbsp; `271` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 57 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
|&nbsp;&nbsp; `272` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 69 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (2561)
     2. Ruby       (692)
     3. Haskell    (674)
     4. Rust       (649)
     5. Lua        (612)
     6. C          (545)
     7. C++        (512)
     8. JavaScript (425)
     9. Go         (369)
    10. BQN        (336)

<br>

### Blogs with Creative Title
***

#### 1. [Defang and Sum-Abs-Char-Diffs](https://github.com/atschneid/perlweeklychallenge-club/blob/master/challenge-272/atschneid/README.md) by Andrew Schneider.
#### 2. [Defanged and Scored](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2024/06/08) by Adam Russell.
#### 3. [IP Score](https://raku-musings.com/ip-score.html) by Arne Sommer.
#### 4. [Defang the Snake Fixated at the Score](https://github.sommrey.de/the-bears-den/2024/06/07/ch-272.html) by Jorg Sommrey.
#### 5. [Quick and Simple](https://fluca1978.github.io/2024/06/06/PerlWeeklyChallenge272.html) by Luca Ferrari.
#### 6. [A Half Liner and a Full One](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-272/matthias-muth#readme) by Matthias Muth.
#### 7. [Defanged Addresses & String Scores](https://packy.dardan.com/b/MS) by Packy Anderson.
#### 8. [Fangs and strings](http://ccgi.campbellsmiths.force9.co.uk/challenge/272) by Peter Campbell Smith.
#### 9. [Score the Defranged Strings](https://blog.firedrake.org/archive/2024/06/The_Weekly_Challenge_272__Score_the_Defranged_Strings.html) by Roger Bell_West.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 38,464 (`+112`)
#### 2. Pull Requests: 10,232 (`+51`)
#### 3. Contributors: 246 (`+2`)
#### 4. Fork: 311 (`+1`)
#### 5. Stars: 172

<br>

## SPONSOR {#SPONSOR}
***

With start of `Week #268`, we have a new sponsor `Lance Wicks` for the entire year `2024`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 272](/blog/recap-challenge-272)** by `Mohammad Sajid Anwar`.

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

#### 1. [**Chazzka**](https://github.com/chazzka), an experienced hacker joined the `Team PWC`.
#### 2. `Santiago Leyva`. an experienced `Perl` hacker from `South America` joined `Team PWC`.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}
***

Please check out the guest contributions for the [**Week #272**](/blog/guest-contribution/#272).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Percentage of Character {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a string, `$str` and a character `$char`.

Write a script to return the percentage, nearest whole, of given character in the given string.

#### Example 1

    Input: $str = "perl", $char = "e"
    Output: 25

#### Example 2

    Input: $str = "java", $char = "a"
    Output: 50

#### Example 3

    Input: $str = "python", $char = "m"
    Output: 0

#### Example 4

    Input: $str = "ada", $char = "a"
    Output: 67

#### Example 5

    Input: $str = "ballerina", $char = "l"
    Output: 22

#### Example 6

    Input: $str = "analitik", $char = "k"
    Output: 13

<br>

## Task 2: B After A {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a string, `$str`.

Write a script to return `true` if there is at least one `b`, and no `a` appears after the first `b`.

#### Example 1

    Input: $str = "aabb"
    Output: true

#### Example 2

    Input: $str = "abab"
    Output: false

#### Example 3

    Input: $str = "aaa"
    Output: false

#### Example 4

    Input: $str = "bbb"
    Output: true

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 16th June 2024**.

***
