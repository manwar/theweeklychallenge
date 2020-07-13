---
title: "Perl Weekly Challenge - 069"
date: 2020-07-13T00:00:00+00:00
description: "Perl Weekly Challenge - 069"
type: post
image: images/blog/pwc-base.svg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

## HEADLINES

***

With three members joining **Team PWC**, we now have **173 members**. I welcome all of them with open arms. I would like to mention one member explicitly **Myoungjin Jeon**, why? He is someone who did **Perl** long time ago and currently a Chef by profession. What impressed me the most about him is that he never let his love for **Perl** die. I hope he finds the weekly challenge interesting to keep him going.

Apology for not doing **Live Coding** video for **"Perl Weekly Challenge - 068"**. I promise to do it together with next week challenge. In the meantime, if you want to watch past videos then please check out my **[YouTube Channel](https://www.youtube.com/channel/UCT91RkThBWByo1NL_M8R8Ig)**. If you like the videos then don't forget to subscribe the channel.

Last but not the least, I would like to thank each and every member for their support and encouragement.

## RECAP

***

Quick recap of the [**"Perl Weekly Challenge - 068"**](/blog/recap-challenge-068) by **Mohammad S Anwar**.

## PERL REVIEW

***

Please checkout **Perl** solutions review of the **["Perl Weekly Challenge - 067"](/blog/review-challenge-067)** by **Colin Crain**.

If you missed any past reviews then please checkout the [**collection**](/p5-reviews).

## RAKU REVIEW

***

If you missed any past reviews then please checkout the [**collection**](/p6-reviews).

## CHART

***

Please take a look at the [**charts**](/chart) showing interesting data.

I would like to thank every member of the team for their valuable suggestions. Please do share your experience with us.

## NEW MEMBERS

***

We have a private **Early Bird Club**, whose members have the privilege to check out the weekly challenge before **Monday**, the launch day. Not only that they get more time to work on the tasks. Joining is very easy, just drop me a line at <perlweeklychallenge@yahoo.com> and you are good to go.

### 1. Vinod Kumar Pal joined the team to learn **Perl**.

<br>

### 2. [Myoungjin Jeon](https://github.com/jeongoon), Perl enthusiast joined the team from Sydney, Australia.

>    I'm a Japanese chef. I used to write some tiny codes in **Perl** from 2002 to 201. They are only for personal study and curiosity. There are not so much about talking my background but I love free software and GNU/Linux and use them everyday.

<br>

### 3. [Simon Green](https://github.com/simongreen-net), Perl enthusiast joined the team from Sydney, Australia.

>    I first used **Perl** in 1995 at an ISP when you still had to explain to your parents what the Internet was. Since then I've used **Perl** as my main language at most jobs, although am using **Python** more recently.

<br>

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please give it a try to an excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member **Saif Ahmed** of **Team PWC**.

## GUESTS

***

**Richard Park** shared solutions to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-068/richard-park/apl/ch-1.aplf) and  [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-068/richard-park/apl/ch-2.aplf) in **APL**.

**Ulrich Rieke** shared solution to [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-068/ulrich-rieke/cpp/ch-2.cpp) in **C++**.

**Ulrich Rieke** shared solution to [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-068/ulrich-rieke/haskell/ch-2.hs) in **Haskell**.

**Walt Mankowski** shared solutions to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-068/walt-mankowski/python/ch-1.py) and [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-068/walt-mankowski/python/ch-2.py) in **Python**.

Please find out [**past solutions**](/blog/guest-contribution) by respected **guests**. Please do share your creative solutions in other languages.

***
## TASK #1 › Strobogrammatic Number
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

A strobogrammatic number is a number that looks the same when looked at upside down.

You are given two positive numbers `$A` and `$B` such that `1 <= $A <= $B <= 10^15`.

Write a script to print all strobogrammatic numbers between the given two numbers.

## Example

    Input: $A = 50, $B = 100
        Output: 69, 88, 96

***
## TASK #2 › 0/1 String
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

A `0/1 string` is a string in which every character is either 0 or 1.

Write a script to perform `switch` and `reverse` to generate `S30` as described below:

    switch:

    Every 0 becomes 1 and every 1 becomes 0. For example, “101” becomes “010”.

    reverse:

    The string is reversed. For example, "001” becomes “100”.

<br>

### UPDATE (2020-07-13 17:00:00):

It was brought to my notice that generating `S1000` string would be nearly impossible. So I have decided to lower it down to `S30`. Please follow the rule as below:

    S0 = “”
    S1 = “0”
    S2 = “001”
    S3 = “0010011”
    …
    SN = SN-1 + “0” + switch(reverse(SN-1))

***

Last date to submit the solution **23:59 (UK Time) Sunday 19th July 2020**.

***
