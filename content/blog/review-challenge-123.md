---
author:       Colin Crain
date:         2021-08-22T00:00:00
description:  "Colin Crain › Perl Weekly Review #123"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #123"
image:        images/blog/p5-review-challenge-123.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-122/).* )

Welcome to the Perl review for **Week 123** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-123/) or the summary [**recap**](/blog/recap-challenge-123/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/imgaes/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC123TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC123TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC123BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC123TASK1}

# Ugly Numbers
*Submitted by: Mohammad S Anwar*<br>
You are given an integer $n >= 1.

Write a script to find the $nth element of Ugly Numbers.

Ugly numbers are those number whose prime factors are 2, 3 or 5.

For example, the first 10 Ugly Numbers are 1, 2, 3, 4, 5, 6, 8, 9, 10, 12.

**Example**

```
    Input: $n = 7
    Output: 8

    Input: $n = 10
    Output: 12
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/abigail/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/adam-russell/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/athanasius/perl/ch-1.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/bruce-gray/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/colin-crain/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/jo-37/perl/ch-1.pl),
[**kjetillll**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/kjetillll/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/lubos-kolouch/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/mattneleigh/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/perlboy1967/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/pete-houston/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/sgreen/perl/ch-1.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/stuart-little/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/ulrich-rieke/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/wlmb/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/wanderdoc/perl/ch-1.pl)


There were 27 submissions for the first task this past week.

Let me begin by stating an objection to the nomenclature here, specifically the naming of any numbers "ugly". Simply put, I just don't like it.

I've gone into much more detail [elsewhere on the subject](http://colincrain.com/2021/08/01/dont-be-an-ugly-square-man/), but suffice to say there's nothing I can see that's "ugly" about these upstanding numeric citizens, and see no reason to deride them as such. So I for one will not partipate in this charade. [I will not drink the haterade](https://en.wiktionary.org/wiki/haterade).

Fortunately there are other ways of referring to our friends, such as the [5-Smooth Numbers](https://en.wikipedia.org/wiki/Smooth_number) or [Regular Numbers](https://en.wikipedia.org/wiki/Regular_number) or sometimes [Hamming Numbers](https://en.wikipedia.org/wiki/Richard_Hamming). I've been looking at these numbers over the past year as the true friends they are, in the context of [5-Limit Just Intonation](https://en.wikipedia.org/wiki/Five-limit_tuning) and have seen the rather beautiful term *Harmonic Whole Numbers* used, which is an altogether much more pleasant (and fundamentally accurate) way to describe them.

We're going to go with the most common term then, "5-Smooth", or just "smooth" in this specific local context, and speak no more of the ugly pejorative that got us here. Please, think of the integers. Words can hurt like a fist.





## FACTOR, FACTOR, FACTOR
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/adam-russell/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/arne-sommer/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/jaldhar-h-vyas/perl/ch-1.pl), and
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/pete-houston/perl/ch-1.pl)

A brute force approach that will solve the problem is to work through a list of incrementing numbers and factor them as we go, adding those whose factors are only 2, 3 and 5 to a growing array of smooth numbers.

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/jaldhar-h-vyas/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/jaldhar-h-vyas/raku/ch-1.raku)

Jaldhar relies on a quartet of functions to get his work done, starting outermost with the `isUgly()` wrapper that returns a response that is used to either add a candidate to a growing list of values or not. This routine uses `factorize()`, which creates a prime deconstruction of a given value, which in turn uses another routine, `nextPrime()` for, well, the next prime to check, and `isPrime()` which you can guess.

There's a whole lot of factoring going on here, that's for sure, but if you want to understand something, it's best to see it all laid out instead relying on powers hidden behind a module interface.

```perl
    sub factorize {
        my ($n, $primeFactors) = @_;
        if ($n < 2) {
            return;
        }

        my $p = nextPrime(1);
        while ($p <= $n) {

            if ($n % $p == 0) {
                push @{$primeFactors}, $p;
                factorize($n / $p, $primeFactors);
            }
            $p = nextPrime();
        }
    }

    sub isUgly {
        my ($n) = @_;
        my @primeFactors;
        factorize($n, \@primeFactors);
        return (scalar grep { $_ != 2 && $_ != 3 &&  $_ != 5 } @primeFactors) == 0;
    }
```

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/arne-sommer/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/arne-sommer/raku/ch-1.raku)

Arne here does two things: first, importing the `is_prime` function from `Math::Prime::Util`, and then a set of Raku-like junctions, `any` and `all` from `Perl6::Junction`. The first is pretty self-explanatory to the factorization process, but the second warrants some explanation. The functions can be thought of as to work on arrays as a set; that, in this case, all members of the set of `@prime_factors` are equal to some element of the set {2,3,5}.

That's a little easier to think about than contemplating a junction as existing in a state of quantum superimposition, which is what the [module this is based on is called](https://metacpan.org/pod/Quantum::Superpositions).

The work is mostly done in the `factor()` routine, of course, which returns a prime deconstruction of a number, with all values included.


```perl
    use Math::Prime::Util qw/is_prime/;
    use Perl6::Junction qw/all any/;

    while (1)
    {
      last if @ugly_seq == $n;

      my @prime_factors = factors($candidate);
      push(@ugly_seq, $candidate) if all(@prime_factors) == any(2,3,5);
      $candidate++;
    }

    say ": Sequence: ", join(", ", @ugly_seq) if $verbose;

    say $ugly_seq[$n -1];

    sub factors ($number)
    {
      return (1)       if $number == 1;
      return ($number) if is_prime($number);

      my @factors;

      for my $candidate (grep { is_prime($_) } 2 .. $number / 2)
      {
        while ($number % $candidate == 0)
        {
          push(@factors, $candidate);
          $number /= $candidate;
        }
      }

      return @factors;
    }
```

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/pete-houston/perl/ch-1.pl)

In a much quicker solution, Pete brings in the highly tuned `Math::Prime::Util` module to speed the search. In the language of the logic expressed, we allow all numbers except those with any factor that is not a 2, a 3 , or a 5.

```perl
    use Math::Prime::Util 'factor';
    use List::Util 'any';

    my ($n, $i, $j) = (shift, 0, 0);
    do {
        $i++ unless any { $_ != 2 && $_ != 3 && $_ != 5 } factor (++$j);
    } until $i == $n;

    print "$j\n";
```



## DIVIDE DOWN and see what's LEFT
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/cheok-yin-fung/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/duncan-c-white/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/polettix/perl/ch-1.pl),
[**kjetillll**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/kjetillll/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/laurent-rosenfeld/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/sgreen/perl/ch-1.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/stuart-little/perl/ch-1.pl), and
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/ulrich-rieke/perl/ch-1.pl)

Alternately, and more efficiently in general, we know we only care about the factors 2, 3 and 5, so why not just divide those out and see what's left? We don't care if that remaining bit is 23 or 29, just that if it's there the number can't be smooth.

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/laurent-rosenfeld/perl/ch-1.pl)

**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/laurent-rosenfeld/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/laurent-rosenfeld/raku/ch-1.raku), [Scala](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/laurent-rosenfeld/scala/ch-1.scala)

In a compact validation routine and a simple increment loop, Laurent builds up his sequence until the requested value is found.

```perl
    sub is_ugly {
        my $in = shift;
        for my $div (2, 3, 5) {
            $in /= $div while $in % $div == 0;
        }
        return $in == 1;
    }

    my $n = shift // 7;
    my $i = 0;
    my $count = 0;
    while (1) {
        $count ++;
        $i++ if is_ugly $count;
        say $count and last if $i == $n
    }
