
---
author:       Colin Crain
date:         2022-01-02T00:00:00
description:  "Colin Crain › Perl Weekly Review #141"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #141"
image:        images/blog/p5-review-challenge-141.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-140/).* )

Welcome to the Perl review pages for **Week 141** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-141/) or the summary [**recap**](/blog/recap-challenge-141/) of the challenge. But don't worry, the challenges themselves are repeated and presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please feel free to email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC141TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC141TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC141BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC141TASK1}

# Number Divisors
*Submitted by: Mohammad S Anwar*

Write a script to find lowest 10 positive integers having exactly 8 divisors.

**Example**

24 is the first such number having exactly 8 divisors.

1, 2, 3, 4, 6, 8, 12 and 24.


## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/abigail/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/adam-russell/perl/ch-1.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/alexander-pankoff/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/athanasius/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/colin-crain/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/polettix/perl/ch-1.pl),
[**Jake**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/jake/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/jo-37/perl/ch-1.pl),
[**Kaushik Tunuguntla**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/kaushik-tunuguntla/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/lubos-kolouch/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/perlboy1967/perl/ch-1.pl),
[**Paul Fajman**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/paul-fajman/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/paulo-custodio/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/pete-houston/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/peter-campbell-smith/perl/ch-1.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/robert-dicicco/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/sgreen/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/ulrich-rieke/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/wlmb/perl/ch-1.pl)

Before we begin we should take a moment to talk terms. You see, the thing about divisors is that we generally don't *count* them, per se, and so the rules governing such counting are more context-specific than one might expect. This specificity pops up in two places: addressing negative values and in considering both of the trivial cases of 1 and the value itself.

As usual, we will take guidance as best we can from the examples given, of which we have only one, so it's what we've got. Fortunately it seems pretty clear.

On the topic of negative integers, we do not appear to be counting those. 24 is just as divisible by -2 as it is by 2, but usually these negative correlates are excluded from lists of divisors, limiting them only to positive values — as is the case here. This distinction is commonly made; it seems that unless we are specifically discussing negative input the norm is to ignore these parallel negative values. In any case they are always easily available anyway, by multiplying each positive divisor found by -1, so we can address them with minimal effort should we desire to. In the mean while, though, we will not count them for the purposes of this challenge, which is the important part.

The second situation is less-consistently defined. For every non-zero number there are two divisors that will always be present: the multiplicative identity, 1, and the number itself, that when divided by itself yields 1. Thus 1 and the value itself are factor pairs and are always present. In the case of the number 1, these two values are the same, 1, but that does not apply here.

If we are to consider the set of every number that evenly divides a value *n*, then there are some common subsets that come into play. The divisor set that excludes *n*, for example, is called the proper divisors, or sometimes the aliquot divisors. A number with only one proper divisor, 1, is called a prime number, demonstrating that this is a common definition when counting divisors. However because 1 can be understood to divide any number its presenece can always be assumed, and so is often omitted from lists as implicit.

In this challenge, though, we are counting both 1 and the case of the number as a divisor to itself: 24 evenly divides 24, which is certainly true. By this reckoning 24 has 8 (positive) divisors, rather than the more-commonly counted 7 proper divisors.

There were 27 submissions for the first task this past week.

## A SELECTION of SUBMISSIONS, a SAMPLING of TASTES
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/sgreen/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/lubos-kolouch/perl/ch-1.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/robert-dicicco/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/e-choroba/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/paulo-custodio/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/athanasius/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/roger-bell-west/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/laurent-rosenfeld/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/perlboy1967/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/wlmb/perl/ch-1.pl)


The pattern we saw over and over was to got at it using brute-force, as not much force would ever need be applied. We are given a specific task requesting a limited number of results using a nicely composite number for our divisor count. All of the results can be found in the numbers less than 100.

I'll note that this strategy quickly falls apart should we ask for a list of numbers with 7 divisors, as the first eight values there are 64, 729, 15625, 117649, 1771561, 4826809, 24137569 and 47045881. The rate of increase seems to be slowing, sure, but at this point you can see having an efficient external compiled function computing divisor lists for you is pretty-much essential, and even then geting that last 7-factor value took a significant bit of time.

Although we were not asked for a general-purpose solution, many submissions were configurable with the judicious use of constants removed from the guts of the algorithm. Again, though, for the actual problem presented just counting the divisors and setting aside the numbers that fit the bill proved a perfectly capable approach.



