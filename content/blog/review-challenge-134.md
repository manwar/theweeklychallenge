---
author:       Colin Crain
date:         2021-11-08T00:00:00
description:  "Colin Crain › Perl Weekly Review #134"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #134"
image:        images/blog/p5-review-challenge-134.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-133/).* )

Welcome to the Perl review pages for **Week 134** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

---

### Why do we do these challenges?

I suppose any reasonable answers to that question would be as wide ranging and varied as the people who choose to join the team. One thing, though, is clear: it's not a competition, and there are no judges, even if there is a "prize" of sorts. About that -- I think of it more as an honorarium periodically awarded to acknowledge the efforts we make towards this strange goal. So there's no determination to find the *fastest*, or the *shortest*, or even, in some abstract way, the *best* way to go about things, although I'm certain the participants have their own aspirations and personal drives. As Perl is such a wonderfully expressive language, this provides quite a bit of fodder to the core idea of TMTOWTDI, producing a gamut of varied techniques and solutions.

Even the tasks themselves are often open to a certain amount of discretionary interpretation. What we end up with is a situation where each participant is producing something in the manner they find the most interesting or satisfying. Some team members focus on carefully crafted complete applications, thoroughly vetting input data and handling every use case they can think up. Others choose to apply themselves to the logic of the underlying puzzle and making it work in the most elegant way they can. Some eschew modules they would ordinarily reach for, others embrace them, bringing to light wheels perhaps invented years ago that happen to exactly solve the problem in front of them today.

I've been considering this question for some time and have found one binding commonality between all of us out solving these challenges each week, in that however we normally live our lives, the task in front of us more than likely has nothing to do with any of that. And I think this has great value. We all do what we do, in the real world, and hopefully we do it well. The Weekly Challenge provides us with an opportunity to do something germane to that life yet distinctly different; if we only do the things we already know how to do then we will only do the same things over and over. This is where the "challenge" aspect comes into play.

So we can consider The Weekly Challenge as providing a problem space outside of our comfort zone, as far out from that comfort as we wish to take things. From those reaches we can gather and learn things, pick and choose and bring what we want back into our lives. Personally, I think that's its greatest value of all.

---

Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due.

And that's why I'm here, to try and figure out how to do that.

Let's get on with it then, have a look and see what we find.

---

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-134/) or the summary [**recap**](/blog/recap-challenge-134/) of the challenge. But don't worry, the challenges themselves are repeated and presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please feel free to email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC134TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC134TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC134BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC134TASK1}

# Pandigital Numbers
*Submitted by: Mohammad S Anwar*

Write a script to generate first 5 Pandigital Numbers in base 10.

As per the wikipedia, it says:

>A pandigital number is an integer that in a given base has among its significant digits each digit used in the base at least once.



## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/abigail/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/adam-russell/perl/ch-1.pl),
[**Andrezgz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/andrezgz/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/athanasius/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/cheok-yin-fung/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/jo-37/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/lubos-kolouch/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/mattneleigh/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/mohammad-anwar/perl/ch-1.pl),
[**Olivier Delouya**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/olivier-delouya/perl/ch-1.sh),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/paulo-custodio/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/pete-houston/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/peter-campbell-smith/perl/ch-1.pl),
[**Rage311**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/rage311/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/roger-bell-west/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/ulrich-rieke/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/wlmb/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/wanderdoc/perl/ch-1.pl)


There were 26 submissions for the first task this past week. Although superficially complicated — we are of course selecting from an infinite list of numbers that contain all ten digits, with a non-obvious sequencing — the small end of the sequence, the first values, can be found to within a limited range in short order. We saw a few ways to analyse the problem and arrive at the solution within a reasonable amount of time, both using combinatorics and brute force.

## TWELVE WAYS to get to TEN
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/abigail/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/lubos-kolouch/perl/ch-1.pl),
[**Rage311**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/rage311/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/polettix/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/roger-bell-west/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/jo-37/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/ulrich-rieke/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/dave-jacoby/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/james-smith/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/athanasius/perl/ch-1.pl), and
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/paulo-custodio/perl/ch-1.pl)

It was commonly noted that the first set of pandigital numbers will be those that use all ten digits and no more: any number with a duplicate digit would necessitate 11 positions to hold it, and hence would be greater than any number containing only 10. So the problem was often viewed as one of permutations of these ten values, joined into numbers. However as only the last few places of the initial value 1023456789 require being changed to arrive at the five lowest pandigital numbers, trading simplicity for efficiency and counting through them, using a strategy of  incrementation and verification, was a valid strategy as well. Even counting upward from 1 billion was reasonably fast after the first 23 million or so false results.


[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/abigail/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/abigail/awk/ch-1.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/abigail/bash/ch-1.sh), [Basic](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/abigail/basic/ch-1.bas), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/abigail/bc/ch-1.bc), [Befunge-93](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/abigail/befunge-93/ch-1.bf93), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/abigail/c/ch-1.c), [Csh](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/abigail/csh/ch-1.csh), [Erlang](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/abigail/erlang/ch-1.erl), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/abigail/go/ch-1.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/abigail/java/ch-1.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/abigail/lua/ch-1.lua), [M4](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/abigail/m4/ch-1.m4), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/abigail/node/ch-1.js), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/abigail/pascal/ch-1.p), [Php](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/abigail/php/ch-1.php), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/abigail/python/ch-1.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/abigail/r/ch-1.r), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/abigail/ruby/ch-1.rb), [Scheme](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/abigail/scheme/ch-1.scm), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/abigail/tcl/ch-1.tcl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 134: Pandigital Numbers](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-134-1.html)

Sometimes when presented with a problem the obvious complexity of the task — selecting combinations of ten digits amongst the breadth of W, the whole numbers — clouds our initial analysis, making the solution appear harder than it works out to be. Such is the case of calculating pan-digital numbers, as evidenced by Abigail's brisk breakdown:

>It's clear that the first pandigital numbers are ten digits long, and contain each of the digits exactly once. There are 9⋅9! = 3265920 pandigital numbers with exactly ten digits. Those are all the permutations of the digits 0 to 9, excluding the permutations starting with a 0.
>
>Since the pandigital numbers are in order, all the first six pandigital numbers start with 1023456, followed by a permutation of the digits 7, 8, and 9. Since we only need to generate the first five pandigital numbers, the permutations we need are 789, 798, 879, 897, and 978 (and in that order).

