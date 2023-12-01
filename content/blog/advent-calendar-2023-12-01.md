---
title: "Advent Calendar - December 1, 2023"
date: 2023-12-01T00:00:00+00:00
description: "Advent Calendar - December 1, 2023."
type: post
image: images/blog/2023-12-01.jpg
author: Laurent Rosenfeld
tags: ["Perl", "Raku"]
---

## [**Advent Calendar 2023**](/blog/advent-calendar-2023)
### | &nbsp; **Day 1** &nbsp; |
***

The gift is presented by `Laurent Rosenfeld`. Today he is talking about his solution to [**The Weekly Challenge - 205**](/blog/perl-weekly-challenge-205). This is re-produced for `Advent Calendar 2023` from the original [**post**](https://blogs.perl.org/users/laurent_r/2023/02/perl-weekly-challenge-205-third-highest-and-maximum-bit-wise-xor.html).

***

<br>

## Task #1: Third Highest
***

    You are given an array of integers.

    Write a script to find out the Third Highest if found otherwise return the maximum.

    Example 1

        Input: @array = (5,3,4)
        Output: 3

        First highest is 5. Second highest is 4. Third highest is 3.

    Example 2

        Input: @array = (5,6)
        Output: 6

        First highest is 6. Second highest is 5. Third highest is missing, so maximum is returned.

    Example 3

        Input: @array = (5,4,4,3)
        Output: 3

        First highest is 5. Second highest is 4. Third highest is 3.

<br>

### Third Highest in Raku
***

The `third-largest` subroutine first sorts the input in descending order and then returns the third or the first item, depending on whether there are three items or more in the input, or less than that.

<br>

```raku
sub third-largest (@in) {
    my @s = @in.sort.reverse;
    return @s.elems >= 3 ?? @s[2] !! @s[0];
}
for <5 3 4>, <5 6>, <5 4 4 3>, <5 6 7 8 2 1> -> @test {
    say (~@test).fmt("%-12s => "), third-largest @test;
}
```

<br>

With large lists, using the sort routine may not be the most efficient solution in terms of performance (speed). However, in my humble opinion, this solution is better in terms of coding efficiency, because finding manually the third-largest item would require some form of circular buffer of the three largest elements, making the code significantly longer. Actually, the third-largest subroutine could boil down to a single line of code:

<br>

```raku
return @in.elems >= 3 ?? @in.sort[*-3] !! @in.sort[*-1];
```

<br>

but I did not do it, because it would lead to repeat the sorting statement, which is not the best programming practice.

This program displays the following output:

<br>

```raku
$ raku ./third-largest.raku
5 3 4        => 3
5 6          => 6
5 4 4 3      => 4
5 6 7 8 2 1  => 6
```

<br>

### Third Highest in Perl
***

This is port to Perl of the above Raku program:

<br>

```perl
use strict;
use warnings;
use feature "say";


sub third_largest  {
    my @s = sort {$b <=> $a} @_;
    return scalar @s >= 3 ? $s[2] : $s[0];
}
for my $t ([<5 3 4>], [<5 6>], [<5 4 4 3>],
           [<5 6 7 8 2 1>]) {
    printf "%-12s => %d \n", "@$t", third_largest @$t;
}
```

<br>

The comments about efficiency made in the `Raku` section above also apply to this `Perl` implementation.

This program displays the following output:

<br>

```perl
$ perl ./third-largest.pl
5 3 4        => 3
5 6          => 6
5 4 4 3      => 4
5 6 7 8 2 1  => 6
```

<br>

### Task #2: Maximum XOR
***

    You are given an array of integers.

    Write a script to find the highest value obtained by XORing any two distinct members of the array.

    Example 1

        Input: @array = (1,2,3,4,5,6,7)
        Output: 7

        The maximum result of 1 xor 6 = 7.

    Example 2

        Input: @array = (2,4,1,3)
        Output: 7

        The maximum result of 4 xor 3 = 7.

    Example 3

        Input: @array = (10,5,7,12,8)
        Output: 7

        The maximum result of 10 xor 5 = 15.

<br>

First, there is a mistake in `Example 3`: the output should be 15, as shown in the output explanation. That’s just a typo.

We have another somewhat more serious problem. There is a `xor` operator both in `Raku` and in `Perl`. Both are actually logical operators. In `Perl`, for example, `“binary ‘xor’ returns the exclusive-OR of the two surrounding expressions.”` Looking at the examples provided, we can see that this is not the desired behavior. Obviously, what is wanted is the `bit-wise xor`, which is written `+^` in `Raku` and `^` in `Perl`.

### Maximum Bit-Wise XOR in Raku
***

The `largest-xor` subroutine uses the built-in combinations routine to test all input-array two-items combinations and returns the highest value obtained (together with the first combination that led to that value).

<br>

```raku
sub largest-xor (@in) {
    my $max = 0;
    my $max-i;
    for @in.combinations(2) -> $i {
        my $xor = $i[0] +^ $i[1];   # bitwise xor
        $max = $xor and $max-i = $i if $xor > $max
    }
    return "$max-i -- $max";
}

for (1,2,3,4,5,6,7), (2,4,1,3), (10,5,7,12,8) -> @test {
  say (~@test).fmt("%-15s => "), largest-xor @test;
}
```

<br>

This program dispàlays the following output:

<br>

```raku
$ raku ./max-xor.raku
1 2 3 4 5 6 7   => 1 6 -- 7
2 4 1 3         => 4 3 -- 7
10 5 7 12 8     => 10 5 -- 15
```

<br>

### Maximum Bitwise XOR in Perl
***

This `Perl` implementation uses the same approach as the `Raku` program above, except that we find all 2-item combinations with two nested for loops, as there is no built-in combinations routine in core `Perl`.

<br>

```perl
use strict;
use warnings;
use feature "say";

sub largest_xor {
    my $max = 0;
    my @max_ij;
    for my $i (0..$#_) {
        for my $j ($i+1.. $#_) {
            my $xor = $_[$i] ^ $_[$j];    # bitwise xor
            if ($xor > $max) {
                $max = $xor;
                @max_ij = ($_[$i], $_[$j]) ;
            }
        }
    }
    return "@max_ij -- $max";
}

for my $t ([1,2,3,4,5,6,7], [2,4,1,3], [10,5,7,12,8]) {
    printf "%-15s => %-10s \n", "@$t", largest_xor @$t;
}
```

<br>

This program displays the following output:

<br>

```perl
$ perl  ./max-xor.pl
1 2 3 4 5 6 7   => 1 6 -- 7
2 4 1 3         => 4 3 -- 7
10 5 7 12 8     => 10 5 -- 15
```

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

| &nbsp; [**Advent Calendar 2023**](/blog/advent-calendar-2023) &nbsp; |
