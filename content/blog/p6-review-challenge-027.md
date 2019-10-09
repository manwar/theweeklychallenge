---
title: "Laurent Rosenfeld Weekly Review: Challenge - 027"
date: 2019-10-09T00:00:00+00:00
description: "Laurent Rosenfeld Weekly Review: Challenge - #027."
type: post
image: images/blog/p6-review-challenge-027.jpg
author: Laurent Rosenfeld
tags: ["Perl6"]
---
***
# Perl6 Solutions Weekly Review
***

## Task #1: Intersection of Two Straight Lines

This is derived in part from my [blog post](http://blogs.perl.org/users/laurent_r/2019/09/perl-weekly-challenge-27-intersection-point-and-historical-values.html) made in answer to the [Week 27 of the Perl Weekly Challenge](https://perlweeklychallenge.org/blog/perl-weekly-challenge-027/) organized by  <a href="http://blogs.perl.org/users/mohammad_s_anwar/">Mohammad S. Anwar</a> as well as answers made by others to the same challenge.

The challenge reads as follows:

*Write a script to find the intersection of two straight lines. The co-ordinates of the two lines should be provided as command line parameter. For example:*

> *The two ends of Line 1 are represented as co-ordinates (a,b) and (c,d).*

> *The two ends of Line 2 are represented as co-ordinates (p,q) and (r,s).*

*The script should print the co-ordinates of point of intersection of the above two lines.*

## Some Background Knowledge on the Subject

This is really elementary math, but, as I haven't used any linear algebra for decades, I needed about 10 to 15 minutes with a pencil and a piece of paper to work out how to find the equation of a straight line going through two points and how to compute the intersection of two lines. For the benefits of those of you in the same situation, let me briefly summarize how this works. You may jump to the next section if you don't need any refresher on these subjects.

The equation of a straight line is usually written as `y = ax + b` (or, in some countries, `y = mx + b` or `y = mx + c`, but it's just the name of the coefficients changing), where `x` and `y` are the coordinates of any point belonging to the line, `a` is the slope (or gradient, i.e. how steep the line is) of the line, and `b` the y-intercept (the value of `y` when `x` is zero, or the place where the line crosses the `Y` axis). The slope is the change in `y` divided by the change in `x`. For finding the slope of a line going through two points with coordinates `x1, y1` and `x2, y2`, the slope `a` is the ordinate (`y`) difference of the points divided by their abscissa (`x`) difference:

    a = (y2 - y1) / (x2 - x1)

Of course, we have a division by zero problem if `x2` equals `x1` (i.e. the line is vertical, at least in an orthonormal base or Cartesian plane), but we'll come back to that special edge case later, as this does not necessarily preclude us from finding an interception point.

For finding the y-intercept (`b`), you just need to reformulate `y = ax + b` as `b = y - ax`, and to replace `a` by the slope found with the above formula, and `y` and `x` by the coordinates of any of the two points.

For finding the intersection point of two lines `y = a1 * x + b1` and `y = a2 * x + b2`, you need to figure out that it is the point of the lines for which the ordinate (`y`) is the same for an equal value of the abscissa (`x`), i.e. write the following equations:

    a1 * x + b1 = a2 * x + b2
              <=>
    (a1 - a2) *x = b2 - b1
              <=>
    x = (b2 - b1) / (a1 - a2)

Once the abscissa `x` of the intersection has been found, it is easy to find its ordinate `y` using the equation of any of the two lines.

If the lines' slopes are equal, then the equation above has a division by zero problem, which reflects the fact that the line segments defined by the point pairs are parallel or co-linear, meaning that the problem has no solution (there is no intersection point).

## My solution

With the above knowledge secured, it is fairly easy to write a Perl 6 program computing the intersection point of two lines defined by two point pairs. The basic algorithm is fairly simple, but it becomes a little bit complicated when we want to tackle all the edge cases (two points which are the same, vertical line, parallel lines, etc.).

There is one slight complication, though: if one (and only one) of the point pairs have points with the same abscissa, we cannot write a linear equation for that pair of points, but the straight line is nonetheless well defined (provided the ordinates are different): it is a vertical line where all point have the same abscissa (`x` value). We cannot write an equation for such a line, but may still find the intersection point with the other line: it is the point of that other line having this abscissa. This special case will account for quite a lot of code lines in our solution.

Another observation is that this type of problem calls for object-oriented programming (even though I'm generally not a great OO fan). So, we will define a `Point` type and a `Segment` class (with two `Point` attributes) providing the `slope` and `y-intercept` methods to compute the equation of a line passing through the two points. The `Point` role also provides a `gist` method enabling pretty printing of the point coordinates when using the `say` built-in function on a `Point` instance.

``` Perl6
use v6;

role Point {
    has $.x;
    has $.y;

    method gist {
        return "\n- Abscissa: $.x\n- Ordinate: $.y.";
    }
}
class Segment {
    has Point $.start;
    has Point $.end;

    method slope {
        return ($.end.y - $.start.y) / ($.end.x - $.start.x);
    }
    method y-intercept {
        my $slope = self.slope;
        return $.start.y - $slope * $.start.x;
    }
    method line-coordinates { # used only for debugging purpose
        return self.slope, self.y-intercept;
    }
}

sub compute-intersection (Segment $s1, Segment $s2) {
    my $abscissa = ($s2.y-intercept - $s1.y-intercept) /
                   ($s1.slope - $s2.slope);
    my $ordinate = $s1.slope * $abscissa + $s1.y-intercept;
    my $intersection = Point.new( x => $abscissa, y => $ordinate);
}

multi MAIN ( $a1, $b1, # start of line segment 1
             $a2, $b2, # end of line segment 1
             $a3, $b3, # start of line segment 2
             $a4, $b4  # end of line segment 2
         ) {
    my $segment1 = Segment.new(
                                 start => Point.new(x => $a1, y => $b1),
                                 end   => Point.new(x => $a2, y => $b2)
                              );
    my $segment2 = Segment.new(
                                 start => Point.new(x => $a3, y => $b3),
                                 end   => Point.new(x => $a4, y => $b4)
                              );
    say "Coordinates of intersection point: ", compute-intersection $segment1, $segment2;
}
multi MAIN () {
    say "Using default input values for testing. Should display poinr (2, 4).";
    my $segment1 = Segment.new(
                                 start => Point.new(x => 3, y => 1),
                                 end   => Point.new(x => 5, y => 3)
                              );
    my $segment2 = Segment.new(
                                 start => Point.new(x => 3, y => 3),
                                 end   => Point.new(x => 6, y => 0)
                              );
    say  "Coordinates of intersection point: ", compute-intersection $segment1, $segment2;
}
```

This is a sample run of the program:

    $ perl6  intersection.p6  3 1 5 3 3 3 6 0
    Coordinates of intersection point:
    - Abscissa: 4
    - Ordinate: 2.

As it is, this program isn't doing any validation on its arguments. So we will add a `valid-args` subroutine for that purpose and also check that the computed segments are not parallel.

``` Perl6
use v6;

role Point {
    has $.x;
    has $.y;

    method gist {
        return "\n- Abscissa: $.x\n- Ordinate: $.y.";
    }
}
class Segment {
    has Point $.start;
    has Point $.end;

    method slope {
        return ($.end.y - $.start.y) / ($.end.x - $.start.x);
    }
    method y-intercept {
        my $slope = self.slope;
        return $.start.y - $slope * $.start.x;
    }
    method line-coordinates {
        return self.slope, self.y-intercept;
    }
}
sub compute-intersection (Segment $s1, Segment $s2) {
    my $abscissa = ($s2.y-intercept - $s1.y-intercept) /
                   ($s1.slope - $s2.slope);
    my $ordinate = $s1.slope * $abscissa + $s1.y-intercept;
    my $intersection = Point.new( x => $abscissa, y => $ordinate);
}
multi MAIN ( $a1, $b1, # start of line segment 1
             $a2, $b2, # end of line segment 1
             $a3, $b3, # start of line segment 2
             $a4, $b4  # end of line segment 2
         ) {
    exit unless valid-args |@*ARGS;
    my $segment1 = Segment.new(
            start => Point.new(x => $a1, y => $b1),
            end   => Point.new(x => $a2, y => $b2)
                              );
    my $segment2 = Segment.new(
            start => Point.new(x => $a3, y => $b3),
            end   => Point.new(x => $a4, y => $b4)
                              );
    say "Segments are parallel or colinear." and exit
        if $segment1.slope == $segment2.slope;
    say "Coordinates of intersection point: ",
        compute-intersection $segment1, $segment2;
}
multi MAIN () {
    say "Using default input values for testing. Should display poinr (2, 4).";
    my $segment1 = Segment.new(
            start => Point.new(x => 3, y => 1),
            end   => Point.new(x => 5, y => 3)
                              );
    my $segment2 = Segment.new(
            start => Point.new(x => 3, y => 3),
            end   => Point.new(x => 6, y => 0)
                              );
    say  "Coordinates of intersection point: ",
        compute-intersection $segment1, $segment2;
}
sub valid-args ( $a1, $b1, # start of line segment 1
                 $a2, $b2, # end of line segment 1
                 $a3, $b3, # start of line segment 2
                 $a4, $b4  # end of line segment 2
         ) {
    unless @*ARGS.all ~~ /<[\d]>+/ {
        say "Non numeric argument. Can't continue.";
        return False;
    }
    if $a1 == $a2 and $b1 == $b2 {
        say "The first two points are the same. Cannot draw a line.";
        return False;
    }
    if $a3 == $a4 and $b3 == $b4 {
        say "The last two points are the same. Cannot draw a line.";
        return False;
    }
    if $a1 == $a2 and $a3 == $a4 {
        say "The two segments are vertical. No intersection.";
        return False;
    }
    if $a1 == $a2 {
        # First segment is vertical but not the second one
        my $segment2 = Segment.new(
                start => Point.new(x => $a3, y => $b3),
                end   => Point.new(x => $a4, y => $b4)
            );
        my $ordinate = $segment2.slope * $a1 + $segment2.y-intercept;
        my $interception = Point.new(x => $a1, y => $ordinate);
        say "Coordinates of intersection point: ", $interception;
        return False;
    }
    if $a3 == $a4 {
        # Second segment is vertical but not the first one
        my $segment1 = Segment.new(
                start => Point.new(x => $a1, y => $b1),
                end   => Point.new(x => $a2, y => $b2)
            );
        my $ordinate = $segment1.slope * $a3 + $segment1.y-intercept;
        my $interception = Point.new(x => $a3, y => $ordinate);
        say "Coordinates of intersection point: ", $interception;
        return False;
    }
    return True;
}
```

Running the program with some examples of valid or invalid arguments displays the following:

    $ perl6  intersection.p6  3 1 5 3 3 3 n 0
    Non numeric argument. Can't continue.

    $ perl6  intersection.p6  3 1 5 3 3 3 5.4 0
    Coordinates of intersection point:
    - Abscissa: 3.888889
    - Ordinate: 1.888889.

    $ perl6  intersection.p6  3 1 5 3 3 3 6.0 0
    Coordinates of intersection point:
    - Abscissa: 4
    - Ordinate: 2.

    $ perl6  intersection.p6  3 1 5 3 6 2 10 6
    Segments are parallel or colinear.

    $ perl6  intersection.p6  3 1 3 1 3 3 6 0
    The first two points are the same. Cannot draw a line.

    $ perl6  intersection.p6  3 1 3 2 3 5 3 0
    The two segments are vertical. Cannot find an intersection.

## Alternate Solutions

My program just above is much longer than most other solutions presented below. The only other quite long program is Joelle Maslak's, which also happens to be the only other object-oriented solution. This may be a coincidence, but I have the feeling that OO programming often leads to rather verbose solutions. And this is, by the way, one of the reasons why I'm not a great fan of OO programming: it feels a bit like writing Java in Perl 6. Having said that, I should add that most more concise solutions contain long mathematical formulas that are a bit difficult to read and hardly self-documenting.

[Arne Sommer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-027/arne-sommer/perl6/ch-1.p6)'s solution is much shorter than mine, but I'm afraid Arne looked only at some of the edge cases:

``` Perl6
my \ta1 = (y3−y4) * (x1−x3) + (x4−x3) * (y1−y3);
my \ta2 = (x4−x3) * (y1−y2) − (x1−x2) * (y4−y3);
my \tb1 = (y1−y2) * (x1−x3) + (x2−x1) * (y1−y3);
my \tb2 = (x4−x3) * (y1−y2) − (x1−x2) * (y4−y3);
my \ta = ta1 / ta2;
my \tb = tb1 / tb2;
if ta2 == 0 || tb2 == 0
{
  say "Colinear lines";
}
elsif 0 <= ta <= 1 && 0 <= tb <= 1
{
  say "Segment intersection at x: { x1 + ta * (x2 - x1) } y: { y1 + ta * (y2 − y1) }";
}
else
{
  say "General Intersection (outside the box)";
}
```

[Kevin Colyer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-027/kevin-colyer/perl6/ch-1.p6)'s solution is also shorter than mine but also appears to skip some of the validation. This is the code of Kevin's subroutine making the real work:

``` Perl6
sub intersection($a,$b,$c,$d,$e,$f,$g,$h) {
    my $m1=($b-$d)/($a-$c);
    my $m2=($f-$h)/($e-$g);

    return (False,Nil,Nil,"Do not intersect: lines are parallel") if $m1==$m2;

    my $x=($f-$b+$m1*$a-$m2*$e)/($m1-$m2);

    my $y=$m2*$x-$m2*$e+$f;

    return (False,Nil,Nil,"Do not intersect: x is not on line 1") if $x < $a < $c or $x > $c > $a;
    return (False,Nil,Nil,"Do not intersect: y is not on line 1") if $y < $b < $d or $y > $d > $b;
    return (False,Nil,Nil,"Do not intersect: x is not on line 2") if $x < $e < $g or $x > $g > $e;
    return (False,Nil,Nil,"Do not intersect: y is not on line 2") if $y < $f < $h or $y > $h > $f;

    return (True,$x,$y,"Lines intersect at $x,$y");
}
```

[Markus Holzer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-027/markus-holzer/perl6/ch-1.p6) also made a very short solution. This is Markus's main subroutine:

``` Perl6
sub intersection( Int \x1, Int \y1, Int \x2, Int \y2, Int \x3, Int \y3, Int \x4, Int \y4 )
{
    CATCH { default { fail "Lines are parallel or identical" } }

    return (
        eager # potential for division by zero,
            ( (x1 * y2 - y1 * x2 ) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3*x4) ) div
            ( (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4) ),

        eager # without eager, laziness will bite us later
            ( (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 -y2) * (x3*y4 - y3 * x4) ) div
            ( (x1 - x2) * (y3 - y4) - (y1 - y2) * (x2 - x4) )
    );
}
```

[Noud](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-027/noud/perl6/ch-1.p6) has the following very relevant comment:

    # Computational geometry is always difficult, because there are so many border
    # cases you have to take into account. I hope I covered all of them.

Noud's main subroutine is as follows:

``` Perl6
sub line_intersection(($x1, $y1), ($x2, $y2), ($x3, $y3), ($x4, $y4)) {
    if (($x1 == $x2 and $y1 == $y2) or ($x3 == $x4 and $y3 == $y4)) {
        die "Input doesn't represent two lines.";
    }
    my $disc = ($x1 - $x2) * ($y3 - $y4) - ($y1 - $y2) * ($x3 - $x4);
    if ($disc == 0) {
        if ($x1 == $x2 and $x2 == $x3 and $x3 == $x4) {
            # Lines coincide vertically. Return one coinciding point.
            return ($x1, $y1);
        }
        if ($y1 == $y2 and $y2 == $y3 and $y3 == $y4) {
            # Lines coincide horizontally. Return one coinciding point.
            return ($x1, $y1);
        }
        if (($y1 - $x1) * ($x4 - $x2) == ($y2 - $x2) * ($x3 - $x1)) {
            # Lines coincide diagonally. Return one coinciding point.
            return ($x1, $y1);
        }
        # If the discriminant is zero, the two lines are parallel to each
        # other. Therefore, depending on your definitions the lines don't
        # intersect, or they intersect at infinity, introducing a
        # non-Euclidian geometry. I choose the latter.
        return Inf;
    }
    # Discriminant is non-zero, hence there is one intersecting point.
    return ((($x1 * $y2 - $y1 * $x2) * ($x3 - $x4)
            - ($x3 * $y4 - $y3 * $x4) * ($x1 - $x2)) / $disc,
        (($x1 * $y2 - $y1 * $x2) * ($y3 - $y4)
            - ($x3 * $y4 - $y3 * $x4) * ($y1 - $y2)) / $disc);
}
```

[Simon Proctor](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-027/simon-proctor/perl6/ch-1.p6)'s program is also fairly short:

``` Perl6
sub MAIN( Rat() \a, Rat() \b, Rat() \c, Rat() \d,
          Rat() \p, Rat() \q, Rat() \r, Rat() \s ) {

    my \a1 = d - b;
    my \b1 = a - c;
    my \c1 = a1*(a) + b1*(b);

    my \a2 = s - q;
    my \b2 = p - r;
    my \c2 = a2*(p)+ b2*(q);

    my \determinant = a1*b2 - a2*b1;

    say "Lines ({a},{b}) -> ({c},{d}) and ({p},{q}) -> ({r},{s})";

    if ( determinant == 0 ) {
        say "Lines are parallel. No intersection";
    } else {
        my \x = (b2*c1 - b1*c2)/determinant;
        my \y = (a1*c2 - a2*c1)/determinant;
        say "Intersection at ({x},{y})";
    }
}
```

[Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-027/joelle-maslak/perl6/ch-1.p6)'s code starts with a very interesting and detailed comment about all the edge cases. Well worth reading. Her program is object-oriented and defines a `Point` and a `Line` classes (both use the CPAN `StrictClass` role, which I did not know before and which makes the program choke on unknown attributes). Her `Line` class defines five methods and also redefines the `eqv` infix operator for `Line` objects:

``` Perl6
# We need an eqv that works
CORE::<&infix:<eqv>>.add_dispatchee(
    multi sub infix:<eqv> (Line:D $line1, Line:D $line2 -->Bool) {
        return False if $line1.slope ≠ $line2.slope;

        # Are both vertical?
        if $line1.slope == ∞ and $line2.slope == ∞ {
            return $line1.point.x == $line2.point.x;
        }

        # All other lines
        return $line1.point.y == $line2.solve-for-y($line1.point.x);
    }
);
```
[Roger Bell West](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-027/roger-bell-west/perl6/ch-1.p6) contributed a fairly concise program (except for his rather verbose way of retrieving the argupments passed to the program):

``` Perl6
my @x;
my @y;

@x[1]=shift @*ARGS;
@y[1]=shift @*ARGS;
@x[2]=shift @*ARGS;
@y[2]=shift @*ARGS;
@x[3]=shift @*ARGS;
@y[3]=shift @*ARGS;
@x[4]=shift @*ARGS;
@y[4]=shift @*ARGS;

my $d=(@x[1]-@x[2])*(@y[3]-@y[4]) - (@y[1]-@y[2])*(@x[3]-@x[4]);
if ($d==0) {
  die "Lines are parallel or coincident.\n";
}
my $t=( (@x[1]-@x[3])*(@y[3]-@y[4]) - (@y[1]-@y[3])*(@x[3]-@x[4]) )/$d;
if $t < 0 or $t > 1 {
  die "No intersection.\n";
}
my $u=( (@y[1]-@y[2])*(@x[1]-@x[3]) -  (@x[1]-@x[2])*(@y[1]-@y[3]))/$d;
if $u < 0 or $u > 1 {
  die "No intersection.\n";
}
@x[0]=@x[1]+$t*(@x[2]-@x[1]);
@y[0]=@y[1]+$t*(@y[2]-@y[1]);
say "@x[0] @y[0]";
```

[Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-027/ruben-westerberg/perl6/ch-1.p6) also suggested a very concise program:

``` Perl6
my @l;
while @l < 2  {
    my @p=split " ", prompt("Enter line"~(@l+1)~":  x1 y1 x2 y2\n"), :skip-empty;
    if (@p==4) {
        push @l, {px=>[@p[0,2]],py=>[@p[1,3]],m=>Any,c=>Any};
    }
    else {
        print "not a valid line! \n";
    }
}

for @l {
    $_<m>=($_<py>[1]-$_<py>[0])/($_<px>[1]-$_<px>[0]);
    $_<c>=$_<py>[0]- ($_<m>*$_<px>[0]);
}
my $x=(@l[0]<c>-@l[1]<c>)/( @l[1]<m>-@l[0]<m>);
my $y=@l[0]<m>*$x+@l[0]<c>;

put "Intercept point: $x, $y";
```

***

# Task #2: Displaying Historical Values

***

This is derived in part from my [blog post](http://blogs.perl.org/users/laurent_r/2019/09/perl-weekly-challenge-27-intersection-point-and-historical-values.html) made in answer to the [Week 27 of the Perl Weekly Challenge](https://perlweeklychallenge.org/blog/perl-weekly-challenge-027/) organized by  <a href="http://blogs.perl.org/users/mohammad_s_anwar/">Mohammad S. Anwar</a> as well as answers made by others to the same challenge.

The challenge reads as follows:

*Write a script that allows you to capture/display historical data. It could be an object or a scalar. For example:*

> *my $x = 10; $x = 20; $x -= 5;*

*After the above operations, it should list $x historical value in order.*

## My Solution

I was very busy during the week of that challenge and was running out of time. Therefore my answers were somewhat minimalist.

I initially tried to redefine the `=` assignment operator but that appears to be impossible:

    Cannot override infix operator '=', as it is a special form handled directly by the compiler

So, I decided to create my own `=:=` assignment operator for watched variables. Besides that, the program uses the `WatchedValue` class to enable the storing of current and past values.

``` Perl6
use v6;

class WatchedValue {
    has Int $.current-value is rw;
    has @.past-values = ();

    method get-past-values {
        return @.past-values;
    }
}

multi sub infix:<=:=> (WatchedValue $y, Int $z) {
    push $y.past-values, $y.current-value;
    $y.current-value = $z;
}
my $x = WatchedValue.new(current-value => 10);
say "Current: ", $x.current-value;
$x =:= 15;
say "Current: ", $x.current-value;
$x =:= 5;
say "Current: ", $x.current-value;
$x =:= 20;
say "Current: ", $x.current-value;
say "Past values: ", $x.get-past-values;
```

When running the program; I get warnings for each assignment:

    Useless use of "=:=" in expression "$x =:= 15" in sink context (line 18)

I do not know how to avoid or suppress these warnings (it seems that the `no warnings ...` pragma isn't implemented yet), but the program otherwise runs correctly and displays the successive values:

    Current: 10
    Current: 15
    Current: 5
    Current: 20
    Past values: [10 15 5]

## Alternate solutions

All challengers except Noud and Yet Ebreo used objects of the built-in [Proxy](https://docs.perl6.org/type/Proxy) class, which I did not know about before. According to the Perl 6 documentation, a proxy is an object that allows you to set a hook that executes whenever a value is retrieved from a container (`FETCH`) or when it is set (`STORE`). This is quite obviously the right tool for solving the task at hand. This is the example provided in the official Perl 6 documentation to create a container that returns twice what was stored in it:

``` Perl6
sub double() is rw {
    my $storage = 0;
    Proxy.new(
        FETCH => method ()     { $storage * 2    },
        STORE => method ($new) { $storage = $new },
    )
 }
 my $doubled := double();
 $doubled = 4;
 say $doubled;       # OUTPUT: «8
»
```

[Arne Sommer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-027/arne-sommer/perl6/ch-2.p6)'s program defines a`%hist` hash to store values according to their time stamp, and then defines the `memoryvariable` subroutine creating and returning `Proxy` object:

``` Perl6
sub memoryvariable($label) is rw
{
  my $val;
  Proxy.new(
    FETCH => method ()
    {
        $val
    },
    STORE => method ($new)
    {
        $val = $new;
        %hist{$label}.push( Pair(now.Int => $new) );
    },
  );
}
```
Arne also defines two additional subroutines, one for displaying the stored historical values and another to output historical values along with the associated time stamp. For example, the second subroutine might display the following:

    2019-10-06T17:35:10+02:00: 10
    2019-10-06T17:35:10+02:00: 20
    2019-10-06T17:35:10+02:00: 15

[Kevin Colyer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-027/kevin-colyer/perl6/ch-2.p6) created a `HistoryInt` class also using a `Proxy` object, storing the historical values in an array attribute (`@.history`) of the `HistoryInt` class:

``` Perl6
class HistoryInt {
  has Int $.x =0 ;
  has @.history;

  method x () is rw {
    Proxy.new(
      FETCH => -> $ { $!x },
      STORE => -> $, Int $new {
        $!x = $new;
        @!history.push: $new;
      }
    )
  }
  method History () {
    @!history;
  }
}
```

[Markus Holzer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-027/markus-holzer/perl6/ch-2.p6)'s program is extremely concise:

``` Perl6
use Scalar::History;

my Int $x := Scalar::History.create(10, Int);
$x = 20;
$x -= 5;
```

thanks to the fact that it uses the [Scalar::History](https://github.com/holli-holzer/perl6-Scalar-History) module, which he wrote and is still in development stage (it should presumably go to CPAN some time in the future when completed). This module also uses `Proxy` objects.

[Simon Proctor](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-027/simon-proctor/perl6/ch-2.p6) implemented a `Historic` class with a `@!values` attribute, implementing various setters and getters and using `Proxy` objects. One very interesting point is that he also implemented a `Δ=` operator to handle `Historic` objects:

``` Perl6
multi sub infix:<Δ=> ( Any:U $h is rw, Any $v ) is equiv(&infix:<=>) {
     $h = Historic.new();
     $h.set( $v );
     $h;
}

multi sub infix:<Δ=> (Historic:D $h, Any $a) is equiv(&infix:<=>) {
    $h.set($a);
    return $h;
}
```

[Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-027/joelle-maslak/perl6/ch-2.p6) implemented a `History` class with the `@!hist` and `$!data` attributes, also using `Proxy` objects:

``` Perl6
class History {
    has @!hist;
    has $!data;

    method get-proxy() is rw {
        my $data    := $!data;
        my $history := @!hist;
        Proxy.new(
            FETCH => method ()     { $data },
            STORE => method ($val) { $data = $val; $history.push( $data.clone ) },
        );
    }

    method history() {
        my @h = @!hist;
        return @h;
    }
}
```

[Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-027/ruben-westerberg/perl6/ch-2.p6) used a `@history` array to store the successive values of a `Proxy` object:

``` Perl6
sub remembering (@history) {
    return-rw Proxy.new(
        FETCH => method () {@history[*-1]},
        STORE => method ($new) {;@history.push($new)}
    );
}
```

[Noud](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-027/noud/perl6/ch-2.p6) wrote a program that reads another program and writes a third one. His program takes another program as an argument and parses it to collect information about the variables used in this other script. After that, it creates a `%var_hash_` that updates the current values of each of the defined variables after each semicolon. The new script is then executed using the EVAL method. Noud humourously comments that he hopes he doesn't get banned from the Perl Weekly Challenge club for using the dangerous `EVAL` statement in this problem. He certainly shouldn't be banned, especially not for writing such an innovative solution! It is worth quoting the whole program:

``` Perl6
use MONKEY-SEE-NO-EVAL;

sub MAIN(Str $filename) {
    # Collect all variables in program.
    my @variables = ();
    for $filename.IO.slurp.split(";") -> $line {
        my @line_var = ($line ~~ /my\s*\$(\w+)/).values;
        if (@line_var.elems > 0) {
            @variables = (|(@line_var), |(@variables));
        }
    }

    my $exec_prog = "";
    for $filename.IO.slurp.split(";") -> $line {
        $exec_prog = "$exec_prog $line\;";
        # After every line update %var_hash_ with the current variable values.
        for @variables -> $x {
            $exec_prog = "$exec_prog
                if (not DYNAMIC::<\$$x> === Nil) \{
                    \%var_hash_\.push: ($x => DYNAMIC::<\$$x>)\; \}\;";
        }
    }

    my %var_hash_;
    EVAL $exec_prog;  # https://xkcd.com/292/

    say "Variables history:";
    for %var_hash_.kv -> $var, @hist {
        my @hist_ = @hist.grep({ not $_.^name === "Any" });
        if (@hist_.elems > 0) {
            print("$var = (");
            my $last = @hist_[0];
            print("$last");
            for @hist_[1..*] -> $next {
                if ($last != $next) {
                    print(", $next");
                    $last = $next;
                }
            }
            print(")\n");
        }
    }
}
```

[Yet Ebreo](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-027/yet-ebreo/perl6/ch-2.p6) created an *apparently* very simple `hist` class with a `STORE` method:

``` Perl6
class hist {
    has @.history;
    has $!var handles <Str gist FETCH Numeric>;
    method STORE($val) {
        push @.history, $val;
        $!var = $val;
    }
}
my \x = hist.new(history => []);

x = 10;
x = 20;
x -= 5;
x = 3.1416;
x = Q[a quick brown fox jumps over the lazy dog];
x = 1e3;
x*= sqrt 3;
.say  for x.history;
```

The code of the `hist` class seems very simple, but is in fact pretty clever. I must admit that I don't fully grasp it: I don't really understand what the `handles` trait does in such context, and I am also not quite sure how this (re)definition of the `STORE` subroutine is supposed to work. If any reader wants to explain this, I would be very happy to update this blog post accordingly.

***

## SEE ALSO

Only two blog posts this time (in addition to mine):

* Arne Sommer: https://perl6.eu/historical-intersection.html;

* Roger Bell West: https://blog.firedrake.org/archive/2019/09/Perl_Weekly_Challenge_27.html.

***

## Wrapping up

Please let me know if I forgot any of the challengers or if you think my explanation of your code misses something important (you can just file an issue against this GitHub page).

If you want to participate to the Perl Weekly Challenge, please connect to [this site](https://perlweeklychallenge.org/).