By front-loading almost all computation into a preparatory mathematical analysis, they have removed almost all required processing, ending up with the near trivial coupling of the five permuted suffixes to the base prefix.

And here we thought this was going to be hard.

```perl
    say "1023456$_" for qw [789 798 879 897 978];
```

Well that is one way to get the job done: just figure it out and pull the curtain back for all the world to see.

Kudos.

[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/lubos-kolouch/perl/ch-1.pl)

Lubos takes a broader approach, importing `Algorithm::Combinatorics`, and specifically its `permutations()` routine, to produce permutations for the digits 2 through 8, where they are joined up and appended to a common '10' prefix.

This solution relies on the function delivering the rearrangements in a specific order, which works out when the seed array is numerically sorted as is the case here.

```perl
    use Algorithm::Combinatorics qw/permutations/;

    sub get_10_pandigital {

        my @list = ( 2 .. 9 );
        unshift @list, 0;
        unshift @list, 1;

        my $counter = 1;
        my $iter    = permutations( \@list );

        my @result;

        while ( my $p = $iter->next ) {
            push @result, join "", @$p;
            $counter++;
            last if $counter == 11;
        }

        return \@result;
    }
```

Although not outwardly stated in the documentation, I got curious — a quick peek into the `Combinatoics.xs` file reveals that indeed, the algorithm used in Knuth's algorithm L, which produces lexicographically sorted output. Good to know.

[**Rage311**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/rage311/perl/ch-1.pl)

For a given base *b*, the smallest pandigital number can be found using the formula

((*b*<sup>2</sup>-*b*)/(*b*-1)<sup>2</sup>)+(*b*-1)(*b*(*b*-2))

Rage here uses this number as a base and starts counting upwards to find the next. Each new candidate is split and the digits hashed; if the hash has ten keys each digit value has been utilized.

Brute force is still practical but quite inefficient if we start counting from 1, or less so from 1 billion, being the smallest value with the requisite number of digits. However here, as we have the smallest value to start from, it really isn't a bad approach at all; finding the first 10 numbers requires 1107 candidates. The odds decrease steadily, however, and to find 1000 values we need to make 1,202,004 tries. After 40000 or so values, we fall off a cliff and need to jump the the `1_234_567_890` results, which start up again after a 135 million number gap.

```perl
    sub pandigital ($base, $count) {
      return if $count < 1;
      my $prev =
        (
          ($base ** $base - $base) / ($base - 1) ** 2
        )
        + ($base - 1)
        * ($base ** ($base - 2))
        - 1;

      my @results = $prev;

      while (@results < $count) {
        my %digits;
        my @chars = split //, ++$prev;
        $digits{$_} = 1 for @chars;
        next unless keys %digits == $base;
        push @results, join '', @chars;
      }

      return @results;
    }
```

The smallest pandigital number in a given base can be easily expressed as a string: '10' followed by all of the remaining digit values in the base, listed in sequential order. Or in base 10, '10' prefixed to '23456789'. That's it. I find it a little remarkable that the general purpose formula listed above can even be constructed, frankly, although I have not taken the time to try and derive it from an expanded representation.

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC134 - Pandigital Numbers - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/10/13/pwc134-pandigital-numbers/)

Flavio has taken it upon himself to solve all the parts himself, using a string paradigm described above to produce pandigital numbers in all bases up to 36 from a root prefix of '10'. He takes a turn at crafting his own a permutation iterator, implementing the venerable Algorithm L, to produce the string tail-sequence components in lexicographic order from an ordered starting sequence.

To generate the requested sequence, he need only permute the tail and prepend '10' to produce up to (*base*-2)! numbers, which for base-10 is 40,320 values, well beyond the mere 5 requested.

Notable is the use of array slices. Array slices are cool.

```perl
    sub next_permutation (@arrangement) {
       my $i = $#arrangement - 1;
       --$i while $i >= 0 && $arrangement[$i] >= $arrangement[$i + 1];
       return unless $i >= 0;
       my $end = my $j = $#arrangement;
       --$j while $arrangement[$i] >= $arrangement[$j];
       @arrangement[$i, $j] = @arrangement[$j, $i];
       @arrangement[$i + 1 .. $end]  = reverse @arrangement[$i + 1 .. $end];
       return @arrangement;
    }

    sub pandigital_numbers ($n = 5, $b = 10) {
       my ($n_digits, $factorial) = (1, 1);
       $factorial *= ++$n_digits while $factorial < $n;
       die "I'm too lazy for more general algorithms"
          if $n_digits >= $b - 1;

       state $p36_min = '1023456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
       my $fix = substr $p36_min, 0, $b - $n_digits;
       my @moving = split m{}mxs, substr $p36_min, $b - $n_digits, $n_digits;
       map {
          @moving = next_permutation(@moving) if $_;
          join '', $fix, @moving;
       } 0 .. $n - 1;
    }
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 134: Pandigital Multiplication](https://blog.firedrake.org/archive/2021/10/Perl_Weekly_Challenge_134__Pandigital_Multiplication.html)

For all his digit-rearranging needs, Roger chooses `Algorithm::Permute`.

He noticed right off the bat that not all ten digits of the base number 1023456789 need be permuted, with the actual number depending on how many values are requested. Each digit *n* places from the rightmost edge multiplies the total number of new numbers generated by *n*. Thus shuffling the last two digits generates 2 numbers, the last three those 2 times 3, or 6, the last four 24.

His first order of business then is to calculate how many numbers need to be permuted. Counting up, the product is multiplied by the new count at each iteration. The last multiplication will be made in the loop before the condition fails, resulting in the smallest group larger than the target amount requested.

From there the final digits from the sequence (1,0,2,3,4,5,6,7,8,9) are separated out and permuted, and the permutations joined up and sorted, with the requisite number of values taken from the list.

The unselected preceding digits are then joined into a prefix and prepended to each newly made number in turn to produce the final values.


```perl
    use Algorithm::Permute;

    sub pandigital {
      my $count=shift;
      my $digits=1;
      my $cc=1;
      while ($cc<$count) {
        $digits++;
        $cc*=$digits;
        if ($digits > 10) {
          die "too large\n";
        }
      }
      my @template=(reverse (1,0,2..9));
      my @o;
      my @lead=reverse splice @template,$digits;
      my $p=Algorithm::Permute->new(\@template);
      while (my @r=$p->next) {
        push @o,join('',@r);
      }
      @o=sort @o;
      splice @o,$count;
      my $l=join('',@lead);
      @o=map {"$l$_"} @o;
      return \@o;
    }
