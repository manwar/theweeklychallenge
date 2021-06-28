---
title: "The Weekly Challenge - 119"
date: 2021-06-28T00:00:00+00:00
description: "The Weekly Challenge - 119"
type: post
image: images/blog/pwc-base.svg
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
### 09. [TASK #1: Swap Nibbles](#TASK1)
### 10. [TASK #2: Sequence without 1-on-1](#TASK2)

<br>

## HEADLINES {#HEADLINES}
***

Welcome to the new home for `The Weekly Challenge`, a shiny new domain, [**theweeklychallenge.org**](https://theweeklychallenge.org/). I had the domain registered long time ago but never got around to switch over. We, `Gabor and I`, spent an hour yesterday and got it moved to new domain. Hopefully the switch over didn't break any existing links. Please do let me know if you find any.

`Gabor Szabo` introduced [**Crystal programming language**](https://code-maven.com/crystal-binary-palindrom) to **Team PWC** and now officially become the weekly challenge contributor.

Welcome back, `Lance Wicks` and thanks for sharing [**blog**](https://perl.kiwi/tales/2021/06/21/tdd-a-perlscript-with-modulinos-pwc-118/) and [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-118/lance-wicks/perl) solutions.

I would like to thank, `Paulo Custodio`, for sharing **C** and **C++** solutions to the past challenges alongwith your regular [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-118/paulo-custodio/perl) solutions. I appreciate your support and encouragement.

Looks like, it is holiday season. I have seen messages from **Team PWC** members about going on vacation. I saw a Facebook post by one of the regular **Team PWC** member, `Adam Russell`. It was really funny that he can't stop thinking about the weekly challenge even while on vacation. I can understand his feeling as I go through the same personally.

Long time ago, I had similar message from another member, [**Joelle Maslask**](/blog/meet-the-champion-015/), saying she is sharing solutions to weekly challenge from hospital bed. This is the height of dedications. Hats off to her.

Did you notice something in recent weeks? I am receiving proposal for weekly challenge regularly. This is a big relief to me and one less thing to worry about every week. So a big `THANK YOU` to all contributors. Please don't stop and keep sharing new challenges.

Last week, `Cheok-Yin Fung`, proposed the task **Adventure of Knight**. It was really tough nut to crack and demanded more time than I had. So I skipped it unfortunately. However, she wrote a really nice [**blog**](http://blogs.perl.org/users/c_y_fung/2021/06/promotion-knights-challenge.html) talking about her contribution.

I would also like to mention another name, `James Smith`. I have noticed in recent weeks, he not only shares solutions to the weekly challenge but put an extra effort to improve the performance. As I review his regular pull requests during the week, I can imagine how much time and effort he is putting in. I don't want his hard work to go un-noticed. So please do check out his [**blog**](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-118/james-smith).

After a short gap, I am back with my live **YouTube** videos. I hope you like it.

<br>

### Mohammad Anwar: Missing Row (Week: 117)
***

<iframe width="560" height="315" src="https://www.youtube.com/embed/tqxbbEzCZTw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br><br>

### Mohammad Anwar: Binary Palindrome (Week: 118)
***

<iframe width="560" height="315" src="https://www.youtube.com/embed/LjcWSMEaopc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br><br>

Let us share some interesting stats from the [**GitHub repository**](https://github.com/manwar/perlweeklychallenge-club).
<br>

#### 1. Commits: 17,815 (+227)
#### 2. Pull Requests: 4,353 (+54)
#### 3. Contributors: 167
#### 4. Fork: 213 (+1)
#### 5. Stars: 95 (+1)

<br>

Last but not least, I would like to thank each and every member for their support and encouragement.

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2021. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2021. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of [**"The Weekly Challenge - 118"**](/blog/recap-challenge-118) by `Mohammad S Anwar`.

<br>

## PERL REVIEW {#PERLREVIEW}
***

Please check out **Perl** solutions review of the **["The Weekly Challenge - 116"](/blog/review-challenge-116)** by `Colin Crain`.

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

Please checkout the guest contributions for the [**Week #118**](/blog/guest-contribution/#118).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## TASK #1 › Swap Nibbles {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org/)
***

You are given a positive integer `$N`.

Write a script to swap the two nibbles of the binary representation of the given number and print the decimal number of the new binary representation.

> A nibble is a four-bit aggregation, or half an octet.

To keep the task simple, we only allow integer less than or equal to 255.

## Example

    Input: $N = 101
    Output: 86

    Binary representation of decimal 101 is 1100101 or as 2 nibbles (0110)(0101).
    The swapped nibbles would be (0101)(0110) same as decimal 86.

    Input: $N = 18
    Output: 33

    Binary representation of decimal 18 is 10010 or as 2 nibbles (0001)(0010).
    The swapped nibbles would be (0010)(0001) same as decimal 33.

<br>

## TASK #2 › Sequence without 1-on-1 {#TASK2}
##### **Submitted by:** [Cheok-Yin Fung](https://github.com/E7-87-83)
***

Write a script to generate sequence starting at 1. Consider the increasing sequence of integers which contain only 1's, 2's and 3's, and do not have any doublets of 1's like below. Please accept a positive integer `$N` and print the `$Nth` term in the generated sequence.

> 1, 2, 3, 12, 13, 21, 22, 23, 31, 32, 33, 121, 122, 123, 131, ...

## Example

    Input: $N = 5
    Output: 13

    Input: $N = 10
    Output: 32

    Input: $N = 60
    Output: 2223

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 4th July 2021**.

***
