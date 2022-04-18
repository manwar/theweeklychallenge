---
author:       Colin Crain
date:         2022-04-18T00:00:00
description:  "Colin Crain › Perl Weekly Review #156"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #156"
image:        images/blog/p5-review-challenge-156.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-155/).* )

Welcome to the Perl review pages for **Week 156** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

before we begin, you may wish to revisit either the pages for the [**original tasks**](/blog/perl-weekly-challenge-156/) or the summary [**recap**](/blog/recap-challenge-156/) of the challenge. But don't worry about it, the challenge text will be repeated and presented as we progress from task to task.

Oh, and one more thing before we get started:


### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please feel free to email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

<div align= center><strong>...So finally, without further ado...</strong></div>

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC156TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC156TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC156BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC156TASK1}

# Pernicious Numbers
*Submitted by: Mohammad S Anwar*

Write a script to permute first 10 Pernicious Numbers.

A pernicious number is a positive integer which has prime number of ones in its binary representation.

The first pernicious number is 3 since binary representation of 3 = (11) and 1 + 1 = 2, which is a prime.

**Expected Output**
```
    Expected Output
    3, 5, 6, 7, 9, 10, 11, 12, 13, 14
```


## about the solutions
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/adam-russell/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/athanasius/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/colin-crain/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/jo-37/perl/ch-1.pl),
[**Kueppo Wesley**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/kueppo-wesley/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/lubos-kolouch/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/mattneleigh/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/perlboy1967/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/pete-houston/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/peter-campbell-smith/perl/ch-1.pl),
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/pokgopun/perl/ch-1.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/robert-dicicco/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/roger-bell-west/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/ulrich-rieke/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/wlmb/perl/ch-1.pl)

What makes a good number theorist go bad? Is it lust for power? Fame and fortune no matter the price paid? The ravages of addiction, their dopamine systems mercilessly distorted by the perfection of countless proofs too beautiful for the mind to properly process? Or do all those limitless hours spent staring into the abyss leave their moral compass disoriented and disjoint, their soul adrift in a sea of connections, unable to find the horizon, unconcerned with right and wrong?

Curious as to all this, I took a [deep dive into the dark side of number theory](https://colincrain.com/2022/03/19/pernicious-perfidy) — informally known as "dark number theory" — and must say you will never find a more wretched hive of scum and villany than those who manage to lose their bearings on a straight line of integers.

Given two directions to go, you wouldn't think it so very difficult.

The sweeping judgements proclaimed in this wasteland of moral relativism are rigorously strict and shocking in their absolute condemnation: *all* so-called "positive" integers, as it works out, are [either repulsively worthy of scorn](https://en.wikipedia.org/wiki/Odious_number) or [outright evil](https://en.wikipedia.org/wiki/Evil_number), with no third case. The judgement for the classification into one group or another is quantified as its perfidy. If the perfidy is prime, we have a pernicious number. And these judgements are for the *positive* numbers!

All of this sounds pretty negative to me, I must say.

There were 24 submissions for the first task this past week.

## WHISTLING past the GRAVEYARD
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/polettix/perl/ch-1.pl),
[**Kueppo Wesley**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/kueppo-wesley/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/peter-campbell-smith/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/athanasius/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/ulrich-rieke/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/dave-jacoby/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/colin-crain/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/laurent-rosenfeld/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/james-smith/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/adam-russell/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/e-choroba/perl/ch-1.pl), and
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/roger-bell-west/perl/ch-1.pl)


