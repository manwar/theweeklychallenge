---
title: "Advent Calendar - December 10, 2025"
date: 2025-12-10T00:00:00+00:00
description: "Advent Calendar - December 10, 2025."
type: post
image: images/blog/2025-12-10.jpg
author: W. Luis Mochan
tags: ["Perl"]
---

## [**Advent Calendar 2025**](/blog/advent-calendar-2025)
### | &nbsp; [**Day 9**](/blog/advent-calendar-2025-12-09) &nbsp; | &nbsp; **Day 10** &nbsp; | &nbsp; [**Day 11**](/blog/advent-calendar-2025-12-11) &nbsp; |
***

The gift is presented by `W. Luis Mochan`. Today he is talking about his solutioni to [**The Weekly Challenge - 312**](/blog/perl-weekly-challenge-312). This is re-produced for `Advent Calendar 2025` from the original [**post**](https://wlmb.github.io/2025/03/09/PWC312/).

***

<br>

## Task 1: Minimum Time

You are given a typewriter with lowercase english letters a to z arranged in a circle.

Typing a character takes 1 sec. You can move pointer one character clockwise or anti-clockwise.

The pointer initially points at a.

Write a script to return minimum time it takes to print the given string.

<br>

## Example 1

    Input: $str = "abc"
    Output: 5

    The pointer is at 'a' initially.
    1 sec - type the letter 'a'
    1 sec - move pointer clockwise to 'b'
    1 sec - type the letter 'b'
    1 sec - move pointer clockwise to 'c'
    1 sec - type the letter 'c'

## Example 2

    Input: $str = "bza"
    Output: 7

    The pointer is at 'a' initially.
    1 sec - move pointer clockwise to 'b'
    1 sec - type the letter 'b'
    1 sec - move pointer anti-clockwise to 'a'
    1 sec - move pointer anti-clockwise to 'z'
    1 sec - type the letter 'z'
    1 sec - move pointer clockwise to 'a'
    1 sec - type the letter 'a'

## Example 3

    Input: $str = "zjpc"
    Output: 34

<br>

I split the input strings into characters and map `a-z` to the numbers `0-25`. The number of steps `$s` to reach a letter `$y` starting from letter `$x` going clockwise is then `$s=$y-$x` if `$y>=$x`. If `$y<$x` I can give a full turn taking `26` steps and then subtract the distance `|$y-$x|=$x-$y`, so I would have to walk `$s=26+$x-$y` steps. Both results can be summarized as `$s=($y-$x)%26` using modular arithmetic. Similarly, to reach `$y` from `$x` going anticlockwise I just change the sign, `$s=($x-$y)%26`. I can compute both numbers and choose the smallest one. There is an additional operation for printing each letter, so I have to add to the total number of steps the length of the string. This yields a 1.5-liner.

<br>

```perl
perl -MList::Util=min -E '
for(@ARGV){$s=length;$c=0;($d,$c)=($c-$_,$_),$s+=min($d%26,-$d%26)
for map{(ord)-97}split "";say "$_ -> $s"}
' abc bza zjpc
```

<br>

## Results:

<br>

```bash
abc -> 5
bza -> 7
zjpc -> 34
```

<br>

The full code is:

<br>

```perl
# Perl weekly challenge 312
# Task 1:  Minimum Time
#
# See https://wlmb.github.io/2025/03/09/PWC312/#task-1-minimum-time
use v5.36;
use List::Util qw(min);
die <<~"FIN" unless @ARGV;
    Usage: $0 S1 S2...
    to find the time required to print the strings S1 S2...
    using a daisy typerwriter
FIN
my $ord_a = ord("a");
my $Nletters=1 + ord("z") - $ord_a;
for(@ARGV){
    my $time=length;
    my $current=0;
    my $difference;
    ($difference, $current) =($current-$_, $_),
        $time += min($difference % $Nletters, -$difference % $Nletters)
        for map {(ord)-$ord_a } split "";
    say "$_ -> $time"}
```

<br>

## Example:

<br>

```bash
./ch-1.pl abc bza zjpc
```

<br>

## Results:

<br>

```bash
abc -> 5
bza -> 7
zjpc -> 34
```

<br>

## Task 2: Balls and Boxes

There are $n balls of mixed colors: red, blue or green. They are all distributed in 10 boxes labelled 0-9.

You are given a string describing the location of balls.

Write a script to find the number of boxes containing all three colors. Return 0 if none found.

<br>

## Example 1

    Input: $str = "G0B1R2R0B0"
    Output: 1

    The given string describes there are 5 balls as below:
    Box 0: Green(G0), Red(R0), Blue(B0) => 3 balls
    Box 1: Blue(B1) => 1 ball
    Box 2: Red(R2) => 1 ball

## Example 2

    Input: $str = "G1R3R6B3G6B1B6R1G3"
    Output: 3

    The given string describes there are 9 balls as below:
    Box 1: Red(R1), Blue(B1), Green(G1) => 3 balls
    Box 3: Red(R3), Blue(B3), Green(G3) => 3 balls
    Box 6: Red(R6), Blue(B6), Green(G6) => 3 balls

## Example 3

    Input: $str = "B3B2G1B3"
    Output: 0

    Box 1: Green(G1) => 1 ball
    Box 2: Blue(B2)  => 1 ball
    Box 3: Blue(B3)  => 2 balls

<br>

I build an array of boxes containing a hash that maps colors to number of balls. Then I map each box to a boolean value, `true (1)` if all colors have been initialized, and I sum those values over all boxes. The result fits a 1.5-liner.

<br>

## Examples:

<br>

```bash
perl -MList::Util=all,sum0 -E '
for(@ARGV){my @b;for my($c,$b)(split ""){++$b[$b]{$c}}say "$_ -> ",sum0
map{all{$_}@{$b[$_]}{R,G,B}}(0..@b-1);}
' G0B1R2R0B0 G1R3R6B3G6B1B6R1G3 B3B2G1B3
```

<br>

## Results:

<br>

```bash
G0B1R2R0B0 -> 1
G1R3R6B3G6B1B6R1G3 -> 3
B3B2G1B3 -> 0
```

<br>

The full code is

<br>

```perl
# Perl weekly challenge 312
# Task 2:  Balls and Boxes
#
# See https://wlmb.github.io/2025/03/09/PWC312/#task-2-balls-and-boxes
use v5.40;
use List::Util qw(sum0 all);
die <<~"FIN" unless @ARGV;
    Usage: $0 S1 S2...
    to count boxes with balls of all colors, where each strings Sn is of the form
    P1P2... with each pair Pj of the form Cb with C a color (R, G or B) and b a
    box number (0..9), meaning there is a ball of color C in box b.
FIN
for(@ARGV){
    try {
        die "Wrong format: $_" unless /^([RGB]\d)*$/;
        my @boxes;
        for my($color, $box) (split ""){
            ++$boxes[$box]{$color};
        }
        say "$_ -> ",sum0 map{all{$_}@{$boxes[$_]}{qw(R G B)}}(0..@boxes-1);
    } catch($e) {
        say $e;
    }
}
```

<br>

## Example:

<br>

```bash
./ch-2.pl G0B1R2R0B0 G1R3R6B3G6B1B6R1G3 B3B2G1B3
```

<br>

## Results:

<br>

```bash
G0B1R2R0B0 -> 1
G1R3R6B3G6B1B6R1G3 -> 3
B3B2G1B3 -> 0
```

<br>

***

If you have any suggestion then please do share with us **<perlweeklychallenge@yahoo.com>**.

| &nbsp; [**Advent Calendar 2025**](/blog/advent-calendar-2025) &nbsp; |
