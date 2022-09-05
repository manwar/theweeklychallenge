---
author:       Colin Crain
date:         2022-09-05T00:00:00
description:  "Colin Crain › Perl Weekly Review #174"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #174"
image:        images/blog/p5-review-challenge-174.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-173/).* )

Welcome to the Perl review pages for **Week 174** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

Before we begin, you may wish to revisit either the pages for the [**original tasks**](/blog/perl-weekly-challenge-174/) or the summary [**recap**](/blog/recap-challenge-174/) of the challenge. But don't worry about it, the challenge text will be repeated and presented as we progress from task to task.

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

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC174TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC174TASK2)   &nbsp;  &nbsp;  &nbsp;       •   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC174BLOGS)    &nbsp;  &nbsp;  &nbsp;       •

---

# TASK 1 {#PWC174TASK1}

# Disarium Numbers
*Submitted by: Mohammad S Anwar*

Write a script to generate first 19 Disarium Numbers.


A disarium number is an integer where the sum of each digit raised to the power of its position in the number, is equal to the number.


**For example,**
```
    518 is a disarium number
    as (5 ** 1) + (1 ** 2) + (8 ** 3) => 5 + 1 + 512 => 518
```

## about the solutions
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/adam-russell/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/athanasius/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/colin-crain/perl/ch-1.pl),
[**Dario Mazzeo**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/dario-mazzeo/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/polettix/perl/ch-1.pl),
[**Gurunandan Bhat**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/bhat_gurunandan/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/jo-37/perl/ch-1.pl),
[**Kjetil Skotheim**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/kjetillll/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/lubos-kolouch/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/mattneleigh/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/mohammad-anwar/perl/ch-1.pl),
[**Nicolas Mendoza**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/nicolas-mendoza/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/peter-campbell-smith/perl/ch-1.pl),
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/pokgopun/perl/ch-1.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/robert-dicicco/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/sgreen/perl/ch-1.pl),
[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/steve-g-lynn/perl/ch-1.pl),
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/steven-wilson/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/ulrich-rieke/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/wlmb/perl/ch-1.pl)

Let me begin with the statement that I, for one, would like very much to know what a ""disarium" is. Is this some person? If so I would wish to have some words. A place? Perhaps a medieval latinate city or the made-up capital of some far-off fantastic land?

I was able to find one solitary reference in the Russian chemical literature to a disarium trisulfate from 1955, but further investigation and Occam's razor leads us to conclude a typographical error of some sort has occurred — one that has somehow substituted an "s" for a "b". Perhaps the Cyrillic б broke its lower loop. We will likely never know.

We are not, to my knowledge, looking for di-barium, mono-barium, or for that matter any of the more complex barium compounds. The word remains a bothersome enigma to me, and  bothersome because it robs this challenge of any possible explanatory context that might be gleaned from the knowledge. And any explanation of *why* someone decided these numbers were interesting escapes me. The mathematical relationship between digits in a positional numbering system and the value they express is rigorously defined, and although I find the operation of digit-summing in number theory a bit less-than illuminating I can see the value of exporing the unknown and its connection to base-10 arithmetic.

On the other hand what we have here is labeling the positions starting at 1 from the *right-most* digit, which is not nearly so rigorously defined, making a fundamental shift in value with each order of magnitude. Adding on top of this the operation of raising the digit to its positional power and the results are just a jumble of ideas. So after the fact I am overwhelmingly left with the question — "Why?".

The numbers do warrant a [listing in the Online Encyclopedia of Integer Sequences](https://oeis.org/A032799
), however the term "disarium" is nowhere to be found. However there is a clue, in the form of a link to a Wolfram MathWorld article on [narcissistic numbers](https://mathworld.wolfram.com/NarcissisticNumber.html). Someone seems to have decided to group them together, and I am of the same mind.

Narcissistic numbers also raise their digits to a power and sum them, with the power derived from the total number of digits in the number. This comes off as similarly arbitrary, relating to the exponential process behind the Disarium numbers.

The mathematician D.H. Hardy writes of some narcissistic numbers:

>These are odd... very suitable for puzzle columns and likely to amuse amateurs, but there is nothing in them which appeals to the mathematician.

The narcissistic numbers, it seems, are more interesting to *themselves* than to the people who make it their job to look at numbers, which is telling.


There were 27 submissions for the first task this past week.

## A SELECTION of SUBMISSIONS
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/duncan-c-white/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/mohammad-anwar/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/colin-crain/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/sgreen/perl/ch-1.pl),
[**Nicolas Mendoza**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/nicolas-mendoza/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/jaldhar-h-vyas/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/mattneleigh/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/laurent-rosenfeld/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/peter-campbell-smith/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/athanasius/perl/ch-1.pl), and
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/roger-bell-west/perl/ch-1.pl)

There were two basic forms we saw to access the individual digits of a candidate number: splitting the string into an array of characters and adressing them by index, or by examining the string positions directly using `substr`. Ok, sure, and a third: using division. But we'll get to that.

Ultimately the solutions were quite self-similar: get the digits, do the thing to the digits, check the value against the starting value, and then move on to the next candidate. But within this framework there were quite a few smaller variations, well enough to look at some different ways of going about the steps.




[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/duncan-c-white/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/duncan-c-white/C/ch-1.c)

