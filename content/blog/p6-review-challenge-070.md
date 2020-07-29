---
title: "Andrew Shitov Weekly Review: Challenge - 070"
date: 2020-07-29T00:00:00+00:00
description: "Andrew Shitov Weekly Review: Challenge - #070."
type: post
image: images/blog/p6-review-challenge-070.jpg
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

Welcome to the **Raku Review** for **Week 070** of **The Weekly Challenge!**. For a quick overview, go through the [**original tasks**](/blog/perl-weekly-challenge-070/) and [**recap**](/blog/recap-challenge-070/) of the weekly challenge.

<br>

## Task 1. Character swapping

### Swapping

In this task, you need to swap a few characters in the given string. The swapping range is controlled by a couple of integer parameters: the number of swappings and the offset.

The task of swapping two characters is mostly solved using one of the two forms of assigning two items at the same time. Either individually:

```perl6
    my @s = $s.comb;
    (@s[0], @s[7]) = @s[7], @s[0];
```

Or using an array slice:

```perl6
    my @s = $s.comb;
    @s[0, 7] = @s[7, 0];
```

A few of the solutions offer an interesting alternative and use the built-in `substr-rw` method (or function):

```perl6
    my $t = $s.substr(0, 1);
    $s.substr-rw(0, 1) = $s.substr(7, 1);
    $s.substr-rw(7, 1) = $t;
```

It is not possible to subscript a string in Raku (actually, why?), so Laurent Rosenfeld created his own version of the operator `[ ]`:

```perl6
    multi sub postcircumfix:<[ ]> (Str $s, Int $n) {
        substr-rw $s, $n, 1;
    }
```

Checkout that solution in the repository and watch the video to see how it can be made even more powerful.

### Input restrictions

The choice of the input parameters (`$C` and `$O`) makes inposbile to get index overflow when subscripting the arrays of characters, so it looks like we never need to use modulo in the solution:

    $S[ 1 % $N ] <=> $S[ (1 + $O) % $N ]
    . . .
    $S[ $C % $N ] <=> $S[ ($C + $O) % $N ]

Indeed, if `1 <= $C <= $O >= 1` and `$C + $O <= $N`, then the maximum possible value of `$C` is `$N - 1`, so `$S[$C % $N]` is equivalent to `$S[$C]`.

Similarly, in `$S[($C + $O) % $N]`, the value of `$C + $O` does not exceed `$N` by definition, but if `$C + $O == $N`, then we get `$S[0]`, so the modulo operation is still needed here.

Taking the above consideration into account, we can simplify the task:

    $S[ 1 ] <=> $S[ (1 + $O) % $N ]
    . . .
    $S[ $C ] <=> $S[ ($C + $O) % $N ]

Note that the character at position 0 can still be swapped, even if you do not see it from the left side of the above formulae.

### To loop or not to loop

The main swapping loop is most often organised with a `for` loop over the range `1..$C`. In the solution by Mark Anderson, the loop is indirectly run via `map`:

```perl6
    map { @S[$_ % $N, ($_ + $O) % $N] = @S[($_ + $O) % $N, $_ % $N] }, 1..$C;
```

But you can solve the task even without loops! Myoungjin Jeon demonstrates how:

```perl6
    $N = $S.chars;
    my $K = $C > $O;

    my $result;
    with $S {
        $result  = .substr( 0, 1 ) # 1
        ~ .substr( $C+2 .. $C+$O ) # 2
        ~ .substr( $K ?? $C-$O .. $C !! $C+1 .. $O ) # 3
        ~ .substr( 1 .. ( $C + $K*($O+1) ) ) # 4
        ~ .substr( ( $C+$O+1+$K) .. $N -1 );
    }
```

The final string here is a concatenation of several parts. The initial conditions makes sure the is no overlapping, so you can take the part of the string before the first swapping (`p`), the second part of the characters (`ndr`), which go as a whole, so we can **immediately take the substring of three characters**, then the characters between the swapped parts (`a`), then another substring from the beginning of the string (`erl`), and, finally, the rest of the string (`aku`).

### Video review

Review of the first task: https://youtu.be/AhhwcL7cCEc

## Task 2. Gray code sequence

