---
author:       Colin Crain
date:         2022-05-09T00:00:00
description:  "Colin Crain › Perl Weekly Review #159"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #159"
image:        images/blog/p5-review-challenge-159.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-158/).* )

Welcome to the Perl review pages for **Week 159** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

before we begin, you may wish to revisit either the pages for the [**original tasks**](/blog/perl-weekly-challenge-159/) or the summary [**recap**](/blog/recap-challenge-159/) of the challenge. But don't worry about it, the challenge text will be repeated and presented as we progress from task to task.

Oh, and one more thing before we get started:


### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please feel free to email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

<div align= center><strong>...So finally, without further ado...</strong></div>

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC159TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC159TASK2)   &nbsp;  &nbsp;  &nbsp;       •   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC159BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC159TASK1}

# Farey Sequence
*Submitted by: Mohammad S Anwar*

You are given a positive number, $n.

Write a script to compute Farey Sequence of the order $n.

**Example 1:**
```
        Input: $n = 5
        Output: 0/1, 1/5, 1/4, 1/3, 2/5, 1/2, 3/5, 2/3, 3/4, 4/5, 1/1
```

**Example 2:**
```
        Input: $n = 7
        Output: 0/1, 1/7, 1/6, 1/5, 1/4, 2/7, 1/3, 2/5, 3/7,
                1/2, 4/7, 3/5, 2/3, 5/7, 3/4, 4/5, 5/6, 6/7, 1/1
```


**Example 3:**
```
        Input: $n = 4
        Output: 0/1, 1/4, 1/3, 1/2, 2/3, 3/4, 1/1
```




## about the solutions
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/adam-russell/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/athanasius/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/colin-crain/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/polettix/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/jo-37/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/lubos-kolouch/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/mattneleigh/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/paulo-custodio/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/pete-houston/perl/ch-1.pl),
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/pokgopun/perl/ch-1.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/robert-dicicco/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/roger-bell-west/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/ulrich-rieke/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/wlmb/perl/ch-1.pl)

The [Farey sequence](https://en.wikipedia.org/wiki/Farey_sequence#Next_term) of a given order *n* is an ascending, ordered list of all subunary fractions, with denominators up to the value of the order, inclusive of unity and reduced to their lowest terms. That’s admittedly a mouthful, but what it means is that, for say the order 3 we produce the fractions (0/3, 1/3, 2/3, 3/3), a nice intuitively understandable sequence, and in addition to these we add the fractions (0/2, 1/2, 2/2) from order 2 and (0/1, 1/1) from order 1. Of course many of these fractions are equivalent and in those cases we will pick the smallest terms to make the final list. For the example of order 3 only 5 unique terms remain:

(0/1, 1/3, 1/2, 2/3, 1/1).

There were 20 submissions for the first task this past week.

## SUBMISSIONS, SPROUTING up like MUSHROOMS
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/e-choroba/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/jo-37/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/lubos-kolouch/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/laurent-rosenfeld/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/roger-bell-west/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/paulo-custodio/perl/ch-1.pl),
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/pokgopun/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/cheok-yin-fung/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/adam-russell/perl/ch-1.pl), and
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/colin-crain/perl/ch-1.pl)

There were two basic approches to calculating the sequence. We could either calculate all the values for all the fractions, filter the duplicates and sort the remaining, or alternately use what is known as the mediant property, which we will discuss, to insert values between fractions. Taking this further, we can even use this property to establish a recurrence relation, where a value followed by a known mediant is used to construct the second value that would in turn lead to the mediant. Neat, huh? Well it will make sense later. We'll look at both broad types of methods, each arriving at their result in a variety of ways.


[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/e-choroba/perl/ch-1.pl)

Ok, about that mediant:

One of the many interesting properties of the elements of the Farey sequence is that for any triple of successive elements, the central fraction will be the mediant between the two outer. Which is to say that it will be the reduced form of the sum of the numerators of the outer two over the sum of the denominators.

Take the triple component (2/7, 1/3, 2/5) from the second example to illustrate this. Summing the numerators of the outer two fractions we get 2 + 2 = 4, and for the denominators 7 + 5 = 12. This produces the fraction 4/12, which in turn is reduced to its lowest terms into 1/3, which we can see is indeed the central value.

Choroba starts with the endpoint pair of fractions, (0/1, 1/1), and for increasing denominators corresponding to the orders subdivides the list in waves, placing the mediant between two terms if the reduced denominator of the new term is less than or equal to the order being added. In this way one or more new pairs of values are added to the growing Farey sequence with each new denominator considered.

The `BigRat` rational number object model nicely reduces our values to the smallest terms without requiring to  be asked.

