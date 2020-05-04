---
title: "Perl Weekly Challenge - 059"
date: 2020-05-04T00:00:00+00:00
description: "Perl Weekly Challenge - 059"
type: post
image: images/blog/pwc-base.svg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

## HEADLINES

***

Today is the first **Monday** of the month and time to declare the winner of last month **Champion of the Weekly Challenge**. With great pleasure we announce **Luca Ferrari** from **Italy** as the winner of **April 2020**. Congratulations Luca. He has been a valuable member of the **Team PWC**. Looking at his contributions below, he always dealt with **Raku** and regularly blogged as well. He is currently ranked **#026** in the **Centurion Club**. He hasn't missed a week since he joined the team, well done.

        Perl Weekly Challenge - 043: Raku (2)
        Perl Weekly Challenge - 044: Raku (2)
        Perl Weekly Challenge - 045: Raku (2), Blog (1)
        Perl Weekly Challenge - 046: Raku (2), Blog (1)
        Perl Weekly Challenge - 047: Raku (2), Blog (2)
        Perl Weekly Challenge - 048: Raku (2), Blog (2)
        Perl Weekly Challenge - 049: Raku (2), Blog (2)
        Perl Weekly Challenge - 050: Raku (2), Blog (2)
        Perl Weekly Challenge - 051: Raku (2), Blog (2)
        Perl Weekly Challenge - 052: Raku (2), Blog (2)
        Perl Weekly Challenge - 053: Raku (2), Blog (2)
        Perl Weekly Challenge - 054: Raku (2)
        Perl Weekly Challenge - 055: Raku (2), Blog (2)
        Perl Weekly Challenge - 056: Raku (2), Blog (2)
        Perl Weekly Challenge - 057: Raku (2), Blog (2)
        Perl Weekly Challenge - 058: Raku (2), Blog (2)

Last week, **Jorg Sommrey** from **Germany** joined the **Team PWC** and shared the solution to the **[Ordered Lineup](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-058/jo-37/perl/ch-2.pl)** task in **Perl**.

Last but not the least, I would like to thank each and every member for their support and encouragement.

## RECAP

***

Quick recap of the [**"Perl Weekly Challenge - 058"**](/blog/recap-challenge-058) by **Mohammad S Anwar**.

## PERL REVIEW

***

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

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please give it a try to an excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member **Saif Ahmed** of **Team PWC**.

## GUESTS

***

**Arne Sommer** shared solution to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-058/arne-sommer/bash/ch-1.sh) in **Bash**.

**Arne Sommer** shared solution to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-058/arne-sommer/php/ch-1.php) in **PHP**.

**Arne Sommer** shared solution to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-058/arne-sommer/python/ch-1.py) in **Python**.

**Arne Sommer** shared solution to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-058/arne-sommer/ruby/ch-1.rb) in **Ruby**.

**Leo Manfredi** shared solution to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-058/manfredi/bash/ch-1.sh) in **Bash**.

**Leo Manfredi** shared solution to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-058/manfredi/python/ch-1.py) in **Python**.

**Lubos Kolouch** shared solutions to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-058/lubos-kolouch/python/ch-1.py) in **Python**.

Please find out [**past solutions**](/blog/guest-contribution) by respected **guests**. Please do share your creative solutions in other languages.

## TASK #1 › Linked List

#### Reviewed by Ryan Thompson

***

You are given a linked list and a value *k*. Write a script to partition the linked list such that all nodes less than *k* come before nodes greater than or equal to *k*. Make sure you preserve the original relative order of the nodes in each of the two partitions.

For example:

Linked List: 1 → 4 → 3 → 2 → 5 → 2

*k* = 3

Expected Output: 1 → 2 → 2 → 4 → 3 → 5.

## TASK #2 › Bit Sum

#### Reviewed by Ryan Thompson

***

### Helper Function

For this task, you will most likely need a function f(*a,b*) which returns the count of different bits of binary representation of *a* and *b*.

For example, f(1,3) = 1, since:

Binary representation of 1 = 01

Binary representation of 3 = 11

There is only 1 different bit. Therefore the subroutine should return 1. Note that if one number is longer than the other in binary, the most significant bits of the smaller number are padded (i.e., they are assumed to be zeroes).

### Script Output

You script should accept *n* positive numbers. Your script should sum the result of f(*a,b*) for every pair of numbers given:

For example, given 2, 3, 4, the output would be **6**, since f(2,3) + f(2,4) + f(3,4) = 1 + 2 + 3 = 6

***

Last date to submit the solution **23:59 (UK Time) Sunday 10th May 2020**.

***
