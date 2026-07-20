---
title: "The Weekly Challenge - 382"
date: 2026-07-13T00:00:00+00:00
description: "The Weekly Challenge - 382"
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
### &nbsp;&nbsp;9. [TASK #1: Hamiltonian Cycle](#TASK1)
### 10. [TASK #2: Replace Question Mark](#TASK2)

## HEADLINES {#HEADLINES}
***
Welcome to the `Week #382` of `The Weekly Challenge`.

I am very excited to announce that my first book, `Design Patterns in Modern Perl`, is now available in paperback version on [**Amazon**](https://perlschool.com/books/design-patterns). Some of the team members shared the photo of the book they received. I request those who purchased the book, please share your review on `Amazon`. It will help others to buy my book.

Thanks to `Amazon`, I received 5 copies of paperback version of the book. It feels great to hold my first book in my hand. My kids, specially the twins (`9 years`), were very happy to see my face on the back cover. I mentioned them by name in the dedication section. I saw big smile on their face when they found out.

<div class="container">
    <div class="row">
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <img src="/images/blog/my-first-book.jpg" class="img-fluid">
        </div>
    </div>
</div>

I have received so many messages on social media when I shared the news. I am grateful to each and everyone for the kind message. I already started working on my second book (`Dec, 2025`). I am hoping to get it ready to launch at `London Perl Workshop 2026`. The same way, how I launched my first book at `LPW 2025`. The book is all about `DBIx::Class`.

<div class="container">
    <div class="row">
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <img src="/images/blog/dbic-book.jpg" class="img-fluid">
        </div>
    </div>
</div>

Below is my contributions to the `Task #1` of `Week #381`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-381/mohammad-anwar/perl/ch-1.pl)
***
```perl
sub valid_square {
    my ($matrix) = @_;
    my $n = scalar @$matrix;

    for my $row (@$matrix) {
        my %seen = map { $_ => 1 } @$row;
        return 0 unless scalar keys %seen == $n && all { $_ >= 1 && $_ <= $n } keys %seen;
    }

    for my $col_idx (0 .. $n - 1) {
        my %seen;
        for my $row_idx (0 .. $n - 1) {
            $seen{$matrix->[$row_idx][$col_idx]} = 1;
        }

        return 0 unless scalar keys %seen == $n && all { $_ >= 1 && $_ <= $n } keys %seen;
    }

    return 1;
}
```

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-381/mohammad-anwar/raku/ch-1.raku)
***
```raku
sub valid-square($matrix) {
    my $n = $matrix.elems;

    for @$matrix -> $row {
        my %seen = $row.Set;
        return 0 unless %seen.elems == $n && %seen.keys.all ~~ 1..$n;
    }

    for 0 .. $n - 1 -> $col_idx {
        my %seen;
        for 0 .. $n - 1 -> $row_idx {
            %seen{$matrix[$row_idx][$col_idx]} = 1;
        }

        return 0 unless %seen.elems == $n && %seen.keys.all ~~ 1..$n;
    }

    return 1;
}
```

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-381/mohammad-anwar/python/ch-1.py)
***
```python
def valid_square(matrix):
    n = len(matrix)

    for row in matrix:
        seen = set(row)
        if len(seen) != n or not all(1 <= x <= n for x in seen):
            return 0

    for col_idx in range(n):
        seen = set()
        for row_idx in range(n):
            seen.add(matrix[row_idx][col_idx])

        if len(seen) != n or not all(1 <= x <= n for x in seen):
            return 0

    return 1
```

Thank you `Team PWC`, once again.

`Happy Hacking!!`
***

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `377` &nbsp;&nbsp;|&nbsp;&nbsp; 45 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `378` &nbsp;&nbsp;|&nbsp;&nbsp; 50 &nbsp;&nbsp;|&nbsp;&nbsp; 28 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `379` &nbsp;&nbsp;|&nbsp;&nbsp; 45 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `380` &nbsp;&nbsp;|&nbsp;&nbsp; 48 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `381` &nbsp;&nbsp;|&nbsp;&nbsp; 43 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
***

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `377` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 67 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `378` &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|&nbsp;&nbsp; 89 &nbsp;&nbsp;|&nbsp;&nbsp; 31 &nbsp;&nbsp;|
|&nbsp;&nbsp; `379` &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|&nbsp;&nbsp; 80 &nbsp;&nbsp;|&nbsp;&nbsp; 27 &nbsp;&nbsp;|
|&nbsp;&nbsp; `380` &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 93 &nbsp;&nbsp;|&nbsp;&nbsp; 29 &nbsp;&nbsp;|
|&nbsp;&nbsp; `381` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 78 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|
***

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (4503)
     2. Rust       (1192)
     3. C          (1053)
     4. Haskell    (932)
     5. Ruby       (932)
     6. Lua        (916)
     7. C++        (737)
     8. Go         (721)
     9. JavaScript (646)
    10. Java       (532)

