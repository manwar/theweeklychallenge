---
title: "The Weekly Challenge - 349"
date: 2025-11-24T00:00:00+00:00
description: "The Weekly Challenge - 349"
type: post
image: images/twc-logo.png
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
### &nbsp;&nbsp;9. [TASK #1: Power String](#TASK1)
### 10. [TASK #2: Meeting Point](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #349` of `The Weekly Challenge`.

For two consecutive weeks, we've had `90+` contributions. Although we did not cross the magical number, it is a great effort by `Team PWC`.

I would like to thank all guest contributors for making `Week #348`, the best week of the entire year `2025`. We received `70` contributions in `23` different programming languages. The overall guest contributions for the year, as of today, is `2,516`, which is a big number, in my opinion. It's not as high as last year's figure of `3,267` but we still have time left to match the year before that `2,629` in `2023`.

Talking about numbers, the regular contributions for `2025` are not close to last year's total but still impressive. As of today, we have received `4,063` contributions in `2025` compared to `5,460` in `2024`. That said, we still have a few weeks left to catch up.

The overall contributions figure is looking great, I must admit. We are getting close to `18K` contributions in `Perl` and `10K` in `Raku`, as well as `6.5K` blog posts. This is incredible, kudos to the entire `Team PWC`.

Another number that caught my attention is the total number of `pull requests` submitted. As of today it is over `13K` and that's considering not every member submits pull request. These numbers tell a very beautiful story.

One more piece of good news: we have now received `200` stars for the [**GitHub repository**](https://github.com/manwar/perlweeklychallenge-club) of club members.

I need to get started soon on `The Weekly Challenge Advent Calendar 2025`. For those who are new, we have been doing this every year. Please check out last year's, [**Advent Calendar**](/blog/advent-calendar-2024).

Below is my contributions to the `Task #1` of `Week #348`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-348/mohammad-anwar/perl/ch-1.pl)

```perl
sub string_alike {
    my $s = shift;
    my $l = length($s)/2;
    my $v = substr($s,0,$l) =~ y/aeiouAEIOU//;
    return $v > 0 && $v == substr($s,$l) =~ y/aeiouAEIOU// ? 1 : 0;
}
```

<br>

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-348/mohammad-anwar/raku/ch-1.raku)

```raku
sub string-alike(Str $s) {
    my $l = $s.chars div 2;
    my $v = $s.substr(0, $l).comb.grep({ /<[aeiouAEIOU]>/ }).elems;
    return ($v > 0 && $v == $s.substr($l).comb.grep({ /<[aeiouAEIOU]>/ }).elems) ?? 1 !! 0;
}
```

<br>

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-348/mohammad-anwar/python/ch-1.py)

```python
def string_alike(s: str) -> int:
    length = len(s) // 2
    vowels = "aeiouAEIOU"
    v = sum(1 for char in s[:length] if char in vowels)
    return 1 if v > 0 and v == sum(1 for char in s[length:] if char in vowels) else 0

```

<br>

Thank you `Team PWC`, once again.

`Happy Hacking!!`

***

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `344` &nbsp;&nbsp;|&nbsp;&nbsp; 47 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|
|&nbsp;&nbsp; `345` &nbsp;&nbsp;|&nbsp;&nbsp; 49 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `346` &nbsp;&nbsp;|&nbsp;&nbsp; 50 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `347` &nbsp;&nbsp;|&nbsp;&nbsp; 47 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|
|&nbsp;&nbsp; `348` &nbsp;&nbsp;|&nbsp;&nbsp; 47 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `344` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 60 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
|&nbsp;&nbsp; `345` &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|&nbsp;&nbsp; 57 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
|&nbsp;&nbsp; `346` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|
|&nbsp;&nbsp; `347` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 67 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|
|&nbsp;&nbsp; `348` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 70 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (3757)
     2. Rust       (1048)
     3. Ruby       (848)
     4. Haskell    (833)
     5. Lua        (796)
     6. C++        (668)
     7. JavaScript (600)
     8. C          (596)
     9. Go         (584)
    10. BQN        (485)

<br>

### Blogs with Creative Title
***

