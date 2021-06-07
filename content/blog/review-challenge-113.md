---
author:       Colin Crain
date:         2021-06-07T00:00:00
description:  "Colin Crain › Perl Weekly Review #113"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #113"
image:        images/blog/p5-review-challenge-113.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-112/).* )

Welcome to the Perl review for **Week 113** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-113/) or the summary [**recap**](/blog/recap-challenge-113/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC113TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC113TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC113BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC113TASK1}

# Represent Integer
*Submitted by: Mohammad S Anwar*<br>
You are given a positive integer $N and a digit $D.

Write a script to check if $N can be represented as a sum of positive integers having $D at least once. If check passes print 1 otherwise 0.

**Example**

```
    Input: $N = 25, $D = 7
    Output: 0
```

As there are 2 numbers between 1 and 25 having the digit 7 i.e. 7 and 17. If we add up both we don't get 25.

```
    Input: $N = 24, $D = 7
    Output: 1
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/abigail/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/adam-russell/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/arne-sommer/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/cheok-yin-fung/perl/ch-1.pl),
[**Christian Jaeger**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/christian-jaeger/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/colin-crain/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/dave-jacoby/perl/ch-1.pl),
[**David Schwartz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/dms061/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/jo-37/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/perlboy1967/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/pete-houston/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/sgreen/perl/ch-1.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/stuart-little/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/ulrich-rieke/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/wlmb/perl/ch-1.pl)


There were 21 submissions for the first task this past week. Right off the bat, the first question that struck me doing the overview was: "What question are they answering?" Some times this was clear, others decidedly less so. If there's one thing that *has* become clear to me on these review pages, it's that given any ambiguity in a text, given enough people and enough time every possible position will eventually be witnessed. It's just a given to me now.

When the dust settled, however, three main, largely incompatible interpretations emerged from the chaos. These were whether the number could be considered a sum of *every* smaller integer containing the given digit, or alternately the sum of *some unique combination* of individual elements from the list of valid smaller numbers, or more broadly some combination of *any of the valid numbers repeated any number of times*. The first approach requires all of the valid numbers to be used once; the second any subset of the numbers; the third any combination allowing repetition. Each interpretation led to its own set of wildly different strategies and algorithms.


## use ALL THE NUMBERS
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/adam-russell/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/duncan-c-white/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/jaldhar-h-vyas/perl/ch-1.pl), and
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/perlboy1967/perl/ch-1.pl)

To see whether a number qualifies under this criteria, we need only determine the list of numbers smaller than the target that contain the selected digit and sum them. If they sum to the target number we have a winner.

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/dave-jacoby/perl/ch-1.pl)

Dave will start us off with an example. As you can see, this interpretation allows a very compact solution.

```perl
    sub represent_int ( $n, $d ) {
        my $s = 0;
        for my $i ( 1 .. $n ) {
            $s += $i if $i =~ /$d/;
        }
        return $n == $s ? 1 : 0;
    }
```

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/duncan-c-white/perl/ch-1.pl)

Duncan takes the simplification one step further, hardwiring the digit selection into the program as `7`. On the other hand, he takes this choice as an opportunity to call his short script `lucky7`, of which I thoroughly approve.

```perl
    die "Usage: lucky7 N D\n" unless @ARGV==2;

    my $total = sum( grep { /7/ } 1..$n );
    my $correct = ($total == $n) ? 1 : 0;
```

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/adam-russell/perl/ch-1.pl)

**additional languages:**
[Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/adam-russell/prolog/ch-1.p)

As you can see there isn't a lot of room in this type of solution for variation, but Adam still did his best. He makes a creative decision to restrict his toolset, disallowing regular expressions to match out the digit, substituting instead a pair of `grep` statements and an equality . He also uses `unpack` to perform his sums, after first using `pack` to shove them into 8-bit character octets. Note the size limitation, though, so if for some reason you wanted to employ this technique in a more general-purpose manner something like an unsigned integer `i*` type would probably be a better choice. Read all about in the [Perl pack tutorial](https://perldoc.perl.org/perlpacktut).

```perl
    sub is_represented{
        my($n, $d) = @_;
        my @contains = grep { grep { $_ == $d } split(//) } (1 .. $n);
        return $n == unpack("%32C*", pack("C*",  @contains));
    }
```

## use any subset
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/arne-sommer/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/james-smith/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/roger-bell-west/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/ulrich-rieke/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/wlmb/perl/ch-1.pl)

To consider the possibilities for combining elements from the list of valid digit numbers, we can consider those numbers as a set, and select various subsets of all sizes. As a set, each element is unique and is either present or not. Thus there are at most 2<sup>*m*</sup> subsets to search, with *m* being the number of members of the set of possible summands containing the selected digit.

Another way to look at this is all combinations of *k* elements considered for the range *k* = 1 to *m*. The limit to the number of summands is of course all of those available. Several solutions brought in a combinatorics module to provide the combinations.

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/arne-sommer/perl/ch-1.pl)

**additional languages:**
[Misc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/arne-sommer/misc/tree1.dot), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/arne-sommer/raku/ch-1.raku)

As you may have noticed, `grep` was the go-to tool to obtain a list of numbers smaller than the target composed with at least one instance of the given digit. After filtering to find his list of numbers, Arne uses `Algorithm::Combinatorics` to produce all combinations from this list of lengths from 1 to all of them. Summing the combinations as we go, if we find a match we can report and exit immediately.

```perl
    use Algorithm::Combinatorics 'combinations';
    my @candidates = grep { /$D/ } (1 .. $N);
    for my $size (1 .. @candidates)
    {
      for my $comb (combinations(\@candidates, $size))
      {
        say ": Considering " . join(' + ', @$comb) if $verbose;

        if (sum(@$comb) == $N)
        {
          say 1;
          exit;
        }
      }
    }
    say 0;
```


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/roger-bell-west/perl/ch-1.pl)

**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/roger-bell-west/rust/ch-1.rs)

One artful way to generate 2<sup>*n*</sup>-1 total combinations from an array of *n* elements is to create a list of numbers and examine their binary bits, with each bit mapped to a specific member in the set. If a bit is set, we include that element from the list of all valid digit-numbers in the sum.

Here Roger uses bitshifting to generate his powers of 2:

```perl
    sub ri {
        my ( $n, $d )=@_;
        my @e = grep /$d/, ( 1..$n );
        foreach my $i ( 1..( 1<<( scalar @e ) )-1 ) {
            my $s = 0;
            foreach my $ii ( 0..$#e ) {
                if ( 1<<$ii & $i ) {
                    $s += $e[$ii];
                }
            }
            if ( $s == $n ) {
                return 1;
            }
        }
        return 0;
    }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/wlmb/perl/ch-1.pl)

As mentioned before, every element in the set of valid number options is either present or not. By assigning each number to a bit position, we can use a list of binary numbers to represent the various distinct subsets.

[Luis explores three ways](https://wlmb.github.io/2021/05/22/PWC113/) along an increasingly optimized path to find his solution. In the first method he sets up a binary bitmask, much like Roger did, but found it excessively slow. Optimizing, he came up with a recursive algorithm that bails out when the sum goes past the target, limiting whole chains of possibilities from ever being evaluated.

[The third solution](https://github.com/wlmb/perlweeklychallenge-club/blob/master/challenge-113/wlmb/perl/ch-1b.pl) improves the recursion by noticing that any target larger than 10 • *d* can be be constructed from some number 10 • *d* + *k*, which will contain *d*, and some number that contains *d* in the ones place. If that proves to be that case, the solution short-circuits without further evaluation.

```perl

    say( "Inputs: N = $N D = $D: Output: 1 as $N>=", $D * 10 ), exit if $N >= $D * 10;
    my @set = reverse grep { m / $D/ } ( 1..$N ); # ordered set from large to small.
    my @answer = find( $N, @set );
    say( "Inputs: N = $N D = $D: Output: ",
            @answer? "1 as $N = ". join( "+", @answer ):"0" );


    sub find {
        my ( $goal, @set )=@_;
        while( defined ( my $current = shift @set ) ){
            next if $current > $goal;
            return ( $current ) if $current == $goal;
            my @answer = find( $goal - $current, @set );
            return ( $current, @answer ) if @answer;
        }
        return (  );
    }
```

About that short-circuit: James will talk over and go into a more complete analysis:


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/james-smith/perl/ch-1.pl)

James also shares the understanding that a given number can only be be used once in the sum, and makes a detailed analysis of the possible valid solutions, in the end drastically limiting the search field.

From his notes;
* If $d is equal to 0
  -  Any number between 100 & 109 can be represented by itself
  -  For numbers over 109 we can represent these as 100-109 + a number ending in 0...
  -  e.g. 534 / 0 = 104 + 430

    So if $d is equal to 0 then all numbers > 100 are possible

* If $n is between 10*$d and 10*$d+9 then it can be represented as $d$x
  -  For numbers > than this we can do a similar trick to above
  -  We can reprent them as a number ending in $d and a number where $d is the penultimate digit
  - e.g. 107 & 9 =   **9** +  **9**8
  - e.g. 450 & 8 =  6**8** + 3**8**2
  - e.g. 435 & 2 =  1**2** + 4**2**3

  So if $d is not equal to 0 then all numbers greater than 10x$d are possible

Interesting... this establishes a hard upper bound for failing to produce a sum.

Next:

* Finally we get to the list of numbers less than this - as the only
digit that can contain $d is the last one we just try to see if
we can find a sum of numbers ending in $d which have the same last
digit as $n and less than or equal to $n. Note as we have already
removed the numbers greater than 100 we now we only need to loop
up to 3 - as the next number would be 100 + 4$d....

Now for the resulting code:

```perl
  ## Return 1 if both conditions hold true...

  $n >= ( $t += $_ * 10 + $d ) &&
    ( $n % 10 == $t % 10 ) && return 1 for 0..3;

  ## Return 0 if no solution is possible...

  0;
```

It seems that under a certain limit there are only a few possible ways to come to a solution.


## use ANY COMBINATION of ANY AMOUNT
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/abigail/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/colin-crain/perl/ch-1.pl),
[**David Schwartz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/dms061/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/polettix/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/jo-37/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/pete-houston/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/sgreen/perl/ch-1.pl), and
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/stuart-little/perl/ch-1.pl)

