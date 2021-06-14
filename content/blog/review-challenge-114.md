---
author:       Colin Crain
date:         2021-06-14T00:00:00
description:  "Colin Crain › Perl Weekly Review #114"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #114"
image:        images/blog/p5-review-challenge-114.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-113/).* )

Welcome to the Perl review for **Week 114** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

---

### Why do we do these challenges?

I suppose any answers to that would be as wide ranging and varied as the people who choose to join the team. One thing is clear: it's not a competition, and there are no judges, even if there is a "prize" of sorts. About that -- I think of it more as an honorarium periodically awarded to acknowledge the efforts we make towards this strange goal. So there's no determination to find the *fastest*, or the *shortest*, or even, in some abstract way, the *best* way to go about things, although I'm certain the individuals have their own aspirations and personal drives. As Perl is such a wonderfully expressive language, this provides quite a bit of fodder to the core idea of TMTOWTDI, producing a gamut of wonderfully varied techniques and solutions.

Even the tasks themselves are often open to a certain amount of discretionary interpretation. What we end up with is a situation where each participant is producing something in the manner they find the most interesting or satisfying. Some team members focus on carefully crafted complete applications that thoroughly vet input data and handle every use case they can think up. Others chose to apply themselves to the logic of the underlying puzzle and making it work in the most elegant way they can. Some eschew modules they would ordinarily reach for, others embrace them, bringing to light wheels perhaps invented years ago that happen to exactly solve the problem in front of them today.

I've been considering this question for some time and have found one binding commonality between all of us solving these challenges each week, in that however we normally live our lives, the task in front of us more than likely has nothing to do with any of that . And I think this has great value. We all do what we do, out in the real world, and hopefully we do it well. The Weekly Challenge provides a opportunity to do something germane to that life yet distinctly different; if we only do the things we already know how to do we only do the same things over and over. This is where the "challenge" aspect comes into play.

So we can consider the Weekly Challenge as providing a problem space outside of our comfort zone, as far out from comfort as we wish to take things. From those reaches we can gather and learn things and bring what we want back into our lives. Personally, I think that's its greatest value of all.

---

Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due. And that's why I'm here, to try and figure out how to do that.

Let's have a look and see what we can find.

---

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-114/) or the summary [**recap**](/blog/recap-challenge-114/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC114TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC114TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC114BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC114TASK1}

# Next Palindrome Number
**Submitted by: Mohammad S Anwar**<br>
You are given a positive integer $n.

Write a script to find out the next palindrome number higher than the given integer $n.

**example**
```
    input: $n = 1234
    output: 1331

    input: $n = 999
    output: 1001
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/abigail/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/adam-russell/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/athanasius/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/cheok-yin-fung/perl/ch-1.pl),
[**Christian Jaeger**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/christian-jaeger/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/colin-crain/perl/ch-1.pl),
[**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/dave-cross/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/dave-jacoby/perl/ch-1.pl),
[**David Schwartz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/dms061/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/jo-37/perl/ch-1.pl),
[**Lance Wicks**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/lance-wicks/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/laurent-rosenfeld/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/perlboy1967/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/pete-houston/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/sgreen/perl/ch-1.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/stuart-little/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/ulrich-rieke/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/wlmb/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/wanderdoc/perl/ch-1.pl)


There were 27 submissions for the first task this past week. The approaches, with a few exceptions, all fell into one of two distinct camps.

All of the techniques ultimately drew on some sort of incrementation to find the solution, with the distinction being made on how they went about doing this. The comparison between the techniques we saw could be typified as between methodical brute force and calculated precision. Or perhaps between walking — easy but slow — and using a vehicle... that you have to build first.

## COUNT and CHECK
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/adam-russell/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/arne-sommer/perl/ch-1.pl),
[**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/dave-cross/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/dave-jacoby/perl/ch-1.pl),
[**David Schwartz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/dms061/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/duncan-c-white/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/jaldhar-h-vyas/perl/ch-1.pl),
[**Lance Wicks**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/lance-wicks/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/laurent-rosenfeld/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/perlboy1967/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/sgreen/perl/ch-1.pl), and
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/ulrich-rieke/perl/ch-1.pl)

The most popular method proved to be to just start counting.

Palindromes occur at more-or-less definable intervals throughout the number line according to a quite complex underlying mathematical structure. Although the exact placement of a specific palindrome can be hard to quantify, we can identify specific recurrence patterns within the system to definitively state that there will always be another palindrome. When, exactly, this will happen is harder to specify, and the frequency is very dependent on specifically where within the range of its largest power of ten it lies.

Palindromes themselves, on the other hand, have a very simple unyielding symmetry that is quite easy to verify. So if we start counting upwards from our base number and checking, we will always eventually find the first next number that just happens to be a palindrome.

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/perlboy1967/perl/ch-1.pl)

Niels demonstrates the simple steps in the process for us. A single call to the routine produces the next value.

```perl
    sub nextPalindromeNumber($) {
      my ($n) = @_;

      do {
        $n++;
      } while ($n != reverse scalar $n);

      return $n;
    }
