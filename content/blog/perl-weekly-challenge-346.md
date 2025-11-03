---
title: "The Weekly Challenge - 346"
date: 2025-11-03T00:00:00+00:00
description: "The Weekly Challenge - 346"
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
### &nbsp;&nbsp;9. [TASK #1: Longest Parenthesis](#TASK1)
### 10. [TASK #2: Magic Expression](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #346` of `The Weekly Challenge`.

Today is the first `Monday` of the month and time to declare our next `Champion of the Month`. With great pleasure, I announce `Niels van Dijke` as the next champion. He is currently ranked `#29` with total score `856`. He was last declared champion in `Dec 2020`. Congratulations `Niels`.

Let us welcome new guest contributor, [**lexi**](https://github.com/pyjail), expert hacker in `Uiua`. Thanks `lexi` for your first contributions in [**Uiua**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-345/orthoplex/uiua).

I've been meaning to tell the team about something for a while and I think this is the ideal moment.

The months of `November` through `January` are usually challenging for me and I've always had trouble with elevated anxiety and depression during these times. I'm paying attention to taking care of my health now that `November` has arrived. Fortunately, I benefit greatly from being a member of the PWC team because it keeps me motivated and involved. I find that keeping myself occupied and avoiding idleness is essential to keeping my equilibrium.

By the way, next month is my `50th` birthday. I never celebrated my birthdays and I intend to keep that tradition going this year as well.

Seeing our team's retired techies who enjoy coding makes me think of my own objective: to eventually be able to code just for fun after retirement. They're really fortunate, in my opinion.

It's time to get ready for the `Advent Calendar` this year, by the way. The custom of reading through blog entries and choosing one for each day is something I truly appreciate. I'm excited to carry on this year.

Please let me know if you would like to nominate any particular blog posts. I want to make sure I don't overlook any outstanding ones!

Below is my contribution to last week's `Task #1`. It doesn't take long but gives me immense pleasure in the end and keep me motivated.

<br>

### Perl

<br>

```perl
#!/usr/bin/env perl

use strict;
use warnings;
use Test::More;

my @examples = (
    { in => [1, 3, 2],             exp => "1"       },
    { in => [2, 4, 6, 5, 3],       exp => "2"       },
    { in => [1, 2, 3, 2, 4, 1],    exp => "2, 4"    },
    { in => [5, 3, 1],             exp => "0"       },
    { in => [1, 5, 1, 5, 1, 5, 1], exp => "1, 3, 5" },
);

foreach (@examples) {
    is(peak_point(@{$_->{in}}), $_->{exp});
}

done_testing;

sub peak_point {
    my @n = @_;
    return join(", ", grep {
        ($_ == 0   ? @n > 1 && $n[0]  > $n[1]  :
         $_ == $#n ? @n > 1 && $n[-1] > $n[-2] :
         $n[$_] > $n[$_-1]  && $n[$_] > $n[$_+1])
    } 0..$#n);
}
```

<br>

### Raku

<br>

```raku
#!/usr/bin/env raku

use Test;

my @examples = (
    { in => [1, 3, 2],             exp => "1"       },
    { in => [2, 4, 6, 5, 3],       exp => "2"       },
    { in => [1, 2, 3, 2, 4, 1],    exp => "2, 4"    },
    { in => [5, 3, 1],             exp => "0"       },
    { in => [1, 5, 1, 5, 1, 5, 1], exp => "1, 3, 5" },
);

for @examples -> %example {
    is(peak-point(%example<in>), %example<exp>);
}

done-testing;

sub peak-point(@n) {
    return @n.keys.grep({
        $_ == 0             ?? @n > 1 && @n[0]   > @n[1]   !!
        $_ == @n.end        ?? @n > 1 && @n[*-1] > @n[*-2] !!
        @n[$_] > @n[$_ - 1] && @n[$_] >  @n[$_ + 1]
    }).join(", ");
}
```

<br>

### Python

<br>

```python
#!/usr/bin/env python3

def peak_point(nums):
    n = nums
    return ", ".join(str(i) for i in range(len(n)) if
        (i == 0 and len(n) > 1 and n[0] > n[1]) or
        (i == len(n) - 1 and len(n) > 1 and n[-1] > n[-2]) or
        (0 < i < len(n) - 1 and n[i] > n[i-1] and n[i] > n[i+1]))

def test_examples():
    examples = [
        {"in": [1, 3, 2],             "exp": "1"},
        {"in": [2, 4, 6, 5, 3],       "exp": "2"},
        {"in": [1, 2, 3, 2, 4, 1],    "exp": "2, 4"},
        {"in": [5, 3, 1],             "exp": "0"},
        {"in": [1, 5, 1, 5, 1, 5, 1], "exp": "1, 3, 5"},
    ]

    for example in examples:
        result = peak_point(example["in"])
        expected = example["exp"]
        assert result == expected, f"Failed for {example['in']}: expected '{expected}', got '{result}'"
        print(f"{example['in']} -> {result}")

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
|&nbsp;&nbsp; `341` &nbsp;&nbsp;|&nbsp;&nbsp; 57 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|
|&nbsp;&nbsp; `342` &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `343` &nbsp;&nbsp;|&nbsp;&nbsp; 44 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `344` &nbsp;&nbsp;|&nbsp;&nbsp; 47 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|
|&nbsp;&nbsp; `345` &nbsp;&nbsp;|&nbsp;&nbsp; 45 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `341` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 67 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `342` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 46 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `343` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 61 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|
|&nbsp;&nbsp; `344` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 60 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
|&nbsp;&nbsp; `345` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 56 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (3707)
     2. Rust       (1032)
     3. Ruby       (842)
     4. Haskell    (827)
     5. Lua        (785)
     6. C++        (663)
     7. C          (596)
     8. JavaScript (594)
     9. Go         (569)
    10. BQN        (480)

<br>

### Blogs with Creative Title
***

#### 1. [Last Peak](https://raku-musings.com/last-peak.html) by Arne Sommer.
#### 2. [I Went to the Mountains](https://dev.to/boblied/pwc-345-i-went-to-the-mountains-43i0) by Bob Lied.
#### 3. [The Last Peak](https://github.sommrey.de/the-bears-den/2025/10/31/ch-345.html) by Jorg Sommrey.
#### 4. [Visiting the Peaks](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-345/challenge-345/matthias-muth#readme) by Matthias Muth.
#### 5. [Teach Them How To Say PWC…](https://packy.dardan.com/b/dD) by Packy Anderson.
#### 6. [Peak at the answers](http://ccgi.campbellsmiths.force9.co.uk/challenge/345) by Peter Campbell Smith.
#### 7. [Position the Visitor](https://blog.firedrake.org/archive/2025/11/The_Weekly_Challenge_345__Position_the_Visitor.html) by Roger Bell_West.
#### 8. [Peak Visitors](https://dev.to/simongreennet/weekly-challenge-peak-visitors-3lei) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 46,072 (`+113`)
#### 2. Pull Requests: 12,921 (`+38`)
#### 3. Contributors: 264
#### 4. Fork: 339 (`+2`)
#### 5. Stars: 199 (`+1`)

<br>

## SPONSOR {#SPONSOR}
***

With start of `Week #268`, we have a new sponsor `Lance Wicks` until the end of year `2025`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 345](/blog/recap-challenge-345)** by `Mohammad Sajid Anwar`.

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

### [**lexi**](https://github.com/pyjail) joined `Team PWC` as a guest contributor.

<br>

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}
***

