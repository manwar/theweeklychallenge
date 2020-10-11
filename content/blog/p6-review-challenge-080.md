---
title: "Andrew Shitov Weekly Review: Challenge - 080"
date: 2020-10-11T00:00:00+00:00
description: "Andrew Shitov Weekly Review: Challenge - #080."
type: post
image: images/blog/p6-review-challenge-080.jpg
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

Welcome to the **Raku Review** for **Week 080** of **The Weekly Challenge!**. For a quick overview, go through the [**original tasks**](/blog/perl-weekly-challenge-080/) and [**recap**](/blog/recap-challenge-080/) of the weekly challenge.

<br>

## Task 1. Smallest Positive Number

Before we jump to the solutions, let me mention that some of the input series require additional attention. Take, for example, this sequence: 3, -2, 1, 4, 2. What is the smallest missing positive integer here? The smallest available integer here is 5, but it is already outside of the range given by the sample as all of the smaller numbers from 1 up to and including 4 are already there. Some of the submitted solutions print 5 in this case, but some report that there are no missing numbers. I consider both results correct as both of them agree with the task description :-)

### The shortest solution

The [solution submitted by Simon Proctor](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/simon-proctor/raku/ch-1.raku) is the most compact solution we received this week:

    sub MAIN (
        *@N where { $_.all ~~ Int } #= List of integers
    ) {
        say (1...*).first( none(@N) );
    }

The main line of it uses cool Raku features:

* [Sequence operator](https://docs.raku.org/routine/...) `...`
* [Whatever](https://docs.raku.org/type/Whatever) star
* [`none`-Junction](https://docs.raku.org/routine/none)

Indeed, the first missing integer number is the `first` one from the sequence `1 ... *`, and if you try to find that number in the source data, you would find `none` there.

The good part is that this solution also prints 5 for the above example 3, -2, 1, 4, 2.

A similar approach is used [by Jan Krnavek](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/wambash/raku/ch-1.raku):

    sub smallest-positive-number(+@n) {
        1..*
        andthen .first: * == @n.none
    }

### Set operations

Another set of solutions uses set operations. In Raku, you can use both ASCII and Unicode versions of the set operators.

[Mark Andreson’s solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/mark-anderson/raku/ch-1.raku) is a nice one-liner with the `(-)` operator that stands for set difference.

    unit sub MAIN(*@ints where .all ~~ Int);

    say $_ ?? .min.key !! 1 with (1..@ints.max+1) (-) @ints.map(+*);

Notice the `+*` mapping, which is applied to the elements of the array that the program receives from the command line. In this case, when you pass numbers, your program gets the values of the `IntStr` type:

    $ raku -e'sub MAIN(*@a) {dd @a}' 123 456
    Array element = [IntStr.new(123, "123"), IntStr.new(456, "456")]

In many cases, this is not causing any issues, but sometimes you need to convert such values to a numeric object forcibly.

[Markus Holzer demonstrates](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/markus-holzer/raku/ch-1.raku) the use of another form of the set difference operator `\`, actually, this is also an ASCII character here:

    unit sub MAIN( *@N where .all ~~ Int );

    given (1..@N.max) ∖ (@N>>.Int) {
        say .elems
            ?? "Smallest missing element is {.min.key}"
            !! "No missing elements" }

Mapping the values to `Int` is done with the hyper method call: `@N>>.Int`:

* See the section ‘[infix `(-)`, infix `∖`](https://docs.raku.org/language/operators#index-entry-Set_difference_operator)’ in the Raku documentation
* Read about [`>>.` and `».`](https://docs.raku.org/language/operators#index-entry-methodop_>>.) in the documentation

### Scanning the numbers

The most straightforward method to find the first missing number is to scan the numbers from 1 to the maximum number of the input data.

An example of such a solution is submitted by [Arne Sommer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/arne-sommer/raku/ch-1.p6) (shown here partially):

    my @positively_sorted = @N.grep( * > 0 ).sort.squish;

    my $expected = 1;

    for @positively_sorted -> $current
    {
        last if $current != $expected;
        $expected++;
    }

    say $expected;

The main parts of the solutions of this kind are sorting the input values and then looping over them, comparing the values with the sequence of positive integers.

[Laurent Rosenfeld](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/laurent-rosenfeld/raku/ch-1.raku) also checkes it in a loop:

    for 0..@sorted.end-1 -> $i {
        $result = (@sorted[$i] + 1) and last
            if @sorted[$i] + 1 < @sorted[$i+1];
    }
    say $result.defined ?? $result !! @sorted[*-1] + 1;

Here’s another solution shown by [Athanasius](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/athanasius/raku/ch-1.raku). This solution actually uses sets together with scanning the numbers. To check if the number is in the set, the `∈` operator is used.

    my Set[Int] $N = Set[Int].new: @N.map: { .Int };

    my UInt $num = 1;
        ++$num while $num ∈ $N;

    "Output: $num".put;

* See more about the [infixes `(elem)` and `∈`](https://docs.raku.org/language/operators#infix_(elem),_infix_∈) in the Raku documentation

Bags are also a good choice for this task. Examine how it is used in the solution by [Colin Crain](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/colin-crain/raku/ch-1.raku#L29):

    unit sub MAIN (*@input) ;
    # . . .
    my %lookup = @input.Bag;

    say "input : ", @input;
    %lookup{$_}:exists or say "output:  $_" and exit for (1..*);

[Roger Bell_West](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/roger-bell-west/raku/ch-1.p6) submitted a similar (but in a more traditional style) solution:

    sub spn(@list) {
        my $r=set grep {$_ > 0}, @list;
        my $m=1;
        while ($r{$m}:exists) {
            $m++;
        }
        return $m;
    }

Other variations of organising the loop are shown [by Mohammad S Anwar](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/mohammad-anwar/raku/ch-1.raku#L26):

    my Int $i = 0;
    (1 .. @positive-numbers.tail).map: -> $n {
        return $n if $n < @positive-numbers[$i++]
    };

and [Ulrich Rieke](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/ulrich-rieke/raku/ch-1.raku#L17):

    my $current = 1 ;
    while ( $current (elem) $positiveSet ) {
        $current++ ;
    }
    say $current ;

[Kang-min Liu](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/gugod/raku/ch-1.raku) also uses sets but organises the loop over `1..*` differently:

    my $N = @*ARGS.map({ .Int }).Set();

    (1..*).first(-> $n { ! $N{$n} }).say;

[Myoungjin Jeon](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/jeongoon/raku/ch-1.raku) embeds more Unicode to the program. Notice the `∞` in the range as well as the `∌` operator that checks if the set does not contain an element;

    [1..∞].first({@*ARGS.Set∌$_}).say

* Learn about the [non-membership operator `∌`](https://docs.raku.org/language/operators#infix_∌) in the documentation
* [Unicode symbols and their ASCII equivalents](https://docs.raku.org/language/unicode_ascii)

### Other solutions

[Julio de Castro](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/juliodcs/raku/ch-1.raku) approached the task a bit differently:

    sub min-slot {
        for @*ARGS>>.Int.grep(* > 0).sort.unique.pairs {
            return .key.succ if .key.succ != .value;
        }
        return 0 # no empty *slot*
    }

    say 'Min slot: ' ~ min-slot;

Here, we again see the need to convert the input values to integers: `@*ARGS>>.Int`. But then, the `.succ` method is used to get the succeeding value. The program simply checks if—after sorting and de-dupping—the list of numbers has no gaps.

### Video review

The full review of Task 1 is available on YouTube:

<iframe width="560" height="315" src="https://www.youtube.com/embed/BxEJL1NAYfw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The timestamps for quick access to the review of each solution.

* [00:44](https://www.youtube.com/watch?v=BxEJL1NAYfw&t=44s) - Andrew Shitov
* [02:38](https://www.youtube.com/watch?v=BxEJL1NAYfw&t=158s) - Jan Krnavek
* [04:45](https://www.youtube.com/watch?v=BxEJL1NAYfw&t=285s) - Mark Anderson
* [06:12](https://www.youtube.com/watch?v=BxEJL1NAYfw&t=372s) - Markus Holzer
* [09:16](https://www.youtube.com/watch?v=BxEJL1NAYfw&t=556s) - Simon Proctor
* [10:32](https://www.youtube.com/watch?v=BxEJL1NAYfw&t=632s) - Arne Sommer
* [11:52](https://www.youtube.com/watch?v=BxEJL1NAYfw&t=712s) - Athanasius
* [13:11](https://www.youtube.com/watch?v=BxEJL1NAYfw&t=791s) - Colin Crain
* [14:20](https://www.youtube.com/watch?v=BxEJL1NAYfw&t=860s) - Jaldhar H. Vyas
* [16:10](https://www.youtube.com/watch?v=BxEJL1NAYfw&t=970s) - Julio de Castro
* [17:27](https://www.youtube.com/watch?v=BxEJL1NAYfw&t=1047s) - Kang-min Liu
* [18:28](https://www.youtube.com/watch?v=BxEJL1NAYfw&t=1108s) - Laurent Rosenfeld
* [20:14](https://www.youtube.com/watch?v=BxEJL1NAYfw&t=1214s) - Mohammad S Anwar
* [22:07](https://www.youtube.com/watch?v=BxEJL1NAYfw&t=1327s) - Myoungjin Jeon
* [22:59](https://www.youtube.com/watch?v=BxEJL1NAYfw&t=1379s) - Roger Bell_West
* [27:16](https://www.youtube.com/watch?v=BxEJL1NAYfw&t=1636s) - Ulrich Rieke

## Task 2. Count Candies

The task requires more thinking than the previous one :-) There are a couple of things that are not instantly visible or may be missed after reading the task description.

First, it is obvious that the number of candies that the candidates get is not directly proportional to their rankings. To some degree, we may consider candies division not fair, as the distantly located candidates with similarly high rankings can get significantly different number of awards.

Second, for the case of rankings 1, 2, 2, the third candidate gets only one candy even if its neighbour with the same ranking gets two.

Third, test case 1, 2, 3, 4 causes issues in many of the submitted solutions. The correct candy distribution should also be 1, 2, 3, 4, so, the total number is 10, but some of the solutions print 7 instead.

### Iterative or two-step solutions

Several solutions scan the array of rankings from left to right and then from right to left and take the maximum of the predicted candies among the iterations.

The idea can be illustrated by [the solution by Mark Anderson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/mark-anderson/raku/ch-2.raku):

    my @L2R = candies(@N);
    my @R2L = candies(@N.reverse);

    say (@L2R Z @R2L.reverse).map(*.max).sum;

This solution uses the `Z` zip operator as well as chained method calls together with the [WhateverCode block](https://perl6advent.wordpress.com/2017/12/11/all-the-stars-of-perl-6/).


It is not quite clear if the two scans are enough to find the correct result, and we even see [a separate method to check the result](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/athanasius/raku/ch-2.raku#L144) in the solution by Athanasius.


In [my own solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/ash/raku/ch-2.raku), I run the loop to adjust the number of candies until the values are settled. Actually, that never requires more than two iterations.

### Direct counting

In the solutions of the second type, we count candies directly in a single pass (well, with overlapping data parts). For example, look at the [solution submitted by Markus Holzer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/markus-holzer/raku/ch-2.raku):

    say ( Inf, |@N, Inf )
        .rotor( 3 => -2 )
        .map({ slip .[1] > .[0], .[1] > .[2] })
        .sum + @N

Here, the results of Boolean comparisons are implicitly converted to `1` and `0` when they are passed to `sum`. The last term `@N` adds the default candy for every candidate. Again, the `rotor` method is our friend for another week in a row. Another common trick in this solution is to add fake neighbours before and after the main data: `Inf, |@N, Inf`.

* Learn more about [flattening](https://docs.raku.org/language/subscripts#index-entry-flattening_) and [using slips](https://docs.raku.org/routine/slip)

Three participants, [Julio de Castro](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/juliodcs/raku/ch-2.raku), [Kang-min Liu](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/gugod/raku/ch-2.raku), and [Myoungjin Jeon](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-080/jeongoon/raku/ch-2.raku) use similar approach with the `!=` operator to make the check, for example:

    say @N.elems + elems (^@N.elems.pred).grep: { @N[$_] != @N[.succ] };

### Removing extras

I recommend reading the second part of the [blog post by Colin Crain](https://colincrain.wordpress.com/2020/10/03/dinner-for-a-tiny-number-of-dictators/), where he describes the idea of the solution, in which we remove ‘extra’ candies to minimize its number while still satisfying the original requirements.

### Video review

The full review of Task 2 is available on YouTube:

<iframe width="560" height="315" src="https://www.youtube.com/embed/82_yrV8tgnw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The timestamps to the reviews of the individual solutions:

* [02:48](https://www.youtube.com/watch?v=82_yrV8tgnw&t=168s) - Andrew Shitov
* [06:13](https://www.youtube.com/watch?v=82_yrV8tgnw&t=373s) - Jan Krnavek
* [14:22](https://www.youtube.com/watch?v=82_yrV8tgnw&t=862s) - Mark Anderson
* [17:45](https://www.youtube.com/watch?v=82_yrV8tgnw&t=1065s) - Markus Holzer
* [21:02](https://www.youtube.com/watch?v=82_yrV8tgnw&t=1262s) - Simon Proctor
* [23:13](https://www.youtube.com/watch?v=82_yrV8tgnw&t=1393s) - Arne Sommer
* [27:04](https://www.youtube.com/watch?v=82_yrV8tgnw&t=1624s) - Athanasius
* [31:36](https://www.youtube.com/watch?v=82_yrV8tgnw&t=1896s) - Colin Crain
* [37:03](https://www.youtube.com/watch?v=82_yrV8tgnw&t=2223s) - Jaldhar H. Vyas
* [38:44](https://www.youtube.com/watch?v=82_yrV8tgnw&t=2324s) - Julio de Castro
* [41:36](https://www.youtube.com/watch?v=82_yrV8tgnw&t=2496s) - Kang-min Liu
* [42:33](https://www.youtube.com/watch?v=82_yrV8tgnw&t=2553s) - Laurent Rosenfeld
* [46:27](https://www.youtube.com/watch?v=82_yrV8tgnw&t=2787s) - Mohammad S Anwar
* [49:15](https://www.youtube.com/watch?v=82_yrV8tgnw&t=2955s) - Myoungjin Jeon
* [51:48](https://www.youtube.com/watch?v=82_yrV8tgnw&t=3108s) - Roger Bell_West
* [53:44](https://www.youtube.com/watch?v=82_yrV8tgnw&t=3224s) - Ulrich Rieke

<br>

If you want to participate in **The Weekly Challenge**, please contact us at <perlweeklychallenge@yahoo.com>.
