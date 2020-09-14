---
title: "Andrew Shitov Weekly Review: Challenge - 076"
date: 2020-09-14T00:00:00+00:00
description: "Andrew Shitov Weekly Review: Challenge - #076."
type: post
image: images/blog/p6-review-challenge-076.jpg
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

Welcome to the **Raku Review** for **Week 076** of **The Weekly Challenge!**. For a quick overview, go through the [**original tasks**](/blog/perl-weekly-challenge-076/) and [**recap**](/blog/recap-challenge-076/) of the weekly challenge.

<br>

The tasks this week required some additional thinking before the actual implementation. The first task, in particular, can be solved in just a few lines of code. But let’s move on directly to them.

## Task 1. Prime Sum

For the few weeks in a row, we have to build up a number out of different parts. This time, the building bricks are prime numbers. Among the rest, Raku is known for its built-in `is-prime` routine that helps a lot in solving such tasks.

### Theory

Another our friend this time is the observation known as [Goldbach’s conjecture](https://en.wikipedia.org/wiki/Goldbach%27s_conjecture). It says that any even number can be constructed as a sum of two prime numbers. Together with some other considerations, you can conclude that there are a few classes where we can immediately tell the answer without any further computations.

* The input number is a prime number. The answer is 1 as the number is already a prime number.
* The input number is an even number. The answer is 2.
* The input number is a sum of 2 and a prime number. The answer is also 2, as the number is a sum of 2, which is a prime number, and another prime number!
* For other numbers, the answer is 3.

Although the task only demanded to print the number of prime summands, most of the participants also printed the options themselves. A few people decided not to include the first case when the input number is already a prime number as a valid case and were searching for the decomposition into smaller prime numbers. In many cases, there are solutions where you can use repeated summands (such as in `51 = 17 + 17 + 17`). There is also a case `4 = 2 + 2`, where you need to use the same prime twice.

### Other ways

The other ways of solutions can be grouped into two groups:

* Searching the result among all possible combinations of prime numbers below the given number.
* Trying to fill the desired amount with the primes similar to how we did it with collecting the coins for the change last week.

### Additional reading

If you want to dive further into the theory of prime sums, I recommend you to start with the [blog post by Colin Crain](https://colincrain.wordpress.com/2020/09/05/wear-a-wig-to-play-the-goldbach-variations/) and the comments section in the program [submitted by Athanasius](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/athanasius/raku/ch-1.raku#L37).

A good description of the recursive algorithm is written [by Arne Sommer](https://raku-musings.com/primal-words.html).

### Finally, the code

(A small improvement in the weekly reviews: starting from now, the links lead to the specific line of the code rather than just to the file with a solution.)

[Jan Krňávek created](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/wambash/raku/ch-1.raku#L5) a cute and distilled Raku program that implements the conclusions of the Goldbach’s conjecture. Here is its core:

```perl6
    subset OddPrime      of Int where { $_ !%% 2 &       .is-prime };
    subset OddPrimeSucc  of Int where { $_ !%% 2 & ($_-2).is-prime };
    subset Even of Int where *  %% 2;

    proto prime-sum ($ where * ≥ 2 ) {*}
    multi prime-sum (              2 --> 1 ) {}
    multi prime-sum (OddPrime      $ --> 1 ) {}
    multi prime-sum (Even          $ --> 2 ) {}
    multi prime-sum (OddPrimeSucc  $ --> 2 ) {}
    multi prime-sum (              $ --> 3 ) {}
```

A similar but completely different approach is [demonstrated by Mark Anderson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/mark-anderson/raku/ch-1.raku#L27):

```perl6
    sub MAIN(UInt $N where $N > 1) {
        given $N {
            when .is-prime {
                say $N;
            }
            when * %% 2 {
                .say for min-primes($N, 2);
            }
            default {
                if ($N-2).is-prime {
                    .say for min-primes($N, 2);
                }
                else {
                    .say for min-primes($N, 3);
                }
            }
        }
    }
```

[Colin Crain used sets](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/colin-crain/raku/ch-1.raku#L31) in his solutions just to enjoy using the set operators such as `∈`:

```perl6
    my @primes = (2..$num).grep: { .is-prime };
    my $p = @primes.Set;

    my $result = do given $num {
        when    @primes.tail    { $num.List }
        when    $_ %% 2         { get_prime_pair($num) }
        when    $_ - 2 ∈ $p     { $num-2, 2 }
        default                 { @primes.tail, |get_prime_pair($num - @primes.tail) }
    };
```

[Jason Messer submitted](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/jason-messer/raku/ch-1.p6#L3) an example of a very Raku-ish solution that combines the primes to find the input number.

```perl6
    my $N = 9;
    my @p = gather for (2..^$N) { .take if .is-prime }
    say @p.combinations.grep(
        {.sum == $N} ).sort( {$^a.elems > $^b.elems } ).first.elems
```

Another example of a great Raku style gives (as always) [Markus Holzer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/markus-holzer/raku/ch-1.raku#L3):

```perl6
    my @primes = (2..^$N)
        .grep( *.is-prime );

    my @candidates = @primes X @primes;

    my @solutions = @candidates
        .grep( *.sum == $N )
        .map( *.sort.cache )
        .unique( with => &[~~] );

    .say for @solutions;
```

Don’t forget to examine the other solutions as you will find a number of really exciting elements there.

### Video review

There are more interesting moments in the solutions, which I highlighted in the video review. The full review of Task 1 is available on YouTube:

<iframe width="560" height="315" src="https://www.youtube.com/embed/ln6Droq-Pdo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The timestamps for quick access to the review of each solution.

* [01:30](https://www.youtube.com/watch?v=ln6Droq-Pdo&t=90s) — Arne Sommer
* [08:44](https://www.youtube.com/watch?v=ln6Droq-Pdo&t=524s) — Jan Krnavek
* [14:38](https://www.youtube.com/watch?v=ln6Droq-Pdo&t=878s) — Jason Messer
* [18:17](https://www.youtube.com/watch?v=ln6Droq-Pdo&t=1097s) — Luca Ferrari
* [23:57](https://www.youtube.com/watch?v=ln6Droq-Pdo&t=1437s) — Mark Anderson
* [28:03](https://www.youtube.com/watch?v=ln6Droq-Pdo&t=1683s) — Markus Holzer
* [32:39](https://www.youtube.com/watch?v=ln6Droq-Pdo&t=1959s) — Shahed Nooshmand
* [38:16](https://www.youtube.com/watch?v=ln6Droq-Pdo&t=2296s) — Simon Proctor
* [43:25](https://www.youtube.com/watch?v=ln6Droq-Pdo&t=2605s) — Athanasius
* [51:56](https://www.youtube.com/watch?v=ln6Droq-Pdo&t=3116s) — Colin Crain
* [59:27](https://www.youtube.com/watch?v=ln6Droq-Pdo&t=3567s) — Javier Luque
* [1:03:10](https://www.youtube.com/watch?v=ln6Droq-Pdo&t=3790s) — Mohammad S Anwar
* [1:06:15](https://www.youtube.com/watch?v=ln6Droq-Pdo&t=3975s) — Myoungjin Jeon
* [1:10:09](https://www.youtube.com/watch?v=ln6Droq-Pdo&t=4209s) — Roger Bell_West


## Task 2. Word Search in a Grid

In the second task, you are given a grid (matrix) of letters, and you need to find English words in it. The choice of the dictionary is totally yours. Looking at the submitted solutions, we can first categorize them by the following two aspects.

* You first find the word candidates and then match them against the dictionary loaded in a hash or a set.
* You scan the dictionary word by word and try to find the word in the grid.

It should be obvious that the second option seems to give much slower programs if the dictionary is big. Loading a dictionary to a hash or a set is an almost one-line task and is executed quickly, for example, we can see this in [Arne Sommer’s solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/arne-sommer/raku/ch-2.p6#L14):

```perl6
    my %dict = get-dictionary($dict);

    . . .

    sub get-dictionary ($file where $file.IO.r)
    {
        return $file.IO.lines.grep(* !~~ /\W/)>>.lc.Set;
    }
```

Loading the grid is not a problem either. The differences between the solutions are mostly in how strict the participants wanted to be when reading the input data.

At the next step, we again have at least two options:

* Either scan the grid and try to find all word candidates from every cell in all possible directions,
* Or create the strings that cover the whole row, or column, or any of the existing diagonals in the grid.

In the first case, you loop over the candidates and search the words that exist in the dictionary. Again, a good example is [shown by Arne Sommer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/arne-sommer/raku/ch-2.p6#L29):

```perl6
    my @words = @candidates.unique.sort.grep({ %dict{$_} }).grep( *.chars >= $min-length);
```

An interesting idea for the second case is used in the [program by Shahed Nooshmand](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/shahed-nooshmand/raku/ch-2.raku#L21):

```perl6
    for @words -> $word {
        @found.push: $word if (@rows | @columns | @diagonals).grep: *.contains: $word | $word.flip;
    }
```

Notice the use of vertical bars, which create junctions (but the code scans the whole dictionary `@words`).

The problem of scanning the grid in different directions is a separate interesting task. Again, you can have two top-level options.

* Either you scan everything in both directions,
* Or you go only in one direction and append the `flip`ped version of each string to the result (alternatively, you flip all the words in the dictionary).

What can also be a useful observation is the fact that for our task, we do not distinguish between the words found in horizontal, or vertical, or diagonal lines. That means that you can collect all the word candidates in a single array (and make it `unique` afterwards for better performance). Here is a snippet from the [code by Athanasius](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/athanasius/raku/ch-2.raku#L94):

```perl6
    my Str @search-lines = @grid-lines;     # The horizontal lines
    @search-lines.push: $_ for get-vertical-lines(@grid-lines);
    @search-lines.push: $_ for get-diagl-dn-lines(@grid-lines);
    @search-lines.push: $_ for get-diagl-up-lines(@grid-lines);
```

### Video review

The full 2-hour review of the solutions to the Task 2 is available on YouTube. I hope you will find something useful for your understanding of Raku there. I enjoy looking at the solutions and trying to get every bit of it. In some cases, you cannot avoid using [the documentation](https://docs.raku.org/) :-)

<iframe width="560" height="315" src="https://www.youtube.com/embed/Uj41Q6STVD4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The timestamps to the reviews of the individual solutions:

* [01:22](https://www.youtube.com/watch?v=Uj41Q6STVD4&t=82s) — Arne Sommer
* [13:43](https://www.youtube.com/watch?v=Uj41Q6STVD4&t=823s) — Jason Messer
* [20:02](https://www.youtube.com/watch?v=Uj41Q6STVD4&t=1202s) — Luca Ferrari
* [30:47](https://www.youtube.com/watch?v=Uj41Q6STVD4&t=1847s) — Mark Anderson
* [37:33](https://www.youtube.com/watch?v=Uj41Q6STVD4&t=2253s) — Markus Holzer
* [51:39](https://www.youtube.com/watch?v=Uj41Q6STVD4&t=3099s) — Shahed Nooshmand
* [1:00:14](https://www.youtube.com/watch?v=Uj41Q6STVD4&t=3614s) — Simon Proctor
* [1:07:36](https://www.youtube.com/watch?v=Uj41Q6STVD4&t=4056s) — Athanasius
* [1:16:22](https://www.youtube.com/watch?v=Uj41Q6STVD4&t=4582s) — Colin Crain
* [1:21:19](https://www.youtube.com/watch?v=Uj41Q6STVD4&t=4879s) — Javier Luque
* [1:31:53](https://www.youtube.com/watch?v=Uj41Q6STVD4&t=5513s) — Mohammad S Anwar
* [1:42:12](https://www.youtube.com/watch?v=Uj41Q6STVD4&t=6132s) — Myoungjin Jeon
* [1:49:35](https://www.youtube.com/watch?v=Uj41Q6STVD4&t=6575s) — Roger Bell_West

<br>

***
## BLOGS
***

<br>

#### [Arne Sommer](https://raku-musings.com/primal-words.html), [Colin Crain](https://colincrain.wordpress.com/2020/09/05/wear-a-wig-to-play-the-goldbach-variations/), [Javier Luque](https://perlchallenges.wordpress.com/2020/09/04/perl-weekly-challenge-076/), [Laurent Rosenfeld](http://blogs.perl.org/users/laurent_r/2020/09/perl-weekly-challenge-76-letter-grid.html), [Luca Ferrari](https://fluca1978.github.io/2020/08/31/PerlWeeklyChallenge76.html), [Mohammad S Anwar](https://perlweeklychallenge.org/blog/weekly-challenge-076/), [Roger Bell_West](https://blog.firedrake.org/archive/2020/09/Perl_Weekly_Challenge_76__prime_sum_and_word_search.html) and [Shahed Nooshmand](https://rafraichisso.ir/2020/09/04/pwc-76).

<br>

If you want to participate in **The Weekly Challenge**, please contact us at <perlweeklychallenge@yahoo.com>.
