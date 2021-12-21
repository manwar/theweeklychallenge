---
title: "Advent Calendar - December 14, 2021"
date: 2021-12-14T00:00:00+00:00
description: "Advent Calendar - December 14, 2021."
type: post
image: images/blog/2021-12-14.jpg
author: Luca Ferrari
tags: ["Raku"]
---

## [**Advent Calendar 2021**](/blog/advent-calendar-2021)
### | [**Day 13**](/blog/advent-calendar-2021-12-13) | **Day 14** | [**Day 15**](/blog/advent-calendar-2021-12-15) |
***

The gift is presented by [**Luca Ferrari**](/blog/meet-the-champion-2020-04). Today he is talking about his solution to [**"The Weekly Challenge - 126"**](/blog/perl-weekly-challenge-126). This is re-produced for **Advent Calendar 2021** from the original [**post**](https://fluca1978.github.io/2021/08/16/PerlWeeklyChallenge126.html) by `Luca Ferrari`.

***

<br>

## Task #2: Minesweeper Game

<br>

You are given a rectangle with points marked with either x or *. Please consider the x as a land mine.

Write a script to print a rectangle with numbers and x as in the Minesweeper game.

***

<br>

## Example

<br>

#### Input:

    x * * * x * x x x x
    * * * * * * * * * x
    * * * * x * x * x *
    * * * x x * * * * *
    x * * * x * * * * x

#### Output:

    x 1 0 1 x 2 x x x x
    1 1 0 2 2 4 3 5 5 x
    0 0 1 3 x 3 x 2 x 2
    1 1 1 x x 4 1 2 2 2
    x 1 1 3 x 2 0 0 1 x

<br>

The second task was about rewriting the mine swiper game. The task was not hard, but I solved with a few nested loops.
First of all, let’s do a couple of utility functions:

#### `is-mine` accepts the array of input and the position (as row and column), and returns true if the position is a mine (i.e., an x);

<br>

#### `compute-mines` accepts the same input and tries to move on near positions to see how many mines there are.

<br>

```perl6
sub is-mine( @input, $row, $column ) {
    return @input[ $row ][ $column ] ~~ 'x';
}

sub compute-mines( @input, $row, $column ) {
    my $counter = 0;

    # see where we can move
    my ( $can-left, $can-right, $can-up, $can-down ) =
         $column > 0, $column < @input[ 0 ].elems, $row > 0, $row < @input.elems;

    # left, if possible
    $counter++  if ( $can-left && is-mine( @input, $row, $column - 1 ) );
    # up if possible
    $counter++  if ( $can-up && is-mine( @input, $row - 1, $column ) );
    # down if possible
    $counter++  if ( $can-down && is-mine( @input, $row + 1 , $column ) );
    # right if possible
    $counter++  if ( $can-right && is-mine( @input, $row, $column + 1 ) );

    # left up
    $counter++  if ( $can-left && $can-up && is-mine( @input, $row - 1, $column - 1 ) );
    # right up
    $counter++  if ( $can-up &&  $can-right && is-mine( @input, $row - 1, $column + 1 ) );
    # left down
    $counter++  if ( $can-left && $can-down && is-mine( @input, $row + 1, $column - 1 ) );
    # right down
    $counter++  if ( $can-down && $can-right && is-mine( @input, $row + 1, $column + 1 ) );

    # left up if possible

    return $counter;
}
```

<br>

The most complex part is within the `compute-mines:` in short the function checks if it can move `up`, `down`, `left` and `right` and `diagonal` directions without going over the array boundaries. If the move can be done, and in that position there is a mine, the `$counter` variable is incremented.

It is now turn to use the above functions in the main program:

<br>

```perl6
sub MAIN() {
    my @input =
     qw/ x * * * x * x x x x /,
     qw/ * * * * * * * * * x /,
     qw/ * * * * x * x * x * /,
     qw/ * * * x x * * * * * /,
     qw/ x * * * x * * * * x /;

    my $rows = @input.elems;
    my $columns = @input[ 0 ].elems;

    my ( $current-row, $current-column ) = 0, 0;
    for 0 ..^ $rows -> $current-row {
        for 0 ..^ $columns -> $current-column {
            print is-mine( @input, $current-row, $current-column ) ?? 'x'
                      !! compute-mines( @input, $current-row, $current-column );
        }

        print "\n";
    }
}
```

<br>

As you can see, the `@input` array contains the mine field, and the first step is to compute the number of rows and columns, than to do a nested loop to print either the mine or the number computed by `compute-mines`.

The final result is something like the following:

<br>

    % raku ch-2.p6
    x101x2xxxx
    126224355x
    0013x3x2x2
    111xx41222
    x113x2001x

<br>

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2021**](/blog/advent-calendar-2021)
