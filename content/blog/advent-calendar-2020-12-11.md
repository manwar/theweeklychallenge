---
title: "Advent Calendar - December 11, 2020"
date: 2020-12-18T00:00:00+00:00
description: "Advent Calendar - December 11, 2020."
type: post
image: images/blog/2020-12-11.jpg
author: Adam Russell
tags: ["Perl"]
---

[**Advent Calendar 2020**](/blog/advent-calendar-2020)
***

The gift is presented by [**Adam Russell**](https://perlweeklychallenge.org/blog/meet-the-champion-016). Today he is talking about his solution to the task `Lines Range` of **["The Weekly Challenge - 072"](/blog/perl-weekly-challenge-072)**. This is re-produced for **Advent Calendar 2020** from the original [**post**](https://adamcrussell.livejournal.com/16759.html) by **Adam Russell**.

***

You are given a text file name `$file` and range `$A` -  `$B` where `$A <= $B`.

Write a script to display lines range `$A` and `$B` in the given file.

## Example

#### Input:

```perl
    $ cat input.txt
    L1
    L2
    L3
    L4
    ...
    ...
    ...
    ...
    L100
```
    $A = 4 and $B = 12

#### Output:

```perl
    L4
    L5
    L6
    L7
    L8
    L9
    L10
    L11
    L12
```

***

I was a bit surprised to realize how this could be done with a one liner. In the example below input.txt is a plain text file which has 100 lines that all look like LX for 1 <= X <= 100.

```perl
$ perl -s -n -e 'print if $. >= $A && $. <= $B' — -A=4 -B=12 < input.txt

L4
L5
L6
L7
L8
L9
L10
L11
L12
```

The use of the special variable $. to track input line numbers is a common Perl idiom. What was surprising to me was that I was unfamiliar with the -s command line option. This option allows you to set variables on the command line. Anything after the — is interpreted to be a variable initialized to the given value. You can see that in the example above where -A=4 and -B=12 creates variables $A and $B initialized to 4 and 12 respectively.

If you do not set the variable to something then it is just initialized as true. For example:

```perl
$ perl -s -e 'print "$x\n";' — -x
1
```



***
If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2020**](/blog/advent-calendar-2020)
