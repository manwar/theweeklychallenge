---
title: "Advent Calendar - December 20, 2023"
date: 2023-12-20T00:00:00+00:00
description: "Advent Calendar - December 20, 2023."
type: post
image: images/blog/2023-12-20.jpg
author: Jaldhar H. Vyas
tags: ["Perl", "Raku"]
---

## [**Advent Calendar 2023**](/blog/advent-calendar-2023)
### | &nbsp; [**Day 19**](/blog/advent-calendar-2023-12-19) &nbsp; | &nbsp; **Day 20** &nbsp; | &nbsp; [**Day 21**](/blog/advent-calendar-2023-12-21) &nbsp; |
***

The gift is presented by `Jaldhar H. Vyas`. Today he is talking about his solution to [**The Weekly Challenge - 235**](/blog/perl-weekly-challenge-235). This is re-produced for `Advent Calendar 2023` from the original [**post**](https://www.braincells.com/perl/2023/09/perl_weekly_challenge_week_235.html).

***

<br>

## Challenge 1: Remove One
***

    You are given an array of integers.
    Write a script to find out if removing ONLY one integer makes it strictly increasing order.

    Example 1

        Input: @ints = (0, 2, 9, 4, 6)
        Output: true

        Removing ONLY 9 in the given array makes it strictly increasing order.

    Example 2

        Input: @ints = (5, 1, 3, 2)
        Output: false

    Example 3

        Input: @ints = (2, 2, 3)
        Output: true

<br>

This is not a `one-liner` I'm afraid but it is fairly short and simple.

First we define a `flag` to note whether we are going in strictly increasing order or not. Initially it is `false`.

<br>

```perl
my Bool $increasing = False;
```

<br>

Then setting `$i` in a range from `0` to the length of `@ints` (which we have populated from command-line arguments) ...

<br>

```perl
for 0 .. @ints.end -> $i {
```

<br>

...we make a copy of `@ints` and remove the `$ith` element from it.

<br>

```perl
    my @copy = @ints;
    @copy.splice($i, 1);
```

<br>

We check if this copy is in strictly increasing order. Originally I did this by comparing `@copy` with yet another copy which had `.sort()` run upon it. If the two were equivalent it would mean increasing order. But it is more efficent to use `[<]` operator instead.

<br>

```perl
    if [<] @copy {
```

<br>

If `@copy` is in increasing order, we can set `$increasing` to `true` and `stop` searching. There may be other viable candidates but we only care if there is at least one.

<br>

```perl
        $increasing = True;
        last;
    }
```

<br>

If it wasn't, we go back and try a different copy.

<br>

```perl
}
```

<br>

Regardless of the outcome, we print the value of `$increasing`.

<br>

```perl
say $increasing;
```

<br>

[**Full code on GitHub: Raku**](https://github.com/jaldhar/perlweeklychallenge-club/blob/master/challenge-235/jaldhar-h-vyas/raku/ch-1.raku)

<br>

This is the `Perl` version.

`Perl` doesn't have specific `true` and `false` values so I used `1` and `undef` instead.

<br>

```perl
my $increasing = undef;

for my $i (0 .. scalar @ARGV - 1) {
    my @copy = @ARGV;
    splice @copy, $i, 1;
```

<br>

As we don't have `[<]` I had to use my previous tactic of comparing the copy to a sorted version of itself. This uses smart matching so I had to add `use experimental qw/ smartmatch /;` at the top of the script to prevent an annoying warning message. Oh and both arguments had to be array references for some reason.

<br>

```perl
    if (\@copy ~~ [sort @copy]) {
        $increasing = 1;
        last;
    }
}

say $increasing ? 'true' : 'false';
```

<br>

[**Full code on GitHub: Perl**](https://github.com/jaldhar/perlweeklychallenge-club/blob/master/challenge-235/jaldhar-h-vyas/perl/ch-1.pl)

<br>

## Challenge 2: Duplicate Zeros
***

    You are given an array of integers.

    Write a script to duplicate each occurrence of ZERO in the given array and shift
    the remaining to the right but make sure the size of array remain the same.

    Example 1

        Input: @ints = (1, 0, 2, 3, 0, 4, 5, 0)
        Ouput: (1, 0, 0, 2, 3, 0, 0, 4)

    Example 2

        Input: @ints = (1, 2, 3)
        Ouput: (1, 2, 3)

    Example 3

        Input: @ints = (0, 3, 0, 4, 5)
        Ouput: (0, 0, 3, 0, 0)

<br>

My plan for solving this one is to go through `@ints` (taken from the command-line arguments as usual.) and copy each element into a new array.

So we need a new array called `@output`.

<br>

```perl
my @output;
```

<br>

Then for each element in `@ints...`

<br>

```perl
for @ints -> $elem {
```

<br>

...If the current element is a `0`, instead of `one`, `two` `0`s are copied into `@output`.

<br>

```perl
    if $elem == 0 {
        @output.push(| (0, 0));
```

<br>

Otherwise the element is copied into `@output` as-is.

<br>

```perl
    } else {
        @output.push($elem);
    }
```

<br>

If the length of `@output` has become the same as the length of `@ints`, it is time to stop processing.

<br>

```perl
    if @output.elems == @ints.elems {
        last;
    }
}
```

<br>

Finally, we print the suitably prettyed-up `@output`.

<br>

```perl
say q{(}, @output.join(q{, }, ), q{)};
```

<br>

[**Full code on GitHub: Raku**](https://github.com/jaldhar/perlweeklychallenge-club/blob/master/challenge-235/jaldhar-h-vyas/raku/ch-2.raku)

<br>

This is the `Perl` version, a straightforward translation from `Raku`.

<br>

```perl
my @output;

for my $elem (@ARGV) {
    if ($elem == 0) {
        push @output, 0, 0;
    } else {
        push @output, $elem;
    }

    if (scalar @output == scalar @ARGV) {
        last;
    }
}

say q{(}, (join q{, }, @output), q{)};
```

<br>

[**Full code on GitHub: Perl**](https://github.com/jaldhar/perlweeklychallenge-club/blob/master/challenge-235/jaldhar-h-vyas/perl/ch-21.pl)

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

| &nbsp; [**Advent Calendar 2023**](/blog/advent-calendar-2023) &nbsp; |