```

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/sgreen/perl/ch-1.pl)

Another similar version by Simon, who provides a nice example of a self-limiting `while` loop to compute the sequence up until the requested index.

```perl
    sub _is_ugly {
        my $x = shift;

        # Keep dividing by 2, 3 and 5 as long as it leaves no remainder
        foreach my $d ( 2, 3, 5 ) {
            while ( $x % $d == 0 ) {
                $x /= $d;
            }
        }

        # If the result is 1, it's an ugly number
        return $x == 1 ? 1 : 0;
    }

    sub main {
        my $n = shift;

        my $number = 0;
        while ($n) {
            --$n if _is_ugly( ++$number );
        }

        say $number;
    }
```

[**kjetillll**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/kjetillll/perl/ch-1.pl)

kjetillll takes a somewhat different tack, providing us with a nice pair of recursive routines, one to determine whether an individual number is 5-smooth, the second to generate the smooth sequence until the *n*-th number can be reported.

```perl
    sub is_ugly {
        my $n = shift;
        $n != int$n                   ? 0
       :$n == 1                       ? 1
       :( grep is_ugly($n/$_),2,3,5 ) ? 1
       :                                0
    }

    sub nth_ugly {
        my($n,$try)=(@_,0);
        $n ? nth_ugly( $n - is_ugly(++$try), $try) : $try
    }
```

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/duncan-c-white/perl/ch-1.pl)

Duncan inlines the dividing down into a trio of `while` loops to remove the desirable primes, leaving any less-so behind. A simple wrapper builds up the list as required.

The module `Function::Parameters` provides signature support to his functions.

```perl
    use Function::Parameters;

    fun isugly( $x )
    {
        return 0 if $x < 1;
        while( $x % 5 == 0 ) { $x /= 5 }
        while( $x % 3 == 0 ) { $x /= 3 }
        while( $x % 2 == 0 ) { $x /= 2 }
        return $x==1 ? 1 : 0;
    }

    fun nth_ugly( $n )
    {
        for( my $i=1; ; $i++ )
        {
        	if( isugly($i) )
        	{
        		if( --$n==0 )
        		{
        			return $i;
        		}
        	}
        }
    }
```

[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/stuart-little/perl/ch-1.pl)

**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/stuart-little/haskell/ch-1.hs), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/stuart-little/lua/ch-1.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/stuart-little/node/ch-1.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/stuart-little/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/stuart-little/raku/ch-1.raku)

Stuart introduces a system of memoization to recognise when a number is a previously identified smooth number times one of the three factors. These values are then immediately added to the list, dramatically shortening the dividing down process.

```perl
    my %memo = map { $_ => 1 } (1,2,3,5);

    sub smth5p($n) {
        $memo{$n} && return 1;
        my $den = first {$n % $_ ==0} (2,3,5);
        return ($den ? ($memo{int($n/$den)} && ($memo{$n}=1)) : 0)
    }

    my ($count,$nr)=(0,0);
    while ($count < $ARGV[0]) {
        $nr+=1;
        (smth5p($nr)) && do {
        say $nr;
        $count+=1;
        };
    }
```


## BUILD UP from the BASICS
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/athanasius/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/colin-crain/perl/ch-1.pl), and
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/jo-37/perl/ch-1.pl)

In a general sense, the 5-smooth numbers are those produced by a unique combination of the factors 2, 3, and 5. By actively assembling combinations of these factors, then, we should be able to form any value in the smooth sequence.

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/athanasius/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/athanasius/raku/ch-1.raku)

The problem with taking the last generated 5-smooth number and multiplying it by 2, 3 and 5 to produce the next set of values is twofold: one, this strategy produces duplicate values — both the numbers 2 × 3 and 3 × 2 are generated — and secondly that the numbers are produced out-of-order. The current value times 5 will always be greater than the *next* value times 2.  And the actual next number is quite poosibly a number two back times 5. It gets very complicated.

The monk neatly side-steps this last part by using a priority heap data structure, which when popped will always give the smallest value in the heap. A simple `do...while` loop is used to skip over duplicate values.

The result is quite compact.

```perl
    use Array::Heap;

    my @heap   = 1;
    my $last_h = 0;
    my $count  = 0;
    my $hamming;

    while ($count++ < $n)
    {
        do
        {
            $hamming = pop_heap @heap;

        } while ($hamming == $last_h);                     # Discard duplicates

        $last_h = $hamming;

        push_heap @heap, $_ * $hamming for 2, 3, 5;
    }

    printf "Output: %d\n", $hamming;
```

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/colin-crain/perl/ch-1.pl)

For my own solution I saw the problems as one of combinatorics; that the numbers were each constructed from a unique set of the factors 2, 3 and 5, so by generating all the sets every number would end up being produced, and only produced once.

The numbers are added in groups, sized by the number of factors present, with the specific combination sets created using the module `Algorithm::Combinatorics`, by the function `combinations_with_repetition()`. As each set of numbers is added, the start point for the next set of combinations is used as a cutoff for valid numbers, that is all 2s, to the power of the current factor count plus 1. Beyond this point the generated portions of the sequence will have gaps, but below this it will not, and the cleared values of the sequence up to that point are then sorted. Factors are added this way until enough of the sequence is generated to provide the desired index.

For all its oddity, the method is fast, generating all values of the sequence up to 64-bits in about a quarter second.

```perl
    use Algorithm::Combinatorics qw( combinations_with_repetition );
    use List::Util               qw( product );

    my $request = shift @ARGV // 12691;

    $request--;

    my @factors = (2, 3, 5);
    my @inter = ( 1 );
    my @seq;
    my $fcount = 0;

    while (++$fcount) {

        for my $iter (combinations_with_repetition( \@factors, $fcount)) {
            my $p = product $iter->@*;
           push @inter, $p;
        }
        @seq = grep { $_ < 2**$fcount+1 } sort {$a<=>$b} @inter;
        last if scalar @seq > $request;
    }
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/jo-37/perl/ch-1.pl)

Jorg has brought forward a unique method, based on a properly-sourced Python solution he found. This solution, however, leans heavily on the use of `yield` statements from generators to produce the proper values in order, so we need to somehow accommodate that. To this end he finds `Coro::Genrerator`, an offshoot creation of the `Coro` coroutine module for asynchronous cooperative threads.

From there the syntax gets a little weird. Generators are analogous to lazy lists, I suppose, or iterators that generate their values on-the-fly, which makes sense, and `yield` is yielding flow control — essentially a `return` statement — from the generator object, which remains behind, instantiate, waiting for the next call to come.

The actual algorithm works by merging three lists repeatedly: the powers of 2, times 2 at every iteration, the 2s list merged with a second list multiplied by 3 repeatedly, and then taking *that* list, merging it with a list multiplied by 5 and performing that multiplication repeatedly. This is all quite confusing of course, and is inefficient in merging. Instead we use generators to keep the partial lists for the various multiples alive between calls, so we need not reconstruct them when required.

