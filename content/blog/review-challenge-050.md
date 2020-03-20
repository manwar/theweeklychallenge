---
author:       Ryan Thompson
date:         2020-03-20T00:00:00
description:  "Ryan Thompson › Perl Weekly Review #050"
tags:         ["perl"]
title:        "Ryan Thompson › Perl Weekly Review #050"
type:         post
image:        images/blog/p5-review-challenge-050.jpg
---

Continues from [previous week](/blog/review-challenge-049/).

Welcome to the Perl review for Week 050 of the Weekly Challenge! For a quick overview, go through the [original tasks](/blog/perl-weekly-challenge-050/) and [recap](/blog/recap-challenge-050/) of the weekly challenge.

## Getting in Touch

<a href="mailto:rjt@cpan.org"><img src="http://ry.ca/misc/Email.svg" height="50" width="50"> Email</a> › Email me (Ryan) with any feedback about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="http://ry.ca/misc/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="http://ry.ca/misc/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

We'd greatly appreciate any feedback you'd like to give.

## Table of Contents

### [Task 1](#task1)

[ [Alexander Karelas](#alexander-karelas1)  | [Alicia Bielsa](#alicia-bielsa1)  | [Andrezgz](#andrezgz1)  | [Cheok-Yin Fung](#cheok-yin-fung1)  | [Colin Crain](#colin-crain1)  | [Dave Cross](#dave-cross1)  | [Dave Jacoby](#dave-jacoby1)  | [Duncan C. White](#duncan-c-white1)  | [E. Choroba](#e-choroba1)  | [Ian Rifkin](#ianrifkin1)  | [Jaldhar H. Vyas](#jaldhar-h-vyas1)  | [Javier Luque](#javier-luque1)  | [Laurent Rosenfeld](#laurent-rosenfeld1)  | [Mohammad S Anwar](#mohammad-anwar1)  | [Phillip Harris](#phillip-harris1)  | [Roger Bell West](#roger-bell-west1)  | [Ruben Westerberg](#ruben-westerberg1)  | [Ryan Thompson](#ryan-thompson1)  | [Saif Ahmed](#saiftynet1)  | [Sol DeMuth](#sol-demuth1)  | [Jen Guerra](#southpawgeek1)  | [User Person](#user-person1)  | [Wanderdoc](#wanderdoc1)  | [Yet Ebreo](#yet-ebreo1)  ]

### [Task 2](#task2)

[ [Alexander Karelas](#alexander-karelas2)  | [Alicia Bielsa](#alicia-bielsa2)  | [Andrezgz](#andrezgz2)  | [Cheok-Yin Fung](#cheok-yin-fung2)  | [Colin Crain](#colin-crain2)  | [Cristina Heredia](#cristian-heredia2)  | [Dave Cross](#dave-cross2)  | [Dave Jacoby](#dave-jacoby2)  | [Duncan C. White](#duncan-c-white2)  | [E. Choroba](#e-choroba2)  | [Ian Rifkin](#ianrifkin2)  | [Jaldhar H. Vyas](#jaldhar-h-vyas2)  | [Javier Luque](#javier-luque2)  | [Laurent Rosenfeld](#laurent-rosenfeld2)  | [Mohammad S Anwar](#mohammad-anwar2)  | [Phillip Harris](#phillip-harris2)  | [Roger Bell West](#roger-bell-west2)  | [Ruben Westerberg](#ruben-westerberg2)  | [Ryan Thompson](#ryan-thompson2)  | [Saif Ahmed](#saiftynet2)  | [Sol DeMuth](#sol-demuth2)  | [Jen Guerra](#southpawgeek2)  | [Ulrich Rieke](#ulrich-rieke2)  | [User Person](#user-person2)  | [Wanderdoc](#wanderdoc2)  | [Yet Ebreo](#yet-ebreo2)  ]

### [Blogs](#blogs)

***

***

# Task #1 - Merge Intervals {#task1}

Mohammad's description:

*Write a script to merge the given intervals where ever possible.*

```perl
[2,7], [3,9], [10,12], [15,19], [18,22]
```

*The script should merge `[2, 7]` and `[3, 9]` together to return `[2, 9]`.*

*Similarly it should also merge `[15, 19]` and `[18, 22]` together to return `[15, 22]`.*

The final result should be something like below:

```perl
[2, 9], [10, 12], [15, 22]
```

***

## Solution types

### Brute force

There is an O(n²) brute force method for this task, which involves checking every interval against every other interval. It's simple enough to implement, and fast enough for small lists of intervals.

There is a slight variation in these solutions, whereby some hackers only look at the intervals *following* the current interval, in the inner loop. This is indeed a little faster, but is still O(n²). The big-theta efficiency would be Θ([T](https://en.wikipedia.org/wiki/Triangular_number)(n)) = Θ(n(n+1)/2), which is still O(n²).

### Sort then scan

By sorting the list of intervals by their first element, you can then merge the ranges linearly. For example, with `[2,7], [3,9]`, you need only see if the last element of the first interval is greater or equal to the first element of the second interval. Or, in this case, 7 >= 3.

The `sort` itself is O(*n* log *n*), which dominates the complexity, so the linear merge doesn't even factor in to the big-O complexity.

### Unroll

A third solution involves unrolling each interval into all the integers it contains. These integers can then be iterated over, and the merged intervals obtained whenever there is a gap in the overall sequence of integers. For example, `[2,7], [3,9], [10,12], [15,19], [18,22]` unrolls into `2 3 4 5 6 7 8 9 10 11 12 15 16 17 18 19 20 21 22`. Scanning through that array, it is simple to find the discontinuity and return `[2,12], [15,22]`.

It is important to note that this method cannot distinguish adjacent intervals, meaning `[3,9], [10,12]` will be merged to `[3,12]`, whereas the first two methods can keep those intervals separate. The problem description seems to indicate that these intervals should, in fact, be separated.

### Which one is faster?

For those playing along at home, the (theoretical) point at which the `sort` method is faster than the brute force method is where *n*² = 2*n* log *n*.  (Here I've added the extra *n* term, because we want to compare the true coefficients.)

That simplifies to *n* = 2 log *n*, but either way, there is no crossover point; the 2*n* log *n* algorithm is always faster, at least in theory. In practice, constant factors can easily push things in favour of "worse" algorithms for small numbers. We say "sufficiently large" for good reason, after all.

The third (unroll) method scales on a completely different variable: it scales on either the *total* range of all the intervals, or (with some optimization) on the sum of the ranges of each interval.

***

## Alexander Karelas {#alexander-karelas1}

[Alexander Karelas's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/alexander-karelas/perl/ch-1.pl) uses the `sort`-scan method:

```perl
use Data::Dumper;
my @intervals = ([2,7], [3,9], [10,12], [15,19], [18,22]);
# solution
@intervals = sort {$a->[0] <=> $b->[0]} @intervals;
for (my $i = 0; $i < $#intervals; $i++) {
    if ($intervals[$i+1][0] <= $intervals[$i][1] and $intervals[$i+1][1] > $intervals[$i][1]) {
        $intervals[$i][1] = $intervals[$i+1][1];
        splice @intervals, $i+1, 1;
    }
}
print Dumper(\@intervals);
```

Using `Data::Dumper` to print out the results is a good time-saver.

## Alicia Bielsa {#alicia-bielsa1}

[Alicia Bielsa](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/alicia-bielsa/perl/ch-1.pl) took a modular design with her code, with subroutines as follows:

 * `checkIntervals` › The top-level subroutine, responsible for scanning through the intervals, checking for overlap, and merging those that do overlap.
 * `doIntervalsOverlap`› Takes two intervals, and returns 1 *iff* they overlap
 * `mergeIntervals` › Takes two intervals, and merges the second into the first.

These subroutines implement an interesting recursive algorithm. The last two are straightforward, so here is `checkIntervals`:

```perl
sub checkIntervals {
    my @aIntervals = @_;
    my @aMergedIntervals = ();
    foreach my $interval ( @aIntervals){
        unless(scalar @aMergedIntervals){
            push (@aMergedIntervals, $interval);
            next;
        }
        my $isMerged = 0;
        foreach my $mergedInterval (@aMergedIntervals){
            my $flagMerge = doIntervalsOverlap($interval, $mergedInterval );
            if ($flagMerge){
                mergeIntervals($interval, $mergedInterval);
                $isMerged = 1;
            }
        }
        unless  ($isMerged)  {
             push (@aMergedIntervals, $interval);
        }
    }
    if (scalar(@aMergedIntervals) != scalar(@aIntervals)){
         checkIntervals(@aMergedIntervals);
    } else {
        return @aMergedIntervals;
    }
}
```

Alicia's code attempts to merge all adjacent intervals, and then the recursion step essentially turns it into a [multi-pass](https://www.youtube.com/watch?v=9jWGbvemTag) implementation. This means that `checkIntervals` does not require sorted inputs.

Efficiency-wise, this saves an O(*n* log *n*) sort, but might potentially scan [T](https://en.wikipedia.org/wiki/Triangular_number)(n) = n(n+1)/2 intervals, which is back to O(n²) time. However, the average case is still much better than the brute force O(n²) algorithm, and the best case (already sorted input) is linear. I like this approach a lot.

## Andrezgz {#andrezgz1}

[Andrezgz's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/andrezgz/perl/ch-1.pl) accepts (and returns) lists of intervals in string form. The algorithm parses the input string, and puts all intervals into an `%output` hash, keyed on the lower (`$from`) number:

```perl
sub merge {
    my $intervals = shift;
    $intervals =~ s/\s+//; #remove unnecessary spaces
    my %output;
    foreach ( split /\Q],[\E/, $intervals ){
        next unless (/(-?\d+),(-?\d+)/);
        my ($from,$to) = ($1,$2);
        $output{$from} = $to unless exists $output{$from} && $output{$from} >= $to;
    }
```

Note that some intervals are already merged at this stage. If their `$from` numbers match, the one with the lower `$to` number is discarded. Most of the merging is yet to come, though:

```perl
    # merge overlapping intervals
    my $prev;
    foreach my $k (sort {$a <=> $b} keys %output){
        if (defined $prev && $output{$prev} >= $k) {
            $output{$prev} = $output{$k} if $output{$k} > $output{$prev};
            delete $output{$k};
        }
        else {
            $prev = $k;
        }
    }
    return join ',', map { qq|[$_,$output{$_}]| }
                     sort {$a <=> $b}
                     keys %output;
}
```

The `%output` keys are sorted numerically, effectively sorting the intervals, and then the intervals are merged in place. Finally, the output is returned in string form.

## Cheok-Yin Fung {#cheok-yin-fung1}

[Cheok-Yin Fung's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/cheok-yin-fung/perl/ch-1.pl) is recursive, and uses a number of data structures:

```perl
my @L = (0) x 100;
$L[100] = 1;
$L[101] = -1;
my %interval;     # key: the head of the interval; value: the tail of the interval
sub newroute {
    for my $i ($_[0]..$_[1]) {$L[$i]++;}
    $interval{$_[0]}=$_[1];
}
newroute(2,7);
newroute(3,9);
newroute(10,12);
newroute(15,19);
newroute(18,22);
newroute(100,100); # a temporary arrangement
my @trainstation = sort {$a <=> $b} keys %interval;
my %finterval;  # key: the head of the interval; value: the tail of the interval
my $stationnum = 0;
```

The `newroute` sub sets up each interval in the `@L` array and `%interval` hash.

The `seektermination` sub recursively scans through `@L` and skips to the next interval.

```perl
sub seektermination {
    my $i = $_[0];
    my $nextstop = $_[1];
    while ($L[$i] > 0 and $i < $nextstop) {
        $i++;
    }
    if ($L[$i] == 0 and $i<$nextstop) {
        return $i-1;
    }
    if ($L[$i]>1) {
        $stationnum++;
        return seektermination($_[0], $trainstation[$stationnum+1]);
    }
    if ($i==$nextstop and $L[$i-1] == 1 and $L[$i]==1) {
        return $i-1;
    }
}
```

Finally, the calling and cleanup code does some of the work itself:

```perl
while ($stationnum<=$#trainstation-1) {
    my $start = $trainstation[$stationnum];
    $finterval{$start} = seektermination($start, $trainstation[$stationnum+1]);
    $stationnum++;
}
delete $finterval{100}; #goodbye to the temporary arrangement
foreach my $s (sort {$a <=> $b} keys %finterval) {
    print "[", $s, ", ", $finterval{$s}, "]", "\n";
}
```

Compared to an O(*n* log *n*) `sort` + scan solution, there is more happening, here, and since there is already a `sort`, the performance cannot be any better than O(*n* log *n*). Unrolling the intervals in `@L` means that for intervals over large ranges, this will no longer scale on the number of intervals, but rather on the size and number of those intervals.

## Colin Crain {#colin-crain1}

[Colin Crain's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/colin-crain/perl/ch-1.pl) uses a `sort`-then-scan method, `shift`ing each interval from a `@sorted` list, and `push`ing the results to `@output`. Colin repeatedly peeks at the next element of `@sorted`, and if it can be merged, it, too, is `shift`ed, and the results are merged:

```perl
## sort and order the data before commencing
my @intervals   = ([2,7], [3,9], [19,15], [18,22], [10,12]);
my @remapped    = map  { $_->[0] <= $_->[1] ? $_ : [reverse $_->@*] } @intervals;
my @sorted      = sort { $a->[0] <=> $b->[0] } @remapped;
my @output;
while ( my $current = shift @sorted ){
    ## iterate through the intervals until a lower is greater than the current upper bound
    while (scalar @sorted && ($sorted[0]->[0] <= $current->[1])) {
        my $next = shift @sorted;
        $current->[1] = $next->[1] if $next->[1] > $current->[1];
    }
    ## once out of there we add to the output list, loop and and start again
    ## with the next discontinuous interval
    push @output, $current;
}
## output
say join ', ', map { "[" . (join ", ", $_->@*) . "]" } @output;
```

## Dave Cross {#dave-cross1}

[Dave Cross's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/dave-cross/perl/ch-1.pl) performs a linear scan without sorting, and produces some strange results:

```perl
sub get_input {
    die "No input given\n" unless @ARGV;
    my $input = join '', @ARGV;
    if ( $input =~ /[^\[\],\d\s]/ ) {
        die "Invalid input: $input\n";
    }
    return eval '[' . $input . ']';
}

sub merge_intervals {
    my $intervals_in = shift;
    my $intervals_out;
    $_ = 0;
    while ( $_ <= $#{$intervals_in} - 1 ) {
        if ( $intervals_in->[ $_ + 1 ][0] <= $intervals_in->[$_][1] ) {
            warn "Merging [$intervals_in->[$_][0],$intervals_in->[$_][1]] ",
              "with [$intervals_in->[$_ + 1][0],$intervals_in->[$_ + 1][1]]\n";
            push @$intervals_out,
              [ $intervals_in->[$_][0], $intervals_in->[ $_ + 1 ][1] ];
            $_ += 2;
        }
        else {
            push @$intervals_out, $intervals_in->[$_];
            $_++;
        }
    }
    return $intervals_out;
}
```

I tried this program with `[2,7],[3,4],[8,10],[4,5]`, and it returned `[2,4],[8,5]`, which is incorrect. However, even if I pre-sort the intervals first (`[2,7],[3,4],[4,5],[8,10]`), it returns `[2,4],[4,5]`, which is also incorrect.

A quick survey of the code suggests the scan needs to consider consecutive merged intervals, and be careful not to advance past the next interval. After that, the input would either need to be `sort`ed or documentation added indicating the sorted input requirement. It's very possible I'm missing something.

## Dave Jacoby {#dave-jacoby1}

[Dave Jacoby's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/dave-jacoby/perl/ch-1.pl) sorts the input `@array` first, and then does an O(n²) traversal to merge:

```perl
use JSON;
my $json = JSON->new;
my @array = ( [ 2, 7 ], [ 3, 9 ], [ 10, 12 ], [ 15, 19 ], [ 18, 22 ] );
# unnecessary in THIS case, but if we take on abstract
# two-dimensional array, we'll have to enforce order
@array = sort { $a->[0] <=> $b->[0] } @array;
say $json->encode( \@array );
LOOP: while (1) {
    for my $i ( 0 .. scalar @array - 1 ) {
        my @i = $array[$i]->@*;
        for my $j ( $i + 1 .. scalar @array - 1 ) {
            my @j = $array[$j]->@*;
            if ( $i[0] <= $j[0] && $i[1] >= $j[0] ) {
                $array[$i][1] = int $j[1];
                undef $array[$j];
                @array = grep { defined } @array;
                next LOOP;
            }
        }
    }
    say $json->encode( \@array );
    exit;
}
```

Dave's blog mentions the efficiency as being O(*n* log *n*), but the nested loop makes it O(n²). More specifically, the nested loop is Θ(T(n)) = Θ(n(n+1)/2), but this is O(n²).

**Blog** › [Perl Challenge #50](https://jacoby.github.io/2020/03/02/perl-challenge-50.html)

## Duncan C. White {#duncan-c-white1}

[Duncan C. White's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/duncan-c-white/perl/ch-1.pl) first poses an interesting question. Given the "final result" from the problem description (`[2, 9], [10, 12], [15, 22]`), Duncan asks, "why wouldn't we also merge `[2,9]` and `[10,12]` to give `[2,12]`?  I think we would". Thus, Duncan's solution merges adjacent integer intervals as well:

```perl
# build %on: a set of all integers marked "on" by the ranges
my %on;
my $min = 1000000;
my $max = -1;
while ( @ARGV >= 2 ) {
    ( my $a, my $b, @ARGV ) = @ARGV;
    die "int-sequences: a=$a, b=$b, a>b\n" if $a > $b;
    foreach my $i ( $a .. $b ) {
        $on{$i}++;
        $min = $i if $i < $min;
        $max = $i if $i > $max;
    }
}

#say "min=$min, max=$max";
# now, produce the sequence of ranges from %on, using min and max
my $start = my $end = $min;
for ( ; ; ) {
    while ( $on{ $end + 1 } ) {
        $end++;
    }
    say "[$start - $end]";
    $start = $end + 1;
    while ( $start <= $max && !$on{$start} ) {
        $start++;
    }
    last if $start > $max;
    $end = $start;
}
```

Duncan's algorithm unrolls each interval into all of the integers within, also keeping track of the `$min` and `$max` values seen. So, `[2,7] = 2, 3, 4, 5, 6, 7`. Once that has been done, Duncan iterates from `$min..$max` and prints out each interval as he comes to gaps in the number sequence (i.e., the keys in `%on`).

Efficiency-wise, this algorithm scales (nearly) with the total range. For example, `[1,2], [999,1000]` iterates 998 times.

At first glance, I think one could still satisfy the "adjacent interval" design decision by merging intervals where `$intervalA[1] + 1 >= $intervalB[0]`. (E.g., `[2,9],[10,12]`: `9+1 >= 10`, so they can be merged.)

## E. Choroba {#e-choroba1}

[E. Choroba](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/e-choroba/perl/ch-1.pl) gives us a unique OO solution using bitmasks and the [`enum`](https://metacpan.org/pod/enum) CPAN module:

```perl
package MyInterval;
use enum 'BITMASK:' => qw( LEFT RIGHT SINGLE );

sub new { bless {}, shift }

sub insert {
    my ($self, $from, $to) = @_;
    $self->{$from} |= SINGLE, return if $from == $to;
    $self->{$from} |= LEFT;
    $self->{$_} = LEFT | RIGHT for $from + 1 .. $to - 1;
    $self->{$to} |= RIGHT;
}

sub out {
    my ($self) = @_;
    my @r;
    for my $k (sort { $a <=> $b } keys %$self) {
        if (($self->{$k} & (LEFT | RIGHT)) == LEFT) {
            push @r, [$k];
        } elsif (($self->{$k} & (LEFT | RIGHT)) == RIGHT) {
            push @{ $r[-1] }, $k
        } elsif ((! @r || 1 != @{ $r[-1] }) && ($self->{$k} == SINGLE)) {
            push @r, [$k, $k];
        }
    }
    return \@r
}
```

As you can see, the `insert` method unrolls each interval, using `$self` for storage. The `out` method simply trundles through the keys of `$self` in numerical order, merging or `push`ing as indicated. Maintaining the `LEFT`, `RIGHT`, and `SINGLE` boundaries allows Choroba to use the unrolling method while still maintaining separation between adjacent ranges.

**Blog** › [Merge Intervals and Noble Integer](http://blogs.perl.org/users/e_choroba/2020/03/perl-weekly-challenge-050-merge-intervals-and-noble-integer.html)

## Ian Rifkin {#ianrifkin1}

[Ian Rifkin's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/ianrifkin/perl/ch-1.pl) makes an explicit assumption that the input is sorted, which allows him to craft a simple linear solution, using `splice` to remove the right-hand counterpart in every "merged" pair:

```perl
my @numbers = ( [ 2, 7 ], [ 3, 9 ], [ 10, 12 ], [ 15, 19 ], [ 18, 22 ] );
for ( my $i = 0 ; $i < scalar @numbers - 1 ; $i++ ) {
    if (   $numbers[$i][1] >= $numbers[ $i + 1 ][0]
        && $numbers[$i][1] <= $numbers[ $i + 1 ][1] )
    {
        $numbers[$i][1] = $numbers[ $i + 1 ][1];
        splice( @numbers, $i + 1, 1 );
        $i--; #loop through to check if new merged interval should also merge with the next one
    }
}
```

Thus, this solution is O(n) on sorted inputs, but would require a `sort` to allow it to work on any input, which would bring it in line with other O(*n* log *n*) solutions we've seen.

## Jaldhar H. Vyas {#jaldhar-h-vyas1}

[Jaldhar H. Vyas's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/jaldhar-h-vyas/perl/ch-1.pl) accepts a list of sorted intervals in string form on the commandline:

```perl
my @intervals;
for my $arg (@ARGV) {
    $arg =~ /\[ (\d+) , (\d+) \] ,?/gmx;
    push @intervals,  [$1, $2];
}
my $size = scalar @intervals;
```

By the way, the `scalar` is not necessary here, as assigning to a scalar variable already activates scalar context. It doesn't hurt, though.

Next, Jaldhar has a slightly unorthodox nested loop that increments the outer loop variable in the inner `while`:

```perl
my @merged;
for (my $i = 0; $i < $size - 1; $i++) {
    my $start = $intervals[$i]->[0];
    my $end = $intervals[$i]->[1];
    while ($i < $size - 1 &&
    $end >= $intervals[$i + 1]->[0] && $end <= $intervals[$i + 1]->[1]) {
        $end = $intervals[$i + 1]->[1];
        $i++;
    }
    push @merged, [$start, $end];
}
say join ', ', map { "[$_->[0],$_->[1]]" } @merged;
```

What this does is take the current interval (`[$start, $end]`), and then loop `while` the `$end` (which is updated in the inner loop) is bigger than the next interval's lower number, but less than or equal to the higher number. Thus, it only works on pre-sorted inputs. Given the sequence `[2,3] [3,5] [7,8] [3,6]`, the output is `[2,5], [7,8]`, but I would expect `[2,6], [7,8]`.

## Javier Luque {#javier-luque1}

[Javier Luque's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/javier-luque/perl/ch-1.pl) also relies on sorted input. He first parses `@ARGV` and builds up a list of intervals in `@values`:

```perl
use List::Util qw /min max /;
my $arg_string = join '', @ARGV;
$arg_string =~ s/[\s\[\]]//g;
my @values = split (',', $arg_string);
my @lists;
# Create the lists
while (@values) {
    my $min = shift @values;
    my $max = shift @values;
    push @lists, [$min, $max];
}
```

The merging code is then just a linear traversal:

```perl
my $i = 0;
while ($i < scalar(@lists) - 1) {
    if ( $lists[$i]->[1] >= $lists[$i+1]->[0] &&
         $lists[$i]->[0] <= $lists[$i+1]->[1]) {
        my $new_min = min($lists[$i]->[0], $lists[$i+1]->[0]);
        my $new_max = max($lists[$i]->[1], $lists[$i+1]->[1]);
        splice ( @lists, $i, 2, [$new_min, $new_max] );
    } else {
        $i++;
    }
}
say join ', ',
    map { '[' . $_->[0] . ', ' . $_->[1] . ']'}
    @lists;
```

**Blog** › [050 – Perl Weekly Challenge](https://perlchallenges.wordpress.com/2020/03/02/perl-weekly-challenge-050/)

## Laurent Rosenfeld {#laurent-rosenfeld1}

[Laurent Rosenfeld's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/laurent-rosenfeld/perl/ch-1.pl) sorts, then does an O(n) traversal of the sorted `@intervals`:

```perl
use strict;
use warnings;
use feature "say";
use Data::Dumper;
my @intervals = ([2,7], [3,4], [5,9], [10,12], [15,19], [18,22], [0,1], [24,35], [25,30]);
@intervals =  sort { $a->[0] <=> $b->[0] } @intervals;
my @merged;
# say Dumper \@intervals;
my $current = $intervals[0];
for my $i (1..$#intervals) {
    if ($intervals[$i][0] > $current->[1]) {
        push @merged, $current;
        $current = $intervals[$i];
    } else {
        next unless $intervals[$i][1] > $current->[1];
        $current->[1] = $intervals[$i][1];
    }
}
push @merged, $current;
say Dumper \@merged;
```

**Blog** › [Merge [Intervals] and Noble Numbers](http://blogs.perl.org/users/laurent_r/2020/03/perl-weekly-challenge-merge-inrervals-and-noble-numbers.html)

## Mohammad S Anwar {#mohammad-anwar1}

[Mohammad S Anwar's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/mohammad-anwar/perl/ch-1.pl) includes no less than 73 test cases. I respect that sort of dedication to correctness.

Mohammad's solution sorts and then does a linear traversal to `push` all intervals to a result array ref, `$m`. `merge_intervals` is the main sub:

```perl
sub merge_intervals {
    my ($intervals) = @_;
    my $k;
    my $l;
    my $m;
    $intervals = _order_intervals($intervals);
    foreach my $interval (@$intervals) {
        my $i = $interval->[0];
        if (defined $l && defined $k) {
            if (($i <= $l) || ($k == $i)) {
                $k = $interval->[1];
                if ($m->[-1]->[1] < $k) {
                    $m->[-1]->[1] = $k;
                }
                next;
            }
        }
        my ($j, $_k) = _merge_intervals($interval->[1], $intervals);
        if ($j < $interval->[1]) {
            $j = $interval->[1];
        }
        push @$m, [$i, $j];
        $k = $_k;
        $l = $j;
    }
    return $m;
}
```

Mohammad sorts the input with the help of `_order_intervals`:

```perl
sub _order_intervals {
    my ($intervals) = @_;
    my @intervals = ();
    foreach my $i (@$intervals) {
        push @intervals, sprintf("%d-%d", $i->[0], $i->[1]);
    }
    # Borrowed with input from E. Choroba
    # https://stackoverflow.com/questions/27089498/sorting-arrays-of-intervals-in-perl
    my @_sorted = sort {
        my ($a1, $a2) = $a =~ /-?\d+/g;
        my ($b1, $b2) = $b =~ /-?\d+/g;
        $a1 <=> $b1 || $a2 <=> $b2;
    } @intervals;
    my $sorted = [];
    foreach (@_sorted) {
        my ($a, $b) = split /(?<=\d)-(?=\d)/, $_, 2;
        push @$sorted, [ $a+0, $b+0 ];
    }
    return $sorted;
}
```

For my taste, this `_order_intervals` is more complex than it needs to be. Converting the interval to a string, using a regex to parse that string, and then converting it back to an array ref is a lot of extra work, when `sort` is perfectly capable of dealing with the array ref as-is, more efficiently and concisely:

```perl
# Ryan's version
sub _order_intervals {
    [ sort { $a->[0] <=> $b->[0] || $a->[1] <=> $b->[1] } @{$_[0]} ]
}
```

Lastly, the `_merge_intervals` subroutine merges an arbitrary number of intervals into a single interval, returned as `$_j` and `$_i`:

```perl
sub _merge_intervals {
    my ($j, $intervals) = @_;
    my $_j = $j;
    my $_i;
    foreach my $i (@$intervals) {
        if ($i->[0] <= $j) {
            $_j = $i->[1];
            $_i = $i->[0];
        }
    }
    return ($_j, $_i);
}
```

**Blog** › [BLOG: The Weekly Challenge #050](https://perlweeklychallenge.org/blog/weekly-challenge-050/)

## Phillip Harris {#phillip-harris1}

[Phillip Harris's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/phillip-harris/perl/ch-1.pl) uses the O(n²) brute force method, with `splice` to merge intervals in place:

```perl
my @in = ( [ 2, 7 ], [ 3, 9 ], [ 10, 12 ], [ 15, 19 ], [ 18, 22 ] );

for ( my $x = 0 ; $x <= $#in ; $x++ ) {
    for ( my $y = 0 ; $y <= $#in ; $y++ ) {
        if ( $y == $x ) { next }
        my $s1 = $in[$x][0];
        my $e1 = $in[$x][1];
        my $s2 = $in[$y][0];
        my $e2 = $in[$y][1];
        my $splice;
        my $target;
        if (   ( $s2 >= $s1 and $s2 <= $e1 )
            or ( $e2 >= $s1 and $e2 <= $e1 )
            or ( $s2 <= $s1 and $e2 >= $s1 ) )
        {
            my @sort = sort { $a <=> $b } ( $s1, $e1, $s2, $e2 );
            if ( $y > $x ) { $splice = $y, $target = $x }
            if ( $y < $x ) { $splice = $x, $target = $y }
            my $temp = splice( @in, $splice, 1 );
            $in[$target][0] = $sort[0];
            $in[$target][1] = $sort[3];
            $y--;
        }
    }
}
print Dumper(@in);
```

## Roger Bell West {#roger-bell-west1}

[Roger Bell West's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/roger-bell-west/perl/ch-1.pl) takes intervals as `sort`ed pairs of numbers from `@ARGV`. The overall list of intervals is not sorted, and so Roger does an O(n²) nested loop:

```perl
my @i;
while (@ARGV) {
    if ( scalar @ARGV > 1 ) {
        push @i, [ sort ( shift @ARGV, shift @ARGV ) ];
    }
}

my $dirty = 1;
while ($dirty) {
    $dirty = 0;
  OUTER:
    foreach my $a ( 0 .. $#i - 1 ) {
        foreach my $b ( $a + 1 .. $#i ) {
            if ( $i[$a][1] >= $i[$b][0] ) {
                $i[$a][1] = $i[$b][1];
                splice @i, $b, 1;
                $dirty = 1;
                last OUTER;
            }
        }
    }
}
my @o;
foreach my $range (@i) {
    push @o, '[' . $range->[0] . ', ' . $range->[1] . ']';
}
print join( ', ', @o ), "\n";
```

When given the input `2 4  3 5  6 8  7 10`, it outputs `[2,5], [6,8], [10,7]`, while I would expect `[2,5], [6,10]`. The problem is that each interval is passed through `sort` with the default comparison, which is stringwise, so 10 is lexically less than 7. The fix is simple:

```perl
        push @i, [ sort { $a <=> $b } ( shift @ARGV, shift @ARGV ) ];
```

## Ruben Westerberg {#ruben-westerberg1}

[Ruben Westerberg's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/ruben-westerberg/perl/ch-1.pl) accepts a string input, and pushes all parsed intervals into an array of hash refs, and then sorts them:

```perl
my $input = join "", @ARGV;
$input = "[2,7], [3,9], [10,12], [15,19], [18,22]" unless @ARGV;
$input =~ s/\s+//g;
my @ranges;

while ( $input =~ /\[(\d+)\,(\d+)\]/g ) {
    push @ranges, { start => int($1), end => int($2) };
}
@ranges = sort { $a->{start} > $b->{start} } @ranges;
```

After that, Ruben builds up a new `@merged` array of intervals with an O(n²) nested loop:

```perl
my @merged;
while (@ranges) {
    my $test = shift @ranges;
    @ranges = map {
        do {
            my $c1 = ( $_->{start} <= $test->{start} )
              && ( $test->{start} <= $_->{end} );
            my $c2 = ( $test->{start} <= $_->{start} )
              && ( $_->{start} <= $test->{end} );
            if ( $c1 || $c2 ) {
                $test->{start} = List::Util::min $_->{start}, $test->{start};
                $test->{end}   = List::Util::max $_->{end},   $test->{end};
                ();
            }
            else {
                $_;
            }
        }
    } @ranges;
    push @merged, $test;
}
printf "Merged Ranges: %s\n", join ",",
  map { sprintf( "[%s,%s]", $_->{start}, $_->{end} ) } @merged;
```

## Ryan Thompson {#ryan-thompson1}

[My solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/ryan-thompson/perl/ch-1.pl) sorts and then does an O(n) traversal with `reduce`:

```perl
use List::Util qw/reduce/;
sub merge_int {
    reduce {
        (@$a and $a->[-1][1] >= $b->[0]) ?
            $a->[-1] = [ $a->[-1][0], $b->[1] ] : push @$a, $b;
        $a;
    } [] => sort { $a->[0] <=> $b->[0] } @_;
}
```

Using `reduce` wasn't strictly necessary, but it felt appropriate, here. The relatively common trick of feeding a first argument to `reduce` allows me to use `reduce` to build up a new array (ref).

**Blog** › [Merge Intervals](http://ry.ca/2020/03/merge-intervals/)

## Saif Ahmed {#saiftynet1}

[Saif Ahmed's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/saiftynet/perl/ch-1.pl) sorts and then iterates through, using `splice` to merge in place. The `merge` sub is a simple helper to return the merged result of two intervals:

```perl
# The mergeIntervals takes a list of intervals, sorts them and merges where possible
sub mergeIntervals {
    my @toMerge =
      sort { $$a[0] <=> $$b[0] } @_;    # sort intervals on the intervals' start
    my $pointer = our $merges = 0;
    while ( $pointer < $#toMerge ) {  # check two adjacent intervals for merging
        splice @toMerge, $pointer, 2,
          merge( $toMerge[$pointer], $toMerge[ $pointer + 1 ] );
        $pointer++ unless $merges;    # unless merging can move to next set
        $merges = 0;                  # reset merges flag
    }
    return @toMerge;

    sub merge {    # for sorted pair, pair will merge if start of second is
        my ( $a, $b ) =
          @_;      # less or equal to end of first. When a merge happens,
                   # start is the start of first, and end is the largest
                   # of either ends
        return ( [ $$a[0], $$a[1] > $$b[1] ? $$a[1] : $$b[1] ] )
          if $$a[1] >= $$b[0] and $merges = 1;  # a merge happens and is flagged
        return ( $a, $b );    # if not merged, returns the pair
    }
}
```

## Sol DeMuth {#sol-demuth1}

[Sol DeMuth's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/sol-demuth/perl/ch-1.pl) does a `sort` and then an O(n) traversal with an in-place merge thanks to `splice`:

```perl
my @sets = (
    [2,7], [3,9], [10,12], [15,19], [18,22],
);
@sets = sort {
    (
        $a->[0] <=> $b->[0]
    ) || (
        $a->[1] <=> $b->[1]
    )
} @sets;

my $cur = undef;
my $i   = 0; # cleaner than for loop, IMHO
foreach my $nxt (@sets) {
    if (
           !$cur # start
        || $cur->[1] < $nxt->[0] # no overlap, increment
    ) {
        $cur = $nxt;
    } else {
        # part overlap, next interval ends after current
        if ($cur->[1] < $nxt->[1]) {
            # current takes end of next
            $cur->[1] = $nxt->[1];
        }
        # consume next
        splice @sets, $i, 1;
    }
    $i++;
}
print "Merged:\n" . dumpSets(@sets);
sub dumpSets { # convenience for printing sets of intervals
    return join(', ',
        map { '[' . $_->[0] . ', ' . $_->[1] . ']' } @_
    ) . "\n";
}
```

This O(*n* log *n*) solution is clean, and works well.

## Jen Guerra {#southpawgeek1}

[Jen Guerra's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/southpawgeek/perl/ch-1.pl) features a lot of debug statements and internal documentation which paint a picture of exactly how the merge happens. I've removed those statements so we can take a higher level look at the algorithm, but please click the solution link if you want to see the original. Here is the `merge` sub that does it all:

```perl
sub merge {
    my $set = shift;
    my @ints = "@$set" =~ /(-?\d+)/g;
    my %no_same_lo;
    while (@ints) {
        my $lo = shift @ints;
        my $hi = shift @ints;
        ($lo, $hi) = ($hi, $lo) if $lo > $hi;
        $no_same_lo{$lo} = $hi
            unless defined($no_same_lo{$lo} && $no_same_lo{$lo} <= $hi);
    }
    foreach my $lo (sort {$a <=> $b} keys %no_same_lo) {
        push @ints, ($lo, $no_same_lo{$lo});
    }
```

So, we now have an array of intervals (`@ints`) that has been `sort`ed numerically by lower bound. Below, Jen will build up the `@merged` array with a linear traversal through `@ints`:

```perl
    my @merged;
    my ($lo, $hi);
    while (scalar @ints) {
        $lo = shift @ints;
        $hi = shift @ints;
        if (scalar @ints) {
            my $nextlo = shift @ints;
            my $nexthi = shift @ints;
            if ($hi >= $nextlo) {
                $nexthi = $hi if $hi > $nexthi;
                unshift @ints, ($lo, $nexthi);
                $hi = $nexthi;
            } else {
                push @merged, "[$lo,$hi]";
                unshift @ints, ($nextlo, $nexthi);
            }
        } else {
            push @merged, "[$lo,$hi]";
        }
    }
    say "@merged is the merged set. \n";
}
```

Jen has once again demonstrated an ability to produce a well-crafted and efficient solution. While I omitted the more verbose comments and debug statements to better fit this review format, I did appreciate them!

## User Person {#user-person1}

[User Person's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/user-person/perl/ch-1.pl) begins with an input and parsing section that builds up the initial `@sets` of intervals:

```perl
use List::MoreUtils qw( minmax );
my $input = "[2,7], [3,9], [10,12], [15,19], [18,22]";
$input = "@ARGV" if @ARGV;
$input =~ s{[][, ]+}{ }g;
$input =~ s{\A\s+|\s+\Z}{};
my @sets = split m{ }, $input;
print "UNMERGED:\n";
printSets @sets;
```

`printSets` (not shown) is a helper that pretty-prints the array of intervals. The `mergeUnits` sub is another helper, which merges two intervals (given by their index into `@sets`), with the help of `splice`:

```perl
sub mergeUnits {
    my @indicies = @_;
    my ($min, $max) = minmax ( $sets[$indicies[0]], $sets[$indicies[1]], $sets[$indicies[2]], $sets[$indicies[3]] );
    push @sets, $min;
    push @sets, $max;
    foreach ( sort { $b <=> $a } @indicies ) {
        splice @sets, $_, 1;
    }
}
```

Finally, User Person uses an O(n²) nested loop to compare and merge the intervals:

```perl
OUTER:
for (my $j=0; $j < $#sets; $j += 2) {
    for ( my $k=$j+2; $k < $#sets; $k += 2) {
        if ( $sets[$k] >= $sets[$j] and $sets[$k] <= $sets[$j+1]
                     or $sets[$k+1] >= $sets[$j] and $sets[$k+1] <= $sets[$j+1] ) {
            mergeUnits $j, $j+1, $k, $k+1;
            $j = -2;            # This resets OUTER loop to 0 after its double increment
            next OUTER;
        }
    }
}
```

There is a little bit of optimization, here, to avoid some unnecessary looping.

## Wanderdoc {#wanderdoc1}

[Wanderdoc's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/wanderdoc/perl/ch-1.pl) is essentially an unrolling algorithm. Wanderdoc creates an array of [`Bit::Vector`](https://metacpan.org/pod/Bit::Vector)s in `@veclist` (one for each interval in the sorted `@intervals`), and sets the bits in each of them that correspond to the numbers in the interval:

```perl
use Bit::Vector;
use List::Util qw(max);
my @intervals = ( [ 2, 7 ], [ 3, 9 ], [ 10, 12 ], [ 15, 19 ], [ 18, 22 ] );

# Pushing of, say, [10, 35] would not otherwise work correctly
@intervals = sort { $a->[0] <=> $b->[0] } @intervals;
my $max     = max( map @$_, @intervals );
my @veclist = Bit::Vector->new( $max + 1, scalar @intervals );
$veclist[$_]->Interval_Fill( @{ $intervals[$_] } ) for 0 .. $#veclist;
```

An empty result vector is created from an arbitrary member of `@veclist` with `$veclist[0]->Shadow`. Wanderdoc then iterates through `@veclist` and essentially calculates the union of all vectors by `->Or()`ing them together. However, to avoid merging adjacent intervals such as `[3,9]` and `[10,12]`, Wanderdoc needs a little extra logic to separate the results:

```perl
my @results;
my $res = $veclist[0]->Shadow();
for my $v (@veclist) {
    if ( $res->is_empty() ) {
        $res->Or( $res, $v );
    }
    else {
        # to prevent merging [3,9] and [10,12].
        if ( $v->Min() < $res->Max() ) {
            $res->Or( $res, $v );
        }
        else {
            my $res_p = $res->Clone();
            push @results, $res_p;
            $res->Empty();
            $res->Or( $res, $v );
        }
    }
}
push @results, $res;
print '[' . $_->to_Enum() . ']' for @results;
```

## Yet Ebreo {#yet-ebreo1}

[Yet Ebreo's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/yet-ebreo/perl/ch-1.pl) starts by `sort`ing the list of intervals, and then uses an O(n²) nested loop to find the intervals to be merged:

```perl
my @skip;
my @output;
my @range = ([10,12], [2,7], [3,9], [15,19], [18,22], [-1,3]);
@range = sort { @{$a}[0] - @{$b}[0] } @range;
for my $n (0..~-@range) {
    #Store interval in $o and $p then consider $p as $max
    my ($o,$p) = @{$range[$n]};
    my $max = $p;
    for my $m ($n+1..~-@range) {
        #Check next interval save to $q and $r
        my ($q,$r) = @{$range[$m]};
        #then check if $q is in between $o and $p
        if (($q>$o) && ($q<=$p)) {
            #Consider $r as max if $r > $max
            $max = $r if $r>$max;
            #Remove interval $m from list (by adding it in @skip array)
            push @skip, $m
        }
    }
    #Update output with the new interval if
    #$n can not be found in " @skip " using regex
    " @skip " !~ / $n / && push @output, [$o,$max];
}
```

### A note on `~-`

One thing that you don't see much outside of code golf is an expression like `~-@range`. For the uninitiated, this is colloquially known as the "inchworm-on-a-stick" operator, and has roots that predate Perl. From the context, you might correctly guess that the loop is iterating over the indices of `@range`, but it may not be immediately obvious *why* that works:

The `~-` operators (i.e., unary `~` and unary `-`) are together doing a sort of double negation of the scalar value of `@foo` with two different binary number representations. Let's say `@foo` has 3 elements, so `-@foo == -3`. Why does `~(-@foo) == ~(-3) == 2`?

`~` does a [ones complement negation](https://en.wikipedia.org/wiki/Ones%27_complement), but `-` (at least on all the CPUs I have that can run Perl) is twos complement. See also [`perlop`](https://perldoc.perl.org/perlop.html#Symbolic-Unary-Operators) and [`perlnumber`](https://perldoc.perl.org/perlnumber.html#Storing-numbers).

```
      Expr   Decimal  Binary
   --------+--------+-----------------------
      @foo |    3   | 0000 ... 0011
     -@foo |   -3   | 1111 ... 1101 (2's c!)
    ~-@foo |    2   | 0000 ... 0010 (1's c!)
```

Personally, I'd go with the purpose-built `$#foo` to get the same result and even save a keystroke, but to each their own! That being said, I'll take almost any excuse to dive into a discussion on integer representations.

***

***

# Task #2 - Noble Integer {#task2}

Here is Mohammad's description, in part:

*You are given a list, @L, of three or more random integers between 1 and 50.  A Noble Integer is an integer N in @L, such that there are exactly N integers greater than N in @L. Output any Noble Integer found in @L, or an empty list if none were found.*

Note that although Mohammad gave me credit for contributing this task, all I really did was suggest some wording changes.

## Types of solutions

### Nested List O(n²)

This approach involves iterating through the list of integers, and then having an inner loop iterate through again to count how many integers are greater than the current integer. It's a straightforward O(n²) solution.

### Sort, then loop

By `sort`ing the list of integers first, you can avoid the inner loop altogether, and subtract the index of the integer from the last array index (`$#L`) to get the number of integers greater than the current one. For example, if the (sorted) list is `1 2 4 8`, the array (and its indices) looks like this:

```
    idx | $L[idx]
    ----+-------
     0  |    1
     1  |    2
     2  |    4
     3  |    8
```

Thus, 2 (`$L[1]`) is a Noble Integer in this list, because `$L[$idx] == $#L - $idx`, or `2 == 3 - 1`. That is the basis of this O(*n* log *n*) algorithm.

## Can there be multiple Noble integers?

Several hackers took the time to answer the question of whether a list can contain multiple Noble integers, either in a code comment, or a blog entry. The short answer is, "no".

The slightly longer answer, summarized from my [blog post](http://www.ry.ca/2020/03/noble-integers/) is that if there is a Noble integer *n* in a list *L*, there are also *n* integers greater than *n,* by definition. Now suppose there is a second Noble integer, *x,* with *x* > *n.* That would mean there are at least *n* + 1 integers greater than *n,* but there are only *n* integers greater than *n,* so there is a contradiction, and, therefore there cannot be more than one Noble integer in a list.

***

## Alexander Karelas {#alexander-karelas2}

[Alexander Karelas's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/alexander-karelas/perl/ch-2.pl) first sorts the list, and then iterates through it to look for a number where the `$i`th element of `@l` equals `$i`:

```perl
my @L = (2, 6, 1, 3);
my @l = sort { $b <=> $a } @L;
my $noble;
for (my $i = 0; $i < @l and $l[$i] >= $i; $i++) {
    $noble = $i if $l[$i] == $i;
}
say defined $noble ? "Noble integer is: $noble" : "There is no noble integer in this set";
```

## Alicia Bielsa {#alicia-bielsa2}

[Alicia Bielsa's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/alicia-bielsa/perl/ch-2.pl) has a `findNobleIntegers` sub that does exactly what it says:

```perl
sub findNobleIntegers {
    my @aIntegers = @_;
    my @aNoble    = ();
    foreach my $integer (@aIntegers) {
        my $countGreater = 0;
        foreach my $integerToCompare (@aIntegers) {
            if ( $integerToCompare > $integer ) {
                $countGreater++;
            }
        }
        if ( $integer == $countGreater ) {
            push( @aNoble, $integer );
        }
    }
    return @aNoble;
}
```

Alicia's code uses a nested loop to check whether `$integer` has exactly `$integer` numbers greater than itself in the list. This approach avoids the `sort`, but at the cost of O(n²) efficiency. For small lists, there will not be much difference, however.

## Andrezgz {#andrezgz2}

[Andrezgz's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/andrezgz/perl/ch-2.pl) first sorts the list, and then uses a nested loop to count the number of greater integers:

```perl
my $elements = shift || 3;
my @L = sort {$a <=> $b} map { int(rand(49)) + 1 } 1..$elements;
print 'List: ' . join ',', @L;
my @nobles;
for my $n (@L) {
    my $greater = grep { $_ > $n} @L;
    push @nobles, $n if $greater == $n;
}
print "\nNoble Integers: ", join ',', @nobles;
```

## Cheok-Yin Fung {#cheok-yin-fung2}

[Cheok-Yin Fung's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/cheok-yin-fung/perl/ch-2.pl) first sorts the list, and then uses array indices to determine whether a number is Noble or not:

```perl
my @L = @ARGV; #usage: perl ch-2.pl 2 6 1 3
@L = sort {$a <=> $b} @L;
my $i=0;
while ($i<=$#L) {
    if ($L[$i] == $#L-$i ) {print $L[$i]; exit;}
    $i++;
}
print "-1";
```

## Colin Crain {#colin-crain2}

[Colin Crain's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/colin-crain/perl/ch-2.pl), in Colin's typical style I like so much, includes a rather robust (112 line) comment at the top of the code, which is well worth a read, and a chuckle or two. That comment includes a solid proof for the question of whether a list can have multiple Noble integers or not, with his own [colour commentary](https://en.wikipedia.org/wiki/Color_commentator).

```perl
my @list = make_list();
my ($noble) = grep { validate($_, @list) } @list;
## output
say scalar @list, " elements generated";
say join ', ', @list;
say $noble ? "the number $noble is the Noble Integer"
           : "there is no Noble Integer for this list";

sub validate {
## given a scalar and a list, returns true if the number of list elements greater than the
## scalar is equal to the scalar
    my ($candidate, @list) = @_;
    return scalar( grep { $candidate < $_ } @list ) == $candidate ? 1 : 0;
}
```

Colin has gone with the O(n²) nested loop approach, as `validate` is called from the top-level `grep` on line 2.

## Cristina Heredia {#cristian-heredia2}

[Cristina Heredia's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/cristian-heredia/perl/ch-2.pl) uses an O(n²) nested loop to find the Noble integer, if it exists:

```perl
sub analizeArray {
    for ( my $j = 0 ; $j < $sizeArray ; $j++ ) {
        for ( my $k = 0 ; $k < $sizeArray ; $k++ ) {
            if ( $j == $k ) {
            }
            elsif ( $array[$j] < $array[$k] ) {
                $total++;
            }
        }
        if ( $total eq $array[$j] ) {
            $result = $result . "$array[$j] ";
        }
        $total = 0;
    }
    resultMessage();
}
```

## Dave Cross {#dave-cross2}

[Dave Cross's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/dave-cross/perl/ch-2.pl) O(n²) nested loop is neat and concise:

```perl
for my $i (@ARGV) {
    say "$i is a Noble Integer" if scalar (grep { $_ > $i } @ARGV) == $i;
}
```

## Dave Jacoby {#dave-jacoby2}

[Dave Jacoby's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/dave-jacoby/perl/ch-2.pl) sorts the list, and then does an O(n²) nested loop to find the Noble integer:

```perl
use feature qw{ postderef say signatures state switch };
no warnings
  qw{ experimental::postderef experimental::smartmatch experimental::signatures };
use List::Util qw{ uniq };

sub nobles ( @list ) {
    my @copy = @list;
    @list = uniq sort { $a <=> $b } @list;
    my @output;
    while (@list) {
        my $i = shift @list;
        my @i = grep { $_ == $i } @copy;
        push @output, @i if $i == scalar @list;
    }
    return @output;
}
```

**Blog** › [Perl Challenge #50](https://jacoby.github.io/2020/03/02/perl-challenge-50.html)

## Duncan C. White {#duncan-c-white2}

[Duncan C. White's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/duncan-c-white/perl/ch-2.pl) starts by finding the unique integers in the given list (in this case, `@ARGV`):

```perl
use Function::Parameters;
# remove duplicate items by turning list into set..
my %set = map { $_ => 1 } @ARGV;
# and finding the (distinct) keys of that set..
my @l = keys %set;
my @noble = find_all_noble( @l );
```

Then, the `find_all_noble` function uses a nested loop to find the answer:

```perl
say "noble: $_" for @noble;
fun find_all_noble( @l ) {
    my @noble;
    foreach my $element (@l) {
        my $ngt = grep { $_ > $element } @l;
        push @noble, $element if $element == $ngt;
    }
    return @noble;
}
```

## E. Choroba {#e-choroba2}

[E. Choroba's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/e-choroba/perl/ch-2.pl) sorts the input list and uses the array indices to determine the number of integers greater than `$s[$i]`.

```perl
sub noble_integer {
    my @s = sort { $b <=> $a } @_;
    my $c = 0;
    my @noble;
    for my $i (0 .. $#s) {
        push @noble, $s[$i] if $c == $s[$i];
        ++$c if $s[$i] != ($s[$i + 1] // $s[$i] + 1);
    }
    return @noble
}
```

There is also handling of duplicate integers, which is a nice touch. Choroba's blog also correctly speaks to the possibility of multiple Noble integers in a list.

**Blog** › [Merge Intervals and Noble Integer](http://blogs.perl.org/users/e_choroba/2020/03/perl-weekly-challenge-050-merge-intervals-and-noble-integer.html)

## Ian Rifkin {#ianrifkin2}

[Ian Rifkin's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/ianrifkin/perl/ch-2.pl) sorts and uses array indices to count the number of integers greater than the current one, `$L[$pos]`:

```perl
# Solution by Ian Rifkin
my @L = (2, 6, 1, 3); #List of number inputs
@L = sort { $a <=> $b } @L; #Sort numerically
my $length = scalar @L;
for (my $pos = 0; $pos < $length; $pos++) {
    #found a noble integer if it's value is equal to the amount of numbers after it
    say "Noble integer found: $L[$pos]" if $L[$pos] == $length - $pos - 1;
}
```

The C-style loop is fine, here, but could also be replaced by a more concise and Perlish `for my $pos (0..$#L)`. But [TIMTOWTDI](https://en.wikipedia.org/wiki/There%27s_more_than_one_way_to_do_it), of course!

## Jaldhar H. Vyas {#jaldhar-h-vyas2}

[Jaldhar H. Vyas's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/jaldhar-h-vyas/perl/ch-2.pl) is a concise array-index based implementation:

```perl
my @L = sort @ARGV;
my $size = scalar @L;
for (my $n = 0; $n < $size; $n++) {
    if ($L[$n] == $size - $n - 1) {
        say $L[$n];
    }
}
```

Again, `for my $n (0..$#L)` would be my choice, but that is merely a stylistic choice.

## Javier Luque {#javier-luque2}

[Javier Luque's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/javier-luque/perl/ch-2.pl) also sorts numerically and uses array indices to his advantage:

```perl
# Create @L
my @L = sort { $a <=> $b } map { int(rand(50) + 1) } ( 1 .. 50 );
my $i = 0;
my $total = scalar(@L);
# Output the list
say "List: " . join ', ', @L;
# Loop through each number
while ($i < $total) {
    # Skip duplicates
    if ($i + 1 < $total && $L[$i] != $L[$i + 1]) {
        say "Noble number found: " . $L[$i]
            if ($L[$i] == $total - $i - 1);
    }
    $i++;
}
```

Javier also has a good description of why there *can* be more than one Noble integer per list if duplicates are allowed, on his blog:

**Blog** › [050 – Perl Weekly Challenge](https://perlchallenges.wordpress.com/2020/03/02/perl-weekly-challenge-050/)

## Laurent Rosenfeld {#laurent-rosenfeld2}

[Laurent Rosenfeld's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/laurent-rosenfeld/perl/ch-2.pl) sorts his `@list` in *reverse* numerical order, which reduces the array index calculation to `$list[$_] == $_`. I love little simplifications like this.

```perl
my $list_size = int(rand 10) + 3;
my @list = map {int(rand 50) + 1 } 1..$list_size;
say $list_size, "/", "@list";
# my @list = (2, 6, 1, 3,5, 8);
@list = sort {$b <=> $a} @list; #descending sort
say $list_size, " / ", "@list";
for (0..$#list) {
    say "$list[$_] is noble." if $list[$_] == $_;
}
```

**Blog** › [Merge [Intervals] and Noble Numbers](http://blogs.perl.org/users/laurent_r/2020/03/perl-weekly-challenge-merge-inrervals-and-noble-numbers.html)

## Mohammad S Anwar {#mohammad-anwar2}

[Mohammad S Anwar's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/mohammad-anwar/perl/ch-2.pl) uses a new version of [`List::Util`](https://metacpan.org/pod/List::Util#sample) from CPAN to access the new `sample` sub introduced in last month's 1.54 release. `sample` is used here to generate a list of random integers:

```perl
use List::Util 1.54 qw(sample);
my $COUNT = $ARGV[0] || 3;
my @L = sort { $a <=> $b } sample ($COUNT, (1 .. 50));
```

I appreciate Mohammad highlighting new features in common modules. I look forward to `sample` making its way into the core Perl version of `List::Util`. For my review purposes, since I'm stuck offline and have an older `List::Util`, I had to modify the above code as follows:

```perl
# Ryan's hack
use List::Util qw< uniq >;
my @L = uniq sort { $a <=> $b } map { 1 + int rand(50) } 1..$COUNT;
```

(I may end up with less than `$COUNT` items, but that's not important enough to fix.)

Here is the actual `find_noble_number` sub, which uses a nested loop for the O(n²) approach:

```perl
sub find_noble_number {
    my (@L) = @_;
    foreach my $N (@L) {
        return $N if (scalar( grep { $_ > $N } @L ) == $N);
    }
    return;
}
```

**Blog** › [BLOG: The Weekly Challenge #050](https://perlweeklychallenge.org/blog/weekly-challenge-050/)

## Phillip Harris {#phillip-harris2}

[Phillip Harris's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/phillip-harris/perl/ch-2.pl) is a concise array-index based loop:

```perl
@L = sort { $a <=> $b } ( 2, 6, 1, 3 );
for ( $pos = 0 ; $pos <= $#L ; $pos++ ) {
    if ( $L[$pos] == $#L - $pos ) {
        print $L[$pos] . "\n";
    }
}
```

## Roger Bell West {#roger-bell-west2}

[Roger Bell West's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/roger-bell-west/perl/ch-2.pl) also uses array indices:

```perl
sub noble {
    my @l = sort @_;
    my @r;
    foreach my $m (0..$#l) {
        if ( $l[$m] == $#l - $m ) {
            push @r, $l[$m];
        }
    }
    return @r;
}
```

## Ruben Westerberg {#ruben-westerberg2}

[Ruben Westerberg's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/ruben-westerberg/perl/ch-2.pl) uses array indices, but notably, does so with a slice of his (sorted) input `@list`:

```perl
my @list= sort {$a > $b} map {int rand 50} 1..$size;
print "Sorted Input list: ",
join(",", @list),"\n";
print "Noble Integers found: ", join ", ", @list[grep { @list-$_-1 == $list[$_] } 0..@list-1];
```

## Ryan Thompson {#ryan-thompson2}

[My solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/ryan-thompson/perl/ch-2.pl) sorts and then uses array indices to find the Noble integer:

```perl
sub noble {
    my @L = sort { $a <=> $b } @_;
    map { $L[$_] } grep { $L[$_] == $#L - $_ } 0..$#L;
}
```

**Blog** › [Noble Integers](http://ry.ca/2020/03/noble-integers/)

## Saif Ahmed {#saiftynet2}

[Saif Ahmed's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/saiftynet/perl/ch-2.pl) sorts and uses array indices to find the Noble integer, if there is one:

```perl
sub findNobel {
    @l     = sort { $a <=> $b } @_;    # sort the list first
    $found = 0;                        # intialise $found to zero
    foreach ( 0 .. $#l ) {             # look through elements
            # when a nobel element is found, report, set $found and exit
        print "Found Nobel Number $l[$_] " and $found = 1 and last
          if $l[$_] == ( $#l - $_ );
    }
    print "No Nobel numbers" unless $found;    # $found not set if not found
    print " in " . ( join ",", @l ), "\n";     # either way, print out the list
}
```

## Sol DeMuth {#sol-demuth2}

[Sol DeMuth's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/sol-demuth/perl/ch-2.pl) uses an O(n²) nested loop, which includes perhaps the most concise rationale I have seen for the existence of a single Noble integer:

```perl
foreach my $i (sort { $a <=> $b } @L) {
    if (scalar(grep {$_ > $i} @L) == $i) {
        print "Noble Integer: $i\n";
        # there cannot be multiple in a list because
        # the next greater noble integer nullifies the
        # the previous smaller noble integer
        last;
    }
}
```

## Jen Guerra {#southpawgeek2}

[Jen Guerra's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/southpawgeek/perl/ch-2.pl) uses array indices as well:

```perl
sub noble {
    my $L = shift;
    @{$L} = sort {$a <=> $b} @{$L};
    my $noble = 0;
    say 'Given set: ', "@{$L}";
    my $last_index = scalar @{$L} - 1;
    foreach my $i (0 .. $#{$L}) {
        $noble = $_->[$i] if $_->[$i] == $last_index - $i;
    }
    return "No Noble integer." unless $noble;
    return "$noble is the Noble integer. \n";
}
```

## Ulrich Rieke {#ulrich-rieke2}

[Ulrich Rieke's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/ulrich-rieke/perl/ch-2.pl) includes a `findNobles` sub that takes a reference to an array of random integers. It begins by de-duping and sorting the list into `@sorted`:

```perl
sub findNobles {
    my $randoms = shift;
    my %randHash;
    for my $elem ( @{$randoms} ) {
        $randHash{$elem}++;
    }
    my @sorted = sort { $a <=> $b } keys %randHash;
    my $len    = scalar @sorted;
```

The real work then begins, and Ulrich uses array indices to full effect:

```perl
    my @nobles;
    foreach my $i ( 0 .. $len - 1 ) {
        if ( $sorted[$i] == $len - 1 - $i ) {
            push( @nobles, $sorted[$i] );
        }
    }
    return @nobles;
}
```

## User Person {#user-person2}

[User Person's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/user-person/perl/ch-2.pl) starts by sorting the input into `@ints`, and then uses a nested loop to find the Noble integer, kept in `%seen`.

```perl
sub nobleInt {
    my @ints = sort { $a <=> $b } @_;
    my %seen = ();
    for (my $i = 0; $i <= $#ints; ++$i) {
        my $count = 0;
      MOV:
        for (my $j = 0; $j <= $#ints; ++$j) {
            next MOV if $i == $j;
            ++$count if $ints[$i] < $ints[$j];
        }
        $seen{ $ints[$i] }++ if $count == $ints[$i];
    }
    return keys %seen;
}
```

## Wanderdoc {#wanderdoc2}

[Wanderdoc's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/wanderdoc/perl/ch-2.pl) also uses `sample` from the latest (2020-Feb-02) `List::Util`:

```perl
use List::Util qw(sample);
my $MIN = 1;
my $MAX = 50;
my $SAMPLE = 20;
my @range = ($MIN .. $MAX);
noble(\@range, $SAMPLE) for 1 .. 20;

sub noble {
     my ($aref, $n) = @_;
     my @list = sort {$a <=> $b} sample($n, @$aref);
     for my $int ( @list ) {
          my $count = grep $_ > $int, @list;
          if ( $int == $count ) {
               print "1$/"; # "1: $int $count$/";
               return;
          }
     }
     print "-1$/";
}
```

Wanderdoc's nested loop solution works well. Note that Wanderdoc chose to effectively return a truth value instead of the actual Noble integer (1 if there was a Noble integer, -1 if there was not.)

## Yet Ebreo {#yet-ebreo2}

[Yet Ebreo's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-050/yet-ebreo/perl/ch-2.pl) uses `$sort` and an array index-based solution:

```perl
my @list = sort {$a - $b } split " ",$ARGV[0] || "2 6 1 3";
for my $i (0..~-@list) {
    say $list[$i] if ~-@list-$i == $list[$i]
}
```

***

***

## See Also {#blogs}

### Blogs this week:

**Dave Jacoby** › [Perl Challenge #50](https://jacoby.github.io/2020/03/02/perl-challenge-50.html)

**E. Choroba** › [Merge Intervals and Noble Integer](http://blogs.perl.org/users/e_choroba/2020/03/perl-weekly-challenge-050-merge-intervals-and-noble-integer.html)

**Javier Luque** › [050 – Perl Weekly Challenge](https://perlchallenges.wordpress.com/2020/03/02/perl-weekly-challenge-050/)

**Laurent Rosenfeld** › [Merge Inrervals and Noble Numbers](http://blogs.perl.org/users/laurent_r/2020/03/perl-weekly-challenge-merge-inrervals-and-noble-numbers.html)

**Luca Ferrari** › [overlapping ranges and nobel numbers](https://fluca1978.github.io/2020/03/02/PerlWeeklyChallenge50.html#task1)

**Mohammad S Anwar** › [The Weekly Challenge #050](https://perlweeklychallenge.org/blog/weekly-challenge-050/)

**Ryan Thompson** › [Merge Intervals](http://ry.ca/2020/03/merge-intervals/) | [Noble Integers](http://ry.ca/2020/03/noble-integers/)
