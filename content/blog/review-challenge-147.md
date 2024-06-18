---
author:       Colin Crain
date:         2022-02-14T00:00:00
description:  "Colin Crain › Perl Weekly Review #147"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #147"
image:        images/blog/p5-review-challenge-147.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-146/).* )

Welcome to the Perl review pages for **Week 147** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

---

### ●︎ Why do we do these challenges?

I suppose any reasonable answer to that question would be from a field as wide ranging and varied as the people who choose to join the team. One thing, though, is clear: it's not a competition, and there are no judges, even if there is a "prize" of sorts. About that -- I think of it more as an honorarium periodically awarded to acknowledge the efforts we make towards this strange goal. So there's no determination to find the *fastest*, or the *shortest*, or even, in some abstract way, the *best* way to go about things, although I'm certain the participants have their own aspirations and personal drives. As Perl is such a wonderfully expressive language, this provides quite a bit of fodder to the core idea of TMTOWTDI, producing a gamut of varied techniques and solutions.

Even the tasks themselves are often open to a certain amount of discretionary interpretation. What we end up with is a situation where each participant is producing something in the manner they find the most interesting or satisfying. Some team members focus on carefully crafted complete applications, thoroughly vetting input data and handling every use case they can think up. Others choose to apply themselves to the logic of the underlying puzzle and making it work in the most elegant way they can. Some eschew modules they would ordinarily reach for, others embrace them, bringing to light wheels perhaps invented years ago that happen to exactly solve the problem in front of them today.

I've been considering this question for some time and have found one binding commonality between all of us out solving these challenges each week, in that however we normally live our lives, the task in front of us more than likely has nothing to do with any of that. And I think this has great value. We all do what we do, in the real world, and hopefully we do it well. The Weekly Challenge provides us with an opportunity to do something germane to that life yet distinctly different; if we only do the things we already know how to do then we will only do the same things over and over. This is where the "challenge" aspect comes into play.

So we can consider The Weekly Challenge as providing a problem space outside of our comfort zone, as far out from that comfort as we wish to take things. From those reaches we can gather and learn things, pick and choose and bring what we want back into our lives. Personally, I think that's what this whole thing is about. YMMV.

---

<i>Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due.</i>

And that's why I'm here, to try and figure out ways to do that.

So, here we are then — let's get to it and see what we can find.

---

### For Additional Context...
Before we begin, you may wish to revisit either the pages for the [**original tasks**](/blog/perl-weekly-challenge-147/) or the summary [**recap**](/blog/recap-challenge-147/) of the challenge. But don't worry about it, the challenge text will be repeated and presented as we progress from task to task.

Oh, and one more thing before we get started:


### Getting in Touch with Us
<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please feel free to email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

<div align= center><strong>... So finally, without further ado...</strong></div>

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC147TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC147TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC147BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---


# TASK 1 {#PWC147TASK1}

# Truncatable Prime
*Submitted by: Mohammad S Anwar*<br>

Write a script to generate first 20 left-truncatable prime numbers in base 10.

In number theory, a left-truncatable prime is a prime number which, in a given base, contains no 0, and if the leading left digit is successively removed, then all resulting numbers are primes.

**Example**
```
    9137 is one such left-truncatable prime since 9137, 137, 37
    and 7 are all prime numbers.

```



## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/adam-russell/perl/ch-1.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/alexander-pankoff/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/athanasius/perl/ch-1.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/bruce-gray/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/colin-crain/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/james-smith/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/laurent-rosenfeld/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/mattneleigh/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/perlboy1967/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/pete-houston/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/peter-campbell-smith/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/sgreen/perl/ch-1.pl),
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/steven-wilson/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/ulrich-rieke/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/wlmb/perl/ch-1.pl)

For the first challenge we have another unusual Number Theory mashup: combining prime numbers with a recursive physical manipulation to their representation. As the  written form of a number can be expanded into a polynomial, there is an underlying mathematics behind both sides of the task — whether any further deep connections between the two frameworks can be found, well that remains to be seen.

There is a seemingly playful aspect to Number Theory where these postmodern mix-and-match combinations get explored, apparently for no other reason than because they are there. And if we look, well perhaps we will find something we never noticed before. It's the essence of exploration and discovery.

That said, what connections can we find by studying the topic of retained primality in a given base as we lop digits off one-by-one? Apparently not a lot. The idea remains largely a conceptual curiosity. From the [OEIS](https://oeis.org/):

<div align= center>

[A024785](https://oeis.org/A024785) &nbsp; &nbsp; &nbsp; **Left-truncatable primes: every suffix is prime and no digits are zero.**

</div>

You will notice that there haven't been many followups published, at least as able to be collected here.

Of note as candidates become larger, two constraints grow: there are more possible prime factors less than the candidate and also, as the number of digits rises, the number of truncated sub-numbers that also need to be prime increases accordingly. Because of this the list of truncatable primes in base-10 can be shown to be fixed and finite, with the 4260th and last term 357,686,312,646,216,567,629,137.

That's a very big number.

It strikes to me that the exclusion of the 0-digit throws a wrench in the works for the expansion polynomial, so were there any patterning originally to be found this would be disrupted by this to-my-mind unnecessary restriction. Then again patterning amongst the prime numbers is fleeting at best anyway, and quite mysterious in all cases.

But again, as we said, its always good to look.

There were 25 submissions for the first task this past week.

## CUTTING off PIECES and STUDYING the INDIVISIBLE CORE
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/adam-russell/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/mattneleigh/perl/ch-1.pl),
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/steven-wilson/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/sgreen/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/peter-campbell-smith/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/colin-crain/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/ulrich-rieke/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/roger-bell-west/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/duncan-c-white/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/athanasius/perl/ch-1.pl), and
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/polettix/perl/ch-1.pl)

As we yet again visit the wacky world of the prime numbers, many experienced members will already have in place a preferred mechanism for obtaining primes to study, either by generating them or beseeching some source to provide them for us, be that a reference list or optimized library routine. But really what was required here was a means to determine whether a number was prime, and matching it to a list of known primes is only one method of those available.

The common method to check left truncation was to start with a prime and progressively remove the left digit, although we also saw another way, constructing prime candidates by concatenating new digits to known primes and checking for divisibility.

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/adam-russell/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/adam-russell/prolog/ch-1.p)


&nbsp;&nbsp;**blog writeup:**
[Primes and Pentagonals — Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/01/16)


&nbsp;&nbsp;**blog writeup:**
 [Primes and Pentagonals — Prolog — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/01/16)

