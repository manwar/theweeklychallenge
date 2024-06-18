---
author:       Colin Crain
date:         2022-04-24T00:00:00
description:  "Colin Crain › Perl Weekly Review #157"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #157"
image:        images/blog/p5-review-challenge-157.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-156/).* )

Welcome to the Perl review pages for **Week 157** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

before we begin, you may wish to revisit either the pages for the [**original tasks**](/blog/perl-weekly-challenge-157/) or the summary [**recap**](/blog/recap-challenge-157/) of the challenge. But don't worry about it, the challenge text will be repeated and presented as we progress from task to task.

Oh, and one more thing before we get started:


### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please feel free to email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

<div align= center><strong>...So finally, without further ado...</strong></div>

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC157TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC157TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC157BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC157TASK1}

# Pythagorean Means
*Submitted by: Mohammad S Anwar*
You are given a set of integers.

Write a script to compute all three Pythagorean Means

* Arithmetic Mean,
* Geometric Mean and
* Harmonic Mean

of the given set of integers.
Please refer to wikipedia page for more informations.

**Example 1:**
```
    Input: @n = (1,3,5,6,9)
    Output: AM = 4.8, GM = 3.8, HM = 2.8
```


**Example 2:**
```
    Input: @n = (2,4,6,8,10)
    Output: AM = 6.0, GM = 5.2, HM = 4.4
```


**Example 3:**

```

    Input: @n = (1,2,3,4,5)
    Output: AM = 3.0, GM = 2.6, HM = 2.2

```





## about the solutions
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/athanasius/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/colin-crain/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/jo-37/perl/ch-1.pl),
[**Kueppo Wesley**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/kueppo-wesley/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/lubos-kolouch/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/mattneleigh/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/perlboy1967/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/paulo-custodio/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/pete-houston/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/peter-campbell-smith/perl/ch-1.pl),
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/pokgopun/perl/ch-1.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/robert-dicicco/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/sgreen/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/ulrich-rieke/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/wlmb/perl/ch-1.pl)

When we speak of the mean, there is an intuitive understanding of "right in the middle" that comes naturally, without thinking too much about what exactly that means mathematically. And the intuitive grasp is not wrong — it's only that sometimes the methods used to get to that middle-ground aren't always the same, depending on what it is exactly that is being evaluated.

The arithmetic mean is the most common way to think of a mean, and it equates to the average value across a data set: if I have four piles of stuff with 1, 3, 7 and 9 items in them, the average number of items in a pile is found by looking at all the piles together and dividing them again evenly; in this case the result is 5 items.

Simplifying a bit, this mean between any two values is thus the average, made by summing and dividing the sum in half. On a number line the point would be half-way between the initial values.

The geometric mean on the other hand finds a middle point between two values such that the *ratio* of the first value to the mean is the same as the ratio of the mean to the second value. Consider the numbers 1 and 9: the half-way point between the two is 5, which is the arithmetic mean we've just looked at. But the ratios for these intervals between the values are 1:4 and 4:9. For the number 3, however, 1:3 is the same as 3:9, and so 3 is the *geometric* mean between the two.

For the harmonic mean, we are similarly comparing ratios, but in this case the ratio of the first term to the mean considered in turn as a ratio to the first term is the same as the ratio of the mean to the second term, considered as a ratio to the second. Put another way, we're comparing the ratios to the mean back to their outside terms. Practically, this  flips the arithmetic mean on its head, summing the reciprocals and averaging them, and then taking the reciprocal again.

Archytas of Tarentum, who coined the term *harmonic* mean, described it as:

>**the mean when they are such that, by whatever part of itself the first
term exceeds the second, by that part of the third the middle term exceeds
the third**

For the harmonic mean we take the mean of the inverses of the arithmetic mean, and considers the values as a *rates*, in relation to a consistent nominal unity.

I have chosen to define the Pythagorean Means here in terms of ratios, because this mirrors the historical context in which they were first developed. Pythagoras was beyond a geometrician a musician, and spent considerable time thinking about the idea of subdividing musical strings into 3:2 and 2:1 relationships, resulting in a version of what we now consider a 12-tone scale. When looking to place a note between two other notes, you can see, or perhaps hear, how various competing ideas of "in the middle" can arise. The harmonic mean was coined specifically referring to this context, as when used in this way it produced scales with a pleasing musicality.


There were 25 submissions for the first task this past week.

## say it like YOU MEAN IT
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/polettix/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/sgreen/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/jo-37/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/laurent-rosenfeld/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/ulrich-rieke/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/jaldhar-h-vyas/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/athanasius/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/cheok-yin-fung/perl/ch-1.pl), and
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/peter-campbell-smith/perl/ch-1.pl)

