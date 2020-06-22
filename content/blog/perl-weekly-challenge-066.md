---
title: "Perl Weekly Challenge - 066"
date: 2020-06-22T00:00:00+00:00
description: "Perl Weekly Challenge - 066"
type: post
image: images/blog/pwc-base.svg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

## HEADLINES

***

The **week #065** started on a happy note when I received the [contribution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-065/ash/raku/ch-1.raku) by **Andrew Shitov**. He doesn't need an introduction, does he? He even [blogged](https://andrewshitov.com/2020/06/15/raku-daily-skill-builders/) about his contribution. On a serious note, I got the sense that most of the **Team PWC** found the task **Palindrome Partition** very confusing. I must admit, I also realised when I solved the task myself. I noticed there are more solutions than what I thought initially. I would like to apologise for any inconvenience. I would like to suggest if you ever come across task with missing bits then please feel free to make sensible assumption and deal with the task. Don't forget to document your solution appropriately.

I am not sure if you have noticed the latest trend among the **Team PWC**. It is the love for **Live Coding** video. Inspired by **Richard Park**, I have done second week on the trot. I was pleasantly surprised to see **E. Choroba** also gave it a go. I would love to see many more sharing video contributions.

#### [Task #1: Digits Sum](https://www.youtube.com/watch?v=jKhynykjxRI) by E. Choroba.
#### [Task #1: Digits Sum](https://www.youtube.com/watch?v=m2tTUrq1YPg) by Mohammad S Anwar.
#### [Task #2: Palindrom Partition](https://www.youtube.com/watch?v=eM1DuYYo1rs) by Mohammad S Anwar.

and **[APL solution](https://www.youtube.com/watch?v=qXda8_AJWQc)** by Richard Park.

The **week #066** is going to be very busy week not because of weekly challenge but **[Conference in the Cloud](https://tpc20cic.sched.com/)** taking away 3 days of the week. I am looking forward to the event. I have already bought the ticket and booked 3 days off from work. So far, I always gave a talk every time I attend a conference. This time, I gave it a miss because of lack of time for preparation. I was hoping one of **Team PWC** would share his/her experience with the weekly challenge. Unfortunately it is too late to submit a talk proposal. However there is still time for lightning talk. Even if you have never given a talk before, **5 minutes** lightning talk should be good start, in my humble opinion. Here is the [link](https://docs.google.com/forms/d/e/1FAIpQLSfoyYu-DEyEz83lNWWrDaMRR1UW8FRpOQEVE2Gv2by9_kMbbA/viewform) if you want to submit your proposal.

I would like to thank **Team PWC** members for kind words and appreciation. It means a world to me. I do get thank you note sometimes with the pull request, which is very pleasing, I must admit. In the recent [blog](http://blogs.perl.org/users/c_y_fung/2020/06/cys-take-on-pwc065.html) by **Cheok-Yin Fung**, I came to know about **Cheok-Yin** link to **Ladakh**. We (**Indian**) always have a good relationship with **Ladakhi**.

Last but not the least, I would like to thank each and every member for their support and encouragement.

## RECAP

***

Quick recap of the [**"Perl Weekly Challenge - 065"**](/blog/recap-challenge-065) by **Mohammad S Anwar**.

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

#### **Andrew Shitov**

Andrew is a Raku enthusiast since around 2000, an author of [a number of books](https://andrewshitov.com/2020/01/29/my-open-perl-6-and-raku-books/), and the organiser of a lot of [Perl and Raku events](http://yapcrussia.org/), including three [annual European conferences](https://perlcon.eu/about). Currently working on his new book [Creating a Compiler with Raku](https://andrewshitov.com/creating-a-compiler-with-raku/).

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please give it a try to an excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member **Saif Ahmed** of **Team PWC**.

## GUESTS

***

**Richard Park** shared solutions to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-065/richard-park/apl/ch-1.aplf) and  [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-065/richard-park/apl/ch-2.aplf) in **APL**.

**Ulrich Rieke** shared solution to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-065/ulrich-rieke/haskell/ch-1.hs) and [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-065/ulrich-rieke/haskell/ch-2.hs) in **Haskell**.

Please find out [**past solutions**](/blog/guest-contribution) by respected **guests**. Please do share your creative solutions in other languages.

<br>

***

## TASK #1 › Divide Integers
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)

***
<br>

You are given two integers `$M` and `$N`.

Write a script to divide the given two integers i.e. `$M / $N` without using multiplication, division and mod operator and return the floor of the result of the division.

## Example 1:

    Input: $M = 5, $N = 2
    Output: 2

## Example 2:

    Input: $M = -5, $N = 2
    Output: -3

## Example 3:

    Input: $M = -5, $N = -2
    Output: 2

<br>

***
## TASK #2 › Power Integers
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

<br>

You are given an integer `$N`.

Write a script to check if the given number can be expressed as **m<sup>n</sup>** where `m` and `n` are positive integers. Otherwise print 0.

## Example 1:

For given $N = 9, it should print 3<sup>2</sup> or `3^2`.

## Example 2:

For given $N = 45, it should print **0**.

***

Last date to submit the solution **23:59 (UK Time) Sunday 28th June 2020**.

***
