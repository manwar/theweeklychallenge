---
title: "BLOG: The Weekly Challenge #079"
date: 2020-09-27T00:00:00+00:00
description: "Blog for the weekly challenge #079."
type: post
image: images/blog/weekly-challenge-079.jpg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

## TABLE OF CONTENTS
***

### 1. [HEADLINES](#HEADLINES)
### 2. [YouTube WEEKLY](#YOUTUBEWEEKLY)
### 3. [TASK #1: Count Set Bits](#TASK1)
### 4. [TASK #2: Trapped Rain Water](#TASK2)

<br>

## HEADLINES {#HEADLINES}

<br>

I really enjoyed this week task. I had lots of fun working with the `Trapped Rain Water` task.

This week, I was too busy with my `$work`, so couldn't do either `Swift` coding or live video session. However I promise, I will catch up next week.

<br>

## YouTube WEEKLY {#YOUTUBEWEEKLY}

Sorry, I couldn't make video for this week tasks.

However, you can take a look at my past week videos by visiting my **[YouTube Channel](https://www.youtube.com/channel/UCT91RkThBWByo1NL_M8R8Ig)**.

Last but not the least, I would to love hear your **views/opinions** with regard to anything I do.

Please get in touch with me by email: <mohammad.anwar@yahoo.com>.

Let me share my solutions to the **[The Weekly Challenge - 079](/perl-weekly-challenge-079)**.

***
## TASK #1 › Count Set Bits {#TASK1}
#### Submitted by **[Mohammad S Anwar](http://www.manwar.org)**
***

You are given a positive number `$N`.

Write a script to count the total numbrer of set bits of the binary representations of all numbers from `1` to `$N` and return `$total_count_set_bit % 1000000007`.

***

<br>

Because of the simplicity of the task, I tried to make it as short as possible. Code is self explanatory.

<br>

```perl
sub count_set_bits {
    my $c = 0;
    $c   += (sprintf "%b", $_) =~ tr/1/1/ for 1..shift;
    return $c % 1000000007;
}
```

<br>

For **Raku** solution, I had to consult the document to remind myself how to get binary of given decimal. Apart from that, nothing special about this solution.

Having said that it still look elegant, at least to me.

<br>

```perl6
sub count-set-bits(Int $n) {
    my $c = 0;
    (1..$n).map( -> $i { $c += [+] $i.base(2).comb; });
    return $c % 1000000007;
}
```

<br>

Time to stitch together everything and solve the task.

<br>

```perl
use strict;
use warnings;

my $N = $ARGV[0] || 4;
die "ERROR: Invalid number [$N].\n" unless ($N =~ /^\d+$/);
print count_set_bits($N), "\n";
```

<br>

and here goes **Raku** solution.

<br>

```perl6
use v6.d;

sub MAIN(Int :$N = 4) { count-set-bits($N).say }
```

<br>

with some standard unit testing to make keep happy the developer inside me.

<br>

```perl
use strict;
use warnings;
use Test::More;

is(count_set_bits(4), 5, "testing example 1");
is(count_set_bits(3), 4, "testing example 2");

done_testing;
```

<br>

along with **Raku** unit test as well.

<br>

```perl6
use Test;

is count-set-bits(4), 5, "testing example 1";
is count-set-bits(3), 4, "testing example 2";

done-testing;
```

<br>

***
## TASK #2 › Trapped Rain Water {#TASK2}
#### Submitted by **[Mohammad S Anwar](http://www.manwar.org)**
***

You are given an array of positive numbers `@N`.

Write a script to represent it as Histogram Chart and find out how much water it can trap.

***

<br>

Fun task of the week, I really enjoyed playing with algorithm that came to my mind first.

<br>

```perl
sub trapped_rain_water {
    my ($arrayref) = @_;

    my @a   = ();
    my $p   = 0;
    my $trw = 0;
    foreach my $n (@$arrayref) {
        if ($p == 0 || $p >= $n) {
            $p = $n if (@a == 0 || ($p == 0 && $n > $p));
            push @a, $n;
        }
        else {
            push @a, $n;
            $trw += fetch_trapped_water(@a);
            @a = ($n);
            $p = $n if ($p < $n);
        }
    }

    # are there any left over to be processed?
    if (@a > 1) {
        $trw += fetch_trapped_water(@a);
    }

    return $trw;
}
```

The real work done in the following `sub fetch_trapped_water()`.

```perl
sub fetch_trapped_water {
    my (@array) = @_;

    # remove any smaller tower from the start
    do {
        if ($array[0] == 0) {
            shift @array;
        }
    } until ($array[0] > 0);

    # remove any smaller tower from the end
    do {
        if ($array[-1] < $array[-2]) {
            pop @array;
        }
    }
    until ($array[-1] > $array[-2]);

    my $max = min($array[0], $array[-1]) * (@array - 2);
    $max -= $array[$_] for 1..@array-2;

    return $max;
}
```

I nicked the following `sub histogram()` from my earlier week solution. Didn't want to go through the pain again.


```perl
sub histogram {
    my ($arrayref) = @_;

    my $max   = max(@$arrayref);
    my $chart = [];
    my $row   = 1;
    foreach (1..$max) {
        my $data = "";
        foreach my $i (0..$#$arrayref) {
            if ($row <= $arrayref->[$i]) {
                $data .= " #";
            }
            else {
                $data .= "  ";
            }
        }
        $row++;
        push @$chart, sprintf("%d%s", $_, $data);
    }

    my ($histogram, $line, $size) = ("", "", "  ");
    $histogram = join "\n", (reverse @$chart);
    $line .= "_ " for (0..$#$arrayref + 1);
    $size .= join " ", @$arrayref;

    return join "\n", $histogram, $line, $size;
}
```

Helper `sub to_arrayref()` to convert the command line string to array ref.

```perl
sub to_arrayref {
    my ($l) = @_;

    die "ERROR: Missing list.\n"      unless defined $l;
    die "ERROR: Invalid list [$l].\n" unless ($l =~ /^[\-?\d\,?\s?]+$/);

    $l =~ s/\s//g;
    return [ split /\,/, $l ];
}
```

<br>

Literal translation of **Perl** solution.

<br>

```perl6
sub trapped-rain-water(*@array where .all ~~ PositiveInt) {

    my @a   = ();
    my $p   = 0;
    my $trw = 0;
    for @array -> $n {
        if $p == 0 || $p >= $n {
            $p = $n if @a == 0 || ($p == 0 && $n > $p);
            @a.push: $n;
        }
        else {
            @a.push: $n;
            $trw += fetch-trapped-water(@a);
            @a = $n;
            $p = $n if $p < $n;
        }
    }

    # are there any left over to be processed?
    if @a.elems > 1 {
        $trw += fetch-trapped-water(@a);
    }

    return $trw;
}
```

```perl6
sub fetch-trapped-water(*@array where .all ~~ PositiveInt) {

    # remove any smaller tower from the start
    repeat {
        if @array[0] == 0 {
            @array.shift;
        }
    } until @array[0] > 0;

    # remove any smaller tower from the end
    repeat {
        if @array[*-1] < @array[*-2] {
            @array.pop;
        }
    }
    until @array[*-1] > @array[*-2];

    my $max = (@array[0], @array[*-1]).min * (@array.elems - 2);
    $max -= @array[$_] for 1..@array.elems - 2;

    return $max;
}
```

Here also I borrowed this `sub chart()` from my past week solutions.

```perl6
sub chart(*@list where @list.elems > 1 && all(@list) ~~ PositiveInt --> Str) {

    my $max   = @list.max;
    my $chart = [];
    my $row   = 1;
    for 1 .. $max -> $n {
        my Str $data = "";
        for 0 .. @list.elems-1 -> $i {
            if $row <= @list[$i] {
                $data ~= " #";
            }
            else {
                $data ~= "  ";
            }
        }

        $row += 1;

        $chart.push: sprintf("%d%s", $n, $data);
    }

    my (Str $histogram, Str $line, Str $size) = ("", "", "  ");
    $histogram = $chart.reverse.join("\n");
    $line ~= "_ " for 0 .. @list.elems;
    $size ~= @list.join(" ");

    return ($histogram, $line, $size).join("\n");
}
```

<br>

Time to solve the task in **Perl**.

<br>

```perl
use strict;
use warnings;
use List::Util qw(min max);

my $L = $ARGV[0] || "2, 1, 4, 1, 2, 5";
printf("%s\n\n", histogram(to_arrayref($L)));
printf("Trapped Rain Water: %d\n", trapped_rain_water(to_arrayref($L)));
```

<br>

Followed by **Raku**.

<br>

```perl6
use v6.d;

subset PositiveInt of Int where * >= 0;

sub MAIN(*@N where @N.elems > 1 && all(@N) ~~ PositiveInt) {
    chart(@N).say;
    trapped-rain-water(@N).say;
}
```
<br>

Good set of test cases to make it complete.

<br>

```perl
use strict;
use warnings;
use Test::More;
use List::Util qw(min);

is( trapped_rain_water([0, 1, 2, 3, 4, 5]),
    0, "testing [0, 1, 2, 3, 4, 5]");

is( trapped_rain_water([2, 1, 4, 1, 2, 5]),
    6, "testing [2, 1, 4, 1, 2, 5]");

is( trapped_rain_water([3, 1, 3, 1, 1, 5]),
    6, "testing [3, 1, 3, 1, 1, 5]");

is( trapped_rain_water([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]),
    6, "testing [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]");

done_testing;
```

<br>

Unit testing in **Raku** as well.

<br>

```perl6
use Test;

subset PositiveInt of Int where * >= 0;

is trapped-rain-water(0, 1, 2, 3, 4, 5),
   0, "testing: 0, 1, 2, 3, 4, 5";
is trapped-rain-water(3, 1, 3, 1, 1, 5),
   6, "testing: 3, 1, 3, 1, 1, 5";
is trapped-rain-water(2, 1, 4, 1, 2, 5),
   6, "testing: 2, 1, 4, 1, 2, 5";
is trapped-rain-water(0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1),
   6, "testing: 0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1";

done-testing;
```
<br>

That's it for this week. Speak to you soon.
