
---
author:       Colin Crain
date:         2021-05-10T00:00:00
description:  "Colin Crain › Perl Weekly Review #109"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #109"
image:        images/blog/p5-review-challenge-109.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-108/).* )

Welcome to the Perl review for **Week 109** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

---

### Why do we do these challenges?

I suppose any answers to that would be as wide ranging and varied as the people who choose to join the team. One thing is clear: it's not a competition, and there are no judges, even if there is a "prize" of sorts. About that -- I think of it more as an honorarium periodically awarded to acknowledge the efforts we make towards this strange goal. So there's no determination to find the *fastest*, or the *shortest*, or even, in some abstract way, the *best* way to go about things, although I'm certain the individuals have their own aspirations and personal drives. As Perl is such a wonderfully expressive language, this provides quite a bit of fodder to the core idea of TMTOWTDI, producing a gamut of wonderfully varied techniques and solutions.

Even the tasks themselves are often open to a certain amount of discretionary interpretation. What we end up with is a situation where each participant is producing something in the manner they find the most interesting or satisfying. Some team members focus on carefully crafted complete applications that thoroughly vet input data and handle every use case they can think up. Others chose to apply themselves to the logic of the underlying puzzle and making it work in the most elegant way they can. Some eschew modules they would ordinarily reach for, others embrace them, bringing to light wheels perhaps invented years ago that happen to exactly solve the problem in front of them today.

I've been considering this question for some time and have found one binding commonality between all of us solving these challenges each week, in that however we normally live our lives, the task in front of us more than likely has nothing to do with any of that . And I think this has great value. We all do what we do, out in the real world, and hopefully we do it well. The Weekly Challenge provides a opportunity to do something germane to that life yet distinctly different; if we only do the things we already know how to do we only do the same things over and over. This is where the "challenge" aspect comes into play.

So we can consider the Weekly Challenge as providing a problem space outside of our comfort zone, as far out from comfort as we wish to take things. From those reaches we can gather and learn things and bring what we want back into our lives. Personally, I think that's its greatest value of all.

---

Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due. And that's why I'm here, to try and figure out how to do that.

Let's have a look and see what we can find.

---

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-109/) or the summary [**recap**](/blog/recap-challenge-109/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC109TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC109TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC109BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC109TASK1}

# Chowla Numbers

*Submitted by: Mohammad S Anwar*<br>
Write a script to generate first 20 Chowla Numbers, named after [Sarvadaman D. S. Chowla](https://en.wikipedia.org/wiki/Sarvadaman_Chowla), a London born Indian American mathematician. It is defined as:

C(n) = sum of divisors of n except 1 and n

**Output:**
```
    0, 0, 0, 2, 0, 5, 0, 6, 3, 7, 0, 15, 0, 9, 8, 14, 0, 20, 0, 21

```

## about the solutions

There were 24 submissions for the first task this past week.

The Chowla numbers have a straightforward definition composed of two easily comprehended parts: a list of divisors, slightly qualified, and a directive to add them up. That's it — no interdependencies, no complications. As the Chowla function is a variant of the divisor sum function, minus the number itself and 1, and the primes are defined as those numbers whose only divisors are itself and 1, then it follows that the Chowla number for every prime is by definition 0. Because of the crypto-random unpredictability of the prime numbers, then, it follows that the zeros of the Chowla numbers must therefore be aperiodic, as the the zeros and the primes are isomorphic sequences. More strongly stated, above 1 they are the same sequence.

Like a reverse sieve of Eratosthenes, patterns can be found in the Chowla numbers. For example, tracing the numbers for powers of 2 reveals the delta between C(*n*) and C(*n*+1) to be 2<sup><i>n</i></sup>. However the existence of these patterns cannot be easily used to construct the sequence going forward, as the arithmetic interrelationships between the divisor set members become increasingly complex as the set sizes grow. We can talk *about* the sequence, study its properties, but there are no shortcuts to its derivation.

The challenge, then, remains reduced to the two parts of the Chowla number definition: determining the specific divisor subset required and then summing those values. Both of these steps found themselves expressed in a variety of manners, which we will look at.


## TRIAL DIVISION
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/arne-sommer/perl/ch-1.pl),
[**Bartosz Jarzyna**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/brtastic/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/cheok-yin-fung/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/duncan-c-white/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/james-smith/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/laurent-rosenfeld/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/perlboy1967/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/sgreen/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/ulrich-rieke/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/wanderdoc/perl/ch-1.pl)




The most basic way to determine whether a number is a divisor of another number is to try the division and see it there is any remainder. Exhaustively trying succesive values until all of the divisors have been found is known as trial division. Although we can't necessarily predict the divisor set in advance, we can place constraints on the required values to try, so by trying them all we can conclude we have found all the divisors.

### done imperatively...

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/jaldhar-h-vyas/perl/ch-1.pl)

Jaldhar will start us off today with a no-frills demonstration of the required techniques, presented in an imperative manner. He sets up a loop that skips the 1 divisor and proceeds upwards to one-half the target. As any divisor above that point would have a multiplier less than 2, and hence be fractional, no whole divisors will be found above that point until the multiplier becomes 1, which is specifically excluded. He then applies modulo division to the candidate, and if the remainder is 0, adds the value to a running sum.

These steps will find all the divisors of a numbers, skipping 1 and the number itself, and derive the Chowla number from them.

```perl
    for my $i (2 .. $n / 2) {
        if ($n % $i == 0) {
            $sum += $i;
        }
    }
```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/cheok-yin-fung/perl/ch-1.pl)

The Chowla numbers start with three trivial cases: for *n* = 1, 2, or 3 the only divisors are 1 and *n*, and so, as these are excluded from the calculation, the Chowla number is 0. CY skips bothering to calculate these, initializing her list with three 0s and starting her calculations at C(4).


```perl
    my @chowla_seq = (0,0,0);

    for my $n (4..$F) {
        my $s = 0;
        for my $k (2..$n-1) {
            $s += $k unless $n % $k;
        }
        push @chowla_seq, $s;
    }
```

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/wanderdoc/perl/ch-1.pl)

The doctor breaks their processing into two procedures, one to sum all the divisors of a number, and a second to convert that value to a Chowla number by removing 1 and the number itself from the results. When *n* = 1 the value 1 as a factor needs to be only counted once, so a special case is then required to only remove it once.

```perl
    sub chowla_num
    {
         my $num = $_[0];
         my $div_sum = div_sum($num);
         my $chowla_num = $num == 1 ? ($div_sum - 1) : ($div_sum - 1 - $num);
         return $chowla_num;
    }

    sub div_sum
    {
         my $num = $_[0];
         my $sum = 0;
         return $num if $num < 2;
         for my $i ( 1 .. $num )
         {
              $sum += $i if ( $num % $i == 0 )
         }
         return $sum;
    }
```

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/arne-sommer/perl/ch-1.pl)

Arne has provided us with a more general-purpose divisors routine, configurable to selectively remove the `self` and `1` divisors. When given the parameters `($n, 0, 0)` the routine returns σ<sub>1</sub>(<i>n</i>), [the sum of all the divisors](https://en.wikipedia.org/wiki/Divisor_function), and `($n, 1, 0)` produces the [aliquot sum](https://en.wikipedia.org/wiki/Aliquot_sum) <i>s</i>(<i>n</i>).

```perl
    sub divisors ($number, $not_self, $not_one)
    {
      my @divisors;

      for my $candidate ( ($not_one ? 2 : 1) .. $number/2)
      {
        push(@divisors, $candidate) unless $number % $candidate;
      }

      push(@divisors, $number) unless $not_self;

      return @divisors;
    }
```

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/ulrich-rieke/perl/ch-1.pl)

