
---
author:       Colin Crain
date:         2021-01-17T00:00:00
description:  "Colin Crain › Perl Weekly Review #093"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #093"
image:        images/blog/p5-review-challenge-093.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-092/).* )

Welcome to the Perl review for **Week 093** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

---

### Why do we do these challenges?

I suppose any answers to that would be as wide ranging and varied as the people who choose to join the team. One thing is clear: it's not a competition, and there are no judges, even if there is a "prize" of sorts. About that -- I think of it more as an honorarium periodically awarded to acknowledge the efforts we make towards this strange goal. So there's no determination to find the *fastest*, or the *shortest*, or even, in some abstract way, the *best* way to go about things, although I'm certain the individuals have their own aspirations and personal drives. As Perl is such a wonderfully expressive language, this provides quite a bit of fodder to the core idea of TMTOWTDI, producing a gamut of wonderfully varied techniques and solutions.

Even the tasks themselves are often open to a certain amount of discretionary interpretation. What we end up with is a situation where each participant is producing something in the manner they find the most interesting or satisfying. Some team members focus on carefully crafted complete applications that thoroughly vet input data and handle every use case they can think up. Others chose to apply themselves to the logic of the underlying puzzle and making it work in the most elegant way they can. Some eschew modules they would ordinarily reach for, others embrace them, bringing to light wheels perhaps invented years ago that happen to exactly solve the problem in front of them today.

I've been considering this question for some time and have found one binding commonality between all of us solving these challenges each week, in that however we normally live our lives, the task in front of us more than likely has nothing to do with any of that . And I think this has great value. We all do what we do, out in the real world, and hopefully we do it well. The Weekly Challenge provides a opportunity to do something germane to that life yet distinctly different; if we only do the things we already know how to do we only do the same things over and over. This is where the "challenge" aspect comes into play.

So we can consider the Weekly Challenge as providing a problem space outside of our comfort zone, as far out from comfort as we wish to take things. From those reaches we can gather and learn things and bring what we want back into our lives. Personally, I think that's its greatest value of all.

---

Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due. And that's why I'm here, to try and figure out how to do that.

Let's have a look and see what we can find.

---

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-093/) or the summary [**recap**](/blog/recap-challenge-093/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC093TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC093TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC093BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC093TASK1}

# Max Points
*Submitted by: Mohammad S Anwar*

You are given set of co-ordinates @N.

Write a script to count maximum points on a straight line when given co-ordinates plotted on 2-d plane.

**Example 1:**
```
    |
    |     x
    |   x
    | x
    + _ _ _ _

    Input: (1,1), (2,2), (3,3)
    Output: 3
```

**Example 2:**
```
    |
    |
    | x       x
    |   x
    | x   x
    + _ _ _ _ _

    Input: (1,1), (2,2), (3,1), (1,3), (5,3)
    Output: 3
```

## about the solutions

There were 23 working submissions for the first task this past week. Starting with fundamental divergence over the meaning of the task itself, the methods employed to solve it varied widely, making my task complicated. There were some that regarded the challenge as more like a word search, sticking to possibly adjacent points restricted to the major axes and diagonals. The bulk of the submissions, though, regarded the colinearity to mean any theoretical line (even in one case *n*-dimensional), with many different approaches to determining whether either a given point lay on an existing line, or if various line segments between points were in fact on the same line. Categorizing the results proved tortuous, but I will do my best to at least touch on as many of the angles as I can as we survey the field.

## the WORDSEARCH interpretation
[**Alexander Karelas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/alexander-karelas/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/laurent-rosenfeld/perl/ch-1.pl), and
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/sgreen/perl/ch-1.pl)

A few souls took the geometric simplicity of the examples given to heart, and understood the challenge to be looking for lines only along the two orthogonal and two 45° diagonal axes. In this reading of the challenge the possible lines are considerably limited and the search takes on a quite different look. I called this the "wordsearch" approach.

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/laurent-rosenfeld/perl/ch-1.pl)

Laurent expressly limits his search to *physically adjacent* points in the cardinal and intercardinal directions. After stringifying the given point coordinates and using them for keys in a lookup, he then iterates through each point set looking for continuous lines. Utilizing a set of anonymous subroutines that return the next grid point in each direction he uses the lookup to check to see if a point is present at the next coordinate, and increments a counter as long as there is.

He only needs to check half the directions at each point, as by exhaustively checking he will eventually discover the furthest extant of any lines present and tally its complete length.

```perl
        my %directions = (
            N  => sub { $_[0]->[0]    ,  $_[0]->[1] + 1 },
            NE => sub { $_[0]->[0] + 1,  $_[0]->[1] + 1 },
            E  => sub { $_[0]->[0] + 1,  $_[0]->[1]     },
            SE => sub { $_[0]->[0] + 1,  $_[0]->[1] - 1 }
        );
        my %point_hash = map { my @a = @$_; "$$_[0];$$_[1]" => 1 } @points;
        my $max_count = 0;
        for my $point (@points) {
            for my $dir (keys %directions) {
                my $count = 1;
                my @p = $directions{$dir}->($point);
                while ($point_hash{"$p[0];$p[1]"}) {
                    @p = $directions{$dir}->([@p]);
                    $count++;
                }
                $max_count = $count if $count > $max_count;
            }
        }
```

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/sgreen/perl/ch-1.pl)

Simon also goes looking for chains of adjacent points, this time first establishing an intermediate grid structure with 1s at the given points to verify point locations against. Because he's done it this way however, we get a diagram of the grid almost for free, which he provides.

Much like Laurent he iterates through the points, looking along the axes for continuous chains. Again we need only look at half the directions, as we will eventually start at the furthest extant of every line. His code is well documented and quite a bit longer, but here is the iteration core:

```perl
    # Now work through each point, in each direction
    foreach my $x ( 0 .. $max_x ) {
        foreach my $y ( 0 .. $max_y ) {
            # A line can't start here if the value is not true
            next unless $grid[$x][$y];

            foreach my $direction (@directions) {
                my ( $delta_x, $delta_y ) = @$direction;

                my $count = 0;
                while ( ++$count ) {
                    # Exit the loop when we've found a non true value or have reached the bottom of the grid.
                    last
                      unless $grid[ $x + $delta_x * $count ][ $y + $delta_y * $count ]
                      and $x + $delta_x * $count >= 0;
                }

                $max = $count if $max < $count;
            }
        }
    }
```

