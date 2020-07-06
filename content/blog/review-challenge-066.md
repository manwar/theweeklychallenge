---
author:       Colin Crain
date:         2020-07-05T00:00:00
description:  "Colin Crain › Perl Weekly Review #066"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #066"
image:        images/blog/p5-review-challenge-066.jpg
type:         post
---

Continues from [previous week](/blog/review-challenge-065/).

Welcome to the Perl review for Week 066 of the Weekly Challenge! For a quick overview, go through the [original tasks](/blog/perl-weekly-challenge-066/) and [recap](/blog/recap-challenge-066/) of the weekly challenge.

## Getting in Touch

<a href="mailto:pwc.perfectwave@gmail.com"><img src="http://ry.ca/misc/Email.svg" height="50" width="50"> Email</a> › Email me (Colin) with any feedback about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="http://ry.ca/misc/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="http://ry.ca/misc/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

We'd greatly appreciate any feedback you'd like to give.

## [BLOGS](#blogs)

***
# TASK #1 › Divide Integers

You are given two integers $M and $N.

Write a script to divide the given two integers i.e. $M / $N
without using multiplication, division and mod operator and
return the floor of the result of the division.

Example 1:
```
    Input: $M = 5, $N = 2
    Output: 2
```

Example 2:
```
    Input: $M = -5, $N = 2
    Output: -3
```

Example 3:
```
    Input: $M = -5, $N = -2
    Output: 2
```

***

I think this challenge can be solidly placed under the broad heading of "deceptively simple". Out of 20 solutions submitted, 16 of those used some variation on the same method of subtracting down the dividend. Also, out of those 20 submissions, no less than **half** had some sort of serious bug left in their code.  As I said, ***deceptively*** simple. There is no one single reason to explain this rather unusual outcome, but there were three distinct categories. To explore the problem, let's start by taking a look at that most common methodology.

### the STANDARD solution

Integer division on two positive numbers can be done in a few lines by repeatedly subtracting the denominator from the numerator (or divisor from the dividend, if you prefer), counting until the total drops below 0 and keeping track of the iterations. One can alternately add upwards toward the numerator, but that makes no difference. It's the number of iterations of this procedure that is the integer part of the quotient.

To implement this for negative numbers, most people kept the positive algorithm, choosing to take the absolute value of both inputs while keeping track of the number of sign changes. Switching the signs on both inputs produces the same positive quotient, while only having one or the other negative requires reversing the sign of the result. This is where things get tricky.

The challenge requests the *floor* of the result, which for positive values is the same as the integer part. The floor, though, is actually *the largest integer less than the value*, which is something slightly different. For negative values, it will **generally** be the value of the positive integer division - 1. But not always, as I will explain.

As I said, a solid 3/4 of the submissions were based around this basic structure. Some people added up to the numerator but not over. Some people used abs(), some rolled their own. I myself decided unitary negation looked an awful lot like multiplying by -1, so I made a routine that subtracted from 0 instead.

The team that utilized this method were
[**3ter**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/3ter/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/arne-sommer/perl/ch-1.pl),
[**Bartosz Jarzyna**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/brtastic/perl/ch-1.pl),
[**Craig**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/craig/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/dave-jacoby/perl/ch-1.pl)
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/e-choroba/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/jaldhar-h-vyas/perl/ch-1.pl),
[**Javier Luque**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/javier-luque/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/laurent-rosenfeld/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/perlboy1967/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/roger-bell-west/perl/ch-1.pl),
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/steven-wilson/perl/ch-1.pl),
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/walt-mankowski/perl/ch-1.pl),
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/wanderdoc/perl/ch-1.pl), and
[**Myself**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/colin-crain/perl/ch-1.pl).

A nice, airy, easy-to-read example of this method is provided by [**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/steven-wilson/perl/ch-1.pl):

```perl
sub divide {
    my ( $M, $N ) = @_;
    my ( $a, $b ) = ( abs($M), abs($N) );
    my $q = 0;
    while ( $a >= $b ) {
        $q++;
        $a -= $b;
    }
    if ( ( ( $M < 0 ) && ( $N > 0 ) ) || ( ( $N < 0 ) && ( $M > 0 ) ) ) {
        $q = -$q;
        $q-- if $a != 0; # if neg and has remainder, floor number
    }
    $q;
}
```

### the BUGS

