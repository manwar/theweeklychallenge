---
author:       Colin Crain
date:         2022-01-10T00:00:00
description:  "Colin Crain › Perl Weekly Review #142"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #142"
image:        images/blog/p5-review-challenge-142.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-141/).* )

Welcome to the Perl review pages for **Week 142** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-142/) or the summary [**recap**](/blog/recap-challenge-142/) of the challenge. But don't worry, the challenges themselves are repeated and presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please feel free to email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC142TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC142TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC142BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC142TASK1}

# Divisor Last Digit
*Submitted by: Mohammad S Anwar*

You are given positive integers, $m and $n.

Write a script to find total count of divisors of $m having last digit $n.


**Example 1:**
```
    Input: $m = 24, $n = 2
    Output: 2

    The divisors of 24 are 1, 2, 3, 4, 6, 8 and 12.
    There are only 2 divisors having last digit 2 are 2 and 12.
```
**Example 2:**
```
    Input: $m = 30, $n = 5
    Output: 2

    The divisors of 30 are 1, 2, 3, 5, 6, 10 and 15.
    There are only 2 divisors having last digit 5 are 5 and 15.
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/abigail/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/adam-russell/perl/ch-1.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/alexander-pankoff/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/athanasius/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/colin-crain/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/polettix/perl/ch-1.pl),
[**Jake**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/jake/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/jaldhar-h-vyas/perl/ch-1.sh),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/jo-37/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/laurent-rosenfeld/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/mattneleigh/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/paulo-custodio/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/pete-houston/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/peter-campbell-smith/perl/ch-1.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/robert-dicicco/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/sgreen/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/ulrich-rieke/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/wlmb/perl/ch-1.pl)

Let's start with a little thought about divisors. Specifically let's consider the sequential relationship of lists of divisors to lists of numbers. The thing is, given a list of sequential numbers, we can apply a relationship for *individual* divisors, like a sieve of Eratosthenes, to it to determine whether it is prime, but given just the number there exists no way to predict from the outset whether it is prime without doing additional work. The location of primes is unpredictable in that sense, or at minimum after centuries of motivated effort no one has cracked that nut.

This statement may sound untrue but even in the simplest case — say the number is even — we can only exclude it from primeness by doing work: dividing it by 2. We are in fact applying the sieve. The placement of primes is deterministic, but the pattern can only be fully perceived after the fact.

It follows, then, that lists of divisors in general must share this unpredictability — at any moment, ok not any but many moments, the quantity of proper divisors may drop to 1. If we could predict when this happens we could then predict where the primes would fall, which of course we cannot.

The point of this is that given a number in isolation we cannot predict its divisors, and the divisors it does have cannot be predicted completely by a pattern that does not already include all of the divisors, so the relationship of the values in that list to an outside value cannot be predicted either. We will need to do the work, there's no escaping that. The work can be done more or less efficiently, surely, but in the end to only way to determine whether one number divides another is to do some division.

The relationship of the last digit of a number to its multiples is an odd one, certainly. Some digits are going to be more cooperative than others, so to speak. But if we cannot ultimately predict the prime factors we can't predict the complete set of divisors either, and so we cannot derive the complete relationship here either without doing the work and examining each instance.

This is a quite roundabout way of saying that this first task contains two components: determining the divisors for a given number, and then given that list determining whether  any last digits found match a second input value. The two tasks are only peripherally related and essentially independant.

There were 23 submissions for the first task this past week, dividing and searching in various ways.

## a TREATISE on TECHNIQUES, a TEMPEST is a TEAPOT


Code solutions for the task, then, followed the obvious breakdown into two discrete sections: finding the divisor list and then parsing it to select and count certain items.

With respect to what exactly is meant by the term "divisors", some members noticed that the examples did not include the number itself in the list; this is a differing interpretation of the term than we saw in the last challenge. As stated then, without qualification the meaning is ambiguous about including one or the other so-called trivial divisors: 1 and the number itself, which exist for all numbers. The examples list what are known as the proper divisors, accepting 1 but not the total value; a prime number is often described as a number with one proper divisor, meaning the 1 that is always present. There is no consensus on the subject and the *number* of divisors has little enough use outside of primes and number theory that the definition lies in whatever use is needed for the count. As such we're not going to worry too much about that here, and accept any approach as valid.


[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/dave-jacoby/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Sleep On It: The Weekly Challenge #142 | Committed to Memory](https://jacoby.github.io/2021/12/06/sleep-on-it-the-weekly-challenge-142.html)

Dave will start us off with a demonstration of the common breakdown. In the first half, we query each value in the range from 1 to the value to see whether it divides out whole. If so it's a divisor.

We can then filter that complete list with `grep` to examine the last digit using `substr`, and if a match is made to `$n` it is passed. The number of values collected in this fashion is our final result.

```perl
    sub divisor_last_digit ( $m, $n ) {
        my @divisors;
        for my $i ( 1 .. $m ) {
            if ( $m % $i == 0 ) {
                push @divisors, $i;
            }
        }
        return scalar grep { $n == substr $_, -1, 1 } @divisors;
    }
