---
author:       Colin Crain
date:         2022-03-21T00:00:00
description:  "Colin Crain › Perl Weekly Review #152"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #152"
image:        images/blog/p5-review-challenge-152.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-151/).* )

Welcome to the Perl review pages for **Week 152** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

---

### ●︎ Why do we do these challenges?

I suppose any reasonable answer to that question would be from a field as wide ranging and varied as the people who choose to join the team. One thing, though, is clear: it's not a competition, and there are no judges, even if there is a "prize" of sorts. About that -- I think of it more as an honorarium periodically awarded to acknowledge the efforts we make towards this strange goal. So there's no determination to find the *fastest*, or the *shortest*, or even, in some abstract way, the *best* way to go about things, although I'm certain the participants have their own aspirations and personal drives. As Perl is such a wonderfully expressive language, this provides quite a bit of fodder to the core idea of TMTOWTDI, producing a gamut of varied techniques and solutions.

Even the tasks themselves are often open to a certain amount of discretionary interpretation. What we end up with is a situation where each participant is producing something in the manner they find the most interesting or satisfying. Some team members focus on carefully crafted complete applications, thoroughly vetting input data and handling every use case they can think up. Others choose to apply themselves to the logic of the underlying puzzle and making it work in the most elegant way they can. Some eschew modules they would ordinarily reach for, others embrace them, bringing to light wheels perhaps invented years ago that happen to exactly solve the problem in front of them today.

I've been considering this question for some time and have found one binding commonality between all of us out solving these challenges each week, in that however we normally live our lives, the task in front of us more than likely has nothing to do with any of that. And I think this has great value. We all do what we do, in the real world, and hopefully we do it well. The Weekly Challenge provides us with an opportunity to do something germane to that life yet distinctly different; if we only do the things we already know how to do then we will only do the same things over and over. This is where the "challenge" aspect comes into play.

So we can consider The Weekly Challenge as providing a problem space outside of our comfort zone, as far out from that comfort as we wish to take things. From those reaches we can gather and learn things, pick and choose and bring what we want back into our lives. Personally, I think that's what this whole thing is about. YMMV.

---

<strong><emp>Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due.</emp></strong>

And that, my friends, is why I'm here, to try and figure out ways to do just that.

So, here we are then. I'm ready — let’s get to it and see what we can find.

---

### For Additional Context…

before we begin, you may wish to revisit either the pages for the [**original tasks**](/blog/perl-weekly-challenge-152/) or the summary [**recap**](/blog/recap-challenge-152/) of the challenge. But don't worry about it, the challenge text will be repeated and presented as we progress from task to task.

Oh, and one more thing before we get started:


### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please feel free to email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

<div align= center><strong>...So finally, without further ado...</strong></div>

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC152TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC152TASK2)   &nbsp;  &nbsp;  &nbsp;       •   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC152BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

---

# TASK 1 {#PWC152TASK1}

# Triangle Sum Path
*Submitted by: Mohammad S Anwar*

You are given a triangle array.

Write a script to find the minimum sum path from top to bottom.

**Example 1:**
```
    Input: $triangle = [ [1], [5,3], [2,3,4], [7,1,0,2], [6,4,5,2,8] ]

                1
               5 3
              2 3 4
             7 1 0 2
            6 4 5 2 8

    Output: 8

    Minimum Sum Path = 1 + 3 + 2 + 0 + 2 => 8
```

**Example 2:**
```
    Input: $triangle = [ [5], [2,3], [4,1,5], [0,1,2,3], [7,2,4,1,9] ]


                5
               2 3
              4 1 5
             0 1 2 3
            7 2 4 1 9

    Output: 9

    Minimum Sum Path = 5 + 2 + 1 + 0 + 1 => 9
```


## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/abigail/perl/ch-1.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/alexander-pankoff/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/athanasius/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/colin-crain/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/polettix/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/jo-37/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/lubos-kolouch/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/mohammad-anwar/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/peter-campbell-smith/perl/ch-1.pl),
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/pokgopun/perl/ch-1.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/robert-dicicco/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/sgreen/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/ulrich-rieke/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/wlmb/perl/ch-1.pl)

At first reading of this particular task I found myself a bit confused. I suppose I had trees on my mind, and was visualizing a path being traced downward from the peak of the triangle, passing through elements along he way like a pachinko ball bouncing from pin to pin as wends its way to the bottom.

A careful examination of the example, however, does not bear out this hypothesis. It seems we skip from level to level without regard to linear position within the strata. So rather than the complicated problem of evaluating and selecting the smallest possible sum from numerous choices, we need only determine the locally-minimal element within each subarray sequence, and sum these values as we traverse the outer array.

There were 20 submissions for the first task this past week.

## TRIANGLES, TRIANGLES, we don't need no stinking TRIANGLES...
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/laurent-rosenfeld/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/e-choroba/perl/ch-1.pl),
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/pokgopun/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/wlmb/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/roger-bell-west/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/ulrich-rieke/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/polettix/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/jo-37/perl/ch-1.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/alexander-pankoff/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/athanasius/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/dave-jacoby/perl/ch-1.pl), and
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/james-smith/perl/ch-1.pl)

