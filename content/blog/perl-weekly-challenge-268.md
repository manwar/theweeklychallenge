---
title: "The Weekly Challenge - 268"
date: 2024-05-05T00:00:00+00:00
description: "The Weekly Challenge - 268"
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
### 09. [TASK #1: Magic Number](#TASK1)
### 10. [TASK #2: Number Game](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #268` of `The Weekly Challenge`.

Let us all welcome, `Princy Mangla` from `India` to `Team PWC`. She was one of the applicants of `Outreachy Program`. She first shared solutions to `Week #263` in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-263/princy-perl/perl). And then she surprised us with another solutions to `Week #267` in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-267/princy-perl/perl).

Welcome back `Marton Polgar` after the break. He mostly contributed solutions in `Raku`. In the past he shared solutions in `Prolog` as well but last week he shared solutions to [**Week #266**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-266/2colours/php) and [**Week #267**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-267/2colours/php) in `PHP` too.

We have another surprise by `Lance Wicks` as he shared solutions in [**Roc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-267/lance-wicks/roc/main.roc) and [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-267/lance-wicks/perl).

I have a good news that I want to share with `Team PWC`. Last week, `Lance` contacted me with the offer to sponsor the monthly champion prize money. As you all know, I did try once to attract the sponsor at the end of last year when `Pete` stopped the sponsorship. Unfortunately it didn't work out. Because of this, first three winners of the year `2024` didn't get any prize money. `Lance` has agreed to sponsor the next `12 months` to begin with. I requested him if we can offer the prize money to the past three winners and he accepted my request. So in the next couple of days, I would contact the winners of `Jan`, `Feb` and `Mar` with regard to the prize money. Just for record, the prize money stays the same `US $50`. Winner would get the choice of direct cash transfer (if possible) or voucher of their choice (not limited to just `Amazon Voucher`).

Also today is the first `Monday` of the month and time to declare another champion of the month. I am happy to announce `Reinier Maliepaard` as our next champion. As of today he shared `13 solutions` in `Perl` and `7 blog posts`. He is an experienced `Perl` hacker from `Netherlands` who joined the `Team PWC` recently.

I would like to take this opportunity to thank `Lance Wicks` for the support. I am relieved as this has sorted the year `2024` for now. As you all know, we started with weekly winner and then shifted to monthly winner. I am hoping one day we would have enough sponsors to go back to weekly winner.

I am grateful to each and every member of `Team PWC` for their contributions. Thanks to their support and encouragement, we are still going steadily. Let us all keep sharing knowledge and spread the word.

***
<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `263` &nbsp;&nbsp;|&nbsp;&nbsp; 61 &nbsp;&nbsp;|&nbsp;&nbsp; 34 &nbsp;&nbsp;|&nbsp;&nbsp; 28 &nbsp;&nbsp;|
|&nbsp;&nbsp; `264` &nbsp;&nbsp;|&nbsp;&nbsp; 50 &nbsp;&nbsp;|&nbsp;&nbsp; 34 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|
|&nbsp;&nbsp; `265` &nbsp;&nbsp;|&nbsp;&nbsp; 54 &nbsp;&nbsp;|&nbsp;&nbsp; 32 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|
|&nbsp;&nbsp; `266` &nbsp;&nbsp;|&nbsp;&nbsp; 55 &nbsp;&nbsp;|&nbsp;&nbsp; 29 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|
|&nbsp;&nbsp; `267` &nbsp;&nbsp;|&nbsp;&nbsp; 50 &nbsp;&nbsp;|&nbsp;&nbsp; 27 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `263` &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 79 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `264` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 66 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|
|&nbsp;&nbsp; `265` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 52 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `266` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 53 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `267` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 58 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (2478)
     2. Ruby       (678)
     3. Haskell    (660)
     4. Rust       (622)
     5. Lua        (598)
     6. C          (534)
     7. C++        (504)
     8. JavaScript (406)
     9. Go         (357)
    10. BQN        (332)

<br>

### Blogs with Creative Title
***

#### 1. [Every Product Counts](https://raku-musings.com/every-product-counts.html) by Arne Sommer.
#### 2. [Positively Perl Street](https://dev.to/boblied/pwc-267-positively-perl-street-5390) by Bob Lied.
#### 3. [Lines and Signs](https://github.sommrey.de/the-bears-den/2024/05/03/ch-267.html) by Jorg Sommrey.
#### 4. [Signs Count](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-267/challenge-267/matthias-muth#readme) by Matthias Muth.
#### 5. [It’s the Product Line Sign that Counts](https://packy.dardan.com/b/Ko) by Packy Anderson.
#### 6. [Product lines](http://ccgi.campbellsmiths.force9.co.uk/challenge/267) by Peter Campbell Smith.
#### 7. [The Line is the Sign That Your Product Counts](https://blog.firedrake.org/archive/2024/05/The_Weekly_Challenge_267__The_Line_is_the_Sign_That_Your_Product_Counts.html) by Roger Bell_West.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 37,937 (`+102`)
#### 2. Pull Requests: 10,029 (`+38`)
#### 3. Contributors: 244 (`+1`)
#### 4. Fork: 308
#### 5. Stars: 171

<br>

## SPONSOR {#SPONSOR}
***

With start of `Week #268`, we have a new sponsor `Lance Wicks` for the entire year `2024`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 267](/blog/recap-challenge-267)** by `Mohammad Sajid Anwar`.

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

[**Princy Mangla**](https://github.com/princyym), Computer Science aspirant and `Perl` hacker from `India`.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}
***

Please check out the guest contributions for the [**Week #267**](/blog/guest-contribution/#267).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Magic Number {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given two arrays of integers of same size, `@x` and `@y`.

Write a script to find the magic number that when added to each elements of one of the array gives the second array. Elements order is not important.

#### Example 1

    Input: @x = (3, 7, 5)
           @y = (9, 5, 7)
    Output: 2

    The magic number is 2.
    @x = (3, 7, 5)
       +  2  2  2
    @y = (5, 9, 7)

#### Example 2

    Input: @x = (1, 2, 1)
           @y = (5, 4, 4)
    Output: 3

    The magic number is 3.
    @x = (1, 2, 1)
       +  3  3  3
    @y = (5, 4, 4)

#### Example 3

    Input: @x = (2)
           @y = (5)
    Output: 3

<br>

## Task 2: Number Game {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given an array of integers, `@ints`, with even number of elements.

Write a script to create a new array made up of elements of the given array. Pick the two smallest integers and add it to new array in decreasing order i.e. high to low. Keep doing until the given array is empty.

#### Example 1

    Input: @ints = (2, 5, 3, 4)
    Output: (3, 2, 5, 4)

    Round 1: we picked (2, 3) and push it to the new array (3, 2)
    Round 2: we picked the remaining (4, 5) and push it to the new array (5, 4)

#### Example 2

    Input: @ints = (9, 4, 1, 3, 6, 4, 6, 1)
    Output: (1, 1, 4, 3, 6, 4, 9, 6)

#### Example 3

    Input: @ints = (1, 2, 2, 3)
    Output: (2, 1, 3, 2)

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 12th May 2024**.

***
