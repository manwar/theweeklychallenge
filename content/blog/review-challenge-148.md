---
author:       Colin Crain
date:         2022-02-21T00:00:00
description:  "Colin Crain › Perl Weekly Review #148"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #148"
image:        images/blog/p5-review-challenge-148.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-147/).* )

Welcome to the Perl review pages for **Week 148** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

---

### ●︎ Why do we do these challenges?

I suppose any reasonable answer to that question would be from a field as wide ranging and varied as the people who choose to join the team. One thing, though, is clear: it's not a competition, and there are no judges, even if there is a "prize" of sorts. About that -- I think of it more as an honorarium periodically awarded to acknowledge the efforts we make towards this strange goal. So there's no determination to find the *fastest*, or the *shortest*, or even, in some abstract way, the *best* way to go about things, although I'm certain the participants have their own aspirations and personal drives. As Perl is such a wonderfully expressive language, this provides quite a bit of fodder to the core idea of TMTOWTDI, producing a gamut of varied techniques and solutions.

Even the tasks themselves are often open to a certain amount of discretionary interpretation. What we end up with is a situation where each participant is producing something in the manner they find the most interesting or satisfying. Some team members focus on carefully crafted complete applications, thoroughly vetting input data and handling every use case they can think up. Others choose to apply themselves to the logic of the underlying puzzle and making it work in the most elegant way they can. Some eschew modules they would ordinarily reach for, others embrace them, bringing to light wheels perhaps invented years ago that happen to exactly solve the problem in front of them today.

I've been considering this question for some time and have found one binding commonality between all of us out solving these challenges each week, in that however we normally live our lives, the task in front of us more than likely has nothing to do with any of that. And I think this has great value. We all do what we do, in the real world, and hopefully we do it well. The Weekly Challenge provides us with an opportunity to do something germane to that life yet distinctly different; if we only do the things we already know how to do then we will only do the same things over and over. This is where the "challenge" aspect comes into play.

So we can consider The Weekly Challenge as providing a problem space outside of our comfort zone, as far out from that comfort as we wish to take things. From those reaches we can gather and learn things, pick and choose and bring what we want back into our lives. Personally, I think that's what this whole thing is about. YMMV.

---

<i>Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due.</i>

And that's why I'm here, to try and figure out ways to do that.

So, here we are then — let’s get to it and see what we can find.

---

### For Additional Context…

before we begin, you may wish to revisit either the pages for the [**original tasks**](/blog/perl-weekly-challenge-148/) or the summary [**recap**](/blog/recap-challenge-148/) of the challenge. But don't worry about it, the challenge text will be repeated and presented as we progress from task to task.

Oh, and one more thing before we get started:


### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please feel free to email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

<div align= center><strong>...So finally, without further ado...</strong></div>

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC148TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC148TASK2)   &nbsp;  &nbsp;  &nbsp;       •   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC148BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC148TASK1}

# Eban Numbers
*Submitted by: Mohammad S Anwar*<br>

Write a script to generate all Eban Numbers <= 100.

An Eban number is a number that has no letter ‘e’ in it when the number is spelled in English (American or British).

**Example**
```
        2, 4, 6, 30, 32 are the first 5 Eban numbers.
```



## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/adam-russell/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/athanasius/perl/ch-1.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/bruce-gray/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/colin-crain/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/james-smith/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/laurent-rosenfeld/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/mattneleigh/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/perlboy1967/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/pete-houston/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/peter-campbell-smith/perl/ch-1.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/robert-dicicco/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/roger-bell-west/perl/ch-1.pl),
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/steven-wilson/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/ulrich-rieke/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/wlmb/perl/ch-1.pl), and
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/walt-mankowski/perl/ch-1.pl)

Whenever I get the chance (which admittedly isn't very often), I bring up the existence of a book by a gentleman named Ernest Vincent Wright titled [*Gadsby*](https://en.wikipedia.org/wiki/Gadsby_(novel)), and that is a work written in the English language without using the letter "e". Such efforts are known as [lipograms](https://en.wikipedia.org/wiki/Lipogram) and represent the idea of using artificial constraints in creativity; that by willfully limiting one's palette one must therefore work more creatively with the materials available.

Programming is in my eyes ultimately a creative art, and although willingly choosing to exclude easy solutions in search of difficulty is a poor use of resources in general, in specific circumstances forcing oneself to solve problems using unfamiliar techniques is good training for the inevitable unexpected circumstance.

To paraphrase: it's good training to think outside the box, because you never know when the need may arise. Even ridiculous tasks such as these still have value in problem solving and encouraging plasticity in one's thought processes, and so working out solutions can have great value in that regard.

On the other hand, I can think of no *mathematical* reason whatsoever as to why this sequence is listed in the Online Encyclopedia of Integer Sequences:

[A006933](https://oeis.org/A006933)    &nbsp; &nbsp; &nbsp; 'Eban' numbers (the letter 'e' is banned!)

... and with a fairly low number as well! For reference there are currently more than 350,000 entries in the database, so just under 7000 was... let's say some time ago. I think this shows an admirable curatorial restraint on the part of the caretakers, not to exclude a sequence simply because the only theorem one can posit from it is "in English every odd number contains an 'e'". Either that or whimsy. We can't really exclude that possibility.

But there it remains: recreational mathematicians have explored it; therefore it's in. It does appear to be as simple as that. As I use a similar philosophy to guide me in these review pages, I can find no fault with that logic.

There were 23 submissions for the first task this past week.

## A MEANS to a E-LESS END
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/peter-campbell-smith/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/colin-crain/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/roger-bell-west/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/athanasius/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/jaldhar-h-vyas/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/ulrich-rieke/perl/ch-1.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/bruce-gray/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/mattneleigh/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/wlmb/perl/ch-1.pl)

The challenge requests us to generate all the e-banned numbers less than 100, so overwhelmingly the output consisted as a list of numerals. Because of the rather unique linguistic aspect of the constraint applied, there were efforts made as well to *write out* the numbers, with the associated complications that Natural Language Programming inevitably carries along with it. One would think this would be a necessary preparation to calculating the presence of the excluded letter, but that was not always the case. We'll get to that.

Whether actually written or not the vagaries of language needed to be addressed at some point in the game, by some mechanism or another. We saw examples of various ways to discern the presence of the offending character, both using explicit searches for it in  written text or otherwise by inference, excluding cases known to contain it among their values.

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/awk/ch-1.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/bash/ch-1.sh), [Basic](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/basic/ch-1.bas), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/bc/ch-1.bc), [Befunge-93](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/befunge-93/ch-1.bf93), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/c/ch-1.c), [Cobol](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/cobol/ch-1.cb), [Csh](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/csh/ch-1.csh), [Erlang](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/erlang/ch-1.erl), [Forth](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/forth/ch-1.fs), [Fortran](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/fortran/ch-1.f90), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/go/ch-1.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/java/ch-1.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/lua/ch-1.lua), [M4](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/m4/ch-1.m4), [Mmix](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/mmix/ch-1.mms), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/node/ch-1.js), [Ocaml](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/ocaml/ch-1.ml), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/pascal/ch-1.p), [Php](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/php/ch-1.php), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/python/ch-1.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/r/ch-1.r), [Rexx](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/rexx/ch-1.rexx), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/ruby/ch-1.rb), [Scheme](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/scheme/ch-1.scm), [Sed](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/sed/ch-1.sed), [Sql](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/sql/ch-1.sql), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/tcl/ch-1.tcl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 148: Eban Numbers](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-148-1.html)

