---
author:       Colin Crain
date:         2021-09-06T00:00:00
description:  "Colin Crain › Perl Weekly Review #126"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #126"
image:        images/blog/p5-review-challenge-126.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-125/).* )

Welcome to the Perl review for **Week 126** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-126/) or the summary [**recap**](/blog/recap-challenge-126/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC126TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC126TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC126BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC126TASK1}

# Count Numbers
*Submitted by: Mohammad S Anwar*<br>
You are given a positive integer $N.

Write a script to print count of numbers from 1 to $N that don’t contain digit 1.

**Example**
```
    Input: $N = 15
    Output: 8
```
There are 8 numbers between 1 and 15 that don't contain digit 1.
2, 3, 4, 5, 6, 7, 8, 9.
```
    Input: $N = 25
    Output: 13
```
There are 13 numbers between 1 and 25 that don't contain digit 1.
2, 3, 4, 5, 6, 7, 8, 9, 20, 22, 23, 24, 25.


## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/abigail/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/adam-russell/perl/ch-1.pl),
[**Andrezgz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/andrezgz/perl/ch-1a.sh),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/arne-sommer/perl/ch-1.pl),
[**Belmark Caday**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/belmark-caday/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/colin-crain/perl/ch-1.pl),
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/cristian-heredia/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/dave-jacoby/perl/ch-1.pl),
[**Duane Powell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/duane-powell/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/polettix/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/jo-37/perl/ch-1.pl),
[**Kai Burgdorf**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/kai-burgdorf/perl/ch-1.pl),
[**Konstantinos Giannakakis**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/kostas-giannakakis/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/lubos-kolouch/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/mattneleigh/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/perlboy1967/perl/ch-1.pl),
[**Olivier Delouya**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/olivier-delouya/perl/ch-1.sh),
[**Paul Fajman**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/paul-fajman/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/pete-houston/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/sgreen/perl/ch-1.pl),
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/steven-wilson/perl/ch-1.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/stuart-little/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/ulrich-rieke/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/wlmb/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/wanderdoc/perl/ch-1.pl)


There were 31 submissions for the first task this past week. There were, broadly, two classes of solutions: those that started with the list of all numbers up to the input value and filtered out those containing a 1; and those that made an arithmetic breakdown to compute the value directly from the input, either by positional value in the representation or by more arcane means.

In keeping with the new *lighting review* format we've been experimenting with lately, we will select a dozen submissions at random to hopefully give us a semblance of an overview for the techniques presented. Let's see how that goes.


##  a less-than-exhaustive, but still quite serious, *OVERVIEW*

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/laurent-rosenfeld/perl/ch-1.pl)

**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/laurent-rosenfeld/julia/ch-1.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/laurent-rosenfeld/raku/ch-1.raku)

**blog writeup:**
[Perl Weekly Challenge 126: Count Numbers and Minesweeper Game | laurent_r](http://blogs.perl.org/users/laurent_r/2021/08/perl-weekly-challenge-126-count-numbers-and-minesweeper-game.html)

Laurent will start us off today with an example of grepping a list of values to filter out any containing a 1. The 1s are matched using a regular expression and only values that do not match are allowed through.

My own solution was very similar to this, as were several others.

```perl
    my $n = shift // 24;
    my $count = scalar grep {not /1/} 2..$n;
    say "There are $count integers with no 1 in the 1..$n range";
```

[**Konstantinos Giannakakis**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/kostas-giannakakis/perl/ch-1.pl)

Konstantinos takes a similar filtering approach but rather than just count the array elements he saves them. Hes then constructs a more verbose output, reporting the recorded list using a print loop.

```perl
    # Give the integer for the upper limit of 1 - $N
    my $N = 25;

    # This array contains the range of numbers we want to check
    my @list = (1..$N);

    my @count = ();

    # find all the numbers that dont contain 1
    @count = @count = grep { $_  if $_ !~ /1/g } @list;

    # print them
    my $count = 0;
    print "There are " . scalar(@count) . " numbers between 1 and $N that don't contain digit 1.\n";
    foreach (@count) {
        if ($count != $#count){
            print("$_, ");
        } else {
            print ("$_.\n");
        }
        $count++;
    }
```

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/sgreen/perl/ch-1.pl)

**blog writeup:**
[Weekly Challenge 126](https://dev.to/simongreennet/weekly-challenge-126-19fg)

Simon gives us a variation using `index` in an explicit `foreach` loop. As `index` does not require the full resources of a the regex engine this approach is likely to be faster for iterating large value lists.

```perl
    # Count the number of numbers that don't have a one
    my $count = 0;
    foreach my $number ( 2 .. $N ) {
        ++$count if index( $number, '1' ) == -1;
    }

    # Display the result
    say $count;
```

[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/steven-wilson/perl/ch-1.pl)

Steven presents us with another way to count the sequence without a `grep` statement, in this case a `while` loop that conditionally ratchets a counter.

```perl
    while ( $current_number <= $input ) {
        if ( not( $current_number =~ /1/ ) ) {
            $count++;
        }
        $current_number++;
    }
```

[**Belmark Caday**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/belmark-caday/perl/ch-1.pl)

Belmark shows we can avoid regular expressions entirely, using a system of loops to examine each individual digit.

```perl
    sub countNumbers {
        my $n = shift;
        my $count = 0;

        for ( $i = 1; $i <= $n; $i++ ) {
            my @stringSplit = split(//, "$i");

            my $j = 0;
            foreach my $s ( @stringSplit ) {
                $s == 1 ? last : $j++;
            }
            $count++ if $j == scalar @stringSplit; # We arrived at the end of the list without finding 1
        }
        print "Count is : $count \n";
    }
```


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/polettix/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/polettix/raku/ch-1.raku)

