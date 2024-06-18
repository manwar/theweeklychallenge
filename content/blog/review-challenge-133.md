---
author:       Colin Crain
date:         2021-10-31T00:00:00
description:  "Colin Crain › Perl Weekly Review #133"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #133"
image:        images/blog/p5-review-challenge-133.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-132/).* )

Welcome to the Perl review pages for **Week 133** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-133/) or the summary [**recap**](/blog/recap-challenge-133/) of the challenge. But don't worry, the challenges themselves are repeated and presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please feel free to email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC133TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC133TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC133BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC133TASK1}

# Integer Square Root
*Submitted by: Mohammad S Anwar*

You are given a positive integer $N.

Write a script to calculate the integer square root of the given number.

Please avoid using built-in function. Find out more about it [here](https://en.wikipedia.org/wiki/Integer_square_root).

**Examples**
```
    Input: $N = 10
    Output: 3

    Input: $N = 27
    Output: 5

    Input: $N = 85
    Output: 9

    Input: $N = 101
    Output: 10

```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/abigail/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/adam-russell/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/athanasius/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/polettix/perl/ch-1.pl),
[**Ian Goodnight**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/iangoodnight/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/jo-37/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/lubos-kolouch/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/mattneleigh/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/mohammad-anwar/perl/ch-1.pl),
[**Paul Fajman**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/paul-fajman/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/pete-houston/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/peter-campbell-smith/perl/ch-1.pl),
[**Rage311**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/rage311/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/sgreen/perl/ch-1.pl),
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/steven-wilson/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/ulrich-rieke/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/wlmb/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/wanderdoc/perl/ch-1.pl)

Welcome to the review of week 133 of The Weekly Challenge. There were 26 submissions for the first task this past week.

The common reading of what was being asked here was to calculate a square root, or in this case the floor of a square root, without using the built-in function provided. This saw several search strategies to find the result, from simple incrementation to much more complex mathematical analyses.

We note there was also some ambiguity in the written description, which led to some unexpected directions in the interpretations. Hence the solutions sometimes found themselves solving quite different problems from the common reading, in ways I admit that never crossed my mind.

But then again, its always the stuff that I never thought of, the truly unexpected stuff, that I find makes life interesting.


## BLACK BOX DATA from a RANDOM SECTION across the SUBMISSIONS
[**Ian Goodnight**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/iangoodnight/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/laurent-rosenfeld/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/sgreen/perl/ch-1.pl),
[**Rage311**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/rage311/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/wlmb/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/dave-jacoby/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/athanasius/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/polettix/perl/ch-1.pl),
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/abigail/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/peter-campbell-smith/perl/ch-1.pl), and
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/roger-bell-west/perl/ch-1.pl)

Calculating the integer square root took the guise of either making increasingly precise estimations — a category that includes counting upwards from 1 — or alternately implementing a modification of the standard pencil-and-paper algorithm, finding digits of the solution from high-to-low, at each position choosing the largest digit that does not exceed the target when the partially constructed number is squared.

[**Ian Goodnight**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/iangoodnight/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/iangoodnight/javascript/ch-1.js), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/iangoodnight/ruby/ch-1.rb)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge - 133](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/iangoodnight/perl/README.md)

Ian starts us off and running with a very direct approach: start computing squares, counting upwards, and stop when the given value is exceeded. The integer square root will be the highest integer whose square is less than the target, so in this algorithm that will be the final count minus 1.