Abigail starts by listing all of the words required to spell out every word up to one hundred. If we group all of the teen words together for convenience, as they're excluded whatever their prefix, then we have only 23 terms. These are separated into groups containing the letter or not, and a regular expression is devised to match any that do.

A filter is then constructed to only pass those values that do not match and we have our eban numbers.

```perl
    # So, in short, numbers <= 100 containing an E when written in English
    # are:  - 0
    #       - contains a 1, 7, 8 or 9
    #       - ends with a 3, or 5
    #       - starts with a 2, and is followed by another digit
    #
    # Any other numbers are eban.
    #

    say join " " => grep {!/^0$ | [1789] | ^2. | [35]$/x} 0 .. 100;
```

[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/peter-campbell-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Numbers in words and Cardano triplets](https://pjcs-pwc.blogspot.com/2022/01/numbers-in-words-and-cardano-triplets.html)

Representing the other approach, the bulk of Peter's efforts seem to be focused on constructing a number-to-text translator that works for values less than one million. With such muscle under the hood I couldn't help but making a few changes and taking it out for a spin, and report that it worked flawlessly.

Obviously constructing the phrase "54062 - fifty-four thousand and sixty-two" is considerably more complicated than any found limiting our numbers to less than one hundred. Peter breaks up the process along the phrase grouping, with an outer routine to handle the thousands component and a second to take over the possibly-nested hundreds and tens. Not that "seven hundred and seventy-one thousand two hundred and eighty-three" would ever come up as an eban number, but it will, under the right circumstances, be considered.

The largest eban number less than one million, by the way, is "66066 - sixty-six thousand and sixty-six".

```perl
    # convert an integer to words (works up to 999,999)
    sub words {

        my ($number, $thousands, $words);
        $number = $_[0];

        # deal with thousands
        $thousands = int($number / 1000);
        $words = $thousands != 0 ? words3($thousands) . ' thousand' : '';

        # and the rest
        $number -= $thousands * 1000;
        $words = $words . ' and' if ($thousands != 0 and $number < 100 and $number != 0);
        $words = $words . words3($number);
        $words =~ s|.||; # remove initial blank
        return $words;
    }

    sub words3 {

        # convert 1-999 into words
        my ($number, $hundreds, $words3, $tens, $units, $hyphen);
        return 'zero' unless $number = $_[0];
        $words3 = '';

        # hundreds
        $hundreds = int($number / 100);
        $words3 = $words3 . ' ' . $digits[$hundreds] . ' hundred' if $hundreds != 0;
        $number -= $hundreds * 100;
        if ($number) {
            $words3 = $words3 . ' and' if $hundreds != 0;

            # tens and units
            $tens = int($number / 10);
            $units = $number - 10 * $tens;
            if ($tens != 1) {
            	$hyphen = ($units != 0 and $tens != 0) ? '-' : '';
            	$words3 = $words3 . ' ' . $tenties[$tens] . $hyphen . $digits[$units];
            } else {
            	$words3 = $words3 . ' ' . $teens[$units];
            }
        }

        return $words3;
    }
```






[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/colin-crain/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/colin-crain/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Numrs Without Th Lttr - Programming Excursions in Perl and Raku](https://colincrain.com/2022/01/19/numrs-without-th-lttr/)

For my own solution I produced the list two ways. And by list, I mean the list of written numbers. Somehow it never occurred to me to produce a sequence of digital numbers to a task involving scanning for the presence of a letter. Because numbers exist in a space outside of any method we choose to represent them, I think this satisfies the conditions, but note although some people wrote out their results, I was the only one to *only* write out the results and not also provide a list of numbers.

Different drummer indeed.

In any case I consider there to be a hands-down correct way to accomplish this, which to employ the services of `Lingua::EN::Numbers` to handle all the fiddly edge-cases correctly.

```perl
    ## this is the right way to do this
    use Lingua::EN::Numbers qw( num2en );
    for (0..99) {
        my $word = num2en( $_ );
        next if $word =~ /e/;
        say $word;
    }
```

However I did find myself returning to the underlying puzzle of making a set of rules to convert the digits correctly. This of course is highly irregular and weird, as numbers and numbering are some of the oldest linguistic concepts around and have had plenty of time to drift in many ways of practical convenience. Like, for instance, creating a whole separate set of words for numbers more than ten but still not very large. And even those constructs have a noticeable divergence after that presumably Babylonian base-12 "twelve" into relatively consistent "teens", although the prefixes before the "-teen" part follow their own unique expression.

In the end I chose to construct an internally-consistent, regular set of phrases and alter those to fit the exceptions. This took the form of using two lists for the digits 0 through 9 is each position, and two regular expressions to adapt the output.

Of note here is that I needed to include 0 in the lists, as it's a valid digit, but is not commonly spoken as "zero": it's implicit in the tens words: we just say "twenty", not "twenty-zero". To highlight this I chose to replace it with the unicode null as it makes the regular expression removing it easier to read. In that regex, you will notice, we also need to remove the hyphen. So many cases! But in the end I think I did distill it down to a quite simple method by doing it this way.

In another note I don't recall ever building a hash using the `qw()` construct and two columns like this before, but find it quite readable. Think I'll be doing that again. The fat comma is nice, but laid out as a table the relationship is made quite obvious.

```perl
    ## constructing written words for numbers less than 100 is a irregular and non-obvious.
    my @ones  = qw( ∅ one two three four five six seven eight nine );
    my @tens  = qw( ∅ ten twenty thirty forty fifty sixty seventy eighty ninety);
    my %teens = qw( ten-one     eleven
                    ten-two     twelve
                    ten-three   thirteen
                    ten-four    fourteen
                    ten-five    fifteen
                    ten-six     sixteen
                    ten-seven   seventeen
                    ten-eight   eighteen
                    ten-nine    nineteen );

    my @out;
    for my $t ( @tens ) {
        for my $o ( @ones ) {
            push @out, "$t-$o";
        }
    }

    for (@out) {
        s/^∅-|-?∅$//g;
        s/$_/$teens{$_}/ if $teens{$_};
    }

    shift @out;
    say $_ for grep { ! /e/ } @out;
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/roger-bell-west/javascript/ch-1.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/roger-bell-west/kotlin/ch-1.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/roger-bell-west/lua/ch-1.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 148: Eban, Cardano](https://blog.firedrake.org/archive/2022/01/The_Weekly_Challenge_148__Eban__Cardano.html)

Roger relies on two hard-coded patterns of yes/no flags for each digit in each position. This of course relies on first examining the written words to construct each key, which is an array with the corresponding index values given a 1/0 indicator.

This method in general neatly avoids much of the irregularity of the written number phrases, because, for instance, all of the numbers from 10 to 19 are excluded anyway, so mis-labeling them as "ten-two" makes no difference to the outcome. The result is an exercise in focus: what we want is the eban numbers, not necessarily a proper way to translate numbers in general from one representation to another.

```perl
    sub eban {
      my $mx=shift;
      my @units=(1,0,1,0,1,0,1,0,0,0);
      my @tens=(1,0,0,1,1,1,1,0,0,0,0);
      my @out;
      foreach my $i (0..$mx) {
        if ($tens[int($i/10)] && $units[$i%10] && $i != 0) {
          push @out,$i;
        }
      }
      return \@out;
    }
```



[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/athanasius/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/athanasius/raku/ch-1.raku)

The monk opts to do their own translation from digits to numbers, with a list of the first twenty words and rules for compounding the rest. It's a good solution avoiding much of the inherent messiness of translation.

```perl
    const my $MAX_EBAN     =>     100;
    const my @SINGLE_NAMES => qw( '' one two three four five six seven eight nine
                                  ten eleven twelve thirteen fourteen fifteen
                                  sixteen seventeen eighteen nineteen );
    const my @PREFIX_NAMES => qw( '' '' twenty thirty forty fifty sixty seventy
                                  eighty ninety );
    const my $ONE_HUNDRED  =>     'one hundred';

    for my $n (1 .. 19)
    {
        push @eban_nums, $n unless $SINGLE_NAMES[ $n ] =~ /e/;
    }

    for my $p (2 .. 9)
    {
        next if $PREFIX_NAMES[ $p ] =~ /e/;

        for my $n (0 .. 9)
        {
            push @eban_nums, $p * 10 + $n unless $SINGLE_NAMES[ $n ] =~ /e/;
        }
    }

    sub get_name
    {
        my ($n) = @_;
        my  $name;

        if ($n < 20)
        {
            $name  = $SINGLE_NAMES[ $n ];
        }
        elsif ($n < 100)
        {
            $name  = $PREFIX_NAMES[ $n / 10 ];
            $name .= '-' .
                     $SINGLE_NAMES[ $n % 10 ] if $n % 10 > 0;
        }
        else
        {
            $name  = $ONE_HUNDRED;
        }

        return $name;
    }
```

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/jaldhar-h-vyas/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/jaldhar-h-vyas/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 148](https://www.braincells.com/perl/2022/01/perl_weekly_challenge_week_148.html)

This "hybrid" method of construction — the first twenty values written out and a rule system to create the rest — allows for a very compact core logic. Jaldhar demonstrates just how small, accomplishing the task in just a few lines. The hash `%spelling` has the bulk of the terms, 1 through 19 plus 100, with the tens a carefully constructed array with the 0 and 1 indices placed yet left undefined.

```perl
    for my $n (20 .. 99) {
        my ($ten, $unit) = split //, $n;
        $spelling{$n} = $tens[$ten] . ($unit == 0 ? q{} : "-$spelling{$unit}");
    }

    say join q{, }, sort { $a <=> $b } grep { $spelling{$_} !~ /e/; } keys %spelling;
```

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/ulrich-rieke/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/ulrich-rieke/cpp/ch-1.cpp), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/ulrich-rieke/raku/ch-1.raku)

Ulrich makes a variation on this approach, but extending it into the tens as well: constructing all numbers as though the irregularities don't exist, and then filtering them on presence of the letter. Again this works fine because both "ten-one" and "eleven" are excluded anyway, so who, in the end, cares exactly how they are to be written? All of the allowed values follow the regular rules of construction, so we focus on them.

```perl
    my @less_than_ten = ( "one" , "two" , "three" , "four" , "five" , "six" , "seven" ,
          "eight" , "nine" ) ;
    my @teens = ("ten" , "twenty" , "thirty" , "forty" , "fifty" , "sixty" , "seventy" ,
          "eighty" , "ninety" , "hundred" ) ;
    my @ebanNumbers ;
    for my $i (0 .. scalar( @less_than_ten ) - 1 ) {
      if ( $less_than_ten[ $i ] !~ /e/ ) {
          push @ebanNumbers , $i + 1 ;
      }
    }
    for my $i (0 .. scalar( @teens ) - 1 ) {
      if ( $teens[ $i ] =~ /e/ ) {
          next ;
      }
      else {
          push @ebanNumbers , ( $i + 1 ) * 10 ;
          for my $j (0 .. scalar( @less_than_ten ) - 1 ) {
        if ( $less_than_ten[ $j ] !~ /e/ ) {
            push @ebanNumbers , ( $i + 1 ) * 10 + ( $j + 1 ) ;
        }
          }
      }
    }
```

[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/bruce-gray/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/bruce-gray/raku/ch-1.raku)

Bruce takes this avoiding the complexities of translation to its logical extreme. Remember, even though it has to *do* with the written words, it's not actually *about* the written words. After all, we have stuff to do. Important stuff. Stuff you wouldn't know anything about.

Stuff.

Nice compact filter, though. Kudos.

```perl
    use Modern::Perl;
    use Lingua::EN::Numbers qw<num2en>;

    say join ' ', grep { !(num2en($_) =~ /e/) } 0..100;
```





[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/mattneleigh/perl/ch-1.pl)

In considering the puzzle, its hard not to adopt a strategy of looking at the numbers involved and just crossing off excluded digits. After all, there's no mathematical basis behind which numbers are in or out. Ultimately, we are left with the choice to either create and search the textual representations, using something like a regular expression, or to do that part ourselves by hand and hard-wire the results into the code we write.

Hard-wiring a specific use-case is generally frowned upon as a bad practice, as it's a mess to alter and not well disposed to re-use. This criticism is fair and quite applicable here, but then again there's nothing about this relationship between numbers and the letter "e" that *isn't* capricious:

"The first number that would appear in the British Eban list but not the American list is 2*10^21." - Douglas Boffey, Jun 21 2012

Oh come on! Capricious is too kind.

Matthew takes a constructive approach, then: first manually extracting all of the non-eban digits from consideration before using two loops to create every combination from whats left. Again this only works because the irregular exceptions to proper construction just happen to align with the method in producing the correct results, but then of course all of the relationships "just happen" to work the way they do, so why not? YOLO, right? Hold my beer, I'm going in!

```perl
    # Tens-place and ones-place numbers that do
    # not have an 'e' in them; numbers from
    # sixty six to one hundred all have an 'e'
    # so just use a limited subset of digits
    my @tens = ( 0, 3, 4, 5, 6 );
    my @ones = ( 0, 2, 4, 6 );
    my @ebans;
    my $tens_digit;
    my $ones_digit;

    # Loop over the tens place digits
    foreach $tens_digit (@tens){
        # Loop over the ones place digits
        foreach $ones_digit (@ones){
            if($tens_digit){
                # Tens digit is not zero...
                push(@ebans, $tens_digit . $ones_digit);
            } else{
                # Tens digit is zero...
                push(@ebans, $ones_digit) if($ones_digit);
            }
        }
    }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/wlmb/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 148 – W. Luis Mochán](https://wlmb.github.io/2022/01/17/PWC148/)

Luis presents us with an amazing, compact solution using the Perl Data Language extensions... oh wait, that's madness. No, he most certainly doe *not* do that. Instead he employs the services of a much more pertinent module, `Lingua::EN::Numbers`, and its function `num2en()`. Make 'em, filter 'em, and call it a day.

This is the way.

```perl
    use Lingua::EN::Numbers qw(num2en);
    # Usage: ./ch-1.pl [upper_bound]"
    my $upper_bound=$ARGV[0]//100;
    say "The Eban numbers up to $upper_bound are";
    for(0..$upper_bound){
        say "$_ ",num2en($_)  unless (my $n=num2en($_))=~/e/
    }
```







## Blogs and Additional Submissions in Guest Languages for Task 1:


[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/arne-sommer/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/arne-sommer/raku/cardano-triplets-1)


&nbsp;&nbsp;**blog writeup:**
[Eban Cardano the Third with Raku and Perl](https://raku-musings.com/eban-cardano.html)


[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/dave-jacoby/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[It’s Triplets!: Weekly Challenge #148 | Committed to Memory](https://jacoby.github.io/2022/01/19/its-triplets-weekly-challenge-148.html)


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC148 - Eban Numbers - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/01/19/pwc148-eban-numbers/)


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/james-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #148](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-148/james-smith)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/laurent-rosenfeld/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 148: Eban Numbers and Cardano Triplets | laurent_r](http://blogs.perl.org/users/laurent_r/2022/01/perl-weekly-challenge-148-eban-numbers-and-cardano-triplets.html)


[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/robert-dicicco/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/robert-dicicco/ruby/ch-1.rb)


[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/walt-mankowski/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[perlweeklychallenge-club/challenge-148/walt-mankowski at master · manwar/perlweeklychallenge-club · GitHub](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-148/walt-mankowski#readme)


------------------------------------------





---

# TASK 2 {#PWC148TASK2}

# Cardano Triplets

*Submitted by: Mohammad S Anwar*

Write a script to generate first 5 Cardano Triplets.

A triplet of positive integers (a,b,c) is called a Cardano Triplet if it satisfies the below condition.

∛(a + b√c) + ∛(a - b√c) = 1

**Example**
```
     (2,1,5) is the first Cardano Triplets.
```



## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/adam-russell/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/arne-sommer/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/athanasius/perl/ch-2.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/bruce-gray/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/duncan-c-white/perl/ch-2FAST.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/james-smith/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/laurent-rosenfeld/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/mattneleigh/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/perlboy1967/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/peter-campbell-smith/perl/ch-2.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/robert-dicicco/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/roger-bell-west/perl/ch-2.pl),
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/steven-wilson/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/wlmb/perl/ch-2.pl), and
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/walt-mankowski/perl/ch-2.pl)

Gerolamo Cardano was a 16th century Italian mathematician, who amongst his many achievements was the publishing of one of the fundamental Renaissance works on algebra, *Ars Magna*. The publication of this work revealed some of the earliest work in solving  cubic equations, both through Cardano's efforts and those of others. As a result, his name is linked with cubic and quatric polynomials to this day.

One such link is what is known as the Cardano triplets, being parameter solutions to the equation given, which in turn bears relation to what is known as "the Cardano method" for solving cubic equations.

There were 20 submissions for the second task this past week.

## ANALYSIS of a TRIPLE THREAT
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/dave-jacoby/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/jaldhar-h-vyas/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/laurent-rosenfeld/perl/ch-2.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/robert-dicicco/perl/ch-2.pl),
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/steven-wilson/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/adam-russell/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/perlboy1967/perl/ch-2.pl),
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/james-smith/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/polettix/perl/ch-2.pl), and
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/e-choroba/perl/ch-2.pl)

