
---
author:       Colin Crain
date:         2020-09-21T00:00:00
description:  "Colin Crain › Perl Weekly Review #077"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #077"
image:        images/blog/p5-review-challenge-077.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-076/).* )

Welcome to the Perl review for **Week 077** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

Or really, talk about pretty much anything that stands out as remarkable or noteworthy.

Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due. And that's why I'm here, to try and figure out how to do that.

Let's have a look and see what we can find.

---

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-077/) or the summary [**recap**](/blog/recap-challenge-077/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50">Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50">GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50">Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC077TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC077TASK2)   &nbsp;  &nbsp;  &nbsp;       •   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC077BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK #1 › Fibonacci Sum  {#PWC077TASK1}
You are given a positive integer $N.

 **UPDATE: 2020-09-07 09:00:00**
Write a script to find out all possible combination of Fibonacci Numbers required to get $N on addition.

You are NOT allowed to repeat a number. Print 0 if none found.


Example 1:

    Input : $N = 6
    Output: 3 as (1 + 2 + 3 = 6)

Example 2:

    Input : $N = 9
    Output: 2 as (1 + 8 = 9)

## solutions

There is quite a bit of variation in the solutions submitted this week, using a wide variety of methods to get to the summations. I'll try and touch on some of the common and uncommon varieties offered. My apologies in advance if I don't get through them all, but here's a taste at least.

At the most basic level, there are two main parts to this task: creating a list of available Fibonacci Numbers less than the target, and finding combinations of these numbers that sum to that sam target. For the first part, there was a little range from an extremely simple iteration to fairly complex arrangements of functions to get he job done. It was in the second part where people got the most creative.

## use a COMBINATIONS module
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/perlboy1967/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/colin-crain/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/roger-bell-west/perl/ch-1.pl), and
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/walt-mankowski/perl/ch-1.pl)



In the no frills, "get the job done and out" school of thought, the problem can be broken down quite simply into 3 or 4 parts, depending on how you count them. **Mohammad S Anwar**
lays it out like this:

1) Find the Fibonacci series up to the given number.
2) Find the combinations of numbers for the generated series.
3) Capture the combinations of numbers that return the given number on summation.
4) Finally print all the captured combinations.

In addressing these points, perhaps the simplest way to make whole bunch of combinations quickly is to use a well-crafted algorithm written in C expressly for the task, such as that provided by the lovely XS module `Algorithm::Combinatorics`. Speaking to the computationally intensive nature of combination algorithms in general, a tuned routine in C is more than likely going to be the best way to go. "Best" is by no means synonymous with "most fun", but we'll get to that.

I generally avoid using modules to solve the challenges for a variety of reasons, but the beauty of a vast accessable library of code is a lynchpin of the Perl ecosystem and I by no means deride using them. After all, with a module  such as `Algorithm::Combinatorics`, that's what it was made for, to be used, and this one is very good at what it does.

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/roger-bell-west/perl/ch-1.pl) lays it out on the line:

```perl
sub psum {
    my $n = shift;
    my @p = ( 1, 1 );
    while ( $p[-1] < $n ) {                             ## [1]
        push @p, $p[-1]+$p[-2];
    }
    shift @p;
    my @o;
    foreach my $l ( 1..scalar @p ) {
        foreach my $comb ( combinations( \@p, $l ) ) {  ## [2]
            if ( sum( @{ $comb } )==$n ) {
                push @o, $comb;                         ## [3]
            }
        }
    }
    return \@o;
}
```

I've taken the liberty of numbering the sections according to Mohammad's notes, above. Note there's no need to make a separate Fibonacci function as all we wish is a continual list of the sequence up to a given point. As we retain the array, we always have access to the two previous values. Likewise by computing all combinations of numbers of length one up to that of the whole of the Fibonacci number sequence we've created, every possible combination of every length gets evaluated.