Please check out the guest contributions for the [**Week #345**](/blog/guest-contribution/#345).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Longest Parenthesis {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a string containing only `(` and `)`.

Write a script to find the length of the longest valid parenthesis.

<br>

#### Example 1

    Input: $str = '(()())'
    Output: 6

    Valid Parenthesis: '(()())'

<br>

#### Example 2

    Input: $str = ')()())'
    Output: 4

    Valid Parenthesis: '()()' at positions 1-4.

<br>

#### Example 3

    Input: $str = '((()))()(((()'
    Output: 8

    Valid Parenthesis: '((()))()' at positions 0-7.

<br>

#### Example 4

    Input: $str = '))))((()('
    Output: 2

    Valid Parenthesis: '()' at positions 6-7.

<br>

#### Example 5

    Input: $str = '()(()'
    Output: 2

    Valid Parenthesis: '()' at positions 0-1 and 3-4.

<br>

## Task 2: Magic Expression {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a string containing only digits and a target integer.

Write a script to insert binary operators `+`, `-` and `*` between the digits in the given string that evaluates to target integer.

<br>

#### Example 1

    Input: $str = "123", $target = 6
    Output: ("1*2*3", "1+2+3")

<br>

#### Example 2

    Input: $str = "105", $target = 5
    Output: ("1*0+5", "10-5")

<br>

#### Example 3

    Input: $str = "232", $target = 8
    Output: ("2*3+2", "2+3*2")

<br>

#### Example 4

    Input: $str = "1234", $target = 10
    Output: ("1*2*3+4", "1+2+3+4")

<br>

#### Example 5

    Input: $str = "1001", $target = 2
    Output: ("1+0*0+1", "1+0+0+1", "1+0-0+1", "1-0*0+1", "1-0+0+1", "1-0-0+1")

<br>

***

Last date to submit the solution `23:59 (UK Time) Sunday 9th November 2025`.

***
