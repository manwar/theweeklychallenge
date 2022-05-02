---
author:       Colin Crain
date:         2022-05-02T00:00:00
description:  "Colin Crain › Perl Weekly Review #158"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #158"
image:        images/blog/p5-review-challenge-158.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-157/).* )

Welcome to the Perl review pages for **Week 158** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

---

### ●︎ Why do we do these challenges?

I suppose any reasonable answer to that question would be from a field as wide ranging and varied as the people who choose to join the team. One thing, though, is clear: it's not a competition, and there are no judges, even if there is a "prize" of sorts. About that -- I think of it more as an honorarium periodically awarded to acknowledge the efforts we make towards this strange goal. So there's no determination to find the *fastest*, or the *shortest*, or even, in some abstract way, the *best* way to go about things, although I'm certain the participants have their own aspirations and personal drives. As Perl is such a wonderfully expressive language, this provides quite a bit of fodder to the core idea of TMTOWTDI, producing a gamut of varied techniques and solutions.

Even the tasks themselves are often open to a certain amount of discretionary interpretation. What we end up with is a situation where each participant is producing something in the manner they find the most interesting or satisfying. Some team members focus on carefully crafted complete applications, thoroughly vetting input data and handling every use case they can think up. Others choose to apply themselves to the logic of the underlying puzzle and making it work in the most elegant way they can. Some eschew modules they would ordinarily reach for, others embrace them, bringing to light wheels perhaps invented years ago that happen to exactly solve the problem in front of them today.

I've been considering this question for some time and have found one binding commonality between all of us out solving these challenges each week, in that however we normally live our lives, the task in front of us more than likely has nothing to do with any of that. And I think this has great value. We all do what we do, in the real world, and hopefully we do it well. The Weekly Challenge provides us with an opportunity to do something germane to that life yet distinctly different; if we only do the things we already know how to do then we will only do the same things over and over. This is where the "challenge" aspect comes into play.

So we can consider The Weekly Challenge as providing a problem space outside of our comfort zone, as far out from that comfort as we wish to take things. From those reaches we can gather and learn things, pick and choose and bring what we want back into our lives. Personally, I think that's what this whole thing is about. YMMV.

---

<strong><emp>Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due.</emp></strong>

And that, my friends, is why I'm here, to try and figure out ways to do just that.

So, here we are then. I'm ready — let’s get to it and see what we can find.

---

### For Additional Context…

before we begin, you may wish to revisit either the pages for the [**original tasks**](/blog/perl-weekly-challenge-158/) or the summary [**recap**](/blog/recap-challenge-158/) of the challenge. But don't worry about it, the challenge text will be repeated and presented as we progress from task to task.

Oh, and one more thing before we get started:


### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please feel free to email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

<div align= center><strong>...So finally, without further ado...</strong></div>

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC158TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC158TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC158BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

---

# TASK 1 {#PWC158TASK1}

# Additive Primes
*Submitted by: Mohammad S Anwar*

Write a script to find out all Additive Primes <= 100.

Additive primes are prime numbers for which the sum of their decimal digits are also primes.

**Output**
```
        2, 3, 5, 7, 11, 23, 29, 41, 43, 47, 61, 67, 83, 89
```

## about the solutions
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/alexander-pankoff/perl/ch-1.pl),
[**Ali Moradi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/deadmarshal/perl/ch-1.pl),
[**Andrezgz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/andrezgz/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/athanasius/perl/ch-1.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/bruce-gray/perl/ch-1a.sh),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/colin-crain/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/jo-37/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/lubos-kolouch/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/mattneleigh/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/perlboy1967/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/paulo-custodio/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/pete-houston/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/peter-campbell-smith/perl/ch-1.pl),
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/pokgopun/perl/ch-1.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/robert-dicicco/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/sgreen/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/ulrich-rieke/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/wlmb/perl/ch-1.pl)

In number theory there seems to be a recurring theme of digit summation; this is where you break a multi-positional representation of a number into a collection of individual digits and then add them up. As a number representation is really a shorthand of sorts for an arithmetic expansion — each digit providing the coefficient for a term multiplied by the base raised to the power of the position (counting from right starting at zero) — the idea of summing the coefficients does eventually relate back to a rigorous mathematical framework.

That framework is set in the modulus of the base being used, and I can see the how this can raise all kinds of interesting patterns in the cycles across the powers. On the other hand, the ultimately arbitrary decision to structure our common mathematics around base-10 does make me question much of the ultimate utility of the procedure. It's a process not exclusively constrained to decimal math, but is certainly most commonly found there. In a broader sense I can see how looking at the epicycles in pan-modulus math across bases could lead to valuable insights as to the underlying structures in the numeric realm. In just base-10, maybe not so much.

Which is course is not a condemnation of working in base-10 at all, as it provides a fine example of a base that people are used to contemplating. But there's no mystical secret to that particular value either. I sometimes consider how much easier many things would be if we evolved with 12 fingers. But who knows? Perhaps we would have ignored the thumb and found base-10 again. Duodecimal math seems to have had a shot once and been largely passed over, only remaining on in our time systems. You can count to twelve in groups of three bones across four fingers, for example. Between that and the moon duodecimal seems to have had its day and lost out.

