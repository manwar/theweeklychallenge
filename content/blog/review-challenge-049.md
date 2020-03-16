---
author:       Ryan Thompson
date:         2020-03-16T00:00:00
description:  "Ryan Thompson › Perl Weekly Review #049"
tags:         ["perl"]
title:        "Ryan Thompson › Perl Weekly Review #049"
type:         post
image:        images/blog/p5-review-challenge-049.jpg
---

Continues from [previous week](/blog/review-challenge-048/).

Welcome to the Perl review for Week 049 of the Weekly Challenge! For a quick overview, go through the [original tasks](/blog/perl-weekly-challenge-049/) and [recap](/blog/recap-challenge-049/) of the weekly challenge.

## Getting in Touch

<a href="mailto:rjt@cpan.org"><img src="http://ry.ca/misc/Email.svg" height="50" width="50"> Email</a> › Email me (Ryan) with any feedback about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="http://ry.ca/misc/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="http://ry.ca/misc/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

We'd greatly appreciate any feedback you'd like to give.

## Table of Contents

### [Task 1](#task1)

[ [Alicia Bielsa](#alicia-bielsa1)  | [Cheok-Yin Fung](#cheok-yin-fung1)  | [Colin Crain](#colin-crain1)  | [Cristina Heredia](#cristian-heredia1)  | [Dave Cross](#dave-cross1)  | [Dave Jacoby](#dave-jacoby1)  | [Duane Powell](#duane-powell1)  | [Duncan C. White](#duncan-c-white1)  | [E. Choroba](#e-choroba1)  | [Ian Rifkin](#ianrifkin1)  | [Jaldhar H. Vyas](#jaldhar-h-vyas1)  | [Javier Luque](#javier-luque1)  | [Laurent Rosenfeld](#laurent-rosenfeld1)  | [Lubos Kolouch](#lubos-kolouch1)  | [Mohammad S Anwar](#mohammad-anwar1)  | [Peter Scott](#peter-scott1)  | [Roger Bell West](#roger-bell-west1)  | [Ruben Westerberg](#ruben-westerberg1)  | [Ryan Thompson](#ryan-thompson1)  | [Saif Ahmed](#saiftynet1)  | [Jen Guerra](#southpawgeek1)  | [Steven Wilson](#steven-wilson1)  | [User Person](#user-person1)  | [Wanderdoc](#wanderdoc1)  | [Yet Ebreo](#yet-ebreo1)  ]

### [Task 2](#task2)

[ [Alicia Bielsa](#alicia-bielsa2)  | [Cheok-Yin Fung](#cheok-yin-fung2)  | [Colin Crain](#colin-crain2)  | [Dave Jacoby](#dave-jacoby2)  | [Duane Powell](#duane-powell2)  | [Duncan C. White](#duncan-c-white2)  | [E. Choroba](#e-choroba2)  | [Ian Rifkin](#ianrifkin2)  | [Javier Luque](#javier-luque2)  | [Laurent Rosenfeld](#laurent-rosenfeld2)  | [Lubos Kolouch](#lubos-kolouch2)  | [Mohammad S Anwar](#mohammad-anwar2)  | [Roger Bell West](#roger-bell-west2)  | [Ruben Westerberg](#ruben-westerberg2)  | [Ryan Thompson](#ryan-thompson2)  | [Saif Ahmed](#saiftynet2)  | [Jen Guerra](#southpawgeek2)  | [User Person](#user-person2)  | [Wanderdoc](#wanderdoc2)  | [Yet Ebreo](#yet-ebreo2)  ]

### [Blogs](#blogs)

***

***

# Task #1 - Smallest Multiple {#task1}

Write a script to accept a positive number as command line argument and print the smallest multiple of the given number consists of digits 0 and 1.

For example:

For given number 55, the smallest multiple is 110 consisting of digits 0 and 1.

***

Solutions for this task came in two basic flavours:

### Brute Force (check every multiple)

The most obvious way to solve this problem is to simply loop through every multiple of the given number, and return the first number containing only 1s and 0s. For numbers with small answers, this works fine, but even small input numbers can lead to some very large results. Multiples of 9 in particular, are very bad:

### Breadth First Search or Binary counting

A more efficient solution can be had by using a breadth first search to explore the solution space. That is, one can totally skip any numbers that contain unwanted digits, by looping through numbers containing only 1s and 0s. This can be done with a BFS, or by counting in binary.

### Deeper mathematical analysis

It's possible to get even better results with some more analysis. [Cheok-Yin Fung's solution](#cheok-yin-fung1) is, I believe, the most analytical of the solutions up for review this week.

## Alicia Bielsa {#alicia-bielsa1}

[Alicia Bielsa's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/alicia-bielsa/perl/ch-1.pl) checks every multiple:

```perl
my $smallestMultiple = 0;
my $count = 1;
while ($smallestMultiple == 0 ){
    $smallestMultiple = ( $numberInput * $count ) =~ /^[01]+$/ ? ( $numberInput * $count) : 0;
    $count++;
}
print "$smallestMultiple\n"
```

## Cheok-Yin Fung {#cheok-yin-fung1}

[Cheok-Yin Fung's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/cheok-yin-fung/perl/ch-1.pl) does a deep dive on the math behind this problem. I had a very pleasant conversation with Cheok Yin, who contacted me via email to discuss the performance.

Cheok Yin first removes (and counts) factors of 2 (`$s`) and 5 (`$t`), with the remainder in `$C`:

```perl
my $N = $ARGV[0];
my $C = $N;
my $s = 0;
my $t = 0;
while ( $C % 2 == 0) {
    $C /= 2; $s++;
}
while ( $C % 5 == 0) {
    $C /= 5; $t++;
}
```

The answer we're looking for is a multiple of the original number, but now also a multiple of `2^s * 5^t * C`. The main body of the solution uses modulo arithmetic in an interesting way:

```perl
my @D = (1);
my $k = ( ($C==1) ? -1 : 0);
my @key = ();
while ( $k != -1 and @key == () ) {
    my $temp;
    $temp = ( 10 * $D[ 2**( $k - 1 ) ] )
      % $C;    # in simpler but slower terms, $temp = (10**$k) % $C;
    $D[ 2**($k) ] = $temp;
    $k++;
    if ( $k != 0 or $k != 1 ) {
        for ( 1 .. 2**( $k - 1 ) - 1 ) {
            $D[ 2**( $k - 1 ) + $_ ] = ( $D[$_] + $temp ) % $C; # Ryan[0]
            if ( $D[ 2**( $k - 1 ) + $_ ] == 0 ) {
                push @key, 2**( $k - 1 ) + $_;

                # We cannot simply write:  $key = 2**($k-1) + $_;
                # because there could be more than one mulitples in 100...000 to 111..111, e.g. C=27;
            }
        }
    }
}
@key = sort {$a <=> $b} @key;
if ($C != 1) {printf "%0b", $key[0];} else {print 1;}
print "0" x max($s,$t);
```

Cheok Yin did not provide any other documentation with this code, so I had to reverse-engineer the math myself. I first noted that the outer `if ($k != 0 or $k != 1) {` statement's condition is *always* true, so it could be removed.

The potential solutions are built up in `@key`. By the end of the loop, `@key` may contain multiple solutions, so Cheok Yin prints the minimum. I'd personally use `List::Util`'s O(n) `min` for this instead of the O(n log n) `sort`, but only because it is cleaner:

```perl
printf "%b%s\n", min(@key) || 1, '0' x max($s, $t); # Ryan's version
```

The `@D` array grows in powers of two, each time through the outer `while` loop, and stores the remainders of the current power of two in the next power of two at the line marked `Ryan[0]`. Thus Cheok Yin is doubling the search space for every iteration of the `while` loop. If a result is found where the remainder was zero, then we have a valid solution, so it is pushed to the result array, `@key`. The solution is found when `@key` is non-empty.

In my opinion (for what it's worth!), a solution this complex needs more documentation. A future maintainer (or reviewer!) should not have to spend more than a few minutes to figure out code of this length. Without documentation, variable names like `@D` and `$temp` are hard to follow. Factoring out repeated calculations and otherwise simplifying the code would also help.

Still, I am quite impressed. Cheok Yin's solution is extremely quick compared to every other solution tested, and the math is interesting.

## Colin Crain {#colin-crain1}

[Colin Crain's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/colin-crain/perl/ch-1.pl) tries every multiple until one is found that doesn't contain any digits from `[2-9]`:

```perl
my $input = shift @ARGV;
my $multiplier = 1;
my $value;
while ( $multiplier++ ) {
    $value = $input * $multiplier;
    next if $value =~ /[23456789]/;
    last;
}
printf "number: %5d       smallest multiple: %-15d\n", $input, $value;
```

## Cristina Heredia {#cristian-heredia1}

[Cristina Heredia's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/cristian-heredia/perl/ch-1.pl) is mutually recursive, and uses global variables:

```perl
no warnings 'recursion';
my $number = $ARGV[0]; # RyanT: Input routines not shown
my $result;
my $multiple = 2;
sub smallestMultiple {
    $result = $number * $multiple;
    checkValues();
}
sub checkValues {
   if ( $result =~ /^[01]+$/ ) {
        $number=~ s/^\s+|\s+$//g;
        print "The smallest multiple is $result\n$number * $multiple = $result\n";
   }
   else {
       $multiple++;
       smallestMultiple();
   }
}
```

`smallestMultiple` calls `checkValues` to see if the `$result` contains only 1s and 0s. Otherwise, it calls back to `smallestMultiple` on the next highest multiple.

Due to the mutual recursion, the stack grows quickly. With an input number of 99, it runs my VM out of memory within a few seconds. On numbers with smaller answers, however, it works just fine.

## Dave Cross {#dave-cross1}

[Dave Cross's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/dave-cross/perl/ch-1.pl) checks every multiple until one is found that doesn't contain any character that isn't a 1 or a 0:

```perl
die "I need a positive integer\n"
  if !@ARGV or $ARGV[0] =~ /\D/ or $ARGV[0] < 1;
my $num = shift;
my $x   = 1;
$x++ while ($num * $x) =~ /[^01]/;
say "$num x $x = ", $num * $x;
```

## Dave Jacoby {#dave-jacoby1}

[Dave Jacoby's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/dave-jacoby/perl/ch-1.pl) counts in decimal, then converts that to binary with `sprintf`. The answer is the first number that is evenly divisible by the input `$n`:

```perl
#!/usr/bin/env perl
sub smallest_multiple( $n ) {
    my $dec = 1;
    while ( 1 ) {
        my $bin = sprintf '%b', $dec;
        return $bin if $bin % $n == 0 ;
        $dec++;
    }
}
```

This solution is quite fast, finding `smallest_multiple(99)` in a mere 1/8th of a second on my machine.

## Duane Powell {#duane-powell1}

[Duane Powell's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/duane-powell/perl/ch-1.pl) checks every multiple, returning the first that matches `/^([01]+)$/`:

```perl
my ($multiple, $next, $solved) = (0,1,0);
until ($solved) {
    $multiple = $number * ++$next;
    # Test if number is comprised just 0's and 1's
    if ($multiple =~ m/^([01]+)$/) {
        # Confirm it's not just all 1's
        $solved = ($multiple =~ m/0/);
    }
}
```

Duane included an additional constraint that the answer must contain at least one zero, so some answers will not line up with those without that constraint. For example, without that constraint, the answer for 9 is 9 x 12_345_679 = 111_111_111, whereas Duane's code returns 9 x 112_345_679 = 1_011_111_111.

## Duncan C. White {#duncan-c-white1}

[Duncan C. White's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/duncan-c-white/perl/ch-1.pl) is self-described as being both "cute" *and* "easy"!

```perl
# My notes: cute, sounds easy.
use Function::Parameters;

fun smallest_binary_multiple( $n ) {
    my $mult = $n;
    do {
        $mult += $n;
    } while ( $mult =~ /[2-9]/ );
    return $mult;
}
```

Duncan's use of the regex and simple `$mult` iteration makes for some "cute" and "easy" code indeed.

## E. Choroba {#e-choroba1}

[E. Choroba's first solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/e-choroba/perl/ch-1.pl) also uses the regex approach:

```perl
sub smallest_multiple {
    my ($n) = @_;
    my $r = $n;
    $r += $n until $r =~ /^[01]+$/;
    $r
}
```

***

[His second solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/e-choroba/perl/ch-1a.pl), however, sacrifices a little brevity for a lot of efficiency, by using a variation of the binary counting method:

```perl
sub smallest_multiple {
    my ($n) = @_;
    return 0 unless $n;

    my $binary = 1 . (0 x (length($n) - 1));
    increment($binary) while $binary % $n;
    $binary
}

sub increment {
    my $pos = rindex $_[0], 0;
    if ($pos > -1) {
        substr $_[0], $pos, 1, '1';
        substr $_[0], $pos + 1, length($_[0]) - $pos - 1,
                         '0' x (length($_[0]) - $pos - 1);
    } else {
        $_[0] = '1' . ('0' x length $_[0]);
    }
}
```

Choroba's `increment` sub is interesting. He has deconstructed the process of counting in binary into this sub, which increments a binary string representation of a number. This solution finds `smallest_multiple(99)` in 0.3 seconds.

**Blog** › [Smallest Multiple and LRU Cache](http://blogs.perl.org/users/e_choroba/2020/03/perl-weekly-challenge-048-smallest-multiple-and-lru-cache.html)

## Ian Rifkin {#ianrifkin1}

[Ian Rifkin's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/ianrifkin/perl/ch-1.pl) counts in decimal and converts to binary for a more efficient loop:

```perl
use Scalar::Util::Numeric qw(isint);
use Math::BigInt;
use Math::BigFloat;

# [Ryan] Ian credits Perl Cookbook for this technique
sub dec2bin {
    my $str = unpack("B32", pack("N", shift));
    $str =~ s/^0+(?=\d)//;   # otherwise you'll get leading zeros
    return $str;
}

my $i = 2;
my $output = undef;
while ($output == undef) {
    my $bin_i = dec2bin($i);
    $i++ and next unless $bin_i =~ /^1[1]*[0]+[0-1]*$/;
    my $test = Math::BigFloat->new($bin_i);
    $test->bdiv($input);
    $output = $bin_i if $test == $test->as_int() and $input != $bin_i;
    $i++;
}
print "\n\nThe smallest multiple of $input with only digits 0 and 1 is: $output\n\n";
```

Even though `dec2bin()` should always give a valid binary string, Ian also checks with a regex: `/^1[1]*[0]+[0-1]*$/`. This regex enforces the additional constraint that the answer must contain at least one zero, which means his answer for, e.g., 99 = `1_101_111_111_111_111_111`, versus `111_111_111_111_111_111`.

The regex also introduces the constraint that the answer be at least two digits, which means, for example, 2 x 5 = 10 and 11 x 1 = 11 are not valid solutions under Ian's interpretation of the challenge.

I would not, in general, recommend `Math::BigFloat` for integers. I did not try to find a case where it produces an invalid result, but I'm fairly certain it will, sooner or later, because of [floating point error](https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html) when converting a decimal number to and from fractional powers of two. These errors can be difficult to detect. I would use [`Math::BigInt`](https://perldoc.perl.org/Math/BigInt.html) instead, to store numbers precisely and avoid any chance of floating point error.

## Jaldhar H. Vyas {#jaldhar-h-vyas1}

[Jaldhar H. Vyas's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/jaldhar-h-vyas/perl/ch-1.pl) uses the regex approach to find a multiple:

```perl
my $num = shift;
my $multiple = $num;
while ($multiple !~ / \A [01]+ \z /gmx) {
    $multiple += $num;
}
say $num, ' x ', $multiple / $num, ' = ', $multiple;
```

## Javier Luque {#javier-luque1}

[Javier Luque's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/javier-luque/perl/ch-1.pl) also uses a regex:

```perl
my $new_number = $number;
while (!($new_number =~ /^[01]+$/)) {
    $new_number = $number * $i++;
}
say "Smallest multiple of $number is $new_number";
```

**Blog** › [049 – Perl Weekly Challenge](https://perlchallenges.wordpress.com/2020/02/28/perl-weekly-challenge-049/)

## Laurent Rosenfeld {#laurent-rosenfeld1}

[Laurent Rosenfeld's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/laurent-rosenfeld/perl/ch-1.pl) also uses a regex to find the lucky winner:

```perl
my $num = shift;
my $i = 1;
while (1) {
    my $result = $num * $i;
    if ($result =~ /^[01]*$/) {
        say "$num * $i = $result";
        last;
    }
    $i++;
}
```

**Blog** › [Smallest Multiple and LRU Cache](http://blogs.perl.org/users/laurent_r/2020/02/perl-weekly-challenge-smallest-multiple-and-lru-cache.html)

## Lubos Kolouch {#lubos-kolouch1}

[Lubos Kolouch's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/lubos-kolouch/perl/ch-1.pl) uses a regex, and gives up early if a solution isn't found within 1000 iterations:

```perl
sub find_multiple_0_1 {
    my $input = shift;
    my $count = 0;
    while ($input !~ /^[01]+$/) {
        $input += $input;
        # for some numbers there is probably no result, so let's just return -1
        return -1 if $count == 1000;
        $count++;
    }
    return $input;
}
```

In case you are wondering, 55 out of the first 100 input numbers have multiples that would require more than 1000 iterations. The first such number is 9 x 12345679, for more than 12 million iterations! Even non-multiples of 9, like 23 = 4787, make a strong showing.

## Mohammad S Anwar {#mohammad-anwar1}

[Mohammad S Anwar's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/mohammad-anwar/perl/ch-1.pl) uses a regex, concisely:

```perl
my ($res, $i);
do { $res = $num * ++$i; } until ($res =~ /^[01]+$/);
print "$num => $res\n";
```

**Blog** › [BLOG: The Weekly Challenge #049](https://perlweeklychallenge.org/blog/weekly-challenge-049)

## Peter Scott {#peter-scott1}

[Peter Scott's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/peter-scott/perl/ch-1.sh) unleashed another one-liner:

```sh
#!/bin/sh
perl -E '$x = shift; $i = 1; $i++ until ($i*$x) =~ /^[01]+$/; say "$i * $x = ", $i*$x' $*
```

Although it's already easy to see it is another multiple/regex-based solution, here it is, unrolled:

```perl
$x = shift;
$i = 1;
$i++ until ( $i * $x ) =~ /^[01]+$/;
say "$i * $x = ", $i * $x
```

## Roger Bell West {#roger-bell-west1}

[Roger Bell West's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/roger-bell-west/perl/ch-1.pl) is another regex-based one:

```perl
foreach my $n (@ARGV) {
    my $t = $n;
    while (1) {
        if ( $t =~ /^[01]+$/ ) {
            print "$t\n";
            last;
        }
        else {
            $t += $n;
        }
    }
}
```

It's an easy yet thoughtful addition to support multiple numbers on the commandline.

## Ruben Westerberg {#ruben-westerberg1}

[Ruben Westerberg's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/ruben-westerberg/perl/ch-1.pl) also uses a regex:

```perl
my ($num, $factor)=($ARGV[0]//55,1);
$factor++ until  ($num*$factor) =~ /^[01]+$/;
printf "Smallest multiple: %d\n",$num*$factor;
```

## Ryan Thompson {#ryan-thompson1}

[My solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/ryan-thompson/perl/ch-1.pl) looks at a few different ways of solving the problem. First is a regex one:

```perl
# For... illustrative purposes only
sub mult_brute {
    local ($_) = @_;
    $_ += $_[0] while /[^10]/;
    $_;
}
```

I then flipped the problem around and iterated over the possible solutions (binary numbers) and I did that first by doing a breadth-first-search, using a queue:

```perl
# 1,478,988% faster than mult_brute
sub mult_bfs {
    my $n = shift;
    my $cur;
    for (my (@r) = $cur = 1; $cur % $n; $cur = shift @r) {
        push @r, $cur . 0, $cur . 1;
    }
    $cur;
}
```

As the comment indicates, the above function was about 1.5 million % faster than the brute force method. I realized that since I was basically just counting in binary, I may as well leave that to the well-optimized Perl builtin:

```perl
sub mult_sprintf {
    my $n = shift;
    for (my $i = 1; ; $i++) {
        my $cur = sprintf '%b', $i;
        return $cur if 0 == $cur % $n;
    }
}
```

That simple optimization was another 30% improvement, and the code is nicer to look at, too.

**Blog** › [Smallest multiple containing only 1 and 0](http://www.ry.ca/2020/03/smallest-multiple/)

## Saif Ahmed {#saiftynet1}

[Saif Ahmed's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/saiftynet/perl/ch-1.pl) includes two methods. First, the "naive" `method1`, is a regex-based one:

```perl
sub method1 {
    my $input = shift;
    return print "Computer says NO!\n",
                 "Multiples of 9 are quicker with method2\n"
                      unless $input % 9;
    my $multiplier = 1;
    while ( ( ( $input * $multiplier ) . "" ) =~ /[2-9]/ ) { $multiplier++ }; increment unt
    print "Input: $input, Multiplier: $multiplier Result: ",
        $input * $multiplier, "\n";
}
```

My guess is that `increment unt` was meant to be a comment, but since `method1` wasn't called from anywhere, it slipped through.

`method2` uses a more efficient iterative approach, essentially a BFS with the queue elements being modified in-place rather than `push`ed and `shift`ed:

```perl
sub method2 {
    my $input = shift;
    my $found = 0;                              # no answer yet
    my @list  = (1);                            # start with @list containing 1
    while ( !$found ) {
        @list = map { $_."0", $_."1" } @list;   # appends "0" or "1" to each element
        foreach (@list) {
            $found = $_
              unless $_ % $input;               # $result stored in $found if multiple found
            last if $found;                     # exit loop once $found
        }
    }
    print "Input: $input, Multiplier: ", $found / $input, "  Result: ", $found, "\n";
}
```

## Jen Guerra {#southpawgeek1}

[Jen Guerra's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/southpawgeek/perl/ch-1.pl) counts in binary with the help of `sprintf`:

```perl
for (my $i = 2;;$i++){
    my $bin = sprintf("%b", $i);
    next if $bin == $int;

    # we know it starts with 1, but make sure there's at least one 0
    next unless $bin =~ /0+/;

    say "$bin is the smallest multiple of $int with 1s *and* 0s."
        and last
        unless $bin % $int;
}
```

Jen is another hacker who enforces the constraint of the answer containing at least one zero. The solution is fast, finding the (significantly larger) 99 -> 1101111111111111111 in just 0.45 seconds on my machine.

## Steven Wilson {#steven-wilson1}

[Steven Wilson's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/steven-wilson/perl/ch-1.pl) uses a regex:

```perl
my $number     = $ARGV[0];
my $mulitplier = 1;
my $smallest_multiple;
while (1) {
    my $mulitple = $mulitplier * $number;
    if ( $mulitple =~ /^[01]*$/ ) {
        $smallest_multiple = $mulitple;
        last;
    }
    $mulitplier++;
}
say $smallest_multiple;
```

## User Person {#user-person1}

[User Person's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/user-person/perl/ch-1.sh) is not one, but *two* one-liners!

```sh
perl -e'$a='$1';$a+='$1'while$a=~/[^01]/;print$a,$/'
perl -e 'my $a = $ARGV[0]; my $b = $a; $a += $b while $a =~ /[^01]/; print"$a\n"' $1
```

The first, a regex-based one, expands to this (I've replaced the shell `$1` with `$ARGV[0]` for clarity):

```perl
$a = $ARGV[0];
$a += $ARGV[0] while $a =~ /[^01]/;
print $a, $/
```

One-liner number two is a slight variation, presumably to be a bit more readable and avoid the tedious shell quoting from the first one:

```perl
my $a = $ARGV[0];
my $b = $a;
$a += $b while $a =~ /[^01]/;
print "$a\n"
```

## Wanderdoc {#wanderdoc1}

[Wanderdoc's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/wanderdoc/perl/ch-1.pl) uses `sprintf` to help count in binary, and also selectively uses `Math::BigInt` when the numbers get too large for Perl's native integers.


```perl
use Math::BigInt;
Math::BigInt->accuracy(30);
my $NUM      = shift or die "Which number?\n";
my $FLAG_2_5 = ( $NUM % 2 == 0 or $NUM % 5 == 0 ) ? 1 : 0;

for my $i ( 1 .. 1_000_000_000 ) {
    my $multiple = sprintf( "%b", $i );
X:  if ( $FLAG_2_5 == 1 and substr( $multiple, -1, 1 ) eq '1' ) { next; }
    if ( length($multiple) > 17 ) {
        my $x      = Math::BigInt->new($multiple);
        my $modulo = $x->bmod($NUM);
        if ( 0 == $modulo ) {
            print $multiple, $/;
            last;
        }
    }
    else {
        if ( 0 == $multiple % $NUM ) {
            print $multiple, $/;
            last;
        }
    }
}
```

Wanderdoc also uses the [Pigeonhole Principle](https://en.wikipedia.org/wiki/Pigeonhole_principle) to potentially avoid a costly `Math::BigInt` conversion. With the `X:` line as-is, n=99 took 13.2 seconds on my system. Commenting that line out, it only took 11.5 seconds. There is quite possibly a savings for larger numbers, that use `Math::BigInt` more heavily, but I did not have the CPU cycles to spare, so I'll take Wanderdoc's word for it. :-)

## Yet Ebreo {#yet-ebreo1}

[Yet Ebreo's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/yet-ebreo/perl/ch-1.pl) uses `sprintf` to iterate over binary numbers to quickly and concisely find the solution:

```perl
my $init = 1;
while (1) {
    my $bin = sprintf "%b", $init++;
    ($bin % $num < 1) && (say $bin) && last
}
```

You know it's compact Perl code when the syntax highlighter gets it wrong.

***

***

# Task #2 - LRU Cache {#task2}

Mohammad's description:

*Write a script to demonstrate **LRU Cache** feature. It should support operations `get` and `set`. Accept the capacity of the LRU Cache as command line argument.*

*Definition of LRU: An access to an item is defined as a get or a set operation of the item. “Least recently used” item is the one with the oldest access time.*

***

This task, being relatively complex compared to other tasks, required more code to implement. Compared to task 1, the solutions were about 3.3 times as long, with a couple being nearly 200 lines. This is therefore one of those tasks I will have to be more selective in the code I highlight. Please do follow the links to see the full code, as many of you put a lot of effort into this one, and I really enjoyed looking at the solutions.

## Solution types


### Doubly-Linked List

Several solutions used some form of [linked list](https://en.wikipedia.org/wiki/Linked_list), although because Perl does not have a core linked list type, the underlying implementations varied.

Tracking the **head** and **tail** of the list is of particular importance here, because you would typically move items to the **head** of the list as part of a `set` or `get` operation, and expire items from the **tail** if the list is over its capacity.

It's possible to implement an LRU cache without maintaining **head** and **tail** references, but the operations are more expensive, as you then need to perform an O(n) scan through the list to find the end, rather than an O(1) lookup. The additional O(1) housekeeping to maintain a **tail** pointer is therefore well worth it for this problem.

### Perl list builtins

Many hackers chose to simply use Perl list builtins (i.e., `splice`) to move and remove elements from the cache. While this makes many operations O(n) instead of O(1) in theory, in practice when the lists are small, the extremely well optimized Perl builtins may be faster. The code is usually simpler, too.

## Alicia Bielsa {#alicia-bielsa2}

[Alicia Bielsa's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/alicia-bielsa/perl/ch-2.pl) stores everything in an `%hCache` hash, and tracks the `$head` and `$tail`. Each cache element is a hash ref with the following structure:

```perl
# Ryan's summary
$hCache{$id} = {
   next      => $next_node,
   prev      => $previous_node,
   value     => $value,  # May be any scalar or ref
   id        => $id,     # Key/identifier
},
```

Here are the `set` and `get` routines:

```perl
sub set {
    my $id = shift;
    my $value = shift;
    if (exists $hCache{$id}){
        $hCache{$id}->{value} = $value;
        moveToHead($hCache{$id});
    } else {
        my $newNode = createNode($id, $value);
        $hCache{$id} = $newNode;
        addToHead($newNode);
        resetTail($newNode);
    }
}

sub get  {
    my $id = shift;
    if (exists $hCache{$id}){
        moveToHead($hCache{$id});
        return $hCache{$id}->{value};
    } else {
        return -1;
    }
}
```

The sub `moveToHead` is an important one in Alicia's algorithm, as of course any element access in an LRU cache means it must move to the front (MRU end) of the list:

```perl
sub moveToHead {
    my $node = shift;
    if ($node eq $head ){
        return;
    }
    if ($node eq $tail ){
        resetTail($node);
    } else {
        extractNode($node);
    }
    addToHead($node);
}
```

Many of the other helper routines in Alicia's solution are worth looking at, as she does a really good job of factoring actions out into logical subroutines, and giving things sensible names.


## Cheok-Yin Fung {#cheok-yin-fung2}

[Cheok-Yin Fung's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/cheok-yin-fung/perl/ch-2.pl) has a doubly-linked list implementation that uses an integer array to maintain indices of `previous` and `coming` (next) list items. The `%cachehash` provides an O(1) map from key to linked list position:

```perl
my $capacity = $ARGV[0];
my @cacheprevious = ( -1 .. $capacity-1);
my @cachecoming = (1..$capacity, -1);    #doubly-linked list
my %cachehash;   #cache item as key, position as value
```

Here is the `set` routine, which shows off the type of logic that Cheok Yin uses throughout this solution:

```perl
sub set {
    $hot = $_[0];
    if ($L < $capacity) {
         #the subroutine laundry makes sure when $L==$capacity, $cachecoming[$L-1] = -1;
        $L++;
        $cachehash{$_[0]} = $L-1;
        if ($L == 1) {
            $cacheprevious[$cachehash{$_[0]}] = -1} else {
            $cacheprevious[$cachehash{$_[0]}] = $tailposition;
        }
        $tailposition = $L-1 ;
        $cachecoming[$cachehash{$_[0]}] = -1;
    } else {
        # cache is full, get rid of the least recently used element
        foreach (keys %cachehash) {
            if ( $cachehash{$_} == 0) {
                $headposition = $cachecoming[$headposition];
                delete $cachehash{$_};
            } else {
                my $v = --$cachehash{$_};
                $cacheprevious[$v]--;
                $cachecoming[$v]--;
            }
        }
        $cachecoming[$tailposition] = $L-1;
        $cachehash{$_[0]} = $L-1;
        $cachecoming[$L-1] = -1;
        $cacheprevious[$L-1] = $tailposition-1;
        $tailposition = $L-1;
    }
    return "";
}
```


## Colin Crain {#colin-crain2}

[Colin Crain's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/colin-crain/perl/ch-2.pl) is an LRU `package` (class):

```perl
my $size = shift @ARGV;
my $cache = LRU->new($size);

package LRU;
sub new {
    my ($class, $size)  = @_;
    my $self    = { "list"      => [],
                    "lookup"    => {},
                    "size"     => $size     };
    bless $self, $class;
    return $self;
}
```

The actual list operations are carried out with `splice`, which are asymptotically slower than the O(1) linked-list operations we've seen, but Perl's `splice` is itself quite well optimized, so for small list sizes, it is likely to compare very favourably.

Here is Colin's `set` routine:

```perl
sub set {
    my ($self, $label, $data) = @_;
    ## if it already exists, bump up its timestamp and update the data
    if (exists $self->{lookup}->{$label} ) {
        $self->{lookup}->{$label} = $data;
        my $idx;
        for ( 1..scalar $self->{list}->@* ) { $idx = $_; last if $self->{list}->[$idx-1] eq $label };
        splice( $self->{list}->@*, $idx-1, 1);
        push $self->{list}->@*, $label;
        say "set($label, $data)   cache is now [", (join ', ',$self->{list}->@*), ']';
        return;
    }
    ## else create and insert at head
    $self->{lookup}->{$label} = $data;
    push $self->{list}->@*, $label;
    ## delete if cache is overfilled
    if (scalar $self->{list}->@* > $self->{size}) {
        my $deleted = shift $self->{list}->@*;
        delete $self->{lookup}->{$deleted};
    }
    ## inspection code left in to demonstrate
    say "set($label, $data)   cache is now [", (join ', ',$self->{list}->@*), ']';
}
```

When given a `$size` on the commandline, Colin's library performs as expected.

## Dave Jacoby {#dave-jacoby2}

[Dave Jacoby's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/dave-jacoby/perl/ch-2.pl) also provides an `LRU` package:

```perl
package LRU;
sub new ( $class, $capacity = 3 ) {
    $capacity = int $capacity;
    croak 'Invalid capacity' if $capacity < 1;
    my $self = {};
    $self->{class}    = $class;
    $self->{cache}    = {};
    $self->{order}    = [];
    $self->{capacity} = $capacity;
    $self->{max}      = $capacity - 1;
    return bless $self;
}
sub set ( $self, $key, $value ) {
    my @array = grep { $_ ne $key } $self->{order}->@*;
    unshift @array, $key;
    $#array              = $self->{max} if $#array > $self->{max};
    $self->{order}->@*   = @array;
    $self->{cache}{$key} = $value;
    for my $k ( keys $self->{cache}->%* ) {
        my $f = grep { $_ eq $k } $self->{order}->@*;
        delete $self->{cache}{$k} if $f == 0 ;
    }
    $self->list();
}
sub get ( $self, $key ) {
    my $n = grep { $_ eq $key } $self->{order}->@*;
    my $flag = $n ? 1 : 0;
    return -1 unless $flag;
    my @array = grep { $_ ne $key } $self->{order}->@*;
    unshift @array, $key;
    $#array = $self->{max} if $#array > $self->{max};
    $self->{order}->@* = @array;
    $self->list();
    return $self->{cache}{$key};
}
```

Dave's code also uses Perl's list builtins, rather than a linked list. This does help make the code somewhat more concise.

## Duane Powell {#duane-powell2}

[Duane Powell's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/duane-powell/perl/ch-2.pl) defines an `LRU_Cache` package, and uses a linked list for the underlying representation of the cache. I'll show the `set` routine:

```perl
sub set {
    my $self = shift;
    my $curr = shift;
    my $data = shift;
    # Count how many times we've been called
    $self->{set}++;
    # On first call the vars head, current and tail are all the same
    if ( $self->{set} == 1 ) {
        $self->{tail} = $curr;
        $self->{head} = $curr;
    }
    # Try to get data before setting data.
    # As written cache values can not be changed, they
    # must be evicted and then re-set
    if ( $self->get($curr, SILENT) eq EVICTED) {
        # Generate new node, set it as the head.
        # Update caches internal pointers.
        my $node = $self->node_generate($data);
        my $old_head = $self->{head};
        my $new_head = $curr;
        $self->{cache}{$old_head}{prev} = $new_head;
        $self->{cache}{$new_head} = $node;
        $self->{cache}{$new_head}{next} = $old_head;
        $self->{head} = $new_head;
        # If the cache is full set new tail and evict old tail
        if ($self->{set} > $self->{cap}) {
            my $old_tail  = $self->{tail};
            $self->{tail} = $self->{cache}{$old_tail}{prev};
            delete $self->{cache}{$old_tail};
        }
    }
    say "set($curr,$data)" if ($self->{verb});
    return $data;
}
```

This demonstrates the core logic in Duane's solution pretty well, I think.  This task is almost a study in edge cases, and Duane does a good job in catching them all.

## Duncan C. White {#duncan-c-white2}

[Duncan C. White's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/duncan-c-white/perl/ch-2.pl) uses Perl's list builtins for a concise solution:

```perl
use Function::Parameters;
fun get( $key ) {
    return -1 unless exists $cache{$key};
    my $x = $cache{$key};
    @keysused = grep { $_ != $key } @keysused;
    unshift @keysused, $key;
    say "debug: keysused = ", join(',',@keysused);
    return $x;
}

fun set( $key, $value ) {
    @keysused = grep { $_ != $key } @keysused;
    unshift @keysused, $key;
    $cache{$key} = $value;
    if( @keysused > $capacity ) {
        my $leastusedkey = pop @keysused;
        delete $cache{$leastusedkey};
    }
    say "debug: keysused = ", join(',',@keysused);
}
```


## E. Choroba {#e-choroba2}

[E. Choroba's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/e-choroba/perl/ch-2.pl) is written in his usual concise style, using Perl list builtins:

```perl
#!/usr/bin/perl
{   package Cache::LRU;
    use enum qw( CAPACITY HASH ARRAY );
    sub new {
        my ($class, $capacity) = @_;
        bless [$capacity, {}, []], $class
    }
    sub capacity { $_[0][CAPACITY] }
    sub _value { $_[0][HASH]{ $_[1] } }
    sub _move_to_start {
        my ($self, $key) = @_;
        @{ $self->[ARRAY] } = ($key, grep $_ ne $key, @{ $self->[ARRAY] });
    }
    sub get {
        my ($self, $key) = @_;
        return undef unless exists $self->[HASH]{$key};
        $self->_move_to_start($key);
        return \$self->_value($key)
    }
    sub set {
        my ($self, $key, $value) = @_;
        $self->[HASH]{$key} = $value if 3 == @_;
        $self->_move_to_start($key);
        delete $self->[HASH]{ pop @{ $self->[ARRAY] } }
            if @{ $self->[ARRAY] } > $self->capacity;
    }
    sub inspect {
        [reverse @{ $_[0][ARRAY] }]
    }
}
```

Factoring out things like `_move_to_start` is smart; even though it's just a one-line function, it's usually wise to avoid repetition, especially if you can clarify your intent with a good self-documenting name like `_move_to_start`.

**Blog** › [Perl Weekly Challenge 049: Smallest Multiple and LRU Cache | E. Choroba [blogs.perl.org]](http://blogs.perl.org/users/e_choroba/2020/03/perl-weekly-challenge-048-smallest-multiple-and-lru-cache.html)

## Ian Rifkin {#ianrifkin2}

[Ian Rifkin's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/ianrifkin/perl/ch-2.pl) takes a much different approach. Ian basically built a REPL loop for his LRU cache using `Term::Prompt` and one big monolithic `while(1) { ... }` loop (Ian did mention he had planned to factor out more code into subroutines).

Here is the `get` operation:

```perl
    if ( $action eq 'get' ) {
        my $item_key = &prompt( 'x', "Input item key to get", '' );
        if ( defined $lru_map{$item_key} ) {
            say "Data from cache for key $item_key:";
            say $lru_map{$item_key}{'data'};
            $lru_map{$head}{'prev'} =
              $item_key;    #set outgoing first item's prev to new first item
            $lru_map{$item_key}{'next'} =
              $head;        #set new item's 'next' to outgoing head
            $head = $item_key;    #Update head to current item key
            $lru_map{$item_key}{'prev'} = undef;   #no prev since first in cache
            if ( $tail eq $head ) {    #if the new head was the old tail
                $tail = $lru_map{$tail}{'next'};    #set tail to new last item
            }
        }
        else {
            say "Item $item_key not currently in cache. Maybe you want to set it?";
        }
    }
```

And here is `set`:

```perl
    elsif ( $action eq 'set' ) {
        my $item_key =
          &prompt( 'x', "Input key of new item to add to the cache", '' );
        my $item_data = &prompt( 'x', "Input item to add to cache", '' );
        $lru_map{$item_key} = {};
        if ($head) {
            $lru_map{$head}{'prev'} =
              $item_key;    #set outgoing head's prev to current item
            $lru_map{$item_key}{'next'} =
              $head;        #set new item's 'next' to outgoing head
        }
        $head = $item_key;    #set new item as head
        $tail = $item_key
          unless $tail;       #set tail if no tail yet AKA 1st in cache
        my $size = keys %lru_map;
        $size--;                     #don't count item being currently added
        if ( $size > $max_cap ) {    #if this new item can't fit in cache
            $tail = $lru_map{$tail}{'prev'};    #set new tail
            delete $lru_map{ $lru_map{$tail}{'next'} }
              ;                                 #delete last item in cache
            delete $lru_map{$tail}{'next'}
              ;    #delete new last item's next since it's now last
        }
        $lru_map{$item_key}{'data'} = $item_data;  #load actual cache
        $lru_map{$item_key}{'prev'} = undef;       #no prev since first in cache
        next;
    }
```

Ian's linked list implementation looks fairly solid to me, including maintaining the head and tail elements to avoid the need to scan the list.

## Javier Luque {#javier-luque2}

[Javier Luque's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/javier-luque/perl/ch-2.pl) uses [`Mouse`](https://metacpan.org/pod/Mouse) for OO. I'm a huge fan of `Mouse`, having used it in plenty of real-world code myself.

Javier's design includes a `Cache::LRU` class that uses `LL::Node` linked list objects as its elements. Each `LL::Node` has a `key` and a `value`, plus `next` and `prev` `LL::Node` references.

The `Cache::LRU` `get` and `set` subs are as follows:

```perl
sub set {
    my ($self, $key, $value) = @_;
    # New node
    my $new_node = LL::Node->new(
        key => $key, value => $value
    );
    # Push out 1 if at capacity
    if ($self->capacity >= $self->max_capacity) {
        my $node_to_kill = $self->first;
        $self->first($self->first->next);
        delete $self->positions->{$node_to_kill->key};
        $self->capacity($self->capacity - 1);
    }
    # Set the first and last reference to the new node
    if ( $self->first ) {
        $self->last->next($new_node);
        $new_node->prev($self->last);
    } else {
        $self->first($new_node);
    }
    $self->last($new_node);
    $self->positions->{$key} = $new_node;
    $self->capacity($self->capacity + 1);
    say "Setting: ($key, $value)" . $self->show_nodes;
}
```

```perl
sub get {
    my ($self, $key) = @_;
    my $node = $self->positions->{$key};
    # Cache miss
    unless ($node) {
        say "Getting: ($key) - cache miss" .
            $self->show_nodes;
        # Return the cache miss -1
        return -1;
    }
    # This might be the first node
    if ($node->prev) {
        $node->prev->next($node->next)
    } else {
        $self->first($node->next);
    }
    $node->prev($self->last);
    $self->last->next($node);
    $node->next(undef);
    $self->last($node);
    my $value = $node->value;
    say "Getting: ($key) Value: $value)" . $self->show_nodes;
    return $node->value;
}
```

**Blog** › [049 Perl Weekly Challenge](https://perlchallenges.wordpress.com/2020/02/28/perl-weekly-challenge-049/)

## Laurent Rosenfeld {#laurent-rosenfeld2}

[Laurent Rosenfeld's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/laurent-rosenfeld/perl/ch-2.pl) is functional. It begins with a call to `create_lru`, which is a closure around the state (`%cache` and `@order`, for a Perl list builtin underlying representation). `create_lru` returns two subroutine references: the `$getter` and the `$setter`:

```perl
sub create_lru {
    my $capacity = shift;
    my (%cache, @order);
    sub display { say "Order: @{$_[0]} \n", "Cache: ", Dumper $_[1];}
    my $setter = sub {
        my ($key, $val) = @_;
        $cache{$key} = $val;
        push @order, $key;
        if (@order > $capacity) {
            my $invalid = shift @order;
            delete $cache{$invalid};
        }
        display \@order, \%cache;
    };
    my $getter = sub {
        my $key = shift;
        return -1 unless exists $cache{$key};
        @order = grep { $_ != $key } @order;
        push @order, $key;
        display \@order, \%cache;
        return $cache{$key}
    };
    return $setter, $getter;
}
```

These then work like any other sub refs, but both references act on the common state created by the initial call to `create_lru` (meaning, you could have multiple caches if you wanted, just as with the OO solutions):

```perl
my ($set, $get) = create_lru(3);
$set->(1, 3);
$set->(2, 5);
$set->(3, 7);
say "should print  5: ", $get->(2);
say "should print  3: ", $get->(1);
say "should print -1: ", $get->(4);
$set->(4, 9);
say "should print -1: ", $get->(3);
```

It's a different and fun way to do it (these were Laurent's stated design motivations, which I wholeheartedly agree with!). If you aren't familiar with functional programming, this is a great example to rip apart to figure out how it works.

**Blog** › [Smallest Multiple and LRU Cache](http://blogs.perl.org/users/laurent_r/2020/02/perl-weekly-challenge-smallest-multiple-and-lru-cache.html)

## Lubos Kolouch {#lubos-kolouch2}

[Lubos Kolouch's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/lubos-kolouch/perl/ch-2.pl) uses the [`Cache::LRU`](https://metacpan.org/pod/Cache::LRU) CPAN package:

```perl
use Cache::LRU;
my $size = $ARGV[0] or die 'Usage: script size';
my $cache = Cache::LRU->new(
    size => $size
);
use Test::More;
$cache->set(1=>3);
$cache->set(2=>5);
$cache->set(3=>7);
is($cache->get(2),5);
is($cache->get(1),3);
is($cache->get(4),undef);
$cache->set(4=>9);
is($cache->get(3),undef);
```

## Mohammad S Anwar {#mohammad-anwar2}

[Mohammad S Anwar's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/mohammad-anwar/perl/ch-2.pl) also uses `Cache::LRU`:

```perl
use Cache::LRU;
my $cache = Cache::LRU->new(size => 3);
$cache->set(1 => 3);
$cache->set(2 => 5);
$cache->set(3 => 7);
print "get(2) => ", $cache->get(2), "\n";
print "get(1) => ", $cache->get(1), "\n";
print "get(4) => ", $cache->get(4)||-1, "\n";
$cache->set(4 => 9);
print "get(3) => ", $cache->get(3)||-1, "\n";
```

**Blog** › [BLOG: The Weekly Challenge #049](https://perlweeklychallenge.org/blog/weekly-challenge-049)

## Roger Bell West {#roger-bell-west2}

[Roger Bell West's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/roger-bell-west/perl/ch-2.pl) defines a `Local::LRU` package:

```perl
package Local::LRU;

sub new {
    my $class = shift;
    my $self  = {};
    $self->{size}  = shift || 3;
    $self->{store} = {};
    $self->{lru}   = [];
    bless $self, $class;
    return $self;
}
```

`set` and `get` are nice and short, thanks to using Perl list builtins:

```perl
sub set {
    my $self = shift;
    my $k    = shift;
    my $v    = shift;
    $self->{store}{$k} = $v;
    $self->update_lru($k);
    if ( scalar @{ $self->{lru} } > $self->{size} ) {
        delete $self->{store}{ $self->{lru}[0] };
        shift @{ $self->{lru} };
    }
}

sub get {
    my $self = shift;
    my $k    = shift;
    if ( exists $self->{store}{$k} ) {
        $self->update_lru($k);
        return $self->{store}{$k};
    }
    else {
        return -1;
    }
}

sub update_lru {
    my $self = shift;
    my $k    = shift;
    my @l    = grep { $_ != $k } @{ $self->{lru} };
    push @l, $k;
    @{ $self->{lru} } = @l;
}
```

Factoring out `update_lru` was a good decision.

## Ruben Westerberg {#ruben-westerberg2}

[Ruben Westerberg's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/ruben-westerberg/perl/ch-2.pl) uses a `given`..`when` block to handle the different commands:

```perl
given ($cmd) {
    when ($GET_CMD) {
        print "\nRead Cache: ";
        do {
            given ( $index{$index} ) {
                when (undef) {
                    print "-Miss\n";

                    #cache miss
                    my $val = largeSlowStore( $GET_CMD, $index );
                    fastSmallCache( $UPDATE_CMD, $index, $val )
                      if defined $val;
                }
                default {
                    #cache hit
                    print "-Hit\n";
                    fastSmallCache( $UPDATE_CMD, $index, $_ );
                }
            }
        }
    }
    when ($SET_CMD) {
        print "\nWrite cache: \n";
        fastSmallCache( $UPDATE_CMD, $index, $value );
    }
    when ($UPDATE_CMD) {
        print "Updating cache: $index =>  $value\n";
        my ($k) = grep { $lru[$_] == $index } 0 .. @lru - 1;
        my $tmp;
        $tmp = splice @lru, $k, 1 if defined $k;

        #print "cached pre key: $tmp\n";
        my $del = shift @lru unless @lru < $capacity;
        if ( defined $del ) {
            print "Cache overflow\n";
            largeSlowStore( $SET_CMD, $del, $index{$del} );
            delete $index{$del};
        }
        push @lru, $index;
        $index{$index} = $value;
    }
}
```

Under the hood, Ruben uses Perl list builtins (`splice`, etc.) to maintain the internal list.

## Ryan Thompson {#ryan-thompson2}

[My solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/ryan-thompson/perl/ch-2.pl) is another linked list OO implementation. My class, `Local::LRU`, supports `get`, `set`, and a few others, like `capacity`, which allows the capacity to be changed after the cache exists. Here are the `get` and `set` operations:

```perl
sub set {
    my ($s, $key, $val) = @_;
    $s->evict($key) if $s->exists($key);
    my $elem = { key => $key, val => $val, next => $s->{_head} };
    $s->{_cache}{$key} = $elem;
    $s->{_head} and $s->{_head}{prev} = $elem;
    $s->{_tail} //= $elem;
    $s->{_head} = $elem;
    $s->{_length}++;
    $s->_expire;
    $val;
}

# Get an item named $key, or croak
sub get {
    my ($s, $key) = @_;
    croak "$key does not exist" unless $s->exists($key);
    my $val = $s->{_cache}{$key}{val};
    $s->set($key, $val);
}
```

As you can see, a `get` is basically a `set`, since the item needs to be promoted to the head of the list regardless, so I just call `set`.

**Blog** › [LRU Cache](http://www.ry.ca/2020/03/lru-cache/)

## Saif Ahmed {#saiftynet2}

[Saif Ahmed's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/saiftynet/perl/ch-2.pl) is another REPL "shell". Saif sets up a dispatch table to define the allowed operations (the `re` regexps are there only to extract parameters):

```perl
my %dispatch=(
  set     =>{   # set (key,value) or set key,value: sets a key with a value
    re      =>'\s*\(?\s*\b(.+)\b\s*,\s*\b(.+)\b\s*\)?',
    action =>sub{my ($p1,$p2)=@_;set($p1,$p2)},
  },
  get     =>{   # get (key) or get key : gets key value
    re      =>'\s*\(?\s*\b(.+)\b\s*\)?',
    action  =>sub{my ($p1)=@_;print get($p1),"\n";},
  },
  cache   =>{   # cache: prints cache in recency order
    re      =>'cache',
    action  =>sub{printCache()},
  },
  ...
);
```

Here are the `get` and `set` routines, along with a helper, `access`:

```perl
sub access {
    my $key = shift;    # key being accessed
    push @recency, $key;    # put the key into most recently used
         # starting from next most recently used slot, search for key
         # and remove any other occurence of key;
    my $index = $#recency - 1;
    $index-- while ( ( $index >= 0 ) and ( $recency[$index] ne $key ) );
    splice @recency, $index, 1 if ( $index >= 0 );

    # if capacity exceeded then shift lru out and delete from cache
    delete $cache{ shift @recency } while ( $capacity < @recency );
}

sub get {    # get value if key exists else -1
    my $key = shift;
    return -1 unless exists $cache{$key};
    access($key);          # recency updated
    return $cache{$key}    # return stored value
}

sub set {                  # set key value pair
    my ( $key, $value ) = @_;
    $cache{$key} = $value;
    access($key);          # recency updated
}
```

## Jen Guerra {#southpawgeek2}

[Jen Guerra's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/southpawgeek/perl/ch-2.pl) has a `set` and a `get`, and (aside from some initialization code) that's it!

```perl
sub set {
    my ( $key, $val ) = @_;

    # remove oldest element if we're full
    if ( scalar @keys >= $cap ) {
        my $discard = shift @keys if scalar @keys >= $cap;
        delete $cache{$discard};
    }

    # push returns number of elements, so subtract 1
    my $index = ( push @keys, $key ) - 1;

    # populate the cache
    $cache{$key} = { 'value' => $val, 'index' => $index };
}
```

```perl
sub get {
    my $key = shift;
    my $val = $cache{$key}->{'value'} || undef;
    my $index = $cache{$key}->{'index'};
    my $removed = splice @keys, $index, 1;
    push @keys, $key;

    # this will be number of elements - 1 unless something has gone wrong
    $index = scalar @keys - 1;

    # also update the cache index
    $cache{$key}->{'index'} = $index;
    return $val;
}
```

There was quite a bit more debug code in the original solution, so if you want to see this one in motion, you'll be greeted with a good look at what is going on inside.

## User Person {#user-person2}

[User Person's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/user-person/perl/ch-2.pl) is also basically just `lruSet` and `lruGet`:

```perl
my @cIndex    = ();
my %cache     = ();
sub lruSet {
    my $lruPos = $_[0];
    my $lruVal = $_[1];
    if (exists($cache{$lruPos})) {
        print "position $lruPos currently occupied in cache\n\n";
    } else {
        push @cIndex, $lruPos;
        $cache{$lruPos} = $lruVal;
        if ( scalar @cIndex == $CAPACITY ) {
            print "\nCache at this point:\n";
            showCache;
        } elsif ( scalar @cIndex > $CAPACITY ) {
            my $shifted = shift @cIndex;
            delete $cache{$shifted};
            print "Cache is full, so pushes out key = $shifted:\n";
            showCache;
        }
    }
}
```

```perl
sub lruGet {
    my $lruInd = $_[0];
    my $lruGetRet = -1;
    if (exists($cache{$lruInd})) {
        my $moveElement;
      FIND:
        for (my $j = 0;$j <= $#cIndex; ++$j) {
            if ( $cIndex[$j] == $lruInd ) {
                $moveElement = $j;
                last FIND;
            }
        }
        if ($moveElement != $#cIndex) {
            my $toPush = splice @cIndex,$moveElement, 1;
            push @cIndex, $toPush;
        }
        $lruGetRet = $cache{$lruInd};
    }
    return $lruGetRet;
}
```

## Wanderdoc {#wanderdoc2}

[Wanderdoc's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/wanderdoc/perl/ch-2.pl) gives us an `LRU` class using Perl list builtins to manage the internal list:

```perl
#!perl
package LRU {

    ...

    sub set {
        my ($self, $key, $value) = @_;
        push @{ $DATA{refaddr $self} }, {$key => $value};
        while ( scalar @{ $DATA{refaddr $self} } > $CAPACITY{refaddr $self} ) {
            shift @{ $DATA{refaddr $self} };
        }
        $self->_update_map;
    }

    sub get {
        my ($self, $key) = @_;
        $self->_update_map;
        return -1 if not exists $MAP{refaddr $self}{$key};
        my $idx = $MAP{refaddr $self}{$key};
        my $value = $DATA{refaddr $self}[$idx]->{$key};
        my $last = splice( @{$DATA{refaddr $self}}, $idx, 1);
        push @{$DATA{refaddr $self}}, $last;
        $self->_update_map;
        return $value;
     }

     sub _update_map {
        my $self = shift;
        %{$MAP{refaddr $self}} =
            map { my ($k) = keys %{$DATA{refaddr $self}[$_]}; $k => $_;}
            0 .. $#{ $DATA{refaddr $self} };
     }
1;
}
```

## Yet Ebreo {#yet-ebreo2}

[Yet Ebreo's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-049/yet-ebreo/perl/ch-2.pl) gives us an OO `lru` class and a `splice` based list. Here are `set` and `get`:

```perl
sub set {
    my ($self, $key, $value) = @_;
    #Delete LRU from hash and update order if
    #cache is FULL (hash size is equal to cache size)
    if ((!exists ($self->{hash}{$key})) && (~~keys %{$self->{hash}} >= $self->{size})) {
        delete $self->{hash}{$self->{order}[0]};
        shift @{$self->{order}};
    }
    #Update order array
    #If the key already exists in cache remove the key from order array then...
    if (exists ($self->{hash}{$key})) {
        @{$self->{order}} = grep  { $_ != $key } @{$self->{order}};
    }
    #put it in last/highest index (Considered as MRU)
    push @{$self->{order}}, $key;
    #Update hash key-value pair
    $self->{hash}{$key} = $value;
}

sub get {
    my ($self, $key) = @_;
    if (exists $self->{hash}{$key}) {
        #Update the order of the array same as the one in Set method
        @{$self->{order}} = grep  { $_ != $key } @{$self->{order}};
        #put it in last/highest index (Considered as MRU)
        push @{$self->{order}}, $key;
        #Return the value of the given key
        return $self->{hash}{$key}
    } else {
        return -1;
    }
}
```

***

***

## See Also {#blogs}

### Blogs this week:

**E. Choroba** › [Smallest Multiple and LRU Cache](http://blogs.perl.org/users/e_choroba/2020/03/perl-weekly-challenge-048-smallest-multiple-and-lru-cache.html)

**Javier Luque** › [049](https://perlchallenges.wordpress.com/2020/02/28/perl-weekly-challenge-049/)

**Laurent Rosenfeld** › [Smallest Multiple and LRU Cache](http://blogs.perl.org/users/laurent_r/2020/02/perl-weekly-challenge-smallest-multiple-and-lru-cache.html)

**Luca Ferrari** › [LRU and Smallest Multiples made by 1 and 0](https://fluca1978.github.io/2020/02/24/PerlWeeklyChallenge49.html)

**Mohammad S Anwar** › [BLOG: The Weekly Challenge #049](https://perlweeklychallenge.org/blog/weekly-challenge-049)

**Ryan Thompson** › [Smallest multiple containing only 1 and 0](http://www.ry.ca/2020/03/smallest-multiple/) | [LRU Cache](http://www.ry.ca/2020/03/lru-cache/)
