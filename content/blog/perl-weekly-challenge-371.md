---
title: "The Weekly Challenge - 371"
date: 2026-04-27T00:00:00+00:00
description: "The Weekly Challenge - 371"
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
### &nbsp;&nbsp;9. [TASK #1: Missing Letter](#TASK1)
### 10. [TASK #2: Subset Equilibrium](#TASK2)

## HEADLINES {#HEADLINES}
***
Welcome to the `Week #371` of `The Weekly Challenge`.

Welcome aboard, `John Chambers`, and thanks for your first contributions in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-370/jchamml/perl).

Thank you, `Abigail`, for the contributions and blog posts: [**Popular Word**](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-370-1.html) and [**Scramble String**](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-370-2.html).

Below is my contributions to the `Task #1` of `Week #370`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-370/mohammad-anwar/perl/ch-1.pl)
***
```perl
sub most_popular {
    my ($para, @banned) = @_;

    my %b = map { lc $_ => 1 } @banned;
    my %f;
    $f{$_}++ for grep { !$b{$_} } map { lc } $para =~ /[a-zA-Z]+/g;
    return reduce { $f{$b} > $f{$a} ? $b : $a } keys %f;
}
```

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-370/mohammad-anwar/raku/ch-1.raku)
***
```raku
sub most-popular($para, *@banned) {
    my $b = @banned.map(*.lc).Set;
    my %f = $para.lc.comb(/<[a..z]>+/).grep({ $_ ∉ $b }).Bag;
    return %f.pairs.sort({ -.value }).head.key;
}
```

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-370/mohammad-anwar/python/ch-1.py)
***
```python
def most_popular(paragraph, banned):
    banned_set = {word.lower() for word in banned}
    words = re.findall(r'[a-z]+', paragraph.lower())
    counts = Counter(w for w in words if w not in banned_set)
    return counts.most_common(1)[0][0]
```

Thank you `Team PWC`, once again.

`Happy Hacking!!`
***

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `366` &nbsp;&nbsp;|&nbsp;&nbsp; 52 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|
|&nbsp;&nbsp; `367` &nbsp;&nbsp;|&nbsp;&nbsp; 53 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|
|&nbsp;&nbsp; `368` &nbsp;&nbsp;|&nbsp;&nbsp; 47 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|
|&nbsp;&nbsp; `369` &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 27 &nbsp;&nbsp;|
|&nbsp;&nbsp; `370` &nbsp;&nbsp;|&nbsp;&nbsp; 50 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
***

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `366` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 73 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|
|&nbsp;&nbsp; `367` &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 76 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|
|&nbsp;&nbsp; `368` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 80 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|
|&nbsp;&nbsp; `369` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 86 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|
|&nbsp;&nbsp; `370` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 50 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
***

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (4345)
     2. Rust       (1143)
     3. C          (1018)
     3. Ruby       (895)
     5. Haskell    (889)
     6. Lua        (882)
     7. C++        (712)
     8. Go         (680)
     9. JavaScript (635)
    10. Java       (532)

### Blogs with Creative Title
***

#### 1. [Popular Scramble](https://raku-musings.com/popular-scramble.html) by Arne Sommer.
#### 2. [Scramble On, Scramblin' Man](https://dev.to/boblied/pwc-370-scramble-on-scramblin-man-5god) by Bob Lied.
#### 3. [Scrambled Bans](https://github.sommrey.de/the-bears-den/2026/04/24/ch-370.html) by Jorg Sommrey.
#### 4. [Scrambling Back and Forth](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-370/challenge-370/matthias-muth#readme) by Matthias Muth.
#### 5. [The scramble can not stop you / from becoming popu-ler… lar](https://packy.dardan.com/b/nb) by Packy Anderson.
#### 6. [Words and more words](http://ccgi.campbellsmiths.force9.co.uk/challenge/370) by Peter Campbell Smith.
#### 7. [Popular Scramble](https://blog.firedrake.org/archive/2026/04/The_Weekly_Challenge_370__Popular_Scramble.html) by Roger Bell_West.
#### 8. [Popular Scrambling](https://dev.to/simongreennet/weekly-challenge-popular-scrambling-2bba) by Simon Green.
***

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***
#### 1. Commits: 49,284 (`+141`)
#### 2. Pull Requests: 14,004 (`+39`)
#### 3. Contributors: 278 (`+1`)
#### 4. Fork: 348 (`+2`)
#### 5. Stars: 212 (`+2`)
***

