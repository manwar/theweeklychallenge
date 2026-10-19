---
title: "The Weekly Challenge - 396"
date: 2026-10-19T00:00:00+00:00
description: "The Weekly Challenge - 396"
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
### &nbsp;&nbsp;9. [TASK #1: Finishing Order](#TASK1)
### 10. [TASK #2: Trionic Array](#TASK2)

## HEADLINES {#HEADLINES}
***
Welcome to the `Week #396` of `The Weekly Challenge`.

The dull and dark weather in London is back. Although it is the start of festive season but I hate it. You hardly get sun during this period, specially Nov/Dec/Jan. I had to make an extra effort to motivate myself. The December month is still OK as we get Christmas break to spend time with family and friends. November and post Christmas January is very boring and dull.

The weekly challenge is the only lifeline for me. It keeps me busy. **Team PWC** weekly push gives me lots of energy. I am also looking forward to **London Perl Workshop 2026**. Anyone coming to the event? Please let me know, we can meet and greet. Last year, I met **Arne Sommer** by chance.

Below is my contributions to the `Task #1` of `Week #395`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-395/mohammad-anwar/perl/ch-1.pl)
***
```perl
sub complex_multiply($x, $y) {
    my ($a, $b) = $x =~ /(-?\d+)\+?\(?(-?\d+)\)?i/;
    my ($c, $d) = $y =~ /(-?\d+)\+?\(?(-?\d+)\)?i/;
    my ($r, $i) = ($a * $c - $b * $d, $a * $d + $b * $c);
    return "$r" . ($i < 0 ? "+($i)i" : "+${i}i");
}
```

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-395/mohammad-anwar/raku/ch-1.raku)
***
```raku
sub complex-multiply($x, $y) {
    my ($a, $b) = extract_coeffs($x);
    my ($c, $d) = extract_coeffs($y);
    my ($r, $i) = ($a * $c - $b * $d, $a * $d + $b * $c);
    return "$r" ~ ($i < 0 ?? "+($i)i" !! "+{$i}i");
}

sub extract_coeffs($str) {
    $str ~~ m:P5/(-?\d+)\+?\(?(-?\d+)\)?i/;
    return ($/[0].Int, $/[1].Int);
}
```

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-395/mohammad-anwar/python/ch-1.py)
***
```python
def complex_multiply(x, y):
    m1 = re.search(r"(-?\d+)\+?\(?(-?\d+)\)?i", x)
    m2 = re.search(r"(-?\d+)\+?\(?(-?\d+)\)?i", y)
    a, b = int(m1.group(1)), int(m1.group(2))
    c, d = int(m2.group(1)), int(m2.group(2))

    r = a * c - b * d
    i = a * d + b * c

    return f"{r}+({i})i" if i < 0 else f"{r}+{i}i"
```

Thank you `Team PWC`, once again.

`Happy Hacking!!`
***

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `391` &nbsp;&nbsp;|&nbsp;&nbsp; 41 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|
|&nbsp;&nbsp; `392` &nbsp;&nbsp;|&nbsp;&nbsp; 41 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `393` &nbsp;&nbsp;|&nbsp;&nbsp; 41 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `394` &nbsp;&nbsp;|&nbsp;&nbsp; 36 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|
|&nbsp;&nbsp; `395` &nbsp;&nbsp;|&nbsp;&nbsp; 37 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
***

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `391` &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|
|&nbsp;&nbsp; `392` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 47 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `393` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 65 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|
|&nbsp;&nbsp; `394` &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|&nbsp;&nbsp; 40 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `395` &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|
***

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (4675)
     2. Rust       (1247)
     3. C          (1077)
     4. Haskell    (969)
     5. Ruby       (952)
     6. Lua        (936)
     7. C++        (760)
     8. Go         (733)
     9. JavaScript (660)
    10. Java       (532)

### Blogs with Creative Title
***

