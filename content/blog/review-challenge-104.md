
---
author:       Colin Crain
date:         2021-04-05T00:00:00
description:  "Colin Crain › Perl Weekly Review #104"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #104"
image:        images/blog/p5-review-challenge-104.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-103/).* )

Welcome to the Perl review for **Week 104** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-104/) or the summary [**recap**](/blog/recap-challenge-104/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC104TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC104TASK2)   &nbsp;  &nbsp;  &nbsp;       •   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC104BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC104TASK1}

# FUSC Sequence
*Submitted by: Mohammad S Anwar*

Write a script to generate first 50 members of FUSC Sequence.

Please refer to OEIS for more information._

The sequence defined as below:

    fusc(0) = 0
    fusc(1) = 1
    for n > 1:
    when n is even: fusc(n) = fusc(n / 2),
    when n is odd: fusc(n) = fusc((n-1)/2) + fusc((n+1)/2)

## about the solutions
[**Alexander Karelas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/alexander-karelas/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/athanasius/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/colin-crain/perl/ch-1.pl),
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/cristian-heredia/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/jo-37/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/lubos-kolouch/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/perlboy1967/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/paulo-custodio/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/pete-houston/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/roger-bell-west/perl/ch-1.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/stuart-little/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/ulrich-rieke/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/wanderdoc/perl/ch-1.pl)

There were 22 submissions for the first task this past week.

The directive, as stated, is to "generate" the first fifty members of the FUSC sequence. This is a rather open-ended request, as it isn't specified how we should go about doing so, only giving a simple definition for the values and a [reference to the OEIS](http://oeis.org/A002487). It wasn't, for example, stated that we should write a discreet function to produce an arbitrary FUSC value from an index.

As the only requirement was to run the script and end up with a list of elements, we ended up with a vast range of approaches to the problem, of varying complexity, from trivial to mind-bogglingly mathematical. So buckle up, this is going to take some time.

## the BASIC ALGORITHM

The given algorithm, as defined, will produce any member of the FUSC sequence. This was by far the most commonly used method to generate the values.

### ...in a RECURSIVE FUNCTION
[**Alexander Karelas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/alexander-karelas/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/colin-crain/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/duncan-c-white/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/james-smith/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/perlboy1967/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/paulo-custodio/perl/ch-1.pl), and
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/roger-bell-west/perl/ch-1.pl)

As the definition is [self-referential](https://perlweeklychallenge.org/blog/review-challenge-104/), it follows that a recursive function would fall right out, and it does, quite nicely.

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/jaldhar-h-vyas/perl/ch-1.pl)

Jaldhar demonstrates a straightforward implementation:

```perl
    sub fusc {
        my ($n) = @_;

        if ($n < 2) {
            return $n;
        }

        if ($n % 2 == 0) {
            return fusc($n / 2);
        } else {
            return fusc(($n - 1) / 2) + fusc(($n + 1) / 2);
        }
    }

    for my $n (0 .. 49) {
        print fusc($n), ' ';
    }
```

[**Alexander Karelas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/alexander-karelas/perl/ch-1.pl)

Here is another, very similar version from Karelas. As you can see the code follows directly from the definition.

```perl
    sub fusc ($n) {
        return $n if $n <= 1;
        if ($n % 2 == 0) {
            return fusc($n / 2);
        } else {
            return fusc(($n - 1) / 2) + fusc(($n + 1) / 2);
        }
    }

    for (my $i = 0; $i < 50; $i++) {
        say $i, ": ", fusc($i);
    }
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/dave-jacoby/perl/ch-1.pl)

As Dave is so wont to say,

>"This looks like a job for RECURSION!"

With that lead in it would be a shame to leave out his example:

```perl
    say join ', ', map { fusc($_) } 0 .. 60;

    sub fusc ( $n ) {

        # fusc(0) = 0
        # fusc(1) = 1
        return $n if $n < 2;

        # when n is even: fusc(n) = fusc(n / 2),
        return fusc( int $n / 2 ) if $n % 2 == 0;

        # when n is odd: fusc(n) = fusc((n-1)/2) + fusc((n+1)/2)
        return fusc( int( $n - 1 ) / 2 ) + fusc( ( $n + 1 ) / 2 );
    }
```

### ...making a LIST from a LOOP
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/cheok-yin-fung/perl/ch-1.pl),
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/cristian-heredia/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/lubos-kolouch/perl/ch-1.pl), and
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/stuart-little/perl/ch-1.pl)

The recursive function is straightforward, but making an explicit, separate function to randomly access our value isn't strictly required. As the method calculates from previous values, building up a list in a loop is extremely quick, and happens to be exactly what we are being asked for.

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/cheok-yin-fung/perl/ch-1.pl)

CY displays the elegant simplicity of this approach, reducing the logic to an extremely compact form by using a ternary operator to decide the direction each value.

```perl
    for my $i (2..50) {
        $a[$i] = $i % 2 == 0 ? $a[$i/2] : $a[($i-1)/2]+$a[($i+1)/2];
    }
```

[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/cristian-heredia/perl/ch-1.pl)

Christina stores her list in a hash, but otherwise operates in much the same manner.

```perl
    sub sequenceFusc {
        while ($n <= $max) {
           #if is even:
           if ($n % 2 == 0) {
               $fusc{$n} = $fusc{$n/2};
           }
           else {
               $fusc{$n} = $fusc{($n-1)/2} + $fusc{($n+1)/2};
           }
           $n++;
        }
    }
```

[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/lubos-kolouch/perl/ch-1.pl)

Lubos also chose a hash structure to park his previous values...

```perl
    sub get_fusc {
        my $what = shift;

        my %fusc = ( 0 => 0, 1 => 1 );

        for my $i (2..$what - 1) {
            if ($i % 2 == 0) {
                $fusc{$i} = $fusc{$i / 2}
            } else {
                $fusc{$i} = $fusc{($i-1)/2} + $fusc{($i+1)/2}
            }
        }

        return [@fusc{0 .. $what-1}];
    }
