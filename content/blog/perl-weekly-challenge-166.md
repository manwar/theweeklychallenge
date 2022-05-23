---
title: "The Weekly Challenge - 166"
date: 2022-05-23T00:00:00+00:00
description: "The Weekly Challenge - 166"
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
### 09. [TASK #1: Hexadecimal Words](#TASK1)
### 10. [TASK #2: K-Directory Diff](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to yet another fun `Week #166`, thanks to the exciting tasks by `Ryan Thompson`.

Lets us welcome new member, `Roman Kotelnikov` with his guest contributions in [**J**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-165/wg-romank/j).

Talking about guest contributions, this week we had contributions in [**TypeScript**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-165/julien-fiegehenn/typescript) by `Julien Fiegehenn`.

I was pleasantly surprised to see [**contributions**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-165/saiftynet/perl) by `Saif Ahmed`, our very [**Champion of The Weekly Challenge**](https://theweeklychallenge.org/blog/meet-the-champion-2020-02) after a long break.

Well, we had another [**Champion of The Weekly Challenge**](https://theweeklychallenge.org/blog/meet-the-champion-2020-01), `Wanderdoc`, sharing the solutions in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-165/wanderdoc/perl) after the break.

Good luck for the next challenge.

<br>

### Blogs with Creative Title
***

#### 1. [Doubly Scalable](https://raku-musings.com/doubly-scalable.html) by Arne Sommer.
#### 2. [straight through the point!](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-165/james-smith#readme) by James Smith.
#### 3. [Dots, lines and whatever fits best](https://pjcs-pwc.blogspot.com/2022/05/dots-lines-and-whatever-fits-best.html) by Peter Campbell Smith.
#### 4. [Scaling the Fits](https://blog.firedrake.org/archive/2022/05/The_Weekly_Challenge_165__Scaling_the_Fits.html) by Roger Bell_West.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 25,363 (+131)
#### 2. Pull Requests: 6,138 (+31)
#### 3. Contributors: 195 (+2)
#### 4. Fork: 248
#### 5. Stars: 132

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2022. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2022. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 165](/blog/recap-challenge-165)** by `Mohammad S Anwar`.

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

New guest `Roman Kotelnikov` joined the `Team PWC`.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}
***

Please checkout the guest contributions for the [**Week #165**](/blog/guest-contribution/#165).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Hexadecimal Words {#TASK1}
##### **Submitted by:** [Ryan J Thompson](https://ry.ca)
***

As an old systems programmer, whenever I needed to come up with a 32-bit number, I would reach for the tired old examples like `0xDeadBeef` and `0xC0dedBad`. I want more!

Write a program that will read from a dictionary and find **2- to 8-letter words** that can be "spelled" in hexadecimal, *with* the addition of the following letter substitutions:

 * `o` ⟶ `0` (e.g., `0xf00d` = **"food"**)
 * `l` ⟶ `1`
 * `i` ⟶ `1`
 * `s` ⟶ `5`
 * `t` ⟶ `7`

You can use your own dictionary or you can simply open `../../../data/dictionary.txt` (relative to your script's location in our [GitHub repository](https://github.com/manwar/perlweeklychallenge-club)) to access the dictionary of common words from [Week #161](https://theweeklychallenge.org/blog/perl-weekly-challenge-161/).

### Optional Extras (for an `0xAddedFee`, of course!)

 1. Limit the number of "special" letter substitutions in any one result to keep that result at least somewhat comprehensible. (`0x51105010` is an actual example from my sample solution you may wish to avoid!)

 2. Find *phrases* of words that total 8 characters in length (e.g., `0xFee1Face`), rather than just individual words.

<br>

## Task 2: K-Directory Diff {#TASK2}
##### **Submitted by:** [Ryan J Thompson](https://ry.ca)
***

Given a few **(three** or more) directories (non-recursively), display a **side-by-side difference** of **files that are missing** from at least one of the directories. Do not display files that exist in every directory.

Since the task is non-recursive, if you encounter a subdirectory, append a `/`, but otherwise treat it the same as a regular file.

### Example

Given the following directory structure:

```type=sh
dir_a:
Arial.ttf  Comic_Sans.ttf  Georgia.ttf  Helvetica.ttf  Impact.otf  Verdana.ttf  Old_Fonts/

dir_b:
Arial.ttf  Comic_Sans.ttf  Courier_New.ttf  Helvetica.ttf  Impact.otf  Tahoma.ttf  Verdana.ttf

dir_c:
Arial.ttf  Courier_New.ttf  Helvetica.ttf  Impact.otf  Monaco.ttf  Verdana.ttf
```

The output should look similar to the following:

```
dir_a          | dir_b           | dir_c
-------------- | --------------- | ---------------
Comic_Sans.ttf | Comic_Sans.ttf  |
               | Courier_New.ttf | Courier_New.ttf
Georgia.ttf    |                 |
               |                 | Monaco.ttf
Old_Fonts/     |                 |
               | Tahoma.ttf      |
```

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 29th May 2022**.

***
