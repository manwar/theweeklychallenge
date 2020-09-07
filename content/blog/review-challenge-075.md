
---
author:       Colin Crain
date:         2020-09-07T00:00:00
description:  "Colin Crain › Perl Weekly Review #075"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #075"
image:        images/blog/p5-review-challenge-075.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-074/).* )

Welcome to the Perl review for **Week 075** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

Or really, talk about pretty much anything that stands out as remarkable or noteworthy.

Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due. And that's why I'm here, to try and figure out how to do that.

Let's have a look and see what we can find.

---

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-075/) or the summary [**recap**](/blog/recap-challenge-075/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC075TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC075TASK2)   &nbsp;  &nbsp;  &nbsp;       •   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC075BLOGS)    &nbsp;  &nbsp;  &nbsp;       •

---

# TASK #1 › Coins Sum {#PWC075TASK1}
You are given a set of coins @C, assuming you have infinite amount of each coin in the set.
Write a script to find how many ways you make sum $S using the coins from the set @C.

Example:
Input:
```
    @C = (1, 2, 4)
    $S = 6
```
Output: 6
There are 6 possible ways to make sum 6.
```
    a) (1, 1, 1, 1, 1, 1)
    b) (1, 1, 1, 1, 2)
    c) (1, 1, 2, 2)
    d) (1, 1, 4)
    e) (2, 2, 2)
    f) (2, 4)
```

## Solution Types

The 26 solutions given were wide ranging, but did fall into a few basic categories. I'll try and briefly discuss and give representative examples. Wish me luck.

## use a Combinatorics Module
[**Javier Luque**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/javier-luque/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/ulrich-rieke/perl/ch-1.pl),
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/wanderdoc/perl/ch-1.pl), and
[**Yet Ebreo**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/yet-ebreo/perl/ch-1.pl)

There was a very straightforward solution available to those in a hurry. The task as stated is essentially a problem in combinatorics; we are looking for combinations with repetition that satisfy a certain requirement. We don't know the length to specify, but we do know both the amount and the value of the smallest coin. Dividing one by the other will give us an upper limit, and we're in business.

Reaching up on the shelf, the go to module of choice around here seems to have settled on `Algorithm::Combinatorics`, with good reason. It's full-featured and fast, and a personal favorite. The `combinations_with_repetition` routine, given an array reference and a size, will return an iterator object that when called will produce the next combination of length size of the elements in the array. Here is the core logic demonstrated by

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/wanderdoc/perl/ch-1.pl)

```perl
 for my $k ( 1 ..  $sum/$arr[0])
 {
      my $iter = combinations_with_repetition(\@arr, $k);
      while (my $p = $iter->next)
      {
           print join(': ', ++$counter, join('+', @$p)), $/ if sum(@$p) == $sum;
      }
 }
```

The $counter variable keeps track of the number of hits, and that `sum` is imported from `List::Util`. A little support code and that's all we need.

The only real improvement to this method comes in more careful selection in the bounds of the loop. Here the good doctor starts at 1, but that assumes we have a 1-unit cent, copper, jiao, penny or whatnot to work with. This is not a given, so there's room to tune the algorithm.

In that regard, avid golfer
[**Yet Ebreo**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/yet-ebreo/perl/ch-1.pl)
is back with the following terse gem:

```perl
my @C = sort {$a-$b} (1, 2, 4);
my $S = 6;
my $max = 0 | $S / $C[0];

for my $k (1+$S/$C[-1] .. $max) {
    for my $v ( combinations_with_repetition(\@C, $k) ) {
        ($S == sum @$v) && say "@$v"
    }
}
```

As you can see this optimization in choosig the brackets can get quite involved. The careful observer will notice one glaring weirdness in this code, though: **"What's up with that `sort` function, anyway?"** Yea, somethin' just ain't right about that boy... *(shakes head)*

But the code block works, that it does. Why? Well, it's subtraction: $a - $b will either be positive, negative or zero, which is what `sort` wants to know. If asked I'd say it needed (-1, 0, 1), because, you know, that's what `<=>` returns, but apparently any positive or negative will do. Never much thought about that detail. Huh. Good to know.

## the ODOMETER method
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/roger-bell-west/perl/ch-1.pl),
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/walt-mankowski/perl/ch-1.pl)

