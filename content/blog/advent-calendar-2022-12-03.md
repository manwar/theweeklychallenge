---
title: "Advent Calendar - December 3, 2022"
date: 2022-12-03T00:00:00+00:00
description: "Advent Calendar - December 3, 2022."
type: post
image: images/blog/2022-12-03.jpg
author: Abigail
tags: ["Perl"]
---

## [**Advent Calendar 2022**](/blog/advent-calendar-2022)
### | &nbsp; [**Day 2**](/blog/advent-calendar-2022-12-02) &nbsp; | &nbsp; **Day 3** &nbsp; |
***

The gift is presented by `Colin Crain`. Today he is talking about his solution to [**"The Weekly Challenge - 191"**](/blog/perl-weekly-challenge-191). This is re-produced for **Advent Calendar 2022** from the original [**post**](https://colincrain.com/2022/11/21/counting-cute/) by him.

***

<br>

## Task #2: Cute List

You are given an integer, `0 < $n <= 15`.

Write a script to find the number of orderings of numbers that form a cute list.

With an input `@list = (1, 2, 3, .. $n)` for positive integer `$n`, an ordering of `@list` is cute if for every entry, indexed with a base of 1, either

    1) $list[$i] is evenly divisible by $i,
    or
    2) $i is evenly divisible by $list[$i]

## Example

    Input: $n = 2
    Ouput: 2

    Since $n = 2, the list can be made up of two integers only i.e. 1 and 2.
    Therefore we can have two list i.e. (1,2) and (2,1).

    @list = (1,2) is cute since $list[1] = 1 is divisible by 1 and $list[2] = 2 is divisible by 2.

<br>

## ANALYSIS

<br>

Ok, this is a little confusing, I must say. Let’s start by rephrasing the description to help us figure out what we need to do here.

First, our data. We are fed a single value n. From this value we can then derive a list, which is further processed using this `“cute”` criteria.

Our computed list in play is composed of `n elements`, sectioning the incremental sequence starting with the `value 1` and incrementing by `1 until` we reach `n`. Hence, given the `value n` as input we will construct the list `(1, 2, 3, 4, … n )` to work with.

A “cute” list is defined as a specific rearrangement of this list such that the elements each conform to one of two rules. We will assume this isn’t an exclusive or — that validation by both rules would also be acceptable.

The rules are, for each element at `index i`, with the indexes starting at `1`, either:

<br>

    1. the list value at i is divisible by the index i, or
    2. the index i is divisible by the list value at i

<br>

These two relationships share a similar `problem-space` but appear at first to be not particularly related in the values they produce. Some sort of list where each member satisfies at least one condition could well be called `“cute”`, but the summed conditions are not obviously meaningful, albeit `nicely symmetrical`. It works out, as we will see, that each condition takes care of half the range of permissible values at each index; one for numbers below the index, the other for numbers above it. But we’re getting ahead of ourselves. `We aren’t done yet`.

What we’re ultimately doing is not making cute lists, but rather counting cute lists. So we need to not only find a solution, but find a method for finding every solution so we can count them. Perhaps a larger pattern will emerge, drawn from linkages between the problem spaces of the two conditions.

<br>

## METHOD 1

<br>

