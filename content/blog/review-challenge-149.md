---
author:       Colin Crain
date:         2022-02-28T00:00:00
description:  "Colin Crain › Perl Weekly Review #149"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #149"
image:        images/blog/p5-review-challenge-149.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-148/).* )

Welcome to the Perl review pages for **Week 149** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

---

### ●︎ Why do we do these challenges?

I suppose any reasonable answer to that question would be from a field as wide ranging and varied as the people who choose to join the team. One thing, though, is clear: it's not a competition, and there are no judges, even if there is a "prize" of sorts. About that -- I think of it more as an honorarium periodically awarded to acknowledge the efforts we make towards this strange goal. So there's no determination to find the *fastest*, or the *shortest*, or even, in some abstract way, the *best* way to go about things, although I'm certain the participants have their own aspirations and personal drives. As Perl is such a wonderfully expressive language, this provides quite a bit of fodder to the core idea of TMTOWTDI, producing a gamut of varied techniques and solutions.

Even the tasks themselves are often open to a certain amount of discretionary interpretation. What we end up with is a situation where each participant is producing something in the manner they find the most interesting or satisfying. Some team members focus on carefully crafted complete applications, thoroughly vetting input data and handling every use case they can think up. Others choose to apply themselves to the logic of the underlying puzzle and making it work in the most elegant way they can. Some eschew modules they would ordinarily reach for, others embrace them, bringing to light wheels perhaps invented years ago that happen to exactly solve the problem in front of them today.

I've been considering this question for some time and have found one binding commonality between all of us out solving these challenges each week, in that however we normally live our lives, the task in front of us more than likely has nothing to do with any of that. And I think this has great value. We all do what we do, in the real world, and hopefully we do it well. The Weekly Challenge provides us with an opportunity to do something germane to that life yet distinctly different; if we only do the things we already know how to do then we will only do the same things over and over. This is where the "challenge" aspect comes into play.

So we can consider The Weekly Challenge as providing a problem space outside of our comfort zone, as far out from that comfort as we wish to take things. From those reaches we can gather and learn things, pick and choose and bring what we want back into our lives. Personally, I think that's what this whole thing is about. YMMV.

---

<i>Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due.</i>

And that's why I'm here, to try and figure out ways to do just that.

So, here we are then — let’s get to it and see what we can find.

---

### For Additional Context…

before we begin, you may wish to revisit either the pages for the [**original tasks**](/blog/perl-weekly-challenge-149/) or the summary [**recap**](/blog/recap-challenge-149/) of the challenge. But don't worry about it, the challenge text will be repeated and presented as we progress from task to task.

Oh, and one more thing before we get started:


### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please feel free to email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

<div align= center><strong>...So finally, without further ado...</strong></div>

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC149TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC149TASK2)   &nbsp;  &nbsp;  &nbsp;       •   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC149BLOGS)    &nbsp;  &nbsp;  &nbsp;       •


---

# TASK 1 {#PWC149TASK1}

# Fibonacci Digit Sum

*Submitted by: Roger Bell_West*

Given an input $N, generate the first $N numbers for which the sum of their digits is a Fibonacci number.

**Example**
```
    f(20)=[0, 1, 2, 3, 5, 8, 10, 11, 12, 14, 17, 20, 21, 23, 26, 30, 32, 35, 41, 44]

```


## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/abigail/perl/ch-1.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/alexander-pankoff/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/athanasius/perl/ch-1.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/bruce-gray/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/colin-crain/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/polettix/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/jo-37/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/lubos-kolouch/perl/ch-1_no_lib.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/mattneleigh/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/perlboy1967/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/pete-houston/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/peter-campbell-smith/perl/ch-1.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/robert-dicicco/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/sgreen/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/ulrich-rieke/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/wlmb/perl/ch-1.pl)

In this particular number-theoretical challenge, we are asked to do two things: sum the digits of a number and determine whether a given number falls somewhere in the Fibonacci sequence. The summing of the digits is familiar territory, and in previous challenges we have seen ways to accomplish this goal both mathematically, dividing down, and textually, by treating the number as a string of separate digits strung together.

The second portion of the puzzle, the ex post facto declaration that a given number is a Fibonacci number, seems more difficult. Because of the recursive definition this is non-obvious mathematically, although a closed-form test can be derived fron Binet's theorem.

Nobody actually did this, though. Maybe next time. For those interested, a number will be a Fibonacci number if and only if [either 5*n*² + 4 or 5*n*² - 4 is a perfect square](https://en.wikipedia.org/wiki/Fibonacci_number#Identification). As it was, a closer examination of the problem revealed there were very few Fibonacci numbers to be considered, and it was far easier to make a lookup table for reference.

There were 23 working submissions for the first task this past week.

## SUM up the PARTS, and CHECK the RESULT
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/pete-houston/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/mattneleigh/perl/ch-1.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/bruce-gray/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/lubos-kolouch/perl/ch-1_no_lib.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/laurent-rosenfeld/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/athanasius/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/colin-crain/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/mohammad-anwar/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/polettix/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/arne-sommer/perl/ch-1.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/alexander-pankoff/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/wlmb/perl/ch-1.pl)

At first glance the problem seem to be composed of two discrete halves that bore no relation to each other, and throughout the field of submissions there was general consensus that this was the case. If any connection was to be found, the facility of solving each half apart universally proved to be the easier path. So we end up with a collection of digit-summing methods coupled to a collection of Fibonacci-matching methods. There ended up being a lot of consistency in the methodology across the solutions provided.


[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/pete-houston/perl/ch-1.pl)

In no particular order, we'll open the discussion with Pete's solution. The problem, with making a lookup table of known values, is how large a table to make. Given that the by the common construction method arbitrary values are dependent on the existence of selected previous elements this unknown is put to the forefront.

Fortunately, given a complete list of Fibonacci numbers constructing the next element is fairly trivial. Add to this that the digit-sums in question will oscillate within a range but generally start small and gradually grow larger, and the solution is to simply look at the last Fibonacci number calculated, and it it is less than the number in question add members to the sequence until we have enough numbers to exceed the bound.

By importing the core module `List::Util` we gain access to `sum`, which makes the digit summation portion a single line. After that we expand a lookup table of Fibonacci numbers as required to envelop the target and we're good to go.

```perl
    use List::Util 'sum';

    my $n      = $ARGV[0] // 20;
    my @fib    = (0, 1);
    my %is_fib = (0 => 1, 1 => 1);
    my $i      = -1;
    my @found;

    die "Argument must be a natural number.\n" unless $n =~ /^[1-9][0-9]*$/;

    while (@found < $n) {
        # Sum the digits
        my $sum = sum split //, ++$i;

        while ($sum > $fib[-1]) {

            # Add an element to the Fibonacci list
            my $next = $fib[-2] + $fib[-1];
            push @fib, $next;

            # Pop it in the hash too
            $is_fib{$next} = 1;
        }
        push @found, $i if $is_fib{$sum};
    }
```

