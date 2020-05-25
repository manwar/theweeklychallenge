---
title: "Perl Weekly Challenge - 062"
date: 2020-05-25T00:00:00+00:00
description: "Perl Weekly Challenge - 062"
type: post
image: images/blog/pwc-base.svg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

## HEADLINES

***

**Happy Idd** to all **Team PWC** members.

It was the first **Idd** celebration when we couldn't go to the mosque for special prayer. Life is no longer same even after so many weeks on lockdown. It appears we have to start adjusting to the new rules.

From next week, I will have new routine to follow as Ramadan is over. Working hours is going to be back to normal. I am looking forward to it. What does this mean to the amount of time I spend on **Perl Weekly Challenge**? It would definitely mean I have to manage my time more carefully. I have taken up another project which is likely to go live sometimes in the first week of next month. It is definitely going to take up some of my free time, for sure. Having said that, **Perl Weekly Challenge** will remain my first priority forever.

I was pleasantly surprised to see, **Donald Hunter**, back in action. He shared solutions to **[Excel Column](https://donaldh.wtf/2020/05/excel-columns)** and **[IPv4 Partition](https://donaldh.wtf/2020/05/ipv4-partition)**. It is always nice to see member coming back with a bang.

We had a new member, **Niels van Dijke**, from **The Netherland** joined the **Team PWC**. He shared his solution to the **[Perl Weekly Challenge - 061](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-061/perlboy1967/perl)**.

**Richard Park** seems to be on a mission as he shared his another **[YouTube Video](https://www.youtube.com/watch?v=UBl6t7zNfwE)** showing him live in action. I found it very interesting to watch.

Last but not the least, I would like to thank each and every member for their support and encouragement.

## RECAP

***

Quick recap of the [**"Perl Weekly Challenge - 061"**](/blog/recap-challenge-061) by **Mohammad S Anwar**.

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

**Niels van Dijke** from **The Netherland**, an experience **Perl Hacker** joined the **Team PWC** last week.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please give it a try to an excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member **Saif Ahmed** of **Team PWC**.

## GUESTS

***

**Richard Park** shared solutions to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-061/richard-park/apl/ch-1.aplf) and [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-061/richard-park/apl/ch-2.aplf) in **APL**.

**Sangeet Kar** shared solutions to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-061/sangeet-kar/python/ch-1.py) and [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-061/sangeet-kar/python/ch-2.py) in **Python**.

**Shawak** shared solution to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-061/shawak/ruby/ch-1.rb) in **Ruby**.

**Ulrich Rieke** shared solution to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-061/ulrich-rieke/haskell/ch-1.hs) and [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-061/ulrich-rieke/haskell/ch-2.hs) in **Haskell**.

Please find out [**past solutions**](/blog/guest-contribution) by respected **guests**. Please do share your creative solutions in other languages.

## TASK #1 › Sort Email Addresses
##### **Submitted by:** [Neil Bowers](http://neilb.org)
##### **Reviewed by:** [Ryan Thompson](https://ry.ca)
<br>

Write a script that takes a list of email addresses (one per line) and sorts them first by the domain part of the email address, and then by the part to the left of the @ (known as the mailbox).

Note that the domain is case-insensitive, while the mailbox part is case sensitive. (Some email providers choose to ignore case, but that's another matter entirely.)

If your script is invoked with arguments, it should treat them as file names and read them in order, otherwise your script should read email addresses from standard input.

## Bonus

Add a `-u` option which only includes unique email addresses in the output, just like `sort -u`.

## Example

If given the following list:

```
name@example.org
rjt@cpan.org
Name@example.org
rjt@CPAN.org
user@alpha.example.org
```

Your script (without `-u`) would return:

```
user@alpha.example.org
rjt@cpan.org
rjt@CPAN.org
Name@example.org
name@example.org
```

With `-u`, the script would return:

```
user@alpha.example.org
rjt@CPAN.org
Name@example.org
name@example.org
```

***

## TASK #2 › N Queens
##### **Submitted by:** [Ryan Thompson](https://ry.ca)

***
<br>

A standard 8×8 chessboard has 64 squares. The Queen is a chesspiece that can attack in 8 directions, as shown by the green shaded squares below:

<img src="/images/blog/Chessboard.svg" width=400 />

It is possible to place 8 queens on to a single chessboard such that none of the queens can attack each other (i.e., their shaded squares would not overlap). In fact, there are multiple ways to do so, and this is a favourite undergraduate assignment in computer science.

But here at PWC, we're going to take it into the next dimension!

Your job is to write a script to work with a three dimensional chess *cube,* M×M×M in size, and find a solution that maximizes the number of queens that can be placed in that cube without attacking each other. Output one possible solution.

## Example

A trivial 2×2×2 solution might look like this (1 = queen, 0 = empty):

```perl
[
    [[1,0],     # Layer 1
     [0,0]],

    [[0,0],     # Layer 2
     [0,0]],
]
```

***

Last date to submit the solution **23:59 (UK Time) Sunday 31st May 2020**.

***
