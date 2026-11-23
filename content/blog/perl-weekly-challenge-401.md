---
title: "The Weekly Challenge - 401"
date: 2026-11-23T00:00:00+00:00
description: "The Weekly Challenge - 401"
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
### &nbsp;&nbsp;9. [TASK #1: Fractional Addition Substraction](#TASK1)
### 10. [TASK #2: Reconstruct Digits](#TASK2)

## HEADLINES {#HEADLINES}
***
Welcome to the `Week #401` of `The Weekly Challenge`.

Welcome aboard, **Caden Young**, and thanks for your first contributions in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-400/caden-young).

With regret, I announce **Peter Campbell Smith** has decided to formally retire from active contributions to the weekly challenge. He has been with us for a very long time even after retirement from regular job. He has been declared champions twice during this period, first in **December 2021** and then in **February 2025**. He is currently ranked **#15** in the leaderboard. He has been inspirational for me. I really wanted to lead an active **Perl** contribution life post retirement like him. The format of the weekly challenge is such that you are not tied to it. You are free to take a break and come back when you are available. I have seen members taking a short break and coming back with full energy. I hope and wish **Peter** might come back again.

Having said, I totally understand and respect his decision. I always suggest members to slow down but don't stop if possible. I mean, skip blogging if that helps or even just deal with task one instead of both. You can also just stick to one programming language to make it less time consuming.

If you take my own example, I took a rather long break from participation. But when I decided to join again, I started with just task one only. Then after a while, I started sharing with both tasks. Recently I even started contributing in **Python** as well as **Perl**. I haven't started blogging yet. I will see if I find time to do that in coming weeks.

As you all know, we had **London Perl Workshop 2026** last saturday. I attended the event as per the tradition but didn't give any talk because of personal reasons. It never happened until this year. I was pleasantly surprised to meet fellow **Team PWC** members, **E. Choroba** and **Arne Sommer**. The talk by **E. Choroba** was brilliant. You should definitely watch the presentation video when it is shared with the public.

Below is my contributions to the `Week #400`.

### [Task #1 - Perl]: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-400/mohammad-anwar/perl/ch-1.pl)
***
```perl
sub max_jump($num) {
    my @nums     = grep !/(\d).*\1/, 1 .. $num;
    my $max_diff = 0;

    for my $i (1 .. $#nums) {
        my $diff  = $nums[$i] - $nums[$i - 1];
        $max_diff = $diff if $diff > $max_diff;
    }

    return $max_diff;
}
```

### [Task #2 - Perl]: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-400/mohammad-anwar/perl/ch-2.pl)
***
```perl
sub min_mutation($start, $end, @bank) {
    return 0 if $start eq $end;

    my %bank = map { $_ => 1 } @bank;
    return -1 unless $bank{$end};

    my @queue   = ([$start, 0]);
    my %visited = ($start => 1);

    while (@queue) {
        my ($curr, $steps) = @{ shift @queue };
        return $steps if $curr eq $end;

        for my $i (0 .. length($curr) - 1) {
            my $orig = substr($curr, $i, 1);
            for my $c (qw(A C G T)) {
                next if $c eq $orig;
                my $next = $curr;
                substr($next, $i, 1) = $c;

                if ($bank{$next} && !$visited{$next}++) {
                    push @queue, [$next, $steps + 1];
                }
            }
        }
    }
    return -1;
}
```

### [Task #1 - Raku]: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-400/mohammad-anwar/raku/ch-1.raku)
***
```raku
sub max-jump($num) {
    my @nums = grep { !($_ ~~ /(\d) .* $0/) }, 1 .. $num;
    my $max_diff = 0;

    for 1 .. @nums.end -> $i {
        my $diff = @nums[$i] - @nums[$i - 1];
        $max_diff = $diff if $diff > $max_diff;
    }

    return $max_diff;
}
```

### [Task #2 - Raku]: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-400/mohammad-anwar/raku/ch-2.raku)
***
```raku
sub min-mutation($start, $end, *@bank) {
    return 0 if $start eq $end;

    my %bank = map { $_ => True }, @bank;
    return -1 unless %bank{$end};

    my @queue;
    @queue.push([$start, 0]);

    my %visited;
    %visited{$start} = True;

    while @queue {
        my $item  = @queue.shift;
        my $curr  = $item[0];
        my $steps = $item[1];

        return $steps if $curr eq $end;

        for 0 .. $curr.chars - 1 -> $i {
            my $orig = $curr.substr($i, 1);
            for <A C G T> -> $c {
                next if $c eq $orig;
                my $next = $curr;
                $next.substr-rw($i, 1) = $c;

                if %bank{$next} && not %visited{$next}:exists {
                    %visited{$next} = True;
                    @queue.push([$next, $steps + 1]);
                }
            }
        }
    }
    return -1;
}
```

### [Task #1 - Python]: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-400/mohammad-anwar/python/ch-1.py)
***
```python
def max_jump(num):
    nums = [i for i in range(1, num + 1) if not re.search(r"(\d).*\1", str(i))]
    max_diff = 0

    for i in range(1, len(nums)):
        diff = nums[i] - nums[i - 1]
        if diff > max_diff:
            max_diff = diff

    return max_diff
```

### [Task #2 - Python]: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-400/mohammad-anwar/python/ch-2.py)
***
```python
def min_mutation(start, end, *bank):
    if start == end:
        return 0

    bank_set = {gene: True for gene in bank}
    if end not in bank_set:
        return -1

    queue = deque([[start, 0]])
    visited = {start: True}

    while queue:
        curr, steps = queue.popleft()
        if curr == end:
            return steps

        for i in range(len(curr)):
            orig = curr[i]
            for c in ['A', 'C', 'G', 'T']:
                if c == orig:
                    continue
                next_gene = curr[:i] + c + curr[i+1:]

                if next_gene in bank_set and not visited.get(next_gene):
                    visited[next_gene] = True
                    queue.append([next_gene, steps + 1])

    return -1
```