```perl
    # Build a generator for powers of $p.
    sub powers ($p) {
        generator {
            my $pow = 1;
            while () {
                yield $pow;
                $pow *= $p;
            }
        }
    }

    # Build a generator for a merged sequence of the one provided by the
    # generator $s with itself multiplied by $p.
    sub powtimes ($s, $p) {
        generator {
            # Initialize the cache with the first generated value.
            my @seq = $s->();
            # The first element comes from the generated sequence.
            yield $seq[0];
            # Initial "front" element taken from the sequence.
            my $front = $s->();
            # Initial "back" element taken as the $p-fold of the first
            # element from the cache.
            my $back = $seq[my $backindex = 0] * $p;
            while () {
                # Merge the generated sequence with its $p-fold multiple:
                # Select the next element as the smaller of the front
                # element provided by the generator and the back element as
                # the p-fold of the current cached element, advancing these
                # accordingly from the generator or the cache.
                if ($front < $back) {
                    yield $front;
                    push @seq, $front;
                    $front = $s->();
                } else {
                    yield $back;
                    push @seq, $back;
                    $back = $seq[++$backindex] * $p;
                }
            }
        }
    }

    # Calculate the n-th Hamming number.
    sub hamming ($n) {
        # Build a generator for the Hamming numbers.
        my $hamming = powtimes(powtimes(powers(2), 3), 5);
        # Loop over the first $n - 1 hamming numbers and print these if
        # requested.
        sub {say pop if $verbose}->($hamming->()) for 1 .. $n - 1;

        # Return the n-th Hamming number.
        $hamming->();
    }
```



## a more DYNAMIC construction
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/abigail/perl/ch-1.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/bruce-gray/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/e-choroba/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/james-smith/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/lubos-kolouch/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/mattneleigh/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/perlboy1967/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/roger-bell-west/perl/ch-1.pl),
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/wanderdoc/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/wlmb/perl/ch-1.pl)

A common constructive approach was saw was to take the previously computed values of the list and multiply each value by either 2, 3 or 5 to get the next smooth number. The tricky part is to know which previous numbers to pick, which is where the dynamic programming comes in. Three separate indices on the sequence array are maintained, corresponding to the last element multiplied by 2, 3 and 5 accordingly. After computing the next set of options from multiplying out these three values, the smallest of the results is selected, that value is added to the sequence and the the pointers are updated as required.

In this way the multipliers for the larger factors are not increased until they are actually used to create a new smooth number, and by keeping separate indices for each factor the options available remain close to each other, roughly in sync.


[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/abigail/perl/ch-1.pl)

**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/abigail/awk/ch-1.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/abigail/bash/ch-1.sh), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/abigail/c/ch-1.c), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/abigail/lua/ch-1.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/abigail/node/ch-1.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/abigail/python/ch-1.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/abigail/r/ch-1.r), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/abigail/ruby/ch-1.rb)

Abigail will start us off with a demonstration of the technique. Three variables are maintained, corresponding to the index locations in the sequence that will be multiplied by 2, 3 and 5 respectively to contribute to the sequence. At each stage the smallest of these options is chosen for the sequence, and the indices for the three options are updated such that should they equal the lastest pick the value is increased. All three factors are checked at each step, as there can be multiple ways to arrive at a given value — this will happen when the last sequence number is a multiple of two or more of the factors.

The result is a compact cycle containing two steps.

```perl
    while (my $n = <>) {
        while (@ugly < $n) {
            #
            # Calculate the next ugly number.
            #
            push @ugly => min 2 * $ugly [$next_2],
                              3 * $ugly [$next_3],
                              5 * $ugly [$next_5];

            #
            # Update pointers. It could be that more than one pointer needs
            # updating. (This happens if the ugly number generated is
            # divisible by 6, 10, 15, or 30). No pointer ever needs updating twice.
            #
            $next_2 ++ if 2 * $ugly [$next_2] <= $ugly [-1];
            $next_3 ++ if 3 * $ugly [$next_3] <= $ugly [-1];
            $next_5 ++ if 5 * $ugly [$next_5] <= $ugly [-1];
        }
        say $ugly [-1];
    }
```

[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/bruce-gray/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/bruce-gray/raku/ch-1.raku)

Bruce abstracts his bookkeeping a bit into a unique data structure, an array of hashes, one for each factor.

The `state` variable `$cin` is an array of three anonymous hashes, each containing three keys: C, the factor in question, 2, 3 or 5; N, the next generated value of that number from that factor; and I, the index of the sequence that will be used to generate the next value for N when the current value is used. The index I is always looking ahead, planning to create the next N.

Restated, the state hashes keep the three factors and the next unused number generated by those factors, and the index in the sequence to be used to create the *next* value. When a new number is sought for the sequence, the smallest N number from these three hashes is selected, and each hash is then processed; those hashes whose number matches the chosen value have their numbers replaced by the next multiple and their index incremented. This step removes duplicates and readies the hashes for the next selection.

```perl
    sub ugly_ith ( $nth ) {
        state $Hammings = [];

        state $cin = [ map { { C => $_, N => 1, I => 0 } } 2, 3, 5 ];
        while ( @{$Hammings} < $nth ) {
            my $taken = min map { $_->{N} } @{$cin};
            push @{$Hammings}, $taken;

            for (@{$cin}) {
                if ($_->{N} == $taken) {
                    $_->{N} = $_->{C} * $Hammings->[ $_->{I} ];
                    $_->{I}++;
                }
            }
        }

        return $Hammings->[$nth - 1];
    }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/e-choroba/perl/ch-1.pl)

Here's another version by Choroba. As you can see, this two-step process to develop the next sequence value produces quite compact solutions. Notice that the code within the inner loop doesn't really care exactly how many factors are presented, as long as there is a parallel array of indices constructed alongside the list of multipliers.

One curious example that comes to mind is the just intonation tuning of LaMonte Young. Unlike the more common 5-limit tunings, where note intervals are all ratios of numbers only divisible by the prime factors 2, 3 and 5, Young has a stated aversion to the 5th harmonic, building his system off of the prime factors 2, 3 and 7. One can see an obvious connection here to the 5-smooth numbers, but what it *means*, musically, is not exactly clear. But were one to poke around in the interval relationships in tunings after the style of Young, one would wish to alter those values. By extension, there are also 7-limit tunings, based around the factors 2, 3, 5 and 7, such as are found in the Scottish Bagpipes. These ratio values would be found in the sequence of 7-smooth numbers, which we could generate with Choroba's example by changing the list of multipliers and the length of the list of indices.

```perl
    use List::Util qw{ min };

    my @multipliers = (2, 3, 5);
    sub ugly_number {
        my ($n) = @_;
        my @ugly = (undef, 1);
        my @indices = (1, 1, 1);
        for (1 .. $n) {
            my @next = map $multipliers[$_] * $ugly[ $indices[$_] ], 0 .. $#indices;
            push @ugly, min(@next);
            for my $i (0 .. $#indices) {
                ++$indices[$i] if $ugly[-1] == $next[$i];
            }
        }
        return $ugly[$n]
    }