Adam starts us off today with a bang, implementing a [sieve of Atkin](https://en.wikipedia.org/wiki/Sieve_of_Atkin) to generate his prime numbers. This it a very modern sieving technique dating from 2003, attributed to  the mathematicians A.O.L. Atkin and Daniel J. Bernstein. The technique uses a combination of modulo-60 math and a trio of quadratic equations to winnow a field of sequential prime possiblites using a complicated algorithm that flips the prime/not prime status of a grid of values back and forth until resolution. It produces superior computational complexity to the sieve of Eratosthenes, but is considerably harder to explain. But please, have a look for yourself.

Once the sieve has done its work an array of primes is returned. The primes in this list are then filtered for truncatability. Once a regex has determined that there are no 0s present, a `map` function progressively removes the first digit and passes the result if it is found in the list of primes. If and only if the result list for the `map` is the same length as the original number then all of the substrings will have also been prime, and the prime is left-truncatable.

If you look closely there's a neat trick here, in the `grep` nested within the `map`. If the grep fails, an empty list is produced, which when pushed to the output list will not produce an element the way assigning `undef`, or an empty string, '', would. This is the equivalent to pushing `()`, which has the same effect. This can be *extremely* useful.

```perl
    sub truncatable{
        my($prime, $primes) = @_;
        return false if $prime =~ m/0/;
        my @truncatable = map {
                my $p = substr($prime, -1 * $_, $_);
                grep {$p == $_} @{$primes}
            } 1 .. length($prime);
        return @truncatable == length($prime);
    }

    sub first_n_truncatable_primes{
        my($n) = @_;
        my @primes = sieve_atkin(N);
        my @truncatable;
        for my $prime (@primes){
            push @truncatable, $prime if truncatable($prime, \@primes);
            last if @truncatable == $n;
        }
        return @truncatable;
    }
```

[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/mattneleigh/perl/ch-1.pl)

We follow up our previous sieving marvel with a more easily comprehensible method, where Matthew provides us with an excellent example of a sieve of Eratosthenes to look at, awash with instructional commentary. For anyone wondering about the implementation of this prime sieve, well, they should have a look, as they won't fine a clearer example today.

Once the list of primes is provided, it is systematically traversed looking for left-truncatable examples by taking a candidate and slicing off its digits one-by-one until it tells us where the money is hidden. It's unfortunate but it didn't need to be like this. This is their own fault for going against the family. They knew what they were doing.

Wait, what were we talking about?

```perl
    sub sieve_of_eratosthenes{
        use POSIX;

        my $n = int(shift());
        my $return_table = shift();

        return(undef)
            unless($n > 0);

        my $max = floor(sqrt($n));
        my $i;
        my $j;
        my $k;
        my $table;
        my @primes;

        # Initialize the table to contain
        # (mostly...) true values
        $table = "00" . "1" x ($n - 1);

        # Loop over $i not exceeding the square
        # root of $n
        for($i = 2; $i <= $max; $i++){
            # If the $i'th cell is true, we haven't
            # examined the multiples of $i yet
            if(substr($table, $i, 1) eq "1"){
                $k = 0;
                # Assignment in expression is deliberate
                while(($j = $i ** 2 + $k++ * $i) <= $n){
                    # $j is not prime; set its cell in the
                    # table to false
                    substr($table, $j, 1) = "0";
                }
            }
        }

        if($return_table){
            # Hand a ref to the completed table
            # back to the caller
            return(\$table);

        } else{
            # Build a list of indices for which
            # the corresponding members of the
            # table are true
            for($i = 2; $i <= $n; $i++){
                push(@primes, $i)
                    if(substr($table, $i, 1) eq "1");
            }

            return(@primes);

        }

    }
```

[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/steven-wilson/perl/ch-1.pl)

Of course all this methodical sifting and sieving is not the only way to do it, just a good way to get us off to a roaring start. Coming from a very different direction, Simon imports several very useful functions from `Math::Prime::Util` to help him in his search: `next_prime()` and `is_prime()`. One might well see how such things could be immediately useful.

The focus is now on the truncating and validating process. As each prime number is requested, it is passed to a validation routine where is is checked for primality, then has its first digit removed with a regular expression and the process repeated. If at any point the prime test fails we're out, but if we truncate digits down to length 0 we have a left-truncatable prime.

```perl
    use Math::Prime::Util qw/ next_prime is_prime /;

    my @ltp          = qw/ 2 /;
    my $prime_number = 2;

    while ( scalar @ltp < 20 ) {
        $prime_number = next_prime($prime_number);
        if ( is_truncatable_prime($prime_number) ) {
            push @ltp, $prime_number;
        }
    }

    sub is_truncatable_prime {
        my $prime_number   = shift;
        my $truncatable    = 1;
        while ( length $prime_number > 0 ) {
            if ( $prime_number =~ /0/ ) {    # contains no 0
                $truncatable = 0;
                last;
            }
            if ( not is_prime($prime_number) ) {
                $truncatable = 0;
                last;
            }
            $prime_number =~ /^[0-9]{1}([0-9]*)/;
            $prime_number = $1;
        }
        return $truncatable;
    }
```

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/sgreen/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/sgreen/python/ch-1.py)


