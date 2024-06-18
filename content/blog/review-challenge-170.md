---
author:       Colin Crain
date:         2022-08-01T00:00:00
description:  "Colin Crain › Perl Weekly Review #170"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #170"
image:        images/blog/p5-review-challenge-170.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-169/).* )

Welcome to the Perl review pages for **Week 170** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

---

### ●︎ Why do we do these challenges?

I suppose any reasonable answer to that question would be from a field as wide ranging and varied as the people who choose to join the team. One thing, though, is clear: it's not a competition, and there are no judges, even if there is a "prize" of sorts. About that -- I think of it more as an honorarium periodically awarded to acknowledge the efforts we make towards this strange goal. So there's no determination to find the *fastest*, or the *shortest*, or even, in some abstract way, the *best* way to go about things, although I'm certain the participants have their own aspirations and personal drives. As Perl is such a wonderfully expressive language, this provides quite a bit of fodder to the core idea of TMTOWTDI, producing a gamut of varied techniques and solutions.

Even the tasks themselves are often open to a certain amount of discretionary interpretation. What we end up with is a situation where each participant is producing something in the manner they find the most interesting or satisfying. Some team members focus on carefully crafted complete applications, thoroughly vetting input data and handling every use case they can think up. Others choose to apply themselves to the logic of the underlying puzzle and making it work in the most elegant way they can. Some eschew modules they would ordinarily reach for, others embrace them, bringing to light wheels perhaps invented years ago that happen to exactly solve the problem in front of them today.

I've been considering this question for some time and have found one binding commonality between all of us out solving these challenges each week, in that however we normally live our lives, the task in front of us more than likely has nothing to do with any of that. And I think this has great value. We all do what we do, in the real world, and hopefully we do it well. The Weekly Challenge provides us with an opportunity to do something germane to that life yet distinctly different; if we only do the things we already know how to do then we will only do the same things over and over. This is where the "challenge" aspect comes into play.

So we can consider The Weekly Challenge as providing a problem space outside of our comfort zone, as far out from that comfort as we wish to take things. From those reaches we can gather and learn things, pick and choose and bring what we want back into our lives. Personally, I think that's what this whole thing is about. YMMV.

---

<strong><emp>Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due.</emp></strong>

And that, my friends, is why I'm here, to try and figure out ways to do just that.

So here we are then.

I'm ready — let’s get to it and see what we can find.

---

### For Additional Context…

Before we begin, you may wish to revisit either the pages for the [**original tasks**](/blog/perl-weekly-challenge-170/) or the summary [**recap**](/blog/recap-challenge-170/) of the challenge. But don't worry about it, the challenge text will be repeated and presented as we progress from task to task.

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

<br>

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC170TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC170TASK2)   &nbsp;  &nbsp;  &nbsp;       •   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC170BLOGS)    &nbsp;  &nbsp;  &nbsp;       •

---

# TASK 1 {#PWC170TASK1}

# Primorial Numbers
*Submitted by: Mohammad S Anwar*

Write a script to generate first 10 Primorial Numbers.

Primorial numbers are those formed by multiplying successive prime numbers.

*For example,*
```
    P(0) = 1    (1)
    P(1) = 2    (1x2)
    P(2) = 6    (1x2×3)
    P(3) = 30   (1x2×3×5)
    P(4) = 210  (1x2×3×5×7)
```

## about the solutions
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/adam-russell/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/athanasius/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/cheok-yin-fung/perl/ch-1.pl),
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/cristian-heredia/perl/ch-1.pl),
[**Dario Mazzeo**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/dario-mazzeo/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/jo-37/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/lubos-kolouch/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/mattneleigh/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/perlboy1967/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/peter-campbell-smith/perl/ch-1.pl),
[**Philippe Bricout**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/brxfork/perl/ch-1.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/robert-dicicco/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/roger-bell-west/perl/ch-1.pl),
[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/ryan-thompson/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/sgreen/perl/ch-1.pl),
[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/steve-g-lynn/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/ulrich-rieke/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/wlmb/perl/ch-1.pl)

We first came across the primorials is [PWC155](), when we used them in the construction of the Fortunate Numbers. In this related but simpler task, we are asked to just generate the primorials themselves.

The primorials, then, are analogous to the factorials, in that they share the same generalized recurrence relation: given some reference sequence, to find the next number in either of the two constructed sequences we multiply the previous value by the next value in the reference.

**g**(*n*) = **g**(*n*-1) × **ref**(*n*)

In the factorials, the reference is the the positive whole numbers, which corresponds directly to the index.

(*n*)! = (*n*-1)! × *n*

In the primorials, however, we substitute the sequence of primes numbers,

π = (2, 3, 5, 7, 11, 13, 17, 19, 23, ...)

Which gives us

**P**(*n*) = **P**(*n*-1) × π(*n*)

What this means is to find the next primorial, we multiply the previous product total by the prime corresponding to the given index.

Suffice to say all sorts of hijinx ensue.

There were 26 submissions for the first task this past week.

## A SELECTION of SUBMISSIONS
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/sgreen/perl/ch-1.pl),
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/cristian-heredia/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/dave-jacoby/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/jaldhar-h-vyas/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/ulrich-rieke/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/mohammad-anwar/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/cheok-yin-fung/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/adam-russell/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/wlmb/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/athanasius/perl/ch-1.pl),
[**Philippe Bricout**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/brxfork/perl/ch-1.pl), and
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/e-choroba/perl/ch-1.pl)



As it worked out, the main requirement for solving this task was a list of successive primes, which the members approached in a variety of ways. One might even say the usual ways, as we have generated many lists of primes in these challenges along the way.

After acquiring a list of primes, generating the primorials is as simple as keeping a running product across the sequence, so that portion of the process was quite compact and self-similar across the field.

The primorials, it should be noted, grow at a faster rate than the factorials. Still not super-exponential growth, *n*<sup>*n*</sup>, mind you, but do we run out of unsigned 64-bit integer above the 16th position.

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/sgreen/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/sgreen/python/ch-1.py)