**blog writeup:**
[PWC126 - Count Numbers - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/08/18/pwc126-count-numbers/)

Flavio seems to take the idea of "let's make this interesting" to heart, which is nice. He opts, after constructing a quick filter to check his results, to create a more robust solution that won't bog down for large values when searching through a list of thousands and thousands of numbers. He in fact creates two new solutions for us, both iterative and recursive, that process large blocks of numbers by positional placement, effectively counting the values in the sequence using a simple algorithmic formula.

Here is his iterative solution for your perusal:

```perl
    sub count_like_no_ones ($N) {
       my $count = 0;
       my @digits = split m{}mxs, $N;
       while (@digits) {
          my $first = shift @digits;
          if (@digits) { # more to go after, use chunking
             my $factor = $first > 1 ? $first - 1 : $first;
             $count += $factor * 9 ** @digits;
          }
          else { # last digit, count all including 0
             $count += $first > 1 ? $first : 1;
          }
          last if ($first == 1);
       }
       # we took into account sequence of all 0, so we remove it
       return $count - 1;
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/james-smith/perl/ch-1.pl)

**additional languages:**
[Cesil](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/james-smith/cesil/ch-1.ces)

**blog writeup:**
[Perl Weekly Challenge #126](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-126/james-smith)

Coincidentally right on Flavio's tail, James also give us an alternative method for directly computing the total count from blocks by digit position, this time working from the right side of the number upwards, to the left.

From his writeup, he provides an explanation of the process:

>If we look at a few numbers [of a filtered solution] we see that for powers of 10 we see we have values 8, 80, 728, 6560, 59048, ... what we notices these are all of the form 9^$N-1.... For multiples of these we see that for the total is (n-1)*9^N.

```perl
    sub get_no_one_count_9 {
      my ( $n, $count, $pow_9 ) = ( shift, 0, 1 );
      while($n) {
        my $t   = $n % 10; ## get last digit
        $count  = 0 if $t==1; ## Throw everything away we've found a 1
        $count += $t ? ( $t == 1 ? ($pow_9-1) : ($t-1)*$pow_9 ) : 0;
                              ## 0 it contributes nothing
                              ## 1 contributes 9^X-1
                              ## 2-9 contributes (n-1)9^X
        $pow_9 *= 9;  ## update power of nine
        $n      = ( $n - $t )/10; ## drop last digit
      }
      return $count;
    }
```

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/pete-houston/perl/ch-1.pl)

Here's yet another reworking of the formula from Pete, who presents it in a particularly clean and effective manner:

```perl
    # Maths FTW!

    sub calc {
        my $upper = shift;

        my $power = length ($upper) - 1;
        my $rest  = $upper % 10 ** $power;
        my $first = int ($upper / 10 ** $power);

        my $tot   = calc ($rest) if $rest && $first != 1;

        # for a number of 10^n answer is demonstrably 9^n - 1.
        if ($first > 1) {
        	$tot += ($first - 1) * (9 ** $power);
        } else {
        	$tot += (9 ** $power - 1);
        }
        return $tot;
    }
```


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/roger-bell-west/perl/ch-1.pl)

**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/roger-bell-west/rust/ch-1.rs)

**blog writeup:**
[RogerBW's Blog: Perl Weekly Challenge 126: Count Sweeper](https://blog.firedrake.org/archive/2021/08/Perl_Weekly_Challenge_126__Count_Sweeper.html)

After starting with a very simple breakdown of the problem using Unix utilities on the command line, here using the example input 25:

```shell
    seq 1 25 |grep -vc 1
```

Roger analyses the task to come up with a method [using base-9 to produce the sequence](https://oeis.org/A052383), then counting the values less than the input value.

```perl
    sub cn {
      my $n=shift;
      my $k=$n;
      my @digits;
      while ($k>0) {
        my $d=$k%10;
        if ($d==1) {
          @digits=(8) x scalar(@digits);
        }
        if ($d>0) {
          $d--;
        }
        push @digits,$d;
        $k=int($k/10);
      }
      my $tc=0;
      foreach my $i (reverse(0..$#digits)) {
        $tc*=9;
        $tc+=$digits[$i];
      }
      return $tc;
    }
```

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/adam-russell/perl/ch-1.pl)

**additional languages:**
[Cxx](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/adam-russell/cxx/ch-1.cxx), [Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/adam-russell/prolog/ch-1.p)

**blog writeup:**
[RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2021/08/22)

Adam inverts the problem: rather than count the elements *without* any 1s, he uses `tr///` to count the elements *with* 1s and subtracts this sum from the total quantity.

```perl
    sub has_1{
        my($x) = @_;
        return 1 if $x =~ tr/1//d > 0;
        return 0;
    }

    sub count_with_1{
        my($n) = @_;
        my $x = 1;
        my $count = 0;
        {
            $count += has_1($x);
            $x += 1;
            redo if $x <= $n;
        }
        return $count;
    }

    sub count_without_1{
        my($n) = @_;
        return $n - count_with_1($n);
    }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/e-choroba/perl/ch-1.pl)

Choroba presents a novel scheme to count upward to the traget, skipping ahead over number blocks that include a 1 by using a regex to increment our candidate value, replacing any 1 found with a 2. Using this method we will, when counting from 2, only possibly acquire a single new 1 digit at a time to change out, skipping ahead over these values and only counting the unskipped parts of the sequence.

```perl
    sub count_numbers_fast {
        my ($n) = @_;
        my $count = 0;
        my $i = 2;
        while ($i <= $n) {
            ++$i;
            # Only one 1 can appear if there wasn't one, so we don't need /g.
            $i =~ s/1/2/;
            ++$count;
        }
        return $count
    }
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/jo-37/perl/ch-1.pl)

