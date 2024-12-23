---
title: "Advent Calendar - December 22, 2024"
date: 2024-12-22T00:00:00+00:00
description: "Advent Calendar - December 22, 2024."
type: post
image: images/blog/2024-12-22.jpg
author: Packy Anderson
tags: ["Perl", "Raku", "Python", "Elixir"]
---

## [**Advent Calendar 2024**](/blog/advent-calendar-2024)
### | &nbsp; [**Day 21**](/blog/advent-calendar-2024-12-21) &nbsp; | &nbsp; **Day 22** &nbsp; | &nbsp; [**Day 23**](/blog/advent-calendar-2024-12-23) &nbsp; |
***

The gift is presented by `Packy Anderson`. Today he is talking about his solution to [**The Weekly Challenge - 286**](/blog/perl-weekly-challenge-286). This is re-produced for `Advent Calendar 2024` from the original [**post**](https://packy.dardan.com/2024/09/09/perl-weekly-challenge-spammer-game/).

***

<br>

## Spammer Game
***

For some reason, my brain saw “Order Game” and I thought [**“Circle Game“**](https://youtu.be/5NEkJhBHh54?si=bmaZZiacHZj9Ppxt). Perhaps because my wife and I watched a `Joni Mitchell` documentary last week.

Anyway, let’s go round and round to the [**Perl Weekly Challenge 286**](https://theweeklychallenge.org/blog/perl-weekly-challenge-286).

<br>

### Task #1: Self Spammer

    Write a program which outputs one word of its own script / source code at random.

    A word is anything between whitespace, including symbols.

<br>

### Approach
***

I fell out of my `Raku-first` approach because I immediately knew what I wanted to do in `Perl`.

### Perl
***

I knew I was going to use [**the __FILE__ token**](https://perldoc.perl.org/functions/__FILE__) to read the program contents. But I’m always cautious and I want to see things working in intermediate steps as I write it, so once I read the contents and split them into words, I dumped the output to make sure I was getting what I thought I should.

<br>

```perl
#!/usr/bin/env perl
use v5.40;

my @words;
open my $fh, '<', __FILE__;
while (my $line = <$fh>) {
  push @words, split /\s+/, $line;
}
close $fh;

use Data::Dumper::Concise; print Dumper(\@words);
```

<br>

```perl
$ perl/ch-1.pl
[
  "#!/usr/bin/env",
  "perl",
  "use",
  "v5.40;",
  "my",
  "\@words;",
  "open",
  "my",
  "\$fh,",
  "'<',",
  "__FILE__;",
  "while",
  "(my",
  "\$line",
  "=",
  "<\$fh>)",
  "{",
  "",
  "push",
  "\@words,",
  "split",
  "/\\s+/,",
  "\$line;",
  "}",
  "close",
  "\$fh;",
  "use",
  "Data::Dumper::Concise;",
  "print",
  "Dumper(\\\@words);",
]
```

<br>

Wait, what’s happening on `line 20` of the output? I’m getting an empty string, and that’s not a word by the definition of the problem, so I’d have a `1/30` chance of printing `invalid` output. So I looked at how it’s happening.

The line that produces it is `line 7` in my input script, because the line starts with whitespace, and my split on whitespace will produce an empty element just like splitting the string ,`A,B,C` on commas will produce a leading empty element. I could strip the line of leading and trailing whitespace before splitting it, or I could strip out empty elements from the result of the split. The latter was the solution that first came to me:

<br>

```perl
#!/usr/bin/env perl
use v5.40;

my @words;
open my $fh, '<', __FILE__;
while (my $line = <$fh>) {
  push @words, grep { length($_) } split /\s+/, $line;
}
close $fh;

use Data::Dumper::Concise; print Dumper(\@words);
```

<br>

```perl
$ perl/ch-1.pl
[
  "#!/usr/bin/env",
  "perl",
  "use",
  "v5.40;",
  "my",
  "\@words;",
  "open",
  "my",
  "\$fh,",
  "'<',",
  "__FILE__;",
  "while",
  "(my",
  "\$line",
  "=",
  "<\$fh>)",
  "{",
  "push",
  "\@words,",
  "grep",
  "{",
  "length(\$_)",
  "}",
  "split",
  "/\\s+/,",
  "\$line;",
  "}",
  "close",
  "\$fh;",
  "use",
  "Data::Dumper::Concise;",
  "print",
  "Dumper(\\\@words);",
]
```

<br>

Great! Now I just get rid of the `Dumper` import and print, and replace it with a statement to print out a word from `@words` at random. [**rand(N)**](https://perldoc.perl.org/functions/rand) will get us a random fractional numbers from `0 – N`. We can pass this through int to get integers, and if we want to include `N` in the possible output, we need to add `1 to N`:

<br>

```perl
#!/usr/bin/env perl
use v5.40;

my @words;
open my $fh, '<', __FILE__;
while (my $line = <$fh>) {
  push @words, grep { length($_) } split /\s+/, $line;
}
close $fh;

say $words[ int(rand($#words + 1)) ];
```

<br>

[**View the entire Perl script for this task on GitHub**](https://github.com/packy/perlweeklychallenge-club/blob/master/challenge-286/packy-anderson/perl/ch-1.pl).

<br>

```perl
$ perl/ch-1.pl
v5.40;
$ perl/ch-1.pl
(my
$ perl/ch-1.pl
];
```

<br>

### Raku
***

Two of the the tasks for implementing this in `Raku` were things I’d never done before: reading files and specifically getting the name of current file. Fortunately, for the latter, there’s [**a compile-time variable, $?FILE**](https://docs.raku.org/language/variables#Compile-time_variables). For reading files, [**I went to the docs**](https://docs.raku.org/language/io). I found out `slurp` is built into `Raku`, so I was able to bundle reading the entire file, splitting it into non-empty entries and putting that all in an array into a single line. Note that I’m passing the result of the split through [**the Slip class**](https://docs.raku.org/type/Slip) so it’s `flattened` as it’s appended to `@words`.

<br>

```perl
#!/usr/bin/env raku
use v6;

my @words = $?FILE.IO.slurp.split(/\s+/, :skip-empty).Slip;

say @words[ (0 .. @words.elems).rand.Int ];
```

<br>

[**View the entire Raku script for this task on GitHub**](https://github.com/packy/perlweeklychallenge-club/blob/master/challenge-286/packy-anderson/raku/ch-1.raku).

<br>

### Python
***

In another example of my `“Python is just like Perl, only weirder”` mantra, `Python` as it’s own `__file__` token. And [**split**](https://docs.python.org/3/library/stdtypes.html#str.split) handles the problem of leading whitespace for us:

<br>

    If sep is not specified or is None, a different splitting algorithm is applied: runs of consecutive whitespace are regarded as a single separator, and the result will contain no empty strings at the start or end if the string has leading or trailing whitespace.

<br>

To add the split elements to the list without adding them as lists themselves, we want to use [**extend**](https://arc.net/l/quote/ptuvvgxz), and to get the randomized word, we want to use [**randrange from the random module**](https://docs.python.org/3/library/random.html#random.randrange).

<br>

```perl
#!/usr/bin/env python

from random import randrange

words = []
with open(__file__) as fh:
  words.extend(fh.read().split())

print(f'{ words[ randrange( len(words) ) ] }')
```

<br>

[**View the entire Python script for this task on GitHub**](https://github.com/packy/perlweeklychallenge-club/blob/master/challenge-286/packy-anderson/python/ch-1.py).

<br>

### Elixir
***

In `Elixir`, the current file [**can be obtained through __ENV__.file**](https://hexdocs.pm/elixir/Kernel.SpecialForms.html#__ENV__/0), and [**Enum.random/1**](https://hexdocs.pm/elixir/1.17.2/Enum.html#random/1) will produce a random element from an enumerable, so we don’t have to figure out what the length of the word list is, we can just pass the list in and get back a random element.

<br>

```perl
#!/usr/bin/env elixir

{:ok, contents} = File.read(__ENV__.file)
word = contents
       |> String.split(~r{\s+}, trim: true)
       |> Enum.random
IO.puts(word)
```

<br>

[**View the entire Elixir script for this task on GitHub**](https://github.com/packy/perlweeklychallenge-club/blob/master/challenge-286/packy-anderson/elixir/ch-1.exs).

<br>

### Task #2: Order Game

    You are given an array of integers, @ints, whose length is a power of 2.

    Write a script to play the order game (min and max) and return the last element.

<br>

### Approach
***

Really, the trickiest bit of this is keeping track of whether you’re doing a `min` or a `max`. I decided to just use an integer 1 that I then multiplied by `-1` each time through to `flip back and forth`.

<br>

### Raku
***

I might have found some clever way to avoid repeating code, but it seemed most straightforward to just have an `if/else` that handled calling the functions.

<br>

```perl
sub orderGame(@ints is copy) {
  my $loop = 0;
  my @explain;
  while (@ints.elems > 1) {
    my @new;
    $loop++;
    @explain.push("Operation $loop:");
    @explain.push("");
    my $flip = 1;
    for @ints -> $a, $b {
      my ($val, $func);
      if ($flip == 1) {
        $val = min($a, $b);
        $func = 'min';
      }
      else { # $flip is -1
        $val = max($a, $b);
        $func = 'max';
      }
      @new.push($val);
      @explain.push("    $func" ~ "($a, $b) = $val");
      $flip *= -1; # switch from min to max and back
    }
    @explain.push("");
    @ints = @new; # replace list with new list
  }
  return @ints[0], @explain.join("\n");
}
```

<br>

When I tried to use the string `" $func($a, $b) = $val"` on `line 24`, I got `No such method 'CALL-ME' for string 'min'` because it was trying to turn `$func($a, $b)` into an actual `function call`.

[**View the entire Raku script for this task on GitHub**](https://github.com/packy/perlweeklychallenge-club/blob/master/challenge-286/packy-anderson/raku/ch-2.raku).

<br>

```perl
$ raku/ch-2.raku
Example 1:
Input: @ints = (2, 1, 4, 5, 6, 3, 0, 2)
Output: 1

Operation 1:

    min(2, 1) = 1
    max(4, 5) = 5
    min(6, 3) = 3
    max(0, 2) = 2

Operation 2:

    min(1, 5) = 1
    max(3, 2) = 3

Operation 3:

    min(1, 3) = 1


Example 2:
Input: @ints = (0, 5, 3, 2)
Output: 0

Operation 1:

    min(0, 5) = 0
    max(3, 2) = 3

Operation 2:

    min(0, 3) = 0


Example 3:
Input: @ints = (9, 2, 1, 4, 5, 6, 0, 7, 3, 1, 3, 5, 7, 9, 0, 8)
Output: 2

Operation 1:

    min(9, 2) = 2
    max(1, 4) = 4
    min(5, 6) = 5
    max(0, 7) = 7
    min(3, 1) = 1
    max(3, 5) = 5
    min(7, 9) = 7
    max(0, 8) = 8

Operation 2:

    min(2, 4) = 2
    max(5, 7) = 7
    min(1, 5) = 1
    max(7, 8) = 8

Operation 3:

    min(2, 7) = 2
    max(1, 8) = 8

Operation 4:

    min(2, 8) = 2
```

<br>

### Perl
***

The `Perl` looks just like the `Raku` because, frankly, I wrote the `Raku like Perl`. Note, however, I don’t have to avoid string interpolation turning into a function call on `line 26`.

<br>

```perl
use List::AllUtils qw( min max );

sub orderGame(@ints) {
  my $loop = 0;
  my @explain;
  while (@ints > 1) {
    my @new;
    $loop++;
    push @explain, "Operation $loop:";
    push @explain, "";
    my $flip = 1;
    foreach my($a, $b) ( @ints ) {
      my ($val, $func);
      if ($flip == 1) {
        $val = min($a, $b);
        $func = 'min';
      }
      else { # $flip is -1
        $val = max($a, $b);
        $func = 'max';
      }
      push @new, $val;
      push @explain, "    $func($a, $b) = $val";
      $flip *= -1; # switch from min to max and back
    }
    push @explain, "";
    @ints = @new; # replace list with new list
  }
  return $ints[0], join("\n", @explain);
}
```

<br>

[**View the entire Perl script for this task on GitHub**](https://github.com/packy/perlweeklychallenge-club/blob/master/challenge-286/packy-anderson/perl/ch-2.pl).

<br>

### Python
***

First, I thought I’d use [**the pairwise function in the itertools module**](https://docs.python.org/3/library/itertools.html#itertools.pairwise), but I found out that given the list `1, 2, 3, 4` it returned pairs `(1, 2), (2, 3), (3, 4)`, which is not what I wanted. However, the documentation did say the function was roughly equivalent to

<br>

```perl
def pairwise(iterable):
    # pairwise('ABCDEFG') → AB BC CD DE EF FG
    iterator = iter(iterable)
    a = next(iterator, None)
    for b in iterator:
        yield a, b
        a = b
```

<br>

And I saw an easy way to modify that to produce the results I wanted. Rather than assigning the value of `b` to `a` for the `next loop` through the `iterator`, just assign a the `next value` of the `iterator` like we do before we enter the `for loop`, thus consuming the value and leaving the value after that for `b`…

<br>

```perl
def pairwise(iterable):
  # pairwise('ABCDEFGH') → AB CD EF GH
  iterator = iter(iterable)
  a = next(iterator, None)
  for b in iterator:
    yield a, b
    a = next(iterator, None)

def orderGame(ints):
  loop = 0
  explain = []
  while (len(ints) > 1):
    new = []
    loop += 1
    explain.append(f"Operation {loop}:")
    explain.append("")
    flip = 1
    for a, b in pairwise(ints):
      if (flip == 1):
        val = min(a, b)
        func = 'min'
      else: # $flip is -1
        val = max(a, b)
        func = 'max'
      new.append(val)
      explain.append(f"    {func}({a}, {b}) = {val}")
      flip *= -1; # switch from min to max and back
    explain.append("")
    ints = new # replace list with new list
  return ints[0], "\n".join(explain)
```

<br>

[**View the entire Python script for this task on GitHub**](https://github.com/packy/perlweeklychallenge-club/blob/master/challenge-286/packy-anderson/python/ch-2.py).

<br>

### Elixir
***

For the `Elixir` solution, I go back to using [**Enum.map_reduce/3**](https://hexdocs.pm/elixir/1.17.2/Enum.html#map_reduce/3) to loop over our list, but first I pass it through [**Enum.chunk_every/2**](https://hexdocs.pm/elixir/1.17.2/Enum.html#chunk_every/2) to chunk the list into pairs. In the accumulator for `map_reduce`, I’m keeping two pieces of information, the flip that I’m using to `flip` between the `min` and `max` functions, and the explain list I’m using to hold my list of operations. The function called by map_reduce has to return a tuple of the result of the operation (min/max) and the accumulator.

<br>

```perl
  def orderGame(ints, explain, loop) when length(ints) == 1 do
    { List.first(ints), Enum.join(explain, "\n") }
  end

  def orderGame(ints, explain, loop) do
    pairs = Enum.chunk_every(ints, 2)
    explain = explain ++ [ "Operation #{loop}:", "" ]
    acc = %{ flip: 1, explain: explain }
    { newints, acc } = Enum.map_reduce(pairs, acc, fn x, acc ->
      a = List.first(x)
      b = List.last(x)
      { val, func } = if acc[:flip] == 1 do # min
        { min(a, b), "min" }
      else # max
        { max(a, b), "max" }
      end
      {
        val,
        acc
        |> Map.put(:explain, acc[:explain] ++
           [ "    #{func}(#{a}, #{b}) = #{val}" ])
        |> Map.put(:flip, acc[:flip] * -1)
      }
    end)
    acc = acc |> Map.put(:explain, acc[:explain] ++ [ "" ])
    orderGame(newints, acc[:explain], loop+1)
  end

  def orderGame(ints) do
    orderGame(ints, [], 1)
  end
```

<br>

[**View the entire Elixir script for this task on GitHub**](https://github.com/packy/perlweeklychallenge-club/blob/master/challenge-286/packy-anderson/elixir/ch-2.exs).

Here’s all my solutions in GItHub: [**https://github.com/packy/perlweeklychallenge-club/tree/master/challenge-286/packy-anderson**](https://github.com/packy/perlweeklychallenge-club/tree/master/challenge-286/packy-anderson)

<br>

***

If you have any suggestion then please do share with us **<perlweeklychallenge@yahoo.com>**.

| &nbsp; [**Advent Calendar 2024**](/blog/advent-calendar-2024) &nbsp; |