One way to keep track of unknown quantity of a fixed number of types of objects is to assign an array, mapping positions to specific coin values, with the element holding the quantity. In this sense the array resembles, appropriately, a [mechanical change maker](https://www.wasserstrom.com/restaurant-supplies-equipment/Product?partNumber=283190&gclid=Cj0KCQjw7sz6BRDYARIsAPHzrNIn5-lW-TPENLnU6g6-_wDyyG5awZMlnHdCN_AAF5XAZhp8XiXdnKUaAoe5EALw_wcB). By rolling values through this array, incrementing  the smaller value first then carrying over into higher value coins, resetting the smaller value element counters when the target value is exceeded, the array trips somewhat like the odometer in a car. The sum at any given moment can be found by multiplying the quantity at given position by the value of the coin it represents. In this way all the combinations of coins can be systematically rotated through and examined.

Here is **Walt Mankowski's** version laid out:

```perl
my @cnt = map {0} 0..$#c;
while (1) {
    my $val = value(\@c, \@cnt);
    if ($val >= $s) {
        if ($val == $s) {
            my @tmp = @cnt;
            push @solutions, \@tmp;
        }

        # rotate "odometer"
        $cnt[-1] = 0;
        my $i = -2;
        $cnt[$i]++;
        while ($i >= -@c && value(\@c, \@cnt) > $s) {
            $cnt[$i] = 0;
            $i--;
            $cnt[$i]++ if $i >= -@c;
        }
        last if $i < -@c;
    } else {
        $cnt[-1]++;
    }
}
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/roger-bell-west/perl/ch-1.pl) uses a similar mechanism, explaining it further in his [blog](https://blog.firedrake.org/archive/2020/08/Perl_Weekly_Challenge_75__coins_and_rectangles.html)



## use DYNAMIC programming
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/cheok-yin-fung/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/lubos-kolouch/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/mohammad-anwar/perl/ch-1.pl), and
[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/nunovieira220/perl/ch-1.pl)

The dynamic programming paradigm breaks the problem down into smaller sub-problems, building one upon the work already done by the smaller to produce the answer. There were a few examples taking this strategy;

[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/mohammad-anwar/perl/ch-1.pl)

here lays out his method for determining the *number* of solutions:

```perl
sub coins_sum {
    my ($coins, $sum) = @_;
    my $size = $#$coins;
    return 0 if ($size == -1 || $sum <= 0);
    my $matrix;

    # Sum of 0 can be achieved in one possible way.
    $matrix->[$_][0] = 1 for (0 .. $size+1);

    foreach my $i (0 .. $size) {
        foreach my $j (1 .. $sum) {

            my $include_current = 0;
            my $exclude_current = 0;

            if ($coins->[$i] <= $j) {
                $include_current = $matrix->[$i][$j - $coins->[$i]];
            }

            if ($i > 0) {
                $exclude_current = $matrix->[$i - 1][$j];
            }
            $matrix->[$i][$j] = $include_current + $exclude_current;
        }
    }
    return $matrix->[$size][$sum];
}
```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/cheok-yin-fung/perl/ch-1.pl),

also using a dynamic method, and produces the lists of coin solutions as well. Her `contain()` routine does most of the work.

```perl
sub contain {
    my @small = @{ $_[0] };
    my $size_of_smaller_arr = scalar @small;
    my @set_of_partitions = @{ $_[1] };
    my $size_of_the_set_of_parts = scalar @set_of_partitions;
    my $index = 0;
    my $tf_found = undef;
    while ( not($tf_found) && ($index < $size_of_the_set_of_parts) ) {
        my @a_partition = @{ $set_of_partitions[$index] };
        my $k = 0;
        $tf_found = ( scalar @a_partition == scalar @a_partition );
        while ($tf_found && ($k < $size_of_smaller_arr)) {
            $tf_found = $tf_found && ($a_partition[$k] == $small[$k]);
            $k++;
        }
        $index++;
    }
    return $tf_found;
}
```

She explains some of her reasoning in her [blog](http://blogs.perl.org/users/c_y_fung/2020/08/tc.html), where she also goes in some  rather interesting comparison testing against other languages.





## write a RECURSIVE routine
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/alexander-pankoff/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/athanasius/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/colin-crain/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/e-choroba/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/jo-37/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/laurent-rosenfeld/perl/ch-1.pl),
[**Myoungjin Jeon**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/jeongoon/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/perlboy1967/perl/ch-1.pl),
[**Shawn Wagner**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/shawn-wagner/perl/ch-1.pl), and
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/sgreen/perl/ch-1.pl)

As we wish to build a list, and have no good idea how many elements have, a natural approach is to build a recursive routine to add coins until we finish, building for as long as required.

In the most basic form, this will be adding another coin from a bag to a series of running lists, multiplying out the combinations until each one is deemed to have met or exceeded the desired total. This is perfectly adequate for smaller numbers and lists of coins, but blows up quite quickly for more complex solutions. Not only will we need to examine every possible solution until the sum overruns or a solution is found, but also we will end up generating every permutation of each of these lists and partial lists along the way as well. You can see how would escalate quickly.

About a half a dozen people let this complexity get away from them, whilst submitting fundamentally correct solutions.

There were a few ways to get out of this. We can control repeating work on equivalent permutations, we can avoid computing combinations that will never work, and we can remember the work we have done, in case we need to repeat it. The rest of the solutions in this category used some variation on these methods.

### continuous CONSTRAINING

A good plan proved to be to systematically progress through the coin bag in an orderly fashion from high to low or vice versa, restricting the coins passed forward to either those of the same value or further along in the order. This eliminates the permuted solutions and provides a nice visual sort to the output at the same time, revealing the underlying patterns behind the sets.

Here it is, with commentary, explained by **Simon Green**:

```perl
sub _calculate {
    my ( $coins, $sofar, $remaining_amount ) = @_;
    my @solutions = ();

    # To ensure we don't get duplicate results (e.g 2 + 4 / 4 + 2), we
    #  only consider coins greater than or equal to the last used coin
    my $last_coin = scalar(@$sofar) ? $sofar->[-1] : 0;

    foreach my $coin (@$coins) {
        next if $coin < $last_coin;

        if ( $coin < $remaining_amount ) {
            # We need to find some more coins
            push @solutions,
              _calculate(
                $coins,
                [ @$sofar, $coin ],
                $remaining_amount - $coin
              );
        }
        elsif ( $coin == $remaining_amount ) {
            # We have a solution!
            push @solutions, [ @$sofar, $coin ];
            # Higher coins will exceed the remaining amount
            last;
        }
        else {
            # This coin (and all larger coins) will exceed the remaining amount
            last;
        }
    }
    return @solutions;
}
```

for
[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/colin-crain/perl/ch-1.pl)
I did something similar, restricting the coin bag both by removing coins greater than the running remaining total and then again by filtering the passed-on coins to only those of the currently added coin or smaller.

```perl
sub get_coin_groups {
    my ($amt, $group, $bag) = @_;
    $group //= [];
    $bag     //= \@coins;

    ## base case, cashed out
    if ($amt == 0) {
        push @solutions, $group;
        return;
    }

    ## limit coin bag to those smaller or equal to the current amount
    my @coin_bag = grep { $_ <= $amt } $bag->@*;

    ## edge case, cannot complete group with remaining coins
    if (@coin_bag == 0) {
        return;
    }

    for my $coin ( @coin_bag ) {
        ## limit coin bag to this coin or smaller
        ## keeps groups ordered and disallows duplicate rearrangements
        my @smaller_coin_bag = grep { $_ <= $coin } $bag->@*;
        get_coin_groups( $amt - $coin, [@$group, $coin], \@smaller_coin_bag );
    }
}
```

[**Myoungjin Jeon**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/jeongoon/perl/ch-1.pl) and
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/laurent-rosenfeld/perl/ch-1.pl) constricted their paths along similar lines, controlling the coin bag. Laurent goes into some detail on developing his solution in a [blog post on the subject](http://blogs.perl.org/users/laurent_r/2020/08/perl-weekly-challenge-75-coin-sums-and-largest-rectangle-histogram.html)

In several of the challenges from previous weeks, a recurring method of nested `map` functions in a recursion routine often arose to make combination arrays. This too arose here to develop our coin lists.

[**Jorg Sommrey's**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/jo-37/perl/ch-1.pl)
`assemble` routine
gives us a tight functional example of this type of solution, reducing the available options in the coin bag as recursing progresses.

```perl
sub assemble {
    my ($sum, @coins) = @_;

    # There is no solution if the sum is less than the smallest coin.
    return if $sum < min @coins;

    # If a coin matches the given sum, this gives one (non-recursive)
    # assembly.
    ((any {$sum == $_} @coins) ? [$sum] : (),
    # Try each coin for further assemblies.
    map {
        my $coin = $_;
        # Reduce the sum by the selected coin and combine that one with
        # all possible assemblies of the reduced sum using solely coins
        # that are not smaller than the selected.
        map [$coin, @$_], assemble $sum - $coin, grep $_ >= $coin, @coins;
    } @coins);
}
```

[**James Smith's**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/james-smith/perl/ch-1.pl) nested maps were considerably condensed even from this, albeit at the cost of clarity:

```perl
sub csm {
  my $t = shift;
  return @{$mem{"$t @_"}||=[map {my $a=$_; $t==$a?[$a]:
    map {[$a,@{$_}]} csm($t-$a,grep {$a<=$_&&$_<=$t} @_)} @_] };
}
```


### MEMOIZE it!
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/athanasius/perl/ch-1.pl)
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/e-choroba/perl/ch-1.pl)

An excellent way to speed things up was to remember the recursions of the driver routine, so should the same conditions arise a second time, the memoized version is returned rather than recomputing the result. This, although not quite as formally, dovetails quite nicely into the dynamic programming examples brought up previously, as we are in the end using the results of smaller parts of the large calculation to assemble solutions.

```perl
use Memoize;                        # memoize()
memoize('count_coin_combinations');

sub count_coin_combinations         # Recursive function
{
    my ($target, $coin, @coins) = @_;
    my  $sum = 0;

    if (scalar @coins)              # There are more coins to process
    {
        for my $i (0 .. int($target / $coin))
        {
            my $new_target = $target - ($i * $coin);
            if ($new_target == 0)   # Base case 1: target already reached
            {
                ++$sum;
            }
            else                    # Recursive case
            {
                $sum += count_coin_combinations($new_target, @coins);
            }
        }
    }
    else                            # Base case 2: no more coins
    {
        $sum = 1 if $target % $coin == 0;
    }
    return $sum;
}
```



## RARE and UNUSUAL DELIGHTS


[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/adam-russell/perl/ch-1.pl)

use AI::Prolog;
use Hash::MultiKey;

Adam has given us a Prolog logic program to solve the challenge. I'll have to leave it at that, and point interested parties to it. It's fascinating as far as I'mm concerned. As I've said before, Perl makes the best glue.

```perl
use AI::Prolog;
use Hash::MultiKey;

MAIN:{
    my $S = $ARGV[0];
    my $C = "[" . $ARGV[1] . "]";

    my $prolog = do{
        local $/;
        <DATA>;
    };
    $prolog =~ s/_COINS_/$C/g;
    $prolog =~ s/_SUM_/$S/g;
    $prolog = new AI::Prolog($prolog);
    $prolog->query("sum(Coins).");
    my %h;
    tie %h, "Hash::MultiKey";
    while(my $result = $prolog->results){
        my @s = sort @{$result->[1]};
        $h{\@s} = undef;
    }
    for my $k (keys %h){
        print "(" . join(",", @{$k}) . ")";
        print "\n";
    }
}

__DATA__
member(X,[X|_]).
member(X,[_|T]) :- member(X,T).

coins(_COINS_).

sum(Coins):-
    sum([], Coins, 0).

sum(Coins, Coins, _SUM_).

sum(Partial, Coins, Sum):-
    Sum < _SUM_,
    coins(L),
    member(X,L),
    S is Sum + X,
    sum([X | Partial], Coins, S).
```



[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/pete-houston/perl/ch-1.pl)

The [knapsack problem](https://en.wikipedia.org/wiki/Knapsack_problem), which we visited once before in PWC #036, asked that given a bunch of items with a given weight, how many objects can be placed in a knapsack without exceeding a limit. This is obviously similar the problem of selecting a set of coins equal to a certain value, and if we constrain the solutions to only those that *equal* our target value, rather than approach, then any methods to solve the one can solve the other.

Enter the `Algorithm::Knapsack` module. Pete whips this baby out and neatly fillets the problem into a plate of perfect sashimi bites. All he needs to do is produce a bag containing enough coins of each value to meet the target on their own; providing this to the algorithm produces the best answers. All he needs to do *(hint, hint)* is filter the results to make sure they do sum to the target, as the classic knapsack problem only wishes to find the *best* fit, rather than a *perfect* fit.

---

# TASK #2 › Largest Rectangle Histogram {#PWC075TASK2}
You are given an array of positive numbers @A.
Write a script to find the larget rectangle histogram created by the
given array.

BONUS: Try to print the histogram as shown in the example, if
possible.

**Example 1:**

Input: @A = (2, 1, 4, 5, 3, 7)

```
      7           #
      6           #
      5       #   #
      4     # #   #
      3     # # # #
      2 #   # # # #
      1 # # # # # #
      _ _ _ _ _ _ _
        2 1 4 5 3 7
```

Looking at the above histogram, the largest rectangle (4 x 3) is
formed by columns (4, 5, 3 and 7).

Output: 12

**Example 2:**

Input: @A = (3, 2, 3, 5, 7, 5)

```
      7         #
      6         #
      5       # # #
      4       # # #
      3 #   # # # #
      2 # # # # # #
      1 # # # # # #
      _ _ _ _ _ _ _
        3 2 3 5 7 5
```

Looking at the above histogram, the largest rectangle (3 x 5) is
formed by columns (5, 7 and 5).

Output: 15


## ABOUT the solutions

The **27** submissions to Challenge #2  were much more wide ranging than I would have expected. It's funny, when you frame a solution out in your mind you naturally assume that the underlying logic will permeate through alternate viewpoints. This mostly bears out in practice, but that supposition hasn't held as true this week as in weeks past, defying easy categorization to the results. So the only thing I can do is touch on a few of the larger points, as there is no way for me to do justice to the full gamut, which is a shame. As the number of submissions increases, I will do my best to highlight what I can, to help people see the different ways to solve the tasks.


## ITERATE through SLICES, find WIDTH times the MINIMUM HEIGHT
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/adam-russell/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/james-smith/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/laurent-rosenfeld/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/roger-bell-west/perl/ch-2.pl),
[**Shawn Wagner**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/shawn-wagner/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/sgreen/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/ulrich-rieke/perl/ch-2.pl),
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/walt-mankowski/perl/ch-2.pl) and
[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/colin-crain/perl/ch-2.pl)

A very direct and straightforward approach to finding the larget rectangle is to systematically examine every available set of points defining a width, then find the minimum value within that span, which will define the height. Setting up two nested loops to establish the endpoints, we can use these to extract an array slice holding all of the relevant elements.


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/roger-bell-west/perl/ch-2.pl)
and
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/laurent-rosenfeld/perl/ch-2.pl)
both strip this idea down to the bare essentials. Here's Roger's version, although Laurent's is nearly identical. Once you have things this tight, there often is very little variance.

```perl
foreach my $a ( 0..$#c - 1 ) {
    foreach my $b ( $a + 1..$#c ) {
        my $area = ( $b - $a + 1 )*min( @c[$a..$b] );
        if ( $area > $bestarea ) {
            $bestarea = $area;
            @n = ( $a, $b );
        }
    }
}
```

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/colin-crain/perl/ch-2.pl)

allowed for the option to have multiple rectangles of the same (largest) size, the array structures that keeps all the information to report are kept in the `@largest` array. I believe only
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/perlboy1967/perl/ch-2.pl)
also did this, but I didn't run that test through everyone's code.

```perl
for my $start (0..@A-2) {
    for my $end ($start+1..@A-1) {
        my $min = min @A[$start..$end];
        push @windows, [$min*($end-$start+1), $start, $end, $min];
    }
}

my @sorted  = sort { $b->[0] <=> $a->[0]        } @windows;
my @largest = grep { $_->[0] == $sorted[0]->[0] } @sorted;
```

[**Shawn Wagner**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/shawn-wagner/perl/ch-2.pl)

Shawn took an interesting tangent, using three loops to get he job done: one to incrementally progress from the left edge, another inside to check heights up to the value of the given index, and a third to see how far that window extends to the right.

It's worth mentioning there were answers involving even more looping, but they all worked on the examples given. Generally complexity increases with each loop, leading to bogging down should the dataset get large.

```perl
sub task2 {
  my @A = @_;
  histogram @A;
  my $maxsize = 0;
  for my $left (0 .. $#A) {
    for my $top (1 .. $A[$left]) {
      for my $right ($left+1 .. $#A) {
        last if ($A[$right] < $top);
        my $size = ($right - $left + 1) * $top;
        $maxsize = max $maxsize, $size;
      }
    }
  }
  say "Largest rectangle area: $maxsize";
}

```



## find the LARGEST WINDOW around a given INDEX
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/athanasius/perl/ch-2.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/mohammad-anwar/perl/ch-2.pl),
[**Yet Ebreo**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/yet-ebreo/perl/ch-2.pl) , and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/wanderdoc/perl/ch-2.pl)



Of course examining every possible window and finding the minimum value for a height isn't the only way to do things. There's a lot of checking values larger than the minimum value in the examples above before we decide that there's nothing smaller. It's effective, but perhaps we could reverse this. After all, every minimum found in the end is going to be the value of one position or another. Why not asume each element to be a minimum, and find the area of the largest span with that height? We can do that by looking to the left and the right until we find the last element that is greater than the given value; these will be our boundaries.

[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/mohammad-anwar/perl/ch-2.pl)

takes this approach. He creates a pair of matching functions, `go_left` and `go_right`, that count the number of positions that can be travelled to the left or right, respectively, before a value less than the of the given index is found. Here's one:

```perl
sub go_left {
    my ($i, $list) = @_;

    my $c = $list->[$i];
    my $j = 0;
    while ($i > 0) {
        $i--;
        last if ($list->[$i] < $c);
        $j++;
    }

    return $j;
}
```

The area can then be found by simply multiplying the height of the element (*hint, hint*) by the width of the window found.

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/wanderdoc/perl/ch-2.pl)

gave us a very similar solution, here's his corresponding left-hand search:

```perl
for my $i ( 0 .. $#arr )
{
     while ( scalar @left and $arr[$i] <= $arr[$left[-1]] )
     {
          pop @left;
     }

     if ( 0 == scalar @left )
     {
          $width[$i] += $i;
     }
     else
     {
          $width[$i] += $i - $left[-1] - 1;
     }
     push @left, $i;
}

```



But that wasn't the only way to examine every window of a given height, however.

[**Yet Ebreo**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/yet-ebreo/perl/ch-2.pl)

had an interesting variation for us. We start at the beginning of the list, iterating through the elements in the usual manner. Then for each element we traverse the list again, one position at a time. If the value is greater than or equal to the given element, we increment a counter; if not, that is the largest window containing that index. The area is the height, the value of the index, times the counter, or span. The counter is reset after the area is added to a result array and the process continues; in this way we are assured the window over the given element is assessed.

```perl
for my $f (@R) {
    my $s = 0;
    for my $e (@R) {
        if ($e >= $f) {
            $s++
        } else {
            push @res, $s * $f;
            $s = 0;
        }
    }
    push @res, $s * $f;
}
```

## the O(n) solution
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/e-choroba/perl/ch-2.pl),
[**Javier Luque**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/javier-luque/perl/ch-2.pl), and
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/lubos-kolouch/perl/ch-2.pl)

There is a best time solution that several people implemented. This is strightforward but not the most intuitive thing. It involves progressing from left to right, keeping a stack containing the indexes of values smaller than the current maximum, and a counter keeping track of how long the current maximum has lasted, being the difference between the current index and the last element on the stack. When incrementing the index *decreases* the value below the current maximum, the area is calculated for the current maximum times the span and the maximum is reset to the value at the index. The stack is popped, increasing the counter more, until a value less than the new maximum is found. This determines a new height and span, and the new area is calculated, and noted if it exceeds the previous maximum. Depending on whether the next index increases or decreases against the current maximum, the progression continues in this manner. If the end of the array is reached, the maximum goes to minimum, and the second option in the algorithm engages until the stack is empty, indicating we have reached the end and there are no more rectangles to calculate. We are left with the maximum area found.

Whew! Implementation aside, I'm pretty sure I got all the salient points across in that. It's quite elegant once you wrap your head around it.

[**Javier Luque**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/javier-luque/perl/ch-2.pl) and
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/lubos-kolouch/perl/ch-2.pl)
gave us very similar solutions; here's Lubos' version to peruse:

```perl
while ($index < scalar @$histogram) {
    if ( (not @stack) or ($histogram->[$stack[-1]] <= $histogram->[$index]) ) {
        push @stack, $index;
        $index ++;
    } else {
        my $top_of_stack = pop @stack;
        my $area = @stack ? $histogram->[$top_of_stack] * ($index - $stack[-1] - 1) : $index;

        $max_area = max($max_area, $area);
    }
}

while (@stack) {
        my $top_of_stack = pop @stack;
        my $area = @stack ? $histogram->[$top_of_stack] * ($index - $stack[-1] - 1) : $index;

        $max_area = max($max_area, $area);
}
printHistogram($histogram);

```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/e-choroba/perl/ch-2.pl)

did things a little bit differently, but close examination will reveal the similarities:

```perl
sub largest_rectangle {
    my @columns = @_;
    my @smallest;
    my $max = 0;
    my $column = 0;
    while ($column <= $#columns) {
        if (! @smallest || $columns[$column] > $columns[ $smallest[-1] ]) {
            push @smallest, $column++;
        } else {
            _pop(\$max, \@smallest, \@columns, $column);
        }
    }
    _pop(\$max, \@smallest, \@columns, $column) while @smallest;
    return $max
}

sub _pop {
    my ($max, $smallest, $columns, $column) = @_;
    my $s = pop @$smallest;
    my $area = $columns->[$s] * ($column - ($smallest->[-1] // -1) - 1);
    $$max = $area if $area > $$max;
}

```



## the HISTOGRAM DRAWING

Most who went for the bonus did so by using either looped `print` or a more complex `sprintf` statement, starting from the largest value in the input array and decrementing a counter, outputting lines one by one until 0 is reached. In each line, any element whose value exceeds that count gets a '#', if not, a space instead. A little careful formatting will keep the #s lined up vertically.

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/adam-russell/perl/ch-2.pl)

gives us an example of using `print`:

```perl
while($x >= 1){
    print "$x ";
    for my $h (@{$values}){
        print "# " if $h >= $x;
        print "  " if $h < $x;
    }
    print "\n";
    $x--;
}
```

The whole process can even be wrapped up in a mapping operation, as demonstrated here by

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/e-choroba/perl/ch-2.pl)

```perl
say join ' ', map {
    sprintf "%${max_length}s", $columns[$_ - 1] >= $y ? '#' : ' '
} 1 .. @columns;
```

Now I don't want to take sides, and apologies to Jorg here, because it was close, but I have to say I think the award for *prettiest* output has to go to

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/perlboy1967/perl/ch-2.pl)

```perl
sub printHistogram ( \@$$\@ ) {
    my ( $arA, $surface, $surfaceHeight, $arIndexes ) = @_;

    if ( defined $surfaceHeight ) {
        printf "\nSurface size: %d ( %d x %d )\n\n",
                     $surface,
                     scalar @$arIndexes, $surfaceHeight;
    }

    my $max = max( @$arA );
    my $yLw = length( $max );

    my %indexes = map {  $_ => 1  } @$arIndexes;

    # Print historgram rows
    for ( my $row = $max; $row > 0; $row-- ) {
        my @row = ( sprintf( "%${ yLw }s", $row ), '|' );
        for my $col ( 0 .. scalar( @$arA ) - 1 ) {
            if ( $arA->[$col] < $row ) {
                push( @row, ' ' );
            } else {
                push( @row, ( !exists $indexes{ $col } ||
                                        $row > $surfaceHeight ? '#' : 'O' ) );
            }
        }
        print join( " ", @row )."\n";
    }

    # Print X-axis
    print sprintf( "%${ yLw }s +%s\n",
                                '',
                                join( '-', map {  '-'  } @$arA, '' ) );

    # Print X labels
    for my $l ( 0 .. $yLw - 1 ) {
        print sprintf( "%${ yLw }s     %s\n",
                                    '',
                                    join( ' ', map {  substr( $_.' ' x $yLw, $l, 1 )  } @$arA ) );
    }
}

```

because it looks like this:

```
Surface size: 18 (3 x 6)

12 |             #
11 |             #
10 |             #
 9 |             #
 8 |             #
 7 |             #
 6 |     #   O O O
 5 |     #   O O O
 4 |     #   O O O   #
 3 |   # #   O O O # #
 2 |   # # # O O O # #
 1 | # # # # O O O # #
   +-------------------
     1 3 6 2 6 6 1 3 4
                 2
```

He even handles multiple equivalent outputs. It just looks... *nice*. Well done.




## UNIQUE approaches STANDING in a FIELD OF UNICORNS


[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/alexander-pankoff/perl/ch-2.pl)

Alexander presents us with a very clever recursive solution. Every called execution chooses the largest rectangle between three options: a range, the returned value for a slice removing one element at the beginning, or the same for a slice removing one element at the end. Through this method of division all slices are eventually examined, and the largest propagated out until a winner emerges. Very nice.

```perl
sub largest_rectangle(@cols) {
    return 0 unless @cols;

    max(
        rectangle_size( @cols ),
        largest_rectangle( @cols[ 1 .. $#cols ] ),
        largest_rectangle( @cols[ 0 .. ( $#cols - 1 ) ] )
    );
}

sub rectangle_size(@cols) {
    return scalar @cols * min @cols;
}

```

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/duncan-c-white/perl/ch-2.pl)

gives us a nice variant, a State Machine to keep track of when we're in a rectangle to be evaluated:

```perl
fun rectangleareasofheight( $h, @value )
{
    # want to locate runs of adjacent values >= $h, each such run has
    # a width, that w * h is the area.  use a 2-state state machine:
    # state 0 is: not currently in such a run.
    # state 1 is: currently in such a run, $area is the current area of the run.
    my @result;
    my $state = 0;
    my $area = 0;
    foreach my $v (@value)
    {
        #say "debug: state=$state, v=$v, h=$h, area=$area";
        if( $state == 0 && $v>=$h )
        {
            # enter state 1, start counting the area
            $state=1; $area=$h;
        } elsif( $state == 1 && $v>=$h )
        {
            # stay in state 1: increase the area
            $area+=$h;
        } elsif( $state == 1 && $v<$h )
        {
            # finish one run, revert to state 0
            push @result, $area;
            #say "height $h: run area: $area, back to state 0 at value $v";
            $state = 0; $area = 0;
        }
    }
    # final possible extra area..
    if( $state == 1 )
    {
        push @result, $area;
        #say "height $h: run area: $area";
    }
    return @result;
}
```

I like this approach.



[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/jo-37/perl/ch-2.pl)

I knew I couldn't have been the only person who thought to write a Rectangle class to help solve this problem. I toyed with the idea and ultimately abandoned it, but Jorg here has gone and followed through.

**Kurtz: "The will to do that! Perfect, genuine, complete, crystalline, pure... If I had ten divisions of those men, our troubles here would be over very quickly." **

In creating his Rectangle, he provides a few overloaded functions to facilitate working with them, <=> to compare sizes, .= to set the position of the lower right corner, and "" to produce a stringified output of descriptives.

Using these tools, the basic algorithm is iterating over the elements left to right, at each point finding the largest span to the right, in this case using `List::Util::reduce` to look at every end position and propagate the larger area. It's well commented and I encourage others to have a look, but here is a sample for the tasting.

```perl
# Find the largest rectangle inside a histogram.
# The Rectangle constructor, comparator and assignment operator
# are specifically designed to offer a terse implementation here.
sub max_rect {

    # Slide over all elements seeking for the maximum rectangle
    reduce {
        my $pos = $b;
        # Slide over all windows ending at the selected position.
        reduce {
            # Get the maximum rectangle over the full window length.
            my $rect = Rectangle->new(@_[$b .. $pos]);
            # If the new rectangle is larger than the current maximum,
            # set the position and use it as the new maximum.
            $rect > $a ? $rect .= $pos : $a;
        } $a, 0 .. $b;
    } Rectangle->new, 0 .. $#_;
}
```
---

<br>

# BLOGS {#PWC075BLOGS}

***

**That's it for me this week, people!**

## But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*,
## then *RUN* *(dont walk!)* to the *WATERING HOLE*
## and *READ* these *BLOG* *LINKS*:

***( don't think, trust your training, you're in the zone, just do it ... )***


**Adam Russell**

 * [All Combinations Equal to a Sum in Perl and Prolog](https://adamcrussell.livejournal.com/17614.html) ( *Perl* )
 * [Largest Rectangle Histogram](https://adamcrussell.livejournal.com/17720.html) ( *Perl* )

**Andrew Shitov**

 * [Coins Sum: The Raku Challenge Week 75, task 1](https://andrewshitov.com/2020/08/29/coins-sum-the-raku-challenge-week-75-task-1/) ( *Raku* )
 * [Largest Rectangle Histogram: The Raku Challenge Week 75, task 2](https://andrewshitov.com/2020/08/29/largest-rectangle-histogram-the-raku-challenge-week-75-task-2/) ( *Raku* )
 * [A more idiomatic Raku solution](https://andrewshitov.com/2020/08/30/a-more-idiomatic-raku-solution/) ( *Raku* )

**Cheok-Yin Fung**

 * [Time Challenge (CY's Take on PWC#075 Task 1)](http://blogs.perl.org/users/c_y_fung/2020/08/tc.html) ( *Perl* )
 * [How and What to do in Programming (CY's Take on PWC#075 Task 2)](http://blogs.perl.org/users/c_y_fung/2020/08/how-and-what.html) ( *Perl* )

**Colin Crain**

 * [Throw the Windows Wide Open -  Change Is In the Air](https://colincrain.wordpress.com/2020/08/29/throw-the-windows-wide-open-change-is-in-the-air/) ( *Perl & Raku* )

**Javier Luque**

 * [PERL WEEKLY CHALLENGE &#8211; 075](https://perlchallenges.wordpress.com/2020/08/28/perl-weekly-challenge-075/) ( *Perl & Raku* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 75: Coin Sums and Largest Rectangle Histogram](http://blogs.perl.org/users/laurent_r/2020/08/perl-weekly-challenge-75-coin-sums-and-largest-rectangle-histogram.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 75: nested loops - Task 1](https://fluca1978.github.io/2020/08/24/PerlWeeklyChallenge75.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 75: nested loops - Task 2](https://fluca1978.github.io/2020/08/24/PerlWeeklyChallenge75.html#task2) ( *Raku* )

**Mohammad S Anwar**

 * [BLOG: The Weekly Challenge #075](https://perlweeklychallenge.org/blog/weekly-challenge-075/) ( *Perl & Raku* )
 * [Perl Weekly Challenge - 075 (Task #1: Perl) - YouTube](https://www.youtube.com/watch?v=DQr7xHJYZ5I) ( *Perl & Raku* )
 * [Perl Weekly Challenge - 075 (Task #2: Perl) - YouTube](https://www.youtube.com/watch?v=D8jyGEQOLhk) ( *Perl & Raku* )

**Roger Bell_West**

 * [RogerBW&#39;s Blog: Perl Weekly Challenge 75: coins and rectangles](https://blog.firedrake.org/archive/2020/08/Perl_Weekly_Challenge_75__coins_and_rectangles.html) ( *Perl & Raku* )

**Shahed Nooshmand**

 * [The Weekly Challenge: week 75](https://rafraichisso.ir/2020/08/26/pwc-75) ( *Raku* )

**Simon Green**

 * [Perl Weekly Challenge 075](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-075/sgreen/README.md) ( *Perl* )

**Walt Mankowski**

 * [Perl Weekly Challenge #75](http://www.mawode.com/blog/blog/2020/08/26/perl-weekly-challenge-75/) ( *Perl* )