```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/laurent-rosenfeld/perl/ch-1.pl)

... and Laurent also uses a ternary operation to alternate between cases...

```perl
    my @fusc = (0, 1);
    for my $i (2..49) {
        $fusc[$i] = $i % 2 == 0 ? $fusc[$i/2] :
            $fusc[($i-1)/2] + $fusc[($i+1)/2];
    }
```

[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/stuart-little/perl/ch-1.pl)

...as does Stuart:

```perl
    sub fusc($n) {
        my @a=(0,1);
        for (2..$n-1) {
            my $new = ($_ % 2 == 0) ? ($a[$_/2]) : ($a[($_-1)/2] + $a[($_+1)/2]);
            push @a, ($new,);
        }
        return \@a;
    }
```


### a slight MATHEMATICAL REWORKING
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/duncan-c-white/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/roger-bell-west/perl/ch-1.pl), and
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/ulrich-rieke/perl/ch-1.pl)

Several submissions noticed that if we apply a little algebra to our definition, it can be reworked into a arguably simpler form. In the second part of the definition, where the index is odd, the value is stated to be

```
    fusc(n) = fusc((n-1)/2) + fusc((n+1)/2)

```

As the given index is known to be odd, one half the index will be a fractional value ending in one-half. The above equation can then be said to resolve to one-half the value *n* minus the fraction, rounded down, and one-half the value rounded *up*. Or alternately  first subtracting one from the value, making it even, then using one-half *n* and one-half *n* plus 1.

```
    fusc(n) = fusc((n-1)/2) + fusc((n+1)/2)

    -->       fusc( floor n/2 ) + fusc( floor n/2 + 1 )

```

We can then isolate out the floored half and the function becomes

```
    half    = floor n/2
    fusc(n) = fusc( half ) + fusc( half + 1)

```

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/ulrich-rieke/perl/ch-1.pl)

Ulrich uses this approach, as you can see here. For positive numbers integer truncation produces the floor.

```perl
    push (@fusc , 0 , 1 ) ;
    for my $n (2 .. 49 ) {
      if ( $n % 2 == 0 ) {
          $fusc[ $n ] = $fusc[ $n / 2 ] ;
      }
      else {
          my $half = int( $n / 2 ) ;
          $fusc[ $n ] = $fusc[ $half ] + $fusc[ $half + 1 ] ;
      }
    }
```

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/duncan-c-white/perl/ch-1.pl)

Duncan takes the other approach, subtracting 1 from the number, causing it to become evenly divisible by 2 and making the integer truncation superfluous.

```perl
fun fusc( $n )
    {
        die "fusc: $n must be +ve\n" if $n<0;
        return $n if $n < 2;

        # if $n is even:
        return fusc( $n / 2 ) if $n % 2 == 0;

        # if $n is odd:
        my $halfn = ($n-1)/2;
        return fusc($halfn) + fusc($halfn+1);
    }
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/roger-bell-west/perl/ch-1.pl)

Roger's code looks a little different, but utilizes the same transformation. No matter which method is chosen, in the end the same combinations of previous values are used to construct new elements of the sequence.

```perl
    sub fusc {
      my $n=shift;
      if ($n==0) {
        return 0;
      } elsif ($n==1) {
        return 1;
      } elsif ($n%2 == 0) {
        return fusc($n/2);
      } else {
        my $h=($n-1)/2;
        return fusc($h)+fusc($h+1);
      }
    }
```

### an IMPROVED version of LOOPING
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/athanasius/perl/ch-1.pl) and
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/pete-houston/perl/ch-1.pl)

As the construction of the sequence progresses in a alternating even and odd steps, it was noted that both steps could be made in each pass through a loop, doing twice the work and shortening the number of iterations.

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/pete-houston/perl/ch-1.pl)

Pete provides us with two versions of the solution, one using the basic algorithm in a loop, the other demonstrating this combining alternating steps into a single pass.

```perl
    sub look_ahead {
        my $max = shift;
        my @fusc = (0, 1);
        for my $n (1 .. $max / 2) {
            push @fusc, $fusc[$n];
            push @fusc, $fusc[$n] + $fusc[$n + 1];
        }
        pop @fusc unless $max % 2;
        return @fusc;
    }
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/athanasius/perl/ch-1.pl)

The monk utilizes this same technique, condensing the workflow into a very compact form:

```perl
    for my $n (1 .. 25)
    {
        my $fusc_n = $fusc[ $n ];

        $fusc[ 2 * $n     ] = $fusc_n;
        $fusc[ 2 * $n + 1 ] = $fusc_n + $fusc[ $n + 1 ];
    }
```

## to MEMOIZE or not to MEMOIZE?
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/colin-crain/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/james-smith/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/perlboy1967/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/paulo-custodio/perl/ch-1.pl), and
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/roger-bell-west/perl/ch-1.pl)

With the recursive solutions drawing on previously computed values, as the numbers get larger there will be a certain amount of redundant calculation as the fractional components get reused at, roughly, each doubling of the index. Unlike the Fibonacci sequence, where both of each values' immediate predecessors are required to to do every computation, the FUSC sequence's self-referentiality is considerably sparser. No matter the actual expense incurred, though, waste is waste and both sequences benefit from memoization, or establishing a reference record of values as they are constructed should those values be required again.

Duncan White actually makes the argument that memoization is *not* required in this algorithm as it is very efficient as-is, and frankly he has a point — the  the complexity does not explode very quickly at all. For 50 values the expense of any repeated steps is minimal.

Of course whatever the rate, the complexity does grow exponentially, if not immediately, cripplingly so. Planting a counter within the code does reveal considerably more work being done as the sequence lengths get larger. For this short sequence starting from 0 the gain might be insignificant, but larger values show the speedup both obvious and accelerating.

```
   0..10000  values:    3873034  vs  15000   function calls   258x speedup
   0..100000 values:  149830797  vs  150000  function calls   999x speedup
