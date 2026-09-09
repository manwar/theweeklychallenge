---
title: "The Weekly Challenge - 390"
date: 2026-09-07T00:00:00+00:00
description: "The Weekly Challenge - 390"
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
### &nbsp;&nbsp;9. [TASK #1: Decode String](#TASK1)
### 10. [TASK #2: Order Characters](#TASK2)

## HEADLINES {#HEADLINES}
***
Welcome to the `Week #390` of `The Weekly Challenge`.

Today is the first `Monday` of the month and time to announce the next `Champion of the Month`. With great pleasure, I announce `Robbie Hatley` as the next champion. He currently ranked `#25` with total points, `1100`. As of today, he shared `376` solutions in `Perl` and `174` blog posts. Congratulation `Robbie`.

Below is my contributions to the `Task #1` of `Week #389`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-389/mohammad-anwar/perl/ch-1.pl)
***
```perl
sub reconstruct_melody ($composer, $notes, $perm) {
    my @reordered;
    @reordered[ map { $_ - 1 } @$perm ] = @$notes;
    return uc($composer) . ' => ' . join(' ', @reordered);
}
```

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-389/mohammad-anwar/raku/ch-1.raku)
***
```raku
sub reconstruct-melody($composer, $notes, $perm) {
    my @reordered;
    @reordered[ $perm.map(* - 1) ] = @$notes;
    return "{$composer.uc} => {@reordered.join(' ')}";
}
```

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-389/mohammad-anwar/python/ch-1.py)
***
```python
def reconstruct_melody(composer, notes, perm):
    reordered = [None] * len(notes)
    indices   = map(lambda x: x - 1, perm)

    def assign(idx_note):
        reordered[idx_note[0]] = idx_note[1]

    list(map(assign, zip(indices, notes)))
    return f"{composer.upper()} => {' '.join(reordered)}"
```

Thank you `Team PWC`, once again.

`Happy Hacking!!`
***

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `385` &nbsp;&nbsp;|&nbsp;&nbsp; 44 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `386` &nbsp;&nbsp;|&nbsp;&nbsp; 41 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `387` &nbsp;&nbsp;|&nbsp;&nbsp; 36 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|
|&nbsp;&nbsp; `388` &nbsp;&nbsp;|&nbsp;&nbsp; 39 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `389` &nbsp;&nbsp;|&nbsp;&nbsp; 41 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
***

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `385` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 39 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `386` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 30 &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|
|&nbsp;&nbsp; `387` &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|
|&nbsp;&nbsp; `388` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 70 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|
|&nbsp;&nbsp; `389` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 70 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
***

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (4602)
     2. Rust       (1222)
     3. C          (1067)
     4. Haskell    (953)
     5. Ruby       (943)
     6. Lua        (927)
     7. C++        (750)
     8. Go         (732)
     9. JavaScript (652)
    10. Java       (532)

### Blogs with Creative Title
***

#### 1. [ZigZag Reorder](https://raku-musings.com/zigzag-reorder.html) by Arne Sommer.
#### 2. [ZigZag Melodies](https://github.sommrey.de/the-bears-den/2026/09/04/ch-389.html) by Jorg Sommrey.
#### 3. [Zig Zag Melodies](https://packy.dardan.com/b/yv) by Packy Anderson.
#### 4. [Musical zigzags](http://ccgi.campbellsmiths.force9.co.uk/challenge/389) by Peter Campbell Smith.
#### 5. [Zigzag Reorder](https://blog.firedrake.org/archive/2026/09/The_Weekly_Challenge_389__Zigzag_Reorder.html) by Roger Bell_West.
#### 6. [Zigzag notes](https://dev.to/simongreennet/weekly-challenge-zigzag-notes-243b) by Simon Green.

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***
#### 1. Commits: 51,224 (`+102`)
#### 2. Pull Requests: 14,661 (`+35`)
#### 3. Contributors: 282
#### 4. Fork: 352
#### 5. Stars: 220 (`+1`)

## SPONSOR {#SPONSOR}
***
With start of `Week #355`, we have a new sponsor `Marc Perry` until the end of year `2026`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance. You can find more informations [**here**](/sponsors).

## RECAP {#RECAP}
***
Quick recap of **[The Weekly Challenge - 389](/blog/recap-challenge-389)** by `Mohammad Sajid Anwar`.

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
Please check out the guest contributions for the [**Week #389**](/blog/guest-contribution/#389).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

## Task 1: Decode String {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given an encoded string.

Write a script to return the decoded string of the given encoded string.

> The encoding rule is: K[encoded_string], where the encoded_string inside the square brackets is repeated exactly K > 0 times.

#### Example 1

    Input: $str = "2[3[a]]"
    Output: "aaaaaa"

    3[a]    => aaa
    2[3[a]] => aaa aaa

#### Example 2

    Input: $str = "10[a]"
    Output: "aaaaaaaaaa"

#### Example 3

    Input: $str = "a2[b]c3[d]e"
    Output: "abbcddde"

#### Example 4

    Input: $str = "2[a2[b]c]"
    Output: "abbcabbc"

#### Example 5

    Input: $str = "1[a]2[b3[c]]"
    Output: "abcccbccc"

## Task 2: Order Characters {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org/)
***

You are given a string $s (containing only alphabetic characters) and an integer $k > 0.

Write a script to choose one of the first $k letters of given string and append it at the end of the string. You keep doing this until you have lexicographically smallest string and return the string.

#### Example 1

    Input: $str = "dbca", $k = 1
    Output: "adbc"

    Move 1: "bcad"
    Move 2: "cadb"
    Move 3: "adbc"

#### Example 2

    Input: $str = "geeks", $k = 2
    Output: "eegks"

    First 2 letters: "g", "e"

    Move 1: "gekse" (move second letter "e")
    Move 2: "gksee" (move second letter "e")
    Move 3: "kseeg"
    Move 4: "seegk"
    Move 5: "eegks"

#### Example 3

    Input: $str = "cbaed", $k = 3
    Output: "abcde"

    First 3 letters: "c", "b", "a"

    Move 1: "cbeda"  (move "a")
    Move 2: "cedab"  (move "b")
    Move 3: "edabc"  (move "c")
    Move 4: "eabcd"  (move "d")
    Move 5: "abcde"  (move "e")

#### Example 4

    Input: $str = "fedcba", $k = 4
    Output: "abcdef"

    First 4 letters: "f", "e", "d", "c"

    Move 1: "fdcbae" (move "e")
    Move 2: "dcbaef" (move "f")
    Move 3: "dcbefa" (move "a")
    Move 4: "dcefab" (move "b")
    Move 5: "defabc" (move "c")
    Move 6: "efabcd" (move "d")
    Move 7: "fabcde" (move "e")
    Move 8: "abcdef" (move "f")

#### Example 5

    Input: $str = "perl", $k = 1
    Output: "erlp"

    Move 1: "erlp" (move "p")

#### Example 6

    Input: $str = "oloolooo", $k = 1
    Output: "looloooo"

#### Example 7

    Input: $str = "oloooolo", $k = 1
    Output: "looloooo"

***
By submitting a response to the challenge you agree that your name or pseudonym, any photograph you supply and any other personal information contained in your submission may be published on this website and the associated mobile app. Last date to submit the solution `23:59 (UK Time) Sunday 13th September 2026`.