[**Mohammad S Anwar's**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/mohammad-anwar/perl/ch-1.pl)
and
[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/colin-crain/perl/ch-1.pl)
followed a similar straight line to the list of all valid summations.

HOWEVER... Just to show there's always something you don't know,

[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/walt-mankowski/perl/ch-1.pl)

does nearly the same thing, only he has realized that instead of `combinations`, the function `subsets` from the same module does *exactly* what we want, without needing to iterate from 1 to the length of our Fibonacci series. D'oh!

```perl
my @fibs = fibs_upto($n);
my $iter = subsets(\@fibs);
my $found = 0;
while (my $p = $iter->next) {
    next unless $p->@*;
    local $, = ' + ';
    if (sum($p->@*) == $n) {
        say $p->@*;
        $found = 1;
    }
}
```

Of course, when dealing with Fibonacci Numbers, the first inclination is to write a Fibonacci Number generator function. This exercise is usually held up as one of the first examples of recursion anyone is taught, as it expresses it so simply and in an easy to understand fashion. However, when using the definition

F(n) = F(n-1) + F(n-2)

repeatedly to build a lengthy sequence, all of the expressions for the smaller numbers end up being recalculated over and over again. The minimal implementation of the function is easy to understand yet also terribly inefficient. The escape from this pitfall is to note the results of these smaller calculations as they are made the first time; this is known as memoization.

Memoization is easy to implement in a simple function; just maintain a lookup indexed on the parameter passed and if there's an entry already there use that value first rather  then recalculating. If there's no entry, then calculate and add the result to the lookup for next time before returning. In this way any result for a given parameter value is only calculated once.

This is a pretty simple feature to implement in basic form, but becomes more complex with multiple parameters, requires another variable and adds code that can distract from the logic of the function. Enter the [`Memoize`](https://perldoc.perl.org/Memoize.html) module, which takes all of that bookkeeping away from the central code stream. Bob Lied refers to the Fibonacci function as "The poster child for Memoize".

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/perlboy1967/perl/ch-1.pl)

gives us a version of the form here using an explicit, memoized Fibonacci function to create his sequence:

```perl
use Memoize;
memoize('fibonacci');

sub fibonacci ($) {
  my ($n) = @_;
  return 1 if ($n == 1 or $n == 2);
  return fibonacci($n - 1) + fibonacci($n - 2);
}

sub getFibonacciNumbersSmallerN ($) {
  my ($n) = @_;
  my @fib;
  my $i = 2;
  my $f;

  while ($f = fibonacci($i++) and $f < $n) {
    push(@fib, $f);
  }

  return @fib;
}
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/jo-37/perl/ch-1.pl)

takes this idea of memoizing to entirely the next level, as he he caches, well, pretty much everything, and uses that data to come to conclusions as to the maximum length of the result sequence to be considered, rather than computing every single combination possible.

```perl
# The smallest sum of l nonrepeated fibonacci numbers is the sum of
# the first l fibonacci numbers.  This gives an upper limit for the
# length of combinations to add up as n.
sub lmax {
    my $n = shift;
    die "cache limit: $sa, requested: $n" if $n > $sa;

    my $lmax = 0;
    $lmax++ while $sum[$lmax + 1] <= $n;

    $lmax;
}
```

## CONSTRAINING the COMBINATION SET
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/athanasius/perl/ch-1.pl),
[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/bob-lied/perl/ch-1.pl), and
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/duncan-c-white/perl/ch-1.pl)


I think Jorg, above, may be on to something.  Calculating every possible combination, while thorough, can hardly be called efficient, even if done in a very efficient manner. It would certainly be better to only check those solutions that have a prayer of success. One way to accomplish this would be to work through the sequence of Fibonacci Numbers smaller than the target, trying them one at a time then trying to complete the sum using a new reduced target, minus the initial value. Invoking the process recursively, the lists of combinations are built up until they either meet or exceed the original target.

[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/bob-lied/perl/ch-1.pl)

Demonstrates this approach in his   [FibSum.pm](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/bob-lied/perl/lib/FibSum.pm) module, built to purpose for this challenge.

Bob greatly reduces the number of combinations calculated by recursively building lists starting with the largest Fibonacci Number smaller than the target, then working through smaller options until either the original target is matched or 1 is reached. The value added is reduced from the target value and the process is repeated. Thus large initial values to the lists leave a small remainder, with consequently fewer combination options to make up that smaller value. By removing worked numbers from the sequence as they are processed, the options available to be combined are reduced at every iteration.

It's a good approach, albeit he seems to bail out of working the recursion too soon, after finding the first good answer for a given chain of values. The problem here is that any Fibonacci number can be replaced with F(n-1) + F(n-2). So bailing out once we've found

    57 = 34 + 21 + 2

prevents us from finding

    57 = 34 + 13 + 8 + 2

and

    57 = 34 + 13 + 5 + 3 + 2

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/duncan-c-white/perl/ch-1.pl)

uses a variation on this method, which he notes gives him a large number of duplicate entries. He creates a simple unique routine to filter them before output. Note Duncan like to use `Function::Parameters`, giving him `fun` functions with, well, parameters as you may expect. So that's what that is all about. Here he is shedding duplicates:

```perl
fun dedup( @soln )
{
    my %seen;
    my @result = grep { $seen{join(',',sort @$_)}++ == 0 } @soln;
    return @result;
}
```

## use a GREEDY ALGORITHM and DECOMPOSE from THERE
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/polettix/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/cheok-yin-fung/perl/ch-1.pl), and
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/laurent-rosenfeld/perl/ch-1.pl)


There is an interesting mathematical extension of the challenge given here, in that not only can any number be proven to be capable of construction using non-repeating elements from the Fibonacci sequence, but that this can be accomplished by using *non-consecutive* values from the sequence. This is known as the Zeckendorf representation of n, and is unique. It is also the sequence derived from using the "greedy" algorithm of picking the largest Fibonacci number smaller than the target, removing it from the target, then repeating until finished. I also believe this to always be the *shortest* solution, but haven't had the time to prove it. Several places I have found such a proof alluded to, but not rigorously laid out. The conclusion does seem pretty obvious, but it still nags at  me.

Starting with this optimal decomposition, each element can be selectively replaced with the two values of the Fibonacci sequence that precede it to make a new sequence, repeated to exhaustion, while pruning to remove constructions with duplicate values.

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/laurent-rosenfeld/perl/ch-1.pl)

gets the ball moving with his submission, because the original version of the challenge requested to:

>Write a script to find out the smallest combination of Fibonacci Numbers required to get $N on addition.

And Laurent came up with the "greedy" algorithm, which is what he submitted:

```perl
my $target = shift // 57;
my @fib = (1, 2);
while (1) {
    my $new_fib = $fib[-1] + $fib[-2];
    last if $new_fib >= $target;
    push @fib, $new_fib;
}
my $curr = $target;
my @result;
for my $i (reverse @fib) {
    next if $i > $curr;
    push @result, $i;
    last if $i == $curr;
    $curr -= $i;
}
say "$target ->  @result";
```

I could add my own first solution here because it was quite similar, coming to the same conclusion as Laurent did.

But starting from, as Flavio puts it, the "Zeckendorf decomposition", this can then be progressively reworked, substituting values out one at a time for summations to that number.

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/cheok-yin-fung/perl/ch-1.pl)

CY worked this territory, using an `expand` function to replace a given number with F(n-1) and F(n-2) if they haven't already been used:

```perl
sub expand {
    my $index = $_[0];
    my @arr = @{$_[1]};

    my @newarr = @arr;
    my $bool_expandable = undef;

    if (defined($arr[$index+1])) {
        $bool_expandable = ($arr[$index] - $arr[$index+1] >= 3);
    }
    elsif ($index == $#arr) {
        $bool_expandable = ($arr[$index] >= 3);
    }

    while ($bool_expandable) {
        splice(@newarr, $index, 1,
               ($arr[$index]-1, $arr[$index]-2 ) ) ;
        is_it_new_discovery(@newarr);
        @arr = @newarr;
        $index = $index+1;
        $bool_expandable = ( ( $index == $#arr and $arr[$index] >= 3) or
                          ( defined($arr[$index+1])
                                  and ($arr[$index]-$arr[$index+1] >= 3)) );
    }

    my @recaddarray = @arr;
    $index = $index-3;
    if ( ($index >= 0)  && ($arr[$index]-$arr[$index+1] == 3)) {
        splice(@recaddarray, $index, 1,
               ( $arr[$index]-1, $arr[$index]-2 ) ) ;
        is_it_new_discovery(@recaddarray);
    }
}
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/polettix/perl/ch-1.pl)

Flavio proceeds very methodically; he expands his solution space systematically. As he puts it:

   1. compute the "basic" Zeckendorf decomposition of $n

   2. compute a "reasonable" decomposition into possible non-overlapping
      components

   3. compute all possible arrangements, reject those with overlaps and
      print the others

For the last step he brings us a *really* interesting simplified implementation duplicating some of the functionality of the `NestedLoops` algorithm
from [`Algorithm:Loops`](https://metacpan.org/pod/Algorithm::Loops#NestedLoops1):

```perl
nested_loops_recursive(
  \@components,
  sub {
     my @lineup;
     my %seen;
     my $sum = 0;
     for my $constituent (@_) {
        for my $i (@$constituent) {
           return if $seen{$i}++;
           my $fi = $lk->{fibo}[$i];
           push @lineup, $fi;
           $sum += $fi;
        }
     }
     die "sum mismatch ($sum vs $n)\n" unless $n == $sum;
     my $lineup = join ' + ', sort {$a <=> $b} @lineup;
     print {*STDOUT} "$lineup = $sum\n";
  }
);

sub nested_loops_recursive {
   my ($dims, $cb, $accumulator) = @_;
   $accumulator = [] unless defined $accumulator;
   my $level = @{$accumulator};
   if ($level == @{$dims}) { # fire callback!
      $cb->(@{$accumulator});
      return;
   }
   for my $item (@{$dims->[$level]}) {
      push @{$accumulator}, $item;
      nested_loops_recursive($dims, $cb, $accumulator);
      pop @{$accumulator};
   }
   return;
}
```

The loops are really interesting and you can read a complete writeup on his blog post
[A simplified recursive implementation of NestedLoops](https://github.polettix.it/ETOOBUSY/2020/07/28/nested-loops-recursive/)

There's a lot to unpack here, and summary doesn't do it justice. There're many gems sprinkled throughout his code.


## UNIQUE approaches, SHINY THINGS and IDLE DISTRACTIONS


[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/adam-russell/perl/ch-1.pl)

Adam gives us a very nice variation on computing the possible combinations.

The number of combinations of *up to* N elements means that for any single element in the list, it's either present or not in the result set. Thus the number of combinations is 2 for every element in the set, or 2<sup>n</sup> when n is the number of, in this case, the Fibonacci Numbers smaller than the target.

So he creates a list of binary representations of the numbers 1 to 2<sup>n</sup>, and considers each index of the binary number to be an index to the Fibonacci sequence; a 1 includes the number in the combination, a 0 excludes it. In this way the entire combination space can be examined. Nice.

```perl
sub fibonacci_sum{
    my($n, $fibonacci) = @_;
    my @sum_terms;
    my $number_terms = @{$fibonacci};
    for my $i (0 .. (2**$number_terms - 1)){
        my $b = sprintf("%0" . $number_terms . "b", $i);
        my @b = split(//, $b);
        my @f;
        for my $i (0 .. (@b - 1)){
            push @f, $fibonacci->[$i] if $b[$i] == 1;
        }
        my $sum = unpack("%32I*", pack("I*", @f));
        push @sum_terms, \@f if $sum == $n;
    }
    return @sum_terms;
}
```


[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/pete-houston/perl/ch-1.pl)
Algorithm::Knapsack

Pete is back with `Algorithm::Knapsack` to tell us how many ways we can place items the size of Fibonacci Numbers into a target sized backpack, or die trying. Fortunately for him this is all very doable, as the Fibonacci Numbers are a [complete sequence](https://en.wikipedia.org/wiki/Complete_sequence) and can be combined to make any positive value exactly. The knapsack problem only tries to find the *best* fit, but as in this case a perfect fit is guaranteed, so no worries. His sequence generator is a compact little work of art as well.

```perl
my @fib = (1, 2);
push @fib, $fib[-1] + $fib[-2] while $fib[-1] + $fib[-2] <= $tot;

# Process
my $sack = Algorithm::Knapsack->new (
    capacity => $tot,
    weights  => \@fib,
);
$sack->compute;
```
---

# TASK #2 › Lonely X {#PWC077TASK2}
You are given m x n character matrix consists of O and X only.
Write a script to count the total number of X surrounded by O only.
Print 0 if none found.

 **Example 1:**
```
    Input: [ O O X ]
           [ X O O ]
           [ X O O ]

    Output: 1 as there is only one X at the first row last column surrounded by only O.
```

 **Example 2:**
```
    Input: [ O O X O ]
           [ X O O O ]
           [ X O O X ]
           [ O X O O ]

    Output: 2
        a) First  X found at Row 1 Col 3.
        b) Second X found at Row 3 Col 4.
```


## solutions

There were a grand total of 24 submissions for the second task last week. Most followed a standard pattern, but this was not the only way to go, and a few audacious variations arose in the mix.


The common method was certainly to proceed stepwise through the grid, examining the surrounding spaces around each element and if they lack any Xs, labeling it as lonely.

## The COMMON method, BROKEN DOWN
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/adam-russell/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/athanasius/perl/ch-2.pl),
[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/bob-lied/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/duncan-c-white/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/laurent-rosenfeld/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/lubos-kolouch/perl/ch-2.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/mohammad-anwar/perl/ch-2.pl),
[**Myoungjin Jeon**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/jeongoon/perl/ch-2.pl) (sort of)
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/perlboy1967/perl/ch-2.pl),
[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/nunovieira220/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/pete-houston/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/sgreen/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/ulrich-rieke/perl/ch-2.pl),
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/walt-mankowski/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/wanderdoc/perl/ch-2.pl)

In the common method, a pair of iterators are used to establish (x,y) coordinates within the grid, and this pair of loops provide a means to examine each using some sort of verification. Each position is surrounded by 3 to 8 points in the grid, depending on its location. If the point is located in on an edge or in a corner, some of the surrounding area will be outside the boundaries of the grid, and this must be accounted for to avoid errors in judgement. If when examined, a given position is determined to contain an X, all of the surrounding  points need to be checked to make sure they do not contain a O before certifying the X as officially lonely. How these locations are determined provided the variation, and those fell into four groupings:

### use a SET of 8 FUNCTIONs
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/mohammad-anwar/perl/ch-2.pl) and
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/ulrich-rieke/perl/ch-2.pl)