[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/mattneleigh/perl/ch-1.pl)

Pete sets up parallel data structures with an array to hold the Fibonacci sequence and a hash to provide a lookup for members of that sequence. When a number is added, it is added to both structures.

This is isn't strictly speaking necessary, as demonstrated by Matthew. When creating new members of the sequence, we don't need the complete history of the sequence to produce a value, only the two previous elements. Other than those two the rest of the array is superfluous, as it is the hash component that is actually used. As such if we just keep a running tab on those two values we can always create the next, which immediately becomes one of the two that are saved, and the other becomes previous which get shifted down into second place. The old second place is discarded from the queue.

```perl
    while(scalar(@fib_digit_sums) < $n){
        my $digit_sum = 0;

        # Add up all the digits in $i
        foreach(split('', $i)){
            $digit_sum += $_;
        }

        # See if we have a big enough Fibonacci
        # number yet...
        while($digit_sum >= $fib_b){
            # Calculate/store more until we do
            $fib_c = $fib_a + $fib_b;
            $fib_a = $fib_b;
            $fib_b = $fib_c;

            $fibs{$fib_b} = 1;
        }

        # See if the sum is a Fibonacci number
        if($fibs{$digit_sum}){
            # It is- store $i
            push(@fib_digit_sums, $i);
        }

        $i++;
    }
```