Ulrich also gives us a separate routine, this one to only provide a list of divisors specific to the criteria of the Chowla numbers. In the main body they are added up with the `List::Util::sum()` function, which provides a nice segue into our next section. As we have noted, the first three numbers have no valid divisors, so for these an exit case provides and early return. The 0 value for these results is added separately.


```perl
    sub chowladivisors {
        my $n = shift ;
        if (  $n == 1 or $n == 2 or $n == 3  ) {
            return () ;
        }
        else {
            my @divisors ;
            for my $i ( 2 .. $n - 1 ) {
                if (  $n % $i == 0  ) {
                    push @divisors , $i ;
                }
            }
            return @divisors ;
        }
    }
```

### ...or functionally

Something about the task definition inspired an unusual number of submissions constructed in a functional programming style. I'm loosely interpreting this as a data flow applying listwise conversions of an array of candidate values into divisors, creating first a new list of divisors and then reducing that list to a final value.

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/dave-jacoby/perl/ch-1.pl)

Dave provided code examples done two ways: imperatively, in the manner we've just seen earlier, and then again functionally, processing the data in discreet steps.

Here he starts with a range of all positive values from 1 to *n*, first filtering them to remove 1, then again with *n*, then filtering a third time to only yield values that evenly divide *n*. The `List::Util` function `sum0` sums the list to a real value, providing a 0 in the case of an empty list.

```perl
    sub chowla2 ( $n ) {
        return sum0
            grep { $n % $_ == 0 }
            grep { $_ != 1 }
            grep { $_ != $n } 1 .. $n;
    }
```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/perlboy1967/perl/ch-1.pl)

With Niels the steps are broken apart into individual lines but the end result is the same.

```perl
    sub chowlaNumber($);

    sub chowlaNumber($) {
        my ($n) = @_;
        my @devisors = grep { $n % $_ == 0} 2 .. int($n/2);
        return sum0(@devisors);
    }
```

[**Bartosz Jarzyna**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/brtastic/perl/ch-1.pl)

Bartosz streamlines things, inlining his function and wrapping it in a `for` loop to obtain the requested 20 values of the sequence.

```perl
    for my $num (1 .. 20) {
        say sum0 grep {
            $num % $_ == 0
        } 2 .. int($num / 2);
    }
```


[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/perl/ch-1.pl)

Additional Languages:

[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/awk/ch-1.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/bash/ch-1.sh), [Basic](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/basic/ch-1.bas), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/bc/ch-1.bc), [Befunge-93](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/befunge-93/ch-1.bf93), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/c/ch-1.c), [Cobol](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/cobol/ch-1.cb), [Csh](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/csh/ch-1.csh), [Erlang](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/erlang/ch-1.erl), [Forth](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/forth/ch-1.fs), [Fortran](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/fortran/ch-1.f90), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/go/ch-1.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/java/ch-1.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/lua/ch-1.lua), [M4](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/m4/ch-1.m4), [Mmix](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/mmix/ch-1.mms), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/node/ch-1.js), [Ocaml](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/ocaml/ch-1.ml), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/pascal/ch-1.p), [Php](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/php/ch-1.php), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/python/ch-1.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/r/ch-1.r), [Rexx](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/rexx/ch-1.rexx), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/ruby/ch-1.rb), [Scheme](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/scheme/ch-1.scm), [Sed](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/sed/ch-1.sed), [Sql](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/sql/ch-1.sql), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/tcl/ch-1.tcl)

And Abigail takes this one step further, wrapping the functions that produce the Chowla numbers in an additional `map` block that works on a list of indices for the sequence.

```perl
    my $COUNT = 20;
    use List::Util qw [sum0];
    $, = ", ";
    say map {my $n = $_; sum0 grep {!($n % $_)} 2 .. $_ / 2} 1 .. $COUNT;
```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/laurent-rosenfeld/perl/ch-1.pl)

Additional Languages:

[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/laurent-rosenfeld/awk/ch-1.awk), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/laurent-rosenfeld/c/ch-1.c), [D](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/laurent-rosenfeld/d/ch-1.d), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/laurent-rosenfeld/go/ch-1.go), [Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/laurent-rosenfeld/julia/ch-1.julia), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/laurent-rosenfeld/pascal/ch-1.p), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/laurent-rosenfeld/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/laurent-rosenfeld/raku/ch-1.raku), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/laurent-rosenfeld/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/laurent-rosenfeld/rust/ch-1.rs), [Scala](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/laurent-rosenfeld/scala/ch-1.scala)

Just to put these together for easy comparison, Laurent submitted a imperative solution repeated in a large selection of additional languages.

```perl
    sub chowla {
        my $n = shift;
        return 0 if $n <= 2;
        my @divisors = grep {$n % $_== 0} 2..($n / 2);
        my $sum = 0;
        $sum += $_ for @divisors;
        return $sum;
    }
```



[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/james-smith/perl/ch-1.pl)

James provides solutions done two ways:

He first submitted a functional solution using `map` to process the data.

```perl
    sub chowla_map {
      my ($t,$n) = (0,@_);
      ( map { (($n%$_) || ($t+=$_)) && () } 2..$n>>1 ), $t;
    }
```

He then produced an imperative version using a `for` loop:

```perl
    sub chowla_for {
      my($t,$n)=(0,@_);
      ($n%$_)||($t+=$_) for 2..$n>>1;
      $t;
    }
```

In an unexpected twist, after using `Benchmark` to compare the two he decided the `for` version was significantly faster and decided to go with that. Functional programming has considerable strengths with the discreet compartmentalization of the steps in complex processes, leading to easier optimization, modification and debugging, but this often comes at the expense of other factors, such as raw speed.


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/polettix/perl/ch-1.pl)

And now, Flavio has provided us with something completely different: using a [greatest common divisor](https://en.wikipedia.org/wiki/Greatest_common_divisor) routine to vet the divisor candidates.  He rolls up a quick version of Euclid's method for computing the gcd, then finds that if the gcd between the candidate and the target is indeed the candidate, then it is itself an even divisor. This is a fascinatingly roundabout way to approach the idea.

I find this somewhat analogous to burning down the house to kill a spider, but it gets the job done and certainly made me think.

```perl
    sub gcd { my ($A, $B) = @_; ($A, $B) = ($B % $A, $A) while $A; return $B }

    sub chowla_number ($n) { sum(grep { gcd($n, $_) == $_ } 2 .. $n - 1) // 0 }
```


## THE SQUARE ROOT
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/adam-russell/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/colin-crain/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/e-choroba/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/wlmb/perl/ch-1.pl)

One major refinement to trial division is that when a divisor for a number has been determined, there is always another integer that complements the factor such that the two numbers, when multiplied, yield the third. This complement is of course also a divisor of the original number, so in finding one factor, save in the case of a perfect square root, we have always in fact found two. The square root, in this case, works as a fulcrum: whenever a factor is found below the square root, a complement will be found above it, and for every factor on one side of the locus, there exists exactly one complement to it on the other. The only exception, of sorts, is when the number is the square root, because its complement is also the square root; this is in fact the definition. When counting divisors, primes and composite factors, we are counting individual values that evenly divide the product, so it makes no sense to count the square root twice, as it will have already been noted the first time we found it.

