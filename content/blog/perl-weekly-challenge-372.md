---
title: "The Weekly Challenge - 372"
date: 2026-05-04T00:00:00+00:00
description: "The Weekly Challenge - 372"
type: post
author: Mohammad Sajid Anwar
tags: ["Perl", "Raku", "Challenge"]
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
### &nbsp;&nbsp;9. [TASK #1: Rearrange Spaces](#TASK1)
### 10. [TASK #2: Largest Substring](#TASK2)

## HEADLINES {#HEADLINES}
***
Welcome to the `Week #372` of `The Weekly Challenge`.

Today is the first `Monday` of the month and time to declare the `Champion of the Month`. With great pride, I announce `Matt Martini` as the next champion. As of today, `Matt`, has contributed `39` solutions in `Perl`.

Below is my contributions to the `Task #1` of `Week #371`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-371/mohammad-anwar/perl/ch-1.pl)
***
```perl
sub missing_character {
    my @seq  = @_;
    my @nums = map { $_ eq '?' ? undef : ord($_) - ord('a') + 1 } @seq;

    my ($x, $y);
    for (0..3) {
        if (defined $nums[$_] && defined $nums[$_ + 1]) {
            my $diff = $nums[$_ + 1] - $nums[$_];
            ($_ % 2 == 0)?($x = $diff):($y = $diff);
        }
    }

    if (!defined $x || !defined $y) {
        # Check if we can find the "other" one via a 2-step jump
        for my $i (0..2) {
            if (defined $nums[$i] && defined $nums[$i + 2]) {
                my $total = $nums[$i + 2] - $nums[$i];
                if (defined $x) {
                    $y = $total - $x;
                }
                elsif (defined $y) {
                    $x = $total - $y;
                }
                else {
                    $x = $y = $total / 2;
                }
            }
        }

        # If still missing one, the pattern is likely constant
        $x //= $y;
        $y //= $x;
    }

    # Find the '?' index and fill it
    my ($idx) = grep { !defined $nums[$_] } 0..4;
    if ($idx == 0) {
        $nums[0] = $nums[1] - $x;
    } else {
        my $step = ($idx - 1) % 2 == 0 ? $x : $y;
        $nums[$idx] = $nums[$idx - 1] + $step;
    }

    return chr($nums[$idx] + ord('a') - 1);
}
```

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-371/mohammad-anwar/raku/ch-1.raku)
***
```raku
sub missing-character(*@seq) {
    my @nums = @seq.map: { $_ eq '?' ?? Nil !! $_.ord - 'a'.ord + 1 };

    my ($x, $y);

    # 2. Identify steps
    for 0..3 -> $i {
        if @nums[$i].defined && @nums[$i + 1].defined {
            my $diff = @nums[$i + 1] - @nums[$i];
            ($i % 2 == 0) ?? ($x = $diff) !! ($y = $diff);
        }
    }

    # 3. Handle missing x or y logic
    if !$x.defined || !$y.defined {
        for 0..2 -> $i {
            if @nums[$i].defined && @nums[$i + 2].defined {
                my $total = @nums[$i + 2] - @nums[$i];
                if $x.defined {
                    $y = $total - $x;
                }
                elsif $y.defined {
                    $x = $total - $y;
                }
                else {
                    $x = $y = $total / 2;
                }
            }
        }
        $x //= $y;
        $y //= $x;
    }

    # 4. Find the '?' index and fill it
    my $idx = @nums.first(!*.defined, :k);

    if $idx == 0 {
        @nums[0] = @nums[1] - $x;
    } else {
        my $step = ($idx - 1) % 2 == 0 ?? $x !! $y;
        @nums[$idx] = @nums[$idx - 1] + $step;
    }

    return (@nums[$idx] + 'a'.ord - 1).chr;
}
```

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-371/mohammad-anwar/python/ch-1.py)
***
```python
def missing_character(seq):
    nums = [ord(char) - ord('a') + 1 if char != '?' else None for char in seq]

    x, y = None, None

    # 2. Identify the steps (x and y)
    for i in range(4):
        if nums[i] is not None and nums[i+1] is not None:
            diff = nums[i+1] - nums[i]
            if i % 2 == 0:
                x = diff
            else:
                y = diff

    # 3. Handle missing x or y using a 2-step jump logic
    if x is None or y is None:
        for i in range(3):
            if nums[i] is not None and nums[i+2] is not None:
                total = nums[i+2] - nums[i]
                if x is not None:
                    y = total - x
                elif y is not None:
                    x = total - y
                else:
                    x = y = total // 2

        # If still missing one, the pattern is likely constant
        if x is None: x = y
        if y is None: y = x

    # 4. Find the '?' index and fill it
    idx = nums.index(None)

    if idx == 0:
        nums[0] = nums[1] - x
    else:
        # Determine if we need the x step or y step based on the gap index
        step = x if (idx - 1) % 2 == 0 else y
        nums[idx] = nums[idx - 1] + step

    return chr(int(nums[idx]) + ord('a') - 1)
```

Thank you `Team PWC`, once again.

