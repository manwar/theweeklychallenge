---
author:       Colin Crain
date:         2021-11-23T00:00:00
description:  "Colin Crain › Perl Weekly Review #135"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #135"
image:        images/blog/p5-review-challenge-135.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-134/).* )

Welcome to the Perl review pages for **Week 135** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-135/) or the summary [**recap**](/blog/recap-challenge-135/) of the challenge. But don't worry, the challenges themselves are repeated and presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please feel free to email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC135TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC135TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC135BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC135TASK1}

# Middle 3-digits
*Submitted by: Mohammad S Anwar*

You are given an integer.

Write a script find out the middle 3-digits of the given integer, if possible otherwise throw sensible error.

**Example 1**
```
    Input: $n = 1234567
    Output: 345
```
**Example 2**
```
    Input: $n = -123
    Output: 123
```
**Example 3**
```
    Input: $n = 1
    Output: too short
```
**Example 4**
```
    Input: $n = 10
    Output: even number of digits
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/abigail/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/adam-russell/perl/ch-1.pl),
[**Andrezgz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/andrezgz/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/athanasius/perl/ch-1.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/bruce-gray/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/colin-crain/perl/ch-1.pl),
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/cristian-heredia/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/jo-37/perl/ch-1.pl),
[**Lance Wicks**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/lance-wicks/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/lubos-kolouch/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/mattneleigh/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/perlboy1967/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/paulo-custodio/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/pete-houston/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/peter-campbell-smith/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/sgreen/perl/ch-1.pl),
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/steven-wilson/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/ulrich-rieke/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/wlmb/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/wanderdoc/perl/ch-1.pl)


There were 30 or so working submissions for the first task this past week. I only found one that didn't do what it was supposed to, but that's life. And to be honest, I didn't look very hard. Finding fault is quite low on my priority list.  This total, 31, is up a bit in the total count; I find it fascinating how these things flow from week to week, bound by mysterious forces I will never fully know. Each of us has our own reasons for being here, and short of polling all of you I have nothing else to say but it is what it is. I don't, when it comes down to it, need to know. I am curious, though.

The task presented could accurately be said to be pretty easy, but with a bunch of little hinky bits to watch out for. So it becomes less about the puzzle and more all about the details. Locating the center of a string of digits is pretty easily doable, all in all, in a variety of ways. But what if there's no one central digit? With "middle" we do mean the-exact-center, right? Not a generalized "away from the edges" figurative gesture. No, we can't have that. And it's either the center trio or nothing. So an even number of digits simply can't work.

Don't even bring up leading zeros. You may be asked to leave.

Furthermore, we *need* three of them. Not one. Not two, unless we immediately move on to three. And not five, five is right out. Again, all or nothing. No, if we can't deliver three then we fail. We'd rather walk than take that ride.

Oh, and no one said anything about *positive* integers. Be as negative as you want around here. We're dark people. For some of us every day is Halloween. You can even be zero, if you like, we don't care. We'll throw you out, sure, for being too short. But not because you're a big fat zero. Be something, be nothing — we don't care.

But that thing in front that makes you so negative? Like a knife sliding into your gut? Yea that doesn't count, we don't want that. Keep it. Just keep it to yourself. If it's not a digit we don't want it.

And a leading negative sign throws off the character counts for the center, as we're asking for the center *digit*, so for the value -12345, we want the 234 part, with an uneven number of *characters* surrounding it, but an equal number of *digits*. Ay yi yi!

So it ends up as a lot of little rules surrounding a pretty simple ask.


## a CACOPHONY of VOICES, CRYING OUT TOGETHER on the WIND
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/adam-russell/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/dave-jacoby/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/peter-campbell-smith/perl/ch-1.pl),
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/abigail/perl/ch-1.pl),
[**Lance Wicks**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/lance-wicks/perl/ch-1.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/bruce-gray/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/mohammad-anwar/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/pete-houston/perl/ch-1.pl),
[**Andrezgz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/andrezgz/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/paulo-custodio/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/mattneleigh/perl/ch-1.pl), and
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/ulrich-rieke/perl/ch-1.pl)


Perhaps "cacophony" is a bit much, even for me. I do like to bring a bit of drama to what might otherwise be considered dry material, though. Well, I do my best, at least. I try.

As failing with specific, useful error messages is part of the directive, and we are given several examples of this to go on, I think it's necessary to require minimally at least those illustrated behaviors to be properly addressed: that we capture a the center position and the two digits surrounding; that a number should not be too short to gather three positions; that negative numbers be properly handled, as the sign does not count as a digit; and that the the center position is unambiguous and not shared — a number with an even number of digits has two equally-centered positions and is hence excluded. More failure modes are certainly welcome, such as the presence of non-digit characters, but we will assume we are given proper data so these checks aren't required. Or at least we won't fault anyone for not including them.

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/adam-russell/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/adam-russell/prolog/ch-1.p)


&nbsp;&nbsp;**blog writeup:**
[Caught in the Middle With SEDOL - Perl - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2021/10/24/perl) ( *Perl* )

&nbsp;&nbsp;**blog writeup:**
[Caught in the Middle With SEDOL - Prolog - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2021/10/24/prolog) ( *Prolog* )

Adam will start us off with his technique, which is to find the center digit, and then use `substr` to extract it and the surrounding pair. The Perl function `length` is used to look at the number as a string and count the characters, and if the value is either too short or divisible by two, indicating evenness, the appropriate error message is returned.

To deal with the possibility of a number being negative, the absolute value is applied first. The center three digits will always be a positive, or zero, value so this will never change the outcome.

There's a little trickiness involving indexing math to find the substring to extract; in this case we import `ceiling` from the POSIX module and use it to get the high end of the center position, and then subtract two to find the starting index for a string of 3 characters. The offset for the ceiling, of course, will be one more than that of the floor, so we subtract 2 instead of 1 to get the start position.

```perl
    use POSIX;
    sub middle_3{
        my($i) = @_;
        $i = abs($i);
        my $length = length($i);
        return "even number of digits" if $length % 2 == 0;
        return "too short" if $length < 3;
        my $middle = ceil($length / 2);
        return substr($i, $middle - 2, 3);
    }
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/dave-jacoby/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Middle Digits to Validation: The Weekly Challenge #135 | Committed to Memory](https://jacoby.github.io/2021/10/18/middle-digits-to-validation-the-weekly-challenge-135.html)

