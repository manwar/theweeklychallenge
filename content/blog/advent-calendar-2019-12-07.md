---
title: "Advent Calendar - December 7, 2019"
date: 2019-12-07T00:00:00+00:00
description: "Advent Calendar - December 7, 2019"
type: post
image: images/blog/2019-12-07.jpg
author: Jaldhar H. Vyas
tags: ["Perl", "Raku"]
---

[**Advent Calendar 2019**](/blog/advent-calendar-2019)
***

The gift is presented by [**Jaldhar H. Vyas**](/blog/meet-the-champion-014). Today he is talking about his solutions to **Task #1: Ackermann Function** of [**"The Weekly Challenge - 017"**](/blog/perl-weekly-challenge-017).

#### Create a script to demonstrate Ackermann function as defined in [wikipedia](https://en.wikipedia.org/wiki/Ackermann_function).
\
As per the example in wiki page.

    A(1, 2) = A(0, A(1, 1))
            = A(0, A(0, A(1, 0)))
            = A(0, A(0, A(0, 1)))
            = A(0, A(0, 2))
            = A(0, 3)
            = 4
\
This can be easily modeled by a **recursive** function with **two special cases**. (Plus **an extra** check to make sure the inputs are **positive integers**.) Here is the **Perl** version.

```perl
sub ackermann {
    my ($m, $n) = @_;

    if ($m < 0 || $n < 0) {
        return undef;
    }

    if ($m == 0) {
        return $n + 1;
    }

    if ($n == 0) {
        return ackermann($m - 1, 1);
    }

    return ackermann($m - 1, ackermann($m, $n - 1));
}
```

[**source code**](https://github.com/jaldhar/perlweeklychallenge-club/blob/master/challenge-017/jaldhar-h-vyas/perl5/ch-1.pl)

In **Raku**, we can use the **multi** sub functionality for **each case** and **parameter validation** is built in.

```perl6
multi sub ackermann (
    Int $m where { $m == 0 },
    Int $n where { $n >= 0 },
) {
    return $n + 1;
}

multi sub ackermann (
    Int $m where { $m >= 0 },
    Int $n where { $n == 0 },
) {
    return ackermann($m - 1, 1);
}

multi sub ackermann (
    Int $m where { $m >= 0 },
    Int $n where { $n >= 0 },
) {
    return ackermann($m - 1, ackermann($m, $n - 1));
}
```

[**source code**](https://github.com/jaldhar/perlweeklychallenge-club/blob/master/challenge-017/jaldhar-h-vyas/perl6/ch-1.p6)

***
If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2019**](/blog/advent-calendar-2019)