The square root for every value above 4 is less than one-half the value. Because of the one-to-one relationship between the divisors above and below the square root, we need only iterate upwards, and as each divisor is found in turn we also record its complement, continuing until we arrive at the root. As there cannot be a divisor above the square root without a complement below, once we traverse the smaller span below we no longer need to check the larger above, limiting the number of required trials for the Chowla numbers to √<i>n</i> - 1.

[note: The actual break-even on the over and under is a little more complicated but falls at 6. Drop me a note if you really care on how I came to this conclusion. For any number there or higher it's either advantageous to count upwards from 2 versus down from the half-way point to the square root or makes no difference. 5 is a bit of an anomaly but it's prime anyway.]

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/e-choroba/perl/ch-1.pl)

Here Choroba demonstrates running up to the square root in a nicely laid-out manner. One interesting thing he chooses to do is he always adds the complement when a factor is found, and then later subtracting the root should a perfect square root divisor exist. This may at first seem wasteful, to add a value just to remove it, but in the end only a single comparison is made, rather than putting the condition inside the loop and checking every candidate case; most numbers will not have a whole square root.

I should have thought of that.

```perl
    sub chowla {
        my ($n) = @_;
        my $ch = 0;
        my $s = sqrt $n;
        0 == $n % $_ and $ch += $_ + $n / $_ for 2 .. $s;
        $ch -= $s if $n > 1 && $s == int $s;
        return $ch
    }
```

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/colin-crain/perl/ch-1.pl)

For my own solution I used a ternary operator to decide whether or not to add the conditional to the summation.

```perl
    sub sum_divisors ($n) {
        my $out = 0;
        for (2..sqrt $n) {
            unless ($n % $_) {
                $out += ($n/$_ == $_ ? $_ : $_ + $n/$_) ;
            }
        }
        return $out;
    }
```

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/adam-russell/perl/ch-1.pl)

Adam uses a pair of `if` predicates to determine which factors to add to his list of divisors. I belive putting it this way demonstrates his logic programming background showing through.

```perl
    sub factor{
        my($n) = @_;
        my @factors = ();
        foreach my $j (2..sqrt($n)){
            push @factors, $j if $n % $j == 0;
            push @factors, ($n / $j) if $n % $j == 0 && $j ** 2 != $n;
        }
        return @factors;
    }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/wlmb/perl/ch-1.pl)

Finally, Luis condenses many of the techniques we've seen today into a single one-liner, reading an input from the command line and producing the corresponding Chowla number from the sequence.

Here we have a logic chain that takes a list of integer indexes from 2 to the truncated square root, filters it first for divisibility, then maps the result conditionally to either the value or the value and the complement, to a list which is then summed. The entire thing is wrapped in a `map` block to be applied to the command line arguments.

```perl
    say join ' ',
        map {my $n=$_; sum0 map {$_**2==$n?$_:($_, $n/$_)}
         grep {$n%$_==0} 2..sqrt($n)} @ARGV;
```





## getting the divisors SOME OTHER WAY
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/athanasius/perl/ch-1.pl) and
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/jo-37/perl/ch-1.pl)


Psst! Hey you! You wanna buy some divisors? No questions asked?

I have found, on the whole, mathematicians to be a fairly sketchy, disreputable lot: unshorn, disheveled, shirt cuffs and brows smeared with graphite dust, they spend their days sharpening pencils and staring into nearly unimaginable primordial symmetries rather than concerning themselves with minor social graces. You know who you are. Or maybe don't, I don't know. Self-reflection was never a strong point with the individuals I'm describing ;)

The upshot is, though, that when one of these sages offers you a glimpse of the world behind the world, the sensible thing to do is take it and say thank you. Divisors have been studied since the birth of mathematics, and they don't exactly change or anything.

Rather than deriving them yourself, there are a variety of ways to ask for them.

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/athanasius/perl/ch-1.pl)

The monk imports `Math::Prime::Util`, taking the two functions `divisors()` and `is_prime()`. The second is used for a shortcut out, as we know that the Chowla number for all primes is 0.

The `divisors()` routine returns all the divisors for a given number, including itself and 1. To get the Chowla number, this list is summed from index 1 to the index one before the last.

```perl
    return 0 if $n == 1 || is_prime( $n );

    my @divisors = divisors( $n );

    my $sum  = 0;
       $sum += $divisors[ $_ ] for 1 .. $#divisors - 1;         # Omit 1 and $n
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/jo-37/perl/ch-1.pl)

I quite enjoy how Jorg is here every week to explain to us how `Math::Prime::Util` contains yet another function that quietly makes our problems go away. Whatever that problem may be. I mean, after all I just counted and there seem to be 204 of these functions, so there are a lot to go around. This week it's `divisor_sum()`, which does exactly what it says.

I thought the technique to not remove the 1 factor twice when asked for Chowla(1) was quite remarkable. So consider it remarked.


```perl
    use Math::Prime::Util 'divisor_sum';

    sub chowla ($n) {
        divisor_sum($n) - $n - ($n > 1);
    }
```





------------------------------------------





---

# TASK 2 {#PWC109TASK2}

# Four Squares Puzzle
*Submitted by: Mohammad S Anwar*<br>
You are given four squares as below with numbers named a,b,c,d,e,f,g.

```
              (1)                    (3)
        ╔══════════════╗      ╔══════════════╗
        ║              ║      ║              ║
        ║      a       ║      ║      e       ║
        ║              ║ (2)  ║              ║  (4)
        ║          ┌───╫──────╫───┐      ┌───╫─────────┐
        ║          │   ║      ║   │      │   ║         │
        ║          │ b ║      ║ d │      │ f ║         │
        ║          │   ║      ║   │      │   ║         │
        ║          │   ║      ║   │      │   ║         │
        ╚══════════╪═══╝      ╚═══╪══════╪═══╝         │
                   │       c      │      │      g      │
                   │              │      │             │
                   │              │      │             │
                   └──────────────┘      └─────────────┘
```

Write a script to place the given unique numbers in the square box so that sum of numbers in each box is the same.

**Example**

**Input:**

```
    1,2,3,4,5,6,7

```

**Output:**

```
    a = 6
    b = 4
    c = 1
    d = 5
    e = 2
    f = 3
    g = 7

    Box 1: a + b = 6 + 4 = 10
    Box 2: b + c + d = 4 + 1 + 5 = 10
    Box 3: d + e + f = 5 + 2 + 3 = 10
    Box 4: f + g = 3 + 7 = 10
```

## about the solutions

There were 22 submissions for the second task this past week. Although superficially resembling the Olympic Rings problem from PWC 043, here, on investigation it soon became apparent that there was insufficient information to solve the problem outright to a single solution as a set of simultaneous equations.

The equations can be manipulated and combined to reflect variables in terms of other variables, but with 8 terms to be assigned — the seven given and the eighth they sum to — it soon became clear that there would be a certain amount of trial-and-error in fitting the inputs to the criteria.

Overwhelmingly, the choice was to try all the possible ways to assign the input list to find those arrangements that worked. This led to variety in the manner of gathering these permutations, either by using a module function or by constructing one's own routine,  iteratively or recursively.

Another approach was to work over the equations to derive some area values through equivalencies with others. While this approach cannot produce complete solutions in itself, it can be used as the basis to traverse a greatly reduced search space. There were some extremely creative solutions offered in this area.

