---
author:       Colin Crain
date:         2021-09-19T00:00:00
description:  "Colin Crain › Perl Weekly Review #128"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #128"
image:        images/blog/p5-review-challenge-128.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-127/).* )

Welcome to the Perl review for **Week 128** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-128/) or the summary [**recap**](/blog/recap-challenge-128/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC128TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC128TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC128BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC128TASK1}

# Maximum Sub-Matrix
*Submitted by: Mohammad S Anwar*<br>
You are given m x n binary matrix having 0 or 1.

Write a script to find out maximum sub-matrix having only 0.

**Example 1:**

```
    Input : [ 1 0 0 0 1 0 ]
            [ 1 1 0 0 0 1 ]
            [ 1 0 0 0 0 0 ]

    Output: [ 0 0 0 ]
            [ 0 0 0 ]
```

**Example 2:**
```
    Input : [ 0 0 1 1 ]
            [ 0 0 0 1 ]
            [ 0 0 1 0 ]

    Output: [ 0 0 ]
            [ 0 0 ]
            [ 0 0 ]
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/abigail/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/adam-russell/perl/ch-1.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/bruce-gray/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/colin-crain/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/polettix/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/jo-37/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/mattneleigh/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/sgreen/perl/ch-1.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/stuart-little/perl/ch-1.pl),
[**Ulrich Rieke**](), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/wlmb/perl/ch-1.pl)

Well, friends, welcome to the latest installment of the *lighting edition* of the Weekly Challenge Review Pages. In this version, due to constraints on our time, we'll pick a dozen submissions at random from the field, take them apart, and see what makes them tick. This sample should give us some insight into the common methods used to solve the challenge and perhaps some of the more adventurous as well, filling out the service into a proper meal. As the selection will truly be random, we've just have to wait and see what comes up.

In the future, time permitting (*"This can't last forever!"* I tell myself) I look forward to returning to a more comprehensive examination of all the various solution types, as there are often unique offerings that here may find themselves slipping through the cracks. To those who go the extra mile and find themselves unacknowledged in these pages, I apologize in advance.

There were only 17 submissions for the first task this past week, so it looks like we'll end up with a pretty complete overview in the end anyway. For me, researching the backgrounds on the challenges and solution algorithms is always the most enjoyable part of this job, to look at not just how to solve a problem but how to solve the problem in every way imaginable, and present the findings. That depth will presumably have to wait, but I will see what I can do.

## BOBBING for APPLES at the COUNTY FAIR — A SELECTION of TASTY TREATS
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/abigail/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/james-smith/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/wlmb/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/jo-37/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/polettix/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/adam-russell/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/colin-crain/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/e-choroba/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/duncan-c-white/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/dave-jacoby/perl/ch-1.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/stuart-little/perl/ch-1.pl), and
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/roger-bell-west/perl/ch-1.pl)



[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/abigail/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 128: Maximum Sub-Matrix](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-128-1.html)

Abigail will start us off with an observation that I'm sure many long-time members made, on the similarities between this challenge and that of [PWC 087, task 2 — "Largest Rectangle"](https://theweeklychallenge.org/blog/perl-weekly-challenge-087/#TASK2). Abigail, ever diligent in the fight against duplicated effort, has chosen not to copy and alter that piece of work but rather spend their time creating glue code to use the actual solution, tucked away in its own directory, to do the processing, with additional transformations as required to massage the data going in and coming out.

There was a time when the internet was glued together with Perl, a task which as a language it excels at; knitting together smaller processes to make a new whole. I used to call us the new quilt-makers: meticulously stitching together little squares — each pretty in its own right — but once assembled, when viewed later as an intricate field of discrete parts, a true thing of beauty.

This is an unusual way to start the overview of solutions — not actually displaying an algorithm for examination — but cuts straight to the heart of Perl and what makes it so good at what it does. So with one orthogonal step sideways we're off and running.

```perl
    use FindBin;
    use IPC::Open2;

    my $program = "$FindBin::Bin/../../../challenge-087/abigail/perl/ch-2.pl";

    my $pid = open2 (my $out, my $in, $^X, $program) // die "open failed: $!";

    print $in y/01/10/r while <>;

    close $in;

    print y/1/0/r while <$out>;

    waitpid ($pid, 0);
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/james-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #128](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-128/james-smith)

James makes the interesting choice to transform the matrix before processing, replacing the 1s and 0s in each cell with the length of the continuous sequence of 0s starting at that point. Hence 1s immediately become 0s, and for instance a subsequence of 3 0s will start with 3, followed by a 2, then 1 in the last place. This initial transformation makes all subsequent calculation considerably simpler.

This allows him to "look ahead" in the row at any point to see the width of a sub-matrix starting at that point. He can then work downward in and additional loop through the following lines, computing sub-matrix areas for each next row with the height and the minimum valid width of 0s found.

