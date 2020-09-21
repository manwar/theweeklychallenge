---
title: "BLOG: The Weekly Challenge #078"
date: 2020-09-20T00:00:00+00:00
description: "Blog for the weekly challenge #078."
type: post
image: images/blog/weekly-challenge-078.jpg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

## TABLE OF CONTENTS
***

### 1. [HEADLINES](#HEADLINES)
### 2. [YouTube WEEKLY](#YOUTUBEWEEKLY)
### 3. [TASK #1: Leader Element](#TASK1)
### 4. [TASK #2: Left Rotation](#TASK2)

<br>

## HEADLINES {#HEADLINES}
***

First thing first, I managed to do video session for both tasks this week. It is so satisfying when everything goes as per the plan. For the last couple of weeks, I could only do one video session. One day, I would like to video with PIP. At the moment, I am little uncomfortable showing my face in the video. There is another reason why I can't do it now. I don't have my personal office in the house. I have been working from home since mid-March, nearly 6 months, sitting on sofa, 9-5. I must confess it is not easy. I miss my office chair and noise-free environment. I have 3 years twin girls. Luckily the school started last week, I get no-noise moment for few hours during the day. Also this week, I found time to do coding in **Swift**.

Did you notice any changes in your mood during the lockdown?

I did.

I become very moody. I avoid human contact as much as possible even on the phone. But I love interacting on social platform. I joined Twitter `@cpan_author` at the start of **CPAN Pull Request Challenge** in **January 2015** but only started using actively with the launch of **The Weekly Challenge**. Luckily I found myself surrounded by great intellects. I always get to learn something new everyday.

Enough of story telling, lets get back to the serious talk.

<br>

## YouTube WEEKLY {#YOUTUBEWEEKLY}
***

I present video session of mine for the tasks of the week. Please do comment on the video if you have any suggestions. And if you like the video then please do consider subscribing my **[YouTube CHANNEL](https://www.youtube.com/channel/UCT91RkThBWByo1NL_M8R8Ig)**.

#### Task #1: Leader Element

<iframe width="560" height="315" src="https://www.youtube.com/embed/EmZ8rzgLXp0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>
<br>

#### Task #2: Left Rotation

<iframe width="560" height="315" src="https://www.youtube.com/embed/zXvirywoA58" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>
<br>

Last but not the least, I would to love hear your **views/opinions** with regard to anything I do.

Please get in touch with me by email: <mohammad.anwar@yahoo.com>.

Let me share my solutions to the **[The Weekly Challenge - 078](/perl-weekly-challenge-078)**.

***
## TASK #1 › Leader Element {#TASK1}
#### Submitted by **[Mohammad S Anwar](http://www.manwar.org)**
***

You are given an array `@A` containing distinct integers.

Write a script to find all leader elements in the array `@A`.

***

<br>

The **Leader Element** task is best suited for beginners. I never done `array slicing` in my current job. So when I decided to do for this task, I had to lookup documentation. I have used it few times in the recent week, so it was fresh. Once that is sorted, rest is just walk in the park as you see in the code below.

<br>

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

For this task, I created `sub get_list()` to help with user input validation and converting the input string into array ref.

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

For **Raku**, I didn't create any helper method. Everything needed for the task brought together in the following `sub leader-element()`.

My favourite line is below, which coverts the given string into an array of integers.

```perl6
my @array = $list.split(',').map: { .Int };
```

and one small magic is array slicing and max combined.

```perl6
@array[$index+1 .. @array.elems-1].max;
```

<br>

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

Time for one-liner solution to the **Leader Element** task.

<br>

```perl
use strict;
use warnings;
use List::Util qw(max);

printf("%s\n", join(", ", leader_elements(get_list($ARGV[0]))));
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

<br>

***
## TASK #2 › Left Rotation {#TASK2}
#### Submitted by **[Mohammad S Anwar](http://www.manwar.org)**
***

You are given array `@A` containing positive numbers and `@B` containing one or more indices from the array `@A`.

Write a script to left rotate `@A` so that the number at the first index of `@B` becomes the first element in the array. Similary, left rotate `@A` again so that the number at the second index of `@B` becomes the first element in the array.

***

<br>

I missed the `rotate` feature of **Raku** in **Perl**. However, we can still play with array directly and get the job done. I could have used `array slicing` here but didn't want repeat myself.

<br>

```perl
sub left_rotation {
    my ($source, $index) = @_;

    my $left_rotation = [];
    foreach my $i (@$index) {
        my $array = [];
        foreach my $j ($i .. $#$source) {
            push @$array, $source->[$j];
        }
        if ($i > 0) {
            foreach my $k (0 .. $i-1) {
                push @$array, $source->[$k];
            }
        }
        push @$left_rotation, $array;
    }

    return $left_rotation;
}
```

The output of the task was not easy to print as is. Therefore I created the `sub p()` to take care of the printing the output job.

```perl
sub p {
    my ($data) = @_;

    foreach (@$data) {
        printf("%s\n", join ", ", @$_);
    }
}
```

Another helper `sub get_list()` to process the input string and return the array ref.

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

Once again, **Raku**, self contained single `sub left-rotation()` does the job.

<br>

```perl6
sub left-rotation(Str $source, Str $index) {

    die "ERROR: Invalid source [$source].\n"
        unless $source ~~ /^[\-?\d\,?\s?]+$/;
    die "ERROR: Invalid index  [$index].\n"
        unless $index  ~~ /^[\-?\d\,?\s?]+$/;

    my @source = $source.split(',').map: { .Int };
    my @index  = $index.split(',').map:  { .Int };

    my @left-rotation = Empty;
    for @index -> $i {
        my @array = Empty;
        for $i..@source.elems-1 -> $j {
            @array.push: @source.[$j];
        }
        if $i > 0 {
            for 0..$i-1 -> $k {
                @array.push: @source.[$k];
            }
        }

        @left-rotation.push: @array;
    }

    return |@left-rotation;
}
```

<br>

One-liner **Perl** solution to the **"Left Rotation"** task.

<br>

```perl
use strict;
use warnings;

my $A = $ARGV[0] || "10, 20, 30, 40, 50";
my $B = $ARGV[1] || "3, 4";

p(left_rotation(get_list($A), get_list($B)));
```

<br>

**Raku** solution with the combined power of `MAIN()`.

<br>

```perl6
use v6.d;

sub MAIN(Str :$A = "10, 20, 30, 40, 50", Str :$B = "3, 4") {
    left-rotation($A, $B).join("\n").say;
}
```

<br>

Standard unit test again using the given example in the task.

<br>

```perl
use strict;
use warnings;
use Test::More;
use Test::Deep;

is_deeply(left_rotation([10, 20, 30, 40, 50], [3, 4]),
          [[40, 50, 10, 20, 30], [50, 10, 20, 30, 40]],
          "testing example 1");

is_deeply(left_rotation([7, 4, 2, 6, 3], [1, 3, 4]),
          [[4, 2, 6, 3, 7], [6, 3, 7, 4, 2], [3, 7, 4, 2, 6]],
          "testing example 2");

done_testing;
```

<br>

**Raku** did the same.

<br>

```perl6
use Test;

is-deeply [left-rotation("10, 20, 30, 40, 50", "3, 4")],
          [[40, 50, 10, 20, 30], [50, 10, 20, 30, 40]],
          "testing example 1";

is-deeply [left-rotation("7, 4, 2, 6, 3", "1, 3, 4")],
          [[4, 2, 6, 3, 7], [6, 3, 7, 4, 2], [3, 7, 4, 2, 6]],
          "testing example 2";

done-testing;
```

<br>

That's it for this week. Speak to you soon.
