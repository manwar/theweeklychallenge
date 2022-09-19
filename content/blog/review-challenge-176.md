---
author:       Colin Crain
date:         2022-09-19T00:00:00
description:  "Colin Crain › Perl Weekly Review #176"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #176"
image:        images/blog/p5-review-challenge-176.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-175/).* )

Welcome to the Perl review pages for **Week 176** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

---

### ●︎ Why do we do these challenges?

I suppose any reasonable answer to that question would come from a field as wide ranging and varied as the people who choose to join the team. One thing, though, is clear: it's not a competition, and there are no judges, even if there is a "prize" of sorts. About that -- I think of it more as an honorarium periodically awarded to acknowledge the efforts we make towards this strange goal. So there's no determination to find the *fastest*, or the *shortest*, or even, in some abstract way, the *best* way to go about things, although I'm certain the participants have their own aspirations and personal drives. As Perl is such a wonderfully expressive language, this provides quite a bit of fodder to the core idea of TMTOWTDI, producing a gamut of varied techniques and solutions.

Even the tasks themselves are often open to a certain amount of discretionary interpretation. What we end up with is a situation where each participant is producing something in the manner they personally find the most interesting and satisfying. Some team members will focus on carefully crafted complete applications, thoroughly vetting input data and handling every use case they can think up. Others choose to apply themselves to the logic of the underlying puzzle and making it work in the most elegant way they can. Some eschew modules they would ordinarily reach for, others embrace them, bringing to light wheels perhaps invented years ago that happen to exactly solve the problem in front of them today.

I've been considering this question for some time and have found one binding commonality between all of us out solving these challenges each week, in that however we normally live our lives, the task in front of us more than likely has nothing to do with any of that. And I think this has great value. We all do what we do, in the real world, and hopefully we do it well. The Weekly Challenge provides us with an opportunity to do something germane to that life yet distinctly different; if we only do the things we already know how to do then we will only do the same things over and over. This is where the "challenge" aspect comes into play.

So we can consider The Weekly Challenge as providing a problem space outside of our comfort zone, as far out from that comfort as we wish to take things. From those reaches we can gather and learn things, pick and choose and bring what we want back into our lives. Personally, I think that's what this whole thing is about. YMMV.

---

<strong><emp>Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due.</emp></strong>

And that, my friends, is why I'm here: to try and figure out ways to do just that.

So that's that... I'm ready now — let’s go in and see what we can find.

---

### For Added Context

Before we begin, you may wish to revisit either the pages for the [**original tasks**](/blog/perl-weekly-challenge-176/) or the summary [**recap**](/blog/recap-challenge-176/) of the challenge. But don't worry about it, the challenge text will be repeated and presented as we progress from task to task.

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

### Enough? Fine. So without even further ado..

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC176TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC176TASK2)   &nbsp;  &nbsp;  &nbsp;       •   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC176BLOGS)    &nbsp;  &nbsp;  &nbsp;       •

---

# TASK 1 {#PWC176TASK1}

# Permuted Multiples
*Submitted by: Mohammad S Anwar*
Write a script to find the smallest integer x such that x, 2x, 3x, 4x, 5x and 6x are permuted multiples of each other.

For example, the integers 125874 and 251748 are permutated multiples of each other as

```
    251784 = 2 x 125874
```

and also both have the same digits but in different order.

**Output**
```
    142857

```


## about the solutions
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/adam-russell/perl/ch-1.pl),
[**Ali Moradi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/deadmarshal/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/athanasius/perl/ch-1.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/bruce-gray/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/colin-crain/perl/ch-1.pl),
[**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/dave-cross/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/polettix/perl/ch-1.pl),
[**Gurunandan Bhat**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/bhat_gurunandan/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/jo-37/perl/ch-1.pl),
[**Kjetil Skotheim**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/kjetillll/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/lubos-kolouch/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/mohammad-anwar/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/peter-campbell-smith/perl/ch-1.pl),
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/pokgopun/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/sgreen/perl/ch-1.pl),
[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/steve-g-lynn/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/ulrich-rieke/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/wlmb/perl/ch-1.pl), and
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/walt-mankowski/perl/ch-1.pl)

The term "permuted multiples", above, is left undefined, but one might think relatively self-explanatory. Well, one thing I have learned in writing these reviews is that anything  seemingly self-explanatory will demonstrate — how shall I put this? An individuality of comprehension encompassing every possible interpretation of the statement.

That's a given.

So, what then did we decide this meant? Well, from the example it means we use the digits of the original number and construct a permutation of the order, then recombine the result to form a new number. Sounds straightforward. But, you might ask, or fail to ask as the case may be: "Are we permuting digits or positions?" And if we have digits then we need to either restrict our digits to unique values, right? Yes, generally, but then multiset permutations are a thing, too.

I feel confident most people who viewed the problem considered the parameters simple and that was that. Fortunately the result did not require one view over another.

Permutations, the way I look at it, are explicitly permutations of positions in an ordered set, and in combinatorics unique placeholders are commonly substituted in these patterns for real-world data to keep things straight. These are normally sequential integers starting at either 1 or 0. So if it is positions we are permuting here than a pair of 1s in a number will merely fill different positions that happen to have the same value. So duplicates are in as the values are inconsequential.

Looked at every possible way even seemingly obvious things can become more variable, especially when terms are used in non-standard contexts, such as permuting the digit positions in a decimal numeric representation.

But then again, cross-pollinating concepts are where all the fun is at, isn't it?

There were 26 submissions for the first task this past week.

## CH-CH-CHANGES!
[**Gurunandan Bhat**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/bhat_gurunandan/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/polettix/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/laurent-rosenfeld/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/athanasius/perl/ch-1.pl),
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/walt-mankowski/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/mohammad-anwar/perl/ch-1.pl),
[**Kjetil Skotheim**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/kjetillll/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/duncan-c-white/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/adam-russell/perl/ch-1.pl),
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/pokgopun/perl/ch-1.pl), and
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/jo-37/perl/ch-1.pl)

It seems the complex part of this first challenge was determining whether one number is composed from the same permuted digits of another, repeated five times for five multipliers. We saw numerous ways to go about these steps, which we'll have a look through.