For smaller numbers of n, we can simply permute the lists, and check each value for qualfying in either one case or the other. We can simplify things by setting the array base index to 1 and using keys to iterate the indices. To do this will need to import the `Array::Base` module, as $[ is depricated and the core arybase module has been phased out.

To do the permutation we’ll import our old friend `Algorithm::Combinatorics`.

Printing the cute lists found, a couple of observations come right off the bat. First is that the unchanged list is always cute, as when the indices and their values align the index will always be divisible by the value there, satisfying condition number two.

Secondly, if we swap the head and tail index values then the first index 1 will always divide any number evenly, and hence satisfy condition number one. The last index will now contain the value 1, and hence will still satisfy condition number two as it will divide any index. The rest of the list, unchanged, will remain cute. So all base sequences with 2 or more elements to swap will start with two cute varieties. The remaining positional rearrangements are less obvious.

Unfortunately after about `n = 12`, things start to get messy with the factorial growth of the permutation count, and the output comes arrives increasingly, unusably slowly. But starting this way does give us something to work with to look for a larger pattern.

Of note there are a few things we can do to speed up our first attempt: one, that clever modern use of keys uses a function call to generate a list we already know the values for, so it’s terribly wasteful. Substituting the known sequence itself cuts the computational time about in half. Secondly, it seems to be fractionally faster to check the second condition first and short-circuit out earlier; this provides a tiny further bump in efficiency.

<br>

## METHOD 2

<br>

Looking at the lists of lists produced does give us some insight as to the qualities of each postion in a cute ordering, and some of the allowable values at each position are quite limited. In the first position, for instance, there are only two: `1 and n`. So it seems we don’t need to ever even compute any arrangement that does not start with one or the other of these values. On the other hand, any number is divisible by 1. So do we really know these are the only values that can be there?

Looking at the the other positions leads us to a generalization:

The set of permissible values at each position is the `union` of all multiples of the index less than or equal to n (`by rule 1`) and all divisors of the index (`by rule 2`). Not every possible premitted value will be found in a cute list, but this still drastically limits the choices.

For `n = 12`, these look like:

<br>

    ----+------------------------------------+------------------
    i   |   permissible values               |  number of values
    ----+------------------------------------+------------------
    1   |   1 .. 12                          |   12
    2   |   1   2   4   6   8   10  12       |   7
    3   |   1   3   6   9   12               |   5
    4   |   1   2   4   8   12               |   5
    5   |   1   5   10                       |   3
    6   |   1   2   3   6   12               |   5
    7   |   1   7                            |   2
    8   |   1   2   4   8                    |   4
    9   |   1   3   9                        |   4
    10  |   1   2   5   10                   |   4
    11  |   1   11                           |   2
    12  |   1   2   3   4   6   12           |   6
    ----+------------------------------------+------------------

<br>

Multiplying this out reveals there are only `48,384,000` combinations of permissible values, versus all `12 factorial`, or `479,001,600` permutations of the sequence. That’s a significant gain. If we compute every combination and then check for `n unique` members this should be considerably less computationally expensive.

However we can go further and continuously cull the search space by only adding new values that are not already used. This quickly weeds out, as it turns out, most combinations. The number of cute arrays in play is kept in check, and we can count the cuteness to `n = 15` and beyond without any trouble.

And here it is in the `OEIS`:

<br>

    A320843       Number of permutations sigma of {1,2,...,n} such that
                  sigma(i) divides i or i divides sigma(i) for 1 <= i <= n.

    1, 1, 2, 3, 8, 10, 36, 41, 132, 250, 700, 750, 4010, 4237, 10680, 24679,
    87328, 90478, 435812, 449586, 1939684, 3853278, 8650900, 8840110,
    60035322, 80605209, 177211024, 368759752, 1380348224, 1401414640,
    8892787136, 9014369784, 33923638848, 59455553072, 126536289568,
    207587882368

<br>

Note this includes the value for `n = 0`, which our challenge does not. Conceptually that is a rather messy affair anyways.

<br>

## PERL5 SOLUTION

<br>

```perl
use Algorithm::Combinatorics qw( permutations );

my $limit = shift @ARGV // 15;

for my $n ( 1..$limit ) {
    say "n = $n";
    say "\t", scalar find_cute_sigma($n), " cute lists";

    ## uncomment to see the actual cute lists. I certainly wanted to.
#     say "   $_->@*" for find_cute_sigma($n);

    say '';
}

## version 1: brute force. Works well up to about n = 12
##
sub find_cute ( $n ) {
    use Array::Base +1;
    my @out;
    my $iter = permutations( [ 1 .. $n ] );
    my $p;
  ITER: while ($p = $iter->next) {
        for my $i ( 1 .. $n ) {
            next ITER if ( $i % $p->[$i] and $p->[$i] % $i );
        }
        push @out, $p;
    }
    return @out;
}

sub get_permissible ( $pos, $max ) {
    [ grep { not $pos % $_ or not $_ % $pos } ( 1 .. $max ) ]
}

## version 2: compute all permissable digits at each position and grow
## lists from there.
##
sub find_cute_sigma ( $n ) {
    my %div;

    for my $pos ( 1 .. $n ) {
        $div{$pos} = get_permissible( $pos, $n );
    }

    my @out = [];

    ## for each position create a new array for each previous for each permissible
    ## value, unless that value is already present in the combination
    for my $pos ( 1 .. $n ) {
        my @new;
        for my $val ( $div{$pos}->@* ) {
            for my $combi (@out) {
                unless ( grep { $_ == $val }  $combi->@* ) {
                    push @new, [ $combi->@*, $val ];
                }
            }
        }
        @out = @new;
    }

    return @out;
}
```

<br>

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

| &nbsp; [**Advent Calendar 2022**](/blog/advent-calendar-2022) &nbsp; |
