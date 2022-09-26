---
author:       Colin Crain
date:         2022-09-26T00:00:00
description:  "Colin Crain › Perl Weekly Review #177"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #177"
image:        images/blog/p5-review-challenge-177.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-176/).* )

Welcome to the Perl review pages for **Week 177** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

---

### ●︎ Why do we do these challenges?

I suppose any reasonable answer to that question would come from a field as wide ranging and varied as the people who choose to join the team. One thing, though, is clear: it's not a competition, and there are no judges, even if there is a "prize" of sorts. About that -- I think of it more as an honorarium periodically awarded to acknowledge the efforts we make towards this strange goal. So there's no determination to find the *fastest*, or the *shortest*, or even, in some abstract way, the *best* way to go about things, although I'm certain the participants have their own aspirations and personal drives. As Perl is such a wonderfully expressive language, this provides quite a bit of fodder to the core idea of TMTOWTDI, producing a gamut of varied techniques and solutions.

Even the tasks themselves are often open to a certain amount of discretionary interpretation. What we end up with is a situation where each participant is producing something in the manner they personally find the most interesting and satisfying. Some team members will focus on carefully crafted complete applications, thoroughly vetting input data and handling every use case they can think up. Others choose to apply themselves to the logic of the underlying puzzle and making it work in the most elegant way they can. Some eschew modules they would ordinarily reach for, others embrace them, bringing to light wheels perhaps invented years ago that happen to exactly solve the problem in front of them today.

I've been considering this question for some time and have found one binding commonality between all of us out solving these challenges each week, in that however we normally live our lives, the task in front of us more than likely has nothing to do with any of that. And I think this has great value. We all do what we do, in the real world, and hopefully we do it well. The Weekly Challenge provides us with an opportunity to do something germane to that life yet distinctly different; if we only do the things we already know how to do then we will only do the same things over and over. This is where the "challenge" aspect comes into play.

So we can consider The Weekly Challenge as providing a problem space outside of our comfort zone, as far out from that comfort as we wish to take things. From those reaches we can gather and learn things, pick and choose and bring what we want back into our lives. Personally, I think that's what this whole thing is about. YMMV.

---

<strong><emp>Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due.</emp></strong>

And that, my friends, is why I'm here: to try and figure out ways to do just that.

So that's that... I'm ready now — let’s go in and see what we can find.

---

### For Added Context

Before we begin, you may wish to revisit either the pages for the [**original tasks**](/blog/perl-weekly-challenge-177/) or the summary [**recap**](/blog/recap-challenge-177/) of the challenge. But don't worry about it, the challenge text will be repeated and presented as we progress from task to task.

Oh, and one ***more*** thing before we finally get started:

<br>

### Getting in Touch with Us
***

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please feel free to email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

***

<br>

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

<br>

### Enough? Fine. So without even further ado...

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC177TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC177TASK2)   &nbsp;  &nbsp;  &nbsp;       •   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC177BLOGS)    &nbsp;  &nbsp;  &nbsp;       •

---

# TASK 1 {#PWC177TASK1}

# Damm Algorithm
*Submitted by: Mohammad S Anwar*

You are given a positive number, $n.

Write a script to validate the given number against the included check digit.

Please checkout the [wikipedia page](https://en.wikipedia.org/wiki/Damm_algorithm) for information.

**Example 1**
```
    Input: $n = 5724
    Output: 1 as it is valid number
```


**Example 2**
```
    Input: $n = 5727
    Output: 0 as it is invalid number
```



## about the solutions
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/adam-russell/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/athanasius/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/colin-crain/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/james-smith/perl/ch-1.pl),
[**Kjetil Skotheim**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/kjetillll/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/laurent-rosenfeld/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/mattneleigh/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/mohammad-anwar/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/peter-campbell-smith/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/sgreen/perl/ch-1.pl),
[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/steve-g-lynn/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/ulrich-rieke/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/wlmb/perl/ch-1.pl), and
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/walt-mankowski/perl/ch-1.pl)

The [Damm algorithm](https://en.wikipedia.org/wiki/Damm_algorithm) describes an interesting approach to inserting check-digits into numeric data. It has the two advantages of being simple, and hence fast, and using the same process repeated for both encoding and verifying. The algorithm defines a mathematical basis that can be implemented in any specific manner that satisfies the requirements. Damm in his initial paper provides several specific lookup tables for the process as examples.

There were 20 submissions for the first task this past week.

## A SELECTION of SUBMISSIONS
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/athanasius/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/jaldhar-h-vyas/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/laurent-rosenfeld/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/colin-crain/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/wlmb/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/polettix/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/peter-campbell-smith/perl/ch-1.pl),
[**Kjetil Skotheim**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/kjetillll/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/mohammad-anwar/perl/ch-1.pl), and
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/adam-russell/perl/ch-1.pl)



The essence of the algorithm is to to break a numeric data stream into a sequence of digits, then use each digit and an interim temporary value to cross-index a two-dimensional lookup table, the result of which is used as a new interim value for the next lookup. After counting a predetermined number of digits, or some scheme such as all of the digits, the interim value is inserted into the stream. The intrim digit can then be reset to 0 and  the process restarted if any digits remain to be counted.

Most submissions used one of Damm's example quasigroup tables, as they are known, for the lookup, as being a precomputed table the access time is fixed anyway. We did however see one novel counterexample, which is interesting (if not exactly illuminating, so don't get your hopes up).

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/athanasius/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/athanasius/raku/ch-1.raku)

The monk Athanasius will start with a demonstration of the algoritm. Their `check_digit()` routine shows the simplicity of the continually updated interim lookup index operation.

