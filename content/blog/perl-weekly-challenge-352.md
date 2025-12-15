---
title: "The Weekly Challenge - 352"
date: 2025-12-15T00:00:00+00:00
description: "The Weekly Challenge - 352"
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
### &nbsp;&nbsp;9. [TASK #1: Match String](#TASK1)
### 10. [TASK #2: Binary Prefix](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #352` of `The Weekly Challenge`.

Let us all welcome new member, [**Matt Martini**](https://github.com/mattmartini), to `Team PWC`. Thanks `Matt` for contributions in `Perl` for weeks [#316](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-316/matt-martini/perl), [#318](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-318/matt-martini/perl), [#349](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-349/matt-martini/perl) and [#351](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-351/matt-martini/perl).

`HVukman` shared solutions in `Factor`, [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-351/hvukman/part1/factor/351part1.factor) and [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-351/hvukman/part2/factor/351part2.factor) for the first time. The only member who shared solutions in `Factor` before was `Raghu R`. Anyone curious to know what this language is all about, please follow [**this page**](https://factorcode.org).

Talking about guest languages, `Go` language has moved up one rank to `#8`. Well done all those who contributed in `Go`.

Some interesting facts about contributions in the year `2025` as of today `2025-12-15`.

<br>

    +-----------------+-------------------------------------------+-------+
    | Contributions   | Weeks                                     | Total |
    +-----------------+-------------------------------------------+-------+
    | >= 100          | #325, #326, #330, #331, #332, #333, #341  |    7  |
    +-----------------+-------------------------------------------+-------+
    | >= 90 and < 100 | #309, #312, #316, #320, #321, #322, #323, |   14  |
    |                 | #324, #328, #329, #334, #347, #348, #349  |       |
    +-----------------+-------------------------------------------+-------+
    | >= 80 and < 90  | #305, #308, #311, #313, #317, #318, #327, |   20  |
    |                 | #335, #336, #337, #338, #339, #340, #342, |       |
    |                 | #343, #344, #345, #346, #350, #351        |       |
    +-----------------+-------------------------------------------+-------+
    | >= 70 and < 80  | #303, #304, #307, #310, #314, #315, #329  |    7  |
    +-----------------+-------------------------------------------+-------+
    | >= 50 and < 70  | #306                                      |    1  |
    +-----------------+-------------------------------------------+-------+

<br>

Below is my contributions to the `Task #1` of `Week #351`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-351/mohammad-anwar/perl/ch-1.pl)

```perl
sub special_average {
    my @nums = @_;
    return 0 unless @nums;

    my $min = min @nums;
    my $max = max @nums;

    my @filtered = grep { $_ != $min && $_ != $max } @nums;
    return 0 unless @filtered;

    my $sum = sum @filtered;

    return $sum / @filtered;
}
```

<br>

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-351/mohammad-anwar/raku/ch-1.raku)

```raku
sub special-average(*@nums) {
    return 0 unless @nums.elems;

    my $min = @nums.min;
    my $max = @nums.max;

    my @filtered = @nums.grep: { $_ != $min && $_ != $max };
    return 0 unless @filtered.elems;

    my $sum = [+] @filtered;

    return $sum / @filtered.elems;
}
```

<br>

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-351/mohammad-anwar/python/ch-1.py)

```python
def special_average(nums):
    if not nums:
        return 0

    min_val = min(nums)
    max_val = max(nums)

    filtered = [x for x in nums if x != min_val and x != max_val]
    if not filtered:
        return 0

    return sum(filtered) / len(filtered)
```

<br>

Thank you `Team PWC`, once again.

`Happy Hacking!!`

<br>

### Advent Calendar 2025
***

Contributions to the `Advent Calendar` so far by fellow members.

<br>

#### Day  1: [3-digits Even/Delete and Earn](/blog/advent-calendar-2025-12-01) by `Ali Moradi`.
#### Day  2: [Not Modified](/blog/advent-calendar-2025-12-02) by `Dave Jacoby`.
#### Day  3: [Alien Primes](/blog/advent-calendar-2025-12-03) by `Jorg Sommrey`.
#### Day  4: [Odd game](/blog/advent-calendar-2025-12-04) by `Peter Campbell Smith`.
#### Day  5: [Don't Get Trapped](/blog/advent-calendar-2025-12-05) by `Matthias Muth`.
#### Day  6: [Exclusive or Common](/blog/advent-calendar-2025-12-06) by `Arne Sommer`.
#### Day  7: [Perl and Raku mainly](/blog/advent-calendar-2025-12-07) by `Luca Ferrari`.
#### Day  8: [Arrays Intersection/Sort Odd Even](/blog/advent-calendar-2025-12-08) by `Jaldhar H. Vyas`.
#### Day  9: [Lower the Sum](/blog/advent-calendar-2025-12-09) by `Roger Bell_West`.
#### Day 10: [Minimum Time/Balls and Boxes](/blog/advent-calendar-2025-12-10) by `W. Luis Mochan`.
#### Day 11: [Reverse Broken Keys for Letters](/blog/advent-calendar-2025-12-11) by `Adam Russell`.
#### Day 12: [Equal Strings/Sort Column](/blog/advent-calendar-2025-12-12) by `Robbie Hatley`.
#### Day 13: [Sub circular](/blog/advent-calendar-2025-12-13) by `Simon Green`.
#### Day 14: [Reverse Equals](/blog/advent-calendar-2025-12-14) by `Bob Lied`.
#### Day 15: [Count the Minimum Common Word](/blog/advent-calendar-2025-12-15) by `Packy Anderson`.

<br>