```

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/ulrich-rieke/perl/ch-1.pl)

**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/ulrich-rieke/cpp/ch-1.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/ulrich-rieke/haskell/ch-1.hs), [Lisp](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/ulrich-rieke/lisp/ch-1.lisp), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/ulrich-rieke/raku/ch-1.raku)

Ulrich separates off his validation into a separate routine, with a loop in the body of the script handling the incrementation. Here we see `reverse` used to reverse an array; depending on the context it can be used to either reverse an array or a string. Internally these are represented with two completely different data types, so the actions actually performed are very different, but Perl can tell the difference and the user experience has a logical consistency. Context-aware functions are just one of those really cool things about Perl.

```perl
    sub isPalindrome {
      my $number = shift ;
      return $number eq join( '' , reverse split( // , $number ) ) ;
    }

    my $N = $ARGV[ 0 ] ;
    do {
      ++$N ;
    } until ( isPalindrome( $N ) ) ;
    say $N ;
```

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/duncan-c-white/perl/ch-1.pl)

Here's another usage of `reverse` in list context from Duncan. He likes to use `Function::Parameters` for his subroutine signatures, which in turn uses the module-defined syntax keyword `fun` for its functions.

```perl
    fun ispalindromic( $n )
    {
        my $rev = join( '', reverse split( //, $n ) );
        return $n==$rev ? 1 : 0;
    }

    do
    {
        $n++;
    }
    while( ! ispalindromic($n) );
```


[**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/dave-cross/perl/ch-1.pl)

Dave, alternately to using a separate routine, sets his action up in the main body of the script using an infinite loop. This is of course safe because, as we said, there will always be another palindrome.

```perl
    while (1) {
      ++$n;

      if ($n == reverse $n) {
        say $n;
        last;
      }
    }
```

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/sgreen/perl/ch-1.pl)

Here is a nice concide version from Simon. Clean and to the point. I like clean and to the point. These things have value.

```perl
    while ( ++$number ) {
        if ( $number == reverse $number ) {
            # We have a Palindromic number
            say $number;
            return;
        }
    }
```


[**Lance Wicks**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/lance-wicks/perl/ch-1.pl)

Lance has a very interesting process, which almost always starts with creating a new module and a suite of tests to perform. Only after a certain amount of infrastructure has been developed does he proceed to the actual logic at hand.

Here is his how that works out this time around. First his `Palindrome.pm` module:

```perl
    package Palindrome;

    sub num {
        my ( $self, $N ) = @_;

        my $counter = $N + 1;
        while ( $counter ne reverse $counter ) {
            $counter++;
        }
        return $counter;
    }

    1;
```

Then we have the code that calls it. All this is a duplication of the `t::00-palindrome.t` script that organizes the testing.

```perl
    use Test2::V0 -target => 'Palindrome';

    my @cases
        = ( [ 1, 2 ], [ 9, 11 ], [ 99, 101 ], [ 999, 1001 ], [ 1234, 1331 ], );

    for my $pair (@cases) {
        my $got = $CLASS->num( $pair->[0] );
        is $got, $pair->[1], "$pair->[0] \t Expect: $pair->[1] \t\t Got: $got";
    }

    done_testing;
```

## the SMALLEST *significant* DIGIT
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/abigail/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/athanasius/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/colin-crain/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/polettix/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/jo-37/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/pete-houston/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/roger-bell-west/perl/ch-1.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/stuart-little/perl/ch-1.pl),
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/wanderdoc/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/wlmb/perl/ch-1.pl)

The brute force approach adds 1 to a candidate and tries again. But in a palindrome, the 1s place is inextricably tied to the largest positional digit, whatever that my be. Any number where these positional values do not match cannot ever be a palindrome. So it doesn't make sense to even test a number like this, if we can avoid it. The brute force approach works fine for smaller numbers, but should we get up into the range of ridiculously large values we could require counting trough quite a few candidates before finding the next palindrome.

The alternative approach was to construct a number *known* to be a palindrome from the given base number. Then, if the number is not large enough, we can increment this to the next *palindrome*, rather than just the next *number*. If done right this number will always be higher that the base and will therefore be the next larger palindrome.

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/cheok-yin-fung/perl/ch-1.pl)

CY demonstrates the idea. She gives us two routines. The first, `higher_pal()`, extracts the front half of the target number, first adding 1 to the length before dividing it in half, to get the ceiling value rather than the floor. This is important, as her next routine, `pal_from_half()` takes this "prefix" string and the same half-way length calculation, only this time computing the *floor*. By reversing the floor-length of the string and concatenating we can deal with both even- and odd-length numbers; the ceiling will contain the center digit if present, and the floor will not. If the number contains an even number of digits these two values will be the same.

This palindrome created will share the prefix digit-string with the base number, and will, depending on the lesser-position values be either above, below or equal to the base number. If it is less or equal, we need to increase the least *significant* digit, which in a palindrome is no longer the 1s place, but rather the *middle* of the number. If we move this value up, the prefix will be higher than the base number and the generated palindrome will always be higher.

```perl
    sub higher_pal {
        my $n = $_[0];
        if ($n == (10**length $n) - 1 ) {
            return (10**length $n)+1;
        }

        my $_prefix = substr($n, 0, ((length $n) + 1)/2);
        my $p = pal_from_half( $_prefixf, (length $n) % 2 );
        if ($n >= $p) {
            return pal_from_half( $_prefixf+1, (length $n) % 2 );
        }
        else {
            return $p;
        }
    }

    sub pal_from_half {
        my $s = $_[0];
        my $prefix = substr( $s  , 0 , (length $s) - $_[1] );
        my $mid = $_[1] ? substr($s, -1, 1) : "";
        my $new = join "", $prefix, $mid, reverse (split //, $prefix);
        return $new;
    }
```

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/colin-crain/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/colin-crain/raku/ch-1.raku)

Ok, I tried my best but that my have been a little confusing; this may be a little easier to follow. I refactored this for the [Raku version](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/colin-crain/raku/ch-1.raku) which is quite compact, but decided not to back-port those changes, as this is I think nice and clear. The first of the two `make_*` routines demonstrates the ceiling/floor trick, here using the difference `$len - int($len/2)` for the ceiling. In the separate, incrementing version of the routine we add 1 to the head before proceeding. Should we wish to combine the two functions in refactoring all we need to do is attach a conditional to the `$head++` operation.

```perl
    sub get_next_palindrome ($num) {
        my $base = make_p($num);
        if ($base <= $num) {
            return make_inc_p($num);
        }
        return $base;
    }

    sub make_p ($num) {
        my $len  = length $num;
        my $head = substr $num, 0, $len - int($len/2);
        my $tail = reverse substr $head, 0, $len/2;
        return $head . $tail;
    }

    sub make_inc_p ($num) {
        my $len  = length $num;
        my $head = substr $num, 0, $len - int($len/2);
        $head++;
        my $tail = reverse substr $head, 0, $len/2;
        return $head . $tail;
    }
```

[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/stuart-little/perl/ch-1.pl)

**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/stuart-little/haskell/ch-1.hs), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/stuart-little/node/ch-1.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/stuart-little/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/stuart-little/raku/ch-1.p6)

As I mentioned, much of the repetition in the code can be factored out, yielding a tight core logic. This will often to some degree be at the expense of clarity.

```perl
    my $nrDig = length $ARGV[0];

    sub doubleUp($nrDig,$initHalf) {
        return $initHalf . (($nrDig % 2) ? (scalar reverse substr($initHalf, 0,-1)) : (scalar reverse $initHalf))
    }

    my $initHalf = substr($ARGV[0], 0, ceil($nrDig/2));

    say((int(doubleUp($nrDig,$initHalf)) > int($ARGV[0])) ? (doubleUp($nrDig,$initHalf)) : (doubleUp($nrDig,$initHalf+1)));
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/jo-37/perl/ch-1.pl)

Jorg gives a nicely compact version that's both relatively easy to follow and well commented on the journey. Of note he doesn't explicitly break the number in half, instead incrementing the center digit in-place if required, before duplicating and reversing and replacing to the back using `substr` as an l-value. Both the 4-value replacement syntax and the l-value assignment versions of `substr` are amazingly powerful tools and I encourage anyone who's not familiar with these techniques to look them over and remember them.

```perl
    # There are just two cases: either mirroring the left half already leads
    # to a larger number or the left half needs to be incremented first.

    sub next_palindrome ($n) {
        # Find the innermost symmetry breaking digit pair.
        my ($l, $r);
        for (length($n) / 2 .. length($n) - 1) {
            last if ($l = substr $n, -$_ - 1, 1) != ($r = substr $n, $_, 1);
        }

        # Increment the left half if there is no asymmetry or the
        # digit in the left half is smaller than its right counterpart.
        $n += 10 ** (int length($n) / 2) if $l <= $r;

        # Mirror the left half.
        substr($n, (length($n) + 1) / 2) =
            reverse substr($n, 0, length($n) / 2);

        $n;
    }
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/roger-bell-west/perl/ch-1.pl)

**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/roger-bell-west/rust/ch-1.rs)

Roger gives us an interesting variation on the technique, breaking the action into two "modes", handling even- and odd-digit cases. Notice the special case in the middle where if a number, like the `999` second example, rolls over into an additional digit we need to adjust the mode accordingly. Again we see he's incrementing the number in-place if required, using a power of 10 multiplier to get to the correct digit.



```perl
    sub npn {
      my $n=shift;
      my ($i,$m);
      my $l=length($n);
      if ($l % 2 == 0) {
        $i=substr($n,0,$l/2);
        $m=1;
      } else {
        $i=substr($n,0,($l+1)/2);
        $m=0;
      }
      $i--;
      my $pn=0;
      while ($pn <= $n) {
        my $f=length($i);
        $i++;
        if (length($i) > $f) {
          if ($m==0) {
            $m=1;
            $i=10**($f-1);
          } else {
            $m=0;
            $i=10**$f;
          }
        }
        my $k=reverse($i);
        if ($m==0) {
          $pn=$i . substr($k,1);
        } else {
          $pn=$i . $k;
        }
      }
      return $pn;
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/polettix/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/polettix/raku/ch-1.raku)

More `substr` fun from Flavio! He avoids some messiness by making a special case for when the number is composed entirely of 9s, which is the only case that will roll over into the next higher range of digit-length. After that he makes two cases depending on whether there is a central pivot digit.

```perl
    sub next_palindrome_number ($N) {
       my $l = length $N;
       return '1' . ('0' x ($l - 1)) . '1' unless $N =~ m{[0-8]}mxs;
       my $n = substr $N, 0, $l / 2;
       my $mid = $l % 2 ? substr($N, $l / 2, 1) : '';

       # just try to build straight from the inputs...
       if ((my $candidate = $n . $mid . reverse($n)) > $N) {
          return $candidate;
       }

       # if there's a "$mid", try increasing that
       if ($l % 2) {
          return $n . ($mid + 1) . reverse($n) if $mid != 9;
          $mid = 0;
       }

       ++$n;
       return $n . $mid . reverse($n);
    }
```

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/abigail/perl/ch-1.pl)

**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/abigail/awk/ch-1.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/abigail/bash/ch-1.sh), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/abigail/c/ch-1.c)

For any skeptics out there, Abigail takes the logic I've outlined above and applies a [rigorous mathematical analysis to it](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-114-1.html). I didn't doubt myself but this is very nice to read. They also add an additional special case for single digit palindromes that aren't 9, which just add 1. This follows straight from the normal rules of incrementing the center, only here that's the whole number.

```perl
    if (/^9+$/) {
        say $_ + 2;
        next;
    }

    if (length ($_) == 1) {
        say $_ + 1;
        next;
    }

    #
    # Split the number into parts 2 equal parts, with a middle part
    # of at most one digit.
    #
    my $part1 = substr $_, 0, int length ($_) / 2;
    my $part2 = substr $_,    int length ($_) / 2,  length ($_) % 2;
    my $part3 = substr $_,    int length ($_) / 2 + length ($_) % 2;

    if (reverse ($part1) <= $part3) {
        $part1 = "$part1$part2" + 1;
        $part2 = chop $part1 if length $part2;
    }
    say $part1, $part2, scalar reverse ($part1);
```


## here THERE BE DRAGONS
[**Christian Jaeger**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/christian-jaeger/perl/ch-1.pl)

Christian is back with another installment from his amazing `FunctionalPerl` framework. It's a monumental effort; I just had a look over on metacpan and counted 140 modules. It's still very much a work-in-progress, mind you, with large notes on its alpha and evolutionary state on the accompanying [documentation and blog](http://functional-perl.org/index.xhtml).

Currently Christian is using the PWC as a test-bed for the technology, which I think is great for everybody. What we both end up with are a set of examples that can be examined through a variety of comparative lenses to help us understand what's being developed.

He gives us implementations of both algorithms we've seen today. In the brute force version, we have a lazy list generator directed to a generalized `grep`-like `filter()` validating against a routine using a custom `reverse`, directed again to find the first instance through the filter. Huh. Not too hard to follow, I suppose.

```perl
    sub is_palindrome($n) {
        "$n" eq string_reverse "$n"
    }

    sub next_palindrome_number__brute($n) {
        stream_iota($n + 1)->filter(\&is_palindrome)->first
    }

    sub string_reverse ($str) {
        my $out  = "";
        my $len  = length $str;
        my $last = $len - 1;
        for (0 .. $last) {
            substr($out, $_, 1) = substr($str, $last - $_, 1);
        }
        $out
    }
```

Now here's the second solution, broken down functionally. This, on the other hand, arguably looks quite familiar, more like standard Perl. The functional extensions and methodology does no *need* to break our brains, which is nicely reassuring. More at the [blog writeup for this week](http://functional-perl.org/docs/blog/perl_weekly_challenges_114.xhtml). I look forward to the next installment.

```perl
    sub complete_odd($left) {
        $left . string_reverse substr $left, 0, length($left) - 1
    }

    sub complete_even($left) {
        $left . string_reverse $left
    }

    TEST { complete_odd 991 } '99199';
    TEST { complete_even 991 } '991199';

    sub complete ($left, $is_oddlen, $n) {
        my $n2 = $is_oddlen ? complete_odd $left : complete_even $left;
        warn "complete($left, $is_oddlen, $n), n2=$n2" if $verbose;
        if ($n2 <= $n) {
            my $left2      = $left + 1;
            my $is_overrun = length($left2) > length($left);
            unless ($is_overrun) {
                complete($left2, $is_oddlen, $n)
            } else {
                if ($is_oddlen) {
                    complete(substr($left2, 0, length($left2) - 1), 0, $n)
                } else {
                    complete($left2, 1, $n)
                }
            }
        } else {
            $n2
        }
    }

    sub next_palindrome_number__optim($n) {
        my $str = "$n";          # yeah, not necessary, but I like to be explicit
        my $len = length $str;
        my $leftlen = int($len / 2 + 0.5);
        my $left    = substr $str, 0, $leftlen;
        complete $left, is_odd($len), $n
    }
```




## Additional Submissions in Guest Languages
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/adam-russell/perl/ch-1.pl)

**additional languages:**
[Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/adam-russell/prolog/ch-1.p)

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/arne-sommer/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/arne-sommer/raku/ch-1.raku)

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/athanasius/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/athanasius/raku/ch-1.raku)

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/jaldhar-h-vyas/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/jaldhar-h-vyas/raku/ch-1.raku)

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/laurent-rosenfeld/perl/ch-1.pl)