Half or so of the solutions did follow the same general pattern to find the first result, but we also saw considerable variation to explore. Most solutions settled for the first requested value that fits the bill, but some ventured further into multiple solutions and even alternate bases.


[**Gurunandan Bhat**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/bhat_gurunandan/perl/ch-1.pl)

So, how do we know if one number is digital permutation of another? Well tautologically it will be composed of the same digits repeated in the same quantities. And a good way to record those quantities would be to build a frequency hash from them.

This is Gurunandan's basic premise. Given two numbers, his `is_permutation()` routine constructs two hashes from the individual digits, used as keys. From there all he need to do is iterate the keys in one and makes sure the same key and value pairs exist in the the other. By deleting keys in both hashes as they are matched out, after one set of keys have been processed both hashes should then be empty.

If anything doesn't fly right along the way the routine returns early with a false result.

Thus the `is_permutation()` routine performs the check, and a loop in the main body constructs the 5 multiple values, pairing each with the original for validation. Then if all of *that* works, we've found our matching number that permutes for all multiples from 2 to 6.

```perl
    sub is_permutation ($this, $that) {

        # Checks if $this and $that are permutations of one another

        return if length ($this) != length ($that);

        my (%this, %that);
        %this = map {$_ => ++$this {$_}} split //, $this;
        %that = map {$_ => ++$that {$_}} split //, $that;

        # Compare the two hashes with
        # no fear of autovivification!
        foreach my $key (keys %this) {

            # We have a digit in "this" that
            # is not in "theat". Stop checking
            return unless $that {$key};

            if ($this {$key} == $that {$key}) {

                delete $this {$key};
                delete $that {$key};
            }
        }

        return %this == 0 && %that == 0
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC176 - Permuted Multiples - ETOOBUSY](https://etoobusy.polettix.it/2022/08/03/pwc176-permuted-multiples/)

Flavio introduces his submission with several bold claims: that there must be at least 6 digits, and they should all be different from one another. Because, he asserts, "this what happens when you have a leading 1 and you multiply it by 2, 3, and so on up to 6."

Ok. I'm not 100% sure of the reasoning he used to get there — whether his argument is  mathematical or procedural — but I trust him. I'm going to go out on a limb and say he interprets the rules as that all digits should be unique.

On the basis of these givens, he concludes the smallest value permissible is 123456, and the largest with 6 digits would be 166666, as the next value multiplied by 6 would carry over into a 7-digit result. This is a quite limited range.

Within that span, then, he proceeds along the hash comparison route: making a frequency mapping to a hash, then, all in one set of nested loops compare multiples to the original. However there is one difference in this particular step that can be made, in that if the digits are taken to be unique than we don't need to count them at all, or even hash them. If we split the multiple into an array of digits, we can just compare these elements one-by-one and make sure they exist as keys in the original number hash.

```perl
    my $candidate = 123456;
    $candidate = -142857;
    while ('necessary') {
       if (check_permuted_multiples_upto6($candidate)) {
          say $candidate;
          last;
       }
       ++$candidate;
    }

    sub check_permuted_multiples_upto6 ($n) {
       my %baseline = map { $_ => 1 } split m{}mxs, $n;
       for my $factor (2 .. 6) {
          for my $digit (split m{}mxs, $n * $factor) {
             return 0 unless exists $baseline{$digit};
          }
       }
       return 1;
    }
```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/laurent-rosenfeld/awk/ch-1.awk), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/laurent-rosenfeld/c/ch-1.c), [D](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/laurent-rosenfeld/d/ch-1.d), [Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/laurent-rosenfeld/julia/ch-1.jl), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/laurent-rosenfeld/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/laurent-rosenfeld/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[# Perl Weekly Challenge 176: Permuted Multiples and Reversible Numbers | laurent_r](http://blogs.perl.org/users/laurent_r/2022/08/-perl-weekly-challenge-176-permuted-multiples-and-reversible-numbers.html)

Let's pivot at this point for a bit, because there were an unexpectedly large number of ways presented to identify whether two numbers share a complete common set or multiset of digits.

Which is of course a technical description for permuting the digits.

First counting and then reexamining each digit, first in the original number and then again for each of the multiples, is both repetitive and tedious. Modern computers of course excel in this environment, but we can still sidestep some of the issues by reexamining what it is we need to do: we need to know the digits are the same. We do not care what the digits are nor how many are there. So can we avoid even gathering this information?

If we split the number into an array, then sort the array and reconstruct a new number with the sorted data, we have constructed an common state that is shared by any permutation of the original. The sorting equalizes the ordering by removing it and substituting its own.

If the numbers created from the original and the multiple are equal, then we can conclude that the two are permutations of the same digits.

```perl
    sub check_multiples {
        my $j = shift;
        my $ordered = join '', sort split //, $j;
        for my $k (2..6) {
            return 0 if $ordered ne join '', sort {$a cmp $b}  split //, ($k * $j);
        }
        return 1;
    }

    my $i = 1;
    while (1) {
        if (check_multiples $i) {
            say $i;
            last;
        }
        $i++;
    }
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/athanasius/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/athanasius/raku/ch-1.raku)

The monk adds an additional twist to this form of comparison, optimizing the failure mode by trying the largest multiples first. Splitting and sorting the array makes for a compact solution. Here the monk doesn't bother to apply a `join` to the reordered form, instead comparing the arrays element-by-element. It's not clear which method is more efficient and I suspect thay are about the same.

```perl
    sub is_pm6
    {
        my ($x) = @_;
        for my $i (reverse 2 .. 6)
        {
            return 0 unless are_permutations( $x, $i * $x );
        }

        return 1;
    }

    sub are_permutations
    {
        my ($x, $y) = @_;
        return 0 unless length $x == length $y;

        my @digits_x = sort split //, $x;
        my @digits_y = sort split //, $y;
        for my $i (0 .. $#digits_x)
        {
            return 0 unless $digits_x[ $i ] eq $digits_y[ $i ];
        }

        return 1;
    }
```

[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/walt-mankowski/perl/ch-1.pl)

Splitting and then sorting proved to be the most common approach, with about half the submissions working on the principle.

For Walt's scheme he does decide to join the reordered digit arrays back into single numbers that can be compared as a simple equality.

