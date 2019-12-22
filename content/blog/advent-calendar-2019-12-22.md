---
title: "Advent Calendar - December 22, 2019"
date: 2019-12-22T00:00:00+00:00
description: "Advent Calendar - December 22, 2019"
type: post
image: images/blog/2019-12-22.jpg
author: JJ Merelo
tags: ["Raku"]
---

[**Advent Calendar 2019**](/blog/advent-calendar-2019)
***

The gift is presented by **JJ Merelo**. Today he is talking about his solutions to **Task #1: Replace character and count** of [**"The Weekly Challenge - 001"**](/blog/perl-weekly-challenge-001).

#### Write a script to replace the character ‘e’ with ‘E’ in the string ‘Perl Weekly Challenge’. Also print the number of times the character ‘e’ is found in the string.

***

I haven't looked at the other solutions that have been published, but I'm pretty sure they'll go along these lines, at least in **Raku**.

This was easy and almost straight out of the **Raku** documentation: [**StrDistance**](https://docs.raku.org/type/StrDistance).

    my $changes = (my $pwc = ‘Perl Weekly Challenge’) ~~ tr/e/E/;
    say $pwc;
    say +$changes;

It could be **golfed**, but also **ungolfed**. Basic trick here is that I'm defining a variable **$pwc** on the fly so that I can apply **tr** to it. I could use **.trans**, because in **Perl** there is always more than one way to do it, but then I couldn't get the secondary effect of counting changes. I can do that with **tr**, which has the (**Rakudo**-only, whatever that means, because there's only one **Perl 6** compiler, and that's **Rakudo**) nice secondary effect of returning an **StrDistance** object that can, in number context, return the number of changes. That's why we hold the changed string in **$pwc** and the change object in **$changes**. The last line is number-contextualized by putting a **+** in front.

***
If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2019**](/blog/advent-calendar-2019)
