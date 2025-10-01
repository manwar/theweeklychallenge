---
title: "The Weekly Challenge - 340"
date: 2025-09-22T00:00:00+00:00
description: "The Weekly Challenge - 340"
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
### &nbsp;&nbsp;9. [TASK #1: Duplicate Removals](#TASK1)
### 10. [TASK #2: Ascending Numbers](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #340` of `The Weekly Challenge`.

Welcome back, `Torgny Lyon`, and thanks for your contributions in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-339/torgny-lyon/perl) and bonus [**blog post**](https://www.abc.se/~torgny/pwc.html#339).

Welcome back, `Mariano Spadaccini` and thanks for contributions in [**Elixir**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-339/spadacciniweb/elixir/ch-2.exs), [**Go**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-339/spadacciniweb/go/ch-2.go), [**Perl**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-339/spadacciniweb/perl/ch-2.pl), [**Python**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-339/spadacciniweb/python/ch-2.py) and [**Ruby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-339/spadacciniweb/ruby/ch-2.rb).

Finally I found the time and energy to make a comeback and join the fun. The last time I participated was in the `Week #196 (Dec, 2022)`. That seems like a long time, I agree. The comeback wasn't smooth, though.

<br>

```perl
sub max_diff {
    my @nums = @_;

    # For 4 elements, there are only 3 possible pairings
    if (@nums == 4) {
        my ($a, $b, $c, $d) = @nums;
        return max(
            $a*$b - $c*$d,
            $a*$c - $b*$d,
            $a*$d - $b*$c,
        );
    }

    # For larger arrays, we need to consider extreme values
    my @s = sort {$a <=> $b} @nums;

    # The maximum difference will likely come from:
    # Option 1: (two largest) vs (two smallest)
    # Option 2: (largest*smallest) vs (second largest*second smallest)
    # Option 3: (largest*second smallest) vs (second largest*smallest)

    my $opt1 = $s[-1]*$s[-2] -  $s[0]*$s[1];
    my $opt2 = $s[-1]*$s[0]  - $s[-2]*$s[1];
    my $opt3 = $s[-1]*$s[1]  - $s[-2]*$s[0];

    return max($opt1, $opt2, $opt3);
}
```

<br>

As soon as I shared this on [**Facebook**](https://www.facebook.com/photo?fbid=10163195075987641), `James Smith`, a fellow `Team PWC` member, pointed out that it would fail a few edge cases.

Normally `Task #1` is supposed to be easier than `Task #2` but this time it turned out to be the opposite.

This final contribution addresses the edge cases shared by `James`.

With this, my current rank on the leaderboard is `#31`. I remember, there was a time when I was in the `Top 10` gang.

<br>

```perl
sub max_diff {
    my @n = @_;
    my @pairs = map {
        my $i = $_;
        map { [$i, $_, $n[$i]*$n[$_]] } $i+1 .. $#n
    } 0 .. $#n-1;

    return max
        grep { defined }
        map {
            my ($i,$j,$p1) = @$_;
            map {
                my ($k,$l,$p2) = @$_;
                ($i==$k||$i==$l||$j==$k||$j==$l) ? () : $p1-$p2
            } @pairs
        } @pairs;
}
```

<br>

I'll try to find some time to share my work every week, atleast `Task #1` (the easier option).

Guest contributions continue to rise and have reached a peak over the last five weeks.

The gap between guest contributions and regular contributions in `Perl` and `Raku` is getting smaller.

`Python` is still the most popular choice of guest languages. Having said, `Rust`, has now joined the `1000+` club.

However, two more, `Ruby` and `Haskell`, are very close to the target.

`Happy Hacking!!`

***

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `335` &nbsp;&nbsp;|&nbsp;&nbsp; 40 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|
|&nbsp;&nbsp; `336` &nbsp;&nbsp;|&nbsp;&nbsp; 46 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `337` &nbsp;&nbsp;|&nbsp;&nbsp; 48 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `338` &nbsp;&nbsp;|&nbsp;&nbsp; 45 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `339` &nbsp;&nbsp;|&nbsp;&nbsp; 45 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `335` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 56 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `336` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 54 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
|&nbsp;&nbsp; `337` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 54 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `338` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 58 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `339` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 64 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (3605)
     2. Rust       (1002)
     3. Ruby       (826)
     4. Haskell    (815)
     5. Lua        (769)
     6. C++        (651)
     7. C          (596)
     8. JavaScript (588)
     9. Go         (544)
    10. BQN        (468)

<br>

### Blogs with Creative Title
***

#### 1. [Diff Peak](https://raku-musings.com/diff-peak.html) by Arne Sommer.
#### 2. [Sorting for the win](https://dev.to/boblied/pwc-339-max-diff-sorting-for-the-win-43c8) by Bob Lied.
#### 3. [Max Complication for Min Brute Force](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-339/challenge-339/matthias-muth#readme) by Matthias Muth.
#### 4. [Points? What’s the diff?](https://packy.dardan.com/b/bN) by Packy Anderson.
#### 5. [Pair products, peak points](http://ccgi.campbellsmiths.force9.co.uk/challenge/339) by Peter Campbell Smith.
#### 6. [The Difference has Peaked](https://blog.firedrake.org/archive/2025/09/The_Weekly_Challenge_339__The_Difference_has_Peaked.html) by Roger Bell_West.
#### 7. [Maximum climb](https://dev.to/simongreennet/weekly-challenge-maximum-climb-28i3) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 45,366 (`+109`)
#### 2. Pull Requests: 12,668 (`+35`)
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

Quick recap of **[The Weekly Challenge - 339](/blog/recap-challenge-339)** by `Mohammad Sajid Anwar`.

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

Please check out the guest contributions for the [**Week #339**](/blog/guest-contribution/#339).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Duplicate Removals {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a string, `$str`, consisting of lowercase English letters.

Write a script to return the final string after all duplicate removals have been made. Repeat duplicate removals on the given string until we no longer can.

> A duplicate removal consists of choosing two adjacent and equal letters and removing them.

<br>

#### Example 1

    Input: $str = 'abbaca'
    Output: 'ca'

    Step 1: Remove 'bb' => 'aaca'
    Step 2: Remove 'aa' => 'ca'

<br>

#### Example 2

    Input: $str = 'azxxzy'
    Output: 'ay'

    Step 1: Remove 'xx' => 'azzy'
    Step 2: Remove 'zz' => 'ay'

<br>

#### Example 3

    Input: $str = 'aaaaaaaa'
    Output: ''

    Step 1: Remove 'aa' => 'aaaaaa'
    Step 2: Remove 'aa' => 'aaaa'
    Step 3: Remove 'aa' => 'aa'
    Step 4: Remove 'aa' => ''

<br>

#### Example 4

    Input: $str = 'aabccba'
    Output: 'a'

    Step 1: Remove 'aa' => 'bccba'
    Step 2: Remove 'cc' => 'bba'
    Step 3: Remove 'bb' => 'a'

<br>

#### Example 5

    Input: $str = 'abcddcba'
    Output: ''

    Step 1: Remove 'dd' => 'abccba'
    Step 2: Remove 'cc' => 'abba'
    Step 3: Remove 'bb' => 'aa'
    Step 4: Remove 'aa' => ''

<br>

## Task 2: Ascending Numbers {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a string, `$str`, is a list of tokens separated by a single space. Every token is either a positive number consisting of digits 0-9 with no leading zeros, or a word consisting of lowercase English letters.

Write a script to check if all the numbers in the given string are strictly increasing from left to right.

<br>

#### Example 1

    Input: $str = "The cat has 3 kittens 7 toys 10 beds"
    Output: true

    Numbers 3, 7, 10 - strictly increasing.

<br>

#### Example 2

    Input: $str = 'Alice bought 5 apples 2 oranges 9 bananas'
    Output: false

<br>

#### Example 3

    Input: $str = 'I ran 1 mile 2 days 3 weeks 4 months'
    Output: true

<br>

#### Example 4

    Input: $str = 'Bob has 10 cars 10 bikes'
    Output: false

<br>

#### Example 5

    Input: $str = 'Zero is 0 one is 1 two is 2'
    Output: true

<br>

***

Last date to submit the solution `23:59 (UK Time) Sunday 28th September 2025`.

***