```perl
    use Const::Fast;
    const my @OP_TABLE =>
    (
        [ 0, 3, 1, 7, 5, 9, 8, 6, 4, 2 ],
        [ 7, 0, 9, 2, 1, 5, 4, 8, 6, 3 ],
        [ 4, 2, 0, 6, 8, 7, 1, 3, 5, 9 ],
        [ 1, 7, 5, 0, 9, 8, 3, 4, 2, 6 ],
        [ 6, 1, 2, 3, 0, 4, 5, 9, 7, 8 ],
        [ 3, 6, 7, 4, 2, 0, 9, 5, 8, 1 ],
        [ 5, 8, 6, 9, 7, 2, 0, 1, 3, 4 ],
        [ 8, 9, 4, 5, 3, 6, 2, 0, 1, 7 ],
        [ 9, 4, 3, 8, 6, 1, 7, 2, 0, 5 ],
        [ 2, 5, 8, 1, 4, 3, 6, 7, 9, 0 ],
    );

    sub check_digit
    {
        my ($number)       = @_;
        my  $interim_digit = 0;

        for my $digit (split //, $number)
        {
            $interim_digit = $OP_TABLE[ $interim_digit ][ $digit ];
        }

        return $interim_digit;
    }
```

The returned value is the check digit, and the beauty of this algorithm is that if we perform the exact same steps but *include* the trailing check digit the result will, if the lookup table is constructed on the proper underlying mathematics, always resolve to the value 0.

This make validation quite simple.

```perl
    my $valid  = check_digit( $n ) == 0 ? 1 : 0;
```

A nice verbose option is provided as well, to walk us through the steps taken.

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/jaldhar-h-vyas/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/jaldhar-h-vyas/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 177](https://www.braincells.com/perl/2022/08/perl_weekly_challenge_week_177.html)

The algorithm itself adds no additional aritmetic, just performing a sequence of lookups in a precomputed table, once per digit. The mathematical basis is all taken care of when constructing the table, which is fixed and hard-coded.

```perl
    sub checkdigit {
        my ($n) = @_;
        my @digits = split //, $n;
        my $interim = 0;

        for my $i (@digits) {
            $interim = lookup($i, $interim);
        }

        return $interim;
    }

    sub lookup {
        my ($col, $row) = @_;

        my @table = (
            [ 0, 3, 1, 7, 5, 9, 8, 6, 4, 2 ],
            [ 7, 0, 9, 2, 1, 5, 4, 8, 6, 3 ],
            [ 4, 2, 0, 6, 8, 7, 1, 3, 5, 9 ],
            [ 1, 7, 5, 0, 9, 8, 3, 4, 2, 6 ],
            [ 6, 1, 2, 3, 0, 4, 5, 9, 7, 8 ],
            [ 3, 6, 7, 4, 2, 0, 9, 5, 8, 1 ],
            [ 5, 8, 6, 9, 7, 2, 0, 1, 3, 4 ],
            [ 8, 9, 4, 5, 3, 6, 2, 0, 1, 7 ],
            [ 9, 4, 3, 8, 6, 1, 7, 2, 0, 5 ],
            [ 2, 5, 8, 1, 4, 3, 6, 7, 9, 0 ],
        );

        return $table[$row]->[$col];
    }
```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/laurent-rosenfeld/awk/ch-1.awk), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/laurent-rosenfeld/c/ch-1.c), [D](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/laurent-rosenfeld/d/ch-1.d), [Dart](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/laurent-rosenfeld/dart/ch-1.dart), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/laurent-rosenfeld/go/ch-1.go), [Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/laurent-rosenfeld/javascript/ch-1.js), [Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/laurent-rosenfeld/julia/ch-1.jl), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/laurent-rosenfeld/kotlin/ch-1.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/laurent-rosenfeld/lua/ch-1.lua), [Nim](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/laurent-rosenfeld/nim/ch-1.nim), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/laurent-rosenfeld/pascal/ch-1.pas), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/laurent-rosenfeld/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/laurent-rosenfeld/raku/ch-1.raku), [Ring](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/laurent-rosenfeld/ring/ch-1.ring), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/laurent-rosenfeld/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/laurent-rosenfeld/rust/ch-1.rs), [Scala](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/laurent-rosenfeld/scala/ch-1.scala), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/laurent-rosenfeld/tcl/ch-1.tcl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 177: Damm Algorithm and Palindromic Prime Cyclops](http://blogs.perl.org/users/laurent_r/2022/08/perl-weekly-challenge-177-damm-algorithm-and-palindromic-prime-cyclops.html)

Using repetition to drive a point home, notice that we have the same elements in Laurent's compact solution. The two-dimensional table, not shown here, is constructed in the same manner as we've seen previously, hard-coded as an array of arrays. I find the steps elegantly simple.

```perl
    sub find_check {
        my $n = shift;
        my $t = 0;
        $t = $damm[$t][$_] for split //, $n;
        return $t;
    }

    sub is_valid {
        my $n = shift;
        return find_check($n) == 0;
    }
```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/cheok-yin-fung/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/cheok-yin-fung/raku/ch-1.raku)

CY, as an alternative, iterates over the *indices* of the input number digits, but internally the reassignment of the intrim index value is the same.

```perl
    sub damm_check {
        my $num = $_[0];

        my @operation_table = (
            [0, 3, 1, 7, 5, 9, 8, 6, 4, 2],
            [7, 0, 9, 2, 1, 5, 4, 8, 6, 3],
            [4, 2, 0, 6, 8, 7, 1, 3, 5, 9],
            [1, 7, 5, 0, 9, 8, 3, 4, 2, 6],
            [6, 1, 2, 3, 0, 4, 5, 9, 7, 8],
            [3, 6, 7, 4, 2, 0, 9, 5, 8, 1],
            [5, 8, 6, 9, 7, 2, 0, 1, 3, 4],
            [8, 9, 4, 5, 3, 6, 2, 0, 1, 7],
            [9, 4, 3, 8, 6, 1, 7, 2, 0, 5],
            [2, 5, 8, 1, 4, 3, 6, 7, 9, 0]
        );

        my $interim = 0;

        my @digit = split "", $num;
        my $i = 0;

        while ($i < scalar @digit - 1) {
            $interim = $operation_table[$interim][$digit[$i]];
            $i++;
        }

        return $digit[$i] == $interim;
    }
```



