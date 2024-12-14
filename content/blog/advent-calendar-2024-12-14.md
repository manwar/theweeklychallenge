---
title: "Advent Calendar - December 14, 2024"
date: 2024-12-14T00:00:00+00:00
description: "Advent Calendar - December 14, 2024."
type: post
image: images/blog/2024-12-14.jpg
author: W. Luis Mochan
tags: ["Perl"]
---

## [**Advent Calendar 2024**](/blog/advent-calendar-2024)
### | &nbsp; [**Day 13**](/blog/advent-calendar-2024-12-13) &nbsp; | &nbsp; **Day 14** &nbsp; |
***

The gift is presented by `W. Luis Mochan`. Today he is talking about his solution to [**The Weekly Challenge - 264**](/blog/perl-weekly-challenge-264). This is re-produced for `Advent Calendar 2024` from the original [**post**](https://wlmb.github.io/2024/04/12/PWC264/).

***

<br>

## Perl Weekly Challenge 264
***

<br>

### Task #1: Greatest English Letter
***

<br>

    You are given a string, $str, made up of only alphabetic characters [a..zA..Z].

    Write a script to return the greatest english letter in the given string.

        A letter is greatest if it occurs as lower and upper case.
        Also letter ‘b’ is greater than ‘a’ if ‘b’ appears after ‘a’
        in the English alphabet.

<br>

First I count the times each letter appears. Then I grep those letters that appear in both `upper` and `lower` case and I choose the `maximum` with `maxstr` from `List::Utils`. The code fits a one-liner.

<br>

### Example 1:
***

<br>

```perl
$ perl -MList::Util=maxstr -E '
  $s{$_}++ for split "", $i=shift; say "$i -> ",  maxstr grep {$_ eq uc && $s{lc $_}}keys %s;
' PeRlwEeKLy
PeRlwEeKLy -> L
```

<br>

### Example 2:
***

<br>

```perl
$ perl -MList::Util=maxstr -E '
  $s{$_}++ for split "", $i=shift; say "$i -> ",  maxstr grep {$_ eq uc && $s{lc $_}}keys %s;
' ChaLlenge
ChaLlenge -> L
$
```

<br>

### Example 3:
***

<br>

```perl
$ perl -MList::Util=maxstr -E '
  $s{$_}++ for split "", $i=shift; say "$i -> ",  maxstr grep {$_ eq uc && $s{lc $_}}keys %s;
' The
The ->
```

<br>

The full code only adds a few checks (`ch-1.pl`).

<br>

```perl
# Perl weekly challenge 264
# Task 1:  Greatest English Letter
#
# See https://wlmb.github.io/2024/04/12/PWC264/#task-1-greatest-english-letter
use v5.36;
use List::Util qw(maxstr);
die <<~"FIN" unless @ARGV;
    Usage: $0 S1 [S2...]
    to find the greatest English letter of each string S1, S2...
    FIN
for(@ARGV){
    warn("Only alphabetical characters allowed a..z A..Z"), next unless /^[a-zA-Z]+$/;
    my %seen;
    $seen{$_}++ for split "";
    say "$_ -> ",  maxstr grep {$_ eq uc && $seen{lc $_}}keys %seen;
}
```

<br>

### Example:
***

<br>

```perl
$ perl ch-1.pl PeRlwEeKLy ChaLlenge The
PeRlwEeKLy -> L
ChaLlenge -> L
The ->
```

<br>

### Task #2: Target Array
***

<br>

    You are given two arrays of integers, @source and @indices. The @indices can only contains integers 0 <= i < size of @source.

    Write a script to create target array by insert at index $indices[i] the value $source[i].

<br>

This may be solved by `splicing` the values into place. I assume the inputs are the source and the indices as space separated arrays. The result fits a oneliner.

<br>

### Example 1:
***

<br>

```perl
$ perl -E '
  @s=split " ", shift; @i=split " ", shift; splice @o, $i[$_],0,$s[$_] for 0..@i-1; say "s=(@s), i=(@i) -> (@o)";
' "0 1 2 3 4" "0 1 2 2 1"
s=(0 1 2 3 4), i=(0 1 2 2 1) -> (0 4 1 3 2)
```

<br>

### Example 2:
***

<br>

```perl
$ perl -E '
  @s=split " ", shift; @i=split " ", shift; splice @o, $i[$_],0,$s[$_] for 0..@i-1; say "s=(@s), i=(@i) -> (@o)";
' "1 2 3 4 0" "0 1 2 3 0"
s=(1 2 3 4 0), i=(0 1 2 3 0) -> (0 1 2 3 4)
```

<br>

### Example 3:
***

<br>

```perl
$ perl -E '
  @s=split " ", shift; @i=split " ", shift; splice @o, $i[$_],0,$s[$_] for 0..@i-1; say "s=(@s), i=(@i) -> (@o)";
' "1" "0"
s=(1), i=(0) -> (1)
```

<br>

The full code just adds some checks (`ch-2.pl`).

<br>

```perl
# Perl weekly challenge 264
# Task 2:  Target Array
#
# See https://wlmb.github.io/2024/04/12/PWC264/#task-2-target-array
use v5.36;
use experimental qw(for_list);
LOOP: for my ($source, $indices)(@ARGV){
    my @source=split " ", $source;
    my @indices=split " ", $indices;
    my @output;
    for(0..@indices-1){
      warn("Index out of range"), next LOOP unless 0 <= $_ < @source;
      splice @output, $indices[$_],0,$source[$_];
    }
    say "source=(@source), indices=(@indices) -> (@output)";
}
```

<br>

### Example:
***

<br>

```perl
$ perl ch-2.pl "0 1 2 3 4" "0 1 2 2 1" "1 2 3 4 0" "0 1 2 3 0" "1" "0"
source=(0 1 2 3 4), indices=(0 1 2 2 1) -> (0 4 1 3 2)
source=(1 2 3 4 0), indices=(0 1 2 3 0) -> (0 1 2 3 4)
source=(1), indices=(0) -> (1)
```

<br>

***

If you have any suggestion then please do share with us **<perlweeklychallenge@yahoo.com>**.

| &nbsp; [**Advent Calendar 2024**](/blog/advent-calendar-2024) &nbsp; |
