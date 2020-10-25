---
title: "Andrew Shitov Weekly Review: Challenge - 082"
date: 2020-10-25T00:00:00+00:00
description: "Andrew Shitov Weekly Review: Challenge - #082."
type: post
image: images/blog/p6-review-challenge-082.jpg
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

Welcome to the **Raku Review** for **Week 082** of **The Weekly Challenge!**. For a quick overview, go through the [**original tasks**](/blog/perl-weekly-challenge-082/) and [**recap**](/blog/recap-challenge-082/) of the weekly challenge.

***

## Task 1. Common Factors

In the first task, we had to find common factors of two integer numbers. The solutions submitted can be roughly classified into a few categories:

* With two greps
* By intersection of factors
* Employing the GCD
* With junctions

### Using a row of `grep`s

In this kind of solutions, the range of numbers is first filtered to take the numbers by which `$A` is divisible, and then the second filter is applied to do the same for `$B`. The remaining numbers are the numbers in question.

For example, [in my solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/ash/raku/ch-1.raku), we see:

```perl6
    say ((1 .. ($a max $b)).grep: $a %% *).grep: $b %% *;
```

### Intersection of lists of factors

Here, the first step is to find all the factors for each input number independently and then compute their intersection. Of course, using Raku’s operator `(&)` for set intersection.

In the program by [Arne Sommer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/arne-sommer/raku/ch-1.p6):

```perl6
    my @M-factors = $include-self ?? (1..$M).grep({ $M %% $_ }) !! (1..$M/2).grep({ $M %% $_ });
    my @N-factors = $include-self ?? (1..$N).grep({ $N %% $_ }) !! (1..$N/2).grep({ $N %% $_ });

    my %common = @M-factors (&) @N-factors;
```

Or the same operator but spellt out as a Unicode symbol `∩` as [Jaldhar H. Vyas did it](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/jaldhar-h-vyas/raku/ch-1.p6):

```perl6
    sub MAIN(Int $M, Int $N) {
        (factors($M) ∩ factors($N)).keys.sort.join(', ').say;
    }
```

[Simon Proctor demonstrates](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/simon-proctor/raku/ch-1.raku) another example of this approach:

```perl6
    sub MAIN ( UInt $M, UInt $N ) {
        say "({(fac($M) (&) fac($N)).keys.sort.join(', ')})"
    }

    sub fac( UInt $v ) {
        (1..^$v).grep( $v %% * )
    }
```

Notice how the whole line of Raku code is interpolated in curly braces inside a double-quoted string.

