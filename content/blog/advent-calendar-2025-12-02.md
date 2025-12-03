---
title: "Advent Calendar - December 2, 2025"
date: 2025-12-02T00:00:00+00:00
description: "Advent Calendar - December 2, 2025."
type: post
image: images/blog/2025-12-02.jpg
author: Dave Jacoby
tags: ["Perl"]
---

## [**Advent Calendar 2025**](/blog/advent-calendar-2025)
### | &nbsp; [**Day 1**](/blog/advent-calendar-2025-12-01) &nbsp; | &nbsp; **Day 2** &nbsp; | &nbsp; [**Day 3**](/blog/advent-calendar-2025-12-03) &nbsp; |
***

The gift is presented by `Dave Jacoby`. Today he is talking about his solution to [**The Weekly Challenge - 304**](/blog/perl-weekly-challenge-304). This is re-produced for `Advent Calendar 2025` from the original [**post**](https://jacoby-lpwk.onrender.com/2025/01/13/not-modified-weekly-challenge-304.html).

***

<br>

Welcome to Weekly Challenge #304! 304 is many things: A compound number (2<sup>4 * 19), the area code for West Virginia, a common and corrosion-resistant alloy of stainless steel, (with leading zero) an album by Jewel that Todd in the Shadows calls a Trainwrecord, and an HTTP error code.

<br>

![304 Not Modified](https://http.cat/304.jpg)

<br>

The 304 (Not Modified) status code indicates that a conditional GET or HEAD request has been received and would have resulted in a 200 (OK) response if it were not for the fact that the condition evaluated to false. In other words, there is no need for the server to transfer a representation of the target resource because the request indicates that the client, which made the request conditional, already has a valid representation; the server is therefore redirecting the client to make use of that stored representation as if it were the payload of a 200 (OK) response. (RFC 7232, Section 4.1)

## Task 1: Arrange Binary

    You are given a list of binary digits (0 and 1) and a positive integer, $n.

    Write a script to return true if you can re-arrange the list by replacing at least $n digits with 1 in the given list so that no two consecutive digits are 1, otherwise return false.


## Let’s Talk About

I don’t often use any, one of the functions we get from List::Util. if ( any { $_ eq 'true' } @array ) { ... } is a perfectly wonderful thing, but I found it impossible to use it with a ternary, like return any { $_ eq 'true' } @array ? 'true' : 'false'. I don’t know what the problem is, but it annoys me, but I could still do return 'true' if any { regex } @array; return 'false', so it’s all good.

When writing non-function code, I find I can get locked up in deep if statements. This could’ve been something like:

<br>

```perl
if ( test @digits ) {
    if ( $n == 0 ) {
        ...
    } else {
        for my $i ( 0 .. $d ) { ... }
        if ( any { ... } @output ) { ... }
        else { ... }
    }
}
else { ... }
```

Having the ability to return out of the problem makes it very readable code, to me.

So, there’s n 1s to place, so the code:

- tests if the array has adjacent 1s already
- sees if n is greater than 0, where we can report success
- loops through the array, and if a value is 0:
  - creates an array copy
  - changes that position from 0 to 1
  - starts from this position with n-1, because This Looks Like A Job For Recursion1
- collect the output of each recursion
- return true if anything in the output is true
- return false

## Show Me The Code!

<br>

```perl
#!/usr/bin/env perl

use strict;
use warnings;
use experimental qw{ say state postderef signatures };

use List::Util qw{any};

my @examples = (

    { n => 1, digits => [ 1, 0, 0, 0, 1 ], },
    { n => 2, digits => [ 1, 0, 0, 0, 1 ], },
);

for my $example (@examples) {
    my $n      = $example->{n};
    my @digits = $example->{digits}->@*;
    my $digits = join ', ', @digits;
    my $output = rearrange_binary($example);
    say <<"END";
    Input:  \@digits = ($digits), \$n = $n
    Output: $output
END
}

sub rearrange_binary($example) {
    my $n      = $example->{n};
    my @digits = $example->{digits}->@*;
    my @output;
    my $d = $#digits;
    return 'false' unless test(@digits);
    if ( $n == 0 ) {
        return 'true';
    }
    for my $i ( 0 .. $d ) {
        next if $digits[$i] == 1;
        my @new = @digits;
        $new[$i] = 1;
        push @output , rearrange_binary( { digits => \@new, n => $n - 1 } );
    }
    return 'true' if any { $_ eq 'true' } @output;
    return 'false';
}

sub test (@array) {
    my $d = $#array;
    for my $i ( 1 .. $d ) {
        return 0 if $array[$i] == 1 && $array[ $i - 1 ] == 1;
    }
    return 1;
}
```

<br>

```bash
$ ./ch-1.pl
    Input:  @digits = (1, 0, 0, 0, 1), $n = 1
    Output: true

    Input:  @digits = (1, 0, 0, 0, 1), $n = 2
    Output: false
```

<br>

## Task 2: Maximum Average

    You are given an array of integers, @ints and an integer, $n which is less than or equal to total elements in the given array.

    Write a script to find the contiguous subarray whose length is the given integer, $n, and has the maximum average. It should return the average.

## Let’s Talk About It

I think the only interesting thing to say about this is about the difference between scalar @array and $#array. $#array gives you the address of the last array, while scalar @array gives you the size. I often do -1 + scalar @array, especially since I’m often doing it on array references. I use $#array to find the location of the last index, and scalar @slice to test the size of the slice and see if it’s what we need.

Otherwise, max from List::Util to find the biggest number (replacable by shift sort { $b <=> $a } @output) and sum0 (instead of sum because it has better behavior, IMHO). Average = sum0 / scalar.

## Show Me The Code!

<br>


```perl
#!/usr/bin/env perl

use strict;
use warnings;
use experimental qw{ say state postderef signatures };

use List::Util qw{ max sum0 };
use Carp;

my @examples = (

    { digits => [ 1, 12, -5, -6, 50, 3 ], n => 4 },
    { digits => [5],                      n => 1 },
);

for my $example (@examples) {
    my $n      = $example->{n};
    my @digits = $example->{digits}->@*;
    my $digits = join ', ', @digits;
    my $output = maximum_average($example);
    say <<"END";
    Input:  \@digits = ($digits), \$n = $n
    Output: $output
END
}

sub maximum_average($example) {
    my $n      = $example->{n};
    my @digits = $example->{digits}->@*;
    my @output;
    my $d = $#digits;

    for my $i ( 0 .. $d ) {
        my @slice = grep { defined } @digits[ $i .. $i + $n - 1 ];
        next unless $n == scalar @slice;
        push @output, average(@slice);
    }
    return max @output ;
}

sub average (@nums) {
    return ( sum0 @nums ) / ( scalar @nums );
}
```

<br>


```bash
$ ./ch-2.pl
    Input:  @digits = (1, 12, -5, -6, 50, 3), $n = 4
    Output: 12.75

    Input:  @digits = (5), $n = 1
    Output: 5
```

<br>

***

If you have any suggestion then please do share with us **<perlweeklychallenge@yahoo.com>**.

| &nbsp; [**Advent Calendar 2025**](/blog/advent-calendar-2025) &nbsp; |
