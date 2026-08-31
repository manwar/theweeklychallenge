---
title: "The Weekly Challenge - 389"
date: 2026-08-31T00:00:00+00:00
description: "The Weekly Challenge - 389"
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
### &nbsp;&nbsp;9. [TASK #1: Reorder Notes](#TASK1)
### 10. [TASK #2: ZigZag Subarray](#TASK2)

## HEADLINES {#HEADLINES}
***
Welcome to the `Week #389` of `The Weekly Challenge`.

Thank you, `Reinier Maliepaard` and `Roger Bell_West` for the fun challenges this week.

Happy to see, `Abigail`, `Roger Bell_West` and `Ulrich Rieke` back with complete package solutions. Thank you to all regular contributors as well.

Today is the last holiday before school opens. I hate the morning school run.

I am being very lazy today, it delays the launch of weekly challenge, sorry :-(

Below is my contributions to the `Task #1` of `Week #388`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-388/mohammad-anwar/perl/ch-1.pl)
***
```perl
sub dyck_words($n, $u = 0, $d = 0, $path = '') {
    return $path if $u == $n && $d == $n;
    return (
        ($d < $u ? dyck_words($n, $u, $d + 1, $path . 'D') : ()),
        ($u < $n ? dyck_words($n, $u + 1, $d, $path . 'U') : ())
    );
}
```

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-388/mohammad-anwar/raku/ch-1.raku)
***
```raku
sub dyck-words($n, $u = 0, $d = 0, $path = '') {
    return ($path) if $u == $n && $d == $n;
    return (
        ($d < $u ?? dyck-words($n, $u, $d + 1, $path ~ 'D') !! ()),
        ($u < $n ?? dyck-words($n, $u + 1, $d, $path ~ 'U') !! ())
    ).flat;
}
```

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-388/mohammad-anwar/python/ch-1.py)
***
```python
def dyck_words(n, u=0, d=0, path=""):
    if u == n and d == n:
        return [path]

    res = []
    if d < u:
        res.extend(dyck_words(n, u, d + 1, path + "D"))
    if u < n:
        res.extend(dyck_words(n, u + 1, d, path + "U"))
    return res
```

Thank you `Team PWC`, once again.

`Happy Hacking!!`
***

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `384` &nbsp;&nbsp;|&nbsp;&nbsp; 45 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `385` &nbsp;&nbsp;|&nbsp;&nbsp; 44 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `386` &nbsp;&nbsp;|&nbsp;&nbsp; 41 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `387` &nbsp;&nbsp;|&nbsp;&nbsp; 36 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|
|&nbsp;&nbsp; `388` &nbsp;&nbsp;|&nbsp;&nbsp; 37 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
***

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `384` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 36 &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|
|&nbsp;&nbsp; `385` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 39 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `386` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 30 &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|
|&nbsp;&nbsp; `387` &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|
|&nbsp;&nbsp; `388` &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|&nbsp;&nbsp; 68 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|
***

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (4583)
     2. Rust       (1218)
     3. C          (1064)
     4. Haskell    (949)
     5. Ruby       (939)
     6. Lua        (923)
     7. C++        (748)
     8. Go         (730)
     9. JavaScript (648)
    10. Java       (532)

### Blogs with Creative Title
***

#### 1. [Secret Dyck](https://raku-musings.com/secret-dyck.html) by Arne Sommer.
#### 2. [I Refuse to Indulge in the Obvious Jokes](https://dev.to/boblied/pwc-388-dyck-words-i-refuse-to-indulge-in-the-obvious-jokes-56i2) by Bob Lied.
#### 3. [Secret Words](https://github.sommrey.de/the-bears-den/2026/08/28/ch-388.html) by Jorg Sommrey.
#### 4. [Dyck Santa](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-388/matthias-muth/README.md) by Matthias Muth.
#### 5. [Code of Many Colors](https://packy.dardan.com/b/yZ) by Packy Anderson.
#### 6. [Up and down the chimney](http://ccgi.campbellsmiths.force9.co.uk/challenge/388) by Peter Campbell Smith.
#### 7. [Secret Dyck](https://blog.firedrake.org/archive/2026/08/The_Weekly_Challenge_388__Secret_Dyck.html) by Roger Bell_West.
#### 8. [Secret Words](https://dev.to/simongreennet/weekly-challenge-secret-words-2mj5) by Simon Green.

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***
#### 1. Commits: 51,122 (`+76`)
#### 2. Pull Requests: 14,626 (`+29`)
#### 3. Contributors: 282
#### 4. Fork: 353
#### 5. Stars: 219

