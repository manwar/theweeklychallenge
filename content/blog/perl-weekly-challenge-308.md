---
title: "The Weekly Challenge - 308"
date: 2025-02-10T00:00:00+00:00
description: "The Weekly Challenge - 308"
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
### 09. [TASK #1: Count Common](#TASK1)
### 10. [TASK #2: Decode XOR](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #308` of `The Weekly Challenge`.

I noticed a big jump in `guest contributions` and this can't be a random jump. This has been going strong steadily in my personal opinion. Having said, we still have strong support for `Perl` and `Raku`. And don't underestimate the power of blog post.

`Richard Park` is back with bang with his contributions in [**APL**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-307/richard-park/apl).

Welcome back, `Simon Dueck` and thanks for your contributions in [**F#**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-307/simon-dueck/fsharp).

Welcome back, `Steven Wilson` and thanks for your contributions in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-307/steven-wilson/perl) and [**Python**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-307/steven-wilson/python).

Regular guest contributor, `Conor Hoekstra`, introduced us to a new programming language [**Kap**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-307/conor-hoekstra/kap) alongwith his favourites [**BQN**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-307/conor-hoekstra/bqn) and [**Uiua**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-307/conor-hoekstra/uiua).

With the addition of `Kap`, we now have `112` guest programming languages i.e. other than `Perl` and `Raku`. This number is rather huge, considering we started with just `Python` in the `Week #018` by `Orestis Zekai`.

As we are talking about `guest contributors`, how can I ignore the silent but strong guest contributors. Every `Monday` as soon as the new challenge is out, I find first thing in my inbox from `Eric Cheung`. He has been regularly contributing in `Python` mostly. Two other giants guest contributors, I would like to mention is `Ulrich Rieke` and `Roger Bell_West`. I don't need to say anything about their contributions, you all know what they do and do it consistently. There is also one name that I miss now a days and it is `Luca Ferrari`. Then there is `Peter Meszaros` who is going strong week after week with this contributions in `Go` and `Python`. How about `Ali Moradi`? Well he is like young boy having so many toys and not sure what to play with every week. I really enjoy his choice of language every week. Having said, there is a pattern if you look at his contributions closely. One more guest contributor who impressed me a lot and he is `PokGoPun`. He mostly contributes in `Go` and `Python`.

How about regular contributions? There are plenty to talk about but for me, every single contributor is special. Having said, I would like to mention few, `Athanasius`, `Thomas Kohler`, `E. Choroba`, `Mark Anderson`, `Wanderdoc`.

Two `Perl` contributors whose story telling in the form of `blog post` is the most in demand are `Peter Campbell Smith` and `W. Luis Mochan`.

There is another `Perl` contributor who promotes `PDL` and he is `Jorg Sommrey`. If you want to explore `PDL` then you should checkout his contributions.

If we talk about `Raku` then one name comes straight to my mind is, `Arne Sommer`. No one can beat him with his story telling ability. He is incredible. Also `Jaldhar H. Vyas` is another flag bearer for `Raku` but he also shares contributions in `Perl` as well.

I would like to thank members who send encouraging messages. It works like a magic, when I feel low. Even, just `Thank you`, is more than enough to charge me. There are few names, I always look forward to each week, for the cute little messages.

The weekly challenge that we all get on `Monday` every week for so long, the credit for this goes to the support of team of `Early Bird Club`. Their contributions is immense and I can't thank them enough. Without their support, I wouldn't have survived. Every week, I throw ideas of future challenge and they fine tune them. This is incredible. Best of all, they are humble and polite.

I mentioned few names this week as I had little time to replay what was in my head for so long. There is every possibility, I may have missed few names, so please excuse me for the ommision. It wasn't deliberate, honestly speaking.

Let's celebrate each others contributions and learn from them too.

