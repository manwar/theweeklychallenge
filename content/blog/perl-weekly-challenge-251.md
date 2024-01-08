---
title: "The Weekly Challenge - 251"
date: 2024-01-08T00:00:00+00:00
description: "The Weekly Challenge - 251"
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
### 09. [TASK #1: Concatenation Value](#TASK1)
### 10. [TASK #2: Lucky Numbers](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #251` of `The Weekly Challenge`.

What a nice way to start the new year with two new members, [**Andrew Mehta**](https://github.com/ajmetz) and [**Mustafa Aydin**](https://github.com/mustafaaydn) joining the `Team PWC`. In fact, `Andrew` shared solution to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-249/andrew_mehta/perl) of `Week #249`. We had solutions to `Week #250` in [**Raku**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-250/witawayar/raku) and [**C++**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-250/witawayar/cpp) by `Mustafa Aydin`.

I would like to thank `Mark Anderson` for sharing blogs after a long gap for [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-250/mark-anderson/raku/blog-1.md) and [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-250/mark-anderson/raku/blog-2.md).

Welcome back, `Simon Proctor` and thanks for your contributions in [**Raku**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-250/simon-proctor/raku).

Not sure how many of you are members of private [**Perl Programmers Group**](https://www.facebook.com/groups/perlprogrammers) of `Facebook`. It gives me immense pleasure to see the discussion of weekly solutions by the senior members of `Team PWC`. You get to learn all nitty gritty just by following the discussions.

Looking back the history of weekly challenge, it has been such a pleasant journey. It wasn't smooth all the way, I must admit but we all made through in the end. At the end of `Week #250`, we have the following members with the score of `2000+`, not an easy task to be honest.

<br>

#### 1. Laurent Rosenfeld (2452)
#### 2. Roger Bell_West (2244)
#### 3. Jaldhar H. Vyas (2140)
#### 4. Luca Ferrari (2130)

<br>

There was a time when I was part of `TOP 10` rank. My current `rank #23` is still good but can be better. I hope in the new year `2024` will make the situation better to join the challenge. Right now I don't feel mentally ready to take part in the weekly challenge.

<br>

***

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `246` &nbsp;&nbsp;|&nbsp;&nbsp; 42 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `247` &nbsp;&nbsp;|&nbsp;&nbsp; 42 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|
|&nbsp;&nbsp; `248` &nbsp;&nbsp;|&nbsp;&nbsp; 49 &nbsp;&nbsp;|&nbsp;&nbsp; 27 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|
|&nbsp;&nbsp; `249` &nbsp;&nbsp;|&nbsp;&nbsp; 49 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `250` &nbsp;&nbsp;|&nbsp;&nbsp; 53 &nbsp;&nbsp;|&nbsp;&nbsp; 33 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `246` &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|&nbsp;&nbsp; 39 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `247` &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|&nbsp;&nbsp; 37 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `248` &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|&nbsp;&nbsp; 41 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `249` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 46 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `250` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 82 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top 10`? If not then why not contribute regularly and make it to the top.

     1. Python     (2101)
     2. Ruby       (640)
     3. Haskell    (621)
     4. Lua        (564)
     5. Rust       (492)
     6. C          (469)
     7. C++        (458)
     8. BQN        (315)
     9. Go         (315)
    10. JavaScript (307)

<br>

### Blogs with Creative Title
***

#### 1. [String Index](https://raku-musings.com/string-index.html) by Arne Sommer.
#### 2. [Leaping from Tree to Tree as They Float Down the Mighty Rivers of British Columbia](https://jacoby.github.io/2024/01/01/leaping-from-tree-to-tree-as-they-float-down-the-mighty-rivers-of-british-columbia-weekly-challenge-250.html) by Dave Jacoby.
#### 3. [Alphanumeric Moduli](https://github.sommrey.de/blog/pwc/challenge-250) by Jorg Sommrey.
#### 4. [the first one of 2024!](https://fluca1978.github.io/2024/01/04/PerlWeeklyChallenge250.html) by Luca Ferrari.
#### 5. [Two-Hundred Fifty Perl Weekly Challenges! Two-Hundred Fifty problems so clear…](https://packy.dardan.com/2024/01/01/perl-weekly-challenge-2/) by Packy Anderson.
#### 6. [Smallest index, largest element](http://ccgi.campbellsmiths.force9.co.uk/challenge/250) by Peter Campbell Smith.
#### 7. [Smallest Viable Value](https://blog.firedrake.org/archive/2024/01/The_Weekly_Challenge_250__Smallest_Viable_Value.html) by Roger Bell_West.
#### 8. [Small and large](https://dev.to/simongreennet/small-and-large-2ap) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 35,998 (`+114`)
#### 2. Pull Requests: 9,351 (`+43`)
#### 3. Contributors: 240 (`+1`)
#### 4. Fork: 303 (`+2`)
#### 5. Stars: 166 (`+2`)

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2023. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2023. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 250](/blog/recap-challenge-250)** by `Mohammad S Anwar`.

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

#### 1. [**Andrew Mehta**](https://github.com/ajmetz), an experienced `Perl` hacker.
#### 2. [**Mustafa Aydin**](https://github.com/mustafaaydn), an experienced `Raku` hacker.

<br>

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}
***

Please check out the guest contributions for the [**Week #250**](/blog/guest-contribution/#250).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Concatenation Value {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given an array of integers, `@ints`.

Write a script to find the concatenation value of the given array.

The concatenation of two numbers is the number formed by concatenating their numerals.

    For example, the concatenation of 10, 21 is 1021.
    The concatenation value of @ints is initially equal to 0.
    Perform this operation until @ints becomes empty:

    If there exists more than one number in @ints, pick the first element
    and last element in @ints respectively and add the value of their
    concatenation to the concatenation value of @ints, then delete the
    first and last element from @ints.

    If one element exists, add its value to the concatenation value of
    @ints, then delete it.

<br>

#### Example 1

    Input: @ints = (6, 12, 25, 1)
    Output: 1286

    1st operation: concatenation of 6 and 1 is 61
    2nd operation: concaternation of 12 and 25 is 1225

    Concatenation Value => 61 + 1225 => 1286

#### Example 2

    Input: @ints = (10, 7, 31, 5, 2, 2)
    Output: 489

    1st operation: concatenation of 10 and 2 is 102
    2nd operation: concatenation of 7 and 2 is 72
    3rd operation: concatenation of 31 and 5 is 315

    Concatenation Value => 102 + 72 + 315 => 489

#### Example 3

    Input: @ints = (1, 2, 10)
    Output: 112

    1st operation: concatenation of 1 and 10 is 110
    2nd operation: only element left is 2

    Concatenation Value => 110 + 2 => 112

<br>

## Task 2: Lucky Numbers {#TASK2}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given a `m x n` matrix of distinct numbers.

Write a script to return the lucky number, if there is one, or -1 if not.

    A lucky number is an element of the matrix such that it is
    the minimum element in its row and maximum in its column.

<br>

#### Example 1

    Input: $matrix = [ [ 3,  7,  8],
                       [ 9, 11, 13],
                       [15, 16, 17] ];
    Output: 15

    15 is the only lucky number since it is the minimum in its row
    and the maximum in its column.

#### Example 2

    Input: $matrix = [ [ 1, 10,  4,  2],
                       [ 9,  3,  8,  7],
                       [15, 16, 17, 12] ];
    Output: 12

#### Example 3

    Input: $matrix = [ [7 ,8],
                       [1 ,2] ];
    Output: 7

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 14th January 2024**.

***