[**Alexander Karelas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/alexander-karelas/perl/ch-1.pl)

Karelas takes a completely different approach, not limiting himself to only contiguous point strings. Using four patterns, he increments values for each point in four hashes, one for each orthogonal and diagonal direction. For example, every point with an x-value of 3 increments the key "3" in the "x" hash. I really like the way he handles the diagonals. The task then is simply to find the maximum value among the hashes. The result is quite compact and elegant.

```perl
    my %lines = (
        x  => {},
        y  => {},
        d1 => {},
        d2 => {},
    );

    foreach my $point (@points) {
        $lines{x}{$point->[0]}++;
        $lines{y}{$point->[1]}++;
        $lines{d1}{$point->[0] - $point->[1]}++;
        $lines{d2}{$point->[0] + $point->[1]}++;
    }

    my @lines;
    foreach my $hashset (values %lines) {
        push @lines, values %$hashset;
    }

    return max(@lines);
```


## match SLOPE-INTERCEPT lines
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/athanasius/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/colin-crain/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/duncan-c-white/perl/ch-1.pl),
[**Joel Crosswhite**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/jcrosswh/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/perlboy1967/perl/ch-1.pl), and
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/pete-houston/perl/ch-1.pl)

If we take any two pairs of points, we can draw a line segment between them and calculate a slope-intercept equation for the underlying line. Then collecting the incidence of the points in vaious lines will tell us which line contains the most points. Easy.

[**Joel Crosswhite**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/jcrosswh/perl/ch-1.pl)

Joel breaks his logic into distinct sections; here he uses two routines to find the slope and intercept for lines and then hash the results

```perl
    sub get_all_lines {
        my ($coordinates) = @_;

        my %lines;
        for (my $i = 0; $i < scalar(@{$coordinates}) - 1; $i++) {
            for (my $j = $i + 1; $j < scalar(@{$coordinates}); $j++) {

                my $m_and_b = get_m_and_b_for_line($coordinates->[$i],
                    $coordinates->[$j]);
                push(@{$lines{$m_and_b->{m} . ',' . $m_and_b->{b}}},
                    $coordinates->[$i]);
                push(@{$lines{$m_and_b->{m} . ',' . $m_and_b->{b}}},
                    $coordinates->[$j]);
            }
        }
        return \%lines;
    }

    sub get_m_and_b_for_line {
        my ($first_cordinate, $second_cordinate) = @_;

        my $m = ($second_cordinate->[0] - $first_cordinate->[0]) != 0
            ? ($second_cordinate->[1] - $first_cordinate->[1]) /
                ($second_cordinate->[0] - $first_cordinate->[0])
            : '*';
        my $b = $m ne '*'
            ? (-1 * $first_cordinate->[0] * $m) + $first_cordinate->[1]
            : $first_cordinate->[0];
        return {'m' => $m, 'b' => $b};
    }
```

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/colin-crain/perl/ch-1.pl)

For my own solution, I used `Algorithm::Combinatorics` to give me 2-sets of points, and calculated a line segement between them. The intercept was then calculated from one of the points. With some special cases for infinite or zero slope a hash key is constructed. At this point counting the incidence of lines does not give you the number of points on the line, but rather the n-choose-2 of that number, the binomial coefficient. To solve for n and get the point count we can take the ceiling of the square root.

```perl
    sub reverse_binomial {
        use POSIX qw(ceil);
        my $b = shift;
        return ceil(sqrt $b);
    }
```


Unsatified with just determining the maximum colinear points I grafted on code to save the points to a hash as well, so we could directly output them, kind of sidestepping the need to reverse the binomial, but I left both solutions in anyways.

```perl
    ## make combinations of points and hash line coefficients between them
    my $iter = combinations( \@points, 2 );
    while ( my $c = $iter->next ) {
        my $line = get_line($c);
        my $key = make_hashkey($line);
        $lines{$key}++;                     ## the simple counting hash
        push $l2{$key}->@*, $c;             ## added: keeps track of point pairs instead
        $line_lookup{$key} = $line;         ## added: xref to remember line coordinates for output
    }

    ## calculate the simple solution
    my $max = max( values %lines );
    say "binomial is $max";
    say "quantity is ", reverse_binomial( 2 * $max );
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/athanasius/perl/ch-1.pl)

The monk creates a Line object to keep track of attributes such as slope (here called gradient) and x and y  intercepts. It also has a method, `collinear()` that given another Line, determines whether thaty are the same. The Line objects also hold an array of points found to lie along then, with methods to add points to the list and count the points.

It's a nice way to compartmentalize the various steps in the operation.

```perl
    sub add_point
    {
        my ($self, $new_point) = @_;
        my  $found = 0;

        for my $existing_point (@{ $self->{points} })
        {
            if (equals( $existing_point->[0], $new_point->[0] ) &&
                equals( $existing_point->[1], $new_point->[1] ))
            {
                $found = 1;
                last;
            }
        }

        push @{ $self->{points} }, $new_point unless $found;
    }

```


## use EACH POINT as an INTERCEPT
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/abigail/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/polettix/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/jo-37/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/lubos-kolouch/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/roger-bell-west/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/wanderdoc/perl/ch-1.pl)

Perhaps the easiest way to determine whether points are colinear is to systematically look at each point as an origin, and calculate the various slopes of the segements connecting to the the other points: those points that are colinear will have the same slope. By incrementing values in a hash with keys constructed from the point-slope combinations we can find the maximum value. The result is count of the maximum points added plus 1, for the original point.

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/jo-37/perl/ch-1.pl)

Jorg demonstrates the steps quite clearly

```perl
    sub max_points_in_line {

        # Provide an appropriate result in case of less than two
        # points given.
        my @points_in_line = @_ ? $_[0] : ();

        # Loop while there are enough points for a new maximum.
        while (@_ > @points_in_line) {

            # Get the first point - destructively.
            my $p = shift;

            # A hash to collect points per direction.
            my %dirs;

            # Loop over the remaining points.
            for my $q (@_) {

                # Get the canonical direction between the point pair.
                my $dir = canon_dir $p, $q;

                # The canonical direction is the key for the list of points
                # on the line going through the first point in the specific
                # direction.  Initialize an undefined list with the first
                # point.
                $dirs{$dir} ||= [$p];

                # Add the current second point to the direction's point
                # list.
                push $dirs{$dir}->@*, $q;

                # Record the current point list if it forms a new maximum.
                if ($dirs{$dir}->@* > @points_in_line) {
                    @points_in_line = $dirs{$dir}->@*;

                    say "max at ", pp($p), " in direction ($dir): ",
                         pp @points_in_line if $::verbose;
                }
            }
        }
        say 'points in line: ', pp @points_in_line if $::verbose;

        @points_in_line;
    }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/e-choroba/perl/ch-1.pl)