```

[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/mattneleigh/perl/ch-1.pl)

This idea of keeping an array of indices corresponding to the individual factors is of course not limited to any particular values or quantity of values, and as we have seen all of the logic readily generalizes. Here Matthew demonstrates by constructing a routine that takes a quantity of numbers desired and a list of factors with which to construct them.

Bonus for nicely commented code. It's the little things.

```perl
    sub compute_N_composite_numbers{
        my $n = int(shift());

        my @indices;
        my @factors;
        my @products;

        # Populate the list in case $n == 1
        my @composite_list = (1);

        # If $n wasn't an number and greater
        # than zero
        return(undef) unless($n > 0);

        # No further args were supplied
        return(undef) unless(scalar(@ARG));

        while(defined($ARG[0])){
            push(@factors, int(shift()));
            # A factor wasn't a number and
            # greater than zero
            return(undef) unless($factors[$#factors] > 0);
        }

        # Initialize indices
        for(0..$#factors){
            push(@indices, 0);
        }

        $n--;
        while($n--){
            for(0..$#factors){
                # Multiply our factors by particular numbers
                # previously calculated; @products will be
                # autovivified on the first pass
                $products[$_] = $composite_list[$indices[$_]] * $factors[$_];
            }

            # Store the minimum value we just calculated
            push(@composite_list, $products[min_value_index(@products)]);

            for(0..$#factors){
                # If any product we calculated equals the
                # minimum number we stored, increment the
                # corresponding index
                if($products[$_] == $composite_list[$#composite_list]){
                    $indices[$_]++;
                }
            }
        }

        return(@composite_list);
    }
```





## Additional Submissions in Guest Languages

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/adam-russell/perl/ch-1.pl)

**additional languages:**
[Cxx](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/adam-russell/cxx/ch-1.cxx), [Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/adam-russell/prolog/ch-1.p)

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/polettix/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/polettix/raku/ch-1.raku)

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/roger-bell-west/perl/ch-1.pl)

**additional languages:**
[Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/roger-bell-west/rust/ch-1.rs)

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/ulrich-rieke/perl/ch-1.pl)

**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/ulrich-rieke/cpp/ch-1.cpp), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/ulrich-rieke/raku/ch-1.raku)






------------------------------------------




---

# TASK 2 {#PWC123TASK2}

# Square Points
*Submitted by: Mohammad S Anwar*<br>
You are given coordinates of four points i.e.

```
        (x1, y1), (x2, y2), (x3, y3) and (x4, y4).
```

Write a script to find out if the given four points form a square.

**Example**

```
    Input: x1 = 10, y1 = 20
           x2 = 20, y2 = 20
           x3 = 20, y3 = 10
           x4 = 10, y4 = 10
    Output: 1 as the given coordinates form a square.



    Input: x1 = 12, y1 = 24
           x2 = 16, y2 = 10
           x3 = 20, y3 = 12
           x4 = 18, y4 = 16
    Output: 0 as the given coordinates doesn't form a square.

```




## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/abigail/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/adam-russell/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/arne-sommer/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/athanasius/perl/ch-2.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/bruce-gray/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/dave-jacoby/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/polettix/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/james-smith/perl/ch-2.pl),
[**Jared Martin**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/jaredor/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/jo-37/perl/ch-2.pl),
[**kjetillll**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/kjetillll/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/mattneleigh/perl/ch-2.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/mohammad-anwar/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/perlboy1967/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/pete-houston/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/sgreen/perl/ch-2.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/stuart-little/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/ulrich-rieke/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/wlmb/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/wanderdoc/perl/ch-2.pl)


There were 24 complete and working submissions for the second task this past week.

Right off the bat it seems the general tersness in the description and the specifics of the examples given led a few folks astray. In the two examples we are shown one square and one not-square, and the square coordinates seem picked to be easily visualized. Although well-explanatory, the down side of this is that it may give the impression that the square will always be presented in orthogonal alignment, with horizontal and vertical edges oriented to the axes, and several submissions were constructed from this base assumption.

I see no reason to actually *disqualify* these submissions, mind you. If they find a square, they still answer a reasonable interpretation of the task, and give us a little more variety in our methods. It's no big deal, really. But most readings opened the interpretation up a little.

For an alternate example, the points

(9,19), (19,21), (21,11), (11,9)

also form a square, very similar to our first example only racked a bit anti-clockwise. A more general-purpose solver will need to find this square as well, perhaps even with its coordinates in a more random order on top of things. Again the two short examples can lead us astray here: both describe concave polygons, where the points are ordered as one would list vertices, one ordered clockwise, the other anti-clockwise. But again I see no reason whatsoever to assume this from just the description. Given the polygon

```
    A - B
    |   |
    D - C
```

if we list the points in the order A, C, B, D, we still meet the criteria that "the given four points form a square". The way I see it, the fact that they can also form two isosceles triangles connected at their apices is irrelevant. We are only being given a set of points, not a polygon. We're being asked to *make* a polygon from raw materials. The more we think it through, the messier it gets. That said assuming an ordering to the input was a fairly common requirement we saw in the submission algorithms, although we also saw schemes acknowledging this broader possibility, to either permute the points or simply make the order irrelevant.

So how then *do* we determine whether a group of four points determines a square?

The basic strategies all started with with this question, determining that a square has 4 equal sides, and four equal angles. However exactly what criteria were required to conclude that this was the case varied from solution to solution. Some combination of equal length edges between points, right angles between triplets, and equal lengths for spans determined to be diagonals was always present.

## ORTHOGONAL ASSUMPTIONS


As we determined earlier, I think there's enough ambiguity in the description that any solution that requires an orthogonal alignment, that as long as it successfully finds a square, and, you know, *only* a square,  it's good enough for me.

[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/bruce-gray/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/bruce-gray/raku/ch-2.raku)

The technique Bruce presents us today  first requires that the points be ordered, so that successive points describe the circumnavigation of a square. This is accomplished in a straightforward `sort` command. Note the technique, because we'll see it pop up again.

Bruce, in his `is_square()` function, orders the points and then engages a sequence of checks: are the two sides that meet at point *A* the same length? Do we have 4 unique points? Do we have any points the are unaligned with a mate in either the x- or y-axis?

All of these conditionals taken together will produce a true value, 1, if they hold, or else the function will return 0.

```perl
    sub is_square {
        die if @_ != 4;

        my %xy;
        push @{ $xy{ 'x'.$_->[0] } }, $_ for @_;
        push @{ $xy{ 'y'.$_->[1] } }, $_ for @_;

        my ($A, $B, $C, $D) = sort {    $a->[0] <=> $b->[0]
                                     or $a->[1] <=> $b->[1] } @_;

        my @unique_points    = uniq map { join ',', @{$_} } @_;
        my @unaligned_points = grep { @{$_} != 2 } values %xy;
        my $lr_sides_eq_tb   = ( $C->[0] - $A->[0] == $B->[1] - $A->[1] );

        return 0 + (     $lr_sides_eq_tb
                     and @unique_points    == 4
                     and @unaligned_points == 0 );
    }
```


## ASSUMING the POINTS are in ORDER
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/abigail/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/arne-sommer/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/dave-jacoby/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/mattneleigh/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/sgreen/perl/ch-2.pl), and
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/ulrich-rieke/perl/ch-2.pl)

A fairly large bloc of solutions depended on the points coming in ordered, as they are in the examples. Myself, I think this relies on facts not in evidence, but this is not a court of law, and consider myself more a curator, or at most an arbitrator, than a judge.

One immediate practical benefit to working with an ordered set of points is that it is known out-of-the-gate which edges are the sides to our polygon.

[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/mattneleigh/perl/ch-2.pl)

Matthew gives us a technique that methodically determines that the shape is first a quadrilateral, by counting 4 points, then a rhombus, by having equal sides. For this we need only perform three edge comparisons, as the fourth follows. Finally, in a rhombus adjacent angles will add to 180°, so any rhombus containing a 90° angle anywhere in it must therefore be a square.

```perl
    # We have some sort of quadrilateral;
    # return false if all four sides
    # aren't the same length
    @sides = (
        points_distance($ARG[0], $ARG[1]),
        points_distance($ARG[1], $ARG[2]),
        points_distance($ARG[2], $ARG[3]),
        points_distance($ARG[3], $ARG[0]),
    );
    return(0) unless(
        # Only need to compare three times
        approx_eq($sides[0], $sides[1])
        &&
        approx_eq($sides[1], $sides[2])
        &&
        approx_eq($sides[2], $sides[3])
    );

    # We have a rhombus; return false if
    # a corner isn't a right angle (any
    # one will do)
    return(0) unless(is_right_angle($ARG[0], $ARG[1], $ARG[2]));
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/dave-jacoby/perl/ch-2.pl)

Dave gives a variant plan, first calculating that the sides are equal, indicating a rhombus, and then concluding squareness on the basis that the two diagonals are equal.

A simple Euclidean distance subroutine was commonly used as an adjunct to the solutions.

```perl
    push @distances, distance( @objs[ 0, 1 ] ); # A -> B
    push @distances, distance( @objs[ 1, 2 ] ); # B -> C
    push @distances, distance( @objs[ 2, 3 ] ); # C -> D
    push @distances, distance( @objs[ 3, 0 ] ); # D -> A

    push @distances, distance( @objs[ 0, 2 ] ); # A -> C
    push @distances, distance( @objs[ 1, 3 ] ); # B -> D

    # sides are of equal length
    return 0 if $distances[0] != $distances[1];
    return 0 if $distances[1] != $distances[2];
    return 0 if $distances[2] != $distances[3];
    return 0 if $distances[3] != $distances[0];

    # distances throught the center are of equal length
    # removing parallelograms
    return 0 if $distances[4] != $distances[5];


    sub distance ( $p1, $p2 ) {
        return
            sqrt( ( ( $p1->[0] - $p2->[0] )**2 ) +
                ( ( $p1->[1] - $p2->[1] )**2 ) );
    }
```

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/arne-sommer/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/arne-sommer/raku/ch-2.raku)

Giving us another method of determining a right angle, Arne provides us with a solution that establishes equal side lengths, then calculates the dot product between two adjacent lines. This value will be 0 if and only if the given angle is perpendicular.

The dot product is a nice choice here because it avoids some messy floating-point math involving trigonometric functions.

```perl
    my ($x1, $y1, $x2, $y2, $x3, $y3, $x4, $y4) = @args;

    my $l12 = sqrt(abs($x2 - $x1) ** 2 + abs($y2 - $y1) ** 2);
    my $l23 = sqrt(abs($x3 - $x2) ** 2 + abs($y3 - $y2) ** 2);
    my $l34 = sqrt(abs($x4 - $x3) ** 2 + abs($y4 - $y3) ** 2);
    my $l41 = sqrt(abs($x1 - $x4) ** 2 + abs($y1 - $y4) ** 2);

    unless ($l12 == $l23 && $l34 == $l41 && $l12 == $l41)
    {
      say ": The four edges does not have the same length ($l12, $l23, $l34, $l41)" if $verbose;
      say 0;
      exit;
    }

    my $dot_product = ($x2 - $x1) * ($y2 - $y1) + ($x4 - $x1) * ($y4 - $y1);

    if ($dot_product)
    {
      say ": Not 90 Degrees between lines 1-2 and 1-4" if $verbose;
      say 0;
      exit;
    }
```

## SORTING THE POINTS
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/adam-russell/perl/ch-2.pl), and
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/e-choroba/perl/ch-2.pl)
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/polettix/perl/ch-2.pl)
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/roger-bell-west/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/wanderdoc/perl/ch-2.pl)

