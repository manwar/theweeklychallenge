---
author:       Colin Crain
date:         2022-08-22T00:00:00
description:  "Colin Crain › Perl Weekly Review #172"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #172"
image:        images/blog/p5-review-challenge-172.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-171/).* )

Welcome to the Perl review pages for **Week 172** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

---

### ●︎ Why do we do these challenges?

I suppose any reasonable answer to that question would be from a field as wide ranging and varied as the people who choose to join the team. One thing, though, is clear: it's not a competition, and there are no judges, even if there is a "prize" of sorts. About that -- I think of it more as an honorarium periodically awarded to acknowledge the efforts we make towards this strange goal. So there's no determination to find the *fastest*, or the *shortest*, or even, in some abstract way, the *best* way to go about things, although I'm certain the participants have their own aspirations and personal drives. As Perl is such a wonderfully expressive language, this provides quite a bit of fodder to the core idea of TMTOWTDI, producing a gamut of varied techniques and solutions.

Even the tasks themselves are often open to a certain amount of discretionary interpretation. What we end up with is a situation where each participant is producing something in the manner they find the most interesting or satisfying. Some team members focus on carefully crafted complete applications, thoroughly vetting input data and handling every use case they can think up. Others choose to apply themselves to the logic of the underlying puzzle and making it work in the most elegant way they can. Some eschew modules they would ordinarily reach for, others embrace them, bringing to light wheels perhaps invented years ago that happen to exactly solve the problem in front of them today.

I've been considering this question for some time and have found one binding commonality between all of us out solving these challenges each week, in that however we normally live our lives, the task in front of us more than likely has nothing to do with any of that. And I think this has great value. We all do what we do, in the real world, and hopefully we do it well. The Weekly Challenge provides us with an opportunity to do something germane to that life yet distinctly different; if we only do the things we already know how to do then we will only do the same things over and over. This is where the "challenge" aspect comes into play.

So we can consider The Weekly Challenge as providing a problem space outside of our comfort zone, as far out from that comfort as we wish to take things. From those reaches we can gather and learn things, pick and choose and bring what we want back into our lives. Personally, I think that's what this whole thing is about. YMMV.

---

<strong><emp>Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due.</emp></strong>

And that, my friends, is why I'm here, to try and figure out ways to do just that.

So here we are then. I'm ready — let’s get to it and see what we can find.

---

### For Additional Context…

Before we begin, you may wish to revisit either the pages for the [**original tasks**](/blog/perl-weekly-challenge-172/) or the summary [**recap**](/blog/recap-challenge-172/) of the challenge. But don't worry about it, the challenge text will be repeated and presented as we progress from task to task.

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

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC172TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC172TASK2)   &nbsp;  &nbsp;  &nbsp;       •   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC172BLOGS)    &nbsp;  &nbsp;  &nbsp;       •

---

# TASK 1 {#PWC172TASK1}

# Prime Partition
*Submitted by: Mohammad S Anwar*

You are given two positive integers, $m and $n.

Write a script to find out the Prime Partition of the given number. No duplicates allowed.

For example,
```
    Input: $m = 18, $n = 2
    Output: 5, 13 or 7, 11

    Input: $m = 19, $n = 3
    Output: 3, 5, 11
```

## about the solutions
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/adam-russell/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/athanasius/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/colin-crain/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/jo-37/perl/ch-1.pl),
[**Kjetil Skotheim**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/kjetillll/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/lubos-kolouch/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/mohammad-anwar/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/peter-campbell-smith/perl/ch-1.pl),
[**Philippe Bricout**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/brxfork/perl/ch-1.pl),
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/pokgopun/perl/ch-1.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/robert-dicicco/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/sgreen/perl/ch-1.pl),
[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/steve-g-lynn/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/ulrich-rieke/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/wlmb/perl/ch-1.pl), and
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/walt-mankowski/perl/ch-1.pl)

Prime partitioning is a decidely complex task when viewed mathematically.

The primes themselves follow an unpredictable pattern, and as such we cannot use a set pattern to determine which combinations of primes will properly fit.

It seems, then, that the only easily-managed, albeit computationally expensive solution is to investigate all combinations of value within the list of primes smaller than the target number to see whether they can be summed to resolve correctly. Bit of a slog, that, especially with larger values.

Combinatorially speaking, the number of valid combinations blows up quite quickly into unmanageable territory, but for smaller values this approach works just fine. The runaway scaling of the possible solutions is somewhat mitigated by the constraint on the number of primes in the partitioning, which is a little detail left unmentioned in the original description.

We are told we are given two values, but only by careful examination of the examples do we figure out that the second number is to be exactly the number of primes selected.

There were 24 submissions for the first task this past week.

## A PORTION of PARTITIONING PROCEDURES

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/sgreen/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/james-smith/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/athanasius/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/adam-russell/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/roger-bell-west/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/laurent-rosenfeld/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/e-choroba/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/mohammad-anwar/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/dave-jacoby/perl/ch-1.pl), and
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/polettix/perl/ch-1.pl)


