---
title: "The Weekly Challenge - 376"
date: 2026-06-01T00:00:00+00:00
description: "The Weekly Challenge - 376"
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
### &nbsp;&nbsp;9. [TASK #1: Chessboard Squares](#TASK1)
### 10. [TASK #2: Doubled Words](#TASK2)

## HEADLINES {#HEADLINES}
***
Welcome to the `Week #376` of `The Weekly Challenge`.

Today is the first `Monday` of the month, which means it is time to declare the `Champion of the Month`. It is with great pleasure that I announce `David Smith` as our next champion. As of today, he has contributed `30` solutions in `Raku` language.

I was eagerly waiting for the sun to arrive, but now that it's here in full force, I am fighting hay fever. The silver lining is that I have been spending most of my time indoors, which has given me the chance to work on my `TODO` list. I have been writing about my experiments in a blog post, which you can find [**here**](/blogs). Since I have started blogging, I might begin writing about my contributions as well. I don't want to rush though, I'd rather take my time than burn out too quickly.

Below is my contributions to the `Task #1` of `Week #375`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-375/mohammad-anwar/perl/ch-1.pl)
***
```perl
sub count_unique_common {
    my ($array1, $array2) = @_;

    my %freq1;
    my %freq2;
    $freq1{$_}++ for @$array1;
    $freq2{$_}++ for @$array2;

    return scalar grep {
        $freq1{$_} == 1 && exists $freq2{$_} && $freq2{$_} == 1
    } keys %freq1;
}
```

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-375/mohammad-anwar/raku/ch-1.raku)
***
```raku
sub count-unique-common(@array1, @array2) {
    my %freq1;
    my %freq2;

    %freq1{$_}++ for @array1;
    %freq2{$_}++ for @array2;

    return (grep {
        %freq1{$_} == 1 && (%freq2{$_} // 0) == 1
    }, keys %freq1).elems;
}
```

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-375/mohammad-anwar/python/ch-1.py)
***
```python
def count_unique_common(array1, array2):
    freq1 = {}
    freq2 = {}

    for item in array1:
        freq1[item] = freq1.get(item, 0) + 1

    for item in array2:
        freq2[item] = freq2.get(item, 0) + 1

    return sum(1 for item in freq1
               if freq1[item] == 1
               and item in freq2
               and freq2[item] == 1)
```

Thank you `Team PWC`, once again.

`Happy Hacking!!`
***

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `371` &nbsp;&nbsp;|&nbsp;&nbsp; 46 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
|&nbsp;&nbsp; `372` &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `373` &nbsp;&nbsp;|&nbsp;&nbsp; 47 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
|&nbsp;&nbsp; `374` &nbsp;&nbsp;|&nbsp;&nbsp; 43 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `375` &nbsp;&nbsp;|&nbsp;&nbsp; 43 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
***

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `371` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 68 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `372` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 73 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|
|&nbsp;&nbsp; `373` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 65 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `374` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 50 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `375` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
***

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (4412)
     2. Rust       (1166)
     3. C          (1033)
     4. Haskell    (909)
     5. Ruby       (909)
     6. Lua        (894)
     7. C++        (726)
     8. Go         (686)
     9. JavaScript (639)
    10. Java       (532)

### Blogs with Creative Title
***

#### 1. [Common Beauty](https://raku-musings.com/common-beauty.html) by Arne Sommer.
#### 2. [Common Beauty](https://github.sommrey.de/the-bears-den/2026/05/29/ch-375.html) by Jorg Sommrey.
#### 3. [A Single Beauty](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-375/challenge-375/matthias-muth#readme) by Matthias Muth.
#### 4. [You’ve got to get up every morning…](https://packy.dardan.com/b/qf) by Packy Anderson.
#### 5. [Single and beautiful](http://ccgi.campbellsmiths.force9.co.uk/challenge/375) by Peter Campbell Smith.
#### 6. [Uncommon Beauty](https://blog.firedrake.org/archive/2026/05/The_Weekly_Challenge_375__Uncommon_Beauty.html) by Roger Bell_West.
#### 7. [The Common Beauty](https://dev.to/simongreennet/the-weekly-challenge-the-common-beauty-5eh3) by Simon Green.
***

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***
#### 1. Commits: 49,855 (`+105`)
#### 2. Pull Requests: 14,182 (`+34`)
#### 3. Contributors: 279
#### 4. Fork: 352
#### 5. Stars: 213
***

