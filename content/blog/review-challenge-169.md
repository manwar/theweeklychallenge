---
author:       Colin Crain
date:         2022-07-24T00:00:00
description:  "Colin Crain › Perl Weekly Review #169"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #169"
image:        images/blog/p5-review-challenge-169.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-168/).* )

Welcome to the Perl review pages for **Week 169** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

Before we begin, you may wish to revisit either the pages for the [**original tasks**](/blog/perl-weekly-challenge-169/) or the summary [**recap**](/blog/recap-challenge-169/) of the challenge. But don't worry about it, the challenge text will be repeated and presented as we progress from task to task.

Oh, and one ***more*** thing before we finally get started:


### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please feel free to email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

<div align= center><strong>...Enough? Fine. So without even further ado...</strong></div>

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC169TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC169TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC169BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC169TASK1}

# Brilliant Numbers
*Submitted by: Mohammad S Anwar*

Write a script to generate first 20 Brilliant Numbers.

Brilliant numbers are numbers with two prime factors of the same length.

The number should have exactly two prime factors, i.e. it’s the product of two primes of the same length.

For example,

```
    24287 = 149 x 163
    24289 = 107 x 227
```

Therefore 24287 and 24289 are 2-brilliant numbers.

These two brilliant numbers happen to be consecutive as there are no even brilliant numbers greater than 14.

```
    Output
    4,   6,   9,   10,  14,  15,  21,  25,  35,  49,
    121, 143, 169, 187, 209, 221, 247, 253, 289, 299
```

## about the solutions
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/adam-russell/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/athanasius/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/colin-crain/perl/ch-1.pl),
[**Dario Mazzeo**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/dario-mazzeo/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/jo-37/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/lubos-kolouch/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/mattneleigh/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/perlboy1967/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/peter-campbell-smith/perl/ch-1.pl),
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/pokgopun/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/roger-bell-west/perl/ch-1.pl),
[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/ryan-thompson/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/sgreen/perl/ch-1.pl),
[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/steve-g-lynn/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/ulrich-rieke/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/wlmb/perl/ch-1.pl), and
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/walt-mankowski/perl/ch-1.pl)

You know what's brilliant about the brilliant numbers? They're hard to factor. That's their job, and they're brillant at it.

If you look up the definition, you will find one similar to that above, in the task description: they are composite numbers with exactly two prime factors, that share an equal number of digits. This last qualifier puzzled me, as we aren't being asked to do anything special with these digits, not do we care especially what the count is, just that they are the same.

There are even sometimes variations on the brilliant numbers. You could have numbers with three equally-sized factors; these would be qualified as 3-brilliant, for example. But mainly they will have two, and if nothing more is clarified they will be assmed to be as such.

This got me to thinking about *why* these numbers exist as their own idea.

What we have here is two factors of about equal size. Multiply them together and they will have approximately twice the number of digits, which will be the length of the product. This much is basic exponential math: we sum the exponents, and if we're talking 10 to the something, that something (plus the length of the multiplier, usually 1) will be the length of the number written out.

So the factors to be multiplied will be numbers close to the square root, in a relative sense. In fact, they will surround it: one will be above, and the other below. The square root, as well, is the furthest point one needs to search when looking for potential factors for a number. Every factor found, of course, will have a complement, and one of each pair will be located on one side of, or at, the square root and the other on the far side. So we need only check the smaller side, the range upwards from zero.

Where is all this theoretical talk going, you may ask? When factoring a number it's common to start small, within the lower range of possibilities. We try 2, then 3. These values will have the highest probability of success. On the other hand, if working upwards using trial division the worst case is having to search all the way to the square root, as this maximizes the failures until a hit is found, if any is in fact to be found. There may  not be any factors if the number is prime.

So what the brilliant numbers are is the set of numbers without easy, obvious factors, and without a lot of factors either. This makes the factors that exist the hardest, agian relatively speaking, to find. And that is what makes them brilliant. They are the best numbers to choose when testing a factoring algorithm.

It's a bit ironic actually that we're tasked today with finding the smallest brilliant numbers, because it's the really big ones that are particularly useful for their intended task. In fact, the larger the better.

There were 26 submissions for the first task this past week.

## A DIAMOND in the ROUGH, a CUT ABOVE
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/jaldhar-h-vyas/perl/ch-1.pl),
[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/steve-g-lynn/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/colin-crain/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/laurent-rosenfeld/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/jo-37/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/mattneleigh/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/athanasius/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/roger-bell-west/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/ulrich-rieke/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/peter-campbell-smith/perl/ch-1.pl), and
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/james-smith/perl/ch-1.pl)


