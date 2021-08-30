---
author:       Colin Crain
date:         2021-08-30T00:00:00
description:  "Colin Crain › Perl Weekly Review #125"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #125"
image:        images/blog/p5-review-challenge-125.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-124/).* )

Welcome to the Perl review for **Week 125** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-125/) or the summary [**recap**](/blog/recap-challenge-125/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC125TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC125TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC125BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC125TASK1}

# Pythagorean Triples
*Submitted by: Cheok-Yin Fung*<br>

You are given a positive integer $N.

Write a script to print all Pythagorean Triples containing $N as a member. Print -1 if it can’t be a member of any. i

Triples with the same set of elements are considered the same, i.e. if your script has already printed (3, 4, 5), (4, 3, 5) should not be printed.

The famous Pythagorean theorem states that in a right angle triangle, the length of the two shorter sides and the length of the longest side are related by a2+b2 = c2.

A Pythagorean triple refers to the triple of three integers whose lengths can compose a right-angled triangle.

**Example**
```
    Input: $N = 5
    Output:
        (3, 4, 5)
        (5, 12, 13)

    Input: $N = 13
    Output:
        (5, 12, 13)
        (13, 84, 85)

    Input: $N = 1
    Output:
        -1
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/abigail/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/colin-crain/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/polettix/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**
](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/jo-37/perl/ch-1a.pl)
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/pete-houston/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/peter-campbell-smith/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/roger-bell-west/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/wlmb/perl/ch-1.pl)


There were, a bit oddly, only 13 working submissions for the first task this past week.

We are asked for *all* Pythagorean triples for a given value, which didn't happen a surprising amount of the time, in no single consistent manner. Perhaps some people simply missed this detail, but it seems more likely they would have overlooked one of the several  special cases that could provide a triple.

The required input value could be either the lesser of the two legs, the greater, or the hypotenuse. It could be part of a unique primitive form of the triple, or could in certain cases be arrived as part of a multiple of a previously existing one, say a multiple of (3,4,5), which seems to have slipped past some algorithms — several submissions got everything except this option. But as I said there were apparently several ways to go astray.

I used 60 for my test example, which should give 14 solutions. The last is a the (3,4,5) primitive scaled times 12.

```

  60² +  899² = 901²
  60² +  448² = 452²
  60² +  297² = 303²
  60² +  221² = 229²
  60² +  175² = 185²
  60² +  144² = 156²
  60² +   91² = 109²
  60² +   80² = 100²
  60² +   63² = 87²
  45² +   60² = 75²
  32² +   60² = 68²
  25² +   60² = 65²
  11² +   60² = 61²
  36² +   48² = 60²

```

YMMV.

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/james-smith/perl/ch-1.pl)

**blog writeup:** [Perl Weekly Challenge #125](https://github.com/drbaggy/perlweeklychallenge-club/blob/master/challenge-125/james-smith/)

James breaks the problem down into two cases: with the given value either the hypotenuse or a leg, and iterates through a list of candidates for the alternate for each, leg or hypotenuse as the case may be. In both cases the remaining leg is computed using the Pythagorean equation and the square root, and if that value is whole we have found a triple.

Using a functional approach the whole of the processing get encapsulated into a single complex  line:

```perl
    sub get_triples {
      my $n = shift;
      return $n < 3 ? -1 : join '; ', map { sprintf '(%s)', join ', ', @{$_} }
      (
        grep { $_->[1] == int $_->[1] }                ## Check if all int
        map  { [ $_, sqrt($n**2-$_**2), $n ] }         ## Generate triple
        3 .. sqrt($n**2/2)                   ## Shortest side ($n is hypotenuse)
      ),(
        map  { $_->[0]>$_->[1] ? [@{$_}[1,0,2]] : $_ } ## put in numerical order
        grep { $_->[1] == int $_->[1] }                ## Check all int
        map  { [ $n, sqrt($_**2-$n**2), $_ ] }         ## Generate triple
        ($n+1) .. ($n**2/2+1)       ## Hypotenuse ($n is one of other two sides)
      );
    }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/wlmb/perl/ch-1.pl)

