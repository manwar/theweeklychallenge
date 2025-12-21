---
title: "Advent Calendar - December 21, 2025"
date: 2025-12-21T00:00:00+00:00
description: "Advent Calendar - December 21, 2025."
type: post
image: images/blog/2025-12-21.jpg
author: Feng Chang
tags: ["Raku"]
---

## [**Advent Calendar 2025**](/blog/advent-calendar-2025)
### | &nbsp; [**Day 20**](/blog/advent-calendar-2025-12-20) &nbsp; | &nbsp; **Day 21** &nbsp; |
***

The gift is presented by `Feng Chang`. Today he is talking about his solutioni to [**The Weekly Challenge - 347**](/blog/perl-weekly-challenge-347). This is re-produced for `Advent Calendar 2025` from the original [**post**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-347/feng-chang/raku/ch-1.ipynb).

***

<br>

## PWC347, Task 1 Format Date

Following is my ch-1.raku script:

<br>

```raku
#!/bin/env raku

unit sub MAIN(Str:D $s);

my %months = <Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec> Z=> 1..12;
my ($day, $mon, $yr) = $s.words;
printf '%d-%02d-%02d', $yr, %months{$mon}, $day.substr(0,*-2);
```

<br>

`Z=>` is a more readable approach to define a `hash` in `Raku` when dealing with `sequences`, e.g.,

<br>

```raku
my %letters = 'a'..'z' Z=> 1..26;
put %letters.raku;
```

<br>

```bash
{:a(1), :b(2), :c(3), :d(4), :e(5), :f(6), :g(7), :h(8), :i(9), :j(10), :k(11), :l(12), :m(13), :n(14), :o(15), :p(16), :q(17), :r(18), :s(19), :t(20), :u(21), :v(22), :w(23), :x(24), :y(25), :z(26)}
```

<br>

`.words` is convenient in translating sentences into a `list of words`:

<br>

put `.words` is convienent in translate sentences into a list of words `.words.raku;`

<br>

("`.words`", "is", "convienent", "in", "translate", "sentences", "into", "a", "list", "of", "words").Seq

`.substr(0,*-2)` cuts the last 2 characters off from a string:

<br>

```raku
put 'abcdefgYZ'.substr(0,*-2);
```

<br>

```bash
abcdefg
```

<br>

***

If you have any suggestion then please do share with us **<perlweeklychallenge@yahoo.com>**.

| &nbsp; [**Advent Calendar 2025**](/blog/advent-calendar-2025) &nbsp; |
