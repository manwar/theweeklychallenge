---
title: "The Weekly Challenge - 353"
date: 2025-12-22T00:00:00+00:00
description: "The Weekly Challenge - 353"
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
### &nbsp;&nbsp;9. [TASK #1: Max Words](#TASK1)
### 10. [TASK #2: Validate Coupon](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #353` of `The Weekly Challenge`.

Welcome aboard, [**Philip Sharman**](https://github.com/PhilipSharman) and thanks for your contributions for [[**Week #005**]](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-005/philipsharman/perl), [[**Week #346**]](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-346/philipsharman/perl), [[**Week #351**]](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-351/philipsharman/perl) and [[**Week #352**]](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-352/philipsharman/perl) in `Perl`.

Congratulations to all <strong>Raku</strong> contributors, we have now crossed `10K+` contributions. `Perl` is still leading the chart with `18K+` contributions.

Below is my contributions to the `Task #1` of `Week #352`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-352/mohammad-anwar/perl/ch-1.pl)

```perl
sub match_string {
    my @words = @_;
    my %seen;

    return [ grep {
        my $word = $_;
        !$seen{$word}++ && grep {
            $_ ne $word && index($_, $word) >= 0
        } @words
    } @words ];
}
```

<br>

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-352/mohammad-anwar/raku/ch-1.raku)

```raku
sub match-string(*@words) {
    my %seen;

    return @words.grep(-> $word {
        !%seen{$word}++ && @words.first(-> $other {
            $other ne $word && $other.contains($word)
        }).defined
    }).Array;
}
```

<br>

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-352/mohammad-anwar/python/ch-1.py)

```python
def match_string(words):
    seen   = {}
    result = []

    for word in words:
        if word in seen:
            continue
        seen[word] = True

        for other in words:
            if other != word and word in other:
                result.append(word)
                break

    return result
```

<br>

Thank you `Team PWC`, once again.

`Happy Hacking!!`

<br>

### Advent Calendar 2025
***

Contributions to the `Advent Calendar` so far by fellow members.

<br>

#### Day &nbsp;1: [3-digits Even/Delete and Earn](/blog/advent-calendar-2025-12-01) by `Ali Moradi`.
#### Day &nbsp;2: [Not Modified](/blog/advent-calendar-2025-12-02) by `Dave Jacoby`.
#### Day &nbsp;3: [Alien Primes](/blog/advent-calendar-2025-12-03) by `Jorg Sommrey`.
#### Day &nbsp;4: [Odd game](/blog/advent-calendar-2025-12-04) by `Peter Campbell Smith`.
#### Day &nbsp;5: [Don't Get Trapped](/blog/advent-calendar-2025-12-05) by `Matthias Muth`.
#### Day &nbsp;6: [Exclusive or Common](/blog/advent-calendar-2025-12-06) by `Arne Sommer`.
#### Day &nbsp;7: [Perl and Raku mainly](/blog/advent-calendar-2025-12-07) by `Luca Ferrari`.
#### Day &nbsp;8: [Arrays Intersection/Sort Odd Even](/blog/advent-calendar-2025-12-08) by `Jaldhar H. Vyas`.
#### Day &nbsp;9: [Lower the Sum](/blog/advent-calendar-2025-12-09) by `Roger Bell_West`.
#### Day 10: [Minimum Time/Balls and Boxes](/blog/advent-calendar-2025-12-10) by `W. Luis Mochan`.
#### Day 11: [Reverse Broken Keys for Letters](/blog/advent-calendar-2025-12-11) by `Adam Russell`.
#### Day 12: [Equal Strings/Sort Column](/blog/advent-calendar-2025-12-12) by `Robbie Hatley`.
#### Day 13: [Sub circular](/blog/advent-calendar-2025-12-13) by `Simon Green`.
#### Day 14: [Reverse Equals](/blog/advent-calendar-2025-12-14) by `Bob Lied`.
#### Day 15: [Count the Minimum Common Word](/blog/advent-calendar-2025-12-15) by `Packy Anderson`.
#### Day 16: [2D Array/Total XOR](/blog/advent-calendar-2025-12-16) by `Yitzchak Scott-Thoennes`.
#### Day 17: [Day of the Year and Decompressed List](/blog/advent-calendar-2025-12-17) by `Walt Mankowski`.
#### Day 18: [Max Diff/Peak Point](/blog/advent-calendar-2025-12-18) by `Torgny Lyon`.
#### Day 19: [Brken Keybards and Reverse Prefixes](/blog/advent-calendar-2025-12-19) by `Ryan Thompson`.
#### Day 20: [Add to Array Form/Build Target from Source Subarrays](/blog/advent-calendar-2025-12-20) by `Vinod Kumar K`.
#### Day 21: [Format Date](/blog/advent-calendar-2025-12-21) by `Feng Chang`.
#### Day 22: [Lost Connections and Making Changes](/blog/advent-calendar-2025-12-22) by `David Ferrone`.

<br>