As suggested, various combinational schemes were seen across the field, but all were based around trying options that might work and noting the results.

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/sgreen/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/sgreen/python/ch-1.py)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 172](https://dev.to/simongreennet/weekly-challenge-172-1h8i)

Simon will start us off with a straightforward demonstation using the `Algorithm::Combinatorics` module, and specifically its function `combinations()`.

This function returns in two ways, depending on what is requested. In list context, it returns an array of arrays, containing all combinations of the input according to specification. As the number of combinations grow factorially with increasing list length, this list can get huge fast.

In a scalar context, however, the function returns a coderef iterator, a closure that when queried will generate and return the *next* combination, until all are exhausted. This is the form Simon uses.

An important consideration to the challenge, however is that this function fully implements *n* choose *k*, or combinations from the set *n* containing exactly *k* elements. This allows us to easily specify, as per the second input value, how large our partion groups are to be. It also radically reduces the number of possible combinations, making the growth of the set of possible partitions much more manageable.

Simon also brings a separate `is_prime()` function of his own construction, which uses trial divison to check divisors from 2 to the square root of the candidate.

```perl
    sub main ( $m, $n ) {
        # Retrieve a list of all prime numbers <= m
        my @primes = ();
        for ( my $i = $m ; $i > 1 ; $i-- ) {
            push @primes, $i if is_prime($i);
        }

        # Go through each combination of n length, and see if we have a solution
        my $iter = combinations( \@primes, $n );
        while ( my $c = $iter->next ) {
            if ( sum(@$c) == $m ) {
                say join ', ', @$c;
                return;
            }
        }

        # It is possible that no solution is found
        say 'No solution!';
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/james-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #172](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-172/james-smith)

The other basic strategy, represented here by James, is recursion over a list of primes.

Actually in this case multiple lists of primes, as we are using `Math::Prime::Util` to provide them, and the results come absurdly fast. In standard form James strips the processing down to a minimal core, using two nested `map` functions.

Most solutions used one or the other of these techniques.

```perl
    use Math::Prime::Util qw(is_prime primes);

    sub partition {
      my ( $m, $n, $p ) = (@_,0);
      $n > 1
      ? map { $p = $_;
              map { [ $p, @{$_} ] }
                  partition( $m-$p, $n-1, $p )
            } @{ primes $p+1, int( ($m-$n/2+1/2)/$n)  }
      : $m > $p && is_prime $m ? [$m] : ();
    }
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/athanasius/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/athanasius/raku/ch-1.raku)

The monk Athanasius, the scourge of Arius, the pitbull of Alexander and no friend to iotas, takes `Algorithm::Combinatorics` and combines the power of `Math::Prime::Util` to produce their list of permitted primes. The result is a compact solution that solicits combinations and sums them in a clean and readable style.

```perl
    my $primes = primes( $m );

    if ($n <= scalar @$primes)
    {
        my $iter = combinations( $primes, $n );

        while (my $comb = $iter->next)
        {
            my $sum  = 0;
               $sum += $_ for @$comb;

            push @prime_parts, $comb if $sum == $m;
        }
    }
```

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/adam-russell/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Partition the Summary — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/07/10)

