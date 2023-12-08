---
title: "Advent Calendar - December 7, 2023"
date: 2023-12-07T00:00:00+00:00
description: "Advent Calendar - December 7, 2023."
type: post
image: images/blog/2023-12-07.jpg
author: Matthias Muth
tags: ["Perl"]
---

## [**Advent Calendar 2023**](/blog/advent-calendar-2023)
### | &nbsp; [**Day 6**](/blog/advent-calendar-2023-12-06) &nbsp; | &nbsp; **Day 7** &nbsp; | &nbsp; [**Day 8**](/blog/advent-calendar-2023-12-08) &nbsp; |
***

The gift is presented by `Matthias Muth`. Today he is talking about his solution to [**The Weekly Challenge - 213**](/blog/perl-weekly-challenge-213). This is re-produced for `Advent Calendar 2023` from the original [**post**](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-213/challenge-213/matthias-muth#readme).

***

<br>

## Task 1: Fun Sort
***

    You are given a list of positive integers.
    Write a script to sort the all even integers first then all odds in ascending order.

<br>

Ok, let's see! A typical approach would be to split up the list of integers into all even ones and all odd ones, then sort both lists separately, and then concatenate them back together.

Absolutely ok!

But way below what `Perl`'s sort can do for us!

Why don't we use sort as it is supposed to be?

It is defined as

<br>

    sort BLOCK LIST

<br>

and `BLOCK` is a comparison that decides which of two values goes first in the result.

For us here, we know that all even numbers go before all odd numbers.

To determine whether the number is `even` or `odd`, we can use the modulo operator, `%`. We just check whether the number modulo 2 is 0 (`even`) or 1 (`odd`).

For determining the sort order, using `Perl`'s number comparison operator `<=>` is our best choice.

Combining these two, we get the first part of our comparison for sort:

<br>

    $a % 2 <=> $b % 2

<br>

That's all we need to make all even numbers `'go left'`, and all odd numbers `'go right'`.

If both numbers are `even`, or both are `odd`, the `<=>` operator returns zero. For that case, we append the standard numeric comparison to define the order within all even (or all odd) numbers:

<br>

     $a % 2 <=> $b % 2 || $a <=> $b

<br>

Thus, a quite short, but complete solution for this challenge can look like this:

<br>

```perl
sub fun_sort {
    sort { $a % 2 <=> $b % 2 || $a <=> $b } @_;
}
```

<br>

I don't think there will be a much more efficient way of solving this!

<br>

## Task 2: Shortest Route
***

    You are given a list of bidirectional routes defining a network of nodes, as well as source and destination node numbers.
    Write a script to find the route from source to destination that passes through fewest nodes.

<br>

Finding the shortest route, ok...

So probably we need to implement a `Broadth-First-Search` algorithm to find our solution.

But maybe the examples are so simple that we don't need that!

Sorry, but it doesn't look like that. :-(

Ok, then let's set it up for real!

<br>

### Part 1: Preparing the data.
***

We have segments of roads, with numbers defining nodes on those segments.

If we ever want to follow a road from one node to the next one, we need to know which nodes are the neighbors of all nodes.

So first thing, we collect all neighbor connections.

We may have neighbors from several route sections, if sections meed at one node. So we don't need a `'left'` and `'right'` neighbor only, but we need to generalize to have any number of neighbors for any given node.

For me, that means that we need an array for each node, independent of any segments, in which we collect all neighbors.

We loop over all nodes in all segments, and gather the node's `left` and `right` neighbors from that segment, checking that we do not access any non-existing neighbors beyond either end of the segment. If a node is contained in more than one segment, its neighbors from there will be added in a later iteration, too.

<br>

```perl
sub shortest_route {
    my ( $routes, $source, $destination ) = @_;

    my %neighbors;
    for my $segment ( @$routes ) {
        for ( 0..$#$segment ) {
            push @{$neighbors{$segment->[$_]}},
                $_ > 0          ? $segment->[$_-1] : (),
                $_ < $#$segment ? $segment->[$_+1] : ();
        }
    }
```

<br>

As you see, instead of using multiple if statements, in this case I prefer conditional expressions that evaluate to an empty list () if the condition does not match.

<br>

### Part 2: The BFS.
***

Now, as for any real BFS, we need a stack. In our case, the stack entries will contain complete paths that we will want to check for whether they solve our puzzle.

Each entry is an anonymous array with a list of nodes to travel.

We initialize the stack with a route containing the start node only.

We also need a hash for remembering which nodes we have already visited while we keep adding more routes to test on the stack. If not, we will find ourselves moving back and forth between nodes endlessly.

Within the loop, we check route in the first stack entry (`first in, first out`, for a `BFS`) for whether it leads us to the destination node. If yes, we are done.

If not, we add one stack entry for each of the last node's neighbors, adding each neighbor to the route that we just checked. We make sure to only add neighbors if they were not visited before. And we mark those neighbors as visited, for future iterations.

If we run out of entries on the stack without having found any route, we return the failure marker that is demanded for that case.

So all in all, it might look like this:

<br>

```perl
    my @stack = ( [ $source ] );
    my %visited = ( $source => 1 );
    while ( @stack ) {
        my $path = pop @stack;
        my $last_node = $path->[-1];
        return $path
            if $last_node == $destination;
        if ( $neighbors{$last_node} ) {
            for ( @{$neighbors{$last_node}} ) {
                unless ( $visited{$_} ) {
                    push @stack, [ @$path, $_ ];
                    $visited{$_} = 1;
                }
            }
        }
    }
    return -1;
}
```

<br>

All in all, less complicated than I expected it to be in the beginning!

### Thank you for the challenge!

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

| &nbsp; [**Advent Calendar 2023**](/blog/advent-calendar-2023) &nbsp; |
