---
title: "Perl Weekly Challenge - 068"
date: 2020-07-06T00:00:00+00:00
description: "Perl Weekly Challenge - 068"
type: post
image: images/blog/pwc-base.svg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

## HEADLINES

***

Today is the first **Monday** of the **July 2020** and you guessed it correctly. It is time to announce the **Champion of the Month**. With great pleasure, we announce the Champion of last month, **Mark Anderson**, currently ranked **#027** with score of **122**. He joined the **Team PWC** in the **Week #018**. As of today, he has contributed **Perl (19)** and **Raku (42)**.

After a long gap, we have **[Perl](/blog/review-challenge-066)** and **[Raku](/blog/p6-review-challenge-058)** reviews together in one week. I would like to thank **Colin Crain** and **Laurent Rosenfeld** for the quality work they have done. We are still looking for volunteer to help with **Raku**. I don't expect one person to do it all. Even if you do one or two that would be a great help to clear the backlog,

A gentle reminder about **Early Bird Club**, if you want to check out the weekly challenge before **Monday** for whatever reason then please join the club. By joining the club, you get to review the task before it goes public. Also you get extra time to work on your solutions. Joining is very easy, just drop me a line at <perlweeklychallenge@yahoo.com> and that's it.

I don't know why but I keep adding more work for myself every now and then. As you must have noticed, I am currently hooked into **Live Coding** fun. I find it hard to find the time where I can be left alone to do the video. Mostly it is late night, not sure if you noticed the system time in the video. I hate doing late night but I am left with no choice. **Monday** to **Friday** daytime belongs to the regular day job. Evening time is for **Family**. So you see, either I do it late night or do it during weekends. But most weekends, I am busy with the admin work of **Perl Weekly Challenge**. Anyway, here is my videos for the two tasks. Please don't forget to subscribe my **[YouTube Channel](https://www.youtube.com/channel/UCT91RkThBWByo1NL_M8R8Ig)** if you like the viodes,

#### a) [**Number Combinations**](https://www.youtube.com/watch?v=fZWOA3gfs9k)
#### b) [**Letter Phone**](https://www.youtube.com/watch?v=Ojx-oSqOJMw)

Also have a look at **Richard Park**'s **[video](https://www.youtube.com/watch?v=tSQOOzyD4Qw)**, the source of inspiration for me,

Last but not the least, I would like to thank each and every member for their support and encouragement.

## RECAP

***

Quick recap of the [**"Perl Weekly Challenge - 067"**](/blog/recap-challenge-067) by **Mohammad S Anwar**.

## PERL REVIEW

***

Please checkout **Perl** solutions review of the **["Perl Weekly Challenge - 066"](/blog/review-challenge-066)** by **Colin Crain**.

If you missed any past reviews then please checkout the [**collection**](/p5-reviews).

## RAKU REVIEW

***

Please checkout **Raku** solutions review of the **["Perl Weekly Challenge - 058"](/blog/p6-review-challenge-058)** by **Laurent Rosenfeld**.

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

**Leo Manfredi** shared solution to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/manfredi/python/ch-1.py) in **Python**.

**Richard Park** shared solutions to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/richard-park/apl/ch-1.aplf) and  [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/richard-park/apl/ch-2.aplf) in **APL**.

**Ulrich Rieke** shared solution to [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/ulrich-rieke/cpp/ch-2.cpp) in **C++**.

**Walt Mankowski** shared solutions to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/walt-mankowski/python/ch-1.py) and [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/walt-mankowski/python/ch-2.py) in **Python**.

**Wanderdoc** shared solutions to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/wanderdoc/R/ch-1.R) and [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/wanderdoc/R/ch-2.R) in **R**.

Please find out [**past solutions**](/blog/guest-contribution) by respected **guests**. Please do share your creative solutions in other languages.

***
## TASK #1 › Zero Matrix
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given a matrix of size `M x N` having only `0s` and `1s`.

Write a script to set the entire row and column to `0` if an element is `0`.

## Example 1

    Input: [1, 0, 1]
           [1, 1, 1]
           [1, 1, 1]

    Output: [0, 0, 0]
            [1, 0, 1]
            [1, 0, 1]

## Example 2

    Input: [1, 0, 1]
           [1, 1, 1]
           [1, 0, 1]

    Output: [0, 0, 0]
            [1, 0, 1]
            [0, 0, 0]

***
## TASK #2 › Reorder List
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given a singly linked list `$L` as below:

    L0 →  L1 →  … →  Ln-1 →  Ln

Write a script to reorder list as below:

    L0 →  Ln →  L1 →  Ln-1 →  L2 →  Ln-2 →

You are **ONLY** allowed to do this in-place without altering the nodes’ values.

## Example

    Input:  1 →  2 →  3 →  4
    Output: 1 →  4 →  2 →  3

***

Last date to submit the solution **23:59 (UK Time) Sunday 12th July 2020**.

***