```

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/colin-crain/perl/ch-1.pl)

I think the whole argument of necessity is made moot by the ease of implementation. The `Memoize` module is core, and memoizing the `fusc()` function is as easy as adding two lines, to add the module and tell it which subroutines to watch.

```perl
    use Memoize;
    memoize qw(fusc);

    sub fusc ($n) {
        return undef if $n < 0;
        return 0 if $n == 0;
        return 1 if $n == 1;

        $n % 2 && return fusc(($n-1)/2) + fusc(($n+1)/2);

        return fusc($n/2);
    }
```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/perlboy1967/perl/ch-1.pl)

Niels looks to `Memoize` for all his memoization needs as well. He also sees fit to add a function prototype, which is an interesting decision outside of our immediate scope here, but it's something I've noticed he's been playing around with over the past 5 weeks or so.

```perl
    use Memoize;

    # Prototype
    sub fusc($);

    memoize('fusc');

    printf "%s\n", join(', ', map { fusc($_) } (0 .. 49));

    sub fusc ($) {
      my ($n) = @_;

      return $n if ($n < 2);

      if (($n % 2) == 0) {
        return fusc($n/2);
      } else {
        return fusc(($n-1)/2) + fusc(($n+1)/2);
      }
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/james-smith/perl/ch-1.pl)

James gives us a total of four solutions, working through many of the varieties we have seen earlier. He presents a recursive function, a loop constructing a list, and versions of these both utilizing a caching mechanism.

He also introduces bit shift operations to do the division, which is a new technique we have not seen previously and quite intriguing. To cache the array all he needs to do is define it as a `state` variable  and it will not get redefined at each new call. A little change to the internal logic preferentially returns the cached value, acting as memoization.

```perl
    sub fusc {
      my $n = shift; ## Both look the floor $n/2 value, but when
                     ## odd also looks at ceil $n/2.
                     ## We use bit shift operators to do the
                     ## divide by 2 so it automatically does the
                     ## floor (and ceiling by adding 1)
      return $n<2 ? $n : fusc($n>>1) + ( $n&1 ? fusc(1+$n>>1) : 0 );
    }

    sub fusc_cache {     ## Same method but with cache
      my $n = shift;
      state @cache;
      return $cache[$n] ||= $n<2 ? $n :
        fusc_cache($n>>1) + ( $n&1 ? fusc_cache(1+$n>>1) : 0 );
    }
```

[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/paulo-custodio/perl/ch-1.pl)

Paulo also uses a `state` variable to cache his prior results. The declaration and preferential return are clearly demonstrated in this version. Also of note is his bitwise check for evenness; a bitwise AND with 1 checks the value of the rightmost bit. If the bit is set, the operation will return TRUE, or 1, which happens when the value is odd. So if the result is 0, the value is even.

```perl
    sub fusc {
        my($n) = @_;
        state @fusc;
        return $fusc[$n] if defined $fusc[$n];
        return 0 if $n==0;
        return 1 if $n==1;

        if (($n & 1)==0) {      # even
            return $fusc[$n] = fusc($n/2);                      # assign and return
        }
        else {
            return $fusc[$n] = fusc(($n-1)/2) + fusc(($n+1)/2); # assign and return
        }
    }
```


## UNIQUE approaches and other THINGS THAT CAUGHT MY EYE
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/abigail/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/polettix/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/jo-37/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/wanderdoc/perl/ch-1.pl)



[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/polettix/perl/ch-1.pl)

Flavio seems to have gone out of his way to put the "challenge" back into this task. He delivers a pair of solutions that each add characteristics and obscurity in ways we've only dreamed of. I want you to look me in the eye and tell me you haven't ever had a code nightmare.

For the first, he gives us an iterative solution that starts from the basic algorithm. We see some by now more familiar elements, like the bit shifting. On the other hand we have a quite unusual transformation:  if, for *even* numbers,

    f(n) = f(n/2)

then for an *odd* number

    f(n-1) = f( (n-1)/2 )

and hence the odd equation

    f(n) = f( (n-1)/2 ) + f( (n+1)/2 )

can be reconfigured as

    f(n) = f(n-1) + f( (n+1)/2 )

As we're growing the array one element at a time f(n) is the last element added to the array, or `@fusc[-1]`.


```perl
    sub fusc ($n) {
       return [0 .. $n - 1] if $n <= 2;
       my @fusc = (0, 1); # fusc(0), fusc(1)
       while (@fusc < $n) {
          push @fusc, $fusc[@fusc >> 1];
          last if @fusc >= $n;
          push @fusc, $fusc[-1] + $fusc[1 + @fusc >> 1];
       }
       return \@fusc;
    }
```

For his second course, Flavio decides that instead of looking backwards to find the components of the new numbers being created, why not just add the components to future numbers as they come up and be done with it? This one gets a little weird and kludgy, requiring fusc[1] to be continually reset.

