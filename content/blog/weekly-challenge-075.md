---
title: "BLOG: The Weekly Challenge #075"
date: 2020-08-30T00:00:00+00:00
description: "Blog for the weekly challenge #075."
type: post
image: images/blog/weekly-challenge-075.jpg
author: Mohammad S Anwar
tags: ["Perl", "Raku", "Swift"]
---

# HEADLINE

<br>

The **week #075** tasks turned out to be  a lot trickier than expected. Generally **Task #1** is meant for beginners only but this time it was not the case. It wasn't my plan when I proposed the task. I thought couple of for-loops and job done. But when I actually started working on the task, I realised it wasn't as simple as I thought initially. But the good thing is, I got to know about **Dynamic Programming (DP)**.

With the power of **DP**, the task became piece of cake. While working on the task, I got the idea of similar task which I might propose in the coming weeks. The second task **Largest Rectangle Histogram** was lot fun to work with. Printing the histogram brought back memory from my early programming days.

I was little nervous when working with **Swift** this time. Having done this for over a month now, I feel much comfortable. Initial plan was to do in **Java** as well but gave up after lack of time. I will re-visit later as it is ideal to brush up **Java** syntax.

If you are interested then please checkout my **Swift** solutions to this week tasks.

#### 1) [Coins Sum](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/mohammad-anwar/swift/ch-1.swift)
#### 2) [Largest Rectangle Histogram](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/mohammad-anwar/swift/ch-2.swift)

<br>

### YouTube Weekly