```perl
    use Math::BigRat;

    sub mediant ($p, $q, $depth) {
        my $m = Math::BigRat->new($p->numerator + $q->numerator)
              / ($p->denominator + $q->denominator);
        return $m->denominator <= $depth ? $m : undef
    }

    sub farey_sequence ($n) {
        my @farey = map 'Math::BigRat'->new($_), '0/1', '1/1';
        for my $depth (2 .. $n) {
            for (my $i = 0; $i < $#farey; ++$i) {
                if (my $m = mediant($farey[$i], $farey[1 + $i], $depth)) {
                    splice @farey, ++$i, 0, $m;
                }
            }
        }
        @farey[0, -1] = ('0/1', '1/1');
        return \@farey
    }
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/jo-37/perl/ch-1.pl)

By extending this technique and switching around the terms in the mediant we can calculate the next term following two previous, as the most recently calculated  will be the mediant between the term previous to it and the next, new term. In this way we can work across the sequence of a given order in a single pass, left to right.

```perl
    sub farey_sequence ($k) {

        gather {
            my ($n_p, $d_p, $n, $d) = (0, 1, 1, $k);
            take "$n_p/$d_p";
            take "$n/$d";
            while ($d > 1) {
                # Calculate the new numerator and denominator from the
                # previous values.
                my $f = int +($d_p + $k) / $d;
                ($n_p, $d_p, $n, $d) = ($n, $d, $f * $n - $n_p, $f * $d - $d_p);
                take "$n/$d";
            }
        };
    }
```

[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/lubos-kolouch/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/lubos-kolouch/python/ch-1.py)

Here's another implementation of the same algorithm from Lubos. We'll return to this technique in a little bit.

```perl
    sub farey_sequence {
        my $n = shift;

        # I just adapted the Python algorithm from the wiki """

        my ( $a, $b, $c, $d ) = ( 0, 1, 1, $n );

        my @solution;

        push @solution, "$a/$b";
        while ( $c <= $n ) {
            my $k = int( ( $n + $b ) / $d );
            my ( $a, $b, $c, $d ) = ( $c, $d, $k * $c - $a, $k * $d - $b );
            push @solution, "$a/$b";
        }

        return join( ", ", @solution );
    }