The most common interpretation of the task was to find some enumeration of values from the set of valid numbers that when summed yield the target. Each number is available for inclusion in the target sum any number of times. Allowing this repetition opens up the upper bound for the number of summands in the solution to the target divided by the smallest element, which is the single digit, or 10 in the case of 0.


### RECURSION was MADE FOR THIS
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/colin-crain/perl/ch-1.pl),
[**David Schwartz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/dms061/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/polettix/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/pete-houston/perl/ch-1.pl), and
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/sgreen/perl/ch-1.pl)

The somewhat open-ended nature of the length of the solution suggests a recursive method. Given a list of sorted options, we can iterate through them, subtracting the selected value from the total and passing the remaining quantity. Hitting the target or exceeding it are the base cases, returning success or failure for that attempt.

[**David Schwartz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/dms061/perl/ch-1.pl)

David gives a straightforward brute force approach. Given enough time it will find a solution if there is one. On success the positive result is immediately propagated up the chain, stopping further attempts.

```perl
    sub brute {
        my ($sum, $n, @vals) = @_;
        # Base cases:
        return 1 if $sum == $n;
        return 0 if $sum > $n;
        # Try to add a number and see what happens
        for (@vals){
            return 1 if brute ($sum + $_, $n, @vals);
        }
        return 0;
    }
```

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/sgreen/perl/ch-1.pl)

Simon tightens the restrictions on recursion by passing only the values less than the remainder, filtering out pointless cycles.

```perl
    sub _find_numbers {
        my ( $remainder, $numbers, $all_numbers ) = @_;

        # Find out what digits remain (must be <= remainder)
        my @can_use = grep { $_ <= $remainder } @$all_numbers;

        foreach my $number (@can_use) {
            if ( $remainder == $number ) {
                # We have a solution, return that
                return [ @$numbers, $number ];
            }

            # Recurse this function
            my $solution = _find_numbers( $remainder - $number, [ @$numbers, $number ], $all_numbers );
            if ($solution) {
                return $solution;
            }
        }

        # There is no solution.
        return;
    }
```

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/colin-crain/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/colin-crain/raku/ch-1.raku)

For my own solution, I wanted to see the number chains I was creating. This complicated matters as I needed to keep partial lists as I progressed. I also constrained the list of potential values further both by filtering for values equal to or greater than the current selection and for values, that when added to the running sum would not exceed the target. This last distinction culled the recursions significantly. Further analysis showed me that above a certain value for each digit all numbers could be fitted, which would allow a short-circuit should the target be above a calculable figure. I wrote a routine to do this but never wired it in because, as I said, I enjoyed looking at the numbers. Even without the short circuit the method will find a solution in a reasonable time even for large targets.

There's a detailed methodology in comments, flushed out with improved writing in the [proper writeup for the challenge](https://colincrain.com/2021/05/21/represent-the-differences-yo/).

```perl
    sub sum_from_list ($target, $numlist, $partsum = 0, $partial = []) {
        for my $nextval ( $numlist->@* ) {
            if ($partsum + $nextval == $target) {
                push $partial->@*, $nextval;
                return $partial;
            }
            my @newpart  = ( $partial->@*, $nextval );
            my $newpsum = $partsum + $nextval;
            my @newlist  = grep { $_ >= $nextval && $_ <= $target - $newpsum} $numlist->@*;
            next if scalar @newlist == 0;
            my $sol = sum_from_list ($target, \@newlist, $newpsum, \@newpart);
            return $sol if defined $sol;
        }
        return undef;
    }

```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/e-choroba/perl/ch-1.pl)

Choroba produces his own analysis of the mathematical bounds:

> For D = 1, there's always the trivial solution: N = 1 + 1 + ... + 1.

> For D > 1 and any N >= D * 10, we can subtract D as many times as we
get between D * 10 and D * 10 + 9. Let's call this number M. M
contains D and M + D + D + ... + D = N, so it's the solution.

> For D = 0 and any N > 100, we can subtract 10 as many times as we get between 100 and 110. Let's call this number M. M contains 0 and M + 10 + 10 + 10 + ... + 10 = N, so it's the solution.

> Therefore, the only possible non-representable integers are N < D * 10 for D > 0, and N < 100 for D = 0.

Building from this, he presents us with two routines that work in tandem to work through the possibilities.

```perl
    sub represent_integer {
        my ($integer, $digit) = @_;
        return 1 if 1 == $digit
                 || 1 < $digit && $integer >= $digit * 10
                 || 0 == $digit && $integer > 99;
        return _represent_integer($integer, $digit)
    }

    sub _represent_integer {
        my ($integer, $digit) = @_;
        return 1 if 0 == $integer;

        for (my $having = $integer; $having > 0; --$having) {
            next unless $having =~ /$digit/;

            return 1 if represent_integer($integer - $having, $digit);
        }
        return 0
    }
```

