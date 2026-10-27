---
title: "The Weekly Challenge - 397"
date: 2026-10-26T00:00:00+00:00
description: "The Weekly Challenge - 397"
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
### &nbsp;&nbsp;9. [TASK #1: Absent Smallest Positive](#TASK1)
### 10. [TASK #2: Binary Reflection](#TASK2)

## HEADLINES {#HEADLINES}
***
Welcome to the `Week #397` of `The Weekly Challenge`.

Thank you, **Team PWC**, for the big jump in the contributions last week.

Even I managed to share solutions to both task this time.

Below is my contributions to the `Week #396`.

### [Task #1 - Perl]: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-396/mohammad-anwar/perl/ch-1.pl)
***
```perl
sub finishing_order($order, $friends) {
    my %f = map { $_ => 1 } @$friends;
    return [grep {  $f{$_} } @$order];
}
```

### [Task #2 - Perl]: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-396/mohammad-anwar/perl/ch-2.pl)
***
```perl
sub trionic(@arr) {
    my $n = @arr;
    return 'false' if $n < 4;

    my $i = 0;
    $i++ while $i < $n - 1 && $arr[$i] < $arr[$i + 1];
    my $p = $i;
    return 'false' if $p == 0;

    $i++ while $i < $n - 1 && $arr[$i] > $arr[$i + 1];
    my $q = $i;

    return 'false' if $q == $p || $q >= $n - 1;

    $i++ while $i < $n - 1 && $arr[$i] < $arr[$i + 1];

    return $i == $n - 1 ? 'true' : 'false';
}
```

### [Task #1 - Raku]: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-396/mohammad-anwar/raku/ch-1.raku)
***
```raku
sub finishing-order(@order, @friends) {
    my %f = @friends.map({ $_ => True });
    return [ @order.grep({ %f{$_} }) ];
}
```

### [Task #2 - Raku]: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-396/mohammad-anwar/raku/ch-2.raku)
***
```raku
sub trionic(*@arr) {
    my $n = @arr.elems;
    return 'false' if $n < 4;

    my $i = 0;
    $i++ while $i < $n - 1 && @arr[$i] < @arr[$i + 1];
    my $p = $i;
    return 'false' if $p == 0;

    $i++ while $i < $n - 1 && @arr[$i] > @arr[$i + 1];
    my $q = $i;

    return 'false' if $q == $p || $q >= $n - 1;

    $i++ while $i < $n - 1 && @arr[$i] < @arr[$i + 1];

    return $i == $n - 1 ?? 'true' !! 'false';
}
```

### [Task #1 - Python]: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-396/mohammad-anwar/python/ch-1.py)
***
```python
def finishing_order(order, friends):
    f = set(friends)
    return [x for x in order if x in f]
```

### [Task #2 - Python]: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-396/mohammad-anwar/python/ch-2.py)
***
```python
def trionic(arr):
    n = len(arr)
    if n < 4:
        return 'false'

    i = 0
    while i < n - 1 and arr[i] < arr[i + 1]:
        i += 1
    p = i
    if p == 0:
        return 'false'

    while i < n - 1 and arr[i] > arr[i + 1]:
        i += 1
    q = i

    if q == p or q >= n - 1:
        return 'false'

    while i < n - 1 and arr[i] < arr[i + 1]:
        i += 1

    return 'true' if i == n - 1 else 'false'
```

Thank you `Team PWC`, once again.

`Happy Hacking!!`
***

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `392` &nbsp;&nbsp;|&nbsp;&nbsp; 41 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `393` &nbsp;&nbsp;|&nbsp;&nbsp; 41 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `394` &nbsp;&nbsp;|&nbsp;&nbsp; 36 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|
|&nbsp;&nbsp; `395` &nbsp;&nbsp;|&nbsp;&nbsp; 37 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `396` &nbsp;&nbsp;|&nbsp;&nbsp; 41 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
***

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `392` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 47 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `393` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 65 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|
|&nbsp;&nbsp; `394` &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|&nbsp;&nbsp; 40 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `395` &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|
|&nbsp;&nbsp; `396` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 58 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|
***

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (4689)
     2. Rust       (1251)
     3. C          (1079)
     4. Haskell    (971)
     5. Ruby       (954)
     6. Lua        (938)
     7. C++        (762)
     8. Go         (733)
     9. JavaScript (662)
    10. Java       (532)

### Blogs with Creative Title
***

#### 1. [Trionic Finish](https://raku-musings.com/trionic-finish.html) by Arne Sommer.
#### 2. [Finishing Order, Trionic Array](https://dev.to/boblied/pwc-396-finishing-order-trionic-array-57h2) by Bob Lied.
#### 3. [Shaped Finishing](https://github.sommrey.de/the-bears-den/2026/10/23/ch-396.html) by Jorg Sommrey.
#### 4. [What do I get out of this?](https://packy.dardan.com/b/11Z) by Packy Anderson.
#### 5. [A race and some hills](http://ccgi.campbellsmiths.force9.co.uk/challenge/396) by Peter Campbell Smith.
#### 6. [Trionic Finishing](https://blog.firedrake.org/archive/2026/10/The_Weekly_Challenge_396__Trionic_Finishing.html) by Roger Bell_West.

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***
#### 1. Commits: 51,810 (`+85`)
#### 2. Pull Requests: 14,865 (`+30`)
#### 3. Contributors: 281
#### 4. Fork: 353
#### 5. Stars: 221