A fuller explanation is available in his [blog writeup](https://github.polettix.it/ETOOBUSY/2021/03/17/pwc104-fusc-sequence/), where he fully acknowledges

>**"simpler solutions are often better for a reason."**

```perl
    sub fusc_sieve ($n) {
       my @fusc = (0, 1);
       for my $i (1 .. $n >> 1) {
          $fusc[$i * 2]      = $fusc[$i];
          $fusc[$i * 2 + 1] += $fusc[$i];
          $fusc[$i * 2 - 1] += $fusc[$i];
       }
       $fusc[1] = 1;
       return [@fusc[0 .. $n - 1]];
    }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/e-choroba/perl/ch-1.pl)

I found Choroba's submission immensely interesting. Short and sweet, it constructs a loop selecting one of two coderefs for each entry, which are then called and evaluated. Once the number of elements requested are constructed, the function returns the list.

```perl
    sub fusc {
        my ($l) = @_;
        my @seq = (0, 1);
        while (@seq < $l) {
            my $n = @seq;
            push @seq, (sub { $seq[ $n / 2 ]},
                        sub { $seq[ ($n + 1) / 2] + $seq[ ($n - 1) / 2] }
                    )[$n % 2]->();
        }
        return @seq
    }
```

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/wanderdoc/perl/ch-1.pl)

The doctor takes a unique approach to their method: rather than directly producing either a value or a list of values, they provide a function that, when initialized with an upper bound, returns a code reference to an iterator function, closed around the internal variables `$i`, an array of values, and the given initialized maximum.  Successive calls to this iterator will increment the index `$i` and return the FUSC value at that index.

Because of the closure, the values of the growing list are always available to the function, so the function works like growing lists in a loop, with all previous results cached and accessable.

```perl
    sub generate_fusc
    {
         my $max = $_[0];
         my @arr;
         my $i = - 1;

         return sub
         {
              $i++;

              if     ( $i < 2 ) { $arr[$i] = $i; }
              elsif  ( $i % 2 ) { $arr[$i] = $arr[($i-1)/2] + $arr[($i+1)/2]; }
              else              { $arr[$i] = $arr[$i / 2]; }
              return undef if $i > $max;
              return [$i, $arr[$i]];
         }
    }

    my $next = generate_fusc(50);
    while ( my $item = $next->() ) { print join(": ", @$item), $/; }
```



[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/jo-37/perl/ch-1.pl)

Where to begin with Jorg? Well to start amidst the profuse commentary there are remarkably few lines of code. And it's perhaps not immediately obvious but there are two solutions here as well, one containing a single line and the other three.

Going to the OEIS page, should one wish to prepare the sequence from alternate formulae, then there are a variety to chose from, arguably each more obscure than the last. Jorg picks two, "the number of odd entries in the diagonals of Pascal's triangle at 45 degrees slope" and for the other a back derivation from the [Calkin Wilf Tree](https://en.wikipedia.org/wiki/Calkin%E2%80%93Wilf_tree). That Wiki page alone is worth the price of admission. As for the run-length encoding, I'm just going to take his word for it.

```perl
    use Math::Prime::Util 'binomial';
    use List::Util 'reduce';
    use Math::BigRat;
    use PDL; # Just for ceil and rle

    # Non-recursive implementation of fusc according to
    # http://oeis.org/A002487 as the number of odd elements in the diagonal
    # of Pascal's triangle.  Drawback of this implementation: rather large
    # numbers are involved and lots of memory are wasted.
    sub fusc ($n) {
        # Interestingly, without the modulus this would produce the
        # respective Fibonacci number.
        reduce {$a += $b % 2} 0, map binomial($_, $n - $_ - 1),
            ceil(($n - 1) / 2) .. $n - 1;
    }

    # An alternative non-recursive implementation:
    # Compute fusc(n) from the Calkin-Wilf sequence.  The n-th element of
    # the Calkin-Wilf sequence is the fraction fusc(n)/fusc(n+1).  This
    # element can be calculated by taking the run-length encoding of the
    # binary representation of n as the coefficients of a continued
    # fraction.
    # See https://en.wikipedia.org/wiki/Calkin%E2%80%93Wilf_tree
    # Coefficients are in reversed order here.
    sub fusc_from_cws ($n) {
        # This doesn't work for zero.
        return 0 unless $n;

        # Get the rle of the binary representation.  Using PDL here as I
        # didn't find an easier way.
        my @rle = grep $_, (rle(byte split //, sprintf '%b', $n))[0]->list;
        # Append a zero if the binary number ends in zero.  See the example
        # in Wikipedia.
        push @rle, 0 unless $n % 2;

        # Return the numerator from the rational number corresponding to the
        # continued fraction. The identity value in this case is 'inf' as
        # the reciprocal of zero.  Performing rational arithmetics.
        (reduce {1 / $a + $b} Math::BigRat->new('inf'), @rle)->numerator;
    }
```

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/abigail/perl/ch-1.pl)

>Remember what the first rule of optimization is? Don’t do anything which is not needed.

With this statement Abigail, taking the directives in the most literal manner possible, prints a list of the first 50 items in the sequence, taken from the OEIS. One could justly question, if not the undeniable validity of this program, than perhaps the underlying value it provides. Which, by self-admission, is just a "glorified Hello, World!". So not much, in that regard.

This leads into the thought of: if we're not to do anything which is not needed, why participate in the challenge at all then, if the code provides only minimal value? And there's the rub.

The logical way out of this predicament is the meta-analysis: the code isn't the thing. The advice *about* the code is the thing.

In this pursuit we've chosen to participate in we sometimes go to quite extraordinary lengths to perform what amount to, in the end, silly and useless tasks. Even when the task serves an obviously useful purpose, it remains unlikely that any one of us will ever say: "Oh wait, I solved that before in PWC 057! Let me find that code! Here boss, I saved you an hour!"

No, even if the specific puzzles in themselves are not immediately useful or necessary, the act of doing them itself has value. And this is why I'm glad someone works out these logical extremes.

Someone has to do it. And I don't feel like it. The advice is sound, and the community is well-served by the reminder. We all have our roles to play in this elaborate production.

Here is his submission:

```perl
    say "0 1 1 2 1 3 2 3 1 4 3 5 2 5 3 4 1 5 4 7 3 8 5 7 2 7 " .
        "5 8 3 7 4 5 1 6 5 9 4 11 7 10 3 11 8 13 5 12 7 9 2 9";
```

Abigail has instead invested his time in producing the generating code in a large number of languages, viewable at the the [GitHub repository](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-104/abigail).



---

---

# TASK 2 {#PWC104TASK2}

# NIM Game
*Submitted by: Mohammad S Anwar*

Write a script to simulate the NIM Game.

It is played between 2 players. For the purpose of this task, let assume you play against the machine.

There are 3 simple rules to follow:

1. You have 12 tokens
2. Each player can pick 1, 2 or 3 tokens at a time
3. The player who picks the last token wins the game


## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/abigail/perl/ch-2.pl),
[**Alexander Karelas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/alexander-karelas/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/athanasius/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/jo-37/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/laurent-rosenfeld/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/lubos-kolouch/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/perlboy1967/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/paulo-custodio/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/pete-houston/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/roger-bell-west/perl/ch-2.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/stuart-little/perl/ch-2.pl), and
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/ulrich-rieke/perl/ch-2.pl)

There were 20 submissions for the second task this past week. One common first observation made was "This is not Nim!" Although this claim was made often, it's not exactly true, as the rules of Nim are ancient and not strictly defined. One could reasonably call this version, itself commonly called "the Take-Away Game", or "The Subtraction Game", a simplified degenerate form of the archetype, with only one pool and an additional restraint of only being able to remove one to three tokens.

When I first read this challenge, it looked somewhat familiar, but it wasn't a game I recalled ever playing. Maybe as a child, I don't know. I figured I could do a little research and glean more about it, but as I enjoy thinking about the theory underlying games and game play, I decided to just go at it and figure it out from scratch instead.

At first I suspected that with enough tokens the limited range allowed in moves, only allowing either 1,2, or 3 draws per player, would be multiplied and eventually result in complex behavior. This proved to be incorrect. The limited moves instead lock the game into a small number of equivalent repeating cycles, and if a player has opportunity to present their opponent with a certain pattern of positions, then with perfect play that player will always win. Adding more moves only adds more cycles, and although play will take longer it will always end up in one of the same final scenarios.  Because this perfect strategy is symmetric, once the number of tokens and the first to draw is decided the outcome of the game is already determined.

So it's not much of a game at all, really. The only challenge left between two naive players is who can figure out the perfect strategy first. If one player goes into the match already knowing the strategy, then the game is changed for this sharpster, into keeping their opponent from figuring out they are being swindled.

This second meta-game, being seated in vagaries of social engineering, exhibits myriad diverse and unpredictable complex behaviors. Although lacking an ethical grounding, it's much more interesting than the game we're modeling today.

There exist complex games that can be constructed from simple rules, such as Go, or even Checkers. This is not one of those games.


## How to Win
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/abigail/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/e-choroba/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/paulo-custodio/perl/ch-2.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/stuart-little/perl/ch-2.pl), and
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/ulrich-rieke/perl/ch-2.pl)

Forgetting the distraction of the gameplay mechanics as already laid out, the object of the game is to give your opponent a pot of tokens that is a multiple of 4. If one can accomplish this, then whatever draw is taken, counter with taking 4 minus the number of tokens your opponent just took. As the two of you together have now taken 4 tokens, this will ensure your opponent will again be left with a pot that is a multiple of 4. Eventually they will be left with 4 tokens and be required to draw at least one token, and you can take the remainder and win.

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/abigail/perl/ch-2.pl)

As Abigail ruthlessly does not allow any variance and always forces the player to draw first, implementing a mechanism so the computer can win the game becomes a short, straightforward exercise.

After proper input validation, a simple formula allows the computer to take whatever number of tokens are required to return the player's pot to a multiple of 4.

```perl
    my $tokens   = 12;
    my $max_take =  3;

    while ($tokens > 0) {
        printf "How many tokens do you take? (%2d token%s are left) " =>
                        $tokens, $tokens == 1 ? "" : "s";
        chomp (my $t = <>);
        redo unless $t =~ /^\s*[0-9]+\s*$/ && 1 <= $t <= $max_take;
        my $takes = $max_take + 1 - $t;
        printf "Computer takes %d token%s\n" => $takes, $takes == 1 ? "" : "s";
        $tokens -= ($max_take + 1);
    }
```

[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/stuart-little/perl/ch-2.pl)

Stuart presents the same logic as a piece of modulo arithmetic, where the options for the computer are to preferentially take the size of the pot modulo 4 tokens, or if that result is 0, a random draw. Variations on this modulo equation were by far the most commonly seen manner of calculating the perfect move.

Here he gives us a nice compact, balanced structure with two routines, for a player move and a computer move, each routine calling the other on the last line.

```perl
    sub youPlay($heap,$k){
        $heap==0 && do {
        say "You lose!";
        exit;
        };
        say "The heap contains $heap tokens.";
        print "How many tokens are you removing? Please enter an integer between 1 and $k inclusive: ";
        my $take = <STDIN>;
        chomp($take);
        compPlay($heap-$take,$k);
    }

    sub compPlay($heap,$k) {
        $heap==0 && do {
        say "You win!";
        exit;
        };
        say "The heap contains $heap tokens.";
        my $take = ($heap % ($k+1)) || [1..$k]->[rand $k];
        say "The computer removes $take items.";
        youPlay($heap-$take,$k);
    }

    my $heap = (scalar @ARGV) ? ($ARGV[0]) : (12);
    youPlay($heap,3);
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/e-choroba/perl/ch-2.pl)

Choroba uses the `Moo` framework to prepare a `Game::Nim` object which knows how to play the game. As mentioned before the modulo operation was the most common method to produce a prefect strategy draw, and here it can be seen in the private `_my_turn()` method.

```perl
    sub _my_turn {
        my ($self) = @_;
        my $r = $self->remainder;
        my $pick = 0;
        $pick = ($r % 4) || 1 + int rand 3;
        say 'Picking ', $pick;
        $self->_set_remainder($self->remainder - $pick);
    }
```

Choroba also includes a `.dot` file to [visualize a graph of the state progression](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/e-choroba/perl/ch-2.dot) through possible games, which is nice but I cannot display it here.

[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/paulo-custodio/perl/ch-2.pl)

Paulo provided a framework for analyzing the action, setting up a scenario where the computer, playing an optimal strategy for the player with the first move, plays 100,000 games against an opponent making either random draws or also playing a perfect game.

Predictably, played against a random strategy the first player will only be presented with a pot of 4 in 1/11th of the cases, yielding an approximately 91% win rate against that opponent. Against a second player also using the optimal strategy the win rate drops to 0%. As we know playing perfectly the second player will always win. In fact, as the optimal strategy is completely deterministic, a little math reveals that there are 3 move options available to the first player, and the game will last 3 rounds. This yields only 3<sup>3</sup> or 27 possible games, with the second player winning all 27.

Here is Paulo's table for deriving the perfect move:

```perl
    sub play_to_win {
        my($T) = @_;
        return $T if $T <= 3;       # win the game
        return 1 if ($T % 4)==0;    # lose the game
        return 1 if ($T % 5)==0;    # win the game
        return 2 if ($T % 6)==0;    # win the game
        return 3 if ($T % 7)==0;    # win the game
        return 2 if ($T % 9)==0;    # win the game
        return 2 if ($T % 11)==0;   # win the game
        die $T;
    }
```

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/ulrich-rieke/perl/ch-2.pl)

Ulrich provides a hardcoded version of the decision-making process as a sequence of `if` statements. This is the same as unwinding the modulo 4 operation into a set of linear choices.

```perl
      if ( $parts > 8 and $parts < 12 ) {
    $takeaway = $parts - 8 ;
      }
      if ( $parts > 4 and $parts < 8 ) {
    $takeaway = $parts - 4 ;
      }
      if ( $parts == 4 ) {
    $takeaway = 1 ;
      }
      if ( $parts == 8 ) {
    $takeaway = 1 ;
      }
      if ( $parts > 0 and $parts < 4 ) {
    $takeaway = $parts ;
      }
```


## Playing Against the Computer

The challenge can be considered as two parts, the underlying logic of determining what to do and the act of presenting the state of the game to the user.

### *Should* the Computer Use the Perfect Strategy?
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/dave-jacoby/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/lubos-kolouch/perl/ch-2.pl), and
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/perlboy1967/perl/ch-2.pl)

