---
author:       Colin Crain
date:         2022-06-20T00:00:00
description:  "Colin Crain › Perl Weekly Review #163"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #163"
image:        images/blog/p5-review-challenge-163.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-162/).* )

Welcome to the Perl review pages for **Week 163** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

---

### ●︎ Why do we do these challenges?

I suppose any reasonable answer to that question would be from a field as wide ranging and varied as the people who choose to join the team. One thing, though, is clear: it's not a competition, and there are no judges, even if there is a "prize" of sorts. About that -- I think of it more as an honorarium periodically awarded to acknowledge the efforts we make towards this strange goal. So there's no determination to find the *fastest*, or the *shortest*, or even, in some abstract way, the *best* way to go about things, although I'm certain the participants have their own aspirations and personal drives. As Perl is such a wonderfully expressive language, this provides quite a bit of fodder to the core idea of TMTOWTDI, producing a gamut of varied techniques and solutions.

Even the tasks themselves are often open to a certain amount of discretionary interpretation. What we end up with is a situation where each participant is producing something in the manner they find the most interesting or satisfying. Some team members focus on carefully crafted complete applications, thoroughly vetting input data and handling every use case they can think up. Others choose to apply themselves to the logic of the underlying puzzle and making it work in the most elegant way they can. Some eschew modules they would ordinarily reach for, others embrace them, bringing to light wheels perhaps invented years ago that happen to exactly solve the problem in front of them today.

I've been considering this question for some time and have found one binding commonality between all of us out solving these challenges each week, in that however we normally live our lives, the task in front of us more than likely has nothing to do with any of that. And I think this has great value. We all do what we do, in the real world, and hopefully we do it well. The Weekly Challenge provides us with an opportunity to do something germane to that life yet distinctly different; if we only do the things we already know how to do then we will only do the same things over and over. This is where the "challenge" aspect comes into play.

So we can consider The Weekly Challenge as providing a problem space outside of our comfort zone, as far out from that comfort as we wish to take things. From those reaches we can gather and learn things, pick and choose and bring what we want back into our lives. Personally, I think that's what this whole thing is about. YMMV.

---

<strong><emp>Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due.</emp></strong>

And that, my friends, is why I'm here, to try and figure out ways to do just that.

So here we are then.

I'm ready — let’s get to it and see what we can find.

---

### For Additional Context…

Before we begin, you may wish to revisit either the pages for the [**original tasks**](/blog/perl-weekly-challenge-163/) or the summary [**recap**](/blog/recap-challenge-163/) of the challenge. But don't worry about it, the challenge text will be repeated and presented as we progress from task to task.

Oh, and one ***more*** thing before we finally get started:


### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please feel free to email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

<div align= center><strong>...Enough? Fine. So without even further ado...</strong></div>

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC163TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC163TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC163BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC163TASK1}

# Sum Bitwise Operator
*Submitted by: Mohammad S Anwar*

You are given list positive numbers, @n.

Write script to calculate the sum of bitwise & operator for all unique pairs.

**Example 1**
```
    Input: @n = (1, 2, 3)
    Output: 3
```

Since (1 & 2) + (2 & 3) + (1 & 3) => 0 + 2 + 1 =>  3.

**Example 2**
```
    Input: @n = (2, 3, 4)
    Output: 2
```

Since (2 & 3) + (2 & 4) + (3 & 4) => 2 + 0 + 0 =>  2.


## about the solutions
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/adam-russell/perl/ch-1.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/alexander-pankoff/perl/ch-1.pl),
[**Ali Moradi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/deadmarshal/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/athanasius/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/colin-crain/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/jo-37/perl/ch-1.pl),
[**Julien Fiegehenn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/julien-fiegehenn/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/lubos-kolouch/perl/ch-1.pl),
[**Luiz Felipe**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/luiz-felipe/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/mattneleigh/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/perlboy1967/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/pete-houston/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/peter-campbell-smith/perl/ch-1.pl),
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/pokgopun/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/roger-bell-west/perl/ch-1.pl),
[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/ryan-thompson/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/ulrich-rieke/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/wlmb/perl/ch-1.pl)

On perusing our member-generated literature on this first task, it seems that beyond the usual nit-picking about exactly what is being requested here, and how to interpret various alternate readings of the description text, no one can quite figure out *why* we would ever wish to perform this particular action.

It remains a mystery.

But then again that's no mind. We don't *need* a story to do the job. We have an assignment and simply need to assemble an algorithm to perform it.

There was the usual confusion as to the details, in this case exactly what was meant by "unique pairs". Does this refer to indices or actual values? Obviously a duplicated index will contain the same value, but with the second option a duplicated value in the list will also trigger the exception case. As we are left in the dark about why we're performing this analysis we can't definitively decide without context.


There were 28 submissions for the first task this past week.

## a little BIT of THIS, and a little BIT of THAT
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/roger-bell-west/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/mohammad-anwar/perl/ch-1.pl),
[**Ali Moradi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/deadmarshal/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/mattneleigh/perl/ch-1.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/alexander-pankoff/perl/ch-1.pl),
[**Luiz Felipe**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/luiz-felipe/perl/ch-1.pl),
[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/ryan-thompson/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/pete-houston/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/james-smith/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/e-choroba/perl/ch-1.pl), and
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/perlboy1967/perl/ch-1.pl)

The unique index interpretation of the "unique pairs" directive was quite popular, but we did see ideas about unique values also implemented. Several in fact. Or even unique *pairs*, meaning duplicate values were ok, but only once. Hmmm. Some people explored several alternate options.