## SPONSOR {#SPONSOR}
***
With start of `Week #355`, we have a new sponsor `Marc Perry` until the end of year `2026`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance. You can find more informations [**here**](/sponsors).

## RECAP {#RECAP}
***
Quick recap of **[The Weekly Challenge - 396](/blog/recap-challenge-396)** by `Mohammad Sajid Anwar`.

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
Please check out the guest contributions for the [**Week #396**](/blog/guest-contribution/#396).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

## Task 1: Absent Smallest Positive {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given an array of integers.

Write a script to return the smallest absent positive integer such that it is strictly greater than the average of all elements in the given array.

#### Example 1

    Input: @arr = (1, 2, 4, 5, 6)
    Output: 7

    Average: (1 + 2 + 4 + 5 + 6) / 5 = 3.6
    We need the smallest positive integer absent from nums that is strictly greater than 3.6.
    The positive integers greater than 3.6 are 4, 5, 6, 7, ....

    4 is in the given array.
    5 is in the given array.
    6 is in the given array.
    7 is not in.

#### Example 2

    Input: @arr = (-5, -2, -1, 3)
    Output: 1

    Average: (-5 -2 -1 + 3) / 4 = -1.25
    We need the smallest absent positive integer strictly greater than -1.25.
    Positive integers are 1, 2, 3, 4, ... (all are strictly greater than -1.25).

    1 is positive and absent from the given array.

#### Example 3

    Input: @arr = (1, 2, 3)
    Output: 4

    Average: (1 + 2 + 3) / 3 = 2.0
    We need an integer strictly greater than 2.0.

    3 is in the given array.
    4 is not in.

#### Example 4

    Input: @arr = (2, 3, 7, 8)
    Output: 6

    Average: (2 + 3 + 7 + 8) / 4 = 5.0
    We need an integer strictly greater than 5.0.

    6 is not in the given array.

#### Example 5

    Input: @arr = (1, 1, 1, 10)
    Output: 4

    Average: (1 + 1 + 1 + 10) / 4 = 3.25
    Positive integers strictly greater than 3.25: 4, 5, 6, ...

    4 is not in the given array.

## Task 2: Binary Reflection {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given an array of integer.

Write a script to sort the given array in ascending order based on the binary reflection of each element. If two different numbers have the same binary reflection, the smaller original number should appear first.

#### Example 1

    Input: @arr = (3, 6, 12)
    Output: (3, 6, 12)

    Decimal 3  = Binary 11 -> reverse is also same 11 = Decimal 3
    Decimal 6  = Binary 110 -> reverse 011 = Decimal 3
    Decimal 12 = Binary 1100 -> 0011 = Decimal 3

    All three elements have the same binary reflection (3).
    Since they tie, they are sorted by their original values in ascending order: (3, 6, 12).

#### Example 2

    Input: @arr = (1, 2, 4, 8)
    Output: (1, 2, 4, 8)

    Decimal 1 = Binary 1 -> reverse is also same 1 = Decimal 1
    Decimal 2 = Binary 10 -> reverse is 01 = Decimal 1
    Decimal 4 = Binary 100 -> reverse 001 = Decimal 1
    Decimal 8 = Binary 1000 -> reverse is 0001 = Decimal 1

    All elements reflect to 1. Tie-breaking by original value yields (1, 2, 4, 8).

#### Example 3

    Input: @arr = (7, 8, 9, 10)
    Output: (8, 10, 7, 9)

    Decimal 8  = Binary 1000 -> reverse 0001 = Decimal 1
    Decimal 9  = Binary 1001 -> reverse 1001 = Decimal 9
    Decimal 10 = Binary 1010 -> reverse 0101 = Decimal 5
    Decimal 7  = Binary 111 -> reverse 111 = Decimal 7

    Binary reflections:
    8  -> 1
    9  -> 9
    10 -> 5
    7  -> 7

    Sorting by reflection values (1, 5, 7, 9) gives original elements (8, 10, 7, 9).

#### Example 4

    Input: @arr = (5, 9, 15, 17)
    Output: (5, 9, 15, 17)

    Decimal 5  = Binary 101 -> reverse 101 = Decimal 5
    Decimal 9  = Binary 1001 -> reverse 1001 = Decimal 9
    Decimal 15 = Binary 1111 -> reverse 1111 = Decimal 15
    Decimal 17 = Binary 10001 -> reverse 10001 = Decimal 17

    All numbers are binary palindromes, so their reflections match their original decimal values (5, 9, 15, 17),
    leaving the array order unchanged.

#### Example 5

    Input: @arr = (11, 13, 14, 19)
    Output: (14, 13, 11, 19)

    Decimal 11 = Binary 1011 -> reverse 1101 = Decimal 13
    Decimal 13 = Binary 1101 -> reverse 1011 = Decimal 11
    Decimal 14 = Binary 1110 -> reverse 0111 = Decimal 7
    Decimal 19 = Binary 10011 -> reverse 11001 = Decimal 25

    Reflections:
    14 -> 7
    13 -> 11
    11 -> 13
    19 -> 25

    Sorted by reflection values (7, 11, 13, 25) yields (14, 13, 11, 19).

***
By submitting a response to the challenge you agree that your name or pseudonym, any photograph you supply and any other personal information contained in your submission may be published on this website and the associated mobile app. Last date to submit the solution `23:59 (UK Time) Sunday 1st November 2026`.