The first challenge is a straightforward exercise in translation — from a mathematical formula to a corresponding code algorithm. There was considerable self-similarity amongst the methods we saw, but there were also a few interesting variations to look at along the way

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC157 - Pythagorean Means - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/03/23/pwc157-pythagorean-means/)

Flavio will begin with the first demonstration, with three subroutines for the three requested means. As we are processing lists, he imports some convenient routines from `List:Util` to help him along: `sum`, `product` and later, `reduce`.

```perl
    sub arithmetic_mean (@n) { sum(@n) / @n }
    sub geometric_mean  (@n) { abs(product(@n)) ** (1 / @n) }
    sub harmonic_mean   (@n) { 1 / arithmetic_mean(map { 1 / $_ } @n) }
```

For the arithmetic, we sum the input list values and divide them by the number of elements, which we get by using the list itself in scalar context.

For the geometric, we take the absolute value of the product of the list and take the *n*-th root, with *n* again being the number of elements.

Then for the harmonic mean we have the reciprocal dual of the arithmetic mean. What we do there is take the arithmetic mean of the reciprocals of the list items, and then take the reciprocal of that result.

Before we continue, however, he also provides an alternate form of the geometric using `reduce`:

```perl
    use List::Util 'reduce';
    sub gmalt (@n) { (reduce {$a * $b} @n) ** (1 / @n) }
```

The thing about `reduce()`, though is that it's sort of a list-wise function archetype for any process that takes all of the list items and obtains a single result by altering the applied function. What he's done here is constructed his own `product()`: items from the list are taken one-by-one and multiplied, with the growing result kept in the accumulator `$a`, and the individual terms slotted into `$b` as we perform the traversal. Alternately, by using the block `{ $a + $b }` we can create a `sum()` function. As both of these  already exist pre-built in `List::Util`, it does seem a bit silly to use `reduce()` instead and explicitly construct them. But keep an eye — we're nowhere near finished with `reduce`.

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/sgreen/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/sgreen/python/ch-1.py)


