---
title: "Andrew Shitov Weekly Review: Challenge - 075"
date: 2020-09-06T00:00:00+00:00
description: "Andrew Shitov Weekly Review: Challenge - #075."
type: post
image: images/blog/p6-review-challenge-075.jpg
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

Welcome to the **Raku Review** for **Week 075** of **The Weekly Challenge!**. For a quick overview, go through the [**original tasks**](/blog/perl-weekly-challenge-075/) and [**recap**](/blog/recap-challenge-075/) of the weekly challenge.

<br>

This was a tough week, and the tasks appeared to be not that simple as they might seem from the beginning. Among the submitted solutions, there are three types of programs: straightforward solutions that implement a more or less language-independent algorithms, Raku-specific solutions where you can see the beauty of the language and its features, and the solutions that are unnecessarily complicated as to my opinion.

<br>

## Task 1. Coins Sum

In the first task, you need to form a collection of coins so that they add up to the required amount. Of course, nowadays, in the era of electronic payments, we do not do such exercises often enough, so it was a good skill to train.

## Combinations

One of the possible ways to solve the task is to generate all possible combinations from the given set of coin types, and then select those that form the correct answer.

[My solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/ash/raku/ch-1.raku) falls into this group. First, I fill the wallet so that I can reach an amount with a single type of coins:

    my @wallet;
    @wallet.append: $_ xx ($sum div $_) for @coins;

Then, just combine everything with everything and filter:

    .say for @wallet.combinations.unique(:as(*.Str)).grep({$sum == [+] $_});

An interesting thing to look at is how different participants filter unique lists:

    .unique(:as(*.Str))

[Or](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/arne-sommer/raku/ch-1.raku):

    .unique(:with(&[eqv]))

[Or](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/markus-holzer/raku/ch-1.raku):

    .unique: with => &[~~]

[Or](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/simon-proctor/raku/ch-1.raku) via a similar code with parentheses:

    .unique( with => &[~~] )

### Recursion and friends

Another group of solutions includes recursive gathering the coins for the change. For example, take the biggest or the smallest coin, then repeat the procedure for the remaining amount, and so on. A special case in this group of solutions is when the amount is representable by a single type of coins.

Let me demonstrate a part of the [solution by Javier Luque](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/javier-luque/raku/ch-1.p6) where you can clearly see the recursive nature of the algorithm:

```perl6
    sub coin-combinations(@C, $S, @bag is copy) {
        for (@C) -> $coin {
            @bag.push($coin);
            if (@bag.sum < $S) {
                    coin-combinations(@C, $S, @bag);
            }
            . . .
```

Or, examine the snippet of [Athanasius’s solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/athanasius/raku/ch-1.raku), where the next iteration happens for the new target amount, which is smaller than the current amount by `$i * $coin`.

```perl6
    sub count-coin-combinations(. . .) {
        . . .
        my UInt $new-target = $target - ($i * $coin);

        . . .

        $sum += count-coin-combinations($new-target, $coins.clone);
        . . .
    }
```

### Video review

There are more interesting moments in the solutions, which I highligted in the video review. The full review of the solutions to the Task 1 is available on YouTube:

<iframe width="560" height="315" src="https://www.youtube.com/embed/ANcTFpdcfMo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The timestamps for quick access to the review of each solution.

