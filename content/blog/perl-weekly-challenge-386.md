---
title: "The Weekly Challenge - 386"
date: 2026-08-10T00:00:00+00:00
description: "The Weekly Challenge - 386"
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
### &nbsp;&nbsp;9. [TASK #1: Reverse Base](#TASK1)
### 10. [TASK #2: Rational Numbers](#TASK2)

## HEADLINES {#HEADLINES}
***
Welcome to the `Week #386` of `The Weekly Challenge`.

I am surprised by the dip in contributions in guest languages. Could it be the type of challenges we are working with reently? I can't say for sure.

We have group of regulars who consistently share the knowledge with us every week.

For me, reviewing the blog post is fun, reading the story behind each solution is eye-opener for me.

Keep contributing and spreading words about the weekly fun.

Below is my contributions to the `Task #1` of `Week #385`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-385/mohammad-anwar/perl/ch-1.pl)
***
```perl
sub uncommon_words {
    my ($s1, $s2) = @_;

    my %count;
    $count{$_}++ for split ' ', "$s1 $s2";
    return join ' ', sort grep { $count{$_} == 1 } keys %count;
}
```

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-385/mohammad-anwar/raku/ch-1.raku)
***
```raku
sub uncommon-words($s1, $s2) {
    my %count;
    %count{$_}++ for "$s1 $s2".words;
    return %count.grep(*.value == 1).map(*.key).sort.join(' ');
}
```

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-385/mohammad-anwar/python/ch-1.py)
***
```python
def uncommon_words(s1: str, s2: str) -> str:
    count = {}
    for word in f"{s1} {s2}".split():
        count[word] = count.get(word, 0) + 1

    return " ".join(sorted([word for word, c in count.items() if c == 1]))
```

Thank you `Team PWC`, once again.

`Happy Hacking!!`
***

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `381` &nbsp;&nbsp;|&nbsp;&nbsp; 43 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `382` &nbsp;&nbsp;|&nbsp;&nbsp; 35 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `383` &nbsp;&nbsp;|&nbsp;&nbsp; 46 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `384` &nbsp;&nbsp;|&nbsp;&nbsp; 45 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `385` &nbsp;&nbsp;|&nbsp;&nbsp; 44 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
***

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `381` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 78 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|
|&nbsp;&nbsp; `382` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|
|&nbsp;&nbsp; `383` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 32 &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|
|&nbsp;&nbsp; `384` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 36 &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|
|&nbsp;&nbsp; `385` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 39 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
***

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (4549)
     2. Rust       (1207)
     3. C          (1060)
     4. Haskell    (942)
     5. Ruby       (935)
     6. Lua        (919)
     7. C++        (743)
     8. Go         (728)
     9. JavaScript (648)
    10. Java       (532)

### Blogs with Creative Title
***

#### 1. [Outermost Uncommon](https://raku-musings.com/outermost-uncommon.html) by Arne Sommer.
#### 2. [Outermost Uncommons](https://github.sommrey.de/the-bears-den/2026/08/07/ch-385.html) by Jorg Sommrey.
#### 3. [Uncommonly Recursive](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-385/matthias-muth/README.md) by Matthias Muth.
#### 4. [Parenthetically Uncommon](https://packy.dardan.com/b/wk) by Packy Anderson.
#### 5. [Lonely words and (outer)](http://ccgi.campbellsmiths.force9.co.uk/challenge/385) by Peter Campbell Smith.
#### 6. [Uncommon Parentheses](https://blog.firedrake.org/archive/2026/08/The_Weekly_Challenge_385__Uncommon_Parentheses.html) by Roger Bell_West.
#### 7. [Uncommon parentheses](https://dev.to/simongreennet/weekly-challenge-uncommon-parentheses-16hf) by Simon Green.

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***
#### 1. Commits: 50,869 (`+105`)
#### 2. Pull Requests: 14,527 (`+35`)
#### 3. Contributors: 282
#### 4. Fork: 353
#### 5. Stars: 219

## SPONSOR {#SPONSOR}
***
With start of `Week #355`, we have a new sponsor `Marc Perry` until the end of year `2026`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance. You can find more informations [**here**](/sponsors).

## RECAP {#RECAP}
***
Quick recap of **[The Weekly Challenge - 385](/blog/recap-challenge-385)** by `Mohammad Sajid Anwar`.

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
Please check out the guest contributions for the [**Week #385**](/blog/guest-contribution/#385).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

## Task 1: Reverse Base {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a string representing a number, and an integer specifying the base of that representation.

Write a function to convert this string to an integer. (For bases greater than 10, use characters A-Z, a-z, + and / in that order.)

#### Example 1

    Input: $num = "101010", $base = 2
    Output: 42

#### Example 2

    Input: $num = "EEADEE", $base = 16
    Output: 15642094

#### Example 3

    Input: $num = "755", $base = 8
    Output: 493

#### Example 4

    Input: $num = "1BRJB", $base = 36
    Output: 2228519

#### Example 5

    Input: $num = "7MyqL", $base = 64
    Output: 123456789

## Task 2: Rational Numbers {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given two strings representing non-negative rational numbers.

Write a script to return true if the two given rational numbers are same otherwise false.

#### Example 1

    Input: $rat1 = "0.(12)"
           $rat2 = "0.(121)"
    Output: false

    Expansion of "0.(12)"  = 0.12 12 12 12
    Expansion of "0.(121)" = 0.121 121 121

#### Example 2

    Input: $rat1 = "0.1(23)"
           $rat2 = "0.12(32)"
    Output: true

    Expansion of "0.1(23)"  = 0.1 23 23 23
    Expansion of "0.12(32)" = 0.12 32 32 32

#### Example 3

    Input: $rat1 = "0.1(234)"
           $rat2 = "0.12(342)"
    Output: true

    Expansion of "0.1(234)"  = 0.1 234 234 234
    Expansion of "0.12(342)" = 0.12 342 342 342

#### Example 4

    Input: $rat1 = "12.99(99)"
           $rat2 = "13."
    Output: true

#### Example 5

    Input: $rat1 = "0.(123)"
           $rat2 = "0.1(231)"
    Output: true

***
By submitting a response to the challenge you agree that your name or pseudonym, any photograph you supply and any other personal information contained in your submission may be published on this website and the associated mobile app. Last date to submit the solution `23:59 (UK Time) Sunday 16th August 2026`.
