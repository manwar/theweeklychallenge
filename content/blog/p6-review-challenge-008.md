---
title: "Laurent Rosenfeld Weekly Review: Challenge - 008"
date: 2019-02-01T00:00:00+00:00
description: "Laurent Rosenfeld Weekly Review: Challenge - #008."
type: post
image: images/blog/p6-review-challenge-008.jpg
author: Laurent Rosenfeld
tags: ["Raku"]
---
***
# Raku Solutions Weekly Review
***

## Task #1: Perfect Numbers

This is derived from my [blog post](http://blogs.perl.org/users/laurent_r/2019/05/perl-weekly-challenge-8-perfect-numbers-and-centered-output.html) made in answer to the [Week 8 of the Perl Weekly Challenge](https://perlweeklychallenge.org/blog/perl-weekly-challenge-008/) organized by  <a href="http://blogs.perl.org/users/mohammad_s_anwar/">Mohammad S. Anwar</a> as well as answers made by others to the same challenge.

The challenge reads as follows:

*Write a script that computes the first five perfect numbers. A perfect number is an integer that is the sum of its positive proper divisors (all divisors except itself). Please check [Wiki](https://en.wikipedia.org/wiki/Perfect_number) for more information. This challenge was proposed by Laurent Rosenfeld.*

Since Mohammad Anwar revealed that I suggested this challenge, let me add a few things about it. The idea of this challenge comes from a very long recollection: the requirement is almost the same as a programming assignment I had during the first year (actually the first few months) of my CS study back in 1991, except for the fact that we were asked to write a program (in Pascal at the time) to find the perfect numbers below 10,000 (i.e. 4 perfect numbers). If a student can do it in the very first months of his or her CS curriculum, then it would certainly be too easy for a challenge aimed at experienced CS professionals. This the reason why my suggestion was to find the first 5 perfect numbers (instead of 4) as this makes a real difference: as we will see, finding the fifth perfect number is significantly more difficult that finding the first 4 ones.

Let me also be clear on something before we start: 1 is *not* a perfect number, because the definition says the sum of *all its divisors except itself*. The sum of all divisors except itself of 1 is 0; thus, 1 is not a perfect number. The first perfect number is 6 ( = 1 + 2 + 3).

## My Solutions

### Brute Force Approach

Let's try brute force approach to grasp the problem. I'll start with my assignment of 1991, i.e. finding the perfect numbers below 10,000:

``` Perl6
use v6;

sub divisors (Int $num) {
    return 1, | grep { $num %% $_ }, 2 .. (1 + ($num / 2).Int);
}

for 2..10000 -> $num {
    my @divisors = divisors $num;
    say "$num: ", @divisors if $num == [+] @divisors;
}
```

Easy, nothing complicated. I made a separate `divisors` subroutine because we may later want to reuse it. If we run that program, we get the following output:

    6: [1 2 3]
    28: [1 2 4 7 14]
    496: [1 2 4 8 16 31 62 124 248]
    8128: [1 2 4 8 16 32 64 127 254 508 1016 2032 4064]

The `divisors` subroutine is so short that we could inline it in the main code:

``` Perl6
use v6;

for 2..10000 -> $num {
    my @divisors = 1, | grep { $num %% $_ }, 2 .. (1 + ($num / 2).Int);
    say "$num: ", @divisors if $num == [+] @divisors;
}
```

Well, if we just want the perfect numbers without willing to print the list of divisors, we could even get rid of the `@divisors` temporary array and make it short enough for a one-liner:

    $ perl6 -e 'for 2..10000 -> $num { $num.say if $num == [+] (1, | grep { $num %% $_ }, 2 .. (1 + ($num / 2).Int))};'

So, the code is very short, but I regret to say that both these versions are quite slow: they take bout 25 seconds to run (about ten times more than the Perl 5 equivalent program).

If we want to find the fifth perfect number, we need to increase the range. So, perhaps we could try with numbers up to 100,000, maybe we'll find the next perfect number. Well, that does not work. Not only we would not find any new perfect number with this new limit (because, as we will find out later, the next perfect number is much larger than that), but with 10 times more numbers to study, the program would take about 100 times more time to execute, i.e. more than 40 minutes.

This program really does not scale well. The problem stems from the fact that we have two nested loops (even if it's a bit hidden by the fact that one of the loops is a `grep` in the subroutine and the other calling that subroutine). Note that I very well knew that something like this was going to happen, but nonetheless made the test to get actual timings to illustrate the problem. We are not going to continue in this direction and try with a limit of one million, as this would take about two months to run (with no guarantee to find the next perfect number).

### A Better Algorithm to Speed up Things: Triangular Numbers

When we were given this assignment back in 1991, not only was the hardware much slower than today, but the Web did not exist (well, it had just been created but was still an internal tool of the CERN, it went public only in 1993) and there certainly wasn't something like Wikipedia (which was created in 2001) to find additional information about perfect numbers. Our professor had been quite wise to ask only for the first four perfect numbers.

Looking at the Wikipedia page on perfect numbers, we can find a lot on interesting information on perfect numbers. First, all known perfect numbers are even (but it is not known whether there are odd perfect numbers, it can only be said that none has been found so far). Assuming that we are looking only for even numbers will cut the duration by half, but that's far from sufficient to solve the performance problem.

The article provides an additional piece of information: all even perfect numbers are [triangular numbers](https://en.wikipedia.org/wiki/Triangular_number). This is a list of triangular numbers:

    0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91, 105, ..., 1225, 1275, 1326, 1378,

You start with 0. Add 1 to it to get the next one (1). Add 2 to second one to get the third one (3). Add 3 to the third one (6). And so on. This is interesting because there becoming increasingly sparse and we'll need to check the divisors of much fewer numbers.

``` Perl6
use v6;

sub divisors (Int $num) {
    return 1, | grep { $num %% $_ }, 2 .. (1 + ($num / 2).Int);
}
my $triangular-num = 1;
for 2..200 -> $num {
    $triangular-num += $num;
    my $sum-div = [+] divisors $triangular-num;
    say " $triangular-num : @divisors[]" if $sum-div == $triangular-num;
    last if $triangular-num > 10000;
}
say now -  INIT now;
```

Now, finding the first four perfect numbers takes about a third of a second:

    $ perl6 triangular_perfect.p6
    6
    28
    496
    8128
    0.3385362


### Using Lazy Infinite Sequences

One of the difficulties in the code above is to determine the required range for `$num`. The math is not too difficult to compute that the upper bound should be close the square root of twice the ceiling for perfect numbers (i.e. about 141 for a ceiling of 10,000), but I used an upper bound of 200 to be on the safe side of things. The best would be not to have to compute that upper bound. Here come to the rescue lazy infinite lists. For example, we can generate an infinite list `@nums` of consecutive integers for `$num`, and Perl 6 will compute them as and when needed until it reaches the limit for `$triangular-num`:

``` Perl6
use v6;

sub divisors (Int $num) {
    return 1, | grep { $num %% $_ }, 2 .. (1 + ($num / 2).Int);
}
my $triangular-num = 1;
my @nums = 2 ... *;   # Infinite sequence
for @nums -> $num {
    $triangular-num += $num;
    my $sum-div = [+] divisors $triangular-num;
    say $triangular-num if $sum-div == $triangular-num;
    last if $triangular-num > 10000;
}
say now -  INIT now;
```

It is more concise and probably more idiomatic to generate directly an infinite sequence of triangular numbers:

``` Perl6
use v6;

sub divisors (Int $num) {
    return 1, | grep { $num %% $_ }, 2 .. (1 + ($num / 2).Int);
}
my $num = 1;
my @triangular-numbers = 1,  * + ++$num ... *;
for @triangular-numbers -> $triangular-num {
    last if $triangular-num > 10000;
    say $triangular-num if $triangular-num == [+] divisors $triangular-num;
}
say now -  INIT now;
```

The key code line here is where the `@triangular-numbers` is defined. It is an infinite sequence using an explicit generator: each value is created by adding the previous value and a number, `$num`, which is itself incremented at each step through the process.

Rather than building an infinite list, we could also build a list of the triangular numbers less than 10,000 (thereby making the `last` statement in the loop unnecessary) by adding a code block saying where the sequence should stop:

``` Perl6
use v6;

sub divisors (Int $num) {
    return 1, | grep { $num %% $_ }, 2 .. (1 + ($num / 2).Int);
}
my $num = 1;
my @triangular-numbers = 1,  * + ++$num ...^ * > 10000 ;
.say if $_ == [+] divisors $_ for @triangular-numbers;
say now - INIT now;
```

This program displays the same four perfect numbers:

    $ perl6 triangular_perfect.p6
    1
    6
    28
    496
    8128
    0.2695492

You might object that the requirement was to display the first five perfect numbers, and we haven't done that yet. Yes, indeed. Even if our program now runs pretty fast, we know from having coded the same algorithm in Perl 5 that this won't be fast enough for the fifth perfect number: it would take more than seven hours.

So, we need yet a better algorithm.

### Mersenne Numbers

The Mersenne number are powers of 2 minus one. More precisely, for every integer number *n*, the corresponding Mersenne number is the number `(2 ** n) -1`. Their name is associated with Marin Mersenne, a French monk and scholar living in the seventeenth century. These numbers had been studied long before, notably in antiquity by Greek mathematician Euclid of Alexandria, but Mersenne studied them in detail in the context of primality of large numbers, and he may have demonstrated that a Mersenne number `(2 ** n) -1` can be prime only if *n* is also prime. The opposite is not true: for example, 11 is prime, but `(2 ** 11) -1` is not prime. Mersenne prime numbers are still very important today in the search of very large prime numbers: as of 2018, the seven largest known prime numbers are Mersenne primes.

Euclid discovered and demonstrated an interesting property about the Mersenne primes (although they were obviously not called like that at the time) and perfect numbers: if a Mersenne number `(2 ** p) -1` is prime (which requires *p* to be also prime), then the number `((2 ** p) -1) * 2 ** (p - 1)` is a perfect number. In the eighteenth century, Swiss mathematician Leonhard Euler proved conversely that every even perfect number has this form. This is sometimes known as the [Euclid Euler theorem](https://en.wikipedia.org/wiki/Euclid%E2%80%93Euler_theorem).

This can give us a much faster way to identify perfect numbers: compute Mersenne numbers `(2 ** p) -1` with *p* prime, check if such Mersenne number is itself prime, and if it is, that we know that `((2 ** p) -1) * (2 ** (p - 1))` is a perfect number.

When we wrote our Perl 5 program using Mersenne numbers for answering the Perl 5 part of the challenge, we spent quite a bit of energy trying to make an efficient `is_prime` subroutine.  We don't need that in Perl 6, since it has a built-in function, `is-prime`, which uses the very fast Miller-Rabin algorithm to find out whether a number is prime. To tell the truth, the Miller-Rabin algorithm is a probabilistic test, which may in theory report that a composite number is prime, but the probability of occurrence of such an event is so abysmally low that we can just dismiss it for practical purposes.

The other advantage of P6 is its built-in ability to do integer calculations with arbitrary precision.

This a Perl 6 program displaying the first 12 perfect numbers in about half a tenth of a second:

``` Perl6
use v6;

for grep { is-prime $_ }, 0..300 -> $prime {
    my $mersenne =  2 ** $prime - 1;
    say $mersenne * 2 ** ($prime - 1) if is-prime $mersenne;
}
say "time taken ", now - INIT now;
```

This displays the following:

    $ perl6 mersenne_perfect.p6
    6
    28
    496
    8128
    33550336
    8589869056
    137438691328
    2305843008139952128
    2658455991569831744654692615953842176
    191561942608236107294793378084303638130997321548169216
    13164036458569648337239753460458722910223472318386943117783728128
    14474011154664524427946373126085988481573677491474835889066354349131199152128
    time taken: 0.0533907

The last number displayed has 77 digits, and calculating these 12 perfect numbers took less than 0.06 second.

Computing the first 15 perfect numbers took 0.64 second on my old rather inefficient laptop, and the fifteenth perfect number (built with prime number 1279) has 770 digits.

## Alternate Solutions

[Arne Sommer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-008/arne-sommer/perl6/ch-1.p6) implemented a `proper-divisors` multi subroutine and a `is-perfect` subroutine. His program then creates a lazy `gather` infinite loop to create a sequence of perfect numbers, and finally prints out the first five perfect numbers. So basically the same brute force approach I used at the beginning. While this program works well for the first *four* perfect numbers, I don't believe that it is able to find the *fifth* perfect number in a reasonable time.

[Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-008/ruben-westerberg/perl6/ch-1.p6) also wrote a brute force algorithm similar to my first program above. Ruben's program can find the first *four* perfect numbers relatively rapidly, but I don't believe that it is able to find the *fifth* perfect number in a reasonable time.

[uzluisf](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-008/uzluisf/perl6/ch-1.p6) used a `pos-proper-divisors` subroutine and a `is-perfect` multi subroutine and then loops over successive integers So, again a brute force attempt. As for the two implementations just above, uzluisf's program easily finds the first *four* perfect numbers, but is certainly not able to find the *fifth* one in a reasonable time.

[Francis J. Whittle](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-008/fjwhittle/perl6/ch-1.p6) created a lazy infinite sequence of prime Mersenne numbers and derived from it an infinite lazy sequence of perfect numbers:

``` Perl6
# Mersenne prime generator.
my \M := (^∞)
           .grep(*.is-prime)
           .map(-> $n { 2 ** $n - 1})
           .grep(*.is-prime);

# Derive perfect number from Mersenne primes.
my \P := M.map: -> $q { $q * ($q + 1) div 2 };

# Compute and present the first 5, one per line.
P[^5]».put
```

[Jaldhar H. Vyas](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-008/jaldhar-h-vyas/perl6/ch-1.p6) used the Mersenne numbers as a source for perfect candidates and then checked manually the divisors to find out whether the candidate is really perfect:

``` Perl6
sub perfectCandidate(Int $p) {
    my $q = 2 ** $p - 1;          # Mersenne number
    return $q * ($q + 1) div 2;   # perfect candidate
}
sub isPerfect(Int $number) {
    my $total = 0;
    for 1 .. $number -> $i {
        if $number %% $i {
            $total += $i;
        }
    }

    return ($total / 2  == $number);
}
```
Checking for primality of the Mersenne numbers (using the `is-prime` built-in function) would make the program significantly faster than checking if the candidate is perfect, but Jaldar's program does find the first five perfect number in a reasonable time.

[Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-008/joelle-maslak/perl6/ch-1.p6) did essentially the same thing as Jaldhar: her program uses a lazy `gather` to generate a lazy infinite sequence of perfect candidates from the Mersenne numbers and then sums the factors of the candidates to determine whether the candidate is actually perfect:
``` Perl6
my @vals = lazy gather {
    loop {
        state $p = 1;
        $p++;

        my $possible = (2**($p-1))*((2**$p)-1);
        take $possible if ([+] factors($possible)[0..*-2]) == $possible;
    }
}
```
And I can only make the same comment as for Jaldhar: checking for primality of the intermediate Mersenne numbers would have made this program much faster. Joelle's program has this warning:
``` Perl6
if $max > 7 {
    say "More than 7 perfect numbers may take too long to calculate";
}
```
Indeed. Checking primality of the Mersenne number (as in James Smith's program just below, Ozzy's program immediately thereafter, or my last program above) makes it possible to compute the first 20 perfect number in about ten seconds. This being said, Joelle's program does find the first five perfect number in a reasonable time.

[James Smith](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-008/james-smith/perl6/ch-1.p6) used the Mersenne numbers and a lazy `gather` block to generate a lazy infinite sequence of perfect numbers. James's implementation is very concise and very fast:
``` Perl6
my @perfect = lazy gather {
  my $q = 1;
  take $q*($q+1)/2 if (++($q+<=1)).is-prime while 1;
}
say @perfect[$_] for 0..19;
```

[Ozzy](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-008/ozzy/perl6/ch-1.p6) also used the Mersenne numbers and a primality check in a quite concise program:
``` Perl6
for 1..17 -> $p {
    my $b = (2**$p -1);
    say "$p : { 2**($p-1) * $b }" if $b.is-prime;

}
```

[Simon Proctor](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-008/simon-proctor/perl6/ch-1.p6) also used the Mersenne numbers. He implemented a `is-mersine` multi subroutine and a `perfect-from-prime` subroutine

``` Perl6
sub perfect-from-prime( Int $p where { $p.is-prime && is-mersine( $p ) } ) is pure {
    return (2**($p-1)) * ((2**$p) -1 );
}
multi sub is-mersine( Int $ ) is pure { False; }
multi sub is-mersine( Int $p where ((2**$p)-1).is-prime ) is pure { True; }
```
Simon's main code then makes a lazy infinite list of perfect numbers and picks the first five:
``` Perl6
.say for (0..*).grep( *.is-prime ).grep( { is-mersine( $_ ) } ).map( { perfect-from-prime($_) } )[^$x];
```

## SEE ALSO

Three blog posts this time:

* Arne Sommer: https://perl6.eu/perfect-indentation.html.

* Francis J. Whittle: https://rage.powered.ninja/2019/05/15/squaring-perfect-centre.html.

* Simon Proctor: http://www.khanate.co.uk/blog/2019/05/14/perl-weekly-challenge-part-8/.

## Wrapping up

Please let me know if I forgot any of the challengers or if you think my explanation of your code misses something important.

If you want to participate to the Perl Weekly Challenge, please connect to [this site](https://perlweeklychallenge.org/).