There was a large degree of conformity in the steps to solve the problem stated, alongside a fairly consistant confusion as to whether the directives were understood correctly. Many members voiced concern that despite the complexity of the setup, with the triangular array-of-arrays, the actual solution had little to do with any of that and could be solved in a straightforward fashion on two-dimensional data of any shape.

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/laurent-rosenfeld/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 152: Triangle Sum Path](http://blogs.perl.org/users/laurent_r/perl-weekly-challenge-152-triangle-sum-path.html)

We'll open the topic with Laurent's submission.

To accomplish the task we need two basic pieces of functionality: a `minimum` function of some sort to find the largest element from an array, and a `sum` function to gather and accumulate a running total.

For the first component Laurent constructs a subroutine to examine each element in a list and take note of the largest value found, updating a variable as required and ultimately returning it.

Then, using a `map`, he processes the given list of array references, replacing each element with its maximum value along the way. This list is then looped over and the individual elements are added to a `$sum` variable for output.

```perl
    sub min {
        my $min = shift;
        for (@_) {
            $min = $_ if $_ < $min;
        }
        return $min;
    }

    for my $triangle ([ [1], [5,3], [2,3,4], [7,1,0,2], [6,4,5,2,8] ],
        [ [5], [2,3], [4,1,5], [0,1,2,3], [7,2,4,1,9] ]) {
            my $sum = 0;
            $sum += $_ for map { min(@$_) } @$triangle;
            say join " ", (map { "[@$_]"} @$triangle), " -> $sum";
        }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/e-choroba/perl/ch-1.pl)

The `List::Util` module has been packaged in the Perl core distribution for quite some time — since version 5.004, in fact. In it we will find two functions, `min` and `sum`, that happen to do exactly what we need to do. So let's use them, no?

It's simple, clean and straightforward. What more do we need?

```perl
    use List::Util qw{ min sum };

    sub triangle_sum_path {
        my ($triangle) = @_;
        return sum(map min(@$_), @$triangle)
    }
```

[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/pokgopun/perl/ch-1.pl)

New member PokGoPun, on the other hand, has taken it upon themself to make the problem a little more interesting by creating an elaborate verbose output, drawing the input triangles and the equation for the selected summation.

Of note: to find the array minimum they employ the trick of sorting the array and selecting the first element, which then will be the smallest. This also can work as a `maximum` function by taking the last element, and a `minmax` should you need both.

```perl
    my @sample;
    ### If scripts' arguments present, convert them to triangle array
    {
        last unless @ARGV;
        push @sample, [ map{[$_=~/(\d+)/g]} @ARGV ];
    }
    ### Add sample triangle arrays if none available
    {
        last if @sample;
        push @sample, [ [1], [5,3], [2,3,4], [7,1,0,2], [6,4,5,2,8] ];
        push @sample, [ [5], [2,3], [4,1,5], [0,1,2,3], [7,2,4,1,9] ];
    }
    #print Dumper \@sample;
    ### Generate array of min path
    sub minPath {
        my $path = shift;
        my @minPath;
        push @minPath, [sort { $a <=> $b } @$_]->[0] foreach @$path;
        return @minPath
    }
    ### Generate output similar to those in examples of the challenge's task
    foreach my $s (@sample) {
        printf "\nInput: \$triangle = [ %s ]\n\n", join(", ", map{"[".join(",",@$_)."]"} @$s );
        print "\t"," " x scalar(@{$s->[-1-$_]}), join(" ",@{$s->[$_]}),"\n" foreach 0..$#$s;
        my @minPath = minPath($s);
        my $sumText = join(" + ",@minPath);
        my $sum = eval($sumText);
        print "\nOutput: $sum\n\n\tMinimum Sum Path = $sumText => $sum\n",
    }
```

Here's an example of the output:

```
    Input: $triangle = [ [1], [5,3], [2,3,4], [7,1,0,2], [6,4,5,2,8] ]

             1
            5 3
           2 3 4
          7 1 0 2
         6 4 5 2 8

    Output: 8

        Minimum Sum Path = 1 + 3 + 2 + 0 + 2 => 8
```

As you can see, it precisely mirrors the examples given.

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/wlmb/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 152 – W. Luis Mochán](https://wlmb.github.io/2022/02/14/PWC152/)

Luis breaks away from the pack in a different direction, taking triangles as imput strings in the form of a normal coded Perl array construction. He then uses `eval` to examine the string as Perl code, producing a proper multidimensional array. The services of `Try::Tiny` are brought in to provide a try/catch loop on the possibly faulty user input.

```perl
    use List::Util qw(min sum0 all);
    use Try::Tiny;
    for my $triangle_string (@ARGV){
        try {
            my $triangle=eval $triangle_string;
            my @rows=@$triangle;
            # Seems unnecesary, but test shape
            die "Wrong row-size in $triangle_string"
                unless all{$_+1==@{$rows[$_]}}(0..@rows-1);
            my @minima=map {min @$_} @rows;
            my $sum=sum0 @minima;
            say "Input: $triangle_string\nOutput: $sum\nPath values: ", join "-", @minima;
        }
        catch {
            say $_;
        }
    }
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/roger-bell-west/javascript/ch-1.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/roger-bell-west/kotlin/ch-1.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/roger-bell-west/lua/ch-1.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 152: Triangles, Rectangles, and Objects](https://blog.firedrake.org/archive/2022/02/The_Weekly_Challenge_152__Triangles__Rectangles__and_Objects.html)

I always find looking at the personal preference in choosing which, if any, module functions to include to be an interesting observation to make. Here Roger takes `min`, from `List::Util`, but chooses to inline the summing in a small `for` loop.


```perl
    use List::Util qw(min);

    sub tsp {
      my $tree = shift;
      my $mp=0;
      foreach my $r (@{$tree}) {
        $mp+=min(@{$r});
      }
      return $mp;
    }
```

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/ulrich-rieke/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/ulrich-rieke/cpp/ch-1.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/ulrich-rieke/haskell/ch-1.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/ulrich-rieke/raku/ch-1.raku)

Ulrich has devised a scheme for inputting a triangle, one line per level, with individual elements separated by spaces. Careful directions are given to the user along the way, with data being drawn in through the `<STDIN>` filehandle. Our old friend the `min` is imported, and once a line has been split on whitespace into a list, the minimum value is selected and added to an aggregate sum.

```perl
    my $line = <STDIN> ;
    chomp $line ;
    while ( $line ne "e" ) {
      while ( $line !~ /^(\d\s*)+$/ ) {
          say "Enter only integers separated by spaces, one more per line!" ;
          $line = <STDIN> ;
          chomp $line ;
      }
      unless ( $line eq "e" ) {
          $len = scalar( split( /\s+/ , $line ) ) ;
          while ( $len != $lastLen + 1 ) {
        say "There should be one number more per line!" ;
        $line = <STDIN> ;
        chomp $line ;
        $len = scalar( split( /\s+/ , $line ) ) ;
          }
      }
      $pathSum += min( split( /\s+/ , $line )) ;
      $lastLen = $len ;
      $line = <STDIN> ;
      chomp $line ;
    }
    say $pathSum ;
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC152 - Triangle Sum Path - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/02/16/pwc152-triangle-sum-path/)

Flavio notes that, as I did, he at first misread the directives as being far more complex than they were. However he went on to create a triangular graph with vertices at the individual elements and an A* implementation to find the minimal way across it.

But that first effort was written in Raku, and although I am very fond of that particular language I feel it would be distracting to include it here. You can see it, if you like, in his [writeup on the challenge](https://github.polettix.it/ETOOBUSY/2022/02/16/pwc152-triangle-sum-path/).

For Perl, though, he realized the error of his ways before porting over that implementation, and instead supplies us with this short and sweet version:

```perl
    use List::Util qw< sum min >;

    my @triangle = map { [split m{,}mxs] } @ARGV;
    say triangle_sum_path(@triangle);

    sub triangle_sum_path (@triangle) { sum map { min $_->@* } @triangle }
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/jo-37/perl/ch-1.pl)