Duncan will start us off with his `disarium()` function. Here he divides the number into an array of digits, and then iterates across them exponentiating and summing as we go. If the final tally of the sum equals the original number then we have found success and the meaning of life.

To find the first 19 numbers in the sequence he places his function in a loop testing increasing values. Why 19 you might ask? This is not explained but a quick look at the OEIS reveals the 20th value is 12,157,692,622,039,623,539. So that's likely to take a while to find.

```perl
    sub disarium
    {
        my( $x ) = @_;
        my @dig = split( //, $x );
        my $sum = 0;
        for( my $pos=0; $pos < @dig; $pos++ )
        {
            $sum += $dig[$pos] ** ($pos+1);
        }
        say "debug: dis($x): sum=$sum" if $debug;
        return $sum == $x ? 1 : 0;
    }
```

[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/mohammad-anwar/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/mohammad-anwar/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/mohammad-anwar/raku/ch-1.raku), [Swift](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/mohammad-anwar/swift/ch-1.swift)

Mohammad takes the same process and manages to break it down an simplify it further, resulting in a quite compact solution.

```perl
    sub is_disarium_number($n) {
        my @n = split //,$n;
        my $s = 0;
        $s += $n[$_] ** ($_ + 1) for (0 .. @n-1);

        return ($s == $n);
    }
```

[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/colin-crain/perl/ch-1.pl)

Continuing the motif, I took it even further into a single line of logic.

I've also used `substr`, which obviates the need to create an array of digits. Internally, a Perl scalar can contain both a numeric value and as string value, which are for all practical purposes continually kept in sync. The string value, though, is itself held in a C-string, which is an array already. So really the string segmentation step can be viewed as redundant. It can be a quite useful abstraction, surely, but it isn't strictly speaking *necessary*. The built-in Perl function `substr` is very fast.

I'm of two minds about declaring internal variables in a subroutine signature, getting around the warning about the number of parameters using a default value. On the one hand it cleanly predeclares everything that is going to be used within the block before we begin, which is very conceptually clean, but on the other seems like a hack when you need to trick the compiler into agreeing with you.

I think it may be fine for small functions such as these, as long as everything can be predeclared. As soon as you need to use `my`, or `our`, or `state` within the routine, though, you've gone and mixed your metaphors. Which of course has quite a bit of potential for comedic effect, but contextual confusion when coding should never be looked at as a goal amongst upstanding professionals.

And as for the others, well, you know who you are.

