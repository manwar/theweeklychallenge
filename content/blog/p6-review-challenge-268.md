---
title: "Andrew Shitov Weekly Review: Challenge - 268"
date: 2024-05-14T00:00:00+00:00
description: "Andrew Shitov Weekly Review: Challenge - #268."
type: post
image: images/blog/p6-review-challenge-268.jpg
author: Andrew Shitov
tags: ["Raku"]
---
***
# Raku Solutions Weekly Review
***

# Pre-thoughts

The first task was to find the magic number that, when added to every item of the first array, converts the array in such a way that all the numbers that you get after the addition are found in the second array of the same length. Sounds messy, but it effectively means that if you sort both arrays, then the difference between their corresponding elements is constant.

Let’s take the first example:

```
Input: @x = (3, 7, 5)
       @y = (9, 5, 7)
Output: 2

The magic number is 2.
@x = (3, 7, 5)
   +  2  2  2
@y = (5, 9, 7)
```

The sorted arrays are `(3, 5, 7)` and `(5, 7, 9)`, and you can see now that `5 - 3 = 2`, `7 - 5 = 2`, and `9 - 7 = 2` too.

This is the principle on which I based [**my own solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-268/ash/raku/ch-1.raku). The tricky part is whether you want to give the answer by only computing the difference between the first elements of the sorted arrays, or you want to double check and confirm that the other items keep the same distance.

```raku
for @tests -> (@a is copy, @b is copy) {
    @a .= sort;
    @b .= sort;

    my $diff = @b[0] - @a[0];
    if @a >>+>> $diff eqv @b {
        say $diff;
    }
    else {
        say "No such number";
    }
}
```

I only compute the difference between the two first elements, and then test if the difference is applicable for all elements in the arrays.

# Squish all

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-268/arne-sommer/raku/ch-1.raku) demonstrates a few unique `Raku` syntax features in his solution.

First, the sorted input arrays are merged to make pairs, for which you can find the differences:

```raku
my @pairs = @x Z @y;
my @diff = @pairs.map({ $_[0] - $_[1] });
```

To confirm that all the differences are equal, a reduction metaoperator `[==]` is used:

```raku
say ( [==] @diff ) ?? @diff[0].abs !! 'error';
```

The construct `[==] @diff` is True if all the elements in `@diff` are equal.

Look at the soluton by [**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-268/laurent-rosenfeld/raku/ch-1.raku) where `[==]` is used too:

```raku
sub magic-nr (@x, @y) {
    my @in1 = @x.sort;
    my @in2 = @y.sort;
    my @gaps = map {@in1[$_] - @in2[$_]}, 0..@x.end;
    return Nil unless [==] @gaps;
    return @gaps[0].abs;
}
```

[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-268/bruce-gray/raku/ch-1.raku) also used `Z`, but in combination with `-`, which allows to make both merging and computing differences at the same time: `@y.sort Z- @x.sort`.

```raku
sub task1_Z_minus ( @x, @y --> Numeric ) {
    die if @x.elems != @y.elems;

    my @y-x = (@y.sort Z- @x.sort).squish;

    return +@y-x == 1 ?? @y-x[0] !! Nil;
}
```

Here, the input is additionally checked to make sure the arrays have the same length.

