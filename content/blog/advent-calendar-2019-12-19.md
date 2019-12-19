---
title: "Advent Calendar - December 19, 2019"
date: 2019-12-19T00:00:00+00:00
description: "Advent Calendar - December 19, 2019"
type: post
image: images/blog/2019-12-19.jpg
author: Khalid
tags: ["Raku"]
---

[**Advent Calendar 2019**](/blog/advent-calendar-2019)
***

The gift is presented by **Khalid**. Today he is talking about his solutions to **Task #1: Strip leading zeros** of [**"The Weekly Challenge - 002"**](/blog/perl-weekly-challenge-002).

#### Write a script or one-liner to remove leading zeros from positive numbers.

***

# This solution uses Raku Grammer

At first here is the code :

```perl6
grammar Grammer {
    token TOP {<sign>? <int> <decimal>?}
    token decimal {<dot><digit>?}
    token int {<zeros>? <digit>?}
    token digit { \d+ }
    token dot { '.' }
    token zeros {0+}
    token sign {'+'}
}
my $match = Grammer.parse(@*ARGS[0]);
my $number =  ($match<int><digit> // '')  ~ ($match<decimal> // '');
say $number;
```
at the first line we simply creat a **Grammer** with name 'Grammer' which is a **Class** that have methods (**rules**, **tokens** and **regexes**) as [**documented here**](https://docs.raku.org/language/grammars).

## Let's get the zeros token first:

#### `0+` matches any number of Zeros in the input

#### `dot` token : matches only `.`

#### `digit` token : matches any number of digit characters

#### `int` token : uses zeros token and digit token to match the first part of the number incase it is decimal.

and I made it's parts optional using **`?`** as the first part may not contain zeros or digits input ex: **.53**, **1.52**

#### `decimal` token : matches a dot `.` followed by any number of digit characters

and putting them together in the main **`TOP`** token gives us the full number.

***
If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2019**](/blog/advent-calendar-2019)