One interesting detail is that to run his tests he uses a lookup table for verification, and the entirety of the table of all unsolvable target-digit combinations is only 336 values over all 10 digits.

### D • *k* + 10 • *c*
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/abigail/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/cheok-yin-fung/perl/ch-1.pl), and
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/stuart-little/perl/ch-1.pl)

One very interesting solution pattern we saw popping up in various ways was that a solution could be broken down into some multiple of the digit plus a remainder that is a constant times 10. If we can find this pair, then one factor from the multiple can be added to the value ending in 10, creating a number that contains the digit in the one's place and a list of digit values.

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/cheok-yin-fung/perl/ch-1.pl)

CY gives us two very similar techniques. In the first, she tries subtracting the digit from the target, and checking the remainder for the presence of the digit. If found then we have a summation of some multiple instances of the digit and a number containing the digit.

In the second technique she checks multiples of the digit to see whether the last digit matches the last digit in the target. If so, then the difference between that multiple and the target will be some multiple of 10. We remove one instance of the digit from the digit multiple and add it to to the tens figure and that value will now end in the digit and the list will now all sum.  On top of this she adds some conditional short-circuiting for the cases of d equal to 4, 6 and 8, further on top of clauses for a target divisible by the digit (always the case when d=1) and the target being above the upper cutoff for possible failure. She's really working *all* the angles.

Marvelous.

```perl
    sub last_digit {
        # Example   I: if N = 82, D = 9, it hints 82 = 72+10 = 9*8+10 = 9*7+19
        # Example  II: if N = 64, D = 7, it hints 64 = 14+50 = 7*2+50 = 7*1+57
        # Example III: if N = 30, D = 8, the set {8, 18, 28} ...
        # Example  IV: if N = 44, D = 6, it hints 44 = 24+20 = 6*4+20 = 6*3+26
        my $digit = $_[0];
        my $short = $_[1];
        my $last_digit_of_short = $short % 10;
        my $i = 1;
        while ($digit*$i < $short) {
            if ($digit*$i % 10  == $last_digit_of_short ) {
                return 1;
            }
            $i++;
        }
        return 0;
    }
```

[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/stuart-little/perl/ch-1.pl)

**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/stuart-little/haskell/ch-1.hs), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/stuart-little/node/ch-1.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/stuart-little/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/stuart-little/raku/ch-1.p6)

In a tight functional style, Stuart replicates the same technique. It looks different, but works out the same.

```perl
    sub lastDigSumm($nr,$dig,$nrSummands) {
        return (($nr - $nrSummands * $dig) % 10 == 0)
                && ($nrSummands * $dig <= $nr)
                && ($nrSummands * (($dig -1) * 10 + $dig) >= $nr);
    }

    sub lastDig($nr,$dig) {
        return !!(grep {lastDigSumm($nr,$dig,$_)} (1..9));
    }

    sub sol($nr,$dig) {
        $dig == 0 && return ($nr >= 101 || ($nr % 10 == 0));
        return (($nr >= $dig * 11) || lastDig($nr,$dig));
    }

    say 0+sol(@ARGV);
```


[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/abigail/perl/ch-1.pl)

**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/abigail/awk/ch-1.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/abigail/bash/ch-1.sh), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/abigail/c/ch-1.c), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/abigail/lua/ch-1.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/abigail/node/ch-1.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/abigail/python/ch-1.py), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/abigail/ruby/ch-1.rb)

Abigail then goes above and beyond, presenting a full mathematical proof as to *why* this technique holds true in all cases, and narrowing the scope for the tens multiplier to less than

*d* / gcd(*d*,10)

I truly enjoy seeing this effort made. Sure it made sense before, but now we can definitively say we *know* it, which is always a good thing.

They also go into further detail about the upper bound definition and the special cases that surround the digit being 0, all in rigorous form. Truly excellent work.

[Read their complete writeup here.](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-113-1.html)

```perl
    my @gcds = (0, 1, 2, 1, 2, 5, 2, 1, 2, 1);

    MAIN: while (<>) {
        my ($N, $D) = split;
        if ($D == 0) {
            say $N >= 100 || $N % 10 == 0 ? 1 : 0;
            next MAIN;
        }
        if ($N >= $D * 10) {
            say  1;
            next MAIN;
        }
        for (my $i = 0; $i < $D / $gcds [$D]; $i ++) {
            my $T = $N - 10 * $i - $D;
            if ($T >= 0 && $T % $D == 0) {
                say  1;
                next MAIN;
            }
        }
        say 0;
    }
```

### BOUNDING the SEARCH SPACE
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/abigail/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/colin-crain/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/polettix/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/jo-37/perl/ch-1.pl), and
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/pete-houston/perl/ch-1.pl)

Here is some further analysis that was presented around the bounds of surrounding possible outcomes.

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/jo-37/perl/ch-1.pl)

>Some considerations:
- The task neither requires the summands to be distinct nor a solution
  to have more than one summand.
- Every integer n that is a multiple of the digit d can be represented
  as a multiple sum of the given digit.
- Every integer having d in its decimal representation is a solution
  with itself as the sole summand.
- For all d > 0 and 10 * d <= n < 10 * (d + 1) the number starts
  with the digit d and thus is a solution itself.
- For all d > 0 and 10 * (d + 1) <= n there is a number m with
  10 * d <= m < 10 * (d + 1) starting with d and n - m is a multiple
  of d.  Thus n is representable as a sum of numbers that have the
  digit d in their decimal representation.
- For d = 0 and 100 <= n an analogous consideration is applicable when
  taking d=10 instead.  As leading zeros do not count, with the taken
  modification the second digit becomes zero.
- The remaining cases are n < 10 * d with the modified d.  Further
  analysis can be applied to these, e.g checking the special cases
  where d is one, even or five or is already occurring in n.  However,
  skipping any refinements and performing a brute force approach on
  this small solution space instead.

```perl
    sub rep_int ($n, $d) {
        $d ||= 10;
        return 1 if $n >= $d * 10;

        # keys are strings, using the numeric values.
        my %sum = (0 => 0);

        # All numbers containing the digit $d.
        for (my $num = $d; $num <= $n; $num += 10) {
            # All sums found so far.
            for my $sum (values %sum) {
                # New sums arise from the current sum plus multiples of the
                # current number.
                for (my $new = $sum + $num; $new <= $n; $new += $num) {
                    return 1 if $new == $n;
                    $sum{$new} = $new;
                }
            }
        }

        # Not found.
        0;
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/polettix/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/polettix/raku/ch-1.raku)

Transcribed from his [blog writeup](https://github.polettix.it/ETOOBUSY/2021/05/19/pwc113-represent-integer/):

>If a value N is such that N>10⋅D, it means that it can be expressed as the following sum:
>
>N = 10 • D + K
>
>Now we can consider that K can be expressed in terms of its integer division by D like follows:
>
>K = q • D + r
>
>with 0 ≤ r < D ≤ 9
>
>Hence, we can write N as follows:
>
>N = 10 • D + q • D + r
>N = q • D + (10 • D + r)
>
>Now, q⋅D is the same as summing D to itself q times, so it can be represented in terms of “sum of positive integers having D at least once”.
>
>On the other hand, considering the restrictions on D and r, the value 10 ⋅ D + r is the two-digits number where the first digit is D and the last digit is r, hence it contains digit D and complies with the rule.
>
>As a result, N is the sum of two compliant addentds and can thus be decomposed according to the rules.

After this he concludes a simple recursion will suffice:

```perl
    sub represent_integer ($n, $d) {
       return 0 if $n < $d;        # no point in checking this
       return 1 if $n >= 10 * $d;  # n * d + (10 * d + i)  (i < 9)
       return 1 if $n =~ m{$d}mxs; # match one digit
       $n -= $d;
       while ($n > 0) {
          return 1 if represent_integer($n, $d);
          $n -= 10;
       }
       return 0;
    }