```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/laurent-rosenfeld/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 159: Farey Sequence and Möbius Number](http://blogs.perl.org/users/laurent_r/2022/04/perl-weekly-challenge-159-farey-sequence-and-mobius-number.html)

In an example of the first approach mentioned, Laurent finds all possible fractions that can be made,
collecting a list of numerator/denominator pairs as short anonymous arrays. He uses one variable to hold a denominator, which spans the range of 1 to the requested order, and another variable for the numerator, in the range 0 to the denominator currently being used.

To avoid duplicates a hash is built with the decimal versions of the fractions as keys. I know at least some of you will immediately have their minds go to floating-point errors, but at least within the ranges we're dealing with this is not a problem.

In a quick aside: Perl handles the situation quite gracefully. Sixteen digits and a decimal point are allocated to a stringified float, and beyond a certain range the view will switch to exponential notation, with a value, 15 digits of mantissa and an exponent. It may be possible for a collision to occur out in the hinterlands, but none of my obvious strategies testing could make this happen. And the urge to break things, well you know it can grow quite strong.


But back to Laurent, inserting into this lookup hash equivalent fractions will share the same key, and so we can in turn use this to filter newly-generated fractions to only new unique values, which are simultaneously added to the lookup and a common pool. When finished, a sort function that divides the numerator index by the denominator in each pair determines the output order.

It works well.

```perl
    sub farey {
        my $n = shift;
        my (@out, %seen);
        for my $den (1..$n) {
            for my $num (0..$den) {
                next if exists $seen{$num/$den};
                push @out, [$num, $den];
                $seen{$num/$den} = 1;
            }
        }
        return @out;
    }
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/roger-bell-west/javascript/ch-1.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/roger-bell-west/kotlin/ch-1.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/roger-bell-west/lua/ch-1.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 159: Farey and Moebius](https://blog.firedrake.org/archive/2022/04/The_Weekly_Challenge_159__Farey_and_Moebius.html)

Roger, on the other hand, does not trust the fickle nature of floats. This is understandable if he ever had to program a store, for instance, and needed assurance everything would add up perfectly at the end of the day. The PTSD is real, I assure you. With floats it's always hard to be really, really sure.

For whatever personal reasons, though (I won't pry, he'll open up when he's ready), he avoids the issue by calculating the lowest common multiple of all the denominators within the order, and uses that common value to rewrite all the fractions. A good, clean, wholesome plan (see what I did there?).

A chain of three functions: the GCD, the LCM and a third acting as a wrapper, provides the least common multiple of all denominators. A little bookkeeping is then required to iterate through a list of the common fractions for a given denominator and upscale them to the larger common multiple. The value of the upscaled numerator times the LCM value is used as a hash key to filter out duplicate values, which I find quite elegant. The hash does dual duty, though, holding as a value the numerator/denominator tuple that is later used to produce the output.

The output is these pairs. Stringifying the array by joining them up with a "/" would be easy enough if we wanted to see proper fractions, and this is good enough for me.

I do like the integer precision of this approach. Well done.

```perl
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

    sub lcmseries {
      my $s=shift;
      return reduce {lcm($a,$b)} @{$s};
    }

    sub farey {
      my $n=shift;
      my $l=lcmseries([2..$n]);
      my %d;
      foreach my $i (1..$n) {
        my $m=$l/$i;
        foreach my $j (0..$i) {
          my $k=$m*$j;
          unless (exists $d{$k}) {
            $d{$k}=[$j,$i];
          }
        }
      }
      return [map {$d{$_}} sort {$a <=> $b} keys %d];
    }
```

[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/paulo-custodio/perl/ch-1.pl)

Paulo's solution works on the idea that should a non-reduced fraction end up being generated, if we start the denominator sequence processing at 1 then by the time we get to the higher-multiple fraction we will have already added the reduced form in the earlier iteration. So what this means is later, if the numerator and the denominator aren't coprime we show it the door.

This approach, looping through the possible numerator and denominators and then only adding the coprime pairs, produces a tight loop structure without much fat. The result list still needs to be sorted, and an intermediate floating-point decimal value is used for the purpose. A little mapping stringifies the result list.

```perl
    sub farey_sequence {
        my($n) = @_;
        my @seq = ([0,1], [1,1]);   # first and last terms

        for my $i (1..$n) {
            for my $j ($i+1..$n) {
                if (gcd($i, $j)==1) {
                    push @seq, [$i,$j];
                }
            }
        }

        @seq = sort { $a->[0]/$a->[1] <=> $b->[0]/$b->[1] } @seq;
        @seq = map {$_->[0].'/'.$_->[1]} @seq;

        return @seq;
    }
```

[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/pokgopun/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/pokgopun/go/ch-1.go)

PokGoPun gives us two solutions: a preferred kind of bog-standard implementation of the algorithm found on the Wiki page, that we've seen several times already. No offense intended, seriously, as this elegant technique is quite effective and appropriate. But as I said we've seen it before.

On the other hand, they left in their commented-out first approach, which I've taken the liberty of selecting and bringing forward:

```perl
    foreach my $n (@n) {
        print "Input: \$n = $n\n";

        my @fs;
        if ($n > 1) {
            @fs = sort{$a->[0]/$a->[1] <=> $b->[0]/$b->[1]}
                  grep{    $_->[0] == 1
                        || ( (is_prime($_->[0]) || is_prime($_->[1]) )
                        && $_->[1] % $_->[0] != 0 ) }
                  combinations([1..$n], 2);
        }
        @fs = ([0,1], @fs, [1,1]);
        printf "Output: %s\n\n", join(", ", map{join "/", @$_} @fs );
    }
```

Here we create a collection of 2-combinations of the range from 1 to the order, then filter these to only those that have coprime values. Because combinations are unordered sets, by virtue of the algorithm used the pairings will come out in order matching the input — the first item is chosen before the second and we always get (6,7) and not (7,6), as these combinations are equivalent. Thus our fractions are always less than 1, and we generate them all at once. Cool.

A final sort by calculated decimal value delivers our pairs in order, where they are joined with a slash and then output.

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/cheok-yin-fung/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[CY's Take on The Weekly Challenge #159 ](https://e7-87-83.github.io/coding/challenge_159.html)

Lets take brief return to the mediant property used in a recurrence relation.

In the [Wikipedia article on the Farey sequence](https://en.wikipedia.org/wiki/Farey_sequence#Next_term) there is a breakdown of the technique to work out the next member of the sequence from the previous two, as — as mentioned earlier — the last element will be the mediant between the one before and the next to be calculated. The mediant, however, will be reported in its reduced form, necessitating a multiplier to find the correct next fraction. Because we know the denominator for the new fraction is maximally of the order requested, this establishes an upper limit to the multiplier. We end up looking for multiplier values within the floor — that is to say the largest integer that does not overflow the boundary in the equation — to find the next numerator and denominator that satisfy the conditions.

```perl
    sub farey {
        my $n = $_[0];
        die "The parameter should be a positive integer." if $n==0;
        my ($g, $h) = ([0,1], [1, $n]);
        my @terms;
        do {
            push @terms, "".join("/", $g->@*);
            my ($a, $b) = $g->@*;
            my ($c, $d) = $h->@*;
            my ($p, $q) = (
                $c*floor (($n+$b)/$d) - $a,
                $d*floor(($n+$b)/$d) - $b
            );
            ($g, $h) = ($h, [$p, $q]);
        } while (!($h->[0] == 1 && $h->[1] == 1));
        push @terms, join("/", $g->@*), join("/", $h->@*);
        return join(", ",@terms) . ".";
    }
```

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/adam-russell/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Farey and Farey Again, but in a Mobius Way — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/04/10)

Here's another variation of the technique from Adam. I'll make mention that these are practically the same as the other examples, as the floor function is equivalent to integer truncation for positive integers.

```perl
    sub farey{
        my($order) = @_;
        my @farey;
        my($s, $t, $u, $v, $x, $y) = (0, 1, 1, $order, 0, 0);
        push @farey, "$s/$t", "$u/$v";
        while($y != 1 && $order > 1){
            $x = POSIX::floor(($t + $order) / $v) * $u - $s;
            $y = POSIX::floor(($t + $order) / $v) * $v - $t;
            push @farey, "$x/$y";
            ($s, $t, $u, $v) = ($u, $v, $x, $y);
        }
        return @farey;
    }
```

[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/colin-crain/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/colin-crain/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Fareys Wear Boots - Programming Excursions in Perl and Raku](https://colincrain.com/2022/04/11/fareys-wear-boots)

Finally, for my own solution I spent my time creating a `Rat` object type for a rational number, that when instantiated automatically creates a reduced internal form and a decimal approximation for sorting. Using a pair of loops, all of the fraction values are calculated as new `Rat` objects and placed in a list. The list is filtered for unique fractions by constructing a hash keyed on the stringified form of the reduced fraction. The keys for this hash can then be sorted on the decimal approximations and output.

Most of the fun stuff is automatically done when the object is created. I like triggers, and the BUILD method is automatically run on instantiation, with the data provided by te BUILDARGS method that proceeds it.

```perl
    package Rat;
    {
        use Moo;
        use feature qw(signatures);
        no warnings 'experimental::signatures';

        has n => ( is => 'ro');
        has d => ( is => 'ro');

        has num => ( is => 'rw');
        has den => ( is => 'rw');
        has val => ( is => 'rw');

        around BUILDARGS => sub {
            my ( $orig, $class, @args ) = @_;
            return {    n => $args[0],
                        d => $args[1]  };
        };

        sub BUILD ($self, $args) {
            my $gcd = gcd( $self->n, $self->d );
            $self->num( $self->n / $gcd );
            $self->den( $self->d / $gcd );
            $self->val( $self->n / $self->d );
        };

        sub gcd ($m, $n) {
            return $n if $m == 0;   ## gcd of (0,n) is n
            while ( $n != 0 ) {
                $n > $m and ($m, $n) = ($n, $m);
                my $r = $m - $n * ( int ($m/$n));
                return $n if $r == 0;
                ($m, $n) = ($n, $r);
            }
        }

        sub string ($self) {
            return $self->num . "/" . $self->den;
        };
    }


    package main;

    my $order = shift @ARGV // 7;

    my @rats;
    for my $den (1..$order) {
        for my $num ( 0..$den) {
            push @rats, new Rat($num, $den);
        }
    }
    my %farey = map { $_->string => $_->val } @rats;

    say join ' ', sort { $farey{$a} <=> $farey{$b} } keys %farey;
```



## Blogs and Additional Submissions in Guest Languages for Task 1:



[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/athanasius/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/athanasius/raku/ch-1.raku)


[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/dave-jacoby/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Métal Perlant: Weekly Challenge #159 | Committed to Memory](https://jacoby.github.io/2022/04/04/mtal-perlant-weekly-challenge-159.html)


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC159 - Farey Sequence - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/04/05/pwc159-farey-sequence/)


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/james-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #159](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-159/james-smith)


[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/robert-dicicco/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/robert-dicicco/raku/ch-1.raku), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/robert-dicicco/ruby/ch-1.rb)


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/ulrich-rieke/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/ulrich-rieke/cpp/ch-1.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/ulrich-rieke/haskell/ch-1.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/ulrich-rieke/raku/ch-1.raku)


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/wlmb/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 159 – W. Luis Mochán](https://wlmb.github.io/2022/04/05/PWC159/)


------------------------------------------





---

# TASK 2 {#PWC159TASK2}

# Moebius Number
*Submitted by: Mohammad S Anwar*

You are given a positive number $n.

Write a script to generate the Moebius Number for the given number. Please refer to wikipedia page for more informations.

**Example 1:**
```
        Input: $n = 5
        Output: -1
```


**Example 2:**
```
        Input: $n = 10
        Output: 1
```


**Example 3:**
```
        Input: $n = 20
        Output: 0
```



## about the solutions
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/adam-russell/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/athanasius/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/polettix/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/jo-37/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/laurent-rosenfeld/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/lubos-kolouch/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/mattneleigh/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/paulo-custodio/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/pete-houston/perl/ch-2.pl),
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/pokgopun/perl/ch-2.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/robert-dicicco/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/roger-bell-west/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/ulrich-rieke/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/wlmb/perl/ch-2.pl)

