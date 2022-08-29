---
author:       Colin Crain
date:         2022-08-29T00:00:00
description:  "Colin Crain › Perl Weekly Review #173"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #173"
image:        images/blog/p5-review-challenge-173.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-172/).* )

Welcome to the Perl review pages for **Week 173** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

Before we begin, you may wish to revisit either the pages for the [**original tasks**](/blog/perl-weekly-challenge-173/) or the summary [**recap**](/blog/recap-challenge-173/) of the challenge. But don't worry about it, the challenge text will be repeated and presented as we progress from task to task.

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

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC173TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC173TASK2)   &nbsp;  &nbsp;  &nbsp;       •   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC173BLOGS)    &nbsp;  &nbsp;  &nbsp;       •

---

# TASK 1 {#PWC173TASK1}

# Esthetic Number
*Submitted by: Mohammad S Anwar*

You are given a positive integer, $n.

Write a script to find out if the given number is Esthetic Number.

An esthetic number is a positive integer where every adjacent digit differs from its neighbour by 1.

**For example,**
```
    5456 is     an esthetic number as |5 - 4|  = |4 - 5|  = |5 - 6| = 1
    120  is not an esthetic numner as |1 - 2| != |2 - 0| != 1
```

## about the solutions
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/adam-russell/perl/ch-1.pl),
[**Ali Moradi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/deadmarshal/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/athanasius/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/colin-crain/perl/ch-1.pl),
[**Dario Mazzeo**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/dario-mazzeo/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/jo-37/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/lubos-kolouch/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/mattneleigh/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/perlboy1967/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/peter-campbell-smith/perl/ch-1.pl),
[**Philippe Bricout**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/brxfork/perl/ch-1.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/robert-dicicco/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/sgreen/perl/ch-1.pl),
[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/steve-g-lynn/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/ulrich-rieke/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/wlmb/perl/ch-1.pl), and
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/walt-mankowski/perl/ch-1.pl)

This task bears certain similarities to the PWC116 task "[Number Sequence](https://theweeklychallenge.org/blog/perl-weekly-challenge-116/#TASK1)".

In that challenge, however, we were asked to partition the digits of a number in any way that produced a sequence where the position values differed by 1, allowing the creation of multi-digit numbers. Here we have the requirement that the digits be considered individually and sequentially. In that challange as well it was left unclear as to whether the difference was strictly to increase left-to-right as shown in the examples, but here the absolute value of the difference is clearly specified, so we know we can vary up or down.

So what about the aesthetics?

Were we to graph the digits of an aesthetic number, the values along the axis never stay the same. The line subtly rises and falls but never by very much at one time, following a gentle curve, in as continuous a waveform as one could ask for under the circumstances. The serpentine undulations take on an effortless quality, exhibiting a grace and calm that is simply pleasant to contemplate. Life, the numbers seem to say, cannot stay static and must change from moment to moment, reflecting the essential dynamism of the cosmos. Life also, however, remains connected to the past and the future by a common unity, symbolized here by both the number 1 and the smooth meandering of this river of time, wholly and solidly connecting the digits on their pathway from here to there.

And that, in this critic's eye, is why we call them aesthetic.

And yes I just made that up.

There were 27 submissions for the first task this past week.

## A CONTEMPLATION, STARING into the SUBLIME
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/jaldhar-h-vyas/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/dave-jacoby/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/adam-russell/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/mohammad-anwar/perl/ch-1.pl),
[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/steve-g-lynn/perl/ch-1.pl),
[**Dario Mazzeo**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/dario-mazzeo/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/sgreen/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/peter-campbell-smith/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/perlboy1967/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/wlmb/perl/ch-1.pl), and
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/jo-37/perl/ch-1.pl)


