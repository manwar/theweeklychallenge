
---
author:       Colin Crain
date:         2020-12-18T00:00:00
description:  "Colin Crain › Perl Weekly Review #089"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #089"
image:        images/blog/p5-review-challenge-089.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-088/).* )

Welcome to the Perl review for **Week 089** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-089/) or the summary [**recap**](/blog/recap-challenge-089/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC089TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC089TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC089BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC089TASK1}
# GCD Sum
*Submitted by: Mohammad S Anwar*

You are given a positive integer $N.

Write a script to sum GCD of all possible unique pairs between 1 and $N.

**Example 1:**
```
    Input : 3
    Output: 3

    gcd(1,2) + gcd(1,3) + gcd(2,3)
```

**Example 2:**
```
    Input : 4
    Output: 7

    gcd(1,2) + gcd(1,3) + gcd(1,4) + gcd(2,3) + gcd(2,4) + gcd(3,4)
```

## about the solutions

There were 29 submissions for the first task this past week. In a sense this was a mashup of two subtasks: to find the [greatest common divisor](https://en.wikipedia.org/wiki/Greatest_common_divisor), or GCD, of two numbers and to sum that value over all the combinations found within the range 1 to the input.

As both of these tasks can be reduced to quite simple forms, there was a tremendous amount of self-similarity in the submissions around one basic pairing: Euclid's Algorithm to determine the GCD, and two simple loops to form the combination sets for the calculations. That said, there were other algorithms and methods for both actions and, combinations being as they may, a lot of mixing and matching in variations.

## EUCLID and TWO LOOPS
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/adam-russell/perl/ch-1.pl),
[**Alexander Karelas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/alexander-karelas/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/colin-crain/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/duncan-c-white/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/jaldhar-h-vyas/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/laurent-rosenfeld/perl/ch-1.pl),
[**Miguel Prz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/miguel-prz/perl/ch-1.pl),
[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/nunovieira220/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/sgreen/perl/ch-1.pl),
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/walt-mankowski/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/wanderdoc/perl/ch-1.pl)

[Euclid's Algorithm for the GCD](https://en.wikipedia.org/wiki/Euclidean_algorithm) is built on the fact that the GCD of any two numbers also divides the difference between the two. Using this equality, the numbers are reduced until one evenly divided the other, which is the GCD.

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/colin-crain/perl/ch-1.pl)

I wasn't much for condensing things this time around, and so to start us off here it is laid out in longhand, so to speak. In this method we capitalize on the fact that the GCD between two numbers will also divide the difference between these numbers. For example, the GCD for 1365 and 1050 is 105. Now 1365 – 1050 = 315, which is 3 × 105. See? This can be intuitively visualized in that one number is 10 times the GCD, the other 13, so the difference should be the 3 missing times, which indeed it is. Substituting division for Euclid’s original multiple subtractions, we repeatedly use integer division to divide the larger value by the smaller, substituting the smaller value and the remainder for the original values and repeating the process until the remainder is 0. At this point the smaller value is the GCD.

```perl
    sub gcd {
        my ($m, $n) = @_;
        while ( $n != 0 ) {
            $n > $m and ($m, $n) = ($n, $m);
            my $r = $m - $n * ( int ($m/$n));
            return $n if $r == 0;
            ($m, $n) = ($n, $r);
        }
    }
```

Of course other people had their own ideas on condensing this methodical form, and as we shall see it becomes quite compact indeed.

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/sgreen/perl/ch-1.pl)

for example, tightens things up a bit:

```perl
    sub _gcd {
        my ( $m, $n ) = @_;
        my $max = min( $m, $n );
        for ( my $c = min( $m, $n ) ; $c >= 1 ; $c-- ) {
            return $c unless $m % $c or $n % $c;
        }
    }
```

and
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/laurent-rosenfeld/perl/ch-1.pl)

introduces the modulus operator to the party:

```perl
    sub gcd {
            my ($i, $j) = sort { $a <=> $b } @_;
            while ($j) {
                    ($i, $j) = ($j, $i % $j);
            }
            return $i;
    }
```


With the addition of recursion, a canonical form emerges, that we see many times.

[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/nunovieira220/perl/ch-1.pl)

shows us a fine example:

```perl
    sub gcd {
      my ($a, $b) = @_;
      return $b == 0 ? $a : gcd($b, $a % $b);
    }
```

The other part of the archetypical method is the combinations. Now amongst combination problems "choose 2" is about the simplest form, and can be constructed efficiently with two loops: for each element save the last in a given range, construct pairings with each successive element following it. There will be no duplication this way and the number of combination sets will be the binomial coefficient,

*n*! / *k*!(*n*–*k*)!

which for the case *n* = 2,

*n*(*n*-1) / 2

So two loops really is the way to go. Every pairing is visited exactly once with a minimum of infrastructure.

[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/walt-mankowski/perl/ch-1.pl)
demonstrates:

```perl
    for my $i (1..$n-1) {
        for my $j ($i+1..$n) {
            $sum += gcd($j, $i);
        }
    }
```

There *were* other ways to get from here to there, though.

### RECURSION, or some OTHER way to get the PAIRINGS
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/jaldhar-h-vyas/perl/ch-1.pl),
[**Julio de Castro**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/juliodcs/perl/ch-1.pl) and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/wlmb/perl/ch-1.pl)


[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/jaldhar-h-vyas/perl/ch-1.pl)

Jaldhar gives us a more generalized recursive routine to get our 2-sets:

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
```


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/wlmb/perl/ch-1.pl)

Luis provides his own `pairs` routine using recursion and a `map` to get  his two loops. Notice that we really are just rearranging the cyclic structure and looping in different ways. But being able to accomplish this backwards or forwards, functionally or imperatively, is the essence of TIMTOWTDI, and different paradigms can sometimes lead to different insights.

```perl
    sub pairs {
        # I assume both arguments are integer and different
        my ($n, $m)=@_;
        return () if $n>=$m; #no more pairs
        return ((map {[$n,$_]} ($n+1..$m)),  # pairs starting in $n
            pairs($n+1, $m));                # and the rest
    }
```

[**Julio de Castro**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/juliodcs/perl/ch-1.pl)

Julio uses a standard recursive formation of Euclid's Algorithm to get his GCDs, but
he gives a very interesting variant for the routine to generate 2-combinations for the summation. In it he uses the `goto &NAME` control structure combined with rewriting @_ to perform something akin to tail-call optimization. Its an interesting technique and I'd be interested to see it benchmarked against a more "normal" recursive method.

```perl
    sub _gcd_sum($list, $i, $j, $acc) {
        return $acc if $i == $list->@*;

        @_ = $j == $list->@*
            ? ($list, $i + 1, $i + 2, $acc)
            : ($list, $i, $j + 1, $acc + _gcd($list->[$i], $list->[$j]));

        goto &_gcd_sum;
    }
