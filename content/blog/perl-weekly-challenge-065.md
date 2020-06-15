---
title: "Perl Weekly Challenge - 065"
date: 2020-06-15T00:00:00+00:00
description: "Perl Weekly Challenge - 065"
type: post
image: images/blog/pwc-base.svg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

## HEADLINES

***

Few days ago, **Colin Crain**, offered to do **Perl** review of the past challenges. A big **THANK YOU** from all of us. Soon we will have the fun of reading reviews. I am still looking for **Raku**, just a gentle reminder. It would be nice, if both kickstart together.

I have been hooked into **YouTube** video of live coding by **Richard Park**. It was **Richard** who first started sharing his **YouTube** video of live coding. Although I know nothing about **APL**, I still watch it every week. It is amazing how the **typing** and **thinking** blend together. If you fancy then please do checkout my **[YouTube Channel](https://www.youtube.com/channel/UCT91RkThBWByo1NL_M8R8Ig)**. I couldn't get my weekly blog done last week because of **YouTube** activities. However I promise to catch up in a day or two.

Last week, we were joined by 3 new members, **Craig**, **Richard Bains Hainsworth** and **Stephanie Stein**. Find out more about the new members down below. We welcome each of them and promise fun every week. There are plenty to keep you busy all week. Most of the time, I find one week is not enough to go through all the blogs and solutions. Since everything is safe in the **[GitHub repository](https://github.com/manwar/perlweeklychallenge-club)**, there is nothing to worry about. We can come back as and when we get time.

Last but not the least, I would like to thank each and every member for their support and encouragement.

## RECAP

***

Quick recap of the [**"Perl Weekly Challenge - 064"**](/blog/recap-challenge-064) by **Mohammad S Anwar**.

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

#### **Craig**

    I'm originally from London but now live in Tennessee and just started my career as a software engineer a few months ago

#### **Richard Bains Hainsworth**

    I was born in Uganda, schooled in the UK. My first experience with a computer - at Leeds University department close to my school, needed to have it's Fortran compiler loaded from paper tape. I've worked forty years in USSR/Russia, where I found Perl. Then I began following Perl6 aka Raku from the Appocalypse days. I have made tiny contributions to Pugs, Perl6 Roast, Perl6/Raku documentation.

    I have programmed in Fortran, Pascal, Basic, Snobol, Assembler, Forth, Java, Javascript, etc. But of them all, I preferred Perl, now Raku.

    Currently, I am setting up a **[ceramics studio](https://draigenwaith.wales/), and beginning work on a Cro based CMS.

#### **Stephanie Stein**

    I have no Perl experience at all, but I'm looking forward to learning! I know a little bit of Python, so I'm hoping that helps me to learn. I live in the Silicon Valley in California.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please give it a try to an excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member **Saif Ahmed** of **Team PWC**.

## GUESTS

***

**Leo Manfredi** shared solution to [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-064/manfredi/python/ch-2.py) in **Python**.

**Richard Park** shared solution to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-063/richard-park/apl/ch-1.aplf) in **APL**.

**Sangeet Kar** shared solutions to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-064/sangeet-kar/python/ch-1.py) and [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-064/sangeet-kar/python/ch-2.py) in **Python**.

Please find out [**past solutions**](/blog/guest-contribution) by respected **guests**. Please do share your creative solutions in other languages.

<br>

***

## TASK #1 › Digits Sum
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
##### **Reviewed by:** [Ryan Thompson](https://ry.ca)

***
<br>

You are given two positive numbers `$N` and `$S`.

Write a script to list all positive numbers having exactly `$N` digits where sum of all digits equals to `$S`.

## Example

    Input:
        $N = 2
        $S = 4

    Output:
        13, 22, 31, 40

<br>

***

## TASK #2 › Palindrome Partition
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
##### **Reviewed by:** [Ryan Thompson](https://ry.ca)

***
<br>

You are given a string `$S`. Write a script print all possible partitions that gives Palindrome. Return -1 if none found.

Please make sure, partition should not overlap. For example, for given string "abaab", the partition "aba" and "baab" would not be valid, since they overlap.

## Example 1

    Input: $S = 'aabaab'
    Ouput: 'aa', 'baab'

## Example 2

    Input: $S = 'abbaba'
    Output:
     There are 2 possible solutions.
     a) 'abba'
     b) 'bb', 'aba'

***

Last date to submit the solution **23:59 (UK Time) Sunday 21st June 2020**.

***
