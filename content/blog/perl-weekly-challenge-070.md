---
title: "Perl Weekly Challenge - 070"
date: 2020-07-20T00:00:00+00:00
description: "Perl Weekly Challenge - 070"
type: post
image: images/blog/pwc-base.svg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

## HEADLINES

***

**Colin Crain** has been helping with **Perl** reviews since **Week #065**. I would like to thank him for all the hard work. I liked the new layout he came up for the last review. It is different from others. I am not sure about others but I always look forward to review every week. We are still looking for helping hands for **Raku** reviews. Please let us know <perlweeklychallenge@yahoo.com> if you have spare time to help us.

This week, I managed to do the live coding sessions for **Week #068** and **Week #069** in one sitting. It was tiring at the end but fun to watch my own video. Please find below the link to the videos.

#### [Perl Weekly Challenge - 068 (Task #1)](https://www.youtube.com/watch?v=_EAMRJweK74)
#### [Perl Weekly Challenge - 068 (Task #2)](https://www.youtube.com/watch?v=49sXHDZpQnU)
#### [Perl Weekly Challenge - 069 (Task #1)](https://www.youtube.com/watch?v=GZNgsB6Bplc)
#### [Perl Weekly Challenge - 069 (Task #2)](https://www.youtube.com/watch?v=Sp7dko3Q5sQ)

<br>

If you want to check out past videos then please take a look at my **[YouTube Channel](https://www.youtube.com/channel/UCT91RkThBWByo1NL_M8R8Ig)**. Please do subscribe the channel if you don't want to miss new videos.

Also don't forget to watch the **[live coding session](https://www.youtube.com/watch?v=GN3nHJzF-qA)** by **Richard Park**, the source of inspiration for me.

Last but not the least, I would like to thank each and every member for their support and encouragement.

## RECAP

***

Quick recap of the [**"Perl Weekly Challenge - 069"**](/blog/recap-challenge-069) by **Mohammad S Anwar**.

## PERL REVIEW

***

Please checkout **Perl** solutions review of the **["Perl Weekly Challenge - 068"](/blog/review-challenge-068)** by **Colin Crain**.

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

<br>

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please give it a try to an excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member **Saif Ahmed** of **Team PWC**.

## GUESTS

***

**Andrew Shitov** shared solution to [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/ash/cpp/ch-2.cpp) in **C++**.

**Richard Park** shared solutions to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/richard-park/apl/ch-1.aplf) and  [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/richard-park/apl/ch-2.aplf) in **APL**.

**Ulrich Rieke** shared solution to [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/ulrich-rieke/cpp/ch-2.cpp) in **C++**.

**Walt Mankowski** shared solutions to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/walt-mankowski/c/ch-1.c) and [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/walt-mankowski/c/ch-2.c) in **C**.

**Walt Mankowski** shared solutions to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/walt-mankowski/python/ch-1.py) and [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-069/walt-mankowski/python/ch-2.py) in **Python**.

Please find out [**past solutions**](/blog/guest-contribution) by respected **guests**. Please do share your creative solutions in other languages.

***
## TASK #1 › Character Swapping
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given a string `$S` of size `$N`.

You are also given swap count `$C` and offset `$O` such that $C >= 1, $O >= 1, $C <= $O and $C + $O <= $N.

<br>

#### UPDATE: 2020-07-20 16:10:00
#### Pete Houston suggested to put additional constraint i.e. `$C <= $O`. He presented the use case `$S = 'abcd'`, `$C = 2`, `$O = 1`.

<br>

Write a script to perform character swapping like below:

    $S[ 1 % $N ] <=> $S[ (1 + $O) % $N ]
    $S[ 2 % $N ] <=> $S[ (2 + $O) % $N ]
    $S[ 3 % $N ] <=> $S[ (3 + $O) % $N ]
    ...
    ...
    $S[ $C % $N ] <=> $S[ ($C + $O) % $N ]

## Example 1

    Input:
        $S = 'perlandraku'
        $C = 3
        $O = 4

    Character Swapping:
        swap 1: e <=> n = pnrlaedraku
        swap 2: r <=> d = pndlaerraku
        swap 3: l <=> r = pndraerlaku

    Output:
        pndraerlaku

***
## TASK #2 › Gray Code Sequence
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given an integer `2 <= $N <= 5`.

Write a script to generate `$N-bit` [gray code sequence](https://www.tutorialspoint.com/what-is-gray-code).

## 2-bit Gray Code Sequence

    [0, 1, 3, 2]

To generate the 3-bit Gray code sequence from the 2-bit Gray code sequence, follow the step below:

    2-bit Gray Code sequence
    [0, 1, 3, 2]

    Binary form of the sequence
    a) S1 = [00, 01, 11, 10]

    Reverse of S1
    b) S2 = [10, 11, 01, 00]

    Prefix all entries of S1 with '0'
    c) S1 = [000, 001, 011, 010]

    Prefix all entries of S2 with '1'
    d) S2 = [110, 111, 101, 100]

    Concatenate S1 and S2 gives 3-bit Gray Code sequence
    e) [000, 001, 011, 010, 110, 111, 101, 100]

    3-bit Gray Code sequence
    [0, 1, 3, 2, 6, 7, 5, 4]

## Example

    Input: $N = 4

    Output: [0, 1, 3, 2, 6, 7, 5, 4, 12, 13, 15, 14, 10, 11, 9, 8]

***

Last date to submit the solution **23:59 (UK Time) Sunday 26th July 2020**.

***