Let me come out and say I don't feel it's my place to call anybody out for mistakes in their code. This isn't grading papers. I prefer to think of it as an opportunity to look thorough the varied efforts the people put forth and highlight some of those interesting bits of code the crowd has brought. It's a celebration, not a critique. A potlatch, if you will. So let me just lay out the problems people had, and all of you can take from that as you may.

* The first common problem came from jumping the gun on reading the text. The challenge appears to ask for integer division, but on closer reading actually asks for the floor. I admit I did this myself, on first pass. It was only when I went to implement negative inputs that I noticed that it said "floor", and that would complicate things. For a moment there, I had made an algorithm for integer division and thought I was done, as, apparently, several other people did as well.

* Another class of bugs may have come from the specific examples given, in that 5 does not evenly divide into 2 parts -- it has a remainder of 1. This resulted in several people making code like that shown below. See the error? If the denominator divides in evenly, the remainder will be 0, which is perfectly valid. The operator should be **greater than or equal to** to allow for this possibility. Not gonna lie, I think I may have done this at some point as well when figuring it out. A number of people only tested for the given examples and let this slip.

```perl
        while ($numerator - $denominator > 0) {
                $numerator = $numerator - $denominator;
                $quotient++;
        }

```

* The third, final and most devious bug came from the floor function itself, and its relationship to negative numbers. Not actually restricted, some people used `POSIX::floor` and avoided the issues completely, but most reversed the sign on their own, and, when doing that, realized they needed to subtract 1. The problem arises in the fact that this is a hack, and what really happens when you reverse the sign on the **floor(*x*)** function is that you get the **ceiling(*x*)** function. But, you say, if the floor is the largest integer below, and the ceiling the smallest integer above, isn't the difference between the two the very 1 you are subtracting? Why yes, yes it is, **except when floor is equal to the ceiling**. This case is true when *x* is an integer, which in turn affects our calculation when the division works out evenly. In that case we subtract nothing. This bug, again, showed up several times.

I'll leave it to the individual authors to decide whether they need to smack their foreheads and go "d'oh!"

## UNIQUE approaches and other THINGS THAT CAUGHT MY EYE

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/athanasius/perl/ch-1.pl)

With the code block

```perl
if ($M != 0)
{
    my $ratio = exp( log(abs $M) - log(abs $N) );

    $quotient = (($M > 0) && ($N > 0) ||
                 ($M < 0) && ($N < 0)) ? floor($ratio) : -ceil($ratio);
}
```

the **Athanasius** brings a number of unusual items to the table. For one, they, along with **Pete Houston**, below, used logarithms to solve the problem. This is a fine example of the 'other' way to do it. For a more in-depth look at that method, look to the writeup for Pete.

What really got my attention was the Regex::Common module for data validation, specifically the construct

```perl
$ARGV[0] =~ / ^ $RE{num}{int} $ /x
```

As you might expect, this provides a regular expression that matches only an integer. Being an enthusiast, at first I didn't see much use in this module, but now, for data validation, where ease and consistency across perhaps a suite of scripts is paramount, I think I begin to see the light.

***

### [**Bartosz Jarzyna**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/brtastic/perl/ch-1.pl)

```perl
sub funky_division
{
    my ($am, $an) = map abs, my ($m, $n) = @_;
    my $is_negative = (($m != $am) xor ($n != $an));

    my @mul_map = (0); # zero is always zero
    while ($mul_map[-1] <= $am) {
        push @mul_map, $mul_map[-1] + $an;
    }

    my $result = first { $mul_map[$_] <= $am }
        reverse keys @mul_map;

    return $is_negative ? -$result : $result;
}
```

Beneath the surface, Bartosz' submission *works* along the standard lines, but very little of his actual code *looks* like it. Take for instance the line

```perl
    my ($am, $an) = map abs, my ($m, $n) = @_;
```

I enjoyed the use of the `map()` here and never considered that one could declare the assignment of $m and $n in the middle of a chain like that. And it just looks so nice, to boot.

That line both gets the assignments out of the way, while preserving the original input to refer in the *next* line, which establishes the sign of the result.

And to get that result, he uses an array to add up values until he's past the dividend, then reverses the array and looks from the end for the highest value less than it, using List::Util's first() function. It's certainly one way to get there...

Oh, and I liked his function name, too. Quite apropos.

***