```perl
    sub disarium ($num, $sum = 0) {
        $sum += (substr $num, $_-1, 1) ** $_ for (1..length $num);
        $sum;
    }
```

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/sgreen/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/sgreen/python/ch-1.py)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 174](https://dev.to/simongreennet/weekly-challenge-174-5ga6)

The reasoning behind this compact form is that the position count and the exponent are linked to a common value. Simon makes this a little clearer by giving the iteration variable a proper name, `$count`.

```perl
    foreach my $count ( 1 .. length($n) ) {
        $sum += substr( $n, $count - 1, 1 )**$count;
    }
```


[**Nicolas Mendoza**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/nicolas-mendoza/perl/ch-1.pl)

Stepping back and taking this in a different direction, member Nicolas firmly ascribes to the adage of one action per line, systematically looping through candidate numbers, splitting them and raising the digits to increasing powers, annotating as he goes. Clarity is action is a good thing.

Compactness is a virtue, but so is explaining what you are doing, should anyone ever need to revisit the logic.

```perl
    for my $number (0..$limit) { # iterate thru all numbers
      my $sum = 0; # store a temp sum
      my @n = split //, $number; #
      for (my $i = @n; $i > 0; $i--) { # iterate thru every digit
        my $c = $n[$i-1]; # pick out digit
        my $s = $c**$i;
        $sum += $s;
        if ($sum > $number) { # go to next number if sum has become bigger already
          last;
        }
      }
      if ($sum == $number) { # Add to found array if it's a Disarium number
        push @found, $sum;
        if (@found == 19) { # bail out when we found 19
          say "@found";
          exit;
        }
      }
    }
```

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/jaldhar-h-vyas/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/jaldhar-h-vyas/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 174](https://www.braincells.com/perl/2022/07/perl_weekly_challenge_week_174.html)

I like how Jaldhar avoids the bookkeeping of a iterator variable entirely with a very Perlish technique — by calling `each` on his array of digits. On an array, this returns two values, the index position and the value at that position.

Now I wish I'd thought of that.


```perl
    sub isDisarium {
        my ($n) = @_;
        my @digits = split //, $n;
        my $total = 0;

        while (my ($pos, $digit) = each @digits) {
            $total += $digit ** ($pos + 1);
        }

        return $total == $n;
    }
```

[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/mattneleigh/perl/ch-1.pl)

Matthew provides another `substr` solution for us to have a look at. As I've said before, for some reason I always assumed `substr` was slow. It's not. Not at all.

```perl
    sub is_disarium_number{
        my $n = int(shift());

        my $sum = 0;

        # Loop over each digit, summing its value raised to
        # the power of its position in the string
        for my $i (1 .. length($n)){
            $sum += substr($n, $i - 1, 1) ** $i;
        }

        # Indicate whether the sum is equal to the original
        # number or not
        return(
            $sum == $n ? 1 : 0
        );

    }
```


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/laurent-rosenfeld/awk/ch-1.awk), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/laurent-rosenfeld/bc/ch-1.bc), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/laurent-rosenfeld/c/ch-1.c), [D](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/laurent-rosenfeld/d/ch-1.d), [Dart](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/laurent-rosenfeld/dart/ch-1.dart), [Dc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/laurent-rosenfeld/dc/ch-1.dc), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/laurent-rosenfeld/go/ch-1.go), [Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/laurent-rosenfeld/javascript/ch-1.js), [Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/laurent-rosenfeld/julia/ch-1.jl), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/laurent-rosenfeld/kotlin/ch-1.kt), [Nim](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/laurent-rosenfeld/nim/ch-1.nim), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/laurent-rosenfeld/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/laurent-rosenfeld/raku/ch-1.raku), [Ring](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/laurent-rosenfeld/ring/ch-1.ring), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/laurent-rosenfeld/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/laurent-rosenfeld/rust/ch-1.rs), [Scala](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/laurent-rosenfeld/scala/ch-1.scala), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/laurent-rosenfeld/tcl/ch-1.tcl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 174: Disarium Numbers and Permutation Rankings](http://blogs.perl.org/users/laurent_r/2022/07/perl-weekly-challenge-174-disarium-numbers-and-permutation-rankings.html)

Laurent constructs his logic using `map` to provide listwise processing of the digits, creating an anonymous intermediate list of increasing powers that are then summed using a `for` loop.

```perl
    sub is_disarium {
        my $num = shift;
        my @digits = split '', $num;
        my $i = 1;
        my $sum = 0;
        $sum += $_ for map {  $_ ** $i++ } @digits;
        return $num == $sum;
    }
```

[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/peter-campbell-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Disarium disaster and rank permutations](https://pjcs-pwc.blogspot.com/2022/07/disarium-disaster-and-rank-permutations.html)

Peter throws in a short-circuit on the aggregate sum to bail out should the value get too large. There's no point in continuing if we're already greater than the original number.

```perl
       # calculate the Disarian sum
       $sum = 0;
       for ($k = length($j); $k >= 1; $k --) {
           $sum += substr($j, $k - 1, 1) ** $k;
           next NUMBER if $sum > $j;   # too big already - give up
       }
       next unless $sum == $j;
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/athanasius/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/athanasius/raku/ch-1.raku)

The monk also incorporates this short-circuiting check, with the added twist of performing the power functions in reverse, from high to low. This way any overruns in the sum will be noticed quicker. Every little bit helps, you know? Unless, you know, it doesn't.

They note they did try a lookup table for the exponentiation but it had negligible effect, so we just use the operator inline.

```perl
    sub is_disarium
    {
        my ($n)     = @_;
        my  @digits = split //, $n;
        my  $sum    = 0;

        for my $i (reverse 0 .. $#digits)          # reverse() here saves ~1 second
        {
            $sum += $digits[ $i ] ** ($i + 1);
            return 0 if $sum > $n;
        }

        return $sum == $n;
    }
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/roger-bell-west/javascript/ch-1.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/roger-bell-west/kotlin/ch-1.kt), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 174: The Rank Smell of Disarium](https://blog.firedrake.org/archive/2022/07/The_Weekly_Challenge_174__The_Rank_Smell_of_Disarium.html)

Finally we have Roger. That lookup table of powers of values the monk was just referring to? Well Roger has gone and done it! I've been quietly trying to warn you folks, but to no avail. He may, I'm afraid, be veering wildly out of control. We will have to keep an eye.

There are a couple of interesting variations going on here as well, beyond the aforementioned lookup table. For instance, he dissects his numbers mathematically, using division, instead of string-wise. Oh, and that multi-dimensional table of digits raised to powers is auto-expanded when necessary, which is, to use a technical term, *neat*.

I will say though, that I'm with the monk in that the lookup code is probably more expensive than the savings. But seriously, who cares? Good stuff.

```perl
    sub disarium($ct) {
      my @o;
      my @pows=([(1) x 10]);
      my $c = 0;
      while (1) {
        my $disar = 0;
        if ($c > 0) {
          my $ca = $c;
          my @cl;
          my $tx = 0;
          while ($ca > 0) {
            $tx++;
            push @cl,$ca % 10;
            $ca = int($ca/10);
          }
          @cl = reverse @cl;
          if ($tx >= scalar @pows) {
            foreach my $power ((scalar @pows)..$tx) {
              my @row;
              foreach my $digit (0..9) {
                push @row,$pows[$power-1][$digit] * $digit
              }
              push @pows,\@row;
            }
          }
          foreach my $i (0..$#cl) {
            $disar += $pows[$i+1][$cl[$i]];
          }
        }
        if ($disar == $c) {
          push @o,$c;
          if (scalar @o >= $ct) {
            last;
          }
        }
        $c++;
      }
      return \@o;
    }
```


## Blogs and Additional Submissions in Guest Languages for Task 1:


[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/adam-russell/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/adam-russell/prolog/ch-1.p)


&nbsp;&nbsp;**blog writeup:**
[Permutations Ranked in Disarray on Mars — Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/07/24)

&nbsp;&nbsp;**blog writeup:**
[Permutations Ranked in Disarray on Mars — Prolog — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/07/24)


[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/cheok-yin-fung/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/cheok-yin-fung/node/ch-1.js)


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC174 - Disarium Numbers - ETOOBUSY](https://etoobusy.polettix.it/2022/07/21/pwc174-disarium-numbers/)


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/james-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #174](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-174/james-smith)


[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/pokgopun/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Dart](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/pokgopun/dart/ch-1.dart), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/pokgopun/go/ch-1.go)


[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/robert-dicicco/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/robert-dicicco/julia/ch-1.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/robert-dicicco/raku/ch-1.raku)


[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/steve-g-lynn/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/steve-g-lynn/julia/ch-1.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/steve-g-lynn/raku/ch-1.p6)


&nbsp;&nbsp;**blog writeup:**
[PWC #174](https://thiujiac.blogspot.com/2022/07/pwc-174.html)


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/ulrich-rieke/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/ulrich-rieke/cpp/ch-1.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/ulrich-rieke/haskell/ch-1.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/ulrich-rieke/raku/ch-1.raku)


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/wlmb/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 174 – W. Luis Mochán](https://wlmb.github.io/2022/07/18/PWC174/)


------------------------------------------





---

# TASK 2 {#PWC174TASK2}

# Permutation Ranking
*Submitted by: Mohammad S Anwar*

You are given a list of integers with no duplicates, e.g. [0, 1, 2].

Write two functions, `permutation2rank()` which will take the list and determine its rank (starting at 0) in the set of possible permutations arranged in lexicographic order, and `rank2permutation()` which will take the list and a rank number and produce just that permutation.


## about the solutions
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/adam-russell/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/cheok-yin-fung/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/polettix/perl/ch-2.pl),
[**Gurunandan Bhat**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/bhat_gurunandan/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/jo-37/perl/ch-2.pl),
[**Kjetil Skotheim**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/kjetillll/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/lubos-kolouch/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/mattneleigh/perl/ch-2.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/mohammad-anwar/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/peter-campbell-smith/perl/ch-2.pl),
[**Philippe Bricout**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/brxfork/perl/ch-2.pl),
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/pokgopun/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/roger-bell-west/perl/ch-2.pl),
[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/steve-g-lynn/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/ulrich-rieke/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/wlmb/perl/ch-2.pl)

