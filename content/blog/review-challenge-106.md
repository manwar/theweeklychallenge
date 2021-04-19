
---
author:       Colin Crain
date:         2021-04-19T00:00:00
description:  "Colin Crain › Perl Weekly Review #106"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #106"
image:        images/blog/p5-review-challenge-106.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-105/).* )

Welcome to the Perl review for **Week 106** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-106/) or the summary [**recap**](/blog/recap-challenge-106/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC106TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC106TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC106BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

---

# TASK 1 {#PWC106TASK1}

# Maximum Gap
*Submitted by: Mohammad S Anwar*<br>
You are given an array of integers @N.

Write a script to display the maximum difference between two successive elements once the array is sorted.

If the array contains only 1 element then display 0.

Example

    Input: @N = (2, 9, 3, 5)
    Output: 4

    Input: @N = (1, 3, 8, 2, 0)
    Output: 5

    Input: @N = (5)
    Output: 0


## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/abigail/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/adam-russell/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/athanasius/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/colin-crain/perl/ch-1.pl),
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/cristian-heredia/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/dave-jacoby/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/polettix/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/jo-37/perl/ch-1.pl),
[**Lance Wicks**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/lance-wicks/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/lubos-kolouch/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/perlboy1967/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/paulo-custodio/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/pete-houston/perl/ch-1.pl),
[**Peter Mayr**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/hatorikibble/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/sgreen/perl/ch-1.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/stuart-little/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/ulrich-rieke/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/wlmb/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/wanderdoc/perl/ch-1.pl)

There were 25 submissions for the first task this past week. The task involves comparing each element to its neighbors; these comparisons can be broken down into two groups — those that directly examine the elements themselves, and those that indirectly reference the values through the index positions of the array holding them.

And yes, there were also a few methods that defied this simple categorization.

The methods on the whole were short and succinct. Let's have a look at some of the techniques we saw.

## ITERATING over the INDICES

When comparing neighboring elements in an array, it's natural to consider them by index. That way, the adjacent element is either one index higher or lower, and its position can easily be computed mathematically.

### ...using either a `for` loop
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/athanasius/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/cheok-yin-fung/perl/ch-1.pl),
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/cristian-heredia/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/dave-jacoby/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/e-choroba/perl/ch-1.pl),
[**Lance Wicks**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/lance-wicks/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/laurent-rosenfeld/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/paulo-custodio/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/pete-houston/perl/ch-1.pl), and
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/roger-bell-west/perl/ch-1.pl)

The `for` loop seemed to be the go-to tool when iterating through the array values. First the array is sorted — every submission required this basic first step. A range is then constructed over a subset of the indices, either starting at 1 or ending 1 before the last index. Then two neighboring elements can be accessed at the index and either minus or plus one, respectively. The range is traversed, and the difference found between each pair. If this exceeds the current maximum known gap it takes the place of the old value.

[**Lance Wicks**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/lance-wicks/perl/ch-1.pl)

To start us off Lance brings us his own [`Maxgap`](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/lance-wicks/perl/lib/Maxgap.pm) module, because that's how he rolls.

Inside is a very clean implementation of the technique: first sorting, then iterating over a numerical list of the the indices, choosing the largest difference between the value at an index and the value at the index previous. It's clean. I like it.

```perl
    sub maxgap {
        my ($self, @integers) = @_;

        @integers = sort @integers;

        my $maxgap = 0;
        for my $i (1 .. @integers-1){
            my $gap = $integers[$i] - $integers[$i-1];
            if ( $gap > $maxgap) {
                $maxgap = $gap;
            }
        }

        return $maxgap;
    }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/e-choroba/perl/ch-1.pl)

Choroba brings us a quite compact example of a very similar implementation. You might consider this to be a basic form, with the three steps laid out: sort, iterate and compute the differences, and from these locate the maximum value.

```perl
    sub maximum_gap {
        my @arr = sort { $a <=> $b } @_;
        my $max = 0;
        for my $i (1 .. $#arr) {
            my $diff = $arr[$i] - $arr[ $i - 1 ];
            $max = $diff if $diff > $max;
        }
        return $max
    }
```

[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/cristian-heredia/perl/ch-1.pl)

Christina builds a loop that stops one before the last element, comparing a given index with the one following. Before or after makes no difference.

```perl
    if (@N != 1) {
        my @sorted = sort { $a <=> $b } @N;
        for (my $i= 0; $i<@N-1; $i++) {
            $sub = $sorted[$i+1] - $sorted[$i];
            if ($sub > $result) {
                $result = $sub;
            }
        }
    }
