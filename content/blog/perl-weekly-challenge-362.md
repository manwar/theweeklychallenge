---
title: "The Weekly Challenge - 362"
date: 2026-02-23T00:00:00+00:00
description: "The Weekly Challenge - 362"
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
### &nbsp;&nbsp;9. [TASK #1: Echo Chamber](#TASK1)
### 10. [TASK #2: Spellbound Sorting](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #362` of `The Weekly Challenge`.

Welcome aboard, [**David Smith**](https://github.com/davidsmith3), and thank you for the first contributions in [**Raku**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-361/davidsmith3/raku).

Thanks to a recent push by `Paulo Custodio`, the `C` language has taken a big lead at rank `#6`.

`Ruby` and `Haskell` are still very close at ranks `#3` and `#4` respectively.

Please keep the spirit up!

***

<br>

Below is my contributions to the `Task #1` of `Week #361`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-361/mohammad-anwar/perl/ch-1.pl)

```perl
sub zeckendorf {
    my $n = shift;
    my @f = (1, 2);

    push(@f, $f[-1] + $f[-2]) while $f[-1] <= $n;
    pop @f;
    my @r;
    for (my $i = $#f; $i >= 0; $i--) {
        if ($f[$i] <= $n) {
            push @r, $f[$i];
            $n -= $f[$i];
        }
    }

    return join ",", @r;
}
```

<br>

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-361/mohammad-anwar/raku/ch-1.raku)

```raku
sub zeckendorf($n is copy) {
    my @f = (1, 2);

    push @f, @f[*-1] + @f[*-2] while @f[*-1] <= $n;
    @f.pop;
    my @r;
    loop (my $i = @f.end; $i >= 0; $i--) {
        if @f[$i] <= $n {
            push @r, @f[$i];
            $n -= @f[$i];
        }
    }

    return @r.join(",");
}
```

<br>

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-361/mohammad-anwar/python/ch-1.py)

```python
def zeckendorf(n):
    f = [1, 2]

    while f[-1] <= n:
        f.append(f[-1] + f[-2])
    f.pop()
    r = []
    i = len(f) - 1
    while i >= 0:
        if f[i] <= n:
            r.append(f[i])
            n -= f[i]
        i -= 1

    return ",".join(str(x) for x in r)
```

<br>

Thank you `Team PWC`, once again.

`Happy Hacking!!`

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `357` &nbsp;&nbsp;|&nbsp;&nbsp; 52 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|
|&nbsp;&nbsp; `358` &nbsp;&nbsp;|&nbsp;&nbsp; 55 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 28 &nbsp;&nbsp;|
|&nbsp;&nbsp; `359` &nbsp;&nbsp;|&nbsp;&nbsp; 56 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|
|&nbsp;&nbsp; `360` &nbsp;&nbsp;|&nbsp;&nbsp; 61 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `361` &nbsp;&nbsp;|&nbsp;&nbsp; 59 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `357` &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 73 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `358` &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 71 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|
|&nbsp;&nbsp; `359` &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 68 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `360` &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|&nbsp;&nbsp; 75 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `361` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 55 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (4157)
     2. Rust       (1107)
     3. Ruby       (870)
     4. Haskell    (867)
     5. Lua        (846)
     6. C          (740)
     7. C++        (694)
     8. Go         (644)
     9. JavaScript (622)
    10. BQN        (507)

<br>

### Blogs with Creative Title
***

#### 1. [Celebrity Representation](https://raku-musings.com/celebrity-representation.html) by Arne Sommer.
#### 2. [Was Fibonacci ever a Celebrity?](https://awesomepowerofgenetics.blogspot.com/2026_02_22_archive.html#9014461344541175177) by Marc Perry.
#### 3. [Where Everybody Knows Your Name](https://packy.dardan.com/b/jJ) by Packy Anderson.
#### 4. [Zeckendorf, the celebrity](http://ccgi.campbellsmiths.force9.co.uk/challenge/361) by Peter Campbell Smith.
#### 5. [Celebrity Zeckendorf](https://blog.firedrake.org/archive/2026/02/The_Weekly_Challenge_361__Celebrity_Zeckendorf.html) by Roger Bell_West.
#### 6. [Representing a celebrity](https://dev.to/simongreennet/weekly-challenge-representing-a-celebrity-1cfe) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 47,987 (`+125`)
#### 2. Pull Requests: 13,606 (`+50`)
#### 3. Contributors: 274 (`+1`)
#### 4. Fork: 347
#### 5. Stars: 210 (`+1`)

<br>

## SPONSOR {#SPONSOR}
***

We are looking for sponsor for monthly prize pot of `US $50`. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 361](/blog/recap-challenge-361)** by `Mohammad Sajid Anwar`.

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

[**David Smith**](https://github.com/davidsmith3), an expert `Raku` hacker joined `Team PWC`.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}
***

Please check out the guest contributions for the [**Week #361**](/blog/guest-contribution/#361).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Echo Chamber {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a string containing lowercase letters.

Write a script to transform the string based on the index position of each character (starting from `0`). For each character at position `i`, repeat it `i + 1` times.

#### Example 1

    Input: "abca"
    Output: "abbcccaaaa"

    Index 0: "a" -> repeated 1 time  -> "a"
    Index 1: "b" -> repeated 2 times -> "bb"
    Index 2: "c" -> repeated 3 times -> "ccc"
    Index 3: "a" -> repeated 4 times -> "aaaa"

<br>

#### Example 2

    Input: "xyz"
    Output: "xyyzzz"

    Index 0: "x" -> "x"
    Index 1: "y" -> "yy"
    Index 2: "z" -> "zzz"

<br>

#### Example 3

    Input: "code"
    Output: "coodddeeee"

    Index 0: "c" -> "c"
    Index 1: "o" -> "oo"
    Index 2: "d" -> "ddd"
    Index 3: "e" -> "eeee"

<br>

#### Example 4

    Input: "hello"
    Output: "heelllllllooooo"

    Index 0: "h" -> "h"
    Index 1: "e" -> "ee"
    Index 2: "l" -> "lll"
    Index 3: "l" -> "llll"
    Index 4: "o" -> "ooooo"

<br>

#### Example 5

    Input: "a"
    Output: "a"

    Index 0: "a" -> "a"

<br>

## Task 2: Spellbound Sorting {#TASK2}
##### **Submitted by:** [Peter Campbell Smith](http://ccgi.campbellsmiths.force9.co.uk/challenge/)
***

You are given an array of integers.

Write a script to return them in alphabetical order, in any language of your choosing. Default language is English.

#### Example 1

    Input: (6, 7, 8, 9 ,10)
    Output: (8, 9, 7, 6, 10)

    eight, nine, seven, six, ten

<br>

#### Example 2

    Input: (-3, 0, 1000, 99)
    Output: (-3, 99, 1000, 0)

    minus three, ninety-nine, one thousand, zero

<br>

#### Example 3

    Input: (1, 2, 3, 4, 5)

    Output: (5, 2, 4, 3, 1) for French language
    cinq, deux, quatre, trois, un

    Output: (5, 4, 1, 3, 2) for English language
    five, four, one, three, two

<br>

#### Example 4

    Input: (0, -1, -2, -3, -4)
    Output: (-4, -1, -3, -2, 0)

    minus four, minus one, minus three, minus two, zero

<br>

#### Example 5

    Input: (100, 101, 102)
    Output: (100, 101, 102)

    one hundred, one hundred and one, one hundred and two

<br>

***

Last date to submit the solution `23:59 (UK Time) Sunday 1st March 2026`.

***