With all that said, in a final defense of the task, however, I'll append that one of the driving forces behind number theory is recreational, where the pursuit is open-ended exploration. As such any technique's limited obvious utility is no reason whatsoever not to do it. The patterns in math are pervasive and find themselves repeated across disciplines, resurfacing in the most curious places. Finding a truth is one realm allows that pattern, often, to be generalized and pursued elsewhere, and thus knowledge has utility irrespective of its immediate practicality.

There were 28 submissions for the first task this past week.

## add it up ANY WAY YOU LIKE, it COMES OUT THE SAME
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/laurent-rosenfeld/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/mattneleigh/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/jo-37/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/james-smith/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/paulo-custodio/perl/ch-1.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/robert-dicicco/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/pete-houston/perl/ch-1.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/bruce-gray/perl/ch-1a.sh),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/roger-bell-west/perl/ch-1.pl), and
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/peter-campbell-smith/perl/ch-1.pl)



In this task we have two components, one to create or otherwise acquire prime numbers and a secondary process to produce a digit sum. This, then is the story on how two seemingly disparate functions came together, found love and formed a list of additive primes.

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/laurent-rosenfeld/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 158: Additive Primes and Cuban Primes](http://blogs.perl.org/users/laurent_r/2022/03/perl-weekly-challenge-158-additive-primes-and-cuban-primes.html)

We'll begin with Laurent's submission. His basic analysis of the situation starts with the known fact that we are looking at the numbers up to 100, so the maximal prime factor we need to look for to prove composite status would be the square root of 100, or 10. The possible primes then are limited to only 2, 3, 5 and 7. He choses to hard-code these in.

For a primality test, then, we're working with a much smaller playing field, and a short loop over these four values provides all the checking we need.

At that point the range from 2 to 100 is filtered using `grep` to only pass prime values, using the `is_prime()` function. The resulting list are then the candidate values.

Each of these are then broken apart into individual digits that are then summed. The limited prime-test function can them be used again to check the sum, and if it is found to not be divisible by any of the small primes it is thus declared an additive prime.



```perl
    my @small_primes = (2, 3, 5, 7);

    sub is_prime {
        my $n = shift;
        for my $p (@small_primes) {
            return 1 if $p == $n;
            return 0 if $n % $p == 0;
        }
        return 1;
    }

    for my $n (grep {is_prime $_} 2..100) {
        my $sum = 0;
        $sum += $_ for split '', $n;
        print "$n " if is_prime $sum;
    }
    say "";
```

[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/mattneleigh/perl/ch-1.pl)

Matthew gives us a much more loquacious account, although most of the words in his demonstration are part of his extensive systematic commentary. For someone in my position — of presenting the various ways of approaching a task to a general audience — this is always welcome, and serves to put Matthew's personal stylings on display.

As for that, the code is broken down into two broad sections: a [Sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) to find primes less than a certain value, and a `calculate_additive_primes()` section to hold the core logic.

Of note his sieve is worth an extra look, as he internally uses a vector string composed of 1s and 0s for his tally, which he manipulates using `substr` statements with substitution. The goal is a reduced memory footprint, but without verifying I also expect this technique to be extremely fast, as `substr`, perhaps counter-intuitively, is quite efficient and generally quicker than manipulating a Perl array. As internally both are ultimately kept in memory as C-arrays of pointers anyway, the string datatype is a bit simpler and requires less overhead than the more sophisticated Perl array type. The difference is exacerbated if the added step is required to first `split` a string into an array of characters, in which case direct access with `substr` is nearly always faster.

But I digress.

Matthew also *returns* this binary string, which can then serve as a lookup table by positional index: the presence of a 1 or 0 at a given character position indicates whether or not the index value is prime. That's the important part.

After he has gone to great lengths to obtain his encoded list of primes less than the given upper bound, he then examines the range from 2 up to the limit. The numbers are looked up in the prime string using `substr`, and composite candidates are rejected. Those that pass, are broken apart and summed using `split` and a `foreach` loop, and the result looked up again in the master prime string.

I like this use of a binary string to hold a lookup table. It's remarkable.

```perl
    sub calculate_additive_primes{
        my $n = int(shift());

        return(undef)
            unless($n > 1);

        # Generate a table of primes sufficient
        # for our purposes
        my $prime_table = ${sieve_of_eratosthenes($n, 1)};
        my @additives;

        # Loop over the range from 2 to $n
        for my $i (2 .. $n){
            my $sum = 0;

            # Skip numbers that aren't prime
            next
                unless(substr($prime_table, $i, 1));

            # Loop over each digit of $i and
            # sum them
            foreach(split('', $i)){
                $sum += $_;
            }

            # If the sum is prime, add $i to
            # the list
            push(@additives, $i)
                if(substr($prime_table, $sum, 1));

        }

        # Return the list of additive primes
        return(@additives);

    }
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/jo-37/perl/ch-1.pl)

In contrast to Matthew's piec-by-piece construction from base materials, Jorg assembles a hero's collection of high-level components to craft a tight and elegant machine for the task.

From the number theory module `Math::Prime:Util` Jorg selects four functions: `prime_iterator`, `is_prime`, `vecsum`, and `todigits`. Working backwards from the end of that list:
* `todigits` is a generalized function to split a number into an array of digits, with the added property of being able to convert that number into any requested base before the split. Because of this Jorg's approach will also be able to find additive primes in any base.
* The `vecsum` function works my like `sum0` from `List::Util`, but assumes the input array is integers and avoids any floating-point math.
* `is_prime` does what it says, returning an up/down boolean condition as 1 and 0
* `prime_iterator` returns a coderef closed around a prime number generator, and is initialized to a given number, defaulting to 2. When this coderef is called, the next sequential prime number is returned, and cannot be reset.

The additive prime logic is run as a coroutine, using `Coro::Generator`. A coroutine is comparable to a subroutine that preserves state, that one can step in and out of as directed. The `gather` and `take` control structure borrowed from Raku completes the machine, collecting values returned from the coroutine into an anonymous array until the conditions have been fulfilled, and then returning the list.

Because the base for the digit-summation in this implementation can be varied, setting it to binary produces the [pernicious primes](https://theweeklychallenge.org/blog/perl-weekly-challenge-156/#TASK1). Ain't number theory grand?

```perl
    use Math::Prime::Util qw(prime_iterator is_prime vecsum todigits);
    use Coro::Generator;
    use Syntax::Keyword::Gather;

    ### Input and Output
    say for additive_primes_below(shift, $base);

    ### Implementation
    sub additive_primes_below ($limit, $base = 10) {
        my $p_i = prime_iterator();

        # Build a generator for additive primes in the given base.
        my $ap_i = generator {
            my $p;
            while () {
                yield $p if is_prime vecsum todigits $p = $p_i->(), $base;
            }
        };

        # Collect all additive primes below the given limit.
        gather {
            my $ap;
            take $ap while ($ap = $ap_i->()) < $limit;
        };
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/james-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #158](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-158/james-smith)

Wrapping up our initial quad of submissions is James, who fittingly enough brings four variations on his solution to the table. The techniques used serve to analyse the best means to divide and sum the digits in a number.

The fastest way was to divide the number down using modulo 10 arithmetic, isolating and summing the remainders. This technique is nearly 140% faster than the slowest, using `split` and `sum0`.

```perl
    sub additive_primes_div {
      my @res;
      for( my $p = 2; my $s = 0, ( my $q = $p ) <= $N; (is_prime $s) && (push @res, $p), $p = next_prime $p ) {
        do { $s += $q % 10 } while $q = int $q / 10;
      }
      @res;
    }
```

The other methods explored are a slight expansion of the dividing-out technique above, followed by using `split` to construct and intermediate anonymous array and lastly `split` with the `List::Util` function `sum0` to perform the summation.

I'm surprised about the last result, as `sum0` is a compiled XS function; apparently the overhead of switching to an external code library outweighs the performance benefit.

```perl
    sub additive_primes_div_expanded {
      my @res;
      for(
        my $p = 2                                             ;
        my $s = 0,                        ( my $q = $p ) <= $N;
        (is_prime $s) && (push @res, $p), $p = next_prime $p
          ) {
            do { $s += $q % 10 } while $q = int $q / 10;
          }
      @res;
    }

    sub additive_primes_split {
      my @res;
      for( my $p = 2; my $s = 0, $p <= $N ; $p = next_prime $p ) {
        $s+=$_ for split //, $p;
        push @res, $p if is_prime $s;
      }
      @res;
    }

    sub additive_primes_split_sum0 {
      my @res;
      for( my $p = 2; $p <= $N ; $p = next_prime $p ) {
        push @res, $p if is_prime sum0 split //, $p;
      }
      @res;
    }
```


[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/paulo-custodio/perl/ch-1.pl)

For our next set of examples, we'll circle around and revisit the basic steps again: from a list of prime numbers, sum the digits and determine whether the sum is also prime.

Paulo engages the assistance of `ntheory`, an alias for `Math::Prime::Util`, for the functions `is_prime` and `next_prime`. Starting with the prime value 2, he splits the candidate on character boundaries into an array and sums them using `sum` from `List::Util`. The `is_prime` check then determines whether the candidate is additive. Then a new candidate is selected using `next_prime`, whose name is self-explanatory.

```perl
    use Modern::Perl;
    use List::Util qw( sum );
    use ntheory qw( is_prime next_prime );

    say join(", ", additive_primes(100));

    sub additive_primes {
        my($limit) = @_;
        my @out;
        my $prime = 2;
        while ($prime < $limit) {
            if (is_prime(sum(split(//, $prime)))) {
                push @out, $prime;
            }
            $prime = next_prime($prime);
        }
        return @out;
    }
```

[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/robert-dicicco/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/robert-dicicco/julia/ch-1.jl), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/robert-dicicco/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/robert-dicicco/raku/ch-1.raku), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/robert-dicicco/ruby/ch-1.rb)