When permutations are studied, they are usually referred to indirectly, substituting normalized data in for the position values; commonly an ordered list of numbers starting from either 1 or 0: {0,1,2,3,4,5}

This helps us to remember that we are permuting the *positions* within the list, or ordered set, and not the *values*. Of course in practice the values move with the positions, but mathematically this is just uninformative and confusing. And believe me, there is more than enough confusion with this challenge, and we don't need more. So some submissions eschewed an arbitrary list of unique integers, solving instead for this normalized form. Converting into and out of a normalized form is interesting in itself, but seems a little unrelated to the essential mathematics behind the scenes. If people didn't preform this step I decided I didn't care.

Not every permutation algorithm is lexicographically consistent in its processing, but many are, such as Knuth's Algorithm L. As this is quite efficient, most combinatorics packages provide a permutation function that preserves order this way. We'll explore lexicographic ordering a bit more below.

There were 20 submissions for the second task this past week.

## A SELECTION of SUBMISSIONS
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/lubos-kolouch/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/e-choroba/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/jo-37/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/wlmb/perl/ch-2.pl),
[**Gurunandan Bhat**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/bhat_gurunandan/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/polettix/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/ulrich-rieke/perl/ch-2.pl),
[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/steve-g-lynn/perl/ch-2.pl), and
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/adam-russell/perl/ch-2.pl)

There were two ways (mostly) we saw in accomplishing the goal: the easy way, counting permutations, or the hard way, using some... complicated and strange math. We'll look at both.

Oh, and Jorg. We'll look at what he's brought us too, which is kind of its own category offshoot from the mind-numbing math, but also right in the middle of it. Curious? Well so am I.

Still.


[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/lubos-kolouch/perl/ch-2.pl)

Lubos will serve as a fine start to our examination, as he nicely lays out a systematic approach to an exhaustive process.

Computers, you see, are very good at counting things. And so in this solution we calculate *all* the permutations in a lexicographically-sorted fashion, then start counting down the list looking for a match. When one is found, the rank is noted. To reverse the operation, we sort and construct the permutation list again, and proceed to the *n*-th element.

The experimental smartmatch operator, `~~`, is used to make the match. Haven't seen that one in a while.

Noted.

The number of premutations to be be calculated rises factorially, so things get out-of-hand quickly. But assuming we have the capability to produce and store the list, this solution will eventually find the rank, or, from the rank, the permutation it references.