Choroba gives us a very interesting use of the `constant` and `enum` pragmas to help keep track of the list indices: a third "COUNT" element is added to the point list to, well, keep track of the counts of course, for lines originating at that point.

```perl
    use enum qw( X Y COUNT );
    use constant VERTICAL => 'vertical';

    sub max_points {
        my @points = @_;
        my %repeated;
        ++$repeated{"@$_"} for @points;
        my @unique_points = map [split, $repeated{$_}], keys %repeated;

        my $max = 0;
        for my $ip (1 .. $#unique_points) {
            for my $q (@unique_points[0 .. $ip - 1]) {
                my $p = $unique_points[$ip];
                my $count = $p->[COUNT] + $q->[COUNT];
                my $A = $p->[X] == $q->[X]
                    ? VERTICAL
                    : ($p->[Y] - $q->[Y]) / ($p->[X] - $q->[X]);
                my $B = $A eq 'vertical' ? 0 : $p->[Y] - $A * $p->[X];
                for my $r (@unique_points[$ip + 1 .. $#unique_points]) {
                    $count += $r->[COUNT]
                        if $A eq VERTICAL ? $r->[X] == $p->[X]
                                            : $A * $r->[X] + $B == $r->[Y];
                }
                $max = $count if $count > $max;
            }
        }
        return $max
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/james-smith/perl/ch-1.pl)

James gives us quite compact example of a similar reasoning:

```perl
    sub most_points_in_line {
      my @nodes = @_;
      my %lines;
      foreach my $i (0..(@nodes-2)) {
        foreach my $j (($i+1)..(@nodes-1)) {
          my $dir = $nodes[$i][1] == $nodes[$j][1]
                  ? '-'
                  :  ($nodes[$i][0]-$nodes[$j][0])/($nodes[$i][1]-$nodes[$j][1]);
          $lines{$i.':'.$dir}++;
          $lines{$j.':'.$dir}++;
        }
      }
      my $max = 0;
      foreach (values %lines) {
        $max = $_ if $_ > $max;
      }
      return $max+1;
    }
```


## a NOTE on FLOATS and RATIONALS
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/abigail/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/polettix/perl/ch-1.pl), and
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/jo-37/perl/ch-1.pl)

When computing the slope of a line, the rise over run division necessitates the use of a floating point type to hold the resultant value, bringing with it the usual uncertainty in portraying certain fractions and the precision of calculations. When using floats for hash keys, the stringification only accentuates the problem. This was brought up relatively often and addressed in a variety of ways, but some team members went the extra mile and realized that with *this* slope, we don't so much care about the value as creating an accurate and reproducible identifier for comparisons. Keeping the slope division as a fraction, with a numerator and denominator, seems ideal, but as-is the same ratio can also be arrived at in a multitude of ways, which is less so.

To resolve this the fraction can be reduced to a canonical form by dividing both values by the Greatest Common Divisor between the two. This will leave the numbers in their smallest equivalent fraction, suitable for cross-comparison.

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/abigail/perl/ch-1.pl)

Abigail gives us an implementation of [Stein's algorithm](https://en.wikipedia.org/wiki/Binary_GCD_algorithm)

```perl
    my $slope;
    if ($x1 == $x2) {
        $slope = "v";
    }
    else {
        my $y_diff = $y2 - $y1;
        my $x_diff = $x2 - $x1;
        my $gcd    = stein abs ($y_diff), abs ($x_diff);
        my $neg    = (($y_diff < 0) xor ($x_diff < 0));
        $slope     = join ";" => ($neg ? "-" : "+"),
                                 abs ($y_diff) / $gcd,
                                 abs ($x_diff) / $gcd;
    }
    $slopes {$slope} ++;

    ...

    sub stein ($u, $v) {
        return $u if $u == $v || !$v;
        return $v if             !$u;
        my $u_odd = $u % 2;
        my $v_odd = $v % 2;
        return stein ($u >> 1, $v >> 1) << 1 if !$u_odd && !$v_odd;
        return stein ($u >> 1, $v)           if !$u_odd &&  $v_odd;
        return stein ($u,      $v >> 1)      if  $u_odd && !$v_odd;
        return stein ($u - $v, $v)           if  $u     >   $v;
        return stein ($v - $u, $u);
    }

```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/polettix/perl/ch-1.pl)

Whereas Flavio whips up a quick rendition of [Euclid's](https://en.wikipedia.org/wiki/Euclidean_algorithm) for his GCD.

```perl
     if ( $dx == 0 ) {
            if ( $dy == 0 ) {  $skip{ $j }++; $coincident++  }
            else            {  $count_for{ '0, 1' }++  }
     }
     else {
            ( $dx, $dy ) = ( -$dx, -$dy ) if $dx < 0;
            my $gcd =
                    $dy > 0 ? gcd( $dx, $dy )
                            : $dy < 0 ? gcd( $dx, -$dy )
                                      : $dx;
            $count_for{ ( $dx / $gcd ) . ', ' . ( $dy / $gcd ) }++;
     } ## end else [ if ( $dx == 0 ) ]
```

## CROSS-PRODUCE it
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/paulo-custodio/perl/ch-1.pl) and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/wlmb/perl/ch-1.pl)

Ducking into the world of linear algebra, several members used a cross-product to determine colinearity — that two vectors are colinear if their cross product equals the zero vector.

[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/paulo-custodio/perl/ch-1.pl)

```perl
    # for each pair of points forming a line, check if the other points fall on the line
    my $points_in_line = 2;
    for my $i (0 .. $#P-1) {
        for my $j ($i+1 .. $#P) {    		# for each pair
            my $count = 2;
            if ($P[$i][0] == $P[$j][0] && $P[$i][1] == $P[$j][1]) {
                die "points must be different\n";
            }
            for my $k (0 .. $#P) {    		# check all other points
                if ($k != $i && $k != $j) {
                    # compute cross product
                    my $dxc = $P[$k][0] - $P[$i][0];
                    my $dyc = $P[$k][1] - $P[$i][1];

                    my $dxl = $P[$j][0] - $P[$i][0];
                    my $dyl = $P[$j][1] - $P[$i][1];

                    my $cross = $dxc * $dyl - $dyc * $dxl;
                    if ($cross == 0) {    	# Point Pk lies in line [Pi,Pj]
                        $count++;
                    }
                }
            }
            if ($count > $points_in_line) {
                $points_in_line = $count;
            }
        }
    }
