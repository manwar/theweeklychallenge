---
title: "The Weekly Challenge - 107"
date: 2021-04-05T00:00:00+00:00
description: "The Weekly Challenge - 107"
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
### 09. [TASK #1: Self-descriptive Numbers](#TASK1)
### 10. [TASK #2: List Methods](#TASK2)

<br>

## HEADLINES {#HEADLINES}
***
<br>

Finally we are now `2 years old` and we should start behaving like serious player now. Agree? I would like to keep the fun part alive associated with the weekly challenge. I urge everyone please don't restrict yourself to any rules. Please express yourself as you feel comfortable. As I always remind and encourage everyone to keep breaking the boundaries and share your experiences with the team and rest of the world.

### Am I missing anything?

Nope, I am not. I know it is time to declare the champion since today is the first Monday of the month. For the first ever, I announce a guest as a champion and he is none other than `Tyler Wardhaugh` himself. **Tyler** joined the team in the **Week #76** and has been one of main source of `Clojure` solutions.

### What else?

Well, this week we had 3 live video contributions, one from a very dear friend of mine, `Lance Wicks` and two from me (yes you heard correct). Well, I have had a little breather this week because of long weekend, thanks to Easter holiday and Bank holiday in England. I am currently working on another video to celebrate the `2 years` of the weekly challenge. Hopefully if everything goes as per the plan, I will make it public by next week.

<br>

### Lance Wicks: Maximum Gap
***

<iframe width="560" height="315" src="https://www.youtube.com/embed/E4Bwh-FVTns" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br><br>

### Mohammad Anwar: Maximum Gap
***

<iframe width="560" height="315" src="https://www.youtube.com/embed/h8NppRqAZaE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br><br>

### Mohammad Anwar: Fun Time
***

<iframe width="560" height="315" src="https://www.youtube.com/embed/o67LcSa2bC8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br><br>

Let us all welcome the new member `Peter Mayr`, an experienced **Perl** hacker from **Koln**. I wish him all the best.

Let us share some interesting stats from the [**GitHub repository**](https://github.com/manwar/perlweeklychallenge-club).

#### 1. Commits: 15,640 (+150)
#### 2. Pull Requests: 3,825 (+37)
#### 3. Contributors: 162 (+2)
#### 4. Fork: 204 (+2)
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

Quick recap of [**"The Weekly Challenge - 106"**](/blog/recap-challenge-106) by `Mohammad S Anwar`.

<br>

## PERL REVIEW {#PERLREVIEW}
***

Please check out **Perl** solutions review of the **["Perl Weekly Challenge - 104"](/blog/review-challenge-104)** by `Colin Crain`.

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

We have a new member [`Peter Mayr`](https://github.com/hatorikibble) from **Koln** joining the **Team PWC**.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the n excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}

***

Please checkout the guest contributions for the [Week #106](https://perlweeklychallenge.org/blog/guest-contribution/#106).

<br>

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

***
## TASK #1 › Self-descriptive Numbers {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org/)
***

Write a script to display the first three self-descriptive numbers. As per [wikipedia](https://en.wikipedia.org/wiki/Self-descriptive_number), the definition of `Self-descriptive Number` is

> In mathematics, a self-descriptive number is an integer m that in a given base b is b digits long in which each digit d at position n (the most significant digit being at position 0 and the least significant at position b−1) counts how many instances of digit n are in m.

For example:

     1210 is a four-digit self-descriptive number:

        position 0 has value 1 i.e. there is only one 0 in the number
        position 1 has value 2 i.e. there are two 1 in the number
        position 2 has value 1 i.e. there is only one 2 in the number
        position 3 has value 0 i.e. there is no 3 in the number

## Output

        1210, 2020, 21200

<br>

#### WARNING:
##### I realised just before the launch this task was also part of the week 43 and contributed by Laurent Rosenfeld. It is too late to change now. Feel free to share your previous solutions if you took part in the week 43 already. I should have been more carefull, sorry.

<br>

***
## TASK #2 › List Methods {#TASK2}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org/)
***

Write a script to list methods of a package/class.

## Example

    package Calc;

    use strict;
    use warnings;

    sub new { bless {}, shift; }
    sub add { }
    sub mul { }
    sub div { }

    1;

## Output

    BEGIN
    mul
    div
    new
    add

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 11th April 2021**.

***