&nbsp;&nbsp;**blog writeup:**
[Three means and big bases](https://dev.to/simongreennet/three-means-and-big-bases-3o2f)

Simon eschews bothering with separate subroutines, inlining three equations. Of note his harmonic mean is a coded little differently, being first rearranged to the number of elements divided by the sum of the reciprocals of the list items. Mathematically they are the same.

He does, however, make an effort to avoid a divide-by-zero error should a list element be 0. On the other hand he mentions the possibility that the entire list may sum to 0, allowing a second pathway for an error to arise, but that one he lets slide with a note. Seems reasonable to me.

```perl
    # Calculate the different means
    my $c = scalar(@n);

    my $am = sum(@n) / $c;
    my $gm = product(@n)**( 1 / $c );
    my $hm = $c / reduce { $a + ( $b == 0 ? 0 : 1 / $b ) } 0, @n;
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/jo-37/perl/ch-1.pl)

As stated before, `reduce()` is list-wise proto-function, that can be instantiated with different applied blocks to mimic the more specific functions `sum` and `product`. So ultimately all three can be, er, "reduced", to a `reduce` form.

So why use three functions when you can use one? And more so, if each function processes the input list one element at a time to accumulate a result, why not compute all of the means in a single pass, with one complicated block?

That last part is a little tricky, but Jorg has risen to the task.

```perl
    # Feed the number of elements, the sum, the product and the sum of the
    # reciprocals of the given list into an anonymous sub to calculate
    # the requested means.
    # The examples call for results with a precision of one decimal digit,
    # thus not spending any effort to produce exact results.
    sub pythagorean_means {
        sub {($_[1] / $_[0], $_[2] ** (1 / $_[0]), $_[0] / $_[3])}->(
            scalar @_,
            (reduce {[$a->[0] + $b, $a->[1] * abs($b), $a->[2] + 1 / $b]}
            [0, 1, 0], @_)->@*
        );
    }
```

With only one accumulator, this takes the form of a three-element list for each of the three means that will be calculated simultaneously. But we're getting ahead of ourself.

Because this is functional programming, much of the control flow is best understood backwards, reading from the right working leftwards. What we have here is, on the first line, an anonymous function reference being called with a set of parameters that follow after the final opening parenthesis. We'll get to the function in a bit, and start with the parameters. Here we have the array length at index [0], and a `reduce` function that produces three values in the aforementioned tripartite accumulator: the sum of the elements, the product of the elements, and the sum of the reciprocals. For those confused, the sum requires the accumulator to start with 0, but the product needs to me the multiplicative identity, unity. And yes there is an anonymous array dereferencing in there too to flatten the list properly.

Back to the first line, now we have this list of four elements as parameters, we pass it to a function that divides the second with the first to produce the average, the third raised to the fractional *n*-th power with the first to get the *n*-th root for the geometric, and the first divided by the fourth to get the harmonic.

Whew! I'm a bit out of breath. Does anyone have any water? I may need to sit for a bit.

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/laurent-rosenfeld/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 157: Pythagorean Means and Brazilian Number](http://blogs.perl.org/users/laurent_r/2022/03/perl-weekly-challenge-157-pythagorean-means-and-brazilian-number.html)

After that workout I think it good to rest up and regain our bearings. Laurent's solution is clean, well laid out and computes everything in a straightforward manner.

This challenge does not need to be particularly complicated.

```perl
    my $n = scalar @in;

    my $sum = 0;
    $sum += $_ for @in;
    my $am = $sum / $n;

    my $prod = 1;
    $prod *= $_ for @in;
    my $gm = $prod ** (1/$n);

    my $invsum = 0;
    $invsum += 1/$_ for @in;
    my $hm = $n / $invsum;
```

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/ulrich-rieke/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/ulrich-rieke/cpp/ch-1.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/ulrich-rieke/haskell/ch-1.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/ulrich-rieke/raku/ch-1.raku)

Ulrich shares a nice little app with us, taking a space-separated list of integers from a command-line prompt, and then delivering a well-formatted report of the values.

Internally, we can see the familiar core logic to produce the three variables.

```perl
    use List::Util qw ( product sum ) ;

    say "Enter a number of integers, separated by a blank!" ;
    my $line = <STDIN> ;
    chomp $line ;
    my @numbers = split( /\s+/ , $line ) ;
    my $len = scalar( @numbers ) ;
    my $am = sum( @numbers ) / $len ;
    my $gm = (product( @numbers )) ** (1 / $len ) ;
    my $hm = $len / ( sum ( map { 1 / $_ } @numbers ) ) ;
    my @formatted = map { sprintf( "%.1f" , $_) } ( $am , $gm , $hm ) ;
    say "AM = $formatted[0] , GM = $formatted[1] , HM = $formatted[2]" ;
```

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/jaldhar-h-vyas/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/jaldhar-h-vyas/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 157](https://www.braincells.com/perl/2022/03/perl_weekly_challenge_week_157.html)

Some members go to great lengths to exactly mimic the examples, which here display one and only one decimal place. To reproduce this behavior Jaldhar introduces us to `Math::Round` which uses a well-defined set of rules to deliver the required, and only the required, precision.

For those unfamiliar with scientific calculations excess precision in a result is actually a bad thing, as it can introduce errors by giving the experimenter the impression that accuracy is really there when it is not: one significant digit of precision going in yields one significant digit going out, and calculating internally to fifteen decimal places does not affect this fundamental truth.

```perl
    use Math::Round qw/ nearest /;

    sub product {
        my ($arr) = @_;
        my $total = 1;

        for my $elem (@{$arr}) {
            $total *= $elem;
        }

        return $total;
    }

    sub sum {
        my ($arr) = @_;
        my $total = 0;

        for my $elem (@{$arr}) {
            $total += $elem;
        }

        return $total;
    }

    my @n = @ARGV;

    my $am = sum(\@n) / scalar @n;
    my $gm = nearest(0.1, (abs product(\@n)) ** (-1 / scalar -@n));
    my $hm = nearest(0.1, scalar @n / sum([map { 1 / $_; } @n]));

    say "AM = $am, GM = $gm, HM = $hm";
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/athanasius/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/athanasius/raku/ch-1.raku)

As readers of this page will have noticed by now, I'm an... *enthusiast*... of clean code layout. Even though it makes no difference to run, maintenance and reuse is a whole 'nother thing.

So I'm a sucker for lining things up vertically. Often when I pause, thinking of what to do next, I'll fidget and line things up, using a couple of different parts of my brain at the same time. Consequently, I find the monk's submission quite pleasing.

