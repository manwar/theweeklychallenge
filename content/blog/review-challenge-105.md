---
author:       Colin Crain
date:         2021-04-10T00:00:00
description:  "Colin Crain › Perl Weekly Review #105"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #105"
image:        images/blog/p5-review-challenge-105.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-104/).* )

Welcome to the Perl review for **Week 105** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-105/) or the summary [**recap**](/blog/recap-challenge-105/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC105TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC105TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC105BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

---

# TASK 1 {#PWC105TASK1}

# Nth root
*Submitted by: Mohammad S Anwar*

You are given positive numbers $N and $k.

Write a script to find out the $Nth root of $k. For more information, please take a look at [the wiki page](https://en.wikipedia.org/wiki/Nth_root#Computing_principal_roots).

**Example**

    Input:  $N = 5, $k = 248832

    Output: 12

    Input:  $N = 5, $k = 34

    Output: 2.02


## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/abigail/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/adam-russell/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/arne-sommer/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/colin-crain/perl/ch-1.pl),
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/cristian-heredia/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/jo-37/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/laurent-rosenfeld/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/perlboy1967/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/paulo-custodio/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/pete-houston/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/roger-bell-west/perl/ch-1.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/stuart-little/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/ulrich-rieke/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/wanderdoc/perl/ch-1.pl)

There were 21 submissions for the first task this past week.

## the POWER RULE
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/cristian-heredia/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/jaldhar-h-vyas/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/laurent-rosenfeld/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/perlboy1967/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/paulo-custodio/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/pete-houston/perl/ch-1.pl), and
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/ulrich-rieke/perl/ch-1.pl)

There are two "power rules" in mathematics. In the differential calculus, we have the rule that for some function *f*(*x*) = *x*<sup>*r*</sup>  the derivative will be *f* ′(x) = *rx*<sup>*r*-1</sup>. We're not talking about that one here, nor its invert integral form. We're only talking about your basic algebra and exponents for now. Then again we will get to the other one later, but we're getting ahead of ourselves.

The power rule, in algebra, states that to raise a power to another power, we need only to multiply the exponents. Thus if we want to know the what number raised to the 5th power will result in *x*, or in other words the fifth root of *x*, we can rephrase this as *x* raised to what power, then raised to the 5th power, will yield *x* again?

*x*<sup>**(?)**<sup>5</sup></sup> = *x*

The reciprocal of the root exponent, in this example 5, is 1/5, and these two multiplied together, by definition, yield 1 — we end up with *x*<sup>1</sup> = *x*, which sounds right.

