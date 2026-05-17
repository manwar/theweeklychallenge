---
title: "The Weekly Challenge - 373"
date: 2026-05-11T00:00:00+00:00
description: "The Weekly Challenge - 373"
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
### &nbsp;&nbsp;9. [TASK #1: Equal List](#TASK1)
### 10. [TASK #2: List Division](#TASK2)

## HEADLINES {#HEADLINES}
***
Welcome to the `Week #373` of `The Weekly Challenge`.

I would like to thank `Early Bird Club` members for helping me review the weekly challenge. Without your support, I wouldn't have come this far. I would also like to thank each and everyone who suggested fun challenges.

Welcome back, `HVukman`, after a short break and thanks for your contributions in [**Lua**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-372/HVukman).

Thank you, `Bob Lied`, for sharing solutions to the past challenges.

Thank you, `Lubos Kolouch`, for sharing blog post to the past challenges.

With so much happening, the overall stats now looking much better. I will share more on that next week.

Sorry for the delay in this week challenge.

Below is my contributions to the `Task #1` of `Week #372`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-372/mohammad-anwar/perl/ch-1.pl)
***
```perl
sub rearrange_spaces {
    my ($text) = @_;

    my $total_spaces = ($text =~ tr/ //);
    my @words        = split(' ', $text);
    my $word_count   = scalar @words;

    if ($word_count == 1) {
        return $words[0] . (" " x $total_spaces);
    }

    my $gap_count      = $word_count - 1;
    my $spaces_per_gap = int($total_spaces / $gap_count);
    my $remainder      = $total_spaces % $gap_count;
    my $gap_string     = " " x $spaces_per_gap;
    my $result         = join($gap_string, @words);
    $result .= (" " x $remainder);

    return $result;
}
```

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-372/mohammad-anwar/raku/ch-1.raku)
***
```raku
sub rearrange-spaces($text) {
    my $total-spaces = $text.comb(' ').elems;
    my @words        = $text.words;
    my $word-count   = @words.elems;

    if $word-count == 1 {
        return @words[0] ~ (" " x $total-spaces);
    }

    my $gap-count      = $word-count - 1;
    my $spaces-per-gap = $total-spaces div $gap-count;
    my $remainder      = $total-spaces % $gap-count;
    my $gap-string     = " " x $spaces-per-gap;
    my $result         = @words.join($gap-string);
    $result ~= (" " x $remainder);

    return $result;
}
```

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-372/mohammad-anwar/python/ch-1.py)
***
```python
def rearrange_spaces(text: str) -> str:
    total_spaces = text.count(' ')
    words        = text.split()
    word_count   = len(words)

    if word_count <= 1:
        return (words[0] if words else "") + (' ' * total_spaces)

    gap_count      = word_count - 1
    spaces_per_gap = total_spaces // gap_count
    remainder      = total_spaces % gap_count
    gap_string     = ' ' * spaces_per_gap

    return gap_string.join(words) + (' ' * remainder)
```

Thank you `Team PWC`, once again.

`Happy Hacking!!`
***

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `368` &nbsp;&nbsp;|&nbsp;&nbsp; 47 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|
|&nbsp;&nbsp; `369` &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 27 &nbsp;&nbsp;|
|&nbsp;&nbsp; `370` &nbsp;&nbsp;|&nbsp;&nbsp; 52 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `371` &nbsp;&nbsp;|&nbsp;&nbsp; 46 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
|&nbsp;&nbsp; `372` &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
***

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `368` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 80 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|
|&nbsp;&nbsp; `369` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 86 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|
|&nbsp;&nbsp; `370` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 50 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `371` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 68 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `372` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 73 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|
***

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (4375)
     2. Rust       (1151)
     3. C          (1024)
     3. Ruby       (903)
     5. Haskell    (897)
     6. Lua        (892)
     7. C++        (716)
     8. Go         (684)
     9. JavaScript (639)
    10. Java       (532)

### Blogs with Creative Title
***