```perl
    use Algorithm::Combinatorics qw(permutations);

    sub permutation2rank {
        my ( $list, $what ) = @_;

        my @all_permutations = permutations($list);

        my $pos = 0;
        for my $comb (@all_permutations) {
            return $pos if $comb ~~ @$what;
            $pos++;
        }

        return -1;
    }

    sub rank2permutation {
        my ( $list, $what ) = @_;

        my @all_permutations = permutations($list);

        return $all_permutations[$what];
    }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/e-choroba/perl/ch-2.pl)

As I said, the number of permutations grows factorially. This is easiest to visualize in a descending manner: given permutations of 4 positions, for the first placement we have 4 values that can occupy that spot. For the second postion though, we only have 3 remaining values as one has already been used. At the next position we only have 2 values to choose from, and finally for the last place there is only one value and that placement is determined. Hence for total count of permutations we get 4 x 3 x 2 x 1 = 24, or 4!

So far so good. In a sequence of lexicographically ordered permutations, though, the rearrangements will proceed in a fixed, rigorously defined procession. In fact, the number of steps required to affect a given digit position is again determined by the factorial. We can capitalize on this and create a *factorial numbering system* to rapidly access an individual value in a permutation. The permutation list can be viewed as a number line, and the permutations themselves as values along that line. So to count permutations, we can use our factorial numbering system. And the way to do *that* is the same as any other base conversion: dividing our factorials out or multiplying them back in. The values at the positions of a permutation, numbered from 0, is the digit and the placement in the permutation the position. Sort of. The odd thing is that the zero-state of the permutation has the digits 012345... so we need to account for that.

Multiply the value by the factorial of the position — counting from 0 — to get a decimal component for that position. Recursively perform this for all positions and sum the results to get the ranking.

Reverse and repeat, using Euclidean division this time, to go the other way.

And yes, for the skeptical, it works. Choroba creates two recursive routines to handle arbitrary numbers of digits for the conversions. He also only works on permutations of (0,1,2,3,4...) to keep the process clearer, which I think is a good call on his part. Now you can more plainly see the relationship to *normal* base conversion.

```perl
    sub factorial ($n) {
        my $f = 1;
        $f *= $_ for 2 .. $n;
        return $f
    }

    sub permutation2rank ($arr) {
        my $step = factorial(@$arr - 1);
        my %position;
        @position{sort @$arr} = 0 .. $#$arr;

        my $rank = $step * $position{ $arr->[0] };
        $rank += permutation2rank([@$arr[1 .. $#$arr]])
            if @$arr > 1;
        return $rank
    }

    sub rank2permutation($arr, $index) {
        my @sorted = sort @$arr;
        return _rank2permutation(\@sorted, $index)
    }

    sub _rank2permutation ($arr, $index) {
        return $arr if 1 == @$arr;

        my $step = factorial(@$arr - 1);
        my $i = int($index / $step);
        my @permutation = (
            $arr->[$i],
            @{ _rank2permutation([@$arr[grep $_ != $i, 0 .. $#$arr]],
                                $index % $step) });
        return \@permutation
    }
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/jo-37/perl/ch-2.pl)

To handle a more general case Jorg builds a translation table between the sorted input  values and the indices they fall at. Then he does something completely different.

I believe this weird tie-in to a factorial-based number system is why this particular task has the notoriety it has. I don't think there is a tremendous call for finding particular permutations out in the real world, and certainly not enough to warrant the inclusion of a pair of functions into the venerable number theory module `Math::Prime::Util`. But here we are, and there *they* are. I conject that the real reasoning behind their inclusion is that this is perhaps the only legitimate, practical application of converting back and forth from a factorial number system and we needed to call them something.

And functions for factorial-base numbering totally belong in a number theory module. They're called `permtonum` and  `numtoperm()`.

In any case that's how Jorg solves the task. Good comments, too.

```perl
    use Math::Prime::Util qw(permtonum numtoperm);
    use experimental qw(signatures postderef);

    # The task states: "You are given a list of integers with no
    # duplicates."
    # This is clearly different from a permutation of the numbers from 0 to
    # N.  Thus the list *as is* must not be interpreted as a permutation.

    # Take the given list as a permutation of sortable "items" (here:
    # integers).  Build a map from each item to its position in the sorted
    # list and transform the list of items into a list of the corresponding
    # indices.  The resulting list represents a valid permutation having a
    # rank as provided by "permtonum".
    sub perm2rank ($n) {
        (\my %s)->@{sort {$a <=> $b} @$n} = (0 .. $#$n);

        permtonum([@s{@$n}]);
    }

    # For the reverse operation the order of the given items is irrelevant
    # as rank k=0 always represents the ordered list and all other ranks are
    # derived from this starting point.  Find the permutation
    # corresponding to rank k and use it as array indices in the sorted
    # list.
    sub rank2perm ($k, $n) {
        [(sort {$a <=> $b} @$n)[numtoperm(@$n, $k)]];
    }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/wlmb/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 174 – W. Luis Mochán](https://wlmb.github.io/2022/07/18/PWC174/)

Can we keep getting weirder? Sure we can. We can bring in the Perl Data Language to hold our permutations in vectors. Actually this makes quite a bit of sense, because the positions can be lined up with a parallel vector filled with factorials. This is done in his `factorials` method.

To translate from permutations to ranks, Luis uses a variation on the same algorithm Chorba introduced earlier.


```perl
    use PDL;
    use PDL::NiceSlice;

    my $permutation=long "[".shift."]";
    my $size=$permutation->nelem;

    my @ordered=$permutation->qsort->list;
    my %element2index = map { ($ordered[$_], $_) } (0..$size-1);
    my $permuted_indices=long [@element2index{$permutation->list}];
    my $factorials=factorials($size);
    say "permutation2rank($permutation)=", permutation2rank($permuted_indices);
    say "rank2permutation($permutation, $_)=", rank2permutation($_) for(@ARGV);

    sub permutation2rank($permutation){ # ranks a permutation of 0...N-1
        return $factorials->inner(ranks($permutation));
    }

    sub ranks($permutation){
        my $cmp=$permutation(*1)>$permutation; #P_i>P_j
        $cmp->inner($cmp->xvals>=$cmp->yvals); #r_i=sum_{j>=i}(P_i>P_j)
    }

    sub factorials($size){
         my $f=1;
         (long [1, map {$f=$_*$f} (1..$size-1)])->(-1:0);
    }

    sub rank2permutation($rank){
        my @indices=map {my $index=floor($rank/$_); $rank%=$_; $index} $factorials->list;
        my @copy=@ordered;
        long [ map {splice @copy, $_, 1} @indices];
    }
```



[**Gurunandan Bhat**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/bhat_gurunandan/perl/ch-2.pl)

I would not be terribly surprised if, having gotten this far, someone not already familiar with the algorithm was still confused by the conversion between a ranking and the permutation found at that rank. Leading with terms like "factorial numbering system" may not have been the best choice but I'm not going to go back and start over.

Fortuantely for me, Gurunandan has provided an exceptionally well-laid-out solution we can use to display the method behind the transformation. He provides four functions: `perm2rank()`, `rand2perm()`, and two helper functions `_rank()` and `factorials()`.

`factorials()` provides a list of *n* factorials, from low to high.

`_rank()` is the ranking of a digit at its position. This is not just the vslue of the digit found there, but rather is complicated by the fact that the base value for the position does not start at 0, as say in a decimal expansion. Instead the base values are of the form (012345...). So what we are looking for here is the amount a given position value is *above* its base value, which is then used as a multiplier for a selected factorial. The factorial used here is a stand-in for the *base*<sup>*power*</sup> term in a normal positional expansion.

When translating a ranking to a particular permutation, it's easier to see the relationship between the factorial values used here and a standard positional expansion.

```perl
    sub rank2perm ($rank, $dim) {

        my $factorials = factorials ($dim);
        my @_initial = 0 .. $dim - 1;

        my $perm;
        for (0 .. $dim - 1) {

            my $fact = pop @$factorials;

            my $pos  = $rank / ($fact);
               $rank = $rank % $fact;

            $perm .= splice @_initial, $pos, 1;
        }

        return $perm;
    }
```

Some clevernaess is involved as the quotient of the Euclidean division designates the position of the digit to be used in the base permutation: (12345...)

Once a value is used it is removed from the pool of possibilities.

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC174 - Permutation Ranking](https://etoobusy.polettix.it/2022/07/22/pwc174-permutation-ranking/)

&nbsp;&nbsp;**blog writeup:**
[PWC174 - Permutation Ranking — Raku](https://etoobusy.polettix.it/2022/07/23/pwc174-permutation-ranking-raku/)

Flavio has brought us a porting of the algorithm presented on the [referenced page](https://tryalgo.org/en/permutations/2016/09/05/permutation-rank/), which seemed to be a common strategy to obtain a solution. The underlying mathematics, as you may have noticed, are a bit weird. Don't get me wrong: Awesome, but weird.

```perl
    use List::Util qw< reduce sum >;

    say permutation2rank([qw< a b c d >]);
    say permutation2rank([qw< 111 22 3 >]);
    say join ' ', rank2permutation([qw< 0 1 2 >], 1)->@*;

    sub permutation2rank ($permutation) {
       my $n = $permutation->@*;
       my @baseline = sort { $a cmp $b } $permutation->@*;
       my $factor = reduce { $a * $b } 1 .. $n;

       return sum map {
          my $target = $permutation->[$_];
          my $index = 0;
          ++$index while $baseline[$index] ne $target;
          splice @baseline, $index, 1;
          my $term = ($factor /= $n - $_) * $index;
       } 0 .. $n - 2;
    }

    sub rank2permutation ($baseline, $r) {
       my $n = $baseline->@*;
       my $factor = reduce { $a * $b } 1 .. $n - 1;
       return [
          map {
             my $index = int($r / $factor);
             $r %= $factor;
             $factor /= ($n - 1 - $_) if $factor > 1;
             splice $baseline->@*, $index, 1;
          } 0 .. $n - 1
       ];
    }
```

He does make a comment on the designated lexicographical sorting, though, and others have brought tihis up as well. The problem I'm seeming is with the definition of the term, or rather the definition with respect ot numbers. In lexicographical sorting of strings, "app" falls before "apple" and both come before "be". However in numbers we most definitly do *not* want to arrive at a the ordering (123,12345,23). So we don't do that. On one side of the decimal point we use straight numeric ordering, and on the other a dictionary sort and everything works out right: 1.23, 1.2345, 2.3. This is a hack, but gets us the results we require, providing we have a decimal point. And this hand-waving skips over what we mean by bringing in numeric ordering.

In *combinatorics*, which permutations are obviously a part of, there are no decimal points to be seen and another varaint is employed. In this interpretation shorter strings are always placed before larger. So now we get (23, 123, 12345) and the numbers are properly ordered. This version of lexicoraphic ordering is commonly known as *shortlex*.

As integers are prescribed, I'm going to consider the terms numeric and lexicographic ordering interchangable, because we are working with permutations. I find the requirement, on close inspection, unnecessarily unclear. Lexicographic ordering is well-defined, but also practically, so if we make well-defined changes to the rules to accommodate numbers we what we must to make the mathematics work right. That's the only important part. We are told the numbers are integers and any talk of sting sorting is a red herring.

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/cheok-yin-fung/perl/ch-2.pl)

CY brings us another porting of the O(n<sup>2</sup>) solution from the [referenced article](https://tryalgo.org/en/permutations/2016/09/05/permutation-rank/). There are two algorithms on the page and all mathematical submissions used one or the other.

```perl
    use List::Util qw/first/;

    sub factorial {
        my $ans = 1;
        for (1..$_[0]) {
           $ans *= $_;
        }
        return $ans;
    }

    sub permutation2rank {
        my @list = $_[0]->@*;
        my $n = scalar @list;
        my $fact = factorial($n-1);
        my $r = 0;
        my @unused_list = sort {$a<=>$b} @list;
        for my $i (0..$n-2) {
            my $q = first { $unused_list[$_] == $list[$i] } 0..$#unused_list;
            $r += $q*$fact;
            splice @unused_list, $q, 1;
            $fact = int $fact / ($n-$i-1);
        }
        return $r;
    }

    sub rank2permutation {
        my @list = $_[0]->@*;
        my $r = $_[1];
        my $n = scalar @list;
        my $fact = factorial($n-1);
        my @unused_list = sort {$a<=>$b} @list;
        my @p = ();
        for my $i (0..$n-1) {
            my $q = int $r / $fact;
            $r %= $fact;
            push @p, $unused_list[$q];
            splice @unused_list, $q, 1;
            $fact = int $fact / ($n-1-$i) if $i != $n-1;
        }
        return [@p];
    }
```



[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/ulrich-rieke/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/ulrich-rieke/cpp/ch-2.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/ulrich-rieke/haskell/ch-2.hs)

Let's get away from this mathematical messiness for a moment into more-easily comprehensible realms. Ulrich returns us to counting actual permutations made using `Algorithm::Combinatorics`. A fine choice that completely avoids thinking about factorially-based numbering systems built from descending positions. Which, weirdly enough somehow relates back to the reverse position labeling in the Disarium numbers, now that I think about it.

Not really, as here it's a side-effect to be compensated for and over there its a feature.

Whatever.

My brain hurts a bit, and this is soothing.


```perl
    sub arrayToString {
      my $array = shift ;
      my @numbers = @$array ;
      return reduce { $a . $b } @numbers ;
    }

    sub permutation2rank {
      my $array = shift ;
      my @numbers = @$array ;
      my @permutations = permutations( \@numbers ) ;
      my @strings = map { arrayToString( $_ ) } @permutations ;
      my @sorted = sort { $a cmp $b } @strings ;
      my $str = arrayToString( \@numbers ) ;
      my $i = 0 ;
      while ( $sorted[ $i ] ne $str ) {
          $i++ ;
      }
      return $i ;
    }
```

[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/steve-g-lynn/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/steve-g-lynn/julia/ch-2.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/steve-g-lynn/raku/ch-2.p6)


&nbsp;&nbsp;**blog writeup:**
[PWC #174](https://thiujiac.blogspot.com/2022/07/pwc-174.html)

One of the biggest obstacles in a brute-force attack on the problem, counting permutations until we find the right one, is identifying equality in an array. A deep examinination of comparable elements is what is the only way to create a test that is generalizable to all cases, but looping through indexes sounds terribly tedious and computationally intensive.

Stringifying the data brings its own problems with it, which although hardly insurmountable both add computational overhead and require a carefully chosen delimiter. Thinking it through reveals other questions outstanding that must be decided on as well.

Stephen addresses the issue by inviting `Array::Compare` to the party. This handy package provides an assortment of options in stringification, such as selection of a separator character, ignoring whitespace, or flattening case comparisons.


```perl
    use List::Permutor;
    use Array::Compare;

    print &permutation2rank([1,0,2]),"\n"; # 2
    print &rank2permutation([0,1,2],1),"\n"; # 021

    sub permutation2rank {
        my ($rarry) = @_;
        my $comp = Array::Compare -> new;
        my $ctr=0;
        my $p = new List::Permutor (sort @$rarry);
        while (my @set = $p->next) {
            last if $comp->compare($rarry,\@set);
            $ctr++;
        }
        return $ctr;
    }

    sub rank2permutation {
        my ($rarry, $rank) = @_; my $ctr=0;
        my $p = new List::Permutor (sort @$rarry);
        my @set=();
        while (@set = $p->next) {
            last if $ctr==$rank;
            $ctr++;
        }
        return @set;
    }
```

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/adam-russell/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Permutations Ranked in Disarray on Mars — Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/07/24)

&nbsp;&nbsp;**blog writeup:**
[Permutations Ranked in Disarray on Mars — Prolog — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/07/24)

Finally, Adam has been playing with the new lightwieght `Mars::Class` object framework and has some results for us. I'm going to assume it works. The creator of the framework makes a reasonable case for going through the effort even with the existence of all of the `Moose/Moo/Mouse` varients already in place. Considering a core Perl object model has yet to be settled, I welcome the research. The options available each have their strong points and blindspots.

```perl
    package PermutationRanking{
        use Mars::Class;
        use List::Permutor;

        attr q/list/;
        attr q/permutations/;
        attr q/permutations_sorted/;
        attr q/permutations_ranked/;

        sub BUILD{
            my $self = shift;
            my @permutations;
            my %permutations_ranked;
            my $permutor = new List::Permutor(@{$self->list()});
            while(my @set = $permutor->next()) {
                push @permutations, join(":", @set);
            }
            my @permutations_sorted = sort @permutations;
            my $rank = 0;
            for my $p (@permutations_sorted){
                $permutations_ranked{$p} = $rank;
                $rank++;
            }
            @permutations_sorted = map {[split(/:/, $_)]} @permutations_sorted;
            $self->permutations_sorted(\@permutations_sorted);
            $self->permutations_ranked(\%permutations_ranked);
        }

        sub permutation2rank{
            my($self, $list) = @_;
            return $self->permutations_ranked()->{join(":", @{$list})};
        }

        sub rank2permutation{
            my($self, $n) = @_;
            return "[" . join(", ", @{$self->permutations_sorted()->[$n]}) . "]";
        }
    }

    package main{
        my $ranker = new PermutationRanking(list => [0, 1, 2]);
        print "[1, 0, 2] has rank " . $ranker->permutation2rank([1, 0, 2]) . "\n";
        print "[" . join(", ", @{$ranker->list()}) . "]"  . " has permutation at rank 1 --> " . $ranker->rank2permutation(1) . "\n";
    }
```



## Blogs and Additional Submissions in Guest Languages for Task 2:


[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/jaldhar-h-vyas/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/jaldhar-h-vyas/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 174](https://www.braincells.com/perl/2022/07/perl_weekly_challenge_week_174.html)


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/james-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #174](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-174/james-smith)


[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/mohammad-anwar/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/mohammad-anwar/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/mohammad-anwar/raku/ch-2.raku), [Swift](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/mohammad-anwar/swift/ch-2.swift)


[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/peter-campbell-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Disarium disaster and rank permutations](https://pjcs-pwc.blogspot.com/2022/07/disarium-disaster-and-rank-permutations.html)


[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/pokgopun/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Dart](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/pokgopun/dart/ch-2.dart), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/pokgopun/go/ch-2.go)


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/roger-bell-west/javascript/ch-2.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/roger-bell-west/kotlin/ch-2.kt), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/roger-bell-west/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-174/roger-bell-west/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 174: The Rank Smell of Disarium](https://blog.firedrake.org/archive/2022/07/The_Weekly_Challenge_174__The_Rank_Smell_of_Disarium.html)


------------------------------------------





---

<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>

<center>
<h1 id="PWC174BLOGS">_________ THE BLOG PAGES _________</h1>
</center>


---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, by some miracle I somehow continue to maintain my bearings.**

**Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your Unquenchable *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC174BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *FOLLOW* these *BLOG* *LINKS*:

**( ...*don't think, trust your training, you're in the zone, just do it ...* )**


**Adam Russell**

 * [Permutations Ranked in Disarray on Mars — Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/07/24) ( *Perl* )
 * [Permutations Ranked in Disarray on Mars — Prolog — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/07/24) ( *Prolog* )

**Arne Sommer**

 * [Disarmed Ranking with Raku - Arne Sommer](https://raku-musings.com/disarmed-ranking.html) ( *Raku* )

**Flavio Poletti**

 * [PWC174 - Disarium Numbers - ETOOBUSY](https://etoobusy.polettix.it/2022/07/21/pwc174-disarium-numbers/) ( *Perl & Raku* )
 * [PWC174 - Permutation Ranking](https://etoobusy.polettix.it/2022/07/22/pwc174-permutation-ranking/) ( *Perl* )
 * [PWC174 - Permutation Ranking — Raku](https://etoobusy.polettix.it/2022/07/23/pwc174-permutation-ranking-raku/) ( *Raku* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 174](https://www.braincells.com/perl/2022/07/perl_weekly_challenge_week_174.html) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #174](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-174/james-smith) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 174: Disarium Numbers and Permutation Rankings](http://blogs.perl.org/users/laurent_r/2022/07/perl-weekly-challenge-174-disarium-numbers-and-permutation-rankings.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 174: the power of permutations – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/07/18/PerlWeeklyChallenge174.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 174: the power of permutations – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/07/18/PerlWeeklyChallenge174.html#task1plperl) ( *PL/Perl* )
 * [Perl Weekly Challenge 174: the power of permutations – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/07/18/PerlWeeklyChallenge174.html#task1plpgsql) ( *PL/PostgreSQL* )

**Peter Campbell Smith**

 * [Disarium disaster and rank permutations](https://pjcs-pwc.blogspot.com/2022/07/disarium-disaster-and-rank-permutations.html) ( *Perl* )

**Roger Bell_West**

 * [RogerBW's Blog: The Weekly Challenge 174: The Rank Smell of Disarium](https://blog.firedrake.org/archive/2022/07/The_Weekly_Challenge_174__The_Rank_Smell_of_Disarium.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 174](https://dev.to/simongreennet/weekly-challenge-174-5ga6) ( *Perl* )

**Stephen G Lynn**

 * [PWC #174](https://thiujiac.blogspot.com/2022/07/pwc-174.html) ( *Perl & Raku* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 174 – W. Luis Mochán](https://wlmb.github.io/2022/07/18/PWC174/) ( *Perl* )