* [00:47](https://www.youtube.com/watch?v=ANcTFpdcfMo&t=47s) - Andrew Shitov
* [03:10](https://www.youtube.com/watch?v=ANcTFpdcfMo&t=190s) - Arne Sommer
* [05:42](https://www.youtube.com/watch?v=ANcTFpdcfMo&t=342s) - Jason Messer
* [08:54](https://www.youtube.com/watch?v=ANcTFpdcfMo&t=534s) - Mark Anderson
* [15:03](https://www.youtube.com/watch?v=ANcTFpdcfMo&t=903s) - Markus Holzer
* [18:33](https://www.youtube.com/watch?v=ANcTFpdcfMo&t=1113s) - Noud Aldenhoven
* [20:29](https://www.youtube.com/watch?v=ANcTFpdcfMo&t=1229s) - Simon Proctor
* [27:32](https://www.youtube.com/watch?v=ANcTFpdcfMo&t=1652s) - Athanasius
* [32:42](https://www.youtube.com/watch?v=ANcTFpdcfMo&t=1962s) - Colin Crain
* [35:43](https://www.youtube.com/watch?v=ANcTFpdcfMo&t=2143s) - Javier Luque
* [36:51](https://www.youtube.com/watch?v=ANcTFpdcfMo&t=2211s) - Laurent Rosenfeld
* [39:02](https://www.youtube.com/watch?v=ANcTFpdcfMo&t=2342s) - Mohammad S Anwar
* [42:53](https://www.youtube.com/watch?v=ANcTFpdcfMo&t=2573s) - Myoungjin Jeon
* [47:36](https://www.youtube.com/watch?v=ANcTFpdcfMo&t=2856s) - Roger Bell_West
* [50:00](https://www.youtube.com/watch?v=ANcTFpdcfMo&t=3000s) - Luca Ferrari
* [55:11](https://www.youtube.com/watch?v=ANcTFpdcfMo&t=3311s) - Jan Krnavek

Please refer to a [separate video](https://www.youtube.com/watch?v=ob1cSPTfA44) for the review of the solutions of Shahed Nooshmand.


## Task 2. Largest Rectangle Histogram

In the second task, you are given a histogram with integer heights of the cells, and you need to find the biggest rectangle that you can find in it. One thing that was not clear from the definition is whether you can treat a single histogram bin as a rectangle or you need at least two cells to form a shape. Different solutions treat this differently.

My personal winner in the category of the most Raku-ish solution is the [program by Markus Holzer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/markus-holzer/raku/ch-2.raku). Here is the complete solution:

```perl6
    my @A = (3, 2, 3, 5, 7, 5);
    say ( 1..@A ).map({ |@A.rotor($_ => 1 - $_) }).max({ .min * .elems });
```

We already saw a similar use of `rotor` in the previous weeks, and it still demonstrates its power. Another thing to note is how you can employ the code block in the `max` method to use your own definition of what maximum is. In this case, we are looking for the maximum area, and you can immediately express it in the code: `.max({ .min * .elems })`.

The straigtforward solution is to scan the rectangle of the possible widths at every possible position. For example, here is an example of such approach in the [solution by Noud Aldenhoven](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/noud/raku/ch-2.p6).

```perl6
    sub largest-rec-hist(@A) {
        my @largest-sub-rec = [];
        for 0..(@A.elems - 1) -> $i {
            for ($i + 1)..(@A.elems - 1) -> $j {
                @largest-sub-rec.push(($j - $i + 1) * @A[$i..$j].min);
            }
        }
        return @largest-sub-rec.max;
    }
```

[Shahed Nooshmand](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/shahed-nooshmand/raku/ch-2.raku) is using a very inventive way to generate the ranges of the rectangles to test:

```perl6
    my @indices = |(0..(@A − $length) Z.. ($length − 1)..^@A).max: { @A[|$_].min }
```

Notice the three range operators (`..`) here including the operator inside the zip metaoperator: `Z..`.

### Video review

The full review of the solutions to the Task 2 is available on YouTube:

<iframe width="560" height="315" src="https://www.youtube.com/embed/vyTu-VwHuqA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The timestamps to the reviews of the individual solutions:

* [00:45](https://www.youtube.com/watch?v=vyTu-VwHuqA&t=45s) - Andrew Shitov
* [04:42](https://www.youtube.com/watch?v=vyTu-VwHuqA&t=282s) - Arne Sommer
* [07:49](https://www.youtube.com/watch?v=vyTu-VwHuqA&t=469s) - Jan Krnavek
* [15:02](https://www.youtube.com/watch?v=vyTu-VwHuqA&t=902s) - Jason Messer
* [16:50](https://www.youtube.com/watch?v=vyTu-VwHuqA&t=1010s) - Luca Ferrari
* [20:45](https://www.youtube.com/watch?v=vyTu-VwHuqA&t=1245s) - Mark Anderson
* [25:12](https://www.youtube.com/watch?v=vyTu-VwHuqA&t=1512s) - Markus Holzer
* [27:40](https://www.youtube.com/watch?v=vyTu-VwHuqA&t=1660s) - Noud Aldenhoven
* [28:28](https://www.youtube.com/watch?v=vyTu-VwHuqA&t=1708s) - Simon Proctor
* [32:40](https://www.youtube.com/watch?v=vyTu-VwHuqA&t=1960s) - Athanasius
* [38:24](https://www.youtube.com/watch?v=vyTu-VwHuqA&t=2304s) - Colin Crain
* [42:01](https://www.youtube.com/watch?v=vyTu-VwHuqA&t=2521s) - Javier Luque
* [44:16](https://www.youtube.com/watch?v=vyTu-VwHuqA&t=2656s) - Laurent Rosenfeld
* [46:47](https://www.youtube.com/watch?v=vyTu-VwHuqA&t=2807s) - Mohammad S Anwar
* [50:07](https://www.youtube.com/watch?v=vyTu-VwHuqA&t=3007s) - Myoungjin Jeon
* [52:37](https://www.youtube.com/watch?v=vyTu-VwHuqA&t=3157s) - Roger Bell_West

Please refer to a [separate video](https://www.youtube.com/watch?v=ob1cSPTfA44) for the review of the solutions of Shahed Nooshmand.
<br>

***
## BLOGS
***

<br>

#### Andrew Shitov: [BLOG #1](https://andrewshitov.com/2020/08/29/coins-sum-the-raku-challenge-week-75-task-1/), [BLOG #2](https://andrewshitov.com/2020/08/29/largest-rectangle-histogram-the-raku-challenge-week-75-task-2/), [BLOG #3](https://andrewshitov.com/2020/08/30/a-more-idiomatic-raku-solution/)

#### [Arne Sommer](https://raku-musings.com/coins-rectangles.html), [Colin Crain](https://colincrain.wordpress.com/2020/08/29/throw-the-windows-wide-open-change-is-in-the-air/), [Javier Luque](https://perlchallenges.wordpress.com/2020/08/28/perl-weekly-challenge-075/), [Laurent Rosenfeld](http://blogs.perl.org/users/laurent_r/2020/08/perl-weekly-challenge-75-coin-sums-and-largest-rectangle-histogram.html), [Luca Ferrari](https://fluca1978.github.io/2020/08/24/PerlWeeklyChallenge75.html), [Mohammad S Anwar](https://perlweeklychallenge.org/blog/weekly-challenge-075/), [Roger Bell_West](https://blog.firedrake.org/archive/2020/08/Perl_Weekly_Challenge_75__coins_and_rectangles.html) and [Shahed Nooshmand](https://rafraichisso.ir/2020/08/26/pwc-75).

<br>

If you want to participate in **The Weekly Challenge**, please contact us at <perlweeklychallenge@yahoo.com>.
