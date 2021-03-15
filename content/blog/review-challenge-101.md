---
author:       Colin Crain
date:         2021-03-15T00:00:00
description:  "Colin Crain › Perl Weekly Review #101"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #101"
image:        images/blog/p5-review-challenge-101.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-100/).* )

Welcome to the Perl review for **Week 101** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-101/) or the summary [**recap**](/blog/recap-challenge-101/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC101TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC101TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC101BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---


# TASK 1 {#PWC101TASK1}

# Pack a Spiral

*Submitted by: Stuart Little*

You are given an array @A of items (integers say, but they can be anything).

Your task is to pack that array into an MxN matrix spirally counterclockwise, as tightly as possible.

‘Tightly’ means the absolute value |M-N| of the difference has to be as small as possible.

**Example 1:**
```
    Input: @A = (1,2,3,4)

    Output:

        4 3
        1 2
```
Since the given array is already a 1x4 matrix on its own, but that's not as tight as possible. Instead, you'd spiral it counterclockwise into

    4 3
    1 2

**Example 2:**
```
    Input: @A = (1..6)

    Output:

        6 5 4
        1 2 3

    or

        5 4
        6 3
        1 2
```
Either will do as an answer, because they're equally tight.


## about the solutions

There were 21 submissions for the first task this past week.

The problem as stated has two basic components: first, to determine the optimal matrix to fit the data, and then to fill it in the correct manner.

I have come to expect at this point that as far as the task definitions go, that should any chink in the armor exist, ever so small, someone will find a way to open that hole wide for the world to see. In this case the term 'tightly', well-defined here, dominates the description, leaving the idea of the underlying array a little hazy around the edges. Are 33 items packed into a 5×7 grid more or less tight than those same items packed into a 6×6 grid? The latter is square, but the former has less whitespace. Wait, what? Who let all this whitespace in here in the first place? Isn't a 3×11 best because it has no whitespace at all?

As the tests presented in that submission show the behavior alluded to was certainly intentional, a review and  careful reading of the description reveals that at no point is whitespace actually *excluded* from the spiral. So I'm just going to let that one go by, but I'm still surprised, and frankly a little impressed, that it even came up.

As to the second half of the puzzle, drafting out the spiral, several members noted that essentially this is a reverse of the actions taken in PWC 088 task 2, where we took a spiral matrix and unrolled it into an array. Although the act of translating between the idea of a spiralled matrix and a linear sequence exists in both tasks, and the code for one obviously will inform to the other, the implementation cannot be exactly the same.

Well, with the exception of one member's efforts, being a special case of reality wrapping around on itself in some paranormal manner. How's that for a lead in? We'll get to that.

In general the actual spiralling was almost always along the same general pattern: Draw a line in a given direction until it's time to stop, turn left, draw again. Stop when we run out of array. These actions were either factored out as into common functions, or left unrolled in a clear linear stream, depending on taste, and we'll have a look at technique done both ways.

## SELECTING the IDEAL matrix

## applying PERSUASIVE FORCE
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/cheok-yin-fung/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/dave-jacoby/perl/ch-1.pl), and
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/sgreen/perl/ch-1.pl)

Selecting the tightest — as defined — matrix to fill requires us to determine a pair of factors to the length of the input array such that the difference between the two is minimized. At one level this would easily yield to brute force — trying every number less than the length and see if it evenly divides. As premature optimization is a cardinal sin out in the real world there's no reason to discount this approach out-of-hand.

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/sgreen/perl/ch-1.pl)

Simon demonstrates. After initializing his starting pair as the whole length and 1, he then works through the values within the remaining range looking for pairs of factors, and if they are closer to greater than any yet found the running minumum is updated.

```perl
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
```

### using the SQUARE ROOT
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/abigail/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/athanasius/perl/ch-1.pl),
[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/bob-lied/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/colin-crain/perl/ch-1.pl),
[**Duane Powell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/duane-powell/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/e-choroba/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/james-smith/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/lubos-kolouch/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/perlboy1967/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/paulo-custodio/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/pete-houston/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/roger-bell-west/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/wlmb/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/wanderdoc/perl/ch-1.pl)

Moving along, it's intuitively obvious that the rectangle whose height and width will most nearly coincide is the one where they're the same value: a square. Perhaps rather than saying it's obvious we should just call it a tautology. In any case it then stands to reason that the ideal form for our 'tightly' qualifier would be that of a square. The dimension of a side of one of these ideal spirals then is naturally the square root of the length. If that value works out evenly to an integer, then ding, ding, we have a winner.

If it does not, however, we will need to find the next best fit.

For every factor that evenly divides the target value there will be a complement factor, being the number it multiplies by to obtain the desired value. For each of these pairs one value will be less than the square root, the other more. Unless they *are* the square root, of course, in which case both values are the same. As such we really only need to search one side, the smaller, iterating up to and including the square root. Any factor located past that point will just be the complement to another already found on the way up.

[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/paulo-custodio/perl/ch-1.pl)

In Paulo's solution he, as we said, iterates upward from 1 to the square root, and when a given pair evenly divides out the target length he keeps a running total that is overwritten without validating. This last point is interesting because as we get closer to the square root the difference between the two factors will always become smaller as the numbers approach the ideal. Thus the last values assigned to his `$low, $high` pair will always have the smallest difference between them.

He avoids actually calculating the square root exactly, and rather the iteration stops when the square of the iterator exceeds the target.

```perl
    sub smallest_rect {
        my($n) = @_;
        my $low = 1;
        my $high = $n;
        for (my $i = 1; $i*$i <= $n; $i++) {
            if (($n % $i) == 0) {
                $low = $i;
                $high = $n/$i;
            }
        }
        return ($low, $high);
    }
```


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/athanasius/perl/ch-1.pl)

The monk gives us a different take, reversing the iteration range so we count downward from the square root. In this form we just take the first value that evenly divides, as that will be half the closest pair. After a quick check to make sure the square root itself is not the factor, their solution continues:

```perl
    for my $div1 (reverse 2 .. $root)
    {
        my $div2 = int($N / $div1);

        if ($div1 * $div2 == $N)
        {
            ($M, $N) = ($div1, $div2);
            last;
        }
    }
```

This was by far the most common trick for calculating the required matrix edges in the easiest manner. At least I thought so; it's a good trick:

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/colin-crain/perl/ch-1.pl)

