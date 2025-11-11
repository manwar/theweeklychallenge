---
title: "The Weekly Challenge - 347"
date: 2025-11-10T00:00:00+00:00
description: "The Weekly Challenge - 347"
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
### &nbsp;&nbsp;9. [TASK #1: Format Date](#TASK1)
### 10. [TASK #2: Format Phone Number](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #347` of `The Weekly Challenge`.

In `Week #346`, we had new guest contributor `lexi` and this week we have one more guest contributor [**beespider**](https://github.com/masikoijo). To my surprise, both of them are `Uiua` hackers. Thank you, `beespider`, for your first contributions in [**Uiua**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-346/beespider/uiua).

Welcome back, `Luca Ferrari` and thanks for your contributions.

There is another surprise element for you all. `Yitzchak Scott-Thoennes` uploaded a new distribution [**Run::WeeklyChallenge**](https://metacpan.org/dist/Run-WeeklyChallenge). Please do give it a try and share your experience.

Looking at the `TOP 10 Guest Languages`, apparently `C` and `JavaScript` are tied with total contributions count `596`. May be, next week, we would see some changes in the ranking.

Below is my contributions to the `Task #1` of `Week #346`.

<br>

### Perl

<br>

```perl
#!/usr/bin/env perl

use strict;
use warnings;
use Test::More;

my @examples = (
    { str => '(()())',        exp => 6 },
    { str => ')()())',        exp => 4 },
    { str => '((()))()(((()', exp => 8 },
    { str => '))))((()(',     exp => 2 },
    { str => '()(()',         exp => 2 },
);

foreach (@examples) {
    is(valid_longest_parenthesis($_->{str}), $_->{exp});
}

done_testing;

sub valid_longest_parenthesis {
    my $s       = shift;
    my @stack   = (-1);
    my $max_len = 0;

    for my $i (0 .. length($s) - 1) {
        if (substr($s, $i, 1) eq "(") {
            push @stack, $i;
        } else {
            pop @stack;
            if (@stack) {
                $max_len = $max_len > ($i - $stack[-1])
                          ? $max_len
                          : ($i - $stack[-1]);
            } else {
                push @stack, $i;  # New starting point
            }
        }
    }

    return $max_len;
}
```

<br>

### Raku

<br>

```raku
#!/usr/bin/env raku

use Test;

my @examples = (
    { str => '(()())',        exp => 6 },
    { str => ')()())',        exp => 4 },
    { str => '((()))()(((()', exp => 8 },
    { str => '))))((()(',     exp => 2 },
    { str => '()(()',         exp => 2 },
);

for @examples -> %example {
    is(valid-longest-parenthesis(%example<str>), %example<exp>);
}

done-testing;

sub valid-longest-parenthesis(Str $s) {
    my @stack   = (-1);
    my $max-len = 0;

    for 0 .. $s.chars - 1 -> $i {
        if $s.substr($i, 1) eq "(" {
            @stack.push($i);
        } else {
            @stack.pop();
            if @stack.elems > 0 {
                $max-len = $max-len > ($i - @stack[*-1])
                           ?? $max-len
                           !! ($i - @stack[*-1]);
            } else {
                @stack.push($i);  # New starting point
            }
        }
    }

    return $max-len;
}
```

<br>

### Python

<br>

```python
#!/usr/bin/env python3

def valid_longest_parenthesis(s):
    stack = [-1]
    max_len = 0

    for i in range(len(s)):
        if s[i] == "(":
            stack.append(i)
        else:
            stack.pop()
            if stack:
                max_len = max(max_len, i - stack[-1])
            else:
                stack.append(i)  # New starting point

    return max_len

def test_examples():
    examples = [
        {"str": "(()())",        "exp": 6},
        {"str": ")()())",        "exp": 4},
        {"str": "((()))()(((()", "exp": 8},
        {"str": "))))((()(",     "exp": 2},
        {"str": "()(()",         "exp": 2},
    ]

    for example in examples:
        result = valid_longest_parenthesis(example["str"])
        expected = example["exp"]
        assert result == expected, f"Failed for '{example['str']}': expected {expected}, got {result}"
        print(f"'{example['str']}' -> {result}")

if __name__ == "__main__":
    test_examples()
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
|&nbsp;&nbsp; `342` &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `343` &nbsp;&nbsp;|&nbsp;&nbsp; 44 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `344` &nbsp;&nbsp;|&nbsp;&nbsp; 47 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|
|&nbsp;&nbsp; `345` &nbsp;&nbsp;|&nbsp;&nbsp; 49 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `346` &nbsp;&nbsp;|&nbsp;&nbsp; 48 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `342` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 46 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `343` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 61 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|
|&nbsp;&nbsp; `344` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 60 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
|&nbsp;&nbsp; `345` &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|&nbsp;&nbsp; 57 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
|&nbsp;&nbsp; `346` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 47 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (3721)
     2. Rust       (1036)
     3. Ruby       (844)
     4. Haskell    (829)
     5. Lua        (788)
     6. C++        (664)
     7. C          (596)
     8. JavaScript (596)
     9. Go         (574)
    10. BQN        (481)

<br>

### Blogs with Creative Title
***

#### 1. [Parenthesised Magic](https://raku-musings.com/parenthesised-magic.html) by Arne Sommer.
#### 2. [Magic Parentheses](https://github.sommrey.de/the-bears-den/2025/11/07/ch-346.html) by Jorg Sommrey.
#### 3. [really not inspired!](https://fluca1978.github.io/2025/11/07/PerlWeeklyChallenge346.html) by Luca Ferrari.
#### 4. [Recursive Parentheses - But no Recursive Magic](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-346/challenge-346/matthias-muth#readme) by Matthias Muth.
#### 5. [Whoa-oh-oh! Sing about parens!](https://packy.dardan.com/b/dX) by Packy Anderson.
#### 6. [(Magic)](http://ccgi.campbellsmiths.force9.co.uk/challenge/346) by Peter Campbell Smith.
#### 7. [All Aboard The Magic Parenthesis](https://blog.firedrake.org/archive/2025/11/The_Weekly_Challenge_346__All_Aboard_The_Magic_Parenthesis.html) by Roger Bell_West.
#### 8. [Longest Expression](https://dev.to/simongreennet/weekly-challenge-longest-expression-b8b) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 46,181 (`+109`)
#### 2. Pull Requests: 12,958 (`+37`)
#### 3. Contributors: 265 (`+1`)
#### 4. Fork: 339
#### 5. Stars: 199

<br>

## SPONSOR {#SPONSOR}
***

With start of `Week #268`, we have a new sponsor `Lance Wicks` until the end of year `2025`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 346](/blog/recap-challenge-346)** by `Mohammad Sajid Anwar`.

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

Please check out the guest contributions for the [**Week #346**](/blog/guest-contribution/#346).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Format Date {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a date in the form: `10th Nov 2025`.

Write a script to format the given date in the form: `2025-11-10` using the set below.

    @DAYS   = ("1st", "2nd", "3rd", ....., "30th", "31st")
    @MONTHS = ("Jan", "Feb", "Mar", ....., "Nov",  "Dec")
    @YEARS  = (1900..2100)

<br>

#### Example 1

    Input: $str = "1st Jan 2025"
    Output: "2025-01-01"

<br>

#### Example 2

    Input: $str = "22nd Feb 2025"
    Output: "2025-02-22"

<br>

#### Example 3

    Input: $str = "15th Apr 2025"
    Output: "2025-04-15"

<br>

#### Example 4

    Input: $str = "23rd Oct 2025"
    Output: "2025-10-23"

<br>

#### Example 5

    Input: $str = "31st Dec 2025"
    Output: "2025-12-31"

<br>

## Task 2: Format Phone Number {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a phone number as a string containing digits, space and dash only.

Write a script to format the given phone number using the below rules:

    1. Removing all spaces and dashes
    2. Grouping digits into blocks of length 3 from left to right
    3. Handling the final digits (4 or fewer) specially:
       - 2 digits: one block of length 2
       - 3 digits: one block of length 3
       - 4 digits: two blocks of length 2
    4. Joining all blocks with dashes

<br>

#### Example 1

    Input: $phone = "1-23-45-6"
    Output: "123-456"

<br>

#### Example 2

    Input: $phone = "1234"
    Output: "12-34"

<br>

#### Example 3

    Input: $phone = "12 345-6789"
    Output: "123-456-789"

<br>

#### Example 4

    Input: $phone = "123 4567"
    Output: "123-45-67"

<br>

#### Example 5

    Input: $phone = "123 456-78"
    Output: "123-456-78"

<br>

***

Last date to submit the solution `23:59 (UK Time) Sunday 16th November 2025`.

***
