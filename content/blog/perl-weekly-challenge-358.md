---
title: "The Weekly Challenge - 358"
date: 2026-01-26T00:00:00+00:00
description: "The Weekly Challenge - 358"
type: post
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
### &nbsp;&nbsp;9. [TASK #1: Max Str Value](#TASK1)
### 10. [TASK #2: Encrypted String](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #358` of `The Weekly Challenge`.

Welcome aboard [**Alexander Goussas**](https://github.com/aloussase) and thanks for your first contributions in [**Haskell**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-357/alexander-goussas/haskell).

This past week was difficult. You may have noticed the reason for my delay in accepting submissions from contributors. However, I expect this week's operations to proceed more easily than last week. Although, certain weeks can be difficult; however, we will continue to make progress.

I hope you are able to enjoy the Challenge that we've prepared for the week. Thank you for being a valuable member of the team and for sharing your expertise with us.

***

Below is my contributions to the `Task #1` of `Week #357`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-357/mohammad-anwar/perl/ch-1.pl)

```perl
sub kaprekar_constant {
    my ($int) = @_;

    my %seen;
    my $i;

    for ($i = 0; $int != 6174; $i++) {
        return -1 if $seen{$int}++;

        my $str = sprintf "%04d", $int;
        my $a   = join "", sort split //, $str;
        my $d   = reverse $a;

        $int = $d - $a;
    }

    return $i;
}
```

<br>

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-357/mohammad-anwar/raku/ch-1.raku)

```perl
sub kaprekar-constant ($int is copy) {

    my %seen;
    my $i;

    loop ($i = 0; $int != 6174; $i++) {
        return -1 if %seen{$int}++;

        my $str = sprintf "%04d", $int;
        my $a   = $str.comb.sort.join;
        my $d   = $a.flip;

        $int = $d.Int - $a.Int;
    }

    return $i;
}
```

<br>

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-357/mohammad-anwar/python/ch-1.py)

```python
def kaprekar_constant(n: int) -> int:
    seen = set()
    i = 0

    while n != 6174:
        if n in seen:
            return -1
        seen.add(n)

        s = f"{n:04d}"
        a = "".join(sorted(s))
        d = a[::-1]

        n = int(d) - int(a)
        i += 1

    return i
```

<br>

Thank you `Team PWC`, once again.

`Happy Hacking!!`

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `353` &nbsp;&nbsp;|&nbsp;&nbsp; 54 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|
|&nbsp;&nbsp; `354` &nbsp;&nbsp;|&nbsp;&nbsp; 54 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|
|&nbsp;&nbsp; `355` &nbsp;&nbsp;|&nbsp;&nbsp; 53 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|
|&nbsp;&nbsp; `356` &nbsp;&nbsp;|&nbsp;&nbsp; 48 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `357` &nbsp;&nbsp;|&nbsp;&nbsp; 52 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `353` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 73 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `354` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 61 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
|&nbsp;&nbsp; `355` &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|&nbsp;&nbsp; 69 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|
|&nbsp;&nbsp; `356` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 39 &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|
|&nbsp;&nbsp; `357` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 67 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (4047)
     2. Rust       (1092)
     3. Ruby       (864)
     4. Haskell    (855)
     5. Lua        (830)
     6. C++        (686)
     7. Go         (624)
     8. JavaScript (616)
     9. C          (600)
    10. BQN        (499)

<br>

### Blogs with Creative Title
***

#### 1. [Uniquely Constant](https://raku-musings.com/uniquely-constant.html) by Arne Sommer.
#### 2. [Fractional Fix Points](https://github.sommrey.de/the-bears-den/2026/01/23/ch-357.html) by Jorg Sommrey.
#### 3. [Perl Weekly Challenge 357: arrays everywhere!](https://fluca1978.github.io/2026/01/19/PerlWeeklyChallenge357.html) by Luca Ferrari.
#### 4. [One Constant, and Many Fractions](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-357/challenge-357/matthias-muth#readme) by Matthias Muth.
#### 5. [I could drink a case of you…](https://packy.dardan.com/b/hq) by Packy Anderson.
#### 6. [Converging on fractions](http://ccgi.campbellsmiths.force9.co.uk/challenge/357) by Peter Campbell Smith.
#### 7. [Uniquely Kaprekar](https://blog.firedrake.org/archive/2026/01/The_Weekly_Challenge_357__Uniquely_Kaprekar.html) by Roger Bell_West.
#### 8. [Fractional Constant](https://dev.to/simongreennet/weekly-challenge-fractional-constant-2mop) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 47,502 (`+111`)
#### 2. Pull Requests: 13,428 (`+43`)
#### 3. Contributors: 273 (`+1`)
#### 4. Fork: 350
#### 5. Stars: 209

<br>

## SPONSOR {#SPONSOR}
***

We are looking for sponsor for monthly prize pot of `US $50`. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 357](/blog/recap-challenge-357)** by `Mohammad Sajid Anwar`.

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

[**Alexander Goussas**](https://github.com/aloussase), an expert `Haskell` hacker joined `Team PWC`.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}
***

Please check out the guest contributions for the [**Week #357**](/blog/guest-contribution/#357).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Max Str Value {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given an array of alphanumeric string, `@strings`.

Write a script to find the max value of alphanumeric string in the given array. The numeric representation of the string, if it comprises of digits only otherwise length of the string.

#### Example 1

    Input: @strings = ("123", "45", "6")
    Output: 123

    "123" -> 123
    "45"  -> 45
    "6"   -> 6

<br>

#### Example 2

    Input: @strings = ("abc", "de", "fghi")
    Output: 4

    "abc"  -> 3
    "de"   -> 2
    "fghi" -> 4

<br>

#### Example 3

    Input: @strings = ("0012", "99", "a1b2c")
    Output: 99

    "0012"  -> 12
    "99"    -> 99
    "a1b2c" -> 5

<br>

#### Example 4

    Input: @strings = ("x", "10", "xyz", "007")
    Output: 10

    "x"   -> 1
    "xyz" -> 3
    "007" -> 7
    "10"  -> 10

<br>

#### Example 5

    Input: @strings = ("hello123", "2026", "perl")
    Output: 2026

    "hello123" -> 8
    "perl"     -> 4
    "2026"     -> 2026

<br>

## Task 2: Encrypted String {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a string `$str` and an integer `$int`.

Write a script to encrypt the string using the algorithm - for each character `$char` in `$str`, replace `$char` with the `$int` th character after `$char` in the alphabet, wrapping if needed and return the encrypted string.

#### Example 1

    Input: $str = "abc", $int = 1
    Output: "bcd"

<br>

#### Example 2

    Input: $str = "xyz", $int = 2
    Output: "zab"

<br>

#### Example 3

    Input: $str = "abc", $int = 27
    Output: "bcd"

<br>

#### Example 4

    Input: $str = "hello", $int = 5
    Output: "mjqqt"

<br>

#### Example 5

    Input: $str = "perl", $int = 26
    Output: "perl"

<br>

***

Last date to submit the solution `23:59 (UK Time) Sunday 1st February 2026`.

***