Robert also brings in `is_prime` from `ntheory`, and uses is to check the numbers 1 to 100 for primality. Candidates that pass this test are then passed to a `sum_of_digits` function, where they are split and the individual digits added to an accumulator.

```perl
    use ntheory qw/is_prime/;

    sub sum_of_digits {
      my $num = shift;

      my $digsum = 0;
      my @digarr = split(//,$num);

      foreach( @digarr ) {
        $digsum += $_;
      }

      if (is_prime($digsum)) {
        return $digsum;
      } else {
        return -1;
      }
    }

    my $TARGET = 100;
    my $i = 1;
    my $cnt = 0;

    my @outarr;

    while ( $i < $TARGET ) {

      if(! is_prime($i)){
        $i++;
        next;
      }

      my ($dsum) = sum_of_digits($i);

      if ($dsum > 0 ) {
        push(@outarr, $i);
      }

      $i++;
    }
```


[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/pete-houston/perl/ch-1.pl)

Using external module functions the process can be remarkably compact. Here Pete demonstrates just how compact that can be.

```perl
    use List::Util qw/sum/;
    use Math::Prime::Util qw/is_prime primes/;

    say join ', ', grep { is_prime (sum split //) } @{primes (100)};
```

[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/bruce-gray/perl/ch-1a.sh)