```



## a UNIQUELY FUNCTIONAL APPROACH
[**Christian Jaeger**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/christian-jaeger/perl/ch-1.pl)

I don't know where to begin on Christian's awesome contribution. No, seriously, I don't know where to start.

What Christian has done here is not just used functional programming techniques to solve the problems, but indeed appears to have constructed a whole functional programming framework of modules to sit on top of Perl, allowing Perl to work as a functional *language*.

It's a lot to take in. So we're going to start slow, familiarizing ourselves a little bit at a time. Rather than jumping to the conclusive end of a series of optimizations as I normally would when looking over someone's multiple submissions, this time we will give instead the most basic brute force form presented as an opening example:


```perl
    sub maybe_choose_brute ($N, $ns) {
        __ 'Choose a combination of numbers from $ns (repetitions allowed)
            that added together equal $N; undef if not possible. This
            solution is brute force in that it is picking additional
            numbers from the left end of $ns, one after another,
            depth-first.';

        sub ($chosen) {
            my $check = __SUB__;
            warn "check (brute): " . show($chosen) if $verbose;
            my $sum = $chosen->sum;
            if ($sum == $N) {
                $chosen
            } elsif ($sum > $N) {
                undef
            } else {
                $ns->any(
                    sub ($n) {
                        $check->(cons($n, $chosen))
                    }
                )
            }
            }
            ->(null)
    }
```

This returns an anonymous recursive routine that uses `__SUB__` to acquire a reference to itself, which tells you the weirdness is just getting started. A trio of these are actually presented, growing more optimized as they go. We can identify some familiar patterns we've een in other recursive solutions, and this one is definitely on the simpler side, with no rarefaction of the options list at all, and bases cases of meeting or exceeding the target.

I encourage everyone to go and read his extensive [writeup and introduction to the framework](http://functional-perl.org/docs/blog/perl-weekly-challenges-113.xhtml).

## Additional Submissions in Guest Languages

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/jaldhar-h-vyas/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/jaldhar-h-vyas/raku/ch-1.sh)

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/ulrich-rieke/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/ulrich-rieke/raku/ch-1.raku)




---

# TASK 2 {#PWC113TASK2}

# Recreate Binary Tree
*Submitted by: Mohammad S Anwar*<br>
You are given a Binary Tree.

Write a script to replace each node of the tree with the sum of all the remaining nodes.

**Example**

```
    Input Binary Tree

            1
           / \
          2   3
         /   / \
        4   5   6
         \
          7

    Output Binary Tree

            27
           /  \
          26  25
         /   /  \
        24  23  22
         \
         21
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/abigail/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/adam-russell/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/arne-sommer/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/cheok-yin-fung/perl/ch-2.pl),
[**Christian Jaeger**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/christian-jaeger/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/dave-jacoby/perl/ch-2.pl),
[**David Schwartz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/dms061/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/jo-37/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/laurent-rosenfeld/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/perlboy1967/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/sgreen/perl/ch-2.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/stuart-little/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/wlmb/perl/ch-2.pl)


There were 20 submissions for the second task this past week.

Binary tree problems always involve two giant, related complications: input and output. The tree structure itself, once built up through a system of nodes of some sort, is a fascinating, longstanding integral part of computer science. But parent and child nodes are a data structure that really only comfortably fits in two forms: either as an abstract collection of pointers and values in a computer memory or as a physically drawn graph on a piece of paper. Intermediate states, *describing* the tree rather than *displaying* it, certainly have been devised, but these seem to exist in that worst of all possible worlds where neither computer nor human can easily understand what's being presented.

This task starts with a simple statement: "You are given a binary tree..." and we have immediately lost consensus the idea. "How?", "What?", "Where?" — all of these are very good questions that will need some decisions before the task can even be started, and there is no obvious answer to any of them. "Who?", at least is fortunately already answered: this is you, the willing participant, and as for "Why?", well that will just have to wait for another day.

Do not misunderstand me; generally I find ambiguity in the task definitions to be a *good* thing. The added requirement to assist in formulating the question indisputably adds creativity to the solutions and broadens the gene-pool, so to speak. It's just that in this particular problem every solution that I've come across comes with a set of associated faults — it's one of those frustrating trade-offs where nobody walks away happy, but what can you do?

### the I/O problem

Consider the example tree:
```
       1
      / \
     2   3
    /   / \
   4   6   7
```
Before we even start notice that this tree lacks a leaf at the "5" node, allowing it to be easily drawn. Binary trees do not, generally, look like this, but this is also a perfectly valid tree.

To read in our data and output the results of our computation we need to present not just the *values* of our tree but also the *information* of the interconnections between those values, in a one- or two-dimensional form. These expressions can be in turn broken onto two ideas: a linear, serialized data-stream, or some sort of graphical stab at adding additional information in a second dimension. For linear data in a string, we can draw on traditional set notation, recursively defined by portraying an individual node as {*left*, *value*, *right*}, with the placeholders *left* and *right* replaced with either additional nodes as described or the null set, ∅. This format builds out in both directions from the center in a manner mimicking a graphical representation, but leaves the root node buried in the center and hard to spot:

{{{∅,4,∅},2,∅},1,{{∅,6,∅},3,{∅,7,∅}}}

Alternately, we could rearrange our nodes to {value, left, right}, which *might* improve the readability:

{1,{2,{4,∅,∅},∅},{3,{6,∅,∅},{7,∅,∅}}}

Oh, *now* it makes sense! Thanks for that! And yes, that was sarcasm should that not have been absolutely clear. In full disclosure I believe I've used both of these encodings before in these challenges.

A popular alternate idea is to fit the data into an appropriately-sized template of a full tree and present the tree and a list of values separated by a defined delimiter, possibly with a specifically defined null-set character as well that will not otherwise appear in the data. Numbering the nodes in a breadth-first traversal, each node, filled or null, gets a spot in the list, so the list position immediately defines the node location. This format has the advantage of maintaining the parent-child relationships mathematically in the indexing. The children for a parent located at index *n* will always be found at index 2*n*+1 and 2*n*+2. Because of this mathematical relationship the data can considered a real tree drawn flat: each array index is a node, able to be traversed in the same manner as a more traditional form. Only the practical particulars differ.

Some examples would be in order to help clarify. Be aware there is no formal specification for this format, so users must decide for themselves what works for them.

1,2,3,4,,6,7

1|2|3|4|*|6|7

111 222 333 444 ∅ 666 777

I like this format, but acknowledge for larger structures it gets unwieldy quickly, as each additional level to the tree adds 2<sup>*n*</sup> more elements to be accounted for, empty or not. For a sparse tree looking more like a linked list, with 6 nodes on 6 levels, we still require 63 pieces of data. Perhaps we can leave out some implicit nulls after the last value on the last level, but that's the best we can do to minimize things. I find this format fairly human-readable for smaller trees, but for anything big the bookkeeping quickly becomes ridiculous.

One immediate improvement we can make to readability in this format is to break each level of the tree into its own line in a file. This can at least hold off the deluge of data to make it visually parsable for another level or two:

1<br>
2   3<br>
4   X   6   7<br>

