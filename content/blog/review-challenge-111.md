---
author:       Colin Crain
date:         2021-05-24T00:00:00
description:  "Colin Crain › Perl Weekly Review #111"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #111"
image:        images/blog/p5-review-challenge-111.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-110/).* )

Welcome to the Perl review for **Week 111** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-111/) or the summary [**recap**](/blog/recap-challenge-111/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC111TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC111TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC111BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC111TASK1}

# Search Matrix
**Submitted by: Mohammad S Anwar**<br>
You are given 5×5 matrix filled with integers such that each row is sorted from left to right and the first integer of each row is greater than the last integer of the previous row.

Write a script to find a given integer in the matrix using an efficient search algorithm.

**Example**
```
    Matrix: [  1,  2,  3,  5,  7 ]
            [  9, 11, 15, 19, 20 ]
            [ 23, 24, 25, 29, 31 ]
            [ 32, 33, 39, 40, 42 ]
            [ 45, 47, 48, 49, 50 ]

    Input:  35
    Output: 0     since it is missing in the matrix

    Input:  39
    Output: 1     as it exists in the matrix
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/abigail/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/adam-russell/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/colin-crain/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/dave-jacoby/perl/ch-1.pl),
[**David Schwartz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/dms061/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/jo-37/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/laurent-rosenfeld/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/perlboy1967/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/pete-houston/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/sgreen/perl/ch-1.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/stuart-little/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/ulrich-rieke/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/wlmb/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/wanderdoc/perl/ch-1.pl)


There were 22 submission scripts for the first task this past week. The solutions on those pages were manyfold.

I think the real crux of this challenge hangs on the practical distinction of "an efficient search algorithm". The thing is, for a 5×5 matrix it's not at all obvious what might that might be. A binary search comes to mind, but for such a small data set flattening the matrix to a list and using Perl's highly tuned `grep` might well win out through simplicity. It doen't, I checked, but that's beside the point.

This uncertainly was reflected in the wide range of creative approaches and techniques represented. Consequently this posed unprecedented challenges to categorization.

In the first pass it appears that among the submissions from 22 members of the team we have at least 25 distinct, separate variations on methodology. And we're not counting different implementations, but completely different algorithms using different functions in different ways. James alone gave us 16. Fortunately for me there was some overlap there and with careful consideration I've honed that total down to 9 basic classes of operation, which is still an unusually large number.

We'll have a look at each in turn, but I'm obviously going to need to keep the overviews more broad than usual. We're burning daylight, best get to it...

## SCAN THE MATRIX
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/dave-jacoby/perl/ch-1.pl), and
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/jo-37/perl/ch-1.pl)

Perhaps the simplest plan would be to look at all the values and see it they match. There are, after all, only 25 values and a systematic traversal is very clean.

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/dave-jacoby/perl/ch-1.pl)

Dave delivered us a quartet of solutions, but was the only member to provide one using two iterators to traverse every position, so here it is. It's easy, obviously bug-free and quick to bang out, which are all virtues in the right context.

```perl
    sub is_in_matrix_0 ( $matrix, $input ) {
        my $hash = {};
        for my $row ( $matrix->@* ) {
            for my $v ( $row->@* ) {
                return 1 if $v == $input;
            }
        }
        return 0;
    }
```

It's worth noting that Dave benchmarked his results and this method was *not* on the bottom of the list. So not the worst plan, all-in-all.

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/jo-37/perl/ch-1.pl)

In contrast, we have another version of directly scanning the matrix to see if the value is present. Only this one is performed by the PDL on the underlying C-array, or however exactly that data structure is stored. It's also remarkably simple on the surface.

```perl
    use PDL;
    my $pdl = long $m;      ## $m is our 2-d Perl array as reference

    sub scan_matrix($pdl, $value) {
        any $pdl == $value;
    }
```




## HASH THE ARRAY AND CHECK THE KEYS
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/abigail/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/dave-jacoby/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/e-choroba/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/james-smith/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/pete-houston/perl/ch-1.pl), and
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/roger-bell-west/perl/ch-1.pl)

A hash lookup occurs in linear time, making the "search" portion of this technique extremely efficient. Constructing the hash, on the other hand, creates a situation not unlike just straight searching for the target, as far as complexity.


[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/e-choroba/perl/ch-1.pl)

Choroba provides a brace of solutions, one of which is a hash lookup. One notable aspect of this method is the use of hash slices in assignment to very quickly load the hash with undef values, five keys at a time. Assignment to a slice is an awesome tool.

```perl
    sub search_matrix_hash {
        my ($matrix, $value) = @_;
        my %values;
        @values{ map @$_, @$matrix } = ();
        return exists $values{$value} ? 1 : 0
    }
```

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/abigail/perl/ch-1.pl)

**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/abigail/awk/ch-1.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/abigail/bash/ch-1.sh), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/abigail/c/ch-1.c), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/abigail/lua/ch-1.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/abigail/node/ch-1.js), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/abigail/pascal/ch-1.p), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/abigail/python/ch-1.py), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/abigail/ruby/ch-1.rb)

Here is another characteristically terse example of the technique from Abigail. There needn't be much to it.

```perl
    my %matrix;
    @matrix {<> =~ /-?[0-9]+/g} = () for 1 .. $MATRIX_SIZE;

    chomp, say exists $matrix {$_} || 0 while <>;
```


[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/pete-houston/perl/ch-1.pl)

Pete chooses to use the hash values to store the location data for the elements, which are optionally reported for a positive outcome.

```perl
    if ($ints->{$target}) {
        print "1\n";
        print "Found at $ints->{$target}\n" if $verbose;
    } else {
        print "0\n";
    }

    ...

    my %input;
    for my $r (1 .. 5) {
    	my @ints = (<$fh> =~ /(-?[0-9]+)/g);
    	for my $c (1 .. 5) {
    		$input{$ints[$c-1]} = "row $r, column $c";
    	}
    }
    return \%input;
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/roger-bell-west/perl/ch-1.pl)

**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/roger-bell-west/rust/ch-1.rs)

In a fine example of why categorizing this task was so difficult, Roger's algorithm sequentially looks through the rows first and determines where the target may be located. After this step the row is hashed to perform the final lookup.

```perl
    sub sm {
      my ($matrix,$search)=@_;
      my $f=0;
      foreach my $row (@{$matrix}) {
        if ($row->[0] <= $search) {
          if ($row->[-1] >= $search) {
            if (exists {map {$_ => 1} @{$row}}->{$search}) {
              $f=1;
            }
            last;
          }
        } else {
          last;
        }
      }
      return $f;
    }
```

It does, however, provide a nice segue into our next segment.


## ITERATE FIRST ROW-WISE THEN AGAIN OVER THE COLUMNS
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/colin-crain/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/duncan-c-white/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/james-smith/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/wanderdoc/perl/ch-1.pl)

One quality specified in the description is that all the elements are ordered, left-to-right and top-to-bottom. Thus we can use this knowledge to quickly skip over rows to find one possibly containing the target value, and then continue the search only in that row.

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/jaldhar-h-vyas/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/jaldhar-h-vyas/raku/ch-1.raku)

Jaldhar looks to the last value in ascending rows, determining the value must be located in the first row found with a last element greater than the target. From there he iterates across the row and if the value is found he returns 1.

```perl
    for my $i (0 .. scalar @matrix - 1) {
        if ($input <=  $matrix[$i][-1]) {
            for my $j (0 .. scalar @{$matrix[$i]} - 1) {
                if ($matrix[$i][$j] == $input) {
                    $output = 1;
                    last;
                }
            }
            last;
        }
    }
```