In a variation for variety, here Adam beings us a solution usng a different module, `Math::Combinatorics`. He also derives his own list of primes using a [sieve of Atkin](https://en.wikipedia.org/wiki/Sieve_of_Atkin), a technique that promises some improvement over the already quite-efficient [sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes).

I encourage interested parties to look at his sieve code. It's a relatively modern technique, only about 20 years old. Cool, that.

You can see the partition code works in much the same way as previous examples. The `pack` and `unpack` code, by the way, is a rather arcane method of summing a list of data, in this case a specific combination instance. Investigate the [perlpacktut](https://perldoc.perl.org/perlpacktut#Doing-Sums) for more information.

```perl
    use Math::Combinatorics;

    sub prime_partition{
        my($n, $k) = @_;
        my @partitions;
        my @primes = sieve_atkin($n);
        my $combinations = Math::Combinatorics->new(count => $k, data => [@primes]);
        while(my @combination = $combinations->next_combination()){
            push @partitions, [@combination] if unpack("%32I*", pack("I*", @combination)) == $n;
        }
        return @partitions;
    }
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/roger-bell-west/javascript/ch-1.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/roger-bell-west/kotlin/ch-1.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/roger-bell-west/lua/ch-1.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 172: Partition of Five](https://blog.firedrake.org/archive/2022/07/The_Weekly_Challenge_172__Partition_of_Five.html)

Although most of the field out there building looping structures, myself included, reached for recursion to provide the framework, this was by no means the only way to go about it.

Here Roger enters with, in his words, his "standard depth-first search pattern". An array of arrays is built up, adding each prime to each previous list, excluding primes already in use in the sub-list under construction. The result is all combinations, which, when the desired length is reached, are then summed and those that equal the target value are selected.

Easy peasy. Or at least he makes it look that way.

```perl
    use Math::Prime::Util qw(primes);

    sub primepartition($n, $divs) {
      my @pl = @{primes($n)};
      my @p = ([]);
      while (scalar @p > 0) {
        my $pa = pop @p;
        if (scalar @{$pa} == $divs) {
          if (sum(@{$pa}) == $n) {
            return $pa;
          }
        } else {
          my %px = map {$_ => 1} @{$pa};
          foreach my $pq (@pl) {
            unless (exists $px{$pq}) {
              push @p,[@{$pa},$pq];
            }
          }
        }
      }
      return [$n];
    }
```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/laurent-rosenfeld/julia/ch-1.jl), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/laurent-rosenfeld/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/laurent-rosenfeld/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 172: Prime Partition and Five-Number Summary ](http://blogs.perl.org/users/laurent_r/2022/07/perl-weekly-challenge-172-prime-partition-and-five-number-summary.html)

Laurent gives us an interesting improvement on a straight recursion method, with a short-circuit when there are only two values being searched. In this case the required complement value can be directly calculated using subtraction, and if the complement is prime and unique it is returned to complete the partition.

```perl
    sub partition  {
        my ($m, $n) = @_;
        return if $n < 2;
        if ($n == 2) {
            for my $i (@primes) {
                last if $i >= $m;
                my $j = $m - $i;
                next if $j == $i;
                next if $seen{$i} or $seen{$j};
                return $i, $j if is_prime($j);
            }
            return;
        } else {
            for my $i (@primes) {
                last if $i >= $m;
                %seen = ($i => 1);
                my @sub_partition = partition($m - $i, $n-1);
                next if @sub_partition < 2;
                return ($i, @sub_partition);
            }
            return;
        }
    }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/e-choroba/perl/ch-1.pl)

Using the highly-tuned `is_prime` function from `Math::Prime::Util`, Choroba can afford to check a large number of values without preparing a list of primes beforehand. Being a staple of number-theoretical tasks, `is_prime` is extremely fast in operation. He also employs the same short-circuit as Laurent, above, when only two numbers are being searched for: picking one as prime and then using subtraction to find the other. The second value is then checked for primality.

```perl
    use Math::Prime::Util qw{ is_prime };

    # Run faster.
    use Memoize;
    memoize '_prime_partition';

    sub prime_partition ($sum, $size) {
        _prime_partition($sum, $size, 2)
    }

    sub _prime_partition ($sum, $size, $min) {
        if ($size == 2) {
            for my $p ($min .. $sum / 2) {
                next unless is_prime($p);

                return [$p, $sum - $p] if is_prime($sum - $p) && $sum != $p * 2;
            }
        } else {
            for my $p ($min .. $sum / $size) {
                next unless is_prime($p);

                my $rest = _prime_partition($sum - $p, $size - 1, $p + 1);
                return [$p, @$rest] if @$rest;
            }
        }
        return []
    }
```

[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/mohammad-anwar/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/mohammad-anwar/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/mohammad-anwar/raku/ch-1.raku)

Mohammad is back with a submission this week, and seems to be enamored with the new `builtin` boolean types available in Perl 5.36.

Today he gives us three functions: `is_prime`, `prime_upto`, and `prime_partition`. The first two, as expected, are used to produce a list of prime values, which are passed to the focus of our investigation, the partitioning. Here again we see `Algorithm::Combinatorics`, this time invoked in listwise mode, as an array source for a `foreach` loop. A quick summation in a single line determines whether our combination is a proper partition.

```perl
    use v5.36;
    use experimental qw(builtin);
    use builtin   qw(true false);
    use Algorithm::Combinatorics qw(combinations);

    sub is_prime($n) {
        return false if ($n == 1);
        do { return false unless $n % $_ } for (2 .. sqrt $n);
        return true;
    }

    sub prime_upto($m) {
        my @p = ();
        my $i = 1;
        while ($i <= $m) {
            $i += 2;
            next unless is_prime $i;
            push @p, $i;
        }

        return \@p;
    }

    sub prime_partition($m, $n) {
        my $primes = prime_upto $m;
        foreach my $combination (combinations($primes, $n)) {
            my $sum = 0;
            $sum += $_ for @$combination;
            return $combination if $sum == $m;
        }
        return;
    }
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/dave-jacoby/perl/ch-1.pl)

As Dave is known for recursion — it's sort of his thing, you know? — it would be a shame not to have a look at his solution. Noteworthy is his use of a common bag hash for a uniqueness check, which comes into play both to limit the primes selected within a particular recursion cycle but also to check the final value should it be prime.

```perl
    sub prime_partitions ( $m, $n ) {
        say <<"END";
    M: $m
    N: $n
    END
        _prime_partitions( $m, $n );
        say '';
    }

    sub _prime_partitions ( $m, $n, $baggage = [] ) {
        if ( $n <= 1 ) {
            if ( is_prime($m) && 0 == grep { /$m/ } $baggage->@* ) {
                my $bag = join ' ', sort { $a <=> $b } $baggage->@*, $m;
                return if $done->{$bag}++;
                say qq{ $bag };
                return;
            }
        }
        else {
            for my $i ( 1 .. $m - 1 ) {
                next if !is_prime($i);
                next if grep { /$i/ } $baggage->@*;
                _prime_partitions( $m - $i, $n - 1, [ sort $baggage->@*, $i ] );
            }
        }
    }

    sub is_prime ($n) {
        die "Bad number $n" unless length $n;
        return 0 if $n == 0;
        return 0 if $n == 1;
        for ( 2 .. sqrt $n ) { return 0 unless $n % $_ }
        return 1;
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC172 - Prime Partition - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/07/06/pwc172-prime-partition/)

Finally Flavio is here to save the day with his famous `combinations_iterator`. You can see here how it slots into a partitioning wrapper to generate combinations. Some people just want to do things for themselves, and Flavio does love his iterators.

```perl
    sub prime_partition ($n, $m) {
       if ($m == 1) { return is_prime($n) ? $n : () }
       my $cit = combinations_iterator($m, primes_within(2, $n - 2));
       while (my ($c) = $cit->()) {
          return $c->@* if $n == sum $c->@*;
       }
       return;
    }

    sub combinations_iterator ($k, @items) {
       my @indexes = (0 .. ($k - 1));
       my $n = @items;
       return sub {
          return unless @indexes;
          my (@combination, @remaining);
          my $j = 0;
          for my $i (0 .. ($n - 1)) {
             if ($j < $k && $i == $indexes[$j]) {
                push @combination, $items[$i];
                ++$j;
             }
             else {
                push @remaining, $items[$i];
             }
          }
          for my $incc (reverse(-1, 0 .. ($k - 1))) {
             if ($incc < 0) {
                @indexes = (); # finished!
             }
             elsif ((my $v = $indexes[$incc]) < $incc - $k + $n) {
                $indexes[$_] = ++$v for $incc .. ($k - 1);
                last;
             }
          }
          return (\@combination, \@remaining);
       }
    }
```



## Blogs and Additional Submissions in Guest Languages for Task 1:



[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/colin-crain/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Five Finger Stat Punch - Programming Excursions in Perl and Raku](https://colincrain.com/2022/07/10/five-finger-stat-punch)


[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/duncan-c-white/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/duncan-c-white/C/ch-1.c)


[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/jaldhar-h-vyas/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/jaldhar-h-vyas/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 172](https://www.braincells.com/perl/2022/07/perl_weekly_challenge_week_172.html)


[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/peter-campbell-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Tricky partitions and easy stats](https://pjcs-pwc.blogspot.com/2022/07/tricky-partitions-and-easy-stats.html)


[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/pokgopun/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/pokgopun/go/ch-1.go)


[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/robert-dicicco/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/robert-dicicco/julia/ch-1.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/robert-dicicco/raku/ch-1.raku), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/robert-dicicco/ruby/ch-1.rb)



[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/steve-g-lynn/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/steve-g-lynn/julia/ch-1.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/steve-g-lynn/raku/ch-1.p6)


&nbsp;&nbsp;**blog writeup:**
[PWC #172](https://thiujiac.blogspot.com/2022/07/pwc-172.html)


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/ulrich-rieke/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/ulrich-rieke/haskell/ch-1.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/ulrich-rieke/raku/ch-1.raku)


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/wlmb/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 172 – W. Luis Mochán](https://wlmb.github.io/2022/07/04/PWC172/)


[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/walt-mankowski/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/walt-mankowski/python/ch-1.py)


------------------------------------------





---

# TASK 2 {#PWC172TASK2}

# Five-number Summary
*Submitted by: Mohammad S Anwar*
You are given an array of integers.

Write a script to compute the five-number summary of the given set of integers.

You can find the definition and example in the [wikipedia page](https://en.wikipedia.org/wiki/Five-number_summary).


## about the solutions
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/adam-russell/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/athanasius/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/colin-crain/perl/ch-2.pl),
[**Dario Mazzeo**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/dario-mazzeo/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/jo-37/perl/ch-2.pl),
[**Kjetil Skotheim**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/kjetillll/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/laurent-rosenfeld/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/lubos-kolouch/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/mattneleigh/perl/ch-2.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/mohammad-anwar/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/peter-campbell-smith/perl/ch-2.pl),
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/pokgopun/perl/ch-2.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/robert-dicicco/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/sgreen/perl/ch-2.pl),
[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/steve-g-lynn/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/ulrich-rieke/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/wlmb/perl/ch-2.pl), and
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/walt-mankowski/perl/ch-2.pl)

The five-number summary is a quick look at a one-dimensional range of data, supplying the high and low bounds, the median and two further intermediate median-related points approximating 25% and 75% divisions, framing the data into roughly four quartiles.

Because the data is assumed to be real-world and potentially unclean, the median is selected for its ability to surpress outlier points. The purpose of the five-number summary is less specific analysis, but rather to get a general feel for what's happening in the data set, and much more precise tools are available to a researcher should the need arise and the effort deemed useful and warranted.

From this the idea arises of exactly how to meaningfully further subdivide the data set into four parts along similar lines to that of the median, and remarkably there is no one singular decided method for doing so. There are several, in fact, that, depending on the data set, deliver slightly different results for the two intermediate quartile points.

This springs from the fact that the idea of fitting the data to quartiles is itself poorly defined, and ultimately a flexibility to tailor the definition to the data being processed is more useful than having a rigid, set algorithm. Cross-comparison between datasets is really only usually useful when the datasets are already related in some way, and so specifying a specific method to be used across several sets for the purposes of cross-comparison within the group makes quite a bit of sense. The actual placement of the quartile points is not a particularly useful metric when isolated, but taken together with the other points in the five-number summary across several sets of data can be very useful to identify changes and differences among the distributions.

There seemed to be a wave (ok, a small wave, but a fair amount) of confusion about the median and various interpretations involving arithmetic means, or averages. Such is life. Consequently there were something like 22 working submissions for the second task this past week.

## A SCATTERPLOT SAMPLING of SUBMISSIONS
[**Kjetil Skotheim**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/kjetillll/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/peter-campbell-smith/perl/ch-2.pl),
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/walt-mankowski/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/duncan-c-white/perl/ch-2.pl),
[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/steve-g-lynn/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/e-choroba/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/jo-37/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/ulrich-rieke/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/jaldhar-h-vyas/perl/ch-2.pl),
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/pokgopun/perl/ch-2.pl), and
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/cheok-yin-fung/perl/ch-2.pl)




