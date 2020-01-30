---
title: "Perl Weekly Challenge - 045"
date: 2020-01-29T00:00:00+00:00
description: "Perl Weekly Challenge - 045"
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

Last week had been the toughest week for me. My dad is now back home and doing well. Thanks each and every person for the best wishes. I know everything is messed up at the moment. I came back from **India** with throat infection and really bad cough. I am not fully recovered yet but still improving day-by-day. I would like to thank **Ryan Thompson** for doing **Perl** Review in my absence. There is going to be a short pause on **Raku** review, please bear with us, unless someone from the team volunteer to take this challenge for a short period.

Last but not the least, we woud like to thank each and every member for their support and encouragement.

***
***

## RECAP

***
***

Quick recap of the [**"Perl Weekly Challenge - 044"**](/blog/recap-challenge-044) by **Mohammad S Anwar**.

***
***

## PERL REVIEW

***
***

Please checkout **Perl** solutions review of the [**"Perl Weekly Challenge - 043"**](/blog/review-challenge-043) by **Ryan Thompson**.

If you missed any past reviews then please checkout the [**collection**](/p5-reviews).

***
***

## RAKU REVIEW

***
***

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

**Cheok-Yin Fung**, a **Perl** hacker from **Hong Kong** and **Jan Ole Kraft**, a **Raku** hacker,  joined the team last week. Check out current [**team**](/team) members.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

***
***

## GUESTS

***
***

**Darren Bottin** shared solution to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-044/darren-bottin/prolog/ch-1.pro) **Prolog**.

Please find out [**past solutions**](/blog/guest-contribution) by respected **guests**. Please do share your creative solutions in other languages.

***
***

## TASK #1

***
***

### Square Secret Code

The square secret code mechanism first removes any space from the original message. Then it lays down the message in a row of 8 columns. The coded message is then obtained by reading down the columns going left to right.

For example, the message is **"The quick brown fox jumps over the lazy dog"**.

Then the message would be laid out as below:

    thequick
    brownfox
    jumpsove
    rthelazy
    dog

The code message would be as below:

    tbjrd hruto eomhg qwpe unsl ifoa covz kxey

Write a script that accepts a message from command line and prints the equivalent coded message.

***
***

## TASK #2

***
***

### Source Dumper

Write a script that dumps its own source code. For example, say, the script name is **ch-2.pl** then the following command should returns nothing.

    $ perl ch-2.pl | diff - ch-2.pl

***
***

Last date to submit the solution **23:59 (UK Time) Sunday 2nd February 2020**.

***
***