Due to this ambiguity I took any reasonable interpretation to be valid. Myself, I read pairs as pairings of indices. YMMV.

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/roger-bell-west/javascript/ch-1.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/roger-bell-west/kotlin/ch-1.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/roger-bell-west/lua/ch-1.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 163: Sums and Sums](https://blog.firedrake.org/archive/2022/05/The_Weekly_Challenge_163__Sums_and_Sums.html)

We'll start with Roger, with an example of interpreting the directive as unique index pairings. Viewed this way, the matching up becomes a problem of combinatorics: how many selections of 2 unique index positions can be gathered from the input?

The bitwise AND operation is commutative, as A & B = B & A, so we are looking for combinations, which are unordered, versus permutations, which are. Assessing combinations, the pairings (1,2) and (2,1) are equivalent.

A simple way to perform this basic action, known as "*n* choose 2" is to import a function to perform it, such as `combinations()` from `Algorithm::Combinatorics`. In common usage, this delivers an iterator function, that when `next` is called on it returns the anonymous array pairings of the various combinations. Reading through these, we can access the elements and apply the bitwise operations, accumulating a sum of the results along the way.

```perl
    use Algorithm::Combinatorics qw(combinations);

    sub sumbitwise {
      my $ls = shift;
      my $iter = combinations($ls,2);
      my $s = 0;
      while (my $c = $iter->next) {
        $s += $c->[0] & $c->[1];
      }
      return $s;
    }
```

[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/mohammad-anwar/perl/ch-1.pl)

Here's a very similar demonstration from Mohammad. With `Algorithm::Combinatorics`, if we call `combinations` in a list context the complete list of combinations is returned as an array of arrays. Done this way we can create a loop using a statement modifier, putting the summation in a single line.

```perl
    sub bitwise_and {
        my ($numbers) = @_;

        return unless @$numbers;

        my $sum = 0;
        $sum += $_->[0] & $_->[1] for (combinations($numbers, 2));

        return $sum;
    }
```

[**Ali Moradi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/deadmarshal/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/deadmarshal/c/ch-1.c), [C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/deadmarshal/cpp/ch-1.cpp), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/deadmarshal/lua/ch-1.lua), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/deadmarshal/pascal/ch1.pas)

Then again, the algorithm to match up combinations from a list is quite simple: take the first element, then match it to each element following to make one combination per selection. Then advance to the next element and repeat the process. Only matching to those elements further up the array removes self-pairings from the mix along with any duplicates, such as (2,1) in addition to the already-gathered (1,2).

There really isn't a need for a module to construct the pairings, as nested loops will  do the job quite well.

Here Ali uses two `for` loops.

```perl
    sub sum_bitwise_operator{
      my ($arr) = @_;
      my $sum = 0;
      for(my $i = 0; $i < @$arr; ++$i){
        for(my $j = $i+1; $j < @$arr; ++$j){
          $sum += $arr->[$i] & $arr->[$j];
        }
      }
      $sum;
    }
```

[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/mattneleigh/perl/ch-1.pl)

Matthew spices things up a bit with a detailed report mirroring the descriptive text from the examples. Once he has passed the input array through a pair of nested loops to create a list of individual pairings, this list is then processed to create both the output value and a report string constructed from the steps used to arrive there.

I find the string assembly to be the more interesting part of the solution. Most of the submissions follow either one or the other of the two patterns we have seen so far to construct the pairings.

You may notice that we are still treating "unique" to mean unique index pairings. This was by far the most common approach.

```
    Input: @n = (3, 4, 3, 3)
    Output: 9

    Since (3 & 4) + (3 & 3) + (3 & 3) + (4 & 3) + (4 & 3) + (3 & 3)  =>  0 + 3 + 3 + 0 + 0 + 3  =>  9
```


```perl
    foreach $set (@sets){
        my @pairs = unique_pairs_from_list(@{$set});
        my $sum = 0;
        my $shown_work;

        # Do the math and document it; this will be
        # shared later...
        $shown_work = sprintf(
            "Since %s  =>  %s  =>  %d",
            join(" + ", map("(".$_->[0]." & ".$_->[1].")", @pairs)),
            join(
                " + ",
                map(
                    # Where the actual math happens... and also
                    # some output generation
                    { my $a = ($_->[0] & $_->[1]); $sum += $a; $a; }
                    @pairs
                )
            ),
            $sum
        );

        printf("Input: \@n = (%s)\n", join(", ", @{$set}));
        printf("Output: %d\n\n", $sum);
        print("$shown_work\n\n\n");
    }

    sub unique_pairs_from_list{

        return(undef) unless(scalar(@ARG) > 1);

        my @pairs = ();

        for my $i (0 .. ($#ARG - 1)){
            for my $j (($i + 1) .. $#ARG){
                push(@pairs, [$ARG[$i], $ARG[$j]]);
            }
        }

        return(@pairs);
    }

```

[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/alexander-pankoff/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/alexander-pankoff/haskell/ch-1.hs)

Alexander breaks up his process along a very functional programming paradigm, with a collection of discrete processing units that each perform one specific task. We end up with a familiar process best understood if read backwards from the tail, or in this script fragment, upwards from the bottom. The general purpose `combinations` function takes a list and a group size and returns an array of arrays. This is called by `unique_pairs()` as a wrapper, supplying the request for 2-element sets. In turn this is called from `sum_bitwise_operator()` which processes the array-of-arrays returned first with a `map`, applying the bitwise operator to each of the paired elements in an individual combination to return a single value. Then finally the list of result values is itself summed.

