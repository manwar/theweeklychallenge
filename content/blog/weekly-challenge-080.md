---
title: "BLOG: The Weekly Challenge #080"
date: 2020-10-04T00:00:00+00:00
description: "Blog for the weekly challenge #080."
type: post
image: images/blog/weekly-challenge-080.jpg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

## TABLE OF CONTENTS
***

### 1. [HEADLINES](#HEADLINES)
### 2. [YouTube WEEKLY](#YOUTUBEWEEKLY)
### 3. [TASK #1: Smallest Positive Number](#TASK1)
### 4. [TASK #2: Count Candies](#TASK2)

<br>

## HEADLINES {#HEADLINES}

<br>

This week, both tasks were comparatively easier than last week. I followed the rule, doing **Perl** first then translating the same into **Raku**. But while working on **Raku**, I got fresh ideas. I then went back to my **Perl** and re-worked the logic. One day, I would like to do **Raku** first then translate it into **Perl**.

<br>

## YouTube WEEKLY {#YOUTUBEWEEKLY}

Sorry, I couldn't make video for this week tasks.

However, you can take a look at my past week videos by visiting my **[YouTube Channel](https://www.youtube.com/channel/UCT91RkThBWByo1NL_M8R8Ig)**.

Last but not the least, I would to love hear your **views/opinions** with regard to anything I do.

Please get in touch with me by email: <mohammad.anwar@yahoo.com>.

Let me share my solutions to the **[The Weekly Challenge - 0](/perl-weekly-challenge-0)**.

***
## TASK #1 › Smallest Positive Number {#TASK1}
#### Submitted by **[Mohammad S Anwar](http://www.manwar.org)**
***

You are given unsorted list of integers `@N`.

Write a script to find out the smallest positive number missing.

***

<br>

The following `sub smallest_positive_number()` does the main job by stripping negative numbers and sorting in the end. If nothing left after this operation then return 1 as the smallest positive number. For all others, loop through 1 and highest positive number in the array.

<br>

```perl
sub smallest_positive_number {
    my ($arrayref) = @_;

    my @positive_numbers = sort(grep $_ > 0, @$arrayref);
    return 1 unless (@positive_numbers);

    my $i = 0;
    for my $n (1 .. $positive_numbers[-1]) {
        return $n if ($n < $positive_numbers[$i++]);
    }

    return ++$positive_numbers[-1];
}
```

The helper `sub get_list()` takes the string and converts into arrayref.

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

With the power of **Raku**, just one `sub smallest-positive-number()` is enough to solve the task. If you notice the similarity between **Raku** and **Perl** is because I copied the logic from **Raku** version.

<br>

```perl6
sub smallest-positive-number(@n where .all ~~ Int --> Int) {

    my @positive-numbers = @n.sort.grep: { $_ > 0 };
    return 1 unless @positive-numbers.elems;

    my Int $i = 0;
    (1 .. @positive-numbers.tail).map: -> $n {
        return $n if $n < @positive-numbers[$i++]
    };

    return ++@positive-numbers.tail;
}
```

<br>

One-liner **Perl** solution with the helper subroutine.

<br>

```perl
use strict;
use warnings;

my $N = $ARGV[0] || "2, 3, 7, 6, 8, -1, -10, 15";
printf("%s => %d\n", $N, smallest_positive_number(get_list($N)));
```

<br>

Even cleaner version in **Raku** as below.

<br>

```perl6
use v6.d;

sub MAIN(:@N where .all ~~ Int = (2, 3, 7, 6, 8, -1, -10, 15)) {
    say smallest-positive-number(@N);
}
```

<br>

Plenty of unit test to make it complete solution.

<br>

```perl
use strict;
use warnings;
use Test::More;

# examples from the task
is (smallest_positive_number([5, 2, -2, 0]), 1, "testing (5, 2, -2, 0)");
is (smallest_positive_number([1, 8, -1]),    2, "testing (1, 8, -1)");
is (smallest_positive_number([2, 0, -1]),    1, "testing (2, 0, -1)");

# some other test cases
is (smallest_positive_number([1, 2, 0]),     3, "testing (1, 2, 0)");
is (smallest_positive_number([-8, -7, -6]),  1, "testing (-8, -7, -6)");
is (smallest_positive_number([3, 4, -1, 1]), 2, "testing (3, 4, -1, 1)");
is (smallest_positive_number([2, 3, 7, 6, 8, -1, -10, 15]), 1, "testing (2, 3, 7, 6, 8, -1, -10, 15)");

done_testing;
```

<br>

Same unit test in **Raku**.

<br>

```perl6
use Test;

# examples from the task
is smallest-positive-number((5, 2, -2, 0)),  1,
   "testing (5, 2, -2, 0)";
is smallest-positive-number((1, 8, -1)),     2,
   "testing (1, 8, -1)";
is smallest-positive-number((2, 0, -1)),     1,
   "testing (2, 0, -1)";

# some other test cases
is smallest-positive-number((1, 2, 0)),      3,
   "testing (1, 2, 0)";
is smallest-positive-number((-8, -7, -6)),   1,
   "testing (-8, -7, -6)";
is smallest-positive-number((3, 4, -1, 1)),  2,
   "testing (3, 4, -1, 1)";
is smallest-positive-number((2, 3, 7, 6, 8, -1, -10, 15)), 1,
   "testing (2, 3, 7, 6, 8, -1, -10, 15)";

done-testing;
```

<br>

***
## TASK #2 › Count Candies {#TASK2}
#### Submitted by **[Mohammad S Anwar](http://www.manwar.org)**
***

You are given rankings of @N candidates.

Write a script to find out the total candies needed for all candidates. You are asked to follow the rules below:

#### a) You must given at least one candy to each candidate.
#### b) Candidate with higher ranking get more candies than their mmediate neighbors on either side.

***

<br>

I enjoyed working on this task. For the first time, I had more than one way of dealing with the task. I picked the solution easy to read.

<br>

```perl
sub count_candies {
    my ($rankings) = @_;

    my $l2r = [];
    my $r2l = [];

    push @$l2r, 1 for @$rankings;
    push @$r2l, 1 for @$rankings;

    my $i = 1;
    while ($i <= $#$rankings) {
        $l2r->[$i] = $l2r->[$i - 1] + 1
               if ($rankings->[$i] > $rankings->[$i - 1]);
        $i++
    }

    my $j = $#$rankings - 1;
    while ($j >= 0) {
        $r2l->[$j] = $r2l->[$j + 1] + 1
            if ($rankings->[$j] > $rankings->[$j + 1]);
        $j--;
    }

    my $count = 0;
    $count += max($l2r->[$_], $r2l->[$_]) for (0 .. $#$rankings);

    return $count;
}
```

Helper `sub get_rankings()` to convert the command line input into arrayref.

```perl
sub get_rankings {
    my ($c) = @_;

    die "ERROR: Missing rankings.\n"      unless defined $c;
    die "ERROR: Invalid rankings [$c].\n" unless ($c =~ /^[\d\,?\s?]+$/);

    $c =~ s/\s//g;
    return [ split /\,/, $c ];
}
```

<br>

This is plain translation of **Perl** version.

<br>

```perl6
sub count-candies(@rankings
                  where @rankings.elems > 1 &&
                  all(@rankings) ~~ PositiveInt --> Int) {

    my @l2r = Empty;
    my @r2l = Empty;

    @l2r.push: 1 for @rankings;
    @r2l.push: 1 for @rankings;

    my Int $i = 1;
    while $i < @rankings.elems {
        @l2r[$i] = @l2r[$i - 1] + 1
               if @rankings[$i] > @rankings[$i - 1];
        $i++;
    }

    my Int $j = @rankings.elems - 2;
    while $j >= 0 {
        @r2l[$j] = @r2l[$j + 1] + 1
            if @rankings[$j] > @rankings[$j + 1];
        $j--;
    }

    my Int $count = 0;
    $count += (@l2r[$_], @r2l[$_]).max for 0 .. @rankings.elems - 1;

    return $count;
}
```

<br>

Time to get the task done in **Perl**.

<br>

```perl
use strict;
use warnings;
use List::Util qw(max);

my $C = $ARGV[0] || "1, 5, 2, 1";
printf("Total candies: %d\n", count_candies(get_rankings($C)));
```

<br>

Followed by **Raku** version.

<br>

```perl6
use v6.d;

subset PositiveInt of Int where * > 0;

sub MAIN(*@N where @N.elems > 1 && all(@N) ~~ PositiveInt) {
    say "Total candies: " ~ count-candies(@N);
}
```

<br>

In the end some basic unit test in **Perl**.

<br>

```perl
use strict;
use warnings;
use Test::More;
use List::Util qw(max);

is( count_candies([1, 2]),       3, "testing: [1, 2]");
is( count_candies([1, 2, 2]),    4, "testing: [1, 2, 2]");
is( count_candies([1, 5, 2, 1]), 7, "testing: [1, 5, 2, 1]");

done_testing;
```

<br>

along with unit test in **Raku**.

<br>

```perl6
use Test;

subset PositiveInt of Int where * > 0;

is count-candies((1, 2)),       3, "testing: (1, 2)";
is count-candies((1, 2, 2)),    4, "testing: (1, 2, 2)";
is count-candies((1, 5, 2, 1)), 7, "testing: (1, 5, 2, 1)";

done-testing;
```

<br>

That's it for this week. Speak to you soon.