[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/wanderdoc/perl/ch-1.pl)

In the first part of the doctor's code, we quickly skip over rows where the lower bound is greater than the target value. The second case handles a search in the last row.

```perl
     my $row = 0;
     my $col = 0;

     while ($aoa->[$row][$col] < $num )
     {
          $row++;
          $row-- and last if $row > $#$aoa;
          return 1 if $aoa->[$row][$col] == $num;
     }

     if ( $aoa->[$row][$col] > $num )
     {
          while ( $aoa->[$row-1][$col] < $num )
          {
               $col++;
               return 0 if $col > $#{$aoa->[$row-1]};
          }
          return 1 if $aoa->[$row-1][$col] == $num;
     }

     else
     {
          while ( $aoa->[$row][$col] < $num )
          {
               $col++;
               return 0 if $col > $#{$aoa->[$row-1]};
          }
          return 1 if $aoa->[$row][$col] == $num;
     }
```

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/colin-crain/perl/ch-1.pl)

**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/colin-crain/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/colin-crain/raku/ch-1.raku)

I went into this challenge with a working theory that the computational overhead from a binary search would outweigh the marginal gains in efficiency for a 5×5 matrix. I came up with 4 strategies that I tuned as tightly as I could:
1. grep a flat list, for producing minmal code
2. iterate over first rows then columns, this solution
3. a binary search tuned to home in on the result as quickly as possible
4. a simplified binary search dividing the rows search space in half and working out

This one won hands down. Everything is inlined and designed with logical conditionals that fall through rather than branch. The best efficiency for this task, it turns out, is to not actually execute code. Oh, and I can't remember why I wrote the postfix dereferencing like that. Perhaps I was in a mood.

```perl
    sub search_rows ( $val, $row = 0) {                         ## [2]
        return 0 if $val > $mat->[-1]->[-1];

        $row++ while ($val > $mat->[$row]->[-1]);

        return 1 if (    $val == $mat->[$row]->[0]
                      || $val == $mat->[$row]->[1]
                      || $val == $mat->[$row]->[2]
                      || $val == $mat->[$row]->[3]
                      || $val == $mat->[$row]->[4] );
        return 0;
    }
```
## FLATTEN THE ARRRY AND GREP
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/colin-crain/perl/ch-1.pl), and
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/james-smith/perl/ch-1.pl)

The two dimensions of the matrix complicate the search pattern, so several approaches chose to reduce this first to a linear structure that could be more easily processed.

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/james-smith/perl/ch-1.pl)

James gave us many solutions that fateful day, but they started with this simple idea. Ok, maybe that's more poetic than true, but here ya go:

```perl
    sub find_val_grep_map {
      my($v,$m)=@_;
      return 0 + grep { $_ == $v } map { @{$_} } @{$m};
    }
```

Presented for completeness.

## FLATTEN THE ARRAY AND PERFORM A BINARY SEARCH
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/cheok-yin-fung/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/perlboy1967/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/sgreen/perl/ch-1.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/stuart-little/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/ulrich-rieke/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/wlmb/perl/ch-1.pl)

A binary search is the go-to algorithm to efficiently search a linear array of sorted values, but the given matrix is multidimensional. Many solutions resolved this conflict by flattening the matrix before performing a binary search.

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/sgreen/perl/ch-1.pl)

If the input is on the command line, it's already written as a linear array of sorts, right? So all we need to do is parse it with a regular expression to convert it into a 1-dimensional form. From there low and high bounds are established and the algorithm follows, where the midpoint of the range becomes either the low or high bound of the next search iteration.

```perl
    my @matrix = ( join( ' ', @_ ) =~ /(\d+)/g );

    my $low    = 0;
    my $high   = $#matrix;
    my $checks = 0;
    my $found  = 0;

    while (1) {
        ++$checks;

        # Find the middle value (round down if not even)
        my $index = int( ( $low + $high ) / 2 );
        my $value = $matrix[$index];

        if ( $matrix[$index] == $target ) {
            # We've found the target number
            $found = 1;
            last;
        }
        elsif ( $low >= $high ) {
            # The number doesn't exist
            last;
        }
        elsif ( $value > $target ) {
            $high = $index - 1;
        }
        else {
            $low = $index + 1;
        }

    }
```

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/ulrich-rieke/perl/ch-1.pl)

**additional languages:**
[C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/ulrich-rieke/c/ch-1.c), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/ulrich-rieke/raku/ch-1.raku)

Ulrich also follows this line of reasoning, accepting five values at a time for input, and then immediately pushing the values to a flattened list. After that, the binary search is straightforward:

```perl
    my $lower = 0 ;
    my $upper = scalar( @matrix ) - 1 ;
    my $middle = int ( ($lower + $upper) / 2 ) ;
    do {
      if ( $number > $matrix[ $middle ] ) { #search the right half
          $lower = $middle ;
      }
      if ( $number < $matrix[ $middle ] ) {#search the left half
          $upper = $middle ;
      }
      if ( $number != $matrix[ $middle ] ) {#we might have found the number!
          $middle = int ( ($lower + $upper) / 2 ) ;
      }
    } until ( $number == $matrix[ $middle ] or ( $upper - $lower) == 1 ) ;
    if ( $number == $matrix[ $middle ] ) {
      say "1 as it exists in the matrix" ;
    }
    if ( ($upper - $lower) == 1 ) {
      if ( $matrix[ $lower ] == $number or $matrix[ $upper ] == $number ) {
          say "1 as it exists in the matrix" ;
      }
      else {
          say "0 since it is missing in the matrix" ;
      }
    }
```


[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/perlboy1967/perl/ch-1.pl)

There's nothing, however, that mandates we roll our own search routine. Niels reaches out to `List::BinarySearch` for its `binsearch_pos()` routine, providing a very compact answer.

```perl
    use List::BinarySearch qw(binsearch_pos);

    sub searchMatrix(\@$) {
      my ($arM,$i) = @_;

      # Flatten matrix to ordered list
      my @l = map {@$_} @$arM;

      return ($l[ binsearch_pos {$a<=>$b} $i, @l ] == $i ? 1 : 0);
    }
```

[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/stuart-little/perl/ch-1.pl)

**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/stuart-little/haskell/ch-1.hs), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/stuart-little/node/ch-1.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/stuart-little/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/stuart-little/raku/ch-1.p6)

Stuart too uses a module, this time `List::AllUtils` with its `bsearchidx()` routine. To do the flattening, there's a nice use of `reduce()` as well, from the same package.

```perl
    sub searchMatrix($needle,$mat) {
        my $flat = reduce {my @a = (@$a, @$b); \@a} @$mat;
        return ((bsearchidx {$_ - $needle} @$flat) >= 0) ? (1) : (0);
    }
```



[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/cheok-yin-fung/perl/ch-1.pl)

CY has a unique take on her binary search implementation. The dimensions of the matrix are quite specifically fixed in the challenge, so we can start with an unrolled list of halving values: +/- 12,6,3,2,1,1 that can be used to quickly calculate the amount to shrink the search space. It's a novel approach and we'll see further specific optimizations geared toward the 5×5 dimensions given as we look at the examples ahead.

The algorithm ends up remarkably compact, but it's still a binary search.

