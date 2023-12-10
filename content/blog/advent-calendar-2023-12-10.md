---
title: "Advent Calendar - December 10, 2023"
date: 2023-12-10T00:00:00+00:00
description: "Advent Calendar - December 10, 2023."
type: post
image: images/blog/2023-12-10.jpg
author: Stephen G Lynn
tags: ["Perl"]
---

## [**Advent Calendar 2023**](/blog/advent-calendar-2023)
### | &nbsp; [**Day 9**](/blog/advent-calendar-2023-12-09) &nbsp; | &nbsp; **Day 10** &nbsp; |
***

The gift is presented by `Stephen G Lynn`. Today he is talking about his solution to [**The Weekly Challenge - 217**](/blog/perl-weekly-challenge-217). This is re-produced for `Advent Calendar 2023` from the original [**post**](https://thiujiac.blogspot.com/2023/05/pwc-217.html).

***

<br>

## [**Challenge 1 (Sorted Matrix)**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-217/steve-g-lynn/perl/ch-1.pdl)
***

We are given a `n by n` matrix of numbers, and asked to report the third-smallest number in the matrix.

The specification seems to allow arbitrary non-numeric elements too, but since all the test examples are numeric, I will restrict to numeric matrices. `PDL` is of course the go-to tool for this.

The core subroutine:

<br>

```perl
sub sorted_matrix {my ($pdl)=@_; $pdl=$pdl->flat->qsort; $pdl(2);}
```

The flat method flattens the matrix piddle to a vector piddle, qsort sorts the vector in ascending order, then we just return the third element.

<br>

## [**Challenge 2 (Max Number)**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-217/steve-g-lynn/perl/ch-2.pdl)
***

We are given a list of positive integers of arbitrary lengths, and asked to concatenate them so as to produce the largest possible concatenated number. Thus, given `1` and `23`, we would produce `231`, not `123`.

To solve this, we exploit the fact that `Perl` can treat the elements interchangeably as numbers or as strings. We first sort the numbers using a routine that puts `$b` before `$a` if `$b.$a` is greater than `$a.$b`. Thus, we would sort `(1,23)` as `(23,1)` because `231 > 123`.

The core snippet:

<br>

```perl
join '', sort { $b.$a <=> $a.$b } @list;
```

<br>

A simpler approach suggests itself as just the straight descending lexical `sort {$b cmp $a}`. But this fails for example with `(1,10)`, which would be sorted as `10,1` not the desired `1,10`.

### The comparison function in sort

Let me briefly explain my own understanding of how comparison functions work in sort. The documentation can be a bit cryptic.

The general syntax of sort is:

<br>

```perl
sort f($a,$b) @list;
```

<br>

Here `f($a,$b)` is the comparison function. A comparison function can return `-1`, `0`, or `1`. Here `$a` and `$b` are standard package variables (global variables) that temporarily store two list elements being compared during the sort process.

If `f($a,$b)` returns `-1`, `$a` is placed before `$b` in the sorted list.

If `f($a,$b)` returns `1`, `$a` is placed after `$b` in the sorted list.

If `f($a,$b)` returns `0`, `$a` and `$b` would be tied in the sorted list (in any order in the sorted list but adjacent to each other or to other elements that return `0` when compared to either of them).

With the spaceship operator `<=>`:  `$x<=>$y` returns `-1` if `$x` is less than `$y`, `1` if `$x` is greater than `$y`, and `0` if `$x` is numerically equal `(==)` to `$y`.

So setting `f($a,$b)` to `$a <=> $b` will sort in ascending order, while setting `f($a,$b)` to `$b <=> $a` will sort in descending order.

With the string comparison operator `cmp`: `$x cmp $y` returns `-1` if `$x` is before `$y` in the dictionary `($x lt $y)`, `1` if  `$x` is after `$y` in the dictionary `($x gt $y)`, and `0` if the value of `$x` is the same string as the value of `$y` ($x eq $y).

We could rewrite the core snippet above as follows to make the logic more clear:

<br>

```perl
sub f {my ($x,$y)=@_; $y.$x <=> $x.$y}
join '', sort &f($a,$b) @list;
```

<br>

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

| &nbsp; [**Advent Calendar 2023**](/blog/advent-calendar-2023) &nbsp; |