```perl
    sub find_empty {
      my @runs = map { [1 - $_->[-1]] } my @rows = @{$_[0]};
      my ($h,$w) = ( @rows-1, @{$rows[0]}-1 );

      ## First pass through the array - we calculate how many
      ## 0s are in the cell and to the right... So for example 1 we get
      ##   0 3 2 1 0 1
      ##   0 0 3 2 1 0
      ##   0 5 4 3 2 1
      ## This is O(n^2)
      foreach my $i (reverse 0..$w-1) {
        unshift @{$runs[$_]}, $rows[$_][$i] ? 0 : $runs[$_][0]+1 foreach 0..$h;
      }
      ## Now we have to loop over all squares and check rectangles starting
      ## at the square and going down and to the right...
      ## This is now an O(n^3) operation reduced from the O(n^4) operation
      ## by working with run lengths...
      ## Effectively the O(n^2) operation above removes the inner loop of
      ## scanning right for 0s...

      my $max_area = [0,0,0];
      foreach my $x ( 0..$w ) {
        foreach my $y ( 0..$h ) {
          next unless $runs[$y][$x];   ## Short cut answer will be 0
          my $max_w = 1e9;
          foreach my $j ( $y..$h ) {
            last unless $runs[$j][$x]; ## Short cut all subsequent answers are 0
            $max_w    = $runs[$j][$x]          if $runs[$j][$x] < $max_w;
            my $area  = $max_w * ($j-$y+1);
            $max_area = [$area,$max_w,$j-$y+1] if $area>$max_area->[0];
          }
        }
      }
      return $max_area;
    }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/wlmb/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 128 – W. Luis Mochán](https://wlmb.github.io/2021/08/30/PWC128/)

Luis brings to bear the enormous matrix-crunching capabilities of the PDL, the Perl Data Language extensions. In a two-pass algorithm, he first determines all submatrices originating from a given coordinate, filtering these for the largest found, then from the list of largest submatrices selects the largest in turn from these.

```perl
    use PDL;

    my $m=(rcols *STDIN,[],{EXCLUDE=>'/^\s*$/'})->transpose; #input as pdl matrix
    my ($x_max,$y_max)=map {$_-1} $m->dims;
    # For each corner $i, $j find the best submatrix
    my @sm; #array of submatrices
    # For each possible corner produce submatrices
    for my $i(0..$x_max){
        for my $j(0..$y_max){
        push @sm, submatrix($i,$j) if $m->at($i,$j)==0;
        }
    }
    # Choose the largest one
    my $b=reduce {area(@{$a})>area(@{$b})?$a:$b} @sm;
    # Output the results
    say "Input: $m\nOutput: ",
        defined $b?"matrix($b->[0]:$b->[1],$b->[2]:$b->[3])=".
                    $m->slice("$b->[0]:$b->[1],$b->[2]:$b->[3]")
                  :"None";

    sub area { # Calculate the area of a rectangular region given the ranges (a:b,c:d)
        my ($a, $b, $c, $d)=@_;
        return (1+$b-$a)*(1+$d-$c);
    }
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/jo-37/perl/ch-1.pl)

Jorg also reaches  for the PDL for his matrix manipulations. In his version he looks at every possible submatrix sorted by descending size and stops at the first one that's all zeros. Oh! *(smacks forehead)* Why didn't I think of that?

The fact that this can be done in a few lines of code is frankly astonishing, but here we are. The comments far outnumber the actual commands.

```perl
    ### Input and Output

    # Generate a zero matrix in the found dimensions.  It's a fake, but one
    # zero matrix is as good any zero matrix - as long as their dimensions
    # agree.
    say zeros(zero_submatrix(byte join ';', @ARGV)->@*);


    ### Implementation

    # Loop over all sub matrix dimensions in descending size down from the
    # given matrix' dimensions and stop at the first all-zero sub matrix
    # hit.
    sub zero_submatrix ($m) {
        # The loop variable is a 1-d index piddle holding the sub matrix
        # dimensions.
        for my $dims (sort {prod($b) <=> prod($a)}
            (ndcoords(indx, $m)->clump(1, 2) + 1)->dog) {
                # Build "array ref syntax" slice arguments such that a sub
                # matrix of the current dimensions having an upper left
                # element inside the resulting slice fits into the full
                # matrix, i.e.  a "PDL way" to get [[0, -dim0], [0, -dim1]]
                # from [dim0, dim1]
                my $slice = indx(0, 0)->cat(-$dims)->xchg(1, 0)->unpdl;
                # Select all sub matrices in the current dimensions having a
                # zero as the upper left element, take the logical "or" over
                # the values therein and return the current dimensions as an
                # array ref if there is an all-zero sub matrix.
                return $dims->unpdl if !all
                    $m->range(whichND(!$m->slice(@$slice)), $dims)
                    ->reorder(1, 2, 0)->orover->orover;
        }
        return [0, 0];
    }
```


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/polettix/raku/ch-1.raku)

&nbsp;&nbsp;**blog writeup:**
[PWC128 - Maximum Sub-Matrix - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/09/01/pwc128-maximum-sub-matrix/)

Flavio, finally, has led us around to what I consider to be an archetypical algorithm: we iterate through the matrix, left-to-right and top-to-bottom, examining each position as the corner of any number of submatrices potentially reaching from that point to the outer boundaries. So each point ends up evaluated for each set of dimensions wide and high in the remaining space down and to the right. Fortunately in any search we can short-circuit at any time when we encounter a 1, so the actual searching constrained to only submatices of zeros.

```perl
    sub maximum_submatrix_at ($M, $y, $x) {
       my $target = $M->[$y][$x];
       my ($max_size, @best) = (0) x 3;
       my $max_x = $M->[$y]->$#*;
       for my $Y ($y .. $M->$#*) {
          last if $M->[$Y][$x] ne $target;
          my $y_size = $Y - $y + 1;
          my $size = 0;
          for my $X ($x .. $max_x) {
             if ($M->[$Y][$X] ne $target) {
                $max_x = $X - 1;
                last;
             }
             $size += $y_size;
             if ($size > $max_size) {
                $max_size = $size;
                @best = ($y_size, $X - $x + 1);
             }
          }
       }
       return ($max_size, @best);
    }

    sub maximum_submatrix ($M, $target = '0') {
       my ($max, @best) = (0);
       for my $y (0 .. $M->$#*) {
          for my $x (0 .. $M->[$y]->$#*) {
             next unless $M->[$y][$x] eq $target;
             my ($size, @round) = maximum_submatrix_at($M, $y, $x);
             ($max, @best) = ($size, @round) if $size > $max;
          }
       }
       return [map {[(0) x $best[1]]} 1 .. $best[0]];
    }
```

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/adam-russell/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[A Platform for Every Departing Sub-Matrix — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2021/09/05)