**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/laurent-rosenfeld/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/laurent-rosenfeld/raku/ch-1.raku), [Scala](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/laurent-rosenfeld/scala/ch-1.scala)








------------------------------------------





---

# TASK 2 {#PWC114TASK2}

# Higher Integer Set Bits
*Submitted by: Mohammad S Anwar*<br>
You are given a positive integer $N.

Write a script to find the next higher integer having the same number of 1 bits in binary representation as $N.

**Example**
```
    Input: $N = 3
    Output: 5

        Binary representation of $N is 011. There are two 1 bits. So
        the next higher integer is 5 having the same the number of 1
        bits i.e. 101.

    Input: $N = 12
    Output: 17

        Binary representation of $N is 1100. There are two 1 bits. So
        the next higher integer is 17 having the same number of 1 bits
        i.e. 10001.
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/abigail/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/adam-russell/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/arne-sommer/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/athanasius/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/colin-crain/perl/ch-2.pl),
[**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/dave-cross/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/dave-jacoby/perl/ch-2.pl),
[**David Schwartz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/dms061/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/jo-37/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/laurent-rosenfeld/perl/ch-2.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/mohammad-anwar/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/perlboy1967/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/sgreen/perl/ch-2.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/stuart-little/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/ulrich-rieke/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/wlmb/perl/ch-2.pl)


There were 23 working submissions for the second task this past week. Much like the first task, we saw a great many brute force approaches, with the remainder of the solutions working around a common method for computing the correct solution directly. In this case, though, the actual implementations of the second method varied quite a bit while performing what amounted to the same actions, which I found both unusual and quite interesting. They're all essentially the same algorithm — only the methods used to actually move the bits around differ.

## brute force
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/adam-russell/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/arne-sommer/perl/ch-2.pl),
[**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/dave-cross/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/dave-jacoby/perl/ch-2.pl),
[**David Schwartz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/dms061/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/polettix/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/laurent-rosenfeld/perl/ch-2.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/mohammad-anwar/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/perlboy1967/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/sgreen/perl/ch-2.pl), and
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/ulrich-rieke/perl/ch-2.pl)

In the brute force approach, we first need a mechanism to count the set bits in a number. Once we have this, we apply it to find our target value to meet, then start counting upward from our base value, recalculating the bit count for each new number as it comes along. The first number whose count matches our target wins. Let the games begin.

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/arne-sommer/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/arne-sommer/raku/ch-2.raku)

Arne will start us off today with a demonstration of the method. After gathering the initial count of 1s, he steadily increments the value in an infinite loop and compares the new count with the saved original value. Eventually the original count will come around again and we have our solution.

```perl
    my $ones = sum(split(//, sprintf('%b', $N)));

    while ($N += 1)
    {
      if (sum(split(//, sprintf('%b', $N))) == $ones)
      {
        say $N;
        exit;
      }
    }
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/dave-jacoby/perl/ch-2.pl)

In his `hisb()` routine Dave makes sure to use `sum0`, which will always return a 0 in the case of null data, because, you know, just in case.

```perl
    sub hisb ( $n ) {
        my $m = $n;
        my $b = sum0 split m{}, sprintf '%b', $m;
        while (1) {
            $m++;
            my $d = sum0 split m{}, sprintf '%b', $m;
            return $m if $b == $d;
        }
    }
```

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/duncan-c-white/perl/ch-2.pl)

Duncan gives us an alternative way to count his 1s, bitshifting away his value and noting whether the current version is even or odd. An interesting take on the matter.

```perl
    while( $n > 0 )
    {
    	$result++ if $n%2==1;
    	$n >>= 1;
    }
```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/perlboy1967/perl/ch-2.pl)

Here Niels counts his bits by splitting his binary into an array and filtering for 1s using `grep`. The size of the remaining array is the count.

```perl
  my $nBitsSet = scalar(grep/1/,split(//,sprintf('%b',$n)));
  do {
    $n++;
  } while ($nBitsSet != scalar(grep/1/,split(//,sprintf('%b',$n))));
```

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/ulrich-rieke/perl/ch-2.pl)

**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/ulrich-rieke/cpp/ch-2.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/ulrich-rieke/haskell/ch-2.hs), [Lisp](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/ulrich-rieke/lisp/ch-2.lisp), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/ulrich-rieke/raku/ch-2.raku)

