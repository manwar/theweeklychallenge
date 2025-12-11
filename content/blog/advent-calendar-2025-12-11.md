---
title: "Advent Calendar - December 11, 2025"
date: 2025-12-11T00:00:00+00:00
description: "Advent Calendar - December 11, 2025."
type: post
image: images/blog/2025-12-11.jpg
author: Adam Russell
tags: ["Perl"]
---

## [**Advent Calendar 2025**](/blog/advent-calendar-2025)
### | &nbsp; [**Day 10**](/blog/advent-calendar-2025-12-10) &nbsp; | &nbsp; **Day 11** &nbsp; |
***

The gift is presented by `Adam Russell`. Today he is talking about his solutioni to [**The Weekly Challenge - 313**](/blog/perl-weekly-challenge-313). This is re-produced for `Advent Calendar 2025` from the original [**post**](http://rabbitfarm.com/cgi-bin/blosxom/perl/2025/03/23).

***

<br>

## Reverse Broken Keys for Letters

<br>

The examples used here are from the weekly challenge problem statement and demonstrate the working solution.

<br>

## Part 1: Broken Keys

You have a broken keyboard which sometimes type a character more than once. You are given a string and actual typed string. Write a script to find out if the actual typed string is meant for the given string.

What we’re faced with here is a problem of removing consecutive duplicated letters. The trick is that some letters may be correctly duplicated in succession! For example “coffeescript”has two f’s and two e’s which are not in error. We’re given the correct version so wee need to track the current correct letter and find deviations.

Another special case to consider is when the deviations occur at the end of the string and we get all of the same repeated letters as in the “rrakuuuu”example. To address this we check if the repeated letters remaining match the last known good letter.

Our solution is to loop over the letters in the candidate string guided by the original word. We do this all in one subroutine, the code is not so unwieldy to need to be broken into smaller pieces.

⟨loop and compare 1 ⟩≡

<br>

```perl
    sub loop_compare{
        my($n, $s) = @_;
        my @n = split //, $n;
        my @s = split //, $s;
        my $current_n  = q//;
        my $current_s = q//;
        {
            my $previous_n = $current_n;
            $current_n = shift @n;
            $current_s = shift @s;
            if($current_s ne $current_n && $current_s eq $previous_n){
                unshift @n, $current_n;
                {
                    $current_s = shift @s;
                    redo if $current_s eq $previous_n && @s > 0;
                    unshift @s, $current_s;
                }
            }
            return 0 if $current_s ne $current_n && $current_s ne $previous_n;
            redo if @n > 0 && @s > 0;
        }
        return 1 if (@n == 0 && @s ==0) || (@s == grep {$_ eq $current_s} @s);
        return 0;
    }
```

<br>

Fragment referenced in 2.

We really just need one subroutine to co-ordinate the inputs and run the main loop that’s required.

Putting it all together...

<br>

"ch-1.pl" 2≡

```bash
    ⟨preamble 3 ⟩
    ⟨loop and compare 1 ⟩
    ⟨main 4 ⟩
```

<br>

⟨preamble 3 ⟩≡

<br>

```perl
  use v5.40;
```

<br>

Fragment referenced in 2, 9.

The rest of the code just runs some simple tests.

⟨main 4 ⟩≡

<br>

```perl
  MAIN:{
    say loop_compare q/perl/, q/perrrl/;
    say loop_compare q/raku/, q/rrakuuuu/;
    say loop_compare q/python/, q/perl/;
    say loop_compare q/coffeescript/, q/cofffeescccript/;
  }
```

<br>

Fragment referenced in 2.

Sample Run

<br>

```bash
$ perl perl/ch-1.pl
1
1
0
1
```

<br>

## Part 2: Reverse Letters

You are given a string. Write a script to reverse only the alphabetic characters in the string.

First we separate the alphabetic characters from the string, then we reverse them, then we finish by recombining the reversed alphabetic characters with the non-alphabetic characters.

<br>

⟨remove alphabetic characters 5 ⟩≡

<br>

```perl
    my $a = [grep {$_ =~ m/[[:alpha:]]/} @{$s}];
```

<br>

Fragment referenced in 8.

<br>

```bash
Defines: $a 6, 7.

Uses: $s 8.
```

<br>

⟨reverse the alphabetic characters 6 ⟩≡

<br>

```perl
    $a = [reverse @{$a}];
```

<br>

```bash
Fragment referenced in 8.

Uses: $a 5.
```

<br>

⟨combine the sorted alphabetic characters with the non-alphabetic characters 7 ⟩≡

<br>

```perl
    {
        my $c = shift @{$s};
        push @{$reverse_letters}, $c if $c !~ m/[[:alpha:]]/;
        push @{$reverse_letters}, shift @{$a} if $c =~ m/[[:alpha:]]/;
        redo if @{$s} > 0;
    }
```

<br>

```bash
Fragment referenced in 8.

Uses: $a 5, $reverse_letters 8, $s 8.
```

<br>

We’ll put everything together in a single subroutine.

⟨reverse_letters: co-ordinates all the swaps and checks 8 ⟩≡

<br>

```perl
  sub reverse_letters{
      my($s) = (@_);
      $s = [split //, $s];
      my $reverse_letters = [];
      ⟨remove alphabetic characters 5 ⟩
      ⟨reverse the alphabetic characters 6 ⟩
      ⟨combine the sorted alphabetic characters with the non-alphabetic characters 7 ⟩
      return join q//, @{$reverse_letters};
  }
```

<br>

```bash
Fragment referenced in 9.

Defines: $reverse_letters 7, $s 5, 7.
```

<br>

The rest of the code drives some tests.

"ch-2.pl" 9≡

<br>

```bash
    ⟨preamble 3 ⟩
    ⟨reverse_letters: co-ordinates all the swaps and checks 8 ⟩
    ⟨main 10 ⟩
```

<br>

⟨main 10 ⟩≡

<br>

```perl
  MAIN:{
    say reverse_letters q/p-er?l/;
    say reverse_letters q/wee-k!L-y/;
    say reverse_letters q/_c-!h_all-en!g_e/;
  }
```

<br>

Fragment referenced in 9.

Sample Run

<br>

```bash
$ perl perl/ch-2.pl
l-re?p
yLk-e!e-w
_e-!g_nel-la!h_c
```

<br>

## References

<br>

[**The Weekly Challenge 313**](https://theweeklychallenge.org/blog/perl-weekly-challenge-313)

[**Generated Code**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-313/adam-russell)

<br>

***

If you have any suggestion then please do share with us **<perlweeklychallenge@yahoo.com>**.

| &nbsp; [**Advent Calendar 2025**](/blog/advent-calendar-2025) &nbsp; |