[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/sgreen/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/sgreen/python/ch-1.py)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 141](https://dev.to/simongreennet/weekly-challenge-141-133e)

After a impassioned plea against the gods of over-optimization, Simon outlines his straightforward strategy: to simply acquire a list of divisors for each number and count the items in list to see if there are 8. Add 1 to get the next number to be checked and stop when we've found 10 that fit. Don't over-think it. We can safely assume all the numbers involved will be small.

```perl
    sub _divisors {
        my $number = shift;

        # One only has one divisor
        return 1 if $number == 1;

        # All other numbers have 1 and itself as divisors
        my $divisors = 2;

        # Find other divisors
        foreach my $i ( 2 .. int( $number / 2 ) ) {
            $divisors++ if $number % $i == 0;
        }

        return $divisors;
    }

    sub main {
        my $number    = 1;
        my @solutions = ();

        while ( ++$number and scalar(@solutions) < 10 ) {
            push @solutions, $number if _divisors($number) == 8;
        }

        say join ', ', @solutions;
    }
```



[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/lubos-kolouch/perl/ch-1.pl)

Lubos takes things one step further: first, he imports `Math::Factor` to provide its `factors()` function, which delivers a list of non-trivial divisors. Then, because we can always assume the number itself and 1 will be present in the divisors list, we can ignore them instead of adding them and look for only 6.

No special case need be made for the value 1 because we know quite well it doesn't have 8 divisors, whether we include it once, twice or not at all for that matter. For what it's worth, It would rather prefer to be left alone and have us stop bothering it, instead of having us repeatedly knocking on its door, only to be sent away time and again.

```perl
    use Math::Factor::XS qw/factors/;

    while ( scalar @nums < 10 ) {

        my @factors = factors($pos);

        # 1 and the number are always divisors
        push @nums, $pos if scalar @factors == 6;

        $pos++;
    }
```

[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/robert-dicicco/perl/ch-1.pl)

Robert reaches to the remarkably capable `ntheory` module, an alias for `Math::Prime::Util`, to provide him with a prepackaged `divisors` function. As lists of divisors and prime factors are almost boilerplate in the number theory world, I'm quite confident in the capabilities of the XS function offered. In fact I'm quite confident of everything that module has to offer, not the least because I'm a little scared of it. It's immensely powerful and I always keep one eye on it if it enters the room. On the other hand, with its 200 functions and constants it's certainly something you want in your corner in a fight, and worth making friends with.

`Math::Prime::Util` returns a list of all factors, not just the proper of non-trival ones, so 1 and the value itself are included. We search until we find a successful candidate and when we do, we output it and increment a counter.

```perl
    while(1){
        $num++;
        my @d = divisors($num);
        if(scalar(@d) == $FACNUM){
            print("$num =  ");
            foreach my $n (@d){
                print($n . " ");
            }
            print("\n");
            $fnd++;
            last if($fnd == $LIMIT );
           }
    }

```


[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/e-choroba/perl/ch-1.pl)

Choroba gives us two solutions for factoring. In the first, exhaustive method, he establishes a list range of integers from 1 to the number being checked, inclusive, and then filters it using `grep` to allow only those values that divide the checked value evenly; that is the division modulo yields 0 for a remainder. If the divisor count is 8 the number is tallied and the next higher candidate is checked until we have obtained 10 values.

In the second method, only the integers up to the square root are checked, and for each found the count is incremented by 2, unless the value being checked is in fact the square root, which only adds one value, itself, to the divisor list.

A benchmark is provided, and as one would perhaps expect, the second version is a few orders of magnitude faster.

```perl
    use constant {
        DIVISOR_TALLY => 8,
        RESULT_TALLY  => 10,
    };

    sub number_divisors_full {
        my @results;
        my $i = 1;
        while (@results < RESULT_TALLY) {
            my @d = grep 0 == $i % $_, 1 .. $i;
            push @results, $i if @d == DIVISOR_TALLY;
        } continue {
            ++$i;
        }
        return @results
    }

    sub number_divisors_short {
        my @results;
        my $i = 1;
        while (@results < RESULT_TALLY) {
            my $divisor_tally = 0;
            my $s = sqrt $i;
            for my $d (1 .. $s) {
                $divisor_tally += ($d == $s) ? 1 : 2 if 0 == $i % $d;
            }
            push @results, $i if $divisor_tally == DIVISOR_TALLY;
        } continue {
            ++$i;
        }
        return @results
    }
```

[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/paulo-custodio/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/paulo-custodio/python/ch-1.py)

It's always a little awkward when the square root happens to be an integer, as this only adds one value to the factor list instead of two, the factor and its complement, that multiply to the target value.

Paulo handles this special case by compliling two lists, one for those divisors up to the square root, and a second for the complement higher values. A conditional on the second list prevents the square root from being added twice. When all integers up to the square root have been checked for each candidate we are done with it.

You know, one very minor pet peeve of mine has always been the `while (1)` construct to form an infinite loop. Not keep-me-up-at-night bothered, but it always strikes me as kludgy, or something unnecessarily less than graceful. I understand why it is what it is, but I don't need to necessarily *like* it. Using Perl alternative booleans, `while ("true")` is more to the point but wordy and essentially no help, and `while (-necessary)`, whilst awesome, relies on a clever hack of the language implementation to not throw a well-deserved error. Here Paulo gives us the modified C-form: `for (;;)` which at least has spider fangs to offer. For want of a few legs: `for /\\(;;)//\`, we'd be perfect, but alas that particular line does not compile.

One (of many) things I like about Raku is the addition of a `loop { ... }` keyword. It's spec'ed to work primarily as a C-style structure: `loop ( *var* ; *condition* ; *action*)`, but when no parameters are required all that can be just left out, parentheses and all, to produce a clean, obvious infinite loop: `loop { ... }`.

```perl
    use Modern::Perl;

    use constant NUM_DIVISORS => 8;

    sub divisors {
        my($n) = @_;
        my(@div_low, @div_high);
        for (my $i = 1; $i <= sqrt($n); $i++) {
            if ($n%$i == 0) {
                push @div_low, $i;
                unshift @div_high, $n/$i if $n/$i != $i;
            }
        }
        return (@div_low, @div_high);
    }

    sub next_number {
        my($n) = @_;

        for (;;) {
            $n++;
            my @divisors = divisors($n);
            return $n if @divisors == NUM_DIVISORS;
        }
    }

    my $num = shift||10;
    my $n = 0;
    for (1..$num) {
        $n = next_number($n);
        say $n;
    }
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/athanasius/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/athanasius/raku/ch-1.raku)

The monk gives us another version of hunting for possible divisors up to the square root. As we're collecting divisors into a list here, keeping it ordered is a little tricky so we add them as we find them, divisor and complement divisor, sorting when we're done. Of course we need to make special consideration not to add the square root, if whole, twice.

```perl
    sub find_divisors
    {
        my ($n) = @_;
        my  @div;

        for my $d (1 .. int sqrt $n)
        {
            if ($n % $d == 0)
            {
                push @div, $d;

                my $d1 = $n / $d;

                push @div, $d1 if $d < $d1;
            }
        }

        return sort { $a <=> $b } @div;
    }
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 141: Binary and Tabular](https://blog.firedrake.org/archive/2021/11/The_Weekly_Challenge_141__Binary_and_Tabular.html)


Roger's submissions are always worth investigating because he has an uncanny eye for constructing small hyper-efficient structures to perform his actions. Here the procedure is basically the same as what we've seen before, but there are some small changes in the ordering. For example his detection of the square root as a divisor. First we take the integer square root and save it to a variable. Then, if that value squared is equal to the target, then it is a divisor. This triggers two actions: we increment the divisor count and we *decrement $s*. Now when we iterate through the range `(2..$s)` we skip the square root and avoid repeatedly checking for it. Any divisor found within the loop will now automatically add 2 divisors to the count, the one detected and its multiplicative complement.

```perl
    sub factorcount {
      my $n=shift;
      if ($n==1) {
        return 1;
      }
      my $f=2;
      my $s=int(sqrt($n));
      if ($s*$s == $n) {
        $s--;
        $f++;
      }
      foreach my $pf (2..$s) {
        if ($n % $pf == 0) {
          $f+=2;
        }
      }
      return $f;
    }

    sub divisors {
      my ($count,$n)=@_;
      my $nn=$n;
      my @a;
      my $t=0;
      while ($nn) {
        $t++;
        if (factorcount($t)==$count) {
          push @a,$t;
          $nn--;
        }
      }
      return \@a;
    }
```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/laurent-rosenfeld/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 141: Number Divisors and Like Numbers |aurent_r](http://blogs.perl.org/users/laurent_r/2021/12/perl-weekly-challenge-141-number-divisors-and-like-numbers.html)

Laurent gets straight to the point. The divisors, for the purposes of discussion, are all numbers less that the target value that when the value is divided by the candidate there is no remainder. So we take a list of all these possibilities and filter it using `grep`. If there are 8 divisors, our subroutine returns success.

Iterating over a large but not infinite list, that will hence never lock up and will eventually finish; we stop when we have found 10 such numbers.

```perl
    sub has_8_divisors {
        my $n = shift;
        my @divisors = grep {$n % $_ == 0} 1..$n;
        return @divisors == 8;
    }

    my $count = 0;
    for my $m (8..1_000_000) {
        say $m and $count++ if has_8_divisors $m;
        last if $count >= 10;
    }
```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/perlboy1967/perl/ch-1.pl)