```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/laurent-rosenfeld/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 142: Divisor Last Digit and Sleep Sort | laurent_r](http://blogs.perl.org/users/laurent_r/2021/12/perl-weekly-challenge-142-divisor-last-digit-and-sleep-sort.html)

Laurent uses two `grep` filters,  one on a list of all possible divisors to first obtain that list, then filtering that result again using `substr` to find the matching last digits.

```perl
    sub count_divisors {
        my ($m, $n) = @_;
        my @divisors = grep {$m % $_ == 0} 1..$m;
        my $last_digit = substr $n, -1, 1;
        my @eligible_divisors = grep { $last_digit == substr $_, -1, 1 } @divisors;
        return scalar @eligible_divisors;
    }
```


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC142 - Divisor Last Digit - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/12/08/pwc142-divisor-last-digit/)

&nbsp;&nbsp;**blog writeup:**
[PWC142 - Sleep Sort - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/12/09/pwc142-sleep-sort/)

In Flavio's take on the algorithm we have a `map` function building a hash of divisors, chained from a `grep` statement filtering a list of all possible values up to the square root. Two hash keys are generated per element found, as each will also define an easily derivable complement that multiplies to the target. Each value ultimately places two divisors, and in the case of the square root the same single hash key is assigned twice.

To select the divisors matching the given last digit we see the same `substr` scheme we saw before, here wrapped in an anonymous array.

```perl
    sub divisors_for ($n) {
       keys %{{map { $_ => 1, int($n / $_) => 1 } grep { !($n % $_) }
         1 .. sqrt($n)}};
    }

    my $m = shift // 24;
    my $n = shift // 2;
    say scalar [grep { substr($_, -1, 1) == $n } divisors_for($m)]->@*;
```

[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/colin-crain/perl/ch-1.pl)

For my own version I tighten up the loop a bit for the divisor function. We can simply assign 1 straight-away as it will always be present, and if we limit the function for values greater than 1 we can go ahead and assign the number as well to the output. What's left is the range from 2 to our target over 2.

To match the last digit we use a regular expression, to, well, match the last digit. I love a good tautology. Assigning the filtered list from `grep` to a scalar automatically gives us the number of elements in the array.

```perl
    my @div   = nd_brute( $num );
    my $count = grep { /$val\Z/ } @div;

    sub nd_brute ( $num, @div ) {
        $num % $_ or push @div, $_ for 2..$num/2 ;
        return 1, @div, $num;
    }
```

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/sgreen/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/sgreen/python/ch-1.py)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 142](https://dev.to/simongreennet/weekly-challenge-142-1gb3)

Here Simon goes the extra mile and makes his `_get_divisors()` function safe for all values including 1. Touché. He also introduces the idea of checking the last digit by computing the value modulo 10, which rises to the task quite well.

```perl
    sub _get_divisors {
        my $number = shift;

        # Every number is divisible by 1
        my @divisors = (1);

        # One only has one divisor
        return @divisors if $number == 1;

        # Find other divisors
        foreach my $i ( 2 .. int( $number / 2 ) ) {
            if ( $number % $i == 0 ) {
                push @divisors, $i;
            }
        }

        # ... including the number itself
        push @divisors, $number;

        return @divisors;
    }

    sub main {
        my ( $m, $n ) = @_;

        die "The first must be a positive integer\n"
          if $m < 1;
        die "The second number must be between 1 and 9\n"
          if $n < 1 or $n > 9;

        # Get a list of divisors and find those that end with n.
        my @solution = grep { $_ % 10 == $n } _get_divisors($m);
        say scalar(@solution);
    }
```



[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/paulo-custodio/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/paulo-custodio/python/ch-1.py)

As each divisor found simultaneously defines its multiplicative complement, we can add both to our result list at the same time. Here Paulo uses `push` and `unshift` to place the divisors on the list in sorted order. We really don't need to do this for this specific task, as we are only counting the total number found, but it doesn't hurt to do so. We also only search in the range up to the square root, but doing this this way requires a check so we don't add the actual square root twice should it be a factor itself.


```perl
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

    my($m, $n) = @ARGV;
    my @divisors = divisors($m);
    my $count = scalar grep {/$n$/} @divisors;
    say $count;
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/athanasius/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/athanasius/raku/ch-1.raku)

It has been noted several times now that we need not keep track of our final list of qualifying solutions because we only want the quantity — we're uninterested in the actual content. For the purposes of the challenge, one number ending in three is pretty much the same as another.

The monk is not so uncaring, which strikes me as a very monastical virtue. Instead of tossing out or worse, never compiling our result lists, they save all of this to produce a detailed report mimicking the examples:

```
    Challenge 142, Task #1: Divisor Last Digit (Perl)

    Input:  $m = 1794, $n = 3
    Output: 3

    The divisors of 1794 are 1, 2, 3, 6, 13, 23, 26, 39, 46, 69, 78, 138, 299, 598, 897
    Of these, 3 have 3 as their last digit: 3, 13, 23
```

They even took the time to make some NLP pluralization corrections, which is a detail I always enjoy seeing.