```perl
    sub find_dim ($size) {
        my $try = (int sqrt $size) + 1;
        while (--$try > 1) {
            last unless $size % $try;
        }
        return ($try, int $size/$try);
    }
```

Finally, we have a ridiculously compact method from

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/james-smith/perl/ch-1.pl)

The `grep` filters a list of all values from 1 to the square root, leaving only those that are factors of the target length. Reversing this list and assigning to an array of one element cleanly extracts the value closest to the root.

```perl
    my( $rows ) = reverse grep { ! (@_ % $_) } 1 .. sqrt @_;
```



### using a MODULE

[**Gustavo Chaves**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/gustavo-chaves/perl/ch-1.pl)

Gustavo presents us with an interesting alternative to finding the ideal dimensions that deserves a further look.

He first imports the `Math::PARI` module to give him access to the [PARI](https://en.wikipedia.org/wiki/PARI/GP) number theory library. This it turn gives him a `divisors` function, supplying the factors of the input array length. Starting with this list of factors, he then selects the value closest to the center index. As every factor in the list below the half-way point will have a corresponding complement above the half-way point, and the difference between the two values will diverge as we get further from the middle, those closest to the center will be be the closest pair.

```perl
    use Math::Pari qw(:number);
    use integer;

    sub tight_matrix_dimensions {
        my ($elements) = @_;
        my $divisors = divisors($elements);
        my $m = $divisors->[@$divisors/2];
        my $n = $elements / $m;
        return (Math::Pari::pari2iv($m), Math::Pari::pari2iv($n));
    }
```


## WRAPPING THE SPIRAL
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/abigail/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/athanasius/perl/ch-1.pl),
[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/bob-lied/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/colin-crain/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/dave-jacoby/perl/ch-1.pl),
[**Duane Powell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/duane-powell/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/e-choroba/perl/ch-1.pl), and
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/paulo-custodio/perl/ch-1.pl)

To actually fill the spiral matrix, overwhelmingly the method of choice was to work through the input array values, placing them one-by-one into the next location of the sequence. Because the spiral describes a continuous path, successive coordinates will only ever differ by 1, but the actual change in row and column indices will be determined by the direction of travel at any one moment.

To properly locate the next cell to fill then requires two pieces of information: the coordinate change in the current direction, and the limit of travel before the direction changes. Because the actual changes in direction always occur in the same sequential pattern, many people chose to unwind the operation into four distinct phases as each loop of the spiral is scribed.


[**Duane Powell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/duane-powell/perl/ch-1.pl)

Duane starts by establishing a "bounding box" of limits to the spiral being drawn. As rows and columns are filled in, these values are adjusted inwards, constraining the path as it spirals smaller.

The input array is iterated over, and each item placed in the current coordinates, then a series of `if/elsif` clauses determine where to position the next location.

```perl
    # Init bounding box walls and set matrix index to origin at (a,b)
    my ($a, $b, $c, $d) = (0, 0, $n, $m);
    my ($x, $y) = ($a, $b);

    # Populate matrix by spiralling counterclockwise
    # Start by heading east along the bottom of the matrix
    my ($east, $north, $west, $south) = (1, 2, 3, 4);
    my $dir = $east;
    foreach my $e (@array) {
        $matrix->[$y][$x] = $e;

        if ($dir == $east) {
            $x++;
            if ($x == $c) {
                $dir = $north;
                $a++; # heading north raise the floor
            }
        }
        elsif ($dir == $north) {
            $y++;
            if ($y == $d) {
                $dir = $west;
                $c--; # heading west move right wall to the left
            }
        }
        elsif ($dir == $west) {
            $x--;
            if ($x < $a) {
                $dir = $south;
                $d--; # heading south, lower the ceiling
            }
        }
        elsif ($dir == $south) {
            $y--;
            if ($y == $b) {
                $dir = $east;
                $b++; # heading east move left wall to the right

                # set (x,y) to origin of contracted bounding box
                ($x, $y) = ($a, $b);
            }
        }
    }
```

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/abigail/perl/ch-1.pl)

Here's another version of the same technique from Abigail. Here the turn progression is not hard-coded in the directional clauses, but rather a flag is set and at the end of the sequence the `$direction` variable is incremented, modulo 4, to cycle through the pattern.

```perl
    my $matrix;
    my ($min_x, $max_x, $min_y, $max_y) = (0, $h - 1, 0, $w - 1);
    my $x = $max_x;
    my $y = $min_y;
    my $direction = $RIGHT;
    foreach my $element (@elements) {
        $$matrix [$x] [$y] = $element;
        my $turn = 0;
        if ($direction == $RIGHT) {
            if   ($y >= $max_y) {$turn = 1; $x --; $max_x --}
            else {$y ++}
        }
        if ($direction == $UP) {
            if   ($x <= $min_x) {$turn = 1; $y --; $max_y --}
            else {$x --}
        }
        if ($direction == $LEFT) {
            if   ($y <= $min_y) {$turn = 1; $x ++; $min_x ++}
            else {$y --}
        }
        if ($direction == $DOWN) {
            if   ($x >= $max_x) {$turn = 1; $y ++; $min_y ++}
            else {$x ++}
        }
        if ($turn) {
            $direction ++;
            $direction %= 4;
        }
    }
```

[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/paulo-custodio/perl/ch-1.pl)

Returning to Paulo, he gives us a nicely laid out example of one technique. In it he loops through the four directions, continuing in each until he arrives at either an outside edge boundary or an already assigned, and hence not undefined, cell. At that point the direction is changed and the plotting continues. At the end of the four inner loops the cycle is restarted, progressing until the input runs out of data. Because the matrix has already been carefully sized, there is no need to validate that there is enough room; we will always be assured there will be space.