Ulrich gave us a novel conversion from decimal to binary that deserves a look. While steadily dividing the number down by 2, we `unshift` the modulo with 2 onto an array, indicating whether at that point the number is even or odd. This is a generalized version of using bitshifts to find the individual position of various bits within the underlying number, a technique we'll see more of later.

```perl
    sub toBinaryString {
      my $number = shift ;
      my @digits ;
      while ( $number != 0 ) {
          unshift ( @digits , $number % 2 ) ;
          $number = int( $number / 2 ) ;
      }
      return join( '' , @digits ) ;
    }
```

[**David Schwartz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/dms061/perl/ch-2.pl)

And finally David gives us a nice example of using `tr///` to count the instances of 1s within the binary representation, here created using a `sprintf` format conversion.

For those that don't know, the `tr///` operator works on a translation table built at compile time, and hence is orders of magnitude faster than a regular expression. It's really a tool to remember, and very efficient at doing what it does, if that happens to be  what you need. It returns the number of translations it makes, making if very effective at counting instances of characters within strings.

```perl
    sub count_ones {
        my $n = shift;
        # sprintf "%b, $n" creates a bitstring for $n and
        # tr/1// counts the number of 1s in the string
        return sprintf("%b", $n) =~ tr/1//;
    }

    my $count = count_ones $n;
    do { ++$n; } until count_ones ($n) == $count;
    print "$n\n";
```





