---
title: "The Weekly Challenge - 387"
date: 2026-08-17T00:00:00+00:00
description: "The Weekly Challenge - 387"
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
### &nbsp;&nbsp;9. [TASK #1: Rearrange Binary String](#TASK1)
### 10. [TASK #2: Atoms Count](#TASK2)

## HEADLINES {#HEADLINES}
***
Welcome to the `Week #387` of `The Weekly Challenge`.

The week `#386` had the least guest contributions in `2026`. Even the regular contributions was not that high. I am aware some of the regular members have taken a break. I am happy that they took time to inform me about their plan. I wish them a very relax break. Hope to see you soon.

Below is my contributions to the `Task #1` of `Week #386`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-386/mohammad-anwar/perl/ch-1.pl)
***
```perl
sub base_to_int ($num, $base) {
    state $chars = { map {
        substr("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/", $_, 1) => $_
        } 0 .. 63
    };

    my $val = 0;
    $val = $val * $base + $chars->{$_} for split //, $num;
    return $val;
}
```

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-386/mohammad-anwar/raku/ch-1.raku)
***
```raku
sub base-to-int ($num, $base) {
    state $chars = ("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/".comb Z=> 0..63).Hash;

    my $val = 0;
    $val = $val * $base + $chars{$_} for $num.comb;
    return $val;
}
```

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-386/mohammad-anwar/python/ch-1.py)
***
```python
def base_to_int(num: str, base: int) -> int:
    # Mimics Perl's state variable initialization
    if not hasattr(base_to_int, "chars"):
        charset = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/"
        base_to_int.chars = {char: i for i, char in enumerate(charset)}

    val = 0
    for char in num:
        val = val * base + base_to_int.chars[char]
    return val
```

Thank you `Team PWC`, once again.

`Happy Hacking!!`
***

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `382` &nbsp;&nbsp;|&nbsp;&nbsp; 35 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `383` &nbsp;&nbsp;|&nbsp;&nbsp; 46 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `384` &nbsp;&nbsp;|&nbsp;&nbsp; 45 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `385` &nbsp;&nbsp;|&nbsp;&nbsp; 44 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `386` &nbsp;&nbsp;|&nbsp;&nbsp; 40 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
***

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `382` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|
|&nbsp;&nbsp; `383` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 32 &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|
|&nbsp;&nbsp; `384` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 36 &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|
|&nbsp;&nbsp; `385` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 39 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `386` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 30 &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|
***

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (4560)
     2. Rust       (1211)
     3. C          (1060)
     4. Haskell    (945)
     5. Ruby       (935)
     6. Lua        (919)
     7. C++        (745)
     8. Go         (728)
     9. JavaScript (648)
    10. Java       (532)

### Blogs with Creative Title
***

#### 1. [Reverse Lanoitar](https://raku-musings.com/reverse-lanoitar.html) by Arne Sommer.
#### 2. [All Your Base Are Belong to Rational Numbers](https://dev.to/boblied/pwc-386-all-your-base-are-belong-to-rational-numbers-g88) by Bob Lied.
#### 3. [Periodic Bases](https://github.sommrey.de/the-bears-den/2026/08/14/ch-386.html) by Jorg Sommrey.
#### 4. [We’re Talkin’ Algebra](https://packy.dardan.com/b/xF) by Packy Anderson.
#### 5. [Hitting the bases with recurring numbers](http://ccgi.campbellsmiths.force9.co.uk/challenge/386) by Peter Campbell Smith.
#### 6. [A Rational Reverse](https://blog.firedrake.org/archive/2026/08/The_Weekly_Challenge_386__A_Rational_Reverse.html) by Roger Bell_West.
#### 7. [The Rational Base](https://dev.to/simongreennet/weekly-challenge-the-rational-base-9m1) by Simon Green.

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***
#### 1. Commits: 50,971 (`+102`)
#### 2. Pull Requests: 14,568 (`+41`)
#### 3. Contributors: 282
#### 4. Fork: 353
#### 5. Stars: 219

## SPONSOR {#SPONSOR}
***
With start of `Week #355`, we have a new sponsor `Marc Perry` until the end of year `2026`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance. You can find more informations [**here**](/sponsors).