Simon will start us off today with a straightforward solution. It's comprised of two parts: the `main` wrapper increments a counter and tests to see whether the value is prime, using the `is_prime()` routine. If it is, then it gets multiplied into the running value and pushed on the output list.

To determine whether a number is prime, all values from 2 to the square root of the candidate are checked to see whether they divide out evenly. Only if none do do we return a true value.

```perl
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

    sub main {
        my @solutions = (1);
        my $value     = 1;
        my $counter   = 0;

        # We need 10 solutions
        while ( @solutions < 10 ) {
            $counter++;
            if ( is_prime($counter) ) {
                # Multiple the solution by this number
                $value *= $counter;
                push @solutions, $value;
            }
        }

        say join ', ', @solutions;
    }
```

[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/cristian-heredia/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/cristian-heredia/python/ch-1.py)

Christina, back from a hiatus, starts with somewhat optimistically creating a list of the first 100 primes, using trial division. Her script comes configured to make 10 primorials, but this parameter is easily altered. As noted above, though, the primorials get too large to normally handle above the 16th member of the sequence.

```perl
    # Function to obtain all the primes numbers <= 100
    sub primeNumbers{
        foreach(my $i=2; $i<=100; $i++){
            push(@primes, $i);
            foreach(my $j=2; $j< $i; $j++){
                if ($i%$j == 0){
                    pop(@primes);
                    last;
                }
            }
        }
        unshift(@primes, "1");
        return @primes;
    }

    sub primorialNumbers{
        foreach(my $j=0; $j<=$max-1; $j++){
           $valor = $valor*$primes[$j];
           print "P($j) = $valor\n";
        }
    }
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/dave-jacoby/perl/ch-1.pl)

Dave has been exploring iterator closures lately, and this time makes one that provides the next integer whenever asked, starting at a given initial value. To find the next prime value this iterator coderef is instantiated with the last prime found and then called repeatedly until the `is_prime` filter allows the value to proceed. This is continued until enough primes are generated, at which point the list is returned.

With a list of all the primes at once, Dave can make a pretty output report, which is clever:

```
    P(0) = 1 (1)

    P(1) = 2 (1x2)

    P(2) = 6 (1x2x3)

    P(3) = 30 (1x2x3x5)

    P(4) = 210 (1x2x3x5x7)

    P(5) = 2310 (1x2x3x5x7x11)

    P(6) = 30030 (1x2x3x5x7x11x13)

    P(7) = 510510 (1x2x3x5x7x11x13x17)

    P(8) = 9699690 (1x2x3x5x7x11x13x17x19)

    P(9) = 223092870 (1x2x3x5x7x11x13x17x19x23)
```

Here's an example of some of his prime-manufacturing code:

```perl
    sub primes ( $i ) {
        state $primes;
        $primes->[0] = 1;

        if ( !defined $primes->[$i] ) {
            my $iter = make_iterator( $primes->[-1] );
            while ( my $p = $iter->() ) {
                next unless is_prime($p);
                push $primes->@*, $p;
                $primes->@* = uniq $primes->@*;
                last if defined $primes->[$i];
            }
        }
        return $primes->@[ 0 .. $i ];
    }

    sub make_iterator($n) {
        return sub {
            state $v = $n;
            return $v++;
        }
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC170 - Primorial Numbers](https://github.polettix.it/ETOOBUSY/2022/06/22/pwc170-primorial-numbers/)

We don't really need a list of primes if we can always know the *next* prime. And the `Math::Prime:::Util->next_prime()` function does that quite well.

The way he works the primorial generation into a closure is quite lovely. Iterators *are* kind of Flavio's thing, you know? Or perhaps you don't, but now you do. The closure is returned as a coderef, which is called through dereference to generate the number of primorials requested.

Remember `ntheory` is just a cooler alias for `Math::Prime::Util`. It's [street name](https://www.urbandictionary.com/define.php?term=Street%20name), if you will.

```perl
    use ntheory 'next_prime';

    my $it = primorial_it();
    say $it->() for 1 .. shift || 10;

    sub primorial_it ($n = 1, $p = 1) {
       sub { ($p, $n) = ($p * $n, next_prime($n)); $p };
    }
```


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/ulrich-rieke/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/ulrich-rieke/cpp/ch-1.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/ulrich-rieke/haskell/ch-1.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/ulrich-rieke/raku/ch-1.raku)

Let's look at a few more.

Here is another implementation of trial division by Ulrich:

```perl
    sub isPrime {
      my $number = shift ;
      my $stop = sqrt( $number ) ;
      for my $i ( 2 .. floor( $stop )) {
          if ( $number % $i == 0 ) {
            return 0 ;
          }
      }
      return 1 ;
    }

    my @primeNumbers = ( 1 ) ;
    my @primorials ;
    my $current = 2 ;
    while ( scalar( @primeNumbers ) != 10 ) {
      if ( isPrime( $current ) ) {
          push @primeNumbers, $current ;
      }
      $current++ ;
    }
    push @primorials, 1 ;
    for my $i (1 .. 9) {
      push @primorials , $primorials[-1] * $primeNumbers[ $i ] ;
    }
    say join( ', ' , @primorials ) ;
```

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/jaldhar-h-vyas/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/jaldhar-h-vyas/raku/ch-1.sh)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 170](https://www.braincells.com/perl/2022/06/perl_weekly_challenge_week_170.html)

And maybe even one more from Jaldhar:

```perl
    sub isPrime {
        my ($n) = @_;

        if ($n < 2) {
            return undef;
        }

        if ($n == 2) {
            return 1;
        }

        for my $i (2 .. sqrt($n)) {
            if ($n % $i == 0) {
                return undef;
            }
        }

        return 1;
    }

    sub nextPrime {
        state $i = 1;
        if (scalar @_) {
            $i = shift;
        }

        while ($i++) {
            if (isPrime($i)) {
                return $i;
            }
        }
    }
```


[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/mohammad-anwar/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/mohammad-anwar/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/mohammad-anwar/raku/ch-1.raku)

Mohammad's submission is noteworthy for his use of the experimental `builtin` boolean extensions available in Perl 5.36. I know it's a small thing to be able to use `true` and `false` instead of Perl's usual rules of truthiness, but hey, convenience is where you get it, and lack of ambiguity has tangible value.

```perl
    sub is_prime($n) {
        return false if ($n == 1);
        do { return false unless $n % $_ } for (2 .. sqrt $n);
        return true;
    }
```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/cheok-yin-fung/perl/ch-1.pl)

