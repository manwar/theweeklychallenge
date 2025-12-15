---
title: "Advent Calendar - December 15, 2025"
date: 2025-12-15T00:00:00+00:00
description: "Advent Calendar - December 15, 2025."
type: post
image: images/blog/2025-12-15.jpg
author: Packy Anderson
tags: ["Perl","Python","Raku","Elixir"]
---

## [**Advent Calendar 2025**](/blog/advent-calendar-2025)
### | &nbsp; [**Day 14**](/blog/advent-calendar-2025-12-14) &nbsp; | &nbsp; **Day 15** &nbsp; |
***

The gift is presented by `Packy Anderson`. Today he is talking about his solutioni to [**The Weekly Challenge - 319**](/blog/perl-weekly-challenge-319). This is re-produced for `Advent Calendar 2025` from the original [**post**](https://packy.dardan.com/2025/05/02/perl-weekly-challenge-count-the-minimum-common-word).

***

<br>

This week in the Perl Weekly Challenge, I’m free associating. I want to use a Bag for task 2, and my wife has a bag from her production of Ragtime two and a half years ago that whenever she uses it, I sing [🎶 The people called it Bag-time… 🎶](https://www.youtube.com/watch?v=CCzfQ935CXc&list=PLvu0IdKH7R6NUi5fGQnNjBWfpriCNPyEk)

So let’s be the Perl on the swing for [**Perl Weekly Challenge 319**](https://theweeklychallenge.org/blog/perl-weekly-challenge-319).

<br>

## Task 1: Word Count

You are given a list of words containing alphabetic characters only.

Write a script to return the count of words either starting with a vowel or ending with a vowel.

## Example 1

    Input: @list = ("unicode", "xml", "raku", "perl")
    Output: 2

    The words are "unicode" and "raku".

## Example 2

    Input: @list = ("the", "weekly", "challenge")
    Output: 2

## Example 3

    Input: @list = ("perl", "python", "postgres")
    Output: 0

<br>

## Approach

This problem really calls for regular expressions.

## Raku

I always want to challenge myself when using [**Raku Regexes**](https://docs.raku.org/language/regexes); I’ve been writing Perl-style regexes for more than 2/5th of my life, so it’s easy to just fall into the old habits. But part of what I want to do with PWC is learn all the neat features in Raku, so I decided to use the [**named regex definition syntax**](https://docs.raku.org/language/regexes#Named_regex_definition_syntax).

One of the things I had to suss out was how to interpolate the `vowels` regex into the `starts_or_ends_with_vowel` regex. My first attempt, `{ ^ &vowels || &vowels $ }`, failed miserably. It only matched words starting with vowels. So I read up on [**Regex interpolation**](https://docs.raku.org/language/regexes#Regex_interpolation), and discovered that I wanted to wrap those named regexes in `<{ }>`.

But in going through the documentation I also discovered that I could anchor my regex in places other than the beginning or end of the string (or lines). Perl has a word boundary match, \b, but Raku lets you match at the [**left and right word boundary**](https://docs.raku.org/language/regexes#Left_and_right_word_boundary) as well!

<br>

```raku
my regex vowels { <[aeiou]> };

my regex starts_or_ends_with_vowel {
  « <{&vowels}> # left word boundry followed by a vowel
  ||            # or
  <{&vowels}> » # a vowel followed by the right word boundry
};

sub wordCount(@list) {
  my @matched;
  for @list -> $word {
    @matched.push($word) if $word ~~ &starts_or_ends_with_vowel;
  }
  return @matched.elems;
}
```

<br>

[**View the entire Raku script for this task on GitHub.**](https://github.com/packy/perlweeklychallenge-club/blob/master/challenge-319/packy-anderson/raku/ch-1.raku)

<br>

```bash
$ raku/ch-1.raku
Example 1:
Input: @list = ("unicode", "xml", "raku", "perl")
Output: 2

Example 2:
Input: @list = ("the", "weekly", "challenge")
Output: 2

Example 3:
Input: @list = ("perl", "python", "postgres")
Output: 0
```

<br>

## Perl

In converting this to Perl, I kept the structure I established in the Raku version, but went with the familiar Perl-ish ways to do things: instead of named regexes, I assigned [**qr// compiled regexes**](https://perldoc.perl.org/perlop#Regexp-Quote-Like-Operators) to variables, and since Perl doesn’t support left or right word word boundaries, I just used a [**non-specific word boundary (\b)**](https://arc.net/l/quote/zocdmdaw).

<br>

```perl
my $vowels = qr{[aeiou]};

my $starts_or_ends_with_vowel = qr{
  \b $vowels # word boundry followed by a vowel
  |          # or
  $vowels \b # a vowel followed by a word boundry
}x;

sub wordCount(@list) {
  my @matched;
  foreach my $word (@list) {
    push @matched, $word
      if $word =~ /$starts_or_ends_with_vowel/;
  }
  return scalar(@matched);
}
```

<br>

[**View the entire Perl script for this task on GitHub.**](https://github.com/packy/perlweeklychallenge-club/blob/master/challenge-319/packy-anderson/perl/ch-1.pl)

<br>

## Python

In Python, of course, we need to import the [**re module**](https://docs.python.org/3/library/re.html) to provide regular expressions. If we build the regular expression as a string, we can then pass it as the first argument to [**re.search()**](https://docs.python.org/3/library/re.html#re.search) to scan the string for matches. We `don’t` want to use [**re.match**](https://docs.python.org/3/library/re.html#search-vs-match), because that would only match at the beginning of the string, an the only string we’d match would be `unicode`.

<br>

```python
import re

vowels = '[aeiou]'

starts_or_ends_with_vowel = rf'\b{vowels}|{vowels}\b'

def wordCount(word_list):
  matched = []
  for word in word_list:
    if re.search(starts_or_ends_with_vowel, word):
      matched.append(word)
  return len(matched)
```

<br>

[**View the entire Python script for this task on GitHub.**](https://github.com/packy/perlweeklychallenge-club/blob/master/challenge-319/packy-anderson/python/ch-1.py)

<br>

## Elixir

One of the things I wanted to do this time around with Elixir is use something I keep seeing at work, [**Module attributes**](https://hexdocs.pm/elixir/module-attributes.html). Basically, this is a way to define constants in the module, and it would work perfectly with the way I was using `vowels` and `starts_or_ends_with_vowel`. Because I was interpolating a value into `starts_or_ends_with_vowel`, I needed to build it as a string (and specify `\b` as `\\b` because otherwise it would become `\x08`) and then pass it through [**Regex.compile!/2**](https://hexdocs.pm/elixir/Regex.html#compile!/2).

<br>

```elixir
  @vowels "[aeiou]"

  @starts_or_ends_with_vowel Regex.compile!(
    "\\b#{@vowels}|#{@vowels}\\b"
  )

  def wordCount(words) do
    {_, matched} = Enum.map_reduce(words, [], fn word, list ->
      list = if Regex.match?(@starts_or_ends_with_vowel, word) do
        [ word | list ]
      else
        list
      end
      # always have to return the both
      # the value and the accumulator
      {word, list}
    end)
    length(matched)
  end
```

<br>

[**View the entire Elixir script for this task on GitHub.**](https://github.com/packy/perlweeklychallenge-club/blob/master/challenge-319/packy-anderson/elixir/ch-1.exs)

<br>

## Task 2: Minimum Common

You are given two arrays of integers.

Write a script to return the minimum integer common to both arrays. If none found return -1.

## Example 1

    Input: @array_1 = (1, 2, 3, 4)
           @array_2 = (3, 4, 5, 6)
    Output: 3

    The common integer in both arrays: 3, 4
    The minimum is 3.

## Example 2

    Input: @array_1 = (1, 2, 3)
           @array_2 = (2, 4)
    Output: 2

## Example 3

    Input: @array_1 = (1, 2, 3, 4)
           @array_2 = (5, 6, 7, 8)
    Output: -1

<br>

## Approach

As I said at the start of this post, I saw this problem and thought [**“Bag!”**](https://docs.raku.org/type/Bag) Take the first array, make it into a Bag, then loop through the second array and find elements that are in the first array though the bag. Only keep the minimum element.

<br>

## Raku

But when I actually started working on the problem in Raku, I remembered that Raku has a lot of cool [**Set operations**](https://docs.raku.org/language/setbagmix). I could turn both arrays into a Set, find the common elements using [**the intersection (∩) operator**](https://docs.raku.org/language/setbagmix#infix_(&),_infix_%E2%88%A9), and then find the minimum from that set.

<br>

```raku
sub minCommon(@arr1, @arr2) {
  my $set1   = Set.new(@arr1);
  my $set2   = Set.new(@arr2);
  my $common = $set1 ∩ $set2;
  if ($common) {
    return min($common.keys);
  }
  return -1;
}
```

<br>

[**View the entire Raku script for this task on GitHub.**](https://github.com/packy/perlweeklychallenge-club/blob/master/challenge-319/packy-anderson/raku/ch-2.raku)

<br>

```bash
$ raku/ch-2.raku
Example 1:
Input: @array_1 = (1, 2, 3, 4)
       @array_2 = (3, 4, 5, 6)
Output: 3

Example 2:
Input: @array_1 = (1, 2, 3)
       @array_2 = (2, 4)
Output: 2

Example 3:
Input: @array_1 = (1, 2, 3, 4)
       @array_2 = (5, 6, 7, 8)
Output: -1
```

<br>

## Perl

Perl, as I discovered back in [**PWC #285**](https://packy.dardan.com/2024/09/02/perl-weekly-challenge-exact-change-only), doesn’t have a built-in set type, so I’m using the [**Set::Scalar**](https://metacpan.org/pod/Set::Scalar) module again.

<br>

```perl
use Set::Scalar;
use List::AllUtils qw( min );

sub minCommon($arr1, $arr2) {
  my $set1   = Set::Scalar->new(@$arr1);
  my $set2   = Set::Scalar->new(@$arr2);
  my $common = $set1 * $set2;
  if ($common) {
    return min($common->elements);
  }
  return -1;
}
```

<br>

[**View the entire Perl script for this task on GitHub.**](https://github.com/packy/perlweeklychallenge-club/blob/master/challenge-319/packy-anderson/perl/ch-2.pl)

<br>

## Python

Again, in [**PWC #285**](https://packy.dardan.com/2024/09/02/perl-weekly-challenge-exact-change-only) I mentioned that [**sets are built in to Python**](https://docs.python.org/3.8/library/stdtypes.html#set-types-set-frozenset), and they’re pretty easy to use.

<br>

```python
def minCommon(arr1, arr2):
  set1   = set(arr1)
  set2   = set(arr2)
  common = set1.intersection(set2)
  if common:
    return min(list(common))
  return -1
```

<br>

[**View the entire Python script for this task on GitHub.**](https://github.com/packy/perlweeklychallenge-club/blob/master/challenge-319/packy-anderson/python/ch-2.py)

<br>

## Elixir

[**MapSet**](https://hexdocs.pm/elixir/MapSet.html) is the module for manipulating sets in Elixir.

<br>

```elixir
  def minCommon(arr1, arr2) do
    set1   = MapSet.new(arr1)
    set2   = MapSet.new(arr2)
    common = MapSet.intersection(set1, set2)
    cond do
      MapSet.size(common) == 0 -> -1
      true -> common |> MapSet.to_list |> Enum.min
    end
  end
```

<br>

[**View the entire Elixir script for this task on GitHub.**](https://github.com/packy/perlweeklychallenge-club/blob/master/challenge-319/packy-anderson/elixir/ch-2.exs)

Here’s all my solutions in GitHub: [**https://github.com/packy/perlweeklychallenge-club/tree/master/challenge-319/packy-anderson**](https://github.com/packy/perlweeklychallenge-club/tree/master/challenge-319/packy-anderson)

<br>

***

If you have any suggestion then please do share with us **<perlweeklychallenge@yahoo.com>**.

| &nbsp; [**Advent Calendar 2025**](/blog/advent-calendar-2025) &nbsp; |
