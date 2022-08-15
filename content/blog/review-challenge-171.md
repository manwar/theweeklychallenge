---
author:       Colin Crain
date:         2022-08-14T00:00:00
description:  "Colin Crain › Perl Weekly Review #171"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #171"
image:        images/blog/p5-review-challenge-171.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-170/).* )

Welcome to the Perl review pages for **Week 171** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

Before we begin, you may wish to revisit either the pages for the [**original tasks**](/blog/perl-weekly-challenge-171/) or the summary [**recap**](/blog/recap-challenge-171/) of the challenge. But don't worry about it, the challenge text will be repeated and presented as we progress from task to task.

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

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC171TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC171TASK2)   &nbsp;  &nbsp;  &nbsp;       •   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC171BLOGS)    &nbsp;  &nbsp;  &nbsp;       •

---

# TASK 1 {#PWC171TASK1}

# Abundant Number
*Submitted by: Mohammad S Anwar*

Write a script to generate first 20 Abundant Odd Numbers.

According to wikipedia,

>A number n for which the sum of divisors σ(n) > 2n, or,
equivalently, the sum of proper divisors (or aliquot sum) s(n) >
n.


For example, 945 is the first Abundant Odd Number.

Sum of divisors:

```
    1 + 3 + 5 + 7 + 9 + 15 + 21 + 27 + 35
      + 45 + 63 + 105 + 135 + 189 + 315 = 975
```

## about the solutions
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/adam-russell/perl/ch-1.pl),
[**Ali Moradi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/deadmarshal/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/athanasius/perl/ch-1.pl),
[**Bartosz Jarzyna**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/brtastic/perl/ch-1.pl), and
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/cheok-yin-fung/perl/ch-1.pl)
    **Dario Mazzeo** dnw
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/jo-37/perl/ch-1.pl),
[**Kjetil Skotheim**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/kjetillll/perl/ch-1.pl), and
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/laurent-rosenfeld/perl/ch-1.pl)
    **Matthew Neleigh** dnw
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/perlboy1967/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/peter-campbell-smith/perl/ch-1.pl),
[**Philippe Bricout**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/brxfork/perl/ch-1.pl),
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/pokgopun/perl/ch-1.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/robert-dicicco/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/roger-bell-west/perl/ch-1.pl),
[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/ryan-thompson/perl/ch-1.pl),
[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/steve-g-lynn/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/ulrich-rieke/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/wlmb/perl/ch-1.pl), and
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/walt-mankowski/perl/ch-1.pl)

Be it digits or divisors, number theory has a fascination with summing things up and then cross-comparing the results with other stuff. Today it's divisors, and comparing the sum to the original value. Which is to say all divisors up to but not including the number itself, as that has been determined to be silly. This are also known as the [aliquot parts](https://en.wikipedia.org/wiki/Divisor#Further_notions_and_facts).

Why would we do this? That's a more difficult question to answer. Because mathematically it makes no immediate sense, as is often the case in number theory. After all, the discipline isn't focused so much on *doing things* as figuring out why things are the way they are.

Mathematics can be thought of as a unified thing, with an elusive shape that, like in the parable of the [blind men and an elephant](https://en.wikipedia.org/wiki/Blind_men_and_an_elephant), reveals itself in only partial forms depending on how you study it. Number theory attempts to get beyond the individual disciplines and see the elephant for what it is.

One such facet to stare at is the way numbers recombine to make other numbers, which is where divisibility and factoring come into play. In a broad sense, summing the divisors serves as a sort of metric as to a number's divisibility: a large value means more divisors, a small, fewer. If the divisor sum exceeds the original value, it s known as [abundant](https://en.wikipedia.org/wiki/Divisor#Further_notions_and_facts). If it comes up short, it is [deficient](https://en.wikipedia.org/wiki/Deficient_number). If it nails it, it' [perfect](https://en.wikipedia.org/wiki/Perfect_number). Then if we're really close but not-quite-there we get [almost perfect numbers](https://en.wikipedia.org/wiki/Almost_perfect_number) and [668, the neighbor of the beast](https://en.wikipedia.org/wiki/Attila_the_Stockbroker#Discography).

Most of the abundant numbers, as it works out, are even, which is to say they are divisible by two. This initial divisibility opens up the possibility that any multiple of two may also be a divisors, which obviously is going to help the sum grow larger. Consequently is is much more difficult for an odd number to become abundant, as all these even multiples are excluded from the onset. This difficulty mostly presents itself in the lower numbers; as numbers get larger more multiples of 3 and the next few primes are available and the difference smooths out somewhat. The smallest abundant number is 12, but the smallest odd abundant is 945. The smallest excluding both 2 *and* 3 is 5391411025.

Interestingly, the caveat that the abundant number must be odd seems to have eluded the eyes of a few members, myself included. Oh well. We seem to have gotten the abundant part right, but accidentally answered the wrong question.

There were thus 26 complete submissions for the first task this past week.

## A SELECTION of SUBMISSIONS
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/adam-russell/perl/ch-1.pl),
[**Kjetil Skotheim**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/kjetillll/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/roger-bell-west/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/cheok-yin-fung/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/athanasius/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/peter-campbell-smith/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/perlboy1967/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/ulrich-rieke/perl/ch-1.pl),
[**Bartosz Jarzyna**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/brtastic/perl/ch-1.pl), and
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/polettix/perl/ch-1.pl)