Thus we can find the *n*-th root of a value by raising it to the (1/*n*)-th power. If we can do this in our language, which we can in Perl, then we have the mathematical basis for a solution.

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/e-choroba/perl/ch-1.pl)

As Choroba says:

>The real challenge here was to get the formatting of the result right.
34 ** (1/5) is in fact 2.02439745849989, which we can format with
sprintf '%.2f', but that would turn 12 in the first test into 12.00.
Adding it to zero fixes the issue.

```perl
    sub nth_root {
        my ($n, $k) = @_;
        return 0 + sprintf '%.2f', $k ** (1 / $n)
    }
```

As you can see, there really isn't a whole lot to this method. The infrastructure inevitably outweighed the actual computation.

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/pete-houston/perl/ch-1.pl)

Pete throws in a little input validation so the core logic doesn't get too lonely.

```perl
    my ($n, $k) = @ARGV;
    die "Root ($n) must be more than 1\n" unless $n > 1;
    die "Operand ($k) must be positive\n" unless $k > 0;
    print $k ** (1 / $n) . "\n";
```

[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/cristian-heredia/perl/ch-1.pl)

In the examples, the 5th power ("perfect penteract") of 12 is delivered without a decimal or trailing zeros. Although purely cosmetic, Christina has seen fit to pass her result through a second `sprinf`. The first delivers a floating point number with two decimals, the second will clean up the trailing zeros.

```perl
    sub calculeRoot {
        my $result =  $k ** (1/$N);
        #Two decimals
        $result = sprintf("%.2f", $result);
        #Remove trailing zeros
        $result = sprintf("%g",$result);
        print "$result\n";
    }
```

[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/paulo-custodio/perl/ch-1.pl)

Paulo is less concerned about the presentation and more attentive to the values after the last decimal place. As this could be anything, including 9 repeating, simple truncation will lead to error in the previous digit in half the cases. Faced with the cold hard truth that Perl does not have a built-in rounding function, he proactively constructs one himself.

```perl
    use constant ROUND_FACTOR => 10000;

    my($n, $k) = @ARGV;
    say round($k ** (1/$n));

    sub round {
        my($n) = @_;
        return int($n*ROUND_FACTOR+0.5)/ROUND_FACTOR;
    }
```

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/jaldhar-h-vyas/perl/ch-1.pl)

Jaldhar also noticed trouble brewing in the brute truncation, solving it with the assistance of "Math::Round"

```perl
    use Math::Round;

    my ($N, $k) = @ARGV;
    say nearest(0.01, $k ** (1.0 / $N));
```


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/laurent-rosenfeld/perl/ch-1.pl)

Laurent mixes the task requirements up a bit by taking a given, or optional default, input and computing a table of roots from 1 to 10. Again the actual equation is only part of one line. Not even a one-liner. A half-liner, if you will.

```perl
    my $input = $ARGV[0] // 248832;
    for my $i (1..10) {
        printf "%2i\t%10.3f\n", $i, $input ** (1/$i);
    }
```

With these very straightforward applications of a formula, members often take the opportunity to branch out, adding short solutions in many languages. Here Laurent has provided 18 more:

[AWK](https://github.com/Abigail/perlweeklychallenge-club/blob/master/challenge-105/laurent-rosenfeld/awk/ch-1.awk),
[bc](https://github.com/Abigail/perlweeklychallenge-club/blob/master/challenge-105/laurent-rosenfeld/bc/ch-1.bc),
[C](https://github.com/Abigail/perlweeklychallenge-club/blob/master/challenge-105/laurent-rosenfeld/c/ch-1.c),
[D](https://github.com/Abigail/perlweeklychallenge-club/blob/master/challenge-105/laurent-rosenfeld/d/ch-1.d),
[Dart](https://github.com/Abigail/perlweeklychallenge-club/blob/master/challenge-105/laurent-rosenfeld/dart/ch-1.dart),
[Gembase](https://github.com/Abigail/perlweeklychallenge-club/blob/master/challenge-105/laurent-rosenfeld/gembase/ch-1.dml),
[Go](https://github.com/Abigail/perlweeklychallenge-club/blob/master/challenge-105/laurent-rosenfeld/go/ch-1.go),
[Java](https://github.com/Abigail/perlweeklychallenge-club/blob/master/challenge-105/laurent-rosenfeld/java/Main.java),
[Julia](https://github.com/Abigail/perlweeklychallenge-club/blob/master/challenge-105/laurent-rosenfeld/julia/ch-1.julia),
[Kotlin](https://github.com/Abigail/perlweeklychallenge-club/blob/master/challenge-105/laurent-rosenfeld/kotlin/ch-1.kt),
[Lua](https://github.com/Abigail/perlweeklychallenge-club/blob/master/challenge-105/laurent-rosenfeld/lua/ch-1.lua),
[Nim](https://github.com/Abigail/perlweeklychallenge-club/blob/master/challenge-105/laurent-rosenfeld/nim/ch-1.nim),
[Python](https://github.com/Abigail/perlweeklychallenge-club/blob/master/challenge-105/laurent-rosenfeld/python/ch-1.py),
[Raku](https://github.com/Abigail/perlweeklychallenge-club/blob/master/challenge-105/laurent-rosenfeld/raku/ch-1.raku),
[Ruby](https://github.com/Abigail/perlweeklychallenge-club/blob/master/challenge-105/laurent-rosenfeld/ruby/ch-1.rb),
[Rust](https://github.com/Abigail/perlweeklychallenge-club/blob/master/challenge-105/laurent-rosenfeld/rust/ch-1.rs),
[Scala](https://github.com/Abigail/perlweeklychallenge-club/blob/master/challenge-105/laurent-rosenfeld/scala/ch-1.scala),
[Visual Basic](https://github.com/Abigail/perlweeklychallenge-club/blob/master/challenge-105/laurent-rosenfeld/visual-basic/ch-1.vb)

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/abigail/perl/ch-1.pl)

Abigail brings forward what has become his usual course in comparative languages as well. Remarkably enough, there isn't a great deal of overlap between the submissions, so together with Laurent we have a total of 22 languages represented for this task, in addition to Perl 5.

[AWK](https://github.com/Abigail/perlweeklychallenge-club/blob/master/challenge-105/abigail/awk/ch-1.awk), [bc](https://github.com/Abigail/perlweeklychallenge-club/blob/master/challenge-105/abigail/bc/ch-1.bc), [C](https://github.com/Abigail/perlweeklychallenge-club/blob/master/challenge-105/abigail/c/ch-1.c), [FORTRAN](https://github.com/Abigail/perlweeklychallenge-club/blob/master/challenge-105/abigail/fortran/ch-1.f90), [Lua](https://github.com/Abigail/perlweeklychallenge-club/blob/master/challenge-105/abigail/lua/ch-1.lua), [Node.js](https://github.com/Abigail/perlweeklychallenge-club/blob/master/challenge-105/abigail/node/ch-1.js), [Python](https://github.com/Abigail/perlweeklychallenge-club/blob/master/challenge-105/abigail/python/ch-1.py), [Ruby](https://github.com/Abigail/perlweeklychallenge-club/blob/master/challenge-105/abigail/ruby/ch-1.rb), [Scheme](https://github.com/Abigail/perlweeklychallenge-club/blob/master/challenge-105/abigail/scheme/ch-1.scm), and [SQL](https://github.com/Abigail/perlweeklychallenge-club/blob/master/challenge-105/abigail/sql/ch-1.sql).

## LOGARITHMS!
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/colin-crain/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/dave-jacoby/perl/ch-1.pl), and
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/stuart-little/perl/ch-1.pl)

Say we're looking for some value *r*, the *n*-th root of x. Which we are, because that's what the challenge is asking for. Let's also assume *x* is positive, so we can avoid the messiness of multiple complex roots. We're going to look at only real numbers; modern life is complex enough thank you!

where *x* > 0, we start with our definition:

*r*<sup>*n*</sup> = *x*

we then take the logarithm of both sides. The base is not important, and *e* or 10 are both fine candidates:

→ *n* log<sub>**b**</sub>(*r*) = log<sub>**b**</sub>(*x*)

now divide both sides by *n*:

→ log<sub>**b**</sub>(*r*) = log<sub>**b**</sub>(*x*) / *n*

and raise **b** to the power of each side:

→ *r* = **b**<sup>log<sub>**b**</sub>(*x*) / *n*</sup>

if we pick *e*, the natural logarithm, for our base, we get

→ *r* = *e*<sup>log(*x*) / *n*</sup>

This give us another mathematical route to the solution. As it's still just a simple equation the submissions were on the whole equally compact, with the differences, again, lying in the treatments given to the I/O portions.

[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/stuart-little/perl/ch-1.pl)

Stuart demonstrates the technique. He looks first for an integer solution trying values up from 1, and if that is not even defaults to the logarithmic derivation.

```perl
    sub nthRoot($exp,$nr) {
        my $rootFloor = 1;
        while (($rootFloor+1)**$exp <= $nr) {$rootFloor++};
        return ($rootFloor ** $exp == $nr) ? ($rootFloor) : (exp ((log $nr)/$exp))
    }
```

[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/colin-crain/perl/ch-1.pl)

For my own solution, I took the time to pass the output through a regex filter to strip the decimal point and any trailing zeros if the result is whole, or somehow resolves to tenths. Otherwise we follow the example and deliver two decimal places.

```perl
    sub nroot($n, $x) {
        my $res = sprintf "%2.2f",    exp( (log $x) / $n );
        $res =~ s/\.?0*$//;
        return $res;

    }
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/dave-jacoby/perl/ch-1.pl)

Dave provides a more robust solution, bothering to check for 0s, which is considerate. I have heard that division by zero is a leading cause of processor fires.  He also chooses base 10, perhaps because humans have 10 fingers. Familiarity breeds comfort, and in these times that's a blessing.

```perl
    croak 'Zero in input' unless ( $n * $k ) > 0;

    my $v = nth_root( $n, $k );
    say qq{${n}th root of $k = $v};

    # Logarithmic calculation
    # r = b ** ( 1/n logb k )
    sub nth_root ( $n, $k ) {
        return 10**( ( 1 / $n ) * log10($k) );
    }

    # https://perldoc.perl.org/functions/log
    sub log10 {
        my $n = shift;
        return log($n) / log(10);
    }
```

## NEWTON'S method
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/adam-russell/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/arne-sommer/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/cheok-yin-fung/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/duncan-c-white/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/jo-37/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/roger-bell-west/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/wanderdoc/perl/ch-1.pl)

Sir Issac Newton demonstrated an algorithmic method to generate successive digits in a root, homing in on greater accuracy with every refinement.

Remember when I first brought the "power rule" in the algebraic exercise we did earlier? Well the other "power rule" mentioned in passing relates to taking the derivative of an exponential value. In the derivative of an exponent we multiply the variable by the value of the exponent and then reduce the exponent by 1. We can observe this in Newtons's Method: the process involves refining an initial estimate of the root with a term derived from dividing the initial equation by its derivative. By successively recalculating and reapplying the correction, the precision is progressively improved.

For the n-th root of A, we start with

*x*<sup>*n*</sup> - *A* = 0

The derivative of this function, by the power rule we saw earlier (the one we *didn't* use), is:

*n* *x*<sup>*n*-1</sup>

Newtons's method says for a given approximation, the next approximation can be derived by by applying the correction

*x*<sub>*k*+1</sub> = *x*<sub>*k*</sub> - *f*(*x*<sub>*k*</sub>) / *f* ′(*x*<sub>*k*</sub>)

plugging in the values for the function and derivative above, we get

*x*<sub>*k*+1</sub> = (*x*<sub>*k*</sub><sup>*n*</sup> - *A*) / *n* *x*<sub>*k*</sub><sup>*n*-1</sup>

→  *x*<sub>*k*</sub> - *x*<sub>*k*</sub><sup>*n*</sup>/*n* *x*<sub>*k*</sub><sup>*n-1*</sup> + *A* / *x*<sub>*k*</sub><sup>*k*-1</sup>

→  *x*<sub>*k*</sub> - *x*<sub>*k*</sub>/*n* + *A* / *x*<sub>*k*</sub><sup>*k*-1</sup>

→  (1/*n*)(*n* *x*<sub>*k*</sub> - *x*<sub>*k*</sub>) + *A* / *x*<sub>*k*</sub><sup>*k*-1</sup>

→  (1/*n*)(*n*-1) *x*<sub>*k*</sub> + *A* / *x*<sub>*k*</sub><sup>*k*-1</sup>

→  ((*n*-1) *x*<sub>*k*</sub> + *A* / *x*<sub>*k*</sub><sup>*k*-1</sup>) / *n*

We then apply this function until it converges to whatever level of precision we wish.

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/roger-bell-west/perl/ch-1.pl)

Roger demonstrates this iterative refinement in his example. You can see the final derivation we arrived at in the `while` loop. This is iterated until the difference can no longer be detected and we have found the root to the maximum precision possible. In this case, for the 5-th root of 34, only 5 iterations are required, as the precision approximately doubles the number of significant digits on every pass.

```perl
    sub nroot {
      my $n=shift;
      my $a=shift;
      my $xk=2;
      while (1) {
        my $xk1=(($n-1)*$xk+$a/($xk ** ($n-1)))/$n;
        if ($xk1==$xk) {
          last;
        }
        $xk=$xk1;
      }
      return $xk;
    }
```

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/adam-russell/perl/ch-1.pl)

>"One of my neatest things one can learn in calculus class, I would argue, is Newton’s method for computing square roots."

Careful examination shows the second-to-last version of the derivation in Adam's encoding. Comme ci, comme ça — how we shape the equation is not important. Adam here picks a hundred iterations but that is surely more than we will ever need, giving a precision to around 2<sup>100</sup> digits . Woof! Yea that'll do.

```perl
    sub nth_root{
        my($n, $k) = @_;
        my $x_i = int(rand(10) + 1);
        my $r;
        for my $i (0 .. 100){
            $x_i = (1 / $n) * (($n - 1) * $x_i + ($k / $x_i ** ($n - 1)));
        }
        return $x_i;
    }
```


[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/wanderdoc/perl/ch-1.pl)

The doctor requests a number of digits precision, and opts out immediately when the iterations no longer change up to that point, using a pair of `sprintf` statements. The `reduce` is just a novel way to compute *n* *x*<sub>*k*</sub><sup>*n*-1</sup>.

```perl
    sub nthroot # newton algorithm
    {
         my ( $n, $k, $precision ) = @_;

         $precision //= 5;

         my $x0 = $k / $n;
         my $x1;

         while (1)
         {
              $x1 = (1 / $n) *
                   ( ( $n - 1 ) * $x0 + $k / ( reduce { $a * $b } ($x0) x ($n - 1) ) );
              last if sprintf("%.${precision}f", $x0) == sprintf("%.${precision}f", $x1);
              $x0 = $x1;
         }
         return sprintf("%.${precision}f", $x1) + 0;
    }
```

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/arne-sommer/perl/ch-1.pl)

Arne delivers a lot of user-configurable options, such to proceed for a given number of iterations or stop when we start to repeat ourselves, as the best answer we can get. The error correction is broken off into its own subroutine, called recursively until `$index` number of iterations have been calculated. A `$verbose` option lists the sequence of results as the steps are computed.

```perl
sub get_iteration ($index)
{
  unless (defined $seq[$index])
  {
     $seq[$index] = (1/$N) * ( ($N - 1) * get_iteration($index -1) + ($k / get_iteration($index -1) ** ($N - 1) ));
  }
  return $seq[$index]
}

my $value = get_iteration($iterations -1);
say ": ", join(" | ", @seq) if $verbose;

say $value;
```


[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/duncan-c-white/perl/ch-1.pl)

Duncan's `fun` little routines are built on the `Function::Parameters` framework for subroutine signatures. His compact solution clearly demonstrates the underlying method.

```perl
    my $epsilon = 1e-8;

    fun nthroot( $n, $a )
    {
        my $x = $a/2;    # guess
        while( abs($x**$n-$a) > $epsilon )
        {
            $x = ( ($n-1)*$x + $a/$x**($n-1) ) / $n;
        }
        return $x;
    }
```


## UNUSUAL AND NOTEWORTHY METHODOLOGIES
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/cheok-yin-fung/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/james-smith/perl/ch-1.pl), and
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/jo-37/perl/ch-1.pl)


[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/cheok-yin-fung/perl/ch-1.pl)

>"Most of you are familiar with the virtues of a programmer. There are three, of course: laziness, impatience, and hubris."
> — Larry Wall

CY expresses her natural tendency towards that paragon of Perl programming virtue, laziness. She acts on this virtue in two examples, a self-declared "lazy" solution and an additional version of Newton's method, with bonus laziness acknowledged in the comments. Premature optimization is of course a sin.

For her "lazy" method, she brute-forces things, adding 1 to a counter until it exceeds the exponential product computed for 100 times the given value we want rooted. She then reduces this value a point if that value is closer to the estimate. Dividing the counter by 100 gives the root to 2 decimal places. It's brutal but seems to work. I'm a little uncertain on its failure modes.

```perl
    sub lazy_root {
    # I like math, but being ultralazy,
    # thought of settling with the task by junior school math
        my $puppet_k = $k * (100**$N);
        my $i = 0;

        while ($pow < $puppet_k) {
            $i++;
            $pow = $i**$N;
        }

        if ($pow > $puppet_k) {
            my $pow_smaller = ($i-1)**$N;
            $i = $i-1 if ($pow - $puppet_k) > ($puppet_k - $pow_smaller);
        }

        $i = $i/100.0;

        if ($pow == $puppet_k) {
            print "$i\n";
        }
        else {
            printf "%.2f\n",$i;
        }
    }
```


For her Newtonian method, she keeps the derivative component as a separate entity, but you can see the same steps.

```perl
    sub newton_root {
        my @x;
        $x[0] = $N > 20 ? sqrt($k)/$N : sqrt($k);
        my $dff = 0.0005;  # error terms computable
                           # but too lazy to check Numerical Analysis textbook
        my $t = 0;
        while ($dff >= 0.0005) {
            $dff = $x[$t]**$N - $k;
            $x[$t+1] = $x[$t] - ( $dff / $x[$t]**($N-1) / $N);
            $t++;
        }

        my $puppet_x = sprintf "%.2f", $x[$t];
        if ($puppet_x**$N==$k) {
            $puppet_x =~ s/\.([0-9])*0$/\.$1/;
            $puppet_x =~ s/\.0$//;
            print "$puppet_x\n";
        }
        else {
            printf "%.2f\n", $x[$t];
        }
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/james-smith/perl/ch-1.pl)

James brings us a very different approach than any we've yet seen, in constructing a binary search to home in on the solution to the desired accuracy from both above and below. The idea is quite straightforward, although he tosses in some clever optimization as he explains. Although well commented, further details and explanation can be viewed in his [writeup for the challenge](http://blogs.perl.org/users/james_curtis-smith/2021/03/perl-weekly-challenge-105.html).

```perl
  ## We will use a simple binary search - where we start with
  ## two values "l" and "r";
  ## and each time cut the region in 2. Which ever half "k" is
  ## in we move either "l" or "r" to the mid value and repeat

  my $l = 0;

  ## Tweak to quickly chose a better r...
  ## If k has less than n digits it can't be greater than 10
  ## If k has less than 2n digits it can't be greater than 100
  ## .... So we can optimize the value of r - to speed things
  ## up slightly...

  my $r = '1'.'0'x (1+ int(length(int $k)/$n) );
     $r = $k if $r>$k;

  my $m; # This is the midpoint...
  my($ln,$rn) = (1, pow($r,$n));

  ## Table of savings....
  ##    r #steps (for n=5)  #steps without opt delta saving
  ##   10     37 k < 100_000                50    13    35%
  ##  100     40 k < 10_000_000_000         67    27    40%
  ## 1000     44 k < 1_000_000_000_000_000  84    40    48%

  while( $r-$l > 1e-10) { ## Repeat until the interval is small
    my $mn = pow($m = ($r+$l)/2,$n);
    if($mn<$k) {
      ($l,$ln) = ($m,$mn);
      next;
    }
    ($r,$rn) = ($m,$mn);
  }
  return sprintf '%0.8f',$m;
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/jo-37/perl/ch-1.pl)

Jorg, as seems so often the case, delivers to us a completely novel version of Newton's method based around a continued fraction. I will let his lengthy comments walk you through the process:

```perl
    # Find the largest integer r having r^n <= k
    sub nth_int_root ($k, $n) {
        my $r = 0;
        0 while ++$r ** $n <= $k;

        $r - 1;
    }

    sub nth_root ($k, $n) {
        my $x = nth_int_root($k, $n);
        my $y = $k - $x ** $n;
        # Stop if there is an integer solution.
        return Math::BigRat->new($x) if $y == 0;

        # Building a continued fraction of the form
        #             b1
        # a1 + ----------------
        #                b2
        #       a2 + ----------
        #                   b3
        #             a3 + ----
        #                   ...
        #
        #
        # The formula for the n-th root has been taken from
        # https://en.wikipedia.org/wiki/Nth_root#Using_Newton's_method
        #
        # Collect the "a" coefficients:
        my @a = ($x);
        my $x1 = $x ** ($n - 1);
        push @a, (2 * $_ - 1) * $n * $x1, 2 * $x for 1 .. $depth;

        # Collect the "b" coefficients:
        my @b = ($y);
        push @b, ($_ * $n - 1) * $y, ($_ * $n + 1) * $y for 1 .. $depth;

        # Calculate and return the continued fraction defined by the
        # coefficients in @a and @b.  'inf' as the reciprocal of zero acts
        # as the identity here and initiates BigRat arithmetics.  The value
        # of the last "b" coefficient has no effect whatsoever.
        reduce {$b / $a + pop @a} Math::BigRat->new('inf'), reverse @b;

    }
```

------------------------------------------

---

# TASK 2 {#PWC105TASK2}

# The Name Game
*Submitted by: Mohammad S Anwar*

You are given a $name.

Write a script to display the lyrics to the Shirley Ellis song The Name Game. Please checkout [the wiki page](https://en.wikipedia.org/wiki/The_Name_Game) for more information.

**Example**

Input: $name = "Katie"

Output:

    Katie, Katie, bo-batie,
    Bonana-fanna fo-fatie
    Fee fi mo-matie
    Katie!


## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/abigail/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/adam-russell/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/arne-sommer/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/jo-37/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/laurent-rosenfeld/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/paulo-custodio/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/pete-houston/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/roger-bell-west/perl/ch-2.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/stuart-little/perl/ch-2.pl), and
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/ulrich-rieke/perl/ch-2.pl)

There were 17 submissions for the second task this past week.

Personally, I wasn't familiar with the *Name Game* going into this challenge, neither the song nor its cultural context. My mind is an ocean of obscure pop-culture references but because I don't voraciously devour media (who has time for that?) there are also gaping holes in my experience, and this was one. One, I might add, I was very pleased to plug, as this is a welcome and hilarious addition. The joy of not knowing things is you get to discover them. It's always good to be [one of the ten thousand](https://xkcd.com/1053/).

## the RULES OF THE GAME

The rules are explained in the song itself, although only for the most common cases.

*Come on ev'rybody, I say now let's play a game
I betcha I can make a rhyme out of anybody's name
**The first letter of the name
I treat it like it wasn't there
But a "B" or an "F" or an "M" will appear**
And then I say "Bo" add a "B" then I say the name
Then "Bo-na-na fanna" and "fo"
And then I say the name again with an ""f" very plain
Then "fee fi" and a "mo"
And then I say the name again with an "M" this time
And there isn't any name that I can't rhyme*

This states the first letter is to be removed and variably replaced with "B", "F" and "M".

*But **if the first two letters are ever the same
Crop them both, then say the name
Like Bob, Bob, drop the "B's", Bo-ob
Or Fred, Fred, drop the "F's", Fo-red
Or Mary, Mary, drop the "M's", Mo-ary
That's the only rule that is contrary**
And then I say "Bo" add a "B" then I say the name
Then "Bo-na-na fanna" and "fo"
And then I say the name again with an ""f" very plain
Then "fee fi" and a "mo"
And then I say the name again with an "M" this time
And there isn't any name that I can't rhyme*

To my ears this verse is more obscure, but seems to mean that when the original sound is the same as the replacement sound, neither are voiced in the rhyming portion. Note there's no mention of what to do if the name starts with a vowel.

The Wikipedia article does expand on this however, stating to leave the name alone should it start with a vowel, and we can also take this inserted variance as a portent of complications to come:

>A verse can be created for any name with stress on the first syllable, with *X* as the name and *Y* as the name without the first consonant sound (if it begins with a consonant), as follows:

>*(X)*, *(X)*, bo-b *(Y)*
>Bonana-fanna fo-f *(Y)*
>Fee fi mo-m *(Y)*
>*(X)*!

>If the name starts with a b, f, or m, that sound simply is not repeated.

It doesn't take much effort to wander out from this semi-defined behavior into uncharted territory, for instance what to do with multiple leading consonants in clusters, or long multisyllabic constructions. After all, in this modern age the ideas for novel first names has only expanded, with many more uncommon words gaining the limelight:

*X Æ A-12, X Æ A-12, bo-bÆ A-12!*

I guess you drop the *X* and rhyme with the *Ash* sound but that's just me. And what of the comic superhero Black Panther, T'Challa? What in Wakanda should we do with that? None of the submissions made allowances for alveolar ejective stops, although there's no particular reason it could not be accommodated with enough case rules.

Names in the 21st century are much more globally sourced as a whole, and thus many names one hears these days are best thought of as loanwords, and as loanwords to English we cannot assume that names, even Anglicized to fit our palate, will strictly follow English linguistic convention. Loanwords are generally mutated and phonetically morphed on assimilation to the borrowing language, but some leniency towards the rules of the parent tongue always remains.

As potentially any word can be used as a name, and with these words being only loosely bound to English language rules, can we reasonably conclude that there must therefore exist some name out there that will contradict whatever rule set we use and thus break the contrived song in either permitted consonant combinations or meter? Suffice to say the process isn't going to be perfect. Ellis herself in the song makes the affirmative claim that "there isn't any name that I can't rhyme" (although she earlier offers to *bet* the listener that this is true, opening a little bit of wiggle room). Considering the open-ended range of permissable names, is, therefore, Ellis to be assumed a liar? A phony? Or alternately are we, obviously, over-thinking this?

Natural Language Programming is by definition a messy process, bound ultimately in the realm of statistical correctness rather than mathematical proof. We cannot expect our silly songs to be prefect, only better or worse, maintaining the idea that we can improve our technique one special case at a time.

English, I have noticed in life, is a singularly mutable spoken language. A non-native speaker with the command of only several hundred words and mangled pronunciation can with effort adequately communicate basic concepts in day-to-day life. Although each individual has their own idea on how words should sound and be spoken, objectively there is quite a lot of variation in exactly what those sounds are. Vowels are remarkably fluid beasts, and the [rhotic "r"](https://en.wikipedia.org/wiki/Rhoticity_in_English) seems to come and go as it pleases.

Consequently there is a lot more range in what constitutes acceptable phonetics than we might at first think, such as when we use the name "Brian" in the song, which in the third line (under some interpretations of the rules) produces the "word" *mrian*. Unlike "br", "pr", "fr" and a variety of other examples, no English word starts with "mr", but that doesn't mean we can't pronounce it, and in fact that particular consonant cluster does rarely pop up in words like "bottomry". Note I did say rarely.

There was ultimately some variation in the methodologies, with most but not all removing the first letter of the name unless it is a vowel. Some removed the first letter irrespective of its vowel-status and others removed all consonants up to the first vowel found, and all strategies solved some problems while creating others. There were even some more advanced approaches that we'll look at, and a certain amount of discussion as to whether to collect "y" in with the other vowels. Which in turn brings the question about "w": is anyone out there named "Cwtch"? It's a very wholesome sentiment, intrinsically endearing and well suited to a name, save similarities to certain indelicate euphemisms. The English language, being a hodgepodge assemblage from different sources, is fundamentally a messy thing. Any attempt to satisfy any and every name is bound to run up again a seemingly never-ending litany of special cases.

But with that said, even the base level of substitution produced resonable results in most all cases, and this ia where we will start.

## the BASE CASE
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/adam-russell/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/arne-sommer/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/colin-crain/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/jaldhar-h-vyas/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/paulo-custodio/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/roger-bell-west/perl/ch-2.pl), and
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/ulrich-rieke/perl/ch-2.pl)

In what we will call the base case the first letter is cropped if it's not a vowel, and this was the most common interpretation of the construction rules.

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/duncan-c-white/perl/ch-2.pl)

Duncan demonstrates a very inline method of constructing the song verse. After cloning s lower-case version of the name, he then removes and captures any one leading consonant letter. He then proceeds line-by-line through the song, using ternary operations to decide whether to place the leading "b", "f" and "m" characters in the new constructions.

```perl
    my $y = lc($name);
    $y =~ s/^([bcdfghjklmnpqrstvwxyz])//;
    my $deleted = $1 // '';

    my $by = $deleted eq 'b' ? $y : "b$y";
    say "$name $name bo-$by";
    my $fy = $deleted eq 'f' ? $y : "f$y";
    say "Bonana-fanna fo-$fy";
    my $my = $deleted eq 'm' ? $y : "m$y";
    say "Fee fi mo-$my";
    say "$name";
```

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/colin-crain/perl/ch-2.pl)

For my own solution, I divided the name using a pair of capture groups in a regular expression that wil always match something. The first group will match a leading consonant letter if found, but even in failing will produce a defined null string in `$1`.

The song lyric is enclosed in a single multi-line heredoc, with the relevant  interpolations inserted. Because I separated out the song lyric from the dicing up, placing them into two routines, I was easily able to manipulate the regular expression in `chop_syl()`, trying a few variations before landing on this final form as yielding the best results. YMMV. This explains the `substr` constructions, as we do not assume the `$head` is only a single character.

```perl
    make_song($name, chop_syl($name));

    sub chop_syl ($name) {
        $name =~ /([^aeiou]?)(.*)/i;
        my ($head, $tail) = ($1, $2);
        return ($head, lc($tail));
    }

    sub make_song ($name, $head, $tail) {
        my ($b, $f, $m) = ('' x 3);
        $b = 'b' unless substr($head, 0, 1) eq 'B';
        $f = 'f' unless substr($head, 0, 1) eq 'F';
        $m = 'm' unless substr($head, 0, 1) eq 'M';

        say<<"END";
        ${name}, ${name}, bo-${b}${tail},
        Bonana-fanna fo-${f}${tail}
        Fee fi mo-${m}${tail}
        ${name}!
    END
    }
```

[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/paulo-custodio/perl/ch-2.pl)

Paulo uses substitution to get his name tail portion, employing the `/r` modifier to return the product of the substitution rather than performing it destructively in-place. This is assigned to the `$end` variable and a set of ternary operations decides the fate of the "b", "f" and "m" prefixes.

```perl
    my $name = shift;
    my $end = $name =~ s/^[bcdfghjklmnpqrstvwxyz]//ir;
    my $b = ($name =~ /^b/i) ? "" : "b";
    my $f = ($name =~ /^f/i) ? "" : "f";
    my $m = ($name =~ /^m/i) ? "" : "m";

    say "$name, $name, bo-$b$end,";
    say "Bonana-fanna fo-$f$end";
    say "Fee fi mo-$m$end";
    say "$name!";
```

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/ulrich-rieke/perl/ch-2.pl)

Ulrich takes a decidedly different approach to assembling his verse, assembling a list of 3 component strings corresponding to the "b", "f", and "m" substitutions, respectively. Then the verse becomes closer to saying the name a few times, reading off the list and repeating the name emphatically for a final closing.

```perl
    my $name = "Barry" ;
    my $y ; #has to be affixed to the rhyme
    my @components = ("bo-b" , "Bonana-fanna fo-f" , "Fee fi mo-m" ) ;
    if ( lc( substr( $name , 0 , 1 )) =~ /[aeiou]/ ) {
      $y = lc $name ;
    }
    else {
      if ( lc( substr( $name , 0 , 1 )) =~ /[bfm]/ ) {
          my $firstLetter = lc ( substr( $name, 0 , 1 ) ) ;
          for my $rhyme ( @components ) {
        my $len = length $rhyme ;
        if ( substr( $rhyme , $len - 1 , 1 ) eq $firstLetter ) {
            $rhyme = substr( $rhyme, 0 , $len - 1 ) ;
        }
          }
      }
      $y = substr( $name , 1 ) ;
    }
    say "$name, $name, $components[0]$y" ;
    map { say "$_$y" } @components[1..2] ;
    say "$name!" ;
```

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/adam-russell/perl/ch-2.pl)

Adam does a couple of unusual things in his example. The first is, after isolating the value of the first character using `substr`, using the `tr///` operator to try and translate the value to null. If this succeeds the number of translations is returned, so the respective flag is set as a result.

The flags determine control flow in a the following conditionals where assignments for the three new constructions are made.

The output stage uses `format` and `write`, drawing on the "report language" of PeRL's roots. Formats are alternating lines of field descriptions and the values to insert within them; in this case the first line can be read as three variable-width fields, to be filled by `$name`, `$name` and `$b`, respectively.

I haven't done this in many years and it's cool to revisit this feature. It can really prove to be super useful in the right circumstances.

```perl
    sub name_game{
        my($name) = @_;
        my($b, $f, $m);
        my $first_letter = lc(substr($name, 0, 1));
        my $irregular_v = $first_letter =~ tr/aeiou//d;
        my $irregular_bfm = $first_letter =~ tr/bfm//d;
        unless($irregular_v || $irregular_bfm){
            $b = "b" . lc(substr($name, 1));
            $f = "f" . lc(substr($name, 1));
            $m = "m" . lc(substr($name, 1));
        }
        elsif($irregular_v){
            $b = "b" . lc($name);
            $f = "f" . lc($name);
            $m = "m" . lc($name);
        }
        elsif($irregular_bfm){
            $b = "b" . lc(substr($name, 1));
            $f = "f" . lc(substr($name, 1));
            $m = "m" . lc(substr($name, 1));
            $b = lc(substr($name, 1)) if lc(substr($name, 0, 1)) eq "b";
            $f = lc(substr($name, 1)) if lc(substr($name, 0, 1)) eq "f";
            $m = lc(substr($name, 1)) if lc(substr($name, 0, 1)) eq "m";
        }
        format NAME_GAME =
            @*, @*, bo-@*
            $name, $name, $b
            Banana-fana fo-@*
            $f
            Fee-fi-mo-@*
            $m
            @*!
            $name
    .

        select(STDOUT);
        $~ = "NAME_GAME";
        write();
    }
```

### How do you solve a PROBLEM LIKE Y?
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/arne-sommer/perl/ch-2.pl) and
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/polettix/perl/ch-2.pl)

In leaving the first letter of the name conditionally on it being a vowel, the question arises on what to do with Y. The letter can serve in English as either a consonant or a vowel, with these cases falling generally at the beginning and end of the word respectively. It functions as a consonant in the word "year", where it is known technically as a voiced palatal approximant, yet functions a vowel in the word "city". In the word "yearly" it functions as both. As a consonant sound the game works better when dropped, such as the case with "Yousef", but this strategy doesn't work well for the vowel sound in the name "Yvette".

In retrospect, it appears to me that "y" is a consonant when followed by a vowel sound and a vowel otherwise, and a more precise rule could be made on that basis. Jorg Sommrey does exactly that, and we will have a look at his result later.

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/polettix/perl/ch-2.pl)

Using the same pair of captured matches we employed earlier to divide his name, Flavio's first group will either capture a leading consonant or an empty sting, with whatever remains being swept up in the second group.

As you can see he has added "y" to the list of vowels.

```perl
    sub the_name_game ($name) {
       my ($first, $Y) = $name =~ m{\A([^aeiouy]?)(.*)}mxs;
       $first = lc $first;
       return join "\n",
          "$name, $name, bo-" . ($first eq 'b' ? $Y : "b$Y"),
          "Bonana-fanna fo-"  . ($first eq 'f' ? $Y : "f$Y"),
          "Fee fi mo-"        . ($first eq 'm' ? $Y : "m$Y"),
          "$name!";
    }
```


[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/arne-sommer/perl/ch-2.pl)

Arne adopts a configurable option to let the user choose whether to treat "y" as a vowel of a consonant. I'm not sure offloading the decision is really the best choice but I can't say it's wrong either. Both of these versions inline the decision-making directly into the
output statements.

```perl
    my $y_is_a_vowel = 0;
    GetOptions("y_is_a_vowel" => \$y_is_a_vowel);

    my @vowels = $y_is_a_vowel ? qw/a e i o u y/ : qw/a e i o u/;

    my $y = lc(substr($x,0,1)) eq any(@vowels) ? lc($x) : substr($x, 1);

    say "$x, $x, bo-",      ( lc(substr($x,0,1)) eq "b" ? $y : "b$y" );
    say "Bonana-fanna fo-", ( lc(substr($x,0,1)) eq "f" ? $y : "f$y" );
    say "Fee fi mo-",       ( lc(substr($x,0,1)) eq "m" ? $y : "m$y" );
    say "$x!";
```


## remove ANY LETTER
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/laurent-rosenfeld/perl/ch-2.pl) and
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/stuart-little/perl/ch-2.pl)

In her song Ellis clearly states that she takes the first letter on the name, and makes no allowance should that letter be a leading vowel sound. Without correcting for the vowels this can remove the entire first syllable, producing some irregular results in the meter, but then again it is what the girl says, so who are we to contradict her?

[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/stuart-little/perl/ch-2.pl)

Stuart gives us a function that, when given a name and a character, creates the three constructed phrases in the middle of the lyric, which all follow the same internal pattern.

To construct his heredoc, he uses a trick of referencing a block and then immediately dereferencing it — this forces the interpreter to figure out what is being referenced first, causing the `do BLOCK` to be evaluated.

```perl
    sub ellis($c,$name) {
        qq|${\ do{$c}}o-| . (($c eq substr(lc $name,0,1)) ? (substr($name,1)) : ($c . substr($name,1)));
    }

    sub verse($name) {
        my $main = ucfirst($name);
        my $verse=<<"END";
    $main, $main, ${\ do {ellis('b',$main)}}
    Bonana-fanna ${\ do {ellis('f',$main)}}
    Fee fi ${\ do {ellis('m',$main)}}
    $main!
    END
        return $verse;
    }
```


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/laurent-rosenfeld/perl/ch-2.pl)

Laurent maps his vowels to a lookup table which he uses to conditionally switch assignments for the "b", "f" and "m" cases. After assembling a list of cases, he then inserts them by index into a heredoc. As of 5.26, the `~` tilde inserted after the `<<` tells the interpreter to  selectively remove the same amount of whitespace as seen before the final delimiter for each line in the heredoc, allowing one to easily indent the contents in a manner that won't show up in the output.

```perl
    my %vowels = map { $_ => 1} qw<a e i o u>;
    my ($start, $suffix) = ($1, $2) if $name =~ /(\w)(\w+)/;
    my @y;
    if (exists $vowels{lc $start}) {
        @y = ("bo-$suffix", "fo-$suffix", "mo-$suffix");
    } else {
        $y[0] = $start eq 'B' ? "bo-$suffix" : "bo-b$suffix";
        $y[1] = $start eq 'F' ? "fo-$suffix" : "fo-f$suffix";
        $y[2] = $start eq 'M' ? "mo-$suffix" : "mo-m$suffix";
    }
    say "\n", <<~EOF;
        $name, $name, $y[0]
        Bonana-fanna $y[1]
        Fee fi $y[2]
        $name!
        EOF
```


## EAT ALL the CONSONANTS
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/dave-jacoby/perl/ch-2.pl) and
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/roger-bell-west/perl/ch-2.pl)

The two letter combination "sh" is not a consonant cluster, but rather a [digraph](https://en.wikipedia.org/wiki/Digraph_(orthography)) for the single consonant soft s sound, technically a [voiceless postalveolar fricative](https://en.wikipedia.org/wiki/Voiceless_postalveolar_fricative). Because it's only one sound, the "consonant" here is two letters that can't be meaningfully separated. With this case and a few others it might suggest the best course of action is to remove all the leading consonants up to the first vowel found. The result is "Shirley" improves, but it might also be said "Brain" declines. Both still work, mind you, and which is better is to some degree a matter of taste. And the song should be able to do the name of its creator, no?

I think selectively removing some consonant combinations and dividing others would be the best solution, and there were some versions that approached that idea further, but this at least attempts to grapple with the problem. In full disclosure I tried this strategy and ultimately decided against it.

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/dave-jacoby/perl/ch-2.pl)

Dave's code amusingly refuses to do the song for the name "Chuck", much as Shirley Ellis reportedly would. Let us say that Middle America in the 1960s would not have looked favorably on the results. In other regards his submission works in a manner that should now be quite familiar.

This method, unlike the others we've seen, gives a pleasing result when fed the name "Cthulhu", the unspeakable tentacled horror dreaming in the benthic deeps.

```perl
    Cthulhu, Cthulhu, bo-Bulhu
    Bonanna-fanna fo-Fulhu
    Fee fi mo-Mulhu
    Cthulhu!
```

Here is his routine:

```perl
    sub name_game( $name ) {
        my $Name = ucfirst lc $name;
        croak "Can't do 'Chuck'" if lc $name eq 'chuck';
        my $i      = substr( $Name, 0, 1 );
        my ($init) = $Name =~ m{^([^AEIOU]+)}mix;
        my $y      = $Name;
        $y =~ s{^([^AEIOU]+)}{}mix;

        my $by = 'B' . $y;
        my $fy = 'F' . $y;
        my $my = 'M' . $y;

        if (0) { }
        if ( $vowels{$i} ) {
            $init = '';
            $by   = 'B' . lc($Name);
            $fy   = 'F' . lc($Name);
            $my   = 'M' . lc($Name);
        }
        elsif ( $init eq 'B' ) {
            $by = ucfirst $y;
        }
        elsif ( $init eq 'F' ) {
            $fy = ucfirst $y;
        }
        elsif ( $init eq 'M' ) {
            $my = ucfirst $y;
        }
        say <<"END";
            $Name, $Name, bo-$by
            Bonanna-fanna fo-$fy
            Fee fi mo-$my
            $Name!
    END
    }

```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/roger-bell-west/perl/ch-2.pl)

Roger in his usual terse style shows us just how compact a solution can be. This version really only requires a small change in the regex quantifier to grab more letters.

```perl
    sub ng {
      my $name=shift;
      (my $tail=$name) =~ s/^[bcdfghjklmnpqrstvwxz]*//i;
      if ($tail eq $name) {
        $tail=lc($tail);
      }
      return "$name, $name, bo-b$tail\nBonana-fanna fo-f$tail\nFee fi mo-m$tail\n$name!";
    }

