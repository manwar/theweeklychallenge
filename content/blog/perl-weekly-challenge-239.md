---
title: "The Weekly Challenge - 239"
date: 2023-10-16T00:00:00+00:00
description: "The Weekly Challenge - 239"
type: post
image: images/twc-logo.png
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

## TABLE OF CONTENTS
***

### 01. [HEADLINES](#HEADLINES)
### 02. [SPONSOR](#SPONSOR)
### 03. [RECAP](#RECAP)
### 04. [PERL REVIEW](#PERLREVIEW)
### 05. [RAKU REVIEW](#RAKUREVIEW)
### 06. [CHART](#CHART)
### 07. [NEW MEMBERS](#NEWMEMBERS)
### 08. [GUESTS](#GUESTS)
### 09. [TASK #1: Same String](#TASK1)
### 10. [TASK #2: Consistent Strings](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #239` of `The Weekly Challenge`.

Thank you, `Robbie Hatley` for the prompt response and sharing the [**interview**](https://theweeklychallenge.org/blog/meet-the-champion-2023-09/).

Let us all welcome another `Perl` hacker, [**Augie De Blieck Jr.**](https://github.com/augiedb), to the `Team PWC`. Thank you for your first contributions in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-238/augiedb/perl) and [**Elixir**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-238/augiedb/elixir). We also received blog posts for [[**Perl Task #1**](https://variousandsundry.com/running-sum-or-i-love-recursion/)], [[**Perl Task #2**](https://variousandsundry.com/persistence-sort-in-which-i-give-up-and-use-a-global/)] and [[**Elixir Task #1**](https://variousandsundry.com/recursive-running-sum-redux-in-elixir/)].

`Luca Ferrari` came up with solutions in [**Python**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-238/luca-ferrari/python) for the first time.

`Lance Wicks` also found time to share his [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-238/lance-wicks/perl) solution to the `Task #1`.

`Andrew Grangaard` came back after the break and shared solutions in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-238/spazm/perl) and [**Python**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-238/spazm/python).

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `234` &nbsp;&nbsp;|&nbsp;&nbsp; 52 &nbsp;&nbsp;|&nbsp;&nbsp; 35 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|
|&nbsp;&nbsp; `235` &nbsp;&nbsp;|&nbsp;&nbsp; 61 &nbsp;&nbsp;|&nbsp;&nbsp; 34 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|
|&nbsp;&nbsp; `236` &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 34 &nbsp;&nbsp;|&nbsp;&nbsp; 29 &nbsp;&nbsp;|
|&nbsp;&nbsp; `237` &nbsp;&nbsp;|&nbsp;&nbsp; 48 &nbsp;&nbsp;|&nbsp;&nbsp; 34 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|
|&nbsp;&nbsp; `238` &nbsp;&nbsp;|&nbsp;&nbsp; 60 &nbsp;&nbsp;|&nbsp;&nbsp; 37 &nbsp;&nbsp;|&nbsp;&nbsp; 29 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `234` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 48 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `235` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 78 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `236` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 62 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|
|&nbsp;&nbsp; `237` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 54 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `238` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 79 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top 10`? If not then why not contribute regularly and make it to the top.

     1. Python     (1886)
     2. Ruby       (603
     3. Haskell    (596)
     4. Lua        (528)
     5. C          (445)
     6. Rust       (445)
     7. C++        (415)
     8. BQN        (309)
     9. Go         (283)
    10. JavaScript (274)

<br>

### Blogs with Creative Title
***

#### 1. [Persistently Running](https://raku-musings.com/persistently-running.html) by Arne Sommer.
#### 2. [Running and Persistence](https://dev.to/boblied/pwc-238-running-and-persistence-4kla) by Bob Lied.
#### 3. [You Can't Touch This!](https://jacoby.github.io/2023/10/09/you-cant.html) by Dave Jacoby.
#### 4. [running sums and multiplications](https://fluca1978.github.io/2023/10/09/PerlWeeklyChallenge238.html) by Luca Ferrari.
#### 5. [Reduced Arrays, Reduced Numbers, Reduced Code](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-238/matthias-muth#readme) by Matthias Muth.
#### 6. [Be Runnin’ Up That Sum, Be Persisten’ Up That Sort](https://packy.dardan.com/2023/10/09/be-runnin-up-that-sum-be-persisten-up-that-sort/) by Packy Anderson.
#### 7. [Running persistence](http://ccgi.campbellsmiths.force9.co.uk/challenge/238) by Peter Campbell Smith.
#### 8. [Running Persistence](https://blog.firedrake.org/archive/2023/10/The_Weekly_Challenge_238__Running_Persistence.html) by Roger Bell_West.
#### 9. [Counting and sorting](https://dev.to/simongreennet/counting-and-sorting-4136) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 34,651 (`+112`)
#### 2. Pull Requests: 8,860 (`+40`)
#### 3. Contributors: 234 (`+1`)
#### 4. Fork: 295 (`+2`)
#### 5. Stars: 164

<br>

## SPONSOR {#SPONSOR}
***

Our solo sponsor `Pete Sergeant` has been a great support to keep us motivated. We are lucky that he agreed to continue the journey with us in the year 2023. I would like to personally thank **Pete** and his entire team for their generosity. It would be great if we could add few more to sponsor the prize money so that we could go back and declare weekly champions as we have done in the past. I hope and wish this will become possible in 2023. The amount doesn't have to be huge. However, it would be nice to show off bunch of supporters. If an organisation comes forward and supports us then that would be the ultimate achievement.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 238](/blog/recap-challenge-238)** by `Mohammad S Anwar`.

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

[**Augie De Blieck Jr.**](https://github.com/augiedb), an experienced `Perl` hacker from `NJ` joined the `Team PWC`.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}
***

Please check out the guest contributions for the [**Week #238**](/blog/guest-contribution/#238).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Same String {#TASK1}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given two arrays of strings.

Write a script to find out if the word created by concatenating the array elements is the same.

#### Example 1

    Input: @arr1 = ("ab", "c")
           @arr2 = ("a", "bc")
    Output: true

    Using @arr1, word1 => "ab" . "c" => "abc"
    Using @arr2, word2 => "a" . "bc" => "abc"

#### Example 2

    Input: @arr1 = ("ab", "c")
           @arr2 = ("ac", "b")
    Output: false

    Using @arr1, word1 => "ab" . "c" => "abc"
    Using @arr2, word2 => "ac" . "b" => "acb"

#### Example 3

    Input: @arr1 = ("ab", "cd", "e")
           @arr2 = ("abcde")
    Output: true

    Using @arr1, word1 => "ab" . "cd" . "e" => "abcde"
    Using @arr2, word2 => "abcde"

<br>

## Task 2: Consistent Strings {#TASK2}
##### **Submitted by:** [Mohammad S Anwar](http://www.manwar.org)
***

You are given an array of strings and allowed string having distinct characters.

<br>

> A string is consistent if all characters in the string appear in the string allowed.

<br>

Write a script to return the number of consistent strings in the given array.

#### Example 1

    Input: @str = ("ad", "bd", "aaab", "baa", "badab")
           $allowed = "ab"
    Output: 2

    Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.

#### Example 2

    Input: @str = ("a", "b", "c", "ab", "ac", "bc", "abc")
           $allowed = "abc"
    Output: 7

#### Example 3

    Input: @str = ("cc", "acd", "b", "ba", "bac", "bad", "ac", "d")
           $allowed = "cad"
    Output: 4

    Strings "cc", "acd", "ac", and "d" are consistent.

<br>

***

Last date to submit the solution **23:59 (UK Time) Sunday 22nd October 2023**.

***