```


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/athanasius/perl/ch-1.pl)

As usual, the monk provides us with a robust application to the task, with thorough input validation and well-structured output. They also thought to include a `--unique` flag, that when set on the command line preprocesses the elements for uniqueness; as the gap between any element and itself will always be 0, any duplicates can be safely removed without harm. The only penalty is the time it takes to do so, so the feature is left as an option.

```perl
    {
        my ($unique, $N) = parse_command_line();

        printf "Input:  \@N = (%s)\n", join ', ', @$N;

        my @sorted  = sort { $a <=> $b } @$N;              # Sort ascending
           @sorted  = uniqint @sorted if $unique;          # Optionally remove dups
        my $max_gap = 0;

        # Test every difference between successive elements in the sorted array

        for my $i (1 .. $#sorted)
        {
            my $diff = $sorted[ $i ] - $sorted[ $i - 1 ];

            $max_gap = $diff if $diff > $max_gap;
        }

        print "Output: $max_gap\n";
    }
```


[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/cheok-yin-fung/perl/ch-1.pl)

There's always going to be that sort of person who says: "You know you could save half on that refrigerator if you just built it yourself." I admire this sort of person. The plucky "can do" atitude. Carry your own water. Cut your own wood.

CY starts the ball rolling by writing her own `sort`. Who does that? "Can do" people, that's who. While she's in there doing the work herself, fighting entropy one list at a time, she notes the difference between each pair of sorted elements as she holds them up, keeping a running tally of the largest she finds.

At the end of the sort she is left with the maximum. See? That wasn't so hard.

```perl
    if ($#N != 0) {selection_sort();}

    print $max_dif, "\n";

    sub max_ind {
        my @arr = @_;
        my $max = $arr[0];
        my $max_i = 0;
        for my $i (1..$#arr) {
            if ($arr[$i] > $max) {
                $max_i = $i;
                $max = $arr[$i];
            }
        }
        return $max_i;
    }

    sub selection_sort {
        swap_arr_N(0, max_ind(@N));
        for my $i (1..$#N) {
            swap_arr_N($i, $i+max_ind(@N[$i..$#N]));
            my $dif = $N[$i-1] - $N[$i];
            $max_dif = $dif if $dif > $max_dif;
        }
    }

    sub swap_arr_N {
        ($N[$_[0]], $N[$_[1]]) = ($N[$_[1]], $N[$_[0]]) if $_[0]!=$_[1];
    }
```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/laurent-rosenfeld/perl/ch-1.pl)

```perl
    my @input = (2, 9, 3, 5);
    my @sorted = sort { $a <=> $b} @input;
    my $max = 0;
    for my $i (1..$#sorted) {
        $max = $sorted[$i] - $sorted[$i-1] if $sorted[$i] - $sorted[$i-1] > $max;
    }
    say "Max gap: $max";
```
 Laurent's solution is simplicity itself, so much that he reimplements his submission in a half a dozen other languages. Bravo. Here they are, for a comparative analysis:

[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/laurent-rosenfeld/julia/ch-1.julia),

[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/laurent-rosenfeld/python/ch-1.py),

[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/laurent-rosenfeld/raku/ch-1.raku),

[Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/laurent-rosenfeld/ruby/ch-1.rb),

[Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/laurent-rosenfeld/rust/ch-1.rs), and

[Scalia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/laurent-rosenfeld/scala/ch-1.scala)


### ...or as a `map` function
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/abigail/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/sgreen/perl/ch-1.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/stuart-little/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/wlmb/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/wanderdoc/perl/ch-1.pl)

Because of my unnatural fondness for listwise operators, when I first thought this challenge through I came up with using `map` to do my bidding. Iterating across the indices starting from 1, we look at each element and the one preceding and take the difference. This generates a list of differences, which we can then scan to find the maximum.

We do this all this after we sort, of course. We always sort. It is the way.

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/sgreen/perl/ch-1.pl)

Simon shows how compact this idea can be, wrapping all three components into a single line, and even presenting it as a proper command line one-liner.

```perl
    perl -E 'use List::Util "max"; my @a = sort { $a <=> $b } @ARGV; say max(0, map { $a[$_] - $a[$_-1] } (1 .. $#a) )' 1 3 8 2 0
```

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/abigail/perl/ch-1.pl)

Taking ever-so-slightly more room to make his case, Abigail presents the logic in a similarly compact form. Bit more readable this way, I'd say. I like a little air in the code. YMMV.

```perl
    use List::Util qw [max];

    my @N = sort {$a <=> $b} split;
    say max (map {$N [$_] - $N [$_ - 1]} 1 .. $#N) // 0;
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/wlmb/perl/ch-1.pl)

Luis brings us a little variation, using `reduce` from `List::Util` to construct his own `max` function from base components, always keeping and passing through the larger of the two values examined.

```perl
    use List::Util qw(reduce);

    my @sorted=sort {$a<=>$b} @ARGV;
    say +(reduce {$b>$a?$b:$a} map {$sorted[$_+1]-$sorted[$_]} 0..$#sorted-1)//0,
        join ' ', '<-(', @ARGV, ')',
```


## or alternately, ITERATING over the VALUES

We can just loop over the values themselves. As we know we're going to look at every pair of elements we don't really need or care about the specific index values themselves. We only need to know the value of whatever element we looked at previously so we can compare it to the current one.

### ...with either a `for` loop
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/james-smith/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/lubos-kolouch/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/mohammad-anwar/perl/ch-1.pl), and
[**Peter Mayr**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/hatorikibble/perl/ch-1.pl)

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/james-smith/perl/ch-1.pl)

James unrolls what is basically the action of a `reduce` function in his `max_gap()` subroutine, examining each element of the sorted array in turn against a stored previous element. At the end of the comparison the current element replaces the stored previous and the next element is examined.

```perl
    sub max_gap {
      my( $max, $p, @sorted ) = ( 0, sort { $a <=> $b } @_ );

      # Shift off first value ($p), we will loop through @sorted and
      # compare the difference between value and previous value ($p).
      # At the end of each iteration we will replace $p with the next
      # value (in the loop $_)
      #
      # This saves us having to loop through elements using an index
      # and calculating - $sorted[$_+1]-$sorted[$_]..

      foreach ( @sorted ) {
        $max = $_ - $p if $_ - $p > $max;
        $p   = $_;
      }

      return $max;
    }
```

### ...or by using `map` with a block

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/polettix/perl/ch-1.pl)

Flavio constructs his `map` with a twist: like James, he maintains the previous value through each iteration to make the comparison with this next. In this way he doesn't need to iterate across the indices, instead using the values themselves. At each loop the difference is calculated with the previous, the current is saved to the previous, and the difference returned in the processed list. The maximum value in this list is the maximum gap.

```perl
    sub maximum_gap (@N) {
       return 0 if @N <= 1;
       (my $p, @N) = sort { $a <=> $b } @N;
       return max(map { (my $d, $p) = ($_ - $p, $_); $d } @N);
    }
```

### ...or even shifting the array out from underneath

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/adam-russell/perl/ch-1.pl)

Adam first sorts his list, of course, and then applies an unusual little construction: a recursive routine which finds the gap between the first two elements, then trims the list one element from the beginning and calls itself again. At each stage the gap is chosen to be the larger of the gap found between the first elements and that returned by the recursion. Thus the largest gap will propagate through as the recursion finishes and collapses, providing the result.

```perl
sub max_difference_sorted{
    my(@sorted) = @_;
    return 0 if(@sorted == 1);
    my $x = $sorted[1] - $sorted[0];
    my $y = max_difference_sorted(@sorted[1 .. @sorted - 1]);
    return ($x > $y)? $x: $y;
}
```

## THEN AGAIN, we could even ITERATE in some OTHER, UNUSUAL way
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/colin-crain/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/jo-37/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/perlboy1967/perl/ch-1.pl), and
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/ulrich-rieke/perl/ch-1.pl)

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/ulrich-rieke/perl/ch-1.pl)