And finally, we have Adam Russell, who built a robot to find the answer for him.

## try ALL THE WAYS
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/arne-sommer/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/athanasius/perl/ch-2.pl),
[**Bartosz Jarzyna**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/brtastic/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/jaldhar-h-vyas/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/jo-37/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/laurent-rosenfeld/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/perlboy1967/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/sgreen/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/wlmb/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/wanderdoc/perl/ch-2.pl)

For 7 numbers, there are only 7! ways to arrange those numbers in a list. This number, 7 factorial, is 7 × 6 × 5 × 4 × 3 × 2 × 1 = 5040 possible arrangements. In the world of data processing, that's barely warming up the engine. With the size of the data set so constricted it's perfectly reasonable to simply try the values in all arrangements and see which ones work.

This was certainly the easiest and most straightforward way to get to a solution set.

### either by USING A MODULE
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/arne-sommer/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/athanasius/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/dave-jacoby/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/e-choroba/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/jo-37/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/perlboy1967/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/roger-bell-west/perl/ch-2.pl), and
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/stuart-little/perl/ch-2.pl)

There are a variety of modules available to provide permutations, and for this challenge we saw [`Algorithm::Combinatorics`](https://metacpan.org/pod/Algorithm::Combinatorics), [`Algorithm::Permute`](https://metacpan.org/pod/Algorithm::Permute), [`Algorithm::Loops qw( NextPermute )`](https://metacpan.org/pod/Algorithm::Loops#NextPermute*) and [`Math::Prime::Util qw( forperm )`](https://metacpan.org/pod/Math::Prime::Util#forperm) getting the job done.

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/arne-sommer/perl/ch-2.pl)

We will start out with a fan favorite around here, `Algorithm::Combinatorics`, with its `permutations` routine. When called in list context this returns all the permutations at once, as a list of anonymous arrays. We see here he iterates over this list, checking the sub-list references against a validation routine and printing the results should the configuration pass.

The validation routine itself simply encodes the given rule set in a clear and concise manner, returning Perl truth, that is `1`, or `undef`.

```perl
    for my $perm (permutations(\@values))
    {
      if (check_values(@$perm))
      {
        ... output
      }
    }

    sub check_values (@values)
    {

      my ($a, $b, $c, $d, $e, $f, $g) = @values;
      my $box1 = $a + $b;
      my $box2 = $b + $c + $d;
      my $box3 = $d + $e + $f;
      my $box4 = $f + $g;
      return ($box1 == $box2 && $box3 == $box4 && $box1 == $box3)
    }
```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/perlboy1967/perl/ch-2.pl)

Still using `Algorithm::Combinatorics` for our permutations,
Niels presents a novel  way of quickly finding equivalence in his four base equations. He does this by first summing the appropriate array slices and then applying `minmax` from `List::MoreUtils`. As one might infer, this handy function returns a tuple of both the minimum and maximum values from a given list in one request. In this case the list is the sums, and if the minimum equals the maximum then it follows that thay must all be the same value.

```perl
  my $iter = permutations($numbers);
  while (my @p = @{$iter->next // []}) {
    my ($min,$max) = minmax(sum(@p[0..1]),sum(@p[1..3]),sum(@p[3..5]),sum(@p[5..6]));
    if ($min == $max) {
      $solutions{join(',',@p)}++;
    }
  }
```

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/colin-crain/perl/ch-2.pl)

For my own submission, I prioritized keeping the logic flow simple and straightforward. Much like Arne, I assign a candidate, validate it, and, if that validation checks out, return the common value the squares sum to. In the output I group the results by this value, reporting on the total number of solutions found for a given input, the possible values they sum to, and the actual assignment lists for the individual solutions.

The chained comparisons are a new feature available in 5.32.0. This is one of my favorite new features and I believe it was the final impetus that got me to upgrade. Never looked back.

```perl
    sub find_solutions ($list) {
        my @out;
        for my $candidate ( permutations($list) ) {
            my $n = validate($candidate);
            push @out, [$candidate, $n] if defined $n;
        }

        return @out;
    }

    sub validate ($r) {
        my $n = $r->[0] + $r->[1];
        return $n if     $n
                     ==  $r->[1] + $r->[2] + $r->[3]
                     ==  $r->[3] + $r->[4] + $r->[5]
                     ==  $r->[5] + $r->[6] ;
        return undef;
    }
```

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/wanderdoc/perl/ch-2.pl)

I do so very much enjoy wandering across clean, clearly laid-out code, and the doctor's version of scanning over the permutations is simplicity itself. I especially like the summed array slices, and we will see this technique used again.

```perl
    my $iter = permutations(\@data);
    while (my $p = $iter->next)
    {
         my $test = test_sums(@$p);
         print join(":\t", $test, join('',('|', join('|',
              join(" ", @$p[0 .. 1]), join(" ", @$p[1 .. 3]),
              join(" ", @$p[3 .. 5]), join(" ", @$p[5 .. 6])), '|')) ), $/, $/
         if looks_like_number($test);
    }

    sub test_sums
    {
         my @arr = @_;

         my $box1 = sum(@arr[0 .. 1]);
         my $box2 = sum(@arr[1 .. 3]);
         my $box3 = sum(@arr[3 .. 5]);
         my $box4 = sum(@arr[5 .. 6]);

         if ( $box1 == $box2 and $box1 == $box3 and $box1 == $box4 )
         {
              return $box1;
         }
         return 'Nope';
    }
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/dave-jacoby/perl/ch-2.pl)

Moving on down the module list, `Algorithm::Permute` came in a close second. This module by default returns an iterator object, which will calculate and return a new permutation on every call. This has obvious advantages in conserving memory, as the entire list of results is not generated and stored all at once.

```perl
    my $ap    = Algorithm::Permute->new( \@array );
    while ( my @perm = $ap->next ) {
        my $b1   = _box_1(@perm);
        my $b2   = _box_2(@perm);
        next if $b1 != $b2;
        my $b3   = _box_3(@perm);
        next if $b1 != $b3;
        my $b4   = _box_4(@perm);
        next if $b1 != $b4;

        ... output here, which is very nice

    }

    sub _box_1( @array ) {
        return $array[0] + $array[1];
    }

    sub _box_2( @array ) {
        return $array[1] + $array[2] + $array[3];
    }

    sub _box_3( @array ) {
        return $array[3] + $array[4] + $array[5];
    }

    sub _box_4( @array ) {
        return $array[5] + $array[6];
    }
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/roger-bell-west/perl/ch-2.pl)

One of the most interesting advantages available when using `Algorithm::Permute` is its "speed demon" mode, which utilizes a callback interface to execute a block of code on the array with every permutation, the elements uniquely rearranged only for that particular iteration.

This action is, according to its documentation, extremely fast.

One you get past Roger's parsimonious variable naming, and the fact his `$b` is square "c", and `$c` is square "e", it becomes quite clear his conditional is just checking equivalence between the four squares, as expected.

```perl
    sub foursquare {
      my @in=@_;
      my @sol;
      Algorithm::Permute::permute {
        my $b=$in[1]+$in[2]+$in[3];
        if ($in[0]+$in[1]==$b) {
          my $c=$in[3]+$in[4]+$in[5];
          if ($b==$c && $c == $in[5]+$in[6]) {
            @sol=@in;
          }
        }
      } @in;
      return \@sol;
    }
```

