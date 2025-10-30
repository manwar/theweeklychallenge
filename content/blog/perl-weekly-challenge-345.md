---
title: "The Weekly Challenge - 345"
date: 2025-10-27T00:00:00+00:00
description: "The Weekly Challenge - 345"
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
### &nbsp;&nbsp;9. [TASK #1: Peak Positions](#TASK1)
### 10. [TASK #2: Last Visitor](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #345` of `The Weekly Challenge`.

I just noticed, we now have guest contributions in `117` different programming languages and `Python` being the `#1` in the list.

Also the `Centurion Club` is growing very fast, as of today, we have `86` members in the club.

Another week another contributions from my side. It feels nice to be able to take part in the weekly challenge. The motivation comes from the active team members, specially the ones active on `Facebook`.

First time weekly challenge blogger, `Vinod Kumar K`, shared his first [**blog post**](https://dev.to/vinodk89/perl-weekly-challenge-344-1god). Congratulation and thank you.



### Perl

<br>

```perl
#!/usr/bin/env perl

use Test::More;
use Test::Deep;

my @examples = (
    { input => { arr => [1, 2, 3, 4],    x => 12   }, exp => [1, 2, 4, 6]    },
    { input => { arr => [2, 7, 4],       x => 181  }, exp => [4, 5, 5]       },
    { input => { arr => [9, 9, 9],       x => 1    }, exp => [1, 0, 0, 0]    },
    { input => { arr => [1, 0, 0, 0, 0], x => 9999 }, exp => [1, 9, 9, 9, 9] },
    { input => { arr => [0],             x => 1000 }, exp => [1, 0, 0, 0]    },
);

foreach my $example (@examples) {
    is_deeply([add_to_array_form($example->{input}{arr}, $example->{input}{x})],
              $example->{exp});
}

done_testing;

sub add_to_array_form { map $_+0, split //, join('', @{$_[0]}) + $_[1] }
```

<br>

### Raku

<br>

```raku
#!/usr/bin/env raku

use Test;

my @examples = (
    { input => { arr => [1, 2, 3, 4],    x => 12   }, exp => [1, 2, 4, 6]    },
    { input => { arr => [2, 7, 4],       x => 181  }, exp => [4, 5, 5]       },
    { input => { arr => [9, 9, 9],       x => 1    }, exp => [1, 0, 0, 0]    },
    { input => { arr => [1, 0, 0, 0, 0], x => 9999 }, exp => [1, 9, 9, 9, 9] },
    { input => { arr => [0],             x => 1000 }, exp => [1, 0, 0, 0]    },
);

for @examples -> $example {
    is-deeply([add-to-array-form($example<input><arr>, $example<input><x>)],
              $example<exp>);
}

done-testing;

sub add-to-array-form($arr, $x) { ($arr.join('') + $x).comb».Int }
```

<br>

### Python

<br>

```python
#!/usr/bin/env python3

def add_to_array_form(arr, x):
    return [int(d) for d in str(int(''.join(map(str, arr))) + x)]

if __name__ == "__main__":
    examples = [
        {"input": {"arr": [1, 2, 3, 4],    "x": 12},   "exp": [1, 2, 4, 6]},
        {"input": {"arr": [2, 7, 4],       "x": 181},  "exp": [4, 5, 5]},
        {"input": {"arr": [9, 9, 9],       "x": 1},    "exp": [1, 0, 0, 0]},
        {"input": {"arr": [1, 0, 0, 0, 0], "x": 9999}, "exp": [1, 9, 9, 9, 9]},
        {"input": {"arr": [0],             "x": 1000}, "exp": [1, 0, 0, 0]},
    ]

    for example in examples:
        result = add_to_array_form(example["input"]["arr"], example["input"]["x"])
        assert result == example["exp"], f"Expected {example['exp']}, got {result}"

    print("All tests passed!")
```

<br>

Thank you `Team PWC`, once again.

`Happy Hacking!!`

***

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `340` &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `341` &nbsp;&nbsp;|&nbsp;&nbsp; 57 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|
|&nbsp;&nbsp; `342` &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `343` &nbsp;&nbsp;|&nbsp;&nbsp; 44 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `344` &nbsp;&nbsp;|&nbsp;&nbsp; 47 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `340` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 55 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|
|&nbsp;&nbsp; `341` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 67 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `342` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 46 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `343` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 61 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|
|&nbsp;&nbsp; `344` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 60 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (3690)
     2. Rust       (1026)
     3. Ruby       (840)
     4. Haskell    (825)
     5. Lua        (783)
     6. C++        (661)
     7. C          (596)
     8. JavaScript (594)
     9. Go         (565)
    10. BQN        (478)

<br>

### Blogs with Creative Title
***

#### 1. [Form Formation](https://raku-musings.com/form-formation.html) by Arne Sommer.
#### 2. [Pick Up the Pieces](https://dev.to/boblied/pwc-344-task-2-pick-up-the-pieces-3391) by Bob Lied.
#### 3. [Turning Arrays Into Arrays](https://github.sommrey.de/the-bears-den/2025/10/23/ch-344.html) by Jorg Sommrey.
#### 4. [Lazyness and too much tasks!](https://fluca1978.github.io/2025/10/20/PerlWeeklyChallenge344.html) by Luca Ferrari.
#### 5. [Take it to the Limits](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-344/challenge-344/matthias-muth#readme) by Matthias Muth.
#### 6. [A-ray Sunshine!](https://packy.dardan.com/b/ct) by Packy Anderson.
#### 7. [Hip, hip, array!](http://ccgi.campbellsmiths.force9.co.uk/challenge/344) by Peter Campbell Smith.
#### 8. [All is Array Formation](https://blog.firedrake.org/archive/2025/10/The_Weekly_Challenge_344__All_is_Array_Formation.html) by Roger Bell_West.
#### 9. [The one about arrays](https://dev.to/simongreennet/weekly-challenge-the-one-about-arrays-1h8k) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 45,959 (`+133`)
#### 2. Pull Requests: 12,883 (`+50`)
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

Quick recap of **[The Weekly Challenge - 344](/blog/recap-challenge-344)** by `Mohammad Sajid Anwar`.

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

Please check out the guest contributions for the [**Week #344**](/blog/guest-contribution/#344).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Peak Positions {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given an array of integers, `@ints`.

Find all the peaks in the array, a peak is an element that is strictly greater than its left and right neighbours. Return the indices of all such peak positions.

<br>

#### Example 1

    Input: @ints = (1, 3, 2)
    Output: (1)

<br>

#### Example 2

    Input: @ints = (2, 4, 6, 5, 3)
    Output: (2)

<br>

#### Example 3

    Input: @ints = (1, 2, 3, 2, 4, 1)
    Output: (2, 4)

<br>

#### Example 4

    Input: @ints = (5, 3, 1)
    Output: (0)

<br>

#### Example 5

    Input: @ints = (1, 5, 1, 5, 1, 5, 1)
    Output: (1, 3, 5)

<br>

## Task 2: Last Visitor {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given an integer array `@ints` where each element is either a positive integer or `-1`.

We process the array from `left` to `right` while maintaining two lists:

    @seen: stores previously seen positive integers (newest at the front)
    @ans: stores the answers for each -1

Rules:

    If $ints[i] is a positive number -> insert it at the front of @seen
    If $ints[i] is -1:

Let $x be how many -1s in a row we've seen before this one.

If $x < len(@seen) -> append seen[x] to @ans

Else -> append -1 to @ans

At the end, return @ans.

<br>

#### Example 1

    Input: @ints = (5, -1, -1)
    Output: (5, -1)

    @seen = (5)
    First  -1: @ans = (5)
    Second -1: @ans = (5, -1)

<br>

#### Example 2

    Input: @ints = (3, 7, -1, -1, -1)
    Output: (7, 3, -1)

    @seen = (3, 7)
    First  -1: @ans = (7)
    Second -1: @ans = (7, 3)
    Third  -1: @ans = (7, 3, -1)

<br>

#### Example 3

    Input: @ints = (2, -1, 4, -1, -1)
    Output: (2, 4, 2)

<br>

#### Example 4

    Input: @ints = (10, 20, -1, 30, -1, -1)
    Output: (20, 30, 20)

<br>

#### Example 5

    Input: @ints = (-1, -1, 5, -1)
    Output: (-1, -1, 5)

<br>

***

Last date to submit the solution `23:59 (UK Time) Sunday 2nd November 2025`.

***