It wasn't explicitly stated that the computer should play the perfect strategy. I mean, this seems like a reasonable goal but, as the game is essentially fixed and the human has access to the computer's power switch this might not always be in the computer's best interest.

Nearly every submission ended up programming in the perfect strategy, but not all. There were random-draw strategies employed as well, and even some creative outliers, both simpler and more complex. Subjectively, none of this seemed to me to provide objectively superior gameplay than the deterministic version, although a break from predictability was welcome.

On the whole I don't think any amount of cleverness can really save this version of Nim. Que sera, sera.

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/dave-jacoby/perl/ch-2.pl)

Dave implemented a considerably simpler computer player. It was never specified that the computer should play particularly well or anything.

He kindly lays down his plan before the world:

>Opponent “AI”
>This was simple:
>* If there are three tokens, take the win
>* If there are two tokens, take the win
>* Otherwise, take one token

A simple plan, destined to fail if the human is not lulled into a false sense of security by the computer always drawing 1. Yet in the brutal zero-sum reality of wining and losing, each loss for the computer offers a win for some human player. This simple act of kindness was an olive-branch to humanity on an otherwise ruthless and unforgiving playing field among the rest of the submissions.

Or maybe it's just self-preservation. You know, "Let the Wookiee win."

```perl
    # opponent
    my $op = opponent_choice($tokens);
    $plural = $op == 1 ? 'token' : 'tokens';
    say qq{    Opponent chose $op $plural \n};
    if ( $tokens == $op ) {
        say 'Opponent has won!';
        exit;
    }
    $tokens -= $op;

    # sneaky opponent AI
    sub opponent_choice( $tokens ) {
        return 3 if $tokens == 3;
        return 2 if $tokens == 2;
        return 1;
    }
```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/perlboy1967/perl/ch-2.pl)

