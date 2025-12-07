---
title: "Advent Calendar - December 6, 2025"
date: 2025-12-06T00:00:00+00:00
description: "Advent Calendar - December 6, 2025."
type: post
image: images/blog/2025-12-06.jpg
author: Arne Sommer
tags: ["Raku"]
---

## [**Advent Calendar 2025**](/blog/advent-calendar-2025)
### | &nbsp; [**Day 5**](/blog/advent-calendar-2025-12-05) &nbsp; | &nbsp; **Day 6** &nbsp; | &nbsp; [**Day 7**](/blog/advent-calendar-2025-12-07) &nbsp; |
***

The gift is presented by `Arne Sommer`. Today he is talking about his solution to [**The Weekly Challenge - 308**](/blog/perl-weekly-challenge-308). This is re-produced for `Advent Calendar 2025` from the original [**post**](https://raku-musings.com/xor-common.html).

***

<br>

## Challenge #308.1: Count Common

You are given two array of strings, @str1 and @str2.

Write a script to return the count of common strings in both arrays.

## Example 1:

    Input: @str1 = ("perl", "weekly", "challenge")
           @str2 = ("raku", "weekly", "challenge")
    Output: 2

## Example 2:

    Input: @str1 = ("perl", "raku", "python")
           @str2 = ("python", "java")
    Output: 1

## Example 3:

    Input: @str1 = ("guest", "contribution")
           @str2 = ("fun", "weekly", "challenge")
    Output: 0

<br>

File: count-common

```raku
#! /usr/bin/env raku

unit sub MAIN ($str1, $str2, :v(:$verbose));  # [1]

my @str1   = $str1.words;                     # [2]
my @str2   = $str2.words;                     # [2a]
my @common = @str1 (&) @str2;                 # [3]

say ": Common: { @common>>.key.sort.join(", ") }" if $verbose;

say @common.elems;                            # [4]
```

<br>

`[1]` The two arrays, as two space separated strings.

`[2]` Split the space separated strings into words, giving the two arrays specified by the challenge.

`[3]` We use the intersection operator (`&`) to get the elements (i.e. words) that are present in both arrays.

 See [docs.raku.org/routine/(&),%20infix%20%E2%88%A9](https://docs.raku.org/routine/(&),%20infix%20%E2%88%A9) for more information about the intersection operator (`&`).

`[4]` Print the number of common words.

<br>

Running it:

<br>

```bash
$ ./count-common "perl weekly challenge" "raku weekly challenge"
2

$ ./count-common "perl raku python" "python java"
1

$ ./count-common "guest contribution" "fun weekly challenge"
0
```

<br>

Looking good.

With verbose mode:

<br>


```bash
$ ./count-common -v "perl weekly challenge" "raku weekly challenge"
: Common: challenge, weekly
2

$ ./count-common -v "perl raku python" "python java"
: Common: python
1

$ ./count-common -v "guest contribution" "fun weekly challenge"
: Common:
0
```

<br>


## Challenge #308.2: Decode XOR

You are given an encoded array and an initial integer.

Write a script to find the original array that produced the given encoded array. It was encoded such that encoded[i] = orig[i] XOR orig[i + 1].

## Example 1:

    Input: @encoded = (1, 2, 3), $initial = 1
    Output: (1, 0, 2, 1)

    Encoded array created like below, if the original array was (1, 0, 2, 1)
    $encoded[0] = (1 xor 0) = 1
    $encoded[1] = (0 xor 2) = 2
    $encoded[2] = (2 xor 1) = 3

## Example 2:

    Input: @encoded = (6, 2, 7, 3), $initial = 4
    Output: (4, 2, 0, 7, 4)

<br>

File: decode-xor

```raku
#! /usr/bin/env raku
                                         # [1]
unit sub MAIN (*@encoded where @encoded.elems > 0 && all(@encoded) ~~ Int,
               Int :i(:$initial),        # [2]
               :v(:$verbose));

my @output = $initial;                   # [3]
my $source = $initial;                   # [4]

for @encoded -> $current                 # [5]
{
  my $original = $current +^ $source;    # [6]
  say ": ($source xor $original = $current)" if $verbose;

  $source = $original;                   # [7]
  @output.push: $original;               # [8]
}

say "({ @output.join(", ") })";          # [9]
```

<br>


`[1]` A slurpy array with the encoded values; at least one element, and integers only.

`[2]` The initial value, as a named argument.

`[3]` The output, where the first value is the initial value.

`[4]` The left hand of each `XOR` operation.

`[5]` Iterate over the encoded values.

`[6]` Calculate the original value, using the binary `XOR` (Exclusive Or) `+^` operator. Note that we have reordered the operands and the result, as the order does not matter at all for this spesific operator.

 See [docs.raku.org/routine/+$CIRCUMFLEX_ACCENT](https://docs.raku.org/routine/+$CIRCUMFLEX_ACCENT) for more information about the `XOR` operator `+^`.

`[7]` Prepare for the next iteration.

`[8]` Add the value.

`[9]` Pretty print ther result.

<br>

Running it:

<br>

```bash
$ ./decode-xor -i=1 1 2 3
(1, 0, 2, 1)

$ ./decode-xor -i=4 6 2 7 3
(4, 2, 0, 7, 4)
```

<br>

Looking good.

With verbose mode:

<br>

```bash
$ ./decode-xor -v -i=1 1 2 3
: (1 xor 0 = 1)
: (0 xor 2 = 2)
: (2 xor 1 = 3)
(1, 0, 2, 1)

$ ./decode-xor -v -i=4 6 2 7 3
: (4 xor 2 = 6)
: (2 xor 0 = 2)
: (0 xor 7 = 7)
: (7 xor 4 = 3)
(4, 2, 0, 7, 4)
```

<br>

And that's it.

<br>

***

If you have any suggestion then please do share with us **<perlweeklychallenge@yahoo.com>**.

| &nbsp; [**Advent Calendar 2025**](/blog/advent-calendar-2025) &nbsp; |
