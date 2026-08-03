---
title: "The Weekly Challenge - 385"
date: 2026-08-03T00:00:00+00:00
description: "The Weekly Challenge - 385"
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
### &nbsp;&nbsp;9. [TASK #1: Uncommon Words](#TASK1)
### 10. [TASK #2: Outermost Parentheses](#TASK2)

## HEADLINES {#HEADLINES}
***
Welcome to the `Week #385` of `The Weekly Challenge`.

Today is the first `Monday` of the month and time to declare our next champion. With greate pride, I announce, `Ali Moradi`, as the `Champion of the Month`. He currently ranked `#23`. He has contributed in `321` solutions in `Perl`, `115` solutions in `Raku` and `126` blog posts. He is also ranked `#5` in the guest leaderboard. He has contributed in `29` guest languages as of today.

Below is my contributions to the `Task #1` of `Week #384`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-384/mohammad-anwar/perl/ch-1.pl)
***
```perl
sub to_base {
    my ($n, $b) = @_;
    my @d = ('0'..'9', 'A'..'Z', 'a'..'z', '+', '/');
    return $n ? to_base(int($n / $b), $b) . $d[$n % $b] : '';
}
```

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-384/mohammad-anwar/raku/ch-1.raku)
***
```raku
sub to-base($n, $b) {
    my @d = |('0'..'9'), |('A'..'Z'), |('a'..'z'), '+', '/';
    return $n ?? to-base($n div $b, $b) ~ @d[$n % $b] !! '';
}
```

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-384/mohammad-anwar/python/ch-1.py)
***
```python
def to_base(n, b):
    d = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        *"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        *"abcdefghijklmnopqrstuvwxyz",
        "+",
        "/",
    ]
    return to_base(n // b, b) + d[n % b] if n else ""
```

Thank you `Team PWC`, once again.

`Happy Hacking!!`
***

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `380` &nbsp;&nbsp;|&nbsp;&nbsp; 48 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `381` &nbsp;&nbsp;|&nbsp;&nbsp; 43 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `382` &nbsp;&nbsp;|&nbsp;&nbsp; 35 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `383` &nbsp;&nbsp;|&nbsp;&nbsp; 46 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `384` &nbsp;&nbsp;|&nbsp;&nbsp; 45 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
***

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `380` &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 93 &nbsp;&nbsp;|&nbsp;&nbsp; 29 &nbsp;&nbsp;|
|&nbsp;&nbsp; `381` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 78 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|
|&nbsp;&nbsp; `382` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|
|&nbsp;&nbsp; `383` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 32 &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|
|&nbsp;&nbsp; `384` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 36 &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|
***

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (4538)
     2. Rust       (1203)
     3. C          (1058)
     4. Haskell    (939)
     5. Ruby       (935)
     6. Lua        (919)
     7. C++        (741)
     8. Go         (726)
     9. JavaScript (648)
    10. Java       (532)

### Blogs with Creative Title
***

#### 1. [N Binary](https://raku-musings.com/n-binary.html) by Arne Sommer.
#### 2. [Special Bases](https://github.sommrey.de/the-bears-den/2026/07/31/ch-384.html) by Jorg Sommrey.
#### 3. [A Helpful Module and a Recursive Pattern](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-384/matthias-muth/README.md) by Matthias Muth.
#### 4. [A heaven on earth, they call it Base-N Street](https://packy.dardan.com/b/wJ) by Packy Anderson.
#### 5. [Are Your Substrings Based?](https://blog.firedrake.org/archive/2026/08/The_Weekly_Challenge_384__Are_Your_Substrings_Based_.html) by Roger Bell_West.
#### 6. [Base substrings](https://dev.to/simongreennet/weekly-challenge-base-substrings-44ii) by Simon Green.

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***
#### 1. Commits: 50,764 (`+85`)
#### 2. Pull Requests: 14,492 (`+32`)
#### 3. Contributors: 282
#### 4. Fork: 353
#### 5. Stars: 220

## SPONSOR {#SPONSOR}
***
With start of `Week #355`, we have a new sponsor `Marc Perry` until the end of year `2026`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance. You can find more informations [**here**](/sponsors).

## RECAP {#RECAP}
***
Quick recap of **[The Weekly Challenge - 384](/blog/recap-challenge-384)** by `Mohammad Sajid Anwar`.

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
Please check out the guest contributions for the [**Week #384**](/blog/guest-contribution/#384).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

## Task 1: Uncommon Words {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given two sentences.

Write a script to return list of all uncommon words, order is not important.

#### Example 1

    Input: $sentence1 = "apple banana apple"
           $sentence2 = "banana orange"
    Output: ("orange")

#### Example 2

    Input: $sentence1 = "cat dog"
           $sentence2 = "bird fish"
    Output: ("cat", "dog", "bird", "fish")

#### Example 3

    Input: $sentence1 = "the quick brown fox"
           $sentence2 = "the quick"
    Output: ("brown", "fox")

#### Example 4

    Input: $sentence1 = "hello"
           $sentence2 = "hello"
    Output: ()

#### Example 5

    Input: $sentence1 = "blue blue red"
           $sentence2 = "red green green yellow"
    Output: ("yellow")

## Task 2: Outermost Parentheses {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a valid parentheses string.

Write a script to return the string after removing the outermost parentheses of every primitive string in the primitive decomposition of the given string.

#### Example 1

    Input: $str = "()()()"
    Output: ""

    Primitive Decomposition: "()" + "()" + "()"

#### Example 2

    Input: $str = "(((())))"
    Output: "((()))"

    Primitive Decomposition: "(((())))"

#### Example 3

    Input: $str = "(()())(())"
    Output: "()()()"

    Primitive Decomposition: "(()())" + "(())"

#### Example 4

    Input: $str = "()((()))()"
    Output: "(())"

    Primitive Decomposition: "()" + "((()))" + "()"

#### Example 5

    Input: $str = "(()(()))(()())"
    Output: "()(())()()"

    Primitive Decomposition: "(()(()))" + "(()())"

***
By submitting a response to the challenge you agree that your name or pseudonym, any photograph you supply and any other personal information contained in your submission may be published on this website and the associated mobile app. Last date to submit the solution `23:59 (UK Time) Sunday 9th August 2026`.
