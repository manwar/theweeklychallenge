---
title: "Advent Calendar - December 23, 2024"
date: 2024-12-23T00:00:00+00:00
description: "Advent Calendar - December 23, 2024."
type: post
image: images/blog/2024-12-23.jpg
author: Luca Ferrari
tags: ["Java", "PostgreSQL", "Raku", "Python"]
---

## [**Advent Calendar 2024**](/blog/advent-calendar-2024)
### | &nbsp; [**Day 22**](/blog/advent-calendar-2024-12-22) &nbsp; | &nbsp; **Day 23** &nbsp; |
***

The gift is presented by `Luca Ferrari`. Today he is talking about his solution to [**The Weekly Challenge - 298**](/blog/perl-weekly-challenge-298). This is re-produced for `Advent Calendar 2024` from the original [**post**](https://fluca1978.github.io/2024/12/02/PerlWeeklyChallenge298.html).

***

<br>

## Perl Weekly Challenge 298
***

This post presents my solutions to the `Perl Weekly Challenge 298`.

I keep doing the `Perl Weekly Challenge` in order to mantain my coding skills in good shape, as well as in order to learn new things, with particular regard to `Raku`, a language that I love.

The `PL/Perl` implementations are very similar to a pure `Perl` implementation, even if the `PostgreSQL` environment could involve some more constraints. Similarly, the `PL/PgSQL` implementations help me keeping my `PostgreSQL` programming skills in good shape.

<br>

### Task #1: Raku Implementations
***

The first task was about to find the biggest square made only by 1s in a binary value matrix.

<br>

```perl
sub MAIN() {

    my  @matrix = [1, 0, 1, 0, 0],
                  [1, 0, 1, 1, 1],
                  [1, 1, 1, 1, 1],
                  [1, 0, 0, 1, 0];

    my @sizes;

    for 0 ..^ @matrix.elems  -> $row {
    	for 0 ..^ @matrix[ $row ].elems  -> $col {
    	    next if @matrix[ $row ][ $col ] != 1;

    	    my $size = 1;
    	    my $found = True;

    	    while ( $found ) {
    			if ( $col + $size >= @matrix[ $row ].elems || $row + $size >= @matrix.elems ) {
    			    $found = False;
    			    $size--;
    			    last;
    			}

    			if ( @matrix[ $row .. $row + $size ][ $col .. $col + $size ].grep( * !~~ 1 ) ) {
    			    $found = False;
    			    $size = $size - 1;
    			    last;
    			}
    			else {
    			    $size++;
    			}
    	    }

    	    @sizes.push: $size;
    	}
    }

    @sizes.max.say;

}
```

<br>

My idea, used also in all the other implementations, is to place the top leftmost corner of the square on the current cell I’m analyzing. Therefore, having placed the top leftmost corner, I can splice the array/matrix into a list of bits, that must be all 1s. I gradually increases the $size to check the square.

<br>

### Task #2: Raku Implementations
***

The second task was about finding the index of interval that has a beginning position lowest that matches another interval.

<br>

```perl
sub MAIN() {
    my @intervals = [ 3, 4 ],
    	    [ 2, 3 ],
    	    [ 1, 2 ];

    my @right;

    for 0 ..^ @intervals.elems -> $current {
    	my %found;

    	for 0 ..^ @intervals.elems -> $next {
    	    next if ( @intervals[ $current ][ 0 ] == @intervals[ $next ][ 0 ]
    						      && @intervals[ $current ][ 1 ] == @intervals[ $next ][ 1 ] );

    	    %found{ @intervals[ $next ][ 0 ] }.push: $next if ( @intervals[ $next ][ 0 ] >= @intervals[ $current ][ 1 ] );
    	}

    	@right.push: -1 and next if ( ! %found );
    	@right.push: %found{ %found.keys.min };
    }

    @right.join( ',' ).say;
}
```

<br>

My implementation is surely too much complex: I evaluate every array in the `@intervals`, than place the value and the index into the `%found` hash, and the smallest one into the final `@right` array.

<br>

### Task #1: PL/Perl Implementations
***

The implementation is the same as in `Raku`.

<br>

```perl
CREATE OR REPLACE FUNCTION
pwc298.task1_plperl( int[][] )
RETURNS int
AS $CODE$

   my ( $matrix ) = @_;

   my @sizes;

   for my $row ( 0 .. $matrix->@* - 1 ) {
       for my $col ( 0 .. $matrix->[ $row ]->@* - 1 ) {
              next if ( $matrix->[ $row ][ $col ] != 1 );

       my ( $size, $found ) = ( 2, 1 );
       while ( $found ) {
       	 if ( $col + $size >= $matrix->[ $row ]->@* || $row + $size >= $matrix->@* ) {
    	    $found = 0;
    	    $size--;
    	    last;
    	 }

    	 if ( grep( { $_ != 1 } $matrix->@[ $row .. $row + $size ]->@[ $col .. $col + $size ] ) ) {
    	    $found = 0;
    	    $size--;
    	    last;
    	 }
    	 else {
    	      $size++;
    	 }

       }

       push @sizes, $size;
       }
   }

   return ( sort( @sizes ) )[ -1 ];

$CODE$
LANGUAGE plperl;
```

<br>

### Task #2: PL/Perl Implementations
***

Similar implementation to the `Raku` one, but here I use a couple of values to keep track of the `“minimal interval”`, that is then pushed into an array.

<br>

```perl
CREATE OR REPLACE FUNCTION
pwc298.task2_plperl( int[] )
RETURNS int[]
AS $CODE$

   my ( $intervals ) = @_;
   my @right;

   for my $current ( 0 .. $intervals->@* - 1 ) {
       my $min = undef;
       my $found_index = undef;

       for my $other ( 0 .. $intervals->@* - 1 ) {
              next if ( $other == $current );

       if ( $intervals->[ $other ]->[ 0 ] >= $intervals->[ $current ]->[ 1 ] ) {
          if ( ! $min || $min > $intervals->[ $other ]->[ 0 ] ) {
          	 $min = $intervals->[ $other ]->[ 0 ];
    	 $found_index = $other;
          }
       }
       }

       $found_index //= -1;
       push @right, $found_index;
   }

   return [ @right ];

$CODE$
LANGUAGE plperl;
```

<br>

### Task #1: PL/PgSQL Implementation
***

I use a temporay table to store the intermediate state of the evaluation.

```perl
CREATE OR REPLACE FUNCTION
pwc298.task1_plpgsql( matrix int[][] )
RETURNS int
AS $CODE$
DECLARE
    r int;
    c int;
    ok boolean;
    square int;
BEGIN

    create temporary table if not exists t_squares( s int, from_row int, from_col int );
    truncate t_squares;

    for r in 1 .. array_length( matrix, 1 ) loop

        for c in 1 .. array_length( matrix, 2 ) loop

        	if matrix[ r ][ c ] <> 1 then
    	   continue;
    	end if;


    	square := 1;
    	ok := true;
    	<<restart>>

    	while ok and r + square < array_length( matrix, 1 ) and c + square < array_length( matrix, 2 ) loop
    	      for rr in r .. r + square loop
    	      	  if not ok then
    		     exit;
    		  end if;

    	      	  for cc in c .. c + square loop
    		      if matrix[ rr ][ cc ] <> 1 then
    		      	 ok := false;
    			 square := square - 1;
    			 exit;
    		      end if;
    		  end loop;

    	      end loop;

    	     insert into t_squares
    	     values( square + 1, r, c );

    	     square := square + 1;

    	end loop restart;
    	      raise info 'Fine while';
        end loop;
    end loop;



        select max( s )
    into r
    from t_squares;

    return r;
END
$CODE$
LANGUAGE plpgsql;
```

<br>

Note how long and verbose it is this implementation. Note also the usage of a label to stop a loop and restart over.

<br>

### Task #2: PL/PgSQL Implementation
***

here, I cheated, and I passed the implementation to the PL/Perl one.

<br>

```perl
CREATE OR REPLACE FUNCTION
pwc298.task2_plpgsql( intervals int[][] )
RETURNS int[]
AS $CODE$
   SELECT pwc298.task2_plperl( intervals );
$CODE$
LANGUAGE sql;
```

<br>

### Task #1: Java Implementations
***

A nested loop based implementation. Note that I need to convert a monodimensional matrix into a bidimensional one, since `PL/Java` does not allow for an `int[][ type`.

<br>

```perl
@Function( schema = "pwc298",
           onNullInput = RETURNS_NULL,
           effects = IMMUTABLE )
public static final int task1_pljava(int[] plain_matrix, int cols ) throws SQLException {
    logger.log( Level.INFO, "Entering pwc298.task1_pljava" );

    int max_size = -1;

    int matrix[][] = new int[ plain_matrix.length / cols ][ cols ];

    // convert the plain matrix in a two dimensional matrix
    for ( int r = 0; r < plain_matrix.length / cols; r++ )
        for ( int c = 0; c < cols; c++ )
    	matrix[ r ][ c ] = plain_matrix[ r * cols + c ];


    for ( int r = 0; r < matrix.length; r++ ) {
        for ( int c = 0; c < matrix[ r ].length; c++ ) {

    	if ( matrix[ r ][ c ] != 1 )
    	    continue;

    	int size = 1;
    	boolean ok = true;

    	while ( ok
    		&& r + size  < matrix.length
    		&& c + size < matrix[ r ].length ) {

    	    for ( int rr = r; rr <= r + size; rr++ ) {
    			if ( ! ok )
    			    break;

    			for ( int cc = c; cc <= c + size; cc++ ) {
    			    if ( matrix[ rr ][ cc ] != 1 ) {
    				ok = false;
    				break;
    			    }
    			}
    	    }

    	    if ( size > max_size )
    			max_size = size;

    	    size++;
    	}
      }
    }


       return max_size;
}
```

<br>

### Task #2: Java Implementations
***

Similar to PL/Perl implementation.

<br>

```perl
public static final int[] task2_pljava( int[] plain_intervals ) throws SQLException {
    logger.log( Level.INFO, "Entering pwc298.task2_pljava" );

    int index = 0;
    int intervals[][] = new int[ plain_intervals.length / 2 ][ 2 ];

    for ( int i = 0; i < plain_intervals.length; i++ ) {
        intervals[ index ][ 0 ]   = plain_intervals[ i ];
        intervals[ index++ ][ 1 ] = plain_intervals[ ++i ];
    }


    int return_values[] = new int[ intervals.length ];
    index = 0;


    for ( int current = 0; current < intervals.length; current++ ) {

        int current_min_value = Integer.MAX_VALUE;
        int current_min_index = -1;


        for ( int other = 0; other < intervals.length; other++ ) {
    	    if ( other == current )
    	        continue;

    	    if ( intervals[ other ][ 0 ] >= intervals[ current ][ 1 ] ) {

    	        if ( current_min_value > intervals[ other ][ 0 ] ) {
    		        current_min_value = intervals[ other ][ 0 ];
    		        current_min_index = other;
    	        }
    	    }

        }

        return_values[ index++ ] = current_min_index;
    }

    return return_values;
}
```

<br>


### Task #1: Python Implementations
***

Same implementation as in `PL/Perl`, but note the usage of `x` as a character to split the list of arguments into a matrix.

<br>

```perl
import sys

# task implementation
# the return value will be printed
def task_1( args ):
    matrix = []
    row    = 0
    col    = 0

    # transform into a matrix
    line = []
    for x in args:
        if x == 'x':
            matrix.append( line )
            line = []
            continue

        line.append( int( x ) )



    max_size = 0

    for row in range( 0, len( matrix ) ):
        for col in range( 0, len( matrix[ row ] ) ):
            if matrix[ row ][ col ] != 1:
                continue

            size  = 1
            found = True

            while found and ( row + size ) < len( matrix ) and ( col + size ) < len( matrix[ row ] ):
                for rr in range( row, row + size ):
                    for cc in range( col, col + size ):
                        if matrix[ rr ][ cc ] != 1:
                            found = False
                            break

                    if not found:
                        break

                if size > max_size:
                    max_size = size

                size = size + 1

    return max_size

# invoke the main without the command itself
if __name__ == '__main__':
    print( task_1( sys.argv[ 1: ] ) )
```

<br>

### Task #2: Python Implementations
***

Similar to the `PL/Perl` implementation, use again a `x` character as a marker to convert a flat list into a matrix.

<br>

```perl
import sys

# task implementation
# the return value will be printed
def task_2( args ):
    intervals = []
    current   = []
    other     = []
    indexes   = []

    for x in args:
        if x == 'x':
            intervals.append( current )
            current = []
            continue

        current.append( int( x ) )

    intervals.append( current )
    print( intervals )

    for current_index in range( 0, len( intervals ) ):

        min_value = 999999
        min_index = -1

        for other_index in range( 0, len( intervals ) ):
            if other_index == current_index:
                continue


            current = intervals[ current_index ]
            other   = intervals[ other_index ]

            if other[ 0 ] >= current[ 1 ]:
                if min_value > other[ 0 ]:
                    min_value = other[ 0 ]
                    min_index = other_index

        indexes.append( min_index )


    return indexes

# invoke the main without the command itself
if __name__ == '__main__':
    print( task_2( sys.argv[ 1: ] ) )
```

<br>

***

If you have any suggestion then please do share with us **<perlweeklychallenge@yahoo.com>**.

| &nbsp; [**Advent Calendar 2024**](/blog/advent-calendar-2024) &nbsp; |