Ulrich gives us a intermediary routine, `createPairs()`, which breaks the sorted array down into tuples of element neighbors. Elements from the interior indices are hence represented twice, in two pairs: one as a left-hand element, the other as a right. The gap is thus the difference between the two items in the pair.

```perl
    sub createPairs {
      my $numbers = shift ;
      my $len = scalar @{$numbers} ;
      my @pairs ;
      for my $i (0 .. $len - 2 ) {
          push @pairs , [ $numbers->[$i] , $numbers->[$i + 1]] ;
      }
      return @pairs ;
    }

    my @sorted = sort { $b <=> $a } @numbers ;
    my @pairs = createPairs( \@sorted ) ;
    my @differences = sort { $b <=> $a } map { ${$_}[0] - ${$_}[1] } @pairs ;
    say $differences[ 0 ] ;
```


[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/colin-crain/perl/ch-1.pl)

When I first thought out this challenge, my mind went to `map`, as I can see was often the case. The obvious problem that arises immediately is that `map` applies a function over individual elements in a list, and here we have to compare two elements, each element to its neighbor. The ways to get around this are, as we have seen, either to map across the indices of the array, looking up the index to get the value and subtracting 1 from the index to get the neighbor, or keeping tabs on whatever the previous value was so we cn reuse it. Either way we can use this method to digest a list into a list of differences, and then go find the largest value from that.

But let's return to `map` and its fundamental nature of only applying a function to one element at a time. Wouldn't it be great to be able to apply a function, as `map` does, over pairs of adjacent elements directly? Well, there is another option, `reduce`, that sort of does that. For those that do not know, `reduce` does take a binary function as its argument, sort of. It acts on two internal parameters, `$a` and `$b`, only it automatically places the result of its actions into `$a` for the next iteration, drawing only a single new value from the list as `$b`. So the binary operation part sounds like something we could use, but the assignment of the result to `$a` is a little sticky. We can subtract `$a` from `$b` to get our difference (of a sorted array), and then put `$b` into `$a` by making it the result, allowing us to compare the next pair of elements when we draw the next value into `$b`. But then where do we keep our comparison? We need another variable.

The thing is — anything can be in our block, including anything in scope when we call `reduce`. If we declare our `$gap` accumulator there, we can look at it to get our result when we're done.

```perl
    sub gap_reduce (@list) {
        my $gap = 0;
        reduce { $gap = $b - $a if $b - $a > $gap; $b } sort {$a<=>$b} @list;
        return $gap;
    }
```

This works well and there's nothing wrong with it. But there is one thing, in that we seem  to be somehow missing the point: reduce works over a list to use those values to compute a new value from the elements. When we are done, we have reduced a list to a single value, hence the name. What we've done here instead is to create a side effect of noticing the largest difference between values as the list is being processed *en passant*, then thrown away the result of the iterations and just kept the side effect. This whole idea rubs some people, functional purists you might say, the wrong way.

That last bit is a little play on words because a function that has no side effects outside its immediate scope — it makes no interactions with the world outside its parameters and return value — is called a "pure" function. And the block we've defined isn't pure, it needs `$gap` to report its findings. The function `gap_reduce()` is pure, but the block called in the `reduce` is not. This really only matters if you want to strictly apply this credo of functional programming — that functions are discrete units that perform their actions in a defined, repeatable way independant of the state of the outside world they live within.

I admit it annoyed me, and so I went on to also implement the map index method outlined above. As the indexes of an array are an integral part of the data structure this `map` can be said to take a function and a list and output a list of differences between values, which we can then find the maximum of. Everything is pure.

I did go back some time later and revisit the problem, making the block given to `reduce` properly pure. It's more complex now, lacking the elegance of the original. We keep `$gap` within the block, and only output it in the last iteration. This involves keeping another variable to count indexes, so either `$b` is the last result, to be placed into `$a` for the next cycle, or `$gap`, which being the final value is returned.

You can probably tell I like `reduce` a lot. It's a fun concept to play with.

```perl
    ## version 3 - reduce redux
    sub gap_reduce_redux (@list) {
        scalar @list > 1 ? reduce { my $gap //= 0;
                                    my $idx++;
                                    $gap = $b - $a if $b - $a > $gap;
                                    $idx == @list-1 ? $gap : $b
                                    } sort {$a<=>$b} @list
                         : 0
    }

```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/jo-37/perl/ch-1.pl)

Jorg gives us a `sort` in void context, which is not a construction I can ever recall seeing before. From that odd beginning we see how he harnesses a side effect inside the `sort` block to find the gaps. No matter what other comparisons are made for a given element,  each must be compared at some point against its final neighbors, right? So, as the gap between smaller and larger is an absolute value we need only consider half the gaps, and we choose those going upward to a higher value.  By taking the *smallest* of these gaps as the a hash value keyed to a given element, we end up storing the distance to its closest higher neighbor, the next rightward when sorted. This hash will end up with keys for every element save the highest, and the largest value in this hash will be the maximum gap between elements.

```perl
    # Regardless of the sorting algorithm in use, every pair of neighboring
    # elements must be compared in the process.  Otherwise the succession of
    # such pair would remain undetermined.  Finding the gaps as mimimum
    # differences while comparing and taking the maximum thereof afterwards.
    sub max_gap {
        my %gap;
        # Discard the sort result.
        () = sort {
            my ($l, $h) = $a < $b ? ($a, $b) : ($b, $a);
            # Considering different values only.
            $gap{$l} = min $h - $l,  ($gap{$l} // 'inf') if $h > $l;
            $a <=> $b} @_;

        (max values %gap) // 0;
    }
```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/perlboy1967/perl/ch-1.pl)

There's another list-processing function available, this one in `List::MoreUtils` that takes a binary operation, and that's `pairwise`. Unfortunately this doesn't take from a single list, but rather takes two lists, drawing one element from each and supplying the given BLOCK with the values. This is great obstacle; all Niels need do is restructure his data as a pair of array slices with a 1-index offset. Then each value will be compared with the next along, and the largest of thes calculated values is the maximum gap.