### [**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/jo-37/perl/ch-1.pl)

As **Jorg** himself puts it, his code `Performs basically a long division.` I'll let his code speak for itself.

```perl
# long division
my ($quotient, $remainder);
while (length $dividend > 0) {
    $remainder .= substr $dividend, 0, 1, '';
    my $digit = 0;
    for (; $remainder >= $divisor; $remainder -= $divisor) {
        $digit++;
    }
    $quotient .= $digit;
}
```

It's a particularly adventurous way to go about it, I'd say.

***

### [**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/perlboy1967/perl/ch-1.pl)

I said earlier that *most* people chose to do one version of integer division and adjust the results for negative values. Not so with Niels, who chose to write out the individual cases. I mean, there *are* only 4. His version of a hobbled together switch is one I don't recall ever seeing before, but it does quite a nice job at giving the cases equal visual footing, and I think ends up both readable and clear:

```perl
  if (0) {
  } elsif ($M > 0 and $N > 0) {
    # Positive number divided by positive number OK
    while ($M - $N >= 0) { $M -= $N; $D++; } $R = $M;
  } elsif ($M > 0 and $N < 0) {
    # Positive number divided by negative number OK
    while ($M + $N >= 0) { $M += $N; $D--; } $R = $M;
  } elsif ($M < 0 and $N > 0) {
    # Negative number divided by positive number
    while ($M + $N <= 0) { $M += $N; $D--; } $R = -$M;
  } elsif ($M < 0 and $N < 0) {
    # Negative number divided by negative number
    while ($M - $N <= 0) { $M -= $N; $D++; } $R = -$M;
  }
```

***

### [**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/pete-houston/perl/ch-1.pl)

**Pete** has chosen to eschew the standard method completely, relying on that link between the additive and multiplicative worlds, the logarithm. Specifically the particular logarithmic equality

    log (x/y) = log x - log y

This holds for logs of any base. As logs of negative numbers make no sense, we will still need to use the absolute values, and reestablish the correct sign for the result. As noted, a proper floor() function is available in the POSIX core module to finish the job.

Thus the final routine is short and succinct:

```perl
sub intdiv {
    my ($num, $den) = @_;
    my $ans = exp (log (abs ($num)) - log (abs ($den)));
    my $neg = ($num < 0 xor $den < 0);
    return floor $neg ? -$ans : $ans;
}
```

***

### [**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/roger-bell-west/perl/ch-1.pl)

Although **Roger**'s solution mostly falls along the standard lines, he does bring a great optimization to us. For the trivial examples of 5 ÷ 2, looping a few times is no bother. But what about dividing 5000000 by 2? Yes, subtracting 2500000 times *will* work, but can hardly be called efficient. What Roger does is first create a list of compounded doubles of the divisor, along with the their associated multipliers, by simply adding the previous entry to itself until the dividend is exceeded. So to divide 300 by 12, for instance, he first precomputes the list

```perl
[[384, 32], [192, 16 ], [96, 8 ], [48, 4 ], [24, 2], [12, 1] ]
```

By working through from this list to do the subtractions, he can remove multiples of 12 in one pass. The first pair is rejected for being too large, but the next allows us to remove 16 12s, for a remainder of 108. Then the pair [96, 8 ] allows us to remove 8 more, remainder 12. Several entries are skipped, until finally we remove one more, for a total of 25. We've reduced 25 subtractions to three plus a little overhead. Nice.

***

### [**Yet Ebreo**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/yet-ebreo/perl/ch-1.pl)

Out on the golf course with **Yet Ebreo**, we slice into the rough with

```perl
($m,$n)=@ARGV;
($x,$y)=(~~$m,~~$n);
$r=()=(1x$m)=~/1{$y}/g;
$y&&print$m<0^$n<0?-$r:$r;
```