```perl
    my @list25;
    push @list25, $_->@* foreach (@{$matrix});

    my @my_seq = (12,6,3,2,1,1);
    my $h = shift @my_seq;

    for (my $i=0; $i < scalar @my_seq ;$i++) {
        if ($target > $list25[$h]) {
            $h += $my_seq[$i];
        } elsif ($target < $list25[$h]) {
            $h -= $my_seq[$i];
        } else {               # $target == $list25[$h]
            print "1\n";
            exit;
        }
    }
```


## A BINARY SEARCH OVER THE ROWS INSTEAD
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/mohammad-anwar/perl/ch-1.pl)

A binary search will locate a specific value in a 5-element list in a maximum of 3 tries, with an average of 2.2, a marked improvement over a maximum 5 and an average of 3. There's considerable overhead in flattening the list, so why not apply the improved search to the rows?

[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/mohammad-anwar/perl/ch-1.pl)

In the classic binary search lower and upper bounds are established on the search space.
The search space is bisected, and depending on the value at the midpoint, the search space is reduced to either the space above the bisection or the space below it.

Here Mohammad applies this search to each row in turn, iterating upwards through the rows until the lower bound of the row exceeds the target. This locates the last row the target may occupy, and if the target is not yet found it will not be.

```perl
    foreach my $row (@matrix) {
        ($row->[0] > $search) and last;
        $found = binary_search($row, $search);
        $found and last;
    }

    sub binary_search {
        my ($row, $target) = @_;

        my $l = 0;
        my $r = @$row - 1;
        while ($l <= $r) {
            my $m = floor(( $l + $r ) / 2);
            if ($row->[$m] < $target) {
                $l = $m + 1;
            }
            elsif ($row->[$m] > $target) {
                $r = $m - 1;
            }
            else {
                return $m;
            }
        }

        return 0;
    }
```


## BINARY SEARCH ON ROWS THEN BINARY SEARCH ON COLUMNS
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/adam-russell/perl/ch-1.pl),
[**David Schwartz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/dms061/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/e-choroba/perl/ch-1.pl), and
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/james-smith/perl/ch-1.pl)

A quick binary search algorithm is easy to implement, so we can simply make two searches, on to find the row potentially holding the target, and another second search to look within the row.

[**David Schwartz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/dms061/perl/ch-1.pl)

David presents us with an uncommon and very perlish way to do a binary search, using array slices. Array slices may not be unique to perl, but they do provide a very clean way to get the job done. Here a pair of functions first hones down the search space to a specific row, then refines that row to a specific value, if found.

```perl
    sub binary_search {
        use integer;
        # 2 args, 1 scalar and an array
        # however, perl puts them all into 1 array, @_
        # so we shift the value param off
        # and treat @_ as the array
        #my $val = shift;
        my ($val, @arr) = @_;
        return 0 if @arr == 0;
        if(@arr == 1){
            return 1 if $arr[0] == $val;
            return 0;
        }
        my $mid = $#arr/2;
        return binary_search ($val, @arr[0..$mid-1]) if $val < $arr[$mid];
        return binary_search ($val, @arr[$mid+1..$#arr]) if $val > $arr[$mid];
        return 1;
    }

    sub binary_search_2d {
        use integer;
        # 2 args, val to search for and array of refs
        my ($val, @arrs) = @_;

        # no empty array? Value can't be present
        return 0 if @arrs == 0;

        #find the middle array (will work if there is only 1 array present)
        my $mid = $#arrs/2;
        #extract the array for easier usage
        my @mid_arr = @{$arrs[$mid]};
        # no elts in middle array, ret 0
        return 0 if @mid_arr == 0;
        # check if $val is out of range, we can't binary search if it isn't there
        if($val < $mid_arr[0]){
            return binary_search_2d($val, @arrs[0..$mid-1]);
        }elsif($val > $mid_arr[$#mid_arr]){
            return binary_search_2d($val, @arrs[$mid+1..$#arrs]);
        }
        # $val may be in array, so we can search for it now
        return binary_search $val, @mid_arr;
    }
```


[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/adam-russell/perl/ch-1.pl)

Adam also uses array slices to perform his search. In the first phase the middle row is selected, and, depending on the relationship between the first element in the row and the target value, the routine is called recursively with either the array slice for rows above the value or the rows below. Once the correct row is located another similar routine, `row_search()`, recurses with slices of the row in question. Here's `matrix_search()`, the first pass over the data:

```perl
    sub matrix_search{
        my($matrix, $search) = @_;
        unless(@{$matrix} == 1){
            my $half = int(@{$matrix} / 2);
            if($matrix->[$half]->[0] > $search){
                my @matrix_reduced = @{$matrix}[0 .. $half - 1];
                matrix_search(\@matrix_reduced, $search);
            }
            elsif($matrix->[$half]->[0] < $search){
                my @matrix_reduced = @{$matrix}[$half .. @{$matrix} - 1];
                matrix_search(\@matrix_reduced, $search);
            }
            elsif($matrix->[$half]->[0] == $search){
                return true;
            }
        }
        else{
            return row_search($matrix->[0], $search);
        }
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/james-smith/perl/ch-1.pl)

Do you enjoy listening to [static on the radio](https://www.youtube.com/watch?v=q2DyPVDIpTM)? I kid, I kid. But then again, I'm sure some of you might be shocked by some of the *other* music I listen to, which I affectionately call "horrible noise". My own friends cringe in horror at some of it. I am nothing if not a man of enigmatic tastes, and I love the manyfold efforts of James to nail down the meaning of "efficiency" in the context of this challenge.

This is one of the faster ones, albeit a bit... noisy. Staticky, you might say. See if you can spot the binary searches.

```perl
    sub find_val_general_dnf {
      my($v,$m)=@_;
      return 0 if$v<$m->[0][0]||$v>$m->[-1][-1];
      my($n,$l,$r)=(0,0,@{$m}-1);
      $v>$m->[$n=($l+$r)>>1][-1]?($l=$n+1):($r=$n)while$r!=$l;
      ($l,$r)=(0,@{$m=$m->[$l]}-1);
      ($v==$m->[$n=($l+$r)>>1])?(return 1):$v>$m->[$n]?($l=$n+1):($r=$n-1)while$l<=$r;
      return 0;
    }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/e-choroba/perl/ch-1.pl)

After James, we revisit Choroba's submissions with this pair of easy-on-the-eyes binary searches:

```perl
    sub search_matrix_bin {
        my ($matrix, $value) = @_;
        my ($y0, $y1) = (0, $#$matrix);

        while ($y0 < $y1) {
            my $y = int(($y0 + $y1) / 2);
            if ($matrix->[$y][0] > $value) {
                $y1 = $y - 1;
            } elsif ($matrix->[$y][-1] < $value) {
                $y0 = $y + 1;
            } else {
                $y1 = $y;
            }
        }
        return 0 if $y1 < $y0;

        my ($x0, $x1) = (0, $#{ $matrix->[$y0] });
        while ($x0 < $x1) {
            my $x = int(($x0 + $x1) / 2);
            if ($matrix->[$y0][$x] > $value) {
                $x1 = $x - 1;

            } elsif ($matrix->[$y0][$x] < $value) {
                $x0 = $x + 1;

            } else {
                $x1 = $x;
            }
        }
        return 0 if $x1 < $x0;

        return $matrix->[$y0][$x0] == $value ? 1 : 0;
    }
```


## HALVE AND MOVE IN ONE DIRECTION
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/colin-crain/perl/ch-1.pl), and
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/james-smith/perl/ch-1.pl)

