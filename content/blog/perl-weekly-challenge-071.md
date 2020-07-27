---
title: "Perl Weekly Challenge - 071"
date: 2020-07-27T00:00:00+00:00
description: "Perl Weekly Challenge - 071"
type: post
image: images/blog/pwc-base.svg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

## HEADLINES

***

Finally the wait is over, we found volunteer for **Raku Reviews**.

Any guess?

**Andrew Shitov** joined the team of **Raku Reviewers**. The best part is, he is doing **Live Video Reviews**, which is even more fun. I watched all his reviews so far, start to end. There are plenty to learn from just watching him review **Raku** solutions. He has already done for [**Week #066**](/blog/p6-review-challenge-066) and [**Week #069**](/blog/p6-review-challenge-069).

On Sunday afternoon, I saw a tweet from a friend of mine, **Lance Wicks**, about him doing **Live Video** taking part in the weekly challenge. Later he posted the [**YouTube Video**](https://www.youtube.com/watch?v=kGdDmdQmkRc). Highly Recommended. It is not the run of the mill attempt. In this video, he showed the true **TDD** approach.

Talking about **Live Video**, please find below the link to the videos of mine dealing with the weekly challenge in **Perl**.

#### [Perl Weekly Challenge - 070 (Task #1)](https://www.youtube.com/watch?v=sJyOV_o73zs)
#### [Perl Weekly Challenge - 070 (Task #2)](https://www.youtube.com/watch?v=el3ri9s1eDc)

<br>

If you want to check out past videos then please take a look at my **[YouTube Channel](https://www.youtube.com/channel/UCT91RkThBWByo1NL_M8R8Ig)**. Please do subscribe the channel if you don't want to miss new videos.

Also please don't forget to watch the **[live coding session](https://www.youtube.com/watch?v=TNBQYxtVnx4)** by **Richard Park**, the source of inspiration for me.

Last but not the least, I would like to thank each and every member for their support and encouragement.

## RECAP

***

Quick recap of the [**"Perl Weekly Challenge - 070"**](/blog/recap-challenge-070) by **Mohammad S Anwar**.

## PERL REVIEW

***

Please checkout **Perl** solutions review of the **["Perl Weekly Challenge - 069"](/blog/review-challenge-069)** by **Colin Crain**.

If you missed any past reviews then please checkout the [**collection**](/p5-reviews).

## RAKU REVIEW

***

Please checkout **Raku** solutions review of the **["Perl Weekly Challenge - 066"](/blog/p6-review-challenge-066)** and **["Perl Weekly Challenge - 069"](/blog/p6-review-challenge-069)** by **Andrew Shitov**.

If you missed any past reviews then please checkout the [**collection**](/p6-reviews).

## CHART

***

Please take a look at the [**charts**](/chart) showing interesting data.

I would like to thank every member of the team for their valuable suggestions. Please do share your experience with us.

## NEW MEMBERS

***

#### Bob Lied

>  I live in the US, near Chicago. I have been a software developer for nearly forty years. I had a C decade, a C++ decade, a Java decade, and now a Perl decade.

We have a private **Early Bird Club**, whose members have the privilege to check out the weekly challenge before **Monday**, the launch day. Not only that they get more time to work on the tasks. Joining is very easy, just drop me a line at <perlweeklychallenge@yahoo.com> and you are good to go.

<br>

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please give it a try to an excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member **Saif Ahmed** of **Team PWC**.

## GUESTS

***

**Arne Sommer** shared solutions to [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/arne-sommer/node/ch-2.js) in **Node**.

**Cheok-Yin Fung** shared solutions to [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/cheok-yin-fung/common-lisp/ch-2.lsp) in **Lisp**.

**Mohammad S Anwar** shared solution to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/mohammad-anwar/swift/ch-1.swift) in **Swift**.

**Ulrich Rieke** shared solution to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/ulrich-rieke/cpp/ch-1.cpp) in **C++**.

**Walt Mankowski** shared solutions to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/walt-mankowski/c/ch-1.c) and [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/walt-mankowski/c/ch-2.c) in **C**.

**Walt Mankowski** shared solutions to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/walt-mankowski/python/ch-1.py) and [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/walt-mankowski/python/ch-2.py) in **Python**.

Please find out [**past solutions**](/blog/guest-contribution) by respected **guests**. Please do share your creative solutions in other languages.

***
## TASK #1 › Peak Element
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given positive integer `$N` (>1).

Write a script to create an array of size `$N` with random unique elements between `1` and `50`.

In the end it should print `peak elements` in the array, if found.

> An array element is called peak if it is bigger than it's neighbour.

## Example 1

#####    Array: [ 18, 45, 38, 25, 10, 7, 21, 6, 28, 48 ]
#####     Peak: [ 48, 45, 21 ]

## Example 2

#####    Array: [ 47, 11, 32, 8, 1, 9, 39, 14, 36, 23 ]
#####     Peak: [ 47, 32, 39, 36 ]

<br>

***
## TASK #2 › Trim Linked List
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given a singly linked list and a positive integer `$N` (>0).

Write a script to remove the `$Nth` node from the end of the linked list and print the linked list.

If `$N` is greater than the size of the linked list then remove the first node of the list.

**NOTE:** Please use pure linked list implementation.

## Example

#####    Given Linked List: 1 -> 2 -> 3 -> 4 -> 5

#####    when $N = 1
#####    Output: 1 -> 2 -> 3 -> 4

#####    when $N = 2
#####    Output: 1 -> 2 -> 3 -> 5

#####    when $N = 3
#####    Output: 1 -> 2 -> 4 -> 5

#####    when $N = 4
#####    Output: 1 -> 3 -> 4 -> 5

#####    when $N = 5
#####    Output: 2 -> 3 -> 4 -> 5

#####    when $N = 6
#####    Output: 2 -> 3 -> 4 -> 5

***

Last date to submit the solution **23:59 (UK Time) Sunday 2nd August 2020**.

***