[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/bruce-gray/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/bruce-gray/c/ch-1.c), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/bruce-gray/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[TWC 149: Limited Fibs, and Bases of Unusual Size | Bruce Gray](http://blogs.perl.org/users/bruce_gray/2022/01/twc-149-limited-fibs-and-bases-of-unusual-size.html)

Well look at this. It appears that I was wrong earlier in something I said, albeit indirectly. Despite the preponderance of lookup tables among the solutions, not everyone used one. Enter Bruce, who brings us `Math::Fibonacci` with routines for, well, Fibonacci numbers. I mean, it is right there in the name, guys. In any case this provides a function, `is_fibonacci()`, which gives a simple up/down test for membership in the sequence.

But as for using a lookup table or not, that wasn't exactly what I said. I said that no one had used a mathematical method to test candidates. After installing `Math::Fibonacci`, of course I had to go look and see how the function in question actually worked:

```perl
    sub isfibonacci {
        my $a = shift;
        my $n = nearestint ((log10($a) + log10(sqrt(5)))/log10(g));
        return $a == term($n) ? $n : 0;
    }

    sub nearestint {
        my $v = shift;
        my $f = floor($v); my $c = ceil($v);
        ($v-$f) < ($c-$v) ? $f : $c;
    }
```

...which turns out to be a reworking of Binet's formula. So that's that. I could go and quietly edit my previous claim to: "Nobody directly did this" or such, but I'm going to let it stand, as testament that things may not always be as they first seem.

Or something like that, I don't know. It's really an excuse to list that cool little routine Bruce has roped into service.

As expected Bruce's final result is quite compact, without the Fibonacci overhead.


```perl
    use List::Util      qw<sum>;
    use Math::Fibonacci qw<isfibonacci>;

    my $count = abs( shift // 20 );

    my @out;
    for ( my $i = 0 ; $count ; ++$i ) {
        next unless isfibonacci( sum split '', $i );
        $count--;
        push @out, $i;
    }
```

[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/lubos-kolouch/perl/ch-1_no_lib.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/lubos-kolouch/python/ch-1.py)

additional version:
[without Fibonacci module](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/lubos-kolouch/perl/ch-1_no_lib.pl)


I stated above that I had just installed `Math::Fibonacci`. From this you can infer that I had not wandered across it before, which I had not. Which consequently implies that no one in the team had submitted a solution utilizing it, at least under my stewardship of the reviews, which turns out to be the case.

So with all of the times we have employed the Fibonacci sequence here at team PWC, fancy my surprise at finding it a second time in Lubos' submission. Have we really never asked to determine whether a number is of the Fibonacci tribe after the fact, and gone in search of a shibboleth?

I suppose not. How about that.

Well so be it. Here is Lubos' solution. A split, a sum and a check, with the valid results gathered to an array for output.

```perl
    use Math::Fibonacci qw/isfibonacci/;
    use List::Util qw/sum/;

    sub get_numbers {
        my $what  = shift;
        my $count = 0;
        my $pos   = 0;
        my @output;

        while($count < $what) {

            if (isfibonacci(sum(split //, $pos))) {
                push @output, $pos;
                $count++;
            }
            $pos++;
        }
        return \@output;
    }
```

He does, however, also provide us with a second, [more hand-crafted version of his solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/lubos-kolouch/perl/ch-1_no_lib.pl), using a lookup hash that adds more values as required:

```perl
    sub gen_more_fibs {
        my $limit = shift;

        while ($fibs[-1] < $limit) {
            my $new_fib =$fibs[-1] + $fibs[-2];
            push @fibs,  $new_fib;
            $fib_hash{$new_fib} = 1;
        }

    }
```


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/laurent-rosenfeld/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 149: Fibonacci Digit Sum and Largest Square | laurent_r](http://blogs.perl.org/users/laurent_r/2022/01/perl-weekly-challenge-149-fibonacci-digit-sum-and-largest-square.html)

Laurent just starts the search by producing 102 Fibonacci numbers and hashing them as keys for lookup. He notes this quantity of Fibonaccis may be quite large, but will ensure the solution will work for very large numbers. In fact the numbers are so large we get an integer overrun after F(94) but we'll never need these values anyway. But we'll get to that.

Sequence in hand, we make a hash of it, so to speak, and increment candidates looking for valid digit sums.

```perl
    my %fibo = map { $_ => 1 } @fib;

    while ($count_result < $max) {
        my $sum = 0;
        $sum += $_ for split //, $i;
        if (exists $fibo{$sum}) {
            push @numbers, $i;
            $count_result++;
        }
        $i++
    }
    say "@numbers";
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/athanasius/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/athanasius/raku/ch-1.raku)

The monk returns us to idea of having an on-demand lookup pool, expanded as required to encompass the largest value encountered. Because of the ordered nature of the sequence, with a given maximum value constructed we can be assured that all Fibonacci numbers less than that value have been encountered and indexed before it. So as long as the last Fibonacci created is larger than the candidate value, the lookup table is complete within that range.

Here the `is_fib()` function, containing a clause to increase the size of the constructed sequence should it be required. Each time the range is expanded, of course, that part of the sequence does not ever need to be constructed again.

```perl
    while ($max < $n)
    {
        for (1 .. $FIB_INC)
        {
            ($f2, $f1)  = ($f1, $f2 + $f1);

            $fib{ $f1 } = undef;
        }
        $max += $FIB_INC;
    }
    return exists $fib{ $n };
```

[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/colin-crain/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/colin-crain/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[When We Add Up Each Part of the Puzzle, They're All Lies - Programming Excursions in Perl and Raku](https://colincrain.com/2022/01/29/when-we-add-up-each-part-of-the-puzzle-theyre-all-lies)

Let's step back and take a moment to consider the digit summing portion of the problem, and how it relates to the sequence. We're only summing individual digits, so the highest value there is 9 for each place. Thus the highest digit-sum possible for an *n*-digit number is *n* × 9. This doesn't exactly grow very fast with respect to the values being summed, with the growth factor diminishing logarithmically. So lets pick a large number,  larger than we can realistically count up to sequentially by 1s. Let's say one trillion. That's a pretty big loop; some back-of-the-envelope figuring says it should take about 4 hours and change for me to count that high on this machine, just counting and not doing anything more.

So given the candidate 999,999,999,999 we get a digit sum of 9 × 12 = 108. F(11) is 89; F(12) = 144 and can never be reached. So we will need 11 Fibonacci numbers to count to 1,000,000,000,000. Or really these will do until we actually *reach* F(12), which will be with 16 × 9s, or 9,999,999,999,999,999 which is not reasonable at all to try and count to.

So, in the absence of some pretty Big Iron, we will only need 11 Fibonacci numbers to do all the validation checks that we will ever be *able* to do. It would make sense to hard-code them, but a lookup table with 11 entries takes nearly no time to construct either.

I opted, like many others, to dynamically expand the table as required. I also summed the digits using `substr` because it runs about twice as fast as `sum split //, $num`. The `substr` function really is remarkably quick.

```perl
    sub digisum ( $num ) {
        my $sum;
        $sum += substr $num, $_-1, 1 for (1..length $num);
        return $sum;
    }

    sub is_fib ( $num ) {
        state @fibs = ( 0, 1 );
        state %fhash = map { $_ => undef } @fibs;
        while ( $fibs[-1]+$fibs[-2] <= $num ) {
            my $next = $fibs[-1]+$fibs[-2];
            push @fibs, $next;
            $fhash{$next} = undef;
        }
        return 1 if exists $fhash{$num};
        return 0;
    }
```


[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/mohammad-anwar/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/mohammad-anwar/raku/ch-1.raku)

Mohammad makes a couple of variations in his take on the problem. In one, he isolates out the single-digit candidates as they are their own digit-sum. In the other, he uses `grep` directly on an array of Fibonacci numbers to search it.

As that array will always be quite short I imagine this to be quite efficient.

```perl
    while (@digit_sum < $count) {
        while ($fibonacci[-1] <= $index) {
            push @fibonacci, $fibonacci[-1] + $fibonacci[-2];
        }

        my $sum = 0;
        if ($index < 10) {
            $sum = $index;
        }
        else {
            $sum += $_ for (split //,$index);
        }

        if (grep /\b$sum\b/, @fibonacci) {
            push @digit_sum, $index;
        }

        $index++;
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC149 - Fibonacci Digit Sum - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/01/26/pwc149-fibonacci-digit-sum/)

Although internally the logic remains the same, Flavio's submission implements it in a novel manner: as a iterator that delivers the next Fibonacci digit-sum value for as long as we wish to call it. It accomplishes this by creating a routine with its own scope, that provides a closure with its own anonymous routine containing the necessary parts: summing digits, creating Fibonacci numbers and then comparing them. It all ends up very clean and contained — I like his style.

```perl
    use List::Util 'sum';

    my $it = fibonacci_summing();
    say $it->() for 1 .. (shift || 20);

    sub fibonacci_summing {
       my %fibo = (0 => 1);
       my $f = 0;
       my $s = -1;
       return sub {
          while ('necessary') {
             ++$s;
             my $sum = sum split m{}mxs, $s;
             ($f, $fibo{$fibo{$f}}) = ($fibo{$f}, $f + $fibo{$f})
                while $f < $sum;
             return $s if exists $fibo{$sum};
          }
       };
    }
```



[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/arne-sommer/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/arne-sommer/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Fibonacci Square with Raku and Perl](https://raku-musings.com/fibonacci-square.html)

With his approach, Arne chooses to forgo keeping a complete saved array of Fibonacci numbers, instead relying on a rotating cycle of values for the last two members of the sequence, stored in a pair of intermediate variables. As new values are added by summing these, the new value is places on the stack, the primary becomes the secondary, and the secondary is removed from play. In this way the stored values are always kept updated.
```perl
    sub is_fibonacci_sum ($number)
    {
      state %is_fibonacci = ( 0 => 1, 1 => 1 );
      state $limit = 1;
      state $fib_1 = 0;
      state $fib_2 = 1;

      my $sum = sum split(//, $number);

      say ": Considering number $number with sum $sum" if $verbose;

      return 1 if $is_fibonacci{$sum};

      while ($sum > $limit)
      {
        my $new   = $fib_1 + $fib_2;
        $fib_1    = $fib_2;
        $fib_2    = $new;
        $limit    = $new;

        say ": Caching Fibonacci number $limit" if $verbose;
        $is_fibonacci{$limit} = 1;
      }

      return $is_fibonacci{$sum};
    }
```

[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/alexander-pankoff/perl/ch-1.pl)

Here is another example of the same bucket-brigade technique implemented by Alexander:

```perl
    sub is_fib($x) {
        state $fibs = {
            0 => 1,
            1 => 1,

        };
        state $cur  = 1;
        state $prev = 0;

        while ( $x > $cur ) {
            my $next = next_fib( $cur, $prev );
            $prev = $cur;
            $cur  = $next;

            $fibs->{$next} = 1;
        }

        return $fibs->{$x};
    }
```

As the recurrence relation for the sequence only ever requires the previous two elements, if we keep those values updated we will always be able to create the next entry.

One small note is his use of `sum0`, over `sum`, both of which are made available in `List::Util`. Although both will work in this specific context — as the input to `digit_sum()` is controlled and will always contain at least one digit — in general `sum0` works the same as `sum` but with a failsafe: normally, should no list be present, or an empty list, `sum` will return `undef` and throw a warning. This is usually a good response to bad data. The alternative, `sum0`, will always return a real value of 0 in the absence of anything else. Sometimes you know an input may not provide any values, and you don't want that to take down the rest of the logic. The choice between one or the other largely falls to whether you want to catch the warning or not, or whether or not 0 and `undef` share the same meaning in the specific context required. In `sum0` we are actually introducing a value of nothing to the data set, either altering it or clarifying it depending on your definition. Theoretically it all goes back to the question of what 0 actually is, which can be a slippery idea indeed.

I love thinking about zero. Some of you all may have noticed that before.


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/wlmb/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 149 – W. Luis Mochán](https://wlmb.github.io/2022/01/24/PWC149/)

Finally Luis gives an interesting version of the techniques we've just seen using the Perl Data Language extensions.

One thing we've learned through Luis' (and Jorg's) various demonstrations over time is that the PDL — as a collection of scientific data-processing extensions — is not confined to specific use-cases, and can be applied in  many ways to provide a framework for general-purpose computing.

By reading the comments you can plainly see the same steps being taken as we've seen elsewhere: summing the digits, expanding a list of fibonacci numbers as required, and then the use of `any` to determine whether some data point in the Fibonacci vector generated matches the sum.

The PDL really is a marvel.


```perl
    use PDL;
    use PDL::NiceSlice;
    die "Usage: ./ch-1.pl N to obtain N numbers with Fibonacci digit sums\n" unless @ARGV;
    my $N=$ARGV[0];
    my $fibs=pdl(0,1); # first Fibonacci numbers
    my @solutions;
    my $try=0; # next number to try
    while(@solutions<$N){
        my $sum=pdl(split "", $try)->sumover; # sum of digits
        $fibs=append($fibs, $fibs(-1)+$fibs(-2)) while($sum>$fibs((-1))); # grow $fibs array as needed
        push @solutions, $try if any($sum-$fibs==0);
        ++$try;
    };
    say "f($N)=",pdl(@solutions);
```


## Blogs and Additional Submissions in Guest Languages for Task 1:


[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/abigail/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/abigail/awk/ch-1.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/abigail/bash/ch-1.sh), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/abigail/bc/ch-1.bc), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/abigail/c/ch-1.c), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/abigail/go/ch-1.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/abigail/java/ch-1.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/abigail/lua/ch-1.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/abigail/node/ch-1.js), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/abigail/pascal/ch-1.p), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/abigail/python/ch-1.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/abigail/r/ch-1.r), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/abigail/ruby/ch-1.rb), [Scheme](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/abigail/scheme/ch-1.scm), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/abigail/tcl/ch-1.tcl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 149: Fibonacci Digit Sum](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-149-1.html)


[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/dave-jacoby/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge #149 and A Fix, Maybe, to #148 | Committed to Memory](https://jacoby.github.io/2022/01/27/weekly-challenge-149-and-a-fix-maybe-to-148.html)


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/james-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #149](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-149/james-smith)


[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/robert-dicicco/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/robert-dicicco/ruby/ch-1.rb)


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/roger-bell-west/javascript/ch-1.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/roger-bell-west/kotlin/ch-1.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/roger-bell-west/lua/ch-1.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 149: Fibonacci Squares](https://blog.firedrake.org/archive/2022/01/The_Weekly_Challenge_149__Fibonacci_Squares.html)


[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/sgreen/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/sgreen/python/ch-1.py)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 149](https://dev.to/simongreennet/weekly-challenge-149-cln)


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/ulrich-rieke/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/ulrich-rieke/cpp/ch-1.cpp), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/ulrich-rieke/raku/ch-1.raku)


------------------------------------------





---

# TASK 2 {#PWC149TASK2}

# Largest Square
*Submitted by: Roger Bell_West*

Given a number base, derive the largest perfect square with no repeated digits and return it as a string.

(For base>10, use ‘A’..‘Z’.)

**Example:**
```
    f(2)="1"
    f(4)="3201"
    f(10)="9814072356"
    f(12)="B8750A649321"
```



## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/abigail/perl/ch-2.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/alexander-pankoff/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/arne-sommer/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/athanasius/perl/ch-2.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/bruce-gray/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/polettix/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/jo-37/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/laurent-rosenfeld/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/mattneleigh/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/perlboy1967/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/pete-houston/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/peter-campbell-smith/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/roger-bell-west/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/ulrich-rieke/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/wlmb/perl/ch-2a.pl)

Numbers, I often find myself repeating here, do not care how we describe them. We can write them out as numerals, or write words for their names in text; it makes no diference to what the numbers *mean*. We can also chose to write them in human-fingered base-10 or a digital base-2 and and mathematical results will remain the same. Two plus two will still equal four, no matter what we call it: 4, "four", "quatre" or 100.

In paralel reasoning, two *times* two also happens to equal four, and again no matter what representation we're using at the moment, that result stands. This particular association, however, has an additional quality: the relationship of a power of 2, or multiplying the number by itself. As this corresponds to the area of a square of a given side length, we call thse square numbers. The result of squaring a number, 4 in this case, is known as a perfect square.

Like any other number, a perfect square can be represented in many ways, but the essential nature of multiplication is indifferent to this choice. The property of being the result of squaring a root is just a special case of common multiplcation. It remains independant of and unchanged by the chosen representation.

The actual technical problem of computing the squares in a given, possibly unfamiliar base is left an open question.

Now on to the second constraint, the lack of repeated digits.

In every given base there exists a number, composed of all of the digits used in the base including 0, that represents the largest number that can be expreseed using those digits alone — where all available digits are in use, and the addition of any additional digit to make the number larger would require reusing one of those already employed. Discounting the possibility of leading zeros, any number containing more digits will be larger than every number with fewer. As such some number formed from all members of the available pool — all of the digits —  will be the largest that can be formed without repetition.

In any number, substituting a larger digit in any place within it yields a larger number. Thus in constructing a number by placing the largest number available into the largest place available, then the next-largest into the next-largest — until we run out of digits — we can obtain the largest number that can be constructed without duplicating digits in a given base. In base-10, for instance, this would be 9,876,543,210. In base-4, with only 4 digits, this would be 3210.

So to paraphrase the challenge goals: in a given base, we are looking for the largest number less than or equal to this value that is also a perfect square.

There were 21 submissions for the second task this past week.

## comparing SQUARES within the CIRCLE
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/jo-37/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/perlboy1967/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/roger-bell-west/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/peter-campbell-smith/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/ulrich-rieke/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/james-smith/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/duncan-c-white/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/dave-jacoby/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/cheok-yin-fung/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/e-choroba/perl/ch-2.pl), and
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/colin-crain/perl/ch-2.pl)

Much as I've just done above, there was much analysis on exactly how to proceed, as we look for solutions in progressively larger bases, with proportionally larger search spaces. The general method people landed on was to focus on numbers known to be squares, starting large and working downward. Eventually, it would stand to reason, a number satisfying the digit restriction would be found. However as the base size grows  the largest number capable of being expreseed grows along with it, so the search space expands factorially, or eventually faster than *k*<sup>*n*</sup> for all *k*, but slower than *n*<sup>*n*</sup>. Furthermore the numbers get large enough that somewhere around base-15 we run out of space in a 64-bit integer to hold our value, and so after this point some solutions that were otherwise sound had a tendency to not find the optimal solution. The time required to sift through candidates became a real problem, and adding the `bigint` pragma only compounded this. At some point the amount of processing because unworkable.

And you know, if we *really* wanted to actually use these numbers for some actual purpose, we could always go and look them up and copy them down.

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/jo-37/perl/ch-2.pl)

Jorg seems to have been briefly on hiatus, and we'll welcome him back by starting with his solution.

The technique is straightforward in principle: start at the maximum value, take the square root to find the largest square the fits, then search squares downward from there for the first one that satisfies the digit condition.

In practice, Jorg imports a variety of toys to play with, to make the processing smoother. The core logic is contained in just three lines.

The `Math::Prime::Util` function `fromdigits()`, joins an array to form a number in an optionally *specified base*. The digits themselves are given in base-10; the digit "A" in base-16, for instance, is expected as "10". Handy combo to have, that, doing the assembling and conversion in one stroke. The first line, the `for` loop, uses this to create the descending-digit maximal value for a given base, and takes the integer square root. It also establishes the downwards iteration.

The second line then squares the current candidate.

The third line, though, is where the real action lies. At the right edge, `todogits()` converts a number into an array of digits, with the base specified in the optional second argument. Then `frequency()` is applied, which returns a listified item-frequency hash of the counts of the digits. Note that this is a hash structure ultimately, so the ordering of the keys is unfixed. But that key-value pairings are what concern us here, and `pairvalues()` from `List::Util` will deliver us every-other element from the list, corresponding to the "value" component of the hash. Finally `max()` is used to find the highest value of this list of values, and if that turns out to be greater than 1 it signifies that some digit has been duplicated. Whew!

That's quite a line you've got there, Jorg.



```perl
    use List::AllUtils qw(frequency max pairvalues);
    use Math::Prime::Util qw(fromdigits todigits todigitstring);

    # Print the largest square in the requested base.
    say todigitstring(max_square($ARGV[0]), $ARGV[0]);


    ### Implementation

    # The maximum number having no repeated digits in a given base is the
    # number built from all digits in descending order.  Trying all perfect
    # squares down from this maximum.
    #
    # Returns an integer, not the requested string.
    sub max_square ($base) {
        for (my $r = int sqrt fromdigits [reverse 0 .. $base - 1], $base;; $r--) {
            my $k = $r ** 2;
            return $k if 1 == max pairvalues frequency todigits $k, $base;
        }
    }
```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/perlboy1967/perl/ch-2.pl)

Niels prepares for us a couple of helper functions: `convertBase10toBaseN($$)` and `convertBaseNtoBase10($$)`, to switch back and forth between bases. This allows us to do our squaring operation in decimal and then convert the results to examine the final expression.

The base-whatever number is split into an array and `duplicates()` from `List::MoreUtils` is used to make sure no digits are repeated. In scalar context, `duplicates()` returns the number of duplicated elements, so any non-zero result here is a failure.

```perl
    foreach my $base (2 .. 12) {
      my $iSqrt = sqrt convertBaseNtoBase10(join('', reverse @digits[0 .. $base-1]), $base);

      while ($iSqrt >= 1) {
        my $nSqr = convertBase10toBaseN($iSqrt * $iSqrt, $base);

        if (!duplicates(split//, $nSqr)) {
          say "f($base) = $nSqr";
          last;
        }

        $iSqrt--;
      }
    }
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/roger-bell-west/javascript/ch-2.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/roger-bell-west/kotlin/ch-2.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/roger-bell-west/lua/ch-2.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/roger-bell-west/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/roger-bell-west/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 149: Fibonacci Squares](https://blog.firedrake.org/archive/2022/01/The_Weekly_Challenge_149__Fibonacci_Squares.html)

Roger is able to eliminate a certain amount of inessental cruft, by staving off his base translations until the last minute.

As noted in [his writeup](https://blog.firedrake.org/archive/2022/01/The_Weekly_Challenge_149__Fibonacci_Squares.html):

>I could convert the whole number to its in-base representation and then check it, but it's quicker to do it step by step, because then I can avoid all the divs and mods that aren't needed if a candidate has already been rejected.

The elimination of this extra processing does provide a nice speed-up. Make note, we'll see this again later.

```perl
    for (my $i=$base-1;$i >= 0; $i--) {
      $max *= $base;
      $max += $i;
    }
    my $t=int(sqrt($max));
    my @digits=('0'..'9','A'..'Z');
    while (1) {
      my $s=$t*$t;
      my $v=1;
      my @c=(0) x $base;
      my @dg;
      while ($s > 0) {
        my $d=$s % $base;
        $c[$d]++;
        if ($c[$d] > 1) {
          $v=0;
          last;
        }
        $s = int($s/$base);
        unshift @dg,$digits[$d];
      }
      if ($v) {
        return join('',@dg);
      }
      $t--;
    }
```

[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/peter-campbell-smith/perl/ch-2.pl)

Peter gives us a well-commented algorithm, starting with constructing the maximum number in decimal, multiplying out the positional step, to avoid having to translate it. A routine is required to convert newly minted perfect square candidates back into their proper base; this is done in `basify()`. [In a side note: to "e" or not to "e"? You know, I just wrote out the word "memeify" a few hours ago and ended up putting that second "e" back in there, to keep the vowel long. I'm not even entirely sure what the rule is here, if there even is one. It's a wild and fun place out there when you're just making up words. You go, Peter.]

After translation to the proper base, a second function is applied, to test whether its digits are unique. A hash if made, and a regular expression is used to match a digit. Using the `/g` switch the process is performed globally, so we end up with a list of successive digits placed into `$1`. Each is checked against the hash and we short-circuit out if it's found, otherwise we add it as a key and keep going.

```perl
    sub basify {   # ($integer, $base)

        my ($base, $digit, $digits, $integer, $result);

        # converts $integer to 123AB representation in base $base

        ($integer, $base) = @_;
        $digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $result = '';

        # strip digits 1 at a time
        while ($integer) {
            $digit = $integer % $base;
            $integer = ($integer - $digit) / $base;
            $result = substr($digits, $digit, 1) . $result;
        }
        return $result;
    }

    sub no_repeats {   # ($string)

        my ($string, %seen);
        $string = $_[0];

        while ($string =~ m|(.)|g) {
            return 0 if $seen{$1};
            $seen{$1} = 1;
        }
        return 1;
    }
```

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/ulrich-rieke/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/ulrich-rieke/cpp/ch-2.cpp)

Not every solution started with squares — Ulrich uses `Algorithm::Combinatorics` for its `permutations()` routine, and comes up with a constructive methods to rearrange the possible digits into new candidate numbers and then test for squareness.

This is a pretty good method for the smaller bases, and I spent some time exploring this option myself. The factorial growth of the search space really starts to blow up after base-10, though. The other problem, less obvious, is that there is no guarentee the optimal solution will contain all available digits. The directive, after all, only asks for the largest number without repeating values. There's nothing to say we need to use them all.

As it turns out the solution for base-5 is 4301, which does not contain a 2. Using `variations()`, which gives you *n***P***k*, the permutations of *n* elements in *k*-sized subsets would manage this with a decrementing counter.

Maybe.

Or something like that.

I didn't do this myself either, because I never noticed the aberations at 5 and 13 before I moved on to my other solution.

It's a neat idea though. We did see some other versions of this.

```perl
    use Algorithm::Combinatorics qw ( permutations ) ;
    use Math::BigInt ;
    use Math::BigFloat ;

    sub isPerfectSquare {
      my $number = shift ;
      my $floater = Math::BigFloat->new( "$number" ) ;
      $floater->bsqrt( ) ;
      return ( $floater->is_int( ) ) ;
    }

    my $N = $ARGV[0] // 12 ;
    my @bases = ('0' .. '9') ;
    push @bases , ('A' .. 'Z') ;
    my @possibleDigits = @bases[0 .. $N - 1] ;
    my @reversed = reverse @possibleDigits ;
    my $iter = permutations( \@reversed ) ;
    while ( my $c = $iter->next ) {
      my $num = join( '' , @$c ) ;
      my $toBase10 = Math::BigInt->from_base( $num , $N ) ;
      if ( isPerfectSquare( $toBase10 ) ) {
          say $num ;
          exit( 0 ) ;
      }
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/james-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #149](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-149/james-smith)

The massive number-crunching requirements to examine millions, if not billions, of candidates is the kind of stuff that must creep into James' dreams, as he consistantly does not run from but rather towards the fight.

With a unflappable determination he sets one leg back and uses that little beckoning wave with his outstretched hand, silently mouthing the words: "You want some?"

```
    --------------------------------------------------------------------------------
    |  N | v         | v^2                | v^2 (base N)    | Time      | Evals    |
    | -: | --------: | -----------------: | --------------: | --------: | -------: |
    |  2 |         1 |                  1 |               1 |  0.000039 |        1 |
    |  3 |         1 |                  1 |               1 |  0.000006 |        4 |
    |  4 |        15 |                225 |            3201 |  0.000005 |        1 |
    |  5 |        24 |                576 |            4301 |  0.000054 |       31 |
    |  6 |       195 |              38025 |          452013 |  0.000017 |       17 |
    |  7 |       867 |             751689 |         6250341 |  0.000026 |       28 |
    |  8 |      3213 |           10323369 |        47302651 |  0.000657 |      841 |
    |  9 |     18858 |          355624164 |       823146570 |  0.000621 |      671 |
    | 10 |     99066 |         9814072356 |      9814072356 |  0.000308 |      315 |
    | 11 |    528905 |       279740499025 |     A8701245369 |  0.002599 |     2564 |
    | 12 |   2950717 |      8706730814089 |    B8750A649321 |  0.024147 |    22903 |
    | 13 |   4809627 |     23132511879129 |    CBA504216873 | 14.560957 | 12533147 |
    | 14 | 105011842 |  11027486960232964 |  DC71B30685A924 |  0.108696 |    89326 |
    | 15 | 659854601 | 435408094460869201 | EDAC93B24658701 |  0.240459 |   190654 |
```

To save computation James performs his dividing down and digit searching simultaniously, opting out at the first repetion found. In this his method shares certain similarities with Roger's.

```perl
    sub biggest_perfect_square {
      my $nt = my $m = (my $n = shift) -1;
      $m=$m*$n+$nt while $nt--;
      O: for( my $tn = my $t = int sqrt $m; $t; $t -- ) {
        my ($q,%seen) = $t**2;
        $seen{$q%$n}++?(next O):($q=int($q/$n)) while $q;
        return($t,$tn-$t+1);
      }
    }
```

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/duncan-c-white/perl/ch-2.pl)

additional module: [perms.pm](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/duncan-c-white/perl/Perms.pm)

Duncan brings in his own permutations generator, to try rearranging the digits himself into candidates and then determining whether these are squares. Needless to say the same problems with this approach we discussed earlier hold true again here.

He acknowledges the algorithm slows down after base-8, which is to be expected. A peek inside his module, [perms.pm](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/duncan-c-white/perl/Perms.pm), reveals what appears to be an implementation of Knuth's Algorithm L, which provides a lexicographic permutation set, so by starting with the available digits in descending order the first solution found will be the highest.

```perl
    do {
        say "perm=$perm, maxvalsofar=$maxval, maxpermsofar=$maxperm" if $debug;
        my $v = base_value($perm,$base);
        if( is_perfect_square($v) )
        {
            say "perm $perm (value $v) is a perfect square" if $debug;
            if( $v>$maxval )
            {
                say "new max val $v, perm $perm" if $debug;
                $maxval = $v;
                $maxperm = $perm;
            }
        }
        $perm = Perms::next_perm($perm);
    } while defined $perm;
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/dave-jacoby/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge #149 Task 2: The Terror of the Largest Square | Committed to Memory](https://jacoby.github.io/2022/01/27/weekly-challenge-149-task-2-the-terror-of-the-largest-square.html)


Dave brings in the resources of `Math::BaseCalc` to do his translations, which is one I'm not seen before. Obviously, though, if it lives up to its name we're going to be ok.

And in this, after a quick installation, it seems to handle itself just fine. Although the unusual failure mode above base-15 seems to suggest it really doesn't like being given giant floats. Or something like that, out on the hairy fringes of what can and cannot be represented.

```perl
    OUTER: for my $base ( 2 .. 16 ) {
        my $t      = $base - 1;
        my @digits = map { $range[$_] } ( 0 .. $t );
        my $digits = join '', @digits;
        my $max    = join '', reverse @digits;
        my $n      = convert_from( $max, $digits );
        my $sn     = int sqrt $n;
        while ( $sn > 0 ) {
            my $n   = $sn**2;
            my $x   = convert_to( $n, $digits );
            my $has = has_dupes($x);
            if ( !$has ) {
                say qq{f($base) = "$x"};
                next OUTER ;
            }
            $sn--;
        }
    }

    {
        state $base = {};

        sub convert_from ( $number, $digits ) {
            state $table_from = {};
            my @digits = split //, $digits;
            if ( !defined $base->{$digits} ) {
                $base->{$digits} = Math::BaseCalc->new( digits => [@digits] );
            }
            if ( !$table_from->{$digits}{$number} ) {
                my $from = $base->{$digits}->from_base($number);
                $table_from->{$digits}{$number} = $from;
            }
            return $table_from->{$digits}{$number};
        }

        sub convert_to ( $number, $digits ) {
            state $table_to = {};
            my @digits = split //, $digits;
            if ( !defined $base->{$digits} ) {
                $base->{$digits} = Math::BaseCalc->new( digits => [@digits] );
            }
            if ( !$table_to->{$digits}{$number} ) {
                my $to = $base->{$digits}->to_base($number);
                $table_to->{$digits}{$number} = $to;
            }
            return $table_to->{$digits}{$number};
        }
    }
```


[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/cheok-yin-fung/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[CY's Take on The Weekly Challenge #149 ](https://E7-87-83.github.io/coding/challenge_149.html)

Anticipating some very large numbers, CY brings to bear the arbitrary-precision strengths of the `BigInt` module to handle the load. This is all well and good, as we have seen earlier how somewhere north of base-15 we run out of integer in Perl.

To expand on this, Perl, when given something that looks like a number, or more accurately when Perl is asked to *use* something as a number, it starts by placing it into an signed int datatype. As long as we don't ask for a decimal place this is allowed to grow until the type overflows, at which point if our value is positive it tries an unsigned int for a while, to get a little more room. If this overflows, however, we are automatically redirected to a float double with a 53-bit mantissa. It should be clear that some precision will be lost in the transition to floating-point storage, and that's not going to work for our task as every digit value counts.

As a matter of fact, I'm a little surprised that the algorithm can find any solutions at all after venturing into the land of floats, optimal or not, but that's another story. I would really like to know what is it about FEB6795D4C32A801 that makes it a solution to base-16 that can be found, versus the higher, correct value FED5B39A42706C81.

But I digress.

I have always found the object interface to the `BigInt` module hard to scan, so to speak. Inline operators are replaced with methods, so we have constructions like

`$x->badd( $y )`

to add two values. "badd", I assume, stands for BigInt addition.

On the other hand the methods are not just simple operations, but an entire fully-featured linked math library, so if pay the price of addition being more obtuse, we also get methods like `$x->to_base( $y )` out of the box, so, like most of life, there's a tradeoff of ease and difficulty.

Consequently CY's math is a little difficult to follow, but only because of the notation.

With the use of a legend, you can see the underlying logic follow the same decreasing-squares pattern we have seen previously.

 * `$x->bdec();             # decrement $x by 1`
 * `$x->bsub($y);           # subtraction (subtract $y from $x)`
 * `$x->bpow($y);           # power of arguments (x ** y)`
 * `$x->to_base($b);        # as string in any base`

 Here's her solution:

```perl
    use Math::BigInt;
    use List::Util qw/uniq/;

    sub find_sq {

        my $N = $_[0];
        my $upper_sqrt = Math::BigInt->new($N)->bpow( int(($N+1)/2) );
        my $sq = Math::BigInt->new($upper_sqrt)->bpow(2);

        my $bool = undef;

        do {
            $upper_sqrt->bdec();
            $sq->bsub($upper_sqrt)->bsub($upper_sqrt)->bdec();
            my $sq_baseN = $sq->to_base($N);
            my @arr = split "", $sq_baseN;
            my $uniq_num = uniq @arr;
            $bool = 1 if scalar @arr == $uniq_num;
        } while (!$bool);

        say "in decimal base: ", $sq;
        say "in base-N: ", $sq->to_base($N);

        return $sq;
    }
```


[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/e-choroba/perl/ch-2.pl)

Choroba brings a couple of interesting developments in his play towards a compact and efficient solution. In one, he offloads the base conversion onto a module: `Math::Base::Convert`, which supplies a `cnv()` routine. Although a pure Perl implementation, it advertises itself as "very fast base to base conversion". Ok then.

Secondly he uses the power of the regular expression engine to try and match duplicate digits, a scheme we haven't seen elsewhere. In the expression we match a captured character, any number of any other characters, followed by the captured character again. On failure the engine will avoid an infinite loop by moving to the next initial capture and try again, in this way working across the digits in the number.

I'm suspicious of a regular expression actually being faster here, but it does have a certain panache to it, and I love using the RE engine this way.

It's novel. It's different. I like it.

```perl
    use Math::Base::Convert qw{ cnv };

    my @digits36 = (0 .. 9, 'A' .. 'Z');
    sub largest_square {
        my ($base) = @_;
        die "Base can't be more than 36.\n" if $base > 36;
        my $chars = [@digits36[0 .. $base - 1]];
        my $start = join "", reverse @$chars;
        my $n = int sqrt cnv($start, $chars, 10);

        while ($n) {
            my $square = $bc->cnv($n * $n);

            --$n, next if $square =~ /(.).*\1/;

            return $square
        }
    }
```

[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/colin-crain/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/colin-crain/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[That Big Ol' Square'll be Just Perfect - Programming Excursions in Perl and Raku](https://colincrain.com/2022/01/30/that-big-ol-squarell-be-just-perfect)

Finally, for my own submission I performed the task two ways: by decrementing perfect squares and by building up candidates from their digital components.

Just by applying a mathematical analysis it was clear that the search space for assessing known squares was going to be smaller, but I followed through with the constructive approach anyway, to see how it went.

For the decrementing solution I started with an assortment of helper functions to convert back and forth between bases and check for repeating digits, but after getting everything to work I ended up inlining much of that, to avoid the overhead of millions of function calls. Note in the middle of the `MAX` loop we divide down our candidate destructively to avoid copying it, and then at the first sight of a duplicated digit nope the... frick out of there.

Now there's an expression I never expected to use here. I may be getting carried away.

*Deep breaths. In over 4; hold 6; out 2; repeat three times.*

That's better.

Where were we? Ahh, optimizing. Combining the base-conversion and hashing steps sped things up quite a bit. After base-15, though, unfortunately I began to lose necessary precision, and found `bigint` to be crippling to the billions of processing steps required, so that's where we ended up.


```perl
    ## from the square root of the largest base-digit number
    ## square and check for repeating digits pass/fail
    sub decrements  ( $base ) {
        my @alpha   = ( 0..9, "A".."Z" );
        my $maxbase = join '', reverse @alpha[0..$base-1];
        my $max     = int sqrt(base2dec( $maxbase, $base));
        say "decrementing from $max";

        my %h;
        MAX: while ($max--) {
            %h = ();
            ## inlined convert square to base and detect repeats code
            my $num = $max * $max;
            while ( $num > 0  ) {
                ++$h{$num % $base} > 1 and next MAX ;
                $num = int( $num/$base );
            }

            ## print result found
            say "found $max squared is: ", $max * $max;
            my $bout   = dec2base( $max, $base );
            my $bsqout = dec2base( $max * $max, $base );
            say "in base $base: $bout squared is $bsqout";
            last;
        }
    }
```

Also included is a constructive solution, or at least most of one. As noted earlier, the only way to properly search is to expand the search space to allow for permutations of subsets of the digits, all the way, if required, down to 1, which will always work.

I abandoned the effort before implementing this. Things were blowing up pretty spectacularly already, and such a step would only expand the search space by an *additional* factorial coefficient to allow for the variations.

Inserting something like:

```perl
    use Algorithm::Combinatorics qw( variations );
    my $len = @arr;
    OUTER: while ($len) {
        my $iter = variations( \@arr, $len );
        while (my $p = $iter->next) {
            $dec = perm2dec( $p, $base );
            my $sq = int sqrt $dec;
            last OUTER if $sq * $sq == $dec;
        }

    }
```

should work.

It doesn't, mind you, because the variation sets aren't produced in the correct descending order, so we no longer find the optimal solution when we go over into the variations. But you get the idea, I hope. I really don't feel like making the variations manually today. I've got a deadline to meet.

```perl
    sub constructive ( $base ) {
        use Algorithm::Combinatorics qw( permutations );

        my @arr = reverse (0..$base-1);
        my $iter = permutations( \@arr );
        my $c;
        my $dec;
        say "permuting @arr";

        while (my $p = $iter->next) {
            $dec = perm2dec( $p, $base );
            my $sq = int sqrt $dec;
            last if $sq * $sq == $dec;
        }

        say "constructive:";
        say "found $dec" ;
        my $bout = dec2base( $dec, $base );
        say "in base $base: $bout";
    }

    sub perm2dec ( $arr, $base ) {
        my $out;
        my $pos = 0;
        for ( reverse $arr->@* ) {
            $out += $_ * $base ** $pos++;
        }
        return $out;
    }
```



## Blogs and Additional Submissions in Guest Languages for Task 2:

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/abigail/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/abigail/awk/ch-2.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/abigail/bash/ch-2.sh), [Basic](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/abigail/basic/ch-2.bas), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/abigail/bc/ch-2.bc), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/abigail/c/ch-2.c), [Data](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/abigail/data/a287298.awk), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/abigail/go/ch-2.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/abigail/java/ch-2.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/abigail/lua/ch-2.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/abigail/node/ch-2.js), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/abigail/pascal/ch-2.p), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/abigail/python/ch-2.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/abigail/r/ch-2.r), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/abigail/ruby/ch-2.rb), [Scheme](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/abigail/scheme/ch-2.scm), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/abigail/tcl/ch-2.tcl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 149: Largest Square](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-149-2.html)