There are only a maximum of 8 surrounding points, so there really is no reason not to make a function to examine each of them. Doing it this way makes it easy to attach an individual boundary conditional onto each function, representative of the point its verifying.

[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/mohammad-anwar/perl/ch-2.pl)

shows us how it's done:

```perl
    foreach my $row (0..$rows) {
        foreach my $col (0..$cols) {
            next unless $matrix->[$row][$col] eq 'X';

            my @neighbours = ();
            # top
            push @neighbours, $matrix->[$row-1][$col]   if $row > 0;

            # bottom
            push @neighbours, $matrix->[$row+1][$col]   if $row < $rows;

            # left
            push @neighbours, $matrix->[$row][$col-1]   if $col > 0;
            # diagonal top left
            push @neighbours, $matrix->[$row-1][$col-1] if $row > 0     && $col > 0;
            # diagonal bottom left
            push @neighbours, $matrix->[$row+1][$col-1] if $row < $rows && $col > 0;

            # right
            push @neighbours, $matrix->[$row][$col+1]   if $col < $cols;
            # diagonal top right
            push @neighbours, $matrix->[$row-1][$col+1] if $row > 0     && $col < $cols;
            # diagonal bottom right
            push @neighbours, $matrix->[$row+1][$col+1] if $row < $rows && $col < $cols;

            push @lonely_x, [$row+1, $col+1]
                unless (grep /X/, @neighbours);
        }
    }
```