#### 1. [Time Alike](https://raku-musings.com/time-alike.html) by Arne Sommer.
#### 2. [String Alike, Convert Time](https://dev.to/boblied/pwc-348-string-alike-convert-time-3nf9) by Bob Lied.
#### 3. [The Times They Are a-Like](https://github.sommrey.de/the-bears-den/2025/11/21/ch-348.html) by Jorg Sommrey.
#### 4. [splitting, counting and multiplying](https://fluca1978.github.io/2025/11/20/PerlWeeklyChallenge348.html) by Luca Ferrari.
#### 5. [Get Those Strings and Times Covered](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-348/challenge-348/matthias-muth#readme) by Matthias Muth.
#### 6. [Ticking away the moments that make up a challenge…](https://packy.dardan.com/b/eC) by Packy Anderson.
#### 7. [String time](http://ccgi.campbellsmiths.force9.co.uk/challenge/348) by Peter Campbell Smith.
#### 8. [Time for Strings](https://blog.firedrake.org/archive/2025/11/The_Weekly_Challenge_348__Time_for_Strings.html) by Roger Bell_West.
#### 9. [Alike Time](https://dev.to/simongreennet/the-weekly-challenge-alike-time-41oe) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 46,394 (`+98`)
#### 2. Pull Requests: 13,034 (`+37`)
#### 3. Contributors: 265
#### 4. Fork: 339
#### 5. Stars: 200 (`+1`)

<br>

## SPONSOR {#SPONSOR}
***

With start of `Week #268`, we have a new sponsor `Lance Wicks` until the end of year `2025`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 348](/blog/recap-challenge-348)** by `Mohammad Sajid Anwar`.

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

Please check out the guest contributions for the [**Week #348**](/blog/guest-contribution/#348).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Power String {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a string.

Write a script to return the power of the given string.

> The power of the string is the maximum length of a non-empty substring that contains only one unique character.

<br>

#### Example 1

    Input: $str = "textbook"
    Output: 2

    Breakdown: "t", "e", "x", "b", "oo", "k"
    The longest substring with one unique character is "oo".

<br>

#### Example 2

    Input: $str = "aaaaa"
    Output: 5

<br>

#### Example 3

    Input: $str = "hoorayyy"
    Output: 3

    Breakdown: "h", "oo", "r", "a", "yyy"
    The longest substring with one unique character is "yyy".

<br>

#### Example 4

    Input: $str = "x"
    Output: 1

<br>

#### Example 5

    Input: $str = "aabcccddeeffffghijjk"
    Output: 4

    Breakdown: "aa", "b", "ccc", "dd", "ee", "ffff", "g", "h", "i", "jj", "k"
    The longest substring with one unique character is "ffff".

<br>

## Task 2: Meeting Point {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given instruction string made up of `U (up)`, `D (down)`, `L (left)` and `R (right)`.

Write a script to return true if following the instruction, you meet (0,0) at any point along the sequence.

<br>

#### Example 1

    Input: $path = "ULD"
    Output: false

    (-1,1) <- (0,1)
       |        ^
       v        |
    (-1,0)    (0,0)

<br>

#### Example 2

    Input: $path = "ULDR"
    Output: true

     (-1,1) <- (0,1)
        |        ^
        v        |
     (-1,0) -> (0,0)

<br>

#### Example 3

    Input: $path = "UUURRRDDD"
    Output: false

    (0,3) -> (1,3) -> (2,3) -> (3,3)
      ^                          |
      |                          v
    (0,2)                      (3,2)
      ^                          |
      |                          v
    (0,1)                      (3,1)
      ^                          |
      |                          v
    (0,0)                      (3,0)

<br>

#### Example 4

    Input: $path = "UURRRDDLLL"
    Output: true

    (0,2) -> (1,2) -> (2,2) -> (3,2)
      ^                          |
      |                          v
    (0,1)                      (3,1)
      ^                          |
      |                          v
    (0,0) <- (1,0) <- (1,1) <- (3,0)

<br>

#### Example 5

    Input: $path = "RRUULLDDRRUU"
    Output: true

    (0,2) <- (1,2) <- (2,2)
      |                 ^
      v                 |
    (0,1)             (2,1)
      |                 ^
      v                 |
    (0,0) -> (1,0) -> (2,1)

<br>

***

Last date to submit the solution `23:59 (UK Time) Sunday 30th November 2025`.

***
