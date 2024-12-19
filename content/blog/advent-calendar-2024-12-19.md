---
title: "Advent Calendar - December 19, 2024"
date: 2024-12-19T00:00:00+00:00
description: "Advent Calendar - December 19, 2024."
type: post
image: images/blog/2024-12-19.jpg
author: David Ferrone
tags: ["Perl"]
---

## [**Advent Calendar 2024**](/blog/advent-calendar-2024)
### | &nbsp; [**Day 18**](/blog/advent-calendar-2024-12-18) &nbsp; | &nbsp; **Day 19** &nbsp; |
***

The gift is presented by `David Ferrone`. Today he is talking about his solution to [**The Weekly Challenge - 285**](/blog/perl-weekly-challenge-285). This is re-produced for `Advent Calendar 2024` from the original [**post**](https://dev.to/zapwai/lost-connections-and-making-changes-anp).

***

<br>

## Lost Connections and Making Changes
***

<br>

### Task #1: No Connection

    Given a list of routes, find the destination with no outgoing connection.

    For example, given [B, C] [D, B] [C, A] we have routes
    B -> C -> A
    D -> B -> C -> A
    C -> A

    Output: A

<br>

I make two lists, in-routes and out-routes, and then I see if there is an out that is not also an in.

<br>

```perl
use v5.38;
my @routes = (["B","C"], ["D","B"], ["C","A"]);
proc(@routes);
@routes = (["A","Z"]);
proc(@routes);

sub proc(@routes) {
    print "Input: ";
    print join(",", @{$routes[$_]})," " for (0 .. $#routes);
    print "\n";
    my @in;
    my @out;
    foreach (@routes) {
        push @in, ${$_}[0];
        push @out, ${$_}[1];
    }
    my $ans = "a";
    for my $needle (@out) {
        my $found = 0;
        for my $hay (@in) {
            if ($needle eq $hay) {
                $found = 1;
                last;
            }
        }
        if ($found == 0) {
            $ans = $needle;
        }
    }
    say "Output: $ans";
}
```

<br>

### Task #2: Making Change

    Compute the number of distinct ways to make change for a given amount. (Using Pennies, Nickels, Dimes, Quarters, and Half-Dollars.)

    There are two ways to make change for 9 cents (N + 4P or 9P).
    There are three ways to make change for 10 cents (2N, N + 5P, or 10P).

<br>

This challenge was inspired by an analysis book of `Pólya`. (`Problems and Theorems in Analysis`) The first question is to count the number of ways to make change for a dollar, which is arduous. It's a trivial task for a computer, though.

```perl
use v5.38;
my $amt = $ARGV[0] // 100;
my $cnt = 0;
for my $h (0 .. $amt/50) {
    for my $q (0 .. $amt/25) {
    for my $d (0 .. $amt/10) {
        for my $n (0 .. $amt/5) {
        for my $p (0 .. $amt) {
            if (tally($p, $n, $d, $q, $h) == $amt) {
            $cnt++;
            }
        }
        }
    }
    }
}
say "There are $cnt ways to make change for $amt cents";
sub tally($p, $n, $d, $q, $h) { $p + 5*$n + 10*$d + 25*$q + 50*$h
```

<br>

I have used a for loop for each coin, in a stunning display of brute force.

### P.S.
***

The original question was to be done by hand; In a manner similar to the above code, you could first divide to find the max possible number of pennies, nickels, etc that can be used. Then split into cases (i.e. H = 0, 1, or 2; Q = 0, 1, 2, 3, or 4; etc.)

The second question in Pólya's book asks for a function whose coefficients A_n (in a series expansion) would equal the number of ways to make change for n cents.

The concept there is that if you took a product like (1 + x + x^2 + x^3 + ... )(1 + x^5 + x^10 + x^15 + ...) the resulting series has coefficients which provide the number of ways to "make change" using pennies and nickels. (That is, a term like x^6 in our product could only have come from x * x^5 or from x^6 * 1, coinciding with the two unique ways we can make change for 6 cents.)

So theoretically, one could form the correct product (using five such factors, since there are five coins) - then expand and find the coefficient of the 100th term in order to find the number of ways to make change for 100 cents. That's easier said than done, however.

<br>

***

If you have any suggestion then please do share with us **<perlweeklychallenge@yahoo.com>**.

| &nbsp; [**Advent Calendar 2024**](/blog/advent-calendar-2024) &nbsp; |