```perl
say sum_bitwise_operator(@n);

sub sum_bitwise_operator(@n) {
    sum0( map { $_->[0] & $_->[1] } unique_pairs(@n) );
}

sub unique_pairs(@xs) {
    return combinations( 2, @xs );
}

sub combinations ( $size, @xs ) {
    return if !@xs;
    return map { [$_] } @xs if $size == 1;

    my @out;
    for my $index ( 0 .. $#xs ) {
        my @rest = @xs[ $index + 1 .. $#xs ];
        for my $comb ( combinations( $size - 1, @rest ) ) {
            push @out, [ $xs[$index], @$comb ];
        }
    }

    return @out;
}
```

[**Luiz Felipe**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/luiz-felipe/perl/ch-1.pl)

Luiz arrives at his combination pairings again using two loops, this time using a `for` loop nested in a `while`. The first items in the list is successively paired with the remaining individual elements, and afterwards `shift` is employed to discard the first element. The loop then restarts with the shortened list.

```perl
    sub sum_bitwise {
        my (@numbers, $sum);

        @numbers = @_;

        $sum = 0;
        while (scalar @numbers != 0) {
        	my ($first);

        	$first = $numbers[0];
        	for my $i (1..$#numbers) {
        		$sum += $first & $numbers[$i];
        	}

        	shift @numbers;
        }

        return $sum;
    }
```

[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/ryan-thompson/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/ryan-thompson/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC 163 › A tail of two sums - Ryan J Thompson](https://ry.ca/2022/05/a-tail-of-two-sums/)

The esteemed Mr. Thompson has figured out a way of using two nested `map` functions, applying the bitwise operator across arrays of indices, and referencing the array directly from the argument stack. This makes for a very tight, compact solution.

```perl
    say sum_bitwise(@ARGV);

    sub sum_bitwise {
        sum map {
            my $i = $_;
            map {
                $_[$i] & $_[$_]
            } $i+1..$#_
        } 0..$#_
    }
```

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/pete-houston/perl/ch-1.pl)

All of the examples we've seen so far have taken the interpretation of "unique pairs" as unique indices within the array — each element is paired with every other element exactly once. One the other hand, this directive could also be taken to mean unique values, and on re-inspection there is no specific restriction on the values other than they should be positive. They don't even need to be integers.

Here Pete filters his input list using the `uniqint()` function from the core module `List::Util`. This removes duplicate values from the list, whist coercing them to integer form at the same time. This last part isn't strictly necessary as this will happen anyway — bitwise operations don't really make sense with floats. There is no retriction that we use integers, however although the operator will accept a real number it will quietly truncate it before processing.

Given the list (3,3,3), the filter will only pass the single value (3). As there is no second value to pair it to the result of the sum remains 0.

```perl
    use List::Util 1.55 'uniqint';
    use Math::Combinatorics;

    my $combo = Math::Combinatorics->new (
        count => 2,
        data  => [uniqint @ARGV]
    );

    my $tot = 0;
    while (my @c = $combo->next_combination) {
        $tot += $c[0] & $c[1];
    }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/e-choroba/perl/ch-1.pl)

Choroba, on the gripping hand, gives a *third* reading of unique: that any pair of values is allowed, but only once. Thus in evaluating the list (3,3,3), the result will be a single counting of the expression (3 & 3), resulting in binary 11, or decimal 3.

```perl
    sub sum_bitwise_operator {
        my $sum = 0;
        my %seen;
        for my $i (1 .. $#_) {
            for my $j (0 .. $i - 1) {
                my @pair = sort { $a <=> $b } @_[$i, $j];
                $sum += $pair[0] & $pair[1] unless $seen{"@pair"}++;
            }
        }
        return $sum
    }
```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/perlboy1967/perl/ch-1.pl)

And finally, as though we don't already have enough, Niels brings yet *another* ambiguous reading to the table in the first of his two competing interpretations, which themselves give differing results in certain cases. For the two original task examples the results, however, are the same.

So what has Niels done?

Here he presents (1,3) and (3,1) as completely different combinations. That's novel. With a different operation, say division, these would indeed produce different outcomes. One could I suppose argue that the fact that the bitwise AND *just happens* to be commutative could be viewed as circumstantial and irrelevant. It's an interesting take, certainly. "Combinations" does not need to be taken in a literal mathematical sense, either, but could be viewed more colloquially. This technique returns 3 for the input (3,3,3), allowing one single group of (3,3) to be evaluated.

Niels' second submission is in my eyes a little more justifiable in its interpretation, with the removal of duplicate values from the input list. Padding the input with a couple of 0s ensures a real result no matter what happens in the filtration. In this take, (3,3,3) returns that 0, as the expressions eventually evaluated are (0 & 0), (0 & 3), and (0 & 3), which sum as 0 + 0 + 0.

```perl
    # Assumption on andSum1:
    #
    # Unique combinations of (1,1,3) results in:
    #
    #    (1 & 1) + (1 & 3) + (3 & 1)
    #
    # as left hand side and right hand side of the '&' is three time q unique combination
    #
    # Note: Add (0,0) to always have two harmless values in the list
    sub andSum1 {
      return sum map{$_->[0]&$_->[1]}combinations([0,0,singleton(@_),map{($_)x2}duplicates(@_)],2);
    }

    # andSum2 is a more simplistic algorithm:
    # Work on the unique numbers given (remove duplicates)
    #
    # Note: Add (0,0) to always have two harmless values in the list
    sub andSum2 {
      return sum map{$_->[0]&$_->[1]}combinations([0,0,uniq@_],2);
    }
