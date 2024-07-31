---
title: "The Weekly Challenge - 278"
date: 2024-07-15T00:00:00+00:00
description: "The Weekly Challenge - 278"
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
### 09. [TASK #1: Sort String](#TASK1)
### 10. [TASK #2: Reverse Word](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #278` of `The Weekly Challenge`.

I was hoping to see the historical win for England in the final of `UEFA Euro 2024`. Unfortunately we were outplayed by the energetic `Spain`. Honestly speaking, `Football` is the only sport where I wholeheartedly support `Team England`. And I am still waiting for the day to celebrate the success.

I am aware we do have members from `Spain`, so many congratulations to all who support the `Team Spain` for winning the final.

Welcome back `Alexander Karelas` and thanks for sharing solutions in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-277/alexander-karelas/perl).

Welcome back `Conor Hoekstra` and thanks for sharing solutions in `BQN` for [[**Week #272**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-272/conor-hoekstra/bqn)], [[**Week #273**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-273/conor-hoekstra/bqn)], [[**Week #274**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-274/conor-hoekstra/bqn)], [[**Week #275**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-275/conor-hoekstra/bqn)], [[**Week #276**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-276/conor-hoekstra/bqn)] and [[**Week #277**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-277/conor-hoekstra/bqn)].

I would also like to mention, `Marton Polgar` for sharing solutions in [**Prolog**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-277/2colours/prolog).

Thank you, `Andrew Schneider`, for sharing solutions in [**Erlang**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-277/atschneid/erlang) for the first time.

Every week, I get to checkout the contributions by `Team PWC` members when I prepare the post for [**Perl Weekly Newsletter**](https://perlweekly.com). I would highly recommend you to checkout the blog posts. You will find plenty of gems in every blog post. It has been a great source of learning for me. A big `THANK YOU` to all contributors.

I would also like to remind `Laurent Rosenfeld` to get back to me with regard to the email about the prize money.

***
<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `273` &nbsp;&nbsp;|&nbsp;&nbsp; 64 &nbsp;&nbsp;|&nbsp;&nbsp; 34 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|
|&nbsp;&nbsp; `274` &nbsp;&nbsp;|&nbsp;&nbsp; 45 &nbsp;&nbsp;|&nbsp;&nbsp; 27 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|
|&nbsp;&nbsp; `275` &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `276` &nbsp;&nbsp;|&nbsp;&nbsp; 62 &nbsp;&nbsp;|&nbsp;&nbsp; 32 &nbsp;&nbsp;|&nbsp;&nbsp; 27 &nbsp;&nbsp;|
|&nbsp;&nbsp; `277` &nbsp;&nbsp;|&nbsp;&nbsp; 64 &nbsp;&nbsp;|&nbsp;&nbsp; 30 &nbsp;&nbsp;|&nbsp;&nbsp; 28 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `273` &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|&nbsp;&nbsp; 82 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|
|&nbsp;&nbsp; `274` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 58 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `275` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 60 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `276` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 74 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|
|&nbsp;&nbsp; `277` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 53 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (2644)
     2. Ruby       (703)
     3. Haskell    (686)
     4. Rust       (681)
     5. Lua        (620)
     6. C          (563)
     7. C++        (524)
     8. JavaScript (447)
     9. Go         (386)
    10. BQN        (348)

<br>

### Blogs with Creative Title
***

#### 1. [Count the Common Ones and the Strong Pairs](https://github.com/atschneid/perlweeklychallenge-club/blob/master/challenge-277/atschneid/README.md) by Andrew Schneider.
#### 2. [Strong Count](https://raku-musings.com/strong-count.html) by Arne Sommer.
#### 3. [Strength Uncombined](https://blogs.perl.org/users/bruce_gray/2024/07/twc-277-strength-uncombined.html) by Bruce Gray.
#### 4. [Common Strength](https://github.sommrey.de/the-bears-den/2024/07/12/ch-277.html) by Jorg Sommrey.
#### 5. [They call me the count, because I love to count pairs! Ah, ah, ah!](https://wp.me/p2aV3x-m0) by Packy Anderson.
#### 6. [Commons and pairs](http://ccgi.campbellsmiths.force9.co.uk/challenge/277) by Peter Campbell Smith.
#### 7. [A Strong Count](https://blog.firedrake.org/archive/2024/07/The_Weekly_Challenge_277__A_Strong_Count.html) by Roger Bell_West.
#### 8. [Strong counting](https://dev.to/simongreennet/strong-counting-10on) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 38,999 (`+111`)
#### 2. Pull Requests: 10,415 (`+41`)
#### 3. Contributors: 249 (`+1`)
#### 4. Fork: 314 (`+1`)
#### 5. Stars: 174 (`+1`)

<br>

## SPONSOR {#SPONSOR}
***

With start of `Week #268`, we have a new sponsor `Lance Wicks` for the entire year `2024`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 277](/blog/recap-challenge-277)** by `Mohammad Sajid Anwar`.

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

Please check out the guest contributions for the [**Week #277**](/blog/guest-contribution/#277).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Sort String {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a shuffle string, `$str`.

Write a script to return the sorted string.

> A string is shuffled by appending word position to each word.

#### Example 1

    Input: $str = "and2 Raku3 cousins5 Perl1 are4"
    Output: "Perl and Raku are cousins"

#### Example 2

    Input: $str = "guest6 Python1 most4 the3 popular5 is2 language7"
    Output: "Python is the most popular guest language"

#### Example 3

    Input: $str = "Challenge3 The1 Weekly2"
    Output: "The Weekly Challenge"

<br>

## Task 2: Reverse Word {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a word, `$word` and a character, `$char`.

Write a script to replace the substring up to and including `$char` with its characters sorted alphabetically. If the `$char` doesn't exist then `DON'T` do anything.

#### Example 1

    Input: $str = "challenge", $char = "e"
    Ouput: "acehllnge"

#### Example 2

    Input: $str = "programming", $char = "a"
    Ouput: "agoprrmming"

#### Example 3

    Input: $str = "champion", $char = "b"
    Ouput: "champion"

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 21st July 2024**.

***