Jorg has been using The Weekly Challenge to tightly focus on a select roster of complex modules, taking them out and really working them to both explore their functionality and properly learn the extant of their capabilities.

With `Math::Prime::Util` this is an ambitious project, as it provides over two hundred routines and constants relevant to number theory calculations.

Here he brings in two functions from that package, `vecsum` and `vecmin`. These work similarly to the `List::Util` versions `sum` and `min` we've seen already, but operate on integer types, removing the possibility of floating point errors for very large values.

```perl
    use Math::Prime::Util qw(vecmin vecsum);

    # Find the minumum sum picking one element from each row of an AoA.
    sub minsum {
        vecsum map vecmin(@$_), @{+shift}
    }
```

[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/alexander-pankoff/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Challenge 152 Task #1 - Summing up minimums](https://pankoff.net/pages/perl-weekly-challenge/challenge-152-task-1.html)

There are in fact two summation functions in `List::Util`, `sum()` and `sum0()`. The difference between them is in their behavior when given an empty list. In the absence of any data whatsoever, `sum0` will produce a real 0 value, with `sum` returning undef. Selection between the two should be based on what you want to happen in this circumstance.

I'll also note that in the case of a undefined internal element, both functions will continue to find a sum of the remaining elements but will complain with a warning.

There are a variety of reasons, use-cases and preferences for choosing one function over the other. Generally it doesn't matter much, but occasionally it very much will. Here Alexander had decided on using `sum0`:

```perl
    sub minimum_triangle_sum_path($triangle) {
        return sum0( map { min(@$_) } @$triangle );
    }
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/athanasius/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/athanasius/raku/ch-1.raku)


When discussing number theory, "triangle" has a restricted meaning, specifically defining a layered structure where each level has one more element than the one next to it, either ascending or descending. Unconventionally scaled or asymmetric triangles could surely arise, and occasionally do, but when this happens they would need to be specifically described. In the absence of this we can infer a strict, unary progression.

With this observation, the monk brings us an interesting analysis, in that we can enter our triangle data on a single line of input. We know that the length of each sub-array will advance one element with each step taken, and the total length of an array with *n* levels will be the triangular number **T**(*n*). The first level will have 1 element, the second two, then three, et cetera, and the overall length will follow the prgression (1, 3, 6, 10 ...).

We can verify the input data list against the triangular numbers before we start to make sure that we can indeed form a complete structure.

The triangular number test used is that 8*n* + 1 must be a perfect square.

```perl
    sub build_triangle
    {
        my ($items)   = @_;
        my  $row_idx  = 0;
        my  $index    = 0;
        my  @triangle;

        while ($index <= $#ARGV)
        {
            my   @row;
            push @row, $items->[ $index++ ] for 1 .. $row_idx + 1;
            push @triangle, [ @row ];

            ++$row_idx;
        }

        return \@triangle;
    }

    sub is_triangular
    {
        my ($num) = @_;
        my  $x    = 8 * $num + 1;
        my  $root = int sqrt $x;

        return $root * $root == $x;
    }

    MAIN:
    {
        my $items    = parse_command_line();
        my $triangle = build_triangle( $items );

        printf "Input:  \$triangle = %s\n", sprint_triangle( $triangle );

        my   @min_sum_path;
        push @min_sum_path, min( $triangle->[ $_ ]->@* ) for 0 .. $#$triangle;

        my $min_sum  = 0;
           $min_sum += $_ for @min_sum_path;

        print "Output: $min_sum\n";

        if ($VERBOSE)
        {
            printf "\n    Minimum Sum Path: %s = %d\n",
                    join( ' + ', @min_sum_path ), $min_sum;
        }
    }
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/dave-jacoby/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Functional Paths: Weekly Challenge #152 Pt. 1 | Committed to Memory](https://jacoby.github.io/2022/02/15/functional-paths-weekly-challenge-152.html)

Dave seemed outright perplexed by the first task, describing it as "disconcertingly easy". All I have to add is: Weird, right? I know. Disconcerting is a very good word for it. You find yourself studying the information, going over and over it, looking for the thing you missed. Sometimes, though, it just isn't there. You've killed the dragon, finished the quest and now you're left scratching your head wondering what to do next.

```perl
    my $path = join ' + ', map { min $_->@* } $triangle->@*;
    my $sum  = sum map { min $_->@* } $triangle->@*;
```

Perhaps to make up for it he does go out of his way to draw us some nice triangles, though. Which is pretty cool, actually.

```
        Input:  $triangle=[ [1], [5,3], [2,3,4], [7,1,0,2], [6,4,5,2,8] ]
        Output: 8
        Minimum Sum Path = 1 + 3 + 2 + 0 + 2 => 8

          1
         5 3
        2 3 4
       7 1 0 2
      6 4 5 2 8
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/james-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #152](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-152/james-smith)

Finally, James went as far as to provide a veritable plethora of solution options, in both the intuitive yet incorrect graph analysis and the somewhat head-scratching and yes, disconcerting pick-any-card correct interpretation.

From the former choices, we have two versions that start at a null imaginary lower sub-level, working upwards selecting the best, lowest cost route to the aggregate summed layer that is moved upwards on level at a time, discarding the largest route at each level, until at the top we have only a single level remaining.

```perl
    ## For each entry - we store tuple [ total, "path" ].
    ## We create a "row" below the triangle with "0"s and empty paths...
    ## We work back up the tree, and for each cell in the row we
    ## add the left or right sub-tree depending on which has the lowest
    ## value...

    sub min_path {
      my @p = ( [0,[]] ) x (1 + @{$_[0]});
      @p = map { $p[0][0] < $p[1][0] ? [ $_+$p[0][0], [ $_, @{$p[0][1]} ] ] : [ $_+$p[1][0], [ $_, @{$p[1][1]} ] ], (shift @p) x 0 } @{$_} for reverse @{$_[0]};
      say sprintf 'Minimum value %d: [ %s ]', $p[0][0], join ', ', @{$p[0][1]};
      $p[0][0];
    }
```

Yea I think I just had to review one solution from the misreading that solved the graph interpretation, even if that wasn't the question asked. It's a lot more interesting problem.

As far as our level-wise summing minimums go, though, James also gives us options — for either collecting the values to construct the sum as we go, or only keeping the total, or optionally employing the `sort` trick we say above to obtain a minimum without the use of a separate intermediate variable.

Here's the version that gathers the elements selected and uses `sort`, selecting the first element of the resultant list.

```perl
    sub min_path_anydir_sort {
      my($res,@order)= 0;
      (push @order, [sort {$a<=>$b} @{$_}]->[0]), $res+=$order[-1] for @{$_[0]};
      say sprintf 'Minimum value %d: [ %s ]', $res, join ', ', @order;
      $res;
   }
```





## Blogs and Additional Submissions in Guest Languages for Task 1:


[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/abigail/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/abigail/awk/ch-1.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/abigail/bash/ch-1.sh), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/abigail/c/ch-1.c), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/abigail/lua/ch-1.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/abigail/node/ch-1.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/abigail/python/ch-1.py), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/abigail/ruby/ch-1.rb)


[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/colin-crain/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/colin-crain/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[The Path in the Pyramid - Programming Excursions in Perl and Raku](https://colincrain.com/2022/02/16/the-path-in-the-pyramid/)


[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/lubos-kolouch/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/lubos-kolouch/java/ch-1.java), [Php](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/lubos-kolouch/php/ch-1.php), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/lubos-kolouch/python/ch-1.py)


[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/peter-campbell-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Lots of angles this week](https://pjcs-pwc.blogspot.com/2022/02/lots-of-angles-this-week.html)


[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/sgreen/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/sgreen/python/ch-1.py)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 152](https://dev.to/simongreennet/triangles-and-rectangles-45p8)


------------------------------------------





---

# TASK 2 {#PWC152TASK2}

# Rectangle Area
*Submitted by: Mohammad S Anwar*

You are given coordinates bottom-left and top-right corner of
two rectangles in a 2D plane.

Write a script to find the total area covered by the two rectangles.

**Example 1:**
```
        Input: Rectangle 1 => (-1,0), (2,2)
               Rectangle 2 => (0,-1), (4,4)


    Output: 22
```

**Example 2:**
```
        Input: Rectangle 1 => (-3,-1), (1,3)
               Rectangle 2 => (-1,-3), (2,2)


    Output: 25
```


## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/abigail/perl/ch-2.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/alexander-pankoff/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/athanasius/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/polettix/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/jo-37/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/laurent-rosenfeld/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/lubos-kolouch/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/peter-campbell-smith/perl/ch-2.pl),
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/pokgopun/perl/ch-2.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/robert-dicicco/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/sgreen/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/ulrich-rieke/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/wlmb/perl/ch-2.pl)

The description text for task 2 this week is delightfully terse. It sounds complete, but immediately raises questions in its brevity. However on closer reading it turns out we have all the information we need to define the challenge.

To cut to the chase: the missing pieces of information are that the rectangles are orthogonally aligned and that they may overlap.

The first follows from fact that the rectangles are described using only two points. For this to be enough information to uniquely identify all the vertices, we must be able to assume the locations of the others, which can only be done by restricting the edges to the horizontal and vertical axes. Another way to arrive at the same conclusion is to notice that the terms "bottom-left" and "top-right" cannot be assured to have meaning if we allow the rectangle to rotate, as for instance the topmost corner will alternate between being to the left or right of the geometric center.

I'll also note that should we allow the rectangles to have any orientation on the 2D plane the problems becomes, while not inpossible, *seriously* more difficult. As in outright hard. I'd probably start with a whole lot of triangles and see where that led me. It sounds really complicated, frankly.

But enough about problems we *won't* be solving today. The second inference, that the rectangles overlap, is what amused me by it's absence. If we don't allow for this then the problem becomes trivial, so of course that's the real purpose of the task, left unstated for us to figure out. Which I regard as humorously sneaky.

You may have noted by now that my sense of humor is... peculiar might be a good word for it.


There were 20 submissions for the second task this past week.

## don't look *BEHIND* the MASK, look *AT* the MASK
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/lubos-kolouch/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/sgreen/perl/ch-2.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/robert-dicicco/perl/ch-2.pl),
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/abigail/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/colin-crain/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/cheok-yin-fung/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/duncan-c-white/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/peter-campbell-smith/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/james-smith/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/dave-jacoby/perl/ch-2.pl), and
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/jo-37/perl/ch-2.pl)


Given two well-defined rectangles, orthogonally aligned but located anywhere on a plane, how can we calculate the total area occluded by both rectangles? We have two basic cases: the two can be separate and distict, or the two can overlap in some manner. There are two more cases that reduce to these as well, in that the two can share a common edge over some length, which is the same as the first as the shared edge has no area, and that one rectangle is completely enclosed by the other, which is just maximal overlap. It might, however, if we can detect this condition, be easier to calculate just the area of the enclosing rectangle and call it a day instead of considering the interior rectangle at all.

[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/lubos-kolouch/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/lubos-kolouch/java/ch-2.java), [Php](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/lubos-kolouch/php/ch-2.php), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/lubos-kolouch/python/ch-2.py)

Rectangles are shapes, and shapes are objects, so it makes a certain amount of sense to start this discussion off with a couple of object-oriented approaches.

Lubos abstracts his data through multiple structures. He formalizes his rectangles into proper `Rectangle` objects, and then in turn defines these by two `Point` objects, which are themselves specified by the four input coordinates. The Rectangle object has an `get_area()` method, computing the height times width, and also a `get_total_area()` method that, when given two rectangles, computes the overlapped area and subtracts it from the sum of the two rectangle areas considered independantly. In this way the operlapped area is only counted once.

```perl
    package Rectangle;
    use Moose;
    use List::Util qw/min max/;

    has 'left'  => ( is => 'rw', isa => 'Point' );
    has 'right' => ( is => 'rw', isa => 'Point' );

    sub get_area {
        my $self = shift;
        return abs( $self->left->x - $self->right->x ) * abs( $self->left->y - $self->right->y );
    }

    sub get_total_area {

        my ( $first, $second ) = @_;

        my $area1 = $first->get_area;
        my $area2 = $second->get_area;

        # calculate the overlapping area
        my $x_dist = min( $first->right->x, $second->right->x ) - max( $first->left->x, $second->left->x );
        my $y_dist = min( $first->right->y, $second->right->y ) - max( $first->left->y, $second->left->y );
        my $area_i = 0;
        $area_i = $x_dist * $y_dist if ( $x_dist > 0 ) and ( $y_dist > 0 );

        return $area1 + $area2 - $area_i;
    }
```


[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/sgreen/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/sgreen/python/ch-2.py)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 152](https://dev.to/simongreennet/triangles-and-rectangles-45p8)

Simon gives us a another, slightly different object abstraction , creating his `Rectangle` directly from the four given coordinates. A `Rectangle` also carries an `area()` method to calculate the height times width.

In the main package, he aquires the area of the two rectangles considered independently, and then determines the possible overlapping ranges along each of the x and y axes. If there are positive in both, then the furthest extents are then used to create a new `Rectangle`, which has an area that is subtracted from previous sum.

It's worth noting that the two rectangles can overlap in one axis and completely miss each other in the other, for instance when two equally-sized shapes are stacked vertically one above the other without touching. In that case the x-axis overlap would be maximal, but along the y-axis this would be 0, as we stated they do not meet.

```perl
    sub main {
        my $s       = shift;
        my @numbers = ( $s =~ m/(-?\d+)/g );

        # Find out the combined area of the two rectangles
        my $rect1 = Rectangle->new( @numbers[ 0 .. 3 ] );
        my $rect2 = Rectangle->new( @numbers[ 4 .. 7 ] );
        my $area  = $rect1->area + $rect2->area;

        # Calculate any overlap
        my $dx1 = max( $rect1->{x1}, $rect2->{x1} );
        my $dy1 = max( $rect1->{y1}, $rect2->{y1} );
        my $dx2 = min( $rect1->{x2}, $rect2->{x2} );
        my $dy2 = min( $rect1->{y2}, $rect2->{y2} );

        # If there is, remove that from the calculations
        if ( $dx1 < $dx2 and $dy1 < $dy2 ) {
            my $d = Rectangle->new( $dx1, $dy1, $dx2, $dy2 );
            $area -= $d->area();
        }

        say $area;
    }
```

[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/robert-dicicco/perl/ch-2.pl)

In the problem we are told that we are given two rectangles defined by four coordinates, but not actually told how this gift is to be accomplished. As really the problem could be considered not to be about that detail, we can then conclude that we already have our rectangles, and not ask too many questions about how exactly they came into our possession.

*"No officer, I've never seen those rectangles before in my life. They were sitting there when I got here".*

That's the spirit.

We'll, since they're mysteriously here and all, we might as well put them to use. Robert has decided to determine the area of their composite shape.

Now we already know they're rectangles, and we also know the area of a rectangle is its height times its width. We don't really need a proper `Rectangle` object to work with these ideas. Robert chooses not to bother with that, instead getting straight to the task at hand. All he decides he needs are two functions: `area()` to find the area of a single rectangle thing — defined as an array of four coordinates — and `overlap` which takes two rectangle array references and finds the scalar value of the overlap, if any. Should there be no overlap this value is simply 0.

As the rectangles are things, arrays of four values, they are *like* objects to some degree but are not blessed. They could well be objects but theres little no real need for them to be.

```perl
    sub area {
        my $box  = $_[0];
        my $xval = abs( @$box[0] ) + abs( @$box[2] );
        my $yval = abs( @$box[1] ) + abs( @$box[3] );
        return ( $xval * $yval );
    }

    # get area of overlapping rectangle
    sub overlap {
        my $r1      = $_[0];
        my $r2      = $_[1];
        my $x_dist  = ( min( @$r1[2], @$r2[2] ) - max( @$r1[0], @$r2[0] ) );
        my $y_dist  = ( min( @$r1[3], @$r2[3] ) - max( @$r1[1], @$r2[1] ) );
        my $overlap = 0;

        if ( $x_dist > 0 and $y_dist > 0 ) {
            $overlap = $x_dist * $y_dist;
        }

        return $overlap;
    }

    my @rec1 = ( ( -3, -1 ), ( 1, 3 ) );
    my @rec2 = ( ( -1, -3 ), ( 2, 2 ) );

    my $a = area( \@rec1 );
    my $b = area( \@rec2 );
    my $ov = overlap( \@rec1, \@rec2 );

    my $total = $a + $b - $ov;
```

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/abigail/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/abigail/awk/ch-2.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/abigail/bash/ch-2.sh), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/abigail/c/ch-2.c), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/abigail/lua/ch-2.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/abigail/node/ch-2.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/abigail/python/ch-2.py), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/abigail/ruby/ch-2.rb)

Abigail has found a decidedly minimal solution, doing away with all abstraction whatsoever by directly addressing the array of 8 coordinate values given on the input line. The 8 values represent, of course, four coordinate pairs, each pair of these describing one of two rectangles. They are delivered in a set order, and are accessed directly.

I'll let them describe their logic:

```
    We calculate the total area as the sum of the areas of each
    rectangle, minus the area of the overlap.
    The area of a rectangle is the product of the absolute difference of the
    x-coordinates and the absolute difference of the y-coordinates.
    The absolute difference of two numbers can be calculated by subtracting
    the minimum of the two from the maximum of the two.
    To calculate the area of the overlap, we multiply the overlap in the
    x-dimension, and the overlap in the y-dimension. To get the overlap
    in the x-dimension, we take the minimum of the max x-values of both
    rectangles, and subtract the maximim of the min x-values of both
    rectangles. If this value is less than 0, the overlap is 0.
    For the overlap in the y-dimension, we do the same with the y values.

    min (@F [0, 2]):  Smallest x-value for first  rectangle
    max (@F [0, 2]):  Largest  x-value for first  rectangle
    min (@F [1, 3]):  Smallest y-value for first  rectangle
    max (@F [1, 3]):  Largest  y-value for first  rectangle
    min (@F [4, 5]):  Smallest x-value for second rectangle
    max (@F [4, 5]):  Largest  x-value for second rectangle
    min (@F [6, 7]):  Smallest y-value for second rectangle
    max (@F [6, 7]):  Largest  y-value for second rectangle
```

A source reference is provided in the script.

Here's how they translated that into Perl code. It's delightful.

```perl
    use List::Util qw [min max];

    while (<>) {my @F = split; # Mimic -a

        say        +(max (@F [0, 2]) - min (@F [0, 2]))  *
                    (max (@F [1, 3]) - min (@F [1, 3]))  +
                    (max (@F [4, 6]) - min (@F [4, 6]))  *
                    (max (@F [5, 7]) - min (@F [5, 7]))  -
        max (0, min (max (@F [0, 2]),  max (@F [4, 6]))  -
                max (min (@F [0, 2]),  min (@F [4, 6]))) *
        max (0, min (max (@F [1, 3]),  max (@F [5, 7]))  -
                max (min (@F [1, 3]),  min (@F [5, 7])));

    }
```

[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/colin-crain/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/colin-crain/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Who's Masking the Mask? - Programming Excursions in Perl and Raku](https://colincrain.com/2022/02/19/whos-masking-the-mask/)

For my own solution I saw the problem in terms of Venn diagrams, or set theory. What we want is the union of the two rectangle areas. Considering the areas to be collections of square units, we wish to count each unit included exactly once and only once, even if the same unit is shared within both rectangles. The union, then, is the area occupied solely by one rectangle, plus the area occupied solely by the other, plus the area occupied by both. However without calculating the excluded areas we can also say that the overlapping area, summing the rectangles, will be counted twice. Thus if we can find out what this area is we can then subtract it from the total to find the proper result.

In other words the union is the area of shape A plus the area of shape B minus the intersection of A and B.

A ∪ B = A + B - ( A ∩ B )

I broke the problem down into four functions: `area()` to compute an area of a rectangle, `union()` to apply the equation above, and `intersect()`, which uses its helper `_overlap` to determines the positive overlap of two intervals along a numerical axis. In `intersect()` the x- and y-axis overlaps are multiplied, and if both are positive this will return the area of the intersection.

```perl
    sub area ( $rect ) {
        my $x = abs( $rect->[0][0] - $rect->[1][0] );
        my $y = abs( $rect->[0][1] - $rect->[1][1] );
        return $x * $y;
    }

    sub intersect ( $rect1, $rect2 ) {
        _overlap( [ map { $_->[0] } $rect1->@* ],       ## rect 1 x-axis
                  [ map { $_->[0] } $rect2->@* ] )      ## rect 2 x-axis
            *
        _overlap( [ map { $_->[1] } $rect1->@* ],       ## rect 1 y-axis
                  [ map { $_->[1] } $rect2->@* ] );     ## rect 2 y-axis
    }

    sub union ( $rect1, $rect2 ) {
          area ($rect1)
        + area ($rect2)
        - intersect ($rect1, $rect2) ;
    }

    sub _overlap ( $r1, $r2 ) {
    ## ranges are ordered 2-element tuples [start,end] : end > start
    ## no order is assumed between the two ranges $r1 and $r2
    ## returns absolute value of overlapping range
    ## there are five cases total:
    ##  1.  no overlap
    ##  2.  A overlaps start of B
    ##  3.  B overlaps start of A
    ##  4.  A completely encloses B
    ##  5.  B completely encloses A

        ## sort the ranges by start point (merge cases 2+3 and 4+5)
        $r1->[0] > $r2->[0] and ( $r1, $r2 ) = ( $r2, $r1 );

        $r2->[0] > $r1->[1]
            ? 0                             ## no overlap (1)
            : abs( $r2->[0]
                - ( $r2->[1] > $r1->[1]
                    ? $r1->[1]              ## intersection (2+3)
                    : $r2->[1] )  )         ## A encloses B (4+5)
    }
```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/cheok-yin-fung/perl/ch-2.pl)

CY has taken a remarkably different approach than what we've seen so far. Each dimension is occupied by four points, the limits of the two rectangles. Taking the upper and lowermost values in each of the dimensions will then describe a rectangle that circumscribes the composite shape of the two input rectangles taken together. Each face of this rectangle will contain within it two additional points along it, corresponding to the unused edges of the original shapes. Whether the rectangles overlap or not does not matter, as there will in any case be two internal points. The points may themselves lay atop each other and occupy the same coordinate but will still be considered separately.

Thus the enclosing large shape can be divided into an irregular 3 x 3 grid of smaller rectangles, each one of which can be part of one rectangle, the other, no rectangle or both. Any sub-shape not included in either one rectangle or the other is not added to the sum.

The only complication is really a simplification, for the case when one rectangle completely encloses the other. When this happens only the area of the outer rectangle is used.

```perl
    sub rect_area {
        my @A, my @B;
        # ($lA,   $bA,   $rA,   $tA,   $lB,   $bB,   $rB,   $rB)
          ($A[0], $A[1], $A[2], $A[3], $B[0], $B[1], $B[2], $B[3]) = @_;

        my @w = sort {$a<=>$b} ($A[0], $A[2], $B[0], $B[2]);
        my @h = sort {$a<=>$b} ($A[1], $A[3], $B[1], $B[3]);

        my $area = 0;

        for my $i (0..2) { for my $j (0..2) {
            my $inA =    ($w[$j] >= $A[0]) && ($A[2] >= $w[$j+1])
                      && ($h[$i+1] <= $A[3]) && ($A[1] <= $h[$i]);

            my $inB =    ($w[$j] >= $B[0]) && ($B[2] >= $w[$j+1])
                      && ($h[$i+1] <= $B[3]) && ($B[1] <= $h[$i]);

            if ($inA || $inB) {
                $area += ($w[$i+1]-$w[$i])*($h[$j+1]-$h[$j]);
            }
        }}

    =pod
        Except the case that one rectangle is inside the other rectangle,
        the two rectangles can be enscribed into a larger rectangle
        Dividing the large rectangle into 9 small rectangular regions,
        then check one by one if a small region is inside rect A or rect B.
        If yes, add the area of the small region into $area.
    =cut

        return $area;
    }
```

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/duncan-c-white/perl/ch-2.pl)

Duncan has decided he wants his input configured as four comma-separated coordinate pairs, two for each rectangle separated by spaces. These are assigned to variables `$x` and `$y` sub-named 1 through 4. The rectangles are ordered, and their points reassigned so they read left-to-right, which makes tracking the overlap considerably less complicated.

```perl
    # make sure that x1 <= x2. y1 <= y2, x3 <= x4, y3 <= y4
    ($x1,$x2) = ($x2,$x1) if $x1 > $x2;
    ($y1,$y2) = ($y2,$y1) if $y1 > $y2;
    ($x3,$x4) = ($x4,$x3) if $x3 > $x4;
    ($y3,$y4) = ($y4,$y3) if $y3 > $y4;

    my $r1area = ($x2-$x1)*($y2-$y1);
    my $r2area = ($x4-$x3)*($y4-$y3);
    say "r1 area: $r1area, r2 area: $r2area" if $debug;

    # overlap:
    my $oxd = min($x2,$x4) - max($x1,$x3);
    my $oyd = min($y2,$y4) - max($y1,$y3);
    my $oarea = ($oxd>0 && $oyd>0) ? $oxd * $oyd : 0;

    say "overlapping area: $oarea" if $debug;

    my $total = $r1area + $r2area - $oarea;

    say $total;
```

[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/peter-campbell-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Lots of angles this week](https://pjcs-pwc.blogspot.com/2022/02/lots-of-angles-this-week.html)

Peter stores his rectangles as nested hashes, which makes the assignment of coordinates easy to follow.

Well, that and the nicely commented code, which is always welcome from my end. I think the action is well and clearly laid out so I'll just leave this here:

```perl
       # Assume no overlap for now
       $area = area('one') + area('two');

       # The rectangles may overlap if the bottom of rect1 is below the top of rect2
       # and the top of rect1 is above the bottom of rect2
       $vert_overlap = $rect{one}{b} < $rect{two}{t} && $rect{one}{t} > $rect{two}{b};

       # They may also overlap if the right of rect1 is to the right of the left of rect2
       # and the left of rect1 is to the left of the right side of rect2
       $horiz_overlap = $rect{one}{r} > $rect{two}{l} && $rect{one}{l} < $rect{two}{r};

       # They do overlap if both of these conditions are true
       if ($vert_overlap && $horiz_overlap) {

           # ... and the overlap area is bounded by the greater of the bottoms,
           # the lesser of the tops, the leftmost of the rights and the rightmost
           # of the lefts
           $rect{overlap}{b} = $rect{one}{b} > $rect{two}{b} ? $rect{one}{b} : $rect{two}{b};
           $rect{overlap}{t} = $rect{one}{t} > $rect{two}{t} ? $rect{two}{t} : $rect{one}{t};
           $rect{overlap}{l} = $rect{one}{l} > $rect{two}{l} ? $rect{one}{l} : $rect{two}{l};
           $rect{overlap}{r} = $rect{one}{r} > $rect{two}{r} ? $rect{two}{r} : $rect{one}{r};

           $area -= area('overlap');
       } else {
           say qq[   No overlap];
       }

       say qq[Output: $area];
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/james-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #152](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-152/james-smith)

James is back with a brutally-compressed block of... symbols of some sort.

Let's look at the lines:
 1. (l)eft, (b)ottom, (r)ight, and (t)op, in two flavors, lower- and UPPERCASE
 2. overlap range along the horizontal axis
 3. overlap range along the vertical axis
 4. return rectangle area sum minus overlap area, but only if both overlaps are positive.

 The conditionals coupled to the assignment in line 4 will return 0 if they fail, so in the case of a *negative* overlap — that is the rectangles are separated and do not meet by some distance, nothing is subtracted.

 It could be construed as a little intimidating, but dissects nicely.

```perl
    sub my_area {
      my ($l,$b,$r,$t,$L,$B,$R,$T) = map { @{$_} } @_;
      my $w3 = (my $w1=$r-$l)+(my $w2=$R-$L)+($l<$L?$l:$L)-($r<$R?$R:$r);
      my $h3 = (my $h1=$t-$b)+(my $h2=$T-$B)+($b<$B?$b:$B)-($t<$T?$T:$t);
      $w1*$h1 + $w2*$h2 - ($w3>0 && $h3>0 && $w3*$h3);
    }
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/athanasius/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/athanasius/raku/ch-2.raku)

One quality of the monk's submissions is their generally extensive notes to their process. Here they have included an ASCII diagram as a visual aid, something I considered doing in the introduction but apparently never got around to. In any case it's welcome here, along with a detailed explanation of the logic behind selecting out the overlap based on the horizontal and vertical ranges.

```
    Consider 2 rectangles:

        +------------a1
        |             |
        |       c-----K--------b1
        |       |     |         |
        a0------J-----d         |
                |               |
                |               |
                b0--------------+

    The overlapping area, rectangle cJdK, has corners (J, K) where:
        the x-coordinate of J is the larger  of a0x and b0x;
        the y-coordinate of J is the larger  of a0y and b0y;
        the x-coordinate of K is the smaller of a1x and b1x; and
        the y-coordinate of K is the smaller of a1y and b1y.

    This holds true for all configurations of the 2 rectangles, provided that K is
    above and to the right of J; otherwise, the rectangles do not overlap.

    The combined area is the sum of the areas of the 2 rectangles less the area of
    their overlap (if any).
```

With that explanation out in front, following the steps in the implementation is quite straightforward.

```perl
    MAIN:
    {
        my ($a0x, $a0y, $a1x, $a1y, $b0x, $b0y, $b1x, $b1y) = parse_command_line();

        print "Input:  Rectangle 1 => ($a0x, $a0y), ($a1x, $a1y)\n";
        print "        Rectangle 2 => ($b0x, $b0y), ($b1x, $b1y)\n";

        my $area1 = ($a1x - $a0x) * ($a1y - $a0y);
        my $area2 = ($b1x - $b0x) * ($b1y - $b0y);

        # Common/shared rectangle
        my $c0x   = max( $a0x, $b0x );
        my $c0y   = max( $a0y, $b0y );
        my $c1x   = min( $a1x, $b1x );
        my $c1y   = min( $a1y, $b1y );
        my $area3 = ($c1x > $c0x &&  $c1y > $c0y) ?
                    ($c1x - $c0x) * ($c1y - $c0y) : 0;

        my $total =  $area1 + $area2 - $area3;

        print "\nOutput: $total\n";

        print "\nExplanation\n-----------\n",
                "The rectangles have areas of $area1 and $area2, ",
                "respectively,\n",
                "and a shared (i.e., overlapping) area of $area3\n",
                "Total area is $area1 + $area2 - $area3 = $total\n";
    }
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/jo-37/perl/ch-2.pl)

Finally we'll end with a look at Jorg's submission, because, well, it's different. Not completley different, mind you, as it shares a basic analysis with CY's solution above.

In CY's breakdown, if you recall, we circumscribed the compound shape of the two possibly-overlapping rectangles with a new outer boundary rectangle, then sliced this along the remaining interior edges to form an irregular lattice of 9 sub-spaces.

For any of you finding that description hard to follow, Jorg has provided a reference using box-drawing characters:

```
    Original rectangles in bold lines within the surrounding rectangle and
    the product of the subrectangle's area and the OR'ed characteristic
    functions inside the subrectangle.

    4 ┌───┲━━━━━━━┯━━━━━━━┓
      │   ┃       │       ┃
    3 │ 0 ┃   4   │   4   ┃
      │   ┃       │       ┃
    2 ┢━━━╋━━━━━━━╅───────┨
      ┃   ┃       ┃       ┃
    1 ┃ 2 ┃   4   ┃   4   ┃
      ┃   ┃       ┃       ┃
    0 ┡━━━╋━━━━━━━╃───────┨
      │ 0 ┃   2   │   2   ┃
    -1└───┺━━━━━━━┷━━━━━━━┛
     -1   0   1   2   3   4
```

See it now?

What Jorg has done next is to generalize the process to an arbitrary number of rectangles.

```
    Generalizing the task to N rectangles.
    These rectangles, given by their bottom left and upper right vertices,
    are contained within a unique minimal rectangle. This outer rectangle
    may be divided into (N + 1)² (possibly empty) subrectangles given by
    all possible x and y coordinates from the original rectangles.  Each
    of these subrectangles has a clear relation to any of the original
    rectangles: either they are disjoint or the subrectangle is a subset
    of the original.  In other words: the characteristic function of any
    given rectangle never changes inside such subrectangle. For each
    subrectangle, its center coordinates and its area is recorded.  Then
    the sum is taken over the areas of subrectangles having their center
    within any of the original rectangles.  See picture [ed note: above].
    This is essentially the surface integral of the OR'ed characteristic
    functions over the xy-plane.
```

Ok that's getting a little hairy again, I admit. The "characteristic function" is coderef to an anonymous function closed around the boundary points of a specific rectangle. Handing this a different rectangle will return a 1/0 evaluation of whether it overlaps with the rectangle defined in the closure.

If a rectangle overlaps with any other rectangle then it's part of the larger shape and its area is added to the total. Otherwise its area is kept to 0 when all the subrectangles are summed.

```perl
    # Find the total area of N (possibly overlapping) rectangles.
    sub rectangle_area (@vertices) {
        # Find grid subrectangles: center and area.
        my $subrect = subrect(@vertices);
        # Create characteristic functions for all given rectangles.
        my @chi = pairmap {gen_chi($a, $b)} @vertices;
    say $_ for @chi;
    say $chi[0]->($b->[0]->@*);

        # Get the sum of subrectangle areas within original rectangles.
        reduce {$a + $b->[1] * any {$_->($b->[0]->@*)} @chi} 0, @$subrect;
    }

    # Generate the characteristic function for a rectangle with given bottom
    # left and top right vertices.
    sub gen_chi ($bl, $tr) {
        sub ($x, $y) {
            $bl->[0] <= $x &&
            $x <= $tr->[0] &&
            $bl->[1] <= $y &&
            $y <= $tr->[1];
        }
    }

    # For N given rectangles, record center coordinates and area for all
    # subrectangles build from the rectangles' coordinate grid.
    sub subrect (@vertices) {
        my @x = sort {$a <=> $b} map $_->[0], @vertices;
        my @y = sort {$a <=> $b} map $_->[1], @vertices;

        gather {
            for (my $ix = 0; $ix < $#x; $ix++) {
                my $dx = $x[$ix + 1] - $x[$ix];
                for (my $iy = 0; $iy < $#y; $iy++) {
                    my $dy = $y[$iy + 1] - $y[$iy];
                    take [[$x[$ix] + $dx / 2, $y[$iy] + $dy / 2],
                        $dx * $dy];
                }
            }
        }
    }
```



## Blogs and Additional Submissions in Guest Languages for Task 2:


[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/alexander-pankoff/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Challenge 152 Task #2 - Untangling the rects](https://pankoff.net/pages/perl-weekly-challenge/challenge-152-task-2.html)


[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/dave-jacoby/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Think Inside The Box: Weekly Challenge #152 Pt. 2 | Committed to Memory](https://jacoby.github.io/2022/02/16/think-inside-the-box-weekly-challenge-152-pt-2.html)


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC152 - Rectangle Area - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/02/17/pwc152-rectangle-area/)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/laurent-rosenfeld/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/laurent-rosenfeld/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 152: Triangle Sum Path](http://blogs.perl.org/users/laurent_r/perl-weekly-challenge-152-triangle-sum-path.html)


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/roger-bell-west/javascript/ch-2.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/roger-bell-west/kotlin/ch-2.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/roger-bell-west/lua/ch-2.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/roger-bell-west/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/roger-bell-west/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 152: Triangles, Rectangles, and Objects](https://blog.firedrake.org/archive/2022/02/The_Weekly_Challenge_152__Triangles__Rectangles__and_Objects.html)


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/ulrich-rieke/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/ulrich-rieke/cpp/ch-2.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/ulrich-rieke/haskell/ch-2.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/ulrich-rieke/raku/ch-2.raku)


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-152/wlmb/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 152 – W. Luis Mochán](https://wlmb.github.io/2022/02/14/PWC152/)


------------------------------------------





---

<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>

<center>
<h1 id="PWC152BLOGS">_________ THE BLOG PAGES _________</h1>
</center>


---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, by some miracle I somehow continue to maintain my bearings.**

**Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your Unquenchable *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC152BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *FOLLOW* these *BLOG* *LINKS*:

**( ...*don't think, trust your training, you're in the zone, just do it ...* )**


**Alexander Pankoff**

 * [Challenge 152 Task #1 - Summing up minimums](https://pankoff.net/pages/perl-weekly-challenge/challenge-152-task-1.html) ( *Perl* )
 * [Challenge 152 Task #2 - Untangling the rects](https://pankoff.net/pages/perl-weekly-challenge/challenge-152-task-2.html) ( *Perl* )

**Arne Sommer**

 * [Triangular Rectangle with Raku](https://raku-musings.com/triangular-rectangle.html) ( *Raku* )

**Colin Crain**

 * [The Path in the Pyramid - Programming Excursions in Perl and Raku](https://colincrain.com/2022/02/16/the-path-in-the-pyramid/) ( *Perl & Raku* )
 * [Who's Masking the Mask? - Programming Excursions in Perl and Raku](https://colincrain.com/2022/02/19/whos-masking-the-mask/) ( *Perl & Raku* )

**Dave Jacoby**

 * [Functional Paths: Weekly Challenge #152 Pt. 1 | Committed to Memory](https://jacoby.github.io/2022/02/15/functional-paths-weekly-challenge-152.html) ( *Perl* )
 * [Think Inside The Box: Weekly Challenge #152 Pt. 2 | Committed to Memory](https://jacoby.github.io/2022/02/16/think-inside-the-box-weekly-challenge-152-pt-2.html) ( *Perl* )

**Flavio Poletti**

 * [PWC152 - Triangle Sum Path - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/02/16/pwc152-triangle-sum-path/) ( *Perl & Raku* )
 * [PWC152 - Rectangle Area - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/02/17/pwc152-rectangle-area/) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #152](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-152/james-smith) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 152: Triangle Sum Path](http://blogs.perl.org/users/laurent_r/perl-weekly-challenge-152-triangle-sum-path.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 152: St. Valentine's sums and triangles – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/02/14/PerlWeeklyChallenge152.html#task1) ( *Raku* )

**Peter Campbell Smith**

 * [Lots of angles this week](https://pjcs-pwc.blogspot.com/2022/02/lots-of-angles-this-week.html) ( *Perl* )

**Roger Bell_West**

 * [RogerBW's Blog: The Weekly Challenge 152: Triangles, Rectangles, and Objects](https://blog.firedrake.org/archive/2022/02/The_Weekly_Challenge_152__Triangles__Rectangles__and_Objects.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 152](https://dev.to/simongreennet/triangles-and-rectangles-45p8) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 152 – W. Luis Mochán](https://wlmb.github.io/2022/02/14/PWC152/) ( *Perl* )
