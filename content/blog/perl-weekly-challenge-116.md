---
title: "The Weekly Challenge - 116"
date: 2021-06-07T00:00:00+00:00
description: "The Weekly Challenge - 116"
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
### 09. [TASK #1: Number Sequence](#TASK1)
### 10. [TASK #2: Sum of Squares](#TASK2)

<br>

## HEADLINES {#HEADLINES}
***

Today is the first **Monday** of the month and I eagerly wait for this moment to declare the next `Champion of PWC`. It is not just about the prize money but it gives me reason to celebrate the contributions of another **Champion**. And there is a bonus on top of it, I get to interview the Champion and find out more about him/her.

##  So who is the next Champion?
<br>

Well, I am happy to announce, `Pete Houston` (United Kingdom), as our next **Champion**. Just for record, he never blogged about his solutions and he always email his contributions as attachments. I appreciate his consistent contributions. He is currently `ranked #34` with score `198` in the **Leaderboard**.

Last week was a bit odd as I was little disturbed and out of my happy zone. It resulted in no contributions, `code or video`, from me, sorry. I will try to compensate this week. However, I did write a [**blog**](/blog/lets-be-friend/) about the same on 4th June 2021, please check it out when you have spare time.

I have received many supportive messages and suggestions from **Team PWC** members. I thank each and everyone for taking time out and sharing ideas. I would like to mention one name specifically, `Bartosz Jarzyna`. He wrote the [**blog**](https://brtastic.xyz/blog/article/improving-pwc) presenting his views. It started discussions on Facebook and [**Reddit**](https://www.reddit.com/r/perl/comments/nqjlot/suggestions_on_improving_the_perl_weekly_challenge/). I have read each and every messages. I try to stay out of the discussion in public. I personally prefer one-2-one private discussion.

`Bartosz` even contributed to this week challenge in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-115/brtastic/perl) after a gap of **6 weeks**. He even shared a very detailed [**blog**](https://brtastic.xyz/blog/article/zipping-arrays-in-perl) following the style he recommended in his other blog. Thank you `Bartosz`.

Thank you, `Dave Cross`, for the second consecutive week contributing in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-115/dave-cross/perl).

Welcome back, `Paulo Custodio`, after a short break and thanks for sharing [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-108/paulo-custodio/perl) solutions to `Week #108` and [**Python**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-004/paulo-custodio/python) solutions to `Week #4`.

### Let us share some interesting stats from the [GitHub repository](https://github.com/manwar/perlweeklychallenge-club).
<br>

#### 1. Commits: 17,226 (+143)
#### 2. Pull Requests: 4,208 (+41)
#### 3. Contributors: 166
#### 4. Fork: 212 (+1)
#### 5. Stars: 91

<br>

Last but not least, I would like to thank each and every member for their support and encouragement.

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2021. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2021. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of [**"The Weekly Challenge - 115"**](/blog/recap-challenge-115) by `Mohammad S Anwar`.

<br>

## PERL REVIEW {#PERLREVIEW}
***

Please check out **Perl** solutions review of the **["Perl Weekly Challenge - 113"](/blog/review-challenge-113)** by `Colin Crain`.

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

Please checkout the guest contributions for the [Week #115](/blog/guest-contribution/#115).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## TASK #1 › Number Sequence {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org/)
***

You are given a number `$N >= 10`.

Write a script to split the given number such that the difference between two consecutive numbers is always 1 and it shouldn't have leading 0.

Print the given number if it impossible to split the number.

## Example

    Input: $N = 1234
    Output: 1,2,3,4

    Input: $N = 91011
    Output: 9,10,11

    Input: $N = 10203
    Output: 10203 as it is impossible to split satisfying the conditions.

<br>

## TASK #2 › Sum of Squares {#TASK2}
##### **Submitted by:** [Mohammad Meraj Zia](https://github.com/ziameraj16)
***

You are given a number `$N >= 10`.

Write a script to find out if the given number `$N` is such that sum of squares of all digits is a perfect square. Print 1 if it is otherwise 0.

## Example

    Input: $N = 34
    Ouput: 1 as 3^2 + 4^2 => 9 + 16 => 25 => 5^2

    Input: $N = 50
    Output: 1 as 5^2 + 0^2 => 25 + 0 => 25 => 5^2

    Input: $N = 52
    Output: 0 as 5^2 + 2^2 => 25 + 4 => 29

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 13th June 2021**.

***
