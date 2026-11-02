---
title: "The Weekly Challenge - 398"
date: 2026-11-02T00:00:00+00:00
description: "The Weekly Challenge - 398"
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
### &nbsp;&nbsp;9. [TASK #1: Divisible Average](#TASK1)
### 10. [TASK #2: String Difference](#TASK2)

## HEADLINES {#HEADLINES}
***
Welcome to the `Week #398` of `The Weekly Challenge`.

Today's the first **Monday** of the month and time to declare the **Champion of the Month**. With great pleasure, I announce **E. Choroba** the next champion. He is currently ranked **#12** with total scores **1684**. As of today he has contributed **783** solutions in **Perl** and **59** blog posts.

Below is my contributions to the `Week #397`.

### [Task #1 - Perl]: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-397/mohammad-anwar/perl/ch-1.pl)
***
```perl
sub smallest_greater_absent(@arr) {
    my %seen = map { $_ => 1 } @arr;
    my $avg  = sum(@arr) / @arr;
    my $n    = int($avg) + 1;
    $n = 1 if $n < 1;
    $n++ while $seen{$n};
    return $n;
}
```

### [Task #2 - Perl]: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-397/mohammad-anwar/perl/ch-2.pl)
***
```perl
sub sort_binary_reflection {
    my $ref = sub { oct("0b" . reverse sprintf("%b", shift)) };
    return [ sort { $ref->($a) <=> $ref->($b) || $a <=> $b } @_ ];
}
```

### [Task #1 - Raku]: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-397/mohammad-anwar/raku/ch-1.raku)
***
```raku
sub smallest-greater-absent(*@arr) {
    my %seen = @arr.map({ $_ => True });
    my $avg  = @arr.sum / @arr.elems;
    my $n    = $avg.Int + 1;
    $n = 1 if $n < 1;
    $n++ while %seen{$n};
    return $n;
}
```

### [Task #2 - Raku]: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-397/mohammad-anwar/raku/ch-2.raku)
***
```raku
sub sort-binary-reflection(*@arr) {
    my $ref = sub ($x) { :2($x.base(2).flip) };
    return [ @arr.sort({ $ref($^a) <=> $ref($^b) || $^a <=> $^b }) ];
}
```

### [Task #1 - Python]: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-397/mohammad-anwar/python/ch-1.py)
***
```python
def smallest_greater_absent(arr):
    seen = {x: True for x in arr}
    avg  = sum(arr) / len(arr)
    n    = int(avg) + 1
    if n < 1:
        n = 1
    while n in seen:
        n += 1
    return n
```

### [Task #2 - Python]: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-397/mohammad-anwar/python/ch-2.py)
***
```python
def sort_binary_reflection(arr):
    def ref(x):
        return int(bin(x)[2:][::-1], 2)

    return sorted(arr, key=lambda x: (ref(x), x))
```

Thank you `Team PWC`, once again.

`Happy Hacking!!`
***

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `393` &nbsp;&nbsp;|&nbsp;&nbsp; 41 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `394` &nbsp;&nbsp;|&nbsp;&nbsp; 36 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|
|&nbsp;&nbsp; `395` &nbsp;&nbsp;|&nbsp;&nbsp; 37 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `396` &nbsp;&nbsp;|&nbsp;&nbsp; 41 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `397` &nbsp;&nbsp;|&nbsp;&nbsp; 41 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
***

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `393` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 65 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|
|&nbsp;&nbsp; `394` &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|&nbsp;&nbsp; 40 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `395` &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|
|&nbsp;&nbsp; `396` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 60 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `397` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 81 &nbsp;&nbsp;|&nbsp;&nbsp; 31 &nbsp;&nbsp;|
***

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (4704)
     2. Rust       (1255)
     3. C          (1082)
     4. Haskell    (973)
     5. Ruby       (959)
     6. Lua        (943)
     7. C++        (764)
     8. Go         (736)
     9. JavaScript (664)
    10. Java       (534)

### Blogs with Creative Title
***

#### 1. [Absent Reflection](https://raku-musings.com/absent-reflection.html) by Arne Sommer.
#### 2. [Reflection](https://dev.to/boblied/pwc-397-reflection-2dcd) by Bob Lied.
#### 3. [Absent Reflections](https://github.sommrey.de/the-bears-den/2026/10/30/ch-397.html) by Jorg Sommrey.
#### 4. [Reflections on Missing Numbers](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-397/matthias-muth/README.md) by Matthias Muth.
#### 5. [Latch on to the affirmative](https://packy.dardan.com/b/123) by Packy Anderson.
#### 6. [Positive reflection](http://ccgi.campbellsmiths.force9.co.uk/challenge/397) by Peter Campbell Smith.
#### 7. [Absent Reflection](https://blog.firedrake.org/archive/2026/11/The_Weekly_Challenge_397__Absent_Reflection.html) by Roger Bell_West.
#### 8. [An average reflection](https://dev.to/simongreennet/weekly-challenge-an-average-reflection-4b28) by Simon Green.

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***
#### 1. Commits: 51,926 (`+116`)
#### 2. Pull Requests: 14,903 (`+38`)
#### 3. Contributors: 281
#### 4. Fork: 352
#### 5. Stars: 221

