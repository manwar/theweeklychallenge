---
title: "Andrew Shitov Weekly Review: Challenge - 078"
date: 2020-09-27T00:00:00+00:00
description: "Andrew Shitov Weekly Review: Challenge - #078."
type: post
image: images/blog/p6-review-challenge-078.jpg
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

Welcome to the **Raku Review** for **Week 078** of **The Weekly Challenge!**. For a quick overview, go through the [**original tasks**](/blog/perl-weekly-challenge-078/) and [**recap**](/blog/recap-challenge-078/) of the weekly challenge.

<br>

This week, both tasks gave some possibilities to literate programming in Raku. Indeed, in the first task, we have to find an array items which are bigger than **all** of the items to its right. Just use a built-in `all` routine: `say @a[$_] if @a[$_] > all(@a[$_ ^.. *])`. In the second task, we need to **rotate** an array. So, just use `rotate` which is a part of the language: `say @a.rotate($_) for @b`. Isn’t Raku amazing?

## Task 1. Leader Element

There are three main approaches to the solution here.

### Built-in `all`

In the first approach, we compare the current element with the elements following it. In this case, the closer the item is to the end of the array, the more often we check it. It is a bit inefficient but is completely fine for small data sets.

Let me show [my program](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/ash/raku/ch-1.raku) as an example of the first approach:

```perl6
    my @a = 9, 10, 7, 5, 6, 1;

    for @a.kv -> $i, $v {
        say $v if $v > all(@a[$i^..*]);
    }
```

### Maximums from the end

It is still interesting to implement a more efficient algorithm. All you need to do that is to walk from right to left and find the maximums on your way.

[Kang-min Liu demonstrates](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/gugod/raku/ch-1.raku) an example of the this approach:

```perl6
    sub leaders(@A) {
        my $max = -Inf;
        return @A.reverse.grep(-> $v { ($v > $max) ?? ( $max = $v ; True ) !! False }).reverse();
    }

    say leaders(@*ARGS);
```

### Other approaches

[Julio de Castro offered](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/juliodcs/raku/ch-1.raku) an attractive program written in a functional style:

```perl6
    sub get-leaders {
        my \A          = ( 9, 10, 7, 5, 6, 1 );
        sub is-last    { $^i == A.elems - 1 }
        sub current    { A[$^i] }
        sub following  { A[$^i + 1] }
        sub is-leading { current($^i) > following($^i) }
        sub is-leader  { is-last($^i) || is-leading($^i) }
        sub if-leader  { is-leader($^i) ?? current($^i) !! () }
        sub add-leader { ($^list.flat, if-leader($^pos)).flat }

        A.elems == 0 ?? (0) !! [[&add-leader]] ((), |^A)
    }

    say get-leaders;
```