```perl
    use List::Util qw(max);
    use List::MoreUtils qw(pairwise);

    sub maxGap {
      my @i = sort { $a <=> $b } @_;

      my @p1 = @i[0 .. scalar(@i)-2];
      my @p2 = @i[1 .. scalar(@i)-1];

      return max(pairwise { $b - $a } @p1, @p2);
    }
```

[**No One**](https://metacpan.org/pod/List::MoreUtils#slide-BLOCK-LIST)

When researching `List::MoreUtils`, I found that since version 0.430, released Oct 21 2020,  there's now a function `slide` that "slides" across a list exactly as we need it to, applying a binary operation to each pair of values as it goes. From the docs:

```perl
    my @s = slide { "$a and $b" } (0..3);
    # @s = ("0 and 1", "1 and 2", "2 and 3")
```

Sweet. So to roll up a quick solution:

```perl
    use List::MoreUtils qw(slide);
    use List::Util      qw(max);

    say max slide { $b - $a } sort {$a<=>$b} @input;
```

Now that's elegant.



------------------------------------------

---

# TASK 2 {#PWC106TASK2}

# Decimal String
*Submitted by: Mohammad S Anwar*<br>
You are given numerator and denominator i.e. $N and $D.

Write a script to convert the fraction into decimal string. If the fractional part is recurring then put it in parenthesis.

**Example**

```
    Input:  $N = 1, $D = 3
    Output: "0.(3)"

    Input: $N = 1, $D = 2
    Output: "0.5"

    Input: $N = 5, $D = 66
    Output: "0.0(75)"

```



## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/abigail/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/adam-russell/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/athanasius/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/colin-crain/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/polettix/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/jo-37/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/laurent-rosenfeld/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/perlboy1967/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/sgreen/perl/ch-2.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/stuart-little/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/wlmb/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/wanderdoc/perl/ch-2.pl)

There were only 16 working solutions for the second task this past week. The overwhelming choice in technique was implementing some form of long division algorithm to divide the numerator by the denominator, keeping track of and monitoring the remainder portion at each step to notice either a 0 — indicating an even division had been made — or a remainder that had previously been seen, indicating that a loop cycle was complete. The schemes to implement this all shared a common similarity, albeit cast through personal idiosyncrasies.

The second most common method attempted was to parse out a repeating decimal with a regular expression. This was complicated by both floating point accuracy, which could produce incorrect digits in the division, and by the the puzzle of correctly discriminating a repeating final reptend from other simple repeating sequences that could arise.

In addition, there were some more mathematically theoretical submissions. We'll be having a look at those as well, alongside a very interesting port from the Raku source-code of the `.base-repeating` method available in that sister language.

## the CRITERIA

This challenge yet again put me in the difficult situation of having to decide, against a rather simple and open-ended specification, whether a given method works or not. The obvious item to search for is the correct identification of a repeating decimal, but as these can be quite long other factors such as the accuracy of floating point numbers can come into play in that evaluation.

It stands to reason, then, that any solution based on using standard, floating-point division can be broken by tossing enough complexity at it.

My sources tell me, for instance, that 1/5714207 has a reptend that's 5714206 digits long. That's a lot of significant digits. I'm not going to check that result, but you get my point. So although this is a valid consideration, it does seem wrong to throw out every answer that uses built-in division on this basis. Where then, do I draw the line?

The above fraction takes a few seconds for me to compute, and even a noticeable amount of time to display after it's done. For the fraction 1/982451653, well, I imagine it would eventually give an answer — there's no reason besides my impatience with a control key that it wouldn't. And that's only the 50,000,000th prime. There's plenty more where that came from. So of course we can "break" any algorithm that way as well, by exceeding the power of whatever machine we use to run it.

On the other hand we have 1/17th. This fraction has a 16 digit reptend and is pretty low on the big list of fractions. It seems like a pretty reasonable thing to expect from a repeating decimal program. It's also the smallest *big* reptend, you might say, in the class of repetends having *k*-1 digits for a given fraction 1/*k*. 7 is like that, with the 6 digits in its familiar 142857 string, but I don't consider that very large. This is like that too, being the next larger version, followed by 1/19 and 1/23. This class of numbers, incidentally, are known as [Full Reptend Primes](https://en.wikipedia.org/wiki/Full_reptend_prime). 5714207, you might have noticed, would be in there too.

So I went through and ran 1/17 to see if it gave "0.(0588235294117647)". That was the first big test.

The second test I landed on was less obvious, but that was 1/44 = 0.02(27). This is tricky because it has a repeat that isn't comprised of leading 0s, being that pair of 2s. Sadly, a few solutions that otherwise looked to be correctly handling things found these and short-circuited, giving the answer 0.0(2).

So what was deemed ok, then? Well one thing that wasn't commonly implemented was support for negative numbers. Because the main technique employed makes extensive use of Euclidean division, these values caused all kinds of problems with the ceiling versus the floor, and the result is the whole plan doesn't work unless active steps are made to accommodate them. In fact only four people did. On this basis I decided we wouldn't care too much about that, as any added robustness seemed being pretty tangental to the main logic anyway. My life is complicated enough; I have no need for an angry mob with pitchforks added to it.

One oddity I saw more than once was seeing 1/17 as 0.0(5882352941176470). Note the trailing 0. While not necessarily the most compact, or best way to say it, I can't really say it's wrong, either. It is, after all, mathematically equivalent, much as the value 1 can be written 1.0 or even 1.(0) if one had some deep need to do so.  I recall running into this problem myself, and eventually reworked my answer until it went away. It's also interesting to me because in both cases it's cited to be from what appears to be the same python source.

## long DIVISION
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/abigail/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/adam-russell/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/colin-crain/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/polettix/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/laurent-rosenfeld/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/perlboy1967/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/sgreen/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/wlmb/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/wanderdoc/perl/ch-2.pl)

The most common approach to the solution was to implement a version of long division, breaking the larger problem into a sequence of steps involving Euclidean division and pulling down additional decimal 0s from the numerator to the remainder to make each successive step.

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/perlboy1967/perl/ch-2.pl)

