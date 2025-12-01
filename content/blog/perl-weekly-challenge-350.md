---
title: "The Weekly Challenge - 350"
date: 2025-12-01T00:00:00+00:00
description: "The Weekly Challenge - 350"
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
### &nbsp;&nbsp;9. [TASK #1: Good Substrings](#TASK1)
### 10. [TASK #2: Shuffle Pairs](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #350` of `The Weekly Challenge`.

Welcome aboard, [**Alexandre Ros**](https://github.com/alexland7219), an expert `Uiua` hacker. Surprisingly, `Uiua` becoming hot favourite these days. We have had three recently joined guest contributors, all choosing `Uiua`. Thank you, `Alexandre`, for sharing the first contributions in [**Uiua**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-349/alexland7219/uiua).

Last saturday, I had the opportunity to attend the `London Perl & Raku Workshop 2025`. To my surprise, I met `Andrew Shitov` and `Arne Sommer`, two `Raku` geniuses. I presented the talk [**Design Patterns in Modern Perl**](https://manwar.org/talks/LPW-2025.pdf). I used the platform to launch my first book on the same subject.

<br>

[![Design Patterns in Modern Perl](/images/blog/design-patterns-in-modern-perl.png)](https://perlschool.com/books/design-patterns)

<br>

At the event, I met `Ruweda Ahmed`, a newbie in `Perl` who is interested in playing with the weekly challenge. In fact, she was introduced to the weekly challenge by a fellow senior member of the community at the event. I have formally invited her to join `Team PWC`.

The guest contributions never disappoint me, honestly. Sometimes, it is too much to consume, I am overwhelmed. Just looking at the past three weeks contributions, `67`, `70` and `83`. The `Week #349` became the best week of the year as far as guest contributions is concerned.

Here, we have best performing week per year.

    +------+-------------+---------------+
    | Year | Week Number | Contributions |
    +------+-------------+---------------+
    | 2025 | 349         | 83            |
    | 2024 | 250         | 86            |
    | 2023 | 240         | 89            |
    | 2022 | 153         | 120           |
    | 2021 | 145         | 94            |
    | 2020 | 89          | 71            |
    | 2019 | 1           | 72            |
    +------+-------------+---------------+

Having seen the guest contributions stat, let's check out the best week per year for regular contributions. The `Week #1` still holding the number one spot.

    +------+-------------+---------------+
    | Year | Week Number | Contributions |
    +------+-------------+---------------+
    | 2025 | 341         | 107           |
    | 2024 | 258,273     | 127           |
    | 2023 | 231         | 141           |
    | 2022 | 192         | 129           |
    | 2021 | 119         | 125           |
    | 2020 | 83          | 127           |
    | 2019 | 1           | 166           |
    +------+-------------+---------------+

<br>

Below is my contributions to the `Task #1` of `Week #349`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-349/mohammad-anwar/perl/ch-1.pl)

```perl
sub power_string {
    my ($s) = @_;
    return 0 unless length $s;

    my $max   = 1;
    my $count = 1;

    for my $i (1 .. length($s)-1) {
        if (substr($s,$i,1) eq substr($s,$i-1,1)) {
            $count++;
        } else {
            $max = $count if $count > $max;
            $count = 1;
        }
    }

    $max = $count if $count > $max;
    return $max;
}
```

<br>

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-349/mohammad-anwar/raku/ch-1.raku)

```raku
sub power_string(Str $s) {
    return 0 if $s.chars == 0;

    my $max   = 1;
    my $count = 1;

    for 1 ..^ $s.chars -> $i {
        if $s.substr($i,1) eq $s.substr($i-1,1) {
            $count++;
        } else {
            $max = $count if $count > $max;
            $count = 1;
        }
    }

    $max = $count if $count > $max;
    return $max;
}
```

<br>

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-349/mohammad-anwar/python/ch-1.py)

```python
def power_string(s: str) -> int:
    if len(s) == 0:
        return 0

    max_len = 1
    count   = 1

    for i in range(1, len(s)):
        if s[i] == s[i-1]:
            count += 1
        else:
            if count > max_len:
                max_len = count
            count = 1

    if count > max_len:
        max_len = count

    return max_len
```

<br>

Thank you `Team PWC`, once again.

`Happy Hacking!!`

<br>

### Advent Calendar 2025
***

Today marked the start of `Advent Calendar 2025`. Looking forward to more such magical contributions in coming days.

<br>

#### Day 1: [3-digits Even/Delete and Earn](/blog/advent-calendar-2025-12-01) by `Ali Moradi`.

<br>

***

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `345` &nbsp;&nbsp;|&nbsp;&nbsp; 49 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `346` &nbsp;&nbsp;|&nbsp;&nbsp; 50 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `347` &nbsp;&nbsp;|&nbsp;&nbsp; 47 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|
|&nbsp;&nbsp; `348` &nbsp;&nbsp;|&nbsp;&nbsp; 47 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|
|&nbsp;&nbsp; `349` &nbsp;&nbsp;|&nbsp;&nbsp; 49 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `345` &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|&nbsp;&nbsp; 57 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
|&nbsp;&nbsp; `346` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|
|&nbsp;&nbsp; `347` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 67 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|
|&nbsp;&nbsp; `348` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 70 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `349` &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 83 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (3792)
     2. Rust       (1054)
     3. Ruby       (850)
     4. Haskell    (837)
     5. Lua        (800)
     6. C++        (670)
     7. JavaScript (602)
     8. C          (596)
     9. Go         (590)
    10. BQN        (487)

