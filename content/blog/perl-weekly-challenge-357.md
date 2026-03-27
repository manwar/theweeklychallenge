---
title: "The Weekly Challenge - 357"
date: 2026-01-19T00:00:00+00:00
description: "The Weekly Challenge - 357"
type: post
image: images/twc-logo.png
author: Mohammad Sajid Anwar
tags: ["Perl", "Raku"]
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
### &nbsp;&nbsp;9. [TASK #1: Kaprekar Constant](#TASK1)
### 10. [TASK #2: Unique Fraction Generator](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #357` of `The Weekly Challenge`.

We're slowly getting back into the swing of things after the long holiday season, and today I want to take a moment to talk about blogging. There was a time when I used to write about my weekly contributions, and I know firsthand the effort it takes to craft a tech blog post. Hats off to every one of you who takes the time to write and share - doing it week after week, without fail, is truly incredible. Code alone doesn’t tell the full story; it comes alive when the creator shares the journey behind it.

I've noticed that some members have taken it upon themselves to share solutions to past challenges, and it fills me with immense joy to see this energy and commitment. One day, I hope to look back and start contributing for all the weeks I’ve missed so far.

We are fortunate to have a group of dedicated members who haven't missed a single week since joining the game. Seeing that same enthusiasm week after week is inspiring. Sometimes I feel the years catching up with me, yet the next moment I'm reminded of the passion that keeps me going. Ideally, I want to continue doing exactly what I'm doing today for as long as I can.

Sending lots of love and respect to each and every one of you.

***

Below is my contributions to the `Task #1` of `Week #356`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-356/mohammad-anwar/perl/ch-1.pl)

```perl
sub count_one {
    my ($n) = @_;

    my @k = (1,2,2);
    my $i = 2;
    push @k, ($k[-1] ^ 3) x $k[$i++] while @k < $n;
    my $s = join("",@k[0..$n-1]);
    return $s =~ tr/1//;
}
```

<br>

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-356/mohammad-anwar/raku/ch-1.raku)

```perl
sub count_one($n) {
    my @k = 1, 2, 2;
    my $i = 2;

    @k.push: |((@k[*-1] +^ 3) xx @k[$i++]) while @k < $n;
    my $s = join("", @k[0..$n-1]);

    return +($s ~~ tr/1//);
}
```

<br>

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-356/mohammad-anwar/python/ch-1.py)

```python
def count_one(n):
    k = [1, 2, 2]
    i = 2

    while len(k) < n:
        val = k[-1] ^ 3
        count = k[i]
        i += 1
        k.extend([val] * count)

    s = "".join(map(str, k[0:n]))
    return s.count("1")
```

<br>

Thank you `Team PWC`, once again.

`Happy Hacking!!`

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `352` &nbsp;&nbsp;|&nbsp;&nbsp; 52 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|
|&nbsp;&nbsp; `353` &nbsp;&nbsp;|&nbsp;&nbsp; 54 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|
|&nbsp;&nbsp; `354` &nbsp;&nbsp;|&nbsp;&nbsp; 54 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `355` &nbsp;&nbsp;|&nbsp;&nbsp; 53 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|
|&nbsp;&nbsp; `356` &nbsp;&nbsp;|&nbsp;&nbsp; 48 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `352` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 73 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|
|&nbsp;&nbsp; `353` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 73 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `354` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 61 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
|&nbsp;&nbsp; `355` &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|&nbsp;&nbsp; 69 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|
|&nbsp;&nbsp; `356` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 39 &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (4014)
     2. Rust       (1088)
     3. Ruby       (862)
     4. Haskell    (851)
     5. Lua        (826)
     6. C++        (684)
     7. Go         (620)
     8. JavaScript (614)
     9. C          (600)
    10. BQN        (497)

<br>

### Blogs with Creative Title
***

#### 1. [Kolakoski Wins](https://raku-musings.com/kolakoski-wins.html) by Arne Sommer.
#### 2. [Self-Generating Games](https://github.sommrey.de/the-bears-den/2026/01/16/ch-356.html) by Jorg Sommrey.
#### 3. [Kolakoski called, he wants his sequence back(!)](https://awesomepowerofgenetics.blogspot.com/2026_01_18_archive.html#7775749283884135379) by Marc Perry.
#### 4. [Who’s Kolakoski?](https://packy.dardan.com/b/hV) by Packy Anderson.
#### 5. [Sequence and consequence](http://ccgi.campbellsmiths.force9.co.uk/challenge/356) by Peter Campbell Smith.
#### 6. [Kolakoski Wins](https://blog.firedrake.org/archive/2026/01/The_Weekly_Challenge_356__Kolakoski_Wins.html) by Roger Bell_West.
#### 7. [Winning sequence](https://dev.to/simongreennet/weekly-challenge-winning-sequence-3eic) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 47,391 (`+120`)
#### 2. Pull Requests: 13,385 (`+43`)
#### 3. Contributors: 272
#### 4. Fork: 350 (`+1`)
#### 5. Stars: 209 (`+2`)