[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/colin-crain/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Yet Another Damm Algorithm - Programming Excursions in Perl and Raku](https://colincrain.com/2022/08/13/yet-another-damm-algorithm)

For my own solution I conceptually broke it down into two entirely self-contained functions for a specific implementation, each with their own copy of the lookup table. This emphasizes that as long as the encoder and decoder use the same parameters — the contents of the selected lookup and the spacing of the check digits — the actions to get to the check digit in each process are not reversed but in fact repeated exactly the same. The validation function returns a simple up/down truth value.

```perl
    sub validate ( $num ) {
        my $quasigroup =
            [   [0, 3,  1,  7,  5,  9,  8,  6,  4,  2],
                [7, 0,  9,  2,  1,  5,  4,  8,  6,  3],
                [4, 2,  0,  6,  8,  7,  1,  3,  5,  9],
                [1, 7,  5,  0,  9,  8,  3,  4,  2,  6],
                [6, 1,  2,  3,  0,  4,  5,  9,  7,  8],
                [3, 6,  7,  4,  2,  0,  9,  5,  8,  1],
                [5, 8,  6,  9,  7,  2,  0,  1,  3,  4],
                [8, 9,  4,  5,  3,  6,  2,  0,  1,  7],
                [9, 4,  3,  8,  6,  1,  7,  2,  0,  5],
                [2, 5,  8,  1,  4,  3,  6,  7,  9,  0]  ];
        my $interim = 0;

        $interim = $quasigroup->[$interim][$_] for (split //, $num) ;

        return ($interim == 0 ? 1 : 0);
    }

    sub addcheck ( $num ) {
        my $quasigroup =
            [   [0, 3,  1,  7,  5,  9,  8,  6,  4,  2],
                [7, 0,  9,  2,  1,  5,  4,  8,  6,  3],
                [4, 2,  0,  6,  8,  7,  1,  3,  5,  9],
                [1, 7,  5,  0,  9,  8,  3,  4,  2,  6],
                [6, 1,  2,  3,  0,  4,  5,  9,  7,  8],
                [3, 6,  7,  4,  2,  0,  9,  5,  8,  1],
                [5, 8,  6,  9,  7,  2,  0,  1,  3,  4],
                [8, 9,  4,  5,  3,  6,  2,  0,  1,  7],
                [9, 4,  3,  8,  6,  1,  7,  2,  0,  5],
                [2, 5,  8,  1,  4,  3,  6,  7,  9,  0]  ];
        my $interim = 0;

        $interim = $quasigroup->[$interim][$_] for (split //, $num) ;

        return "$num$interim";
    }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/wlmb/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Emacs-lisp](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/wlmb/emacs-lisp/ch-1.el), [Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/wlmb/julia/ch-1.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/wlmb/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 177 – W. Luis Mochán](https://wlmb.github.io/2022/08/08/PWC177/)

Some observers will notice that looping a calculation across a list of values, reinserting the result of one calculation into the calculation for the next element, is the essence of the `reduce` primitive operation in functional programming.

Here Luis imports `reduce` from `List::Util` to perform the action explicitly.

```perl
    use List::Util qw(reduce);
    die "Usage: $0 N1 [N2... ]\nTo check N_{i} with Damm's algorithm\n" unless @ARGV;

    # consecutive digits of a Damm table
    my @digits= map {split "", $_}
        qw(0317598642 7092154863 4206871359 1750983426 6123045978
           3674209581 5869720134 8945362017 9438617205 2581436790);

    # Organice the digits as a 2D array
    my $table=[map {[@digits[10*$_..10*$_+9]]}(0..9)];

    # The group operation $n ∗ $m is given by $table->[$n][$m]
    say "$_ ", (reduce {$table->[$a][$b]} (0,split "", $_))?"isn't":"is", " correct"  for @ARGV;
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC177 - Damm Algorithm - ETOOBUSY](https://etoobusy.polettix.it/2022/08/10/pwc177-damm-algorithm/)

In fact, using `reduce` there's not whole lot left to do.

```perl
    sub damm_calculate ($input) {
       state $qs = [qw<
          0  3  1  7  5  9  8  6  4  2
          7  0  9  2  1  5  4  8  6  3
          4  2  0  6  8  7  1  3  5  9
          1  7  5  0  9  8  3  4  2  6
          6  1  2  3  0  4  5  9  7  8
          3  6  7  4  2  0  9  5  8  1
          5  8  6  9  7  2  0  1  3  4
          8  9  4  5  3  6  2  0  1  7
          9  4  3  8  6  1  7  2  0  5
          2  5  8  1  4  3  6  7  9  0
       >];
       reduce {$qs->[10 * $a + $b]} 0, split m{}mxs, $input;
    }
```



[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/peter-campbell-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Damm and Cyclops](https://pjcs-pwc.blogspot.com/2022/08/damm-algorithm-take-care-to-spell-that.html)

Here Peter introduced the idea of matching out individual digits in the input number using a regular expression, which strikes me as a very Perlish way to proceed. The `split` function, I've noticed, is kind of expensive, requiring the creation of a whole new variable type and related array allocated behind it. This avoids that, although firing up the regular expression engine has its own, not-insignificant overhead.

It is, however, very cool, and very Perlish. So there's that.

```perl
       # start with zero
       $interim_digit = 0;

       # loop over digits
       while ($test =~ m|(\d)|g) {
           $interim_digit = $table[$interim_digit][$1];
       }

       # number is valid if $interim_digit is zero
       say qq[$test is ] . ($interim_digit ? 'not ' : '') . qq[valid];
```

[**Kjetil Skotheim**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/kjetillll/perl/ch-1.pl)

Kjetil takes this a step further, and performs a *very* interesting tradeoff. Here he swaps the simplicity in using a multidimensional array of arrays — which directly models Damm's original algorithm — with the extremely fast Perl `substr` function and some arithmetic for the offset positions. In a strange way this is analogous to using pointer arithmetic on the underlying C-string inside the Perl string construct.

I seem to recall saying last week when talking about references that you never need to do pointer math in Perl, but here we are. It just goes to show yet again how concepts in one language are often able to be mapped over and re-leveraged in another, sometimes in surprising ways.

In Kjetil'c method we avoid arrays entirely, which is pretty wild when you think about it.

```perl
    sub is_damm_valid {
        state $t = '0317598642709215486342068713591750983426612304597836742095815869720134894536201794386172052581436790';
        my($n,$i)=(@_,0);
        $n=~s/^.//                                  #if digits left, gnaw off one into $&
        ? is_damm_valid($n, substr($t,$i*10+$&,1))  #...and recurse with new shorter $n and new $i from table $t
        : 0+!$i                                     #when no digts left, i==0 returns 1/true/valid
    }
```

[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/mohammad-anwar/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/mohammad-anwar/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/mohammad-anwar/raku/ch-1.raku), [Swift](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/mohammad-anwar/swift/ch-1.swift)

The lookup table is defined mathematically as a [quasigroup](https://en.wikipedia.org/wiki/Quasigroup), and is not limited to the single example implementation we have seen repeated so far. That one works and is easy and has a zeroed major diagonal so why not? But note it does not need to be, and any suitable quasigroup will do.


In fact the selection of the table does not even require the major diagonal to consist of zeros, as in the example, although this is very convenient to validation. With a table that has some other major diagonal we can simply remove the appended digit and repeat the encoding to recompute the value and see if the two match. As we need to repeat the steps  in any case there is little practical difference to the techniques.

Here Mohammad, although still using Damm's example table, demonstrates the latter technique for validation.


```perl
    sub is_valid_check_digit($n) {
        my $op_table = [
            [ 0, 3, 1, 7, 5, 9, 8, 6, 4, 2 ],
            [ 7, 0, 9, 2, 1, 5, 4, 8, 6, 3 ],
            [ 4, 2, 0, 6, 8, 7, 1, 3, 5, 9 ],
            [ 1, 7, 5, 0, 9, 8, 3, 4, 2, 6 ],
            [ 6, 1, 2, 3, 0, 4, 5, 9, 7, 8 ],
            [ 3, 6, 7, 4, 2, 0, 9, 5, 8, 1 ],
            [ 5, 8, 6, 9, 7, 2, 0, 1, 3, 4 ],
            [ 8, 9, 4, 5, 3, 6, 2, 0, 1, 7 ],
            [ 9, 4, 3, 8, 6, 1, 7, 2, 0, 5 ],
            [ 2, 5, 8, 1, 4, 3, 6, 7, 9, 0 ],
        ];

        my @n = split //, $n;
        my $c = pop @n;
        my $i = 0;
        foreach my $j (@n) {
            $i = $op_table->[$i][$j];
        }

        return $i == $c;
    }
```

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/adam-russell/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/adam-russell/prolog/ch-1.p)


&nbsp;&nbsp;**blog writeup:**
[Cyclops Validation — Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/08/14)

&nbsp;&nbsp;**blog writeup:**
[Cyclops Validation — Prolog — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/08/14)

I made passing mention at the beginning of the use of a different table. Here is Adam's submission with one such example. Unfortunately it's not made clear how this table is arrived at, so there's little to discuss.

It also has the property of a major diagonal composed of zeros, so Adam checks the calculated value including the check digit against 0, returning a boolean truth because that's the sort of logic Adam deals in daily.

```perl
    use boolean;

    my @damm_matrix;
    $damm_matrix[0] = [0, 7, 4, 1, 6, 3, 5, 8, 9, 2];
    $damm_matrix[1] = [3, 0, 2, 7, 1, 6, 8, 9, 4, 5];
    $damm_matrix[2] = [1, 9, 0, 5, 2, 7, 6, 4, 3, 8];
    $damm_matrix[3] = [7, 2, 6, 0, 3, 4, 9, 5, 8, 1];
    $damm_matrix[4] = [5, 1, 8, 9, 0, 2, 7, 3, 6, 4];
    $damm_matrix[5] = [9, 5 ,7, 8, 4, 0, 2, 6, 1, 3];
    $damm_matrix[6] = [8, 4, 1, 3, 5, 9, 0, 2, 7, 6];
    $damm_matrix[7] = [6, 8, 3, 4, 9, 5, 1, 0, 2, 7];
    $damm_matrix[8] = [4, 6, 5, 2, 7, 8, 3, 1, 0, 9];
    $damm_matrix[9] = [2, 3, 9, 6, 8, 1, 4, 7, 5, 0];

    sub damm_validation{
        my($x) = @_;
        my @digits = split(//, $x);
        my $interim_digit = 0;
        while(my $d = shift @digits){
            $interim_digit = $damm_matrix[$d][$interim_digit];
        }
        return boolean($interim_digit == 0);
    }
```




## Blogs and Additional Submissions in Guest Languages for Task 1:


[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/duncan-c-white/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/duncan-c-white/C/ch-1.c)


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/james-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #177](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-177/james-smith)


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/roger-bell-west/javascript/ch-1.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/roger-bell-west/kotlin/ch-1.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/roger-bell-west/lua/ch-1.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 177: Damm Cyclops](https://blog.firedrake.org/archive/2022/08/The_Weekly_Challenge_177__Damm_Cyclops.html)


[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/sgreen/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/sgreen/python/ch-1.py)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 177](https://dev.to/simongreennet/the-palindromic-prime-cyclops-algorithm-4c0h)


[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/steve-g-lynn/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/steve-g-lynn/julia/ch-1.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/steve-g-lynn/raku/ch-1.p6)


&nbsp;&nbsp;**blog writeup:**
[PWC 177](https://thiujiac.blogspot.com/2022/08/pwc-177.html)


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/ulrich-rieke/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/ulrich-rieke/cpp/ch-1.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/ulrich-rieke/haskell/ch-1.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/ulrich-rieke/raku/ch-1.raku)



------------------------------------------





---

# TASK 2 {#PWC177TASK2}

# Palindromic Prime Cyclops
*Submitted by: Mohammad S Anwar*

Write a script to generate first 20 Palindromic Prime Cyclops Numbers.

A cyclops number is a number with an odd number of digits that has a zero in the center only.


**Output**
```
    101, 16061, 31013, 35053, 38083, 73037, 74047, 91019, 94049,
    1120211, 1150511, 1160611, 1180811, 1190911, 1250521, 1280821,
    1360631, 1390931, 1490941, 1520251
```



## about the solutions
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/adam-russell/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/athanasius/perl/ch-2.pl),
[**Aut0exec**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/aut0exec/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/colin-crain/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/jo-37/perl/ch-2.pl),
[**Kjetil Skotheim**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/kjetillll/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/laurent-rosenfeld/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/mattneleigh/perl/ch-2.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/mohammad-anwar/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/peter-campbell-smith/perl/ch-2.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/robert-dicicco/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/sgreen/perl/ch-2.pl),
[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/steve-g-lynn/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/ulrich-rieke/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/wlmb/perl/ch-2.pl), and
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/walt-mankowski/perl/ch-2.pl)