As stated there are several competing methods used for computing the "median" quadrant points, with various additional schemes available for pre-filtering and purifying the data as well. The major distinction is whether to include the central mediam point, if distinctly present, in computing the sub-medians for the lower and upper quadrants. We saw both choices implemented within the field.

Consequently, though, we'll be seeing some differing results even using the same data sets. This is not uncommon in the statistical world, defined by probabilities and carefully considered margins of error, trends and approximations.

Visitors from the land of proof and rigorous mathematical certainty are likely to be in for a bit of a shock.

[**Kjetil Skotheim**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/kjetillll/perl/ch-2.pl)

Kjetil will start us off with a demonstration of the first common method of finding the nested medians for the quartile values. In this method, the list is divided in half, and if the center is a whole index, then that index defines the Q2 median element. If the calculated center spans between two points, however, they are averaged to find the value.

For the Q1 and Q3 values, we will then need to take the median again within the spans above and below the center.

One principle differentiation between the alternate methods of calculating the quartile values is whether to include the central median in the subdivision lists. The idea of a single "correct" answer is not at all clear: if a single center point exists, it will be included in all three calculations for instance. Should it?

The method Kjetil uses calculates the median, and if it exists as a real point divides the list in two halves surrounding but not including the center. If the center median is an averaged point the list must have an even number of elements and can be divided cleanly into two equally-sized parts.