Dave whacks away any non-digit characters to remove a leading sign, being the only non-digit characters that could show up in an integer. And we did say we were given an integer, right? Once we allow for random nonnumeric characters we open a whole floodgate of questions, but I don't think that applies here. We are told we get an integer, and intend to keep them at their word. The length is taken and the filters applied, so we know what remains must be at least three digits and odd.

Now the fun begins. In a loop, the first and then the last digits are removed using `substr` in its replacement form, setting the character to the empty string. The input number is thus shrunk evenly from both front and back until only three digits remain.

I like this algorithm. It also happens to be the method I came up with, so perhaps I'm biased. Substring math is all well and good, but progressively trimming down our number to fit a 3-sized hole is just more fun.

```perl
    sub middle_3 ( $n ) {
        $n =~ s/\D//gmx;
        my $s = length $n;
        return 'even number of digits' if ( $s % 2 ) == 0;
        return 'too short'             if $s < 3;
        while ( length $n > 3 ) {
            substr( $n, 0,  1 ) = '';
            substr( $n, -1, 1 ) = '';
        }
        return $n;
    }
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/jo-37/perl/ch-1.pl)

After running a brief gauntlet of validation challenges, Jorg delivers us with an alternate mathematical solution to finding the center triplet:

```
    ($length - 3) / 2
```

This will lead us to the starting position, and we grab three going forward from there.

Here's the whole thing:


```perl
    sub middle_digits ($n) {
        $n = int abs $n;
        my $l = length $n;
        die "even number of digits\n" unless $l % 2;
        die "too short\n" unless $l >= 3;
        substr $n, ($l - 3) / 2, 3;
    }
```

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/abigail/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/abigail/awk/ch-1.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/abigail/bash/ch-1.sh), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/abigail/c/ch-1.c), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/abigail/go/ch-1.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/abigail/java/ch-1.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/abigail/lua/ch-1.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/abigail/node/ch-1.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/abigail/python/ch-1.py), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/abigail/ruby/ch-1.rb), [Scheme](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/abigail/scheme/ch-1.scm), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/abigail/tcl/ch-1.tcl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 135: Middle 3-digits](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-135-1.html)

Abigail does not let us down with their extraordinary approach to solving the challenge using a sequence of three chained regular expressions.

There's a lot to unpack here so let's get started.


```perl
    while (<>) {
        say /^[-+]?([0-9]*)([0-9]{3})([0-9]*)$
            (??{length ($1) == length ($3) ? "" : "(*FAIL)"})/x
                                      ? $2
          : /^[-+]?[0-9]*[^0-9].*\n/  ? "not an integer"
          : /^[-+]?(?:[0-9][0-9])*\n/ ? "even number of digits"
          :                             "too short"
    }
```

In their [blog writeup](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-135-1.html) there is an excellent breakdown of this perhaps exotic collection of regexes. The procedure is framed within a set of nested ternary operations, where an initial regex attempts to find a solution, and if that expression cannot find a result a cascading series of test regexes are triggered to properly determine what went wrong. The initial solver segment works using greedy matching to find three capture groups. In the first successful match to the required three central digits the first capture group will match the entire rest of the string, leaving the third group with no digits. If this first sub-expression succeeds with any matches, however, then the second part of the expression in evaluated, and in our first example this is set to automatically fail as the group 1 will have more characters than group 3. At this failure the engine then backtracks and tries a capture of one less character in group 1, allowing a left over digit to be matched in group 2. Continuing in this fashion, either a match in the center is made or the engine determines all possibilities have been tried and moves on.

Harnessing the backtracking behavior of the regex engine we can essentially build loop structures to iterate over ranges of possible solutions, as the engine is smart enough to not repeat itself and get itself caught in an infinite pattern of checking. It will instead alter its choices in matches between cycles until all the possiblities have been exhausted.

I love this stuff, seriously.

```perl
    /^               # Match from the beginning
     [-+]?           # An optional sign
     ([0-9]*)        # Zero or more digits; capture group $1
     ([0-9]{3})      # Exactly three digits; capture group $2
     ([0-9]*)        # Zero or more digits; capture group $3
     $               # End of string
     (??{            # Run the following code, and treat its value
                     # as a sub-pattern to be matched at this point.
         length ($1) == length ($3)  # If capture groups $1 and $3 are same length:
                 ? ""                # Match an empty string (always succeeds)
                 : "(*FAIL)"         # Else fail (and backtrack)
     })/x
```

[**Lance Wicks**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/lance-wicks/perl/ch-1.pl)

```perl
    use Digit;

    print Digit::middle( undef, $ARGV[0] );
    print;
```

Ok pack it up, boys, we're done here.

Wait, what just happened? Oh, right, he's offloaded all the actual *work* off into a separate `Digit` module. Well I suppose we'd best have a look at *that* to see how the magic happens.

```perl
    package Digit;

    sub middle {
        my ( $self, $integer ) = @_;

        $integer = abs( $integer || 0 );

        return 'Too short'             if length $integer < 3;
        return 'Even number of digits' if !( $integer % 2 );

        my @digits = split '', $integer;

        my $start = ( ( ( length $integer ) - 1 ) / 2 ) - 1;
        return join '', @digits[ $start .. $start + 2 ];
    }