This presents the level information nicely, but the parent-child relationships still get lost without a direct line displaying the connection.

So why don't we draw the lines too? Well this brings us full circle to our opening example, and I will try and sum up the problem as succinctly as possible:

Because a text-based solution is just freaking terrible at that job.

I chose my trivial example carefully because it nicely encapsulates the problems with the idea. The tree only works in a clean and readable way because node 5 is missing. If we need that data node, then the tradeoffs begin:
```
          1
       /     \
      2       3
     / \     / \
    4   5   6   7
```
The spacing is all dependent on keeping the elements in the last row separated, which leads to increasingly larger gaps on the levels above. Further, our toy example has only single-character values. What about this:
```
                        1
               /                 \
          22222                   3
         /     \               /      \
        4       5           666        7
       /         \         /   \      /
    888           11111  12     13  14
```
We're really losing the plot now. We're looking less like a tree and more like a polycyclic aromatic hydrocarbon. I've made some judgement calls on where to place the connecting lines, surely, to make it as pretty as possible, and I really can't see any alternative patterns that make the outcome fundamentally clearer. This is as good as it gets. Add another level and of course everything gets worse.

Even if you wanted to draw this, calculating the variable spacing to get things to line up gracefully, well lets say this a non-trivial problem. I grappled with it myself and settled on basing everything off the longest value in the tree. I'm pleased with the results, albeit the trees are sometimes wider than I'd like. That's my tradeoff. Generously, I'll state that the problem is complex. Off the record I'd use stronger language.

Some brave souls, in the past, have even gone as far as to parse these drawings for input. Although I'd like to make unequivocally clear that I admire the will to make such an quixotic effort — without these beautiful crazy schemes life would be so much less interesting — I believe the underlying format, not the idea of a parsing implementation, has fundamental flaws. It just doesn't work  well in a general-purpose way to define a tree *to* a computer program without some serious work.

Of course anything is possible. But adaptive spacing and keeping track of missing children and *their* children in turn would be a real handful. We could count forward and backward slashes, sure, but assigning the linkages to the correct children in a sparse tree, without fixed positioning would necessitate some seriously fancy trickery of one kind or another.

### so WHAT DID WE END UP DOING?

We saw hardwired data, because we said it was given, without being too particular as to how.  "Given" doesn't actually require external input, depending on how you think about it.

We also saw serialized input from the command line, parsed, watered and grown into trees. Alternately, we also had serialized input that was transformed in place. Some sort of serialization scheme seemed to be a go-to plan.

We had a wide variety of concepts deployed for a recursive data structure defining a tree, from arrays of arrays mimicking the set definition to node and tree objects, to one-stop module imports we haven't previously seen here.

There were only a few attempts to output the tree in a graphical representation. Mostly the altered value from the nodes were presented as a list, but there were some more ambitious efforts. Having finished early I dusted off a routine I had made for PWC 057 and did that refactoring I had said I would get to, so later I'll present it in its new art-deco glory.


## so do we BUILD THIS TREE OR NOT?
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/abigail/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/arne-sommer/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/duncan-c-white/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/laurent-rosenfeld/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/roger-bell-west/perl/ch-2.pl), and
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/sgreen/perl/ch-2.pl)

One emergent consequence of serializing the input was that with all of the values right there in a line, it wasn't necessary, strictly speaking, to reconfigure the data into a tree to perform the transformation. The argument might be made that it was unsporting, but summing all of the numbers found and replacing them with new values are operations independant of whatever linear format is employed. As the underlying tree structure is unchanged, if the format described a tree going in, it will describe a tree going out. One might reasonably consider what happens in the middle to be a black box, and that if we accomplish our goal, it doesn't matter the means we use to get there. This proved to be a quite popular way to think about it.

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/sgreen/perl/ch-2.pl)

Simon wants a serialized string from the command line.

Two regular expressions first match, gathering and summing every number found, then with a second pass substitute each match found for the difference of the sum and the value. It's remarkably concise. I admire the elegance.

```perl
    sub main {
        my $string = shift;

        # Calculate the sum of all digits
        my $sum = sum( $string =~ /(\d+)/g );
        $string =~ s/(\d+)/$sum-$1/eg;
        say $string;

    }
```


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/roger-bell-west/perl/ch-2.pl)

**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/roger-bell-west/rust/ch-2.rs)

In Roger's world he acts on data already in array form. In this case two iterations get the job done, first to sum the digits and then to apply the difference equation. Any null nodes are indicated by the value `-1`.

```perl
    sub rbt {
      my $ti=shift;
      my $s=0;
      foreach my $n (@{$ti}) {
        if ($n>=0) {
          $s+=$n;
        }
      }
      my @to;
      foreach my $n (@{$ti}) {
        if ($n>=0) {
          push @to,$s-$n;
        } else {
          push @to,$n;
        }
      }
      return \@to;
    }
```

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/arne-sommer/perl/ch-2.pl)

**additional languages:**
[Misc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/arne-sommer/misc/tree2.dot), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/arne-sommer/raku/ch-2.raku)

Arne expects a string of values delineated with spaces; pipes separate layers and stars indicate null data but ultimately the format is inconsequential, as all of this infrastructure is passed through when we transform the numbers. First a regular expression matches out and then sums the digits. Then, after splitting the string into and array on whitespace a loop is set up and a new array is built; if the value is a number it is swapped with the difference from the sum, and if it's not it's left unmolested. The new array, joined up, becomes the recreated tree.

```perl
    my $tree = shift(@$ARGV) // '1 | 2 3 | 4 * 5 6 | * 7';
    my $sum = sum(grep(/\d/, split(/\s+/, $tree)));
    say ": Sum: $sum" if $verbose;

    my @elems;

    for my $elem (split(/\s+/, $tree))
    {
      $elem =~ /\d/
       ? push(@elems, $sum - $elem)
       : push(@elems, $elem);
    }

    say join(" ", @elems);
```


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/laurent-rosenfeld/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/laurent-rosenfeld/raku/ch-2.raku)

This is an odd case in a task full of odd cases, starting work as an array and moving to a tree for display. Laurent starts with a toy "tree" in linear form, being an array of the digits 1 through 7, encoding a full tree of three levels and seven nodes. The processing for the task, summing and replacing with the difference, it then effected on this array in two simple lines.

```perl
    $sum += $_ for @$tree;
    my $new_tree = [ map $sum - $_, @$tree ];
```

Then, after the fact, this list is transformed first into an array-of-arrays, broken down into the levels of a tree, and then this array is printed out given padding within each level in an inverse ratio to its depth, with the root padded the most and the leaves the least.


## ASSEMBLE an AD-HOC DATA STRUCTURE
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/cheok-yin-fung/perl/ch-2.pl),
[**David Schwartz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/dms061/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/e-choroba/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/perlboy1967/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/wlmb/perl/ch-2.pl)

The essential quality of the set-theory definition for a binary tree is the recursive structure: each three member node contains two child nodes (or null sets) holding the same definition, with the pattern repeated inward as far as it goes. We don't need any further abstraction to implement this than an array of 3-element arrays of a hash of 3-key hashes. Either will do the job perfectly well.

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/wlmb/perl/ch-2.pl)

```
    Input:  [1,[2,[4,[],[7,[],[]]],[]],[3,[5,[],[]],[6,[],[]]]]
    Output: [27,[26,[24,[],[21,[],[]]],[]],[25,[23,[],[]],[22,[],[]]]]
```

