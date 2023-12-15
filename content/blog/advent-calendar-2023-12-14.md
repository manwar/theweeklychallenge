---
title: "Advent Calendar - December 14, 2023"
date: 2023-12-14T00:00:00+00:00
description: "Advent Calendar - December 14, 2023."
type: post
image: images/blog/2023-12-14.jpg
author: Roger Bell_West
tags: ["Perl", "JavaScript"]
---

## [**Advent Calendar 2023**](/blog/advent-calendar-2023)
### | &nbsp; [**Day 13**](/blog/advent-calendar-2023-12-13) &nbsp; | &nbsp; **Day 14** &nbsp; | &nbsp; [**Day 15**](/blog/advent-calendar-2023-12-15)  &nbsp; |
***

The gift is presented by `Roger Bell_West`. Today he is talking about his solution to [**The Weekly Challenge - 223**](/blog/perl-weekly-challenge-223). This is re-produced for `Advent Calendar 2023` from the original [**post**](https://blog.firedrake.org/archive/2023/07/The_Weekly_Challenge_223__Counting_Boxes.html).

***

<br>

## Counting Boxes
***

### Task 1: Count Primes

    You are given a positive integer, $n.
    Write a script to find the total count of primes less than or equal to the given integer.

<br>

t's been a while since we had a prime number problem - I think the last one was `#198 part 2`, which in fact is nearly the same challenge. The languages in my chosen collection that have prime number generation readily available are `Ruby` (in core) and `Perl` (via `Math::Prime::Utils`); for everything else I've written a lightly optimised sieve of `Eratosthenes`, which by its nature finds all primes with a given upper bound.

(Yes, including Raku - which has is-prime, but running that on every number is a lot slower.)

### Perl:

<br>

```perl
use Math::Prime::Util qw(primes);

sub countprimes($l) {
  return scalar @{primes($l)};
}
```

<br>

### Task 2: Box Coins

    You are given an array representing box coins, @box.

    Write a script to collect the maximum coins until you took out all boxes.
    If we pick box[i] then we collect the coins $box[i-1] * $box[i] * $box[i+1].
    If $box[i+1] or $box[i-1] is out of bound then treat it as 1 coin.

<br>

A slightly tricky parse, but it made sense with the examples. In each loop, pick one entry in the list. Add to the running total the product of that entry and its two neighbours. Remove that entry (but not the neighbours).

I found this quite reminiscent of `221 part 2` (a search that involves dropping each member in turn from the successor list), though this time I want to be exhaustive, so I use a depth-first search for simplicity. (Also, `221` was the challenge for which I skipped several of my usual languages.)

I'm a bit sloppy about defining extra variables here. Also some languages get `Pair` and similar types rather than an array with disparate elements.

### JavaScript:

<br>

```perl
function boxcoins(ints) {
    let mx = 0;
    let stack = [ [ ints, 0 ] ];
    while (stack.length > 0) {
        const x = stack.pop();
        const t = x[0];
        const tot = x[1];
        if (tot > mx) {
            mx = tot;
        }
        for (let i = 0; i < t.length; i++) {
            let p = t[i];
            if (i > 0) {
                p *= t[i - 1];
            }
            if (i < t.length - 1) {
                p *= t[i + 1];
            }
            const stot = tot + p;
            let tt = [];
            for (let ix = 0; ix < t.length; ix++) {
                if (i != ix) {
                    tt.push(t[ix]);
                }
            }
            stack.push([tt, stot]);
        }
    }
    return mx;
}

if (boxcoins([3, 1, 5, 8]) == 167) {
  process.stdout.write("Pass");
} else {
  process.stdout.write("FAIL");
}
process.stdout.write(" ");
if (boxcoins([1, 5]) == 10) {
  process.stdout.write("Pass");
} else {
  process.stdout.write("FAIL");
}
process.stdout.write("\n");
```

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

| &nbsp; [**Advent Calendar 2023**](/blog/advent-calendar-2023) &nbsp; |