In a binary search the idea is to halve the remaining search space at every iteration. In a generalized sense this is an excellent strategy for searching a sorted list of values, but for a 5-element list the idea of repeated halving is overkill. To explain: if we start at the known half-way point, position 3, we can determine whether the value(s) found is less than, equal to, or greater than the target. If less than, there is literally a 50-50 chance the target will be at either position 1 or 2, and if that fails one last check determines whether it is at the remaining position or not present at all. The point here is that after the first halving, there is no gain in further mathematically calculating a midpoint — simply picking one of the values is just as good. So a code-simplified strategy is to start in the middle and if necessary progress either up of down for the next one or two steps.

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/james-smith/perl/ch-1.pl)

We present another masterwork from James, this one a series of ternary fall-throughs that first make the up-to-three comparisons to determine the row and then the apply matching logic to the columns.  I think this one is a little easier to follow than the previous example.

```perl
    sub find_val_dnf_optimal {
      my($v,$m) = @_;
      my $t;
      return $v < $m->[0][0] || $v > $m->[4][4]
           ? 0
           : ( $t = $m->[ $v < $m->[3][0]
               ? ( $v < $m->[1][0] ? 0 : $v < $m->[2][0] ? 1 : 2 )
               : ( $v < $m->[4][0] ? 3 : 4                       )
             ] ) &&
             ( return $v == $t->[2] ? 1 :
                      $v < $t->[2] ?
                      ( $v == $t->[0] || $v == $t->[1] ? 1 : 0) :
                      ( $v == $t->[4] || $v == $t->[3] ? 1 : 0) );
    }
```

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/colin-crain/perl/ch-1.pl)

I was going to include my fourth solution, where instead of quickly iterating up the rows from index `[0]` I start at `[2]` and branch to either moving upward or downward to find the correct row. Suffice to say it didn't catch the frontrunner I shared above. Rather than show that one, then, here's a slightly different way I came up with to try and out-think the problem.

I figured that because of its use in `sort`, the spaceship operator, `<=>`, would by necessity be as fast as possible. So I came up with this method of adding the operations of the target applied to the first and last elements of the target row. Adding the two operations give 5 possible results: `{-2,-1,0,1,2}` that determine whether the target is above the line, below the line, in the line or equal to one of the two end values. I made a state table to figure out the logic but this method allows the determination to be made with the minimum number of cycles.

The overhead proved too much against the savings, however, and although it is remarkably fast it could not compete with the hot-rodded winning routine.

```perl
    sub search_divide ( $val, $row = 2) {                       ## [3]
        while (1) {
            $_ = ($val <=> $mat->[$row]->[0]) + ($val <=> $mat->[$row]->[-1]);
            if ($_ == -2) {
                return 0 if ($row == 0) or ($val > $mat->[$row-1]->[-1]);
                $row--;
            }
            elsif ($_ == 2) {
                return 0 if ($row == $mat->$#*) or ($val < $mat->[$row+1]->[0]);
                $row++;
            }
            elsif ($_) {
                return 1;
            }
            else {
                return 1 if (   $val == $mat->[$row]->[1]
                             || $val == $mat->[$row]->[2]
                             || $val == $mat->[$row]->[3] );
                return 0;
            }
        }
    }
```



## BINARY SEARCH ON A 1D ARRAY MAPPED TO 2D
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/abigail/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/polettix/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/jo-37/perl/ch-1.pl), and
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/laurent-rosenfeld/perl/ch-1.pl)

A binary search algorithm doesn't easily translate into multiple dimensions, but it doesn't have to, either. Nor are we required to flatten the array with the overhead that requires. By creating a phantom array with a bijective 1:1 mapping to the elements in the 2-d matrix we can preform a normal binary search pattern on that, using the values from the matrix to make the halving decisions. The phantom array, being a regular sequence of indices, does not necessarily even need to exist, the range being just placeholders for the index pairs in the real matrix.

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/laurent-rosenfeld/perl/ch-1.pl)

**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/laurent-rosenfeld/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/laurent-rosenfeld/raku/ch-1.raku), [Scala](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/laurent-rosenfeld/scala/ch-1.scala)

Laurent states that he perceived an unspoken imperative to construct a binary search over the data. Ok then, so be it.

He approached the task by starting with a search range with a lower bound of 0 and an upper of 24, indicating the indices in a virtual list to be searched. He then offers a routine, `A2AoA`, that maps one of these values to the index pairs for 25 elements of the given matrix. A binary search is implemented, with the routine providing the elements in the matrix to make the necessary comparisons. This is a very clever way to indirectly perform a proper binary search over the ordered data without flattening the entire matrix.

```perl
    sub A2AoA {
        my $index = shift;
        my ($i, $j) = (int $index / 5, $index % 5);
    }
    sub bin_search {
        my $in = shift;
        my ($min, $max) = (0, 24);
        while ($max > $min) {
            my $pivot =  int (($max + $min) /2);
            my ($i, $j) = A2AoA $pivot;
            my $val = $matrix[$i][$j];
            # say "val = $val, $i, $j";
            return 1 if $val == $in;
            if ($in > $val) {
                $min = $pivot + 1;
            } else {
                $max = $pivot;
            }
        }
        return 0;
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/polettix/perl/ch-1.pl)

Flavio directly inlines his cross-reference mapping, gathering the values of the matrix indices from the virtual range midpoints directly within the loop.

```perl
    sub search_matrix ($M, $x) {
       my $n_rows = $M->@*      or return 0;
       my $n_cols = $M->[0]->@* or return 0;
       my ($lo, $hi) = (0, $n_rows * $n_cols - 1);
       while ('necessary') {
          my $mid = int(($lo + $hi) / 2);
          my $v   = $M->[$mid / $n_cols][$mid % $n_cols];
          return 1 if $v == $x;
          return 0 if $lo == $hi;
          if ($v < $x) { $lo = ($mid == $lo) ? $lo + 1 : $mid }
          else         { $hi = $mid }
       } ## end while ('necessary')
    } ## end sub search_matrix
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/jo-37/perl/ch-1.pl)

Jorg returns to offer an alternative to scanning the matrix as a PDL object. The code itself is tight, but his lengthy commentary bears repeating here. The `v()` routine is a fascinating way to go about things I've not run across before.

```perl
    # Perform a binary search within the matrix.  It would be pointless to
    # convert the matrix into a 1-d array as this operation has a complexity
    # of O(n**2), whereas a binary search may be performed in O(log n).
    # Therefore List::MoreUtils::bsearch is of no use for this task and we
    # need to implement our own binary search.
    # It needs large matrices for the binary search to become faster than a
    # PDL scan.  While for the given 5x5 matrix there is a tie, the scan
    # is faster until the size goes up to 100x100.
    #
    # $matrix: the matrix as an AoA reference
    # $low: lower linear search index, inclusive
    # $high: higher linear search index, exclusive
    # $value: search value
    # The caller's $_[1] and $_[2] have to be writable and will be modified!
    sub bsearch_matrix ($matrix, $low, $high, $value) {
        my $low_val = get_at($matrix, $low);
        return 1 if $value == $low_val;
        return 0 if $value < $low_val;
        return 0 if $low + 1 == $high;

        # Split the search interval and select the appropriate part.
        my $mean = int(($low + $high) / 2);
        @_[1, 2] = $value < get_at($matrix, $mean) ?
            ($low, $mean) : ($mean, $high);

        # Recursion without stack growth.
        goto &{(__SUB__)};
    }


    # Retrieve matrix element by linear index.
    sub get_at ($m, $l) {
        $m->[$l / @$m][$l % @$m];
    }

    # Turn the argument into an independent, writable value.
    # Enforces call-by-value when applied to a subroutine parameter.
    sub v ($v) {$v}
```