## the TRIP-CARRY APPROACH

Ok so, to be clear: I just made that name up. But it works for me as a good description for a two-stage process that typifies a way for directly calculating the solution.

In this class of methods we look to the right side of the binary representation, for the rightmost string of 1s followed by some number of 0s to the end of the number. We need at least one 1, but no zeros is ok. We're looking for the whole string of 1s, so these set bits will be preceded by a 0. What we want to do is add a 1 bit to this in such a way as cause the whole sequence to carry, hence my name for it. Then in step two of the process we need to replace the 1s we tripped to 0s, down in the least significant digits of the new number, something we can do by adding a power of 2 minus 1.

Of course the 1s we trip to 0s in this version of events already exist, and we can accomplish the same goals by rearranging the set bits we already have, ensuring the bit count remains the same. Instead of carrying the addition we could just move the head of the string of 1s one position to the left and any remaining 1s all the way to the right.

This algorithm can be expressed in many ways with the same result. As mentioned, one of the most popular was to find the rightmost match ot `01`, switch these bits and move any 1s to the right of the switch to the right end of the bit string. This accomplishes the same actions as the first way I described things without treating the value as a number at all, but rather just as a string of characters that happen to be 1s and 0s. But even here we saw this done in different ways, with both `substr` functions and regular expressions coming into play. And switching our viewpoint back again, it was also possible to effect the same changes logically, applying bitwise operations directly to the underlying binary representation. In short, a whole lot o' ways to do it. Grab a handful and get it done.