&nbsp;&nbsp;**blog writeup:**
[Look mum, no inputs 😛](https://dev.to/simongreennet/look-mum-no-inputs-3lon)

Simon utilizes the `index()` function to locate the position of the first instance of "0" in the target number; only if none are found, returning `-1`, do we continue. After that a set of systematically longer substrings in constructed from the *back* of the target number, shortest first, to be validated for primeness. The idea here is the smaller values will short-out first if not prime, saving effort.

The whole thing is wrapped in a counter, accumulating 20 values.

```perl
    sub is_trunc_prime {
        my $number = shift;

        if ( index( $number, '0' ) != -1 ) {
            # A left-truncatable prime cannot contain a zero
            return;
        }

        # Return true or false if the number and all it's left truncated
        #  parts is a prime. Start with the smallest figure first
        foreach my $i ( reverse 1 .. length($number) ) {
            return if not is_prime( substr( $number, $i - 1 ) );
        }

        return 1;
    }
```

[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/peter-campbell-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Chop off their heads and conquer the Pentagon (week 147)](https://pjcs-pwc.blogspot.com/2022/01/chop-off-their-heads-and-conquer.html)

In Peter's analysis of the directive, he notes that the language specifies "...all resulting numbers are primes." For that to be the case, then, there must be a resulting number to be considered, and used this rationale to justify excluding single-digit primes from the running.

This creative and lawyerly approach is, although admirably sound, miguided by fault of the definition used rather than any internal logic. To wit: this isn't the way. As a result we'll arrive at a slightly different sub-list of the requested values. And furthermore, since we've already diverged from consistency I'll just quietly mutter under my breath that 1 is not prime and leave that hanging. (*shakes head, looks askance*)

Anywho, in Peter's otherwise well commented, thoughtful and methodical solution he searches the range from 1 to 1000 (as some arbitrarily large-enough value) and sieves them in the style of Eratosthenes. The resultant primes are then preprocessed for excuded possibilities and truncated progressively using a regex. Each new number produced is checked for primeness and the loop short-circuited on failure.

One thing I liked about this solution is that a scheme is devised to collect the diminishing number fragments to output a verbose chain of action for each final product:

```
    83 > 3
    97 > 7
    113 > 13 > 3
```

+1 for descriptive and useful comments.

```perl
       # now test the primes in this range for left-truncatability
       TEST: for $test ($from .. $to) {

       	# remove ineligibles - not prime, is a single digit, contains 0 or ends in 9
       	next if (defined $not_a_prime[$test] or $test =~ m|0| or $test =~ m|9$| or $test < 11);

       	# test for left-truncatability and construct string showing proof
       	$this = $test;
       	$string = qq[$this];

       	# remove successive left digits and test the residue for primeness
       	while ($this =~ s|\d(\d+)|$1|) {
       		next TEST if $not_a_prime[$this];
       		$string .= qq[ > $this];
       	}

       	# an answer!
       	say $string;
       	if (++ $count >= $seeking) {
       		say '' . (time - $secs) . qq[ seconds\n];
       		exit;
       	}
       }
```

[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/colin-crain/perl/ch-1.pl)

&nbsp;&nbsp;**blog writeup:**
[primes-rimes-imes-mes-es-s](http://colincrain.com/2022/01/16/primes-rimes-imes-mes-es-s/)

For my own solution I have chosen not to dust off my trusty prime generator, because frankly it has recieved so much recent use that it hasn't had any chance to acquire any. Perhaps I should just include it in my script template, or perhaps more realisticaly make a new script template just for number theory. That idea actually has a certain cachet.

In contrast to Peter's well-reasoned rationale behind excluding single-digit primes, I present my own, slightly more selfish version: they're boring. Ok, "uninteresting" is the word I used. It appears that like Peter, I do not seek out independant validation for my choices in life. I find my own way, seeking only the guidance of my own eyes and ears. Or, you know, something like that.

In the words of the great Mike Nesmith, pre-*Monkees*:

>"You and I travel to the beat of a different drum"

The function `get_next_prime()` keeps an internal prime list as a `state` variable, which it uses to validate candidates counting by 2s from the last prime found,  locating and returning the next in sequence. The primes are requested by the main driver, which checks each for left-truncatability and then adds it to a hash of primes found, which is in turn used as a fast lookup for the truncation routine. As the shortened numbers will always be smaller than the last prime added this hash will always be complete within the range required.

Doing things this way avoids explicitly constructing an additional loop to preprocess the primes into a hash for quick random-access to the values, hijacking the existing loop instead.

```perl
    sub get_next_prime ( ) {
    ## an iterator that delivers the next prime
        state @primes;

        if ( @primes < 2 ) {
            push @primes, @primes == 0 ? 2 : 3;
            return $primes[-1];
        }

        my $candidate = $primes[-1] ;
        CANDIDATE: while ( $candidate += 2 ) {
            my $sqrt_candidate = sqrt( $candidate );
            for my $test ( @primes ) {
                next CANDIDATE if $candidate % $test == 0;
                last if $test > $sqrt_candidate;
            }
            push @primes, $candidate;
            return $candidate;
        }
    }

    my $prime_lookup;
    my @lt_primes;

    while ( @lt_primes <= 100 ) {
        my $candidate = get_next_prime();
        $prime_lookup->{ $candidate } = 1;
        next unless left_truncatable( $candidate, $prime_lookup );
        $candidate and push @lt_primes, $candidate;
    }
```

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/ulrich-rieke/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/ulrich-rieke/cpp/ch-1.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/ulrich-rieke/haskell/ch-1.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/ulrich-rieke/raku/ch-1.raku)

The common method here involves counting up from 1 or 2, checking numbers for primeness once, and then if found to be prime, progressively trimming them to see whether they remain prime down to the last digit. In my version the counting is done in the prime generator, but here in Ulrich's the step is placed in the main body. In the end we still need to count.

```perl
    sub isLeftTruncatablePrime {
      my $number = shift ;
      if ( $number =~ /0/ ) {
          return 0 ;
      }
      my $len = length( $number ) ;
      for my $i( 0 .. $len - 1 ) {
          my $truncated = substr( $number , $i ) + 0 ; # enforce number evaluation
          if ( not isPrime( $truncated ) ) {
        return 0 ;
          }
      }
      return 1 ;
    }

    my @truncatables ;
    my $current = 0 ;
    while ( scalar( @truncatables) < 20 ) {
          $current++ ;
          if ( isLeftTruncatablePrime( $current ) ) {
        push @truncatables , $current ;
          }
    }
    say join( ',' , @truncatables ) ;
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/roger-bell-west/javascript/ch-1.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/roger-bell-west/kotlin/ch-1.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/roger-bell-west/lua/ch-1.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 147: Truncating the Pentagon](https://blog.firedrake.org/archive/2022/01/The_Weekly_Challenge_147__Truncating_the_Pentagon.html)

Roger constructs a large-enough list of primes using a sieve and then hashes them to make a rapid validation lookup. After all, we will need to very quickly validate a lot of primes. We don't want to be here all day. We have things to do.

Once the hash is constructed, we have the primes two ways: as an array to iterate through and as a hash to validate numbers as prime. There isn't need for a primality check routine if all we have to do is check for a key's existence in the hash. A `substr` function in a loop checks each successively shorter truncation.

```perl
    sub ltruncprimes {
      my $count=shift;
      my @out;
      my $lt=0;
      my @p=@{genprimes(500)};
      my %p=map {$_ => 1} @p;
      foreach my $pc (@p) {
        my $l=length($pc);
        my $c=1;
        foreach my $i (1..$l-1) {
          unless (exists $p{substr($pc,$i,$l+1-$i)}) {
            $c=0;
            last;
          }
        }
        if ($c) {
          push @out,$pc;
          $lt++;
          if ($lt >= $count) {
            last;
          }
        }
      }
      return \@out;
    }
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/dave-jacoby/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Truncations and Pentagons: The Weekly Challenge #147 | Committed to Memory](https://jacoby.github.io/2022/01/11/truncations-and-pentagons-the-weekly-challenge-147.html)

Dace provides us with a compact, no-nonsense solution that succintly processes the steps, incrementally amassing trucatable primes until the correct amount has been gathered. A candidate value is incremented, then checked for first 0s and then primality. If it passes, it is then copied and the copy whittled away using `substr` in a loop. If any new number produced is not found in a lookup hash of all primes found so far then we fail out and try the next candidate. Succesful applicants get ushered into a final hash of trunctable prime numbers for output.

```perl
    while (1) {
        if ( $n !~ /0/mx && is_prime($n) ) {
            $primes{$n}++;
            my $copy = $n;
            while ( length $copy > 0 ) {
                last unless $primes{$copy};
                substr( $copy, 0, 1 ) = '';
                if ( $copy eq '' ) {
                    $trunc{$n}++ if $copy eq '';
                    last;
                }
            }
            last if scalar keys %trunc > 30;
        }
        $n++;
    }

    say join ', ', sort { $a <=> $b } keys %trunc;

    sub is_prime ($n) {
        for ( 2 .. sqrt $n ) { return unless $n % $_ }
        return 1;
    }
```

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/duncan-c-white/perl/ch-1.pl)

Duncan makes use of his [`MakePrimes`](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/duncan-c-white/perl/MakePrimes.pm) module, which, as you might well expect, makes primes. Specifically, it contains a sieve function `primes_upto($n)` which provides a list of all primes up to a specified maximum value. The number of primes needed for this challenge has to be large enough to produce the requested number of truncatable ones, but we don't immediately know how many that is. A provision is therefore made that should we need more, a second function can be called, `moreprimes()`, which will fill the gap up to some specified higher value. This is called as many times as needed until we arrive where we're going.

It's unclear what will happen if we ask it for more than the 4260 actual truncatable primes, but I feel confident all of the submissions seen today will break long before arriving at 357,686,312,646,216,567,629,137. This will keep gathering more primes by the batch of 10,000 candidates though, until something gives: memory, time or patience. Or maybe some capacitor on the motherboard.

```perl
    my $bandwidth = 10000;
    my $upto = $bandwidth;
    my @primes = primes_upto( $upto );
    #say "last prime up to $upto is $primes[-1]";
    map { $isprime{$_} = 1 } @primes;

    my @ltprimes = grep { left_truncatable($_) } @primes;
    my $ltprimesfound = @ltprimes;
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/athanasius/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/athanasius/raku/ch-1.raku)

And it seems in the nick of time, the monk arrives on set with a fresh outlook: let's *build* primes, digit-by-digit. They'll be truncatable because we'll make sure the kernals are always prime along the way, and only keep the good ones.

Examining the single digits, a little analysis (detailed in the extensive notes with the script) concludes that all LTPs, as they are called, must end in 3 or 7. In brief: 0 is excluded; 1 is not prime; even numbers aren't prime; 5s are all divisible by 5 and that's all she wrote. So starting with 3 and 7 we add a single digit from 1 to 9 on the left edge and test the new number for primeness. Candidates deemed prime are accumulated in a new list.

Once a run is complete the previous base list is aded to the LPT list, and the new list becomes the base. In this way one additional digit is added to the number length with each set of passes. As the lists are ordered, the results are as well, so we can stop at any point once the required number of LPTs has been created.

One thing though, is that a kernal of (2,5) is needed to get these valid truncatable primes, even though no other numbers can be made from them. This requires a `sort` at the end to straighten out the initial (2, 5, 3, 7) sequence. Unless, you know, we don't care about that. The sorting of the results is unspecified.

```perl
    my @ltps  = (2, 5);
    my @bases = (3, 7);
    my $count = scalar @ltps + scalar @bases;

    while ($count < $TARGET && scalar @bases > 0)
    {
        my @new;

        OUTER_FOR:
        for my $i (1 .. 9)
        {
            for my $base (@bases)
            {
                my $p = $i . $base;

                if (is_prime( $p ))
                {
                    push @new, $p;
                    last OUTER_FOR unless ++$count < $TARGET;
                }
            }
        }

        push @ltps, @bases;
        @bases = @new;
    }

    printf "The first %d left-truncatable prime numbers in base 10:\n%s\n",
            $TARGET, join ', ', sort { $a <=> $b } @ltps, @bases;
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC147 - Truncatable Prime - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/01/12/pwc147-truncatable-prime/)

