---
title: "The Weekly Challenge - 392"
date: 2026-09-20T00:00:00+00:00
description: "The Weekly Challenge - 392"
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
### &nbsp;&nbsp;9. [TASK #1: Convert Palindrome](#TASK1)
### 10. [TASK #2: Words Length Product](#TASK2)

## HEADLINES {#HEADLINES}
***
Welcome to the `Week #392` of `The Weekly Challenge`.

What a pleasant surprise to see my friend, `Lance Wicks`, back in action. Thank you for your contribution in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-391/lance-wicks).

I am happy to see, `Roger Bell_West`, is back with complete set of guest language contributions. I really admire his knowledge in so many different programming languages.

There is something I wanted to share with team for some time but I was little bit hesitant.

Having spent nearly `30 years` in professional life, I know there is a very thin line between professional life and personal life.

Having said, I have shared personal matters with team in the past, so why not.

I am not sure, if you noticed in the recent few weeks, I take time to process the contributions. Sometimes, I just cut short the message.

Without going into too much details, I just want to share that I am fighting with health related issues.

The workload at times, is too much to handle. So I take a break during the week.

But as soon as the Friday arrives, I have to get back in action. And it is not just the weekly challenge, as some of you know, I also edit Perl weekly newsletter every alternate week.

So when that comes on top of my weekly challenge task then it becomes really difficult. Luckily this week, no weekly newsletter for me.

Also even when I am not editing the weekly newsletter, I still have to prepare the weekly challenge section for the weekly newsletter.

Don't get me wrong, nobody forced me to do this.

Today, I am able to write few lines because there is no full responsibility of weekly newsletter this week.

I know, I have support of many team members. You know who I am talking about. I will ask for help when I find it really hard.

Below is my contributions to the `Task #1` of `Week #391`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-391/mohammad-anwar/perl/ch-1.pl)
***
```perl
sub median ($in) {
    my @m   = sort { $a <=> $b } map { @$_ } @$in;
    my $mid = @m >> 1;
    return @m % 2 ? $m[$mid] : ($m[$mid - 1] + $m[$mid]) / 2;
}
```

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-391/mohammad-anwar/raku/ch-1.raku)
***
```raku
sub median(@in) {
    my @m   = @in.map(*.Slip).flat.sort;
    my $mid = @m.elems div 2;
    return @m.elems % 2 ?? @m[$mid] !! (@m[$mid - 1] + @m[$mid]) / 2;
}
```

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-391/mohammad-anwar/python/ch-1.py)
***
```python
def median(arrays):
    m   = sorted([item for sublist in arrays for item in sublist])
    mid = len(m) // 2
    return float(m[mid]) if len(m) % 2 != 0 else (m[mid - 1] + m[mid]) / 2.0
```

Thank you `Team PWC`, once again.

`Happy Hacking!!`
***

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `387` &nbsp;&nbsp;|&nbsp;&nbsp; 36 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|
|&nbsp;&nbsp; `388` &nbsp;&nbsp;|&nbsp;&nbsp; 39 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `389` &nbsp;&nbsp;|&nbsp;&nbsp; 41 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `390` &nbsp;&nbsp;|&nbsp;&nbsp; 37 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `391` &nbsp;&nbsp;|&nbsp;&nbsp; 39 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
***

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `387` &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|
|&nbsp;&nbsp; `388` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 70 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|
|&nbsp;&nbsp; `389` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 70 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `390` &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|&nbsp;&nbsp; 28 &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|
|&nbsp;&nbsp; `391` &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|&nbsp;&nbsp; 50 &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|
***

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (4625)
     2. Rust       (1230)
     3. C          (1071)
     4. Haskell    (957)
     5. Ruby       (945)
     6. Lua        (929)
     7. C++        (753)
     8. Go         (732)
     9. JavaScript (654)
    10. Java       (532)

### Blogs with Creative Title
***

#### 1. [Median Box](https://raku-musings.com/median-box.html) by Arne Sommer.
#### 2. [Median Boxes](https://dev.to/boblied/pwc-391-median-boxes-27o4) by Bob Lied.
#### 3. [Arrays of Numbers, Arrays of Boxes](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-391/matthias-muth/README.md) by Matthias Muth.
#### 4. [Old King Cole Was A Merry Old Soul](https://packy.dardan.com/b/zc) by Packy Anderson.
#### 5. [Medians and stacks](http://ccgi.campbellsmiths.force9.co.uk/challenge/391) by Peter Campbell Smith.
#### 6. [Arrange the Median Box](https://blog.firedrake.org/archive/2026/09/The_Weekly_Challenge_391__Arrange_the_Median_Box.html) by Roger Bell_West.
#### 7. [Arranging things](https://dev.to/simongreennet/the-weekly-challenge-arranging-things-57mb) by Simon Green.

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***
#### 1. Commits: 51,388 (`+80`)
#### 2. Pull Requests: 14,720 (`+32`)
#### 3. Contributors: 281
#### 4. Fork: 352
#### 5. Stars: 220

## SPONSOR {#SPONSOR}
***
With start of `Week #355`, we have a new sponsor `Marc Perry` until the end of year `2026`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance. You can find more informations [**here**](/sponsors).

## RECAP {#RECAP}
***
Quick recap of **[The Weekly Challenge - 391](/blog/recap-challenge-391)** by `Mohammad Sajid Anwar`.

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
Please check out the guest contributions for the [**Week #391**](/blog/guest-contribution/#391).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

## Task 1: Convert Palindrome {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a string.

Write a script to convert the given string to palindrome by adding characters in front of it.

#### Example 1

    Input: $str = "pinnipeds"
    Output: "sdepinnipeds"

#### Example 2

    Input: $str = "abcd"
    Output: "dcbabcd"

#### Example 3

    Input: $str = "bananas"
    Output: "sananabananas"

#### Example 4

    Input: $str = "dissident"
    Output: "tnedissident"

#### Example 5

    Input: $str = "cailliachs"
    Output: "shcailliachs"

## Task 2: Words Length Product {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org/)
***

You are given an array of strings.

Write a script to return the maximum value of len($words[i]) * len($words[j]) where the two words do not share common letters. If no such two words exist, return 0.

#### Example 1

    Input: @words = ("a", "ab", "abc", "d", "de", "def")
    Output: 9

    Two words are "abc" and "def".

#### Example 2

    Input: @words = ("a", "aa", "aaa", "aaaa")
    Output: 0

    Since no two words can be chosen without sharing letters, the result is 0.

#### Example 3

    Input: @words = ("meet", "app", "code", "sky", "bold")
    Output: 16

    Two words are "meet" and "bold".

#### Example 4

    Input: @words = ("a", "ab", "abc", "abcd", "efghi")
    Output: 20

    Two words are "abcd" and "efghi".

#### Example 5

    Input: @words = ("xyz", "w", "abcdefg", "hij")
    Output: 21

    Two words are "abcdefg" and "hij".

***
By submitting a response to the challenge you agree that your name or pseudonym, any photograph you supply and any other personal information contained in your submission may be published on this website and the associated mobile app. Last date to submit the solution `23:59 (UK Time) Sunday 27th September 2026`.
