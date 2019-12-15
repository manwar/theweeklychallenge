---
title: "Advent Calendar - December 15, 2019"
date: 2019-12-15T00:00:00+00:00
description: "Advent Calendar - December 15, 2019"
type: post
image: images/blog/2019-12-15.jpg
author: Javier Luque
tags: ["Perl", "Raku"]
---

[**Advent Calendar 2019**](/blog/advent-calendar-2019)
***

The gift is presented by [**Javier Luque**](/blog/meet-the-champion-037). Today he is talking about his solutions to **Task #2: Dynamic Variable** of [**"The Weekly Challenge - 031"**](/blog/perl-weekly-challenge-031).

#### Create a script to demonstrate creating dynamic variable name, assign a value to the variable and finally print the variable. The variable name would be passed as command line argument.

***

This one is a bit more difficult, creating a dynamic variable in **Perl** wasn’t a problem.

Doing it in **Raku** was a bit difficult But I learned quite a few things in **Raku** like it’s inability to declare variables at run-time. In the end I decided to use the **GLOBAL namespace** after a coworker showed it to me.

## PERL SOLUTION

```perl
#!/usr/bin/perl
use strict;
use warnings;
use feature qw/ say /;
no strict "refs";

our $test; # for testing this

# Randomly populate the dynamic variable
my $dynamic_variable_name = $ARGV[0];
my $random_value          = rand('99999999999');
$$dynamic_variable_name   = $random_value;

# Say random variable name and value
say 'Random variable name: ' .  $dynamic_variable_name;
say 'Random value: ' . ${$dynamic_variable_name};

# test like this: ch2.pl test
say 'Variable test is: ' .  $test
    if ($dynamic_variable_name eq 'test');
```

## OUTPUT

    Random variable name: test
    Random value: 19870290795.9904
    Variable test is: 19870290795.9904

## RAKU SOLUTION

```perl6
use v6.d;

sub MAIN (Str $variable) {
    # Randomly populate the random value
    my $random_value = (0..^9).roll(12).join;
    GLOBAL::{'$' ~ $variable} = $random_value;

    # Say dynamic variable name and random value
    say 'Dynamic variable name: ' ~  $variable;
    say 'Random value: ' ~ GLOBAL::{'$' ~ $variable};

    # test like this: perl6 ch2.p6 test
    say 'Variable test is: ' ~ $*test if ($variable eq 'test');
}
```

## OUTPUT

    Dynamic variable name: test
    Random value: 821038806157
    Variable test is: 821038806157

***
If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2019**](/blog/advent-calendar-2019)