```

After the usual gauntlet of error conditions, Lance considers his number as a list of digits using `split`, then uses an array slice to select only the center three to be rejoined into a scalar string, which is returned.


[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/bruce-gray/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/bruce-gray/raku/ch-1.raku)

There are many roads to the start position of the inner triple, or at least a few, and subtracting 3 from the length of the target number and then dividing the result by two seems a popular choice. Here Bruce gives us a compact solution not dissimilar to that we saw earlier from Jorg. It's a good way to do it, short and to the point.


```perl
    sub middle_three_digits {
        die if @_ != 1;
        my $a = abs shift;
        my $l = length $a;
        return 'even number of digits' if $l % 2 == 0;
        return 'too short'             if $l < 3;
        return substr $a, ($l - 3) / 2, 3;
    }
```

[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/mohammad-anwar/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/mohammad-anwar/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/mohammad-anwar/raku/ch-1.raku), [Swift](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/mohammad-anwar/swift/ch-1.swift)

Mohammad has found time in his busy schedule and is back this week with a mathematical solution. After adding a few input sanity checks: "Is there any input at all? Is what we've been given a number?", we're off to the races.

Instead of subtracting 3 from the digit count, making it even and easy to halve, instead we can halve the number and let integer truncation give us the floor. We've taken the absolute value at this point so we know the number is positive (if it were 0 it would be eliminated for being too short, and trying to be tricky, "00000" gets turned to 0 by the numeric `abs` operation so that's out too).

One less than the floor, then is the start position of out 3-digit run.

```perl
    sub middle_3_digits {
        my ($n) = @_;

        die "ERROR: Missing number."             unless defined $n;
        die "ERROR: Invalid number [$n]."        unless ($n =~ /\-?\d+/);

        my $num = abs($n);
        my $len = length($num);
        die "ERROR: Too short [$n]."             if ($len == 1);
        die "ERROR: Even number of digits [$n]." if ($len % 2 == 0);

        my $i = int($len / 2) - 1;
        return substr($num, $i, 3);
    }
```

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/pete-houston/perl/ch-1.pl)

Taking the absolute value definitely gets the job done mathematically, but in Perl we can treat our number as a string of characters and simple whack any leading negative sign we might find with a regular expression. Another regex can detect if we find any characters other than a digit, which makes sure our input is an integer.

After that we turn to math to find the start position of a substring for the center three digits.


```perl
    for (@ARGV) {
        s/^-//;
        if (/([^0-9])/)   { print "Not an integer because of '$1'\n"; next; }
        my $len = length;
        if ($len < 3)     { print "Too few digits to extract 3\n";    next; }
        unless ($len % 2) { print "Even number of digits\n";          next; }
        print substr ($_, ($len - 3) / 2, 3) . "\n";
    }

```

[**Andrezgz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/andrezgz/perl/ch-1.pl)

Andrez gives draws on a mix of techniques in his solution: mathematics to flip the sign, multiplying by -1 should it be required; regular expressions to verify that only digit characters are present in the input string; and string functions, first to count the characters and then extract the center using the substring function.

```perl
    my $n = shift;
    die "not an integer\n" if !$n || $n !~ /^-?\d+$/;

    $n *= -1 if $n < 0;
    my $l = length $n;

    die "even number of digits\n" if $l % 2 == 0;
    die "too short\n" if $l < 3;

    my $m = int($l/2) - 1;
    say substr $n, $m, 3;
```

[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/paulo-custodio/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/paulo-custodio/python/ch-1.py)

For those unfamiliar, chromatic's `Modern::Perl` pragma (my distinction between a module and pragma is clearly getting a little sketchy here. I stand my my words.) imports and enables a bunch of best practices in one simple statement. In this case the relevant features are `use strict`, `use warnings` and `use feature` for at least Perl version 5.10.

```perl
    use Modern::Perl;

    my $n = abs(shift||0);
    my $len = length($n);
    if ($len%2==0) {
        say "even number of digits";
    }
    elsif ($len<3) {
        say "too short";
    }
    else {
        say substr($n, ($len-3)/2, 3);
    }
```

[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/mattneleigh/perl/ch-1.pl)

 I rather enjoy Matthew's methodical, no-nonsense manner of systematically progressing step-wise towards his conclusions, annotating as he goes. It's all so... good form, I suppose would be one way of saying it. I've heard it said that UNIX is just text, all the way down, and of course Perl is a product of UNIX utilities, so the textual roots of Perl run deep. So use them, whenever possible, I say: as I said before it's Perl's superpower. Here we parse the input as a general-purpose string until we need to specifically derive numeric qualities from it — which we never need to do, as the only important number is the length of the string in digits.

```perl
    sub middle_three_digits{
        my $number = shift();

        my $length;

        # Get rid of any leading negative sign
        # or decimal point, and find the length
        # of the number
        $number =~ s/^-//;
        $number =~ s/\.//;
        $length = length($number);

        # Return specific messages if the
        # number isn't one we can process
        # further
        return("Not a number") if($number =~ m/\D/);
        return("Even number of digits") unless($length % 2);
        return("Too short") unless($length > 2);

        # Extract and return the middle
        # three digits
        return(
            substr($number, int($length / 2) - 1, 3)
        );

    }
