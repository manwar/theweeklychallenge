---
title: "The Weekly Challenge - 341"
date: 2025-09-29T00:00:00+00:00
description: "The Weekly Challenge - 341"
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
### &nbsp;&nbsp;9. [TASK #1: Broken Keyboard](#TASK1)
### 10. [TASK #2: Reverse Prefix](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #341` of `The Weekly Challenge`.

I noticed `Packy Anderson` and `Ali Moradi` forgot to submit the contributions. I manually pulled it somehow and merged it. I hope, this is acceptable.

Second week in a row, I found time to contribute. However this time, I even shared solution in `Python` too as well as `Perl`.

### Perl

<br>

```perl
#!/usr/bin/env perl

use v5.38;
use Test::More;

my $examples = {
    1 => { str => 'abbaca',   exp => 'ca' },
    2 => { str => 'azxxzy',   exp => 'ay' },
    3 => { str => 'aaaaaaaa', exp => ''   },
    4 => { str => 'aabccba',  exp => 'a'  },
    5 => { str => 'abcddcba', exp => ''   },
};

foreach my $id (keys %$examples) {
    is(remove_duplicates($examples->{$id}->{str}), $examples->{$id}->{exp})
}

done_testing;

sub remove_duplicates($str) {
    return $str if length($str) < 2;

    for (my $i = 0; $i < length($str) - 1; $i++) {
        if (substr($str, $i, 1) eq substr($str, $i + 1, 1)) {
            my $new_str = substr($str, 0, $i) . substr($str, $i + 2);
            return remove_duplicates($new_str);
        }
    }

    return $str;
}
```

<br>

### Python

<br>

```python
#!/usr/bin/env python3

import unittest

def remove_duplicates(s: str) -> str:
    if len(s) < 2:
        return s

    for i in range(len(s) - 1):
        if s[i] == s[i + 1]:
            new_str = s[:i] + s[i + 2:]
            return remove_duplicates(new_str)

    return s

class TestRemoveDuplicates(unittest.TestCase):
    def test_examples(self):
        examples = {
            1: {'str': 'abbaca',   'exp': 'ca'},
            2: {'str': 'azxxzy',   'exp': 'ay'},
            3: {'str': 'aaaaaaaa', 'exp': ''},
            4: {'str': 'aabccba',  'exp': 'a'},
            5: {'str': 'abcddcba', 'exp': ''},
        }

        for example_id, example_data in examples.items():
            with self.subTest(example_id=example_id, example_str=example_data['str']):
                result = remove_duplicates(example_data['str'])
                self.assertEqual(result, example_data['exp'])

if __name__ == '__main__':
    unittest.main()
```

<br>

`Happy Hacking!!`

***

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `336` &nbsp;&nbsp;|&nbsp;&nbsp; 46 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `337` &nbsp;&nbsp;|&nbsp;&nbsp; 48 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `338` &nbsp;&nbsp;|&nbsp;&nbsp; 45 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `339` &nbsp;&nbsp;|&nbsp;&nbsp; 43 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `340` &nbsp;&nbsp;|&nbsp;&nbsp; 47 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `336` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 54 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
|&nbsp;&nbsp; `337` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 54 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `338` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 58 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `339` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 64 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|
|&nbsp;&nbsp; `340` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 55 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (3620)
     2. Rust       (1008)
     3. Ruby       (830)
     4. Haskell    (817)
     5. Lua        (771)
     6. C++        (653)
     7. C          (596)
     8. JavaScript (590)
     9. Go         (547)
    10. BQN        (470)

<br>

### Blogs with Creative Title
***

#### 1. [Ascending Duplicates](https://raku-musings.com/ascending-duplicates.html) by Arne Sommer.
#### 2. [Two Times Two Lines](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-340/challenge-340/matthias-muth#readme) by Matthias Muth.
#### 3. [Rising in Num](https://packy.dardan.com/2025/09/23/perl-weekly-challenge-rising-in-num/) by Packy Anderson.
#### 4. [Deduplicate and going up](http://ccgi.campbellsmiths.force9.co.uk/challenge/340) by Peter Campbell Smith.
#### 5. [Ascending Duplicates](https://blog.firedrake.org/archive/2025/09/The_Weekly_Challenge_340__Ascending_Duplicates.html) by Roger Bell_West.
#### 6. [Ascending Regex to remove the Duplicates](https://dev.to/simongreennet/weekly-challenge-ascending-regex-to-remove-the-duplicates-2bd) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 45,464 (`+98`)
#### 2. Pull Requests: 12,705 (`+37`)
#### 3. Contributors: 264
#### 4. Fork: 336
#### 5. Stars: 196

<br>

## SPONSOR {#SPONSOR}
***

With start of `Week #268`, we have a new sponsor `Lance Wicks` until the end of year `2025`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 340](/blog/recap-challenge-340)** by `Mohammad Sajid Anwar`.

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

Please check out the guest contributions for the [**Week #340**](/blog/guest-contribution/#340).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Broken Keyboard {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a string containing English letters only and also you are given broken keys.

Write a script to return the total words in the given sentence can be typed completely.

<br>

#### Example 1

    Input: $str = 'Hello World', @keys = ('d')
    Output: 1

    With broken key 'd', we can only type the word 'Hello'.

<br>

#### Example 2

    Input: $str = 'apple banana cherry', @keys = ('a', 'e')
    Output: 0

<br>

#### Example 3

    Input: $str = 'Coding is fun', @keys = ()
    Output: 3

    No keys broken.

<br>

#### Example 4

    Input: $str = 'The Weekly Challenge', @keys = ('a','b')
    Output: 3

<br>

#### Example 5

    Input: $str = 'Perl and Python', @keys = ('p')
    Output: 1

<br>

## Task 2: Reverse Prefix {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a string, `$str` and a character in the given string, `$char`.

Write a script to reverse the prefix upto the first occurrence of the given $char in the given string $str and return the new string.

<br>

#### Example 1

    Input: $str = "programming", $char = "g"
    Output: "gorpmming"

    Reverse of prefix "prog" is "gorp".

<br>

#### Example 2

    Input: $str = "hello", $char = "h"
    Output: "hello"

<br>

#### Example 3

    Input: $str = "abcdefghij", $char = "h"
    Output: "hgfedcbaj"

<br>

#### Example 4

    Input: $str = "reverse", $char = "s"
    Output: "srevere"

<br>

#### Example 5

    Input: $str = "perl", $char = "r"
    Output: "repl"

<br>

***

Last date to submit the solution `23:59 (UK Time) Sunday 5th October 2025`.

***