```



## Blogs and Additional Submissions in Guest Languages for Task 1:



[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/adam-russell/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/adam-russell/java/ch-1.java), [Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/adam-russell/prolog/ch-1.p)


&nbsp;&nbsp;**blog writeup:**
[Bitwise And Sums and Skip Summations: Somewhat Complicated Uses of Map - Perl - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/05/08)

&nbsp;&nbsp;**blog writeup:**
[Bitwise And Sums and Skip Summations: Somewhat Complicated Uses of Map - Prolog - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/05/08)


[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/arne-sommer/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/arne-sommer/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Sum and Sum Again with Raku and Perl - Arne Sommer](https://raku-musings.com/sum-sum.html)


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/athanasius/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/athanasius/raku/ch-1.raku)


[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/colin-crain/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/colin-crain/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[That's Some Operator You Got There - Programming Excursions in Perl and Raku](https://colincrain.com/2022/05/06/thats-some-operator-you-got-there/)


[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/dave-jacoby/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Sum(mation)s: The Weekly Challenge #163 | Committed to Memory](https://jacoby.github.io/2022/05/02/summations-the-weekly-challenge-163.html)


[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/duncan-c-white/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/duncan-c-white/C/ch-1.c), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/duncan-c-white/pascal/ch-1.pas)


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC163 - Sum Bitwise Operator - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/05/03/pwc163-sum-bitwise-operator/)



[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/jaldhar-h-vyas/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/jaldhar-h-vyas/raku/ch-1.sh)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 163](https://www.braincells.com/perl/2022/05/perl_weekly_challenge_week_163.html)


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/james-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #163](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-163/james-smith)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/laurent-rosenfeld/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 163: Sum Bitwise Operator and Summations](http://blogs.perl.org/users/laurent_r/2022/05/perl-weekly-challenge-163-sum-bitwise-operator-and-summations.html)


[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/peter-campbell-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Lot of ands and a strange grid](https://pjcs-pwc.blogspot.com/2022/05/lot-of-ands-and-strange-grid.html)




[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/pokgopun/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/pokgopun/go/ch-1.go)



[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/ulrich-rieke/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/ulrich-rieke/cpp/ch-1.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/ulrich-rieke/haskell/ch-1.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/ulrich-rieke/raku/ch-1.raku)


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/wlmb/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 163 – W. Luis Mochán](https://wlmb.github.io/2022/05/02/PWC163/)



------------------------------------------





---

# TASK 2 {#PWC163TASK2}

# Summations
*Submitted by: Mohammad S Anwar*

You are given a list of positive numbers, @n.

Write a script to find out the summations as described below.

**Example 2**

```
    Input: @n = (1, 2, 3, 4, 5)
    Output: 42

        1  2  3  4  5
           2  5  9 14
              5 14 28
                14 42
                   42
```

The nth Row starts with the second element of the (n-1)th row. The following element is sum of all elements except first element of previous row. You stop once you have just one element in the row.

**Example 2**

```
    Input: @n = (1, 3, 5, 7, 9)
    Output: 70

        1  3  5  7  9
           3  8 15 24
              8 23 47
                23 70
                   70