One can find palindromes by looking at numbers and seeing whether they fit the requirement of seamless reversibility, but as it works out in practice, it's far easier to, with a little extra work around the middle, construct palindromes by reversing and joining up a generative kernel. Done that way we know from the start the result will be the same read backwards or forwards.

In a Cyclops number, we have a palindrome that has further constraints, in that we they need to contain a central eye in the middle digit.

It follows that all Cyclops numbers will have an odd number of digits to make the right shape. And this makes it even more appealing to construct the numbers from smaller values as no account need to be made for the differences between even- and odd-numbered lengths. We take any positive integer, reverse a copy, concatenate a 0 to the original and then affix the copy. Voilá! We have a Cyclops number.

Now we just need to make sure it's prime. This actually proved a sticking point: that is, when to verify a candidate. Some people chose to start with known primes, making this whole constructive discussion moot. But let's continue anyway, so we can get to the next, confounding, point.

We have made a Cyclops number, and if it is prime we have a Palindromic Prime Cyclops.

Almost.

There was a second constraint that was less clearly stated. For those unfamiliar with Homer's *Odyssey*, the Cyclops was a giant creature that lived in a cave and ate people, and was noted for having a single central eye. Hence the "eye" in the middle of a Cyclops number. However even with the essentail symmetry established, this still allows for odd-numbered multiples of zeros, as long as one is central. And the Cyclops, of course, only had *one* eye.

