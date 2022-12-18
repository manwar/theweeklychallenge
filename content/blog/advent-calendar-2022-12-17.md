---
title: "Advent Calendar - December 17, 2022"
date: 2022-12-17T00:00:00+00:00
description: "Advent Calendar - December 17, 2022."
type: post
image: images/blog/2022-12-17.jpg
author: Laurent Rosenfeld
tags: ["Perl", "Raku"]
---

## [**Advent Calendar 2022**](/blog/advent-calendar-2022)
### | &nbsp; [**Day 16**](/blog/advent-calendar-2022-12-16) &nbsp; | &nbsp; **Day 17** &nbsp; | &nbsp; [**Day 18**](/blog/advent-calendar-2022-12-18) &nbsp; |
***

The gift is presented by `Laurent Rosenfeld`. Today he is talking about his solution to [**"The Weekly Challenge - 194"**](/blog/perl-weekly-challenge-194). This is re-produced for **Advent Calendar 2022** from the original [**post**](https://blogs.perl.org/users/laurent_r/2022/12/perl-weekly-challenge-194-digital-clock-and-frequency-equalizer.html) by him.

***

<br>

These are some answers to the `Week 194` of the [**Perl Weekly Challenge**](https://perlweeklychallenge.org/blog/perl-weekly-challenge-194/) organized by [**Mohammad S. Anwar**](https://blogs.perl.org/users/mohammad_s_anwar/).

`Spoiler Alert:` This weekly challenge deadline is due in a few days from now (on `December 11, 2022 at 23:59`). This blog post offers some solutions to this challenge. Please don’t read on if you intend to complete the challenge on your own.

<br>

## Task 1: Digital Clock

<br>

You are given time in the format `hh:mm` with one missing digit.

Write a script to find the highest digit between `0-9` that makes it valid time.

<br>

#### Example 1

    Input: $time = '?5:00'
    Output: 1

    Since 05:00 and 15:00 are valid time and no other digits can fit in the missing place.

#### Example 2

    Input: $time = '?3:00'
    Output: 2

#### Example 3

    Input: $time = '1?:00'
    Output: 9

#### Example 4

    Input: $time = '2?:00'
    Output: 3

#### Example 5

    Input: $time = '12:?5'
    Output: 5

#### Example 6

    Input: $time =  '12:5?'
    Output: 9

<br>

The task is quite easy, but a little painful because of the number of cases to be tested.

<br>

## Digital Clock in Raku

<br>

The `highest-digit` subroutine splits the input qstring into the hour and minute component and figures out in which component the missing digit (the question mark) is.

If the missing digit is in the `hour component`, and if the first digit is missing, then the subroutine returns `1` if the second digit is more than `3` and `2` otherwise. If the second digit is missing, then it returns `3` if the first digit is `2`, and `9` otherwise.

If the missing digit is in the `minute component`, then the suboutine returns `5` if it is the first digit that is missing, and `9` if it is the second digit.

<br>

```perl
sub highest-digit ($in) {
    my ($h, $m) = $in.split(/\:/);
    # say $h, " ", $m;
    if $h ~~ /\?/ {
        my ($h1, $h2) = $h.comb('');
        if $h1 eq '?' {
            return $h2 > 3 ?? 1 !! 2;
        } elsif $h2 eq '?' {
            return $h1 == 2 ?? 3 !! 9;
        }
    } elsif $m ~~ /\?/ {
        my ($m1, $m2) = $m.comb('');
        return 5 if $m1 eq '?';
        return 9 if $m2 eq '?';
    }
}

for <?5:00 ?3:00 1?:00 2?:00 12:?5 12:5? 14:?9> -> $t {
    say "$t => ", highest-digit($t);
}
```

<br>

This program displays the following output:

<br>

```perl
$ raku ./highest-digit.raku
?5:00 => 1
?3:00 => 2
1?:00 => 9
2?:00 => 3
12:?5 => 5
12:5? => 9
14:?9 => 5
```

<br>

## Digital Clock in Perl

<br>

This is a port to `Perl` of the `Raku` program above. Please refer to the `Raku` section for explanations on the way the program works.

<br>

```perl
use strict;
use warnings;
use feature qw/say/;

sub highest_digit  {
    my ($h, $m) = split /\:/, $_[0];
    # say $h, " ", $m;
    if ($h =~ /\?/) {
        my ($h1, $h2) = split //, $h;
        if ($h1 eq '?') {
            return $h2 > 3 ? 1 : 2;
        } elsif ($h2 eq '?') {
            return $h1 == 2 ? 3 : 9;
        }
    } elsif ($m =~ /\?/) {
        my ($m1, $m2) = split //, $m;
        return 5 if $m1 eq '?';
        return 9 if $m2 eq '?';
    }
}

for my $t (qw<?5:00 ?3:00 1?:00 2?:00 12:?5 12:5? 14:?9>) {
    say "$t => ", highest_digit($t);
}
```

<br>

This program displays the following output:

<br>

```perl
$ perl ./highest-digit.pl
?5:00 => 1
?3:00 => 2
1?:00 => 9
2?:00 => 3
12:?5 => 5
12:5? => 9
14:?9 => 5
```

<br>

## Task 2: Frequency Equalizer

<br>

You are given a string made of alphabetic characters only, `a-z`.

Write a script to determine whether removing only one character can make the frequency of the remaining characters the same.

<br>

#### Example 1:

    Input: $s = 'abbc'
    Output: 1 since removing one alphabet 'b' will give us 'abc' where each alphabet frequency is the same.

#### Example 2:

    Input: $s = 'xyzyyxz'
    Output: 1 since removing 'y' will give us 'xzyyxz'.

#### Example 3:

    Input: $s = 'xzxz'
    Output: 0 since removing any one alphabet would not give us string with same frequency alphabet.

<br>

Basically, to answer the question, we need to find out whether all the characters have the same frequency, except for one which occurs once more than the others.

<br>

## Frequency Equalizer in Raku

<br>

We first build the `%histo` histogram of the letters of the input string. Then we store the sorted values (ascending order) in the `@frequencies` array and check whether all the values except the last (the largest) are equal and the last value is one more than the others.

<br>

```perl
sub remove-one ($st) {
    my %histo;
    %histo{$_}++ for $st.comb;
    my @frequencies = %histo.values.sort;
    my $largest = @frequencies.pop;
    return 1 if $largest - 1 == @frequencies.all;
    return 0;
}
for <abbc xyzyyxz xzxz> -> $test {
    say "$test.fmt("%-10s") => ", remove-one($test);
}
```

<br>

This program displays the following output:

<br>

```perl
$ raku ./freq-analyzer.raku
abbc       => 1
xyzyyxz    => 1
xzxz       => 0
```

<br>

## Frequency Equalizer in Perl

<br>

We first build the `%histo` histogram of the letters of the input string. Then we store the sorted values (descending order) in the `@frequencies` array and check whether all the values except the first (the largest) are equal and the first value is one more than the others. Note that we cannot use an all junction in `Perl`, so we simply loop over the values (except the first) to check that they are all equal

<br>

```perl
use strict;
use warnings;
use feature qw/say/;

sub remove_one {
    my %histo;
    $histo{$_}++ for split //, shift;
    my @frequencies = sort { $b <=> $a } values %histo;
    my $largest = shift @frequencies;
    for my $count (@frequencies) {
        return 0 if $largest - 1 != $count;
    }
    return 1;
}
for my $test (<abbc xyzyyxz xzxz>) {
    printf "%-10s => %d\n", $test, remove_one($test);
}
```

<br>

This program displays the following output:

<br>

```perl
$ perl ./freq-analyzer.pl
abbc       => 1
xyzyyxz    => 1
xzxz       => 0
```

<br>

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

| &nbsp; [**Advent Calendar 2022**](/blog/advent-calendar-2022) &nbsp; |
