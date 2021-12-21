---
title: "Advent Calendar - December 23, 2020"
date: 2020-12-23T00:00:00+00:00
description: "Advent Calendar - December 23, 2020."
type: post
image: images/blog/2020-12-23.jpg
author: James Smith
tags: ["Perl"]
---

## [**Advent Calendar 2020**](/blog/advent-calendar-2020)
### | [**Day 22**](/blog/advent-calendar-2020-12-22) | **Day 23** | [**Day 24**](/blog/advent-calendar-2020-12-24) |
***

The gift is presented by **James Smith**. Today he is talking about his solution to the task `Insert Interval` of **["The Weekly Challenge - 092"](/blog/perl-weekly-challenge-092)**. This is re-produced for **Advent Calendar 2020** from the original [**post**](http://blogs.perl.org/users/james_curtis-smith/2020/12/perl-weekly-challenge-92.html) by **James Smith**.

***

# Insert Interval

You are given a set of sorted non-overlapping intervals and a new interval.

Write a script to merge the new interval to the given set of intervals.

## Example 1:

    Input $S = (1,4), (8,10); $N = (2,6)
    Output: (1,6), (8,10)

## Example 2:

    Input $S = (1,2), (3,7), (8,10); $N = (5,8)
    Output: (1,2), (3,10)

## Example 3:

    Input $S = (1,5), (7,9); $N = (10,11)
    Output: (1,5), (7,9), (10,11)

***

This was a much trickier proposition - but something I had come across before - with tiling variations, exons and BLAST hits on the human genome, and computing length of overlapping service from a database {with some really nasty MySQL code!}

This is simpler though as we know the regions we start with are all non-overlapping and in order.

* If the new region doesn't overlap any of the regions we just push it into the list and return. Whether that be at the front in the middle or at the end.

We can test for the first two cases in the loop $new->{end} < $element->{start}, and then return the list of elements before $new, $new, $element and the rest of the list.

* The last case is the end of the loop, and we just return the list with $new tacked on the end.

* The problem comes when $new overlaps one of the regions. Firstly we work out the region containing both of the regions. Then we have to repeatedly see if this overlaps the next region and if it does repeat the process again. We then push this region onto the list.

```perl
sub int_insert {
  my( $new, @list ) = @_;
  my @new_list;
  while(my $e = shift @list) {
    return [ @new_list, $new, $e, @list ] if $e->[0] > $new->[1];
          ## The start of the next element is after the end of the new element -
          ## so we can safely push the new element and the rest of the list (and return it)
    if( $e->[1] < $new->[0] ) { ## Next element is to the left of the new
      push @new_list,$e;        ## element so push and continue
      next;
    }
    $new->[0] = $e->[0] if $e->[0] < $new->[0];
    $new->[1] = $e->[1] if $e->[1] > $new->[1];           ## Get start/end of first overlap...
    while( @list && $new->[1] >= $list[0][0] ) {          ## this also overlaps the next list element
      $new->[1] = $list[0][1] if $list[0][1] > $new->[1]; ## Update the end of the region if rqd
      shift @list;                                        ## Remove element from list;
    }
    return [ @new_list, $new, @list ];  ## The rest of the list will be after the "new" element now
  }                                     ## So we can safely push and return it....
  return [ @new_list, $new ];           ## The new element must be after the list so we just
                                        ## return it on the end of the list...
}
```

The extension to this code to work out the overlap if you have two (or more) ascend non-overlapping sequences is the one that is needed to work out the overlapping transcript or `mRNA`/`cDNA`.

The code is therefore slightly more complex:

The parameters are the list of arrays of intervals

```perl
sub int_merge {
  my ($result,@rest) = @_; ## List of arrays of ascending non-overlapping regions
  my @a = @{$result}; # First list.
  foreach (@rest) {
    my @b = @{$_};
    my @new;
    while( @a && @b ) { ## Stop when we get to one of the lists of intervals.
      if( $a[0][1] < $b[0][0] ) { ## The first element of @a ends before the first element of @b
        push @new, shift @a;
        next;
      }
      if( $b[0][1] < $a[0][0] ) { ## The first element of @b ends before the first element of @a
        push @new, shift @b;
        next;
      }
      ## We have an overlap;
      ## The new region starts as the overlap of the first elements of both lists
      my $new_region = shift @a;
      $new_region->[0] = $b[0][0] if $new_region->[0] > $b[0][0];
      $new_region->[1] = $b[0][1] if $new_region->[1] < $b[0][1];
      shift @b; ## New region is the overlap of the two regions
      while( @a || @b ) { ## Now we look through the two lists for elements that
                          ## overlap this new region....
                          ## Note we only stop if both of the next to elements
                          ## don't overlap the region OR we get to the end of
                          ## both lists
        if( @a && $a[0][0] <= $new_region->[1] ) { ## Element of first list overlaps -
          $new_region->[1] = $a[0][1] if $new_region->[1] < $a[0][1]; ## extend region if required
          shift @a;                                ## and remove element
          next;
        }
        if( @b && $b[0][0] <= $new_region->[1] ) { ## Element of first list overlaps -
          $new_region->[1] = $b[0][1] if $new_region->[1] < $b[0][1]; ## extend region if required
          shift @b;                                ## and remove element
          next;
        }
        last; ## Neither element overlaps so we finish this block
      }
      push @new, $new_region; # Add new region to list
    }
    push @new, @a, @b; ## We will have some of @a or @b left so push both on the answer
    @a = @new; ## Copy the new list of regions to @a - and repeat if required
  }
  return \@a;
}
```

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2020**](/blog/advent-calendar-2020)