Solving cubic equations is non-trivial, and producing solutions to the task at hand is subject to several complications involving the cube roots of negative numbers, which seems to have an uncanny ability to foul up algorithms for solving them. Needless to say, non-mathematicians were at a distinct disadvantage to solving this challenge, although ultimately nothing more than arithmetic was required for a brute-force assult on the problem. Assuming, of course, they could figure a way around aquiring the cube root.

To speak to that, the first difficulty encountered in solving this equation with Perl is the lack of a dedicated cube root operator, and we ended up seeing various ways of working around this, which we will have a look at. In Perl raising a value to the 1/3 power had its own unique problems for reasons hard to explain. But we'll get to that.

Another comment that arose often was the inherent lack of definition to the idea of "first" when requesting a tuple of three values. Such a classification isn't really possible, or is, but only based on what amounts to arbitrary and context-specific rules to produce an order. Rules, I might add, that remain undefined for the challenge. In the end though people managed to come up with something that made sense to them, usually the first five results from whatever algorithm they arrived at.


[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/dave-jacoby/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[It’s Triplets!: Weekly Challenge #148 | Committed to Memory](https://jacoby.github.io/2022/01/19/its-triplets-weekly-challenge-148.html)

In Perl, much to many people's consternation, raising a negative number to the 1/3 power results in `NaN`, or Not a Number. Treating this as a restriction to be circumvented, he gets around it by explicitly negating the cube root of the absolute value should it be required in the second part of the equation.

Using three nested slightly-overlapping lists Dave selects unique sets of triplets, then uses `Algorith::Permute` to try each value in each position in the equation. Or in his words, to "go through a lot of numbers and test them". Fair enough. It chews trough values and produces the requested 5 results in a small fraction of a second.

The search pattern grows incrementally until 5 solutions are found, but does have a safety value at `$i > 1000` should the process run away. But don't worry, it doesn't even get close.

```perl
    use Algorithm::Permute;

    my $i = 0;
    while ( scalar @triplets < 5 ) {
        for my $j ( 1 .. $i ) {
            for my $k ( 1 .. $j ) {
                my $p = Algorithm::Permute->new( [ $i, $j, $k ] );
                while ( my @res = $p->next ) {
                    my $t = test_cardano(@res);
                    if ( $t == 1 ) {
                        push @triplets, \@res;
                    }
                }
            }
        }
        $i++;
        last if $i > 1000;
    }

    sub test_cardano ( $a, $b, $c ) {
        my $sqrtc = sqrt $c;

        # not necessary for the first five
        if ( $a > $b * $sqrtc ) {
            return cuberoot( $a + $b * $sqrtc ) + cuberoot( $a - $b * $sqrtc );
        }

        return cuberoot( $a + $b * $sqrtc ) +
            -1 * cuberoot( abs( $a - $b * $sqrtc ) );
    }
```

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/jaldhar-h-vyas/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/jaldhar-h-vyas/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 148](https://www.braincells.com/perl/2022/01/perl_weekly_challenge_week_148.html)

Jaldhar chooses, in his words, "the absolute slowest way of slowing this" which is in my mind a perfect typo and downright poetic.

Which is to say he constructs three nested loops from one to 100 and tries fitting in the values. Remarkably for all his reservations this frontal assult takes very little time to find his solutions:

```
    2, 1, 5
    5, 1, 52
    5, 2, 13
    8, 3, 21
    11, 4, 29
```


There is one little problem remaining, though, and that is the question of testing the sum of the cube roots, obviously floats, against an integer. There are a large number of very small ways this can go wrong. To help he brings out `Math::Round`, should the result be very close to but not quite exactly right due to a floating-point error. In this case he rounds to the nearest one-thousandth place.

Floating-point epsilon factors always bother me, because I can't help but immediately try and figure out the equations going the other way, to find the first error the assumption could cause, which invariably makes my brain hurt. The actual error in the 53-bit mantissa of a Perl float should fall around 1e-13. Is 1/1000 too high? Not within the range we're looking at. Eventually? Sure.

I'll pass on figuring out exactly when an invalid triplet gets close enough to get swallowed and allowed in. It is plenty small enough to produce five correct answers, so we're good here.

```perl
    use Math::Round qw/ nearest /;

    my $count = 0;
    for my $a (1 .. 100) {
        for my $b (1 .. 100) {
            for my $c (1 .. 100) {
                my $bc = $b * sqrt($c);
                my $left = ($a + $bc) ** (1/3);
                my $x = $a - $bc;
                my $right = ($x >= 0) ? $x ** (1/3) : -abs($x) ** (1/3);
                if (nearest(0.001, $left + $right) == 1.0) {
                    $count++;
                    say join q{, }, ($a, $b, $c);
                    if ($count > 4) {
                        exit;
                    }
                }
            }
        }
    }
```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/laurent-rosenfeld/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/laurent-rosenfeld/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 148: Eban Numbers and Cardano Triplets | laurent_r](http://blogs.perl.org/users/laurent_r/2022/01/perl-weekly-challenge-148-eban-numbers-and-cardano-triplets.html)

Laurent also chooses to take a nested loop approach to produce multi-sets of three digits, allowing duplication by iterating over the full range for each position. This will produce tuples of one of each value in each positions and is slightly faster than premuting due to the lack of additional overhead.

To do the final comparison with 1 he choses an epsilon of one one-millionth.

```perl
    use constant MAX => 5;

    sub is_cardano_triplet {
        my ($a, $b, $c) = @_;
        return 0 if $a - $b * sqrt($c) > 0;
        my $val = (($a + $b * sqrt($c)) ** (1/3)) - ((- $a + $b * sqrt($c)) ** (1/3));
        # say $val;
        return abs($val - 1) < 0.000001;
    }

    my @values = 1..100;
    my $count = 0;
    OUT: for my $i (@values) {
        for my $j (@values) {
            for my $k (@values) {
                if (is_cardano_triplet $i, $j, $k) {
                    say "$i $j $k";
                    $count++;
                    last OUT if $count >= MAX;
                }
            }
        }
    }
```

[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/robert-dicicco/perl/ch-2.pl)

Robert breaks the equation into parts to make the negative cube root problem go away, placing the final difference between the additive and subtractive portions in a conditional. As the *b*√*c* term of the equation remains unchanged in both halves, it gets its own intermediate variable for clarity.

```perl
    foreach my $aval ( 1..MAX ){
        foreach my $bval ( 1..MAX ){
            foreach my $cval ( 1..MAX ){
                my $ret = isCardano( $aval, $bval, $cval );
                if( $ret == 1 ){
                    $count++;
                    print("Count: $count\t\( $aval,$bval,$cval \)\n");
                }
                last if( $count == 10 );
            }
        }
    }

    sub isCardano {
        my $a = int(shift);
        my $b = int(shift);
        my $c = int(shift);

        $bc = $b * ( $c ** (1/2) );

        my $val1 = ($a + $bc) ** (1/3);
        my $val2 = abs(($a - $bc)) ** (1/3);
        my $val3 = $val1 - $val2;

        if( $val3 < 1.000001 and $val3 > 0.999999 ){
            return 1;
        } else {
            return 0;
        }
    }
```

[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/steven-wilson/perl/ch-2.pl)

Steven imports a proper cube root function from the core `POSIX` module, along with that library's version of the square root as well. In for a penny, in for a pound.

He also sets his upper limit to 117, suggesting he's played around with this looking at a larger set of results before pulling back to the five requested.

Of note in this solution is the absence of any sort of epsilon value or rounding hedge against floating-point errors. As we have not specified the criteria for the ordering of "first 5 Cardano Triplets", and that could well be taken as the first five produced by whatever method was used, we have a valid result.

But... of note as well, the result set doesn't quite match any of the others produced, although all triples are valid. Across the field there was an extraordinary variance in the solutions offered, and in a quick survey I count at least 11 different collections of just the first five tuples. So are we missing some groupings by a slight amount and throwing that answer out unnecessarily? Sure, probably, but again: Why not?

Because I can't seem to let stuff go sometimes, substituting the line:

```perl
    if ( 0.999999 < ( cbrt( $a + $b * sqrt($c) ) + cbrt( $a - $b * sqrt($c) ) ) < 1.000001 )
```

yields different results matching some of the others. But what we have can't be considered wrong.

```perl
    use POSIX qw/ cbrt sqrt /;

    my $max     = 117;
    my $counter = 0;

    FIRST_FIVE: for my $a ( 1 .. $max ) {
        for my $b ( 1 .. $max ) {
            for my $c ( 1 .. $max ) {
                if ( ( cbrt( $a + $b * sqrt($c) ) + cbrt( $a - $b * sqrt($c) ) )
                    == 1 )
                {
                    say "($a, $b, $c)";
                    $counter++;
                    if ( $counter == 5 ) {
                        last FIRST_FIVE;
                    }
                }
            }
        }
    }
```

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/adam-russell/perl/ch-2.pl)

We can avoid the cube root entirely, however, using some algebraic transformations. By judicious application of cubing, rephrasing and cancelling out terms, the expression:

∛(*a* + *b*√*c*) + ∛(*a* - *b*√*c*) = 1

can be rearranged into:

8*a*³ + 15*a*² + 6 - 27*b*²*c* = 1

which is considerably easier to work with. Adam imports two modules to aid him, `Algorithm::Combinatorics` for its `tuples()` function, and `POSIX` for its exponentiation function `pow()`. The function `tuples` is an alias for `variations`, itself a term for permutations into a subset, *n***P***k*. It is noted in the documentation that when *n* = *k*, *k*-sized variations over the set of *n* elements is the same as permutations of the set of *n* elements. Which, you know, makes sense.

Anywho, picking 3-tuples from the list 0 to 100 (an arbitrary upper bound) is a compact (and XS-driven) way to produce the triple loop form we saw quite a bit of just now. These coefficients are then placed into the cubic polynomial to be evaluated, completely sidestepping any expensive floating-point cube root calculations.

```perl
    use POSIX;
    use Algorithm::Combinatorics q/tuples/;

    sub first_five_cardano_triplets{
        my @triplets;
        for my $tuple (tuples([0..100], 3)){
            my($s, $t, $u) = @{$tuple};
            if(8 * pow($s, 3) + 15 * pow($s, 2) + 6 * $s - 27 * pow($t, 2) * $u == 1){
            	push @triplets, [$s, $t, $u];
            }
            return @triplets if @triplets == 5;
        }
    }
```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/perlboy1967/perl/ch-2.pl)

