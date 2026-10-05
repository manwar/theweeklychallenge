---
title: "The Weekly Challenge - 394"
date: 2026-10-05T00:00:00+00:00
description: "The Weekly Challenge - 394"
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
### &nbsp;&nbsp;9. [TASK #1: Alternate Case](#TASK1)
### 10. [TASK #2: Alternating Vowels Consonants](#TASK2)

## HEADLINES {#HEADLINES}
***
Welcome to the `Week #394` of `The Weekly Challenge`.

Welcome aboard, [**Jodocus**](https://github.com/Jodocus-K) and thanks for your first contributions in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-393/jodocus/perl).

Today is the first `Monday` of the month and time to declare the next **Champion of the Month**.

With great pleasure, I announce, **Roger Bell_West**, as the **Champion of the Month**. He is currently ranked **#3** in the leaderboard with total **points 3580**. He is also ranked **#1** in the guest leaders with total **points 4135**. He has been associated with the project for the longest period. He has been helping with the task review every week.



Below is my contributions to the `Task #1` of `Week #393`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-393/mohammad-anwar/perl/ch-1.pl)
***
```perl
sub count_pythagorean_triplets($n) {
    my $count = 0;
    for my $a (1 .. $n) {
        for my $b (1 .. $n) {
            my $c = sqrt($a*$a + $b*$b);
            $count++ if $c <= $n && $c == int($c);
        }
    }
    return $count;
}
```

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-393/mohammad-anwar/raku/ch-1.raku)
***
```raku
sub count-pythagorean-triplets(Int $n) {
    my $count = 0;
    for 1 .. $n -> $a {
        for 1 .. $n -> $b {
            my $c = sqrt($a*$a + $b*$b);
            $count++ if $c <= $n && $c == $c.Int;
        }
    }
    return $count;
}
```

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-393/mohammad-anwar/python/ch-1.py)
***
```python
def count_pythagorean_triplets(n: int) -> int:
    count = 0
    for a in range(1, n + 1):
        for b in range(1, n + 1):
            c = math.sqrt(a * a + b * b)
            if c <= n and c == int(c):
                count += 1
    return count
```

Thank you `Team PWC`, once again.

`Happy Hacking!!`
***

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `389` &nbsp;&nbsp;|&nbsp;&nbsp; 41 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `390` &nbsp;&nbsp;|&nbsp;&nbsp; 37 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `391` &nbsp;&nbsp;|&nbsp;&nbsp; 41 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|
|&nbsp;&nbsp; `392` &nbsp;&nbsp;|&nbsp;&nbsp; 41 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `393` &nbsp;&nbsp;|&nbsp;&nbsp; 41 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
***

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `389` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 70 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `390` &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|&nbsp;&nbsp; 28 &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|
|&nbsp;&nbsp; `391` &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|
|&nbsp;&nbsp; `392` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 47 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `393` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 65 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|
***

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (4649)
     2. Rust       (1240)
     3. C          (1075)
     4. Haskell    (966)
     5. Ruby       (947)
     6. Lua        (931)
     7. C++        (757)
     8. Go         (732)
     9. JavaScript (656)
    10. Java       (532)

### Blogs with Creative Title
***

#### 1. [Pythagoras Primed](https://raku-musings.com/pythagoras-primed.html) by Arne Sommer.
#### 2. [Triangles and Primes](https://dev.to/boblied/pwc-393-triangles-and-primes-4fej) by Bob Lied.
#### 3. [Pythagorean Primes](https://github.sommrey.de/the-bears-den/2026/10/04/ch-393.html) by Jorg Sommrey.
#### 4. [Pythagoras, Euclid and Prime Numbers](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-393/matthias-muth/README.md) by Matthias Muth.
#### 5. [The Water Fell on the Floor!](https://packy.dardan.com/b/10A) by Packy Anderson.
#### 6. [All about primes](http://ccgi.campbellsmiths.force9.co.uk/challenge/393) by Peter Campbell Smith.
#### 7. [Prime Pythagoras](https://blog.firedrake.org/archive/2026/10/The_Weekly_Challenge_393__Prime_Pythagoras.html) by Roger Bell_West.
#### 8. [Pythagoras Prime](https://dev.to/simongreennet/weekly-challenge-pythagoras-prime-32ko) by Simon Green.

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***
#### 1. Commits: 51,567 (`+98`)
#### 2. Pull Requests: 14,478 (`+28`)
#### 3. Contributors: 281
#### 4. Fork: 353 (`+1`)
#### 5. Stars: 220

## SPONSOR {#SPONSOR}
***
With start of `Week #355`, we have a new sponsor `Marc Perry` until the end of year `2026`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance. You can find more informations [**here**](/sponsors).

## RECAP {#RECAP}
***
Quick recap of **[The Weekly Challenge - 393](/blog/recap-challenge-393)** by `Mohammad Sajid Anwar`.

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

**Jodocus**, an experienced **Perl** hacker joined **Team PWC**.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

## GUESTS {#GUESTS}
***
Please check out the guest contributions for the [**Week #393**](/blog/guest-contribution/#393).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

## Task 1: Alternate Case {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a string containing an equal number of uppercase and lowercase English letters.

Write a script to the minimum number of adjacent character swaps needed to turn the given string into an alternate case string.

#### Example 1

    Input: $str = "aAbB"
    Output: 0

#### Example 2

    Input: $str = "AAbb"
    Output: 1

    Swap 1: "AbAb"

#### Example 3

    Input: $str = "AAAbbb"
    Output: 3

    Swap 1: "AAbAbb"
    Swap 2: "AbAAbb"
    Swap 3: "AbAbAb"

#### Example 4

    Input: $str = "aABb"
    Output: 1

    Swap 1: "aAbB"

#### Example 5

    Input: $str = "bBBAaa"
    Output: 2

    Swap 1: "BbBAaa"
    Swap 2: "BbBaAa"

## Task 2: Alternating Vowels Consonants {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given three strings containing English alphabetic characters.

Find all the longest contiguous substrings common to all three strings that strictly alternate between vowels and consonants.

#### Example 1

    Input: @str = ("relocate", "delocate", "allocate")
    Output: ("locate")

#### Example 2

    Input: @str = ("apple", "banana", "cherry")
    Output: ()

#### Example 3

    Input: @str = ("navigate", "cavity", "gravity")
    Output: ("avi")

#### Example 4

    Input: @str = ("pedalgia", "pedalboard", "pedantic")
    Output: ("peda")

#### Example 5

    Input: @strings = ("schoolmaster", "schoolhouse", "schooling")
    Output: ("ho", "ol")

***
By submitting a response to the challenge you agree that your name or pseudonym, any photograph you supply and any other personal information contained in your submission may be published on this website and the associated mobile app. Last date to submit the solution `23:59 (UK Time) Sunday 11th October 2026`.
