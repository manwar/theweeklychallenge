---
title: "Advent Calendar - December 23, 2021"
date: 2021-12-23T00:00:00+00:00
description: "Advent Calendar - December 23, 2021."
type: post
image: images/blog/2021-12-23.jpg
author: Ryan Thompson
tags: ["Perl","Raku"]
---

## [**Advent Calendar 2021**](/blog/advent-calendar-2021)
### | [**Day 22**](/blog/advent-calendar-2021-12-22) | **Day 23** |
***

The gift is presented by [**Ryan Thompson**](/blog/meet-the-champion-038). Today he is talking about his solution to [**"The Weekly Challenge - 110"**](/blog/perl-weekly-challenge-110). This is re-produced for **Advent Calendar 2021** from the original [**post**](https://ry.ca/2021/04/transpose-csv-file/) by `Ryan Thompson`.

***

<br>

## Task #2: Transpose CSV File

<br>

You are given a text file.

Write a script to transpose the contents of the given file.

<br>

### Input File

<br>

    name,age,sex
    Mohammad,45,m
    Joe,20,m
    Julie,35,f
    Cristina,10,f

<br>

### Output

<br>

    name,Mohammad,Joe,Julie,Cristina
    age,45,20,35,10
    sex,m,m,f,f

<br>

***

<br>

The second task this week is simple: given a (simplified) comma-separated-value (CSV) file, transpose its rows and columns. For example:

<br>

![Example](/images/blog/2021-12-23-ex1.png)

<br>

The challenge task does not actually refer to the input as CSV, so I’m using that term loosely, with simplified parsing to match the input specification. If more compliant parsing is needed, one could use the usual [**Text::CSV**](https://metacpan.org/pod/Text::CSV) module in `Perl`, or [**ports in Raku**](https://github.com/Tux/CSV).

There are a couple of ways to transpose files, which I’ll explore in `Raku` and `Perl`.)

<br>

## Perl

<br>

Since we’re only asked to output the result, we don’t need to store it. Solutions which work in-place or on a copy of an input array could be made to work, but we don’t need the added effort in this case.

The general algorithm for printing an array transposition is to loop with $col from 0 to the width of the original array, and then print the $col-th element of every row.

<br>

```perl
# Read input into an array of arrays
my @rows = map { chomp; [ split ',' ] } <>;

for my $col (0..$#{$rows[0]}) {
    say join ',', map { $_->[$col] } @rows
}
```

<br>

This runs in `O(m×n)` time, and uses `O(m×n)` total memory (importing the original array into `@rows`), which is the best we can do.

There is also the [**zip6**](https://metacpan.org/pod/List::MoreUtils#zip6) function from [**List::MoreUtils**](https://metacpan.org/pod/List::MoreUtils), but it only works on `arrays`, not `array refs`, so it would not be immediately helpful here.

<br>

## Raku

<br>

`Raku` gives us a built-in [**zip**](https://docs.raku.org/routine/zip) operator ([Z]), which does just what we need.

<br>

```perl6
sub MAIN( Str $file ) {
    ([Z] $file.IO.lines.map(*.split(','))).map(*.join(','))».say;
}
```

<br>

Here, we `split()` each input line on commas, and then `[Z] (zip)` that result, and our file is already transposed. We simply need to `join()` each of the resulting rows back up with commas, and output each string with `say()`.

Both `Perl` and `Raku` solutions give the same result on the example input:

<br>

```perl
[pwc/rjt_110] challenge-110/⋯/raku %> cat ../perl/ch-2.csv
name,age,sex
Mohammad,45,m
Joe,20,m
Julie,35,f
Cristina,10,f

[pwc/rjt_110] challenge-110/⋯/raku %> ./ch-2.raku ../perl/ch-2.csv
name,Mohammad,Joe,Julie,Cristina
age,45,20,35,10
sex,m,m,f,f
```
***

<br>

## Full Code

<br>

The full code for this week’s solutions is [**available on GitHub**](https://github.com/rjt-pl/perlweeklychallenge-club/tree/rjt_110/challenge-110/ryan-thompson).

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2021**](/blog/advent-calendar-2021)
