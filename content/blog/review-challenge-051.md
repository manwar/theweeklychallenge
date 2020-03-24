---
author:       Ryan Thompson
date:         2020-03-23T21:08:17
description:  "Ryan Thompson › Perl Weekly Review #051"
tags:         ["perl"]
title:        "Ryan Thompson › Perl Weekly Review #051"
type:         post
---

Continues from [previous week](/blog/review-challenge-050/).

Welcome to the Perl review for Week 051 of the Weekly Challenge! For a quick overview, go through the [original tasks](/blog/perl-weekly-challenge-051/) and [recap](/blog/recap-challenge-051/) of the weekly challenge.

## Getting in Touch

<a href="mailto:rjt@cpan.org"><img src="http://ry.ca/misc/Email.svg" height="50" width="50"> Email</a> › Email me (Ryan) with any feedback about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="http://ry.ca/misc/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="http://ry.ca/misc/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

We'd greatly appreciate any feedback you'd like to give.

## Table of Contents

### [Task 1](#task1)

[ [Adam Russell](#adam-russell1)  | [Alicia Bielsa](#alicia-bielsa1)  | [Andrezgz](#andrezgz1)  | [Cheok-Yin Fung](#cheok-yin-fung1)  | [Colin Crain](#colin-crain1)  | [Cristina Heredia](#cristian-heredia1)  | [Dave Cross](#dave-cross1)  | [Dave Jacoby](#dave-jacoby1)  | [Duncan C. White](#duncan-c-white1)  | [E. Choroba](#e-choroba1)  | [Jaldhar H. Vyas](#jaldhar-h-vyas1)  | [Javier Luque](#javier-luque1)  | [Mohammad S Anwar](#mohammad-anwar1)  | [Phillip Harris](#phillip-harris1)  | [Roger Bell West](#roger-bell-west1)  | [Ruben Westerberg](#ruben-westerberg1)  | [Ryan Thompson](#ryan-thompson1)  | [Saif Ahmed](#saiftynet1)  | [Ulrich Rieke](#ulrich-rieke1)  | [User Person](#user-person1)  | [Walt Mankowski](#walt-mankowski1)  | [Wanderdoc](#wanderdoc1)  | [Yet Ebreo](#yet-ebreo1)  ]

### [Task 2](#task2)

[ [Adam Russell](#adam-russell2)  | [Alicia Bielsa](#alicia-bielsa2)  | [Andrezgz](#andrezgz2)  | [Cheok-Yin Fung](#cheok-yin-fung2)  | [Colin Crain](#colin-crain2)  | [Cristina Heredia](#cristian-heredia2)  | [Dave Cross](#dave-cross2)  | [Dave Jacoby](#dave-jacoby2)  | [Duncan C. White](#duncan-c-white2)  | [E. Choroba](#e-choroba2)  | [Jaldhar H. Vyas](#jaldhar-h-vyas2)  | [Javier Luque](#javier-luque2)  | [Mohammad S Anwar](#mohammad-anwar2)  | [Phillip Harris](#phillip-harris2)  | [Roger Bell West](#roger-bell-west2)  | [Ruben Westerberg](#ruben-westerberg2)  | [Ryan Thompson](#ryan-thompson2)  | [Saif Ahmed](#saiftynet2)  | [Ulrich Rieke](#ulrich-rieke2)  | [User Person](#user-person2)  | [Walt Mankowski](#walt-mankowski2)  | [Wanderdoc](#wanderdoc2)  | [Yet Ebreo](#yet-ebreo2)  ]

### [Blogs](#blogs)

***

***

# Task #1 - 3 Sum {#task1}

Here is the original task description:

Given an array `@L` of integers, write a script to find all unique triplets such that a + b + c is same as the given target T. Also make sure a <= b <= c.

Example:

`@L = (-25, -10, -7, -3, 2, 4, 8, 10);`

One such triplet for target 0 i.e. -10 + 2 + 8 = 0.

***

## Solution types

### O(n³) brute force

By simply using a 3-nested loop, one for each of `a`, `b` and `c`, you get a straightforward O(n³) solution.

There are some optimized variations of this approach that prune early or choose better upper and lower bounds. Fundamentally these are still *n*-cubed complexity, but in practice they can reduce the number of comparisons by as much as ~83% if done carefully.

### O(n²) with a "defined" hash

You can reduce the degree of the function by storing all values of `@L` in a hash (or array, but a hash is more space-efficient while still giving constant-time lookups). You then have `a` and `b` loops, but where you would have a `c` loop, you can instead simply check whether `Target - a - b` exists in your hash.

In either case, you may as well `sort` if it helps you, as even an n² term will dominate an *n* log *n* sort.

### O(n²) solution from Wikipedia

The [Wikipedia link](https://en.wikipedia.org/wiki/3SUM#Quadratic_algorithm) given in the task description has pseudocode for a quadratic time or O(n²) algorithm. Some opted to implement that in Perl (or perhaps arrived at it independently, I have no way to know). It works by having a nested loop, with the outer loop iterating through the entire list. The inner `while` loop walks `start` and `end` indices toward each other until they meet. The decision to increment `start`, decrement `end`, or increment/decrement both depends on what the current `a + b + c` sums to:

 * `a + b + c == 0` : Increment/decrement both, assuming numbers are distinct
 * `a + b + c  > 0` : Decrement `end`
 * `a + b + c <= 0` : Increment `start`

***

## Adam Russell {#adam-russell1}

Adam is back with another [Prolog and Perl solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-051/adam-russell/perl/ch-1.pl)! The Perl setup code is as follows, using [`AI::Prolog`](https://metacpan.org/pod/AI::Prolog):

```perl
use AI::Prolog;
use constant TARGET => 0;
use constant NUMBERS => "-25, -10, -7, -3, 2, 4, 8, 10";
my $prolog = do{
    local $/;
    <DATA>;
};
my $numbers = NUMBERS;
$prolog =~ s/NUMBER_LIST/$numbers/;
$prolog = new AI::Prolog($prolog);
$prolog->query("unique_triplets(X, Y, Z, " . TARGET . ").");
my $result = $prolog->results;
my($x, $y, $z) = @{$result}[1 .. @{$result} - 1];
print "X: $x\nY: $y\nZ: $z\n";
```

The Prolog code is in the `__DATA__` section:

```prolog
member(X,[X|T]).
member(X,[H|T]) :- member(X,T).
numbers([NUMBER_LIST]).
unique_triplets(X, Y, Z, T) :-
    numbers(L),
    member(X, L),
    member(Y, L),
    member(Z, L),
    X <= Y,
    Y <= Z,
    X <= Z,
    T is X + Y + Z.
```

I'm glad to see Adam submitting solutions again after a brief hiatus.

**Blog** › [More Perl & Prolog](https://adamcrussell.livejournal.com/15423.html)

## Alicia Bielsa {#alicia-bielsa1}

[Alicia Bielsa's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-051/alicia-bielsa/perl/ch-1.pl) is a straightforward brute force implementation:

```perl
my $target = 0;
my  @L = sort(-25,  -7, -3, 2, 4, -10,8, 10);
foreach my $a (0..$#L){
    foreach my $b ($a+1..$#L){
        foreach my $c ($b+1..$#L){
            if ( ($L[$a] + $L[$b] + $L[$c]) == $target){
                print $L[$a]."  + ".$L[$b]." + ".$L[$c]." = $target.\n";
            }
        }
    }
}
```

## Andrezgz {#andrezgz1}

[Andrezgz's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-051/andrezgz/perl/ch-1.pl) is also brute force:

```perl
my $integers = join ',', @ARGV;
my @L = sort { $a <=> $b } grep {/-?\d+/} split /,/, $integers;
die "At least 3 integers are needed" if @L < 3;
my $triplets;
for my $i (0 .. $#L - 2) {
    for my $j ($i+1 .. $#L - 1) {
        for my $k ($j+1 .. $#L) {
            next unless $L[$i] + $L[$j] + $L[$k] == TARGET;
            my $key = join '#', $L[$i], $L[$j], $L[$k];
            $triplets->{$key}++;
        }
    }
}
print 'Triplets for target '.TARGET."\n";
printf "(%s,%s,%s)\n", split /#/ foreach keys %$triplets;
```

## Cheok-Yin Fung {#cheok-yin-fung1}

[Cheok-Yin Fung's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-051/cheok-yin-fung/perl/ch-1.pl) uses [`Math::Combinatorics`](https://metacpan.org/pod/Math::Combinatorics) to simplify obtaining the list of combinations. The loop body is a simple `$target == sum @tsum` check:

```perl
use Math::Combinatorics;
use List::Util qw{sum};
#Usage: ch-1.pl $target $L[0] $L[1] ... $L[$#L];
my $target = shift @ARGV;
my @L = @ARGV;
my $tripets = Math::Combinatorics->new( count => 3 , data => [@L] );
while (my @tsum = $tripets->next_combination) {
    print join(" ", sort {$a<=>$b} @tsum)."\n" if $target == sum @tsum;
}
```

## Colin Crain {#colin-crain1}

[Colin Crain's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-051/colin-crain/perl/ch-1.pl) reads integers from a large `__DATA__` block (not shown) to populate `@L`:

```perl
my @L;
while (my $line = <DATA>) {
    chomp $line;
    push @L, split /, /, $line;
};
```

What follows is Colin's O(n²) solution, which maintains `$idx`, `$high`, and `$low` indexes into the sorted `@list`:

```perl
## nominally 0, but this can be changed easily here
my $TARGET  = 0;
my @list    = sort {$a <=> $b} @L;
my $length  = scalar @L;
my @output;
for my $idx ( 0..$length - 2) {
    ## if a, the smallest value, is greater than the target value, no more
    ## solutions are possible and we are done
    last if $list[$idx] > $TARGET;
    ## if a is a duplicate of the previous search, short-circuit to the next value
    next if ($idx > 0 && $list[$idx] == $list[$idx-1]);
    my $a     = $list[$idx];
    my $low   = $idx + 1;
    my $high  = $length - 1;
    while ( $low < $high ) {
        ## if b is a duplicate of the previous search, increment the index and short-circuit
        if ($low > $idx+1  &&  $list[$low] == $list[$low-1]){
            $low++;
            next;
        }
        ## if c is a duplicate of the previous search, decrement the index and short-circuit
        if ($high < $length - 1  &&  $list[$high] == $list[$high+1]) {
            $high--;
            next;
        }
        my $b = $list[$low];
        my $c = $list[$high];
        ## on success note to output, increment the start index and decrement the end
        ## so as not to duplicate searches
        if ($a + $b + $c == $TARGET) {
            push @output, [$a, $b, $c];
            $low++;
            $high--;
        }
        ## if we are already above target shift the end element down and start again
        elsif ($a + $b + $c > $TARGET) {
            $high--;
        }
        ## else try the next internal candidate
        else {
            $low++;
        }
    }
}
say join ', ', $_->@* for @output;
```
For reference, an unoptimized O(n³) solution on 1000 integers would take 1000³ = 1,000,000,000 iterations, but Colin's manages it in just 364,890, completing in about 0.3 seconds.

## Cristina Heredia {#cristian-heredia1}

[Cristina Heredia's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-051/cristian-heredia/perl/ch-1.pl) is an O(n³) loop:

```perl
sub checkNumber {
    for (my $j=0; $j<$digits; $j++) {
        for (my $k=0; $k<$digits; $k++) {
            if ($j != $k){
                for (my $l=0; $l<$digits; $l++) {
                    if ($l != $k and $j != $l){
                        $total = $aNumber[$j] +$aNumber[$k] +$aNumber[$l];
                        if ($total == $target and $aNumber[$j] < $aNumber[$k] and $aNumber[$k] < $aNumber[$l]) {
                            $message = $message."Result that match the criteria are the numbers: $aNumber[$j], $aNumber[$k], $aNumber[$l]\n";
                            print "$message\n";
                        }
                    }
                }
            }
        }
    }
    if ($message eq '') {
        print "There are no results\n";
    }
}
```

## Dave Cross {#dave-cross1}

[Dave Cross's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-051/dave-cross/perl/ch-1.pl) also manages `$start` and `$end` indices, similar to the Wikipedia solution:

```perl
my $target  = 0;
my @numbers = sort { $a <=> $b } grep { /^-?\d+$/ } @ARGV;
die "Usage: $0 [list of integers]\n" unless @numbers;
for my $i ( 0 .. $#numbers - 1 ) {
    my $x     = $numbers[$i];
    my $start = $i + 1;
    my $end   = $#numbers;
    while ( $start < $end ) {
        my $y = $numbers[$start];
        my $z = $numbers[$end];
        if ( $x + $y + $z == $target ) {
            say "($x, $y, $z)";
            $start++;
            $end--;
        }
        else {
            if ( $x + $y + $z > $target ) {
                $end--;
            }
            else {
                $start++;
            }
        }
    }
}
```

It's quite concise for a solution of this type, and Dave's solution is similarly performant, requiring just 498,501 iterations to handle a 1000-integer input list.

## Dave Jacoby {#dave-jacoby1}

[Dave Jacoby's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-051/dave-jacoby/perl/ch-1.pl) is brute force, optimized with dynamic lower and upper bounds on each loop:

```perl
my @L = ( -25, -10, -7, -3, 2, 4, 8, 10 );
my $target = 0;

for my $i ( 0 .. scalar @L - 1 ) {
    for my $j ( $i .. scalar @L - 1 ) {
        for my $k ( $j .. scalar @L - 1 ) {
            my $l = $L[$i] + $L[$j] + $L[$k];
            next unless $l == $target;
            say qq{  $L[$i] + $L[$j] + $L[$k] = $l };
        }
    }
}
```

The intelligent loop bounds do help quite a lot, reducing the 1000-integer test case to 167,167,000 comparisons: 16.7% of O(n³). The cubed term still dominates, though, of course.

## Duncan C. White {#duncan-c-white1}

[Duncan C. White's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-051/duncan-c-white/perl/ch-1.pl) uses the hash optimization approach:

```perl
die "Usage: 3-sum T LIST\n" if @ARGV < 4;
my $t = shift;
my @l = @ARGV;
@l = sort @l;
my $n   = @l;
my %v2p = map { $l[$_] => $_ } 0 .. $n - 1;
foreach my $i ( 0 .. $n - 3 ) {
    my $a = $l[$i];
    foreach my $j ( $i + 1 .. $n - 2 ) {
        my $b    = $l[$j];
        my $sum2 = $a + $b;
        my $left = $t - $sum2;
        if ( defined $v2p{$left} ) {
            say "found a=$a, b=$b, c=$left (target=$t)";
        }
    }
}
```

This uses just under half of the iterations its O(n²) complexity would suggest, thanks to the careful bounds on the inner loop.

## E. Choroba {#e-choroba1}

[E. Choroba's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-051/e-choroba/perl/ch-1.pl) is a lightly-optimized O(n³) brute force implementation:

```perl
#!/usr/bin/perl
use warnings;
use strict;
use feature qw{ say };
my @L = (-25, -10, -7, -3, 2, 4, 8, 10);
my $target = 0;
for my $i (0 .. $#L - 2) {
    for my $j ($i + 1 .. $#L - 1) {
        for my $k ( $j + 1 .. $#L) {
            say join ' + ', sort { $a <=> $b } @L[$i, $j, $k]
                if $target == $L[$i] + $L[$j] + $L[$k];
        }
    }
}
```

Choroba performed bounds optimizations, reducing the number of comparisons by ~83% compared to a naïve n³ solution.

**Blog** › [3 Sum and Colourful Numbers](http://blogs.perl.org/users/e_choroba/2020/03/perl-weekly-challenge-051-3-sum-and-colourful-numbers.html)

## Jaldhar H. Vyas {#jaldhar-h-vyas1}

[Jaldhar H. Vyas's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-051/jaldhar-h-vyas/perl/ch-1.pl) starts with a `combinations` sub that recursively generates combinations of numbers from the input array ref, of a specified length:

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

The main logic then simply iterates over the result from `combinations` and outputs the tuples whose sum matches the target.

```perl
my $T = shift;
my @L = @ARGV;
for my $combo (combinations(\@L, 3)) {
    my @triplet = sort{ $a <=> $b } @{$combo};
    my $total = 0;
    for my $elem (@triplet) {
        $total += $elem;
    }
    if ($total == $T) {
        say join q{ }, @triplet;
    }
}
```

## Javier Luque {#javier-luque1}

[Javier Luque's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-051/javier-luque/perl/ch-1.pl) also resembles the Wikipedia solution. The inner loop is a `while` loop that walks `$start` and `$end` indices toward each other until they meet:

```perl
my @L = (-25, -10, -7, -3, 2, 4, 8, 10);
@L = sort { $a <=> $b } @L;
for (my $i = 0; $i < scalar(@L) - 2; $i++) {
    my $start = $i + 1;
    my $end   = scalar(@L) - 1;
    while ($start < $end) {
        if ($L[$i] + $L[$start] + $L[$end] == 0) {
            say "$L[$i] + $L[$start] + $L[$end] = 0";
            $start = $start + 1;
            $end = $end -1
        } elsif ($L[$i] + $L[$start] + $L[$end] > 0) {
            $end = $end - 1;
        } else {
            $start = $start + 1;
        }
    }
}
```

This is another very capable O(n²) approach.

Javier mentions on his blog that he did copy the algorithm from Wikipedia, which I appreciate and respect.

**Blog** › [051 – Perl Weekly Challenge](https://perlchallenges.wordpress.com/2020/03/09/perl-weekly-challenge-051/)

## Mohammad S Anwar {#mohammad-anwar1}

[Mohammad S Anwar's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-051/mohammad-anwar/perl/ch-1.pl) is pure, CPU-warming n³:

```perl
my @L = (-25, -10, -7, -3, 2, 4, 8, 10);
my $S = $#L;
my $T = 0;
foreach my $i (0 .. $S) {
    foreach my $j (0 .. $S) {
        next if ($i == $j);
        foreach my $k (0 .. $S) {
            next if (($k == $i) || ($k == $j));
            print sprintf("[%d, %d, %d]\n", $L[$i], $L[$j], $L[$k])
                if ($L[$i] + $L[$j] + $L[$k] == $T);
        }
    }
}
```

Mohammad knows his solution wasn't very efficient, but he enjoyed the aesthetic of this code, and I respect that. The joy of coding has always been at the heart of my own career.

**Blog** › [BLOG: The Weekly Challenge #051](https://perlweeklychallenge.org/blog/weekly-challenge-051)

## Phillip Harris {#phillip-harris1}

[Phillip Harris's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-051/phillip-harris/perl/ch-1.pl) implements the wiki O(n²) solution:

```perl
my @L = ( -25, -10, -7, -3, 2, 4, 8, 10 );
my $target = 0;
@L = sort { $a <=> $b } @L;
print "INPUT:\n";
print join ",", @L;
print "\n";
my %triplets;
for ( my $x = 0 ; $x <= $#L ; $x++ ) {
    my $start   = $x + 1;
    my $end     = $#L;
    my $current = $x;
    while ( ( $end - $start ) > 0 ) {
        my $result = $L[$current] + $L[$start] + $L[$end];
        if ( $result == $target ) {
            $triplets{"$L[$current],$L[$start],$L[$end]"} = 1;
            $start++;
            $end--;
        }
        elsif ( $result < $target ) { $start++ }
        else                        { $end-- }
    }
}
print "\nOUTPUT:\n";
print join "\n", keys(%triplets);
```

## Roger Bell West {#roger-bell-west1}

[Roger Bell West's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-051/roger-bell-west/perl/ch-1.pl) uses an O(n³) nested loop, putting all of the results in a result (`%r`) hash of hashes (HoH):

```perl
my @l = ( -25, -10, -7, -3, 2, 4, 8, 10 );
my $t = 0;
@l = sort { $a <=> $b } @l;
my %r;
foreach my $a ( 0 .. $#l - 2 ) {
    foreach my $b ( $a + 1 .. $#l - 1 ) {
        foreach my $c ( $b + 1 .. $#l ) {
            if ( $l[$a] + $l[$b] + $l[$c] == $t ) {
                $r{ $l[$a] }{ $l[$b] }{ $l[$c] } = 1;
            }
        }
    }
}
```

Roger then iterates through the keys in `%r` and the sub-hashes to print the results in order:

```perl
foreach my $d ( sort { $a <=> $b } keys %r ) {
    foreach my $e ( sort { $a <=> $b } keys %{ $r{$d} } ) {
        foreach my $f ( sort { $a <=> $b } keys %{ $r{$d}{$e} } ) {
            print "$d + $e + $f\n";
        }
    }
}
```

## Ruben Westerberg {#ruben-westerberg1}

[Ruben Westerberg's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-051/ruben-westerberg/perl/ch-1.pl) implements a `combinations` sub that generates all possible 3-tuples and `grep`s for those tuples whose values sum to the `$target`:

```perl
use List::Util;
my @list=(-25, -10, -7, -3, 2, 4, 8, 10);
my $target=0;
#my @combinations=combinations(\@list,3);
my @triplets=grep {my @s=sort(@$_); @s ~~ @$_ }
grep { List::Util::sum(@$_)==$target}
combinations(\@list,3);
printf "3 Sum triplet: %s+%s+%s=%s\n", @$_,$target for (@triplets);
sub combinations {
    my @combinations=();
    my ($data,$size)=@_;
    my @indexes=(0) x ($size+1);;
    my $i=0;
    until ($indexes[$size]) {
        my $count=List::Util::uniq(@indexes[0..$size-1]);
        #print $count,"\n";;
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

## Ryan Thompson {#ryan-thompson1}

[My solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-051/ryan-thompson/perl/ch-1.pl) eliminates the inner loop by building a hash of numbers that are greater than a given number, with some help from a temporary copy of the array:

```perl
    my @a = @_; my %Lh = map { shift @a => { map { $_ => 1 } @a } } 1..$#a;
```

After this line, the keys of `%Lh` are the numbers, and the values are hashes
of numbers in `@_` that are greater. For example, if `@_ = (1, 5, 10, 12)`,
then:
```perl
%Lh = (
    1 => { 5 => 1, 10 => 1, 12 => 1 },
    5 => {         10 => 1, 12 => 1 },
   10 => {                  12 => 1 },
   12 => {                          },
);
```

Here is the full subroutine:

```perl
sub sum3 {
    my $T = shift;
    my @a = @_; my %Lh = map { shift @a => { map { $_ => 1 } @a } } 1..$#a;
    my @r;
    while (my $x = shift) {
        $Lh{$_}{ $T-$x-$_ } and push @r, [$x, $_, $T-$x-$_] for @_;
    }
    @r;
}
```

This turns an O(n) loop into an O(1) lookup, and given that loop was the inner loop in an n³ algorithm, it's now n². It returns a result for a 1000-number input list in just 498501 iterations in about 0.3 seconds.


**Blog** › [3Sum and Colourful Numbers](http://www.ry.ca/2020/03/pwc-051/)

## Saif Ahmed {#saiftynet1}

[Saif Ahmed's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-051/saiftynet/perl/ch-1.pl) gives us the `findTriplet` sub, an O(n³) traversal of all possible combinations, with some bounds checking:

```perl
sub findTriplet {
    my ( $target, @list ) = @_;
    @list = sort { $a <=> $b } @list;             # the list may not be sorted, so sort first
    my @found = ();                               # initialise list triplets found
    foreach my $i ( 0 .. $#list - 2 ) {           # first number cannot be the last two numbers in the list
        foreach my $j ( $i + 1 .. $#list - 1 ) {  # second number bigger than first but can not be last number
            foreach my $k ( $j + 1 .. $#list ) {  # third number bigger than second in list
                                                  # check for triplet and if found add triplet to @found
                unshift @found, [ $list[$i], $list[$j], $list[$k] ]
                    if $list[$i] + $list[$j] + $list[$k] == $target;
                # dump duplicates using smartmatch (only check if 2 or more triplets found)
                shift @found if ( @found >= 2 and @{ $found[0] } ~~ @{ $found[1] } );
            }
        }
    }
    if (@found) {
        print scalar @found, " Triplets found\n";
        foreach my $triple (@found) {
            print "[ $$triple[0], $$triple[1], $$triple[2] ] ";
        }
    }
    else {
        print "No Triplet found that add to $target\n";
    }
}
```

The bounds optimizations bring the iterations down by around 83% for a 1000-item list, at around 166 million.

## Ulrich Rieke {#ulrich-rieke1}

[Ulrich Rieke's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-051/ulrich-rieke/perl/ch-1.pl) is the O(n²) wiki solution:

```perl
sub findTriplets {
    my $sum   = shift;
    my $array = shift;
    my $len   = scalar @{$array};
    my @result;
    if ( $len < 3 ) {
        return ();
    }
    foreach my $i ( 0 .. $len - 2 ) {
        my $a     = ${$array}[$i];
        my $start = $i + 1;
        my $end   = $len - 1;
        while ( $start < $end ) {
            my $b = ${$array}[$start];
            my $c = ${$array}[$end];
            if ( $a + $b + $c == $sum ) {
                my @innerresult;
                push( @innerresult, $a, $b, $c );
                push( @result, \@innerresult );
                $start++;
                $end--;
            }
            elsif ( $a + $b + $c > $sum ) {
                $end--;
            }
            else {
                $start++;
            }
        }
    }
    return @result;
}
```

## User Person {#user-person1}

[User Person's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-051/user-person/perl/ch-1.pl) is an O(n³) implementation with the usual bounds optimizations for the usual 83% savings compared to pure brute force:

```perl
my %seen = ();
for         ( my $i =    0; $i <= $#L-2; ++$i ) {
    for     ( my $j = $i+1; $j <= $#L-1; ++$j ) {
      INNER:
        for ( my $k = $j+1; $k <= $#L  ; ++$k ) {
            my $sum = $L[$i] + $L[$j] + $L[$k];
            if ($sum == $T) {
                my $string = "$L[$i] + $L[$j] + $L[$k] = $T";
                if (exists($seen{$string})) {
                    next INNER;
                } else {
                    print $string . "\n" if $sum == $T;
                    $seen{$string}++;
                }
            }
        }
    }
}
```

## Walt Mankowski {#walt-mankowski1}

[Walt Mankowski's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-051/walt-mankowski/perl/ch-1.pl) uses [`Algorithm::Combinatorics`](https://metacpan.org/pod/Algorithm::Combinatorics) 

```perl
use Algorithm::Combinatorics qw(combinations);
use List::Util qw(sum);
my @L = (-25, -10, -7, -3, 2, 4, 8, 10);
@L = sort {$a <=> $b} @L;
my $target = 0;
my $iter = combinations(\@L, 3);
while (my $p = $iter->next) {
    say prettyprint($p, $target) if sum(@$p) == $target;
}
```

On my 1000-item test run, while the number of combinations was 166 million (83% less than the 1 billion of pure n³), it took over 4 minutes to run. `Algorithm::Combinatorics` is known to be somewhat slower than `Algorithm::Permute`, so that is the likely reason.

The `prettyprint` sub is a thoughtful touch:

```perl
sub prettyprint($p, $target) {
    my $s = $p->[0];
    for my $i (1..$#$p) {
        $s .= $p->[$i] >= 0 ? ' + ' : ' - ';
        $s .= abs($p->[$i]);
    }
    $s .= " = $target";
    return $s;
}
```

It takes care of the signs, so instead of seeing things like `-7 + -3 + 10`, you instead see `-7 - 3 + 10`, which is more natural.

## Wanderdoc {#wanderdoc1}

[Wanderdoc's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-051/wanderdoc/perl/ch-1.pl) is a slightly faster variant of the O(n²) algorithm:

```perl
sub find_triplets {
    my @arr = sort { $a <=> $b } @{ $_[0] };
    my $t   = $_[1];
    my @result;
    for my $pt1 ( 0 .. $#arr ) {
        next if $pt1 > 0 and $arr[$pt1] == $arr[ $pt1 - 1 ];
        my $pt2 = $pt1 + 1;
        my $pt3 = $#arr;
        while ( $pt2 < $pt3 ) {
            if ( $arr[$pt1] + $arr[$pt2] + $arr[$pt3] == $t ) {
                push @result, [ $arr[$pt1], $arr[$pt2], $arr[$pt3] ];
                $pt2++;
            }
            elsif ( $arr[$pt1] + $arr[$pt2] + $arr[$pt3] < $t ) {
                $pt2++;
            }
            else {
                $pt3--;
            }
        }
    }
    return @result;
}
```

The key to the speedup is this line:

```perl
        next if $pt1 > 0 and $arr[$pt1] == $arr[ $pt1 - 1 ];
```

If the list contains duplicates, skipping them early can result in an improvement. But then I wondered whether this was better, worse, or the same as filtering out `uniq` elements at the top of the function call instead. Here are the results:

```
╭───────────────┬────────────┬──────────╮
│ Test          │ Iterations │ Time(ms) │
├───────────────┼────────────┼──────────┤
│ Original code │    320,101 │      162 │
│ No dupe check │    478,298 │      234 │
│ uniq @L       │    213,531 │      124 │
╰───────────────┴────────────┴──────────╯
```

Sometimes my curiosity takes me to interesting places. Other times it has me drawing tables in Vim.

## Yet Ebreo {#yet-ebreo1}

[Yet Ebreo's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-051/yet-ebreo/perl/ch-1.pl) also implements the O(n²) wiki solution:

```perl
sub get_triplets {
    my ($list, $target) = @_;
    my @sorted = sort { $a - $b } @{$list};
    for my $i (0..@sorted-2) {
        my $a = $sorted[$i];
        my $start = $i + 1;
        my $end = @sorted - 1;
        while ($start < $end) {
            my $b = $sorted[$start];
            my $c = $sorted[$end];
            if ($a + $b + $c == $target) {
                say "$a $b $c";
                $start++;
                $end--;
            } elsif ($a + $b + $c > $target) {
                $end--;
            } else {
                $start++;
            }
        }
    }
}
```

***

***

# Task #2 - Colourful Number {#task2}

Original task description:

Write a script to display all Colorful Number with 3 digits.

A number can be declare Colorful Number where all the products of consecutive subsets of digit are different.

For example, 263 is a Colorful Number since 2, 6, 3, 2x6, 6x3, 2x6x3 are unique.

***

## Solution types

There was really only one way to do it, with some variations:

### Check every number O(n)

Since our range only spans 900 numbers, it's reasonable to simply check them all, and see which ones are Colourful. To check whether a number is Colourful, one simply has to try all of the multiplications, and then make sure they are all unique:

```perl
sub colourful {
    my ($x, $y, $z) = split '', shift;
    6 == uniq $x*$y, $x*$y*$z, $y*$z, $x, $y, $z;
}
```

I use `uniq` here, but using a hash works equally well.

The task specifically calls for 3-digit numbers, but hopefully you can see expanding the above to handle longer numbers would be possible. Some of you did that, but most stuck to the task description.

No matter how you do it, the efficiency of this method is O(n) on the number of integers in the target range. I strongly suspect you can do no better than O(n), but I don't have time to consider a proof. I'd be very happy to be proven wrong!

***

## Adam Russell {#adam-russell2}

[Adam Russell's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-051/adam-russell/perl/ch-2.pl) is another Prolog relation using [`AI::Prolog`](https://metacpan.org/pod/AI::Prolog). First, the supporting Perl code:

```perl
use AI::Prolog;
MAIN:{
    my $prolog = do{
        local $/;
        <DATA>;
    };
    $prolog = new AI::Prolog($prolog);
    for my $n (100..999){
        my($x, $y, $z) = split(//, $n);
        $prolog->query("colorful($x, $y, $z).");
        my $result = $prolog->results;
        if($result){
            print "$n: colorful number\n";
        }
        else{
            print "$n: not a colorful number\n";
        }
    }
}
```

And here is the Prolog, from the `__DATA__` segment:

```prolog
colorful(X, Y, Z) :-
    A is X * Y,
    B is Y * Z,
    C is X * Y * Z,
    X \= Y,
    Y \= Z,
    X \= Z,
    X \= A,
    X \= B,
    X \= C,
    Y \= A,
    Y \= B,
    Y \= C,
    Z \= A,
    Z \= B,
    Z \= C.
```

Even if you don't know any Prolog, the above should be comprehensible: the `colorful` relation first sets `A`, `B`, and `C` to the results of the possible multiplications, and then the rest of the relation asserts that all of these (and the initial `X`, `Y` and `Z` inputs) must be different from each other.

**Blog** › [More Perl & Prolog](https://adamcrussell.livejournal.com/15423.html)

## Alicia Bielsa {#alicia-bielsa2}

[Alicia Bielsa's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-051/alicia-bielsa/perl/ch-2.pl) handles numbers of arbitrary length:

```perl
sub isColorful {
    my $number = shift;
    my @aDigits = split ('', $number);
    my %hProducts = ();
    my $lengthNumber = scalar(@aDigits);
    foreach my $subset  (1..$lengthNumber){
        foreach my $i (0..$#aDigits){
            my $setFound = 1;
            my $product  = 1;
            foreach my $s (0..$subset-1){
                if (defined $aDigits[$i+$s]){
                    $product *= $aDigits[$i+$s];
                } else {
                   $setFound = 0;
                }
            }
            if ($setFound){
                if (exists $hProducts{$product}){
                    return 0;
                } else {
                    $hProducts{$product} = 1;
                }
            }
        }
    }
    return 1;
}
```

I like this solution, in that it challenges the limits of the original task.

## Andrezgz {#andrezgz2}

[Andrezgz's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-051/andrezgz/perl/ch-2.pl) uses a `%unique` hash to ensure he gets exactly six unique results from the multiplications:

```perl
for my $n (100 .. 999) {
    my %unique;
    my ($f,$s,$t) = split //, $n;
    @unique{$f, $s, $t, $f*$s, $s*$t, $f*$s*$t} = (1) x 6;
    print $n.$/ if keys %unique == 6;
}
```

The hash slice makes this one quite compact. I like it.

## Cheok-Yin Fung {#cheok-yin-fung2}

[Cheok-Yin Fung's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-051/cheok-yin-fung/perl/ch-2.pl) uses [`Algorithm::Permute`](https://metacpan.org/pod/Algorithm::Permute) to generate all possible lists of `$digits` digits from 2..9. (Cheok Yin made the observation that the digits 0 and 1 will never appear in a number.)

```perl
use Algorithm::Permute;
use List::Util qw{product any};
my $digits = 3;   #can be changed to 2, 4 or 5,
                  #both produce colourful numbers within reasonable waiting time
my $permat    = Algorithm::Permute->new( [ 2 .. 9 ], $digits );
my @colourful = ();
while ( my @m = $permat->next ) {
    my @box = (0) x ( product( 10 - $digits .. 9 ) - 2 );

    # $box[0] is for result of multiplication as 2,
    # $box[1] is for result of a result of multiplication as 3,
    # $box[70] is for result of a result of multiplication as 72, etc..
    for my $j ( 0 .. $#m ) {
        my @a = ();
        for my $i ( 0 .. $#m - $j ) {
            push @a, $m[ $i + $j ];
            $box[ product(@a) - 2 ]++;
        }
    }
    push @colourful, scalar join( "", @m ) unless any { $_ > 1 } @box;
}
print join "\n", sort @colourful;
```

## Colin Crain {#colin-crain2}

[Colin Crain's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-051/colin-crain/perl/ch-2.pl) uses a hash to determine if all products are unique:

```perl
sub colorful3 {
    my $number = shift;
    my ($hundreds, $tens, $ones) = split //, $number;
    my %products = map { $_ => 1 } ($hundreds, $tens, $ones, $hundreds * $tens,
                                    $tens * $ones, $hundreds * $tens * $ones);
    keys %products == 6 ? 1 : 0;
}
```

## Cristina Heredia {#cristian-heredia2}

[Cristina Heredia's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-051/cristian-heredia/perl/ch-2.pl) includes a `checkNumber` sub that prints a message if the given number (passed in as a list of digits) is colourful:

```perl
sub checkNumber {
    $first = $aNumber[0];
    $second = $aNumber[1];
    $third = $aNumber[2];
    $firstMult = $first * $second;
    $secondMult = $first * $third;
    $thirdMult = $second * $third;
    $fourthMult = $first * $second * $third;
    if ($first != $second and $first != $third and $second != $third
        and $firstMult != $first and $firstMult != $second and $firstMult != $third
        and $secondMult != $first and $secondMult != $second and $secondMult != $third
        and $thirdMult != $first and $thirdMult != $second and $thirdMult != $third
        and $fourthMult != $first and $fourthMult != $second and $fourthMult != $third
        and $firstMult != $secondMult and $firstMult != $second and $secondMult != $third) {
        print "The number $number is a colorful Number";
    }
    else {
        print "The number $number is not a colorful Number";
    }
}
```

Note that instead of using `uniq` or a hash, Cristina checks every pair of products, which works equally well.

## Dave Cross {#dave-cross2}

[Dave Cross's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-051/dave-cross/perl/ch-2.pl) uses a hash to check for uniqueness:

```perl
NUMBER:
for my $n ( 100 ... 999 ) {
    my %product;
    my ( $x, $y, $z ) = split //, $n;
    $product{$_}++ for ( $x, $y, $z, $x * $y, $y * $z, $x * $y * $z );

    say "$n is colourful" if keys %product == 6;
}
```

## Dave Jacoby {#dave-jacoby2}

[Dave Jacoby's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-051/dave-jacoby/perl/ch-2.pl) fights back against [feature creep](https://en.wikipedia.org/wiki/Feature_creep), stating in a comment that handling arbitrarily large numbers "is a topic for another time":

```perl
sub is_colorful( $d ) {
    my %test;
    my ( $i, $j, $k ) = split //, $d;    # 263 becomes 2,6,3
    map { return 0 if ++$test{$_} > 1; } $i, $j, $k, ( $i * $j ),
        ( $j * $k ), ( $i * $j * $k );
    return 1;
}
```

Dave also states that he "has been told that using `map` as a cheat array is dirty pool, but it makes this solution a bit cleaner." Yet it works, is efficient, and is easy to understand and maintain. If that's what "dirty pool" looks like then sign me up.

## Duncan C. White {#duncan-c-white2}

[Duncan C. White's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-051/duncan-c-white/perl/ch-2.pl) implements a `colourful` function that handles arbitrarily long integers, fairly compactly:

```perl
use Function::Parameters;

fun colourful($x) {
    my @dig = split( //, $x );    # find all digits.
    my $n   = @dig;
    my %seen;                     # combinations already seen.
    foreach my $startpos ( 0 .. $n - 1 ) {
        foreach my $endpos ( $startpos .. $n - 1 ) {

            my $prod = 1;
            foreach my $p ( $startpos .. $endpos ) {
                $prod *= $dig[$p];
            }

            return 0 if $seen{$prod}++;
        }
    }
    return 1;
}
```

## E. Choroba {#e-choroba2}

[E. Choroba's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-051/e-choroba/perl/ch-2.pl) also handles integers of arbitrary length:

```perl
use List::Util qw{ product };
sub is_colorful_number {
    my ($n) = @_;
    my $max_length = length $n;
    my %uniq;
    my $count = 0;
    for my $length (1 .. $max_length) {
        for my $pos (0 .. $max_length - $length) {
            my @pattern = ((0) x $pos, (1) x $length);
            undef $uniq{
                product((split //, $n)[ grep $pattern[$_], 0 .. $#pattern ])
            };
        }
    }
    return ($max_length ** 2 + $max_length) / 2 == keys %uniq;
}
say for grep is_colorful_number($_), 100 .. 999;
```

Although I use [`List::Util`](https://metacpan.org/pod/List::Util) in most of my Perl modules, my brain for some reason still has a hard time remembering `product` exists, and the muscle memory of `reduce { $a * $b } @_` is a stubborn habit to break. My lame excuse is that a `List::Util` with `product` was "just" added to core in Perl 5.20, six years ago.

**Blog** › [3 Sum and Colourful Numbers](http://blogs.perl.org/users/e_choroba/2020/03/perl-weekly-challenge-051-3-sum-and-colourful-numbers.html)

## Jaldhar H. Vyas {#jaldhar-h-vyas2}

[Jaldhar H. Vyas's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-051/jaldhar-h-vyas/perl/ch-2.pl) looks at 3-digit numbers, first gathering all the `@products`, then using a counting hash to see if any product is repeated more than once:

```perl
sub isColorful {
    my ($n) = @_;
    my %subsets;
    my @digits = split //, $n;
    my @products = @digits;
    push @products, $digits[0] * $digits[1];
    push @products, $digits[1] * $digits[2];
    push @products, $digits[0] * $digits[1] * $digits[2];
    map { $subsets{$_}++ } @products;
    return !grep { $_ > 1 } values %subsets;
}
```

## Javier Luque {#javier-luque2}

[Javier Luque's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-051/javier-luque/perl/ch-2.pl) uses a 3-nested loop for `$h`undreds, `$t`ens and `$o`nes places, instead of looping from 100..999 and then using `split`:

```perl
my @solutions;
for my $h (2 ... 9) {
    for my $t (2 .. 9) {
        for my $o (2 .. 9) {
            if ( $h * $t != $t * $o &&
                 $h * $t != $h * $t * $o &&
                 $h * $o != $h * $t * $o &&
                 $t * $o != $h * $t * $o) {
                push @solutions, "$h$t$o";
            }
        }
    }
}
say join ' ', @solutions;
```

Note that this also returns numbers with repeated digits. Javier calculates the products correctly, but does not check whether the individual digits themselves are unique, as per the example in the task spec. This leads to numbers with repeated digits (e.g., 788, 998) being accepted instead of rejected.

**Blog** › [051 – Perl Weekly Challenge](https://perlchallenges.wordpress.com/2020/03/09/perl-weekly-challenge-051/)

## Mohammad S Anwar {#mohammad-anwar2}

[Mohammad S Anwar's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-051/mohammad-anwar/perl/ch-2.pl) first asserts that all digits must be unique, and then goes about computing the various products, and then checks whether the number of products matches the number of unique products:

```perl
use List::Util 1.45 qw(uniq);
foreach my $i (234 .. 987) {
    my @N = split //, $i;
    next if ( scalar(uniq(@N)) != scalar(@N) );
    my @S = ($N[0], $N[1], $N[2], ($N[0] * $N[1]), ($N[1] * $N[2]), ($N[0] * $N[1] * $N[2]));
    print "[$i] => [", join(", ", @S), "]\n"
        if ( scalar(uniq(@S)) == scalar(@S) );
}
```

I'm glad to see Mohammad continuing to blog about his participation in the challenge.

**Blog** › [BLOG: The Weekly Challenge #051](https://perlweeklychallenge.org/blog/weekly-challenge-051)

## Phillip Harris {#phillip-harris2}

[Phillip Harris's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-051/phillip-harris/perl/ch-2.pl) handles arbitrarily large integers, checking uniqueness with a hash:

```perl
sub checkcolorful() {
    my %products;
    my @digits = split //, $_[0];
    for ( my $x = 0 ; $x <= $#digits ; $x++ ) {
        for ( my $y = 0 ; $y + $x <= $#digits ; $y++ ) {
            my $total = 1;
            for ( my $z = 0 ; $z <= $x ; $z++ ) {
                $total = $total * $digits[ $y + $z ];
            }
            if ( $products{$total} == 1 ) {
                return 0;
            }
            else { $products{$total} = 1 }
        }
    }
    return 1;
}
```

## Roger Bell West {#roger-bell-west2}

[Roger Bell West's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-051/roger-bell-west/perl/ch-2.pl) loops over the digits, `$a`, `$b`, and `$c` to get all candidate 3-digit numbers using the digits 2..9:

```perl
use integer;
use List::Util qw(max);
foreach my $a ( 2 .. 9 ) {    # 1?? will never be colourful
    foreach my $b ( 2 .. 9 ) {    # ?0? and ?1? will never be colourful
        if ( $a == $b ) {
            next;
        }
        foreach my $c ( 2 .. 9 ) {    # ??0 and ??1 will never be colourful
            if ( $a == $c || $b == $c ) {
                next;
            }
            my %p;
            $p{$a}++;
            $p{$b}++;
            $p{$c}++;
            $p{ $a * $b }++;
            $p{ $b * $c }++;
            $p{ $a * $b * $c }++;

            if ( max( values %p ) < 2 ) {
                print "$a$b$c\n";
            }
        }
    }
}
```

The products (and digits) are calculated and tallied in `%p`. Any hash whose `max` value is less than two does not have any repeated values.

## Ruben Westerberg {#ruben-westerberg2}

[Ruben Westerberg's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-051/ruben-westerberg/perl/ch-2.pl) uses a nice `map` construct together with `split` and `substr` to generate the list of all possible products for an arbitrarily long number:

```perl
sub contiguousSubs {
    my ($string) = @_;
    my $len = length $string;
    map {
        my $subLen = $_;
        map {
            my @d = split "", substr( $string, $_, $subLen );
            List::Util::reduce { $a * $b } @d
          } 0 .. $len - $subLen
    } 1 .. $len;
}
```

## Ryan Thompson {#ryan-thompson2}

[My solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-051/ryan-thompson/perl/ch-2.pl) uses a `%seen` hash to `return 0` if any of the products have already been seen:

```perl
sub is_colourful3 {
    my ($x, $y, $z) = split //, $_[0];
    my %seen;
    $seen{$_}++ and return 0 for $x, $y, $z, $x*$y, $y*$z, $x*$y*$z;
    return 1;
}
```

**Blog** › [3Sum and Colourful Numbers](http://www.ry.ca/2020/03/pwc-051/)

## Saif Ahmed {#saiftynet2}

[Saif Ahmed's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-051/saiftynet/perl/ch-2.pl) handles arbitrary integers, using a `%products` hash to check for duplicates:

```perl
sub testColourful {
    my %products = ();
    my @digits   = split //, shift;

    foreach my $startDigit ( 0 .. $#digits ) {
        my $p = 1;
        foreach ( 0 .. $#digits - $startDigit ) {
            $p *= $digits[ $startDigit + $_ ];
            $products{$p}++;
        }
    }

    return keys %products == @digits * ( @digits + 1 ) / 2;
}
```

It's interesting that the number of products is the `@digits`-th [triangular number](https://mathworld.wolfram.com/TriangularNumber.html).

## Ulrich Rieke {#ulrich-rieke2}

[Ulrich Rieke's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-051/ulrich-rieke/perl/ch-2.pl) computes all products and uses `%numHash` to tally the number of times each product appears:

```perl
sub isColourful {
    my $number = shift;
    my %numHash;
    if ( $number =~ /(\d)(\d)(\d)/ ) {
        $numHash{ $1 * $2 }++;
        $numHash{ $2 * $3 }++;
        $numHash{ $1 * $2 * $3 }++;
        $numHash{$1}++;
        $numHash{$2}++;
        $numHash{$3}++;
        $numHash{ $1 * $3 }++;
        return scalar keys %numHash == 7;
    }
    return 0;
}
```

There is one small issue, however: `$numHash{ $1 * $3 }++` computes the product of the first and last digits, but only consecutive digits should be considered, per the task description. It's an easy fix, though: remove that line, and change the next line to check `%numHash == 6`.

## User Person {#user-person2}

[User Person's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-051/user-person/perl/ch-2.pl) handles 3-digit numbers with a `%seen` hash to check for duplicate products:

```perl
LOOP:
for (my $i = $MIN; $i <= $MAX; ++$i) {
    my %seen = ();
    my @d = (split //, $i );
    foreach ( $d[0], $d[1], $d[2], $d[0]*$d[1], $d[1]*$d[2], $d[0]*$d[1]*$d[2]) {
        exists $seen{$_} ? next LOOP : $seen{$_}++ ;
    }
    print "$i\n";
}
```

## Walt Mankowski {#walt-mankowski2}

[Walt Mankowski's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-051/walt-mankowski/perl/ch-2.pl) handles arbitrary integers as well, using `substr` and `split` to build up the products to be calculated:

```perl
use List::Util qw(product);
sub is_colorful($n) {
    my %prods;
    for my $len (1..length($n)) {
        for my $i (0..length($n) - $len) {
            my $p = product split //, substr($n, $i, $len);
            if (defined $prods{$p}) {
                return 0;
            } else {
                $prods{$p} = 1;
            }
        }
    }
    return 1;
}
```

## Wanderdoc {#wanderdoc2}

[Wanderdoc's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-051/wanderdoc/perl/ch-2.pl) handles arbitrarily large integers, with a few helper routines. The main `is_colorful` just calls `prod_con_subsets` and checks whether all of the products are unique:

```perl
sub is_colorful {
    my $num = $_[0];
    my @arr = prod_con_subsets($num);
    return scalar @arr == scalar uniq @arr;
}
```

`prod_con_subsets` does most of the heavy lifting, partitioning the number into all possible configurations for calculating products:

```perl
sub prod_con_subsets {
    my $num = $_[0];
    my $len = length($num);
    my @set;
    for my $width ( 1 .. $len ) {
        for my $pos ( 0 .. $len ) {
            my $chunk = substr( $num, $pos, $width );
            if ( length($chunk) == $width ) {
                push @set, $chunk;
            }
        }
    }
    my @products = _products(@set);
    $DEBUG_STORE{$num} = [@products];
    return @products;
}
```

The `_products` sub then takes a set of substrings, `split`s each one and calculates the product of its digits with `reduce { $a * $b }`:

```perl
sub _products {
    my @arr      = @_;
    my @products = map {
        my $el = $_;
        my $res =
          length($el) == 1
          ? $el
          : reduce { $a * $b }
        split( //, $el )
    } @arr;
    return @products;
}
```

`is_colorful` returns a boolean, but `%DEBUG_STORE` hash used above seems to be used to contain the list of products, so they can be printed out to prove a number is colourful:

```perl
my $counter;
for my $num ( 100 .. 999 ) {
    next if $num =~ /[01]/;    # cannot be colorful if contains 0 or 1.
    print "The Nr.", ++$counter, ' is ', $num, '; Proof: ',
      join( " ", @{ $DEBUG_STORE{$num} } ), $/
      if is_colorful($num);
}
```

## Yet Ebreo {#yet-ebreo2}

[Yet Ebreo's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-051/yet-ebreo/perl/ch-2.pl) splits the number with a regex, and then places all possible products into `@seq`, sorted numerically:

```perl
sub is_colorful {
    my @digits = pop =~ /./g;
    my @seq = sort {$a - $b } (@digits, $digits[0] * $digits[1], $digits[1]* $digits[2], $digits[0] * $digits[1] * $digits[2]);
    return "@seq "!~ /(\d+ )\1/
}
```

Instead of using `uniq` or a hash, Yet Ebreo concatenates `@seq` into a string, and uses a regex to check for two consecutive instances of the same number.

***

***

## See Also {#blogs}

### Perl Blogs this week:

**Adam Russell** › [More Perl & Prolog](https://adamcrussell.livejournal.com/15423.html)

**E. Choroba** › [3 Sum and Colourful Numbers](http://blogs.perl.org/users/e_choroba/2020/03/perl-weekly-challenge-051-3-sum-and-colourful-numbers.html)

**Javier Luque** › [051 – Perl Weekly Challenge](https://perlchallenges.wordpress.com/2020/03/09/perl-weekly-challenge-051/)

**Mohammad S Anwar** › [The Weekly Challenge #051](https://perlweeklychallenge.org/blog/weekly-challenge-051)

**Ryan Thompson** › [3Sum and Colourful Numbers](http://www.ry.ca/2020/03/pwc-051/)
