---
title: "Advent Calendar - December 16, 2022"
date: 2022-12-16T00:00:00+00:00
description: "Advent Calendar - December 16, 2022."
type: post
image: images/blog/2022-12-16.jpg
author: Jaldhar H. Vyas
tags: ["Perl", "Raku"]
---

## [**Advent Calendar 2022**](/blog/advent-calendar-2022)
### | &nbsp; [**Day 15**](/blog/advent-calendar-2022-12-15) &nbsp; | &nbsp; **Day 16** &nbsp; | &nbsp; [**Day 17**](/blog/advent-calendar-2022-12-17) &nbsp; |
***

The gift is presented by `Jaldhar H. Vyas`. Today he is talking about his solution to [**"The Weekly Challenge - 188"**](/blog/perl-weekly-challenge-188). This is re-produced for **Advent Calendar 2022** from the original [**post**](https://www.braincells.com/perl/2022/10/perl_weekly_challenge_week_188.html) by him.

***

<br>

## Challenge 1: Divisible Pairs

<br>

You are given list of integers `@list` of size `$n` and divisor `$k`.

Write a script to find out count of pairs in the given list that satisfies the following rules.

<br>

    The pair (i, j) is eligible if and only if
    a) 0 <= i < j < len(list)
    b) list[i] + list[j] is divisible by k

<br>

#### Example 1
    Input: @list = (4, 5, 1, 6), $k = 2
    Output: 2

#### Example 2
    Input: @list = (1, 2, 3, 4), $k = 2
    Output: 2

#### Example 3
    Input: @list = (1, 3, 4, 5), $k = 3
    Output: 2

#### Example 4
    Input: @list = (5, 1, 2, 3), $k = 4
    Output: 2

#### Example 5
    Input: @list = (7, 2, 4, 5), $k = 4
    Output: 1

<br>

In `Raku` this problem can be solved as a one-liner but I've chosen to spread it out a bit for clarity.

I found the way condition a in the spec is described to be a little unclear; what it actually means is that the values of `i` and `j` range between 0 and the size of the list.

<br>

```perl
(0 ..^ @list.elems)
```

<br>

For that range, we get a list of all the pairs of values with `.combinations()...`

<br>

```perl
     .combinations(2)
```

<br>

We `.grep()` through that list to find all the pairs where their `.sum()` is evenly divisible by `$k...`

<br>

```perl
    .grep({ @$_.sum %% $k})
```

<br>

...Then we count how many pairs we found... `.elems`

...and print that out.

<br>

```perl
    .say;
```

<br>

[**(Full code on Github.)**](https://github.com/jaldhar/perlweeklychallenge-club/blob/master/challenge-188/jaldhar-h-vyas/raku/ch-1.raku)

<br>

The Perl solution is not quite so concise. For one thing, I had to supply my own `combinations()` function which luckily I had from previous challenges. I also missed having the integer modulus operator `%%` and the `.sum()` method.

<br>

```perl
say scalar grep { ($list[$_->[0]] + $list[$_->[1]]) % $k == 0; }
    combinations([0 .. scalar @list - 1], 2);
```

<br>

[**(Full code on Github.)**](https://github.com/jaldhar/perlweeklychallenge-club/blob/master/challenge-188/jaldhar-h-vyas/perl/ch-1.pl)

<br>

## Challenge 2: Total Zero

<br>

You are given two positive integers `$x` and `$y`.

Write a script to find out the number of operations needed to make both `ZERO`. Each operation is made up either of the followings:

<br>

    $x = $x - $y if $x >= $y

    or

    $y = $y - $x if $y >= $x (using the original value of $x)

<br>

#### Example 1
    Input: $x = 5, $y = 4
    Output: 5

#### Example 2
    Input: $x = 4, $y = 6
    Output: 3

#### Example 3
    Input: $x = 2, $y = 5
    Output: 4

#### Example 4
    Input: $x = 3, $y = 1
    Output: 3

#### Example 5
    Input: $x = 7, $y = 4
    Output: 5

<br>

Normally function parameters in `Raku` are immutable. To be able to change them, you have to add the `is copy` trait.

<br>

```perl
sub MAIN(
    Int $x is copy, #= a positive integer
    Int $y is copy  #= a positive integer
) {
```

<br>

I defined a counter for the number of operations.

<br>

```perl
    my $operations = 0;
```

<br>

Then I kept on applying the operations given in the spec until both `$x` and `$y` were `0`.

<br>

```perl
    repeat {
```

<br>

In order to perform `operation 2` correctly, I had to `cache` the value of `$x` before `operation 1` was applied.

<br>

```perl
        my $prevX = $x;

        if $x >= $y {
            $x -= $y;
        }

        if $y >= $prevX {
            $y -= $prevX;
        }
```

<br>

The spec is misleading IMHO. Originally, I incremented `$operations` within each `if` block. But for the example inputs, this gave me a result 1 greater than the expected output. What we really want is not the total number of operations as I assumed, but the number of times we go through the loop.

<br>

```perl
        $operations++;

    } until $x == 0 && $y == 0;
```

<br>

Finally, we can print the result.

<br>

```perl
    say $operations;
}
```

<br>

[**(Full code on Github.)**](https://github.com/jaldhar/perlweeklychallenge-club/blob/master/challenge-188/jaldhar-h-vyas/raku/ch-2.raku)

<br>

This is the `Perl` version. No concerns about immutablity and we use `do ... while` instead of `repeat ... until` in the loop.

<br>

```perl
my ($x, $y) = @ARGV;
my $operations = 0;

do {
    my $prevX = $x;

    if ($x >= $y) {
        $x -= $y;
    }

    if ($y >= $prevX) {
        $y -= $prevX;
    }

    $operations++;

} while ($x != 0 && $y != 0);

say $operations;
```

<br>

[**(Full code on Github.)**](https://github.com/jaldhar/perlweeklychallenge-club/blob/master/challenge-188/jaldhar-h-vyas/perl/ch-2.pl)

<br>

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

| &nbsp; [**Advent Calendar 2022**](/blog/advent-calendar-2022) &nbsp; |
