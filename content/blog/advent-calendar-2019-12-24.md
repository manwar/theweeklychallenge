---
title: "Advent Calendar - December 24, 2019"
date: 2019-12-24T00:00:00+00:00
description: "Advent Calendar - December 24, 2019"
type: post
image: images/blog/2019-12-24.jpg
author: Jo Christian Oterhals
tags: ["Raku"]
---

[**Advent Calendar 2019**](/blog/advent-calendar-2019)
***

The gift is presented by **Jo Christian Oterhals**. Today he is talking about his solutions to **Task #1: Niven Numbers** of [**"The Weekly Challenge - 007"**](/blog/perl-weekly-challenge-007).

#### Print all the niven numbers from 0 to 50 inclusive, each on their own line. A niven number is a non-negative number that is divisible by the sum of its digits.

***

After a week’s hiatus I’ve returned to the **Perl Weekly Challenge**. This is the **seventh challenge** so far. As before there are **two excercises**. The first one is to calculate all **Niven Numbers** between **0** and **50**. Niven numbers are integers that are divisible by the sum of its digits. I.e. 47 is a niven number if 47 / (4 + 7) is an integer without remainder (it’s not, as the result is 4.2727; 48 is, as 48/(4+8) is 4).

These kinds of operations are called **modulo operations** or **mods**. Most programming languages use the operator **%** for this, so that you can check for this by testing whether 47 % (4 + 7) == 0. But **Raku** has an additional operator, a shorthand for the former, and is written as 47 %% (4 + 7). **%%** returns True or False and lets you ignore the == 0 part.

To find the individual digits of a number we use the **.comb method**. That returns a list with the individual digits (I’ve used **.comb** on earlier challenges as well, but then to divide strings into their individual characters). On the **combed list** we use something called a **reduction operator**, specifically **[+]**. What this does is that it loops through the list and adds all of the numbers within. Where you once would have written something like

    my $result = 0;
    $result += $_ for 1, 2, 3, 4, 5;
    say $result;

you can now do the same with a simple

    say [+] 1, 2, 3, 4, 5 .

There are lots of these reduction operators. They save time, so look into them.

Knowing these two things it becomes apparaent that calculating Niven numbers with **Raku** can be done with a simple and reasonably readable one-liner.

    .say if $_ %% [+] .comb for 0..50;

That’s it.

***
If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2019**](/blog/advent-calendar-2019)
