---
title: "Andrew Shitov Weekly Review: Challenge - 083"
date: 2020-11-08T00:00:00+00:00
description: "Andrew Shitov Weekly Review: Challenge - #083."
type: post
image: images/blog/p6-review-challenge-083.jpg
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

Welcome to the **Raku Review** for **Week 083** of **The Weekly Challenge!**. For a quick overview, go through the [**original tasks**](/blog/perl-weekly-challenge-083/) and [**recap**](/blog/recap-challenge-083/) of the weekly challenge.

***

## Task 1. Words Length

The first task this week is quite simple. And as always in such cases, more people submitted their solutions :-) The task is to find the total number of characters in the phrase excluding its first and the last words. Not quite clear if we should also ignore punctuation, but that’s a separate question.

In Raku, we can use the `words` method that splits the phrase into words, after which take a slice to extract the elements with indices from `1` to `*-2`. After that point, different approaches are possible: either get the lengths of all the words and add them up or join the words and then take the total length in one go.

The first branch gives solutions similar [to this one](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/ash/raku/ch-1.raku):

    $s.words[1 .. *-2]>>.chars.sum.say;

The second approach leads [to the following code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/mark-anderson/raku/ch-1.p6):

    $S.words[1..*-2].join.chars;

Alternatively, you can [remove those non-wanted words and spaces](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/colin-crain/raku/ch-1.raku) using a regex, and then take the lengths of what’s left:

    $_ = $str;
    s:g/^ \s* \S+ | \S+ \s* $ | \s+//;
    say $_.chars;

