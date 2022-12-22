---
title: "Advent Calendar - December 21, 2022"
date: 2022-12-21T00:00:00+00:00
description: "Advent Calendar - December 21, 2022."
type: post
image: images/blog/2022-12-21.jpg
author: Jared Martin
tags: ["Perl"]
---

## [**Advent Calendar 2022**](/blog/advent-calendar-2022)
### | &nbsp; [**Day 20**](/blog/advent-calendar-2022-12-20) &nbsp; | &nbsp; **Day 21** &nbsp; | &nbsp; [**Day 22**](/blog/advent-calendar-2022-12-22) &nbsp; |
***

The gift is presented by `Jared Martin`. Today he is talking about his solution to [**"The Weekly Challenge - 127"**](/blog/perl-weekly-challenge-127). This is re-produced for **Advent Calendar 2022** from the original [**post**](https://blogs.perl.org/users/jared_martin/2021/08/twc-127-intersection-on-a-sunday-afternoon.html) by him.

***
<br>

## Intersection on a Sunday Afternoon

<br>

`Task 1, "Disjoint Sets"` was basically [**something I've done before somewhere else**](https://www.perlmonks.org/?node_id=898542). In fact, what I'm using is overkill for just determining if two sets intersect. I imagine most people would probably use the [**FAQ answer**](https://perldoc.perl.org/perlfaq4#How-do-I-compute-the-difference-of-two-arrays?-How-do-I-compute-the-intersection-of-two-arrays?). However, I'm a fan of what cardinal `LanX` of `Perl Monks` fame was trying to do in [**making set intersection a more "organic" operation**](https://www.perlmonks.org/?node_id=906065). I don't know how much those ideas developed, however, so I'll be looking at the other solutions to see if there's anything new.

I actually did use my perlmonks code on real problem a few years ago, in modified form. It does the trick pretty quickly compared to other approaches. Thanks perl hashing!

You can find my code for `Task #1` here:

<br>

```perl
#!/usr/bin/env perl

# TWC 127, TASK #1 : Disjoint Sets

use v5.012;
use strict;
use warnings;
use Getopt::Long;
use Pod::Usage;
use List::MoreUtils qw(uniq);

# For this challenge

# use Data::Dump qw(pp);

# Validate Input

Getopt::Long::Configure( 'bundling_values', 'ignorecase_always',
    'pass_through' );

GetOptions(
    'help|h!' => \( my $help ),
    'task|t!' => \( my $task ),
    'test'    => \( my $test )
);

pod2usage(1) if $help;
pod2usage( -exitval => 0, -verbose => 2 ) if $task;

$test ? test() : run(@ARGV);

exit;    # End of main script.

sub run {

    # Bundle up fatal input errors to report them all at once.

    my @errors;

    push @errors,
      "This script requires two strings: Each string defining a set."
      unless 2 == @_;

    my @sets;
    for my $set (@_) {
        if ( $set =~ /\A \s* [\[\(\{]? ( [-+\d,\s]* ) [\}\)\]]? \s* \Z/xms ) {
            my $setarray = [ split( /[\s,]+/, $1 ) ];
            for my $e (@$setarray) {
                push @errors, "The element, $e, is not an integer."
                  unless $e =~ /\A [-+]? \d+ \Z/xms;
            }
            push @sets, $setarray if @$setarray;
        }
        else {
            push @errors, "The set string, '$set', is not in correct format.";
        }
    }

    pod2usage( join "\n", map { "ERROR: " . $_ } @errors ) if @errors;

    # Get the solution.

    output_results( is_disjoint(@sets) );
}

exit;    # End of main script.

# The main algorithm.

sub is_disjoint {

    # This routine uses what I posted on perlmonks years ago:
    #     https://www.perlmonks.org/?node_id=898542
    #
    # It is overkill for two sets, but I would prefer it were there
    # to be three or more sets to check.

    my %soss;    # set of subsets

    for my $oldss (@_) {     # Input is list of arrays
        my @newss = map { @$_ } uniq map { $soss{$_} or [$_] } @$oldss;
        @soss{@newss} = ( \@newss ) x @newss;
    }

    return @_ == uniq values %soss;
}

# Report to STDOUT from user command line input.

sub output_results {

    say $_[0] ? '1 : Disjoint' : '0 : Not disjoint';

}

# Built in test for the algorithm function.

sub test {

    use Test::More;
    my @input;

    @input = ( [ 1, 2, 5, 3, 4, ], [ 4, 6, 7, 8, 9 ], );
    is_deeply( is_disjoint(@input), !1,
        "\@S1 = (1, 2, 5, 3, 4) & \@S2 = (4, 6, 7, 8, 9) are not disjoint." );

    @input = ( [ 1, 3, 5, 7, 9, ], [ 0, 2, 4, 6, 8 ], );
    is_deeply( is_disjoint(@input), !0,
        "\@S1 = (1, 3, 5, 7, 9) & \@S2 = (0, 2, 4, 6, 8) are disjoint." );

    done_testing();
}
```

<br>

`Task 2, "Conflict Intervals"` could have been turned into a repeat of `Task 1` if you replaced all the integer intervals with the subset of integers they represented. (So, for example, interval `(3, 7)` would become subset `(3, 4, 5, 6, 7)`.) But this time I am sure I went with the thundering herd and just did boundary checking on ranges against each other. As a nod to efficiency, I used first instead of grep at one point, but by the time you really need to use first instead of grep, you probably should consider the other big efficiency concern: Every interval is being compared to each interval that was in the list before it.

Conceivably, if you have hundreds or thousands of intervals and if you know that intersections will be high, you might gain some advantage by replacing intervals that intersect with their union. So, for example, if you have `(1,3)` and `(2, 5)` as intervals, you can replace them with the equivalent interval, `(1,5)`. Then as you go through the rest of the list you don't have to check as many cases.

But the examples are small and there is no test data set to run against, so it's probably best to exercise the old noodle with a little problem and not soak up too much of your free time with making it a bigger problem. Or so I say ;-)

You can find my code for `Task #2` here:

<br>

```perl
#!/usr/bin/env perl

# TWC 127, TASK #2 : Conflict Intervals

use v5.012;
use strict;
use warnings;
use Getopt::Long;
use Pod::Usage;
use List::Util qw(all first min max);
use List::MoreUtils qw(uniq);

# For this challenge

#use Data::Dump qw(pp);

# Validate Input

Getopt::Long::Configure( 'bundling_values', 'ignorecase_always',
    'pass_through' );

GetOptions(
    'help|h!' => \( my $help ),
    'task|t!' => \( my $task ),
    'test'    => \( my $test )
);

pod2usage(1) if $help;
pod2usage( -exitval => 0, -verbose => 2 ) if $task;

$test ? test() : run(@ARGV);

exit;    # End of main script.

sub run {

    # Bundle up fatal input errors to report them all at once.

    my @errors;

    push @errors, "This script requires input of intervals as strings"
      unless @_;

    my $list = join( ' ', @_ );

    $list =~ s/[^-0-9]+/ /xmsg;
    $list =~ s/\A \s+ | \s+ \Z//xms;

    push @errors, "Octal numbers not allowed" if $list =~ /\b0\d/;

    my @list = split( /\s+/, $list );

    push @errors, "Missing an endpoint somewhere" if @list % 2;

    push @errors, "Not all integers" unless all { /\A -? \d+ \Z/xms } @list;

    my @intervals;
    push @intervals, [ $list[ 2 * $_ ], $list[ 2 * $_ + 1 ] ]
      for 0 .. ( $#list / 2 );

    pod2usage( join "\n", map { "ERROR: " . $_ } @errors ) if @errors;

    # Get the solution.

    output_results( interval_intersections(@intervals) );
}

exit;    # End of main script.

# The main algorithm.

sub interval_intersections {

    my ( @ovals, @ivals );

    for my $ival (@_) {
        push @ovals, $ival if first { $ival->[1] >= $_->[0] }
                              grep { $ival->[0] <= $_->[1] } @ivals;
        push @ivals, $ival;
    }

    return @ovals;
}

# Report to STDOUT from user command line input.

sub output_results {

    say '[ ' . join( ', ', map { '(' . join( ',', @$_ ) . ')' } @_ ) . ' ]';

}

# Built in test for the algorithm function.

sub test {

    use Test::More;
    my ( @input, @output );

    @input = ( [ 1, 4 ], [ 3, 5 ], [ 6, 8 ], [ 12, 13 ], [ 3, 20 ] );
    @output = ( [ 3, 5 ], [ 3, 20 ] );

    is_deeply( [ interval_intersections(@input) ],
        \@output, "First example, passed" );

    @input = ( [ 3, 4 ], [ 5, 7 ], [ 6, 9 ], [ 10, 12 ], [ 13, 15 ] );
    @output = ( [ 6, 9 ] );
    is_deeply( [ interval_intersections(@input) ],
        \@output, "Second example, passed" );

    done_testing();
}
```

<br>

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

| &nbsp; [**Advent Calendar 2022**](/blog/advent-calendar-2022) &nbsp; |