Adam takes a decidedly different approach, drawing on dynamic programming to survey submatrices of expanding sizes. From there he devises a complex substring mapping step to track continuous blocks of zeros across rows using [Suffix Trees](https://en.wikipedia.org/wiki/Suffix_tree), which is a remarkable jump in itself.

The module `Tree::Suffix` is used to provide this functionality. The whole approach is self-admittedly convoluted, but does what is asked.

I think it need to be examined in its complete, unaltered glory to appreciate it.

```perl
    use Tree::Suffix;

    sub maximum_sub_matrix{
        my @matrix = @_;
        my @sub_matrix;

        my %indices;
        my @indices_maximum;
        my $indices_previous = "";
        my $indices_current = "";
        my $tree = new Tree::Suffix();
        for my $i (0 .. @matrix - 1){
            $indices_current = "";
            for my $j (0 .. @{$matrix[0]} - 1){
                $indices_current .= $j if $matrix[$i][$j] == 0;
                $indices_current .= "x" if $matrix[$i][$j] == 1;
            }
            $tree->insert($indices_current);
            for my $n (2 .. @{$matrix[0]}){
                for my $s ($tree->longest_common_substrings(1, $n)){
                    if(!$indices{$s}){
                        $indices{$s} = [$i - 1, $i];
                    }
                    else{
                        push @{$indices{$s}}, $i - 1, $i;
                    }
                }
            }
            $tree->remove($indices_previous) if $indices_previous;
            $indices_previous = $indices_current;
        }
        for my $s (keys %indices){
            my $max_area = -1;
            my @indices = sort {$a <=> $b} do { my %seen; grep { !$seen{$_}++ } @{$indices{$s}} };
            unless($indices[0] < 0){
                my $area = 0;
                my $count = 0;
                for(my $i = 0; $i <=  @indices - 1; $i++){
                    $count++;
                    $area += length($s) if $i == 0;
                    $area += length($s) if $i > 0 && $indices[$i] == $indices[$i - 1] + 1;
                    do {$area = 0 ; $count = 0} if $i > 0 && $indices[$i] != $indices[$i - 1] + 1;
                }
                if($area >= $max_area){
                    $max_area = $area;
                    push @indices_maximum, [$s, $count];
                }
            }
        }
        for (0 .. $indices_maximum[0][1] - 1){
            push @sub_matrix, [(0) x length($indices_maximum[0][0])];
        }
        return @sub_matrix;
    }
```



[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/colin-crain/perl/ch-1.pl)

For my own solution I took a a rather radical left turn from my methodical algorithm for PWC 087. This time around, as we are counting patterns of 0s, I constructed a routine to do a listwise OR between two arrays of 0s and 1s, returning the combined result. When this is applied progressively on successive rows the result is an aggregate array where any remaining 0 must be present in all the rows merged. By keeping track of how many rows are combined and the length of a sequence of successive 0s, we can define a sub-matrix of continuous 0s. I thought it was a neat trick.

Each row is considered against only the rows following, and the result of one operation can be fed into the next row to extend the search. For example, the first row is combined with the second and result array scanned for zero-sequences times 2, for the 2-row height for the sub-matrix under examination. This partial result can be OR-ed with the following row and then searched again for 3-row matrices, the 4, et cetera until we run out of road.

Each array can be searched for strings of 0s in a single iterative pass, and the number of such searches is the triangular numbers **T***n* for the count of rows, or *n*(*n*-1)/2, yielding a complexity of **O**(*n*<sup>2</sup>*m*), and we have eliminated a loop.

We don't keep the sub-matrices found, only the count and the row/column dimensions, and the output is reconstructed from this data.

```perl
    my @largest = ( 0, [] );

    for my $start_row ( 0..$#input ) {
        my @composite_row = $input[$start_row]->@*;
        for my $end_row ($start_row..$#input) {
            my $span = $end_row - $start_row + 1;
            $end_row > $start_row and @composite_row = listwise_OR( \@composite_row, $input[$end_row]) ;
            my $zeros = max_zeros( @composite_row ) ;
            my $sub_zeros = $zeros * $span;
            if ( $sub_zeros > $largest[0] ) {
                @largest = ( $sub_zeros, [$span, $zeros]);
            }
        }
    }
    print_output_mat( $largest[1] );

    sub listwise_OR ($arr1, $arr2) {
        my @out;
        for (0..$arr1->$#*) {
            push @out, $arr1->[$_] | $arr2->[$_] ;
        }
        return @out;
    }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/e-choroba/perl/ch-1.pl)

Choroba also makes use of a parallel tranformation matrix, like James above. In this case however we assign, as we go through, a value representing the number of zeroes *preceding* a given zero found. This structure is built as `@preceding_zeros`. As we make a single nested pass through the rows and columns of the matrix, assigning the preceding zeros, we can at that same time use another loop to look upwards at the previously processed rows at the same *y* coordinate for a larger contiguous submatrix block.

```perl
    use enum qw( WIDTH HEIGHT AREA );

    sub max_submatrix {
        my ($matrix) = @_;
        my @preceding_zeros;
        my @max = (0, 0, 0);
        for my $x (0 .. $#$matrix) {
            my $length = 0;
            for my $y (0 .. $#{ $matrix->[$x] }) {
                if ($matrix->[$x][$y]) {
                    $preceding_zeros[$x][$y] = $length = 0;
                } else {
                    my $width = $preceding_zeros[$x][$y] = ++$length;
                    for my $z (1 .. $x + 1) {
                        my $w = $preceding_zeros[ $x - $z + 1 ][$y];
                        $width = $w if $w < $width;

                        # Optimization: skip if we can't beat the max.
                        last if $width * ($x + 1) <= $max[AREA];

                        @max = ($width, $z, $width * $z)
                            if $width * $z >= $max[AREA];
                    }
                }
            }
        }
        return [map [(0) x $max[WIDTH]], 1 .. $max[HEIGHT]]
    }
```



[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/duncan-c-white/perl/ch-1.pl)

Duncan give another fine example of checking each coordinate 0-value as the base of a set of submatrices, themselves examined with a separate set of nested loops. The `allzero()` routine does what it's named to do, and returns 0 if it finds any non-zeros elements in the defined coordinate space.

```perl
    sub maxsubmatrix
    {
        my( @m ) = @_;
        my $bestarea = 0;
        my $best_topr = my $best_topc = 0;
        my $best_nr = 1; my $best_nc = 1;
        my $ncols = @{$m[0]};

        for( my $r = 0; $r < @m; $r++ )
        {
        	for( my $c = 0; $c < $ncols; $c++ )
        	{
        		next unless $m[$r][$c] == 0;
        		for( my $r2 = $r+1; $r2 < @m; $r2++ )
        		{
        			my $nr = 1+$r2-$r;
        			for( my $c2 = $c+1; $c2 < $ncols; $c2++ )
        			{
        				next unless allzero($r,$c,$r2,$c2,@m);
        				my $nc = 1+$c2-$c;
        				my $area = $nr * $nc;
        				if( $area > $bestarea )
        				{
        					$bestarea  = $area;
        					$best_topr = $r;
        					$best_topc = $c;
        					$best_nr   = $nr;
        					$best_nc   = $nc;
        				}
        			}
        		}
        	}
        }
        return( $best_topr, $best_topc, $best_nr, $best_nc );
    }
```


[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/dave-jacoby/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[MinMaxing Matrix Platforms: The Weekly Challenge 128 | Committed to Memory](https://jacoby.github.io/2021/09/01/minmaxing-matrix-platforms-the-weekly-challenge-128.html)

Dave presents us with a novel manner of determining whether a submatrix selection is all zeroes. First the elements defined by a set of row and column start and end point is copied over to a new array, which then processed by essentially decontainerizing the rows, producing one long list of elements. This list is then summed using `sum0()` from `List::Util`. If the sum is anything but 0, and hence Perl-true, the contained elements are not all zero.

```perl
    sub find_submatrices ( $matrix ) {
        my @subs;
        my $maxx = -1 + scalar $matrix->@*;
        my $maxy = -1 + scalar $matrix->[0]->@*;
        for my $x ( 0 .. $maxx ) {
            for my $y ( 0 .. $maxy ) {
                if ( $matrix->[$x][$y] == 0 ) {
                    for my $i ( $x + 1 .. $maxx ) {
                        for my $j ( $y + 1 .. $maxy ) {
                            my $sub = make_submatrix( $matrix, $x, $y, $i, $j );
                            my $n   = sum0 flatten_matrix($sub);
                            next if $n;
                            push @subs, $sub;
                        }
                    }
                }
            }
        }
        return @subs;
    }

    sub flatten_matrix ($matrix) {
        return map { $_->@* } $matrix->@*;
    }
```

[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/stuart-little/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/stuart-little/haskell/ch-1.hs), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/stuart-little/lua/ch-1.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/stuart-little/node/ch-1.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/stuart-little/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/stuart-little/raku/ch-1.raku)

Stuart brings us yet again the very handy functionally-friendly module `List::UtilsBy`, which as might well be inferred contains a group of listwise functions that also take a first-class code block as argument, which is applied to each value from the input list before processing. It's the list of results from this function application that is acted on, in this case finding the maximum value as determined by string length.

```perl
    use List::Util qw(reduce);
    use List::UtilsBy qw(max_by);

    my ($rows,$cols)=(0,0);
    my $digs = length $ARGV[0];
    for my $i (0..scalar @ARGV-1) {
        for my $j ($i..scalar @ARGV-1) {
            my $max = max_by { length $_ }
                      split /[^0]+/,
                      reduce { sprintf("%0${digs}b", oct("0b$a") | oct("0b$b")) } @ARGV[$i..$j];
            if (($j-$i+1) * (length $max) > $rows * $cols) {
                ($rows,$cols) = ($j-$i+1, length $max);
            }
        }
    }

    say join "\n", ('0' x $cols) x $rows;
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: Perl Weekly Challenge 128: Maxima and Minima](https://blog.firedrake.org/archive/2021/09/Perl_Weekly_Challenge_128__Maxima_and_Minima.html)

Lastly Roger brings us another 4-loop example in his usual compact style. When examining the inner submatrices a simple check is made for a 1 in every enclosed span, which further limits the possible range for a given block of elements. This short-circuit, not always present, both ensures that any given submatrix found will be composed solely of zeroes and also dynamically constrains the search space, raising efficiency.

```perl
    my $y=scalar @{$m};
    my $x=scalar @{$m->[0]};
    my $mxa=0;
    my @oc;
    foreach my $yi (0..$y-1) {
      foreach my $xi (0..$x-1) {
        if ($m->[$yi][$xi]==0) {
          my @rl;
          my $mrl=$x-$xi;
          foreach my $yj ($yi..$y-1) {
            foreach my $xj ($xi..min($xi+$mrl,$x)-1) {
              if ($m->[$yj][$xj] != 0) {
                $mrl=min($xj-$xi,$mrl);
                last;
              }
            }
            push @rl,$mrl;
          }
          foreach my $n (0..$#rl) {
            if ($rl[$n]>0) {
              my $a=$rl[$n]*($n+1);
              if ($a >= $mxa) {
                $mxa=$a;
                @oc=($rl[$n],$n+1);
              }
            }
          }
        }
      }
    }
```





## Blogs and Additional Submissions in Guest Languages for Task 1:

[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/bruce-gray/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/bruce-gray/raku/ch-1.raku)

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/cheok-yin-fung/perl/ch-1.pl)

