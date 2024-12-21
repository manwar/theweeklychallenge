---
title: "Advent Calendar - December 21, 2024"
date: 2024-12-21T00:00:00+00:00
description: "Advent Calendar - December 21, 2024."
type: post
image: images/blog/2024-12-21.jpg
author: Bruce Gray
tags: ["Perl", "Raku"]
---

## [**Advent Calendar 2024**](/blog/advent-calendar-2024)
### | &nbsp; [**Day 20**](/blog/advent-calendar-2024-12-20) &nbsp; | &nbsp; **Day 21** &nbsp; |
***

The gift is presented by `Bruce Gray`. Today he is talking about his solution to [**The Weekly Challenge - 277**](/blog/perl-weekly-challenge-277). This is re-produced for `Advent Calendar 2024` from the original [**post**](https://blogs.perl.org/users/bruce_gray/2024/07/twc-277-strength-uncombined.html).

***

<br>

## Strength Uncombined
***

<br>

### Task #1: Count Common

    Given two arrays of strings, return the count of words that appears in both arrays exactly once.

<br>

### Observations:
***

The task specifies two input arrays, but is easier to express once we allow for unlimited input arrays.

The input arrays cannot just be `flattened/combined` and `counted`, or we will lose the distinction between `count==2` meaning `"one in each sentence"` vs `"two in one sentence"`. However, there is no example highlighting this incorrect approach. I have added the test: ( `1, <Perl is Perl>, <Java is not>` ).

### Raku
***

`Map` each array of strings into a `Set of words` and a `list of words` that occur more than once, subtracting the list from the `Set` to create a new `Set of only words occurring once in the array`. Then, take the intersection of `(all)` those `Sets` via `reduce(spelled [∩])`, and `return the size of that intersection by +`.

<br>

```perl
sub task1 ( @LoLists --> UInt ) {
    return +[∩] map { .Set (-) .repeated }, @LoLists;
}
```

<br>

After doing the `Perl` solution below, I realized that while `.Set (-) .repeated` is concise inside the `map`, a change to `.Bag.grep(*.value == 1).Set` would make the task clearer to a maintenance programmer. I left it unchanged, to mention it here.

### Perl
***

The algorithm is the same as in `Raku` (after the mentioned clearer change), but since the `Per` module for `Bags` lacks some methods that `Raku` builds-in, I tried augmenting `Set::Bag` instead of writing the extra logic into the task1 sub. I am pleased with how this turned out.

<br>

```perl
use v5.40;
use Set::Bag;

package Set::Bag { # Extending the class with methods I wish were already included.
    use List::Util qw<pairgrep>;
    sub new_from_list ($self, $list_aref) {
        my $bag = Set::Bag->new();
        $bag->insert($_ => 1) for @{$list_aref};
        return $bag;
    }
    sub singles ($self) {
        return Set::Bag->new( pairgrep { $b == 1 } $self->grab );
    }
    sub count ($self) {
        my @e = $self->elements();
        return 0 + @e;
    }
}

use List::Util qw<reduce>;
sub task1 ( @LoLists ) {
    my $intersections_bag =
        reduce { $a & $b }
        map { Set::Bag->new_from_list($_)->singles }
        @LoLists;

    return $intersections_bag->count;
}
```

<br>

### Task #2: Strong Pair

    Given an array of integers, return the count of all strong pairs in the given array.

    (x,y) is called a strong pair if it satisfies: 0 < |x - y| < min(x, y).

<br>

### Observations:

`Example 2` says input `(5, 7, 1, 7)` has output `1`, which implies that the two `(5,7)` pairs (because the `7 occurs twice`) must count only `once`. This further implies that we must either `de-duplicate` the input array, or `accumulate` a list of all the `strong pairs` and `de-duplicate` that list before summarizing in into the count of strong pairs. Since de-duplicate the input array is simpler, I will do that, via `List::Util::uniq` in `Perl`, and either `.unique` or `.squish-after-sorting` in `Raku`.

More observations are embedded between solutions, for narrative flow.

### Perl

Translation of the slowest and fastest `Raku` solutions, with no notable changes. More than half the total runtime is just task2a grinding through all the combinations of the final EXTRA test: `1..4096`.

### Raku

Straight translation of the task.

```perl
sub task2_combo_unique ( @ns --> UInt ) {

    sub is_strong_pair ( (\x,\y) --> Bool )
        { 0 < abs(x - y) < min(x,y) }

    return +grep &is_strong_pair, combinations(@ns.unique, 2);
}
```

<br>

Now, let's do some logic and algebra, to transform `0 < abs(x - y) < min(x,y)` into something more informative and performative.

    0 < abs(x - y) < min(x,y)
    0 < abs(x - y) and abs(x - y) < min(x,y)

Absolute values cannot be `negative`, so the `<` is really `!=`:

    0 != abs(x - y) and abs(x - y) < min(x,y)

The only way `abs(x - y)` can equal `0` is if `x and y are the same number`. I already committed to de-duplicating the input, so `x==y` cannot happen. Therefore `0 != abs(x - y) is always true`, and the whole clause can be removed. That leaves:

    abs(x - y) < min(x,y)

Now, I could have made a solution with only that simplification, but removing `one !=0 comparison` doesn't seem high-value, and we are on the verge of more math realization. Both `abs(x-y)` and `min` are determined by ordering, and the pairings we want to count are unordered (i.e. combinations, so `5,7` is the same pair as `7,5)`, which is easiest to generate for computers by forcing an order. Also, `Raku` has a faster way to de-duplicate a list when it is in sorted order. All that adds up to a likelihood that sorting the list will allow approaches that gain efficiency the exceed the cost of sorting.

So, before this point, we can assume the list had no duplicates, because we used `.unique`. Solutions below this point will all use `.sort(+*).squish`, so we can assume `"no duplicates, and in ascending numeric order"`.

Given that we now know the ordering, the last Strong Pair definition we had reduced to:

    abs(x - y) < min(x,y)

we can replace min(x,y) with just x:

    abs(x - y) < x

Also, since `abs(x - y)` is the same as `abs(y - x)`, we can swap them:

    abs(y - x) < x

The ordering implies `y > x`, so `y - x` cannot be `negative`, and `abs` can be removed:

    y - x < x

This simplification allows us to remove `min`, `abs`, and `0<` from the `grep` code. This gives use a `2x performance` improvement, even with the added cost of the sort (which is partial paid for by `.squish` being cheaper than `.unique`).

<br>

```perl
sub task2_combo_sort ( @ns --> UInt ) {
    return +grep ->(\x,\y){ (y - x) < x },
            combinations( @ns.sort(+*).squish, 2 );
}
```

<br>

Both versions of `task2_combo_*` are `O(N²)`.

We can do even better though!

A last bit of algebra; if we take the prior simplification:

    y - x < x

and add x to both sides, we get:

    y < 2x

and since we know `x < y`, that tells us that `x < y < 2x`. In Raku terms:

    $y ~~ $x ^..^ ($x * 2)

We will use that soon.

Once we are working with `sorted unique numbers`, the `.combinations(2)` approach blocks three optimizations.

Given `3,4,5,6,7,8,9,10,11`, and aliasing to `$x` as we iterate:

Even when we can take no hints from any prior loop, there can be an early endpoint to checking `$y`. `x=3` will pair with `4`, then `5`, then fail to pair with `6`, and at that point we can stop checking; we know every number after will fail. `.combinations` cannot do this early exit; it must generate and test all five pairs: `(3,7)` through `(3,11)`.

The scans for valid `$y` can start earlier. `$x=4` will pair with `5,6,7`, but `5 did not need to be checked`; because `5` is to the left of the stopping point of the prior loop, we already know it is inside the `2x` range! We could assume `5` without checking, then check `6,7`. Using the same optimization in the next loop where `$x=5`, we can assume the pairings with `6&7` are valid, and start checking at `8`.

Past a `"halfway"` point, the `$x` iterations can be replaced by a closed equation. When `$x=6, 2*$x=12` is more than the last element `(11)`. So, all numbers to right are `"in range" of 2x`, and always will be from this point forward. So, no need to inspect the array values at all any more; the number of pairs that will succeed is all of pairs remaining, since none can fail. We can directly calculate using the `near-zero-cost O(1) triangle calculation`.

LATE NOTE: `Jörg Sommrey (jo-37)` [**blogged**](https://github.sommrey.de/the-bears-den/2024/07/12/ch-277.html) on the logic of the first two of these optimizations, in proper `Math/CompSci` notation. If you have an academic background, that writeup might be more to your liking.

To make room for the first two optimizations, we must abandon both the uncontrolled `.combinations` method and the use of a `inner $y loop`. Instead, we will have an `outer $x loop`, and a `$y pointer` that can remember its location across `$x loops`.

`O(N)` algorithm: (Well, it is `O(N lnN)` on paper, but with the numeric sort running in down in `NQP`, I am not seeing the impact of the sort, at the `under-10-million scale` I am testing.)

<br>

```perl
sub task2_linear_after_sort ( @ns --> UInt ) {
    my @ns_ss = @ns.sort(+*).squish;

    my ( $y, $r ) = 0 xx *;
    for @ns_ss.kv -> $x, $xv {
        my $x2 = $xv * 2;

        $y++ while ($y+1) <= @ns_ss.end and @ns_ss[$y+1] < $x2;

        $r += $y - $x;
    }

    return $r;
}
```

<br>

To enable the third optimization, all that we need is my `$highest = @ns_ss.tail` outside the loop, and then to watch for `2x` to exceed that `highest`, then add in all the pairs we would have counted past that point. e.g. if it happens `5-away` from the end, the count of pairs would be `4+3+2+1`, or `[+]1..4`, or `Triangle(4)`.

<br>

```perl
sub task2_linear_after_sort_early_return ( @ns --> UInt ) {
    my @ns_ss = @ns.sort(+*).squish;

    my $highest = @ns_ss.tail;

    my ( $y, $r ) = 0 xx *;
    for @ns_ss.kv -> $x, $xv {
        my $x2 = $xv * 2;

        if $x2 > $highest {
            $r += Triangle(+@ns_ss - $x);
            last;
        }

        $y++ while ($y+1) <= @ns_ss.end and @ns_ss[$y+1] < $x2;

        $r += $y - $x;
    }

    return $r;
}
```

<br>

The performance differences are as severe as one would expect with `O(N²) vs anything-close-to-O(N)`; in the time that the slowest solution can solve a `1_000` element input array, the fastest can solve `1_000_000` elements.

<br>

***

If you have any suggestion then please do share with us **<perlweeklychallenge@yahoo.com>**.

| &nbsp; [**Advent Calendar 2024**](/blog/advent-calendar-2024) &nbsp; |