### or by CONSTRUCTING THEIR OWN
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/duncan-c-white/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/jaldhar-h-vyas/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/laurent-rosenfeld/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/sgreen/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/wlmb/perl/ch-2.pl)

The ease of importing a routine notwithstanding, others chose to create their own permutators, either iteratively or recursively, with or without a callback routine.

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/polettix/perl/ch-2.pl)

As permutation problems come up every once and a while in these challenges, many members have their own routines sitting somewhere on a shelf, ready to get pulled down and dusted off. Here Flavio implements Heap's Algorithm in an iterative, iterator based-version:

```perl
    sub permutations_iterator {
       my %args = (@_ && ref($_[0])) ? %{$_[0]} : @_;
       my $items = $args{items} || die "invalid or missing parameter 'items'";
       my $filter = $args{filter} || sub { wantarray ? @_ : [@_] };
       my @indexes = 0 .. $#$items;
       my @stack = (0) x @indexes;
       my $sp = undef;
       return sub {
          if (! defined $sp) { $sp = 0 }
          else {
             while ($sp < @indexes) {
                if ($stack[$sp] < $sp) {
                   my $other = $sp % 2 ? $stack[$sp] : 0;
                   @indexes[$sp, $other] = @indexes[$other, $sp];
                   $stack[$sp]++;
                   $sp = 0;
                   last;
                }
                else {
                   $stack[$sp++] = 0;
                }
             }
          }
          return $filter->(@{$items}[@indexes]) if $sp < @indexes;
          return;
       }
    }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/wlmb/perl/ch-2.pl)

It has become somewhat rare, in these modern times, to even come across "whom", the correct object form of the English pronoun "who", in a sentence, and so it was all the more surprising to arrive at it in a piece of computer code. But here, now in the second decade of this new millenium, apparently all bets are off. In any case it's a fine word, useful to avoid the subject-object confusion that has been running so rampant these days throughout public discourse since the black ships came. In times of trouble it's good to revisit what works and it's welcome here. Every little bit helps.

In said code, of note was this method of summing the squares and validating:

```perl
    next if (my @sums=uniq map {add($squares[$_], @perm)} (0..$#squares))>1;
```

And here's his `permutator()`, containing the afore-referenced phrase "with whom to permute":

```perl
    sub permutator {  #returns an iterator for permutations
        my @items = @_;
        my $n_items = @items;
        my $n = 0;
        my $done = 0;
        sub {
            return if $done;
            my $which = $n; #next item to transpose
            return @items if $n++ == 0; #return first time through
            my $with_whom = 1; #with whom to permute
            while( $with_whom <= $n_items && $which % $with_whom == 0 ){
                $which /= $with_whom;
                ++$with_whom;
            }
            $done = 1, return if $with_whom > $n_items; #no more transpositions
            $which = $with_whom - $which % $with_whom;
            #use negative indices to transpose rightmost first
            @items[-$with_whom + 1..-1] = reverse @items[-$with_whom + 1..-1]; #reorder
            @items[-$which, -$with_whom] = @items[-$with_whom, -$which]; # transpose
            return @items
        }
    }
```

Smashing.

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/laurent-rosenfeld/perl/ch-2.pl)

Additional Languages:

[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/laurent-rosenfeld/awk/ch-1.awk), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/laurent-rosenfeld/c/ch-1.c), [D](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/laurent-rosenfeld/d/ch-1.d), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/laurent-rosenfeld/go/ch-1.go), [Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/laurent-rosenfeld/julia/ch-1.julia), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/laurent-rosenfeld/pascal/ch-1.p), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/laurent-rosenfeld/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/laurent-rosenfeld/raku/ch-1.raku), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/laurent-rosenfeld/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/laurent-rosenfeld/rust/ch-1.rs), [Scala](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/laurent-rosenfeld/scala/ch-1.scala)

Laurent starts with an analysis of the fundamental equations, noting, amongst other things,

>a + 2b + c + 2d + e + 2f + g must be a multiple of 4.

Which is a very interesting observation. However he also goes on to the inevitable conclusion that no amount of massaging the parameters will eliminate the need for trial-and-error searching. To this end, he comments:

>Since we probably need an exhaustive search in the end, let’s do everything with an exhaustive search

Which is about where I landed on the subject.

He submits to us a concise and tight solution, presented here in its entirety.

```perl
    sub add {
        my $sum = 0;
        $sum += $_ for @_;
        return $sum;
    }
    sub check_squares {
        my @in = @{$_[0]};
        my $sum = add @in[0, 1];
        return ($sum == add @in[1..3] and
                $sum == add @in[3..5] and
                $sum == add @in[5, 6] );
    }
    sub permute {
        my ($perm_ref, $inref) = @_;
        my @in = @$inref;
        if (scalar @in == 0) {
            say "@$perm_ref" if check_squares $perm_ref;
            return;
        }
        permute([@$perm_ref, $in[$_]], [ @in[0..$_-1, $_+1..$#in] ]) for 0..$#in;
    }
    my @input = 1..7;
    permute [], \@input;
```



[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/duncan-c-white/perl/ch-2.pl)

Duncan provides us with a chain of functions in the form of a permutation iterator that contains a callback to a validator/output function.

The permutation set is constructed recursively and built up from shorter components; the first act of the callback is to filter out those sets that contain less than 7 elements. All 5040 permutations are, however, generated in the end, and quickly.

```perl
    fun allpermutations( $cb, $perm, @v )
    {
        if( @v == 0 )
        {
            $cb->( @$perm );
            return;
        }
        foreach my $i (0..$#v)
        {
            # remove $v[$i] from the values, append it to the @$perm
            allpermutations( $cb,
                [ @$perm, $v[$i] ],
                @v[0..$i-1], @v[$i+1..$#v] );
        }
    }

    #
    # printifsolution( @perm );
    #    check whether @perm (7 values) is a four-square solution;
    #    print it if so.
    #
    fun printifsolution( @perm )
    {
        die unless @perm==7;
        my( $a, $b, $c, $d, $e, $f, $g ) = @perm;
        my $sum = $a+$b;
        return unless $sum == $b+$c+$d && $sum == $d+$e+$f && $sum == $f+$g;
        say "solution: a=$a, b=$b, c=$c, d=$d, e=$e, f=$f, g=$g";
    }

    allpermutations( \&printifsolution, [], ,@v );
```

## a GENERALIZED SOLUTION
[**Bartosz Jarzyna**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/brtastic/perl/ch-2.pl) and
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/stuart-little/perl/ch-2.pl)

Most of the techniques hard-coded the comparisons for the squares, and the equations defining the relationships. However some members took a more abstract approach, generalizing the relationships. One unnoticed, or at least nearly unmentioned, side effect of this was that these solutions would in principle work for generalized *n*-square puzzles. To explain:

[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/stuart-little/perl/ch-2.pl)

Stuart uses the callback interface from `Algorithm::Permute` we saw earlier to apply an inlined function block on every permutation, which in turn calls a validation/output routine, `checkSameSums()` to print out working combinations.

His method of deriving the appropriate index runs for the four squares using array slices is... unique. It's especially interesting because by generating the associations instead of hard-coding them, his solution works nearly perfectly as-is for a generalized *n*-square problem. For example, for a 5-square an additional square, "i" is added, overlapping "g" and creating a new area "h". This can continue indefinitely.

For *n* = 6 the processing began to take a while, but the method ultimately provided 20 solutions for (1,2,3,4,5,6,7,8,9,10,11), with only minor adjustments required for the `pprnt()` output function, to get the lettering right. As long as there are 2*n* - 1 inputs it will attempt to find an answer.

```perl
    permute {
        if (checkSameSums(\@ARGV)) {
            $solCount++;
            my $out = pprnt(\@ARGV);
            say "Solution: $out\nSum: ${\ do{sum @ARGV[0,1]}}\n"
        } } @ARGV;

    (! $solCount) && do {
        say "No solution."
    }

    sub checkSameSums($aref) {
        my $len = scalar @{$aref};
        return all {$_ == sum $aref->@[0,1]}
               map {sum $aref->@[2*$_-1..(min(2*$_+1,$len-1))]}
                   (1..(int $len/2));
    }
```

[**Bartosz Jarzyna**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/brtastic/perl/ch-2.pl)

From the "twisted mind" [his words, not mine] of Bartosz we have a different, novel method for summing the squares, that generalizes outward to other values of *n*.

He starts with a homemade `permute` function which uses a recursive algorithm to build up and return all permutations up to 7 places, although this constant can be adjusted.

The curious part comes when he brackets the permutations with 0s on each end of the array,
so all squares have 3 values to sum. He then mathematically creates the list (0,2,4,... *n*-2) based on the number of input values. He uses this to find the start index for sets of tuples which he maps over to compute the individual area values. This is, in my mind, a very sneaky way to normalize the data set into consistant groups of three and is nothing like anything we've seen elsewhere today.

```perl
    for my $case (permute @input) {
    	my @real_case = (0, @$case, 0);
    	my @summed_groups = map {
    		sum0 map { $real_case[$_] } $_ .. $_ + 2
    	} grep {
    		$_ % 2 == 0 && $_ <= @real_case - 2
    	} keys @real_case;

    	my $letter = 'a';
    	push @results, {map { $letter++, $_ } @$case}
    		if all { $_ == @summed_groups[0] } @summed_groups;
    }
```



## MASSAGE the EQUATIONS
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/e-choroba/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/james-smith/perl/ch-2.pl), and
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/mohammad-anwar/perl/ch-2.pl)

The four equalities in the description can, as we have noted, be rearranged to establish properties about the values in relationship to each other. Because of this, certain variables, if defined, can be used to determine others, obviating the necessity of entertaining alternate values for them and hence limiting the search space.

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/e-choroba/perl/ch-2.pl)

Choroba provides us with solutions done two ways. In the second, "fast" solution he uses `Algorithm::Permute` in a now-familiar way, to compute all the possibilities and test them against a short-circuiting bank of conditionals. After running tests with `Benchmark`, he shows the the fast code running 14 to 50 times quicker than his "slow", no small difference.

But it's the slow version we're going to look at, because we've seen plenty of examples similar to the other, and we haven't seen this approach elsewhere.

In a "slow" version, he uses loops to start plugging in values to the variables from the data set, moving on when encountering duplicated choices. With 7<sup>7</sup> combinations with repetition to filter that's a lot of weeding, but most get filtered is a step of two.

After a few variables have been set he can start looking for contradictions as well, which pile on as more variables are looped in. There are a lot of loops but only a few assignment variations will be allowed to propagate deeply. In my own pursuit I ventured about half-way down this road before turning back and using a permutation routine, so I am quite interested to see this version completely flushed out.

```perl
    sub four_squares {
        my @numbers = @_;
        my %at;
        undef $at{ $numbers[$_] }{$_} for 0 .. $#numbers;
        for my $A (0 .. $#numbers) {
            for my $C (0 .. $#numbers) {
                next if $A == $C || ! exists $at{ $numbers[$A] - $numbers[$C] };

                for my $D (keys %{ $at{ $numbers[$A] - $numbers[$C] } }) {
                    next if grep $D == $_, $C, $A;

                    for my $E (0 .. $#numbers) {
                        next if grep $E == $_, $A, $C, $D;

                        for my $G (keys %{ $at{ $numbers[$D] + $numbers[$E] } }) {
                            next if $numbers[$A] + $numbers[$E]
                                     != $numbers[$G] + $numbers[$C]
                                 || grep $G == $_, $C, $A, $E, $D;

                            my %_rest;
                            @_rest{0 .. 6} = ();
                            delete @_rest{ $A, $C, $D, $E, $G };
                            my @rest = keys %_rest;

                            for my $r ([@rest], [reverse @rest]) {
                                my ($B, $F) = @$r;
                                return @numbers[$A, $B, $C, $D, $E, $F, $G]
                                    if $numbers[$A] + $numbers[$B]
                                        == $numbers[$G] + $numbers[$F];
                            }
                        }
                    }

                }
            }
        }
        return
    }
```

[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/mohammad-anwar/perl/ch-2.pl)

By rearranging the equations given we can derive some additional equalities, such as

    a = c + g – e

or

    d = a - c

These come in families, but ultimately don't resolve by themselves, the patterns looping back on each other in self-referentiality. Mohammad adds one more to the mix, however, which is to add the four original equations together. This produces

n = a + b<br>
n = b + c + d<br>
n = d + e + f<br>
n = f + g<br>
→ 4n = (a + b) + (b + c + d) + (d + e + f) + (f + g)<br>
→ 4n = (a + b + c + d + e + f + g) + (b + d + f)<br>

We know, however, what the total sum of all the numbers is, which gives us a proper value in the circle of references. He is then able to derive some further equalities about `b`, `d` and `f` for validation, and the problem space is reduced to only looping through values for these three variables and looking for a contradiction, for a total of only 7 × 6 × 5 = 210 iteration to check. Well done!

```perl
    sub solve_puzzle {
        my @n = @_;

        my $num_sum = 0;
        $num_sum += $_ for @n;

        my $solutions = [];
        foreach my $b (@n) {
            my @may_be_d = grep { $b != $_ } @n;
            foreach my $d (@may_be_d) {
                my @may_be_f = grep { $d != $_ } @may_be_d;
                foreach my $f (@may_be_f) {
                    my $box_sum = $b + $d + $f + $num_sum;
                    next unless ($box_sum % 4 == 0);
                    my $each_box_sum = $box_sum / 4;

                    my %rem = map { $_ => 1 } @may_be_f;
                    delete $rem{$f};

                    my $a = $each_box_sum - $b;
                    next unless exists $rem{$a};
                    delete $rem{$a};

                    my $c = $a - $d;
                    next unless exists $rem{$c};
                    delete $rem{$c};

                    my $g = $each_box_sum - $f;
                    next unless exists $rem{$g};
                    delete $rem{$g};

                    my $e = $g - $d;
                    next unless exists $rem{$e};

                    push @$solutions, [$a, $b, $c, $d, $e, $f, $g];
                }
            }
        }

        return $solutions;
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/james-smith/perl/ch-2.pl)

James independantly has come to the same conclusions about `b`, `d`, and `f` as Mohammad, giving us a remarkably similar set of logical steps. There are hallmarks of James' personal flair of course, such as a bitwise AND with 3 rather than a modulo 4 operation, and assignments returning the thing assigned to be used in a related activity.
There is also some noteworthy condensed cleverness around `delete` returning the items deleted, triggering some conditionals.

```perl
    sub four_square {
      my ($t,@n1,@res) = (0,@_);
      $t+=$_ foreach @n1;
      foreach my $b (        @n1 ) {
        foreach my $f (   my @n2 = grep { $_ != $b } @n1 ) {
          foreach my $d ( my @n3 = grep { $_ != $f } @n2 ) {
            next if (my $n = $t+$b+$d+$f) & 3; ## Really 4n, n must be int
            my %X = map { $_ == $d ? () : ($_ => 1) } @n3;
            next unless defined delete $X{my $a = $n/4-$b} && defined delete $X{my $g = $n/4-$f};
            next unless defined delete $X{my $c = $a-$d}   &&         exists $X{my $e = $g-$d};
            push @res, [ $a, $b, $c, $d, $e, $f, $g ];
          }
        }
      }
      return \@res;
    }
```

I'm not sure whether the word 'unique' was added to the task desciption after the release, but whatever the reasoning James has also included a version of his solver that allows for non-unique inputs, which mixes up the logic a bit:

```perl
    sub four_square_non_unique {
      my ($t,$check,@n1,%res) = (0,"@{[sort @_]}",@_);
      $t+=$_ foreach @n1;
      foreach my $i ( 0..@n1-1 ) {
        my @n2 = @n1;
        my $b = splice @n2,$i,1;
        foreach my $j ( 0..@n2-1 ) {
          my @n3 = @n2;
          my $f = splice @n3,$j,1;
          foreach my $k ( 0..@n3-1 ) {
            next if (my $n = $t + $b + (my $d = $n3[$k]) + $f) & 3;
            my @R = ($n/4-$b,$b,$n/4-$b-$d,$d,$n/4-$f-$d,$f,$n/4-$f);
            next if exists $res{ my $key = "@R" };
            next if $check ne "@{[ sort @R ]}";
            $res{$key} = \@R;
          }
        }
      }
      return [values %res];
    }
```


[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/perl/ch-2.pl)

Additional Languages:

[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/awk/ch-1.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/bash/ch-1.sh), [Basic](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/basic/ch-1.bas), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/bc/ch-1.bc), [Befunge-93](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/befunge-93/ch-1.bf93), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/c/ch-1.c), [Cobol](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/cobol/ch-1.cb), [Csh](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/csh/ch-1.csh), [Erlang](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/erlang/ch-1.erl), [Forth](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/forth/ch-1.fs), [Fortran](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/fortran/ch-1.f90), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/go/ch-1.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/java/ch-1.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/lua/ch-1.lua), [M4](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/m4/ch-1.m4), [Mmix](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/mmix/ch-1.mms), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/node/ch-1.js), [Ocaml](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/ocaml/ch-1.ml), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/pascal/ch-1.p), [Php](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/php/ch-1.php), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/python/ch-1.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/r/ch-1.r), [Rexx](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/rexx/ch-1.rexx), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/ruby/ch-1.rb), [Scheme](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/scheme/ch-1.scm), [Sed](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/sed/ch-1.sed), [Sql](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/sql/ch-1.sql), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/abigail/tcl/ch-1.tcl)