```





[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/ulrich-rieke/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/ulrich-rieke/cpp/ch-1.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/ulrich-rieke/haskell/ch-1.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/ulrich-rieke/raku/ch-1.raku)

To close it out, finally we have Ulrich, who introduces the still-experimental `given/when` switch syntax to our little party. Myself, I'm a huge fan of this particular control flow structure, and find it sad that implementing the loose ends and hairy details is so problematic, such that it remains on the experimental list. From what I gather, though, without pushing the boundaries too much on the smart matching it is stable and works as advertised. To me I find the cascading list of clauses both quite readable and simple to expand upon, which can be quite useful in cases such as this where additional failure modes may become apparent and require being properly processed.

I did take the liberty of introducing the `no warnings qw( experimental )` line to keep my compiler quiet about its status, however. The feature was for a short while released from it's experimental staus but an inability to draw consensus on the correct way to handle certain situations had reverted its status back again, where unfortunately it may remain indefinitely. So depending on which Perl you are working with, YMMV.

```perl
    use feature "switch" ;
    no warnings qw( experimental );

    @ARGV = 1234567;

    my $n = $ARGV[ 0 ] ;
    while ( $n !~ /\A[+-]*\d+\z/ ) {
      say "Input should consist of possible sign and numbers only!" ;
      $n = <STDIN> ;
      chomp $n ;
    }
    my $len = length( $n ) ;
    if ( $len == 4 && substr( $n , 0 ,1 ) =~ /\+|\-/ ) {
      say substr( $n , 1 ) ;
    }
    else {
      given ($len) {
          when ( ($_ % 2 == 0)) { say "even number of digits"  }
          when ( ($_ < 3 ) and not ( $_ % 2 == 0 ) ) { say "too short" }
          when ( ( not ($_ % 2 == 0 ) ) && ( $_ > 3 )) { say
        substr( $n ,  ( $len - 3 )/ 2 , 3 ) }
      }
    }
```




## Blogs and Additional Submissions in Guest Languages for Task 1:


[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/arne-sommer/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/arne-sommer/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[SEDOL in the Middle with Raku and Perl](https://raku-musings.com/sedol-middle.html)


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/athanasius/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/athanasius/raku/ch-1.raku)


[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/cheok-yin-fung/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/cheok-yin-fung/julia/ch-1.jl)


[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/colin-crain/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/colin-crain/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[A Middling Thruppence? Do They Like Us At All?  - Programming Excursions in Perl and Raku](https://colincrain.com/2021/10/23/a-middling-thruppence-do-they-like-us-at-all/)


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC135 - Middle 3-digits - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/10/20/pwc135-middle-3-digits/)


[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/jaldhar-h-vyas/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/jaldhar-h-vyas/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 135](https://www.braincells.com/perl/2021/10/perl_weekly_challenge_week_135.html)


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/james-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #135](https://github.com/drbaggy/perlweeklychallenge-club/blob/master/challenge-135/james-smith/)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/laurent-rosenfeld/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 135: Middle 3-Digits and Validate SEDOL |aurent_r](http://blogs.perl.org/users/laurent_r/2021/10/perl-weekly-challenge-135-middle-3-digits-and-validate-sedol.html)


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: Perl Weekly Challenge 135: Valid Middle](https://blog.firedrake.org/archive/2021/10/Perl_Weekly_Challenge_135__Valid_Middle.html)


[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/sgreen/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 135](https://dev.to/simongreennet/weekly-challenge-135-g0o)


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/wlmb/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 135 – W. Luis Mochán](https://wlmb.github.io/2021/10/20/PWC135/)




------------------------------------------



---

# TASK 2 {#PWC135TASK2}

# Validate SEDOL
*Submitted by: Mohammad S Anwar*

You are given 7-characters alphanumeric SEDOL.

Write a script to validate the given SEDOL.

Print 1 if it is a valid SEDOL otherwise 0.

For more information about SEDOL, please checkout [the wikipedia page](https://en.wikipedia.org/wiki/SEDOL).

**Example 1**
```
    Input: $SEDOL = '2936921'
    Output: 1
```
**Example 2**
```
    Input: $SEDOL = '1234567'
    Output: 0
```
**Example 3**
```
    Input: $SEDOL = 'B0YBKL9'
    Output: 1
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/abigail/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/adam-russell/perl/ch-2.pl),
[**Andrezgz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/andrezgz/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/arne-sommer/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/athanasius/perl/ch-2.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/bruce-gray/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/jo-37/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/laurent-rosenfeld/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/lubos-kolouch/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/mattneleigh/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/perlboy1967/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/paulo-custodio/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/pete-houston/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/peter-campbell-smith/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/sgreen/perl/ch-2.pl),
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/steven-wilson/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/ulrich-rieke/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/wlmb/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/wanderdoc/perl/ch-2.pl)


There were 28 submissions for the second task this past week.


The SEDOL, the Stock Exchange Daily Official List, is a system of cataloging certain financial instruments used in the United Kingdom. SEDOL codes are issued by a central authority to specify specific stocks, bonds, and securities offerings presented to the marketplace, allowing differentiation using a unique alphanumeric sequence of 7 characters.

The SEDOL codes are a product of the London Stock Exchange — analogous systems in place are the CUSIP codes in the  United States and Canada and the international ISIN standard.

The 7-character alphanumeric code consists of 6 digits followed by a checksum value. To compute the checksum, each character is first given a value; numeric digits are simply their value; then the alphabetic portion follows the sequence 0 through 9 and continues counting upwards to 35.

Of note here is that although the vowels — A, E, I, O, and U — are excluded from the sequence of assignable characters, they are not excluded from the list for value calculation. Thus “B” is valued to 11, as “A”, even though it will be sequentially skipped-over and never be used, takes the value 10. Likewise “E”, the next excluded character, takes the 15 valuation, and the following character, “F” is assigned 16. 

Each derived value is then assigned a multiplier based on its digit position, from left to right:

 * 1 → 1 ×
 * 2 → 3 ×
 * 3 → 1 ×
 * 4 → 7 ×
 * 5 → 3 ×
 * 6 → 9 ×
 * 7 → 1 × (the checksum digit)

The sum of all position value products, including the checksum digit, will be a multiple of 10. Thus the checksum is that value required to make this true, to make up the difference to bring the final digit to 0.