***

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `303` &nbsp;&nbsp;|&nbsp;&nbsp; 40 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|
|&nbsp;&nbsp; `304` &nbsp;&nbsp;|&nbsp;&nbsp; 40 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `305` &nbsp;&nbsp;|&nbsp;&nbsp; 42 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|
|&nbsp;&nbsp; `306` &nbsp;&nbsp;|&nbsp;&nbsp; 37 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|
|&nbsp;&nbsp; `307` &nbsp;&nbsp;|&nbsp;&nbsp; 40 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `303` &nbsp;&nbsp;|&nbsp;&nbsp; 8 &nbsp;&nbsp;|&nbsp;&nbsp; 37 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `304` &nbsp;&nbsp;|&nbsp;&nbsp; 9 &nbsp;&nbsp;|&nbsp;&nbsp; 49 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|
|&nbsp;&nbsp; `305` &nbsp;&nbsp;|&nbsp;&nbsp; 9 &nbsp;&nbsp;|&nbsp;&nbsp; 46 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|
|&nbsp;&nbsp; `306` &nbsp;&nbsp;|&nbsp;&nbsp; 9 &nbsp;&nbsp;|&nbsp;&nbsp; 40 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `307` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 61 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (3185)
     2. Rust       (844)
     3. Ruby       (769)
     4. Haskell    (745)
     5. Lua        (686)
     6. C          (590)
     7. C++        (587)
     8. JavaScript (532)
     9. Go         (456)
    10. BQN        (412)

<br>

### Blogs with Creative Title
***

#### 1. [Find the Check](https://raku-musings.com/find-check.html) by Arne Sommer.
#### 2. [Sort And Compare](https://github.sommrey.de/the-bears-den/2025/02/07/ch-307.html) by Jorg Sommrey.
#### 3. [Don't Get Trapped in the Anagram Order!](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-307/challenge-307/matthias-muth#readme) by Matthias Muth.
#### 4. [Orders and anagrams](http://ccgi.campbellsmiths.force9.co.uk/challenge/307) by Peter Campbell Smith.
#### 5. [Anagram Check](https://blog.firedrake.org/archive/2025/02/The_Weekly_Challenge_307__Anagram_Check.html) by Roger Bell_West.
#### 6. [Sorting and counting](https://dev.to/simongreennet/weekly-challenge-sorting-and-counting-2on) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 42,225 (`+94`)
#### 2. Pull Requests: 11,534 (`+32`)
#### 3. Contributors: 257
#### 4. Fork: 323
#### 5. Stars: 185 (`+3`)

<br>

## SPONSOR {#SPONSOR}
***

With start of `Week #268`, we have a new sponsor `Lance Wicks` until the end of year `2025`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 307](/blog/recap-challenge-307)** by `Mohammad Sajid Anwar`.

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

Please check out the guest contributions for the [**Week #307**](/blog/guest-contribution/#307).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Count Common {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given two array of strings, `@str1` and `@str2`.

Write a script to return the count of common strings in both arrays.

#### Example 1

    Input: @str1 = ("perl", "weekly", "challenge")
           @str2 = ("raku", "weekly", "challenge")
    Output: 2

#### Example 2

    Input: @str1 = ("perl", "raku", "python")
           @str2 = ("python", "java")
    Output: 1

#### Example 3

    Input: @str1 = ("guest", "contribution")
           @str2 = ("fun", "weekly", "challenge")
    Output: 0

<br>

## Task 2: Decode XOR {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given an encoded array and an initial integer.

Write a script to find the original array that produced the given encoded array. It was encoded such that `encoded[i] = orig[i] XOR orig[i + 1]`.

#### Example 1

    Input: @encoded = (1, 2, 3), $initial = 1
    Output: (1, 0, 2, 1)

    Encoded array created like below, if the original array was (1, 0, 2, 1)
    $encoded[0] = (1 xor 0) = 1
    $encoded[1] = (0 xor 2) = 2
    $encoded[2] = (2 xor 1) = 3

#### Example 2

    Input: @encoded = (6, 2, 7, 3), $initial = 4
    Output: (4, 2, 0, 7, 4)

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 16<sup>th</sup> February 2025**.

***
