---
author:       Colin Crain
date:         2022-04-11T00:00:00
description:  "Colin Crain › Perl Weekly Review #155"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #155"
image:        images/blog/p5-review-challenge-155.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-154/).* )

Welcome to the Perl review pages for **Week 155** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

before we begin, you may wish to revisit either the pages for the [**original tasks**](/blog/perl-weekly-challenge-155/) or the summary [**recap**](/blog/recap-challenge-155/) of the challenge. But don't worry about it, the challenge text will be repeated and presented as we progress from task to task.

Oh, and one more thing before we get started:


### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please feel free to email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

<div align= center><strong>...So finally, without further ado...</strong></div>

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC155TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC155TASK2)   &nbsp;  &nbsp;  &nbsp;       •   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC155BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC155TASK1}

# Fortunate Numbers
*Submitted by: Mohammad S Anwar*

Write a script to produce first 8 Fortunate Numbers (unique and sorted).

According to Wikipedia

> A Fortunate number, named after Reo Fortune, is the smallest integer m > 1 such that, for a given positive integer n, pn# + m is a prime number, where the primorial pn# is the product of the first n prime numbers.

**Expected Output**
```
  3, 5, 7, 13, 17, 19, 23, 37
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/adam-russell/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/athanasius/perl/ch-1.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/bruce-gray/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/colin-crain/perl/ch-1.pl),
[**Daniel Pfeiffer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/daniel-pfeiffer/perl/ch-1a.sh),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/jo-37/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/lubos-kolouch/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/mattneleigh/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/perlboy1967/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/pete-houston/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/peter-campbell-smith/perl/ch-1.pl),
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/pokgopun/perl/ch-1.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/robert-dicicco/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/roger-bell-west/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/ulrich-rieke/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/wlmb/perl/ch-1.pl)

The primorial is a function analogous to the factorial, created by one [Harvey Dubner](https://en.wikipedia.org/wiki/Harvey_Dubner), with the aim of manufacturing large primes. In the factorial we compute the product of positive integers up to and including the number, and in the primorial we have an associated construction using the sequence of the primes instead of the integers, so p(n) is the product of the first *n* primes.<sup>1</sup>

The primorials, as the product of lists of prime numbers, can be looked as numbers that when decomposed yield that particular list of prime factors. As the so-called "squarefree" numbers, that we first examined in PWC150, are those numbers whose prime decomposition contains no exponents greater than 1, the primorial prime lists can be considered to be complete squarefree prime decompositions, and the resultant primorial the largest number that can be composed from a certain number of factors, that of the index of the primorial.

Put another way, if we can only use each prime once, then every prime used once will yield the largest composite number possible under that constraint.

Dubner was studying these numbers, specifically the related numbers of the form p(*n*) - 1 in search of large primes. This is analogous to  the construction of Mersenne primes, which have form 2<sup>*n*</sup>-1 for some *n*. As it works out quite a few numbers constructed this way are prime, as is also the case for p(*n*) + 1.

But excluding these well-studied adjacent values, how far would we have to go to find the next-higher prime? This is the question put forward by [Reo Fortune](https://en.wikipedia.org/wiki/Reo_Fortune). The positive deltas required to go forward from a primorial to the next prime number, skipping 1 as an option, are the Fortunate numbers.

The Fortunate numbers appear to themselves be all prime, and this was conjectured by Fortune but remains unproven.


---

<sup>1</sup> There is an alternate definition for a primorial sequence as the product of all primes less than or equal to *n*; this contains the same primorial values with duplications until the next prime number is reached. For all intents and purposes when we are collecting unique primorial terms the sequences are equivalent.

---

There were 25 submissions for the first task this past week.

## HONING the DELTAS, SETTING out to SEA
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/duncan-c-white/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/dave-jacoby/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/jo-37/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/e-choroba/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/wlmb/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/athanasius/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/jaldhar-h-vyas/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/pete-houston/perl/ch-1.pl), and
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/polettix/perl/ch-1.pl)

There was much discussion on the precise meaning of the phrase "first 8 Fortunate Numbers (unique and sorted)" and how that should apply to the target goal. We are given an expected output but less guidance on how to actually get there.

As it works out, the Fortunate numbers do not appear in an ordered sequence, and due to the essential unpredictability of the underlying prime numbers we cannot predict the variaation in the progression of the Fortunate numbers. We are, however, able to derive some relevant properties, which we'll get to. We also have the prime number theorem to tell us that prime numbers, although ultimately unpredictable, do occur with lessening frequency as the values get larger, so statistically in does make sense for the Fortunate numbers to generally increase as the deltas grow to find the next prime. But again, the sequence is not strictly ascending.

The preferred reading, then, that produced the given expected result was to gather the first 8 distinct values and sort them: (3, 5, 7, 13, 17, 19, 23, 37). This rephrasing is slightly different, and less absolute, than the directive as given. Expanding the techniques to allow for larger sequences did require some tinkering, as we shall see.


[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/duncan-c-white/perl/ch-1.pl)

Duncan starts off with a deep dive into dissecting the terms of the challenge, eventually deciding, as detailed above, on collecting the first *n* discrete terms and sorting them.

I think it's illustrative to reproduce his well-reasoned notes here:

> Note that the Wikipedia article is not clear whether the Nth Fortunate number is the smallest integer m>1 s.t. pN# + m is prime, or whether that Nth value found is **A* Fortunate number, but the Fortunate numbers themselves are sorted and have duplicates removed - and the Nth Fortunate number is the Nth term of the sorted and deduped list.  I think we want the latter, because the unsorted Fortunate numbers corresponding to pn# for n=1..8 are 3, 5, 7, 13, 23, 17, 19, 23, i.e. they are not sorted and contain a duplicate of 23.
>
> Once you sort and de-dupe these, you get the desired sequence
>
> 3, 5, 7, 13, 17, 19, 23, 37
>
> HOWEVER, it's not obvious how many unsorted Fortunate numbers we have to calculate to know that we've found the first N sorted ones.  Let's keep going until we have found N distinct Fortunate numbers and then sort them. Is it possible for a later unsorted Fortunate number to be smaller than one of the ones we've # found so far?  Yes, blast it: The output of this program for N=1 is
>
> 3,5,7,13,17,19,23,37,61,67,71
>
> and for N=12 is
>
> 3,5,7,13,17,19,23,37,47,61,67,71
>
> (showing that the 12th distinct value found is 47, smaller than the 9th..11th distinct value found)

I came to very much the same conclusions myself.

The processing is broken down into two parts: first constructing the primorial, then testing selected following values for primality. Primes are identified using an `is_prime()` validation function, and `smallest_prime_above()` starts testing values 2 above the input and incrementing from there.

```perl
    #
    # my $f = smallest_prime_above( $x );
    #    Find and return the first prime number above $x+1
    #    Couldn't use my MakePrimes module for this, as $x
    #    tends to be huge (as it's typically called with a primorial)
    #    and we test a small dense sequence of numbers
    #    from x+2..x+m for primeness.  there's no point computing
    #    all primes in the whole range 1...x+m
    #
    fun smallest_prime_above( $x )
    {
        my $m;
        for( $m = 2; ! isprime($x+$m); $m++ )
        {
        }
        return $m;
    }


    my $prime = 2;

    while( $nf < $n )
    {
        $primorial *= $prime;    # primorial of the first few primes
        my $f = smallest_prime_above( $primorial );
        say "debug: prime $prime, primorial $primorial, fortunate no $f, nbefore $nf" if $debug;
        $nf++ unless $fortunate{$f}++;
        $prime = next_prime($prime);
    }

    say join( ',', sort { $a <=> $b } keys %fortunate );
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/dave-jacoby/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[I Ain’t No Fortunate One: Weekly Challege #155 | Committed to Memory](https://jacoby.github.io/2022/03/07/i-aint-no-fortunate-one-weekly-challege-155.html)

After identifying the challenge number, 155, as both [deficient](https://en.wikipedia.org/wiki/Deficient_number) and [odious](https://en.wikipedia.org/wiki/Odious_number), as well as being the product of the two primes 5 and 31, Dave gets down to business.

One of the problems in collecting distinct terms up to a limit is in knowing how many terms to generate. As such we can't wait until the end to do the filtration — we need to keep a current, continually updated count going. To accomplish this Dave brings in `uniq` from `List::Util`, applying it to the growing output list as every new term is calculated. We will always try and add the term to the list; whether it it actually winds up included, or was already present, is another matter.

```perl
    use List::Util qw{ product uniq };

    OUTER: while ( $c < 40 && scalar @fortune < 8 ) {
        $c++;
        if ( is_prime($c) ) {
            push @prime, $c;
            my $p = product @prime;
            my $d = 1;
            while ( $d < 50 ) {
                $d++;
                my $f  = $p + $d;
                my $is = is_prime($f);
                if ($is) {
                    # the non-sorted, non-unique list of the first
                    # eight Fortunate numbers contains 23 twice, so
                    # 1) we need to accomodate that possibility by
                    #   starting each $d back at 2, and
                    # 2) we need to remove it before the outer while
                    #   loop accounts for it
                    # so that's why $d=1 in the while loop and
                    # why we don't just push $d
                    @fortune = uniq sort { $a <=> $b } @fortune, $d;
                    next OUTER;
                }
            }
        }
    }
    say 'FORTUNATE NUMBERS: ' . join ', ', @fortune;
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/jo-37/perl/ch-1.pl)

Jorg has been exploring the `Coro::Generator` coroutine module for some time now, and here creates a coroutine that maintains its own internal state and generates Fortunate numbers on demand. In this simple example the coroutine acts identically to an iterator closed around its internal conditions.

To create the Fortunate numbers, he uses the two functions `next_prime()` and `is_prime()` from `Math::Prime::Util` to greatly simplify and speed-up the process. We generate the next primorial from the previous, then start testing values from two above the primorial for primality. We return the delta, or `yield` the cpu in coroutine-speak, when we find a prime.

```perl
    use bigint;
    use Math::Prime::Util qw(next_prime is_prime);
    use Coro::Generator;

    main: {
        my $fn = gen_fortunate_numbers();
        my %fn;
        # Collect the first N distinct fortunate numbers.
        until (keys %fn == $ARGV[0]) {
            $fn{$fn->()} = undef;
        }
        # Present in ascending order.
        say for sort {$a <=> $b} keys %fn;
    }

    # Build a generator for fortunate numbers.  The resulting sequence is
    # neither sorted nor does it consist of distinct values only.
    sub gen_fortunate_numbers {
        my $pn = 1;
        my $p = 1;

        generator {
            while () {
                $pn *= ($p = next_prime($p));
                for (my $m = 2;; $m++) {
                    yield($m), last if is_prime($pn + $m);
                }
            }
        }
    }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/e-choroba/perl/ch-1.pl)

Of course followers of these pages will be aware that we have an excellent resource available when manipulating prime numbers, `Math::Prime::Util` — also known as `ntheory`, for "number theory". If it sounds perfect for the job, that would be because it really is, having hundreds of functions tailored specifically for the purpose.

Here Choroba uses three functions: `nth_prime()`, `next_prime()`, and `primes()` to provide necessary values, along with `product()` from `List::Util`.

To construct a Fortunate number, he first computes the primorial, having collected a list of a certain number of ascending prime factors using `nth_prime` and then `primes`. The product of these is the primorial. Then we can request the `next_prime()` after the value of the primorial plus 1, and obtain the Fortunate number by calculating the difference.

```perl
    use List::Util qw{ product };
    use Math::Prime::Util qw{ nth_prime next_prime primes };

    sub fortunate_number {
        my ($n) = @_;
        my $p    = nth_prime($n);
        my $prod = product(@{ primes($p) });
        my $next = next_prime($prod + 1);
        return $next - $prod
    }

    sub fortunate_numbers {
        my ($count) = @_;
        my $i = 1;
        my %f;
        undef $f{ fortunate_number($i++) } while $count > keys %f;
        return sort { $a <=> $b } keys %f
    }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/wlmb/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 155 – W. Luis Mochán](https://wlmb.github.io/2022/03/07/PWC155/)

Luis starts off with a one-liner, again bringing in `Math::Prime::Util` to do the heavy lifting.

```perl
    perl -MMath::Prime::Util=pn_primorial,next_prime -E '
    ++$f{next_prime(($p=pn_primorial(++$i))+1)-$p} while(keys %f<8);
    say join " ", sort {$a<=>$b} keys %f;'
```

However he notes right off the bat that this will only work for producing 8 distinct values. To remedy this after a fashion he creates another version with user configurable options for the number of distinct fortunate values desired and the number of Pisanos to consider. Then we can look ahead until we are comfortable with the output. Exactly how we will become comfortable is left as an exercise to the user.

```perl
    use bigint;
    use Math::Prime::Util qw(next_prime pn_primorial);
    use Getopt::Lazy
        'help|h|?' => 'Show help screen',
        'Nf=i' => '*Number of Fortunates to generate',
        'Np=i' => 'Number of primorials to use',
        -summary => 'Generate lowest distinct fortunate numbers',
        -usage => '%c %o',
        ;
    GetOptions;
    show_help, exit if $help;
    $Nf//=8;
    $Np//=9;
    my @primorial=map {pn_primorial($_)} (1..$Np) ; # start primorials in first prime
    my @fortunate;
    foreach(@primorial){
        push @fortunate, next_prime($_+1)-$_;
    }
    my %fortunate;
    @fortunate{@fortunate}=(1)x@fortunate;
    die "Didn't find enough disctinct Fortunate numbers; please increase Np\n"
            unless keys %fortunate>=$Nf;
    say "The $Nf lowest distinct Fortunate numbers found are";
    say join " ", @{[sort {$a<=>$b} keys %fortunate]}[0..$Nf-1];
```


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/athanasius/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/athanasius/raku/ch-1.raku)

The monk brings us an interesting analysis on the nature of how and why the Fortunate numbers are generated out-of-order. In my own solution, I had already come to the realization that since the primorials all contain the smallest prime factor 2, then they are all even and of course divisible by 2. Hence adding 2 to any primorial is also going to be divisible by 2 and so no Fortunate number will be 2, so we can start looking at 3.

So far so good, but Athanasius extends this reasoning:

>The answer to this problem arises from the following observation: a primorial
pn# = 2 x 3 x 5 x ... x pn, from which it follows that:

  - pn# + 2 is divisible by 2, and so not prime;
  - pn# + 3 is divisible by 3, and so not prime;
  - and so on up to pn;
  - moreover, pn# + c, where c is a composite number with all prime factors in
    the set { 2, 3, ... pn }, will also be divisible by c's prime factors and
    so not prime.

>Also, p#n + 1 may be prime, but is excluded because it is required that m > 1.
Hence, the smallest possible value of m is pn + 1.

>Let m_max be the nth entry in the sorted list of unique Fortunate numbers found
so far. As the search proceeds, the value of pn increases. When pn becomes as
large as m_max, it is impossible for the next value of m to be less than m_max,
so the search can safely end.

This leads directly to Fortune's conjecture that all Fortunate numbers are prime, but this has not actually been proven. So it appears that we can show that 11 will never be a Fortunate number value past the 5th position, as 11 will from that point forward be a factor of the underlying primorial, so the primorial + 11 will also be divisible by 11.

Hmm. Good stuff. Glad to finally have an answer for that. Make sense.

```perl
    MAIN:
    {
        my $target     =  parse_command_line();
        my $prime      =  2;
        my $primorial  =  Math::BigInt->new( $prime );
        my @fortunates = (3);
        my $count      =  0;

        until ($count >= $target && $prime >= $fortunates[ $target - 1 ])
        {
            $prime      = next_prime( $prime );
            $primorial *= $prime;

            my $m  = $prime + 2;
               $m += 2 until is_prime( $primorial + $m );

            if (none { $m == $_ } @fortunates)                 # Discard duplicates
            {
                ++$count;
                push @fortunates, $m;
                @fortunates = sort { $a <=> $b } @fortunates;  # Keep sorted
            }
        }

        printf "The first $target Fortunate Numbers (unique and sorted):\n%s\n",
                join ', ', @fortunates[ 0 .. $target - 1 ];
    }
```

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/jaldhar-h-vyas/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/jaldhar-h-vyas/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 155](https://www.braincells.com/perl/2022/03/perl_weekly_challenge_week_155.html)

Jaldhar brings his own `isPrime()` and `nextPrime()` functions to the table for his solution. He also brings a novel method of ensuring that newly added Fortunate numbers haven't already been logged, by installing a conditional based on grepping the existing list into the validation clause.

```perl
    while (scalar @fortunates < 8) {
        my $pn = nextPrime(1);

        for my $j (1 .. $i++) {
            $pn *= nextPrime();
        }

        my $m = $pn + 1;

        while($m++) {
            if (isPrime($m) && !grep { $_ == $m - $pn } @fortunates) {
                push @fortunates, $m - $pn;
                last;
            }
        }
    }

    say join q{, }, sort {$a <=> $b} @fortunates;
```

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/pete-houston/perl/ch-1.pl)

The `Math::Prime::Util` module does not provide a function for directly producing Fortunate numbers, but it does come pretty close. Using two routines borrowed from that venerable tomb, for incrementing index values Pete requests the primorial using `pn_primorial()`, then the `next_prime()` above the primorial. The difference is the Fortunate number, which is keyed into a hash. When enough numbers have been hashed, the keys are dumped and sorted to produce the output list.

Almost, but not quite a one-stop solution.

```perl
    use Math::Prime::Util qw/pn_primorial next_prime/;

    my %fortunate;
    my $n   = 1;
    my $max = shift // 8;

    while ($max > keys %fortunate) {
        my $primorial = pn_primorial ($n);
        my $m = next_prime ($primorial + 1) - $primorial;
        $fortunate{$m} = 1;
        $n++;
    }

    print join (', ', sort { $a <=> $b } keys %fortunate) . "\n";
```


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC155 - Fortunate Numbers - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/03/09/pwc155-fortunate-numbers/)

&nbsp;&nbsp;**blog writeup:**
[PWC155 - Pisano Period - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/03/10/pwc155-pisano-period/)

Finally, we look to Flavio's offering.

The `isprime()` function from `Math::Prime::Util` is actually a collection of algorithms tailored to quickly determine whether a given value is *not* prime without going through trial-and-error. From there it has two true cases, for "very likely prime" and "proven to be prime". The function has been proven for all integers up to 2<sup>64</sup> so we're in good hands.

In order to search for the larger Fortunate numbers we really need such a thing, along with the `Math::BigInt` library, as the primorials get huge quickly. The `bigint` pragma implements this silently, taking care of all the behind the scenes bother with instantiating objects.

What's different here is that Flavio sets up a  a look-ahead check to make sure he has processed enough fortunate numbers to satisfy the criterium that the lower limit for the *n*-th Fortunate number is the *n*-th prime number. This is a formalization of what the venerable monk Athanasius was talking about earlier.

With safeguards in place to ensure that the final list of distinct, sorted Fortunate numbers does not have any overlooked values, we can finally put this thing to rest.

```perl
    use ntheory qw< is_prime next_prime >;
    use List::MoreUtils 'uniq';
    use bigint;

    say join ', ', first_fortunate_numbers(shift || 8);

    sub first_fortunate_numbers ($n) {
       my $it = fortunate_numbers_it();
       my (@cleared, @seen);
       while (@cleared < $n) {
          my ($prime, $fn) = $it->();
          @seen = uniq sort { $a <=> $b } (@seen, $fn);
          push @cleared, shift @seen while @seen && $seen[0] < $prime;
       }
       return @cleared[0 .. $n - 1];
    }

    sub fortunate_numbers_it {
       my $primorial = 1;
       my $prime = 1; # bear with me please...
       return sub {
          $prime = next_prime($prime);
          $primorial *= $prime;
          return (2, 3) if $prime == 2;
          my $n = $prime;
          while ('necessary') {
             $n += 2;
             return ($prime, $n) if is_prime($primorial + $n);
          }
       };
    }
```

## Blogs and Additional Submissions in Guest Languages for Task 1:


[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/awk/ch-1.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/bash/ch-1.sh), [Basic](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/basic/ch-1.bas), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/bc/ch-1.bc), [Befunge-93](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/befunge-93/ch-1.bf93), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/c/ch-1.c), [Cobol](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/cobol/ch-1.cb), [Csh](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/csh/ch-1.csh), [Erlang](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/erlang/ch-1.erl), [Forth](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/forth/ch-1.fs), [Fortran](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/fortran/ch-1.f90), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/go/ch-1.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/java/ch-1.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/lua/ch-1.lua), [M4](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/m4/ch-1.m4), [Mmix](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/mmix/ch-1.mms), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/node/ch-1.js), [Ocaml](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/ocaml/ch-1.ml), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/pascal/ch-1.p), [Php](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/php/ch-1.php), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/python/ch-1.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/r/ch-1.r), [Rexx](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/rexx/ch-1.rexx), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/ruby/ch-1.rb), [Scheme](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/scheme/ch-1.scm), [Sed](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/sed/ch-1.sed), [Sql](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/sql/ch-1.sql), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/tcl/ch-1.tcl)


[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/adam-russell/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Fortunate Pisano — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/03/13)


[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/bruce-gray/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/bruce-gray/julia/ch-1.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/bruce-gray/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[I say Potato, you say Pisano](http://blogs.perl.org/users/bruce_gray/2022/03/twc_155_i_say_potato_you_say_pisano.html)


[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/cheok-yin-fung/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[CY's Take on The Weekly Challenge #155 ](https://E7-87-83.github.io/coding/challenge_155.html)


[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/colin-crain/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/colin-crain/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[The Fortunate Son - Programming Excursions in Perl and Raku](https://colincrain.com/2022/03/13/the-fortunate-son/)

&nbsp;&nbsp;**blog writeup:**
[Pisa Party - Programming Excursions in Perl and Raku](https://colincrain.com/2022/03/13/pisa-party/)


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/james-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #155](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-155/james-smith)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/laurent-rosenfeld/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 155: Fortunate Numbers and Pisano Periods](http://blogs.perl.org/users/laurent_r/2022/03/perl-weekly-challenge-155-fortunate-numbers-and-pisano-periods.html)


[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/lubos-kolouch/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/lubos-kolouch/python/ch-1.py)


[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/peter-campbell-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[BigInt Week](https://pjcs-pwc.blogspot.com/2022/03/bigint-week.html)


[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/pokgopun/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/pokgopun/go/ch-1.go)


[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/robert-dicicco/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/robert-dicicco/ruby/ch-1.rb)


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/roger-bell-west/javascript/ch-1.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/roger-bell-west/kotlin/ch-1.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/roger-bell-west/lua/ch-1.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 155: Pisano's Fortune](https://blog.firedrake.org/archive/2022/03/The_Weekly_Challenge_155__Pisano_s_Fortune.html)


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/ulrich-rieke/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/ulrich-rieke/cpp/ch-1.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/ulrich-rieke/haskell/ch-1.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/ulrich-rieke/raku/ch-1.raku)


------------------------------------------





---

# TASK 2 {#PWC155TASK2}

# Pisano Period
*Submitted by: Mohammad S Anwar*
Write a script to find the period of the 3rd Pisano Period.

In number theory, the nth Pisano period, written as π(n), is the period with which the sequence of Fibonacci numbers taken modulo n repeats.

The Fibonacci numbers are the numbers in the integer sequence:

```
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,
        233, 377, 610, 987, 1597, 2584, 4181, 6765, ...
```

For any integer n, the sequence of Fibonacci numbers F(i) taken modulo n is periodic. The Pisano period, denoted π(n), is the value of the period of this sequence. For example, the sequence of Fibonacci numbers modulo 3 begins:

```
    0, 1, 1, 2, 0, 2, 2, 1,
    0, 1, 1, 2, 0, 2, 2, 1,
    0, 1, 1, 2, 0, 2, 2, 1, ...
```

This sequence has period 8, so π(3) = 8.


## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/adam-russell/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/athanasius/perl/ch-2.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/bruce-gray/perl/ch-2_very_fast.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/jo-37/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/laurent-rosenfeld/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/lubos-kolouch/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/mattneleigh/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/perlboy1967/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/pete-houston/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/peter-campbell-smith/perl/ch-2.pl),
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/pokgopun/perl/ch-2.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/robert-dicicco/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/roger-bell-west/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/ulrich-rieke/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/wlmb/perl/ch-2.pl)

The proof of the primary assertion of our challenge description — that the Fibonacci sequence is periodic for any modulo *n* — is not easily summarized, and suffice to say for our purposes it can be assumed to be a true statement. But then again difficulty doesn't generally stop me from trying, so here it goes:

The proof of the primary assertion of our challenge description was made in 1960 by D.D.Wall at IBM, as a side-effect from a search for random numbers. He writes:

> The series repeats because there are only a finite number m<sup>2</sup> of pairs of terms possible, and the recurrence of a pair results in recurrence of all possible terms. From the defining relation we have 𝑓<sub>*n*-1</sub> = 𝑓<sub>*n*+1</sub> - 𝑓<sub>*n*</sub>, so if 𝑓<sub>*t*+1</sub> ≡ 𝑓<sub>*s*+1</sub> and 𝑓<sub>*t*</sub> ≡ 𝑓<sub>*s*</sub> (mod *m*), then 𝑓<sub>*t*-1</sub> ≡ 𝑓<sub>*s*-1</sub> …. 𝑓<sub>*t*-*s*+1</sub> ≡ 𝑓<sub>1</sub> and 𝑓<sub>*t*-*s*</sub> ≡ 𝑓<sub>0</sub>, so that the series is simply periodic.

— D.D.Wall *The American Mathematical Monthly*
Vol. 67, No. 6 (Jun. - Jul., 1960), pp. 525-532 (8 pages)

What this states is that due to the recurrence relation of the Fibonacci numbers, that any sequential pair of numbers will have two values modulo *m*, and so we have *m* × *m* distinct pairs of values available. By what is known as the [Pigeonhole principle](https://en.wikipedia.org/wiki/Pigeonhole_principle), given enough pairs one will repeat. He calls these positions *s* and *t*.

Then, by rephrasing the recurrence relation reductively, that the lesser term, F<sub>*n*-1</sub> is the difference of the terms following: F<sub>*n*+1</sub> - F<sub>*n*</sub>, then we can conclude a pair of modulo terms will produce the same previous term, and this process can be repeated downward to arrive at the initial conditions. Thus the recurrence of a modulo pair impies the previous value will also be repeated, and this pattern can be traced back to the root.

He then goes on to prove that the first repeating digit will by 0, and that the indices of the repeating 0s will recur arithmetically in multiples of the original, and that remarkably for moduli of 3 or more that the period is even. A number of additional lemmas are also explored.

There were 24 submissions for the second task this past week.

## WHEELS within WHEELS, rotated a VARIETY of WAYS
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/peter-campbell-smith/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/roger-bell-west/perl/ch-2.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/bruce-gray/perl/ch-2_very_fast.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/laurent-rosenfeld/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/ulrich-rieke/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/lubos-kolouch/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/adam-russell/perl/ch-2.pl),
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/pokgopun/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/james-smith/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/colin-crain/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/perlboy1967/perl/ch-2.pl), and
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/robert-dicicco/perl/ch-2.pl)

There were an assortment of methods found to find a repeating pattern in the modulo remainders. Perhaps the most common way was to join them somehow in a string and use either a regular expression of direct substring comparisons to examine various period sizes until one fit. However we also did find techniques that manipulated lists of remainders instead, and notably some approaches that were strictly mathematical in nature.

[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/peter-campbell-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[BigInt Week](https://pjcs-pwc.blogspot.com/2022/03/bigint-week.html)

We'll start the discussion with Peter. He produces a list of Fibonacci numbers, then
comes up with a scheme to identify patterns in the numbers. Unsatisfied with only providing an answer for *m* = 3, he creates a general solution that can process modulos up to 62.

One way match patterns is within a string of digits. However if we are looking to extract a period value from the result we need the positions of the modulo results within the string to be predictable. Peter solves this problem by using the additional symbols A through Z and again in lowercase to add 52 additional single-character symbols, so any result up to that upper limit can be expressed in a single position. Thus position counts translate directly to list lengths.

Then for a summary list of modulus values the results are gathered and converted to alphanumeric single characters, and joined into a string. Over an arbitrarily large range (maximum period is configurable and set to 300), the first *n* characters in the string are identified and then compared to the immediately following substring of the same length. The first match is the repunit, and its length is the Pisano number.

```perl
    for $n (@n) {                      # testing the nth Pisano period

        # stringify the moduli of the fib series
        $string = make_string($n);

        # now look for repeating patterns pp characters long
        for $pp (1 .. $max_period) {

            # this is the repating unit
            $unit = substr($string, 0, $pp);

            # and this is a repetition of the repeating unit as long as the stringified moduli
            $match = substr($unit x ($last_term / $pp + 1), 0, $last_term + 1);

            # and if they match we have a result
            next unless $match eq $string;
            say qq[p($n) = $pp];
            last;
        }
    }

    sub make_string {

        # makes a string of symbols where the j'th symbol represents the value mod n
        # of the j'th item in the fibonacci series
        my ($item, $char, $string);
        for my $j (0 .. $last_term) {
            $item = Math::BigInt->new($fib[$j]);   # fib number
            $item->bmod($_[0]);                    # ... modulo n
            $char = substr('01234567890ABCDEFGHIJKLMONPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', $item, 1);
            $string .= $char;
        }
        return $string;
    }
```


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/roger-bell-west/javascript/ch-2.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/roger-bell-west/kotlin/ch-2.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/roger-bell-west/lua/ch-2.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/roger-bell-west/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/roger-bell-west/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 155: Pisano's Fortune](https://blog.firedrake.org/archive/2022/03/The_Weekly_Challenge_155__Pisano_s_Fortune.html)

Roger introduces the idea of taking the prime factors of the period length when constructing a general algorithm for the Pisano period.

From his writeup:

> If we are looking for π(36), this can be regarded as two overlapping sequences, 2² and 3², and the result is the lcm of π(2²) and π(3²)

To do this he implements routines for the prime factorization, along with `lcm()` and `gcd()` functions.

```perl
    sub primefactor {
      my $n=shift;
      my %f;
      my $m=$n;
      foreach my $p (2,3,5,7) {
        while ($m % $p == 0) {
          $f{$p}++;
          $m=int($m/$p);
        }
      }
      if ($m > 1) {
        foreach my $p (@{genprimes($m)}) {
          while ($m % $p == 0) {
            $f{$p}++;
            $m=int($m/$p);
            if ($m == 1) {
              last;
            }
          }
        }
      }
      return \%f;
    }

    sub gcd {
      my ($m,$n)=@_;
      while ($n!=0) {
        ($m,$n)=($n,$m % $n);
      }
      return $m;
    }

    sub lcm {
      my ($m,$n)=@_;
      return $m/gcd($m,$n)*$n;
    }

    sub pisano {
      my $n=shift;
      my $a=1;
      my $f=primefactor($n);
      foreach my $nn (map {$_ ** $f->{$_}} keys %{$f}) {
        my $t=1;
        my @x=(1,1);
        while ($x[0]!=0 || $x[1] != 1) {
          $t++;
          @x=($x[1],($x[0]+$x[1]) % $nn);
        }
        $a=lcm($a,$t);
      }
      return $a;
    }
```

[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/bruce-gray/perl/ch-2_very_fast.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/bruce-gray/julia/ch-2.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/bruce-gray/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[I say Potato, you say Pisano](http://blogs.perl.org/users/bruce_gray/2022/03/twc-155-i-say-potato-you-say-pisano.html)

Bruce is quite involved in the world of Raku, so it is not surprising to see him employ techniques borrowed from the the sister language. Here, though, he brings in a module close to that world yet new to me: `List::Lazy`, which allows us to create a structure that acts like a list whenever we need to read values from it, but is actually defined by a range and a generating function, and waits until values are required before creating them. Once created, however, the results are stored so they only ever need to be constructed once. Think of it as a combination of an iterator function and a list comprehension.

Here the Fibonacci numbers modulo *n* is the list in question, and this lazy list will create new values as long as they're needed.

I love Bruce's technique for matching subsequences. Two sublists are kept, `@L` and `@R`, and elements are shifted off of `@R` and pushed on to `@L` one-by-one, replenishing `@R` from the lazy master 2 elements at a time. Thus after a shift both lists will always have the same number of elements. If the shifted-over element is the same as the very first, we have a possible cycle, and this is checked by comparing the two lists at each index. The index range is nicely provided by calling `keys` on `@L`, which is relatively new behavior for the keyword that when called on an array returns an ordered list of the indexes. It's beautifully elegant.

```perl
    use List::Lazy   qw<lazy_list>;
    use List::Util   qw<all>;

    # This algorithm assumes the cycle must start at position zero.
    # Works with string or numberic elements, if the strings have no whitespace.
    sub find_period ( $lazy_list ) {
        my @ns = ( $lazy_list->next(2) );
        return if not @ns;

        my $ns0 = $ns[0];
        my `@L` = $ns[0];
        my @R = $ns[1];
        my $cycle_length = 1;
        while (1) {
            # Easy check - if element is different from $ns0, the cycle cannot start there.
            if ( $R[0] eq $ns0 ) {
                # If the first N values the same
                # as the _next_ N values, we will call it a cycle.
                return $cycle_length if all { $L[$_] eq $R[$_] } keys @L;
            }

            push @L, shift @R;
            push @R, $lazy_list->next(2);
            $cycle_length++;

            return if $lazy_list->is_done;
        }
    }
```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/laurent-rosenfeld/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/laurent-rosenfeld/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 155: Fortunate Numbers and Pisano Periods](http://blogs.perl.org/users/laurent_r/2022/03/perl-weekly-challenge-155-fortunate-numbers-and-pisano-periods.html)

Laurent demonstrates how to do the cycle matching with the regular expression engine. This is where Perl really shines. We look for a sequence of characters of some length and capture it, and then match that same sequence repeated. This is the essence of a cycle. To compute the 3rd Pisano period he creates 32 Fibonacci numbers to find the 8-character repeated sequence.

```perl
    my @fibmod = (1, 1);
    $fibmod[$_] = ($fibmod[$_-1] + $fibmod[$_-2]) % 3 for 2..30;
    my $seq = join '', @fibmod[0..30];
    my $repeated = $1 if $seq =~ /(.+)\1+/;
    say length $repeated;
```

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/ulrich-rieke/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/ulrich-rieke/cpp/ch-2.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/ulrich-rieke/haskell/ch-2.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/ulrich-rieke/raku/ch-2.raku)

Ulrich solves the task for the requested value of π(3), using a sophisticated comparison scheme counting the differences between different views of the modulo sequence.

```perl
    sub count {
      my $element = shift ;
      my $array = shift ;
      return scalar( grep { $_ == $element } @$array ) ;
    }

    my @fibonaccis = (0 , 1 ) ;
    while ( scalar( @fibonaccis ) != 500 ) {
      push @fibonaccis , $fibonaccis[-1] + $fibonaccis[-2] ;
    }
    #I take the first 2 identical array slices as representatives for
    #the entire range of Pisano numbers, without proving whether this is
    #correct
    my @thirdPisanos = map { $_ % 3 } @fibonaccis ;
    my @differences ;
    my $n = 2 ;
    push @differences , $thirdPisanos[0] - $thirdPisanos[2] ;
    push @differences , $thirdPisanos[1] - $thirdPisanos[3] ;
    while ( count( 0 , \@differences ) != $n ) {
      $n++ ;
      @differences = ( ) ;
      for my $i (0 .. $n - 1 ) {
          push @differences, $thirdPisanos[ $i ] - $thirdPisanos[ $i + $n ] ;
      }
    }
```

[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/lubos-kolouch/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/lubos-kolouch/python/ch-2.py)

I like the way Lubos breaks apart his actions into discrete units. Condensation has its virtues, but so does compartmentalization. In the loop we maks another Fibonacci number, tick a counter for the period length, add the modulo to an accreting string concatenated values, and attempt to match a repetition using a greedy regex.

Repeat until found.

```perl
    sub gen_more_fibs {

        my $new_fib = $fibs[-1] + $fibs[-2];
        push @fibs, $new_fib;
        return 1;
    }

    sub get_pisano_period {
        my $what = shift;

        my $all_nums = $fibs[0] . $fibs[1];

        my $period_len = 2;
        while (1) {
            $period_len++;
            gen_more_fibs;
            $all_nums .= $fibs[-1] % $what;

            last if $all_nums =~ /^(.*)\1$/;
        }
        return $period_len / 2;

    }
```


[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/adam-russell/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Fortunate Pisano — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/03/13)

Adam wildly diverges from these listwise matching techniques with a purely mathematical approach based on Group Theory. Using what is known as the [mathematical order]() of a specific member of the sequence and the modulus. As he explains it:

> First you must determine the smallest Fibonacci Number evenly divisible by the modulus. Record the index of this term in the sequence, call it k. Compute the multiplicative order M of the  k+1st term with the given modulus. The Pisano period is then k * M.

And there you go. Victory through advanced maths. As a program it provides us with, obviously, a completely different implementation than the common themes we've seen elsewhere.

```perl
    use constant N => 1_000_000_000;

    sub fibonacci_below_n{
        my($n, $fibonaccis) = @_;
        $fibonaccis = [1, 1] if !$fibonaccis;
        my $f = $fibonaccis->[@{$fibonaccis} - 2] + $fibonaccis->[@{$fibonaccis} - 1];
        if($f < $n){
            push @{$fibonaccis}, $f;
            fibonacci_below_n($n, $fibonaccis);
        }
        else{
            return $fibonaccis;
        }
    }

    sub multiplicative_order{
        my($a, $n) = @_;
        my $k = 1;
        my $result = 1;
        while($k < $n){
            $result = ($result * $a) % $n;
            return $k if $result == 1;
            $k++;
        }
        return -1 ;
    }

    sub fibonacci_period_mod_n{
        my($n) = @_;
        my $fibonaccis = fibonacci_below_n(N);
        my $k = 1;
        for my $f (@{$fibonaccis}){
            if($f % $n == 0){
                return $k * multiplicative_order($fibonaccis->[$k+1], $n);
            }
            $k++;
        }
        return -1;
    }
```

[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/pokgopun/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/pokgopun/go/ch-2.go)

PokGoPun concocts a scheme to directly compare substrings in a concatenated list of modulo remainders, specifically trying increasing lengths until a match is found. Noteworthy in this approach is their use of `chr` with several offset options to translate multi-digit remainders directly from the ASCII table into alphanumeric characters without the need for an intermediate lookup.

```perl
    {
        ## Calculate next F number, modulo n first before pushing to @f and take off Fi
        ## this to keep @f minimal while Fi modulo n still produce the same result

        push @f, ($f[0] + $f[1]) % $n;
        my $fi = shift @f;

        ## Get offset to convert number 0..35 to char 0..9,A..Z ,
        ## 36... to char a..z and whatever come next in ascii table
        ## This make the repeated cycle in $mseq comparable

        my $o = $fi < 10 ? 48 :
            $fi < 36 ? 55 : 61;

        $mseq .= chr(($fi % $n) + $o);

        ## Check for repeated cycle when number char of sequence is even (i.e. when $i is odd ), compare 1st and 2nd half

        if ( $i % 2 == 1 ){
            my $l = ($i + 1)/2;
            if( substr($mseq,0,$l) eq substr($mseq,-$l) ){
            	print "#$n Pisano period is ".$l.", repeated cycle is ".substr($mseq,0,$l)."\n";
            	last;
            }
        }

        ## Continue with the next Fi

        $i++;
        redo;
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/james-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #155](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-155/james-smith)

James delivers a delightfully compact technique for producing Pisano periods in the range 1 to 144. The Fibonacci sequence is extended as required, until the matching tail of the cycle: (1,0), is located.

```perl
    printf "%4d %8d\n", $_,pisano_period( $_ ) for 1..(@ARGV?$ARGV[0]:144);

    sub pisano_period {
      return 1 if $_[0]==1;              ## Special case $n==1 sequence is just "0"
      my ($n,$c,$p,$q) = (shift,2,1,1);
      $c++,($p,$q)=($q,($p+$q)%$n) while $q || $p!=1; ## End of sequence ($p,$q)=(1,0)
      return $c;
    }
```



[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/colin-crain/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/colin-crain/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[The Fortunate Son - Programming Excursions in Perl and Raku](https://colincrain.com/2022/03/13/the-fortunate-son/)

&nbsp;&nbsp;**blog writeup:**
[Pisa Party - Programming Excursions in Perl and Raku](https://colincrain.com/2022/03/13/pisa-party/)

For my own solution I create a large number of Fibonaccis to work with, as neither the processing nor the storage of this array is particularly expensive, and I planned on using it to make a cross-comparison across the phase-space of the Pisanos. They're a curious lot, and I wanted to see what I could find.

Multi-digit remainders were mapped to somewhat arbitrary alphanumeric characters, the only  point being that they be singular and differentiated. I picked an upper limit after repeating the alphabet a second time, as many here did. We could have gone further but I frankly didn't see a whole lot of point. An alternate approach I contemplated was to allocate multiple positions to each character, perhaps dependent on the size in digits of the value requested, and then dividing down the result appropriately. Likewise the number of Fibonaccis could be similarly extended by demand.

But none of that was to be, as I opted for a bit of simplicity. We were only asked originally to get the value for π(3), after all.

My version of the regex incorporates a minimal matching qualifier, matching from the first 0: `(0.+?)`. This will start small and stop at the first cycle found.

```perl
    sub fibonaccis ( $count ) {
    ## generates sequence of Fibonacci numbers up to and not greater than limit
        state @fs = (0,1);
        push  @fs, $fs[-1] + $fs[-2] while @fs <= $count;
        return @fs;
    }


    my @fs = fibonaccis(1024);
    my @pisas;

    for my $mod (2..61) {
        my $modstr = join '',
                     map { (0..9, "A".."Z", "a".."z")[$_] }
                     map { $_ % $mod }
                     @fs;

        $modstr =~ /(0.+?)\1/;
        push @pisas, length $1;
    }
```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/perlboy1967/perl/ch-2.pl)

Niels takes a novel approach somewhat akin to Bruce's, but distinctly different. Fibonacci numbers are generated and remaindered in pairs, before being added to a growing array. Then using slices, the array — carefully doctored to maintain an even number of digits — is split cleanly into two halves. The halves are joined together and compared using string equality. If the match a repeat is found and the length of the array halves is the Pisano number.

Note this technique does not require multi-digit remainders to be converted to an alphanumeric of other intermediate form, as it keeps the remainders in an array, only joined for comparison at the last minute. The array element count is ultimately used to determine the period, and the length of individual elements holds no bearing.

```perl
    do {
      push(@fibMod,fibModN($i++,$N),fibModN($i++,$N));

      # Split fibMod in two halves
      @fModLh = @fibMod[0 .. int($i/2)-1];
      @fModUh = @fibMod[int($i/2) .. $i-1];

      # Compare lower and upper half
    } until (join('',@fModLh) eq join('',@fModUh));

    printf "%dth Pisano Period: %d (%s)\n",$N,scalar @fModLh,join(',',@fModLh);

    sub fibModN($;$) {
      my ($i,$n) = @_;
      state $fN = [0,1];
      $fN->[$i] //= fibModN($i-2) + fibModN($i-1);
      return (defined $n ? $fN->[$i] % $n : $fN->[$i]);
    }
```

[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/robert-dicicco/perl/ch-2.pl)

Finally we have Robert, who [brings us a regex from Dr. Conway](https://www.perlmonks.org/?node_id=1039630) that really nails the repetition matching down tight.

The beauty of this regex is that it matches the cycle as many times as it can, which will likely leave a residual portion at the tail of the searched string. This remnant, however, accessed through `$^N`, should be a substring of the matched cycle.

In my own solution I was left with a lingering doubt about the existence of epicycles of repeating segments within a larger repeating pattern. I don't think they exist, mind you, but I didn't have the time to prove that they didn't. This technique, at least, would prove a match in the cycles to within the limits of the data.


```perl
    ### Got this REGEX from Perl Monks website - written by Damian Conway

    my $REPETITION_PAT = qr{
      \A         # Start at the beginning of the string
      (.+?)      # Match minimal initial sequence (as $1)
      \1*+       # Rematch it exactly as often as possible (maybe zero)

      # Then verify what's left is a proper truncation...
      (?(?{ index($^N, substr($_,pos())) }) (?!) )

    }xms;

    my $str = ();
    foreach my $elem (@fibs) {     # for each
      push(@out, $elem % $MODULO);
      $str .= ($elem % $MODULO);
    }

    print "Fib Sequence: @fibs\n";

    for my $i (1..length($str)) {
      my $s = substr($str,0,-$i);
      if ($s =~ $REPETITION_PAT) {
          say "Mod Sequence: $s\n     Matched: $1";
        say "      Period: " . length($1) . "\n";
        last;
      }
      else {
        say "$s\n     Didn't match";
      }
    }
```




## Blogs and Additional Submissions in Guest Languages for Task 2:


[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/awk/ch-2.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/bash/ch-2.sh), [Basic](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/basic/ch-2.bas), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/bc/ch-2.bc), [Befunge-93](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/befunge-93/ch-2.bf93), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/c/ch-2.c), [Cobol](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/cobol/ch-2.cb), [Csh](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/csh/ch-2.csh), [Erlang](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/erlang/ch-2.erl), [Forth](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/forth/ch-2.fs), [Fortran](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/fortran/ch-2.f90), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/go/ch-2.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/java/ch-2.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/lua/ch-2.lua), [M4](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/m4/ch-2.m4), [Mmix](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/mmix/ch-2.mms), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/node/ch-2.js), [Ocaml](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/ocaml/ch-2.ml), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/pascal/ch-2.p), [Php](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/php/ch-2.php), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/python/ch-2.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/r/ch-2.r), [Rexx](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/rexx/ch-2.rexx), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/ruby/ch-2.rb), [Scheme](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/scheme/ch-2.scm), [Sed](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/sed/ch-2.sed), [Sql](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/sql/ch-2.sql), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/abigail/tcl/ch-2.tcl)


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/athanasius/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/athanasius/raku/ch-2.raku)