We'll close with Flavio, who also provides a constructive approach. He notes on his [writeup on the subject](https://github.polettix.it/ETOOBUSY/2022/01/12/pwc147-truncatable-prime/) that his solution was complicated enough for his to question its correctness. Persusing it I will have to concur. It seems... denser than the monk's airy grace. However it does prove sound. Confusing or not it is rather thoroughly explained in the writeup.

```perl
    say nth_left_truncatable($_) for 1 .. shift // 20;

    sub nth_left_truncatable ($nth) {
       state $cache = [ grep { is_prime($_) && is_prime(substr $_, 1) } 10 .. 99 ];
       state $prefix = 1;
       state $first_id = 0;
       state $next_first_id = $cache->@*;
       state $id = $first_id;
       while ($cache->@* < $nth) {
          my $candidate = $prefix . $cache->[$id++];
          push $cache->@*, $candidate if is_prime($candidate);
          if (length($candidate) == length($cache->[$id])) { # toppled over!
             if ($prefix < 9) {
                ++$prefix;
             }
             else {
                $prefix = 1;
                ($first_id, $next_first_id) = ($next_first_id, $id);
             }
             $id = $first_id; # just reset the cursor
          }
       }
       return $cache->[$nth - 1];
    }
```

Of additional interest, for those still with us, is a superior test for primality, based on a form of 6*k* ± 1 optimization in the trial division search. The underlying logic in explored at leangth in the [Wikipedia page on the topic](https://en.wikipedia.org/wiki/Primality_test).

```perl
    sub is_prime { # https://en.wikipedia.org/wiki/Primality_test
       return if $_[0] < 2;
       return 1 if $_[0] <= 3;
       return unless ($_[0] % 2) && ($_[0] % 3);
       for (my $i = 6 - 1; $i * $i <= $_[0]; $i += 6) {
          return unless ($_[0] % $i) && ($_[0] % ($i + 2));
       }
       return 1;
    }
```

Now that was worth waiting for.



## Blogs and Additional Submissions in Guest Languages for Task 1:


[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/awk/ch-1.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/bash/ch-1.sh), [Basic](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/basic/ch-1.bas), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/bc/ch-1.bc), [Befunge-93](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/befunge-93/ch-1.bf93), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/c/ch-1.c), [Cobol](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/cobol/ch-1.cb), [Csh](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/csh/ch-1.csh), [Erlang](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/erlang/ch-1.erl), [Forth](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/forth/ch-1.fs), [Fortran](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/fortran/ch-1.f90), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/go/ch-1.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/java/ch-1.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/lua/ch-1.lua), [M4](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/m4/ch-1.m4), [Mmix](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/mmix/ch-1.mms), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/node/ch-1.js), [Ocaml](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/ocaml/ch-1.ml), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/pascal/ch-1.p), [Php](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/php/ch-1.php), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/python/ch-1.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/r/ch-1.r), [Rexx](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/rexx/ch-1.rexx), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/ruby/ch-1.rb), [Scheme](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/scheme/ch-1.scm), [Sed](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/sed/ch-1.sed), [Sql](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/sql/ch-1.sql), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/tcl/ch-1.tcl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 147: Truncatable Prime](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-147-1.html)


