---
title: "The Weekly Challenge - 400"
date: 2026-11-16T00:00:00+00:00
description: "The Weekly Challenge - 400"
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
### &nbsp;&nbsp;9. [TASK #1: Largest Interval](#TASK1)
### 10. [TASK #2: Minimum Genetic Mutation](#TASK2)

## HEADLINES {#HEADLINES}
***
Welcome to the `Week #400` of `The Weekly Challenge`.

What a special moment to get to week number **400**!!!

Looking at the total contributions in the week **399**, the number doesn't look very promising. However, I am hoping we get good number of contributions in the week **400**.

I would like to thank, **Jorg Sommrey** and **Lubos Kolouch**, for dealing with past challenges as well as the current week.

Below is my contributions to the `Week #399`.

### [Task #1 - Perl]: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-399/mohammad-anwar/perl/ch-1.pl)
***
```perl
sub character_replacement($str, $k) {
    my @s = split //, $str;
    my %c;
    my $l     = 0;
    my $max_f = 0;

    for my $r (0 .. $#s) {
        $max_f = ++$c{$s[$r]} > $max_f ? $c{$s[$r]} : $max_f;
        if (($r - $l + 1) - $max_f > $k) {
            $c{$s[$l++]}--;
        }
    }
    return @s - $l;
}
```

### [Task #2 - Perl]: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-399/mohammad-anwar/perl/ch-2.pl)
***
```perl
sub longest_absolute_path($fs) {
    my %lens;
    my $max = 0;

    for my $line (split /\n/, $fs) {
        my $depth = $line =~ tr/\t//;
        my $name  = substr $line, $depth;
        my $len   = ($depth ? $lens{$depth - 1} + 1 : 0) + length $name;

        $lens{$depth} = $len;
        $max = $len > $max ? $len : $max if $name =~ /\./;
    }
    return $max;
}
```

### [Task #1 - Raku]: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-399/mohammad-anwar/raku/ch-1.raku)
***
```raku
sub character-replacement($str, $k) {
    my @s = $str.comb;
    my %c;
    my $l     = 0;
    my $max_f = 0;

    for 0 .. @s.end -> $r {
        my $char = @s[$r];
        %c{$char}++;
        $max_f = %c{$char} > $max_f ?? %c{$char} !! $max_f;
        if ($r - $l + 1) - $max_f > $k {
            %c{@s[$l]}--;
            $l++;
        }
    }
    return @s.elems - $l;
}
```

### [Task #2 - Raku]: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-399/mohammad-anwar/raku/ch-2.raku)
***
```raku
sub longest-absolute-path($fs) {
    my %lens;
    my $max = 0;

    for $fs.lines -> $line {
        my $depth = $line.comb("\t").elems;
        my $name  = $line.substr($depth);
        my $len   = ($depth ?? %lens{$depth - 1} + 1 !! 0) + $name.chars;

        %lens{$depth} = $len;
        $max = $len > $max ?? $len !! $max if $name ~~ /\./;
    }
    return $max;
}
```

### [Task #1 - Python]: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-399/mohammad-anwar/python/ch-1.py)
***
```python
def character_replacement(str_val, k):
    s = list(str_val)
    c = {}
    l = 0
    max_f = 0

    for r in range(len(s)):
        char = s[r]
        c[char] = c.get(char, 0) + 1
        if c[char] > max_f:
            max_f = c[char]
        if (r - l + 1) - max_f > k:
            c[s[l]] -= 1
            l += 1
    return len(s) - l
```

### [Task #2 - Python]: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-399/mohammad-anwar/python/ch-2.py)
***
```python
def longest_absolute_path(fs):
    lens = {}
    max_len = 0

    for line in fs.split('\n'):
        depth = line.count('\t')
        name = line[depth:]
        len_path = (lens.get(depth - 1) + 1 if depth > 0 else 0) + len(name)

        lens[depth] = len_path
        if '.' in name and len_path > max_len:
            max_len = len_path

    return max_len
```

Thank you `Team PWC`, once again.

`Happy Hacking!!`
***

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `395` &nbsp;&nbsp;|&nbsp;&nbsp; 37 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `396` &nbsp;&nbsp;|&nbsp;&nbsp; 41 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `397` &nbsp;&nbsp;|&nbsp;&nbsp; 41 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `398` &nbsp;&nbsp;|&nbsp;&nbsp; 42 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `399` &nbsp;&nbsp;|&nbsp;&nbsp; 31 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|
***

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `395` &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|
|&nbsp;&nbsp; `396` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 60 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `397` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 81 &nbsp;&nbsp;|&nbsp;&nbsp; 31 &nbsp;&nbsp;|
|&nbsp;&nbsp; `398` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 80 &nbsp;&nbsp;|&nbsp;&nbsp; 27 &nbsp;&nbsp;|
|&nbsp;&nbsp; `399` &nbsp;&nbsp;|&nbsp;&nbsp; 9 &nbsp;&nbsp;|&nbsp;&nbsp; 38 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
***

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (4731)
     2. Rust       (1262)
     3. C          (1086)
     4. Haskell    (978)
     5. Ruby       (967)
     6. Lua        (949)
     7. C++        (767)
     8. Go         (740)
     9. JavaScript (664)
    10. Java       (535)

