---
title: "The Weekly Challenge - 380"
date: 2026-06-29T00:00:00+00:00
description: "The Weekly Challenge - 380"
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
### &nbsp;&nbsp;9. [TASK #1: Sum of Frequencies](#TASK1)
### 10. [TASK #2: Reverse Degree](#TASK2)

## HEADLINES {#HEADLINES}
***
Welcome to the `Week #380` of `The Weekly Challenge`.

Welcome aboard, [**Elias Martenson**](https://github.com/lokedhs), and thanks for your first contributions in [**Kap**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-379/loke/kap).

Once again, we had tight competition between regular (`79`) and guest contributions (`78`). Looks like, very soon,  we will create history by contributing more in guest languages than the main languages. I am confused, whether it is happy moment or something to worry about.

Talking about guest languages, `Haskell` has taken the `#4` place again from `Ruby`. Looking at the numbers, it would be hard to maintain the position.

Looking at fellow members contributions, I feel it's not worth sharing my own contributions. Mine looks very basic, no magics. I start with `Perl` and then just literal translate it into `Raku` and `Python` so that I don't forget the syntax.

Below is my contributions to the `Task #1` of `Week #379`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-379/mohammad-anwar/perl/ch-1.pl)
***
```perl
sub reverse_string {
    my ($str) = @_;

    my @chars = split('', $str);
    my $_str  = '';

    for (my $i = $#chars; $i >= 0; $i--) {
        $_str .= $chars[$i];
    }

    return $_str;
}
```

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-379/mohammad-anwar/raku/ch-1.raku)
***
```raku
sub reverse_string(Str $str) {
    my @chars = $str.comb;
    my $_str  = '';

    loop (my $i = @chars.elems - 1; $i >= 0; $i--) {
        $_str ~= @chars[$i];
    }

    return $_str;
}
```

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-379/mohammad-anwar/python/ch-1.py)
***
```python
def reverse_string(string: str) -> str:
    chars = list(string)
    _str  = ''

    for i in range(len(chars) - 1, -1, -1):
        _str += chars[i]

    return _str
```

Thank you `Team PWC`, once again.

`Happy Hacking!!`
***

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `375` &nbsp;&nbsp;|&nbsp;&nbsp; 43 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `376` &nbsp;&nbsp;|&nbsp;&nbsp; 42 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `377` &nbsp;&nbsp;|&nbsp;&nbsp; 41 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|
|&nbsp;&nbsp; `378` &nbsp;&nbsp;|&nbsp;&nbsp; 48 &nbsp;&nbsp;|&nbsp;&nbsp; 28 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `379` &nbsp;&nbsp;|&nbsp;&nbsp; 43 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
***

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `375` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `376` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 45 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|
|&nbsp;&nbsp; `377` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 63 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|
|&nbsp;&nbsp; `378` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 87 &nbsp;&nbsp;|&nbsp;&nbsp; 30 &nbsp;&nbsp;|
|&nbsp;&nbsp; `379` &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|&nbsp;&nbsp; 80 &nbsp;&nbsp;|&nbsp;&nbsp; 27 &nbsp;&nbsp;|
***

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (4470)
     2. Rust       (1182)
     3. C          (1045)
     4. Haskell    (924)
     5. Ruby       (924)
     6. Lua        (906)
     7. C++        (733)
     8. Go         (707)
     9. JavaScript (642)
    10. Java       (532)

### Blogs with Creative Title
***

#### 1. [Armstring or Strong](https://raku-musings.com/armstring-or-strong.html) by Arne Sommer.
#### 2. [There Is More Than One Way To Power](https://github.sommrey.de/the-bears-den/2026/06/28/ch-379.html) by Jorg Sommrey.
#### 3. [Just Do It Yourself!](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-379/matthias-muth#readme) by Matthias Muth.
#### 4. [I see strings reversed… sum numbers, too…](https://packy.dardan.com/b/sE) by Packy Anderson.
#### 5. [Reversing and curious numbers](http://ccgi.campbellsmiths.force9.co.uk/challenge/379) by Peter Campbell Smith.
#### 6. [Reverse Armstrong](https://blog.firedrake.org/archive/2026/06/The_Weekly_Challenge_379__Reverse_Armstrong.html) by Roger Bell_West.
#### 7. [Work it](https://dev.to/simongreennet/weekly-challenge-work-it-1j3a) by Simon Green.

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***
#### 1. Commits: 50,288 (`+111`)
#### 2. Pull Requests: 14,334 (`+42`)
#### 3. Contributors: 280 (`+1`)
#### 4. Fork: 352 (`+1`)
#### 5. Stars: 215

