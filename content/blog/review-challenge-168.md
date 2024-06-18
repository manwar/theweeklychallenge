---
author:       Colin Crain
date:         2022-07-16T00:00:00
description:  "Colin Crain › Perl Weekly Review #168"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #168"
image:        images/blog/p5-review-challenge-168.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-167/).* )

Welcome to the Perl review pages for **Week 168** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

Before we begin, you may wish to revisit either the pages for the [**original tasks**](/blog/perl-weekly-challenge-168/) or the summary [**recap**](/blog/recap-challenge-168/) of the challenge. But don't worry about it, the challenge text will be repeated and presented as we progress from task to task.

Oh, and one ***more*** thing before we finally get started:


### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please feel free to email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

<div align= center><strong>...Enough? Fine. So without even further ado...</strong></div>

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC168TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC168TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC168BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC168TASK1}

# Perrin Prime
*Submitted by: Roger Bell_West*

The Perrin sequence is defined to start with [3, 0, 2]; after that, term N is the sum of terms N-2 and N-3. (So it continues 3, 2, 5, 5, 7, ….)

A Perrin prime is a number in the Perrin sequence which is also a prime number.

Calculate the first 13 Perrin Primes.

f(13) = [2, 3, 5, 7, 17, 29, 277, 367, 853, 14197, 43721, 1442968193, 792606555396977]



## about the solutions
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/adam-russell/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/athanasius/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/cheok-yin-fung/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/jo-37/perl/ch-1.pl),
[**Julien Fiegehenn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/julien-fiegehenn/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/lubos-kolouch/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/mattneleigh/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/perlboy1967/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/peter-campbell-smith/perl/ch-1.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/robert-dicicco/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/roger-bell-west/perl/ch-1.pl),
[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/ryan-thompson/perl/ch-1.pl),
[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/steve-g-lynn/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/wlmb/perl/ch-1.pl)

We first visited the Perrin numbers indirectly back in [PWC154, Padovan Prime](https://theweeklychallenge.org/blog/review-challenge-154/). The Padovan numbers and the Perrin numbers are related, sharing the same generalized recurrence relation in their generation; they differ only in their initialization parameters.

The recurrence relation in question is the for any given *n*,

**S**(*n*) = **S**(*n*-2) + **S**(*n*-3)

This may be understood as very similar to the recurrence in the Fibonacci numbers, only in this case skipping over the immediate predecessor to sum the two values previous to that. The pattern thus requires three initial values to generate a fourth; for the Perrin numbers that initial sequence is (3, 0, 2).

That particular set of values may not be the most obvious choice in the world, in fact they appear highly irregular at first glance. The curious thing about the sequence generated by this particular set of values is that for any prime number *p*,

**P**(*p*) % *p* = 0

which is to say that any Perrin number with a prime index is evenly divisible by that prime number. Which is both weird and a little spooky.

Working backwards from this observation caused quite a bit of excitement in certain circles, as this would form the basis of a very quick check for primality: if the Perrin number for some arbitrary *n* were also to be divisible by *n*, then that number *n* would be prime. Unfortunately this result was based in observation, not proof, and although it was suspected that some composite number could violate the association no candidate could be found to do so.

That is, until 1982, with the discovery of 521<sup>2</sup>, or 271441. By further coincidence this also happens to be a perfect square, which is apparently unrelated to any mathematical concurrence with the Perrin prime association. As it turns out, there are an infinite number of Perrin pseudoprimes, as they are known. The search for an underlying pattern in the prime number sequence remains elusive.

There were 22 submissions for the first task this week.

## a few PRIME CUTS
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/jaldhar-h-vyas/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/mattneleigh/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/roger-bell-west/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/lubos-kolouch/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/athanasius/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/e-choroba/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/wlmb/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/adam-russell/perl/ch-1.pl),
[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/ryan-thompson/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/polettix/perl/ch-1.pl), and
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/jo-37/perl/ch-1.pl)



Calculating the Perrin sequence can be accomplished in the same ways as one can calculate the Fibonacci numbers: either through populating the recurrence relation or by using a variety of direct mathematical approaches.

The coincidental association with prime indexes is only indirectly related to the specific values of the Perrin sequence, which may or may not be prime, whether or not they are divisible by their index. There are both prime Perrin numbers that are not divisible by their index, and as we have seen Perrin numbers divisible by their index whose indices are not prime. To find the Perrin primes, then, we will need to generate Perrin numbers and check them for primality. Trial division on 792,606,555,396,977 requires maximally some 28,000,000 or so tries, even if we check every number instead of just the primes in the range up to the square root. So that is quite doable.

It's notable that the sequence does get big quite quickly, and the 13th number requested, aside for being obviously ordinally evil by nature, is also the largest value that can comfortably fit within a 64-bit integer. So we'll stop there.

Well, most of us will.

Probably.