#### 1. [Spaces at Large](https://raku-musings.com/spaces-at-large.html) by Arne Sommer.
#### 2. [Regular Sub-Gaps](https://github.sommrey.de/the-bears-den/2026/05/08/ch-372.html) by Jorg Sommrey.
#### 3. [Very Stringish](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-372/challenge-372/matthias-muth#readme) by Matthias Muth.
#### 4. [Empty Substrings and Empty Spaces](https://packy.dardan.com/b/p3) by Packy Anderson.
#### 5. [Strings of strings](http://ccgi.campbellsmiths.force9.co.uk/challenge/372) by Peter Campbell Smith.
#### 6. [Space is the Largest Place](https://blog.firedrake.org/archive/2026/05/The_Weekly_Challenge_372__Space_is_the_Largest_Place.html) by Roger Bell_West.
#### 7. [Distant spaces](https://dev.to/simongreennet/weekly-challenge-distant-spaces-2839) by Simon Green.
***

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***
#### 1. Commits: 49,533 (`+126`)
#### 2. Pull Requests: 14,074 (`+37`)
#### 3. Contributors: 278
#### 4. Fork: 349
#### 5. Stars: 212
***

## SPONSOR {#SPONSOR}
***
With start of `Week #355`, we have a new sponsor `Marc Perry` until the end of year `2026`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance. You can find more informations [**here**](/sponsors).

## RECAP {#RECAP}
***
Quick recap of **[The Weekly Challenge - 372](/blog/recap-challenge-372)** by `Mohammad Sajid Anwar`.

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
Please check out the guest contributions for the [**Week #372**](/blog/guest-contribution/#372).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

## Task 1: Equal List {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given two arrays of strings.

Write a script to return true if the two given array represent the same strings otherwise false.

#### Example 1

    Input: @arr1 = ("a", "bc")
           @arr2 = ("ab", "c")
    Output: true

    Array 1: "a" + "bc" = "abc"
    Array 2: "ab" + "c" = "abc"

#### Example 2

    Input: @arr1 = ("a", "b", "c")
           @arr2 = ("a", "bc")
    Output: true

    Array 1: "a" + "b" + "c" = "abc"
    Array 2: "a" + "bc" = "abc"

#### Example 3

    Input: @arr1 = ("a", "bc")
           @arr2 = ("a", "c", "b")
    Output: false

    Array 1: "a" + "bc" = "abc"
    Array 2: "a" + "c" + "b" = "acb"

#### Example 4

    Input: @arr1 = ("ab", "c", "")
           @arr2 = ("", "a", "bc")
    Output: true

    Array 1: "ab" + "c" + "" = "abc"
    Array 2: ""  + "a" + "bc" = "abc"

#### Example 5

    Input: @arr1 = ("p", "e", "r", "l")
           @arr2 = ("perl")
    Output: true

    Array 1: "p" + "e" + "r" + "l" = "perl"
    Array 2: "perl"

## Task 2: List Division {#TASK2}
##### **Submitted by:** [Mark Anderson](https://github.com/andemark)
***

You are given a list and a non-negative integer.

Write a script to divide the given list into given non-negative integer equal parts. Return -1 if the integer is more than the size of the list.

#### Example 1

    Input: @list = (1,2,3,4,5), $n = 2
    Output: ((1,2,3), (4,5))

    5 / 2 = 2 remainder 1.
    The extra element goes into the first chunk.

#### Example 2

    Input: @list = (1,2,3,4,5,6), $n = 3
    Output: ((1,2), (3,4), (5,6))

    6 / 3 = 2 remainder 0.

#### Example 3

    Input: @list = (1,2,3), $n = 2
    Output: ((1,2), (3))

#### Example 4

    Input: @list = (1,2,3,4,5,6,7,8,9,10), $n = 5
    Output: ((1,2), (3,4), (5,6), (7,8), (9,10))

#### Example 5

    Input: @list = (1,2,3), $n = 4
    Output: -1

#### Example 6

    Input: @list = (72,57,89,55,36,84,10,95,99,35), $n = 7;
    Output: ((72,57), (89,55), (36,84), (10), (95), (99), (35))

***
By submitting a response to the challenge you agree that your name or pseudonym, any photograph you supply and any other personal information contained in your submission may be published on this website and the associated mobile app. Last date to submit the solution `23:59 (UK Time) Sunday 17th May 2026`.