We'll look to Niels to start us off today. Here is his example of the long division logic. At each iteration we add enough zeros to the current remainder to make it greater than the denominator. With this value as the new numerator we store it in a hash against its position, being the current length of the result string we are constructing. Integer division is then performed on the new numerator and the denominator, with the integer portion added to the result string. This continues until either the remainder becomes 0 or is recognized as a key in the `%rSeen` hash.

If the remainder is found in the hash, the position stored in the value will indicate the beginning of the repeat.

```perl
  do {
    $n = $r;

    while ($n < $d) {
      $n .= '0';
      $result .= '0' if ($n < $d);
    }

    push(@{$rSeen{$n}}, length($result));

    $result .= int($n/$d)
      if (scalar(@{$rSeen{$n}}) < 2);

    $r = $n % $d;

  } while ($r != 0 and scalar(@{$rSeen{$n}} < 2));
```

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/sgreen/perl/ch-2.pl)

Here are the same steps presented by Simon in a slightly different manner. The progress is systematic and straightforward.

```perl
    while ( $N != 0 and not exists $seen{$N} ) {
        # Repeat the division until we've seen a remainder
        $seen{$N} = length($digits);
        ( my $digit, $N ) = _div( $N, $D );
        $digits .= $digit;
    }

    if ( $N == 0 ) {
        # It's not a repeating number
        say $digits ? "$whole.$digits" : $whole;
    }
    else {
        # Add the parenthesis in the correct place, and display the number
        substr( $digits, $seen{$N}, 0, '(' );
        say "$whole.$digits)";
    }
```

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/colin-crain/perl/ch-2.pl)

For my own solution, I used an explicit position counter that logged every remainder seen to its position, whether it had enough zeros added or not. After dancing around the problem for a while and later refactoring out a certain amount of cruft I ended up quite pleased at the simple structure of the final result.

```perl
    sub ediv ( $num, $den ) {
    ## Euclidean division of $num by $den returns quotient and remainder
        (int( $num / $den ), $num % $den);
    }

    my ($whole, $r) = ediv( $num, $den );

    while ($r != 0) {

        ## add one 0 to remainder
        ## add remainder at every index position to %seen hash
        $r .= 0;
        exists $seen{$r} ? last : ($seen{$r} = $pos);

        ## add additional 0s to remainder and quotient until num > den
        ## with each 0 increment index position and add to seen hash
        until ($r - $den >= 0) {
            $pos++;
            $r .= 0;
            exists $seen{$r} ? last : ($seen{$r} = $pos);
            push @q, 0;
        }

        ## the long division step
        my $q;
        ($q, $r) = ediv($r, $den);
        push @q => $q;

        $pos++;
    }

    my $out;

    ## OUTPUT
    ## three cases:
    ## * whole number, no decimal
    ## * isolate and present repeating fraction in parens
    ## * finishes neatly, join with decimal point
    if (@q == 0) {
        $out = $whole;
    }
    elsif ($r) {
        my $start   = $seen{$r};
        my $end     = $pos-1;
        my @pre     = @q[0..$start-1];
        my @rep     = @q[$start..$end];
        $out = join '', $whole, '.', @pre, '(', @rep, ')';
    }
    else {
        $out = join '', ($whole, '.', @q);
    }
```


[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/adam-russell/perl/ch-2.pl)

Adam shares a lot of submissions with us in Prolog, and his proclivities show through in his attachment to the logical purity of a nice true or false result. This is perhaps a bit of observational speculation on my part, but in any case he imports the `boolean` pragma to give him these barewords.

Here he employs a computational switch to avoid looking for a reptend unless the numerator contains prime factors other than 2 and 5. His `prime_factor()` function does what you'd expect.

```perl
    sub nd2decimal{
        my($n, $d) = @_;
        my $max_repetend = $d - 1;
        my $repeats = false;
        my @factors = prime_factor($d);
        for my $factor (@factors){
            $repeats = true if($factor != 2 && $factor != 5);
        }
        unless($repeats){
            return sprintf("%0.${max_repetend}g", $n / $d);
        }
        else{
            my $x = divide($n, $d, [], []);
            return $x;
        }
    }
```

Any other prime factor beyond 2 or 5 will produce a repeating decimal, and if this is the case he then performs long division to find a matching remainder using a hash:

```perl
    sub divide{
        my($n, $d) = @_;
        my @remainders;
        my $q = (int($n / $d)) . ".";
        my $r = $n % $d;
        push @remainders, $r;
        my @a;
        for (0 .. $d){
            $q .= int($r*10 / $d);
            $r = $r*10 % $d;
            @a = grep { $remainders[$_] == $r } (0 .. @remainders - 1);
            last if(@a);
            push @remainders, $r;
        }
        my $r_i = $a[0];
        my $i = index($q, ".");
        my $decimal_part = substr($q, $i+1);
        return substr($q, 0, $i + 1) . substr($decimal_part, 0, $r_i) . "(" . substr($q, $i + $r_i + 1) . ")";
    }
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/roger-bell-west/perl/ch-2.pl)

and

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/laurent-rosenfeld/perl/ch-2.pl)

It seems both Roger and Laurent have adapted the same Python solution for their submissions; a fact I know for sure because they properly cite their common source. To me the amusing part was that I didn't pick up on this right away from their respective blog writeups, but rather from a shared notational oddity in their results: yielding "0.0(5882352941176470)" for 1/17th rather than "0.(0588235294117647)".

Here's Roger's version. From personal experience I found getting rid of that trailing zero shift without breaking other parts to be quite a bother, and it was the simplifying and indiscriminately caching of every remainder examined, whether it was larger than the denominator or not, that ultimately made it go away. Less code, in my case, rather than more. For this version? Who knows.

```perl
    sub ds {
        my $n = shift;
        my $d = shift;
        my $quotient = sprintf( '%d.', $n / $d );
        my $c = 10*( $n % $d );
        while ( $c > 0 && $c < $d ) {
            $c *= 10;
            $quotient .= "0";
        }
        my @digits;
        my %passed;
        my $i = 0;
        while ( 1 ) {
            if ( exists $passed{ $c } ) {
                my @cycle = @digits[$passed{ $c }..$#digits];
                my $result = $quotient . join( '', @digits[0..$passed{ $c }-1] );
                if ( scalar @cycle > 1 || $cycle[0] != 0 ) {
                    $result .= '('. join( '', @cycle ) .')';
                }
                if ( substr( $result, -1, 1 ) eq '.' ) {
                    substr( $result, -1, 1 )='';
                }
                return $result;
            }
            my $q = int( $c / $d );
            my $r = $c % $d;
            $passed{ $c }=$i;
            push @digits, $q;
            $i++;
            $c = 10 * $r;
        }
    }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/e-choroba/perl/ch-2.pl)

