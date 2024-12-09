---
title: "Advent Calendar - December 8, 2024"
date: 2024-12-08T00:00:00+00:00
description: "Advent Calendar - December 8, 2024."
type: post
image: images/blog/2024-12-08.jpg
author: Adam Russell
tags: ["Perl"]
---

## [**Advent Calendar 2024**](/blog/advent-calendar-2024)
### | &nbsp; [**Day 7**](/blog/advent-calendar-2024-12-07) &nbsp; | &nbsp; **Day 8** &nbsp; | &nbsp; [**Day 9**](/blog/advent-calendar-2024-12-09) &nbsp; |
***

The gift is presented by `Adam Russell`. Today he is talking about his solution to [**The Weekly Challenge - 258**](/blog/perl-weekly-challenge-258). This is re-produced for `Advent Calendar 2024` from the original [**post**](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2024/03/03).

***

<br>

## Count Sumofvaluacula
***

<br>

### Part 1: Count Even Digits Number
***

<br>

    You are given an array of positive integers, @ints.

    Write a script to find out how many integers have even number of digits.

<br>

The majory of the work can be done in a single line. Conveniently the `tr` function returns the number of characters effected by the command. For our purposes that means telling tr to delete all numerals. We then check if the number of numerals removed is even inside of a `grep` block. The number of matches is then returned. Note the one catch, in order to use `tr` we need to assign `$_` to a temporary value, `$x`. Otherwise we would get an `error` Modification of a read-only value.

<br>

```perl
sub count_even_digits{
    return 0 +
        grep {
          my $x = $_; $x =~ tr/[0-9]//d % 2 == 0
        } @_;
}
```

<br>

The rest of the code just tests this function.

<br>

```perl
use v5.38;


MAIN:{
    say count_even_digits 10, 1, 111, 24, 1000;
    say count_even_digits 111, 1, 11111;
    say count_even_digits 2, 8, 1024, 256;
}
```

<br>

Sample Run

<br>

```perl
$ perl perl/ch-1.pl
3
0
1
```

<br>

### Part 2: Sum of Values
***

<br>

    You are given an array of integers, @int and an integer $k.

    Write a script to find the sum of values whose index binary representation has exactly $k number of 1-bit set.

<br>

First, let’s concern ourselves with counting `set bits`. Here we can re-use some code that we’ve used before. This is a pretty standard way to count bits. This procedure is to do a `bitwise AND` operation for the `least significant bit` and check if it is `set`. We then `right shift` and `repeat until no bits remain`. This code is actually a modification of code used in `TWC 079`!

<br>

```perl
  sub count_bits{
    my($x) = @_;
    my $total_count_set_bit = 0;
    while($x){
      my $b = $x & 1;
      $total_count_set_bit++ if $b;
      $x = $x >> 1;
    }
    return $total_count_set_bit;
  }
```

<br>

With that necessary work taken care of we need to `loop` over the given `array of integers` and (1) check to see if the `index` contains the correct number of `set bits` and, if that is the case, `add` to the `rolling sum`. Finally, `return the sum`.

<br>

```perl
  sub sum_of_values{
      my $k = shift;
      my(@n) = @_;
      my $sum;
      do{
          $sum += $_[$_] if count_bits($_) == $k;
      } for 0 .. @n - 1;
      return $sum;
  }
```

<br>

The rest of the code drives some tests.

<br>

```perl
  MAIN:{
    say sum_of_values 1, 2, 5, 9, 11, 3;
    say sum_of_values 2, 2, 5, 9, 11, 3;
    say sum_of_values 0, 2, 5, 9, 11, 3;
  }
```

<br>

Sample Run

<br>

```perl
$ perl perl/ch-2.pl
17
11
2
```

<br>

***

If you have any suggestion then please do share with us **<perlweeklychallenge@yahoo.com>**.

| &nbsp; [**Advent Calendar 2024**](/blog/advent-calendar-2024) &nbsp; |
