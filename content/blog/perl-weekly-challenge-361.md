---
title: "The Weekly Challenge - 361"
date: 2026-02-16T00:00:00+00:00
description: "The Weekly Challenge - 361"
type: post
author: Mohammad Sajid Anwar
tags: ["Perl", "Raku"]
---

## TABLE OF CONTENTS
***

### &nbsp;&nbsp;1. [HEADLINES](#HEADLINES)
### &nbsp;&nbsp;2. [SPONSOR](#SPONSOR)
### &nbsp;&nbsp;3. [RECAP](#RECAP)
### &nbsp;&nbsp;4. [PERL REVIEW](#PERLREVIEW)
### &nbsp;&nbsp;5. [RAKU REVIEW](#RAKUREVIEW)
### &nbsp;&nbsp;6. [CHART](#CHART)
### &nbsp;&nbsp;7. [NEW MEMBERS](#NEWMEMBERS)
### &nbsp;&nbsp;8. [GUESTS](#GUESTS)
### &nbsp;&nbsp;9. [TASK #1: Zeckendorf Representation](#TASK1)
### 10. [TASK #2: Find Celebrity](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #361` of `The Weekly Challenge`.

**Team PWC** members, `David Ferrone` and `Paulo Custodio` have been working overtime to bring the **C** language back into the race. Their efforts have paid off: **C** has moved up one rank to **#6**. Now we have tough fight among **Ruby**, **Haskell** and **Lua** as well. They are all very close to each other. Similarly **C** and **C++** remain neck-and-neck.

In recent weeks, I've noticed that guest contributons have increased and sometimes very close to regular contributions.

The target for guest contributions is set to **50** and **100** for regular contributions. In the first six weeks of **2026** so far, guest contributors reached their target **five times**, whereas regular contributors did so only once. These statistics are very fascinating and tells us a lot.

Bottom line: there is plenty to learn from each contribution every week. I wish I had time to go through all of them, but I am relieved that they are preserved in the repository forever, so anyone can come back to them later. The repository is becoming a knowledge bank, **FREE** for all. We have top-notch contributions preserved for the next generation. I'm sure that as people explore these gems, they will greatly appreciate the creators.

This week, with no school (closed for a week), I have a little extra time in the morning to stay in bed. Also **Ramadan** is starting midweek too and that will definitely change the routine a bit.

Enjoy the fun challenges.

***

<br>

Below is my contributions to the `Task #1` of `Week #360`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-360/mohammad-anwar/perl/ch-1.pl)

```perl
sub justify_text {
    my ($str, $width) = @_;

    my $pad = $width - length $str;
    return "*" x int($pad / 2) . $str . "*" x ($pad - int($pad / 2));
}
```

<br>

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-360/mohammad-anwar/raku/ch-1.raku)

```perl
sub justify-text(Str $str, Int $width) {
    my $pad = $width - $str.chars;
    return "*" x ($pad div 2) ~ $str ~ "*" x ($pad - ($pad div 2));
}
```

<br>

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-360/mohammad-anwar/python/ch-1.py)

```python
def justify_text(s: str, width: int) -> str:
    pad   = width - len(s)
    left  = pad // 2
    right = pad - left
    return "*" * left + s + "*" * right
```

<br>

Thank you `Team PWC`, once again.

`Happy Hacking!!`

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `356` &nbsp;&nbsp;|&nbsp;&nbsp; 48 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `357` &nbsp;&nbsp;|&nbsp;&nbsp; 52 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|
|&nbsp;&nbsp; `358` &nbsp;&nbsp;|&nbsp;&nbsp; 55 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 28 &nbsp;&nbsp;|
|&nbsp;&nbsp; `359` &nbsp;&nbsp;|&nbsp;&nbsp; 56 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|
|&nbsp;&nbsp; `360` &nbsp;&nbsp;|&nbsp;&nbsp; 61 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `356` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 41 &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|
|&nbsp;&nbsp; `357` &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 73 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `358` &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 71 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|
|&nbsp;&nbsp; `359` &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 68 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `360` &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|&nbsp;&nbsp; 75 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (4136)
     2. Rust       (1103)
     3. Ruby       (869)
     4. Haskell    (865)
     5. Lua        (843)
     6. C          (694)
     7. C++        (692)
     8. Go         (640)
     9. JavaScript (621)
    10. BQN        (505)

<br>

### Blogs with Creative Title
***

#### 1. [Full Circle](https://raku-musings.com/full-circle.html) by Arne Sommer.
#### 2. [Pertaining to a subtlety of sorting](https://dev.to/boblied/pwc-360-pertaining-to-a-subtlety-of-sorting-39b4) by Bob Lied.
#### 3. [This is exactly the sort of justification that I was looking for](https://awesomepowerofgenetics.blogspot.com/2026_02_08_archive.html#3048441554558263005) by Marc Perry.
#### 4. [Justifying TIMTOWTDI](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-360/challenge-360/matthias-muth#readme) by Matthias Muth.
#### 5. [Word Crimes are Justified](https://packy.dardan.com/b/j8) by Packy Anderson.
#### 6. [Padding and sorting](http://ccgi.campbellsmiths.force9.co.uk/challenge/360) by Peter Campbell Smith.
#### 7. [Justify the Words](https://blog.firedrake.org/archive/2026/02/The_Weekly_Challenge_360__Justify_the_Words.html) by Roger Bell_West.
#### 8. [Padding and sorting](https://dev.to/simongreennet/weekly-challenge-padding-and-sorting-3oj8) by Simon Green.
#### 9. [Perl Power: Two Tiny Scripts, Big Learning!](https://dev.to/vinodk89/perl-weekly-challenge-360-perl-power-two-tiny-scripts-big-learning-2o61) by Vinod Kumar K.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 47,862 (`+114`)
#### 2. Pull Requests: 13,556 (`+43`)
#### 3. Contributors: 273
#### 4. Fork: 348
#### 5. Stars: 209