```perl
    my $n     = scalar @n;                                    # Cardinal number

    my $sum   = 0;
       $sum  += $_ for @n;
    my $am    = $sum / $n;                                    # Arithmetic mean

    my $prod  = 1;
       $prod *= $_ for @n;
    my $gm    = abs( $prod ) ** (1 / $n);                     # Geometric  mean

       $sum   = 0;
       $sum  += $_ for map { 1 / $_ } @n;
    my $hm    = $n / $sum;                                    # Harmonic   mean

    printf "Output: AM = %.*f, GM = %.*f, HM = %.*f\n",
        $DECIMALS, $am,
        $DECIMALS, $gm,
        $DECIMALS, $hm;
```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/cheok-yin-fung/perl/ch-1.pl)

Being a mathematician, CY approaches the geometric mean in a unique manner. The result ends up the same, but you can see the mathematical language she uses to express it is in terms of an average multiplicand — this term to the power of the list length will yield the product of the list.

I also like the use of an associative array to hold what amount to attributes of the initial value. It's solid structure with little to no overhead.

```perl
    use List::Util qw/sum product/;

    if (defined($ARGV[0])) {
        my @in = @ARGV;
        my %ans = %{mean(@in)};
        say "AM = ", sprintf("%.1f", $ans{a});
        say "GM = ", sprintf("%.1f", $ans{g});
        say "HM = ", sprintf("%.1f", $ans{h});
    }



    sub mean {
        my @n = @_;
        my %mean = (
            "a" => (sum @n) / scalar @n,
            "g" => exp(log(product @n)/ scalar @n),
            "h" => (scalar @n)/(sum map {1/$_} @n),
        );
        return \%mean;
    }
```

[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/peter-campbell-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Mean Brazilians](https://pjcs-pwc.blogspot.com/2022/03/mean-brazilians.html)

Finally we'll end with Peter, who changes this up a little bit by pre-processing a pass through the input list, calculating three new variables: a sum, a product and a sum of the reciprocals. When we add another variable for the number of list elements, we have all of the parts required to calculate any of the requested means.

```perl
       # get started
       $product = 1;
       $sum = $reciprocals = 0;
       $string = '';

       # form sum, product and sum of reciprocals
       for $n (@$example) {
       	$sum += $n;
       	$product *= $n;
       	$reciprocals += 1 / $n;
       	$string .= qq[$n, ];
       }

       # and tell the world
       say qq[\nInput:  \@n = (] . substr($string, 0, -2) . qq[)\nOutput: ] .
       	qq[AM = ] .   sprintf('%1.1f', ($sum / scalar @$example)) .
       	qq[, GM = ] . sprintf('%1.1f', ($product ** (1 / scalar @$example))) .
       	qq[, HM = ] . sprintf('%1.1f', (scalar @$example / $reciprocals));
```



## Blogs and Additional Submissions in Guest Languages for Task 1:


[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/colin-crain/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/colin-crain/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Pythagoras Was a Meanie - Programming Excursions in Perl and Raku](https://colincrain.com/2022/03/26/pythagoras-was-a-meanie/)


[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/dave-jacoby/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[I Cannot Count To A Brazillian: Weekly Challenge #157 | Committed to Memory](https://jacoby.github.io/2022/03/21/i-cannot-count-to-a-brazillian-weekly-challenge-157.html)


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/james-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[The Weekly Challenge 157](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-157/james-smith)


[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/lubos-kolouch/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/lubos-kolouch/python/ch-1.py)


[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/mohammad-anwar/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/mohammad-anwar/raku/ch-1.raku)


[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/pokgopun/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/pokgopun/go/ch-1.go)


[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/robert-dicicco/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/robert-dicicco/julia/ch-1.jl), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/robert-dicicco/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/robert-dicicco/raku/ch-1.raku), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/robert-dicicco/ruby/ch-1.rb), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/robert-dicicco/tcl/ch-1.tcl)


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/roger-bell-west/javascript/ch-1.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/roger-bell-west/kotlin/ch-1.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/roger-bell-west/lua/ch-1.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 157: Pythagoras in Brazil](https://blog.firedrake.org/archive/2022/03/The_Weekly_Challenge_157__Pythagoras_in_Brazil.html)


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/wlmb/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 157 – W. Luis Mochán](https://wlmb.github.io/2022/03/21/PWC157/)


------------------------------------------





---

# TASK 2 {#PWC157TASK2}

# Brazilian Number
*Submitted by: Mohammad S Anwar*

You are given a number $n > 3.

Write a script to find out if the given number is a Brazilian Number.

A positive integer number N has at least one natural number B where 1 < B < N-1 where the representation of N in base B has same digits.


**Example 1:**
```
    Input: $n = 7
    Output: 1

    Since 7 in base 2 is 111.
```


**Example 2:**
```
    Input: $n = 6
    Output: 0

    Since 6 in base 2 is 110,
          6 in base 3 is 20 and
          6 in base 4 is 12.
```



## about the solutions
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/athanasius/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/jo-37/perl/ch-2.pl),
[**Kueppo Wesley**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/kueppo-wesley/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/laurent-rosenfeld/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/lubos-kolouch/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/mattneleigh/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/perlboy1967/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/paulo-custodio/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/pete-houston/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/peter-campbell-smith/perl/ch-2.pl),
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/pokgopun/perl/ch-2.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/robert-dicicco/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/sgreen/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/ulrich-rieke/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/wlmb/perl/ch-2.pl)