```


## different BEATS, different METERS, different DRUMMERS
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/abigail/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/jo-37/perl/ch-2.pl), and
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/pete-houston/perl/ch-2.pl)

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/james-smith/perl/ch-2.pl)

James takes a more aggressive approach to the culling, stripping both any leading vowels and the first consonant sound encountered, with "y" included to that list. But the more interesting aspect to his submission is his method: a format template is first constructed and the verse is produced by a `sprintf` statement. This in itself is uncommon but not unique; that part is his use of format parameter indices, like `%1$s`. This label, for instance, uses `1$` to tell `sprintf` to use the [1]-indexed parameter for substitution. Be aware the parameter list is 0-indexed as expected, but the format occupies the first slot, so the values start at index 1. If you want to also specify a width, that goes after the `$`.

In this way he can construct a list for the characters "b", "f" and "m" as they do or do not appear, and easily reference the original name input again at the end of the template.

```perl
    my $TEMPLATE = '%1$s, %1$s, bo-%3$s%2$s
    Bonana-fanna fo-%4$s%2$s
    Fee fi mo-%5$s%2$s
    %1$s!

    ';
    my $REGEX = '^[aeiou]*([bcdfghjklmnpqrstvwxyz])';

    print map { the_name_game( $_ ) } qw(Katie Lucy James Bob Fred Mike Aaron Abel);
    #done_testing();

    sub the_name_game {
      return sprintf $TEMPLATE, $_[0], $_[0]=~s{$REGEX}{}ri, map { $_ eq lc $1?'':$_ } qw(b f m);
    }