[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/arne-sommer/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/arne-sommer/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Fibonacci Square with Raku and Perl](https://raku-musings.com/fibonacci-square.html)


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/athanasius/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/athanasius/raku/ch-2.raku)


[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/bruce-gray/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/bruce-gray/c/ch-2.c), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/bruce-gray/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[TWC 149: Limited Fibs, and Bases of Unusual Size | Bruce Gray](http://blogs.perl.org/users/bruce_gray/2022/01/twc-149-limited-fibs-and-bases-of-unusual-size.html)


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC149 - Largest Square - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/01/27/pwc149-largest-square/)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/laurent-rosenfeld/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/laurent-rosenfeld/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 149: Fibonacci Digit Sum and Largest Square | laurent_r](http://blogs.perl.org/users/laurent_r/2022/01/perl-weekly-challenge-149-fibonacci-digit-sum-and-largest-square.html)


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/wlmb/perl/ch-2a.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 149 – W. Luis Mochán](https://wlmb.github.io/2022/01/24/PWC149/)

alternate solution: [permutations]([ch-2a.pl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-149/wlmb/perl/ch-2a.pl)
)


------------------------------------------





---



<center>
<h1 id="PWC149BLOGS">_________ THE BLOG PAGES _________</h1>
</center>


---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, by some miracle I somehow continue to maintain my bearings.**

**Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# If Your Unquenchable *THIRST* for *KNOWLEDGE* is not *SLAKED*,
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *FOLLOW* these *BLOG* *LINKS*:

**( ...*don't think, trust your training, you're in the zone, just do it ...* )**


**Abigail**

 * [Perl Weekly Challenge 149: Fibonacci Digit Sum](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-149-1.html) ( *Perl* )
 * [Perl Weekly Challenge 149: Largest Square](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-149-2.html) ( *Perl* )

**Arne Sommer**

 * [Fibonacci Square with Raku and Perl](https://raku-musings.com/fibonacci-square.html) ( *Perl & Raku* )

**Bruce Gray**

 * [TWC 149: Limited Fibs, and Bases of Unusual Size | Bruce Gray](http://blogs.perl.org/users/bruce_gray/2022/01/twc-149-limited-fibs-and-bases-of-unusual-size.html) ( *Perl & Raku* )

**Cheok-Yin Fung**

 * [CY's Take on The Weekly Challenge #149 ](https://E7-87-83.github.io/coding/challenge_149.html) ( *Perl* )

**Colin Crain**

 * [When We Add Up Each Part of the Puzzle, They're All Lies - Programming Excursions in Perl and Raku](https://colincrain.com/2022/01/29/when-we-add-up-each-part-of-the-puzzle-theyre-all-lies) ( *Perl & Raku* )
 * [That Big Ol' Square'll be Just Perfect - Programming Excursions in Perl and Raku](https://colincrain.com/2022/01/30/that-big-ol-squarell-be-just-perfect) ( *Perl & Raku* )

**Dave Jacoby**

 * [Weekly Challenge #149 and A Fix, Maybe, to #148 | Committed to Memory](https://jacoby.github.io/2022/01/27/weekly-challenge-149-and-a-fix-maybe-to-148.html) ( *Perl* )
 * [Weekly Challenge #149 Task 2: The Terror of the Largest Square | Committed to Memory](https://jacoby.github.io/2022/01/27/weekly-challenge-149-task-2-the-terror-of-the-largest-square.html) ( *Perl* )

**Flavio Poletti**

 * [PWC149 - Fibonacci Digit Sum - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/01/26/pwc149-fibonacci-digit-sum/) ( *Perl & Raku* )
 * [PWC149 - Largest Square - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/01/27/pwc149-largest-square/) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #149](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-149/james-smith) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 149: Fibonacci Digit Sum and Largest Square | laurent_r](http://blogs.perl.org/users/laurent_r/2022/01/perl-weekly-challenge-149-fibonacci-digit-sum-and-largest-square.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 149: Fibonacci & squares – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/01/24/PerlWeeklyChallenge149.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 149: Fibonacci & squares – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/01/24/PerlWeeklyChallenge149.html#task2) ( *Raku* )

**Roger Bell_West**

 * [RogerBW's Blog: The Weekly Challenge 149: Fibonacci Squares](https://blog.firedrake.org/archive/2022/01/The_Weekly_Challenge_149__Fibonacci_Squares.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 149](https://dev.to/simongreennet/weekly-challenge-149-cln) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 149 – W. Luis Mochán](https://wlmb.github.io/2022/01/24/PWC149/) ( *Perl* )