Luis makes a nice segue from the previous section as his serialized data is already an array of arrays. Once input the string is given a suspicious once-over, and once cleared is then passed to an `eval` where it realizes its true nature. Once there a pair of recursive functions first perform the summation, then replace the values.

```perl
    sub sum_tree { #sum and do some rough validation
        my $node=shift;
        die "Wrong format" unless ref($node) eq "ARRAY";
        return 0 if @$node==0;
        return $node->[0]
               +sum0 map {sum_tree($node->[$_])} (1,2) if @$node==3;
        die "Wrong format";
    }

    sub subtract_tree {
        my ($node, $from)=@_;
        return [] if @$node==0;
        return [$from-$node->[0],
                map {subtract_tree($node->[$_], $from)} (1,2)];
    }
```


A third recursive routine converts the tree back into the string form it came in:

```perl
    sub stringify_tree {
        my $node=shift;
        return "[]" if @$node==0;
        return sprintf("[%s,%s,%s]", $node->[0],
               map {stringify_tree($node->[$_])} (1,2));
    }
```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/perlboy1967/perl/ch-2.pl)

Niels also keeps his tree as an array-of-arrays, in `[value, left, right]` form:

```perl
    'Test 1' => [
      [ 1,[ 2,[ 4,[undef, 7]]],[ 3,[ 5, 6]]],
      [27,[26,[24,[undef,21]]],[25,[23,22]]]
    ],
```

These arrays can then be traversed in two steps to first sum and then update the tree.

```perl
    sub sumOfTree {
      my ($arT) = @_;

      my $sum;
      foreach my $n (@$arT) {
        if (ref($n) eq 'ARRAY') {
          $sum += sumOfTree($n);
        } elsif (defined $n) {
          $sum += $n;
        }
      }

      return $sum;
    }

    sub updateTree {
      my ($arT, $sum) = @_;

      foreach my $n (@$arT) {
        if (ref($n) eq 'ARRAY') {
          updateTree($n,$sum);
        } elsif (defined $n) {
          $n = $sum - $n;
        }
      }
    }

```


[**David Schwartz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/dms061/perl/ch-2.pl)

David, and Choroba later, are the first to bring us a new revelation to the processing in the task. You may have by now observed that we need to make two passes through the data: once to gather the sum of the nodes, then again to alter their values. As an array these passes are trivial, but given a proper tree structure it becomes a little more complex to perform a node-wise traversal to access the values, and this action need to be repeated for each processing step.

So what if we were to apply a little functional programming methodology and refactor out just the traversal into its own routine, which we could then give a coderef as an argument to effect the processing? That. of course, is exactly what we have been given here:

```perl
    sub preorder (&@) {
        my ($expr, $node) = @_;
        $_ = $node->{"val"};
        $node->{"val"} = &$expr;
        # the & forces it to run without the prototype
        # important because we switch from asking for an anon-block
        # to a code ref (which encapsulates that block)
        &preorder ($expr, $node->{"left"}) if $node->{"left"};
        &preorder ($expr, $node->{"right"}) if $node->{"right"};
    }

    preorder {$sum += $_; $_;} $test;
    preorder {$sum - $_} $test;
```

This routine is the real meat of the demonstration, with I/O relegated to ancillary status: the input is hardwired, and the output is just the list of altered values. But it's not about that anyways. A proper tree is constructed from a hash of hashes, and walked with this routine to get the results.

I like that he took the trouble to add a subroutine signature, allowing him to call it as

```perl
    preorder {BLOCK} $tree;
```

It's a small thing, but a nice detail.


## build a NODE, build an OBJECT, grow a TREE
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/dave-jacoby/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/e-choroba/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/james-smith/perl/ch-2.pl), and
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/jo-37/perl/ch-2.pl)

The classic Object Oriented way to build a binary tree is to abstract the structure into a Node object that knows how to be a node, and perhaps a Tree object that knows all about stringing these nodes together. Keeping the mechanics encapsulated makes adding functionality a little easier to keep straight, with everything kept within its proper frame of reference.


[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/e-choroba/perl/ch-2.pl)

We mentioned Choroba in passing previously, and here he demonstrates how easily a traversal method can be brought into a simple object. It's compact and elegant and I like it. We could swap the anonymous coderefs as proper methods if we wanted to, but here they remain the one-off transformations that they are, easily configurable to do exactly what we want.

```perl
    {   package Node;
        use Moo;
        has value      => (is => 'rw', required => 1);
        has leftchild  => (is => 'rw', predicate => 1);
        has rightchild => (is => 'rw', predicate => 1);

        sub walk {
            my ($self, $sub) = @_;
            $self->leftchild->walk($sub)  if $self->has_leftchild;
            $self->rightchild->walk($sub) if $self->has_rightchild;
            $sub->($self);
        }
    }

    $one->walk(sub { $sum += $_[0]->value});
    $one->walk(sub { $_[0]->value($sum - $_[0]->value) });
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/james-smith/perl/ch-2.pl)

James has decided to flush out the work he started in PWC 094, bringing us today two objects, a `Tree`, and a `BinaryTree`.

In this expanding of the feature-set of his packages, he joins the club of solutions that abstract the tree traversal into its own method, `walk`, which takes a function as input and optionally a few variables to apply to each node as it goes along. He then takes the idea of "recreating" the tree to a completely different place, by not effecting the changes on the input tree, but rather by using his `walk` function to make a deep clone of the original structure first and changing that instead. In the end we have two trees: the original, unaltered, and a "recreated" version with the new data.

From `BinaryTree`:

```perl
    sub walk {
      my( $self, $fn, $global, $local, $dir ) = @_;
      $local = $fn->( $self, $global, $local, $dir||'' );
      $self->left->walk(  $fn, $global, $local, 'left'  ) if $self->has_left;
      $self->right->walk( $fn, $global, $local, 'right' ) if $self->has_right;
      return;
    }

    sub clone {
      my( $self, $clone_fn ) = @_;
      $clone_fn ||= sub { $_[0] };
      my $clone = {};
      $self->walk( sub { my( $node, $global, $local, $dir ) = @_;
        if(exists $global->{'tree'} ) {
          my $child = BinaryTree->new( $clone_fn->( $node->value ) );
          $dir eq 'left' ? $local->add_child_left( $child ) : $local->add_child_right( $child );
          return $child;
        }
        $global->{'tree'} = BinaryTree->new( $clone_fn->( $node->value ) );
        return $global->{'tree'};
      }, $clone );
      return $clone->{'tree'};
    }
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/jo-37/perl/ch-2.pl)

Jorg brings us a similarly augmented `BinaryTree` package, with an unusual twist on updating the node values. He provides a generic traversal routine much like those we've seen, but on the first traversal, to gather and sum the values, he also collects references to the  values themselves within the nodes. Then once he has the sum, he only needs to iterate through this array of scalar references and replace the value referenced with the transformed difference. Sneaky!

From `BinaryTree`:

```perl
    # Depth-first NLR traversal of the binary tree starting from its root.
    # The code ref is called for every node with $_ set to the current node.
    sub traverse ($self, $code) {
        # Recursively process the tree in NLR order.  Nodes are
        # not blessed and thus have no methods.
        do {local $_ = $self; $code->()};
        traverse($_, $code) for grep $_, $self->@[1 .. $#$self];
    }
```

And in the main body of the program:

```perl
    sub recreate_tree ($tree) {

        # Get the sum of all node values and collect references to them.
        my $sum;
        my @nodes;
        $tree->traverse(sub {
                $sum += $_->[0];
                push @nodes, \$_->[0];
            });

        # Adjust the nodes' values as the sum minus the old value.
        $$_ = $sum - $$_ for @nodes;
    }
```