```


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/wlmb/perl/ch-1.pl)

Luis uses the equation

(x1-x0)(yn-x0) = (y1-y0)(xn-x0)

to determine colinearity, matching individual points against a growing collection of lines.

```perl
    sub add_point {
        my $point = shift;
        my $lines = shift;
        foreach( my @previous_lines = @$lines ){
            push( @$lines, [$_->[0], $point] ), next if @$_ == 1; # new two-point line
            push( @$_, $point ), next # add point to existing line if co-linear
                if ( ( $_->[1][0]-$_->[0][0] )*( $point->[1]-$_->[0][1] )
                == ( $_->[1][1]-$_->[0][1] )*( $point->[0]-$_->[0][0] ) )
        }
        push @$lines, [$point]; # new one-point degenerate line
    }
```

## TRIANGLES everywhere!
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/adam-russell/perl/ch-1.pl),
[**Ben Bullock**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/bkb/perl/ch-1.pl), and
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/dave-jacoby/perl/ch-1.pl)

Several submissions were developed around the idea of calculating the area of a triangle from three points, and if that area is 0 then the points must by necessity be colinear. The calculation of the area from points comes from linear algebra, where the area is found to be one-half the determinant of a 3x3 matrix with rows composed of the x and y coordinates for each point and 1.

 ⎥ *x*<sub>1</sub> *y*<sub>1</sub> 1 ⎥

 ⎥ *x*<sub>2</sub> *y*<sub>2</sub> 1 ⎥

 ⎥ *x*<sub>3</sub> *y*<sub>3</sub> 1 ⎥

Expanded, the determinant is:

*x*<sub>1</sub>(*y*<sub>2</sub> - *y*<sub>3</sub>) + *x*<sub>2</sub>(*y*<sub>3</sub> - *y*<sub>1</sub>) + *x*<sub>3</sub>(*y*<sub>1</sub> - *y*<sub>2</sub>)

So if that equation equals 0, the points are colinear.

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/dave-jacoby/perl/ch-1.pl)

Dave uses `Algorithm::Permute` to section his point list into subsets of varying lengths, then systematically applies the equation to groups of three points within those subsets to see whether the set is colinear. The largest subset found wins.

```perl
    sub collinear ( $p1, $p2, $p3 ) {
        my $area =
            $p1->[0] * ( $p2->[1] - $p3->[1] ) +
            $p2->[0] * ( $p3->[1] - $p1->[1] ) +
            $p3->[0] * ( $p1->[1] - $p2->[1] );
        return $area == 0 ? 1 : 0;
    }
```

It sound computationally complex but Dave employs several large optimizations to prune the potential search tree rather radically. Here is one example of such a pruning: if we find a single 3-set of points, then the total is at least 3, and so we can immediately stop searching further within that group and start looking at 4-sets of points.

```perl
    # we test every subset, and if we fine a positive, that
    # means there is a line of this length, and then we go onto
    # the next length, because we don't care how many i-length
    # lines there are; we just need one.
    sub max_points ( $set ) {
        my $max = 2;
        my $len = scalar $set->@*;

    OUTER: for my $i ( 3 .. $len ) {
            my $ap = Algorithm::Permute->new( $set, $i );
            while ( my @res = $ap->next ) {
                my $t = test_area(@res);
                if ($t) {
                    $max = $i;
                    last OUTER;
                }
            }
        }
        return $max;
    }
```

[**Ben Bullock**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/bkb/perl/ch-1.pl)

Ben breaks his equation into two routines. A little analysis will reveal that the calculation is the same equation rearranged:

```perl
    ...

    for my $k ($j+1..$n-1) {
        my $pk = $p->[$k];
        if (collinear ($start, $end, $pk)) {
            $c++;
        }
    }

    ...

    sub collinear
    {
        my ($a, $b, $c) = @_;
        my $d = prod ($a, $b) + prod ($b, $c) + prod ($c, $a);
        return $d == 0;
    }

    sub prod
    {
        my ($a, $b) = @_;
        return $a->{x} * $b->{y} - $a->{y} * $b->{x};
    }

```






## RENEGADES, OUTLAWS and MAVERICKS, BLAZING their (her) own TRAILS
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/cheok-yin-fung/perl/ch-1.pl)

CY has taken the initiative to purposely restrict her lines to the major orthogonal and diagonal axes, so she can implement a solution that breaks the O(n<sup>2</sup>) wall normally associated with the general case. I'll let her describe it:

She cites her inspirational [source](https://stackoverflow.com/questions/4179581/what-is-the-most-efficient-algorithm-to-find-a-straight-line-that-goes-through-m), which is always to be commended.

```perl
# I choose to interpret the task as only integer
# coordinates are allowed and the "lines" are only the
# diagonals, horizontals or verticals because
# I find it fun to show it can inplement as an O(n log n) solution,
# instead of O(n^2) solution of BF for a more general case.
use strict;
use warnings;
use List::Util qw/max/;
use Test::More tests => 2 ;

my @coordinates = ([1,1], [2,2], [3,1], [1,3], [5,3] );

sub max_points {
    my $max = 1;
    my @line_char = @_;
    my $count = 1;
    my $pre = shift @line_char;
    for (@line_char) {
        if ($_ != $pre) {
            $max = $count if $count > $max;
            $pre = $_;
            $count = 1;
        } else {
            $count++;
        }
    }
    $max = $count if $count > $max;
    return $max;
}

sub max_colinear_points {
    my @coord = @_;
    my @nw_line_char = sort {$a<=>$b} map {$_->[0]+$_->[1]} @coord;
    my @ne_line_char = sort {$a<=>$b} map {$_->[0]-$_->[1]} @coord;
    my @ver_line_char = sort {$a<=>$b} map {$_->[1]} @coord;
    my @hor_line_char = sort {$a<=>$b} map {$_->[0]} @coord;

    print "\n";
    return max  max_points(@nw_line_char),max_points(@ne_line_char),
            max_points(@hor_line_char), max_points(@ver_line_char);
}
```




---

# TASK 2 {#PWC093TASK2}

# Sum Path
**Submitted by: Mohammad S Anwar**


You are given binary tree containing numbers 0-9 only.

Write a script to sum all possible paths from root to leaf.

**Example 1:**

```
    Input:

         1
        /
       2
      / \
     3   4

    Output: 13
    as sum two paths (1->2->3) and (1->2->4)