As knowing the points are ordered can simplify the ultimate determination of a square, some solutions directly addressed this issue before proceeding, without requiring the points to be delivered in any particular order.

There were a couple of ways to go about this, by either sorting the points or working through the possible permutations presented. Neither of these tasks proved to be overly complex, as a basic sort plan was able to produce a consistent Z-pattern to the points that, although not a circumnavigation, could be worked with, and as for the permutations, because the *actual* ordering doesn't matter, we were able to combine all rotations and reflections into common classes, reducing the 24 possible permutations of {0, 1, 2, 3} to only 3: one circumnavigation, one zig-zag and one cross pattern.

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/e-choroba/perl/ch-2.pl)

Choroba delivers us a unique and very interesting solution to ordering the points, first sorting the input by x-value and then y-value, then stepping through the sorted indices in a specific pattern to create a set of *vectors*, of the differentials between points determining an edge. Following this method ensures either a clockwise or anti-clockwise circumnavigation of the polygon using these vectors. The same vectorization method can be applied to the diagonals.

As we can then be assured of the sides of our polygon, we can then decisively conclude whether the sides are the same length and the diagonals are equal as well.

```perl
    sub is_square {
        my %coords = @_;
        my @sorted_coords = sort { $a->[0] <=> $b->[0] || $a->[1] <=> $b->[1] }
                            map [$coords{"x$_"}, $coords{"y$_"}], 1 .. 4;
        draw(@sorted_coords);

        my @vectors = map [$sorted_coords[ $_->[0] ][0]
                           - $sorted_coords[ $_->[1] ][0],
                           $sorted_coords[ $_->[0] ][1]
                           - $sorted_coords[ $_->[1] ][1]],
                     [0, 1], [1, 3], [3, 2], [2, 0];

        my @diagonals = map [$sorted_coords[ $_->[0] ][0]
                             - $sorted_coords[ $_->[1] ][0],
                             $sorted_coords[ $_->[0] ][1]
                             - $sorted_coords[ $_->[1] ][1]],
                        [0, 3], [1, 2];

        # All vectors have the same size.
        my %size;
        ++$size{ $_->[0] ** 2 + $_->[1] ** 2 } for @vectors;
        return unless 1 == keys %size;

        # No duplicate points.
        return if grep $_->[0] == 0 && $_->[1] == 0, @vectors;

        # No rhombi.
        abs $diagonals[0][$_] == abs $diagonals[1][ ! $_ ]
            or return
            for 0, 1;

        return 1
    }
```

Going above and beyond, he also includes a really nice little ascii graphical display for each input point set, allowing a quick and easy visual confirmation of the conclusions;

```

    #    . . . . . . . .
    #    . . . . X . . .
    #    . . . . . . . .
    #    . X . . . . . .
    #    . . . . . . X .
    #    . . . . . . . .
    #    . . . X . . . .
    #    . . . . . . . .
    ok 7 - Askew counterclockwise

```

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/adam-russell/perl/ch-2.pl)

**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/adam-russell/cxx/ch-2.cxx), [Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/adam-russell/prolog/ch-2.p)


Adam Russell uses `Math::GSL::Vector` to produce a somewhat similar, vector-based attack on the problem, in this case the vectors greatly facilitate using the dot product, which is the effect of the overridden `*` operator.