```


### use a MODULE for the PAIRS
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/alexander-pankoff/perl/ch-1.pl) and
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/ulrich-rieke/perl/ch-1.pl)

Of course with any combinatorial work, speed is best obtained by using a faster language, as there generally aren't shortcuts available. In the end we need to produce *n*!/*k*!(*n*–*k*)! combinations. So if we can't diminish the steps, we can do them faster, which means reaching for a tuned module. This is arguably the sensible way to do it out in the real world.

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/ulrich-rieke/perl/ch-1.pl)

```perl
    use List::Util qw( max sum ) ;
    use Algorithm::Combinatorics qw( combinations ) ;

    my @data = (1..$N) ;
    my $iter = combinations(\@data , 2 ) ;
    while ( my $p = $iter->next ) {
      push @gcds , gcd ($p->[0] , $p->[1] ) ;
    }
    my $sum = sum @gcds ;
```


## STEIN'S Algorithm
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/abigail/perl/ch-1.pl),
[**Joel Crosswhite**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/jcrosswh/perl/ch-1.pl), and
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/roger-bell-west/perl/ch-1.pl)

Several people implemented the [Binary GCD Algorithm](https://en.wikipedia.org/wiki/Binary_GCD_algorithm), also known as "Stein's Algorithm", which uses a set of four equalities to deconstruct and reduce the starting numbers in a way not dissimilar to Euclid's. It uses more options in its progress so is necessarily slightly more complicated, with the tradeoff being that the operations performed are computationally simpler.

[**Joel Crosswhite**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/jcrosswh/perl/ch-1.pl)

Joel lays out the selection for which reduction step to choose with a switch built of cascading `elsif` statements. This is the core of the algorithm.

```perl
    sub gcd {
        my ($first, $second, $d) = @_;
        $d = 0 if !defined($d);

        if ($first == $second) {
            return $first * 2 ** $d;
        } elsif ($first % 2 == 0 && $second % 2 == 0) {
            return gcd($first / 2, $second / 2, $d + 1);
        } elsif ($first % 2 == 0) {
            return gcd($first / 2, $second, $d);
        } elsif ($second % 2 ==0) {
            return gcd($first, $second / 2, $d);
        } else {
            my $c = abs($first - $second);
            my $new_second = $first < $second ? $first : $second;
            return gcd($c / 2, $new_second, $d);
        }
    }
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/roger-bell-west/perl/ch-1.pl)

Roger stated his reasoning was that he'd already done Euclid's, which to me is sound logic.

```perl
    sub gcd {
        my ( $a, $b )=@_;
        if ( $a == 0 ) {
            return $b;
        }
        if ( $b == 0 ) {
            return $a;
        }
        my $d = 0;
        while ( 1 ) {
            if ( $a == $b ) {
                return $a << $d;
            }
            my $aa = ( $a % 2 == 0 );
            my $bb = ( $b % 2 == 0 );
            if ( $aa && $bb ) {
                $a >>= 1;
                $b >>= 1;
                $d++;
            } elsif ( $aa ) {
                $a >>= 1;
            } elsif ( $bb ) {
                $b >>= 1;
            } else {
                my $c = abs( $a - $b );
                $a = min( $a, $b );
                $b = $c >> 1;
            }
        }
    }
```

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/abigail/perl/ch-1.pl)

Abigail implements a caching scheme in his version, and bitshifting to multiply and divide by 2.

```perl
    sub stein ($u, $v) {
        state $cache;
        $$cache {$u, $v} //= sub ($u, $v) {
            return $u if $u == $v || !$v;
            return $v if             !$u;
            my $u_odd = $u % 2;
            my $v_odd = $v % 2;
            return stein ($u >> 1, $v >> 1) << 1 if !$u_odd && !$v_odd;
            return stein ($u >> 1, $v)           if !$u_odd &&  $v_odd;
            return stein ($u,      $v >> 1)      if  $u_odd && !$v_odd;
            return stein ($u - $v, $v)           if  $u     >   $v;
            return stein ($v - $u, $u);
        } -> ($u, $v);
    }
```


## just GATHER the DIVISORS to get the GCD
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/arne-sommer/perl/ch-1.pl) and
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/dave-jacoby/perl/ch-1.pl)

Of course one could always divide out sets of factors for each of the two numbers and look for commonalities.

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/arne-sommer/perl/ch-1.pl)

Arne calls his `divisors` routine on both values, then calls `duplicates` from `List::Util` and takes the last member of the list of common factors.

```perl
    sub divisors ($number)
    {
        my @divisors = (1);

        for my $candidate (2 .. $number/2)
        {
            push(@divisors, $candidate) if $number % $candidate == 0;
        }

        push(@divisors, $number);

        return @divisors;
    }
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/dave-jacoby/perl/ch-1.pl)

Dave pulls out `List::Compare` to find his common elements. You can see the action in the center of the example, wrapped in the familiar two loops.

```perl
    use List::Compare;

    sub gcd( $n ) {
        my $output = 0;
        for my $i ( 1 .. $n - 1 ) {
            for my $j ( $i + 1 .. $n ) {
                my $di->@* = get_divisors($i);
                my $dj->@* = get_divisors($j);
                my $dc     = List::Compare->new( $di, $dj );
                my @d      = $dc->get_intersection;
                my $g      = max @d;
                $output += $g;
            }
        }
        return $output;
    }
```



## use a MODULE for the GCD
[**Andrew Shitov**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/ash/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/athanasius/perl/ch-1.pl), and
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/lubos-kolouch/perl/ch-1.pl)

There's nothing written that we need to compute the GCD ourselves. If we need it in the real world there are many options available to deliver it to us with a minimum of fuss.

[**Andrew Shitov**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/ash/perl/ch-1.pl)

Andrew chooses `Math::Utils` for his pleasure. Here is his entire program:

```perl
    use Math::Utils qw(gcd);

    my $n = $ARGV[0] // 3;

    my $s = 0;
    for my $x (1 .. $n) {
        for my $y ($x + 1 .. $n) {
            $s += gcd($x, $y);
        }
    }

    say $s;
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/athanasius/perl/ch-1.pl)

uses `Math::Prime::Util`. Again the logic becomes quite compact.