Because of the inscrutable nature as to the positioning of primes, a fundamental randomness is built into the prime factorization of numbers. This in turn affects the list of all divisors, as these need to be produced from subsets of the same primes as the original value. Consequently there can be no hard and fast way to generate complete lists of abundant numbers. Or deficient, or perfect, for that matter. At its core the problem is irreducible and for the moment at least presumed unknowable. Not that will keep some folks from still trying, of course.

However there are things we can learn about these numbers, such as that all multiples of an abundant number are themselves abundant. This allows us a certain selective predictability, but this insight can only built from specific existing knowledge and cannot be generalized outside that scope. The old chicken and egg problem, you know?

In short, the way to check for abundance is to determine the aliquot parts of a candidate and sum them.

An obvious way to proceed with this challenge, then — in the broadest sense — is to find abundant numbers and check them for divisibility by two. However that's already a bit redundant, as to determine a number's divisors we need to see whether 2 divides in, so in theory by the time we have a list of divisors to sum we've already made that distinction.

Or, you know, we could just check only odd numbers.

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/adam-russell/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/adam-russell/java/ch-1.java), [Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/adam-russell/prolog/ch-1.p)


&nbsp;&nbsp;**blog writeup:**
[Abundant Composition - Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/07/03)

&nbsp;&nbsp;**blog writeup:**
[Abundant Composition - Prolog — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/07/03)

Adam will start the ball rolling with a straightforward presentation of technique. Two subroutines are employed, one to produce a list of divisors and one to search and find our odd abundant numbers.

All divisors must multiply by some complement to produce the target, and the smallest complement we're considering is 2 — as we're not including the number as a divisor to itself — so consequently all divisors in the set must be less than or equal to one-half the target (one of course is given). This puts an upper bound on our search space. Candidate divisors are checked with a modulo function to see whether there is any remainder when they divide the target, and if not they are added to a list.

In the second part Adam uses `unpack` as a `sum` function — using the `%32I*` template —  which is probably non-intuitive, even arcane, but gets the job done. For a clue as to what's going on with this, I'll refer you to the [Perl pack tutorial, and the section on sums](https://perldoc.perl.org/perlpacktut#Doing-Sums).

Also note the loop construct is a bare block — the looping is performed within the block at the end using `redo`. Very interesting style choices here to start our day.

```perl
    sub proper_divisors{
        my($n) = @_;
        my @divisors;
        for my $x (1 .. $n / 2){
            push @divisors, $x if $n % $x == 0;
        }
        return @divisors;
    }

    sub n_abundant_odd{
        my($n) = @_;
        my $x = 0;
        my @odd_abundants;
        {
            push @odd_abundants, $x if $x % 2 == 1 && unpack("%32I*", pack("I*", proper_divisors($x))) > $x;
            $x++;
            redo if @odd_abundants < $n;
        }
        return @odd_abundants;
    }
```

[**Kjetil Skotheim**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/kjetillll/perl/ch-1.pl)

`unpack` is an amazing tool to peek inside structured data, and Adam's unusual template to sum the divisors is a perfectly legitimate use. However new member Kjetil offers us the more intuitive, sensibly self-named function, `sum`, from the core module `List::Util`.

Unlike `unpack`, it is very much called what it do.

*[Note to everyone not a native English speaker: do not mistake everything I write as in any way proper English. It is a forgiving language, but many things I choose to write are just made up.]*

Anyhoo *[see note]*, here we have a delightfully compact solution from Kjetil which uses a `grep` statement to filter a list of all possible divisors and immediately sum them. If this number is abundant then we're good. No checks for oddness you say? That's because we start at 1 and skip by 2s, and will never see an even candidate.

So no checks required. That's convenient. Evenness is overrated.

```perl
    use List::Util 'sum';
    my $want = shift // 20;
    my($have,$n)=(0,1);
    sum( grep $n % $_ == 0, 1..$n-1 ) > $n
        and print "$n\n"
        and $have++
        while $have < $want
          and $n+=2;
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/roger-bell-west/javascript/ch-1.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/roger-bell-west/kotlin/ch-1.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/roger-bell-west/lua/ch-1.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 171: First-Class Abundance](https://blog.firedrake.org/archive/2022/06/The_Weekly_Challenge_171__First_Class_Abundance.html)

At the other end of the spectrum we have `Math::Prime::Util`, a module with several hundred functions relevant to number theory, primes and factoring. Among them is `divisor_sum`, which, as you might think, sums the divisor set.

The function does however act on the *entire* divisor set, which includes the trivial divisor of the number itself. This is not a deal breaker, as the formula for abundance is easily modified for this case to those numbers whose sum exceeds twice the original value.

Again we start looking at 1 and count by 2s, so that only odd numbers are checked.

```perl
    use Math::Prime::Util qw(divisor_sum);

    sub oddabundant($ct) {
      my $n = 1;
      my @o;
      while (1) {
        if (divisor_sum($n) > $n * 2) {
          push @o,$n;
          if (scalar @o >= $ct) {
            last;
          }
        }
        $n += 2;
      }
      return \@o;
    }
```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/cheok-yin-fung/perl/ch-1.pl)

CY provides us with a super-compact version of this solution using `divisor_sum`. As no single-digit abundant numbers exist she goes ahead and starts counting at 9, again skipping by 2s.

I will note that don't want to tell anyone how to run their life, but I am skeptical of having two variables `$n` and `$N` in the same script. It seems like asking for trouble, not unlike having different data-types sharing the same symbol, only differentiated by a sigil. Permitted, sure, but confusing as the two variables are pronounced the same.


```perl
    use Math::Prime::Util qw/divisor_sum/;

    while (scalar @abunt < $N) {
        $n += 2;
        if (divisor_sum($n) > 2*$n) {
            push @abunt, $n;
        }
    }
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/athanasius/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/athanasius/raku/ch-1.raku)