```perl
    sub five {                            #method 1 in https://en.wikipedia.org/wiki/Quartile
        @_==0 and croak "five: got no args";
        @_==1 and return (@_) x 5;        #same number five times if just one arg
        my @s    = sort { $a <=> $b } @_; #input sorted
        my $n    = @s;                    #number of elements
        my $q1   = int($n/2-1)/2;         #index of q1, can be .5
        my $q3   = $n-1-$q1;              #index of q3
        my $odd  = $n%2;                  #true if n is odd, odd number of elements overall
        my $oddh = $n%4>1;                #true if the halves have odd number of elements
        (                                 #return the five numbers:
         $s[0],                                                 #min
         $oddh  ?  $s[$q1]  :  ( $s[$q1]    + $s[$q1+1] ) / 2,  #q1, first quartile
         $odd   ?  $s[$n/2] :  ( $s[$n/2-1] + $s[$n/2]  ) / 2,  #q2, median
         $oddh  ?  $s[$q3]  :  ( $s[$q3]    + $s[$q3+1] ) / 2,  #q3, third quartile
         $s[-1]                                                 #max
        )
    }
```



[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/peter-campbell-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Tricky partitions and easy stats](https://pjcs-pwc.blogspot.com/2022/07/tricky-partitions-and-easy-stats.html)

Peter demonstrates a straightforward approach to calculating all the interior quartile points in one swoop. Using this method the center positions are directly derived, and may be fractional. A separate subroutine is then used to return either a whole-index value or the arithmetic mean should the median point fall between two values.

```perl
    # sort numerically and count
    @sorted = sort    {$a <=> $b} @$test;
    $count = scalar @sorted;

    # determine value at a position (which might not be integral)
    $median = value(($count - 1) / 2);
    $first_quartile = value(($count - 1) / 4);
    $third_quartile = value(3 * ($count - 1) / 4);

    # show the answers
    say qq[\n] . join(', ', @sorted);
    say qq[minimum $sorted[0] first quartile $first_quartile median $median ] .
        qq[third quartile $third_quartile maximum $sorted[$count - 1]];

    sub value {

        my ($position, $lower, $upper, $fraction);

        # returns the value at the given position
        # if position is non-integral returns the weighted intermediate value
        $position = shift;

        # integral position
        return $sorted[$position] if $position == int($position);

        # find intergral position below and above given position and
        # calculate weighted intermediate value
        $lower = int($position);
        $upper = $lower + 1;
        $fraction = $position - $lower;
        return $sorted[$lower] * (1 - $fraction) + $sorted[$upper] * $fraction;
    }
```

[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/walt-mankowski/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/walt-mankowski/python/ch-2.py)

Although it was common to separate out some sort of `median` routine to decide between the odd and even cases in calculating that value, exactly how this was done varied. Some passed an externally derived index, either a whole or fractional value, or perhaps the size of the list being used. Other techniques isolated the operation completely, and when passed a list of data took it from there and determined the median value.

Walt took this latter route.

```perl
    sub median_sorted(@a) {
        my $len2 = int(@a / 2);
        return @a % 2 == 1 ? $a[$len2] : ($a[$len2-1] + $a[$len2]) / 2;
    }

    # returns the 5 number summary of a list: minimum, lower quartile,
    # median, upper quartile, maximum
    sub fivenum(@a) {
        my @sorted = sort {$a <=> $b} @a;
        my $min = $sorted[0];
        my $max = $sorted[-1];
        my $median = median_sorted(@sorted);

        my $len2 = int(@sorted / 2);
        my $lower = median_sorted(@sorted[0..$len2-1]);
        my $upper;
        if (@sorted % 2 == 1) { # odd number of elements
            $upper = median_sorted(@sorted[$len2+1..$#sorted]);
        } else {
            $upper = median_sorted(@sorted[$len2..$#sorted]);
        }
        return ($min, $lower, $median, $upper, $max);
    }
```

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/duncan-c-white/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/duncan-c-white/C/ch-2.c)

Duncan also uses a separate routine to return either a whole or averaged median value, and also skips any real central median point in halving the array to find the first and third quartiles. This skipping choice is quite common, but one can see how in the case of having an odd number of data points the subdivision of the list to finds the upper and lower quartiles will result in a slight weighting away from the center. This weighting is mirrored should we include the point, so that does not present a fundamentally "better" solution.

As we are extracting median points and not means (save when averaging between two points), it's not clear which choice is better. The median is not a perfect solution itself, and results in a very useful one-half *approximation* rather than a mathematically rigorous division point. The qualifying math comes into play when the *number* of data points is added to the analysis, supplying bounds of confidence in the conclusions drawn.