So whether we treated the number as bits, or bit strings, or some hybrid technique, in the end it didn't matter, as the same changes were made and the same number being produced.

The approaches we saw roughly fell into a few broad categories:

### using a REGEX
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/abigail/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/james-smith/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/roger-bell-west/perl/ch-2.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/stuart-little/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/wlmb/perl/ch-2.pl)

Regular expressions excel at selecting parts of strings, removing, altering and rearranging them. With care they can accomplish everything we need to do to make this work.

[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/stuart-little/perl/ch-2.pl)

**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/stuart-little/haskell/ch-2.hs), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/stuart-little/node/ch-2.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/stuart-little/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/stuart-little/raku/ch-2.p6)

Here Stuart demonstrates manipulating the binary 1s and 0s using regular expressions. There are a couple of unusal syntactic devices he uses to check out here. In the first line he prints out the input in a binary representation, using the opportunity to assign the `sprintf` formatting to a variable along the way. In the second line one of two regexes are applied, depending on whether the input is even or odd. This divisibility determines whether or not there are any trailing 0s to handle. In the third line we see a string `eval` used to convert back to decimal, instead of the more pedestrian `oct`. On this last part, I didn't know you could do this. Huh.

```perl
    say "Initial number in base two: ", my $binNr = sprintf("0%b", $ARGV[0]);
    say "Next number in base two: ", my $next = (($ARGV[0] % 2) ? ($binNr =~ s!01(1*)$!10$1!r) : ($binNr =~ s!01(1*)(0*)$!10$2$1!r));
    say "Next number in base ten: ", eval qq!0b$next!;
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/roger-bell-west/perl/ch-2.pl)

**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/roger-bell-west/rust/ch-2.rs)

Roger takes a slightly different approach to his expression, matching:
1. everything before an instance of "01",
2. that pair, then
3. everything after that fits the pattern of some number of 1s followed by some number of 0s.

The second capture is duplicated twice; in the first copy all of the 1s are removed, in the second all the 0s. Then he can manually reassemble the parts to construct a new binary representation that is converted back to decimal.
```perl
    sub hisb {
      my $n=shift;
      my $s='0'.sprintf('%b',$n);
      $s =~ /^(.*?)01(1*0*)$/;
      my ($a,$c)=($1,$2);
      (my $t0=$c) =~ s/1+//g;
      (my $t1=$c) =~ s/0+//g;
      return oct('0b' . $a . '10' . $t0 . $t1);
    }
```

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/abigail/perl/ch-2.pl)

**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/abigail/awk/ch-2.gawk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/abigail/bash/ch-2.sh), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/abigail/c/ch-2.c)

```perl
    say oct sprintf ("0b0%b" => $_) =~ s {01(1*)(0*)$} {10$2$1}r while <>;
```

"That's it?" You say. Why yes, yes it is. Let's unpack this. We take a number from standard input, then `sprintf` it into a binary string with at least one leading 0. Then this string is matched with an expression anchored to the end of the string: first the "01", which is why we added that extra 0 should it be required, then a block of 0 or more 1s, then a block of 0 or more 0s, with both blocks captured. We then substitute in this match's stead a switched string "10" for the opening part, then the second capture, then the first. This moves the 1 one position forward, followed by the initial 0, then the rest of the 0s, then all the 1s. The binary number is then converted back to decimal and printed. If you find yourself still looking for further explanation, I encourage you to go and [read Abigail's writeup on the task](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-114-2.html). It's good stuff.




### BINARY MATH and BIT SHIFTING
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/colin-crain/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/jaldhar-h-vyas/perl/ch-2.pl), and
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/james-smith/perl/ch-2.pl)

When I looked at the problem, I printed out some binary representations of numbers in sequence. I analysed the way the number of set bits rose and fell, then devised a solution based on directly manipulating the bits, rather than a string representations of them.

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/colin-crain/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/colin-crain/raku/ch-2.raku)

For my own solution, I broke the steps down into a series of discreet functions. Here we trip the carry, so to speak, then add back enough 1s to fill the difference between the number of 1s we have versus the number we need.

The missing routines:
* `hamming()` counts the set bits, the Hamming weight.
* `lowsig()` returns the 0-based position of the least significant 1.
* `ones()` returns a binary sting of 1s of the correct length, which is the number 2<sup>*n*</sup> - 1.

```perl
    sub next_hamming_weight( $num ) {
        my $ham  = hamming( $num );
        my $trip = trip_carry($num);
        my $next = $trip + ones( $ham - hamming($trip) );
        return $next;
    }

    sub trip_carry ($num) {
    ## given a number, trip the carry on the lowest significant set bit
    ## 10101110 -> 10110000
        my $ls   = lowsig($num);
        my $trip = 2**$ls;
        return $num + $trip;
    }