Summing divisors is a common enough operation in number theory that the writers of `Math::Prime::Util` saw fit to include a function tailor-made for the purpose, which to me says something about how weird number theory really is. But ultimately this is no concern, and I truly value their contributions to mathematics — don't get me wrong.

Using this function does, however, make finding abundant numbers, odd, even or all, to be a straightforward and almost trivial task, hiding the actual process behind a layer of abstraction.

Slightly less opaque we have, alternately, the function `divisors` which returns a list of divisors, leaving us to act on the data as we see fit.

It is said when the first prepackaged cake-baking products were released — a dry mix of flour, suger, levening and flavor — it would have been trivial to add powdered egg and milk in with the other ingredients. But when the companies did this no one bought the product: it turns out the home bakers felt they were no longer doing anything. There was no satisfaction; it was *too* easy. So eggs and milk, common pantry staples everyone at the time would have, were taken out again so they could then be added in, and the cooks could feel like they were baking properly.

It's an interesting piece of psychology, that.

Here the monk Athanasius delivers solutions to use two ways: the easy way and the not-quite-as-easy way, the first using `divisor_sum`, the second a little less abstractly using `divisors`, both from `Math::Prime::Util`.

```perl
    sub solve_with_sum
    {
        my @abundant;

        for (my $n = 1; scalar @abundant < $TARGET; $n += 2)
        {
            push @abundant, $n if divisor_sum( $n ) > 2 * $n;
        }

        return \@abundant;
    }

    sub solve_with_divisors
    {
        my @abundant;
        my $count = 0;

        for (my $n = 1; $count < $TARGET; $n += 2)
        {
            my  @divisors = divisors( $n );
            pop @divisors;
            my  $sum  = 0;
                $sum += $_ for @divisors;

            if ($sum > $n)
            {
                push @abundant, sprintf "%2d. %4d: %s = %d",
                                        ++$count, $n, join( '+', @divisors ), $sum;
            }
        }

        return \@abundant;
    }
```

[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/peter-campbell-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Abundantly odd and ... Oh dear!](https://pjcs-pwc.blogspot.com/2022/07/abundantly-odd-and-oh-dear.html)

Here's another one from Peter requiring a bit of egg and milk, using `divisors`. Note that summing the list is not a difficult operation or anything, dispatched here in a single line.

```perl
    use Math::Prime::Util qw(divisors);
    binmode(STDOUT, ':utf8');

    # Write a script to generate first 20 Abundant Odd Numbers.
    # n is an abundant number if the sum of its divisors σ(n) > 2n.

    # Blog: https://pjcs-pwc.blogspot.com/2022/07/abundantly-odd-and-oh-dear.html

    my ($count, $i, @divisors, $sum);

    # loop over odd numbers
    $count = 0;
    for ($i = 1; $count < 20; $i += 2) {

        # add the divisors
        @divisors = divisors($i);
        $sum = 0;
        $sum += $_ for @divisors;

        # we have an AON if the sum exceeds 2i
        if ($sum > 2 * $i) {
            $count ++;
            say qq[aon[$count] = $i because σ($i) = $sum which is more than 2 * $i = ] . (2 * $i);
        }
    }
```


[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/perlboy1967/perl/ch-1.pl)

It should be noted that `Math::Prime::Util` was not the only option available, either: here Niels "PerlBoy" van Dijke employs the services of the eponymous module from celebrated Hollywood cosmetologist `Math::Factor` to provide `factors()`. It should be noted that this module distinguishes simply between factors and prime factors, the one all-inclusive the second only the prime factorization. "Factors" in this context is equivalent to "divisors".

```perl
    use List::Util qw(sum0);
    use Math::Factor::XS qw(factors);

    # Prototype(s)
    sub isOddAbudant ($);


    my ($i,$n) = (1,1);
    while ($i <= 20) {
      if (isOddAbudant($n)) {
        say "$i\t$n"; $i++;
      }
      $n += 2;
    }


    sub isOddAbudant ($) {
      return $_[0] % 2 && sum0(factors($_[0])) > $_[0];
    }
```

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/ulrich-rieke/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/ulrich-rieke/cpp/ch-1.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/ulrich-rieke/haskell/ch-1.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/ulrich-rieke/raku/ch-1.raku)

Back to basics, Ulrich demonstrates that obtaining a divisor list using trial division is not complicated either. Here he includes a `findDivisors()` function that checks candidates from 1 to half the target value.

```perl
    sub findDivisors {
      my $number = shift ;
      my @divisors ;
      for my $i ( 1 .. int( $number / 2 ) ) {
          if ( $number % $i == 0 ) {
              push @divisors , $i ;
          }
      }
      return @divisors ;
    }
```

[**Bartosz Jarzyna**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/brtastic/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/brtastic/c/ch-1.c), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/brtastic/pascal/ch-1.pas), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/brtastic/raku/ch-1.raku)

Using the listwise filtering `grep` operation, trial division can be accomplished in a single line. Bartosz does chose to include the `List::Util` function `sum0` though.

`List::Util` contains two functions, `sum` and `sum0`, which are largely interchangeable, and in my experience it seems that most people pick one or the other and default to it. Both functions work on a list of values, performing sequential addition to return a single aggregate value. The only difference between them is that when given an empty list, `sum` will return undef, and `sum0` will return the real value 0. So your data, or lack thereof, should determine which to use. Practically speaking this in not lkely to come up, but might, and one should know both exist.