Niels brings us a couple of interesting tidbits. First we have subroutine prototypes to let us know that our `hasNDivisors($$)` routine is expecting exactly two scalars, and is predeclared as such. Wanna get crazy? Sure you do! With this construction we can eliminate the parentheses in our prototyped function and call it as `hasNDivisors $n, 8`. I know, right? There's a whole new year of possibilities opening up before us.

The second is a lovely module I had almost forgotten about, because I am so used to calling up `Data::Dumper` on habit. Whereas that module is perfectly serviceable for spying on your internals, `Data::Printer` sells itself on doing a better job of it, which it arguably does. It is, for instance, certainly simpler to say `p @n;` than `say Dumper \@n`, and the output is by default more human-readable as well. It even does color, which adds a whole 'nother dimension to the playground.

```perl
    use Data::Printer output => 'stdout';

    sub hasNDivisors($$);

    my $n = 24;
    my @n;

    while (scalar(@n) < 10) {
      if (hasNDivisors($n,8)) {
        push(@n,$n);
      }
      $n++;
    }

    p @n;


    sub hasNDivisors($$) {
      my ($n,$count) = @_;

      my $i = 1;
      my @d = ($i);
      while ($i < $n) {
        push(@d,$i) if ($n % $i == 0);
        $i++;
      }

      return (scalar(@d) == $count);
    }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/wlmb/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 141 – W. Luis Mochán](https://wlmb.github.io/2021/11/29/PWC141/)

And finally, we have Luis with something completely different. More than just a tool for easy manipulation of multidimensional datasets, a job it excels at by the way, the Perl Data Language is a general-purpose framework for processing numerical data in any form.

Here Luis solves the problem using what he describes as a ["kind of Eratosthenes sieve in reverse"](). Starting with a long array, vector really, of integers. What is a vector but an ordered, positional list? Sounds like a Perl array to me. Anyway, for each of these positions we consider the position to be a value, and the value a count of occurrences. So for each position we hop to each of its multiples and increment the count by one. In the end, those positions with a count of 8 will be values with 8 divisors. If our initial list is not long enough to find the enough values we can increase the size until we succeed.

A wonderfully way to arrive where we want to go, by sidling in around through the back door.

```perl
    use PDL;
    use PDL::NiceSlice;

    #Set defaults and params. from com. line
    my %params=(try=>100, divisors=>8, results=>10, @ARGV);
    my ($try, $divisors, $results)
        =@params{qw(try divisors results)};
    my $cells=zeroes $try;

    # count divisors for each number
    $cells($_:-1:$_)+=1 for(1..$try-1);
    # find all d-multiples
    my $multiples=$cells->xvals->where($cells==$divisors);
    die "Need to increase try" unless $multiples->nelem>=$results;
    my $out=$multiples(0:$results-1);
    say "try=$try, divisors=$divisors, results=$results, out=$out";