Finally Abigail takes the equations in a different direction, combining the first and last two equations to form a mirrored pair of equalities:

a + b       = n<br>
b + c + d   = n<br>
→ a + b = b + c + d<br>
→ a  =  c + d<br>
→ a  - c = d<br>

the same pathway from the other direction leads us to

g - e = d

So the three values (a - c), (g - e) and d are the same:

a - c = d = g - e

To continue, in their own words, the algorithm is to:
- Calculate the differences between all pairs (7 * 6 == 42 pairs)
- Find all numbers n from the input array for which there are at
least two pairs giving this difference, under the condition n
is not part of such a pair. (Note that if the input contains
two or more of the same number, for this purpose, we treat those
numbers to be different). These numbers will be our candidate for d.
- Of the list of differences equalling d, consider each pair.
Eliminate pairs where the same number appears in each. The first
difference gives candidates for a and c; the second gives candidates
for g and e. (Swapping them leaves to a symmetric solution).
- We now have candidates for a, c, d, e, and g. This leaves two
numbers for b and c.
- Try both, and check whether a + b == b + c + d == d + e + f == f + g.

They go on to state that this algorithm only requires 32 permutations to be reviewed to find the 8 solutions to the given input.

I tried removing the extensive commentary for brevity but decided there was just too much going on to easily follow without it, and the algorithm defies quick summarizing. So here is is, presented to you in its unadulterated glory. It's a fine piece of work; check it out.