By the way, in a couple of solutions, finding the factors is optimised to take two factors at once if possible. Examine the `take` parts of [Colin Crain's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/colin-crain/raku/ch-1.raku#L70):

```perl6
    sub factor (Int $num) {
        gather {
            for (1..$num.sqrt.Int).grep({$num %% $_}) {
                take $_;
                take $num div $_;
            }
        }
    }
```

### With the help of GCD

GCD, or greatest common divisor, is available as a [built-in routine](https://docs.raku.org/routine/gcd) in Raku.

Instead of finding the divisors for `$A` or `$B`, you can find them for their GCD only, as you can see in the [solution submitted by Jan Krňávek](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/wambash/raku/ch-1.raku):

```perl6
    sub common-factors( +@a ) {
        my $gcd = [gcd] @a;
        1, 2 ... $gcd
        andthen .grep:  $gcd %% *
    }
```

Or in [Kang-min Liu’s program](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/gugod/raku/ch-1.raku):

```perl6
    sub common-factors (Int $a, Int $b) {
        my $x = $a gcd $b;
        return (1..$x).grep(-> $n { $x %% $n });
    }
```

[Mark Andreson expressed](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/mark-anderson/raku/ch-1.p6) the same idea using a `WhateverCode` block instead of a pointy block with an explicit signature:

```perl6
    my $gcd = $M gcd $N;
    say (1..$gcd).grep($gcd %% *).join(", ").List;
```

[Philip Hood showed](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/pkmnx/raku/ch-1.raku) an unexpected way of making some computations directly in the signature of the `MAIN` function:

```perl6
    sub MAIN( Int $m = 18, Int $n = 12, $gc = $m gcd $n ) {
        die( "too many args!" ) if @*ARGS.end > 1;
        ( 1 .. $gc ).grep(-> $k { $gc %% $k } ).say;
    }
```

This trick can probably be used in a Raku Golf contest.

[Laurent Rosenfeld added](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/laurent-rosenfeld/raku/ch-1.raku) another improvement to check if the found value of GCD is a prime number:

```perl6
    sub common_factors (Int $a, Int $b) {
        my $gcd = $a gcd $b;
        return (1,) if $gcd == 1;
        return ($gcd,) if $gcd.is-prime;
        return (1..$gcd).grep($gcd %% *).unique;
    }
```

### Using junctions

The next group includes solutions that use junctions.

For example, look at [Feng Chang’s code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/feng-chang/raku/ch-1.raku) and the use of `&`:

```perl6
    (1..min($M,$N)).grep({ ($M & $N) %% $_ }).say;
```

[Markus Holzer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/markus-holzer/raku/ch-1.raku) reminds us that there’s an alternative form of creating junctions by using the built-in routine `all`:

```perl6
    say "({ join ', ', grep all( $N, $M ) %% *, 1 ..^ max $N, $M })"
```

### Bonus slide

The solution that was [submitted by Julio de Castro](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/juliodcs/raku/ch-1.raku) requires special mentioning. A lot of `-o fun` things happen here:

```perl6
    sub prefix:<∕>(\num) {
        (1 ... num/2, +num).grep: num %% *
    }

    # intersects and returns result as sorted list
    sub infix:<@∩>(\a, \b) {
        (a ∩ b).keys.sort.list
    }

    sub MAIN(Int \a where * > 0, Int \b where * > 0) {
        say ∕a @∩ ∕b
    }
```

### Video review

The full review of Task 1 is available on YouTube:

<iframe width="560" height="315" src="https://www.youtube.com/embed/otngp963NgU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The timestamps for quick access to the review of each solution.

* [00:50](https://www.youtube.com/watch?v=otngp963NgU&t=50s) - Andrew Shitov
* [01:56](https://www.youtube.com/watch?v=otngp963NgU&t=116s) - Arne Sommer
* [03:45](https://www.youtube.com/watch?v=otngp963NgU&t=225s) - Feng Chang
* [05:02](https://www.youtube.com/watch?v=otngp963NgU&t=302s) - Jan Krnavek
* [06:21](https://www.youtube.com/watch?v=otngp963NgU&t=381s) - Kang-min Liu
* [07:10](https://www.youtube.com/watch?v=otngp963NgU&t=430s) - Mark Anderson
* [08:06](https://www.youtube.com/watch?v=otngp963NgU&t=486s) - Markus Holzer
* [09:03](https://www.youtube.com/watch?v=otngp963NgU&t=543s) - Philip Hood
* [10:12](https://www.youtube.com/watch?v=otngp963NgU&t=612s) - Simon Proctor
* [11:00](https://www.youtube.com/watch?v=otngp963NgU&t=660s) - Athanasius
* [13:12](https://www.youtube.com/watch?v=otngp963NgU&t=792s) - Colin Crain
* [14:58](https://www.youtube.com/watch?v=otngp963NgU&t=898s) - Jaldhar H. Vyas
* [15:34](https://www.youtube.com/watch?v=otngp963NgU&t=934s) - Julio de Castro
* [18:35](https://www.youtube.com/watch?v=otngp963NgU&t=1115s) - Laurent Rosenfeld
* [19:32](https://www.youtube.com/watch?v=otngp963NgU&t=1172s) - Myoungjin Jeon
* [20:50](https://www.youtube.com/watch?v=otngp963NgU&t=1250s) - Roger Bell_West
* [22:40](https://www.youtube.com/watch?v=otngp963NgU&t=1360s) - Ulrich Rieke

## Task 2. Interleave String

This task was understood a bit differently by the participants. The main questions are, first, whether it is possible to only insert `$B` into `$A`, or the opposite is also allowed. The second idea is if we can split one or both of the input strings into smaller parts before searching for the result.

Let me not run through the solutions and their types here, but I still want to show you the output of [the program by Athanasius](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/athanasius/raku/ch-2.raku#L169). In the ‘Explanation’ section, you clearly see how the result was achieved:

    $ raku challenge-082/athanasius/raku/ch-2.raku XXY XXZ XXXXYZ

    Challenge 082, Task #2: Interleave String (Raku)

    Input:
        $A = "XXY"
        $B = "XXZ"
        $C = "XXXXYZ"

    Output: 1

    EXPLANATION
        $A =  XX  Y
        $B =    XX Z
        $C =  XXXXYZ

You will find more details about the solutions and other interesting findings there in the video review below.

### Video review

The full review of Task 2 is available on YouTube:

<iframe width="560" height="315" src="https://www.youtube.com/embed/Oliom-N2VHg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The timestamps to the reviews of the individual solutions:

* [01:37](https://www.youtube.com/watch?v=Oliom-N2VHg&t=97s) - Ulrich Rieke
* [03:55](https://www.youtube.com/watch?v=Oliom-N2VHg&t=235s) - Roger Bell_West
* [06:39](https://www.youtube.com/watch?v=Oliom-N2VHg&t=399s) - Myoungjin Jeon
* [10:25](https://www.youtube.com/watch?v=Oliom-N2VHg&t=625s) - Julio de Castro
* [18:20](https://www.youtube.com/watch?v=Oliom-N2VHg&t=1100s) - Jaldhar H. Vyas
* [22:30](https://www.youtube.com/watch?v=Oliom-N2VHg&t=1350s) - Colin Crain
* [28:42](https://www.youtube.com/watch?v=Oliom-N2VHg&t=1722s) - Athanasius
* [31:52](https://www.youtube.com/watch?v=Oliom-N2VHg&t=1912s) - Simon Proctor
* [33:46](https://www.youtube.com/watch?v=Oliom-N2VHg&t=2026s) - Philip Hood
* [38:22](https://www.youtube.com/watch?v=Oliom-N2VHg&t=2302s) - Markus Holzer
* [40:56](https://www.youtube.com/watch?v=Oliom-N2VHg&t=2456s) - Mark Anderson
* [44:57](https://www.youtube.com/watch?v=Oliom-N2VHg&t=2697s) - Kang-min Liu
* [47:16](https://www.youtube.com/watch?v=Oliom-N2VHg&t=2836s) - Jan Krnavek
* [52:50](https://www.youtube.com/watch?v=Oliom-N2VHg&t=3170s) - Feng Chang
* [55:30](https://www.youtube.com/watch?v=Oliom-N2VHg&t=3330s) - Arne Sommer
* [57:32](https://www.youtube.com/watch?v=Oliom-N2VHg&t=3452s) - Andrew Shitov

<br>

If you want to participate in **The Weekly Challenge**, please contact us at <perlweeklychallenge@yahoo.com>.