## SPONSOR {#SPONSOR}
***
With start of `Week #355`, we have a new sponsor `Marc Perry` until the end of year `2026`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance. You can find more informations [**here**](/sponsors).

## RECAP {#RECAP}
***
Quick recap of **[The Weekly Challenge - 370](/blog/recap-challenge-370)** by `Mohammad Sajid Anwar`.

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

[**John Chambers**](https://github.com/jchamml), an experienced `Perl` hacker joined `Team PWC`.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

## GUESTS {#GUESTS}
***
Please check out the guest contributions for the [**Week #370**](/blog/guest-contribution/#370).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

## Task 1: Missing Letter {#TASK1}
##### **Submitted by:** [Reinier Maliepaard](https://reiniermaliepaard.nl/index.html)
***

You are given a sequence of 5 lowercase letters, with one letter replaced by '?'. Each letter maps to its position in the alphabet ('a = 1', 'b = 2', ..., 'z = 26'). The sequence follows a repeating pattern of step sizes between consecutive letters. The pattern is either a constant step (e.g., '+2, +2, +2, +2') or a simple alternating pattern of two distinct steps (e.g., '+2, +3, +2, +3').

#### Example 1

    Input: @seq = qw(a c ? g i)
    Output: e

    The pattern of the sequence is +2,+2,+2,+2.
    1: a
    3: c
    5: e
    7: g
    9: i

#### Example 2

    Input: @seq = qw(a d ? j m)
    Output: g

    The pattern of the sequence is +3,+3,+3,+3.
    1: a
    4: d
    7: g
    10: j
    13: m

#### Example 3

    Input: @seq = qw(a e ? m q)
    Output: i

    The pattern of the sequence is +4,+4,+4,+4.
    1: a
    5: e
    9: i
    13: m
    17: q

#### Example 4

    Input: @seq = qw(a c f ? k)
    Output: h

    The pattern of the sequence is +2,+3,+2,+3.
    1: a
    3: c
    6: f
    8: h
    11: k

#### Example 5

    Input: @seq = qw(b e g ? l)
    Output: j

    The pattern of the sequence is +3,+2,+3,+2.
    2: b
    5: e
    7: g
    10: j
    12: l

## Task 2: Subset Equilibrium {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given an array of numbers.

Write a script to find all proper subsets with more than one element where the sum of elements equals the sum of their indices.

#### Example 1

    Input: @nums = (2, 1, 4, 3)
    Output: (2, 1), (1, 4), (4, 3), (2, 3)

    Subset 1: (2, 1)
    Values: 2 + 1 = 3
    Positions: 1 + 2 = 3

    Subset 2: (1, 4)
    Values: 1 + 4 = 5
    Positions: 2 + 3 = 5

    Subset 3: (4, 3)
    Values: 4 + 3 = 7
    Positions: 3 + 4 = 7

    Subset 4: (2, 3)
    Values: 2 + 3 = 5
    Positions: 1 + 4 = 5

#### Example 2

    Input: @nums = (3, 0, 3, 0)
    Output: (3, 0), (3, 0, 3)

    Subset 1: (3, 0)
    Values: 3 + 0 = 3
    Positions: 1 + 2 = 3

    Subset 2: (3, 0, 3)
    Values: 3 + 0 + 3 = 6
    Positions: 1 + 2 + 3 = 6

#### Example 3

    Input: @nums = (5, 1, 1, 1)
    Output: (5, 1, 1)

    Subset 1: (5, 1, 1)
    Values: 5 + 1 + 1 = 7
    Positions: 1 + 2 + 4 = 7

#### Example 4

    Input: @nums = (3, -1, 4, 2)
    Output: (3, 2), (3, -1, 4)

    Subset 1: (3, 2)
    Values: 3 + 2 = 5
    Positions: 1 + 4 = 5

    Subset 2: (3, -1, 4)
    Values: 3 + (-1) + 4 = 6
    Positions: 1 + 2 + 3 = 6

#### Example 5

    Input: @nums = (10, 20, 30, 40)
    Output: ()

***
By submitting a response to the challenge you agree that your name or pseudonym, any photograph you supply and any other personal information contained in your submission may be published on this website and the associated mobile app. Last date to submit the solution `23:59 (UK Time) Sunday 3rd May 2026`.