```perl
    while (@list) {
        # go East
        while (@list && $c <= $n && !defined($rect[$r][$c])) {
            $rect[$r][$c] = sprintf("%*s", $width, shift @list);
            $c++;
        }
        $c--; $r--;
        # go North
        while (@list && $r >= 1 && !defined($rect[$r][$c])) {
            $rect[$r][$c] = sprintf("%*s", $width, shift @list);
            $r--;
        }
        $r++; $c--;
        # go West
        while (@list && $c >= 1 && !defined($rect[$r][$c])) {
            $rect[$r][$c] = sprintf("%*s", $width, shift @list);
            $c--;
        }
        $c++; $r++;
        # go South
        while (@list && $r <= $m && !defined($rect[$r][$c])) {
            $rect[$r][$c] = sprintf("%*s", $width, shift @list);
            $r++;
        }
        $r--; $c++;
    }
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/dave-jacoby/perl/ch-1.pl)

The process we're described is to take a step, "Are we done?" Check what to do next, take a step... which sounds, to Dave, like a job for recursion.

So, Dave introduces recursion to the picture.

It's a good fit, and I'm a little surprised more didn't make the selection. Eventually with really long arrays things could get problematically deep, but, well, you know. Then we do have Stuart Little's solution, but that's a whole 'nother level of arcane weirdness.


Abstaining from a mutable set of bounding parameters, Dave only uses the pair of earlier calculated ideal spiral parameters and a check for definition to look ahead to the limits of his directional runs. Once he's found which way to go, he descends and repeats the process with a new set of coordinates, for as long as there's more elements to allocate.

```perl
    #   0 = right
    #   1 = up
    #   2 = left
    #   3 = down
    sub make_spiral ( $base, $array, $dir, $m, $n, $x, $y, $i ) {
        my $s = scalar $array->@*;
        $base->[$x][$y] = $array->[$i];

        # handles cases when we need to change $dir
        if (0) { '' }
        elsif ( $dir == 0 && ( $y + 1 >= $n || defined $base->[$x][ $y + 1 ] ) ) {
            $dir = 1;
        }
        elsif ( $dir == 1 && ( $x - 1 < 0 || defined $base->[ $x - 1 ][$y] ) ) {
            $dir = 2;
        }
        elsif ( $dir == 2 && ( $y - 1 < 0 || defined $base->[$x][ $y - 1 ] ) ) {
            $dir = 3;
        }
        elsif ( $dir == 3 && ( $x + 1 < 0 || defined $base->[ $x + 1 ][$y] ) ) {
            $dir = 0;
        }

        # goes to the next spot in the matrix
        # if there's any places in the matrix open still
        if ( scalar grep { !defined } flatten($base) ) {
            if (0) { }
            elsif ( $dir == 0 ) {
                make_spiral( $base, $array, $dir, $m, $n, $x, $y + 1, $i + 1 );
            }
            elsif ( $dir == 1 ) {
                make_spiral( $base, $array, $dir, $m, $n, $x - 1, $y, $i + 1 );
            }
            elsif ( $dir == 2 ) {
                make_spiral( $base, $array, $dir, $m, $n, $x, $y - 1, $i + 1 );
            }
            elsif ( $dir == 3 ) {
                make_spiral( $base, $array, $dir, $m, $n, $x + 1, $y, $i + 1 );
            }
        }

    }
```

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/duncan-c-white/perl/ch-1.pl)

Duncan takes the unusual twist of sectioning out the four parts driving his directional fills into separate subroutines, each calling the next at the final line if any input values remain to be placed. When the array runs out, the entire structure collapses and the spiral remains complete.

Here is an example of his `east` function (think subroutine with a signature):

```perl
    # east( $currm, $currn, $m, $n );
    #    Move EAST $n times using values from global @vals, adding
    #    them to global $the_mat[$currm][$currn..], then carry the spiral
    #    on to an M-1 x N matrix, NORTH, then WEST..
    #
    fun east( $currm, $currn, $m, $n )
    {
        my $mstr = "E($currm,$currn,$m,$n):\n".mat2str(@the_mat);
        say $mstr if $debug;
        foreach my $i (1..$n)
        {
            return unless @vals;
            die "run out of values in $mstr\n" unless @vals;
            my $val = shift @vals;
            $currn++;
            $the_mat[$currm][$currn] = $val;
        }

        # have now dealt with current row, (m-1) x n matrix to fill, north
        north( $currm, $currn, $m-1, $n ) if @vals;
    }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/e-choroba/perl/ch-1.pl)

Choroba refactors the four directional cases from the unrolled version, creating a single  parameterized structure to place the next element into whatever continuing line is being built at that moment.

The innermost `if` block is executed when the next element to be filled falls outside the boundaries,  registering a change in direction. And the clever part: when this happens `redo` is called, restarting the loop cycle without grabbing the next element. Thus the element is placed again at the same coordinates, but this time as start of of a new directional path. Because the `redo` prevents the next value from being taken in the `for` loop this sequence will never terminate when we get to boxed in at the end of the spiral; consequently a `last` statement is buried deep within the structure, which will only execute when two turns are taken sequentially without moving. Nice.

```perl
    for my $element (@arr) {
        $spiral[$y][$x] = $element;

        my $new_x = $x + $DIRECTIONS[$direction][0];
        my $new_y = $y + $DIRECTIONS[$direction][1];
        if ($new_x < $borders[3] || $new_x > $borders[1]
            || $new_y < $borders[2] || $new_y > $borders[0]
        ) {
            last if $turned;

            $borders[$direction] += (-1, -1, 1, 1)[$direction];
            $direction = ($direction + 1) % 4;
            $turned = 1;
            redo
        }
        undef $turned;
        ($x, $y) = ($new_x, $new_y);
```


[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/perlboy1967/perl/ch-1.pl)

Niels encodes a set of directional delta pairs for each direction travelled; accessing these values in a `@d` array by an index modulo 4 and detecting his interior boundaries as already-filled cells allows him to keep the core logic quite compact, albeit at a certain expense of clarity.

It does have a directness to though, which I like.

```perl
  my @d = ([0,1],[1,0],[0,-1],[-1,0]);
  my $d = 0;

  foreach my $v (@$arA) {
    $g->[$r][$c] = $v;
    if ($r + $d[$d][0] == $w or
        $c + $d[$d][1] == $h or
        $r + $d[$d][0] < 0 or
        $c + $d[$d][1] < 0 or
        defined $g->[$r + $d[$d][0]][$c + $d[$d][1]]) {
      $d = (++$d % 4);
    }
    ($r, $c) = ($r + $d[$d][0], $c + $d[$d][1]);
  }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/james-smith/perl/ch-1.pl)

James' assignment to the spiral matrix is similarly as compact as his dimensional solution. By inserting his adjustment of the individual routines directly into the assignment, the loops controlling the directional placements become a single line each:

```perl
    while( @_ ) {                                        # do until empty
        $out[ $r ][ ++$c ] = shift foreach 1 .. $cols--; # >>
        $out[ --$r ][ $c ] = shift foreach 1 .. --$rows; # ^^
        last                       unless  @_;           # exit if empty
        $out[ $r ][ --$c ] = shift foreach 1 .. $cols--; # <<
        $out[ ++$r ][ $c ] = shift foreach 1 .. --$rows; # vv
    }
