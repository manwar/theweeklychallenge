---
title: "The Weekly Challenge - 354"
date: 2025-12-29T00:00:00+00:00
description: "The Weekly Challenge - 354"
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
### &nbsp;&nbsp;9. [TASK #1: Min Abs Diff](#TASK1)
### 10. [TASK #2: Shift Grid](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #354` of `The Weekly Challenge`.

Let us all welcome our new member, [**Marc Perry**](https://github.com/mdperry), to `Team PWC`. Thank you, `Marc`, for your first contributions in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-353/mdperry/perl).

This is the final week of `2025`. Time flies.

Very soon, we will welcome new year - `2026`.

Enjoy the last few days of the holiday season.

As you all know, `Lance Wicks`, has been the sole sponsor of our monthly prize pot for two consecutive years, ending in `December 2025`. I have sent him a gentle reminder to see if he is willing to continue sponsoring in `2026`. I will update the team as soon as I hear back from him.

In the meantime, if anyone else would like to support us, that would be greatly appreciated.

Below is my contributions to the `Task #1` of `Week #353`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-353/mohammad-anwar/perl/ch-1.pl)

```perl
sub max_word {
    my @w = map { scalar split } @{$_[0]};
    return 0+(@w ? (sort {$b <=> $a} @w)[0] : 0);
}
```

<br>

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-353/mohammad-anwar/raku/ch-1.raku)

```raku
sub max_word(@sentences) {
    my @w = @sentences.map: { $_.words.elems };
    return @w ?? @w.sort.reverse[0] !! 0;
}
```

<br>

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-353/mohammad-anwar/python/ch-1.py)

```python
def max_word(sentences):
    if not sentences:
        return 0
    return max(len(sentence.split()) for sentence in sentences)
```

<br>

Thank you `Team PWC`, once again.

`Happy Hacking!!`

<br>

### Advent Calendar 2025
***

So finally we have completed the `Advent Calendar 2025`, thanks to all the contributors.

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
#### Day 23: [Discs and Spheres](/blog/advent-calendar-2025-12-23) by `Kaushik Tunuguntla`.
#### Day 24: [Strong Password/Valid Number](/blog/advent-calendar-2025-12-24) by `Peter Pentchev`.
#### Day 25: [Merry Christmas](/blog/advent-calendar-2025-12-25) by `Mohammad Sajid Anwar`.

<br>

***

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `349` &nbsp;&nbsp;|&nbsp;&nbsp; 50 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|
|&nbsp;&nbsp; `350` &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `351` &nbsp;&nbsp;|&nbsp;&nbsp; 52 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `352` &nbsp;&nbsp;|&nbsp;&nbsp; 52 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|
|&nbsp;&nbsp; `353` &nbsp;&nbsp;|&nbsp;&nbsp; 52 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `349` &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 83 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|
|&nbsp;&nbsp; `350` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 61 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
|&nbsp;&nbsp; `351` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 67 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `352` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 73 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|
|&nbsp;&nbsp; `353` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 69 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (3888)
     2. Rust       (1076)
     3. Ruby       (858)
     4. Haskell    (845)
     5. Lua        (816)
     6. C++        (678)
     7. JavaScript (610)
     8. Go         (610)
     9. C          (596)
    10. BQN        (495)

<br>

### Blogs with Creative Title
***

#### 1. [Max Validate](https://raku-musings.com/max-validate.html) by Arne Sommer.
#### 2. [To each (array) his own](https://dev.to/boblied/pwc-353-to-each-array-his-own-23o8) by Bob Lied.
#### 3. [waiting for Santa...](https://fluca1978.github.io/2025/12/24/PerlWeeklyChallenge353.html) by Luca Ferrari.
#### 4. [Validate to the Max](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-353/challenge-353/matthias-muth#readme) by Matthias Muth.
#### 5. [Ok, swing code… SWING!](https://packy.dardan.com/b/g4) by Packy Anderson.
#### 6. [Words and shopping](http://ccgi.campbellsmiths.force9.co.uk/challenge/353) by Peter Campbell Smith.
#### 7. [Max Validation](https://blog.firedrake.org/archive/2025/12/The_Weekly_Challenge_353__Max_Validation.html) by Roger Bell_West.
#### 8. [Validating Words](https://dev.to/simongreennet/weekly-challenge-validating-words-kj7) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 46,975 (`+138`)
#### 2. Pull Requests: 13,229 (`+49`)
#### 3. Contributors: 270 (`+1`)
#### 4. Fork: 344
#### 5. Stars: 206 (`+2`)

