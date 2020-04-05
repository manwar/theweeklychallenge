---
author:       Ryan Thompson
date:         2020-04-04T18:24:57
description:  "Ryan Thompson › Perl Weekly Review #053"
tags:         ["perl"]
title:        "Ryan Thompson › Perl Weekly Review #053"
type:         post
---

Continues from [previous week](/blog/review-challenge-052/).

Welcome to the Perl review for Week 053 of the Weekly Challenge! For a quick overview, go through the [original tasks](/blog/perl-weekly-challenge-053/) and [recap](/blog/recap-challenge-053/) of the weekly challenge.

## Getting in Touch

<a href="mailto:rjt@cpan.org"><img src="http://ry.ca/misc/Email.svg" height="50" width="50"> Email</a> › Email me (Ryan) with any feedback about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="http://ry.ca/misc/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="http://ry.ca/misc/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

We'd greatly appreciate any feedback you'd like to give.

## Table of Contents

### [Task 1 › Rotate Matrix](#task1)

[ [Alicia Bielsa](#alicia-bielsa1)  | [Andrezgz](#andrezgz1)  | [Athanasius](#athanasius1)  | [Cheok-Yin Fung](#cheok-yin-fung1)  | [Colin Crain](#colin-crain1)  | [Cristina Heredia](#cristian-heredia1)  | [Dave Cross](#dave-cross1)  | [Dave Jacoby](#dave-jacoby1)  | [Duncan C. White](#duncan-c-white1)  | [E. Choroba](#e-choroba1)  | [Jaldhar H. Vyas](#jaldhar-h-vyas1)  | [Javier Luque](#javier-luque1)  | [Laurent Rosenfeld](#laurent-rosenfeld1)  | [Lubos Kolouch](#lubos-kolouch1)  | [Mohammad S Anwar](#mohammad-anwar1)  | [Roger Bell West](#roger-bell-west1)  | [Ruben Westerberg](#ruben-westerberg1)  | [Ryan Thompson](#ryan-thompson1)  | [Saif Ahmed](#saiftynet1)  | [User Person](#user-person1)  | [Wanderdoc](#wanderdoc1)  | [Yet Ebreo](#yet-ebreo1)  ]

### [Task 2 › Vowel Strings](#task2)

[ [Alicia Bielsa](#alicia-bielsa2)  | [Andrezgz](#andrezgz2)  | [Athanasius](#athanasius2)  | [Cheok-Yin Fung](#cheok-yin-fung2)  | [Colin Crain](#colin-crain2)  | [Dave Cross](#dave-cross2)  | [Dave Jacoby](#dave-jacoby2)  | [Duncan C. White](#duncan-c-white2)  | [E. Choroba](#e-choroba2)  | [Jaldhar H. Vyas](#jaldhar-h-vyas2)  | [Javier Luque](#javier-luque2)  | [Laurent Rosenfeld](#laurent-rosenfeld2)  | [Lubos Kolouch](#lubos-kolouch2)  | [Markus Holzer](#markus-holzer2)  | [Mohammad S Anwar](#mohammad-anwar2)  | [Pete Houston](#pete-houston2)  | [Roger Bell West](#roger-bell-west2)  | [Ruben Westerberg](#ruben-westerberg2)  | [Ryan Thompson](#ryan-thompson2)  | [Saif Ahmed](#saiftynet2)  | [User Person](#user-person2)  | [Wanderdoc](#wanderdoc2)  | [Yet Ebreo](#yet-ebreo2)  ]

### [Blogs](#blogs)

***

***

# Task #1 › Rotate Matrix {#task1}

The original task description:

*Write a script to rotate the following matrix by given 90/180/270 degrees clockwise*

```perl
[[ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]]
```

***

Since the task asks us to rotate the matrix clockwise, what we have isn't quite the same as a matrix transposition (where rows and columns are swapped), but it's also not that far off, and can be solved in much the same way, looping over each cell and placing it in its correct position in the new array.

Most hackers wrote just one rotation subroutine, and then called it one, two, or three times, corresponding to 90, 180, or 270 degrees of rotation. While this is a bit slower, it avoids near-duplicated code.

## Supported Inputs

There was some variation in what shapes of matrices are supported. There were solutions with the following:

* **Task matrix only:** Some solutions *only* support the specific matrix as given by the task description, meaning, the values are hard-coded.
* **3x3 matrices:** Some solutions support any 3x3 matrix, but other sizes are not supported.
* **NxN square matrices:** Some solutions accept any "square" matrix (i.e., same number of rows and columns)
* **MxN matrices:** The most general solutions support any arbitrary number of rows, and columns.

If your program accepted an MxN matrix but produced incorrect results, I generally assumed you did not intend to support MxN matrices.

## Stats

* Number of submissions: **22**

* Total SLOC: **1287**

* Average SLOC: **58**

## Alicia Bielsa {#alicia-bielsa1}

[Alicia Bielsa's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/alicia-bielsa/perl/ch-1.pl) supports NxN (square) matrices. She defines a `rotateMatrix90Degrees` sub that does the hard work:

```perl
sub rotateMatrix90Degrees {
    my $refMatrix = shift;
    my @aNewMatrix = ();
    foreach my $x (0..$#{$refMatrix}){
        foreach my $y (0..$#{$$refMatrix[$x]}){
            $aNewMatrix[$y][$#aMatrix - $x]  = $$refMatrix[$x][$y]  ;
        }
    }
    return @aNewMatrix;
}
```

She then defines a `rotateMatrix` sub that accepts the matrix, and a rotation angle in degrees:

```perl
sub rotateMatrix {
    my $refMatrix = shift;
    my $degrees = shift;
    my @aMatrixRotating =@{$refMatrix};
    while ( $degrees / 90 >= 1  ) {
        @aMatrixRotating = rotateMatrix90Degrees(\@aMatrixRotating);
        $degrees -= 90;
    }
    return @aMatrixRotating;
}
```

And, finally, `drawMatrix` is a nice touch:

```perl
sub drawMatrix {
    my $refMatrix = shift;
    foreach my $row (@{$refMatrix}){
        print "[ ".join(', ',@{$row}). " ]\n";
    }
}
```

## Andrezgz {#andrezgz1}

[Andrezgz's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/andrezgz/perl/ch-1.pl) supports MxN matrices, by calling their 90-degree `rotate` sub as many times as needed:

```perl
# Rotate matrix clockwise the number of times specified
$matrix = rotate($matrix) for (1 .. $rotation);

# Rotated matrix is printed
print '[ ', join(' , ', $matrix->[$_]->@*) , " ]\n"
    for ( 0 .. $matrix->@* - 1 );

sub rotate {
    my $input = shift;

    my $output = [];
    foreach my $r ( 0 .. $input->@* - 1 ){
        foreach my $c ( 0.. $input->[0]->@* - 1 ){
            # Each element of the input matrix is appended to the output matrix
            # at the beginning of the row defined by its column from the input matrix
            unshift @{$output->[$c]}, $input->[$r]->[$c];
        }
    }

    return $output;
}
```

## Athanasius {#athanasius1}

[Athanasius's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/athanasius/perl/ch-1.pl) supports 3x3 matrices:

```perl
sub rotate {
    my ( $degrees, $old_matrix ) = @_;

    exists $ROTATIONS{$degrees}
      or die "ERROR: Rotation of $degrees° is not supported\n";

    my @new_matrix;

    for my $r_new ( 0 .. 2 )    # Rows
    {
        for my $c_new ( 0 .. 2 )    # Columns
        {
            my ( $r_old, $c_old ) = $ROTATIONS{$degrees}->[$r_new][$c_new]->@*;

            $new_matrix[$r_new]->[$c_new] = $old_matrix->[$r_old][$c_old];
        }
    }

    return \@new_matrix;
}
```

## Cheok-Yin Fung {#cheok-yin-fung1}

[Cheok-Yin Fung's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/cheok-yin-fung/perl/ch-1.pl) gives us `rcaqx` which is short for "Rotation_Clockwise_A_Quarter, x for multiple". Rolls right off the tongue! It supports 3x3 matrices:

```perl
sub rcaqx {
    if ($_[0]>=1) {
        my %nhash;
        for (0..8) {
            if ( $cp[$_] >= 0 ) {
                $nhash{ $cp[$_] } = $hash{ ($cp[($_ )]+2) % 8 };
            }
        }
        $nhash{-1} = $hash{-1};
        %hash = %nhash;
        rcaqx($_[0]-1);
    }
}

rcaqx($ANGLE/90);
```

***

However, that's not all! Cheok Yin submitted a [second solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/cheok-yin-fung/perl/ch-1a.pl) for Task #1, which is more advanced. It supports any square (NxN) matrix, and makes use of a custom `xy` class:

```perl
package xy;
use strict;

sub new {
    my ($class) = @_;
    bless{
        _value=> $_[1],
        _x=>$_[2],
        _y=>$_[3],
      }, $class;
}

sub x{ $_[0]->{_x}}
sub y{ $_[0]->{_y}}
sub value{ $_[0]->{_value} }
```

The new and improved `rcaqx` looks like this:

```perl
sub rcaqx {
    if ($_[2]>=1) {
        my ($xcoord, $ycoord) = ($_[0], $_[1]);
        $_[0] = $ycoord;
        $_[1] = -$xcoord;
        return rcaqx($_[0], $_[1], $_[2]-1);
    } else {return ($_[0], $_[1])}
}
```

Coordinate translation helpers:

```perl
sub translation_add_negT {
    $_[0] -= $T->[0];
    $_[1] -= $T->[1];
    return ($_[0], $_[1])
}

sub translation_add_T {
    $_[0] += $T->[0];
    $_[1] += $T->[1];
    return ($_[0], $_[1])
}
```

And finally, here is how all of the above routines come together to actually perform the rotation:

```perl
for $i (1..$N*$N) {
    $newmatrix->[$i] = xy->new($matrix->[$i]->value, 
        translation_add_negT(rcaqx ((translation_add_T(
                        $matrix->[$i]->x, $matrix->[$i]->y) ), $ANGLE/90 )) );

    $coordinateplane[position( $newmatrix->[$i]->x, $newmatrix->[$i]->y )] 
         = $newmatrix->[$i]->value;
}
```

Cheok Yin is now blogging twice per week about the PWC! (See Cheok Yin's [Task #2 solution](#cheok-yin-fung2) for a link to his second blog post.)

**Blog** › [Rotation in R^2 - CY's take on PWC#053 Task 1](http://blogs.perl.org/users/c_y_fung/2020/03/rotation-in-r2---cys-take-on-pwc053-task-1.html)

## Colin Crain {#colin-crain1}

[Colin Crain's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/colin-crain/perl/ch-1.pl) went the extra mile and implemented separate routines, optimized for each of the 90, 180, and 270 degree rotations, and his is the first solution we've seen that supports MxN matrices:

```perl
sub rotate90 {
## matrix is an array ref of array refs
## zip and reverse subarray elements
    my $matrix = shift;
    my $output;

    my $cols = scalar $matrix->[0]->@*;     ## subarray elements, or num of cols
    my $rows = scalar $matrix->@*;          ## array elements,    or num of rows

    for my $idx ( 0..$cols-1 ) {            ## for each index in a row
        my @newrow;
        for my $row ( 0..$rows-1 ) {        ## for each row
            unshift @newrow, $matrix->[$row]->[$idx];        ## reverse rows
        }
        push $output->@*, \@newrow;                          ## forward cols
    }
    return $output;
}
```

```perl
sub rotate180 {
## matrix is an array ref of array refs
## reverse each subarray, then reverse the outer array
    my $matrix = shift;
    my $output;

    for my $row ( $matrix->@* ) {
        my @newrow = reverse $row->@*;
        unshift $output->@*, \@newrow;
    }
    return $output;

}
```

```perl
sub rotate270 {
## matrix is an array ref of array refs
## zip and reverse subarrays in outer array
    my $matrix = shift;
    my $output;

    my $cols = scalar $matrix->[0]->@*;     ## subarray elements, or num of cols
    my $rows = scalar $matrix->@*;          ## array elements, or num of rows

    for my $idx ( 0..$cols-1 ) {
        my @newrow;
        for my $row ( 0..$rows-1 ) {
            push @newrow, $matrix->[$row]->[$idx];     ## forward rows
        }
        unshift $output->@*, \@newrow;                 ## reverse cols
    }
    return $output;
}
```

## Cristina Heredia {#cristian-heredia1}

[Cristina Heredia's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/cristian-heredia/perl/ch-1.pl) has all three allowed rotations for the task's matrix hard-coded:

```perl
sub rotateMatix {

    if ($choise == '90') {
        @array = (
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3]
        );
        printArray();
    }
    elsif ($choise == '180') {
        @array = (
        [9, 8, 7],
        [6, 5, 4],
        [3, 2, 1]
        );
        printArray();
    }
    elsif ($choise == '270') {
        @array = (
        [3, 6, 9],
        [2, 5, 8],
        [1, 4, 7]
        );
        printArray();
    }
    else {
        print "The value $choise isn't valid, please choose between: 90, 180 or 270\n";
        $choise = <>;
        $choise =~ s/^\s+|\s+$//g;
        rotateMatix();
    }
}
```

She provides a `printArray` sub to pretty-print the output matrix:

```perl
sub printArray {
    for(my $i = 0; $i < 3; $i++) {
        for(my $j = 0; $j < 3; $j++) {
            print "$array[$i][$j] ";
        }
        print "\n";
    }
}
```

## Dave Cross {#dave-cross1}

[Dave Cross's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/dave-cross/perl/ch-1.pl) supports square (NxN) matrices. The `rotate_matrix` sub handles rotations by any of 90, 180, and 270 degrees:

```perl
sub rotate_matrix {
    my ( $matrix, $degrees ) = @_;

    die "Must give rotation in degrees\n" unless $degrees;
    die "Must rotate by 90, 180 or 270 degrees\n"
      if $degrees =~ /\D/
      or $degrees % 90
      or $degrees > 270;

    my $rotated_matrix;

    for ( 1 .. $degrees / 90 ) {
        $rotated_matrix = [];
        for my $i ( 0 .. $#$matrix ) {
            for my $j ( 0 .. $#{ $matrix->[$i] } ) {
                $rotated_matrix->[$j][ $#{ $matrix->[$i] } - $i ] =
                  $matrix->[$i][$j];
            }
        }
        $matrix = $rotated_matrix;
    }

    return $rotated_matrix;
}
```

## Dave Jacoby {#dave-jacoby1}

[Dave Jacoby's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/dave-jacoby/perl/ch-1.pl) supports MxN matrices, and provides separate routines for each rotation amount:

```perl
sub rotate_90( $array ) {
    my $x      = -1 + scalar $array->@*;
    my $y      = -1 + scalar $array->[0]->@*;
    my $output = [];
    for my $i ( 0 .. $x ) {
        my $jj = $i;
        for my $j ( 0 .. $y ) {
            my $ii = $y - $j;
            $output->[$i][$j] = int $array->[$ii][$jj];
        }
    }
    return $output;
}

sub rotate_180( $array ) {
    my $x      = -1 + scalar $array->@*;
    my $y      = -1 + scalar $array->[0]->@*;
    my $output = [];
    for my $i ( 0 .. $x ) {
        my $jj = $x - $i;
        for my $j ( 0 .. $y ) {
            my $ii = $y - $j;
            $output->[$i][$j] = int $array->[$ii][$jj];
        }
    }
    return $output;
}

sub rotate_270($array) {
    my $x      = -1 + scalar $array->@*;
    my $y      = -1 + scalar $array->[0]->@*;
    my $output = [];
    for my $i ( 0 .. $x ) {
        my $jj = $x - $i;
        for my $j ( 0 .. $y ) {
            my $ii = $j;
            $output->[$i][$j] = int $array->[$ii][$jj];
        }
    }
    return $output;
}
```

**Blog** › [Rotate Your Matrix and String Your Vowels](https://jacoby.github.io/2020/03/23/rotate-your-matrix-and-string-your-vowels.html)

## Duncan C. White {#duncan-c-white1}

[Duncan C. White's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/duncan-c-white/perl/ch-1.pl) supports 3x3 matrices, but the fun part is his OO implementation which overrides stringification to handle the matrix pretty-printing:

```perl
package Matrix;

use parent "Clone";
use overload '""' => \&as_str;

sub as_str ($) {
    my( $self ) = @_;

    my @r = map { join( ', ', @$_ ) } @$self;
    my $str = "\n" . join( "\n", @r ) . "\n";
    #say "debug: $str";
    return $str;
}
```

The constructor accepts a string such as `1 2 3/4 5 6/7 8 9`:

```perl
method new( $class: $matrixstr ) {
    my $mat = [];
    if( $matrixstr ) {
        my @row = split( m|/|, $matrixstr );
        die "Matrix->new( $matrixstr ): badly formed matrix string, should be 2 '/'s\n"
            unless @row == 3;
        foreach my $rowstr (@row) {
            my @col = split( /\s+/, $rowstr );
            die "Matrix->new( $matrixstr ): badly formed matrix string, row $rowstr\n"
                unless @col == 3;
            push @$mat, \@col;
        }
    }
    return bless $mat, $class;
}
```

And finally the `rotate90` method does `$n` clockwise rotation(s):

```perl
method rotate90( $n ) {
    $n %= 4;
    for my $i (1..$n) {
        my $mat = Matrix->new( "" );
        foreach my $col (0..2) {
            my @newrow = ();
            foreach my $row (2,1,0) {
                push @newrow, $self->[$row][$col];
            }
            $mat->[$col] = \@newrow;
        }
        @$self = @$mat;
    }
}
```

The package is then used like this:

```perl
# initial matrix
my $initmat = Matrix->new( "1 2 3/4 5 6/7 8 9" );

say "initmat is $initmat";

$mat->rotate90( $times );
say "$initmat rotated $times time(s) is $mat";
```

## E. Choroba {#e-choroba1}

[E. Choroba's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/e-choroba/perl/ch-1.pl) uses an old favourite, [`PDL`](https://metacpan.org/pod/PDL), to assist with the matrix transposition:

```perl
use PDL;

my $matrix = pdl([1, 2, 3],
                 [4, 5, 6],
                 [7, 8, 9]);

for my $rotation (0, 90, 180, 270) {
    my $times = $rotation / 90;
    my $result = $matrix;
    $result = $result->transpose->slice([-1, 0]) for 1 .. $times;
    print "$rotation:$result";
}
```

Since the clockwise rotation we are tasked with is different from a true matrix transposition, Choroba uses PDL's [`slice`](https://metacpan.org/pod/PDL::Slices#slice) to flip the matrix and get the correct result.

**Blog** › [Perl Weekly Challenge 053: Rotate Matrix and Vowel Strings](http://blogs.perl.org/users/e_choroba/2020/03/perl-weekly-challenge-053-rotate-matrix-and-vowel-strings.html)

## Jaldhar H. Vyas {#jaldhar-h-vyas1}

[Jaldhar H. Vyas's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/jaldhar-h-vyas/perl/ch-1.pl) supports NxN square matrices, specified within the `rotate` sub:

```perl
sub rotate {
    my ($angle) = @_;
    my @matrix = (
        [ 1, 2, 3 ],
        [ 4, 5, 6 ],
        [ 7, 8, 9 ],
    );

    my $side = scalar @matrix;

    for (1 .. $angle / 90) {
        for my $row (0 .. ($side / 2) - 1) {
            for my $col ($row .. ($side - $row - 1) - 1) {
                my $temp = $matrix[$row][$col];

                $matrix[$row][$col] = $matrix[$side - 1 - $col][$row];

                $matrix[$side - 1 - $col][$row] =
                    $matrix[$side - 1 - $row][$side - 1 - $col];

                $matrix[$side - 1 - $row][$side - 1 - $col] =
                    $matrix[$col][$side - 1 - $row];

                $matrix[$col][$side - 1 -$row] = $temp;
            }
        }
    }

    return @matrix;
}
```

The code operates by spiraling inward from all four corners, in the following order:

```perl
[ 0, 1,  2, 3, 0 ]
[ 3, 4,  5, 4, 1 ]
[ 2, 5, 13, 5, 2 ]
[ 1, 4,  5, 4, 3 ]
[ 0, 3,  2, 1, 0 ]
```

The numbers shown are a simple count of the number of times the inner loop has run. The `13` in the middle is a side-effect of the loop bounds.

## Javier Luque {#javier-luque1}

[Javier Luque's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/javier-luque/perl/ch-1.pl) supports NxN square matrices, and is called multiple times to effect rotations in multiples of 90 degrees:

```perl
sub rotate_matrix {
    my $m = shift;

    # Size of the matrix
    my $n = scalar(@$m);

    for (my $i = 0; $i < int($n / 2); $i++) {
        for (my $j = $i; $j < $n - $i - 1; $j++) {
            my $temp = $m->[$i]->[$j];
            $m->[$i]->[$j]           = $m->[$n-$j-1]->[$i];
            $m->[$n-$j-1]->[$i]      = $m->[$n-$i-1]->[$n-$j-1];
            $m->[$n-$i-1]->[$n-$j-1] = $m->[$j]->[$n-$i-1];
            $m->[$j]->[$n-$i-1]      = $temp;
        }
    }
}
```

This rotation also spirals inward.

**Blog** › [053 – Perl Weekly Challenge](https://perlchallenges.wordpress.com/2020/03/23/perl-weekly-challenge-053/)

## Laurent Rosenfeld {#laurent-rosenfeld1}

[Laurent Rosenfeld's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/laurent-rosenfeld/perl/ch-1.pl) supports 3x3 matrices, via repeated calls to `rotate_90`:

```perl
sub rotate_90 {
    my $input = shift;
    my @output;
    for my $row (0 .. $#$input) {
        for my $col (0 .. $#{@$input[$row]}) {
            $output[$col][$#{@$input[$row]} - $row] = $input->[$row][$col];
        }
    }
  return \@output;
}
sub rotate_180 {rotate_90 rotate_90 @_}
sub rotate_270 {rotate_90 rotate_180 @_}
```

**Blog** › [Rotate Matrix and Vowel Strings](http://blogs.perl.org/users/laurent_r/2020/03/perl-weekly-challenge-53-rotate-matrix-and-vowel-strings.html)

## Lubos Kolouch {#lubos-kolouch1}

[Lubos Kolouch's
solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/lubos-kolouch/perl/ch-1.pl) also uses [`PDL`](https://metacpan.org/pod/PDL):
```perl
use PDL;

my $m = sequence(3,3)+1;
print($m);

for (0..2) {
    say(90*($_+1));
    $m = $m->transpose->slice([-1,0]);
    print($m);
}
```

Lubos credits the StackOverflow question [Use Perl PDL to rotate a matrix](https://stackoverflow.com/questions/21433364/use-perl-pdl-to-rotate-a-matrix) for figuring out the rotation, and also credits [Choroba's solution](#e-choroba1) for the use of `->slice`. Doing the research and crediting sources is the mark of a good programmer, and I really appreciate it.

## Mohammad S Anwar {#mohammad-anwar1}

[Mohammad S Anwar's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/mohammad-anwar/perl/ch-1.pl) supports 3x3 matrices only. Mohammad has been doing good work with the [`Test`](https://perldoc.perl.org/Test.html) family, providing unit tests for his solutions. Here is how he organized the tests for this task:

```perl
use Test::More;
use Test::Deep;

my $unit_tests = {
    90 => {
            in  => [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ],
            out => [ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ],
          },
   180 => {
            in  => [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ],
            out => [ [ 9, 8, 7 ], [ 6, 5, 4 ], [ 3, 2, 1 ] ],
          },
   270 => {
            in  => [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ],
            out => [ [ 3, 6, 9 ], [ 2, 5, 8 ], [ 1, 4, 7 ] ],
          },
};

foreach my $degree (sort { $a <=> $b } keys %$unit_tests) {
    my $in  = $unit_tests->{$degree}->{in};
    my $out = $unit_tests->{$degree}->{out};
    cmp_deeply(rotate_matrix($in, $degree), $out, "rotation by $degree.");
}

done_testing;
```

I can't count the number of times I've opened up a CPAN distribution and looked at the unit tests, only to see an unorganized mess of individual tests with duplicated code. It's easy to forget that unit tests are code, too.  Mohammad hasn't forgotten that, and took the time to factor out the common code in his tests, for a more maintainable and readable result.

Here is the `rotate_matrix` that handles any 3x3 matrix:

```perl
sub rotate_matrix {
    my ($matrix, $degree) = @_;

    foreach my $i ( 1 .. int($degree/90) ) {
        my $rows = @$matrix;
        my $cols = @{$matrix->[0]};

        my $_matrix = [];
        foreach my $i ( 0 .. $rows-1 ) {
            my $k = 2;
            foreach my $j ( 0 .. $cols-1 ) {
                $_matrix->[$i][$j] = $matrix->[$k][$i];
                $k--;
            }
        }
        $matrix = $_matrix;
    }

    return $matrix;
}
```

**Blog** › [BLOG: The Weekly Challenge #053](https://perlweeklychallenge.org/blog/weekly-challenge-053)

## Roger Bell West {#roger-bell-west1}

[Roger Bell West's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/roger-bell-west/perl/ch-1.pl) works with any NxN (square) matrix:

```perl
sub rotate {
    my ( $rotations, @in ) = @_;
    my $xs = $#in;
    foreach my $ya (@in) {
        if ( $#{$ya} != $xs ) {
            die "not a square matrix\n";
        }
    }
    my @out = @in;
    foreach ( 1 .. $rotations ) {
        my @im = @out;
        my @tmp;
        foreach my $x ( 0 .. $xs ) {
            foreach my $y ( 0 .. $xs ) {
                $tmp[$y][ $xs - $x ] = $im[$x][$y];
            }
        }
        @out = @tmp;
    }
    return @out;
}
```

## Ruben Westerberg {#ruben-westerberg1}

[Ruben Westerberg's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/ruben-westerberg/perl/ch-1.pl) supports 3x3 matrices only, but does so in style, with trigonometry. I suppose we should have held this task just a little sooner, so it would line up with [Pi Day](https://en.wikipedia.org/wiki/Pi_Day), March 14th!

Ruben uses core module [`Math::Trig`](https://perldoc.perl.org/Math/Trig.html) for its `pi`
routines only, and [`POSIX`](https://perldoc.perl.org/POSIX.html)'s `round`:

```perl
use Math::Trig ':pi';
use POSIX qw<round>;
```

With basic trigonometry, `@ir` and `@ic` give the input rows and columns, for a respective 0..7 index into the 3x3 array. (`pip4` is a `Math::Trig` equivalent for `pi*4`.)

```perl
sub rotate {
    my ($input,$angle)=@_;
    #input indexing
    my @ip=map {pip4 *$_} 0..7;
    my @ir=map {1+round sin} @ip;
    my @ic=map {1+round cos} @ip;

    #output indexing
    my @polar=map {($angle/180 *pi) + pip4 *$_} 0..7;
    my @row= map {1+round sin} @polar;
    my @col =map {1+round cos} @polar;

```

For a 90 degree rotation, the arrays look like this:

```perl
   @ir = ( 1, 2, 2, 2, 1, 0, 0, 0 );
   @ic = ( 2, 2, 1, 0, 0, 0, 1, 2 );
  @row = ( 2, 2, 1, 0, 0, 0, 1, 2 );
  @col = ( 1, 0, 0, 0, 1, 2, 2, 2 );
```

Thus, each column in the above gives a coordinate mapping from input to output, for a single element in the 3x3 array. For example, the first column gives you a mapping from **[1,2]** to **[2,1]**.

If you were wondering, "why index 0..7, instead of 0..8?", you are right to wonder that. Ruben handles the middle element (1,1) separately:

```perl
    my $out=[[],[],[]];
    $out->[1]->[1]=$matrix->[1]->[1];
```

Meanwhile, here is the line that handles the rest of the assignments from the input array¹ to the output array:

```perl
    $out->[$row[$_]]->[$col[$_]]=$matrix->[$ir[$_]]->[$ic[$_]] for (0..@col-1);
```

***

¹. *Despite taking an `$input` argument, `rotate` always uses `$matrix`. I suspect this is a simple oversight.*

## Ryan Thompson {#ryan-thompson1}

[My solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/ryan-thompson/perl/ch-1.pl) handles any MxN matrix:

```perl
sub rotate90_cw {
    my @A = reverse @{$_[0]};
    my @T;
    for my $x (0..$#A) {
        $T[$_][$x] = $A[$x][$_] for 0..$#{$A[0]};
    }
    \@T;
}
```

You might notice I `reverse` the rows in the input array first. That's a stylistic choice so the rest of the function could be a simple transpose, much like my Raku submission; I could have instead mirrored the output columns.

The additional rotations are simply defined in terms of `rotate90_cw`:

```perl
# Convenience
sub rotate180    { rotate90_cw( rotate90_cw (@_) ) }
sub rotate_ccw   { rotate90_cw( rotate180(   @_) ) }
```

I also provided a number of unit tests, making sure I hit the important edge cases like 1xN, Mx1, and non-numeric cell contents:

```perl
# 1xN, Nx1
is_deeply rotate90_cw(  [[1,2,3]]),     [[1],[2],[3]];
is_deeply rotate90_cw(  [[1],[2],[3]]), [[3,2,1]];

# Non-numeric, because why not
is_deeply rotate90_cw ( [['a','b','c'],  ['d','e','f']] ),
                        [['d','a'],['e','b'],['f','c']];
```

**Blog** › [Matrix Rotation](http://www.ry.ca/2020/03/matrix-rotation/)


## Saif Ahmed {#saiftynet1}

[Saif Ahmed's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/saiftynet/perl/ch-1.pl) works on any MxN matrix, and also does more than just rotate. Here are the supported "rotation" options:

* `0`, `90`, `180`, `270`: Clockwise rotation by degrees
* `cw`, `ht, `ccw`: Aliases for above. "**Clockwise**","**Half Turn**", "**Counter-Clockwise**"
* `v`, `h`: Flip **vertically** or **horizontally**
* `lr`: Flip top left to bottom right diagonal
* `rl`: Flip bottom right to top left diagonal

Here is the `flip` sub in its entirety:

```perl
sub flip {
    my $arr       = shift;
    my $direction = shift;
    my @flipped   = ();
    return $arr unless $direction;    # return original list for 0 deg trun
    if ( $direction =~ /^cw|ccw|lr|rl|90|270$/ ) {
        foreach my $row ( 0 .. scalar @{ $$arr[0] } - 1 ) {    # for each row
            $flipped[$row] = [];    # initialise empty row
            foreach my $col ( 0 .. scalar @$arr - 1 ) {    # for each column
                push @{ $flipped[$row] },
                  $$arr[$col][$row];    # this does a diagonal flip
            }
            @{ $flipped[$row] } = reverse @{ $flipped[$row] }
              if $direction =~ /^cw|90|rl$/;
        }
        @flipped = reverse @flipped if $direction =~ /^ccw|270|rl$/;
    }
    elsif ( $direction eq 'v' ) {
        @flipped = reverse(@$arr);
    }
    elsif ( $direction eq 'h' ) {
        my $row = 0;
        foreach (@$arr) {
            @{ $flipped[ $row++ ] } = reverse @$_;
        }
    }
    elsif ( $direction =~ /^180|ht$/ ) {
        @flipped = @{ flip( flip( $arr, "v" ), "h" ) };
    }
    return \@flipped;
}
```

The factorization of logic for `cw|ccw|lr|rl|90|270` all into the same block is rather elegant.

The real star of the show, however, has to be Saif's second set of test cases.  While everyone else had me staring at numbers to try and figure out if they all rotated into their proper places, Saif eschewed from such eyestrain-inducing numerals, in favour of this majestic bit of ASCII:

```perl
my $matrix2=[[qw{- - - █ - -}],
             [qw{- - - ░ █ -}],
             [qw{█ █ █ ░ ░ █}],
             [qw{- - - ░ █ -}],
             [qw{- - - █ - -}]];
```

The output makes it extremely obvious to verify:

```
Rotating by 0
---█--
---░█-
███░░█
---░█-
---█--

Rotating by 90
--█--
--█--
--█--
█░░░█
-█░█-
--█--

Rotating by 180
--█---
-█░---
█░░███
-█░---
--█---

Rotating by 270
--█--
-█░█-
█░░░█
--█--
--█--
--█--
```

Arrows or not, Saif's solutions are always a joy to review.

## User Person {#user-person1}

[User Person's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/user-person/perl/ch-1.pl) works on 3x3 matrices only:

User Person has a recursive array flattener, that they will use:

```perl
sub flat {
    return map { ref eq 'ARRAY' ? flat(@$_) : $_ } @_;
}
```

User Person uses this to flatten the input AoA, `@matrix`, into `@rawNums`:

```perl
my @rawNums = ();

@rawNums = flat @matrix;
```

Now, depending on the `$deg` (degrees) input, User Person loops through `@newMatrix` differently. `@rawNums` is flat, and is always iterated in order, giving it a row-major traversal every time:

```perl
my @newMatrix = ();
my $i = 0;

if ($deg == 0) {

    for (my $j = 0; $j < $width; ++$j) {
        for (my $k = 0; $k < $width; ++$k) {
            $newMatrix[$j][$k] = $rawNums[$i++];
        }
    }

} elsif ( $deg == 90 ) {

    for (my $j = $width-1; $j >= 0; --$j) {
        for (my $k = 0; $k < $width; ++$k) {
            $newMatrix[$k][$j] = $rawNums[$i++];
        }
    }

} elsif ( $deg == 180 ) {

    for (my $j = $width-1; $j >= 0; --$j) {
        for (my $k = $width-1; $k >= 0; --$k) {
            $newMatrix[$j][$k] = $rawNums[$i++];
        }
    }

} elsif ( $deg == 270 ) {

    for (my $j = 0; $j < $width; ++$j) {
        for (my $k = $width-1; $k >= 0; --$k) {
            $newMatrix[$k][$j] = $rawNums[$i++];
        }
    }

}
```

## Wanderdoc {#wanderdoc1}

[Wanderdoc's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/wanderdoc/perl/ch-1.pl) includes a `rotate` sub that supports any MxN matrix:

```perl
sub rotate {
    my ( $aref, $angle ) = @_;
    my $rotated;
    for my $row_idx ( 0 .. $#$aref ) {

        for my $col_idx ( 0 .. $#{ $aref->[$row_idx] } ) {
            if ( 90 == $angle ) {
                $rotated->[$col_idx][ $#$aref - $row_idx ] =
                  $aref->[$row_idx][$col_idx];
            }
            elsif ( 180 == $angle ) {
                $rotated->[ $#$aref - $row_idx ]
                  [ $#{ $aref->[$row_idx] } - $col_idx ] =
                  $aref->[$row_idx][$col_idx];
            }

            elsif ( 270 == $angle ) {
                $rotated->[ $#{ $aref->[$row_idx] } - $col_idx ][$row_idx] =
                  $aref->[$row_idx][$col_idx];
            }
            else {
                die
                  "Can only rotate a matrix by 90/180/270 degrees clockwise!$/";
            }

        }
    }
    return $rotated;
}
```

The sub also directly implements the three different rotation angles, so this is also an optimally efficient solution. Nice!

## Yet Ebreo {#yet-ebreo1}

[Yet Ebreo's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/yet-ebreo/perl/ch-1.pl) supports MxN matrices:

```perl
#Obfuscated routine to rotate array 90cw, because it's perl. :D
sub rotate {@{$_[0]}=map[map$_[0]->[-$_][$'],//..@{$_[0]}],0..~-@{$_[0]->[0]}}
```

Again, with a little whitespace:

```perl
# De-obfuscated [Ryan]
sub rotate {
    my ($matrix) = @_;
    @$matrix = map [ map $matrix->[ -$_ ][ $' ] => // .. @$matrix ],
        0 .. $#{ $matrix->[0] };
}
```

We can now clearly see the rotation is done in-place. Once you run it through `perltidy`, there isn't anything too unusual here. There is one old Perl golf trick, with `$'` ([`$POSTMATCH`](https://perldoc.perl.org/perlvar.html#$POSTMATCH)) and the empty regex (`//`) as the start of a `..` range. This is a way to (sort of) access the outer `$_` loop variable in the inner loop, without having to assign either of them to a different named variable. After `//`, `$'` effectively becomes an alias for the outer `$_`.

***

***

# Task #2 › Vowel Strings {#task2}

Here is Mohammad's description, abridged:

*Write a script to accept an integer 1 <= N <= 5 that would print all possible strings of size N formed by using only vowels (a, e, i, o, u).*

*The string should follow the following rules:*

* `a` can only be followed by `e` and `i`.
* `e` can only be followed by `i`.
* `i` can only be followed by `a`, `e`, `o`, and `u`.
* `o` can only be followed by `a` and `u`.
* `u` can only be followed by `o` and `e`.

*For example, if the given integer N = 2 then script should print the following strings:*

```
ae ai ei ia io iu ie oa ou uo ue
```

## Solution Types

This task is a directed graph traversal. The "rules," above, define the valid edges. With that in mind, one can implement the graph traversal in any number of ways, or, indeed, go a completely different direction, as we'll see.

### Dispatch Tables

Most people used a dispatch table to store the graph edges. The hash key is the current node, and the value is an array of nodes that may be visited from the current node. For example, if `$edges{a} = ['e','i']`, that means there are directed edges from `a` to `e`, and also from `a` to `i`.

### Traversal

Traversing the graph can be done breadth-first or depth-first if you don't care about the ordering (or if you sort at the end). BFS will preserve the ordering.

BFS can be done with a queue, which in Perl is any old array with `push` and `shift` (or `pop` and `unshift`, if you prefer). You `shift` a string off the queue, look at the last character, and then `push` all strings that can be reached from the current string. For example, if you `shift` the string `aei` from the array, you would then `push` `aeia`, `aeie`, `aeio`, and `aeiu`, because the vowels allowed after `i` are `a, e, o, u`.

DFS is done with a stack, which makes it natural for recursive solutions. The operations are very similar, but the stack is implicit with recursion. The strings will be in a depth-first order at the end, but that can be managed with `sort` (or not at all, if the order is unimportant).

### Alternatives

There were a few alternative solutions. Several people used modules like [`Algorithm::Combinatorics`](https://metacpan.org/pod/Algorithm::Combinatorics) to generate all variations of the five vowels, and then filter the results with regexps or other means. While these solutions end up throwing out 95-99.5% of strings (it gets worse the longer the strings are), they are fast enough for small inputs.

***

## Stats

* Number of submissions: **23**

* Total SLOC: **1129**

* Average SLOC: **49**

## Alicia Bielsa {#alicia-bielsa2}

[Alicia Bielsa's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/alicia-bielsa/perl/ch-2.pl) uses recursion to populate a global list of vowel strings.

She stores the next vowel edges in a hash, and the result vowel strings in `@aStrings`:

```perl
my %hNodes = ();
$hNodes{'a'} = ['e','i'];
$hNodes{'e'} = ['i'];
$hNodes{'i'} = ['a', 'e', 'o', 'u'];
$hNodes{'o'} = ['a','u'];
$hNodes{'u'} = ['a','e'];

my @aStrings = ();
```

`$hNodes{'u'}` should be `['o','e']`, not `['a','e']`. When that is changed, Alicia's output is correct.

Alicia calls the recursive `addVowel` once for each vowel, to start the recursion:

```perl
foreach my $vowel ( keys(%hNodes)){
    addVowel($size, $vowel,'');
}

sub addVowel {
    my $currentLevel = shift;
    my $currentVowel = shift;
    my $currentString = shift;
    $currentString  .= $currentVowel;
    if ($currentLevel  == 1  ){
        push (@aStrings , $currentString);
        return 0;
    } else {
        $currentLevel--;
    }

    foreach my $nextVowel (@{$hNodes{$currentVowel}}){
        addVowel($currentLevel, $nextVowel,$currentString );
    }

    return 0;
}
```

This is a solid recursive implementation.

## Andrezgz {#andrezgz2}

[Andrezgz's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/andrezgz/perl/ch-2.pl) uses a `%vowels` hash to store the next vowels:

```perl
my %vowels = (
    a => ['e','i'],
    e => ['i'],
    i => ['a', 'e','o','u'],
    o => ['a','u'],
    u => ['o','e']
);
```

Then things get interesting. Here is the main loop, which initializes a `@comb` array to the starting five vowels, and then calls `add_vowel` `LENGTH-1` times:

```perl
my @comb = keys %vowels;
@comb = add_vowel(@comb) for (2..$n);
print $_.$/ for sort @comb;
```

And here is the `add_vowel` sub, which takes a list of strings, and returns a new list of strings:

```perl
sub add_vowel {
    my @output;

    for my $c (@_) {
        my $v = substr $c, -1;
        push @output, map { $c . $_ } @{$vowels{$v}};
    }

    return @output
}
```

The branching required for this problem happens when `add_vowel` appends to `@output`. For each input string, `@output` gets a copy of that string concatenated with each vowel that may follow the last character in the string.

This is a nice alternative to recursion.

## Athanasius {#athanasius2}

[Athanasius's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/athanasius/perl/ch-2.pl) builds up a `@temp` array using a BFS that becomes the `@solution`:

```perl
my @solution = qw( a e i o u );    # The solution for N = 1

for ( 2 .. $n ) {
    my @temp;

    for my $string (@solution) {
        my $last = substr $string, -1;

        push @temp, $string . $_ for $FOLLOWERS{$last}->@*;
    }

    @solution = @temp;
}

printf "For N = %d, the %d possible distinct vowel strings are:\n  %s\n",
  $n, scalar @solution, join "\n  ", @solution;
```

## Cheok-Yin Fung {#cheok-yin-fung2}

[Cheok-Yin Fung's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/cheok-yin-fung/perl/ch-2.pl) uses the [`Tree`](https://metacpan.org/pod/Tree) distribution to create an [m-ary trees](https://en.wikipedia.org/wiki/M-ary_tree) of depth `$N`, where `$N` is the desired vowel string length.

With `Tree` (as with most computer science trees, actually), every child node is also a `Tree`, so the initialization creates a forest of trees and then adds each of those to the root `$vowel` tree. This is a pattern that will be repeated in the rest of the program:

```perl
my $vowel = Tree->new( "" );
$vowel->add_child( Tree->new($_) ) for qw<a e i o u>; # [Simplified for brevity --RyanT]
```

Cheok-Yin then calls the following functions:

```perl
grow($vowel, 5);
traverse_and_named($vowel, $N, "");
```

The second argument to `grow()` is apparently the depth, which is hard-coded at 5 for some reason, despite `$N` being the user-specified depth. I am not sure why `grow($vowel, $N)` would not suffice, but maybe there is a reason I did not notice.

Here is the recursive `grow`, and the `produce_child` sub it calls:

```perl
# grow : traverse and force the tree nodes produce child(ren)
sub grow {
    my ($t, $d) = ($_[0], $_[1]);
    produce_child($t);
    my @t_baby = $t->children;
    foreach (@t_baby) {
        grow($_, $d) if $_->depth < $d;
    }
}

sub produce_child {
    my $t = $_[0];
    if ($t->size == 1) { switch($t->value) {
        case ("a") {$t->add_child(Tree->new("e")); $t->add_child(Tree->new("i"));}
        case ("e") {$t->add_child(Tree->new("i"));}
        case ("i") {$t->add_child(Tree->new("a")); $t->add_child(Tree->new("e"));
                    $t->add_child(Tree->new("o")); $t->add_child(Tree->new("u"));}
        case ("o") {$t->add_child(Tree->new("a")); $t->add_child(Tree->new("u"));}
        case ("u") {$t->add_child(Tree->new("e")); $t->add_child(Tree->new("o"));}
    }
    }
}
```

Finally, the `traverse_and_named` function traverses the tree and prints all the nodes at the specified depth:

```perl
sub traverse_and_named {
    my ($t, $d, $str) = ($_[0], $_[1], $_[2]);
    print $str."\n" if length($str)==$d;
    my @t_baby = $t->children;
    foreach (@t_baby) {
        traverse_and_named($_, $d, $str.$_->value) if $_->depth<=$d;
    }
}
```

**Blog** › [Tree as a tool for enumeration - CY's take on PWC#053 Task 2](http://blogs.perl.org/users/c_y_fung/2020/03/tree-as-a-tool-for-enumeration---cys-take-on-pwc053-task-2.html)

## Colin Crain {#colin-crain2}

[Colin Crain's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/colin-crain/perl/ch-2.pl) also uses a BFS queue:

```perl
my @output = qw( a e i o u );
my %following = (  a => [ qw( e i     ) ],
                   e => [ qw( i       ) ],
                   i => [ qw( a e o u ) ],
                   o => [ qw( a u     ) ],
                   u => [ qw( o e     ) ]     );
my $count = 1;

while ($count < $length)    {
    my $num_clusters = scalar @output;              ## memoize this now because we will add elements
    for (1..$num_clusters) {
        my $vowel_cluster = shift @output;          ## shift off a cluster
        my $vowel = substr $vowel_cluster, -1, 1;   ## get the last letter
        for ($following{$vowel}->@*) {              ## build new combinations from that letter
            push @output, "$vowel_cluster" . "$_";  ## and add them to the end of the list
        }
    }
    $count++;                                       ## keep track of the cluster length
}
say $_ for @output;
```

## Dave Cross {#dave-cross2}

[Dave Cross's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/dave-cross/perl/ch-2.pl) sets up the `%strings` map, initializes `@words` with the five starting nodes, and then calls his `add_letter` function on `@words` `$count-1` times to get "words" of the correct length:

```perl
my $count = get_arg();

my %strings = (
  a => [qw[e i]],
  e => [qw[i]],
  i => [qw[a e o u]],
  o => [qw[a u]],
  u => [qw[o e]],
);

my @words = map { [ $_ ] } keys %strings;

@words = add_letter(@words) for 2 .. $count;

say @$_ for sort { "@$a" cmp "@$b" } @words;
```

Here is the `add_letter` function that appends the new word(s) based on the last vowel:

```perl
sub add_letter {
    my @input = @_;
    my @output;

    for my $in (@input) {
        push @output, map { [ @$in, $_ ] } @{ $strings{ $in->[-1] } };
    }

    return @output;
}
```

## Dave Jacoby {#dave-jacoby2}

[Dave Jacoby's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/dave-jacoby/perl/ch-2.pl) lets his `vowel_strings` function do all of the heavy lifting:

```perl
my @strings = vowel_strings($l);
say join "\n", @strings;
```

```perl
sub vowel_strings ( $l, $string = '' ) {
    if ( length $string == $l ) {
        return $string;
    }
    my @next;
    my $m = length $string == 0 ? '' : substr $string, -1;
    if ( $string eq '' ) {
        @next = qw{ a e i o u};
    }
    elsif ( $m eq 'a' ) {
        @next = qw{ e i };
    }
    elsif ( $m eq 'e' ) {
        @next = qw{ i };
    }
    elsif ( $m eq 'i' ) {
        @next = qw{ a o u e };
    }
    elsif ( $m eq 'o' ) {
        @next = qw{ a u };
    }
    elsif ( $m eq 'u' ) {
        @next = qw{ o e };
    }

    my @output;
    for my $n (@next) {
        push @output, vowel_strings( $l, $string . $n );
    }
    return @output;

}
```

This is a great recursive DFS implementation. Stylsitically, I might consider using a dispatch table or turnstyle operator to eliminate the `if .. elsif .. else`, but that's just me. Computationally, I wouldn't change a thing!

**Blog** › [Rotate Your Matrix and String Your Vowels](https://jacoby.github.io/2020/03/23/rotate-your-matrix-and-string-your-vowels.html)

## Duncan C. White {#duncan-c-white2}

[Duncan C. White's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/duncan-c-white/perl/ch-2.pl) is also recursive, but uses regexps instead of `substr` or arrays, to find the last character in each string:

```perl
use Function::Parameters;
die "vowel-strings N\n" unless @ARGV == 1;
my $n = shift;
die "vowel-strings: N ($n) should be 1..5\n" unless $n >= 1 && $n <= 5;

my @vow = qw(a e i o u);

#
# generate( $prefix, $moresteps );
#    Generate and print all vowel strings starting with $prefix,
#    and taking $moresteps more generative steps, applying
#    the above rules at each step to extend the prefix.
#
fun generate( $prefix, $moresteps ) {
    if ( $moresteps == 0 ) {
        say $prefix;
        return;
    }

    # 'a' can only be followed by 'e' or 'i'.
    if ( $prefix =~ /a$/ ) {
        generate( $prefix . 'e', $moresteps - 1 );
        generate( $prefix . 'i', $moresteps - 1 );
    }

    # 'e' can only be followed by 'i'.
    elsif ( $prefix =~ /e$/ ) {
        generate( $prefix . 'i', $moresteps - 1 );
    }

    # 'i' can only be followed by 'a', 'e', 'o', or 'u'.
    elsif ( $prefix =~ /i$/ ) {
        foreach my $vowel (@vow) {
            next if $vowel eq 'i';
            generate( $prefix . $vowel, $moresteps - 1 );
        }
    }

    # 'o' can only be followed by 'a' or 'u'.
    elsif ( $prefix =~ /o$/ ) {
        generate( $prefix . 'a', $moresteps - 1 );
        generate( $prefix . 'u', $moresteps - 1 );
    }

    # 'u' can only be followed by 'o' or 'e'.
    elsif ( $prefix =~ /u$/ ) {
        generate( $prefix . 'o', $moresteps - 1 );
        generate( $prefix . 'e', $moresteps - 1 );
    }
}

foreach my $firstvowel (@vow) {
    generate( $firstvowel, $n - 1 );
}
```

Again, a lot of this duplicated code could be eliminated with a dispatch table, but apart from that, I love it.

## E. Choroba {#e-choroba2}

[E. Choroba's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/e-choroba/perl/ch-2.pl) ought to look familiar by now (BFS queue):

```perl
my %next = (
    a => [qw[ e i ]],
    e => [qw[ i ]],
    i => [qw[ a e o u ]],
    o => [qw[ a u ]],
    u => [qw[ o e ]]);

my $n = shift;
die "Invalid argument" unless ($n // "") =~ /^[1-5]$/;

my @agenda = sort keys %next;

while ($n > length $agenda[0]) {
    my @next;
    for my $string (@agenda) {
        my $last = substr $string, -1;
        push @next, map $string . $_, @{ $next{$last} };
    }
    @agenda = @next;
}
say for @agenda;
```

**Blog** › [Rotate Matrix and Vowel Strings](http://blogs.perl.org/users/e_choroba/2020/03/perl-weekly-challenge-053-rotate-matrix-and-vowel-strings.html)

## Jaldhar H. Vyas {#jaldhar-h-vyas2}

[Jaldhar H. Vyas's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/jaldhar-h-vyas/perl/ch-2.pl) is another good example of a BFS queue:

```perl
sub generate {
    my ($n) = @_;

    my %rules = (
        a => [qw/ e i /],
        e => [qw/ i /],
        i => [qw/ a e o u /],
        o => [qw/ a u /],
        u => [qw/ e o /]
    );

    my @generated;
    for my $i (1 .. $n) {
        if ($i == 1) {
            @generated = sort keys %rules;
        } else {
            @generated = map {
                my $e = $_;
                map {  $e . $_; } @{ $rules{substr $e, -1, 1} };
            } @generated;
        }
    }

    return @generated;
}
```

## Javier Luque {#javier-luque2}

[Javier Luque's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/javier-luque/perl/ch-2.pl) uses [`Algorithm::Combinatorics`](https://metacpan.org/pod/Algorithm::Combinatorics)' [`variations_with_repetition`](https://metacpan.org/pod/Algorithm::Combinatorics#variations_with_repetition(\@data,-$k)) function. `v_w_r(\@data, $k)` returns an iterator that will generate all tuples of length `$k` from `@data`. Thus:

```perl
my @vowels = ('a', 'e', 'i', 'o', 'u');
my $iter = variations_with_repetition(\@vowels,$size);
while (my $v = $iter->next) {
    say join '', @$v
        if (valid_combination($v));
}
```

Javier generates all tuples of `$size` length of `@vowels`. Many of these will be invalid, but his `valid_combination` checks each one in turn to see if it follows the rules of the task:

```perl
sub valid_combination {
    my $word = shift;

    # Faster than a regex
    for (my $i = 0; $i < scalar(@$word) - 1; $i++) {
        return 0 unless
        _check_letters($word, $i, 'a', 'e', 'i') &&
        _check_letters($word, $i, 'e', 'i') &&
        _check_letters($word, $i, 'i', 'a', 'e', 'o', 'u') &&
        _check_letters($word, $i, 'o', 'a', 'u') &&
        _check_letters($word, $i, 'u', 'o', 'e');
    }

    return 1;
}
```

The helper `_check_letters` is called five times per candidate word, once for each vowel, with a list of the allowed vowels that may follow.

```perl
# Check the folowing letters
sub _check_letters {
    my ($word, $i, $letter, @checks) = @_;
    my $valid = 1;

    if ($word->[$i] eq $letter) {
        $valid = 0;
        for my $check (@checks) {
            $valid = 1
                if ($word->[$i + 1] eq $check);
        }
    }

    return $valid;
}
```

This is a unique solution. Despite the extra looping checking more than 95% invalid solutions at N=5 (99.4% at size 7), it performs better than I would have expected. N=7 takes around 0.7 seconds, vs 0.012 seconds for an iterative BFS solution.

**Blog** › [Perl Weekly Challenge](https://perlchallenges.wordpress.com/2020/03/23/perl-weekly-challenge-053/)

## Laurent Rosenfeld {#laurent-rosenfeld2}

[Laurent Rosenfeld's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/laurent-rosenfeld/perl/ch-2.pl) is another recursive DFS example:

```perl
my %successors = (
    a => ['e', 'i'],
    e => ['i'],
    i => [qw /a e o u/],
    o => ['a', 'u'],
    u => ['e', 'o']
);
my @vowels = sort keys %successors;
my $error_msg = "Please pass a parameter between 1 and 5.";
my $str_size = shift or die $error_msg;
die $error_msg unless $str_size =~ /^[1-5]$/;

for my $start (@vowels) {
    make_str($str_size -1, $start, $start);
}

sub make_str {
    my ($left, $last, $string) = @_;
    say $string and return unless $left; # Stop the recursion
    for my $next (@{$successors{$last}}) {
        my $new_str = $string . $next;
        make_str($left -1, $next, $new_str);
    }
}
```

**Blog** › [Rotate Matrix and Vowel Strings](http://blogs.perl.org/users/laurent_r/2020/03/perl-weekly-challenge-53-rotate-matrix-and-vowel-strings.html)

## Lubos Kolouch {#lubos-kolouch2}

[Lubos Kolouch's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/lubos-kolouch/perl/ch-2.pl) uses [`List::Permute::Limit`](https://metacpan.org/pod/List::Permute::Limit) to generate initial permutations of vowels in his `get_permutations` sub:

```perl
sub get_permutations {
    my $count = shift;

    my @wovels = [ 'a', 'e', 'i', 'o', 'u' ];

    my @result;

    my $iter = permute_iter(items=>@wovels, nitems=>$count);
    while (my $ary = $iter->()) {
        say @$ary if check_perm($ary);
    }

}

get_permutations(2);
```

Those permutations are then checked against the task's rules in `check_perm`:

```perl
my @ok_rules = ( 'ae', 'ai', 'ei', 'ia', 'ie', 'io', 'iu', 'oa', 'ou', 'uo', 'ue' );
my %ok_hash = map { $_ => 1} @ok_rules;

sub check_perm {
    my $perm = shift;

    my @perm_arr = @$perm;

    for ( 0 .. scalar @perm_arr - 2 ) {
        return 0 unless $ok_hash{$perm_arr[$_] . $perm_arr[ $_ + 1 ]};
    }

    return 1;
}
```

## Markus Holzer {#markus-holzer2}

[Markus Holzer's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/markus-holzer/perl/ch-2.pl) revolves around the recursive `build_str`, called initially with the keys of `%rules`:

```perl
my %rules = (
    a => [ 'e', 'i'           ],
    e => [ 'i'                ],
    i => [ 'a', 'e', 'o', 'u' ],
    o => [ 'a', 'u'           ],
    u => [ 'e', 'o'           ],
);

main( shift @ARGV || 2 );

sub main( $n ) {
    my @r;

    build_str( $_, $n, \@r ) for ( sort keys %rules );

    print join "\n", @r;
}

sub build_str ( $current, $n, $result ) {
    my $last = substr( $current, -1 );

    for ( $rules{$last}->@* ) {
        given ( $current . $_ ) {
            push $result->@*, $_ and next
              if length($_) == $n;

            build_str( $_, $n, $result );
        }
    }
}
```

## Mohammad S Anwar {#mohammad-anwar2}

[Mohammad S Anwar's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/mohammad-anwar/perl/ch-2.pl) uses [`Algorithm::Combinatorics`](https://metacpan.org/pod/Algorithm::Combinatorics) to get an iterator that generates `$char_sets` of the given `$count` length:

```perl
use Algorithm::Combinatorics qw(combinations);

my $chars = [qw(a e i o u)];
my $iter = combinations($chars, $count);

my $char_sets = [];
while (my $char = $iter->next) {
    push @$char_sets, join "", @$char;
}
```

There is a problem with this logic. Using `combinations` means you are selecting elements without repetition. So, for `$count = 5`, there is only one possible combination: `a e i o u`. The results will be incorrect for every count. `variations_with_repetition` will return all sequences of five vowels, with repetition:

```perl
# RyanT
my $char_sets = [ map { join '', @$_ } variations_with_repetition($chars, $count) ];
```

Once the list of `@$char_sets` has been generated, Mohammad then checks each one against the following list of `$rules` regexps:

```perl
my $rules = [
    qr/a(?=[ie])/,
    qr/e(?=[i])/,
    qr/i(?=[aeou])/,
    qr/o(?=[au])/,
    qr/u(?=[oe])/
];

foreach my $char_set (@$char_sets) {
    my $pass = 0;
    foreach my $rule (@$rules) {
        if ($char_set =~ /$rule/) {
            $pass = 1;
        }
    }
    print "$char_set\n" if ($pass);
}
```

Unfortunately, these rules are too permissive, producing invalid words like `uuuo`. Notice the loop logic: `$char_set` passes if it matches *any* of the regexps in `@$rules`. Each regexp uses a zero-width positive lookahead, but that doesn't matter, as each regexp is applied on its own. The problem is that these rules match valid sequences. There is nothing here to notice an invalid sequence, like `uu`.

To fix the logic with regexps, you have two basic options: match the *entire* string, or match *in*valid segments; i.e., an `a` must be followed by an `i` or `e`, so if it is followed by any other character, the string is invalid. The latter choice is probably easier to do.

**Blog** › [BLOG: The Weekly Challenge #053](https://perlweeklychallenge.org/blog/weekly-challenge-053)

## Pete Houston {#pete-houston2}

[Pete Houston's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/pete-houston/perl/ch-2.pl) is a concise recursive implementation:

```perl
my %rules = (
    a => [qw/e i/],
    e => [qw/i/],
    i => [qw/a e o u/],
    o => [qw/a u/],
    u => [qw/o e/]
);

my $n = int shift @ARGV;
die "1 <= N <= 5 is the restriction.\n" unless $n > 0 && $n < 6;

next_str ($_) for keys %rules;

sub next_str {
    my $string = shift;
    return say $string if length $string == $n;
    for my $c (@{$rules{substr ($string, -1, 1)}}) {
        next_str ("$string$c");
    }
}
```

## Roger Bell West {#roger-bell-west2}

[Roger Bell West's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/roger-bell-west/perl/ch-2.pl) uses a BFS queue, and is decently concise as well:

```perl
my %tree = (
    '' => [qw(a e i o u)],
    a  => [qw(e i)],
    e  => [qw(i)],
    i  => [qw(a e o u)],
    o  => [qw(a u)],
    u  => [qw(o e)],
);

print map { "$_\n" } generate( 2, \%tree );

sub generate {
    my ( $len, $tree ) = @_;
    my @list = ('');
    while (1) {
        if ( length( $list[0] ) == $len ) {
            last;
        }
        my $r = shift @list;
        my $s = substr( $r, -1, 1 ) || '';
        foreach my $extension ( @{ $tree{$s} } ) {
            push @list, $r . $extension;
        }
    }
    return @list;
}
```

## Ruben Westerberg {#ruben-westerberg2}

[Ruben Westerberg's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/ruben-westerberg/perl/ch-2.pl) has me torn. Ruben supplies his own beautiful `combinations` sub:

```perl
sub combinations {
    my @combinations=();
    my ($data,$size)=@_;
    my @indexes=(0) x ($size+1);;
    my $i=0;
    until ($indexes[$size]) {
        my $count=List::Util::uniq(@indexes[0..$size-1]);
        #print $count,"\n";;
        push @combinations, [@$data[@indexes[0..$size-1]]] if $count == $size;
        $indexes[0]++;
        for (0..$size-1) {
            if ($indexes[$_] != 0 and 0 == ($indexes[$_] % @$data)) {
                $indexes[$_]=0;
                $indexes[$_+1]++;
            }
        }
    }
    @combinations;
}
```

This `combinations` sub actually returns permutations, not combinations. Unfortunately, we don't want permutations or combinations, but something like `Algorithm::Combinatorics`'s `variations_with_repetition`, which produces correct results when paired with Ruben's loop, below. As written, the `combinations` sub only produces different orderings of the 5 vowels; it will never repeat them, but it needs to. This is fixable.

Here is Ruben's main loop, which calls `combinations` and checks the results with regexps:

```perl
say for sort map {join "",@$_} grep {
    my $sum=0;
    my $s=join '', @$_;
    given ($s) {
        my @match;            #<<Used to force list context
        $sum+=@match=/a/g;        #<<Count all a
        $sum-=@match=(/a[ie]|a$/g);    #<<make sure the rules match
                        #<<Net sum is 0 for success
        $sum+=@match=/e/g;
        $sum-= @match=(/ei|e$/g);

        $sum+=@match=/i/g;
        $sum-= @match=/i[aeou]|i$/g;

        $sum+=@match=/o/g;
        $sum-=@match=/o[au]|o$/g;

        $sum+=@match=/u/g;
        $sum-=@match=/u[oe]|u$/g;
    }
    $sum==0;
} combinations(\@vowels,$n);
```

The `@match` array is used here "to force list context". You can do the same thing without the named array using `=()=`. For example:

```perl
$sum+=()=a/g;
```

## Ryan Thompson {#ryan-thompson2}

[My solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/ryan-thompson/perl/ch-2.pl) has two variations, but first the `%edges` we'll use for both:

```perl
# Follow rules. Basically graph edges.
my %edges = ( a => ['i','e'],  e => ['i'],    i => ['u','o','e','a'],
              o => ['u','a'],  u => ['e','o'] );
```

The first example is a BFS queue implementation:

```perl
sub vowel_string {
    my ($len) = @_;
    my @queue = sort keys %edges; # Pre-load queue

    my @vstrs;
    while (my $str = shift @queue) {
        push @vstrs, $str    and edges if $len <= length $str;
        push @queue, $str.$_ for @{$edges{ substr $str, -1 }}
    }
    @vstrs;
}
say for vowel_string(6);
```

For the second variation, I made an iterator version, which returns a code ref that can be called repeatedly to get the next element in the sequence:

```perl
sub vowel_iter {
    my ($len) = @_;
    my @queue = sort keys %edges;
    sub {
        while (my $str = shift @queue) {
            return $str if $len <= length $str;
            push @queue, $str.$_ for @{$edges{ substr $str, -1 }}
        }
    }
}
my $it = vowel_iter(3);
say while $_ = $it->();
```

Both versions have their merits, depending on the application, which is why I included them both.

**Blog** › [PWC 053 › Vowel Strings](http://www.ry.ca/2020/03/vowel-strings/)

## Saif Ahmed {#saiftynet2}

[Saif Ahmed's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/saiftynet/perl/ch-2.pl) uses a BFS queue as well:

```perl
sub vowelStrings {
    my $target    = shift;
    my %following = (        # hash containing lists of valid following vowels
        a => [ 'e', 'i' ],
        e => ['i'],
        i => [ 'a', 'e', 'o', 'u' ],
        o => [ 'a', 'u' ],
        u => [ 'o', 'e' ],
    );
    my @list = (qw{a e i o u });    # start with list of vowels

    while ( length $list[0] < $target ) {
        my $str = shift @list;
        push @list, map { $str . $_ } @{ $following{ substr( $str, -1, 1 ) } };
    }
    return @list,;
}
```

## User Person {#user-person2}

[User Person's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/user-person/perl/ch-2.pl) does something a little different, with [`Math::Int2Base`](https://metacpan.org/pod/Math::Int2Base) (converts to/from arbitrary bases):

```perl
use Math::Int2Base qw( int2base base2int );

my @vowels = qw{ a e i o u };
my $MAX = '4' x $num;

my $j = 0;
for (my $i = 0; $j <= $MAX; ++$i) {
    $j = int2base($i,5);
    $j = sprintf "%0${num}d", $j;
    my $string;
    foreach (split(//,$j)){
        $string .= $vowels[$_];
    }
```

In the C-style `for` loop, the loop variable (`$i`) is converted to base-5, as there are five vowels. This allows direct indexing within `@vowels`. All of this is an easy way to emulate the `variations_with_repetition` function we've seen previously.

To see whether `$string` is a valid vowel string, it is checked against five different regexps in turn:

```perl
    if (   $string =~ m{a[^ei]}
        or $string =~ m{e[^i]}
        or $string =~ m{i[^aeou]}
        or $string =~ m{o[^au]}
        or $string =~ m{u[^oe]} )
    {
        next;
    } else {
        print "$string\n";
    }
}
```

If any of these regexps match, the string is rejected. For example, `a[^ei]` means that if a string contains an `a` followed by anything other than an `e` or an `i`, it is rejected.

## Wanderdoc {#wanderdoc2}

[Wanderdoc's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/wanderdoc/perl/ch-2.pl) uses [`Algorithm::Combinatorics`](https://metacpan.org/pod/Algorithm::Combinatorics) again, this time using `variations`.

```perl
use Algorithm::Combinatorics qw(variations);
use Getopt::Std;
my @vowels = qw(a e i o u);
my @pos_patterns = ( qr/a[ei]/ , qr/ei/ , qr/i[aeou]/,
                 qr/o[au]/, qr/u[oe]/ );
my @neg_patterns = ( qr/a(?=[aou])/ , qr/e(?=[aeou])/ , qr/i(?=i)/,
                 qr/o(?=[eio])/, qr/u(?=[aiu])/ );
my $iter = variations(\@vowels, $options{n});
my %already_found;
```

Unfortunately, `variations` does not include repetitions, and we need repetitions to generate valid strings such as `ueiu`, so Wanderdoc's program does not generate all valid solutions. The fix is easy, though: just use `variations_with_repetition` instead.

Here is the loop, which uses the iterator semantics from `Algorithm::Combinatorics`:

```perl
VAR: while ( my $c = $iter->next ) {
    my $str = join( '', @$c );

    for my $pp (@pos_patterns) {
        if ( $str =~ /$pp/ ) {
            for my $np (@neg_patterns) {
                next VAR if $str =~ /$np/;
            }

            # A string with length > 2 can match > 1 patterns.
            $already_found{$str}++;
            print $str, $/ if 1 == $already_found{$str};
        }
    }
}
```

Note the use of positive and negative patterns (`@pos_patterns` and `@neg_patterns`) to reject invalid strings.

## Yet Ebreo {#yet-ebreo2}

[Yet Ebreo's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-053/yet-ebreo/perl/ch-2.pl) is a one-liner based around regexes and `glob`:

```perl
!(/a[^ei]/ || /e[^i]/ || /i[^aeou]/ || /o[^au]/ || /u[^oe]/) && say for glob "{a,e,i,o,u}" x ($ARGV[0]||1);
```

The use of `glob` here is fantastic.

***

***

## See Also {#blogs}

### Blogs this week:

**Cheok-Yin Fung** › [Tree as a tool for enumeration](http://blogs.perl.org/users/c_y_fung/2020/03/tree-as-a-tool-for-enumeration---cys-take-on-pwc053-task-2.html) | [Rotation in R^2](http://blogs.perl.org/users/c_y_fung/2020/03/rotation-in-r2---cys-take-on-pwc053-task-1.html)

**Dave Jacoby** › [Rotate Your Matrix and String Your Vowels](https://jacoby.github.io/2020/03/23/rotate-your-matrix-and-string-your-vowels.html)

**E. Choroba** › [Perl Weekly Challenge 053: Rotate Matrix and Vowel Strings](http://blogs.perl.org/users/e_choroba/2020/03/perl-weekly-challenge-053-rotate-matrix-and-vowel-strings.html)

**Javier Luque** › [053 – Perl Weekly Challenge](https://perlchallenges.wordpress.com/2020/03/23/perl-weekly-challenge-053/)

**Laurent Rosenfeld** › [Rotate Matrix and Vowel Strings](http://blogs.perl.org/users/laurent_r/2020/03/perl-weekly-challenge-53-rotate-matrix-and-vowel-strings.html)

**Mohammad S Anwar** › [BLOG: The Weekly Challenge #053](https://perlweeklychallenge.org/blog/weekly-challenge-053)

**Ryan Thompson** › [Matrix Rotation](http://www.ry.ca/2020/03/matrix-rotation/) | [Vowel Strings](http://www.ry.ca/2020/03/vowel-strings/)