&nbsp;&nbsp;**blog writeup:**
[CY's Taken The Weekly Challenge #128](https://e7-87-83.github.io/coding/challenge_128.html)

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/sgreen/perl/ch-1.pl)

&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 128](https://dev.to/simongreennet/weekly-challenge-128-1ng1)

[**Ulrich Rieke**]()

&nbsp;&nbsp;**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/ulrich-rieke/haskell/ch-2.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/ulrich-rieke/raku/ch-2.raku)

-----------------------

---

# TASK 2 {#PWC128TASK2}

# Minimum Platforms
*Submitted by: Mohammad S Anwar*<br>
You are given two arrays of arrival and departure times of trains at a railway station.

Write a script to find out the minimum number of platforms needed so that no train needs to wait.

**Example 1:**
```
    Input: @arrivals   = (11:20, 14:30)
           @departures = (11:50, 15:00)
    Output: 1
```
* The 1st arrival of train is at 11:20 and this is the only train at the station, so you need 1 platform.
* Before the second arrival at 14:30, the first train left the station at 11:50, so you still need only 1 platform.

**Example 2:**
```
    Input: @arrivals   = (10:20, 11:00, 11:10, 12:20, 16:20, 19:00)
           @departures = (10:30, 13:20, 12:40, 12:50, 20:20, 21:20)
    Output: 3
```
* Between 12:20 and 12:40, there would be at least 3 trains at the station, so we need minimum 3 platforms.

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/abigail/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/adam-russell/perl/ch-2.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/bruce-gray/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/cheok-yin-fung/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/polettix/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/jo-37/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/laurent-rosenfeld/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/mattneleigh/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/peter-campbell-smith/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/sgreen/perl/ch-2.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/stuart-little/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/wlmb/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/wanderdoc/perl/ch-2.pl)