Or you can `map` the words and exploit side effects of executing a code block. This example is a good start to study the facilities for parallel computing that Raku offers. Think about how to add [`race`](https://docs.raku.org/routine/race) and [atomic](https://docs.raku.org/type/atomicint) operations to [this program](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/ulrich-rieke/raku/ch-1.raku):

    my $stringlen = 0 ;
    @words[1..$arraylen - 2].map( {$stringlen += $_.chars } ) ;
    say $stringlen ;

An [alternative approach](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/gugod/raku/ch-1.raku) is to find the positions of all spaces and use a simple formula to find the length of the words we need:

    sub words-length (Str $s) {
        my @w = $s.trim.indices(' ');
        return @w.elems == 0 ?? 0 !! @w.tail - @w.head - @w.elems + 1;
    }

### Video review

The full review of Task 1 is available on YouTube:

<iframe width="560" height="315" src="https://www.youtube.com/embed/gnE9DAluVIE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The timestamps for quick access to the review of each solution.

* [00:59](https://www.youtube.com/watch?v=gnE9DAluVIE&t=59s) - Andrew Shitov
* [02:16](https://www.youtube.com/watch?v=gnE9DAluVIE&t=136s) - Arne Sommer
* [03:12](https://www.youtube.com/watch?v=gnE9DAluVIE&t=192s) - Jan Krnavek
* [04:38](https://www.youtube.com/watch?v=gnE9DAluVIE&t=278s) - Kang-min Liu
* [07:25](https://www.youtube.com/watch?v=gnE9DAluVIE&t=445s) - Mark Anderson
* [07:59](https://www.youtube.com/watch?v=gnE9DAluVIE&t=479s) - Markus Holzer
* [08:26](https://www.youtube.com/watch?v=gnE9DAluVIE&t=506s) - PJ Durai
* [09:22](https://www.youtube.com/watch?v=gnE9DAluVIE&t=562s) - Simon Proctor
* [10:44](https://www.youtube.com/watch?v=gnE9DAluVIE&t=644s) - Stuart Little
* [11:25](https://www.youtube.com/watch?v=gnE9DAluVIE&t=685s) - Athanasius
* [12:51](https://www.youtube.com/watch?v=gnE9DAluVIE&t=771s) - Colin Crain
* [14:04](https://www.youtube.com/watch?v=gnE9DAluVIE&t=844s) - Daniel Mita
* [17:09](https://www.youtube.com/watch?v=gnE9DAluVIE&t=1029s) - Jaldhar H. Vyas
* [19:13](https://www.youtube.com/watch?v=gnE9DAluVIE&t=1153s) - Julio de Castro
* [20:13](https://www.youtube.com/watch?v=gnE9DAluVIE&t=1213s) - Laurent Rosenfeld
* [20:44](https://www.youtube.com/watch?v=gnE9DAluVIE&t=1244s) - Myoungjin Jeon
* [22:54](https://www.youtube.com/watch?v=gnE9DAluVIE&t=1374s) - Roger Bell_West
* [23:51](https://www.youtube.com/watch?v=gnE9DAluVIE&t=1431s) - Ulrich Rieke

## Task 2. Flip Array

In the second task, you had to take an array of positive integers. For some of them, you can alter the sign. In the end, add the numbers up to get the minimum possible but non-negative sum. The solution with the minimum sum and the minimum number of sign flips wins.

On a bigger scale, we can split the solutions into three groups. In the first, we simply try to find all possible combinations of `+` and `-`. In the second, we split the numbers into two groups, one of which comes with `+`, while another with `-`.

The first type of solution is easily implemented with the help of binary representation of the numbers from 0 to <i>2<sup>n</sup> - 1</i>, where <i>n</i> is the size of input data. Zero bits can represent a `+`, and set bits would stand for `-`. Having the bits in an array, you can use Raku’s `Z` operator [to multiply data items](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/ash/raku/ch-2.raku#L24):

    my $sum = [+] @bits>>.subst(0, -1) Z* @a;

Splitting the items into two groups [can be done](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/colin-crain/raku/ch-2.raku#L52) with testing all `combinations`:

    for @arr.combinations($k) -> $c {
        my $new_sum = $base_sum - 2 * $c.sum;
        if 0 <= $new_sum < $min {
            $min = $new_sum;
            $pick = $c;
        }
    }

Note that in this fragment, the minus sign is indirectly applied by subtracting the values twice.

There’s also a completely different approach with recursion. [Here is the idea](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/arne-sommer/raku/ch-2.p6#L29):

    sub do_it (@left, @right is copy) {
        my $current = @right.shift;

        # . . .

        do_it((@left,  $current).flat, @right);
        do_it((@left, -$current).flat, @right);
    }

As you see, on each step, two branches are tested: in one, the next item is added with a `+`, while in the other with `-`.

From the other interesting solutions, let me highlight the usage of Raku’s built-ins. [Using [`classify` routine](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/markus-holzer/raku/ch-2.raku):

    my &less-than-zero = *.grep: * < 0;

    say +less-than-zero               # find and count all negative numbers of
        ( [X] map { +$_, -$_ }, @A )  # all possible candidates
            .classify( *.sum )        # grouped by sum
            .grep( *.key > -1 )       # filtered where sum is positive
            .sort( *.key )            # sorted by sum
            .head.value               # closest to zero
            .min( &less-than-zero )   # the one with the least flips

[And with the `reduce` function](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/stuart-little/raku/ch-2.p6):

    sub cmpair($cap) {
        return -> @a, @b {
        (@b.sum <= $cap) ?? max(@a,(@b.sum,-@b.elems)) !! @a;
        }
    }

    say -reduce(cmpair(@*ARGS.sum/2), (0,0), |@*ARGS.combinations).[1];

Explore the rest of the code in the below video review!

### Video review

The full review of Task 2 is available on YouTube:

<iframe width="560" height="315" src="https://www.youtube.com/embed/C5GDIKHbImo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The timestamps to the reviews of the individual solutions:

* [01:09](https://www.youtube.com/watch?v=C5GDIKHbImo&t=69s) - Andrew Shitov
* [04:19](https://www.youtube.com/watch?v=C5GDIKHbImo&t=259s) - Arne Sommer
* [09:55](https://www.youtube.com/watch?v=C5GDIKHbImo&t=595s) - Jan Krnavek
* [12:00](https://www.youtube.com/watch?v=C5GDIKHbImo&t=720s) - Kang-min Liu
* [15:02](https://www.youtube.com/watch?v=C5GDIKHbImo&t=902s) - Mark Anderson
* [17:18](https://www.youtube.com/watch?v=C5GDIKHbImo&t=1038s) - Markus Holzer
* [19:58](https://www.youtube.com/watch?v=C5GDIKHbImo&t=1198s) - PJ Durai
* [21:55](https://www.youtube.com/watch?v=C5GDIKHbImo&t=1315s) - Simon Proctor
* [26:36](https://www.youtube.com/watch?v=C5GDIKHbImo&t=1596s) - Stuart Little
* [29:12](https://www.youtube.com/watch?v=C5GDIKHbImo&t=1752s) - Athanasius
* [32:26](https://www.youtube.com/watch?v=C5GDIKHbImo&t=1946s) - Colin Crain
* [34:32](https://www.youtube.com/watch?v=C5GDIKHbImo&t=2072s) - Daniel Mita
* [35:58](https://www.youtube.com/watch?v=C5GDIKHbImo&t=2158s) - Jaldhar H. Vyas
* [39:21](https://www.youtube.com/watch?v=C5GDIKHbImo&t=2361s) - Julio de Castro
* [43:22](https://www.youtube.com/watch?v=C5GDIKHbImo&t=2602s) - Laurent Rosenfeld
* [47:25](https://www.youtube.com/watch?v=C5GDIKHbImo&t=2845s) - Myoungjin Jeon
* [50:44](https://www.youtube.com/watch?v=C5GDIKHbImo&t=3044s) - Roger Bell_West
* [51:45](https://www.youtube.com/watch?v=C5GDIKHbImo&t=3105s) - Ulrich Rieke

<br>

If you want to participate in **The Weekly Challenge**, please contact us at <perlweeklychallenge@yahoo.com>.
