---
title: "The Weekly Challenge - 343"
date: 2025-10-13T00:00:00+00:00
description: "The Weekly Challenge - 343"
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
### &nbsp;&nbsp;9. [TASK #1: Zero Friend](#TASK1)
### 10. [TASK #2: Champion Team](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #343` of `The Weekly Challenge`.

Thank you, `Ryan Thompson`, for back to back contributions.

I have managed to contribute too, this time added `Raku` to the list as well, in addition to `Perl` and `Python`. I had a very busy last week, still found time luckily.

Are you guys taking part in `Hacktoberfest`?

Well, if you are unaware then let me tell you, `The Weekly Challenge`, is participating this year too like last time. So that means, your pull request should technical count towards the minimum pull request submission criteria. There was a time when I used to take part full on, not anymore. I would love to see, how many of `Team PWC` members are actively taking part in `Hacktoberfest`.

Please don't push yourself too hard. Take it easy and enjoy the process.

### Perl

<br>

```perl
#!/usr/bin/env perl

use v5.38;
use Test::More;

my @examples = (
    ["a0b1c2",  "0a1b2c" ],
    ["abc12",   "a1b2c"  ],
    ["0a2b1c3", "0a1b2c3"],
    ["1a23",    ""       ],
    ["ab123",   "1a2b3"  ],
);

for (@examples) {
    is(balance_string($_->[0]), $_->[1]);
}

done_testing;

sub balance_string($s) {
    # Extract all digits and sort them
    my @d = sort grep /\d/, split //, $s;
    # Extract all letters and sort them
    my @l = sort grep /\D/, split //, $s;

    # Return empty string if impossible
    return "" if abs(@d - @l) > 1;

    # If more digits than letters:
    @d > @l ?
        #   Join all elements into a string
        join "",
        #   For each index: digit + letter (or empty if no letter)
        map $d[$_] . ($l[$_] || ""),
        #   Iterate through all digit indices
        0..$#d
    :
    # If more letters than digits:
    @l > @d ?
        #   Join all elements into a string
        join "",
        #   For each index: letter + digit (or empty if no digit)
        map $l[$_] . ($d[$_] || ""),
        #   Iterate through all letter indices
        0..$#l
    # Else (equal counts):
    :
    # If first digit < first letter lexicographically:
    $d[0] lt $l[0] ?
        #   Join all elements into a string
        join "",
        #   For each index: digit + letter
        map $d[$_] . $l[$_],
        #   Iterate through all indices (both arrays same size)
        0..$#d
    :   # Else:
        #   Join all elements into a string
        join "",
        #   For each index: letter + digit
        map $l[$_] . $d[$_],
        #   Iterate through all indices (both arrays same size)
        0..$#d
}
```

<br>

### Raku

<br>

```raku
#!/usr/bin/env raku

my @examples = (
    ["a0b1c2",  "0a1b2c" ],
    ["abc12",   "a1b2c"  ],
    ["0a2b1c3", "0a1b2c3"],
    ["1a23",    ""       ],
    ["ab123",   "1a2b3"  ],
);

for @examples -> @example {
    my ($input, $expected) = @example;
    my $result = balance-string($input);
    say "Pass: {$result eq $expected}";
}

sub balance-string(Str $s) {
    # Extract all digits and sort them
    my @d = $s.comb.grep({ /<digit>/ }).sort;
    # Extract all letters and sort them
    my @l = $s.comb.grep({ /<alpha>/ }).sort;

    # Return empty string if impossible
    return "" if abs(@d.elems - @l.elems) > 1;

    # If more digits than letters:
    if @d.elems > @l.elems {
        # Join all elements into a string
        return join "",
            # For each index: digit + letter (or empty if no letter)
            map { @d[$_] ~ (@l[$_] // "") },
            # Iterate through all digit indices
            0..^@d.elems;
    }
    # Else if more letters than digits:
    elsif @l.elems > @d.elems {
        # Join all elements into a string
        return join "",
            # For each index: letter + digit (or empty if no digit)
            map { @l[$_] ~ (@d[$_] // "") },
            # Iterate through all letter indices
            0..^@l.elems;
    }
    # Else (equal counts):
    else {
        # If first digit < first letter lexicographically:
        if @d[0] lt @l[0] {
            # Join all elements into a string
            return join "",
                # For each index: digit + letter
                map { @d[$_] ~ @l[$_] },
                # Iterate through all indices (both arrays same size)
                0..^@d.elems;
        }
        # Else:
        else {
            # Join all elements into a string
            return join "",
                # For each index: letter + digit
                map { @l[$_] ~ @d[$_] },
                # Iterate through all indices (both arrays same size)
                0..^@d.elems;
        }
    }
}
```