He performs the operation on the original and each multiple, and then after successfully navigating the sixth and locating his target value he runs a secondary final loop to present all multiples once again for demonstration.

Which is a nice touch, showing your work.


```perl
    sub sorted_digits($x) {
        return join '', sort split //, $x;
    }

    my $i = 1;
    my $done = 0;
    while (!$done) {
        my $sorted = sorted_digits($i);
        for my $j (2..6) {
            last unless sorted_digits($i * $j) == $sorted;
            if ($j == 6) {
                for my $k (1..6) {
                    printf "%d ", $i * $k;
                }
                say "";
                $done = 1;
            }
        }
        $i++;
    }
```

[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/mohammad-anwar/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/mohammad-anwar/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/mohammad-anwar/raku/ch-1.raku), [Swift](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/mohammad-anwar/swift/ch-1.swift)

Mohammad performs his abstraction a little broader, portioning out a generalized `has_same_digits()` function, providing an up/down response to the question. This seems a very practical way do structure the decision space.

```perl
    sub has_same_digits($m, $n) {
        my @x = split //, $m;
        my @y = split //, $n;
        return join(q{}, sort @x) == join(q{}, sort @y);
    }

    sub smallest_permuted_multiples {
        my $i = 10;
        while (true) {
            my $found = true;
            foreach my $j (2..6) {
                if (!has_same_digits($i, $i * $j)) {
                    $found = false;
                    last;
                }
            }

            return $i if $found;
            $i += 1;
        }
    }
```


[**Kjetil Skotheim**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/kjetillll/perl/ch-1.pl)

I mentioned the `split` and `sort` technique yields compact solutions; here Kjetil condenses the action into a single line of logic.

Using the `1 while (...)` construction, a no-op is performed in the block — the useful logic is  transferred to the conditional. In this structure, we have three actions joined by logical `and` conditionals, which are all required to be evaluate as true for the loop to continue around again.

The first increments the target value and this will always return positive, and hence true.

The second assigns a hash made from the joined, sorted, split digit arrays from the products of the  candidate and a multiplier value, mapped from 1 to 6 and then split, sorted, and joined. These are the sorted internal values we have seen and should all be the same if the numbers are permuted multiples. Clever!

The third logical conditional to allow the loop to cycle is that there should be more than one key in this composite hash, which will happen if there are two or more different numbers produced in the `map` operation, which means some multiples are not permutations. If this is true we loop and try for better luck with the next candidate.

If it is *false*, however, we have found our permutation multiple! So the conditional fails, we exit the loop and print the result. Success!

```perl
    1 while ++$i and %h=map+( join('',sort split//,$i*$_) =>1 ),1..6 and 1<keys%h;
    print"$i\n";
```

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/duncan-c-white/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/duncan-c-white/C/ch-1.c)

To round out coverage of this particular method we have Duncan, who also provides the word for this intermediate number that's been on the tip on my tongue this whole time — a *signature*. This would be a particular identifier that maps directly to a set of properties in an object. The signature may uniquely identify an object, or may just tie a particular object to a certain class of similar objects.

Whew! Good to have that settled. That was bothering me far more than it should have.

The class identified by the numeric signature we generate here is that of all numbers composed of a certain multiset of digits, with no restrictions on ordering or placement other than all elements must be used.

```perl
    sub permuted_perm_6
    {
        my( $x ) = @_;
        my $xsig = join( '', sort { $a <=> $b } split(//,$x) );
        foreach my $mult (2..6)
        {
            my $xmsig = join( '', sort { $a <=> $b } split(//,$x*$mult) );
            return 0 unless $xsig eq $xmsig;
        }
        return 1;
    }
```

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/adam-russell/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Cxx](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/adam-russell/cxx/ch-1.cxx), [Fortran](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/adam-russell/fortran/ch-1.f), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/adam-russell/java/ch-1.java), [Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/adam-russell/prolog/ch-1.p)


&nbsp;&nbsp;**blog writeup:**
[Permuted Reversibly — Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/08/07) ( *Perl* )

&nbsp;&nbsp;**blog writeup:**
[Permuted Reversibly — Prolog — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/08/07)

Did I suggest we were done with splitting? Pshaw! No, only that we were done with sorting and equality. We are not, however, done with signatures.

Adam brings his own unique eye to the problem, constructing a unique signature *array*.

He does this using a really neat trick, where the *indexes* of an array function as a stand-in for the *values* represented by those indexes. So after a number is split into digits, the digits are iterated across and the index at each digits' value is incremented, leaving us with a 10-element array of incidence values. After constructing arrays of each of the numbers to be examined, a `grep` operation on the index values from the arrays is used to collect those indices with equal values in both arrays. If the count of elements in this matching array is the same as those in one of the two originals, we have a winner.

I also find quite interesting the logic behind his cascading check on multiples from 2 to 6: if the original and 2-multiple are found to be permuted, then the 2-multiple can now be the new standard. So the 2-multiple and 3-multiple are then checked, and if found to be permuted then we move to use the 3-multiple in the next comparison.  Likewise 3 and 4, 4 and 5, and finally 5 and 6.

I wonder if this type of thinking is particular to a logician. It's a certainly rigorous but curious methodology.

```perl
    sub is_permuted{
        my($x, $y) = @_;
        my(@x, @y);
        map {$x[$_]++} split(//, $x);
        map {$y[$_]++} split(//, $y);
        return false if $#x != $#y;
        my @matched = grep {(!$x[$_] && !$y[$_]) || ($x[$_] && $y[$_] && $x[$_] == $y[$_])} 0 .. @y - 1;
        return true if @matched == @x;
        return false;
    }

    sub smallest_permuted{
        my $x = 0;
        {
            $x++;
            redo unless is_permuted($x, 2 * $x)     && is_permuted(2 * $x, 3 * $x) &&
                        is_permuted(3 * $x, 4 * $x) && is_permuted(4 * $x, 5 * $x) &&
                        is_permuted(5 * $x, 6 * $x);
        }
        return $x;
    }
```

[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/pokgopun/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Dart](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/pokgopun/dart/ch-1.dart), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/pokgopun/go/ch-1.go)

PokGoPun approaches the problem combinatorially, creating combinations of the 10 available digits in increasing sizes and then permuting the sets. For this, he brings his own `combo` and `permute` routines.