```perl
    my  @solution = grep { / $n $ /x } @divisors;
    my  $count    = scalar @solution;

    print "Output: $count\n";

    if ($VERBOSE)
    {
        printf "\nThe divisors of %d are %s\n",
            $m,
            join ', ', @divisors;

        printf "Of these, %d ha%s %d as %s last digit%s\n",
            $count,
            $count == 1 ? 's'   : 've',
            $n,
            $count == 1 ? 'its' : 'their',
            $count == 0 ? ''    : ': ' . join ', ', @solution;
    }
}

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

[**Jake**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/jake/perl/ch-1.pl)

As noted several people noted the examples did not include the number itself as its own divisor, and so in reusing their divisor routines for last week were forced to explicitly remove term. Jake here uses `splice` to extract it from the list.

```perl
    my @divisors = count_divisors( 1, $num );
    my @res = filter_last_digit ( $last_dig, \@divisors );
    say scalar ( @res );

    # collect numbers with specific last digit
    sub filter_last_digit {
        my ( $last_dig, $divisors ) = @_;

        # courtesy ccntrq
        my @result = grep { substr( $_, -1 ) == $last_dig } @$divisors ;
        return @result;
    }

    sub count_divisors {
        my ( $divisor, $num ) = @_;
        my @divisors;

    # divide num through all numbers <= num and count every time modulo is 0
    # each time modulo is 0 we know it's a divisor
        while ( $divisor <= $num ) {
            #$div_cntr++ if $num_atr->{num} % ( $num_atr->{num} - $divisor ) == 0;
            push @divisors, $divisor if $num % $divisor == 0;
            $divisor++;
        }

        #according to the task the number itself is not considered a divisor, so we cut it off of the result
        splice( @divisors, -1 );
        return @divisors;
    }
```

[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/alexander-pankoff/perl/ch-1.pl)

Alexander didn't simply copy his routine from last week, but actually hunted down and loaded the actual same code using `FindBin`. That's one way to avoid transcription errors. Consequently he too needed to remove the number for its list of divisors, which he accomplishes with a `grep` filter, making sure the elements passed do not include it.

Whilst he was in there poking around in [PWC141](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-141/alexander-pankoff/perl), Alexander takes the opportunity to import another function, `prompt_for_integer()` for some user input. In fact, he doesn't import the functions individually, but rather the whole scripts and everything within them, including the required subroutines. Each is placed into its own package namespace, and the functions are called fully qualified with the new package names to access them.

```perl
    use FindBin;

    package Challenge141Task01 {
        require $FindBin::RealBin
          . '/../../../challenge-141/alexander-pankoff/perl/ch-1.pl';
    }

    package Challenge141Task02 {
        require $FindBin::RealBin
          . '/../../../challenge-141/alexander-pankoff/perl/ch-2.pl';
    }

    use constant DEBUG => $ENV{DEBUG} // 0;

    run() unless caller();

    sub run() {
        my $m = Challenge141Task02::prompt_for_integer('m');
        my $n;
        do {
            $n = Challenge141Task02::prompt_for_integer('n');
        } while ( length $n > 1 && say "Expect 'n' to be a single digit." );

        # from the description of the task I infer, this week the number 'm' itself
        # should not be considered a divisor of 'm'. This is different from last
        # week, where we found numbers with exactly 8 divisors including the number
        # itself
        my @divisors = grep { $_ != $m } Challenge141Task01::find_divisors($m);
        say join( ", ", sort { $a <=> $b } @divisors ) if DEBUG;
        my @result = grep { substr( $_, -1 ) == $n } @divisors;
        say join( ", ", sort { $a <=> $b } @result ) if DEBUG;
        say scalar @result;
    }
```

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/jaldhar-h-vyas/perl/ch-1.sh)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/jaldhar-h-vyas/raku/ch-1.sh)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 142](https://www.braincells.com/perl/2021/12/perl_weekly_challenge_week_142.html)

Finally Jaldhar takes the steps we've seen to their natural extension and condenses the action into a single one-liner. A single `grep` qualifier filters both for being a divisor and, if that succeeds, that the last digit matched the given digit. As `say` expects a list we need to explicitly specify that we want the `scalar` value of the result.

```perl
    perl -E 'say scalar grep { $ARGV[0] % $_ == 0 && $_ =~ /$ARGV[1]$/ } 1 .. $ARGV[0] - 1;' $@