In 1994, at the  9th Iberoamerican Mathematical Olympiad in Fortaleza, Brazil, the first  problem for the competitors was prefaced by the following novel definition:

>**A number n > 0 is called “Brazilian” if there exists an integer b such that 1 <  b < n – 1 for which the representation of n in base b is written with all equal digits**

This basic form — of a number composed of a number of repetitions of a single digit — was not the novel part, having been studied at various time for a few decades at that point. These numbers are commonly called [repdigits](https://en.wikipedia.org/wiki/Repdigit), or monodigits.

The specific coinage here, on the other hand, was not tying the representation to a single base; rather noting that it could be done in *some* base.


Well, almost any. *Terms and conditions may apply.*
As it turns out any number n is a repdigit when represented in a base one smaller than its value, *n* - 1. Although perhaps not obvious, the reasoning behind this is the same as the (possibly) more-familiar decimal expansion of ninths: 10/9 = 1.1(1), which is to say an infinite list of 1s. When we divide 10 by the value one less — 9 — then we get 1 with a reptend of 1, and if we write 10 in base-9, we get 11, a repdigit. The infinitely-repeating reptend of a decimal expansion and repdigits are, as might be expected, closely related concepts.

There were 24 submissions for the second task this past week.

## a South-American STATE OF MIND
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/duncan-c-white/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/mattneleigh/perl/ch-2.pl),
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/pokgopun/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/james-smith/perl/ch-2.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/robert-dicicco/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/e-choroba/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/paulo-custodio/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/dave-jacoby/perl/ch-2.pl),
[**Kueppo Wesley**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/kueppo-wesley/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/perlboy1967/perl/ch-2.pl), and
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/colin-crain/perl/ch-2.pl)

The task, of course, requires a fair bit of base-conversion in one form or another, which brings to mind the question of how to represent the larger base digits above 9. These are traditionally assigned the character values A through Z, but this schema, or any other for that matter, is one of convenience rather than settled law. As the converted values are only used internally to track repeated digits, we also saw an alternative approach to the problem that solves the various engineering trade-offs in a different way.

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/duncan-c-white/perl/ch-2.pl)

Duncan will start us off with a nice exploration of the subject, and how we can avoid assigning a single unique digit to each number entirely.

In his `isbrazillion()` wrapper function, a short loop through allowed bases in turn call two helpers: `inbase()`, which converts a number to a given base, and `repeated()` which analyses the result for a single repeated character.

In the `inbase()` function, the base conversion is performed by keeping track of the remainder in repeated integer division. As we mentioned above, the technical problem that came up in generalized base-conversion was the lack of designated characters in the larger bases to represent the numeric values. Here Duncan resolves the problem by simply maintaining the remainder as a decimal index for the number within a base, separating the positions with a delimiting hyphen. Thus the number 1707 in base-12 is rendered "11-10-3" instead of the more common "BA3". Of course the number itself does not care how it is represented, and this method sidesteps the question of what to do above base-36 entirely.

```perl
    fun inbase( $n, $b )
    {
        die "inbase($n,base $b): $b must be >1\n"
        	if $b<2;

        my @x;
        while( $n>0 )
        {
        	push @x, $n % $b;
        	$n = int($n/$b);
        }
        return join('-',reverse @x);
    }
```

The `repeated()` routine splits the converted string on those hyphens into an array of values. After shifting the first value off of the array, each subsequent element is compared to the first, and if any are not equal the original then we are not repeating and the function returns 0. Otherwise if we successfully run the gauntlet then we have a proper repdigit number.

```perl
    fun repeated( $dashstr )
    {
        my @x = split(/-/, $dashstr);
        die "repeated: dashstr $dashstr has no '-'s\n"
        	if @x==0;
        my $n = shift @x;
        foreach my $v (@x)
        {
        	return 0 if $v != $n;
        }
        return 1;
    }
```

For those confused by the `fun` keyword, he's using `Function::Parameter` to provide subroutine signatures, which come via introduced functions, or `fun`.

