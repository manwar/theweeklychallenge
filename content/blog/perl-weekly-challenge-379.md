---
title: "The Weekly Challenge - 379"
date: 2026-06-22T00:00:00+00:00
description: "The Weekly Challenge - 379"
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
### &nbsp;&nbsp;9. [TASK #1: Reverse String](#TASK1)
### 10. [TASK #2: Armstrong Number](#TASK2)

## HEADLINES {#HEADLINES}
***
Welcome to the `Week #379` of `The Weekly Challenge`.

Welcome aboard, `Dean Hamstead`. I hope you find the weekly challenge fun.

Welcome back, `Asher Harvey-Smith` and thanks for your contributions in [**APL**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-378/asherbhs/apl) and [**Raku**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-378/asherbhs/apl).

We have a new guest language this week, [**Ploki**](https://codeberg.org/mauke/ploki), thanks to `mauke`. We even have first contribution in [**Ploki**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-378/mauke/ploki) by him.

We had tough fight this week between regular contributors and guest contributors.

We would have created a record, this week as guest contributions was `87` as compared to regular contributons `88`.

I am wondering, if I had only contributed to just `Task #1` like before then the story would have been completely different.

By the way, it is the best week in `2026` for guest contributors.

This time, I have tackled both tasks as it was easier than normal week.

Below is my contributions to the `Task #1` of `Week #378`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-378/mohammad-anwar/perl/ch-1.pl)
***
```perl
sub second_largest_digit {
    my ($str) = @_;

    my @digits = $str =~ /\d/g;
    my %unique;
    $unique{$_} = 1 for @digits;
    my @sorted_digits = sort { $b <=> $a } keys %unique;

    return (@sorted_digits < 2)?(-1):($sorted_digits[1]);
}
```

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-378/mohammad-anwar/raku/ch-1.raku)
***
```raku
sub second_largest_digit($str) {
    my @digits = $str.comb(/\d/);
    my @sorted_digits = @digits.unique.sort.reverse;

    return @sorted_digits < 2 ?? -1 !! @sorted_digits[1];
}
```

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-378/mohammad-anwar/python/ch-1.py)
***
```python
def second_largest_digit(string):
    digits = re.findall(r"\d", string)

    unique = set(digits)
    sorted_digits = sorted([int(d) for d in unique], reverse=True)

    return -1 if len(sorted_digits) < 2 else sorted_digits[1]
```

Below is my contributions to the `Task #2` of `Week #378`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-378/mohammad-anwar/perl/ch-2.pl)
***
```perl
sub sum_of_words {
    my @nums = map { int( s/./ord($&)-97/ger ) } @_;
    return $nums[0] + $nums[1] == $nums[2] ? "true" : "false";
}
```

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-378/mohammad-anwar/raku/ch-2.raku)
***
```perl
sub sum_of_words(*@words) {
    my @nums = @words.map: { Int( S:g/./{ ($/.ord - 97).Str }/ ) };
    return @nums[0] + @nums[1] == @nums[2] ?? "true" !! "false";
}
```

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-378/mohammad-anwar/python/ch-2.py)
***
```python
def sum_of_words(*words):
    nums = list(map(lambda s: int(re.sub(r'.', lambda m: str(ord(m.group(0)) - 97), s)), words))
    return "true" if nums[0] + nums[1] == nums[2] else "false"
```

Thank you `Team PWC`, once again.

`Happy Hacking!!`
***

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `374` &nbsp;&nbsp;|&nbsp;&nbsp; 43 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `375` &nbsp;&nbsp;|&nbsp;&nbsp; 43 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `376` &nbsp;&nbsp;|&nbsp;&nbsp; 42 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `377` &nbsp;&nbsp;|&nbsp;&nbsp; 41 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|
|&nbsp;&nbsp; `378` &nbsp;&nbsp;|&nbsp;&nbsp; 48 &nbsp;&nbsp;|&nbsp;&nbsp; 28 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
***

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `374` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 50 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `375` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `376` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 45 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|
|&nbsp;&nbsp; `377` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 63 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|
|&nbsp;&nbsp; `378` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 87 &nbsp;&nbsp;|&nbsp;&nbsp; 30 &nbsp;&nbsp;|
***

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (4453)
     2. Rust       (1178)
     3. C          (1041)
     4. Ruby       (920)
     5. Haskell    (919)
     6. Lua        (902)
     7. C++        (731)
     8. Go         (695)
     9. JavaScript (642)
    10. Java       (532)

### Blogs with Creative Title
***

#### 1. [Second Sum](https://raku-musings.com/second-sum.html) by Arne Sommer.
#### 2. [Second Last Word Standing](https://github.sommrey.de/the-bears-den/2026/06/18/ch-378.html) by Jorg Sommrey.
#### 3. [Cause I’d Already Know](https://packy.dardan.com/b/rm) by Packy Anderson.
#### 4. [Second and sum](http://ccgi.campbellsmiths.force9.co.uk/challenge/378) by Peter Campbell Smith.
#### 5. [Second Sum](https://blog.firedrake.org/archive/2026/06/The_Weekly_Challenge_378__Second_Sum.html) by Roger Bell_West.
#### 6. [The Second Sum](https://dev.to/simongreennet/weekly-challenge-the-second-sum-3lj7) by Simon Green.
***

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***
#### 1. Commits: 50,177 (`+124`)
#### 2. Pull Requests: 14,292 (`+46`)
#### 3. Contributors: 279
#### 4. Fork: 351
#### 5. Stars: 215
***

## SPONSOR {#SPONSOR}
***
With start of `Week #355`, we have a new sponsor `Marc Perry` until the end of year `2026`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance. You can find more informations [**here**](/sponsors).

## RECAP {#RECAP}
***
Quick recap of **[The Weekly Challenge - 378](/blog/recap-challenge-378)** by `Mohammad Sajid Anwar`.

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
Please check out the guest contributions for the [**Week #378**](/blog/guest-contribution/#378).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

## Task 1: Reverse String {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a string.

Write a script to reverse the given string without using standard reverse function.

#### Example 1

    Input: $str = ""
    Output: ""

#### Example 2

    Input: $str = "reverse the given string"
    Output: "gnirts nevig eht esrever"

#### Example 3

    Input: $str = "Perl is Awesome"
    Output: "emosewA si lreP"

#### Example 4

    Input: $str = "v1.0.0-Beta!"
    Output: "!ateB-0.0.1v"

#### Example 5

    Input: $str = "racecar"
    Output: "racecar"

## Task 2: Armstrong Number {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given two integers, $base and $limit.

Write a script to find all Armstrong numbers in base $base that are less than $limit.

> If raising each of the digits of a nonnegative integer to the power of the total number of digits, then taking the sum, equals the original number, it is an Armstrong number.

#### Example 1

    Input: $base = 10, $limit = 1000
    Output: (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 153, 370, 371, 407)

#### Example 2

    Input: $base = 7, $limit = 1000
    Output: (0, 1, 2, 3, 4, 5, 6, 10, 25, 32, 45, 133, 134, 152, 250)

#### Example 3

    Input: $base = 16, $limit = 1000
    Output: (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 342, 371, 520, 584, 645)

***
By submitting a response to the challenge you agree that your name or pseudonym, any photograph you supply and any other personal information contained in your submission may be published on this website and the associated mobile app. Last date to submit the solution `23:59 (UK Time) Sunday 28th June 2026`.