This opens a banquet of existential questions as to the nature of nothingness that I will leave as an exercise to the reader. In my opinion, Jean-Paul Satre would be good place to start, avec [*L'Être et le néant : Essai d'ontologie phénoménologique*](https://en.wikipedia.org/wiki/Being_and_Nothingness).

```perl
    use List::Util qw(sum0);

    sub get_divisors ($number)
    {
        return grep { $number % $_ == 0 } 1 .. $number / 2;
    }

    sub get_next_abundant_odd ($current = 1)
    {
        while ('number is not abundant odd') {
            return $current
                if $current % 2 != 0
                && sum0(get_divisors $current) > $current
            ;

            ++$current;
        }
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC171 - Abundant Number - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/06/29/pwc171-abundant-number/)

Finally, we'll wrap up the discussion with Flavio, who presents us with an improved method of trial division.

When searching for divisors, there are always two trivial solutions: 1 and the number itself. Depending on our definition of propriety we can either choose to include these in our list or not. Beyond that, the smallest divisor then is 2, and coupled with the fact that each divisor must have a complementary divisor to multiply with to produce the target value, it is pointless to examine candidates greater than 1/2 the target, as no possible complement exists.

This is thus the default range to check in trial division.

However if whenever a divisor is found, we also immediately calculate and add the complement, we can narrow this range to up to the square root of the target. The half-way point is the maximal complement value — discounting the trivial divisor of the target itself — and for any divisor greater than 2 the complement value will be less.

But, on the other hand, the complement will also be greater than the square root. Circling the root, divisors come in pairs — one below, one above. The square root itself is where these pairs converge and become the same value.

So if we use the square root as an upper bound we can reduce the range checked significantly, and consequently improve our efficiency. There is one problem though: if we're looking for an optimal method the square root operation itself requires a lot of division and is consequently rather expensive, computationally speaking. Pretty much the most expensive of the more common operations, in fact.

Enter Flavio, who searches the same optimal range without ever computing the square root. How you ask? Well we can first generalize the statement we made earlier about divisors and their complements, so that a number divided by any (lets keep things positive here) number less than the square root will produce a number less than the target and greater than the square root, and as we approach the square root these two values will converge.

So by tracking divisors and their complements together, we only need to continue until the complement divisor is less than the low value. At that point we know we have crossed the square root without needing to actually ever compute it.

And finally, what of the square root itself? To keep the divisor list properly ordered two lists are compiled, a `@low` array, which low values are appended to, and a `@high` that has the ever-shrinking high values prepended. At the end the two lists are deliveded together as one, the low before the high. In the case of the square root, however, the divisor and the complement are the same. To avoid adding the root twice, the first, low, value is always added, but the second value is only added if the low and high values are different.

Nice.

```perl
    use List::Util 'sum';

    while (@abundants < $n) {
       push @abundants, $candidate if is_abundant($candidate);
       $candidate += 2;
    }
    say join ', ', @abundants;

    sub is_abundant ($n) { $n < sum(proper_positive_divisors($n)) }

    sub proper_positive_divisors ($n) {
       return unless $n;
       $n = -$n if $n < 0;
       my (@lows, @highs) = (1);
       my ($lo, $hi) = (2, $n);
       while ($lo < $hi) {
          if ($n % $lo == 0) {
             push @lows, $lo;
             $hi = int($n / $lo);
             unshift @highs, $hi if $hi != $lo;
          }
          ++$lo;
       }
       return (@lows, @highs);
    }
```



## Blogs and Additional Submissions in Guest Languages for Task 1:


[**Ali Moradi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/deadmarshal/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/deadmarshal/cpp/ch-1.cpp), [D](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/deadmarshal/d/ch1.d), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/deadmarshal/haskell/ch-1.hs), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/deadmarshal/lua/ch-1.lua), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/deadmarshal/pascal/ch1.pas)


[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/duncan-c-white/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/duncan-c-white/C/ch-1.c)


[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/jaldhar-h-vyas/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/jaldhar-h-vyas/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 171](https://www.braincells.com/perl/2022/07/perl_weekly_challenge_week_171.html)


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/james-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #171](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-171/james-smith)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/laurent-rosenfeld/awk/ch-1.awk), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/laurent-rosenfeld/bc/ch-1.bc), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/laurent-rosenfeld/c/ch-1.c), [D](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/laurent-rosenfeld/d/ch-1.d), [Dart](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/laurent-rosenfeld/dart/ch-1.dart), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/laurent-rosenfeld/go/ch-1.go), [Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/laurent-rosenfeld/javascript/ch-1.js), [Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/laurent-rosenfeld/julia/ch-1.jl), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/laurent-rosenfeld/kotlin/ch-1.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/laurent-rosenfeld/lua/ch-1.lua), [Nim](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/laurent-rosenfeld/nim/ch-1.nim), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/laurent-rosenfeld/pascal/ch-1.pas), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/laurent-rosenfeld/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/laurent-rosenfeld/raku/ch-1.raku), [Ring](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/laurent-rosenfeld/ring/ch-1.ring), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/laurent-rosenfeld/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/laurent-rosenfeld/rust/ch-1.rs), [Scala](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/laurent-rosenfeld/scala/ch-1.scala)


&nbsp;&nbsp;**blog writeup:**
[ Perl Weekly Challenge 171: Abundant Numbers and First-Class Functions](http://blogs.perl.org/users/laurent_r/2022/06/perl-weekly-challenge-171-abundant-numbers-and-first-class-functions.html)


[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/pokgopun/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/pokgopun/go/ch-1.go)


[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/robert-dicicco/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/robert-dicicco/julia/ch-1.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/robert-dicicco/raku/ch-1.raku), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/robert-dicicco/ruby/ch-1.rb)


[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/ryan-thompson/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/ryan-thompson/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC 171 › Odd Abundant Numbers - Ryan J Thompson](https://ry.ca/2022/06/odd-abundant-numbers/)


[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/steve-g-lynn/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/steve-g-lynn/julia/ch-1.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/steve-g-lynn/raku/ch-1.p6)


&nbsp;&nbsp;**blog writeup:**
[PWC #171](https://thiujiac.blogspot.com/2022/06/pwc-171.html)


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/wlmb/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 171 – W. Luis Mochán](https://wlmb.github.io/2022/06/27/PWC171/)


[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/walt-mankowski/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/walt-mankowski/python/ch-1.py)


------------------------------------------





---

# TASK 2 {#PWC171TASK2}

# First-class Function
*Submitted by: Mohammad S Anwar*

Create sub compose($f, $g) which takes in two parameters $f and $g as subroutine refs and returns subroutine ref i.e. compose($f, $g)->($x) = $f->($g->($x))


**e.g.**

```
    $f = (one or more parameters function)
    $g = (one or more parameters function)

    $h = compose($f, $g)
    $f->($g->($x,$y, ..)) == $h->($x, $y, ..) for any $x, $y, ...
```

## about the solutions
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/adam-russell/perl/ch-2.pl),
[**Ali Moradi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/deadmarshal/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/athanasius/perl/ch-2.pl),
[**Bartosz Jarzyna**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/brtastic/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/jo-37/perl/ch-2.pl),
[**Kjetil Skotheim**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/kjetillll/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/laurent-rosenfeld/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/mattneleigh/perl/ch-2.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/mohammad-anwar/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/perlboy1967/perl/ch-2.pl),
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/pokgopun/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/roger-bell-west/perl/ch-2.pl),
[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/ryan-thompson/perl/ch-2.pl),
[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/steve-g-lynn/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/ulrich-rieke/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/wlmb/perl/ch-2.pl), and
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/walt-mankowski/perl/ch-2.pl)

Functions are first-class citizens in Perl: they hold jobs, they are upstanding pillars of the community, they pay their taxes, and are fully-qualified to be elected to public office.

As such a reference to a function can be passed around between parts of a process the same  as any other variable; instead of directing access to a value, we are directed to a block of code. Much as we can use an external variable value to parameterize whatever we're doing, we can use an external coderef to flexibly alter the internal data state.

A more serious definition of first-class functions is the basis of what is known as funcional programming, where complex tasks are broken down into discrete components that process data in well-defined operations, coupled together to make larger structures.

In a manner akin to recursion, where a long journey is reduced to repeating a single step until completion, functional programing generalizes this idea: multi-step functions with multiple arguments can be reduced to individual discrete steps that perform one action, often on one variable. By combining these functions we can preform complex data processing and ensure that at each step along the way the fundamental logic is rigorous and sound.

Formally, the act of taking the output of one function and using this as the input of a second, to make a new combined function, is known as composition, and a glyph is assigned to this operation, sometimes known as the ring operator: ∘

The expression ***h*** = ***f*** ∘ ***g*** means that the function ***h*** is the same as the chain of  applying the function ***f*** to the result returned from applying function ***g*** to an input.

***h***(*x*) = ***f***(***g***(*x*))






There were 25 submissions for the second task this past week.

## A SELECTION of SUBMISSIONS
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/walt-mankowski/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/colin-crain/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/mattneleigh/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/jo-37/perl/ch-2.pl),
[**Ali Moradi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/deadmarshal/perl/ch-2.pl),
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/pokgopun/perl/ch-2.pl),
[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/ryan-thompson/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/e-choroba/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/wlmb/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/duncan-c-white/perl/ch-2.pl), and
[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/steve-g-lynn/perl/ch-2.pl)

Because of the necessity to pass around functions as code references, there really are not a whole lot of different ways to compose functions in Perl. The available syntax is both limited and effective, and doesn't really either require nor inspire any improvement. So we saw a lot of self-similarity in the solutions.

With one glaring outlier. Just you wait.


[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/walt-mankowski/perl/ch-2.pl)

Walt will start us off with a demonstration the form. He creates two toy functions, `sum()`  and `double()` that serve as stand-in examples for any arbitrary subroutine.

His `compose()` routine takes two coderef inputs and returns an anonymous subroutine that applies the first to the results of the second. Thus by calling `compose()` a third routine is created, as per spec, that can be called with arguments that will feed the chain of first the onte then the other.


```perl
    sub compose($f, $g) {
        return sub { $f->($g->(@_)) };
    }

    sub sum {
        my $sum = 0;
        $sum += $_ for @_;
        return $sum;
    }

    sub double {
        return map { $_ * 2 } @_;
    }

    my $c = compose(\&sum, \&double);
    say $c->(1,2,3,4);
```

[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/colin-crain/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Let Me Make This Abundantly Clear - Programming Excursions in Perl and Raku](https://colincrain.com/2022/07/01/let-me-make-this-abundantly-clear)

For my own submission, I was a bit torn by how to provide the best example. Defining a named subroutine and taking an explicit reference to it allows the name to be a meaningful descriptive of what's happening, but I feel immediately assigning a scalar an anonymous subroutine reference is more pure to the spirit of what's going on when we compose the functions later.

What to do?

Originally I took the long road to obtain a subroutine reference, but by now I've changed my mind. Conveniently I included code done both ways, and just commented some out.

```perl
    my $g = sub { $_[0] + $_[1] };
    my $f = sub { $_[0] ** 2    };

    sub compose ($f, $g) {
        return sub {$f->( $g->( @_ ) )};
    }

    my $c = compose( $f, $g );

    say $c->( 2,3 );
```

The top coderef sums two arguments, the bottom squares one. The coderef returned by `compose` sums and then squares, in this case returning 25.

[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/mattneleigh/perl/ch-2.pl)

Matthew give us an example using the old dereferencing syntax, stacking sigils:

```perl
    sub compose{
        my $f = shift();
        my $g = shift();

        return(
            sub{

                # This @ARG is the one passed to
                # the sub, not to compose()
                return(&$f(&$g(@ARG)));

            }
        );

    }
```

I find this quite noisy, personally (although I admit to being sometimes still seduced by the simplicity of `@$_`). Also braces are often required using this syntax to properly delineate where the reference starts, which makes things *really* noisy.

I always encourage the modern post-dereferencing arrow, but that's just me. And yes, using

```perl
    say "@$__" for @arr
```

to dump an array-of-arrays is quite easy, I admit. But I try and limit that to debugging.

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/jo-37/perl/ch-2.pl)

I generally find that when even Jorg can't find a way to either strip something down or spice it up then the answer is already in its lowest-energy state.

```perl
    sub compose ($f, $g) {
        sub {$f->($g->(@_))};
    }
```

This simple syntax is just kind of perfect as it is. Notice because there is no `return` statement elsewhere in the sub we automatically return the last thing evaluated, in this case the anonymous subroutine we create. So no `return` statement is required.

[**Ali Moradi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/deadmarshal/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/deadmarshal/cpp/ch-2.cpp), [D](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/deadmarshal/d/ch2.d), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/deadmarshal/haskell/ch-2.hs), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/deadmarshal/lua/ch-2.lua), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/deadmarshal/pascal/ch2.pas)

It is said that there are many ways up the mountain, but only one peak. Here to follow is Ali's submission to prove the point (so to speak):

```perl
    sub compose{
      my ($f, $g) = @_;
      sub {
        $f->($g->(shift()));
      }
    }
```

The only difference here is we aren't using the freshly-out-of-experimental `signatures` feature, so we need to assign our arguments from the stack manually.

[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/pokgopun/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/pokgopun/go/ch-2.go)

PoGoPun's take on the constructor is quite interesting.

```perl
    sub compose{
        my @f = @_;
        my $f = shift @f;
        return @f ? sub{ $f->(compose(@f)->(@_)) } : $f;
    }
```

What's happening here? Given a list of function coderefs, they recursively compose the head of the list into a new function until the list has been exhausted. Thus, if we add an example to PoGoPun's solution:

```perl
    my $doub = compose( \&Square, \&Square );
    my $trip = compose( \&Square, \&Square, \&Square );

    say "doub ", $doub->(2);
    say "trip ", $trip->(2);
```

we get this:

```
    doub 16
    trip 256
```

`Square()` does pretty much what you'd think it does. Actually it works listwise and squares each element in a *list* of numbers, but we'll get to that. So composing that function with itself squares the number twice, as we see. However handing a third instance in the chain squares *that* result, yielding the eighth power. Neat, and we can give `compose()` as many coderefs as we wish, as it works recursively until finished.

As we mentioned the toy functions PokGoPUn provides work on lists, and they
also make a nice listwise presentation of their results, emphasizing that the compose function is not commutative — the ordering of the arguments very much matters.

```
    Sumdigit(19, 29, 39) = (10, 11, 12) => Square(10, 11, 12) = (100, 121, 144)
    => SqaureAfterSumdigit(19, 29, 39) = (100, 121, 144)

    Square(19, 29, 39) = (361, 841, 1521) => Sumdigit(361, 841, 1521) = (10, 13, 9)
    => SumdigitAfterSquare(19, 29, 39) = (10, 13, 9)
```

Capiche?

Now we'll have a look at a bunch of ways to wrap the exact same syntactic core:

[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/ryan-thompson/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/ryan-thompson/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC 171 › First Class Functions - Ryan J Thompson](https://ry.ca/2022/07/first-class-functions/)

As the core logic and syntax is pretty fixed, here Ryan demonstrates a few alternate ways to obtain a function coderef. We've seen the syntax for taking an explicit reference to an existing named subroutine, using a backslash reference on the subroutine sigil: `\&mysub()`. Note the `&` sigil is required or the reference produced will be on whatever is returned by the subroutine, which is not what we want here. On the other hand the subroutine can be any code, anywhere — here Ryan takes a reference to `sum0` from `List::Util`. It doesn't even need to be in the same package, or even Perl code: `List::Util` defaults to compiled C written using XS.

A perhaps more elegant way to to this, and I think the most common in real-world practice, is that if we know we want a reference to a subroutine then there is little reason to name it in the first place. In this case we can assign the constucter directly to a scalar and get the reference that way: `$coderef = sub { ... }`.

```perl
    use List::Util qw< sum0 >;

    my $squares = sub { map { $_ * $_ } @_ };
    my $h = comp( \&sum0, $squares );

    say "The sum of squares for 1..10 = " . $h->(1..10);

    # Demonstrate function composition
    sub comp {
        my ($f, $g) = @_;

        sub { $f->($g->(@_)) }
    }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/e-choroba/perl/ch-2.pl)

