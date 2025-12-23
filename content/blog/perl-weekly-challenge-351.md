---
title: "The Weekly Challenge - 351"
date: 2025-12-08T00:00:00+00:00
description: "The Weekly Challenge - 351"
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
### &nbsp;&nbsp;9. [TASK #1: Special Average](#TASK1)
### 10. [TASK #2: Arithmetic Progression](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #351` of `The Weekly Challenge`.

Let us all welcome, [**Gerben Vos**](https://github.com/gpvos) to `Team PWC`. Thanks `Gerben` for the first contributions in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-350/gpvos/perl).

Last week, I completely forgot to announce the champion in all the excitement. With great pleasure, I declare `Peter Meszaros` as the next `Champion of the Month`.He was last declared champion in `Nov 2023`. He is currently ranked `#40` in the leader board with total score of `302`. And currently ranked `#22` in guest contributions leader board with contributions in `Tcl`.

`Niels van Dijke` please reply to the email that was sent on `18th Nov` with regard to the prize money.

Thank you, `Arne Sommer`, for the kind and encouraging words in your [**blog post**](https://raku-musings.com/good-shuffle.html). I loved the post title image, it made my day.

Below is my contributions to the `Task #1` of `Week #350`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-350/mohammad-anwar/perl/ch-1.pl)

```perl
sub good_substring {
    my ($str) = @_;

    return grep { !/(.).*\1/ }
           map  { substr($str, $_, 3) }
           0..length($str) - 3;
}
```

<br>

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-350/mohammad-anwar/raku/ch-1.raku)

```raku
sub good-substring(Str $str) {
    $str.comb.rotor(3 => -2).map(*.join).grep({!/(.).*$0/}).elems
}
```

<br>

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-350/mohammad-anwar/python/ch-1.py)

```python
def good_substring(s: str) -> int:
    return sum(1 for i in range(len(s) - 2)
         if len(set(s[i:i+3])) == 3)
```

<br>

Thank you `Team PWC`, once again.

`Happy Hacking!!`

<br>

### Advent Calendar 2025
***

Contributions to the `Advent Calendar` so far by fellow members.

<br>

#### Day 1: [3-digits Even/Delete and Earn](/blog/advent-calendar-2025-12-01) by `Ali Moradi`.
#### Day 2: [Not Modified](/blog/advent-calendar-2025-12-02) by `Dave Jacoby`.
#### Day 3: [Alien Primes](/blog/advent-calendar-2025-12-03) by `Jorg Sommrey`.
#### Day 4: [Odd game](/blog/advent-calendar-2025-12-04) by `Peter Campbell Smith`.
#### Day 5: [Don't Get Trapped](/blog/advent-calendar-2025-12-05) by `Matthias Muth`.
#### Day 6: [Exclusive or Common](/blog/advent-calendar-2025-12-06) by `Arne Sommer`.
#### Day 7: [Perl and Raku mainly](/blog/advent-calendar-2025-12-07) by `Luca Ferrari`.
#### Day 8: [Arrays Intersection/Sort Odd Even](/blog/advent-calendar-2025-12-08) by `Jaldhar H. Vyas`.

<br>

***

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `346` &nbsp;&nbsp;|&nbsp;&nbsp; 50 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `347` &nbsp;&nbsp;|&nbsp;&nbsp; 47 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|
|&nbsp;&nbsp; `348` &nbsp;&nbsp;|&nbsp;&nbsp; 47 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|
|&nbsp;&nbsp; `349` &nbsp;&nbsp;|&nbsp;&nbsp; 50 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|
|&nbsp;&nbsp; `350` &nbsp;&nbsp;|&nbsp;&nbsp; 48 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `346` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|
|&nbsp;&nbsp; `347` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 67 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|
|&nbsp;&nbsp; `348` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 70 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `349` &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 83 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|
|&nbsp;&nbsp; `350` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 59 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (3807)
     2. Rust       (1060)
     3. Ruby       (852)
     4. Haskell    (839)
     5. Lua        (804)
     6. C++        (672)
     7. JavaScript (604)
     8. C          (596)
     9. Go         (594)
    10. BQN        (489)