***

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `347` &nbsp;&nbsp;|&nbsp;&nbsp; 47 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|
|&nbsp;&nbsp; `348` &nbsp;&nbsp;|&nbsp;&nbsp; 47 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|
|&nbsp;&nbsp; `349` &nbsp;&nbsp;|&nbsp;&nbsp; 50 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|
|&nbsp;&nbsp; `350` &nbsp;&nbsp;|&nbsp;&nbsp; 48 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|
|&nbsp;&nbsp; `351` &nbsp;&nbsp;|&nbsp;&nbsp; 49 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `347` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 67 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|
|&nbsp;&nbsp; `348` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 70 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `349` &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 83 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|
|&nbsp;&nbsp; `350` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 57 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|
|&nbsp;&nbsp; `351` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 65 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (3822)
     2. Rust       (1066)
     3. Ruby       (854)
     4. Haskell    (841)
     5. Lua        (808)
     6. C++        (674)
     7. JavaScript (606)
     8. Go         (598)
     9. C          (596)
    10. BQN        (487)

<br>

### Blogs with Creative Title
***

#### 1. [Special Progression](https://raku-musings.com/special-progression.html) by Arne Sommer.
#### 2. [Average Progression](https://github.sommrey.de/the-bears-den/2025/12/12/ch-351.html) by Jorg Sommrey.
#### 3. [A Special Sack Race](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-351/challenge-351/matthias-muth#readme) by Matthias Muth.
#### 4. [A pretty average progression…](https://packy.dardan.com/b/fQ) by Packy Anderson.
#### 5. [Fun with arrays](http://ccgi.campbellsmiths.force9.co.uk/challenge/351) by Peter Campbell Smith.
#### 6. [Special Arithmetic](https://blog.firedrake.org/archive/2025/12/The_Weekly_Challenge_351__Special_Arithmetic.html) by Roger Bell_West.
#### 7. [Average Progression](https://dev.to/simongreennet/weekly-challenge-average-progression-2dd6) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 46,722 (`+121`)
#### 2. Pull Requests: 13,140 (`+37`)
#### 3. Contributors: 268 (`+1`)
#### 4. Fork: 344 (`+1`)
#### 5. Stars: 203 (`+1`)

<br>

## SPONSOR {#SPONSOR}
***

With start of `Week #268`, we have a new sponsor `Lance Wicks` until the end of year `2025`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 351](/blog/recap-challenge-351)** by `Mohammad Sajid Anwar`.

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

[**Matt Martini**](https://github.com/mattmartini), `Perl` hacker joined `Team PWC`.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}
***

Please check out the guest contributions for the [**Week #351**](/blog/guest-contribution/#351).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Match String {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given an array of strings.

Write a script to return all strings that are a substring of another word in the given array in the order they occur.

#### Example 1

    Input: @words = ("cat", "cats", "dog", "dogcat", "dogcat", "rat", "ratcatdogcat")
    Output: ("cat", "dog", "dogcat", "rat")

<br>

#### Example 2

    Input: @words = ("hello", "hell", "world", "wor", "ellow", "elloworld")
    Output: ("hell", "world", "wor", "ellow")

<br>

#### Example 3

    Input: @words = ("a", "aa", "aaa", "aaaa")
    Output: ("a", "aa", "aaa")

<br>

#### Example 4

    Input: @words = ("flower", "flow", "flight", "fl", "fli", "ig", "ght")
    Output: ("flow", "fl", "fli", "ig", "ght")

<br>

#### Example 5

    Input: @words = ("car", "carpet", "carpenter", "pet", "enter", "pen", "pent")
    Output: ("car", "pet", "enter", "pen", "pent")

<br>

## Task 2: Binary Prefix {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given an array, `@nums`, where each element is either `0` or `1`.

Define x<sub>i</sub> as the number formed by taking the first `i+1` bits of `@nums` (from `$nums[0]` to `$nums[i]`) and interpreting them as a binary number, with `$nums[0]` being the most significant bit.

For example:

    If @nums = (1, 0, 1), then:

    x0 = 1 (binary 1)
    x1 = 2 (binary 10)
    x2 = 5 (binary 101)

    For each i, check whether xi is divisible by 5.

Write a script to return an array `@answer` where `$answer[i]` is `true` if `x<sub>i</sub>` is divisible by `5`, otherwise `false`.

#### Example 1

    Input: @nums = (0,1,1,0,0,1,0,1,1,1)
    Output: (true, false, false, false, false, true, true, false, false, false)

    Binary numbers formed (decimal values):
             0: 0
            01: 1
           011: 3
          0110: 6
         01100: 12
        011001: 25
       0110010: 50
      01100101: 101
     011001011: 203
    0110010111: 407

<br>

#### Example 2

    Input: @num = (1,0,1,0,1,0)
    Output: (false, false, true, true, false, false)

         1: 1
        10: 2
       101: 5
      1010: 10
     10101: 21
    101010: 42


<br>

#### Example 3

    Input: @num = (0,0,1,0,1)
    Output: (true, true, false, false, true)

        0: 0
       00: 0
      001: 1
     0010: 2
    00101: 5

<br>

#### Example 4

    Input: @num = (1,1,1,1,1)
    Output: (false, false, false, true, false)

        1: 1
       11: 3
      111: 7
     1111: 15
    11111: 31

<br>

#### Example 5

    Input: @num = (1,0,1,1,0,1,0,0,1,1)
    Output: (false, false, true, false, false, true, true, true, false, false)

             1: 1
            10: 2
           101: 5
          1011: 11
         10110: 22
        101101: 45
       1011010: 90
      10110100: 180
     101101001: 361
    1011010011: 723

<br>

***

Last date to submit the solution `23:59 (UK Time) Sunday 21st December 2025`.

***
