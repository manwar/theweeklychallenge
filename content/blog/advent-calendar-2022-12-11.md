---
title: "Advent Calendar - December 11, 2022"
date: 2022-12-11T00:00:00+00:00
description: "Advent Calendar - December 11, 2022."
type: post
image: images/blog/2022-12-11.jpg
author: Flavio Poletti
tags: ["Perl", "Raku"]
---

## [**Advent Calendar 2022**](/blog/advent-calendar-2022)
### | &nbsp; [**Day 10**](/blog/advent-calendar-2022-12-10) &nbsp; | &nbsp; **Day 11** &nbsp; | &nbsp; [**Day 12**](/blog/advent-calendar-2022-12-12) &nbsp; |
***

The gift is presented by `Flavio Poletti`. Today he is talking about his solution to [**"The Weekly Challenge - 153"**](/blog/perl-weekly-challenge-153). This is re-produced for **Advent Calendar 2022** from the original [**post**](https://github.polettix.it/ETOOBUSY/2022/02/24/pwc153-factorions) by him.

***

<br>

## PWC153 - Factorions

<br>

### TL;DR

<br>

On with [**TASK #2**](https://theweeklychallenge.org/blog/perl-weekly-challenge-153/#TASK2) from [**The Weekly Challenge**](https://theweeklychallenge.org/) `#153`. Enjoy!

<br>

## The challenge

<br>

You are given an integer, `$n`.

Write a script to figure out if the given integer is factorion.

<br>

> A factorion is a natural number that equals the sum of the factorials of its digits.

<br>

### Example 1

    Input: $n = 145
    Output: 1

    Since 1! + 4! + 5! => 1 + 24 + 120 = 145

### Example 2

    Input: $n = 123
    Output: 0

    Since 1! + 2! + 3! => 1 + 2 + 6 <> 123

<br>

## The questions

<br>

… does the challenge puzzle say anything about the base we are supposed to consider for figuring out the digits? Is base 10 fair enough?

<br>

## The solution

<br>

OK, let’s start with a blunt implementation of the test in Perl:

<br>

```perl
#!/usr/bin/env perl
use v5.24;
use warnings;
use experimental 'signatures';
no warnings 'experimental::signatures';
use List::Util 'sum';

say is_factorion(shift // 145) ? 1 : 0;

sub is_factorion ($n) {
   state $f = [ 1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880 ];
   $n == sum map { $f->[$_] } split m{}mxs, $n;
}
```

<br>

We only need factorials `up to 9` here, so it makes sense to avoid implementing the factorial function altogether and use a `state` variable to keep them.

Now, let’s switch the brain on.

It’s intuitive that there can be only a finite amount of factorions, whatever the base. As an example, in base 10 the maximum contribution to the sum is from digit 9, which provides a whopping `362880`. Not bad, but it’s still a finite and limited contribution to be compared against exponentially growing numbers as we add more digits.

So, for example, the sequence of `9999999` (seven 9) yields a sum of all factorials of the digits that is a mere `2540160` (seven digits, but clearly less than the original). As a matter of fact, it’s impossible to go beyond `2540160` with seven digits, and eight digits or more numbers are of course out of reach.

So… it makes sense to look for all factorions in base 10:

<br>

```perl
#!/usr/bin/env perl
use v5.24;
use warnings;
use experimental 'signatures';
no warnings 'experimental::signatures';
use List::Util 'sum';

# find out the limit. With a given amount of 9 we can only go "some"
# far, so there's no point going beyond that maximum point.
my $s = '';
while ('necessary') {
   $s .= '9';
   last if $s > sumfact($s);
}

# find out all factorions (up to that limit)
for my $n (0 .. sumfact($s)) {
   say $n if $n == sumfact($n);
}

sub sumfact ($n) {
   state $f = [ 1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880 ];
   sum map { $f->[$_] } split m{}mxs, $n;
}
```

<br>

It seems that there are not that many:

<br>

```perl
1
2
145
40585
```

<br>

This leads us to our Raku solution:

<br>

```perl
#!/usr/bin/env raku
use v6;
sub MAIN (Int:D $n = 145) { put is-factorion($n) ?? 1 !! 0 }

sub is-factorion (Int:D $n where $n >= 0) {
   state %factorions = set(1, 2, 145, 40585);
   return $n ∈ %factorions;
}
```

<br>

So cool!



<br>

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

| &nbsp; [**Advent Calendar 2022**](/blog/advent-calendar-2022) &nbsp; |