```

This can even be reduced to a one-liner:

```perl
    perl -MPDL -MPDL::NiceSlice -E '$N=100;$a=zeroes $N;
       $a($_:-1:$_)+=1 for(1..$N-1);
       say $a->xvals->where($a==8)->(0:9);'
```




## Blogs and Additional Submissions in Guest Languages for Task 1:


[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/abigail/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/abigail/awk/ch-1.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/abigail/bash/ch-1.sh), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/abigail/bc/ch-1.bc), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/abigail/c/ch-1.c), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/abigail/go/ch-1.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/abigail/java/ch-1.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/abigail/lua/ch-1.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/abigail/node/ch-1.js), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/abigail/pascal/ch-1.p), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/abigail/python/ch-1.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/abigail/r/ch-1.r), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/abigail/ruby/ch-1.rb), [Scheme](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/abigail/scheme/ch-1.scm), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/abigail/tcl/ch-1.tcl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 141: Number Divisors](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-141-1.html)

&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 141: Like Numbers](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-141-2.html)


[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/adam-russell/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Cxx](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/adam-russell/cxx/ch-1.cxx)


&nbsp;&nbsp;**blog writeup:**
[Like, It’s Just the First Ten Numbers Man! — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2021/12/05/perl)

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/dave-jacoby/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[I Like Numbers And Hate Division: The Weekly Challenge #141 | Committed to Memory](https://jacoby.github.io/2021/11/29/i-like-numbers-and-hate-division-the-weekly-challenge-141.html)


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC141 - Number Divisors - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/12/01/pwc141-number-divisors/)

&nbsp;&nbsp;**blog writeup:**
[PWC141 - Like Numbers - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/12/02/pwc141-like-numbers/)

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/jaldhar-h-vyas/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/jaldhar-h-vyas/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 141](https://www.braincells.com/perl/2021/12/perl_weekly_challenge_week_141.html)

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/james-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #141](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-141/james-smith)


[**Kaushik Tunuguntla**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/kaushik-tunuguntla/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Kaushik's corner: Divisibility, Sieves and Masks - PWC 141](https://notmondayagain.blogspot.com/2021/12/divisibility-sieves-and-masks-pwc-141.html)

[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/mohammad-anwar/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/mohammad-anwar/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/mohammad-anwar/raku/ch-1.raku)


[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/peter-campbell-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Somerime thoughts on divisors](https://pjcs-pwc.blogspot.com/2021/12/perl-weekly-challenge-141-task-1-reads.html)


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/ulrich-rieke/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/ulrich-rieke/cpp/ch-1.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/ulrich-rieke/haskell/ch-1.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/ulrich-rieke/raku/ch-1.raku)


------------------------------------------





---

# TASK 2 {#PWC141TASK2}

# Like Numbers
*Submitted by: Mohammad S Anwar*

You are given positive integers, $m and $n.

Write a script to find total count of integers created using the digits of $m which is also divisible by $n.

Repeating of digits are not allowed. Order/Sequence of digits can’t be altered. You are only allowed to use (n-1) digits at the most. For example, 432 is not acceptable integer created using the digits of 1234. Also for 1234, you can only have integers having no more than three digits.

**Example 1:**
```
    Input: $m = 1234, $n = 2
    Output: 9

    Possible integers created using the digits of 1234 are:
        1, 2, 3, 4, 12, 13, 14, 23, 24, 34, 123, 124, 134 and 234.

    There are 9 integers divisible by 2 such as:
        2, 4, 12, 14, 24, 34, 124, 134 and 234.
```
**Example 2:**
```
    Input: $m = 768, $n = 4
    Output: 3

    Possible integers created using the digits of 768 are:
        7, 6, 8, 76, 78 and 68.

    There are 3 integers divisible by 4 such as:
        8, 76 and 68.
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/abigail/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/adam-russell/perl/ch-2.pl),
[**Alexander Karelas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/alexander-karelas/perl/ch-2.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/alexander-pankoff/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/athanasius/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/jo-37/perl/ch-2.pl),
[**Kaushik Tunuguntla**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/kaushik-tunuguntla/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/laurent-rosenfeld/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/lubos-kolouch/perl/ch-2.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/mohammad-anwar/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/perlboy1967/perl/ch-2.pl),
[**Paul Fajman**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/paul-fajman/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/paulo-custodio/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/pete-houston/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/peter-campbell-smith/perl/ch-2.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/robert-dicicco/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/sgreen/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/ulrich-rieke/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/wlmb/perl/ch-2.pl)

This is an unusual puzzle that at first appears to be another bit of number theory, but on closer examination makes no sense mathematically. Or perhaps I'm not brave enough, I don't know. However when taken as a problem of combinatorics, with a little arithmetic tacked on the end, the parts fall more into place.