&nbsp;&nbsp;**additional languages:**
[Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/bruce-gray/go/ch-1.go), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/bruce-gray/raku/ch-1.raku)

Bruce gives him a run for the money with his equally concise solution. I'm not going to count characters. You get the idea.

In a side note, of course `Math::Prime::Util` has a `sumdigits` function. What self-respecting number theory package would not? With a little over 200 functions and constants available, its easy to lose one or two, and there always seems to be another way of doing something.

```perl
    use ntheory qw<is_prime sumdigits         primes>;
    my @r = grep { is_prime sumdigits $_ } @{ primes(100) };

    say join ', ', @r;
```


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/roger-bell-west/javascript/ch-1.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/roger-bell-west/kotlin/ch-1.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/roger-bell-west/lua/ch-1.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 158: Prime Cuban Additives](https://blog.firedrake.org/archive/2022/03/The_Weekly_Challenge_158__Prime_Cuban_Additives.html)

Roger dusts off his `genprimes` routine, which finds all primes up to a given value using the [6*k*±1 scheme](https://en.wikipedia.org/wiki/Primality_test#Simple_methods), which reduces trial division by a factor of three. Primes in hand, the digits are summed by dividing down modulo 10, which as we learned from James' experiments is perhaps the fastest way to do this. So good on Roger there.

As any positive number's digit sum will be less than the value itself, when the primes are examined as candidates they are then placed into a hash to lookup the compounded value.

```perl
    sub genprimes {
      my $mx=shift;
      my @primes;
      {
        my %primesh=map {$_ => 1} (2,3);
        for (my $i=6;$i <= $mx+1; $i += 6) {
          foreach my $j ($i-1,$i+1) {
            if ($j <= $mx) {
              $primesh{$j}=1;
            }
          }
        }
        my @q=(2,3,5,7);
        my $p=shift @q;
        my $mr=int(sqrt($mx));
        while ($p <= $mr) {
          if ($primesh{$p}) {
            my $i=$p*$p;
            while ($i <= $mx) {
              delete $primesh{$i};
              $i += $p;
            }
          }
          if (scalar @q < 2) {
            push @q,$q[-1]+4;
            push @q,$q[-1]+2;
          }
          $p=shift @q;
        }
        @primes=sort {$a <=> $b} keys %primesh;
      }
      return \@primes;
    }

    sub digitsum {
      my $s=0;
      my $x=shift;
      while ($x > 0) {
        $s += $x % 10;
        $x = int($x/10);
      }
      return $s;
    }

    sub additiveprimes {
      my $mx=shift;
      my @o;
      my %ps;
      foreach my $q (@{genprimes($mx)}) {
        $ps{$q}=1;
        if (exists $ps{digitsum($q)}) {
          push @o,$q;
        }
      }
      return \@o;
    }
```

[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/peter-campbell-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[All about primes](https://pjcs-pwc.blogspot.com/2022/03/all-about-primes.html)

And finally, here's something new: because we know the range required for the calculations, Peter unrolls the digit summing into a one-line formula adding up the number mod 10, the number over 10 mod 10, and the number over 100 mod 10. This expansion of the loop will actually work  for all numbers up to 999 of course; 991 is the largest additive prime in that range, summing to 19.

```perl
    use Math::Prime::Util 'is_prime';
    my ($j, $s);

    for $j (1 .. 100) {
        next unless is_prime($j);
        $s = $j % 10 + int($j / 10) % 10 + int($j / 100) % 10;
        say qq[$j is an additive prime whose digits sum to $s] if is_prime($s);
    }
```


## Blogs and Additional Submissions in Guest Languages for Task 1:


[**Ali Moradi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/deadmarshal/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/deadmarshal/lua/ch-1.lua), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/deadmarshal/pascal/ch1.pas)


[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/arne-sommer/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/arne-sommer/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Cuban Addition, Primarily with Raku](https://raku-musings.com/cuban-addition.html)


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/athanasius/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/athanasius/raku/ch-1.raku)


[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/colin-crain/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/colin-crain/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Add Another Prime to the Pile - Programming Excursions in Perl and Raku](https://colincrain.com/2022/04/03/add-another-prime-to-the-pile)



[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/dave-jacoby/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[In Our Primes: Weekly Challenge #158 | Committed to Memory](https://jacoby.github.io/2022/03/28/in-our-primes-weekly-challenge-158.html)


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC158 - Additive Primes - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/03/29/pwc158-additive-primes/)



[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/jaldhar-h-vyas/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/jaldhar-h-vyas/raku/ch-1.sh)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 158](https://www.braincells.com/perl/2022/04/perl_weekly_challenge_week_158.html)


[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/lubos-kolouch/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/lubos-kolouch/python/ch-1.py)


[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/mohammad-anwar/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/mohammad-anwar/raku/ch-1.raku)


[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/pokgopun/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/pokgopun/go/ch-1.go)


[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/sgreen/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/sgreen/python/ch-1.py)


&nbsp;&nbsp;**blog writeup:**
[It's a primathon!](https://dev.to/simongreennet/its-a-primathon-5aki)


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/ulrich-rieke/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/ulrich-rieke/cpp/ch-1.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/ulrich-rieke/haskell/ch-1.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/ulrich-rieke/raku/ch-1.raku)


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/wlmb/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 158 – W. Luis Mochán](https://wlmb.github.io/2022/03/28/PWC158/)


------------------------------------------





---

# TASK 2 {#PWC158TASK2}

# First Series Cuban Primes
*Submitted by: Mohammad S Anwar*

Write a script to compute first series Cuban Primes <= 1000. Please refer wikipedia page for more informations.

**Output**
```
    7, 19, 37, 61, 127, 271, 331, 397, 547, 631, 919.

```


## about the solutions
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/alexander-pankoff/perl/ch-2.pl),
[**Ali Moradi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/deadmarshal/perl/ch-2.pl),
[**Andrezgz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/andrezgz/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/arne-sommer/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/athanasius/perl/ch-2.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/bruce-gray/perl/ch-2a.sh),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/jo-37/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/laurent-rosenfeld/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/lubos-kolouch/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/mattneleigh/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/perlboy1967/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/paulo-custodio/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/pete-houston/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/peter-campbell-smith/perl/ch-2.pl),
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/pokgopun/perl/ch-2.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/robert-dicicco/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/sgreen/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/ulrich-rieke/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/wlmb/perl/ch-2.pl)

Unlike the Brazilian Primes we looked at last week, which actually have a tenuous physical connection to their eponymous place-name, the Cuban primes are not Cuban, and have never danced a Rhumba in Havana. Rather they are built on a simple play on words around powers of three: cubic powers.

The Cuban primes are those primes that fit the pattern of being the difference between two cubes, specifically the pattern

(*x*<sup>3</sup> - *y*<sup>3</sup>) / (*x* - *y*)

where *x* = *y* + *k* for some *k*.

Not all cubic differences in a given pattern will be primes, mind you, but those that do make up a given *series* of Cubam primes, with the label of the series the difference between the root values. Successive primes, 2<sup>3</sup>, 3<sup>3</sup>, 4<sup>3</sup>, for example, have a difference of 1 and are hence called the first series Cuban primes. The divisor in the root equation, *x* - *y*, is thus 1.

What we are looking for is thus simplified: prime numbers that can be expressed as the difference between two successive cubes.

In the second and later series, the sequence values are renormalized by dividing by the difference between the root values.

There were 27 submissions for the second task this past week.

## The *Son* and the *Rhumba* — TIMTOWTDI
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/pokgopun/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/athanasius/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/lubos-kolouch/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/colin-crain/perl/ch-2.pl),
[**Ali Moradi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/deadmarshal/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/polettix/perl/ch-2.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/alexander-pankoff/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/wlmb/perl/ch-2.pl), and
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/jo-37/perl/ch-2.pl)

