---
title: "Advent Calendar - December 15, 2022"
date: 2022-12-15T00:00:00+00:00
description: "Advent Calendar - December 15, 2022."
type: post
image: images/blog/2022-12-15.jpg
author: E. Choroba
tags: ["Perl"]
---

## [**Advent Calendar 2022**](/blog/advent-calendar-2022)
### | &nbsp; [**Day 14**](/blog/advent-calendar-2022-12-14) &nbsp; | &nbsp; **Day 15** &nbsp; |
***

The gift is presented by `E. Choroba`. Today he is talking about his solution to [**"The Weekly Challenge - 189"**](/blog/perl-weekly-challenge-189). This is re-produced for **Advent Calendar 2022** from the original [**post**](https://blogs.perl.org/users/e_choroba/2022/11/array-degree.html) by him.

***

<br>

## Array Degree

<br>

The [**Task 2**](https://theweeklychallenge.org/blog/perl-weekly-challenge-189/#TASK2) was rather interesting in the week `189`.

You are given an array of 2 or more non-negative integers.

Write a script to find out the smallest slice, i.e. contiguous subarray of the original array, having the degree of the given array.

<br>

> The degree of an array is the maximum frequency of an element in the array.

<br>

## The Naive Solution

<br>

The idea is simple. Write a function that computes the degree of an array, then try all possible combinations of the start and end positions to find the shortest slice that still has the same degree. It’s a bit ineffective, but we can start optimising later.

Computing the degree is simple:

<br>

```perl
sub degree ($arr) {
    my %freq;
    my $max = 0;
    for my $e (@$arr) {
        $max = $freq{$e} if ++$freq{$e} > $max;
    }
    return $max
}
```

<br>

Using this function to find the shortest slice is straight-forward:

<br>

```perl
sub array_degree (@array) {
    my $degree = degree(\@array);
    my @min = (0, $#array);
    for my $from (0 .. $#array - 1) {
        for my $to ($from .. $#array) {
            if (degree([@array[$from .. $to]]) == $degree) {
                @min = ($from, $to)
                    if $to - $from < $min[1] - $min[0];
            }
        }
    }
    return [@array[ $min[0] .. $min[1] ]]
}
```

<br>

We can now write some tests. They’ll help us once we start optimising the code to make sure we don’t break anything.

<br>

```perl
use Test2::V0;
plan 5 + 7;

is array_degree(1, 3, 3, 2), [3, 3], 'Example 1';
is array_degree(1, 2, 1, 3), [1, 2, 1], 'Example 2';
is array_degree(1, 3, 2, 1, 2), [2, 1, 2], 'Example 3';
is array_degree(1, 1, 2, 3, 2), [1, 1], 'Example 4';
is array_degree(2, 1, 2, 1, 1), [1, 2, 1, 1], 'Example 5';

is array_degree(), [], 'Degree 0';
is array_degree(1, 2, 3), [1], 'Degree 1';
is array_degree(1, 1, 2, 2, 3, 3, 3, 2, 1), [3, 3, 3], '3/3';
is array_degree(1, 1, 2, 2, 3, 3, 2, 3, 1), [3, 3, 2, 3], '3/4';
is array_degree(1, 1, 2, 3, 2, 3, 2, 3, 1), [2, 3, 2, 3, 2], '3/5';
is array_degree(1, 2, 3, 2, 1, 3, 2, 3, 1), [2, 3, 2, 1, 3, 2], '3/6';
is array_degree(1, 2, 3, 1, 2, 3, 1, 2, 3), [1, 2, 3, 1, 2, 3, 1], '3/7';
```

<br>

## Optimisation

<br>

Isn’t it good enough?

Nested loops never perform well on larger inputs. Let’s generate an array of `300 elements`:

<br>

```perl
srand 1;  # To always have the same input.
my @long = map int rand 28, 1 .. 300;
print "@{ array_degree(@long) }";
```

<br>

It takes a bit more than `1 second` on my machine. So, how can we improve it?

As usually, we can trade time for space. As we calculate the degree of the whole array, we can cache the position of the first and last occurrence of each element (we already need to cache the frequency of each element to find the maximal one).

The `%from_to` hash maps each element to the position of its first and last occurrence, i.e. to the shortest slice containing all of its occurrences. The `@max` array keeps all the elements with the maximal frequency, plus the frequency itself as the last element.

<br>

```perl
sub array_degree (@array) {
    return [] unless @array;

    my %freq;
    my %from_to;
    my @max = (undef, 0);
    for my $pos (0 .. $#array) {
        my $e = $array[$pos];
        ++$freq{$e};
        if (exists $from_to{$e}) {
            $from_to{$e}[1] = $pos;
        } else {
            $from_to{$e} = [$pos, $pos];
        }
        if ($freq{$e} >= $max[-1]) {
            @max = ($freq{$e}) if $freq{$e} > $max[-1];
            unshift @max, $e;
        }
    }
```

<br>

Now, we have all the slices in `%from_to`. We can get each slice’s length by subtracting the start position from the end position. To find the shortest one, we’ll need [**List::Util**](https://p3rl.org/List::Util)’s min:

<br>

```perl
    my %by_length = map +($_->[1] - $_->[0] => $_),
                    @from_to{@max[ 0 .. $#max - 1 ]};
    my $shortest = $by_length{ min(keys %by_length) };
    return [@array[ $shortest->[0] .. $shortest->[1] ]]
}
```

<br>

If there are several slices with the maximal degree of the same length, our code returns the leftmost one (that’s why we used unshift when adding new elements to `@max`).

Run all the tests with the new function to verify we still get the same results. Moreover, let’s benchmark it:

<br>

```perl
use Benchmark qw{ cmpthese };
is array_degree(@long), array_degree_naive(@long), 'Same';
cmpthese(-5, {
    naive     => sub { array_degree_naive(@long) },
    optimised => sub { array_degree(@long) },
});
```

<br>

The additional test is important to make sure the code gives the same result even for the input we use in the benchmark.

The result? It was definitely worth it!

<br>

                s/iter     naive optimised
    naive         1.21        --     -100%
    optimised 1.60e-04   751346%        --

<br>

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

| &nbsp; [**Advent Calendar 2022**](/blog/advent-calendar-2022) &nbsp; |
