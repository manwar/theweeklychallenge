---
title: "Andrew Shitov Weekly Review: Challenge - 071"
date: 2020-08-06T00:00:00+00:00
description: "Andrew Shitov Weekly Review: Challenge - #071."
type: post
image: images/blog/p6-review-challenge-071.jpg
author: Andrew Shitov
tags: ["Raku"]
---
***
# Raku Solutions Weekly Review
***

## Getting in Touch

<a href="mailto:andy@shitov.ru"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Email me (Andrew) with any feedback about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

We'd greatly appreciate any feedback you'd like to give.

***

<br>

Welcome to the **Raku Review** for **Week 071** of **The Weekly Challenge!**. For a quick overview, go through the [**original tasks**](/blog/perl-weekly-challenge-071/) and [**recap**](/blog/recap-challenge-071/) of the weekly challenge.

<br>

## Task 1. Peak elements

The task is to find peak elements in an array of integers. A couple of additional notes before we continue. First, the items must be unique. Second, the first and the last elements of the array are considered peaks too if they are bigger than their only neighbour. For the other elements, both neighbours (both left and right) must be checked.

In most of the solutions, the input array is generated using either `pick` or `roll` method. To make the elements unique, you must use `pick`. Here is the most popular method that the participants used:

```perl6
    my @array = (1..50).pick($N);
```

Always remember that you can use column notation when calling a method, for example:

```perl6
    my UInt @array = (1 .. $MAX).pick: $N;
```

The tricky part of this task is the problem of the two elements at the edges of the array. They only have one neighbour, so you need to make some exceptions to treat them properly. Some of the participants had a wise idea to simply add a couple of elements before and after the main data:

```perl6
    my @a = 0, |(1..50).pick($n), 0;
```

Now, the ‘peak check’ is trivial, and it does not depend on the index of the element:

```perl6
    if @a[$_-1] < @a[$_] && @a[$_] > @a[$_+1]
```

For some reason, not everyone wanted to use a great opportunity to chain the comparisons and simplify the code:

```perl6
    @data[$_ - 1] < @data[$_] > @data[$_ + 1]
```

(The code examples are real snippets of the submitted solutions, that’s why the variable names are so different.)

[Mark Andreson demonstrated](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/mark-anderson/raku/ch-1.raku) an interesting example of using regexes to find the elements we need. The check for the peak is encoded in an assertion:

```perl6
    my $regex = / [^|\s] (\d+) \s (\d+) \s (\d+) [\s|$] <?{ $0 < $1 > $2 }> /;
```

[Simon Proctor uses](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/simon-proctor/raku/ch-1.raku) another intersting trick and applies `rotor` with an overlapping option to get the chunks of three items:

```perl6
    my @peaks = ( 0, |@list, |0 ).rotor(3 => -2).grep( { $_[0] < $_[1] > $_[2] } ).map( { $_[1] } );
```

In general, the peaks are either collected in a loop (by `push`ing or `gather`ing the items) or by using a combination of `grep` and `map`. Here is a good [example by Colin Crain](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/colin-crain/raku/ch-1.raku) with only one `map`:

```perl6
    my @output = (1..^@a.end).map: { @a[$_] if @a[$_-1] < @a[$_] && @a[$_] > @a[$_+1] };
```

And, of course, it can be simplified further:

```perl6
    my @output = (1..^@a.end).map: { @a[$_] if @a[$_-1] < @a[$_] > @a[$_+1] };
```

Please watch the video for the complete review of all the solutions: https://www.youtube.com/watch?v=-brg8AAucrY

## Task 2. Remove an item from a linked list

The second task is much more difficult than the first one. For a given singly linked list, you have to find and remove the *N*<sup>th</sup> element from the end (or the head item if *N* is too big).

There is no ready-to-use implementation for linked lists built-in in Raku, so the participants created their own versions. Most of them used the idea of a class with the two fields for keeping the data and the next element:

```perl6
    class Node {
        has $.data;
        has $.next is rw;
    }
```

That’s the only common part of the solutions. The rest differs significantly. In some of the solutions, a separate class represents a linked list and defines the operations. For example, as we see in the [solution from Ulrich Rieke](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/ulrich-rieke/raku/ch-2.raku):