## SPONSOR {#SPONSOR}
***
With start of `Week #355`, we have a new sponsor `Marc Perry` until the end of year `2026`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance. You can find more informations [**here**](/sponsors).

## RECAP {#RECAP}
***
Quick recap of **[The Weekly Challenge - 388](/blog/recap-challenge-388)** by `Mohammad Sajid Anwar`.

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
Please check out the guest contributions for the [**Week #388**](/blog/guest-contribution/#388).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

## Task 1: Reorder Notes {#TASK1}
##### **Submitted by:** [Reinier Maliepaard](https://reiniermaliepaard.nl/index.html)
***

You are given an array [composer, notes, permutation], reconstruct the melody by using each permutation value as the destination position of the corresponding note. Use no explicit for, foreach, or while loops. Output each result as COMPOSER => reordered notes.

> ASSUMPTION: Input is valid; the notes array and permutation array have identical lengths, and the permutation contains each position from 1 to N exactly once.

#### Example 1

    Input: $melody = ['Bach', [qw(C D E F# G A B)], [7, 1, 6, 2, 5, 3, 4]]
    Output: BACH => D F# A B G E C

    Note 1 (C)  moves to position 7.
    Note 2 (D)  moves to position 1.
    Note 3 (E)  moves to position 6.
    Note 4 (F#) moves to position 2.
    Note 5 (G)  moves to position 5.
    Note 6 (A)  moves to position 3.
    Note 7 (B)  moves to position 4.

#### Example 2

    Input: $melody = ['Beethoven', [qw(C D F# G Ab)], [1, 3, 5, 2, 4]]
    Output: BEETHOVEN => C G D Ab F#

    Note 1 (C)  stays at position 1.
    Note 2 (D)  moves to position 3.
    Note 3 (F#) moves to position 5.
    Note 4 (G)  moves to position 2.
    Note 5 (Ab) moves to position 4.

#### Example 3

    Input: $melody = [ 'Brahms', [qw(C Db Eb F G Ab Bb C D)], [9, 3, 7, 1, 8, 5, 2, 6, 4] ]
    Output: BRAHMS => F Bb Db D Ab C Eb G C

#### Example 4

    Input: $melody = [ 'Bruckner', [qw(G F# Bb C D Eb F)], [4, 7, 2, 6, 1, 5, 3] ]
    Output: BRUCKNER => D Bb F G Eb C F#

#### Example 5

    Input: $melody = ['Berg', [qw(C#)], [1]]
    Output: BERG => C#

## Task 2: ZigZag Subarray {#TASK2}
##### **Submitted by:** [Roger Bell_West](https://blog.firedrake.org/)
***

You are given an array of integers.

Write a script to find the length of the longest contiguous subarray where the numbers alternate between strictly increasing and strictly decreasing (a ZigZag pattern).

> A sequence of numbers $A = [a0, a1, ..., ak]$ with length $k >= 1 is considered a ZigZag sequence if every adjacent pair alternates direction:

    a_0 < a_1 > a_2 < a_3 > ...
    OR
    a_0 > a_1 < a_2 > a_3 < ...

**NOTE:** A single element (length 1) or any two distinct elements (length 2) are automatically valid ZigZag sequences. Equal adjacent numbers (e.g., 5, 5) break the pattern.

#### Example 1

    Input: @nums = (9, 4, 2, 10, 7, 8, 8, 1, 9)
    Output: 5

    ZigZag subarray: (4, 2, 10, 7, 8)

#### Example 2

    Input: @nums = (1, 7, 4, 9, 2, 5)
    Output: 6

    ZigZag subarray: (1, 7, 4, 9, 2, 5)

#### Example 3

    Input: @nums = (1, 2, 3, 4, 5)
    Output: 2

    ZigZag subarray: (1, 2)

#### Example 4

    Input: @nums = (4, 4, 4)
    Output: 1

#### Example 5

    Input: @nums = (10, 20, 15, 12, 18)
    Output: 3

    ZigZag subarray: (10, 20, 15)

***
By submitting a response to the challenge you agree that your name or pseudonym, any photograph you supply and any other personal information contained in your submission may be published on this website and the associated mobile app. Last date to submit the solution `23:59 (UK Time) Sunday 6th September 2026`.