Personally I found the wording of the description unclear, as the word "only" is dangling there at the end of the sentence and we are left unsure of what it is meant to modify. I find the result is linguistically ambiguous.

> ...a number with an odd number of digits that has a zero in the center only.

Is that only a zero in the center or only one zero, located in the center? The farther the modifier is moved away from whatever it is meant to modify the more uncertainty is introduced. In this case the options are modifying the center position or the count of the of zeros, or perhaps both. Sometimes, such as when a sentence has only one verb, moving an adverb for colorful effect can still remain clear as to what the adverb is modifying. As the word "only" can be used as either a adverb or an adjective in English, this particular word is more likely to confuse the reader.

English, with it's poly-lingual roots, is unusually forgiving in its word order, but with great power comes great responsibility. To paraphrase William Safire, if you're having that much trouble trying to figure out whether to use "who" or "whom" as a pronoun, you should probably just rephrase.

There were 23 submissions for the second task this past week.

## A SELECTION of SUBMISSIONS
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/roger-bell-west/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/polettix/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/sgreen/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/mattneleigh/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/adam-russell/perl/ch-2.pl),
[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/steve-g-lynn/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/ulrich-rieke/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/e-choroba/perl/ch-2.pl),
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/walt-mankowski/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/cheok-yin-fung/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/james-smith/perl/ch-2.pl), and
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/colin-crain/perl/ch-2.pl)

