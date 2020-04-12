---
author:       Ryan Thompson
date:         2020-04-12T00:00:00
description:  "Ryan Thompson › Perl Weekly Review #054"
tags:         ["perl"]
title:        "Ryan Thompson › Perl Weekly Review #054"
image:        images/blog/p5-review-challenge-054.jpg
type:         post
---

Continues from [previous week](/blog/review-challenge-053/).

Welcome to the Perl review for Week 054 of the Weekly Challenge! For a quick overview, go through the [original tasks](/blog/perl-weekly-challenge-054/) and [recap](/blog/recap-challenge-054/) of the weekly challenge.

## Getting in Touch

<a href="mailto:rjt@cpan.org"><img src="http://ry.ca/misc/Email.svg" height="50" width="50"> Email</a> › Email me (Ryan) with any feedback about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="http://ry.ca/misc/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="http://ry.ca/misc/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

We'd greatly appreciate any feedback you'd like to give.

## Table of Contents

### [Task 1](#task1) › kth Permutation Sequence

[ [Andrezgz](#andrezgz1)  | [Athanasius](#athanasius1)  | [Cheok-Yin Fung](#cheok-yin-fung1)  | [Colin Crain](#colin-crain1)  | [Dave Jacoby](#dave-jacoby1)  | [Duncan C. White](#duncan-c-white1)  | [E. Choroba](#e-choroba1)  | [Jaldhar H. Vyas](#jaldhar-h-vyas1)  | [Javier Luque](#javier-luque1)  | [Laurent Rosenfeld](#laurent-rosenfeld1)  | [Lubos Kolouch](#lubos-kolouch1)  | [Mohammad S Anwar](#mohammad-anwar1)  | [Peter Meszaros](#peter-meszaros1)  | [Roger Bell West](#roger-bell-west1)  | [Ruben Westerberg](#ruben-westerberg1)  | [Ryan Thompson](#ryan-thompson1)  | [Saif Ahmed](#saiftynet1)  | [User Person](#user-person1)  | [Wanderdoc](#wanderdoc1)  | [Yet Ebreo](#yet-ebreo1)  ]

### [Task 2](#task2) › Collatz Conjecture

[ [Alicia Bielsa](#alicia-bielsa2)  | [Andrezgz](#andrezgz2)  | [Athanasius](#athanasius2)  | [Cheok-Yin Fung](#cheok-yin-fung2)  | [Colin Crain](#colin-crain2)  | [Cristina Heredia](#cristian-heredia2)  | [Dave Jacoby](#dave-jacoby2)  | [Duncan C. White](#duncan-c-white2)  | [E. Choroba](#e-choroba2)  | [Jaldhar H. Vyas](#jaldhar-h-vyas2)  | [Javier Luque](#javier-luque2)  | [Laurent Rosenfeld](#laurent-rosenfeld2)  | [Lubos Kolouch](#lubos-kolouch2)  | [Markus Holzer](#markus-holzer2)  | [Mohammad S Anwar](#mohammad-anwar2)  | [Peter Meszaros](#peter-meszaros2)  | [Roger Bell West](#roger-bell-west2)  | [Ruben Westerberg](#ruben-westerberg2)  | [Ryan Thompson](#ryan-thompson2)  | [Saif Ahmed](#saiftynet2)  | [Shahed Nooshmand](#shahed-nooshmand2)  | [Ulrich Rieke](#ulrich-rieke2)  | [User Person](#user-person2)  | [Wanderdoc](#wanderdoc2)  | [Yet Ebreo](#yet-ebreo2)  ]

### [Blogs](#blogs)

***

***

# Task #1 - kth Permutation Sequence {#task1}

Original Description:

Write a script to accept two integers n (>=1) and k (>=1). It should print the kth permutation of n integers. For more information, please follow the [wiki page](https://en.wikipedia.org/wiki/Permutation#k-permutations_of_n).

For example, n=3 and k=4, the possible permutation sequences are listed below:

123 132 213 231 312 321

The script should print the 4th permutation sequence 231.

***

## Solution Types

### 1. Use a module

Several hackers used various CPAN modules to avoid having to write permutation code. [`Algorithm::Combinatorics`](https://metacpan.org/pod/Algorithm::Combinatorics) was a popular one, but there were others.

### 2. Roll your own

Writing code to enumerate permutations isn't so bad. [Heap's algorithm](https://en.wikipedia.org/wiki/Heap%27s_algorithm) or [Knuth's "Algorithm L"](http://www.cs.utsa.edu/~wagner/knuth/fasc2b.pdf) are effective.

One hilarious method I considered, but did not implement, is a "Bogoperm" algorithm, similar to [Bogosort](https://en.wikipedia.org/wiki/Bogosort), that just randomly shuffles the set *k* times, and if those random shuffles are in lexicographic order, the *k*th shuffle is the winner. Implementing it would have been easy. Testing, less so.

## Stats

* Number of submissions: **20**

* Total SLOC: **961**

* Average SLOC: **48**

## Andrezgz {#andrezgz1}

[Andrezgz's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/andrezgz/perl/ch-1.pl) includes a `factorial` function to calculate the factorial of `$n`:

```perl
sub factorial {
    my $n = shift;
    return 1 if ($n == 0);
    return $n * factorial($n-1);
}
```

A factorial function is useful for bounds checking. Since there are *n*!
permutations of *n* numbers, you can check if the user's *k* value is in
bounds:

```perl
my $n_max_perm = factorial($n);
die $usage . "$n integers have $n_max_perm permutations,"
           . "so <k> should be less than $n_max_perm\n"
    if ($k > $n_max_perm);
```

I appreciate this attention to detail.


The `permute` sub generates the permutations, and `die`s when the `$k`th
permutation is reached:

```perl
my $perm_n = 0;
permute( [1..$n]);

sub permute {
    my $numbers = shift;
    my $perm = shift // '';

    if (!@$numbers){
        die $perm.$/ if (++$perm_n == $k); #finish on kth permutation
        return;
    }

    foreach my $i (0 .. @$numbers-1) {
        my $c = $numbers->[$i];
        my @new_n = grep { $_ != $c } @$numbers;
        permute( \@new_n  , $perm . $c);
    }
    return;
}
```


## Athanasius {#athanasius1}

[Athanasius's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/athanasius/perl/ch-1.pl) uses [`Algorithm::Loops`](https://metacpan.org/pod/Algorithm::Loops)' `NextPermuteNum` sub to generate the next permutation of `@list` `$k-1` times:

```perl
use Algorithm::Loops      qw( NextPermuteNum );
my  @list   =  1 .. $n;
my  $sep    = ($n < 10) ? '' : ' ';

NextPermuteNum( @list ) for 2 .. $k;

printf "The %s permutation of %s is %s\n",
        ordinal($k), join($sep, 1 .. $n), join($sep, @list);
}
```

Athanasius even gives us a nice little `ordinal` function to turn a number into its ordinal, like 1st, 2nd, 3rd, and so on:

```perl
sub ordinal {
    my ($n)     = @_;
    my  $suffix = 'th';
    my  $dig1   = int(($n % 100) / 10);

    unless ($dig1 == 1) {
        my $dig0 = $n % 10;
        $suffix  = $dig0 == 1 ? 'st' :
                   $dig0 == 2 ? 'nd' :
                   $dig0 == 3 ? 'rd' : 'th';
    }

    return $n . $suffix;
}
```

## Cheok-Yin Fung {#cheok-yin-fung1}

[Cheok-Yin Fung's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/cheok-yin-fung/perl/ch-1.pl) generates all permutations, and then sorts them and takes the `$k`th result from the array. The code to generate the permutations is a bit lengthy, but I don't think I can give a partial excerpt and have it make sense:

```perl
my @result = ();
my @char = 1..$P;

my @arrow = map { 1 } @char; #arrows for algorithm for generating permututations
                             #true for pointing to left, undef for pointing to right

my $n = 1;

my @mobile = ();    #store the indices

sub mmax {  #modified from "Learning Perl", return the index of the largest char which in the status of  mobile
    my @mchar = @char;
    my $champion = shift @_;
    foreach (@_) {
        if ( $mchar[$_] gt $mchar[$champion]) {$champion = $_;}
    }
    $champion;
}

my $noofperm = 1;
for my $i (1..$P) {$noofperm *= $i;}

push @result, join("", @char);

while ( $n <= $noofperm-1  ) {
    my $j;
    @mobile = ();
    $j = 0; if ( ($char[$j] gt $char[$j+1]) and not($arrow[$j])) {
        push @mobile, $j;
    }
    for $j (1..$#char-1) {
        if ( ( $char[$j] gt $char[$j-1] and $arrow[$j]) or
        ( $char[$j] gt $char[$j+1] and not($arrow[$j])) ) {
            push @mobile, $j;
        }
    }
    $j = $#char; if ( $char[$j] gt $char[$j-1] and $arrow[$j]) {
        push @mobile, $j;
    }

    if ( $#mobile >= 0 ) {
        my $m = &mmax(@mobile);
        my $todaychamp;   # a character
        my $arrowdirection; # a boolean
        if (not($arrow[$m])) {
            $todaychamp = $char[$m];
            $char[$m]=$char[$m+1];
            $char[$m+1] = $todaychamp;
            $arrowdirection = $arrow[$m];
            $arrow[$m] = $arrow[$m+1];
            $arrow[$m+1] = $arrowdirection;
    # then switch the direction of all the arrows above integers p with p>m
            foreach (0..$#char) {
                if ($char[$_] gt $todaychamp ) {
                    $arrow[$_] = &knot($arrow[$_]);
                }
            }
        } else {
            $todaychamp = $char[$m];
            $char[$m]=$char[$m-1];
            $char[$m-1] = $todaychamp;
            $arrowdirection = $arrow[$m];
            $arrow[$m] = $arrow[$m-1];
            $arrow[$m-1] = $arrowdirection;
            foreach (0..$#char) {
                if ($char[$_] gt $todaychamp  ) {
                    $arrow[$_] = &knot($arrow[$_]);
                }
            }
        }
    }
    #switch the largest mobile integer m and the adjacent integer its arrow points to;
    #the algorithms used here ref to
    #"Introductory Combinatorics" 4th Edition by page 88, by Richard A. Brualdi
    push @result, join("", @char);
    $n++;

}

my @result = sort {$a <=> $b} @result;

print $result[$k-1];
```

Cheok Yin mentions that he wrote this code as an exercise a long time ago, so I won't do an in-depth review, as Cheok Yin's skills have evolved since then.

**Blog** › [CY's take on PWC#054](http://blogs.perl.org/users/c_y_fung/2020/04/cys-take-on-pwc054.html)

## Colin Crain {#colin-crain1}

[Colin Crain's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/colin-crain/perl/ch-1.pl) includes two methods of generating permutations. First up is the recursive method:

```perl
sub permute_with_recursion {
    my ( $end, $selected_sequence ) = @_;
    my @set          = (1..$end);
    my @working;
    my $permutations = [];
    my $data         = { seq_number => $selected_sequence,
                         result     => undef };

    permute_recursive( \@set, \@working, $permutations, $data);

    return $data->{result};
}

sub permute_recursive {
## given a starting set, a working list and a permutations set
## computes complete permutations as arrays and places the arrays on the permutations array
## which is maintained throughout by reference
    my ($setref, $workref, $permutations, $data) = @_;
    my @set = $setref->@*;

    ## if there is only one element left, push it on the working list,
    ## push that array reference onto the permutations array and return.
    ## This unique permutation list is complete.
    if ( scalar @set == 1 ) {
        my @working = $workref->@*;
        push @working,      $set[0];
        if (scalar $permutations->@* == $data->{seq_number} - 1) {
            $data->{result} = \@working;
        }
        else {
            push $permutations->@*,  \@working;
        }
        return;
    }

    ## iterate through the remaining elements of the set,
    ## creating  new copy of the working list, moving the element
    ## from the set to the working list and recursing with these
    ## new lists. The permutations list reference is passed through unchanged.
    for my $element ( @set ) {

        ## collapse the recursion if we have our result
        last if defined $data->{result};

        my @working = $workref->@*;
        push @working, $element;
        my @subset = grep { $_ != $element } @set;
        permute_recursive( \@subset, \@working, $permutations, $data );
    }
}
```

Next up is the in-place algorithm, based on Knuth's [Algorithm L](http://www.cs.utsa.edu/~wagner/knuth/fasc2b.pdf), a classic in computer science:

```perl
sub permute_in_place {
    my ( $end, $selected_sequence ) = @_;
    my @set = (1..$end);

    ## the unrearranged sequence, the identity permutation,
    ## counts as sequence #1 as per the task
    for (1..$selected_sequence-1) {
        compute_next_permutation( \@set );
    }

    return \@set;
}
```

I'll let Colin's comments do the talking here. The L1..L4 refer to Knuth's own annotations from the passage I've linked, above, from *The Art of Computer Programming.* Here is the in-place next permutation sub:

```perl
sub compute_next_permutation {
## in place algorithm (from Knuth Algorithm L, The Art of Computer Programming)
#
#      «before we start we assume a sorted sequence a[0] <= a[1] <= ... <= a[n]»
# L1.  «Visit»  Take the given arrangement
# L2.  «Find j»  Find the largest index j such that a[j] < a[j + 1]. If no such index
#         exists, terminate the algorithm and we are done
# L3.  «Increase a[j]»  Find the largest index k greater than j such that a[j] < a[k],
# L3a.    then swap the values of a[j] and a[k].
# L4.  «Reverse a[j+1]..a[n]»  Reverse the subsequence starting at a[j + 1] through the end of the permutation,
#         a[n]. Do nothing if j+1 >= n. Return to L1.
    ## L1
    my $set = shift;
    my $end = scalar $set->@* - 1;

    ## L2
    my @one = grep { $set->[$_] < $set->[$_+1] } (0..$end-1);
    my $j = $one[-1];
    return if ! defined $j;

    ## L3
    my @two = grep { $_ > $j and $set->[$_] > $set->[$j] } (0..$end);
    my $k = $two[-1];

    ## L3a
    ($set->[$j], $set->[$k]) = ($set->[$k], $set->[$j]);

    ## L4
    return unless ( $j+1 < $end );

    my @reversed = reverse($set->@[ ($j+1)..$end ]);
    splice $set->@*, $j+1, $end-$j, @reversed;
}
```

Colin mentions that he does not always go for the "fastest, most sensible" methodology for these tasks, and that he likes to explore the task "to see what's there." That's a great attitude. After all, if we were all chasing performance and sensibility above all else, there would be very little to differentiate our solutions every week, which would make my life as a reviewer exceedingly boring.

## Dave Jacoby {#dave-jacoby1}

[Dave Jacoby's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/dave-jacoby/perl/ch-1.pl) has a `return_permutation` sub that returns the `$k`th permutation of `$n` integers:

```perl
use feature qw{ fc postderef say signatures state switch };
no warnings qw{ experimental };

sub return_permutation ( $n, $k ) {
    $n = int $n;
    $k = int $k;
    croak 'n < 1' unless $n >= 1;
    croak 'k < 1' unless $k >= 1;
    my $src->@* = 1 .. $n;
    my @permutations = permute_array($src);
    my @output;

    if ( $permutations[ $k - 1 ] ) {
        push @output, $permutations[ $k - 1 ]->@*;
    }

    return wantarray ? @output : \@output;
}
```

The recursive [D&C](https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm) `permute_array` does the hard work, however:

```perl
sub permute_array ( $array ) {
    return $array if scalar $array->@* == 1;
    my @response = map {
        my $i        = $_;
        my $d        = $array->[$i];
        my $copy->@* = $array->@*;
        splice $copy->@*, $i, 1;
        my @out = map { unshift $_->@*, $d; $_ } permute_array($copy);
        @out
    } 0 .. scalar $array->@* - 1;
    return @response;
}
```

First, if you're not already using post-deref syntax, let me highlight what I think one of the nice things about it is: making a shallow copy of an array ref. `my $copy->@* = $array->@*` is compact, and (provided you've seen `->@*` before) neatly describes the intent of the code.

Dave's code permutes the array in order by doing a depth-first traversal, calling `permute_array` on smaller subsets of the elements. This is essentially Heap's algorithm in more idiomatic Perl.

**Blog** › [Permutations and Conjectures](https://jacoby.github.io/2020/03/30/permutations-and-conjectures.html)

## Duncan C. White {#duncan-c-white1}

[Duncan C. White's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/duncan-c-white/perl/ch-1.pl) starts with the following fun fact:

```perl
use Function::Parameters;

fun fact( $n ) {
    my $result = 1;
    $result *= $_ for 1..$n;
    return $result;
}
```

This fun `fun fact` factorial function fairly frugally fences fed-in figures. To all of the non-native (and native) English speakers out there, I sincerely apologize, but I couldn't resist. Please see [Andrezgz](#andrezgz1)'s solution for a more direct explanation.

The `nthperm` function recursively finds the `$n`th permutation of a string:

```perl
fun nthperm( $permno, $alldigits, $n, $nperms ) {
    if ( $n == 1 ) {
        return substr( $alldigits, $permno, 1 );
    }
    my $w = $nperms / $n;

    my $firstdigit = substr( $alldigits, int( $permno / $w ), 1 );
    my $permstr    = $firstdigit;
    $alldigits =~ s/$firstdigit//;
    $permstr .= nthperm( $permno % $w, $alldigits, $n - 1, $nperms / $n );
    return $permstr;
}
```

## E. Choroba {#e-choroba1}

[E. Choroba's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/e-choroba/perl/ch-1.pl) uses recent [`List::Util`](https://metacpan.org/pod/List::Util)'s `product` as an easy factorial:

```perl
my $factorial = product(1 .. @n);
```

The recursive D&C `perm_recurse` sub finds the `$k`th permutation of `@n`:

```perl
use List::Util qw{ product };

sub perm_recurse {
    my ($k, @n) = @_;
    return "" unless @n;

    my $factorial = product(1 .. @n);
    my $step = $factorial / @n;

    my $select = int($k / $step);
    --$select unless $k % $step;

    return $n[$select]
        . perm_recurse(($k % $step) || $step,
                       @n[ grep $_ != $select, 0 .. $#n ])
}

sub kth_perm { perm_recurse($_[1], 1 .. $_[0]) }

my ($n, $k) = @ARGV;
say kth_perm($n, $k);
```

**Blog** › [Kth Permutation Sequence + Collatz Conjecture](http://blogs.perl.org/users/e_choroba/2020/04/perl-weekly-challenge-054-kth-permutation-sequence-collatz-conjecture.html)

## Jaldhar H. Vyas {#jaldhar-h-vyas1}

[Jaldhar H. Vyas's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/jaldhar-h-vyas/perl/ch-1.pl) is directly from [`perlfaq4`](https://learn.perl.org/faq/perlfaq4.html#How-do-I-permute-N-elements-of-a-list), so there is no original code to review. (Please remember to attribute your sources.)

## Javier Luque {#javier-luque1}

[Javier Luque's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/javier-luque/perl/ch-1.pl) uses [`Algorithm::Combinatorics`](https://metacpan.org/pod/Algorithm::Combinatorics) to generate permutations:

```perl
use Algorithm::Combinatorics qw(permutations);

my $n = $ARGV[0];
my $k = $ARGV[1];

my @data = 1 .. $n;
my @all_permutations = permutations(\@data);
say join '', @{$all_permutations[$k - 1]};
```

**Blog** › [054 – Perl Weekly Challenge](https://perlchallenges.wordpress.com/2020/03/30/perl-weekly-challenge-054/)

## Laurent Rosenfeld {#laurent-rosenfeld1}

[Laurent Rosenfeld's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/laurent-rosenfeld/perl/ch-1.pl) uses a recursive D&C `permute` sub:

```perl
my @start = 1..$n;
permute("", @start);

sub permute {
    my ($str, @vals) = @_;
    if (scalar @vals == 0) {
        say $str and exit unless --$k;
        return;
    }
    permute("$str " . $vals[$_], @vals[0..$_-1], @vals[$_+1..$#vals]) for 0..$#vals;
}
```

**Blog** › [k-th Permutation Sequence and the Collatz Conjecture](http://blogs.perl.org/users/laurent_r/2020/04/perl-weekly-challenge-54-k-th-permutation-sequence-and-the-collatz-conjecture.html)

## Lubos Kolouch {#lubos-kolouch1}

[Lubos Kolouch's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/lubos-kolouch/perl/ch-1.pl) uses [`Algorithm::Permute`](https://metacpan.org/pod/Algorithm::Permute) to iterate all permutations until the `$k`th permutation is reached:

```perl
use Algorithm::Permute;

sub get_nth_permutations {
    my ( $n, $k ) = @_;
    my @numbers = ( 1 .. $n );
    my $p = Algorithm::Permute->new(\@numbers, $n);

    my @all_perms;
    while (my @res = $p->next) {
        push @all_perms, join("", @res);
    }
    my @sorted_perms = sort @all_perms;

    return $sorted_perms[$k-1];
}

say(get_nth_permutations( 3, 4 ));
```

Lubos keeps all permutations seen so far in `@all_perms`, and then sorts them once `$k` have been seen, as the A::P documentation states the order of permutations is not guaranteed.

## Mohammad S Anwar {#mohammad-anwar1}

[Mohammad S Anwar's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/mohammad-anwar/perl/ch-1.pl) uses [`Algorithm::Combinatorics`](https://metacpan.org/pod/Algorithm::Combinatorics) to generate permutations:

```perl
use List::Util qw(reduce);
use Algorithm::Combinatorics qw(permutations);

my $n = $ARGV[0];
my $k = $ARGV[1];

die "ERROR: Missing digit count.\n"        unless defined $n;
die "ERROR: Missing sequence number.\n"    unless defined $k;
die "ERROR: Invalid digit count $n.\n"     unless $n > 0;
die "ERROR: Invalid sequence number $k.\n" unless $k > 0 && ($k <= reduce { $a * $b } 1 .. $n);

print [ map { join "", @$_ } permutations([ 1..$n ]) ]->[$k-1];
```

I like the use of `reduce` to calculate the factorial inline with the error checking. After all, if you know you'll only need something once, there's often no reason to factor it out.

**Blog** › [BLOG: The Weekly Challenge #054](https://perlweeklychallenge.org/blog/weekly-challenge-054)

## Peter Meszaros {#peter-meszaros1}

**Peter Meszaros** is submitting to the Challenge for the first time this week! Please join me in welcoming him.

[Peter Meszaros's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/peter-meszaros/perl/ch-1.pl) uses a D&C recursive solution to generate permutations in order:

```perl
sub perm {
    state $n = 0;
    my ($k, $perm, @set) = @_;
    unless (@set) {
        ++$n;
        printf "%2d %s\n", $n, $perm if $k == $n;
        return $k == $n;
    }
    foreach (0..$#set) {
        return 1 if perm($k, $perm.$set[$_], @set[0..$_-1], @set[$_+1..$#set]);
    }
}
```

Usage is simple:

```perl
my @inp = 1..$ARGV[0];
perm($k, '', @inp);
```

For Peter's first submission, I am impressed! I hope we'll see a lot more from Peter in the weeks ahead.

## Roger Bell West {#roger-bell-west1}

[Roger Bell West's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/roger-bell-west/perl/ch-1.pl) generates permutations in place:

```perl
my ( $n, $k ) = @ARGV;

my @f;
my $b = 1;
my $v = 1;
while ( ( scalar @f == 0 ) || $f[-1] < $k ) {
    push @f, $v;
    $v *= $b;
    $b++;
}

my $nk = $k - 1;
my @n;
for ( my $i = $#f ; $i >= 0 ; $i-- ) {
    unshift @n, $nk / $f[$i];
    $nk -= $f[$i] * $n[0];
}

my @i = ( 1 .. $n );
my @o;
for ( my $i = $n ; $i >= 1 ; $i-- ) {
    my $f = $n[ $i - 1 ] || 0;
    push @o, splice @i, $f, 1;
}
```

I like the sly use of the conditional operator to sneak in commas when the numbers go above two digits:

```perl
print join( $n > 9 ? ',' : '', @o ), "\n";
```

## Ruben Westerberg {#ruben-westerberg1}

[Ruben Westerberg's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/ruben-westerberg/perl/ch-1.pl) also provides a `factorial` sub with `List::Util`'s `reduce`, to validate `$k`. The `combinations` sub generates and returns all permutations:

```perl
sub combinations {
    my @combinations=();
    my ($data,$size)=@_;
    my @indexes=(0) x ($size+1);;
    my $i=0;
    until ($indexes[$size]) {
        my $count=List::Util::uniq(@indexes[0..$size-1]);
        push @combinations, [@$data[@indexes[0..$size-1]]] if $count == $size;
        $indexes[0]++;
        for (0..$size-1) {
            if ($indexes[$_] != 0 and 0 == ($indexes[$_] % @$data)) {
                $indexes[$_]=0;
                $indexes[$_+1]++;
            }
        }
    }
    @combinations;
}
```

The permutations require sorting. After that, the `$k`th element is printed:

```perl
my @perm=sort {$a > $b} map {join "", @$_} combinations([1..$n], $n);
say $perm[$k-1];
```

## Ryan Thompson {#ryan-thompson1}

[My solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/ryan-thompson/perl/ch-1.pl) uses [`Algorithm::Combinatorics`](https://metacpan.org/pod/Algorithm::Combinatorics), which provides a nice iterator so I can stop on the `$k`th permutation:

```perl
my $it = permutations([1..$n], $n);
$it->next for 1..$k-1;
say join '', @{ $it->next };
```

The array version is quite compact, if slower, especially as the size increases:

```perl
say join '', @{ ( permutations([1..$n], $n) )[$k-1] };
```

**Blog** › [kth Permutation](http://www.ry.ca/2020/04/kth-permutation/)

## Saif Ahmed {#saiftynet1}

[Saif Ahmed's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/saiftynet/perl/ch-1.pl) provides a flexible `kPermutation` sub that supports three different modes of operation:

```perl
print "\nGetting all permutations\n";
print join( " ", @$_ ), "\n" foreach kPermutation(3);
print "\nGetting kth permutation\n";
print join( " ", @$_ ), "\n" foreach kPermutation( 3, 4 );
print "\nGetting selected permutations\n";
print join( " ", @$_ ), "\n" foreach kPermutation( 3, [ 5, 2, 3 ] );
```

Here is the `kPermutation` sub, as well as the `permute` sub which handles the actual recursive permutation building:

```perl
sub kPermutation {
    my $n = shift;
    our $k    = shift // "all";
    our @list = ();
    permute( [ 1 .. $n ], 0, $n - 1 );

    if ( ref $k eq "ARRAY" ) {
        @list = @list[@$k];
    }
    return @list;

    # A recursive permutation function.
    # takes an array ref, start for swap and end of swap
    sub permute {
        my ( $str, $l, $r ) = @_;
        my @perm = @$str;    # deref the passed array
        if (    ( $l == $r )
            and ( ( ref $k ) or ( $k eq "all" ) or ( --$k == 0 ) ) )
        {
            push @list, [@perm];
        } # base case, populates the entire list with permutations or just kth one
        else {
            for my $idx ( $l .. $r ) {
                ( $perm[$l], $perm[$idx] ) = ( $perm[$idx], $perm[$l] );  # swap
                permute( [@perm], $l + 1, $r );    # recurse
                ( $perm[$l], $perm[$idx] ) =
                  ( $perm[$idx], $perm[$l] );      # backtrack
            }
        }
    }
}
```

## User Person {#user-person1}

[User Person's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/user-person/perl/ch-1.pl) uses [`List::Permutor`](https://metacpan.org/pod/List::Permutor) to get an iterator that they can trigger `$k` times to get the correct permutation. It works well, but it's worth pointing out that the solution generates sequences from `1..$n-1`, which might be initially confusing. Here is the code:

```perl
use List::Permutor;

my @sequence = 1 .. $n-1;
my $perm = new List::Permutor @sequence;
my $kth = 1;
my $failure++;

LOOP:
while (my @set = $perm->next) {
    if ( $kth++ == $k) {
        print @set, "\n";
        $failure--;
        last LOOP;
    }
}

print "There is no '$k'-th number in the '$n sequence'.\n" if $failure;
```

## Wanderdoc {#wanderdoc1}

[Wanderdoc's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/wanderdoc/perl/ch-1.pl) uses [`Algorithm::Combinatorics`](https://metacpan.org/pod/Algorithm::Combinatorics)'s `permutations` in the iterative mode, to generate permutations:

```perl
use Algorithm::Combinatorics qw(permutations);

my $iter = permutations([1 .. $options{n}]);
my $counter = 0;
while (my $c = $iter->next) {

     $counter++;
     if ( $counter == $options{k} ) {
          print join(' ', @$c), $/;
          last;
     }
}
print "Do not have so many permutations.\n" if $counter < $options{k};
```

## Yet Ebreo {#yet-ebreo1}

[Yet Ebreo's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/yet-ebreo/perl/ch-1.pl) provides a recursive `generate`, which fills the global `@r` with permutations:

```perl
my @r;
my $n = $ARGV[0] || 3;
my $k = $ARGV[1] || 4;

# Definitely not optimized, can only easily handle $n = 9,
# larger n should work too but would take some time
sub generate {
    my ($A,$k) = @_;
    if ($k == 1) {
        push @r, join "", @{$A};
    } else {

        for my $i (0..$k-1) {
            generate(\@{$A},$k-1);

            if ($i <= $k ) {
                my $h = $A->[$k-1];
                my $j = $k % 2 ? 0: $i;

                #swap values
                ($A->[$j],$A->[$k-1]) = ($A->[$k-1],$A->[$j]);
            }
        }
    }
}
```

The results are then sorted, and the `$k`th permutation is printed:

```perl
my @x = 1..$n;
generate(\@x,$n);
@r = sort @r;
say $r[$k-1];
```

***

***

# Task #2 - Collatz Conjecture {#task2}

It is thought that the following sequence will always reach 1:

 * `$n = $n / 2` when `$n` is even
 * `$n = 3*$n + 1` when `$n` is odd

For example, if we start at 23, we get the following sequence:

23 → 70 → 35 → 106 → 53 → 160 → 80 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

Write a function that finds the Collatz sequence for any positive integer. Notice how the sequence itself may go far above the original starting number.

**Extra Credit**

Have your script calculate the sequence length for all starting numbers up to 1000000 (1e6), and output the starting number and sequence length for the longest 20 sequences.

***

Since I contributed this task, I can give you a glimpse into my thought process. First, you are asked to write a function to find a Collatz sequence for any positive integer. Supposing you named that function `collatz()`, you could solve the Extra Credit portion by simply looping from 1..1e6 and running `collatz()`. A decent brute force implementation will run in under a minute, but my hope was that some of you would strive for an even faster solution. I was not disappointed.

It was a real joy to see all of the solutions, and all of the interesting ways people reasoned their way through the extra credit part. Even those of you who did not do the extra credit part managed to provide differing implementations of the Collatz sequence (iterative, recursive, string return, array return, etc.)

## Solution Types

### 1. No Extra Credit

Several people opted out of doing the extra credit part, and just focused on providing a great Collatz sequence generator. For the most part, this looks like a `while` loop that either divides by two or multiplies by 3 and adds 1, but people differed on how they structured the conditional, and how they provided the result.

### 2. Extra Credit › Brute Force

A simple way to solve the Extra Credit is to simply loop from 1..1e6, then loop to find the sequence (and hence its length), as in #1, above, and print the top 20. On my machine, with a decently-optimized `collatz`, it took 38 seconds to calculate the length of the first million Collatz sequences. Printing the top 20 by storing all one million lengths and `sort`ing that, adds 2-3 seconds to the run time.

### 3. Extra Credit › Memoization

The key optimization to make with the extra credit part is [memoization](https://en.wikipedia.org/wiki/Memoization). Since all Collatz sequences (except for Collatz(1) of course) contain other Collatz sequences, we can avoid the vast majority of the looping by simply keeping a record of the length of each sequence seen so far. Let's say we have `$collatz[$n]` mean "The length of the Collatz sequence starting at `$n`". Then if we have already stored `$collatz[1..22]`, when we get to Collatz(23), this happens:

 * Steps = 0, Collatz(23) › 23 odd, so Collatz(23) = 3*23 + 1 = 70
 * Steps = 1, Collatz(71) › 70 even, so Collatz(70) = 70 / 2 = 35
 * Steps = 2, Collatz(35) › 35 odd, so Collatz(35) = 3*35 + 1 = 106
 * Steps = 3, Collatz(106) › 106 even, so Collatz(106) = 106 / 2 = 53
 * Steps = 4, Collatz(53) › 53 odd, so Collatz(53) = 3*53 / 2 = 160
 * Steps = 5, Collatz(160) › 160 even, so Collatz(160) = 160 / 2 = 80
 * Steps = 6, Collatz(80) › 80 even, so Collatz(80) = 80 / 2 = 40
 * Steps = 7, Collatz(40) › 40 even, so Collatz(40) = 40 / 2 = 20
 * Steps = 8, `$collatz[20] = 8`. Steps = 8 + 7 = 15

As soon as the sequence landed on a known number (20), we got a cache hit that saved us 8 out of 15 iterations. As the starting number increases, however, the average savings is much greater. By 100000, the savings is 85.6%, by 500000, it is 87.6%, and by one million, 88.2%.

Further optimizations (such as avoiding function call overhead) are possible, but memoization gets you most of the way there.

### 4. Optimizing the Top 20

Once you get a well-optimized memoized solution, you would find that actually finding the top 20 becomes the bottleneck. For instance, in my solution, the million iterations took 1.5 seconds, but sorting the results took an extra 3 seconds! There are a few options for optimizing this. Choroba implemented his own heap, while I and a few others used the [insertion algorithm](https://en.wikipedia.org/wiki/Insertion_sort).

## Stats

* Number of submissions: **25**

* Total SLOC: **1424**

* Average SLOC: **56**

## Alicia Bielsa {#alicia-bielsa2}

[Alicia Bielsa's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/alicia-bielsa/perl/ch-2.pl) uses memoization, but stores every sequence (not just the length) in `%hSequences`:

```perl
my %hSequences = ();
for my $i ( 1 .. 1000000 ) {
    my @aSequence = findCollatzSequence($i);
    push( @{ $hSequences{$i} }, @aSequence );
}
```

Here is the sequence generator. Note the `if exists` check, to use the cache:

```perl
sub findCollatzSequence {
    my $currentPoint = shift;
    my $endPoint     = 1;
    my @aSequence    = ();
    while ( $currentPoint != $endPoint ) {
        if ( exists( $hSequences{$currentPoint} ) ) {
            push( @aSequence, @{ $hSequences{$currentPoint} } );
            return @aSequence;
        }
        push( @aSequence, $currentPoint );
        if ( $currentPoint % 2 == 0 ) {
            $currentPoint = $currentPoint / 2;
        }
        else {
            $currentPoint = $currentPoint * 3 + 1;
        }
    }
    push( @aSequence, $endPoint );
    return @aSequence;
}
```

Finally, the sequence lengths are printed as follows:

```perl
my $count = 20;
foreach my $number (
    sort { scalar( @{ $hSequences{$b} } ) <=> scalar( @{ $hSequences{$a} } ) }
    keys %hSequences )
{
    print "$number\t" . scalar( @{ $hSequences{$number} } ) . "\n";
    last if ( $count == 0 );
    $count--;
}
```

This script ran my 2GB virtual machine out of memory. (131.4 million numbers with SV and other overhead adds up!)

## Andrezgz {#andrezgz2}

[Andrezgz's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/andrezgz/perl/ch-2.pl) first provides `collatz_seq` which returns a string of the Collatz sequence for the given number:

```perl
sub collatz_seq {
    my $n = shift;
    my $s;
    while ($n != 1) {
        $s .= $n . ' -> ';
        if ($n % 2 == 0) { $n = $n / 2;   }
        else             { $n = 3*$n + 1; }
    }
    return $s . 1;
}
```

Andrezgz then tackles the extra credit challenge by looping in reverse from
1000000 to 1, to minimize the number of `sort`s required on the `@long_seq`
array:

```perl
sub top_seq {

    my @long_seq;
    my $min = 0;

    for (reverse 1 .. 1_000_000) {
        my $l = seq_length($_);

        # Add sequence
        next if ($l < $min);
        push @long_seq, {'n' => $_, 'l' => $l};
        @long_seq = sort { $a->{l} <=> $b->{l} } @long_seq;

        # Adjust minimum sequence
        next if (@long_seq <= TOP_SEQ);
        shift @long_seq;
        $min = $long_seq[0]->{l};

    }

    print $_->{n} . ': ' . $_->{l}.$/ for (reverse @long_seq);

    return;
}
```

The following `seq_length` sub calculates the sequence length for a given
starting number:

```perl
sub seq_length {
    my $n = shift;
    my $l = 0;
    while ($n != 1) {
        ++$l;
        if ($n % 2 == 0) { $n = $n / 2;   }
        else             { $n = 3*$n + 1; }
    }
    return ++$l;
}
```

## Athanasius {#athanasius2}

[Athanasius's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/athanasius/perl/ch-2.pl) uses [`List::Priority`](https://metacpan.org/pod/List::Priority) to maintain the top 20 list more efficiently. His script supports both single sequences, and the extra credit top 20. It also includes some timing code to display its own run time, which for me was 9.6 seconds.

Here is the main loop that handles the Top 20:

```perl
sub find_longest_seqs {
    my $longest_seqs = List::Priority->new( capacity => $MAX_TERMS );
    $longest_seqs->insert( 1, 1 );

    for my $start ( 2 .. $MAX_N ) {
        my $terms = count_terms($start);
        $longest_seqs->insert( $terms, $start );
    }

    my @longest_seqs;

    while ( $longest_seqs->size > 0 ) {
        my $seq_len = $longest_seqs->highest_priority;
        my $start   = $longest_seqs->pop;

        push @longest_seqs, [ $start, $seq_len ];
    }

    return \@longest_seqs;
}
```

The Collatz sequence lengths are memoized, recursively, in the following block:

```perl
{
    my %chains;

    BEGIN {
        $chains{1} = 1;
    }

    sub count_terms {
        my ($n) = @_;

        return $chains{$n} if exists $chains{$n};

        return $chains{$n} = 1 + count_terms( $n / 2 ) unless $n % 2;
        return $chains{$n} = 1 + count_terms( $n * 3 + 1 );
    }
}
```

## Cheok-Yin Fung {#cheok-yin-fung2}

[Cheok-Yin Fung's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/cheok-yin-fung/perl/ch-2.pl), when supplied instead with an integer on the commandline, calculates a single sequence with the following code:

```perl
if ($ARGV[0] != undef ) {
    my $mazed = $ARGV[0];
    print $mazed, " ";
    while ($mazed != 1) {
            if ($mazed % 2 == 1) {
                $mazed = $mazed*3+1;
            } else {
                $mazed = $mazed/2;
            }
            print $mazed, " ";
    }
} else {
```

The extra credit code is extensive, and contains a number of small optimizations, such as pre-seeding the sequence length table with powers of two, which are easy to calculate:

```perl
foreach (1..27) {
    $seqlength[2**$_] = 1+$_;
    $SeqlengthLargeInt{2**$_} = 1+$_;
}
```

By itself, this optimization would give a ~4.3% savings in the total sequence length for the first million starting integers. Once memoization is added, however, this savings would be greatly reduced.

Cheok Yin maintains two data structures: `@seqlen` maps array index to Collatz sequence length, and is used for smaller integers, under `$MAX_U`. `%SeqlengthLargeInt` performs a similar task for large integers. I assume Cheok Yin uses a hash after `$MAX_U` to save memory.

```perl
#space allocation
my @seqlength;
my %SeqlengthLargeInt = { 1 => 1 };

$seqlength[1] = 1;
```

The following sub takes a partial sequence and updates the `@seqlength` array:

```perl
sub traceSmallint {
    my @route = reverse @_;

    my $h = shift @route;
    my $ref;
    foreach $ref (@route) {
        $seqlength[$ref] = 1 + $seqlength[$h];
        $h = $ref;
    }
    $SeqlengthLargeInt{ $route[0] } = $seqlength[ $route[0] ];
}
```

Lastly, here is the main code that calculates the Extra Credit sequences. Cheok Yin does not calculate the top twenty; instead, every sequence length is output to a million-line log file:

```perl
my $MAX_U = 333334;

open LOG, ">", "ch-2_logfile";
foreach ( $TARGET_BEGIN .. $TARGET_END ) {
    my @temp  = ();
    my @tempB = ();
    push @temp, $_;
    my $mazed = $_;
    while (
        $mazed < $MAX_U
        and not( defined( $SeqlengthLargeInt{$mazed} ) )

      )
    {
        if ( $mazed % 2 == 1 ) {
            $mazed = $mazed * 3 + 1;
            push @temp, $mazed;
        }
        else {
            $mazed = $mazed / 2;
            push @temp, $mazed;
        }
    }
    if ( $mazed < $MAX_U ) {
        traceSmallint(@temp);
    }
    else {
        push @tempB, $mazed;
        while ( not( defined( $SeqlengthLargeInt{$mazed} ) ) ) {
            if ( $mazed % 2 == 1 ) {
                $mazed = $mazed * 3 + 1;
                push @tempB, $mazed;
            }
            else {
                $mazed = $mazed / 2;
                push @tempB, $mazed;
            }
        }
        $seqlength[$_] = $#tempB + $#temp + $SeqlengthLargeInt{$mazed};
    }

    print LOG $seqlength[$_], "\n";

}

close LOG;
```

Note the two distinct cases for large and small numbers. I would be curious to know how much of a difference this optimization made.

Cheok Yin's blog this week is another great story of the journey Cheok Yin went on in the completion of this task.

**Blog** › [CY's take on PWC#054](http://blogs.perl.org/users/c_y_fung/2020/04/cys-take-on-pwc054.html)

## Colin Crain {#colin-crain2}

[Colin Crain's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/colin-crain/perl/ch-2.pl), always with the excellent commentary, ponders the following:

```perl
#         method: since the conjecture is that _all_ such sequences converge, it
#             seems safe to say that the it's been checked for a lot of numbers.
```

Indeed, the Collatz sequence has been calculated for starting numbers exceeding 10<sup>17</sup>, and in fact may be even higher by now. The longest known sequence (that I could find reference to) is for the number 93,571,393,692,802,302, clocking in at 2091 steps, which was easy and fun to verify with `bigint`. It's a sure bet that anything smaller than that will eventually reach 1.

Here's Colin's `make_collatz_sequence`, which returns an array ref of the Collatz sequence for the given starting number:

```perl
sub make_collatz_sequence {
    my $prev = shift;
    my @seq = ($prev);
    my $next;

    while ($prev != 1) {
        $next = next_collatz($prev);
        push @seq, $next;
        $prev = $next;
    }

    return \@seq;
}

sub next_collatz {
    $_[0] % 2 == 0  ?   $_[0] / 2
                    :   3 * $_[0] + 1;
}
```

For the Extra Credit portion, Colin gives us the following calling code:

```perl
my $data = {  seq_lengths    => {},
              highest_number => 0,
              highest_value  => 0   };

get_collatz_metadata($data);

## display length totals
my $count;
my @sorted = sort { $data->{seq_lengths}->{$b} <=> $data->{seq_lengths}->{$a} || $a <=> $b } keys $data->{seq_lengths}->%*;
say '-' x 35;
say ' count   number   sequence length';
say '-------+--------+------------------';
printf "  %2d     %6d %6d\n", ++$count, $_, $data->{seq_lengths}->{$_} for @sorted[0..19];

## display max number found
say '-' x 35;
say "largest value found was ", $data->{highest_value};
say "for number ", $data->{highest_number};
```

The `get_collatz_metadata` does the hard work of looping through the first million counting numbers, memoizing into `$data->{seq_lengths}`:

```perl
sub get_collatz_metadata {
    my $data = shift;

    for my $number (1..1000000) {
        my $prev = $number;
        my $len  = 1;
        my $next;

        while ($prev != 1) {
            $next = $prev % 2 == 0  ?   $prev / 2
                                    :   3 * $prev + 1;
            $prev = $next;
            if ($next > $data->{highest_value}) {
                $data->{highest_number} = $number;
                $data->{highest_value}  = $next;
            }
            $len++;
        }
        $data->{seq_lengths}->{$number} = $len;
    }
}
```

## Cristina Heredia {#cristian-heredia2}

[Cristina Heredia's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/cristian-heredia/perl/ch-2.pl) gives the option to find a single Collatz sequence, or solve the extra credit problem. Here is the recursive `findCollatz`:

```perl
sub findCollatz {

    if ($number == 1) {
        if ($option == 1){
            print "The Collatz sequence for $origin is:\n$result\n";
        }
        else {
            countResult();
        }
    }
    elsif ($number % 2 == 0) {
        $number = $number / 2;
        $result = $result." - $number";
        findCollatz();
    }
    else {
        $number = 3*$number + 1;
        $result = $result." - $number";
        findCollatz();
    }
}
```

The `extraCredit` sub solves the extra credit part, by calling `findCollatz`:

```perl
sub extraCredit {

    $sizes{1} = 1;
    foreach (my $i = $minimum; $i <= $maximum; $i++) {
        $result = '';
        $number = $i;
        findCollatz();
        $sizes{$i} = $length;
    }

    sortHash();

}
```

Helper subs:

```perl
sub countResult {
    @array = split(' - ', $result);
    $length = @array;
}

sub sortHash {
    my $count = 0;

    foreach my $key (sort { $sizes{$b} <=> $sizes{$a} } keys %sizes) {
        print "The starting number is: $key and the length is:$sizes{$key}\n";
        $count++;
        if ($count == $numberToShow) {
            last;
        }
    }
}
```

## Dave Jacoby {#dave-jacoby2}

[Dave Jacoby's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/dave-jacoby/perl/ch-2.pl) solves the base task with the `collatz` recursive sub:

```perl
use feature qw{ postderef say signatures state switch };
no warnings qw{ experimental recursion };

sub collatz ( $n ) {
    $n = int $n;
    croak if $n < 1;
    my @sec;
    if ( $n == 1 ) {
        push @sec, 1;
    }
    elsif ( $n % 2 == 1 ) {    #odd
        my $o = ( 3 * $n ) + 1;
        push @sec, $n, collatz($o);
    }
    elsif ( $n % 2 == 0 ) {    #even
        my $o = $n / 2;
        push @sec, $n, collatz($o);
    }
    return wantarray ? @sec : \@sec;
}
```

**Blog** › [Permutations and Conjectures](https://jacoby.github.io/2020/03/30/permutations-and-conjectures.html)

## Duncan C. White {#duncan-c-white2}

[Duncan C. White's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/duncan-c-white/perl/ch-2.pl) gives us a nice and concise `collatz` function:

```perl
use Function::Parameters;

fun collatz( $n ) {
    my @seq = ( $n );
    while( $n != 1 ) {
        if( $n%2==0 ) { $n = $n / 2 } else { $n = 3*$n + 1 }
        push @seq, $n;
    }
    return @seq;
}
```

Here is Duncan's extra credit code. Note the `-$n` in the loop is because his script will run `collatz` on a single integer if the argument (`$n`) is positive, or all integers `1..-$n` if `$n` is negative.

```perl
my @longest20;    # array of [ len, sequence ]

foreach my $x (1..-$n) {
    my @seq = collatz( $x );
    my $len = @seq;
    push @longest20, [ $len, @seq ];
    @longest20 = sort { $b->[0] <=> $a->[0] } @longest20;
    $#longest20 = 19 if @longest20>20;
    #say "x=$x longest: ", join(',',@$_) for @longest20;
}

say "longest 20 collatz sequences:";
foreach my $longest (@longest20) {
    my( $len, @seq ) = @$longest;
    say "len=$len: ", join(',',@seq);
}
```

## E. Choroba {#e-choroba2}

[E. Choroba's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/e-choroba/perl/ch-2.pl) solves the base and extra credit, concisely:

```perl
sub collatz {
    my ($start) = @_;
    my @seq = $start;
    push @seq, ($seq[-1] / 2, 3 * $seq[-1] + 1)[$seq[-1] % 2]
        while $seq[-1] != 1;
    return @seq
}

my @sizes;
push @sizes, [$_, scalar collatz($_)] for 1 .. 1e6;
say "@$_" for (sort { $b->[1] <=> $a->[1] } @sizes)[0 .. 19];
```

It is relatively quick for a brute force implementation at ~58 seconds on my VM. Choroba mentions dynamic programming in his blog, but did not try it.

### Second solution: `My::Heap`

Choroba also provided a [second solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/e-choroba/perl/ch-2b.pl) that includes a `My::Heap` class to maintain the top 20. He found that it was even slower:

```perl
my $h = 'My::Heap'->new(20);

$h->add($_, scalar collatz($_)) for 1 .. 1e6;
```

Choroba's `add` method and its dependencies looks like this:

```perl
sub add {
    my ($self, $key, $value) = @_;
    push @{ $self->{heap} }, [$key, $value];
    $self->_up($#{ $self->{heap} });
    $self->extract_top if @{ $self->{heap} } > $self->{max_size};
}

sub extract_top {
    my ($self) = @_;
    return unless @{ $self->{heap} };
    my $top = shift @{ $self->{heap} };
    unshift @{ $self->{heap} }, pop @{ $self->{heap} };
    $self->_down(0);
    return @$top
}

sub _up {
    my ($self, $idx) = @_;
    return if 0 == $idx;

    my $parent = int(($idx + 1) / 2) - 1;
    if ($self->{heap}[$idx][VALUE] < $self->{heap}[$parent][VALUE]) {
        @{ $self->{heap} }[$idx, $parent]
            = @{ $self->{heap} }[$parent, $idx];
        $self->_up($parent);
    }
}

sub _down {
    my ($self, $idx) = @_;
    return if $idx * 2 + 1  > $#{ $self->{heap} };

    my @ch_indices = ($idx * 2 + 1, $idx * 2 + 2);
    $ch_indices[-1] = $ch_indices[0] if $idx * 2 + 2 > $#{ $self->{heap} };
    my $ch_idx = $ch_indices[ $self->{heap}[$ch_indices[0] ][VALUE]
                              > $self->{heap}[ $ch_indices[1] ][VALUE] ];
    if ($self->{heap}[$idx][VALUE] > $self->{heap}[$ch_idx][VALUE]) {
        @{ $self->{heap} }[$idx, $ch_idx]
            = @{ $self->{heap} }[$ch_idx, $idx];
        $self->_down($ch_idx);
    }
}
```

Since `$h->add()` is called for every Collatz sequence, and `add` always triggers a rather complex sequence of method calls, array manipulation, and list creation, this imposes a significant penalty on each iteration. `add()` really only needs to be called when the top 20 would change.

Thus, the efficiency penalty could be mostly avoided with a bit of bookkeeping by remembering the minimum value in the heap and only calling `$h->add()` if it would fit in the heap (or calling a `find_min` method right at the top of add, if you want to stick with traditional heap semantics and encapsulation).

I still like this idea!

**Blog** › [Kth Permutation Sequence + Collatz Conjecture](http://blogs.perl.org/users/e_choroba/2020/04/perl-weekly-challenge-054-kth-permutation-sequence-collatz-conjecture.html)

## Jaldhar H. Vyas {#jaldhar-h-vyas2}

[Jaldhar H. Vyas's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/jaldhar-h-vyas/perl/ch-2.pl) gives us the following iterative `collatzSequence` sub:

```perl
sub collatzSequence {
    my ($n) = @_;
    my @sequence = ($n);

    while ($n != 1) {
        $n = ($n % 2) ? (3 * $n + 1) : ($n / 2);
        push @sequence, $n;
    }

    return @sequence;
}
```

That sub is then used to find the 20 numbers with the longest sequences:

```perl
my $maxlength = 0;
my @longest = ();

for my $n (1 .. 1e6) {
    my $length = scalar collatzSequence($n);

    if ($length >= $maxlength) {
        $maxlength = (scalar @longest) ? $longest[-1]->[1] : $length;
        push @longest, [$n, $length];

        @longest = sort {$b->[1] <=> $a->[1] } @longest;
        if (scalar @longest > 20) {
            pop @longest;
        }
    }
}

for my $long (@longest) {
    say $long->[0], ': ', $long->[1];
}
```

Jaldhar `sort`s the `@longest` array every time a sequence is inserted, and then `pop`s off an element if the array has more than 20 elements. Jaldhar's code runs in 50 seconds, which is not bad for a brute force implementation.

## Javier Luque {#javier-luque2}

[Javier Luque's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/javier-luque/perl/ch-2.pl) cuts to the chase with a `collatz` sub that returns the sequence length:

```perl
sub collatz {
    my $n = shift;
    my $length = 0;

    while ($n != 1) {
        $length++;

        $n = ($n % 2) ?
            3 * $n + 1  :
            $n / 2;
    }

    return $length;
}
```

He then takes a brute force approach to find the 22 (not 20) longest sequences, making his output at least 10% better, by my calculation!

```perl
my %lengths;
for my $i (1 .. 1_000_000) {
    my $length = collatz($i);
    $lengths{$i} = $length
        if ($length > 440);
}

# Grab the 22 longest numbers
my @keys = (
    sort {
        $lengths{$b} <=> $lengths{$a}
    } keys %lengths
)[0 .. 21] ;

for my $i ( @keys ) {
    say "$i : Length " . $lengths{$i};
}
```

Javier's code runs in 37 seconds, which is good for brute force solution.

**Blog** › [054 – Perl Weekly Challenge](https://perlchallenges.wordpress.com/2020/03/30/perl-weekly-challenge-054/)

## Laurent Rosenfeld {#laurent-rosenfeld2}

[Laurent Rosenfeld's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/laurent-rosenfeld/perl/ch-2.pl) uses memoization, but stores the entire sequence, not just the length, so it unfortunately ran my 2GB sandbox VM out of memory after 27 seconds.

```perl
use constant MAX => 300000;

my %cache;

sub collatz_seq {
    my $input = shift;
    my $n = $input;
    my @result;
    while ($n != 1) {
        if (exists $cache{$n}) {
            push @result, @{$cache{$n}};
            last;
        } else {
            my $new_n = $n % 2 ? 3 * $n + 1 : $n / 2;
            push @result, $new_n;
            $cache{$n} = [$new_n, @{$cache{$new_n}}]
                if defined ($cache{$new_n}) and $n < MAX;
            $n = $new_n;
        }
    }
    $cache{$input} = [@result] if $n < MAX;
    return @result;
}

my @long_seqs;
for my $num (1..1000000) {
    my @seq = ($num, collatz_seq $num);
    push @long_seqs, [ $num, scalar @seq] if scalar @seq > 400;
}

@long_seqs = sort { $b->[1] <=> $a->[1]} @long_seqs;
say  "$_->[0]: $_->[1]" for @long_seqs[0..19];
```

**Blog** › [k-th Permutation Sequence and the Collatz Conjecture](http://blogs.perl.org/users/laurent_r/2020/04/perl-weekly-challenge-54-k-th-permutation-sequence-and-the-collatz-conjecture.html)

## Lubos Kolouch {#lubos-kolouch2}

[Lubos Kolouch's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/lubos-kolouch/perl/ch-2.pl) revolves around the `get_sequence_length` sub:

```perl
my %length_cache;

sub get_next_sequence {
    my $seq_pos = shift;

    return 0 if $seq_pos == 1;
    return 3 * $seq_pos + 1 if $seq_pos % 2 == 1;
    return int( $seq_pos / 2 );
}

sub get_sequence_length {
    my $seq_pos = shift;

    if ($seq_pos == 1) {
        $length_cache{1} = 1;
        return 1;
    }

    my $seq_length;
    my $cur_pos = $seq_pos;

    while ( $cur_pos >= 1 ) {
        if ( $length_cache{$cur_pos} ) {
            # If we have already the length cached, return it
            $seq_length += $length_cache{$cur_pos};
            last;
        }
        # otherwise increse the length and move to next step
        $seq_length++;
        $cur_pos = get_next_sequence($cur_pos);
    }
    $length_cache{$seq_pos} = $seq_length;

    return $seq_length;
}
```

The first 20 results from `%length_cache` are then sorted and displayed:

```perl
my $count;
foreach my $name (sort { $length_cache{$b} <=> $length_cache{$a} } keys %length_cache) {
    printf "%-8s %s\n", $name, $length_cache{$name};
    $count++;
    last if $count == 20;
}
```

Lubos's code runs in 9.2 seconds, thanks to the memoization. It's worth noting that the `sort` at the end takes about 3 seconds by itself, making it a candidate for optimization if more performance is needed.

## Markus Holzer {#markus-holzer2}

[Markus Holzer's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/markus-holzer/perl/ch-2.pl) also clocks in at 9.2 seconds, thanks to a similar algorithm:

```perl
my %result = (1 => 1);

for my $n ( 1..$N ) {
    my $current = 0;
    my $next    = $n;

    while (1) {
        # Dynamic programming:
        # see what you have computed so far, so you
        # don't have to compute it again
        $result{ $n } = $result{ $next } and last
            if $result{ $next };

        $next = $next % 2 == 0 ? $next / 2 : $next * 3 + 1;
        $current++;
    }

    $result{ $n } += $current;
}
```

Results sorting and printing:

```perl
print "n: $_, length: ", $result{ $_ }, "\n" for
    (sort { $result{ $b } <=> $result{ $a } } keys %result)[0..19]
;
```

## Mohammad S Anwar {#mohammad-anwar2}

[Mohammad S Anwar's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/mohammad-anwar/perl/ch-2.pl) finds the `@collatz` sequence for a starting integer as follows:

```perl
my @collatz = ($n);
while ($n != 1) {
    $n = ($n % 2 == 0) ? ($n / 2) : ((3 * $n) + 1);
    push @collatz, $n;
}

print sprintf("%s\n", join " -> ", @collatz);
```

In his blog, Mohammad mentions there is "hardly anything to talk about in this solution." I suppose I'll have to come up with a more difficult challenge next time! :-)

**Blog** › [BLOG: The Weekly Challenge #054](https://perlweeklychallenge.org/blog/weekly-challenge-054)

## Peter Meszaros {#peter-meszaros2}

[Peter Meszaros's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/peter-meszaros/perl/ch-2.pl) gives us an iterative `collatz` sub first:

```perl
sub collatz {
    my $n = shift;
    my @r = $n;
    while ($n > 1) {
        $n = ($n % 2) ? ($n * 3 + 1) : (int($n / 2));
        push @r, $n;
    }
    return \@r;
}
```

That `collatz` sub is then used to help find the sequence lengths for the first million starting integers, as follows:

```perl
my @n = @ARGV ? @ARGV : 1..1_000_000;

my %res;
for my $i (@n) {
    my $c = collatz($i);
    $res{$i} = {
        num => scalar @$c,
        max => max(@$c),
    };
}
```

Finally, the results are sorted and printed:

```perl
my @ores = sort { $res{$b}->{num} <=> $res{$a}->{num} } keys %res;
my $e = $#ores;

my $j;
for my $i (@ores[0..(19, $e)[19 > $e]]) {
    printf "%2d %6d length: %6d max: %12d\n", ++$j, $i, $res{$i}->{num}, $res{$i}->{max};
}
```

Peter's code runs in just over a minute on my VM, and, interestingly, also prints the maximum value that each sequence reaches. While 837799 has the longest sequence at 525 steps, it only reaches a maximum of 2974984576, putting it in 6th place overall. 1st place goes to 886953, which reaches a whopping 52483285312 before going all the way back down to 1.

## Roger Bell West {#roger-bell-west2}

[Roger Bell West's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/roger-bell-west/perl/ch-2.pl) is a clean, no-frills Collatz sequence generator:

```perl
use integer;

while ( my $n = shift @ARGV ) {
    my @k = ($n);
    while ( $n != 1 ) {
        if ( $n % 2 == 0 ) {
            $n /= 2;
        }
        else {
            $n *= 3;
            $n++;
        }
        push @k, $n;
    }
    print join( ', ', @k ), "\n";
}
```

### Extra Credit Solution

Roger provided a [second solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/roger-bell-west/perl/ch-2a.pl) that tackles the extra credit part, using memoization:

```perl
my %l;
my %s;

$l{1} = 1;

foreach my $n ( 1 .. 1e6 ) {
    my $k  = 1;
    my $na = $n;
    while ( !exists $l{$na} ) {
        if ( $na % 2 == 0 ) {
            $na /= 2;
        }
        else {
            $na *= 3;
            $na++;
        }
        $k++;
    }
    $l{$n} = $k + $l{$na};
    push @{ $s{ $l{$n} } }, $n;
}
```

The results (`%s`) are then sorted and the top 20 printed:

```perl
my $k = 20;
foreach my $c ( sort { $b <=> $a } keys %s ) {
    print "$c: " . join( ', ', sort @{ $s{$c} } ), "\n";
    $k -= scalar @{ $s{$c} };
    if ( $k <= 0 ) {
        last;
    }
}
```

## Ruben Westerberg {#ruben-westerberg2}

[Ruben Westerberg's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/ruben-westerberg/perl/ch-2.pl) includes the following recursive `collaz` sub:

```perl
sub collaz {
    my ($seq)=@_;
    given ($seq->[-1]) {
        when ($_%2 == 0) {
            push @$seq, $_/2;
        }
        default {
            push @$seq, 3*$_+1;
        }
    }
    &collaz unless $seq->[-1]==1;
    $seq;
}
```

That sub is then used `$ARGV[0]` times to find the sequence lengths for the entire integer range:

```perl
my $max=$ARGV[0]//23;         #sane default without cmd line args
my @seqs=( ([]) x 20);        #Initalise the largest 20 sequences found

for ( 1..$max) {
    my $s=collaz([int($_)]);
    for my $i (0..@seqs-1) {
        if (@$s  > @{$seqs[$i]}) {
            pop @seqs unless @seqs < 20;
            splice @seqs,$i,0,$s;
            last;
        }
    }
};

say "Top 20 Collaz Sequence lengths for starting numbers 1..$max";
for(grep { @$_ != 0} @seqs) {
    printf "Starting Number: %10d Sequence Length: %d\n", $_->[0],scalar @$_;
}
```

Ruben's code runs in about 1m45s on my VM, which is reasonable for a recursive brute force approach that works with full sequences (rather than lengths only).

## Ryan Thompson {#ryan-thompson2}

[My solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/ryan-thompson/perl/ch-2.pl) uses memoization, and an O(n) insertion into the `@top` array of top 20 sequences. A few variables are required:

```perl
my @seqlen = (-1,1);    # Memoize sequence length
my $top    = 20;        # Report this many of the top sequences
my @top    = [ -1,-1 ]; # Top $top sequences
my $upper  = 1e6;       # Upper limit starting term
my $mintop = 0;         # Lowest value in @top
```

Here is the main array:

```perl
for (my $start = 3; $start < $upper; $start += 2) {
    my ($n, $len) = ($start, 0);
    while (! defined $seqlen[$n]) {
        $len += 1 + $n % 2;
        $n = $n % 2 ? (3*$n + 1)/2 : $n / 2;
    }

    $len += $seqlen[$n];
    $seqlen[$start] = $len if $start < $upper * 2; # Cache

    top($start => $len)            if $len > $mintop  and     $start <= $upper;
    top($n * 2 => $seqlen[$n] + 1) if   $n < $upper/2 and $seqlen[$n] > $mintop;
}
```

There are a couple of other minor optimizations, here: first, note that instead of doing `3*$n + 1` on odd numbers, I do `(3*$n + 1)/2`, and I add 2 to `$len` for odd numbers, which bypasses some iteration while keeping the sequence length correctly tallied.

I also call another sub, `top` to handle inserts to `@top` instead of just `push`ing and `sort`ing later. This saved a few seconds (which, in my case, was most of the execution time):

```perl
# Sorted insert [ $n, $len ] to @top, keep @top to $top length
sub top {
    my ($n, $len) = @_;

    my $idx = first { $top[$_][1] < $len } 0..$#top;
    splice @top, $idx, 0, [ $n, $len ];

    pop @top if @top > $top;
    $mintop = $top[-1][1];
}
```

The execution time on my VM is 1.7 seconds.

**Blog** › [Collatz Conjecture](http://www.ry.ca/2020/04/collatz-conjecture/)

## Saif Ahmed {#saiftynet2}

[Saif Ahmed's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/saiftynet/perl/ch-2.pl) gives us the following curious Collatz sub:


```perl
sub Collatz {
    my $n = shift;
    my @sequence;
    while ( $n != 1 ) {
        push @sequence, $n;
        $n = $n % 2 ? 3 * $n + 1 : $n / 2;    # comment this line and uncomment the next two
                                              # to enable caching.  On my system, caching takes
                                              # 50% longer
            # $next{$n} = $n %2 ? 3*$n + 1: $n / 2  unless defined $next{$n};;
            # $n=$next{$n};
    }
    return @sequence, 1;
}
```

The comment about caching taking 50% longer is unexpected, given what we already know about memoization in this task. The script does indeed take longer to run with the caching lines enabled. Can you see why?

Saif is only caching the next number in the sequence. As a result, this code essentially just adds a hash lookup to the existing code, and that's why it's slow. Caching the sequence length would result in large savings.

Here is the top 20 code:

```perl
my %next;    # cache of next numbers in the Collatz sequence;
             # helps if look up quicker than the math

print join( "->", Collatz(837799) ), "\n\n\n";

top20Collatz(1000000);

sub top20Collatz {    # this uses pop instead of the usual "shift"
    my $end   = pop;        # if one parameter is supplied it is used as the end
    my $start = pop // 1;   # if two are supplied, then they are start and end
    my @top20 = ();
    my $stopwatch = time();
    for ( $start .. $end ) {
        print "Calculating $_ \r";    # takes some time to work out 1000_000
                                      # gives visual feedback oc activity
        my @seq = Collatz($_);        # get the Collatz sequence
            # perl handily uses size of array if array is used in scalar context
        if ( ( @top20 < 20 ) or ( @seq > @{ $top20[-1] } ) )
        {    # will end in top 20
            unshift @top20, [@seq];    # store the sequence
            @top20 = sort { @$b <=> @$a } @top20;    # resort (reverse
            pop @top20 if @top20 > 20;               # remove any surplus
        }
    }
    $stopwatch -= time();

    #  section that displays results
    my $count = 1;
    print "Top 20 longest Collatz Sequences between $start and $end\n";
    foreach (@top20) {
        printf "Rank: %3d  Number: %8d  Sequence Size: %4d\n", $count++,
          $$_[0],, scalar @$_;
    }
    print "takes " . -$stopwatch . " seconds";
}
```

## Shahed Nooshmand {#shahed-nooshmand2}

Shahed submitted a Raku solution last week, but this is their first time submitting a Perl solution, meaning it's my first chance to welcome them to the Challenge. Welcome!

[Shahed Nooshmand's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/shahed-nooshmand/perl/ch-2.pl) is impressively concise for an extra credit solution:

```perl
my %hail = (1 => 1);

for (1..1e6-1) {
    my $n = $_;
    my $i = 0;
    until (exists $hail{$n}) {
        $n = $n % 2 ? $n * 3 + 1 : $n / 2;
        $i++
    }
    $hail{$_} = $i + $hail{$n}
}

print "$_    $hail{$_}\n" for (sort { $hail{$b} <=> $hail{$a} } keys %hail)[0..19]
```

The Collatz sequence is sometimes called the hailstone sequence, which is why you see the alternative symbol names, here. This code runs in 9.5 seconds, which is about average for a memoized solution.

It's really great to have another blogger participating in the challenge.

**Blog** › [Perl Weekly Challenge: week 54](https://rafraichisso.ir/2020/04/03/pwc-54)

## Ulrich Rieke {#ulrich-rieke2}

[Ulrich Rieke's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/ulrich-rieke/perl/ch-2.pl) begins with a `findSequence` sub:

```perl
sub findSequence {
    my $n = shift;
    my @sequence;
    while ( $n != 1 ) {
        push( @sequence, $n );
        if ( $n % 2 == 0 ) {
            $n /= 2;
        }
        else {
            $n = $n * 3 + 1;
        }
    }
    push( @sequence, $n );
    return @sequence;
}
```

The one million loop uses `findSequence`:

```perl
my @sequences;
for my $i ( 1 .. 1000000 ) {
    @sequence = findSequence($i);
    push( @sequences, [ $i, scalar @sequence ] );
}
my @sorted = sort { ${$b}[1] <=> ${$a}[1] } @sequences;
print "The 20 longest Collatz sequences in numbers up to 1000000:\n";
map { print ${$_}[0] . " " . ${$_}[1] . "\n" } @sorted[ 0 .. 19 ];
```

This brute force implementation runs in about 1m7sec.

## User Person {#user-person2}

[User Person's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/user-person/perl/ch-2.pl) is a rather comprehensive script. When run with the `m{-{0,2}extra[-~!@#$%^&*=+|\\;:'",.?/ ]?credit}i` option (better to be permissive with inputs, right‽), the following loop runs through `2..$MAX`:

```perl
my %high = ();
my $i = $n;

OUTER_LOOP:
while ($i <= $MAX) {
    my $count = 0;

    while ($n != 1) {

        if ($extraCredit) {
            $count++;
        } else {
            print "$n -> ";
        }

        if ($n % 2 == 0) {          # EVEN
            $n /= 2;
        } else {                    # ODD
            $n = 3*$n + 1;
        }
    }

    if ($extraCredit) {
        checkHighKeys( $i, $count, \%high);
        $n = ++$i;
        if ($n % 20_000 == 0) {
            print STDOUT "#";
        }
    } else {
        print "1\n";
        last OUTER_LOOP;
    }
}
```

Finally, the top results are printed:

```perl
if ($extraCredit) {
    print STDERR "\n\n";
    foreach my $key (sort { $high{$b} <=> $high{$a} or $b <=> $a } keys %high) {
        print "Starting number: ", $key, " with sequence length: ",  $high{$key}, "\n";
    }
}
```

## Wanderdoc {#wanderdoc2}

[Wanderdoc's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/wanderdoc/perl/ch-2.pl) begins with `collatz`, which memoizes the next number in the sequence:

```perl
my %collatz_mem = ( 4 => 2, 2 => 1 ); # ( 5 => 16, 16 => 8, 8 => 4, 4 => 2, 2 => 1, );

sub collatz {
    my $n = $_[0];
    my @seq;
    while ( $n != 1 ) {
        if ( exists $collatz_mem{$n} ) {
            my $key = $n;
            while ( $key > 1 ) {
                push @seq, $key;

                $key = $collatz_mem{$key};
            }
            push @seq, 1;

            return @seq;
        } else {

            my $old_n = $n;
            push @seq, $n;

            if ( 0 == $n % 2 ) {
                $n = $n / 2;
            } else {
                $n = 3 * $n + 1;
            }
            $collatz_mem{$old_n} = $n;
        }
    }
}
```

As I've explained previously, caching the next number in sequence trades a hash lookup for a quick arithmetic operation, which is going to be slower than just doing the arithmetic operation every time.

Here is the million Collatz loop:

```perl
my $EDGE = 20;
my %longest;
my $PRINT_SEQUENCE = 0;

for my $N ( 1 .. 1_000_000 ) {
    my @sequence = collatz($N);

    my $length = scalar @sequence;

    my $max = max keys %longest || 1;

    if ( $length > $max ) {
        $longest{$length} = [@sequence];
    }

    my $how_many = scalar keys %longest;

    if ( $how_many > $EDGE ) {
        my $min = min keys %longest;
        delete $longest{$min};
    }
}

for my $n ( sort { $b <=> $a } keys %longest ) {
    print ${ $longest{$n} }[0], ': ', scalar @{ $longest{$n} }, $/;
    print join( ' -> ', @{ $longest{$n} } ), $/ if 1 == $PRINT_SEQUENCE;
}
```

This code runs in 1m22sec on my VM.

## Yet Ebreo {#yet-ebreo2}

[Yet Ebreo's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/yet-ebreo/perl/ch-2.pl) has a memoized recursive `gen_seq` sub, and I really like to see the hints of iterative development, with the code comment, below:

```perl
my @out;
my $r;
my %mem;
my $cnt = 0;
my $ctr = 20;
sub gen_seq {
    my ($n) = @_;
    #The if statement below improved execution time from 75 secs to 10 secs
    if ($mem{$n}) {
        $cnt    += $mem{$n} =~y/ //;
        $r      .= $mem{$n};
        return
    }
    $r .= "$n ";
    return if ($n == 1);
    gen_seq( $n & 1 ? 3*$n+1 : $n/2 );
}
```

It's worth noting that `gen_seq` and the `%mem` table both work with string-based sequences.  The global `$cnt` keeps track of how many total iterations are saved with memoization, and that is obtained by counting the spaces between elements in the sequence with `y///`.

Up next is the one million sequence code:

```perl
for my $n (2..1e6) {
    $r = "";
    gen_seq($n);
    $mem{$n} = $r;
    push @{$out[$r=~y/ //]}, "$r";
}
```

***

***

## See Also {#blogs}

### Blogs this week:

**Cheok-Yin Fung** › [CY's take on PWC#054](http://blogs.perl.org/users/c_y_fung/2020/04/cys-take-on-pwc054.html)

**Dave Jacoby** › [Permutations and Conjectures](https://jacoby.github.io/2020/03/30/permutations-and-conjectures.html)

**E. Choroba** › [Kth Permutation Sequence + Collatz Conjecture](http://blogs.perl.org/users/e_choroba/2020/04/perl-weekly-challenge-054-kth-permutation-sequence-collatz-conjecture.html)

**Javier Luque** › [054 – Perl Weekly Challenge](https://perlchallenges.wordpress.com/2020/03/30/perl-weekly-challenge-054/)

**Kevin Colyer** › [Perl Weekly Challenge – Week 54](https://kevincolyer.wordpress.com/2020/04/05/perl-weekly-challenge-week-54/)

**Laurent Rosenfeld** › [k-th Permutation Sequence and the Collatz Conjecture](http://blogs.perl.org/users/laurent_r/2020/04/perl-weekly-challenge-54-k-th-permutation-sequence-and-the-collatz-conjecture.html)

**Mohammad S Anwar** › [BLOG: The Weekly Challenge #054](https://perlweeklychallenge.org/blog/weekly-challenge-054)

**Ryan Thompson** › [kth Permutation](http://www.ry.ca/2020/04/kth-permutation/) | [Collatz Conjecture](http://www.ry.ca/2020/04/collatz-conjecture/)

**Shahed Nooshmand** › [week 54 ― Rafraîchissoir](https://rafraichisso.ir/2020/04/03/pwc-54)