Note as well Duncan presents the summary is a common geometric way, based around a tree structure: the median is at a centra peak, flanked by the first and third quartiles and the minimum and maximum below them:

```
    7.5
 0.5   44.0
 0.0   63.0
```

Here is his core logic:

```perl
    sub median
    {
        my( @n ) = @_;
        my $midpos = int(@n/2);
        my $median = @n%2 == 0 ? ($n[$midpos-1]+$n[$midpos])/2 : $n[$midpos];
        return $median;
    }


    my $median = median( @n );

    my $midpos = int(@n/2);
    say "debug: midpos=$midpos" if $debug;

    my @h1 = @n[0..$midpos-1];

    $midpos++ if @n%2 != 0;
    my @h2 = @n[$midpos..@n-1];

    say "debug: h1 = ", join(',',@h1), ", h2 = ", join(',',@h2)
        if $debug;

    my $firstq = median( @h1 );
    my $thirdq = median( @h2 );

    my $min = $n[0];
    my $max = $n[-1];

    printf "   %5.1f\n", $median;
    printf "%5.1f  %5.1f\n", $firstq, $thirdq;
    printf "%5.1f  %5.1f\n", $min, $max;
```




[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/steve-g-lynn/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/steve-g-lynn/julia/ch-2.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/steve-g-lynn/raku/ch-2.p6)


&nbsp;&nbsp;**blog writeup:**
[PWC #172](https://thiujiac.blogspot.com/2022/07/pwc-172.html)

Stephen brings the awesome power of the PDL, the Perl Data Language, to bear on the problem, treating the input as any other one-dimensional vector of data. There does not appear to be a prepackaged function for a five-number summary in the standard library, but a `median` method is included, which makes that step, along with the minimum and maximum values, easier.

A case is made but not implemented for linear interpolation on the quartiles. This represents yet another method that is sometimes employed, but the added precision it brings to 4 divisions does not necessarily improve the informational content of the summary and may not be worth the added effort. A similar adjustment is also sometimes  made to the quartile median approximations, designed to compensate for the slight weighting shift imposed by either inclusion or removal of a centerpoint median value. Again, though, one-quarter fractional precision may not be a useful addition; its presence may in fact imply precision that simply isn't there.

```perl
    sub fivenum {
        my ($data) = pdl @_;

        my $len = $data -> dim(0);

        my ($min, $quartile_1, $median, $quartile_3, $max);

        my $indx = qsorti($data);

        #-- Quartiles
        #-- If len divisible by 4, I take the midpoint of
        #-- the two observations that embrace the quartile.
        #-- (Recommended better practice is linear interpolation,
        #-- but the calculation here is also theoretically okay)

        if ( ($len % 4) == 0 ) {
            $quartile_1 =
                0.5*($data($indx($len/4))+$data($indx($len/4+1)));
            $quartile_3 =
                0.5*($data($indx(3*$len/4))+$data($indx(3*$len/4+1)));
        } else {
            $quartile_1 = $data($indx(int($len/4)+1));
            $quartile_3 = $data($indx(int(3*$len/4)+1));
        }

        return pdl([$data->min, $quartile_1, $data->median, $quartile_3, $data->max]);
    }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/e-choroba/perl/ch-2.pl)

Unexpectedly Choroba also brings in the PDL, only this time employing the `pctover` method, which as configured delivers values for the 0, one-quater, one-half, three-quarters and end points along the data vector. This produces slightly different values depending on the number of data points presented.

The commentary on his testing reflects this.

```perl
    use PDL;

    sub five_number_summary {
        my ($data) = @_;
        return map pdl(@$data)->pctover($_), 0, 1/4, 0.5, 0.75, 1
    }

    use Test::More tests => 2;

    # This test fails. PDL doesn't use a simple interpolation.
    is_deeply [five_number_summary([0, 0, 1, 2, 63, 61, 27, 13])],
        [0, 0.5, 7.5, 44, 63];

    # This is the actual result. It corresponds to R's summary() rather
    # than fivenum().
    is_deeply [five_number_summary([0, 0, 1, 2, 63, 61, 27, 13])],
        [0, 0.75, 7.5, 35.5, 63];
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/jo-37/perl/ch-2.pl)

Jorg makes an interesting case for including a whole-index center median in each high and low subdivision of the data, in that given a data set of five ordered values, the five-number summary of this will produce the same five values. This does, I admit, have a certain aesthetic appeal to it. I'm not sure if we should be taking aesthetics into account when engaging in scientific pursuits, but it would be foolish to deny that many a conclusion has been guided this way, whether consciously or unconsciously.

I submit the observation of the golden ratio in natural forms as prima facie evidence to the assertion. Phi, φ, is a useful mathematical value. Finding it in the measurements of the ideal human is hubris.

But I digress. Including the centerpoint in a five-number summary is just fine, for whatever reason, as long as the choice is consistently applied.

```perl
    sub fivenum {
        # numbers need to be sorted.
        my @n = sort {$a <=> $b} @_;

        # non-integer index around the first quartile.
        my $q = $#n / 4;
        # Offset for the exact (non-integer) indices of the first
        # and third quartile.
        my $o = ($#n % 2) / 4;
        # zeroth (min), first, second (median), third and fourth (max)
        # quartile. Interpolated if necessary by taking the mean of the
        # surrounding values for non-integer indices.
        map +($n[floor $_] + $n[ceil $_]) / 2,
            0, $q - $o, $#n / 2, 3 * $q + $o, $#n;
    }
```

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/ulrich-rieke/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/ulrich-rieke/cpp/ch-2.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/ulrich-rieke/haskell/ch-2.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/ulrich-rieke/raku/ch-2.raku)

