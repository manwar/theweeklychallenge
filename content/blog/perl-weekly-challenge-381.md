---
title: "The Weekly Challenge - 381"
date: 2026-07-06T00:00:00+00:00
description: "The Weekly Challenge - 381"
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
### &nbsp;&nbsp;9. [TASK #1: Same Row Column](#TASK1)
### 10. [TASK #2: Smaller Greater Element](#TASK2)

## HEADLINES {#HEADLINES}
***
Welcome to the `Week #381` of `The Weekly Challenge`.

Welcome aboard, [**ygrek**](https://github.com/ygrek), and thanks for your first contributions in [**K**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-380/ygrek/k).

Finally the history is created, guest contributions (`91`) is gone past regular contributions (`84`). Congratulation to all guest contributors.

Today is is the first `Monday` of the month, and time to declare the monthly champion. With greate pride, I announce, `Athanasius` as the next `Champion of the Month`. Congratulation `Athanasius`.

I am still waiting for the previous month champion, `David Smith`, to get back to me.

Below is my contributions to the `Task #1` of `Week #380`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-380/mohammad-anwar/perl/ch-1.pl)
***
```perl
sub sum_of_freq {
    my ($str) = @_;

    my (%v, %c);
    foreach my $char (split //, lc $str) {
        if    ($char =~ /[aeiou]/) { $v{$char}++ }
        elsif ($char =~ /[a-z]/)   { $c{$char}++ }
    }

    return (max(values %v) // 0) + (max(values %c) // 0);
}
```

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-380/mohammad-anwar/raku/ch-1.raku)
***
```raku
sub sum-of-freq($str) {
    my (%v, %c);

    for $str.lc.comb -> $char {
        if    $char ~~ /<[aeiou]>/ { %v{$char}++ }
        elsif $char ~~ /<[a..z]>/  { %c{$char}++ }
    }

    my $max_v = %v ?? %v.values.max !! 0;
    my $max_c = %c ?? %c.values.max !! 0;

    return $max_v + $max_c;
}
```

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-380/mohammad-anwar/python/ch-1.py)
***
```python
def sum_of_freq(string):
    v, c = {}, {}

    for char in string.lower():
        if re.match(r"[aeiou]", char):
            v[char] = v.get(char, 0) + 1
        elif re.match(r"[a-z]", char):
            c[char] = c.get(char, 0) + 1

    return max(v.values(), default=0) + max(c.values(), default=0)
```

Thank you `Team PWC`, once again.

`Happy Hacking!!`
***

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `376` &nbsp;&nbsp;|&nbsp;&nbsp; 42 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `377` &nbsp;&nbsp;|&nbsp;&nbsp; 45 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `378` &nbsp;&nbsp;|&nbsp;&nbsp; 50 &nbsp;&nbsp;|&nbsp;&nbsp; 28 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `379` &nbsp;&nbsp;|&nbsp;&nbsp; 45 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `380` &nbsp;&nbsp;|&nbsp;&nbsp; 48 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
***

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `376` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 45 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|
|&nbsp;&nbsp; `377` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 67 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `378` &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|&nbsp;&nbsp; 89 &nbsp;&nbsp;|&nbsp;&nbsp; 31 &nbsp;&nbsp;|
|&nbsp;&nbsp; `379` &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|&nbsp;&nbsp; 80 &nbsp;&nbsp;|&nbsp;&nbsp; 27 &nbsp;&nbsp;|
|&nbsp;&nbsp; `380` &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 93 &nbsp;&nbsp;|&nbsp;&nbsp; 29 &nbsp;&nbsp;|
***

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (4488)
     2. Rust       (1188)
     3. C          (1049)
     4. Haskell    (928)
     5. Ruby       (928)
     6. Lua        (912)
     7. C++        (735)
     8. Go         (717)
     9. JavaScript (644)
    10. Java       (532)

### Blogs with Creative Title
***

#### 1. [Reverse Sum](https://raku-musings.com/reverse-sum.html) by Arne Sommer.
#### 2. [Reverse Frequencies](https://github.sommrey.de/the-bears-den/2026/07/03/ch-380.html) by Jorg Sommrey.
#### 3. [Watch Your Zeros, and Don’t Get Off by One!](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-380/matthias-muth/README.md) by Matthias Muth.
#### 4. [Just like honey, baby, from the bee](https://packy.dardan.com/b/t4) by Packy Anderson.
#### 5. [Frequencies and degrees](http://ccgi.campbellsmiths.force9.co.uk/challenge/380) by Peter Campbell Smith.
#### 6. [Reverse the Frequency, Kenneth](https://blog.firedrake.org/archive/2026/07/The_Weekly_Challenge_380__Reverse_the_Frequency__Kenneth.html) by Roger Bell_West.
#### 7. [The race car has rhythm](https://dev.to/simongreennet/the-race-car-has-rhythm-5dd1) by Simon Green.

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***
#### 1. Commits: 50,414 (`+126`)
#### 2. Pull Requests: 14,378 (`+44`)
#### 3. Contributors: 281 (`+1`)
#### 4. Fork: 353 (`+1`)
#### 5. Stars: 215

## SPONSOR {#SPONSOR}
***
With start of `Week #355`, we have a new sponsor `Marc Perry` until the end of year `2026`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance. You can find more informations [**here**](/sponsors).

## RECAP {#RECAP}
***
Quick recap of **[The Weekly Challenge - 380](/blog/recap-challenge-380)** by `Mohammad Sajid Anwar`.

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
[**ygrek**](https://github.com/ygrek), an experienced `K` hacker joined the `Team PWC`.

Please check out the guest contributions for the [**Week #380**](/blog/guest-contribution/#380).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

## Task 1: Same Row Column {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a `n x n` matrix containing integers from 1 to n.

Write a script to find if every row and every column contains all the integers from 1 to n.

#### Example 1

    Input: @matrix = ([1, 2, 3, 4],
                      [2, 3, 4, 1],
                      [3, 4, 1, 2],
                      [4, 1, 2, 3],)
    Output: true

#### Example 2

    Input: @matrix = ([1])
    Output: true

#### Example 3

    Input: @matrix = ([1, 2, 5],
                      [5, 1, 2],
                      [2, 5, 1],)
    Output: false

    Elements are out of range 1..3.

#### Example 4

    Input: @matrix = ([1, 2, 3],
                      [1, 2, 3],
                      [1, 2, 3],)
    Output: false

#### Example 5

    Input: @matrix = ([1, 2, 3],
                      [3, 1, 2],
                      [3, 2, 1],)
    Output: false

## Task 2: Smaller Greater Element {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given an array of integers.

Write a script to find the number of elements that have both a strictly smaller and greater element in the given array.

#### Example 1

    Input: @int = (2,4)
    Output: 0

    Not enough elements in the array.

#### Example 2

    Input: @int = (1, 1, 1, 1)
    Output: 0


#### Example 3

    Input: @int = (1, 1, 4, 8, 12, 12)
    Output: 2

    The elements are 4 and 8.

#### Example 4

    Input: @int = (3, 6, 6, 9)
    Output: 2

    Both instances of 6.

#### Example 5

    Input: @int = (0, -5, 10, -2, 4)
    Output: 3

    The elements are 0, -2, and 4.

***
By submitting a response to the challenge you agree that your name or pseudonym, any photograph you supply and any other personal information contained in your submission may be published on this website and the associated mobile app. Last date to submit the solution `23:59 (UK Time) Sunday 12th July 2026`.
