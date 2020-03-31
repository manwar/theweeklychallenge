---
title: "Perl Weekly Challenge - 054"
date: 2020-03-29T00:00:00+00:00
description: "Perl Weekly Challenge - 054"
type: post
image: images/blog/pwc-base.svg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---
***
***

## HEADLINES

***
***

With great pleasure, I would like to announce our inhouse **Raku** reviewer, **Laurent Rosenfeld**, is back after a short break. Based on the past record, I am sure, we would soon have all pending **Raku** reviews done **one-by-one**. I would like to take this opportunity to congratulate him on winning **local electoral campaign**.

I know I have been neglecting the **[Meet The Champion](/champions)** series interviews since January 2020. I finally got the time to get that sorted. Thanks to the prompt actions by **[Wanderdoc](https://perlweeklychallenge.org/blog/meet-the-champion-2020-01)** and **[Saif Ahmed](https://perlweeklychallenge.org/blog/meet-the-champion-2020-02)**, it is now looking much better.

As **COVID-19** taking over much of our time and attention, **Team PWC** are  doing great and actively participating the weekly challenges. The best part is they keep improving the solution regularly. Being the owner of the central repository, I get to see the first hand changes. If you are also interested in tracking the changes then you can also **watch** the progress of the central **[repository](https://github.com/manwar/perlweeklychallenge-club)**. While you are there, why not give it a **star** as well.

Last but not the least, I woud like to thank each and every member for their support and encouragement.

***
***

## RECAP

***
***

Quick recap of the [**"Perl Weekly Challenge - 053"**](/blog/recap-challenge-053) by **Mohammad S Anwar**.

***
***

## PERL REVIEW

***
***

Please checkout **Perl** solutions review of the **["Perl Weekly Challenge - 051"](/blog/review-challenge-051)** by **Ryan Thompson**.

If you missed any past reviews then please checkout the [**collection**](/p5-reviews).

***
***

## RAKU REVIEW

***
***

Please checkout **Raku** solutions review of the **["Perl Weekly Challenge - 052"](/blog/p6-review-challenge-052)** by **Laurent Rosenfeld**.

If you missed any past reviews then please checkout the [**collection**](/p6-reviews).

***
***

## CHART

***
***

Please take a look at the [**charts**](/chart) showing interesting data.

I would like to thank every member of the team for their valuable suggestions. Please do share your experience with us.

***
***

## NEW MEMBERS

***
***

**Shahed Nooshmand** joined the **Team PWC** last week and shared **Raku** one-liner solutions to **[The Weekly Challenge - 053](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-053/shahed-nooshmand)**.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please give it a try to an excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member **Saif Ahmed** of **Team PWC**.

***
***

## GUESTS

***
***

**Dave Jacoby** shared solutions to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/dave-jacoby/node/ch-1.js) and [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/dave-jacoby/node/ch-2.js) in **Node**.

**Dave Jacoby** shared solutions to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/dave-jacoby/rust/ch-1.rs) and [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/dave-jacoby/rust/ch-2.rs) in **Rust**.

**Lubos Kolouch** shared solutions to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/lubos-kolouch/python/ch-1.py) and [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/lubos-kolouch/python/ch-2.py) in **Python**.

**Richard Park** shared solutions to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/richard-park/apl/ch-1.aplf) and [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/richard-park/apl/ch-2.aplf) in **APL**.

**User Person** shared solutions to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/user-person/python/ch-1.py) and [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/user-person/python/ch-2.py) in **Python**.

Please find out [**past solutions**](/blog/guest-contribution) by respected **guests**. Please do share your creative solutions in other languages.

***
***

## TASK #1

***
***

### kth Permutation Sequence

***
***

Write a script to accept two integers **n (>=1)** and **k (>=1)**. It should print the **kth permutation** of **n integers**. For more information, please follow the **[wiki page](https://en.wikipedia.org/wiki/Permutation#k-permutations_of_n)**.

For example, **n=3** and **k=4**, the possible permutation sequences are listed below:

    123
    132
    213
    231
    312
    321

The script should print the **4th** permutation sequence **231**.

***
***

## TASK #2

***
***

### Collatz Conjecture

##### Contributed by Ryan Thompson

***

It is thought that the following sequence will always reach 1:

 * `$n =   $n / 2` when `$n` is even
 * `$n = 3*$n + 1` when `$n` is odd

For example, if we start at **23**, we get the following sequence:

23 → 70 → 35 → 106 → 53 → 160 → 80 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

Write a function that finds the **Collatz** sequence for any positive integer. Notice how the sequence itself may go far above the original starting number.

## Extra Credit

Have your script calculate the sequence length for *all* starting numbers up to 1000000 (1e6), and output the starting number and sequence length for the longest 20 sequences.

***
***

Last date to submit the solution **23:59 (UK Time) Sunday 5th April 2020**.

***
***
