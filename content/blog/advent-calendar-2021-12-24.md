---
title: "Advent Calendar - December 24, 2021"
date: 2021-12-24T00:00:00+00:00
description: "Advent Calendar - December 24, 2021."
type: post
image: images/blog/2021-12-24.jpg
author: Flavio Poletti
tags: ["Perl"]
---

## [**Advent Calendar 2021**](/blog/advent-calendar-2021)
### | [**Day 23**](/blog/advent-calendar-2021-12-23) | **Day 24** | [**Day 25**](/blog/advent-calendar-2021-12-25) |
***

The gift is presented by [**Flavio Poletti**](/blog/meet-the-champion-2021-07). Today he is talking about his solution to [**"The Weekly Challenge - 094"**](/blog/perl-weekly-challenge-094). This is re-produced for **Advent Calendar 2021** from the original [**post**](https://github.polettix.it/ETOOBUSY/2021/01/06/pwc094-group-anagrams) by `Flavio Poletti`.

***

<br>

## Task #2: Group Anagrams

You are given an array of strings @S. Write a script to group Anagrams together in any random order.

<br>

    An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

<br>

## The questions

<br>

I guess that in all these puzzles that invove messing with characters the first question would be… what encoding should I consider? Here we are basically assuming that our words are restricted to the `26 lowercase letters` in the `latin alphabeth…` but is this actually the case?!?

The second thing is… an assumption. I hope we’re all good with the output from `Data::Dumper`

<br>

## The solution

<br>


Here is the boring solution that came to mind:

<br>

```perl
sub group_anagrams (@S) {
   my %group_for;
   for my $item (@S) {
      my $key = join '',
         sort { $a cmp $b }
         map { lc }
         split m{}mxs, $item;
      push $group_for{$key}->@*, $item;
   }
   return [values %group_for];
}
```

<br>

Well… maybe not exactly boring, because there’s a lot going on.

We iterate over all input strings, using `$item` as the iteration variable.

Then, our goal is to find out a key that will be common to all words that belong to the same set but will be different from the key of words in any other set.

One way to do this is to rearrange all letters in the specific word in lexicographic order. In this way we will have a sort of fake anagram, a possibly inexistent word that shares the same letters as the word in `$item`.

To do this, we…

<br>

    * divide $item in a list of characters via split;
    * make sure all characters are lowercase (I suspect that we should aim for some fold case here but I’ll not be too picky);
    * sort the resulting lowercased characters lexicographically;
    * merge these characters back into a string.

<br>

This gives us `$key`. At this point, we just add this new `$item` to an array where we keep all anagrams of this `$key`.

The last thing we have to do is… return all such arrays, and we’re done!

If you want to play with the whole thing… here it is:

<br>

```perl
#!/usr/bin/env perl
use 5.024;
use warnings;
use experimental qw< postderef signatures >;
no warnings qw< experimental::postderef experimental::signatures >;
use Data::Dumper; $Data::Dumper::Indent = 1;

sub group_anagrams (@S) {
   my %group_for;
   for my $item (@S) {
      my $key = join '',
         sort { $a cmp $b }
         map { lc }
         split m{}mxs, $item;
      push $group_for{$key}->@*, $item;
   }
   return [values %group_for];
}

say Dumper group_anagrams(@ARGV);
```

<br>

Stay safe!

***
If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2021**](/blog/advent-calendar-2021)
