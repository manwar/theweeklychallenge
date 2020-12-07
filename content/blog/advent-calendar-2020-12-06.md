---
title: "Advent Calendar - December 6, 2020"
date: 2020-12-07T00:00:00+00:00
description: "Advent Calendar - December 6, 2020."
type: post
image: images/blog/2020-12-06.jpg
author: Luca Ferrari
tags: ["Raku"]
---

[**Advent Calendar 2020**](/blog/advent-calendar-2020)
***

The gift is presented by [**Luca Ferrari**](https://perlweeklychallenge.org/blog/meet-the-champion-2020-04). Today he is talking about his solution to the task `Bit Sum` of **["The Weekly Challenge - 059"](/blog/perl-weekly-challenge-059)**. This is re-produced for **Advent Calendar 2020** from the original [**post**](https://fluca1978.github.io/2020/05/04/PerlWeeklyChallenge59.html#task2) by **Luca Ferarri**.

***

## Bit Sum
#### Helper Function

For this task, you will most likely need a function f(a,b) which returns the count of different bits of binary representation of a and b.

For example, f(1,3) = 1, since:

Binary representation of 1 = 01

Binary representation of 3 = 11

There is only 1 different bit. Therefore the subroutine should return 1. Note that if one number is longer than the other in binary, the most significant bits of the smaller number are padded (i.e., they are assumed to be zeroes).

#### Script Output

You script should accept n positive numbers. Your script should sum the result of f(a,b) for every pair of numbers given:

For example, given `2, 3, 4`, the output would be `6`, since `f(2,3) + f(2,4) + f(3,4) = 1 + 2 + 3 = 6`.

***

This task was a little longer than the first one: you have to built a `function f(a,b)` that reports the number of bits different between the two representations of the arguments. That’s quite easy, but the two digits could end up having different bit lengths, so padding is required.

My implementation to such function is:

```perl6
sub f( Int:D $a, Int:D $b ) {
    my $different-bits = 0;

    my @a-bits = $a.base( 2 ).Str.comb.reverse;
    my @b-bits = $b.base( 2 ).Str.comb.reverse;

    # find the longest number
    my $max-length = max( @a-bits.elems, @b-bits.elems );
    # do the padding with zeros (to the end, the arra)
    @a-bits.push: 0 for 0 .. ( $max-length - @a-bits.elems  );
    @b-bits.push: 0 for 0 .. ( $max-length - @b-bits.elems );


    # compute the difference
    for 0 ..^ @a-bits.elems {
        $different-bits += 1 if ( @a-bits[ $_ ] != @b-bits[ $_ ] );
    }

    $different-bits;
}
```

First of all, I ask raku to rewrite the digits in a binary format by means of `.base(2)`, then I convert to a string and split into an array of single bits, tht I then `.reverse` to get the less significative bit as element zero of the array. Then it is simple to pad the arrays of bits: the shortest array gets a few 0 pushed to its end (that represent the most significative bits). I don’t care to know what number has the shortest bnary representation, so I pad both the arrays with the xcept that one padding will not execute.
Then it does suffice to walk the arrays, that now have the very same length, and count how many bits (array elements) are different.

Having done so, the task asked to sum the number of different bits among couple of arguments, as easy as:

```perl6
my $sum = 0;
for 0 ..^ @*ARGS.elems  -> $first {
    for $first + 1 ..^ @*ARGS.elems  -> $second {
        $sum += f( @*ARGS[ $first ].Int, @*ARGS[ $second ].Int );
    }
}
say "Sum is $sum";
```

A nested `for` to make all the available couples of digits and sum everything.

***
If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2020**](/blog/advent-calendar-2020)