### Blogs with Creative Title
***

#### 1. [Longest or Longest](https://raku-musings.com/longest-or-longest.html) by Arne Sommer.
#### 2. [Absolute Repetitions](https://github.sommrey.de/the-bears-den/2026/11/13/ch-399.html) by Jorg Sommrey.
#### 3. [So many strings I was searching…](https://packy.dardan.com/b/12u) by Packy Anderson.
#### 4. [Longest and longest](http://ccgi.campbellsmiths.force9.co.uk/challenge/399) by Peter Campbell Smith.
#### 5. [The Longest of Absolutes](https://blog.firedrake.org/archive/2026/11/The_Weekly_Challenge_399__The_Longest_of_Absolutes.html) by Roger Bell_West.
#### 6. [The longest](https://dev.to/simongreennet/weekly-challenge-the-longest-39d4) by Simon Green.

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***
#### 1. Commits: 52,114 (`+78`)
#### 2. Pull Requests: 14,961 (`+21`)
#### 3. Contributors: 281
#### 4. Fork: 352
#### 5. Stars: 221

## SPONSOR {#SPONSOR}
***
With start of `Week #355`, we have a new sponsor `Marc Perry` until the end of year `2026`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance. You can find more informations [**here**](/sponsors).

## RECAP {#RECAP}
***
Quick recap of **[The Weekly Challenge - 399](/blog/recap-challenge-399)** by `Mohammad Sajid Anwar`.

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

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

## GUESTS {#GUESTS}
***
Please check out the guest contributions for the [**Week #399**](/blog/guest-contribution/#399).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

## Task 1: Largest Interval {#TASK1}
##### **Submitted by:** [Ali Moradi](https://deadmarshal.blogspot.com)
***

You are given a positive integer.

Write a script that generates a sequence of integers from 1 to given positive integer, filtering out any numbers that contain repeating digits (e.g., 11, 99, 100, and 101 are excluded) and return the biggest jump.

#### Example 1

    Input: $int = 20
    Output: 2

    Biggest jump between 10 and 12.

#### Example 2

    Input: $int = 110
    Output: 4

    Biggest jump between 98 and 102.

#### Example 3

    Input: $int = 500
    Output: 11

    Biggest jump between:
    a) 109 and 120 => 11
    b) 219 and 230 => 11
    c) 329 and 340 => 11
    d) 439 and 450 => 11

#### Example 4

    Input: $int = 2026
    Output: 105

    Biggest jump between 1098 and 1203.

#### Example 5

    Input: $int = 10000
    Output: 105

    The largest gap is 105, between 1098 and 1203. And again between 8796 and 8901.

## Task 2: Minimum Genetic Mutation {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given start and end gene string along with gene bank.

Write a script to return the minimum number of mutations required to mutate from start to end gene. Return -1 if there is no such mutation. A gene must be in a bank to make it a valid gene string.

> A gene string can be represented by an 8-character long string, with choices from 'A', 'C', 'G', and 'T'.

#### Example 1

    Input: $start_gene = "AACCGGTT"
           $end_gene   = "AACCGGTA"
           @gene_bank  = ("AACCGCTA", "AAACGGTA")
    Output: -1

    To reach end gene, every intermediate gene and the end gene itself must exist in bank.
    Since "AACCGGTA" is missing from bank, it is impossible to complete the mutation sequence.

#### Example 2

    Input: $start_gene = "AACCGGTT"
           $end_gene   = "AACCGGAA"
           @gene_bank  = ("AACCGGTA", "AACCGGAA", "AACCGCTA", "AACCCTAA", "AACCGTAA")
    Output: 2

    Path 1 (2 steps): "AACCGGTT" => "AACCGGTA" => "AACCGGAA"

#### Example 3

    Input: $start_gene = "AAAAAAAA"
           $end_gene   = "AAAAACCC"
           @gene_bank  = ("CAAAAAAA", "CCAAAAAA", "AAAAAAAC")
    Output: -1


#### Example 4

    Input: $start_gene = "GAAAAAAA"
           $end_gene   = "GCCCCCCC"
           @gene_bank  = ("GCAAAAAA", "GCCAAAAA", "GCCCAAAA", "GCCCCAAA", "GCCCCCAA", "GCCCCCCA", "GCCCCCCC")
    Output: 7

    "GAAAAAAA" => "GCAAAAAA"
    "GCAAAAAA" => "GCCAAAAA"
    "GCCAAAAA" => "GCCCAAAA"
    "GCCCAAAA" => "GCCCCAAA"
    "GCCCCAAA" => "GCCCCCAA"
    "GCCCCCAA" => "GCCCCCCA"
    "GCCCCCCA" => "GCCCCCCC"

#### Example 5

    Input: $start_gene = "AACCGGTT"
           $end_gene   = "AACCGGTT"
           @gene_bank = ("AACCGGTA")
    Output: 0

    The current genetic sequence already matches the desired end gene.
    No mutations are necessary, so the result is 0.

***
By submitting a response to the challenge you agree that your name or pseudonym, any photograph you supply and any other personal information contained in your submission may be published on this website and the associated mobile app. Last date to submit the solution `23:59 (UK Time) Sunday 22nd November 2026`.
