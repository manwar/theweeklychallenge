---
title: "Andrew Shitov Weekly Review: Challenge - 073"
date: 2020-08-23T00:00:00+00:00
description: "Andrew Shitov Weekly Review: Challenge - #073."
type: post
image: images/blog/p6-review-challenge-073.jpg
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

Welcome to the **Raku Review** for **Week 073** of **The Weekly Challenge!**. For a quick overview, go through the [**original tasks**](/blog/perl-weekly-challenge-073/) and [**recap**](/blog/recap-challenge-073/) of the weekly challenge.

<br>

## Task 1. Min Sliding Window

The task was to scan the array of integers `@A` with a window of the given size `$S` and print the minimum value on each step.

The submitted solutions demonstrated that that was one of the simplest tasks during the last few weeks of the Weekly Challenge. Nevertheless, there are several interesting moments that I would like to cover here in this review.

### Using `rotor`

The first group of solutions includes those that used the built-in `rotor` routine. One of the ways to work with it is to pass a pair, in which case you get the groups of overlapping lists with the given width. The key of the pair defines the width; the value stands for the gap between the series. If the gap is negative and its absolute value is 1 unit smaller than the width, we get exactly what we want in the task.

For instance, for the sample array and the window width of 3:

    my @a = 1, 5, 0, 2, 9, 3, 7, 6, 4, 8;
    say @a.rotor(3 => -2);

This program produces the following sequence of lists:

    ((1 5 0) (5 0 2) (0 2 9) (2 9 3) (9 3 7) (3 7 6) (7 6 4) (6 4 8))

Now, just find the minimum and print the result.

### Using array slices

Another group is taking the sub-arrays using trivial computations of the indices of the first and the last elements within the window.

For example, in a loop using an array slice, as [Noud Aldenhoven did it](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/noud/raku/ch-1.p6).

```perl6
    gather for 0..@A.elems-$S -> $i {
        take min(@A[$i..$i+$S-1]);
    }
```

### Using maps

There is a cluster of solutions where scanning is done using the `map` routine. For example, look at the nice one-liner [by Ben Davies](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/ben-davies/raku/ch-1.raku):

```perl6
    say (0...@array - $s).map({ @array.skip($_).head($s).min });
```

### Finding the minimum

Not a surprise that the built-in `min` routine was used widely. But its usage differs from one solution to another.

For example, [Colin Crain](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/colin-crain/raku/ch-1.raku) used it in a `WhateverCode` block inside a `map`:

```perl6
    my @windows = @A.rotor($S=>-$S+1);
    my @output = @windows.map( *.min );
```

A similar solution is [proposed by Markus Holzer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/markus-holzer/raku/ch-1.raku):

```perl6
    say join ' ', @A.rotor( $S => -($S - 1) ).map: *.min;
```

In [my solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/ash/raku/ch-1.raku), I am using `for` and calling `.min` on a topicalized variable:

```perl6
    .min.say for @a.rotor($s => 1 - $s);
```

### Collecting the results

In those solutions where the result is not printed immediately, the resulting values are usually collected in an array, and there are two main approaches to it. First, by `push`ing the newly computed item. Look at [Roger Bell_West’s variant](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/roger-bell-west/raku/ch-1.p6) for the reference:

```perl6
    my @out;
    for (0..(@a.elems-$s)) -> $i {
        push @out,min(@a[$i..$i+$s-1]);
    }
```

Second, by using a `gather` and `take` pair, for example, as [in Laurent Rosendeld’s code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/laurent-rosenfeld/raku/ch-1.raku):

```perl6
    my @result = gather {
        for 0..@a.elems - $s  -> $i {
            take min @a[$i..^$i + $s];
        }
    }
```

### Bonus track