```perl
    # Crawl through squares starting with 0
    my $i = 0;
    while ( $i * $i <= $input ) {
      $i++;
    }

    # Return the highest passing number
    return --$i;
```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/laurent-rosenfeld/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 133: Integer Square Roots and Smith Numbers |aurent_r](http://blogs.perl.org/users/laurent_r/2021/10/perl-weekly-challenge-133-integer-square-roots-and-smith-numbers.html)

Counting upwards from 0 is all well and good, and the method will always find a solution in a reasonable amount of time for all but the most ridiculously large values. However
merely adding 1 to the previous candidate value leaves plenty of room for a more efficiently-placed next guess.

Laurent gives us a solution based on a binary search pattern, with successive estimates halved and compared against the target value, with the delta applied toward either the high or low value. In this way we can start painting in broad strokes, narrowing and honing our edge with each iteration.

He then goes on to improve that basic strategy further by, instead of using half the number for the initial estimate, substituting the smallest power of 2 larger than the square root of the target, which he derives using the formula

```
    2 ** (int((log($c)/log(2))/2) + 1
```

We can improve even further on our successive guesses by using Newton's method, a technique Laurent mentions but is not used in his Perl submission. But don't worry, we'll visit that technique soon enough.

```perl
    sub sqroot {
        # Bisection method
        my $c = shift;
        my $start = 1;
        my $end = $c;
        my $est = 2 ** (int((log($c)/log(2))/2) + 1);
        while (1) {
            say "\tIntermediate values: $start, $est, and $end";
            last if abs($end-$start) <= 1;
            if ($est ** 2 > $c) {
                $end = $est;
            } else {
                $start = $est;
            }
            $est = int (($end + $start) / 2);
        }
        return $est;
    }
```

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/sgreen/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 133](https://dev.to/simongreennet/weekly-challenge-133-7gi)

Meanwhile Simon swaps complexity for brevity with a short, concise brute-force attack.

```perl
    sub main {
        my $N = shift;

        # Sanity check
        die "You must specify a positive integer\n"               unless defined $N;
        die "The value doesn't appear to be a positive integer\n" unless $N =~ /^[1-9][0-9]*$/;

        # We do this the crude way
        my $isqrt = 1;
        $isqrt++ while ( $isqrt + 1 )**2 <= $N;

        # Display the result
        say $isqrt;
    }
```

[**Rage311**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/rage311/perl/ch-1.pl)

However Rage311 [this would not be an *emergency* line, mind you, but rather a general helpline ...to, er, rage I suppose. Or then again perhaps something completely different. Refusing to further speculate I will move on... -*ed*]

Anyway, refocusing... *welcome back Rage311! Nice to see you again! Hope you've been doing well! Glad to have you back, let me get you a cocktail!*... wait, what were we talking about? Oh right, Heron's method.

Following in the footsteps of Simon's brevity, Rage311 demonstrates that there exists a quite compact resolution to the problem using a variant of Newton's method called, alternately, Heron's method, or the [Babylonian method](https://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Babylonian_method).

Ok, hold on. I have to digress yet again to make the comment that because Heron lived well before Newton, our insinuated timeline makes no temporal sense in any universe that does not contain Doctor Who, who is, as far as I know, an entirely fictional construct. We are fortunately saved from this apparent paradox by [Stigler's Law of Eponymy](https://en.wikipedia.org/wiki/Stigler%27s_law_of_eponymy) which quite convincingly argues that no scientific discovery ends up named after its original discoverer — the fact that even Stigler himself attributes his own law to Robert K. Merton only drives home this point.

So now that we have taken even more time and perhaps more accurately rephrased Newton's method as a generalization of Heron's earlier technique, what is that method anyway?

The method improves on the binary search pattern by acknowledging the parabolic growth of squared values against their roots. Compared to a given root R such that R x R = x, the target value, for an overestimate S, where S > R, then the value S/x will thus be an underestimate, and bisecting this search space and finding the average value will thus provide an improved estimate on the root over simple binary subdivision.

It's quite compact to boot. The algorithm is run in a loop, homing in until the desired accuracy is attained.

As demonstrated, all this happens within the `while` loop. Because we're using integer division, the process converges quite quickly.

```perl
    sub int_sqrt ($in) {
      my $guess = int($in / 2);
      while ((my $new_guess = int(($guess + int($in / $guess)) * 0.5)) != $guess) {
        $guess = $new_guess;
      }
      return $guess;
    }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/wlmb/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 133 – W. Luis Mochán](https://wlmb.github.io/2021/10/06/PWC133/)

```
    √-1=Come on, let's get real
    √0=0
    √1=1
    √2=1
    √3=1
    √4=2
    √5=2
    √6=2
    √7=2
    √8=2
    √9=3
    √10=3
```

>**“He that would pun, would pick a pocket.”** <br>
>—Alexander Pope

Not to impune Luis' integrity — for that I direct his ire towards Pope — but commentary, and commentary on commentary aside, Luis provides us with a splendid variation on the mathematical convergence we've been discussing.

He lays out his derivation quite thoroughly in [his writeup on the subject](https://wlmb.github.io/2021/10/06/PWC133/), and I will refer our readers over there for the skinny on the underlying mathematical reasoning.

```perl
    sub int_sqrt{
        my $x0=my $N=shift;
        return "Come on, let's get real" if $N<0;
        return $N if $x0==0;
        my $x1=(($N/$x0+$x0)/2); # initial guess
        ($x0,$x1)=($x1, (($N/$x1+$x1)/2)) while($x1<$x0);
        return $x0;
    }
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/dave-jacoby/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Mr. Smith Squares Off: The Weekly Challenge #133 | Committed to Memory](https://jacoby.github.io/2021/10/05/mr-smith-squares-off-the-weekly-challenge-133.html)

Oscillating back over into the land of iterative simplicity, for most reasonably-sized values there is no great overarching motivation to perform the task in the most efficient manner possible, other than perhaps to revel in the beauty of a tight algorithm. On the other hand, there is a beauty in simplicity itself to counter that found in the brevity of Heron's method.

Here Dave gives us another example simply counting up from 1; with modern processors we can examine quite a large range of candidates in factions of a second.

```perl
    sub isqrt2 ($n) {
        my $j = 1;
        while (1) {
            return $j - 1 if $n < $j**2;
            $j++;
        }
        return 1;
    }
```

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/arne-sommer/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/arne-sommer/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Smithe Thee Squarely with Raku and Perl](https://raku-musings.com/smithe-squarely.html)

Although Perl does not have a stand-alone integer division operator, an often overlooked one-stop alternative for select cases is bit-shifting to the right to divide by two. This is of course only accurately useful when the divisor is itself a multiple of two, but that also just so happens to be the case we have here.

In the middle of Arne's submission we can see the core formula from Heron's method, where we find the average of the current candidate value and the inverse around the target to refine the guess on each iteration. Again, using integer math this will converge quite quickly.

```perl
    sub int_sqare_root ($number)
    {
      my $x0 = $number >> 1;

      if ($x0)
      {
        my $x1 = ( $x0 + $number / $x0 ) >> 1;

        while ($x1 < $x0)
        {
          $x0 = $x1;
          $x1 = ( $x0 + $number / $x0 ) >> 1;
        }
        return $x0;
      }
      else
      {
        return $number;
      }
    }
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/athanasius/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/athanasius/raku/ch-1.raku)

The monk provides us with a brace of solutions today. In the first, a neat and compact version of Heron's method, here described as Newton's method, is used. This is much as what we've already seen, so instead we'll focus on the second technique, a recursive function that progressively adds additional significant digits to the result as it goes, getting more and more refined as it loops in on itself.

First Heron's method:

```perl
    sub int_sqrt_newton
    {
        my ($n) = @_;

        # x0 = 2^(⎣log2(n) / 2⎦ + 1) gives a good starting value for x0 (see
        # https://en.wikipedia.org/wiki/Integer_square_root#Numerical_example); but
        # x0 = ($n / 2) + 1 is an acceptable (and simpler) alternative :-)

        my  $x0 = 2 ** (int( log($n) / $DBL_LOG_2) + 1);
        my  $x1 = ($x0 + ($n / $x0)) / 2;

        while ($x1 < $x0)
        {
            $x0 =  $x1;
            $x1 = ($x0 + ($n / $x0)) / 2;
        }

        return $x0;
    }
```

Which is followed by the digit-building recursion technique. This looks for the largest digit at each position that when the result is squared does not exceed the target value. We work the algorithm until we have acquired the one's place, and we are done with the integer component of the root.

```perl
    sub int_sqrt_digit                                         # Recursive function
    {
        my ($n) = @_;

        return $n if $n < 2;

        my $small_cand = 2 * int_sqrt_digit( int( $n / 4 ) );
        my $large_cand = $small_cand + 1;

        return ($large_cand * $large_cand > $n) ? $small_cand : $large_cand;
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC133 - Integer Square Root - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/10/06/pwc133-integer-square-root/)

Flavio gives another example of Heron, using bit shifting to bring our real numbers back into the land of integers, keeping everything from floating away.

I'm sorry, I can't help myself. But that was some quality wordplay. Pope would have a word.

```perl
    sub integer_square_root ($n) {
       return $n if $n < 2;
       my $x = $n >> 1;  # first estimate
       my $y = $x + 1;   # just to get started with $x < $y
       ($x, $y) = (($x + int($n / $x)) >> 1, $x) while $x < $y;
       return $y;
    }
```

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/abigail/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 133: Integer Square Root](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-133-1.html)

I have noticed, the longer I interact, that Abigail has a broad tendency to bring to us, shall we say unusual interpretations of the directives. This, combined with an extraordinarily expansive toolbox of techniques consistently yields novel results, this particular challenge being no exception.

When apparently asked not to use the built-in `sqrt` function in Perl, most people took this as instruction to build their own function using any number of means, as we have seen many examples of so far. Or so it was, all hinging on the reading of the exact phrase: "Please avoid using built-in function."

We are a global community, and although The Weekly Challenge is an English-language website, English is likely not the even the first language of a majority of our membership. It's impossible to say of course for sure without asking, but I feel quite confident in the likelihood of the statement: if not true, it must be close. Consequently
I've found any ambiguity in the text description is likely to be amplified, with the results often far-reaching.

In this case the omission of the declarative "the" has apparently led Abigail to a reading not only to abstain from using the square root function, but *any* built-in Perl functions at all. A literal reading in this way leads to an interesting inversion of the situation where using modules to compute the integer square root directly is perfectly acceptable, but printing the result, requiring `print()`, or `say()`, is what cases the problem.

They get around this by calling AWK to do the processing using backticks, which as a quote operator presumably is taken to circumvent the proscription against functions. Personally I see an opening for a semantic discussion on drawing a hard line between "operators", "routines" and "functions" in this context, but I'm not going to raise it.

After getting AWK to write the result for us, the Perl program looks like this:

```perl
    `awk 'BEGIN {print (int (sqrt (${\s/[^0-9]+//gr}))) > "/dev/tty"}'` for <>;
```

Honestly I find these semantic digressive tangents unexpectedly delightful, albeit often puzzling at first.

[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/peter-campbell-smith/perl/ch-1.pl)

I've also found, after writing so many of these reviews, that quite often after finding what I consider to be a unique outlier interpretation of the task description, and then  writing it up as such, that lo and behold what I thought was unique inexplicably pops up again as though it were commonplace. Here, coincidentally, this has happened with what has turned out to be the immediately following selection. I have come to conclude that life, as it works out, is a lot less unique than we think it is. Even for the weird stuff. Maybe especially for the weird stuff.

Peter gives us another tightly-crafted example of a binary search pattern to study, but with the added twist that, again: no functions. Oh, and operators are not just inline functions, which needs to be a necessary predicate for this to logic to flow.

What we end up with is a nice presentation of expressive coding done under an artificial constraint. I find myself again expounding on the creative benefit of such exercises — they do not model real life, but I have found more and more that real life doesn't exactly model real life either, and practicing problem solving under unusual, nonsensical and unpredictable constraints can be quite useful later when unusual, nonsensical and unpredicted situations inevitably arise.

As they will. Oh, they will. Trust me on that one.

```perl
    $low = 1;    # answer can't be less than this
    $high = $n;  # or more than this

    while (1) {

        # get a trial answer which is the average of $low and $high (rounded up)
        $odd = ($low + $high) & 1 ? 1 : 0;   # because we aren't allowed to use int()
        $try = ($low + $high + $odd) / 2;

        # if the trial's square is larger than n, set the new $high to the trial value
        if ($try**2 > $n) {
        	$high = $try;

        # or if it is less than or equal, set the new $low to the trial value
        } else {
        	$low = $try;
        }

        # and finish when $low is just 1 less than $high
        last if $high == $low + 1;
    }
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: Perl Weekly Challenge 133: Rooting the Smith](https://blog.firedrake.org/archive/2021/10/Perl_Weekly_Challenge_133__Rooting_the_Smith.html)

After what has turned out to be an unexpectedly wild ride, Roger takes us home with one of his tightly-crafted, to-the-point procedures: an implementation of Heron's method, with integer division accomplished using right shifts. It's such an elegant algorithm — it's nice to leave on this note.

```perl
    sub isqrt {
      my $n=shift;
      my $k=$n>>1;
      my $x=1;
      while ($x) {
        my $k1=($k+$n/$k) >> 1;
        if ($k1 >= $k) {
          $x=0;
        }
        $k=$k1;
      }
      return $k;
    }
```



## Blogs and Additional Submissions in Guest Languages for Task 1:

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/adam-russell/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Nuweb](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/adam-russell/nuweb/ch-1.w)


[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/jaldhar-h-vyas/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/jaldhar-h-vyas/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 133](https://www.braincells.com/perl/2021/10/perl_weekly_challenge_week_133.html)


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/james-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #133](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-133/james-smith)


[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/lubos-kolouch/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/lubos-kolouch/python/ch-1.py)


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/ulrich-rieke/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/ulrich-rieke/cpp/ch-1.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/ulrich-rieke/haskell/ch-1.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/ulrich-rieke/raku/ch-1.raku)








------------------------------------------





---

# TASK 2 {#PWC133TASK2}

# Smith Numbers
*Submitted by: Mohammad S Anwar*

Write a script to generate first 10 Smith Numbers in base 10.

According to Wikipedia:

In number theory, a Smith number is a composite number for which, in a given number base, the sum of its digits is equal to the sum of the digits in its prime factorization in the given number base.

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/abigail/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/arne-sommer/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/athanasius/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/cheok-yin-fung/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/polettix/perl/ch-2.pl),
[**Ian Goodnight**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/iangoodnight/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/jo-37/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/laurent-rosenfeld/perl/ch-2.pl),
[**Paul Fajman**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/paul-fajman/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/pete-houston/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/peter-campbell-smith/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/sgreen/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/ulrich-rieke/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/wlmb/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/wanderdoc/perl/ch-2.pl)


There were 21 submissions for the second task this past week. The Smith numbers, as they are known, represent what I see as a common meta-theme through Number Theory; that is the combination of several simpler, not-obviously-related properties or analytical processes, seemingly performed for no other reason than to look and see if any new deeper connection can be found in the underlying connective tissue.

Number Theory seems very postmodern to me like that.

This task remixes prime factoring, a basic function, with positional summing; something akin to the digital root, only in this case only summing the positional digits once, rather than repeatedly re-summing the result until a single place is achieved.

---

In an aside, I have always found digital summing, and especially the digital root, to be a weird, semi-mystical coupling of the ethereal mathematical plane, outside the base number systems we use to represent the entities there, with the carnal physicality of those representations, denuded and broken down into their rawest form. This melding hovers around the edges of numerology, where the method one uses to express these shapeless ideas itself has meaning: as though "one-half hour" and "thirty minutes" were somehow different things because we talked about them differently. It's all very Platonic and Kabbalistic at the same time. I feel certain, too, that in at least some cases this observation is correct, with respect to the mathematicians making these pursuits. Several of the ones I've met in life have been unusual people, to put it mildly. "Head in the clouds" does not begin to cover it. I only relate my experience — YMMV.

---

How exactly Wilanski got to casually factoring his brother-in-law's phone number:

4937775 = 3 × 5 × 5 × 65837

remains unexplained. But to continue the example, the sum of the digits in that number:

4 + 9 + 3 + 7 + 7 + 7 + 5 = 42

and that of the digits used to compose its prime factors:

3 + 5 + 5 + 6 + 5 + 8 + 3 + 7 = 42

can be seen to be the same, in this Ur-case for the Smith numbers the very interesting in itself number [42](https://en.wikipedia.org/wiki/42_(number)). Any analytical relationship between the Smith numbers and the Ultimate Answer to Life, the Universe and Everything remains to be proven.

## A TASTING FLIGHT of SAMPLES from our COLLECTION
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/ulrich-rieke/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/james-smith/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/pete-houston/perl/ch-2.pl),
[**Paul Fajman**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/paul-fajman/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/cheok-yin-fung/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/duncan-c-white/perl/ch-2.pl),
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/wanderdoc/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/jaldhar-h-vyas/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/peter-campbell-smith/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/e-choroba/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/sgreen/perl/ch-2.pl), and
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/jo-37/perl/ch-2.pl)

As stated, this task involves multiple, disparate processes merged to produce a new unique  idea: we have on the one hand producing the base values of a prime factoring, and on the other  summing the individual digits from one or more numbers to produce a new value. Combining these ideas produces a simple comparative equality, determining whether a number fits the criteria of being a Smith. It thus fell to how these sub-tasks were performed to yield the differences we saw amongst the submissions. With that in mind, sometimes we'll look to the factorization, and at others to the digit summation and Smith verification steps. There were interesting things to notice and look at all around.


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/ulrich-rieke/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/ulrich-rieke/cpp/ch-2.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/ulrich-rieke/haskell/ch-2.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/ulrich-rieke/raku/ch-2.raku)

Ulrich gives us a cluster of subroutine functions, crafted to piece apart the logic determining whether a given value meets the criteria of Smithness. We are given a function to determine whether a number is composite, `isComposite()`, which in turn calls `isPrime()`, which uses `findDivisors()`. A short-circuiting logical `&&` follows the composite test with `isSmithNumber()`, which calls its own `prime_factorialize()` routine and combines that with `digitSum()` to make the determination.

The methodical naming convention lays out the parts to the process quite well. The main loop starts counting up from 1 to check for valid members of the sequence.

```perl
    sub isSmithNumber {
      my $num = shift ;
      my $digitsum = toDigitSum( $num ) ;
      my @primefactors = prime_factorialize( $num ) ;
      my %factorCount ;
      map { $factorCount{$_}++ } @primefactors ;
      my $factorSum = 0 ;
      for my $key ( keys %factorCount ) {
          $factorSum += ( toDigitSum( $key ) * $factorCount{ $key } ) ;
      }
      if ( $factorSum == $digitsum ) {
          return 1 ;
      }
      else {
          return 0 ;
      }
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/james-smith/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/james-smith/c/ch-2.c)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #133](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-133/james-smith)

James condenses these steps into two halves and a wrapper to hold them: `sum_digits()` and `sum_prime_factors()`, with `smith_numbers` to compare the results. Again the subroutine names clearly explain their action, in this case each returning only a sum to be compared. In the wrapper function this comparison is made and in a series of linked logical sections following the comparison: the valid number is added to a list of solutions; a counter is incremented; and final list is returned when the count is complete. The chain of logical statements is cleverly set up to short-circuit and commonly fail at either the validation or the count-checking step, causing the loop to increment and start again, evaluating the next value.

Of note as well non-composite numbers, on failing that particular check, are added to a growing cache of prime numbers. There are several places in James' solution where processes do similar dual-duty actions, making for a tightly-crafted result.

```perl
    sub smith_numbers { ## This is the short form! using &&
      my ( $count, $n, @sn ) = (shift,1);
      $sum_pf[ $count * 40 ] = 0; ## Pre-size array
      ( sum_digits( $n ) == sum_prime_factors $n ) &&     ## Diff between sums of factors == 0
      ( push @sn, $n                             ) &&     ## push
      ( @sn == $count                            ) &&     ## check length & return...
      ( return @sn                               ) while $n++;
    }
```

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/pete-houston/perl/ch-2.pl)