The [Möbius function](https://en.wikipedia.org/wiki/Möbius_function) is a staple of number theory, popping up in the most unexpected places — most often, but not exclusively, as part of the [Möbius inversion formula](https://en.wikipedia.org/wiki/Möbius_inversion_formula), which defines a mathematical relationship allowing a transformation between functions that sum over ordered sets.

The function itself operates on the set of positive integers, and has a very unusual composite definition, pertaining to the [unique prime decomposition of every number](https://en.wikipedia.org/wiki/Fundamental_theorem_of_arithmetic), with three available results distributed over three possible cases.

The first criterium is whether a particular number is what is known as [squarefree](https://en.wikipedia.org/wiki/Square-free_integer). What this directly means is that no prime factor in its decomposition is squared. As any factor cubed or raised to a higher exponent is also squared as a first step in that process, this in turn is another way of saying that the list of all prime factors enumerated is composed of unique values, as no individual element can be duplicated.

We had a look at squarefree numbers in [PWC150](https://theweeklychallenge.org/blog/review-challenge-150/#PWC150TASK2), for those who may wish a deeper dive. But stay with me here for a moment. Of our three defining cases, we first divide our input set into groups that either are or are not squarefree. All the integers will exclusively be either one or the other. Which leads to our first definition:

* Numbers that are not squarefree get a Möbius number of 0.

Of the remaining squarefree numbers, then, we also have two sub-groupings, to arrive at three cases total:

* If a squarefree numbers has an even number of prime factors, it is assigned the Möbius number 1.

* If a squarefree numbers has an odd number of prime factors, it is assigned the Möbius number -1.

One might not at first sight think that such a function that creates this unusual distinction would be terribly useful, but, to paraphrase:

You might not think it do what it does but it do.

For example, the Farey sequence can be used to calculate the Moebius number for a value, which is not exactly an obvious connection. Weird, huh? We'll be looking into that. And for another example, to calculate the average order of the Möbius function, we can show that this proof is equivalent to a proof of the prime number theorem. Really? Ok, sure.

Interesting in itself, from this we can conclude that the average order is 0, meaning that there are equal numbers of squarefree numbers with even and odd numbers of factors as we approach infinity. Which is not obvious, at least to me, and very interesting.

There were 20 submissions for the second task this past week.

## A SELECTION of SUBMISSIONS
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/dave-jacoby/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/ulrich-rieke/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/colin-crain/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/mattneleigh/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/athanasius/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/wlmb/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/adam-russell/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/cheok-yin-fung/perl/ch-2.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/robert-dicicco/perl/ch-2.pl), and
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/pete-houston/perl/ch-2.pl)




The Möbius function result can be calculated directly, by analyzing the prime factor list. We need to first determine whether a number is squarefree, and then if so count its factors. That gives us all the information we need ot make a determination.

On the other hand, because, as we alluded to, the function appears in a variety of unexpected places, these connections can be used themselves to find the Möbius values instead. Some of the more intensive mathematicians among us took this route, and we'll examine a few of these as well.

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/dave-jacoby/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Métal Perlant: Weekly Challenge #159 | Committed to Memory](https://jacoby.github.io/2022/04/04/mtal-perlant-weekly-challenge-159.html)

Dave will start us off with a demonstration of factorization to obtain the relevant Möbius number. Two routines do the work: a `prime_factors()` function iterates through possible values for factors less than *n* and tests candidates using modulo division. Values with a remainder of 0 are divided out and recorded, reducing the target before continuing.

Once the prime factor list is completed a frequency hash is constructed from its elements, and the keys searched for values greater than 1. If any are found the number is not squarefree.

If none are found a ternary operator is used with a conditional applying a modulo 2 to determine the [parity](https://en.wikipedia.org/wiki/Parity_(mathematics)), corresponding to the positive or negative outcomes as prescribed in the definition.

To make things a little more interesting Dave incorporates the `use utf8` pragma, telling Perl the script text itself is encoded in Unicode, so he can properly write "Möbius".

```perl
    sub möbius ($n) {
        my @primes = prime_factors($n);
        my %primes;

        # has squared prime factor
        map { $primes{$_}++ } @primes;
        for my $k ( keys %primes ) {
            return 0 if $primes{$k} > 1;
        }

        # square-free
        my $p = scalar @primes;
        return $p % 2 == 0 ? 1 : -1;
    }

    sub prime_factors( $n ) {
        my @primes;
        my $nn = $n;
        for my $i ( 2 .. $n ) {
            while ( $nn % $i == 0 ) {
                $nn = $nn / $i;
                push @primes, $i;
            }
        }
        return @primes;
    }
```

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/ulrich-rieke/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/ulrich-rieke/cpp/ch-2.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/ulrich-rieke/haskell/ch-2.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/ulrich-rieke/raku/ch-2.raku)

Here's another version by Ulrich that works along similar lines. After decomposition, the list of factors is used for keys in a hash. The hash keys by definition unique strings, so after this step we only need to compare the number of hash keys to the length of the original list. If they are the same then the factors are unique.

A cascading `if/else` conditional branching is used to select between the possible output values, first checking the squarefree quality, then whether division modulo 2 leaves a remainder.

```perl
    sub primeDecomposition {
      my $number = shift ;
      my @primes ;
      my $current = 2 ;
      do {
          if ( $number % $current == 0 ) {
        push @primes , $current ;
            $number /= $current ;
          }
          else {
        $current++ ;
          }
      } until ( $number == 1 ) ;
      return @primes ;
    }

    my @primes = primeDecomposition( $n ) ;
    for my $p ( @primes ) {
      $primeFactors{$p}++ ;
    }
    my $primesLen = scalar( @primes ) ;
    my $factorLen = scalar( keys %primeFactors ) ;
    if ( $primesLen == $factorLen ) { # square-free
      if ( $primesLen % 2 == 0 ) {
          say 1 ;
      }
      else {
          say -1 ;
      }
    }
    else {
      say 0 ;
    }
```

[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/colin-crain/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/colin-crain/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Squarefree Is Only One Side Of the Story - Programming Excursions in Perl and Raku](https://colincrain.com/2022/04/11/squarefree-is-only-one-side-of-the-story)

For my own solution I avoid testing composite factors by maintaining a common list of primes in the scope of the subroutine, expanding it as required to fill the range below the given target value.

To test for the squarefree property we square each prime factor and check the remainder using modulo division.

To create the Möbius number we raise -1 to the power of the element count, which I thought was cool.

```perl
    sub moebius_function ( $input ) {
        return 1 if $input == 1;

        our @primes = (2,3);  ## shared with subroutine
        my  $count = 0;

        add_next_prime() while $primes[-1] <= $input;

        ## check squarefree
        for (@primes) {
            if ($input % $_ == 0) {
                return 0 if $input % $_ ** 2 == 0 ;
                $count++;
            }
        }

        ## return based on odd or even count
        return (-1)**$count;

        sub add_next_prime ( ) {
        ## adds the next prime to external sequence

            my $candidate = $primes[-1] ;
            CANDIDATE: while ( $candidate += 2 ) {
                my $sqrt_candidate = sqrt( $candidate );
                for my $test ( @primes ) {
                    next CANDIDATE if $candidate % $test == 0;
                    last if $test > $sqrt_candidate;
                }
                push @primes, $candidate;
                last;
            }
        }
    }
```

[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/mattneleigh/perl/ch-2.pl)

Alternatively, Matthew uses a highly-efficient [sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) to find all primes less than the input value, which he can then hand off to his prime factorization subroutine. But wait, we've seen this before: instead of just providing a list of the values, internally the sieve is kept as binary string, with index positions corresponding to the values. The string begins composed entirely of 1s, and individual positions are flipped to 0s as they are shown to have divisors. The remaining unchanged 1 positions indicate the primes.

By returning the string itself, we have a nice compact encoding of the prime list, and can access individual values by testing their position for a "1" character.

In his methodical (and well-documented) routines, he first uses the prime string in a recursive `_prime_factorize_number()` function, isolating and dividing down, adding factors as they are found to a hash. Of note he has altered the usual control flow for this sort of thing to check for repeated prime divisors as they are found — in this event the process short-circuits out and returns 0. In this way we don't waste aby effort actually calculating out the factors for a non-squarefree number. If no squares are found the function returns 1, having loaded a hash reference with the individual primes found.

A count of the keys of this hash will allow the final decision to output positive or negative.

I'm quite fond of this short-circuiting behavior, of counting the primes as they are determined and acting on the count to get out quick. If the number is not squarefree, there's no need to continue factoring as we already know the Möbius number is 0.

```perl
    sub calculate_moebius_number{
        my $n = int(shift());

        return(undef)
            if($n < 1);

        # Special case, since 1 doesn't
        # prime-factorize well
        return(1)
            if($n == 1);

        my $primes = sieve_of_eratosthenes($n, 1);
        my %factors;

        # Shameless re-use of a function from PWC 150;
        # get the prime factorization and see if a
        # square was found
        if(_prime_factorize_number($n, $primes, \%factors)){
            # No square found; see if the number of factors
            # is even or odd
            if(scalar(keys(%factors)) % 2){
                # Odd
                return(-1);
            } else{
                # Even
                return(1);
            }
        } else{
            # A square was found
            return(0);
        }

    }
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/athanasius/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/athanasius/raku/ch-2.raku)

The monk also uses a sieve to determine their primes, but with the factorization step they do a much more thorough job of recording the results, creating a list of tuples, each a prime paired with its exponent. This not only makes ascertaining whether a number is squarefree straightforward, but also is used to create a quite attractive explanatory text accompaniment with the result:

```
    Challenge 159, Task #2: Moebius Number (Perl)

    Input:  $n = 330
    Output: 1

    Explanation: 330 has prime factors 2^1.3^1.5^1.11^1,
                 so mu(330) = 1 because 330 is square-free
                 and has an even number (4) of prime factors
```

Note the use of `any` from `List::Util` to check the exponents:

```perl
    MAIN:
    {
        my $n = parse_command_line();

        print "Input:  \$n = $n\n";

        my $prime_factors = prime_factors( $n );
        my @exponents     = map { $_->[1] } @$prime_factors;

        my $mu = (any { $_ >= 2 } @exponents) ? 0 :
                 (scalar @exponents % 2 == 0) ? 1 : -1;

        print "Output: $mu\n";

        explain( $n, $prime_factors, $mu ) if $VERBOSE;
    }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/wlmb/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 159 – W. Luis Mochán](https://wlmb.github.io/2022/04/05/PWC159/)

On the subject of sieves, Luis brings us a remarkable twist by utilizing the Perl Data Language extensions, the [PDL](https://pdl.perl.org). The sieve, in the end, is a vector of sorts — a long list of indexed data with the indices as the values and the associated data the primality.

In the first three lines we establish a one-dimensional vector of 1s, set the 0 and 1 positions to 0 (not prime), and then looping over the factors from 2 to the square root of the maximum value we set the multiples for the factor squared forward to 0 as well, completing the sieve. The primes, then, are those indices that remain set to 1.

The prime factors, without exponents, are found with a list comprehension: those primes where the remainder of division is 0.

The squarefree part is nice. We first gather the product of all factors found, and compare it to the actual number. If they are the same the number is squarefree, but if a factor is duplicated the product will be missing the duplicated factor or factors.

The parity is a simple ternary conditional, counting the elements with the `nelem` method.

Neat.

```perl
    use PDL;
    use PDL::NiceSlice;
    die "Usage: ./ch-2.pl N1 [N2... ]\n to find the Moebius numbers of N1, N2..." unless @ARGV;
    for(@ARGV){
        my $sieve=ones($_+1); # Eratosthenes sieve
        $sieve(0:1).=0;
        $sieve($_**2:-1:$_).=0 for(2..sqrt($_)); # 1=prime, 0=nonprime
        my $primes=$sieve->xvals->where($sieve); # primes
        my $factors=$primes->where($_%$primes==0); # prime factors
        my $prod=$factors->prodover; # product of factors, once each
        my $square_free=$prod==$_;
        my $parity=$factors->nelem%2?-1:1;
        say "Input: $_ Output: ", $square_free?$parity:0;
    }
```

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/adam-russell/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Farey and Farey Again, but in a Mobius Way — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/04/10)

We said there were mathematical solutions, and here Adam brings one to the table. And it incorporates the Farey sequence. Becha didn't see that one coming, no? The link between the two is a third function, the [mertens function](https://en.wikipedia.org/wiki/Mertens_function). I'll go ahead and let him describe what's happening:

>The Mertens Function of $n is defined as the sum of the first $n Moebius Numbers. There is an alternative and equivalent definition of the Mertens Function, however, that use the Farey Sequence. In the alternative definition The Mertens Function is equivalent to what is shown in sub mertens: the sum of the natural logarithm base raised to the power of two times pi times i times the k-th element of the Farey Sequence. In Perl:

```
    map {$mertens += exp(2 * M_PI * i * eval($_))} @farey;
```

I told you this thing pops up in the most unusual places, didn't I?

```perl
    use POSIX;
    use Math::Complex;

    sub farey{
        my($order) = @_;
        my @farey;
        my($s, $t, $u, $v, $x, $y) = (0, 1, 1, $order, 0, 0);
        push @farey, "$s/$t", "$u/$v";
        while($y != 1 && $order > 1){
            $x = POSIX::floor(($t + $order) / $v) * $u - $s;
            $y = POSIX::floor(($t + $order) / $v) * $v - $t;
            push @farey, "$x/$y";
            ($s, $t, $u, $v) = ($u, $v, $x, $y);
        }
        return @farey;
    }

    sub mertens{
        my($n) = @_;
        my @farey = farey($n);
        my $mertens = 0;
        map {$mertens += exp(2 * M_PI * i * eval($_))} @farey;
        $mertens += -1;
        return Re($mertens);
    }

    sub moebius{
        my($n) = @_;
        return 1 if $n == 1;
        return sprintf("%.f", (mertens($n) - mertens($n - 1)));
    }
```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/cheok-yin-fung/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/cheok-yin-fung/julia/ch-2.jl)


&nbsp;&nbsp;**blog writeup:**
[CY's Take on The Weekly Challenge #159 ](https://e7-87-83.github.io/coding/challenge_159.html)

CY works the math from another property, that

>"Möbius function μ(n) is the sum of the primitive nth roots of unity."

What are the *n* [points of unity](https://en.wikipedia.org/wiki/Root_of_unity), you may ask? Well go ahead, because the answer is [complex](https://en.wikipedia.org/wiki/Complex_number).

That's a little joke there.

In briefest possible terms, an *n*-th root of unity is a number *z* satisfying the conditions

*z*<sup>*n*</sup> = 1 , *n* > 1, *z* ∈ ℂ

As *z* is a complex number, for a given exponent *n* there will be *n* roots. If we sum them all we get our answer.

That is... unexpected.

```perl
    use Math::Complex;
    use List::Util qw/any/;
    use POSIX;

    use constant PI => 2*acos(0);


    my $N =  $ARGV[0] if defined($ARGV[0]);
    say "mu($N) = ", mo($N) if defined($ARGV[0]);


    sub irn {
        my $i = $_[0];
        my $n = $_[1];
        return Math::Complex->make(
            cos 2*PI*$i/$n, sin 2*PI*$i/$n
        );
    }


    sub mo {
        my $n = $_[0];
        return 1 if $n == 1;
        return -1 if $n == 2;
        my $sum = irn(1, $n);
        for my $i (2..$n-1) {
            next if any { ($i*$_) % $n == 0} (2..$n-1);
            $sum += irn($i, $n);
        }
        # say "# intermediate sum: ", Re($sum), "\n\n";
        return floor(Re($sum)+0.5);
    }
```

[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/robert-dicicco/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/robert-dicicco/julia/ch-2.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/robert-dicicco/raku/ch-2.raku), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/robert-dicicco/ruby/ch-2.rb)

Whelp! Well that got weird quick, I dare say. Let's bring it home.

Robert imports some hard-hitting horsepower to do some of the heavy lifting in his solution, using the functions `factor` and `is_square_free` from `ntheory`. As these are our main requirements to make our determination of a Möbius number, there really isn't a whole lot left but a decision tree based on the results.

```perl
    sub getPrimeFactorCount {       # Get prime factor count
      my $num = shift;

      my @arr = factor($num);
      my $sz = scalar(@arr);
      if($sz % 2 == 0){
        return(1);                  # return 1 if even
      }

      return(0);                     # return 0 if not
    }

    my $sf = checkSquareFree($n);
    my $pf = getPrimeFactorCount($n);

    if(($pf == 1)&&($sf == 1)) {           # has even number of prime factors and is square free
      print("Output: 1\n");
    } elsif (($pf == 0) && ($sf == 1)) {   # has odd number of prime factors and is square free
      print("Output: -1\n");
    } elsif ( $sf == 0 ) {                 # number is not square free
      print("Output: 0\n");
    } else { die "Error!!!"};              # something is wrong!!
```

But don't stop now — there can be less, of course, as we shall see.

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/pete-houston/perl/ch-2.pl)

To close things out, finally, we'll point our rocket-ship back towards Earth, back to the reality-check of our opening statement: that for all its unusual construction, the Möbius numbers, and the eponymous function that creates them, are a staple of number theory. Followers of these pages will no doubt by now be familiar with a certain module purpose-built to facilitate all tasks in that particular discipline. This will be of course `Math::Prime::Util` — aka `ntheory`, in case the name wasn't clear enough.

Yes, I know we just used this in Robert's submission, but up there I kept things purposely vague to up the drama a bit for the big reveal. I do what I can to keep you all engaged.

Showmanship is in my blood. What can I say?

So, to get to the point: we could simply ask the module.

```perl
    use Math::Prime::Util 'moebius';

    say moebius shift;
```

And that, dear friends, is why `ntheory` exists. To make the easy things easy and the hard things possible. Just like the doctor ordered.

## Blogs and Additional Submissions in Guest Languages for Task 2:

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC159 - Moebius Number - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/04/06/pwc159-moebius-number/)


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/james-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #159](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-159/james-smith)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/laurent-rosenfeld/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/laurent-rosenfeld/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 159: Farey Sequence and Möbius Number](http://blogs.perl.org/users/laurent_r/2022/04/perl-weekly-challenge-159-farey-sequence-and-mobius-number.html)


[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/lubos-kolouch/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/lubos-kolouch/python/ch-2.py)


[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/pokgopun/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/pokgopun/go/ch-2.go)


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/roger-bell-west/javascript/ch-2.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/roger-bell-west/kotlin/ch-2.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/roger-bell-west/lua/ch-2.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/roger-bell-west/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-159/roger-bell-west/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 159: Farey and Moebius](https://blog.firedrake.org/archive/2022/04/The_Weekly_Challenge_159__Farey_and_Moebius.html)


------------------------------------------





---

<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>

<center>
<h1 id="PWC159BLOGS">_________ THE BLOG PAGES _________</h1>
</center>


---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, by some miracle I somehow continue to maintain my bearings.**

**Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your Unquenchable *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC159BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *FOLLOW* these *BLOG* *LINKS*:

**( ...*don't think, trust your training, you're in the zone, just do it ...* )**


**Adam Russell**

 * [Farey and Farey Again, but in a Mobius Way — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/04/10) ( *Perl* )

**Arne Sommer**

 * [Farey, Moebius and Raku](https://raku-musings.com/farey-moebius.html) ( *Raku* )

**Cheok-Yin Fung**

 * [CY's Take on The Weekly Challenge #159 ](https://e7-87-83.github.io/coding/challenge_159.html) ( *Perl* )

**Colin Crain**

 * [Fareys Wear Boots - Programming Excursions in Perl and Raku](https://colincrain.com/2022/04/11/fareys-wear-boots) ( *Perl & Raku* )
 * [Squarefree Is Only One Side Of the Story - Programming Excursions in Perl and Raku](https://colincrain.com/2022/04/11/squarefree-is-only-one-side-of-the-story) ( *Perl & Raku* )

**Dave Jacoby**

 * [Métal Perlant: Weekly Challenge #159 | Committed to Memory](https://jacoby.github.io/2022/04/04/mtal-perlant-weekly-challenge-159.html) ( *Perl* )

**Flavio Poletti**

 * [PWC159 - Farey Sequence - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/04/05/pwc159-farey-sequence/) ( *Perl & Raku* )
 * [PWC159 - Moebius Number - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/04/06/pwc159-moebius-number/) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #159](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-159/james-smith) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 159: Farey Sequence and Möbius Number](http://blogs.perl.org/users/laurent_r/2022/04/perl-weekly-challenge-159-farey-sequence-and-mobius-number.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 159: numbers and numbers – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/04/04/PerlWeeklyChallenge159.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 159: numbers and numbers – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/04/04/PerlWeeklyChallenge159.html#task1plperl) ( *PL/Perl* )
 * [Perl Weekly Challenge 159: numbers and numbers – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/04/04/PerlWeeklyChallenge159.html#task1plpgsql) ( *PL/PostgreSQL* )

**Roger Bell_West**

 * [RogerBW's Blog: The Weekly Challenge 159: Farey and Moebius](https://blog.firedrake.org/archive/2022/04/The_Weekly_Challenge_159__Farey_and_Moebius.html) ( *Perl & Raku* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 159 – W. Luis Mochán](https://wlmb.github.io/2022/04/05/PWC159/) ( *Perl* )
