---
title: "Laurent Rosenfeld Weekly Review: Challenge - 041"
date: 2020-01-12T00:00:00+00:00
description: "Laurent Rosenfeld Weekly Review: Challenge - #041."
type: post
image: images/blog/p6-review-challenge-041.jpg
author: Laurent Rosenfeld
tags: ["Raku"]
---
***
# Raku Solutions Weekly Review
***

## Task #1: Attractive Numbers

This is derived in part from my [blog post](http://blogs.perl.org/users/laurent_r/2020/01/perl-weekly-challenge-41-attractive-numbers-and-leonardo-numbers.html) made in answer to the [Week 41 of the Perl Weekly Challenge](https://perlweeklychallenge.org/blog/perl-weekly-challenge-041/) organized by  <a href="http://blogs.perl.org/users/mohammad_s_anwar/">Mohammad S. Anwar</a> as well as answers made by others to the same challenge.

The challenge reads as follows:

*Write a script to display attractive number between 1 and 50.*

*A number is an attractive number if the number of its prime factors is also prime number.*

*The number 20 is an attractive number, whose prime factors are 2, 2 and 5. The total prime factors is 3 which is also a prime number.*

First comment: we're obviously interested only with *proper prime factors*, i.e. prime factors of a number other than 1 and the number itself.

Next, since we're interested with only the range between 1 and 50, the largest possible number of prime factors is 5 (the smallest number with 6 prime factors is `2 ** 6 = 64 `). So, we could solve the task by gathering the numbers in the range which are not prime and whose number of proper prime factors is not 4.

## My Solutions

The Raku programming language has a fast `is-prime` built-in routine that we can use either to test the number of factors or to build a lazy infinite list of prime numbers.

### Using Prime Factorization

We could use the general prime factorization technique described in my [blog post about Perl Weekly Challenge # 23](http://blogs.perl.org/users/laurent_r/2019/08/perl-weekly-challenge-23-difference-series-and-prime-factorization.html), but we can simplify it in the context of this task with the following observation: any non prime number in the range between 1 and 50 will be evenly divided by one of the first four primes: 2, 3, 5, and 7. After we have divided the input number by those four primes as many times as possible, the remaining number will either be 1 or will be a prime that can be added to the list of factors (unless it is the input number itself). So we could simply hard-code the list of the four first primes and test them against the input number (this is what I did in Perl 5). In Raku, we will simply build an infinite list of primes and use it in a similar fashion:

```perl
use v6;

my @primes = grep {.is-prime}, 1..*;

sub prime-factors (UInt $num-in) {
    my @factors;
    my $num = $num-in;
    for @primes -> $div {
        while ($num %% $div) {
            push @factors, $div;
            $num div= $div;
        }
        return @factors if $num == 1;
    }
    push @factors, $num unless $num == $num-in;
    return @factors;
}
say "$_: ", prime-factors($_).join(" ") for
    grep {prime-factors($_).elems.is-prime}, 1..50;
```

This prints the following output:

    $ perl6 attractive_numbers.p6
    4: 2 2
    6: 2 3
    8: 2 2 2
    9: 3 3
    10: 2 5
    12: 2 2 3
    14: 2 7
    15: 3 5
    18: 2 3 3
    20: 2 2 5
    21: 3 7
    22: 2 11
    25: 5 5
    26: 2 13
    27: 3 3 3
    28: 2 2 7
    30: 2 3 5
    32: 2 2 2 2 2
    33: 3 11
    34: 2 17
    35: 5 7
    38: 2 19
    39: 3 13
    42: 2 3 7
    44: 2 2 11
    45: 3 3 5
    46: 2 23
    48: 2 2 2 2 3
    49: 7 7
    50: 2 5 5

Note that the last statement in the program calls the `prime_factors` subroutine twice, which is admittedly not very efficient, but it is only because I added the display of the prime factors at last moment: since I was a bit surprised by the number of attractive numbers (higher than what I originally expected), I decided to add the display of the prime factors to visually check that the number of prime factors was prime. Displaying those prime factors was not a requirement of the task, so I could have removed that (and, together with it, the additional call to the `prime_factors` subroutine), but I kept it to enable the reader to make the same check.

### Using Fun

The next solution isn't very efficient in terms of performance, but is quite fun and leads to much shorter code.

We have seen that we're looking for numbers that are products of two, three, or five prime factors. The idea here is to use combinations of two, three or five prime numbers, multiply the members of each such combination and keep those which are less than or equal to 50.

The Raku [combinations](https://docs.raku.org/routine/combinations) function returns combinations of the invocant list, as shown here under the REPL:

    > say (0..2).combinations;
    (() (0) (1) (2) (0 1) (0 2) (1 2) (0 1 2))

You can specify an additional parameter, a number or a range, to indicate the number of items in each combination:

    > say (0..3).combinations: 3;
    ((0 1 2) (0 1 3) (0 2 3) (1 2 3))
    > say (0..3).combinations: 2..3;
    ((0 1) (0 2) (0 3) (1 2) (1 3) (2 3) (0 1 2) (0 1 3) (0 2 3) (1 2 3))

The problem, though, is that we want combinations where each item of the input list can be used one or several times. We can use the `xx` operator to do this:

    > say (<a b c> xx 3).flat.combinations: 2
    ((a b) (a c) (a a) (a b) (a c) (a a) (a b) (a c) (b c) (b a) (b b) (b c) (b a) (b b) (b c) (c a) (c b) (c c) (c a) (c b) (c c) (a b) (a c) (a a) (a b) (a c) (b c) (b a) (b b) (b c) (c a) (c b) (c c) (a b) (a c) (b c))
    > say ((<a b> xx 2).flat.combinations(2..3));
    ((a b) (a a) (a b) (b a) (b b) (a b) (a b a) (a b b) (a a b) (b a b))

The first problem with this solution is that we have duplicates in our list. Using [Sets](https://docs.raku.org/type/Set) will help solve these two problems:

    > say (map { [~] $_ }, (<a b> xx 2).flat.combinations(2..3)).Set;
    set(aa aab ab aba abb ba bab bb)

Sets, together with the `∪` union operator, will solve the other problem, namely that we can provide a single number or range as a parameter to `combinations`, but we can't specify three numbers such as `2, 3, 5`.

Of course, we also need the `[*]` meta-operator to generate the product and a `grep` to filter out products that are larger than 50.

With all this, we can now write our program:

```perl
    use v6;

    my @primes = grep {.is-prime}, 1..25;
    my $set = (grep {$_ <= 50}, map {[*] $_}, (@primes xx 3).flat.combinations: 2..3)
        ∪ (grep {$_ <= 50}, map {[*] $_}, (@primes[0..4] xx 5).flat.combinations: 5);
    say $set.keys.sort
```

Note that we don't need to explicitly coerce the two sequences into `Set`s, since the `∪` union operator does that for us. This is the output of the program:

    $  perl6 attractive_numbers_2.p6
    (4 6 8 9 10 12 14 15 18 20 21 22 25 26 27 28 30 32 33 34 35 38 39 42 44 45 46 48 49 50)

This program runs in about 1.3 sec., where as the previous implementation ran in about 0.3 second. Clearly, this is less efficient, and this was to be expected, because we're generating a large number of combinations, most of which turn out to be useless and are then removed from the output either because they are duplicates or because the obtained value exceeds 50. The performance is a bit bad, but it was quite a bit of fun generating a solution holding in much less code lines.

## Alternative Solutions

[Arne Sommers](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-041/arne-sommer/perl6/ch-1.p6) wrote a `divisors` subroutine doing more or less the same thing as the `prime-factors` subroutine of my first solution. Finding then the attractive numbers is just a matter of looping over the `1..50` range and retaining the numbers whose number of factors is prime.

```perl
sub divisors (Int $number is copy)
{
  return (1) if $number == 1;
  return ($number) if $number.is-prime;

  my @divisors;

  for 2 .. ($number -1) -> $candidate
  {
    next unless $candidate.is-prime;

    while ($number %% $candidate)
    {
      @divisors.push: $candidate;
      $number div= $candidate;
    }
    if $number.is-prime
    {
      @divisors.push: $number;
      last;
    }
  }
  return @divisors;
}
```

[Jo Christian Oterhals](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-041/jo-christian-oterhals/perl6/ch-1.p6) made a come-back in the Perl Weekly Challenge after an extended absence. Welcome back, Jo Christian. His solution uses the `Prime::Factor`  module to do the bulk of the work (prime factorization), and his solution is therefore very brief:

```perl
use Prime::Factor;
for 1..50 {
  my @p = prime-factors($_);
  say $_ ~ " / " ~ @p if @p.elems.is-prime;
}
```

[Markus Holtzer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-041/markus-holzer/perl6/ch-1.p6) is also coming back to the Perl Weekly Challenge after a pause. He also used the `Prime::Factor`  module to do the bulk of the work (prime factorization, and his solution is even more compact:

```perl
use Prime::Factor;
.say for (2..50).grep( -> $n { is-prime prime-factors( $n ).elems });
```

[Kevin Colyer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-041/kevin-colyer/perl6/ch-1.p6) wrote an `attractiveNumber` and a `factors` subroutines and ended up with a fairly verbose program:

```perl
sub attractiveNumber($n, $verbose=False) {
    # 0th candidate number not useful
    # 1st is 2
    # 2nd is ? not 3 as prime so... start looking for candidates at 4
    state @aN = 0,2;
    state $cand=4;
    say "Seeking {$n}th attractive Number " if $verbose;
    return @aN[$n] if @aN[$n]; # return the nth attractiveNumber if we have seen it!
    my $numfactors;
    loop {
        if $cand.is-prime { $cand++; next }
        print "Selecting $cand ..." if $verbose;
        $numfactors=factors($cand).elems;
        last if $numfactors.is-prime; # found attractiveNumber so finish
        say " has $numfactors factors (NOT prime)" if $verbose;
        $cand++; # keep looking
    }
    say " has $numfactors factors (prime)" if $verbose;
    @aN[$n]=$cand;
    $cand++; # inc for next time
    return @aN[$n];
}


sub factors(Int $number) {
    my @factors;
    my $n = $number;
    my $i=0;
    while $n>1 {
        my $p=@primes[$i];
        #say "{$i}th prime is  -> $p";
        if $n %% $p {
            @factors.push: $p;
            $n/=$p;
            #say "found $p, now n is $n";
            next
        };
        $i++;
    }
    @factors;
}
```

[Noud Aldenhoven](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-041/noud/perl6/ch-1.p6) reused his recursive `decomp` subroutine from PWC 23-2 to solve the task:

```perl
sub decomp(Int $n) {
    if ($n > 1) {
        my $prime = (2..Inf).grep({ $n %% $_ })[0];
        ($prime, |(decomp(($n / $prime).Int)));
    }
}

sub attractive-number(Int $n) {
    is-prime(decomp($n).elems);
}
```
Note that his `decomp` subroutine is clever, but sometimes slightly wrong: it returns only the proper factors for a composite number (for example `(2, 2)` for the input number 4), but returns the number itself if it is prime. This does not prevent the overall program from displaying the correct result (because 1 is not considered to be prime).

[Simon Proctor](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-041/simon-proctor/perl6/ch-1.p6) wrote a `prime-factors`, a `smallest-factor`, and an `attractive-number` subroutines to solve the problem. Note that the `smallest-factor` subroutine uses the experimental [is-cached](https://docs.raku.org/routine/is%20cached) trait to avoid recomputing the smallest prime factor of a number for which it has already been computed (it is a form of memoization). I doubt that this will bring any measurable performance enhancement with the small `2..50` range that we're supposed to explore, but it doesn't cost much to add it (just adding to words to the code, it's not like changing the algorithm of your code) and it might improve quite significantly the performance for a larger input range.

```perl
sub attractive-number( Int \n --> Bool ) is pure {
    prime-factors(n).elems.is-prime;
}

sub prime-factors( Int $n is copy --> Array ) is pure {
    my @factors;
    while ! $n.is-prime {
        my \s = smallest-factor( $n );
        @factors.push(s);
        $n = $n div s;
    }
    @factors.push($n);
    return @factors;
}

sub smallest-factor( Int \n --> Int ) is pure is cached {
    for (2..(n div 2)).grep(*.is-prime) {
        return $_ if n %% $_;
    }
    die "Something went wrong";
}
```

[Colin Crain](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-041/colin-crain/perl6/ch-1.p6) wrote a `make_prime_list` and a `decompose` subroutines to solve the problem. To me, the `make_prime_list` is somewhat useless here, since the Raku programming language has a `is-prime` built-in function that uses the much faster [Miller-Rabin primality test](https://en.wikipedia.org/wiki/Miller–Rabin_primality_test) algorithm to find primes, so that this code:

```perl
my @primes   = make_prime_list($max);
sub make_prime_list ( Int:D $max where {$max > 2} = 50 ) {
## creates a list of all primes less than or equal to a given number
    my @output = [2];
    CANDIDATE: loop (  my $candidate = 3;  $candidate <= $max;  $candidate += 2  ) {
        my $sqrt_candidate = $candidate.sqrt;
        loop (  my $test = 3; $test <= $sqrt_candidate; $test += 2  ) {
            next CANDIDATE if $candidate % $test == 0;
        }
        @output.push: $candidate;
    }
    return @output;
}
```

could be replaced with something like this:

```perl
my @primes = grep {.is-prime}, 0..$max;
```

Otherwise, Colin's code does the prime factorization as follows:

```perl
sub decompose ( $extnum, @primes) {
## given a number and a list of primes less than n/2,
## returns an array list of prime decomposition factors of the number
    my @decomp;
    my $num = $extnum;
    my @primelist = @primes;
    my $prime = shift @primelist;

    while ( $prime <= $num ) {
        while ($num %% $prime) {
            $num /= $prime;
            @decomp.push: $prime;
        }
        last unless @primelist.elems;
        $prime =  @primelist.shift;
    }
    return @decomp;
}
```

[Javier Luque](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-041/javier-luque/perl6/ch-1.p6) created a `factors` subroutine to do the bulk of the work:

```perl
sub factors (Int $n) {
    my @list;
    my @prime = grep {.is-prime}, 1..*;
    my $pos = 0;
    my $check = $n;

    while $check > 1 {
        my $factor = @prime[$pos];
        $pos++;
        next unless $check %% $factor;

        $pos = 0;
        $check /= $factor;
        push @list, $factor;
    }

    return @list;
}
```

[Roger Bell West](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-041/roger-bell-west/perl6/ch-1.p6) used essentially the same technique as most other challengers to perform factorization. Roger's code would be easier to read and understand if he used meaningful variable names, rather than cryptic names such as `%pc`, `$c`, `$cc`, `$cn`, `@ff`, `$l`, etc.

```perl
my $top=50;
my @factors=grep {is-prime($_)}, (1..$top);
my %pc=map {$_ => 1}, @factors;
for (1..$top) -> $c {
  my $cc=$c;
  my $cn=0;
  my @ff=@factors;
  while ($cc != 1 && !(%pc{$c}:exists)) {
    my $l=@ff[0];
    while ($cc % @ff[0] == 0) {
      $cn++;
      $cc /= @ff[0];
    }
    shift @ff;
  }
  if (%pc{$c}:exists) {
    $cn++;
  }
  if (%pc{$cn}:exists) {
    say $c;
  }
}