```

**Example 2:**

```
    Input:

         1
        / \
       2   3
      /   / \
     4   5   6

    Output: 26
    as sum three paths (1->2->4), (1->3->5) and (1->3->6)
```

## ABOUT the SOLUTIONS

The team came up with 22 submissions for the second task this past week.

A binary tree structure in Perl is not actually *hard* to represent. Ultimately every node is a structured array or hash, with elements or keys designating values and child nodes left and right. So a tree becomes a hash of hashes or an array of arrays. Defining and populating such a structure from raw data is a decidedly less-clear task.

Random-access to tree nodes is non-trivial, as the nodes exist anonymously, in relation only to their parent and children, but traversing from the root downward is only a matter of following links from parent to child, and is well suited to a recursive routine.

Thus the near-universal solution to walk the paths was recursion based, with a sum complied along the way, either using an external package variable, or through a working accumulator carried along with the recursion instances, or even, in the case of Abigail, compiled from the tail forward as the instances return.

Because of the extraordinarily diverse set of methods I have presented in front of me, grouping and categorization seems unusually difficult. Instead I'll break from my usual, more expository form and try visiting each solution in turn with noteworthy observations.

### ways presented to ENCODE a BINARY TREE

* an object from an external module, with its own API
* an object defined in a package in the script, with accessors and possibly methods
* a hash  of hashes
* an array of arrays
* a serialized structured list of node values

### an note on ORDERING

A binary tree is generally, but not exclusively, considered to be an ordered thing.

In the case of defining an arrays-of-arrays model for the tree, several members used a data format of the value followed by either one child or two, with a single child occupying index 1 regardless of whether it is the "left" or "right" node. In many cases of using a tree this would not matter, as once a child is spawned all interconnectedness for the nodes below is always still funneled through that one point, regardless of its chirality. Sometimes a branch is just a branch.

It occurs to me that this is not unlike the mobile in front of me right now hanging from the ceiling, where two pterodactyls and a counterweight fly unfettered and spin freely. No matter their momentary physical orientation, their relation to each other remains unchanged.

This equivalence may not always be the case, however, and the data in specifically directional child nodes may indeed have underlying external associations, such as in a binary search tree. In this case the common formal definition of a node as an ordered set {*left*, *value*, *right*} would be more applicable, with an explicit NULL value allowed, and even required if necessary, for either child. As the only action here is to total the paths, what-whether their meander zigging and zagging along the way, these considerations do not apply.

So we're good, if that wasn't clear.



[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/abigail/perl/ch-2.pl)

Abigail avoids the use of an external package variable to accumulate his running total, compiling subtotals returned from recursive iterations, working backwards from the tail as the instances return. It's quite clever as is often the case.

```perl
    sub sum_tree ($tree) {
        return (0, 0) unless @$tree;  # Empty tree

        #
        # Recurse
        #
        my ($s_l, $p_l) = sum_tree ($$tree [$LEFT]);
        my ($s_r, $p_r) = sum_tree ($$tree [$RIGHT]);

        #
        # The number of paths is the sum of the number of paths of each
        # child, or 1 if both childs are empty.
        # The sum is the sum of the tree sums of both children, plus the
        # value of the node itself, times the number of paths.
        #
        my $paths = ($p_l + $p_r) || 1;
        my $sum   =  $s_l + $s_r + $paths * $$tree [$NODE];

        ($sum, $paths);
    }
```

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/adam-russell/perl/ch-2.pl)


Adam uses [`Graph`](https://metacpan.org/pod/distribution/Graph/lib/Graph.pod) to construct his trees, a more general-purpose tool that knows how to connect different pieces of data together. As the module documentation puts it:

>this module is for creating abstract data structures called graphs, and for doing various operations on those

Ok, then. Seems a good fit for an interconnected structure of nodes. His method has few unusual qualities about it, most notable that is is not overtly recursive, with the traversal wrapped up in and taken care of by the Graph object itself.

```perl
sub travserse_sum{
    my($tree) = @_;
    my @paths = build_paths($tree);
    my $path_sum = 0;
    for my $path (@paths){
        $path_sum +=  unpack("%32C*", pack("C*", @{$path}));
    }
    return $path_sum;
}

sub build_paths {
   my ($graph) = @_;
   my @paths;
   local *_helper = sub{
      my $v = $_[-1];
      my @successors = $graph->successors($v);
      if(@successors){
         _helper(@_, $_) for @successors;
      }
      else{
         push @paths, [@_];
      }
   };
   _helper($_) for $graph->source_vertices();
   return @paths;
}

MAIN:{
    my $Tree;
    $Tree = new Graph();
    $Tree->add_vertices(1, 2, 3, 4);
    $Tree->add_edge(1, 2);
    $Tree->add_edge(2, 3);
    $Tree->add_edge(2, 4);
    print travserse_sum($Tree) . "\n";
}
```



[**Alexander Karelas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/alexander-karelas/perl/ch-2.pl)

After hard-coding his tree as a hash of hashes, Karelas descends using a recursive routine that carries a running total for the path taken with it. On reaching the base case the sum is returned, and ultimately these totals are collected in an array which is then summed itself.

```perl
    sub find_path_sums {
        my ($tree, $node_key, $path_sum) = @_;

        $path_sum += $node_key;
        my $node = $tree->{$node_key};
        my @path_sums;
        if (!defined $node->{left} and !defined $node->{right}) {
            @path_sums = ($path_sum);
            return \@path_sums;
        }
        push @path_sums, find_path_sums($tree, $node->{left}, $path_sum)->@* if $node->{left};
        push @path_sums, find_path_sums($tree, $node->{right}, $path_sum)->@* if $node->{right};

        return \@path_sums;
    }
```


[**Ben Bullock**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/bkb/perl/ch-2.pl)

Ben expects his tree to come encoded in a file as a JSON object. Ok.

```perl
    sub add
    {
        my ($tree, $depth) = @_;
        my $total;
        my $n = $tree->{n};
        for (qw!l r!) {
        my $v = $tree->{$_};
        if (! defined $tree->{$_}) {
            die "No $_ in tree at depth $depth";
        }
        if (ref $v) {
            $total += add ($v, $depth + 1);
        }
        else {
            $total += $v;
        }
        $total += $n;
        if ($debug) {
            print "\t" x $depth;
            print "$_: $total\n";
        }
        }
        return $total;
    }