I present live coding session of mine for the tasks of the week. Please do comment the video if you have any suggestions. And if you like the video then please consider subscribing my **[YouTube Channel](https://www.youtube.com/channel/UCT91RkThBWByo1NL_M8R8Ig)**.

#### 1) [Coins Sum](https://www.youtube.com/watch?v=DQr7xHJYZ5I)
#### 2) [Largest Rectangle Histogram](https://www.youtube.com/watch?v=D8jyGEQOLhk)

<br>

Last but not the least, I would to love hear your **view/opinion** with regard to anything I do.

Please get in touch with me by email: <mohammad.anwar@yahoo.com>.

Let me share my solutions to the **[The Weekly Challenge - 075](/perl-weekly-challenge-075)**.

***
## TASK #1 › Coins Sum
#### Submitted by **[Mohammad S Anwar](http://www.manwar.org)**
***

You are given a set of coins @C, assuming you have infinite amount of each coin in the set.

Write a script to find how many ways you make sum $S using the coins from the set @C.

***

<br>

Using the **Dynamic Programming (DP)** technique, I built the `$matrix` containing the buildup results. The key cross columns are the coin sum starting with `0` to the desired sum. Similarly across the rows, coins, in ascending order.

For example, if the given coins are `1, 2, 4` and sum is `6`, the keys across the columns would be `0, 1, 3, 4, 5, 6` and across the rows would be `1, 2, 4`. With the help the two for-loops we built the `$matrix`. In the end returns the value from the `$matrix`.

<br>

```perl
sub coins_sum {
    my ($coins, $sum) = @_;

    my $size = $#$coins;
    return 0 if ($size == -1 || $sum <= 0);

    my $matrix;

    # Sum of 0 can be achieved in one possible way.
    $matrix->[$_][0] = 1 for (0 .. $size+1);

    foreach my $i (0 .. $size) {

        foreach my $j (1 .. $sum) {

            my $include_current = 0;
            my $exclude_current = 0;

            if ($coins->[$i] <= $j) {
                $include_current = $matrix->[$i][$j - $coins->[$i]];
            }

            if ($i > 0) {
                $exclude_current = $matrix->[$i - 1][$j];
            }

            $matrix->[$i][$j] = $include_current + $exclude_current;
        }
    }

    return $matrix->[$size][$sum];
}

sub prepare {
    my ($coins) = @_;

    if (defined $coins) {
        $coins =~ s/\s//g;
        return [ split /\,/, $coins ];
    }
}
```

<br>

For **Raku** version, it is literally translated from the **Perl** without any special effects except the following one line.

```perl6
my $_coins = [ $coins.split(',').map({ .Int }) ];
```

The above line takes a string and split by `,`. In the end cast every element as `Int`.

<br>

```perl6
sub coins-sum(Str $coins is copy, Int $sum) returns Int {

    die "ERROR: Invalid coins [$coins].\n"
        unless $coins ~~ /^[\s?\-?\d\,?\s?]+$/;

    say "Coins: $coins";
    $coins ~~ s:g/\s//;
    my $_coins = [ $coins.split(',').map({ .Int }) ];

    my $size = $_coins.elems;
    return 0 if ($size == 0 || $sum <= 0);

    my $matrix;

    # Sum of 0 can be achieved in one possible way.
    $matrix.[$_][0] = 1 for (0 .. $size-1);

    for 0 .. $size-1 -> $i {

        for 1 .. $sum -> $j {

            my Int $include-current = 0;
            my Int $exclude-current = 0;

            if $_coins.[$i] <= $j {
                $include-current = $matrix.[$i][$j - $_coins.[$i]];
            }

            if $i > 0 {
                $exclude-current = $matrix.[$i - 1][$j];
            }

            $matrix.[$i][$j] = $include-current + $exclude-current;
        }
    }

    return $matrix.[$size-1][$sum];
}
```

<br>

Here we have one-liner solution to the **Coins Sum** task.

<br>

```perl
use strict;
use warnings;

my $COINS = $ARGV[0] || "1, 2, 4";
my $SUM   = $ARGV[1] || 6;

print "Possible ways to achieve the target: ",
      coins_sum(prepare($COINS), $SUM), "\n";
```

<br>

Followed by **Raku** one-liner with power of `MAIN()`.

<br>

```perl6
use v6.d;

sub MAIN(Str :$COINS = "1, 2, 4", Int :$SUM = 6) {
    say "Possible ways to achieve the target: " ~
        coins-sum($COINS, $SUM);
}
```

<br>

Because of lack of time, I went for simple unit test.

<br>

```perl
use strict;
use warnings;
use Test::More;

is coins_sum(prepare("1, 2"),        5), 3;
is coins_sum(prepare("1, 2, 3"),     5), 5;
is coins_sum(prepare("1, 2, 4"),     6), 6;
is coins_sum(prepare("25, 10, 5"),  30), 5;
is coins_sum(prepare("9, 6, 5, 1"), 11), 6;

done_testing;
```

<br>

**Raku** unit test is as simple as ever.

<br>

```perl6
use Test;

is coins-sum("1, 2", 5), 3,        "Coins=[1, 2]       Sum=5";
is coins-sum("1, 2, 3", 5), 5,     "Coins=[1, 2, 3]    Sum=5";
is coins-sum("1, 2, 4", 6), 6,     "Coins=[1, 2, 4]    Sum=6";
is coins-sum("25, 10, 5", 30), 5,  "Coins=[25, 10, 5]  Sum=30";
is coins-sum("9, 6, 5, 1", 11), 6, "Coins=[9, 6, 5, 1] Sum=6";

done-testing;
```

<br>

***
## TASK #2 › Largest Rectangle Histogram
#### Submitted by **[Mohammad S Anwar](http://www.manwar.org)**
***

You are given an array of positive numbers @A.

Write a script to find the largest rectangle histogram created by the given array.

BONUS: Try to print the histogram as shown in the example, if possible.

***

<br>

I had so much fun working with **Largest Rectangle Histogram** task. I dealt the bonus task first as it was easier than the main task. For this I created `sub chart()`. For the main task, I created `sub largest_rectangle_histogram()`. The core of the task done inside two helper methods `sub go_left()` and `sub go_right()`. I could have merged the two and have just one. But I decided against the idea for readability purpose.

<br>

```perl
sub largest_rectangle_histogram {
    my ($list) = @_;

    my $i   = 0;
    my $max = 0;
    foreach my $n (@$list) {

        my ($left, $right) = (0, 0);
        $left  = go_left($i, $list)  if ($i > 0);
        $right = go_right($i, $list) if ($i <= $#$list);

        my @heights = (@$list)[$i - $left .. $i + $right];
        my $size    = min(@heights) * @heights;
        $max = $size if ($size > $max);

        $i++;
    }

    return $max;
}

sub go_left {
    my ($i, $list) = @_;

    my $c = $list->[$i];
    my $j = 0;
    while ($i > 0) {
        $i--;
        last if ($list->[$i] < $c);
        $j++;
    }

    return $j;
}

sub go_right {
    my ($i, $list) = @_;

    my $c = $list->[$i];
    my $j = 0;
    while ($i < $#$list) {
        $i++;
        last if ($list->[$i] < $c);
        $j++;
    }

    return $j;
}

sub chart {
    my ($list) = @_;

    my $max   = max(@$list);
    my $chart = [];
    my $row   = 1;
    foreach (1..$max) {
        my $data = "";
        foreach my $i (0..$#$list) {
            if ($row <= $list->[$i]) {
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
    $line .= "_ " for (0..$#$list + 1);
    $size .= join " ", @$list;

    return join "\n", $histogram, $line, $size;
}

sub prepare {
    my ($list) = @_;

    if (defined $list) {
        $list =~ s/\s//g;
        return [ split /\,/, $list ];
    }
}
```

<br>

Once again, **Raku** version is literal translation of the above **Perl** solution with just one special magical line.

```perl6
my $heights = $list.[$i - $left .. $i + $right];
```

The above line does list slicing.

<br>

```perl6
sub largest-rectangle-histogram($list where .all ~~ Int) returns Int {

    my Int $i   = 0;
    my Int $max = 0;

    for 0 .. $list.elems-1 -> $i {

        my (Int $left, Int $right) = (0, 0);
        $left  = go-left($i, $list)  if $i > 0;
        $right = go-right($i, $list) if $i < $list.elems;

        my $heights = $list.[$i - $left .. $i + $right];
        my $size    = $heights.min * $heights.elems;

        $max = $size if $size > $max;
    }

    return $max;
}

sub go-left(Int $i is copy, $list where .all ~~ Int) returns Int {

    my $c = $list.[$i];
    my $j = 0;
    while $i > 0 {
        $i = $i - 1;
        last if $list.[$i] < $c;
        $j = $j + 1;
    }

    return $j;
}

sub go-right(Int $i is copy, $list where .all ~~ Int) returns Int {

    my $c = $list.[$i];
    my $j = 0;
    while $i < $list.elems-1 {
        $i += 1;
        last if $list.[$i] < $c;
        $j += 1;
    }

    return $j;
}

sub chart($list where .all ~~ Int) returns Str {

    my $max   = $list.max;
    my $chart = [];
    my $row   = 1;
    for 1 .. $max -> $n {
        my Str $data = "";
        for 0 .. $list.elems-1 -> $i {
            if $row <= $list.[$i] {
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
    $line ~= "_ " for 0 .. $list.elems;
    $size ~= $list.join(" ");

    return ($histogram, $line, $size).join("\n");
}

sub prepare(Str $list is copy) {

    return unless $list.defined;

    die "ERROR: Invalid list [$list].\n"
        unless $list ~~ /^[\s?\-?\d\,?\s?]+$/;

    $list ~~ s:g/\s//;
    return [ $list.split(',').map({ .Int }) ];
}
```

<br>

Simple wrapper around the `sub largest_rectangle_histogram()` solves the task.

<br>

```perl
use strict;
use warnings;
use List::Util qw(min max);

my $L = $ARGV[0] || "2, 1, 4, 5, 3, 7";

my $list = prepare($L);
print chart($list), "\n\n";
print "Largest Rectangle Histogram: ", largest_rectangle_histogram($list), "\n";
```

<br>

**Raku** does the same to get the work done.

<br>

```perl6
use v6.d;

sub MAIN(Str :$LIST = "2, 1, 4, 5, 3, 7") {
    my $list = prepare($LIST);
    chart($list).say;
    say "Largest Rectangle Histogram: " ~
        largest-rectangle-histogram($list);
}
```

<br>

Once again, I took the easy route for unit test.

<br>

```perl
use strict;
use warnings;
use Test::More;
use List::Util qw(min max);

is(largest_rectangle_histogram(prepare("2, 1, 4, 5, 3, 7")), 12, "example 1");
is(largest_rectangle_histogram(prepare("3, 2, 3, 5, 7, 5")), 15, "example 2");

done_testing;
```

<br>

**Raku** unit test is forever simple and easy to follow.

<br>

```perl6
use Test;

is largest-rectangle-histogram(prepare("2, 1, 4, 5, 3, 7")), 12, "example 1";
is largest-rectangle-histogram(prepare("3, 2, 3, 5, 7, 5")), 15, "example 2";

done-testing;
```

***

<br>

That's it for this week. Speak to you soon.