[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/arne-sommer/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/arne-sommer/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Pentagon Prime with Raku and Perl](https://raku-musings.com/pentagon-prime.html)


[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/bruce-gray/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/bruce-gray/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[TWC 147: Prime without Left, and Pent without Quad | Bruce Gray](http://blogs.perl.org/users/bruce_gray/2022/01/twc-147-prime-without-left-and-pent-without-quad.html)


[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/cheok-yin-fung/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/cheok-yin-fung/awk/ch-1.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/cheok-yin-fung/bash/ch-1.sh), [C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/cheok-yin-fung/cpp/ch-1.cpp), [Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/cheok-yin-fung/julia/ch-1.jl), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/cheok-yin-fung/node/ch-1.js), [Smalltalk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/cheok-yin-fung/smalltalk/ch-1.st)


&nbsp;&nbsp;**blog writeup:**
[CY's Take on The Weekly Challenge #147 ](https://e7-87-83.github.io/coding/challenge_147.html)


[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/jaldhar-h-vyas/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/jaldhar-h-vyas/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 147](https://www.braincells.com/perl/2022/01/perl_weekly_challenge_week_147.html)


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/james-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #147](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-147/james-smith)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/laurent-rosenfeld/raku/ch-1.raku), [Ring](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/laurent-rosenfeld/ring/ch-1.ring)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 147: Truncatable Primes and Pentagon Numbers | laurent_r](http://blogs.perl.org/users/laurent_r/2022/01/perl-weekly-challenge-147-truncatable-primes-and-pentagon-numbers.html)


[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/mohammad-anwar/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/mohammad-anwar/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/mohammad-anwar/raku/ch-1.raku), [Swift](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/mohammad-anwar/swift/ch-1.swift)


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/wlmb/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 147 – W. Luis Mochán](https://wlmb.github.io/2022/01/10/PWC147/)


------------------------------------------





---

# TASK 2 {#PWC147TASK2}

# Pentagon Numbers
*Submitted by: Mohammad S Anwar*<br>
Write a sript to find the first pair of Pentagon Numbers whose sum and difference are also a Pentagon Number.

Pentagon numbers can be defined as P(n) = n(3n - 1)/2.

**Example**
```
    The first 10 Pentagon Numbers are:
    1, 5, 12, 22, 35, 51, 70, 92, 117 and 145.

    P(4) + P(7) = 22 + 70 = 92 = P(8)
    but
    P(4) - P(7) = |22 - 70| = 48 is not a Pentagon Number.
```




## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/adam-russell/perl/ch-2.pl),
[**Alexander Karelas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/alexander-karelas/perl/ch-2.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/alexander-pankoff/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/arne-sommer/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/athanasius/perl/ch-2.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/bruce-gray/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/dave-jacoby/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/james-smith/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/laurent-rosenfeld/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/mattneleigh/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/perlboy1967/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/pete-houston/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/peter-campbell-smith/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/sgreen/perl/ch-2.pl),
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/steven-wilson/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/ulrich-rieke/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/wlmb/perl/ch-2b.pl)

By arranging units in two Cartesian dimensions, we develop the concept of area, and generalizing the relationship between one linear dimension and its area complement we arrive at the idea of square numbers. It doesn't take much of a jump from this to close-packing units in a triangular formation to visualize the triangular numbers. The numbers scale as the related regular polygons do, along the length of the sides. The first non-trivial polygonal number is the order of the polygon: 3 for the triangular numbers, 4 for the squares.

Going the other way, however, to a 5-sided pentagon, is harder to visualize because pentagons on their own are not space-filling. However an analogy can be made between the relationship the triangulars to the squares and the pentagonals to the hexagonals. A square can be divided along a diagonal to produce two triangles. If we do not allow partial unit areas one of these triangles will include the units along the diagonal and the other exclude them. These two triangles represent two sequential triangular numbers, combining to form a square number.

Likewise dividing a hexagon along an axis produces two shapes, one absorbing the diagonal and the other excluding it. These two shapes have can be thought to represent adjacent *generalized* pentagonal numbers. The mapping of relationships is not perfect because we introduce a new twist: the mathematical definition of a pentagonal number is quadratic, and as a result *negative* unit values produce *positive* numbers that intersperse between the values in the *proper* sequence. Including the negative units in the index sequence (0, 1, −1, 2, −2, 3, −3, 4, ...) produces these ordered *generalized* pentagonal numbers. The halves of a hexagonal number are two sequential terms from this sequence, in the same way the two triangles from a square. I think that's pretty wild, myself.

The pentagonals are further related to the triangulars as a recurrence relation can be established between the two, allowing pentagonals to be formed from previously indexed triangulars.

So there is some sound mathematical reasoning behind computing the sum and difference between various pentagonal numbers. Which is nice, that this task isn't as fanciful as the first.

Although not specified, the team stuck to the proper pentagonal numbers for this task, generated from the sequence:

(1, 2, 3, 4, ...).

There were 23 correct submissions for the second task this past week.

## A SELECTION sampled from the SUBMISSION pool
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/pete-houston/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/arne-sommer/perl/ch-2.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/alexander-pankoff/perl/ch-2.pl),
[**Alexander Karelas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/alexander-karelas/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/e-choroba/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/james-smith/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/perlboy1967/perl/ch-2.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/bruce-gray/perl/ch-2.pl),
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/wlmb/perl/ch-2b.pl)


I find it really interesting that counter to the somewhat freewheeling interpretations of the directives we usually find amongst the submissions, not one member chose to broaden the search to the generalized pentagonal numbers. After all, the function remains the same. The ordering of the sequence by index or value is not declared. A quick modification of my own script reveals an alternative solution:

```
    found pair n = 29, m = 22 :

    P(29) = 1247
    P(22) = 715
    sum is 1962
        which is P(-36)
    diff is 532
        which is P(19)
```

which seems quite a bit closer to the origin than (P(2167), P(1020)). But no one seemingly searched for it.

Which in turn leads into the question of what exactly "first" means in this context. Is the solution (1020, 2167) "closer" than some hypothetical pair (1,3000)? And should we be using absolute values or indices in the pentagonal number sequence? Again, unexpectedly, this question did not raise the usual kerfluffell. Strange times indeed.

The upshot of all this is that the solution found was always either the decimal pair (7042750, 5482660) or the equivalent mapped pentagonal pair (2167, 1020).

Unless, of course, there was an off-by-one error.

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/pete-houston/perl/ch-2.pl)

Pete will start us off today with a very direct approach. Working upwards towards an arbitrarily large cautionary limit, he takes an iterated value and computes its associated pentagon, caching it away in a hash. Then the list of previously computed pentagonals is considered, with each computing the difference, which should be logged as seen, and the sum, which requires a separate `is_pentagon()` validation routine.

This solution, it should be noted, may seem computationally expensive but is direct and remarkably fast.