Ok many. Many of us. I concede we are a headstrong lot.

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/jaldhar-h-vyas/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/jaldhar-h-vyas/raku/ch-1.sh)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 168](https://www.braincells.com/perl/2022/06/perl_weekly_challenge_week_168.html)

We'll start the ball rolling with Jaldhar, with an example of the steps for a straightforward solution: we successively generate Perrin numbers, and then check them for primality.

The main loop cycles a sort array of current Perrin numbers, adding the `[1]` and `[2]` indices and appending the sum using `push`. The holding array then has its first element shifted off, reducing the index count to three again.

In the middle of this loop a validation check is made with `isPrime`, which uses trial division to check possible divisors of a number up to the square root. Numbers found to be prime are added to the output.


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

    my @perrins = (3, 0, 2);
    my @perrinPrimes;

    while (scalar @perrinPrimes < 13) {
        if (isPrime($perrins[2]) && ! grep { $_ == $perrins[2] } @perrinPrimes) {
            push @perrinPrimes, $perrins[2];
        }
        push @perrins,  $perrins[0] + $perrins[1];
        shift @perrins;
    }

    say join q{, }, sort {$a <=> $b} @perrinPrimes;
```

[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/mattneleigh/perl/ch-1.pl)

Matthew gives us two functions to accomplish his goals, `next_perrin` and `is_prime`. The Perrin producer has an option to limit the preserved sequence to those values necessary to produce the next or keep everything, depending on what you want to do with the values.

In his primality test, though, he uses a significant improvement on trial division, in that all primes greater than 3 can be written in the form 6*k* ± 1 for some *k*. Using this we can reduce the number of division tests to check the values up to the square root by a not-insignificant factor of 3.

Matthew has a habit of extensively documenting his functions as he writes them, which I will go out of my way to thank him for, even if I have eliminated the comments here for the sake of brevity. Keep 'em coming, Matthew.

```perl
    sub next_perrin{
        my $perrin = shift();

        # Add the next number in the sequence
        push(
            @{$perrin},
            $perrin->[$#$perrin - 2] + $perrin->[$#$perrin - 1]
        );

        # If specified, toss out the oldest number
        shift(@{$perrin})
            if(defined(shift()));

    }

    sub is_prime{
        my $n = int(shift());

        my $i;

        # Take care of a few easy cases
        return(1)
            if(($n == 2) || ($n == 3));
        return(0)
            if(($n <= 1) || !($n % 2) || !($n % 3));

        # See if certain factors divide evenly
        for($i = 5; $i * $i <= $n; $i += 6){
            if(!($n % $i) || !($n % ($i + 2))){
                return(0);
            }
        }

        return(1);
    }
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/roger-bell-west/javascript/ch-1.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/roger-bell-west/kotlin/ch-1.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/roger-bell-west/lua/ch-1.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 168: At Home with the Perrins](https://blog.firedrake.org/archive/2022/06/The_Weekly_Challenge_168__At_Home_with_the_Perrins.html)

Roger gives us a second example of the refined trial division technique, looking only at candidate divisors of the form 6*k* ± 1 for *k* such that the product is less than or eqal to square root of the target.

Roger gives us a second example of this refined technique, where we look only at candidate divisors of the form 6*k* ± 1. Not all numbers of this form will be prime of course, but all primes will be of this form.


```perl
    sub isprime {
      my $candidate=shift;
      if ($candidate<2) {
        return 0;
      } elsif ($candidate==2) {
        return 1;
      } elsif ($candidate==3) {
        return 1;
      } elsif ($candidate % 2 == 0) {
        return 0;
      } elsif ($candidate % 3 == 0) {
        return 0;
      }
      my $anchor=0;
      my $limit=int(sqrt($candidate));
      while (1) {
        $anchor+=6;
        foreach my $t ($anchor-1,$anchor+1) {
          if ($t > $limit) {
            return 1;
          }
          if ($candidate % $t == 0) {
            return 0;
          }
        }
      }
    }
```


[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/lubos-kolouch/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/lubos-kolouch/python/ch-1.py)

With modern cryptography directly intersecting with the search for ever-larger prime numbers, the challange of testing for primality has gotten quite a bit of attention since the later part of the 20th century, with no end in sight. Accurate and rapid, albeit complex, tests have been constructed for all integers up to 2<sup>64</sup>, with verified results. It is conjecture that some pseudoprimes exist above this to evade the current state-of-the-art methods, but so far none have been discovered.

A [Miller–Rabin primality test](https://en.wikipedia.org/wiki/Miller–Rabin_primality_test) and a parallel [filter for Lucas probable primes](https://en.wikipedia.org/wiki/Lucas_pseudoprime), which combined together make up a [Baillie–PSW primality test](https://en.wikipedia.org/wiki/Baillie–PSW_primality_test), involves some quite complicated math. Constructing an implementation of this  would be a difficult problem to someone without the proper background. Fortunately this is not necessary just to use the algorithm, as we can import it from `Math::Prime::Util`, as `is_prime()`. This function uses a Baillie–PSW test but also incorporates several optimizations when faster algorithms can be substituted with mathematical certainty.

To address the uncertainties that remain in the techniques, the function returns one of three values: a 0 if a number is not prime, a 2 if a number is known to be prime, and a 1 if a number is thought to be prime but is unable to be proven as such. It has been independently proven that no number less than 2<sup>64</sup> will ever return a 1.

Using this module function the code becomes quite speedy and compact. Not that it was slow going around the long way, mind you, but for testing a large number of values for primality quickly, `Math::Prime::Util` is the way to go.

```perl
    use Math::Prime::Util qw(is_prime);

    sub generate_perrin_sequence {
        my $n               = shift;
        my @perrin_sequence = ( 3, 0, 2 );

        my %perrin_primes;

        while ( scalar keys %perrin_primes < $n ) {
            my $next_number = $perrin_sequence[-3] + $perrin_sequence[-2];
            push @perrin_sequence, $next_number;
            $perrin_primes{$next_number} = 1 if is_prime($next_number);
        }

        my @primes = sort { $a <=> $b } keys %perrin_primes;

        return \@primes;
    }
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/athanasius/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/athanasius/raku/ch-1.raku)

The monk always goes through the effort to bring a certain meticulous construction to the challenge that I always find attractive. Long-time readers will have perhaps by this time noticed a penchant of mine towards aesthetic and economical display of information. Communication, I like to say, is neither viewing or presenting, but rather a combination of these actions shared between two or more people. It takes two to tango, you know. When data is presented correctly the transfer of both information and meaning — a far more nuanced task — can appear effortless to the point of transparency.

Oh you clever, clever advertisers, you.

That particular rabbit-hole is a fun one to fall down, but that will be for another day. Here, the script itself is information describing a process and can definitely be presented in better or worse manners. And here it is nice, clearly organized, and easy to scan. These things matter should anyone, even, you, ever need to revisit what you wrote.

Have a look at the source and you will see even my sample is trimmed a bit from the base formatting, which is more even more structured into discrete sections.

The control flow is plain to see. The Perrin primes are recorded to a hash and printed if their incidence count is 1, eliminating some duplicate values at the beginning of the sequence. We are, after, all, not looking for the first 13 values of the Perrin numbers, but the first 13 primes we find. The focus is on the primes, not the sequence.

```perl
    use Const::Fast;
    use Math::Prime::Util qw( is_prime );

    const my @INIT_TRIPLET => (3, 0, 2);
    const my $TARGET       => 13;
    const my $USAGE        => "Usage:\n  perl $0\n";

    MAIN:
    {
        my $args = scalar @ARGV;
           $args == 0 or die 'ERROR: Expected 0 command line arguments, found ' .
                             "$args\n$USAGE";

        my @triplet = @INIT_TRIPLET;
        my %primes  = map { $_ => 1 } grep { is_prime $_ } @triplet;

        printf "f(%d) =\n  %s", $TARGET,
                                join ', ', sort { $a <=> $b } keys %primes;

        while (scalar keys %primes < $TARGET)
        {
            my $n = $triplet[ 0 ] + $triplet[ 1 ];

            shift @triplet;
            push  @triplet, $n;

            if (is_prime $n)
            {
                ++$primes{ $n };

                print ", $n" if $primes{ $n } == 1;
            }
        }

        print "\n";
    }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/e-choroba/perl/ch-1.pl)

In a compact solution, Choroba handles the duplicate values in a novel manner, with a test that each generated value is larger than that previous. This filters the values properly, as no new prime is ever introduced that is less than the last one generated.

You do have to know this fact before you start, though, to code it in.

Again we find `is_prime()` from `Math::Prime::Util` doing the heavy lifting.

Note again the use of a short array of just preserving the necessary values to construct the next value. This is sometimes known as a "sliding window".

```perl
    use Math::Prime::Util qw{ is_prime };

    sub perrin_prime {
        my ($length) = @_;
        my @perrin_sliding = (3, 0, 2);
        my @perrin_primes;
        while (@perrin_primes < $length) {
            push @perrin_sliding, shift(@perrin_sliding) + $perrin_sliding[0];
            push @perrin_primes, $perrin_sliding[1]
                if $perrin_sliding[1] > ($perrin_primes[-1] // 0)
                && is_prime($perrin_sliding[1]);
        }
        return @perrin_primes
    }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/wlmb/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 168 – W. Luis Mochán](https://wlmb.github.io/2022/06/06/PWC168/)

Saving the located primes as keys in a hash is another easy way to ensure the results are unique. We only need to access and sort the key list once we have achieved 13 values.

This will collect values whatever order they happen to arrive in.

```perl
    use Math::Prime::Util qw(is_prime);
    die "Usage: $0 N\n to write the first N Perrin Primes" unless @ARGV;
    my $N=shift;
    my @last_perrins=(3,0,2);
    my @perrin_primes;
    my %seen;
    while(@perrin_primes<$N){
        push @last_perrins, my $perrin=$last_perrins[-3]+$last_perrins[-2];
        shift @last_perrins; # no need to keep old Perrins
        $seen{$perrin}=1, push @perrin_primes, $perrin if is_prime($perrin) and !$seen{$perrin};
    }
    say join " ", sort {$a<=>$b} @perrin_primes;
```


[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/adam-russell/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/adam-russell/java/ch-1.java), [Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/adam-russell/prolog/ch-1.p)


&nbsp;&nbsp;**blog writeup:**
[Take the Long Way Home — Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/06/12)

&nbsp;&nbsp;**blog writeup:**
[Take the Long Way Home — Prolog — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/06/12)

Adam: rebel, logician, oh-so-calculated risk-taker, breaks from the pack to bring us an alternate prime module, `Math::Primality`, with its own version of a strong Baillie–PSW test. The technique is rigorously defined, so it is no surprise more than one implementation is out there to choose from.

The fundamental method of invoking the recurrence relation is recursive in this technique, which was unusual among the submissions.

```perl
    use Math::Primality qw/is_prime/;

    sub n_perrin_prime_r{
        my($n, $perrins, $perrin_primes) = @_;
        return $perrin_primes if keys %{$perrin_primes} == $n;
        my $perrin = $perrins->[@{$perrins} - 3] + $perrins->[@{$perrins} - 2];
        push @{$perrins}, $perrin;
        $perrin_primes->{$perrin} = -1 if is_prime($perrin);
        n_perrin_prime_r($n, $perrins, $perrin_primes);
    }

    sub perrin_primes{
        return n_perrin_prime_r(13, [3, 0, 2], {});
    }

    MAIN:{
        print join(", ", sort {$a <=> $b} keys %{perrin_primes()}) . "\n";
    }
```

[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/ryan-thompson/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/ryan-thompson/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC 168 › Perrin Primes - Ryan J Thompson](https://ry.ca/2022/06/perrin-primes/)

&nbsp;&nbsp;**blog writeup:**
[PWC 168 › Home Prime - Ryan J Thompson](https://ry.ca/2022/06/home-prime/)

Ryan's solution stands out as having quite some fewer characters than the ones we've seen so far. Part of this is in how he never keeps a proper array of Perrins, only maintaining the three variables needed to construct the next value, which are then updated as lists in one shared assignment. This is elegance in action without unnecessary clutter.

As there is no `return` present anywhere else in the subroutine, the result of the last evaluation is returned, in this case `@r`, the requested primes.

```perl
    use Math::Prime::Util qw< is_prime >;

    # Calculate the first $n Perrin primes
    sub perrin {
        my ($n2, $n1, $n0) = (3, 0, 2); # Sliding window
        my @r;

        while (@r < $_[0]) {
            push @r, $n0 if $n0 > $r[-1] and is_prime($n0);
            ($n2, $n1, $n0) = ($n1, $n0, $n2 + $n1);
        }

        @r;
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC168 - Perrin Prime - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/06/08/pwc168-perrin-prime/)

&nbsp;&nbsp;**blog writeup:**
[PWC168 - Home Prime - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/06/09/pwc168-home-prime/)

Flavio's write ups are known for his breakdown of ambiguities in the description, and it's good to see I was not alone in my analysis of what was being requested and why. I know the expected result is given, sure, but hey, sometimes this information is itself ambiguous or incomplete. It's just good problem solving procedure to survey all the information you have before commencing.

He makes the distinction that

>the Perrin prime, as defined, is just something that belongs to the sequence, with no reference to ordering.

Well put. We're looking for the first *primes* we find, not sequence values.

As for the duplication, then, he takes an angle that seems as good as any: the irregularities occur only at the beginning and quickly stabilize, therefore we observe and extract the first few primes and re-commence from a stable point a few cycles ahead.

Filtering out duplicates, or making sure the collected values continually increase, both  also rely on observation to verify that the strategy will work. So hence this is in fact good as any. If you're going to look, you might as well act on it. And it is quite clear that after an initial hiccup caused by the unusual initialization parameters, the sequence settles down and stabilizes with increasing values.

```perl
    use ntheory 'is_prime';

    sub perrin_primes ($n) {
       my @pps = (2, 3, 5);
       my @state = (2, 5, 5);
       while (@pps < $n) {
          push @state, my $candidate = $state[0] + $state[1];
          shift @state;
          push @pps, $candidate if is_prime($candidate);
       }
       return @pps;
    }
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/jo-37/perl/ch-1.pl)

And lastly we have Jorg.

Jorg, apparently, got bored.

Jorg's solution then, is *not* boring. What, then, is `List::Gen`? From the documentation:

> this module provides higher order functions, list comprehensions, generators, iterators, and other utility functions for working with lists. walk lists with any step size you want, create lazy ranges and arrays with a map like syntax that generate values on demand. there are several other hopefully useful functions, and all functions from List::Util are available.

I believe I have wanted this for some time. We are given a list comprehension with a defining function to iterate over, and take the results and chain a few filters on it. That's all it takes.

I plan to look into this one.


```perl
    use bigint;
    use List::Gen qw(:iterate :zip :source);
    use List::Util qw(product);
    use Math::Prime::Util qw(is_prime gcd);

    # Building a generator for a sequence having the initial values
    # S(1),...,S(k) and a recurrence relation defined by a linear
    # combination of preceding elements:
    # S(n) = F(1) * S(n - k) + ... + F(k) * S(n - 1) for n > k.
    # and taking unique primes thereof.
    #
    sub lin_recur_primes ($s, $f) {

        # Lazily extend the initial sequence using the recurrence relation.
        ($s + iterate {($s = [$s->@[1 .. $#$s],
                        tuples($f, $s)->map('product @$_')->sum])->[-1]
            })->uniq->filter(sub {is_prime $_});
    }
```


## Blogs and Additional Submissions in Guest Languages for Task 1:


[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/arne-sommer/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/arne-sommer/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Primarily Prime with Raku and Perl - Arne Sommer](https://raku-musings.com/primarily-prime.html)

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/dave-jacoby/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[This Is Gonna Take FOREVER!: Weekly Challenge #168 | Committed to Memory](https://jacoby.github.io/2022/06/08/this-is-gonna-take-forever-weekly-challenge-168.html)


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/james-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[The Weekly Challenge 168](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-168/james-smith)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/laurent-rosenfeld/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 168: Perrin Primes](http://blogs.perl.org/users/laurent_r/2022/06/perl-weekly-challenge-168-perrin-primes.html)


[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/peter-campbell-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[More funny numbers ... and a very big one](https://pjcs-pwc.blogspot.com/2022/06/more-funny-numbers-and-very-big-one.html)


[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/robert-dicicco/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/robert-dicicco/julia/ch-1.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/robert-dicicco/raku/ch-1.raku), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/robert-dicicco/ruby/ch-1.rb)









[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/steve-g-lynn/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/steve-g-lynn/julia/ch-1.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/steve-g-lynn/raku/ch-1.p6)











------------------------------------------





---

# TASK 2 {#PWC168TASK2}

# Home Prime
*Submitted by: Mohammad S Anwar*

You are given an integer greater than 1.

Write a script to find the home prime of the given number.

In number theory, the home prime HP(n) of an integer n greater than 1 is the prime number obtained by repeatedly factoring the increasing concatenation of prime factors including repetitions.

Further information can be found on [Wikipedia](https://en.wikipedia.org/wiki/Home_prime) and [OEIS](https://oeis.org/A037274).

**Example**

As taken from the Wikipedia page,

```
    The mth intermediate stage in the process of determining HP(n) is designated HPn(m).

    HP(10) = 773, as
        10 factors as 2×5 yielding
            HP10(1) = 25,

        25 factors as 5×5 yielding
            HP10(2) = HP25(1) = 55,

        55  = 5×11 implies
            HP10(3) = HP25(2) = HP55(1) = 511, and

        511 = 7×73 gives
            HP10(4) = HP25(3) = HP55(2) = HP511(1) = 773, a prime number.
```

## about the solutions
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/adam-russell/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/arne-sommer/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/athanasius/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/cheok-yin-fung/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/james-smith/perl/ch-2.pl),
[**Julien Fiegehenn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/julien-fiegehenn/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/lubos-kolouch/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/mattneleigh/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/perlboy1967/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/peter-campbell-smith/perl/ch-2.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/robert-dicicco/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/roger-bell-west/perl/ch-2.pl),
[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/ryan-thompson/perl/ch-2.pl),
[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/steve-g-lynn/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/wlmb/perl/ch-2.pl)

So, our mission here is to construct a violent, potentially endless churn, tearing apart defenseless numbers and reassembling the broken parts until we decide our voracious appetites are sated.

Hmmmm...

It's always good to start the morning with a balanced, nutritious breakfast.

The process is, as noted, theoretically unbounded, as the only exit case is that the number produced is prime, and this state remains unpredictable. So far, no numbers have been found through the process that fall into a repeated loop, although the number 49, after 117 iterations, becomes too large to factor and remains unresolved. That said, it is thought that all home prime sequences will ultimately yield a prime number and terminate. None other than the venerable John H. Conway has stated that: "Probabilistic arguments give exactly zero for the chance that the sequence of integers starting at *n* contains no prime".

So there's that.

The process is not in itself complicated, incorporating two parts to each iteration: factoring the number as an ascending list of primes, and then concatenating these digits together.

This last step reminds me of the cut-up technique popularized by William Burroughs and Brian Gysin, where pages of writings would be disassembled with scissors and dumped into a wastepaper basket; they would then be extracted at random and reassembled with tape to form new texts. Parts of the original cohesion would remain, and in other ways new connections would be formed. Although there is a well defined relationship between the individual digits and their values in multi-positional numbers, which can be expressed as a mathematical expansion equation, when they are concatenated this original positioning is steadily, progressively blurred in the iterated results. I wonder at what point we have achieved proper chaos, where the informational content of the positioning is completely lost and we have achieved a jumble of digits in a wastepaper basket.

One important consideration of the sut-up technique here is that the smallest component entities, the prime factors, are themselves of course prime, so by definition the last digits of the new concatenations will automatically satisfy the basic requirements for primality: notably being odd.

It also appears that a concatenation of prime factors is always larger than the original number. This is a little harder to prove, but not much, and means the process cannot repeat. It stands to reason then, that randomly joining prime numbers will eventually lead to a prime number.

We just might need to wait a while.


There were 20 submissions for the second task this past week.

## A SELECTION of SUBMISSIONS
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/james-smith/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/wlmb/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/perlboy1967/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/arne-sommer/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/dave-jacoby/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/roger-bell-west/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/peter-campbell-smith/perl/ch-2.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/robert-dicicco/perl/ch-2.pl), and
[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/steve-g-lynn/perl/ch-2.pl)



There are two steps that need to be accommodated, or perhaps three if the prime factors need sorting. The concatenation, and possible sorting steps are self-explanatory, leaving us with prime factorization, which is decidedly non-trivial for large numbers.

The case of HP(8) = 3,331,113,965,338,635,107 reveals the need to potentially factor large numbers when making the chains, and in addition to somehow provide the means of verifying even larger numbers for primality. This in turn suggests the finely-tuned algorithms made available through modules, such as `Math::Prime::Util`. This was by far the most common approach we saw.

There were some either brave or recalcitrant holdouts, though, that refused to bow down and relinquish their control, choosing instead to construct all the algorithms themselves in-script. As usual I applaud their courage and pass on my heartfelt condolences to their families. They will be missed.

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/james-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[The Weekly Challenge 168](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-168/james-smith)

We will begin with James. He uses `Math::Prime::Util`.

When employing a module the factorization is a simple function call, so the resulting loop can be quite compact.

The main logic can be condensed to a pair of lines, golfed to a bare minimum of characters. Fortunately there isn't too much going on. A temporary variable is continuously reassigned to the joined concatenation of its prime factors until a test for primeness is satisfied, using the two imported functions `factor()` and `is_prime()`.

I think we're going to see a few of these. Hopefully with a few more spaces involved, to keep the peace.


```perl
    use Math::Prime::Util qw(factor is_prime);

    sub home_prime {
      return if (my$t=shift)<2;
      is_prime($t)?(return$t):($t=join'',factor$t)while 1;
    }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/wlmb/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 168 – W. Luis Mochán](https://wlmb.github.io/2022/06/06/PWC168/)

Here's another dense, quick version from Luis. Note the caveat on both of these that the input must be greater than 1. Given a 1 the program will loop infinitely, and, you know, that's bad form.

```perl
    use Math::Prime::Util qw(is_prime factor);
    die "Usage: $0 n1 [n2... ]\n to obtain the home primes of n1..." unless @ARGV;
    for(@ARGV){
        say("The argument ($_) should have been >=2"), next unless $_>=2;
        my $N=$_;
        $N=join "", factor($N) while(!is_prime($N));
        say "HP$_=$N"
    }
```


[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/perlboy1967/perl/ch-2.pl)

Next we have Niels, who brings us two imports, `Math::Prime::XS` and `Math::Factor::XS`. These provide the functions `is_prime` and `prime_factors`.

The main loop processes the numbers from 2 to 1000, calling a `homeprime` routine to follow the chain for each value. This is turn uses a `try/catch` construct, from `Try::Tiny` to catch an exception, which is presumably when he runs out of bytes in an integer.

It's a neat construct, and I've left it in even though it appears to not actually do what it's supposed to. This is unfortunate. My first suspicions arose when it produced an answer for the unsolved problem of 49. I believe oversized values are corrupting the process for the largest numbers. 8 is ok, as is 20, but 48, which should be 6,161,791,591,356,884,791,277 is mangled, and 49, of course, cannot be currently assigned a value.

Nice try, though. [ed note: *Sorry about the pun.*]

```perl
    use Math::Prime::XS qw(is_prime);
    use Math::Factor::XS qw(prime_factors);
    use Try::Tiny;

    # prototype(s)
    sub homePrime ($);

    for my $n (2 .. 1000) {
      my  $h = homePrime($n);
      printf "%d\t=> %s\n", $n, (!defined $h ? 'Too big to handle' : $h);
    }

    sub homePrime ($) {
      my ($n) = @_;

      try { $n  = join '', prime_factors($n) while (!is_prime($n)) }
      catch { return };

      return $n;
    }
```

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/arne-sommer/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/arne-sommer/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Primarily Prime with Raku and Perl - Arne Sommer](https://raku-musings.com/primarily-prime.html)

Well this is an interesting ride so far, isn't it? Not all the submissions allowed modules to do *all* the heavy lifting, with some taking a more nuanced approach.

For instance, Arne accepts the help of `is_prime`, from `Math::Prime::Util` but choses to make his own factoring. With the `is_prime` function he can (relatively) quickly produce a list of all primes less than half the targe value, which then can be tested by dividing the candidate, noting the prime and reducing the value on every success.

The algorithm as written does not like the number 8. This presumably occurs during step 12 of the process, which requires the factoring of the value 97,130,517,917,327 into 53 (quick and easy) and 1,832,651,281,459 (which turns out to be prime). None of these numbers are above 2<sup>64</sup>, so they won't cause an overflow error, but filtering a list of primes below 47 trillion or so is going to be a slog. Presumably, though, it will finish. Someday.



```perl
    use Math::Prime::Util 'is_prime';

    $number = join("", factors($number)) until is_prime($number);
    say $number;

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

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/dave-jacoby/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[This Is Gonna Take FOREVER!: Weekly Challenge #168 | Committed to Memory](https://jacoby.github.io/2022/06/08/this-is-gonna-take-forever-weekly-challenge-168.html)

Dave brings us another `try/catch` control structure within his main loop, again trying to field an error from his home prime routine, `get_home_prime`. This approach still doesn't like the number 8, though, as the bottleneck occurs in factoring well before an actual error is tripped. Logically the program is sound, but factoring by trial division over all numbers up to half the value is going to be crippling for certain values: 8, 20, 48, 49 and so on.

So the `catch` apparently never engages.

```perl
    use Carp;
    use Try::Tiny;
    use Math::Prime::XS qw{ is_prime };

    my @n = @ARGV;

    for my $i (@n) {
        try {
            my $p = get_home_prime($i);
            say join "\t", '-', $i, $p;
        }
        catch {
            say $_;
        };
    }

    sub get_home_prime($n) {
        my $p = $n;
        while ( !is_prime($p) ) {
            my @factors = get_factors($p);
            $p = join '', @factors;
            print qq{$p };
            # croak 'Too Big, Too Slow' if length $p > 10;
        }
        say '';
        return $p;
    }
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/roger-bell-west/javascript/ch-2.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/roger-bell-west/kotlin/ch-2.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/roger-bell-west/lua/ch-2.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/roger-bell-west/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/roger-bell-west/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 168: At Home with the Perrins](https://blog.firedrake.org/archive/2022/06/The_Weekly_Challenge_168__At_Home_with_the_Perrins.html)

It seems that if we're going to exclude external C-libraries from doing our factoring, this will limit the numbers we can process and so be it — if that's the case we might as well write everything from scratch. Let's mine some silica whilst we're at it, and start making wafers.

I jest, I jest. I will not disparage Roger's noble calling.

Reusing some factorization and prime-generation code, Roger generates hashes of factors and sorts them into lists, stopping when the list only contains a single prime, the number itself. This obviates the need for an explicit prime check.

The `primefactor()` function returns a hash of primes with their occurrences as values, so as we iterate through our sorted list of factors we need to consult this hash to concatenate the prime the correct number of times.

```perl
    sub homeprime($n0) {
      my $n=$n0;
      while (1) {
        my $t = primefactor($n);
        my @tk = sort {$a <=> $b} keys %{$t};
        if (scalar @tk == 1 && $t->{$tk[0]} == 1) {
          last;
        }
        my $ns = '';
        foreach my $d (@tk) {
          foreach (1..$t->{$d}) {
            $ns .= $d;
          }
        }
        $n = 0 + $ns;
      }
      return $n;
    }
```

[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/peter-campbell-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[More funny numbers ... and a very big one](https://pjcs-pwc.blogspot.com/2022/06/more-funny-numbers-and-very-big-one.html)

One of the beauties of working with `Math::Prime:Util` is that it is specifically made for number theory. And in number theory, it is not uncommon at all to find yourself exploring really, really big numbers. As such it quietly, magically uses arbitrary-sized number libraries automatically when required, switching this more expensive functionality on and off to optimize for speed.

The module requires nothing from the user to perform these feats.

So by performing the primality testing and factorization within the module, only the concatenation is done within the script, and that value is, within the script, just a string of characters that happen to be digits. When handed to the `factor()` function it *remains* a string, where it is then parsed and processed as a possibly oversized number.

At least I'm reasonably sure that's what happens. The point is it's magical and doesn't complain. Someone, obviously, has given this quite a lot of thought. It's effortless. They rock.

Peter's short program gives rapid, accurate results for the integers from 2 to 48, but balks at 49. After all, I said it was magical, not that it could work miracles.

```perl
    use Math::Prime::Util qw[factor is_prime];

    sub home {

        my (@prime_factors, $concat);

        # get prime factors
        @prime_factors = factor(shift);

        # concatenate them
        $concat .= $_ for @prime_factors;

        # either we have an answer or need to go round again
        return $concat if is_prime($concat);
        home($concat);
    }
```

[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/robert-dicicco/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/robert-dicicco/julia/ch-2.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/robert-dicicco/raku/ch-2.raku)

It took me a moment to understand Robert's output, as instead of listing a number of sequential home primes as many chose to, he prints the intermediate numbers that are produced until a prime is found. Preloaded with a default value of 8, then, this produces a wild ride:

```
    8
    222
    2337
    31941
    33371313
    311123771
    7149317941
    22931219729
    112084656339
    3347911118189
    11613496501723
    97130517917327
    531832651281459
    3331113965338635107
```

A little cross-checking shows we arrive at the correct value. I find this view very interesting, as this is one of those explorations where the result isn't really what we're necessarily looking at, rather it's the process we take getting there.

I made a quick little script like this myself earlier, when writing this review, to see what exactly was going on inside the long chain from 8. After producing a result like Robert's, I further modified it to include a space between the individual primes before concatenation. This yielded the following variation that shows how we got these particular values.

```
    2 2 2
    2 3 37
    3 19 41
    3 3 3 7 13 13
    3 11123771
    7 149 317 941
    229 31219729
    11 2084656339
    3 347 911 118189
    11 613 496501723
    97 130517 917327
    53 1832651281459
    3 3 3 11 139 653 3863 5107
    3331113965338635107
```

This in turn revealed the need to factor 1832651281459 that we spoke of earlier.

Anyway, I just thought some of you might have been interested in that tidbit. Robert has a `homeprime()` function that factors a number and performs the concatenation for us, returning the new number as a string.

A little more bookkeeping in required to preserve the intermediate steps, but we can see the check for primality that triggers the end of the search.

```perl
    sub homeprime {
      my $hp = shift;
      my @factors = factor($hp);
      my $hp_new = join('',@factors);
      return($hp_new);
    }

    my $flag = 1;
    push(@results, $hp);

    while ( $flag > 0) {
      my $retval = homeprime($hp);
      if ( is_prime($retval) ){

        push(@results, $retval);
        $flag = 0;

      } else {

        push(@results, $retval);
        $hp = $retval;

      }
    }
```

[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/steve-g-lynn/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/steve-g-lynn/julia/ch-2.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/steve-g-lynn/raku/ch-2.p6)

Finally, new member Stephen brings recursion into consideration to perform his looping, which, with a little help from `Math::Prime::Util::GMP` gives us very compact, tight solution.

It really isn't necessary to specify the `GMP` library directly for `Math::Prime::Util`, as we have noted previously an inherent sneakiness to the module: it will already automatically use the `GMP` library when it is available. All you need to do is make sure `Math::Prime::Util::GMP` has been installed, meaning complied of course, so we can switch on over. Calling it like this will, however, ensure the user has it installed.

As we have seen, some of the factoring required really isn't practical in Perl.

Of note as well, though, Stephen is absolutely correct in his comment!

```perl
    use Math::Prime::Util::GMP qw(is_prime factor); # very fast!

    sub home_prime {
        my ($n)=@_;
        is_prime($n) && return $n;
        return	&home_prime(join('',sort{$a<=>$b}(factor($n))));
    }
```

Bring it on, Stephen, bring it on.

## Blogs and Additional Submissions in Guest Languages for Task 2:


[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/adam-russell/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/adam-russell/java/ch-2.java), [Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/adam-russell/prolog/ch-2.p)


&nbsp;&nbsp;**blog writeup:**
[Take the Long Way Home — Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/06/12)

&nbsp;&nbsp;**blog writeup:**
[Take the Long Way Home — Prolog — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/06/12)


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/athanasius/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/athanasius/raku/ch-2.raku)


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC168 - Perrin Prime - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/06/08/pwc168-perrin-prime/)

&nbsp;&nbsp;**blog writeup:**
[PWC168 - Home Prime - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/06/09/pwc168-home-prime/)


[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/jaldhar-h-vyas/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/jaldhar-h-vyas/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 168](https://www.braincells.com/perl/2022/06/perl_weekly_challenge_week_168.html)


[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/lubos-kolouch/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/lubos-kolouch/python/ch-2.py)


[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/ryan-thompson/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-168/ryan-thompson/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC 168 › Perrin Primes - Ryan J Thompson](https://ry.ca/2022/06/perrin-primes/)

&nbsp;&nbsp;**blog writeup:**
[PWC 168 › Home Prime - Ryan J Thompson](https://ry.ca/2022/06/home-prime/)


------------------------------------------





---

<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>

<center>
<h1 id="PWC168BLOGS">_________ THE BLOG PAGES _________</h1>
</center>


---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, by some miracle I somehow continue to maintain my bearings.**

**Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your Unquenchable *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC168BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *FOLLOW* these *BLOG* *LINKS*:

**( ...*don't think, trust your training, you're in the zone, just do it ...* )**


**Adam Russell**

 * [Take the Long Way Home — Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/06/12) ( *Perl* )
 * [Take the Long Way Home — Prolog — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/06/12) ( *Prolog* )

**Arne Sommer**

 * [Primarily Prime with Raku and Perl - Arne Sommer](https://raku-musings.com/primarily-prime.html) ( *Perl & Raku* )

**Dave Jacoby**

 * [This Is Gonna Take FOREVER!: Weekly Challenge #168 | Committed to Memory](https://jacoby.github.io/2022/06/08/this-is-gonna-take-forever-weekly-challenge-168.html) ( *Perl* )

**Flavio Poletti**

 * [PWC168 - Perrin Prime - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/06/08/pwc168-perrin-prime/) ( *Perl & Raku* )
 * [PWC168 - Home Prime - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/06/09/pwc168-home-prime/) ( *Perl & Raku* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 168](https://www.braincells.com/perl/2022/06/perl_weekly_challenge_week_168.html) ( *Perl & Raku* )

**James Smith**

 * [The Weekly Challenge 168](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-168/james-smith) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 168: Perrin Primes](http://blogs.perl.org/users/laurent_r/2022/06/perl-weekly-challenge-168-perrin-primes.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 168: prime numbers in many ways! – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/06/06/PerlWeeklyChallenge168.html#task1) ( *Raku* )

 * [Perl Weekly Challenge 168: prime numbers in many ways! – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/06/06/PerlWeeklyChallenge168.html#task1plperl) ( *PL/Perl* )

 * [Perl Weekly Challenge 168: prime numbers in many ways! – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/06/06/PerlWeeklyChallenge168.html#task1plpgsql) ( *PL/PostgreSQL* )


**Peter Campbell Smith**

 * [More funny numbers ... and a very big one](https://pjcs-pwc.blogspot.com/2022/06/more-funny-numbers-and-very-big-one.html) ( *Perl* )

**Roger Bell_West**

 * [RogerBW's Blog: The Weekly Challenge 168: At Home with the Perrins](https://blog.firedrake.org/archive/2022/06/The_Weekly_Challenge_168__At_Home_with_the_Perrins.html) ( *Perl & Raku* )

**Ryan Thompson**

 * [PWC 168 › Perrin Primes - Ryan J Thompson](https://ry.ca/2022/06/perrin-primes/) ( *Perl & Raku* )
 * [PWC 168 › Home Prime - Ryan J Thompson](https://ry.ca/2022/06/home-prime/) ( *Perl & Raku* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 168 – W. Luis Mochán](https://wlmb.github.io/2022/06/06/PWC168/) ( *Perl* )