[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/abigail/perl/ch-1.pl)

As an alternative to the hashing solution given above, Abigail also submits this version of a binary search mapped to a 2-d matrix. It's clean and remarkably compact, as we've come to expect from them.

```perl
    my sub bsearch ($matrix, $target) {
        my ($min, $max) = (0, $MATRIX_SIZE * $MATRIX_SIZE);
        while ($min < $max) {
            use integer;
            my $mid = ($min + $max) / 2;
            #
            # To map a 1-d coordinate c to a 2-d pair x, y, we use
            # x = floor (c / size), y = c % size.
            #
            my $cmp = $$matrix [$mid / $MATRIX_SIZE]
                               [$mid % $MATRIX_SIZE] <=> $target;
            if    ($cmp < 0) {$min = $mid + 1}
            elsif ($cmp > 0) {$max = $mid}
            else  {return 1}
        }
        return (0)
    }

    #
    # Read in the matrix
    #
    my $matrix = [map {[<> =~ /-?[0-9]+/g]} 1 .. $MATRIX_SIZE];
```

---

# TASK 2 {#PWC111TASK2}

# Ordered Letters
*Submitted by: E. Choroba*<br>

Given a word, you can sort its letters alphabetically (case insensitive). For example, “beekeeper” becomes “beeeeekpr” and “dictionary” becomes “acdiinorty”.

Write a script to find the longest English words that don’t change when their letters are sorted.


## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/abigail/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/adam-russell/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/athanasius/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/dave-jacoby/perl/ch-2.pl),
[**David Schwartz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/dms061/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/jo-37/perl/ch-2.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/mohammad-anwar/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/perlboy1967/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/pete-houston/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/sgreen/perl/ch-2.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/stuart-little/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/ulrich-rieke/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/wlmb/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/wanderdoc/perl/ch-2.pl)


There were only 19 working submissions for the second task this past week.

When looking for words that don't change their letters when sorted, the tautological method is to sort them and see whether they change their letters. After that its a matter of bookkeeping, or beegikknoop if you prefer, to compile a list of the longest specimens. This proved to be the most common approach taken. As the dictionaries used were quite large, upwards of 235,000 words, this on the face of it requires quite a bit of sorting. However being realistic, on modern machines this process was more than adequate to find the requested word or words in a few seconds. On the subject of the dictionaries used, it is noted that most systems these days include a wordlist as a resource for spellcheckers and such, so a default was usually provided, although where exactly that was linked and the file referenced obviously varied somewhat. In a multilingual, global group we can hardly expect people to have such a file preinstalled. Consequently the actual words found varied a bit as well. The eight-letter word "aegilops", for example, seems to be a somewhat nonstandard variant spelling for the more-common "egilops", or "goat-weed", and only showed up in a the most exhaustive list available, with 466,000 words.

Many people like to view these challenges as more akin to abstract scenarios than necessarily fulfilling the requirements for the immediate, literal task in hand. A more general need to filter a dictionary lookup might well warrant further optimization, and here we saw differentiation among the techniques as well, such as dynamically filtering the word list to the maximum sorted word found so far, or even presorting the entire dictionary.

Alternatively to sorting and looking, another popular approach was to look instead for words that were already sorted. Various techniques were presented to compare the first two letters of a word, determining whether they were in lexicographical order, and if so comparing the second and third, third and fourth, and so on, immediately short-circuiting and moving on the the next candidate should any pair be found out of sequence. This is very economical in the sort operations, as any rearrangement at all invalidates the candidate.

After looking at these approaches we will examine a few submissions that took their own road, and see where these wayward travelers have led us.

## Echinops - A bug's tale

A pernicious bug flowed through this task, unfortunately taking out some quite promising submissions, having to do with proper nouns. Now, frankly I'm not concerning myself here with what does, or does not, exactly constitute a word in the English language. Anyone who knows me knows I land solidly in the descriptivist camp when communicating, and am more than comfortable simply making up words as suit my purposes on occasion of need. This isn't about the quality of the wordlists. There are many proper nouns mixed in the various wordlists being used here, and I outright refuse to rule on whether the entries qualify as words for this challenge. As far as I'm concerned if someone says it and it's not screaming or beat-boxing, it's a word. And maybe sometimes even then, I'd have to hear it first.

No, this is more subtle and insidious, and I have only one thing to say on the subject:

"Echinops"

Echinops  is the genus name for a number of plant species known as globe thistles, and of a mammal as well, a small African hedgehog-like creature called a tenrec. It's unclear whether there's any relationship between the spikiness of the thistles and the hedgehog, but sometimes taxonomists do get funny like that. The problem here, though, is that the word is both relatively long and also completely sorted after the initial letter "E", which you will also notice, is capitalized. Now do you see the bug? Whether or not we wish to include proper nouns in our search, one thing we must do when classifying the words we select is to compare the letters composing them in a case-independant fashion. In ASCII, "E" falls before "a" and hence "Echinops" is sorted according to that criteria. This will simply not do. Most of the submissions either filtered out words containing capital letters or, more commonly, lowercased everything and let the chips fall where they may.

Unfortunately, though, not all of them.

## sort the WORDS
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/adam-russell/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/jaldhar-h-vyas/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/jo-37/perl/ch-2.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/mohammad-anwar/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/sgreen/perl/ch-2.pl), and
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/ulrich-rieke/perl/ch-2.pl)

In the simplest case, a working solution to this challenge is quite straightforward: open a dictionary, sort each word, see if sorting leaves it unchanged. For any words passing this test, there were a variety of interpretations on what, exactly, was selected for output.

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/sgreen/perl/ch-2.pl)

Personally I understood "the longest English words that don’t change" as a request for a list of words with the maximum length of those found, and this reading was widely, but not exclusively, shared within the team.

Here Simon hands a candidate off to a subroutine to be validated, and should it pass its length is compared against that of the longest word found so far. If it meets or exceeds that value, it is either added to a list of words at maximum length or, in the case of it being longer, used to start a new word list.

```perl
    while ( my $word = <$fh> ) {
        chomp $word;

        # If the word has all its characters in alphabetical order, either
        #  create a new list if it is longer than the current max_length, or
        #  append it to the list if it is the same.
        if ( _is_ordered($word) ) {
            my $length = length($word);

            if ( $length > $max_length ) {
                $max_length = $length;
                @words      = ($word);
            }
            elsif ( $length == $max_length ) {
                push @words, $word;
            }
        }
    }

    sub _is_ordered {
        my $word = lc shift;
        return if $word !~ /^[a-z]+$/;

        # Order the word by letters
        my $ordered = join '', sort split '', $word;

        return $ordered eq $word;
    }
```


[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/jaldhar-h-vyas/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/jaldhar-h-vyas/raku/ch-2.raku)

It was not at all uncommon, however, to only keep a single example of the longest word found, and should a new, longer word be located that word is replaced with the new. Thus the first longest word is the one presented after the search.

```perl
    for my $line (@lines) {
        chomp $line;
        if (lc $line eq (join q{}, sort split //, lc $line) &&
        length $line > length $longest) {
            $longest = $line;
        }
    }
```

[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/mohammad-anwar/perl/ch-2.pl)