## talk to a MODULE
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/adam-russell/perl/ch-2.pl), and
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/stuart-little/perl/ch-2.pl)

There were packages all over the place in this challenge, however almost all of these were classes made by the submitters, crafted for the job at hand. There were a few outside imports that showed up, in each case some of the more uncommon modules we don't often see.

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/adam-russell/perl/ch-2.pl)

**additional languages:**
[Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/adam-russell/prolog/ch-2.p)

**modules:** <br>
Graph; <br>
Graph::Easy::Parser; <br>

Adam states that he likes the consistency of having the `Graph` module to work with, enabling his to build up a reusable library of routines to draw on when solving these problems.

The `Graph::Easy` boxes are a little easier to see as a tree if you tilt your head a little to the left.


```
    +----+     +----+     +----+     +----+
    | 27 | ==> | 26 | ==> | 24 | ==> | 21 |
    +----+     +----+     +----+     +----+
      H
      H
      v
    +----+     +----+
    | 25 | ==> | 22 |
    +----+     +----+
      H
      H
      v
    +----+
    | 23 |
    +----+
```

The `Graph` framework gives easy, immediate access to the node values, here stored in `vertices`:

```perl
    sub sum_remaining{
        my($graph, $visited) = @_;
        my $sum = 0;
        for my $vertex ($graph->vertices()){
            $sum += $vertex if $vertex != $visited;
        }
        return $sum;
    }
```

Additional routines provided are used to transmute the data into a new graph for output:

```perl
    sub dfs_update{
        my($graph, $vertex, $graph_updated, $previous) = @_;
        my @successors = $graph->successors($vertex);
        for my $successor (@successors){
            my $sum_remaining = sum_remaining($graph, $vertex);
            $graph_updated->add_edge($previous, $sum_remaining) if $previous;
            dfs_update($graph, $successor, $graph_updated, $sum_remaining);
        }
        $graph_updated->add_edge($previous, sum_remaining($graph, $vertex)) if !@successors;
    }
```

[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/stuart-little/perl/ch-2.pl)

**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/stuart-little/haskell/ch-2.hs), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/stuart-little/node/ch-2.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/stuart-little/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/stuart-little/raku/ch-2.p6)

**modules:**<br>
Tree::DAG_Node

Simon also brings us a module we haven't seen in quite some time, `Tree::DAG_Node`.

```
    27
        |--- 26
        |    |--- 24
        |    |    |---
        |    |    |--- 21
        |    |         |---
        |    |         |---
        |    |---
        |--- 25
             |--- 23
             |    |---
             |    |---
             |--- 22
                  |---
                  |---
```

I have to say I'm a little sketchy on some of the notation, but the values are correct. The input is taken as a serialized tree array in string format, space-separated with a single "`.`" for  null value. The transformation is quickly effected in a few lines to a new array, and then the array is converted to a hash using `treeList2Hash()`. After that a second function, `mkDAG()` converts the hash to describe a Directed Acyclic Graph for the module.

```perl
    sub treeList2Hash($t) {
        (! scalar @{$t} || $t->[0] eq '.') && return {};
        my @rest = @{$t}[1..scalar @{$t}-1];
        my $ix = ixSplit(\@rest);
        my @left = @rest[0..$ix];
        my @right = @rest[$ix+1..$#rest];
        return {
            name => $t->[0],
            left => treeList2Hash(\@left),
            right => treeList2Hash(\@right),
        };
    }

    sub mkDAG($h) {
        (! scalar keys %{$h}) && return Tree::DAG_Node->new({ name => "" });
        my $root = Tree::DAG_Node->new({ name => $h->{name} });
        my %left = %{$h->{left}};
        $root->add_daughter(mkDAG(\%left));
        my %right = %{$h->{right}};
        $root->add_daughter(mkDAG(\%right));
        return $root;
    }
```


## a new FUNCTIONAL PARADIGM, REDUX
[**Christian Jaeger**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/christian-jaeger/perl/ch-2.pl)

Again, where to start with this magnificent undertaking? Everything looks a little different, yet mostly similar. We have an example of a `Node` object, adapted with a system of typing and given a method to traverse and apply a function. Ok, we've seen this before. That was functional, but this is another level:

```perl
    package PFLANZE::Node {
        use FP::Predicates qw(is_string maybe instance_of);
        *is_maybe_Node = maybe instance_of("PFLANZE::Node");

        use FP::Struct [
            [\&is_maybe_Node, "left"],
            [\&is_string,     "value"],
            [\&is_maybe_Node, "right"]
        ] => ("FP::Struct::Show", "FP::Struct::Equal");

        sub map ($self, $fn) {
            my $l  = $self->left;
            my $r  = $self->right;
            my $l2 = defined($l) ? $l->map($fn) : undef;
            my $r2 = defined($r) ? $r->map($fn) : undef;
            $fn->($l2, $self->value, $r2)
        }

        _END_
    }
    PFLANZE::Node::constructors->import;
```

Later on we see a couple more routines we should recognize:

```perl
    sub tree_sum($t) {
        $t->map(
            sub ($l, $value, $r) {
                $value + ($l // 0) + ($r // 0)
            }
        )
    }

    TEST { tree_sum $in } 28;

    sub tree_recreate($t) {
        my $sum = tree_sum($t);
        $t->map(
            sub ($l, $value, $r) {
                Node($l, $sum - $value, $r)
            }
        )
    }
```

It all has an intense, rigorous style, which is to be expected. Every value or lack thereof always needs to be accounted for. Tests are continuous and pervasive. We'll be looking further at this fascinating work as we explore Christian's submissions in the weeks to come.

Again, [Christian is providing an admirably detailed companion blog](http://functional-perl.org/docs/blog/perl-weekly-challenges-113.xhtml#Task_#2:_Recreate_Binary_Tree) that provides extensive documentation not only for the specific solutions but also the framework he is constructing. I look forward to the next installment.

## a PRETTY DISPLAY for the PEOPLE
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/colin-crain/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/colin-crain/raku/ch-2.raku)

As I've stated previously, presenting a binary tree for terminal or text output in a pleasing manner is a non-trivial task — not too hard to get okay but quite challenging to get unambiguously right. Most submissions shied away from this aspect of the task this time, and I can hardly blame them. There has been quite a lot of work by the team in the  past on the subject, and the aforementioned difficulties leave it as a fairly unsatisfying project to tackle.

Last year, I spent way too much time trying to figure this out, and with a little extra time this week decide to revisit that code and do the refactoring I always wanted to get around to. Inspired in part by Simon Proctor and his Raku submission for PWC 057, I also swapped my slashes for Unicode box-drawing characters, giving what I consider a quite pleasing result. It makes me think of art-deco robots for some reason, which is, obviously, also pleasing to me.

```
    Input:

            ┏━━━━━━┫6┣━━━━━━┓
            ┃               ┃
        ┏━━┫8┃          ┏━━┫6┣━━┓
        ┃               ┃       ┃
       ┃2┣┓           ┏┫3┣┓    ┃9┣┓
          ┃           ┃   ┃       ┃
         ┃3┃         ┃5┃ ┃1┃     ┃1┃


    Output:

                     ┏━━━━━━━━━━━━━┫38┣━━━━━━━━━━━━━┓
                     ┃                              ┃
             ┏━━━━━┫36┃                      ┏━━━━━┫38┣━━━━━┓
             ┃                               ┃              ┃
           ┃42┣━┓                        ┏━┫41┣━┓          ┃35┣━┓
                ┃                        ┃      ┃               ┃
               ┃41┃                    ┃39┃    ┃43┃            ┃43┃
```

