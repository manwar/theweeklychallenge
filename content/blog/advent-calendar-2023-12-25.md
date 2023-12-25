---
title: "Advent Calendar - December 25, 2023"
date: 2023-12-25T00:00:00+00:00
description: "Advent Calendar - December 25, 2023."
type: post
image: images/blog/2023-12-25.jpg
author: Cheok-Yin Fung
tags: ["Perl"]
---

## [**Advent Calendar 2023**](/blog/advent-calendar-2023)
### | &nbsp; [**Day 24**](/blog/advent-calendar-2023-12-24) &nbsp; | &nbsp; **Day 25** &nbsp; |
***

The gift is presented by `Cheok-Yin Fung`. Today he is talking about his solution to [**The Weekly Challenge - 246**](/blog/perl-weekly-challenge-246). This is re-produced for `Advent Calendar 2023` from the original [**post**](https://e7-87-83.github.io/coding/challenge_246.html).

***

<br>

## CY's Take on The Weekly Challenge #246 ‐ Uniqueness
***

### Task 1: 6 out of 49

Instead of picking out the balls from a box, we can imagine we line up a set of balls labelled `1, 2, 3 ..., 49`, and pick out a ball one by one via randomly selecting the `k-th` ball on the line to be removed.

<br>

```perl
use v5.30.0;
use warnings;

my @ans;
my @arr = (1..49);
for my $i (0..5) {
    my $k = int(rand(49-$i));
    push @ans, splice(@arr, $k, 1);
}

say join "\n", sort {$a<=>$b} @ans;
```

<br>

### Task 2: Linear Recurrence of Second Order

Let's have a brief analysis for the task first. It is given 5 integers, and they form some linear recurrence; we have `three linear (Diophantine)` equations to play with.

<br>

![Task 2](/images/blog/2023-12-25-task-2.png)

<br>

Because of the requirement of `integral parameter` solution(s), I started with [**extended Euclidean algorithm**](https://en.wikipedia.org/wiki/Extended_Euclidean_algorithm) and [**Bézout coefficients**](https://en.wikipedia.org/wiki/B%C3%A9zout%27s_identity). Some theory can be found on Wikipedia or [**here (Linear Diophantine Equations)**](https://math.libretexts.org/Courses/Mount_Royal_University/MATH_2150%3A_Higher_Arithmetic/5%3A_Diophantine_Equations/5.1%3A_Linear_Diophantine_Equations).

The pros of the approach are `(1)` it identifies `non-integral linear equations` early on; `(2)` instead of `two degeneracies` which may be found in solving the `two coefficients` through the first `two linear equations`, it reduces to `one degeneracy (a[2]*a[0]-a[1]*a[1]` may be `zero`). And by number theoretic arguments, we know `a[2] = k a[1] = k^2 a[0]` in case of the `degeneracy` occurs, then we have `p + qk = k^2. a[3] = p a[1] + q a[2] = p k a[0] + q k^2 a[0] = k^3 a[0]`. Similarly we can deduce `a[4] = k^4 a[0]`.

The code is full of printing of equations which may not be so relevant to the `"solution"` but for verifying `number theoretic algorithms`.

<br>

```perl
# The Weekly Challenge 246
# Task 2 Linear Recurrence of Second Order
# a[n] = p * a[n-2] + q * a[n-1] with n > 1
# where p and q must be integers.
use v5.30.0;
use warnings;


sub ex_euc_alg {
    my @r = ($_[0], $_[1]);
    my @s = (1, 0);
    my @t = (0, 1);
    my $i = 0;
    while ($r[-1] != 0) {
        my $q = int($r[$i-1]/$r[$i]);
        $r[$i+1] = $r[$i-1] - $q * $r[$i];
        while ($r[$i+1] > abs($r[$i])) {
            $r[$i+1] = $r[$i+1] - abs($r[$i]);
            $q = $q + abs($r[$i])/$r[$i]
        }
        while ($r[$i+1] < 0) {
            $r[$i+1] = $r[$i+1] + abs($r[$i]);
            $q = $q - abs($r[$i])/$r[$i]
        }
        $s[$i+1] = $s[$i-1] - $q*$s[$i];
        $t[$i+1] = $t[$i-1] - $q*$t[$i];
        $i++;
    }
    my $a0 = $_[0];
    my $b0 = $_[1];
    say "$r[$i-1] = $a0*$s[$i-1]+$b0*$t[$i-1]";
    my ($d,$x,$y) = ($r[$i-1], $s[$i-1], $t[$i-1]);
    # for my $k (-10..10) {
    #     my $x1 = $x - $k*$b0/$d;
    #     my $y1 = $y + $k*$a0/$d;
    #     say "$d = $a0*$x1+$b0*$y1";
    # }

    return [$r[$i-1], $s[$i-1], $t[$i-1]];
}

sub check {
    my @a = @_;

    # consective zeros check
    if ($a[0] == 0 && $a[1] == 0) {
        return ($a[2] == 0 && $a[3] == 0 && $a[4] == 0) ? 1 : 0;
    }
    if ($a[2] == 0) {
        if ($a[1] == 0) {
            return ($a[3] == 0 && $a[4] == 0) ? 1 : 0;
        }
        if ($a[3] == 0) {
            return ($a[4] == 0) ? 1 : 0;
        }
    }

    my ($d0, $d1, $x0, $y0, $u0, $v0);
    my ($a0, $b0);
    my ($a1, $b1);

    ($d0, $x0, $y0) = ex_euc_alg($a[0], $a[1])->@*;
    ($a0, $b0) = ($a[0], $a[1]);
    return 0 if $a[2] % $d0 != 0;
    $x0 = $x0 *($a[2]/$d0);
    $y0 = $y0 *($a[2]/$d0);
    say "$a[2] = $a0*$x0+$b0*$y0";
    # for my $k (-10..10) {
    #     my $x1 = $x0 + $b0/$d0*$k ;
    #     my $y1 = $y0 - $a0/$d0*$k;
    #     say "$a[2] = $a0*$x1+$b0*$y1";
    # }

    ($d1, $u0, $v0) = ex_euc_alg($a[1], $a[2])->@*;
    ($a1, $b1) = ($a[1], $a[2]);
    return 0 if $a[3] % $d1 != 0;
    $u0 = $u0 *($a[3]/$d1);
    $v0 = $v0 *($a[3]/$d1);
    say "$a[3] = $a1*$u0+$b1*$v0";
    # for my $j (-10..10) {
    #     my $x1 = $u0 + $b1/$d1*$j ;
    #     my $y1 = $v0 - $a1/$d1*$j;
    #     say "$a[3] = $a1*$x1+$b1*$y1";
    # }


    # $x0 + $b0/$d0*$k == $u0 + $b1/$d1*$j
    # $y0 - $a0/$d0*$k == $v0 - $a1/$d1*$j

    # $a0$x0 + $a0$b0/$d0*$k == $a0$u0 + $a0$b1/$d1*$j
    # $b0$y0 - $b0$a0/$d0*$k == $b0$v0 - $b0$a1/$d1*$j

    if ($a[2]*$a[0] != $a[1]*$a[1]) {
        my $j = ($a0*$x0 + $b0*$y0 - $a0*$u0 - $b0*$v0)*$d1/($a0*$b1 - $b0*$a1);
        my $x1 = $u0 + $b1/$d1*$j;
        my $y1 = $v0 - $a1/$d1*$j;
        say "($x1, $y1)";
        return 0 if int($x1) != $x1 || int($y1) != $y1;
        return ($a[4] == $a[2]*$x1+$a[3]*$y1) ? 1 : 0;
    }
    else {
        return ( $a[1]*$a[2] == $a[3]*$a[0]
                             &&
                $a[1]*$a[3] == $a[4]*$a[0]) ? 1 : 0;
        # Explanation:
        # if a[2] = a[1]*a[1]/$a[0],
        # z d0 = x^2/y d0
        # since d0 = gcd(x d0, y d0), x, y coprime
        # then y must be 1, i.e. x a[0] = a[1]
        # and a[2] = x^2 d0 = x a[1]
        # i.e. x a[1] = a[2]
    }
}
```

<br>

## Test Cases

<br>

```perl
use Test::More tests=>11;
ok check(1, 1, 2, 3, 5);
ok !check(4, 2, 4, 5, 7);
ok check(4, 1, 2, -3, 8);

ok check(3, 9, 27, 81, 243);
ok check(3, 5, 27, 45, 243);
ok check(1, 1, 0, 0, 0);

ok check(0, 0, 0, 0, 0);
ok check(1, 0, 0, 0, 0);
ok check(0, 3, 0, 0, 0);

ok !check(0, 0, 3, 0, 0);
ok check(2, 4, 8, 16, 32);
```

<br>

**Hope for Peace!**

<br>

***

#### The image of Fibonacci spiral is taken from [**Wikimedia Commons**](https://commons.wikimedia.org/wiki/File:Fibonacci_Spiral_GeoGebra.svg), released in public domin.

#### **Acknowledgement:** Thanks to discussion of the `PA&A Discord Channel` (maintained by `Adam Crussell`).

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

| &nbsp; [**Advent Calendar 2023**](/blog/advent-calendar-2023) &nbsp; |