The second task is to generate an _N_-bit sequence of Gray code. The task definition has an example of how to do it using some list manipulations, and that was the most popular approach. Although, there is another algorithm that manipulates bits directly and you don’t need to work with lists or create tricky loops to organise them. This week, we have solutions with both of these approaches.

### Loop, or recursion, or bitwise operation

Here is the minimum solution brought by Andrew Shitov that uses bit operations:

```perl6
    put map {$_ +^ ($_ div 2)}, ^2**@*ARGS[0];
```

This is the whole program and it prints the sequence for the given input number of bits.

A number of solutions use recursion. As you may notice, the first half of the _N_-bit sequence fully repeats the _(N-1)_-bit sequence. For example, here is the solution demonstrated by Noud Aldenhoven:

```perl6
    sub gray-code-sequence($n) {
        if ($n == 1) {
            return [0, 1];
        }
        my $seq1 = gray-code-sequence($n - 1);
        my $seq2 = [2**($n - 1) + $_ for $seq1.reverse];
        return [|($seq1), |($seq2)];
    }
```

### Flattening

A number of solutions use the so-called flattening, in the form of either calling the method [flat](https://docs.raku.org/routine/flat) or by using the [| prefix](https://docs.raku.org/routine/|) that creates a [slip](https://docs.raku.org/type/Slip).

Flattening is often used when the two parts of the current sequence are joined, for example:

```perl6
    my @gray-seq = |@s1, |@s2;
```

In such a case, you can simply call `append` and join the lists using a cleaner Raku code.

Examine the following example and its output to see the difference:

```perl6
    my @a = 3, 4, 5;
    my @b = 10, 20, 30;

    my @c = @a, @b;
    dd @c; # Array @c = [[3, 4, 5], [10, 20, 30]]

    my @d = @a, @b;
    dd @d; # Array @d = [3, 4, 5, 10, 20, 30]

    my @e = @a.append(@b);
    dd @e; # Array @e = [3, 4, 5, 10, 20, 30]
```

### Binary ↔ decimal

The majority of solutions use strings with characters `0` and `1` to keep and manipulate the ‘bits’.

There is more than one way to convert a string with a binary representation of a number to its decimal value. Let me list a few of them that were used in the solutions.

In the first group, the [parse-based routine](https://docs.raku.org/routine/parse-base) is used:

```perl6
    @sequence.map( *.parse-base( 2 ) )

    my @result = map { .parse-base(2) },  @gray-seq;
```

The second group uses the [adverbal form](https://docs.raku.org/syntax/Number%20literals) `:2<1010>`:

```perl6
    @A.map({ ":2<$_>".Int })

    return ":2<$binary>".Int;
```

And in the third group, we create a `0b`-prefixed string and coerce it to an integer by calling a method on the string:

```perl6
    @S1 = @S1.map({ "0b$_".Int });

    my UInt @gray-codes =
        gray-codes-binary($N).map: { "0b$_".UInt };
```

### Video review

Review of the second task: https://youtu.be/D23vQj4EFoE

***
## BLOGS
***

<br>

### [Andrew Shitov](https://andrewshitov.com/2020/07/20/gray-code-in-raku/), [Arne Sommer](https://raku-musings.com/gray-swapping.html), [Colin Crain](https://colincrain.wordpress.com/2020/07/27/exhibiting-gray-areas-in-character/), [Jaldhar H. Vyas](https://www.braincells.com/perl/2020/07/perl_weekly_challenge_week_70.html), [Javier Luque](https://perlchallenges.wordpress.com/2020/07/20/perl-weekly-challenge-070/), [Laurent Rosenfeld](http://blogs.perl.org/users/laurent_r/2020/07/perl-weekly-challenge-70-character-swapping-and-gray-code-sequence.html), [Luca Ferrari](https://fluca1978.github.io/2020/07/23/PerlWeeklyChallenge70.html), [Mohammad S Anwar](https://perlweeklychallenge.org/blog/weekly-challenge-070/), [Roger Bell_West](https://blog.firedrake.org/archive/2020/07/Perl_Weekly_Challenge_70__character_swaps_and_Gray_code.html) and [Shahed Nooshmand](https://rafraichisso.ir/2020/07/24/pwc-70).

<br>

If you want to participate to **The Weekly Challenge**, please contact us at <perlweeklychallenge@yahoo.com>.
