---
title: "The Weekly Challenge - 110"
date: 2021-04-26T00:00:00+00:00
description: "The Weekly Challenge - 110"
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
### 09. [TASK #1: Valid Phone Numbers](#TASK1)
### 10. [TASK #2: Transpose File](#TASK2)

<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #110`. It appears to be a really long journey. It is only possible because of all your supports and encouragements. There are couple of things that made this week very special. First, we crossed the magic numbers one more time. Last time we reached the magic numbers was in the `Week #100`. We did come closer to the target in the `Week #106` and `Week #108` with numbers **97** and **92** respectively. So well done **Team PWC**. Please keep the momentum going.

Last week, I missed very important news about the **Guest Contributions**. We broke previous of record of **68** contributions by guest in the `Week  #104`. We received **69** contributions in the `Week #108`. Glad, I didn't say anything about the number **69**, as this `Week #109` we went past even that figure. We now have all time record of **81** contributions by guests. It is not just numbers but the varieties. `Abigail` and `Laurent Rosenfeld` are two main contributors that helped reach the target. At one point last week, we had more guest contributions than the regular contributions of **Perl** and **Raku**. I hope and wish to see the guest contributions go past the magic numbers of **100**.

Welcome back `Bartosz Jarzyna` and thanks for the contributions. I noticed you shared [**Raku**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-109/brtastic/raku) solutions for the first time. Well done.

I would also like to welcome `Maxim Kolodyazhny` after a short break and contributing in [**Raku**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/maxim-kolodyazhny/raku/ch-2.raku) for the first time. Before this he only shared **Perl** solutions with us.

Thank you, `Cheok-Yin Fung` for the [**blog**](http://blogs.perl.org/users/c_y_fung/2021/04/cys-take-on-pwc109.html) after a long break. It is always pleasure to read your blog.

I would also like to thank, `Lance Wicks` for the contributions: [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-109/lance-wicks/perl) and [**Blog**](https://perl.kiwi/tales/2021/04/24/perl-weekly-challenge-109-in-perl-and-elm/). We missed you in the `Week #108`.

Last but not the least, welcome back `Richard Park` for sharing solutions in [**APL**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-109/richard-park/apl).

<br>

### Lance Wicks: Chowla Numbers
***

<iframe width="560" height="315" src="https://www.youtube.com/embed/yWFbj7_yDow" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br><br>

### Mohammad Anwar: Chowla Numbers
***

<iframe width="560" height="315" src="https://www.youtube.com/embed/R18fJ10aJNc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br><br>

Let us share some interesting stats from the [**GitHub repository**](https://github.com/manwar/perlweeklychallenge-club).

#### 1. Commits: 16,149 (+163)
#### 2. Pull Requests: 3,954 (+40)
#### 3. Contributors: 163
#### 4. Fork: 204
#### 5. Stars: 92 (+1)

<br>

Last but not least, I would like to thank each and every member for their support and encouragement.

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2021. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2021. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of [**"The Weekly Challenge - 109"**](/blog/recap-challenge-109) by `Mohammad S Anwar`.

<br>

## PERL REVIEW {#PERLREVIEW}
***

Please check out **Perl** solutions review of the **["Perl Weekly Challenge - 107"](/blog/review-challenge-107)** by `Colin Crain`.

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

Please checkout the guest contributions for the [Week #109](https://perlweeklychallenge.org/blog/guest-contribution/#109).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## TASK #1 › Valid Phone Numbers {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org/)
***

You are given a text file.

Write a script to display all valid phone numbers in the given text file.

## Acceptable Phone Number Formats

    +nn  nnnnnnnnnn
    (nn) nnnnnnnnnn
    nnnn nnnnnnnnnn

## Input File

    0044 1148820341
     +44 1148820341
      44-11-4882-0341
    (44) 1148820341
      00 1148820341

## Output

    0044 1148820341
     +44 1148820341
    (44) 1148820341

<br>

## TASK #2 › Transpose File {#TASK2}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org/)
***

You are given a text file.

Write a script to transpose the contents of the given file.

## Input File

    name,age,sex
    Mohammad,45,m
    Joe,20,m
    Julie,35,f
    Cristina,10,f

## Output:

    name,Mohammad,Joe,Julie,Cristina
    age,45,20,35,10
    sex,m,m,f,f

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 2nd May 2021**.

***