<br>

## SPONSOR {#SPONSOR}
***

We are looking for sponsor for monthly prize pot of `US $50`. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 360](/blog/recap-challenge-360)** by `Mohammad Sajid Anwar`.

<br>

## PERL REVIEW {#PERLREVIEW}
***

If you missed any past reviews then please check out the [**collection**](/p5-reviews).

<br>

## RAKU REVIEW {#RAKUREVIEW}
***

If you missed any past reviews then please check out the [**collection**](/p6-reviews).

<br>

## CHART {#CHART}
***

Please take a look at the [**charts**](/chart) showing interesting data.

I would like to `THANK` every member of the team for their valuable suggestions. Please do share your experience with us.

<br>

## NEW MEMBERS {#NEWMEMBERS}
***

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}
***

Please check out the guest contributions for the [**Week #360**](/blog/guest-contribution/#360).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Zeckendorf Representation {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a positive integer (<= 100).

Write a script to return Zeckendorf Representation of the given integer.

> Every positive integer can be uniquely represented as sum of non-consecutive Fibonacci numbers.

#### Example 1

    Input: $int = 4
    Output: 3,1

    4 => 3 + 1 (non-consecutive fibonacci numbers)

<br>

#### Example 2

    Input: $int = 12
    Output: 8,3,1

    12 => 8 + 3 + 1

<br>

#### Example 3

    Input: $int = 20
    Output: 13,5,2

    20 => 13 + 5 + 2

<br>

#### Example 4

    Input: $int = 96
    Output: 89,5,2

    96 => 89 + 5 + 2

<br>

#### Example 5

    Input: $int = 100
    Output: 89,8,3

    100 => 89 + 8 + 3

<br>

## Task 2: Find Celebrity {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a binary matrix (m x n).

Write a script to find the celebrity, return -1 when none found.

> A celebrity is someone, everyone knows and knows nobody.

#### Example 1

    Input: @party = (
                [0, 0, 0, 0, 1, 0],  # 0 knows 4
                [0, 0, 0, 0, 1, 0],  # 1 knows 4
                [0, 0, 0, 0, 1, 0],  # 2 knows 4
                [0, 0, 0, 0, 1, 0],  # 3 knows 4
                [0, 0, 0, 0, 0, 0],  # 4 knows NOBODY
                [0, 0, 0, 0, 1, 0],  # 5 knows 4
           );
    Output: 4

<br>

#### Example 2

    Input: @party = (
                [0, 1, 0, 0],  # 0 knows 1
                [0, 0, 1, 0],  # 1 knows 2
                [0, 0, 0, 1],  # 2 knows 3
                [1, 0, 0, 0]   # 3 knows 0
           );
    Output: -1

<br>

#### Example 3

    Input: @party = (
                [0, 0, 0, 0, 0],  # 0 knows NOBODY
                [1, 0, 0, 0, 0],  # 1 knows 0
                [1, 0, 0, 0, 0],  # 2 knows 0
                [1, 0, 0, 0, 0],  # 3 knows 0
                [1, 0, 0, 0, 0]   # 4 knows 0
           );
    Output: 0

<br>

#### Example 4

    Input: @party = (
                [0, 1, 0, 1, 0, 1],  # 0 knows 1, 3, 5
                [1, 0, 1, 1, 0, 0],  # 1 knows 0, 2, 3
                [0, 0, 0, 1, 1, 0],  # 2 knows 3, 4
                [0, 0, 0, 0, 0, 0],  # 3 knows NOBODY
                [0, 1, 0, 1, 0, 0],  # 4 knows 1, 3
                [1, 0, 1, 1, 0, 0]   # 5 knows 0, 2, 3
           );
    Output: 3

<br>

#### Example 5

    Input: @party = (
                [0, 1, 1, 0],  # 0 knows 1 and 2
                [1, 0, 1, 0],  # 1 knows 0 and 2
                [0, 0, 0, 0],  # 2 knows NOBODY
                [0, 0, 0, 0]   # 3 knows NOBODY
           );
    Output: -1

<br>

#### Example 6

    Input: @party = (
                [0, 0, 1, 1],  # 0 knows 2 and 3
                [1, 0, 0, 0],  # 1 knows 0
                [1, 1, 0, 1],  # 2 knows 0, 1 and 3
                [1, 1, 0, 0]   # 3 knows 0 and 1
          );
    Output: -1

<br>

***

Last date to submit the solution `23:59 (UK Time) Sunday 22nd February 2026`.

***