```perl6
    class Node {
        has Int $.value is rw ;
        has Node $.next is rw ;
    }

    class LinkedList {
        has Node $.first is rw ;
        has Node $.last is rw ;
        has Int $.size is rw ;

        method createList( @array ) {
            # . . .
        }

        method removeAt( Int $k ) {
            # . . .
        }

        method toString( --> Str ) {
            # . . .
        }
    }
```

In some of the implementations, the list-operating methods are implemented directly in the class representing the node. For example, [as Arne Sommer did it](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/arne-sommer/raku/ch-2.raku):

```perl6
    class LinkedElement
    {
        has $.value is rw;
        has $.next  is rw;

        method print-list
        {
            # . . .
        }

        method list-length
        {
            # . . .
        }

        method remove-from-end($from-the-end)
        {
            # . . .
        }
    }
```

Another way to organise classes is to have nested definitions, [as Jaldhar H. Vyas did it](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/jaldhar-h-vyas/raku/ch-2.p6):

```perl6
    class LinkedList {

        class Node {
            has $.value is rw;
            has Node $.next is rw;

            # . . .
        }

        # . . .
    }
```

[Javier Luque offers](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/javier-luque/raku/ch-2.p6) another way of doing that by explicitly giving the fully-qualified names to the classes:

```perl6
    class LinkedList::Node {
        has Int $.value is rw;
        has LinkedList::Node $.next is rw;
    }

    class LinkedList {
        has LinkedList::Node $.first is rw;
        # . . .
    }
```

And that’s not all in this TIMTOWTDI series. In Raku, one class can `trust` another class, and we see that option in the solution [submitted by Myoungjin Jeon](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/jeongoon/raku/ch-2.raku):

```perl6
    class LinkedList { ... }
    class Iter {
        trusts LinkedList;
        has $.value is rw;
        has Iter $.next;

        # . . .
    }

    class LinkedList {
        has Iter $!core;
        has Str  $.sep = '→';

        # . . .
    }
```

The methods of the class that we trust to may call private methods of another class. For example:

```perl6
    $itr!Iter::set-next( $after!Iter::replace-next( $itr ) );
```

Despite the note “Please use pure linked list implementation,” it is not very clear if, for example, the list knows its own length, so in some programs, the counter is a part of the class definition, and in some, the program scans the list every time it needs to know its size.

In the case your list only keeps data and references to the next items, you can always [count the elements](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/ash/raku/ch-2.raku) easily enough:

```perl6
    my $length = 1;
    my $curr = $head;
    $length++ while $curr = $curr.next;
```

To find the element to be removed, we need to scan the list again :-)

This week’s task 2 is a relatively difficult task by itself, and it brought very different solutions. You can watch the review of all submitted solution in this long video: https://www.youtube.com/watch?v=-brg8AAucrY.

As a bonus track, examine [the solution by Ben Davies](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/ben-davies/raku/ch-2.raku) to see how different a Raku program can look like if you use the elements for making the code as strict as possible, which you usually omit in a dynamic language.

<br>

***
## BLOGS
***

<br>

### [Andrew Shitov](https://andrewshitov.com/2020/08/01/raku-challenge-week-71/), [Arne Sommer](https://raku-musings.com/peaked-trim.html), [Colin Crain](https://colincrain.wordpress.com/2020/07/31/traversing-peaks-for-the-missing-link/), [Jaldhar H. Vyas](https://www.braincells.com/perl/2020/07/perl_weekly_challenge_week_71.html), [Javier Luque](https://perlchallenges.wordpress.com/2020/07/27/perl-weekly-challenge-071/), [Laurent Rosenfeld](http://blogs.perl.org/users/laurent_r/2020/08/perl-weekly-challenge-71-peak-elements-and-trim-linked-list.html), [Luca Ferrari](https://fluca1978.github.io/2020/07/27/PerlWeeklyChallenge71.html), [Mohammad S Anwar](https://perlweeklychallenge.org/blog/weekly-challenge-071/) and [Roger Bell_West](https://blog.firedrake.org/archive/2020/07/Perl_Weekly_Challenge_71__peak_elements__and_Rallyman_tracks_.html).

<br>

If you want to participate in **The Weekly Challenge**, please contact us at <perlweeklychallenge@yahoo.com>.