`Happy Hacking!!`
***

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `367` &nbsp;&nbsp;|&nbsp;&nbsp; 53 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|
|&nbsp;&nbsp; `368` &nbsp;&nbsp;|&nbsp;&nbsp; 47 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|
|&nbsp;&nbsp; `369` &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 27 &nbsp;&nbsp;|
|&nbsp;&nbsp; `370` &nbsp;&nbsp;|&nbsp;&nbsp; 50 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
|&nbsp;&nbsp; `371` &nbsp;&nbsp;|&nbsp;&nbsp; 46 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
***

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `367` &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 76 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|
|&nbsp;&nbsp; `368` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 80 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|
|&nbsp;&nbsp; `369` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 86 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|
|&nbsp;&nbsp; `370` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 50 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `371` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 68 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
***

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (4360)
     2. Rust       (1147)
     3. C          (1020)
     3. Ruby       (899)
     5. Haskell    (893)
     6. Lua        (886)
     7. C++        (714)
     8. Go         (682)
     9. JavaScript (637)
    10. Java       (532)

### Blogs with Creative Title
***

#### 1. [Missing Equilibrium](https://raku-musings.com/missing-equilibrium.html) by Arne Sommer.
#### 2. [Subset Equilibrium (Just nod if you can hear me)](https://dev.to/boblied/pwc-371-subset-equilibrium-just-nod-if-you-can-hear-me-14im) by Bob Lied.
#### 3. [Missing Equilibria](https://github.sommrey.de/the-bears-den/2026/05/01/ch-371.html) by Jorg Sommrey.
#### 4. [The Missing Equilibrium]() by Matthias Muth.
#### 5. [My subset is-a missing a letter…](https://packy.dardan.com/b/of) by Packy Anderson.
#### 6. [Solve the question and balance the subset](http://ccgi.campbellsmiths.force9.co.uk/challenge/371) by Peter Campbell Smith.
#### 7. [Missing Equilibrium](https://blog.firedrake.org/archive/2026/05/The_Weekly_Challenge_371__Missing_Equilibrium.html) by Roger Bell_West.
#### 8. [Question the bits](https://dev.to/simongreennet/weekly-challenge-question-the-bits-4lnd) by Simon Green.
***

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***
#### 1. Commits: 49,407 (`+123`)
#### 2. Pull Requests: 14,037(`+33`)
#### 3. Contributors: 278
#### 4. Fork: 349 (`+1`)
#### 5. Stars: 212
***

## SPONSOR {#SPONSOR}
***
With start of `Week #355`, we have a new sponsor `Marc Perry` until the end of year `2026`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance. You can find more informations [**here**](/sponsors).

## RECAP {#RECAP}
***
Quick recap of **[The Weekly Challenge - 371](/blog/recap-challenge-371)** by `Mohammad Sajid Anwar`.

## PERL REVIEW {#PERLREVIEW}
***
If you missed any past reviews then please check out the [**collection**](/p5-reviews).

## RAKU REVIEW {#RAKUREVIEW}
***
If you missed any past reviews then please check out the [**collection**](/p6-reviews).

## CHART {#CHART}
***
Please take a look at the [**charts**](/chart) showing interesting data.

I would like to `THANK` every member of the team for their valuable suggestions. Please do share your experience with us.

## NEW MEMBERS {#NEWMEMBERS}
***

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

## GUESTS {#GUESTS}
***
Please check out the guest contributions for the [**Week #371**](/blog/guest-contribution/#371).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

## Task 1: Rearrange Spaces {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a string text of words that are placed among number of spaces.

Write a script to rearrange the spaces so that there is an equal number of spaces between every pair of adjacent words and that number is maximised. If you can't distribute, place the extra spaces at the end. Finally return the string.

#### Example 1

    Input: $str = "  challenge  "
    Output: "challenge    "

    We have 4 spaces and 1 word. So all spaces go to the end.

#### Example 2

    Input: $str = "coding  is  fun"
    Output: "coding  is  fun"

    We have 4 spaces and 3 words (2 gaps). So 2 spaces per gap.

#### Example 3

    Input: $str = "a b c  d"
    Output: "a b c d "

    We have 4 spaces and 4 words (3 gaps). So 1 space per gap and 1 remainder.

#### Example 4

    Input: $str = "  team      pwc  "
    Output: "team          pwc"

    We have 10 spaces and 2 words (1 gap). So 10 spaces per gap.

#### Example 5

    Input: $str = "   the  weekly  challenge  "
    Output: "the    weekly    challenge "

    We have 9 spaces and 3 words (2 gaps). So 4 spaces per gap and 1 remainder.

## Task 2: Largest Substring {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a string.

Write a script to return the length of the largest substring between two equal characters excluding the two characters. Return -1 if there is no such substring.

#### Example 1

    Input: $str = "aaaaa"
    Output: 3

    For character "a", we have substring "aaa".

#### Example 2

    Input: $str = "abcdeba"
    Output: 5

    For character "a", we have substring "bcdeb".

#### Example 3

    Input: $str = "abbc"
    Output: 0

    For character "b", we have substring "".

#### Example 4

    Input: $str = "abcaacbc"
    Output: 4

    For character "a", we have substring "bca".
    For character "b", we have substring "caac".
    For character "c", we have substring "aacb".

#### Example 5

    Input: $str = "laptop"
    Output: 2

    For character "p", we have substring "to".

***
By submitting a response to the challenge you agree that your name or pseudonym, any photograph you supply and any other personal information contained in your submission may be published on this website and the associated mobile app. Last date to submit the solution `23:59 (UK Time) Sunday 10th May 2026`.