Although this approach will rapidly grow its candidate sets, the initial combonations will select only unique patterns of digits from the available 10, meaning here is no repetition allowed in this interpretation of the task.

Fair enough.

As we are selecting only the subset of numbers with unique digits out of all numbers the search space is in the end considerably limited.

The set of all permutations of a given combination are delivered as one long string with space delimiters between individual permutations rejoined into numbers, allowing us to use `index` to search the string. In fact both of the helper functions work on their digit-sets as strings.

```perl
    for my $i (3..9){

        my $combo; ### string to store all combiations of $i elements, each value is separated by a space

        ### generate list of $i element combinations from set(0,1,2,3,4,5,6,7,8,9) and iterate through it
        foreach my $cmb (split /\s/, combo($i, "0123456789", "", \$combo)){

            ### skip if the combination's permuation cannot produce 1x-6x (i.e. max value less than 6 times of min value)
            next if join("", reverse split //, $cmb)/$cmb < 6;

            #print "$cmb\n";

            my $permute; ### string to store all permutations of the combination, each value is separated by a space

            ### generate list of the combination's permutations and iterate through it
            foreach my $pmt (split /\s/, permute($cmb, "", \$permute)){
                ### take each x from the permutations, and check if 6x-2x does exist in the permuations
                ### if so, print x and exit; otherwise skipping to then next combo's permutations
                my $j;
                for ($j=6; $j>1; $j--){
                    if (index($permute, $pmt * $j)== -1){
                    	#if (index($permute, sprintf("%0*d", $i, $pmt * $j))== -1){
                    	last;
                    }
                }
                if ($j == 1){
                    print "$pmt\n";
                    $count--;
                    last;
                }
            }
            last if $count==0;
        }
        last if $count==0;
    }

    sub permute{
        my($s, $t, $res) = @_;
        my $l = length $s;
        if ($l > 0) {
            foreach my $i (0 .. $l - 1){
                my($si, $ti) = ($s, $t);
                $ti .= substr $si, $i, 1, "";
                #print "$si, $ti\n";
                permute($si, $ti, $res);
            }
        } else {
            ${$res} .= " $t";
            return;
        }
        return substr(${$res},1)
    }

    sub combo{
        my($r, $e, $c, $res) = @_;
        my($lc, $le) = (length $c, length $e);
        if ($lc == $r || $lc + $le == $r){
            ${$res} .= " ".substr $c.$e, 0, $r;
            return;
        } else {
            foreach my $i (0 .. $lc + $le - $r){
                combo($r, substr($e, $i + 1), $c.substr($e, $i, 1), $res);
            }
        }
    say substr(${$res},1);
        return substr(${$res},1)
    }
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/jo-37/perl/ch-1.pl)

Finally we'll end with Jorg. True to form, he has provided us with a general-purpose generator that will produce as many permuted multiples as requested in a given base. Assuming, of course, it can find that many.

The main driver is a coderef containing a generator, which can be considered a more complex iterator closure that can be re-entered, yielding the next permuted multiple result when requested.

He has provided a fascinating in-depth analysis of the properties of the procedure. He seems to have taken the same interpretation as Flavio and PokGoPun above, that the independant digits within a number must be unique.

The core logic is built around variations, or the *k*-permutations of *n*, commonly notated  *n*<b>P</b>*k*, for the digits available in a given base. The permutation check for the multiples is done by constructing a hash from the digits and determining the two numbers produce the same keys.

The transitions back and forth between numbers and arrays of digits, along with base conversion, is done with functions from `Math::Prime::Util`, or `ntheory` as it is also known.

Take the time to read through and follow Jorg's extensive comments. It's quite a
good read.

```perl
    # Additional assumptions:
    # - If the multiples shall consist of a permutation of the original
    #   number's digits, these digits need to be distinct.  Otherwise the
    #   concept of a permutation would not make sense.
    # - A leading zero is not permitted.
    # Furthermore, there is no need to restrict the task to base 10 or to
    # find only the minimum number.
    #
    # All results for bases 8, 10, 12 and 13 can be found. There are no
    # results for other bases below 13.  While base 12 can be handled in
    # about 12 min here, base 13 takes about 5 h.
    #
    # There is an interesting results in base 8: 1234567
    #
    # For bases up to 12, the leading digit must always be 1.  See below for
    # different results in bases 17, 19 and 24.

    # Build a generator for "permuted multiples" in the given base.
    sub gen_perm_mult ($base) {
        my $done;
        generator {
            # Do not allow the generator to start over.
            yield(undef), return if $done++;
            # The minimum length of such a number cannot be less than six as
            # the number itself and its multiples all have different leading
            # digits if they are of the same length.  The maximum length is
            # the base because all digits shall be distinct.  The
            # $len variable is off by one here as we treat the leading digit
            # separately.
            for my $len (5 .. $base - 1) {
                # There shall be no leading zero and the sixfold of it needs
                # to be below the base.
                for my $ld (1 .. int(($base - 1) / 6)) {
                    # Create a hash with all possible digits as keys.
                    (\my %digits)->@{0 .. $base - 1} = ();
                    # Remove the leading digit.
                    delete $digits{$ld};
                    # Loop over all variations (a.k.a. k-permutations of n)
                    # of digits (except the leading digit) in the given base
                    # and in the current length as candidate numbers.
                    my $v_it = variations([sort {$a <=> $b} keys %digits], $len);
                    while (my $v = $v_it->next()) {
                        # Prepend the leading digit.
                        my @p = ($ld, @$v);
                        # Get the candidate number from the digits in the
                        # given base.
                        my $n = fromdigits \@p, $base;
                        # Check if the digits of all requested multiples of
                        # the candidate number form a permutation of the
                        # candidate number's digits.
                        yield $n
                            if all {isperm(\@p, [todigits $n * $_, $base])} 2..6;
                    }
                }
            }
        }
    }

    # Check if the array @$q is a permutation of @$p.  This is the case if
    # all elements of @$p occur in @$q and both arrays have the same length.
    sub isperm ($p, $q) {
        return unless @$p == @$q;
        # Create a hash %q having keys from @$q and values 1.
        (\my %q)->@{@$q} = (1) x @$q;
        # Check if all elements of @$p occur in %q.
        @$p == grep $_, @q{@$p};
    }