```


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/wlmb/perl/ch-1.pl)

Perhaps taking the refactoring further than anyone else, Luis abstracts out the idea of  forward movement itself into not a specific routine, but rather a `build_moves()` function generator, which when properly configured produces four coderefs, one for each of the directions around the spiral. One curious aspect of this is that the anonymous routines themselves contain a reference to the *next* routine, called when the need arises to change direction. This in turn produces a seeming reference paradox, as we need to initialize the routines with references to other routines, producing a chicken-and-egg problem. He gets around this by using double-indirection on initialization, calling the generator with a reference to a reference.

```perl
    my $right;
    my $down= build_moves(0,-1,  0, \$right);
    my $left= build_moves(1,-1, -1, \$down);
    my $up=   build_moves(0, 1, $N, \$left);
    $right=   build_moves(1, 1, $M, \$up);
    my $next_move=$right; # First move to try

    sub build_moves {
        my $index=shift; # which coordinate to affect
        my $delta=shift; # increment
        my $border=shift; # current position of border
        my $next=shift;  # next direction to try.
        sub {
        if($current_coords[$index]+$delta==$border){
            $next_move=$$next;
            $border= $border-$delta;
            $next_move->();
        } else {
            $current_coords[$index]+=$delta;
        }
        }
    }
```



## TEMPORAL ANOMALIES and RADICAL DATA ENGINEERING
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/cheok-yin-fung/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/jo-37/perl/ch-1.pl), and
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/stuart-little/perl/ch-1.pl)

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/cheok-yin-fung/perl/ch-1.pl)

Many members were able to revisit concepts they first gleaned in [PWC 088](https://perlweeklychallenge.org/blog/perl-weekly-challenge-088/) to guide their methods, but CY, exercising her unparalleled powers of prognostication, was able to solve this challenge *in its entirety* a [full 14 weeks before it was even issued](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-088/cheok-yin-fung/perl/ch-2.pl). I would like to know more about these techniques of time travel she she wields so adroitly.

As its very existence seemingly defies the laws of physics, here it is in its entirety, lest it disappear at any moment into the paradox from which it came.

```perl
    sub matrixize_anticlockwise {
        my @list = @{$_[0]};
        my $M = $_[1];
        my $N = $_[2];
        my @mat;
        my @helper_mat;

    #BEGIN: special case handling: the numbers of entries is prime
        if ($M == 1) {return \@list;}
    #END: special case handling

        my @row_dir = (  0, -1,  0, +1 );
        my @col_dir = ( +1,  0, -1,  0 );

        my ($r, $c) = ( $M-1 , 0);
        ${$mat[$r]}[$c] = $list[0];
        ${$helper_mat[$r]}[$c] = 1;

        my @numbering = (
            [1..$N-1],
            [$N..$N+$M-2],
            [$N+$M-1..$N+$M+$N-3],
            [$N+$M+$N-2..($M-1)*2+($N-1)*2-1]
        );

        say "@$_" for @numbering;

        my $count = 1;
        for my $q (0..3) {
            for (@{$numbering[$q]}) {
                $r += $row_dir[$q];
                $c += $col_dir[$q];

                ${$mat[$r]}[$c] = $list[$count];
                ${$helper_mat[$r]}[$c] = 1;

                $count++;
            }
        }

        my $time_now = 3;
        my $success_click = undef;
        while ($count < $M*$N) {
            if ($success_click) {
                $r += $row_dir[$time_now];
                $c += $col_dir[$time_now];
                if (!defined ${$helper_mat[$r]}[$c]  )
                {
                    ${$mat[$r]}[$c] = $list[$count];
                    ${$helper_mat[$r]}[$c] = 1;
                    $success_click = 1;
                    $count++;
                } else
                {
                    $success_click = undef;
                    $r -= $row_dir[$time_now];
                    $c -= $col_dir[$time_now];
                }
            } else
            {
                $time_now = ($time_now+1) % 4;
                $success_click = 1;
            }
        }
        return @mat;
    }
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/jo-37/perl/ch-1.pl)

After determining the ideal form factor for the spiral by finding the middle of a list of divisors, Jorg whips out the Perl Data Language to manipulate his spiral matrix.  He builds his matrix from the back forward, literally rolling it up like rug: adding a slice of the array, then flopping it over, adding on the next row of values, and rolling again. I found his technique somewhat hilarious in its ridiculous practicality. I must need more sleep.

```perl
    sub form :prototype($) ($n) {
        my @d = divisors $n;

        # Difference of the "middle" divisors.
        $d[@d / 2] - $d[-(@d / 2 + 1)];
    }

    # Roll a matrix from an array of numeric values.
    sub roll ($arr, $alt=0) {

        # Create the starting matrix as a single row or column from a piece
        # off the list tail, sized according to the matrix' form.  The
        # solution's orientation is predefined by the starting matrix.
        # Providing either variants.
        my $roll = pdl(splice @$arr, -(form(@$arr) + 1))
            ->slice($alt ? '*,-1:0' : 'X,*')->sever;
        say $roll if $verbose;

        while (@$arr) {
            # Left-rotate the current matrix and add an apt piece off the
            # list tail.
            $roll = $roll
                ->slice('-1:0')->xchg(0,1)
                ->glue(1, pdl splice @$arr, -$roll->dim(1))
                ->sever;
            say $roll if $verbose;
        }

        # Return the solution as an AoA or as the piddle itself depending on
        # the context.
        wantarray ? $roll->unpdl->@* : $roll;
    }
```

[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-101/stuart-little/perl/ch-1.pl)

Stuart's amazing submission shares quite a lot of process with Jorg's, albeit using entirely different methods.

First, he dispatches his quest of the ideal spiral dimensions by creating a list of all factors to the target length and selecting the middle elements. So far so good.

