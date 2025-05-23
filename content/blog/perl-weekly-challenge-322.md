---
title: "The Weekly Challenge - 322"
date: 2025-05-19T00:00:00+00:00
description: "The Weekly Challenge - 322"
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
### &nbsp;&nbsp;9. [TASK #1: String Format](#TASK1)
### 10. [TASK #2: Rank Array](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #322` of `The Weekly Challenge`.

For the last two weeks, I keep forgetting to mention `Andrew Shitov`, who is back in action. We have had solutions to [**Week #320**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-320/ash/raku) and [**Week #321**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-321/ash/raku) in `Raku` so far.

Welcome back, `Andrew`, it's always a pleasure to have you back. Thank you for your support and contributions.

I would also like to mention, `Luca Ferrari`, for getting back to his full capacity. For sometime, he only shared `Raku` solutions where he used to have mix of all. I noticed he is back with his magic once again. So, thank you for your contributions.

Similarly, `Simon Green`, once again started sharing solutions in `Perl` as well. I know his first choice is always, `Python`. And I must admit, he never disappoints me. Thank you for keeping the spirit high.

With so much happening, we matched the best week contributions of the year `2025`. It was the `Week #312` when we had `95` contributions. It was so close to the target.

Keep sharing the knowledge as always.

Well done, `Team PWC`, and thank you.

***

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `317` &nbsp;&nbsp;|&nbsp;&nbsp; 48 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|
|&nbsp;&nbsp; `318` &nbsp;&nbsp;|&nbsp;&nbsp; 44 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `319` &nbsp;&nbsp;|&nbsp;&nbsp; 38 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `320` &nbsp;&nbsp;|&nbsp;&nbsp; 46 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
|&nbsp;&nbsp; `321` &nbsp;&nbsp;|&nbsp;&nbsp; 44 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|&nbsp;&nbsp; 27 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `317` &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|&nbsp;&nbsp; 50 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|
|&nbsp;&nbsp; `318` &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|&nbsp;&nbsp; 48 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `319` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 58 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|
|&nbsp;&nbsp; `320` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 62 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `321` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 59 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (3372)
     2. Rust       (906)
     3. Ruby       (797)
     4. Haskell    (775)
     5. Lua        (722)
     6. C++        (615)
     7. C          (590)
     8. JavaScript (560)
     9. Go         (484)
    10. BQN        (440)

<br>

### Blogs with Creative Title
***

#### &nbsp;&nbsp;1. [Back to a Unique Evaluation](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2025/05/18) by Adam Russell.
#### &nbsp;&nbsp;2. [Average Backspace](https://raku-musings.com/average-backspace.html) by Arne Sommer.
#### &nbsp;&nbsp;3. [Every Average Tells a Story, Don't It?](https://dev.to/boblied/pwc-321-every-average-tells-a-story-dont-it-bj0) by Bob Lied.
#### &nbsp;&nbsp;4. [Decreasing Order, Oddly](https://jacoby-lpwk.onrender.com/2025/05/15/decreasing-order-oddly-weekly-challenge-321.html) by Dave Jacoby.
#### &nbsp;&nbsp;5. [Stepping Back and Forth](https://github.sommrey.de/the-bears-den/2025/05/18/ch-321.html) by Jorg Sommrey.
#### &nbsp;&nbsp;6. [Distinctive Overlaps](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-321/challenge-321/matthias-muth#readme) by Matthias Muth.
#### &nbsp;&nbsp;7. [Comparatively Distinct, but Great^H^H^H^H^HAverage](https://packy.dardan.com/b/Up) by Packy Anderson.
#### &nbsp;&nbsp;8. [Moving backwards](http://ccgi.campbellsmiths.force9.co.uk/challenge/321) by Peter Campbell Smith.
#### &nbsp;&nbsp;9. [Just an Average Backspace](https://blog.firedrake.org/archive/2025/05/The_Weekly_Challenge_321__Just_an_Average_Backspace.html) by Roger Bell_West.
#### 10. [Compare the Average](https://dev.to/simongreennet/weekly-challenge-compare-the-average-1907) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 43,547 (`+93`)
#### 2. Pull Requests: 12,026 (`+35`)
#### 3. Contributors: 259
#### 4. Fork: 326
#### 5. Stars: 189

<br>

## SPONSOR {#SPONSOR}
***

With start of `Week #268`, we have a new sponsor `Lance Wicks` until the end of year `2025`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 321](/blog/recap-challenge-321)** by `Mohammad Sajid Anwar`.

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

Please check out the guest contributions for the [**Week #321**](/blog/guest-contribution/#321).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: String Format {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a string and a positive integer.

Write a script to format the string, removing any dashes, in groups of size given by the integer. The first group can be smaller than the integer but should have at least one character. Groups should be separated by dashes.

<br>

#### Example 1

    Input: $str = "ABC-D-E-F", $i = 3
    Output: "ABC-DEF"

<br>

#### Example 2

    Input: $str = "A-BC-D-E", $i = 2
    Output: "A-BC-DE"

<br>

#### Example 3

    Input: $str = "-A-B-CD-E", $i = 4
    Output: "A-BCDE"

<br>

## Task 2: Rank Array {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given an array of integers.

Write a script to return an array of the ranks of each element: the lowest value has rank 1, next lowest rank 2, etc. If two elements are the same then they share the same rank.

<br>

#### Example 1

    Input: @ints = (55, 22, 44, 33)
    Output: (4, 1, 3, 2)

<br>

#### Example 2

    Input: @ints = (10, 10, 10)
    Output: (1, 1, 1)

<br>

#### Example 3

    Input: @ints = (5, 1, 1, 4, 3)
    Output: (4, 1, 1, 3, 2)

<br>

***

Last date to submit the solution `23:59 (UK Time) Sunday 25th May 2025`.

***