Finally, Jorg presents another, this time recursive, approach to counting up the total sum by representational position. Because he's using the same code to process each position, he needs to accommodate the presence of zeros as we work through the powers of ten.

```perl
    # Using a recursive, pure numeric approach.  While recursing, we need to
    # distinguish between the cases when counting from zero e.g. in a block
    # from 20 to 29 or counting from one, as in 1 .. 9, indicated by $z.
    sub count_numbers ($n, $z=0) {
        # Do we count from zero?
        return $z if $n <= 1;

        # The integer logarithm of $n in base 10.
        my $log = logint($n, 10);

        # Break recursion for $n < 10
        return $n - !$z if $log == 0;

        # The largest power of ten less than or equal to $n.
        my $pot = 10 ** $log;

        # Get the count for all shorter numbers, propagating the zero state.
        my $count = count_numbers($pot - 1, $z);

        # There are no new numbers in the range between $pot and
        # 2 * $pot - 1.
        return $count if $n < 2 * $pot;

        # Get the leading digit.
        my $lead = int $n / $pot;

        # There may be $lead - 2 full blocks having one digit less than $n,
        # where zeros shall be counted. E.g. 20 .. 29, 30 .. 39, 40 .. 49
        # for $n = 55.
        $count += ($lead - 2) * count_numbers($pot - 1, 1) if $lead > 2;

        # There is a final block between $pot * $lead and $n, where zeros
        # shall be counted again. E.g. 50 .. 55 for $n = 55.
        $count += count_numbers($n - $pot * $lead, 1);
    }
```






## Blogs and Additional Submissions in Guest Languages for Task 1:

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/abigail/perl/ch-1.pl)

**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/abigail/awk/ch-1.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/abigail/bash/ch-1.sh), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/abigail/c/ch-1.c), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/abigail/lua/ch-1.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/abigail/node/ch-1.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/abigail/python/ch-1.py), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/abigail/ruby/ch-1.rb)

**blog writeup:**
[Perl Weekly Challenge 126: Count Numbers](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-126-1.html)

[**Andrezgz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/andrezgz/perl/ch-1a.sh)

**additional languages:**
[shell one-liner](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/andrezgz/perl/ch-1a.sh)


[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/arne-sommer/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/arne-sommer/raku/ch-1.raku)

**blog writeup:**
[Count Minesweeper with Raku and Perl](https://raku-musings.com/count-minesweeper.html)

[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/colin-crain/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/colin-crain/raku/ch-1.raku)

**blog writeup:**
[I Sweep For No One — Programming Excursions in Perl and Raku](https://colincrain.com/2021/08/22/i-sweep-for-no-one/)

[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/cristian-heredia/perl/ch-1.pl)

**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/cristian-heredia/python/ch-1.py)

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/dave-jacoby/perl/ch-1.pl)

**additional languages:**
[Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/dave-jacoby/node/ch-1.js)

**blog writeup:**
[That One Is Mine: The (Perl and JS) Weekly Challenge #126 | Committed to Memory](https://jacoby.github.io/2021/08/18/that-one-is-mine-the-perl-and-js-weekly-challenge-126.html)

[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/stuart-little/perl/ch-1.pl)

**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/stuart-little/haskell/ch-1.hs), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/stuart-little/lua/ch-1.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/stuart-little/node/ch-1.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/stuart-little/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/stuart-little/raku/ch-1.raku)

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/ulrich-rieke/perl/ch-1.pl)

**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/ulrich-rieke/cpp/ch-1.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/ulrich-rieke/haskell/ch-1.hs), [Lisp](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/ulrich-rieke/lisp/ch-1.lisp), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/ulrich-rieke/raku/ch-1.raku)

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/wlmb/perl/ch-1.pl)