It seems to me that this challenge is about the primorials, and not about just generating prime numbers yet again. We have, after all, done quite a lot of that. We are, you might say, experienced.

There's nothing new here, and the primes themselves don't change. I'd rather have [Planck's constant](https://en.wikipedia.org/wiki/Planck_constant) move on us than to have the first 10 primes change.

So CY keeps her focus away from these distractions and simply supplies her own 10 primes. I've looked them over: they check out.

```perl
    my @prime = (2, 3, 5, 7, 11, 13, 17, 19, 23);

    say my $x = 1;

    say $x*=$prime[$_] for 0..8;
```

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/adam-russell/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/adam-russell/java/ch-1.java), [Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/adam-russell/prolog/ch-1.p)

Adam bucks the `Math::Prime:Util` trend and imports his function `is_prime()` from `Math::Primality`, which supplies an alternate implementation of the Baillie–PSW primality test. This is a probabilistic test of primality that has had its results independently  verified for all values up to 10<sup>15</sup>, or an unsigned 64-bit integer, as the case may be.

Of note the function `is_prime()` from `Math::Prime::Util` also implements this test, which is kind of the current gold standard. The test itself is a combination of two other tests, the strong Miller-Rabin test and the strong Lucas-Selfridge test, that provide non-overlapping filtering of values. The `Math::Primality` version states that they have implemented certain optimizations for efficiency on top of the base functionality.

With such a function, we can simply start counting and checking each number for primality until we have as many primes as required. Primes are added to a list that is returned when full.

```perl
    use Math::Primality qw/is_prime/;

    sub n_primes{
        my($n) = @_;
        my @primes = (1);
        return @primes if $n == 0;
        my $x = 2;
        {
            push @primes, $x if is_prime($x);
            $x++;
            redo if @primes < $n;
        }
        return @primes;
    }

    sub n_primorials{
        my($n) = @_;
        my $x = 0;
        my @primes = n_primes($n);
        my @primorials;
        {
            my $primorial = 1;
            map {$primorial *= $_} @primes[0 .. $x];
            push @primorials, $primorial;
            $x++;
            redo if $x < $n;
        }
        return @primorials;
    }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/wlmb/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 170 – W. Luis Mochán](https://wlmb.github.io/2022/06/20/PWC170/)

Going the other way, to self-sufficiency, Luis brings in the `PDL`, the Perl Data Library, to build a sieve of Eratosthenes. There's a lot of nice little parts here, starting with a clever use of logarithms to calculate an upper bound on the *n*-th prime to know how large to build the starting vector. Using the function `ones()` he fills the vector with true values, then according to the patterns of the multiples, sets all multiples of all values up to the square root of the target to 0. The remaining positions represent the primes. As no division is involved the process is very fast.

He can then multiply the index values of the primes to get the primorials.

```perl
    use PDL;
    use PDL::NiceSlice;
    die "Usage: ./ch-1.pl N\nto obtain the first N Primorial numbers" unless @ARGV;
    my $N=shift;                                    # desired primorials
    my $M=$N>6?1+$N*(log($N)+log(log($N))):14;      # upper bound on N-th prime
    my $sieve=ones($M);                             # large enough Eratosthenes sieve
    $sieve(0:1).=0;                                 # 0 and 1 are not primes
    $sieve($_**2:-1:$_).=0 for(2..sqrt($M));        # all non-trivial multiples are not primes
    my $primes=sequence($M)->where($sieve);         # primes correspond to non-zeroed positions in sieve
    say "P($_)=", $_==0?1:$primes(0:$_-1)->prodover # multiply first primes to obtain primorials
        foreach(0..$N-1);
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/athanasius/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/athanasius/raku/ch-1.raku)