```perl
    use boolean;
    use Math::GSL::Vector;

    sub unique{
        my %seen;
        return grep {!$seen{$_}++} @_;
    }

    sub is_square{
        my @points = @_;
        ##
        # Definitely a square if there are only 2 x and 2 y values.
        ##
        my @x = unique(map {$_->[0]} @points);
        my @y = unique(map {$_->[1]} @points);
        return true if @x == 2 && @y == 2;
        ##
        # sort the points and compute side lengths
        ##
        my @sorted_x = sort {$a->[0] <=> $b->[0]} @points;
        my @sorted_y = sort {$a->[1] <=> $b->[1]} @points;

        my($s, $t, $u, $v) = ($sorted_y[@sorted_y - 1], $sorted_x[@sorted_x - 1], $sorted_y[0], $sorted_x[0]);
        return false if $s->[0] + $u->[0] != $t->[0] + $v->[0];
        return false if $s->[1] + $u->[1] != $t->[1] + $v->[1];
        return false if $s->[1] - $u->[1] != $t->[0] - $v->[0];
        ##
        # compute angles
        ##
        my $dv_st = new Math::GSL::Vector([$s->[0] - $t->[0], $s->[1] - $t->[1]]);
        my $dv_tu = new Math::GSL::Vector([$t->[0] - $u->[0], $t->[1] - $u->[1]]);
        my $dv_uv = new Math::GSL::Vector([$u->[0] - $v->[0], $u->[1] - $v->[1]]);
        my $dv_vs = new Math::GSL::Vector([$v->[0] - $s->[0], $v->[1] - $s->[1]]);
        return false if $dv_st * $dv_tu != 0;
        return false if $dv_tu * $dv_uv != 0;
        return false if $dv_uv * $dv_vs != 0;
        return true;
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/polettix/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/polettix/raku/ch-2.raku)

We have more vectors from Flavio, who defines his own object to define them, along with a few overridden operators, among them the dot product.

A big divergence here is that Flavio does not sort his points, but instead sets up a short list of orderings to consider when evaluating them. If a given pattern does not find a square the next is tried, until the three possibilities are exhausted. A square is considered found if for every vertex the adjoining sides are equal and the angle is perpendicular.

```perl
    package Vector2D {
       use overload
         '-' => sub ($u, $v, $x) { v([ map { $u->[$_] - $v->[$_] } 0, 1 ]) },
         '*' => sub ($u, $v, $x) { $u->dot($v) };

       sub dot ($S, $t)   { return $S->[0] * $t->[0] + $S->[1] * $t->[1] }
       sub length_2 ($S)  { return $S->dot($S) }
       sub v ($v)         { return bless [$v->@*], __PACKAGE__ }
    }

    sub is_sequence_a_square (@points) {
       my $previous = $points[1] - $points[0];
       for my $i (1 .. $#points - 1) {
          my $current = $points[$i + 1] - $points[$i];
          return False if $previous->length_2 != $current->length_2;
          return False if $previous * $current > tolerance;
          $previous = $current;
       }
       return True;
    }

    sub is_square (@points) {
       state $permutations = [
          [0, 2, 1, 3],
          [0, 1, 2, 3],
          [0, 2, 3, 1],
       ];
       for my $permutation ($permutations->@*) {
          my @arrangement = map { Vector2D::v($_) } @points[@$permutation];
          return 1 if is_sequence_a_square(@arrangement);
       }
       return 0;
    }
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/roger-bell-west/perl/ch-2.pl)

**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/roger-bell-west/rust/ch-2.rs)

Roger gives us a brace of solutions this week, each working through different orderings for the input points. In his first example he progresses through each point in the specific ordering given, determining the distance to the next, with the first point repeated in the sequence to close the circuit. This determined the 4 equal sides. The final determination of a square is made through assessment of the angles at each vertex, a computation made through the use of `atan2`:

```perl
    foreach my $pp (0..3) {
        my @delta=map {$w[$pp+1][$_]-$w[$pp][$_]} (0,1);
        ...
        $angle=rad2deg(atan2($delta[1],$delta[0]));
        ...
        push @angles,$angle;
    }
```

Later, in an update on his [blog report](https://blog.firedrake.org/archive/2021/07/Perl_Weekly_Challenge_123__Ugly_Square.html), he provides us with a refactored and streamlined version, using two loops for the permutations and evaluating the points as having equal sides and equal diagonals.

```perl
    sub sp {
      my $m=shift;
      my @ds;
      foreach my $a (0..2) {
        foreach my $b ($a+1..3) {
          push @ds,($m->[$b][0]-$m->[$a][0])**2+($m->[$b][1]-$m->[$a][1])**2;
        }
      }
      @ds=sort {$a <=> $b} @ds;
      if ($ds[0]==$ds[3] && $ds[4]==$ds[5]) {
        return 1;
      }
      return 0;
    }
```



## ALL YOUR EDGES belong to US
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/athanasius/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/colin-crain/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/james-smith/perl/ch-2.pl),
[**Jared Martin**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/jaredor/perl/ch-2.pl),
[**kjetillll**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/kjetillll/perl/ch-2.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/mohammad-anwar/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/perlboy1967/perl/ch-2.pl), and
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/pete-houston/perl/ch-2.pl)

Another way of evaluating an unordered set of points was to consider the 4 given points as a graph and determine all 6 symmetrical edges through the structure, and then from there figure out which ones were sides and which diagonals in a constructed polygon. From there we saw some familiar techniques.

[**kjetillll**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/kjetillll/perl/ch-2.pl)

In their `is_square()` routine, kjetillll loops through 3 points, and for each point determines the distance to the other 3, adding the results to a hash as keys. One trick we see first presented here is the elimination of the square root portion of the Euclidean distance formula. As we don't care about the actual distances involved, removing this step will keep whole numbers whole and rational numbers within reason, and hence suitable as hash keys.

When finished, if this hash has only two keys, presumed to be the side length and the diagonal, the figure is concluded to be a square.

This will, almost always, work.

Those that routinely follow these pages will recall my seeming intractable inability to not pursue pathological edge-cases, a tendency I am trying very hard to keep in check today. But suffice to say a few carefully honed cases do exist, albeit not with rational points, as will be explained. But that will be later. For now, have a look at kjetillll's technique. Bonus for descriptive commentary, which always makes my life a little easier.

```perl
    sub is_square {
        die if @_ != 4 or grep@$_!=2,@_;
        my %dsf;   #dsf=distance squared found
        for my $p1 ( 0     .. 2 ){       # for the three first points
            for my $p2 ( $p1+1 .. 3 ){       # loop through the rest of the points
                my ($p1x,$p1y,$p2x,$p2y) = (@{$_[$p1]},@{$_[$p2]});
                $dsf{ ($p1x-$p2x)**2 + ($p1y-$p2y)**2 }++; #register distance squared
            }
        }
        say "$_     $dsf{$_}" for keys %dsf;
            #If only two different distances found between any two points it means
            #they form a square, returns 1 (true) if so, or 0 (false) otherwise.
            #Counting distances squared saves having to do square root as in Pythagoras
            #grep > 0 prevents two pairs of duplicate points or four equal points from returning true
            2==(grep$_>0,keys%dsf) ? 1 : 0
    }
```

[**Jared Martin**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/jaredor/perl/ch-2.pl)

To determine a square, Jared presents us with the following analysis:

* Create six line segments, then
* Sort the line segments by length, then
* If the first and the fourth line segments are of equal length, and
* If the fifth and sixth line segments are of equal length, then
* You have a square!

What's going on here is that should the first and fourth be equal in a sorted list the second and third will follow, so we have the same criteria that there are only two dimensions, and that a group of 4 presumed sides are shorter than the remaining group of 2 diagonals. An epsilon value is introduced to address the possibility of floating-point errors when the conditionals are evaluated.

```perl
    sub ima_square {

        my @points = map { [ split ',' ] } @_;
        my @lengths;
        for my $pnt1 (0..($#points-1)) {
            for my $pnt2 (($pnt1+1)..$#points) {
                push @lengths, sqrt(($points[$pnt1]->[0] - $points[$pnt2]->[0])**2 + ($points[$pnt1]->[1] - $points[$pnt2]->[1])**2);
            }
        }
        @lengths = sort { $a <=> $b } @lengths;

        my $tolerance = 0.0001;

        return (abs($lengths[3]  - $lengths[0]) < $tolerance and abs($lengths[5] - $lengths[4]) < $tolerance);

    }
```

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/colin-crain/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/colin-crain/raku/ch-2.raku)

```

                        A           AB, BC, BD and CD are the unit value
                        |
                        |           connect AC and AD, and
                        |
                        B           the polygon is AC -> CB -> BD -> DA
                       / \
                      /   \
                     /     \        (sometimes known as a "flying vee" shape)
                    C _ _ _ D

```

Ok, I said I was trying to avoid this, but as I wasn't the only one troubled by these terrible dreams here it goes. Consider the polygon above, CADB, with the edges CA-AD-DB-BC. This is a *concave* polygon with 2 sides and 2 diagonals equal, and the remaining 2 sides also equal to each other. Note one of the diagonals is *outside* the shape. No one ever said the polygon needed to be convex.

```
    CB = BD = CD = AB
    AC = AD
```

If we sort these distances we get 4 of the same and 2 longer distances. The longer side lengths can be computed with Pythagoras' Theorem to be

 √(2+√3) ≅ 1.93

times the length of the shorter. To defeat the possibility of this shape somehow being presented I included a check that the longer value would be less than 1.5 times the shorter. In a true square we would get the square root of 2, of course, so that works out.

The height of A above the CD line is 1 + (√3/2), so it's a little hard to exactly draw this shape, but we could in theory produce a machine-dependent value that would slip through without the further check.


```perl
    sub is_square ($pts) {
        my @pts = $pts->@*;
        my @dist;

        ## get distance list for all edges in complete graph of points
        for my $idx (0..2) {
            push @dist, map { euclidean( $pts[$idx], $pts[$_] )} ( $idx+1..3 )
        }

        ## makes sure only 2 values for length
        my ($v1, $c1, $v2, $c2) = ( shift @dist, 1, undef, 0);
        for (@dist) {
            if ( $_ == $v1 ) { $c1++; next }
            $v2 //= $_;
            if ( $_ == $v2 ) { $c2++; next }
            return 0;
        }

        ## order lengths to "sides" first, fail if not 4
        if ( $c1 < $c2 ) { ($v1, $c1, $v2, $c2) = ($v2, $c2, $v1, $c1) }
        return 0 unless $c1 == 4;

        ## fail unless 2 remaining sides are less than 1.5 x short side
        ## this is the concave polygon case
        return 0 unless $v2 < 1.5 * $v1;

        return 1;
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/james-smith/perl/ch-2.pl)

Concluding this nightmare of pathological edge-cases, James had given us a methodical, thorough analysis of polygon possibilities containing only two distances, finding in the end [a total of 6 shapes that fit the bill](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-123/james-smith):
* a square
* a rhombus with one diagonal equal to the side length
* the aforementioned flying-vee
* a kite, with 2 diagonals that cross and 2 sides, all equal, and 2 *shorter* sides
* an equilateral triangle with the fourth point in the center
* a trapezoid with the base equal to both diagonals

Perhaps the simplest way to avoid all these edge cases is to calculate the distances without employing the square root, then hashing the distances to their count. In a clever twist the hash is reversed and if we have two keys: "2" and "4", and the value of the "2" key is twice that of the "4", we're in. I have to say I like this hash-reversing trick a lot.

```perl
    sub is_square {
      my @pts = @_;

      ## If we measure the squared distances between each
      ## pari of points of a square we get two distances -
      ## the edge and diagonal.
      ## The latter being twice the former...
      ##
      ## No other combination of points has this property.

      ## Compute distances...
      my %D;
      while(@pts>1) {
        my $a = shift @pts;
        $D{($a->[0]-$_->[0])**2+($a->[1]-$_->[1])**2}++ foreach @pts;
      }
      my %F = reverse %D;
      return exists $F{2} && exists $F{4} && $F{2} == 2*$F{4} || 0;
    }
```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/cheok-yin-fung/perl/ch-2.pl)

CY constructs a solution for us based on vectors, with the vectors sorted to assure a circumnavigation. In the basic form, she uses the equality that the diagonals are square root of 2 times the edge length, although she also has a dot product routine. Of great interest is that, remarkably, she then expands her space into 3 dimensions and then 4, producing parallel routines for points in a cube and hypercube.

Here are her square and cube versions:

```perl
    sub is_square {
        my ($p0,$p1,$p2,$p3) = @_;
        my $v0 = vec_subtract($p0, $p1);
        my $v1 = vec_subtract($p0, $p2);
        my $v2 = vec_subtract($p0, $p3);
        return 0 unless (vec_prod_f($v1, $v2) == 0) xor
                        (vec_prod_f($v0, $v2) == 0) xor
                        (vec_prod_f($v0, $v1) == 0);
        my @n_vector = map { norm_f($_) } ($v0, $v1, $v2);
        @n_vector = sort {$a<=>$b} @n_vector;
        if ( $n_vector[0] == $n_vector[1] ) {
            return 1;
        }
        else {
            return 0;
        }
    }



    sub is_cube {
        my @p = @_;
        my %v;
        $v{$_} = vec_subtract($p[0], $p[$_]) for (1..7);
        my @ind = sort { norm_f($v{$a}) <=> norm_f($v{$b}) } keys %v;
        my ($N, $W, $U) = ($v{$ind[0]} , $v{$ind[1]} , $v{$ind[2]}) ;
        return 0 unless norm_f($N) == norm_f($W) && norm_f($N) == norm_f($U);
        return 0 unless vec_prod_f($N,$W) == 0 && vec_prod_f($W,$U) == 0
                            && vec_prod_f($U,$N) == 0;
        my $NW = vec_sum($N, $W);
        my $WU = vec_sum($W, $U);
        my $UN = vec_sum($U, $N);
        my $iter_face = permutations([$NW, $WU, $UN]);
        my $bool_face = undef;
        while (!$bool && (my $p = $iter_face->next)) {
            $bool =
                vec_same_f($v{$ind[3]}, $p->[0]) &&
                vec_same_f($v{$ind[4]}, $p->[1]) &&
                vec_same_f($v{$ind[5]}, $p->[2]) ;
        }

        return 0 if !$bool_face;

        my $NWU = vec_sum( $N, $WU);
        if ( vec_same_f( $v{$ind[6]} , $NWU ) ) {
            return 1;
        }
        else {
            return 0;
        }
    }
