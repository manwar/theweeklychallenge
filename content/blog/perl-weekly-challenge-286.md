---
title: "The Weekly Challenge - 286"
date: 2024-09-09T00:00:00+00:00
description: "The Weekly Challenge - 286"
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
### 09. [TASK #1: Self Spammer](#TASK1)
### 10. [TASK #2: Order Game](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #286` of `The Weekly Challenge`.

Let us all welcome guest contributor, [**Peter Pentchev**](https://github.com/ppentchev), to the `Team PWC`. Thanks for sharing solutions in [**Python**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-285/ppentchev/python) and [**Rust**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-285/ppentchev/rust). I have see many contributions in `Python` and `Rust` before but this seems to be truly complete solutions. I always believe you never stop learning. And I learn something new every week from each contributions.

Did you notice I use the term `guest contributor` for `Peter Pentchev`?

Those who are new to the `Team PWC`, it is just my way of differentiating between regular and guest contributors. Anyone who contributes in languages other than `Perl` and `Raku` is a guest contributor. We maintain two list of contributors i.e. `Regular Contributors` and `Guest Contributors`. To become a regular contributor, one can simply contribute in either `Perl` or `Raku` just once. As of today, we have `14` guest contributors and `315` regular contributors. You can get the details in the [**Team**](/team) page.

Welcome back to blogging, `David Ferrone` and thanks for sharing the [**blog post**](https://dev.to/zapwai/lost-connections-and-making-changes-anp).

Welcome back, `Asher Harvey-Smith` and thanks for sharing solutions in [**APL**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-285/asherbhs/apl), [**BQN**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-285/asherbhs/bqn), [**Haskell**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-285/asherbhs/haskell), [**Hy**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-285/asherbhs/hy), [**J**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-285/asherbhs/j), [**K**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-285/asherbhs/k) and [**Raku**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-285/asherbhs/raku).

Thank you, `Torgny Lyon`, for sharing [**blog post**](https://www.abc.se/~torgny/pwc.html#285) for the first time. Hope to see more in coming weeks.

`Peter Meszaros`, thank you for continuous support and contributions.

Thank you, `Jorg Sommrey`, for your dedication. It rarely happens to see an additional blog post, [**Sorting Without Sort**](https://github.sommrey.de/the-bears-den/2024/09/08/ch-284.html), to talk about another approach to solve past task `Relative Sort`.

***

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `281` &nbsp;&nbsp;|&nbsp;&nbsp; 58 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `282` &nbsp;&nbsp;|&nbsp;&nbsp; 64 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
|&nbsp;&nbsp; `283` &nbsp;&nbsp;|&nbsp;&nbsp; 60 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `284` &nbsp;&nbsp;|&nbsp;&nbsp; 64 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `285` &nbsp;&nbsp;|&nbsp;&nbsp; 55 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `281` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 64 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `282` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 64 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|
|&nbsp;&nbsp; `283` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 61 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|
|&nbsp;&nbsp; `284` &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 72 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|
|&nbsp;&nbsp; `285` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 69 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (2788)
     2. Rust       (737)
     3. Ruby       (725)
     4. Haskell    (703)
     5. Lua        (638)
     6. C          (579)
     7. C++        (544)
     8. JavaScript (481)
     9. Go         (404)
    10. BQN        (363)

<br>

### Blogs with Creative Title
***

#### 1. [No Connection](https://raku-musings.com/no-connection.html) by Arne Sommer.
#### 2. [Lost Connections and Making Changes](https://dev.to/zapwai/lost-connections-and-making-changes-anp) by David Ferrone.
#### 3. [Change With No Way Out](https://github.sommrey.de/the-bears-den/2024/09/06/ch-285.html) by Jorg Sommrey.
#### 4. [Connected Coins in an Unconnected World](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-285/challenge-285/matthias-muth#readme) by Matthias Muth.
#### 5. [Exact Change Only!](https://packy.dardan.com/b/Qq) by Packy Anderson.
#### 6. [Dead end coins](http://ccgi.campbellsmiths.force9.co.uk/challenge/285) by Peter Campbell Smith.
#### 7. [Making Connections](https://blog.firedrake.org/archive/2024/09/The_Weekly_Challenge_285__Making_Connections.html) by Roger Bell_West.
#### 8. [Making connections](https://dev.to/simongreennet/making-connections-13p8) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 40,080 (`+135`)
#### 2. Pull Requests: 10,783 (`+46`)
#### 3. Contributors: 253 (`+1`)
#### 4. Fork: 319 (`+1`)
#### 5. Stars: 175

<br>

## SPONSOR {#SPONSOR}
***

With start of `Week #268`, we have a new sponsor `Lance Wicks` for the entire year `2024`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 285](/blog/recap-challenge-285)** by `Mohammad Sajid Anwar`.

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

[**Peter Pentchev**](https://github.com/ppentchev) joined `Team PWC`.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}
***

Please check out the guest contributions for the [**Week #285**](/blog/guest-contribution/#285).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Self Spammer {#TASK1}
##### **Submitted by:** [David Ferrone](http://www.zapwai.net)
***

Write a program which outputs one word of its own script / source code at random. A word is anything between whitespace, including symbols.

#### Example 1

    If the source code contains a line such as: 'open my $fh, "<", "ch-1.pl" or die;'
    then the program would output each of the words { open, my, $fh,, "<",, "ch-1.pl", or, die; }
    (along with other words in the source) with some positive probability.

#### Example 2

    Technically 'print(" hello ");' is *not* an example program, because it does not
    assign positive probability to the other two words in the script.
    It will never display print(" or ");

#### Example 3

    An empty script is one trivial solution, and here is another:
    echo "42" > ch-1.pl && perl -p -e '' ch-1.pl

<br>

## Task 2: Order Game {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given an array of integers, `@ints`, whose length is a power of 2.

Write a script to play the order game (min and max) and return the last element.

#### Example 1

    Input: @ints = (2, 1, 4, 5, 6, 3, 0, 2)
    Output: 1

    Operation 1:

        min(2, 1) = 1
        max(4, 5) = 5
        min(6, 3) = 3
        max(0, 2) = 2

    Operation 2:

        min(1, 5) = 1
        max(3, 2) = 3

    Operation 3:

        min(1, 3) = 1

#### Example 2

    Input: @ints = (0, 5, 3, 2)
    Output: 0

    Operation 1:

        min(0, 5) = 0
        max(3, 2) = 3

    Operation 2:

        min(0, 3) = 0

#### Example 3

    Input: @ints = (9, 2, 1, 4, 5, 6, 0, 7, 3, 1, 3, 5, 7, 9, 0, 8)
    Output: 2

    Operation 1:

        min(9, 2) = 2
        max(1, 4) = 4
        min(5, 6) = 5
        max(0, 7) = 7
        min(3, 1) = 1
        max(3, 5) = 5
        min(7, 9) = 7
        max(0, 8) = 8

    Operation 2:

        min(2, 4) = 2
        max(5, 7) = 7
        min(1, 5) = 1
        max(7, 8) = 8

    Operation 3:

        min(2, 7) = 2
        max(1, 8) = 8

    Operation 4:

        min(2, 8) = 2

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 15th September 2024**.

***
