---
title: "Perl Weekly Review: Challenge - 041"
date: 2020-01-12T00:00:00+00:00
description: "Perl Weekly Review: Challenge - 041."
type: post
image: images/blog/p5-review-challenge-041.jpg
author: Mohammad S Anwar
tags: ["Perl"]
---
***
***
Continues from [**previous week**](/blog/review-challenge-040/).

Feel free to [**submit a merge request or open a ticket**](https://github.com/manwar/perlweeklychallenge) if you found any issues with this post. We highly appreciate and welcome your feedback.

For a quick overview, go through the [**original tasks**](/blog/perl-weekly-challenge-041/) and [**recap**](/blog/recap-challenge-041/) of the weekly challenge.

Additional feedback to our Perl Weekly Challenge’s [**Twitter account**](https://twitter.com/perlwchallenge?lang=en) is much appreciated.

***
***
## Task #1
***
***

### Write a script to display **attractive number** between 1 and 50.

> A number is an *attractive number* if the number of its prime factors is also prime number.

The number **20** is an **attractive number**, whose prime factors are **2**, **2** and **5**. The total prime factors is **3** which is also a **prime number**.

***

## Adam Russell

I noticed the use of **redo** in **Adam**'s work of brilliance.

```perl
use strict;
use warnings;

sub prime_factor{
    my $x = shift(@_);
    my @factors;
    for (my $y = 2; $y <= $x; $y++){
        next if $x % $y;
        $x /= $y;
        push @factors, $y;
        redo;
    }
    return @factors;
}

MAIN:{
    for my $n (1 .. 50){
        my @factors = prime_factor($n);
        print "$n (" . join(", " , @factors) . ")\n" if(prime_factor(scalar @factors) == 1);
    }
}
```

***

## Andrezgz

**Andrezgz** definition of method **is_prime()** is the main attraction of the solution.

```perl
#!/usr/bin/perl

use strict;
use warnings;

my $upto = shift || 50;

foreach (1 .. $upto){
    print $_ . ' ' if is_prime( scalar prime_decomp($_) );
}


sub prime_decomp {
    my $n = shift;

    my @prime_decomp;

    foreach my $prime ( prime_factors($n) ){
        do {
            $n /= $prime;
            push @prime_decomp, $prime;
        } while ($n % $prime == 0);
    }

    return @prime_decomp;
}


sub prime_factors {
    my $n = shift;
    return if $n <= 1;
    my @r = grep {$n % $_ == 0 && is_prime($_)} (2 .. $n/2); #get prime divisors
    return @r ? @r : ($n); # number is prime if no prime divisors were found
}

sub is_prime {
    my $n = shift;
    return if $n <= 1;
    #every composite number has a prime factor less than or equal to its square root.
    return 1 == grep {$n % $_ == 0} (1 .. sqrt $n);
}
```
***

## Burkhard Nickels

**Burkhard** didn't hesitate to go full on with his solution.

```perl
my $res = calculate_primes(50);
print "Prime Numbers: ", Dumper($res), "\n";

my @numbers = (1 .. 50);
my @primes = (2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53);
print "Prime Numbers: ", Dumper(\@primes), "\n";

print "Attractive Numbers:\n";

foreach my $nbr (1 .. 50) {
    my @res;
    my %tree;
    my ($x,$y) = (-1,0);
    print "TEST $nbr ---> \n";
    nr_recursive($nbr,\@res,$x,\$y,\%tree);
    # print "Ergebnis: ", Dumper(\@res), "\n";
    $Data::Dumper::Indent=1;
    # print "Ergebnis: ", Dumper(\%tree), "\n";
    my $flat = flatten(\%tree);
    # print "Flat: ", Dumper($flat), "\n";
    is_attractive_number($flat);
    print "\n";
}

sub is_attractive_number {
    my ($flat) = @_;
    foreach my $k (keys %$flat) {
        my $attr_nbr = 1;
        my @tmp = split(/\./,$k);
        foreach my $i (@tmp) {
            if( ! is_prime($i) ) { $attr_nbr = 0; }
        }
        if($attr_nbr) {
            print "   $k => $flat->{$k} Attractive Number";
            if( is_prime($flat->{$k}) ) {
                print "(Number Factors $flat->{$k} is Prime)\n";
            } else { print "\n"; }
        }
        else {
            # print "$k => $flat->{$k}\n";
        }
    }
}

sub nr_recursive {
    my ($number,$res,$x,$y,$tree) = @_;
    $x++;
    # my $space = " " x ($x * 2);
    # print "$space X+($x/$$y)\n";
    # print "$space IN: $number ($x/$y)\n";
    my $loop;
    if($x == 0) { $loop = $number-1; }
    else { $loop = $number; }
    my $found_count=0;
    foreach my $j ((2 .. $loop)) {
        # print "$space LO: $number ($x/$y)\n";
        my $div = $number/$j;         # Division with every whole number.
        my $nr  = int($div);
        my $rst = $number%$j;
        # print "$space - $j ($div,$nr,$rst)\n";
        if( ! $rst ) {           # Result is whole number
            $found_count++;
            # print "$space => $j ($x/$$y - Next $nr)\n";
            $res->[$$y][$x] = $j;

            if($nr == 1) { $tree->{$j} = $x+1; }
            else { $tree->{$j} = {}; }

            if($$y > 0) {
                foreach my $k (0 .. $x-1) {
                    $res->[$$y][$k] = $res->[$$y-1][$k];
                    # print "$space => $res->[$$y-1][$k] ($k/$$y)\n";
                }
                # $$y++; print "$space Y+($x/$$y)\n";
            }

            nr_recursive($nr,$res,$x,$y,$tree->{$j});
            # if($found_count > 1) {
            #   $$y++; print "$space Y+($x/$$y)\n";
            # }
            $$y = $#$res + 1; # print "$space Y+($x/$$y)\n";
        }
    }
    $x--; # print "$space X-($x/$$y)\n";
}

sub is_prime {
    my ($nr) = @_;
    my $prime=1;
    foreach my $j ((2 .. $nr-1)) { # Not dividing by 1 or the same number
        my $div = $nr/$j;           # Division with every whole number.
        my $nr  = int($div);
        my $rst = $nr%$j;
        if( ! $rst ) {             # If no Rest
            $prime=0;              # it is NO prime number
            last;
        }
    }
    return $prime;
}

sub calculate_primes {
    my ($max) = @_;

    my @result;
    my $prime=1;
    foreach my $i ((2 .. $max)) {
        foreach my $j ((2 .. $i)) {
            my $div = $i/$j;         # Division with every whole number.
            my $nr  = int($div);
            my $rst = $i%$j;
            if( ! $rst and $i!=$j) { # If no Rest and not devided by same.
                $prime=0;            # it is NO prime number
                last;
            }
        }
        if($prime) { push(@result,$i); } # Prime Number
        else { $prime=1; }
    }
    return \@result;
}
```

***

## Colin Crain

**Colin**'s own creation **decompose()** is really fun to read.

```perl
use warnings;
use strict;
use feature ":5.26";

my $max = shift @ARGV // 50;

my @primes = make_prime_list($max);
my %primehash = map { $_ => 1 } @primes;

for (2..$max) {
    my @decomp = decompose($_, \@primes);
    printf "%-4d--> %-20s  %s\n", $_, (join ', ', @decomp),
            (exists $primehash{(scalar @decomp)}) ? "$_ is attractive" : "" ;
}

sub make_prime_list {
## creates a list of all primes less than or equal to a given number
    my $max = shift;
    my @output = (2);
    CANDIDATE: for(  my $candidate = 3;  $candidate <= $max;  $candidate += 2  ) {
        my $sqrt_candidate = sqrt( $candidate );
        for(  my $test = 3; $test <= $sqrt_candidate; $test += 2  ) {
            next CANDIDATE if $candidate % $test == 0;
        }
        push @output, $candidate;
    }
    return @output;
}

sub decompose {
## given a number and a list of primes less than n/2,
## returns an array list of prime decomposition factors of the number
    my ($num, $primes) = @_;
    my @decomp;
    my @primelist = $primes->@*;
    my $prime = shift @primelist;

    while ( $prime <= $num ) {
        while ($num % $prime == 0) {
            $num = $num / $prime;
            push @decomp, $prime;
        }
        last if scalar @primelist == 0;
        $prime = shift @primelist;
    }
    return @decomp;
}
```

***

## Duncan C. White

**Duncan** invented his own library [**MakePrimes**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-041/duncan-c-white/perl5/MakePrimes.pm) and [**PrimeFactors**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-041/duncan-c-white/perl5/PrimeFactors.pm) to solve the task. Highly Recommended.

```perl
use v5.10;  # to get "say"
use strict;
use warnings;
use Function::Parameters;

use lib qw(.);  # I hate this!
use MakePrimes;
use PrimeFactors;

die "Usage: ch-1.pl [N//50]\n" if @ARGV>1;

my $n = shift // 50;

my @primes = primes_upto( $n );
my %isprime = map { $_ => 1 } @primes;

foreach my $x (2..$n)
{
    my @factors = prime_factors( $x, @primes );
    my $nf = @factors;
    next unless $isprime{$nf};
    say "$x is an attractive number, factors are: ", join(',',@factors),
        ", number factors $nf is prime";
}
```

***

## E. Choroba

**Choroba**, once again took the help from **CPAN** module **Math::Prime::Util**. The end result is nice and clean solution.

```perl
#! /usr/bin/perl
use warnings;
use strict;
use feature qw{ say };

use Math::Prime::Util qw{ factor is_prime };

sub is_attractive {
    my ($n) = @_;
    is_prime(factor($n))
}

say for grep is_attractive($_), 1 .. 50;
```

***

## Javier Luque

**Javier** also followed the same path as **Choroba**.

```perl
#!/usr/bin/perl
# Test: ./ch-1.pl
use strict;
use warnings;
use Math::Prime::Util qw /factor is_prime/;
use feature qw /say/;

for my $i (1..50) {
    my @factors = factor($i);
    say $i if (is_prime(scalar(@factors)));
}
```

***

## Laurent Rosenfeld

**Laurent** came up with his own implementation of the method **prime_factors()**.

```perl
#!/usr/bin/perl
use strict;
use warnings;
use feature qw/say/;
use constant PRIMES => (2, 3, 5, 7);

sub prime_factors {
    my $num = shift;
    my $origin_num = $num;
    my @factors;
    for my $div (PRIMES) {
        while ($num % $div == 0) {
            push @factors, $div;
            $num /= $div;
        }
        return @factors if $num == 1;
    }
    push @factors, $num unless $num == $origin_num;
    return @factors;
}

my %primes = map { $_ => 1 } PRIMES;
say "$_: ", join " ", prime_factors($_) for
grep exists $primes{scalar prime_factors($_)}, 1..50;
```

***

## Lubos Kolouch

**Lubos** introduced me to the method **count_prime_factors()** from the **CPAN** module **Math::Factor::XS**. The power of **CPAN** makes the solution looks nice and clean.

```perl
use strict;
use warnings;
use Math::Factor::XS qw/count_prime_factors/;
use Math::Prime::XS qw/is_prime/;

sub is_attractive {
    my $what = shift;

    return is_prime(count_prime_factors($what));
}

# TESTS

use Test::More;

is(is_attractive(20),1);
is(is_attractive(23),'');
is(is_attractive(28),1);
is(is_attractive(256),'');

done_testing;
```

***

## Roger Bell_West

Like many members, **Roger** also took the help of **CPAN** module **Math::Prime::Util**.

```perl
#! /usr/bin/perl

use strict;
use warnings;

use Math::Prime::Util qw(factor is_prime);

foreach my $c (1..50) {
  if (is_prime(scalar factor($c))) {
    print "$c\n";
  }
}
```

***

## Ruben Westerberg

**Ruben** took the pain and defined his own method **prime()**, which reminded me of my early days.

```perl
#!/usr/bin/env perl
use strict;
use warnings;
for (1..50) {
    my @a=primeFactors($_);
    print "Attractive number $_: prime factors @a\n" if (prime(scalar @a));
}
sub prime {
    my $n=shift;
    if ($n <= 3 ) {
        return $n > 1;
    }
    elsif ($n % 2 == 0 or $n % 3 ==0 ) {
        return 0;
    }
    my $i=5;
    while ($i**2 <= $n) {
        if ( $n % $i ==0 or $n % ($i+2) == 0 ) {
                return 0;
        }
        $i+=6;
    }
    return 1;
}

sub primeFactors {
    my @factors;
    my $i=shift;
    for (1..$i/2) {
        if ($i%$_ == 0 and prime $_ ) {
            my $b=$i/$_;
            push @factors, $_;
            if (prime $b) {
                push @factors, $b;
            }
            else {
                push @factors, primeFactors($b);
            }
            last;
        }
    }
    @factors;
}
```

***

## Ryan Thompson

The main attractioon of **Ryan** solution was the introduction of **Wilson Theorem**.

```perl
#!/usr/bin/env perl

use 5.010;
use warnings;
use strict;
no warnings 'uninitialized';

# Here is how I'd normally tackle this problem:
# use Math::Prime::Util ':all';
# say for grep { is_prime( factor($_) ) } 1..50;

my @primes50   = primes_to(50);
my %primes50   = map  { $_ => 1 } @primes50;
my @attractive = grep { $primes50{ prime_div_mult($_) } } 1..50;

say for @attractive;

# Check our results against https://oeis.org/A063989
if ($ARGV[0] eq '--test') {
    use Test::More;
    my @oeis = (4, 6, 8, 9, 10, 12, 14, 15, 18, 20, 21, 22, 25, 26, 27, 28,
                30, 32, 33, 34, 35, 38, 39, 42, 44, 45, 46, 48, 49, 50);
    is_deeply \@attractive, \@oeis, "Matches published sequence";
    done_testing;
}

# Unmodified Wilson's theorem is terrible, unless you only need tiny primes!
# Please, I beg you, use Math::Prime::Util or similar in any real code. :-)
# N is prime iff (N - 1)! % N == 0
sub primes_to {
    use bigint;
    my $N = shift;
    my $fac = 1;
    my @r;
    for my $n (2..$N) {
        $fac *= $n - 1;

        push @r, $n unless ($fac + 1) % $n;
    }

    @r;
}

# Get prime divisors in multiplicity (e.g., 48 = 2, 2, 2, 2, 3)
sub prime_div_mult {
    my $n = shift;
    my @div;
    for my $div (@primes50) {
        last if $div > $n;
        while ($n % $div == 0) {
            $n /= $div;
            push @div, $div;
        }
    }

    @div;
}
```

***

## Saif Ahmed

**Saif** made good use of **dispatch table**. The best part of the solution is the centralisation of core functions.

```perl
initialise();
getAttractive(20,"method2");
benchmark();

sub getAttractive{                     # gets attractive numbers
    my $n=shift;                       # how many to get
    $method=shift //"method1";         # which method to use or use method1
    print "Using $method the first $n attractive numbers are:-\n";

    my $candidate=0;                   # number to test for attractiveness

    while ($n--) {
                                       # increment $candidate until attractive found
        while (!${$method}{isAttractive}->(++$Candidate)){};
                                       # display attarctive numbers and factors
        print "$Candidate is attractive; Factors are ",
               (join ",",(defined ${$method}{factors})    ?   # if a cache of factors exists
                     @{${$method}{factors}  ->[$Candidate]} : # retrieve from cache or
                     @{${$method}{factorise}->($Candidate)} ),# just factorise again
                      "\n";
    }
}


sub initialise{

# Method1 caches nothing. The factorise function return the list of factors, or
# just the number itself if it is prime

    %method1=(                    # "our" used to make it available
                                      # outsibe the initialise subroutine
       factorise=>sub {
           my $wn=$number=shift;      # the number to test is loaded
           my @factorsList=();        # the aray of factors found
           my $test=2;                # start search with 2 as a factor
           my $limit=sqrt($wn+1);        # continue to a reasonable limit
           while ($test < $limit){    # until limit passed
             if  ($wn % $test){       # if not a factor (i.e. $wn % $test is not zero
                 $test++;             # test next number
                 $test++ unless $test==3;  # ensure that after 2 only odd numbers are tested
             }
             else{                    # factor found
              push @factorsList,$test;# store factor in our list
              $wn=$wn/$test;          # and factorise the rest...
              $limit=sqrt($wn+1)      # ...resetting limit accordingly
             }
           }
          return [@factorsList,$wn];  # return all factors found (including the last prime)
      },

      isPrime=>sub{                   # all methods retun the number if no factors are found
        my $t=shift;
        return 0 if $t<2;             # 0 and 1 are not prime numbers
        return $method1{ numberOfFactors}->($t)==1?1:0;
      },

      numberOfFactors=>sub{           # list of factors obtained by factorise
        my $t=shift;
        return scalar @{$method1{factorise}->($t)};
        },

      isAttractive=>sub {             # tests that numberOfFactors() isPrime()
            my $t=shift;
            return $method1{isPrime}->( $method1{numberOfFactors}->( $t ) );
        },

    );

# Method 2 caches the factors.  Because the factors of previously tested numbers are
# retained only the smallest factor is required, and it merely retrieves the rest
# from the cache

    %method2=(
       factorise=>sub {
           my $number=shift;           # the number to test is loaded
                                       # if number already has ached factors, retieve from cache
           return  $method2{factors}->[$number] if (defined $method2{factors}->[$number]) ;
           my $test=2; $limit=sqrt($number+1);  # as before start with 2 and set limits
           while (($test < $limit)&&($number % $test)){
                 $test++;
                 $test++ unless $test==3;
           }
           if ($test<$limit){           # found the smallest prime factor.
                                        # Because of caching, all the other factors have
                                        # already been found, no need to search.
               $method2{factors}->[$number]=  [$test,@{$method2{factors}->[$number/$test]}]
           }
           else{                        #otherwise this is a prime number, store in cache
               $method2{factors}->[$number]=  [$number];
           }
           return  $method2{factors}->[$number];
        },

      isPrime=>sub{
        my $t=shift;
        return 0 if $t<2;
        return $method2{numberOfFactors}->($t)==1?1:0;
      },

      numberOfFactors=>sub{              # retrieve from cache
        my $t=shift;
        return scalar @{$method2{factors}->[$t]};
        },

       isAttractive=>sub{                # tests that numberOfFactors() isPrime()
            my $t=shift;
            return $method2{isPrime}->( $method2{numberOfFactors}->( $t ) );
        },

      factors=>[],                       # cache of factors
    );


# Method 3 caches factors and primes.
# the primes cache is a hash, with each prime stored as key, with next key as its value
# e.g 2=>3,3=>5,5=>7,7=>11,11=>-1,largest=>11. this allows quick retrieval of the next
# found poetntial prime factor.

   %method3=(
       factorise=>sub{
           my $number=shift;
           return  $method3{factors}->[$number] if (defined $method3{factors}->[$number]) ;
           my $test=2; my $limit=sqrt($number+1);
           while (($test < $limit)&&($number % $test)){
                 $test=$method3{primes}->{$test};        # test larger and larger primes
           }
           if (($number % $test)||($number/$test ==1)){   # no old prime factor found
                   # number must be a new prime larger than one previously encountered
                   # this is stored in a hash, replacing previous largest prime
                   # this method of setting multiple values in a hash is not possible with "strict"
               @method3{primes}->{$number,$method3{primes}->{"largest"},{"largest"} }=(-1,$number,$number);
               $method3{factors}->[$number]= [$number];
           }
           else{
               $method3{factors}->[$number]=[$test,@{$method3{factors}->[$number/$test]}];
           }
           return $method3{factors}->[$number];
       },

      isPrime=>sub{                                     # check primes from the hash cache
        my $t=shift;
        return 0 if $t<2;
        return defined $method3{primes}->{$t}?1:0;
      },

      numberOfFactors=>sub{
        my $t=shift;
        return scalar @{$method3{factors}->[$t]};        # check factors from the cache array
        },

       isAttractive=>sub{                # tests that numberOfFactors() isPrime()
            my $t=shift;
            return $method3{isPrime}->( $method3{numberOfFactors}->( $t ) );
        },

      primes =>{2=>3,3=>5,5=>7,7=>11,11=>-1,largest=>11},
      factors=>[],
    );

    for my $method ("method2","method3"){
        for (1..100){
          ${$method}{factorise}->($_)
        }
    }
}

# This routine benchmarks the three methods twice, demonstrating the
# effectiveness of caching at first and subsequent passes.
sub benchmark{
    use Time::HiRes qw ( time);
    my $start;
    for (1,2){
        print "Benchmark pass $_\n";
        for my $end (1000,10000,100000){

            for my $method (1..3){
                $start=time();
                for (1..$end){
                  ${"method$method"}{factorise}->($_)
                }
                ${"duration$method"}= int (1000*(time()-$start));
            }
            print "With $end factorisations: Method1 $duration1 ms   Method2 $duration2 ms  Method3 $duration3 ms \n";
        }
    }
}
```

***

## Ulrich Rieke

**Ulrich** setup his own helper methods **isPrime()**, **isAttractive()** and **primeFactors()**. With the helper methods, the end result looks elegant.

```perl
#!/usr/bin/perl ;
use strict ;
use warnings ;

sub isPrime {
  my $number = shift ;
  if ( $number == 1 ) {
      return 0 ;
  }
  if ( $number == 2 ) {
      return 1 ;
  }
  for ( my $i = 2 ; $i < int ( $number / 2 + 1 ) ; $i++ ) {
      if ( $number % $i == 0 ) {
    return 0 ;
    last ;
      }
  }
  return 1 ;
}

sub isAttractive {
  my $number = shift ;
  my @primeFactors = primeFactors( $number ) ;
  return isPrime( scalar @primeFactors ) ;
}

sub primeFactors {
  my $num = shift ;
  if ( $num == 1 ) {
      return ( ) ;
  }
  my $current = 2 ;
  my @primeFactors ;
  while ( $num != 1 ) {
      if ( $num % $current == 0 ) {
    push @primeFactors , $current ;
    $num /= $current ;
      }
      else {
    do {
        $current++ ;
    } while ( not isPrime( $current ) ) ;
      }
  }
  return @primeFactors ;
}

my @attractives = grep { isAttractive( $_ ) } (1..50) ;
foreach my $num ( @attractives ) {
  print "$num " ;
}
print "\n" ;
```

***

## Walt Mankowski

**Walt** used the **Sieve of Eratosthenes** to find the primes. He is the only member who used this hack, very interesting.

```perl
#!/usr/bin/env perl
use strict;
use warnings;
use feature qw(:5.30);
use experimental qw(signatures);

my $N = 50;

# Find the primes up to $n using the Sieve of Eratosthenes
sub primes_up_to($n) {
    my %primes = map { $_ => 1 } 2..$n;
    for my $i (2..sqrt($n)) {
        if (defined $primes{$i}) {
            for (my $j = $i**2; $j <= $n; $j += $i) {
                delete $primes{$j};
            }
        }
    }
    return %primes;
}

sub prime_factors($n, %primes) {
    my @factors;

    for my $i (sort { $a<=>$b } keys %primes) {
        last if $i > $n;
        while ($n % $i == 0) {
            push @factors, $i;
            $n /= $i;
        }
    }
    return @factors;
}

my %primes = primes_up_to($N);
for my $i (1..$N) {
    say $i if defined $primes{scalar prime_factors($i, %primes)};
}
```

***

## Wanderdoc

**Wanderdoc** home grown **is_prime()** is really cool and on top of **print_attactive()** was like icing on the cake.

```perl
use strict;
use warnings FATAL => qw(all);

my $N = shift || 50; # or die "How much is the number?\n";

for ( 1 .. $N )
{
     print_attractive($_);
}

sub print_attractive
{
     my $n = $_[0];

     my $n_orig = $n;
     my $counter = 0;

     my @factors;

     # Old nice one-liner for prime factorization:
     # perl -le "$x = shift; for $k (2 .. $x/2) {$x%$k or (print $k and $x /= $k and redo) }"


     for my $k ( 2 .. $n/2 )
     {
          0 == $n % $k and
               $factors[$counter++] = $k and
               $n /= $k and redo;
     }
     print join(" ", $n_orig, '=', join(' * ',@factors)), $/ if is_prime($counter);
}

sub is_prime
{
     my $n = $_[0];
     if ($n <= 3) {return $n > 1 ? 1 : 0;}
     elsif (0 == $n % 2 or 0 == $n % 3) {return 0;}

     else
     {
          my $i = 5;
          while ( $i * $i <= $n )
          {
               if ( 0 == $n % $i or 0 == $n % ($i + 2))
               {
                    return 0;
               }
               $i += 6;
          }
     }
    return 1;
}
```

***
***
## Task #2
***
***

### Write a script to display first 20 **Leonardo Numbers**. Please checkout [wiki page](https://en.wikipedia.org/wiki/Leonardo_number) for more information.

For example:

##### L(0) = 1

##### L(1) = 1

##### L(2) = L(0) + L(1) + 1 = 3

##### L(3) = L(1) + L(2) + 1 = 5

and so on.

***

## Adam Russell

**Adam** tried to keep it simple and very well presented end result.

```perl
use strict;
use warnings;
use constant NUMBERS => 20;

my $numbers = NUMBERS;
my @leonardo = (1, 1);
while($numbers){
    if((NUMBERS - $numbers) < 2){
        print "L(" . (NUMBERS - $numbers) . ") = " . $leonardo[-1] . "\n";
    }
    else{
        my $leonardo = $leonardo[-1] + $leonardo[-2] + 1;
        print "L(" . (NUMBERS - $numbers) . ") = $leonardo\n";
        push @leonardo, $leonardo;
    }
    $numbers--;
}
```

***

## Andrezgz

**Andrezgz** kept it simple and easy to read.

```perl
#!/usr/bin/perl

use strict;
use warnings;
use Memoize;

memoize('leo');

my $upto = shift || 20;
print leo($_).' ' for (0 .. --$upto);

sub leo {
    my $n = shift;
    return $n <= 1 ? 1 : leo($n-1) + leo($n-2) + 1;
}
```

***

## Burkhard Nickels

**Burkhard** also took the **recursive** route.

```perl
print "Function leonardo1() with recursive function call ...\n";
foreach my $i (0 .. $max) {
    my $cnt = 0;
    my $nr = leonardo1($i,\$cnt);
    print "L($i) = $nr ($cnt)\n";
}

sub leonardo1 {
    my ($nr,$cnt) = @_;
    $$cnt++;
    if( $nr == 0 or $nr == 1 ) { return 1; }
    else {
        return leonardo1($nr-1,$cnt) + leonardo1($nr-2,$cnt) + 1;
    }
}
```

***

## Colin Crain

**Colin** presented the result nicely laid out.

```perl
use warnings;
use strict;
use feature ":5.26";

my $quan = shift @ARGV // 20;

say "the first $quan Leonardo numbers:";
say "";
say "index  |  number";
say "-------+--------";

my $i;
printf "%-2d        %d\n", ++$i, $_ for make_leonardo($quan)->@*;

sub make_leonardo {
##  construct a list of the first n Leonardo numbers
##  requires no recursion if we have the growing list to refer to
    my $quan  = shift;
    my $list  = [1];
    push $list->@*, 1 if $quan > 1;                         ## now [1,1]
    while ( scalar $list->@* <= $quan-1 ) {
        push $list->@*, $list->[-1] + $list->[-2] + 1;      ## sum last two elements + 1
    }
    return $list;
}
```

***

## Duncan C. White

**Duncan** kept it simple without any noise.

```perl
use v5.10;  # to get "say"
use strict;
use warnings;
#use Data::Dumper;

die "Usage: ch-2.pl [N//20]\n" if @ARGV>1;
my $n = shift // 20;

my %l;
$l{0} = 1;
$l{1} = 1;
say "leonardo(0) = $l{0}";
say "leonardo(1) = $l{1}";

foreach my $i (2..$n-1)
{
    $l{$i} = $l{$i-2} + $l{$i-1} + 1;
    say "leonardo($i) = $l{$i}";
}
```

***

## E. Choroba

**Choroba** blown me away with his hack of **shift** at the end.

```perl
#! /usr/bin/perl
use warnings;
use strict;
use feature qw{ say };

my @last2 = (1, 1);
for my $n (0 .. 20) {
    say "L($n) = ", $last2[0];
    push @last2, $last2[0] + $last2[1] + 1;
    shift @last2;
}
```

***

## Javier Luque

**Javier** made use of **recursive** function.

```perl
#!/usr/bin/perl
# test: ./ch-2.pl
use strict;
use warnings;
use feature qw /say/;

for my $i (1..20) {
    say "L($i) = " . leonardo($i);
}

# Leonardo
sub leonardo {
    my $n = shift;
    return 1 if ($n == 0 or $n == 1);

    # Recursive
    return (
        leonardo($n-1) +  # l(n-1)
        leonardo($n-2) +  # l(n-2)
        1                 # 1
    );
}
```

***

## Laurent Rosenfeld

**Laurent** didn't blink once before getting the desired result.

```perl
use strict;
use warnings;
use feature qw /say/;

my @leonardo = (1, 1);
for my $i (1..18) {
    push @leonardo, $leonardo[-1] + $leonardo[-2] + 1;
}
say "@leonardo";
```

***

## Lubos Kolouch

It can't be any simpler than this, thanks **Lubos**.

```perl
use strict;
use warnings;
use Data::Dumper;

my @l = (1,1);

for (2..19) {
    $l[$_] = $l[$_-2] + $l[$_-1]+1;
}

warn Dumper @l;
```

***

## Roger Bell_West

**Roger** followed the easy path. However while printing the result, he used the **negative index** hack, very smart.

```perl
#! /usr/bin/perl

use strict;
use warnings;

my @stack;

foreach my $i (0..19) {
  if ($i<2) {
    push @stack,1;
  } else {
    push @stack,1+$stack[-1]+$stack[-2];
    shift @stack;
  }
  print $stack[-1],"\n";
}
```

***

## Ruben Westerberg

**Ruben** made use of **state** to cache the result. I wonder if it is any better than **Memoize**.

```perl
#!/usr/bin/env perl
use strict;
use warnings;
use v5.26;

print map { "n: $_ l: ".l($_)."\n"} 0..19;

sub l {
    my $i=shift;
    state @cache=(1,1);
    push @cache, $cache[-1]+$cache[-2]+1 while(! defined($cache[$i]));
    $cache[$i];
}
```

***

## Ryan Thompson

**Ryan** showed how the use of **Memoize** can be so powerful. Highly Recommended.

```perl
use 5.010;
use warnings;
use strict;
use Memoize; # This is a core module

# Use core Perl module "Memoize" to store results of previous calls
# Note this is the exact same code as leo_no_memo, apart from the memoize call
sub leo_memoize {
    my $n = shift;
    return 1 if $n < 2;
    1 + leo_memoize($n - 1) + leo_memoize($n - 2);
}
memoize 'leo_memoize';

# In this case doing memoization ourselves is really easy, and turns out
# to be a surprising 777% faster than Memoize, so it's my preference.
{
    my @leo = (1, 1);
    sub leo_my_memo {
        my $n = shift;
        $leo[$n] //= 1 + leo_my_memo($n - 1) + leo_my_memo($n - 2);
    }
}

# Building up the list iteratively is also a good solution
sub leo_to_n {
    my @r = (1, 1);
    push @r, $r[-1] + $r[-2] + 1 for 2..$_[0];
    @r;
}

say for leo_to_n(20);
```

***

## Saif Ahmed

**Saif** never hesitates caching whereever to speed up the performance. I simply love his work.

```perl
use strict;
use warnings;
use feature 'say';

# hash containing known Leornado numbers.  It is prepopulated with
# L(0) and L(1), but more added as discovered by L().
my %leonardos=(0=>1,1=>1,);

# Golden ratio numbers required for the closedForm() method
my $gr1=(1+sqrt(5))/2;
my $gr2=(1-sqrt(5))/2;

say  "$_) ", L($_)  for (0..20);  # find the first 21 leonardo numbers

# This subroutines uses no caching and rapidly slowss after about
# 25 retrievals.
sub l{
  my $ln=shift;
  return $ln < 2?1:l($ln-2)+l($ln-1)+1;
}

#  This retrieves Leonardo numbers from cache where needed
sub L{
  my $ln=shift;

  # find and store L(N) in the hash, if it does not exist already
  unless (exists  $leonardos{$ln}) {
      $leonardos{$ln}=L($ln-2)+L($ln-1)+1
  };
   #return stored L(N)
  return $leonardos{$ln};
}

# This is a closed form function that requires no recursion
# see https://en.wikipedia.org/wiki/Leonardo_number
sub closedForm{
    my $ln=shift;
    return 2*($gr1**($ln+1)-$gr2**($ln+1))/($gr1-$gr2) -1;
}
```

***

## Steven Wilson

**Steven** kept it sweet and simple.

```perl
e strict;
use warnings;

my @leonardo_numbers = ( 1, 1 );
my $counter = 2;

while ( $counter < 20 ) {
    $leonardo_numbers[$counter] =
        $leonardo_numbers[ $counter - 1 ] +
        $leonardo_numbers[ $counter - 2 ] +
        1;
    $counter++;
}

print join " ", @leonardo_numbers, "\n";``
***

## Ulrich Rieke

**Ulrich** made good use of **negative** index. Clean Hack.

```perl
#!/usr/bin/perl ;
use strict ;
use warnings ;

my @leonardos = ( 1 , 1 ) ;
while ( (scalar @leonardos ) < 20 ) {
  push @leonardos , $leonardos[-1] + $leonardos[-2] + 1 ;
}
for my $num ( @leonardos ) {
  print "$num " ;
}
print "\n" ;
```

***

## Walt Mankowski

**Walt** made good use **swapping**, very nice hack.

```perl
#!/usr/bin/env perl
use strict;
use warnings;
use feature qw(:5.30);
use experimental qw(signatures);

my $N = 20;
my ($l1, $l2) = (1, 1);

for my $i (0..$N-1) {
    if ($i < 2) {
        say "L($i) = 1";
    } else {
        ($l1, $l2) = ($l2, $l1 + $l2 + 1);
        say "L($i) = $l2";
    }
}
```

***

## Wanderdoc

**Wanderdoc** exploited the **Fibonacci series** to get the desired result.

```perl
#!perl
use strict;
use warnings FATAL => qw(all);

my $fn = shift || 20; #  or die "How much numbers?\n";
print join(" ", map 2 * fib($_ + 1) - 1, 0 .. 20), $/;

sub fib
{
     my $n = shift;
     my $x = 0;
     my $y = 1;

     my $m = 0;
     while ( $m < $n )
     {
          ($x, $y) = ($y, $x + $y);
          $m++;

     }

     return $x;
}
```

***
***
## SEE ALSO
***
***

(1) [**Perl Weekly Challenge 041**](https://adamcrussell.livejournal.com/14043.html) by **Adam Russell**

(2) [**PERL WEEKLY CHALLENGE – 041**](https://perlchallenges.wordpress.com/2019/12/30/perl-weekly-challenge-041/) by **Javier Luque**

(3) [**Perl Weekly Challenge 41: Attractive Numbers and Leonardo Numbers**](http://blogs.perl.org/users/laurent_r/2020/01/perl-weekly-challenge-41-attractive-numbers-and-leonardo-numbers.html) by **Laurent Rosenfeld**

(4) [**Attractive Numbers**](http://www.ry.ca/2020/01/attractive-numbers/) by **Ryan Thompson**

(5) [**Leonardo Numbers**](http://www.ry.ca/2020/01/leonardo-numbers/) by **Ryan Thompson**
