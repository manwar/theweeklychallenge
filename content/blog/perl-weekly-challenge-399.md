---
title: "The Weekly Challenge - 399"
date: 2026-11-09T00:00:00+00:00
description: "The Weekly Challenge - 399"
type: post
author: Mohammad Sajid Anwar
tags: ["Perl", "Raku", "Challenge"]
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
### &nbsp;&nbsp;9. [TASK #1: Longest Repeating Character](#TASK1)
### 10. [TASK #2: Longest Absolute Path](#TASK2)

## HEADLINES {#HEADLINES}
***
Welcome to the `Week #399` of `The Weekly Challenge`.

Welcome aboard, [**Sanyam Brar**](https://github.com/ItsMeSamey), and thanks for your first contributions in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-398/itsmesamey).

For the second week in a row, we have had more guest contributions than the regular contributions. Ideally, I want both to reach the highest mark. I am sure one day we will get there again.

Below is my contributions to the `Week #398`.

### [Task #1 - Perl]: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-398/mohammad-anwar/perl/ch-1.pl)
***
```perl
sub divisible_average(@arr) {
    my @filtered = grep { $_ % 6 == 0 } @arr;
    return 0 unless @filtered;

    my $sum = 0;
    $sum += $_ for @filtered;

    return int($sum / @filtered + 0.5);
}
```

### [Task #2 - Perl]: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-398/mohammad-anwar/perl/ch-2.pl)
***
```perl
sub odd_one_out(@words) {
    my @diff_keys = map {
        my @c = map { ord } split //;
        join ',', map { $c[$_ + 1] - $c[$_] } 0 .. $#c - 1;
    } @words;

    my %count;
    $count{$_}++ for @diff_keys;

    my ($unique_key) = grep { $count{$_} == 1 } keys %count;
    my ($idx) = grep { $diff_keys[$_] eq $unique_key } 0 .. $#words;

    return $words[$idx];
}
```

### [Task #1 - Raku]: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-398/mohammad-anwar/raku/ch-1.raku)
***
```raku
sub divisible-average(@arr) {
    my @filtered = @arr.grep({ $_ % 6 == 0 });
    return 0 unless @filtered;

    my $sum = 0;
    $sum += $_ for @filtered;

    return (($sum / @filtered) + 0.5).Int;
}
```

### [Task #2 - Raku]: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-398/mohammad-anwar/raku/ch-2.raku)
***
```raku
sub odd-one-out(*@words) {
    my @diff_keys = @words.map: {
        my @c = .split('', :skip-empty).map(*.ord);
        join ',', (0 .. @c.end - 1).map({ @c[$_ + 1] - @c[$_] });
    };

    my %count;
    %count{$_}++ for @diff_keys;

    my ($unique_key) = %count.keys.grep({ %count{$_} == 1 });
    my ($idx)        = (0 .. @words.end).grep({ @diff_keys[$_] eq $unique_key });

    return @words[$idx];
}
```

### [Task #1 - Python]: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-398/mohammad-anwar/python/ch-1.py)
***
```python
def divisible_average(arr):
    filtered = [x for x in arr if x % 6 == 0]
    if not filtered:
        return 0

    total_sum = sum(filtered)
    return math.floor(total_sum / len(filtered) + 0.5)
```

### [Task #2 - Python]: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-398/mohammad-anwar/python/ch-2.py)
***
```python
def odd_one_out(*words):
    diff_keys = []
    for word in words:
        c = [ord(ch) for ch in word]
        diffs = [c[i + 1] - c[i] for i in range(len(c) - 1)]
        diff_keys.append(",".join(map(str, diffs)))

    count = {}
    for key in diff_keys:
        count[key] = count.get(key, 0) + 1

    unique_key = next(k for k, v in count.items() if v == 1)
    idx = diff_keys.index(unique_key)

    return words[idx]
```

Thank you `Team PWC`, once again.

`Happy Hacking!!`
***

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `394` &nbsp;&nbsp;|&nbsp;&nbsp; 36 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|
|&nbsp;&nbsp; `395` &nbsp;&nbsp;|&nbsp;&nbsp; 37 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `396` &nbsp;&nbsp;|&nbsp;&nbsp; 41 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `397` &nbsp;&nbsp;|&nbsp;&nbsp; 41 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `398` &nbsp;&nbsp;|&nbsp;&nbsp; 42 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
***

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `394` &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|&nbsp;&nbsp; 40 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `395` &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|
|&nbsp;&nbsp; `396` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 60 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `397` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 81 &nbsp;&nbsp;|&nbsp;&nbsp; 31 &nbsp;&nbsp;|
|&nbsp;&nbsp; `398` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 80 &nbsp;&nbsp;|&nbsp;&nbsp; 27 &nbsp;&nbsp;|
***

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (4720)
     2. Rust       (1259)
     3. C          (1086)
     4. Haskell    (977)
     5. Ruby       (965)
     6. Lua        (947)
     7. C++        (766)
     8. Go         (740)
     9. JavaScript (664)
    10. Java       (534)

### Blogs with Creative Title
***

#### 1. [Divisible Difference](https://raku-musings.com/divisible-difference.html) by Arne Sommer.
#### 2. [Six of one, half-dozen of the other](https://dev.to/boblied/pwc-398-six-of-one-half-dozen-of-the-other-4ahi) by Bob Lied.
#### 3. [Average Strings](https://github.sommrey.de/the-bears-den/2026/11/06/ch-398.html) by Jorg Sommrey.
#### 4. [Sixes to Average and Strings to Buckets](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-398/matthias-muth/README.md) by Matthias Muth.
#### 5. [It makes no difference if it’s divisible or not…](https://packy.dardan.com/b/12_) by Packy Anderson.
#### 6. [Divisible and difference](http://ccgi.campbellsmiths.force9.co.uk/challenge/398) by Peter Campbell Smith.
#### 7. [Difference Indivisible](https://blog.firedrake.org/archive/2026/11/The_Weekly_Challenge_398__Difference_Indivisible.html) by Roger Bell_West.
#### 8. [A different average](https://dev.to/simongreennet/weekly-challenge-a-different-average-33nm) by Simon Green.

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***
#### 1. Commits: 52,036 (`+110`)
#### 2. Pull Requests: 14,937 (`+34`)
#### 3. Contributors: 282 (`+1`)
#### 4. Fork: 353 (`+1`)
#### 5. Stars: 221

## SPONSOR {#SPONSOR}
***
With start of `Week #355`, we have a new sponsor `Marc Perry` until the end of year `2026`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance. You can find more informations [**here**](/sponsors).

## RECAP {#RECAP}
***
Quick recap of **[The Weekly Challenge - 398](/blog/recap-challenge-398)** by `Mohammad Sajid Anwar`.

## PERL REVIEW {#PERLREVIEW}
***
If you missed any past reviews then please check out the [**collection**](/p5-reviews).

## RAKU REVIEW {#RAKUREVIEW}
***
If you missed any past reviews then please check out the [**collection**](/p6-reviews).

## CHART {#CHART}
***
Please take a look at the [**charts**](/chart) showing interesting data.

I would like to `THANK` every member of the team for their valuable suggestions. Please do share your experience with us.

## NEW MEMBERS {#NEWMEMBERS}
***

**Sanyam Brar**, an expert hacker in **Perl**, joined **Team PWC**.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

## GUESTS {#GUESTS}
***
Please check out the guest contributions for the [**Week #398**](/blog/guest-contribution/#398).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

## Task 1: Longest Repeating Character {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a string `str` and an integer `k` > 0.

Write a script to choose any character of `str` and change it to another character. You may perform this operation up to `k` times. Return the length of the longest reachable substring of a single letter.

#### Example 1

    Input: $str = "AAAAA", $k = 2
    Output: 5

    Every character in the string is already the same letter "A".
    The maximum operations allowed (k = 2) do not even need to be used.
    The entire string of length 5 is already the longest valid substring.

#### Example 2

    Input: $str = "ABCDE", $k = 4
    Output: 5

    All 5 characters in the string are distinct.
    The most frequent character occurs only 1 time.
    To turn the entire string into a single repeated character, we need to replace 5 - 1 = 4 characters.
    Since k = 4, we can replace "B","C","D", and "E" with "A" to form "AAAAA".

#### Example 3

    Input: $str = "AAABBBBAA", $k = 1
    Output: 5

    If we target "A", we could change the "B" in "AAAB" (k=1 replacement) to get length 4 ("AAAA").
    If we target "B", we can pick the substring "BBBBA" and change the single trailing "A" to "B" (k=1 replacement) to form "BBBBB", which gives a length of 5.
    Targeting "B" gives better result than targeting "A".

#### Example 4

    Input: $str = "ABACADA", $k = 2
    Output: 5

    Look at the substring [0..4] which is "ABACA" (length 5).
    In this window, "A" appears 3 times, and there are 2 non-"A" characters ("B" and "C").
    With k = 2, we can replace "B" and "C" with "A" to form "AAAAA".

    Look at the substring [2..6] which is "ACADA" (length 5).
    Here, "A" appears 3 times, and non-"A" characters ("C" and "D") count to 2.
    Replacing them gives "AAAAA".

    In both cases, the maximum valid length is 5.

#### Example 5

    Input: $str = "BAAABAAAA", $k = 1
    Output: 8

    The string has two groups of "A"s separated by a single "B" ("AAABAAAA").

    We can replace the character 4 "B" with an "A" to get a sequence of 8 "A".

## Task 2: Longest Absolute Path {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a filesystem as string.

Write a script to return the length of the longest absolute path to a file in the abstracted file system. If there is no file in the system, return 0.

    dir
    - subdir1
      - file1.ext
      - subsubdir1
    - subdir2
      - subsubdir2
        - file2.ext

The above filesystem can be represented as below:

    "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"

#### Example 1

    Input: $fs = "dir\n\tsubdir1\n\t\tsubsubdir1\n\tsubdir2"
    Output: 0

    There are no files in the system (a file must contain a . character separating a name and extension).
    Since there are no files, the answer is 0.

#### Example 2

    Input: $fs = "file1.txt\nfile2.ext\na.png"
    Output: 9

    All entries are located at root depth (0 tabs).
    Found File Paths:
        "file1.txt" (length = 9)
        "file2.ext" (length = 9)
        "a.png"     (length = 5)
    The longest absolute file path length is 9.

#### Example 3

    Input: $fs = "my documents\n\tproject v1.0\n\t\tnotes v1.txt\n\timage.png"
    Output: 38

    Notice project v1.0 is a directory (it has children beneath it), while notes v1.txt and image.png are files.
    Found File Paths:
        "my documents/project v1.0/notes v1.txt" (length = 38)
        "my documents/image.png" (length = 22)
    The maximum absolute length is 38.

#### Example 4

    Input: $fs = "root\n\ta\n\t\tb\n\t\t\tc.txt\n\td\n\t\te.txt"
    Output: 14

    Found File Paths:
        "root/a/b/c.txt" => 4 + 1 + 1 + 1 + 1 + 1 + 5 = 14
        "root/d/e.txt"   => 4 + 1 + 1 + 1 + 5 = 12
    The longest file path is "root/a/b/c.txt" with length 14.

#### Example 5

    Input: $fs = "a\n\tb\n\t\tc\n\t\t\td\n\t\t\t\te.txt\n\tvery_long_directory_name\n\t\tf.txt"
    Output: 32

    Found File Paths:
        "a/b/c/d/e.txt" => 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 5 = 13
        "a/very_long_directory_name/f.txt" => 1 + 1 + 24 + 1 + 5 = 32
    The long directory name compensates for depth, giving a max length of 32.

***
By submitting a response to the challenge you agree that your name or pseudonym, any photograph you supply and any other personal information contained in your submission may be published on this website and the associated mobile app. Last date to submit the solution `23:59 (UK Time) Sunday 15th November 2026`.