Niels crafts his own take on a faster reworking of the algorithm by both restructuring the fundamental equation and compiling it, inline, from C source. Take *that* XS! All made possible by the `Inline` module, which many of us visited way back in [PWC 029](https://theweeklychallenge.org/blog/review-challenge-029/). Ahh, good times!

Although there is an upfront cost for firing up the compiler on the first run, the compiled subroutine is stored by `Inline` and can then be linked in quite quickly when the script is called again. Oh, and you do need access to a compiler, of course.

`Inline` also provides a handy and easy-to-manipulate test-bed for dealing directly with the Perl internal variable types, which come into play when performing more complex data hand-offs to inlined C code. If you want to get intimately acquainted with calls like:

```C
    Inline_Stack_Push( sv_2mortal(newSViv( 2 )) );
```

then `Inline` provides a convenient environment for working both sides of the puzzle to see exactly how the types interact. Learning `Inline` procedures wasn't my first reading of perlguts, but certainly helped make a lot of it make sense. And it's *way* easier than writing XS or SWIG code.

```perl
    use Inline 'C';

    my $i = 0;
    my $num = shift // 5;

    foreach my $a (1..100) {
      foreach my $b (1..100) {
        foreach my $c (1..100) {
          if (isCardano($a,$b,$c)) {
            say "($a,$b,$c)";
            $i++;
            exit if ($i >= $num);
          }
        }
      }
    }


    __END__
    __C__
    int isCardano(int a, int b, int c) {
      return 8*a*a*a + 15*a*a + 6*a - 27*b*b*c == 1;
    }
```

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/awk/ch-2.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/bash/ch-2.sh), [Basic](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/basic/ch-2.bas), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/bc/ch-2.bc), [Befunge-93](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/befunge-93/ch-2.bf93), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/c/ch-2.c), [Cobol](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/cobol/ch-2.cb), [Csh](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/csh/ch-2.csh), [Erlang](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/erlang/ch-2.erl), [Forth](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/forth/ch-2.fs), [Fortran](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/fortran/ch-2.f90), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/go/ch-2.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/java/ch-2.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/lua/ch-2.lua), [M4](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/m4/ch-2.m4), [Mmix](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/mmix/ch-2.mms), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/node/ch-2.js), [Ocaml](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/ocaml/ch-2.ml), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/pascal/ch-2.p), [Php](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/php/ch-2.php), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/python/ch-2.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/r/ch-2.r), [Rexx](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/rexx/ch-2.rexx), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/ruby/ch-2.rb), [Scheme](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/scheme/ch-2.scm), [Sed](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/sed/ch-2.sed), [Sql](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/sql/ch-2.sql), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/abigail/tcl/ch-2.tcl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 148: Cardano Triplets](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-148-2.html)