What we need to do here is create various assemblages of parts according to a set of rules. These selections and constructions, built from digits, will resemble numbers, which we will then try dividing by another value to make the final cut. The two basic actions, creation and division, basically have nothing to do with each other. One works on digits, the things that represent numbers, and the other the numbers themselves represented by the digits. Yes, when put this way it does sound like the stuff of number theory, but I for the life of me can't see any way they can possibly relate. When new new numbers are created from arbitrary selections of included and excluded digits the position information for each digit is increasingly blurred as we work leftward, with each digit able in some numbers formed to represent the hundreds, the tens or the ones. Perhaps there is some epicyclic nested modulo algebra lurking under all that churning but I don't really see it. We're not, however, allowing shuffling the digits on top of everything else, so I concede that conceivably there may be something there. It kind of makes my brain hurt a little inside.

As far as the problem before us goes, I call this "concrete" number theory, following "concrete poetry", where the physical representations of the words on the page, the positioning and typefaces used, becomes part of the composition. The arrangements could be made from any placeholders, such as colored blocks, and be combinatorially equivalent.

There were 27 submissions for the second task this past week.

## A SELECTION of SUBMISSIONS, a TASTE of COMMISSIONS
[**Kaushik Tunuguntla**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/kaushik-tunuguntla/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/james-smith/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/jaldhar-h-vyas/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/duncan-c-white/perl/ch-2.pl),
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/abigail/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/dave-jacoby/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/jo-37/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/colin-crain/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/polettix/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/pete-houston/perl/ch-2.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/mohammad-anwar/perl/ch-2.pl), and
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/peter-campbell-smith/perl/ch-2.pl)

The solutions presented all generally followed the same script: find the available combinations to make a list of numbers and select from the list for those that are divisible. The means to get the combinations varied, with using a binary mask to select digits a strong favorite.