The [**squish**](https://docs.raku.org/routine/squish) trick in this solution is very handy to avoid comparing the differences element by element. Consider this example:

```
my @x = (3, 7, 5);
my @y = (9, 5, 7);

my @y-x = (@y.sort Z- @x.sort);
dd @y-x; # Array @y-x = [2, 2, 2]

@y-x.=squish;
dd @y-x; # Array @y-x = [2]
```

The first output tells us that the differences are `Array @y-x = [2, 2, 2]`. We see that they are the same, so the second `dd` prints `Array @y-x = [2]` — and here is an array with the only value.

Now, update the intput values of `@y`:

```raku
my @x = (3, 7, 5);
my @y = (19, 5, 7); # 19 instead of 9 here
```

And this breaks the harmony: `Array @y-x = [2, 12]`. Differences are different, so a failure.

[**Luca Ferrari**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-268/luca-ferrari/raku/ch-1.raku) is squishing the arrays explicitly to checkif there is only single value in the end:

```raku
my @diffs;
for 0 ..^ @sorted-left.elems -> $i {
    my $current = @sorted-left[ $i ] - @sorted-right[ $i ];
    @diffs.push: $current if ! @diffs.grep( $current );
}

@diffs[ 0 ].say and exit  if @diffs.elems == 1;
```

[**Mark Anderson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-268/mark-anderson/raku/ch-1.raku) reminds us about another useful way to concurrently handle array elements in `Raku`, namely, using the `>>-<<` kind of operator:

```raku
my @r = @y.sort >>-<< @x.sort;
return .head if .elems == 1 given @r.squish;
```

We get the by-element differences in the `@r` variable, which then is `squish`ed and checked if it hosts a single value.

Another way to ensure all the differences are equal is used in the solution by [**Robert Ransbottom**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-268/0rir/raku/ch-1.raku):

```raku
my @candi = (@a.sort [Z-] @b.sort);
return (@candi.all == @candi[0])
        ?? @candi[0].Int.abs
        !! Int;
```

Here, `@candi.all == @candi[0]` gives the answer to the question.

A similar approach is found in [**Jaldhar H. Vyas’s solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-268/jaldhar-h-vyas/raku/ch-1.raku):

```raku
my @diff = $x.words.sort Z- $y.words.sort;
say @diff.all ?? @diff[0].abs !! "no magic number";
```

A more traditional way is used in the solution by [**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-268/athanasius/perl/ch-1.pl):

```raku
my Int $magic = @y-sorted[ 0 ] - @x-sorted[ 0 ];

for 1 .. $x.end -> UInt $i
{
    return unless @y-sorted[ $i ] - @x-sorted[ $i ] == $magic;
}
```

[**Packy Anderson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-268/packy-anderson/raku/ch-1.raku) evaluates the difference between the smallest items of the two arrays and then tests it against the other elements, quitting the loop if the check fails:

```raku
sub magicNumber(@x, @y) {
  my @xS = @x.sort;
  my @yS = @y.sort;
  my $magic = @yS.shift - @xS.shift;
  while (@xS) {
    if (@yS.shift - @xS.shift != $magic) {
      return; # no magic number
    }
  }
  return $magic;
}
```

Finally, [**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-268/ulrich-rieke/raku/ch-1.raku) counts how many correct differences are there in the array of differences `@zipped` and if that agrees with the size of the original data:

```raku counds the
if ( @zipped.grep( {$_[1] - $_[0] == $comp } ).elems == @firstNumbers.elems ) {
   say $comp ;
}
```

# The Min-Min solutions

A few participants optimize the solution using the assumption that the input data is correct, so to find the difference, you even don’t need to sort the arrays, but rather find the minimums and use them directly:

[**Asher Harvey-Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-268/asherbhs/raku/ch-1.raku):

```raku
sub magic-number(Int:D @x, Int:D @y --> Int:D) {
    @y.min - @x.min
}
```

[**Jan Krnavek**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-268/wambash/raku/ch-1.raku):

```raku
sub magic-number (@x, @y) {
    @y.min - @x.min
}
```

[**BarrOff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-268/barroff/raku/ch-1.p6):

```raku
sub magic-number(@x, @y --> Int:D) {
    abs(min(@x) - min(@y))
}
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-268/roger-bell-west/raku/ch-1.p6):

```raku
sub magicnumber(@a, @b) {
    return min(@b) - min(@a);
}
```

By the way, notice that the [**TIMTOWTDI**](https://wiki.treasurers.org/wiki/TIMTOWTDI) principle still works in `Raku`.

[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-268/bruce-gray/raku/ch-1.raku) is also using `min` in another variant of the solution:

```raku
sub task1_concise ( @x, @y --> Numeric ) {
    return adds_to_same(@x, $_, @y) ?? $_ !! Nil given @y.min - @x.min;
}
```

To make sure the difference is constant along the whole data, `eqv` is used to compare the baggified arrays:

```raku
sub adds_to_same { (@^a X+ $^addend).Bag eqv @^b.Bag }
```

# One more

Before wrapping up, let us look at the solution by [**Feng Chang**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-268/feng-chang/raku/ch-1.raku):

```raku
unit sub MAIN(Str:D $x, Str:D $y);

my @x = $x.comb(/\d+/);
my @y = $y.comb(/\d+/);
put (@y.sum - @x.sum) / +@x;
```

Here, none of above-seen bits are used. Instead, all the numbers in the arrays are added up, and the difference between the elements is computed as the difference of the sums divided by the size of the array.