The search for Cuban primes revolves around the collection and detection of primes and, perhaps inexplicably, the centered hexagonal figurate numbers. This connection, of course, it through the cubes that make up the definition. We ended up with quite a lot of self-similarity in the solution pool, with common method centered on creating candidate values from the defining equation — or some transformation —  and then testing them in some manner for primality.

[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/pokgopun/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/pokgopun/go/ch-2.go)

We'll start the survey with the example from noted Go enthusiast PokGoPun. A block is created around an incrementing counter, and the difference is found between the cubes of the counter and an adjacent value. Once we have this, then the result is checked for primality using `is_prime()` from `Math::Prime::Util`.

Of note the defining equation is a polynomial with two variables, *x* and *y*, yet *y* is then further defined by a relationship to *x*. Consequently the initial expression can be rewritten in terms of *x*:

*x*<sup>3</sup> - (*x*-1)<sup>3</sup> = 3*x*<sup>2</sup> + 3*x* + 1

Candidates that are found to be prime are added to a stringified output list and a `redo` statement turns the block into an infinite loop.

I so much prefer this loop construct over an `while (1) {...}` or similar formation, employing a conditional that can never fail. But that's just me. It just seems more direct and to the point, instead of using what amounts to a side-effect.

```perl
    use Math::Prime::Util qw/is_prime/;

    my $n = shift;
    $n = 1000 unless $n && $n =~ /^\d+$/;
    my $o = "";
    #my $i = 2;
    my $i = 1;
    {
        #my $cp = $i**3 - ($i-1)**3;
        my $cp = 3*$i*$i + 3*$i + 1;
        last if $cp > $n;
        $o .= ", $cp" if is_prime($cp);
        $i++;
        redo;
    }
    $o =~ s/^\D+//;
    printf "%s\n", $o;
```


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/athanasius/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/athanasius/raku/ch-2.raku)