**blog writeup:** [Perl Weekly Challenge 125](https://wlmb.github.io/2021/08/10/PWC125/)

Luis makes an  arithmetic breakdown of the equation, noting that it leads to a valid triple being of the form

*k*(*a*<sup>2</sup>-*b*<sup>2</sup>), *k*(2*ab*), *k*(*a*<sup>2</sup>+*b*<sup>2</sup>)

with *b* being less than *a*. With this two loops are constructed, one value up to the given *N*, with the inside iterator less than this value, and a big list is gathered of all possible values *a*, *b* and *k* that satisfy one of these positions.

This list is then gone through to construct the final triples, which need a further step to remove duplicates.

```perl
    use POSIX qw(floor);
    use List::Util qw(uniq);

    my @found=();
    foreach my $a(1..$N-1){
    foreach my $b (1..$a-1){
        push @found, [$a, $b, $_ / ($a**2-$b**2)] if $_ % ($a**2-$b**2)==0;
        push @found, [$a, $b, $_ / (2*$a*$b)] if $_ % (2*$a*$b)==0;
        push @found, [$a, $b, $_ / ($a**2+$b**2)] if $_ % ($a**2+$b**2)==0;
    }
    }
    say "Input; $_\nOutput:";
    say "\t$_" foreach uniq map { #remove duplicates
    my($A,$B,$K)=@$_; # careful not to confuse with $a and $b from sort
    my ($x, $y, $z)=sort {$a <=> $b} map {$K*$_} ($A**2-$B**2, 2*$A*$B, $A**2+$B**2);
    "\t($x, $y, $z)";
    } @found;
    say("\t-1, no result found") unless @found;
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/dave-jacoby/perl/ch-1.pl)

**blog writeup:** [Trees and Triples: The (Perl) Weekly Challenge #125](https://jacoby.github.io/2021/08/09/trees-and-triples-the-perl-weekly-challenge-125.html)

Dave gives us a straightforward solution based around two routines, one each for the cases of *N* as a leg and as the hypotenuse. In each we have a outer and inner loop examining the candidate pairs that with the given value will satisfy the equation.

```perl
    sub pt_a ($n ) {
        my @output;
        my $n2 = $n**2;

        for my $b1 ( 1 .. $n2 ) {
            my $b2 = $b1**2;
            my $c2 = $n2 + $b2;
            my $c  = sqrt $c2;
            next unless int $c == $c;
            my @x = sort { $a <=> $b } map { int $_ } $n, $b1, $c;
            push @output, $json->encode( \@x );
        }
        return uniq @output if @output;
        return undef;
    }

    sub pt_c ($n ) {
        my @output;
        my $n2 = $n**2;

        for my $b1 ( 1 .. $n2 ) {
            my $b2 = $b1**2;
            my $a2 = $n2 - $b2;
            next unless $a2 > 0;
            my $a1  = sqrt $a2;
            next unless int $a1 == $a1;
            my @x = sort { $a <=> $b } map { int $_ } $n, $b1, $a1;
            push @output, $json->encode( \@x );
        }
        return uniq @output if @output;
        return undef;
    }
```

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/abigail/perl/ch-1.pl)

**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/abigail/awk/ch-1.awk), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/abigail/c/ch-1.c), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/abigail/go/ch-1.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/abigail/java/ch-1.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/abigail/lua/ch-1.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/abigail/node/ch-1.js), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/abigail/pascal/ch-1.p), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/abigail/python/ch-1.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/abigail/r/ch-1.r), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/abigail/ruby/ch-1.rb), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/abigail/tcl/ch-1.tcl)

**blog writeup:** [Perl Weekly Challenge 125: Pythagorean Triples](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-125-1.html)

Abigail similarly breaks down the problem into the familiar two cases of leg and hypotenuse, with an unusual twist: the addition of a small helper routine, `introot()`, which gives us the largest integer less than or equal to the square root of a given value.

```perl
    # First case, $n is not the hypothenuse; wlog, assume n = a.
    #
    #   Then, we start searching from c = n + 1 until
    #   c^2 - (c - 1)^2 > n^2. Note that c^2 - (c - 1)^2 = 2c - 1
    #   In each iteration, we calculate b^2 = c^2 - n^2. If b^2 is
    #   a proper square, we have a Pythagorian triple.
    #
    my $n_sq = $n * $n;

    my $c    = $n + 1;
    my $c_sq = $n_sq + 2 * $n + 1;
    while (2 * $c - 1 <= $n_sq) {
        #
        # We now have a^2 (n_sq) and c^2. We can calculate b^2 (b_sq)
        # and check whether this is a proper square.
        #
        my $b_sq = $c_sq - $n_sq;
        my $b    = introot ($b_sq);

        say "$n $b $c" if $b_sq == $b * $b;
        $c_sq += 2 * $c ++ + 1;  # (c + 1)^2 == c^2 + 2 * c + 1
    }

    #
    # Handle the case $n is the hypothenuse, so $n == c.
    #
    # We now need to search for a, b such that a^2 + b^2 = c^2 ($n_sq).
    # Wlog, assume a < b (a == b cannot happen). Then a < c / sqrt (2).
    #
    my $max_a = int ($n / sqrt (2));
    for (my $a = 3; $a <= $max_a; $a ++) {
        my $b_sq = $n_sq - $a * $a;
        my $b    = introot ($b_sq);
        say "$a $b $n" if $b_sq == $b * $b;
    }
```

[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/peter-campbell-smith/perl/ch-1.pl)

Peter reduces his two cases to what amounts to a couple of short lines. His use of an incremented index counter and direct assignment to the `@solutions` array rather then a `push` statement is unusual and interesting.

```perl
    # If c == n:
    # a < b so a**2 < n**2 / 2, so we only need to test values of a < sqrt(n**2 / 2)
    # and solutions are where n**2 - a**2 is an integer square (ie b**2)

    for $a (1 .. int(sqrt($n**2 / 2))) {
        $solutions[$s++] = qq[    ($a, $b, $n)\n] if $b = is_a_square($n**2 - $a**2);
    }

    # If a == n:
    # We are looking for b and c such that c**2 - b**2 == n**2.
    # if t == s + 1 then t**2 - s**2 is 2s + 1, so we only
    # need to test values of b where 2b + 1 < n**2
    # and solutions are where n**2 - b**2 is an integer square (ie a**2)

    for $b (1 .. 2**32) {
        last if 2 * $b + 1 > $n**2;
        $solutions[$s++] = qq[    ($n, $b, $c)\n] if $c = is_a_square($n**2 + $b**2);
    }

    sub is_a_square {
        my $test = sqrt($_[0]);
        return $test == int($test) ? $test : 0;
    }
```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/cheok-yin-fung/perl/ch-1.pl)

CY introduces some inequalities to limit the bounds of her search space in a way we haven't seen elsewhere, with individual cases for the lesser summand, the greater summand and the hypotenuse.

```perl
    sub pyth ($n) {
        my @ans;
        for my $a (1..int $n/sqrt(2) ) {
            my $is_sq = $n*$n-$a*$a;
            if (sqrt($is_sq) == int sqrt($is_sq)) {
                push @ans, [$a, sqrt($is_sq), $n];
            }
        }

        for my $a0 (1..$n-1) {
            my $is_sq = $a0*$a0 + $n*$n;
            if (sqrt($is_sq) == int sqrt($is_sq)) {
                push @ans, [$a0, $n, sqrt($is_sq)];
            }
        }

        # c^2 - b_max^2 >= (b_max+1)^2 - b_max^2 = 2*b_max + 1
        # 2*b_max + 1 <= n^2
        # b_max <= (n^2-1)/2

        for my $b0 ($n+1..int ($n*$n-1)/2) {
            my $is_sq = $b0*$b0 + $n*$n;
            if (sqrt($is_sq) == int sqrt($is_sq)) {
                push @ans, [$n , $b0 ,sqrt($is_sq)];
            }
        }

        return \@ans;
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/polettix/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/polettix/raku/ch-1.raku)

**blog writeup:** [PWC125 - Pythagorean Triples](https://github.polettix.it/ETOOBUSY/2021/08/11/pwc125-pythagorean-triples/)

Flavio brings us an implementation of [Dickson's method](https://en.wikipedia.org/wiki/Formulas_for_generating_Pythagorean_triples#Dickson's_method), which is to find integers *r*, *s*, and *t* such that:

* *x* = *r* + *s*
* *y* = *r* + *t*
* *z* = *r* + *s* + *t*

It follows that *r* is even, and *s* and *t* will be factors of *r*<sup>2</sup> / 2. So a loop is established with an incrementing-by-2 value for *r*, and a function to evaluate factors for *r*<sup>2</sup>. It's a neat technique, I dare say.

```perl
    use List::Util 'first';

    sub factor_in_pairs ($n) {
       map { [$_, $n / $_] } grep { !($n % $_) } 1 .. sqrt($n)
    }

    sub pythagorean_triples ($N) {
       my @retval;
       my $r = 0;
       R:
       while ('necessary') {
          $r += 2;
          for my $pair (factor_in_pairs($r * $r / 2)) {
             my ($s, $t) = $pair->@*;
             my @triple = ($r + $s, $r + $t, $r + $s + $t);
             last R if $s == 1 && $N < $triple[0];
             push @retval, \@triple if first { $N == $_ } @triple;
          }
       }
       return @retval;
    }
```

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/colin-crain/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/colin-crain/raku/ch-1.raku)

**blog writeup:** [Triple Tree Rings](https://colincrain.com/2021/08/15/triple-tree-rings/)

In researching my own solution I constructed an elaborate table of values: for squares, and then the differences between pairs of adjacent squares, then pairs two values apart, then three, four, etc. This in turn led to certain insights into valid constructions of triples — if the difference found was itself a perfect square, than this difference and the table indices would determine the three required values.

From this insight it became apparent that I didn't even need to construct the table, as in both cases of the input value being a leg or the hypotenuse the valid triples for that case can be determined by a simple equation, one for each. We only need to pass through the list of numbers from 1 to *N* using a single loop to find all of them.


```perl
    my $n = shift @ARGV || 60;
    my $sq = $n ** 2;
    my @triples;
    my @summands;

    for my $t (1..$n) {
        ## first we check table columns for summands
        ## the column index is the "triangle length", $t, and the equations
        ## combine this with the index to produce the values
        my $idx = 0;
        my $start = ($t ** 2) + (2 * $t);           ## start index
        ## triangle equation column-wise
        ## skipping by 2t from from start index
        ## if the target square is present get its index
        if ( ($sq - $start) % (2 * $t) == 0 ) {
            $idx = $t + 1 + (($sq - $start) / (2 * $t));
            my @triple = sort {$a<=>$b} ($idx, $n, $idx - $t);
            push @triples, \@triple if $idx > $t;
        }
        ## then we check sum row for summands
        ## all the table fields follow an iterative pattern based off their
        ## index and the column position, the "triangle length" back to the
        ## 0-index and then up the same distance.
        last if $t == $n;                           ## last column is at $n-1
        my $test = (2 * $t * $n) - ($t ** 2);       ## triangle equation
        if ( (int(sqrt($test)))**2 == $test ) {     ## perfect square test
            push @summands, sqrt $test;
        }
    }
    say "summands @summands";
    push @triples, [shift @summands, pop @summands, $n] while @summands;

    say sprintf "%4d² + %4d² = %d²", $_->@* for @triples;
```

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/duncan-c-white/perl/ch-1.pl)

Duncan also brings us a straightforward loop solution. In this method an outer loop is established counting up from 1 to *N*, and an inner loop with a lower bound at the value of the outer and an upper limit that will eventually be reached. This will check all valus for the lesser summand up to the input against values for the greater including the input, follow by values where the lower summand is equal to the input against a larger value that may possibly complete a larger squared hypotenuse. Along the way those pairs that construct a hypotenuse will also be examined, so all cases will be looked at.

```perl
    foreach my $a (1..$n)
    {
        my $a2 = $a * $a;
        for( my $b = $a+1; ; $b++ )
        {
        	last if $a < $n && $b > $n;	# fallen off

        	#say "trying a=$a, b=$b";
        	my $b2 = $b * $b;
        	my $sum = $a2 + $b2;
        	my $c = int(sqrt($sum));

            if( $c == $b )    			# fallen off
            {
                last;
            }

        	next unless $sum == $c * $c;
        	next unless $a==$n || $b==$n || $c==$n;
        	say "found $a $b $c";
        	$found++;
        }
    }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/e-choroba/perl/ch-1.pl)

Choroba uses three distinct cases to handle the input value as each of the lesser and greater legs and the hypotenuse. In each the logic is clear and direct, and you can see how the cases relate to each other. The use of a `continue` block on the last `while` ensures that the counter is incremented before the conditional is reevaluated.

```perl
    sub pythagorean_triples {
        my ($n) = @_;
        my @solutions;
        my $nsquare = $n * $n;

        # A <= B < C

        # A**2 + B**2 = n**2
        for my $A (1 .. $n) {
            my $B = sqrt($nsquare - $A * $A);
            last if $B < $A;

            push @solutions, [$A, $B, $n]
                if $B == int $B;
        }

        # A**2 + n**2 = C**2
        for my $A (1 .. $n) {
            my $C = sqrt($A * $A + $nsquare);
            push @solutions, [$A, $n, $C]
                if $C == int $C;
        }

        # n**2 + B ** 2 = C**2
        my $B = $n;
        while (1) {
            my $C = sqrt($nsquare + $B * $B);
            last if $C - $B < 1;

            push @solutions, [$n, $B, $C]
                if $C == int $C;
        } continue {
            ++$B;
        }

        return @solutions ? \@solutions : -1
    }
```

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/pete-houston/perl/ch-1.pl)

Pete brings in the `Math::Prime::Util` function `is_square()`, which is, well, "handy" is a word that comes to mind. He takes a slightly different analysis, that the given value squared could be computed as either the sum or the difference of two squares. Two loops take care of the cases, the first one, in another unusual twist, counting downward from *N*.

```perl
    # Sum. Count downwards from n.
    my $go = $n;
    while (--$go > 4) {
        next if exists $triples{$go};
        my $sqdiff = $n2 - $go * $go;
        store_if_sq (\%triples, $sqdiff, $n, $go);
    }

    # Difference. Count upwards from n.
    $go = $n;
    my $oldgo2 = $n2;
    while (1) {
        my $go2 = ++$go * $go;
        last if $n2 < ($go2 - $oldgo2);
        my $sqdiff = $go2 - $n2;
        store_if_sq (\%triples, $sqdiff, $n, $go);
        $oldgo2 = $go2;
    }

    sub store_if_sq {
        my ($tri, $sqdiff, @rest) = @_;
        return unless is_square ($sqdiff);
        my $diff = sqrt $sqdiff;
        $tri->{$diff} = [$diff, @rest];
    }
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/roger-bell-west/perl/ch-1.pl)