Choroba shares another fine example of long division with a lookup hash for the remainders, with the added bonus of having accommodation for negative numbers. As these complicate Euclidean division, turning `floor` operations into `ceiling` and thus no longer allowing us to substitute integer truncation, he neatly sidesteps the issue by removing the signs and properly replacing them after all is over and done.


```perl
    sub decimal_string {
        my ($n, $d) = @_;
        my ($abs_n, $abs_d) = map abs, $n, $d;
        my $result = join "",
                          ($n < 0 xor $d < 0) ? '-' : "",
                          int($abs_n / $abs_d),
                          '.';
        my %seen = (my $remainder = $abs_n % $abs_d => 0);
        my $i = 1;
        while ($remainder != 0) {
            $remainder *= 10;
            $result .= my $r_digit = int($remainder / $abs_d);
            my $new_remainder = $remainder % $abs_d;
            if (exists $seen{$new_remainder}) {
                substr $result,
                       1 + index($result, '.') + $seen{$new_remainder},
                       0, '(';
                return "$result)"
            }
            $seen{ $remainder = $new_remainder } = $i++;
        }
        return $result =~ s/\.$/.0/r
    }
```


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/polettix/perl/ch-2.pl)

Finally, Flavio provides us with what is perhaps the most exhaustive solution using long division, not only allowing for negative input but also delivering a reverse function to test his work, able to produce a fraction from a parsed-out repeating decimal. So to switch things up a bit, rather than share his long division we'll have a look at this unusual turn of events.

The basic idea here is to create a fraction of the reptend over a number made up of an equivalent number of "9" digits, with allowances made for a non-repeating transient before the reptend.

Interested parties might wish to read the [wikipedia article on the process](https://en.wikipedia.org/wiki/Repeating_decimal#A_shortcut). Make a note of this technique — we will see it resurface later.

```perl
    sub rational_pair ($x) {
       require Math::BigInt;
       my ($s, $i, $d) = $x =~ m{\A (-?) (\d*) (?:\. (.*))? \z}mxs;
       $d //= '';
       my ($ap, $p) = $d =~ m{\A (\d*) (?: \( (\d+) \) )?}mxs;
       my $pp = $i . $ap;
       $p //= '';
       my ($N, $D);
       if (my $lp = length $p) {
          $N = Math::BigInt->new($pp . $p) - Math::BigInt->new($pp);
          return (0, 1) unless $N;
          $D = Math::BigInt->new(('9' x length($p)) . ('0' x length($ap)));
       }
       else { # non-periodic
          $N = Math::BigInt->new($pp);
          $D = Math::BigInt->new('1' . ('0' x length($ap)));
       }
       my $g = $N ? gcd($N, $D) : 1;
       return ($s . ($N / $g), $D / $g);
    }

    sub gcd { my ($A, $B) = @_; ($A, $B) = ($B % $A, $A) while $A; return $B }
```


## matching out the REPTEND using a REGEX
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/james-smith/perl/ch-2.pl)

Alternately, several members attempted to match out repeating sequences using a regular expression. This proved remarkably difficult to get right, due not only to the aforementioned problems with floating point precision and premature matching but also with the problem that the last digit calculated might not be the last digit of the reptend. Ultimately only James was able to overcome these obstacles.

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/james-smith/perl/ch-2.pl)

James sidesteps the accuracy of floating point division by compacting a long division routine into a single complex line, calculating a decimal string twice the length of the denominator *value*. As:

1. the maximum period in the reptend for a value 1/*k* is *k*-1,
2. the size of the transient for 1/2<sup><i>a</i></sup>5<sup><i>b</i></sup> yields max(*a*,*b*) added digits, and
3. the period of *c*/*k* is the same as 1/*k*,

then we can conclude this is always enough digits to repeat the reptend at least once.

So at this point he knows he can safely match for some group of digits repeated at least once and anchored to the end of the string. This produces *a* reptend, but might not be the best way to write it. As we're talking about a cycle, any arbitrary rotation of that cycle can define the continuance, as long as the offset digits are defined in the transient portion. The numbers 0.(142857),  0.1(428571), and 0.14285(714285) are equivalent — even if they aren't written in the most compact form. It's an infinite sequence. It doesn't have a final digit.

There is a solution provided for his situation: he handles the case where the last digit rendered may not be the last digit of the repeating sequence by comparing the end of the non-repeating section again against rotations of the repeated sequence, shortening the transient and shifting and rotating the reptend in the process until no more digits can be removed. It seems to work.

I am sometimes torn a bit between leaving in James' extensive commentary and slicing it out to highlight just how compact his solutions can be. On the other hand after such rarefaction having a roadmap is much appreciated and more than welcome, if not required. Cramming too much action into a single line as an end in itself can certainly lead to unnecessarily obscure results, but he seems to gain so much pleasure from it it's infectious.

```perl
    sub decimal_string {
      my( $D,    $whole_part,      $N,            $res ) =
        ( $_[1], int($_[0]/$_[1]), $_[0] % $_[1], ''   );

      ## "Long division" to arbitrary precision...
      return $whole_part if $N == 0;

      ($res,$N) = $D>$N ? ($res.'0',$N.'0')
                        : ($res.int($N/$D),($N%$D).'0')
          foreach 0 .. 2*$D;

      ## Find a recurring sequence... and remove it!
      ## We look for the "shortest" sequence - but it must be tied to the
      ## RHS of our result string....
      $res =~ s{(\d+?)\1+$}{}g;

      my $recurring = $1;

      ## $recurring is the recurring digits - it may be "0"s in which case
      ## the number is represented by a finite (non recurring decimal)
      ##
      ## As this is a recurring sequence tied to the end of the string, we
      ## need to look to see if we rotate it to see if it started earlier..
      ##
      ## So we compare the last letter of the string & the recurring
      ## string and if it matches we move it to the start of the recurring
      ## sequence and strip the last letter of both strings....
      ##
      ## (chomp $str).$str <- achieves this rotation....
      ##
      ## Note the little nastiness here - to make the while loop a
      ## one-liner we allocate $recurring to the first of the list of
      ## "list" on the RHS of the = sign and drop the other (chop $res)

      ($recurring) = (chop $recurring).$recurring, chop $res
        while (substr $res,-1) eq substr $recurring, -1;

      substr $res, 0, 1, "$whole_part."; ## Replace leading 0 with
                                         ## The whole part we removed
                                         ## above for dealing with N>D

      $res .= "($recurring)" unless $recurring eq '0';

      return $res;
    }
```




## COPRIMES are PRIMES TOGETHER
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/jo-37/perl/ch-2.pl) and
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/stuart-little/perl/ch-2.pl)

There were some rather intense mathematical solutions that worked on computing the number of digits in the reptend and isolating it out from there by various methods.

Here's a little light reading to get you up to speed before you start:

[Reciprocals of composite integers coprime to 10](https://en.wikipedia.org/wiki/Repeating_decimal#Reciprocals_of_composite_integers_coprime_to_10)

[Reciprocals of integers not coprime to 10](https://en.wikipedia.org/wiki/Repeating_decimal#Reciprocals_of_integers_not_coprime_to_10)

[Carmichael's Lambda Function](https://en.wikipedia.org/wiki/Carmichael_function)

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/jo-37/perl/ch-2.pl)

Jorg solves the precision problems of floating point numbers by calculating his division using the BigRat and BigFloat data types. From there he computes a number of digits as given by Carmichael's lambda function, which gives an upper limit of the length of the reptend. From there a regular expression is used to try and match out a shorter, repeating reptend should one be present. The length of any shorter reptend will evenly divide the result from the lambda function.

It's all very well broken down, albeit some of the steps are performed in a very technical way that might not immediately be clear. For example, "Find the largest divisor in the denominator that is coprime to 10" just means divide out and remove all factors of 2 and 5 from the denominator. The triplet of steps he uses to accomplish this are artfully pure, with all of the functional indirection that might bring to mind. I find it a bit like reading a proof.

```perl
    my %pow     = map {($_ => valuation $frac->denominator, $_)} factor 10;
    my $nlen    = max values %pow;
    my $coprime = reduce {$a->bdiv($b ** $pow{$b})} $frac->denominator, keys %pow;
```

We could have hard-coded a couple of loops, but where's the fun in that? And to be sure, we do need `$nlen` later, to know how many zeros to add to the transient before the reptend. So there's a solid reason to it all, complex as it is.

```perl
    use Math::BigRat;
    use Math::Prime::Util
        qw(carmichael_lambda valuation fordivisors lastfor factor);
    use List::Util qw(max reduce);

    # Convert a fraction into its decimal representation, highlighting a
    # repetend.
    #
    # We *could* perform a long division, record the occurring remainders
    # after the numerator has been exhausted and stop at the first
    # repetition.  But...
    #
    # Here is a different plan:
    # Perform a BigRat division with a sufficient number of significant
    # digits.  Then truncate the result at the end of a repetend and find
    # the true repetend.  The required number of digits is composed of the
    # integer part's length, the length of a non-repeating sequence and an
    # estimate for the period, i.e. a (preferably small) multiple of it.
    # The integer part is facile.
    # For the length of the non-repeating sequence we have to find the
    # powers of 2 and 5 in the denominator.  Each factor 2, 5 or 10 adds
    # one digit.  Thus the length of the non-repeating sequence is the
    # maximum exponent of 2 and 5 in the denominator.
    # For an estimate of the period we need to find the largest divisor in
    # the denominator that is coprime to 10, i.e. the denominator with all
    # powers of the common factors removed.
    # The period of the reciprocal of the coprime denominator cannot be
    # larger than the maximum order of this reduced denominator as an
    # element of the multiplicative group of integers modulo k (for any
    # coprime k), which is given by Carmichael's lambda function.
    # See
    # https://en.wikipedia.org/wiki/Repeating_decimal#Reciprocals_of_composite_integers_coprime_to_10
    # and https://en.wikipedia.org/wiki/Carmichael_function
    # Luckily the lambda function is provided by the awesome
    # Math::Prime::Util module.
    # Finally, put the actual repetend in parentheses.
    sub frac {
        # Create a fraction object.
        my $frac = Math::BigRat->new(shift);

        # Done.
        return "$frac" if $frac->is_int;

        # Find the powers of 2 and 5 in the denominator and their maximum
        # exponent.
        my %pow = map {($_ => valuation $frac->denominator, $_)} factor 10;
        my $nlen = max values %pow;

        # Find the largest divisor in the denominator that is coprime to 10.
        my $coprime =
            reduce {$a->bdiv($b ** $pow{$b})} $frac->denominator, keys %pow;

        # Get an estimate for the period of the reciprocal of the coprime
        # denominator.
        my $rlen = carmichael_lambda $coprime;

        # Check the limit for quantifiers in regexp's.
        die "period possibly too large, giving up" if $rlen >= 2 ** 15 - 1;

        # Convert the BigRat via BigFloat into a string ending in the
        # repetend.
        my $decimal .= $frac
            ->as_float($frac->as_int->length + $nlen + $rlen)
            ->bfround(-($nlen + $rlen));

        # The actual period is a divisor of the maximum period.  Try all
        # divisors in ascending order up to the first match.
        fordivisors {
            # Number of repetitions.
            my $rep = $rlen / $_ - 1;

            # Enclose the repetend in parentheses or remove zeroes.
            lastfor if $decimal =~
                s/^.*?\..{$nlen}\K(.{$_})\1{$rep}$/"($1)" x !!$1/e;
        } $rlen;

        $decimal;
    }
```



[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/stuart-little/perl/ch-2.pl)

Stuart uses a completely different method to produce the reptend of his result, sharing similarities with [the decimal to fraction conversion we saw earlier](https://en.wikipedia.org/wiki/Repeating_decimal#A_shortcut).

After using his `ordExp()` function to compute the number of digits, he multiplies the quantity of the numerator modulo the portion of the denominator coprime to 10 (that is, with all the 2s and 5s divided out), by a number composed of the digit-length of 9s, divided by the coprime denominator again. Yea, that took me some time to get through as well. Perhaps a visual aide will help. For example for the fraction 1/14 we evaluate the equation:

```perl
    my $fract = int ((($num % $den) * (10**$digs-1))/$den);
```


> fract = 5 × ( 999999 / 7 )<br>
→ 5 × 142857<br>
→ 714285

Neat, huh? The end result, by the way, is 0.0(714285). Calculating the the non-repeating portion of course adds its own additional wrinkle of complication.

```perl
    sub ordExp($n,$p) {
        my ($ord,$base)=(1,$n % $p);
        while ($base-1 % $p) {
            $ord++;
            $base = ($base*$n) % $p;
        }
        return $ord;
    }

    sub when10copr($num,$den) {
        my $int = int($num/$den);
        my $digs = ordExp(10,$den);
        my $fract = int ((($num % $den) * (10**$digs-1))/$den);
        return $int, ('0' x ($digs - length($fract))) . $fract;
    }

    sub fractPart($num,$den) {
        my $exp2 = maxExp(2,$den);
        my $exp5 = maxExp(5,$den);
        my $newNum = ($exp2 >= $exp5) ? (5**($exp2-$exp5) * $num) : (2**($exp5-$exp2) * $num);
        my @copr = when10copr($newNum, int $den/(2**$exp2 * 5**$exp5));
        my $nonRep = ($copr[0] || max($exp2,$exp5)) ? ('0' x (max($exp2,$exp5) - length($copr[0])) . $copr[0]) : ("");
        my $rep = ($copr[1] ne "0") ? (qq|($copr[1])|) : ("");
        return $nonRep . $rep;
    }

    my ($num,$den) = @ARGV;
    say int($num/$den) . "." . fractPart($num % $den,$den);
```


## INTERESTING and UNUSUAL DEVELOPMENTS in the CASE
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-106/athanasius/perl/ch-2.pl)

The monk opens by noting the absence of the handy Raku method `.base-repeating`, which makes the task quite straightforward in that language. Furthermore, they note the apparent lack of anything equivalent in CPAN to provide this from a module.

So they decided to port the Raku source code for the function, from the file

    rakudo-2021.03/src/core.c/Rational.pm6

Raku relies on a native Rational (Rat) type here, so for the port the Core module `Math::BigRat` is brought in to provide the functionality. This technique handles negative numbers and also provides for arbitrary number bases, which is an interesting twist.

```perl
    sub base_repeating
    {
        my ($N, $D, $base) = @_;

        return (0, '') if $N == 0;

        # Reduce to normal (i.e., shortest) form

        my $rat = Math::BigRat->new( "$N / $D" );  # Implicitly calls $rat->bnorm()
        my $num = abs $rat->numerator;
        my $den = abs $rat->denominator;

        return ('-' x ($rat < 0) . $num, '') if $den == 1;

        my  @quotients = floor( $num / $den );
        my (@remainders, %remainders);

        while (1)
        {
            push @remainders, $num %= $den;
            last if $remainders{ $num }++ || $num == 0;
            $num *= $base;
            push @quotients, floor( $num / $den );
        }

        my ($rep, @cycle) = ('', ());

        if ($num)
        {
            @cycle = splice @quotients, 1 + first_index { $_ == $num } @remainders;
            $rep   = join '', @cycle;
        }

        splice @quotients, 1, 0, '.';

        my $non_rep = '-' x ($rat < 0) . join '', @quotients;

        return ($non_rep, $rep);
    }
```


------------------------------------------





---

# BLOGS {#PWC106BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, I somehow continue to maintain my bearings. Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC093BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *READ* these *BLOG* *LINKS*:

**( *don't think, trust your training, you're in the zone, just do it ...* )**


**Aaron Smith**

 * [Perl Weekly Challenge 106 - Aaron Smith](https://aaronreidsmith.github.io/blog/perl-weekly-challenge-106/) ( *Raku* )

**Abigail**

 * [Perl Weekly Challenge 106: Maximum Gap](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-106-1.html) ( *Perl* )
 * [Perl Weekly Challenge 106: Decimal String](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-106-2.html) ( *Perl* )

**Adam Russell**

 * [Recursion and Repeated Decimals: The Weekly Challenge 106 — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2021/04/04) ( *Perl* )

**Arne Sommer**

 * [String the Gap with Raku](https://raku-musings.com/string-gap.html) ( *Raku* )

**Dave Jacoby**

 * [Just Got Poked: Perl Weekly Challenge 106 and Other News | Committed to Memory](https://jacoby.github.io/2021/04/03/just-got-poked-perl-weekly-challenge-106-and-other-news.html) ( *Perl* )

**Flavio Poletti**

 * [PWC106 - Maximum Gap - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/03/31/pwc106-maximum-gap/) ( *Perl* )
 * [PWC106 - Decimal String - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/04/01/pwc106-decimal-string/) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 106: Maximum Gap and Decimal String | laurent_r](http://blogs.perl.org/users/laurent_r/2021/04/perl-weekly-challenge-106-maximum-gap-and-decimal-string.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 106: quick and easy! – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2021/03/29/PerlWeeklyChallenge106.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 106: quick and easy! – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2021/03/29/PerlWeeklyChallenge106.html#task2) ( *Raku* )

**Mohammad S Anwar**

 * [Perl Weekly Challenge - 106 (Task #1: Maximum Gap) - YouTube](https://youtu.be/h8NppRqAZaE) ( *Perl* )

**Roger Bell_West**

 * [RogerBW's Blog: Perl Weekly Challenge 106: Maximum Decimal](https://blog.firedrake.org/archive/2021/03/Perl_Weekly_Challenge_106__Maximum_Decimal.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 106](https://dev.to/simongreennet/weekly-challenge-106-1cn7) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 106 – W. Luis Mochán](https://wlmb.github.io/2021/03/29/PWC106/) ( *Perl* )