<br>

### Python

<br>

```python
#!/usr/bin/env python3

import re

def balance_string(s):
    # Extract all digits and sort them
    d = sorted([c for c in s if c.isdigit()])
    # Extract all letters and sort them
    l = sorted([c for c in s if c.isalpha()])

    # Return empty string if impossible
    if abs(len(d) - len(l)) > 1:
        return ""

    # If more digits than letters:
    if len(d) > len(l):
        # Join all elements into a string
        result = ""
        # For each index: digit + letter (or empty if no letter)
        for i in range(len(d)):
            result += d[i] + (l[i] if i < len(l) else "")
        return result
    # Else if more letters than digits:
    elif len(l) > len(d):
        # Join all elements into a string
        result = ""
        # For each index: letter + digit (or empty if no digit)
        for i in range(len(l)):
            result += l[i] + (d[i] if i < len(d) else "")
        return result
    # Else (equal counts):
    else:
        # If first digit < first letter lexicographically:
        if d[0] < l[0]:
            # Join all elements into a string
            result = ""
            # For each index: digit + letter
            for i in range(len(d)):
                result += d[i] + l[i]
            return result
        # Else:
        else:
            # Join all elements into a string
            result = ""
            # For each index: letter + digit
            for i in range(len(d)):
                result += l[i] + d[i]
            return result

examples = [
    ["a0b1c2",  "0a1b2c" ],
    ["abc12",   "a1b2c"  ],
    ["0a2b1c3", "0a1b2c3"],
    ["1a23",    ""       ],
    ["ab123",   "1a2b3"  ],
]

for example in examples:
    input_str, expected = example
    result = balance_string(input_str)
    print(f"Pass: {result == expected}")
```

<br>

Thank you `Team PWC`, once again.

`Happy Hacking!!`

***

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `338` &nbsp;&nbsp;|&nbsp;&nbsp; 45 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `339` &nbsp;&nbsp;|&nbsp;&nbsp; 45 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `340` &nbsp;&nbsp;|&nbsp;&nbsp; 49 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|
|&nbsp;&nbsp; `341` &nbsp;&nbsp;|&nbsp;&nbsp; 55 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|
|&nbsp;&nbsp; `342` &nbsp;&nbsp;|&nbsp;&nbsp; 49 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `338` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 58 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `339` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 64 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|
|&nbsp;&nbsp; `340` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 55 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|
|&nbsp;&nbsp; `341` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 67 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `342` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 46 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (3655)
     2. Rust       (1016)
     3. Ruby       (836)
     4. Haskell    (821)
     5. Lua        (775)
     6. C++        (657)
     7. C          (596)
     8. JavaScript (592)
     9. Go         (557)
    10. BQN        (474)

<br>

### Blogs with Creative Title
***

#### 1. [Maximum Balance](https://raku-musings.com/maximum-balance.html) by Arne Sommer.
#### 2. [And a 1, and a 2](https://dev.to/boblied/pwc-342-balance-4eh4) by Bob Lied.
#### 3. [Balanced Adagio for Strings](https://packy.dardan.com/b/cQ) by Packy Anderson.
#### 4. [Fun with characters](http://ccgi.campbellsmiths.force9.co.uk/challenge/342) by Peter Campbell Smith.
#### 5. [Balanced Max Scores the String](https://blog.firedrake.org/archive/2025/10/The_Weekly_Challenge_342__Balanced_Max_Scores_the_String.html) by Roger Bell_West.
#### 6. [Balancing the Score](https://dev.to/simongreennet/weekly-challenge-balancing-the-score-38kd) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 45,698 (`+101`)
#### 2. Pull Requests: 12,792 (`+38`)
#### 3. Contributors: 264
#### 4. Fork: 337
#### 5. Stars: 198 (`+1`)

<br>

## SPONSOR {#SPONSOR}
***