**blog writeup:**
[Perl Weekly Challenge 126 – W. Luis Mochán](https://wlmb.github.io/2021/08/20/PWC126/)





------------------------------------------




---

# TASK 2 {#PWC126TASK2}

# Minesweeper Game
*Submitted by: Cheok-Yin Fung*

You are given a rectangle with points marked with either x or *. Please consider the x as a land mine.

Write a script to print a rectangle with numbers and x as in the Minesweeper game.

A number in a square of the minesweeper game indicates the number of mines within the neighbouring squares (usually 8), also implies that there are no bombs on that square.

**Example**
```
    Input:
        x * * * x * x x x x
        * * * * * * * * * x
        * * * * x * x * x *
        * * * x x * * * * *
        x * * * x * * * * x

    Output:
        x 1 0 1 x 2 x x x x
        1 1 0 2 2 4 3 5 5 x
        0 0 1 3 x 3 x 2 x 2
        1 1 1 x x 4 1 2 2 2
        x 1 1 3 x 2 0 0 1 x
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/abigail/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/adam-russell/perl/ch-2.pl),
[**Andrezgz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/andrezgz/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/arne-sommer/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/athanasius/perl/ch-2.pl),
[**Belmark Caday**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/belmark-caday/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/dave-jacoby/perl/ch-2.pl),
[**Duane Powell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/duane-powell/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/polettix/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/jo-37/perl/ch-2.pl),
[**Konstantinos Giannakakis**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/kostas-giannakakis/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/laurent-rosenfeld/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/lubos-kolouch/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/mattneleigh/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/perlboy1967/perl/ch-2.pl),
[**Paul Fajman**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/paul-fajman/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/pete-houston/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/sgreen/perl/ch-2.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/stuart-little/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/ulrich-rieke/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/wlmb/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/wanderdoc/perl/ch-2.pl)

Well that seemed to go well. Let's keep going.

There were a total of 28 submissions for the second task this past week.

Continuing on we will now have the rabbit draw a dozen *different* names from the hat, and see if we can read them before they are eaten. This way we'll end up looking at the work of 24 members overall, which sounds like a reasonable sketch to me.

There were, basically, two ways to approach the problem: either look at each cell that *isn't* a mine and count the number of mines surrounding it, recording these values, or look for all of the cells that *are* mines, and increment the count at each surrounding cell that itself isn't a mine, slowly building up the complete picture as we traverse through the coordinates.

##  a circumspect and sinuous *OVERVIEW* of the submissions

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/perlboy1967/perl/ch-2.pl)

We'll start with Niels this time. After generating a random minefield map he proceeds to traverse the matrix. One thing to notice  here is that when making the board he starts his lists with index 1, rather than 0, and does the same when traversing. This makes sure there is an undefined buffer zone surrounding the matrix with index 0, which simplifies calculations involving the boundaries. This way we'll never index `[-1]`, which would give us the *last* array element, causing all kind of problems.

When scanning across the minefield, each cell is examined, and if it is found to be a mine it's skipped. If it's not a mine, on the other hand, an inlined list of the 8 surrounding cell possibilities is grepped for the "X" mine indicator; the cell under examination is then filled with the element count of the resulting filtered array.

This appeared to be the most common general approach.

```perl
    sub solveBoard(\@) {
      my ($arB) = @_;

      foreach my $y (1 .. scalar(@$arB)-2) {
        foreach my $x (1 .. scalar(@{$arB->[1]})-1) {
          next if $arB->[$y][$x] eq 'X';
          my $n = scalar grep /X/,
            $arB->[$y-1][$x-1] // '', # NW
            $arB->[$y-1][$x]   // '', # N
            $arB->[$y-1][$x+1] // '', # NE
            $arB->[$y][$x-1]   // '', # W
            $arB->[$y][$x+1]   // '', # E
            $arB->[$y+1][$x-1] // '', # SW
            $arB->[$y+1][$x]   // '', # S
            $arB->[$y+1][$x+1] // ''; # SE
          $arB->[$y][$x] = ($n == 0 ? '.' : $n);
        }
      }
    }
```

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/arne-sommer/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/arne-sommer/raku/ch-2.raku)

**blog writeup:**
[Count Minesweeper with Raku and Perl](https://raku-musings.com/count-minesweeper.html)

Arne give us a another example of iterating through the matrix, pausing at each element that isn't a mine. When one is found, we then count the mines surrounding it to obtain the value for the output as previously explained, only here we use a pair of nested loops to generate the offset parameters. The output is printed directly.

```perl
    for my $row (split(/\s*\|\s*/, $string))
    {
      my @row = split(/\s+/, $row);
      die "Illegal character(s)" unless all(@row) eq any("x", "*");
      push(@board, \@row);
      push(@size, scalar @row);
    }

    for my $row (0 .. scalar @board -1)
    {
      for my $col (0 .. scalar @{$board[$row]} -1)
      {
        print get_cell($row, $col, @board), " ";
      }
      say "";
    }

    sub get_cell ($row, $col, @board)
    {
      return 'x' if $board[$row][$col] eq 'x';

      my $count = 0;

      for my $row_offset (-1, 0, 1)
      {
        for my $col_offset (-1, 0, 1)
        {
          next if $row_offset == $col_offset && $col_offset == 0;
          next unless $board[$row + $row_offset][$col + $col_offset];
          next if $row + $row_offset < 0;
          next if $col + $col_offset < 0;

          $count++ if $board[$row + $row_offset][$col + $col_offset] eq "x";
        }
      }
      return $count;
    }
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/athanasius/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/athanasius/raku/ch-2.raku)

In the monk's `number_the_grid()` routine, we get another implementation of looking for unmined locations and then counting the surrounding dangers. It's a fairly straightforward operation, all in all.

