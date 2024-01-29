---
title: "The Weekly Challenge - 254"
date: 2024-01-29T00:00:00+00:00
description: "The Weekly Challenge - 254"
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
### 09. [TASK #1: Three Power](#TASK1)
### 10. [TASK #2: Reverse Vowels](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #254` of `The Weekly Challenge`.

Let us all welcome, `Alex Wilson` from `London` to the `Team PWC`. In the first week itself, he shared solutions in [**Uiua**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-253/probablyfine/uiua).

`Arne Sommer`, master of `Raku` programming language mostly but occasionaly also shares solutions in `Perl`. I am a big fan of his blog title. Last night, I was going through the blog post for the [**Perl Weekly**](https://perlweekly.com) newsletter, I noticed his blog post was not accessible. It never happened before. I am hoping it would be back soon.

Talking about blog post, another member of `Team PWC` and a regular contributor, `Roger Bell_West` came up with title `You Are the Weakest String`. It reminded me a TV show with similar title, [**The Weakest Link**](https://en.wikipedia.org/wiki/The_Weakest_Link_(British_game_show)). It brought smile on my face. Thank you for keeping us all entertained.

We all know the history of `Raku` programming language. I remember early days, we used `.p6` extension for script then it was recommended to use `.raku` instead later. I noticed some of the `Raku` contributors in the `Team PWC` still using the old extension `.p6`. Nothing wrong in using old extension, just wanted to talk about it. We are ok with either, we have no issues at all.

Some of you, from the early days, would remember when the weekly challenge was called `Perl Weekly Challenge`. Then it changed to `The Weekly Challenge` to accomodate the sister language `Raku`. I noticed some member, still calls it `Perl Weekly Challenge`. It brings back the memory of early days. Keep using it for as long as you want. By the way, the team is still called, `Team PWC` and I am going to keep it like this forever.

`Dave Jacoby` blog post is also worth checking where he would share the story of week number. Like in [**last week post**](https://jacoby.github.io/2024/01/22/split-string-soup-weekly-challenge-253.html), he mentioned that `253` is the product of two primes, `11` and `23`, and thus it’s a semiprime number. It is a Triangle Number also. Too much fun, thank you.

Another member, `Packy Anderson` comes up musical connection every week in his blog post. In his [**last blog post**](https://packy.dardan.com/2024/01/22/perl-weekly-challenge-3), he shared musical inspiration. I only listen to `Bollywood Music`, so I find it amusing. I learn a lot just reading the blog post.

I would like to thank every member of `Team PWC` for the support and encouragement. Some of you even take the time to write kind words to me every week. Thank you for the messages. Trust me, it gives me energy when I feel low. Please accept my apolog for not reply to your email. I am always running short of time, sorry.

***

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `249` &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `250` &nbsp;&nbsp;|&nbsp;&nbsp; 56 &nbsp;&nbsp;|&nbsp;&nbsp; 34 &nbsp;&nbsp;|&nbsp;&nbsp; 27 &nbsp;&nbsp;|
|&nbsp;&nbsp; `251` &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 33 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `252` &nbsp;&nbsp;|&nbsp;&nbsp; 54 &nbsp;&nbsp;|&nbsp;&nbsp; 35 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `253` &nbsp;&nbsp;|&nbsp;&nbsp; 53 &nbsp;&nbsp;|&nbsp;&nbsp; 29 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `249` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 46 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `250` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 82 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `251` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 53 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `252` &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 72 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|
|&nbsp;&nbsp; `253` &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|&nbsp;&nbsp; 60 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top 10`? If not then why not contribute regularly and make it to the top.

     1. Python     (2159)
     2. Ruby       (646)
     3. Haskell    (627)
     4. Lua        (572)
     5. Rust       (510)
     6. C          (475)
     7. C++        (472)
     8. Go         (321)
     9. BQN        (315)
    10. JavaScript (313)

<br>

### Blogs with Creative Title
***

#### 1. [Split String Soup](https://jacoby.github.io/2024/01/22/split-string-soup-weekly-challenge-253.html) by Dave Jacoby.
#### 2. [Weakest Strings](https://github.sommrey.de/blog/pwc/challenge-253) by Jorg Sommrey.
#### 3. [not so easy handling multidimensional arrays](https://fluca1978.github.io/2024/01/22/PerlWeeklyChallenge253.html) by Luca Ferrari.
#### 4. [The Weakest Split](https://packy.dardan.com/2024/01/22/perl-weekly-challenge-3/) by Packy Anderson.
#### 5. [Split the weakest](http://ccgi.campbellsmiths.force9.co.uk/challenge/253) by Peter Campbell Smith.
#### 6. [You Are the Weakest String](https://blog.firedrake.org/archive/2024/01/The_Weekly_Challenge_253__You_Are_the_Weakest_String.html) by Roger Bell_West.
#### 7. [The weakest split](https://dev.to/simongreennet/the-weakest-split-5ad7) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 36,322 (`+109`)
#### 2. Pull Requests: 9,466 (`+40`)
#### 3. Contributors: 242 (`+1`)
#### 4. Fork: 305 (`+1`)
#### 5. Stars: 166 (`+1`)

<br>

## SPONSOR {#SPONSOR}
***

In the year `2024`, we are looking for new sponsor for monthly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 253](/blog/recap-challenge-253)** by `Mohammad S Anwar`.

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

[**Alex Wilson**](https://github.com/mrwilson), an expert hacker from `London` joined `Team PWC`.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}
***

Please check out the guest contributions for the [**Week #253**](/blog/guest-contribution/#253).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Three Power {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given a positive integer, `$n`.

Write a script to return true if the given integer is a power of three otherwise return false.

#### Example 1

    Input: $n = 27
    Output: true

    27 = 3 ^ 3

#### Example 2

    Input: $n = 0
    Output: true

    0 = 0 ^ 3

#### Example 3

    Input: $n = 6
    Output: false

<br>

## Task 2: Reverse Vowels {#TASK2}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given a string, `$s`.

Write a script to reverse all the vowels (`a, e, i, o, u`) in the given string.

#### Example 1

    Input: $s = "Raku"
    Output: "Ruka"

#### Example 2

    Input: $s = "Perl"
    Output: "Perl"

#### Example 3

    Input: $s = "Julia"
    Output: "Jaliu"

#### Example 4

    Input: $s = "Uiua"
    Output: "Auiu"

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 4th February 2024**.

***
