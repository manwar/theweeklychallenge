---
title: "Perl Weekly Challenge - 038"
date: 2019-12-09T00:00:00+00:00
description: "Perl Weekly Challenge - 038"
type: post
image: images/blog/pwc-base.svg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---
***
***

## HEADLINES

***
***

With great pleasure, we announce **Javier Luque** as the winner of [**"Perl Weekly Challenge - 037"**](/blog/perl-weekly-challenge-037). Congratulations **Javier**, you should soon hear from **[Perl Careers](https://perl.careers/)** about your reward. For rest of the participants, I would say **Good Luck** for next time. Keep sending in your solutions and share your knowledge with each other.

***
***

## RECAP

***
***

Here is the recap of last week [**"Perl Weekly Challenge - 037"**](/blog/recap-challenge-037).

***
***

## PERL REVIEW

***
***

Please checkout **Perl** solutions review of the [**"Perl Weekly Challenge - 036"**](/blog/review-challenge-036) by **Kian-Meng Ang**.

If you missed any past reviews then please checkout the [**collection**](/p5-reviews).

***
***

## RAKU REVIEW

***
***

Please checkout **Raku** solutions review of the [**"Perl Weekly Challenge - 036"**](/blog/p6-review-challenge-036) by **Laurent Rosenfeld**.

If you missed any past reviews then please checkout the [**collection**](/p6-reviews).

***
***

## CHART

***
***

Please take a look at the [**charts**](/chart) showing interesting data.

I would like to thank every member of the team for their valuable suggestions. Please do share your experience with us.

***
***

## NEW MEMBERS

***
***

Check out current [**team**](/team) members.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

***
***

## GUESTS

***
***

1) **Daniel Mita** shared **Go** solution for [**"Perl Weekly Challenge - 037"**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-037/daniel-mita/go/ch-1.go).

2) **Daniel Mita** shared **Javascript** solution for [**"Perl Weekly Challenge - 037"**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-037/daniel-mita/js/ch-1.js).

3) **Duncan C. White** shared **Postscript** solution for [**"Perl Weekly Challenge - 037"**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-037/duncan-c-white/postscript/ch-1.ps).

Please find out [**past solutions**](/blog/guest-contribution) by respected **guests**. Please do share your creative solutions in other languages.

***
***

## TASK #1

***
***

### Date Finder

Create a script to accept a **7 digits** number, where the first number can only be **1** or **2**. The second and third digits can be anything **0-9**. The fourth and fifth digits corresponds to the month i.e. **01,02,03...,11,12**. And the last **2 digits** respresents the days in the month i.e. **01,02,03....29,30,31**. Your script should validate if the given number is valid as per the rule and then convert into human readable format date.

## RULES

1) If **1st** digit is **1**, then append **20** otherwise **19** to the **2nd** and **3rd** digits to make it **4-digits** year.

2) The **4th** and **5th** digits together should be a valid month.

3) The **6th** and **7th** digits together should be a valid day for the above month.

For example, the given number is **2230120**, it should print **1923-01-20**.

***
***

## TASK #2

***
***

### Word Game

Lets assume we have tiles as listed below, with an alphabet (**A..Z**) printed on them. Each tile has a value, e.g. **A (1 point), B (4 points)** etc. You are allowed to draw **7 tiles** from the lot randomly. Then try to form a word using the **7 tiles** with maximum points altogether. You don't have to use all the **7 tiles** to make a word. You should try to use as many tiles as possible to get the maximum points.

For example, A (x8) means there are 8 tiles with letter A.

#### 1 point
> A (x8), G (x3), I (x5), S (x7), U (x5), X (x2), Z (x5)

#### 2 points
> E (x9), J (x3), L (x3), R (x3), V (x3), Y (x5)

#### 3 points
> F (x3), D (x3), P (x5), W (x5)

#### 4 points
> B (x5), N (x4)

#### 5 points
> T (x5), O (x3), H (x3), M (x4), C (x4)

#### 10 points
> K (x2), Q (x2)

***
***

Last date to submit the solution **23:59 (UK Time) Sunday 15th December 2019**.

***
***
