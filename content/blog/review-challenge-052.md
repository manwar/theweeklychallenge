---
author:       Ryan Thompson
date:         2020-03-31T00:00:00
description:  "Ryan Thompson › Perl Weekly Review #052"
tags:         ["perl"]
title:        "Ryan Thompson › Perl Weekly Review #052"
image:        images/blog/p5-review-challenge-052.jpg
type:         post
---

Continues from [previous week](/blog/review-challenge-051/).

Welcome to the Perl review for Week 052 of the Weekly Challenge! For a quick overview, go through the [original tasks](/blog/perl-weekly-challenge-052/) and [recap](/blog/recap-challenge-052/) of the weekly challenge.

## Getting in Touch

<a href="mailto:rjt@cpan.org"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Email me (Ryan) with any feedback about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

We'd greatly appreciate any feedback you'd like to give.

## Table of Contents

### [Task 1](#task1)

[ [Alicia Bielsa](#alicia-bielsa1)  | [Andrezgz](#andrezgz1)  | [Athanasius](#athanasius1)  | [Cheok-Yin Fung](#cheok-yin-fung1)  | [Colin Crain](#colin-crain1)  | [Cristina Heredia](#cristian-heredia1)  | [Dave Cross](#dave-cross1)  | [Dave Jacoby](#dave-jacoby1)  | [Duncan C. White](#duncan-c-white1)  | [E. Choroba](#e-choroba1)  | [Javier Luque](#javier-luque1)  | [Laurent Rosenfeld](#laurent-rosenfeld1)  | [Lubos Kolouch](#lubos-kolouch1)  | [Markus Holzer](#markus-holzer1)  | [Mohammad S Anwar](#mohammad-anwar1)  | [Roger Bell West](#roger-bell-west1)  | [Ruben Westerberg](#ruben-westerberg1)  | [Ryan Thompson](#ryan-thompson1)  | [Saif Ahmed](#saiftynet1)  | [User Person](#user-person1)  | [Wanderdoc](#wanderdoc1)  | [Yet Ebreo](#yet-ebreo1)  ]

### [Task 2](#task2)

[ [Alicia Bielsa](#alicia-bielsa2)  | [Andrezgz](#andrezgz2)  | [Athanasius](#athanasius2)  | [Cheok-Yin Fung](#cheok-yin-fung2)  | [Colin Crain](#colin-crain2)  | [Cristina Heredia](#cristian-heredia2)  | [Dave Cross](#dave-cross2)  | [Dave Jacoby](#dave-jacoby2)  | [Duncan C. White](#duncan-c-white2)  | [E. Choroba](#e-choroba2)  | [Javier Luque](#javier-luque2)  | [Laurent Rosenfeld](#laurent-rosenfeld2)  | [Lubos Kolouch](#lubos-kolouch2)  | [Mohammad S Anwar](#mohammad-anwar2)  | [Roger Bell West](#roger-bell-west2)  | [Ruben Westerberg](#ruben-westerberg2)  | [Ryan Thompson](#ryan-thompson2)  | [Saif Ahmed](#saiftynet2)  | [User Person](#user-person2)  | [Wanderdoc](#wanderdoc2)  | [Yet Ebreo](#yet-ebreo2)  ]

### [Blogs](#blogs)

***

***

# Task #1 - Stepping Numbers {#task1}

Here is Mohammad's description:

*Write a script to accept two numbers between 100 and 999. It should then print all Stepping Numbers between them.*

*A number is called a stepping number if the adjacent digits have a difference of 1. For example, 456 is a stepping number but 129 is not.*

***

## Differing Interpretations

This task, while seemingly simple, ended up having two interpretations, of similar popularity:

1. Digits must be strictly increasing or strictly decreasing, monotonically.  This means 789 and 987 are valid, but 989 is not.

2. Digits can increase or decrease. This means 789, 987, and 989 are all valid.

As to a "right" answer, Mohammad and I both independently took the 2nd interpretation, as did quite a few others. Then again, [OEIS A033075](https://oeis.org/A033075) and all of the resources that I was able to find on Stepping Numbers point to #2 as well.

Given that, I think everyone gets a gold Kleene star this week.

## Solution Types

### Check every number

The most straightforward way is to check every number to see if neighbouring digits differ by 1. There isn't much to say about this method. It's O(n) on all numbers checked if the number length is constant, as in this task where only the numbers 100..999 are specified. If the number size is a variable, the algorithm becomes O(dn), where **d** is the number of digits in the number.

Within this category, there are a few different approaches to actually checking whether a number is a stepping number. Most people simply looked at each pair of digits and checked whether they differed by 1. A few people used other tricks, like regexes.

### Recursion

[E. Choroba](#e-choroba1) used recursion to do a BFS traversal to build up stepping numbers one digit at a time.

### Constructive

[My solution](#ryan-thompson1), while only implementing the stricter interpretation, went about it in a unique way.

***

## Alicia Bielsa {#alicia-bielsa1}

[Alicia Bielsa's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/alicia-bielsa/perl/ch-1.pl) accepts two numbers between 100 and 999 for the range, and outputs all stepping numbers in between. She tests each number between `$numberFrom` and `$numberTo`, checking whether each pair of digits differs by 1 (or -1):

```perl
foreach my $number ($numberFrom..$numberTo) {
    my @aDigits = split('', $number);
    my $isSteppingNumber = 1;
    foreach my $i (1..$#aDigits){
        my $diff = $aDigits[$i] - $aDigits[$i-1];
        if ( $diff != 1 && $diff != -1 ){
            $isSteppingNumber = 0;
        }
    }
    if ($isSteppingNumber){
        print "$number\n";
    }
}
```

## Andrezgz {#andrezgz1}

[Andrezgz's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/andrezgz/perl/ch-1.pl) also loops and `split`s, and additionally uses `abs` to save having to check for positive and negative differences:

```perl
my ( $begin, $end ) = @ARGV;
($begin, $end) = ($end, $begin) if $end < $begin;

for ($begin .. $end) {
    my @d = split //;
    next if abs($d[0] - $d[1]) != 1 ||
            abs($d[1] - $d[2]) != 1;
    say $_;
}
```

## Athanasius {#athanasius1}

[Athanasius's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/athanasius/perl/ch-1.pl) has all of the stepping numbers hard coded:

```perl
const my @STEPPING_NUMS =>
         (
                  101, 121, 123,
             210, 212, 232, 234,
             321, 323, 343, 345,
             432, 434, 454, 456,
             543, 545, 565, 567,
             654, 656, 676, 678,
             765, 767, 787, 789,
             876, 878, 898,
             987, 989,
         );
```

Once the `$lower` and `$higher` bounds are established, Athanasius loops
through `@STEPPING_NUMS` and returns the ones that are between the bounds.

```perl
    my ($lower, $higher) =  @ARGV;
    $lower <= $_ && $_ <= $higher and push @solution, $_ for @STEPPING_NUMS;
```

## Cheok-Yin Fung {#cheok-yin-fung1}

[Cheok-Yin Fung's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/cheok-yin-fung/perl/ch-1.pl) loops over the input range, and calls `diff($digit_a, $digit_b)` for both pairs of digits in a 3-digit number:

```perl
sub diff {
    if (($_[0]-$_[1] == 1) or ($_[0]-$_[1] == -1)) {
        return 1;
    } else {return undef;}
}

(my $head, my $tail) = @ARGV;

foreach ($head..$tail) {
    my $num = $_;
    (my $h, my $t, my $d) = split //, $num;
    print "$num\n" if (diff($h,$t) && diff($t,$d));
}
```

Cheok Yin has started blogging about the Perl Weekly Challenge. Apparently it was at least in part thanks to the encouragement from Mohammad and me. It worked once, so maybe it'll work again: to anyone who isn't already blogging about the Challenge, I heartily encourage you to start! If you don't already have a blog, you can always make one at [blogs.perl.org](http://blogs.perl.org).

**Blog** › [CY's Take on Perl Weekly Challenge #052](http://blogs.perl.org/users/c_y_fung/2020/03/cys-take-on-perl-weekly-challenge-052.html)

## Colin Crain {#colin-crain1}

[Colin Crain's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/colin-crain/perl/ch-1.pl) calls his `stepping` function for every number in the input range:

```perl
my ($low, $high) = sort {$a <=> $b} @ARGV;

my @output = grep { stepping($_) } ($low..$high);

say for @output;

sub stepping {
    my $num = shift;
    my ($a, $b, $c) = split //, $num;
    abs( $a - $b ) == 1 && abs( $b - $c ) == 1 ? 1 : 0;
}
```

We see here another version of `split` and `abs` making easy work of the problem.

## Cristina Heredia {#cristian-heredia1}

[Cristina Heredia's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/cristian-heredia/perl/ch-1.pl) features `obtainSteppingNumbers`, which does the work of looping through the input range and calculating the digit differences. That sub appends the matching stepping numbers to a global, `$result`, which is later printed.

```perl
sub obtainSteppingNumbers {

    for (my $i=$firstNumber+'1'; $i < $secondNumber; $i++) {

        @aNumber = split(//,$i);
        $secondValor = $aNumber[0] + 1;
        $thirdValor = $aNumber[0] + 2;

        if ($secondValor == 10) {
            $secondValor = '0';
        }

        if ($thirdValor == 10) {
            $thirdValor = '0';
        }
        elsif ($thirdValor == 11) {
            $thirdValor = '1';
        }

        if ($secondValor != $thirdValor) {
            if ($aNumber[1] eq $secondValor and $aNumber[2] eq $thirdValor) {
                $result = $result.$i."\n";
            }
        }
    }
    message();
}
```

## Dave Cross {#dave-cross1}

[Dave Cross's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/dave-cross/perl/ch-1.pl) loops through and calls `is_stepping`. That sub uses `split` and arithmetic to see if a number is a stepping number:

```perl
use File::Basename;

my ( $start, $end ) = get_params();

for ( $start .. $end ) {
    say "$_ is a stepping number" if is_stepping($_);
}

sub is_stepping {
    my ($x) = @_;

    my @digits = split //, $x;
    for ( 0, 1 ) {
        return if $digits[$_] + 1 != $digits[ $_ + 1 ];
    }
    return 1;
}

sub get_params {
    my $me    = basename $0;
    my $usage = "Usage: $me start end\n";
    $usage .= "(where 'start' and 'end' are integers between 100 and 999)\n";

    die $usage if @ARGV < 2;

    for (@ARGV) {
        die $usage if /\D/;
        die $usage if length != 3;
    }

    return sort { $a <=> $b } @ARGV;
}
```

This does print out the reduced interpretation of stepping numbers, as Dave is only checking whether the digits are strictly increasing, as in the task's example.

## Dave Jacoby {#dave-jacoby1}

[Dave Jacoby's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/dave-jacoby/perl/ch-1.pl) loops, `split`s, and calls `off_by_one` for each digit pair in each number:

```perl
sub get_stepping_numbers ( $low, $high ) {
    my @output;
    for my $n ( $low .. $high ) {
        my @n = split //, $n;
        push @output, $n
            if off_by_one( $n[0], $n[1] ) && off_by_one( $n[1], $n[2] );
    }
    return @output;
}

sub off_by_one ( $i, $j ) {
    return 1 if $i == $j + 1;
    return 1 if $i == $j - 1;
    return 0;
}
```

**Blog** › [Minimax, British Coins and Old-School AI in Perl](https://jacoby.github.io/2020/03/16/minimax-british-coins-and-oldschool-ai-in-perl.html)

## Duncan C. White {#duncan-c-white1}

[Duncan C. White's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/duncan-c-white/perl/ch-1.pl) also only check ascending digits:

```perl
fun stepping( $x ) {
    my @digits = split(//,$x);
    my $prev = shift @digits;
    foreach my $next (@digits) {
        return 0 unless $next == $prev+1;
        $prev = $next;
    }
    return 1;
}
```

## E. Choroba {#e-choroba1}

[E. Choroba's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/e-choroba/perl/ch-1.pl) is recursive. The `prolong` sub does what it says: it takes a number (as a sequence of digits), and adds another digit that is valid for a stepping number (or pushes the `join`'d number to the result array, in the base case):

```perl
my $LENGTH = 3;

my @stepping_numbers;

sub prolong {
    my (@short) = @_;
    my $last = $short[-1];
    for my $next (grep $_ >= 0 && $_ <= 9, $last - 1, $last + 1) {
        if ($LENGTH == @short + 1) {
            push @stepping_numbers, join "", @short, $next;
        } else {
            prolong(@short, $next);
        }
    }
}

prolong($_) for 1 .. 9;
say for @stepping_numbers;
```

**Blog** › [Stepping Numbers & Lucky Winner](http://blogs.perl.org/users/e_choroba/2020/03/perl-weekly-challenge-052-stepping-numbers-lucky-winner.html)

## Javier Luque {#javier-luque1}

[Javier Luque's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/javier-luque/perl/ch-1.pl) loops, splits, and checks each digit pair:

```perl
for my $i ($start .. $end) {
    my $is_stepping = 1;
    my $prev_digit;

    my @digits = split ('', $i);
    for my $digit (@digits) {
        $is_stepping = 0 if
        ( defined($prev_digit) &&
            ( $prev_digit != $digit + 1 &&
              $prev_digit != $digit - 1) );
        $prev_digit = $digit;
    }
    say $i if ($is_stepping);
}
```

**Blog** › [Perl Weekly Challenge](https://perlchallenges.wordpress.com/2020/03/16/perl-weekly-challenge-052/)

## Laurent Rosenfeld {#laurent-rosenfeld1}

[Laurent Rosenfeld's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/laurent-rosenfeld/perl/ch-1.pl) also splits and checks each pair:

```perl
for my $num ($start..$end) {
    my @digits = split //, $num;
    if (abs($digits[0] - $digits[1]) == 1 &&
        abs($digits[1] - $digits[2]) == 1) {
        say "$num is a stepping number.";
    }
}
```

**Blog** › [Stepping Numbers and Lucky Winner](http://blogs.perl.org/users/laurent_r/2020/03/perl-weekly-challenge-stepping-numbers-and-lucky-winner.html)

## Lubos Kolouch {#lubos-kolouch1}

[Lubos Kolouch's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/lubos-kolouch/perl/ch-1.pl) defines an `is_stepping` sub that checks each digit pair:

```perl
sub is_stepping {
    my $number = shift;

    my $seq;

    for my $num (split(//, $number)) {
        unless (defined $seq) {
            $seq = $num;
            next;
        }
        return 0 if abs($num - $seq) != 1;
        $seq = $num;
    }

    return 1;
}
```

`is_stepping` is then called for every number in the range:

```perl
for ($from..$to) {
    say $_ if is_stepping($_);
}
```

## Markus Holzer {#markus-holzer1}

[Markus Holzer's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/markus-holzer/perl/ch-1.pl) structured his program the same way:

```perl
sub stepping {
    my @n = split '', shift;
    my $m = shift @n;

    for my $n ( @n ) {
        return unless abs($m - $n) == 1;
        $m = $n;
    }
    1;
}

my ($from, $to) = @ARGV;

print "$_\n" for grep { stepping($_) } $from .. $to;
```

## Mohammad S Anwar {#mohammad-anwar1}

[Mohammad S Anwar's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/mohammad-anwar/perl/ch-1.pl) loops through with `while`, and checks each digit pair. I note Mohammad's solution also assumed the stricter interpretation, regarding digits only increasing or decreasing:

```perl
while ($start <= $stop) {
    my ($d1, $d2, $d3) = split //, $start, 3;
    if ( ((($d1 - $d2) == 1) && (($d2 - $d3) == 1))
         || ((($d2 - $d1) == 1) && (($d3 - $d2) == 1)) ) {
        print "$start\n";
    }
    $start++;
}
```

**Blog** › [The Weekly Challenge #052](https://perlweeklychallenge.org/blog/weekly-challenge-052)

## Roger Bell West {#roger-bell-west1}

[Roger Bell West's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/roger-bell-west/perl/ch-1.pl) assumed strictly increasing digits:

```perl
my @a = @ARGV;

if ( $a[0] > $a[1] ) {
    @a = ( $a[1], $a[0] );
}

foreach my $c ( $a[0] .. $a[1] ) {
    my @d = split '', $c;
    my $v = 1;
    foreach my $i ( 0 .. $#d - 1 ) {
        if ( $d[$i] + 1 != $d[ $i + 1 ] ) {
            $v = 0;
            last;
        }
    }
    if ($v) {
        print "$c\n";
    }
}
```

## Ruben Westerberg {#ruben-westerberg1}

[Ruben Westerberg's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/ruben-westerberg/perl/ch-1.pl) also assumed strictly increasing digits:

```perl
for ( $start .. $end ) {
    my $prev;
    my $val = grep { $_ == 1 } map {

        #print "Number: $_\n";
        my @res;
        if ( !defined($prev) ) {
            @res = ();
        }
        else {
            @res = ( $_ - $prev );
        }
        $prev = $_;
        @res;
    } split "", $_;

    print "Stepping number: $_\n" if $val == length($_) - 1;
}
```

## Ryan Thompson {#ryan-thompson1}

[My solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/ryan-thompson/perl/ch-1.pl) generates all possible strictly increasing or decreasing `@step`ping numbers with the following loop:

```perl
my @step;
for my $n (1..9) {
    push @step, map { $n . join '',        $n+1..$_   }   $n..9;
    push @step, map { $n . join '', reverse  $_..$n-1 }    0..$n-1;
}
```

The whole algorithm is O(n) *on the matching numbers,* not on the entire search space. With the additional restriction, the maximum number is 9876543210, and there are only 90 numbers in the output list! Printing the 3-digit results is easy:

```perl
say join ' ', sort { $a <=> $b } grep 3 == length, @step;
```

I always do these challenges completely blind, so it was only when I started this weekly review that I discovered that some of us had a different interpretation of the problem.

**Blog** › [Stepping Numbers](http://ry.ca/2020/03/stepping-numbers/)

## Saif Ahmed {#saiftynet1}

[Saif Ahmed's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/saiftynet/perl/ch-1.pl) builds up the list of stepping numbers, up to 7 digits in length:

```perl
my @steppingNumbers;

# single digit numbers are just 1-9;
$steppingNumbers[1] = [ ( 1 .. 9 ) ];

# subsequent arrays are assembled from the previous array
foreach my $digitCount ( 2 .. 7 ) {
    foreach my $no ( @{ $steppingNumbers[ $digitCount - 1 ] } ) {
        my $lastDigit = ( split //, $no )[-1];
        # now continue adding digits one more or one less than the last digit
        # unless it will cause over or underflow
        push @{ $steppingNumbers[$digitCount] }, $no . ( $lastDigit - 1 )
            if $lastDigit ne "0";
        push @{ $steppingNumbers[$digitCount] }, $no . ( $lastDigit + 1 )
            if $lastDigit ne "9";
    }
}
```

The numbers themselves are stored in an array of arrays (AoA), by `$digitCount`, so all 3-digit stepping numbers would be in `$steppingNumbers[3]`. Printing them out is thus reasonably efficient:

```perl
foreach my $digits ( length $in1 .. length $in2 ) {
    foreach my $no ( @{ $steppingNumbers[$digits] } ) {
        print $no, " " if $no > $in1 and $no < $in2;
    }
}
```

## User Person {#user-person1}

[User Person's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/user-person/perl/ch-1.pl) also generates all stepping numbers, between 99 and 1000:

```perl
my @step = ();
my $UPPER_LIMIT = 1000;
my $LOWER_LIMIT = 99;

for (my $i = 1; $i < 10; ++$i) {
    if ($i < 8) { # UP UP
        push @step, ($i * 100) + ( $i + 1 ) * 10 + ($i + 2);
    }
    if ($i > 1) { # DOWN DOWN
        push @step, ($i * 100) + ( $i - 1 ) * 10 + ($i - 2);
    }
    if ($i < 9) { # UP DOWN
        push @step, ($i * 100) + ( $i + 1 ) * 10 + $i;
    }
    push @step, ($i * 100) + ( $i - 1 ) * 10 + $i; # DOWN UP
}
```

Printing the results is done by looping over `@step` and printing the numbers in range:

```perl
LOOP:
foreach (@step) {
    if ($_ >= $min and $_ <= $max) {
        print ", " if $commaFlag;
        print "$_";
        $commaFlag = 1;
    } elsif ($commaFlag) {
        last LOOP;
    }
}
print "\n" if $commaFlag;
```

## Wanderdoc {#wanderdoc1}

[Wanderdoc's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/wanderdoc/perl/ch-1.pl) also assumes strictly increasing or decreasing numbers:

```perl
use Getopt::Long;
use List::Util qw(first);

my %par = (low => 100, high => 999);

GetOptions(    "low|l=i"   => \$par{low},
              "high|h=i"   => \$par{high},)
or die("Error in command line!\n");
die "Numbers must be positive integers between 100 and 999!$/"
     if defined first { $_ <= 0 or $_ < 100 or $_ > 999 } values %par;
die "The second number must be bigger!$/" unless ($par{high} > $par{low});
```

I like the use of [`Getopt::Long`](https://metacpan.org/pod/Getopt::Long) and input validation.

Here is the stepping number generation:

```perl
my $NUM = $par{low};
while ( $NUM <= $par{high} ) {
    my @digits = split( //, $NUM );

    if ( (      1 == ( $digits[1] - $digits[0] )
            and 1 == ( $digits[2] - $digits[1] )
        )
        or (    1 == ( $digits[1] - $digits[2] )
            and 1 == ( $digits[0] - $digits[1] ) )
       )
    {
        print $NUM, $/;
    }

    $NUM++;
}
```

## Yet Ebreo {#yet-ebreo1}

[Yet Ebreo's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/yet-ebreo/perl/ch-1.pl) starts with the string `0123456789` and convolves the list of stepping numbers as the keys of `%hash`:

```perl
my @range = ($start..$end);
my $step  = "0123456789";
my $num   = "@range ";
my %hash;
say "List of stepping number(s) from $start to $end";
while ($step =~ s/(.)(.)(.)/$2$3/) {
    my ($l,$m,$r) = ($1,$2,$3);
    $num =~ "$l$m$r "   && $hash{$&}++;
    $num =~ "$r$m$l "   && $hash{$&}++;
    $num =~ "$l$m$l "   && $hash{$&}++;
    $num =~ "$m$l$m "   && $hash{$&}++;
    $num =~ "$r$m$r "   && $hash{$&}++;
    $num =~ "$m$r$m "   && $hash{$&}++;
};
say for sort {$a-$b} keys %hash;
```

Note first that `$num` is the string concatenation of all numbers in the input `@range`.

The `while` loop condition does some of the work: it captures the first three digits individually, and also replaces them with the second and third digits.  This removes the first character from `$step` and leaves the first three digits in `$1, $2, $3`.

The 3-digit stepping numbers are then found by regex matching all six valid combinations of `$l`, `$m`, and `$r`. If a particular sequence matches, the corresponding hash element is incremented, setting the key.

***

***

# Task #2 - Lucky Winner {#task2}

Mohammad's description:

*Suppose there are following coins arranged on a table in a line in random order.*

> £1, 50p, 1p, 10p, 5p, 20p, £2, 2p

*Suppose you are playing against the computer. Player can only pick one coin at a time from either ends. Find out the lucky winner, who has the larger amounts in total?*

***

The solutions for this task were quite long and diverse, ranging from simple user-driven simulations all the way up to relatively complex combinatorial game theory.

A strict interpretation of the task would suggest that *only* the given configuration of coins is valid. While I think most of us understood that, a few people made a deliberate choice to expand upon the task, since the given configuration has a trivial solution (the player who gets the £2 coin wins; and the player who goes first can always get that coin).

***

## Alicia Bielsa {#alicia-bielsa2}

[Alicia Bielsa's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/alicia-bielsa/perl/ch-2.pl) is probably best summarized with a design overview. She has the following `sub`s and data structures:

 * `%hCoinsValue` maps coins like `£1` or `50p`, to their values in pence,
   like 100 or 50.
 * `@aCoins` holds the remaining coins.
 * `playerChooses()` presents the player with a choice of the left or right
   coin, at the current stage of the game.
 * `askPlayer()` provides the actual input routine for the above sub.
 * `computerChooses()` has the computer pick a coin.
 * `sumCoins()` adds up the coin values for a player.
 * `drawCoins()` pretty-prints the remaining coins to the terminal.

With all of the logic abstracted away, game loop is quite simple:

```perl
while (scalar(@aCoins)){
    push (@aPlayerCoins, playerChooses());
    print "Player: ".join(',',@aPlayerCoins)."\n";
    push (@aComputerCoins, computerChooses());
    print "Computer: ".join(',',@aComputerCoins)."\n";
}
```

At the end of the game, the winner is determined like so:

```perl
my $totalComputer = sumCoins(\@aComputerCoins);
my $totalPlayer = sumCoins(\@aPlayerCoins);

print "----------------------\nEnd of game\n";
print "Player: ".join(',',@aPlayerCoins)."\n";
print "Computer: ".join(',',@aComputerCoins)."\n";

if ($totalComputer >  $totalPlayer){
    print "Computer wins\n";
} elsif ($totalComputer <  $totalPlayer) {
    print "Player wins\n";
} else {
    print "Draw\n";
}
```

I can't show all the subs, but here are the ones I found most interesting, starting with `computerChooses`:

```perl
sub computerChooses {
    my $response = '';
    drawCoins();
    if (scalar(@aCoins) == 1){
        return  pop(@aCoins);
    }
    #we dont want the player to get the 2 pound coin
    if ($aCoins[1] eq '£2'){
        $response = 'R';
    } elsif($aCoins[$#aCoins-1] eq '£2'){
        $response = 'L';
    } elsif ( $hCoinsValue{$aCoins[0]} > $hCoinsValue{$aCoins[$#aCoins]}) {
        $response = 'L';
    } else {
        $response = 'R';
    }

    if ( $response =~ /^R/){
        return  pop(@aCoins);
    } else {
        return   shift(@aCoins);
    }

}
```

Note how the computer actively tries to get the £2 coin, as opposed to simply greedily choosing the highest valued coin. However, if the £2 coin is the *second* item or *second from last* item, we pick from the opposite end, preventing the player from getting it. With this particular bunch of coins, going for the £2 coin (and preventing the other player from getting it) is the optimal strategy, since the other coins add up to only 188p.

Next up is `drawCoins`. While `print "@coins\n"` works, I certainly prefer the attention to detail here, to pretty-print the coins. It looks a lot better:

```perl
sub drawCoins {
    print "\nL".'--------' x scalar(@aCoins)."R\n";
    foreach my $coin (@aCoins){
        print $coin ."\t";
    }
    print "\n".'--------' x scalar(@aCoins)."\n";
}
```

## Andrezgz {#andrezgz2}

[Andrezgz's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/andrezgz/perl/ch-2.pl) maps the values in pence to the familiar name of each coin:

```perl
my %coin_value = (  1 =>  '1p',  2 =>  '2p',   5 => '5p',  10 => '10p',
                   20 => '20p', 50 => '50p', 100 => '£1', 200 => '£2' );
```

Andrezgz then does a [Schwartzian Transform](https://www.perl.com/article/the-history-of-the-schwartzian-transform/) to randomize the order of the coins:

```perl
# Schwartzian transform to randomize order
# although some randomness could be obtained by a simple: keys %coin_value
my @coins = map  { $_->[0] }
            sort { $a->[1] <=> $b->[1] }
            map  { [$_, int rand 8] }
            keys %coin_value;
```

I'd normally use [`List::Util`](https://perldoc.perl.org/List/Util.html)'s `shuffle` for that, but I've never seen a ST I didn't like, and Andrezgz points out that randomness can also be achieved with `keys %coin_value`. **Aside:** In fact, which I'm quite sure Andrezgz knows: [since Perl 5.18, hash keys are deliberately shuffled](https://metacpan.org/changes/release/RJBS/perl-5.18.0#Hash-randomization). Prior to that, they were sort of shuffled as a side effect of the hashing algorithm, but specific random orderings could be repeated and even potentially predicted. There was code out in the wild that relied on those behaviours (sometimes inadvertently), which caused all sorts of hard to reproduce bugs, and potential security issues.

The following loop is where all of the action happens:

```perl
my (@user, @computer);

while (@coins) {
    # USER
    list_coins('Coins on the table',@coins);
    say "> Please choose L (for $coin_value{$coins[0]}), R (for $coin_value{$coins[-1]}) or Q to quit";

    my $letter = uc <STDIN>;
    chomp $letter;
    redo unless $letter =~ /^[RLQ]$/;
    exit 0 if $letter eq 'Q';

    my $chosen = $letter eq 'L' ? shift @coins : pop @coins;
    push @user, $chosen;

    # COMPUTER
    list_coins('Coins on the table',@coins);

    $chosen = $coins[0] > $coins[-1] ? shift @coins : pop @coins;
    push @computer, $chosen;
    say "Computer chooses: $coin_value{$chosen}";
}
```

Finally, the winner is determined and the results are printed:

```perl
say $/ . 'Final Result' . $/ . '-' x 12;
list_coins('User',@user);
list_coins('Computer',@computer);

my ($u,$c) = (0,0);
$u += $_ for (@user);
$c += $_ for (@computer);
say $/, $u > $c ? 'User' : 'Computer', ' is the lucky winner!';
```

## Athanasius {#athanasius2}

[Athanasius's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/athanasius/perl/ch-2.pl) has main logic which assigns the `player_move` and `computer_move` subs to `$move1` or `$move2`, depending on whether `$PLAYER_STARTS` is true (i.e., if the player goes first, `$move1 = \&player_move`:

```perl
const my $PLAYER_STARTS =>  1;

my  $computer           = 0;
my  $player             = 0;
my  @coins              = shuffle keys %COINS;
my  $round              = 0;
my ($move1, $move2)     = $PLAYER_STARTS ? (\&player_move,   \&computer_move) :
                                           (\&computer_move, \&player_move);
```

The game loop is then quite elegant:

```perl
while (scalar @coins > 0) {
    $move1->( \$computer, \$player, \@coins, ++$round );
    $move2->( \$computer, \$player, \@coins, ++$round );
}
```

Here is the `player_move` sub that displays the current game state before prompting the player for their choice:

```perl
sub player_move {
    my ($computer, $player, $coins, $round) = @_;

    printf "\n%d. Player has £%.2f\t" .
             "Computer has £%.2f\n\n" .
             "  Coins remaining: %s\n",
              $round, $$player / 100, $$computer / 100, join ', ', @$coins;

    my $key = 'L';

    if (scalar @$coins > 1) {
        do {
            printf '  Select  L[eft]  (%s) or R[ight] (%s): ', @$coins[0, -1];
            $key = uc <STDIN>;
            chomp $key;

        } until ($key eq 'L' || $key eq 'R');
    }

    my $coin  = $key eq 'L' ? shift @$coins : pop @$coins;
    $$player += $COINS{ $coin };

    printf "  Player picks:    %s%s\n", $coin,
            scalar @$coins == 0 ? ' (forced)' : '';
}
```

And now the `computer_move` sub:

```perl
sub computer_move {
    my ($computer, $player, $coins, $round) = @_;

    printf "\n%d. Player has £%.2f\t" .
             "Computer has £%.2f\n\n" .
             "  Coins remaining: %s\n",
              $round, $$player / 100, $$computer / 100, join ', ', @$coins;

    my $coin    = pick_coin($coins) eq 'L' ? shift @$coins : pop @$coins;
    $$computer += $COINS{ $coin };

    printf "  Computer picks:  %s%s\n",
            $coin, scalar @$coins == 0 ? ' (forced)' : '';
}
```

There is a decent amount of duplicated (or nearly duplicated) code in the above two subs that could be factored out. They do the job, however!

The `pick_coin` is the "brains" behind `computer_move`, if you will:

```perl
sub pick_coin {
    my ($coins)          = @_;
    my  $coins_remaining = scalar @$coins;

    return 'L' if $coins_remaining == 1;                   # Forced move

    my ($left, $right) = @$coins[0, -1];

    return 'L' if $left  eq '£2';                          # Strategy (1)
    return 'R' if $right eq '£2';

    if ($coins_remaining >= 4) {
        return 'L' if $coins->[-2] eq '£2';                # Strategy (2)
        return 'R' if $coins->[ 1] eq '£2';
    }

    return $COINS{ $left } > $COINS{ $right } ? 'L' : 'R'; # Strategy (3)
}
```

The computer's strategy is the optimal strategy, to always prefer the £2 coin, and to attempt to block the player from getting it.


## Cheok-Yin Fung {#cheok-yin-fung2}

[Cheok-Yin Fung's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/cheok-yin-fung/perl/ch-2.pl) allows the player to type in their own list of coins, with units (`p` or `£`):

```perl
print "Enter the coins for the game, "
  . "splitted by comma and with their units. \n";

chomp( my $enter = <STDIN> );

my @coin = split /[\s]*,[\s]*/, $enter;

my @allinpence;

my $poundsign = chr(156);    #or directly £ ...

#chr(156) on my Windows Command Prompt,
#chr(163) for some character sets (??), e.g. Latin-1
foreach (@coin) {
    if ( $_ =~ /.p$/ ) {
        push @allinpence, substr( $_, 0, -1 );
    }
    elsif ( $_ =~ /^($poundsign)./ ) {
        push @allinpence, 100 * substr( $_, 1 );
    }
}
```

### A brief word on encodings

Cheok Yin's comments, above, highlight an issue with the pound symbol (£): it is not encoded the same in **latin1** (i.e., ISO-8859-1) and **utf-8.** (The other issue is that it is difficult to type on most keyboards.) In fact, when importing all of the source code files for this review, I had to convert from at least three different encodings. My script (because of course I have a Perl script for that) attempts to detect the encodings and convert to **utf-8**, but it's not always an exact science.

***

Back to Cheok Yin's solution, the bulk of the code is the computer algorithm for choosing coins. Cheok Yin wanted to unleash some real game theory, and did so with an iterative game tree traversal, which assigns a value to each node. Each top-level branch is compared, and the best one is chosen. Cheok Yin cites a [Coursera course on Combinatorial Game Theory](https://www.coursera.org/learn/combinatorial-game-theory/), as well as one of her textbooks. I always like seeing the resources that people found helpful in solving the challenges.

Here is the iterative step:

```perl
foreach ( 0 .. 2**( $size - 1 ) - 1 ) {

    my $side_sign = $#{ $Plist->[$_] } + 1;

    my @temp0 = @{ $Plist->[$_] };
    my $v0    = pop @temp0;
    if ( ( $side_sign - $size ) % 2 == 0 ) {
        $Pvaluef[ jumptoLc $_] = $v0 + $Pvaluef[$_];
        $Pvalues[ jumptoLc $_] = $Pvalues[$_];
    }
    else {
        $Pvalues[ jumptoLc $_] = $v0 + $Pvalues[$_];
        $Pvaluef[ jumptoLc $_] = $Pvaluef[$_];
    }

    $Plist->[ jumptoLc $_] = \@temp0;

    my @temp1 = @{ $Plist->[$_] };
    my $v1    = shift @temp1;
    if ( ( $side_sign - $size ) % 2 == 0 ) {
        $Pvaluef[ jumptoRc $_] = $v1 + $Pvaluef[$_];
        $Pvalues[ jumptoRc $_] = $Pvalues[$_];
    }
    else {
        $Pvalues[ jumptoRc $_] = $v1 + $Pvalues[$_];
        $Pvaluef[ jumptoRc $_] = $Pvaluef[$_];
    }

    $Plist->[ jumptoRc $_] = \@temp1;
}

#the followings are for the end nodes
foreach ( 2**( $size - 1 ) .. 2**$size - 1 ) {
    if ( $size % 2 == 0 ) {
        $Pvalues[$_] += $Plist->[$_][0];
    }
    else {
        $Pvaluef[$_] += $Plist->[$_][0];
    }
}
```

Cheok Yin uses `$side_sign` to assign either a positive weight or a negative weight to a particular node, based on whether it is a node for a computer turn or a player (opponent) turn. In this way, Cheok Yin can obtain the best net payoff.

And here is the induction step, that trundles its way back up the tree:

```perl
# backward induction of the game tree
foreach ( reverse 0 .. 2**( $size - 1 ) - 1 ) {
    my $side_sign = $#{ $Plist->[$_] } + 1;
    if ( $Pvaluef[ jumptoLc $_] - $Pvalues[ jumptoLc $_] >=
        $Pvaluef[ jumptoRc $_] - $Pvalues[ jumptoRc $_] )
    {
        if ( ( $side_sign - $size ) % 2 == 0 ) {
            takesL $_;
        }
        else {
            takesR $_;
        }
    }
    elsif ( ( $side_sign - $size ) % 2 == 0 ) {
        takesR $_;
    }
    else {
        takesL $_;
    }
}
```

**Blog** › [CY's Take on Perl Weekly Challenge #052](http://blogs.perl.org/users/c_y_fung/2020/03/cys-take-on-perl-weekly-challenge-052.html)

## Colin Crain {#colin-crain2}

[Colin Crain's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/colin-crain/perl/ch-2.pl) starts with a discussion on the strategy, where Colin realizes that, in fact, *"whoever gets the £2 coin wins the game,"* and that *"there is no lucky winner; rather than a friendly wager it appears we have a bar bet hustle, with a insincere instigator pulling a fast one on an unsuspecting dupe."* Spot on, Colin.

Colin starts with the coins given in the task, but shuffles them:

```perl
my @draw = shuffle( 100, 50, 1, 10, 5, 20, 200, 2 );
my $coins = \@draw;
```

### A tangent on `shuffle`

At first I thought Colin used `shuffle` from [`List::Util`](https://perldoc.perl.org/List/Util.html). As it turns out, he implemented his own shuffle with `splice`:

```perl
sub shuffle {
    my @input = @_;
    my @output;
    while (scalar @input) {
        my $idx = int rand (scalar @input);
        push @output, splice(@input, $idx, 1);
    }
    return @output;
}
```

With that `splice` in there repeatedly removing elements from the array, I was curious about the efficiency over a standard Fisher-Yates shuffle, which exchanges elements in-place instead. Here's the most standard F-Y shuffle implementation I could come up with:

```perl
# F-Y Shuffle, Ryan's implementation
sub swap_slice {
    my @l = @_;
    my $len = @l;
    for my $m (0..$#l) {
        my $n = $m + int rand($len - $m);
        @l[$m, $n] = @l[$n, $m];
    }
    @l;
}
```

Somewhat to my surprise, Colin's `splice` version performed very well. It was nearly equal on up to about 1000 elements, before it slowed down relative to the other methods. What about `List::Util`'s `shuffle` though? `List::Util` is a core module and its `shuffle` is [pure C code](https://metacpan.org/source/PEVANS/Scalar-List-Utils-1.54/ListUtil.xs#L1218), but still F-Y.

```
               Rate     splice swap_slice       swap List::Util
splice      17500/s         --        -1%        -2%       -95%
swap_slice  17603/s         1%         --        -2%       -95%
List::Util 377555/s      2057%      2045%      2005%         --
```

This is why I usually just use the `List::Util` that ships with Perl. However, Colin has (wittingly or not) stumbled upon the true power of rolling his own `shuffle`: completely de-railing this reviewer for a solid ten minutes.

Let's shuffle our way back to the code Colin probably thought I'd talk about, shall we?

***

The main loop goes while there are coins remaining, and calls `player0_move` or `player1_move` alternately, to decide what to do:

```perl
while (scalar $coins->@*) {
    my $taken = $turn == 0 ? player0_move($coins) : player1_move($coins);
    $player{"$turn"} += $taken;
    say "player $turn takes:";
    say "\t$taken";
    say "\t\tplayer total : $player{$turn} ";
    say '';

    ## toggle the turn bit
    $turn ^= 1;
}
```

The two "players" each have a sub for movement. `player0` is clearly the smarter of the two (note that `find_target` returns the value of the largest coin in the set):

```perl
sub player0_move {
## apply the winning algorithm to the line
## return the coin taken
    my $coins  = shift @_;
    my $length = scalar $coins->@* - 1;

    ## target_index will always be defined as target is largest value coin in the line
    my $target = find_target( $coins );
    my ($target_index) = grep { $coins->[$_] == $target } (0..$length);

    my $left  = $target_index;
    my $right = $length - $target_index;

    if ($right == 0) {
        return pop $coins->@*;
    }
    elsif ($left == 0 or $left > $right) {
        return shift $coins->@*;
    }
    else {
        return pop $coins->@*;
    }
}
```

This is a variant on the "pick the biggest, or pick from the other end" strategy we've seen.

`player1` implements a greedy approach, of simply picking the largest coin:

```perl
sub player1_move {
## remove the largest coin from the the ends of the line
    my $coins  = shift @_;
    return $coins->[0] > $coins->[scalar $coins->@* - 1] ? shift $coins->@* : pop $coins->@*;
}
```

## Cristina Heredia {#cristian-heredia2}

[Cristina Heredia's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/cristian-heredia/perl/ch-2.pl) has two subs, `pcTime` and `playerTime` which handle the turns for the computer and human player, respectively.

`playerTime` handles the input, removes the selected coin from the lineup, and adds its `$value` to the player's total score (`$playerTotal`).

```perl
sub playerTime {

    if ($length != 0) {
        print "The coins are arranged in the following:\n@coins\n";
        print "Which end do you want to choose, left (l) or right (r)?\n";

        $choise = <>;
        $choise =~ s/^\s+|\s+$//g;

        if ($choise eq 'left' or $choise eq 'l') {
            $value = shift @coins;
            $value =~ s/^\s+|\s+$//g;
            removeLetter($value);
            $playerTotal = $playerTotal + $value;
            $length--;
            pcTime();
        }
        elsif ($choise eq 'right' or $choise eq 'r') {
            $value = pop @coins;
            $value =~ s/^\s+|\s+$//g;
            removeLetter($value);
            $playerTotal = $playerTotal + $value;
            $length--;
            pcTime();
        }
        else {
            playerTime();
        }
    }
    else {
        winner();
    }
}
```

`pcTime` has some similar code, but replaces the user input with a call to
`compareResults`, which we'll look at in a minute. Here is `pcTime`:

```perl
sub pcTime {

    if ($length != 0) {

        compareResults();
        if ($choise eq 'l') {
            $value = shift @coins;
            $value =~ s/^\s+|\s+$//g;
            removeLetter($value);
            $pcTotal = $pcTotal + $value;
            $length--;
            playerTime();

        }
        elsif ($choise eq 'r') {
            $value = pop @coins;
            $value =~ s/^\s+|\s+$//g;
            removeLetter($value);
            $pcTotal = $pcTotal + $value;
            $length--;
            playerTime();
        }
        else {
            pcTime();
        }
    }
    else {
        winner();
    }
}
```

`compareResults` contains the computer strategy. Cristina has decided to go with a greedy method, choosing the side with the biggest coin:

```perl
sub compareResults {

    $first = $coins[0];
    $first =~ s/^\s+|\s+$//g;
    $first = removeLetter($first);

    $last = $coins[$length-1];
    $last =~ s/^\s+|\s+$//g;
    $last = removeLetter($last);

    if ($first > $last) {
        $choise = 'l';
    }
    else {
        $choise = 'r';
    }
    return $choise;
}
```

Finally, Cristina prints out a "winner" message, along with the winner's total score:

```perl
sub winner {
    if ($playerTotal > $pcTotal) {
        print "The winner is the user with a total of: $playerTotal\n";
    }
    elsif ($playerTotal < $pcTotal) {
        print "The winner is the pc with a total of: $pcTotal\n";
    }
    else {
        print "There is an draw between the user and the pc, with a result of: $playerTotal\n";
    }
}
```

With this particular group of coins, a draw is not possible since whoever gets the £2 coin will have at least that much, and whoever doesn't will have less than 188p, as that is what the rest of the coins sum to. However, I agree with Cristina's including the option, as there are other configurations of coins that could result in a draw.

## Dave Cross {#dave-cross2}

[Dave Cross's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/dave-cross/perl/ch-2.pl) went full machine vs. machine with his solution:

```perl
my @coins = qw[£1 50p 1p 10p 5p 20p £2 2p];
my @amts  = map { coin2amt($_) } @coins;

my ( $player1, $player2 );
my $turn = 1;

while (@amts) {
    if ( $turn % 2 ) {
        say "Player 1 ...";
        $player1 += pick_coin( \@amts );
        say "... has ", amt2coins($player1);
    }
    else {
        say "Player 2 ...";
        $player2 += pick_coin( \@amts );
        say "... has ", amt2coins($player2);
    }
    $turn++;
}

say "Player one has: ", amt2coins($player1);
say "Player two has: ", amt2coins($player2);
```

The `pick_coin` sub is greedy (highest coin):

```perl
sub pick_coin {
    my ($remaining) = @_;

    if ( $remaining->[0] > $remaining->[-1] ) {
        say "... takes ", amt2coins( $remaining->[0] );
        return shift @$remaining;
    }
    else {
        say "... takes ", amt2coins( $remaining->[-1] );
        return pop @$remaining;
    }
}
```

Dave also came up with concise routines to convert to and from the friendly coin values such as £2, and their value in pence, such as 200:

```perl
sub coin2amt {
    $_[0] =~ s/p$//;
    $_[0] =~ s/£(\d+)/100*$1/e;

    return $_[0];
}

sub amt2coins {
    return $_[0] < 100 ? "$_[0]p" : '£' . $_[0] / 100;
}
```

## Dave Jacoby {#dave-jacoby2}

[Dave Jacoby's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/dave-jacoby/perl/ch-2.pl) is another journey into game theory, this time using a recursive implementation of the game tree (also known as a decision tree). Here is the recursive routine. It's quite long, so I'll show the listing first, and then step you through the main features:

```perl
sub decision_tree ( $coins, $c_list, $h_list, $pos, $history, $depth = 0 ) {

    # croak 'Too Few Coins' if scalar @$coins < 2;
    # display( $coins, $c_list, $h_list, $pos, $history );

    if ( scalar @$coins == 0 ) {

        # display( $coins, $c_list, $h_list, $pos, $history );
        my $c_sum = sum0 map { value($_) } $c_list->@*;
        my $h_sum = sum0 map { value($_) } $h_list->@*;
        return ( 'L', $c_sum + 100 ) if $c_sum > $h_sum;
        return ( 'L', $c_sum );

    }

    my $left;
    my $right;
    {
        my $lhist;
        @$lhist = @$history;
        push @$lhist, join '', 'L', $pos ? 'C' : 'H';
        my $lcoins;
        my $clist;
        my $hlist;
        @$lcoins = @$coins;
        @$clist  = @$c_list;
        @$hlist  = @$h_list;
        my $coin = shift @$lcoins;
        if   ($pos) { push @$clist, $coin }
        else        { push @$hlist, $coin }
        ( undef, $left ) =
          decision_tree( $lcoins, $clist, $hlist, int !$pos, $lhist,
            $depth + 1 );
    }
    {
        my $lhist;
        @$lhist = @$history;
        push @$lhist, join '', 'R', $pos ? 'C' : 'H';
        my $lcoins;
        my $clist;
        my $hlist;
        @$lcoins = @$coins;
        @$clist  = @$c_list;
        @$hlist  = @$h_list;
        my $coin = pop @$lcoins;
        if   ($pos) { push @$clist, $coin }
        else        { push @$hlist, $coin }
        ( undef, $right ) =
          decision_tree( $lcoins, $clist, $hlist, int !$pos, $lhist,
            $depth + 1 );
    }

    # say join qq{\t}, $depth, 'LEFT', $left, 'RIGHT', $right;

    if ( $left > $right ) {
        return ( 'L', $left + 10 );
    }
    elsif ( $left < $right ) {
        return ( 'R', $right + 10 );
    }
    else {
        return ( 'R', $right );
    }
}
```

The two large code blocks are mostly duplicated code, one for each choice (`L` or `R`), so we can look at them together. Those blocks are the (co)recursion step. Dave copies the important state variables, `pop`s or `shift`s a coin from the copy of `$coins`, and then recurses.

The base case (no coins remaining) calculates the score for the computer and human, and then returns the computer's sum, with a 100 point bonus if the computer's score is higher:

```perl
    if ( scalar @$coins == 0 ) {

        # display( $coins, $c_list, $h_list, $pos, $history );
        my $c_sum = sum0 map { value($_) } $c_list->@*;
        my $h_sum = sum0 map { value($_) } $h_list->@*;
        return ( 'L', $c_sum + 100 ) if $c_sum > $h_sum;
        return ( 'L', $c_sum );
    }
```

Finally, the end of the function takes the result from both the left and right recursive calls, and returns `L` or `R` plus the winning score. 10 is added to the score if there is a winner, otherwise nothing is added in the case of a draw.

You can see this subroutine called from the main loop of Dave's program:

```perl
while ( scalar @coins ) {
    display( \@coins, \@c_list, \@h_list, 1, \@history );

    my $coins = join ' ', @coins;
    say <<"END";
    Choose "L" or "R" to pick a coin from the list
    Or "Q" to quit

END
    print q{Choose(L/R/Q):};
    my $choice = uc <STDIN>;
    chomp $choice;

    if ( $choice eq 'Q' ) { say 'Good Game!' && exit; }
    if ( $choice eq 'L' || $choice eq 'R' ) {
        choice( 'HUMAN', $choice );
        my ( $comp, $score ) =
          decision_tree( \@coins, \@c_list, \@h_list, 1, \@history );
        choice( 'COMPUTER', $comp );
    }
}
```

Dave expressed some reservations as to whether his recursive code (which he says he coded from memory, which is impressive) produced optimal results or not. At first glance, this isn't the true [minimax](https://en.wikipedia.org/wiki/Minimax) Dave was going for, though most of the structure is there to make it (or any other game tree) work.

It looks like the routine tries to roughly maximize its overall outcome, leading the computer to pick the side that would be best if the player played poorly.

**Blog** › [Minimax, British Coins and Old-School AI in Perl](https://jacoby.github.io/2020/03/16/minimax-british-coins-and-oldschool-ai-in-perl.html)

## Duncan C. White {#duncan-c-white2}

[Duncan C. White's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/duncan-c-white/perl/ch-2.pl) also has a computer player that knows how to get the £2 coin (and prevent the human player from doing so):

```perl
#    The $biggest coin (with these coins the £2 coin) is critical: pick
#    it if it's at either end, otherwise prevent it from getting to either
#    end..  if it's already been picked, calculate the biggest remaining
#    and apply the same strategy to that value..
#
fun pick_first_or_last(@coins) {
    my $firstc = $coins[0];
    return 'first' if $firstc == $biggest;
    my $lastc = $coins[$#coins];
    return 'last' if $lastc == $biggest;

    # find position of biggest (if it's still here)
    my @bigpos = grep { $coins[$_] == $biggest } 0 .. $#coins;

    # if not here.. change biggest to the biggest that is still here
    if ( @bigpos == 0 ) {
        $biggest = max(@coins);

        # find the position of that new biggest
        @bigpos = grep { $coins[$_] == $biggest } 0 .. $#coins;
    }

    # now: @bigpos==1, $bigpos[0] is the position of that biggest.
    my $nbp = @bigpos;
    die "logic error, bigpos array has $nbp elements, should be 1\n"
      unless $nbp == 1;
    my $bigpos = shift @bigpos;

    return 'last'  if $bigpos == 1;              # biggest very close to front
    return 'first' if $bigpos == $#coins - 1;    # biggest very close to back

    # pick bigger
    return 'last' if $coins[$#coins] > $coins[0];
    return 'first';
}
```

Duncan first picks a random player to start, before going in to the main loop, which loops while there are still `@coins`:

```perl
my $humtot  = 0;
my $comptot = 0;

# randomise who plays first
my $player = int( rand(2) );                     # 0 is human, 1 is computer
my @who    = qw(You I);

say "$who[$player] play first";

while (@coins) {
    say "coins: ", join( ',', @coins );
    if ( $player == 0 ) {
        my $choice = 'f';
        if ( @coins > 1 ) {
            print " pick first coin (f) or last coin (l)? ";
            $choice = <STDIN>;
            chomp $choice;
            $choice = lc($choice);
        }

        my $coin = ( $choice eq 'f' ) ? shift @coins : pop @coins;
        $humtot += $coin;
        say " you picked $coin, your total is now $humtot";
    }
    else {
        my $choice = pick_first_or_last(@coins);
        say " I pick $choice coin";

        my $coin = ( $choice eq 'first' ) ? shift @coins : pop @coins;
        $comptot += $coin;
        say " I picked $coin, my total is now $comptot";
    }

    # switch players
    $player = 1 - $player;
}
```

As I've come to expect from Duncan, his solution is well designed and well documented, which is valuable for tasks like this requiring longer solutions.

## E. Choroba {#e-choroba2}

[E. Choroba's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/e-choroba/perl/ch-2.pl) includes a `My::Game` package using [`Moo`](https://metacpan.org/pod/Moo), giving an OO interface into the game functions:

```perl
{   package My::Game;
    use Moo;

    has [qw[ player1 player2 ]] => (
        is => 'rw', default => 0, init_arg => undef);
    has coins => (is => 'ro', required => 1);
    has remaining => (is => 'rw', lazy => 1, builder => 'coins');
```

The `auto` method controls the computer's actions. Choroba realized that the £2 coin is the key, and implemented the same strategy we've seen before:

```perl
    sub auto {
        my ($self) = @_;
        if (1 == @{ $self->remaining }
            || $self->remaining->[0] == 200
        ) {
            $self->turn('l');
        } elsif ($self->remaining->[-1] == 200
                 || $self->remaining->[1] == 200
             ) {
            $self->turn('r');
        } else {
            $self->turn('l');
        };
    }
```

The `turn` method takes a turn (this works for the player or the computer):

```perl
    sub turn {
        my ($self, $where) = @_;
        $where = lc substr $where, 0, 1;
        my $pos = { l => 0, r => -1 }->{$where};
        $self->player1($self->player1 + splice @{ $self->remaining }, $pos, 1);
        $self->switch;
    }
```

The `switch` method changes the active player, to be called in between turns:

```perl
    sub switch {
        my ($self) = @_;
        my $p = $self->player1;
        $self->player1($self->player2);
        $self->player2($p);
    }
```

Actually instantiating and using a `My::Game` object is quite simple:

```perl
use List::Util qw{ shuffle };
my @coins = shuffle(100, 50, 1, 10, 5, 20, 200, 2);

say "@coins";
say "Input 'left' or 'right' (or just 'l' or 'r').";

my $starting_player = 1 + int rand 2;
say "Starting player: $starting_player";

my $game = 'My::Game'->new(coins => \@coins);
$game->auto if 2 == $starting_player;

until ($game->finished) {
    say $game->status;
    my $where;
    do {
        chomp( $where = <> );
    } until $where =~ /^(l(eft)?|r(ight)?)$/i;

    $game->turn($where);

    $game->auto unless $game->finished;
}
$game->switch if 2 == $starting_player;
say $game->status, $game->result;
```

**Blog** › [052: Stepping Numbers & Lucky Winner](http://blogs.perl.org/users/e_choroba/2020/03/perl-weekly-challenge-052-stepping-numbers-lucky-winner.html)

## Javier Luque {#javier-luque2}

[Javier Luque's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/javier-luque/perl/ch-2.pl) is one of the shortest at 34 lines. The computer greedily takes the largest coin on offer, and plays against itself:

```perl
use Getopt::Long;

# Optimal flag
my $optimal = 0;
GetOptions ('optimal' => \$optimal);

# Some initialization variables
my @coins = (100, 50, 1, 10, 5, 20, 200, 2);
my $players = 2;
my $player_turn = 0;
my @totals = map { 0 } 1 .. $players;

# Play the game
while (scalar(@coins) > 0) {
    if ( ($optimal && $player_turn == 0) ||
          $coins[0] > $coins[-1] ) {
        $totals[$player_turn] += shift @coins;
    } else {
        $totals[$player_turn] += pop @coins;
    }

    # Next turn
    $player_turn = ($player_turn + 1) % $players;
}

# Display the scores
for my $i (1..$players) {
    say "Player $i total: " . $totals[$i - 1] . 'p';
}
```

In his blog, Javier acknowledges the greedy method isn't the optimal solution. It serves the purposes of this challenge, however.

**Blog** › [052 – Perl Weekly Challenge](https://perlchallenges.wordpress.com/2020/03/16/perl-weekly-challenge-052/)

## Laurent Rosenfeld {#laurent-rosenfeld2}

[Laurent Rosenfeld's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/laurent-rosenfeld/perl/ch-2.pl) also has a rather concise solution. His is a computer-vs-human game, whereby the computer makes the optimal move to try to capture the most valuable coin:

```perl
my @coins = @ARGV > 0 ? @ARGV : (100, 50, 1, 10, 5, 20, 200, 2);

my ($index200) = grep $coins[$_] == 200, 0..$#coins;
my @before = @coins[0..$index200-1];
my @after = @coins[$index200+1..$#coins];
ask();
while (my $move = <STDIN>) {
    chomp $move;
    last if $move eq "";
    my $coin;
    if ($move eq "B") {
        $coin = shift @before // 200;
    } elsif ($move eq "E") {
        $coin = pop @after // 200;
    } else {
        say "Invalid choice"; next;
    }
    if ($coin == 200) {
        say "You win!"; last;
    }
    if (@before == 0) {
        say "I pick the 200p coin at start and win"; last;
    } elsif (@after == 0) {
        say "I pick the 200p coin at end and win"; last;
    }
    if (@before % 2 == 0) {
        $coin = shift @before;
    } elsif (@after %2 == 0) {
        $coin = pop @after;
    } else {
        # no winning move, let's hope for a mistake
        if (@before > @after) {
            $coin = shift @before;
        } else {
            $coin = pop @after;
        }
    }
    ask();
}

sub ask {
    say "New situation = @before 200 @after";
    say "Pick a coin at beginning (B) or end (E)";
}
```

**Blog** › [Stepping Numbers and Lucky Winner](http://blogs.perl.org/users/laurent_r/2020/03/perl-weekly-challenge-stepping-numbers-and-lucky-winner.html)

## Lubos Kolouch {#lubos-kolouch2}

[Lubos Kolouch's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/lubos-kolouch/perl/ch-2.pl) starts with a shuffled list of coins.

The `play_game` sub is the main loop:

```perl
sub play_game {

    my $who = -1;
    while (@deck) {
        $who *= -1;
        play_round($who);
    }

    end_game;
}
```

That in turn calls `play_round`, where the current player takes their turn. Note the computer chooses randomly:

```perl
sub play_round {

    my $who = shift;
    my $lr  = '';

    $who == 1? $lr = get_player_input: $lr = $sides[ rand @sides ];

    my $draw = do_draw($lr);
    $scores{$who} += $values{$draw};

    say $players{$who}
      . ' has drawn from '
      . $lr
      . ' and won '
      . $draw
      . ' and has now score '
      . $scores{$who};

}
```

Despite the computer choosing randomly, I still managed to lose, because Lubos' program never actually displays the list of coins. Perhaps unironically, Lubos might be the only one to implement a solution that could reasonably be called "Lucky Winner". :-)


## Mohammad S Anwar {#mohammad-anwar2}

[Mohammad S Anwar's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/mohammad-anwar/perl/ch-2.pl) maintains state for both players inside of hash refs. Note that both "Human" and "Machine" will be played by the computer:

```perl
my $table   = [ keys %$coins ];
my $players = {
    0 => { "name" => "Human",   "bank" => 0, "coins" => [] },
    1 => { "name" => "Machine", "bank" => 0, "coins" => [] },
};
```

The main loop starts with a random player making a greedy selection until the coins are gone:

```perl
my $current = int rand(2);
my $coin;

while ($#$table) {
    if ($table->[0] > $table->[-1]) {
        $coin = shift @$table;
    }
    else {
        $coin = pop @$table;
    }

    $players->{$current}->{bank} += $coin;
    push @{$players->{$current}->{coins}}, $coins->{$coin};

    $current = ($current)?(0):(1);
}

$coin = shift @$table;
$players->{$current}->{bank} += $coin;
push @{$players->{$current}->{coins}}, $coins->{$coin};

_declare_lucky_winner($players);
_show_coins($players);
```

**Blog** › [BLOG: The Weekly Challenge #052](https://perlweeklychallenge.org/blog/weekly-challenge-052)

## Roger Bell West {#roger-bell-west2}

[Roger Bell West's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/roger-bell-west/perl/ch-2.pl) runs 8 times, each time making an array, `@c` containing two numbers, [0,7], [1,6], [2,5], ..., [6,1], [7,0], on subsequent runs through the outer loop.


```perl
# see eventual blog post for why this is relevant

my $coins = 8;

foreach my $a ( 0 .. $coins - 1 ) {
    my @c = ( $a, $coins - 1 - $a );
    while ( ( $c[0] > 2 || $c[1] > 2 ) && $c[0] > 0 && $c[1] > 0 ) {
        @c = sort @c;
        $c[1] -= 2;
    }
    my $toplay = 0;
    while ( ( $c[0] > 1 || $c[1] > 1 ) && $c[0] > 0 && $c[1] > 0 ) {
        @c = sort @c;
        $c[1]--;
        $toplay = 1 - $toplay;
    }
    @c = sort @c;
    unless ( $c[0] == 0 ) {
        $toplay = 1 - $toplay;
    }
    print "$a: $toplay wins\n";
}
```

I don't know what the purpose of this script is. My guess is that it is trying to demonstrate the property that player 1 can always win by forcing player 2 to leave the most valuable coin (in this case, `0`) for player 1. I'll definitely be looking forward to Roger's eventual blog post to see how wrong I am.

## Ruben Westerberg {#ruben-westerberg2}

[Ruben Westerberg's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/ruben-westerberg/perl/ch-2.pl) has another randomly-choosing computer, but this one, I think I can beat!

```
NEW GAME
Select left or right ends of list with the < or  > keys

5p, 1p, 2p, 10p, 20p, £1, 50p, £2

Computer picks >

PICK IS >
5p, 1p, 2p, 10p, 20p, £1, 50p

Select Left or Right
```

So much for that! As it turns out, the coins are also shuffled randomly, too. :-)

Here's the main loop:

```perl
print "NEW GAME\n";
print "Select left or right ends of list with the < or  > keys\n\n";
while (@game) {
    print join ", ",@game;
    print "\n\n";
    my $pick;
    my $currentPlayer;
    if($computerTurnFlag) {
        ($pick)=pickSome(["<",">"],1);
        print "Computer picks $pick\n";
        $currentPlayer=\@computer;
    }
    else {
        $currentPlayer=\@player;
        until ($pick) {

            print "Select Left or Right\n";
            $pick= <STDIN>;
            chomp $pick;
            if (($pick ne "<" )and( $pick ne ">")) {
                $pick=undef;
                next;
            }
            last;
        }
        print "Player picks $pick\n";
    }
    print "\n";
    print "PICK IS $pick\n";
    my $val;
    $val=pop @game if $pick eq ">";
    $val=shift @game if $pick eq "<";
    push @$currentPlayer, $val;
    $computerTurnFlag++;
    $computerTurnFlag%=2;

}
```

The `pickSome($array, $n)` sub picks `$n` elements from the `$array` ref:

```perl
sub pickSome {
    my ($in,$count)=@_;
    my @out;
    my @data=@$in;
    #    print "Data is: ",join ", ", @data;
    #print "\n";
    for (0..$count-1) {
        push @out,splice @data,int(rand(@data)),1;
    }
    #print "OUT is: ", join ", ", @out;
    #print "\n";
    @out;
}
```

## Ryan Thompson {#ryan-thompson2}

[My solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/ryan-thompson/perl/ch-2.pl) was so long I felt compelled to write a manual (seen here with thanks to **pod2markdown**):

***

### NAME

ch-2.pl - Lucky Winner Simulator 9000

### SYNOPSIS

```
ch-2.pl [options] [algorithm1 algorithm2 ...]
ch-2.pl --human=<cpu_algorithm>
ch-2.pl --help
```

### OPTIONS

```
--count=<iter>     Play <iter> games                   Default: 1000
--coins=<N>        Every game uses <N> coins           Default: 8
--maxcoin=<N>      Maximum coin value                  Default: 200
--help             Full help page
--human=<cpu_alg>  Human vs CPU, CPU uses <cpu_alg>
--seed=<N>         Use specific random number seed (integer)
--verbose          Enable extra output
--noverbose        Disable extra output
```

# ALGORITHMS

- `human`: Human input. Only available with `--human` option.
- `bozo`: Real stupid algorithm; chooses left or right randomly.
- `worst`: Somehow even stupider. Always picks lowest option.
- `greedy`: Greedy algorithm. Always picks highest option, but doesn't look ahead.
- `ahead[135]`: Looks ahead **1**, **3**, or **5** turns, and picks the option that maximizes (**my\_score** - **their\_score**)

***

As you can see, it has two modes with `--human`, and without. With `--human`, you can play against the computer algorithm of your choice, from the **ALGORITHMS** section. Without `--human`, all algorithms are pitted against each other in a round-robin match, many times with random coins, and prints a leaderboard with the results. The `ahead` options win the most, but even `worst` manages to pick up a few games here and there.

You can see the code or my blog for more information. In the interest of keeping things short, I'll just show you a few snippets of the code.

The algorithms are all provided by the `get_algorithms` sub, which returns a dispatch table. The short ones, `bozo`, `worst`, and `greedy`, are all one-liners, so they fit right in, while the `ahead` ones are passed as either a sub ref, or a sub that returns a sub ref:

```perl
sub get_algorithms {
    (
        bozo    => sub { rand > 0.5 },
        worst   => sub { $_[0] > $_[-1] },
        greedy  => sub { $_[0] < $_[-1] },
        ahead1  => \&ahead1,
        ahead3  => ahead(3),
        ahead5  => ahead(5),
    );
}
```

`human` isn't included in that list, but it is indeed just another algorithm that is added to the dispatch table when `--human` is specified.

The `ahead` sub is the most complex (and most effective) algorithm. It returns a closure around `$n`, to a recursive sub that will look ahead `$n` moves every time it is called.

```perl
# Look ahead n moves
sub ahead {
    my $n = shift;

    sub {
        my $ahead = sub {
            my ($depth, $us, $lr, @coins) = @_;
            my $val = $us * ($lr == LEFT ? shift @coins : pop @coins);
            return $val if !$depth or @coins == 0;

            my $f = $us == 1 ? \&min : \&max;
            $val + $f->(
                map { __SUB__->($depth-1, -$us, $_, @coins) } LEFT, RIGHT
            );
        };

        $ahead->($n, 1, LEFT,  @_) >
        $ahead->($n, 1, RIGHT, @_) ? LEFT : RIGHT;
    };
}
```

This is a bit of combinatorial game theory. `$ahead` (the inner sub) traverses a game tree, alternately adding and subtracting the maximum result from the nodes below. Depending on which player we are at in the current recursion depth, we need to either minimize or maximize the result.

Of course, this grows exponentially, so that's why I used smaller values of `$n`. Looking ahead 5 moves barely does any better than looking ahead 3 moves.  Looking ahead 1 move is already significantly better than greedy, which I guess would be a 0-move lookahead in this context.

```
Leaderboard:
     ahead5:    7066 wins
     ahead3:    7037 wins
     ahead1:    6773 wins
     greedy:    6149 wins
       bozo:    2716 wins
      worst:     259 wins
```

**Blog** › [Lucky Winner](http://ry.ca/2020/03/lucky-winner/)

## Saif Ahmed {#saiftynet2}

[Saif Ahmed's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/saiftynet/perl/ch-2.pl) also includes a shuffle, but I'm not going to fall for that twice in one week.

After some setup, including the option to enter names for each player, Saif's game loop looks like this (actually, this is the inner loop; Saif runs multiple games):

```perl
    while ( @coins > 0 ) {    # make moves until no more coins
        unshift @p1,
          move($player1)
          ? shift @coins
          : pop @coins;       # move coin from pile to  player
        print "---$player1 finds a $p1[0]\n";    # report coin found
        $p1Total +=
          coinValue( $p1[0] );    # add the value of the coin to player1s total
        unshift @p2,
          move($player2)
          ? shift @coins
          : pop @coins;           # move coin from pile to  player
        print "---$player2 finds a $p2[0]\n";    # report coin found
        $p2Total +=
          coinValue( $p2[0] );    # add the value of the coin to player2s total
    }
    # game has ended, display reults
    print "\n$player1 has:  ", ( join ", ", reverse @p1 ), " total= ", $p1Total;
    print "\n$player2 has:  ", ( join ", ", reverse @p2 ), " total= ", $p2Total;
    if ( $p1Total > $p2Total ) {
        $p1wins++;
        print "\n* $player1 wins!!";
        next;
    }
    $p2wins++;
    print "\n* $player2 wins!!";
```

The `move` sub will either prompt for input or make a random pick, depending on whose turn it is:

```perl
sub move {
    my $mover  = shift;
    my $choice = "";
    if ( $mover !~ /Computer/ ) {
        print "\n$mover pick end Left or Right (L or R)"
          and chomp( $choice = <> )
          while $choice !~ /[lr]/i;
    }
    else {
        ( $choice = ( rand() > .5 ) ? "Left" : "Right" )
          and print "\n$mover picks $choice\n";
    }
    return $choice =~ /l/i;
}
```


## User Person {#user-person2}

[User Person's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/user-person/perl/ch-2.pl) is optimized for the specific coins from the task, to the extent they have defined a sub called `l2Index` that is dedicated to finding the position of the `L2` (£2) coin:

```perl
sub l2Index {
    my $ret = -1;
  LOOP:
    for (my $i = 0; $i <= $#coins; ++$i) {
        if ($coins[$i] eq 'L2') {
            $ret = $i;
            last LOOP;
        }
    }
    return $ret;
}
```

The `playerChoice` sub handles user input, with help from [`Term::ReadLine`](https://perldoc.perl.org/Term/ReadLine.html):

```perl
use Term::ReadLine;

my $term = Term::ReadLine->new('input');
$term->ornaments(00,00,00,00);

# later

sub playerChoice {
    my $fl   = "";
    my $loop = 1;

    my $prompt = "Type 'f' to choose the first coin. Type 'l' to choose the last coin. Type 'q' to quit:\n" ;
    print $prompt if scalar @coins > 1;

  ILOOP:
    while ($loop--) {

        if ( scalar @coins == 1) {  # Don't ask when there's only one choice.
            takeCoin('f','player');
            next ILOOP;
        }

        my $fl = $term->readline('> ');

        if ($fl eq 'f' or $fl eq 'l') {
            takeCoin($fl,'player');

        } elsif ($fl eq 'q') {
            exit;

        } else {
            print "Invalid choice.\n";
            ++$loop;
        }
    }
}
```

The computer player knows how to optimize its chances to get that valuable coin:

```perl
sub computerChoice {
    # Grabs L2 off the end when available
    # Doesn't grab the item before L2 to free it up for player to win.
    # Otherwise, grabs whichever end is greater.
    # It doesn't always get the highest points, but it wins when that's possible.

    my $ind = l2Index();

    if (scalar @coins == 3) {   # Without this statement computer always chooses last (third)
        chooseGreater();        # when protecting L2 ( e.g. [first], L2, [last] )
                                # even if first is greater.
    } else {

        if ($ind == 0 or $ind == $#coins-1 ) {
            takeCoin('f','computer');

        } elsif ( $ind == $#coins or $ind == 1) {
            takeCoin('l','computer');

        } else {
            chooseGreater();
        }
    }
}
```

With all that, User Person's game loop is very simple:

```perl
while (scalar @coins) {
    print "@coins\n";

    if ( $turn ) {
        playerChoice();
        --$turn;
    } else {
        computerChoice();
        ++$turn;
    }
}
```

## Wanderdoc {#wanderdoc2}

[Wanderdoc's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/wanderdoc/perl/ch-2.pl) is another computer vs. computer match, with each greedily removing the most valuable coin at every turn:

```perl
my %result;

for my $i ( 1 .. 1_000 ) {
    my @set     = shuffle keys %values;      # :-)
    my %players = ( PC => [], ME => [], );
    while (@set) {
        for my $player ( sort { $b cmp $a } keys %players )    # PC first.
        {
            if ( $set[0] > $set[-1] ) {
                push @{ $players{$player} }, shift @set;
            }

            else {
                push @{ $players{$player} }, pop @set;
            }
        }
    }

    my $winner =
      reduce { sum( @{ $players{$a} } ) > sum( @{ $players{$b} } ) ? $a : $b }
    keys %players;

    $result{$winner}++;
}
print "$_ => $result{$_}$/" for keys %result;
```

Wanderdoc runs 1000 games. `PC` is the first player, `ME` is the second player. Otherwise, they play the same. With this greedy algorithm, `PC` wins around 2/3 of the time, which is not surprising.

## Yet Ebreo {#yet-ebreo2}

[Yet Ebreo's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/yet-ebreo/perl/ch-2.pl) also pits the machine against itself. The `check_lr` sub recursively attempts to find the maximum score between the "left" and "right" options for the active player, and assumes the other player will play greedily:

```perl
sub check_lr {
    my ($arr,$turn,$lscore,$rscore) = @_;

    if ($turn == 0) {

        $lscore += $arr->[0];
        my @new_arr1 = @{$arr}[1..$#{$arr}];
        if ($#new_arr1) {
            check_lr(\@new_arr1,1,$lscore,$rscore);
        }

        $rscore += $arr->[-1];
        my @new_arr2 = @{$arr}[0..$#{$arr}-1];
        if ($#new_arr2) {
            check_lr(\@new_arr2,1,$lscore,$rscore);
        }
        if ($rscore>$rmax) {
            $rmax = $rscore;
        }
        if ($lscore>$lmax) {
            $lmax = $lscore;
        }
        return $lmax>$rmax?0:1;
    } else {
        my @new_arr3;
        if ($arr->[0]>$arr->[-1]) {
            @new_arr3 = @{$arr}[1..$#{$arr}];
        } else {
            @new_arr3 = @{$arr}[0..$#{$arr}-1];
        }
        if($#new_arr3) {
            check_lr(\@new_arr3,0,$lscore,$rscore);
        }
    }

}
```

The game loop is as follows. Note the second player plays randomly, while the first uses the above `check_lr` strategy:

```perl
say "Original Array: @money\n";
my @scores;
while (@money) {
    $rmax = $lmax = 0;
    my $ai_move = check_lr(\@money,0,0,0);
    if ($ai_move == 0) {
        $scores[0][0]+= $money[0];
        $scores[0][1].= ">> $money[0] ";
        shift @money;
    } else {
        $scores[0][0]+= $money[-1];
        $scores[0][1].= ">> $money[-1] ";
        pop @money;
    }
    my $random_move = int(rand(2));
    if ($random_move == 0) {
        $scores[1][0]+= $money[0];
        $scores[1][1].= ">> $money[0] ";
        shift @money;
    } else {
        $scores[1][0]+= $money[-1];
        $scores[1][1].= ">> $money[-1] ";
        pop @money;
    }
}

say "Optimized Score: $scores[0][0]";
say "Optimized Moves: $scores[0][1]\n";

say "Random Score:    $scores[1][0]";
say "Random Moves:    $scores[1][1]\n";
```

***

***

## See Also {#blogs}

### Blogs this week:

**Cheok-Yin Fung** › [CY's Take on Perl Weekly Challenge #052](http://blogs.perl.org/users/c_y_fung/2020/03/cys-take-on-perl-weekly-challenge-052.html)

**Dave Jacoby** › [Minimax, British Coins and Old-School AI in Perl](https://jacoby.github.io/2020/03/16/minimax-british-coins-and-oldschool-ai-in-perl.html)

**E. Choroba** › [Stepping Numbers & Lucky Winner](http://blogs.perl.org/users/e_choroba/2020/03/perl-weekly-challenge-052-stepping-numbers-lucky-winner.html)

**Javier Luque** › [052 – Perl Weekly Challenge](https://perlchallenges.wordpress.com/2020/03/16/perl-weekly-challenge-052/)

**Laurent Rosenfeld** › [Stepping Numbers and Lucky Winner](http://blogs.perl.org/users/laurent_r/2020/03/perl-weekly-challenge-stepping-numbers-and-lucky-winner.html)

**Mohammad S Anwar** › [BLOG: The Weekly Challenge #052](https://perlweeklychallenge.org/blog/weekly-challenge-052)

**Ryan Thompson** › [Stepping Numbers](http://ry.ca/2020/03/stepping-numbers/) | [Lucky Winner](http://ry.ca/2020/03/lucky-winner/)

