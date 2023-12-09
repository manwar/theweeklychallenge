---
title: "Advent Calendar - December 8, 2023"
date: 2023-12-08T00:00:00+00:00
description: "Advent Calendar - December 8, 2023."
type: post
image: images/blog/2023-12-08.jpg
author: Flavio Poletti
tags: ["Perl", "Raku"]
---

## [**Advent Calendar 2023**](/blog/advent-calendar-2023)
### | &nbsp; [**Day 7**](/blog/advent-calendar-2023-12-07) &nbsp; | &nbsp; **Day 8** &nbsp; | &nbsp; [**Day 9**](/blog/advent-calendar-2023-12-09) &nbsp; |
***

The gift is presented by `Flavio Poletti`. Today he is talking about his solution to [**The Weekly Challenge - 214**](/blog/perl-weekly-challenge-214). This is re-produced for `Advent Calendar 2023` from the original [**post**](https://etoobusy.polettix.it/2023/04/28/pwc214-collect-points).

***

<br>

## The challenge
***

    You are given a list of numbers.

    You will perform a series of removal operations. For each operation, you remove from
    the list N (one or more) equal and consecutive numbers, and add to your score N × N.

    Determine the maximum possible score.

<br>

### Example 1:
***

    Input: @numbers = (2,4,3,3,3,4,5,4,2)
    Output: 23

    We see three 3's next to each other so let us remove that first and collect 3 x 3 points.
    So now the list is (2,4,4,5,4,2).

    Let us now remove 5 so that all 4's can be next to each other and collect 1 x 1 point.
    So now the list is (2,4,4,4,2).
    Time to remove three 4's and collect 3 x 3 points.
    Now the list is (2,2).
    Finally remove both 2's and collect 2 x 2 points.
    So the total points collected is 9 + 1 + 9 + 4 => 23.

### Example 2:
***

    Input: @numbers = (1,2,2,2,2,1)
    Output: 20

    Remove four 2's first and collect 4 x 4 points.
    Now the list is (1,1).
    Finally remove the two 1's and collect 2 x 2 points.
    So the total points collected is 16 + 4 => 20.

### Example 3:
***

    Input: @numbers = (1)
    Output: 1

### Example 4:
***

    Input: @numbers = (2,2,2,1,1,2,2,2)
    Output: 40

    Remove two 1's = 2 x 2 points.
    Now the list is (2,2,2,2,2,2).
    Then reomove six 2's = 6 x 6 points.

***

<br>

## The questions
***

No questions in particular, except maybe if there are possible assumptions about the length of the inputs. I mean, for short inputs, a brute-forceish solution is definitely viable…

## The solution
***

First of all, we’ll transform the inputs in pairs of value and counts. We will keep them in an array with values in even positions (starting at 0) and counts in odd positions. Don’t ask.

Then we will operate on these slots. Those whose value occur only once can be eliminated at any time, so the sooner the better. Those occurring multiple times… will require some search, and we’ll look for them all because time is running!

### Perl

```perl
#!/usr/bin/env perl
use v5.24;
use warnings;
use experimental 'signatures';
use Memoize 'memoize';
use Data::Dumper;

say collect_points(@ARGV ? @ARGV : (2, 4, 4, 3, 4, 4, 3, 3, 3, 3, 5, 3));

sub collect_points (@numbers) {
   return 0 unless @numbers;
   my @slots = ($numbers[0], 1);
   for my $i (1 .. $#numbers) {
      if ($numbers[$i - 1] == $numbers[$i]) {
         $slots[-1]++;
      }
      else {
         push @slots, $numbers[$i], 1;
      }
   }
   return collect_points_wh(@slots);
}

sub remove_slot ($i, @slots) {
   splice(@slots, $i, 2);

   # check for merge
   if ($i > 0 && $i < @slots && $slots[$i - 2] == $slots[$i]) {
      $slots[$i - 1] += $slots[$i + 1];
      splice(@slots, $i, 2);
   }

   return @slots;
}

sub collect_points_wh (@slots) {
   my $score = 0;

   while ('necessary') {
      my %count_for;

      my $i = 0;
      while ($i < @slots) {
         ($count_for{$slots[$i]} //= 0)++;
         $i += 2;
      }

      my %is_single = map { $_ => 1 }
         grep { $count_for{$_} == 1 } keys %count_for;
      last unless scalar keys %is_single;

      $i = 0;
      while ($i < @slots) {
         if ($is_single{$slots[$i]}) {
            $score += $slots[$i + 1] ** 2;
            @slots = remove_slot($i, @slots);
         }
         else {
            $i += 2;
         }
      }
   }

   my $i = 0;
   my $best_sub_score = 0;
   while ($i < @slots) {
      my @sub_slots = remove_slot($i, @slots);
      my $sub_score = collect_points_wh(@sub_slots);
      $best_sub_score = $sub_score if $best_sub_score < $sub_score;
      $i += 2;
   }

   $score += $best_sub_score;
   return $score;
}
```

<br>

### Raku

```raku
#!/usr/bin/env raku
use v6;
sub MAIN (*@args) { put collect-points(@args) }

sub collect-points (@numbers) {
   return 0 unless @numbers;
   my @slots = @numbers[0], 1;
   for 1 ..^ @numbers -> $i {
      if @numbers[$i - 1] == @numbers[$i] {
         @slots[*-1]++;
      }
      else {
         @slots.push: @numbers[$i], 1;
      }
   }
   return collect-points-wh(@slots);
}

sub collect-points-wh (@slots) {
   my $score = 0;

   loop {
      my %count-for;

      my $i = 0;
      while $i < @slots {
         (%count-for{@slots[$i]} //= 0)++;
         $i += 2;
      }

      my %is-single = %count-for.keys.grep({ %count-for{$_} == 1 })
         .map({ $_ => True });
      last unless %is-single.elems;

      $i = 0;
      while $i < @slots {
         if %is-single{@slots[$i]} {
            $score += @slots[$i + 1] ** 2;
            @slots = remove-slot($i, @slots);
         }
         else {
            $i += 2;
         }
      }
   }

   my $i = 0;
   my $best-sub-score = 0;
   while $i < @slots {
      my @sub-slots = remove-slot($i, @slots);
      my $sub-score = collect-points-wh(@sub-slots);
      $best-sub-score = $sub-score if $best-sub-score < $sub-score;
      $i += 2;
   }

   $score += $best-sub-score;
   return $score;
}

sub remove-slot ($i, @slots is copy) {
   @slots.splice($i, 2);
   if $i > 0 && $i < @slots && @slots[$i - 2] == @slots[$i] {
      @slots[$i - 1] += @slots[$i + 1];
      @slots.splice($i, 2);
   }
   return @slots;
}
```

<br>

Well… enough for today, I’m pretty late so I’ll better hurry up!

Cheers and… stay safe!

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

| &nbsp; [**Advent Calendar 2023**](/blog/advent-calendar-2023) &nbsp; |
