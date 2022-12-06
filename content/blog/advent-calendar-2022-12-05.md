---
title: "Advent Calendar - December 5, 2022"
date: 2022-12-05T00:00:00+00:00
description: "Advent Calendar - December 5, 2022."
type: post
image: images/blog/2022-12-05.jpg
author: Arne Sommer
tags: ["Raku"]
---

## [**Advent Calendar 2022**](/blog/advent-calendar-2022)
### | &nbsp; [**Day 4**](/blog/advent-calendar-2022-12-04) &nbsp; | &nbsp; **Day 5** &nbsp; | &nbsp; [**Day 6**](/blog/advent-calendar-2022-12-06) &nbsp; |
***

The gift is presented by `Arne Sommer`. Today he is talking about his solution to [**"The Weekly Challenge - 159"**](/blog/perl-weekly-challenge-159). This is re-produced for **Advent Calendar 2022** from the original [**post**](https://raku-musings.com/farey-moebius.html) by him.

***

<br>

## Task #1: Farey Sequence

You are given a positive number, $n.

Write a script to compute Farey Sequence of the order $n.

<br>

### Example 1:

    Input: $n = 5
    Output: 0/1, 1/5, 1/4, 1/3, 2/5, 1/2, 3/5, 2/3, 3/4, 4/5, 1/1.

### Example 2:

    Input: $n = 7
    Output: 0/1, 1/7, 1/6, 1/5, 1/4, 2/7, 1/3, 2/5, 3/7, 1/2, 4/7, 3/5, 2/3, 5/7, 3/4, 4/5, 5/6, 6/7, 1/1.

### Example 3:

    Input: $n = 4
    Output: 0/1, 1/4, 1/3, 1/2, 2/3, 3/4, 1/1.

<br>

I do not know why the challenge does not provide a Wikipedia link for the `Farey Sequence`, as it does so for the `Moebius Number` in the second part, but here it is: [**Wikipedia page**](https://en.wikipedia.org/wiki/Farey_sequence).

### File: farey-sequence
```perl
#! /usr/bin/env raku

unit sub MAIN (Int $n where $n > 0, :v(:$verbose));      # [1]

my @fs = (0/1, 1/1);                                     # [2]

for 1 .. $n -1 -> $numerator                             # [3]
{
  for $numerator +1 .. $n -> $denominator                # [4]
  {
    @fs.push: $numerator/$denominator;                   # [5]
  }
}

if $verbose
{
  say ":Unsorted: { @fs.join(", ") }";
  say ":Unsorted x/y: { @fs.map( *.nude.join("/") ).join(", ") }";
  say ":Sorted x/y: { @fs.sort.map( *.nude.join("/") ).join(", ") }";
}

@fs.sort.unique.map( *.nude.join("/") ).join(", ").say;  # [6]
```

<br>

[1] Ensure a positive integer. The challenge rewuires a number, but it is fairly obvious that we should allow integers only.

[2] Pre-populate the result array with the first and last values - as rational numbers.

[3] Iterate over all the possible numbers to left of the / (in the result).

[4] Ditto for the right hand part of the /.

[5] Add the result of thre division to the result array.

[6] This one does a lot of heavy lifting. The sort gives us the values in sorted order (numerically). unique gets rid of duplicates, as e.g. both 1/2 and 2/4 will give 1/2 (as will be shown by the verbose output later on). The map uses the nude method to get the numerator and the denominator of the rational number.

<br>

See [**docs.raku.org/routine/nude**](https://docs.raku.org/routine/nude) for more information about `nude`.

<br>

Running it:

<br>

```perl
$ ./farey-sequence 5

0/1, 1/5, 1/4, 1/3, 2/5, 1/2, 3/5, 2/3, 3/4, 4/5, 1/1

$ ./farey-sequence 7
0/1, 1/7, 1/6, 1/5, 1/4, 2/7, 1/3, 2/5, 3/7, 1/2, 4/7, 3/5, 2/3, 5/7, \
  3/4, 4/5, 5/6, 6/7, 1/1

$ ./farey-sequence 4
0/1, 1/4, 1/3, 1/2, 2/3, 3/4, 1/1
```

<br>

Looking good.

With verbose mode, to see what is going on:

<br>

```perl
$ ./farey-sequence -v 5
:Unsorted: 0, 1, 0.5, 0.333333, 0.25, 0.2, 0.666667, \
  0.5, 0.4, 0.75, 0.6, 0.8
:Unsorted x/y: 0/1, 1/1, 1/2, 1/3, 1/4, 1/5, 2/3, 1/2, 2/5, 3/4, 3/5, 4/5
:Sorted x/y: 0/1, 1/5, 1/4, 1/3, 2/5, 1/2, 1/2, 3/5, 2/3, 3/4, 4/5, 1/1
0/1, 1/5, 1/4, 1/3, 2/5, 1/2, 3/5, 2/3, 3/4, 4/5, 1/1

$ ./farey-sequence -v 7
:Unsorted: 0, 1, 0.5, 0.333333, 0.25, 0.2, 0.166667, 0.142857, 0.666667, \
  0.5, 0.4, 0.333333, 0.285714, 0.75, 0.6, 0.5, 0.428571, 0.8, 0.666667, \
  0.571429, 0.833333, 0.714286, 0.857143
:Unsorted x/y: 0/1, 1/1, 1/2, 1/3, 1/4, 1/5, 1/6, 1/7, 2/3, 1/2, 2/5, 1/3, \
  2/7, 3/4, 3/5, 1/2, 3/7, 4/5, 2/3, 4/7, 5/6, 5/7, 6/7
:Sorted x/y: 0/1, 1/7, 1/6, 1/5, 1/4, 2/7, 1/3, 1/3, 2/5, 3/7, 1/2, 1/2, \
  1/2, 4/7, 3/5, 2/3, 2/3, 5/7, 3/4, 4/5, 5/6, 6/7, 1/1
0/1, 1/7, 1/6, 1/5, 1/4, 2/7, 1/3, 2/5, 3/7, 1/2, 4/7, 3/5, 2/3, 5/7, \
  3/4, 4/5, 5/6, 6/7, 1/1

$ ./farey-sequence -v 4
:Unsorted: 0, 1, 0.5, 0.333333, 0.25, 0.666667, 0.5, 0.75
:Unsorted x/y: 0/1, 1/1, 1/2, 1/3, 1/4, 2/3, 1/2, 3/4
:Sorted x/y: 0/1, 1/4, 1/3, 1/2, 1/2, 2/3, 3/4, 1/1
0/1, 1/4, 1/3, 1/2, 2/3, 3/4, 1/1
```

<br>

## Task #2: Moebius Number

You are given a positive number `$n`.

Write a script to generate the `Moebius Number` for the given number. Please refer to wikipedia [page](https://en.wikipedia.org/wiki/M%C3%B6bius_function) for more informations.

<br>

### Example 1:

    Input: $n = 5
    Output: -1

### Example 2:

    Input: $n = 10
    Output: 1

### Example 3:

    Input: $n = 20
    Output: 0

<br>

We need the factors, and happily we can borrow a function doing just that from my [Centenary Sequences with Raku - Part 5 Divisors and Factors](https://raku-musings.com/centenary-sequences5.html) article.

Careful re-reading of the Wikipedia page (whilst writing the program and testing it) uncovered that the number «1» should also be included in the list of factors (even if not explicitly stated), so I have amended the procedure so that we can ask for it to be included.

<br>

### File: moebius-number
```perl
#! /usr/bin/env raku

unit sub MAIN (Int $n where $n > 0, :v(:$verbose));  # [1]

my @prime-factors = factors($n, :include-one);       # [2]

say ": Factor count: { @prime-factors.elems } (Factors: \
  { @prime-factors.join(", ")})" if $verbose;

if @prime-factors.repeated.elems                     # [3]
{
  say 0;                                             # [3a]
}
else                                                 # [4]
{
  say @prime-factors.elems %% 2 ?? -1 !! 1;          # [4a]
}

sub factors ($number is copy, :$include-one)         # [5]
{
  return (1) if $number == 1;

  if $number.is-prime
  {
    return :$include-one ?? (1, $number) !! ($number);
  }

  my @factors = $include-one ?? 1 !! ();

  for (2 .. $number div 2).grep( *.is-prime ) -> $candidate
  {
    while $number %% $candidate
    {
      @factors.push: $candidate;
      $number /= $candidate;
    }
  }

  return @factors;
}
```

<br>

[1] Non-integers cannot have prime factors (as the latter are integers), so it is obvious that we can only allow integers.

[2] Get the prime factors, including 1.

[3] If we have duplicates of any of the factors we print «0» [3a]. Duplicates are detected with repeated that kills of the first instance of any unique value. Then we simply check for any elements in the result.

<br>

See [docs.raku.org/routine/repeated](https://docs.raku.org/routine/repeated) for more information about `repeated`.

<br>

[4] If not, print «-1» if the number of factors is even, and «1» if it is odd [4a].

[5] This one gives us the factors, with 1 included if we ask for it.

<br>

## A Note on [4]

<br>

This else block (with the embedded ternary if) can be written more verbose (and possibly more readable) as:

<br>

```perl
elsif @prime-factors.elems %% 2
{
  say -1;
}
else
{
  say 1;
}
```

<br>

Running it:

<br>

```perl
$ ./moebius-number 5
-1

$ ./moebius-number 10
1

$ ./moebius-number 20
0
```

<br>

Looking good.

With verbose mode:

<br>

```perl
$ ./moebius-number -v 5
: Factor count: 2 (Factors: 1, 5)
-1

$ ./moebius-number -v 10
: Factor count: 3 (Factors: 1, 2, 5)
1

$ ./moebius-number -v 20
: Factor count: 4 (Factors: 1, 2, 2, 5)
0
```

<br>

And that's it.

<br>

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

| &nbsp; [**Advent Calendar 2022**](/blog/advent-calendar-2022) &nbsp; |