With start of `Week #268`, we have a new sponsor `Lance Wicks` until the end of year `2025`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 342](/blog/recap-challenge-342)** by `Mohammad Sajid Anwar`.

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

Please check out the guest contributions for the [**Week #342**](/blog/guest-contribution/#342).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Zero Friend {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a list of numbers.

Find the number that is closest to zero and return its distance to zero.

<br>

#### Example 1

    Input: @nums = (4, 2, -1, 3, -2)
    Output: 1

    Values closest to 0: -1 and 2 (distance = 1 and 2)

<br>

#### Example 2

    Input: @nums = (-5, 5, -3, 3, -1, 1)
    Output: 1

    Values closest to 0: -1 and 1 (distance = 1)

<br>

#### Example 3

    Input: @ums = (7, -3, 0, 2, -8)
    Output: 0

    Values closest to 0: 0 (distance = 0)
    Exact zero wins regardless of other close values.

<br>

#### Example 4

    Input: @nums = (-2, -5, -1, -8)
    Output: 1

    Values closest to 0: -1 and -2 (distance = 1 and 2)

<br>

#### Example 5

    Input: @nums = (-2, 2, -4, 4, -1, 1)
    Output: 1

    Values closest to 0: -1 and 1 (distance = 1)

<br>

## Task 2: Champion Team {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You have n teams in a tournament. A matrix grid tells you which team is stronger between any two teams:

    If grid[i][j] == 1, then team i is stronger than team j
    If grid[i][j] == 0, then team j is stronger than team i

Find the champion team - the one with most wins, or if there is no single such team, the strongest of the teams with most wins. (You may assume that there is a definite answer.)

<br>

#### Example 1

    Input: @grid = (
                     [0, 1, 1],
                     [0, 0, 1],
                     [0, 0, 0],
                   )
    Output: Team 0

    [0, 1, 1] => Team 0 beats Team 1 and Team 2
    [0, 0, 1] => Team 1 beats Team 2
    [0, 0, 0] => Team 2 loses to all

<br>

#### Example 2

    Input: @grid = (
                     [0, 1, 0, 0],
                     [0, 0, 0, 0],
                     [1, 1, 0, 0],
                     [1, 1, 1, 0],
                   )
    Output: Team 3

    [0, 1, 0, 0] => Team 0 beats only Team 1
    [0, 0, 0, 0] => Team 1 loses to all
    [1, 1, 0, 0] => Team 2 beats Team 0 and Team 1
    [1, 1, 1, 0] => Team 3 beats everyone

<br>

#### Example 3

    Input: @grid = (
                     [0, 1, 0, 1],
                     [0, 0, 1, 1],
                     [1, 0, 0, 0],
                     [0, 0, 1, 0],
                   )
    Output: Team 0

    [0, 1, 0, 1] => Team 0 beats teams 1 and 3
    [0, 0, 1, 1] => Team 1 beats teams 2 and 3
    [1, 0, 0, 0] => Team 2 beats team 0
    [0, 0, 1, 0] => Team 3 beats team 2

    Of the teams with 2 wins, Team 0 beats team 1.

<br>

#### Example 4

    Input: @grid = (
                     [0, 1, 1],
                     [0, 0, 0],
                     [0, 1, 0],
                   )
    Output: Team 0

    [0, 1, 1] => Team 0 beats Team 1 and Team 2
    [0, 0, 0] => Team 1 loses to Team 2
    [0, 1, 0] => Team 2 beats Team 1 but loses to Team 0

<br>

#### Example 5

    Input: @grid = (
                     [0, 0, 0, 0, 0],
                     [1, 0, 0, 0, 0],
                     [1, 1, 0, 1, 1],
                     [1, 1, 0, 0, 0],
                     [1, 1, 0, 1, 0],
                   )
    Output: Team 2

    [0, 0, 0, 0, 0] => Team 0 loses to all
    [1, 0, 0, 0, 0] => Team 1 beats only Team 0
    [1, 1, 0, 1, 1] => Team 2 beats everyone except self
    [1, 1, 0, 0, 0] => Team 3 loses to Team 2
    [1, 1, 0, 1, 0] => Team 4 loses to Team 2

<br>

***

Last date to submit the solution `23:59 (UK Time) Sunday 19th October 2025`.

***