Choroba implements some basic input validation using `Ref::Util:is_plain_coderef`, to make sure the reference being passed is indeed a code reference. It is, after all, just another scalar and could be anything, or nothing.

```perl
    use Ref::Util qw{ is_plain_coderef };

    sub compose ($f, $g) {
        is_plain_coderef($_) or die "Not a CODE reference!"
            for $f, $g;
        return sub ($x) { $f->($g->($x)) }
    }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/wlmb/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 171 – W. Luis Mochán](https://wlmb.github.io/2022/06/27/PWC171/)

Luis inputs his functions as strings from the command line (!) which are then evaled, which is of course completely, shockingly unsafe. But hey, we're all friends here, right? We know pwerfectly well not to touch the bare ends of the wires, right?

When locked up tight this code is of course perfectly safe. Just don't let it out of your sight.

```perl
    my ($f, $g)=map {eval $_ or die $@} my ($fs, $gs)=(shift, shift);
    my $h=compose($f, $g);
    say "$fs ∘ $gs : ", join(", ", @ARGV), " ↦ ", $h->(@ARGV);

    sub compose($f, $g){
        sub {$f->($g->(@_))};
    }
```

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/duncan-c-white/perl/ch-2.pl)

As Duncan demonstrates, a function `fun`, from `Function::Parameters` is just a fancy subroutine with extra parts. Code references work the same for them as any other subroutine.

```perl
    use Function::Parameters;

    fun compose( $f, $g )
    {
        return fun(@x) { return $f->($g->(@x)); }
    }


    my $sum       = fun( @x ) { return sum0(@x); };
    my $double    = fun( @x ) { return map { 2 * $_ } @x };
    my $sumdouble = compose( $sum, $double );
    my $n = $sumdouble->( @ARGV );