Niels gives us a few unusual takes, both in his data collection, using `Term::ReadKey` to collect user input, and the strategy implemented.

The `Term::ReadKey` module provides direct access to the terminal, tying it to STDIN. Keypresses are immediately read and acted on without the need for an enter or return key to signify we are finished with our input. As a result, the interaction is very responsive.

```perl
     do {
       $takeTokens = ReadKey(-1);
       if (!defined $takeTokens) {
         usleep(1_000);
       } elsif (uc($takeTokens) eq 'Q') {
         # Give up, you loose
         print "Quit\n\n>>> You lose <<<\n";
         exit;
       } elsif ($takeTokens =~ m#^[\r\n]$#) {
         $takeTokens = $defaultPick;
       } elsif ($takeTokens !~ m#$validPickRE# or
                !grep {$takeTokens == $_} @validPicks) {
         undef($takeTokens);
       }
     } while (!defined $takeTokens);
```

The strategy takes a sort of hybrid approach, playing a perfect game at the finish, sliding into a completely determined table of moves from previously using random draws at the beginning. This gives a certain amount of ability to win back to the user, which is nice.

Here is his hardcoded table. Should the number of tokens in the pot exceed the values covered the draw is random, which in practice is the first and maybe the second move.

```perl
     my %tStrategy = (
       1 => 1, 2 => 2, 3 => 3,
       4 => 1, 5 => 1, 6 => 2,
       7 => 3, 8 => 2, 9 => 3
     );

     $takeTokens = $tStrategy{$tokens} // ceil(rand(@validPicks));
```

The table portion implements "leave the opponent with a multiple of four" with a few more more random moves towards the top end.

[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/lubos-kolouch/perl/ch-2.pl)

Lubos opens with the statement that the second player always wins, and "What would be the fun then?" With the perfect strategy, this is of course true. So without actually stating that this is the reason he choses a random strategy for the computer to play. I can see his point.

```perl
    while (1) {
        # player turn
        my $player_input = 0;

        do {
            print "Tokens remaining: $tokens . How many do you take (1-3) ?\n";
            $player_input = <>;
            chomp $player_input;
        } until (($player_input =~ /\d+/) and ($player_input > 0) and ($player_input < 4));

        $tokens -= $player_input;

        if ($tokens <= 0) {
            print "Great job! You have won!\n";
            return;
        }

        # comp turn
        $player_input = int(rand(3)) + 1;
        print "Comp takes $player_input\n";

        $tokens -= $player_input;

        if ($tokens <= 0) {
            print "Sorry, comp won\n";
            return;
        }
    }
```