Ulrich also choses this second, inclusive method. It is nice to have this variety expressed, because as I noted there is, to the frustration of many, no consensus on the subject. After taking in a string of space-separated values from `STDIN`, the data is teased apart and processed. I'll mention it here, because I haven't elsewhere, that after sorting the data, the two ends of the sorted array will hold the minimum and maximum values, so there is no need to prepare functions to determine them.

```perl
    my @sorted = sort { $a <=> $b } @numbers ;
    say "Minimum is $sorted[0]!" ;
    my $median = findMedian( \@sorted ) ;
    say "Median is $median!" ;
    my @slice ;
    my @secondSlice ;
    if ( $size % 2 == 0 ) {
      @slice = @sorted[0 .. $size / 2 - 1] ;
      @secondSlice = @sorted[ $size / 2 .. $size - 1] ;
    }
    else {
      @slice = @sorted[0 .. floor( $size / 2 )] ;
      @secondSlice = @sorted[floor( $size / 2 ) .. $size - 1 ] ;
    }
    my $firstQuartile = findMedian( \@slice ) ;
    say "First quartile is $firstQuartile!" ;
    my $thirdQuartile = findMedian( \@secondSlice ) ;
    say "Third quartile is $thirdQuartile!" ;
    say "Maximum is $sorted[-1]!" ;
```



[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/jaldhar-h-vyas/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/jaldhar-h-vyas/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 172](https://www.braincells.com/perl/2022/07/perl_weekly_challenge_week_172.html)

In any of the methods involving nested medians — of first taking the whole-dataset median and then dividing the data into two halves somehow to then take the medians of these subgroups — a common decision tree exists to properly determine the datapoints selected for the results. If the master list is odd, we will have a central point, but otherwise we will average the two values bracketing the center. Whether the side lists are even or odd results in a similar reasoning.

The nesting, however, can be unrolled into a decision at each of the three quartile points, and acted on sequentially.

```perl
    my @nums = sort { $a <=> $b } @ARGV;
    my $e = scalar @nums;

    say "minimum:        ", $nums[0];
    say "lower quartile: ", $e % 2 == 0 ? ($nums[$e / 4 - 1] + $nums[$e / 4]) / 2 : $nums[$e / 4];
    say "median:         ", $e % 2 == 0 ? ($nums[$e / 2 - 1] + $nums[$e / 2]) / 2 : $nums[$e / 2];
    say "upper quartile: ", $e % 2 == 0 ? ($nums[$e / 4 * 3 - 1] + $nums[$e / 4 * 3]) / 2 : $nums[$e / 4 * 3];
    say "maximum:        ", $nums[-1];
```

[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/pokgopun/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/pokgopun/go/ch-2.go)

These sequential evaluations can be further condensed to a single complex, listwise constructor for the entire summary, if we remove the calculation of the median value to a separate subroutine.

```perl
    printf "Input: (%s)\n", join(", ",@a);
    my @fn = ($a[-1], @a==1 ? $a[0] : median(@a[int(@a/2)+@a%2..$#a]), median(@a), @a==1 ? $a[0] : median(@a[0..int(@a/2)-1]), $a[0]);
    my $i = 5;
    foreach (qw/sample_minimum lower_quartile median upper_quartile sample_maximum/){
        printf "%s: %s\n", $_, $fn[--$i];
    }

    sub median{
        return @_ % 2 ? $_[int(@_/2)] : ($_[@_/2-1] + $_[@_/2])/2;
    }
```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/cheok-yin-fung/perl/ch-2.pl)

Finally, faced with a wide variety of options for calculating the quartile points, CY has gone and decided to implement them all. Someone had to do it.

Or... at least the four most common. I'm unclear whether the procedure used in the *n*-value linear interpretation method, number 4 here, is exactly the same as that used in the PDL `pctover()` method we saw earlier. I mean, probably, as it has a pretty straightforward, well-defined basis. But I still wouldn't assume without a little more research into the specific implementation. [*ed note: I checked: it's different. Go figure.*]

In any case when given a list on the command line, CY's submission will deliver the summary four ways.

Variety is the spice of life.

Her `_median()` function, referenced but not listed, is pretty self-explanatory at this point, I hope.

```perl
    sub fns ($inp , $quartile_method = 1) {
    # (definition of the methods follows en.wikipedia.org/wiki/Quartile)
        my @arr = $inp->@*;
        @arr = sort {$a<=>$b} @arr;
        my $s = scalar @arr;
        if ($quartile_method == 2 && $s % 2 == 1) {
            return [$arr[0],
                    _median(@arr[0..($s-1)/2]),
                    $arr[($s-1)/2],
                    _median(@arr[($s-1)/2..$s-1]),
                    $arr[-1]];
        }
        if ( ($quartile_method == 2 || $quartile_method == 1) && $s % 2 == 0) {
            return [$arr[0],
                    _median(@arr[0..$s/2-1]),
                    _median(@arr),
                    _median(@arr[$s/2..$s-1]),
                    $arr[-1]];
        }
        if ( $quartile_method == 1 && $s % 2 == 1) {
            return [$arr[0],
                    _median(@arr[0..($s-3)/2]),
                    $arr[($s-1)/2],
                    _median(@arr[($s+1)/2..$s-1]),
                    $arr[-1]];
        }
        if ( $quartile_method == 3 ) {
            return fns([@arr], 1) if $s % 2 == 0;
            my $m = _median(@arr);
            my $f = scalar @arr / 4;
            if (scalar @arr % 4 == 1) {
                return [$arr[0],
                        $arr[$f-1]/4 + $arr[$f]*3/4,
                        $m,
                        $arr[3*$f]*3/4 + $arr[3*$f+1]/4,
                        $arr[-1]];
            }
            else {     # scalar @arr % 4 == 3
                return [$arr[0],
                        $arr[$f]*3/4 + $arr[$f+1]/4,
                        $m,
                        $arr[3*$f-1]/4 + $arr[3*$f]*3/4,
                        $arr[-1]];
            }
        }
        if ( $quartile_method == 4 ) {
            my $k1 = floor(($s+1)/4);
            my $k3 = floor(($s+1)*3/4);
            my $a1 = ($s+1)/4 - $k1;
            my $a3 = ($s+1)*3/4 - $k3;
            return [$arr[0],
                    $arr[$k1-1]+$a1*($arr[$k1]-$arr[$k1-1]),
                    _median(@arr),
                    $arr[$k3-1]+$a3*($arr[$k3]-$arr[$k3-1]),
                    $arr[-1]];
        }

        # if the quartile method parameter is set incorrectly
        return fns([@arr], 1);
    }
```



## Blogs and Additional Submissions in Guest Languages for Task 2:


[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/adam-russell/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Partition the Summary — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/07/10)


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/athanasius/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/athanasius/raku/ch-2.raku)