There is a tiny mistake there and you can watch [the video review](https://www.youtube.com/watch?v=WKEfebHYL7Y) below to see how you can fix the solution. Nevertheless, enjoy the beauty of decomposing the task into clearly defined simple steps.

[Markus Holzer created](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/markus-holzer/raku/ch-1.raku#L9) an additional solution that uses recursion:

```perl6
    sub leader-elements-recursive( @stuff ) {
        sub find( $that, *@the-rest ) {
            take $that      if $that > all @the-rest;
            find |@the-rest if @the-rest }

        +@stuff ?? gather find |@stuff !! 0
    }
```

### Additional reading

* [Junctions — Raku documentation](https://docs.raku.org/type/Junction)
* [The Pearls of Raku, Issue 12: `all` and `any`](https://andrewshitov.com/2020/09/18/the-pearls-of-raku-issue-12-all-and-any/)
* [The Pearls of Raku, Issue 13: functional elements and recursive sum](https://andrewshitov.com/2020/09/26/the-pearls-of-raku-issue-13-functional-elements/)

### Video review

The full review of Task 1 is available on YouTube:

<iframe width="560" height="315" src="https://www.youtube.com/embed/WKEfebHYL7Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The timestamps for quick access to the review of each solution.

* [01:36](https://www.youtube.com/watch?v=WKEfebHYL7Y&t=96s) - Andrew Shitov
* [03:00](https://www.youtube.com/watch?v=WKEfebHYL7Y&t=180s) - Jan Krnavek
* [07:38](https://www.youtube.com/watch?v=WKEfebHYL7Y&t=458s) - Jason Messer
* [08:59](https://www.youtube.com/watch?v=WKEfebHYL7Y&t=539s) - Kang-min Liu
* [11:03](https://www.youtube.com/watch?v=WKEfebHYL7Y&t=663s) - Mark Anderson
* [13:40](https://www.youtube.com/watch?v=WKEfebHYL7Y&t=820s) - Richard Park
* [15:46](https://www.youtube.com/watch?v=WKEfebHYL7Y&t=946s) - Shahed Nooshmand
* [19:12](https://www.youtube.com/watch?v=WKEfebHYL7Y&t=1152s) - Simon Proctor
* [20:12](https://www.youtube.com/watch?v=WKEfebHYL7Y&t=1212s) - Arne Sommer
* [20:58](https://www.youtube.com/watch?v=WKEfebHYL7Y&t=1258s) - Athanasius
* [22:45](https://www.youtube.com/watch?v=WKEfebHYL7Y&t=1365s) - Colin Crain
* [25:00](https://www.youtube.com/watch?v=WKEfebHYL7Y&t=1500s) - Jaldhar H. Vyas
* [31:34](https://www.youtube.com/watch?v=WKEfebHYL7Y&t=1894s) - Julio de Castro
* [37:30](https://www.youtube.com/watch?v=WKEfebHYL7Y&t=2250s) - Laurent Rosenfeld
* [38:42](https://www.youtube.com/watch?v=WKEfebHYL7Y&t=2322s) - Markus Holzer
* [41:36](https://www.youtube.com/watch?v=WKEfebHYL7Y&t=2496s) - Mohammad S Anwar
* [43:05](https://www.youtube.com/watch?v=WKEfebHYL7Y&t=2585s) - Myoungjin Jeon
* [45:44](https://www.youtube.com/watch?v=WKEfebHYL7Y&t=2744s) - Roger Bell_West
* [46:37](https://www.youtube.com/watch?v=WKEfebHYL7Y&t=2797s) - Ulrich Rieke


## Task 2. Left Rotation

In the second task, we need to rotate an array.

### Built-in `rotate`

The simplest possible solution in Raku is to use the built-in `rotate` routine, as, for example, [in my solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/ash/raku/ch-2.raku):

```perl6
    my @a = 10, 20, 30, 40, 50;
    my @b = 3, 4;

    say @a.rotate($_) for @b;
```

The way you scan the values in `@b` can be different. For instance, with the help of `map` as in the [solution by Jan Krňávek](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/wambash/raku/ch-2.raku):

```perl6
    sub left-rotate ( @a, @b ) {
        @b.map: { @a.rotate: $_ }
    }
```

Collecting the result pieces can be done with `gather` and `take`. Actually, this is one of the most favourite features of Raku among the participants of The Weekly Challenge. Look, for example, at how it is used in the [program submitted by Jason Messer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/jason-messer/raku/ch-2.p6#L9):

```perl6
    sub rotate-array-by(:@array, :@indices) {
        gather for @indices {
            take @array.rotate: $_;
        }
    }
```

### Swapping the parts

Another approach to the problem is to swap the source data `@a` around the [pivot](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/simon-proctor/raku/ch-2.raku#L12) positions from `@b`. Here is the essence of it demonstrated in the [program by Kang-min Liu](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/gugod/raku/ch-2.raku):

```perl6
    sub rot($n, @A) {
        return @A[ $n .. *, 0 .. $n-1 ].flat;
    }
```

The two ranges `$n .. *` and `0 .. $n-1` define the two slices of the source array, which we swap to get the result.

### Modulo

Another way to rotate the data is to subscript it with the index that is first incremented and then corrected by the modulo operation. In this case, the index loops to the beginning of the array. The [solution by Julio de Castro](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/juliodcs/raku/ch-2.raku) demonstrates this approach:

```perl6
    sub rotate {
        my \A = (7, 4, 2, 6, 3);
        my \B = (1, 3, 4);
        for B -> \rotation {
            say (|^A).map: { A[ ($^index + rotation) % A.elems ] }
        }
    }

    rotate;
```

Also notice the usage of sigilless variables.

Markus Holzer also gives a [solution with the modulo operator](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/markus-holzer/raku/ch-2.raku#L29) as one of the possible variants:

```perl6
    sub rotate-array-concise( @a, $i ) {
        ( @a + $i ) % @a andthen [ |@a[ $_..* ], |@a[ ^$_ ] ] }
```

Markus also [noticed](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/markus-holzer/raku/ch-2.raku#L23) that rotation values which are bigger than the length of the source data should be corrected before real rotation to avoid redundant loops:

```perl6
    multi rotate-array-multi( @a, $i where $i >= @a ) {
        rotate-array-multi( @a, $i % @a ) }
```

### Double and cut

Another interesting idea (well, formally it can be classified to the previous group) is [proposed by Roger Bell_West](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-078/roger-bell-west/raku/ch-2.p6#L17). The array is first doubled so that it contains two copies of itself, and then you take its middle part starting from the given rotation position:

```perl6
    sub leftrot(@a,@b) {
        my $l=@a.end;
        my @t=(@a,@a).flat;
        my @o;
        for @b -> $c {
            push @o,[@t[$c..$c+$l]];
        }
        return @o;
    }
```

### Additional reading

* [`rotate` routine — Raku documentation](https://docs.raku.org/routine/rotate)
* [Sigilless variables — Raku documentation](https://docs.raku.org/language/variables#index-entry-\_(sigilless_variables))

### Video review

The full review of Task 2 is available on YouTube:

<iframe width="560" height="315" src="https://www.youtube.com/embed/zbKcoKB2iDU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The timestamps to the reviews of the individual solutions:

* [01:42](https://www.youtube.com/watch?v=zbKcoKB2iDU&t=102s) - Andrew Shitov
* [02:49](https://www.youtube.com/watch?v=zbKcoKB2iDU&t=169s) - Jan Krnavek
* [03:58](https://www.youtube.com/watch?v=zbKcoKB2iDU&t=238s) - Jason Messer
* [05:02](https://www.youtube.com/watch?v=zbKcoKB2iDU&t=302s) - Kang-min Liu
* [06:24](https://www.youtube.com/watch?v=zbKcoKB2iDU&t=384s) - Mark Anderson
* [07:01](https://www.youtube.com/watch?v=zbKcoKB2iDU&t=421s) - Shahed Nooshmand
* [07:16](https://www.youtube.com/watch?v=zbKcoKB2iDU&t=436s) - Simon Proctor
* [09:06](https://www.youtube.com/watch?v=zbKcoKB2iDU&t=546s) - Arne Sommer
* [10:14](https://www.youtube.com/watch?v=zbKcoKB2iDU&t=614s) - Athanasius
* [12:24](https://www.youtube.com/watch?v=zbKcoKB2iDU&t=744s) - Colin Crain
* [13:33](https://www.youtube.com/watch?v=zbKcoKB2iDU&t=813s) - Jaldhar H. Vyas
* [15:27](https://www.youtube.com/watch?v=zbKcoKB2iDU&t=927s) - Julio de Castro
* [17:26](https://www.youtube.com/watch?v=zbKcoKB2iDU&t=1046s) - Laurent Rosenfeld
* [17:46](https://www.youtube.com/watch?v=zbKcoKB2iDU&t=1066s) - Markus Holzer
* [22:41](https://www.youtube.com/watch?v=zbKcoKB2iDU&t=1361s) - Mohammad S Anwar
* [24:03](https://www.youtube.com/watch?v=zbKcoKB2iDU&t=1443s) - Myoungjin Jeon
* [26:43](https://www.youtube.com/watch?v=zbKcoKB2iDU&t=1603s) - Roger Bell_West
* [27:44](https://www.youtube.com/watch?v=zbKcoKB2iDU&t=1664s) - Ulrich Rieke
<br>

If you want to participate in **The Weekly Challenge**, please contact us at <perlweeklychallenge@yahoo.com>.