Once he's implemented the steps for determining whether a number is Brazilian, he then goes on to encase the whole thing in a loop to alternately find the first *n* numbers to satisfy the conditions.

[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/mattneleigh/perl/ch-2.pl)

Matthew follows a similar reasoning, only instead of producing his base conversion as an encoded string, he simply maintains the calculation as a list of remainder values to be examined. Again all the math is still kept as decimal values.

```perl
    sub number_to_digit_list{
        my $number = int(shift());
        my $base = int(shift());

        return(undef)
            if($base < 2);

        my @digits;

        # Special case of the number being zero
        if($number == 0){
            return((0));
        }

        # Not zero- repeatedly convert remainders to
        # "digits" then truncate the dividend...
        while($number){
            unshift(@digits, $number % $base);
            $number = int($number / $base);
        }

        return(@digits);

    }
```

Once a list of remainders is returned, the elements can be compared to each other and a flag is set if any differ.

```perl
    foreach(@digits){
        if($ARG != $digits[0]){
            $match = 0;
            last;
        }
    }
```

[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/pokgopun/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/pokgopun/go/ch-2.go)

Pokgopun provides an interesting scheme where the remainders when performing base conversion are not even kept in any sort of order. Using the remainders as hash keys, each instance found increments an associated counter. Then, when the conversion is complete, we don't even need to count the results; instead we can count the hash keys. If there is only one key, there is only one value, signifying a repdigit.

```perl
      	{
      		my $r = $n % $b;
      		$digits{$r}++;
      		push @digits, $r if $debug;
      		last unless $n = int($n / $b);
      		redo;
      	}
      	if (keys %digits == 1) {
      		printf(", Since %d in base %d is %s", $_, $b, join("",reverse @digits)) if $debug;
      		$o = 1;
      		last;
      	}
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/james-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[The Weekly Challenge 157](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-157/james-smith)

The next step, then, is to inline the verification check into to base conversion, recording the very first remainder and comparing all subsequent values to it. If any are not equal, then that base is not a repdigit and we immediately move to the next.

This results in a very compact routine.

```perl
    sub is_brazilian {
      O: for my $b ( 2 .. $_[0]/2 - 1 ) {
        my $l = (my $n=$_[0]) % $b;
        $n % $b == $l || next O while $n = int($n/$b);
        return 1;
      }
      0;
    }
```

[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/robert-dicicco/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/robert-dicicco/julia/ch-2.jl), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/robert-dicicco/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/robert-dicicco/raku/ch-2.raku), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/robert-dicicco/ruby/ch-2.rb)

Alternately, another common way to handle the problem was to off-load the computation of the base conversion off to a specialized imported function, picking one of a myriad of modules that are available for use.

The general trend in base conversion, though, is to use the alphanumeric character set of 10 digits plus 26 letters to accomodate representing the bases 2 through 36. Practically we can only then evaluate the numbers 4 through 38. This is a little restrictive, I must say, but the challenge did not specify a range, and all of these modules can be expanded with a larger character set to handle larger bases. The numbers, as we've said, don't care which symbols are used, as long as they are unique.

Robert imports `Math::NumberBase` to do his converting, which certainly sound appropriate. In this scheme, a number container object is instantiated in a specified base, and then filled from a base-10 value.

Once he has a converted number string, is is split into an array of characters and the first digit is compared to each of the others.

```perl
    sub checkDigits {
      my $num = shift;

      my @arr = split(//, $num);  # split digits into an array
      my $digit = $arr[0];        # save first digit to match against

      foreach (1..$#arr) {        # check remaining digits
        if( $arr[$_] != $digit){  # found a digit that does not match
          return 0;               # return failure
        }
      }

      return 1;                   # return success
     }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/e-choroba/perl/ch-2.pl)

Choroba employs the talents of the module `Math::Base::Convert` to produce this remarkably compact version. A regular expression matches and captures the first character and attempts to match every subsequent character until the end of the string.

```perl
    use Math::Base::Convert qw{ cnv };

    sub is_brazilian_number ($n) {
        for my $base (2 .. $n - 2) {
            my $converted = cnv($n, 10, [0 .. $base - 1]);
            return 1 if $converted =~ /^(.)\1+$/;
        }
        return 0
    }
```

[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/paulo-custodio/perl/ch-2.pl)

Continuing through the variations, Paulo brings us `Math::BaseCnv` along with a regular expression.