### The *Kobayashi Maru*

As presented, if the player takes the first move against a perfect strategy, the player will invariably lose. For any of the three legal moves there exists a perfect counter to return the pot to the player as a multiple of 4. Inevitably the player will be presented with 4 tokens and be forced to take either 1,2 or 3 tokens, allowing the computer to draw the remainder of the pot.

Faced with an untenable situation leading to certain death, what is there to do? Frustrated, the player may enter 0, unwilling to meet their fate unchallenged.

>***"Rage, rage against the dying of the light."***

Surprisingly, this was often accepted, with the computer countering with either 1 token or a random draw, in any event yielding advantage, allowing the player to seize control and win.

In fact, many implementations skipped validating user input. One could argue that treating the source code as a black box and then discovering this ability after losing a few too many soul-crushing games can provide an important life lesson about assumptions, and this is itself more valuable than actually playing the game. Again the meta-game in context is more interesting than the rote process of the gameplay.

I'm not going to name names or give examples in this section, as that would probably violate my own self-imposed rules for making these reviews, but certain people may consider their code and whether or not this concerns them.

### Natural Language Programming
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/athanasius/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/colin-crain/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/jaldhar-h-vyas/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/jo-37/perl/ch-2.pl), and
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/pete-houston/perl/ch-2.pl)

With the ability to succinctly implement a winning strategy in a line or two, many submissions then went on to focus on the interactive portion of the challenge, trying to liven up the exchange into an improved user experience. To this end the prompts and  feedback to the user would change depending on the state of the game, or the input offered. The changes made were sometimes small and simple, such as whether or not to add an "s" to "token", or much more complex, altering whole phrases.

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/jaldhar-h-vyas/perl/ch-2.pl)

Jaldar, for instance, is annoyed by improper pluralization. I mean, who wouldn't be? As such he has constructed a little purpose-built routine to amend his strings:

```perl
    sub plural {
        my ($word, $count) = @_;
        return $word . ($count == 1 ? q{} : 's');
    }
```

Deployed, it looks like this:

```perl
    my $computerChoice = 4 - $playerChoice;
    say "The computer picks $computerChoice ", plural("token", $computerChoice);
    $tokens -= $computerChoice;
```

But we're just getting started.

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/athanasius/perl/ch-2.pl)

The monk has noticed that as the play progresses, at the end there may not, for instance, be 3 tokens to draw, so allowing this option seems wrong. They have provided some nice corrections to the input request as the options diminish, reflected in the `@choices` array.

```perl
    my  @choices = $$tokens >= 3 ? (1, 2, 3) :
                   $$tokens == 2 ? (1, 2)    : 1;
    my  $done    = 0;

    until ($done)
    {
        printf '   Enter your pick (%s): ', join ', ', @choices;

        my $pick = <STDIN>;

        if ($pick =~ / ^ $RE{num}{int} $ /x && 0 < $pick <= $choices[ -1 ])
        {
            $$tokens -= $pick;

            printf "%d. %-8s picks %d. Tokens remaining: %2d\n",
                $move, $name, $pick, $$tokens;

            $done = 1;
        }

        print "   * Invalid entry, try again.\n" unless $done;
    }
```

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/pete-houston/perl/ch-2.pl)

Pete takes these steps to the next level with the introduction of `Lingua::EN::Inflexion`, Damien Conway's excellent module for adapting text content to the complexities of language, in this case English. All of the available phrases are configured by it, which allows such constructions as this one for stating the decision of a random roll:

```perl
    # Choose who goes first
    my $player = int rand 2;
    print "Why don't " . noun ('she')->singular ($player + 1) .
        " go first this time?\n";
```

This will, depending on the value of `$player`, produce either the sentence

"Why don't I go first this time?"

or

"Why don't you go first this time?"

Cool, huh?

Another example is this routine to state the value ofthe pot:

```perl
    sub say_pot {
        my $x = shift;
        print inflect ("\n<#d:$x>There <V:is> $x <N:token> in the pot.\n");
    }
```

The first tag establishes `$x` as the thing being counted. Depending on the value of `$x`, then, the verb "is" and the noun "token" are properly pluralized.

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/colin-crain/perl/ch-2.pl)

For my own solution I also brought in `Lingua::EN::Inflexion`, and once it was there inflected everything in sight. I also realized the running-out-of-tokens possibility and implemented a little operation to select the correct phrase at the end of the game. You might say I went to town on the whole thing.

I elected to implement that game *misère*, or forcing the opponent to take the last token, resulting in a loss. This is marginally more interesting, but not terribly so, as the objective becomes trying to deliver your opponent a single last token, which drags things out a little longer.

In other words towards the end of the game the pot will be depleted such that this change in the request will be necessary.

```perl
    my $request =
        $pot > 2 ? "1, 2 or 3 tokens."
                 : $pot > 1 ? "1 or 2 tokens."
                            : "the token.";

    say inflect(
        "<#d:$pot>There <V:is>$now $pot <N:token> on the pot. Please draw $request"
    );

```

The underlying logic is now built on delivering your opponent a multiple of 4 *plus 1*, or 1, 5 or 9 tokens.

```perl
    $now = " now";

    say inflect(
        "<#d:$pot>
        There <V:is>$now $pot <N:token> in the pot. Computer will draw next."
    );

    my $target = int(($pot-1)/4) * 4 + 1;
```

Another cute trick I pulled out was if you give the computer bogus input, it becomes less polite. Notice how on being forced to reiterate itself, "There are now 9 tokens on the pot" becomes "There are 9 tokens on the pot", removing the "now". Once the pot size changes it will be reinstated.