```perl
    my @numbers = split;

    #
    # For each of the numbers n present in @numbers, find all pairs
    # of numbers whose difference equals n. We will have a data structure
    # '%differences' keyed by the numbers in @numbers; values are
    # two element arrays of *indices*, where the differences of the
    # numbers with those indices are the key.
    #
    my %differences = map {$_ => []} @numbers;

    #
    # Find all the differences, and store them in %differences.
    # We do *not* need to store any pair whose difference is
    # not in @numbers.
    #
    for (my $x = 0; $x < @numbers; $x ++) {
        for (my $y = $x + 1; $y < @numbers; $y ++) {
            my $diff = $numbers [$x] - $numbers [$y];
            push @{$differences { $diff}} => [$x, $y] if $differences { $diff};
            push @{$differences {-$diff}} => [$y, $x] if $differences {-$diff};
        }
    }

    #
    # Now, iterate over the numbers d in @numbers, with index d_i, and for
    # each d, iterate over all pairs of differences equal to d. Only consider
    # pairs where all indices are different, and different from d_i.
    #
    for (my $d_i = 0; $d_i < @numbers; $d_i ++) {
        my $d = $numbers [$d_i];
        my @diffs = @{$differences {$d}};

        #
        # Now, find two pairs where all indices are different.
        #
        for (my $x = 0; $x < @diffs; $x ++) {
            #
            # Ignore a difference involving d_i.
            #
            next if $diffs [$x] [0] == $d_i ||
                    $diffs [$x] [1] == $d_i;
            for (my $y = $x + 1; $y < @diffs; $y ++) {
                #
                # Second difference cannot involve the number at d_i,
                # and the indices involved in the second difference
                # must be different from the first difference.
                #
                next if $diffs [$y] [0] == $d_i            ||
                        $diffs [$y] [1] == $d_i            ||
                        $diffs [$x] [0] == $diffs [$y] [0] ||
                        $diffs [$x] [0] == $diffs [$y] [1] ||
                        $diffs [$x] [1] == $diffs [$y] [0] ||
                        $diffs [$x] [1] == $diffs [$y] [1];

                #
                # W.l.o.g. we can now assume $diffs [$x] are
                # the indices for $a and $c, and $diffs [$y]
                # are the indices for $g and $e.
                #
                my ($a_i, $c_i) = @{$diffs [$x]};
                my ($g_i, $e_i) = @{$diffs [$y]};

                #
                # Find the unused indices
                #
                my %indices = map {$_ => 1} keys @numbers;
                delete $indices {$_} for $a_i, $c_i, $d_i, $e_i, $g_i;

                #
                # This leaves two indices for $b and $e.
                # Try them both.
                #
                my $left = [keys %indices];
                foreach my $try ($left, [reverse @$left]) {
                    my ($b_i, $f_i) = @$try;

                    #
                    # Do we have a winner?
                    #
                    next unless           $numbers [$a_i] + $numbers [$b_i] ==
                        $numbers [$b_i] + $numbers [$c_i] + $numbers [$d_i] ==
                        $numbers [$d_i] + $numbers [$e_i] + $numbers [$f_i] ==
                                          $numbers [$f_i] + $numbers [$g_i];

                    #
                    # Print result, and the reverse, so we get all
                    # possible solutions.
                    #
                    my @solution =
                       @numbers [$a_i, $b_i, $c_i, $d_i, $e_i, $f_i, $g_i];

                    local $, = " ";
                    say         @solution;
                    say reverse @solution;
                }
            }
        }
    }
```