```


## about the solutions
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/adam-russell/perl/ch-2.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/alexander-pankoff/perl/ch-2.pl),
[**Ali Moradi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/deadmarshal/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/arne-sommer/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/athanasius/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/jo-37/perl/ch-2.pl),
[**Julien Fiegehenn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/julien-fiegehenn/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/laurent-rosenfeld/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/lubos-kolouch/perl/ch-2.pl),
[**Luiz Felipe**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/luiz-felipe/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/mattneleigh/perl/ch-2.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/mohammad-anwar/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/perlboy1967/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/pete-houston/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/peter-campbell-smith/perl/ch-2.pl),
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/pokgopun/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/roger-bell-west/perl/ch-2.pl),
[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/ryan-thompson/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/ulrich-rieke/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/wlmb/perl/ch-2.pl)


For our second task this week we are again beset with a task that offers up no immediate overarching purpose. In light of this the job becomes first to figure out first what it is exactly we are being asked to do, and then to enact the process, and finally to print the results. Each of these steps provides its own set of challenges.

The reduction itself is an amalgam of several steps, repeated until a single value remains. The relationship between the input list and the final value produced is not immediately obvious, nor its utility. But again, like the previous task, this is of no mind. We don't need to know *why* to do what we need to do. It's generally helpful to know, of course, especially to resolve ambiguities in the challenge description, but we can alway power through without these extra details. And, you know, hope for the best.

Once we have the steps of the process figured out, we need to construct a machine to accomplish them, repeating the pattern until we arrive at the final state of having a single value in our list. As is often the case, once we have really wrapped our heads around the complexities of the process requested, the technical implementation comes almost as an afterthought, and all we need to do is install the parts in the right places to do what we need to do — the design work has already been done.

I think that's why I liked this challenge so much, that this whole process taken as a whole models and simulates real-world problem solving so well: the real problem to be solved is figuring out what the problem is, and once that's done the implementation is often incidental.

The third, optional aspect of the task is the graphical display of the data processing. Because the connection between the input and output is, as we have said, not obvious, checking and tuning the algorithm is complicated. Looking at the results for an arbitrary list, how do we know what the right answer even is?

By constructing the triangular list reduction graphically we can look to see if we're summing the correct values and carrying them forward as directed. Creating strings that when printed form the right-aligned columns is a clever bonus challenge in itself. Some people took it on themselves to present the data this way, which I must say in more interesting output than a single value, as it provides valuable context on how we arrived there.

There were 28 submissions for the second task this past week.

## a SPIKE, a WEDGE, and a PIECE of the PIE
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/mattneleigh/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/peter-campbell-smith/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/ulrich-rieke/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/jaldhar-h-vyas/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/jo-37/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/wlmb/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/dave-jacoby/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/polettix/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/athanasius/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/colin-crain/perl/ch-2.pl), and
[**Julien Fiegehenn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/julien-fiegehenn/perl/ch-2.pl)

Figuring out the rules of the summation, as I said before, proved to be the most complicated part of this task. We saw a couple of approaches to the summing steps, either continuously re-summing at each position or reusing the previous sum and updating it with each new element in a row.

Printing the triangular table was not required but many people chose to do it anyways, for the challenge. Getting the individual columns correctly spaced and aligned was a bit tricky, but Perl's extensive string-processing talents allowed several submissions to make pleasing graphical output with a moderate amount of extra efort.


[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/mattneleigh/perl/ch-2.pl)

Matthew seems to relish the technical challenges of reproducing the exact results presented in the examples section of the task — commentary, notes and all. As such it makes sense to start big with his demonstration.

The reduction itself does not easily lend itself to words. We start with a list of elements. At each iteration the very first thing we do is remove the first element from consideration, shortening the list by 1. Thus after a number of iterations the list will always eventually only contain one remaining element.

The second step of the process is to create a new list, with each element replaced by the sum of all elements from the most-recently shortened list from the 0 index up to and including the element. So the first element remains unchanged, the second becomes the sum of the first and second, the third the sum of the first, second and third. This is completed for all the elements in the shortened list.

For the third step we replace the previous list with the new and repeat the process. By trimming the list one element every time we go around, we will, as we said, eventually and inevitably only have one element left.

```
    Input: @n = (2, 4, 50, 83, 6, 5, 9)
    Output: 4710

            2    4   50   83    6    5    9
                 4   54  137  143  148  157
                     54  191  334  482  639
                         191  525 1007 1646
                              525 1532 3178
                                  1532 4710
                                       4710
