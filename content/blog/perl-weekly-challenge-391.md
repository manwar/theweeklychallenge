---
title: "The Weekly Challenge - 391"
date: 2026-09-13T00:00:00+00:00
description: "The Weekly Challenge - 391"
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
### &nbsp;&nbsp;9. [TASK #1: Array Median](#TASK1)
### 10. [TASK #2: Arrange Box](#TASK2)

## HEADLINES {#HEADLINES}
***
Welcome to the `Week #391` of `The Weekly Challenge`.

It feels great to have consistent contributors. Some even find time to contribute during the holiday break! I do miss a few people, though, but I completely understand that priorities change over time.

Seeing familiar faces return always brings me so much joy. I’d also like to thank everyone for your kind messages, and please accept my apology for not replying to each sweet message individually.

`Matthias Muth` and `Matt Martini` proposed having centralised examples every week, and `Matthias` has been busy creating them. You can find the examples for `Week #390` right [**here**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-390/examples/json), and feel free to join the discussion [**here**](https://github.com/manwar/perlweeklychallenge-club/issues/14021) if you have any suggestions.

Below is my contributions to the `Task #1` of `Week #390`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-390/mohammad-anwar/perl/ch-1.pl)
***
```perl
sub decode_string {
    my ($s) = @_;
    1 while $s =~ s/(\d+)\[([^\[\]]*)\]/$2 x $1/eg;
    return $s;
}
```

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-390/mohammad-anwar/raku/ch-1.raku)
***
```raku
sub decode-string($s is copy) {
    Nil while $s ~~ s:g/ (\d+) '[' (<-[ \[ \] ]>*) ']' /{$1 x $0}/;
    return $s;
}
```

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-390/mohammad-anwar/python/ch-1.py)
***
```python
def decode_string(s: str) -> str:
    pattern = re.compile(r"(\d+)\[([^\[\]]*)\]")
    while True:
        s, count = pattern.subn(lambda m: m.group(2) * int(m.group(1)), s)
        if count == 0:
            break
    return s
```

Thank you `Team PWC`, once again.

`Happy Hacking!!`
***

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `386` &nbsp;&nbsp;|&nbsp;&nbsp; 41 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `387` &nbsp;&nbsp;|&nbsp;&nbsp; 36 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|
|&nbsp;&nbsp; `388` &nbsp;&nbsp;|&nbsp;&nbsp; 39 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `389` &nbsp;&nbsp;|&nbsp;&nbsp; 41 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `390` &nbsp;&nbsp;|&nbsp;&nbsp; 37 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
***

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `386` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 30 &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|
|&nbsp;&nbsp; `387` &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|
|&nbsp;&nbsp; `388` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 70 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|
|&nbsp;&nbsp; `389` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 70 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `390` &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|&nbsp;&nbsp; 28 &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|
***

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (4612)
     2. Rust       (1226)
     3. C          (1069)
     4. Haskell    (955)
     5. Ruby       (943)
     6. Lua        (927)
     7. C++        (751)
     8. Go         (732)
     9. JavaScript (652)
    10. Java       (532)

### Blogs with Creative Title
***

#### 1. [Decoded Order](https://raku-musings.com/decoded-order.html) by Arne Sommer.
#### 2. [Weird Ways to Wrangle Words](https://dev.to/boblied/pwc-390-weird-ways-to-wrangle-words-49mh) by Bob Lied.
#### 3. [Decoded Permutations](https://github.sommrey.de/the-bears-den/2026/09/11/ch-390.html) by Jorg Sommrey.
#### 4. [Inside Out and Round We Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-390/matthias-muth/README.md) by Matthias Muth.
#### 5. [How does it feel to decode me like you do?](https://packy.dardan.com/b/zB) by Packy Anderson.
#### 6. [Multiply and order](http://ccgi.campbellsmiths.force9.co.uk/challenge/390) by Peter Campbell Smith.
#### 7. [Decode the Order](https://blog.firedrake.org/archive/2026/09/The_Weekly_Challenge_390__Decode_the_Order.html) by Roger Bell_West.
#### 8. [The First Expansion](https://dev.to/simongreennet/weekly-challenge-the-first-expansion-38lj) by Simon Green.

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***
#### 1. Commits: 51,308 (`+84`)
#### 2. Pull Requests: 14,688 (`+27`)
#### 3. Contributors: 282
#### 4. Fork: 352
#### 5. Stars: 220