```

[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/steve-g-lynn/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/steve-g-lynn/julia/ch-2.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/steve-g-lynn/raku/ch-2.p6)


&nbsp;&nbsp;**blog writeup:**
[PWC #171](https://thiujiac.blogspot.com/2022/06/pwc-171.html)

Perhaps I did this to myself.

I can't help feeling this is my fault.

I got cocky. I saw a very repetitive list of solutions with only minor unessential syntactic variation. So I figured the rest, the ones I hadn't looked at, would be the same. It's compact, simple and perfect. Why would someone chose to do it differently.

*Oh Colin, you sweet summer child.*

Usually in this case I scan through all of the submissions to see if anything stands out. Normally, you know, I draw my selections out of a hat to get a random sample.

Which is how I found Stephen's solution.

Which is essentially in Perl 4.

*Let's take a moment to let that sink in. I will note to the reader that when Perl 5 came out I welcomed it with open arms and save for modernizing existing Perl 4 code, never, ever looked back.*

So how do you compose functions without references, you may ask? Typeglobs are sort of a pointer to a name in the symbol table, which can be attached to a variety of data types: scalars, arrays, hashes, filehandles or subroutines are the main group. There are I believe 9, including the typeglob. Typeglobs sort of point to all of these types simultaneously. It's confusing ab=nd they were mostly used for filehandles in my world. But to the point: using typeglobs we can hack into the argument stack for the `&g` subroutine using `splice` and directly insert the output from `&f`.

That's the simplified version. Stephen's code is actually sneakier, and hackier (to use the historic, noble definition of the term)

He provides two ways to do the deed. In the first, `compose` becomes the composed subroutine. In the second, a string is returned that needs to be evaled, containing the necessary code to create the composed function. In his second example, if we insert the line:

```perl
    say "unevaled string: ", &alt_compose(*sum,*factors);