```



> Neat<br>
> Sweet<br>
> Petite<br>
> — *The Addams Family*




## Blogs and Additional Submissions in Guest Languages for Task 1:
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/abigail/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 142: Divisor Last Digit](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-142-1.html)

&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 142: Sleep Sort](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-142-2.html)

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/adam-russell/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Sleeping Divisors — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2021/12/12/perl)

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/james-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #142](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-142/james-smith)


[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/peter-campbell-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Clarity versus brevity](https://pjcs-pwc.blogspot.com/2021/12/clarity-versus-brevity.html)

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 142: The Last Digit of Sleep](https://blog.firedrake.org/archive/2021/12/The_Weekly_Challenge_142__The_Last_Digit_of_Sleep.html)

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/ulrich-rieke/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/ulrich-rieke/cpp/ch-1.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/ulrich-rieke/haskell/ch-1.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/ulrich-rieke/raku/ch-1.raku)


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/wlmb/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 142 – W. Luis Mochán](https://wlmb.github.io/2021/12/09/PWC142/)


------------------------------------------





---

# TASK 2 {#PWC142TASK2}

# Sleep Sort
*Submitted by: Adam Russell*

Another joke sort similar to JortSort suggested by champion Adam Russell.

You are given a list of numbers.

Write a script to implement Sleep Sort. For more information, please checkout [this post](https://iq.opengenus.org/sleep-sort/):

**From the Link**

> Sleep Sort is time-based sorting technique.

> In this sorting technique , we create different threads for each individual element present in the array. The thread is then made to sleep for an amount of time that is equal to value of the element for which it was created.
> This sorting technique will always sort in acsending order as the thread with the least amount of sleep time wakes up first and the number gets printed. The largest number will get printed in the end when its thread wakes up.





## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/abigail/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/adam-russell/perl/ch-2.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/alexander-pankoff/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/athanasius/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/dave-jacoby/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/jo-37/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/laurent-rosenfeld/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/mattneleigh/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/paulo-custodio/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/pete-houston/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/peter-campbell-smith/perl/ch-2.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/robert-dicicco/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/sgreen/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/wlmb/perl/ch-2.pl)

Let's start off with a couple of on-the-face-of-it admissions. One, this is an absurdist joke, both non-sensical, impractical and unworkable, in no uncertain terms. There are deep problems with both the theory and and any conceivable Perl implementation, and the person who came up with this monstrosity should be watched carefully, as they may be a danger to themselves or others.

Other than that, thread support in Perl is, to put it kindly, dicey.

Disregarding the gross implications of the first paragraph, as far as the second we do have a few, ultimately pretty unsatisfactory options to approach this specific task. Perl can, for instance, be recompiled to support threads in a native manner. This, tautologically, requires us to recompile a special version of Perl, which is a bother, again to put it kindly. Alternately as multi-core processors have become more and more ubiquitous there have been various external modules developed over the years to implement parallel processing using a variety of thread and thread-like schemes. These are becoming more and more sophisticated and some of the newer implementations seem to be getting it right. We shall see. Despite how this may appear, I am quite excited about some of these.

Going forward, the ubiquity of multiprocessing in modern computing makes being able to draw on these concurrent processing abilities a more and more useful idea, and I do my best to follow the advancements among those Perl implementations that make this possible. There's nothing quite like looking at your cpu monitor and seeing 16 processors pinned to 100, as I did see recently doing some ML training.

But that wasn't Perl, I feel it important to add. So let's as community address that, shall we? Despite the absurdity of the task at hand, I am excited to see the implementations, imperfect as the sorting may be.

There were 20 submissions for the second task this past week.

## a MAPWORK of METHODS, BEACONS in the DARKNESS
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/pete-houston/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/e-choroba/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/james-smith/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/jaldhar-h-vyas/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/adam-russell/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/polettix/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/dave-jacoby/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/roger-bell-west/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/wlmb/perl/ch-2.pl), and
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/jo-37/perl/ch-2.pl)


The submissions that actually tried to model the thread-pausing behaviour in the specification can be divided into those that relied on native Perl threads and those that imported one or another of the available modules for the implementation. Using `fork()`, which we will have a look at, doesn't, arguably, implement threads, but then again, the built-in Perl thread model bears many similarities to a system of monitored forked processes, so one might well argue that using `fork()` models Perl's thread implementation. In the context of the sleep sort, this seems quite reasonable.

Taking this idea further, we had several examples of using `Parallel::ForkManager`, an object that, as might be inferred, manages a set of forked processes, without the need for a special Perl with thread awareness activated.



We'll have a look at the various tools people brought to bear on the problem and see what we can learn.

## PERL NATIVE THREADS

Perl, as noted, needs to be specially compiled to use threads, which is a tad more of a bother than importing a module to extend the base capabilities of the interpreter. The reasoning behind this is that the additional overhead to keep track of threads takes a substantial hit on performance, estimated at 10-15%, and as threaded processing is not likely to be required for the average use-case the users would prefer the speedbump instead of a feature they probably won't want or need.

This is a pretty reasonable and accurate analysis, but leads to a unfortunate barrier for entry: you need to already have a special version of Perl around to write using threads, so one doesn't end up considering them to help solve a problem unless one is already familiar enough with them to have gone through the problem of setting up the environment. Sort of a chicken and egg situation, if you will.

Compounding the problem is they aren't exactly implemented in the greatest manner either, prompting this caveat in the official documentation:

> The "interpreter-based threads" provided by Perl are not the fast, lightweight system for multitasking that one might expect or hope for. Threads are implemented in a way that makes them easy to misuse. Few people know how to use them correctly or will be able to provide help.

> The use of interpreter-based threads in perl is officially discouraged.

Forewarned as we are, actually using them — in the simplest way — to implement a sleep sort is fairly straightforward.

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/pete-houston/perl/ch-2.pl)

Pete demonstrates the steps required to implement the sort as described. First, even though we are already required to have a properly prepared Perl to provide the runtime environment, we still need to direct Perl to use the `threads` library.

A thread needs a routine to run, so that is defined as a subroutine block. In this case the block takes an input, presumed to be a number, and calls `sleep` for that many seconds, then prints the number. Nothing meaningful is returned.

The input is pre-filtered for only numbers and each number is then passed to a new thread  built on the `ss()` subroutine. Perl spawns a new interpreter instance and runs the routine for each thread. When we want to exit we need to perform some bookkeeping to collect the threads we've spawned, even though in this case there are no return values. Strictly speaking this is not necessary, but it seem imprudent to exit a process before its children have completed their tasks, so if we do so a warning will be cast. The `join` statement, then, waits for everything to finish.

The granularity of this method is coarse, and imperfectly effective. For one, `sleep` works on integer seconds, so real numbers will be truncated, and also no accommodation can be made for making sure the separate thread processes are all run concurrently in a timely fashion. The first can be somewhat addressed, but without a real-time operating system this last obstacle is pretty much insurmountable in an absolute sense. Something can always happen in the real-world to lose concurrency. A second is a long time but its just a matter of degree.

Spawning a new Perl instance, or whatever Perl actually does that is very similar<sup>1</sup>, is a complex task, and amongst the many moving parts of memory allocation and required cpu cycles there is no reason to think one thread spawning will take the same time as another, limiting the absolute accuracy of this sorting method.

```perl
    use threads;

    # Safety cut-out
    die "Whoa, cowboy! That's far too many threads.\n" if $#ARGV > 4095;

    sub ss {
        my $n = shift;
        sleep $n;
        print $n . ', ';
    }

    threads->create ('ss', $_) for grep { /^[1-9][0-9]*$/ } @ARGV;
    $_->join for threads->list;