## a DOZEN WAYS to INVEST in the FUTURE*

\* *past performance does not guarantee future earnings*

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/sgreen/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/james-smith/perl/ch-2.pl),
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/steven-wilson/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/polettix/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/cheok-yin-fung/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/athanasius/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/wlmb/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/arne-sommer/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/e-choroba/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/roger-bell-west/perl/ch-2.pl),
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/wanderdoc/perl/ch-2.pl), and
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/jo-37/perl/ch-2.pl)


As the steps to validate the SEDOL codes are well documented and designed for simplicity, there wasn't much variation in the big picture of the processes submitted. On a specific scale, though, we saw a variety of implementations to achieve each step. So on the surface there was what appeared to be a lot of self-similarity, but further exploration revealed the aspects that make each unique.





[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/sgreen/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 135](https://dev.to/simongreennet/weekly-challenge-135-g0o)

Simon will start us off today with his nicely annotated method.

After a positive validation against an approved class of alphanumeric values, Simon starts at the last digit, the checksum, and then progressively adds the other other digit's numeric value times its multiplier to the running sum. The final result is then divided modulo 10 and any digit besides a 0 means the SEDOL is invalid.

The values for the alphanumeric characters are calculated on-the-fly by either using the existing numeric value or subtracting 55 from the ASCII value, which of course assumes the alphabetic characters are in upper case. It's unclear whether this is requirement or convention in a proper SEDOL, but lowercase turns out to be permissable it's a fairly simple to standardize the lettering style.

Some submissions did address this question, but it wasn't very common at all.


```perl
    sub _is_sedol {
        my $input  = shift;
        my @weight = qw(1 3 1 7 3 9 1);

        # Check that valid characters are used. The first six
        #  characters are letters (not vowels) or numbers. The last
        #  character must be a digit.
        return 0 unless $input =~ /^[B-DF-HJ-NP-TV-Z0-9]{6}[0-9]$/;

        # Start with the last digit
        my $sum = substr( $input, 6 );
        for my $i ( 0 .. 5 ) {
            # Get the character, and work out its value.
            my $c = substr( $input, $i, 1 );
            my $v = $c =~ /[0-9]/ ? $c : ord($c) - 55;

            # Add the value to the sum multiplied by the weight
            $sum += $v * $weight[$i];
        }

        # This is a SEDOL value if it ends in a zero
        return $sum % 10 ? 0 : 1;
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/james-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #135](https://github.com/drbaggy/perlweeklychallenge-club/blob/master/challenge-135/james-smith/)

James delivers us a slightly more compact version of nearly the same process. Of note here is the aggregated assignment of the accumulator `$t` and the weights array `@w` into a single statement, and directly processing the digit elements by using `shift` repeatedly to assign each multiplier as it its corresponding element is addressed.

Again we subtract 55 from the ASCII code for the alphabetic components to obtain their numeric value.

```perl
    sub is_sedol {
    ## Check correct format... numbers and consonants only
      return 0 unless $_[0] =~ m{^[0-9B-HJ-NP-TW-Z]{6}\d$};

    ## Accumulator and weights for each charachter
      my( $t, @w ) = qw(0 1 3 1 7 3 9 1);

    ## Calculate SEDOL sum... note YODA sum -55 + ord $_ to avoid precedence issue
      $t += ( /\d/ ? $_ : -55 + ord $_ ) * shift @w for split //, $_[0];

    ## Return true (1) if total modulo 10 is 0, and false (0) otherwise
      return $t % 10 ? 0 : 1;
    }
```

[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/steven-wilson/perl/ch-2.pl)

Steven parks his logic off into [its own SEDOL module](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/steven-wilson/perl/lib/SEDOL.pm), so his script isn't immediately illuminating. However by following through and looking inside *that* file, we find two routines, one to compute the check digit, and the other to extract the check found in the candidate and compare the values.

To calculate the required (to be later compared to the actual) check digit, we can compute the product of each digit by its positional multiplier and add it to a running total in turn.


```perl
    sub get_sedol_check_digit {
        my $code   = shift;
        my @weight = qw/ 1 3 1 7 3 9 1 /;
        $code =~ /[0-9A-Z]{6}/ or die "Invalid SEDOL number, invalid character\n";
        my @code = split //, $code;
        my $sum  = 0;
        for ( my $i = 0; $i < 6; $i++ ) {
            if ( ord( $code[$i] ) < 58 ) {
                $sum += ( $code[$i] * $weight[$i] );
            }
            else {
                $sum += ( ( ord( $code[$i] ) - 64 + 9 ) * $weight[$i] );
            }
        }
        return ( ( 10 - ( $sum % 10 ) ) % 10 );
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC135 - Validate SEDOL - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/10/21/pwc135-validate-sedol/)

Next up, the "Terror of the Tiber" himself, Flavio Poletti brings us the questions and delivers the answers. Specifically, he has gone through the trouble to locate the [official documentation for the SEDOL service](https://www2.lseg.com/SEDOL-masterfile-service-tech-guide-v8.6), which definitively addresses all questions as to the encodings used.

Of note here he chooses to use a `state` variable for his weights instead of, say, a global constant. This allows the fixed data for the sub to be encapsulated in the block using it, without the tax of redeclaring it should we repeatedly call it. Although not a problem here, this is a good pattern.

Oh, and reading that manual it does appear the alphabetic characters are to be in upper case, as they are defined with the phrasing "Alpha characters are B-Z excluding vowels". Exactly what constitutes a vowel is not enumerated, however this is made clear by conspicuous absence of the characters A,E,I,O, and U from the lookup table of values provided. As the table is the definitive source rather than any description of it, we have our answer.

```perl
    use List::Util 'sum';
    sub validate_SEDOL ($s) {
       state $weights = [1, 3, 1, 7, 3, 9, 1];
       return 0 if $s !~ m{\A [0-9B-DF-HJ-NP-TV-Z]{6} [0-9] \z}mxs;
       my @s = split m{}mxs, $s;
       my $sum = sum map {
          my $n = $s[$_] le '9' ? $s[$_] + 0 : ord($s[$_]) - ord('A') + 10;
          $weights->[$_] * $n;
       } 0 .. 6;
       return $sum % 10 ? 0 : 1;
    }
    say validate_SEDOL(shift // 'B0YBKL9');
```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/perlboy1967/perl/ch-2.pl)

Niels, you will note, has added capture groups to his initial character sequence assessment and validation, isolating out the 6-digit code from the trailing check digit. From that point these captures are preserved and worked on directly, without the need for further substrings.

After splitting the code group into individual alphanumeric characters, the sequence value is calculated by summing the results of a `map` function, where each application shifts another weight off that array and multiplies it by the looked-up character value.

```perl
    sub isSEDOL($) {
      if (uc $_[0] =~ m#^([0-9B-DF-HJ-NP-TV-Z]{6})(\d)$#) {
        my ($d,$c) = ($1,$2);
        my @w = (1,3,1,7,3,9,1);
        my $i = 0;
        my %v = +map{($_,$i++)} (0..9,'A'..'Z');
        return ((10-sum(map{$v{$_}*shift(@w)}split(//,$d))%10)%10)==$c?1:0;
      } else {
        return 0;
      }
    }
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/athanasius/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/athanasius/raku/ch-2.raku)

The monk can always be relied on for extensive input validation, and this example from the esteemed scholar follows the tradition. The processing is meticulously broken down into 5 subroutines covering the steps with a main imperative block driving the action.

Of note here is the use of `Carp::Assert` to make testing assertions throughout the code for debugging, which, instead of just outputting a variable and letting us figure out the meaning, asserts what about the state should be true at that point, and notifies us if is not. This takes an active voice in commenting on the state, staying mute if everything is according to plan. In a complex routine with a variety of dynamic variables dancing about this could be a quite useful way to filter out noise in the debugging process.

On top of these assertions, there's quite a bit of relevant messaging being handed around here, so if any validation check does fail, a useful 2report is made on exactly what didn't jibe with the spec: too long, wrong characters, invalid check digit, or even a note when the check digit is correct.

```perl
    sub validate_check_digit
    {
        my ($code, $check) = @_;

        assert( length $code  == 6 ) if DEBUG;
        assert( length $check == 1 ) if DEBUG;

        my $valid   =  0;
        my $message = '';

        if ($check =~ /[0-9]/)
        {
            my $check_digit = get_check_digit( $code );

            if ($check == $check_digit)
            {
                $valid   = 1;
                $message = 'The check digit is correct';
            }
            else
            {
                $message = "Incorrect check digit: found '$check', should be " .
                           "'$check_digit'";
            }
        }
        else
        {
            $message = "Invalid check digit '$check'";
        }

        return ($valid, $message);
    }
```




[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/wlmb/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 135 – W. Luis Mochán](https://wlmb.github.io/2021/10/20/PWC135/)

One step I found interesting to look at was the various ways of assigning the lookup table of values to alphanumeric characters.

Luis' is notably compact and to-the-point,

```perl
    my %values = map {$_=> $i++} 0..9,"A".."Z";
```

Starting with the range 0 through 9, we continue with the (English) alphabetic characters, incrementing the value at each assignment. The SEDOL calculation is also quite refined, into a single conditional using `pairwise` from `List::MoreUtils`.

```perl
    use List::Util qw(all sum0);
    use List::MoreUtils qw(pairwise);
    my @weights=(1,3,1,7,3,9,1);
    my $i=0;
    my %values=map {$_=> $i++} 0..9,"A".."Z"; # compute weights
    map {$values{$_}=undef} split '', "AEIOU"; # remove vowels
    my %origin;
    $origin{6}="Asia or Africa";
    @origin{0,3}=("UK or Ireland")x2;
    @origin{4,5,7}=("Europe")x3;
    $origin{2}="America";

    foreach(@ARGV){
        say "Input: $_, Output: ", is_sedol($_);
    }
    sub is_sedol {
        my @s=split '', uc shift; # Assume lc is valid
        return "0, Need 7 chars" unless @s==7;
        return "0, Last char should be digit" unless $s[6]=~m/\d/;
        return "0, Invalid char" unless all {defined $values{$_}} @s; # valid chars
        my @v=@values{@s};
        return "0, Wrong check digit"
               unless (sum0 pairwise {$a*$b} @weights, @v)%10==0;
        return "1, End user SEDOL" if $v[0]==9; # Assume no other restriction
        return "1, New SEDOL" if $s[0] ge 'B';
        return "0, Only digits for old SEDOLs" unless  all {$_<10} @v;
        return "1, Old SEDOL, probably from $origin{$v[0]}" if defined $origin{$v[0]};
        return "1, Old SEDOL, unknown origin";
    }
```

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/arne-sommer/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/arne-sommer/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[SEDOL in the Middle with Raku and Perl](https://raku-musings.com/sedol-middle.html)

Arne enters into the fray with a nice tight version of the established steps. After verifying the basic construction using a regex, he constructs his value lookup with a mapping of a list of characters over the range of values in the table, 0 through 35. The vowel characters, already excluded, are assigned values alongside the others for convenience, even though they will never be used.

After all, this convenience appears to be the intent of construction the lookup table in this manner, skipping certain values, in the first place. We then verify in two halves: by computing the weighted sum of the first 6 values and then computing the correct check digit for that sum. We report truth or falsity based on whether that computed digit matches the string value found.

```perl
    die "SEDOL with wrong length and/or characters"
      unless $SEDOL =~ /^[0-9|BCDFGHJKLMNPQRSTVWXYZ]{6}[0-9]$/;

    my @weight = (1, 3, 1, 7, 3, 9, 1);

    my @alphabet = (0..9, 'A'..'Z');

    my %alphabet = ( map { $alphabet[$_] => $_ } (0 .. @alphabet -1));

    my $sum;

    for my $index (0..5)
    {
       $sum += $alphabet{ substr($SEDOL, $index, 1) } * $weight[$index];
    }

    my $check = (10 - ($sum % 10)) % 10;

    say 0 + (substr($SEDOL, 6) eq $check);
```



[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/e-choroba/perl/ch-2.pl)

Choroba gives us an example of newish, fairly experimental and very powerful extension of the already magnificent Perl regular expresion engine, [Extended Bracketed Character Classes](https://perldoc.perl.org/perlrecharclass#Extended-Bracketed-Character-Classes). This technique, available in some form since Perl 5.18, allows set theory to be applied to custom character classes. Wait, what? You heard me right. Set. Operations.

This is of course awesome. Here Choroba takes the starting class of all upper-case letters combined with the digits, and then subtracts the set of vowels from it. Which once you learn to read it makes it abundantly so much clearer what's going on.

This new functionality is currently very experimental and comes with a raft of warnings about potential changes as it gets implemented, with notes and bright ideas welcome. This seems to work well though, allowing you to address your target matches as concepts rather than getting bogged down in tight specifics.


```perl
    use experimental 'regex_sets';

    sub validate_sedol {
        my ($s) = @_;
        return 0 if $s !~ /\A(?[[0-9A-Z] - [AEIOU]]){$LENGTH}\z/;

        my @nums = map { $_ =~ /[0-9]/ ? $_ : ord($_) - ord 'A'} split //, $s;
        my $sum = 0;
        $sum += $nums[$_] * $WEIGHTS[$_] for 0 .. $#WEIGHTS;
        return $sum % 10 ? 0 : 1
    }
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/roger-bell-west/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/roger-bell-west/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: Perl Weekly Challenge 135: Valid Middle](https://blog.firedrake.org/archive/2021/10/Perl_Weekly_Challenge_135__Valid_Middle.html)

Roger forgoes the need for a lookup table for his alphanumeric values by computing them on-the-fly, sorting out the character classes with a control structure. Digits stay with their given value, and characters the ordinal ASCII value minus 55. Strings containing vowels or any other character are also eliminated in this step, so we only need to scan the string with one pass.

Even with the slight additional overhead from checking between digit and alphabetic status, computing only the characters actually in the code does sound more efficient than every possible outcome. It's an interesting take.

```perl
    foreach my $i (0..6) {
        my $c=substr($sedol,$i,1);
        my $n=0;
        if ($c =~ /[0-9]/) {
          $n=$c+0;
        } elsif ($c =~ /[B-Z]/ && $c !~ /[EIOU]/) {
          $n=ord($c)-55;
        } else {
          return 0;
        }
        $s+=$n*$w[$i];
    }
```

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/wanderdoc/perl/ch-2.pl)

