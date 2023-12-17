---
title: "Advent Calendar - December 17, 2023"
date: 2023-12-17T00:00:00+00:00
description: "Advent Calendar - December 17, 2023."
type: post
image: images/blog/2023-12-17.jpg
author: Luca Ferrari
tags: ["Raku"]
---

## [**Advent Calendar 2023**](/blog/advent-calendar-2023)
### | &nbsp; [**Day 16**](/blog/advent-calendar-2023-12-16) &nbsp; | &nbsp; **Day 17** &nbsp; |
***

The gift is presented by `Luca Ferrari`. Today he is talking about his solution to [**The Weekly Challenge - 228**](/blog/perl-weekly-challenge-228). This is re-produced for `Advent Calendar 2023` from the original [**post**](https://fluca1978.github.io/2023/07/31/PerlWeeklyChallenge228.html).

***

<br>

## Sums and Swaps
***

### PWC 228 - Task 1 - Raku Implementation

<br>

The first task was about `summing` only the `non-repeated` numbers given as input.

<br>

```perl
sub MAIN( *@nums  where { @nums.elems == @nums.grep( * ~~ Int ).elems } ) {
    my $bag = @nums.Bag;
    $bag.keys.grep( { $bag{ $_ } == 1 } ).sum.say;
}
```

<br>

My solution is to classify the input array as a `Bag`, then to `grep` only those keys that have a value of `1`, and sum those keys.

<br>

### PWC 228 - Task 2 - Raku Implementation

<br>

This task was about doing a kind of `bubble sort` on an array, removing the `smallest one` if it is the `leftmost`, and counting the operations required to `empty` the array.

<br>

```perl
isub MAIN( *@nums where { @nums.grep( * ~~ Int ).elems == @nums.elems } ) {
    my @current = @nums;
    my $moves = 0;

    while ( @current ) {
        my $swap = @current.shift;
        @current.push: $swap  if $swap > @current.min;
        $moves++;
    }

    $moves.say;
}
```

<br>

Until the `@current` array is empty, I extract the leftmost value in the array by means of a `shift` operation. If such value is the `current minimum`, than nothing else is required (since the element has been already removed from the array), otherwise I need to push it to the end of the array. In any case, an operation has been performed, so `$moves` is increased.

<br>

### PWC 228 - Task 1 - PL/Perl Implementation

<br>

Same idea as in the `Raku` implementation: I do classify the input array, then `grep` to keep only `unique` keys, and then `sum`.

<br>

```perl
CREATE OR REPLACE FUNCTION
pwc228.task1_plperl( int[] )
RETURNS int
AS $CODE$
   my ( $array ) = @_;
   my $bag = {};

   # classify the elements
   $bag->{ $_ }++ for ( $array->@* );

   my ( @uniques ) = grep( { $bag->{ $_ } == 1 } keys( $bag->%* ) );
   my $sum = 0;
   $sum += $_ for ( @uniques );
   return $sum;
$CODE$
LANGUAGE plperl;
```

<br>

### PWC 228 - Task 2 - PL/Perl Implementation

<br>

The same idea of the `Raku` implementation, but a little more verbose since I define a `min` inner function to calculate the `min value` of the given array. Also please note that there is the need to terminate the loop when the `min` function returns an `undef` value.

<br>

```perl
CREATE OR REPLACE FUNCTION
pwc228.task2_plperl( int[] )
RETURNS int
AS $CODE$
   my ( $array ) = @_;
   my $moves = 0;

   # a function to find out the min value
   my $min = sub {
      my $min = undef;
      for ( $_[0]->@* ) {
            $min = $_ if ( ! $min || $min > $_ );
      }

      return $min;
   };

   while ( scalar $array->@* ) {
        my ( $swap, $min ) = ( shift( $array->@* ), $min->( $array ) );
     $moves++;
     last if ! $swap;
     last if ! $min;
     push $array->@*, $swap  if ( $swap > $min );

   }

   return $moves;
$CODE$
LANGUAGE plperl;
```

<br>

### PWC 228 - Task 1 - PL/PgSQL Implementation

<br>

This task can be solved with a single `SQL` query:

```perl
CREATE OR REPLACE FUNCTION
pwc228.task1_plpgsql( a int[] )
RETURNS int
AS $CODE$
   WITH BAG as (
      SELECT v
      FROM unnest( a ) v
      GROUP BY v
      HAVING count(*) = 1
   )
   SELECT sum( v )
   FROM bag;
$CODE$
LANGUAGE sql;
```

<br>

The `bag` part of the query materializes the `unique set` of values that are not repeated, then the other part of the query performs the `sum`.

<br>

### PWC 228 - Task 2 - PL/PgSQL Implementation

<br>

The second task can be solved as in the `PL/Perl` way, but it is importan to note that `PostgreSQL` does not provide a `shift` like array operation.

<br>

```perl
CREATE OR REPLACE FUNCTION
pwc228.task2_plpgsql( a int[] )
RETURNS int
AS $CODE$
DECLARE
    current_min int;
    current_swap int;
    moves int := 0;
BEGIN
    WHILE array_length( a, 1 ) > 1 LOOP
          -- find the min value
          SELECT min( v )
          INTO current_min
          FROM unnest( a ) v;



          -- unshift the first element
          current_swap := a[ 1 ];
          a := a[ 2 : array_length( a, 1 ) ];

          IF current_swap > current_min THEN
               a := array_append( a, current_swap );
          END IF;

          moves := moves + 1;

    END LOOP;

    RETURN moves;

END
$CODE$
LANGUAGE plpgsql;
```

<br>

The trick to simulate the `shift` operation is to access an `array slice` starting from `2` (because in `SQL` the arrays all start at index `1`).

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

| &nbsp; [**Advent Calendar 2023**](/blog/advent-calendar-2023) &nbsp; |
