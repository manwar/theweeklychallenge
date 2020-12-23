---
title: "Advent Calendar - December 20, 2020"
date: 2020-12-23T00:00:00+00:00
description: "Advent Calendar - December 20, 2020."
type: post
image: images/blog/2020-12-20.jpg
author: Yozen Hernandez
tags: ["Perl"]
---

[**Advent Calendar 2020**](/blog/advent-calendar-2020)
***

The gift is presented by [**Yozen Hernandez**](https://perlweeklychallenge.org/blog/meet-the-champion-017). Today he is talking about his solution to the task `Ackermann function` of **["The Weekly Challenge - 017"](/blog/perl-weekly-challenge-017)**. This is re-produced for **Advent Calendar 2020** from the original [**post**](https://yzhernand.github.io/posts/perl-weekly-challenge-17-1/) by **Yozen Hernandez**.

***

The [Perl Weekly Challenge](https://perlweeklychallenge.org/blog/perl-weekly-challenge-017/) is back, and our first challenge was to implement a function known as the Ackermann function:

> Create a script to demonstrate Ackermann function. The Ackermann function is defined as below, m and n are positive number:

> A(m, n) = n + 1 if m = 0 A(m, n) = A(m - 1, 1) if m > 0 and n = 0 A(m, n) = A(m - 1, A(m, n - 1)) if m > 0 and n > 0

Technically, the above formulation is known as the **“Ackermann-Péter function”**, but as the Wikipedia page states, many authors refer to it as “the” Ackermann function.

This is looked like a fairly straightforward implementation of a recursive function, but it did have a few hairs. Firstly, as can be seen above, the function is [piecewise](https://en.wikipedia.org/wiki/Piecewise), and is defined only for non-negative integers. In fact, the recursive calls gradually step the values down to 0, with the deepest call possible being reached when m=0.

```perl
sub A ( $m = 3, $n = 3) {
    croak "Error: function only defined for nonnegative integers."
        . "(got: m = $m, n = $n)"
        if ( $m < 0 && $n < 0 );

    # A(m, n) = n + 1                  if m = 0
    return $n + 1 if $m == 0;

    # A(m, n) = A(m - 1, 1)            if m > 0 and n = 0
    # A(m, n) = A(m - 1, A(m, n - 1))  if m > 0 and n > 0
    return A( $m - 1, ($n == 0) ? 1 : A($m, $n-1) );
}
```

One thing I initially missed when implementing this, is that the function not only should subtract 1 from $n when both values are greater than 0, but it should actually make a second, embedded call there! It took me forever to notice that was missing 😒.

Once that was implemented, I decided to test it with larger values, because I don’t read whole Wikipedia pages. After about a minute of waiting, I decided to scoll down… You should check out the table of values on the wiki page. The short version is that the Ackermann function grows. VERY quickly. I kept my testing down to some smaller values, and those all passed.

Finally, I decided to compare performance with and without memoization. Memoizing really only makes sense with repeated execution, and I don’t know of the actual applications of this function so I don’t know how true that would be.

With default parameters, using `Benchmark::Forking` gets me the following results;

            Rate        no_memo    memo
    no_memo 269501/s    --         -68%
    memo    850801/s    216%       --

Its a definite improvement, but again, I’m not sure how useful it would be in a real world application.

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2020**](/blog/advent-calendar-2020)