[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/cheok-yin-fung/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[CY's Take on The Weekly Challenge #155 ](https://E7-87-83.github.io/coding/challenge_155.html)


[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/dave-jacoby/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[I Ain’t No Fortunate One: Weekly Challege #155 | Committed to Memory](https://jacoby.github.io/2022/03/07/i-aint-no-fortunate-one-weekly-challege-155.html)


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC155 - Fortunate Numbers - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/03/09/pwc155-fortunate-numbers/)

&nbsp;&nbsp;**blog writeup:**
[PWC155 - Pisano Period - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/03/10/pwc155-pisano-period/)


[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/jaldhar-h-vyas/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/jaldhar-h-vyas/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 155](https://www.braincells.com/perl/2022/03/perl_weekly_challenge_week_155.html)


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-155/wlmb/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 155 – W. Luis Mochán](https://wlmb.github.io/2022/03/07/PWC155/)

------------------------------------------





---

<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>

<center>
<h1 id="PWC155BLOGS">_________ THE BLOG PAGES _________</h1>
</center>


---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, by some miracle I somehow continue to maintain my bearings.**

**Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your Unquenchable *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC155BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *FOLLOW* these *BLOG* *LINKS*:

**( ...*don't think, trust your training, you're in the zone, just do it ...* )**


**Adam Russell**

 * [Fortunate Pisano — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/03/13) ( *Perl* )

**Arne Sommer**

 * [Pisano the Fortunate with Raku](https://raku-musings.com/pisano-fortunate.html) ( *Raku* )

**Bruce Gray**

 * [I say Potato, you say Pisano](http://blogs.perl.org/users/bruce_gray/2022/03/twc-155-i-say-potato-you-say-pisano.html) ( *Perl & Raku* )

**Cheok-Yin Fung**

 * [CY's Take on The Weekly Challenge #155 ](https://E7-87-83.github.io/coding/challenge_155.html) ( *Perl* )

**Colin Crain**

 * [The Fortunate Son - Programming Excursions in Perl and Raku](https://colincrain.com/2022/03/13/the-fortunate-son/) ( *Perl & Raku* )
 * [Pisa Party - Programming Excursions in Perl and Raku](https://colincrain.com/2022/03/13/pisa-party/) ( *Perl & Raku* )

**Dave Jacoby**

 * [I Ain’t No Fortunate One: Weekly Challege #155 | Committed to Memory](https://jacoby.github.io/2022/03/07/i-aint-no-fortunate-one-weekly-challege-155.html) ( *Perl* )

**Flavio Poletti**

 * [PWC155 - Fortunate Numbers - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/03/09/pwc155-fortunate-numbers/) ( *Perl & Raku* )
 * [PWC155 - Pisano Period - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/03/10/pwc155-pisano-period/) ( *Perl & Raku* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 155](https://www.braincells.com/perl/2022/03/perl_weekly_challenge_week_155.html) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #155](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-155/james-smith) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 155: Fortunate Numbers and Pisano Periods](http://blogs.perl.org/users/laurent_r/2022/03/perl-weekly-challenge-155-fortunate-numbers-and-pisano-periods.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 155: Fortune and Pisano in Primes – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/03/07/PerlWeeklyChallenge155.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 155: Fortune and Pisano in Primes – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/03/07/PerlWeeklyChallenge155.html#task1plperl) ( *PL Perl* )


**Mark Senn**

 * [Fortunate Numbers](https://engineering.purdue.edu/~mark/twc-155-1.pdf) ( *Raku* )
 * [Pisano Period](https://engineering.purdue.edu/~mark/twc-155-2.pdf) ( *Raku* )

**Peter Campbell Smith**

 * [BigInt Week](https://pjcs-pwc.blogspot.com/2022/03/bigint-week.html) ( *Perl* )

**Roger Bell_West**

 * [RogerBW's Blog: The Weekly Challenge 155: Pisano's Fortune](https://blog.firedrake.org/archive/2022/03/The_Weekly_Challenge_155__Pisano_s_Fortune.html) ( *Perl & Raku* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 155 – W. Luis Mochán](https://wlmb.github.io/2022/03/07/PWC155/) ( *Perl* )