That went well. Good for us. Let's try it again, with a different dozen. That will give us a total of 24 members spotlighted, which sounds like a fair slice... unless, well, you know, there weren't 24 members submitting.

There were, in fact, 18 submissions for the second task this past week, comprising with few exceptions the same group as the first 16. Myself, I did think the first task was bit complex for an opener, and likely harder than the second, and it appears the numbers of submissions made to each task supports that theory. In any case, whatever the larger and deeper meaning we may or may not be able to glean, we simply don't have 12 remaining unique new submitting members to choose from any more. We have, in fact, seven.

Fortunately, I have a plan for that: after we make sure to select any remaining members in random order, we're going to wing it.

One of my favorite poets is the great Robert Burns:

>"The best laid schemes o’ Mice an’ Men<br>
>&nbsp;&nbsp;Gang aft agley,"

— [**To a Mouse**](https://www.poetryfoundation.org/poems/43816/to-a-mouse-56d222ab36e33) *On Turning her up in her Nest, with the Plough, November 1785.*

The mouse, at least, is too busy addressing the difficulties of the present to suffer the regrets of the past and the uncertainties of the future. Compassion is where you find it, and where you place it.


## a FLIGHT of SAMPLES from our latest FINE BATCH of SUBMISSIONS
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/sgreen/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/peter-campbell-smith/perl/ch-2.pl),
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/abigail/perl/ch-2.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/stuart-little/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/dave-jacoby/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/cheok-yin-fung/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/laurent-rosenfeld/perl/ch-2.pl),
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/wanderdoc/perl/ch-2.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/bruce-gray/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/polettix/perl/ch-2.pl), and
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/mattneleigh/perl/ch-2.pl)

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/sgreen/perl/ch-2.pl)

&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 128](https://dev.to/simongreennet/weekly-challenge-128-1ng1)

Simon starts us off today by breaking the day into an array of minutes, with each minute given a slot in an array 1440 elements long. Viewing a day this way as a human might at first seem a bit absurd, albeit trivial for a computer, however this isn't far from a common date-book; we're more used to seeing broader categories of hours to hold our notes but these will usually be subdivided further into the underlying minutes in some fashion. The only thing that's unusual in the end is treating all the minutes on a common footing, but this is the degree of granularity required for our schedual so it's quite appropriate. We've merely done away with the hours, counting the minutes from midnight.

With our day backdrop established, the trains are converted as well into sets of arrival times and departures from the station, again considered as minutes from 0. Each train is then added to the schedual as an iterated range of minutes encompassing the time spent at the station, and at each minute index the train is there the tally of platforms required — the value of the aggregate day array we're building — is incremented. At the end of the day we need only look at the day array, here called `@platforms`, and find the largest value. This will be maximum number of platforms required to maintain the listed schedule.

```perl
    # Pair up the arrival and departure times
    my $offset = scalar(@times) / 2;
    my @trains = ();
    for my $pairs ( 0 .. $#times / 2 ) {
        my $arr = _make_time( $times[$pairs] );
        my $dep = _make_time( $times[ $pairs + $offset ] );

        if ( $dep < $arr ) {
            # The train spans across midnight, so add two entries
            # There are 1440 minutes in a day, so 1439 is 11:59pm
            push @trains, [ 0, $arr ], [ $dep, 1439 ];
        }
        else {
            push @trains, [ $arr, $dep ];
        }
    }

    # For each minute, figure out how many platforms are used
    my @platforms = ( (0) x 1440 );
    foreach my $train (@trains) {
        foreach my $time ( $train->[0] .. $train->[1] ) {
            $platforms[$time]++;
        }
    }

    # Display the maximum number of platforms required
    my $max_platforms = max(@platforms);
    say $max_platforms;
```

[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/peter-campbell-smith/perl/ch-2.pl)

In contrast to focusing on the platforms, against the backdrop of the times of day, Peter instead shifts the frame to the trains, with each train event — arriving and departing — triggering a change in a running count of required platforms. To do this he first converts the arrival and departure data into a list of sortable, stringified hash keys, each paired with an action to either increment or decrement a tally as the train represented enters or leaves. Iterating through the sorted list of keys of all train events, coming and going, a count is maintained for however many platforms are required at each event, and a separate counter is maintained to hold the maximum count throughout the day.

With the previous example, these two viewpoints — to either focus on the times of day and how they are affected by the trains, or alternately the trains, and how they affect the requirements for platforms — comprise the two basic ways of looking at the system to get the requested count.

```perl
    @arrivals   = qw[10:20 11:00 11:10 12:20 16:20 19:00];
    @departures = qw[10:30 13:20 12:40 12:50 20:20 21:20];

    # Make a hash (%trains) with all events - ie arrival and departure times - as the keys.
    # The value of each hash element is the change in platforms need, ie +1 for an arrival
    # and -1 for a departure.

    # There could be two events happening at the same time, so the hash key needs to be suffixed
    # with a unique number.  Also, it would be dangerous for a train to arrive in a platform at the same time
    # as an earlier train leaves, so we need consider arrivals at a given time before departures and
    # so the hash keys have to sort arrivals at a given time before departures.  So a typical hash key
    # is 12:20-a3 (the 4th train arrives at 12:20) or 12:30-d6 (the 5th train departs at 12:30).

    # create the hash
    for $train (0 .. $#arrivals) {
        $trains{"$arrivals[$train]-a$train"} = 1;
        $trains{"$departures[$train]-d$train"} = -1;
    }

    # loop over the events in time order
    $max_platforms = 0;
    $now_platforms = 0;   # number of platforms needed after each event

    for $event (sort keys %trains) {
        $now_platforms += $trains{$event};
        $max_platforms = $now_platforms if $now_platforms > $max_platforms;
    }
```

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/abigail/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/abigail/awk/ch-2.awk), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/abigail/c/ch-2.c), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/abigail/lua/ch-2.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/abigail/node/ch-2.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/abigail/python/ch-2.py)