this lays everything out in a manner that's quite easy to follow.


### use a TABLE of OFFSETS
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/adam-russell/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/colin-crain/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/duncan-c-white/perl/ch-2.pl), and
[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/nunovieira220/perl/ch-2.pl)

Another way to go about things is to use one function, with a table of deltas, or offsets, from the current coordinates to determine the surrounding locations to examine. This requires a generalized check sequence to make sure the calculation doesn't place the point with either a coordinate less than 0 or outside the extant of the grid.

Generally this was done with `next` statements to ignore an invalid point; as we are only looking for the affirmative placement of an X the absence of data does not affect our outcome.

For [**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/colin-crain/perl/ch-2.pl), I drew all of this together very tightly:

```perl
    for my $offset ([1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1],[0,-1],[1,-1]) {
        next if ($x + $offset->[0] < 0) || ($y + $offset->[1] < 0);
        next if ! defined $mat->[ $y + $offset->[1] ][ $x + $offset->[0] ];
        return 0 if $mat->[ $y + $offset->[1] ][ $x + $offset->[0] ] eq 'X';
    }
```

The first `next` deals with negative indices, the second undefined data from exceeding the upper bounds.

### use LOOPS to GENERATE the offsets
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/athanasius/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/dave-jacoby/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/laurent-rosenfeld/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/lubos-kolouch/perl/ch-2.pl),
[**Myoungjin Jeon**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/jeongoon/perl/ch-2.pl) (sort of, see below),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/perlboy1967/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/pete-houston/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/sgreen/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/wanderdoc/perl/ch-2.pl)