```

To do the summation, Matthew does a couple of things. First, he switches up the logic to avoid recomputing the same sums for each new element. As each element in the new list is the sum of the previous elements plus the element itself, and the sum of the *previous* element is the sum of all elements previous to that, then we can recursively redefine the summation step to be each element, working from the left, as the previous element sum plus  itself. We re-use the previous calculation as a partial sum for the next calculation, and in the creation of each row each element is only added once.

Matthew then wraps this stepwise summation in recalculating the list into a recursive framework, with the function calling itself and trimming one element at each instance until the exit case is found, when a single value remains.

```perl
    sub compute_list_summation{
        my $global_listref = shift();

        my @stage_list;

        # Loop over the last N-1 numbers in the list
        # and add the running total to a new list
        shift();
        push(@stage_list, $ARG[0]);
        for my $i (1 .. $#ARG){
            push(@stage_list, $stage_list[$#stage_list] + $ARG[$i]);
        }

        # Store the list if requested to do so
        push(@{$global_listref}, \@stage_list)
            if(defined($global_listref));

        # If there was just one sum generated, return
        # it
        return($stage_list[0])
            if(scalar(@stage_list) == 1);

        # Otherwise call ourselves on the sum list,
        # return what the deeper call found
        return(compute_list_summation($global_listref, @stage_list));

    }
```

For output, the intermediate arrays are preserved in a global variable. Creating the triangular grid is tricky, as it needs to be padded from the left to align properly. A little math on the final result value tells us how large to make the columns.

```perl
    # See how many digits we'll need to handle...
    $digits = ceil(log($summation) / log(10));

    # Stick the input list at the head of the list of
    # summation stages and output them in a pretty
    # fashion
    unshift(@{$listref}, $list);
    foreach(@{$listref}){
        printf(
            "%".(4 + scalar(@{$list}) * ($digits + 1))."s\n",
            join(" ", map(sprintf("%".$digits."d", $_), @{$_}))
        );
    }
    print("\n");
```

[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/peter-campbell-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Lot of ands and a strange grid](https://pjcs-pwc.blogspot.com/2022/05/lot-of-ands-and-strange-grid.html)

As we know the size of the input list, an open-ended recursion model is not required; rather a fixed loop can be substituted. Or in Peter's case a pair of nested loops, to loop through the list-shortening iterations and then internally across the elements in the lists. He also chooses to just construct a single multidimensional array that closely models the output. Using the same trick of using the previous calculation as a partial sum for the next, the value substitutions can be done in-place as the triangular grid is first computed.

Logarithms are undeniably cool, but here Peter queries Perl as to the length of the reduced value to find his column width. Because in Perl, numbers are strings, and strings are numbers, and problem solving can often be reduced to verbally describing what you want to do. "How long is it?"

Which is as Larry intended it to be.


```perl
       $rows = scalar @n;

       # create a grid of the output
       for $row (0 .. $rows - 1) {
       	for $col (0 .. $rows - 1) {

       		# the first row is just the input
       		if ($row == 0) {
       			$grid[0][$col] = $n[$col];

       		# any cell where $col < $row is blank - so make it 0 for now
       		} elsif ($col < $row) {
       			$grid[$row][$col] = 0;

       		# all the other cells are the sum of the cell to the left and the cell above
       		} else {
       			$grid[$row][$col] = $grid[$row - 1][$col] + $grid[$row][$col - 1];
       		}
       	}
       }

       # for a nice output the width of each column is the width of the final cell + 1
       $width = length($grid[$rows - 1][$rows - 1]) + 1;

       # output the result - padded to $width, or if zero, just $width spaces
       say '';
       for $row (0 .. $rows - 1) {
       	for $col (0 .. $rows - 1) {
       		print $grid[$row][$col] ? sprintf("\%${width}d", $grid[$row][$col]) : (' ' x $width);
       	}
       	say '';
       }
```

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/ulrich-rieke/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/ulrich-rieke/cpp/ch-2.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/ulrich-rieke/haskell/ch-2.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/ulrich-rieke/raku/ch-2.raku)

Not all the solutions were this complicated, not did they need to be. An output number was all that was requested, and once you wrap your head around what is required the steps are relatively straightforward. Here Ulrich uses an array slice to select only the elements he wishes to sum in building his new list, which is then substituted for the old abd reprocessed. It's quite elegant, really.

```perl
    my @output = @numbers ;  ## processed input string
    while ( scalar( @output ) != 1 ) {
      @output = createOutputList( \@output ) ;
    }
    say $output[0] ;

    sub createOutputList {
      my $input = shift ;
      my $len = scalar( @{$input} ) ;
      my @output ;
      for my $current( 1 .. $len - 1 ) {
          push @output , sum( @{$input}[1 .. $current] ) ;
      }
      return @output ;
    }
```

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/jaldhar-h-vyas/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/jaldhar-h-vyas/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 163](https://www.braincells.com/perl/2022/05/perl_weekly_challenge_week_163.html)

Analogous to the dynamic construction we saw before, using partial sums, we can further compress the solution to incorporate this technique.

Here Jaldhar builds a new list, calculating each value by summing a running total and the previous list's value at the position. A swap using an array slice again and we repeat until finished.

```perl
    my @previous = @n[1 .. $#n];
    my $total;

    while (scalar @previous) {
        $total = $previous[0];
        my @next = ( $total );

        for my $i (1 .. scalar @previous - 1) {
            $total += $previous[$i];
            push @next, $total;
        }

        @previous = @next[1 .. $#next];
    }

    say $total;
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/jo-37/perl/ch-2.pl)

Several times now I have referred to our list summation as a "reduction" without explanation. For those unfamiliar, beyond the hopefully clear commonplace meaning I'm using the word in a technical sense as well: a process of taking a list of elements and reducing the values to a single result is known in functional programming as reduction, and this is indeed what we are doing here. Specifically a reduction works by taking a single element from a list, and then applying some sort of function that that takes this original value and the next list element as an argument, preserving the running result to apply to the next element in the list. When we run out of elements, the result is returned.

Simple list summation can be viewed as a reduction: take the first element, and add the second, storing the result, and then, using the stored result adding the third and continuing until we reach the end of the list. Similarly a `max` function would replace the stored result with the new element if it was greater, otherwise keeping it intact. In all cases it is the stored result that is returned in the end.

The core `List::Util` module supplies a `reduce()` function, that when configured with various function blocks can be used as an archetype of all manner of listwise processing. However it also provides a variant form, `reductions()` which under the correct circumstances can be extremely handy. Instead of only returning the single final stored result, `reductions` returns a list of all of the stored values collected when traversing the input, with the final element the reduction total.

If you visualize this you can see the list of partial reductions is the same as the list of partial sums we are creating as we work across our input. Here Jorg calls `reductions` using a `while` loop as a statement modifier. The applied block adds `$a`, the running stored value, to `$b`, the next element, selecting elements using the now-familiar array slice that only passes the list tail.

Written this way the logic is extremely compact, essentially a single line of processing.

```perl
    sub triangular_sum (@n) {
        # Calculate the running sums over the array starting with the second
        # element until the array becomes a singleton.
        @n = reductions {$a + $b} @n[1 .. $#n] while @n > 1;

        $n[0];
    }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/wlmb/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 163 – W. Luis Mochán](https://wlmb.github.io/2022/05/02/PWC163/)

Luis takes a unique mathematical approach to the summation. One could say that instead of repeatedly reducing the list, he sets his eyes wider, on reducing the sets of equations used to compute the result.

The requested processing, Luis notes, is all an elaborate summation created from the values of the input list. At each iteration, elements from the list are substituted with partial sums already created from the list, resulting in each element being added to the final result multiple times depending on its positioning within the original list. The number of times each number is represented can be computed, and an equation built to directly compute the result from the input.

Instead of performing the multiple summations, Luis creates a function `f()`, that directly calculates the coefficients for this equation.

Please have a look at his [writeup of the method](https://wlmb.github.io/2022/05/02/PWC163/). It's fascinating.

```perl
    my @in  = reverse split /\s+/;
    my $N   = @in-1;
    my $sum = 0;
    $sum += f($N, $_) * $in[$_] for(0..$N);
    say "Input: $_ Output: $sum";

    sub f {
        my ($n,$m) = @_;
        return 1 if $m == 0;
        return 0 if $n == $m;
        f($n-1, $m) + f($n,$m-1);
    }
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/dave-jacoby/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Sum(mation)s: The Weekly Challenge #163 | Committed to Memory](https://jacoby.github.io/2022/05/02/summations-the-weekly-challenge-163.html)

Dave described his submission as "just workmanlike". I have included it here out of respect for all of us who make stuff for a living.

Many years ago, I typified Perl programmers as "the new quiltmakers". All day long I would solve puzzles, as tiny pieces of code, perfect squares that I would then stich together into sometimes vast tapestries. A CGI interface here, a DBI backend there, documents being parsed out from exotic file formats over next door — all to populate the nascent world wide web. Grey-Eyed Athena was my personal guide, Goddess of wisdom, electricity and weaving. How perfect was that? She's still my favorite, hands down.

```perl
    sub summations ( @n ) {
        my $max = -1 + scalar @n;
        my @x   = map {
            [ map { '' } 0 .. $max ]
        } 0 .. $max;
        $x[0]->@* = @n;

        for my $i ( 1 .. $max ) {
            for my $j ( $i .. $max ) {
                my $left  = $x[$i][ $j - 1 ] || 0;
                my $above = $x[ $i - 1 ][$j] || 0;
                $x[$i][$j] = $left + $above;
            }
        }
        return $x[$max][$max];
    }
```


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC162 - Summations - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/05/04/pwc163-summations/)

Flavio has produced an extremely compact version of a couple of nested loops for us. We've seen this pattern before, but it has had an impressive amount of fat removed. In his own words, he fell back to this technique after exporing some more sophisticated avenues. "My brute force beast was screaming inside."

```perl
    sub summations (@n) {
       for (2 .. $#n) { $n[$_] += $n[$_ - 1] for $_ .. $#n }
       return $n[-1];
    }
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/athanasius/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/athanasius/raku/ch-2.raku)

The monk delivers us another carefully crafted solution with optional verbose output, the way it should be. Life should have choices, you know? It keeps everything from being the same: out of control. Don't ask me how I know that.

But anyway, by necessity when we might wish to reconstruct our work after the fact we need to keep notes along the way; here the triangle is built as a multidimensional array-of-arrays, and to return the result we grab the first element of the last row.

```perl
    while (scalar @last > 1)
    {
        push @next, $next[ $_ - 2 ] + $last[ $_ ] for 2 .. $#last;
        push @triangle,  [ @next ];

        @last = @next;
        @next = $last[ 1 ];
    }

    printf "Output: %d\n", $triangle[ -1 ][ 0 ];
```

[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/colin-crain/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/colin-crain/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[And a Little Something More&#8230; - Programming Excursions in Perl and Raku](https://colincrain.com/2022/05/06/and-a-little-something-more/)

For my own solution, after figuring out the process I was left unsatisfied looking at a simple number, and so I decided to graft on a pretty-printing routine, which I made possible with the introduction of a new global variable, `our @stack`. Then inside the `while` loop, every time we compute a new array a copy is made over onto the stack. Later we can retrieve it if requested, where individual array rows are printed using a carefully constructed `sprintf`. It seems I've become so addicted to the convenience of `say` that I'd rather leave the linefeeds to that statement, instead of incorporating something into the formatting of a `printf`. It's much cleaner in my eyes, and presumably more portable to boot.

```perl
    our @stack;

    sub trisum (@list) {
        my $sum;
        my @new;
        @stack = [@list];

        while (@list > 1) {
            @new = ();
            $sum = 0;

            shift @list;
            for (keys @list) {
                $sum += $list[$_];
                push @new, $sum;
            }
            push @stack, [@new];
            @list = @new;
        }
        print_stack_and_flush() if VERBOSE;

        return shift @new;
    }


    sub print_stack_and_flush {
        my $elements   = @stack;
        my $max_digits = length $stack[-1]->[0];
        my $fmt = ('%' . ($max_digits + 1) . 's') x $elements;

        say "\ntriangular reduction steps:\n";

        for my $row (@stack) {
            unshift $row->@*, '' while $row->@* < $elements;
            say sprintf $fmt, $row->@*;
        }

        say "sum  $stack[-1]->[-1]\n";

        @stack = ();
    }
```

[**Julien Fiegehenn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/julien-fiegehenn/perl/ch-2.pl)

Finally we'll end with Julien, who makes a curious little observation I don't recall seeing elsewhere: that if we're going to trim the first element in any case, we can in actuality stop when we have *two* elements, and just take the second. How about that?

Yea, it's minor, but I find it funny. Perhaps I need more sleep.

Kudos to Julien — his comments tell the story.

```perl
    sub foo {
        my @rows;
        $rows[0] = [@_];

        # we'll keep going as long as we have more than 2 elements left
        while ( @{ $rows[-1] } > 2 ) {
            push @rows, [

                # we always start with the 2nd element of the previous row
                $rows[-1]->[1],

                # each following element is the sum of all numbers from the
                # 2nd element until the position (not index, but position in
                # the tabular view above) we are currently filling, of
                # the previous row.
                map { sum @{ $rows[-1] }[ 1 .. $_ ] } 2 .. $#{ $rows[-1] }
            ];
        }

        # We're supposed to stop and return when we only have one element left,
        # but it is actually easier to stop at two elements left. The last row
        # is just the 2nd element of the row before, so we can return that directly.
        return $rows[-1]->[-1];
    }
```



## Blogs and Additional Submissions in Guest Languages for Task 2:


[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/adam-russell/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/adam-russell/java/ch-2.java), [Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/adam-russell/prolog/ch-2.p)


&nbsp;&nbsp;**blog writeup:**
[Bitwise And Sums and Skip Summations: Somewhat Complicated Uses of Map - Perl - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/05/08)

&nbsp;&nbsp;**blog writeup:**
[Bitwise And Sums and Skip Summations: Somewhat Complicated Uses of Map - Prolog - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/05/08)


[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/alexander-pankoff/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/alexander-pankoff/haskell/ch-2.hs)


[**Ali Moradi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/deadmarshal/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/deadmarshal/c/ch-2.c), [C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/deadmarshal/cpp/ch-2.cpp), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/deadmarshal/lua/ch-2.lua), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/deadmarshal/pascal/ch2.pas)


[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/arne-sommer/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/arne-sommer/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Sum and Sum Again with Raku and Perl - Arne Sommer](https://raku-musings.com/sum-sum.html)


[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/cheok-yin-fung/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/cheok-yin-fung/julia/ch-2.jl), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/cheok-yin-fung/python/ch-2.py)


[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/duncan-c-white/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/duncan-c-white/C/ch-2.c), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/duncan-c-white/pascal/ch-2.pas)


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/james-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #163](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-163/james-smith)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/laurent-rosenfeld/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/laurent-rosenfeld/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 163: Sum Bitwise Operator and Summations](http://blogs.perl.org/users/laurent_r/2022/05/perl-weekly-challenge-163-sum-bitwise-operator-and-summations.html)


[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/pokgopun/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/pokgopun/go/ch-2.go)


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/roger-bell-west/javascript/ch-2.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/roger-bell-west/kotlin/ch-2.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/roger-bell-west/lua/ch-2.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/roger-bell-west/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/roger-bell-west/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 163: Sums and Sums](https://blog.firedrake.org/archive/2022/05/The_Weekly_Challenge_163__Sums_and_Sums.html)


[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/ryan-thompson/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-163/ryan-thompson/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC 163 › A tail of two sums - Ryan J Thompson](https://ry.ca/2022/05/a-tail-of-two-sums/)


------------------------------------------





---

<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>

<center>
<h1 id="PWC163BLOGS">_________ THE BLOG PAGES _________</h1>
</center>


---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, by some miracle I somehow continue to maintain my bearings.**

**Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your Unquenchable *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC163BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *FOLLOW* these *BLOG* *LINKS*:

**( ...*don't think, trust your training, you're in the zone, just do it ...* )**


**Adam Russell**

 * [Bitwise And Sums and Skip Summations: Somewhat Complicated Uses of Map - Perl - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/05/08) ( *Perl* )
 * [Bitwise And Sums and Skip Summations: Somewhat Complicated Uses of Map - Prolog - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/05/08) ( *Prolog* )

**Arne Sommer**

 * [Sum and Sum Again with Raku and Perl - Arne Sommer](https://raku-musings.com/sum-sum.html) ( *Perl & Raku* )

**Colin Crain**

 * [That's Some Operator You Got There - Programming Excursions in Perl and Raku](https://colincrain.com/2022/05/06/thats-some-operator-you-got-there/) ( *Perl & Raku* )
 * [And a Little Something More&#8230; - Programming Excursions in Perl and Raku](https://colincrain.com/2022/05/06/and-a-little-something-more/) ( *Perl & Raku* )

**Dave Jacoby**

 * [Sum(mation)s: The Weekly Challenge #163 | Committed to Memory](https://jacoby.github.io/2022/05/02/summations-the-weekly-challenge-163.html) ( *Perl* )

**Flavio Poletti**

 * [PWC163 - Sum Bitwise Operator - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/05/03/pwc163-sum-bitwise-operator/) ( *Perl & Raku* )
 * [PWC162 - Summations - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/05/04/pwc163-summations/) ( *Perl & Raku* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 163](https://www.braincells.com/perl/2022/05/perl_weekly_challenge_week_163.html) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #163](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-163/james-smith) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 163: Sum Bitwise Operator and Summations](http://blogs.perl.org/users/laurent_r/2022/05/perl-weekly-challenge-163-sum-bitwise-operator-and-summations.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 163: the infinite loop! – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/05/02/PerlWeeklyChallenge163.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 163: the infinite loop! – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/05/02/PerlWeeklyChallenge163.html#task1plperl) ( *PL/Perl* )
 * [Perl Weekly Challenge 163: the infinite loop! – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/05/02/PerlWeeklyChallenge163.html#task1plpgsql) ( *PL/PostgreSQL* )


**Mark Senn**

 * [Sum Bitwise Operator](https://engineering.purdue.edu/~mark/twc-163-1.pdf) ( *Raku* )
 * [Summations](https://engineering.purdue.edu/~mark/twc-163-2.pdf) ( *Raku* )

**Peter Campbell Smith**

 * [Lot of ands and a strange grid](https://pjcs-pwc.blogspot.com/2022/05/lot-of-ands-and-strange-grid.html) ( *Perl* )

**Roger Bell_West**

 * [RogerBW's Blog: The Weekly Challenge 163: Sums and Sums](https://blog.firedrake.org/archive/2022/05/The_Weekly_Challenge_163__Sums_and_Sums.html) ( *Perl & Raku* )

**Ryan Thompson**

 * [PWC 163 › A tail of two sums - Ryan J Thompson](https://ry.ca/2022/05/a-tail-of-two-sums/) ( *Perl & Raku* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 163 – W. Luis Mochán](https://wlmb.github.io/2022/05/02/PWC163/) ( *Perl* )