## hire an AI to FIGURE IT OUT for you
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/adam-russell/perl/ch-2.pl)

Additional Languages:

[Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-109/adam-russell/prolog/ch-1.p)

As the problem as stated reads very much like a logic puzzle, a symbolic AI logic solver does seem like a natural fit. Adam spends much of his time immersed in *real* Prolog, and here offers us two solutions: in Prolog and again in Perl, using the Prolog implementation module `AI::Prolog`.

The Perl module, a wrapper for a pure-Perl implementation of a basic Prolog engine, is, in his words "little better than a toy implementation". Compared to `gprolog`, compiled and written in C, for instance, "the execution time differences are laughably dramatic". Which is to say a 360000x difference, an hour vs 10ms.

But Prolog itself is very cool, and a very different way of looking at the problem. Essentially the task becomes to logically define the constraints to the problem space and then let the solver have at it. In the `__DATA__` section of the script there are four parts: the first defines the 7 variables as Numbers; the second rather inelegantly declares each to be unique relative to the others, the third defines the boxes using the familiar given equations; and the fourth the requirement that the boxes all sum to the same value.

```perl
    use AI::Prolog;

    my $prolog = do{
        local $/;
        <DATA>;
    };
    $prolog = new AI::Prolog($prolog);
    $prolog->query("sums_in_squares([1,2,3,4,5,6,7], Squares).");

    my $result;
    print join("\t", "a" .. "g") . "\n";
    while ($result = $prolog->results()){
        print join("\t", @{$result->[2]}) . "\n";
    }

    __DATA__
    member(X,[X|T]).
    member(X,[H|T]):- member(X,T).
    sums_in_squares(Numbers, [A, B, C, D, E, F, G]):-
        member(A, Numbers),
        member(B, Numbers),
        member(C, Numbers),
        member(D, Numbers),
        member(E, Numbers),
        member(F, Numbers),
        member(G, Numbers),
        A \= B, A \= C, A \= D, A \= E, A \= F, A \= G,
        B \= A, B \= C, B \= D, B \= E, B \= F, B \= G,
        C \= A, C \= B, C \= D, C \= E, C \= F, C \= G,
        D \= A, D \= B, D \= C, D \= E, D \= F, D \= G,
        E \= A, E \= B, E \= C, E \= D, E \= F, E \= G,
        F \= A, F \= B, F \= C, F \= D, F \= E, F \= G,
        G \= A, G \= B, G \= C, G \= D, G \= E, G \= F,
        Box1 is A + B,
        Box2 is B + C + D,
        Box3 is D + E + F,
        Box4 is F + G,
        Box1 == Box2,
        Box2 == Box3,
        Box3 == Box4.
```

In a proper Prolog one is allowed the use of Finite Domain variables, whose values are further constrained within defined limits, and as the solver attempts solutions these limits are dynamically extended to exclude already-tried options. Defined this way, the problem seems lke a made-to-order demonstration of Prolog's capabilities. Rewritten using these extensions the code becomes quite compact. This is the aforementioned 10ms solution.

```prolog
    sums_in_squares_fd(Numbers, [A, B, C, D, E, F, G]):-
        fd_domain([A, B, C, D, E, F, G], Numbers),
        all_unique([A, B, C, D, E, F, G], Numbers),
        Box1 = A + B,
        Box2 = B + C + D,
        Box3 = D + E + F,
        Box4 = F + G,
        Box1 #= Box2,
        Box2 #= Box3,
        Box3 #= Box4,
        fd_labeling([A, B, C, D, E, F, G]).
```






------------------------------------------





---

# BLOGS {#PWC109BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, I somehow continue to maintain my bearings. Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC093BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *READ* these *BLOG* *LINKS*:

**( *don't think, trust your training, you're in the zone, just do it ...* )**



**Abigail**

 * [Perl Weekly Challenge 109: Chowla Numbers](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-109-1.html) ( *Perl* )
 * [Perl Weekly Challenge 109: Four Squares Puzzle](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-109-2.html) ( *Perl* )

**Adam Russell**

 * [Chowla Numbers and Numbers in Boxes: The Weekly Challenge 109 — Perl - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2021/04/25) ( *Perl* )
 * [Chowla Numbers and Numbers in Boxes: The Weekly Challenge 109 - Prolog - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2021/04/25) ( *Prolog* )

**Arne Sommer**

 * [Chowla Squared with Raku and Perl](https://raku-musings.com/chowla-squared.html) ( *Perl & Raku* )

**Bartosz Jarzyna**

 * [Perl Weekly Challenge 109 solution - Bartosz Jarzyna](https://brtastic.xyz/blog/article/perl-weekly-109) ( *Perl & Raku* )

**Cheok-Yin Fung**

 * [CY's Take on PWC#109 | Moments on Perl or other Programming Issues](http://blogs.perl.org/users/c_y_fung/2021/04/cys-take-on-pwc109.html) ( *Perl* )

**Colin Crain**

 * [Dividing Sums into Four Squares — Programming Excursions in Perl and Raku](https://colincrain.com/2021/04/25/dividing-sums-into-four-squares/) ( *Perl & Raku* )

**Dave Jacoby**

 * [Iterations and Permutations: Perl Weekly Challenge 109 | Committed to Memory](https://jacoby.github.io/2021/04/21/iterations-and-permutations-perl-weekly-challenge-109.html) ( *Perl* )

**Flavio Poletti**

 * [PWC109 - Chowla Numbers - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/04/21/pwc109-chowla-numbers/) ( *Perl* )
 * [PWC109 - Four Squares Puzzle - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/04/22/pwc109-four-squares-puzzle/) ( *Perl* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 109](https://www.braincells.com/perl/2021/04/perl_weekly_challenge_week_109.html) ( *Perl & Raku* )

**Lance Wicks**

 * [Perl Weekly Challenge 109 in Perl and Elm - Perl🐪.🥝 Kiwi](https://perl.kiwi/tales/2021/04/24/perl-weekly-challenge-109-in-perl-and-elm/) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 109: Chowla Numbers and Four Square Puzzle | laurent_r](http://blogs.perl.org/users/laurent_r/2021/04/perl-weekly-challenge-109-chowla-numbers-and-four-square-puzzle.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 109: Choowa Numbers and Sums – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2021/04/22/PerlWeeklyChallenge109.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 109: Choowa Numbers and Sums – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2021/04/22/PerlWeeklyChallenge109.html#task2) ( *Raku* )

**Mohammad S Anwar**

 * [Perl Weekly Challenge - 109 (Task #1: Chowla Numbers) - YouTube](https://youtu.be/R18fJ10aJNc) ( *Perl* )

**Roger Bell_West**

 * [RogerBW's Blog: Perl Weekly Challenge 109: Chowla Squares](https://blog.firedrake.org/archive/2021/04/Perl_Weekly_Challenge_109__Chowla_Squares.html) ( *Perl & Raku* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 109 – W. Luis Mochán](https://wlmb.github.io/2021/04/19/PWC109/) ( *Perl* )