The Doctor does a couple of unusual things: first, they use `upack` to divide the input into one 6-character and one 1-character segment. They also delay in validating the actual characters found in the first 6 positions until iterating after splitting that string segment on whitespace, for each character found either adding a new computed value to the sum or failing the data outright.


```perl
    sub _calculate_cd
    {
         my $string = $_[0];
         my @letters = 'A' .. 'Z';
         my %values;
         @values{@letters} = map $_ + 1 + 9, 0 .. $#letters;
         @values{0 .. 9} = 0 .. 9;

         my @weights = (1, 3, 1, 7, 3, 9, 1);


         my @arr = split(//, $string);
         my $sum;


         for my $i ( 0 .. $#arr )
         {
              die "Wrong code!$/" if not exists $values{$arr[$i]};
              $sum += $values{$arr[$i]} * $weights[$i];

         }
         return (10 - $sum % 10) % 10;
    }
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/jo-37/perl/ch-2.pl)

And finally, what has Jorg brought us in from the wilds? Is that a mouse or just a dried leaf? Wait, hold on, I got lost in thought there for a minute. Jorg is not a cat, but does move in mysterious ways. Or at least, I don't *think* he's a cat. You can never tell on the internet.

Ok, putting that behind us, what *do* we have here?

Well to start we have a remarkably compact hash slice assignment, assigning the values 0 through 35 to the keys 0-9, then A-Z in one fell swoop.

Nice as this is we're only getting started. Pretty much every line carries a series of gems to pick and and reveal.

Following this clean and compact assignment is the meat of the matter: a subroutine that essentially is comprised of a single complex line that takes a SEDOL at one end and returns a 1/0 result at the other. It's tempting to say `magic` and wave your hands around but let's instead pick it apart. You won't be sorry.

The line is really two halves, the left a validation regex, that, when successful, allows the right halve to execute. This side uses the `regex_sets` experimental feature we saw earlier, combining POSIX character classes to create a new class of digits and upper-case characters, yet again with the common vowels removed.

To quote Jorg, to be successful we're matching:

- seven digits

or

- no digit at start
- six digits or uppercase vowels
- followed by one digit


On the right side, we bring in `reduce_0` from `List::MoreUtils`. This little variation on the reduce idea takes a list of values and hands them one at a time to the `$b` variable, with `$a` kept as an accumulator, starting at 0. This much resembles a typical reduce function with the starting state pre-installed, versus assigning it from the first list value. Of real interest is that the topic variable `$_` also gets set to the *index* of the list element being processed, allowing us access to assign a specific weight from a parallel array to each element.

This is all well and good — but, you might say, "Um, where is the list?". This is understandable because it's not immediately obvious, although it's right there where you would expect it, hiding in plain sight. That short string of characters: `/./g`, is just a tiny regular expression matching any one character globally. This will match each character down the line and produce a 7-element list. Nifty, right? The reduced sum is taken modulo 10 and logically negated, so a 0 becomes a 1 and any true value becomes 0, which happens to be the result requested.

That's an impressively powerful little logical progression, if I do say so myself. It makes me smile. It's beautiful.

```perl
    my @weight = (1, 3, 1, 7, 3, 9, 1);
    (\my %value)->@{0 .. 9, 'A' .. 'Z'} = (0 .. 35);

    sub validate_sedol {
        local $_ = shift;

        /^ (?:
                \p{Digit} {7}
            |
                (?! \p{Digit} )
                (?[ \p{Digit} + \p{PosixUpper} - [AEIOU] ]) {6}
                \p{Digit}
            ) \z/ax &&
        !((reduce_0 {$a += $weight[$_] * $value{$b}} /./g) % 10);
    }