Thank you `Team PWC`, once again.

`Happy Hacking!!`
***

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `396` &nbsp;&nbsp;|&nbsp;&nbsp; 41 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `397` &nbsp;&nbsp;|&nbsp;&nbsp; 41 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `398` &nbsp;&nbsp;|&nbsp;&nbsp; 44 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `399` &nbsp;&nbsp;|&nbsp;&nbsp; 33 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|
|&nbsp;&nbsp; `400` &nbsp;&nbsp;|&nbsp;&nbsp; 36 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|
***

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `396` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 60 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `397` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 81 &nbsp;&nbsp;|&nbsp;&nbsp; 31 &nbsp;&nbsp;|
|&nbsp;&nbsp; `398` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 82 &nbsp;&nbsp;|&nbsp;&nbsp; 27 &nbsp;&nbsp;|
|&nbsp;&nbsp; `399` &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|&nbsp;&nbsp; 40 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `400` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|
***

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (4747)
     2. Rust       (1266)
     3. C          (1087)
     4. Haskell    (981)
     5. Ruby       (971)
     6. Lua        (949)
     7. C++        (769)
     8. Go         (742)
     9. JavaScript (664)
    10. Java       (535)

### Blogs with Creative Title
***

#### 1. [Genetic Interval](https://raku-musings.com/genetic-interval.html) by Arne Sommer.
#### 2. [Don't repeat yourself](https://dev.to/boblied/pwc-400-dont-repeat-yourself-4lak) by Bob Lied.
#### 3. [Non-Repeating Mutations](https://github.sommrey.de/the-bears-den/2026/11/20/ch-400.html) by Jorg Sommrey.
#### 4. [Don't Jump Mutations](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-400/matthias-muth/README.md) by Matthias Muth.
#### 5. [We rolled down the long and winding interstate in our '53 DeSota…](https://packy.dardan.com/b/13f) by Packy Anderson.
#### 6. [Genetic Interval](https://blog.firedrake.org/archive/2026/11/The_Weekly_Challenge_400__Genetic_Interval.html) by Roger Bell_West.

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***
#### 1. Commits: 52,204 (`+90`)
#### 2. Pull Requests: 14,993 (`+32`)
#### 3. Contributors: 281
#### 4. Fork: 352
#### 5. Stars: 221

## SPONSOR {#SPONSOR}
***
With start of `Week #355`, we have a new sponsor `Marc Perry` until the end of year `2026`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance. You can find more informations [**here**](/sponsors).

## RECAP {#RECAP}
***
Quick recap of **[The Weekly Challenge - 400](/blog/recap-challenge-400)** by `Mohammad Sajid Anwar`.

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

**Caden Young**, an experienced **Perl** hacker joined **Team PWC**.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

## GUESTS {#GUESTS}
***
Please check out the guest contributions for the [**Week #400**](/blog/guest-contribution/#400).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

## Task 1: Fractional Addition Substraction {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a string representing an expression of fraction addition and substraction.

Write a script that returns the calculation result of given expression in string format. If final result is an integer, change it to the format of fraction that has a denominator 1.

#### Example 1

    Input: $expr = "1/2+3/2"
    Output: "2/1"

    1/2 + 3/2 => 4/2 => 2

    As specified by the rules, an integer result must be represented as a fraction with denominator 1, yielding "2/1".

#### Example 2

    Input: $expr = "-5/2-3/2"
    Output: "-4/1"

    -5/2 - 3/2 => -8/2 => -4 => "-4/1".

#### Example 3

    Input: $expr = "5/3-5/3"
    Output: "0/1"

    5/3 - 5/3 => 0/3
    Zero divided by any valid non-zero denominator reduces to "0/1".

#### Example 4

    Input: $expr = "10/10-1/10+2/5"
    Output: "13/10"

    10/10 - 1/10 + 2/5 => 9/10 + 4/10 => 13/10.
    13/10 is already irreducible, so the output is "13/10".

#### Example 5

    Input: $expr = "1/6+1/6+1/6"
    Output: "1/2"

    1/6 + 1/6 + 1/6 => 3/6 => 1/2

## Task 2: Reconstruct Digits {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a string containing an out-of-order English representation of digits 0-9.

Write a script to return the digits in ascending order.

#### Example 1

    Input: $str = "zroezerotwotwotwo"
    Output: "00222"

    'z' appears two times => two "zero"
    'w' appears three times => three "two"

#### Example 2

    Input: $str = "sveeneinght"
    Output: "78"

    'g' appears one time => one "eight"
    Removing the letters of "eight" leaves "sveen".
    Now 'v' appears one time => one "seven"

#### Example 3

    Input: $str = "onenineninefive"
    Output: "1599"

    'f' appears one time => one "five"
    After removing "five", 'o' appears one time => one "one".
    The remaining letters are "ninenine", where 'i' appears two times => two "nine".

#### Example 4

    Input: $str = "zeroonetwothreeeightfivesixsevenninefour"
    Output: "0123456789"

    The input contains the scrambled letters of every single digit from 0 through 9 exactly once:
    "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine".

#### Example 5

    Input: $str = "ninenineninenine"
    Output: "9999"

    Character counts: 'n' = 8, 'i' = 4, 'e' = 4.
    Every set of letters matches "nine", giving four 9s.

***
By submitting a response to the challenge you agree that your name or pseudonym, any photograph you supply and any other personal information contained in your submission may be published on this website and the associated mobile app. Last date to submit the solution `23:59 (UK Time) Sunday 29th November 2026`.