```

## Blogs and Additional Submissions in Guest Languages for Task 1:


[**Ali Moradi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/deadmarshal/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/deadmarshal/cpp/ch-1.cpp), [D](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/deadmarshal/d/ch1.d), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/deadmarshal/lua/ch-1.lua), [Modula-3](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/deadmarshal/modula-3/ch1), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/deadmarshal/pascal/ch1.pas)


[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/bruce-gray/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/bruce-gray/raku/ch-1.raku)


[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/cheok-yin-fung/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/cheok-yin-fung/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[CY's Take on The Weekly Challenge #176 ](https://e7-87-83.github.io/coding/challenge_176.html)


[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/colin-crain/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Mixed Up and Multiplied - Programming Excursions in Perl and Raku](https://colincrain.com/2022/08/07/mixed-up-and-multiplied)


[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/jaldhar-h-vyas/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/jaldhar-h-vyas/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 176](https://www.braincells.com/perl/2022/08/perl_weekly_challenge_week_176.html)


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/james-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[perlweeklychallenge-club/challenge-176/james-smith at master · drbaggy/perlweeklychallenge-club · GitHub](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-176/james-smith)


[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/lubos-kolouch/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/lubos-kolouch/python/ch-1.py)


[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/peter-campbell-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[More funny numbers - permutable and reversible](https://pjcs-pwc.blogspot.com/2022/08/more-funny-numbers-permutable-and.html)


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/roger-bell-west/javascript/ch-1.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/roger-bell-west/kotlin/ch-1.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/roger-bell-west/lua/ch-1.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 176: Reversible Permutations](https://blog.firedrake.org/archive/2022/08/The_Weekly_Challenge_176__Reversible_Permutations.html)


[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/sgreen/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/sgreen/python/ch-1.py)


&nbsp;&nbsp;**blog writeup:**
[Big number, small numbers](https://dev.to/simongreennet/big-number-small-numbers-49h4)


[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/steve-g-lynn/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/steve-g-lynn/julia/ch-1.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/steve-g-lynn/raku/ch-1.p6)


&nbsp;&nbsp;**blog writeup:**
[PWC 176](https://thiujiac.blogspot.com/2022/08/pwc-176.html)


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/ulrich-rieke/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/ulrich-rieke/cpp/ch-1.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/ulrich-rieke/haskell/ch-1.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/ulrich-rieke/raku/ch-1.raku)


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/wlmb/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Emacs-lisp](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/wlmb/emacs-lisp/ch-1.el)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 176. – W. Luis Mochán. Blog. – Físico, investigador del ICF-UNAM.Physicist, researcher at ICF-UNAM.](https://wlmb.github.io/2022/08/01/PWC176/)


------------------------------------------





---

# TASK 2 {#PWC176TASK2}

# Reversible Numbers
*Submitted by: Mohammad S Anwar*

Write a script to find out all Reversible Numbers below 100.

A number is said to be a reversible if sum of the number and its reverse had only odd digits.

For example,
```
    36 is reversible number as 36 + 63 = 99 i.e. all digits are odd.
    17 is not reversible as 17 + 71 = 88, none of the digits are odd.
```

**Output**
```
    10, 12, 14, 16, 18, 21, 23, 25, 27,
    30, 32, 34, 36, 41, 43, 45, 50, 52,
    54, 61, 63, 70, 72, 81, 90
```



## about the solutions
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/adam-russell/perl/ch-2.pl),
[**Ali Moradi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/deadmarshal/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/athanasius/perl/ch-2.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/bruce-gray/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/colin-crain/perl/ch-2.pl),
[**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/dave-cross/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/polettix/perl/ch-2.pl),
[**Gurunandan Bhat**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/bhat_gurunandan/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/james-smith/perl/ch-2.pl),
[**Kjetil Skotheim**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/kjetillll/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/laurent-rosenfeld/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/lubos-kolouch/perl/ch-2.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/mohammad-anwar/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/peter-campbell-smith/perl/ch-2.pl),
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/pokgopun/perl/ch-2.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/robert-dicicco/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/sgreen/perl/ch-2.pl),
[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/steve-g-lynn/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/ulrich-rieke/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/wlmb/perl/ch-2.pl), and
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/walt-mankowski/perl/ch-2.pl)

A reversible number, as defined, is a strange beast. A search of the literature seems to find several classes of numbers using that particular name, but this particular flavor appears to only exist in the world of coding challenges, rather than in any broader scope of number theory.

To wit: I can find no reasoning beyond *what* into *why* the condition that the digits be only odd numbers is given. It's interesting but not illuminating, and appears to exist as an arbitrary condition that must be met.

So be it.  Given that Perl already comes with an — albeit contextually confusing — `reverse` function, the actual act of swapping digit positions is fairly trivial. Which is not to say actually trivial because it is remarkably easy, because of mis-assessment of the scalar or listwise context of various functions, for `reverse` to not do what you expect or want. In fact I find it one of the most common errors I come across.

Well something has to have that title.

But all that's rather beside the point. We have a definition that with whatever reasoning is behind it remains seemingly clear. Note the qualifier, and refer back to task 1 if necessary. With these task definitions it's dangerous to assume anything.

There were 26 submissions for the second task this past week.

## a FUNNY WALK around the park, THERE and BACK
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/sgreen/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/wlmb/perl/ch-2.pl),
[**Ali Moradi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/deadmarshal/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/ulrich-rieke/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/lubos-kolouch/perl/ch-2.pl),
[**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/dave-cross/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/roger-bell-west/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/james-smith/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/colin-crain/perl/ch-2.pl), and
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/bruce-gray/perl/ch-2.pl)


Right off the bat, it seems clear that summing a number with its reverse is not the hard part of this exercise. Rather the it's the internal deliberation as to whether or not the individual digits produced are all odd that remains the real question.

We saw a fairly large number of ways of going about that particular task, as it turns out.

Most solutions followed a pattern of checking every number in a range up to 100, as stipulated in the request. Within this limited, restricted range brute force, checking all possibilities, was a perfectly reasonable approach.

After all, it's only a hundred numbers. What could go wrong?


[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/sgreen/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/sgreen/python/ch-2.py)


&nbsp;&nbsp;**blog writeup:**
[Big number, small numbers](https://dev.to/simongreennet/big-number-small-numbers-49h4)

Simon will start us off with a straightforward demonstration of brute force. We are given a well-defined search space — under 100 — and so it makes perfect sense just to check all possible values. Manually checking will presumably finish quickly, so there's no pressing need for fancy optimal algorithms.

Reversing and summing is a basic step, with the remaining requirement being to ensure all the digits are odd. This is done with a regular expression, which is an excellent way to look inside a string and test the contents. Anchored to the head and tail of the string, a character class is defined containing only odd digits, making these the only options to match the string characters.

```perl
    sub main {
        my @solutions = ();
        # Go from 1 to 99.
        foreach my $num ( 1 .. 99 ) {
            # If the sum of the number and the reversed number is all odd...
            if ( ( $num + reverse($num) ) =~ /^[13579]+$/ ) {
                # Add it to the array
                push @solutions, $num;
            }
        }

        say join ', ', @solutions;
    }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/wlmb/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Emacs-lisp](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/wlmb/emacs-lisp/ch-2.el)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 176 – W. Luis Mochán](https://wlmb.github.io/2022/08/01/PWC176/)

As perhaps should be expected, the validation of the odd digits was the prime point of differentiation. Luis makes a much more explicit iteration across the digits in the the summed value, after spitting the number into an array of characters.

The `list::Util` function `all` is employed to make sure every element in the list of digits evaluates to true within the qualifying block.

```perl
    use List::Util qw(all);
    my @reversible;
    for (10..100-1){
         push @reversible, $_ if is_reversible($_)
    }
    say join ", ", @reversible;
    sub is_reversible($n){   # read the comments from the bottom up
        return all {$_%2==1} # and check they are all odd
            split "",        # split the digits of the result
                $n           # the original number
                +            # add it to
                reverse $n   # reverse digits
    }
```

[**Ali Moradi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/deadmarshal/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/deadmarshal/cpp/ch-2.cpp), [D](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/deadmarshal/d/ch2.d), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/deadmarshal/lua/ch-2.lua), [Modula-3](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/deadmarshal/modula-3/ch2), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/deadmarshal/pascal/ch2.pas)

