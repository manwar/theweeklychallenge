---
title: "Andrew Shitov Weekly Review: Challenge - 084"
date: 2020-11-19T00:00:00+00:00
description: "Andrew Shitov Weekly Review: Challenge - #084."
type: post
image: images/blog/p6-review-challenge-084.jpg
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

Welcome to the **Raku Review** for **Week 084** of **The Weekly Challenge!**. For a quick overview, go through the [**original tasks**](/blog/perl-weekly-challenge-084/) and [**recap**](/blog/recap-challenge-084/) of the weekly challenge.

***

## Task 1. Reverse Integer

In the first problem, the task is to take a number and print it backwards. A couple of additional requirements are: 1) to keep the sign and 2) to print 0 if the flipped number exceeds the size of a 32-bit integer.

Obviously, the most Rakuish solution is to use the `flip` method. It works with strings, but Raku will implicitly translate numbers to it. To keep the sign, you can use the `sign` method that returns `+1` for positive numbers, `-1` for negative numbers and `0` for `0`. Try it in the REPL shell:

```perl6
    $ raku
    > 0.sign
    0
    > -20.sign
    -1
    > 20.sign
    1
```
So, here is [a possible solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/ash/raku/ch-1.raku#L26):

```perl6
    my $r = $n.sign * $n.abs.flip;
    say -2147483648 <= $r <= 2147483647 ?? $r !! 0;
```

[Feng Chang split](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/feng-chang/raku/ch-1.raku) the task into the four clear options:

```perl6
    given $n {
        when (0)             { put 0 }
        when (0 < $n ≤ imax) { put $n.flip; }
        when (imin ≤ $n < 0) { put '-', (-$n).flip; }
        default              { put 0; }
    }
```

[Jan Krnavek used](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/wambash/raku/ch-1.raku) a combination of the above-mentioned methods:

```perl6
    with $n.abs.flip * $n.sign {
        when -2³¹ ..^ 2³¹ { $_ };
        default           { 0  };
    }
```

[Mark Anderson uses](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/mark-anderson/raku/ch-1.p6) smartmatch directly (without the `given` block):

```perl6
    $N = $N.abs.flip * $N.sign;
    my \MAX = 2**31;
    say $N ~~ -MAX .. MAX-1 ?? $N !! 0;
```

[Markus Holzer decided](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/markus-holzer/raku/ch-1.raku) to use the `subst` method to replace the digits in the number and thus to keep the minus sign in place:

```perl6
    say -2³¹ <= $i <= 2³¹
        ?? $i.subst( / \d+ /, + *.flip )
        !! 0;
```

Notice how [Stuart Little keeps](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/stuart-little/raku/ch-1.p6) the sign by removing the last character from what `sign` returns:

```perl6
    return ($nr >= 2**31) ?? (0)
    !! ($nr.sign.chop ~ $nr.abs.flip);
```

Of course, nobody stops you from determining the sign by comparing the number with 0, as [Arne Sommer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/arne-sommer/raku/ch-1.p6), [Colin Crain](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/colin-crain/raku/ch-1.raku), and [Kang-min Liu](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/gugod/raku/ch-1.raku) did it:

```perl6
    my $sign = $N < 0
        ?? "-"
        !! "";

    my $new = $sign ~ $N.abs.flip;

    . . .

    my $sign = $num < 0 ?? -1 !! 1 ;
    my $out  = $sign * $num.abs.flip ;

    . . .

    my $o = ($n < 0 ?? -1 !! 1) * flip abs $n;
    return (-2³¹ ≤ $o < 2³¹) ?? $o !! 0;
```

[Roger Bell_West](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/roger-bell-west/raku/ch-1.p6) and [Ulrich Rieke](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/ulrich-rieke/raku/ch-1.raku) used regexes to extract the digits and the sign from the number:

```perl6
    my $r=$s.comb.reverse.join('');
    if ($r ~~ /(<[0..9]>+)\-$/) {
        $r="-$0";
    }

    . . .

    $N ~~ /(<[+-]>*)(\d+)/ ;
    my $maximum = 2147483647 ;
    if ( $N.Int <= $maximum ) {
        say ($0.Str ~ $1.Str.flip) ;
    }
    else {
        say 0 ;
    }
```

### Video review

The full review of Task 1 is available on YouTube:

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZXUwQZYoWLE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The timestamps for quick access to the review of each solution.

* [01:17](https://www.youtube.com/watch?v=ZXUwQZYoWLE&t=77s) - Andrew Shitov
* [02:46](https://www.youtube.com/watch?v=ZXUwQZYoWLE&t=166s) - Feng Chang
* [03:50](https://www.youtube.com/watch?v=ZXUwQZYoWLE&t=230s) - Jan Krnavek
* [05:45](https://www.youtube.com/watch?v=ZXUwQZYoWLE&t=345s) - Mark Anderson
* [06:35](https://www.youtube.com/watch?v=ZXUwQZYoWLE&t=395s) - Markus Holzer
* [09:22](https://www.youtube.com/watch?v=ZXUwQZYoWLE&t=562s) - Philip Hood
* [10:17](https://www.youtube.com/watch?v=ZXUwQZYoWLE&t=617s) - Simon Proctor
* [11:10](https://www.youtube.com/watch?v=ZXUwQZYoWLE&t=670s) - Stuart Little
* [12:35](https://www.youtube.com/watch?v=ZXUwQZYoWLE&t=755s) - Arne Sommer
* [13:22](https://www.youtube.com/watch?v=ZXUwQZYoWLE&t=802s) - Athanasius
* [14:24](https://www.youtube.com/watch?v=ZXUwQZYoWLE&t=864s) - Colin Crain
* [15:26](https://www.youtube.com/watch?v=ZXUwQZYoWLE&t=926s) - Jaldhar H. Vyas
* [16:48](https://www.youtube.com/watch?v=ZXUwQZYoWLE&t=1008s) - Julio de Castro
* [17:48](https://www.youtube.com/watch?v=ZXUwQZYoWLE&t=1068s) - Kang-min Liu
* [19:08](https://www.youtube.com/watch?v=ZXUwQZYoWLE&t=1148s) - Laurent Rosenfeld
* [20:41](https://www.youtube.com/watch?v=ZXUwQZYoWLE&t=1241s) - Myoungjin Jeon
* [24:51](https://www.youtube.com/watch?v=ZXUwQZYoWLE&t=1491s) - Roger Bell_West
* [27:18](https://www.youtube.com/watch?v=ZXUwQZYoWLE&t=1638s) - Ulrich Rieke

## Task 2. Find Square

In the second task, you take a matrix with 1s and 0s and have to find the number of all possible squares, whose corners keep 1s.

To solve the task, you can scan each and every cell of the matrix, and from there ‘blow’ the squares of different sizes before you reach one of the edges. Here is [an example](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/ash/raku/ch-2.raku) of how you do it with three nested loops:

```perl6
    for ^$w -> $x {
        for ^$h -> $y {
            for 1..* -> $z {
                last if $x + $z >= $w || $y + $z >= $h;

                . . .
```

To test and count the squares, just check the values at the corresponding coordinates:

```perl6
    $count++ if all(
        @m[$x; $y     ], @m[$x + $z; $y     ],
        @m[$x; $y + $z], @m[$x + $z; $y + $z]
    );
```

A number of participants noted that you could optimise this approach by skipping the entire third loop if you see that the cell at coordinates (`$x`, `$y`) is `0`. Indeed, all further checks will fail with such a corner.

Instead of nesting loops, you can use Raku’s cross operator `X` to [make the table](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/feng-chang/raku/ch-2.raku#L8) of cell coordinates:

```perl6
    for 0..^@N[0].elems-1 X 0..^@N.elems-1 -> ($i, $j) {
        . . .
```

[Or](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/wambash/raku/ch-2.raku#L15):

```perl6
    multi find-square ( @n, ) {
        my $rows     = @n.elems;
        my $columns  = @n[0].elems;
        ^$rows X ^$columns
        andthen .grep: -> ($x, $y) { @n[$x;$y]==1 }\
        andthen .map:  { find-square @n, :topleft($_)  }\
        andthen .sum
    }
```

Another interesting approach is to — again! — use `combinations` to [test different square sizes](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-084/mark-anderson/raku/ch-2.p6#L61). This fragment also uses the above-mentioned optimisation to skip the squares with 0 in the corner:

```perl6
    for ^@matrix.end -> $i {
        my @indices = @matrix[$i].grep(1, :k);

        next unless @indices.elems >= 2;

        for @indices.combinations(2) -> [$h, $t] {
            my $skip = $i + $t - $h;
            next if $skip > @matrix.end;
            $count++ if all @matrix[$skip][$h, $t];
        }
    }
```

There are more interesting bits both in the algorithms and in language usage, so I invite you to watch the video review and to look at the code more precisely.

### Video review

The full review of Task 2 is available on YouTube:

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZcMCzWxxBX0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The timestamps to the reviews of the individual solutions:

* [01:18](https://www.youtube.com/watch?v=ZcMCzWxxBX0&t=78s) - Andrew Shitov
* [03:20](https://www.youtube.com/watch?v=ZcMCzWxxBX0&t=200s) - Feng Chang
* [04:58](https://www.youtube.com/watch?v=ZcMCzWxxBX0&t=298s) - Jan Krnavek
* [07:43](https://www.youtube.com/watch?v=ZcMCzWxxBX0&t=463s) - Mark Anderson
* [13:19](https://www.youtube.com/watch?v=ZcMCzWxxBX0&t=799s) - Markus Holzer
* [15:50](https://www.youtube.com/watch?v=ZcMCzWxxBX0&t=950s) - Philip Hood
* [18:12](https://www.youtube.com/watch?v=ZcMCzWxxBX0&t=1092s) - Simon Proctor
* [20:28](https://www.youtube.com/watch?v=ZcMCzWxxBX0&t=1228s) - Stuart Little
* [22:42](https://www.youtube.com/watch?v=ZcMCzWxxBX0&t=1362s) - Arne Sommer
* [26:02](https://www.youtube.com/watch?v=ZcMCzWxxBX0&t=1562s) - Athanasius
* [29:35](https://www.youtube.com/watch?v=ZcMCzWxxBX0&t=1775s) - Colin Crain
* [31:26](https://www.youtube.com/watch?v=ZcMCzWxxBX0&t=1886s) - Jaldhar H. Vyas
* [33:31](https://www.youtube.com/watch?v=ZcMCzWxxBX0&t=2011s) - Julio de Castro
* [34:42](https://www.youtube.com/watch?v=ZcMCzWxxBX0&t=2082s) - Kang-min Liu
* [37:46](https://www.youtube.com/watch?v=ZcMCzWxxBX0&t=2266s) - Laurent Rosenfeld
* [39:00](https://www.youtube.com/watch?v=ZcMCzWxxBX0&t=2340s) - Myoungjin Jeon
* [44:00](https://www.youtube.com/watch?v=ZcMCzWxxBX0&t=2640s) - Roger Bell_West

<br>

***

If you want to participate in **The Weekly Challenge**, please contact us at <perlweeklychallenge@yahoo.com>.