Pete reaches out to what amounts to the master tome for Number Theory in Perl, `Math::Prime::Util`, to use its `is_prime()` and `factor()` functions. As might well be expected offloading these processes onto an external C library makes the solution quite fast and compact, especially after we add in `sum()` from `List::Util`. The underlying logic is quite plainly visible in the control flow remaining.

```perl
    use List::Util 'sum';
    use Math::Prime::Util qw/is_prime  factor/;

    while ($n < 10) {
        if (smith ($i)) {
        	print "$i\n";
        	$n++;
        }
        $i++;
    }

    sub smith {
        my $x = shift;
        return 0 if is_prime ($x);
        return dsum ($x) == dsum (prime_factors ($x));
    }

    sub dsum {
        return sum split //, shift;
    }

    sub prime_factors {
        return join '', factor (shift);
    }
```

[**Paul Fajman**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/paul-fajman/perl/ch-2.pl)

Paul takes a somewhat intermediate position amongst these three approaches, importing `sum()` from `List::Util`, but compiling his own list of primes and deriving the factorizations. Numbers are sequentially tried, working upwards from 1, with successful candidates added to the output.

He provides a nicely systematic procedure to do his factoring:

```perl
    # Is the number divisible by 2?
      while ($number % 2 eq 0) {
        $number = $number / 2;
        unshift @factors, 2;
      }
    # Numbers must be odd. Skip by 2s to find rest of prime factors
      for ($i = 3; $i< sqrt($number);$i+=2){
        while ($number % $i == 0) {
          unshift @factors, $i;
          $number = $number/$i;
        }
      }

      # Capture any large prime numbers
      if ($number > 2) {
        unshift @factors, $number;
      }

      next if $#factors eq 0; #Prime Number
```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/cheok-yin-fung/perl/ch-2.pl)