Condensed, we have a very similar solution from Ali. It's funny, but a quick scan revealed even another submision using `all`. I admit it makes for a very compact solution, but I did not expect the prevalence. I rarely think to using this quite useful logical operation myself, where I'll happily use other functions from the `List::Util` module without much thought.

Perhaps I should reconsider.

```perl
    use List::Util qw(all);

    sub is_reversible_number{
      my ($n) = @_;
      return all {$_ % 2 != 0} (split //, $n + reverse $n);
    }

    my $i = 1;
    while($i < 100){
      print "$i " if is_reversible_number($i);
      $i++;
    }
```

Member
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/ulrich-rieke/perl/ch-2.pl)
submitted a very similar third solution to this one.


[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/lubos-kolouch/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/lubos-kolouch/python/ch-2.py)

That said, the use of a handy module function is hardly required to use the same basic technique. Here Lubos uses an iterative loop over the digit array produced using `split`, checking each item in turn for the correct odd parity. As you can see the rest of the framing logic follows the same pattern.

```perl
    sub is_reversible_num {
        my $what = shift;

        my $sum = $what + join '', reverse split //, $what;

        for my $i ( split //, $sum ) {
            return 0 if $i % 2 == 0;
        }

        return 1;
    }

    sub get_numbers {
        my $limit = shift;

        my $i = 1;

        my @result;

        while ( $i < $limit ) {
            $i++;

            push @result, $i if is_reversible_num($i);
        }

        return \@result;
    }
```

[**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/dave-cross/perl/ch-2.pl)

Dave Cross doesn't need a module either, and makes his own version of an `is_even()` function to call on. Splitting the sum and processing seems to be sweeping the field today.

