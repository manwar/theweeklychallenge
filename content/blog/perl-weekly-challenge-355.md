---
title: "The Weekly Challenge - 355"
date: 2026-01-05T00:00:00+00:00
description: "The Weekly Challenge - 355"
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
### &nbsp;&nbsp;9. [TASK #1: Thousand Separator](#TASK1)
### 10. [TASK #2: Mountain Array](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #355` of `The Weekly Challenge`.

`Happy New Year 2026` everyone.

Today is the first `Monday` of the month and time to declare the next champion. With great pride, I announce `Mark Anderson` the `Champion of the Month`. He was last declared champion in `June 2020`. Congratulations `Mark`. He is currently ranked `#19` in the leaderboard with total score `1194`. As of today, he shared `21 Perl` and `571 Raku` solutions, on top `5 blog posts` as well. Thank you, `Mark`, for your support and encouragements.

Let's all welcome a new member, [**Anthony Rowe**](https://github.com/asrowe), an expert in `Python`. Thank you, `Anthony`, for your first contributions in [**Python**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-354/asrowe/python).

I noticed another change in raking for guest languages. `Go` has moved up one position and now rank `#7`. In all of these, `Python`, sitting comfortable at the top position and nobody is anywhere close to threaten that position.

One more thing, I noticed a fellow team member, `Marc Perry`, shared an interesting analysis of my contribution in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-353/mohammad-anwar/perl/ch-1.pl) to the `Task #1` of `Week #353`. You can check out the details [**here**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-353/analysis/mohammad_ch-1.pl). Thank you, `Marc`.

***

Below is my contributions to the `Task #1` of `Week #354`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-354/mohammad-anwar/perl/ch-1.pl)

```perl
sub min_abs_diff {
    my @ints = @{ $_[0] };

    my @a = sort { $a <=> $b } @ints;
    my $m = 9**9;
    for (0 .. $#a - 1) {
        ($a[$_+1] - $a[$_]) < $m && ($m = $a[$_+1] - $a[$_]);
    }

    [
        map  { [ $a[$_], $a[$_+1] ]    }
        grep { $a[$_+1] - $a[$_] == $m }
        0 .. $#a - 1
    ];
}
```

<br>

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-354/mohammad-anwar/raku/ch-1.raku)

```raku
sub min-abs-diff(@ints) {
    my @a = @ints.sort: { $^a <=> $^b };
    my $m = 9**9;

    for 0 .. @a.end - 1 -> $i {
        my $diff = @a[$i+1] - @a[$i];
        if $diff < $m {
            $m = $diff;
        }
    }

    my @pairs = (0 .. @a.end - 1)
        .grep({ @a[$_+1] - @a[$_] == $m })
        .map({ [ @a[$_], @a[$_+1] ] });

    return @pairs == 1 ?? @pairs[0] !! @pairs;
}
```

<br>

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-354/mohammad-anwar/python/ch-1.py)

```python
def min_abs_diff(ints):
    a = sorted(ints)
    m = 9**9

    for i in range(len(a) - 1):
        diff = a[i+1] - a[i]
        if diff < m:
            m = diff

    return [
        [a[i], a[i+1]]
        for i in range(len(a) - 1)
        if a[i+1] - a[i] == m
    ]
```

<br>

Thank you `Team PWC`, once again.

`Happy Hacking!!`

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `350` &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `351` &nbsp;&nbsp;|&nbsp;&nbsp; 52 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `352` &nbsp;&nbsp;|&nbsp;&nbsp; 52 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|
|&nbsp;&nbsp; `353` &nbsp;&nbsp;|&nbsp;&nbsp; 52 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `354` &nbsp;&nbsp;|&nbsp;&nbsp; 52 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `350` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 61 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
|&nbsp;&nbsp; `351` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 67 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `352` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 73 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|
|&nbsp;&nbsp; `353` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 69 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `354` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 59 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (3956)
     2. Rust       (1080)
     3. Ruby       (860)
     4. Haskell    (847)
     5. Lua        (820)
     6. C++        (680)
     7. Go         (614)
     8. JavaScript (612)
     9. C          (596)
    10. BQN        (497)

<br>

### Blogs with Creative Title
***

#### 1. [MAD Shift](https://raku-musings.com/mad-shift.html) by Arne Sommer.
#### 2. [Shifted Differences](https://github.sommrey.de/the-bears-den/2026/01/02/ch-354.html) by Jorg Sommrey.
#### 3. [Min Abs Diff Shift Grid. What??](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-354/challenge-354/matthias-muth#readme) by Matthias Muth.
#### 4. [Some Grids](https://packy.dardan.com/b/gR) by Packy Anderson.
#### 5. [Mad numbers and shifty grid](http://ccgi.campbellsmiths.force9.co.uk/challenge/354) by Peter Campbell Smith.
#### 6. [Min Grid Diffs the Shift](https://blog.firedrake.org/archive/2026/01/The_Weekly_Challenge_354__Min_Grid_Diffs_the_Shift.html) by Roger Bell_West.
#### 7. [New Year, New Challenges](https://dev.to/simongreennet/weekly-challenge-new-year-new-challenges-2eab) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 47,144 (`+169`)
#### 2. Pull Requests: 13,294 (`+65`)
#### 3. Contributors: 271 (`+1`)
#### 4. Fork: 346 (`+2`)
#### 5. Stars: 207 (`+1`)

<br>

## SPONSOR {#SPONSOR}
***

With start of `Week #268`, we have a new sponsor `Lance Wicks` until the end of year `2025`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 354](/blog/recap-challenge-354)** by `Mohammad Sajid Anwar`.

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

[**Anthony Rowe**](https://github.com/asrowe), `Python` hacker joined `Team PWC`.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}
***

Please check out the guest contributions for the [**Week #354**](/blog/guest-contribution/#354).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Thousand Separator {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a positive integer, `$int`.

Write a script to add thousand separator, `,` and return as string.

#### Example 1

    Input: $int = 123
    Output: "123"

<br>

#### Example 2

    Input: $int = 1234
    Output: "1,234"

<br>

#### Example 3

    Input: $int = 1000000
    Output: "1,000,000"

<br>

#### Example 4

    Input: $int = 1
    Output: "1"

<br>

#### Example 5

    Input: $int = 12345
    Output: "12,345"

<br>

## Task 2: Mountain Array {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given an array of integers, `@ints`.

Write a script to return true if the given array is a valid mountain array.

    An array is mountain if and only if:
    1) arr.length >= 3
    and
    2) There exists some i with 0 < i < arr.length - 1 such that:
    arr[0] < arr[1]     < ... < arr[i - 1] < arr[i]
    arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

#### Example 1

    Input: @ints = (1, 2, 3, 4, 5)
    Output: false

<br>

#### Example 2

    Input: @ints = (0, 2, 4, 6, 4, 2, 0)
    Output: true

<br>

#### Example 3

    Input: @ints = (5, 4, 3, 2, 1)
    Output: false

<br>

#### Example 4

    Input: @ints = (1, 3, 5, 5, 4, 2)
    Output: false

<br>

#### Example 5

    Input: @ints = (1, 3, 2)
    Output: true

<br>

***

Last date to submit the solution `23:59 (UK Time) Sunday 11th January 2026`.

***