```

---
<sup>1</sup> The interpreter thread model used by Perl is complex, and the means used to achieve the results are dependent on the architectures of the underlying operating systems. On Unix and Unix-like systems actual processes could be used, but this is not a given, so interpreter threads instead emulate this behavior. In any case it is freely admitted by all involved that we are not talking about some sort of lightweight sub-processes but rather substantial infrastructure built to ideally work across all Perl products. The overhead of this cross-platform accommodation  is sufficient that this capability is disabled by default and a recompiled interpreter is required to use it. Which to me is kind of a big deal.

---

## SHARING DATA between threads

The basic interpreter threads model used by Perl emulates a new interpreter for each thread instance, and as such no information can normally be shared amongst the threads or the script that created them in real time; data can be passed as arguments to a thread, or returned from it, but in the middle the actions are a black box. However the threads themselves exist in a common space so this isolation is not absolute. If we want shared data that can be manipulated and changed by the individual threads we can import `threads::shared` to make that possible.

Using `threads::shared`, we can bind the same Perl variable into each thread created, so that changes made in one namespace will be reflected in the others.

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/e-choroba/perl/ch-2.pl)

Choroba demonstrates using a single `@sorted` array shared among all the threads. As each thread finishes sleeping its sleep time argument is added to the common array, building up the sorted structure one value at a time. Once all threads have been joined back into the `sleep_sort()` wrapper the shared array is returned.

Using `threads::shared`,

```perl
    sub sleep_sort {
        my @sorted :shared;
        my @threads;
        for my $n (@_) {
            push @threads,
                 'threads'->create(sub { sleep $n; push @sorted, $n });
        }
        $_->join for @threads;
        return @sorted
    }
```



## an ASIDE: the Time::HiRes MODULE

The Perl `sleep` function is, how can I say this? Not a precision tool. It's quite useful for systematically polling the real world, for instance periodically checking an input for new data or such, on a scale of multiple seconds, minutes or hours. Because waking and sleeping involves interacting with the operating system, there are several points of entry for outside influence, and as such we really can't rely on `sleep 10` to sleep for *exactly* ten seconds. It'll be close, surely — that we can be confident of, but it may, for differing reasons, be a little over or even a little under. And as this is hardware-dependent, we can never, in a general sense, know for sure inside our script what's going to happen.

We can, however, improve matters by importing the core `Time::HiRes` module. Using the drop-in replacement for `sleep()` at minimum allows us the option of sleeping for fractional seconds, and if we want to we can count in nominal milliseconds using `usleep()`. For those confused, that name makes more sense when you realize it's an ASCII version of a Greek μ, so might better be pronounced "microsleep". I had to see that a few times before it clicked.

We can even count nanoseconds, but outside influences make this even more sketchy. But we can if we want to, using `nsleep()`.

Even if we cannot guarantee microsecond precision in our sleep times, the granularity of the calculations is notably improved, so it follows that our sleep sort will be a little more reliable. There are still, however, a great many ways for the system to throw our threads off kilter. With the state of the operating system still able to influence the actual time slept, our sorting could still conceivably produce an inaccurate result.


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/james-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #142](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-142/james-smith)

The module provides an exportable `sleep()` function that allows fractional sleep durations, allowing the sleep sort function to operate on real numbers to some poorly-defined level of precision. The function take a float, which suggest a high level of accuracy, but in a shared process space we can't assume we'll get all that. On the other hand we can at minimum distinguish between 0.1 and 0.9, which is more than we can say for Perl's function, so we're definitely ahead.

The docs suggest microsecond accuracy is a big ask, but the milliseconds James has built into his random input lists seems like a good safety margin.

```perl
    use threads;
    use threads::shared;
    use Time::HiRes qw(sleep);

    my @res :shared;
    my @list=map{0.001*int rand 3000}1..20;

    say "@list";

    sub sleeper {sleep$_[0];push@res,$_[0]}

    threads->new( \&sleeper, $_ ) for @list;

    $_->join for threads->list;

    say for @res;