```

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/pete-houston/perl/ch-2.pl)

Pete takes his improvements to the algorithm to the next level. For one, he first pretreats the name text with `Text::Unidecode`, which transliterates the Unicode to ASCII, before deciding how to act on stripping the leading sounds. The transliterated text is only used to *decide* the substitution and isn't used in the verse construction itself, so the leading consonants sounds in "Владимир" ("Vladimir") are detected and the "В" is removed (and not matched to the "b" in the rhyme).

Pete strips all clustered consonants from the leading part of the name, rather than the first letter, but then makes a unique and impressive alteration for the special cases of leading "b","f" or "m". He splits the consonant cluster itself into leading and trailing components, then re-inserts the trailing part where the lead matches the special case. Confused? Look at the result for Frank:

*Frank, Frank, bo-bank
Bonana-fanna fo-rank
Fee fi mo-mank
Frank!*

See that "r" slipped back in? It makes the result quite pleasing.

```perl
    my ($consonants) = unidecode ($n) =~ /^([^aeiou]*)/i;
    say $consonants;
    my $trail = lc $n;
    my $s = substr ($trail, 0, length ($consonants), '');

    my ($trimlead, $trimrest) = ('' ne $s) ? split //, lc ($s), 2 : ('', '');
    say "$trimlead, $trimrest, $trail";

    $trimlead = unidecode ($trimlead);

    # Closure to handle leading b, f, m special cases.
    sub lead {
        my $l = shift;
        return ($trimlead eq $l ? $trimrest : $l) . $trail;
    }

    my %h;
    $h{$_} = lead ($_) for qw/b f m/;

    print <<EOT;
    $n, $n, bo-$h{b}
    Bonana-fanna fo-$h{f}
    Fee fi mo-$h{m}
    $n!

    EOT
