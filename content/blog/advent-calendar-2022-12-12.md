---
title: "Advent Calendar - December 12, 2022"
date: 2022-12-12T00:00:00+00:00
description: "Advent Calendar - December 12, 2022."
type: post
image: images/blog/2022-12-12.jpg
author: W. Luis Mochan
tags: ["Perl"]
---

## [**Advent Calendar 2022**](/blog/advent-calendar-2022)
### | &nbsp; [**Day 11**](/blog/advent-calendar-2022-12-11) &nbsp; | &nbsp; **Day 12** &nbsp; |
***

The gift is presented by `W. Luis Mochan`. Today he is talking about his solution to [**"The Weekly Challenge - 152"**](/blog/perl-weekly-challenge-152). This is re-produced for **Advent Calendar 2022** from the original [**post**](https://wlmb.github.io/2022/02/14/PWC152/) by him.

***

<br>

## Perl Weekly Challenge 152

<br>

My solutions ([**task 1**](https://github.com/wlmb/perlweeklychallenge-club/blob/master/challenge-152/wlmb/perl/ch-1.pl) and [**task 2**](https://github.com/wlmb/perlweeklychallenge-club/blob/master/challenge-152/wlmb/perl/ch-2.pl)) to [**The Weekly Challenge - 152**](https://theweeklychallenge.org/blog/perl-weekly-challenge-152).

<br>

## Task 1: Triangle Sum Path

<br>

You are given a triangle array.

Write a script to find the minimum sum path from top to bottom.

### Example 1

    Input: $triangle = [ [1], [5,3], [2,3,4], [7,1,0,2], [6,4,5,2,8] ]

                1
               5 3
              2 3 4
             7 1 0 2
            6 4 5 2 8

    Output: 8

    Minimum Sum Path = 1 + 3 + 2 + 0 + 2 => 8

### Example 2

    Input: $triangle = [ [5], [2,3], [4,1,5], [0,1,2,3], [7,2,4,1,9] ]

                5
               2 3
              4 1 5
             0 1 2 3
            7 2 4 1 9

    Output: 9

    Minimum Sum Path = 5 + 2 + 1 + 0 + 1 => 9

<br>

From the examples it is clear that any path down the triangle is valid, so I just have to choose the minimum values for each row and sum them. This yields a very compact oneliner:

<br>

```perl
perl -MList::Util=min,sum0 -d -E '
say "In: $_, Out: ", sum0 map {min @$_} @{eval $_} for @ARGV;
'
```

<br>

### Results:

<br>

```perl
In: [[1], [5,3], [2,3,4], [7,1,0,2],[6,4,5,2,8]], Out: 8
In: [[5],[2,3],[4,1,5],[0,1,2,3],[7,2,4,1,9]], Out: 9
```

<br>

I assume the input is a list of strings, each describing a correct multidimensional `Perl` array describing the triangle, which by the way, does not even need a triangular shape, so that I can eval it. The result is an array of references to the rows of the given triangle. I convert each of them to an array, find their minimum value and sum over the rows to obtain the output. I use the `min` and `sum0` subroutines from `List::Util`.

A full version is

<br>

```perl
#!/usr/bin/env perl
# Perl weekly challenge 152
# Task 1: Minimum sum path
#
# See https://wlmb.github.io/2022/02/14/PWC152/#task-1-minimum-sum-path
use v5.12;
use warnings;
use List::Util qw(min sum0 all);
use Try::Tiny;
die "Usage: ./ch-1.pl T1 [T2]...\n"
    . "where Ti are triangles of the form '[[T00],[T10,T11],[T20,T21,T22]...'"
    unless @ARGV;
for my $triangle_string (@ARGV){
    try {
    my $triangle=eval $triangle_string;
    my @rows=@$triangle;
    # Seems unnecesary, but test shape
    die "Wrong row-size in $triangle_string"
        unless all{$_+1==@{$rows[$_]}}(0..@rows-1);
    my @minima=map {min @$_} @rows;
    my $sum=sum0 @minima;
    say "Input: $triangle_string\nOutput: $sum\nPath values: ", join "-", @minima;
    }
    catch {
    say $_;
    }
}
```

<br>

### Example:

<br>

```perl
./ch-1.pl '[[1], [5,3], [2,3,4], [7,1,0,2],[6,4,5,2,8]]' '[[5],[2,3],[4,1,5],[0,1,2,3],[7,2,4,1,9]]'
```

<br>

### Results:

<br>

```perl
Input: [[1], [5,3], [2,3,4], [7,1,0,2],[6,4,5,2,8]]
Output: 8
Path values: 1-3-2-0-2
Input: [[5],[2,3],[4,1,5],[0,1,2,3],[7,2,4,1,9]]
Output: 9
Path values: 5-2-1-0-1
```

<br>

### Examples with errors and extreme cases:

<br>

```perl
./ch-1.pl '[[1], [5,3], [2,4], [7,1,0,2],[6,4,5,2,8]]'\
      '[5],[2,3],[4,1,5],[0,1,2,3],[7,2,4,1,9]' '[[1]]' '[[]]'
```

<br>

### Results:

<br>

```perl
Wrong row-size in [[1], [5,3], [2,4], [7,1,0,2],[6,4,5,2,8]] at ./ch-1.pl line 19.

Can't use string ("7") as an ARRAY ref while "strict refs" in use at ./ch-1.pl line 19.

Input: [[1]]
Output: 1
Path values: 1
Wrong row-size in [[]] at ./ch-1.pl line 19.
```

<br>

## Task 2: Rectangle Area

<br>

You are given coordinates bottom-left and top-right corner of two rectangles in a 2D plane.

Write a script to find the total area covered by the two rectangles.

### Example 1

    Input: Rectangle 1 => (-1,0), (2,2)
              Rectangle 2 => (0,-1), (4,4)

    Output: 22

### Example 2

    Input: Rectangle 1 => (-3,-1), (1,3)
           Rectangle 2 => (-1,-3), (2,2)

    Output: 25

<br>

This problem may be messy, as there are many possibilities for the relative positions of the different vertices. The problem may be simplified by dividing rectangles that have a partial overlap. This allows a generalization of the problem to that of the area of N rectangles. I obtain the coordinates of each rectangle, four at a time, from @ARGV. I build a list of non-overlapping rectangles. If a rectangle doesn’t overlap the area of any previously added rectangle, I add it. If it does, I split it in two and try to add the fragments instead. After a sequence of splitting horizontally and vertically the pending rectangles, I either end up with some rectangles that do not overlap any other rectangle, in which case I must add them to the list, or with rectangles that are fully contained in one of the previous rectangles, in which case I simply throw them away. The area is the sum of the areas of the non-overlapping rectangles.

<br>

```perl
#!/usr/bin/env perl
# Perl weekly challenge 152
# Task 2: Rectangle area
#
# See https://wlmb.github.io/2022/02/14/PWC152/#task-2-rectangle-area
use v5.12;
use warnings;
use List::Util qw(min sum0 all);
die "Usage: ./ch-2.pl L1 B1 R1 T1 L2 B2 R2 T2 ..."
    . "where L's B's R's and T's denote left, bottom, right and top coordinates"
    unless @ARGV;
my @non_ol;
my @input;
my @pending;
while(@ARGV){
    die "# coordinates must be multiple of four" unless @ARGV>=3;
    my ($L,$B,$R,$T)=splice @ARGV, 0, 4;
    ($L, $R)=($R, $L) if $L>$R; # reorder if necessary
    ($B, $T)=($T, $B) if $B>$T;
    push @input, {left=>$L, bottom=>$B, right=>$R, top=>$T};
}
my @pending=@input;
 ADD1:
    while(@pending){
    my $rectangle=shift @pending;
    foreach(@non_ol){
        my @fragments=divide($rectangle, $_);
        next ADD1 if @fragments==1; # rectangle contained in some other piece
        push(@pending, @fragments), next ADD1 if @fragments>1;

    }
    push @non_ol, $rectangle;
}
say "Input: ";
say "\tRectangle $_: ($input[$_]->{left},$input[$_]->{bottom}), ",
    "($input[$_]->{right},$input[$_]->{top})" for(0..@input-1);
say "Area: ", sum0 map {($_->{right}-$_->{left})*($_->{top}-$_->{bottom})} @non_ol;
say "Non-overlapping subregions: ";
say "\tRectangle $_: ($non_ol[$_]->{left},$non_ol[$_]->{bottom}), ",
    "($non_ol[$_]->{right},$non_ol[$_]->{top})" for(0..@non_ol-1);
sub divide {
    my ($p, $q)=@_;
    return if $p->{left}>=$q->{right}    # no overlap
              or $p->{right}<=$q->{left}
              or $p->{bottom}>=$q->{top}
              or  $p->{top}<=$q->{bottom};
    return ({left=>$p->{left}, bottom=>$p->{bottom}, right=>$q->{left}, top=>$p->{top}},
        {left=>$q->{left}, bottom=>$p->{bottom}, right=>$p->{right}, top=>$p->{top}})
    if $p->{left}<$q->{left}; # split left
    return ({left=>$p->{left}, bottom=>$p->{bottom}, right=>$q->{right}, top=>$p->{top}},
        {left=>$q->{right}, bottom=>$p->{bottom}, right=>$p->{right}, top=>$p->{top}})
    if $p->{right}>$q->{right}; # split right
    return ({left=>$p->{left}, bottom=>$p->{bottom}, right=>$p->{right}, top=>$q->{bottom}},
        {left=>$p->{left}, bottom=>$q->{bottom}, right=>$p->{right}, top=>$p->{top}})
    if $p->{bottom}<$q->{bottom}; # split bottom
    return ({left=>$p->{left}, bottom=>$p->{bottom}, right=>$p->{right}, top=>$q->{top}},
        {left=>$p->{left}, bottom=>$q->{top}, right=>$p->{right}, top=>$p->{top}})
    if $p->{top}>$q->{top}; # split top
    return $p; # $p contained in $q
}
```

<br>

### Examples

<br>

```perl
./ch-2.pl -1  0  2 2  0 -1 4 4
./ch-2.pl -3 -1  1 3 -1 -3 2 2
```

<br>

### Results:

<br>

```perl
Input:
    Rectangle 0: (-1,0), (2,2)
    Rectangle 1: (0,-1), (4,4)
Area: 22
Non-overlapping subregions:
    Rectangle 0: (-1,0), (2,2)
    Rectangle 1: (2,-1), (4,4)
    Rectangle 2: (0,-1), (2,0)
    Rectangle 3: (0,2), (2,4)
Input:
    Rectangle 0: (-3,-1), (1,3)
    Rectangle 1: (-1,-3), (2,2)
Area: 25
Non-overlapping subregions:
    Rectangle 0: (-3,-1), (1,3)
    Rectangle 1: (1,-3), (2,2)
    Rectangle 2: (-1,-3), (1,-1)
```

<br>

### Example with several overlapping squares along a diagonal:

<br>

```perl
./ch-2.pl 0 0 2 2 1 1 3 3 2 2 4 4 3 3 5 5
```

<br>

### Results:

<br>

```perl
Input:
    Rectangle 0: (0,0), (2,2)
    Rectangle 1: (1,1), (3,3)
    Rectangle 2: (2,2), (4,4)
    Rectangle 3: (3,3), (5,5)
Area: 13
Non-overlapping subregions:
    Rectangle 0: (0,0), (2,2)
    Rectangle 1: (2,2), (4,4)
    Rectangle 2: (4,3), (5,5)
    Rectangle 3: (1,2), (2,3)
    Rectangle 4: (2,1), (3,2)
    Rectangle 5: (3,4), (4,5)
```

<br>

### Example with overlapping crosses:

<br>

```perl
./ch-2.pl -1 -5 1 5 -2 -4 2 4 -3 -3 3 3 -4 -2 4 2 -5 -1 5 1
```

<br>

### Results:

<br>

```perl
Input:
    Rectangle 0: (-1,-5), (1,5)
    Rectangle 1: (-2,-4), (2,4)
    Rectangle 2: (-3,-3), (3,3)
    Rectangle 3: (-4,-2), (4,2)
    Rectangle 4: (-5,-1), (5,1)
Area: 60
Non-overlapping subregions:
    Rectangle 0: (-1,-5), (1,5)
    Rectangle 1: (-2,-4), (-1,4)
    Rectangle 2: (1,-4), (2,4)
    Rectangle 3: (-3,-3), (-2,3)
    Rectangle 4: (2,-3), (3,3)
    Rectangle 5: (-4,-2), (-3,2)
    Rectangle 6: (3,-2), (4,2)
    Rectangle 7: (-5,-1), (-4,1)
    Rectangle 8: (4,-1), (5,1)
```

<br>

In the problem description there are only two rectangles, and their intersection is either empty or some rectangle. These allows a simplified solution, where we just add the area of each rectangle and subtract the area of the intersection (or 0, if empty). This suggest a one-liner (5-liner):

<br>

```perl
perl -MList::Util=min,max -E '($p,$q)=map {[splice @ARGV, 0, 4]} (1,2);
say a($p)+a($q)-i($p,$q);sub a{my ($x0,$y0,$x1,$y1)=@{$_[0]};($x1-$x0)*($y1-$y0)}
sub i{my ($x0,$y0,$x1,$y1,$x2,$y2,$x3,$y3)=map {@{$_}} @_;
return 0 if $x0>=$x3 || $x1<=$x2 || $y0>=$y3 || $y1<=$y2;
a([max($x0,$x2),max($y0,$y2),min($x1,$x3),min($y1,$y3)])}
' -- -1  0  2 2  0 -1 4 4
perl -MList::Util=min,max -E '($p,$q)=map {[splice @ARGV, 0, 4]} (1,2);
say a($p)+a($q)-i($p,$q);sub a{my ($x0,$y0,$x1,$y1)=@{$_[0]};($x1-$x0)*($y1-$y0)}
sub i{my ($x0,$y0,$x1,$y1,$x2,$y2,$x3,$y3)=map {@{$_}} @_;
return 0 if $x0>=$x3 || $x1<=$x2 || $y0>=$y3 || $y1<=$y2;
a([max($x0,$x2),max($y0,$y2),min($x1,$x3),min($y1,$y3)])}
' -- -3 -1  1 3 -1 -3 2 2
```

<br>

### Results:

<br>

```perl
22
25
```

<br>

Here the subroutine a calculates the area of a rectangle and i the area of the intersection of two rectangles. The intersection between `A` and `B` is empty if `AL > BR`, or if `AR < BL`, or… where `L` denotes the leftmost and `R` rightmost coordinate. A similar consideration may be done for the vertical coordinates. I change the strict inequalities to `>=` and `<=`, as overlaping lines don’t contribute to the area. In case of overlap, the overlapping rectangle lies to the right of `AL` and `BL`, to the left of `AR` and `BR` and so on. This allows the calculation and subtraction of the area of the intersection.

<br>

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

| &nbsp; [**Advent Calendar 2022**](/blog/advent-calendar-2022) &nbsp; |
