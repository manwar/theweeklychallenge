---
title: "Perl Weekly Challenge - 064"
date: 2020-06-08T00:00:00+00:00
description: "Perl Weekly Challenge - 064"
type: post
image: images/blog/pwc-base.svg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

## HEADLINES

***

Two recent tragedies really upset me the most, first the killing of **[George Floyd](https://en.wikipedia.org/wiki/George_Floyd)** and second the killing of **[pregnant elephant](https://www.theguardian.com/world/2020/jun/05/killing-of-elephant-with-explosive-laden-fruit-causes-outrage-in-india)** in India. **All Life Matters, including Black**. I try to keep my political views to select few and avoid sharing on social media. I hope I am not crossing the lines here.

The **Week #062** was the dullest week ever earlier but thanks to all **Team PWC** members, it is no longer the least contributions week. The following **Week #063** came with full force and looked very promising. It is very encouraging to see the energy among the members. So please keep it going and don't forget to have fun all along.

I made an appeal few weeks ago for the help to clear the backlogs of **Perl** and **Raku** solutions reviews. I don't expect one person to do it all. Even if you could do one that would be highly appreciated. Please pick a week and language of your choice. Once you have decided, please let us know before you start working on the reviews, so that no two persons work on the same week reviews. Please find the pending reviews weeks detail **[here](/challenges)**. Thanks for your assistance.

Last week, we declared **[Shahed Nooshmand](/blog/meet-the-champion-2020-05)** as **Champion of the Month**. I was pleasantly surprised to know that he is still a **student** and I must say, a **bright** student. Proud to have him in the team.

Last but not the least, I would like to thank each and every member for their support and encouragement.

## RECAP

***

Quick recap of the [**"Perl Weekly Challenge - 063"**](/blog/recap-challenge-063) by **Mohammad S Anwar**.

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

**Bartosz Jarzyna**, an experienced **Perl** hacker from **Lublin, Poland**, joined the **Team PWC**.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please give it a try to an excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member **Saif Ahmed** of **Team PWC**.

## GUESTS

***

**Richard Park** shared solutions to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-063/richard-park/apl/ch-1.aplf) and  [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-062/richard-park/apl/ch-2.aplf) in **APL**.

**Sangeet Kar** shared solutions to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-063/sangeet-kar/python/ch-1.py) and [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-063/sangeet-kar/python/ch-2.py) in **Python**.

**Ulrich Rieke** shared solution to [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-063/ulrich-rieke/cpp/ch-2.cpp) in **C++**.

Please find out [**past solutions**](/blog/guest-contribution) by respected **guests**. Please do share your creative solutions in other languages.

<br>

***

## TASK #1 › Minimum Sum Path
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
##### **Reviewed by:** [Ryan Thompson](https://ry.ca)

***
<br>

Given an *m* × *n* matrix with non-negative integers, write a script to find a path from top left to bottom right which minimizes the sum of all numbers along its path. You can only move either down or right at any point in time.

## Example

Input:

```perl
[ 1 2 3 ]
[ 4 5 6 ]
[ 7 8 9 ]
```

The minimum sum path looks like this:

```
1→2→3
    ↓
    6
    ↓
    9
```

Thus, your script could output: 21 ( 1 → 2 → 3 → 6 → 9 )

<br>

***

## TASK #2 › Word Break
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)

***
<br>

You are given a string `$S` and an array of words `@W`.

Write a script to find out if `$S` can be split into sequence of one or more words as in the given `@W`.

Print the all the words if found otherwise print 0.

## Example 1:

    Input:

    $S = "perlweeklychallenge"
    @W = ("weekly", "challenge", "perl")

    Output:

    "perl", "weekly", "challenge"

## Example 2:

    Input:

    $S = "perlandraku"
    @W = ("python", "ruby", "haskell")

    Output:

    0 as none matching word found.

***

Last date to submit the solution **23:59 (UK Time) Sunday 14th June 2020**.

***