```perl
    use Math::BaseCnv qw( cnv );

    my $n = $ARGV[0] or die "Usage: ch-2.pl n\n";
    say is_brazilian($n);

    sub is_brazilian {
        my($n) = @_;
        for my $b (2 .. $n-2) {
            my $cnv = cnv($n, 10, $b);
            return 1 if $cnv =~ /^(\w)\1*$/;
        }
        return 0;
    }
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/dave-jacoby/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[I Cannot Count To A Brazillian: Weekly Challenge #157 | Committed to Memory](https://jacoby.github.io/2022/03/21/i-cannot-count-to-a-brazillian-weekly-challenge-157.html)

Dave notes that the challenge number, 157, is both prime itself and the arithmetic mean  between the previous and next primes, 151 and 163. Which is both topical to the previous task and interesting in its own right.

To address the base conversion, he brings us `Math::BaseCalc` to do the job.

After the conversion, he splits the string representation into individual digits and runs the list through `uniq` form `List::Util`. Then he tests the size of he resulting array to determine whether it has only one single digit.

```perl
    use Math::BaseCalc;
    use List::Util qw{ uniq } ;

    sub brazillian_number ( $n ) {
        for my $base ( 2 .. $n - 2 ) {
            my @digits = map { $range[$_] } ( 0 .. $base - 1 );
            my $digits = join '', @digits;
            my $c      = convert_to( $n, $digits );
            my @ddigits = uniq sort split //, $c;
            return 1 if scalar @ddigits == 1;
        }
        return 0;
    }
```

[**Kueppo Wesley**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/kueppo-wesley/perl/ch-2.pl)

Wrapping up our module overview, rather than selecting a more specific tool for the task, Kueppo simply brings in the `Math::BigInt` library. which in addition to allowing arbitrary-position integers also provides a `to_base()` method.

The repetitions or lack thereof are tracked using a regular expression. This is a slightly diferent form than what we've seen previously, capturing the first digit and then looking for a string of variable length to th eend of the string that is comprised only of one or more instances of the captured digit.

```perl
    use Math::BigInt;

    print "Input: ";
    my $n = <STDIN>;

    if ($n > 2) {
        my($x, $count, $did) = (Math::BigInt->new($n), 0, 0);
        foreach (2..$n - 2) {
            my $n_in_base__ = $x->to_base($_);
            if ($n_in_base__ =~ /^(.)\g1{1, }$/) {
            	print "Output: 0\nSince $n" if (! $did);
            	print "\tin base $_ is $n_in_base__\n";
            	$did++;
            }
        }
        print "Output : 1\n" if ($did == 0);
    }
```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/perlboy1967/perl/ch-2.pl)

Niels comes in with a wildcard, bucking the trend with an interesting logical inversion: for each permissible base, and then again for each digit value within that base, he attempts to form a repdigit number that converts back into the decimal value of the input. The actual calculations required are simple, if repetitive. It's nice to see a different approach out there, reminding us there are alternate ways to solve the problem.

```perl
    foreach my $base (2 .. $n - 2) {
      foreach my $digit (1 .. $base - 1) {
        my ($sum,$pos) = (0,0);
        while ($sum < $n) {
          $sum += $digit * $base**$pos++;
        }
        if ($sum == $n) {
          say "n=$n is a Brazilian Number :: base$base(",join('|',($digit) x $pos),')';
          exit;
        }
      }
    }
```




[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/colin-crain/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/colin-crain/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Waxing Numeric - Programming Excursions in Perl and Raku](https://colincrain.com/2022/03/27/waxing-numeric/)

Circling back, we'll close the survey with my own solution. In it, a neat wrapper looping over bases supplies an up/down test on the Americo-African-Portuguese origin of a given input. This loop in turn uses a helper function that similarly validates a given base representation against continuous repetition.

We use a defined-OR operator to assign the first remainder to a variable, which is then used for comparison with any subsequent values. The remainders are kept in their decimal form, compared and then discarded as we don't care about the actual base conversion, only the self-similarity, or lack thereof, among its digits.


```perl
    sub brazilian ( $num ) {
    ## up/down check if number is a Brazilian number
        for ( 2..$num-2 ) {
            return $_ if digit_test( $num, $_ );
        }
        return 0;
    }

    sub digit_test ( $num, $base ) {
    ## up/down check for all digits are the same in a given base
    ## converts from base-10 to any given base
    ## does not internally store converted number other than
    ## single digit as base-10 sequence index: conditional
    ## 1 short-circuits returning 0 if non-repeated digit found,
    ## otherwise returns 1
        my $rem;
        my $digit;
        while ( $num > 0  ) {
            ($num, $rem) = (int( $num/$base ), $num % $base);
            $digit //= $rem;
            return 0 if $digit != $rem;
        }
        return 1;
    }