CY breaks down her hunt for the numbers into discreet steps: first compiling a list of prime numbers, with a corresponding hash lookup, and then using that list to factor and ultimately validate Smith numbers according to the criteria given.

To generate her list of primes she counts upwards through odd numbers, checking each candidate against the compiled list of primes already gathered. Those that aren't found divisible are added to the list.

A suitably large number of primes is produced, and this list it iterated through, dividing out prime instances and adding them to the factor list. Only after a specific prime fails to continue to divide out do we move on to the next.

```perl
    sub factorize {
        my $n = $_[0];
        my @pf = ();
        my $k = 0;
        while ($n != 1) {
            if ($n % $primes[$k] == 0) {
                push @pf, $primes[$k];
                $n /= $primes[$k];
            }
            else {
                $k++;
            }
        }
        return [@pf];
    }

    sub generate_smiths {
        my $i = 4;
        while ($i <= $max_search) {
            if (    !defined($primedigitsum{$i})
                 && digitsum($i) == arr_digitsum(factorize($i))
               ) {
                push @smiths, $i;
            }
            $i++;
        }
    }
```

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/duncan-c-white/perl/ch-2.pl)

Duncan draws on his own [`MakePrimes`](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/duncan-c-white/perl/MakePrimes.pm) library, which we've seen several times in similar incarnations all the way back to PWC 022. Starting with a long list of prime numbers, factoring a value is as easy as iterating through this list from the beginning and dividing down, preserving the successful factors as they arise.