&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 128: Minimum Platforms](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-128-2.html)

Abigail analysed the two framing options and decided that incrementing the backdrop array of minutes was the more efficient approach. They also introduce the idea of trains seemingly arriving after they depart, which is to say they are in the station at midnight. This is chosen to be addressed as considering the case as two trains: one arriving at midnight and leaving after, the other arriving before midnight and not explicitly listed as leaving.

The other vaguary addressed is to assume that departures always occur after arrivals in the same minute, so two trains can't share the same platform during that minute.

```perl
    my @arrivals   = map {[split /:/]} <> =~ /[0-9][0-9]:[0-9][0-9]/g;
    my @departures = map {[split /:/]} <> =~ /[0-9][0-9]:[0-9][0-9]/g;

    my @trains = (0) x (24 * 60);

    foreach my $i (keys @arrivals) {
        my $arrival   = 60 * $arrivals   [$i] [0] + $arrivals   [$i] [1];
        my $departure = 60 * $departures [$i] [0] + $departures [$i] [1];
        my @minutes;
        if ($arrival <= $departure) {
            #
            # Train arrives and leaves before midnight.
            #
            @minutes = $arrival .. $departure;
        }
        else {
            #
            # Train arrives before midnight, leaves after midnight.
            #
            @minutes = (0 .. $departure, $arrival .. (24 * 60 - 1));
        }
        $trains [$_] ++ for @minutes;
    }

    say max @trains;
```

[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/stuart-little/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/stuart-little/haskell/ch-2.hs), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/stuart-little/lua/ch-2.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/stuart-little/node/ch-2.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/stuart-little/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/stuart-little/raku/ch-2.raku)

Stuart gives us a functional example, repeatedly treating the input list of first all arrival times followed by all departures. Some extreme cleverness is invoked to convert the input into a list of pairs, with time events matched to the train numbers, first arriving then departing. More clever use of bit-flipping with an exclusive-or catalogues whether a train is still in the station, as noted in the `@station` variable. As I don't think any of this is particularly obvious, nor clear, here's a peek inside the final loop over the `@times` array, with the time/train pair followed by the state of the station array. This clearly demonstrates that at 12:20 we need three platforms.

Well now it makes sense to me. What a cool way to approach this.

```
    10:20 0
        1 0 0 0 0 0
    10:30 0
        0 0 0 0 0 0
    11:00 1
        0 1 0 0 0 0
    11:10 2
        0 1 1 0 0 0
    12:20 3
        0 1 1 1 0 0     <-- three platforms at 12:20
    12:40 2
        0 1 0 1 0 0
    12:50 3
        0 1 0 0 0 0
    13:20 1
        0 0 0 0 0 0
    16:20 4
        0 0 0 0 1 0
    19:00 5
        0 0 0 0 1 1
    20:20 4
        0 0 0 0 0 1
    21:20 5
        0 0 0 0 0 0
```

The code is quite compact. Originally Stuart had the chained commands in one long line but I find stacking them by operation makes for *much* more readable code. Just putting that out there.