***

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `348` &nbsp;&nbsp;|&nbsp;&nbsp; 47 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|
|&nbsp;&nbsp; `349` &nbsp;&nbsp;|&nbsp;&nbsp; 50 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|
|&nbsp;&nbsp; `350` &nbsp;&nbsp;|&nbsp;&nbsp; 48 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|
|&nbsp;&nbsp; `351` &nbsp;&nbsp;|&nbsp;&nbsp; 52 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `352` &nbsp;&nbsp;|&nbsp;&nbsp; 52 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `348` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 70 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `349` &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 83 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|
|&nbsp;&nbsp; `350` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 59 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
|&nbsp;&nbsp; `351` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 67 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `352` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 73 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (3841)
     2. Rust       (1072)
     3. Ruby       (856)
     4. Haskell    (843)
     5. Lua        (812)
     6. C++        (676)
     7. JavaScript (608)
     8. Go         (604)
     9. C          (596)
    10. BQN        (493)

<br>

### Blogs with Creative Title
***

#### 1. [Binary Match](https://raku-musings.com/binary-match.html) by Arne Sommer.
#### 2. [Five is the one-liest number](https://dev.to/boblied/pwc-352-five-is-the-one-liest-number-487e) by Bob Lied.
#### 3. [Triangular Squares](https://github.sommrey.de/the-bears-den/2025/12/19/ch-352.html) by Jorg Sommrey.
#### 4. [and here comes Christmas](https://fluca1978.github.io/2025/12/15/PerlWeeklyChallenge352.html) by Luca Ferrari.
#### 5. [Doodling with matches and prefixes](https://packy.dardan.com/b/fi) by Packy Anderson.
#### 6. [Bits of strings and strings of bits](http://ccgi.campbellsmiths.force9.co.uk/challenge/352) by Peter Campbell Smith.
#### 7. [Prefix the Matches in Strings of Binary](https://blog.firedrake.org/archive/2025/12/The_Weekly_Challenge_352__Prefix_the_Matches_in_Strings_of_Binary.html) by Roger Bell_West.
#### 8. [Strings and Binaries](https://dev.to/simongreennet/weekly-challenge-strings-and-binaries-d7k) by Simon Green.
#### 9. [Not So Loopy Digits](https://blog.ysth.info/not-so-loopy-digits) by Yitzchak Scott-Thoennes.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 46,837 (`+115`)
#### 2. Pull Requests: 13,180 (`+40`)
#### 3. Contributors: 269 (`+1`)
#### 4. Fork: 345 (`+1`)
#### 5. Stars: 205 (`+2`)

<br>

## SPONSOR {#SPONSOR}
***

With start of `Week #268`, we have a new sponsor `Lance Wicks` until the end of year `2025`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 352](/blog/recap-challenge-352)** by `Mohammad Sajid Anwar`.

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

[**Philip Sharman**](https://github.com/PhilipSharman), `Perl` hacker joined `Team PWC`.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}
***

Please check out the guest contributions for the [**Week #352**](/blog/guest-contribution/#352).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Max Words {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given an array of sentences.

Write a script to return the maximum number of words that appear in a single sentence.

#### Example 1

    Input: @sentences = ("Hello world", "This is a test", "Perl is great")
    Output: 4

<br>

#### Example 2

    Input: @sentences = ("Single")
    Output: 1

<br>

#### Example 3

    Input: @sentences = ("Short", "This sentence has seven words in total", "A B C", "Just four words here")
    Output: 7

<br>

#### Example 4

    Input: @sentences = ("One", "Two parts", "Three part phrase", "")
    Output: 3

<br>

#### Example 5

    Input: @sentences = ("The quick brown fox jumps over the lazy dog", "A", "She sells seashells by the seashore", "To be or not to be that is the question")
    Output: 10

<br>

## Task 2: Validate Coupon {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given three arrays, `@codes`, `@names` and `@status`.

Write a script to validate codes in the given array.

    A code is valid when the following conditions are true:
    - codes[i] is non-empty and consists only of alphanumeric characters (a-z, A-Z, 0-9) and underscores (_).
    - names[i] is one of the following four categories: "electronics", "grocery", "pharmacy", "restaurant".
    - status[i] is true.

Return an array of booleans indicating validity: output[i] is true if and only if codes[i], names[i] and status[i] are all valid.

#### Example 1

    Input: @codes  = ("A123", "B_456", "C789", "D@1", "E123")
           @names  = ("electronics", "restaurant", "electronics", "pharmacy", "grocery")
           @status = ("true", "false", "true", "true", "true")
    Output: (true, false, true, false, true)

<br>

#### Example 2

    Input: @codes  = ("Z_9", "AB_12", "G01", "X99", "test")
           @names  = ("pharmacy", "electronics", "grocery", "electronics", "unknown")
           @status = ("true", "true", "false", "true", "true")
    Output: (true, true, false, true, false)

<br>

#### Example 3

    Input: @codes  = ("_123", "123", "", "Coupon_A", "Alpha")
           @names  = ("restaurant", "electronics", "electronics", "pharmacy", "grocery")
           @status = ("true", "true", "false", "true", "true")
    Output: (true, true, false, true, true)

<br>

#### Example 4

    Input: @codes  = ("ITEM_1", "ITEM_2", "ITEM_3", "ITEM_4")
           @names  = ("electronics", "electronics", "grocery", "grocery")
           @status = ("true", "true", "true", "true")
    Output: (true, true, true, true)

<br>

#### Example 5

    Input: @codes  = ("CAFE_X", "ELEC_100", "FOOD_1", "DRUG_A", "ELEC_99")
           @names  = ("restaurant", "electronics", "grocery", "pharmacy", "electronics")
           @status = ("true", "true", "true", "true", "false")
    Output: (true, true, true, true, false)

<br>

***

Last date to submit the solution `23:59 (UK Time) Sunday 28th December 2025`.

***
