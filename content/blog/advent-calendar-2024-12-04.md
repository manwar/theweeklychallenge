---
title: "Advent Calendar - December 4, 2024"
date: 2024-12-04T00:00:00+00:00
description: "Advent Calendar - December 4, 2024."
type: post
image: images/blog/2024-12-04.jpg
author: Arne Sommer
tags: ["Raku"]
---

## [**Advent Calendar 2024**](/blog/advent-calendar-2024)
### | &nbsp; [**Day 3**](/blog/advent-calendar-2024-12-03) &nbsp; | &nbsp; **Day 4** &nbsp; | &nbsp; [**Day 5**](/blog/advent-calendar-2024-12-05) &nbsp; |
***

The gift is presented by `Arne Sommer`. Today he is talking about his solution to [**The Weekly Challenge - 254**](/blog/perl-weekly-challenge-254). This is re-produced for `Advent Calendar 2024` from the original [**post**](https://raku-musings.com/reverse-power.html).

***

<br>

## Reverse Power
***

<br>

### Challenge #254.1: Three Power
***

<br>

    You are given a positive integer, $n.

    Write a script to return true if the given integer is a power of three otherwise return false.

<br>

#### File: three-power
***

```perl
#! /usr/bin/env raku

unit sub MAIN ($n is copy where $n ~~ UInt, :v($verbose));  # [1]

while $n > 3                                                # [2]
{
  print ": $n / 3 -> " if $verbose;
  $n /= 3;                                                  # [3]
  say $n if $verbose;

  last if $n != $n.Int;                                     # [4]
}

say $n == 0|3 ?? 'true' !! 'false';                         # [5]
```

<br>

`[1]` Note the is copy so that we can change the value later on (in [3]). Also note that we check the value against the Unsigned Int type UInt instead of enforcing the type on the variable, as the value in $n can become a non-integer (in [3]).

`[2]` As long as we have more 3s to extract (by factoring them out).

`[3]` Divide the value by three, and assign the value back. This may result in a non-integer.

`[4]` This check will bail out of the loop if we got a non-integer value. This will spare us for a lot of loop iterations in the worst case, at the cost of adding code (and time). Feel free to comment it out.

`[5]` Are we left with 3 (or the special case of 0, for the input value 0), if so we have succeeded and print «true». If not, print «false».

Running it:

<br>

```perl
$ ./three-power 27
true

$ ./three-power 0
true

$ ./three-power 6
false
```

<br>

Looking good.

With verbose mode:

<br>

```perl
$ ./three-power -v 27
: 27 / 3 -> 9
: 9 / 3 -> 3
true

$ ./three-power -v 0
true

$ ./three-power -v 6
: 6 / 3 -> 2
false
```

<br>

Let us try an arbitrary largish number. First with the check in [4] intact, and then without it:

<br>

```perl
$ ./three-power -v 999
: 999 / 3 -> 333
: 333 / 3 -> 111
: 111 / 3 -> 37
: 37 / 3 -> 12.333333
false

$ ./three-power -v 999
: 999 / 3 -> 333
: 333 / 3 -> 111
: 111 / 3 -> 37
: 37 / 3 -> 12.333333
: 12.333333 / 3 -> 4.111111
: 4.111111 / 3 -> 1.37037
false
```

<br>

Why restrict ourselves with the power of 3?

#### File: multi-power
***

```perl
#! /usr/bin/env raku

unit sub MAIN ($n is copy where $n ~~ UInt,
               UInt :p(:$power) where $power > 0 = 3,
               :v(:$verbose));

while $n > $power
{
  print ": $n / $power -> " if $verbose;
  $n /= $power;
  say $n if $verbose;
  last if $n != $n.Int;
}

say $n == 0|$power ?? 'true' !! 'false';
```

<br>

Specify the power as e.g. `-p=2` or `-power=2`, if the `default 3` does not suit you.

<br>

```perl
$ ./multi-power -power=2 512
true

$ ./multi-power -power=2 -v 512
: 512 / 2 -> 256
: 256 / 2 -> 128
: 128 / 2 -> 64
: 64 / 2 -> 32
: 32 / 2 -> 16
: 16 / 2 -> 8
: 8 / 2 -> 4
: 4 / 2 -> 2
true
```

<br>

### Challenge #254.2: Reverse Vowels
***

<br>

    You are given a string, $s.

    Write a script to reverse all the vowels (a, e, i, o, u) in the given string.

<br>

#### File: reverse-vowels
****

```perl
#! /usr/bin/env raku

unit sub MAIN ($s, :v(:$verbose));                   # [1]

my @letters = $s.comb;                               # [2]
my @vowels  = @letters.grep: * ~~ /<[aeiouAEIOU]>/;  # [3]
my @reverse = @vowels.reverse;                       # [4]

if $verbose
{
  say ":Letters: { @letters.join(",") }";
  say ":Vowels: { @vowels.join(",") }";
  say ":Reverse: { @reverse.join(",") }";
}

my @output = @letters.map({ m:i/<[aeiou]>/ ?? @reverse.shift !! $_ }); # [5]

say @output.join;                                                      # [6]
```

<br>

`[1]` A string of arbitrary size (and content).

`[2]` Get the individual letters.

`[3]` Get the vowels. Note the «ignore case» :i modifier, instead of an explicit list of uppercase vowels in the regex.

`[4]` Reverse the list of vowels.

`[5]` Map each letter in the input (the list) to either itself (non-vowel) or the first remaing (unused) reversed list of vowels.

`[6]` Print the result as a single string.

Running it:

<br>

```perl
$ ./reverse-vowels Raku
Ruka

$ ./reverse-vowels Perl
Perl

$ ./reverse-vowels Julia
Jaliu

$ ./reverse-vowels Uiua
auiU
```

<br>

The last one is not as specified in the challenge, but let us have a go at verbose mode before looking into that.

<br>

```perl
$ ./reverse-vowels -v Raku
:Letters: R,a,k,u
:Vowels: a,u
:Reverse: u,a
Ruka

$ ./reverse-vowels -v Perl
:Letters: P,e,r,l
:Vowels: e
:Reverse: e
Perl

$ ./reverse-vowels -v Julia
:Letters: J,u,l,i,a
:Vowels: u,i,a
:Reverse: a,i,u
Jaliu

$ ./reverse-vowels -v Uiua
:Letters: U,i,u,a
:Vowels: U,i,u,a
:Reverse: a,u,i,U
auiU
```

<br>

Ok. Let us try a palindrome:

<br>

```perl
$ ./reverse-vowels "never odd or even"
never odd or even

$ ./reverse-vowels -v "never odd or even"
:Letters: n,e,v,e,r, ,o,d,d, ,o,r, ,e,v,e,n
:Vowels: e,e,o,o,e,e
:Reverse: e,e,o,o,e,e
never odd or even

$ ./reverse-vowels "NEVER ODD or even"
NeVeR oDD Or EvEn

$ ./reverse-vowels -v "NEVER ODD or even"
:Letters: N,E,V,E,R, ,O,D,D, ,o,r, ,e,v,e,n
:Vowels: E,E,O,o,e,e
:Reverse: e,e,o,O,E,E
NeVeR oDD Or EvEn
```

<br>

Then we can have a go at the case of the wrong case, so to speak...

#### File: reverse-vowels-case
***

<br>

```perl
#! /usr/bin/env raku

unit sub MAIN ($s, :v(:$verbose));

my @letters = $s.comb;
my @vowels  = @letters.grep: * ~~ /<[aeiouAEIOU]>/;
my @reverse = @vowels.reverse;

if $verbose
{
  say ":Letters: { @letters.join(",") }";
  say ":Vowels: { @vowels.join(",") }";
  say ":Reverse: { @reverse.join(",") }";
}

my @output = @letters.map({
           if    /<[aeiou]>/ { @reverse.shift.lc; } # [1]
           elsif /<[AEIOU]>/ { @reverse.shift.uc; } # [2]
           else             { $_;                }
             });

say @output.join;
```

<br>

`[1]` If the original vowel is lowercase, apply lc to force the replacement vowel to lowercase as well.

See [**docs.raku.org/routine/lc**](https://docs.raku.org/routine/lc) for more information about `lc`.

`[2]` If the original vowel is uppercase, apply uc to force the replacement vowel to uppercase as well.

 See [**docs.raku.org/routine/uc**](https://docs.raku.org/routine/uc) for more information about `uc`.

And magically nothing seems to happen...

<br>

```perl
$ ./reverse-vowels-case "NEVER ODD or even"
NEVER ODD or even
```

<br>

Verbose mode will tell you otherwise:

<br>

```perl
$ ./reverse-vowels-case -v "NEVER ODD or even"
:Letters: N,E,V,E,R, ,O,D,D, ,o,r, ,e,v,e,n
:Vowels: E,E,O,o,e,e
:Reverse: e,e,o,O,E,E
NEVER ODD or even
```

<br>

Another one:

<br>

```perl
$ ./reverse-vowels-case -v "THIS IS not a test"
:Letters: T,H,I,S, ,I,S, ,n,o,t, ,a, ,t,e,s,t
:Vowels: I,I,o,a,e
:Reverse: e,a,o,I,I
THES AS not i tist
```

<br>

Ind that's at. (Pun intended)

<br>

***

If you have any suggestion then please do share with us **<perlweeklychallenge@yahoo.com>**.

| &nbsp; [**Advent Calendar 2024**](/blog/advent-calendar-2024) &nbsp; |