As you can see from the pattern of the offsets laid out in a line like that, there is some basic underlying patterning going on with those 1s, 0s and -1s. Taking this into account, a second pair of iterators can be used to generate these combinations on the fly, and this was by far the most common way of producing the set of surrounding points. The same caveats apply for out of bounds indices as with the fixed table of offsets, with the added note to remove the identity offset (0,0) from play, lest the verifying function mislabel the point's own X as a neighbor.

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/dave-jacoby/perl/ch-2.pl)

does a very nice job with bringing this all together:

```perl
    for my $i ( 0 .. $x ) {
    OUT: for my $j ( 0 .. $y ) {
            my $p = $input->[$i][$j];
            next unless defined $p;
            my $ok = 'X' eq $p ? 1 : 0;
            next unless $ok;

            for my $ii ( $i - 1 .. $i + 1 ) {
                next if $ii < 0;
                for my $jj ( $j - 1 .. $j + 1 ) {
                    next if $jj < 0;
                    next if $i == $ii && $j == $jj;
                    my $pp = $input->[$ii][$jj];
                    next unless defined $pp;
                    next OUT if $pp eq 'X';
                }
            }
            $c++;
        }
    }
```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/perlboy1967/perl/ch-2.pl)

Niels is careful to save the coordinates of the lonely elements in the same manner as those of the original array, so when he outputs he can re-print the array, substituting an asterisk for the location of the lonely souls. Above and beyond the call of duty as usual. I admire the effort to make such a practical visual display with the data.

```perl
    for my $y (0 .. $h - 1) {
        for my $x (0 .. $w - 1) {
            my $res = isLonelyX(@$arG, $w, $h, $x, $y);
            $n += $res;
            $arGC->[$x][$y] = ($res ? '*' : $arG->[$x][$y]);
        }
    }
```

The line at the end there does the bookkeeping so that in the final report he can produce this:

```
    Input:
    [ 0 0 x 0 ]
    [ x 0 0 0 ]
    [ x 0 0 x ]
    [ 0 x 0 0 ]

    Output:
    [ 0 0 * 0 ]
    [ x 0 0 0 ]
    [ x 0 0 * ]
    [ 0 x 0 0 ]

    2 lonely X's found (marked '*')
```

### use ARRAY SLICES
[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/bob-lied/perl/ch-2.pl) and
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/walt-mankowski/perl/ch-2.pl)

Both Bob and Walt proceed point-by-point through the input grid, and both bring us two interesting little variations on the theme. Firstly when constructing the matrix in memory, they each add a ring of Os circumscribing the input array. In this way they avoid having to make any allowances for border conditions, and only need to adjust the iterators to look only at the original data. By frontloading the complexity into constructing the data structure, this greatly simplifies verification later.

And on the subject of that verification, they accomplish that in a very clever way, constructing three array slices composed of the surrounding elements. From there they diverge a bit.

[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/bob-lied/perl/ch-2.pl)

Bob concatenates the slices into a single list then simply checks that list against 'O' using `List::Util::all`. Told you it made things easier. His code is contained in his [LonelyX.pm](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/bob-lied/perl/lib/LonelyX.pm) module, and looks like this:

```perl
    sub isLonely($self, $row, $col)
    {
        my $g = $self->{_grid};

        my @neighbors = ( @{$g->[$row-1]}[$col -1, $col, $col+1],
                          @{$g->[$row  ]}[$col -1,       $col+1],
                          @{$g->[$row+1]}[$col -1, $col, $col+1] );

        my $isLonely = List::Util::all { $_ eq 'O' } @neighbors;
        return $isLonely;
    }
```

Alternately,
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/walt-mankowski/perl/ch-2.pl),
after swapping out his Xs and Os for 1s and 0s, sums the whole 3x3 block, and declares the primary lonely if the sum is only 1:

```perl
    my $count = 0;
    for my $row (1..$rows-2) {
        for my $col (1..$cols-2) {
            next unless $grid->[$row][$col] == 1;
            if (sum($grid->[$row-1]->@[$col-1..$col+1]) +
                sum($grid->[$row  ]->@[$col-1..$col+1]) +
                sum($grid->[$row+1]->@[$col-1..$col+1]) == 1) {
                $count++;
            }
        }
    }
```

As is well known by now, one is the loneliest number.

## UNIQUE, NOTEWORTHY and UNUSUAL methodologies



[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/alexander-pankoff/perl/ch-2.pl)

Alexander solves the problem in a highly functional manner, breaking the required actions down into discreet units that systematically decompose the grid arrays, processing and filtering until the only thing remaining is a set of lonely X coordinates.

To wit:

A short function `x_positions` returns calls `combinations` to turn the matrix into a list of (x,y) coordinates, then filters that list to yield only those with value X.

```perl
    sub x_positions($matrix) {
        return
          grep { $matrix->[ $_->[0] ][ $_->[1] ] eq 'X' }
          combinations( [ 0 .. $#{$matrix} ], [ 0 .. $#{ $matrix->[0] } ] );
    }
```

