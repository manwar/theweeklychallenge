---
title: "The Weekly Challenge - 360"
date: 2026-02-09T00:00:00+00:00
description: "The Weekly Challenge - 360"
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
### &nbsp;&nbsp;9. [TASK #1: Text Justifier](#TASK1)
### 10. [TASK #2: Word Sorter](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #360` of `The Weekly Challenge`.

Recent contributions to past challenges in **C** have jumped it from rank **#9** to **#7**. Congratulations to all **C** contributors.

There's a tough fight between **Ruby** and **Haskell**. Let's see if **Ruby** can hold its position.

By the way, we got our first centurion week of **2026**, a week with **100+** contributions, and it was **Week #358**.

We've had a decent start to the year, so well done **Team PWC**.

***

<br>

Below is my contributions to the `Task #1` of `Week #359`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-359/mohammad-anwar/perl/ch-1.pl)

```perl
sub digital_root_additive_persistence {
    my $num = shift;

    return (0, $num) if $num < 10;

    my $sum = 0;
    $sum += $_ for split //, $num;
    my ($count, $root) = digital_root_additive_persistence($sum);

    return ($count + 1, $root);
}
```

<br>

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-359/mohammad-anwar/raku/ch-1.raku)

```raku
sub digital-root-additive-persistence(Int $num) {
    return (0, $num) if $num < 10;

    my $sum = $num.comb.sum;
    my ($count, $root) = digital-root-additive-persistence($sum);

    return ($count + 1, $root);
}
```

<br>

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-359/mohammad-anwar/python/ch-1.py)

```python
def digital_root_additive_persistence(num):
    if num < 10:
        return (0, num)

    digit_sum = sum(int(digit) for digit in str(num))
    count, root = digital_root_additive_persistence(digit_sum)

    return (count + 1, root)
```

<br>

Thank you `Team PWC`, once again.

`Happy Hacking!!`

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `355` &nbsp;&nbsp;|&nbsp;&nbsp; 53 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|
|&nbsp;&nbsp; `356` &nbsp;&nbsp;|&nbsp;&nbsp; 48 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `357` &nbsp;&nbsp;|&nbsp;&nbsp; 52 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|
|&nbsp;&nbsp; `358` &nbsp;&nbsp;|&nbsp;&nbsp; 55 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 28 &nbsp;&nbsp;|
|&nbsp;&nbsp; `359` &nbsp;&nbsp;|&nbsp;&nbsp; 56 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `355` &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|&nbsp;&nbsp; 69 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|
|&nbsp;&nbsp; `356` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 39 &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|
|&nbsp;&nbsp; `357` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 69 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `358` &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|&nbsp;&nbsp; 69 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|
|&nbsp;&nbsp; `359` &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 68 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (4107)
     2. Rust       (1099)
     3. Ruby       (867)
     4. Haskell    (863)
     5. Lua        (837)
     6. C++        (690)
     7. C          (647)
     8. Go         (634)
     8. JavaScript (619)
    10. BQN        (503)

<br>

### Blogs with Creative Title
***

#### &nbsp;&nbsp;1. [Root Reduction](https://raku-musings.com/root-reduction.html) by Arne Sommer.
#### &nbsp;&nbsp;2. [Reduced Roots](https://github.sommrey.de/the-bears-den/2026/02/06/ch-359.html) by Jorg Sommrey.
#### &nbsp;&nbsp;3. [quick and dirty!](https://fluca1978.github.io/2026/02/06/PerlWeeklyChallenge359.html) by Luca Ferrari.
#### &nbsp;&nbsp;4. [Loops Considered](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-359/challenge-359/matthias-muth#readme) by Matthias Muth.
#### &nbsp;&nbsp;5. [Root It All You Reduce](https://packy.dardan.com/b/ia) by Packy Anderson.
#### &nbsp;&nbsp;6. [Persistent reduction](http://ccgi.campbellsmiths.force9.co.uk/challenge/359) by Peter Campbell Smith.
#### &nbsp;&nbsp;7. [Roots and Digits](https://blog.firedrake.org/archive/2026/02/The_Weekly_Challenge_359__Roots_and_Digits.html) by Roger Bell_West.
#### &nbsp;&nbsp;8. [Digital reduction](https://dev.to/simongreennet/weekly-challenge-digital-reduction-1aci) by Simon Green.
#### &nbsp;&nbsp;9. [Return to Sender](https://blog.ysth.info/return-to-sender-rejecting-letters-three-different-ways-weekly-challenge-359-part-2) by Yitzchak Scott-Thoennes.
#### 10. [I Contain Multitudes](https://blog.ysth.info/i-contain-multitudes-returning-multiple-values-in-go-python-and-perl) by Yitzchak Scott-Thoennes.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 47,748 (`+145`)
#### 2. Pull Requests: 13,513 (`+46`)
#### 3. Contributors: 273
#### 4. Fork: 349
#### 5. Stars: 209

<br>

## SPONSOR {#SPONSOR}
***

We are looking for sponsor for monthly prize pot of `US $50`. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 359](/blog/recap-challenge-359)** by `Mohammad Sajid Anwar`.

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

Please check out the guest contributions for the [**Week #359**](/blog/guest-contribution/#359).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Text Justifier {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a string and a width.

Write a script to return the string that centers the text within that width using asterisks * as padding.

#### Example 1

    Input: $str = "Hi", $width = 5
    Output: "*Hi**"

    Text length = 2, Width = 5
    Need 3 padding characters total
    Left padding: 1 star, Right padding: 2 stars

<br>

#### Example 2

    Input: $str = "Code", $width = 10
    Output: "***Code***"

    Text length = 4, Width = 10
    Need 6 padding characters total
    Left padding: 3 stars, Right padding: 3 stars

<br>

#### Example 3

    Input: $str = "Hello", $width = 9
    Output: "**Hello**"

    Text length = 5, Width = 9
    Need 4 padding characters total
    Left padding: 2 stars, Right padding: 2 stars

<br>

#### Example 4

    Input: $str = "Perl", $width = 4
    Output: "Perl"

    No padding needed

<br>

#### Example 5

    Input: $str = "A", $width = 7
    Output: "***A***"

    Text length = 1, Width = 7
    Need 6 padding characters total
    Left padding: 3 stars, Right padding: 3 stars

<br>

#### Example 6

    Input: $str = "", $width = 5
    Output: "*****"

    Text length = 0, Width = 5
    Entire output is padding

<br>

## Task 2: Word Sorter {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are give a sentence.

Write a script to order words in the given sentence alphabetically but keeps the words themselves unchanged.

#### Example 1

    Input: $str = "The quick brown fox"
    Output: "brown fox quick The"

<br>

#### Example 2

    Input: $str = "Hello    World!   How   are you?"
    Output: "are Hello How World! you?"

<br>

#### Example 3

    Input: $str = "Hello"
    Output: "Hello"

<br>

#### Example 4

    Input: $str = "Hello, World! How are you?"
    Output: "are Hello, How World! you?"

<br>

#### Example 5

    Input: $str = "I have 2 apples and 3 bananas!"
    Output: "2 3 and apples bananas! have I"

<br>

***

Last date to submit the solution `23:59 (UK Time) Sunday 14th February 2026`.

***