[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/jaldhar-h-vyas/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/jaldhar-h-vyas/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 173](https://www.braincells.com/perl/2022/07/perl_weekly_challenge_week_173.html)

Jaldhar will make the first demonstration. After splitting the number into an array of digits, we iterate across the index values, comparing the value at each digit position to the position following. If the absolute value of the difference between these values is ever not 1, we can dismiss the aesthetics of the work as angular and derivative. To wit: the number does not pass muster in our critical eye and is not aesthetic.

```perl
    sub isEsthetic {
        my ($n) = @_;
        my @digits = split //, $n;

        for my $i (0 .. scalar @digits - 2) {
            if (abs($digits[$i] - $digits[$i + 1]) != 1) {
                return undef;
            }
        }

        return 1;
    }
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/dave-jacoby/perl/ch-1.pl)

This splitting and pairwise comparison was a popular technique. It is straightforward and uncomplicated, with a procedural description that follows directly from the definition:

"Look at the differences between adjacent pairs of all the digits. In an aesthetic number the difference will always be 1. If the absolute value of the difference is ever not 1, then the number cannot be an aesthetic number."

Done.

```perl
    sub is_esthetic($n) {
        my @n = split //, $n;
        for my $i ( 1 .. -1 + scalar @n ) {
            my $j = $i - 1;
            my $e = abs $n[$i] - $n[$j];
            return 0 if $e != 1;
        }
        return 1;
    }
```

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/adam-russell/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Suffering Succotash! — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/07/17)

We will move on to alternate forms soon, but here's another from Adam, who, in a very Perlish idiom, abstains from defining an explicit iterator. Instead he defines a conditional loop that continues until the `@digits` array is depleted. He then removes digits from the end of the array one-by-one, comparing each digit to the previously examined — captured in a temporary variable — and then updates the temporary variable for the next comparison.

```perl
    sub is_esthetic{
        my($n) = @_;
        my @digits = split(//, $n);
        my $d0 = pop @digits;
        while(@digits){
            my $d1 = pop @digits;
            return false if abs($d1 - $d0) != 1;
            $d0 = $d1;
        }
        return true;
    }
```

[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/mohammad-anwar/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/mohammad-anwar/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/mohammad-anwar/raku/ch-1.raku), [Swift](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/mohammad-anwar/swift/ch-1.swift)

Ok, one more. Mohammad has been playing with Perl 5.36, and seems quite enamored of the new optional `boolean` builtin. Writing in a language is the sum of many small actions, and so seemingly tiny alterations here and there, like the introduction of `say`, can end up with disproportional impact on the overall experience. So power to him on this.

```perl
    sub esthetic_number($n) {
        die "ERROR: Missing number.\n"    unless defined $n;
        die "ERROR: Invalid number $n.\n" if $n < 0;

        my @n = split //, $n;
        foreach my $i (1 .. @n-1) {
            return false if abs($n[$i-1] - $n[$i]) != 1;
        }
        return true;
    }
```

I have to say I find being able to say `return false` does have a nice ring to it. It's clear, simple and comforting.


[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/steve-g-lynn/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/steve-g-lynn/julia/ch-1.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/steve-g-lynn/raku/ch-1.p6)


&nbsp;&nbsp;**blog writeup:**
[PWC #173](https://thiujiac.blogspot.com/2022/07/pwc-173.html)

The other basic technique to process individual digits within a number is to use `substr` and examine the characters directly. As a string, contained within a Perl scalar datatype, is ultimately stored as C array of characters, explicitly dividing a string into an array can be viewed as redundant. Yes, it is certainly easier to manipulate the indexed elements if you do, but if you are willing to abstract to a somewhat lower level accessing that interior array is remarkably efficient.

Hence `substr` is both generally faster and requires less memory that allocating a new Perl array. So that's nice. For some reason I thought for years there would be an overhead cost selecting individual characters using `substr`, but in fact the opposite is true. Now it's certainly my preferred method.


Stephen even puts those extra lock cycles to good use, throwing in some input validation for good measure. He also adds another twist, and shies away from using the absolute value. Instead, he offers up a logical OR chain of options on each pair of digits: subtracting one from the other will yield 1, or alternately the same calculation will yield -1, or we just nope out of there because the number cannot be aesthetically pleasing and we are done.

```perl
    sub is_esthetic {
        my ($number)=@_;
        $number =~ s/_//g; #-- get rid of thousands separators if any
        ($number =~ /^\d+$/) || (return 0); #-- false if not a number
        for my $i (0 .. (length($number)-2)) {
            ( (substr($number,$i+1,1)==(substr($number,$i,1)+1)) ||
            (substr($number,$i+1,1)==(substr($number,$i,1)-1)) ) ||
            return 0;
        }
        return 1;
    }
```

[**Dario Mazzeo**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/dario-mazzeo/perl/ch-1.pl)

And another example of the technique from Dario.

```perl
    my $t=-1;
    foreach (my $i=0; $i<length($num)-1; $i++){
        if ($t>1 || ($t!=-1 && $t!=Valore($num, $i))){print "0\n"; exit;}
        $t=Valore($num, $i);
    }
    print "1\n";
    exit;


    sub Valore{
        my $num=$_[0];
        my $i=$_[1];

        return abs(int(substr($num,$i,1))-int(substr($num,$i+1,1)));
    }
```

"Valore", by the way, is Italian of course, and translates in English to "value" or "worth". As you can see it returns the absolute value of subtracting the digits at a given position and the one following. Although my experience in the language is rather limited, I enjoy Dario's commentary and symbol names in Italian.

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/sgreen/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/sgreen/python/ch-1.py)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 173](https://dev.to/simongreennet/weekly-challenge-173-1kli)

Simon keeps the core logic together in this third example of using `substr` to get at the digit values.

```perl
    sub main ($n) {
        # The first character is 0 .. len(n)-2
        foreach my $i ( 0 .. length($n) - 2 ) {
            # Calculate the difference between that number and the next
            my $diff = abs( substr( $n, $i, 1 ) - substr( $n, $i + 1, 1 ) );
            if ( $diff != 1 ) {
                # This is not a esthetic number
                say '0';
                return;
            }
        }

        # This is a esthetic number
        say '1';
    }
```

[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/peter-campbell-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Aesthetics and a fast-growing sequence](https://pjcs-pwc.blogspot.com/2022/07/aesthetics-and-fast-growing-sequence.html)

The question of whether "aesthetic" is spelled with a leading "a" will be left open and unanswered in this writeup. I belive my position can be reasonably inferred, but — and I find this logic very appealing — my reasoning for this is that it looks prettier. Internal consistency is poetry in resonance.


```perl
    # we can assume lack of estheticism as soon as we find 2 successive digits not differing by 1
    say qq[\nQuick result, abandoning search as soon as an unesthetic pair is found];

    # loop over tests
    for $test (@tests) {

        # loop over 2nd to last digits, comparing them with the preceding one
        $digit = substr($test, 0, 1);
        for $j (1 .. length($test) - 1) {
            $next = substr($test, $j, 1);

            # test for being esthetic and quit if not
            $not = abs($digit - $next) == 1 ? '' : ' not';
            last if $not;

            $digit = $next;
        }
        $as = $not ? qq[ as |$digit - $next| != 1] : '';
        say qq[$test is$not an esthetic number$as];
    }
```

Now let's move on to some other approaches and observsations.


[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/perlboy1967/perl/ch-1.pl)

Niels introduced me not long ago to a function from `List::MoreUtils` that was added relatively recently: `slide`.  For some reason I find its action to be a profound and even sublime idea: given a list and a block, it examines sequential pairings from the list. But not by removing two values at a time though, as in `pairwise`, but by grouping the first and second value, then next the second and third, third and forth, *et cetera*. The idea, the documantation states, is like sliding a magnifying glass across the data, bringing two adjacent indices into focus at a time. I love that.

These two elements are placed into the block as the variables `$a` and `$b`, and evaluated, much like similar functions, with the return values composing the output.

This is of course exactly what we need.

```perl
    use List::MoreUtils qw(all slide);
    use Test::More;

    sub isEstheticNumber($) {
      no warnings 'once'; all {$_} slide {abs($a-$b)==1} split //, shift;
    }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/wlmb/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 173 – W. Luis Mochán](https://wlmb.github.io/2022/07/11/PWC173/)

Speaking of aesthetics, I find the little ternary switch for some natural language programming in Luis' solution quite appealing. It's the details in life that keep everything from being the same.

```perl
    foreach(@ARGV){
        s/^\s*\+\s*//;  # remove leading +, if present
        say("Error: $_ is not a positive number"), next unless $_=~/^\d+$/;
        my ($current,@rest)=split "";
        my $test;
        say "$_ ", (
            (all {($current,$test)=($_, abs($_-$current)==1); $test}(@rest))
            ? "is"
            : "is not"
            ), " an esthetic number";
    }
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/jo-37/perl/ch-1.pl)

Finally we have Jorg. Given the straightforward techniques available to examine the individual digits in a number string we've given a lot of coverage to the methods for checking the differences between adjacent digits in a number.

But I can hear a distinct rising murmur in the crowd, voicing the obvious unanswered questions here: what about the other bases? Why can't we see alternate radixes  represented in our artistic judgements? Is there no room outside of the decimal system for the sublime?

Ok, settle down you lot. Of course there is. And Jorg is here to show you just what he's found.

Honestly I think Jorg's notes require no further explanation. And we get an alternate mathematical test for the difference between two digits out of the deal.

```perl
    # Generalizing the task to arbitrary bases as usual.
    #
    # Taking the liberty of modifying the task slightly.  Shouldn't the
    # difference of two digits in a positional representation with base B be
    # taken modulo B?  Zero comes after nine in decimal numbers.  I'm going
    # to follow this interpretation.
    # A difference D between two digits of one or minus one may be expressed
    # as:
    # (D - 1) * (D + 1) = 0
    # or
    # D ** 2 = 1
    # Taking these equations modulo B, they make "B - 1" and "zero"
    # neighbors.

    sub is_esthetic ($n, $base) {
        # Turn zero to true.
        defined reduce {
            # Slide over digit pairs and check their difference.
            defined $a && ($b - $a)**2 % $base == 1 ? $b : undef
        } todigits $n, $base;
    }
```



## Blogs and Additional Submissions in Guest Languages for Task 1:


[**Ali Moradi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/deadmarshal/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Ada](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/deadmarshal/ada/ch1.adb), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/deadmarshal/c/ch-1.c), [D](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/deadmarshal/d/ch1.d), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/deadmarshal/lua/ch-1.lua), [Modula-3](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/deadmarshal/modula-3/ch1)


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/athanasius/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/athanasius/raku/ch-1.raku)


[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/duncan-c-white/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/duncan-c-white/C/ch-1.c)


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC173 - Esthetic Number - ETOOBUSY](https://etoobusy.polettix.it/2022/07/13/pwc173-esthetic-number/)


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/james-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #173](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-173/james-smith)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[D](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/laurent-rosenfeld/d/ch-1.d), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/laurent-rosenfeld/go/ch-1.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/laurent-rosenfeld/java/ch-1.java), [Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/laurent-rosenfeld/julia/ch-1.jl), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/laurent-rosenfeld/kotlin/ch-1.kt), [Nim](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/laurent-rosenfeld/nim/ch-1.nim), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/laurent-rosenfeld/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/laurent-rosenfeld/raku/ch-1.raku), [Ring](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/laurent-rosenfeld/ring/ch-1.ring), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/laurent-rosenfeld/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/laurent-rosenfeld/rust/ch-1.rs), [Scala](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/laurent-rosenfeld/scala/ch-1.scala)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 173: Esthetic Number and Sylvester's Sequence](http://blogs.perl.org/users/laurent_r/2022/07/perl-weekly-challenge-173-esthetic-number-and-sylvesters-sequence.html)

&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 173: Sylvester's Sequence in dc](http://blogs.perl.org/users/laurent_r/2022/07/perl-weekly-challenge-173-sylvesters-sequence-in-dc.html)


[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/lubos-kolouch/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/lubos-kolouch/python/ch-1.py)


[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/robert-dicicco/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/robert-dicicco/julia/ch-1.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/robert-dicicco/raku/ch-1.raku), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/robert-dicicco/ruby/ch-1.rb)


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/roger-bell-west/javascript/ch-1.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/roger-bell-west/kotlin/ch-1.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/roger-bell-west/lua/ch-1.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 173: The Aesthetics of Sylvester](https://blog.firedrake.org/archive/2022/07/The_Weekly_Challenge_173__The_Aesthetics_of_Sylvester.html)


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/ulrich-rieke/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/ulrich-rieke/cpp/ch-1.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/ulrich-rieke/haskell/ch-1.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/ulrich-rieke/raku/ch-1.raku)


[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/walt-mankowski/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/walt-mankowski/python/ch-1.py)


------------------------------------------





---

# TASK 2 {#PWC173TASK2}

# Sylvester’s sequence
*Submitted by: Mohammad S Anwar*

Write a script to generate first 10 members of Sylvester's sequence. For more information, please refer to the [wikipedia page](https://en.wikipedia.org/wiki/Sylvester%27s_sequence).


**Output**
```
    2
    3
    7
    43
    1807
    3263443
    10650056950807
    113423713055421844361000443
    12864938683278671740537145998360961546653259485195807
    16550664732451996419846819544443918001751315270637
      7497841851388766535868639572406808911988131737645185443
```






## about the solutions
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/adam-russell/perl/ch-2.pl),
[**Ali Moradi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/deadmarshal/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/athanasius/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/colin-crain/perl/ch-2.pl),
[**Dario Mazzeo**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/dario-mazzeo/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/jo-37/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/laurent-rosenfeld/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/lubos-kolouch/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/mattneleigh/perl/ch-2.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/mohammad-anwar/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/perlboy1967/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/peter-campbell-smith/perl/ch-2.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/robert-dicicco/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/sgreen/perl/ch-2.pl),
[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/steve-g-lynn/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/ulrich-rieke/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/wlmb/perl/ch-2.pl), and
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/walt-mankowski/perl/ch-2.pl)

From the [aforementioned Wikipedia article](https://en.wikipedia.org/wiki/Sylvester%27s_sequence):

> In number theory, Sylvester's sequence is an integer sequence in which each term of the sequence is the product of the previous terms, plus one. The first few terms of the sequence are <br><br>`2, 3, 7, 43, 1807, 3263443, 10650056950807, 113423713055421844361000443`

The Sylvester sequence, then, gets big. Fast. Ridiculously fast.

Think of it as a sort of hyper-factorial, but instead of a running product, multiplying by the next item in a linear fashion, we multiply the running total instead by the previous running total, which of course already contains every previous factor raised to the power of its distance from the new multiplicand.

That's quite a bit of multiplication we've got going on.

In fact, the digit-length of individual members of the sequence approximately doubles at every iteration, so the last requested value, S(10) has 53 digits, and S(11) has 105.

S(20), then, comes in at 53,361 digits, which is a lot. We left the number of protons in the universe behind us some 53 thousand orders of magnitude ago. The scale is, not to put too fine a point on it, absurd.

There were 25 submissions for the second task this past week.

## A CAT chasing a BIRD
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/colin-crain/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/athanasius/perl/ch-2.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/robert-dicicco/perl/ch-2.pl),
[**Ali Moradi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/deadmarshal/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/duncan-c-white/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/laurent-rosenfeld/perl/ch-2.pl),
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/walt-mankowski/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/ulrich-rieke/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/polettix/perl/ch-2.pl), and
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/roger-bell-west/perl/ch-2.pl)

The Sylvester sequence is defined by a recurrence relation, which is to say previous values are used to calculate new ones. Due to a few mathematical quirks underlying the values, though, there were no less than three basic approaches to the same outcome. Because the number of values requested was not large, the list required can be generated one element after another, calculating each new value from scratch from the existing list at that point.

Alternately, because each element itself is the product of the elements before it, much of the multiplication in constructing the elements fresh can be eliminated, constructing new elements from the previous and a partial working value, or even from just the previous value and some careful bookkeeping on the output list.

[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/colin-crain/perl/ch-2.pl)

I'm just going to start things off today with my no-frills solution. First, we're going to need the `bigint` pragma, allowing us arbitrary-length integers.

We initialize a "product" and "previous" value at 1, then iterate through a count of values requested. Then in one overly-condensed line we engage a `while` loop decrementing the count until a false value is achieved. This gives us the requested number of values. The count itself is not used in the calculation.

At every loop we set the `$prev` value to the `$prod` plus 1, and then output this as the Sylvester's number. The running `$prod` value is then updated to the new value and we go around again.

```perl
    use bigint;

    my $c    = shift // 15;
    my $prod = my $prev = 1;

    $prod *= $prev = $prod + 1 and say $prev while $c--;
```

Once we say `use bigint` at the top of the script then all assignment will be into `BigInt` containers automatically and nothing more need be done.

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/athanasius/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/athanasius/raku/ch-2.raku)

The recurrence relation behind the sequence can be reworked several ways. The monk uses the equivalence that

A(*n*+1) = A(*n*)² - A(*n*) + 1

which can then be rearranged again to

A(*n*+1) = A(*n*) × (A(*n*) - 1) + 1

This isn't in fact completely different than what I did, but certainly looks it.

```perl
    my $sylvester = 2;
    printf "%2d:  %d\n", 1, $sylvester;

    for my $i (2 .. $TARGET)
    {
        $sylvester *= $sylvester - 1;
      ++$sylvester;

        my $string = $SEP ? add_separators( $sylvester, $SEP ) : $sylvester;
           $string = substr( $string, 0, $WRAP ) . "\n     " .
                     substr( $string, $WRAP    ) if length $string > $WRAP;

        printf "%2d:  %s\n", $i, $string;
    }
```

The last section leads to a routine to add separators every three digits in the *very* large numbers the sequence produces.

[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/robert-dicicco/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/robert-dicicco/julia/ch-2.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/robert-dicicco/raku/ch-2.raku), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/robert-dicicco/ruby/ch-2.rb)

In the sequence each term is the product of the previous terms plus one. So if we collect the terms we can multiply them and add 1 to get the next value. Yes that sounds like a quite tautological definition but what do you want from me? This is what Robert has done. The enormous multiplication stages for the larger values are significant, but are still easily dispatched with modern computing technology.

```perl
    use bigint;
    use List::Util qw/product/;

    my @arr = (2);
    my $count = 1;
    my $prod = 1;

    print("$arr[0]\n");

    while (1) {

      $prod = product(@arr) + 1;

      print("$prod\n");

      push(@arr,$prod);

      $count++;

      last if ($count == 10);

    }
```

[**Ali Moradi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/deadmarshal/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Ada](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/deadmarshal/ada/Ch2.gpr), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/deadmarshal/c/ch-2.c), [D](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/deadmarshal/d/ch2.d), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/deadmarshal/lua/ch-2.lua), [Modula-3](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/deadmarshal/modula-3/ch2)

I think this very linear, literal approach is the easiest to immediately understand. Given a list of numbers, we multiply them up, add 1 and write the new value on the end of the list. In this case we are using the `product` listwise function from `List::Util` as Robert did above. The array slice is a bit of a red herring, though, as we are always gathering the product of every element in the array before we push the new value on. The slice is just the entire array.

```perl
    use List::Util qw(product);
    use Math::BigInt lib => 'GMP';

    sub sylvesters_sequence{
      my @arr = (2,3);
      do{
        push @arr, Math::BigInt->new(product @arr[0..@arr-1]) + 1;
      }until(@arr == 10);
      return @arr;
    }
```

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/duncan-c-white/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/duncan-c-white/C/ch-2.c)

If we get the order right, we can output the running product, first adding 1, before multiplying the new value into the running product. This satisfies the recurrence relation and we only need to do one, possibly monstrous, multiplication per loop.

```perl
    use bigint;

    foreach my $i (1..$n-1)
    {
        my $next = $p + 1;
        say $next;
        $p *= $next;
    }
```

The `bigint` pragma, because of its naming, causes a certain amount of confusion with the `Math::BigInt` module, which it uses. Unlike, say, using `ntheory` as an alias for `Math::Prime::Util`, and the two being hence one and the same, `bigint` and the similarly named module are different beasts. The prama, when invoked, does use the module and the objects within it, but also has the added advantage that *all* variables under the pragma are transparently taken to be `Math::BigInt` objects, and nothing more need be done. No constructors or overridden method-call operators required. Easy-peasy.

Because of the overhead invoked in using the various arbitrary-scale number objects there is a case to create a script with only certain variables made big, which we'll explore.

The module behind the scenes is nice to know about.

But in many cases, such as this, much of the messiness around using arbitrary-sized integers can be avoided, and that in itself has value.

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/laurent-rosenfeld/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/laurent-rosenfeld/bc/ch-2.bc), [D](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/laurent-rosenfeld/d/ch-2.d), [Dart](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/laurent-rosenfeld/dart/ch-2.dart), [Dc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/laurent-rosenfeld/dc/ch-2.dc), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/laurent-rosenfeld/go/ch-2.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/laurent-rosenfeld/java/ch-2.java), [Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/laurent-rosenfeld/javascript/ch-2.js), [Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/laurent-rosenfeld/julia/ch-2.jl), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/laurent-rosenfeld/kotlin/ch-2.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/laurent-rosenfeld/lua/ch-2.lua), [Nim](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/laurent-rosenfeld/nim/ch-2.nim), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/laurent-rosenfeld/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/laurent-rosenfeld/raku/ch-2.raku), [Ring](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/laurent-rosenfeld/ring/ch-2.ring), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/laurent-rosenfeld/ruby/ch-2.rb), [Scala](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/laurent-rosenfeld/scala/ch-2.scala), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/laurent-rosenfeld/tcl/ch-2.tcl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 173: Esthetic Number and Sylvester's Sequence](http://blogs.perl.org/users/laurent_r/2022/07/perl-weekly-challenge-173-esthetic-number-and-sylvesters-sequence.html)

&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 173: Sylvester's Sequence in dc](http://blogs.perl.org/users/laurent_r/2022/07/perl-weekly-challenge-173-sylvesters-sequence-in-dc.html)

Because `BigInt` object manipulations are relatively expensive compared to their operator counterparts, performing millions of these in a tight loop can add up and bring a scriipt to a standstill. But even multiplying out the list for every new product, as Laurent does here with his own `prod()` routine, we are these for 10 values, only performing some 54 multiplication steps. Pshaw.

That last one, though, is *not* something I'd want to do using pencil and paper.

```perl
    use bigint;

    sub prod {
        my $prod = 1;
        $prod *= $_ for @_;
        return $prod;
    }

    my @s = (2);
    while (@s < 10) {
        push @s, 1 + prod @s;
    }
    say for @s;
```

[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/walt-mankowski/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/walt-mankowski/python/ch-2.py)

Using the `product` function from `List::Util` makes the sequence super-compact and quite clear. Yes it is slightly less efficient than my opaque clever use of stepping a recurrence relation one behind the value being created, or however you want to typify that thing I did, but frankly I'm finding it a bit hard to explain now why what I did works. That one is very pretty, but magic. This is also pretty, and obvious.

```perl
    use bigint;
    use List::Util qw(product);

    my @sylvester;
    push @sylvester, 1 + product @sylvester while @sylvester < 10;
    say for @sylvester;
```

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/ulrich-rieke/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/ulrich-rieke/cpp/ch-2.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/ulrich-rieke/haskell/ch-2.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/ulrich-rieke/raku/ch-2.raku)

Directly invoking `Math::BigInt` objects anf their methods is not exactly pleasant to either read or write. But in a very data-processing intesive application it may be prudent to only create seleted big objects to hold a few giant values.

In Ulrich's version here, for instance, you can see that `$count` is just a normal scalar. Sure, that doesn't matter in this particular instance, but if a step was required to take a hunded square roots a hunded-million times then maybe keeping (and reusing!) standard Perl variables could be the difference between a script finishing in minutes or months.

So when using big numbers and running afoul on time, you know where to start looking.

```perl
    use Math::BigInt ;

    my $x = Math::BigInt->new( "2" ) ;
    say $x ;
    my $y = Math::BigInt->new( "3" ) ;
    say $y ;
    my $lastProduct = $x->bmul($y)->copy( ) ;
    my $count = 0 ;
    while ( $count != 8 ) {
      my $newElement = $lastProduct->copy( ) ;
      $newElement->binc( ) ;
      say $newElement ;
      $lastProduct->bmul( $newElement ) ;
      $count++ ;
    }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/e-choroba/perl/ch-2.pl)

Choroba emphasizes the underlying difference in the variable types by naming his big integer object using capital lettering, as is common convention for constants. This is not a constant, of course, but it makes a lot of sense to differentiate it from its kin, that seemingly look and act the same but are not.

Notice how `product` still works properly when given a list of big integers, which I find remarkable. Operator overloading around `BigInt` objects will cause other values used in the calculation to be upgraded to big status silently and automatically.

```perl
    use List::Util qw{ product };
    use Math::BigInt;

    {   my $ONE = 'Math::BigInt'->new('1');
        sub sylvesters_sequence ($size) {
            my @sequence;
            while (@sequence < $size) {
                push @sequence, $ONE + product(@sequence);
            }
            return \@sequence
        }
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC173 - Sylvester's Sequence - ETOOBUSY](https://etoobusy.polettix.it/2022/07/14/pwc173-sylvester-s-sequence/)

This micro-management of which values become bigified ended up as a popular choice, although I do find the auto-upgrading of values used in calculations can be quite confounding.

It can be difficult at times to sort out which values are upgraded.

I personally tend towards the use of the broad-stroke pragma and avoiding the issue at the start by upgrading everything. The performance hit is still there, the same or possibly worse, but the confusion factor is lowered. If you need to you can always go back and carefully piece out the allocation by hand, but if you don't you don't and can move on to better things.


```perl
    my $it = sylvester_sequence_it();
    say $it->() for 1 .. shift // 10;

    sub sylvester_sequence_it {
       my $n;
       return sub { $n = $n ? 1 + $n * ($n - 1) : Math::BigInt->new(2) }
    }
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/roger-bell-west/javascript/ch-2.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/roger-bell-west/kotlin/ch-2.kt), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/roger-bell-west/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 173: The Aesthetics of Sylvester](https://blog.firedrake.org/archive/2022/07/The_Weekly_Challenge_173__The_Aesthetics_of_Sylvester.html)

To sum up: as Roger demonstrates in this example using a recurrence relation, simplicity is a virtue.

```perl
    use bigint;

    sub sylvester($ct) {
      my @o = (2);
      foreach (2..$ct) {
        push @o,1 + ($o[-1] * ($o[-1]-1))
      }
      return \@o;
    }
```




## Blogs and Additional Submissions in Guest Languages for Task 2:


[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/adam-russell/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Suffering Succotash! — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/07/17)


[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/jaldhar-h-vyas/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/jaldhar-h-vyas/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 173](https://www.braincells.com/perl/2022/07/perl_weekly_challenge_week_173.html)


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/james-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #173](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-173/james-smith)


[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/lubos-kolouch/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/lubos-kolouch/python/ch-2.py)


[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/mohammad-anwar/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/mohammad-anwar/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/mohammad-anwar/raku/ch-2.raku)


[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/peter-campbell-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Aesthetics and a fast-growing sequence](https://pjcs-pwc.blogspot.com/2022/07/aesthetics-and-fast-growing-sequence.html)


[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/sgreen/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/sgreen/python/ch-2.py)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 173](https://dev.to/simongreennet/weekly-challenge-173-1kli)


[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/steve-g-lynn/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/steve-g-lynn/julia/ch-2.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/steve-g-lynn/raku/ch-2.sh)


&nbsp;&nbsp;**blog writeup:**
[PWC #173](https://thiujiac.blogspot.com/2022/07/pwc-173.html)


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-173/wlmb/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 173 – W. Luis Mochán](https://wlmb.github.io/2022/07/11/PWC173/)


------------------------------------------





---

<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>

<center>
<h1 id="PWC173BLOGS">_________ THE BLOG PAGES _________</h1>
</center>


---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, by some miracle I somehow continue to maintain my bearings.**

**Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your Unquenchable *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC173BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *FOLLOW* these *BLOG* *LINKS*:

**( ...*don't think, trust your training, you're in the zone, just do it ...* )**


**Adam Russell**

 * [Suffering Succotash! — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/07/17) ( *Perl* )

**Arne Sommer**

 * [Esthetic Sylvester with Raku - Arne Sommer](https://raku-musings.com/esthetic-sylvester.html) ( *Raku* )

**Flavio Poletti**

 * [PWC173 - Esthetic Number - ETOOBUSY](https://etoobusy.polettix.it/2022/07/13/pwc173-esthetic-number/) ( *Perl & Raku* )
 * [PWC173 - Sylvester's Sequence - ETOOBUSY](https://etoobusy.polettix.it/2022/07/14/pwc173-sylvester-s-sequence/) ( *Perl & Raku* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 173](https://www.braincells.com/perl/2022/07/perl_weekly_challenge_week_173.html) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #173](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-173/james-smith) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 173: Esthetic Number and Sylvester's Sequence](http://blogs.perl.org/users/laurent_r/2022/07/perl-weekly-challenge-173-esthetic-number-and-sylvesters-sequence.html) ( *Perl & Raku* )
 * [Perl Weekly Challenge 173: Sylvester's Sequence in dc](http://blogs.perl.org/users/laurent_r/2022/07/perl-weekly-challenge-173-sylvesters-sequence-in-dc.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 173: sly – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/07/11/PerlWeeklyChallenge173.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 173: sly – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/07/11/PerlWeeklyChallenge173.html#task1plperl) ( *PL/Perl* )
 * [Perl Weekly Challenge 173: sly – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/07/11/PerlWeeklyChallenge173.html#task1plpgsql) ( *PL/PgSQL* )

**Peter Campbell Smith**

 * [Aesthetics and a fast-growing sequence](https://pjcs-pwc.blogspot.com/2022/07/aesthetics-and-fast-growing-sequence.html) ( *Perl* )

**Roger Bell_West**

 * [RogerBW's Blog: The Weekly Challenge 173: The Aesthetics of Sylvester](https://blog.firedrake.org/archive/2022/07/The_Weekly_Challenge_173__The_Aesthetics_of_Sylvester.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 173](https://dev.to/simongreennet/weekly-challenge-173-1kli) ( *Perl* )

**Stephen G Lynn**

 * [PWC #173](https://thiujiac.blogspot.com/2022/07/pwc-173.html) ( *Perl & Raku* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 173 – W. Luis Mochán](https://wlmb.github.io/2022/07/11/PWC173/) ( *Perl* )