We don't need to stop there though. After reconfiguring the equation as an integer polynomial, we can go further to parameterize it according to its variables.

This is a type of challenge that really allows Abigail to show their ample abilities in mathematical problems. As demonstrated in [their excellent writeup](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-148-2.html) we can take the equation and perform a *mod* 3 to both sides. The three coefficients 15, 6, and 27 are all evenly divisible by 3, so those terms go away, and 8 *mod* 3 = 2, so the equation transforms to

2*a*³ ≡ 1 *mod* 3

⟹ *a*³ ≡ 2 *mod* 3

which in turn has the one solution

*a* = 2 + 3*k* for some *k* ∈ ℤ

When inserted back into the original polynomial this yields

*b*²*c* = (*k* + 1)² (8*k* + 5)

But wait! There's more! Abigail then goes on to make a real effort to produce the "first" five triples, by declaring an ordering by the sum of *a*, *b*, and *c*. Further steps are taken to explore whether alternate solutions that satisfy *b* and *c* for a given *k* may produce a solution "better" than one of the best five already gathered in an accumulating pile.

The whole thing is really satisfying. I'm glad they took the effort to do this and write it up.

```perl
    use Math::Prime::Util qw [divisors];
    use List::Util        qw [sum max];

    my $COUNT = 5;
    my $A     = 0;
    my $B     = 1;
    my $C     = 2;
    my $SUM   = 3;
    my @out;
    foreach my $i (0 .. $COUNT - 1) {
        $out [$i]        = [(999999) x 3];
        $out [$i] [$SUM] = sum @{$out [$i]};
    }

    my $max_index = 0;

    for (my $k = 0; 3 * $k + 2 <= $out [$max_index] [$SUM]; $k ++) {
        my $a  = 3 * $k + 2;
        my $f1 =     $k + 1;
        my $f2 = 8 * $k + 5;

        #
        # Divisors of (k + 1)
        #
        my @d1 = divisors ($f1);

        #
        # Squares of divisors of (8k + 5), which are integers.
        #
        my @d2 = grep {$_ == int ($_)} map {sqrt $_} divisors ($f2);

        #
        # Calculate all the solutions for b and c (for this k)
        #
        foreach my $d1 (@d1) {
          D2:
            foreach my $d2 (@d2) {
                my $b = $d1 * $d2;
                my $c = $f1 * $f1 * $f2 / ($b * $b);
                if ($a + $b + $c < $out [$max_index] [$SUM]) {
                    #
                    # Avoid duplicate entries
                    #
                    foreach my $info (@out) {
                        next D2 if $$info [$A] == $a && $$info [$B] == $b;
                    }

                    #
                    # Put triple in the output structure
                    #
                    $out [$max_index] = [$a, $b, $c, $a + $b + $c];

                    #
                    # Find the index of the new highest value
                    #
                    $max_index = 0;
                    my $max_sum = $out [$max_index] [$SUM];
                    for (my $i = 1; $i < $COUNT; $i ++) {
                        if ($out [$i] [$SUM] > $max_sum) {
                            $max_index = $i;
                            $max_sum   = $out [$i] [$SUM];
                        }
                    }
                }
            }
        }
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/james-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #148](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-148/james-smith)

James blasts through the processing to gather all triplets for *a* < 1000, iterating over possible values for *b* for a given *k* up until the value for *c* goes out-of-bounds, which is the same criteria used by Abigail, above.

James also has an [excellent writeup](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-148/james-smith) to guide us through his reasoning.


```perl
    ## We loop over $k from 1 .. ($N+1)/3 ## We then loop of $b until such
    ## time as the calculated value of $c < 1
    ##
    ## In this case it is (8*$k-3)*$k*$k / $b*b
    ##
    ## Trying to avoid issues with rounding due to division we can change
    ## this to just
    ##   (8*$k-3).$k*$k < $b*$b
    ##
    ## Check to see if the value of $c is an integer and if so display it.
    ##
    ## It is an integer if $n%$d is zero. Again saves rounding error issues


    for my $k (1..333) {
      for( my ($b, $n) = (1, $k*$k*(8*$k-3) ); $n > $b*$b; $b++ ) {
        say join "\t", 3*$k-1,$b,$n/$b/$b unless $n%($b*$b);
      }
    }

    ## To check the values are truly a Cardano triplet I wrote this
    ## function.

    sub is_card {
      my($a,$b,$c) = @_;
      return abs( cr($a+$b*sqrt$c) + cr($a-$b*sqrt$c) - 1 ) < 0.000001;
    }

    ## To get the cube route - the code would fail if the value
    ## was negative. The following works by finding the cube
    ## root of the absolute value. And multiplying by -1 if negative

    sub cr {
      return $_[0] < 0 ? -(-$_[0])**(1/3) : $_[0]**(1/3);
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC148 - Cardano Triplets - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/01/20/pwc148-cardano-triplets/)