#### 1. [Complex Squares](https://raku-musings.com/complex-squares.html) by Arne Sommer.
#### 2. [Complex Squares](https://github.sommrey.de/the-bears-den/2026/10/16/ch-395.html) by Jorg Sommrey.
#### 3. [Complex Squares](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-395/matthias-muth/README.md) by Matthias Muth.
#### 4. [There was magic abroad in the air…](https://packy.dardan.com/b/111) by Packy Anderson.
#### 5. [Complex words](http://ccgi.campbellsmiths.force9.co.uk/challenge/395) by Peter Campbell Smith.
#### 6. [Words are Complex](https://blog.firedrake.org/archive/2026/10/The_Weekly_Challenge_395__Words_are_Complex.html) by Roger Bell_West.
#### 7. [The complex square](https://dev.to/simongreennet/the-complex-square-3312) by Simon Green.

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***
#### 1. Commits: 51,725 (`+71`)
#### 2. Pull Requests: 14,835 (`+23`)
#### 3. Contributors: 281
#### 4. Fork: 353
#### 5. Stars: 221

## SPONSOR {#SPONSOR}
***
With start of `Week #355`, we have a new sponsor `Marc Perry` until the end of year `2026`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance. You can find more informations [**here**](/sponsors).

## RECAP {#RECAP}
***
Quick recap of **[The Weekly Challenge - 395](/blog/recap-challenge-395)** by `Mohammad Sajid Anwar`.

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
Please check out the guest contributions for the [**Week #395**](/blog/guest-contribution/#395).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

## Task 1: Finishing Order {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given two array of integers, @order and @friends.

The @order (size n) contains every integer from 1 to n exactly once. The @friends contains ID in sorted in strictly increasing order.

Write a script to return the array containing IDs in finishing order.

#### Example 1

    Input: @order = (3, 1, 4, 2, 5)
           @friends = (1, 2, 4)
    Output: (1, 4, 2)

    ID 1 finished 2nd.
    ID 4 finished 3rd.
    ID 2 finished 4th.

#### Example 2

    Input: @order = (5, 4, 3, 2, 1)
           @friends = (1, 3, 5)
    Output: (5, 3, 1)

    ID 5 finished 1st.
    ID 3 finished 3rd.
    ID 1 finished 5th.

#### Example 3

    Input: @order = (2, 4, 1, 3)
           @friends = (1, 2, 3, 4)
    Output: (2, 4, 1, 3)

    ID 2 finished 1st.
    ID 4 finished 2nd.
    ID 1 finished 3rd.
    ID 3 finished 4th.

#### Example 4

    Input: @order = (4, 1, 3, 2)
           @friends = (3)
    Output: (3)

#### Example 5

    Input: @order = (1, 3, 2, 6, 5, 4)
           @friends = (1, 2, 3)
    Output: (1, 3, 2)

    ID 1 finished 1st.
    ID 3 finished 2nd.
    ID 2 finished 3rd.

## Task 2: Trionic Array {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given an array of integer.

Write a script to return true if the given array is **Trionic** otherwise return false.

> An array is trionic if there exist indices 0 < p < q < n − 1 such that arr[0...p] is strictly increasing, arr[p...q] is strictly decreasing, and arr[q...n − 1] is strictly increasing.

#### Example 1

    Input: @arr = (1, 3, 5, 4, 2, 6, 8)
    Output: true

    Choose p = 2 and q = 4
    $arr[0..2] = (1, 3, 5) (strictly increasing)
    $arr[2..4] = (5, 4, 2) (strictly decreasing)
    $arr[4..6] = (2, 6, 8) (strictly increasing)

    Valid indices: 0 < p (2) < q (4) < n-1 (6).

#### Example 2

    Input: @arr = (1, 4, 4, 2, 1, 3, 5)
    Output: false

    The first segment (1, 4, 4) contains duplicate adjacent values, so it is not strictly increasing.
    No valid p and q exist to satisfy all three strictly monotonic conditions.

#### Example 3

    Input: @arr = (2, 10, 3, 1, 9)
    Output: true

    Choose p = 1 and q = 3.
    $arr[0..1] = (2, 10)    (strictly increasing)
    $arr[1..3] = (10, 3, 1) (strictly decreasing)
    $arr[3..4] = (1, 9)     (strictly increasing)

#### Example 4

    Input: @arr = (1, 2, 3, 4, 3, 2, 1)
    Output: false

    This is a standard mountain array (strictly increasing, then strictly decreasing).
    There is no second valley (q) that transitions back into a strictly increasing third segment before reaching the end of the array.

#### Example 5

    Input: @arr = (1, 3, 6, 4, 2, 7, 8, 4)
    Output: false

***
By submitting a response to the challenge you agree that your name or pseudonym, any photograph you supply and any other personal information contained in your submission may be published on this website and the associated mobile app. Last date to submit the solution `23:59 (UK Time) Sunday 25th October 2026`.
