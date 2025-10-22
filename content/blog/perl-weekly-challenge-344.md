---
title: "The Weekly Challenge - 344"
date: 2025-10-20T00:00:00+00:00
description: "The Weekly Challenge - 344"
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
### &nbsp;&nbsp;9. [TASK #1: Array Form Compute](#TASK1)
### 10. [TASK #2: Array Formation](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #344` of `The Weekly Challenge`.

Thank you, `Conor Hoekstra`, for introducing a new guest language `CUDA`. Please checkout both [**solutions**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-343/conor-hoekstra/cuda).

Thank you, `Ryan Thompson`, for being regular contributors again. Please checkout the [**contributions**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-343/ryan-thompson).

My contributions in `Perl`, `Raku` and `Python` listed below.

### Perl

<br>

```perl
#!/usr/bin/env perl

use strict;
use warnings;
use Test::More;
use List::Util qw/min/;

my @examples = (
    { input => [4, 2, -1, 3, -2],     exp => 1 },
    { input => [-5, 5, -3, 3, -1, 1], exp => 1 },
    { input => [7, -3, 0, 2, -8],     exp => 0 },
    { input => [-2, -5, -1, -8],      exp => 1 },
    { input => [-2, 2, -4, 4, -1, 1], exp => 1 },
);

foreach (@examples) {
    is(zero_friend($_->{input}), $_->{exp});
}

done_testing;

sub zero_friend { my ($nums) = @_; return min map abs, @$nums }
```

<br>

### Raku

<br>

```raku
#!/usr/bin/env raku

use Test;

my @examples = (
    { input => [4, 2, -1, 3, -2],     exp => 1 },
    { input => [-5, 5, -3, 3, -1, 1], exp => 1 },
    { input => [7, -3, 0, 2, -8],     exp => 0 },
    { input => [-2, -5, -1, -8],      exp => 1 },
    { input => [-2, 2, -4, 4, -1, 1], exp => 1 },
);

for @examples -> %example {
    is(zero_friend(%example<input>), %example<exp>);
}

done-testing;

sub zero_friend($nums) { return min $nums.map(&abs); }
```

<br>

### Python

<br>

```python
#!/usr/bin/env python3

import unittest

def zero_friend(nums):
    return min(map(abs, nums))

class TestZeroFriend(unittest.TestCase):
    def test_examples(self):
        examples = [
            {'input': [4, 2, -1, 3, -2],     'exp': 1},
            {'input': [-5, 5, -3, 3, -1, 1], 'exp': 1},
            {'input': [7, -3, 0, 2, -8],     'exp': 0},
            {'input': [-2, -5, -1, -8],      'exp': 1},
            {'input': [-2, 2, -4, 4, -1, 1], 'exp': 1},
        ]

        for example in examples:
            with self.subTest(input=example['input']):
                self.assertEqual(zero_friend(example['input']), example['exp'])

if __name__ == '__main__':
    unittest.main()
```

<br>

Thank you `Team PWC`, once again.

`Happy Hacking!!`

***

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `339` &nbsp;&nbsp;|&nbsp;&nbsp; 47 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `340` &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `341` &nbsp;&nbsp;|&nbsp;&nbsp; 57 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|
|&nbsp;&nbsp; `342` &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `343` &nbsp;&nbsp;|&nbsp;&nbsp; 44 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `339` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 64 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|
|&nbsp;&nbsp; `340` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 55 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|
|&nbsp;&nbsp; `341` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 67 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `342` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 46 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `343` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 61 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (3673)
     2. Rust       (1020)
     3. Ruby       (838)
     4. Haskell    (823)
     5. Lua        (779)
     6. C++        (659)
     7. C          (596)
     8. JavaScript (594)
     9. Go         (561)
    10. BQN        (476)

<br>

### Blogs with Creative Title
***

#### 1. [Team Zero](https://raku-musings.com/team-zero.html) by Arne Sommer.
#### 2. [Friendly Champions](https://github.sommrey.de/the-bears-den/2025/10/17/ch-343.html) by Jorg Sommrey.
#### 3. [The Zero Champion](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-343/challenge-343/matthias-muth#readme) by Matthias Muth.
#### 4. [Ze-ro the CHAMPIONS!](https://packy.dardan.com/b/cg) by Packy Anderson.
#### 5. [No friends among the champions](http://ccgi.campbellsmiths.force9.co.uk/challenge/343) by Peter Campbell Smith.
#### 6. [Zero to Champion](https://blog.firedrake.org/archive/2025/10/The_Weekly_Challenge_343__Zero_to_Champion.html) by Roger Bell_West.
#### 7. [It’s hard to make friends when you’re a zero](https://ry.ca/2025/10/pwc-343-its-hard-to-make-friends) by Ryan Thompson.
#### 8. [Absolute Champion](https://dev.to/simongreennet/weekly-challenge-absolute-champion-57cf) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 45,826 (`+128`)
#### 2. Pull Requests: 12,833 (`+41`)
#### 3. Contributors: 264
#### 4. Fork: 337
#### 5. Stars: 198

<br>

## SPONSOR {#SPONSOR}
***

With start of `Week #268`, we have a new sponsor `Lance Wicks` until the end of year `2025`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 343](/blog/recap-challenge-343)** by `Mohammad Sajid Anwar`.

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

Please check out the guest contributions for the [**Week #343**](/blog/guest-contribution/#343).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Array Form Compute {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given an array of integers, `@ints` and an integer, `$x`.

Write a script to add `$x` to the integer in the `array-form`.

> The array form of an integer is a digit-by-digit representation stored as an array, where the most significant digit is at the 0th index.

<br>

#### Example 1

    Input: @ints = (1, 2, 3, 4), $x = 12
    Output: (1, 2, 4, 6)

<br>

#### Example 2

    Input: @ints = (2, 7, 4), $x = 181
    Output: (4, 5, 5)

<br>

#### Example 3

    Input: @ints = (9, 9, 9), $x = 1
    Output: (1, 0, 0, 0)

<br>

#### Example 4

    Input: @ints = (1, 0, 0, 0, 0), $x = 9999
    Output: (1, 9, 9, 9, 9)

<br>

#### Example 5

    Input: @ints = (0), $x = 1000
    Output: (1, 0, 0, 0)

<br>

## Task 2: Array Formation {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given two list: `@source` and `@target`.

Write a script to see if you can build the exact `@target` by putting these smaller lists from `@source` together in some order. You cannot break apart or change the order inside any of the smaller lists in `@source`.

<br>

#### Example 1

    Input: @source = ([2,3], [1], [4])
           @target = (1, 2, 3, 4)
    Output: true

    Use in the order: [1], [2,3], [4]

<br>

#### Example 2

    Input: @source = ([1,3], [2,4])
           @target = (1, 2, 3, 4)
    Output: false

<br>

#### Example 3

    Input: @source = ([9,1], [5,8], [2])
           @target = (5, 8, 2, 9, 1)
    Output: true

    Use in the order: [5,8], [2], [9,1]

<br>

#### Example 4

    Input: @source = ([1], [3])
           @target = (1, 2, 3)
    Output: false

    Missing number: 2

<br>

#### Example 5

    Input: @source = ([7,4,6])
           @target = (7, 4, 6)
    Output: true

    Use in the order: [7, 4, 6]

<br>

***

Last date to submit the solution `23:59 (UK Time) Sunday 26th October 2025`.

***