## SPONSOR {#SPONSOR}
***
With start of `Week #355`, we have a new sponsor `Marc Perry` until the end of year `2026`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance. You can find more informations [**here**](/sponsors).

## RECAP {#RECAP}
***
Quick recap of **[The Weekly Challenge - 390](/blog/recap-challenge-390)** by `Mohammad Sajid Anwar`.

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
Please check out the guest contributions for the [**Week #390**](/blog/guest-contribution/#390).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

## Task 1: Array Median {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given two sorted arrays.

Write a script to merge the two given sorted arrays and return the median of the merged array.

#### Example 1

    Input: @arr1 = (2), @arr2 = (4)
    Output: 3.0

    Merged array: (2,4)
    Median: (2+4)/2 => 3

#### Example 2

    Input: @arr1 = (1,2,3), @arr2 = (7,8,9,10)
    Output: 7.0

    Merged array: (1,2,3,7,8,9,10)
    Length of merged array is 7, the 4th element is 7.

#### Example 3

    Input: @arr1 = (), @arr2 = (10,20,30,40)
    Output: 25.0

    Merged array: (10,20,30,40)
    Median: (20+30)/2 => 25

#### Example 4

    Input: @arr1 = (100), @arr2 = (1,2,3,4,5,6,7)
    Output: 4.5

    Merged array: (1,2,3,4,5,6,7,100)
    Median: (4+5)/2 => 4.5

#### Example 5

    Input: @arr1 = (1,2,2), @arr2 = (2,2,3)
    Output: 2.0

    Merged array: (1,2,2,2,2,3)
    Median: (2+2)/2 => 2

## Task 2: Arrange Box {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org/)
***

You are given an array of box dimensions.

Write a script to determine the maximum number of these boxes that can fit inside each other in a single stack. For a box to fit inside another, it must be smaller in both dimensions.

#### Example 1

    Input: @boxes = ([1, 3], [3, 5], [6, 8], [2, 4])
    Output: 4

    Sort by width ascending: ([1, 3], [2, 4], [3, 5], [6, 8])
    Extract heights: [3, 4, 5, 8]
    [1, 3] -> [2, 4] -> [3, 5] -> [6, 8]

#### Example 2

    Input: @boxes = ([4, 5], [4, 6], [6, 7], [2, 3], [4, 3])
    Output: 3

    Sort by width ascending: ([2, 3], [4, 6], [4, 5], [4, 3], [6, 7])
    Extract heights: (3, 6, 5, 3, 7)
    [2, 3] -> [4, 5] -> [6, 7]

#### Example 3

    Input: @boxes = ([5, 5], [5, 5], [5, 5])
    Output: 1

    Sort by width ascending: ([5, 5], [5, 5], [5, 5])
    Extract heights: (5, 5, 5)
    [5, 5]

#### Example 4

    Input: @boxes = ([2, 100], [3, 200], [4, 300], [5, 50], [5, 400])
    Output: 4

    Sort by width ascending: ([2, 100], [3, 200], [4, 300], [5, 400], [5, 50])
    Extract heights: (100, 200, 300, 400, 50)
    [2, 100] -> [3, 200] -> [4, 300] -> [5, 400]

#### Example 5

    Input: @boxes = ([10, 20], [15, 10], [20, 30], [12, 18], [16, 25])
    Output: 3

    Sort by width ascending: ([10, 20], [12, 18], [15, 10], [16, 25], [20, 30])
    Extract heights: (20, 18, 10, 25, 30)
    [15, 10] -> [16, 25] -> [20, 30]

***
By submitting a response to the challenge you agree that your name or pseudonym, any photograph you supply and any other personal information contained in your submission may be published on this website and the associated mobile app. Last date to submit the solution `23:59 (UK Time) Sunday 20th September 2026`.