## SPONSOR {#SPONSOR}
***
With start of `Week #355`, we have a new sponsor `Marc Perry` until the end of year `2026`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance. You can find more informations [**here**](/sponsors).

## RECAP {#RECAP}
***
Quick recap of **[The Weekly Challenge - 379](/blog/recap-challenge-379)** by `Mohammad Sajid Anwar`.

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
[**Elias Martenson**](https://github.com/lokedhs), an experienced `Kap` hacker from `Singapore` joined the `Team PWC`.

Please check out the guest contributions for the [**Week #379**](/blog/guest-contribution/#379).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

## Task 1: Sum of Frequencies {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a string consisting of English letters.

Write a script to find the vowel and consonant with maximum frequency. Return the sum of two frequencies.

#### Example 1

    Input: $str = "banana"
    Output: 5

    Vowel: "a" appears 3 times.
    Consonant: "n" appears 2 times, "b" appears 1 time.

    Max frequency of vowel: 3
    Max frequency of consonant: 2

#### Example 2

    Input: $str = "teestett"
    Output: 7

    Vowel: "e" appears 3 times.
    Consonant: "t" appears 4 times, "s" appears 1 time.

    Max frequency of vowel: 3
    Max frequency of consonant: 4

#### Example 3

    Input: $str = "aeiouuaa"
    Output: 3

    Vowel: "a" appears 3 times, "u" 2 times, "e", "i", "o" 1 time each.
    Consonant: None.

    Max frequency of vowel: 3
    Max frequency of consonant: 0

#### Example 4

    Input: $str = "rhythm"
    Output: 2

    Vowel: None
    Consonant: "h" appears 2 times, "r", "y", "t", "m" 1 time each.

    Max frequency of vowel: 0
    Max frequency of consonant: 2

#### Example 5

    Input: $str = "x"
    Output: 1

    Vowel: None
    Consonant: "x" appears 1 time.

    Max frequency of vowel: 0
    Max frequency of consonant: 1

## Task 2: Reverse Degree {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a string.

Write a script to find the reverse degree of the given string.

> For each character, multiply its position in the reversed alphabet ('a' = 26, 'b' = 25, ..., 'z' = 1) with its position in the string. Sum these products for all characters in the string to get the reverse degree.

#### Example 1

    Input: $str = "z"
    Output: 1

    Reverse alphabet value of "z" is 1.
    Position 1: 1 x 1
    Sum of product: 1

#### Example 2

    Input: $str = "a"
    Output: 26

    Reverse alphabet value of "a" is 26.
    Position 1: 1 x 26
    Sum of product: 26

#### Example 3

    Input: $str = "bbc"
    Output: 147

    Reverse alphabet value of "b" is 25 and "c" is 24.
    Position 1: 1 x 25
    Position 2: 2 x 25
    Position 3: 3 x 24
    Sum of product: 25 + 50 + 72 => 147

#### Example 4

    Input: $str = "racecar"
    Output: 560

    Reverse alphabet value of "r" is 9, "a" is 26, "c" is 24 and "e" is 24.
    Position 1: 1 x 9
    Position 2: 2 x 26
    Position 3: 3 x 24
    Position 4: 4 x 22
    Position 5: 5 x 24
    Position 6: 6 x 26
    Position 7: 7 x 9
    Sum of product: 9 + 52 + 72 + 88 + 120 + 156 + 63

#### Example 5

    Input: $str = "zyx"
    Output: 14

    Reverse alphabet value of "z" is 1, "y" is 2 and "x" is 3.
    Position 1: 1 x 1
    Position 2: 2 x 2
    Position 3: 3 x 3
    Sum of product: 1 + 4 + 9

***
By submitting a response to the challenge you agree that your name or pseudonym, any photograph you supply and any other personal information contained in your submission may be published on this website and the associated mobile app. Last date to submit the solution `23:59 (UK Time) Sunday 5th July 2026`.