```


[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/jo-37/perl/ch-1.pl)

Jorg has created for us a coroutine generator to compute pandigital numbers off in another thread, delivering them on demand. Because why not? Who doesn't need their own pandigital number generator ticking away off in the background, just waiting patiently to hand over some pandigital goodness? The perfect gift for the mathematician who has everything!

The routine, `pdngen()`, with the assistance of a lieutenant, `forextperm()`, and a few helpers, generalizes the task to a pool of items, with a specified subset these required (that may well be all). This opens up options to generate in bases other than 10, which is both uncommon and extremely interesting. As a matter of fact, joking aside the whole idea is pretty amazing. So of course it gets its own asynchronous thread. It deserves it.

```perl
    use Math::Prime::Util 'fromdigits';
    use Coro::Generator;

    sub pdngen ($base) {
        # Get an ordered list of all possible "digits" (which are actually
        # integers for bases larger than 10) and a corresponding hash.
        my @digits = (0 .. $base - 1);
        my $req = hash @digits;

        generator {
            # Two nested loops to ensure ascending order and non-zero
            # leading digits:
            # An infinite loop over all possible lengths.
            for (my $len = @digits;; $len++) {
                # A loop over non-zero leading digits.
                for my $f (@digits[1 .. $#digits]) {
                    # Find all numbers having the current leading digit, not
                    # requiring it in the remainder and having one digit
                    # less than the current length.
                    forextperm {
                        say "@_ (", scalar @digits, ')' if $verbose;
                        yield fromdigits \@_, @digits;
                    } @digits, remove($req, $f), $len - 1, [$f];
                }
            }
        }
    }

    sub forextperm :prototype(&\@$$;$) ($code, $items, $req, $len, $head=[]) {
        die "too many required items" if $len < keys %$req;
        # If the remaining length exceeds the number of required items, any
        # item may be placed at the current position.
        my $any = $len > keys %$req;
        # Loop over all possible items at the current position.
        for my $item (grep {$any or exists $req->{$_}} @$items) {
            if ($len == 1) {
                # Call CODE for complete tuples.
                $code->(@$head, $item);
            } else {
                # Recurse into self with the adjusted set of required items,
                # a decremented length and the current item appended to the
                # head.  Need to circumvent the prototype to be able to pass
                # the code ref.
                &forextperm($code, $items, remove($req, $item),
                    $len - 1, [@$head, $item]);
            }
        }
    }

```


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/ulrich-rieke/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/ulrich-rieke/cpp/ch-1.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/ulrich-rieke/haskell/ch-1.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/ulrich-rieke/raku/ch-1.raku)

After deducing the construction of the smallest pandigital number, Ulrich gives us a variant method for counting up in single increments, in this case shrouded in the security of the `Math::BigInt` pragma. Do we still consider it a pragma if we directly import the module the pragma wraps? I don't think I've ever considered this question. But no matter, Ulrich's submission is a good demonstration of the hoops available to jump through should one wish and desire it. Of note there is also the `use integer` option. Further exploration will be left as an exercise to the reader.

```perl
    sub isPandigital {
      my $number = shift ;
      my %digitCount ;
      my $numstring = $number->bstr( ) ;
      for my $digit ( split ( // , $numstring ) ) {
          $digitCount{ $digit }++ ;
      }
      return ( (scalar ( keys %digitCount )) == 10 ) ;
    }

    my @panDigitals ;
    my $start = Math::BigInt->new( "1023456789" ) ;
    my $one = Math::BigInt->new( "1" ) ;
    my $current = $start->copy( ) ;
    push( @panDigitals , $start ) ;
    while ( (scalar @panDigitals) != 5 ) {
      $current = $current->badd( $one ) ;
      if ( isPandigital( $current ) ) {
          push ( @panDigitals , $current ) ;
      }
    }
    say join( ", " , map { $_->bstr( ) } @panDigitals ) ;
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/dave-jacoby/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/dave-jacoby/node/ch-1.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/dave-jacoby/python/ch-1.py)


&nbsp;&nbsp;**blog writeup:**
[There Are Wrong Ways To Skin A Cat: The Weekly Challenge #134 | Committed to Memory](https://jacoby.github.io/2021/10/11/there-are-wrong-ways-to-skin-a-cat-the-weekly-challenge-134.html)

Dave presents us with no less than three solutions to the problem. In `pandigital_3()` he counts upward from the first value using brute force. In `pandigital_1()` he permutes the list (0,2,3,4,5,6,7,8,9) and appends the joined result to 1 to produce his values. This works but apparently `Algorithm::Permute`, built for speed, does not use Algorithm L, as the results are not returned in lexicographic order. "Probably Heap's" I'd say, if I were a guessing man. In any case the resulting list requires a sort step, making this approach unwieldy.

He also provides a "just right" middle way, in `pandigital-2()`, which, starting from the given digit 1, recursively fits the next-lowest number to the end of the sequence. Given a chance, this process would generate all 9!/(9-9!) values, but as the numbers are returned in lexicographic order we can bail out after globally gathering the 5 requested values.

```perl
    sub pandigital_2 {
        my $output = [];
        my $state  = [1];
        _pandigital_2( $output, $state );
        my @output = $output->@*;
        return @output[ 0 .. 4 ];
    }

    sub _pandigital_2 ( $output, $state ) {
        my %state  = map  { $_ => 1 } $state->@*;
        my @digits = grep { !$state{$_} } 0 .. 9;
        if ( scalar $output->@* > 5 ) { return }
        if ( scalar $state->@* == 10 ) {
            my $pandigit = join '', $state->@*;
            push $output->@*, $pandigit;
            return;
        }
        for my $i (@digits) {
            my $newstate->@* = $state->@*;
            push $newstate->@*, $i;
            _pandigital_2( $output, $newstate );
        }
        return;
    }
```

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/jaldhar-h-vyas/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/jaldhar-h-vyas/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 134](https://www.braincells.com/perl/2021/10/perl_weekly_challenge_week_134.html)

Jaldhar makes an excellent analytic breakdown of the problem, determining that to produce 10 values, his chosen target, he needs only to permite the last 4 positions of the number 1023456789, or 6, 7, 8 and 9. This will produce 24 values — more than enough. He then gives us an ordered permutation routine to do the rearrangements, joining the results to create the numbers.

```perl

    sub permute (&@) {
        my $code = shift;
        my @idx = 0..$#_;
        while ( $code->(@_[@idx]) ) {
            my $p = $#idx;
            --$p while $idx[$p-1] > $idx[$p];
            my $q = $p or return;
            push @idx, reverse splice @idx, $p;
            ++$q while $idx[$p-1] > $idx[$q];
            @idx[$p-1,$q]=@idx[$q,$p-1];
        }
    }

    my $prefix = '102345';

    my @permutations;
    permute { push @permutations, \@_; } qw/ 6 7 8 9 /;
    say join q{ }, sort { $a <=> $b }
         (map { "$prefix$_" } map {join q{}, @{$_}; } @permutations)[0 .. 9];

```



[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/james-smith/perl/ch-1.pl)

James makes an interesting decision to start with the largest permutation of 10 digits that starts with 0: (0,9,8,7,6,5,4,3,2,1). He them provides us with what I believe is the most compact implementation of Algorithm L we have seen today, which delivers us preordered lexicographic permutations, using array slices. Array slices are, as we've said, always cool.

From Knuth, paraphrased:
1.  **Visit**  — Take the given arrangement
2.  **Find j**  — Find the largest index j such that a[j] < a[j + 1]. If no such index
exists, terminate the algorithm and we are done
3.  **Increase a[j]** — Find the largest index k greater than j such that a[j] < a[k],    then swap the values of a[j] and a[k].
4.  **Reverse a[j+1]..a[n]** — Reverse the subsequence starting at a[j + 1]
through the end of the permutation, a[n]. Do nothing if j+1 >= n.
Return to step 1.


```perl
    my @s = reverse 1..9,0; ## Cheat we start with the last perumation
                            ## starting with 0 - 0987654321
                            ## Saves us looping through the first
                            ## combinations checking for number starting
                            ## with non-zero (362880 combinations)
    my $count = @ARGV ? $ARGV[0] : 5;

    sub next_perm {
      my( $i, $j );

      ## Find largest index for which Si+1 > Si
      ( $s[$_] < $s[$_+1] ) && ( $i = $_ ) foreach 0 .. @s-2;    ## Find i

      return unless defined $i; ## Got to the end of the list of permutations

      ## Find latest index for which Sj > Si for j>i
      ( $s[$i] < $s[$_]   ) && ( $j = $_ ) foreach $i+1 .. @s-1; ## Find j

      ## Flip ith & jth elements..., then all numbers greater than i..
      @s[ $i, $j       ] = @s[ $j, $i               ];
      @s[ $i+1 .. @s-1 ] = @s[ reverse $i+1 .. @s-1 ];

      return 1; ## Return true to say can continue...
    }

    say @s while next_perm && $count--;
```


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/athanasius/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/athanasius/raku/ch-1.raku)

The monk Athanasius, always one for the deep questions, begins with a contemplative sojourn into the ramifications of considering leading 0s, and how that might apply to the pandigital world. They ultimately decide to accomodate both schools of thought, separated by a flag, `--zeroless`, signifying the leading zero is always present everywhere at every time and so in its omnipresent state can therefore always be assumed.

I'm not sure how I feel about this metaphysically but I find the inclusive arrangement a nice way to sidestep the larger debate. It produces diferent values of course. I'll also note no one else pursued this line of thought. I suppose that's why we have monks, though, isn't it?

To obtain the values, `Algorithm::Loops` is employed for its function `NextPermuteNum`. The doubled interior braces and the outer LOOP labeled block are both unusual artifacts from using the `do BLOCK while EXPR` form to pull from the `NextPermuteNum` iterator. I encourage everyone to go now and read the linked section on using loop-control statements within statement modifier blocks. Arcane, yes, but important.

```perl
    MAIN:
    {
        my $zeroless = parse_command_line();

        printf 'The first %d pandigital numbers in base 10 containing the ' .
               "digits %d-9%s:\n\n", $TARGET,
                                     $zeroless ? (1, ' (zeroless)') : (0, '');

        my $count  = 0;
        my @digits = $zeroless ? 1 .. 9 : 0 .. 9;

        # For an explanation of the arcane syntax below, see:
        #     https://perldoc.perl.org/perlsyn#Statement-Modifiers

        LOOP:
        {
            do
            {{
                next if $digits[ 0 ] == 0;

                printf "    %s\n", join '', @digits;

                last LOOP if ++$count >= $TARGET;

            }} while NextPermuteNum( @digits );
        }
    }
```




[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/paulo-custodio/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/paulo-custodio/python/ch-1.py)

Finally Paulo presents us with an extremely compact technique using `Math::Combinatorics`. All of the processing is done in the first line, where the list of digits from 0 to 9 is first permuted into all positions and then filtered to remove those starting with a leading 0. The digit-lists are then joined to form a number, and the numbers sorted.

In the second line the first five of these numbers are selected from the output list, by splicing away everything following.

```perl
    use Modern::Perl;
    use Math::Combinatorics;

    my @A050278 = sort {$a<=>$b} map {0+join('', @$_)} grep {$_->[0]!=0} permute(0..9);
    splice(@A050278, 5, $#A050278);
    say join("\n", @A050278);
```


## Blogs and Additional Submissions in Guest Languages for Task 1:


[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/adam-russell/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Cxx](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/adam-russell/cxx/ch-1.cxx), [Nuweb](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/adam-russell/nuweb/ch-1.w), [Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/adam-russell/prolog/ch-1.p)


&nbsp;&nbsp;**blog writeup:**
[A Couple of Brute Force Computations — Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2021/10/17/perl)<br>
[A Couple of Brute Force Computations — Prolog — RabbitFarm ](http://www.rabbitfarm.com/cgi-bin/blosxom/2021/10/17/prolog)


[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/arne-sommer/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/arne-sommer/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Distinctly Pandigital with Raku and Perl](https://raku-musings.com/distinctly-pandigital.html)


[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/cheok-yin-fung/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/cheok-yin-fung/julia/ch-1.jl)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/laurent-rosenfeld/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 134: Pandigital Numbers and Distinct Term Count |aurent_r](http://blogs.perl.org/users/laurent_r/2021/10/perl-weekly-challenge-134-pandigital-numbers-and-distinct-term-count.html)


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/wlmb/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 134 – W. Luis Mochán](https://wlmb.github.io/2021/10/11/PWC134/)






------------------------------------------

---

# ---

# ---

# TASK 2 {#PWC134TASK2}

# Distinct Terms Count
*Submitted by: Mohammad S Anwar*

You are given 2 positive numbers, $m and $n.

Write a script to generate multiplcation table and display count of distinct terms.

**Example 1**
```
    Input: $m = 3, $n = 3
    Output:

      x | 1 2 3
      --+------
      1 | 1 2 3
      2 | 2 4 6
      3 | 3 6 9

    Distinct Terms: 1, 2, 3, 4, 6, 9
    Count: 6
```

**Example 2**
```
    Input: $m = 3, $n = 5
    Output:

      x | 1  2  3  4  5
      --+--------------
      1 | 1  2  3  4  5
      2 | 2  4  6  8 10
      3 | 3  6  9 12 15

    Distinct Terms: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15
    Count: 11
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/abigail/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/adam-russell/perl/ch-2.pl),
[**Andrezgz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/andrezgz/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/arne-sommer/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/athanasius/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/cheok-yin-fung/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/jo-37/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/laurent-rosenfeld/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/lubos-kolouch/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/mattneleigh/perl/ch-2.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/mohammad-anwar/perl/ch-2.pl),
[**Olivier Delouya**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/olivier-delouya/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/paulo-custodio/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/pete-houston/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/peter-campbell-smith/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/sgreen/perl/ch-2.pl),
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/steven-wilson/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/wlmb/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/wanderdoc/perl/ch-2.pl)


There were 26 submissions for the second task this past week. It's an unusual type of request we've been given with the challenge, composed of three parts. Apparently we are asked to, given the maximum values for a pair of axes, construct a table of multiplication values. Ok so far. Then, as many of the values can be arrived at in different ways —  depending on their root factors — we are to present a set of all unique values found in our table. The value 8 can be arrived at as any of (8 × 1), (4 × 2), (2 × 4) or (1 × 8); in light of this, we only wish for the unique value 8 to be reported once. And in a final bit of data for further analysis, we are asked to report a count of the number of unique values encountered.

This unusual multi-part request was apparently found confusing by some of the members, perhaps because of its lack of obvious utility, or at least a single obviously useful conclusion. Others seem to have said "ok" and plugged right in without conflict, providing the three parts, generally following the examples given fairly closely. The process seems from a distance to model how one might pursue a bit of number theory using pencil-and-paper, exploring the value-set of numbers produced by the multiplication operation, a sort of reverse [Sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes). Except, of course, that the primes will be included in the rows and columns multiplied by 1. Perhaps we could next perform a count, or construct a histogram to expand on the frequency data. With Number Theory the possibilities for fiddling about are effectively endless.

So sometimes ours is not to reason why, ours is but to do or... try? Dying seems a bit much to ask, under the circumstances. So we got 26 tries, no deaths that I'm aware of, and I'm happy with that.

## type 1
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/arne-sommer/perl/ch-2.pl),
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/steven-wilson/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/adam-russell/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/mattneleigh/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/wlmb/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/e-choroba/perl/ch-2.pl),
[**Andrezgz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/andrezgz/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/duncan-c-white/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/peter-campbell-smith/perl/ch-2.pl),
[**Olivier Delouya**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/olivier-delouya/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/cheok-yin-fung/perl/ch-2.pl), and
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/pete-houston/perl/ch-2.pl)


The most complex part of the task was quickly identified to be the printing of the multiplication table itself. Although there was no directives on how carefully this should be done (beyond assumedly to provide the correct values), most people came up with schemes to make the scaling of the columns a function of the largest product to be found within it, to provide a nice consistant layout. Usually when the products were calculated they were immediately saved out elsewhere to be processed for finding the unique values.



[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/arne-sommer/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/arne-sommer/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Distinctly Pandigital with Raku and Perl](https://raku-musings.com/distinctly-pandigital.html)

Let's start with Arne.

Arne has taken the stated request at face value, and chosen to deliver a nicely-formatted table of values, followed by the analytical breakdown. No fuss, no muss.

Of note here we have another mysterious occurrence of the number 42. Any [connection to the archetypical Smith Number](https://theweeklychallenge.org/blog/review-challenge-133/#PWC133TASK2) remains unproven. That number does seem to show up a lot.

For some reason.

```
    $ ./distinct-terms-count-perl 10 10
     x |  1   2   3   4   5   6   7   8   9  10
    ---+----------------------------------------
     1 |  1   2   3   4   5   6   7   8   9  10
     2 |  2   4   6   8  10  12  14  16  18  20
     3 |  3   6   9  12  15  18  21  24  27  30
     4 |  4   8  12  16  20  24  28  32  36  40
     5 |  5  10  15  20  25  30  35  40  45  50
     6 |  6  12  18  24  30  36  42  48  54  60
     7 |  7  14  21  28  35  42  49  56  63  70
     8 |  8  16  24  32  40  48  56  64  72  80
     9 |  9  18  27  36  45  54  63  72  81  90
    10 | 10  20  30  40  50  60  70  80  90 100

    Distinct Terms: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, \
      24, 25, 27, 28, 30, 32, 35, 36, 40, 42, 45, 48, 49, 50, 54, 56, 60, 63, \
      64, 70, 72, 80, 81, 90, 100
    Count: 42
```

The processing is naturally broken up into discrete stages: first the data is computed, in this case an array of arrays, with each row array a set of mapped products. This data structure contains what we need to pretty-print our table, which is nicely scaled to the character width of the maximum value. From there Arne draws on `List::Util` for `uniq()` on the flattened dataset, and finally uses the scaler length of the resultant array for his final count of unique terms.

```perl
    for my $row (1 .. $m)
    {
      my @row = map { $_ * $row } 1.. $n;
      push(@values, \@row);
    }

    my $width   = length($m * $n);
    my $r_width = length($m);

    say sprintf('%' . ( $width - 1 ) . "s", "x"),
        " |",
        join(" ", map { sprintf('%' . $width . "d", $_) } (1..$n));
    say "-" x $r_width, "-+", "-" x ($n * ($width +1) );

    my $i = 0;
    my @all;

    for my $row (@values)
    {
      my @row = @$row;
      push(@all, @row);
      say sprintf('%' . $r_width . "d", ++$i) ,
          " |",
          join(" ", map { sprintf('%' . $width . "d", $_) } @row);
    }

    my @distinct = sort { $a <=> $b } uniq(@all);
```

[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/steven-wilson/perl/ch-2.pl)

Steven brings us a module that I was previously unaware of, `Text::ASCIITable`. It does pretty much what you might think it would: you can initiate a set of column headers and add rows of data as arrays, and it will format a nice little table for you. How convenient — the module addresses any scaling issues for you.

With that taken care of, what remains is to assemble the rows of products to be displayed. Again we construct an intermediate array of product arrays, but in this case as values are generated they are also hashed as keys in `%distinct_terms`. When required, we can sort the keys of this hash to obtain a list of unique values. The count of this list, of course, is the scalar of this array.

```perl
    my $t = Text::ASCIITable->new();

    for my $row ( 1 .. $m ) {
        my @multiples = map { $row * $_ } ( 1 .. $n );
        map { $distict_terms{$_} = 1 } @multiples;
        $rows[$row] = \@multiples;
    }
    my @distict_terms = sort { $a <=> $b } keys %distict_terms;

    printf( "Input: \$m =  %d, \$n = %d\n", $m, $n );
    say "Output:\n";
    $t->setCols( 'x', 1 .. $n );
    $t->setOptions( { hide_FirstLine => 1, hide_LastLine => 1 } );
    for my $row ( 1 .. $m ) {
        $t->addRow( $row, @{ $rows[$row] } );
    }
    print $t;
    say "\nDistinct Terms: ", join ", ", @distict_terms;
    say "Count: ", scalar @distict_terms;
```

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/adam-russell/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Cxx](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/adam-russell/cxx/ch-2.cxx), [Nuweb](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/adam-russell/nuweb/ch-2.w), [Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/adam-russell/prolog/ch-2.p)


&nbsp;&nbsp;**blog writeup:**
[A Couple of Brute Force Computations — Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2021/10/17/perl)<br>
[A Couple of Brute Force Computations — Prolog — RabbitFarm ](http://www.rabbitfarm.com/cgi-bin/blosxom/2021/10/17/prolog)

Adam eschews the need to create an intermediate array to precompute the data, rolling the processing into a single loop.

This makes everything a bit more compact.

```perl
    sub compute_print {
        my ( $m, $n ) = @_;
        my $distinct = {};
        print " x | " . join( " ", ( 1 .. $n ) ) . "\n";
        print "---+-" . "-" x ( $n * 2 - 1 ) . "\n";
        for my $i ( 1 .. $m ) {
            print " $i | " . join( " ", map { $i * $_ } ( 1 .. $n ) ) . "\n";
            for my $j ( 1 .. $n ) {
                $distinct->{ $i * $j } = undef;
            }
        }
        return $distinct;
    }
    MAIN: {
        my $distinct = compute_print( 3, 5 );
        print "Distinct Terms: "
          . join( ", ", sort { $a <=> $b } keys %{$distinct} ) . "\n";
        print "Count: " . keys( %{$distinct} ) . "\n";
        print "\n\n";
    }
```

[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/mattneleigh/perl/ch-2.pl)

Matthew's submission is quite lengthy and elaborate, and to his credit is well commented, walking us through the process in a detailed and thorough fashion. Much of the process is, as to be expected, taken up by careful formatting of the output.

The actual code itself isn't nearly as long as it appears, as it is quite stretched out by the commentary, and written in a vertical, airy style.

Separate widths are obtained for the vertical row of factors down the left face of the table and the width of the largest element, in the lower right corner. Scaled `sprintf` statements produce an immaculately crafted output. Good stuff.

Here's a sample. The `$max_factor_width` formats the leftmost column against a vertical separator bar, and a second format using `$max_term_width` is used for the product data.

```perl
    sub format_table_row{
        my $row = shift();
        my $max_factor_width = shift();
        my $max_term_width = shift();

        return(
            sprintf("%".$max_factor_width."s ", $row->[0])
            .
            "|"
            .
            join(
                "",
                map(
                    { sprintf(" %".$max_term_width."s", $_) }
                    @{$row}[1 .. $#$row]
                )
            )
        );

    }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/wlmb/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 134 – W. Luis Mochán](https://wlmb.github.io/2021/10/11/PWC134/)

The Perl Data Language extensions, it can reasonably be said, were built to process multidimensional data. A table, even a simple multiplication table, is of course multidimensional data, so why not bring in the PDL? The result is quite straightforward, the table can be produced in once command, the uniq values in another, and the count of those values in a third.

The output does not rigidly conform to that of the examples, but that was never a requirement. A table is produced, and analysed, which was what was requested.


```perl
    use PDL;
    use List::Util qw(uniqint);
    say "Usage: ./ch-2.pl N M" and exit unless @ARGV==2;
    my ($m, $n)=@ARGV;
    my $table=(zeroes($n,$m)->ndcoords+1)->prodover;
    my $uniq=$table->uniq;
    my $count=$uniq->nelem;
    say "Input: m=$m, n=$n";
    say "Output: $table"; # Could have done a better format
    say "Distinct terms: $uniq\nCount: $count;"
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/e-choroba/perl/ch-2.pl)

Choroba brings us a routine, `distinct_term_counts()` that takes care of everything requested. Ok, almost everything, as it in turn does employ two helpers, one to construct and draw the table header, and another to populate the table, an array of arrays. The data is methodically printed out, and inside that loop a hash with the products as keys is populated. The keys of this hash then become the list of unique values found within the table.

Although elsewhere we saw a lot of logarithms to find the length of the largest product value, to scale the table columns, in Perl, of course, it's trivial to look at a number as a string and check its length. That's kind of its superpower, really.


```perl
    sub distinct_term_counts {
        my ($rows, $cols) = @_;
        my $table = populate($rows, $cols);
        my $width = length $table->[-1][-1];
        my $header_width = length $rows;

        header_line($cols, $width, $header_width);

        my %distinct;
        for my $x (0 .. $rows - 1) {
            printf "%${header_width}d |", $x + 1;
            print join ' ', map {
                undef $distinct{ $table->[$x][$_] };
                sprintf "%${width}d", $table->[$x][$_];
            } 0 .. $cols - 1;
            print "\n";
        }
        say 'Distinct terms: ', join ', ', sort { $a <=> $b } keys %distinct;
        say 'Count: ', scalar keys %distinct;
    }
```

[**Andrezgz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/andrezgz/perl/ch-2.pl)

Andrez presents us with remarkably compact version of the steps, producing a table that handles up to two-digit products quite well. As a demonstration is ticks the boxes, accomplishing the goals without fuss.

```perl
    my $m = shift // 5;
    my $n = shift // 4;

    say sprintf ' x |' . '%3d' x $n, 1..$n;
    say         '---|' . '---' x $n;
    my %unique;
    for my $row (1..$m) {
        my @mult = map { $row * $_ } 1..$n;
        @unique{@mult} = (undef) x @mult;
        say sprintf '%2d |' . '%3d' x @mult, $row, @mult;
    }

    say 'Distinct Terms: ' . join ',', sort {$a <=> $b} keys %unique;
    say 'Count: ' . scalar keys %unique;

```


[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/duncan-c-white/perl/ch-2.pl)

Duncan's notes on the challenge sum up my own assessment quite succinctly:

>The tricky bit is the pretty layout of the multiplication table, especially
getting the correct column widths...

So given this insight how did he proceed? In an unusual procedural variation he first gathers his products as keys in a hash, satisfying the unique values request, before returning to the task of building his multiplication table. The number of keys provides a count.

Because the data function is a simple multiplication it isn't hard to roll the calculations of the products into the same loop as the table construction, however I found most submissions didn't do this. It's a compartmentalization thing, presumably, the resistance to blending the business logic and the view, no matter how easy to accomplish. Nearly everyone first precomputed the values into some sort of data structure, like an multidimensional array or arrays, the obvious fit. Here Duncan bucks the trend, and just gets the jobs done all at once.

Duncan uses `Function::Parameters` to provide his subroutine signatures, which explains the somewhat cryptic `fun` keyword. He also uses base-10 logarithms to compute the number of digits in the products, rather than looking at string length, which is interesting. Lately with all these binary number processes I've started to, but I feel I haven't been reaching for logs as much as I could. Super handy, really, to have around.

```perl
    use Function::Parameters;

    fun form_table( $m, $n )
    {
        my $width = 1 + int( log($n*$m)/log(10) );
        my $firstw = 1 + int(log($m)/log(10));

        my @result;

        my $row = sprintf("%${firstw}s", "x") . " | ";
        $row .= sprintf("%${firstw}d ", 1 );
        $row .= sprintf("%${width}d ", $_ ) for 2..$n;
        push @result, $row;

        $row = '-'x($firstw+1)."+".('-'x($firstw+$width*($n-1)+$n));
        push @result, $row;

        for( my $i=1; $i<=$m; $i++ )
        {
        	$row = sprintf("%${firstw}d", $i). " | ";
        	$row .= sprintf("%${firstw}d ", $i );
        	$row .= sprintf("%${width}d ", $i*$_ ) for 2..$n;
        	push @result, $row;
        }

        return join("\n", @result);
    }
```

[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/peter-campbell-smith/perl/ch-2.pl)

More logarithms from Peter, who gives us a nicely scaled table to look at. The technique is representative of the most common approach we've seen to the problem, and so let's take the time to break it down. Peter gives us comments, so he gets picked.

The column width selected needs to contain the largest product value, plus an extra bounding space. The last value in the table, *m* times *n*, will be the largest value. The base-10 logarithm of this value will give us its positional width (in base-10).

Perl does not have a "log<sub>10</sub>" operator out-of-the-box, but we can use an equation, detailed in the reference page for the natural logarithm operator [`log`](https://perldoc.perl.org/functions/log): dividing the natural log of the value we want by the natural log of the base we want to get the log in whatever base is required.

Once we know the column width we can use that in a `printf` format, like ` %${col_width}s""`. First a header row is printed, followed by a row of dashes. A plus sign appropriately placed is a nice touch to intersect with the vertical pipes that separate the crossed factors going down.

For each row, we need to first print the row multiplier factor, followed by a vertical pipe. Then the terms are printed, using `printf` with our format, across the row.


```perl
    # calculate column width = width of largest term + 1
    $col_width = int(log($m * $n)/log(10)) + 1;

    # print top row and underline
    print sprintf(" %${col_width}s", 'x') . ' |';
    for $j (1 .. $n) {
        print sprintf(" %${col_width}d", $j);
    }
    print qq[\n];
    print '-' x ($col_width + 2) . '+' . '-' x (($col_width + 1) * $n) . "\n";

    # print other rows
    for $j (1 .. $m) {
        print sprintf(" %${col_width}d", $j) . ' |';
        for $k (1 .. $n) {
        	$term = $j * $k;
        	print sprintf(" %${col_width}d", $term);
        	$terms{sprintf('%08d', $term)} = 1;   # pad to 8 digits to make them sort correctly
        }
        print qq[\n];
    }

    # print unique terms
    for $term (sort keys %terms) {
        $line .= ($term + 0) . ', ';
        $count ++;
    }

    print qq[\nDistinct terms: ] . substr($line, 0, -2) . qq[\nCount: $count\n\n];
```

[**Olivier Delouya**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/olivier-delouya/perl/ch-2.pl)

When I think of Olivier, I think of dense, compact answers, often in a single line. Today's submission seems to keep the density, although thankfully he has broken it up with some vertical air. He gets right to it, constructing his table right away, both constructing both his his output values and his formatting in the same pair of control loops. An additional loop is brought in after the table to print the list of distinct terms, and the count is the scalar value of that list.

```perl
    my ($m, $n)= @ARGV;
    my $w = length($m*$n)+1;
    print 'x | 1';
    printf ("% ${w}d", $_) foreach (2..$n);
    print "\n";
    print '--+--';
    print ('-'x$w) foreach (2..$n);
    print "\n";
    my %h;
    foreach my $i (1..$m)
        {
        $h{$i} = undef;
        print "$i | $i";
        foreach my $j (2..$n)
            {
            $h{$i*$j} = undef;
            printf "% ${w}d", $i*$j;
            }
        print "\n";
        }
    print 'Distinct Terms: ';
    foreach (sort { $a <=> $b }  keys %h)
        {
        print $_, ', ';
        }
    print "\b\b \nCount: ", scalar(keys %h);
```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/cheok-yin-fung/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/cheok-yin-fung/node/ch-2.js)

In a unique take on the requirements for pretty-printing a multiplication table, CY introduces a parameter of the width of the output lines in the terminal; the application balks if the table rows would extend beyond this limit. As wrapping lines would produce garbage anyway, this thoughtful step saves time and aggravation in the end, allowing the user instead a few moments to reconsider their life choices. User interfaces cut straight to the heart of what it means to be human, and many programmers forget that.

After this check CY constructs her table and products on-the-fly in two nested loops, handing in her column widths to the formatting using a wildcard splat: `"%*d"`. I really like this as it removes the messiness of the string variable interpolation from the format, which is generally cluttered and cryptic enough as it is. This is a good way to avoid that messiness, making tuning the displayed output that much easier.

```perl
    my $ref_prod = length $m*$n;
    my $ref_m = length $m;
    my $ref_long = $ref_m + 2 + $n * ( 1 + $ref_prod );
    die "The value of \$m*\$n is too large for linewidth $lw\n"
        if $ref_long > $lw;

    print " " x ($ref_m - 1), "x", " |";
    printf "%*d", $ref_prod+1, $_ for (1..$n);
    print "\n";
    print "-" x ($ref_m+1), "+", "-" x ($ref_long-$ref_m-2);
    print "\n";
    for my $i (1..$m) {
        printf "%*d |", $ref_m, $i;
        for my $j (1..$n) {
            printf "%*d", 1+$ref_prod, $i*$j;
            $hash{$i*$j} = 1;
        }
        print "\n";
    }
```

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/pete-houston/perl/ch-2.pl)

Finally we have Pete Houston, who addresses the format clutter problem in a different way that's close to my heart. To wit: he assigns a pair of format variables before any output is performed and uses those. To me, this is the way.

After the headers are constructed, individual rows of values are built in a loop using a `map` statement and held in an array, and the values are bulk assigned to hash keys using a hash slice *assignment*. Very nice. Pay attention now, that would have been easy to miss.

The row data is printed to a string in a loop according to the format we made earlier, and then that string is them printed with its factor and vertical pipe preface. This `printf` step uses a different format, based on the width of the largest vertical factor, rather than the largest product.

```perl
    my ($r, $c) = @ARGV;

    my $maxlenp = length ($r * $c) + 1;
    my $maxlenr = length ($r);

    my $ifmt = "%${maxlenp}i";
    my $rfmt = "%${maxlenr}i";

    my $row;
    $row .= sprintf $ifmt, $_ for 1 .. $c;
    printf "%${maxlenr}s | %s\n", 'x', $row;

    print (('-' x ${maxlenr}) . '-+-' . ('-' x ($maxlenp * $c)) . "\n");

    my %seen;
    for my $i (1 .. $r) {
        my @rval = map { $_ *= $i } 1 .. $c;
        @seen{@rval} = (1) x $r;
        $row = '';
        $row .= sprintf $ifmt, $_ for @rval;
        printf "$rfmt | %s\n", $i, $row;
    }
    print "\nDistinct Terms: " . join (', ', sort { $a <=> $b } keys %seen) . "\n";
    print "Count: " . keys (%seen) . "\n";
```



## Blogs and Additional Submissions in Guest Languages for Task 2:


[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/abigail/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/abigail/awk/ch-2.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/abigail/bash/ch-2.sh), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/abigail/bc/ch-2.bc), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/abigail/c/ch-2.c), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/abigail/go/ch-2.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/abigail/java/ch-2.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/abigail/lua/ch-2.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/abigail/node/ch-2.js), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/abigail/pascal/ch-2.p), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/abigail/python/ch-2.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/abigail/r/ch-2.r), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/abigail/ruby/ch-2.rb), [Scheme](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/abigail/scheme/ch-2.scm), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/abigail/tcl/ch-2.tcl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 134: Distinct Terms Count](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-134-2.html)


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/athanasius/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/athanasius/raku/ch-2.raku)


[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/dave-jacoby/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[There Are Wrong Ways To Skin A Cat: The Weekly Challenge #134 | Committed to Memory](https://jacoby.github.io/2021/10/11/there-are-wrong-ways-to-skin-a-cat-the-weekly-challenge-134.html)


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC134 - Distinct Terms Count - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/10/14/pwc134-distinct-terms-count/)


[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/jaldhar-h-vyas/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/jaldhar-h-vyas/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 134](https://www.braincells.com/perl/2021/10/perl_weekly_challenge_week_134.html)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/laurent-rosenfeld/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/laurent-rosenfeld/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 134: Pandigital Numbers and Distinct Term Count](http://blogs.perl.org/users/laurent_r/2021/10/perl-weekly-challenge-134-pandigital-numbers-and-distinct-term-count.html)


[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/paulo-custodio/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/paulo-custodio/python/ch-2.py)


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/roger-bell-west/postscript/ch-2.ps), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-134/roger-bell-west/raku/ch-2.p6)







---

# BLOGS {#PWC134BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, I somehow continue to maintain my bearings. Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC134BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *READ* these *BLOG* *LINKS*:

**( *don't think, trust your training, you're in the zone, just do it ...* )**


**Abigail**

 * [Perl Weekly Challenge 134: Pandigital Numbers](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-134-1.html) ( *Perl* )
 * [Perl Weekly Challenge 134: Distinct Terms Count](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-134-2.html) ( *Perl* )

**Adam Russell**

 * [A Couple of Brute Force Computations — Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2021/10/17/perl) ( *Perl* )
 * [A Couple of Brute Force Computations — Prolog — RabbitFarm ](http://www.rabbitfarm.com/cgi-bin/blosxom/2021/10/17/prolog) ( *Prolog* )

**Andinus**

 * [Challenge 134](https://andinus.unfla.me/pwc/challenge-134/) ( *Raku* )

**Arne Sommer**

 * [Distinctly Pandigital with Raku and Perl](https://raku-musings.com/distinctly-pandigital.html) ( *Perl & Raku* )

**Dave Jacoby**

 * [There Are Wrong Ways To Skin A Cat: The Weekly Challenge #134 | Committed to Memory](https://jacoby.github.io/2021/10/11/there-are-wrong-ways-to-skin-a-cat-the-weekly-challenge-134.html) ( *Perl* )

**Flavio Poletti**

 * [PWC134 - Pandigital Numbers - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/10/13/pwc134-pandigital-numbers/) ( *Perl & Raku* )
 * [PWC134 - Distinct Terms Count - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/10/14/pwc134-distinct-terms-count/) ( *Perl & Raku* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 134](https://www.braincells.com/perl/2021/10/perl_weekly_challenge_week_134.html) ( *Perl & Raku* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 134: Pandigital Numbers and Distinct Term Count](http://blogs.perl.org/users/laurent_r/2021/10/perl-weekly-challenge-134-pandigital-numbers-and-distinct-term-count.html) ( *Perl & Raku* )

**Roger Bell_West**

 * [Perl Weekly Challenge 134: Pandigital Multiplication](https://blog.firedrake.org/archive/2021/10/Perl_Weekly_Challenge_134__Pandigital_Multiplication.html)

**W. Luis Mochan**

 * [Perl Weekly Challenge 134 – W. Luis Mochán](https://wlmb.github.io/2021/10/11/PWC134/) ( *Perl* )



