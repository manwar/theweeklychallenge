---
title: "Perl Weekly Challenge - 061"
date: 2020-05-18T00:00:00+00:00
description: "Perl Weekly Challenge - 061"
type: post
image: images/blog/pwc-base.svg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

## HEADLINES

***

I never miss the opportunity of celebration, no matter how small the occassion is. My form of celebration is sharing the achievements with the community in general. If you remember, I wrote a **[blog](/blog/the-story-of-pwc)** when we completed **3 months** of weekly challenge. Then **[again](http://blogs.perl.org/users/mohammad_s_anwar/2019/08/perl-weekly-challenge---6-months.html)** when we completed **6 months**. So why no celebration at the end of **first anniversary**? Certainly it was the biggest moments for all of us associated with **Perl Weekly Challenge** or rather **The Weekly Challenge**. I have plenty of excuses for not doing anything about it. In fact, I did start collecting the bits that meant a lot to all of us but then life took big turn (did I mention **COVID-19**?). So please hang in there, I will bring it out soon. I don't want to set the deadline as it puts me under immense pressure. If anyone wants to share their story then please feel free to send me over <perlweeklychallenge@yahoo.com>. It would be great to have as many success stories as possible.

**Sangeet Kar**, joined the team recently and started contributing **Perl** solutions. Last week, he attempted **Raku** for the first time as far as **Perl Weekly Challenge** is concerned. To me this is a success story, keep it up **Sangeet**. Similary **Ulrich Rieke**, who have contributed **Perl:27** and **Raku:44**, also shared **C++:12** and **Haskell:14**. So in a way, there are plenty for everyone, not just limited to **Perl** and **Raku**. My personal favouite is **Richard Park** who contributed **Raku** solutions generally also shared **APL:11**. Honestly speaking, I didn't know **APL** even existed. The solutions in **APL** is full of symbols, mostly. I wonder how hard to code in **APL**. **Richard** surprised me with this **[YouTube video](https://www.youtube.com/watch?v=0y015wayas4)** of his contribution to the weekly challenge. I want to see now if anyone dare take the video challenge. It would be fun, to see coding in action. There are many more such stories to share, I will leave it for next time.

Did you notice something new in recent week challenges? They are all now reviewed by **Ryan Thompson**. Thanks to **Ryan**, challenges are much more verbose now. While talking about reviews, how can I not mention **Kian-Meng Ang** and **Laurent Rosenfeld** for reviewing **Perl** and **Raku** solutions respectively. **Ryan** started reviewing **Perl** solutions recently and took it to another level. I have had numerous messages from **Team PWC** members praising the quality work of all reviewers. So well done team and keep it going, please.

Last but not the least, I would like to thank each and every member for their support and encouragement.

## RECAP

***

Quick recap of the [**"Perl Weekly Challenge - 060"**](/blog/recap-challenge-060) by **Mohammad S Anwar**.

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

**GitHub** user **plis-acm**, an experienced **Perl** hacker joined the **Team PWC**.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please give it a try to an excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member **Saif Ahmed** of **Team PWC**.

## GUESTS

***

**Adam Russell** shared solutions to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-060/adam-russell/prolog/ch-1.p) and [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-060/adam-russell/prolog/ch-2.p) in **Prolog**.

**Leo Manfredi** shared solution to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-060/manfredi/bash/ch-1.sh) in **Bash**.

**Leo Manfredi** shared solution to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-060/manfredi/python/ch-1.py) in **Python**.

**Richard Park** shared solutions to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-060/richard-park/apl/ch-1.aplf) and [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-060/richard-park/apl/ch-2.aplf) in **APL**.

**Shawak** shared solutions to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-060/shawak/ruby/ch-1.rb) and [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-060/shawak/ruby/ch-2.rb) in **Ruby**.

Please find out [**past solutions**](/blog/guest-contribution) by respected **guests**. Please do share your creative solutions in other languages.

## TASK #1 › Product SubArray
##### **Reviewed by:** [Ryan Thompson](https://ry.ca)

***

Given a list of **4 or more** numbers, write a script to find the contiguous sublist that has the maximum product. The length of the sublist is irrelevant; your job is to maximize the product.

### Example

Input: `[ 2, 5, -1, 3 ]`

Output: `[ 2, 5 ]` which gives maximum product `10`.

## TASK #2 › IPv4 Partition
##### **Reviewed by:** [Ryan Thompson](https://ry.ca)

***

You are given a string containing only digits **(0..9)**. The string should have between **4** and **12** digits.

Write a script to print every possible valid **IPv4** address that can be made by partitioning the input string.

For the purpose of this challenge, a valid **IPv4** address consists of **four "octets"** i.e. **A**, **B**, **C** and **D**, separated by dots (`.`).

Each octet must be between **0** and **255**, and must not have any leading zeroes. (e.g., `0` is OK, but `01` is not.)

### Example

Input: `25525511135`,

Output:

```
255.255.11.135
255.255.111.35
```

***

Last date to submit the solution **23:59 (UK Time) Sunday 24th May 2020**.

***
