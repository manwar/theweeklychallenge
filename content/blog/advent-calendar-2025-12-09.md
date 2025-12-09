---
title: "Advent Calendar - December 9, 2025"
date: 2025-12-09T00:00:00+00:00
description: "Advent Calendar - December 9, 2025."
type: post
image: images/blog/2025-12-09.jpg
author: Roger Bell_West
tags: ["Raku", "Perl"]
---

## [**Advent Calendar 2025**](/blog/advent-calendar-2025)
### | &nbsp; [**Day 8**](/blog/advent-calendar-2025-12-08) &nbsp; | &nbsp; **Day 9** &nbsp; |
***

The gift is presented by `Roger Bell_West`. Today he is talking about his solutioni to [**The Weekly Challenge - 311**](/blog/perl-weekly-challenge-311). This is re-produced for `Advent Calendar 2025` from the original [**post**](https://blog.firedrake.org/archive/2025/03/The_Weekly_Challenge_311__Lower_the_Sum.html).

***

<br>

I’ve been doing the [**Weekly Challenges**](http://theweeklychallenge.org). [**The latest**](https://theweeklychallenge.org/blog/perl-weekly-challenge-311) involved case swapping and character grouping. (Note that this ends today.)

## Task 1: Upper Lower

    You are given a string consists of english letters only.

    Write a script to convert lower case to upper and upper case to lower in the given string.

<br>

There's an obvious logic to this:

<br>

```perl
if char.is_upper() {
  lowercase char
} else {
  uppercase char
}
```

<br>

but instead I can take advantage of `ASCII`'s encoding, such that flipping bit `5 (0x10)` of a letter swaps its case.

<br>

`Raku`:

```raku
sub upperlower($a) {
    my $out = '';
    for $a.comb -> $c {
        $out ~= chr(ord($c) +^ 32);
    }
    $out;
}
```

<br>

And I rather like clarity of the `PostScript` version, though it does rely on some of my library functions (converting string to array and back, and map to apply its function to all elements in an array).

<br>

```perl
/upperlower {
    s2a
    { 32 xor } map
    a2s
} bind def
```

<br>

## Task 2: Group Digit Sum

    You are given a string, $str, made up of digits, and an integer, $int, which is less than the length of the given string.

    Write a script to divide the given string into consecutive groups of size $int (plus one for leftovers if any). Then sum the digits of each group, and concatenate all group sums to create a new string. If the length of the new string is less than or equal to the given integer then return the new string, otherwise continue the process.

<br>

Stating the problem clearly pretty much lays out the route to the solution. In `Crystal`:

<br>

```perl
def groupdigitsum(a, sz)
```

<br>

Make a working copy of the string, and initialise the accumulator.

<br>

```bash
  s = a
  n = 0
```

<br>

Infinitely loop.

<br>

```perl
  while true
```

<br>

Initialise output string.

<br>


```perl
    t = ""
```

<br>

Iterate over characters of input string, with an index value.

<br>

```perl
    s.chars.each_with_index do |c, i|
```

<br>

Add the digit value to the accumulator.

<br>

```perl
      n += c.to_i
```

<br>

If we've hit the end of the string or a group boundary, flush the accumulator to the output string and zero it.

<br>

```perl
      if i == s.size - 1 || (i + 1) % sz == 0
        t += n.to_s
        n = 0
      end
    end
```

<br>

Copy output string to next input.

<br>

```perl
    s = t
```

<br>

If it's short enough, break out of the lopo and return it.

<br>

```perl
    if s.size <= sz
      break
    end
  end
  s
end
```

<br>

Full code [**on github**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-311/roger-bell-west).

<br>

***

If you have any suggestion then please do share with us **<perlweeklychallenge@yahoo.com>**.

| &nbsp; [**Advent Calendar 2025**](/blog/advent-calendar-2025) &nbsp; |