It's still not clear to me what's supposed to be going on with the pairs of unitary bitwise negation operators in line 2. Both $x and $y do need to be positive for line 3 to make sense (I'll get to that), but what they seem to be doing *here* is coercing the values of $m and $n to integers. Sure, they do need to be integers, but the input also needs to be positive for line 3 to work. Looking at line 4 suggests the familiar abs() step.

And what, exactly, is going on with line 3? Line 3 is cool, that's what.

Reading from the middle, the line:
```perl
    $r =()= ( 1 x $m ) =~ /1{$y}/g;
```

makes a string of *m* 1s, then matches globally for a string of *n* 1s on that string. The, er, "Saturn" operator forces list context so the length of the list, the number of matches, are collected by $r.

Then in line 4, unless $y is 0, print either $r or -$r depending on whether $m or $n, but not both, are negative. Yea its a little buggy. Obviously it's hard to read, but I think that was part of the plan. In any case it's entertaining.

***
# TASK #2 › Power Integers

You are given an integer $N.

Write a script to check if the given number can be expressed as m^n where m and n are positive integers. Otherwise print 0.

Please make sure m > 1 and n > 1.

BONUS: If there are more than one ways to express the given number then print all possible solutions.

Example 1:
```
For given $N = 9, it should print 32 or 3^2.
```
Example 2:
```
For given $N = 45, it should print 0.
```
Example 3:
```
For given $N = 64, it should print all or one of 8^2 or 2^6 or 4^3.
```

***

## SOLUTION TYPES

There was really one easy method used to solve this challenge, and that was to brute force it; to try a bunch of values and notice when one fit. Or maybe three methods, depending on how you count.

### Brute Force

By iterating $m up from 2 to sqrt($n), each value can be checked with increasing powers until it exceeds $n. All in all this isn't the worst plan, because the range is constricted quite a bit by the square root, and the higher powers checked quickly become large.

This method was used by [**3ter**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/3ter/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/arne-sommer/perl/ch-2.pl),
[**Bartosz Jarzyna**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/brtastic/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/dave-jacoby/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/e-choroba/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/jaldhar-h-vyas/perl/ch-2.pl),
[**Javier Luque**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/javier-luque/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/jo-37/perl/ch-2.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/mohammad-anwar/perl/ch-2.pl) and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/wanderdoc/perl/ch-2.pl)


### Brute Force, Refined

Basically inverting the logic in the above algorithm, we can instead choose to iterate over the roots of $N rather than the bases, trying the square root, the cube root, the fourth root etc, and seeing whether any come out even.

This method was used by
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/athanasius/perl/ch-2.pl),
[**Craig**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/craig/perl/ch-2.pl) and
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/pete-houston/perl/ch-2.pl)

### Brute Force, using Logarithms

The equations can be recast using logarithms, as exemplified in **Yet Ebreo**'s example:

```perl
while ($d < 1+sqrt $n) {
    ( $e = ((log $n) / (log $d))  ) !~ /\./ ? last : $d++;
}

say $e =~ /\./ ? 0 : "$d^$e"
```

That's a really interesting way to check for an integer, there.

This method was used by

[**Yet Ebreo**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/yet-ebreo/perl/ch-2.pl),
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/walt-mankowski/perl/ch-2.pl), and
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/perlboy1967/perl/ch-2.pl)

### My Own Method

