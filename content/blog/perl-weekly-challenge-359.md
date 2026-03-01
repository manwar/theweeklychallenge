---
title: "The Weekly Challenge - 359"
date: 2026-02-02T00:00:00+00:00
description: "The Weekly Challenge - 359"
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
### &nbsp;&nbsp;9. [TASK #1: Digital Root](#TASK1)
### 10. [TASK #2: String Reduction](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #359` of `The Weekly Challenge`.

Another extremely busy week for me, sorry. Keep contributing and sharing knowlege as always. Your energy never lets me down.

***

Below is my contributions to the `Task #1` of `Week #358`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-358/mohammad-anwar/perl/ch-1.pl)

```perl
sub max_str_val {
    my @str = @_;

    my $max = 0;
    for (@str) {
        my $val = /^\d+$/ ? $_ : length $_;
        $max = $val if $val > $max;
    }

    return $max;
}
```

<br>

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-358/mohammad-anwar/raku/ch-1.raku)

```raku
sub max-str-val(*@str) {
    my $max = 0;
    for @str -> $s {
        my $val = $s ~~ /^ \d+ $/ ?? +$s !! $s.chars;
        $max = $val if $val > $max;
    }
    return $max;
}
```

<br>

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-358/mohammad-anwar/python/ch-1.py)

```python
def max_str_val(str_list):
    max_val = 0
    for s in str_list:
        if re.fullmatch(r'\d+', s):
            val = int(s)
        else:
            val = len(s)
        if val > max_val:
            max_val = val
    return max_val
```

<br>

Thank you `Team PWC`, once again.

`Happy Hacking!!`

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `354` &nbsp;&nbsp;|&nbsp;&nbsp; 54 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `355` &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|
|&nbsp;&nbsp; `356` &nbsp;&nbsp;|&nbsp;&nbsp; 48 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `357` &nbsp;&nbsp;|&nbsp;&nbsp; 52 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|
|&nbsp;&nbsp; `358` &nbsp;&nbsp;|&nbsp;&nbsp; 55 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 27 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `354` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 61 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
|&nbsp;&nbsp; `355` &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|&nbsp;&nbsp; 69 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|
|&nbsp;&nbsp; `356` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 39 &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|
|&nbsp;&nbsp; `357` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 69 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `358` &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|&nbsp;&nbsp; 69 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (4077)
     2. Rust       (1096)
     3. Ruby       (866)
     4. Haskell    (859)
     5. Lua        (834)
     6. C++        (688)
     7. Go         (628)
     8. JavaScript (618)
     9. C          (606)
    10. BQN        (501)

<br>

### Blogs with Creative Title
***

#### 1. [Stringed Max](https://raku-musings.com/stringed-max.html) by Arne Sommer.
#### 2. [Maximum Encryption](https://github.sommrey.de/the-bears-den/2026/01/30/ch-358.html) by Jorg Sommrey.
#### 3. [using brute force!](https://fluca1978.github.io/2026/01/26/PerlWeeklyChallenge358.html) by Luca Ferrari.
#### 4. [nbyqyyefswbuffyhay](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-358/challenge-358/matthias-muth#readme) by Matthias Muth.
#### 5. [It’s What You Value](https://packy.dardan.com/b/iJ) by Packy Anderson.
#### 6. [A number of strings](http://ccgi.campbellsmiths.force9.co.uk/challenge/358) by Peter Campbell Smith.
#### 7. [Encrypted Max](https://blog.firedrake.org/archive/2026/02/The_Weekly_Challenge_358__Encrypted_Max.html) by Roger Bell_West.
#### 8. [Maximum Encryption](https://dev.to/simongreennet/weekly-challenge-maximum-encryption-49a8) by Simon Green.
#### 9. [When Strings Become Numbers and Letters Start Shifting](https://dev.to/vinodk89/perl-weekly-challenge-358-when-strings-become-numbers-and-letters-start-shifting-j84) by Vinod Kumar K.
<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 47,603 (`+101`)
#### 2. Pull Requests: 13,467 (`+39`)
#### 3. Contributors: 273
#### 4. Fork: 350
#### 5. Stars: 209

<br>

## SPONSOR {#SPONSOR}
***

We are looking for sponsor for monthly prize pot of `US $50`. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 358](/blog/recap-challenge-358)** by `Mohammad Sajid Anwar`.

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

Please check out the guest contributions for the [**Week #358**](/blog/guest-contribution/#358).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Digital Root {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a positive integer, `$int`.

Write a function that calculates the additive persistence of a positive integer and also return the digital root.

> Digital root is the recursive sum of all digits in a number until a single digit is obtained.

> Additive persistence is the number of times you need to sum the digits to reach a single digit.

#### Example 1

    Input: $int = 38
    Output: Persistence  = 2
            Digital Root = 2

    38 => 3 + 8 => 11
    11 => 1 + 1 => 2

<br>

#### Example 2

    Input: $int = 7
    Output: Persistence  = 0
            Digital Root = 7

<br>

#### Example 3

    Input: $int = 999
    Output: Persistence  = 2
            Digital Root = 9

    999 => 9 + 9 + 9 => 27
    27  => 2 + 7 => 9

<br>

#### Example 4

    Input: $int = 1999999999
    Output: Persistence  = 3
            Digital Root = 1

    1999999999 => 1 + 9 + 9 + 9 + 9 + 9 + 9 + 9 + 9 + 9 => 82
    82 => 8 + 2 => 10
    10 => 1 + 0 => 1

<br>

#### Example 5

    Input: $int = 101010
    Output: Persistence  = 1
            Digital Root = 3

    101010 => 1 + 0 + 1 + 0 + 1 + 0 => 3

<br>

## Task 2: String Reduction {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a word containing only alphabets,

Write a function that repeatedly removes adjacent duplicate characters from a string until no adjacent duplicates remain and return the final word.

#### Example 1

    Input: $word = "aabbccdd"
    Output: ""

    Iteration 1: remove "aa", "bb", "cc", "dd" => ""

<br>

#### Example 2

    Input: $word = "abccba"
    Output: ""

    Iteration 1: remove "cc" => "abba"
    Iteration 2: remove "bb" => "aa"
    Iteration 3: remove "aa" => ""

<br>

#### Example 3

    Input: $word = "abcdef"
    Output: "abcdef"

    No duplicate found.

<br>

#### Example 4

    Input: $word = "aabbaeaccdd"
    Output: "aea"

    Iteration 1: remove "aa", "bb", "cc", "dd" => "aea"

<br>

#### Example 5

    Input: $word = "mississippi"
    Output: "m"

    Iteration 1: Remove "ss", "ss", "pp" => "miiii"
    Iteration 2: Remove "ii", "ii" => "m"

<br>

***

Last date to submit the solution `23:59 (UK Time) Sunday 7th February 2026`.

***