```perl
    use List::Util qw(sum0 zip);

    my @times = sort {$a->[0] cmp $b->[0]}
                map  { [$_->[0], $_->[1] % int((scalar @ARGV)/2)] }
                zip  \@ARGV, [0..scalar @ARGV-1];
    my $sol=0;
    my @station = (0) x int((scalar @ARGV)/2);

    for (@times) {
        $station[$_->[1]]^=1;
        ((sum0 @station) > $sol) && do {$sol = sum0 @station};
    }

    say $sol;
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/dave-jacoby/perl/ch-2.pl)

&nbsp;&nbsp;**blog writeup:**
[MinMaxing Matrix Platforms: The Weekly Challenge 128 | Committed to Memory](https://jacoby.github.io/2021/09/01/minmaxing-matrix-platforms-the-weekly-challenge-128.html)

Dave makes the observation that 24-hour times in themselves work fine as a basis of iteration by simply stripping out the colon separator. Treating the first arrival time and the last departure as a range, every real minute within the start and end time will be considered, along with many malformed times, such as 10:75, that are fine because they will never be found to have a train either arriving or departing at that pseudo-time.

Each minute increment is checked against the arrival and departure lists, and if found a master record is either incremented or decremented, and a maximum value variable is updated as required.

```perl
    sub min_platforms ($timetable) {
        my $p  = 0;
        my $mp = 0;
        my @arrivals =
            map { s/\D//g; $_ }
            map { $_ }
            sort $timetable->{arrivals}->@*;
        my @departures =
            map { s/\D//g; $_ }
            map { $_ }
            sort $timetable->{departures}->@*;

        my $first = $arrivals[0];
        my $last  = $departures[-1];
        for my $t ( $first .. $last ) {
            if ( @arrivals && $t == $arrivals[0] ) {
                shift @arrivals;
                $p++;
                $mp = $p if $p > $mp;
            }
            if ( @departures && $t == $departures[0] ) {
                shift @departures;
                $p--;
            }
        }

        return $mp;
    }
```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/cheok-yin-fung/perl/ch-2.pl)

&nbsp;&nbsp;**blog writeup:**
[CY's Taken The Weekly Challenge #128](https://e7-87-83.github.io/coding/challenge_128.html)

CY provides two methods for processing the data, the first "primitive", looking at the time backdrop, the second "thoughtful", being event driven by the train traffic. I find the choice of words here particularly intriguing, the pairing for the dichotomy particularly specific and evocative. I've never been very fond of the term "naive" in this context, as while technically correct I feel it adds a element of judgement that may be unwarranted and is certainly unrelated. Sometimes simplicity *is* the better way; in this case it actually can reduce complexity, as argued elsewhere by Abigail in their writeup.

In any case I find her unconventional choice of translations refreshing, putting into more sharp relief some of the linguistic terminology we take for granted, and the baggage it may carry with it.

In her "thoughtful" analysis, a hash is used to pair the associated data with each event as to whether a train is entering or leaving, which is then used to increment or decrement a counter, and a second maximum value is maintained.


```perl
    sub platforms_needed {
        my @arrive_min = $_[0]->@*;
        my @depart_min = $_[1]->@*;
        my %station_traffic;
        for (@arrive_min) {
            if (defined($station_traffic{$_})) {
                $station_traffic{ $_ }++;
            }
            else {
                $station_traffic{ $_ } = 1;
            }
        }
        for (@depart_min) {
            if (defined($station_traffic{$_})) {
                $station_traffic{ $_ }--;
            }
            else {
                $station_traffic{ $_ } = -1;
            }
        }

        my @events = sort {$a<=>$b} keys %station_traffic;
        my $status = 0;
        my $max_status = 0;
        for (@events) {
            $status += $station_traffic{ $_ };
            $max_status = $status if $status > $max_status;
        }
        return $max_status;
    }

```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/laurent-rosenfeld/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/laurent-rosenfeld/raku/ch-2.raku)

&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 128: Minimum Platforms](http://blogs.perl.org/users/laurent_r/2021/09/perl-weekly-challenge-128-minimum-platforms.html)

Laurent keeps the two given separate lists of arrivals and departures, alternately shifting off values from one and then the other in a novel fashion. An arrival increases the train count, a departure decrements the counter. The schedules are assumed to be sorted.

```perl
    while (@ts_arr) {
        if ($#ts_dep == 0) {
            $max_size++;
        } elsif ($ts_arr[0] <= $ts_dep[0]) {
            shift @ts_arr;
            $size++;
            $max_size = $size if $size > $max_size;
            # say "$size $max-size";
        } else {
            shift @ts_dep;
            $size--;
        }
    }
```

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/wanderdoc/perl/ch-2.pl)

The doctor bravely does all of their math in actual time objects, brought to you through the use of `Time::Piece` and `Time::Seconds`. Further complexity is added accommodating the cycle restart of trains present in the station at midnight.

Pairs are constructed of arrivals and departures for each train, and the pairs are iterated through to track the traffic throughout the day.

One consequence of going about things in this way is that the calculations are done by the second rather than the minute, which in itself makes little difference as there are only a small finite number of seconds in a day. More than minutes, surely, but not significantly when processing data at modern rates. The seconds are kept as keys in a hash, `%output`, with the value a record of trains being present. The size of this record is the count of trains occupying the station, and the maximum of this the number of platforms required.

```perl
    my %platforms;
    my %output;
    for my $ts ( $min .. $max )
    {
         for my $pair ( @pairs )
         {
              next if ($ts < $pair->[0] or $ts > $pair->[1]);
              push @{$output{ ++$platforms{$ts} }}, $ts;
         }
    }
    print "1 platform is enough.$/" if max(keys %output == 1);
    for my $platform ( grep $_ > 1, sort {$b <=> $a} keys %output)
    {
         my @intervals = _num2arr( @{$output{$platform}});
         print "At least ${platform} platforms at", ': ';
         print join(', ',map join(' - ', map _sec2hm($_), $_->[0], $_->[1]), @intervals), $/;

    }
```

[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/bruce-gray/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/bruce-gray/raku/ch-2.raku)

Bruce delivers us an impressively compact version of mapping train presence to the  minutes of the day. The first routine, `time_to_offset()` parses and converts a time to seconds from midnight, and the second, `max_trains()` increments the value in an array for each minute within the given interval. The highest value in this array of minutes is the maximum number of platforms required.

```perl
    use List::Util 1.56 qw<max zip>;

    sub time_to_offset ( $hh_mm_time ) {
        $hh_mm_time =~ m{ \A (\d\d?) : (\d\d) \z }msx
            or return;
        return $1 * 60 + $2;
    }

    sub max_trains ( $arrivals, $departures ) {
        die if @{$arrivals} != @{$departures};

        my @times;
        for ( zip($arrivals, $departures) ) {
            my ( $start, $end ) = map { time_to_offset($_) // die } @{$_};
            $times[$_]++ for $start..$end;
        }

        return max grep {defined} @times;
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/polettix/raku/ch-2.raku)

&nbsp;&nbsp;**blog writeup:**
[PWC128 - Minimum Platforms - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/09/02/pwc128-minimum-platforms/)

Flavio maintains a running counter of the platforms required as trains enter and depart the station, adding a unique twist to the calculations in the form of a safety buffer. Trains cannot start and stop on a dime, and any number of real-world irregularities can cause variations that can ripple through a train system. The actual dynamics of traffic systems between closely-packed independently regulated entities is remarkably complex, defined by the interaction times between perception of change and response by the actors. In tightly packed systems, such as a traffic jam, small delays are magnified as waves of disturbance, turning creeping motion into the familiar jerky unpredictable starts and stops that typify such situations. With this in mind it's not wise to pack large objects, with lengthy start and stop lags, together too tightly. Hence a buffer interval is necessary. But how large?

Flavio suggests 10 minutes. Automated train control could surely take this number down but it does sound like a good ballpark estimate to work with. Consequently every departure is padded with this configurable safety margin, more closely modeling the inherent unpredictability of the real-world. Making unreasonable demands from the system will at best cause delays and poor user experience, and at worst twisted carnage, screaming and the stench of death. Neither of these is what we'd commonly think of as a favorable outcome.

```perl
    use constant freeup_window => $ENV{FREEUP_WINDOW} // 10;

    sub minimum_platforms ($arrivals, $departures) {
       my $pre_massage = sub (@input) {
          sort { $a <=> $b } map {
             my ($h, $m) = split m{:}mxs;
             $h * 60 + $m;
          } @input;
       };
       my @sorted_arrivals = $pre_massage->($arrivals->@*);
       my @sorted_departures = $pre_massage->($departures->@*);
       my $beyond_last = 30 * 60 + freeup_window;
       my ($present, $min, $max) = (0, 0, 0);
       while (@sorted_arrivals || @sorted_departures) {
          my $arrival = @sorted_arrivals ? $sorted_arrivals[0] : $beyond_last;
          my $departure = @sorted_departures ? $sorted_departures[0] : $beyond_last;
          if ($arrival <= $departure + freeup_window) {
             ++$present;
             $max = $present if $present > $max;
             shift @sorted_arrivals;
          }
          else {
             --$present;
             $min = $present if $present < $min;
             shift @sorted_departures;
          }
       }
       return $max - $min;
    }
```

[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/mattneleigh/perl/ch-2.pl)

Matthew does a few things differently in his systematic implementation of a solution. For one, he implicitly acknowledges that the choice of midnight as a base for the schedule is arbitrary; what we're really looking for is a "zero-hour" of sorts, what he calls "end of business day" where there are no trains in the station. It really doesn't matter exactly what time this is, so the value is made configurable, defaulting to midnight.

The actual calculation is done with a single, complex nested function in three steps:
1. map the arrival and departure times to lists of minutes offset from the base
2. note overlapping zones
3. report the largest number of overlaps

```perl
    return(
        # 3) Find the length of the longest list of
        # overlaps
        max_list_length(
            # 2) Search the dwell time interval list for
            # overlaps
            find_overlaps(
                # 1) Rearrange the schedule into a list of
                # station dwell time intervals for each train,
                # converting the times into purely numerical
                # values (minutes since midnight) en passant
                map(
                    {
                        [
                            convert_time($schedule->[0][$_], $EOB),
                            convert_time($schedule->[1][$_], $EOB)
                        ]
                    }
                    (0 .. $#{$schedule->[0]})
                )
            ) # End call to find_overlaps()
        ) # End call to max_list_length()

        # 4) Add one because the lists of overlaps
        # we counted don't include the train being
        # overlapped
        + 1
    );
```

The `find_overlaps()` function is too noteworthy to leave out:

```perl
    sub find_overlaps{

        my $i;
        my $j;
        my @overlap_intervals;

        # Set up empty array refs to match the
        # number of intervals we'll be looking at
        @overlap_intervals = map({ [] } (0 .. $#ARG));

        # Loop over intervals from the 1th (as
        # opposed to the 1st) onward
        for $i (1 .. $#ARG){
            # Loop over intervals from the 0th to the
            # (i - 1)th
            for $j (0 .. ($i - 1)){
                # Basically:
                # if(max(beginnings) - min(ends) <= 0)
                if(
                    # Maximum of the beginnings of the ranges
                    ($ARG[$j][0] > $ARG[$i][0] ? $ARG[$j][0] : $ARG[$i][0])
                    -
                    # Minimum of the ends of the ranges
                    ($ARG[$j][1] < $ARG[$i][1] ? $ARG[$j][1] : $ARG[$i][1])
                    <=
                    0
                ){
                    # Store each overlapping interval's index
                    # in the array corresponding to the other
                    push(@{$overlap_intervals[$i]}, $j);
                    push(@{$overlap_intervals[$j]}, $i);
                }
            }
        }

        return(@overlap_intervals);

    }
```


## Blogs and Additional Submissions in Guest Languages for Task 2:

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/adam-russell/perl/ch-2.pl)

&nbsp;&nbsp;**blog writeup:**
[A Platform for Every Departing Sub-Matrix — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2021/09/05)

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/james-smith/perl/ch-2.pl)

&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #128](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-128/james-smith)

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/roger-bell-west/rust/ch-2.rs)

