---
title: "Andrew Shitov Weekly Review: Challenge - 077"
date: 2020-09-20T00:00:00+00:00
description: "Andrew Shitov Weekly Review: Challenge - #077."
type: post
image: images/blog/p6-review-challenge-077.jpg
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

Welcome to the **Raku Review** for **Week 077** of **The Weekly Challenge!**. For a quick overview, go through the [**original tasks**](/blog/perl-weekly-challenge-077/) and [**recap**](/blog/recap-challenge-077/) of the weekly challenge.

<br>

The tasks this week required some additional thinking before the actual implementation. The first task, in particular, can be solved in just a few lines of code. But let’s move on directly to them.

## Task 1. Fibonacci Sum

In this task, we need to find the combinations of non-repeating Fibonacci numbers that add up to the given number `$N`. In the ‘official’ Fibonacci sequence, there are only two equal items; those are 1 and 1 at the very beginning of it. So, it is quite practical to use a shifted sequence that starts with 1, 2.

Most of the participants employed the [sequence operator](https://docs.raku.org/routine/...) of Raku to generate Fibonacci numbers below and including `$N`:

```perl6
    my @fib = 1, 2, * + * ...^ * > $N;
```

The next steps fall into two groups.

In the first, brute force is applied to find the valid result by filtering all the combinations that you can make with the given list of Fibonacci numbers. For example, a self-explanatory code in [Laurent Rosenfeld’s program](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/laurent-rosenfeld/raku/ch-1.raku#L6):

```perl6
    for @fib.combinations -> $s {
        say $s if $n == [+] $s;
    }
```

In [Colin Crane’s solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/colin-crain/raku/ch-1.raku#L46), there’s an exciting addition to speed up the computations:

```perl6
    my @output = @fib.combinations.race:8degree:200batch.grep( *.sum == $target );
```

The [`race` method](https://docs.raku.org/routine/race) together with its `degree` and `batch` parameters instructs the compiler to perform operations in parallel.

A more traditional method call can replace the non-standard syntax with colons:

```perl6
    @fib.combinations.race(degree => 8, batch => 200)
```

The second approach is to build the representation of the number directly, and there is some theoretical support to that via the so-called [Zeckendorf representation](https://encyclopediaofmath.org/wiki/Zeckendorf_representation).

For example, for the input number 1001, the biggest Fibonacci number is 987, so we take it. The remainder is 14, for which the biggest Fibonacci number is 13. So, 1001 equals 987 + 13 + 1, and it is the shortest sum. To get all possible representations of the original number, you need to repeat the procedure for all of the numbers 987, 13, and 1 and take only those combinations where you have no repeated numbers.

Markus Holzer did an incredible job to not only implement the algorithm but also to make it extremely fast. [His program](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/markus-holzer/raku/ch-1.raku) finds the result for a big enough number 123456789 within 10 seconds, which is an unbeatable result among the other solutions.

### Additional reading

* [The sequence operator `...`](https://docs.raku.org/routine/...)
* [Raku documentation on `race`](https://docs.raku.org/routine/race)
* [Raku documentation on `hyper`](https://docs.raku.org/routine/hyper)
* [Zeckendorf representation](https://encyclopediaofmath.org/wiki/Zeckendorf_representation)

### Video review

The full review of Task 1 is available on YouTube:

<iframe width="560" height="315" src="https://www.youtube.com/embed/SI_E465aZ0k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The timestamps for quick access to the review of each solution.

* [01:37](https://www.youtube.com/watch?v=SI_E465aZ0k&t=97s) - Arne Sommer
* [06:33](https://www.youtube.com/watch?v=SI_E465aZ0k&t=393s) - Feng Chang
* [10:00](https://www.youtube.com/watch?v=SI_E465aZ0k&t=600s) - Jason Messer
* [15:25](https://www.youtube.com/watch?v=SI_E465aZ0k&t=925s) - Jan Krnavek
* [19:58](https://www.youtube.com/watch?v=SI_E465aZ0k&t=1198s) - Mark Anderson
* [24:30](https://www.youtube.com/watch?v=SI_E465aZ0k&t=1470s) - Markus Holzer
* [36:20](https://www.youtube.com/watch?v=SI_E465aZ0k&t=2180s) - P6steve
* [37:52](https://www.youtube.com/watch?v=SI_E465aZ0k&t=2272s) - Simon Proctor
* [39:08](https://www.youtube.com/watch?v=SI_E465aZ0k&t=2348s) - Andrew Shitov
* [40:13](https://www.youtube.com/watch?v=SI_E465aZ0k&t=2413s) - Athanasius
* [45:36](https://www.youtube.com/watch?v=SI_E465aZ0k&t=2736s) - Colin Crain
* [48:18](https://www.youtube.com/watch?v=SI_E465aZ0k&t=2898s) - Laurent Rosenfeld
* [49:12](https://www.youtube.com/watch?v=SI_E465aZ0k&t=2952s) - Mohammad S Anwar
* [51:16](https://www.youtube.com/watch?v=SI_E465aZ0k&t=3076s) - Myoungjin Jeon
* [52:20](https://www.youtube.com/watch?v=SI_E465aZ0k&t=3140s) - Roger Bell_West
* [53:36](https://www.youtube.com/watch?v=SI_E465aZ0k&t=3216s) - Ulrich Rieke


## Task 2. Lonely X

In the second task, for the given matrix, each cell of which only keeps `X` or `O`, we need to find the so-called lonely `X`s which are surrounded only by `O`s.

The general approach is to scan the source matrix so that we visit all of its cells, and then to visit all the neighbours that surround the cell. As a lonely `X` can appear on the border or in the corner, you should ignore the missing neighbours.

A straightforward pair of nested loops can be used to scan the cells. As in [Arne Sommer's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/arne-sommer/raku/ch-2.p6#L17), for example:

```perl6
    for ^$rows -> $row
    {
        for ^$cols -> $col
        {
            . . .
            $is_lonely++ if is_lonely(@matrix, $row, $col);
        }
    }
```

Visiting the neighbours is equivalent to [changing one or both](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/arne-sommer/raku/ch-2.p6#L32) of the coordinates to `±1` and checking the contents of the cell:

```perl6
    for (-1, 0, 1) -> $r
    {
        for (-1, 0, 1) -> $c
        {
            next if $r == $c == 0;
            next unless @matrix[$row + $r][$col + $c].defined;

            return False if @matrix[$row + $r][$col + $c] eq 'X';
        }
    }
```

A very attractive and useful feature of Raku that help to simplify the code is a [junction](https://docs.raku.org/type/Junction). There are different forms of it, in particular, the `any`- and `all`-junctions. Just look at the [program submitted by Feng Chang](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/feng-chang/raku/ch-2.raku#L15) to see the advantage immediately:

```perl6
    for 1..$rows -> $i {
        for 1..$width -> $j {
            my $junc = all(@a[$i-1;$j-1], @a[$i-1;$j], @a[$i-1;$j+1],
                        @a[$i;$j-1],                @a[$i;$j+1],
                        @a[$i+1;$j-1], @a[$i+1;$j], @a[$i+1;$j+1]
                    );
            ++$cnt if @a[$i;$j] eq 'X' and $junc eq 'O';
        }
    }
```

In the body of the inner loop, the `$junc` variable encloses all eight neighbours in a single variable, which is later compared with the value: `$junc eq 'O'`.

In the same solution, [we can also see](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/feng-chang/raku/ch-2.raku#L5) a step to prepare the input data to surround the whole matrix with ‘good neighbours‘:

```perl6
    @a.push($line.comb.Array.unshift('O').push('O'));

    . . .

    @a.unshift(['O' xx $width + 2]);
    @a.push(['O' xx $width + 2]);
```

By doing that, you do not have to check if the neighbour exists when visiting it.

But checking if we are withing the borders is another delightful small task that you can solve differently. For example, [Mark Anderson uses](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/mark-anderson/raku/ch-2.raku#L14) the defined-or operator `//` to substitute an empty string for the non-existing cells:

```perl6
    take [$r, $c] unless any((@matrix[$r-1][$c-1] // q{}),
                             (@matrix[$r-1][$c  ] // q{}),
                             (@matrix[$r-1][$c+1] // q{}),
                             (@matrix[$r  ][$c-1] // q{}),
                             (@matrix[$r  ][$c+1] // q{}),
                             (@matrix[$r+1][$c+1] // q{}),
                             (@matrix[$r+1][$c  ] // q{}),
                             (@matrix[$r+1][$c-1] // q{})) eq "X";
```

(Also don’t miss the use of the `any`-junction.)

[Markus Holzer uses](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/markus-holzer/raku/ch-2.raku#L12) `andthen` to go on only with defined cells:

```perl6
    $matrix[ $x + $c[0]; $y + $c[1] ] andthen $_ eq "X"
```

To build the ‘guest map’ of the local neighbours, we can use different tricks. [For example](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/shahed-nooshmand/raku/ch-2.raku), the following construct gives the deltas such as (-1, 1) or (0, 1) that you can add to the coordinates of the current cell:

```perl6
    <1 0 -1> X <1 0 -1>
```

Of course, nobody stops you from [hard-coding the list](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/markus-holzer/raku/ch-2.raku#L9) of relative coordinates:

```perl6
    state @maybe-neighbours = (-1,-1), (-1,0), (-1,1), (0,-1), (0, 1), (1,-1), (1,0), (1,1);
```

When computing the absolute coordinates, you can even [use it](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/ash/raku/ch-2.raku#L24) with a cute [hyper-operator](https://docs.raku.org/language/operators#Hyper_operators):

```perl6
    @neighbours.map(* <<+>> @coord))
```

### Additional reading

* [The Pearls of Raku, Issue 12: all and any](https://andrewshitov.com/2020/09/18/the-pearls-of-raku-issue-12-all-and-any/)
* [More about `andthen` in the documentation](https://docs.raku.org/routine/andthen)

### Video review

There are much more smart coding bits that the participants used in their solutions. Enjoy the full review on YouTube.

<iframe width="560" height="315" src="https://www.youtube.com/embed/sZvG6HWCkeY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The timestamps to the reviews of the individual solutions:

* [01:13](https://www.youtube.com/watch?v=sZvG6HWCkeY&t=73s) - Arne Sommer
* [05:50](https://www.youtube.com/watch?v=sZvG6HWCkeY&t=350s) - Feng Chang
* [11:24](https://www.youtube.com/watch?v=sZvG6HWCkeY&t=684s) - Jason Messer
* [16:54](https://www.youtube.com/watch?v=sZvG6HWCkeY&t=1014s) - Mark Anderson
* [20:06](https://www.youtube.com/watch?v=sZvG6HWCkeY&t=1206s) - Markus Holzer
* [29:02](https://www.youtube.com/watch?v=sZvG6HWCkeY&t=1742s) - P6steve
* [34:49](https://www.youtube.com/watch?v=sZvG6HWCkeY&t=2089s) - Shahed Nooshmand
* [37:37](https://www.youtube.com/watch?v=sZvG6HWCkeY&t=2257s) - Simon Proctor
* [43:48](https://www.youtube.com/watch?v=sZvG6HWCkeY&t=2628s) - Andrew Shitov
* [47:45](https://www.youtube.com/watch?v=sZvG6HWCkeY&t=2865s) - Athanasius
* [54:51](https://www.youtube.com/watch?v=sZvG6HWCkeY&t=3291s) - Colin Crain
* [58:04](https://www.youtube.com/watch?v=sZvG6HWCkeY&t=3484s) - Laurent Rosenfeld
* [1:00:28](https://www.youtube.com/watch?v=sZvG6HWCkeY&t=3628s) - Mohammad S Anwar
* [1:07:10](https://www.youtube.com/watch?v=sZvG6HWCkeY&t=4030s) - Myoungjin Jeon
* [1:11:27](https://www.youtube.com/watch?v=sZvG6HWCkeY&t=4287s) - Roger Bell_West

<br>

***
## BLOGS
***

<br>

#### Andrew Shitov [BLOG #1](https://andrewshitov.com/2020/09/07/add-up-fibonacci-numbers-the-weekly-challenge-77-task-1/) and [BLOG #2](https://andrewshitov.com/2020/09/08/lonely-x-the-weekly-challenge-77-task-2/)

#### [Arne Sommer](https://raku-musings.com/lonely-sum.html), [Colin Crain](https://colincrain.wordpress.com/2020/09/12/all-those-pasta-lies-led-to-a-lonely-ex/), [Laurent Rosenfeld](http://blogs.perl.org/users/laurent_r/2020/09/perl-weekly-challenge-fibonacci-sum-and-lonely-x.html), [Mohammad S Anwar](https://perlweeklychallenge.org/blog/weekly-challenge-077/), [Roger Bell_West](https://blog.firedrake.org/archive/2020/09/Perl_Weekly_Challenge_77__Fibonacci_Sum_and_Lonely_X.html) and [Shahed Nooshmand](https://rafraichisso.ir/2020/09/10/pwc-77).

<br>

If you want to participate in **The Weekly Challenge**, please contact us at <perlweeklychallenge@yahoo.com>.
