---
title: "Perl Weekly Challenge - 067"
date: 2020-06-29T00:00:00+00:00
description: "Perl Weekly Challenge - 067"
type: post
image: images/blog/pwc-base.svg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

## HEADLINES

***

The highlight of last week was mostly the much awaited event **"Conference in the Cloud"**. I must admit, I enjoyed every bit. It was nice to see so many familiar names from **Team PWC** in the audience. Among many talks, I was really happy to watch **Damian Conway** live for the first time.

**Colin Crain** final joined the team of reviewers and submitted first **[Perl Review](/blog/review-challenge-065)**. Please do share your comments and suggestions.

I continued my live coding sessions and shared the following **YouTube** videos:

#### a) [**Divide Integers**](https://www.youtube.com/watch?v=8sq2Aocabpk)
#### b) [**Power Integers**](https://www.youtube.com/watch?v=_NZHQSvFYcQ)

<br>

Thanks to the Chief Editor of [**Perl Weekly newsletter**](https://perlweekly.com/archive/465.html), **Gabor Szabo**, I now have **67 subscribers** to my [**YouTube channel**](https://studio.youtube.com/channel/UCT91RkThBWByo1NL_M8R8Ig). Prior to that, I had just **20 subscribers**. So thank you **Gabor Szabo**. We got a new member because of these **YouTube** videos. **GitHub** user **3ter** joined us last week.

![3ter](/images/blog/pwc-67-1.png)

<br>

Last but not the least, I would like to thank each and every member for their support and encouragement.

## RECAP

***

Quick recap of the [**"Perl Weekly Challenge - 066"**](/blog/recap-challenge-066) by **Mohammad S Anwar**.

## PERL REVIEW

***

Please checkout **Perl** solutions review of the **["Perl Weekly Challenge - 065"](/blog/review-challenge-065)** by **Colin Crain**.

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

### **3ter**

**GitHub** user **[3ter](https://github.com/3ter)** joined the **Team PWC**.

### **Niels van Dijke**

I remember I started using Perl on a UNIX server in 1994 version 4.036. Didn't like it that much coming from a awk/grep/etc. scripting environment. Because I was assigned to another project for a while I rediscovered Perl at a 5.x version in 1995-ish. Much better! Used it for a while on Windows NT 4 workstation with 16MiB RAM. Oh boy the good old days where people seriously struggled with ASCII files of 4-8MiB!
Since 1995 Perl has been my swish army knife. I've used Perl for instance for:

1) Sysadmin tasks
2) Web front-end development (CGI, mod_perl, Apache::ASP)
3) Apache mod_perl custom authentication and authorization modules
4) PostgreSQL stored procedures
5) Network management tools (template techniques, parallelism, configuration audits, etc.)

Because I work for a commercial company my CPAN activity has been really low. It was not always clear to me how much OSS principles were embraced by senior management.

I use computers since I was 11 years old. My dad borrowed a 'Commodore PET' from work. I remember I was able to code 'tic-tac-toe' in BASIC the week we had it at home. My first own computer was a MSX2. I have studied 'Technical Computer Science' in The Netherlands (design hardware and write operation system device drivers etc.). Besides notebooks I've always build by own desktop PCs. A new one based on a AMD Ryzen 3700x CPU will be ordered shortly in parts.

Besides Perl I've written software in: (several sorts of) BASIC, PASCAL, FORTRAN, Assembler (6800, 68000, z80, x86), C, C++, awk, Korn/bash shell, Javascript, SQL and Power Shell.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please give it a try to an excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member **Saif Ahmed** of **Team PWC**.

## GUESTS

***

**Steven Wilson** shared solution to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/steven-wilson/rust/ch-1.rs) in **Rust**.

**Walt Mankowski** shared solutions to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/walt-mankowski/python/ch-1.py) and [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/walt-mankowski/python/ch-2.py) in **Python**.

Please find out [**past solutions**](/blog/guest-contribution) by respected **guests**. Please do share your creative solutions in other languages.

<br>

***

## TASK #1 › Number Combinations
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)

***
<br>

You are given two integers `$m` and `$n`. Write a script print all possible combinations of `$n` numbers from the list 1 2 3 ... $m.

Every combination should be sorted i.e. [2,3] is valid combination but [3,2] is not.

## Example:

      Input: $m = 5, $n = 2

      Output: [ [1,2], [1,3], [1,4], [1,5], [2,3], [2,4], [2,5], [3,4], [3,5], [4,5] ]

<br>

***
## TASK #2 › Letter Phone
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

<br>

You are given a digit string `$S`. Write a script to print all possible letter combinations that the given digit string could represent.

![Letter Phone](/images/blog/keypad.png)

<br>

## Example:

      Input: $S = '35'

      Output: ["dj", "dk", "dl", "ej", "ek", "el", "fj", "fk", "fl"].

***

Last date to submit the solution **23:59 (UK Time) Sunday 5th July 2020**.

***
