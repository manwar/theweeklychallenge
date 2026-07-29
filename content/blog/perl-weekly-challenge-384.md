---
title: "The Weekly Challenge - 384"
date: 2026-07-27T00:00:00+00:00
description: "The Weekly Challenge - 384"
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
### &nbsp;&nbsp;9. [TASK #1: Base N](#TASK1)
### 10. [TASK #2: Special Binary Substrings](#TASK2)

## HEADLINES {#HEADLINES}
***
Welcome to the `Week #384` of `The Weekly Challenge`.

Welcome back, `Adam Russell`, and thanks for your contributions in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-383/adam-russell/perl) and [**Prolog**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-383/adam-russell/prolog). Thanks for the bonus blog posts: [**Blog #1**](http://rabbitfarm.com/cgi-bin/blosxom/perl/2026/07/25) and [**Blog #2**](http://rabbitfarm.com/cgi-bin/blosxom/prolog/2026/07/25)

Welcome back, `Robbie Hatley`, and thanks for your contributions in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-383/robbie-hatley/perl) and [**blog post**](https://hatley-software.blogspot.com/2026/07/robbie-hatleys-solutions-in-perl-for.html).

We have now over `20K` solutions in `Perl` and over `10K` solutions in `Raku`. Thank you, `Team PWC`, for your support and encouragement.

Below is my contributions to the `Task #1` of `Week #383`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-383/mohammad-anwar/perl/ch-1.pl)
***
```perl
sub similar_list {
    my ($list1, $list2, $list3) = @_;
    return "false" unless @$list1 == @$list2;

    my %canon;
    for my $group (@$list3) {
        my $rep = $group->[0];
        $canon{$_} = $rep foreach @$group;
    }

    foreach my $i (0..$#$list1) {
        my $a = $canon{$list1->[$i]} // $list1->[$i];
        my $b = $canon{$list2->[$i]} // $list2->[$i];
        return "false" if $a ne $b;
    }

    return "true";
}
```

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-383/mohammad-anwar/raku/ch-1.raku)
***
```raku
sub similar_list ($list1, $list2, $list3) {
    return "false" unless $list1.elems == $list2.elems;

    my @groups = $list3[0] ~~ Str ?? [ $list3 ] !! @$list3;

    my %canon;
    for @groups -> $group {
        my $rep = $group[0];
        for $group.flat -> $_ {
            %canon{$_} = $rep;
        }
    }

    for 0 ..^ $list1.elems -> $i {
        my $a = %canon{$list1[$i]} // $list1[$i];
        my $b = %canon{$list2[$i]} // $list2[$i];
        return "false" if $a ne $b;
    }

    return "true";
}
```

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-383/mohammad-anwar/python/ch-1.py)
***
```python
def similar_list(list1, list2, list3):
    if len(list1) != len(list2):
        return "false"

    canon = {}
    for group in list3:
        rep = group[0]
        for item in group:
            canon[item] = rep

    for i in range(len(list1)):
        a = canon.get(list1[i], list1[i])
        b = canon.get(list2[i], list2[i])
        if a != b:
            return "false"

    return "true"
```

Thank you `Team PWC`, once again.

`Happy Hacking!!`
***

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `379` &nbsp;&nbsp;|&nbsp;&nbsp; 45 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `380` &nbsp;&nbsp;|&nbsp;&nbsp; 48 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `381` &nbsp;&nbsp;|&nbsp;&nbsp; 43 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `382` &nbsp;&nbsp;|&nbsp;&nbsp; 35 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `383` &nbsp;&nbsp;|&nbsp;&nbsp; 46 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
***

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `379` &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|&nbsp;&nbsp; 80 &nbsp;&nbsp;|&nbsp;&nbsp; 27 &nbsp;&nbsp;|
|&nbsp;&nbsp; `380` &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 93 &nbsp;&nbsp;|&nbsp;&nbsp; 29 &nbsp;&nbsp;|
|&nbsp;&nbsp; `381` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 78 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|
|&nbsp;&nbsp; `382` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|
|&nbsp;&nbsp; `383` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 32 &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|
***

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (4527)
     2. Rust       (1199)
     3. C          (1056)
     4. Ruby       (936)
     5. Haskell    (935)
     6. Lua        (919)
     7. C++        (739)
     8. Go         (724)
     9. JavaScript (648)
    10. Java       (532)

### Blogs with Creative Title
***

#### 1. [Similar and Nearest but in No Way Clearest](http://rabbitfarm.com/cgi-bin/blosxom/perl/2026/07/25) by Adam Russell.
#### 2. [Similar RGB List](https://raku-musings.com/similar-rgb-list.html) by Arne Sommer.
#### 3. [Similar Colors](https://github.sommrey.de/the-bears-den/2026/07/24/ch-383.html) by Jorg Sommrey.
#### 4. [Similar Words and Similar Colors](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-383/matthias-muth/README.md) by Matthias Muth.
#### 5. [Hey! Are we doing government work here?](https://packy.dardan.com/b/vE) by Packy Anderson.
#### 6. [Similar list, friendly colour](http://ccgi.campbellsmiths.force9.co.uk/challenge/383) by Peter Campbell Smith.
#### 7. [Similar RGB](https://blog.firedrake.org/archive/2026/07/The_Weekly_Challenge_383__Similar_RGB.html) by Roger Bell_West.
#### 8. [Similar colors](https://dev.to/simongreennet/weekly-challenge-similar-colors-1n4d) by Simon Green.

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***
#### 1. Commits: 50,679 (`+90`)
#### 2. Pull Requests: 14,460 (`+34`)
#### 3. Contributors: 282
#### 4. Fork: 353
#### 5. Stars: 220 (`+2`)

## SPONSOR {#SPONSOR}
***
With start of `Week #355`, we have a new sponsor `Marc Perry` until the end of year `2026`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance. You can find more informations [**here**](/sponsors).

## RECAP {#RECAP}
***
Quick recap of **[The Weekly Challenge - 383](/blog/recap-challenge-383)** by `Mohammad Sajid Anwar`.

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
Please check out the guest contributions for the [**Week #383**](/blog/guest-contribution/#383).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

## Task 1: Base N {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a number and a base integer.

Write a script to convert the given number in the given base integer.

#### Example 1

    Input: $num = 42, $base = 2
    Output: 101010

#### Example 2

    Input: $num = 15642094, $base = 16
    Output: EEADEE

#### Example 3

    Input: $num = 493, $base = 8
    Output: 755

#### Example 4

    Input: $num = 2228519, $base = 36
    Output: 1BRJB

    Base 36 uses numbers 0-9 and letters A-Z.

#### Example 5

    Input: $num = 123456789, $base = 64
    Output: 7MyqL

    Base 64 (using 0-9, A-Z, a-z, and extra symbols like + and /)

## Task 2: Special Binary Substrings {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a binary string.

Write a script to return all non-empty substrings (distinct) that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.

#### Example 1

    Input: $binary = "0101"
    Output: ("01", "10")

#### Example 2

    Input: $binary = "000111"
    Output: ("000111", "0011", "01")


#### Example 3

    Input: $binary = "000011"
    Output:  ("0011", "01")

#### Example 4

    Input: $binary = "10011100"
    Output: ("10", "0011", "01", "1100")

#### Example 5

    Input: $binary = "00000"
    Output: ()

***
By submitting a response to the challenge you agree that your name or pseudonym, any photograph you supply and any other personal information contained in your submission may be published on this website and the associated mobile app. Last date to submit the solution `23:59 (UK Time) Sunday 2nd August 2026`.
