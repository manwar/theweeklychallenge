---
title: "Advent Calendar - December 19, 2023"
date: 2023-12-19T00:00:00+00:00
description: "Advent Calendar - December 19, 2023."
type: post
image: images/blog/2023-12-19.jpg
author: Packy Anderson
tags: ["Perl", "Raku", "Python"]
---

## [**Advent Calendar 2023**](/blog/advent-calendar-2023)
### | &nbsp; [**Day 18**](/blog/advent-calendar-2023-12-18) &nbsp; | &nbsp; **Day 19** &nbsp; |
***

The gift is presented by `Packy Anderson`. Today he is talking about his solution to [**The Weekly Challenge - 234**](/blog/perl-weekly-challenge-234). This is re-produced for `Advent Calendar 2023` from the original [**post**](https://packy.dardan.com/2023/09/12/perl-weekly-challenge-common-but-unequal-triplet-characters).

***

<br>

## Common, but Unequal, Triplet Characters
***

Ok, trying to be creative with my title for this week’s `Perl Weekly Challenge 334` blog title is probably a miss. But it’s the effort that counts!

<br>

### Task 1: Common Characters

    You are given an array of words made up of alphabetic characters only.
    Write a script to return all alphabetic characters that show up in all words including duplicates.

    Example 1
        Input: @words = ("java", "javascript", "julia")
        Output: ("j", "a")

    Example 2
        Input: @words = ("bella", "label", "roller")
        Output: ("e", "l", "l")

    Example 3
        Input: @words = ("cool", "lock", "cook")
        Output: ("c", "o")

<br>

So, looking at this problem, I see that in addition to preserving duplicated characters, the sample output (I’m glad Mohammed fixed the typo `"Ouput"` that’s been persistent in the past few weeks) is preserving the order of the characters based on the first word in the input list.

Since I’m looking for a new coding gig, I’ve been taking some coding tests, and one of the strategies the preparations for coding tests encourages is to look for patterns in the data once you’ve done an initial pass over it. One of the things I notice in this task is that it feels like [**a combination of the two tasks from last the challenge**](https://theweeklychallenge.org/blog/perl-weekly-challenge-233/#TASK1). We’re splitting the words into characters, and we’re counting the frequency of those characters. Any character that has a frequency of `1 or greater` in each word occurs once, any character that has a frequency of `2 or greater` in each word occurs `twice`, and so on.

This will get us the frequencies of the characters for each word:

<br>

```perl
sub charFrequency {
  my $word = shift;
  my %freq;
  foreach my $c ( split //, $word ) {
    $freq{$c}++;
  }
  return \%freq; # return a hash REFERENCE
}
```

<br>

Then we need to find the common characters:

<br>

```perl
sub commonCharacters {
  my @words = @_;
  my @freq = map { charFrequency($_) } @words;
  # grab the character frequency map for the first word
  my $first = shift @freq;
  # now check the characters in the first word against
  # the characters in all the subsequent words
  foreach my $subsequent ( @freq ) {
    foreach my $c ( keys %$first ) {
      if (! exists $subsequent->{$c}) {
        # this character isn't in subsequent words,
        # so let's remove it from the frequency map
        # of the first word
        delete $first->{$c};
      }
      else {
        # the character IS in subsequent words,
        # so let's set the frequency count to be
        # the minimum count found in those words
        $first->{$c} = min($first->{$c}, $subsequent->{$c});
      }
    }
  }
}
```

<br>

But that’s not enough to satisfy the problem: we need to output the characters in the order they appear in the first word. So let’s add to this function:

<br>

```perl
sub commonCharacters {
  ...
  # now we generate a list of characters in the order they
  # appear in the first word
  my @output;
  # once again, loop over the characters in the first word
  foreach my $c ( split //, $words[0] ) {
    next unless exists $first->{$c};
    if ($first->{$c} > 1) {
      # there's more than one occurence, so let's decrement
      # the count for the next time through the loop
      $first->{$c}--;
    }
    else {
      # there is only one occurence left, so remove the
      # character
      delete $first->{$c};
    }
    push @output, $c;
  }
  return @output;
}
```

<br>

Which, as an entire script, looks like this:

<br>

```perl
#!/usr/bin/env perl

use v5.38;

use List::Util qw( min );

sub charFrequency {
  my $word = shift;
  my %freq;
  foreach my $c ( split //, $word ) {
    $freq{$c}++;
  }
  return \%freq; # return a hash REFERENCE
}

sub commonCharacters {
  my @words = @_;
  my @freq = map { charFrequency($_) } @words;
  # grab the character frequency map for the first word
  my $first = shift @freq;
  # now check the characters in the first word against
  # the characters in all the subsequent words
  foreach my $subsequent ( @freq ) {
    foreach my $c ( keys %$first ) {
      if (! exists $subsequent->{$c}) {
        # this character isn't in subsequent words,
        # so let's remove it from the frequency map
        # of the first word
        delete $first->{$c};
      }
      else {
        # the character IS in subsequent words,
        # so let's set the frequency count to be
        # the minimum count found in those words
        $first->{$c} = min($first->{$c}, $subsequent->{$c});
      }
    }
  }

  # now we generate a list of characters in the order they
  # appear in the first word
  my @output;
  # once again, loop over the characters in the first word
  foreach my $c ( split //, $words[0] ) {
    next unless exists $first->{$c};
    if ($first->{$c} > 1) {
      # there's more than one occurence, so let's decrement
      # the count for the next time through the loop
      $first->{$c}--;
    }
    else {
      # there is only one occurence left, so remove the
      # character
      delete $first->{$c};
    }
    push @output, $c;
  }
  return @output;
}

sub solution {
  my @words = @_;
  say 'Input: @words = ("' . join('", "', @words) . '")';
  my @output = commonCharacters(@words);
  say 'Output: ("' . join('", "', @output) . '")';
}

say "Example 1:";
solution("java", "javascript", "julia");

say "\nExample 2:";
solution("bella", "label", "roller");

say "\nExample 3:";
solution("cool", "lock", "cook");
```

<br>

Things to note in the `Raku` solution:

<br>

* When splitting a string into its component characters, make sure you add the `:skip-empty` parameter,
  otherwise you’ll get leading and trailing empty character entries.
* Deleting elements from a hash isn’t a method call, it’s a Subscript Adverb, `:delete`.
* Similarly, testing for the existence of an element is the Subscript Adverb `:exists`.
* If you try to use the construction ! `$hash{$key}:exists`, you get the error Precedence issue
  with ! and `:exists`, perhaps you meant `:!exists`?

<br>

```perl
#!/usr/bin/env raku

use v6;

sub charFrequency(Str $word) {
  my %freq;
  for $word.split('', :skip-empty) -> $c {
    %freq{$c}++;
  }
  return %freq;
}

sub commonCharacters(*@words where ($_.all ~~ Str)) {
  my @freq = @words.map({ charFrequency($_) });
  # grab the character frequency map for the first word
  my $first = shift @freq;
  # now check the characters in the first word against
  # the characters in all the subsequent words
  for @freq -> $subsequent {
    for $first.keys() -> $c {
      if ($subsequent{$c}:!exists) {
        # this character isn't in subsequent words,
        # so let's remove it from the frequency map
        # of the first word
        $first{$c}:delete;
      }
      else {
        # the character IS in subsequent words,
        # so let's set the frequency count to be
        # the minimum count found in those words
        $first{$c} = min($first{$c}, $subsequent{$c});
      }
    }
  }

  # now we generate a list of characters in the order they
  # appear in the first word
  my @output;
  # once again, loop over the characters in the first word
  for @words[0].split('', :skip-empty) -> $c  {
    next unless $first{$c}:exists;
    if ($first{$c} > 1) {
      # there's more than one occurence, so let's decrement
      # the count for the next time through the loop
      $first{$c}--;
    }
    else {
      # there is only one occurence left, so remove the
      # character
      $first{$c}:delete;
    }
    push @output, $c;
  }
  return @output;
}

sub solution {
  my @words = @_;
  say 'Input: @words = ("' ~ @words.join('", "') ~ '")';
  my @output = commonCharacters(@words);
  say 'Output: ("' ~ @output.join('", "') ~ '")';
}

say "Example 1:";
solution("java", "javascript", "julia");

say "\nExample 2:";
solution("bella", "label", "roller");

say "\nExample 3:";
solution("cool", "lock", "cook");
```

<br>

Things to note in the `Python` solution:

<br>

* You don’t shift elements off the beginning of an array, you pop the `0th element`.
* You don’t push elements onto the end of an array, you append them
* There’s [**a Counter type in the collections module**](https://docs.python.org/3/library/collections.html#counter-objects)
  that lets you essentially autovivify elements in a dictionary by adding to them
* In both `Perl` and `Raku`, the keys function/method for a hash returned a list that
  we were then able to iterate over, so we could remove elements from the hash while
  we were looping over it. Not so in `Python: RuntimeError:` dictionary changed size
  during iteration. This is easily handled by making a copy of the dictionary and
  looping over that.

<br>

```perl
#!/usr/bin/env python

from collections import Counter

def charFrequency(word):
    # https://docs.python.org/3/library/collections.html#counter-objects
    freq = Counter()
    for c in word:
        freq[c] += 1
    return freq

def commonCharacters(words):
    # get the character freqencies for each word
    freq = list(map(charFrequency, words))

    # grab the character frequency map for the first word
    first = freq.pop(0)

    # make a copy of the dictionary since we'll
    # be modifying it in the loop
    first_orig = dict(first)

    # now check the characters in the first word against
    # the characters in all the subsequent words
    for subsequent in freq:
        for c in first_orig:
            if c not in subsequent:
                # this character isn't in subsequent words,
                # so let's remove it from the frequency map
                # of the first word
                first.pop(c)
            else:
                # the character IS in subsequent words,
                # so let's set the frequency count to be
                # the minimum count found in those words
                first[c] = min(first[c], subsequent[c])

    # now we generate a list of characters in the order they
    # appear in the first word
    output = []
    # once again, loop over the characters in the first word
    for c in words[0]:
        if c not in first:
            continue
        if first[c] > 1:
            first[c] -= 1
        else:
            first.pop(c)
        output.append(c)
    return output

def solution(words):
    quoted = '"' + '", "'.join(words) + '"'
    print(f'Input: @words = ({quoted})')
    output = commonCharacters(words)
    quoted = '"' + '", "'.join(output) + '"'
    print(f'Output: ({quoted})')

print("Example 1:")
solution(["java", "javascript", "julia"])

print("\nExample 2:")
solution(["bella", "label", "roller"])

print("\nExample 3:")
solution(["cool", "lock", "cook"])
```

<br>

But this does go towards demonstrating something I’ve been saying for years: `Python` isn’t all that different than `Perl`. It just makes some different decisions and tries to cut down on [**TMTOWTDI**](https://perldoc.perl.org/perlglossary#TMTOWTDI) as much as possible.

<br>

### Task 2: Unequal Triplets

    You are given an array of positive integers.

    Write a script to find the number of triplets (i, j, k) that satisfies num[i] != num[j], num[j] != num[k] and num[k] != num[i].

    Example 1
        Input: @ints = (4, 4, 2, 4, 3)
        Ouput: 3

        (0, 2, 4) because 4 != 2 != 3
        (1, 2, 4) because 4 != 2 != 3
        (2, 3, 4) because 2 != 4 != 3

    Example 2
        Input: @ints = (1, 1, 1, 1, 1)
        Ouput: 0

    Example 3
        Input: @ints = (4, 7, 1, 10, 7, 4, 1, 1)
        Output: 28

        triplets of 1, 4, 7  = 3x2×2 = 12 combinations
        triplets of 1, 4, 10 = 3×2×1 = 6  combinations
        triplets of 4, 7, 10 = 2×2×1 = 4  combinations
        triplets of 1, 7, 10 = 3x2x1 = 6 combinations

<br>

 think this time I’m going to break from my tradition of spitting out the exact explanatory text and just generate something that looks like the first example.

The meat of this solution is just a triple-nested loop:

<br>

```perl
sub findTriplets {
  my @ints = @_;
  my @solutions;
  foreach my $i ( 0 .. $#ints - 2 ) {
    foreach my $j ( $i+1 .. $#ints - 1 ) {
      foreach my $k ( $j+1 .. $#ints ) {
        if ($ints[$i] != $ints[$j] &&
            $ints[$j] != $ints[$k] &&
            $ints[$i] != $ints[$k]) {
          push @solutions, [$i, $j, $k];
        }
      }
    }
  }
  return @solutions;
}
```

<br>

The rest of the code is just formatting the results:

<br>

```perl
#!/usr/bin/env perl

use v5.38;

sub findTriplets {
  my @ints = @_;
  my @solutions;
  foreach my $i ( 0 .. $#ints - 2 ) {
    foreach my $j ( $i+1 .. $#ints - 1 ) {
      foreach my $k ( $j+1 .. $#ints ) {
        if ($ints[$i] != $ints[$j] &&
            $ints[$j] != $ints[$k] &&
            $ints[$i] != $ints[$k]) {
          push @solutions, [$i, $j, $k];
        }
      }
    }
  }
  return @solutions;
}

sub solution {
  my @ints = @_;
  say 'Input: @ints = (' . join(', ', @ints) . ')';
  my @solutions = findTriplets(@ints);
  say 'Output: ' . scalar(@solutions);
  say "" if @solutions;
  foreach my $triplet ( @solutions ) {
    my($i, $j, $k) = @$triplet;
    say "($i, $j, $k) because "
      . "$ints[$i] != $ints[$j] != $ints[$k]";
  }
}

say "Example 1:";
solution(4, 4, 2, 4, 3);

say "\nExample 2:";
solution(1, 1, 1, 1, 1);

say "\nExample 3:";
solution(4, 7, 1, 10, 7, 4, 1, 1);
```

<br>

And the output from the third example looks like this:

<br>

    Example 3:
    Input: @ints = (4, 7, 1, 10, 7, 4, 1, 1)
    Output: 28

    (0, 1, 2) because 4 != 7 != 1
    (0, 1, 3) because 4 != 7 != 10
    (0, 1, 6) because 4 != 7 != 1
    (0, 1, 7) because 4 != 7 != 1
    (0, 2, 3) because 4 != 1 != 10
    (0, 2, 4) because 4 != 1 != 7
    (0, 3, 4) because 4 != 10 != 7
    (0, 3, 6) because 4 != 10 != 1
    (0, 3, 7) because 4 != 10 != 1
    (0, 4, 6) because 4 != 7 != 1
    (0, 4, 7) because 4 != 7 != 1
    (1, 2, 3) because 7 != 1 != 10
    (1, 2, 5) because 7 != 1 != 4
    (1, 3, 5) because 7 != 10 != 4
    (1, 3, 6) because 7 != 10 != 1
    (1, 3, 7) because 7 != 10 != 1
    (1, 5, 6) because 7 != 4 != 1
    (1, 5, 7) because 7 != 4 != 1
    (2, 3, 4) because 1 != 10 != 7
    (2, 3, 5) because 1 != 10 != 4
    (2, 4, 5) because 1 != 7 != 4
    (3, 4, 5) because 10 != 7 != 4
    (3, 4, 6) because 10 != 7 != 1
    (3, 4, 7) because 10 != 7 != 1
    (3, 5, 6) because 10 != 4 != 1
    (3, 5, 7) because 10 != 4 != 1
    (4, 5, 6) because 7 != 4 != 1
    (4, 5, 7) because 7 != 4 != 1

<br>

Things to note in the `Raku` solution:

Because `.elems` returns the number of elements in the array, we need to subtract an additional 1 to get the index of the last value.

<br>

```perl
#!/usr/bin/env raku

use v6;

sub findTriplets(@ints where ($_.all ~~ Int)) {
  my @solutions;
  for 0 .. @ints.elems - 3 -> $i {
    for $i + 1 .. @ints.elems - 2 -> $j {
      for $j + 1 .. @ints.elems - 1 -> $k {
        if (@ints[$i] != @ints[$j] &&
            @ints[$j] != @ints[$k] &&
            @ints[$i] != @ints[$k]) {
          push @solutions, [$i, $j, $k];
        }
      }
    }
  }
  return @solutions;
}

sub solution {
  my @ints = @_;
  say 'Input: @ints = (' ~ @ints.join(', ') ~ ')';
  my @solutions = findTriplets(@ints);
  say 'Output: ' ~ @solutions.elems;
  say "" if @solutions;
  for @solutions -> @triplet {
    my ($i, $j, $k) = @triplet;
    say "($i, $j, $k) because "
      ~ "@ints[$i] != @ints[$j] != @ints[$k]";
  }
}

say "Example 1:";
solution(4, 4, 2, 4, 3);

say "\nExample 2:";
solution(1, 1, 1, 1, 1);

say "\nExample 3:";
solution(4, 7, 1, 10, 7, 4, 1, 1);
```

<br>

Things to note in the `Python` solution:

The `Python` equivalent of `x .. y` is `range(x, y)`
You can’t just `.join()` a list of integers. You need to call `.join()` on the string you want to join them with, and convert each of the integers into strings: `", ".join([ str(i) for i in ints ])`

(though last week, I did it like this; `', '.join(map(lambda i: str(i), ints)))`

Interpolating values in strings got a lot easier in `Python 3.6` with the addition of `f-strings`.

<br>

```perl
#!/usr/bin/env python

def findTriplets(ints):
    solutions = []
    for i in range(0, len(ints) - 3 ):
        for j in range(i + 1, len(ints) - 2):
            for k in range(j + 1, len(ints) - 1):
                if (ints[i] != ints[j] and
                    ints[j] != ints[k] and
                    ints[i] != ints[k]):
                    solutions.append([i, j, k])
    return solutions

def solution(ints):
    intlist = ", ".join([ str(i) for i in ints ])
    print(f'Input: @ints = ({intlist})')
    solutions = findTriplets(ints)
    print(f'Output: {len(solutions)}')
    if solutions:
        print("")
        for triplet in solutions:
            i, j, k = triplet
            print(
                f"({i}, {j}, {k}) because " +
                f"{ints[i]} != {ints[j]} != {ints[k]}"
            )

print("Example 1:")
solution([4, 4, 2, 4, 3])

print("\nExample 2:")
solution([1, 1, 1, 1, 1])

print("\nExample 3:")
solution([4, 7, 1, 10, 7, 4, 1, 1])
```

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

| &nbsp; [**Advent Calendar 2023**](/blog/advent-calendar-2023) &nbsp; |
