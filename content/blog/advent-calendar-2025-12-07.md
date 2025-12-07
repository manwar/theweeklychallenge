---
title: "Advent Calendar - December 7, 2025"
date: 2025-12-07T00:00:00+00:00
description: "Advent Calendar - December 7, 2025."
type: post
image: images/blog/2025-12-07.jpg
author: Luca Ferrari
tags: ["Raku", "Perl", "PostgreSQL"]
---

## [**Advent Calendar 2025**](/blog/advent-calendar-2025)
### | &nbsp; [**Day 6**](/blog/advent-calendar-2025-12-06) &nbsp; | &nbsp; **Day 7** &nbsp; |
***

The gift is presented by `Luca Ferrari`. Today he is talking about his solution to [**The Weekly Challenge - 309**](/blog/perl-weekly-challenge-309). This is re-produced for `Advent Calendar 2025` from the original [**post**](https://fluca1978.github.io/2025/02/20/PerlWeeklyChallenge309.html).

***

<br>

This post presents my solutions to the [**Perl Weekly Challenge 309**](https://perlweeklychallenge.org/blog/perl-weekly-challenge-309).

I keep doing the `Perl Weekly Challenge` in order to mantain my coding skills in good shape, as well as in order to learn new things, with particular regard to `Raku`, a language that I love.

This week, I solved the following tasks:

The `PL/Perl` implementations are very similar to a pure `Perl` implementation, even if the `PostgreSQL` environment could involve some more constraints. Similarly, the `PL/PgSQL` implementations help me keeping my `PostgreSQL` programming skills in good shape.

## Raku Implementations
***

<br>

### PWC 309 - Task 1 - Raku Implementation

Given a sorted array of integers, find out the integer that has the min differences from the previous one.

<br>

```raku
sub MAIN( *@nums where { @nums.grep( * ~~ Int ).elems == @nums.elems } ) {
    my %gaps;
    for 1 ..^ @nums.elems {
        %gaps{ @nums[ $_ ] - @nums[ $_ - 1 ] } = @nums[ $_ ];
    }

    %gaps{ %gaps.keys.min }.say;
}
```

<br>

I populate an hash of `%gaps` with the difference between elements, and value as the element, so that it does just suffice to extract the min key of the has to get the value. Please note that duplicated differences are overwritten, so only the last smallest difference is kept.

<br>

### PWC 309 - Task 2 - Raku Implementation

Given an array of integers, find out the smallest difference between any element of the array.

<br>

```raku
sub MAIN( *@nums where { @nums.grep( * ~~ Int ).elems == @nums.elems } ) {

    my $min = Inf;
    for @nums -> $current {
        my $found = @nums
                 .grep( * != $current )
                 .map( { abs( $current - $_.Int ) } )
                 .min;
        $min = $found if $min > $found;
    }

    $min.say;
}
```

<br>

I iterate over element of the array, and then grep for all other elements, mapping each one to the difference and extracting the min value. If the min is less than the initial one, or previous one, I keep this, otherwise go to the next element.

<br>

## PL/Perl Implementations
***

<br>

### PWC 309 - Task 1 - PL/Perl Implementation

Essentially, this is the same implementation as in `Raku`.

<br>

```perl
CREATE OR REPLACE FUNCTION
pwc309.task1_plperl( int[] )
RETURNS int
AS $CODE$

   my ( $nums ) = @_;
   my $gaps = {};

   for my $index ( 1 .. $nums->@* - 1 ) {
       $gaps->{ $nums->@[ $index ] - $nums->@[ $index - 1 ] } = $nums->@[ $index ];
   }

   return $gaps->{ ( sort( keys $gaps->%* ) )[0] };

$CODE$
LANGUAGE plperl;
```

<br>

### PWC 309 - Task 2 - PL/Perl Implementation

Same solution as in `Raku`.

<br>

```perl
CREATE OR REPLACE FUNCTION
pwc309.task2_plperl( int[] )
RETURNS int
AS $CODE$

   my ( $nums ) = @_;
   my $min;

   for my $current ( $nums->@* ) {

       my $current_min = (
                       sort
                       map { $_ > $current ? $_ - $current : $current - $_ }
                       grep { $_ != $current }
                       $nums->@* )[ 0 ];

      if ( ! $min || $current_min < $min ) {
           $min = $current_min;
      }
   }

   return $min;

$CODE$
LANGUAGE plperl;
```

<br>

I use sort on the resulting list to get out the min value.

<br>

## PostgreSQL Implementations
***

<br>

### PWC 309 - Task 1 - PL/PgSQL Implementation

A single query with window functions make the deal to find out, for each value, the difference with the next one, hence the min difference.

<br>

```perl
CREATE OR REPLACE FUNCTION
pwc309.task1_plpgsql( nums int[] )
RETURNS int
AS $CODE$

   WITH data AS (
       SELECT v, v - lag( v, 1, v * -10 ) over () AS diff
    FROM unnest( nums ) v
    ORDER BY diff ASC
   )
   SELECT  v
   FROM data

   LIMIT 1;

$CODE$
LANGUAGE sql;
```

<br>

### PWC 309 - Task 2 - PL/PgSQL Implementation

In this implementation I iterate over the array elements and compute the differences.

<br>

```perl
CREATE OR REPLACE FUNCTION
pwc309.task2_plpgsql( nums int[] )
RETURNS int
AS $CODE$
DECLARE

    diff int;
    current_diff int;
    l int;
    r int;
BEGIN
    FOR l IN SELECT v FROM unnest( nums ) v LOOP
        for r IN SELECT v FROM unnest( nums ) v LOOP
            IF r = l THEN
           CONTINUE;
        END IF;

            current_diff := r - l;
        IF current_diff < 0 THEN
           current_diff := current_diff * -1;
        END IF;

        IF diff IS NULL OR current_diff < diff THEN
           diff := current_diff;
        END IF;
        END LOOP;

    END LOOP;

    RETURN diff;

END
$CODE$
LANGUAGE plpgsql;
```

<br>

***

If you have any suggestion then please do share with us **<perlweeklychallenge@yahoo.com>**.

| &nbsp; [**Advent Calendar 2025**](/blog/advent-calendar-2025) &nbsp; |