```perl
    sub number_the_grid
    {
        my @in_grid = @_;

        my $max_row = $#in_grid;
        my $max_col = $#{ $in_grid[ 0 ] };
        my @out_grid;

        push @out_grid, [ (0) x ($max_col + 1) ] for 0 .. $max_row;

        for my $row (0 .. $max_row)
        {
            for my $col (0 .. $max_col)
            {
                if  ($in_grid[ $row ][ $col ] eq $MINE)
                {
                    $out_grid[ $row ][ $col ] =  $MINE;
                }
                else
                {
                    my $count = 0;

                    for my $r ($row - 1 .. $row + 1)
                    {
                        next if $r < 0 || $r > $max_row;

                        for my $c ($col - 1 .. $col + 1)
                        {
                            next if $r == $row && $c == $col ||
                                    $c < 0 || $c > $max_col;

                            ++$count if $in_grid[ $r ][ $c ] eq $MINE;
                        }
                    }

                    $out_grid[ $row ][ $col ] = $count if $count;
                }
            }
        }

        return @out_grid;
    }
```

[**Duane Powell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/duane-powell/perl/ch-2.pl)

Duane manages to perform the nested traversals in a remarkably concise manner.

```perl
    my $vec = [
        [ 1, 0 ], [ -1,  0 ], [  0, 1 ], [  0, -1 ],
        [ 1, 1 ], [  1, -1 ], [ -1, 1 ], [ -1, -1 ],
    ];

    foreach my $j (0 .. $y) {
        foreach my $i (0 .. $x) {

            # if cell contains a MINE, skip it
            # otherwise init adjacent MINE count to 0
            next if ($m->[$j][$i] eq $MINE);
            $m->[$j][$i] = 0;

            # inspect adjacent cells
            foreach my $v ( @{$vec} ) {
                my ($a, $b) = @{$v};
                my ($c, $d) = ($j+$a, $i+$b);

                # out of bounds
                next if ($c < 0 or $c > $y) or ($d < 0 or $d > $x);

                # total adjacent mines
                $m->[$j][$i] += 1 if ($m->[$c][$d] eq $MINE);
            }
        }
    }
```

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/duncan-c-white/perl/ch-2.pl)

I'm fairly certain Duncan has even reduced it further. I've edited them down a bit to emphasize the core logic so that's a tough call, and it's not a competition anyway. But no matter, they each retain an elegance to themselves.

```perl
    use Function::Parameters;

    fun minesweep( @board )
    {
        my @result;
        foreach my $r (0..$#board)
        {
        	my $row = $board[$r];
        	my @newrow;
        	foreach my $c (0..$#$row)
        	{
        		my $cell = $row->[$c];
        		my $newcell = mark( $r, $c, $cell, \@board );
        		push @newrow, $newcell;
        	}
        	push @result, \@newrow;
        }
        return @result;
    }
```

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/wanderdoc/perl/ch-2.pl)

The doctor, in their solution, establishes a parallel output matrix to hold the count values for the cells as they are evaluated. I like the detail mapping the directional offsets to cardinal references, which serves to remind the reader exactly what those magic numbers are doing. Of course it doesn't matter at all the order in which we look at the surrounding cells, so calling `keys` on this hash will work just fine.

```perl
    my %ways =     ('n' => [-1, 0], 'ne' => [-1,  1], 'e' => [0,  1], 'se' =>  [1, 1],
                    's' => [ 1, 0], 'sw' => [ 1, -1], 'w' => [0, -1], 'nw' => [-1, -1]);

    sub count_mines
    {
         my $aref = $_[0];
         my $output;
         for my $row ( 0 .. $#$aref )
         {
              for my $col ( 0 .. $#{$aref->[$row]} )
              {
                   if ( $aref->[$row][$col] eq 'x' )
                   {
                        $output->[$row][$col] = $aref->[$row][$col];
                   }
                   else
                   {
                        my @coords =
                             grep {$_->[0] >= 0 and $_->[1] >= 0 and
                                  $_->[0] <= $#$aref and $_->[1] <= $#{$aref->[$row]}}
                             map  {[$ways{$_}[0] + $row, $ways{$_}[1] + $col]} keys %ways;
                        my $count = 0;
                        for my $pair ( @coords )
                        {
                             $count++ if ( $aref->[$pair->[0]][$pair->[1]] eq 'x' );

                        }
                        $output->[$row][$col] = $count;
                   }
              }
         }

         return $output;
    }
```


[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/colin-crain/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/colin-crain/raku/ch-2.raku)