<br>

### Blogs with Creative Title
***

#### 1. [The Good Shuffle](https://raku-musings.com/good-shuffle.html) by Arne Sommer.
#### 2. [Shuffled Strings](https://github.sommrey.de/the-bears-den/2025/12/05/ch-350.html) by Jorg Sommrey.
#### 3. [only Perl!](https://fluca1978.github.io/2025/12/01/PerlWeeklyChallenge350.html) by Luca Ferrari.
#### 4. [Shuffling the Good](https://packy.dardan.com/b/er) by Packy Anderson.
#### 5. [Good pairs](http://ccgi.campbellsmiths.force9.co.uk/challenge/350) by Peter Campbell Smith.
#### 6. [A Good Shuffle](https://blog.firedrake.org/archive/2025/12/The_Weekly_Challenge_350__A_Good_Shuffle.html) by Roger Bell_West.
#### 7. [Good shuffling](https://dev.to/simongreennet/weekly-challenge-good-shuffling-3cdj) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 46,601 (`+85`)
#### 2. Pull Requests: 13,103 (`+30`)
#### 3. Contributors: 267 (`+1`)
#### 4. Fork: 343 (`+1`)
#### 5. Stars: 202

<br>

## SPONSOR {#SPONSOR}
***

With start of `Week #268`, we have a new sponsor `Lance Wicks` until the end of year `2025`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 350](/blog/recap-challenge-350)** by `Mohammad Sajid Anwar`.

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

[**Gerben Vos**](https://github.com/gpvos), an expert `Perl` hacker joined `Team PWC`.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}
***

Please check out the guest contributions for the [**Week #350**](/blog/guest-contribution/#350).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Special Average {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given an array of integers.

Write a script to return the average excluding the minimum and maximum of the given array.

#### Example 1

    Input: @ints = (8000, 5000, 6000, 2000, 3000, 7000)
    Output: 5250

    Min: 2000
    Max: 8000
    Avg: (3000+5000+6000+7000)/4 = 21000/4 = 5250

<br>

#### Example 2

    Input: @ints = (100_000, 80_000, 110_000, 90_000)
    Output: 95_000

    Min: 80_000
    Max: 110_000
    Avg: (100_000 + 90_000)/2 = 190_000/2 = 95_000

<br>

#### Example 3

    Input: @ints = (2500, 2500, 2500, 2500)
    Output: 0

    Min: 2500
    Max: 2500
    Avg: 0

<br>

#### Example 4

    Input: @ints = (2000)
    Output: 0

    Min: 2000
    Max: 2000
    Avg: 0

<br>

#### Example 5

    Input: @ints = (1000, 2000, 3000, 4000, 5000, 6000)
    Output: 3500

    Min: 1000
    Max: 6000
    Avg: (2000 + 3000 + 4000 + 5000)/4 = 14000/4 = 3500

<br>

## Task 2: Arithmetic Progression {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given an array of numbers.

Write a script to return true if the given array can be re-arranged to form an arithmetic progression, otherwise return false.

> A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

<br>

#### Example 1

    Input: @num = (1, 3, 5, 7, 9)
    Output: true

    Already AP with common difference 2.

<br>

#### Example 2

    Input: @num = (9, 1, 7, 5, 3)
    Output: true

    The given array re-arranged like (1, 3, 5, 7, 9) with common difference 2.

<br>

#### Example 3

    Input: @num = (1, 2, 4, 8, 16)
    Output: false

    This is geometric progression and not arithmetic progression.

<br>

#### Example 4

    Input: @num = (5, -1, 3, 1, -3)
    Output: true

    The given array re-arranged like (-3, -1, 1, 3, 5) with common difference 2.

<br>

#### Example 5

    Input: @num = (1.5, 3, 0, 4.5, 6)
    Output: true

    The given array re-arranged like (0, 1.5, 3, 4.5, 6) with common difference 1.5.

<br>


***

Last date to submit the solution `23:59 (UK Time) Sunday 14th December 2025`.

***
