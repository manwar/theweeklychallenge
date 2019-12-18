---
title: "Advent Calendar - December 10, 2019"
date: 2019-12-10T00:00:00+00:00
description: "Advent Calendar - December 10, 2019"
type: post
image: images/blog/2019-12-10.jpg
author: Mark Senn
tags: ["Raku"]
---

[**Advent Calendar 2019**](/blog/advent-calendar-2019)
***

The gift is presented by [**Mark Senn**](/blog/meet-the-champion-031). Today he is talking about his solutions to **Task #1: Split word on change of character** of [**"The Weekly Challenge - 020"**](/blog/perl-weekly-challenge-020).

***

#### Write a script to accept a string from command line and split it on change of character. For example, if the string is “ABBCDEEF”, then it should split like “A”, “BB”, “C”, “D”, “EE”, “F”.

***

[**“There’s more than one way to do it”**](https://en.wikipedia.org/wiki/There%27s_more_than_one_way_to_do_it) is a **Perl** programming motto. I decided to solve this using a **Raku** regex. In my opinion, if you do much programming with character strings, **regexes** are too powerful to not learn.

[**See**](https://docs.raku.org/routine/MAIN) for how to define a **MAIN** sub. For this program, only a single string from the command line needs to be accepted with no options and the following will suffice. This is nice because if I used a sub **MAIN** here, I would put all of the code below indented inside the sub **MAIN**.

The **Raku** regex:

     /((.){}$0 *)*/;

with no comments could be used. For this regex I prefer commenting it like below to explain it to people who may have not used regexes before.

Search for the quoted comments in the code below in [**here**](https://docs.raku.org/language/regexes) for more information.

```perl6

use v6.d;

$_ = shift @*ARGS;

/                 # Start a Raku regex (called "regular expression" in Perl).
    (                 # Start a group to match a string of identical characters.
        (.)               # Match a single character.
        {}                # "This code block publishes the capture inside the
                          # regex, so that it can be assigned to other variables
                          # or used for subsequent matches."
        $0*               # Match the previously matched character
                          # zero or more times.
    )*                # End the group to match a string of identical characters.
                      # There are zero or more groups of identical characters.
/;                # End the Raku regex.

# "Coercing the match object to a list gives an easy way
# to programmatically access all elements :"

say $/.list.join;

```

***
If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2019**](/blog/advent-calendar-2019)