Mohammad give us another fine example of this technique. One thing though: he takes it on himself to remove apostrophes, which is a curious choice that hadn't occurred to me. The apostrophe is a character but certainly isn't a letter and it's unclear what, exactly, should be done with it. If the letters surrounding it were to move, the word would be disqualified, so if it were to be considered correct before the sort it would remain so after, making a reasonable case to ignore it completely. It doesn't come up, but in theory could: the informal word "ain't" is sorted, for instance. I suppose technically to report one of these words we should add the apostrophe back in after removing it to make the distinction, but that's a whole 'nother can o' worms.

```perl
    while (my $word = <$fh>) {
        chomp $word;
        my $l = length($word);

        next if $l == 1;
        $word =~ s/\'//;
        next unless (lc $word eq (join '', sort split //, lc $word));

        if ($l > $max_length) {
            $max_word = $word;
            $max_length = $l;
        }
    }
```


[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/jo-37/perl/ch-2.pl)

Without specifying the culprit, although presumably because "aegilops" is just one solitary word, Jorg has decided to present a more satisfying answer to the query, allowing a user-configurable length range to determine the exact meaning of "the longest English words". This defaults to 1, allowing for the longest word(s) and also those 1 letter shorter.

```perl
    while (<>) {
        chomp;
        $_ = lc;
        # Detect a "self-sorted" word and add it to an array of words having
        # the same length.
        push $word[length]->@*, $_ if join('', sort split //) eq $_;
    }

    # Reverse the order of the collected arrays, pick the first
    # $n + 1 thereof, dereference these and print the words.
    # @word may contain gaps.
    say for map {$_ ? @$_ : ()} (reverse @word)[0 .. $n];
```


## PRE-FILTER the candidates
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/james-smith/perl/ch-2.pl)

When proceeding through the list of candidate words, we can keep a running tally of the longest sorted word we've found so far. As we know before we start that any word, sorted or not, that's shorter than this maximum will not be among the longest words, these can be dismissed out-of-hand before any more work is done.


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/james-smith/perl/ch-2.pl)

James constructs a series of cascading logical groups that must be satisfied in order for a given candidate word to be even considered for sorting. In the pre-filtering phase of the selection words are matched against the regex `/^a-z$/`, allowing only lowercase letters. The next step checks the length against that of the longest unchanged word yet found, and only after passing these check is the candidate split and sorted. If that test passes we know that the word is long enough to be saved, and it is either added to the running list of longest words that length or used to start a new list.

His routine is nicely commented as usual, with more description than code. A bare-bone version without comments is also provided, and is impressively terse.

```perl
    sub longest {
      open my $fh, q(<), $_[0];
      my @max = (0);
         (chomp)         ## Remove newline character
      #&& !/\W/           ## Remove words with non-alpha chars
      && !/[^a-z]/       ## Remove words starting with a capital
      && ( $max[0] <= length $_ )
                         ## Remove words that are too short
      && ( $_ eq join q(), sort split //, $_ )
                         ## Check the word is unchanged when the
                         ## letters are sorted
      && ( $max[0] == length $_
           ? ( push @max, $_ )
           : ( @max = (length $_, $_) )
         )
        ## If the word is the same length as the maximal word
        ## push it onto @max - so we store all the longest words
        ## with maximum length.
        ## If the word is longer than the max length (1st entry
        ## in @max - reset max to include the new max length and
        ## the word.
        while <$fh>;
      return "$_[0] > @max";
      ## Return the name of the file used, the size of the words
      ## and a complete list of the words of that length.
    }
```


## sort the DICTIONARY
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/athanasius/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/dave-jacoby/perl/ch-2.pl), and
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/perlboy1967/perl/ch-2.pl)

I was a bit surprised to see this optimization show up as often as it did, but after consideration it's not as outlandish as it may at first sound. The dictionary is quite a large array to sort, but by front-loading a fair amount of effort into pre-sorting the word list by length, a trade-off is made to eliminate nearly all of that list later. The longest words are searched first, and the first example found will immediately determine the maximum sorted word length. Once all words of that length are checked further searching is unnecessary. We go in, find the words, and get out quick.

Well that's the theory, at least.

In practicality the longest words in the dictionary are the least likely to be sorted, and it's only once the words get down to medium length, 7 or 8 letters, that any at all come in ordered. It makes sense to cut to the chase, but can we really expect "pathologicopsychological" to come out ordered? Let's look at the math: a random arrangement of letters (which real words are not) would cancel out the probability imbalances so each letter has on average only a 27/52 chance of being ordered in relation to the previous — 50% above, 50% below and one chance of being the same —  and these probabilities multiply at each letter. So all things being equal that 24-letter monstrosity about monsters has a 0.000015% chance of starting out sorted. Letter frequency analysis could give us a more accurate prediction, but you get the idea. In reality the situation is even worse, as the limited number of vowels available restricts this number further, rather radically. As it works out, after finding "aegilops" in the big list of 466,000 words we still will have to have read over 275,000 of those to check the last 9-letter word. In the BSD dict the situation is even worse: the maximum word is only 7 letters long, and to exhaust the 7-letter range we need to check 201,000 out of 235,000 words.

One might think the word list would be heavily skewed towards the low end in length, but in fact this is limited by complexity: there are only about 4000 3-letter combinations that include a vowel, and most of these won't be words. For the
```
    /usr/share/dict/words
```
list of 235,886 entries:
```
    length | words
    -------+-------
         1   52
         2   160
         3   1420
         4   5272
         5   10230
         6   17706
         7   23869
         8   29989
         9   32403
        10   30878
        11   26013
        12   20462
        13   14939
        14   9765
        15   5925
        16   3377
        17   1813
        18   842
        19   428
        20   198
        21   82
        22   41
        23   17
        24   5
```
we can see word length peaks at, remarkably, 9 letters. I did not expect that. The big list shows the same curve, just more of them.

Oh well. It was a neat idea, if not the killer optimization expected.


[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/perlboy1967/perl/ch-2.pl)

After slurping in the entirety of the dictionary, chomping linefeeds, stripping anything with hyphens or punctuation, and lowercasing everything, Niels creates a huge wordlist, sorted descending by length.

Under this scheme, of course, only one list for the longest words need ever be created, so if the word is matched it's added to the list, and when the word length drops below the maximum the loop exits and the results are reported.

```perl
    sub findLongestOrderedWords($) {
      my ($wordfile) = @_;

      my @inWords = map { chomp; lc($_)} read_file($wordfile);

      my ($wlenMax,@words);
      for my $word (sort { length($b) <=> length($a) } grep /^[a-z]+$/,@inWords) {
        my $wlen = length($word);
        if (!defined $wlenMax or $wlenMax == $wlen) {
          if ($word eq join('',sort split '',$word)) {
            push(@words, $word);
            $wlenMax = $wlen;
          }
        } elsif ($wlen < $wlenMax) {
          last;
        }
      }

      return @words;
    }
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/athanasius/perl/ch-2.pl)

The monk reads the dictionary in and then proceeds to compile a sequence of intermediate temporary files sorted case-insensitive and categorized by word length. A hash is kept of the filehandles to these files, essentially making the filesystem itself into a flat-file database. These files are then read in sequentially by descending word length to produce a master temporary dictionary sorted by word length. Whew!

```perl
    sub order_dictionary
    {
        my ($in_file) = @_;
        my  %out_fh;

        open( my $in, '<', $in_file );
        while (my $line = <$in>)
        {
            chomp $line;
            next if $line =~ /[^A-Za-z]/;

            my $len = length $line;
            my $out_fh;

            if (exists $out_fh{ $len })
            {
                $out_fh = $out_fh{ $len };
            }
            else
            {
                my $out_file = "$DICT_DIR/dict_$len.tmp";
                open( $out_fh, '+>', $out_file );
                $out_fh{ $len } = $out_fh;
            }

            print $out_fh "$line\n";
        }
        close $in;

        open( my $out, '>', $DICTIONARY );
        for my $len (sort { $b <=> $a } keys %out_fh)
        {
            my $fh = $out_fh{ $len };
            seek $fh, 0, 0
            while (my $line = <$fh>)
            {
                print $out $line;
            }
        }
        close $out;

        for my $len (keys %out_fh)
        {
            my $fh = $out_fh{ $len };
            close $fh;

            my $filename = "$DICT_DIR/dict_$len.tmp";
            unlink $filename;
        }
    }