```

I'm just going to assume it works, and suggest reading from `<DATA>` and putting the serialized object there. (Whatever it looks like.)

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/cheok-yin-fung/perl/ch-2.pl)

Encoding her tree as a structured Perl array, CY is able to reduce the list using a breadth-first search. Example 2 in this format would look like
```
    (1, 2, 3, 4, undef, 5, 6)
```
representing the binary tree

```
         1
        / \
       2   3
      /   / \
     4   5   6
```

Because of the underlying structure, individual nodes can be directly addressed by index:

```perl
    for (my $p = 1; $p <= $treelast; $p++) {
        if (defined($tree[$p])) {
            $path_val[$p] = $path_val[$p] + $path_val[int ($p-1)/2];
            if (!defined($tree[jumptoRc $p])
              &&
              !defined($tree[jumptoLc $p])) {
                $final+=$path_val[$p];
            }
        }
    }
```


[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/colin-crain/perl/ch-2.pl)

For my own solution I opted, like CY, to use a structured array for input. I then traverse this recursively, gathering paths and augmenting a package variable when the children are exhausted.

```perl
    sub descend {
        my ($idx, $partial_path) = @_;
        my @path = @$partial_path;
        push @path, $tree[$idx];

        ## base case
        unless ( defined $tree[2*$idx+1] or defined $tree[2*$idx+2]) {
            $sum += $_ for @path;
            push @paths, \@path;
            return;
        }

        for ( 1, 2 ) {
            descend( 2*$idx+$_, \@path ) if defined $tree[2*$idx+$_];
        }
    }
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/dave-jacoby/perl/ch-2.pl)

Dave defines his own Node object to build his trees, with a suite of related methods to navigate between nodes up and down.

A recursive routine systematically walks all possible paths and computes a running sum.

```perl
    sub sum_paths ( $node ) {

        # initial setup
        my $left  = $node->left;
        my $right = $node->right;

        # is leaf
        if ( !defined $left && !defined $right ) {

            # we sum back to the root by copying the
            # node (so we don't get lost), adding the
            # value to the sum, and going a level to
            # the root
            my $n   = $node;
            my $sum = $n->value;
            while ( !$n->is_root ) {
                $n = $n->parent;
                $sum += $n->value;
            }
            say join "\t", '', $node->value, $sum, $node->is_leaf;
            return $sum;
        }

        # then we go left, go right and return the sum we have
        my $sum = 0;
        $sum += sum_paths($left)  if defined $left;
        $sum += sum_paths($right) if defined $right;
        say join "\t", '', $node->value, $sum, $node->is_leaf;
        return $sum;
    }
```


[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/duncan-c-white/perl/ch-2.pl)

Duncan uses his own `BinTree` package to define a binary tree object, with a `parse()` method to input serialized data as a string depicting a nested list:

    '(1,(2,l4,n),(3,l5,l6))'

Note he is using "n" as a null value. His `parse` method uses an internal method `parse_rec` to recursively extract the nodes. This recursion is found again to descend the constructed tree, as `find_all_rec()`. Note Duncan prefers the `Function::Parameters` module to provide his subroutine signatures, which it calls functions, or `fun`.

I'm still waiting for a `time_was_has_by_all()` routine.

```perl
    fun find_all_rec( $bintree, $callback, @listsofar )
    {
        my( $kind, @pieces ) = $bintree->breakapart();
        if( $kind eq "node" )
        {
            my( $n, $l, $r ) = @pieces;
            push @listsofar, $n;
            find_all_rec( $l, $callback, @listsofar );
            find_all_rec( $r, $callback, @listsofar );

        } elsif( $kind eq "leaf" )
        {
            my( $n ) = @pieces;
            push @listsofar, $n;
            say "found path ", join(',',@listsofar) if $debug;
            $callback->( @listsofar );
        } elsif( $kind eq "nil" )
        {
        } else
        {
            die "bintree->find_all_rec: given bintree has impossible kind $kind: ", Dumper($bintree);
        }
    }
```


[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/e-choroba/perl/ch-2.pl)

Choroba encodes his trees as arrays of arrays, already delivered, and so recursing through them is a straightforward process:

```perl
    sub sum_path {
        my ($tree, $sum) = @_;
        $sum += $tree->[0];
        return $sum if @$tree == 1;

        my @sums = map sum_path($_, $sum), @$tree[1 .. $#$tree];
        return $sums[0] + ($sums[1] // 0)
    }
```


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/polettix/perl/ch-2.pl)

Flavio curiously inputs his trees from a literal ascii drawing:

```perl
    $tree = <<'END';
         1
        / \
       2   3
      /   / \
     4   5   6
    END
```

I'm unsure about the practicality of this approach but the ease of visualization and verification is undeniable. It also leads to questions about how to draw a larger tree. So many questions... Once input the string is scanned to see how many lines it contains, which will determine how many levels the tree depicted descends.

The walking of the paths is in a familiar recursive manner, passing along the tree, indicators on current node placement within the tree, and accumulators to keep track of the total and subtotals.

```perl
    sub _sum_path_r($rows, $rid, $cid, $parent) {
       my $so_far = $parent + $rows->[$rid][$cid];
       my $sub_sum = 0;
       if ($rid < $#$rows) { # there can be something more
          $rid++;
          $sub_sum += _sum_path_r($rows, $rid + 1, $cid - 2, $so_far)
             if $cid > 0 && $rows->[$rid][$cid - 1] ne ' ';
          $sub_sum += _sum_path_r($rows, $rid + 1, $cid + 2, $so_far)
             if $cid < $#{$rows->[$rid]} && $rows->[$rid][$cid + 1] ne ' ';
       }
       return $sub_sum || $so_far;
    }
```



[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/james-smith/perl/ch-2.pl)

James gives us a tree encoded as an array of arrays, in a depth-first manner:

```perl
    [1,[2,[4]],[3,[5],[6]]]
```

Once he has the data, the recursive summation is quite compact:

```perl
    sub tree_sum {
      my ( $node,$sum ) = @_;
      $sum||=0;
      return $node->[0] + $sum if @{$node} < 2; ## We have a leaf so return the sum...
      ## We have a branch - so return the sum foreach branch. for reach branch we need to add
      ## the current value to the sum from ancestors...
      return tree_sum( $node->[1], $node->[0] + $sum ) +
             ( @{$node} == 3 ? tree_sum( $node->[2], $node->[0] + $sum ) : 0 );
    }
```



