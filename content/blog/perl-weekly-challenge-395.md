---
title: "The Weekly Challenge - 395"
date: 2026-10-12T00:00:00+00:00
description: "The Weekly Challenge - 395"
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
### &nbsp;&nbsp;9. [TASK #1: Complex Number](#TASK1)
### 10. [TASK #2: Word Squares](#TASK2)

## HEADLINES {#HEADLINES}
***
Welcome to the `Week #395` of `The Weekly Challenge`.

We are already in the second week of **October** and **Hacktoberfest 2026** is happening everywhere. Just curious, if any fellow **Team PWC** members taking part in the annual fest. I noticed the change in the format this year. It is no longer, submit pull request and get your goodies.

I have been staying away from the fun project for sometime because of lack of time. Having said, the new format is not my cup of tea. Please do share what you think of it.

I am looking forward to **Advent Calendar 2026**. It is so much fun, looking back past contributions. I find it hard to pick only **24** from so many beautiful contributions.

Below is my contributions to the `Task #1` of `Week #394`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-394/mohammad-anwar/perl/ch-1.pl)
***
```perl
sub min_swaps($str) {
    my @chars = split //, $str;
    my $calc  = sub {
        my ($start_lower) = @_; # 1 for lower-first, 0 for upper-first
        my ($swaps, $target) = (0, 0);
        for my $i (0 .. $#chars) {
            my $is_lower = ($chars[$i] ge 'a' && $chars[$i] le 'z') ? 1 : 0;
            if ($is_lower == $start_lower) {
                $swaps  += abs($i - $target);
                $target += 2;
            }
        }
        return $swaps;
    };

    return min($calc->(1), $calc->(0));
}
```

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-394/mohammad-anwar/raku/ch-1.raku)
***
```raku
sub min-swaps($str) {
    my @chars = $str.comb;
    my $calc  = sub ($start_lower) {
        my ($swaps, $target) = (0, 0);
        for 0 .. @chars.end -> $i {
            my $is_lower = @chars[$i] ~~ /<:Ll>/ ?? 1 !! 0;
            if $is_lower == $start_lower {
                $swaps  += abs($i - $target);
                $target += 2;
            }
        }
        return $swaps;
    };

    return min($calc(1), $calc(0));
}
```

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-394/mohammad-anwar/python/ch-1.py)
***
```python
def min_swaps(string):
    chars = list(string)

    def calc(start_lower):
        swaps = 0
        target = 0
        for i, char in enumerate(chars):
            is_lower = 1 if 'a' <= char <= 'z' else 0
            if is_lower == start_lower:
                swaps += abs(i - target)
                target += 2
        return swaps

    return min(calc(1), calc(0))
```

Thank you `Team PWC`, once again.

`Happy Hacking!!`
***

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `390` &nbsp;&nbsp;|&nbsp;&nbsp; 37 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `391` &nbsp;&nbsp;|&nbsp;&nbsp; 41 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|
|&nbsp;&nbsp; `392` &nbsp;&nbsp;|&nbsp;&nbsp; 41 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `393` &nbsp;&nbsp;|&nbsp;&nbsp; 41 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `394` &nbsp;&nbsp;|&nbsp;&nbsp; 36 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|
***

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `390` &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|&nbsp;&nbsp; 28 &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|
|&nbsp;&nbsp; `391` &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|
|&nbsp;&nbsp; `392` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 47 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `393` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 65 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|
|&nbsp;&nbsp; `394` &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|&nbsp;&nbsp; 40 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
***

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (4661)
     2. Rust       (1243)
     3. C          (1075)
     4. Haskell    (967)
     5. Ruby       (949)
     6. Lua        (933)
     7. C++        (758)
     8. Go         (732)
     9. JavaScript (658)
    10. Java       (532)

### Blogs with Creative Title
***

#### 1. [A Case of Vowels](https://raku-musings.com/case-of-vowels.html) by Arne Sommer.
#### 2. [Regular Alternations](https://github.sommrey.de/the-bears-den/2026/10/09/ch-394.html) by Jorg Sommrey.
#### 3. [Alternate Tune, Alternate View](https://packy.dardan.com/b/10R) by Packy Anderson.
#### 4. [Alternation week](http://ccgi.campbellsmiths.force9.co.uk/challenge/394) by Peter Campbell Smith.
#### 5. [Alternating Everything](https://blog.firedrake.org/archive/2026/10/The_Weekly_Challenge_394__Alternating_Everything.html) by Roger Bell_West.
#### 6. [The one about alternating](https://dev.to/simongreennet/weekly-challenge-the-one-about-alternating-2agf) by Simon Green.

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***
#### 1. Commits: 51,654 (`+87`)
#### 2. Pull Requests: 14,812 (`+27`)
#### 3. Contributors: 281
#### 4. Fork: 353
#### 5. Stars: 221 (`+1`)

## SPONSOR {#SPONSOR}
***
With start of `Week #355`, we have a new sponsor `Marc Perry` until the end of year `2026`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance. You can find more informations [**here**](/sponsors).

## RECAP {#RECAP}
***
Quick recap of **[The Weekly Challenge - 394](/blog/recap-challenge-394)** by `Mohammad Sajid Anwar`.

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
Please check out the guest contributions for the [**Week #394**](/blog/guest-contribution/#394).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

## Task 1: Complex Number {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given two complex numbers as string.

Write a script to return the multiplication of the given complex numbers.

> Using the formula: (a + bi) x (c + di) = (ac - bd) + (ad + bc)i

#### Example 1

    Input: $num1 = "1+1i", $num2 = "1+1i"
    Output: "0+2i"

#### Example 2

    Input: $num1 = "1+(-1)i", $num2 = "1+(-1)i"
    Output: "0+(-2)i"

#### Example 3

    Input: $num1 = "0+3i", $num2 = "0+4i"
    Output: "-12+0i"

#### Example 4

    Input: $num1 = "3+4i", $num2 = "3+(-4)i"
    Output: "25+0i"

#### Example 5

    Input: $num1 = "50+(-20)i", $num2 = "-10+30i"
    Output: "100+1700i"

## Task 2: Word Squares {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a list of equal lengths words.

Write a script to arrange a set of words into a grid that reading across any row gives the exact same word as reading down its corresponding column.

#### Example 1

    Input: @words = ("MA", "AM", "MY", "ME")
    Output: ("MA", "AM")

        M A
        A M

#### Example 2

    Input: @words = ("SUN", "USE", "NET", "SEE", "TEN")
    Output: ("SUN", "USE", "NET")

        S U N
        U S E
        N E T

#### Example 3

    Input: @words = ("BOAT", "TEAL", "AREA", "TSAR", "OGRE")
    Output: ("BOAT", "OGRE", "AREA", "TEAL")

        B O A T
        O G R E
        A R E A
        T E A L

#### Example 4

    Input: @words = ("CARD", "AREA", "REAR", "DART")
    Output: ("CARD", "AREA", "REAR", "DART")

        C A R D
        A R E A
        R E A R
        D A R T

#### Example 5

    Input: @words = ("HEART", "TREND", "EMBER", "RESIN", "ABUSE")
    Output: ("HEART", "EMBER", "ABUSE", "RESIN", "TREND")

        H E A R T
        E M B E R
        A B U S E
        R E S I N
        T R E N D

***
By submitting a response to the challenge you agree that your name or pseudonym, any photograph you supply and any other personal information contained in your submission may be published on this website and the associated mobile app. Last date to submit the solution `23:59 (UK Time) Sunday 18th October 2026`.