```


[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/jaldhar-h-vyas/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/jaldhar-h-vyas/raku/ch-2.raku)

Jaldhar has unearthed for us a really interesting bitwise solution, acting directly on the underlying bits without ever needing to represent the values in binary notation. Essentially we find the leftmost 1 and add it back to the number, triggering the carry cascade. An exclusive OR isolates the string of 1s, with an additional 1 added in the carrying. This number has 2 more 1s than we need to keep the bit count the same, the carry 1 just mentioned and the 1 we added. A little further bit manipulation moves these to the least significant bits, after bitshifting the 2 extra values off. Summing this to the carried value gives us our result. His source calls this program "Same Number Of One Bits", or SNOOB.

[More at his writeup.](https://www.braincells.com/perl/2021/05/perl_weekly_challenge_week_114.html)

```perl
    my $N = shift // die "Need integer argument\n";
    my $rightmostOneBit = $N & -$N;
    my $nextHigherOneBit = $N + $rightmostOneBit;
    my $rightOnesSequence = $N ^ $nextHigherOneBit;

    $rightOnesSequence /= $rightmostOneBit;
    $rightOnesSequence >>= 2;

    say $nextHigherOneBit | $rightOnesSequence;
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/james-smith/perl/ch-2.pl)

James gave us, as usual, a bevy of solutions, gradually refined for performance.

He starts us with a regular expression much like we've seen previously:

```perl
    sub next_bin_rex {
      return oct '0b'.sprintf('0%b',shift) =~ s{01(1*)(0*)$}{10$2$1}r;
    }
```

It works well, he notes, but could be faster. To that end he replaces the regex with an alternative, using `rindex` and `substr`:

```perl
    sub next_bin_rrev {
      my $t = rindex my $s = sprintf('0%b',shift),'01';
      return oct '0b'.substr($s,0,$t).'10'.reverse substr $s,$t+2;
    }
```

Which brings us here. In his [detailed analysis](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-114/james-smith#the-solution---with-go-faster-stripes) he lays out his progression, with the last step mirroring this bitwise technique. adding first a value to trip the carry and then a value to make up the missing 1s:

```perl
    sub next_bin_rindex2ns {
      my $t = rindex my $s = sprintf('%b',$_[0]),'1';
      return $_[0] - 1 + (1<<(-1-$t+length$s)) + (1<<(-1+$t-rindex $s,'0',$t));
    }
```

### direct CONSTRUCTION
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/athanasius/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/cheok-yin-fung/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/e-choroba/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/james-smith/perl/ch-2.pl), and
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/jo-37/perl/ch-2.pl)

By now we've seen ways to manipulate binary representations as strings, and determine the positions of various set bits within a number so we can use bitwise operators to directly manipulate the positions. Between knowing *about* the bits we have and the bits we need, and *where* those bit lie, various schemes were presented to build the numbers, or parts of the numbers, from scratch.

I think we're still pretty solidly within the algorithm though, as the overlying structure  determines how we know where to place the 1s and 0s.

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/jo-37/perl/ch-2.pl)

Jorg gives us another installment from the module `Math::Prime::Util`, this time a pair of functions `todigits` and `fromdigits` to convert back and forth from decimal notation to an array of 1s and 0s. Having an array to work with, he then uses `firstidx` from `List::MoreUtils` to locate the position of the 0 before that string of 1s we've been referencing all over the place today, by reversing the array and counting from the end. Along the way he counts the 0s he finds as well, which in turn gives him the number of 1s in the segment.

He then has what he needs to construct the number from raw materials:

>Assemble the new number from:
> - all bits preceding the identified 0-bit
> - the 0 flipped to 1
> - one more 0 than the number of subsequent 0.
> - one less 1 than the number of subsequent 1.

```perl
    sub num_bits_next ($n) {
        # Convert the number to its binary representation with a leading 0.
        my @bits = (0, todigits $n, 2);

        # Find the position of the least significant 0-bit that has a
        # subsequent 1-bit and count the number of 1-bits on the way.
        my $bits;
        my $zero = $#bits - firstidx {
            $bits && !$_ ? 1 : ($bits += $_, 0);
        } reverse @bits;

        # Assemble the new number
         fromdigits [
            @bits[0 .. $zero - 1],
            1,
            (0) x (@bits - $zero - $bits),
            (1) x ($bits - 1)
        ], 2;
    }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/e-choroba/perl/ch-2.pl)

Choroba lends us a brace of solutions, with first a brute force approach, which I'll mention because of his use of `unpack` to count his 1s:

```perl
    1 until $bits == unpack '%b*', pack 'l', ++$n;
```

This is just the opening act though. The main event is his constructive method, using `rindex` to find the first transition from a 0 to a 1 from the right side of the binary string. From there he can count the number of 1s in the after section, and build the number from there.

```perl
    if (-1 != (my $pos = rindex $binary, '01')) {
        substr $binary, $pos, 2, '10';
        my $suffix = substr $binary, $pos + 2, length $binary, "";
        my $ones = $suffix =~ tr/1//d;
        $suffix .= 1 x $ones;
        return oct "0b$binary$suffix";
    }
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/athanasius/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/athanasius/raku/ch-2.raku)