I [spoke last week](https://theweeklychallenge.org/blog/review-challenge-169/#PWC169TASK1) about the good monk's extensible sieve of Eratosthenes, and as we have another use for it here we find it deployed yet again. The code as written adds primes to a running list by length: first 1-digit primes, then all 2-digit primes, then 3 and whatever until the range is what is needed. Since we already examined that we'll pass this time, but I do urge you to have look anyway, as it's a artful piece.

In their `MAIN` block, first we get all 1- and 2-digit primes, or whatever is required to satisfy the number of primorials requested. Then a loop is set up across the prime indices, multiplying the last primorial calculated by the next prime inthe sequence.

Everything is quite quick and efficiant, and we'll note that above a request for 16 results the `bigint` pragma is specified. This doesn't really take much of a computational toll however, and primorials up to 100 come quick and easy.

The 100th primorial, for example, is

360844389670889120596666622617913949996791173564674046947128198626865013659530886126426926236285227549614269830067789233441487794271251197617695304932137657076284257167034052538721760873312856982361775374148143046670

...and I think we'll just stop there. This took at most a few seconds.


```perl
    use Const::Fast;

    use constant TARGET => 16;

    use if TARGET > 16, 'bigint';

    MAIN:
    {
        my $args = scalar @ARGV;
           $args == 0
                or die "Expected 0 command line arguments, found $args\n$USAGE";

        my @primes;

        for (my $digits = 1; scalar @primes < TARGET - 1; ++$digits)
        {
            push @primes, @{ get_primes( $digits ) };
        }

        my @primorials = (1);

        for my $i (0 .. TARGET - 2)
        {
            push @primorials, $primorials[ -1 ] * $primes[ $i ];
        }

        printf "The first %d primorial numbers:\n%s\n",
                TARGET, join ', ', @primorials;
    }
```

[**Philippe Bricout**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/brxfork/perl/ch-1.pl)

New member Phillipe manages to place everything into a single one-liner, which is quite interesting.

The regular expression is a variation on a prime number generator first foisted on the world by Abigail about 20 years ago. It essentially works in a unary number system, relying on the regex engine's backtracking system to try matching increasingly large multiples of "x"s across the string. As the match is achored at begining and end, te only way this can match is if the number of xs divide out evenly. It's kind of pathologically inefficient but totally cool.

If a number is found it gets multiplied into the last element from the running primorial list, `@p`. Nice.

```perl
    perl -E 'while(@p < 10) { $_.="x";/^(.{2,})\1+$/ or push @p,($p[-1]//1)*length};say "@p"'
```



[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/e-choroba/perl/ch-1.pl)

And finally, we'll wrap up with Choroba. As we've extensively played around with the limits of how far we can go in using modules to deliver our prime number functions, why not just ask a modules for primorials? Assuming that's an option, of course.

One very interesting, or insane, if you prefer, field of study I have heard of is to instead of using a fixed base and exponents in the expansion of a positional numbering system, to use the prime numbers in the positional places: the rightmost position would be the 2s, the next the 3s, then 5s, 7s, 11s, 13s etc. By the fundamental theorem of arithmetic all numbers above 2 will be able to be represented this way. Yes there are some fine points to be worked out, and I'm sure that whoever has taken up work on the [Time Cube](https://en.wikipedia.org/wiki/Time_Cube) might spare us a few moments to think them through.

Madness you say? Yes, why yes I *would* say this. But you could see how the primorials would fit in here. And this kind of madness is fairly normal in number theory.

So it follows that in a module specifically designed for number theory there might be a function or two to help us out, and there is, in `Math::Prime::Util`.

Ask and you shall recieve.


```perl
    use Math::Prime::Util qw{ pn_primorial };

    sub primorial_number ($n) {
        pn_primorial($n)
    }
```


## Blogs and Additional Submissions in Guest Languages for Task 1:


[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/duncan-c-white/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/duncan-c-white/C/ch-1.c)


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/james-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[The Weekly Challenge 170](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-170/james-smith)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/laurent-rosenfeld/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 170: Primorial Numbers and Kronecker Product](http://blogs.perl.org/users/laurent_r/2022/06/perl-weekly-challenge-170-primorial-numbers-and-kronecker-product.html)


[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/lubos-kolouch/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/lubos-kolouch/python/ch-1.py)


[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/peter-campbell-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Primorials and Kronecker products](https://pjcs-pwc.blogspot.com/2022/06/primorials-and-kronecker-products.html)


[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/robert-dicicco/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/robert-dicicco/julia/ch-1.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/robert-dicicco/raku/ch-1.raku), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/robert-dicicco/ruby/ch-1.rb)


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/roger-bell-west/javascript/ch-1.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/roger-bell-west/kotlin/ch-1.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/roger-bell-west/lua/ch-1.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 170: Kronecker's Primorial](https://blog.firedrake.org/archive/2022/06/The_Weekly_Challenge_170__Kronecker_s_Primorial.html)


[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/ryan-thompson/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[PWC 170 › Primordial Numbers and Kronecker Products - Ryan J Thompson](https://ry.ca/2022/06/primordial-kronecker/)


[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/steve-g-lynn/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/steve-g-lynn/julia/ch-1.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/steve-g-lynn/raku/ch-1.p6)


&nbsp;&nbsp;**blog writeup:**
[PWC #170](https://thiujiac.blogspot.com/2022/06/pwc-170.html)


------------------------------------------





---

# TASK 2 {#PWC170TASK2}

# Kronecker Product
*Submitted by: Mohammad S Anwar*

You are given 2 matrices.

Write a script to implement [Kronecker Product](https://en.wikipedia.org/wiki/Kronecker_product) on the given 2 matrices.

For more information, please refer wikipedia page.


**For example,**
```
    A = [ 1 2 ]
        [ 3 4 ]

    B = [ 5 6 ]
        [ 7 8 ]

    A x B = [ 1 x [ 5 6 ]   2 x [ 5 6 ] ]
            [     [ 7 8 ]       [ 7 8 ] ]
            [ 3 x [ 5 6 ]   4 x [ 5 6 ] ]
            [     [ 7 8 ]       [ 7 8 ] ]

          = [ 1x5 1x6 2x5 2x6 ]
            [ 1x7 1x8 2x7 2x8 ]
            [ 3x5 3x6 4x5 4x6 ]
            [ 3x7 3x8 4x7 4x8 ]

          = [  5  6 10 12 ]
            [  7  8 14 16 ]
            [ 15 18 20 24 ]
            [ 21 24 28 32 ]
```

## about the solutions
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/athanasius/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/cheok-yin-fung/perl/ch-2.pl),
[**Dario Mazzeo**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/dario-mazzeo/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/jo-37/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/laurent-rosenfeld/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/lubos-kolouch/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/mattneleigh/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/perlboy1967/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/peter-campbell-smith/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/roger-bell-west/perl/ch-2.pl),
[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/ryan-thompson/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/sgreen/perl/ch-2.pl),
[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/steve-g-lynn/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/ulrich-rieke/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/wlmb/perl/ch-2.pl)


The Kronecker Product is an interesting operation on two matrices, A and B, where we apply a process analogous to the Cartesian product across them, such that every cell in matrix A is paired with every cell in matrix B, and the product of the two recorded in a new matrix. The operation proceeds stepwise, with the first cell in A mapped to all cells in B, producing a new new submatrix starting at the position of the cell in A. The next cell in the A row repeats the process, recording the output submatrix at the next column to the right of the previous submatrix. The relative posions of the cells in A remain in the final output, with each cell expanded into its own submatrix dimensioned as matrix B, with the actual values within multiplied.

Put yet another way, each row and column position in the matrix A is paired with and multiplied by each element in matrix B and the result used to populate a new matrix according to a specific bijective mapping. The example in the definition serves as a nice visual reference here.

The operation is not commutative, that is to say

A ⊗ B ≢ B ⊗ A

but as both result matrices contain the products of every pairing between elements in the two matrices A and B, we *can* conclude they will contain the same values in a different arrangement. So similar, but different.

As each element in A is mapped to a new submatrix dimensioned as matrix B, the size of the Kronecker Product matrix for two matrices [m,n] and [p,q] will be

[m × p, n × q]

which is to say the corresponding axis dimensions are multiplied.

There were 21 submissions for the second task this past week.

## A SELECTION of SUBMISSIONS
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/perlboy1967/perl/ch-2.pl),
[**Dario Mazzeo**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/dario-mazzeo/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/lubos-kolouch/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/mattneleigh/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/james-smith/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/roger-bell-west/perl/ch-2.pl),
[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/ryan-thompson/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/peter-campbell-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/jo-37/perl/ch-2.pl), and
[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/steve-g-lynn/perl/ch-2.pl)

What we are calling matrices here are obviously multidimensional arrays in Perl, and the puzzle becomes keeping track of the various indices on the computed product pairings, but curiously not every submission made this substitution. We also saw hashes appear in several forms to hold intermediate data, with stringified index values for keys. I found that quite curious.

As it worked out, there were two main forms: working forward from the two input matrices to construct a third, scaled product, and working backwards from the dimensions of the output, locating the elements from the input that need to be multiplied to find each value.

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/perlboy1967/perl/ch-2.pl)

Niels will start us off with an example of the steps involved to build an output matrix given two inputs, working forward. What we have is two multidimensional matrices to iterate through: for each row in matrix A we need to touch each column to access individual elements. Then, for each of those elements we need to iterate across each row and then each column of matrix B.

This implies four nested loops. This may seem a bit frightening, but the fact is the Kronecker product just gets big quickly: for two matrices dimensioned as [*m*,*n*] and [*p*,*q*], the output matrix will have *n* × *m* × *p* × *q* elements. That's liable to explode in many ways as those numbers get larger. The loops are just breaking off the individual coefficients of that equation.


```perl
    sub kroneckerProduct($$) {
      my ($arA, $arB) = @_;

      printMatrix('A', $arA);
      printMatrix('B', $arB);

      my $r = [];

      my ($W1,$H1) = (scalar @{$arA->[0]}, scalar @$arA);
      my ($W2,$H2) = (scalar @{$arB->[0]}, scalar @$arB);

      foreach my $h1 (0 .. $H1 - 1) {
        foreach my $w1 (0 ..  $W1 - 1) {
          foreach my $h2 (0 .. $H2 - 1) {
            foreach my $w2 (0 ..  $W2 - 1) {
              my $h = ($H1 <= $H2 ? $h1 * $H1 + $h2 : $h2 * $H2 + $h1);
              my $w = ($W1 <= $W2 ? $w1 * $W1 + $w2 : $w2 * $W2 + $w1);
              $r->[$h][$w] = $arA->[$h1][$w1] * $arB->[$h2][$w2];
            }
          }
        }
      }

      printMatrix('A x B', $r);
      return $r;
    }
```

Niels also thoughtfully includes a pretty-printing routine to output his results, producing a nicely-formatted output. Niels is good like that:

```perl
    A:
    [ 1 2 3 ]
    [ 4 5 6 ]
    [ 7 8 9 ]

    B:
    [ 9 8 7 ]
    [ 6 5 4 ]
    [ 3 2 1 ]

    A x B:
    [  9  8  7 18 16 14 27 24 21 ]
    [  6  5  4 12 10  8 18 15 12 ]
    [  3  2  1  6  4  2  9  6  3 ]
    [ 36 32 28 45 40 35 54 48 42 ]
    [ 24 20 16 30 25 20 36 30 24 ]
    [ 12  8  4 15 10  5 18 12  6 ]
    [ 63 56 49 72 64 56 81 72 63 ]
    [ 42 35 28 48 40 32 54 45 36 ]
    [ 21 14  7 24 16  8 27 18  9 ]
```

Well done.


[**Dario Mazzeo**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/dario-mazzeo/perl/ch-2.pl)

New member Dario rearranges the multiplication in a slightly different way, precomputing a new product submatrix for each new element addressed in A. This submatrix is passed around in a stringified form, which I find an interesting choice. We will, curiously enough, see it again later when we're blurring the lines between multidimensional matrices and hash key strings.

Thus in the inner loops he's sectioning off this precomputed submatrix to provide the individual components of the Kronecker product. The output is stored in a hash, with manufactured unique keys based on the riga-colonna coordinates.

Yes, that is Italian, as are his comments and symbol names. It's ok, I speak a Romance language.

Well, I speak a language. And have been told I can say romantic things.

English is a singularly weird amalgamation of several language families, one of which is Latinate. Or two, depending on how you look at it.

I recently learned that the English word "honcho", as in "head honcho", for "boss, leader" is a *Japanese* loan-word. Go figure. Also, if anyone has any illumination on how the obviously Latinate "liquidate" drifted into the Russian/Ukrainian ликвидировать/ліквідувати "to eliminate/kill" I'd like to hear it. There's an interesting etymology in there I'm sure.

But I digress.

Slightly condensed, Dario's submission:

```perl
    # Separare le righe della matrica con il carattere ";"
    my $inputA="1,2;3,4";
    my $inputB="5,6;7,8";

    foreach my $rigaA (@righeA){
        @colonneA=split(",", $rigaA);
        foreach my $colonnaA (@colonneA){
            my $vettore=Moltiplica($colonnaA, $inputB);
            @righeB=split(";",$vettore);
            foreach my $rigaB (@righeB){
                @colonneB=split(",",$rigaB);
                foreach my $colonnaB (@colonneB){
                    $AB{"$rr-$cc"}=$colonnaB;
                    $cc++;
                }
                $rr++; $cc-=$#colonneB+1;
            }
            $rr-=$#righeB+1; $cc+=$#colonneB+1;
        }
        $rr+=$#righeB+1; $cc=0;
    }

    foreach my $r (0 .. ($#righeA+1)*($#righeB+1)){
        foreach my $c (0 .. ($#colonneA+1)*($#colonneB+1)){
            print $AB{"$r-$c"}." ";
        }
        print "\n";
    }

    sub Moltiplica{
        my $mul=$_[0];
        my $arr=$_[1];
        my $tmp="";
        my $ss=1;

        my @valori=split(/[,;]/, $arr);
        my @separatori=split(/-?\d*/, $arr);
        foreach my $v (@valori){
            $tmp.=($mul*$v).@separatori[$ss];
            $ss++;
        }

        return $tmp;
    }
```

[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/lubos-kolouch/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/lubos-kolouch/python/ch-2.py)

Something is making me think I'm not explaining the four loops properly, or completely, or something. So let's take another stab at it, letting Lubos do the talking. I find his systematic breakdown to be quite clear.


```perl
    # row by row
    for my $row (@$matrix_a) {
        my $a_col_pos = 0;

        # column by column
        for my $a_item (@$row) {

            # mutiply each number with matrix b

            my $b_row_pos = 0;
            for my $b_row (@$matrix_b) {
                my $b_col_pos = 0;

                for my $b_item (@$b_row) {

                    # calculate the right position in the output matrix
                    $result[ $a_row_pos * $row_len + $b_row_pos ]
                        [ $a_col_pos * $col_len + $b_col_pos ]
                        = $a_item * $b_item;

                    $b_col_pos++;
                }
                $b_row_pos++;
            }
            $a_col_pos++;
        }
        $a_row_pos++;
    }
```

[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/mattneleigh/perl/ch-2.pl)

To wrap up this style, lets look at yet another version. Again we see the four loops. Is it clearer? It's well... patterned. You be the judge.

I find the last-element-in-an-array-reference notation a bit rough, especially with a mix of pre- and post-fix dereferencing. But these work:

```perl
    $a->$#*
    $a->[0]->$#*
```

It took me a while to figure that one out once, but now I know its there, waiting.

```perl
    sub kronecker_product{
        my $a = shift();
        my $b = shift();

        my @c = ();

        for my $aj (0 .. $#$a){
            for my $ai (0 .. $#{$a->[0]}){
                for my $bj (0 .. $#$b){
                    for my $bi (0 .. $#{$b->[0]}){
                        $c[$aj*scalar(@{$b})+$bj][$ai*scalar(@{$b->[0]})+$bi]
                            = $a->[$aj][$ai] * $b->[$bj][$bi];
                    }
                }
            }
        }

        return(\@c);

    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/james-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[The Weekly Challenge 170](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-170/james-smith)

Oh wait, did I say we were done? My mistake. James gives us the same algorithm in a single line of four nested `map` statements.

You know *[he says]* there's nothing really stopping anyone from writing nested `for` loops on a single line either. Except basic human decency, common sense and possibly the eternal wrath of your coworkers.

```perl
    sub k_product {
      [ map { my$r = $_; map { my$t = $_; [ map { my$s=$_; map { $s*$_ } @{$t} } @{$r} ] } @{$_[1]} } @{$_[0]} ]
    }
```

I personally think `map` loops should be formatted over multiple lines, but can't quite agree with myself on what that format should specify. It's a puzzle.

In any case, to add fuel to the fire James then goes and shortens it even more:

```perl
    sub k{[map{$b=$_;map{$a=$_;[map{//;map{$'*$_}@$a}@$b]}@{$_[1]}}@{$_[0]}]}
```

because he obviously wishes to destroy all humans.

Suddenly the genetics work makes a calculated, disturbing sense. Just make it quick James — just make it quick.


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/roger-bell-west/javascript/ch-2.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/roger-bell-west/kotlin/ch-2.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/roger-bell-west/lua/ch-2.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/roger-bell-west/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/roger-bell-west/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 170: Kronecker's Primorial](https://blog.firedrake.org/archive/2022/06/The_Weekly_Challenge_170__Kronecker_s_Primorial.html)

Roger switches things up. I find he often does this. Different drummer, all that. What he's done is to iterate through the cells of the *output* matrix. After all, we know its dimensions — we multiply the corresponding axes for matrix A and B. So we end up with approximately the same amount of work — each output cell is visited exactly once — with fewer, larger, loops. Using some modulo math and integer division he can back-construct the indices of the source matrices for each element in the output. Clever, that.

```perl
    sub kronecker($a,$b) {
      my @o;
      my $ax = scalar @{$a->[0]};
      my $ay = scalar @{$a};
      my $bx = scalar @{$b->[0]};
      my $by = scalar @{$b};
      foreach my $y (0..$ay*$by-1) {
        my $byi = $y % $by;
        my $ayi = int($y / $by);
        my @row;
        foreach my $x (0..$ax*$bx-1) {
          my $bxi = $x % $bx;
          my $axi = int($x / $bx);
          push @row,$a->[$ayi][$axi] * $b->[$byi][$bxi];
      }
      push @o,\@row;
      }
      return \@o;
    }
```

[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/peter-campbell-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Primorials and Kronecker products](https://pjcs-pwc.blogspot.com/2022/06/primorials-and-kronecker-products.html)

Peter gives us a nice compact solution using the 2-loop method that I find quite clearly stated. As an added bonus I appreciate calling his integer division function, returning the integer quotient and remainder, `quorem()`. Nice.

```perl
       # loop over the rows and cols of product matrix $K ($m * $p rows, $n * $q cols)
       for $i (0 .. $m * $p - 1) {
           for $j (0 .. $n * $q - 1) {

               # get the quotient and remainder on dividing i by p and j by q
               ($i_quo_p, $i_rem_p) = quorem($i, $p);
               ($j_quo_q, $j_rem_q) = quorem($j, $q);

               # Wikipedia formula for element i, j of K
               $K->[$i]->[$j] = $A->[$i_quo_p]->[$j_quo_q] * $B->[$i_rem_p]->[$j_rem_q];
           }
       }
```



[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/ryan-thompson/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[PWC 170 › Primordial Numbers and Kronecker Products - Ryan J Thompson](https://ry.ca/2022/06/primordial-kronecker/)

It seems translating the working-backwards solution, iterating over the output array dimensions, complicates the switch to using `map` loops. We need three to nest: one to divide out the rows into A-columns, one to modulo out the B-columns, and a third to perform the multiplication of the elements.

I find Ryan's `map` notation a bit easier to read. I find functional code is easier to write than read in general, but wouldn't go as far as to call it write-only. It can easily become a puzzle, though.

```perl
    sub kronecker {
        my ($A, $B) = @_;

        map {
            my $i = $_;
            [
                map {
                        my    $aval = $_;
                        map { $aval * $_ } $B->[$i % @$B]->@*;
                } $A->[$i / @$B]->@*
            ]
        } 0..(@$A * @$B)-1;
    }
```



[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/jo-37/perl/ch-2.pl)

Thanks to mainly to Jorg and Luis, when I think of matrices and Perl I think of the PDL, the Perl Data Language. Working with multidimensional datasets is the PDL's home turf, so for those that know it's a natural fit.

I myself do not place myself within those hallowed ranks — those that know. Not yet. But I'm picking it up. I do like it a lot. It's just Perl, after all... extended.

Here Jorg multiplies two 2-dimensional matrices to make a 4-dimensional Kronecker product, then flattens that back into 2 dimensions.

I find the ease of certain manipulations using the PDL to be absurd sometimes. For another PDL solution, look at [**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/wlmb/perl/ch-2.pl)'s submission. It's fascinating stuff. And if that's not enough (there's never enough for an addict), we have a third solution by [**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/e-choroba/perl/ch-2.pl) to look at.

Choroba even goes further by presenting us with a PerlMonks thread writeup that addresses this very subject: [Kronecker Product](https://www.perlmonks.org/?node_id=11144888)

Enjoy!


```perl
    # PDL::Matrix has 'kroneckerproduct' but its usage would not qualify as
    # 'implementing Kronecker product'.
    # Therefore taking a different approach:
    # - replicate every element of A in the shape of B
    # - replicate the whole matrix B in the shape of A.
    # - the element-wise product of both replicated matrices results in a
    #   "true" 4-dimensional Kronecker product.
    # - "flattening" two dimensions gives the usual matrix result.
    # The potential one-liner is split into four steps to be able to show
    # the intermediate piddles.

    sub kronecker ($a, $b, $verbose) {
        say "a: $a" if $verbose;
        my $ar = $a->dummy(0, $b->dim(0))->dummy(1, $b->dim(1));
        say "ar: $ar" if $verbose;

        say "b: $b" if $verbose;
        my $br = $b->dummy(2, $a->dim(0))->dummy(3, $a->dim(1));
        say "br: $br" if $verbose;

        my $k = $ar * $br;
        say "k: $k" if $verbose;

        $k->clump(0, 2)->clump(1, 2);
    }
```


[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/steve-g-lynn/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/steve-g-lynn/julia/ch-2.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/steve-g-lynn/raku/ch-2.p6)


&nbsp;&nbsp;**blog writeup:**
[PWC #170](https://thiujiac.blogspot.com/2022/06/pwc-170.html)

Finally, we have Stephen.

Once upon a time I learned Perl 4. I wrote code that wrote HTML and thought it was very cool — code that wrote code! And it *was* cool. By the time I had leveraged my knowledge of many things into a job, or perhaps slightly after, Perl 5 came out, with modules, and the DBI, and CGI and I became the guy who tied databases to the world wide web. Good times.

Perl 5 did not originally have proper multidimensional arrays, so there were workarounds to emulate them. I myself haven't seen these workarounds in, say 20 years, so hence my interested surprise to find turning index pairs into unbique hash keys not once but several times in this challenge.

Stephen, as they say, is kicking it old-school.

Big time.

So what fury hath Stephen wrought? Let's see. It's, um, difficult to properly summarize. We have lots of `local` variables, as lexical scope apparently has not been implemented yet. We have typeglobs to pass references, which I think puts us solidly in Perl 4. But then I'm reasonably certain you couldn't pass around coderef blocks in early Perl, or maybe that was just beyond me at that point in the game. I don't remember when we got those. He notes he can't actually employ the old multidimensional array hack `$a[1;2]` so he uses a explicitly stringified hash key.

On the other hand, I do very much like the verb "kroneckered". For the record.

In a sense, Stephen's approach shares quite a bit with Dario's submission, in that an intermediate hash is constructed, with keys pointing to a stringified version of the per-computed submatrix for each element in matrix A. Then once all these are processed and hashed, he can use a flattening routine to transform the precomputed sections back into a proper form for output.

Let's say I haven't seen code like this in some time, and I'm glad for some of the big milestone Perl versions we've seen along the way. Like, you know, Perl 5. To me typeglobs read like pointers, which is not accidental I'm sure (as they kind of are), and now it makes me forget what language I'm reading.

In one final anecdote, I am reminded I have an edition of *The Book of a Thousand Nights and a Night*, or the *Arabian Nights* to some, translated into English by [Sir Richard Francis Burton](https://en.wikipedia.org/wiki/Richard_Francis_Burton). It's 10 volumes with several supplements, heavily annotated. The thing is, the original text is written in archaic Arabic, so he translated it into archaic English to maintain the same *feel* a modern Arabic reader would get. Let's say it takes some getting used to, reading things the old way. I admire the chutzpah.

```perl
    use List::Pairwise qw(mapp);

    local %A=('1,1',1,'1,2',2,'2,1',3,'2,2',4);
    local %B=('1,1',5,'1,2',6,'2,1',7,'2,2',8);

    local %C= &kron(*A,*B);

    foreach my $i (1 .. 4) {
        foreach my $j (1 .. 4) {
            print $C{$i.','.$j}," ";
        }
        print "\n";
    }

    sub kron {
        #-- old-fashioned approach using dynamic scope and typeglobs

        local (*A, *B)=@_; #--%A, %B matrices to be kroneckered
        local (*C, *C_wip);
        #-- %C return value, %C_wip intermediate non-flat object

        #-- nested subs for supporting calculations
        #-- get matrix dimensions
        local *find_mat_dims = sub {
            local (*matrix)=@_;
            my ($nrow, $ncol)=(0,0);

            for my $i (keys %matrix){
                my ($row, $col)=split(/,/,$i);
                ($row > $nrow) && ($nrow = $row);
                ($col > $ncol) && ($ncol = $col);
            }
            return ($nrow, $ncol);
        };

        local *scalar_times_mat = sub {
        #-- nested sub to multiply a scalar into
        #-- every element of a matrix

            local ($scalar, *matrix)=@_;

            my %matrix_copy = %matrix;
            mapp { $b = $scalar * $b} %matrix_copy;
            #-- $a is key, $b is value in List::Pairwise syntax

            return %matrix_copy;
        };

        #-- nested sub to create C_wip
        local *assemble_C_wip = sub {
            for my $i (keys %A){
                $C_wip{$i} = join(':',&scalar_times_mat( $A{$i}, *B ));
                #-- e.g., 1,2 -> '1,2:12:2,1:14:1,1:10:2,2:16'
            }
            return %C_wip;
        };

        #-- nested sub to flatten C_wip
        # e.g., 1,2 -> '1,2:12:2,1:14:1,1:10:2,2:16'
        # flattens to ('1,4' -> 12, '2,3'->14, '1,3'->10, '2,4'->16)
        # transform 'rowA,colA' -> '..rowB,colB..'
        # to (rowB+(rowA-1)*nrow_B),(colB+(colA-1)*ncol_B)
        # which is the 'row, col' in the flattened Kronecker product

        local *flatten_C_wip = sub {
            local @C=();
            for my $i (keys %C_wip){
                my ($row_A, $col_A)=split(/,/,$i);
                my ($entry)=$C_wip{$i};
                $entry =~ s/(\d+),(\d+)/
                    ($1+($row_A-1)*$nrow_B) .','.
                    ($2+($col_A-1)*$nrow_B)
                    /gex;
                push @C, split(/:/,$entry);
            }
            return @C;
        };

        #-- end nested sub definitions, back to main &kron

        local ($nrow_B, $ncol_B) = &find_mat_dims(*B);

        &assemble_C_wip();

        %C=&flatten_C_wip();

        return  %C;

    }
```

## Blogs and Additional Submissions in Guest Languages for Task 2:


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/athanasius/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/athanasius/raku/ch-2.raku)


[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/duncan-c-white/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/duncan-c-white/C/ch-2.c)


[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/e-choroba/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Kronecker Product](https://www.perlmonks.org/?node_id=11144888)


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC170 - Kronecker Product](https://github.polettix.it/ETOOBUSY/2022/06/23/pwc170-kronecker-product/)


[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/jaldhar-h-vyas/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/jaldhar-h-vyas/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 170](https://www.braincells.com/perl/2022/06/perl_weekly_challenge_week_170.html)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/laurent-rosenfeld/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/laurent-rosenfeld/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 170: Primorial Numbers and Kronecker Product](http://blogs.perl.org/users/laurent_r/2022/06/perl-weekly-challenge-170-primorial-numbers-and-kronecker-product.html)


[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/sgreen/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/sgreen/python/ch-2.py)


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/ulrich-rieke/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/ulrich-rieke/cpp/ch-2.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/ulrich-rieke/haskell/ch-2.hs)


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-170/wlmb/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 170 – W. Luis Mochán](https://wlmb.github.io/2022/06/20/PWC170/)


------------------------------------------





---

<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>

<center>
<h1 id="PWC170BLOGS">_________ THE BLOG PAGES _________</h1>
</center>


---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, by some miracle I somehow continue to maintain my bearings.**

**Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your Unquenchable *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC170BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *FOLLOW* these *BLOG* *LINKS*:

**( ...*don't think, trust your training, you're in the zone, just do it ...* )**


**Arne Sommer**

 * [The Primorial Soup - a Raku Product - Arne Sommer](https://raku-musings.com/primorial-product.html) ( *Raku* )

**E. Choroba**

 * [Kronecker Product](https://www.perlmonks.org/?node_id=11144888) ( *Perl* )

**Flavio Poletti**

 * [PWC170 - Primorial Numbers](https://github.polettix.it/ETOOBUSY/2022/06/22/pwc170-primorial-numbers/) ( *Perl & Raku* )
 * [PWC170 - Kronecker Product](https://github.polettix.it/ETOOBUSY/2022/06/23/pwc170-kronecker-product/) ( *Perl & Raku* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 170](https://www.braincells.com/perl/2022/06/perl_weekly_challenge_week_170.html) ( *Perl & Raku* )

**James Smith**

 * [The Weekly Challenge 170](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-170/james-smith) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 170: Primorial Numbers and Kronecker Product](http://blogs.perl.org/users/laurent_r/2022/06/perl-weekly-challenge-170-primorial-numbers-and-kronecker-product.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 170: primordial matrix! – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/06/20/PerlWeeklyChallenge170.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 170: primordial matrix! – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/06/20/PerlWeeklyChallenge170.html#task1plperl) ( *PL/Perl* )
 * [Perl Weekly Challenge 170: primordial matrix! – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/06/20/PerlWeeklyChallenge170.html#task1plpgsql) ( *PL/PgSQL* )

**Mark Senn**

 * [Primorial Numbers](https://engineering.purdue.edu/~mark/twc-170-1.pdf) ( *Raku* )

**Peter Campbell Smith**

 * [Primorials and Kronecker products](https://pjcs-pwc.blogspot.com/2022/06/primorials-and-kronecker-products.html) ( *Perl* )

**Roger Bell_West**

 * [RogerBW's Blog: The Weekly Challenge 170: Kronecker's Primorial](https://blog.firedrake.org/archive/2022/06/The_Weekly_Challenge_170__Kronecker_s_Primorial.html) ( *Perl & Raku* )

**Ryan Thompson**

 * [PWC 170 › Primordial Numbers and Kronecker Products - Ryan J Thompson](https://ry.ca/2022/06/primordial-kronecker/) ( *Perl* )

**Stephen G Lynn**

 * [PWC #170](https://thiujiac.blogspot.com/2022/06/pwc-170.html) ( *Perl & Raku* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 170 – W. Luis Mochán](https://wlmb.github.io/2022/06/20/PWC170/) ( *Perl* )