```perl
    for my $i (1 .. $limit) {
        # Calculate this one
        my $pn = $i * ( 3 * $i - 1) / 2;
        # Loop over all previous ones
        for my $j (@pns) {
        	my ($diff, $sum) = ($pn - $j, $pn + $j);
        	if ($seen{$diff} && is_pentagon ($sum)) {
        		print "$pn and $j are the first pair\n";
        		exit;
        	}
        }
        # Store this one
        push @pns, $pn;
        $seen{$pn} = 1;
    }

    # Just in case we don't find a valid pair
    die "Bailing out after trying $limit pentagon numbers.\n";

    sub is_pentagon {
        my $x = shift;
        # Quadratic: 3i^2 -i - 2x = 0
        # root = (-b +/- sqrt(b^2 - 4ac)) / 2a
        my $term = sqrt (1 + 24 * $x);
        # Cannot be negative
        my $root = (1 + $term) / 6;
        # So numerator must be an integer multiple of 6, I think.
        return $root == int $root;
    }
```

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/arne-sommer/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/arne-sommer/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Pentagon Prime with Raku and Perl](https://raku-musings.com/pentagon-prime.html)

Arne takes a similarly direct approach, incrementing a counter to produce an associated pentagon, then decrementing a copy of that value searching for a complement that differences and sums properly. To validiate the aritmetic results we use the same square root formula we saw above.

Because this solution found the result in a reasonable length of time, Arne did not see the need to add a cache. He's not wrong.


```perl
    while ($a++)
    {
      my $b = $a;

      while ($b-- > 1)
      {
        my $penta_a = pentagonial($a);
        my $penta_b = pentagonial($b);

        if (is_pentagonial($penta_a + $penta_b) && is_pentagonial($penta_a - $penta_b))
        {
          say "$penta_b $penta_a";
          exit;
        }
      }
    }

    sub is_pentagonial($candidate)
    {
      my $check = (1 + sqrt(1 + 24 * $candidate)) / 6;
      return int($check) == $check;
    }

    sub pentagonial($number)
    {
      return $number * ( 3 * $number -1) / 2;
    }
```

[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/alexander-pankoff/perl/ch-2.pl)

Pankoff starts with an incrementing value, and for each insrtances constructs a set of tuples each containing the corresponding pentagonal number and one of those previously constructed. This provides him a list of combinations to consider. The listwise operator `first` from `List::Util` is then called on to scan the list of tuples for the first pair that meet the conditions specified in the `check()` routine. That routine creates the sum an difference and validates them using the square root test for pentagonality.

[ed: In a side note, although I'm going to leave it, I'm going to make a concerted effort to avoid that monstrosity of a word going forward. It really should be taken out back and put out of our misery.]

Because Pankoff keeps track of the values of the sequence, rather than the positions, these are output: **1560090**, **7042750**

```perl
    sub find_first_pair() {
        my $found;

        my @pentagon_numbers;

        my $i = 2;
        for ( my $i = 2 ; !$found ; $i++ ) {
            my $p     = pentagon_number($i);
            my @pairs = map { [ $_, $p ] } @pentagon_numbers;
            push @pentagon_numbers, $p;
            my $found = first { check(@$_) } @pairs;
            if ($found) {
                return $found;
            }
        }
    }

    sub check ( $a, $b ) {
        return is_pentagon_number( $a + $b )
          && is_pentagon_number( abs( $a - $b ) );
    }

    # https://en.wikipedia.org/wiki/Pentagonal_number#Tests_for_pentagonal_numbers
    sub is_pentagon_number($x) {
        my $n = ( sqrt( 24 * $x + 1 ) + 1 ) / 6;
        return $n == int($n);
    }
```

[**Alexander Karelas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/alexander-karelas/perl/ch-2.pl)

Karelas, on the other hand, caches each pentagonal number in a hash mapping back to the index that seeded it. In this way he can have both worlds: rapid lookup of a number to find out whether it has been seen and the ability to reconstruct the original sequence position.

He employs another trick as well, with a lookahead. At each iteration the *i*-th pentagon is created, but also the 2*i*-th and also that at 2*i*-1.

The function `get_nth_pentagon_number()` works as a general-purpose cache lookup, returning the already-constructed value or creating it if necessary.

```perl
    sub get_nth_pentagon_number ($n) {
        my $pentagon = $cache[$n];
        $pentagon //= do {
            $cache[$n] = $n * (3 * $n - 1) / 2;
            $cache{ $cache[$n] } = $n;
        }
    }

    for (my $i = 1; ; $i++) {
        my $ith = get_nth_pentagon_number($i);
        get_nth_pentagon_number(2 * $i - 1);
        get_nth_pentagon_number(2 * $i);
        for (my $j = 1; $j < $i; $j++) {
            my $jth = get_nth_pentagon_number($j);
            if (exists $cache{$ith + $jth} and exists $cache{$ith - $jth}) {
                say "P($i) + P($j) = $ith + $jth = @{[ $ith + $jth ]} = P(", $cache{$ith + $jth}, ")";
                say "P($i) - P($j) = $ith - $jth = @{[ $ith - $jth ]} = P(", $cache{$ith - $jth}, ")";
                exit;
            }
        }
    }
```



[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/e-choroba/perl/ch-2.pl)

With three things: an array, a hash and a subroutine named `pentagon_numbers`, Choroba's script is awash with postfix bracketing enough to make the faint-of-heart cry. But no matter, as it sorts itself out well enough. The subroutine, for instance, only serves as a wrapper for the main logic block. In a loop, this in turn performs a nifty bit of magic, calling a previously created closure, `add_pentagon_number()` around an incrementing variable `$last`, which adds another value to the array, and adds this again as a hash key. Latest pentagonal addition in hand, we start searching the array values less than half the last added for a hash key for the difference between the latest addition, which assumes the role of the sum of our search pair, that also has the difference found in the hash table.

In this roundabout way we are only doing hash lookups for existing pentagonal numbers,  calculating them once when inserting new values into the parallel data structures.

As hash lookups are highly tuned in Perl, and computation is minimized, looping through the possiblities is incredably fast. This technique edged out every alternative offered today for raw speed.

```perl
    my @pentagon_numbers;
    my %pentagon_numbers;
    {   my $last = 0;
        sub add_pentagon_number {
            ++$last;
            push @pentagon_numbers, $last * (3 * $last - 1) / 2;
            undef $pentagon_numbers{ $pentagon_numbers[-1] };
            return $pentagon_numbers[-1]
        }
    }

    sub pentagon_numbers {
        while (1) {
            my $sum = add_pentagon_number();
            for my $p1 (@pentagon_numbers) {
                last if $p1 * 2 > $sum;

                my $p2 = $sum - $p1;
                next unless exists $pentagon_numbers{$p2}
                         && exists $pentagon_numbers{$p2 - $p1};

                return $p1, $p2
            }
        }
    }

    say join ' ', pentagon_numbers();
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/james-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #147](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-147/james-smith)

With a submission half-way between screeching cartoon invective and a malfunctioning printer, James' foray into the ring is no slouch either in time department.

```perl
    my %q = map { $_=>$_ } (my @p = (0,1)); #1
    for(my $o=2;;$o++) {
      for(my $i=1, ($q{$p[$o]||=$o*(3*$o-1)/2}||=$o); $i<$o; $i++) { #2
        (my $d=$q{$p[$o]-$p[$i]}) || next;                           #3
        (push(@p, @p * (3*@p-1)/2), $q{$p[-1]}=@p) while $p[$o]+$p[$i] > $p[-1];  #4
        (my $s=$q{$p[$o]+$p[$i]}) || next;                           #5
        die "First 2 pents are:\n  p($o) = $p[$o]\n  p($i) = $p[$i],\n  p($o) + p($i) = $p[$s] = p($s),\n  p($o) - p($i) = $p[$d] = p($d).\n" #6
      }
    }
```

I'll include his list of notes to help us follow along at home:

* #1 - initialise the map of pentagonal numbers.
* #2 - make sure that the next entry in the pentagonal numbers is present
* #3 - try next combination if the difference is not a pentagonal number
* #4 - extend pentagonal number list so that it contains all pentagonal numbers up to and including the sum of the two pentagonal numbers.
* #5 - try next combination if the sum is not a pentagonal number
* #6 - we display the summary information about the pentagonal numbers

It's very kind of him to provide a legend.



[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/perlboy1967/perl/ch-2.pl)

Only a few milliseconds behind Choroba is Niels' submission. Using parallel array/hash stuructures as Choroba did, at each iteratation another pentagonal number is added to both. This allows us to simultaneously keep track of the size of the pentagonal pool, and the largest value in it.

A second iterator `$i` is maintained in sync with the loop, and this will be the index of our larger pentagon. For this value we then search smaller values for those that when subtracted also yield a pentagon. If this is found we move on to creating a sum and filling out the data structures as required so that the last value added exceeds the sum. If we don't have enough values to properly determine whether the sum is a pentagon, we simply make more until we know. If no sums are found for any differences found the `$i` iterator is incremented and we try the next pentagon on for size.

As stated this is consistently but not significantly slower than the no-lookahead version. I suspect that highly-tuned `pentagonNumber()` routine at the top might have something to do with it.

```perl
    sub pentagonNumber($) {
      $_[0]*(3*$_[0]-1) >> 1;
    }

    my @p = (undef);
    my %pIdx;

    my $i = 1;

    while (1) {
      push(@p,pentagonNumber scalar @p);
      $pIdx{$p[-1]} = scalar @p - 1;

      foreach my $j (1 .. $i-1) {
        my $dif = $p[$i] - $p[$j];
        next if !exists $pIdx{$dif};

        my $sum = $p[$i] + $p[$j];

        while ($p[-1] <= $sum) {
          push(@p,pentagonNumber scalar @p);
          $pIdx{$p[-1]} = scalar @p - 1;
        }

        if (exists $pIdx{$sum}) {
          printf "P(%d) + P(%d) = %d + %d = %d = P(%d)\n",
                 $i, $j, $p[$i], $p[$j], $sum, $pIdx{$sum};
          printf "P(%d) - P(%d) = %d - %d = %d = P(%d)\n",
                 $i, $j, $p[$i], $p[$j], $dif, $pIdx{$dif};
          exit;
        }
      }
      $i++;
    }
```


[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/bruce-gray/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/bruce-gray/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[TWC 147: Prime without Left, and Pent without Quad | Bruce Gray](http://blogs.perl.org/users/bruce_gray/2022/01/twc-147-prime-without-left-and-pent-without-quad.html)

Bruce gives us a slightly different manner of rearranging the sequence values to find a matching pair.

As he states [in his writeup](http://blogs.perl.org/users/bruce_gray/2022/01/twc-147-prime-without-left-and-pent-without-quad.html)

>With this reorganization, we will always be "looking backwards" into parts of @pent that have already been generated. The cost will be in generating all the way to A; a solution using is-pentagon-number would only need to generate to B.

Notice the parallels with Niels' approach. As it turns out there is very little actual inefficiency in computing a few extra pentagonals this way.

```perl
    # Where A,B,C,D are all pentagonal numbers:
    # B + C == A      ,  B - C == D     Original problem statement in task
    #     C == A - B  ,  B - C == D     Rearranged as two differences
    #     C == A - B  ,  B-(A-B)==D     Rearranged as two differences(C,D), expressed only in A,B
    # So, if we find any two pentagonal numbers A,B where A-B is pentagonal and B-(A-B) is pentagonal,
    # then we have a solution. The desired numbers will be the inner two: (B,C)
    sub find_first_plus_and_minus_pentagon_numbers ( ) {
        my @pents;
        my %p;
        for ( my $i = 1 ; ; $i++ ) {
            my $A = $i * (3*$i - 1) / 2; # Pentagon number

            for my $B (@pents) {
                my $D = $A - $B;
                my $C = $B - $D;
                return $B, $C if $p{$C} and $p{$D};
            }

            $p{$A} = 1;
            push @pents, $A;
        }
    }

    say join ' ', find_first_plus_and_minus_pentagon_numbers();
```






[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/awk/ch-2.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/bash/ch-2.sh), [Basic](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/basic/ch-2.bas), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/bc/ch-2.bc), [Befunge-93](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/befunge-93/ch-2.bf93), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/c/ch-2.c), [Cobol](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/cobol/ch-2.cb), [Csh](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/csh/ch-2.csh), [Erlang](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/erlang/ch-2.erl), [Forth](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/forth/ch-2.fs), [Fortran](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/fortran/ch-2.f90), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/go/ch-2.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/java/ch-2.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/lua/ch-2.lua), [M4](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/m4/ch-2.m4), [Mmix](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/mmix/ch-2.mms), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/node/ch-2.js), [Ocaml](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/ocaml/ch-2.ml), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/pascal/ch-2.p), [Php](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/php/ch-2.php), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/python/ch-2.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/r/ch-2.r), [Rexx](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/rexx/ch-2.rexx), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/ruby/ch-2.rb), [Scheme](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/scheme/ch-2.scm), [Sed](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/sed/ch-2.sed), [Sql](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/sql/ch-2.sql), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/abigail/tcl/ch-2.tcl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 147: Pentagon Numbers](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-147-2.html)

I truly enjoy it when Abigail decides to grace us with their formidable analytical abilities in solving our little tasks. And I really mean that. Here they have decided to make the challenge a little more interesting by recasting the Pentagonal number definition as a recurrence relation:

**P**(*n*+1) = **P**(*n*) + *n* + *n* + *n* + 1

Oh and did I forget to mention? We're not going to use multiplication or division either.

As new pentagonal numbers are created, processing looks backwards to the list of previous values. As they describe it:

>For each previous pentagonal number s (with s <= p / 2), we will check if both p - s and p - s - s are pentagonal numbers. If so, we have the answer as s and p - s are pentagonal numbers and so are their sum (s + p - s = p) and difference (p - s - s).

Makes sense, no? The created pentagons are stored in a hash for easy and efficient access.

```perl
    my %pentagon;

    MAIN: for (;;) {
        state $n = 0;
        state $p = 0;
        $pentagon {$p += $n + $n + $n ++ + 1} ++;

        $_ + $_ < $p && $pentagon  {$p - $_}
                     && $pentagon  {$p - $_ - $_}
                     && say ("$_ ", $p - $_)
                     && last MAIN for keys %pentagon;
    }
```


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/wlmb/perl/ch-2b.pl)

&nbsp;&nbsp;**alternate version:**
[nested loops](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/wlmb/perl/ch-2.pl)

&nbsp;&nbsp;**alternate version:**
[PDL intermediate form ](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/wlmb/perl/ch-2a.pl)



&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 147 – W. Luis Mochán](https://wlmb.github.io/2022/01/10/PWC147/)

Luis walks us through a string of related solutions, refining the process. Starting with a failed attempt using the Perl Data Language, he backtracks back to basics with two nested loops in a style much as we've seen before. Then he starts improving on this, substituting out first the inner loop and the both with PDL code, finally arriving at a PDL one-liner that works.

It's quite a ride, well laid out in his thorough [writeup on the subject](https://wlmb.github.io/2022/01/10/PWC147/).

Here's the PDL to consider:

```perl
    use PDL;
    use PDL::NiceSlice;

    die "Usage: ./ch-2a.pl largest_index\n" unless @ARGV==1;
    my $N=shift;
    my $n=zeroes(long, $N)->xvals+1;
    my $p=$n*(3*$n-1)/2;
    my $pass=whichND(pentagonal($p+$p(*1)) & pentagonal($p-$p(*1)));
    die "No solution found. Try to increase the largest_index" unless $pass->dim(1)>0;
    my $ij=$pass(:,(0))+1;
    my ($pi, $pj)=map {$p(($_-1))} (my ($i, $j)=map {$ij(($_))} (0,1));
    my ($s, $d)=($pi+$pj, $pi-$pj);
    my ($k, $l)=map {index_of($_)} ($d, $s);
    say "p$i=$pi\np$j=$pj\np$i-p$j=$d=p$k\np$i+p$j=$s=p$l";
    sub pentagonal {
        my $p=shift;
        my $p241=24*$p+1;
        my $sp241=$p241->sqrt;
        return (($p>0)&($sp241**2==$p241) & ($sp241%6==5));
    }
    sub index_of {
        my $p=24*shift()+1;
        my $s=sqrt($p);
        return ($s+1)/6;
    }
```

...and we shouldn't pass over that one-liner, either.

```perl
    perl -MPDL -MPDL::NiceSlice -E '$n=zeroes(long,2500)->xvals+1;
    $p=$n*(3*$n-1)/2; ($i,$j)=whichND(pent($p+$p(*1))&pent($p-$p(*1)))->(:,0)->list;
    ($pi,$pj)=($p(($i)),$p(($j))); say "pi=$pi, pj=$pj, pi-pj=", $pi-$pj, " pi+pj=", $pi+$pj;
    sub pent {$S=($P=24*shift()+1)->sqrt; $P>0&($S**2==$P)&($S%6==5)}'
```







## Blogs and Additional Submissions in Guest Languages for Task 2:


[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/adam-russell/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/adam-russell/prolog/ch-1.p)


&nbsp;&nbsp;**blog writeup:**
[Primes and Pentagonals — Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/01/16)


&nbsp;&nbsp;**blog writeup:**
 [Primes and Pentagonals — Prolog — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/01/16)


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/athanasius/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/athanasius/raku/ch-2.raku)


[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/dave-jacoby/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Truncations and Pentagons: The Weekly Challenge #147 | Committed to Memory](https://jacoby.github.io/2022/01/11/truncations-and-pentagons-the-weekly-challenge-147.html)


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC147 - Pentagon Numbers - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/01/13/pwc147-pentagon-numbers/)


[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/jaldhar-h-vyas/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/jaldhar-h-vyas/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 147](https://www.braincells.com/perl/2022/01/perl_weekly_challenge_week_147.html)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/laurent-rosenfeld/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/laurent-rosenfeld/julia/ch-2.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/laurent-rosenfeld/raku/ch-2.raku), [Ring](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/laurent-rosenfeld/ring/ch-2.ring)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 147: Truncatable Primes and Pentagon Numbers | laurent_r](http://blogs.perl.org/users/laurent_r/2022/01/perl-weekly-challenge-147-truncatable-primes-and-pentagon-numbers.html)


[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/peter-campbell-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Chop off their heads and conquer the Pentagon (week 147)](https://pjcs-pwc.blogspot.com/2022/01/chop-off-their-heads-and-conquer.html)


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/roger-bell-west/javascript/ch-2.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/roger-bell-west/kotlin/ch-2.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/roger-bell-west/lua/ch-2.lua), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/roger-bell-west/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 147: Truncating the Pentagon](https://blog.firedrake.org/archive/2022/01/The_Weekly_Challenge_147__Truncating_the_Pentagon.html)


[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/sgreen/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/sgreen/python/ch-2.py)


&nbsp;&nbsp;**blog writeup:**
[Look mum, no inputs 😛](https://dev.to/simongreennet/look-mum-no-inputs-3lon)


[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/steven-wilson/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/steven-wilson/javascript/ch-2.js)


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/ulrich-rieke/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-147/ulrich-rieke/raku/ch-2.raku)







---

# BLOGS {#PWC147BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, by some miracle I somehow continue to maintain my bearings.**

**Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your Unquenchable *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC136BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *FOLLOW* these *BLOG* *LINKS*:

**( ...*don't think, trust your training, you're in the zone, just do it ...* )**


**Abigail**

 * [Perl Weekly Challenge 147: Truncatable Prime](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-147-1.html) ( *Perl* )
 * [Perl Weekly Challenge 147: Pentagon Numbers](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-147-2.html) ( *Perl* )

**Adam Russell**

 * [Primes and Pentagonals — Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/01/16) ( *Perl* )
 * [Primes and Pentagonals — Prolog — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/01/16) ( *Prolog* )

**Arne Sommer**

 * [Pentagon Prime with Raku and Perl](https://raku-musings.com/pentagon-prime.html) ( *Perl & Raku* )

**Bruce Gray**

 * [TWC 147: Prime without Left, and Pent without Quad | Bruce Gray](http://blogs.perl.org/users/bruce_gray/2022/01/twc-147-prime-without-left-and-pent-without-quad.html) ( *Perl & Raku* )

**Cheok-Yin Fung**

 * [CY's Take on The Weekly Challenge #147 ](https://e7-87-83.github.io/coding/challenge_147.html) ( *Perl* )

**Colin Crain**

 * [primes-rimes-imes-mes-es-s | Programing Explorations in Perl and Raku](http://colincrain.com/2022/01/16/primes-rimes-imes-mes-es-s/) ( *Perl* )

**Dave Jacoby**

 * [Truncations and Pentagons: The Weekly Challenge #147 | Committed to Memory](https://jacoby.github.io/2022/01/11/truncations-and-pentagons-the-weekly-challenge-147.html) ( *Perl* )

**Flavio Poletti**

 * [PWC147 - Truncatable Prime - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/01/12/pwc147-truncatable-prime/) ( *Perl & Raku* )
 * [PWC147 - Pentagon Numbers - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/01/13/pwc147-pentagon-numbers/) ( *Perl & Raku* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 147](https://www.braincells.com/perl/2022/01/perl_weekly_challenge_week_147.html) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #147](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-147/james-smith) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 147: Truncatable Primes and Pentagon Numbers | laurent_r](http://blogs.perl.org/users/laurent_r/2022/01/perl-weekly-challenge-147-truncatable-primes-and-pentagon-numbers.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 147: truncating pentagons – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/01/10/PerlWeeklyChallenge147.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 147: truncating pentagons – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/01/10/PerlWeeklyChallenge147.html#task1pg) ( *PostgreSQL* )

**Mark Senn**

 * [Truncatable Primes](https://engineering.purdue.edu/~mark/twc-147-1.pdf) ( *Raku* )
 * [Pentagonal Numbers](https://engineering.purdue.edu/~mark/twc-147-2.pdf) ( *Raku* )

**Peter Campbell Smith**

 * [Chop off their heads and conquer the Pentagon (week 147)](https://pjcs-pwc.blogspot.com/2022/01/chop-off-their-heads-and-conquer.html) ( *Perl* )

**Roger Bell_West**

 * [RogerBW's Blog: The Weekly Challenge 147: Truncating the Pentagon](https://blog.firedrake.org/archive/2022/01/The_Weekly_Challenge_147__Truncating_the_Pentagon.html) ( *Perl & Raku* )

**Simon Green**

 * [Look mum, no inputs 😛](https://dev.to/simongreennet/look-mum-no-inputs-3lon) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 147 – W. Luis Mochán](https://wlmb.github.io/2022/01/10/PWC147/) ( *Perl* )