Finally, in the monk's `solve()` routine we can clearly see how they look, searching from the end, for the transition from the last 1 back to 0. This would be that same rightmost "01" we've seen throughout the solutions. From there we can witness them assembling the rest of the number from parts.

```perl
    sub solve
    {
        my ($N, $N_bin, $N_ones) = @_;
        my  @N_digits = split //, $N_bin;
        my  $found_1  =  0;
        my  $S_bin    = '1';
        my  $zero_i;

        for my $i (reverse 1 .. $#N_digits)
        {
            if ($found_1)
            {
                $zero_i  = $i, last if $N_digits[ $i ] == 0;
            }
            else
            {
                $found_1 = 1        if $N_digits[ $i ] == 1;
            }
        }

        if (defined $zero_i)
        {
            $S_bin .= substr $N_bin, 1, $zero_i - 1;
            $S_bin .= '1';

            my $ones_diff = $N_ones - $S_bin =~ tr/1//;

            $S_bin .= '0' x (length( $N_bin ) - length( $S_bin ) - $ones_diff);
            $S_bin .= '1' x  $ones_diff;
        }
        else
        {
            $S_bin .= '0' x (length( $N_bin ) - $N_ones + 1);
            $S_bin .= '1' x ($N_ones - 1);
        }

        return $S_bin;
```


## Additional Submissions in Guest Languages

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/adam-russell/perl/ch-2.pl)

**additional languages:**
[Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/adam-russell/prolog/ch-2.p)


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/polettix/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/polettix/raku/ch-2.raku)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/laurent-rosenfeld/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/laurent-rosenfeld/raku/ch-2.raku), [Scala](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-114/laurent-rosenfeld/scala/ch-2.scala)








------------------------------------------





---

# BLOGS {#PWC114BLOGS}

---

**That's it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, I somehow continue to maintain my bearings. Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC093BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *READ* these *BLOG* *LINKS*:

**( *don't think, trust your training, you're in the zone, just do it ...* )**


**Aaron Smith**

 * [Perl Weekly Challenge 114 - Aaron Smith](https://aaronreidsmith.github.io/blog/perl-weekly-challenge-114/) ( *Raku* )

**Abigail**

 * [Perl Weekly Challenge 114: Next Palindrome Number](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-114-1.html) ( *Perl* )
 * [Perl Weekly Challenge 114: Higher Integer Set Bits](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-114-2.html) ( *Perl* )

**Adam Russell**

 * [The Weekly Challenge 114 — Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2021/05/30) ( *Perl* )
 * [The Weekly Challenge 114 — Prolog — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2021/05/30) ( *Perl* )

**Arne Sommer**

 * [Palindromic Set with Raku and Perl](https://raku-musings.com/palindromic-set.html) ( *Perl & Raku* )

**Christian Jaeger**

 * [Perl weekly challenges 114 - functional-perl.org](http://functional-perl.org/docs/blog/perl_weekly_challenges_114.xhtml) ( *Perl* )

**Colin Crain**

 * [Your New Pal Knows the Weight of Ham — Programming Excursions in Perl and Raku](https://colincrain.com/2021/05/30/your-new-pal-knows-the-weight-of-ham/) ( *Perl & Raku* )

**Dave Jacoby**

 * [Escape From The Infinite Loop: Perl Weekly Challenge #114 | Committed to Memory](https://jacoby.github.io/2021/05/24/escape-from-the-infinite-loop-perl-weekly-challenge-114.html) ( *Perl* )

**Flavio Poletti**

 * [PWC114 - Next Palindrome Number - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/05/26/pwc114-next-palindrome-number/) ( *Perl & Raku* )
 * [PWC114 - Higher Integer Set Bits - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/05/27/pwc114-higher-integer-set-bits/) ( *Perl & Raku* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 114](https://www.braincells.com/perl/2021/05/perl_weekly_challenge_week_114.html) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #114](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-114/james-smith) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 114: Next Palindrome Number and Higher Integer Set Bits | laurent_r](http://blogs.perl.org/users/laurent_r/2021/05/perl-weekly-challenge-114-next-palindrome-number-and-higher-integer-set-bits.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 114: palindrome and '1's numbers — Luca Ferrari — Open Source advocate, human being](https://fluca1978.github.io/2021/05/24/PerlWeeklyChallenge114.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 114: palindrome and '1's numbers — Luca Ferrari — Open Source advocate, human being](https://fluca1978.github.io/2021/05/24/PerlWeeklyChallenge114.html#task2) ( *Raku* )

**Mohammad S Anwar**

 * [Perl Weekly Challenge - 114 (Task #1: Next Palindrome Number) - YouTube](https://www.youtube.com/watch?v=DrXU7nPOk8s) ( *Perl* )
 * [Perl Weekly Challenge - 114 (Task #2: Higher Integer Set Bits) - YouTube](https://www.youtube.com/watch?v=wpxOxswh9YE) ( *Perl* )

**Roger Bell_West**

 * [RogerBW's Blog: Perl Weekly Challenge 114: Going Higher](https://blog.firedrake.org/archive/2021/05/Perl_Weekly_Challenge_114__Going_Higher.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 114](https://dev.to/simongreennet/weekly-challenge-114-51h1) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 114 — W. Luis Mochán](https://wlmb.github.io/2021/05/24/PWC114/) ( *Perl* )