An outstanding solution is [demonstrated by Jan Krnavek](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/wambash/raku/ch-1.raku), where all the main steps of the algorithm are connected together using the [`andthen` infix](https://docs.raku.org/routine/andthen):

```perl6
    sub min-sliding-window (@a, $s) {
        @a
        andthen .rotor: $s => - $s.pred
        andthen .map: *.min
    }
```

### Video review

The full review of the solutions to the Task 1 is available on YouTube:

* https://www.youtube.com/watch?v=P3zmMrdVoyk

Starting from this week, I’ll be publishing the timestamps for quick access to the review of each solution.

* [01:00](https://www.youtube.com/watch?v=P3zmMrdVoyk&t=60s) — Ulrich Rieke
* [03:54](https://www.youtube.com/watch?v=P3zmMrdVoyk&t=234s) — Roger Bell_West
* [04:47](https://www.youtube.com/watch?v=P3zmMrdVoyk&t=287s) — Myoungjin Jeon
* [08:00](https://www.youtube.com/watch?v=P3zmMrdVoyk&t=480s) — Mohammad S Anwar
* [10:15](https://www.youtube.com/watch?v=P3zmMrdVoyk&t=615s) — Laurent Rosenfeld
* [11:35](https://www.youtube.com/watch?v=P3zmMrdVoyk&t=695s) — Javier Luque
* [12:30](https://www.youtube.com/watch?v=P3zmMrdVoyk&t=750s) — Jaldhar H. Vyas
* [13:57](https://www.youtube.com/watch?v=P3zmMrdVoyk&t=837s) — Colin Crain
* [15:32](https://www.youtube.com/watch?v=P3zmMrdVoyk&t=932s) — Athanasius
* [17:37](https://www.youtube.com/watch?v=P3zmMrdVoyk&t=1057s) — Arne Sommer
* [19:35](https://www.youtube.com/watch?v=P3zmMrdVoyk&t=1175s) — Simon Proctor
* [20:47](https://www.youtube.com/watch?v=P3zmMrdVoyk&t=1247s) — Noud Aldenhoven
* [21:34](https://www.youtube.com/watch?v=P3zmMrdVoyk&t=1294s) — Markus Holzer
* [21:58](https://www.youtube.com/watch?v=P3zmMrdVoyk&t=1318s) — Mark Anderson
* [22:38](https://www.youtube.com/watch?v=P3zmMrdVoyk&t=1358s) — Luca Ferrari
* [23:47](https://www.youtube.com/watch?v=P3zmMrdVoyk&t=1427s) — Jason Messer
* [24:16](https://www.youtube.com/watch?v=P3zmMrdVoyk&t=1456s) — Jan Krnavek
* [25:58](https://www.youtube.com/watch?v=P3zmMrdVoyk&t=1558s) — Ben Davies
* [29:07](https://www.youtube.com/watch?v=P3zmMrdVoyk&t=1747s) — Andrew Shitov

### Additional materials

* [Read more about `rotor` in the Raku documentation](https://docs.raku.org/routine/rotor)
* [Read more about `min` in the Raku documentation](https://docs.raku.org/routine/min)
* [The Pearls of Raku: The secrets of `min` (and `max`)](https://andrewshitov.com/2020/08/23/the-pearls-of-raku-issue-8-the-secrets-of-min-and-max/)

## Task 2. Smallest Neighbour

In the second task, you are also working with an array of integers and for each of the items, you need to find the minimum item among the elements prior to the current one. If the current one is bigger than that minimum or if it is the first item in the array, print `0`.

To understand the task, you needed to examine the examples, but most of the participants dit it well; there is only one solution that missed that additional requirement.

### Excerpts from the solutions

In the solutions, we again see similar ways of finding the minimum values of a part of an array. Collecting the result is done via `gather` and `take` or by `push`ing or `append`ing the elements to the end of the array.

To simplify finding the minimum, some participants used `grep` to ignore all the items which are bigger than the current one. For example, you can see it in a [solution by Mark Andreson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/mark-anderson/raku/ch-2.raku):

```perl6
    @A.kv.map(-> $k,$v {(@A.head($k+1).grep(* < $v) or 0).min}).join(", ").List.say;
```

Or as [Markus Holzer did it](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/markus-holzer/raku/ch-2.raku) in his compact solution:

```perl6
    say join ' ', 0, gather for 1 .. +@A - 1 -> $i {
        take .min with @A[ 0..$i-1 ].grep( * < @A[$i] ) or 0 };
```

By the way, [Roger Bell_West](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/roger-bell-west/raku/ch-2.p6) demonstrated the method of computing the minumum without using any explicit comparisons. Just add the current minimum value to the new data set, and find the minimum again:

```perl6
    $wm=min($wm,@a[$i-1]);
```

[Myoungjin Jeon](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/jeongoon/raku/ch-2.raku) reminds us how to mixin a role in Raku with `but`:

```perl6
    role zero { method raku { "0" } }

    . . .

    $smallest < $c ?? $smallest !! $c but zero
```

Later, when you call the `raku` method on a value, the role’s method is used for the elements where that role was applied:

```perl6
    say "Output: {@answer.map( *.raku ).map( *.Int ).Array.raku}"
```

### Bonus track

As a side story, [watch](https://www.youtube.com/watch?v=kfdHK5m2vQo&t=2738s) the deparsing and modifying the regular expression that [Mohammad S Anwar used](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/mohammad-anwar/raku/ch-2.raku) in his solution, where he takes the input data as a string:

```perl6
    sub MAIN(Str $list = "7, 8, 3, 12, 10") {
        say $list;
        smallest-neighbour($list).join(', ').say;
    }

    sub smallest-neighbour(Str $list is copy) {

        die "ERROR: Invalid list [$list].\n"
            unless $list ~~ /^[\s?\-?\d\,?\s?]+$/;
        . . .
    }
```

### Video review

The full review of the solutions to the Task 2 is available on YouTube:

* https://www.youtube.com/watch?v=kfdHK5m2vQo

The timestamps to the reviews of the individual solutions:

* [01:50](https://www.youtube.com/watch?v=kfdHK5m2vQo&t=110s) — Andrew Shitov
* [03:42](https://www.youtube.com/watch?v=kfdHK5m2vQo&t=222s) — Ben Davies
* [10:00](https://www.youtube.com/watch?v=kfdHK5m2vQo&t=600s) — Jan Krnavek
* [18:37](https://www.youtube.com/watch?v=kfdHK5m2vQo&t=1117s) — Jason Messer
* [20:04](https://www.youtube.com/watch?v=kfdHK5m2vQo&t=1204s) — Luca Ferrari
* [23:02](https://www.youtube.com/watch?v=kfdHK5m2vQo&t=1382s) — Mark Anderson
* [24:42](https://www.youtube.com/watch?v=kfdHK5m2vQo&t=1482s) — Markus Holzer
* [26:30](https://www.youtube.com/watch?v=kfdHK5m2vQo&t=1590s) — Noud Aldenhoven
* [27:35](https://www.youtube.com/watch?v=kfdHK5m2vQo&t=1655s) — Simon Proctor
* [29:18](https://www.youtube.com/watch?v=kfdHK5m2vQo&t=1758s) — Arne Sommer
* [30:44](https://www.youtube.com/watch?v=kfdHK5m2vQo&t=1844s) — Athanasius
* [32:51](https://www.youtube.com/watch?v=kfdHK5m2vQo&t=1971s) — Colin Crain
* [36:17](https://www.youtube.com/watch?v=kfdHK5m2vQo&t=2177s) — Jaldhar H. Vyas
* [38:33](https://www.youtube.com/watch?v=kfdHK5m2vQo&t=2313s) — Javier Luque
* [40:22](https://www.youtube.com/watch?v=kfdHK5m2vQo&t=2313s) — Laurent Rosenfeld
* [42:00](https://www.youtube.com/watch?v=kfdHK5m2vQo&t=2520s) — Mohammad S Anwar
* [49:11](https://www.youtube.com/watch?v=kfdHK5m2vQo&t=2951s) — Myoungjin Jeon
* [56:11](https://www.youtube.com/watch?v=kfdHK5m2vQo&t=3371s) — Roger Bell_West
* [57:40](https://www.youtube.com/watch?v=kfdHK5m2vQo&t=3460s) — Ulrich Rieke

### Additional materials

* [Read more about `gather` and `take` in the Raku documentation](https://docs.raku.org/syntax/gather%20take)
* [Read more about mixins of roles in the Raku documentation](https://docs.raku.org/language/objects#index-entry-but)
* [The Pearls of Raku: Triangular reduction metaoperator](https://andrewshitov.com/2020/08/22/the-pearls-of-raku-issue-7-triangular-reduction-metaoperator/)

<br>

***
## BLOGS
***

<br>

### [Andrew Shitov](https://andrewshitov.com/2020/08/10/raku-challenge-week-73/), [Arne Sommer](https://raku-musings.com/sliding-neighbour.html), [Colin Crain](https://colincrain.wordpress.com/2020/08/15/open-the-window-just-a-little-bit-so-your-smallest-smaller-neighbor-can-get-in/), [Jaldhar H. Vyas](https://www.braincells.com/perl/2020/08/perl_weekly_challenge_week_73.html), [Javier Luque](https://perlchallenges.wordpress.com/2020/08/12/perl-weekly-challenge-073/), [Luca Ferrari](https://fluca1978.github.io/2020/08/16/PerlWeeklyChallenge73.html), [Laurent Rosenfeld](http://blogs.perl.org/users/laurent_r/2020/08/perl-weekly-challenge-73-min-sliding-window-and-smallest-neighbor.html), [Mohammad S Anwar](https://perlweeklychallenge.org/blog/weekly-challenge-073/) and [Roger Bell_West](https://blog.firedrake.org/archive/2020/08/Perl_Weekly_Challenge_73__fun_with_minima.html).

<br>

If you want to participate in **The Weekly Challenge**, please contact us at <perlweeklychallenge@yahoo.com>.