```perl
    sub is_reversible {
      my $sum = $_[0] + reverse $_[0];
      for (split //, $sum) {
        return if is_even($_);
      }

      return 1;
    }

    sub is_even {
      return if ($_[0] % 2);
      return 1;
    }
```


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/roger-bell-west/javascript/ch-2.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/roger-bell-west/kotlin/ch-2.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/roger-bell-west/lua/ch-2.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/roger-bell-west/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/roger-bell-west/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 176: Reversible Permutations](https://blog.firedrake.org/archive/2022/08/The_Weekly_Challenge_176__Reversible_Permutations.html)

Roger avoids the fairly expensive `split` function by performing his parity checks purely mathematically. The candidate number is checked for divsibilty by 2 using modulo division, which tests the last digit for oddness. He then divides by 10 and discards the remainder and repeats the step, checking the next digit along. This is repeated until we run out of number.

These sort of clean, mathematical solutions Roger excels at have a tendency to be extremely fast, and the explicit, versus implict, looping structures are easier to see and optimize should that become necessary.

```perl
    sub reversible($mx) {
      my @o;
      foreach my $n (1..$mx) {
        my $t = $n + reverse($n);
        my $q = 1;
        while ($t > 0) {
          if ($t % 2 == 0) {
            $q = 0;
            last;
          }
          $t = int($t/10);
        }
        if ($q) {
          push @o,$n;
        }
      }
      return \@o;
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/james-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #176](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-176/james-smith)

As it works out, we are immediately presented with a way to test the bold hypothesis I've just made, as James is presenting to us two solutions for our review: one based on matching the digits of the sum with a regular expression, the other checking the digits individually as we divide it down by 10 until it vanishes. And he even adds benchmarking code! Lets watch:

```perl
    sub reversible_regex {
      grep { ($_+reverse) =~ m{^[13579]{2}$} } 10..99;
    }

    sub reversible_maths {
      my $q;
      grep { ($q = ($_+reverse) )%2 && int($q/10)%2 } 10..99;
    }

    ...

    cmpthese( 20_000,{
      'maths'   => sub { reversible_maths },
      'regex'   => sub { reversible_regex },
    });
```

I truncated the output section for clarity, but here are the results:

```perl
        Rate regex maths
     26316/s    --  -55%
     58824/s  124%    --
```

We can see the dividing down is in fact considerably faster.


[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/colin-crain/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Drive It In Reverse, Then. Done. - Programming Excursions in Perl and Raku](https://colincrain.com/2022/08/07/drive-it-in-reverse-then-done)

When devising my own solution, it quickly became apparent the the correct course of action would be to check every decimal number between 1 and 100 for the requirements. This would be straightforward and managable and obviously the best way to go about things.

On the other hand it wasn't very interesting.

So I didn't do that.

You see, the thing about these so-called reversible numbers was that I had no idea why they existed as a concept. Furthermore, no one was stepping up to discuss their properties, their *raison d'être*. So I ended up getting lured down a rabbit-hole to discover them myself, by *constructing* the numbers.

From my notes, pared down for brevity:

>How do you make an odd number? You add an even number and an odd one.

>I don’t think there is a strict mathematical definition to reversing the digits of a number. It’s not a mathematical process, but textual, operating on the glyphs.

>Single digit numbers reverse to the same digit, and the sum of any digit with itself is 2 times the value, and hence even. So single digit values are out.

>We are left with two-digit values with one even and one odd digit.

>But what about if we carry? If we carry a 1 and form a three-digit number then the leading 1 is odd. No one said we couldn’t add a digit, only that all the digits that are present in the final sum are odd. The thing is that we need even-odd pairs that when swapped create odd-even pairs, or vice versa. If the rightmost sum in the sum is odd, then the left sum, comprised of the same digits, will also be odd. But carrying over a 1 from the right sum will make the left sum — which because it also will carry becomes the center digit in the final sum — adds 1 to that odd number and becomes even.

>So all carrying is excluded, at least with 2-digit numbers.

>We need a list of two-digit numbers such that one digit is even and the other odd, where the two digits summed together do not exceed 9, and the first digit is not zero. Any number that satisfies these criteria should be so-called reversible.

```perl
    ## we'll construct TWO DIGIT numbers in the form $m$n

    my @twos;

    FIRST: for my $m ( 1..9 ) {
        for my $n ( 0..9 ) {
            next unless ($m + $n) & 1;    ## sum is odd
            next FIRST if $m + $n > 9;    ## but will not carry
            push @twos, "$m$n";
        }
    }

    say "@twos";
```

This constructs a list of the correct values.

So the I considered, what about three digits? The reversal effects would change.

>For 3-digit numbers the rules are a little different. In these, the center digit will always reverse to itself, and hence sum to an even number. So the only way for a 3-digit number to be reversible is for the one's position to carry. The reverse-sum of these numbers then will always be of the for 1xxx, where x is some odd digit.

>In these number the first and third position must therefore sum to an odd number greater than 9, and the middle position can be any number that will not carry with 1 added, which is to say 0 through 4. It's easier to construct these out-of-order, modifying the loops of our 2-digit solution and adding a third interior loop to fit center digit

Here's the result.

```perl
    ## THREE DIGIT $m$p$n

    my @threes;

    ONE: for my $m ( 1..9 ) {
        TWO: for my $n ( 0..9 ) {
            next unless ($m + $n) & 1;          ## sum is odd
            next unless $m + $n > 9;            ## must carry
            for my $p (0..9) {
                next TWO if 2 * $p + 1 > 9 ;    ## must not carry
                push @threes, "$m$p$n";
            }
        }
    }

    @threes = sort { $a<=>$b } @threes;

    say "@threes";
```

The little generating programs are nice and compact, really. I went on to analyse four and five digit versions as well, which are documented in the writeup (and on the original script in a slightly less-refined manner)

[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/bruce-gray/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/bruce-gray/raku/ch-2.raku)

Bruce delivered a fine, paractical solution based around splitting the sum into an array of digits and using a `grep` filter to only pass odd values from the array, checking ot see whether the filtered output matches the input.

Not to put too fine point on it but we've seen that one already. It's good.

This is all very nicely done but not what we're interested in at the moment. Rather, he also submits to us three alternate methods that each reflect a novel analysis.

Now we're talkin'.

Bruse makes inferrence to a blog expalining these solutions that somehow does not seem to have materialized, so I'll do my best.

First, as I noted above, in a two-digit solution the individual digit sums cannot carry. Bruse draws from this the conclusion that the first digit plus the second digit must sum to odd numbers less than 10. So we can just collect numbers in the range for which this is true:

```perl
    use List::Util qw<sum>;
    say join ',', grep { my $s = sum split ''; $s % 2 and $s <= 9 } 10..99;
```

A good solution that only works with two-dgit numbers, because, for instance, three digits require a carry to retain their oddness.

That one was pretty straightforward. Next, though, we have a mathematical solution, "via decomposition of the odd multiples of 11". Ok. Sure. Let's do that:

This one uses the `List::Prime::Util` function [`forpart`](https://metacpan.org/pod/Math::Prime::Util#forpart).

```perl
    use ntheory qw<forpart>;
    my @r;
    sub collect { push @r, join('', @_), join('', reverse @_) }
    for my $odd ( 1, 3, 5, 7, 9 ) {
        push @r, $odd . '0';
        forpart \&collect, $odd, { n => 2 };
    }
    say join ',', sort @r;
```

Offhand I'm not entirely sure what's going on here.

Lastly, though we have the following cryptic entry for the intrepid. Good luck:

```perl
    # Correct for 2-digit, but no longer comprehensible:
    say join ',', sort map {
        my $N = $_;
        map { 9 * $_ + $N } 1 .. $N;
    } 1, 3, 5, 7, 9;
```

Just a little sumptin' to get you thinking.


## Blogs and Additional Submissions in Guest Languages for Task 2:


[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/adam-russell/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Cxx](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/adam-russell/cxx/ch-2.cxx), [Fortran](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/adam-russell/fortran/ch-2.f), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/adam-russell/java/ch-2.java), [Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/adam-russell/prolog/ch-2.p)


&nbsp;&nbsp;**blog writeup:**
[Permuted Reversibly — Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/08/07) ( *Perl* )

&nbsp;&nbsp;**blog writeup:**
[Permuted Reversibly — Prolog — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/08/07)


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/athanasius/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/athanasius/raku/ch-2.raku)


[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/cheok-yin-fung/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/cheok-yin-fung/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[CY's Take on The Weekly Challenge #176 ](https://e7-87-83.github.io/coding/challenge_176.html)



[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/duncan-c-white/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/duncan-c-white/C/ch-2.c)

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC176 - Reversible Numbers - ETOOBUSY](https://etoobusy.polettix.it/2022/08/04/pwc176-reversible-numbers/)


[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/jaldhar-h-vyas/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/jaldhar-h-vyas/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 176](https://www.braincells.com/perl/2022/08/perl_weekly_challenge_week_176.html)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/laurent-rosenfeld/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/laurent-rosenfeld/awk/ch-2.awk), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/laurent-rosenfeld/bc/ch-2.bc), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/laurent-rosenfeld/c/ch-2.c), [D](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/laurent-rosenfeld/d/ch-2.d), [Dart](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/laurent-rosenfeld/dart/ch-2.dart), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/laurent-rosenfeld/go/ch-2.go), [Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/laurent-rosenfeld/javascript/ch-2.js), [Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/laurent-rosenfeld/julia/ch-2.jl), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/laurent-rosenfeld/kotlin/ch-2.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/laurent-rosenfeld/lua/ch-2.lua), [Nim](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/laurent-rosenfeld/nim/ch-2.nim), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/laurent-rosenfeld/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/laurent-rosenfeld/raku/ch-2.raku), [Ring](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/laurent-rosenfeld/ring/ch-2.ring), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/laurent-rosenfeld/ruby/ch-2.rb), [Scala](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/laurent-rosenfeld/scala/ch-2.scala)


&nbsp;&nbsp;**blog writeup:**
[# Perl Weekly Challenge 176: Permuted Multiples and Reversible Numbers](http://blogs.perl.org/users/laurent_r/2022/08/-perl-weekly-challenge-176-permuted-multiples-and-reversible-numbers.html)


[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/mohammad-anwar/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/mohammad-anwar/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/mohammad-anwar/raku/ch-2.raku), [Swift](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/mohammad-anwar/swift/ch-2.swift)


[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/peter-campbell-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[More funny numbers - permutable and reversible](https://pjcs-pwc.blogspot.com/2022/08/more-funny-numbers-permutable-and.html)


[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/pokgopun/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Dart](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/pokgopun/dart/ch-2.dart), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/pokgopun/go/ch-2.go)


[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/robert-dicicco/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/robert-dicicco/julia/ch-2.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/robert-dicicco/raku/ch-2.raku), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/robert-dicicco/ruby/ch-2.rb)


[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/steve-g-lynn/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/steve-g-lynn/julia/ch-2.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/steve-g-lynn/raku/ch-2.p6)


&nbsp;&nbsp;**blog writeup:**
[PWC 176](https://thiujiac.blogspot.com/2022/08/pwc-176.html)


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/ulrich-rieke/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/ulrich-rieke/cpp/ch-2.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/ulrich-rieke/haskell/ch-2.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-176/ulrich-rieke/raku/ch-2.raku)


------------------------------------------





---

<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>

<center>
<h1 id="PWC176BLOGS">_________ THE BLOG PAGES _________</h1>
</center>


---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, by some miracle I somehow continue to maintain my bearings.**

**Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your Unquenchable *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC176BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *FOLLOW* these *BLOG* *LINKS*:

**( ...*don't think, trust your training, you're in the zone, just do it ...* )**


**Adam Russell**

 * [Permuted Reversibly — Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/08/07) ( *Perl* )
 * [Permuted Reversibly — Prolog — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/08/07) ( *Prolog* )

**Arne Sommer**

 * [Permuted Reversibles with Raku - Arne Sommer](https://raku-musings.com/permuted-reversibles.html) ( *Raku* )

**Cheok-Yin Fung**

 * [CY's Take on The Weekly Challenge #176 ](https://e7-87-83.github.io/coding/challenge_176.html) ( *Perl & Raku* )

**Colin Crain**

 * [Mixed Up and Multiplied - Programming Excursions in Perl and Raku](https://colincrain.com/2022/08/07/mixed-up-and-multiplied) ( *Perl* )
 * [Drive It In Reverse, Then! Done. - Programming Excursions in Perl and Raku](https://colincrain.com/2022/08/07/drive-it-in-reverse-then-done) ( *Perl* )

**Flavio Poletti**

 * [PWC176 - Permuted Multiples - ETOOBUSY](https://etoobusy.polettix.it/2022/08/03/pwc176-permuted-multiples/) ( *Perl & Raku* )
 * [PWC176 - Reversible Numbers - ETOOBUSY](https://etoobusy.polettix.it/2022/08/04/pwc176-reversible-numbers/) ( *Perl & Raku* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 176](https://www.braincells.com/perl/2022/08/perl_weekly_challenge_week_176.html) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #176](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-176/james-smith) ( *Perl* )

**Laurent Rosenfeld**

 * [# Perl Weekly Challenge 176: Permuted Multiples and Reversible Numbers](http://blogs.perl.org/users/laurent_r/2022/08/-perl-weekly-challenge-176-permuted-multiples-and-reversible-numbers.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 176: scrumbled numbers – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/08/02/PerlWeeklyChallenge176.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 176: scrumbled numbers – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/08/02/PerlWeeklyChallenge176.html#task1plperl) ( *PL/Perl* )
 * [Perl Weekly Challenge 176: scrumbled numbers – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/08/02/PerlWeeklyChallenge176.html#task1plpgsql) ( *PL/PgSQL* )

**Peter Campbell Smith**

 * [More funny numbers - permutable and reversible](https://pjcs-pwc.blogspot.com/2022/08/more-funny-numbers-permutable-and.html) ( *Perl* )

**Roger Bell_West**

 * [RogerBW's Blog: The Weekly Challenge 176: Reversible Permutations](https://blog.firedrake.org/archive/2022/08/The_Weekly_Challenge_176__Reversible_Permutations.html) ( *Perl & Raku* )

**Simon Green**

 * [Big number, small numbers](https://dev.to/simongreennet/big-number-small-numbers-49h4) ( *Perl* )

**Stephen G Lynn**

 * [PWC 176](https://thiujiac.blogspot.com/2022/08/pwc-176.html) ( *Perl & Raku* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 176 – W. Luis Mochán](https://wlmb.github.io/2022/08/01/PWC176/) ( *Perl* )
