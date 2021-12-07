---
title: "Advent Calendar - December 7, 2021"
date: 2021-12-07T00:00:00+00:00
description: "Advent Calendar - December 7, 2021."
type: post
image: images/blog/2021-12-07.jpg
author: James Smith
tags: ["Perl"]
---

[**Advent Calendar 2021**](/blog/advent-calendar-2021)
***

The gift is presented by [**James Smith**](/blog/meet-the-champion-2021-02). Today he is talking about his solution to [**"The Weekly Challenge - 107"**](/blog/perl-weekly-challenge-107). This is re-produced for **Advent Calendar 2021** from the original [**post**](https://github.com/drbaggy/perlweeklychallenge-club/blob/master/challenge-107/james-smith/README.md) by `James Smith`.

***

<br>

## Task #1: Self-descriptive Numbers

<br>

Write a script to display the first three self-descriptive numbers. As per [**wikipedia**](https://en.wikipedia.org/wiki/Self-descriptive_number), the definition of `Self-descriptive Number` is

> In mathematics, a self-descriptive number is an integer m that in a given base b is b digits long in which each digit d at position n (the most significant digit being at position 0 and the least significant at position b−1) counts how many instances of digit n are in m.

<br>

***

<br>

To describe a number we write down the number of `0s`, `1s`, `2s`, `3s`, etc

A self-descriptive number is one of length n such that in `base n` the description above is the number itself.

Generating self descriptive numbers can be split between the case where `n >= 7` and `n < 7` ... As we are asked for the first three these all exist in the case where `n < 7` ....

For `n >= 7` the self-descriptive numbers are of the form:

`n-4`, `21`, `0 {n-7 times}`, `1000`;

In our solution we loop through numbers starting `1` to see if they are self descriptive.

To get the desciption of a number of `length k`, we loop from `0..(k-1)` counting the number of each digit in the string... We can do this with a harcoded series of `tr///s` but if we want something dynamic we can write this as

<br>

```perl
    @Q = m{($_)}g; $count = scalar @Q;
```

<br>

we can do this in one line by using `@{[ ]}` to convert to the list of matches to an arrayand counting it by getting the `scalar` of the `array`... Often in **Perl** `lists` and `arrays` are interchangeable - but here is one of those subtle distinctions you have to be aware of.

The description is obtained by stitching those counts together... We can do this in the one-line `join q()`, `map` below.. We just store it the list if the description and the number are the same....

<br>

```perl
use strict;

use warnings;
use feature qw(say);
use Test::More;
my ($c,@res) = 0;

while( ++$c && @res<3 ) {
  push @res, $c if $c == join q(),
    map { scalar @{[ $c=~m{($_)}g ]} } 0 .. -1 + length $c;
}

say "@res";
```

<br>

We can reduce this further - by rewriting the inner if with using the `&&` trick. `&&` is evaluated lazily - so that if the left hand side is false then the right hand side is not evaluated.

So `if($x) { y() }` can be written as `$x && y()`;

Similarly - `unless($x) { y() }` can be written as `$x || y()` and `if($x) { y() } else { z() }` can be written `$x ? y() : z()`

This means we can make the statement inside the loop a single statement and postfix the while...

<br>

```perl
    ($c,@res) = 0;

    ( $c == join q(),
        map { scalar @{[ $c=~m{($_)}g ]} }
        0 .. -1 + length $c
    ) && push @res, $c while ++$c && @res<3;

    say "@res";
```

<br>

Note we have to wrap the `"condition"` in brackets to force it to be evaluated before the `&&` as otherwise the line ends in `0 .. -1 + length( $x && push @res, $c);`

This is why we write the `"yoda"` looking `-1 + length $c` as if you write `length $c - 1` this evaluates to `length($c-1);`

I wouldn't do this in `"normal"` code as I think it can get confusing `$x && f()` is not obviously a piece of logic, especially if `f()` has implicit side effects as here.

If we don't want to capture the values - but just display the results - we can drop this into a perl 1-liner on the command line.

<br>

```perl
    perl -E '($c-join"",map{0+@{[$c=~/($_)/g]}}0..-1+length$c)||++$n&&say$c while++$c&&$n<3'
```

<br>

or

<br>

```perl
    perl -E '($c-join"",map{0+(@Q=$c=~/($_)/g)}0..-1+length$c)||++$n&&say$c while++$c&&$n<3'
```

<br>

You will notice we are using slightly different tricks here... (Mainly we can do these because we haven't enabled strict!! something you rarely do in Perl 1-liners...)

<br>

#### * We use -E (rather than -e) this enables more modern perl features - including usefully say!

<br>

#### * We don't collect results - and we just keep a counter - this time we use || and && in the "logic"...

<br>

#### * We know ++$n is always going to be true (it starts off explicitly as 0 so in the condition it is going to be 1, 2, 3, ...) and so we always run say$c if we get to the ++$n...

<br>

#### * Note here - this is a place where it is important to choose ++$n rather than the more common $n++, as the latter evaluates to 0 the first time it is invoked - meaning we would skip the first answer...

<br>

#### * We show a different trick to count the elements of the list.

<br>

    - We can use another trick other than the scalar @{[ ]} trick to convert the list into an array. We store it in an array variable which forces to an array rather than a last - we can then get the length of the array (we just throw the array away!)

    - As we are keeping the code short - we can replace the keyword scalar with a simple 0+ which forces the array to be converted into a scalar (and hence returns its length)

    - To gain another character as the equality is numeric we can rewrite if($a==$b) { f() } as ($a-$b)||f().

        $a-$b is non-zero (true) if $a!=$b

        $a-$b is zero (false) if $a==$b

      So we rewrite

        if( $a == $b ) { f() } as unless( $a - $b ) { f() }

      which we know we mentioned we could rewrite as:

        ($a-$b) || f()

      The brackets are important o/w this evaluates to:

        $a-($b||f())

      which isn't what we want...

<br>

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2021**](/blog/advent-calendar-2021)
