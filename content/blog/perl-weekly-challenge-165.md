---
title: "The Weekly Challenge - 165"
date: 2022-05-16T00:00:00+00:00
description: "The Weekly Challenge - 165"
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
### 09. [TASK #1: Scalable Vector Graphics (SVG)](#TASK1)
### 10. [TASK #2: Line of Best Fit](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #165`.

Let us all welcome 2 new members, `James Marquiz` and `Humberto Massa` to the `Team PWC`.

We had the pleasure to interview latest champion, [**Alexander Pankoff**](/blog/meet-the-champion-2022-04). It was great knowing him.

I would like to thank `Ryan Thompson` for suggesting cool tasks for the weekly challenge. Thanks `Early Bird Club` members for helping with task reviews.

Thanks `Team PWC` for reaching the milestone second time in a row i.e. `100+ regular contributions`. We had `40 contributors` in the `Week #164`.

The `Week #164` seems to be special for guest contributors too. We had `14 contributors` sharing solutions in `17 guest languages`.

Talking about contributions, I only managed to find time for the task `Prime Palindrome` in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/mohammad-anwar/perl/ch-1.pl).

Good luck for the next challenge.

<br>

### Blogs with Creative Title
***

#### 1. [Primarily Happy](https://raku-musings.com/primarily-happy.html) by Arne Sommer.
#### 2. [Happy Happy Joy Joy](https://colincrain.com/2022/05/15/happy-happy-joy-joy) by Colin Crain.
#### 3. [Shiny Happy Numbers](https://jacoby.github.io/2022/05/09/shiny-happy-numbers-weekly-challenge-164.html) by Dave Jacoby.
#### 4. [Palindromic primes and moody numbers](https://pjcs-pwc.blogspot.com/2022/05/palindromic-primes-and-moody-numbers.html) by Peter Campbell Smith.
#### 5. [Happy Palindromes](https://blog.firedrake.org/archive/2022/05/The_Weekly_Challenge_164__Happy_Palindromes.html) by Roger Bell_West.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 25,232 (+153)
#### 2. Pull Requests: 6,107 (+37)
#### 3. Contributors: 193 (+1)
#### 4. Fork: 248  (+1)
#### 5. Stars: 132 (+2)

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2022. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2022. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 164](/blog/recap-challenge-164)** by `Mohammad S Anwar`.

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

**James Marquiz**, an expert `Perl` hacker and [**Humberto Massa**](https://github.com/massa), an expert `Raku` hacker joined the `Team PWC`.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}
***

Please checkout the guest contributions for the [**Week #164**](/blog/guest-contribution/#164).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Scalable Vector Graphics (SVG) {#TASK1}
##### **Submitted by:** [Ryan J Thompson](https://ry.ca)
***

*Scalable Vector Graphics* (SVG) are not made of pixels, but lines, ellipses, and curves, that can be scaled to any size without any loss of quality. If you have ever tried to resize a small JPG or PNG, you know what I mean by "loss of quality"! What many people do not know about SVG files is, they are simply XML files, so they can easily be generated programmatically.

For this task, you may use external library, such as Perl's [SVG](https://metacpan.org/pod/SVG) library, maintained in recent years by our very own **Mohammad S Anwar.** You can instead generate the XML yourself; it's actually quite simple. The source for the example image for **Task #2** might be instructive.

Your task is to accept a series of points and lines in the following format, one per line, in arbitrary order:

**Point:** x,y

**Line:** x1,y1,x2,y2

##### Example:

    53,10
    53,10,23,30
    23,30

    Then, generate an SVG file plotting all points, and all lines. If done correctly, you can view the output `.svg` file in your browser.

<br>

## Task 2: Line of Best Fit {#TASK2}
##### **Submitted by:** [Ryan J Thompson](https://ry.ca)
***

When you have a scatter plot of points, a **line of best fit** is the line that best describes the relationship between the points, and is very useful in statistics. Otherwise known as linear regression, here is an example of what such a line might look like:

![Hull](/images/blog/pwc-165-2.svg)

The method most often used is known as the [least squares method](https://www.mathsisfun.com/data/least-squares-regression.html), as it is straightforward and efficient, but you may use any method that generates the correct result.

Calculate the **line of best fit** for the following **48** points:

```
333,129  39,189 140,156 292,134 393,52  160,166 362,122  13,193
341,104 320,113 109,177 203,152 343,100 225,110  23,186 282,102
284,98  205,133 297,114 292,126 339,112 327,79  253,136  61,169
128,176 346,72  316,103 124,162  65,181 159,137 212,116 337,86
215,136 153,137 390,104 100,180  76,188  77,181  69,195  92,186
275,96  250,147  34,174 213,134 186,129 189,154 361,82  363,89
```

Using your rudimentary graphing engine from **Task #1,** graph all points, as well as the line of best fit.

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 22nd May 2022**.

***
