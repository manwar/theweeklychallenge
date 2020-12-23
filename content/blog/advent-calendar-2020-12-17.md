---
title: "Advent Calendar - December 17, 2020"
date: 2020-12-23T00:00:00+00:00
description: "Advent Calendar - December 17, 2020."
type: post
image: images/blog/2020-12-17.jpg
author: Scimon Proctor
tags: ["Raku"]
---

[**Advent Calendar 2020**](/blog/advent-calendar-2020)
***

The gift is presented by [**Scimon Proctor**](https://perlweeklychallenge.org/blog/meet-the-champion-027). Today he is talking about his solution to the task `Trailing Zeros` of **["The Weekly Challenge - 072"](/blog/perl-weekly-challenge-072)**. This is re-produced for **Advent Calendar 2020** from the original [**post**](https://dev.to/scimon/the-weekly-challenge-in-raku-week-72-part-1-2i0g) by **Scimon Proctor**.

***

You are given a positive integer `$N (<= 10)`.

Write a script to print number of trailing zeroes in `$N!`.

## Example 1

#### Input: $N = 10
#### Output: 2 as $N! = 3628800 has 2 trailing zeroes

<br>

## Example 2

#### Input: $N = 7
#### Output: 1 as $N! = 5040 has 1 trailing zero

<br>

## Example 3

#### Input: $N = 4
#### Output: 0 as $N! = 24 has 0 trailing zero

***

# Finding Factorials

First thing to note is we can define the ! factorial operator quite easily :

```perl6
sub postfix:<!> (UInt $N) {...}
```

We'll cover the `...` bit in a sec but this defines `!` as a postfix operator that requires and Unsigned Integer in front of it. Thing is I won't be using this in my challenge because right now defining operators directly in scripts really slows down parsing (if you put them in Modules you get them precompiled but generally I don't make a module for the challenges).

Still it's nice to know you can do it. Anyway lets say we instead make a `fact($N)` sub how hard is that?

Personally I can think of three different ways of doing it off the top of my head, all of which are quite Rakuish so lets cover them each.

# Sequences are fun

A **Raku** `Seq` is a iterable object that returns values that are generally calculated as required. There's a couple of sequences that can provide factorials. This first uses the `...` [**Sequence operator**](https://docs.raku.org/language/operators#index-entry-..._operators)

```perl6
@F = (1,{$_ * $++}...*)
```

Here we define our starting condition `@F[0] == 1` then our iterator in this $_ is given the value of the previous item in the list and $ is a local state variable. This will be 1 in the first iteration so `@F[1] == 1` and then 2, 3 and so on. We use * as the final condition meaning we will keep generating values forever, but as sequences are lazy this doesn't cause our code to die.

Another way to create a `Sequence` would be to use [gather and take]{https://docs.raku.org/syntax/gather%20take} to explictly define it :

```perl6
my @F = lazy gather {
    my $idx = 1;
    my $val = 1;
    loop {
        take $val;
        $val *= $idx++;
    }
};
```

A bit more wordy but sometimes this can be good. For a simple sequence like this it's probably over kill but in other cases you may fine it useful.

# Recursion is fun too

A classic way to do factorials (and in some languages the only way) is to use recursion. Raku lends itself to this with multi subs for example :

```perl6
multi sub fact( 0 ) { 1 }

multi sub fact( UInt $N ) { $N * fact( $N - 1 ) }
```

Here fact will recursively call itself until `$N` is 1 at which point the fact(0) call will match and the stack can unroll.

This is probably safe to do as in this challenge `$N` can't go over 10 but it's dangerous to rely on otherwise as you may get stack overflows.

Still nice to know it's easy enough.

# Meta Ops are your friends

When I did the challenge my first thought was to turn to Meta Operators. As 5! can be written as `1 * 2 * 3 * 4 * 5` this looks to me like a reduction on the list `(1,2,3,4,5)` with the `*` operator. the `[]` reduction metaoperator lets you write this like so :

```perl6
sub fact(UInt $N) { [*] (1..$N) }
```

Note this works for `0` as the Range `1..0` is the list `(1)`.

# Finding the Trailing Zeros.

So we've got our factorial using one of the above options how do we find trailing zeros? Well as an old school Perl dev the first thing that comes to my mind is to use a Regex. The expression `0*$` will match 0 or more `0's` at the end of a string. We then can count the length of this match and return it:

```perl6
say (fact($N) ~~ m!(0*)$!)[0].Str.codes;
```

We get a Match object and can get it's zeroth value which is the first capture (here's a difference in Raku Regexes, captures start at 0). We coerce this to a Str and then count the code points. And Bingo, the count of trailing 0's.

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2020**](/blog/advent-calendar-2020)