[**Joel Crosswhite**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/jcrosswh/perl/ch-2.pl)

Joel chooses `Tree:Binary` to define a tree object, leading to an assignment like:

```perl
    my ($btree) = Tree::Binary -> new('1')
                    -> setLeft
                            (
                                    Tree::Binary -> new('0')
                                            -> setLeft(Tree::Binary->new('2') )
                            )
                    -> setRight
                            (
                                    Tree::Binary->new('9')
                                            -> setLeft(Tree::Binary->new('4') )
                                            -> setRight(Tree::Binary->new('5') )
                            );
```

From there he proceeds with a recursive path walking routine:

```perl
    sub add_paths {
        my ($stack, $node) = @_;

        my $total = 0;
        if ($node->isLeaf()) {
            my $total = $node->getNodeValue();
            map { $total += $_; } @{$stack};
            return $total;
        } else {
            push(@{$stack}, $node->getNodeValue());
            $total += add_paths($stack, $node->getLeft()) if $node->hasLeft();
            $total += add_paths($stack, $node->getRight()) if $node->hasRight();
            pop(@{$stack});
        }
        return $total;
    }
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/jo-37/perl/ch-2.pl)

Jorg defines this nodes as 3-element arrays, as (*left*, *right*, *value*). From there he gives us a recursive routine to descend the tree.

```perl
    sub sum_path ($total, $path, $tree) {

        # Augment path sum by current node value.
        $path += $tree->[2];

        # Descent into existing sub trees, counting these.
        my $subtrees;
        $subtrees += sum_path $total, $path, $_ for grep $_, $tree->@[0, 1];

        # We are at a leaf node when there were no sub trees.
        unless ($subtrees) {
            $$total += $path;
            say "leaf: node=$tree->[2], path=$path, total=$$total" if $::verbose;
        }

        # Always return one as a sub tree indicator.
        1;
    }
```


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/laurent-rosenfeld/perl/ch-2.pl)

Laurent instantiates his trees as arrays of arrays, with a node defined as (*value*, *child-1*, *child-2*). He hones his recusive counting into a very compact structure:

```perl
    sub dfs {
        my ($node, $sum_so_far) = @_;
        my $new_sum = $sum_so_far + $node->[0];
        unless (exists $node->[1] or exists $node->[2]) {
            $total_sum += $new_sum;
            return;
        }
        dfs($node->[1], $new_sum)
            if defined $node->[1];
        dfs($node->[2], $new_sum)
            if defined $node->[2];
    }
```


[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/lubos-kolouch/perl/ch-2.pl)

Lubos uses `Moose` to first create a `Point` object,  a tree node that also contains an attribute to hold partial sums, and then a `SumPath` object, which knows how to recursively walk a tree and set the `total_value` attributes it finds in the Points along the way. The base case for recursion adds the `total_value` at the last `Point` to a `total_sum` atribute, which is ultimately the value requested. Nice.

```perl
    package SumPath;
    use Moose;

        has 'total_sum' => (is => 'rw', isa => 'Int', default => 0);

        sub sum_paths{
            my $self = shift;
            my $root = shift;

            $root->total_value($root->value + $root->total_value);

            if ($root->left) {
                $root->left->total_value($root->total_value);
                $self->sum_paths($root->left);
            }

            if ($root->right) {
                $root->right->total_value($root->total_value);
                $self->sum_paths($root->right);
            }

            if ((!defined $root->left) and (!defined $root->right)) {
                    $self->total_sum($self->total_sum + $root->total_value);
            }

            return $self->total_sum;
        }
    }
```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/perlboy1967/perl/ch-2.pl)

After hard-coding his trees as hashes of hashes, the actual process for Niels' solution is quite compact:

```perl
    sub treeTotal (\@\@\%) {
      my ($arT, $arN, $hr) = @_;
      my @n = @$arN;

      foreach my $k (keys %$hr) {
        if (scalar(keys %{$hr->{$k}})) {
          push(@n, $k);
          treeTotal(@$arT, @n, %{$hr->{$k}});
          pop(@n);
        } else {
          push(@$arT, [@n, $k]);
        }
      }
    }
```


[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/nunovieira220/perl/ch-2.pl)

Nuno uses `Tree:Binary` for his object creation, which looks something like this:

```perl
    my ($btree) = Tree::Binary
        -> new('1')
        -> setLeft (
          Tree::Binary
            -> new('2')
            -> setLeft(Tree::Binary->new('4'))
        )
        -> setRight (
          Tree::Binary
            -> new('3')
            -> setLeft(Tree::Binary->new('5'))
            -> setRight(Tree::Binary->new('6'))
    );
```

After the objects are created recursion is set up in what is by now the familiar pattern, carrying along a working sum that is returned on reaching the base case.


[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/paulo-custodio/perl/ch-2.pl)

Paulo uses `Object::Tiny:RW` to create a tree node in a few deft strokes.

```perl
    {
        package Tree;
        use Object::Tiny::RW qw( value left right );
    }
```

One cannot deny that's a tiny object.

From there he creates a set of recursive `parse_tree()` routines to input data and a similar set of `add_tree_paths()` routines to walk the tree.

```perl
    sub add_subtree_paths {
        my($tree, $psum, $partial_sum) = @_;
        $partial_sum += $tree->value;
        if ($tree->left) {
            add_subtree_paths($tree->left, $psum, $partial_sum);
        }
        if ($tree->right) {
            add_subtree_paths($tree->right, $psum, $partial_sum);
        }
        if (!$tree->left && !$tree->right) {    # at a leaf?
            $$psum += $partial_sum;
        }
    }
```


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/roger-bell-west/perl/ch-2.pl)

Roger accepts input in a linear, serialized form as a list, with each level of the tree successively enumerated, and null spacers inserted to keep the structure synchronized. Thus the root is at index 0, the first level 1 and 2, the second 3, 4, 5, and 6, et cetera. He then uses a pair of nested loops to access the serialized elements directly, keeping the incomplete paths in a working array until complete.

```perl
    sub sp {
      my @t=@_;
      my $s=0;
      my @path=([0]);
      while (my $a=shift @path) {
        my $c=($a->[-1]+1)*2-1;
        my $tn=1;
        foreach my $ac ($c,$c+1) {
          if ($ac <= $#t && defined $t[$ac]) {
            push @path,[@{$a},$ac];
            $tn=0;
          }
        }
        if ($tn) {
          $s+=sum(map {$t[$_]} @{$a});
        }
      }
      return $s;
    }