**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/roger-bell-west/python/ch-1.py), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/roger-bell-west/rust/ch-1.rs)

**blog writeup:** [RogerBW's Blog: Perl Weekly Challenge 125: Pythagorean Diameter](https://blog.firedrake.org/archive/2021/08/Perl_Weekly_Challenge_125__Pythagorean_Diameter.html)

And finally, we have Roger, who uses what he refers to as [Barning's matrices](https://en.wikipedia.org/wiki/Tree_of_primitive_Pythagorean_triples) to compute a list of all triples with at least one value less than the input, which he then searches through to find those containing the requested value. This is a very different and interesting way to approach the problem.

```perl
    sub pt {
      my $n=shift;
      my @out;
      my @tri=([3,4,5]);
      while (@tri) {
        my $t=shift @tri;
        foreach my $i (0..2) {
          if ($n % $t->[$i] == 0) {
            my $k=$n/$t->[$i];
            push @out,[map {$_*$k} @{$t}];
          }
        }
        unless (min(@{$t}) > $n) {
          push @tri,[
            $t->[0]-2*$t->[1]+2*$t->[2],
            2*$t->[0]-1*$t->[1]+2*$t->[2],
            2*$t->[0]-2*$t->[1]+3*$t->[2],
              ];
          push @tri,[
            $t->[0]+2*$t->[1]+2*$t->[2],
            2*$t->[0]+1*$t->[1]+2*$t->[2],
            2*$t->[0]+2*$t->[1]+3*$t->[2],
              ];
          push @tri,[
            -$t->[0]+2*$t->[1]+2*$t->[2],
            -2*$t->[0]+1*$t->[1]+2*$t->[2],
            -2*$t->[0]+2*$t->[1]+3*$t->[2],
              ];
        }
      }
      return \@out;
    }
```





------------------------------------------



---

# TASK 2 {#PWC125TASK2}

# Binary Tree Diameter
*Submitted by: Mohammad S Anwar*<br>
You are given binary tree as below:

```
            1
           / \
          2   5
         / \ / \
        3  4 6  7
               / \
              8  10
             /
            9
```

Write a script to find the diameter of the given binary tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. It doesn’t have to pass through the root.

For the above given binary tree, possible diameters (6) are:

3, 2, 1, 5, 7, 8, 9

or

4, 2, 1, 5, 7, 8, 9

UPDATE (2021-08-10 17:00:00 BST): Jorg Sommrey corrected the example. The length of a path is the number of its edges, not the number of the vertices it connects. So the diameter should be 6, not 7.


## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/abigail/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/polettix/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/jo-37/perl/ch-2.pl),
[**Mark Anderson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/mark-anderson/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/mattneleigh/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/roger-bell-west/perl/ch-2.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/stuart-little/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/wlmb/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/wanderdoc/perl/ch-2.pl)


There were 15 submissions for the second task this past week. As usual, there were a variety of ways presented to implement the tree data structure, but on the whole this didn't distract too much from the primary task, that of finding the diameter.

For finding the diameter a recursive traversal was almost always employed, but there was a renegade who performed the search iteratively, with a queue. We saw a lot of self-similarity with the underlying logic, but because the data structures were so varied this was not always apparent.

Our examination will not be exhaustive, but a random sample of an even dozen should give a nice overview.



[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/duncan-c-white/perl/ch-2.pl)

Duncan takes a brute-force approach, looking at all the paths through the use of two recursive functions: `findallpaths()` and `follow()`. A callback routine is passed around through all that recursion to note and log the maximum path length found, which is a very interesting touch.

```perl
    use Function::Parameters;

    #    Find all complete paths through tree $t - and call
    #    $pathfunc->( @nodes ) for each one.
    #
    fun findallpaths( $t, $pathfunc )
    {
        say "find all paths starting at $t->{v}" if $debug>1;
        follow( $t, [$t->{v}], {}, $pathfunc );

        if( $t->{tag} eq 'n' )
        {
        	findallpaths( $t->{l}, $pathfunc ) if $t->{l};
        	findallpaths( $t->{r}, $pathfunc ) if $t->{r};
        }
    }

    #    Follow all paths from $t (with elements we've visited @$been)
    #    and used set %$used, calling $pathfunc->( @$been ) for each
    #    complete path found.
    #
    fun follow( $t, $been, $used, $pathfunc )
    {
        my $tv = $t->{v};
        my $edges = 0;
        foreach my $edge (qw(parent l r))
        {
        	my $e = $t->{$edge};
        	next unless defined $e;
        	my $ev = $e->{v};
        	next if $used->{$ev};
        	$edges++;
        	say "follow: go along $edge from $tv to $ev" if $debug>1;
        	my @newb = @$been;
        	push @newb, $ev;
        	follow( $e, \@newb, { %$used, $tv=>1 }, $pathfunc );
        }
        $pathfunc->( @$been ) if $edges==0;
    }
```

[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/mattneleigh/perl/ch-2.pl)

It seems in any of these binary tree challenges, both the implementation, and especially the importation, of the tree being worked on takes an undue amount of focus away from the logical complexities of the task. Because Perl lacks any sort of consistent idea of a tree, or node, or, let's face it, object system, every developer is somewhat alone in deciding on what tools to use to model the data, and there are many options available, to say the least.

I find this simultaniously both fascinating and distracting, as it ends up being extremely creative whilst it goes about detracting from the stated point of the exercise. Its a connundrum.

Matthew gives us his, to me at least, unique take on the construction part of the exercise, which we'll pause to look at. The whole structure is an array of trees, the trees themselves nest hashes of hashes.

```
    # Tree 1 (for testing- diameter does not
    # pass through the root node):
    #
    #     1
    #    / \
    #   2   3
    #      / \
    #     4   7
    #    /     \
    #   5       8
    #  /         \
    # 6           9
    #              \
    #              10

    $trees[1] = make_tree_node(1);
    $trees[1]{l} = make_tree_node(2);
    $trees[1]{r} = make_tree_node(3);
    $trees[1]{r}{l} = make_tree_node(4);
    $trees[1]{r}{l}{l} = make_tree_node(5);
    $trees[1]{r}{l}{l}{l} = make_tree_node(6);
    $trees[1]{r}{r} = make_tree_node(7);
    $trees[1]{r}{r}{r} = make_tree_node(8);
    $trees[1]{r}{r}{r}{r} = make_tree_node(9);
    $trees[1]{r}{r}{r}{r}{r} = make_tree_node(10);
```

As far as I'm concerned there's no clean and easy way to do this, but I find this has a certain appeal to it in the tradeoffs chosen. I'm not sure how you'd serialize this for the command line but that's another pot to boil.

Moving on, once we have our tree encoded, the function `calculate_tree_diameter_path()` is called, which serves as a wrapper to fetch and then format the diameter for the tree. The actual diameter computation is done with a second, recursive routine that performs an LRN depth-first descent, with each cycle returning the maximum tree depth from that node, starting at the leaves and traveling upwards.

```perl
    sub calculate_max_tree_depth{
        my $root = shift();

        unless($root){
            # No nodes in this direction;
            # return zero length and empty
            # path
            return(0, []);
        }

        my $diameter_data = shift();

        my $l_depth;
        my $l_path;
        my $r_depth;
        my $r_path;

        # Dig deeper to the left, and to the
        # right
        ($l_depth, $l_path) =
            calculate_max_tree_depth($root->{l}, $diameter_data);
        ($r_depth, $r_path) =
            calculate_max_tree_depth($root->{r}, $diameter_data);

        # reftype() taken from Scalar::Util
        if($diameter_data && (reftype($diameter_data) eq "HASH")){
            # We're keeping track of the largest
            # leaf-to-leaf distance; if the diameter at
            # this node is the largest we've seen so
            # far, store the data we have at this point
            my $node_diameter = $l_depth + $r_depth + 1;

            if($node_diameter > $diameter_data->{diameter}){
                $diameter_data->{diameter} = $node_diameter;
                $diameter_data->{root} = $root;
                $diameter_data->{l_path} = copy_list($l_path);
                $diameter_data->{r_path} = copy_list($r_path);
            }
        }

        # Check which side had the deeper path,
        # and return it
        if($r_depth > $l_depth){
            push(@{$r_path}, $root);
            return($r_depth + 1, $r_path);
        } else{
            push(@{$l_path}, $root);
            return($l_depth + 1, $l_path);
        }

    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/polettix/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/polettix/raku/ch-2.raku)

**blog writeup:** [PWC125 - Binary Tree Diameter](https://github.polettix.it/ETOOBUSY/2021/08/12/pwc125-binary-tree-diameter/)

Bucking the hash trend, Flavio keeps his tree in memory as a nested array of arrays. To find the diameter, he makes a depth-first recursive descent to the bottom leaves, first on the left side, then the right. As the recursion collapses upwards the longest sub-tree length at each node is retained. There's a very interesting use of the `wantarray` function to return either a scalar length or an array of values, depending whether the outer `main` context is the caller or the function itself, recursing.


```perl
    sub visit_for_diameter ($root) {
       die "Ceci n'est pas une arbre\n" unless $root;

       # this keeps the length of the best diameter candidate passing through
       # the $root node itself
       my $subtree = 0;

       # this keeps the longest sub-leg starting from $root
       my $longest = 0;

       # this keeps the best diamater as found in some descendant but not
       # through $root
       my $best = 0;

       # iterate over the left and right sub-trees
       for my $children ($root->@[1, 2]) {

          # don't bother following dead ends
          next unless $children;

          # this gets the recursive sub-call, receiving the best diameter and
          # the longest leg length
          my ($c_best, $c_length) = visit_for_diameter($children);

          # keep the best between the left and the right sub-tree
          $best = $c_best if $c_best > $best;

          # the actual leg length from $root is one more step because we have
          # to reach the child with one step
          ++$c_length;

          # keep the best sub-tree length
          $longest = $c_length if $c_length > $longest;

          # anyway, the best diameter passing through $root has to take into
          # account the length of the leg
          $subtree += $c_length;
       }

       # the longest sub-tree length is established, but the best will have to
       # be established by comparing the best from the descendants and the
       # overall diameter passing through $root (i.e. $subtree)
       $best = $subtree if $subtree > $best;

       # return only the $best diameter in scalar context, and both in list
       # context so that we can properly recurse
       return $best unless wantarray;
       return ($best, $longest);
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/james-smith/perl/ch-2.pl)

**blog writeup:** [Perl Weekly Challenge #125](https://github.com/drbaggy/perlweeklychallenge-club/blob/master/challenge-125/james-smith/)

James delivers us a barrage of quite descriptive test cases in his submission, governing a variety of asymmetric trees of varying depths and diameters. The diameter code itself is added to a more general [`BinaryTree`](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/james-smith/perl/BinaryTree.pm) module, extending on the work already done with a very directed extra effort.

Here are the `depth()` and `diameter()` functions from that module framework.

```perl
    sub depth {
      my $self = shift;
      my $d = 0;
         $d = $self->left->depth if $self->has_left;
      return 1+$d unless $self->has_right;
      my $t = $self->right->depth;
      return $t > $d ? 1+$t : 1+$d;
    }

    sub diameter {
      my $self = shift;
      my $global = { 'diameter' => 0 };
      $self->walk( sub {
        my $d = ($_[0]->has_left  ? $_[0]->left->depth  : 0 ) +
                ($_[0]->has_right ? $_[0]->right->depth : 0 );
        $_[1]{'diameter'} = $d if $d > $_[1]->{'diameter'};
      }, $global );
      return $global->{'diameter'};
    }
```

And the construction of an example, with context commentary:

```perl
    ## This time both child trees have depths longer than the number of
    ## ancestor nodes - so that is used to get the length...

    ## 1 -> 2 -> 3 -> 4      [ depth 4]
    ##        `> 5 -> 6
    ## ---------------------
    ## 6 -> 5 -> 2 -> 3 -> 4 [ diameter 5 ]

    say '5) Tree with node further down having two children - but distance from';
    say '   root to node is less than the depth of both children';
    $x = BinaryTree->new(1)->add_child_left(
           BinaryTree->new(2)->add_child_left(
             BinaryTree->new(3)->add_child_left( BinaryTree->new(4) )
           )->add_child_right(
             BinaryTree->new(5)->add_child_left( BinaryTree->new(6) )
           )
        );

    $x->dump;
    say sprintf 'Max depth: %d, diameter %d', $x->depth, $x->diameter;
    say '';
```

The result:

```
    5) Tree with node further down having two children - but distance from
       root to node is less than the depth of both children
      1
      < 2
        < 3
          < 4
        > 5
          < 6
    Max depth: 4, diameter 4
```

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/abigail/perl/ch-2.pl)

**blog writeup:** [Perl Weekly Challenge 125: Binary Tree Diameter](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-125-2.html)

Abigail gives us a solution basing their `Tree` package on *inside-out* hashes, a fascinating technique of storing data in anonymous hash values and then using stringified references to these hashes as *keys*, inverting the usual data structure. This is facilitated by the use of the `Hash::Util::FieldHash` module, which is worth the effort of going through its documentation, taking a deep dive into the pros and cons of the technique it makes available.

Once we have a tree object encoded, a `diameter()` method is attached, which traverses the tree, returning the longest child path found, upwards from the leaves. At each node this longest child path is recorded, alongside the sum of the longest paths returned from the left and right children, which is the diameter at that point

We're seeing a lot of small variations on this same basic pattern, but Abigail's implementation is notably clear and concise.

```perl
    sub _diameter ($self) {
        #
        # Given a tree, return a tuple ($depth, $diameter), where
        # first element is the depth of a tree (longest path to a leaf),
        # and second the diameter (longest path in the tree).
        #
        # Depth of a tree is 1 + max (depth left child, depth right child)
        # Diameter of a tree is max (diameter left child,
        # diameter right child, depth left child + depth right child).
        #
        return (0, 0) if  $self -> isleaf;  # Leaves have no depth nor diameter.
        my ($ldp, $ldm) = $self -> left  -> _diameter;
        my ($rdp, $rdm) = $self -> right -> _diameter;
        (max ($ldp, $rdp), max ($ldm, $rdm, $ldp + $rdp))
    }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/e-choroba/perl/ch-2.pl)

Choroba gives an object implmentation, with an input loaded from nested arrays. The root object is a node, called appropriately `Node`, which itself has left and right child nodes. The `diameter` method provided performs a recursive traversal, returning the largest diameter found so far, which is propogated upwards through the nodes. We don't actually care *where* the largest diameter occurs, only that it *does* occur, so the apex node location is discarded and the maximum carried forward. This obviates the need for a package variable ot hold the maximum value.

```perl
    package Node;
    use Moo;
    use List::Util qw{ max sum };
    use namespace::clean;

    has value => (is => 'ro');
    has [qw[ left right ]] => (is => 'rw');

    sub new_from_structure {
        my ($class, $structure) = @_;
        my $self = $class->new(value => $structure->[0]);
        my @ch = @{ $structure->[1] };
        if (defined $ch[0][0]) {
            my $left  = $ch[0][1]
                ? 'Node'->new_from_structure([$ch[0][0], $ch[0][1]])
                : 'Node'->new(value => $ch[0][0]);
            $self->left($left);
        }
        if (defined $ch[1][0]) {
            my $right  = $ch[1][1]
                ? 'Node'->new_from_structure([$ch[1][0], $ch[1][1]])
                : 'Node'->new(value => $ch[1][0]);
            $self->right($right);
        }
        return $self
    }

    sub diameter {
        my ($self) = @_;
        my $branch_here = sum(0, map $_->max_depth, $self->children);
        my @diameters = map $_->diameter, $self->children;
        return max(@diameters, $branch_here)
    }
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/jo-37/perl/ch-2.pl)

Jorg brings us another exploration into the `Graph` module to define his tree, here defining an undirected graph. Anyways, the `Graph` module provides a routine, `diameter()` which as you might think would be very useful to our task. I feel as if you are studying a single large and complex module, such as Jorg is wont to do, using the various built-in features available is a really good way to learn the intricacies. Watch his work (with a quick shout-out to Adam Russell) has gotten me interested in the `Graph` module myself, which is obviously a good thing. It does seem that there is a certain learning curve involved, though.

```perl
    # Build the binary tree as a graph and return its diameter.  As we are
    # allowed to move up and down the tree for a maximum length path, the
    # graph has to be undirected.  The root node gets lost with this
    # construction: any vertex with a degree of one or two may be taken as
    # the root node.  This doesn't matter here as a diameter path need not
    # pass through the root node.
    sub tree_diameter (@nodes) {
        my $g = Graph->new(undirected => 1);
        for my $node (@nodes) {
            my ($id, $left, $right) = split /:/, $node;
            $g->add_edge($id, $left) if $left;
            $g->add_edge($id, $right) if $right;
        }
        # Return the diameter in scalar context, any diameter path in
        # list context or undef if there is no path at all.
        $g->diameter;
    }
```

[**Mark Anderson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/mark-anderson/perl/ch-2.pl)

Mark brings us an implementation built around `Tree::Binary`, initiated with a hard-coded example. This stripped-down approach allows us to focus on the true task-at-hand, determining the diameter. The package provides us with a a recursive function, [`traverse()`](https://metacpan.org/pod/Tree::Binary#Recursive-Methods), which takes a function callback to be applied to the nodes along its walk. The diameters are recorded at each node and added to a growing list, and the diamater of the tree is the maximum value of that list.

```perl
    my $example1 = Tree::Binary->new('1')
                               ->setLeft(Tree::Binary->new('2')
                               ->setLeft(Tree::Binary->new('3'))
                               ->setRight(Tree::Binary->new('4')))
                               ->setRight(Tree::Binary->new('5')
                               ->setLeft(Tree::Binary->new('6'))
                               ->setRight(Tree::Binary->new('7')
                               ->setLeft(Tree::Binary->new('8')
                               ->setLeft(Tree::Binary->new('9')))
                               ->setRight(Tree::Binary->new('10'))));

    say treeDiameter($example1); # 6

    sub treeDiameter
    {
        my $btree = shift;
        my @diameters;

        $btree->traverse
        (
            sub
            {
                my ($tree) = @_;

                my $leftHeight  = 0;
                my $rightHeight = 0;

                if ($tree->hasLeft)
                {
                    $leftHeight = $tree->getLeft->height;
                }

                if ($tree->hasRight)
                {
                    $rightHeight = $tree->getRight->height;
                }

                push @diameters, $leftHeight + $rightHeight;
            }
        );

        max @diameters;
    }
```

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/wanderdoc/perl/ch-2.pl)

The doctor is fond of building trees as structs of a sort, using `Struct::Dumb`. It's noteworthy that the solution provided is not recursive, but rather iterative. I know this is not really a big deal, but tree-walking is a action singularly well-suited to a recursive paradigm, even as iterative loops are unually somewhat faster in execution.

A system of FIFO queues are constructed that walk the nodes, which are essentailly arrays of left and right nested children and a node value. First the outer function `diameter_iter` is called, which constructs a queue of nodes to be walked; at each node the maximum height is calculated for both the left child and the right, and the diameter at that node is the sum of these two values.

```perl
    sub height_iter
    {
         my $node = $_[0];

         my @queue;
         push @queue, $node;
         my $height = 0;


         while ( @queue )
         {
              my $size = scalar @queue;
              for my $i ( 0 .. $size - 1 )
              {
                   my $n = shift @queue;
                   push @queue, $n->left if $n->left;
                   push @queue, $n->right if $n->right;

              }
              $height++;
         }
         return $height;
    }

    sub diameter_iter
    {

         my $node = $_[0];
         my @queue;
         push @queue, $node;

         my $diameter = 0;

         while ( @queue )
         {

              my $size = scalar @queue;

              for my $i ( 0 .. $size - 1 )
              {
                   my $n = shift @queue;
                   my $height_left  = $n->left ?  height_iter( $n->left )  : 0;
                   my $height_right = $n->right ? height_iter( $n->right ) : 0;
                   $diameter = max($diameter, $height_left + $height_right); # + 1

                   push @queue, $n->left  if $n->left;
                   push @queue, $n->right if $n->right;
              }
         }
         return $diameter;
    }
```

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/colin-crain/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/colin-crain/raku/ch-2.raku)

**blog writeup:** [Triple Tree Rings — Programming Excursions in Perl and Raku](https://colincrain.com/2021/08/15/triple-tree-rings/)

For my own solution, I also brought out the `BTree` and related `Node` modules I finally got around to making. The solution comes about by adding two attributes: one to `Node`, an array of `child_counts`, being the longest paths beneath the node to the left and right, the other a `diameter` to the `BTree`. A depth-first traversal method performs an LRN, Left-Right-Node walk to the bottom of the left-most leaf and starts returning and redescending from there. When nodes return they deliver the longest child path length, and the diameter at that point — being the sum of the left and right child counts — is checked against the `diameter` attribute, which is updated as required.

When the traversal is complete, the maximum diameter has been found.

My art-deco tree pretty-print routine is included as well, now incorporated into the `BTree` package, tightened a little bit more into a self-contained routine.

```perl
    sub get_diameter ($self) {

        sub _get_diameter ( $self, $node = $self->root ) {
        ## LRN traversal to gather child counts and update diameter
            if (defined $node->left) {
                $node->child_counts->[0] = $self->_get_diameter($node->left);
            }
            if (defined $node->right) {
                $node->child_counts->[1] = $self->_get_diameter($node->right);
            }
            my $children = $node->child_counts->[0] + $node->child_counts->[1];
            if ($children > $self->diameter) {
                $self->diameter( $children );
            }
            return ( $node->child_counts->[0] > $node->child_counts->[1]
                ? $node->child_counts->[0]
                : $node->child_counts->[1]
            ) + 1
        }

        $self->_get_diameter;
        return $self->diameter;
    }
```

[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/stuart-little/perl/ch-2.pl)

**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/stuart-little/haskell/ch-2.hs), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/stuart-little/lua/ch-2.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/stuart-little/node/ch-2.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/stuart-little/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/stuart-little/raku/ch-2.raku)

Stuart delivers a trio of functions to gather his diameter:
* `biLongPath()`, which finds the bidirectional longest path from a node,
* `lr()` which finds references to the child nodes at a node, and
* `lrLongPath()` which finds the longest path to a leaf available at a designated node child node.

Starting with `biLongPath()`, we then call `lrLongPath()`, which after calling `lr()` to get the relevant updated child addresses, then calls itself recursively to walk the tree. Noteworthy is the use of `max_by()` from `List::AllUtils`, which takes a function to apply to the list values is operates on, allowing a transformation to be used as a basis for the maximum.

```perl
    sub lr($tree) {
        (scalar @{$tree} < 3 || $tree->[0] eq '.') && return [[],[]];
        (scalar @{$tree} == 3) && return [["."],["."]];
        my @left;
        my ($sum,$ix)=(0,1);
        while ($sum != -1) {
        push @left, $tree->[$ix];
        $sum+=(($tree->[$ix] eq '.') ? (-1) : (1));
        $ix++;
        }
        my @right = $tree->@[(scalar @left)+1..(scalar @{$tree})-1];
        return [\@left,\@right];
    }

    sub lrLongPath($tree) {
        $tree->[0] eq '.' && return [[],[]];
        scalar @{$tree} == 3 && return [[$tree->[0]],[$tree->[0]]];
        my ($left,$right) = @{lr($tree)};
        my $lLongPath = max_by {scalar @{$_}} @{lrLongPath($left)};
        my $rLongPath = max_by {scalar @{$_}} @{lrLongPath($right)};
        my @lLongPath = ($tree->[0],@{$lLongPath});
        my @rLongPath = ($tree->[0],@{$rLongPath});
        return [\@lLongPath,\@rLongPath];

    }

    sub biLongPath($tree) {
        (scalar @{$tree} < 3 || $tree->[0] eq '.') && return [];
        (scalar @{$tree} == 3) && return [$tree->[0]];
        my ($lPath,$rPath) = @{lrLongPath($tree)};
        my @lPath = reverse $lPath->@[1..(scalar @{$lPath})-1];
        my @path = (@lPath,@{$rPath});
        my ($left,$right) = @{lr($tree)};
        return max_by {scalar @{$_}} (\@path, map {biLongPath($_)} ($left,$right));
    }
```


[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/dave-jacoby/perl/ch-2.pl)

**blog writeup:** [Trees and Triples: The (Perl) Weekly Challenge #125](https://jacoby.github.io/2021/08/09/trees-and-triples-the-perl-weekly-challenge-125.html)

Dave brings out his `Node` package to compose his tree, which is a hash of nodes. This package has with it an `is_leaf` boolean routine, which comes in handy to the diameter search, both at the beginning and end.

Systematically starting at every leaf of the tree, at each node a list of options for unvisited available directions is compiled: up to the parent, or down into one or both children. Obviously only a maximum of two of these options will be available at any given time, as we always start at a leaf. The `btd()` routine is called recursively for each option, tracing all possible paths from a the current node, each path terminating when it finds another leaf and cannot continue.

The bookkeeping that allow Dave to know whether a particular node option has already been visited also allows him to reconstruct the actual diameter path or paths taken, which although not required is a nice bonus.

```perl
    sub btd ( $node, $path = [] ) {
        my @output;
        my $v = $node->value();
        push $path->@*, $v;

        my @options;
        if ( defined $node->parent() ) {
            my $p  = $node->parent();
            my $pv = $p->value();
            my $is = grep /$pv/, $path->@* ? 1 : 0;
            if ( !grep /$pv/, $path->@* ) {
                push @options, 'parent';
            }
        }
        if ( defined $node->left() ) {
            my $p  = $node->left();
            my $pv = $p->value();
            my $is = grep /$pv/, $path->@* ? 1 : 0;
            if ( !grep /$pv/, $path->@* ) {
                push @options, 'left';
            }
        }
        if ( defined $node->right() ) {
            my $p  = $node->right();
            my $pv = $p->value();
            my $is = grep /$pv/, $path->@* ? 1 : 0;
            if ( !grep /$pv/, $path->@* ) {
                push @options, 'right';
            }
        }

        if (@options) {
            for my $option (@options) {
                if ( $option eq 'parent' ) {
                    my $p = $node->parent();
                    my $path2->@* = map { int } $path->@*;
                    push @output, btd( $p, $path2 );
                }
                if ( $option eq 'left' ) {
                    my $p = $node->left();
                    my $path2->@* = map { int } $path->@*;
                    push @output, btd( $p, $path2 );
                }
                if ( $option eq 'right' ) {
                    my $p = $node->right();
                    my $path2->@* = map { int } $path->@*;
                    push @output, btd( $p, $path2 );
                }
            }
        }
        else {
            push @output, [ map { int } $path->@* ];
        }

        return @output;
    }
```

## Additional Submissions in Guest Languages

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/roger-bell-west/perl/ch-2.pl)

**additional languages:**
[Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/roger-bell-west/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-125/roger-bell-west/rust/ch-2.rs)

**blog writeup:** [RogerBW's Blog: Perl Weekly Challenge 125: Pythagorean Diameter](https://blog.firedrake.org/archive/2021/08/Perl_Weekly_Challenge_125__Pythagorean_Diameter.html)




---

# BLOGS {#PWC125BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, I somehow continue to maintain my bearings. Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC127BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *READ* these *BLOG* *LINKS*:

**( *don't think, trust your training, you're in the zone, just do it ...* )**


**Abigail**

 * [Perl Weekly Challenge 125: Pythagorean Triples](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-125-1.html) ( *Perl* )
 * [Perl Weekly Challenge 125: Binary Tree Diameter](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-125-2.html) ( *Perl* )

**Arne Sommer**

 * [Pythagorean Tree with Raku](https://raku-musings.com/pythagorean-tree.html) ( *Raku* )

**Colin Crain**

 * [Triple Tree Rings — Programming Excursions in Perl and Raku](https://colincrain.com/2021/08/15/triple-tree-rings/) ( *Perl & Raku* )

**Dave Jacoby**

 * [Trees and Triples: The (Perl) Weekly Challenge #125 | Committed to Memory](https://jacoby.github.io/2021/08/09/trees-and-triples-the-perl-weekly-challenge-125.html) ( *Perl* )

**Flavio Poletti**

 * [PWC125 - Pythagorean Triples - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/08/11/pwc125-pythagorean-triples/) ( *Perl & Raku* )
 * [PWC125 - Binary Tree Diameter - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/08/12/pwc125-binary-tree-diameter/) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #125](https://github.com/drbaggy/perlweeklychallenge-club/blob/master/challenge-125/james-smith/) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 125: Pythagorean Triples | laurent_r](http://blogs.perl.org/users/laurent_r/2021/08/perl-weekly-challenge-125-pythagorean-triples.html) ( *Perl & Raku* )

**Roger Bell_West**

 * [RogerBW's Blog: Perl Weekly Challenge 125: Pythagorean Diameter](https://blog.firedrake.org/archive/2021/08/Perl_Weekly_Challenge_125__Pythagorean_Diameter.html) ( *Perl & Raku* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 125 – W. Luis Mochán](https://wlmb.github.io/2021/08/10/PWC125/) ( *Perl* )
