---
title: "Advent Calendar - December 15, 2021"
date: 2021-12-15T00:00:00+00:00
description: "Advent Calendar - December 15, 2021."
type: post
image: images/blog/2021-12-15.jpg
author: Lubos Kolouch
tags: ["Perl","Python"]
---

[**Advent Calendar 2021**](/blog/advent-calendar-2021)
***

The gift is presented by [**Lubos Kolouch**](/blog/meet-the-champion-024). Today he is talking about his solution to [**"The Weekly Challenge - 088"**](/blog/perl-weekly-challenge-088). This is re-produced for **Advent Calendar 2021** from the original [**post**](https://v.kolouch.org/nextcloud/index.php/apps/cms_pico/pico/lubos/20201128_perl_weekly_088) by `Lubos Kolouch`.

***

<br>

## Task #2: Spiral Matrix

<br>

You are given `m x n` matrix of positive integers.

Write a script to print spiral matrix as list.

<br>

***

<br>

If you want to think like a robot traversing enemy area, you have to become a `robot`.

I liked this exercise as there will be certainly similar in the coming `Advent Of Code`!

I decided to be in the position of a robot crawling the array, going in a direction as far as I can and then change the direction at the end. At the same time keep track of the fields I have seen.

## From the code:

<br>

### 1. Initialize the max dimensions, current position, seen cells and the return array.

<br>

### **Perl:**

<br>

```perl
my $x_max = scalar @$in_arr;
my $y_max = scalar @{$in_arr->[0]};

my @pos = (0, 0);
my $direction = ">";

my %seen_cells;
my @out_arr;
```
<br>

### **Python:**

<br>

```perl
x_max = len(in_arr)
y_max = len(in_arr[0])

pos = [0,0]
direction = ">"

seen_cells = {}
out_arr = []
```

<br>

### 2. Look indefinitely when there are still some fields we have not seen - if so, push the field to the return array and remember we have seen it. If everything has been seen, return the array.

<br>

### **Perl:**

<br>

```perl
while (1) {

    return \@out_arr if scalar @out_arr == $x_max * $y_max;

    push @out_arr, $in_arr->[$pos[0]][$pos[1]] unless $seen_cells{$pos[0]}{$pos[1]};
    $seen_cells{$pos[0]}{$pos[1]} = 1;
```

<br>

### **Python:**

<br>

```perl
while 1:

    if len(out_arr) == x_max * y_max:
        return out_arr

    if seen_cells.get((pos[0], pos[1]), 0 ) == 0:
        out_arr.append(in_arr[pos[0]][pos[1]])

    seen_cells[(pos[0], pos[1])] = 1
```

<br>

### 3. Check if we can continue in the same direction, otherwise change the direction.

<br>

### **Perl:**

<br>

```perl
# can move in the direction we are walking?
if ($direction eq ">") {
    if (($pos[1] + 1 < $x_max) and not ($seen_cells{$pos[0]}{$pos[1]+1})) {
        $pos[1]++;
    } else {
        $direction = "v";
    }
}
```

<br>

### **Python:**

<br>

```perl
if direction == ">":
    if (pos[1] + 1 < x_max) and not (seen_cells.get( (pos[0], pos[1]+1), 0) ):
        pos[1] += 1
    else:
        direction = "v"
```

<br>

#### Test cases were added to both exercises to make sure it passes the requirements.

<br>

## Complete Code

<br>

### **Perl:**

<br>

```perl
#!/usr/bin/perl
#===============================================================================
#
#         FILE: ch-2.pl
#
#        USAGE: ./ch-2.pl
#
#  DESCRIPTION: https://perlweeklychallenge.org/blog/perl-weekly-challenge-088/
#                  Task 2
#                  Spiral Matrix
#
#       AUTHOR: Lubos Kolouch
#      VERSION: 1.0
#      CREATED: 11/28/2020 01:02:17 PM
#===============================================================================

use strict;
use warnings;

sub get_spiral{
    my $in_arr = shift;

    my $x_max = scalar @$in_arr;
    my $y_max = scalar @{$in_arr->[0]};

    my @pos = (0, 0);
    my $direction = ">";

    my %seen_cells;
    my @out_arr;

    while (1) {

        return \@out_arr if scalar @out_arr == $x_max * $y_max;

        push @out_arr, $in_arr->[$pos[0]][$pos[1]] unless $seen_cells{$pos[0]}{$pos[1]};
        $seen_cells{$pos[0]}{$pos[1]} = 1;

        # can move in the direction we are walking?
        if ($direction eq ">") {
            if (($pos[1] + 1 < $x_max) and not ($seen_cells{$pos[0]}{$pos[1]+1})) {
                $pos[1]++;
            } else {
                $direction = "v";
            }
        }


        elsif ($direction eq "v") {
            if (($pos[0] + 1 < $y_max) and not ($seen_cells{$pos[0]+1}{$pos[1]})) {
                $pos[0]++;
            } else {
                $direction = "<";
            }
        }

        elsif ($direction eq "<") {
            if (($pos[0] - 1 >= 0) and not ($seen_cells{$pos[0]-1}{$pos[1]})) {
                $pos[0]--;
                next;
            } else {
                $direction = "^";
            }
        }

        elsif ($direction eq "^") {
            if (($pos[1] - 1 >= 0) and not ($seen_cells{$pos[0]}{$pos[1]-1})) {
                $pos[1]--;
                next;
            } else {
                $direction = ">";
            }
        }

    }

}

use Test::More;

is_deeply(get_spiral([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [1, 2, 3, 6, 9, 8, 7, 4, 5]);
is_deeply(get_spiral([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]), [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10 ]);

done_testing();
```

<br>

### **Python:**

<br>

```perl
#!/bin/env python
#===============================================================================
#
#         FILE: ch-2.py
#
#        USAGE: ./ch-2.py
#
#  DESCRIPTION: https://perlweeklychallenge.org/blog/perl-weekly-challenge-088/
#                  Task 2
#                  Spiral Matrix
#
#       AUTHOR: Lubos Kolouch
#      VERSION: 1.0
#      CREATED: 11/28/2020 01:02:17 PM
#===============================================================================

def get_spiral(in_arr):

    x_max = len(in_arr)
    y_max = len(in_arr[0])

    pos = [0,0]
    direction = ">"

    seen_cells = {}
    out_arr = []

    while 1:

        if len(out_arr) == x_max * y_max:
            return out_arr

        if seen_cells.get((pos[0], pos[1]), 0 ) == 0:
            out_arr.append(in_arr[pos[0]][pos[1]])

        seen_cells[(pos[0], pos[1])] = 1

        # can move in the direction we are walking?
        if direction == ">":
                if (pos[1] + 1 < x_max) and not (seen_cells.get( (pos[0], pos[1]+1), 0) ):
                        pos[1] += 1
                else:
                        direction = "v"

        elif direction == "v":
                if (pos[0] + 1 < y_max) and not (seen_cells.get( (pos[0]+1, pos[1]), 0) ):
                        pos[0] += 1
                else:
                        direction = "<"

        elif direction == "<":
                if (pos[0] - 1 >= 0) and not (seen_cells.get( (pos[0]-1, pos[1]), 0) ):
                        pos[0] -= 1
                else:
                        direction = "^"

        elif direction == "^":
                if (pos[1] - 1 >= 0) and not (seen_cells.get( (pos[0], pos[1]-1), 0) ):
                        pos[1] -= 1
                else:
                        direction = ">"

assert get_spiral([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) == [1, 2, 3, 6, 9, 8, 7, 4, 5]
assert get_spiral([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]) == [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10 ]
```


<br>

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2021**](/blog/advent-calendar-2021)