The monk brings to light that the reworked equation we saw above:


H(n) = 3n² - 3n + 1

defines the form of the centered hexagonal number *n*. So they proceed to produce those values and then check them for primality. Only the names have been changed, to draw attention to the interesting congruence.


```perl
    for (my ($n, $hex_number) = (1, 0); $hex_number <= $MAX; ++$n)
    {
        my $triple  = 3 * $n;
        $hex_number = $triple * $n - $triple + 1;

        push @cuban_primes, $hex_number if is_prime( $hex_number );
    }
```

Another aspect of their solution is that since the range of solutions is known from the beginning, a sieve of Eratosthenes can be used to efficiently calculate all the primes less than 1000 to create a cross-check validation lookup for their `is_prime()` function.

```perl
    sub is_prime
    {
        # On first call, create a Sieve of Eratosthenes in the range 0 .. $MAX
        state @is_prime = (0, 0, (1) x ($MAX - 1));             # 0, 1, (2 .. $MAX)

        if (state $first_call = 1)
        {
            $first_call = 0;
            for my $n (0 .. $MAX)
            {
                next unless $is_prime[ $n ];                    # Skip non-primes
                for (my $i = 2 * $n; $i <= $MAX; $i += $n)
                {
                    $is_prime[ $i ] = 0;
                }
            }
        }
        my ($n) = @_;

        return $is_prime[ $n ];                                 # Sieve look-up
    }
```

[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/lubos-kolouch/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/lubos-kolouch/python/ch-2.py)

Lubos generalizes a function that applies the basic definition equation with *x* variably offset from *y*. I personally do not feel the apology is warranted, as being good number theorists we of course should remain unsatisfied with just calculating the first series Cubans, and may well wish to move on and analyse the second or continuing series as well. Hard-coding the offset requires a code modification for this, whereas this only needs to be given a new parameter.


```perl
    sub get_eq {

    # warning - waste here, it is ready also for the second series, even though we were not asked for it
    # this is a bad practice and one of the 7 wastes, but I just accept that I am aware of it and leave it.
        my ( $y, $incr ) = @_;

        my $x = $y + $incr;

        return ( $x**3 - $y**3 ) / ( $x - $y );
    }
```