The function `lonely_xses` calls `x_positions`, and filters the list returned, calling another function `neighobrs` on each element, which returns a list of the 3 to 8 enclosing elements, allowing only those where all of those elements are 0s.

```perl
    sub lonely_xses($matrix) {
        return grep {
            all { $matrix->[ $_->[0] ][ $_->[1] ] eq 'O' } neighbors( $matrix, $_ );
        } x_positions($matrix);

    }
```

The `neighbors` function uses the familiar idea of range of indices before and after a given element to construct a sequence of (x,y) coordinates, again using `combinations`.

```perl
    sub neighbors ( $matrix, $pos ) {
        my ( $row, $col ) = @$pos;
        my @neighbor_rows =
          ( max( 0, $row - 1 ) .. min( $row + 1, $#{$matrix} ) );
        my @neighbor_cols =
          ( max( 0, $col - 1 ) .. min( $col + 1, $#{ $matrix->[0] } ) );

        grep { $_->[0] != $row || $_->[1] != $col }
          combinations( \@neighbor_rows, \@neighbor_cols );
    }
```

It all fits together quite cleanly.



[**Andrew Shitov**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/ash/perl/ch-2.pl)

For Andrew to chime in with a Perl 5 solution, he must have come up with something truly unique, and in this he does not disappoint.

His first course of action is to circumscribe the grid with Os in all directions. As we saw with Bob and Walt's solutions, this provides a buffer of negative data that obviates any concerns that we should be querying cells that are out of bounds somehow. In this case, what Andrew is using them for is similar in action but slightly different.

For the next step he converts the entire array into a single continuous string of joined Xs and Os, progressing from one row to the next in a rasterizing fashion.

Now comes the clever bit: by being aware of the dimensions of the original array, he can construct a regular expression starting with a string of three Os, OOO, that represent the three Os above a lonely X on the line above. This is followed by a spacer of dots, matching anything, sized to the gap between the last O on the upper line and the first O that proceeds the X we are looking for. Then we add the pattern OXO for the X in question bracketed by Os, add another gap of dots and finally another string of Os for those on the line after. Now do you see the need for explicit Os surrounding our grid?

Armed with this pattern, we can now proceed step by step, moving our position forward along the matrix-now-string, selecting out a substring and attempting a match. If one is found, some simple math based again on the original matrix dimensions is all that is required to produce the (x,y) coordinates from the position. The whole thing is short, sweet and so, so to the point. I love it.

```perl
    my @matrix = (
        [qw( O O O X)],
        [qw( X O O O)],
        [qw( O X O X)],
    );

    for (@matrix) {
        unshift @$_, 'O';
        push @$_, 'O';
    }
    unshift @matrix, [map {'O'} 1..scalar(@{$matrix[0]})];
    push @matrix, [map {'O'} 1..scalar(@{$matrix[0]})];

    my $matrix = join '', map({join '', @$_} @matrix);

    my $width = scalar(@{$matrix[0]});
    my $gap = '.' x ($width - 3);
    my $pattern = "OOO${gap}OXO${gap}OOO";

    for my $pos (0 .. length($matrix) - length($pattern)) {
        next unless substr($matrix, $pos) =~ /^$pattern/;
        my $y = int($pos / $width);
        my $x = $pos - $y * $width;

        say "$y, $x";
    }
```




[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/cheok-yin-fung/perl/ch-2.pl)

CY uses only one form for invalidating a given X: if, after compressing a row into a string without separators, a character pair XX is found, then these are excluded as Invalid, changing the Xs to Is. In the same substitution routine, if an Invalidated sequence is found next to an X, that X too is invalidated. That's great, you say, but what about the other dimensions? Well that's where things get even more interesting.

Instead of altering the frame of reference for the validation check, she instead chooses to rotate the *matrix* in sundry ways to re-check using the same linear function along the different axes: the diagonal, the vertical and the opposing diagonal. Once she's done she only need count the remaining unchanged Xs to find the lonely souls remaining. Why move yourself when you can move the world around you? (I believe the philosophical implications of that statement far exceeed the scope of this particular discussion, and should bear no reflection on CY. It's just an amusing way to think about it.)

Here's her `detect` routine, which spots invalid X patterns and relabels them as Is:

```perl
    sub detect {
        my $segment = join "", @_;
        $segment =~ s/XI/II/g;
        $segment =~ s/IX/II/g;
        $segment =~ s/XX/II/g;
        return split //, $segment;
    }
```

The tough part of this plan is transforming the matrix between searches, particularly 45° shift for the diagonals. Here's that troublesome transformation:

```perl
    sub diagonal_operation {
        my @mat = @{$_[0]};
        my $t_ylen = scalar @mat;
        my $t_xlen = scalar @{$mat[0]};
        if ($t_xlen >= $t_ylen) {
            my $t_diff = $t_xlen - $t_ylen;
            my $t_limit = $t_ylen;
            for my $c (0..$t_diff) {
                my @u = detect
                        (map {${$mat[$_]}[$c+$_]} (0..$t_ylen-1)) ;
                ${$mat[$_]}[$c+$_] = $u[$_] for (0..$t_ylen-1);
            }

            for my $d (0..$t_limit-2) {
                my @u = detect
                    (map {${$mat[$_]}[$t_diff+$d+1+$_]} (0..$t_limit-$d-2)) ;
                ${$mat[$_]}[$t_diff+$d+1+$_] = $u[$_] for (0..$t_limit-$d-2) ;
                my @v = detect
                    (map {${$mat[$d+1+$_]}[$_]} (0..$t_limit-$d-2)) ;
                ${$mat[$d+1+$_]}[$_] = $v[$_] for (0..$t_limit-$d-2) ;
            }

            return \@mat;
        }
        else {
            return xyreverse diagonal_operation(xyreverse(\@mat));
        }
    }
```