```

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/jaldhar-h-vyas/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/jaldhar-h-vyas/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 142](https://www.braincells.com/perl/2021/12/perl_weekly_challenge_week_142.html)

Here Jaldhar implements fractional seconds using an integer number of microseconds. He's a little more cautious than James with his time allocation, installing a 10000× multiplier on the wait. We can always compensate for inaccuracies in the underlying system timing by increasing the time intervals proportionally.

It's not like we're optimizing for speed here. That would just be silly.


```perl
    use threads;
    use Time::HiRes qw / usleep /;

    sub work {
        my ($arg) = @_;

        usleep $arg * 10_000;
        say $arg;
    }

    my @threads = map { threads->create(\&work, $_); } @ARGV;

    foreach (@threads) {
        $_->join;
    }
```




## the Thread::Pool MULTI-THREAD MANAGEMENT module

The interpreter thread model can be thought of loosely as a organized system for forked processes<sup>2</sup>, a sort of a shell environment where processes can be spawned and data collected and returned. Taking this abstraction one step further we have the `Thread::Pool` module, which can be thought of as a similar manager for the threads themselves, much like the underlying `threads` object but more capable.

---

<sup>2</sup> Yes this analogy is imperfect, but it'll do for now. See note (1)

---

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/adam-russell/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Sleeping Divisors — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2021/12/12/perl)

`Thread::Pool` does not create its own threading environment, it uses Perl threads for that. What it does do is create an object container for a collection of threads, with each thread considered an independant worker performing the same actions on different data. Thus a large job can be easily portioned off into smaller chunks run asynchronously.

In this case the common routine sleeps for a number of seconds defined by its argument, then returns the argument. Workers are allocated when instantiating the pool, and as workers return their return value is added to the `@sorted` array.

```perl
    use Thread::Pool;

    sub create_workers{
        my @numbers = @_;
        my $count = @numbers;
        my $workers = new Thread::Pool({
            optimize => "cpu",
            do => \&sleeper,
            workers => $count,
            maxjobs => $count,
            minjobs => $count
        });
        return $workers;
    }

    sub sleeper{
        my($n) = @_;
        sleep($n);
        return $n;
    }

    sub sleep_sort{
        my($numbers, $workers) = @_;
        my @jobs;
        my @sorted;
        for my $n (@{$numbers}){
            my $job_id = $workers->job($n);
            push @jobs, $job_id;
        }
        {
            my $job = pop @jobs;
            my @result = $workers->result_any(\$job);
            if(!@result){
                push @jobs, $job;
            }
            else{
                push @sorted, $result[0];
            }
            redo if @jobs;
        }
        $workers->shutdown;
        return @sorted;
    }

    MAIN:{
        my @numbers;
        my @sorted;
        @numbers = map{int(rand($_) + 1)} (0 .. 9);
        print join(", ", @numbers) . "\n";
        @sorted = sleep_sort(\@numbers, create_workers(@numbers));
        print join(", ", @sorted) . "\n";
    }
```


<sup>1</sup>

## FORKING PROCESSES

I may have lived many lives, but I consider myself a modern guy. If Perl itself discourages its own semi-built-in thread model that's good enough for me. But in considering that model, I don't see a tremendous amount of space between the nominal `threads` as implemented and just using `fork()` to spawn a new interpreter for each process. They both seem to me to work on top of the same underlying principles, granted `threads` allows for much more complicated interactions with the data set. However it's also that iteraction that makes `threads` unwieldy and tricky to use properly in complex cases.

If we keep it simple, then, why not use `fork()`?

And to those out there still using Windows95, I'm sorry, and it's not my fault.

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC142 - Divisor Last Digit - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/12/08/pwc142-divisor-last-digit/)

&nbsp;&nbsp;**blog writeup:**
[PWC142 - Sleep Sort - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/12/09/pwc142-sleep-sort/)

Flavio demonstrates a bare-bones example using `fork`. When a script is forked, the `fork` function returns the process id of the child to the parent caller, and 0 to the cloned child process. Thus `next if $pid` loops in the parent, creating a forked process for each of the inputs to be sorted. If the PID is 0, however, we are in a child process: the conditional fails and we sleep for a number of seconds, then say the number, then exit.

In the parent, after spawning all the child processes the loop is bypassed and we call `wait` once for each child forked, ensuring all have returned before we terminate.

```perl
    for my $n (@ARGV) {
       defined(my $pid = fork()) or die "fork(): $!\n";
       next if $pid;
       sleep $n;
       say $n;
       exit 0;
    }
    wait for 1 .. @ARGV;