Then remarkably, Stuart has managed to accomplish the same rolling motion described above through recursion. The path is tortuous, but first the recursion, in `pck()`, descends to the bottom, slicing shorter and shorter segments off the input array. Then once hitting bottom, on each return another routine, `rtcc()` rotates the progressively reassembled matrix as the original segments are rejoined. It's a work of art, I say.

Note the way the two first elements are reversed on every call, so that first one row is removed, then one column, then one row. Impressed doesn't cover it.

```perl
    use List::AllUtils qw(min_by);

    sub rtcc($m) {
        my @res;
        for my $ix (0..scalar @{$m->[0]}-1) {
        my @col = map {$_->[$ix]} @{$m};
        push @res, (\@col,);
        }
        return [reverse @res];
    }

    sub pck($rows,$cols,$a) {
        $rows == 1 && return [$a,];
        $cols == 1 && return [map {[$_,]} reverse @{$a}];
        my $rot = rtcc(pck($cols,$rows-1,[$a->@[$cols..scalar @{$a}-1]]));
        return [@$rot,[$a->@[0..$cols-1]]];
    }

    my $els = scalar @ARGV;
    my $rows = min_by { abs($_ - $els/$_) } grep {$els % $_ == 0} (1..int($els/2));
    my $cols = int($els/$rows);

    for (@{pck($rows,$cols,[map {sprintf("%5s", $_)} @ARGV])}) {
        say "@$_";
    }
```

---

# TASK 2 {#PWC101TASK2}

# Origin-containing Triangle

*Submitted by: Stuart Little*

You are given three points in the plane, as a list of six co-ordinates: A=(x1,y1), B=(x2,y2) and C=(x3,y3).

Write a script to find out if the triangle formed by the given three co-ordinates contain origin (0,0).

Print 1 if found otherwise 0.

Example 1:

    Input : A=(0,1), B=(1,0) and C=(2,2)
    Output: 0 because that triangle does not contain (0,0).

Example 2:

    Input : A=(1,1), B=(-1,1) and C=(0,-3)
    Output: 1 because that triangle contains (0,0) in its interior.

Example 3:

    Input : A=(0,1), B=(2,0) and C=(-6,0)
    Output: 1 because (0,0) is on the edge connecting B and C.


## about the solutions

There were 20 submissions for the second task this past week.

This particular task, whether a given point lies within a bounded area, be it a triangle or a generalized polygon, comes into play in real, practical applications, specifically modeling the real world in virtual simulation: "Is this thing touching that?"

Because video games require quite a lot of this sort of thing, mountains of work has been done and a great many schemes have evolved to determine this state quickly and efficiently. To list a few of the most common methods:
1. using barycentric coodinates
2. using parametric equations
3. using the vector product
4. checking an equal sum of triangle areas
5. checking a 360° sum of angles
6. counting single edge intersection with a ray-cast line
7. non-zero winding numbers counting axis crossings

Most of these techniques were represented today. We'll have a brief look at those that were.

## the VECTOR PRODUCT
**Abigail**,
**Colin Crain**,
**Lubos Kolouch**,
**Paulo Custodio**,
**Pete Houston**,
**Roger Bell_West**, and
**W. Luis Mochan**