```

we add this to the output which might serve to clarify things somewhat. Or not, I don't know. I'll venture most people will have no idea what is going on here. Good luck.

```
    unevaled string: &main::sum(2,3,5,6,10,15)
```

See? And with that clue I'm out. Here's the full text of Stephen's solution:


```perl
    # This function "composes" subroutines using old features from perl 4:
    # package vars, typeglobs, and the symbol table.

    #-- The subroutine call &compose(*g,*f) returns sub { &g(@g) }
    #-- where &f(@f) is one of the arguments in @g
    #-- and $g (int) indicates the position in which &f is spliced into
    #-- @g


    #-- approach using typeglobs (perl 4 style)
    #-- does not return a subroutine, evaluates g(f()) and returns the result
    sub compose {
        local (*g, *f)=@_;
        splice(@g,$g,0,&f(@f));
        return &g(@g); #-- not a subroutine ref
    }

    #-- alt (same as compose but returning a string to be eval'ed)
    sub alt_compose {
        local (*g, *f)=@_;
        splice(@g,$g,0,&f(@f));
        return '&'.substr(*g,1).'('.join(',',@g).')';
    }


    #-- this is the direct solution to the challenge: modern Perl
    sub alt_2_compose { #-- for the simple case g(f(x)) [no other g params]
        my ($rg, $rf, @x)=@_;
        return sub { &$rg(&$rf(@x))  };
    }


    #-- example find sum ( factors (30) ) using compose,etc.

    use Math::Factor::XS qw(factors);

    {#-- example: print sum (factors (30)) using compose
    local @factors=(30); #-- @_ for factors
    local $sum=0; #-- location to insert &factors in sum @_
    local @sum=(); #-- sum @_ excluding &myfactors(..)
    print "compose: ",&compose(*sum, *factors),"\n"; #-- 41
    @sum=(); #-- reset before alternative compose
    print "alt_compose: ",eval(&alt_compose(*sum,*factors)),"\n"; #--41
    }

    print &{"alt_2_compose: ",&alt_2_compose('sum','factors',30)},"\n"; #-- 41

    sub sum {
    #-- sum over an array
        my $sum=0;
        return ( (map {$sum += $_} @_ ) [-1] );
    }
