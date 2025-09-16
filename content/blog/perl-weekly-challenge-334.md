---
title: "The Weekly Challenge - 334"
date: 2025-08-11T00:00:00+00:00
description: "The Weekly Challenge - 334"
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
### &nbsp;&nbsp;9. [TASK #1: Range Sum](#TASK1)
### 10. [TASK #2: Nearest Valid Point](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #334` of `The Weekly Challenge`.

I apologize for missing last week's `Monday` announcements, `Apologies and Exciting Updates`.

It is with great please that I announce `Thomas Kohler` as our next `Champion of the Month`.

`Thomas` was last named champion in `April 2023`. To date, he has contributed `268 Perl` solutions and `261 blog posts`. He currently holds the rank `#20` on the leaderboard with a score of `1058`. Congratulations, `Thomas`.

A quick request to our previous champion, `Yitzchak Scott-Thoennes`: Could you please reply to my email regarding the prize money sent on `July 16, 2025`? Thank you!

Please join me in welcoming, `Jared Still`, an expert `Perl` hacker to `Team PWC`. Thank you for sharing the first solution in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-333/jkstill/perl/ch-1.pl). We are thrilled to have you on board.

I also want to acknowledge `Humberto Massa` contributions for [**Week #332**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-332/massa/raku) and [**Week #333**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-333/massa/raku) which I missed last week.

Additionally, we had some late contributions to the `Week #332` by [**Andreas Mahnke**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-332/mahnkong/perl) and [**Kjetil Skotheim**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-332/kjetillll/perl). I hope you both had a wonderful holiday.

Thanks to these late submissions, the `Week #332` has now crossed the magical `100+` contributions mark. With this achievement, we've now had four consecutive weeks with `100+` contributions, a fantastic milestone for `Team PWC` in the year `2025`.

Welcome back, `Dave Jacoby` and thanks for the yet another [**pure tech post**](https://jacoby-lpwk.onrender.com/2025/08/07/weekly-challenge-333-back-in-the-saddle-again.html).

On a personal note, a very good friend recently reminded me that `The Weekly Challenge` has been running for over `six years` now. Honestly, it doesn't feel real, what an incredible journey.

Thank you all for your continued support and enthusiasm.

`Happy Hacking!!`

***

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `329` &nbsp;&nbsp;|&nbsp;&nbsp; 46 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|
|&nbsp;&nbsp; `330` &nbsp;&nbsp;|&nbsp;&nbsp; 50 &nbsp;&nbsp;|&nbsp;&nbsp; 29 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|
|&nbsp;&nbsp; `331` &nbsp;&nbsp;|&nbsp;&nbsp; 52 &nbsp;&nbsp;|&nbsp;&nbsp; 27 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `332` &nbsp;&nbsp;|&nbsp;&nbsp; 50 &nbsp;&nbsp;|&nbsp;&nbsp; 30 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|
|&nbsp;&nbsp; `333` &nbsp;&nbsp;|&nbsp;&nbsp; 54 &nbsp;&nbsp;|&nbsp;&nbsp; 27 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `329` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 46 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `330` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 62 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `331` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 62 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|
|&nbsp;&nbsp; `332` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 64 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|
|&nbsp;&nbsp; `333` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 58 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (3528)
     2. Rust       (966)
     3. Ruby       (813)
     4. Haskell    (799)
     5. Lua        (747)
     6. C++        (639)
     7. C          (594)
     8. JavaScript (576)
     9. Go         (523)
    10. BQN        (456)

<br>

### Blogs with Creative Title
***

#### &nbsp;&nbsp;1. [Straight Zeros](https://raku-musings.com/straight-zeros.html) by Arne Sommer.
#### &nbsp;&nbsp;2. [Odd last date letters, binary word list buddy](https://dev.to/boblied/pwc-331-332-odd-last-date-letters-binary-word-list-buddy-ib6) by Bob Lied.
#### &nbsp;&nbsp;3. [Back in the Saddle Again](https://jacoby-lpwk.onrender.com/2025/08/07/weekly-challenge-333-back-in-the-saddle-again.html) by Dave Jacoby.
#### &nbsp;&nbsp;4. [Shift and Duplicate](https://github.sommrey.de/the-bears-den/2025/08/08/ch-333.html) by Jorg Sommrey.
#### &nbsp;&nbsp;5. [streaming numbers](https://fluca1978.github.io/2025/08/04/PerlWeeklyChallenge333.html) by Luca Ferrari.
#### &nbsp;&nbsp;6. [Double O Straight (Not Stirred)](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-333/challenge-333/matthias-muth#readme) by Matthias Muth.
#### &nbsp;&nbsp;7. [Zero is Not the End of the Line](https://packy.dardan.com/b/Zd) by Packy Anderson.
#### &nbsp;&nbsp;8. [Straight zeroes](http://ccgi.campbellsmiths.force9.co.uk/challenge/333) by Peter Campbell Smith.
#### &nbsp;&nbsp;9. [Duplicate Straights Are a Line of Zeroes](https://blog.firedrake.org/archive/2025/08/The_Weekly_Challenge_333__Duplicate_Straights_Are_a_Line_of_Zeroes.html) by Roger Bell_West.
#### 10. [Duplicate Lines](https://dev.to/simongreennet/weekly-challenge-duplicate-lines-6pd) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 44,776 (`+106`)
#### 2. Pull Requests: 12,456 (`+40`)
#### 3. Contributors: 263 (`+1`)
#### 4. Fork: 334 (`+1`)
#### 5. Stars: 195

<br>

## SPONSOR {#SPONSOR}
***

With start of `Week #268`, we have a new sponsor `Lance Wicks` until the end of year `2025`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 333](/blog/recap-challenge-333)** by `Mohammad Sajid Anwar`.

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

[**Jared Still**](https://github.com/jkstill), an expert `Perl` hacker from `Portland, Oregon` joined `Team PWC`.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}
***

Please check out the guest contributions for the [**Week #333**](/blog/guest-contribution/#333).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Range Sum {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a list integers and pair of indices..

Write a script to return the sum of integers between the given indices (inclusive).

<br>

#### Example 1

    Input: @ints = (-2, 0, 3, -5, 2, -1), $x = 0, $y = 2
    Output: 1

    Elements between indices (0, 2) => (-2, 0, 3)
    Range Sum: (-2) + 0 + 3 => 1

<br>

#### Example 2

    Input: @ints = (1, -2, 3, -4, 5), $x = 1, $y = 3
    Output: -3

    Elements between indices (1, 3) => (-2, 3, -4)
    Range Sum: (-2) + 3 + (-4) => -3

<br>

#### Example 3

    Input: @ints = (1, 0, 2, -1, 3), $x = 3, $y = 4
    Output: 2

    Elements between indices (3, 4) => (-1, 3)
    Range Sum: (-1) + 3 => 2

<br>

#### Example 4

    Input: @ints = (-5, 4, -3, 2, -1, 0), $x = 0, $y = 3
    Output: -2

    Elements between indices (0, 3) => (-5, 4, -3, 2)
    Range Sum: (-5) + 4 + (-3) + 2 => -2

<br>

#### Example 5

    Input: @ints = (-1, 0, 2, -3, -2, 1), $x = 0, $y = 2
    Output: 1

    Elements between indices (0, 2) => (-1, 0, 2)
    Range Sum: (-1) + 0 + 2 => 1

<br>

## Task 2: Nearest Valid Point {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given current location as two integers: `x` and `y`. You are also given a list of points on the grid.

A point is considered valid if it shares either the same `x-coordinate` or the same `y-coordinate` as the current location.

Write a script to return the index of the valid point that has the smallest `Manhattan distance` to the current location. If multiple valid points are tied for the smallest distance, return the one with the `lowest index`. If no valid points exist, return `-1`.

<br>

> The Manhattan distance between two points (x1, y1) and (x2, y2) is calculated as: |x1 - x2| + |y1 - y2|

<br>

#### Example 1

    Input: $x = 3, $y = 4, @points ([1, 2], [3, 1], [2, 4], [2, 3])
    Output: 2

    Valid points: [3, 1] (same x), [2, 4] (same y)

    Manhattan distances:
        [3, 1] => |3-3| + |4-1| = 3
        [2, 4] => |3-2| + |4-4| = 1

    Closest valid point is [2, 4] at index 2.

<br>

#### Example 2

    Input: $x = 2, $y = 5, @points ([3, 4], [2, 3], [1, 5], [2, 5])
    Output: 3

    Valid points: [2, 3], [1, 5], [2, 5]

    Manhattan distances:
        [2, 3] => 2
        [1, 5] => 1
        [2, 5] => 0

    Closest valid point is [2, 5] at index 3.

<br>

#### Example 3

    Input: $x = 1, $y = 1, @points ([2, 2], [3, 3], [4, 4])
    Output: -1

    No point shares x or y with (1, 1).

<br>

#### Example 4

    Input: $x = 0, $y = 0, @points ([0, 1], [1, 0], [0, 2], [2, 0])
    Output: 0

    Valid points: all of them

    Manhattan distances:
        [0, 1] => 1
        [1, 0] => 1
        [0, 2] => 2
        [2, 0] => 2

    Tie between index 0 and 1, pick the smaller index: 0

<br>

#### Example 5

    Input: $x = 5, $y = 5, @points ([5, 6], [6, 5], [5, 4], [4, 5])
    Output: 0

    Valid points: all of them
        [5, 6] => 1
        [6, 5] => 1
        [5, 4] => 1
        [4, 5] => 1

    All tie, return the one with the lowest index: 0

<br>

***

Last date to submit the solution `23:59 (UK Time) Sunday 17th August 2025`.

***