However, it does get the job done.

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/e-choroba/perl/ch-2.pl)

different solution uses a regex to match Xs that are isolated within a given line, then gets their index using `pos`.

works row-by-row, using a regex to match the shape of an X surrounded by things that are not an X, being either Os or brackets. When found, the position is noted.

Choroba works row by row, examining each with a regex that matches a non-X, a space, an X, another space and another non-X. The grid is put in using square brackets, which are preserved as non-Xs. If a match is found, the previous line is examined at the position of the match for a "NO\_X" regex; if a match is made there of length 5 with no Xs, then the position of the match is noted in a `@check` array. The row becomes the previous and the next row is loaded and the process repeated, and this time the positions in the check array are verified against the positions in the current row for a "NO\_X" match as done one cycle earlier. In this way all sides around the matching X are examined, and if all the verification matches pass the final counter is incremented.

```perl
    my $verify = sub {
        for my $ch (@check) {
            $count += substr($_[0], $ch - 2, 5) =~ $NO_X;
        }
    };

    open my $in, '<', \$input;
    while (<$in>) {
        $previous //= ' ' x length;
        $verify->($_);
        @check = ();

        while (/(?=[^X] X [^X])/g) {
            my $pos = pos;
            push @check, $pos + 2 if substr($previous, $pos, 5) =~ $NO_X;
        }
        $previous = $_;
    }
    $verify->(' ' x length $previous);
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/polettix/perl/ch-2.pl)

Flavio, in his pleasingly well commented submission, also progresses row by row, keeping track of two sets of arrays, each containing data for the current row and the one processed previously. To process a row, he uses a pair of iterators, one to move positionally across the elements, the other to examine the three element bracket encompassing the position.

If an element in the `@line` position is found to be X, the parallel set of `@count` arrays that keep track of the adjacency count is augmented for the three positions in the previous line and the two positions left and right. Also the presence of an X in the position in the *previous* line propagates an augmentation of the three position bracket in the counts for the *current* line. In this way over two passes all eight surrounding positions are augmented around any X found. When a found X is moved to the previous line array, it can be evaluated for how the surrounding cells have influenced its count; if the count is still only 1 then there have been no X nearby to augment it and the X is declared lonely.

The processes are tightly interwoven and as a result hard to summarize, but here's the function that scans a given row; you can see how the counts for a given position are affected by the positions around it:

```perl
    sub _count_solitaries {
       my ($lines, $counts) = @_;

       # in the last call we are only left with the last "previous" line, so
       # we skip the sweeping part.
       if (@$lines > 1) {
          # we avoid the beginning and the ending chars because they are
          # brackets, so the column index iterator $i starts at 1 and ends
          # one before the last
          for my $i (1 .. $#{$lines->[1]} - 1) {
             # $j iterates over the three column indexes affected by $i
             for my $j ($i - 1 .. $i + 1) {
                # this is the previous line affecting the current count
                $counts->[1][$j]++ if $lines->[0][$i] eq 'X';

                # this is the current line affecting the previous and the
                # current counts
                if ($lines->[1][$i] eq 'X') {
                   $counts->[0][$j]++;
                   $counts->[1][$j]++; # self-counting is OK
                }
             }
          }
       }

       # the previous line/counts are over now, we can count how many
       # solitaires were there. 'grep' in scalar context returns a count.
       return scalar grep {
          $lines->[0][$_] eq 'X' &&  # a solitaire is a 'X' character...
          $counts->[0][$_] == 1;     # with a 1 count (i.e. only itself)
       } 1 .. $#{$lines->[0]} - 1;
    }
```




[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/jo-37/perl/ch-2.pl)

Jorg gives us a solution that highlights the data processing power of the PDL, the Perl Data Language extension. It's a bit daunting at first, but unpacks nicely with a little explanation.

PDL uses a vector model, with an implicit idea of "do this for every element". Here we examine the 3x3 zone enclosing each individual element in the matrix, having previously converted the Xs and Os to 1s and 0s respectively, defined as as single bytes. A larger submatrix view is established and the contents summed with a few simple commands; multiplying this sum by the value of the base element will only be 1 when both the base value is 1 and the sum of the view is also 1, being the same element seen again, this time within the larger view.

```perl
        # Create 3x3 squares around each matrix element,
        # having zero values outside the valid range.
        ->range(ndcoords($m) - 1, 3, 'truncate')
        # Move source dims to the front.
        ->reorder(2, 3, 0, 1)
        # Sum over rows and columns.  This gives the number of ones in
        # each square.
        ->sumover->sumover;