## RECAP {#RECAP}
***
Quick recap of **[The Weekly Challenge - 386](/blog/recap-challenge-386)** by `Mohammad Sajid Anwar`.

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
Please check out the guest contributions for the [**Week #386**](/blog/guest-contribution/#386).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

## Task 1: Rearrange Binary String {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a binary string string.

Write a script to re-arrange the given binary string that all occurrences of "01" are simultaneously replaced with "10" until no occurrences of "01" exist. Finally return the total steps needed.

#### Example 1

    Input: $str = "111000"
    Output: 0

    The string already has all 1s on the left and 0s on the right.
    There are no occurrences of "01", so zero step needed.

#### Example 2

    Input: $str = "00011"
    Output: 4

    Step 1: "00101"
    Step 2: "01010"
    Step 3: "10100"
    Step 4: "11000"

#### Example 3

    Input: $str = "01011"
    Output: 3

    Step 1: "10101"
    Step 2: "11010"
    Step 3: "11100"

#### Example 4

    Input: $str = "010101"
    Output: 3

    Step 1: "101010"
    Step 2: "110100"
    Step 3: "111000"

#### Example 5

    Input: $str = "00001"
    Output: 4

    Step 1: "00010"
    Step 2: "00100"
    Step 3: "01000"
    Step 4: "10000"

## Task 2: Rational Numbers {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a chemical formula with elements, numbers, and parentheses.

Write a script to count the total number of each type of atom by expanding all grouped multipliers. Then, format and return the final inventory as a single string sorted alphabetically by element name, including the total count only if it is greater than 1.

#### Example 1

    Input: $formula = "((N2O)3(H2O)2)2"
    Output: "H8N12O10"

    Step 1: Expand the innermost parentheses
        (N2O)3 => N = 2*3 = 6, O = 1*3 = 3 => N6O3
        (H2O)2 => H = 2*2 = 4, O = 1*2 = 2 => H4O2

    Step 2: Combine inside the outer parentheses
        Formula becomes: (N6O3 H4O2)2
        Sum up identical elements inside: (N6 H4 O5)2

    Step 3: Apply the outer multiplier
        N = 6*2 = 12
        H = 4*2 = 8
        O = 5*2 = 10

    Step 4: Sort alphabetically and format
        Alphabetical order: H, N, O
        Counts: H: 8, N: 12, O: 10

#### Example 2

    Input: $formula = "Mg3(PO4)2"
    Output: "Mg3O8P2"

    Step 1: Parse ungrouped elements
        Mg3 => Mg = 3

    Step 2: Expand parentheses (PO4)2
        P = 1*2 = 2
        O = 4*2 = 8

    Step 3: Total up counts
        Mg = 3
        P  = 2
        O  = 8

    Step 4: Sort alphabetically and format
        Alphabetical order: Mg, O, P
        Counts: Mg: 3, O: 8, P: 2

#### Example 3

    Input: $formula = "(((H)2)3)4"
    Output: "H24"

    Step 1: Expand innermost level (H)2
        H = 1*2 = 2 => formula becomes ((H2)3)4

    Step 2: Expand middle level (H2)3
        H = 2*3 = 6 => formula becomes (H6)4

    Step 3: Expand outer level (H6)4
        H = 6*4 = 24

    Step 4: Sort alphabetically and format
        Single element: H: 24

#### Example 4

    Input: $formula = "NaCl3(O2(S10)2)2Mg"
    Output: "Cl3MgNaO4S40"

    Step 1: Expand innermost parentheses (S10)2
        S = 10*2 = 20 => inner formula becomes => O2S20

    Step 2: Expand outer parentheses (O2S20)2
        O = 2*2  = 4
        S = 20*2 = 40

    Step 3: Combine all parts
        Ungrouped start: Na (Na = 1), Cl3 (Cl = 3)
        Expanded middle: O = 4, S = 40
        Ungrouped end: Mg (Mg = 1)

    Step 4: Sort alphabetically and format
        Alphabetical order: Cl (3), Mg (1), Na (1), O (4), S (40)
        Omit the number 1 for Mg and Na.

#### Example 5

    Input: $formula = "Z2Y3(X2W)2"
    Output: "W2X4Y3Z2"

    Step 1: Parse ungrouped elements
        Z2 => Z = 2
        Y3 => Y = 3

    Step 2: Expand parentheses (X2W)2
        X = 2*2 = 4
        W = 1*2 = 2

    Step 3: Total up counts
        W = 2, X = 4, Y = 3, Z = 2

    Step 4: Sort alphabetically and format
        Alphabetical order: W (2), X (4), Y (3), Z (2)

***
By submitting a response to the challenge you agree that your name or pseudonym, any photograph you supply and any other personal information contained in your submission may be published on this website and the associated mobile app. Last date to submit the solution `23:59 (UK Time) Sunday 23rd August 2026`.