```


## WHAT ABOUT a MANAGER for those FORKS?

Enter `Parallel::ForkManager`, which provides a nice object wrapper for handling forked processes in a slightly more intuitive manner.


[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/dave-jacoby/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/dave-jacoby/node/ch-2.js)


&nbsp;&nbsp;**blog writeup:**
[Sleep On It: The Weekly Challenge #142 | Committed to Memory](https://jacoby.github.io/2021/12/06/sleep-on-it-the-weekly-challenge-142.html)

The code being forked in Dave's example works very similarly to Flavio's, above. The actual forking is done by the `ForkManager` object, which stands ready waiting to produce up to 20 forks. This number is arbitrary, and could be set to the length of the array.

In any case calling the `start` method initiates the fork, and, as per the norm, the child PID is returned to the parent and 0 to the forked process, enabling us to distinguish between the two clones internally. In the parent, we loop and start the child processes; in the forked processes, we sleep and `finish`. The object knows how many children it has spawned, and a method is provided, `wait_all_children`, to tidy up and ward against the zombies.


```perl
    use Parallel::ForkManager;

    my @unsorted = sort { rand 1 <=> rand 1 } 1 .. 10;

    my $pm       = Parallel::ForkManager->new(20);

    print 'Unsorted: ';
    say join ' ', @unsorted;
    say '';

    print 'Sorted: ';
    LOOP: for my $i (@unsorted) {
        my $pid = $pm->start and next LOOP;
        sleep $i;
        print qq{$i };
        $pm->finish;
    }
    $pm->wait_all_children;
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/roger-bell-west/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 142: The Last Digit of Sleep](https://blog.firedrake.org/archive/2021/12/The_Weekly_Challenge_142__The_Last_Digit_of_Sleep.html)

Roger presents another example using the finer granularity of `usleep` from `Time::HiRes` to count in milliseconds, which is to say microseconds times 1000.

One very interesting thing that's going on here, though, is that Roger is collecting all of the sorted numbers back into an output array from the forked processes. Returning data from a forked process is a tricky thing: the common solution was to construct the sorted output array by printing each digit as its thread finished. The `ForkManager`, on exiting a thread using `finish`, allows us to store a result for later retrieval. These results are collected by the `run_on_finish` callback and pushed onto an output array. The `ForkManager` object is run in the `main` package and so that is where the array is constructed, allowing us to then print the accumulated result.


```perl
    use Parallel::ForkManager;
    use Time::HiRes qw(usleep);

    sub sleepsort {
      my $n=shift;
      my @r;
      my $pm=Parallel::ForkManager->new(scalar @{$n});
      $pm->set_waitpid_blocking_sleep(0);
      $pm->run_on_finish(sub{
                           if (defined $_[5]) {
                             push @r,${$_[5]};
                           }
                         });
      foreach my $e (@{$n}) {
        $pm->start and next;
        usleep 1000*$e;
        $pm->finish(0,\$e);
      }
      $pm->wait_all_children;
      return \@r;
    }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/wlmb/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 142 – W. Luis Mochán](https://wlmb.github.io/2021/12/09/PWC142/)

Whilst we're on the subject, Luis came up with his own creative solution to returning information from the forked processes by associating the PIDs of the children with the argument they were originally given. Then, using `waitpid()` the PID of the processes of the child processes are noted when they complete, and these values are looked up to determine the correct next element to place on the ordered output array. We avoid actually transmitting information *from* the process, relying on the fact we already know what that information will be. What we do have is dynamic information about the state of the process itself that we can use instead as a signal. Nice.

```perl
    use POSIX ":sys_wait_h";
    my %value_for_kid;
    my @ordered;
    say("Usage: ./ch-2.pl scale a b c...\nto sort the numbers a b c...\n".
        "   Uses sleep sort. Sleep time is scale*number seconds"),
        exit if @ARGV<=1;
    my $scale=shift @ARGV;
    foreach(@ARGV){
        my $pid=fork;
        die "couldn't fork" unless defined $pid;
        if($pid==0){
            sleep($scale*$_);
            exit 0;
        }
        $value_for_kid{$pid}=$_;
    }

    while ((my $pid = waitpid(-1, 0))>0){
        push @ordered, $value_for_kid{$pid};
    }
```


##  using `Coro` for COROUTINES

Coro claims to have "the only real threads in Perl".

I don't feel qualified to evaluate the comprehensive truth of this statement, but I can say the author does makes a reasonable case for being lightweight. And they certainly fit some definitions of threads.

Coros were originally conceived as an implementation of coroutines — think subroutines that one can jump back and forth to, entering and exiting at multiple points. In coroutines one can call and execute the routine for a while, then jump back to the main process, then back into the routine where you left off again, continuing in this manner as long as one finds it useful. The main process and the coroutine exist in different scopes, which continue when not currently being executed. This requires an ability to shift state between the processing environments, and we have introduced the idea of  co-operative multitasking. The states, then, begin to look like proper threads.

Again, whether or not they are real threads is an argument I want to stay out of, but whatever you want to call them Coros remain a very cool concept in asynchronous programming. CPU control is handed back and forth between any number of independant coroutines, either explicitly through a `cede` statement or implicitly when arriving at certain conditions.

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/jo-37/perl/ch-2.pl)

Here Jorg creates one coroutine for each argument to be sorted, using the `async` keyword. In each of these the routine is set to sleep for the given length of seconds, which critically is a non-blocking action and will not prevent control from being handed back to the scheduler. Allowing control to be shuffled between asynchronous routines without one holding up the others is the tricky part here.

Ok, one of the tricky parts.

The other tricky part is establishing when we've finished sorting. This is done using a semaphore object that is initialized with a negative number based on the number of coros required for the sort. As each coro completes its sleep, it pushes its argument onto the sorted values array and increments the semaphore count by 1. When the semaphore count finally reaches 1 it becomes unlocked and execution in the main thread is allowed to continue.

Coros generally only share one CPU and so aren't a multiprocessing protocol, but rather a system of sharing the load on that one processor to work on several asynchronous actions simultaneously.

```perl
    say "@{sleep_sort(\@ARGV)}";


    ### Implementation

    # Coros, as cooperative threads, generally do not run in parallel, thus
    # no locking is required when accessing shared data.  Using a semaphore
    # for flow control: by waiting for the "ready" semaphore to become
    # available, the main thread allows the async coros to be scheduled and
    # regains control when all have finished with the same call.
    # Note: The sleep function is event-driven and will not block the
    # overall processing.
    sub sleep_sort ($arr) {
        # Collect sorted result here:
        my @sorted;
        # Will be unlocked when all threads have finished:
        my $ready = Coro::Semaphore->new(1 - @$arr);
        # Create threads.
        async {
            my ($ready, $sorted, $time) = @_;
            die "time machine not implemented" if $time < 0;
            say "sleep for $time s" if $verbose;
            Coro::AnyEvent::sleep $time;
            say "woke up after $time s" if $verbose;
            push @$sorted, $time;
            $ready->up;
        } $ready, \@sorted, $_ for @$arr;
        # Start processing and wait for async threads.
        $ready->down;

        \@sorted;
    }
```


## Blogs and Additional Submissions in Guest Languages for Task 2:


[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/abigail/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 142: Divisor Last Digit](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-142-1.html)

&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 142: Sleep Sort](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-142-2.html)

Abigail did submit some important analysis on why the task is absurd, and that a [real-time operating system](https://en.wikipedia.org/wiki/Real-time_operating_system) is required to either accurately complete the sort or know that we have been unsuccessful. Which is absolutely true.


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/athanasius/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/athanasius/raku/ch-2.raku)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/laurent-rosenfeld/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/laurent-rosenfeld/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 142: Divisor Last Digit and Sleep Sort | laurent_r](http://blogs.perl.org/users/laurent_r/2021/12/perl-weekly-challenge-142-divisor-last-digit-and-sleep-sort.html)

[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/paulo-custodio/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/paulo-custodio/python/ch-2.py)


[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/peter-campbell-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Clarity versus brevity](https://pjcs-pwc.blogspot.com/2021/12/clarity-versus-brevity.html)



[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/sgreen/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-142/sgreen/python/ch-2.py)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 142](https://dev.to/simongreennet/weekly-challenge-142-1gb3)







---

# BLOGS {#PWC142BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, by some miracle I somehow continue to maintain my bearings.**

**Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your Unquenchable *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC136BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *FOLLOW* these *BLOG* *LINKS*:

**( ...*don't think, trust your training, you're in the zone, just do it ...* )**


**Abigail**

 * [Perl Weekly Challenge 142: Divisor Last Digit](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-142-1.html) ( *Perl* )
 * [Perl Weekly Challenge 142: Sleep Sort](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-142-2.html) ( *Perl* )

**Adam Russell**

 * [Sleeping Divisors — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2021/12/12/perl) ( *Perl* )

**Arne Sommer**

 * [At Sleep at Last with Raku](https://raku-musings.com/last-sleep.html) ( *Raku* )

**Dave Jacoby**

 * [Sleep On It: The Weekly Challenge #142 | Committed to Memory](https://jacoby.github.io/2021/12/06/sleep-on-it-the-weekly-challenge-142.html) ( *Perl* )

**Flavio Poletti**

 * [PWC142 - Divisor Last Digit - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/12/08/pwc142-divisor-last-digit/) ( *Perl & Raku* )
 * [PWC142 - Sleep Sort - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/12/09/pwc142-sleep-sort/) ( *Perl & Raku* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 142](https://www.braincells.com/perl/2021/12/perl_weekly_challenge_week_142.html) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #142](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-142/james-smith) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 142: Divisor Last Digit and Sleep Sort | laurent_r](http://blogs.perl.org/users/laurent_r/2021/12/perl-weekly-challenge-142-divisor-last-digit-and-sleep-sort.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 142: divide and sleep! – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2021/12/06/PerlWeeklyChallenge142.html#task1) ( *Raku* )

**Peter Campbell Smith**

 * [Clarity versus brevity](https://pjcs-pwc.blogspot.com/2021/12/clarity-versus-brevity.html) ( *Perl* )

**Roger Bell_West**

 * [RogerBW's Blog: The Weekly Challenge 142: The Last Digit of Sleep](https://blog.firedrake.org/archive/2021/12/The_Weekly_Challenge_142__The_Last_Digit_of_Sleep.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 142](https://dev.to/simongreennet/weekly-challenge-142-1gb3) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 142 – W. Luis Mochán](https://wlmb.github.io/2021/12/09/PWC142/) ( *Perl* )