```





## Blogs and Additional Submissions in Guest Languages for Task 2:



[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/adam-russell/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/adam-russell/java/ch-2.java), [Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/adam-russell/prolog/ch-2.p)


&nbsp;&nbsp;**blog writeup:**
[Abundant Composition - Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/07/03)

&nbsp;&nbsp;**blog writeup:**
[Abundant Composition - Prolog — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/07/03)


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/athanasius/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/athanasius/raku/ch-2.raku)



[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC171 - First-class Function - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/06/30/pwc171-first-class-function/)


[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/jaldhar-h-vyas/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/jaldhar-h-vyas/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 171](https://www.braincells.com/perl/2022/07/perl_weekly_challenge_week_171.html)


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/james-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #171](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-171/james-smith)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/laurent-rosenfeld/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[D](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/laurent-rosenfeld/d/ch-2.d), [Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/laurent-rosenfeld/julia/ch-2.jl), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/laurent-rosenfeld/kotlin/ch-2.kt), [Nim](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/laurent-rosenfeld/nim/ch-2.nim), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/laurent-rosenfeld/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/laurent-rosenfeld/raku/ch-2.raku), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/laurent-rosenfeld/ruby/ch-2.rb), [Scala](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/laurent-rosenfeld/scala/ch-2.scala)


&nbsp;&nbsp;**blog writeup:**
[ Perl Weekly Challenge 171: Abundant Numbers and First-Class Functions](http://blogs.perl.org/users/laurent_r/2022/06/perl-weekly-challenge-171-abundant-numbers-and-first-class-functions.html)


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/roger-bell-west/javascript/ch-2.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/roger-bell-west/kotlin/ch-2.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/roger-bell-west/lua/ch-2.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/roger-bell-west/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/roger-bell-west/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 171: First-Class Abundance](https://blog.firedrake.org/archive/2022/06/The_Weekly_Challenge_171__First_Class_Abundance.html)


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/ulrich-rieke/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/ulrich-rieke/cpp/ch-2.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/ulrich-rieke/haskell/ch-2.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-171/ulrich-rieke/raku/ch-2.raku)















------------------------------------------





---

<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>

<center>
<h1 id="PWC171BLOGS">_________ THE BLOG PAGES _________</h1>
</center>


---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, by some miracle I somehow continue to maintain my bearings.**

**Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your Unquenchable *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC171BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *FOLLOW* these *BLOG* *LINKS*:

**( ...*don't think, trust your training, you're in the zone, just do it ...* )**


**Adam Russell**

 * [Abundant Composition - Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/07/03) ( *Perl* )
 * [Abundant Composition - Prolog — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/07/03) ( *Prolog* )

**Arne Sommer**

 * [Abundantly First Class with Raku - Arne Sommer](https://raku-musings.com/abundantly-first-class.html) ( *Raku* )

**Colin Crain**

 * [Let Me Make This Abundantly Clear - Programming Excursions in Perl and Raku](https://colincrain.com/2022/07/01/let-me-make-this-abundantly-clear) ( *Perl* )

**Flavio Poletti**

 * [PWC171 - Abundant Number - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/06/29/pwc171-abundant-number/) ( *Perl & Raku* )
 * [PWC171 - First-class Function - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/06/30/pwc171-first-class-function/) ( *Perl & Raku* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 171](https://www.braincells.com/perl/2022/07/perl_weekly_challenge_week_171.html) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #171](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-171/james-smith) ( *Perl* )

**Laurent Rosenfeld**

 * [ Perl Weekly Challenge 171: Abundant Numbers and First-Class Functions](http://blogs.perl.org/users/laurent_r/2022/06/perl-weekly-challenge-171-abundant-numbers-and-first-class-functions.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 171: numbers and references – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/06/27/PerlWeeklyChallenge171.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 171: numbers and references – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/06/27/PerlWeeklyChallenge171.html#task1plperl) ( *PL/Perl* )
 * [Perl Weekly Challenge 171: numbers and references – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/06/27/PerlWeeklyChallenge171.html#task1plpgsql) ( *PL/PostgreSQL* )

**Peter Campbell Smith**

 * [Abundantly odd and ... Oh dear!](https://pjcs-pwc.blogspot.com/2022/07/abundantly-odd-and-oh-dear.html) ( *Perl* )

**Roger Bell_West**

 * [RogerBW's Blog: The Weekly Challenge 171: First-Class Abundance](https://blog.firedrake.org/archive/2022/06/The_Weekly_Challenge_171__First_Class_Abundance.html) ( *Perl & Raku* )

**Ryan Thompson**

 * [PWC 171 › Odd Abundant Numbers - Ryan J Thompson](https://ry.ca/2022/06/odd-abundant-numbers/) ( *Perl & Raku* )
 * [PWC 171 › First Class Functions - Ryan J Thompson](https://ry.ca/2022/07/first-class-functions/) ( *Perl & Raku* )

**Stephen G Lynn**

 * [PWC #171](https://thiujiac.blogspot.com/2022/06/pwc-171.html) ( *Perl & Raku* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 171 – W. Luis Mochán](https://wlmb.github.io/2022/06/27/PWC171/) ( *Perl* )