I chose, as is often my wont, a more complicated way to approach the challenge. I go into greater detail of my analysis in [**my blog**](https://colincrain.wordpress.com/2020/06/29/embrace-the-power-sewing-division-with-stone-tools/), but the short version is that I chose to break down the input into a list of prime factors, and see what I could do to rearrange them into the form m^n to find solutions.

To do this I recycled a prime factorization routine last seen in PWC41, spruced it up a bit and made a hash of the output, of factors mapped to their incidence counts. As it works out, a couple of observations guide us. The first is that any hash with value of one in it cannot be expressed as m^n (with n > 1). That would mean the power was 1, and that's not what we're looking for. Following from this, the power will evenly divide every value of the hash, so the power *n* will in turn be the smallest value of the hash, which we then divide out from the rest of the values. If everything comes out evenly, we're good. To get the base, we compute product of the keys raised to their values. The solution is the base raised to the power.

[**Roger Bell_West's**](#rbw) solution takes a similar constructive approach, but he goes about things a little differently; have a look at his writeup below for more details.

***

## UNIQUE approaches and other THINGS THAT CAUGHT MY EYE

### [**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/athanasius/perl/ch-2.pl)

I really enjoyed this bit from the Monk:

```perl
# The minimum exponent n is 2, since n > 1 (given)
# The maximum exponent n is that for which the base m is minimum (also 2),
#     so  2^n = N  =>  n = log⸤2⸥(N)

my $max_n = int( log($N) / log(2) );

for my $n (2 .. $max_n)                         # exponent
{
    my $m = int( ($N ** (1 / $n)) + 0.5 );      # base
    my $p = int( ($m ** $n)       + 0.5 );      # power

    push @powers, "$m^$n" if $p == $N;
}
```

***

### [**Bartosz Jarzyna**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/brtastic/perl/ch-2.pl)

Using a brute force technique, Bartosz brings us a nice optimization:

```perl
if ($int % $base == 0) { ... }
```

which rejects even looking at bases that aren't a factor of the input. Several people employed this.

Particularly noteworthy is his use of cool mapping to unicode superscripts:

```perl
my @superscripts = qw(
    ⁰ ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹
);

if ($base ** $power == $int) {
    my $unicode_power = join "", map {
        $superscripts[$_]
    } split //, $power;
```

You can read more on his [**blog**](https://brtastic.xyz/blog/article/perl-weekly-66).

***

### [**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/cheok-yin-fung/perl/ch-2.pl)

**Cheok-Yin** takes a unique approach, factoring downwards from the highest prime under the squareroot. When she finds one, she then continues, looking for more. After an adventure of routines, she finds the solution, and it works.

***

### [**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/e-choroba/perl/ch-2.pl)

Unwound, this is another version of the brute force approach, but **Choroba** manages to pack it into just a few powerful lines:

```perl
my ($m, $n) = (2, 2);
while ($m < $N) {
    push @r, "$m^$n" if $m ** $n == $N;
    ++$m, $n = 2 if $m ** ++$n > $N;
}
return @r
```

***

### [**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-066/roger-bell-west/perl/ch-2.pl) {#rbw}

Roger's solution tries dividing out increasing factors, starting with 2, 3 and then odd numbers upward, reducing the input value accordingly with each sucess. When a candidate divides out evenly, it's looped to find out how many times it goes in. Then the pair, factor and power, is logged to a hash. The process continues until the input goes to 1. When that happens, the values in the hash are compared, and if the min and max are the same then all the factors are raised to the same power; the product of the factors is calculated and the result is that product raised to the power found.

I really like this constructive approach, but as-is there are two small problems. One is that primes are not excluded, but that's trivial. The other is that certain numbers that are comprised of the product of multiple powers are excluded when they should not be. Take the number 324, or 18^2. This can also be written as 2^2 * 3^4, which the algorithm will in fact find, but then exclude, because the exponents do not match. The fix is simple too, as in all such cases all of the factors are evenly divided out by the lowest value, in this case 2. The calculation then becomes (2*3^2)^2 or 18^2. All the values are recorded correctly in the hash, it just needs a little adjustment to properly extract them.

Brute force, trying everything and then filtering to find the ones that work is a perfectly valid way to go about this problem, but I find actively constructing the correct answers from parts to be so much more interesting.

These considerations and further explanation at his [**blog**](https://blog.firedrake.org/archive/2020/06/Perl_Weekly_Challenge_66__dividing_and_factorising.html).

***

## Follow Up and Read More at these Blog Links: {#blogs}

<br>

**Arne Sommer** [Dividing Powers with Raku](https://raku-musings.com/dividing-powers.html)

**Bartosz Jarzyna** [Perl Weekly Challenge 66 solution](https://brtastic.xyz/blog/article/perl-weekly-66)

**Colin Crain** [Embrace the Power! Sewing Division with Stone Tools](https://colincrain.wordpress.com/2020/06/29/embrace-the-power-sewing-division-with-stone-tools/)

**Jaldhar H. Vyas** [Perl Weekly Challenge: Week 66](https://www.braincells.com/perl/2020/06/perl_weekly_challenge_week_66.html)

**Javier Luque** [PERL WEEKLY CHALLENGE – 066](https://perlchallenges.wordpress.com/2020/06/22/perl-weekly-challenge-066/)

**Laurent Rosenfeld** [Perl Weekly Challenge 66: Divide Integers and Power Integers](http://blogs.perl.org/users/laurent_r/2020/06/perl-weekly-challenge-66-divide-integers-and-power-integers.html)

**Mohammad S Anwar** [BLOG: THE WEEKLY CHALLENGE #066](https://perlweeklychallenge.org/blog/weekly-challenge-066/)

**Roger Bell_West** [RogerBW's Blog](https://blog.firedrake.org/archive/2020/06/Perl_Weekly_Challenge_66__dividing_and_factorising.html)