As it was, folks did catch the condition that there was only one zero allowed anywhere in the number and that it was located at the center of the digit string. The split between iterative and constructive approaches was about 50-50 in the end, and so we'll have a look into a variety of the various ways we saw to find the output values.

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/roger-bell-west/javascript/ch-2.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/roger-bell-west/kotlin/ch-2.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/roger-bell-west/lua/ch-2.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/roger-bell-west/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/roger-bell-west/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 177: Damm Cyclops](https://blog.firedrake.org/archive/2022/08/The_Weekly_Challenge_177__Damm_Cyclops.html)

Roger will start the discussion with a demonstration of a constructive approach. A candidate "front half" is selected and immediately discarded should it contain any 0s; this knowledge is provided by a regular expression. Moving on, we construct a string from the candidate, a central "0", and the digits of the candidate reversed. Now we have a  Cyclops number with only one zero in it.

The `is_prime()` function from `Math::Prime::Util` is then used to find Cyclops candidates that are also prime.


```perl
    use Math::Prime::Util qw(is_prime);

    sub ppc($ct) {
      my @o;
      my $fh = 0;
      while (scalar @o < $ct) {
        $fh++;
        if ($fh =~ /0/) {
          next;
        }
        my $c = $fh . '0' . reverse($fh);
        if (is_prime($c)) {
          push @o,$c;
          if (scalar @o >= $ct) {
            last;
          }
        }
      }
      return \@o;
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC177 - Palindromic Prime Cyclops - ETOOBUSY](https://etoobusy.polettix.it/2022/08/11/pwc177-palindromic-prime-cyclops/)

Flavio follows up with another constructive solution, with a few interesting variations. First, instead of just tossing out candidate half-numbers that contain an extra 0, he goes ahead and translates that 0 into a 1 and continues. As the candidates themselves are incremented at each iteration to get the next trial value, this will still yield a sequential list, while skipping over whole ranges when required.

Nice.

Next if the number *starts* with either 2, 4, 6 or 8 then when reversed it will be divisible by 2 and hence known to not be prime. Again he don't just skip the candidate but instead *modifies* the offending leading digit by adding 1 to it, again jumping over a whole intermediate range to get to the next viable value. For larger numbers this jump will become increasingly substantial.

Double nice.

Lastly we use `ntheory`, another name for `Math::Prime::Util`, to provide its blazing fast `is_prime()` validation function to isolate only the primes.



```perl
    use ntheory 'is_prime';

    my $n = shift // 20;
    my $it = cyclop_prime_factory();
    say $it->() for 1 .. $n;

    sub cyclop_prime_factory {
       my $n = 0;
       return sub {
          while ('necessary') {
             ++$n;
             $n =~ tr/0/1/;
             $n = ($1 + 1) . $2 if $n =~ m{\A ([2468]) (.*) }mxs;
             my $candidate = $n . '0' . reverse($n);
             return $candidate if is_prime($candidate);
          }
       };
    }
```

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/sgreen/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/sgreen/python/ch-2.py)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 177](https://dev.to/simongreennet/the-palindromic-prime-cyclops-algorithm-4c0h)

A frequently forgotten Perl function we have available to search within a string is `index`. This very efficiently returns the first index position of a given substring within a larger, or -1 should it not be found. As the match is strictly linear from left to right, and can always be completed in a single pass, this process is much quicker than firing up the whole regular expression engine —  albeit much more limited in its abilities.

But for making sure there are no zeros in a working half-palindrome it really shines. Once a candidate passes the test it is then combined with a 0 and its own reverse to make a Cyclops palindrome. And this in turn is checked for primality using a hand-tooled `is_prime()` routine, which is plenty fast to find the 20 values requested.



```perl
    sub main() {
        my @solutions = ();
        my $number    = 1;

        while ( scalar(@solutions) < 20 ) {
            my $cn = cyclops_number($number);
            if ( index($number, '0') == -1 and is_prime($cn) ) {
                push @solutions, $cn;
            }

            $number++;
        }

        say join ', ', @solutions;
    }

    sub is_prime ($number) {
        # Return true or false if the number is a prime
        if ( $number < 2 ) {
            return;
        }

        foreach my $i ( 2 .. sqrt($number) ) {
            if ( $number % $i == 0 ) {
                return;
            }
        }

        # It's a prime
        return 1;
    }
```

[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/mattneleigh/perl/ch-2.pl)

Matthew is know for his delightful and clear commentary, something I always encourage among the group and, well,  programmers as a whole. Not to put too fine a point on it, but I find a lot of arrogance among programmers in general — antisocial elitism kind of runs thick sometimes, for all of the kind and gentle people I know —  and I find "the code should speak for itself" a common expression of that mindset. You know what really speaks for itself? Words. Words do. That's what they're for.

Feeling superior because you understand your architecture and someone else doesn't won't help you two years and a dozen projects later when you need to go back in and weld in some new functionality, or extract just that part there to use is somewhere else. When that happens, orderly notes will help you find what you need quickly because, hey look! It says right here what it does.

Kudos to Matthew for keeping hope alive.

```perl
    # Loop until we have enough numbers
    until(scalar(@pal_cy_primes) == $q){
        my $candidate;

        # Increment $n
        $n++;

        # Skip any $n that has zero in it
        next
            if($n =~ m/0/);

        # If $n's first digit is even, add 1 to that
        # digit, skipping a series of otherwise-even
        # candidate numbers...
        $n += 10 ** floor(log($n) / log(10))
            unless(substr($n, 0, 1) % 2);

        # Construct a new candidate out of the digits
        # of $n and a zero...
        $candidate = $n . "0" . join('', reverse(split('', $n)));

        # Store this candidate if it's prime
        push(@pal_cy_primes, $candidate)
            if(is_prime($candidate));

    }
```

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/adam-russell/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/adam-russell/prolog/ch-2.p)


&nbsp;&nbsp;**blog writeup:**
[Cyclops Validation — Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/08/14)

&nbsp;&nbsp;**blog writeup:**
[Cyclops Validation — Prolog — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/08/14)

But back to the challenge. Alternately, we could just brute-force it open. Hit it with values until it gives up the goods.

Adam builds a simple recursive framework to test values to satisfy a cascading list of linked conditions — it must be prime; it must have an odd length; it must be equal with its component digits reversed in order; it must have exactly one 0 and that 0 must be located in the central position.

We simply check increasing numbers until we have gathered a long enough list of values to satisfy the requested output.

```perl
    use Math::Primality qw/is_prime/;

    sub n_cyclops_prime_r{
        my($i, $n, $cyclops_primes) = @_;
        return @{$cyclops_primes} if @{$cyclops_primes} == $n;
        push @{$cyclops_primes}, $i if is_prime($i) &&
                                       length($i) % 2 == 1 &&
                                       join("", reverse(split(//, $i))) == $i &&
                                       (grep {$_ == 0} split(//, $i))   == 1 &&
                                       do{my @a = split(//, $i);
                                          $a[int(@a / 2)]
                                       } == 0;
        n_cyclops_prime_r(++$i, $n, $cyclops_primes);
    }

    sub n_cyclops_primes{
        my($n) = @_;
        return n_cyclops_prime_r(1, $n, []);
    }
```

[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/steve-g-lynn/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/steve-g-lynn/julia/ch-2.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/steve-g-lynn/raku/ch-2.sh)


&nbsp;&nbsp;**blog writeup:**
[PWC 177](https://thiujiac.blogspot.com/2022/08/pwc-177.html)

Stephen thinks this through in a very similarly structured, logical manner, creating a loop over ranges of values and testing each one. The amusing way Stephen avoids candidates with an even number of digits is to feed the function ranges of 3, 5, and 7-digit numbers, leaving out the evens. That's one way to do it.

The `substr` function, I may note again, is a very good tool to open up and examine the insides of strings.

```perl
    sub find_cyclops {

        for my $i (@_) {
            (is_prime $i) || next;
            (substr($i, length($i)/2,1) eq '0') || next;
            (substr($i, 0, length($i)/2-0.5) =~ /0/) && next;
            (substr($i, length($i)/2+1.5 ) =~ /0/) && next;
            (substr($i, 0, length($i)/2-0.5) eq substr(reverse($i), 0, length($i)/2-0.5)) || next;
            push @retval, $i;
            last if scalar(@retval) > 19;
        }
    }
```


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/ulrich-rieke/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/ulrich-rieke/cpp/ch-2.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/ulrich-rieke/haskell/ch-2.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/ulrich-rieke/raku/ch-2.raku)

Ulrich introduces a few interesting optimizations to speed up the same general scheme: one is his use of the translation operator in a scalar context to count the number of translations made. We can use this to count 0s without using the entire regular exression engine, and considerably less overhead. The translation table for the operator is built at compilation and lodged deep into the interpreter, fixed and inviolate. Here all we want Perl to do is count the number of calls to the table, which is lighting-fast.

In the second optimization when a candidate has an even number of digits it cannot possibly be a Cyclops, and nor can any other number with that length. So instead of iterating over a large set of values just to reject them, we skip the whole order of magnitude by mutiplying the candidate by 10 and proceeding as though nothing had happened. When looking at longer numbers this provides a considerable speedup.



```perl
    sub isPrimeCyclops {
      my $number = shift ;
      my $zeroes = $number =~ tr/0/0/ ;
      return isPrime( $number ) && ( $number eq reverse( $number ) )
          && ( $zeroes == 1 ) && (substr( $number , int( (length $number) / 2 ) , 1 )
          eq '0' ) ;
    }

    my @prime_cyclopses ;
    my $current = 100 ;
    while ( scalar( @prime_cyclopses ) != 20 ) {
      if ( isPrimeCyclops( $current ) ) {
          push @prime_cyclopses , $current ;
      }
      $current++ ;
      if ( (length $current) % 2 == 0 ) { #we only admit an odd number of digits
          $current *= 10 ;
      }
    }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/e-choroba/perl/ch-2.pl)

We've seen by now how a brute force solution can be refined by selecting the mode of iteration to skip over candidates that could never work. Without, ideally, ever considering them.

Choroba takes this approach further by drawing his candidates from a list of prime numbers, and then checking them to see if they fit the Cyclops criteria. This is done with a conditional to see if the candidate is both equal to its reverse and also matches a somewhat more complex regex than we have previously seen. In this we match a series of digits that are not a zero, followed by a zero, followed by another series of digits that don't contain a zero. As from the left side of the logical clause we already know the number is a palindrome, by the time this is evaluated we only need to establish the location of the central, solitary zero.

```perl
    use Math::Prime::Util qw{ next_prime };

    sub palindromic_prime_cyclops ($count) {
        my @ppc;
        my $n = 0;
        while (@ppc < $count) {
            $n = next_prime($n);
            push @ppc, $n if $n == reverse($n) && $n =~ /^[^0]+0[^0]+$/;
            say $n;
        }
        return \@ppc
    }
```

I don't think its accurate to descibe the solution as using iterative brute force anymore. Although `Math::Prime::Util` is opaque on the subject, reserving the right to use any of a number of techniques, the most likely is some sort of a sieve combinesd with cached values. It is, though, still a fair number of primes, but far far less than the number of values surrounding them.

[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/walt-mankowski/perl/ch-2.pl)

Walt also limits his candidates to values already known to be prime, which he provides using his own sieve of Eratosthenes tucked away in a private module. This proves to be an effective strategy, although is may require some trial and error to find the correct upper bound. Walt then checks the primes for a central 0 — only one 0, mind you — and that the prime is equal to its reverse.

```perl
    sub is_cyclops($n) {
        return length($n) % 2 == 1 &&
            substr($n, length($n)/2, 1) == 0 &&
            ($n =~ tr/0//) == 1 &&
            $n == reverse($n);
    }

    my $primes = primes_to(1600000);
    my @ppc;
    my $i = 0;
    while (@ppc < 20 && $i < @$primes) {
        if (is_cyclops($primes->[$i])) {
            say $primes->[$i];
            push @ppc, $primes->[$i];
        }
        $i++;
    }
```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/cheok-yin-fung/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/cheok-yin-fung/raku/ch-2.raku)

I've mentioned before on how Perl's `reverse` function is probably them most likely to not do what you want it to. In fact I kind of go on about it. This is beause it is contextually aware, and does different things depending on what, a scalar or a list, is requested from it. Combine this with certain other functions not being super-obvious about what they want from life (sounds like some people I've known, right?) and you get a situation where

```perl
    print reverse "Hello, World!";
```

prints: "Hello, World!". Why? Because it reversed the order of a list with one element, because `print` wants a list of stuff to print.

One way to clarify matters is to use the `scalar` keyword.

```perl
    print scalar reverse "hello, World!";
```

This reverses the string characters, which is likely what you wanted.

CY brings us this trick, along with a novel method for checking primality, based on the fact that all primes greater than 3 can be epreseed as (*n*)*k* ± 1. After some preliminary checks on a front-half-number candidate she assembles a Cyclops from the seed, a 0 and its reverse, which is then checked using her lovely `is_prime()` function.



```perl
    sub is_prime {
        my $n = $_[0];
        my $k = 1;
        while ($n % (6*$k-1) && $n % (6*$k+1) && (6*$k+1 <= sqrt $n)) {
            $k++;
        }
        return $n % (6*$k-1) && $n % (6*$k+1);
    }

    my @arr;
    my $pali = 1;
    while (scalar @arr < 20) {
        if ( (scalar reverse $pali) % 2 && $pali % 3 && $pali !~ /0/ ) {
            my $n = $pali."0".(scalar reverse $pali);
            if (is_prime($n)) {
                say $n;
                push @arr, $n;
            }
        }
        $pali++;
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/james-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #177](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-177/james-smith)

And now to James, who apparently has pulled out all the stops yet again to produce the absolute fastest solution he can concoct.

After some discussion, he settles on a half-palindrome constructive approach, which he then takes and speeds up another 40% or so. Let's focus here on his second, optimized solution.

In this, he composes a new value from an odd-parity head digit and a magnitude multiplier joined to a tail component. This pattern is used to construct a range of potentially viable candidates for a half-palindrome, of which those segments containing a 0 are tossed out.

I think part of what's particularly confusing about this code is that within the **O:** loop — the label is a warning! — many actions are being performed implicitly or explicitly on `$_`, which is the topic designated by the *inner* loop, written as a statement modifier. Get that?

Once you realize that and unwind everything it's less daunting, though.

The extra handler code costs us some overhead, but the savings of only considering 4 lead digits instead of 9 is substantial and well worth the effort.

```perl
    use Math::Prime::Util qw(is_prime);

    my $K = $ARGV[0]//20;
    my $flag = $ARGV[1]//3;

    if($flag & 1 ) {
      my($t0,$i,$t)=(time,0);
      for(1..$K) {
        (++$i)!~/0/ && is_prime( $t = $i.'0'.reverse$i ) ? say $t : redo;
      }
    }

    if( $flag & 2 ) {
      my( $magnitude, $ones, $start, $count,       $result ) =
        (          1,     0,   time, $ARGV[0]//20, '-'     );
      O: while(1) {
        for my $first (1,3,7,9) {
          !/0/ && is_prime( $_ .= '0' . reverse $_ ) &&
          say  && ( --$count || ( $result = $_ ) && last O )
            for $first * $magnitude + $ones .. ( $first + 1 ) * $magnitude - 1;
        }
        $magnitude *= 10;
        $ones      *= 10;
        $ones++;
      }
    }
```

[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/colin-crain/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[One Eye on the Primetime Slot - Programming Excursions in Perl and Raku](https://colincrain.com/2022/08/14/one-eye-on-the-primetime-slot)

My own solution works around the same plan — albeit hopefully a bit more readable.

```perl
    use ntheory qw( is_prime );

    my @out;
    my $tail_digits = 0;

    while ( @out < 200 ) {
        for my $head ( 1, 3, 7, 9 ) {
            my $start = "0" x $tail_digits;
            my $end   = "9" x $tail_digits;
            for my $tail ($start .. $end) {
                $tail =~ /0/ && next;            ## only one eye!
                my $candidate =  "$head$tail" . 0 . reverse "$head$tail";
                push @out, $candidate if is_prime( $candidate );
            }
        }
        $tail_digits++;
    }


    say for @out;
```


## Blogs and Additional Submissions in Guest Languages for Task 2:




[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/athanasius/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/athanasius/raku/ch-2.raku)


[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/duncan-c-white/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/duncan-c-white/C/ch-2.c)


[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/jaldhar-h-vyas/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/jaldhar-h-vyas/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 177](https://www.braincells.com/perl/2022/08/perl_weekly_challenge_week_177.html)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/laurent-rosenfeld/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Coconut](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/laurent-rosenfeld/coconut/ch-2.coco), [Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/laurent-rosenfeld/javascript/ch-2.js), [Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/laurent-rosenfeld/julia/ch-2.jl), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/laurent-rosenfeld/kotlin/ch-2.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/laurent-rosenfeld/lua/ch-2.lua), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/laurent-rosenfeld/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/laurent-rosenfeld/raku/ch-2.raku), [Ring](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/laurent-rosenfeld/ring/ch-2.ring), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/laurent-rosenfeld/ruby/ch-2.rb)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 177: Damm Algorithm and Palindromic Prime Cyclops](http://blogs.perl.org/users/laurent_r/2022/08/perl-weekly-challenge-177-damm-algorithm-and-palindromic-prime-cyclops.html)



[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/mohammad-anwar/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/mohammad-anwar/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/mohammad-anwar/raku/ch-2.raku), [Swift](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/mohammad-anwar/swift/ch-2.swift)


[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/peter-campbell-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Damm and Cyclops](https://pjcs-pwc.blogspot.com/2022/08/damm-algorithm-take-care-to-spell-that.html)


[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/robert-dicicco/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/robert-dicicco/julia/ch-2.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/robert-dicicco/raku/ch-2.raku), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/robert-dicicco/ruby/ch-2.rb)


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/wlmb/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Emacs-lisp](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/wlmb/emacs-lisp/ch-2.el), [Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/wlmb/julia/ch-2.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-177/wlmb/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 177 – W. Luis Mochán](https://wlmb.github.io/2022/08/08/PWC177/)


------------------------------------------





---

<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>

<center>
<h1 id="PWC177BLOGS">_________ THE BLOG PAGES _________</h1>
</center>


---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, by some miracle I somehow continue to maintain my bearings.**

**Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your Unquenchable *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC177BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *FOLLOW* these *BLOG* *LINKS*:

**( ...*don't think, trust your training, you're in the zone, just do it ...* )**


**Adam Russell**

 * [Cyclops Validation — Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/08/14) ( *Perl* )
 * [Cyclops Validation — Prolog — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/08/14) ( *Prolog* )

**Arne Sommer**

 * [Cyclops Be Dammed with Raku - Arne Sommer](https://raku-musings.com/cyclops-be-dammed.html) ( *Raku* )

**Colin Crain**

 * [Yet Another Damm Algorithm - Programming Excursions in Perl and Raku](https://colincrain.com/2022/08/13/yet-another-damm-algorithm) ( *Perl* )
 * [One Eye on the Primetime Slot - Programming Excursions in Perl and Raku](https://colincrain.com/2022/08/14/one-eye-on-the-primetime-slot) ( *Perl* )

**Flavio Poletti**

 * [PWC177 - Damm Algorithm - ETOOBUSY](https://etoobusy.polettix.it/2022/08/10/pwc177-damm-algorithm/) ( *Perl & Raku* )
 * [PWC177 - Palindromic Prime Cyclops - ETOOBUSY](https://etoobusy.polettix.it/2022/08/11/pwc177-palindromic-prime-cyclops/) ( *Perl & Raku* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 177](https://www.braincells.com/perl/2022/08/perl_weekly_challenge_week_177.html) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #177](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-177/james-smith) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 177: Damm Algorithm and Palindromic Prime Cyclops](http://blogs.perl.org/users/laurent_r/2022/08/perl-weekly-challenge-177-damm-algorithm-and-palindromic-prime-cyclops.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 177: damn numbers! – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/08/10/PerlWeeklyChallenge177.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 177: damn numbers! – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/08/10/PerlWeeklyChallenge177.html#task1plperl) ( *PL/Perl* )
 * [Perl Weekly Challenge 177: damn numbers! – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/08/10/PerlWeeklyChallenge177.html#task1plpgsql) ( *PL/PostgeSQL* )

**Peter Campbell Smith**

 * [Damm and Cyclops](https://pjcs-pwc.blogspot.com/2022/08/damm-algorithm-take-care-to-spell-that.html) ( *Perl* )

**Roger Bell_West**

 * [RogerBW's Blog: The Weekly Challenge 177: Damm Cyclops](https://blog.firedrake.org/archive/2022/08/The_Weekly_Challenge_177__Damm_Cyclops.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 177](https://dev.to/simongreennet/the-palindromic-prime-cyclops-algorithm-4c0h) ( *Perl* )

**Stephen G Lynn**

 * [PWC 177](https://thiujiac.blogspot.com/2022/08/pwc-177.html) ( *Perl & Raku* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 177 – W. Luis Mochán](https://wlmb.github.io/2022/08/08/PWC177/) ( *Perl & Raku* )
