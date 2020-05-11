---
title: "Perl Weekly Challenge - 060"
date: 2020-05-11T00:00:00+00:00
description: "Perl Weekly Challenge - 060"
type: post
image: images/blog/pwc-base.svg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

## HEADLINES

***

Last week, we had the pleasure to interview our **Champion** of the Perl Weekly Challenge, **Luca Ferrari**. Please check out the **[full interview](https://perlweeklychallenge.org/blog/meet-the-champion-2020-04/)**.

I noticed **Team PWC** members making constant noise, in a positive way, with regular blogs. To me personally, by reading blog, you not only get the story behind each solutions but the also the journey itself. Keep blogging and sharing knowledge.

I would like to thank **Team PWC** member **Richard Park** for introducing the amazing language **APL**. Although I know nothing about it but it seems cool the way symbols are used in the source code.

Last but not the least, I would like to thank each and every member for their support and encouragement.

## RECAP

***

Quick recap of the [**"Perl Weekly Challenge - 059"**](/blog/recap-challenge-059) by **Mohammad S Anwar**.

## PERL REVIEW

***

If you missed any past reviews then please checkout the [**collection**](/p5-reviews).

## RAKU REVIEW

***

Please checkout **Raku** solutions review of the **["Perl Weekly Challenge - 056"](/blog/p6-review-challenge-056)** and  **["Perl Weekly Challenge - 057"](/blog/p6-review-challenge-057)** by **Laurent Rosenfeld**.

If you missed any past reviews then please checkout the [**collection**](/p6-reviews).

## CHART

***

Please take a look at the [**charts**](/chart) showing interesting data.

I would like to thank every member of the team for their valuable suggestions. Please do share your experience with us.

## NEW MEMBERS

***

**Max Kossek**, an experience **Perl Hacker**, shared solutions to **["Perl Weekly Challenge - 001"](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-001/max-kossek/perl)**,  **["Perl Weekly Challenge - 005"](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-005/max-kossek/perl)**,  **["Perl Weekly Challenge - 007"](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-007/max-kossek/perl)**,  and  **["Perl Weekly Challenge - 008"](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-008/max-kossek/perl)**.

**Shawak**, from **Germany**, shared solution to [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-059/shawak/ruby/ch-2.rb) in **Ruby**.

**Sangeet Kar**, originally from India currently based in **Barcelona, Spain**, shared his first **[contributions](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-059/sangeet-kar/perl)** in **Perl**.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please give it a try to an excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member **Saif Ahmed** of **Team PWC**.

## GUESTS

***

**Leo Manfredi** shared solution to [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-059/manfredi/python/ch-2.py) in **Python**.

**Richard Park** shared solutions to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-059/richard-park/apl/ch-1.aplf) and [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-059/richard-park/apl/ch-2.aplf) in **APL**.

**Shawak** shared solution to [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-059/shawak/ruby/ch-2.rb) in **Ruby**.

Please find out [**past solutions**](/blog/guest-contribution) by respected **guests**. Please do share your creative solutions in other languages.

***

## TASK #1 › Excel Column
##### **Reviewed by:** [Ryan Thompson](https://ry.ca)

Write a script that accepts a number and returns the **Excel Column Name** it represents and vice-versa.

Excel columns start at **A** and increase lexicographically using the 26 letters of the English alphabet, **A**..**Z**. After **Z**, the columns pick up an extra "digit", going from **AA**, **AB**, etc., which could (in theory) continue to an arbitrary number of digits. In practice, Excel sheets are limited to 16,384 columns.

## Example

Input Number: 28
Output: AB

Input Column Name: AD
Output: 30

## TASK #2 › Find Numbers
##### **Reviewed by:** [Ryan Thompson](https://ry.ca)

Write a script that accepts list of positive numbers (`@L`) and two positive numbers `$X` and `$Y`.

The script should print all possible numbers made by concatenating the numbers from `@L`, whose length is exactly `$X` but value is less than `$Y`.

## Example

Input:

```perl
@L = (0, 1, 2, 5);
$X = 2;
$Y = 21;
```

Output:

`10, 11, 12, 15, 20`

***

Last date to submit the solution **23:59 (UK Time) Sunday 17th May 2020**.

***