[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/colin-crain/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Five Finger Stat Punch - Programming Excursions in Perl and Raku](https://colincrain.com/2022/07/10/five-finger-stat-punch)


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC172 - Five-number Summary - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/07/07/pwc172-five-number-summary/)


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/james-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #172](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-172/james-smith)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/laurent-rosenfeld/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/laurent-rosenfeld/c/ch-2.c), [Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/laurent-rosenfeld/julia/ch-2.jl), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/laurent-rosenfeld/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/laurent-rosenfeld/raku/ch-2.raku), [Ring](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/laurent-rosenfeld/ring/ch-2.ring), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/laurent-rosenfeld/ruby/ch-2.rb)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 172: Prime Partition and Five-Number Summary ](http://blogs.perl.org/users/laurent_r/2022/07/perl-weekly-challenge-172-prime-partition-and-five-number-summary.html)



[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/mohammad-anwar/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/mohammad-anwar/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/mohammad-anwar/raku/ch-2.raku)


[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/robert-dicicco/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/robert-dicicco/julia/ch-2.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/robert-dicicco/raku/ch-2.raku), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/robert-dicicco/ruby/ch-2.rb)


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/roger-bell-west/javascript/ch-2.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/roger-bell-west/kotlin/ch-2.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/roger-bell-west/lua/ch-2.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/roger-bell-west/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/roger-bell-west/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 172: Partition of Five](https://blog.firedrake.org/archive/2022/07/The_Weekly_Challenge_172__Partition_of_Five.html)




[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/sgreen/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/sgreen/python/ch-2.py)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 172](https://dev.to/simongreennet/weekly-challenge-172-1h8i)


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-172/wlmb/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 172 – W. Luis Mochán](https://wlmb.github.io/2022/07/04/PWC172/)


------------------------------------------





---

<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>

<center>
<h1 id="PWC172BLOGS">_________ THE BLOG PAGES _________</h1>
</center>


---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, by some miracle I somehow continue to maintain my bearings.**

**Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your Unquenchable *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC172BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *FOLLOW* these *BLOG* *LINKS*:

**( ...*don't think, trust your training, you're in the zone, just do it ...* )**


**Adam Russell**

 * [Partition the Summary — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/07/10) ( *Perl* )

**Arne Sommer**

 * [Primary Five with Raku - Arne Sommer](https://raku-musings.com/primary-five.html) ( *Raku* )

**Colin Crain**

 * [Five Finger Stat Punch - Programming Excursions in Perl and Raku](https://colincrain.com/2022/07/10/five-finger-stat-punch) ( *Perl* )

**Flavio Poletti**

 * [PWC172 - Prime Partition - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/07/06/pwc172-prime-partition/) ( *Perl & Raku* )
 * [PWC172 - Five-number Summary - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/07/07/pwc172-five-number-summary/) ( *Perl & Raku* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 172](https://www.braincells.com/perl/2022/07/perl_weekly_challenge_week_172.html) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #172](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-172/james-smith) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 172: Prime Partition and Five-Number Summary ](http://blogs.perl.org/users/laurent_r/2022/07/perl-weekly-challenge-172-prime-partition-and-five-number-summary.html) ( *Perl & Raku* )

**Peter Campbell Smith**

 * [Tricky partitions and easy stats](https://pjcs-pwc.blogspot.com/2022/07/tricky-partitions-and-easy-stats.html) ( *Perl* )

**Roger Bell_West**

 * [RogerBW's Blog: The Weekly Challenge 172: Partition of Five](https://blog.firedrake.org/archive/2022/07/The_Weekly_Challenge_172__Partition_of_Five.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 172](https://dev.to/simongreennet/weekly-challenge-172-1h8i) ( *Perl* )

**Stephen G Lynn**

 * [PWC #172](https://thiujiac.blogspot.com/2022/07/pwc-172.html) ( *Perl & Raku* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 172 – W. Luis Mochán](https://wlmb.github.io/2022/07/04/PWC172/) ( *Perl* )