```
    There are 12 tokens on the pot. Please draw 1, 2 or 3 tokens.
    2
    You drew two tokens.
    There are now 10 tokens in the pot. Computer will draw next.
    Computer draws one token.
    There are now 9 tokens on the pot. Please draw 1, 2 or 3 tokens.
    4
    Please take 1, 2 or 3 tokens.
    There are 9 tokens on the pot. Please draw 1, 2 or 3 tokens.
    3
    You drew three tokens.
    There are now 6 tokens in the pot. Computer will draw next.
    Computer draws one token.
    There are now 5 tokens on the pot. Please draw 1, 2 or 3 tokens.
    1
    You drew one token.
    There are now 4 tokens in the pot. Computer will draw next.
    Computer draws three tokens.
    There is now 1 token on the pot. Please draw the token.
    0
    Please take the token.
    There is 1 token on the pot. Please draw the token.
    no
    Please take the token.
    There is 1 token on the pot. Please draw the token.
    1
    You drew one token.
    Player loses.

```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/jo-37/perl/ch-2.pl)

Jorg also implemented an option to play the game either "normal" or "misère", which required some adjustments to the language employed. You can see these options in the last lines of the code and the `token()` subroutine.

A flip-flop flag oscillates between two states in an `if/else` structure, for the player and computer moves. I do like the `redo` when validating input, as if to say: "Go ahead, mess around. I can wait all day." Simple and direct.

```perl
    while ($tokens > $misere) {
        say token($tokens);
        my $move;
        if (++$turn % 2) {
            once: {
                say 'How many?';
                say('Invalid amount.'), redo if ($move = <STDIN>) !~ /^[123]$/;
                say(token($tokens, 1)), redo if $move > $tokens;
            }
        } else {
            $move = ($tokens - $misere) % 4 || 1 + int rand 3;
            say "I take $move.";
        }
        $tokens -= $move;
    }
    say 'The last token is ', qw(mine. yours.)[($turn + $tokens) % 2];
    say qw(I You)[($turn + $tokens + $misere) % 2], ' win.';

    sub token ($n, $r=0) {
        my @p = $n > 1 ? ('are', 's') : ('is', '');
        splice @p, 1, 0, ' only' x $r, $n;
        splice @p, 4, 0, ' remaining' x $r;

        sprintf "There %s%s %d token%s%s.", @p;
    }
```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/cheok-yin-fung/perl/ch-2.pl)

Finally, the "good sportsmanship" award goes to CY, for having the thought to complement the player after the match. It's the little things in life that elevate us from the savages. Bravo.

```perl
    sub endgame {
        my $winner = $_[0];
        print "The winner is ";
        if ($winner == $player) {
            print "YOU. \n"
        }
        else {
            print "the computer. \n"
        }
        print "Good game. \n";
        exit;
    }
```




### Working Through the Options. *All* the Options.
[**Alexander Karelas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-104/alexander-karelas/perl/ch-2.pl)

Alexander gives a very unusual and novel approach, in that at every stage he draws on the result of a recursive function that works through all possible outcomes of the gameplay going forward to determine the optimal move. Rather than isolating and directly selecting the best move from the limited states available, like everybody else, he instead *derives* the best plan forward at every step by stepping through an increasingly constrained group of games, selecting the move that leads to the best chance on winning.

I'm quite glad someone solved it this way, and here is the logic:

```perl
    sub position_value ($n) {
        if ($n == 0) {
            return -1;
        }

        my @move_values;
        for my $move (1 .. min(3, $n)) {
            $move_values[$move] = - position_value($n - $move);
        }

        return max(grep defined, @move_values);
    }

    sub best_move ($n) {
        my $pos_value = position_value($n);
        my @best_moves = grep position_value($n - $_) == - $pos_value, (1 .. min(3, $n));
        return $best_moves[int rand @best_moves];
    }
```



---

# BLOGS {#PWC104BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, I somehow continue to maintain my bearings. Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC093BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *READ* these *BLOG* *LINKS*:

**( *don't think, trust your training, you're in the zone, just do it ...* )**


**Aaron Smith**

 * [Perl Weekly Challenge 104 - Aaron Smith](https://aaronreidsmith.github.io/blog/perl-weekly-challenge-104/) ( *Raku* )

**Abigail**

 * [Perl Weekly Challenge 104: FUSC Sequence — Abigail's Programming Blog](https://wp.me/pcxd30-vx) ( *Perl* )
 * [Perl Weekly Challenge 104: NIM Game — Abigail's Programming Blog](https://wp.me/pcxd30-w5) ( *Perl* )

**Arne Sommer**

 * [Nimbly Fuscous with Raku](https://raku-musings.com/nimbly-fuscous.html) ( *Raku* )

**Dave Jacoby**

 * [FUSCing Tokens: Perl Weekly Challenge 104 | Committed to Memory](https://jacoby.github.io/2021/03/15/fuscing-tokens-perl-weekly-challenge-104.html) ( *Perl* )

**Flavio Poletti**

 * [PWC104 - FUSC Sequence - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/03/17/pwc104-fusc-sequence/) ( *Perl* )
 * [PWC104 - NIM Game - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/03/18/pwc104-nim-game/) ( *Perl* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 104](https://www.braincells.com/perl/2021/03/perl_weekly_challenge_week_104.html) ( *Perl & Raku* )

**James Smith**

 * [Perl weekly challenge 104 | James Curtis-Smith](http://blogs.perl.org/users/james_curtis-smith/2021/03/perl-weekly-challenge-104.html) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 104: Fusc Sequence and NIM Game | laurent_r](http://blogs.perl.org/users/laurent_r/2021/03/perl-weekly-challenge-104-fusc-sequence-and-nim-game.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 104: recursion and picking – Luca Ferrari](https://fluca1978.github.io/2021/03/15/PerlWeeklyChallenge104.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 104: recursion and picking – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2021/03/15/PerlWeeklyChallenge104.html#task2) ( *Raku* )

**Roger Bell_West**

 * [RogerBW's Blog: Perl Weekly Challenge 104: FUSC NIM](https://blog.firedrake.org/archive/2021/03/Perl_Weekly_Challenge_104__FUSC_NIM.html) ( *Perl & Raku* )