```


[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/jo-37/perl/ch-2.pl)

Jorg starts with a warning:

>At first sight this is seemingly trivial, though the rules are not too specific.  But there be dragons.

Jorg makes the most comprehensive effort we will see today at establishing a rule set to handle a large number of special cases. To give an idea, here are some of the rules he employs. From his comments:

* A leading "y" is regarded as a consonant if followed by a vowel and as a vowel otherwise.
* The "h" is dropped before and after a consonant.
* Treating q/gu/gi specially depending on a following vowel and taking 'ph' as 'f'.
* Even then the remainder may start with the to-be-prefixed letter...

There is also a clause allowing the user to input a name with an unstressed first syllable broken out with a hyphen, such as "Ma-donna". In this case the the unaccented syllable will be dropped after the first repetition, improving the meter. Note the recapitalization of the second syllable:

```
    Madonna, Donna, bo-bonna,
    Bonana-fanna fo-fonna
    Fee fi mo-monna
    Madonna!

```

His `name` routine returns a hash of all the variations on a name required to produce the song verse: straight, unaccented, individual cases structured to preced a "b", "f" and "m". As I said, certainly the most elaborate set of rules we've seen here today.

```perl
    sub name {
        # Operating on default input.
        local $_ = lc shift;
        my %name;

        # Title case w/o hyphen.
        $name{t} = ucfirst tr/-//dr;

        # Drop any unstressed leading part.
        s/.*-//;

        # Title case stressed remainder.
        $name{s} = ucfirst;

        # Remove the first consonant-like letter(s) and capture the common
        # ones.
        s{^(?|
                y (?=[aeiou])  |
                qu             |
                gu (?=[ei])    |
                gi (?=[aou])   |
                h ( (?&CONS) ) |    # rare cases
                ( (?&CONS) h? )     # consider ch, ph, rh, sh, th...
            )
            (?(DEFINE) (?<CONS>[bcdfghj-np-tv-xz]) )}
        {}x;

        # Convert 'ph' to 'f' in the removed letters.
        my $r = ($1 // '') =~ s/ph/f/r;

        # Generate the prefixed variants.
        for my $p (qw(b f m)) {
            # Do not prepend the letter if it was removed or
            # it is the start of the remainder.
            $name{$p} = $p x (none {/^$p/} $r, $_) . $_;
        }

        \%name;
    }
```


[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/abigail/perl/ch-2.pl)

Abigail [has no time for this, and refuses to play](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-105/abigail/perl/ch-2.pl).

He lays out his reasoning in a lengthy missive, and is certainly welcome here with his opinion, but I don't share his conclusion. All I can say is we seem at cross-purposes on the root objectives here. Compared to the previous task, which has a mathematically correct answer (subject to some precision), this task is rooted in language, itself an irregularly defined human construct based in practical use rather than academic perfection.

NLP can never be perfect in every case and every language, so the mere existence this imperfection cannot preclude making any efforts toward that lofty goal. I don't consider this the right place to speak to his argumentation, but suffice to say much of my opening statement indirectly applies, and furthermore some of the more complex strategies we've seen do address some of his concerns. The phonetic rules mapping text to vocal sounds are ultimately fallible, but for the large part they do their job. A rules-based system can accomplish the goal, and if we need a separate rule to accommodate both "Shlomo" and the less-common "Schlomo" (Sigmund Freud's given name), so be it.

Anyways, I always value his contributions, and encourage people to read his analysis for a critical viewpoint. I suggest using this as a basis to observe how some of the other members have addressed similar thinking. He makes some good points, and any truly robust solution will need to address them.


------------------------------------------

---

<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, I somehow continue to maintain my bearings. Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC093BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *READ* these *BLOG* *LINKS*:

**( *don't think, trust your training, you're in the zone, just do it ...* )**


**Aaron Smith**

 * [Perl Weekly Challenge 105 - Aaron Smith](https://aaronreidsmith.github.io/blog/perl-weekly-challenge-105/) ( *Raku* )

**Abigail**

 * [Perl Weekly Challenge 105: Nth Root &#8211; Abigail's Programming Blog](https://wp.me/pcxd30-xl) ( *Perl* )

**Adam Russell**

 * [Newton’s Method and Perl Formats: The Weekly Challenge 105 — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2021/03/28) ( *Perl* )

**Arne Sommer**

 * [Named Roots with Raku and Perl](https://raku-musings.com/named-roots.html) ( *Perl & Raku* )

**Dave Jacoby**

 * [Root, Root, bo-Boot: Perl Weekly Challenge 105 | Committed to Memory](https://jacoby.github.io/2021/03/23/root-root-boboot-perl-weekly-challenge-105.html) ( *Perl* )

**Flavio Poletti**

 * [PWC105 - Nth root - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/03/24/pwc105-nth-root/) ( *Perl* )
 * [PWC105 - The Name Game - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/03/25/pwc105-the-name-game/) ( *Perl* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 105](https://www.braincells.com/perl/2021/03/perl_weekly_challenge_week_105.html) ( *Perl & Raku* )

**James Smith**

 * [Perl weekly challenge 105 | James Curtis-Smith](http://blogs.perl.org/users/james_curtis-smith/2021/03/perl-weekly-challenge-105.html) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 105: Nth Root and The Name Game | laurent_r](http://blogs.perl.org/users/laurent_r/2021/03/perl-weekly-challenge-105-nth-root-and-the-name-game.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 105: singing roots – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2021/03/22/PerlWeeklyChallenge105.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 105: singing roots – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2021/03/22/PerlWeeklyChallenge105.html#task2) ( *Raku* )

**Roger Bell_West**

 * [Perl Weekly Challenge 105: Name Root](https://blog.firedrake.org/archive/2021/03/Perl_Weekly_Challenge_105__Name_Root.html)










