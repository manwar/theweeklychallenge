---
title: "Advent Calendar - December 3, 2021"
date: 2021-12-03T00:00:00+00:00
description: "Advent Calendar - December 3, 2021."
type: post
image: images/blog/2021-12-03.jpg
author: Arne Sommer
tags: ["Perl","Raku"]
---

## [**Advent Calendar 2021**](/blog/advent-calendar-2021)
### | [**Day 2**](/blog/advent-calendar-2021-12-02) | **Day 3** | [**Day 4**](/blog/advent-calendar-2021-12-04) |
***

The gift is presented by [**Arne Sommer**](/blog/meet-the-champion-019). Today he is talking about his solution to [**"The Weekly Challenge - 097"**](/blog/perl-weekly-challenge-097). This is re-produced for **Advent Calendar 2021** from the original [**post**](https://raku-musings.com/caesarean-substrings.html) by `Arne Sommer`.

***

<br>

## Task #1: Caesar Cipher

You are given string `$S` containing alphabets `A..Z` only and a number `$N`.

Write a script to encrypt the given string `$S` using `Caesar Cipher` with left shift of size `$N`.

***

<br>

The expression `alphabets A..Z only` is wrong, as the example has several spaces as well. So they should be allowed.

File: caesar-cipher

```perl6
#! /usr/bin/env raku

subset AZ-space of Str where /^ <[ A .. Z \s ]>+ $/;   # [1]
subset PosInt of Int where -25 <= $_ <= 25;            # [2]

unit sub MAIN (AZ-space $S = 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG',
               PosInt $N = 3);                         # [3]

say $S.comb.map({ caesar($_, $N) }).join;              # [4]

sub caesar ($char, $shift)
{
  return $char if $char eq " ";                        # [5]

  my $code = $char.ord;                                # [6]

  $code -= $shift;                                     # [7]

  $code += 26 if $code < 65;  # 'A'                    # [8]
  $code -= 26 if $code > 90;  # 'Z'                    # [8a]

  return $code.chr;                                    # [9]
}
```

<br>

#### [1] The allowed characters (or «domain specific alphabet»).

#### [2] The challenge says that the left shift value is a number. It does not make sense to allow anything other than integers, so I restrict the value to that type. Negative values should be ok, and they mean a right shift value (instead of left).

#### [3] The arguments, with default values as given in the challenge.

#### [4] Split the string into single charactes (with comb, apply the «caesar» function on each one (with map), join the characters together as a string again (with join), and print it.

#### [5] Do not shift spaces.

#### [6] Get the character codepoint.

#### [7] Subtract the shift value (as we shift to the left, or lower in the alphabet).

#### [8] Wrap around if we shift out of the A-Z range, here lower - or higher in [8b]

#### [9] Get the character with the specified codepoint.

<br>

See [**docs.raku.org/routine/ord**](https://docs.raku.org/routine/ord) for more information about ord.

See [**docs.raku.org/routine/chr**](https://docs.raku.org/routine/chr)  for more information about chr.

## Running it:

```perl6
$ ./caesar-cipher 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG' 3
QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD

$ ./caesar-cipher 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG' -3
WKH TXLFN EURZQ IRA MXPSV RYHU WKH ODCB GRJ

$ ./caesar-cipher 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG' 13
GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT

$ ./caesar-cipher 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG' -13
GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT
```

<br>

Raku has a `ords` variant that takes a whole string, and not a single character as `ord`. And `chrs` which takes an array of codepoints and turns them into a string, and not a single codepoint to a character as chr. Let us use them to write a shorter program:

File: caesar-cipher-map

<br>

```perl6
#! /usr/bin/env raku

subset AZ-space of Str where /^ <[ A .. Z \s ]>+ $/;
subset PosInt of Int where -25 <= $_ <= 25;

unit sub MAIN (AZ-space $S = 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG',
               PosInt $N = 3);

say caesar($S, $N);

sub caesar ($string, $shift)
{
  return $string.ords.map({$_ == 32 ?? 32 !! (($_ - $shift - 65) % 26 ) + 65}).chrs;
    # #################### # 1a ############# ############ # 1b  # 1c ## 1d
}
```

<br>

[1] We use `map` to change the individual codepoints. We let the spaces with codepoint 32 alone [1a]. Every other value we reduce to a number between 0 and 25 (by subtracting the codepoint of the first letter (A: 65) and the shift value [1b]. The modulo operator (`%`) takes care of negative values for us, doing the right thing. E.g. `-2 % 26 -> 24` [1c]. Then we add adjust the values up to where they should be (A to Z) [1d] before we turn the whole array of codepints into a string.

<br>

See [**docs.raku.org/routine/ords**](https://docs.raku.org/routine/ords) for more information about `ords`.

See [**docs.raku.org/routine/chrs**](https://docs.raku.org/routine/chrs) for more information about `chrs`.

Running it gives the same result as before:

```perl6
$ ./caesar-cipher-map 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG' 3
QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD

$ ./caesar-cipher-map 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG' -3
WKH TXLFN EURZQ IRA MXPSV RYHU WKH ODCB GRJ

$ ./caesar-cipher-map 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG' 13
GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT

$ ./caesar-cipher-map 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG' -13
GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT
```

<br>

## A Perl Version

This is straight forward translation of the first Raku version.

File: caesar-cipher-perl

```perl
#! /usr/bin/env perl

use strict;
use warnings;
use feature 'say';
use feature 'signatures';

no warnings "experimental::signatures";

my $S = shift(@ARGV) // 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG';

die "Illegal characters" unless $S =~ /^[A-Z\s]+$/;

my $N = shift(@ARGV) // 3;

die "Illegal shift $N" if $N !~ /^\-?\d+$/ || $N < -25 || $N > 25;

say join("", map { caesar($_, $N) } split(//, $S));

sub caesar ($char, $shift)
{
  return $char if $char eq " ";

  my $code = ord($char);

  $code -= $shift;

  $code += 26 if $code < 65;  # 'A'
  $code -= 26 if $code > 90;  # 'Z'

  return chr($code);
}
```

<br>

Running it gives the same result as the Raku version:

<br>

```perl
$ ./caesar-cipher-perl 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG' 3
QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD

$ ./caesar-cipher-perl 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG' -3
WKH TXLFN EURZQ IRA MXPSV RYHU WKH ODCB GRJ

$ ./caesar-cipher-perl 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG' 13
GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT

$ ./caesar-cipher-perl 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG' -13
GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT
```

***
If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2021**](/blog/advent-calendar-2021)