If we remove the search for additional candidates for *b*, then the construction becomes quite compact:

```perl
    my $n = shift // 5;
    for my $b (1 .. $n) {
       my $a = 3 * $b - 1;
       my $c = 8 * $b - 3;

       my $sqrt = $b * sqrt($c);
       my $first = ($a + $sqrt) ** (1/3);
       my $second = ($sqrt - $a) ** (1/3);
       my $result = $first - $second;

       say "($a, $b, $c) -> $result";
    }
```


[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/e-choroba/perl/ch-2.pl)

Paraphrasing a technique [sourced to Stack Overflow](https://stackoverflow.com/a/70414782/1030675), Choroba takes a different approach, derived from the fact that the equation given directly maps to a certain cubic polynomial. The root of this polynomial is an equation quite similar to the one presented, and with some substitution the two can be equated.

This in turn, as we alluded to previously, directly relates to [Cardano's method for taking cube roots](https://en.wikipedia.org/wiki/Cubic_equation#Cardano%27s_formula).

The upshot of all this is that for the equation

 *x*³ + *px* - *q* = 0

the root is

 ∛( *q*/2 + √( (*q*/2)²+(*p*/3)³) )  +  ∛( *q*/2 - √( (*q*/2)²+(*p*/3)³ )

which you might find looks oddly familiar. From this we get

 *a* = *q*/2

and

 *b*²*c* = (*q*/2)²+(*p*/3)³

From here I might as well quote the original source:

>Since *a* is an integer, *q* must be even, and since *b*, *c* are also integers, *p* must be divisible by 3. Therefore we are interested in the equations
> *x*³ + 3*ux* - 2*a* = 0
>having 1 as a root. That narrows the problem down to searching *u*, *v* such that 1 + 3*u* - 2*a* = 0. Here *u*³ + *a*² = *b*²*c*. Notice that *u* must be odd.

Here's Choroba's solution:

```perl
    sub cardano_triplets {
        my ($count) = @_;
        for (my $u = 1; $count--; $u += 2) {
            my $A = (1 + 3 * $u) / 2;
            my $t = $u * $u * $u + $A * $A;

            my $B = int sqrt $t;
            --$B while $t % ($B * $B);

            my $C = $t / ($B * $B);

            say "$A $B $C";
        }
    }
```

and implemented another way:

```perl
    sub cardano_triplets_all {
        my ($count) = @_;
        for (my $u = 1;; $u += 2) {
            my $A = (1 + 3 * $u) / 2;
            my $t = $u * $u * $u + $A * $A;

            my $B = int sqrt $t;
            while (1) {
                --$B while $B && $t % ($B * $B);
                last unless $B;

                my $C = $t / ($B * $B);
                say "$A $B $C";
                return unless --$count;

                --$B;
            }
        }
    }
```

The methods presented, even *executed and timed together*, are rather ridiculously faster than any others put up for consideration.


## Blogs and Additional Submissions in Guest Languages for Task 2:


[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/arne-sommer/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/arne-sommer/raku/cardano-triplets-2)


&nbsp;&nbsp;**blog writeup:**
[Eban Cardano the Third with Raku and Perl](https://raku-musings.com/eban-cardano.html)


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/athanasius/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/athanasius/raku/ch-2.raku)


[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/bruce-gray/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/bruce-gray/raku/ch-2.raku)



[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/peter-campbell-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Numbers in words and Cardano triplets](https://pjcs-pwc.blogspot.com/2022/01/numbers-in-words-and-cardano-triplets.html)


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/roger-bell-west/javascript/ch-2.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/roger-bell-west/kotlin/ch-2.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/roger-bell-west/lua/ch-2.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/roger-bell-west/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/roger-bell-west/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 148: Eban, Cardano](https://blog.firedrake.org/archive/2022/01/The_Weekly_Challenge_148__Eban__Cardano.html)


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/wlmb/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 148 – W. Luis Mochán](https://wlmb.github.io/2022/01/17/PWC148/)


[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-148/walt-mankowski/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[perlweeklychallenge-club/challenge-148/walt-mankowski at master · manwar/perlweeklychallenge-club · GitHub](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-148/walt-mankowski#readme)







---

# BLOGS {#PWC148BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, by some miracle I somehow continue to maintain my bearings.**

**Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your Unquenchable *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC148BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *FOLLOW* these *BLOG* *LINKS*:

**( ...*don't think, trust your training, you're in the zone, just do it ...* )**


**Abigail**

 * [Perl Weekly Challenge 148: Eban Numbers](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-148-1.html) ( *Perl* )
 * [Perl Weekly Challenge 148: Cardano Triplets](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-148-2.html) ( *Perl* )

**Arne Sommer**

 * [Eban Cardano the Third with Raku and Perl](https://raku-musings.com/eban-cardano.html) ( *Perl & Raku* )

**Colin Crain**

 * [Numrs Without Th Lttr - Programming Excursions in Perl and Raku](https://colincrain.com/2022/01/19/numrs-without-th-lttr/) ( *Perl & Raku* )

**Dave Jacoby**

 * [It’s Triplets!: Weekly Challenge #148 | Committed to Memory](https://jacoby.github.io/2022/01/19/its-triplets-weekly-challenge-148.html) ( *Perl* )

**Flavio Poletti**

 * [PWC148 - Eban Numbers - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/01/19/pwc148-eban-numbers/) ( *Perl & Raku* )
 * [PWC148 - Cardano Triplets - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/01/20/pwc148-cardano-triplets/) ( *Perl & Raku* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 148](https://www.braincells.com/perl/2022/01/perl_weekly_challenge_week_148.html) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #148](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-148/james-smith) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 148: Eban Numbers and Cardano Triplets | laurent_r](http://blogs.perl.org/users/laurent_r/2022/01/perl-weekly-challenge-148-eban-numbers-and-cardano-triplets.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 148: eban vs cardano – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/01/19/PerlWeeklyChallenge148.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 148: eban vs cardano – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/01/19/PerlWeeklyChallenge148.html#task1pg) ( *PostgreSQL* )

**Mark Senn**

 * [Eban Numbers](https://engineering.purdue.edu/~mark/twc-148-1.pdf) ( *Raku* )
 * [Cardano Triplets](https://engineering.purdue.edu/~mark/twc-148-2.pdf) ( *Raku* )

**Peter Campbell Smith**

 * [Numbers in words and Cardano triplets](https://pjcs-pwc.blogspot.com/2022/01/numbers-in-words-and-cardano-triplets.html) ( *Perl* )

**Roger Bell_West**

 * [RogerBW's Blog: The Weekly Challenge 148: Eban, Cardano](https://blog.firedrake.org/archive/2022/01/The_Weekly_Challenge_148__Eban__Cardano.html) ( *Perl & Raku* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 148 – W. Luis Mochán](https://wlmb.github.io/2022/01/17/PWC148/) ( *Perl* )

**Walt Mankowski**

 * [Eban Numbers, Cardano Triplets](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-148/walt-mankowski#readme) ( *Perl* )