```perl
    use Math::Prime::Util qw( gcd );
    for my $i (1 .. $N - 1)
    {
        for my $j ($i + 1 .. $N)
        {
            $sum += gcd($i, $j);
        }
    }

```

[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/lubos-kolouch/perl/ch-1.pl)

Not a glutton for punishment, Lubos draws on modules for all the heavy lifting.

```perl
    use Math::Utils qw/gcd/;
    use Math::Combinatorics;

    sub get_gcd_sum {
        my $n = shift;

        my $gcd_sum = 0;

        my $combinat = Math::Combinatorics->new(
            count => 2,
            data  => [ 1 .. $n ],
        );
        while ( my @combo = $combinat->next_combination ) {
            $gcd_sum += gcd(@combo);
        }

        return $gcd_sum;
    }
```





## INTERESTING things that were NOT so easily CATEGORIZED
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/e-choroba/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/jo-37/perl/ch-1.pl), and
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/perlboy1967/perl/ch-1.pl)

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/e-choroba/perl/ch-1.pl)

Choroba sends us two methods today.

In addition to a more standard "naive" solution, Choroba gives us a very interesting mathematical optimization to the problem involving "totients" -- those numbers that are relatively prime to given number, that is to say their GCD is just 1. Using this method he increased his execution speed some 300x.

```perl
    {   my @totients;
        sub totients {
            my ($n) = @_;
            @totients = (0 .. $n);
            for my $p (2 .. $n) {
                if ($totients[$p] == $p) {
                    $totients[$p] = $p - 1;
                    for (my $i = 2 * $p; $i <= $n; $i += $p) {
                        $totients[$i] = ($totients[$i] / $p) * ($p - 1);
                    }
                }
            }
        }

        sub gcd_sum {
            my ($n) = @_;
            totients($n);
            my @sums = (0) x $n;
            for my $i (1 .. $n) {
                for (my $j = 2; $i * $j <= $n; ++$j) {
                    $sums[ $i * $j ] += $i * $totients[$j];
                }
            }
            for my $i (2 .. $n) {
                $sums[$i] += $sums[$i - 1];
            }
            return $sums[$n]
        }
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/james-smith/perl/ch-1.pl)

James gives us Euclid again for the GCD, but in the summing portion provides some optimizations not seen elsewhere. The most striking is that for a GCD between 1 and any number is obviously going to be 1, and these components can be separated out and need not be computed.

```perl
    sub gcd_sum {
      my $n = shift;
      my $sum = 2*$n-2; ### We can pull out the GCDs with 1 as either side
                        ### Note because of the optimization below we only
                        ### Remove -2 as we remove another one is the
                        ### special case where $x==2;
      foreach my $x ( 2..$n ) {
        ## Note that the gcd is symetric gcd($m,$n) == gcd($m,$m-$n) where $n between 1 & $m-1
        $sum += 2*gcd( $x, $_ ) foreach 2..$x/2;
        ## We have counted the middle value twice if $x is even.... so remove one of them...
        $sum -= $x/2 unless $x%2;
      }
      return $sum;
    }
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/jo-37/perl/ch-1.pl)

Jorg cleverly wraps up the two loops in his combination generator into pair of `reduce` functions borrowed from `Lisrt::Util`. Much like `map`, `reduce` acts on successive elements of a list, replacing an accumulator with the result of a function applied to the accumulator and the next element in the sequence. It's a powerful core idea in functional programming, a sort of melding of a `map` with it's own variable that can "reduce" a list to a single value. Think of the way `sum` applies addition across a list to produce a single value. `reduce` is the generalized archetype for that more specific function.

```perl
    use Math::Utils 'gcd';
    use List::Util 'reduce';

    sub gcd_sum {
        my $n = shift;
        reduce {
            local *_ = \$b;
            $a + reduce {$a + gcd($_, $_ + $b)} 0 .. $n - $b;
        } 0 .. $n - 1;
    }
```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/perlboy1967/perl/ch-1.pl)

Niels imports `Bit::Vector`, which, among its talents, allows a suite of large integer math operations to be performed on the bitsteams created. After all with arbitraily large bit vectors one can represent arbitraily large integers. And among those math operations available is an implementation of Euclid's Algorithm for the GCD. Using two loops and converting the values to vectors, he can do all the work in this binary bit space:

```perl
    use Bit::Vector;

    for my $i (1 .. $N - 1) {
        $vecA->from_Dec($i);
        for my $j ($i + 1 .. $N) {
            $vecB->from_Dec($j);
            $vecGcd->GCD($vecA, $vecB);
            push(@G, [$i,$j])
                if ($vecGcd->to_Dec() < $N);
        }
    }
```



---

# TASK 2 {#PWC089TASK2}
# Magical Matrix

*Submitted by: Mohammad S Anwar*

Write a script to display matrix as below with numbers 1 - 9. Please make sure numbers are used once.
```
    [ a b c ]
    [ d e f ]
    [ g h i ]
```
So that it satisfies the following:
```
    a + b + c = 15
    d + e + f = 15
    g + h + i = 15
    a + d + g = 15
    b + e + h = 15
    c + f + i = 15
    a + e + i = 15
    c + e + g = 15
```


## about the solutions

There were 28 submissions for the second task this past week. Generally the solutions involved constructing systematic combinations of values and then testing these for validity, with varying amounts of logic used along the way to guide the process. However an algorithm from India, via the Kingdom of Siam and later France, appeared in several incarnations, as well as a few unusual approaches that defy easy categorization.

## BRUTE FORCE every combination
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/adam-russell/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/arne-sommer/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/dave-jacoby/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/e-choroba/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/jaldhar-h-vyas/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/laurent-rosenfeld/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/lubos-kolouch/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/perlboy1967/perl/ch-2.pl), and
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/ulrich-rieke/perl/ch-2.pl)

There are 9<sup>9</sup> ways to place one of the numbers, independantly, from 1 to 9 into 9 boxes, yielding 387,420,489 arrangements. This is a large number. Creating and validating every one of these to represent a matrix, while not wrong, is not a very efficiant way of proceeding. On the other hand, to arrange 9 balls labeled  1 through 9 into 9 slots there are far fewer positionings. In this scenario we have 9 balls to choose from for the first position, 8 for the second, 7 for the third, etc. until we place the last remaining ball into the final hole. This is only 9 factorial, or 362,880 arrangements. In the grand scheme of modern computation this isn't a particularly large number, so likewise testing each of these options until we find a contradiction or not isn't too tall an order. Well, maybe a bit tall-ish. But certainly doable.