<br>

## SPONSOR {#SPONSOR}
***

With start of `Week #268`, we have a new sponsor `Lance Wicks` until the end of year `2025`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 353](/blog/recap-challenge-353)** by `Mohammad Sajid Anwar`.

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

[**Marc Perry**](https://github.com/mdperry), `Perl` hacker from `Los Angeles` joined `Team PWC`.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}
***

Please check out the guest contributions for the [**Week #353**](/blog/guest-contribution/#353).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Min Abs Diff {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given an array of distinct integers.

Write a script to find all pairs of elements with the minimum absolute difference.

    Rules (a,b):
    1: a, b are from the given array.
    2: a < b
    3: b - a = min abs diff any two elements in the given array

#### Example 1

    Input: @ints= (4, 2, 1, 3)
    Output: [1, 2], [2, 3], [3, 4]

<br>

#### Example 2

    Input: @ints = (10, 100, 20, 30)
    Output: [10, 20], [20, 30]

<br>

#### Example 3

    Input: @ints = (-5, -2, 0, 3)
    Output: [-2, 0]

<br>

#### Example 4

    Input: @ints = (8, 1, 15, 3)
    Output: [1, 3]

<br>

#### Example 5

    Input: @ints = (12, 5, 9, 1, 15)
    Output: [9, 12], [12, 15]

<br>

## Task 2: Shift Grid {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given `m x n` matrix and an integer, `$k > 0`.

Write a script to shift the given matrix `$k` times.

    Each shift follow the rules:

    Rule 1:
    Element at grid[i][j] moves to grid[i][j + 1]
    This means every element moves one step to the right within its row.

    Rule 2:
    Element at grid[i][n - 1] moves to grid[i + 1][0]
    This handles the last column: elements in the last column of row i wrap to the first column of the next row (i+1).

    Rule 3:
    Element at grid[m - 1][n - 1] moves to grid[0][0]
    This is the bottom-right corner: it wraps to the top-left corner.

#### Example 1

    Input: @matrix = ([1, 2, 3],
                      [4, 5, 6],
                      [7, 8, 9],)
           $k = 1
    Output: ([9, 1, 2],
             [3, 4, 5],
             [6, 7, 8],)

    Rule 1: grid[i][j] -> grid[i][j+1] for j < n-1.

    We take elements from the original grid at (i, j) and put them into new_grid[i][j+1].

    From original:

    (0,0): 1 -> new_grid[0][1] = 1
    (0,1): 2 -> new_grid[0][2] = 2
    (1,0): 4 -> new_grid[1][1] = 4
    (1,1): 5 -> new_grid[1][2] = 5
    (2,0): 7 -> new_grid[2][1] = 7
    (2,1): 8 -> new_grid[2][2] = 8

    New grid looks after Rule 1:

    ([?, 1, 2],
     [?, 4, 5],
     [?, 7, 8],)

    Rule 2: grid[i][n-1] -> grid[i+1][0] for i < m-1.

    Elements from original last column (except last row) go to next row's first column.

    From original:

    (0,2): 3 -> new_grid[1][0] = 3
    (1,2): 6 -> new_grid[2][0] = 6

    Now new grid after Rules 1 + 2:

    ([?, 1, 2],
     [3, 4, 5],
     [6, 7, 8],)

    Rule 3: grid[m-1][n-1] -> grid[0][0].

    Original (2,2): 9 -> new_grid[0][0] = 9.

    Now new_grid is complete:

    ([9, 1, 2],
     [3, 4, 5],
     [6, 7, 8],)

<br>

#### Example 2

    Input: @matrix = ([10, 20],
                      [30, 40],)
           $k = 1
    Output: ([40, 10],
             [20, 30],)

    Rule 1 (move right in same row if not last column):

    (0,0): 10 -> new[0][1] = 10
    (1,0): 30 -> new[1][1] = 30

    After Rule 1:

    ([?, 10],
     [?, 30],)

    Rule 2 (last col -> next row’s first col, except last row):

    (0,1): 20 -> new[1][0] = 20

    After Rule 2:

    ([?,  10],
     [20, 30],)

    Rule 3 (bottom-right to top-left):

    (1,1): 40 -> new[0][0] = 40

    After Rule 3:

    ([40, 10],
     [20, 30],)

<br>

#### Example 3

    Input: @matrix = ([1, 2],
                      [3, 4],
                      [5, 6],)
          $k = 1
    Output: ([6, 1],
             [2, 3],
             [4, 5],)

    Rule 1:
    (0,0): 1 -> new[0][1] = 1
    (1,0): 3 -> new[1][1] = 3
    (2,0): 5 -> new[2][1] = 5

    After Rule 1:
    ( [?, 1],
      [?, 3],
      [?, 5],)

    Rule 2:
    (0,1): 2 -> new[1][0] = 2
    (1,1): 4 -> new[2][0] = 4

    After Rule 2:
    ([?, 1],
     [2, 3],
     [4, 5],)

    Rule 3:
    (2,1): 6 -> new[0][0] = 6

    After Rule 3:
    ([6, 1],
     [2, 3],
     [4, 5],)

<br>

#### Example 4

    Input: @matrix = ([1, 2, 3],
                      [4, 5, 6],)
           $k = 5
    Output: ([2, 3, 4],
             [5, 6, 1],)

    Shift 1

    Rule 1
    1 -> (0,1)
    2 -> (0,2)
    4 -> (1,1)
    5 -> (1,2)

    Rule 2
    3 -> (1,0) (last column of row 0)

    Rule 3
    6 -> (0,0) (bottom-right corner)

    Result
    [6, 1, 2]
    [3, 4, 5]

    ----------------------------

    Shift 2

    Starting from the previous matrix:

    [6, 1, 2]
    [3, 4, 5]

    Rule 1
    6 -> (0,1)
    1 -> (0,2)
    3 -> (1,1)
    4 -> (1,2)

    Rule 2
    2 -> (1,0)

    Rule 3
    5 -> (0,0)

    Result
    [5, 6, 1]
    [2, 3, 4]

    ----------------------------

    Shift 3

    [5, 6, 1]
    [2, 3, 4]

    Rule 2: 1 -> (1,0)
    Rule 3: 4 -> (0,0)

    Others follow Rule 1

    Result
    [4, 5, 6]
    [1, 2, 3]

    ----------------------------

    Shift 4

    [4, 5, 6]
    [1, 2, 3]

    Result
    [3, 4, 5]
    [6, 1, 2]

    ----------------------------

    Shift 5
    [3, 4, 5]
    [6, 1, 2]

    Result
    [2, 3, 4]
    [5, 6, 1]

    Final Output (after k = 5 shifts)
    ([2, 3, 4],
     [5, 6, 1])

<br>

#### Example 5

    Input: @matrix = ([1, 2, 3, 4])
           $k = 1
    Output: ([4, 1, 2, 3])

    Rule 1:
    (0,0): 1 -> new[0][1] = 1
    (0,1): 2 -> new[0][2] = 2
    (0,2): 3 -> new[0][3] = 3

    After Rule 1:
    ([?, 1, 2, 3])

    Rule 2:
    (0,3): 4 -> new[1][0] ??

    Wait — but i=0, n-1=3, next row i+1=1 doesn’t exist (m=1).
    So this is actually a special case where Rule 2 should not apply.
    because m=1, so (0,3) goes by Rule 3 actually.

    The rules say:
    grid[i][j]     -> grid[i][j+1] for j < n-1.
    grid[i][n-1]   -> grid[i+1][0] for i < m-1.
    grid[m-1][n-1] -> grid[0][0].

    For m = 1:
    Elements (0,0),(0,1),(0,2) follow Rule 1 -> (0,1),(0,2),(0,3).
    Element (0,3) is (m-1, n-1), so follows Rule 3 -> (0,0).

    Actually, that means after Rule 1:
    We put 1,2,3 in positions 1,2,3, leaving position 0 empty.
    Then Rule 3 puts 4 in position 0.

    So final directly:
    [4, 1, 2, 3]

<br>

***

Last date to submit the solution `23:59 (UK Time) Sunday 4th January 2026`.

***