```






## Blogs and Additional Submissions in Guest Languages for Task 2:

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/abigail/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/abigail/awk/ch-2.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/abigail/bash/ch-2.sh), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/abigail/c/ch-2.c), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/abigail/go/ch-2.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/abigail/java/ch-2.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/abigail/lua/ch-2.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/abigail/node/ch-2.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/abigail/python/ch-2.py), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/abigail/ruby/ch-2.rb), [Scheme](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/abigail/scheme/ch-2.scm), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/abigail/tcl/ch-2.tcl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 135: Validate SEDOL](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-135-2.html)


[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/adam-russell/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/adam-russell/prolog/ch-2.p)


&nbsp;&nbsp;**blog writeup:**
[Caught in the Middle With SEDOL - Perl - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2021/10/24/perl) ( *Perl* )

&nbsp;&nbsp;**blog writeup:**
[Caught in the Middle With SEDOL - Prolog - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2021/10/24/prolog) ( *Prolog* )

[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/bruce-gray/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/bruce-gray/raku/ch-2.raku)


[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/colin-crain/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/colin-crain/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[A Middling Thruppence? Do They Like Us At All?  - Programming Excursions in Perl and Raku](https://colincrain.com/2021/10/23/a-middling-thruppence-do-they-like-us-at-all/)


[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/dave-jacoby/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Middle Digits to Validation: The Weekly Challenge #135 | Committed to Memory](https://jacoby.github.io/2021/10/18/middle-digits-to-validation-the-weekly-challenge-135.html)


[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/jaldhar-h-vyas/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/jaldhar-h-vyas/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 135](https://www.braincells.com/perl/2021/10/perl_weekly_challenge_week_135.html)

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/laurent-rosenfeld/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/laurent-rosenfeld/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 135: Middle 3-Digits and Validate SEDOL |aurent_r](http://blogs.perl.org/users/laurent_r/2021/10/perl-weekly-challenge-135-middle-3-digits-and-validate-sedol.html)


[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/paulo-custodio/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/paulo-custodio/python/ch-2.py)


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/ulrich-rieke/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/ulrich-rieke/cpp/ch-2.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/ulrich-rieke/haskell/ch-2.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-135/ulrich-rieke/raku/ch-2.raku)








---

# BLOGS {#PWC135BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, I somehow continue to maintain my bearings. Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC135BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *READ* these *BLOG* *LINKS*:

**( *don't think, trust your training, you're in the zone, just do it ...* )**


**Abigail**

 * [Perl Weekly Challenge 135: Middle 3-digits](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-135-1.html) ( *Perl* )
 * [Perl Weekly Challenge 135: Validate SEDOL](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-135-2.html) ( *Perl* )

**Adam Russell**

 * [Caught in the Middle With SEDOL - Perl - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2021/10/24/perl) ( *Perl* )
 * [Caught in the Middle With SEDOL - Prolog - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2021/10/24/prolog) ( *Prolog* )

**Arne Sommer**

 * [SEDOL in the Middle with Raku and Perl](https://raku-musings.com/sedol-middle.html) ( *Perl & Raku* )

**Colin Crain**

 * [A Middling Thruppence? Do They Like Us At All?  - Programming Excursions in Perl and Raku](https://colincrain.com/2021/10/23/a-middling-thruppence-do-they-like-us-at-all/) ( *Perl & Raku* )

**Dave Jacoby**

 * [Middle Digits to Validation: The Weekly Challenge #135 | Committed to Memory](https://jacoby.github.io/2021/10/18/middle-digits-to-validation-the-weekly-challenge-135.html) ( *Perl* )

**Flavio Poletti**

 * [PWC135 - Middle 3-digits - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/10/20/pwc135-middle-3-digits/) ( *Perl & Raku* )
 * [PWC135 - Validate SEDOL - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/10/21/pwc135-validate-sedol/) ( *Perl & Raku* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 135](https://www.braincells.com/perl/2021/10/perl_weekly_challenge_week_135.html) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #135](https://github.com/drbaggy/perlweeklychallenge-club/blob/master/challenge-135/james-smith/) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 135: Middle 3-Digits and Validate SEDOL |aurent_r](http://blogs.perl.org/users/laurent_r/2021/10/perl-weekly-challenge-135-middle-3-digits-and-validate-sedol.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 135: in aush – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2021/10/18/PerlWeeklyChallenge135.html#task1) ( *Raku* )

**Roger Bell_West**

 * [RogerBW's Blog: Perl Weekly Challenge 135: Valid Middle](https://blog.firedrake.org/archive/2021/10/Perl_Weekly_Challenge_135__Valid_Middle.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 135](https://dev.to/simongreennet/weekly-challenge-135-g0o) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 135 – W. Luis Mochán](https://wlmb.github.io/2021/10/20/PWC135/) ( *Perl* )