<br>

### Blogs with Creative Title
***

#### 1. [Power Pointing](https://raku-musings.com/power-pointing.html) by Arne Sommer.
#### 2. [More complex than it has to be](https://dev.to/boblied/pwc-349-more-complex-than-it-has-to-be-2c7e) by Bob Lied.
#### 3. [Meeting Strings](https://github.sommrey.de/the-bears-den/2025/11/28/ch-349.html) by Jorg Sommrey.
#### 4. [moving and grepping](https://fluca1978.github.io/2025/11/24/PerlWeeklyChallenge349.html) by Luca Ferrari.
#### 5. [Power Meets Points](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-349/challenge-349/matthias-muth#readme) by Matthias Muth.
#### 6. [The Power of String](https://packy.dardan.com/b/eZ) by Packy Anderson.
#### 7. [Powering to the origin](http://ccgi.campbellsmiths.force9.co.uk/challenge/349) by Peter Campbell Smith.
#### 8. [Power Meeting](https://blog.firedrake.org/archive/2025/11/The_Weekly_Challenge_349__Power_Meeting.html) by Roger Bell_West.
#### 9. [Power Meeting](https://dev.to/simongreennet/weekly-challenge-power-meeting-21m0) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 46,516 (`+120`)
#### 2. Pull Requests: 13,073 (`+39`)
#### 3. Contributors: 266 (`+1`)
#### 4. Fork: 342 (`+3`)
#### 5. Stars: 202 (`+2`)

<br>

## SPONSOR {#SPONSOR}
***

With start of `Week #268`, we have a new sponsor `Lance Wicks` until the end of year `2025`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 349](/blog/recap-challenge-349)** by `Mohammad Sajid Anwar`.

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

[**Alexandre Ros**](https://github.com/alexland7219), an expert `Uiua` hacker joined `Team PWC`.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}
***

Please check out the guest contributions for the [**Week #349**](/blog/guest-contribution/#349).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Good Substrings {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a string.

Write a script to return the number of good substrings of length three in the given string.

> A string is good if there are no repeated characters.

<br>

#### Example 1

    Input: $str = "abcaefg"
    Output: 5

    Good substrings of length 3: abc, bca, cae, aef and efg

<br>

#### Example 2

    Input: $str = "xyzzabc"
    Output: 3

    Good substrings of length 3: "xyz", "zab" and "abc"

<br>

#### Example 3

    Input: $str = "aababc"
    Output: 1

    Good substrings of length 3: "abc"

<br>

#### Example 4

    Input: $str = "qwerty"
    Output: 4

    Good substrings of length 3: "qwe", "wer", "ert" and "rty"

<br>

#### Example 5

    Input: $str = "zzzaaa"
    Output: 0

<br>

## Task 2: Shuffle Pairs {#TASK2}
##### **Submitted by:** [E. Choroba](https://github.com/choroba)
***

If two integers `A <= B` have the same digits but in different orders, we say that they belong to the same *shuffle pair* if and only if there is an integer `k` such that `B = A * k` where `k` is called the *witness* of the pair.

For example, 1359 and 9513 belong to the same shuffle pair, because `1359 * 7 = 9513`.

Interestingly, some integers belong to several different shuffle pairs. For example, 123876 forms one shuffle pair with 371628, and another with 867132, as `123876 * 3 = 371628`, and `123876 * 7 = 867132`.

Write a function that for a given `$from`, `$to`, and `$count` returns the number of integers `$i` in the range `$from <= $i <= $to` that belong to at least `$count` different shuffle pairs.

**PS:** Inspired by a conversation between `Mark Dominus` and `Simon Tatham` at **Mastodon**.

<br>

#### Example 1

    Input: $from = 1, $to = 1000, $count = 1
    Output: 0

    There are no shuffle pairs with elements less than 1000.

<br>

#### Example 2

    Input: $from = 1500, $to = 2500, $count = 1
    Output: 3

    There are 3 integers between 1500 and 2500 that belong to shuffle pairs.

    1782, the other element is 7128 (witness 4)
    2178, the other element is 8712 (witness 4)
    2475, the other element is 7425 (witness 3)

<br>

#### Example 3

    Input: $from = 1_000_000, $to = 1_500_000, $count = 5
    Output: 2

    There are 2 integers in the given range that belong to 5 different shuffle pairs.

    1428570 pairs with 2857140, 4285710, 5714280, 7142850, and 8571420
    1429857 pairs with 2859714, 4289571, 5719428, 7149285, and 8579142

    The witnesses are 2, 3, 4, 5, and 6 for both the integers.

<br>

#### Example 4

    Input: $from = 13_427_000, $to = 14_100_000, $count = 2
    Output: 11

    6 integers in the given range belong to 3 different shuffle pairs, 5 integers belong to 2 different ones.

<br>

#### Example 5

    Input: $from = 1030, $to = 1130, $count = 1
    Output: 2

    There are 2 integers between 1020 and 1120 that belong to at least one shuffle pair:
    1035, the other element is 3105 (witness k = 3)
    1089, the other element is 9801 (witness k = 9)

<br>

***

Last date to submit the solution `23:59 (UK Time) Sunday 7th December 2025`.

***