"Perfidy is to parity as odious is to odd and evil is to even" - Tanya Khovanova, Alexey Radul ([*Tanya Khovanova's Math Blog*](https://blog.tanyakhovanova.com/2011/01/on-the-perfidy-of-negative-numbers/), 2nd January 2011, 10:43 pm).

The parity of a number is determined by the number of 1s in its binary representation. This information can then be used to set a [*parity bit*](https://en.wikipedia.org/wiki/Parity_bit) in digital error-checking. But then, because someone apparently left the door open, dark number theorists wandered into the room, and proceeded to look at not whether the count was even or odd, but whether or not it was *prime*. Thus were the pernicious numbers spawned in their uniquely injurious malignancy.

So we're going to need to either manually count 1s, or use some dark art to otherwise conclude the total is prime. This can thus be viewed as  either an administrative or mathematical obstacle. Some variation of a popcount function was the most common method, but we did see some more arcane alternatives.

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/athanasius/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/athanasius/raku/ch-1.raku)

We'll commence the running with the monk Athanasius, 20th pope of Alexandria — *And a happy Easter shoutout to you, sir!* — who devises a scheme to manually count the 1s in the binary representation of a number. This function, known as the population count or popcount, is curiously quite an old concept in computer science, occasionally implemented down at the processor level, as machine code, since the 1960s. A more generalized version of the idea, to find all non-null symbols in a set, is known as the [Hamming weight](https://en.wikipedia.org/wiki/Hamming_weight).

Converting a numeric value to a binary string is accomplished with the `%b` format for `sprintf`, and to actually count the 1s the `tr///` tool is used to translate the characters to a null string. This operaton returns the number of translations made. As this is accomplished through a fixed lookup table constructed during the BEGIN phase by the interpreter, the operation is extremely fast.

```perl
    MAIN:
    {
        my $target = parse_command_line();

        print "The first $target Pernicious Numbers:\n";

        my @pernicious;

        for (my $n = 1; scalar @pernicious < $target; ++$n)
        {
            my $bin  = sprintf '%b', $n;            # Convert to binary
            my $ones = $bin =~ tr/1//;              # Count the ones

            push @pernicious, $n if is_prime( $ones );
        }

        printf "%s\n", join ', ', @pernicious;
    }

```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC156 - Pernicious Numbers - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/03/16/pwc156-pernicious-numbers/)

Flavio eschews explicitly converting to binary, as internally it's already stored that way. Instead he performs a bitwise AND with the number 1, which of course has  one bit set in the extreme right position, and if this is true ratchets a counter. He then bit-shifts the number right once to examine the next digit, stopping when he runs out of number.

Elegant and succint. Some might use the word "crispy". I don't think *I* would, but some would.

```perl
    sub is_pernicious ($n) {
       my $count = 0;
       while ($n) {
          ++$count if $n & 1;
          $n >>= 1;
       }
       return is_prime($count);
    }
```

[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/peter-campbell-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Pernicious and weird ...](https://pjcs-pwc.blogspot.com/2022/03/pernicious-and-weird.html)

A third way to count 1s is presented by Peter, who uses a regular expression to match them directly in a global context. This operation, in a scalar context, also returns the number of matches made.

As for practical use these submissions remain demonstrations of technique, I want to take the time to complement Peter on his verbose commentary throughout the steps. This makes it considerably easier to follow for the less-experienced among us.

```perl
    for $j (1 .. 100) {

        # convert to binary
        $binary = sprintf('%b', $j);

        # get a list of the '1' matches and assign it to an array
        @ones = $binary =~ m|1|g;

        # count the number of elements in the array
        $count = scalar @ones;

        # and we have an answer if the count is prime
        next unless is_prime($count);
        say $j;
        last if $found ++ == 9;
    }
```

[**Kueppo Wesley**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/kueppo-wesley/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Pernicious.pl](https://wesleykueppo-new.bearblog.dev/perniciouspl/)

To complete our opening quad of submissions, and round out the general techniques used today, we have new member Kueppo, who brings us a mathematical method. He begins by extracting two formulae:

> 1. 2<sup>*n*</sup> + 1 is always pernicious for all positive integer *n* and has 2 ones.
> 2. 2<sup>*n*</sup> - 1 is pernicious if and only if *n* is prime and has *n* ones.

From these he determines that he can avoid counting 1s entirely.

```perl
    sub penicious {
        my ($v, $limit) = (3, shift);
        my @found = ();

        while (@found != $limit) {
            my ($fpower, $spower) = (log_base2($v + 1), log_base2($v - 1));
            if ($spower =~ /^\d+$/) {
                push @found, $v;
            } elsif ($fpower =~ /^\d+$/ and is_prime $fpower) {
                push @found, $v;
            } else {
                my ($ones, $val) = (0, sprintf '%b', $v);
                foreach (split '', $val) {
                	$ones++ if ($_ eq '1');
                }
                push @found, $v if (is_prime $ones);
            }
            $v++;
        }
        print join ', ', @found, "\n";
    }
```

It's neat. It works.

Note that to accomplish this he requires two helper functions, a test for primality and a converter to log<sub>2</sub>, as there is no built-in Perl function to compute this. Mathematically, though

log<sub>2</sub>*n* = log<sub>*e*</sub>*n* / log<sub>*e*</sub>2

So that's not too much trouble:

```perl
    sub log_base2 {
        my $n = shift;
        log($n) / log(2)
    }
```


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/ulrich-rieke/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/ulrich-rieke/cpp/ch-1.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/ulrich-rieke/haskell/ch-1.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/ulrich-rieke/raku/ch-1.raku)

Ulrich brings us a new technique to manually convert the base of a number to 2 by dividing down, keeping the result as an array of digits. He then applies a `grep` filter, passing only the 1s. The number of elements remaining is the population count, which is tested using a homemade primality check function.

```perl
    sub toBinary {
      my $num = shift ;
      my @nums ;
      while ( $num != 0 ) {
          my $remainder = $num % 2 ;
          push @nums, $remainder ;
          $num = floor ( $num / 2 ) ;
      }
      return reverse @nums ;
    }

    sub isPernicious {
      my $number = shift ;
      my @binary = toBinary( $number ) ;
      return isPrime( scalar( grep { $_ == 1 } @binary ) ) ;
    }
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/dave-jacoby/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Pernicious and Weird Are The Numbers We Two Can Share: Weekly Challenge #156 | Committed to Memory](https://jacoby.github.io/2022/03/14/pernicious-and-weird-are-the-numbers-we-two-can-share-weekly-challenge-156.html)

Dave provides us with a quite compact solution, counting the 1s by splitting the binary string into an array and then just summing the values. Obviously the 1s will up the sum and the 0s will not. I like this approach.

```perl
    while ( scalar @pernicious < 10 ) {
        $i++;
        if ( is_prime( count_ones( to_binary($i) ) ) ) {
            push @pernicious, $i;
        }
    }
    say join ', ', @pernicious;

    sub count_ones( $n ) {
        return sum0 split //, $n;
    }

    sub to_binary( $n ) {
        return sprintf '%b', $n;
    }

    sub is_prime ($n) {
        return 0 if $n == 0 || $n == 1;
        for ( 2 .. sqrt $n ) { return 0 unless $n % $_ }
        return 1;
    }
```

[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/colin-crain/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/colin-crain/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Pernicious Perfidy - Programming Excursions in Perl and Raku](https://colincrain.com/2022/03/19/pernicious-perfidy)

I was wondering what it was about Dave's method for counting the 1s that I liked, and it seems the answer is because I did it that way. I mean really, it's more accurate to say I did it that way *because* I already liked it, but whatever. For my solution I chose to exclude outside modules because I sometimes do that.

Of note I somewhat laboriously construct a lookup table of primes sufficiently large to match the largest number of binary digits under consideration. Which is a pretty small number, and would probably more sensibly accomplished using a direct test for primality. But again sometimes I make no assumptions whatsoever about the result set, and hey, maybe the pernicious numbers are an exceedingly sparse set?

Oh, and I've been playing around with iterator closures lately. That's fun.

Again, sometimes I just do that.

```perl
    my $p = prime_generator();
    my @primes = $p->();
    my %primes = ( $primes[-1] => 1 );

    while (@perns <= $request) {
        my $pop = popcount( $candidate );
        push @primes, $p->() and $primes{$primes[-1]}++ until $primes[-1] > $pop;
        push @perns, $candidate if $primes{$pop};
        $candidate++;
    }

    say "@perns";

    sub popcount ( $num, $sum = 0 ) {
        $sum += $_ for split '', sprintf "%b", $num;
        return $sum;
    }

    sub prime_generator {
    ## returns an iterator closure that once started always delivers the next prime
        state @primes;

        return sub {
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
    }
```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/laurent-rosenfeld/julia/ch-1.jl), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/laurent-rosenfeld/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/laurent-rosenfeld/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 156: Pernicious and Weird Numbers](http://blogs.perl.org/users/laurent_r/2022/03/perl-weekly-challenge-156-pernicious-and-weird-numbers.html)

As I said, as it turns out there a only a few primes required, and the smaller prime values are hardly secret knowledge. A much more compact way of making a lookup table is, well, to just make one.

Here Laurent uses 8 primes. As it works out we only need the first two of those to make the first 10 pernicious numbers. The smallest value with a 5 set bits is 31.

```perl
    my %primes = map { $_ => 1 } (2, 3, 5, 7, 11, 13, 17, 19);

    for my $n (2..100) {
        my $bin = sprintf "%b", $n;
        my $num_1 = 0;
        $num_1 += $_ for split "", $bin;
        if (exists $primes{$num_1}) {
            $count++;
            print "$n, " and next if $count < 10;
            say $n and last;
        }
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/james-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #156](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-156/james-smith)

James takes a similar approach, preloading a generous prime list. From there he creates the first 100 positions in the sequence by a combination of converting to binary, then translating the 1s to 1s — returning the count — and then checking the result for existence in the prime table.

It is, as to be expected, quick. I've been quite fond of `redo` lately.

```perl
    my %primes = map { $_ => 1 } 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37;

    my$n=0;

    $n++, exists $primes{(sprintf '%b', $n)=~tr/1/1/} ? (say $n) : redo for 1..100;

```

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/adam-russell/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/adam-russell/prolog/ch-1.p)


&nbsp;&nbsp;**blog writeup:**
[Persnickety Pernicious and Weird - Perl - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/03/20)

&nbsp;&nbsp;**blog writeup:**
[Persnickety Pernicious and Weird - Prolog - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/03/20)

At this point, after reviewing thousands of scripts, any time I receive a loading error on running a submission:

```
    Can't locate Math/Primality.pm in @INC (you may need to install the Math::Primality module) (@INC contains: ...
```

I find it noteworthy. As the more preceptive among you may have already surmised, `Math::Primality` does not seem to be a common choice around here, what with `Math::Prime::Util` available for all things primal and number-theoretical.

I am hardly one to module-shame anyone for the choices they make in life, and to Adam's credit the functions made available by this library *are* quite advanced. As determining the primality of really big integers is important to encryption, this field has had quite a bit of work done in it, and the `ip_prime` function provided uses several of these techniques to rapidly determine whether a number is known to not be prime, or known positively be prime, or known to be statistically quite likely to be prime, using what is known as the Baillie-PSW primality test, being itself a combination of other techniques. It's heady stuff.

In any case, with the novel module now installed we can proceed.

To count the set bits we see an implementation of a bitwise AND and SHIFT that we saw demonstrated earlier. I find this approach sublime. Then it's a simple case of counting upwards and checking values until we have gathered enough members of the sequence.

```perl
    use Math::Primality qw/is_prime/;

    sub count_bits{
        my($n) = @_;
        my $total_count_set_bit = 0;
        while($n){
            my $b = $n & 1;
            $total_count_set_bit++ if $b;
            $n = $n >> 1;
        }
        return $total_count_set_bit;
    }

    sub first_n_pernicious{
        my($n) = @_;
        my @pernicious;
        my $x = 1;
        do{
            my $set_bits = count_bits($x);
            push @pernicious, $x if is_prime($set_bits);
            $x++;
        }while(@pernicious < $n);
        return @pernicious;
    }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/e-choroba/perl/ch-1.pl)

Choroba proceeds in a quite similar way, using the venerable `Math::Prime::Util` we mentioned earlier. His `is_pernicious_number()` function deserves a little attention, using `pack` and `unpack` to convert a written number into the count of its 1s. In short, the process proceeds first using `pack 'N'` to convert the internal representation into a standard 32-bit integer in network order. Then the curious template `%32b` unpacks the bits as binary and instead of reporting them, *sums* them. Weird but true, no lie. There's obviously enough call for this somewhat exotic behavior to have implemented the template.

Tasks like, say this one, counting set bits.


```perl
    use Math::Prime::Util qw{ is_prime };

    sub pernicious_numbers ($n) {
        my @pn;
        for (my $i = 1; @pn < 10; ++$i) {
            push @pn, $i if is_pernicious_number($i);
        }
        return \@pn
    }

    sub is_pernicious_number ($i) {
        return is_prime(unpack '%32b*', pack 'N', $i)
    }
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/roger-bell-west/javascript/ch-1.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/roger-bell-west/kotlin/ch-1.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/roger-bell-west/lua/ch-1.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 156: Weirdly Pernicious or Perniciously Weird?](https://blog.firedrake.org/archive/2022/03/The_Weekly_Challenge_156__Weirdly_Pernicious_or_Perniciously_Weird_.html)

Finally we'll wrap up with Roger, who brings us his own twist on several techniques we've seen today. In his `hammingweight` implementation, an adaptation of an algorithm from 1960, each iteration of applying a bitwise AND to itself minus 1 flips the rightmost set bit to 0. The algorithm works along the number, flipping bits one at a time and counting the flips until the entire number has been zeroed.

```perl
    sub hammingweight {
      my $x=shift;
      my $count=0;
      while ($x > 0) {
        $x &= ($x-1);
        $count++;
      }
      return $count;
    }
```

For his personal `isprime` function, which has evolved over time, we first try dividing out 2 and 3, the most obvious cases and required before the next step. Then he utilizes the fact that prime numbers above 3 are all of the form 6*k*+1 or 6*k*-1 for some *k*,  greatly reducing the number of trial divisions required to ascertain the candidate's status.

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

The final `pernicious()` function then combines the two:

```perl
    sub pernicious {
      my $n=shift;
      my @out;
      my $c=1;
      while (1) {
        if (isprime(hammingweight($c))) {
          push @out,$c;
          if (scalar @out >= $n) {
            last;
          }
        }
        $c++;
      }
      return \@out;
    }
```


## Blogs and Additional Submissions in Guest Languages for Task 1:


[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/cheok-yin-fung/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[CY's Take on The Weekly Challenge #156 ](https://E7-87-83.github.io/coding/challenge_156.html)


[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/jaldhar-h-vyas/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/jaldhar-h-vyas/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 156](https://www.braincells.com/perl/2022/03/perl_weekly_challenge_week_156.html)


[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/lubos-kolouch/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/lubos-kolouch/python/ch-1.py)


[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/mohammad-anwar/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/mohammad-anwar/raku/ch-1.raku)


[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/pokgopun/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/pokgopun/go/ch-1.go)


[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/robert-dicicco/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/robert-dicicco/bash/ch-1.bash), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/robert-dicicco/raku/ch-1.raku), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/robert-dicicco/ruby/ch-1.rb)


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/wlmb/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 156 – W. Luis Mochán](https://wlmb.github.io/2022/03/14/PWC156/)

------------------------------------------





---

# TASK 2 {#PWC156TASK2}

# Weird Number
*Submitted by: Mohammad S Anwar*
You are given number, $n > 0.

Write a script to find out if the given number is a Weird Number.

According to Wikipedia, it is defined as:

The sum of the proper divisors (divisors including 1 but not itself) of the number is greater than the number, but no subset of those divisors sums to the number itself.

**Example 1:**
```
    Example
        Input: $n = 12
```


Since the proper divisors of 12 are 1, 2, 3, 4, and 6, which sum to 16; but 2 + 4 + 6 = 12.

**Example 2:**
```
    Example
        Input: $n = 70
```


As the proper divisors of 70 are 1, 2, 5, 7, 10, 14, and 35; these sum to 74, but no subset of these sums to 70.


## about the solutions
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/adam-russell/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/athanasius/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/jo-37/perl/ch-2.pl),
[**Kueppo Wesley**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/kueppo-wesley/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/laurent-rosenfeld/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/lubos-kolouch/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/perlboy1967/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/peter-campbell-smith/perl/ch-2.pl),
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/pokgopun/perl/ch-2.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/robert-dicicco/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/roger-bell-west/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/ulrich-rieke/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/wlmb/perl/ch-2.pl)

For the second challenge of the week we look at a less ethically-challenged judgement, speaking more to the uncommon, unexpected and nonintuitive things in the world, without a direct reference to any eternal cosmic battles.

The setup can be briefly summarized:

A number that is equal to the sum of its proper divisors is known as a [perfect number](https://en.wikipedia.org/wiki/Perfect_number). So it follows that  a number that can be formed from an incomplete subset of its proper divisors is consequently not-quite perfect; this is known as a [semiperfect number](https://en.wikipedia.org/wiki/Semiperfect_number).

A number whose proper divisors add to a sum greater than the original number is known as an [abundant number](https://en.wikipedia.org/wiki/Abundant_number). Putting this together, then, it follows that all semiperfect numbers are abundant, as there must be some factor left over from constructing the qualifying subset that makes a number semiperfect instead of perfect.

Sort of two ways of looking at the same thing.

Almost.

The [weird numbers](https://en.wikipedia.org/wiki/Weird_number) are abundant, meaning there are enough factors to sum to the number, but also no combination of those factors can be actually be assembled to do the job, and so are *not* semiperfect.

This combination does seem to fit the bill as uncommon, unexpected and nonintuitive.

And you know what's *really* weird? The beginning of the sequence is fairly sparse with gaps of thousands between the members. But after less than a dozen positions the deltas fall into an irregular pattern of multiples of 140: 140, 280, 420, etc, with only a very few, again sparse, irregular holdouts that *also* curiously come in pairs. I mean, like, how weird is that?

There were 21 submissions for the second task this past week.

## the WEIRD turn PRO
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/duncan-c-white/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/wlmb/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/cheok-yin-fung/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/perlboy1967/perl/ch-2.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/robert-dicicco/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/adam-russell/perl/ch-2.pl),
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/pokgopun/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/jaldhar-h-vyas/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/jo-37/perl/ch-2.pl), and
[**Kueppo Wesley**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/kueppo-wesley/perl/ch-2.pl)


The challenge requires two parts: to first create a list of proper divisors, and then to ascertain whether those elements can be arranged in such a way that some incomplete subset sums to the number. As proving a negative — that no such set exists — is difficult if not impossible without checking every possible variation, exhaustive approaches were the norm.

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/duncan-c-white/perl/ch-2.pl)

We'll start with Duncan, who demonstrates a binary mask approach to generating the subsets. As each element in the full list can either be present or not within a specific ordered subset, we can assign it a unique bit in a binary number and include the element when that bit is set. Looping through all numbers from 1 to 2 raised to the number of elements, save one, will create all bit variations corresponding to the possible subsets.

As you can see immediately the number of subsets possible explodes exponentially as the number of factors grows, and there is no way around this fact. For certain highly composite numbers this could become a problem, but Duncan short-circuits the search immediately when a subset is found.

Of course once the divisors are calculated a sum is made immediately to see whether the number is abundant — if that's not the case there is no point in continuing.

```perl
    fun weird( $n )
    {
        my @divs = divisors_inc_1( $n );
        #say "w($n): divs: ", join(',',@divs);

        my $sum = sum0(@divs);
        #say "w($n): sum of divisors $sum";
        return 0 if $sum < $n;

        #say "w($n): sum=$sum";

        my $nitems = @divs;

        my $two2n = 2**$nitems;

        for( my $i=0; $i<$two2n; $i++ )
        {
        	my $b = sprintf("%0${nitems}b", $i );
        	my @select = split( //, $b );

        	my @chosen = map { $divs[$_] }
        		grep { $select[$_] } 0..$#divs;
        	$sum = sum0(@chosen);
        	say "w($n): b=$b, select=", join(',',@select),
        	    ", chosen=", join(',',@chosen),
        	    ", sum=$sum" if $debug;

        	return 0 if $sum == $n;
        }

        #say "$n is weird";
        return 1;
    }

    fun divisors_inc_1( $n )
    {
        my @result;
        my $limit = $n/2;
        for( my $i=1; $i<=$limit; $i++ )
        {
            push @result, $i if $n%$i==0;
        }
        return @result;
    }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/wlmb/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 156 – W. Luis Mochán](https://wlmb.github.io/2022/03/14/PWC156/)

Luis, on the other hand, brings in some some help to do the heavy lifting: `Math::Prime::Util` and `Algorithm::Combinatorics`, with a spry assist from `List::Util`.

The procedure remains much the same though: to check a number we first create a list of its proper divisors, then create subsets of that list and sum them. This is accomplished with the `divisors()`, `subsets()` and `sum0` functions, respectively.

```perl
    use Math::Prime::Util qw(divisors);
    use Algorithm::Combinatorics qw(subsets);
    use List::Util qw(sum0);
    die "Usage: ./ch-2.pl N1 N2... to test numbers N1, N2... for weirdness"
        unless @ARGV;
    my $is_weird;
     WEIRD:
        for my $N(@ARGV){
            say("Arguments must be larger than 1"), next unless $N>=2;
            my @divisors=divisors($N);
            pop @divisors; # keep only proper divisors
            $is_weird=0, next WEIRD unless sum0(@divisors)>$N; # Overabundant?
            my @subsets=subsets(\@divisors);
            for(@subsets){
                $is_weird=0, next WEIRD if sum0(@$_)==$N; #Semiperfect, fail
            }
            $is_weird=1;
    } continue {
        say "$N ", $is_weird?"is":"is not", " weird";
    }
```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/cheok-yin-fung/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[CY's Take on The Weekly Challenge #156 ](https://E7-87-83.github.io/coding/challenge_156.html)

To create her list of factors, CY first makes a prime factorization. She then works through that list of factors, shifting off values and multiplying across the factors already considered and adding them to the pile. By the time the last prime is considered all multiplicative combinations will have been calculated.

```perl
    sub factorization {
        # trivial prime factorization
        my $num = $_[0];
        my @prime_factors;
        my $prime = 2;
        while ($num != 1) {
            if ($num % $prime == 0) {
                $num /= $prime;
                push @prime_factors, $prime;
            }
            else {
                $prime = next_prime($prime);
            }
        }
        return @prime_factors;
    }
```


For the subset sum she borrows a bit of dynamic programming, which creates a 2-dimensional matrix of partial sum truth values over the phase space; as one axis expands to approach our target value, we note whether some combination of sums exist with that value to create that sub-target. These are compounded upon, adding additional factors as the matrix is built. Once a subset has been found, that truth is propagated forward in the table, so we can read the result at the end step.

```perl
    sub subset_sum {
        # dynamic programming
        my $sum = $_[0];
        my @A = $_[1]->@*;

        my $DP;
        $DP->[0][$_] = 1 for (0..scalar @A);
        $DP->[$_][0] = undef for (1..$sum);
        for my $s (1..$sum) {
            for my $k (1..scalar @A) {
                $DP->[$s][$k] = $DP->[$s][$k-1];
                if ($s >= $A[$k-1]) {
                    $DP->[$s][$k] = $DP->[$s][$k]
                                        ||
                                  $DP->[$s-$A[$k-1]][$k-1];
                }
            }
        }
        return $DP->[$sum][scalar @A];
    }
```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/perlboy1967/perl/ch-2.pl)

Neils acquires his list of proper divisors in a matter-of-fact fashion, and then imports `combinations` from `Algorithm::Combinatorics` to create the subset arrangements of varying sizes up to but not including the whole list. The `combinations` function creates the *n* choose *k* combinations for a given length *k*, so must be repeated for the various possible lengths. We'll see this pattern again.

```perl
    sub isWeirdNumber($) {
      my ($n) = @_;

      # Get proper divisors
      my @d = (1, grep {$n % $_ == 0} 2 .. $n >> 1);

      my $sum = sum(@d);
      my $delta = $sum - $n;

      return 0 if ($delta < 0 or
                   grep { $_ == $delta } @d);

      my @r = grep { $_ <= $delta } @d;
      foreach my $i (2 .. scalar(@r)) {
        my $iter = combinations(\@r, $i);
        while (my $ar = $iter->next) {
          return 0 if (sum(@$ar) == $delta);
        }
      }

      return 1;
    }
```

[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/robert-dicicco/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/robert-dicicco/raku/ch-2.raku), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/robert-dicicco/ruby/ch-2.rb), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/robert-dicicco/tcl/ch-2.tcl)

In a divergence from what is rapidly becoming the new normal, Robert impospts `Set::Scalar` to give him its `power_set_iterator` function. For those unfamiliar, in set theory a power set for a given set is the set of all subsets, including the null set and the set itself. And that's a lot of sets, or at minimum a lot of usage of the word "set".

Coupled with `divisors` from `ntheory` (an alias for `math::Prime::Util`) and a home-made `digisum()` function he has all of the necessary parts to work through all possibilities.

Ok, maybe not so much of divergence from the basic pattern, but different and welcome nonetheless. I like seeing a little set theory injected in the solutions.


```perl
    use ntheory qw/divisors/;
    use Set::Scalar;

    sub digitsum {
      my $arr = shift;
      my $num = shift;
      my $sum = 0;
      foreach my $x (@$arr) {
        $sum += $x;
      }
      if ($sum == $num) {
        say "Subset: @$arr ";
        say "Input: n = $num";
        say "Output: 0";
        say " ";
        exit;
      }
      return 1;
    }

    my @divs = divisors($num);
    pop(@divs);

    my $set1 = Set::Scalar->new(@divs);
    my $iter = Set::Scalar->power_set_iterator($set1);
    my @m;

    say "Divisors: @divs ";
    do {
      @m = $iter->();
      my $retval = digitsum(\@m, $num);
    } while (@m);
```


[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/adam-russell/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/adam-russell/prolog/ch-2.p)


&nbsp;&nbsp;**blog writeup:**
[Persnickety Pernicious and Weird - Perl - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/03/20)

&nbsp;&nbsp;**blog writeup:**
[Persnickety Pernicious and Weird - Prolog - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/03/20)

For another power set solution we have Adam,  bringing us `Data::PowerSet`. Factoring is done by trial division, from 2 to the square root, with each match adding both the found factor and its product complement.

Note the use of `pack` and `unpack` again, this time to first standardize the subset values into unsigned integers using the `I*` template, then to unpack them immediately using that interesting `%32I` template that *sums* the list of values found instead of returning the list itself.

```perl
    use Data::PowerSet q/powerset/;

    sub factor{
        my($n) = @_;
        my @factors = (1);
        foreach  my $j (2 .. sqrt($n)){
            push @factors, $j if $n % $j == 0;
            push @factors, ($n / $j) if $n % $j == 0 && $j ** 2 != $n;
        }
        return @factors;
    }

    sub is_weird{
        my($x) = @_;
        my @factors = factor($x);
        my $sum = unpack("%32I*", pack("I*",  @factors));
        for my $subset (@{powerset(@factors)}){
            return false if unpack("%32I*", pack("I*",  @{$subset})) == $x;
        }
        return boolean($sum > $x);
    }
```

[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/pokgopun/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/pokgopun/go/ch-2.go)

PokGoPun gives us an interesting recursive function to assemble his subsets, `cTree()` — I assume for "combinations tree" — that builds combination sets from the divisor list of a specified length. This is placed in a loop to check the subsets at each possible length. I did say we'd see that pattern and here we are.

```perl
    {
        $o = 1;
        for my $i (2..$#d) {
        	my $ds = [];
        	&cTree([],$i,[@d],$ds);
        	if (&isSumsEqualN($n,$ds)){
        		$o = 0;
        		last;
        	}
        }
    }

    sub cTree {
        my($c,$n,$e,$res) = @_;
        if ( @$c == $n || @$c + @$e == $n ) {
            my @res = @{[@$c,@$e]}[0..$n-1];
            if ($res) {
                push @$res, \@res;
            } else {
                printf "%s\n", join(", ",@res);
            }
        } else {
            {
                my $ct = [@$c,@{$e}[0]];
                shift @$e if @$e;
                &cTree($ct,$n,[@$e],$res);
                redo if @$ct + @$e > $n;
            }
        }
    }
```

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/jaldhar-h-vyas/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/jaldhar-h-vyas/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 156](https://www.braincells.com/perl/2022/03/perl_weekly_challenge_week_156.html)

A similar strategy is employed by Jaldhar, with his own `combinations()` function within a by-now-familiar enclosing loop of lengths for the subsets. Similar to what we've seen, yet different.

I do like that `grep` filter for the divisors.

```perl
    sub combinations {
        my @list = @{$_[0]};
        my $length = $_[1];

        if ($length <= 1) {
            return map [$_], @list;
        }

        my @combos;

        for (my $i = 0; $i + $length <= scalar @list; $i++) {
            my $val  = $list[$i];
            my @rest = @list[$i + 1 .. $#list];
            for my $c (combinations(\@rest, $length - 1)) {
                push @combos, [$val, @{$c}] ;
            }
        }

        return @combos;
    }

    my $n = shift // die "Need an integer.\n";

    my @divisors = grep { $n % $_ == 0 } 1 .. $n - 1;

    if (sum(\@divisors) <= $n) {
        say 0;
        exit;
    }

    for my $i (1 .. scalar @divisors - 1) {
        for my $combo (combinations(\@divisors, $i)) {
            if (sum($combo) == $n) {
                say 0;
                exit;
            }
        }
    }
```


[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/jo-37/perl/ch-2.pl)

Jorg imports a veritable raft of functions over from `ntheory` to do his bidding: `vecsum()`,  `vecprod()`,  `todigits()`, and  `divisors()`. The `vec` versions of `sum` and `product` are integer optimized. Then things get a little weird, which is fitting.

The `todigits()` breaks apart a number, in this context, into separate digits, but wait, there's *more*... the optional second and third arguments tell it to convert the value of the `$set` argument to binary, and deliver enough digits to match every divisor. I hope you can see where this is going by this point.

`zip6` combines any number of lists, element-for-element to create a sub-list for each position. Each divisor will thus be matched with a bit from the broken-apart, now-binary `$set` value, and if we take the product across the two, then those matched with a set bit will be allowed to propagate down the line to be ultimately summed.

At the risk of being confusing, I'm going to say that's a lot to unpack. No, no, not *that* `unpack`, just the word this time. But sort of the same action... Now I think I've confused myself. I blame the cold medicine.

```perl
    use Math::Prime::Util qw(vecsum vecprod todigits divisors);
    use List::MoreUtils 'zip6';

    # Check if the given number is "weird".  There are two conditions that
    # make a number non-weired: either the sum of its "proper" divisors does
    # not exceed the number itself or there is a subset of its proper
    # divisors that sum up to the number.  Here "proper" divisors are
    # the divisors including one and excluding the number itself.
    sub is_weird ($n) {
        # Get the "proper" divisors by omitting the number itself.
        my @divisors = splice @{[divisors $n]}, 0, -1;
        return if $n > vecsum @divisors;
        # Use the bits of the binary representation of a number as selectors
        # for the divisor subset.
        for my $set (2 .. 2 ** @divisors - 2) {
            return if $n == vecsum map vecprod(@$_),
                zip6 @divisors, @{[todigits $set, 2, @divisors]}
        }

        # Here we have a weird number.
        1;
    }
```



[**Kueppo Wesley**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/kueppo-wesley/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[WeirdNumber.pl](https://wesleykueppo-new.bearblog.dev/weird-number/)

And to wrap things up, we'll return to Kueppo, who devises a unique looping control flow to assemble subsets economically. He does this by adding elements from small to large to a given subset, with backtracking when the target sum is exceeded. It's systematic, clever and runs quickly, avoiding much of the chaff of a naive brute-force approach. Kudos, Kueppo.

```perl
    sub is_weird {
        my(@track, @subset) = ();
        my($number, $sum) = (shift, 0);
        my @divisors = get_divisors $number;

        $sum += $_ foreach (@divisors);
        if ($sum > $number) {
            my $now = 0;
            LOOP: {
                foreach (@divisors) {
                	if ($now + $_ == $number) {
                		$now += $_;
                		push @subset, $_;
                		last;
                	} elsif ($now + $_ < $number) {
                		$now += $_;
                		push @subset, $_;
                		push @track, $_;
                	} else {
                		# Backtracking
                		$now = $_;
                		@subset = ($_);
                		foreach (reverse @track) {
                			if ($now + $_ < $number) {
                				$now += $_;
                				push @subset, $_;
                			} elsif ($now + $_ == $number) {
                				$now += $_;
                				push @subset, $_;
                				last LOOP;
                			}
                		}
                		@track = ($_);
                	}
                }
            }
            if ($now == $number) {
                print "Output: 1\n";
                print "proper divisors: @divisors\n";
                print "subset: @subset => sum = $number\n";
             } else {
                print "Output: 0\n";
                print "proper divisors: @divisors\n";
                print "No subset of these sums to $number\n";
             }
        } else {
            print "Output: 1\n";
            print "Total sum of the divisors = $sum < $number\n";
        }
    }
```

## Blogs and Additional Submissions in Guest Languages for Task 2:


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/athanasius/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/athanasius/raku/ch-2.raku)


[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/colin-crain/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/colin-crain/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[High Weirdness on the Number Plane - Programming Excursions in Perl and Raku](https://colincrain.com/2022/03/20/high-weirdness-on-the-number-plane)


[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/dave-jacoby/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Pernicious and Weird Are The Numbers We Two Can Share: Weekly Challenge #156 | Committed to Memory](https://jacoby.github.io/2022/03/14/pernicious-and-weird-are-the-numbers-we-two-can-share-weekly-challenge-156.html)


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC156 - Weird Number - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/03/17/pwc156-weird-number/)


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/james-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #156](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-156/james-smith)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/laurent-rosenfeld/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/laurent-rosenfeld/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 156: Pernicious and Weird Numbers](http://blogs.perl.org/users/laurent_r/2022/03/perl-weekly-challenge-156-pernicious-and-weird-numbers.html)


[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/lubos-kolouch/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/lubos-kolouch/python/ch-2.py)


[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/peter-campbell-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Pernicious and weird ...](https://pjcs-pwc.blogspot.com/2022/03/pernicious-and-weird.html)


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/roger-bell-west/javascript/ch-2.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/roger-bell-west/kotlin/ch-2.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/roger-bell-west/lua/ch-2.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/roger-bell-west/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/roger-bell-west/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 156: Weirdly Pernicious or Perniciously Weird?](https://blog.firedrake.org/archive/2022/03/The_Weekly_Challenge_156__Weirdly_Pernicious_or_Perniciously_Weird_.html)


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/ulrich-rieke/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/ulrich-rieke/haskell/ch-2.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-156/ulrich-rieke/raku/ch-2.raku)



------------------------------------------





---

<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>

<center>
<h1 id="PWC156BLOGS">_________ THE BLOG PAGES _________</h1>
</center>


---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, by some miracle I somehow continue to maintain my bearings.**

**Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your Unquenchable *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC156BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *FOLLOW* these *BLOG* *LINKS*:

**( ...*don't think, trust your training, you're in the zone, just do it ...* )**


**Adam Russell**

 * [Persnickety Pernicious and Weird - Perl - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/03/20) ( *Perl* )
 * [Persnickety Pernicious and Weird - Prolog - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/03/20) ( *Prolog* )


**Arne Sommer**

 * [Weirdly Pernicious with Raku](https://raku-musings.com/weirdly-pernicious.html) ( *Raku* )

**Cheok-Yin Fung**

 * [CY's Take on The Weekly Challenge #156 ](https://E7-87-83.github.io/coding/challenge_156.html) ( *Perl* )

**Colin Crain**

 * [Pernicious Perfidy - Programming Excursions in Perl and Raku](https://colincrain.com/2022/03/19/pernicious-perfidy) ( *Perl & Raku* )
 * [High Weirdness on the Number Plane - Programming Excursions in Perl and Raku](https://colincrain.com/2022/03/20/high-weirdness-on-the-number-plane) ( *Perl & Raku* )

**Dave Jacoby**

 * [Pernicious and Weird Are The Numbers We Two Can Share: Weekly Challenge #156 | Committed to Memory](https://jacoby.github.io/2022/03/14/pernicious-and-weird-are-the-numbers-we-two-can-share-weekly-challenge-156.html) ( *Perl* )

**Flavio Poletti**

 * [PWC156 - Pernicious Numbers - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/03/16/pwc156-pernicious-numbers/) ( *Perl & Raku* )
 * [PWC156 - Weird Number - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/03/17/pwc156-weird-number/) ( *Perl & Raku* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 156](https://www.braincells.com/perl/2022/03/perl_weekly_challenge_week_156.html) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #156](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-156/james-smith) ( *Perl* )

**Kueppo Wesley**

 * [Pernicious.pl](https://wesleykueppo-new.bearblog.dev/perniciouspl/) ( *Perl* )
 * [WeirdNumber.pl](https://wesleykueppo-new.bearblog.dev/weird-number/) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 156: Pernicious and Weird Numbers](http://blogs.perl.org/users/laurent_r/2022/03/perl-weekly-challenge-156-pernicious-and-weird-numbers.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 156: Pernicious weirdness – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/03/17/PerlWeeklyChallenge156.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 156: Pernicious weirdness – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/03/17/PerlWeeklyChallenge156.html#task2) ( *PostgreSQL* )

**Peter Campbell Smith**

 * [Pernicious and weird ...](https://pjcs-pwc.blogspot.com/2022/03/pernicious-and-weird.html) ( *Perl* )

**Roger Bell_West**

 * [RogerBW's Blog: The Weekly Challenge 156: Weirdly Pernicious or Perniciously Weird?](https://blog.firedrake.org/archive/2022/03/The_Weekly_Challenge_156__Weirdly_Pernicious_or_Perniciously_Weird_.html) ( *Perl & Raku* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 156 – W. Luis Mochán](https://wlmb.github.io/2022/03/14/PWC156/) ( *Perl* )
