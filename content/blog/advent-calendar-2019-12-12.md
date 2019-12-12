---
title: "Advent Calendar - December 12, 2019"
date: 2019-12-12T00:00:00+00:00
description: "Advent Calendar - December 12, 2019"
type: post
image: images/blog/2019-12-12.jpg
author: Laurent Rosenfeld
tags: ["Perl", "Raku"]
---

[**Advent Calendar 2019**](/blog/advent-calendar-2019)
***

The gift is presented by [**Laurent Rosenfeld**](/blog/meet-the-champion-013). Today he is talking about his solutions to **Task #1: nth Order Difference Series** of [**"The Weekly Challenge - 023"**](/blog/perl-weekly-challenge-023).

#### Create a script that prints nth order forward difference series. You should be a able to pass the list of numbers and order number as command line parameters. Let me show you with an example.

Suppose we have list (X) of numbers: 5, 9, 2, 8, 1, 6 and we would like to create 1st order forward difference series (Y). So using the formula Y(i) = X(i+1) - X(i), we get the following numbers: (9-5), (2-9), (8-2), (1-8), (6-1). In short, the final series would be: 4, -7, 6, -7, 5. If you noticed, it has one less number than the original series. Similarly you can carry on 2nd order forward difference series like: (-7-4), (6+7), (-7-6), (5+7) => -11, 13, -13, 12.

***

## PERL SOLUTION

For this, we will write a simple **fwd_diff** subroutine to compute the first order difference series of the list of values passed as arguments to it. We do that with map on the indexes of the arguments list (starting at 1).

Then, we use a for loop to call this subroutine the number of times required by the first parameter (the order) passed to the script. Note that if the order is larger than the count of the other items passed to the script, then we cannot compute the result.

```perl
#!/usr/bin/perl
use strict;
use warnings;
use feature qw/say/;

sub fwd_diff {
        return map $_[$_] - $_[$_ - 1], 1..$#_;
}

my ($order, @values) = @ARGV;
my $count = scalar @values;
if ($count <= $order) {
        die "Can't calculate ${order}th series of $count values";
}
my @result = @values;
for (1..$order) {
        @result = fwd_diff @result;
}
say "${order} forward diff of @values is: @result";
```

Testing with 6 values the forward difference series with orders 1 to 6 displays the following output:

    $ perl  fwd_diff.pl 1 5 9 2 8 1 6
    1th forward diff of 5 9 2 8 1 6 is: 4 -7 6 -7 5

    $ perl  fwd_diff.pl 2 5 9 2 8 1 6
    2th forward diff of 5 9 2 8 1 6 is: -11 13 -13 12

    $ perl  fwd_diff.pl 3 5 9 2 8 1 6
    3th forward diff of 5 9 2 8 1 6 is: 24 -26 25

    $ perl  fwd_diff.pl 4 5 9 2 8 1 6
    4th forward diff of 5 9 2 8 1 6 is: -50 51

    $ perl  fwd_diff.pl 5 5 9 2 8 1 6
    5th forward diff of 5 9 2 8 1 6 is: 101

    $ perl  fwd_diff.pl 6 5 9 2 8 1 6
    Can't calculate 6th series of 6 values at fwd_diff.pl line 13.

## RAKU SOLUTION

I would have liked to be able to use a pointy block syntax with two parameters, but that does not work because the loop will consume two values at each step, as shown under the REPL:

    > for <5 9 2 8 1 6> -> $a, $b {say $b - $a}
    4
    6
    5

So we would need to pre-process the input data in order to get twice all values except those at both ends of the input list.

We'll use the rotor built-in function

These are two examples using rotor under the REPL:

    > <5 9 2 8 1 6>.rotor(1)
    ((5) (9) (2) (8) (1) (6))
    > <5 9 2 8 1 6>.rotor(2)
    ((5 9) (2 8) (1 6))

In these examples, rotor groups the elements of the invocant into groups of 1 and 2 elements respectively.

The rotor method can take as parameter a key-value pair, whose value (the second item) specifies a gap between the various matches:

    > (1..10).rotor(2 => 1)
    ((1 2) (4 5) (7 8))

As you can see, we obtain pairs of values, with a gap of 1 between the pairs (item 3, 6 and 9 are omitted from the list). Now, the gap can also be negative and, with a gap of -1, we get all successive pairs from the range:

    > <5 9 2 8 1 6>.rotor(2 => -1)
    ((5 9) (9 2) (2 8) (8 1) (1 6))

This is exactly what we need: we can now subtract the first item from the second one in each sublist.

Continuing under the REPL, we can define the fwd-diff subroutine and use it as follows:

    > sub fwd-diff (*@in) { map {$_[1] - $_[0]},  (@in).rotor(2 => -1)}
    &fwd-diff
    > say fwd-diff <5 9 2 8 1 6>
    [4 -7 6 -7 5]
    >

OK, enough experimenting with the REPL, we now know how to solve the challenge and can write our program:

```perl6
use v6;

sub fwd-diff (*@in) {
    map {$_[1] - $_[0]},  (@in).rotor(2 => -1)
}
sub MAIN (Int $order, *@values) {
    if @values.elems <= $order {
        die "Can't compute {$order}th series of {@values.elems} values";
    }
    my @result = @values;
    for 1 .. $order {
        @result = fwd-diff @result;
    }
    say "{$order}th forward diff of @values[] is: @result[]";
}
```

Testing with 6 values the forward difference series with orders 1 to 6 displays the following output:

    $ fwd-diff.p6 1 5 9 2 8 1 6
    1th forward diff of 5 9 2 8 1 6 is: 4 -7 6 -7 5

    $ fwd-diff.p6 2 5 9 2 8 1 6
    2th forward diff of 5 9 2 8 1 6 is: -11 13 -13 12

    $ fwd-diff.p6 3 5 9 2 8 1 6
    3th forward diff of 5 9 2 8 1 6 is: 24 -26 25

    $ fwd-diff.p6 4 5 9 2 8 1 6
    4th forward diff of 5 9 2 8 1 6 is: -50 51

    $ fwd-diff.p6 5 5 9 2 8 1 6
    5th forward diff of 5 9 2 8 1 6 is: 101

    $ fwd-diff.p6 6 5 9 2 8 1 6
    Can't compute 6th series of 6 values
      in sub MAIN at fwd-diff.p6 line 9
      in block <unit> at fwd-diff.p6 line 1

Note that I was hoping to get rid of the if @values.elems <= $order test and related die block by using a constraint in the signature of the MAIN subroutine, for example something like this:

    sub MAIN (Int $order, *@values where @values.elems > $order) { # ...

but that does not appear to work properly.

***
If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2019**](/blog/advent-calendar-2019)