## SPONSOR {#SPONSOR}
***
With start of `Week #355`, we have a new sponsor `Marc Perry` until the end of year `2026`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance. You can find more informations [**here**](/sponsors).

## RECAP {#RECAP}
***
Quick recap of **[The Weekly Challenge - 375](/blog/recap-challenge-375)** by `Mohammad Sajid Anwar`.

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
Please check out the guest contributions for the [**Week #375**](/blog/guest-contribution/#375).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

## Task 1: Chessboard Squares {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given two coordinates of a square on 8x8 chessboard.

Write a script to find the given two coordinates have the same colour.

    8 W B W B W B W B
    7 B W B W B W B W
    6 W B W B W B W B
    5 B W B W B W B W
    4 W B W B W B W B
    3 B W B W B W B W
    2 W B W B W B W B
    1 B W B W B W B W
      a b c d e f g h

#### Example 1

    Input: $c1 = "a7", $c2 = "f4"
    Output: true

#### Example 2

    Input: $c1 = "c1", $c2 = "e8"
    Output: false

#### Example 3

    Input: $c1 = "b5", $c2 = "h2"
    Output: false

#### Example 4

    Input: $c1 = "f3", $c2 = "h1"
    Output: true

#### Example 5

    Input: $c1 = "a1", $c2 = "g8"
    Output: false

## Task 2: Doubled Words {#TASK2}
##### **Submitted by:** [Matt Martini](https://github.com/mattmartini)
***

You are given a string (which may contain embedded newlines) which is taken from a page on a website. The string will not contain brackets qw{ [ ] }.

Write a script that will find doubled words (such as "this this") and highlight (wrap in brackets) each doubled word.

The script should:

    - Work across lines, even finding situations where a word at the end of
      one line is repeated at the beginning of the next.

    - Find doubled words despite capitalization differences, such as with
      'The the...', as well as allow differing amounts of whitespace (spaces,
      tabs, newlines, and the like) to lie between the words.

    - Find doubled words even when separated by HTML tags. For example, to
      make a word bold: '...it is <B>very</B> very important...'. Only show
      lines containing doubled words.

Adapted from Mastering Regular Expressions, Third Edition by Jeffrey E. F. Friedl

#### Example 1

    Input: $str = "you're given the job of checking the pages on a\nweb server for doubled words (such as 'this this'), a common problem\nwith documents subject to heavy editing."
    Output: "web server for doubled words (such as '[this] [this]'), a common problem"

#### Example 2

    Input: $str = "Find doubled words despite capitalization differences, such as with 'The\nthe...', as well as allow differing amounts of whitespace (spaces,\ntabs, newlines, and the like) to lie between the words."
    Output: "Find doubled words despite capitalization differences, such as with '[The]\n[the]...', as well as allow differing amounts of whitespace (spaces,"

#### Example 3

    Input: $str = "to make a word bold: '...it is <B>very</B> very important...'."
    Output: "to make a word bold: '...it is <B>[very]</B> [very] important...'."

#### Example 4

    Input: $str = "Perl officially stands for Practical Extraction and Report Language, except when it doesn't."
    Output: ""

#### Example 5

    Input: $str = "There's more than one one way to do it.\nEasy things should be easy and hard things should be possible."
    Output: "There's more than [one] [one] way to do it."

***
By submitting a response to the challenge you agree that your name or pseudonym, any photograph you supply and any other personal information contained in your submission may be published on this website and the associated mobile app. Last date to submit the solution `23:59 (UK Time) Sunday 7th June 2026`.