```

PDL continues to impress me. Jorg provides a link to the relevant documentation that, together with his extensive notes, demystifies this short and powerful program. I encourage anyone to have a look for a nice introduction to this amazing tool.

Here's the whole routine, stripped of its comments to show off the impressively compact form:

```perl
    use PDL;

    sub lonely_ones {
        my $m = shift;
        print $m;

        my $square_count = $m
            ->range(ndcoords($m) - 1, 3, 'truncate')
            ->reorder(2, 3, 0, 1)
            ->sumover->sumover;

        local $" = ',';
        say "lonely one at (@{[reverse @$_]})"
            foreach @{whichND(($square_count == 1) * $m)->unpdl};
    }
```

Have a look to the source for the complete picture.



[**Myoungjin Jeon**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/jeongoon/perl/ch-2.pl)

Jeon gives us a solution that amounts to proceeding point by point across the grid, using  loops to generate offsets from the array `(-1, 0, 1)` to examine the surrounding area. In this it resembles the more common style of solutions we looked at earlier, but as every step is a little different than the norm, it deserves a little closer examination.

Using two iterators, he steps through the grid in the usual fashion, then, when landing on a location, he calls `getLonelyStatusAround` on it. Before proceeding be aware he has altered the data so that Xs and now 0s, and Os are 1s. That's all arbitrary, but when he sums the values for the surrounding points, he's looking for an 8 count, indicating affirmatively that every square is does not contain an X. I found doing the search with a `map` a quite interesting way to go about that. The first value returned is the value of the cell itself, the second and third its coordinates, and the last the sum of the surrounding area.


```perl
    sub getLonelyStatusAround ($$$) {
        my ( $mat, $r, $c ) = @_;
        ( 0 <= $r && $r < @$mat && 0 <= $c && $c < @{$$mat[0]})
            or return (-1,$r,$c,-1);
        ( $mat->[$r][$c] ) == 0 or return (1,$r,$c,-1);

        my @rg = (-1, 0, 1);
        # assume non-exist cell has value of 1
        my @cellValues = map { my $y = $r+$_;
                               $y < 0 ? (1)x 3 : # note: fill the non-exist row
                                   map { my $x = $c+$_;
                                         $x < 0 ? 1 : $$mat[$y][$x] // 1 } @rg } @rg;

        0, $r, $c, (sum @cellValues);
    }
```














---

<br>

# BLOGS {#PWC077BLOGS}

***

**That's it for me this week, people!**

## But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC077BLOGS}
## then *RUN* *(dont walk!)* to the *WATERING HOLE*
## and *READ* these *BLOG* *LINKS*:

***( don't think, trust your training, you're in the zone, just do it ... )***


**Adam Russell**

 * [RabbitFarm — Perl Weekly Challenge 077](http://www.rabbitfarm.com/cgi-bin/blosxom/2020/09/13#pwc077) ( *Perl* )

**Andinus**

 * [Challenge 077](https://andinus.tilde.institute/pwc/challenge-077/) ( *Perl* )

**Andrew Shitov**

 * [Add up Fibonacci numbers - The Weekly Challenge 77, Task 1](https://andrewshitov.com/2020/09/07/add-up-fibonacci-numbers-the-weekly-challenge-77-task-1/) ( *Raku* )
 * [Lonely X - The Weekly Challenge 77, Task 2](https://andrewshitov.com/2020/09/08/lonely-x-the-weekly-challenge-77-task-2/) ( *Raku* )
 * [Programming with Passion](https://andrewshitov.com/2020/09/12/programming-with-passion/) ( *Perl and Other Languages* )

**Arne Sommer**

 * [Lonely Sum with Raku](https://raku-musings.com/lonely-sum.html) ( *Raku* )

**Cheok-Yin Fung**

 * [ Expand one into two - CY's Take on TWC#077](http://blogs.perl.org/users/c_y_fung/2020/09/cy-077.html) ( *Perl* )

**Colin Crain**

 * [All those Pasta Lies Led to a Lonely Ex](https://colincrain.wordpress.com/2020/09/12/all-those-pasta-lies-led-to-a-lonely-ex/) ( *Perl & Raku* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge: Fibonacci Sum and Lonely X](http://blogs.perl.org/users/laurent_r/2020/09/perl-weekly-challenge-fibonacci-sum-and-lonely-x.html) ( *Perl & Raku* )

**Mohammad S Anwar**

 * [BLOG: The Weekly Challenge #077](https://perlweeklychallenge.org/blog/weekly-challenge-077/) ( *Perl & Raku* )
 * [Perl Weekly Challenge - 077 (Task #1: Perl) - YouTube](https://www.youtube.com/watch?v=dgz4T4GwKxQ) ( *Perl & Raku* )

**Roger Bell_West**

 * [RogerBW&#39;s Blog: Perl Weekly Challenge 77: Fibonacci Sum and Lonely X](https://blog.firedrake.org/archive/2020/09/Perl_Weekly_Challenge_77__Fibonacci_Sum_and_Lonely_X.html) ( *Perl & Raku* )

**Shahed Nooshmand**

 * [The Weekly Challenge: week 77](https://rafraichisso.ir/2020/09/10/pwc-77) ( *Raku* )

**Simon Green**

 * [The Weekly Challenge 077](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-077/sgreen/README.md) ( *Perl* )

**Walt Mankowski**

 * [Perl Weekly Challenge #77 - Walt Mankowski](http://www.mawode.com/blog/blog/2020/09/07/perl-weekly-challenge-77/) ( *Perl* )