## SPONSOR {#SPONSOR}
***
With start of `Week #355`, we have a new sponsor `Marc Perry` until the end of year `2026`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance. You can find more informations [**here**](/sponsors).

## RECAP {#RECAP}
***
Quick recap of **[The Weekly Challenge - 397](/blog/recap-challenge-397)** by `Mohammad Sajid Anwar`.

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
Please check out the guest contributions for the [**Week #397**](/blog/guest-contribution/#397).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

## Task 1: Divisible Average {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given an array of positive integers.

Write a script to return the closest integer to the mean value of all even integers that are divisible by 3. If none is divisible, return 0.

#### Example 1

    Input: @arr = (18, 5, 7, 11)
    Output: 18

    18 is the only even number and divisible by 3.
    Average: 18 / 1 = 18.

#### Example 2

    Input: @arr = (6, 12, 18, 24, 30, 40)
    Output: 18

    The qualifying numbers are 6, 12, 18, 24, and 30.
    Average: (6 + 12 + 18 + 24 + 30) / 5 = 90 / 5 = 18

#### Example 3

    Input: @arr = (3, 9, 15, 21, 27)
    Output: 0

    None of the elements are even.
    Since no elements qualify, return 0.

#### Example 4

    Input: @arr = (6, 12, 14, 20)
    Output: 9

    The qualifying numbers are 6 and 12.
    Average: (6 + 12) / 2 = 9.

#### Example 5

    Input: @arr = (6, 6, 6, 12, 12)
    Output: 8

    All five numbers are even and divisible by 3.
    Average: (6 + 6 + 6 + 12 + 12) / 5 = 8.4 => 8

## Task 2: String Difference {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given an array of equal length strings.

Write a script to find the difference integer array of each word in the given array. There will be one word with a different array; return that word.

> Each words[i] can be converted into a difference integer array difference[i] of length n - 1 where difference[i][j] = words[i][j+1] - words[i][j]

#### Example 1

    Input: @words = ("ab", "bc", "cd", "zy")
    Output: "zy"

    "ab" => [1 - 0] = [1]
    "bc" => [2 - 1] = [1]
    "cd" => [3 - 2] = [1]
    "zy" => [24 - 25] = [-1]

#### Example 2

    Input: @words = ("cba", "fed", "azy")
    Output: "azy"

    "cba" => [1 - 2, 0 - 1] = [-1, -1]
    "fed" => [4 - 5, 3 - 4] = [-1, -1]
    "azy" => [25 - 0, 24 - 25] = [25, -1]

#### Example 3

    Input: @words = ("pop", "ada", "beb", "cfc")
    Output: "pop"

    "pop" => [14 - 15, 15 - 14] = [-1, 1]
    "ada" => [3 - 0, 0 - 3] = [3, -3]
    "beb" => [4 - 1, 1 - 4] = [3, -3]
    "cfc" => [5 - 2, 2 - 5] = [3, -3]

#### Example 4

    Input: @words = ("aaaa", "zzzz", "mmmm", "aaba")
    Output: "aaba"

    "aaaa" => [0 - 0, 0 - 0, 0 - 0] = [0, 0, 0]
    "zzzz" => [25 - 25, 25 - 25, 25 - 25] = [0, 0, 0]
    "mmmm" => [12 - 12, 12 - 12, 12 - 12] = [0, 0, 0]
    "aaba" => [0 - 0, 1 - 0, 0 - 1] = [0, 1, -1]

#### Example 5

    Input: @words = ("aceg", "bdfh", "cegi", "azbz")
    Output: "azbz"

    "aceg" => [2 - 0, 4 - 2, 6 - 4] = [2, 2, 2]
    "bdfh" => [3 - 1, 5 - 3, 7 - 5] = [2, 2, 2]
    "cegi" => [4 - 2, 6 - 4, 8 - 6] = [2, 2, 2]
    "azbz" => [25 - 0, 1 - 25, 25 - 1] = [25, -24, 24]

***
By submitting a response to the challenge you agree that your name or pseudonym, any photograph you supply and any other personal information contained in your submission may be published on this website and the associated mobile app. Last date to submit the solution `23:59 (UK Time) Sunday 8th November 2026`.
