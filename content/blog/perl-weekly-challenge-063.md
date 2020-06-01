---
title: "Perl Weekly Challenge - 063"
date: 2020-06-01T00:00:00+00:00
description: "Perl Weekly Challenge - 063"
type: post
image: images/blog/pwc-base.svg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

## HEADLINES

***

Today is the first **Monday** of the **June 2020** and you guessed it correctly. It is time to announce the **Champion of the Month**. With great pleasure, we announce the Champion of last month, **Shahed Nooshmand**, currently ranked **#042** with score of **62**. He joined the **Team PWC** in the **Week #053** and has never missed a week since. As of today, he has contributed **Perl (1)**, **Raku (20)** and **Blog (10)**.

    Perl Weekly Challenge - 053: Blog (1), Raku (2)
    Perl Weekly Challenge - 054: Blog (1), Raku (2), Perl (1)
    Perl Weekly Challenge - 055: Blog (1), Raku (2)
    Perl Weekly Challenge - 056: Blog (1), Raku (2)
    Perl Weekly Challenge - 057: Blog (1), Raku (2)
    Perl Weekly Challenge - 058: Blog (1), Raku (2)
    Perl Weekly Challenge - 059: Blog (1), Raku (2)
    Perl Weekly Challenge - 060: Blog (1), Raku (2)
    Perl Weekly Challenge - 061: Blog (1), Raku (2)
    Perl Weekly Challenge - 062: Blog (1), Raku (2)

The **Week #062** would get the honour of least (**50**) contributions week since the launch. Prior to that, it was the **Week #006** when we had **52 contributions** by the **Team PWC**. I have a feeling that the **"N Queens"** task was too big to fit in one-week schedule. Our aim is always to have a task that can be solved in no more than **2 hours** as this is what I expect **Team PWC** members to spend on each task. If it breaches the deadline of **2 hours** then it is not fit for the weekly challenge. We will keep in mind next time. I blame myself for this as I also couldn't solve the task as I didn't know how **3D Chess Game** works. To be honest with you, I still don't know how it works. I am still looking for better visualisation of **3D Chess Game**.

I was pleasantly surprised when **Luca Ferrari** shared **[codepen](https://codepen.io/orangerascal/pen/ExVBdLE)** for the **3D N Queens** task. It was easier to follow but I haven't had chance to go through yet. I will re-visit sometimes next week when I have free moment. Well, **Luca** didn't stop there, he next shared **[codepen](https://codepen.io/orangerascal/pen/qBOzMzV)** for the **2D N Queens** version of the same. Please do check, if you still fancy to peak into the finer details. Thanks **Luca** for making an extra effort for this and sharing with us.

Last but not the least, I would like to thank each and every member for their support and encouragement.

## RECAP

***

Quick recap of the [**"Perl Weekly Challenge - 062"**](/blog/recap-challenge-062) by **Mohammad S Anwar**.

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

**Richard Park** shared solution to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-062/richard-park/apl/ch-1.aplf) in **APL**.

**Sangeet Kar** shared solutions to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-062/sangeet-kar/python/ch-1.py) and [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-062/sangeet-kar/python/ch-2.py) in **Python**.

Please find out [**past solutions**](/blog/guest-contribution) by respected **guests**. Please do share your creative solutions in other languages.

***

## TASK #1 › Last Word
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
##### **Reviewed by:** [Ryan Thompson](https://ry.ca)

***
<br>

Define sub `last_word($string, $regexp)` that returns the last word matching `$regexp` found in the given string, or `undef` if the string does not contain a word matching `$regexp`.

For this challenge, a "word" is defined as any character sequence consisting of non-whitespace characters (`\S`) only. That means punctuation and other symbols are part of the word.

The `$regexp` is a regular expression. Take care that the regexp can only match individual words! See the **Examples** for one way this can break if you are not careful.

## Examples

```perl
last_word('  hello world',                qr/[ea]l/);      # 'hello'
last_word("Don't match too much, Chet!",  qr/ch.t/i);      # 'Chet!'
last_word("spaces in regexp won't match", qr/in re/);      #  undef
last_word( join(' ', 1..1e6),             qr/^(3.*?){3}/); # '399933'
```

***

## TASK #2 › Rotate String
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
##### **Reviewed by:** [Ryan Thompson](https://ry.ca)

***
<br>

Given a word made up of an arbitrary number of `x` and `y` characters, that word can be rotated as follows: For the *i*th rotation (starting at *i* = 1), *i* % length(*word*) characters are moved from the front of the string to the end. Thus, for the string `xyxx`, the initial (*i* = 1) % 4 = 1 character (`x`) is moved to the end, forming `yxxx`. On the second rotation, (*i* = 2) % 4 = 2 characters (`yx`) are moved to the end, forming `xxyx`, and so on. See below for a complete example.

Your task is to write a function that takes a string of `x`s and `y`s and returns the maximum non-zero number of rotations required to obtain the original string. You may show the individual rotations if you wish, but that is not required.

## Example

Input: `$word = 'xyxx';`

 * **Rotation 1:** you get `yxxx` by moving `x` to the end.
 * **Rotation 2:** you get `xxyx` by moving `yx` to the end.
 * **Rotation 3:** you get `xxxy` by moving `xxy` to the end.
 * **Rotation 4:** you get `xxxy` by moving nothing as 4 % length(`xyxx`) == 0.
 * **Rotation 5:** you get `xxyx` by moving `x` to the end.
 * **Rotation 6:** you get `yxxx` by moving `xx` to the end.
 * **Rotation 7:** you get `xyxx` by moving `yxxx` to the end which is same as the given word.

Output: **7**

***

Last date to submit the solution **23:59 (UK Time) Sunday 7th June 2020**.

***