```

The [hypercube can be found here](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/cheok-yin-fung/perl/ch-2-cube-hypercube.pl).

## the PDL
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/jo-37/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/wlmb/perl/ch-2.pl)

We saw two examples using the Perl Data Language for its awesome matrix and vector manipulation superpowers.

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/jo-37/perl/ch-2.pl)

The PDL can be quite terse, but Jorg has provided a commentary to help us through its unusual syntax. Once we have vectors created, using a little helper routine `v()` and recomputing as edges, we take 3 dot products and subtract 2 of those edges, all of which should be equal to 0. So we check to make sure not any of them are true, which will yield a true, 1, return value. Nice.

```perl
    say 0 + is_square(v(@ARGV[0,1]), v(@ARGV[2,3]), v(@ARGV[4,5]), v(@ARGV[6,7]));

    # Check if four (2-d) vertices form a square.
    # A square is a rectangle with all edges of the same length.  If a
    # tetragon has three 90° angles, the fourth must have 90°, too.  So
    # checking for three angles is sufficient for a rectangle.  Furthermore,
    # the opposite edges in an rectangle have the same length. Thus checking
    # any two neighboring edges for the same length is sufficient for a
    # square.
    # Using PDL just for its nice vector operations.

    sub is_square ($v1, $v2, $v3, $v4) {
        # Transform vertex vectors to edge vectors.
        my ($e1, $e2, $e3, $e4) = ($v2 - $v1, $v3 - $v2, $v4 - $v3, $v1 - $v4);

        # Check three angles and two lengths.
        !any pdl $e1->transpose x $e2,
                 $e2->transpose x $e3,
                 $e3->transpose x $e4,
                 $e1->transpose x $e1 - $e2->transpose x $e2;
    }

    # Create a column vector as 1xN piddle
    sub v (@p) {
        pdl(@p)->dummy(0);
    }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/wlmb/perl/ch-2.pl)

Again the PDL presents us with a somewhat ridiculously compact solution; thankfully Luis also provides a legend to guide our way. Basically what we're doing here is checking a corner: a squared-distance routine is used to whether the lengths of two edges from a vertex are the same, and the diagonal has twice the value.

Of interesting note the program scales, unchanged, into 3 dimensions, which is truly remarkable. Luis goes into [great detail on this subject in his writeup](https://wlmb.github.io/2021/07/27/PWC123/).

```perl
    # assume data as strings "[[x0,y0],[x1,y1],[x2,y2],[x3,y3]]"
    my $m=pdl($_); # convert to 2d array
    # Separate into four vectors, translate the origin to the first
    # and sort by size
    my $v0=$m->slice(":,(0)");
    my (undef, $s1, $s2, $d)=sort {size2($a) <=> size2($b)} map {$_-$v0} $m->dog;
    # $s1 and $s2 ought to be the sides and $d the diagonal
    # check they add up and their sizes. I use 'approx' to accommodate rounding errors.
    my $ok=approx(size2($s1+$s2-$d),0) && approx(size2($s1),size2($s2))
           && approx(size2($d),2*size2($s1));
    say "Input: $m Output: $ok"

    sub size2 { #  squared size of vector
        my $v=shift @_;
        return ($v*$v)->sumover;
    }
```

## Additional Submissions in Guest Languages

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/abigail/perl/ch-2.pl)

**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/abigail/awk/ch-2.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/abigail/bash/ch-2.sh), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/abigail/bc/ch-2.bc), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/abigail/c/ch-2.c), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/abigail/go/ch-2.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/abigail/java/ch-2.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/abigail/lua/ch-2.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/abigail/node/ch-2.js), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/abigail/pascal/ch-2.p), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/abigail/python/ch-2.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/abigail/r/ch-2.r), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/abigail/ruby/ch-2.rb), [Scheme](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/abigail/scheme/ch-2.scm), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/abigail/tcl/ch-2.tcl)

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/athanasius/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/athanasius/raku/ch-2.raku)

[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/stuart-little/perl/ch-2.pl)

**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/stuart-little/haskell/ch-2.hs), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/stuart-little/lua/ch-2.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/stuart-little/node/ch-2.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/stuart-little/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/stuart-little/raku/ch-2.raku)

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/ulrich-rieke/perl/ch-2.pl)

**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/ulrich-rieke/cpp/ch-2.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/ulrich-rieke/haskell/ch-2.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-123/ulrich-rieke/raku/ch-2.raku)


------------------------------------------






---

# BLOGS {#PWC123BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, I somehow continue to maintain my bearings. Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC093BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *READ* these *BLOG* *LINKS*:

**( *don't think, trust your training, you're in the zone, just do it ...* )**


**Abigail**

 * [Perl Weekly Challenge 123: Ugly Numbers](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-123-1.html) ( *Perl* )
 * [Perl Weekly Challenge 123: Square Points](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-123-2.html) ( *Perl* )

**Adam Russell**

 * [Ugly Numbers / Square Points — Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2021/08/01) ( *Perl* )
 * [Ugly Numbers / Square Points — Prolog — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2021/08/01) ( *Prolog* )

**Arne Sommer**

 * [Ugly Points with Raku and Perl](https://raku-musings.com/ugly-points.html) ( *Perl & Raku* )

**Cheok-Yin Fung**

 * [CY's Take on The Weekly Challenge #123 - N-cube ](https://e7-87-83.github.io/coding/challenge_123.html) ( *Perl* )

**Colin Crain**

 * [Don't Be an Ugly Square, Man — Programming Excursions in Perl and Raku](https://colincrain.com/2021/08/01/dont-be-an-ugly-square-man/) ( *Perl & Raku* )

**Dave Jacoby**

 * [Ugly and Square: Perl Weekly Challenge #123 | Committed to Memory](https://jacoby.github.io/2021/07/27/ugly-and-square-perl-weekly-challenge-123.html) ( *Perl* )
 * [As Richard Thompson sang, ‘I Misunderstood’ | Committed to Memory](https://jacoby.github.io/2021/07/28/as-richard-thompson-sang-i-misunderstood.html) ( *Perl* )

**Flavio Poletti**

 * [PWC123 - Ugly Numbers - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/07/28/pwc123-ugly-numbers/) ( *Perl & Raku* )
 * [PWC123 - Square Points - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/07/29/pwc123-square-points/) ( *Perl & Raku* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 123](https://www.braincells.com/perl/2021/08/perl_weekly_challenge_week_123.html) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #123](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-123/james-smith) ( *Perl* )

**Jared Martin**

 * [TWC: Punting to MJD and Showing Q&D Geometry | Jared Martin](http://blogs.perl.org/users/jared_martin/2021/08/twc-punting-to-mjd-and-showing-qd-geometry.html) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 123: Ugly Numbers and Square Points | laurent_r](http://blogs.perl.org/users/laurent_r/2021/07/perl-weekly-challenge-123-ugly-numbers-and-square-points.html) ( *Perl & Raku* )

**Roger Bell_West**

 * [RogerBW's Blog: Perl Weekly Challenge 123: Ugly Square](https://blog.firedrake.org/archive/2021/07/Perl_Weekly_Challenge_123__Ugly_Square.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 123](https://dev.to/simongreennet/weekly-challenge-123-2flk) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 123 – W. Luis Mochán](https://wlmb.github.io/2021/07/27/PWC123/) ( *Perl* )