```


[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/dave-jacoby/perl/ch-2.pl)

Dave needs to examine a few more words, as he has decided, apparently arbitrarily, to produce a list of the seven longest words, which delivers the 6 7-letter words plus "abbess", who is the Mother Superior of an abbey of nuns. Seven's a good number. I approve. Here `get_words()` sorts the dictionary and `sort_word()` performs the `join-sort-split` operation.

```perl
    for my $word (@words) {
        state $c = 0;
        my $sort = sort_word($word);
        if ( $sort eq $word ) {
            say $word;
            last if $c++ > 5;
        }
    }

    sub get_words {
        my $dict = '/usr/share/dict/words';
        my @words;
        if ( -f $dict && open my $fh, '<', $dict ) {
            @words =
                sort { length $b <=> length $a }
                grep { length $_ > 1 }
                map  { chomp $_; lc $_ } <$fh>;
        }
        return @words;
    }

    sub sort_word ( $word ) {
        $l++;
        return join '', sort split //, $word;
    }
```


## find words that are ALREADY SORTED
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/colin-crain/perl/ch-2.pl),
[**David Schwartz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/dms061/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/e-choroba/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/pete-houston/perl/ch-2.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/stuart-little/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/wlmb/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/wanderdoc/perl/ch-2.pl)

When sorting the letters in a word, all of the letters are rearranged as required to complete the sort. However in our test if any letters at all are out-of-order the candidate immediately fails, so once one letter is moved any further sorting becomes wasted effort. It would be nice to somehow to place a `last` within a `sort` block but that's just messed up. I mean, how would that even work?  We can do something similar though, by working manually across a word comparing adjacent letters for their ordering. This act can be set to short-circuit and should we find any pair out-of-sequence that word fails without further comparison. As almost all words will fail the test within the first few letters, the amount of comparison done is minimized.

[**David Schwartz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/dms061/perl/ch-2.pl)

**additional languages:**
[Python3](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/dms061/python3/ch-2-example.txt)

David examines his adjacent letters by first breaking down his string using `split` and then iterating across, checking [*index*] against [*index*+1]. If a discrepancy is found in the sequence, we immediately bolt, skipping to the next word candidate.

Here at the PWC we gather from all walks of programing life. I'm not sure exactly where David comes from — whether he's simply employing a rhetorical device here — but we catch him marveling at the awesomeness of the `next LABEL` construct — "a weird mix of break and goto". I will take this C talk at face value and say welcome to the club David, there's a lot of these cool tricks to play with in Perl that get directly to the point. Lead on.

```perl
    WORD: while (<$dict>) {
        # Remove whitespace (chomp), convert to lowercase ('A' != 'a') and split word into an array of characters
        chomp;
        $_ = lc;
        # Implementation is based off the idea that the string need only be iterated over once
        # Because we have to split it, we really iterate over it twice
        # A more efficient implementation would just access characters in the string directly
        @chars = split "";
        # Optimization, only search for words of increasing size
        next WORD if @chars < $len;
        # Check if the word is sorted
        for(my $i = 0; $i < $#chars; $i++){
            # like a weird mix of break and goto
            # immediately goes to the next iteration of the label
            # no other code is executed
            next WORD unless $chars[$i] le $chars[$i+1];
        }
        #print "$_\n";
        if ($len == @chars){
            #equal length, add to a list
            push @words, $_;
        }else{
            # new largest (remember we skip smaller words)
            #reset the list and update the length
            @words = ($_);
            $len = @chars;
        }
    }
```

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/pete-houston/perl/ch-2.pl)

Pete applies a couple of unique twists to his technique, first employing the unicode fold-case `fc()` feature available since 5.16, and then not bothering to trim the linefeed characters from words, as if all the lines have them, then they simply become a constant. This last part does, I have to say, make me wonder about the last word in the file, but I just checked `/usr/share/dict/words` here and it does not seem to be a problem. I always make sure to add that final linefeed as I find its absence completely annoying, and have even set my editor up to make sure it's there lest I forget. YMMV.

Case-folding is the generalized abstraction of the idea of case-free letter comparisons, and the `fc()` function improves on the idea of simple lowercase comparisons by correctly handling Unicode situations where the alphabets used don't exactly conform to the model of upper and lower cases.

Even though English does not have any of these problems, in a Unicode world this is a better way to think about this and we should be getting used to it.

```perl
    sub is_sorted {
        my @chars = split //, fc shift;
        for my $i (0 .. $#chars - 1) {
            return if 1 == ($chars[$i] cmp $chars[$i + 1]);
        }
        return 1;
    }
```

[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/stuart-little/perl/ch-2.pl)

**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/stuart-little/haskell/ch-2.hs), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/stuart-little/node/ch-2.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/stuart-little/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/stuart-little/raku/ch-2.p6)


Here's a different way to go about it: after breaking his string into an array, Stuart takes two slices from this with an offset of 1, so adjacent letters will share the same index across them. He then pulls out the listwise operator `zip_by` from `List::AllUtils` to apply a subtraction across the `ord` value of the characters in the two lists. If any of these values are less than 0 then the letters are out-of-order, and we use another function from that package, `all`, to confirm this. Stuart brings a very functional of thinking about the challenges.

```perl
    sub isSorted($word) {
        my @word = split //, lc $word;
        my @wordl=@word[0..(length $word)-2];
        my @wordr=@word[1..(length $word)-1];
        my @diffs = zip_by {ord($_[1]) - ord($_[0])} \@wordl, \@wordr;
        return ((lc $word) =~ /^[a-z]+$/) && (all {$_ >= 0} @diffs);
    }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/wlmb/perl/ch-2.pl)

Again using `all`, Luis gives us a very compact solution that works on a direct string comparison between the successive characters

```perl
    sub sorted {
        my @chars=split '', shift;
        return all {$chars[$_] le $chars[$_+1]} 0..$#chars-1;
    }
```

Extending on this, [a second, generalized version is provided](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/wlmb/perl/ch-1.pl), which finds all sorted words of a specific given length.

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/e-choroba/perl/ch-2.pl)

The solutions provide above work by first splitting the string into an array of characters and comparing adjacent indices, but this step is not required. The `substr` operator provides a pretty efficient way to directly look inside a sting without incurring the overhead of first breaking it apart.

Choroba demonstrates:

```perl
    WORD:
    while (my $word = <$in>) {
        chomp $word;
        my $l = lc $word;
        for my $i (2 .. length $word) {
            next WORD if substr($l, $i - 2, 1) gt substr($l, $i - 1, 1);
        }
        if (length($word) > (keys %max)[0]) {
            %max = (length $word => [$word]);
        } elsif (length($word) == (keys %max)[0]) {
            push @{ $max{ length $word } }, $word;
        }
    }
    say for map @$_, values %max;
```

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/colin-crain/perl/ch-2.pl)

I also avoided splitting apart the candidate words, directly accessing the pairs of characters using `substr` in a routine that short-circuits at the first discrepancy.

```perl
    sub is_sorted ($word) {
        return 0 if length($word) < 3;  ## reject short words
        for (1 .. length($word)-1) {
            return 0 if (substr($word, $_-1, 1) cmp substr($word, $_, 1)) == 1 ;
        }
        return 1;
    }
```



## perform EXOTIC INCANTATIONS
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/abigail/perl/ch-2.pl), and
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/polettix/perl/ch-2.pl)

There are always those among us that aspire to step outside the boundaries of convention, yielding results that defy easy categorization.

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/abigail/perl/ch-2.pl)

**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/abigail/awk/ch-2.gawk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/abigail/bash/ch-2.sh), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/abigail/c/ch-2.c), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/abigail/lua/ch-2.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/abigail/node/ch-2.js), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/abigail/pascal/ch-2.p), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/abigail/python/ch-2.py), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/abigail/ruby/ch-2.rb)


Abigail presents us with a truly remarkable approach to determining whether a word is already sorted, by parsing it with a regular expression. This regex is constructed from a `join` over a range and ends up composed of the letters of the alphabet in lexicographic order:

```perl
    /^a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z*$/i
```

One or more of each letter will match at a given point, and as the expression is anchored to both the front and back of the string the word will only match if every letter in turn can be matched in this order, moving left-to-right across the expression. Any error will immediately abort the evaluation.

The first example of an ordered word is kept, and, should a longer word arise this is replaced with the new. After all words are examined the first longest example remaining is produced.

```perl
    my $pat = join "" => map {"$_*"} 'a' .. 'z';

    my $longest = "";

    while (<>) {
        $longest = $_ if /^$pat$/i && length ($_) > length ($longest)
    }

    print $longest;
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/polettix/perl/ch-2.pl)

Flavio employs the now-familiar "sort and compare" paradigm for his submission, but from there goes next level on the idea. He takes it upon himself to construct a full international generalization of the task, incorporating several Unicode modules to help him with the complex ordering distinctions that entails.

English may have many, many quirks, but one quality it does have is that technically it has only 26 "Latin" letters in two lettercases and no diacritical marks, the *New Yorker* and its fondness for diæresis notwithstanding. Icelandic, lovely language that it is, not so much.

He admits himself the implementation is a bit iffy, as he doesn't quite understand it himself, but goes into great length on his process [in his extensive writeup](https://github.polettix.it/ETOOBUSY/2021/05/06/pwc111-ordered-letters/). He's a brave man, that Flavio.

Oh, and Flavio, things that are billowy may also include big flags, or curtains, or sundresses in a light breeze, in addition to clouds and waves and puffs of smoke. Pillows, being metaphorically cloud-like, often get that description. It has a nice round sound that complements its meaning.


```perl
    use Unicode::Normalize;
    use Unicode::Collate;
    use Encode qw(decode_utf8);

    @ARGV = map { decode_utf8($_, 1) } @ARGV;

    my @pairs;
    while (<>) {
       my $pair = check_ordered(NFD($_)) // next;
       push @pairs, $pair;
    }
    say for reverse map { $_->[1] } sort { $a->[0] <=> $b->[0] } @pairs;

    sub check_ordered ($x) {
       state $coll = Unicode::Collate->new(level => 1);
       state $es = Unicode::Collate->new(level => 1, normalization => undef);
       my @chars = $x =~ m{(\X)}gmxs;
       shift @chars while @chars && $chars[0] =~ m{[\h\v]}mxs;
       pop @chars   while @chars && $chars[-1] =~ m{[\h\v]}mxs;
       my $original   = join '', @chars;
       my $rearranged = join '', $coll->sort(@chars);
       return [scalar(@chars), $original] if $es->eq($original, $rearranged);
       return;
    } ## end sub check_ordered ($x)
```

## A Few More Guest Language Contributions


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/laurent-rosenfeld/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/laurent-rosenfeld/raku/ch-2.raku)

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/roger-bell-west/perl/ch-2.pl)

**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/roger-bell-west/rust/ch-2.rs)



[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/ulrich-rieke/perl/ch-2.pl)

**additional languages:**
[C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/ulrich-rieke/c/ch-2.c), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/ulrich-rieke/haskell/ch-2.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-111/ulrich-rieke/raku/ch-2.raku)


---

# BLOGS {#PWC111BLOGS}

---

**Thatâs it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, I somehow continue to maintain my bearings. Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC093BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *READ* these *BLOG* *LINKS*:

**( *don't think, trust your training, you're in the zone, just do it ...* )**


**Aaron Smith**

 * [Perl Weekly Challenge 111 - Aaron Smith](https://aaronreidsmith.github.io/blog/perl-weekly-challenge-111/) ( *Raku* )

**Abigail**

 * [Perl Weekly Challenge 111: Search Matrix](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-111-1.html) ( *Perl* )
 * [Perl Weekly Challenge 111: Ordered Letters](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-111-2.html) ( *Perl* )

**Adam Russell**

 * [Efficient Matrix Search: The Weekly Challenge 111 — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2021/05/09) ( *Perl* )

**Arne Sommer**

 * [Ordered Search for Raku](https://raku-musings.com/ordered-search.html) ( *Raku* )

**Colin Crain**

 * [Are We in the Matrix? Get in Line, Friend, Get in Line. — Programming Excursions in Perl and Raku](https://colincrain.com/2021/05/09/are-we-in-the-matrix-get-in-line-friend-get-in-line/) ( *Perl & Raku* )

**Dave Jacoby**

 * [Efficient Ones: Perl Challenge #111 | Committed to Memory](https://jacoby.github.io/2021/05/03/efficient-ones-perl-challenge-111.html) ( *Perl* )

**Flavio Poletti**

 * [PWC111 - Search Matrix - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/05/05/pwc111-search-matrix/) ( *Perl* )
 * [PWC111 - Ordered Letters - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/05/06/pwc111-ordered-letters/) ( *Perl* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 111](https://www.braincells.com/perl/2021/05/perl_weekly_challenge_week_111.html) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #111](https://github.com/drbaggy/perlweeklychallenge-club/blob/master/challenge-111/james-smith/README.md) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 111: Search Matrix and Ordered Letters | laurent_r](http://blogs.perl.org/users/laurent_r/2021/05/perl-weekly-challenge-111-search-matrix-and-ordered-letters.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 111: Words and Matrix — Luca Ferrari — Open Source advocate, human being](https://fluca1978.github.io/2021/05/03/PerlWeeklyChallenge111.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 111: Words and Matrix — Luca Ferrari — Open Source advocate, human being](https://fluca1978.github.io/2021/05/03/PerlWeeklyChallenge111.html#task2) ( *Raku* )

**Roger Bell_West**

 * [RogerBW's Blog: Perl Weekly Challenge 111: Search Letters](https://blog.firedrake.org/archive/2021/05/Perl_Weekly_Challenge_111__Search_Letters.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 111](https://dev.to/simongreennet/weekly-challenge-111-291m) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 111 — W. Luis Mochan](https://wlmb.github.io/2021/05/03/PWC111/) ( *Perl* )