There were a few ways to populate the various matricies to validate. The basic idea is to permute the list 1 to 9 and use those ordered sets. To do the permutation, people commonly chose either a recursive routine or reached for a module.

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/e-choroba/perl/ch-2.pl)


Choroba demonstrates a nice compact `fill` routine to recursively populate permutation lists from a pool of unassigned numbers until they become complete, at which point they are added to a `@solutions` array. I think the more interesting part of this method is that validation is done continuously at every recursion, by a `still_valid()` check routine detecting contradictions. In this way dead-ends are abandoned quickly. I also like the looping over sets of indices to do the validation, as they all sum to the same constant SUM, set to 15. There's lots of little interesting part of this one.

```perl
    use constant SUM => 15;

    sub fill {
        my ($matrix, @unused) = @_;
        unless (@unused) {
            push @solutions, [@$matrix];
            return
        }
        my $i = 0;
        ++$i until $i > $#$matrix || $matrix->[$i] == 0;
        for my $u (0 .. $#unused) {
            $matrix->[$i] = $unused[$u];
            fill($matrix, @unused[0 .. $u - 1, $u + 1 .. $#unused])
                if still_valid($matrix);
        }
        $matrix->[$i] = 0;
    }

    sub still_valid {
        my ($matrix) = @_;

      COORD:
        for my $coords ([0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
                        [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]) {
            $matrix->[$_] or next COORD for @$coords;
            return unless SUM == $matrix->[ $coords->[0] ]
                               + $matrix->[ $coords->[1] ]
                               + $matrix->[ $coords->[2] ];
        }
        return 1
    }

```


[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/jaldhar-h-vyas/perl/ch-2.pl)

Jaldhar gives us a nice implementation of Knuth's Algorithm L to do his permutations of the list (1,2,3,4,5,6,7,8,9), representing his matrix flattened. What really adds color though is that the routine takes a *code block*, which in turn acts on the list following, which becomes @_ for the block. State is passed by manipulating @_ directly. It's a fascinatingly indirect way to solve the puzzle of passing state.

```perl
    sub permute (&@) {
        my $code = shift;
        my @idx = 0..$#_;
        while ( $code->(@_[@idx]) ) {
            my $p = $#idx;
            --$p while $idx[$p-1] > $idx[$p];
            my $q = $p or return;
            push @idx, reverse splice @idx, $p;
            ++$q while $idx[$p-1] > $idx[$q];
            @idx[$p-1,$q]=@idx[$q,$p-1];
        }
    }

    my @permutations;
    permute { push @permutations, \@_; } (1 .. 9);
```


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/laurent-rosenfeld/perl/ch-2.pl)

Laurent gives us a nice little recursive routine, `permute`, that does dual duty: on every pass-through it spawns new lists, each appeanding a remaining number option, and on detecting that there are no longer any unused numbers to append the exit case descends into a list of validation tests based on array slices. Any candidate that successfully runs this gauntlet gets added to the output array.

```perl
    sub permute {
        my ($in, $left) = @_;
        if (scalar @$left == 0) {
            return
                # lines
                if sum( @{$in}[0..2]) != SUM
                or sum( @{$in}[3..5]) != SUM
                or sum( @{$in}[6..8]) != SUM
                # columns
                or sum( @{$in}[0, 3, 6]) != SUM
                or sum( @{$in}[1, 4, 7]) != SUM
                or sum( @{$in}[2, 5, 8]) != SUM
                # diagonals
                or sum( @{$in}[0, 4, 8]) != SUM
                or sum( @{$in}[2, 4, 6]) != SUM;
            push @permutations, $in;
            return;
        }
        for my $candidate (@$left) {
            my @vals = @$in;
            push @vals, $candidate;
            permute(\@vals, [grep $_ != $candidate, @$left]);
        }
    }
```


[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/arne-sommer/perl/ch-2.pl)

Arne falls back on what has become a familiar favorite around here, `Algorithm::Combinatorics`, to provide us with its `permutations` routine. From this there is no need to explicitly create a multidimentional array of arrays, as he can just provide a cascading list of validation checks between individual elements, moving to the next iteration on any failure.

```perl
use Algorithm::Combinatorics 'permutations';

for my $list (permutations(\@source))
{
  my @candidate = @$list;
  say ":: " . join(@candidate, ", ") if $verbose;
  my ($a, $b, $c, $d, $e, $f, $g, $h, $i) = @candidate;

  next unless $a + $b + $c == 15;
  next unless $d + $e + $f == 15;
  next unless $g + $h + $i == 15;
  next unless $a + $d + $g == 15;
  next unless $b + $e + $h == 15;
  next unless $c + $f + $i == 15;
  next unless $a + $e + $i == 15;
  next unless $c + $e + $g == 15;

  say "[ " . join(" ", @candidate[0..2]) . " ]";
  say "[ " . join(" ", @candidate[3..5]) . " ]";
  say "[ " . join(" ", @candidate[6..8]) . " ]";
  say "" if $all;

  last unless $all;
}
```

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/adam-russell/perl/ch-2.pl)
follows much the same pattern, only drawing on `Math::GSL::Permutation` to do the mixing up.


## use LOGIC to reduce the COMPLEXITY
[**Alexander Karelas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/alexander-karelas/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/colin-crain/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/cheok-yin-fung/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/james-smith/perl/ch-2.pl), and
[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/nunovieira220/perl/ch-2.pl)

One way to check possible arrangements is to try every combination, and we've looked at that. But by placing elements one by one, each element on insertion puts logical constraints on other cells within the matrix, in turn limiting the number of remaining arrangements available. For example, by placing a 1 in an empty line, the next cell cannot be a 2, because that would require the last position to be a 12, which is out-of-bounds. By identifying these constraints, the search space can be drastically limited.

[**Alexander Karelas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/alexander-karelas/perl/ch-2.pl)

starts us off by reducing the solution space to a 2x2 matrix, as each two values on a given line determines the third. By cycling through 4 loops, removing values already placed from consideration, we only need to fill out and validate 3024 kernels.

