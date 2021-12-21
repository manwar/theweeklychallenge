---
title: "Advent Calendar - December 1, 2021"
date: 2021-12-01T00:00:00+00:00
description: "Advent Calendar - December 1, 2021."
type: post
image: images/blog/2021-12-01.jpg
author: Abigail
tags: ["Perl"]
---

## [**Advent Calendar 2021**](/blog/advent-calendar-2021)
### | **Day 1** | [**Day 2**](/blog/advent-calendar-2021-12-02) |
***

The gift is presented by `Abigail`. Today he is talking about his solution to [**"The Weekly Challenge - 095"**](/blog/perl-weekly-challenge-095). This is re-produced for **Advent Calendar 2021** from the original [**post**](https://programmingblog702692439.wordpress.com/2021/01/14/perl-weekly-challenge-95-part-1/) by `Abigail`.

***

<br>

## Task #1: Palindrome Number

You are given a number `$N`.

Write a script to figure out if the given number is a palindrome. Print `1` if true otherwise `0`.

***

<br>

### Overview

We could just use a one-liner (in Perl) `$_ eq reverse $_`, but there’s no fun in that. Instead, we’re upping the ante a little: we also want to check that we have a valid number.

What kind of number can be palindromes? Unsigned integers can: `121` and `7337` are examples. Signed numbers like `-645` or `+2300` cannot — they start with a sign (either `-` or `+`), but they don’t end with one, so they are not a palindrome.

Unsigned [**decimal numbers**](https://en.wikipedia.org/wiki/Decimal) can be palindromes though, `1.1` and `70.07` are examples of that.

We also want to accept numbers written in digits from other scripts (assuming the programming language we are using has build in Unicode support). That is, we want to accept `๑๒๓๒๑` and `๑๒.๒๑` (we still assume an ASCII dot is used as decimal dot).

Ideally, we want to reject number like `๑௧๓௧๑` — although it is a palindrome, and the string consists of nothing but digits, it is mixing digits from different scripts. But not many languages have easy support for this.

### Solutions

For our Perl solution, we construct a regular expression which recognizes palindromic numbers, where all the digits are in the same script.

We can define a numeric palindrome recursively:

    1) An empty string is a numeric palindrome, if it’s followed by a digit.
    2) A single digit is a numeric palindrome.
    3) A single dot is a numeric palindrome, if it’s followed by a digit.
    4) If a string which starts with a digit, ends with the same digit, and the remaining substring is a numberic palindrome, then the complete string is a numeric palindrome.

We can then write the pattern to match a numeric palindrome as follows:

```perl
    /^(*sr:            # Start a script run
        (?<PAL>        # Start a group named "PAL"
           \.?(?=\d)   # Empty string, or a dot, followed by a digit
         | \d          # Or a single digit
         | (\d)        # Or a digit
           (?&PAL)     # ... followed by a palindrome
           \g{-1}      # ... and the same digit again
        )              # End of the "PAL" group
     )$/x              # End of the script run.
```

[**Script runs**](https://perldoc.perl.org/perlre#Script-Runs) were introduced in Perl 5.28, and can be used to assert we don’t have mixing of scripts inside.

All that is left to do is match the input against the pattern above. Which can be seen in the full program below:

```perl
#!/opt/perl/bin/perl

use 5.032;

use strict;
use warnings;
no  warnings 'syntax';

use experimental 'signatures';
use experimental 'lexical_subs';

#
# Run as "perl ch-1.pl < input-file"
# with one or more possible palidromes, each on their own line.
#

#
# A recursive definition of a palindrome:
#      - Empty, but followed by a digit          (1)
#      - A decimal dot, but followed by a digit  (1)
#      - A single digit
#      - A digit, followed by a palindrome, followed by the same digit
#
# (1) The "followed by a digit" is to prevent an empty string, or a
#     a lone dot to be considered a palindrome.
#
# We also wrap the pattern into a script run assertion; this means we
# accept palindromes from different scripts -- but we don't allow mixing
# scripts.
#
# That is, we accept
#      "\N{TAMIL DIGIT ONE}\N{TAMIL DIGIT TWO}\N{TAMIL DIGIT ONE}"
#
# But not
#      "\N{TAMIL DIGIT ONE}\N{THAI DIGIT TWO}\N{TAMIL DIGIT ONE}"
#
# As the latter mixes digits from two different scripts.
#

binmode *STDIN, ':utf8';
say /^(*sr: (?<PAL> \.?(?=\d) | \d | (\d) (?&PAL) \g{-1}))$/x ? 1 : 0 while <>;

__END__
```
***
If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2021**](/blog/advent-calendar-2021)
