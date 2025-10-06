---
title: "The Weekly Challenge - 342"
date: 2025-10-06T00:00:00+00:00
description: "The Weekly Challenge - 342"
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
### &nbsp;&nbsp;9. [TASK #1: Balance String](#TASK1)
### 10. [TASK #2: Max Score](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #342` of `The Weekly Challenge`.

Today is the first `Monday` of the month and it's time to declare the next `Champion of The Weekly Challenge`. It's with high regard and respect, I announce `David Ferrone` as the new champion. Congratulations, `David`.

For those new to the team, `David` was last declared champion in `March 2023`. He is currently ranked `#35` with a total score of `684`. As of today, he has contributed `320 Perl` solutions, `13 Raku` solutions and `9 blog posts`.

`Week #341` became very special for several reasons. First, it was the best week of `2025` for guest contributions. We also nearly beat the best week of the year for regular contributions, missing the record by a very small margin. The record is held `Week #333` with `106` contributions; in `Week #341`, we received `104`. With some late contributions, `Week #341` might still take the top spot. Nevertheless, I am very happy with all the support and encouragement.

Another reason `Week #341` was special is the return of `Ryan Thompson` after a long break with contributions in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-341/ryan-thompson/perl) and a bonus creative and entertaining [**blog post**](https://ry.ca/2025/10/brken-keybards-reverse-prefixes).

Speaking of comebacks, we also welcomed back `Luca Ferrari` after a short back. Apparently he has been enjoying a vacation in `Japan`. I hope he had great time. He has returned with his powerful contributions across [**multiple streams**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-341/luca-ferrari).

One more welcome is in order for `Vinod Kumar K`, who is back with contributions in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-341/vinod-k/perl) and [**Python**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-341/vinod-k/python).

On a different note, I must point out that the `Broken Keyboard` task from `Week #341` is a repeat. It was originally used in [**Week #275**](https://theweeklychallenge.org/blog/perl-weekly-challenge-275). I take full responsibility for this. I should have been more carefull. Unfortunately, this is not the first time, it has happened. It was reported by `Packy Anderson` but by then it was too late to change it.

Finally, it's time to share my own contributions in `Perl` and `Python`. For now, I'm sticking to just one task so I can maintain my momentum.

### Perl

<br>

```perl
#!/usr/bin/env perl

use v5.38;
use Test::More;

sub typable_word_count($str, $keys) {
    my @words = split /\s+/, $str;
    return scalar @words unless @$keys;

    my $broken_chars = quotemeta(join '', @$keys);
    return scalar grep { !/[$broken_chars]/i } @words;
}

my $examples = [
    { str => 'Hello World',          keys => ['d'],      exp => 1 },
    { str => 'apple banana cherry',  keys => ['a', 'e'], exp => 0 },
    { str => 'Coding is fun',        keys => [],         exp => 3 },
    { str => 'The Weekly Challenge', keys => ['a','b'],  exp => 2 },
    { str => 'Perl and Python',      keys => ['p'],      exp => 1 },
];

is(typable_word_count($_->{str}, $_->{keys}), $_->{exp}) for @$examples;

done_testing;
```

<br>

### Python

<br>

```python
#!/usr/bin/env python3

def typable_word_count(text: str, broken_keys: list[str]) -> int:
    words = text.split()
    if not broken_keys:
        return len(words)

    broken_chars  = set(key.lower() for key in broken_keys)
    typable_count = sum(
        1 for word in words
        if all(char.lower() not in broken_chars for char in word)
    )

    return typable_count

examples = [
    ('Hello World',          ['d'],      1),
    ('apple banana cherry',  ['a', 'e'], 0),
    ('Coding is fun',        [],         3),
    ('The Weekly Challenge', ['a', 'b'], 2),
    ('Perl and Python',      ['p'],      1),
]

for text, keys, expected in examples:
    result = typable_word_count(text, keys)
    assert result == expected, (
        f"Assertion Failed: Input: '{text}', Keys: {keys} | "
        f"Expected: {expected}, Got: {result}"
    )

print("\nAll tests passed successfully.")
```

<br>

Thank you `Team PWC`, once again.

`Happy Hacking!!`

***

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `337` &nbsp;&nbsp;|&nbsp;&nbsp; 48 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `338` &nbsp;&nbsp;|&nbsp;&nbsp; 45 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `339` &nbsp;&nbsp;|&nbsp;&nbsp; 45 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `340` &nbsp;&nbsp;|&nbsp;&nbsp; 49 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|
|&nbsp;&nbsp; `341` &nbsp;&nbsp;|&nbsp;&nbsp; 55 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `337` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 54 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `338` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 58 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `339` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 64 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|
|&nbsp;&nbsp; `340` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 55 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|
|&nbsp;&nbsp; `341` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 67 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (3639)
     2. Rust       (1012)
     3. Ruby       (834)
     4. Haskell    (819)
     5. Lua        (773)
     6. C++        (655)
     7. C          (596)
     8. JavaScript (592)
     9. Go         (553)
    10. BQN        (472)

<br>

### Blogs with Creative Title
***

#### 1. [Reverse Broken Again](https://raku-musings.com/reverse-broken-again.html) by Arne Sommer.
#### 2. [back from Japan](https://fluca1978.github.io/2025/10/02/PerlWeeklyChallenge341.html) by Luca Ferrari.
#### 3. [(Pre-)Fix what is Broken](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-341/challenge-341/matthias-muth#readme) by Matthias Muth.
#### 4. [Something just BROKE…](https://packy.dardan.com/b/bw) by Packy Anderson.
#### 5. [Broken keys and mixed up words](http://ccgi.campbellsmiths.force9.co.uk/challenge/341) by Peter Campbell Smith.
#### 6. [Broken Prefix](https://blog.firedrake.org/archive/2025/10/The_Weekly_Challenge_341__Broken_Prefix.html) by Roger Bell_West.
#### 7. [Reversing my broken keys](https://dev.to/simongreennet/weekly-challenge-reversing-my-broken-keys-313l) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 45,597 (`+133`)
#### 2. Pull Requests: 12,754 (`+49`)
#### 3. Contributors: 264
#### 4. Fork: 337 (`+1`)
#### 5. Stars: 197 (`+1`)

<br>

## SPONSOR {#SPONSOR}
***

With start of `Week #268`, we have a new sponsor `Lance Wicks` until the end of year `2025`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 341](/blog/recap-challenge-341)** by `Mohammad Sajid Anwar`.

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