**blog writeup:**
[I Sweep For No One — Programming Excursions in Perl and Raku](https://colincrain.com/2021/08/22/i-sweep-for-no-one/)

Now, demonstrating an alternative way to structure the algorithm, we have my own solution.

First, in an editorial aside: "Oh look, my name came up!" I'll have you know that I already had a list of random names implemented in the template system I've evolved for these reviews, as a tool available to try and actively remove my own personal selection biases from the reports. In that capacity this was advisory, a selection from outside my own head to draw on when establishing a through-narrative, breaking the methods and techniques into interrelated categories and working out a big picture. All that work takes time of course, which I'm afraid I won't have much of for the next few weeks, so hence the format changes. These presumably will only be temporary as circumstance require, but suffice to say I'm now experimenting with taking the top of this list as the selection itself, with possibly a little rearranging as required to the ordering.

But here I am, on the list for this task. So let's go.

To briefly summarize:

To process the input matrix I saw two possible ways to go about things: to look at each position and search for mines around it, or to look for mines and augment the count for the surrounding cells. I chose the latter, as we can do away with the circumnavigation step if no mine is found.

Of note in the comparisons I used to make sure the surrounding cell indices are still in range I use pairs of chained greater-than operators, new to Perl 5.32, that make this quite compact and neat. I really like now being able to do this. It's practical, clear and obvious. It's the little things that add up, you know.

I also added a random map generator to make it interesting, so I got that going on, which is nice.

```
    Input:

    * x * * x * * x * * x
    * * * x * * * * * * x
    * * * * * * * x * * *
    * x * * * * * * * * *
    * * * * * * * * x * *
    * * * * * x * x * * *
    * * * * x * * * * * *
    * x * * * x * x * x *
    * x * x * x * * * * *
    x * * * x x x * * * *
    * x x * * * * x x * *

    Output:

    1 x 2 2 x 1 1 x 1 2 x
    1 1 2 x 2 1 2 2 2 2 x
    1 1 2 1 1 0 1 x 1 1 1
    1 x 1 0 0 0 1 2 2 1 0
    1 1 1 0 1 1 2 2 x 1 0
    0 0 0 1 2 x 2 x 2 1 0
    1 1 1 1 x 3 4 2 3 1 1
    2 x 3 2 4 x 3 x 2 x 1
    3 x 3 x 5 x 5 2 2 1 1
    x 4 4 3 x x x 3 2 1 0
    2 x x 2 2 3 3 x x 1 0
```


```perl
    my $mat = generate_map(10,10,30);

    my @mat = map { [ map { $_ eq '*' ? 0 : $_ } $_->@* ] } $mat->@* ;
    my @deltas = (  [-1,-1], [-1,0 ], [-1, 1],
                    [ 0,-1],          [ 0,1 ],
                    [ 1,-1], [ 1, 0], [ 1, 1]  );

    for my $i ( 0..$#mat ) {
        for my $j ( 0..$mat[0]->$#* ) {
            next unless $mat->[$i][$j] eq 'x';
            for my $d ( @deltas ) {
                my $r = $i + $d->[0];
                my $c = $j + $d->[1];
                if ( @mat > $r >= 0 and $mat[0]->@* > $c >= 0 ) {
                    next if $mat[$r][$c] eq 'x';
                    $mat[$r][$c]++;
                }
            }
        }
    }
    say "\nInput:\n";
    say "$_->@*" for $mat->@*;

    say "\nOutput:\n";
    say "$_->@*" for @mat;
```


[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/dave-jacoby/perl/ch-2.pl)

**additional languages:**
[Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/dave-jacoby/node/ch-2.js)

**blog writeup:**
[That One Is Mine: The (Perl and JS) Weekly Challenge #126 | Committed to Memory](https://jacoby.github.io/2021/08/18/that-one-is-mine-the-perl-and-js-weekly-challenge-126.html)

Dave also looks for mines, then if one is found the count for the surrounding cells that remain in the matrix dimensions are all incremented by 1. I'm glad to have the company with the minority approach. It was getting a little lonely, to be honest.

Dave enjoyed parsing a heredoc to input his original map, which is a very human-readable way to go about things.

```perl
    my $field = <<END;
    x * * * x * x x x x
    * * * * * * * * * x
    * * * * x * x * x *
    * * * x x * * * * *
    x * * * x * * * * x
    END

    my @field = map { [ split /\s/, $_ ] }
        split /\n/, $field ;

    my $h = -1 + scalar @field ;
    my $w = -1 + scalar $field[ 0 ]->@* ;

    my @map ;

    for my $i ( 0 .. $h ) {
        for my $j ( 0 .. $w ) {
            $map[ $i ][ $j ] = $field[ $i ][ $j ] eq 'x' ? 'x' : 0 ;
            }
        }

    for my $i ( 0 .. $h ) {
        for my $j ( 0 .. $w ) {
            next unless $map[ $i ][ $j ] eq 'x' ;
            for my $x ( -1 .. 1 ) {
                for my $y ( -1 .. 1 ) {
                    my $xx = $i + $x ;
                    my $yy = $j + $y ;
                    next if $xx == 0 && $yy == 0 ;
                    next if $xx < 0 ;
                    next if $yy < 0 ;
                    next if $xx > $h ;
                    next if $yy > $w ;
                    next if $map[ $xx ][ $yy ] eq 'x' ;
                    $map[ $xx ][ $yy ]++ ;
                    }
                }
            }
        }
```

[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/mattneleigh/perl/ch-2.pl)

Here is another example of this second approach from Matthew, who walks us through the process with his commentary as he iteratively walks the martix looking for mines.

```perl
    # Eliminate spaces, change un-mined
    # cells to zeros, and break each line
    # into its component characters
    $j = $h;
    while($j--){
        $grid[$j] =~ s/ //g;
        $grid[$j] =~ s/\*/0/g;
        $grid[$j] = [split('', $grid[$j])];
    }

    $w = scalar(@{$grid[0]});

    # Wander the grid in an orderly fashion
    $j = $h;
    while($j--){
        $i = $w;
        while($i--){
            # There are probably fewer mines than
            # not-mines, so look for mines
            if($grid[$j][$i] eq 'x'){
                # This cell has a mine- examine adjacent
                # cells within the bounds of the grid
                for my $y (($j ? $j-1 : 0) .. ($j+1-$h ? $j+1 : $j)){
                    for my $x (($i ? $i-1 : 0) .. ($i+1-$w ? $i+1 : $i)){
                        # Increment the adjacent cell at
                        # $x, $y unless it has a mine
                        $grid[$y][$x]++
                            unless($grid[$y][$x] eq 'x');
                    }
                }
            } # end if($grid[$j][$i] eq 'x')
        }
    }
```




[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/stuart-little/perl/ch-2.pl)

**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/stuart-little/haskell/ch-2.hs), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/stuart-little/lua/ch-2.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/stuart-little/node/ch-2.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/stuart-little/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/stuart-little/raku/ch-2.raku)

