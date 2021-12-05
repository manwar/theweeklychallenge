---
title: "Advent Calendar - December 5, 2021"
date: 2021-12-05T00:00:00+00:00
description: "Advent Calendar - December 5, 2021."
type: post
image: images/blog/2021-12-05.jpg
author: Simon Green
tags: ["Perl"]
---

[**Advent Calendar 2021**](/blog/advent-calendar-2021)
***

The gift is presented by [**Simon Green**](/blog/meet-the-champion-2020-11). Today he is talking about his solution to [**"The Weekly Challenge - 101"**](/blog/perl-weekly-challenge-101). This is re-produced for **Advent Calendar 2021** from the original [**post**](https://dev.to/simongreennet/weekly-challenge-101-jeo) by `Simon Green`.

***

<br>

## Task #1: Pack a Spiral

You are given an array @A of items (integers say, but they can be anything).

Your task is to pack that array into an MxN matrix spirally counterclockwise, as tightly as possible.

> ‘Tightly’ means the absolute value |M-N| of the difference has to be as small as possible.

***

<br>

## My solution

<br>

This challenge is kinda of the reverse of task 2 from challenge 88. In that task we were given a spiral and had to unwind it.

This task can be broken up into three steps:

<br>

### 1. Work out the tightest grid.

    * Work with $y from 1 to one less than the array size.
    * If the array size can be evenly divided by $y and it is tighter than the current grid size, update $max_x and $max_y.

### 2. Populate the grid

    * Create a @direction array with the x/y offsets for right, up, left and down.
    * Create a loop from 0 to $#values.
    * Put that value in the given location.
    * If the next x/y value is either out of bounds or that position already has a value, change directions.

### 3. Display the grid

    * Since 0,0 represents the bottom left, we use the reverse function on the @grid array.
    * I use sprintf to right justify numbers and left justify strings. This ensure that even if the lengths of the values are different, they will be correctly aligned.

<br>

## Code

<br>

```perl
#!/usr/bin/env perl

use strict;
use warnings;
use feature 'say';
use List::Util 'max';

sub _get_tightest_grid {
    my $count = shift;
    my $max_x = $count;
    my $max_y = 1;

    for my $y ( 2 .. $count - 1 ) {
        my $x = $count / $y;
        if ( $count % $y == 0 and abs( $x - $y ) < abs( $max_x - $max_y ) ) {
            # We have found a tighter solution
            ( $max_x, $max_y ) = ( $x, $y );
        }
    }

    return ( $max_x, $max_y );

}

sub main {
    my @values = @_;
    die "You must specify at least one value\n" unless scalar(@values);

    # Work out the tightest grid. This is when the x + y values are the least
    my ( $max_x, $max_y ) = _get_tightest_grid( scalar(@values) );

    # The directions we can move (right, up, left, down)
    my @directions = ( [ 1, 0 ], [ 0, 1 ], [ -1, 0 ], [ 0, -1 ] );

    # Populate the grid
    my @grid = ();
    my $x    = my $y = my $direction = 0;    # Bottom left, going rightward
    foreach my $i ( 0 .. $#values ) {
        $grid[$y][$x] = $values[$i];

        # Determine the next position
        my $next_x = $x + $directions[$direction][0];
        my $next_y = $y + $directions[$direction][1];

        # We need to switch directions if we are out of bounds or the cell already has a value
        if (   $next_x >= $max_x
            or $next_y >= $max_y
            or $next_x == -1
            or $next_y == -1
            or defined( $grid[$next_y][$next_x] ) )
        {
            $direction = ++$direction % 4;
        }

        # Move to the next cell
        $x += $directions[$direction][0];
        $y += $directions[$direction][1];
    }

    # Display the output. Right aligned for all numbers, else left aligned
    my $max_length   = max( map { length($_) } @values );
    my $all_integers = grep { /^\d+$/ } @values;
    my $format       = $all_integers ? "\%${max_length}d" : "\%-${max_length}s";
    foreach my $row ( reverse @grid ) {
        say join ' ', map { sprintf $format, $_ } @$row;
    }
}

main(@ARGV);
```

<br>

## Examples

<br>

```perl
» ./ch-1.pl 1 2 3 4 5 6
6 5 4
1 2 3

» ./ch-1.pl 1 2 3 4 5 6 7 8 9 10 11 12
 9  8  7  6
10 11 12  5
 1  2  3  4

» ./ch-1.pl the quick brown fox jumps over the lazy dog
the   over  jumps
lazy  dog   fox
the   quick brown
```

***
If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2021**](/blog/advent-calendar-2021)
