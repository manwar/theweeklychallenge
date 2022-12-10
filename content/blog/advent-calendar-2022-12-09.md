---
title: "Advent Calendar - December 9, 2022"
date: 2022-12-09T00:00:00+00:00
description: "Advent Calendar - December 9, 2022."
type: post
image: images/blog/2022-12-09.jpg
author: Luca Ferrari
tags: ["Raku"]
---

## [**Advent Calendar 2022**](/blog/advent-calendar-2022)
### | &nbsp; [**Day 8**](/blog/advent-calendar-2022-12-08) &nbsp; | &nbsp; **Day 9** &nbsp; | &nbsp; [**Day 10**](/blog/advent-calendar-2022-12-10) &nbsp; |
***

The gift is presented by `Luca Ferrari`. Today he is talking about his solution to [**"The Weekly Challenge - 155"**](/blog/perl-weekly-challenge-155). This is re-produced for **Advent Calendar 2022** from the original [**post**](https://fluca1978.github.io/2022/03/07/PerlWeeklyChallenge155.html) by him.

***

<br>

It is sad that, after more than two years of me doing Raku, I still don’t have any production code project to work on. Therefore, in order to keep my coding and Raku-ing (is that a term?) knowdledge, I try to solve every [**Perl Weekly Challenge**](https://perlweeklychallenge.org/) tasks.

## PWC  155 - Task 1

<br>

Not so hard: compute the `Fortunate numbers`, those numbers that sum with a pn give a prime number. Here, `pn` stands for the multiplication of all n prime numbers. The task added to find out all `first 8 unique Fortunate numbers`.

<br>

```perl
sub MAIN( Int $limit where { $limit > 0 } = 8 ) {
    my @fortunate-numbers = lazy gather {
        for 2 .. Inf {
            my @pn = ( 1 .. $_ ).grep: *.is-prime;
            next if ! @pn;
            for @pn.max + 1 .. Inf -> $m {
                take $m and last if ( ( [*] @pn ) + $m ).is-prime;
            }
        }
    }

    my @unique-fortunate-numbers;
    my $last-number = 0;
    while ( @unique-fortunate-numbers.elems < $limit ) {
        my $fortunate = @fortunate-numbers[ $last-number++ ];
        @unique-fortunate-numbers.push: $fortunate if ! @unique-fortunate-numbers.grep: * ~~ $fortunate;
    }

    @unique-fortunate-numbers[ 0 .. $limit - 1 ].sort.join( "\n" ).say;
}
```

<br>

The `@fortunate-numbers` is a lazy array computed by `means of @pn`, which is the list of all prime numbers up to a given number, and then a new loop is done to find out the smallest `$m` number greater than any value in `@pn` that, when summed with the multiplication of all values in @pn gives a prime.

To find out only unique numbers, I loop again to build a `@unique-fortunate-numbers` array and stop the searching for as soon as the elements in the array are at the limit.

<br>

##  PWC 155 - Task 2

<br>

`Pisano Period`: finding out the repetition of the sequence of Fibonacci when every element is modulo a given number.

<br>

```perl
sub MAIN( Int $nth where { $nth >= 3 } = 3,
          Int $accuracy where { $accuracy > 1 } = 5,
          Bool :$verbose = False ) {

    my @fibonacci = 0, 1, 1, 2, * + * ... *;
    my @pisano    = @fibonacci.map: * % 3;

    # with nth >= 3 the period is always even
    my $period = 2;

    # build $accuracy arrays to check
    my @checking.push: @pisano[ ( 0 + $period * $_ ) .. ( $period * ( $_  + 1 ) ) - 1 ] for 1 .. $accuracy;

    # while the array are not all the same, grow them and recheck
    while ( not [eqv] @checking ) {
        $period += 2;
        @checking = ();
        @checking.push: @pisano[ ( 0 + $period * $_ ) .. ( $period * ( $_  + 1 ) ) - 1 ] for 1 .. $accuracy;
    }

    @checking.join( "\n" ).join( ',' ).say if $verbose;
    "Pisano period $nth is $period".say;

}
```

<br>

The idea is to build a lazy sequence `@pisano` that `map`s every element of the Fibonacci’s serie `modulo 3` as asked. Since, when the modulo applied is greater or equal to 3, the period (i.e., the size of repeating part of the sequence) is always even, I start with a `$period` of `2`. Then I extract a number of arrays of size `$period` equal in number to `$accuracy`, e.g., 5 arrays of size 2. Last, I check if the extracted array are all the same, i.e., are `eqv`. If they are, the `$period` is found, otherwise I increase the period of a even value and do it again.

<br>

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

| &nbsp; [**Advent Calendar 2022**](/blog/advent-calendar-2022) &nbsp; |