```


## Blogs and Additional Submissions in Guest Languages for Task 2:



[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/athanasius/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/athanasius/raku/ch-2.raku)


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC157 - Brazilian Number - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/03/24/pwc157-brazilian-number/)


[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/jaldhar-h-vyas/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/jaldhar-h-vyas/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 157](https://www.braincells.com/perl/2022/03/perl_weekly_challenge_week_157.html)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/laurent-rosenfeld/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/laurent-rosenfeld/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 157: Pythagorean Means and Brazilian Number](http://blogs.perl.org/users/laurent_r/2022/03/perl-weekly-challenge-157-pythagorean-means-and-brazilian-number.html)


[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/lubos-kolouch/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/lubos-kolouch/python/ch-2.py)


[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/peter-campbell-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Mean Brazilians](https://pjcs-pwc.blogspot.com/2022/03/mean-brazilians.html)


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/roger-bell-west/javascript/ch-2.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/roger-bell-west/kotlin/ch-2.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/roger-bell-west/lua/ch-2.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/roger-bell-west/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/roger-bell-west/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 157: Pythagoras in Brazil](https://blog.firedrake.org/archive/2022/03/The_Weekly_Challenge_157__Pythagoras_in_Brazil.html)


[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/sgreen/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/sgreen/python/ch-2.py)


&nbsp;&nbsp;**blog writeup:**
[Three means and big bases](https://dev.to/simongreennet/three-means-and-big-bases-3o2f)


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/ulrich-rieke/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/ulrich-rieke/cpp/ch-2.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/ulrich-rieke/haskell/ch-2.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/ulrich-rieke/raku/ch-2.raku)


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-157/wlmb/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 157 – W. Luis Mochán](https://wlmb.github.io/2022/03/21/PWC157/)



------------------------------------------





---

<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>

<center>
<h1 id="PWC157BLOGS">_________ THE BLOG PAGES _________</h1>
</center>


---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, by some miracle I somehow continue to maintain my bearings.**

**Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your Unquenchable *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC157BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *FOLLOW* these *BLOG* *LINKS*:

**( ...*don't think, trust your training, you're in the zone, just do it ...* )**


**Arne Sommer**

 * [Brazilian Means with Raku](https://raku-musings.com/brazilian-means.html) ( *Raku* )

**Colin Crain**

 * [Pythagoras Was a Meanie - Programming Excursions in Perl and Raku](https://colincrain.com/2022/03/26/pythagoras-was-a-meanie/) ( *Perl & Raku* )
 * [Waxing Numeric - Programming Excursions in Perl and Raku](https://colincrain.com/2022/03/27/waxing-numeric/) ( *Perl & Raku* )

**Dave Jacoby**

 * [I Cannot Count To A Brazillian: Weekly Challenge #157 | Committed to Memory](https://jacoby.github.io/2022/03/21/i-cannot-count-to-a-brazillian-weekly-challenge-157.html) ( *Perl* )

**Flavio Poletti**

 * [PWC157 - Pythagorean Means - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/03/23/pwc157-pythagorean-means/) ( *Perl & Raku* )
 * [PWC157 - Brazilian Number - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/03/24/pwc157-brazilian-number/) ( *Perl & Raku* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 157](https://www.braincells.com/perl/2022/03/perl_weekly_challenge_week_157.html) ( *Perl & Raku* )

**James Smith**

 * [The Weekly Challenge 157](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-157/james-smith) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 157: Pythagorean Means and Brazilian Number](http://blogs.perl.org/users/laurent_r/2022/03/perl-weekly-challenge-157-pythagorean-means-and-brazilian-number.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 157: numbers – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/03/21/PerlWeeklyChallenge157.html) ( *Raku & PostgreSQL* )

**Peter Campbell Smith**

 * [Mean Brazilians](https://pjcs-pwc.blogspot.com/2022/03/mean-brazilians.html) ( *Perl* )

**Roger Bell_West**

 * [RogerBW's Blog: The Weekly Challenge 157: Pythagoras in Brazil](https://blog.firedrake.org/archive/2022/03/The_Weekly_Challenge_157__Pythagoras_in_Brazil.html) ( *Perl & Raku* )

**Simon Green**

 * [Three means and big bases](https://dev.to/simongreennet/three-means-and-big-bases-3o2f) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 157 – W. Luis Mochán](https://wlmb.github.io/2022/03/21/PWC157/) ( *Perl* )