```perl
    for my $x (1 .. 9) {
        for my $y (1 .. 9) {
            next if $y == $x;
            for my $z (1 .. 9) {
                next if $z == $y or $z == $x;
                for my $w (1 .. 9) {
                    next if $w == $z or $w == $y or $w == $x;
                     ++$count;
                   reset_available();
                    delete @available_numbers{($x, $y, $z, $w)};
                    my $num_0_2 = 15 - $x - $y;
                    next unless delete $available_numbers{$num_0_2};
                    my $num_1_2 = 15 - $z - $w;
                    next unless delete $available_numbers{$num_1_2};
                    my $num_2_0 = 15 - $x - $z;
                    next unless delete $available_numbers{$num_2_0};
                    my $num_2_1 = 15 - $y - $w;
                    next unless delete $available_numbers{$num_2_1};
                    my $num_2_2 = 15 - $num_2_0 - $num_2_1;
                    next unless delete $available_numbers{$num_2_2};

                    next unless $x + $w + $num_2_2 == 15;
                    next unless $num_0_2 + $w + $num_2_0 == 15;

                    print "[ $x $y $num_0_2 ]\n";
                    print "[ $z $w $num_1_2 ]\n";
                    print "[ $num_2_0 $num_2_1 $num_2_2 ]\n";
                    print "=================\n";
                }
            }
        }
    }
```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/cheok-yin-fung/perl/ch-2.pl)