Stuart brings us a more functional paradigm, with chains of `map` and `grep` operations to first process the input and then, inside a nested loop of `for` statements, to circumnavigate each cell and determine valid surrounding coordinate index pairs.

```perl
    sub nbrs($mat, $i, $j) {
        my @pairs = grep {$_->[0] >= 0 && $_->[0] < scalar @{$mat} && $_->[1] >= 0 && $_->[1] < scalar @{$mat->[0]} && ($_->[0] != $i || $_->[1] != $j)}
        map {my $co = $_; my @a = map {[$i+$_,$j+$co]} (-1..1); @a}
        (-1..1);
        return \@pairs;
    }

    my @in = grep {scalar @{$_}} map {my @a = split /\s+/, $_; \@a} <DATA>;

    for my $i (0..(scalar @in)-1) {
        for my $j (0..(scalar @{$in[0]})-1) {
            print( (($in[$i]->[$j] eq 'x') ? ($in[$i]->[$j]) : (scalar grep { $in[$_->[0]]->[$_->[1]] eq 'x' } @{nbrs(\@in,$i,$j)})) . " ");
        }
        print("\n");
    }
```





[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/cheok-yin-fung/perl/ch-2.pl)

CY offers us a couple of unusual interesting aspects in her solution, both in the code process and the interaction the code has with the user. In the implementation of the map relationships, she notes that the maximum value for adjacency is 8, for a cell, surrounded by bombs, and this maximum is a single digit.

So a single character is all that will ever be needed for any one position, right? This allows the rows to be encoded as strings, and the map to be an array of rows. No multidimensionality is required, and the cells are referenced and altered via `substr`. That's certainly different. A quick file search reveals only Ulrich took a similar approach.

The second innovation on the basic challenge was to implement a proper minesweeper terminal game using `IO::Prompter.pm`. The underlying logic is not fundamentally complex: once we have the decoder map resolved, if we take a user input coordinate we either reveal the number for that cell or detonate the mine, ending the game. The actual complex logic is all offloaded to the player, who needs to apply deductive reasoning to infer a strategy of minimizing risk when making successive new moves.

The ability to flag a deduced mine position is implemented to help the user keep track, and should the player successfully fill the map without blowing everything up a congratulatory message is posted, proclaiming them a hero.

We've seen a number of map processing routines, so let's have a look at part of the game instead this time. The `%rb35` variable decodes the input coordinates from base 35: 1 through 9 followed by A through Z .

```perl
    my @data = ("", "", "");
    while (   !$explosion
            && $data[2] ne "q"
            && $num_of_op_pos < $num_of_digits
          )
    {
        my ($i, $j);

        print_table();
        say 'action option: (o(open), f(flag/unflag), c(cancel) or q(quit))';
        @data = (
            prompt(' row  :'),
            prompt(' col  :'),
            prompt('action:'),
        );

        {
            $i = $rb35{$data[0]} - 1;
            $j = $rb35{$data[1]} - 1;
        }


        my $act = $data[2];
        if ($act eq "o" && $master_board->[$i][$j] eq "x") {
            $explosion = 1;
            last;
        }

        given ($act) {
            when ("o") {
                $table->[$i][$j] = $master_board->[$i][$j];
                $num_of_op_pos++;
            }
            when ("f") {
                if ($table->[$i][$j] !~ /^\d$/) {
                    $table->[$i][$j] = $table->[$i][$j] eq "f" ? "." : "f";
                }
                else {
                    say "Grid already identified.\n";
                }
            }
            when ("c") {say "Action cancelled.\n";}
            default {say "Cannot identify your action.\n";}
        }
    }
    print "\n" x 3;
    say "BOOOOOOOOOOOOOOOOOOOOOOOOOOOOMB!" if $explosion;
    say "Safe, my hero!"
      if $num_of_op_pos == $num_of_digits;
```


[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/lubos-kolouch/perl/ch-2.pl)

Finally, Lubos starts his submission with a comment:

>just printing the field is booooring, let's implement the whole game

True to his word, he does go on to implement the game, taking in user input from `STDIN` using the "diamond operator", `<>`.

I notice a lot of very, very long "O" vowels going on here, as, like CY, when the player loses this happens with a resounding "BOOOOM!".

```perl
    sub play_game {
        print "Find all fields without bombs \n";

        while ($empty_fields > 0) {
            print_field(\@player_field);
            print "Fields remain $empty_fields \n";
            print "Enter coordinates separated by space (for example 0 0):\n";

            my $input = <>;
            my @coords = split / /, $input;
            if ($field[$coords[0]][$coords[1]] eq "x") {
                print "BOOOOM! \n";

                print_field(\@complete_field);
                return;
            }

            if ($player_field[$coords[0]][$coords[1]] ne "*") {
                print "You tried that already \n";
                next;
            }

            $player_field[$coords[0]][$coords[1]] = $complete_field[$coords[0]][$coords[1]];
            $empty_fields--;


            if ($empty_fields == 0) {
                print "Congratulations, you won! \n";
                print_field(\@complete_field);
                return;
            }
        }
    }

    init_field;
    calculate_field;
    play_game;
```