I even went and rewrote the whole thing in Raku, which lead to more refactoring, some of which I back-ported to this version. Other bits, like replacing some of the simpler routines with constants, could still be done. All this pretty-printing is of course outside the immediate scope of the challenge; this just takes a serialized array and outputs it.

For the challenge itself I made a pair of `Node` and `BTree` classes with methods to do the transformation, which was a nice exercise. We take a serial list to load a BTree object, then when the work on it is done another method transforms in back into an array. I'm proud of the work, but it's nothing we haven't seen already. This, on the other hand, is different:

```perl
    ## predeclare
    sub space;
    sub dash;
    sub vert;
    sub rtee;
    sub ltee;
    sub downr;
    sub downl;

    sub print_tree (@tree) {
    ## originally created for PWC 057-1 "invert-sugar"
    ## updated for box drawing elements and cleaned up for PWC 113
        my $value_width = get_max_value_width(@tree);

        ## magic trick here, as we get longer values we pretend we're at the top of
        ## a larger tree to keep from running out of space between adjacent values
        ## between two parent nodes on the lowest level
        my $num_levels  = get_level(scalar @tree - 1 ) + int($value_width/2);
        my $index = 0;

        while ($index < scalar @tree) {
            my $level  = get_level($index);

            my $spacer = 2**($num_levels - $level + 1);
            my $white  = ($spacer/2 + 1 + $value_width) > $spacer
                                ? $spacer
                                : $spacer/2 + 1 + $value_width;
            my $dashes = $spacer - $white;
            my $level_node_count = 2 ** $level;
            my $node_line;
            my $vert_line;

            ## draw the nodes of each level and any connecting lines to the next
            for (1..$level_node_count) {

                ## if the node is defined draw it in
                if (defined $tree[$index]) {

                    ## centers value in a slot $value_width wide, leaning right for odd fits
                    my $this_width      = length($tree[$index]);
                    my $right_pad_count = int(($value_width-$this_width)/2);
                    my $right_pad       = space($right_pad_count);
                    my $left_pad        = space($value_width - $this_width - $right_pad_count);
                    my $value_format    = "${left_pad}%${this_width}s${right_pad}";
                    my $node            = sprintf $value_format, $tree[$index];

                    ## draw connecting lines if children present, or whitespace if not
                    my $left_branch  = defined @tree[2 * $index + 1]
                                        ? space($white-2) . downr  . dash($dashes) . ltee
                                        : space($spacer-1). vert;
                    my $right_branch = defined $tree[2 * $index + 2]
                                        ? rtee . dash($dashes) . downl . space($white-$value_width-2)
                                        : vert . space($spacer-$value_width-1);
                    $node_line      .= $left_branch . $node . $right_branch;

                    ## construct the vert connector line
                    my $left_vert    = defined $tree[2 * $index + 1]
                                        ? space($spacer/2+$value_width-1) . vert . space($dashes+1)
                                        : space($spacer);
                    my $right_vert   = defined $tree[2 * $index + 2]
                                        ? space($dashes+$value_width+1) . vert . space($spacer/2-1)
                                        : space($spacer);
                    $vert_line      .= $left_vert . $right_vert;
                }
                ## else insert equivalent whitespace
                else {
                    $node_line .= space(2 * $spacer);
                    $vert_line .= space($spacer + 2 + $dashes*2 + $value_width*2);
                }
                $index++;
            }
            say $node_line;
            say $vert_line;
        }
    }

    sub space ($val) { return q( ) x $val }
    sub dash  ($val) { return q(━) x $val }
    sub vert         { return q(┃) }
    sub rtee         { return q(┣) }
    sub ltee         { return q(┫) }
    sub downr        { return q(┏) }
    sub downl        { return q(┓) }

    sub get_level ($n) {
    ## determines the 0-based level of a node from its index
        return $n > 0 ? int log($n+1)/log(2)
                      : 0;
    }

    sub get_max_value_width (@tree) {
    ## finds the widest string representation in the array and returns the width
        my $max = 0;
        $_ > $max and $max = $_ for map { scalar split // } grep defined, @tree;
        return $max;
    }
```


## Additional Submissions in Guest Languages

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/abigail/perl/ch-2.pl)

**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/abigail/awk/ch-2.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/abigail/bash/ch-2.sh), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/abigail/c/ch-2.c), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/abigail/lua/ch-2.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/abigail/node/ch-2.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/abigail/python/ch-2.py), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/abigail/ruby/ch-2.rb)

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/polettix/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/polettix/raku/ch-2.raku)

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/jaldhar-h-vyas/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-113/jaldhar-h-vyas/raku/ch-2.raku)

------------------------------------------

---

# BLOGS {#PWC113BLOGS}

---

**That66s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, I somehow continue to maintain my bearings. Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC093BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *READ* these *BLOG* *LINKS*:

**( *don't think, trust your training, you're in the zone, just do it ...* )**


**Aaron Smith**

 * [Perl Weekly Challenge 112 - Aaron Smith](https://aaronreidsmith.github.io/blog/perl-weekly-challenge-113/) ( *Raku* )

**Abigail**

 * [Perl Weekly Challenge: Represent Integer](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-113-1.html) ( *Perl* )
 * [Perl Weekly Challenge 113: Recreate Binary Tree](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-113-2.html) ( *Perl* )

**Adam Russell**

 * [Weekly Challenge 113 — Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2021/05/23) ( *Perl* )
 * [Weekly Challenge 113 — Prolog — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2021/05/23) ( *Prolog* )

**Arne Sommer**

 * [Re Re Raku (and Perl)](https://raku-musings.com/re-re.html) ( *Perl & Raku* )

**Cheok-Yin Fung**

 * [CY's Take on The Weekly Challenge #113](http://e7-87-83.github.io/coding/challenge_113.html) ( *Perl* )

**Christian Jaeger**

 * [The Perl Weekly Challenges, #113](http://functional-perl.org/docs/blog/perl-weekly-challenges-113.xhtml) ( *Perl* )

**Colin Crain**

 * [Represent the Differences, Yo! — Programming Excursions in Perl and Raku](https://colincrain.com/2021/05/21/represent-the-differences-yo/) ( *Perl & Raku* )

**Flavio Poletti**

 * [PWC113 - Represent Integer - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/05/19/pwc113-represent-integer/) ( *Perl & Raku* )
 * [PWC113 - Recreate Binary Tree - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/05/20/pwc113-recreate-binary-tree/) ( *Perl & Raku* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 113](https://www.braincells.com/perl/2021/05/perl_weekly_challenge_week_113.html) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #113](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-113/james-smith) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 113: Represent Integer and Recreate Binary Tree | laurent_r](http://blogs.perl.org/users/laurent_r/2021/05/perl-weekly-challenge-113-represent-integer-and-recreate-binary-tree.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 113: sums and trees — Luca Ferrari — Open Source advocate, human being](https://fluca1978.github.io/2021/05/18/PerlWeeklyChallenge113.html) ( *Raku* )

**Roger Bell_West**

 * [RogerBW's Blog: Perl Weekly Challenge 113: Represent-Recreate](https://blog.firedrake.org/archive/2021/05/Perl_Weekly_Challenge_113__Represent_Recreate.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 113](https://dev.to/simongreennet/weekly-challenge-113-4g2d) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 113 — W. Luis Mochán](https://wlmb.github.io/2021/05/22/PWC113/) ( *Perl* )




