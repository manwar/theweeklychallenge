---
title: "BLOG: The Weekly Challenge #073"
date: 2020-08-14T00:00:00+00:00
description: "Blog for the weekly challenge #073."
type: post
image: images/blog/weekly-challenge-073.jpg
author: Mohammad S Anwar
tags: ["Perl", "Raku", "Swift"]
---

# HEADLINE

<br>

#### Happy Independence Day to all my fellow Indians

<br>

This week tasks are once again fun and challenging. Keeping the balance is very difficult, I must admit.

> but I am trying ...

For the first time, I have joined the private **Early Bird Club** and taking the advantage of doing the challenge before the launch. I am not sure, if you noticed, this I shared by solutions before lunch time on day one. I did both tasks in **Perl**, **Raku** and **Swift**. I really wanted to add **Java** to the list as well but then dropped the at the last moment and took day off instead. But that doesn't mean, I won't attempt again in the coming weeks.

Having done **Raku** for some time now, I am getting the hang of it. In fact, I am enjoying it to be honest. I no longer ask stupid **Raku** questions on the official **[Twitter handle](https://twitter.com/PerlWChallenge)**. Instead I rely on my notes that I have been collecting all along. They are very handy when I am stuck. Another thing that helped me a lot is the **Live Video Raku Review** by **Andrew Shitov**. I learnt a lot by watching how he test the code. He makes difficult things easier to understand.

> You really don't want to miss Andrew Shitov weekly review ...

I have been coding in **Perl** for over **20 years** now but I noticed there is a clarity in my coding style, thanks to **"The Weekly Challenge"**. I have never liked my own code so much before. But now every time, I read my past solutions to the weekly challenge, I fall in love again. Doing **unit test** every week with the regulary solution also made a big difference how I design my solution. Because I do unit test in **Raku**, I get so much ideas by doing weekly tasks in **Raku**.

If you are interested then please checkout my **Swift** solutions to this week tasks.

<br>

#### 1) [Min Sliding Windows](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/mohammad-anwar/swift/ch-1.swift)
#### 2) [Smallest Neighbour](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-073/mohammad-anwar/swift/ch-2.swift)

<br>

Last but not the least, I would love hear your **view/opinion** with regard to anything I do. Please get in touch with me by email: <mohammad.anwar@yahoo.com>.

Let me share my solutions to the **[The Weekly Challenge - 073](/perl-weekly-challenge-073)**.

***
## TASK #1 › Min Sliding Window
#### Submitted by **[Mohammad S Anwar](http://www.manwar.org)**
***

You are given an array of integers `@A` and sliding window size `$S`.

Write a script to create an array of min from each sliding window.

***

<br>

The best part of this task was to create a **sliding window**. I had lots of fun playing with it. Rest of the job was done by the `min()` of the cool **CPAN** module `List::Util`. I have never used `min()` with `map {}` before. Doing weekly challenges, gave me complete freedom to express myself. I fear no one, literally.

<br>

```perl
sub min_sliding_window {
    my ($list, $size) = @_;

    die "ERROR: Missing list.\n"
        unless defined $list;
    die "ERROR: Invalid list [$list].\n"
        unless ($list =~ /^[\-?\d\,?\s?]+$/);

    $list =~ s/\s//g;
    $list = [ split /\,/, $list ];

    die "ERROR: Missing size.\n"
        unless defined $size;
    die "ERROR: Invalid size [$size].\n"
        unless (($size >= 2) && ($size - 1 <= $#$list));

    my $index = 0;
    my @min_sliding_window = ();
    while ($index + $size - 1 <= $#$list) {
        push @min_sliding_window,
        min ( map { $list->[$_] } $index .. $index + $size - 1 );
        $index++;
    }

    return \@min_sliding_window;
}
```

<br>

Doing the same in **Raku** was not any less fun either.

Doing the one-liner like below gave me immense pleasure.

<br>

```perl6
my $window = $l.[$index .. $index + $size - 1].map: { .Int };
```

I can't even imagine writing the above line few months ago.

I want to stay foccussed and keep learning.

<br>

```perl6
sub min-sliding-window(Str $list is copy, Int $size) {

    die "ERROR: Invalid list [$list].\n"
        unless $list ~~ /^[\-?\d\,?\s?]+$/;

    say $list;
    $list ~~ s:g/\s//;
    my $l = [ $list.split(',') ];

    die "ERROR: Invalid size [$size].\n"
        unless $size >= 2 && $size - 1 <= $l.elems;

    my $index = 0;
    my @min-sliding-window = Empty;

    while $index + $size - 1 < $l.elems {
        my $window = $l.[$index .. $index + $size - 1].map: { .Int };
        @min-sliding-window.push: min($window);
        $index++;
    }

    return @min-sliding-window;
}
```

<br>

Having done all the hard work above, time to stich together to solve the task.

I loved the line below:

<br>

```perl
print join ("\n", (join ', ', @{min_sliding_window($A, $S)}), "");
```

<br>

before I would have done something like this:

<br>

```perl
print join ', ', @{min_sliding_window($A, $S)}), "\n";
```

<br>

I hate putting `\n` at the end of print statement. I miss **Raku** lovely `say()` :-(

<br>

```perl
use strict;
use warnings;
use List::Util qw(min);

my $A = $ARGV[0] || "1, 5, 0, 2, 9, 3, 7, 6, 4, 8";
my $S = $ARGV[1] || 3;

print "$A\n";
print join ("\n", (join ', ', @{min_sliding_window($A, $S)}), "");
```

<br>

**Raku** simply showing off now in the following solution.

<br>

```perl6
use v6.d;

sub MAIN(Str :$A = "1, 5, 0, 2, 9, 3, 7, 6, 4, 8",
         Int :$S = 3) {
    min-sliding-window($A, $S).join(", ").say;
}
```

<br>

Once again, I am relying on `Test2::V0` for my unit test solution. I created `package MinSlidingWindow` to keep it compact.

<br>

```perl
package MinSlidingWindow;

use Moo;
use List::Util qw(min);

sub generate {
    my ($self, $list, $size) = @_;

    die "ERROR: Missing list.\n"
        unless defined $list;
    die "ERROR: Invalid list [$list].\n"
        unless ($list =~ /^[\-?\d\,?\s?]+$/);

    $list =~ s/\s//g;
    $list = [ split /\,/, $list ];

    die "ERROR: Missing size.\n"
        unless defined $size;
    die "ERROR: Invalid size [$size].\n"
        unless (($size >= 2) && ($size - 1 <= $#$list));

    my $index = 0;
    my @min_sliding_window = ();
    while ($index + $size - 1 <= $#$list) {
        push @min_sliding_window,
        min ( map { $list->[$_] } $index .. $index + $size - 1 );
        $index++;
    }

    return \@min_sliding_window;
}

package main;

use Test2::V0 -target => 'MinSlidingWindow';

my $list = "1, 5, 0, 2, 9, 3, 7, 6, 4, 8";
my %test_cases = (
    2 => "1, 0, 0, 2, 3, 3, 6, 4, 4",
    3 => "0, 0, 0, 2, 3, 3, 4, 4",
    4 => "0, 0, 0, 2, 3, 3, 4",
    5 => "0, 0, 0, 2, 3, 3",
    6 => "0, 0, 0, 2, 3",
    7 => "0, 0, 0, 2",
    8 => "0, 0, 0",
    9 => "0, 0",
   10 => "0",
);

warn "List = $list\n";
foreach my $size (sort { $a <=> $b } keys %test_cases) {
    my $min = join ", ", @{$CLASS->generate($list, $size)};
    is $min, $test_cases{$size}, "testing window size $size";
}

done_testing;
```

<br>

Here **Raku** is simply behaving like a good boy and getting the work done.

<br>

```perl6
use Test;

my $list = "1, 5, 0, 2, 9, 3, 7, 6, 4, 8";
my %test-cases = (
    2 => "1, 0, 0, 2, 3, 3, 6, 4, 4",
    3 => "0, 0, 0, 2, 3, 3, 4, 4",
    4 => "0, 0, 0, 2, 3, 3, 4",
    5 => "0, 0, 0, 2, 3, 3",
    6 => "0, 0, 0, 2, 3",
    7 => "0, 0, 0, 2",
    8 => "0, 0, 0",
    9 => "0, 0",
   10 => "0",
);

for %test-cases.keys.sort({ $^a <=> $^b }) -> $size {
    is min-sliding-window($list, $size.Int).join(", "),
       %test-cases{$size},
       "testing size $size";
}

done-testing;
```

<br>

***
## TASK #2 › Smallest Neighbour
#### Submitted by **[Mohammad S Anwar](http://www.manwar.org)**
***

You are given an array of integers `@A`.

Write a script to create an array that represents the smallest element to the left of each corresponding index. If none found then use 0.

***

<br>

This task got few **Team PWC** members confused. I blame myself for the confusion, the explanation was not **good enough**. I had to make few changes to get the message clearly. I am glad it ended up on happy note. In this task also I am mixing the power of `min()` and `map{}`.

<br>

```perl
sub smallest_neighbour {
    my ($list) = @_;

    die "ERROR: Missing list.\n"
        unless defined $list;
    die "ERROR: Invalid list [$list].\n"
        unless ($list =~ /^[\s?\-?\d\,?\s?]+$/);

    $list =~ s/\s//g;
    $list = [ split /\,/, $list ];

    my @smallest_neighbour = (0);
    foreach my $i (1 .. $#$list) {
        my $min = min( map { $list->[$_] } 0..$i-1 );
        push @smallest_neighbour, ($min < $list->[$i])?($min):(0);
    }

    return \@smallest_neighbour;
}
```

<br>

The best line in the **Raku** solution is below:

<br>

```perl6
my $min = min( $l.[0 .. $i - 1].map: { .Int } );
```

<br>

Other than that, rest is plain **Raku** magic.

<br>

```perl6
sub smallest-neighbour(Str $list is copy) {

    die "ERROR: Invalid list [$list].\n"
        unless $list ~~ /^[\s?\-?\d\,?\s?]+$/;

    $list ~~ s:g/\s//;
    my $l = [ $list.split(',') ];

    my @smallest_neighbour = 0;
    for 1 .. $l.elems - 1 -> $i {
        my $min = min( $l.[0 .. $i - 1].map: { .Int } );
        @smallest_neighbour.push: ($min < $l.[$i]) ?? ($min) !! (0);
    }

    return @smallest_neighbour;
}
```

<br>

It is time for **Perl** to show off.

<br>

```perl
use strict;
use warnings;
use List::Util qw(min);

my $A = $ARGV[0] || "7, 8, 3, 12, 10";

print "$A\n";
print join("\n", (join ', ', @{smallest_neighbour($A)}), "");
```

<br>

**Raku** is not far off either.

<br>

```perl6
use v6.d;

sub MAIN(Str $list = "7, 8, 3, 12, 10") {
    say $list;
    smallest-neighbour($list).join(', ').say;
}
```

<br>

**Perl** unit test solution with the power of `Test2::V0`.

<br>

```perl
package SmallestNeighbour;

use Moo;
use List::Util qw(min);

sub fetch {
    my ($self, $list) = @_;

    die "ERROR: Missing list.\n"
        unless defined $list;
    die "ERROR: Invalid list [$list].\n"
        unless ($list =~ /^[\s?\-?\d\,?\s?]+$/);

    $list =~ s/\s//g;
    $list = [ split /\,/, $list ];

    my @smallest_neighbour = (0);
    foreach my $i (1 .. $#$list) {
        my $min = min( map { $list->[$_] } 0..$i-1 );
        push @smallest_neighbour, ($min < $list->[$i])?($min):(0);
    }

    return \@smallest_neighbour;
}

package main;

use Test2::V0 -target => 'SmallestNeighbour';

my %test_cases = (
    "7,  8, 3, 12, 10" => "0, 7, 0, 3, 3",
    "0,  1, 5,  2,  3" => "0, 0, 0, 0, 0",
    "1, -2, 7,  5, -4" => "0, 0, -2, -2, 0",
);

foreach my $list (sort keys %test_cases) {
    my $min = join ", ", @{$CLASS->fetch($list)};
    is $min, $test_cases{$list}, "testing list $list";
}

done_testing;
```

<br>

**Raku** is keeping it simple and clean.

<br>

```perl6
use Test;

my %test-cases = (
    "7,  8, 3, 12, 10" => "0, 7, 0, 3, 3",
    "0,  1, 5,  2,  3" => "0, 0, 0, 0, 0",
    "1, -2, 7,  5, -4" => "0, 0, -2, -2, 0",
);

for %test-cases.keys.sort -> $list {
    is smallest-neighbour($list).join(', '),
       %test-cases{$list},
       "testing list $list";
}

done-testing;
```

***

<br>

That's it for this week. Speak to you soon.