[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/colin-crain/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/colin-crain/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Add Another Prime to the Pile - Programming Excursions in Perl and Raku](https://colincrain.com/2022/04/03/add-another-prime-to-the-pile)

&nbsp;&nbsp;**blog writeup:**
[Cubans In Their Prime - Programming Excursions in Perl and Raku](https://colincrain.com/2022/04/03/cubans-in-their-prime)

Ok, perhaps I was a bit biased in my assessment above, although I do stand by my reasoning — because that is exactly what I did. I started by making myself both a generalized equation routine and a prime validator, producing the requested values, but curious, I quickly got to work looking around at the other related series. It's notable that an intersting property of the defining equation is that it is cyclical mod 3, and as such  for an offset of 3 no values can ever be prime. A survey of the first ten series demonstrates this phenomenon:

```
    series | sequence
    -------+------------------------------------------
        1  | 7 19 37 61 127 271 331 397 547 631 919
        2  | 13 109 193 433 769
        3  |
        4  | 31 79 151 367
        5  | 43 67 97 223 277 337 727 823
        6  |
        7  | 73 103 139 181 229 283 409 643 733 829
        8  | 163 379 523 691 883
        9  |
       10  | 457 613 997
```

```perl
    sub nth_series_cubic ( $dif ) {
        my @c;
        my $x;
        for my $y ( 1..100 ) {
            $x = $y + $dif;
            push @c, ($x**3 - $y**3) / ($x - $y) ;
        }
        return @c;
    }
```

[**Ali Moradi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/deadmarshal/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/deadmarshal/lua/ch-2.lua), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/deadmarshal/pascal/ch2.pas)

Of course such self-induced complexity is not required. Ali keeps his eye on the ball:  focusing on the task as requested, incrementally slotting values into the equation until the maximum value of 1000 is exceeded.

```perl
    use Math::Prime::Util qw(is_prime);

    sub cuban_primes {
      my ($n) = @_;
      my @primes;
      for (my $i = 1; ; ++$i) {
        my $p = 3 * $i * ($i + 1) + 1;
        if (is_prime($p)) {
          last if $p > $n;
          push @primes, $p;
        }
      }
      return @primes;
    }

    print "$_ " foreach cuban_primes(1000);
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC158 - First Series Cuban Primes - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/03/30/pwc158-first-series-cuban-primes/)

Flavio, using the same approach some how seems  to manage to make it even more compact.

Again, I'm not counting characters and this isn't a competition.

```perl
    use ntheory 'is_prime';

    my $M = shift // 1000;
    my @cubans;
    my $y = 1;
    while ((my $p = 3 * $y * ($y + 1) + 1) <= $M) {
       push @cubans, $p if is_prime($p);
       ++$y;
    }
    say join(', ', @cubans), '.';
```

[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/alexander-pankoff/perl/ch-2.pl)

There are multiple interesting connections between the [centered hexagonal numbers](https://en.wikipedia.org/wiki/Centered_hexagonal_number) and cubes, notably that the sum of the first *n* values for these numbers sum to *n*<sup>3</sup>. This follows from the fact that if a given  centered hexagonal number is the difference between two sequential cubes, adding the value to the smaller cube will yield this larger. This difference, among the figurate numbers, is known as the [gnomon](https://en.wikipedia.org/wiki/Figurate_number#Gnomon). The process of reduction can then be repeated down to 1 to demonstrate the complete pattern.

Alexander also chooses the centered hexagonal phrasing for the central equation.

```perl
    sub cuban_primes($max = 1000) {

        my @cubans    = ();
        my $i         = 1;
        my $candidate = 0;
        while ( $candidate <= $max ) {
            $candidate = centered_hexagonal_number($i);
            push @cubans, $candidate if is_prime($candidate);
            $i += 1;
        }
        return @cubans;

    }

    sub centered_hexagonal_number($y) {
        return 3 * $y * $y + 3 * $y + 1;
    }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/wlmb/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 158 – W. Luis Mochán](https://wlmb.github.io/2022/03/28/PWC158/)

Luis uses a different equation tranformation, that the Cuban numbers are primes of the form

*p* = 1 + 3*k*(*k* + 1) for some *k*

He then solves

(*x* + 1)<sup>3</sup> - *x*<sup>3</sup> = N

to yield an maximum result value within an upper boundary *N* of

max *k* = (-3 + √3 √(4*N* - 1)) / 6

Putting these together using the range 1 to the maximum *k* produces the 17 possible values for the Cubans, 11 of which are prime.

```perl
    use Math::Prime::Util qw(is_prime);
    die "Usage: ./ch-2.pl N\n\tto find cuban primes up to N" unless @ARGV;
    my $N=shift;
    die "N should be positive" unless $N>0;
    my $bound=(-3+sqrt(3)*sqrt(4*$N-1))/6; # Solve (x+1)^3-x^3=N
    say "The cuban primes up to $N are ",
        join ", ", grep {is_prime $_} map {1+3*$_*($_+1)} (1..$bound);
```




[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/jo-37/perl/ch-2.pl)

Finally, we'll return to Jorg, who brings us another coroutine machine to study. This one makes generalized Cuban primes in any specified series that is not a multiple of 3 (as we have previously stated that these do not exist). Here the coroutine state keeps an iterator that is appied to the the equation

*p* = 3*y*<sup>2</sup> + 3*ny* + *n*<sup>2</sup>

which can then be used to find what ends up being the gnomon between the centered hexagonal numbers:

**P**<sub>*y* + 1</sub> = **P**<sub>*y*</sub> + 3 (2*y* + *n* + 1)

The coroutine keeps track of the previous centered hexagonal and the index and adds the gnomon. If the result is prime, *¡Viva la Cuba!*



```perl
    use Coro::Generator;
    use Math::Prime::Util 'is_prime';
    use Syntax::Keyword::Gather;
    use experimental 'signatures';

    ### Input and Output
    say for cuban_primes_below($series, shift);


    ### Implementation
    # Calculating generalized series of cuban primes, controlled by
    # parameter n.  The first and second series are produced by values 1 and
    # 2 respectively.  Restricting to y > 0.
    # The relation p = (x³ - y³) / (x - y), x = y + n can easily be
    # transformed into
    # p = 3 y² + 3 n y + n².
    # A simple calculation reveals
    # p(y + 1) = p(y) + 3 (2 y + n + 1)
    # which gives a nice iterative formula for p starting with y = 0
    # and p = n².
    sub cuban_primes_below ($n, $limit) {
        # There is no n-th series if n is a multiple of 3.
        die 'no such series' unless $n % 3;

        # Build a generator for cuban primes by checking if p is prime.
        my $cp_i = generator {
            my ($y, $p) = (0, $n ** 2);
            while () {
                $p += 3 * (2 * $y++ + $n + 1);
                yield $p if is_prime $p;
            }
        };

        # Collect cuban primes below the given limit.
        gather {
            my $cp;
            take $cp while ($cp = $cp_i->()) < $limit
        };
        # Déjà vu?
        # Déjà vu!
    }
```


## Blogs and Additional Submissions in Guest Languages for Task 2:


[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/arne-sommer/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/arne-sommer/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Cuban Addition, Primarily with Raku](https://raku-musings.com/cuban-addition.html)


[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/bruce-gray/perl/ch-2a.sh)

&nbsp;&nbsp;**additional languages:**
[Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/bruce-gray/go/ch-2.go), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/bruce-gray/raku/ch-2.raku)


[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/dave-jacoby/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[In Our Primes: Weekly Challenge #158 | Committed to Memory](https://jacoby.github.io/2022/03/28/in-our-primes-weekly-challenge-158.html)


[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/jaldhar-h-vyas/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/jaldhar-h-vyas/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 158](https://www.braincells.com/perl/2022/04/perl_weekly_challenge_week_158.html)


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/james-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #158](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-158/james-smith)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/laurent-rosenfeld/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/laurent-rosenfeld/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 158: Additive Primes and Cuban Primes](http://blogs.perl.org/users/laurent_r/2022/03/perl-weekly-challenge-158-additive-primes-and-cuban-primes.html)


[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/peter-campbell-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[All about primes](https://pjcs-pwc.blogspot.com/2022/03/all-about-primes.html)


[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/robert-dicicco/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/robert-dicicco/julia/ch-2.jl), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/robert-dicicco/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/robert-dicicco/raku/ch-2.raku), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/robert-dicicco/ruby/ch-2.rb)


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/roger-bell-west/javascript/ch-2.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/roger-bell-west/kotlin/ch-2.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/roger-bell-west/lua/ch-2.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/roger-bell-west/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/roger-bell-west/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 158: Prime Cuban Additives](https://blog.firedrake.org/archive/2022/03/The_Weekly_Challenge_158__Prime_Cuban_Additives.html)


[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/sgreen/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/sgreen/python/ch-2.py)


&nbsp;&nbsp;**blog writeup:**
[It's a primathon!](https://dev.to/simongreennet/its-a-primathon-5aki)


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/ulrich-rieke/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/ulrich-rieke/cpp/ch-2.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/ulrich-rieke/haskell/ch-2.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-158/ulrich-rieke/raku/ch-2.raku)


------------------------------------------

---

<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>

<center>
<h1 id="PWC158BLOGS">_________ THE BLOG PAGES _________</h1>
</center>


---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, by some miracle I somehow continue to maintain my bearings.**

**Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your Unquenchable *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC158BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *FOLLOW* these *BLOG* *LINKS*:

**( ...*don't think, trust your training, you're in the zone, just do it ...* )**


**Arne Sommer**

 * [Cuban Addition, Primarily with Raku](https://raku-musings.com/cuban-addition.html) ( *Perl & Raku* )

**Colin Crain**

 * [Add Another Prime to the Pile - Programming Excursions in Perl and Raku](https://colincrain.com/2022/04/03/add-another-prime-to-the-pile) ( *Perl & Raku* )
 * [Cubans In Their Prime - Programming Excursions in Perl and Raku](https://colincrain.com/2022/04/03/cubans-in-their-prime) ( *Perl & Raku* )

**Dave Jacoby**

 * [In Our Primes: Weekly Challenge #158 | Committed to Memory](https://jacoby.github.io/2022/03/28/in-our-primes-weekly-challenge-158.html) ( *Perl* )

**Flavio Poletti**

 * [PWC158 - Additive Primes - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/03/29/pwc158-additive-primes/) ( *Perl & Raku* )
 * [PWC158 - First Series Cuban Primes - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/03/30/pwc158-first-series-cuban-primes/) ( *Perl & Raku* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 158](https://www.braincells.com/perl/2022/04/perl_weekly_challenge_week_158.html) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #158](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-158/james-smith) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 158: Additive Primes and Cuban Primes](http://blogs.perl.org/users/laurent_r/2022/03/perl-weekly-challenge-158-additive-primes-and-cuban-primes.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 158: to be prime or not to be prime – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/03/28/PerlWeeklyChallenge158.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 158: to be prime or not to be prime – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/03/28/PerlWeeklyChallenge158.html#task1plperl) ( *PL/PERL* )
 * [Perl Weekly Challenge 158: to be prime or not to be prime – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/03/28/PerlWeeklyChallenge158.html#task1plpgsql) ( *PL/PgSQL* )

**Peter Campbell Smith**

 * [All about primes](https://pjcs-pwc.blogspot.com/2022/03/all-about-primes.html) ( *Perl* )

**Roger Bell_West**

 * [RogerBW's Blog: The Weekly Challenge 158: Prime Cuban Additives](https://blog.firedrake.org/archive/2022/03/The_Weekly_Challenge_158__Prime_Cuban_Additives.html) ( *Perl & Raku* )

**Simon Green**

 * [It's a primathon!](https://dev.to/simongreennet/its-a-primathon-5aki) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 158 – W. Luis Mochán](https://wlmb.github.io/2022/03/28/PWC158/) ( *Perl* )