[**Kaushik Tunuguntla**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/kaushik-tunuguntla/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Kaushik's corner: Divisibility, Sieves and Masks - PWC 141](https://notmondayagain.blogspot.com/2021/12/divisibility-sieves-and-masks-pwc-141.html)

Kaushik launches us out of the gate today by using a set of binary strings as masks, with the digits representing all combinations of digits present and excluded from each final assembled number. For example, the binary string "1001" would allow the first and final digits to remain, and cut out the center. On the example input "1234" this would yield "14". By producing every combination of 1s and 0s of the desired length all combinations of the input can be realized, and the bit masks can be generated by counting from 1 to 2*n*-1, with *n* being the number of digits required, and converting the representation to binary.

As we are excluding using all the digits we need to disallow the string of all 1s; there is only one such disallowed number and that is the input value itself, and we do this here by instead counting upward to 2*n*-2 for our masks.

```perl
    # Get all binary masks of length $length excluding all zeroes and all ones.
    foreach my $i (1 .. (2 ** $length)-2) {
        my $mask = sprintf("%.${length}b", $i);
        my $ministring = '';
        #perform the masking operation to generate 23 from 1234 if mask is 0110.
        foreach my $i (0 .. $length-1) {
        	$ministring .= substr($m, $i, 1) if substr($mask, $i, 1);
        }
        if ($ministring % $n == 0) {
        	$divisible_count++;
        }
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/james-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #141](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-141/james-smith)

In the challenge we are only asked the count of numbers that fit the criteria, not what those numbers are. If we eliminate this additional bookkeeping, the solution can be come considerably tighter. Here James works his over with a parsimony of characters — he admits it himself his solution is "compact". That's one way to put it. Acknowledging this, his kindly provides a breakdown in his [writeup on the subject](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-141/james-smith). It again uses the same binary string mask concept, arriving there by slightly different means.

```perl
    sub like_numbers {
      my @digits = split//,$_[0];
      0 + grep { !($_%$_[1]) }
           map { my $n=$_<<1; join '',grep{($n>>=1)&1} @digits }
               1 .. (1<<@digits) - 2
    }
```

* **(line 1)** The first thing we do is convert the number into an array of digits.
* **(line 4)** We can enumarate the numbers made of the digits (in order) from 1 to 2^n-1 - the last though is the full number to so we reduce the loop to 1 to 2^n-2.
* **(line 3)** We use the binary representation of this number to work out which digits to use. Here we use the right shift operator (with &1 to check to see if the digit is to be included. We have to do $n=$_<<1; in the map as the first thing we do is $n>>=1.
* **(line 2)** We filter out numbers not divisible by $n using grep. We could use the scalar to explicitly cast the list to it's length or we can use the shorter 0+ which does it implicitly.

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/duncan-c-white/perl/ch-2.pl)

After comparing this challenge to PWC 136 in his notes, Duncan states he's going to implement a binary mask solution this time around, but apparently changed his mind and went for a recursive technique instead. The two routines `recursivefind()` and its wrapper `find_all_subsets()` do the heavy lifting to produce the numbers, which then get filtered in the usual manner.

```perl
    #
    # my @result = recursivefind( $prefix, @l );
    #    Given an array of letters @l and a prefix $prefix, find all
    #    subsets of @l (with $prefix prepended to it).
    #    eg if @l==(2,3), and $prefix="1", return ( 12,13 )
    #
    fun recursivefind( $prefix, @l )
    {
        #say "debug: rf($prefix,".join(', ',@l).")" if $debug;
        return ( $prefix ) if @l==0;
        my $first = shift @l;
        # $first is either present in the subset or not -
        # so try both possibilities
        my @result = recursivefind( $prefix, @l );
        push @result, recursivefind( $prefix.$first, @l );
        return @result;
    }


    #
    # my @result = find_all_subsets( $m );
    #    Given a string $m, find all non-empty shorter subsets of $m.
    #    eg if $m==123, return ( 12,13,23 )
    #
    fun find_all_subsets( $m )
    {
        my @result = recursivefind( "", split( //, $m ) );
        shift @result;		# remove empty subset
        pop @result;		# remove full subset ($m itself)
        return @result;
    }

    my @result = sort { $a <=> $b } find_all_subsets( $m );
    @result = grep { $_ % $n == 0 } @result;

```

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/jaldhar-h-vyas/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/jaldhar-h-vyas/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 141](https://www.braincells.com/perl/2021/12/perl_weekly_challenge_week_141.html)

Jaldhar too presents us with his own recursive `combinations()` routine to provide the digit selections from an array of the input digits, which are then assembled into numbers and filtered for divisibility using `grep`.

It's hard to get away from the basic pattern of assembling the possible combinations of digits into a list of numbers and then checking each for divisibility, the steps having little, if anything, to do with each other.


```perl
    sub combinations {
        my @list = @{$_[0]};
        my $length = $_[1];

        if ($length <= 1) {
            return map [$_], @list;
        }

        my @combos;

        for (my $i = 0; $i + $length <= scalar @list; $i++) {
            my $val  = $list[$i];
            my @rest = @list[$i + 1 .. $#list];
            for my $c (combinations(\@rest, $length - 1)) {
                push @combos, [$val, @{$c}] ;
            }
        }

        return @combos;
    }

    for my $i (1 .. scalar @digits - 1) {
        push @combinations, map { join q{}, @{$_}; } combinations(\@digits, $i);
    }

    say scalar grep { $_ % $n == 0; } @combinations;
```

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/abigail/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/abigail/awk/ch-2.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/abigail/bash/ch-2.sh), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/abigail/c/ch-2.c), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/abigail/go/ch-2.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/abigail/java/ch-2.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/abigail/lua/ch-2.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/abigail/node/ch-2.js), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/abigail/pascal/ch-2.p), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/abigail/python/ch-2.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/abigail/r/ch-2.r), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/abigail/ruby/ch-2.rb), [Scheme](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/abigail/scheme/ch-2.scm), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/abigail/tcl/ch-2.tcl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 141: Number Divisors](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-141-1.html)

&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 141: Like Numbers](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-141-2.html)

However Abigail has devised a way to check for divisibility of the numbers as they are being created within a recursive construct.

The result then is just one routine, returning the result of the validation check for each number as it is produced. As the recursion collapses these individual results are gathered and summed, so that as the original call returns the total number of matching numbers produced.

```perl
    sub substrings ($n, $m, $prefix = -1, $max = $n) {
        if (!length $n) {
            #
            # If $n is empty, we have reached the end of recursion.
            # If $prefix isn't -1, not equal to the full string,
            # and if $m properly divides $prefix, we count $prefix,
            # else, we don't.
            #
            return $prefix > -1   &&
                   $prefix < $max &&
                   $prefix % $m == 0 ? 1 : 0;
        }
        #
        # Recurse, once by picking up the first character of $n, and
        # once by skipping the first character.
        #
        my $fc       = substr ($n, 0, 1);
        my $n_prefix = 10 * ($prefix == -1 ? 0 : $prefix) + $fc;
        substrings (substr ($n, 1), $m, $n_prefix, $max) +
        substrings (substr ($n, 1), $m, $prefix,   $max);
    }
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/dave-jacoby/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[I Like Numbers And Hate Division: The Weekly Challenge #141 | Committed to Memory](https://jacoby.github.io/2021/11/29/i-like-numbers-and-hate-division-the-weekly-challenge-141.html)

First we make the numbers, then we decide whether we like the numbers. Os so sayeth Dave, with his two like-named routines. The first, `make_numbers()` uses recursion to construct the numbers: at every pass we have the number and a number string being assembled. For each digit position in the number we append that digit to a working copy of the digit string and recurse, passing the working copy and the substring of digits in the number following the digit picked. In this way we work through all combinations of digits while maintaining the order throughout. In the `like_numbers()` wrapper we look at the array of numbers created by the recursion and select those evenly divisible that aren't the original input, sorting and returning the finished list.

```perl
    sub like_numbers ( $m, $n ) {
        my @numbers = make_numbers($m);
        return

            sort { $a <=> $b }
            grep { $_ % $n == 0 }
            grep { $_ != $m }

            @numbers;
    }

    sub make_numbers ( $number, $n = '' ) {
        my @output;
        for my $i ( 0 .. -1 + length $number ) {
            my $x = $n . substr( $number, $i, 1 );
            my $y = substr( $number, $i + 1 );
            push @output, $x;
            push @output, make_numbers( $y, $x ) if length $y;
        }
        return @output;
    }
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/jo-37/perl/ch-2.pl)

`Math::Prime::Util`, the number-theorist's friend, provides two functions: `fromdigits()` and `todigits()` that convert back and forth between arrays of digit values in a given base and the representational form, combining base-parsing and string-splitting duties in one package. Well, almost. But for now let's go with that, with a few caveats.

This is essentially the binary mask technique re-envisioned. The first `todigits()` acts like `split //`, dividing the input value into an array of individual digits. Deep inside the `map`, the range values from 1 to 2<sup>*n*</sup> - 2 — with *n* being the length of the original number, or scalar of `@digits` — are each turned into a binary string of characters by a second `todigits()`, limited in length to again the scalar length of `@digits`. These 1s and 0s are filtered by `indexes` from `List::MoreUtils`, which works like `grep` on an array but instead of passing the unfiltered values passes the indices those values are at. Now we have a list of the indices of the 1s in the binary strings. An array slice of the `@digits` again with these indices is fed to `fromdigits()`, producing a new number with only these selected digits present.

Wow. When you put it like that it sounds really complicated. But it really is the same mask we saw earlier in a very clever package. We `grep` the list of numbers created for those divisible by the given value and we're in business.

```perl
    # Take the indices of 1-bits in the binary representation of the numbers
    # from 1 to 2 ** length($m) - 2 (representing all valid subsequences) as
    # slice arguments for the decimal digits of $m and collect all results
    # divisible by $n.  Return the found unique numbers.
    sub like_num ($m, $n) {
        my @digits = todigits $m;
        my %divisible;
        @divisible{
            grep !($_ % $n),
            map fromdigits([@digits[indexes {$_} todigits $_, 2, @digits]]),
            1 .. 2 ** @digits - 2
        } = ();

        keys %divisible;
    }
```

[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/colin-crain/perl/ch-2.pl)

Finally getting around to my own submission I also used a list of binary masks to select combinations of digits in the assembled numbers, in a much more straightforward way. I even chose to logically create all combinations, including the disallowed case of a string of all 1s, instead of hardwiring the special case into the algorithm with a magic number. Eventually the value itself, if it makes its way into the dividable output list, is then filtered out. To me this keeps the binary mask and the exclusion of the value itself separated, as one doesn't really have anything to do with the other.

```perl
    say "integers found  : ", join ', ', get_divs( $n, get_ints( $m ));

    sub get_ints( $num ) {
        my $len  = length($num);
        my @bins = map { sprintf "%0${len}b", $_ } (1 .. 2**$len - 1);
        my @out;

        for my $b ( @bins ) {
            my $combi;
            for my $idx (0..$len-1) {
                $combi .= (substr $b, $idx, 1)
                              ? substr $num, $idx, 1
                              : ''
            }
            push @out, $combi unless $combi == $num;
        }

        return sort {$a<=>$b} @out;
    }


    sub get_divs ( $div, @nums ) {
        return grep { not $_ % $div } @nums;
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC141 - Number Divisors - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/12/01/pwc141-number-divisors/)

&nbsp;&nbsp;**blog writeup:**
[PWC141 - Like Numbers - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/12/02/pwc141-like-numbers/)

The binary string filter seems to be real fan favorite today. Here Flavio joins in the fun with his own take on the technique. Note how the elements from the `@b` array are used as a controller within the `map` to either select the corresponding element from the number array or a null, in this case an empty array which gets flattened away. An empty string would have the same effect here as we are joining with an empty string as well, but this approach is generally safer as no additional element is even created. It's a good trick.

```perl
    sub like_numbers ($m = 1234, $n = 2) {
       my @m = split m{}mxs, $m;
       my $bits = @m;
       my $N = 2 ** $bits - 2;
       my $c = 0;
       for my $i (1 .. $N) {
          my @b = split m{}mxs, sprintf "%0${bits}b", $i;
          my $v = join '', map { $b[$_] ? $m[$_] : () } 0 .. $#m;
          ++$c unless $v % $n;
       }
       return $c;
    }
```

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/pete-houston/perl/ch-2.pl)

Pete, on the other hand, gives us an alternate interpretation of the specification, specifically as to the repeating of digits, as he does not allow repeating results when differing digit combinations produce the same numbers from different positions. For the input "1212" then, we will only count a single "12". So far everyone else has taken the interpretation that a combination is a combination, and if the result is the same so be it.

Here Pete provides his own recursive `combos()` routine which produces a comprehensive list of constructible numbers, which he then hands off to `uniq()` from "List::MoreUtils" to rarefy. Further refinement is performed with `grep`, removing indivisibles and the number itself, and the final results are reported.

```perl
    # Work with an array of digits
    my @m    = split //, $m;

    # Get all digit combinations in order
    my @ints = uniq combos (@m);
    print "All digit combinations of $m: @ints\n" if $verbose;

    # Filter out the non-divisible and too-long values
    @ints = grep { 0 == $_ % $n && $m ne $_ } @ints;
    print "Filtered digit combinations: @ints\nResult count: " if $verbose;
    print @ints . "\n";

    sub combos {
        my (@x) = @_;

        # Return a list of the numbers formed from the digits of
        # @x in order.
        my @res = @x;    # all the single digit ones
        while ($#x > 0) { # Recurse for the multiple digit ones
        	my $digit = shift @x;
        	push @res, map {"$digit$_"} combos (@x);
        }
        return @res;
    }
```

[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/mohammad-anwar/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/mohammad-anwar/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/mohammad-anwar/raku/ch-2.raku)

One alternative we have not yet seen represented today is to draw on a module to produce the combinations for us. As combinatorics in general is quite computationally intensive, for an interpreted language drawing on a compiled external library is a natural choice to perform the necessary data-crunching.

Here Mohammad brings in `Algorithm::Combinatorics` for its `combinations()` routine, creating combinations for each length up to but not including the whole number. From there it is straightforward to loop over each output sub-array, join them up into a number and check it for divisibility.

```perl
    use Algorithm::Combinatorics qw(combinations);

    sub like_numbers {
        my ($m, $n) = @_;

        my @numbers = ();
        foreach my $i (1 .. length($m)-1) {
            foreach my $j (combinations([ split //, $m ], $i)) {
                my $k = join('', @$j);
                if ($k % $n == 0) {
                    push @numbers, $k;
                }
            }
        }

        return \@numbers;
    }
```

[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/peter-campbell-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Somerime thoughts on divisors](https://pjcs-pwc.blogspot.com/2021/12/perl-weekly-challenge-141-task-1-reads.html)

Finally we have Peter with `Algorithm::Combinatorics` again, this time invoking the iterator form of `combinations()`. The comments, kindly, lay out the procedure step-by-step for those following along at home. As we can see, the steps follow the now-familiar pattern.

```perl
       # split $m into an array of digits
       $num_digits = length($m);
       @digits = split(//, $m);

       # need all the combinations of 1, 2 ... (length - 1) digits
       for $i (1..$num_digits - 1) {
           $iter = combinations(\@digits, $i);

       	# loop over combinations
       	while ($c = $iter->next) {

       		# join digits of combination together
       		$extract = join('', @$c);

       		# create string of $all combs and $good combs divisible by $n
       		$all .= qq[$extract, ];
               if ($extract % $n == 0) {
       			$good .= qq[$extract, ];
       			$num_good ++;
       		}
       	}
       }

       # trim trailing commas and show answer
       $all =~ s|..$||;
       $good =~ s|..$||;
       say qq[Possible integers created using the digits of $m are:\n$all];
       say qq[There are $num_good integers divisible by $n which are:\n$good\n];
```



## Blogs and Additional Submissions in Guest Languages for Task 2:

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/adam-russell/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Cxx](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/adam-russell/cxx/ch-2.cxx)


&nbsp;&nbsp;**blog writeup:**
[Like, It’s Just the First Ten Numbers Man! — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2021/12/05/perl)


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/athanasius/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/athanasius/raku/ch-2.raku)

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/laurent-rosenfeld/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/laurent-rosenfeld/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 141: Number Divisors and Like Numbers |aurent_r](http://blogs.perl.org/users/laurent_r/2021/12/perl-weekly-challenge-141-number-divisors-and-like-numbers.html)


[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/paulo-custodio/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/paulo-custodio/python/ch-2.py)


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/roger-bell-west/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/roger-bell-west/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 141: Binary and Tabular](https://blog.firedrake.org/archive/2021/11/The_Weekly_Challenge_141__Binary_and_Tabular.html)


[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/sgreen/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/sgreen/python/ch-2.py)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 141](https://dev.to/simongreennet/weekly-challenge-141-133e)


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/ulrich-rieke/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/ulrich-rieke/haskell/ch-2.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/ulrich-rieke/raku/ch-2.raku)


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-141/wlmb/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 141 – W. Luis Mochán](https://wlmb.github.io/2021/11/29/PWC141/)







---

# BLOGS {#PWC141BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, by some miracle I somehow continue to maintain my bearings.**

**Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your Unquenchable *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC136BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *FOLLOW* these *BLOG* *LINKS*:

**( ...*don't think, trust your training, you're in the zone, just do it ...* )**


**Abigail**

 * [Perl Weekly Challenge 141: Number Divisors](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-141-1.html) ( *Perl* )
 * [Perl Weekly Challenge 141: Like Numbers](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-141-2.html) ( *Perl* )

**Adam Russell**

 * [Like, It’s Just the First Ten Numbers Man! — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2021/12/05/perl) ( *Perl* )

**Arne Sommer**

 * [Numbly Numbers with Raku](https://raku-musings.com/numbly-numbers.html) ( *Raku* )

**Dave Jacoby**

 * [I Like Numbers And Hate Division: The Weekly Challenge #141 | Committed to Memory](https://jacoby.github.io/2021/11/29/i-like-numbers-and-hate-division-the-weekly-challenge-141.html) ( *Perl* )

**Flavio Poletti**

 * [PWC141 - Number Divisors - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/12/01/pwc141-number-divisors/) ( *Perl & Raku* )
 * [PWC141 - Like Numbers - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/12/02/pwc141-like-numbers/) ( *Perl & Raku* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 141](https://www.braincells.com/perl/2021/12/perl_weekly_challenge_week_141.html) ( *Perl & Raku* )

**James Smith**

* [Perl Weekly Challenge #141](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-141/james-smith)


**Kaushik Tunuguntla**

 * [Kaushik's corner: Divisibility, Sieves and Masks - PWC 141](https://notmondayagain.blogspot.com/2021/12/divisibility-sieves-and-masks-pwc-141.html) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 141: Number Divisors and Like Numbers |aurent_r](http://blogs.perl.org/users/laurent_r/2021/12/perl-weekly-challenge-141-number-divisors-and-like-numbers.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 141:longer than I thought! – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2021/11/29/PerlWeeklyChallenge141.html) ( *Raku* )

**Peter Campbell Smith**

 * [Somerime thoughts on divisors](https://pjcs-pwc.blogspot.com/2021/12/perl-weekly-challenge-141-task-1-reads.html) ( *Perl* )

**Roger Bell_West**

 * [RogerBW's Blog: The Weekly Challenge 141: Binary and Tabular](https://blog.firedrake.org/archive/2021/11/The_Weekly_Challenge_141__Binary_and_Tabular.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 141](https://dev.to/simongreennet/weekly-challenge-141-133e) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 141 – W. Luis Mochán](https://wlmb.github.io/2021/11/29/PWC141/) ( *Perl* )