The most common method chosen involves some advanced mathematics, but in another sense is fairly easy to understand. What we do here is, for each point, to take what is known as the [vector product](https://en.wikipedia.org/wiki/Cross_product) between the two vectors going from the origin to the point, and from the point to the next point. Consider a vector to be a line with a direction attached, a point to go *from* and a point to go *to*. Without delving too far into the mathematics, due to a property known as the [right hand rule](https://en.wikipedia.org/wiki/Right-hand_rule), it's easy to visualize that the *z*-component of this calculation will, if the direction of the turning described by the vectors is counterclockwise, be upward, or positive. Conversely if the turning is clockwise, this value will be negative.

This gives us a quick and easy insight as to whether the origin lies to the left or the right of each edge of the triangle. Now some more visualization tells us that if the origin lies consistently to the left of each edge, the edges must by necessity wrap around the origin. The same logic applies for the right side as well of course, and to complete the picture if the origin lies on one of the edges this value will be 0.

Thus if all values for this calculation are either positive or negative, or any value is 0, the triangle encloses the origin.

**Abigail**

Abigail walks us through the process:

```perl
    # This determines on which side of the line through ($x1, $y1) and
    # ($x2, $y2) the origin lies. If > 0, then the origin lies to the left
    # of the line, if < 0, the origin lies to the right of the line, if
    # = 0, the origin lies on the line.
    #
    sub side ($x1, $y1, $x2, $y2) {
        ($y2 - $y1) * $x2 - ($x2 - $x1) * $y2;
    }

    while (<>) {
        my ($x1, $y1, $x2, $y2, $x3, $y3) = split;

        #
        # Determine where the origin is relative to the three lines
        # through the vertices of the triangle. Note we have to go
        # in a specific order through the points. (Either clock wise,
        # or counter clockwise, as long as we're consistent).
        #
        my $s1 = side ($x2, $y2, $x3, $y3);
        my $s2 = side ($x3, $y3, $x1, $y1);
        my $s3 = side ($x1, $y1, $x2, $y2);

        #
        # If the origin either lies to the left (or on) each of the
        # lines, or to the right (or on) each of the lines, the origin
        # lies inside the triangle. If not, it does not.
        #
        say $s1 <= 0 && $s2 <= 0 && $s3 <= 0 ||
            $s1 >= 0 && $s2 >= 0 && $s3 >= 0 ? 1 : 0
    }
```

**Pete Houston**

With Pete it's more clear that what we're looking at is the delta, that is the change, in the x and y coordinates between the points.

```perl
    sub inside_paths {
        # Determine if the origin is on the same side of each line segment
        # as the 3rd point. If so, it is inside. If it is on any of the line
        # segments that's a positive result right away.
        # Return 1 for inside or on the line, 0 otherwise

        my @p = pairs @_;
        my $sameside = 0;

        for my $i (0 .. 2) {
            my @q = map { $p[$_] } grep { $_ != $i } (0 .. 2);
            my $dx = $q[1]->[0] - $q[0]->[0];
            my $dy = $q[1]->[1] - $q[0]->[1];
            my $originside = (0 - $q[0]->[1]) * $dx -
                (0 - $q[0]->[0]) * $dy;
            return 1 if $originside == 0; # On the line
            my $cornerside = ($p[$i]->[1] - $q[0]->[1]) * $dx -
                ($p[$i]->[0] - $q[0]->[0]) * $dy;
            $sameside++ unless ($originside > 0 xor $cornerside > 0);
        }
        return $sameside == 3 ? 1 : 0;
    }
```

**W. Luis Mochan**

Another version by Luis, with added commentary in the output as to how the conclusion was made.

```perl
    sub cross {
        my ($A, $B)=@_;
        return $A->[0]*$B->[1]-$A->[1]*$B->[0];
    }

    my ( $A, $B, $C ) = pairs @ARGV;
    my ( $AB, $BC, $CA ) = ( cross( $A, $B ), cross( $B, $C ), cross( $C, $A ) );
    my $clockwise = all { $_ >= 0 } ( $AB, $BC, $CA );
    my $counterclockwise = all { $_ <= 0 } ( $AB, $BC, $CA );
    my $result = ( $clockwise||$counterclockwise )?1:0;
    my $edge = any { $_ == 0 } ( $AB, $BC, $CA );

    say "Input: ", join " ", map {"($_->[0],$_->[1])"} ($A, $B, $C);
    say "Output: $result";
    say "Since (0,0) is within the triangle"     if $result and !$edge;
    say "Since (0,0) is within an edge"          if $result and $edge;
    say "Since (0,0) is not within the triangle" unless $result;
```


**Roger Bell_West**

After first copying the first point onto the end of his point array, Roger factors out the product equation and places it into a parameterized loop. He then no longer need worry about jumping from the third point to the first again, as the equation is solved for a virtual, ghost "fourth" point, the same as the first. This is a really nice touch.

For example, the first iteration of the loop ends up looking like:

```
    x1 * (y2 - y1) - y1 * (x2 - x1)

```

which should by now look familiar.

```perl
    sub ot {
      my @points=@_;
      $points[3]=$points[0];
      my @xp;
      foreach my $i (0..2) {
        push @xp,($points[$i][0] *
                    ($points[$i+1][1]-$points[$i][1]))
          -
          ($points[$i][1] *
           ($points[$i+1][0]-$points[$i][0]));
      }
      @xp=sort @xp;
      if ($xp[0]<=0 && $xp[2] <=0) {
        return 1;
      }
      if ($xp[0]>=0 && $xp[2] >=0) {
        return 1;
      }
      return 0;
    }
```


## equal TRIANGLE AREA
**Bob Lied**,
**Dave Jacoby**,
**Duncan C. White**,
**E. Choroba**, and
**Stuart Little**

The second most popular method, and the easiest to intuit, is to make three new triangles each with two of the given points and the origin, and for each compute the area. If the areas of these three triangles, summed, equals that of the original triangle, then the origin is inside the triangle.

This can be visualized by imagining a triangle with a point contained within it, and drawing radial lines outward from that point to each of the vertices surrounding it. The  triangle will be trisected into three smaller triangles that will fill it completely.

The complementary case, when the point is outside, is a just little harder to visualize but easy to prove. If this is the case, then consider the point and the triangle in space. One edge will be closer to the point than the others. The two other edges, when we scribe our new lines, will produce two triangles with a common side. These two triangles, taken together, describe a quadrilateral that completely encloses the original triangle. There will always be some area outside the original triangle but within this new quadrilateral, so the area of the quadrilateral will always be larger than the original triangle. We are already larger than the original triangle; when we add the area of the final edge to the point the area only grows further.

There were a variety of techniques offered to obtain the area of a triangle from its vertex points alone.

**Arne Sommer**

Arne presents a very nice writeup on his [blog](https://raku-musings.com/packed-origin.html) which provides some rather nice visual aides.

```perl
    my ($x1, $y1, $x2, $y2, $x3, $y3, $x, $y) = @ARGV;

    $x = 0 unless defined $x;
    $y = 0 unless defined $y;

    my $ABC = area($x1, $y1, $x2, $y2, $x3, $y3);
    my $PBC = area($x,  $y,  $x2, $y2, $x3, $y3);
    my $PAC = area($x1, $y1, $x,  $y,  $x3, $y3);
    my $PAB = area($x1, $y1, $x2, $y2, $x,  $y);

    ($ABC == $PBC + $PAC + $PAB) ? say 1 : say 0;

    sub area($x1, $y1, $x2, $y2, $x3, $y3)
    {
      return abs( ($x1 * ($y2 - $y3) + $x2 * ($y3 - $y1) + $x3 * ($y1 - $y2) ) / 2);
    }
```

**Stuart Little**

Stuart uses a slightly different area calculation...

```perl
    sub areaTr2($x1,$y1,$x2,$y2,$x3,$y3) {
        abs(($y3-$y1)*($x2-$x1) - ($y2-$y1)*($x3-$x1))
    }

    my ($x1,$y1,$x2,$y2,$x3,$y3) = @ARGV[0..5];

    say 0+(areaTr2(0,0,$x1,$y1,$x2,$y2) + areaTr2(0,0,$x2,$y2,$x3,$y3) + areaTr2(0,0,$x3,$y3,$x1,$y1) == areaTr2($x1,$y1,$x2,$y2,$x3,$y3));
```

**E. Choroba**

...which surfaces again in Choroba's example.

```perl
    sub area {
        my ($A, $B, $C) = @_;
        return abs((  $B->[0] - $A->[0]) * ($C->[1] - $A->[1])
                   - ($C->[0] - $A->[0]) * ($B->[1] - $A->[1])) / 2
    }

    my $Z = [0, 0];
    sub origin_containing_trianlge {
        my ($A, $B, $C) = @_;

        my $whole = area($A, $B, $C);
        my ($a1) = area($A, $B, $Z);
        my ($a2) = area($B, $C, $Z);
        my ($a3) = area($A, $C, $Z);
        my $sum = $a1 + $a2 + $a3;

        return abs($sum - $whole) < THRESHOLD ? 1 : 0
    }
```


**Dave Jacoby**

Dave [borrows his area coding from Flavio Poletti](https://github.polettix.it/ETOOBUSY/2020/10/01/area-of-triangle/), who isn't represented this week. So this becomes a way to acknowledge both efforts. In addition, he adds a rather bonkers routine to graph the results, which is pretty. This pleases me.

```perl
    sub find_area ( $A, $B, $C ) {
        my ( $v_x, $v_y ) = map { $B->[$_] - $A->[$_] } 0 .. 1;
        my ( $w_x, $w_y ) = map { $C->[$_] - $A->[$_] } 0 .. 1;
        my $vv = $v_x * $v_x + $v_y * $v_y;
        my $ww = $w_x * $w_x + $w_y * $w_y;
        my $vw = $v_x * $w_x + $v_y * $w_y;
        return sqrt( $vv * $ww - $vw * $vw ) / 2;
    }

    # this is thrown in as a bonus: showing the graph with the origin
    # represented as * and the points shown as +

    sub map_points( $list ) {
        my %points;
        for my $p ( $list->@* ) { $points{ $p->[0] }{ $p->[1] } = 1; }
        my @x = map { $_->[0] } $list->@*;
        my @y = map { $_->[1] } $list->@*;
        my $minx = -1 + min 0, @x;
        my $miny = -1 + min 0, @y;
        my $maxx = 1 + max 0,  @x;
        my $maxy = 1 + max 0,  @y;
        say '';

        say join ' ', '+', ( map { '-' } $minx .. $maxx ), '+';

        for my $y ( reverse $miny .. $maxy ) {
            print '| ';
            for my $x ( $minx .. $maxx ) {
                if ( defined $points{$x}{$y} ) { print '+' }
                elsif ( $x == 0 && $y == 0 ) { print '*' }
                elsif ( $x == 0 ) { print '|' }
                elsif ( $y == 0 ) { print '-' }
                else              { print ' ' }
                print ' ';
            }
            say '|';
        }
        say join ' ', '+', ( map { '-' } $minx .. $maxx ), '+';
        say '';
    }
```

```
    0,1  1,0  2,2
    0 : 0

    + - - - - - +
    |   |       |
    |   |   +   |
    |   +       |
    | - * + - - |
    |   |       |
    + - - - - - +

    1,1  -1,1  0,-3
    1 : 1

    + - - - - - +
    |     |     |
    |   + | +   |
    | - - * - - |
    |     |     |
    |     |     |
    |     +     |
    |     |     |
    + - - - - - +


    1,2  4,3  3,4
    0 : 0

    + - - - - - - - +
    |   |           |
    |   |     +     |
    |   |       +   |
    |   | +         |
    |   |           |
    | - * - - - - - |
    |   |           |
    + - - - - - - - +

```


## using BARYCENTRIC COORDINATES
**Simon Green**, and
**Wanderdoc**

The trianglar area method, described above, is the perfect lead-in introduction to what is known as [barycentric coordinates](https://en.wikipedia.org/wiki/Barycentric_coordinate_system#Barycentric_coordinates_on_triangles). In this coordinate system, a point can be described by the *ratios* of the areas of the smaller triangles created by scribing from that point to the three vertices. Kind of exactly what we just did. Considered as ratios to the whole, the three areas become unitless fractions that sum to 1.

Linear algebra can be used to convert the point, in this case the origin, to barycentric coordinates in reference to the triangle, and then, if and only if all three coordinates fall, inclusively, between 0 and 1, the point is inside the triangle.

The simple case for this, when the point lies inside, is directly analogous to the three smaller triangles described in the previous section, where the three areas sum to the larger. Each sub-triangle can be seen to have some fractional component of the area of the whole, say one half or two-fifths or such, that when summed with the others will yield 1, the whole area.

Here are three versions of the math using barycentric coordinates:

**Simon Green**

```perl
    sub main {
        my ($x1, $y1, $x2, $y2, $x3, $y3) = ( join( ' ', @_ ) =~ /(-?\d+)/g );

        my $x = my $y = 0;
        my $a = (($y2 - $y3)*($x - $x3) + ($x3 - $x2)*($y - $y3)) / (($y2 - $y3)*($x1 - $x3) + ($x3 - $x2)*($y1 - $y3));
        my $b = (($y3 - $y1)*($x - $x3) + ($x1 - $x3)*($y - $y3)) / (($y2 - $y3)*($x1 - $x3) + ($x3 - $x2)*($y1 - $y3));
        my $c = 1 - $a - $b;

        my $contained = ($a >= 0 and $a <= 1 and $b >= 0 and $b <= 1 and $c >= 0 and $c <= 1) ? 1: 0;
        say $contained;
    }
```

**Athanasius**

```perl
    sub point_in_triangle
    {
        my ($A, $B, $C) = @_;

        my  $den =  ($B->[1] - $C->[1]) * ($A->[0] - $C->[0]) +
                    ($C->[0] - $B->[0]) * ($A->[1] - $C->[1]);

        my  $x   = (($B->[1] - $C->[1]) * -$C->[0]  +
                    ($C->[0] - $B->[0]) * -$C->[1]) / $den;

        my  $y   = (($C->[1] - $A->[1]) * -$C->[0]  +
                    ($A->[0] - $C->[0]) * -$C->[1]) / $den;

        my  $z   = 1 - $x - $y;

        return 0 <= $x <= 1 &&
               0 <= $y <= 1 &&
               0 <= $z <= 1;
    }
```

**Gustavo Chaves**

```perl
    my ($x1, $y1, $x2, $y2, $x3, $y3) = @ARGV;
    #my ($x1, $y1, $x2, $y2, $x3, $y3, $x, $y) = (0, 1, 1, 0, 2, 2);
    #my ($x1, $y1, $x2, $y2, $x3, $y3, $x, $y) = (1, 1, -1, 1, 0, -3);
    #my ($x1, $y1, $x2, $y2, $x3, $y3, $x, $y) = (0, 1, 2, 0, -6, 0);

    # Shamelessly copying from http://totologic.blogspot.com/2014/01/accurate-point-in-triangle-test.html

    my $denominator = ($y2 - $y3)*($x1 - $x3) + ($x3 - $x2)*($y1 - $y3);
    my $A = (($y2 - $y3)*(0 - $x3) + ($x3 - $x2)*(0 - $y3)) / $denominator;
    my $B = (($y3 - $y1)*(0 - $x3) + ($x1 - $x3)*(0 - $y3)) / $denominator;
    my $C = 1 - $A - $B;

    say 0 <= $A && $A <= 1 && 0 <= $B && $B <= 1 && 0 <= $C && $C <= 1 ? 1 : 0;
```

## calculating the WINDING NUMBER
**James Smith**

Winding numbers are a convenient abstraction used in topology to describe a curve encircling a point. If we consider the three points of the triangle as a minimal degeneration of a curve then if the winding number is 1 or -1, a complete revolution has been made and the point lies within the triangle.

The mathematical techniques used to determine the winding number can get quite complicated, but with the point in question set to the origin, as we have done here, we can simply count crossing the horizontal axis.

Considering the edges of the triangle as connected directional vectors that describe a curve, we add 1 when we either cross the axis in an upwards direction in the positive quadrants or descend in the negative, and we subtract 1 for the opposite directions. If the resultant winding number is 0 the triangle does not enclose the origin.

**James Smith**

```perl
    sub winding_number {
      ## Winding number is a generic way of working out whether a point lies
      ## within a polygon - as this is not difficult we can implement the
      ## trick for our triangle...
      ## We have to work with edges - each edge in the code is represented
      ## by ($a,$b) -> ($x,$y)... We start from the edge which joins the
      ## "last" node to the first and then we work our way around the circle
      ## The winding number goes up or down depening on whether the edge
      ## crosses the +ve axis (adding or subtracking 1 depending on the
      ## direction) - this boils down to the algorithm below..

      my ( $a, $b, $wn ) = @_[ -2, -1 ], 0;

      while( my($x,$y) = splice @_, 0, 2 ) {
        $wn += $a<=0 ? $y>0  && $a*$y-$x*$b >  0 ?  1 : 0
                     : $y<=0 && $a*$y-$x*$b <= 0 ? -1 : 0;
        ($a,$b)=($x,$y);
      }
      return $wn%2;
    }

```


## summing the ANGLES
**Niels van Dijke**

We can always sum the angles created by scribing lines to the three vertices of the triangles. Somewhat analogous to the equal area solution, if the sum of the angles subtended by the lines is equal to 360, then the point lies within the triangle.

**Niels van Dijke**

Niels brings in a math library, `Math::Trig`, importing a few functions `rad2deg` and `acos_real` to help him with the necessary calculations.

Given the origin and two points, subtending the angles is the tricky part. He does this for each pairing of the three points in the triangle and checks the sum. Here's the function he has crafted to perform the trigonometry:

```perl
    sub calcZAngle($$$$) {
      my ($x1,$y1,$x2,$y2) = @_;

      # Cosine rule:
      #   c^2 = a^2 + b^2 - 2ab cos(gamma)
      #   gamma = acos((a^2 + b^2 - c^2) / 2ab)
      my $a = sqrt($x1**2 + $y1**2);
      my $b = sqrt($x2**2 + $y2**2);
      my $c = sqrt(($x2-$x1)**2 + ($y2-$y1)**2);

      return rad2deg acos_real(($a**2 + $b**2 - $c**2)/ (2.0 * $a * $b));
    }
```

## the power of the PDL
**Jorg Sommrey**

The Perl Data Language is very effective at munging matrices, and calculating the vector product can be effected using matrix determinants. In fact the equation used previously is that for finding that same matrix determinant.

**Jorg Sommrey**

As stated, the natural fit here is a variation on the vector product solution. Instead of plugging into an existing equation for each pair of points he can ask the PDL to do it for him with a simple function call. His submission is well annotated; it's always a joy to follow his methods.

```perl
    sub inner_origin {
        # Convert coordinate pairs to a nx2 piddle.
        my $p = pdl(@_)->xchg(0,1)->sever;
        say "coords:$p" if $verbose;

        # Create a piddle holding the indices of the first coordinate of
        # all points.
        my $indx = append sequence(indx, 1, $p->dim(0)),
            zeroes(indx, 1, $p->dim(0));

        # Get the minimum and the maximum of the matrices' determinants
        # formed by the point pairs.
        my ($min_d, $max_d) = $p->range($indx, 2, 'p')
            ->reorder(1, 2, 0)->determinant->minmax;
        say "min/max det: $min_d/$max_d" if $verbose;

        # If determinants have different signs, the origin is outside the
        # polygon.
        return 0 if $min_d < 0 && $max_d > 0;

        # If there is at least one nonzero determinant and there are no
        # differing signs, the origin is located inside the polygon (or on
        # its border).
        return 1 if $min_d >= 0 && $max_d > 0 || $min_d < 0 && $max_d <= 0;

        # At this point all determinants are zero.

        # Get the projections onto the x and y axis for collinear points
        # and check if they both contain the origin.
        my ($min_p, $max_p) = $p->minmaximum;
        say "min/max proj: $min_p/$max_p" if $verbose;

        return 1 if max($min_p) <= 0 && min($max_p) >= 0;

        # Else: origin is not within the given line segment.
        0;
    }
```




---

# BLOGS {#PWC101BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, I somehow continue to maintain my bearings. Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC093BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *READ* these *BLOG* *LINKS*:

**( *don't think, trust your training, you're in the zone, just do it ...* )**


**Aaron Smith**

 * [Perl Weekly Challenge 101 - Aaron Smith](https://aaronreidsmith.github.io/blog/perl-weekly-challenge-101/) ( *Raku* )

**Abigail**

 * [Perl Weekly Challenge 101: Pack a Spiral — Abigail's Programming Blog](https://wp.me/pcxd30-r7) ( *Perl* )
 * [Perl Weekly Challenge 101: Origin-containing Triangle — Abigail's Programming Blog](https://wp.me/pcxd30-s8) ( *Perl* )

**Arne Sommer**

 * [Packed Origin with Raku (and Perl)](https://raku-musings.com/packed-origin.html) ( *Perl & Raku* )

**Dave Jacoby**

 * [Spirals and Triangles: Perl Weekly Challenge #101 | Committed to Memory](https://jacoby.github.io/2021/02/23/spirals-and-triangles-perl-weekly-challenge-101.html) ( *Perl* )

**Roger Bell_West**

 * [RogerBW's Blog: Perl Weekly Challenge 101: Spiral Origin](https://blog.firedrake.org/archive/2021/02/Perl_Weekly_Challenge_101__Spiral_Origin.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 101](https://dev.to/simongreennet/weekly-challenge-101-jeo) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 101 – W. Luis Mochán](https://wlmb.github.io/2021/02/22/PWC101/) ( *Perl* )