&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: Perl Weekly Challenge 128: Maxima and Minima](https://blog.firedrake.org/archive/2021/09/Perl_Weekly_Challenge_128__Maxima_and_Minima.html)

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-128/wlmb/perl/ch-2.pl)

&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 128 – W. Luis Mochán](https://wlmb.github.io/2021/08/30/PWC128/)



---

# BLOGS {#PWC128BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, I somehow continue to maintain my bearings. Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC128BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *READ* these *BLOG* *LINKS*:

**( *don't think, trust your training, you're in the zone, just do it ...* )**


**Abigail**

 * [Perl Weekly Challenge 128: Maximum Sub-Matrix](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-128-1.html) ( *Perl* )
 * [Perl Weekly Challenge 128: Minimum Platforms](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-128-2.html) ( *Perl* )

**Adam Russell**

 * [A Platform for Every Departing Sub-Matrix — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2021/09/05) ( *Perl* )

**Arne Sommer**

 * [With Raku to Mum's Platform](https://raku-musings.com/mums-platform.html) ( *Raku* )

**Cheok-Yin Fung**

 * [ CY's Taken The Weekly Challenge #128 ](https://e7-87-83.github.io/coding/challenge_128.html) ( *Perl* )

**Dave Jacoby**

 * [MinMaxing Matrix Platforms: The Weekly Challenge 128 | Committed to Memory](https://jacoby.github.io/2021/09/01/minmaxing-matrix-platforms-the-weekly-challenge-128.html) ( *Perl* )

**Flavio Poletti**

 * [PWC128 - Maximum Sub-Matrix - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/09/01/pwc128-maximum-sub-matrix/) ( *Perl & Raku* )
 * [PWC128 - Minimum Platforms - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/09/02/pwc128-minimum-platforms/) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #128](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-128/james-smith) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 128: Minimum Platforms |aurent_r](http://blogs.perl.org/users/laurent_r/2021/09/perl-weekly-challenge-128-minimum-platforms.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 128: too much complex? – Luca Ferrari – Open Source advocate, humanbeing](https://fluca1978.github.io/2021/08/30/PerlWeeklyChallenge128.html#task1) ( *Raku* )

**Roger Bell_West**

 * [RogerBW's Blog: Perl Weekly Challenge 128: Maxima and Minima](https://blog.firedrake.org/archive/2021/09/Perl_Weekly_Challenge_128__Maxima_and_Minima.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 128](https://dev.to/simongreennet/weekly-challenge-128-1ng1) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 128 – W. Luis Mochán](https://wlmb.github.io/2021/08/30/PWC128/) ( *Perl* )