CY delivers us a solution that uses logic to reduce the configuration to two cells beyond placing an initial value of 5 in the center. [In her blog](http://blogs.perl.org/users/c_y_fung/2020/12/magic-square-and-magic-cube.html) she provides a mathematical proof that the center is indeed 5, so I've decided to excerpt that proof here rather than the code she produced to implement it. I like a well-reasoned deduction, and this approach in particular. As a bonus, appended to her submission she also delivers a similarly formed solution to a 3x3x3 *magic cube*, with lines that add to 42. Nice. Follow the link to have a look.

```
    a b c
    d e f
    g h i

    Statement: The center term, "$e" , is 5.
    Proof:
    Given the sum of each "segment" is 15.

    Consider
      sum of 2 outer rows - the middle column - sum of 2 diagonals
    = (2-1-2)*15

    Then we have
    (a+b+c + g+h+i) - (b+e+h) - (a+e+i + c+e+g) = (2-1-2)*15
    -3*e = -15
    e = 5  □


    Then loop the values of $a and $b over 1 to 9

    $i = 10-$a
    $c = 15-$a-$b
    $h = 10-$b
    $g = 10-$c
    $d = 15-$a-$g
    $f = 15-$c-$i
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/james-smith/perl/ch-2.pl)

James provides us with two very well-documented solutions, using a very similar line of reasoning to that of CY, above. Here is the first, and you can see the parallels clearly. In the second form he gives us a functional version, this one using nested `map` and `grep` statements, with the same underlying logic.

```perl
    sub magic {
      my @solutions = ();
      foreach my $a (1..4,6..9) { ## a can't be 5...
                        ## $b can't be 5, can't be $a and can't make $c 5
        foreach my $b ( grep { $_!=5 && $_!=$a && $a+$_!=10 } ($a<6?6-$a:1)..($a<6?9:14-$a) ) {
          ## Only 32 get here!

          ## Check digits unique and between 1 and 9 { all digits can be computed in terms of a & b }
          my $digits = [ [ $a,         $b,    15-$a-$b   ],
                         [ 20-2*$a-$b, 5,     2*$a+$b-10 ],
                         [ $a+$b-5,    10-$b, 10-$a      ] ];

          ## Convert into the required grid if numbers unique and 1..9
          push @solutions, $digits if '123456789' eq join q(), sort map {@{$_}} @{$digits};
        }
      }
      return @solutions;
    }
```


For
[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/colin-crain/perl/ch-2.pl)

I maximized the effects of the constraining actions by carefully choosing the order of the cells assigned: the placing of the center first alters 4 lines, 2 orthogonal and 2 diagonal, affecting all 8 cells surrounding it; the corners are weighted more than the sides, as they affect three lines — horizontal, vertical and diagonal. I determined that by placing the center and one corner, by the time we place one adjacent corner all of the other squares are defined by these three and the square will either work or not. Thus the 9! combination in the phase space becomes 9 options for the center, 56 valid options for the first corner and only 288 choices at the second corner, quite a reduction from 9 factorial. It seems that if I had followed my reasoning further and concluded the center had to be 5, I could have reduced that number to 48.

```perl
    ## place center value
    for my $center (keys %numbers) {
        ## start possible solution with center placed
        ## and removed from remaining number list
        my @sol_center;
        $sol_center[4] = $center;
        my %nums_center = %numbers;
        delete $nums_center{$center};

        ## place top left value
        for my $left (keys %nums_center) {
            ## new copy within loop
            ## for solution and remaining number list
            my @sol_left = @sol_center;
            my %nums_left  = %nums_center;

            next unless add_left($left, \@sol_left, \%nums_left);

            ## place top right value
            ## from this is can be determined whether the square can be comleted
            for my $right (keys %nums_left) {
                my $solution = add_right($right, \@sol_left, \%nums_left );
                push @output, $solution if defined $solution;
            }
        }
    }
```


### use VALID 3-TUPLES as the base unit
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/duncan-c-white/perl/ch-2.pl),
[**Miguel Prz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/miguel-prz/perl/ch-2.pl), and
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/sgreen/perl/ch-2.pl)

A different approach to restricting the combinations is to start with the limited number of 3-sets that sum to 15 and use those as our basic building blocks. There are in fact only 8 of these, and with 6 permutations per tuple, this means there are only 48 ways to build a line that sums to 15.

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/duncan-c-white/perl/ch-2.pl)

Duncan builds a valid top row, then constructs a valid second row beneath it using the remaining values. He then hands this off to a `thirdrow` function that computes the values for that row from completing the vertical lines and decides whether it all works.

```perl
    # thirdrow( $a, $b, $c, $d, $e, $f, %used );
    #    Given consistent values $a..$f which satisfy all constraints for the
    #    first two rows, and %used, the set of all values $a..$f, try to
    #    find values of the third row ($g, $h and $i) which work, printing
    #    any solutions we find.  Of course, all of $h, $h and $i are forced
    #    by the earlier values..
    #
    fun thirdrow( $a, $b, $c, $d, $e, $f, %used )
    {
        my $g=15-$a-$d;    	# g is forced

        # now check $g
        if( $g>=1 && $g<=9 && ! $used{$g} )
        {
            $used{$g} = 1;
            say "$a $b $c\n$d $e $f\n$g ? ?\n" if $debug;

            my $h = 15-$b-$e;    # h is forced

            # now check $h
            if( $h>=1 && $h<=9 && ! $used{$h} )
            {
                $used{$h} = 1;
                say "$a $b $c\n$d $e $f\n$g $h ?\n" if $debug;

                my $i=15-$g-$h;    	# $i is forced

                # now check $i
                if( $i>=1 && $i<=9 && ! $used{$i} && $a+$e+$i==15 && $c+$f+$i==15 )
                {
                    say "solution:\n$a $b $c\n$d $e $f\n$g $h $i";
                }
                delete $used{$h};
            }
            delete $used{$g};
        }
    }
```

[**Miguel Prz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/miguel-prz/perl/ch-2.pl)

Miguel takes a similar approach, computing a master list of all 48 tuples to start and filtering it as he goes.

```perl
    # Try valid 3-tuples for row 1
    for my $current_1 ($valid->@*) {
        _set_magic_matrix_values_ ( $mag_mat, [qw/a b c/], $current_1 );

        # Filter the tuples candidates for 2nd row
        my @valid_2 = grep { ! _match_arrays_ ($_, $current_1) } $valid->@*;

        # Try valid 3-tuples for row 2
        for my $current_2 (@valid_2) {
            _set_magic_matrix_values_ ( $mag_mat, [qw/d e f/], $current_2 );

            # Filter the tuples candidates for 3nd row
            my @valid_3 = grep { ! _match_arrays_ ($_, $current_2) } @valid_2;

            # Try valid 3-tuples for row 3
            for my $current_3 (  @valid_3 ) {
                _set_magic_matrix_values_( $mag_mat, [qw/g h i/], $current_3 );

                # Check the magic rules, and if ok, add the current setup to
                # the final solutions
                _check_magic_rules_ ($mag_mat)
                    && push @solutions, [$current_1, $current_2, $current_3];
            }
        }
    }
```

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/sgreen/perl/ch-2.pl)

Simon starts with the 8 unordered sets, combining them into sets of first, second and third rows containing all 9 numbers. From there he needs to see if he can arrange the sequences to make a magic square:

```perl
    # We now have all possible solutions, but don't know the order of
    # values in each row. Time for some brute force work
    foreach my $solution (@solutions) {
        foreach my $first_row ( _combinations( $solution->[0] ) ) {
            foreach my $second_row ( _combinations( $solution->[1] ) ) {
                foreach my $third_row ( _combinations( $solution->[2] ) ) {
                    if ( $first_row->[0] + $second_row->[0] + $third_row->[0] == 15
                        and $first_row->[1] + $second_row->[1] + $third_row->[1] == 15
                        and $first_row->[2] + $second_row->[2] + $third_row->[2] == 15
                        and $first_row->[0] + $second_row->[1] + $third_row->[2] == 15
                        and $first_row->[2] + $second_row->[1] + $third_row->[0] == 15 )
                    {
                        # We have the solution
                        foreach ( $first_row, $second_row, $third_row ) {
                            say '[ ', join( ' ', @$_ ), ' ]';
                        }
                        return;
                    }
                }
            }
        }
    }
```



### then again, we can logically REDUCE the puzzle to NOTHINGNESS
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/abigail/perl/ch-2.pl) and
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/alexander-pankoff/perl/ch-2.pl)

The logical reduction we saw above in my own, CY and James's solutions is not, in fact, the end of it. No, it is not.

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/abigail/perl/ch-2.pl)

Abigail takes things all the way, completely deriving the fact that there is and can only be exactly one square, reflected and rotated. I'll let him explain it himself:

>There is only one 3x3 matrix, 8 if you count rotations and reflections.
>
>- You need an odd number of odd numbers to sum to 15, so each row, column or diagonal contain 0 or 2 even numbers.
>- There are 5 odd numbers in the range 1-9, and 4 even numbers.
>- Hence, all the corners contain even numbers, the rest are odd.
>- This means, there are 2 triples with all odd numbers; together they contain all the odd numbers, and one odd number (the one in the center) is part of both.
>- The only all odd triplet containing a 9 which sums to 15 is (9, 5, 1). Which means the other triplet must contain a 7 and a 3, and to have that sum to 15, a 5 as well. Which means, 5 is in the center.
>- Now we can pick any even number (one of four) and place it in a corner. This fixes the number in the opposite corner. We then place the remaining two even numbers in the remaining corners (either possibility works).
>- There is now one way to place the remaining four odd numbers.
>
>This leads to the following solutions (all the others can be obtained by rotations and reflections):
>
>      8 1 6
>      3 5 7
>      4 9 2

hence his script becomes:

```perl
    print << '--';
    8 1 6
    3 5 7
    4 9 2
    --
```

[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/alexander-pankoff/perl/ch-2.pl)
provides essentially the same script, without the explanation.



## the SIAMESE method, or DE LA LOUBÈRE
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/athanasius/perl/ch-2.pl),
[**Joel Crosswhite**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/jcrosswh/perl/ch-2.pl),
[**Julio de Castro**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/juliodcs/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/roger-bell-west/perl/ch-2.pl),
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/walt-mankowski/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/wanderdoc/perl/ch-2.pl)

Brought to France from the Kingdon of Siam by Simon de la Loubère in 1688, the "Siamese Method", as it is known, is a means of constructing odd-sized magic squares. As the side length here is 3, it is applicable. It works with any arithmetic progression of digits. The first digit is placed in the center of the top row, and from there, the method has two rules:

1. Place successive digits in the pattern up one and right one cell from the previous. The boundaries of the square are assumed to wrap around: the top row connects above to the bottom and the right side connects continuing from the left.
2. If the next square is already filled, move down one square towards the bottom and place the next digit there, and continue as before.

Implementing this is simply a matter of bookkeeping and modulo math.

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/athanasius/perl/ch-2.pl)

walks us through the process:

```perl
    my $max_idx = $order - 1;
    my $row     = 1;
    my $col     = int( ($order / 2) ) - 1;

    for my $n (1 .. $order * $order)
    {
        if    ($row == 0 && $col == $max_idx)  # At the top right corner:
        {                                      #   Drop down one row
            $row = 1;
        }
        elsif ($row == 0)                      # On the top edge:
        {                                      #   Wrap around to the last row
            $row = $max_idx;
            ++$col;
        }
        elsif ($col == $max_idx)               # On the right edge:
        {                                      #   Wrap around to first column
            $col = 0;
            --$row;
        }
        elsif ($square->[$row - 1][$col + 1] > 0)
        {                                      # Next square is already filled:
            ++$row;                            #   Drop down one row
        }
        else                                   # Default case:
        {                                      #   Move diagonally up and right
            --$row;
            ++$col;
        }

        $square->[$row][$col] = $n;
    }
```

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/wanderdoc/perl/ch-2.pl)

The wandering doctor presents a positively *airy* version:

```perl
     while ( grep { not defined($_)} map {@$_} @$aref )
     {
          $aref->[$r][$c] = $counter++;

          if ( ($r - 1) < 0 and ($c - 1) < 0 )
          {
               $r++;
          }

          elsif ( ($r - 1) < 0 )
          {
               $r = $n - 1;
               $c--;
          }

          elsif ( ($c - 1) < 0 )
          {

               $c = $n - 1;
               $r--;
          }

          elsif ( $aref->[$r - 1][$c - 1])
          {
               $r++;
          }

          else
          {
               $r--;
               $c--;
          }
     }

```

Whereas
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/walt-mankowski/perl/ch-2.pl)

reduces the logic down into a nice compact form:

```perl
    for my $i (1..9) {
        $m[$r][$c] = $i;
        my $r1 = ($r - 1) % $m;
        my $c1 = ($c + 1) % $m;
        if (defined $m[$r1][$c1]) {
            $r = ($r + 1) % $m;
        } else {
            $r = $r1;
            $c = $c1;
        }
    }
```

As does
[**Joel Crosswhite**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/jcrosswh/perl/ch-2.pl):

```perl
while ($value < $max_value) {

    if (!defined($matrix[$location[0]][$location[1]])) {
        $matrix[$location[0]][$location[1]] = $value++;
        $location[0] = ($location[0] - 1) % $LENGTH;
        $location[1] = ($location[1] + 1) % $LENGTH;
    } else {
        $location[0] = ((($location[0] + 1) % $LENGTH) + 1) % $LENGTH;
        $location[1] = ($location[1] - 1) % $LENGTH;
    }
}
```

Finally, we have the submission from

[**Julio de Castro**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/juliodcs/perl/ch-2.pl)

Julio gives us a slight variation on a the method: starting at the center of the righthand column, he moves up and to the right as normal, yet instead of moving down at an impasse, moves one square to the left. In other regards the algorithm is identical, and works of any sized odd square. Practically, this is the original algorithm mirrored across the x = y diagonal (depending how you define that), or reflected and rotated. It stands to reason with 8 valid rearrangements of the same solution, there will exist 8 transformative variations on the algorithm to produce them. You might think of it terms of higher-order programming, applying the transformation functions on the matrix to produce the 8 variations to the algorithm that produces the matrix instead.

```perl
    sub set_positions($matrix, $side) {
        my $y = int($side / 2);
        my $x = $side - 1;
        for my $number (1 .. $side ** 2) {
            if ($y == 0 && $x == $side - 1) {
                $x--;
            }
            elsif ($number > 1) {
                $y = ($y - 1) % $side;
                $x = ($x + 1) % $side;
            }

            if ($matrix->[$y][$x] != 0) {
                $y = ($y + 1) % $side;
                $x = ($x - 2) % $side;
            }

            $matrix->[$y][$x] = $number;
            display_matrix($matrix, $side);
        }
    }
```

## ECCENTRICS, RENEGADES and VISIONARIES make the world a more interesting place!

### permutations and PDL
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/wlmb/perl/ch-2.pl)

Luis constructs a recursive function to build up permutations, taking a different tack so that each distinct permutation is completed and evaluated before returning and completing the next. The evaluation is done using a callback routine that gets included and passed along as the recursion descends.

To actually do his validation, he uses the Perl Data Language, or PDL. I'm quite fond of watching the PDL do its work. `sumover` will sum a row, and then he can transform the matrix and examine it along the various axes. Apparently we get an `all` logical junction as well. Cool.

```perl
    sub test_magic {
        use PDL; #Use perl data language to simplify coding matrix operations
        use PDL::NiceSlice;
        my $all_flag=shift;
        my $square=pdl(@_)->reshape(3,3); # turn array into pdl square matrix
        my $ok=    all($square->sumover==15)                    # check sum of rows
            && all($square->transpose->sumover==15)         # of columns
            && $square->diagonal(0,1)->sumover==15          # of main diagonal
                && $square->(-1:0)->diagonal(0,1)->sumover==15; # and of inverted diagonal
        if($ok){
        say $square;
        return !$all_flag; # replace 1 by 0 to generate all magical matrices.
        }
        return 0;
    }
```



### constraint programming
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/polettix/perl/ch-2.pl)

Flavio has decided to solve this in a markedly unusual manner, breaking from the pack to submit his solution using an abstracted constraint programming paradigm. In it he (re-) uses an abstracted state framework he has created to keep track of the development and constraints on the problem space, using various data structures that remain encapsulated in a `$state` hash.

The `$state` is essentially a large abstract framework much like an object, that holds all the information for the problem in one place: constraints are ideas we've seen elsewhere like `$m[0] + $m[1] + $m[2] == 15`, "not allocated" is the numbers to be distributed, the "field" records the placements made and `&_search_factory` is a code reference that holds the decision-making routine that decides how to allocate numbers.

What we've done here in shifting the paradigm is moved from an imperative model of telling the program how to proceed next to a declarative model: here is the problem, all wrapped up in a data structure. Is is solved yet? No? Then try the next state as defined. Is it solved yet?

The actual process of moving the state forward, or backtracking as required, is done by the `solve_by_constraints` routine. There's quite a bit more to it, and interested parties are steered to Flavio's [extensive blog writeup on his method](https://github.polettix.it/ETOOBUSY/2020/12/02/pwc089-magical-matrix/).


```perl
    sub solve_by_constraints {
       my %args = (@_ && ref($_[0])) ? %{$_[0]} : @_;
       my @reqs = qw< constraints is_done search_factory start >;
       exists($args{$_}) || die "missing parameter '$_'" for @reqs;
       my ($constraints, $done, $factory, $state, @stack) = @args{@reqs};
       my $logger = $args{logger} // undef;
       while ('necessary') {
          last if eval {    # eval - constraints might complain loudly...
             $logger->(validating => $state) if $logger;
             my $changed = -1;
             while ($changed != 0) {
                $changed = 0;
                $changed += $_->($state) for @$constraints;
                $logger->(pruned => $state) if $logger;
             } ## end while ($changed != 0)
             $done->($state) || (push(@stack, $factory->($state)) && undef);
          };
          $logger->(backtrack => $state, $@) if $logger;
          while (@stack) {
             last if $stack[-1]->($state);
             pop @stack;
          }
          return unless @stack;
       } ## end while ('necessary')
       return $state;
    } ## end sub solve_by_constraints

    sub magical_matrix ($N) {
       my $N2 = $N * $N;
       my $solution = solve_by_constraints(
          start => {
             not_allocated => { map {$_ => 1} 1 .. $N2 },
             field => [ (0) x $N2 ],
             fine  => {},
          },
          is_done => sub ($state) { keys($state->{not_allocated}->%*) == 0 },
          constraints => [
             (map {_constraint($N, $_ * $N,  1)} 0 .. ($N - 1)), # rows
             (map {_constraint($N, $_,      $N)} 0 .. ($N - 1)), # cols
             _constraint($N, 0,      $N + 1),                    # main diag
             _constraint($N, $N - 1, $N - 1),                    # other diag
          ],
          search_factory => \&_search_factory,
       ) or die "cannot find a solution for N = $N\n";
       my $field = $solution->{field};
       return [map {[splice $field->@*, 0, $N]} 1 .. $N];
    }
```


### more PDL goodness
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/jo-37/perl/ch-2.pl)

Jorg delivers with the [PDL](http://pdl.perl.org) again, this time implementing the Siamese method. I never tire of studying these examples. The documentation reveals that the modulo magic is enacted by setting the range to 'periodic'.

```perl
    sub siamese {
        my $n = shift;
        my $ord =  2 * $n + 1 ;
        my $msq = zeroes(long, $ord, $ord)->inplace->setvaltobad(0);
        my $idx = long $n, 0;
        for my $val (1 .. $ord ** 2) {
            $msq->range($idx, 0, 'periodic') .= $val;
            say $msq if $::verbose;
            $idx += $val % $ord ? long(1, -1) : long(0, 1);
        }
        # Return order, magic constant and magic square
        ($ord, ($ord**3 + $ord) / 2, $msq);
    }

    # Create some magic squares and check row, column and diagonal
    # sums.
    for my $n (1 .. 3) {
        my ($ord, $magic, $sq) = siamese $n;
        say $sq;

        is $sq->sumover->unpdl, [($magic) x $ord], 'row sums';
        is $sq->xchg(0, 1)->sumover->unpdl, [($magic) x $ord], 'col sums';
        is sum($sq->diagonal(0, 1)), $magic, 'diag sum';
        is sum($sq->slice('-1:0')->diagonal(0, 1)), $magic, 'antidiag sum';
    }
```

---

# BLOGS {#PWC089BLOGS}

---

**That’s it for me this week, people! Resolute and unbroken by the torrential waves, I have buoyed, refloated and maintained my bearings. Looking forward to next wave, the perfect wave, I am: your humble servant.**

## But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC089BLOGS}
## then *RUN* *(dont walk!)* to the *WATERING HOLE*
## and *READ* these *BLOG* *LINKS*:

***( don't think, trust your training, you're in the zone, just do it ... )***


[**Aaron Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/aaronreidsmith/perl/ch-2.pl)

 * [Perl Weekly Challenge 89 - Aaron Smith](https://aaronreidsmith.github.io/blog/perl-weekly-challenge-089/) ( *Raku* )

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/abigail/perl/ch-2.pl)

 * [Perl Weekly Challenge 89, Part 1 &#8211; Abigail&#039;s Programming Blog](https://wp.me/pcxd30-br) ( *Perl* )
 * [Perl Weekly Challenge 89, Part 2 &#8211; Abigail&#039;s Programming Blog](https://wp.me/pcxd30-bI) ( *Perl* )

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/adam-russell/perl/ch-2.pl)

 * [Perl Weekly Challenge 089](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2020/12/06) ( *Perl* )
 * [Perl Weekly Challenge 089](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2020/12/06) ( *Prolog* )

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/arne-sommer/perl/ch-2.pl)

 * [Magical Sum with Raku and Perl](https://raku-musings.com/magical-sum.html) ( *Perl & Raku* )

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/cheok-yin-fung/perl/ch-2.pl)

 * [CY's Brute-Force Take on Task 2 of PWC#089 &#8211; Moments on Perl or other Programming Issues](http://blogs.perl.org/users/c_y_fung/2020/12/magic-square-and-magic-cube.html) ( *Perl* )

[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/colin-crain/perl/ch-2.pl)

 * [The Greatest Common Magick Trick &#8211; Programming Excursions in Perl and Raku](https://colincrain.com/2020/12/06/the-greatest-common-magick-trick/) ( *Perl & Raku* )

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/dave-jacoby/perl/ch-2.pl)

 * [Perl Challenge 89 and the Return of the Son of Overkill &#8211; Committed to Memory](https://jacoby.github.io/2020/11/30/perl-challenge-89-and-the-return-of-the-son-of-overkill.html) ( *Perl* )

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/polettix/perl/ch-2.pl)

 * [PWC089 - GCD Sum - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2020/12/01/pwc089-gcd-sum/) ( *Perl* )
 * [PWC089 - Magical Matrix - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2020/12/02/pwc089-magical-matrix/) ( *Perl* )

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/jaldhar-h-vyas/perl/ch-2.pl)

 * [Perl Weekly Challenge: Week 89](https://www.braincells.com/perl/2020/12/perl_weekly_challenge_week_89.html) ( *Perl & Raku* )

[**Kang-min Liu**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/gugod/perl/ch-2.pl)

 * [Solving Perl Weekly Challenge 089 -- GCD Sum and the magic square.](https://gugod.org/2020/12/pwc-089-en/) ( *Raku* )
 * [解 Perl Weekly Challenge 089 -- 公因數之和與魔方](https://gugod.org/2020/12/pwc-089/) ( *Raku* )

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/laurent-rosenfeld/perl/ch-2.pl)

 * [Perl Weekly Challenge 89: GCD Sums and Magic Squares](http://blogs.perl.org/users/laurent_r/2020/12/perl-weekly-challenge-89-gcd-sums-and-magic-squares.html) ( *Perl & Raku* )

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/roger-bell-west/perl/ch-2.pl)

 * [RogerBW&#39;s Blog: Perl Weekly Challenge 89: magic sum](https://blog.firedrake.org/archive/2020/12/Perl_Weekly_Challenge_89__magic_sum.html) ( *Perl & Raku* )

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/sgreen/perl/ch-2.pl)

 * [Weekly Challenge 089](https://dev.to/simongreennet/weekly-challenge-089-f3) ( *Perl* )

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/wlmb/perl/ch-2.pl)

 * [Perl Weekly Challenge 89](https://wlmb.github.io/PWC89/) ( *Perl* )

[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/walt-mankowski/perl/ch-2.pl)

 * [Perl Weekly Challenge 89](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-089/walt-mankowski/README.md) ( *Perl*  & *Matlab*)