Once the factors have been determined, a pair of digit summations, one on the number, the other on a list of factors, are used to select out the Smith numbers from the candidates.

```perl
    fun is_smith( $x )
    {
        return 0 if $isprime{$x};

        my @pfact = prime_factors( $x, @primes );
        #die "debug: pf($x) = ".join(',',@pfact);

        my $sumdigits = sum( split(//,$x ) );		# sum of digits
        #say "debug: smth($x): sumdigits=$sumdigits";

        my $sumpf = sum( map { sum( split(//,$_) ) } @pfact );
        #say "debug: smth($x): sumpf=$sumpf";

        return 0 unless $sumdigits == $sumpf;
        return 1;
    }
```

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/wanderdoc/perl/ch-2.pl)

The aforementioned module `Math::Prime::Util` was unashamedly built for number theory  — this is revealed unambiguously in that fact one can import the module using its alias `use ntheory`.

Here the doctor brings in ntheory to provide the function `is_prime()`, which is used to quickly weed out non-composite values from the candidates, counted upwards from 1 until a suficient quantity of validated Smith numbers are found.

Of note as well, `Mojo::UserAgent` is used to fetch a long list of Smith numbers from the [Online Encyclopedia of Integer Sequences](https://oeis.org/A006753/b006753.txt). These values are hashed and the lookup used to verify the algorithm.

A pair of functions to factor a candidate and sum the digits of a number are provided, however, and these are used for the final determination:

```perl
    sub prime_factors
    {
         my $num = $_[0];
         my $half = $num / 2;
         my @factors;

         for my $cand ( 2 .. $half )
         {
              if ( $num % $cand == 0 )
              {
                   push @factors, $cand;
                   $num /= $cand;
                   redo;
              }
         }
         return @factors;
    }

    sub sum_of_digits { return $_[0] < 10 ? $_[0] : sum(split(//,$_[0]));}
```

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/jaldhar-h-vyas/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/jaldhar-h-vyas/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 133](https://www.braincells.com/perl/2021/10/perl_weekly_challenge_week_133.html)


Code reuse is a the purest of goals in programming, allowing us to focus our efforts on the new without repeating the old; anchoring us in the present in lieu of the past; pointing us boldly looking forward into the future. Sounds pretty epic when you say it like that, doesn't it? And they say romance is dead.

Jaldhar here revels in his ability to reuse his prime factorization code yet again, after several previous successful incarnations. A novel method we saw utilized was his declaring a `state` variable in the function `nextPrime()` to create a simple iterator, computing and delivering the next prime value on demand.

```perl
    sub nextPrime {
        state $i = 1;
        if (scalar @_) {
            $i = shift;
        }

        while ($i++) {
            if (isPrime($i)) {
                return $i;
            }
        }
    }

    sub factorize {
        my ($n, $primeFactors) = @_;
        if ($n < 2) {
            return;
        }

        my $p = nextPrime(1);
        while ($p <= $n) {

            if ($n % $p == 0) {
                push @{$primeFactors}, $p;
                factorize($n / $p, $primeFactors);
            }
            $p = nextPrime();
        }
    }
```

[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/peter-campbell-smith/perl/ch-2.pl)

Peter brings us a homemade Sieve of Eratosthenes to produce a master list of primes to work with, producing a array of 1s and 0s, with the index denoting the numeric value in question and the element setting indicating whether or not it is prime: starting from an array of all 1s, divisible non-primes, when found, are set to 0. Thus on completion of the sieving process values that remain 1 indicate that index is prime. The sieve is used both to quickly step past prime numbers under consideration, as a prime cannot be a Smith, and to divide down with to factor values.

```perl
    sub make_sieve {

        # make sieve of Eratosthenes
        my ($arg, $j, $k, @sieve);

        # set all values provisionally to 1 (ie prime)
        $arg = $_[0];
        for $j (0 .. $arg) {
        	$sieve[$j] = 1;
        }

        # for each prime in turn, set its multiples to 0 (ie not prime)
        for $j (2 .. $arg) {
        	next unless $sieve[$j];   # $j is not prime
        	last if $j ** 2 > $arg;
        	for $k ($j .. $arg) {
        		last if $k * $j > $arg;
        		$sieve[$k * $j] = 0;
        	}
        }
        return @sieve;
    }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/e-choroba/perl/ch-2.pl)

Choroba starts with a short list of primes, which is steadily augmented as larger and larger numbers are factored. At any given pass, only the space between the last prime found and the ceiling of one-half the target to be checked is searched for more primes to be added, rolling both the actions of searching for primes and searching for Smith numbers into a single loop.

Within the loop for factoring out a single prime, note the `redo` step, which allows multiple instances of a given factor to be removed and noted without advancing to the next prime candidate.

```perl
    sub prime_factors {
        my ($n) = @_;

        my $p = $primes[-1] + 2;
        while ($p < 1 + $n / 2) {
            push @primes, $p unless grep 0 == $p % $_, @primes;
            $p += 2;
        }

        my $m = $n;
        my @factors;
        for my $p (@primes) {
            if (0 == $m % $p) {
                $m /= $p;
                push @factors, $p;
                redo
            }
        }
        return @factors
    }
```

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/sgreen/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 133](https://dev.to/simongreennet/weekly-challenge-133-7gi)

Simon provides us with a unique approach to cataloging his factors, composing a hash where prime keys point to a power multipler in the value. 5 squared would thus result in the pair `(5 => 2)`. This necessitates a `map` step to compute the correct digit sum for these factors, for the factor repeated *n* times, with *n* the exponent.

```perl
    sub _prime_factors_sum {
        my $number  = shift;
        my %factors = ();
        my $counter = 2;

        # Get the primes that make up this number
        while ( $number != 1 ) {
            if ( $number % $counter == 0 ) {
                $factors{$counter}++;
                $number /= $counter;
            }
            else {
                $counter++;
            }
        }

        # A prime is not a composite number, and therefore cannot be a
        #  Smiths number. Returning -1 ensures the eqaulity is false
        return -1 if scalar( keys(%factors) ) == 1 and ( values(%factors) )[0] == 1;

        # Return the sum of they sum of digits in the prime multiplied by the power
        # For example 265 = 5¹ * 53¹. The equation is 5 * 1 + (5 + 3) * 1
        return sum( map { _digit_sum($_) * $factors{$_} } keys %factors );
    }
```



[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/jo-37/perl/ch-2.pl)

Finally, it's fitting to end with Jorg, as he has been bringing us tidbits from `Math::Prime::Util` for some time now; it is no surprise he follows suit here. As this exhaustive module contains several hundred routines and pertinent constants for these numerical pursuits, there are many applicable paths available to the task at hand. Jorg has found a compact and elegant solution using only three complex functions, `vecsum()`, `to_digits()` and `factor_exp()`, to dispatch the task in a single expressive line.

```perl
    # Math::Prime::Util has everything we need to solve this task:
    # - convert a number into its representation for a given base
    # - find all factors (and their multiplicity) of a number
    # - sum the elements of a list
    # Excluding primes as trivial cases of Smith numbers.
    #
    # See http://oeis.org/A006753

    sub is_smith ($n, $base=10) {
        vecsum(todigits $n, $base) ==
            vecsum map {$_->[1] * vecsum todigits $_->[0], $base}
            grep {$_->[0] != $n} factor_exp $n;
    }
```

As a bonus, he wraps up everything in a coroutine generator, through the aegis of `Coro::Generator`, delivering the next Smith number on demand whenever it is requested. These coroutines, it is said "look like functions but act like iterators". As `Coro` is asynchronous, implementing a scheme of cooperative threads, this is an interesting development indeed.  In a sense the generator also acts like a lazy list, deferring calculation of the next number until it is required.

```perl
    main: {
        # Create a generator for Smith numbers.
        my $smith = generator {
            for (my $n = 1;; $n++) {
                yield $n if is_smith($n, $base);
            }
        };

        say join ', ', map $smith->(), 1 .. shift;
    }
```



## Blogs and Additional Submissions in Guest Languages for Task 2:


[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/abigail/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/abigail/c/ch-2.c)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 133: Smith Numbers](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-133-2.html)


[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/arne-sommer/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/arne-sommer/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Smithe Thee Squarely with Raku and Perl](https://raku-musings.com/smithe-squarely.html)


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/athanasius/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/athanasius/raku/ch-2.raku)


[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/dave-jacoby/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Mr. Smith Squares Off: The Weekly Challenge #133 | Committed to Memory](https://jacoby.github.io/2021/10/05/mr-smith-squares-off-the-weekly-challenge-133.html)


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC133 - Smith Numbers - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/10/07/pwc133-smith-numbers/)


[**Ian Goodnight**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/iangoodnight/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/iangoodnight/javascript/ch-2.js), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/iangoodnight/ruby/ch-2.rb)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge - 133](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/iangoodnight/perl/README.md)

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/laurent-rosenfeld/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/laurent-rosenfeld/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 133: Integer Square Roots and Smith Numbers |aurent_r](http://blogs.perl.org/users/laurent_r/2021/10/perl-weekly-challenge-133-integer-square-roots-and-smith-numbers.html)


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/roger-bell-west/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/roger-bell-west/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: Perl Weekly Challenge 133: Rooting the Smith](https://blog.firedrake.org/archive/2021/10/Perl_Weekly_Challenge_133__Rooting_the_Smith.html)

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/wlmb/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 133 – W. Luis Mochán](https://wlmb.github.io/2021/10/06/PWC133/)


---






---

# BLOGS {#PWC133BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, I somehow continue to maintain my bearings. Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC133BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *READ* these *BLOG* *LINKS*:

**( *don't think, trust your training, you're in the zone, just do it ...* )**


**Abigail**

 * [Perl Weekly Challenge 133: Integer Square Root](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-133-1.html) ( *Perl* )
 * [Perl Weekly Challenge 133: Smith Numbers](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-133-2.html) ( *Perl* )

**Andinus**

 * [Challenge 133](https://andinus.unfla.me/pwc/challenge-133/) ( *Raku* )

**Arne Sommer**

 * [Smithe Thee Squarely with Raku and Perl](https://raku-musings.com/smithe-squarely.html) ( *Perl & Raku* )

**Dave Jacoby**

 * [Mr. Smith Squares Off: The Weekly Challenge #133 | Committed to Memory](https://jacoby.github.io/2021/10/05/mr-smith-squares-off-the-weekly-challenge-133.html) ( *Perl* )

**Flavio Poletti**

 * [PWC133 - Integer Square Root - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/10/06/pwc133-integer-square-root/) ( *Perl & Raku* )
 * [PWC133 - Smith Numbers - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/10/07/pwc133-smith-numbers/) ( *Perl & Raku* )

**Ian Goodnight**

 * [Perl Weekly Challenge - 133](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/iangoodnight/perl/README.md) ( *Perl* )
 * [Perl Weekly Challenge - 133](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/iangoodnight/javascript/README.md) ( *JavaScript* )
 * [Perl Weekly Challenge - 133](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-133/iangoodnight/ruby/README.md) ( *Ruby* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 133](https://www.braincells.com/perl/2021/10/perl_weekly_challenge_week_133.html) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #133](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-133/james-smith) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 133: Integer Square Roots and Smith Numbers |aurent_r](http://blogs.perl.org/users/laurent_r/2021/10/perl-weekly-challenge-133-integer-square-roots-and-smith-numbers.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 133: in aush – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2021/10/09/PerlWeeklyChallegne133.html#task1) ( *Raku* )


**Roger Bell_West**

 * [RogerBW's Blog: Perl Weekly Challenge 133: Rooting the Smith](https://blog.firedrake.org/archive/2021/10/Perl_Weekly_Challenge_133__Rooting_the_Smith.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 133](https://dev.to/simongreennet/weekly-challenge-133-7gi) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 133 – W. Luis Mochán](https://wlmb.github.io/2021/10/06/PWC133/) ( *Perl* )