Be careful out there folks, it can be a dangerous world. Tread lightly and carry a metal detector with you just to be sure.


## Blogs and Additional Submissions in Guest Languages for Task 2:

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/abigail/perl/ch-2.pl)

**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/abigail/awk/ch-2.awk), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/abigail/c/ch-2.c), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/abigail/lua/ch-2.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/abigail/node/ch-2.js)

**blog writeup:**
[Perl Weekly Challenge 126: Minesweeper Game](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-126-2.html)


[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/adam-russell/perl/ch-2.pl)

**additional languages:**
[Cxx](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/adam-russell/cxx/ch-2.cxx), [Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/adam-russell/prolog/ch-2.p)

**blog writeup:**
[Count Numbers / MineSweeper game: The Weekly Challenge 126 — Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2021/08/22)
<br>[Count Numbers / MineSweeper game: The Weekly Challenge 126 — Prolog — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2021/08/22)


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/polettix/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/polettix/raku/ch-2.raku)

**blog writeup:**
[PWC126 - Minesweeper Game - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/08/19/pwc126-minesweeper-game/)


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/james-smith/perl/ch-2.pl)

**blog writeup:**
[Perl Weekly Challenge #126](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-126/james-smith)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/laurent-rosenfeld/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/laurent-rosenfeld/raku/ch-2.raku)

**blog writeup:**
[Perl Weekly Challenge 126: Count Numbers and Minesweeper Game | laurent_r](http://blogs.perl.org/users/laurent_r/2021/08/perl-weekly-challenge-126-count-numbers-and-minesweeper-game.html)


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/roger-bell-west/perl/ch-2.pl)

**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/roger-bell-west/rust/ch-2.rs)

**blog writeup:**
[RogerBW's Blog: Perl Weekly Challenge 126: Count Sweeper](https://blog.firedrake.org/archive/2021/08/Perl_Weekly_Challenge_126__Count_Sweeper.html)

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/sgreen/perl/ch-2.pl)

**blog writeup:**
[Weekly Challenge 126](https://dev.to/simongreennet/weekly-challenge-126-19fg)


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/ulrich-rieke/perl/ch-2.pl)

**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/ulrich-rieke/cpp/ch-2.cpp), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/ulrich-rieke/raku/ch-2.raku)


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-126/wlmb/perl/ch-2.pl)

**blog writeup:**
[Perl Weekly Challenge 126 – W. Luis Mochán](https://wlmb.github.io/2021/08/20/PWC126/)



---

# BLOGS {#PWC126BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, I somehow continue to maintain my bearings. Oh, and tired this time. So—o—o—o—o very tired. I'm off to get a few short precious hours of sleep.  Looking forward to next wave, the perfect wave, I remain: *your humble servant*.**

# But if Your *THIRST* for *KNOWLEDGE* is <big>STILL</big> not *SLAKED*, {#PWC126BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *READ* these *BLOG* *LINKS*:

**( *don't think, trust your training, you're in the zone, just do it ...* )**


**Abigail**

 * [Perl Weekly Challenge 126: Count Numbers](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-126-1.html) ( *Perl* )
 * [Perl Weekly Challenge 126: Minesweeper Game](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-126-2.html) ( *Perl* )

**Adam Russell**

 * [Count Numbers / MineSweeper game: The Weekly Challenge 126 — Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2021/08/22) ( *Perl* )
 * [Count Numbers / MineSweeper game: The Weekly Challenge 126 — Prolog — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2021/08/22) ( *Perl* )

**Andinus**

 * [Challenge 126](https://andinus.tilde.institute/pwc/challenge-126/) ( *Raku* )
 * [Challenge 126](https://andinus.tilde.institute/pwc/challenge-126/) ( *Raku* )

**Arne Sommer**

 * [Count Minesweeper with Raku and Perl](https://raku-musings.com/count-minesweeper.html) ( *Perl & Raku* )

**Colin Crain**

 * [I Sweep For No One — Programming Excursions in Perl and Raku](https://colincrain.com/2021/08/22/i-sweep-for-no-one/) ( *Perl & Raku* )

**Dave Jacoby**

 * [That One Is Mine: The (Perl and JS) Weekly Challenge #126 | Committed to Memory](https://jacoby.github.io/2021/08/18/that-one-is-mine-the-perl-and-js-weekly-challenge-126.html) ( *Perl* )

**Flavio Poletti**

 * [PWC126 - Count Numbers - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/08/18/pwc126-count-numbers/) ( *Perl & Raku* )
 * [PWC126 - Minesweeper Game - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/08/19/pwc126-minesweeper-game/) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #126](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-126/james-smith) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 126: Count Numbers and Minesweeper Game | laurent_r](http://blogs.perl.org/users/laurent_r/2021/08/perl-weekly-challenge-126-count-numbers-and-minesweeper-game.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 126: counting mines! – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2021/08/16/PerlWeeklyChallenge126.html#task1) ( *Raku* )


**Roger Bell_West**

 * [RogerBW's Blog: Perl Weekly Challenge 126: Count Sweeper](https://blog.firedrake.org/archive/2021/08/Perl_Weekly_Challenge_126__Count_Sweeper.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 126](https://dev.to/simongreennet/weekly-challenge-126-19fg) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 126 – W. Luis Mochán](https://wlmb.github.io/2021/08/20/PWC126/) ( *Perl* )
