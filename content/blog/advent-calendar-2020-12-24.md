---
title: "Advent Calendar - December 24, 2020"
date: 2020-12-24T00:00:00+00:00
description: "Advent Calendar - December 24, 2020."
type: post
image: images/blog/2020-12-24.jpg
author: James Smith
tags: ["Perl","Raku"]
---

[**Advent Calendar 2020**](/blog/advent-calendar-2020)
***

## TABLE OF CONTENTS
***

### 1. [Headlines](#HEADLINES)
### 2. [Leader Elements](#LEADERELEMENTS)
### 3. [YouTube Video](#YOUTUBEVIDEO)
### 4. [Perl Solution](#PERLSOLUTION)
### 5. [Raku Solution](#RAKUSOLUTION)

<br>

## Headlines {#HEADLINES}
***

Finally we reached the end of the [**Advent Calendar 2020**](/blog/advent-calendar-2020). I wasn't prepared for **Advent Calendar** this year initially as I knew I wouldn't be able to do it. However, on the day one, I pushed myself and decided to give it a try. Now, today I am doing the last day blog for the same. Although, I didn't do it regularly, still I am happy with my effort.

I would like to thank the following **Team PWC** members for the contribution to the **Advent Calendar 2020**.

[Jaldhar H. Vyas](blog/advent-calendar-2020-12-01), [Ryan Thompson](blog/advent-calendar-2020-12-02), [E. Choroba](blog/advent-calendar-2020-12-03), [Andrew Shitov](blog/advent-calendar-2020-12-04), [Dave Jacoby](blog/advent-calendar-2020-12-05), [Luca Ferarri](blog/advent-calendar-2020-12-06), [Javier Luque](blog/advent-calendar-2020-12-07), [Roger Bell_West](blog/advent-calendar-2020-12-08), [Arne Sommer](blog/advent-calendar-2020-12-09), [Walt Mankowski](blog/advent-calendar-2020-12-10), [Adam Russell](blog/advent-calendar-2020-12-11), [Cheok-Yin Fung](blog/advent-calendar-2020-12-12), [Bartosz Jarzyna](blog/advent-calendar-2020-12-13), [Myoungjin Jeon](blog/advent-calendar-2020-12-14), [Laurent Rosenfeld](blog/advent-calendar-2020-12-15), [Yet Ebreo](blog/advent-calendar-2020-12-16), [Scimon Proctor](blog/advent-calendar-2020-12-17), [Kevin Colyer](blog/advent-calendar-2020-12-18), [Duncan C. White](blog/advent-calendar-2020-12-19), [Yozen Hernandez](blog/advent-calendar-2020-12-20), [Saif Ahmed](blog/advent-calendar-2020-12-21), [Noud Aldenhoven](blog/advent-calendar-2020-12-22), [James Smith](blog/advent-calendar-2020-12-23).

Today I am talking about my solutions to the task `Leader Elements` of **["The Weekly Challenge - 078"](/blog/perl-weekly-challenge-078)**.

<br>

## Leader Elements {#LEADERELEMENTS}
#### Submitted by **[Mohammad S Anwar](http://www.manwar.org)**
***

You are given an array `@A` containing distinct integers.

Write a script to find all leader elements in the array `@A`.

> An element is leader if it is greater than all the elements to its right side.

#### Example 1:

    Input: @A = (9, 10, 7, 5, 6, 1)
    Output: (10, 7, 6, 1)

#### Example 2:

    Input: @A = (3, 4, 5)
    Output: (5)

<br>

## YouTube Video {#YOUTUBEVIDEO}
***

Do you prefer watching action than reading text?

If yes then please take a look live action video dealing with the **Leader Elements** task.

<br>

<iframe width="560" height="315" src="https://www.youtube.com/embed/EmZ8rzgLXp0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>
<br>

## Perl Solution {#PERLSOLUTION}
***

The **Leader Elements** task is best suited for beginners. I never done `array slicing` in my current job. So when I decided to do for this task, I had to lookup documentation. I have used it few times in the recent week, so it was fresh. Once that is sorted, rest is just walk in the park as you see in the code below.

```perl
sub leader_elements {
    my ($list) = @_;

    my @leaders = ();
    my $i       = 0;
    my @array   = @$list;
    foreach my $n (@array) {
        if ($i == $#array) {
            push @leaders, $n;
        }
        else {
            push @leaders, $n
                if ($n > max(@array[$i+1 .. $#array]));
        }
        $i++;
    }

    return @leaders;
}
```

<br>

For this task, I created `sub get_list()` to help with user input validation and converting the input string into array ref.

<br>

```perl
sub get_list {
    my ($l) = @_;

    die "ERROR: Missing list.\n"      unless defined $l;
    die "ERROR: Invalid list [$l].\n" unless ($l =~ /^[\-?\d\,?\s?]+$/);

    $l =~ s/\s//g;
    return [ split /\,/, $l ];
}
```

<br>

Time for one-liner solution to the task.

<br>

```perl
use strict;
use warnings;
use List::Util qw(max);

printf("%s\n", join(", ", leader_elements(get_list($ARGV[0]))));
```

<br>

Standard unit test using the examples in the given tasks. Sorry.

<br>

```perl
use strict;
use warnings;
use Test::More;
use Test::Deep;
use List::Util qw(max);

is_deeply([leader_elements([9, 10, 7, 5, 6, 1])],
          [10, 7, 6, 1],
          "testing example 1");

is_deeply([leader_elements([3, 4, 5])],
          [5],
          "testing example 2");

done_testing;
```

<br>

## Raku Solution {#RAKUSOLUTION}
***

For **Raku**, I didn't create any helper method. Everything needed for the task brought together in the following `sub leader-elements()`.

```perl6
sub leader-elements(Str $list) {

    die "ERROR: Invalid list [$list].\n" unless $list ~~ /^[\-?\d\,?\s?]+$/;

    my @array = $list.split(',').map: { .Int };
    my $index = 0;
    my @leader-elements = Empty;
    for @array -> $n {
        if $index == @array.elems-1 {
            @leader-elements.push: $n;
        }
        else {
            @leader-elements.push: $n
                if $n > @array[$index+1 .. @array.elems-1].max;
        }
        $index++;
    }

    return |@leader-elements;
}
```

<br>

My favourite line is below, which coverts the given string into an array of integers.

<br>

```perl6
my @array = $list.split(',').map: { .Int };
```

<br>

and one small magic is array slicing and max combined.

<br>

```perl6
@array[$index+1 .. @array.elems-1].max;
```

<br>

Same goes to **Raku** as well. Here I present my one-liner solution in **Raku**.

<br>

```perl6
use v6.d;

sub MAIN(Str :$L = "9, 10, 7, 5, 6, 1") {
    leader-elements($L).join(", ").say;
}
```

<br>

**Raku** follows the same path as **Perl**.

<br>

```perl6
use Test;

is-deeply leader-elements("9, 10, 7, 5, 6, 1"),
          (10, 7, 6, 1),
          "testing example 1";

is-deeply leader-elements("3, 4, 5"),
          (5),
          "testing example 2";

done-testing;
```

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2020**](/blog/advent-calendar-2020)