### Blogs with Creative Title
***

#### 1. [Same Element](https://raku-musings.com/same-element.html) by Arne Sommer.
#### 2. [All The Same](https://github.sommrey.de/the-bears-den/2026/07/10/ch-381.html) by Jorg Sommrey.
#### 3. [Smaller? Greater? Same!](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-381/matthias-muth/README.md) by Matthias Muth.
#### 4. [Oh, yes! I’m the great row column!](https://packy.dardan.com/b/tc) by Packy Anderson.
#### 5. [Same, smaller, greater](http://ccgi.campbellsmiths.force9.co.uk/challenge/381) by Peter Campbell Smith.
#### 6. [Same Element, Different Column](https://blog.firedrake.org/archive/2026/07/The_Weekly_Challenge_381__Same_Element__Different_Column.html) by Roger Bell_West.
#### 7. [Grep, set and match](https://dev.to/simongreennet/the-weekly-challenge-grep-set-and-match-4k5h) by Simon Green.

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***
#### 1. Commits: 50,510 (`+96`)
#### 2. Pull Requests: 14,401 (`+23`)
#### 3. Contributors: 281
#### 4. Fork: 353
#### 5. Stars: 217 (`+2`)

## SPONSOR {#SPONSOR}
***
With start of `Week #355`, we have a new sponsor `Marc Perry` until the end of year `2026`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance. You can find more informations [**here**](/sponsors).

## RECAP {#RECAP}
***
Quick recap of **[The Weekly Challenge - 381](/blog/recap-challenge-381)** by `Mohammad Sajid Anwar`.

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
[**ygrek**](https://github.com/ygrek), an experienced `K` hacker joined the `Team PWC`.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

## GUESTS {#GUESTS}
***
Please check out the guest contributions for the [**Week #381**](/blog/guest-contribution/#381).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

## Task 1: Hamiltonian Cycle {#TASK1}
##### **Submitted by:** [Peter Campbell Smith](https://github.com/pjcs00)
***

You are given a target number.

Write a script to arrange all the whole numbers from 1 up to the given target number into a circle so that every pair of side-by-side numbers adds up to a perfect square. Please make sure, the last number and the first must also add up to a square.

#### Example 1

    Input: $n = 32
    Output: 1, 8, 28, 21, 4, 32, 17, 19, 30, 6, 3, 13, 12, 24, 25, 11, 5, 31, 18, 7, 29, 20, 16, 9, 27, 22, 14, 2, 23, 26, 10, 15

    1  + 8  = 9
    8  + 28 = 36
    28 + 21 = 49
    21 + 4  = 25
    4  + 32 = 36
    32 + 17 = 49
    17 + 19 = 36
    19 + 30 = 49

    so on, all the way through the sequence.

#### Example 2

    Input: $n = 15
    Output: ()

    No valid circular list of numbers exists.

#### Example 3

    Input: $n = 34
    Output: 1, 8, 28, 21, 4, 32, 17, 19, 6, 30, 34, 15, 10, 26, 23, 2, 14, 22, 27, 9, 16, 33, 31, 18, 7, 29, 20, 5, 11, 25, 24, 12, 13, 3

**[2026-07-13 11:45]**: `Output was incorrect, corrected by E. Choroba.`

## Task 2: Replace Question Mark {#TASK2}
##### **Submitted by:** [Simon Green](https://github.com/simongreen-net)
***

You are given a string that contains only `0`, `1` and `?` characters.

Write a script to generate all possible combinations when replacing the question marks with a zero or one.

#### Example 1

    Input: $str = "01??0"
    Output: ("01000", "01010", "01100", "01110")

#### Example 2

    Input: $str = "101"
    Output: ("101")

#### Example 3

    Input: $str = "???"
    Output: ("000", "001", "010", "011", "100", "101", "110", "111")

#### Example 4

    Input: $str = "1?10"
    Output: ("1010", "1110")

#### Example 5

    Input: $str = "1?1?0"
    Output: ("10100", "10110", "11100", "11110")

***
By submitting a response to the challenge you agree that your name or pseudonym, any photograph you supply and any other personal information contained in your submission may be published on this website and the associated mobile app. Last date to submit the solution `23:59 (UK Time) Sunday 19th July 2026`.
