---
title: "Andrew Shitov Weekly Review: Challenge - 072"
date: 2020-08-14T00:00:00+00:00
description: "Andrew Shitov Weekly Review: Challenge - #072."
type: post
image: images/blog/p6-review-challenge-072.jpg
author: Andrew Shitov
tags: ["Raku"]
---
***
# Raku Solutions Weekly Review
***

## Getting in Touch

<a href="mailto:andy@shitov.ru"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Email me (Andrew) with any feedback about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

We'd greatly appreciate any feedback you'd like to give.

***

<br>

Welcome to the **Raku Review** for **Week 072** of **The Weekly Challenge!**. For a quick overview, go through the [**original tasks**](/blog/perl-weekly-challenge-072/) and [**recap**](/blog/recap-challenge-072/) of the weekly challenge.

<br>

## Task 1. Trailing zeroes in a factorial

In this task, you need to count the number of trailing zeroes in the factorial of an integer number, where that number does not exceed 10. There are two obvious alternatives to the solution, one is pure mathematical (count the number of factors — powers of 5) and the second is using the fact that Raku can transparently switch between the numeric and string representation of a number. In the solutions sent to the Challenge, both approaches are demonstrated.

### Pre-computed tables

The side-story is that if we know that the maximum input number is 10, then we can pre-compute the results and use a lookup table to access the answer directly. Such a solution was [demonstrated by Simon Proctor](https://twitter.com/scimon/status/1290322571897053185) (it was not submitted to the Challenge repository but nevertheless is worth mentionning):

```perl6
    say <00000111112>.comb[@*ARGS[0]]
```

Another example that uses an idea of a lookup table is found in the [solution by Athanasius](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/athanasius/raku/ch-1.raku):

    my  constant @ZEROES =  #        N! #0s        N
                            (         1, 0 ),   #  0
                            (         1, 0 ),   #  1
                            (         2, 0 ),   #  2
                            (         6, 0 ),   #  3
                            (        24, 0 ),   #  4
                            (       120, 1 ),   #  5
                            (       720, 1 ),   #  6
                            (     5_040, 1 ),   #  7
                            (    40_320, 1 ),   #  8
                            (   362_880, 1 ),   #  9
                            ( 3_628_800, 2 );   # 10

    # . . .
    ($factorial, $zeroes) = @ZEROES[ $N ];

It may seem an overweighted solution, but it is a good example of an approach for creating robust and production-ready code.

### Computing a factorial

Let me list the different methods the participants use to compute a factorial.

Using [a reduction metaoperator](https://docs.raku.org/language/operators#index-entry-[]_(reduction_metaoperators)):

```perl6
    my $f = [*] 1..$n;
```

With an explicit call of [`reduce`](https://docs.raku.org/routine/reduce). To understand the meaning of `* * *`, let me refer you to my post ”[All the stars of Perl 6](https://perl6advent.wordpress.com/2017/12/11/all-the-stars-of-perl-6/)” in one of the past Advent calendars.

```perl6
    my Int:D $n-factorial  = ($n...1).reduce(* * *);
```

Another form of the reduction operator, the so-called [triangular reduction operator](https://docs.raku.org/language/operators#index-entry-[%5c]_(triangular_reduction_metaoperators)). It gives you not only the factorial of the given number but the whole array for the factorials for all the numbers from 1 to `N`:

```perl6
    constant @fact = 1, |[\*] 1..* ;
```

The above array is lazy, and you can use an explicit [`lazy` statement prefix](https://docs.raku.org/language/statement-prefixes#index-entry-lazy_(statement_prefix)-lazy) together with (an already lazy) sequence:

```perl6
    my $fac := lazy 1, { $^a * ++$ } ... *;
```

In this example, notice the use of an [anonymous state variable `$`](https://docs.raku.org/language/variables#index-entry-$_(variable)).

There is no doubt you can use a loop to compute a factorial:

```perl6
    for 1 .. $N -> $value {
        $faculty *= $value;
    }
```

Or, in a different form, when you modify the value of `$N` that you got from the user.

```perl6
    $N *= $_ for 1..$N-1;
```

And finally, another fascinating way is to modify the syntax of Raku and define your own postfix so that you can write `$N!` to compute a factorial:

```perl6
    sub postfix:<!>( Int $n ) {
        [*](1..$n) ;
    }
```

### Counting zeroes

The majority of the solutions use one or another form of a regex that matches the sequence of zeroes at the end of the string. For example:

```perl6
    say ($f ~~ / 0+ $/ // '').chars;
```

Or:

```perl6
    @fact[$n].match(/0*$/).chars
```

Or:

```perl6
    my $zeros = ($fact ~~ /.*?(0*)$/)[0].comb.elems;
```

Or:

```perl6
    my $trailing-zeroes = $N ~~ m/ <[1..9]>?(<[0]>+) /;
```

You can also do a trick and flip the string first. In this case, you will need to only look at the characters at the beginning of the string:

```perl6
    my $numstr = ~($N!).flip;
```

### Powers of 5

The second most often used method is to find the number of factors which are either 5 or powers of 5 (25, 125, etc.). Here is a possible implementation found in [the solution by Javier Luque](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/javier-luque/raku/ch-1.p6):

```perl6
    loop ($i = 5; Int($N / $i) >= 1; $i *= 5) {
        $zeroes += Int($N / $i);
    }
```

### Divide by 10

Finally, it is possible to divide the number by 10 until you get a non-integer number, as [Jason Messer did it](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/jason-messer/raku/ch-1.p6):

```perl6
    while ($running > 0) {
        if ($running %% 10) {
            $running /= 10;
            ++$count;
        } else {
            last;
        }
    }
```

### Video review

You can find the complete overview of the tasks in this video: [www.youtube.com/watch?v=6fTIoe6hUIg](https://www.youtube.com/watch?v=6fTIoe6hUIg).

## Task 2. Lines range in a text file

The task is to print the lines with the numbers `$A` through `$B` from a text file.

To genereate a reference text file, we can use Raku itself:

```perl6
    raku -e 'say "L$_" for 1..100' > input.txt
```

The most common feature of Raku used in the solutions to this task is the [`IO::Path::lines` method](https://docs.raku.org/type/IO::Path#method_lines). For example, in [my solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/ash/raku/ch-2.raku), a range of lines is taken directly by slicing the sequence or lines:

```perl6
    .say for 'input.txt'.IO.lines[$a-1 ..^ $b];
```

It is possible to work with line numbers directly with the help of either the `kv` or `pairs` method. For example, as in the [solution by Ben Devies](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/ben-davies/raku/ch-2.raku):

```perl6
    .say for $file.slurp.lines.pairs.grep($a <= *.key + 1 <= $b).map(*.value);
```

Or as in [Colin Crain’s code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/colin-crain/raku/ch-2.raku):

```perl6
    .value.say if .key == $from-1 ff .key == $to-1 for $file.IO.lines.pairs;
```

The `lines` method takes an optional parameter `$limit` to prevent reading too many lines. The most interesting usage of this parameter is demonstrated in [the solution by Jason Messer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/jason-messer/raku/ch-2.p6), where it is first used to skip the lines with line numbers below `$A`, and then to read the lines that are actually requested (`$B - $A + 1`):

```perl6
    my $fh = open $fname, :chomp(False) or die($fh);
    $fh.lines($first_line - 1).eager;
    my $n = $last_line - ($first_line - 1);
    for ($fh.lines($n)) { .print }
```

Another interesting solution is offered by [Jan Krnavek](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/wambash/raku/ch-2.raku). Here, the minimum required number of lines is taken first, and then the first lines are skipped:

```perl6
    $file.IO.lines.head($b).skip($a-1)».say
```

### Video review

Watch the video to see the review of the solutions of the second task: [www.youtube.com/watch?v=kU4dggl0P8g](https://www.youtube.com/watch?v=kU4dggl0P8g).

<br>

***
## BLOGS
***

<br>

### [Andrew Shitov](https://andrewshitov.com/2020/08/04/raku-challenge-week-72/), [Arne Sommer](https://raku-musings.com/zero-lines.html), [Colin Crain](https://colincrain.wordpress.com/2020/08/07/flip-flops-leaving-a-trail-of-zeros/), [Jaldhar H. Vyas](https://www.braincells.com/perl/2020/08/perl_weekly_challenge_week_72.html), [Javier Luque](https://perlchallenges.wordpress.com/2020/08/03/perl-weekly-challenge-072/), [Laurent Rosenfeld](http://blogs.perl.org/users/laurent_r/2020/08/perl-weekly-challenge-72-one-liners-for-trailing-zeros-and-line-ranges.html), [Luca Ferrari](https://fluca1978.github.io/2020/08/03/PerlWeeklyChallenge72.html), [Mohammad S Anwar](https://perlweeklychallenge.org/blog/weekly-challenge-072/), [Roger Bell_West](https://blog.firedrake.org/archive/2020/08/Perl_Weekly_Challenge_72__factorial_zeroes_and_line_ranges.html), [Simon Proctor #1](https://dev.to/scimon/the-weekly-challenge-in-raku-week-72-part-1-2i0g) and [Simon Proctor #2](https://dev.to/scimon/the-weekly-challenge-in-raku-week-72-part-2-12oh).

<br>

If you want to participate in **The Weekly Challenge**, please contact us at <perlweeklychallenge@yahoo.com>.