Please check out the guest contributions for the [**Week #341**](/blog/guest-contribution/#341).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Balance String {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a string made up of lowercase English letters and digits only.

Write a script to format the give string where no letter is followed by another letter and no digit is followed by another digit. If there are multiple valid rearrangements, always return the lexicographically smallest one. Return empty string if it is impossible to format the string.

<br>

#### Example 1

    Input: $str = "a0b1c2"
    Output: "0a1b2c"

<br>

#### Example 2

    Input: $str = "abc12"
    Output: "a1b2c"

<br>

#### Example 3

    Input: $str = "0a2b1c3"
    Output: "0a1b2c3"

<br>

#### Example 4

    Input: $str = "1a23"
    Output: ""

<br>

#### Example 5

    Input: $str = "ab123"
    Output: "1a2b3"

<br>

## Task 2: Max Score {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a string, `$str`, containing `0` and `1` only.

Write a script to return the max score after splitting the string into two non-empty substrings. The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring.

<br>

#### Example 1

    Input: $str = "0011"
    Output: 4

    1: left = "0", right = "011" => 1 + 2 => 3
    2: left = "00", right = "11" => 2 + 2 => 4
    3: left = "001", right = "1" => 2 + 1 => 3

<br>

#### Example 2

    Input: $str = "0000"
    Output: 3

    1: left = "0", right = "000" => 1 + 0 => 1
    2: left = "00", right = "00" => 2 + 0 => 2
    3: left = "000", right = "0" => 3 + 0 => 3

<br>

#### Example 3

    Input: $str = "1111"
    Output: 3

    1: left = "1", right = "111" => 0 + 3 => 3
    2: left = "11", right = "11" => 0 + 2 => 2
    3: left = "111", right = "1" => 0 + 1 => 1

<br>

#### Example 4

    Input: $str = "0101"
    Output: 3

    1: left = "0", right = "101" => 1 + 2 => 3
    2: left = "01", right = "01" => 1 + 1 => 2
    3: left = "010", right = "1" => 2 + 1 => 3

<br>

#### Example 5

    Input: $str = "011101"
    Output: 5

    1: left = "0", right = "11101" => 1 + 4 => 5
    2: left = "01", right = "1101" => 1 + 3 => 4
    3: left = "011", right = "101" => 1 + 2 => 3
    4: left = "0111", right = "01" => 1 + 1 => 2
    5: left = "01110", right = "1" => 2 + 1 => 3

<br>

***

Last date to submit the solution `23:59 (UK Time) Sunday 12th October 2025`.

***