A quick check over at [OEIS](https://oeis.org/A078972) reveals the first 20 brilliant numbers to all be under 300. So consequently tests on 300 candidates, creating a prime factorization, then counting the factors and checking their lengths isn't a particularly impractical way to proceed. We saw several solutions approaching the task in this manner.

Alternately, since we know quite a lot about the makeup of the numbers we want, we could instead make lists of equally-sized prime numbers and just start multiplying. Every combination would be guaranteed to be a brilliant number, and also guaranteed to be unique, courtesy of the [fundamental theorem of arithmetic](https://en.wikipedia.org/wiki/Fundamental_theorem_of_arithmetic). Then the problem becomes one of finding and selecting the correct first 20 values.

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/jaldhar-h-vyas/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/jaldhar-h-vyas/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 169](https://www.braincells.com/perl/2022/06/perl_weekly_challenge_week_169.html)

Jadhar will start us off with an example of the iterate and verify approach. Here we look at a number, factor it, and see if it satisfies the necessary conditions. Then we move to the next.

The core functionality here is the `factorize()` routine, which returns a unique list of prime factors for a number.

Which from the name, you might expect it to.

He starts dividing out 2s as many times as he can whist remaining whole, adding a 2 to his factor list with each success and reducing the priciple accordingly. The then moves on to 3s, and from there every odd number up to the square root of the original value.

Because we are only looking for the first 20 brilliant numbers this method returns a result quite quickly.

```perl
    sub factorize {
        my ($n) = @_;
        my @primeFactors;

        while ($n % 2 == 0) {
            push @primeFactors, 2;
            $n /=  2;
        }

        for (my $i = 3; $i <= sqrt $n; $i += 2)  {
            while ($n % $i == 0) {
                push @primeFactors, $i;
                $n /= $i;
            }
        }

        if ($n > 2) {
            push @primeFactors, $n;
        }

        return @primeFactors;
    }

    until (scalar @brilliants == 20) {
        my @factors = factorize($n);
        if (scalar @factors == 2 && length $factors[0] == length $factors[1]) {
            push @brilliants, $n;
        }
        $n++;
    }
```

[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/steve-g-lynn/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/steve-g-lynn/julia/ch-1.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/steve-g-lynn/raku/ch-1.p6)

On the other hand, no validation is required if we know we fulfill the criteria with every number we make. Taking a constructive approach, Stephen demonstrates this alternate method.

First of we'll need some prime numbers, which we can either generate ourselves, or as done here, request them from a module desiged to provide these quite efficiently. This is our old friend `Math::Prime::Util`, whose module name, in this case, pretty much says everything you need to know. The `primes()` prime-generating function this module makes available, in fact, can be provided the start and end values of a range and will produce a list of primes within those boundaries, inclusive.

Stephen utilizes this capability to request two lists of primes, having first 1 and then 2 digits. Each list is used as the basis for a complete cross-product of combinations, pairing each value with every other — including itself — once. As we know the two prime lists are composed of primes with the same number of digits, each product of these pairings will produce another unique brilliant number.

Another way to think of this pairing mathematically is to say: "Combinations of two items from the list with repetition". We don't care about the ordering, because we are going to multiply the results. We want to see (2,2) and (2,3) but not (3,2) after that.

A systematic pairing will generate the brilliant numbers out-of-order, however, so it is first necessary to sort the output list. The first 20 values are then printed.

```perl
    use Math::Prime::Util qw(primes);

    my @brilliants = ();

    for $i (1,2) { # get 1 or 2 digit primes with each iteration
        my $ra=primes(10**($i-1), 10**($i));

        for $i (0 .. @$ra-1) {
        	for $j ($i .. @$ra-1) {
        		push (@brilliants,
        		$$ra[$i] * $$ra[$j] );
        	}
        }
    }

    @brilliants = sort{$a <=> $b} @brilliants;

    foreach (0 .. 19) {
        print $brilliants[$_]," ";
    }
```

[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/colin-crain/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Twenty-Two Brilliant Numbers - Programming Excursions in Perl and Raku](https://colincrain.com/2022/06/17/twenty-two-brilliant-numbers)

&nbsp;&nbsp;**blog writeup:**
[A Tendon-ous Task - Programming Excursions in Perl and Raku](https://colincrain.com/2022/06/18/a-tendon-ous-task)

My own submission loked very similar to this. The import `ntheory` of course is an alias for `Math::Prime::Util`, highlighting its number theory roots. The only real difference is I dereference the prime list for each order at the beginning, which I think makes the code a little cleaner. It's not like the list is large or anything, and if it becomes large the cross product step will become a far bigger problem.

Putting an array slice in double quotes pretty prints the first 20 values separated by a space.

```perl
    use ntheory qw( primes );

    my @orders = (1,2);
    my @bns;

    for my $o ( @orders ) {
        my @p = primes( 1 * 10**($o-1), 10**$o - 1 )->@*;

        for my $i ( 0..@p-1 ) {
            for my $j ( $i..@p-1 ) {
                push @bns, $p[$i] * $p[$j];
            }
        }
    }

    @bns = sort {$a<=>$b} @bns;

    say "@bns[0..19]";
```


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/laurent-rosenfeld/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[ Perl Weekly Challenge 169: Brilliant Numbers and Achilles Numbers](http://blogs.perl.org/users/laurent_r/2022/06/perl-weekly-challenge-169-brillant-nummbers-and-achilles-numbers.html)

There's more than one way to obtain a list of primes. You could make one yourself, or ask a module to make one up for you to spec. The primes themselves don't care, they remain inviolate and above the fray. Sometimes the just... arrive, in a paper bag, quietly with no questions asked. As long as they are prime we don't really need to know where they came from, right? They aren't contraband, at least not yet, so it's a sort of a grey-market out there.

Laurent provides such a list. Here it is, and don't ask too many questions, you know?

Laurent asserts that the first 10 primes should do the trick, without much in the way of explanation. These compose two groups, four with one digit and six with two. Each item is then paired with every other member of its group, and the product of the combination is a brilliant number.

Are ten primes enough? How can we know for sure? Well, applying a bit of combinatorics, the first 4 primes will produce "4 choose 2" combinations, or 4 + 3 + 2 + 1 = 10. The six 2-digit primes will produce 6**C**2, or 6 + 5 + 4 + 3 + 2 + 1 = 21 additional numbers. So we have 31 brilliant numbers, out-of-order. Here's the interesting part: if we sort them, presuming there are gaps in our generated list, and take the first 20 values, which is what Laurent has done, then we get 299 for the 20th position.

The next prime we might chose to add is 31, and the smallest 2-digit prime is 11. Next we see 31 × 11 = 341, which is larger than 299, so no number created by adding an additional prime to our list will generate a brilliant number less than 299.

So for only generating 20 numbers, the prime list checks out.


```perl
    my @small_primes = (2, 3, 5, 7, 11, 13, 17, 19, 23, 29);

    sub combine {
        my @primes = @_;
        my %part_result;
        for my $i (0..$#primes) {
            for my $j ($i..$#primes) {
                $part_result{$primes[$i] * $primes[$j]} = 1;
            }
        }
        return sort {$a <=> $b} keys %part_result;
    }
    my @result = combine @small_primes[0..3];
    push @result, combine @small_primes[4..9];
    say "@result[0..19]";
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/jo-37/perl/ch-1.pl)

As seems often the case with Jorg's submissions, we end up with an awful lot to unpack from a few short lines. Jorg has built us a coroutine, you see, that will produce brilliant numbers on demand. In any base. You know, just to be weird or something. Why not? I'm in.

Coroutines are somewhat like subroutines that preserve their own internal state, and can be returned from and reentered, often in multiple places. They're their own little program that you can hand to processor to and ask for information that you need. The command to make such a routine, using `Coro::Generator`, is the eponymous `generator`.

Then Jorg borrows some functions from `Math::Prime::Util`: `factor`,  `nth_semiprime`, and `logint`.

Numbers with only one prime factor, itself, are called prime. Numbers with *two* prime factors are close to being prime but are not, and are called semiprime. The function `nth_semiprime` produces, as might well be expected, the n-th semiprime from a list of all of these numbers.

Semiprimes are close to what want in a brilliant number, but not quite, as the primes also need to be of the same number of digits. This is a little trickier, but we'll make a filter with a comparison to do the job.

Jorg's generator makes a new semiprime and returns it if the mapping of its two factors to their logorithm in a given base is a list with only one element. Got that?

From his import list you can see the traces of his process: that he started in base-10 using `log10` but then generalized it with `logint`. The more you know...



```perl
    use Math::Prime::Util qw(factor nth_semiprime logint);
    use List::MoreUtils 'distinct';
    use Math::Utils 'log10';
    use Coro::Generator;

    # Build a generator for brilliant numbers in base B by filtering
    # the sequence of all semiprimes.
    sub brilliant ($b) {
        my $n;
        generator {
            while () {
                # Emulate "next_semiprime()".
                my $sp = nth_semiprime(++$n);
                # Filter prime factors having the same length in base B.
                yield $sp if 1 == distinct map logint($_, $b), factor $sp;
            }
        };
    }
```

[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/mattneleigh/perl/ch-1.pl)

Matthew has given us another example of factoring and checking, but with a notable advancement in his prime factoring algorithm. Only prime numbers are checked, using an `is_prime` routine that uses the fact that all prime numbers greater than 3 can be expressed as 6*k* ± 1 for some *k*, reducing the amout of trial division required by a factor of 3. Good job, Matthew.

```perl
    while(scalar(@brilliants) < $n){
        my @factors;

        # Get the prime factors of $i
        prime_factorize($i, \@factors);

        # Store $i if it has two prime factors and they
        # are of the same length
        push(@brilliants, $i)
            if(
                (scalar(@factors) == 2)
                &&
                (length($factors[0]) == length($factors[1]))
            );

        # Increment $i
        $i++;
    }
```


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/athanasius/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/athanasius/raku/ch-1.raku)

The monk Athanasius uses a sieve of Eratosthenes to generate primes for his constructive solution, modified in a curious manner so as to be able to be extended to process additional digits as needed. It's pretty cool, I have to say. Their `get_primes()` function is handed a set digit length, and returns a list of all primes within that range.

Once the primes are provided, the cross product is performed in the usual way, sort of, because they avoid using a boring set of common index values and instead opt to iterate across the prime lists directly, with each prime paired to a sub-list of values gathered with `after_incl` from `List::MoreUtils`. Think of it as sort of a complement to `first` or something. Values from a list are passed after and including the first instance of an element where the block returns true. Neat, huh?

```perl
    my $primes = get_primes( $digits );

    for my $p (@$primes)
    {
        for my $q (after_incl { $_ == $p } @$primes)
        {
            push @brilliant, $p * $q;
        }
    }
```

Just for good measure I should include that extensible sieve for interested parties. A sieve can be constructed in a quite compact package, but is generally limited by having to know the outside range of the primes requested before starting. This version is notably more complicated, and has had the required kinks worked out.

```perl
    sub get_primes                               # Extensible sieve of Eratosthenes
    {
        my   ($digits)  = @_;
        my    $max_idx  = 10 ** $digits - 1;
        state @sieve    = ((0, 0), (1) x ($max_idx - 1));
        my    $orig_end = $#sieve;
        state $first    = 1;

        if ($first || $max_idx > $orig_end)
        {
            push @sieve, (1) x ($max_idx - $orig_end) if !$first;    # Extend sieve

            for my $i (0 .. int sqrt $max_idx)
            {
                if ($sieve[ $i ])                                    # Prime
                {
                    my $start = $first ? 2 : int( ($orig_end + 1) / $i );

                    for my $j ($start .. int( $max_idx / $i ))
                    {
                        $sieve[ $i * $j ] = 0;                       # Composite
                    }
                }
            }

            $first = 0;
        }

        # @range contains all integers of the required number of digits:
        # e.g., if $digits = 2 then @range = 10 .. 99

        my @range = 10 ** ($digits - 1) .. $max_idx;

        return [ grep { $sieve[ $_ ] } @range ];                  # Apply the sieve
    }
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/roger-bell-west/javascript/ch-1.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/roger-bell-west/kotlin/ch-1.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/roger-bell-west/lua/ch-1.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 169: The Brilliance of Achilles](https://blog.firedrake.org/archive/2022/06/The_Weekly_Challenge_169__The_Brilliance_of_Achilles.html)

Roger generates his own list of primes, using an appropriately-titled `genprimes()` function that generates all primes less than a given maximum value. By further filtering these values with a `grep` statement he can restrict the list to only the specified number of digits.

Starting with 1 digit, then, a list of primes is returned and all possible combination products are created and stored in a hash.

Now the really interesting part happens: We now have a hash whose keys are constructed brilliant numbers. If the number of keys in this hash is not sufficiant to honor the requested number of values, the `while` loop kicks back around again and generates a new set of numbers using primes one digit longer. So after 1 digit we move on to all primes of 2 digits. These are added to the existing hash until we have enough values, in complete sets for each additional digit.

This works, by the way, because the largest product that can be made using numbers of a given length is always smaller than the smallest product of numbers one digit longer. So for example if we sort the brilliant numbers for say prime lengths 1 and 2, then the highest number we find, 9409, will be smaller than the smallest number we can make with two 3-digit primes, 101 x 101 = 10201. A little exploration will show that this is true for all digit-lengths.

```perl
    sub brilliant($ct) {
      my $base = 1;
      my %out;
      while (1) {
        my @pl = grep {$_ >= $base} @{genprimes($base * 10)};
        foreach my $ai (0..$#pl) {
          foreach my $bi ($ai..$#pl) {
            $out{ $pl[$ai] * $pl[$bi] } = 1;
          }
        }
        if (scalar keys %out >= $ct) {
          last;
        }
        $base *= 10;
      }
      my @o = sort {$a <=> $b} keys %out;
      splice @o,$ct;
      return \@o;
    }
```

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/ulrich-rieke/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/ulrich-rieke/cpp/ch-1.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/ulrich-rieke/haskell/ch-1.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/ulrich-rieke/raku/ch-1.raku)

Now lets look at three related variations on an incremental search and validation scheme.

Ulrich factors his candidates, using trial division, starting at 2 and working upwards from there. Then the factor list is examined: if the list has only two values, and the lengths of those two values are equal, then the number is a brilliant number.

It doesn't need to be complex.

```perl
    sub isBrilliant {
      my $number = shift ;
      my @primeFactors = primeDecompose( $number ) ;
      return ( (scalar( @primeFactors ) == 2 ) && ( length( $primeFactors[0] )
            == length( $primeFactors[1] ))) ;
    }
```

[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/peter-campbell-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Brilliant and Achilles](https://pjcs-pwc.blogspot.com/2022/06/brilliant-and-achilles.html)

Not that trial division is slow for a candidate field of 300 numbers of anything, but if we borrow a finely-tuned and precompiled factoring function from `Math::Prime::Util` things suddenly go remarkably quickly.

Even, apparently, if you use a Raspberry Pi for your processor.

Note the conditional is basically the same in all three of these examples.

```perl
    use Math::Prime::Util qw[factor];

    my ($test, @pf, $result, $count);

    # loop till done
    for ($test = 1, $count = 0; $count < 20; $test ++) {
        @pf = factor($test);

        # test for brilliance
        next unless (scalar @pf == 2 and length($pf[0]) == length($pf[1]));

        # accumulate answers
        $result .= qq[$test, ];
        $count ++;
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/james-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #169](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-169/james-smith)

And speaking of finely-tuned, we will follow-up with James' entry to the field, who again still just tests incrementing numbers using a variation on the conditional we saw earlier. His version uses a variety of tricks to trim even a few more cycles off the loop processing to get where we need to go absolutely as quickly as possible.

```perl
    for( my( $MAX, $c, $n, @f ) = ( $ARGV[0] // 100, 0 ); $c < $MAX; ) {
      printf "%8d: %10d = %5d x %d\n", ++$c, $n, @f
        if 2 == ( @f = factor ++$n ) && length $f[0] == length $f[1]
    }
```

On the other hand, before I close I'll note that although a brute force approach is very quick to 20 numbers, and certainly a valid and practical solution, we really need to step back and rememeber again what the brilliant numbers *are*. Which is to say, the hardest numbers among their class to factor. It's their *raison d'être*. They pride themselves on their unyielding obstinance. So I have to think that outside of the specifics of solving this particular problem, and truly not wishing in any way to disparage anyone's efforts in this task, perhaps, just perhaps, factoring scores of numbers to find the hardest numbers to factor might not, in the end, be the *best* approach.

Just something to think about.


## Blogs and Additional Submissions in Guest Languages for Task 1:


[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/adam-russell/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/adam-russell/java/ch-1.java), [Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/adam-russell/prolog/ch-1.p)


&nbsp;&nbsp;**blog writeup:**
 [Brilliantly Discover Achilles' Imperfection — Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/06/19)

&nbsp;&nbsp;**blog writeup:**
[Brilliantly Discover Achilles' Imperfection — Prolog — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/06/19)


[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/arne-sommer/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/arne-sommer/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[An Abundance of Numbers with Raku and Perl - Arne Sommer](https://raku-musings.com/ambundance-numbers.html)


[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/cheok-yin-fung/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[CY's Take on The Weekly Challenge #169 ](https://e7-87-83.github.io/coding/challenge_169.html)


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC169 - Brilliant Numbers - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/06/15/pwc169-brilliant-numbers/)

&nbsp;&nbsp;**blog writeup:**
[PWC169 - Achilles Numbers - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/06/16/pwc169-achilles-numbers/)


[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/pokgopun/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/pokgopun/go/ch-1.go)


[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/ryan-thompson/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[PWC 169 › Brilliant and Achilles Numbers - Ryan J Thompson](https://ry.ca/2022/06/brilliant-and-achilles-numbers/)


[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/sgreen/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/sgreen/python/ch-1.py)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 169](https://dev.to/simongreennet/its-all-about-the-numbers-4fh5)


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/wlmb/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 169 – W. Luis Mochán](https://wlmb.github.io/2022/06/13/PWC169/)


------------------------------------------





---

# TASK 2 {#PWC169TASK2}

# Achilles Numbers
*Submitted by: Mohammad S Anwar*

Write a script to generate first 20 Achilles Numbers. Please checkout wikipedia for more information.

An Achilles number is a number that is powerful but imperfect (not a perfect power). Named after Achilles, a hero of the Trojan war, who was also powerful but imperfect.

A positive integer n is a powerful number if, for every prime factor p of n, p^2 is also a divisor.

A number is a perfect power if it has any integer roots (square root, cube root, etc.).

For example 36 factors to (2, 2, 3, 3) - every prime factor (2, 3) also has its square as a divisor (4, 9). But 36 has an integer square root, 6, so the number is a perfect power.

But 72 factors to (2, 2, 2, 3, 3); it similarly has 4 and 9 as divisors, but it has no integer roots. This is an Achilles number.


**Output**
```
        72,  108,  200,  288,  392,  432,  500,  648,  675,  800,
        864, 968,  972, 1125, 1152, 1323, 1352, 1372, 1568, 1800
```



## about the solutions
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/adam-russell/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/arne-sommer/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/athanasius/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/jo-37/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/laurent-rosenfeld/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/lubos-kolouch/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/mattneleigh/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/peter-campbell-smith/perl/ch-2.pl),
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/pokgopun/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/roger-bell-west/perl/ch-2.pl),
[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/ryan-thompson/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/sgreen/perl/ch-2.pl),
[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/steve-g-lynn/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/ulrich-rieke/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/wlmb/perl/ch-2.pl), and
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/walt-mankowski/perl/ch-2.pl)

Achilles, or Ἀχιλλεύς to Homer, was a demigod, a mortal borne of a god and a nymph who had inherited Olympian powers from his father. Although he was mortal, he was seen to be invincible on the battlefield and was Athens' greatest warrior in its army against Troy.

His martial prowess got to his head, and he became overly prideful, which in turn got the attention of the gods, and in ancient Greece this was generally not something very safe for a mere human, demigod or not. Mortal interactions with the gods often drifted towards the mortal, sticky side of things quite quickly, and were sensibly something to be avoided. Achilles was overly prideful, and on perceiving a slight to his honor he reacted petulantly, initiating a series of events that led first to the death of his friend, and then, in a rage, a bloody revenge that cut a swath through the Trojan army and threatened to turn the tide and win the war single-handedly.

This last effort was to go against the fates themselves, as this outcome was not meant to be. Achilles, already on watch for his excessive pride — his hubris — was unable to be slain by any mortal man. But the cosmic order was upset, and ultimately Achilles was struck through the heart by an arrow — shot by a man but divinely guided by the god Apollo himself. Balance in the world had been restored.

Achilles, then, was an invincible warrior, but had a ἁμαρτία, or hamartíā: a tragic flaw.  He was tremendously powerful and humanly imperfect, not a god but a mortal. To say he suffered a fatal flaw is not hyperbole, as it did get him killed in the end.

There were 21-22 working submissions for the second task this past week, depending on how you count. Discerning whether a number was a perfect power, any perfect power, proved to be trickier than expected.

## STRONG but not TOO STRONG
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/e-choroba/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/arne-sommer/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/sgreen/perl/ch-2.pl),
[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/ryan-thompson/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/dave-jacoby/perl/ch-2.pl),
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/walt-mankowski/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/adam-russell/perl/ch-2.pl),
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/pokgopun/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/polettix/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/wlmb/perl/ch-2.pl)

The Achilles numbers are so-called powerful numbers, which are defined as having a set of prime factors all with an exponent greater than 1. Which is to say they are "powerful" as in "full of powers".

The Achilles numbers are also *not* perfect powers, which is to say numbers that can be expressed simply as a base raised to a power greater than 1. This includes squares, cubes and all the higher dimensions. The base need not be prime, but must be capable of being expressed as a single value.

Working backwards, to show that a number could *not* be expressed as a perfect power, was a puzzle. We saw this approached from several directions, some succesful, others not. One solution that was submitted appears to give the correct sequence for the first 20 values, but apparently for the wrong reasons: eventually a spurious result was added. I refer to challenges like this as sneaky, where you can easily get the logic wrong and not know it from the required values.

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/e-choroba/perl/ch-2.pl)

We're going to start with Choroba, who breaks the criteria along the lines of the definition:
1. all of the prime factors have a power greater than 1 (a powerful number)
2. we cannot divide out a single value from the factor powers to rewrite the number as a value raised to that power (not a perfect power)

In the mathematics regarding exponentiation, multiplication of equally-based terms is performed by summing exponents, and raising those terms to to a power by multiplying the exponents. So if given a collection of prime factors raised to various powers, in order for these to be expressed as a base raised to a *single* power we must be able to find some factor greater than 1 common to all the exponents considered together. Another way to put this is to say we need to be able to factor out some common divisor from all the exponents that is greater than 1.

Applying a greatest common divisor function to the exponents for the prime factorization proved to be a successful strategy. As we do *not* want numbers that can be expressed as perfect powers, we would then need numbers whose greatest common divisor is only 1.

So to find an Achilles number using this method we will need to factor a lot of numbers and count the factor exponents, and then further analyse them to find their GCD. If the list of exponents are all greater than 1, but the GCD is only 1, then the number belongs among the Achilles numbers.

Choroba uses the functions `factor()` and `gcd()` from the excellent `Math::Prime::Util` module.


```perl
    use Math::Prime::Util qw{ factor gcd };

    sub achilles_numbers {
        my ($tally) = @_;
        my $n = 1;
        my @achilles_numbers;
        while (@achilles_numbers < $tally) {
            my %factors;
            ++$factors{$_} for factor(++$n);
            next if grep $_ == 1, values %factors;  # Powerful.

            push @achilles_numbers, $n
                if 1 == gcd(values %factors);  # Not perfect.
        }
        return \@achilles_numbers
    }
```

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/arne-sommer/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/arne-sommer/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[An Abundance of Numbers with Raku and Perl - Arne Sommer](https://raku-musings.com/ambundance-numbers.html)

Another, equivalent way to look at the definition is to look at the prime factors to determine whether a number is powerful and the set of all divisors to see whether it is a perfect power. For each divisor found we then multiply it by itself until we either meet or exceed the target value. If some multiple comes out evenly, then it is a perfect power and we have the basis for our filter.

Arne writes his own `factors()` and `divisors()` functions, based on trial division. He does, however, import `is_prime()` from `Math::Prime::Util` to make the prime search a little easier.

```perl
    sub is_powerful ($number)
    {
      return 1 if $number == 1;
      my @factors = factors($number);
      my %values;

      for my $val (@factors)
      {
        $values{$val}++;
      }

      for my $count (values %values)
      {
        return 0 if $count == 1;
      }

      return 1;
    }

    sub is_perfect ($number)
    {
      return 1 if $number <= 1;
      my @divisors = divisors($number);
      return 0 unless @divisors;

      for my $divisor (@divisors)
      {
        my $current = $divisor;
        $current *= $divisor while $current < $number;
        return 1 if $current == $number;
      }

      return 0;
    }
```

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/sgreen/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/sgreen/python/ch-2.py)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 169](https://dev.to/simongreennet/its-all-about-the-numbers-4fh5)

Simon breaks down his filtering along slightly different lines, illustrating how we ultimately saw quite a range in techniques when implementing solutions.

For example, if there is only one prime factor it is either prime or a perfect power, and is out for one of two reasons — we don't really care why.

```perl
    use List::Util qw(all any min);

    sub is_achilles_number ($num) {
        # Get the prime factors of the number
        my %factors = ();

        my $i = 2;
        while ( $num > 1 ) {
            if ( $num % $i == 0 ) {
                $num /= $i;
                if ( exists( $factors{$i} ) ) {
                    $factors{$i}++;
                }
                else {
                    $factors{$i} = 1;
                }
            }
            else {
                $i++;
            }
        }

        # If there is only one prime factor, it is not an achilles number
        if ( scalar( keys %factors ) == 1 ) {
            return;
        }

        # Get a list of unique powers
        my @powers = values(%factors);

        # It's also not an achilles number if any of the powers were 1, or the
        #  powers are all the same (a perfect sqaure)
        if ( $#powers == 0 or any { $_ == 1 } @powers ) {
            return;
        }

        # Finally, the greatest common divisor of these numbers has to be one
        foreach my $i ( 2 .. min(@powers) ) {
            if ( all { $_ % $i == 0 } @powers ) {
                return;
            }
        }

        return 1;
    }
```

[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/ryan-thompson/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[PWC 169 › Brilliant and Achilles Numbers - Ryan J Thompson](https://ry.ca/2022/06/brilliant-and-achilles-numbers/)

Ryan demonstrates how through chaining functions we can acquire our sequence in (arguably) "one line".

I'm not going to concern myself too much on the practical distinctions of the line of code as a structural unit, other than to say in functional programming that line becomes, um, blurred. Sometimes outright hazy and indistinct.


```perl
    use Math::Prime::Util qw< gcd factor_exp >;
    use        List::Util qw< all any >;

    say for achilles($ARGV[0] // 5000);

    sub achilles {
        map  { $_->[0] }
        grep { all { $_ > 1 } @{$_->[1]} and gcd(@{$_->[1]}) == 1 }
        map  { [ $_ => [ map { $_->[1] } factor_exp($_) ] ] } 2..$_[0];
    }
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/dave-jacoby/perl/ch-2.pl)

Dave shows us another method of determining whether a number is a perfect power: calculating a bunch of roots and seeing whether they come up whole.

He does all the work himself in his solution, creating a number of functions to get prime factors and determine whether the number is perfect or powerful.

For smaller numbers, as we are looking for here, this works well, testing for the square up to the *n*-th root.

```perl
    sub is_perfect( $n ) {
        for my $i ( 2 .. $n ) {
            my $j = $n**( 1 / $i );
            return 1 if ( $j =~ /^-?\d+$/ ) ;
        }
        return 0;
    }
```

[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/walt-mankowski/perl/ch-2.pl)

Walt goes the other way, pre-calculating a lookup table of all perfect powers below an assignable limit. Starting with 2, we first square it and then, multiplying by 2 again, add the cube, continuing until we exceed the limit. Then we do the same for 3<sup>2</sup>, 4<sup>2</sup> and every value up to the square root of the limit. Anything above that point, of course, would, when squared, be too large. As there aren't really that many of them, this method works well.

He can then use this hash to see whether a key exists to exclude perfect powers.

```perl
    # there aren't that many perfect powers less than 1800, so since we know
    # the answer we'll cheat a little and generate them all ahead of time
    sub powers_upto($n) {
        my %powers;
        for my $i (2..sqrt($n)) {
            my $val = $i * $i;
            while ($val <= $n) {
                $powers{$val} = 1;
                $val *= $i;
            }
        }
        return \%powers;
    }
```


[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/adam-russell/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/adam-russell/java/ch-2.java), [Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/adam-russell/prolog/ch-2.p)


&nbsp;&nbsp;**blog writeup:**
 [Brilliantly Discover Achilles' Imperfection — Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/06/19)

&nbsp;&nbsp;**blog writeup:**
[Brilliantly Discover Achilles' Imperfection — Prolog — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/06/19)

Finally, we'll wrap up the non-standard techniques with Adam, who comes up with his own way of computing roots using logarithms. From there he determines whether the result is integral by checking for when the ceiling hits the floor, so to speak.

```perl
    sub prime_factor{
        my $x = shift(@_);
        my @factors;
        for (my $y = 2; $y <= $x; $y++){
            next if $x % $y;
            $x /= $y;
            push @factors, $y;
            redo;
        }
        return @factors;
    }

    sub is_achilles{
        my($n) = @_;
        my @factors = prime_factor($n);
        for my $factor (@factors){
            return false if $n % ($factor * $factor) != 0;
        }
        for(my $i = 2; $i <= sqrt($n); $i++) {
            my $d = log($n) / log($i) . "";
            return false if ceil($d) == floor($d);
        }
        return true;
    }
```

[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/pokgopun/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/pokgopun/go/ch-2.go)

Noted Go enthusiast PoGoPun starts with the premise:

> By its definition, 1st Achilles number is made of first two primes, their powers are greater than 1 but with gcd=1, <br>
&nbsp;&nbsp;=> 2*2*2*3*3 = 72

So far so good. In implementing this he does a couple of very interesting things. Firstly, have a look at the loop and notice the conspicuous absence of any loop statements. Instead we have a block.

All loop control is done within, using `redo` and a candidate variable increment that's automatically triggered if the number is prime. Later a second `redo` sends us around again if we need more values.

I like `redo` but I find it usually buries the lede, not letting us know we are in a looping construct until we need to repeat the block, which can be confusing. But to each their own.

A complex conditional inside our block is used to output a value and increment a count if the candidate is a Achilles Number.


```perl
    use Math::Prime::Util qw/is_prime factor gcd/;
    #
    # By its definition, 1st Achilles number is made of first two primes, their powers are greater than 1 but with gcd=1
    # => 2*2*2*3*3 = 72
    my ($i,$count) = (72,0);
    print($i) && $i++ && $count++;
    {
        redo if is_prime $i && $i++;
        my %factor;
        $factor{$_}++ foreach factor $i;
        print ", $i" if keys(%factor) > 1 && !scalar(grep{$_ < 2} values %factor) && gcd(values %factor)==1 && $count++;
        $i++ && redo if $count < 20;
        print "\n";
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC169 - Brilliant Numbers - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/06/15/pwc169-brilliant-numbers/)

&nbsp;&nbsp;**blog writeup:**
[PWC169 - Achilles Numbers - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/06/16/pwc169-achilles-numbers/)

When doing anything involving primes, or prime factoring — or really any of the common number theory pursuits — one could do worse than bringing `Math::Prime::Util` on board. The hundreds of functions it makes available are all highly tuned and optimized for rapid exploration.

As such, one of the benefits of using `Math::Prime::Util`, or `ntheory` as it is also known, is that whatever it is you want to do, there is likely a function made to do stuff *just like that*, whatever "that" may be. It has at last count over two hundred functions, constants and iterators available.

One of these is `factor_exp`, which returns the prime factorization of a number as an array of anonymous pairs, [*p*,*k*], of factors and their exponents: *p*<sup>*k*</sup>. Nice, huh? With the exponentiation preprepared, no categorizing and counting is required.


```perl
    use ntheory qw< factor_exp >;

    my $count = shift // 20;
    my @achilles;
    my $candidate = 72;
    while (@achilles < $count) {
       push @achilles, $candidate if is_achilles($candidate);
       ++$candidate;
    }
    say join ', ', @achilles;

    sub is_achilles ($n) {
       my $gcd;
       for my $pair (factor_exp($n)) {
          my $power = $pair->[1];
          return 0 if $power == 1;
          $gcd = $gcd ? gcd($gcd, $power) : $power;
       }
       return $gcd == 1;
    }

    sub gcd ($A, $B) { ($A, $B) = ($B % $A, $A) while $A; return $B }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/wlmb/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 169. – W. Luis Mochán. Blog. – Físico, investigador del ICF-UNAM.Physicist, researcher at ICF-UNAM.](https://wlmb.github.io/2022/06/13/PWC169/)

Finally we'll end with Luis, who brings us a second example of using the more specific function `factor_exp`. With the chaining of a `map` function to only grab the second element of the pairs, Luis immediately creates an array of just the factor powers to work with. We don't after all, care what the related primes even are. This is close to exactly what we need.

The `all` function from `List::Util` checks the associated block against each element is a list, returning true if the block returns true for all elements.

As you can see, taking a functional, listwise approach makes the code quite compact.

```perl
    use Math::Utils qw(gcd);
    use Math::Prime::Util qw(factor_exp);
    use List::Util qw(all);

    my $N=shift;
    my $candidate=1;
    my @achilles_numbers;
    while(@achilles_numbers<$N){
        my @exponents=map{$_->[1]} factor_exp(++$candidate);
        push @achilles_numbers, $candidate
            if @exponents>1 and (all {$_>1} @exponents) and gcd(@exponents)==1;
    }
```


## Blogs and Additional Submissions in Guest Languages for Task 2:


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/athanasius/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/athanasius/raku/ch-2.raku)


[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/cheok-yin-fung/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[CY's Take on The Weekly Challenge #169 ](https://e7-87-83.github.io/coding/challenge_169.html)


[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/colin-crain/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Twenty-Two Brilliant Numbers - Programming Excursions in Perl and Raku](https://colincrain.com/2022/06/17/twenty-two-brilliant-numbers)

&nbsp;&nbsp;**blog writeup:**
[A Tendon-ous Task - Programming Excursions in Perl and Raku](https://colincrain.com/2022/06/18/a-tendon-ous-task)


[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/jaldhar-h-vyas/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/jaldhar-h-vyas/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 169](https://www.braincells.com/perl/2022/06/perl_weekly_challenge_week_169.html)


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/james-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[perlweeklychallenge-club/challenge-169/james-smith at master · drbaggy/perlweeklychallenge-club · GitHub](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-169/james-smith)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/laurent-rosenfeld/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/laurent-rosenfeld/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[ Perl Weekly Challenge 169: Brilliant Numbers and Achilles Numbers | laurent_r](http://blogs.perl.org/users/laurent_r/2022/06/perl-weekly-challenge-169-brillant-nummbers-and-achilles-numbers.html)


[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/peter-campbell-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Brilliant and Achilles](https://pjcs-pwc.blogspot.com/2022/06/brilliant-and-achilles.html)


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/roger-bell-west/javascript/ch-2.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/roger-bell-west/kotlin/ch-2.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/roger-bell-west/lua/ch-2.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/roger-bell-west/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/roger-bell-west/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 169: The Brilliance of Achilles](https://blog.firedrake.org/archive/2022/06/The_Weekly_Challenge_169__The_Brilliance_of_Achilles.html)


[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/steve-g-lynn/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/steve-g-lynn/julia/ch-2.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/steve-g-lynn/raku/ch-2.p6)


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/ulrich-rieke/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/ulrich-rieke/cpp/ch-2.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/ulrich-rieke/haskell/ch-2.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-169/ulrich-rieke/raku/ch-2.raku)


------------------------------------------





---

<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>

<center>
<h1 id="PWC169BLOGS">_________ THE BLOG PAGES _________</h1>
</center>


---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, by some miracle I somehow continue to maintain my bearings.**

**Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your Unquenchable *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC169BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *FOLLOW* these *BLOG* *LINKS*:

**( ...*don't think, trust your training, you're in the zone, just do it ...* )**


**Adam Russell**

 * [Brilliantly Discover Achilles' Imperfection — Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/06/19) ( *Perl* )
 * [Brilliantly Discover Achilles' Imperfection — Prolog — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/06/19) ( *Prolog* )

**Arne Sommer**

 * [An Abundance of Numbers with Raku and Perl - Arne Sommer](https://raku-musings.com/ambundance-numbers.html) ( *Perl & Raku* )

**Cheok-Yin Fung**

 * [CY's Take on The Weekly Challenge #169 ](https://e7-87-83.github.io/coding/challenge_169.html) ( *Perl* )

**Colin Crain**

 * [Twenty-Two Brilliant Numbers - Programming Excursions in Perl and Raku](https://colincrain.com/2022/06/17/twenty-two-brilliant-numbers) ( *Perl* )
 * [A Tendon-ous Task - Programming Excursions in Perl and Raku](https://colincrain.com/2022/06/18/a-tendon-ous-task) ( *Perl* )

**Flavio Poletti**

 * [PWC169 - Brilliant Numbers - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/06/15/pwc169-brilliant-numbers/) ( *Perl & Raku* )
 * [PWC169 - Achilles Numbers - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/06/16/pwc169-achilles-numbers/) ( *Perl & Raku* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 169](https://www.braincells.com/perl/2022/06/perl_weekly_challenge_week_169.html) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #169](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-169/james-smith) ( *Perl* )

**Laurent Rosenfeld**

 * [ Perl Weekly Challenge 169: Brilliant Numbers and Achilles Numbers](http://blogs.perl.org/users/laurent_r/2022/06/perl-weekly-challenge-169-brillant-nummbers-and-achilles-numbers.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 169: primes, primes, and more primes! – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/06/13/PerlWeeklyChallenge169.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 169: primes, primes, and more primes! – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/06/13/PerlWeeklyChallenge169.html#task1plperl) ( *Raku* )
 * [Perl Weekly Challenge 169: primes, primes, and more primes! – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/06/13/PerlWeeklyChallenge169.html#task1plpgsql) ( *Raku* )

**Peter Campbell Smith**

 * [Brilliant and Achilles](https://pjcs-pwc.blogspot.com/2022/06/brilliant-and-achilles.html) ( *Perl* )

**Roger Bell_West**

 * [RogerBW's Blog: The Weekly Challenge 169: The Brilliance of Achilles](https://blog.firedrake.org/archive/2022/06/The_Weekly_Challenge_169__The_Brilliance_of_Achilles.html) ( *Perl & Raku* )

**Ryan Thompson**

 * [PWC 169 › Brilliant and Achilles Numbers - Ryan J Thompson](https://ry.ca/2022/06/brilliant-and-achilles-numbers/) ( *Perl* )

**Simon Green**

 * [Weekly Challenge 169](https://dev.to/simongreennet/its-all-about-the-numbers-4fh5) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 169 – W. Luis Mochán](https://wlmb.github.io/2022/06/13/PWC169/) ( *Perl* )