<br>

## SPONSOR {#SPONSOR}
***

We are looking for sponsor for monthly prize pot of `US $50`. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 356](/blog/recap-challenge-356)** by `Mohammad Sajid Anwar`.

<br>

## PERL REVIEW {#PERLREVIEW}
***

If you missed any past reviews then please check out the [**collection**](/p5-reviews).

<br>

## RAKU REVIEW {#RAKUREVIEW}
***

If you missed any past reviews then please check out the [**collection**](/p6-reviews).

<br>

## CHART {#CHART}
***

Please take a look at the [**charts**](/chart) showing interesting data.

I would like to `THANK` every member of the team for their valuable suggestions. Please do share your experience with us.

<br>

## NEW MEMBERS {#NEWMEMBERS}
***

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}
***

Please check out the guest contributions for the [**Week #356**](/blog/guest-contribution/#356).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Kaprekar Constant {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

Write a function that takes a 4-digit integer and returns how many iterations are required to reach Kaprekar's constant (6174). For more information about `Kaprekar's Constant` please follow the [**wikipedia page**](https://en.wikipedia.org/wiki/6174).

#### Example 1

    Input: $int = 3524
    Output: 3

    Iteration 1: 5432 - 2345 = 3087
    Iteration 2: 8730 - 0378 = 8352
    Iteration 3: 8532 - 2358 = 6174

<br>

#### Example 2

    Input: $int = 6174
    Output: 0

<br>

#### Example 3

    Input: $int = 9998
    Output: 5

    Iteration 1: 9998 - 8999 = 0999
    Iteration 2: 9990 - 0999 = 8991
    Iteration 3: 9981 - 1899 = 8082
    Iteration 4: 8820 - 0288 = 8532
    Iteration 5: 8532 - 2358 = 6174

<br>

#### Example 4

    Input: $int = 1001
    Output: 4

    Iteration 1: 1100 - 0011 = 1089
    Iteration 2: 9810 - 0189 = 9621
    Iteration 3: 9621 - 1269 = 8352
    Iteration 4: 8532 - 2358 = 6174

<br>

#### Example 5

    Input: $int = 9000
    Output: 4

    Iteration 1: 9000 - 0009 = 8991
    Iteration 2: 9981 - 1899 = 8082
    Iteration 3: 8820 - 0288 = 8532
    Iteration 4: 8532 - 2358 = 6174

<br>

#### Example 6

    Input: $int = 1111
    Output: -1

    The sequence does not converge on 6174, so return -1.

<br>

## Task 2: Unique Fraction Generator {#TASK2}
##### **Submitted by:** Yary
***

Given a positive integer N, generate all unique fractions you can create using integers from 1 to N and follow the rules below:

    - Use numbers 1 through N only (no zero)
    - Create fractions like numerator/denominator
    - List them in ascending order (from smallest to largest)
    - If two fractions have the same value (like 1/2 and 2/4),
      only show the one with the smallest numerator

#### Example 1

    Input: $int = 3
    Output: 1/3, 1/2, 2/3, 1/1, 3/2, 2/1, 3/1

#### Example 2

    Input: $int = 4
    Output: 1/4, 1/3, 1/2, 2/3, 3/4, 1/1, 4/3, 3/2, 2/1, 3/1, 4/1

<br>

#### Example 3

    Input: $int = 1
    Output: 1/1

<br>

#### Example 4

    Input: $int = 6
    Output: 1/6, 1/5, 1/4, 1/3, 2/5, 1/2, 3/5, 2/3, 3/4,
            4/5, 5/6, 1/1, 6/5, 5/4, 4/3, 3/2, 5/3, 2/1,
            5/2, 3/1, 4/1, 5/1, 6/1

<br>

#### Example 5

    Input: $int = 5
    Output: 1/5, 1/4, 1/3, 2/5, 1/2, 3/5, 2/3, 3/4, 4/5, 1/1,
            5/4, 4/3, 3/2, 5/3, 2/1, 5/2, 3/1, 4/1, 5/1

<br>

***

Last date to submit the solution `23:59 (UK Time) Sunday 25th January 2026`.

***