```


[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/sgreen/perl/ch-2.pl)

After figuring out that he wants a file with an ascii drawing of the tree, as pictured in the examples, as input (about that, Simon...) the act of parsing the data is combined with recursively traversing the tree levels, calling a `_next_line()` routine as required to peek forward and see what happens next. It's complicated, but an admirable effort. And as I've said elsewhere, the ability to verify the accuracy of the data is undeniable. I mean, it's right there drawn if front of you.

But what happens with a larger tree? In the absence of an explicit data definition it's hard to say.

```perl
    sub _next_line {
        my ( $lines, $x, $y, $direction ) = @_;

        # See if there is a / or \ 1 line below ...
        my $delta = $direction eq 'left' ? -1  : 1;
        my $char  = $direction eq 'left' ? '/' : '\\';
        if ( $y < $#$lines and _char_at( $lines, $x + $delta, $y + 1 ) eq $char ) {
            # ... and return the corresponding number below that
            return ( _char_at( $lines, $x + $delta * 2, $y + 2 ), $x + $delta * 2, $y + 2 );
        }
        return;
    }

    sub _walk_path {
        my ( $lines, $x, $y, $this_path, $paths ) = @_;
        my $has_child = 0;

        foreach my $direction (qw(left right)) {
            # See if there are any child elemnts of this value
            if ( my ( $char, $new_x, $new_y ) = _next_line( $lines, $x, $y, $direction ) ) {
                # Go to the child node, and this element to the $this_path array
                _walk_path( $lines, $new_x, $new_y, [ @$this_path, $char ], $paths );
                $has_child = 1;
            }
        }

        if ( !$has_child ) {
            # We've reached the end of this node. Add it to the $paths list.
            push @$paths, $this_path;
        }
    }
```


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/wlmb/perl/ch-2.pl)

Luis encodes his tree as a string for input:

      [node_n, [subtree_0, subtree_1...]]

which is a rather terse way of defining a depth-first traversal. Fortunately he does provide examples:

    "[1,[2,[4]],[3,[5],[6]]]"

Note this differs from Duncan's stringified input, being the other way to do it. Following the paths in this format is somewhat simpler as it can be read left to right to some degree.

```perl
    sub sum_path {
        my $tree=shift;
        die Dumper($tree),  " is not an array" unless ref $tree eq "ARRAY";
        my @tree=@$tree;
        my $node=shift @tree;
        die Dumper($tree), " doesn't start with a number" if ref $node;
        my $sum_of_paths=0;
        my $number_of_paths=@tree?0:1; # 1 for leaves
        foreach(@tree){
        my ($sum_of_subpaths, $number_of_subpaths)=sum_path($_);
        $sum_of_paths+=$sum_of_subpaths;
        $number_of_paths+=$number_of_subpaths;
        }
        $sum_of_paths+=$node*$number_of_paths;
        return($sum_of_paths, $number_of_paths);
    }
```




[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-093/wanderdoc/perl/ch-2.pl)

The Doc choses to use [`Struct::Dumb`](https://metacpan.org/pod/Struct::Dumb) to create a simple emulation of a C struct, a named `Node`. From there a `_collect_paths()` routine walks the valid combinations down the Nodes, gathering a list of values in an array for each path. Once gathered, a nested construct flattens and sums the gathered value lists.

```perl
    sub _collect_paths
    {
         my $node = $_[0];

         my $subpath = $_[1] ? [@{$_[1]}] : [];

         if ( $node->val )
         {
              push @$subpath, $node->val;
         }

         if ( $node->left )
         {
              _collect_paths($node->left, $subpath);
         }
         if ( $node->right )
         {
              _collect_paths($node->right, $subpath);
         }
         if ((! defined $node->left) and (! defined $node->right))
         {
              push @paths, $subpath;
         }
    }
```


---

# BLOGS {#PWC093BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, I somehow continue to maintain my bearings. Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC093BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *READ* these *BLOG* *LINKS*:

**( *don't think, trust your training, you're in the zone, just do it ...* )**


**Aaron Smith**

 * [Perl Weekly Challenge 93 - Aaron Smith](https://aaronreidsmith.github.io/blog/perl-weekly-challenge-093/) ( *Raku* )

**Adam Russell**

 * [Perl Weekly Challenge 093 — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2021/01/03) ( *Perl* )

**Arne Sommer**

 * [Pointy Path with Raku](https://raku-musings.com/pointy-path.html) ( *Raku* )

**Colin Crain**

 * [Drawing a Line from Root to Leaf to Table — Programming Excursions in Perl and Raku](https://colincrain.com/2021/01/04/drawing-a-line-from-root-to-leaf-to-table/) ( *Perl* )

**Flavio Poletti**

 * [PWC093 - Max Points - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2020/12/28/pwc093-max-points/) ( *Perl* )
 * [PWC093 - Sum Path - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2020/12/29/pwc093-sum-path/) ( *Perl* )

**James Smith**

 * [Perl weekly challenge 93 | James Curtis-Smith](http://blogs.perl.org/users/james_curtis-smith/2020/12/perl-weekly-challenge-93.html) ( *Perl* )

**Kang-min Liu**

 * [Solving Perl Weekly Challeng 093 -- Max points on the same line, and the sum of binary tree paths.](https://gugod.org/2021/01/pwc-093-en/) ( *Raku* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 93: Max Points and Sum Path | laurent_r](http://blogs.perl.org/users/laurent_r/2021/01/perl-weekly-challenge-93-max-points-and-sum-path.html) ( *Perl & Raku* )

**Mimosinnet**

 * [Perl weekly challenge 093 | Joan Mimosinnet](http://blogs.perl.org/users/joan_mimosinnet/2020/12/perl-weekly-challenge-093.html) ( *Raku* )

**Roger Bell_West**

 * [RogerBW&#39;s Blog: Perl Weekly Challenge 93: Max Path](https://blog.firedrake.org/archive/2020/12/Perl_Weekly_Challenge_93__Max_Path.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 093](https://dev.to/simongreennet/weekly-challenge-093-1dd9) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 93](https://wlmb.github.io/2020/12/28/PWC93/) ( *Perl* )
