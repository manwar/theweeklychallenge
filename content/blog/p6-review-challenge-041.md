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

```Perl6
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

``` Perl6
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

``` Perl6
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

``` Perl6
use Prime::Factor;
for 1..50 {
  my @p = prime-factors($_);
  say $_ ~ " / " ~ @p if @p.elems.is-prime;
}
```

[Markus Holtzer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-041/markus-holzer/perl6/ch-1.p6) is also coming back to the Perl Weekly Challenge after a pause. He also used the `Prime::Factor`  module to do the bulk of the work (prime factorization, and his solution is even more compact:

``` Perl6
use Prime::Factor;
.say for (2..50).grep( -> $n { is-prime prime-factors( $n ).elems });
```

[Kevin Colyer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-041/kevin-colyer/perl6/ch-1.p6) wrote an `attractiveNumber` and a `factors` subroutines and ended up with a fairly verbose program:

``` Perl6
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

``` Perl6
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

``` Perl6
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

``` Perl6
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

``` Perl 6
my @primes = grep {.is-prime}, 0..$max;
```

Otherwise, Colin's code does the prime factorization as follows:

``` Perl6
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

``` Perl6
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

``` Perl6
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
```

[Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-041/ruben-westerberg/perl6/ch-1.p6) is (if I'm not wrong) the only challenger who used a `gather/take` statement to construct a list of prime factors in his recursive `primeFactors` subroutine. It is a bit of a surprise to me, because the `gather/take` is really well fit to the problem.

``` Perl6
sub primeFactors($i) {
    gather {
        for 1..$i/2 {
            if ($i%%$_) && $_.is-prime {
                take $_;
                given $i/$_ {
                    if .is-prime {
                        take $_;
                    }
                    else {
                        take (|primeFactors($_));
                    }
                    last;
                }
            }
        }
    }
}
```

[Ryan Thompson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-041/ryan-thompson/perl6/ch-1.p6) wrote a `divisors` method (to find prime factors) that is quite similar to what most other challengers did and returns an array of factors.  The really innovative part, though, in his program is that he added this method to the `Int` class using the [augment declarator](https://docs.raku.org/syntax/augment):

``` Perl6
sub MAIN( Int :$max = 50 ) {
    .say for (1..$max).grep: *.divisors.is-prime;
}

# WARNING: `augment' has global scope
# https://docs.perl6.org/syntax/augment
# I'm using it here to demonstrate a unique language feature.

use MONKEY-TYPING;

augment class Int {
    method divisors returns Array {
        my @div;
        my $n = self;
        for (2..self.sqrt).grep: *.is-prime -> $div {
            while $n % $div == 0 {
                $n /= $div;
                @div.push: $div;
            }
        }
        @div;
    }
}
```

Note that using the `augment` is discouraged in the official documentation because, since classes usually have global scope, `augment` will modify global state, which goes against usually accepted best practices. This is the reason the code must activate the `MONKEY-TYPING` pragma first. Ryan knows about that problem and even mentions it in his comments. Still, I believe it is very interesting to see how this rather unique feature of Raku works for solving a real problem.

In this case, the `divisors` method could easily be replaced with a subroutine (even keeping the method call syntax in the `MAIN` subroutine by using the [.& methodop](https://docs.raku.org/language/operators#index-entry-methodop_.&)), for example:

``` Perl6
sub divisors (Int $in) {
    my @div;
    my $n = $in;
    for (2..$in.sqrt).grep: *.is-prime -> $div {
        while $n % $div == 0 {
            $n /= $div;
            @div.push: $div;
        }
    }
    @div;
}
sub MAIN( Int :$max = 50 ) {
    .say for (1..$max).grep: *.&divisors.is-prime;
}
```

Another alternative might be to subclass the `Int` class (i.e. create a new class derived from `Int`) and add the `divisors` method to this new child class.

[Ulrich Rieke](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-041/ulrich-rieke/perl6/ch-1.p6) wrote a `primeFactors` and a `isAttractive` subroutines to solve the problem. Note the use of the `repeat ... until` construct, which I know about but almost never use because I just don't think about it.

``` Perl6
sub primeFactors( Int $n is copy ) {
  if ( $n == 1 ) {
      return ( ) ;
  }
  my @primeFactors ;
  my $current = 2 ;
  while ( $n != 1 ) {
      if ( $n %% $current ) {
        @primeFactors.push( $current ) ;
        $n div= $current ;
      }
      else {
        repeat {
          $current++ ;
        } until $current.is-prime ;
      }
  }
  return @primeFactors ;
}

sub isAttractive( Int $n --> Bool ) {
  my @primeFactors = primeFactors( $n ) ;
  return @primeFactors.elems.is-prime ;
}

.say for (1..50).grep( {isAttractive( $_ ) } ) ;
```

## Task #2: Leonardo Numbers

This is derived in part from my [blog post](http://blogs.perl.org/users/laurent_r/2020/01/perl-weekly-challenge-41-attractive-numbers-and-leonardo-numbers.html) made in answer to the [Week 41 of the Perl Weekly Challenge](https://perlweeklychallenge.org/blog/perl-weekly-challenge-041/) organized by  <a href="http://blogs.perl.org/users/mohammad_s_anwar/">Mohammad S. Anwar</a> as well as answers made by others to the same challenge.

The challenge reads as follows:

*Write a script to display first 20 Leonardo Numbers. Please checkout [wiki page](https://en.wikipedia.org/wiki/Leonardo_number) for more information.*

*For example:*
    L(0) = 1
    L(1) = 1
    L(2) = L(0) + L(1) + 1 = 3
    L(3) = L(1) + L(2) + 1 = 5

*and so on.*

So, basically, Leonardo numbers are very similar to Fibonacci numbers, except that 1 gets added to the sum each time we go from one step to the next.

## My Solutions

We start with the iterative plain-vanilla approach:

``` Perl6
use v6

my @leo = 1, 1;
push @leo, @leo[*-1] + @leo[*-2] + 1 for 1..18;
say @leo;
```

which duly prints:

    [1 1 3 5 9 15 25 41 67 109 177 287 465 753 1219 1973 3193 5167 8361 13529]

Or we could use a recursive approach. But Leonardo numbers have the same problem as Fibonacci numbers with a recursive approach when the searched number becomes relatively large (e.g. 40 or 45): computing them becomes extremely slow (this is not really a problem here, since we've been requested to compute the first 20 Leonardo numbers, but let's try to make a program that scales well to higher values). To avoid that problem with large input values, we *memoize* or *cache* manually our recursion, using the `@leo` array (for inputs larger than what is requested by the task):

``` Perl6
use v6;
my @leo = 1, 1;
sub leonardo (Int $in) {
    return @leo[$in] if defined @leo[$in];
    @leo[$in] = [+] 1, leonardo($in - 1), leonardo($in -2);
}
sub MAIN (Int $input = 19) {
    leonardo $input;
    say @leo;
}
```

Note that this program hard-codes the first two Leonardo numbers in the `@leo` cache to provide the base case stopping the recursion.

If we run the program without providing a parameter (i.e. with a default value of 19) we get the same list as before:

    [1 1 3 5 9 15 25 41 67 109 177 287 465 753 1219 1973 3193 5167 8361 13529]

And if we run it with a parameter of 98, we obtain the following output:

    [1 1 3 5 9 15 25 41 67 109 177 287 465 753 1219 1973 3193 5167 8361 13529 21891 35421 57313 92735 150049 242785 392835 635621 1028457 1664079 2692537 4356617 7049155 11405773 18454929 29860703 48315633 78176337 126491971 204668309 331160281 535828591 866988873 1402817465 2269806339 3672623805 5942430145 9615053951 15557484097 25172538049 40730022147 65902560197 106632582345 172535142543 279167724889 451702867433 730870592323 1182573459757 1913444052081 3096017511839 5009461563921 8105479075761 13114940639683 21220419715445 34335360355129 55555780070575 89891140425705 145446920496281 235338060921987 380784981418269 616123042340257 996908023758527 1613031066098785 2609939089857313 4222970155956099 6832909245813413 11055879401769513 17888788647582927 28944668049352441 46833456696935369 75778124746287811 122611581443223181 198389706189510993 321001287632734175 519390993822245169 840392281454979345 1359783275277224515 2200175556732203861 3559958832009428377 5760134388741632239 9320093220751060617 15080227609492692857 24400320830243753475 39480548439736446333 63880869269980199809 103361417709716646143 167242286979696845953 270603704689413492097 437845991669110338051]

The program ran in less than 0.3 second:

    real    0m0,272s
    user    0m0,031s
    sys     0m0,016s

Without memoization, the expected execution time would be several millions years (except, of course, that the program would die long before that because of a number of other reasons, including, but not limited to, memory shortage, CPU breakdown, power outages, planned obsolescence, and quite possibly global warming or thermonuclear Armageddon).

## Alternative Solutions

[Arne Sommer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-041/arne-sommer/perl6/ch-2.p6) built an infinite sequence of Leonardo numbers:

``` Perl6
my $leonardo := (1, 1, { $^a + $^b +1 } ... Inf);
unit sub MAIN ($limit = 20);
say "$_: $leonardo[$_]" for ^$limit;
```

I'm angry against myself that I did not think about using a sequence, probably because I first solved the task in Perl 5 and then lazily translated the P5 code into Raku. Arne's solution is in my opinion obviously better than mines.

[Jo Christian Oterhals](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-041/jo-christian-oterhals/perl6/ch-2.p6) made a come-back in the Perl Weekly Challenge after an extended absence. Welcome back, Jo Christian. He also built an infinite sequence of Leonardo number and his program is just one code line:

``` Perl 6
.say for (1, 1, * + * + 1 ... Inf).[^20];
```

[Markus Holzer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-041/markus-holzer/perl6/ch-2.p6) is also coming back to the Perl Weekly Challenge after a pause. Welcome back, Markus. His solution is almost exactly the same as Jo Christian's:

``` Perl 6
.say for (1, 1, * + * + 1 ... *)[^20];
```

[Javier Luque](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-041/javier-luque/perl6/ch-2.p6) also used an infinite sequence:

``` Perl6
sub MAIN () {
    my @leonardo = 1, 1, * + * + 1 ... *;
    say "L($_) = " ~ @leonardo[$_]
        for (1 .. 20);
}
```

[Ulrich Rieke](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-041/ulrich-rieke/perl6/ch-2.p6) also used an infinite sequence:

``` Perl6
my @leonardos = (1 , 1 , 3 , * + * + 1 ...^ *) ;
.say for @leonardos[^20] ;
```

[Kevin Colyer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-041/kevin-colyer/perl6/ch-2.p6) used multi subroutines to take care of the first two input numbers, and a cached (or memoized) recursive subroutine otherwise:

``` Perl 6
my @cache;
multi sub Leonardo(Int:D $n where * == 0) { 1 }
multi sub Leonardo(Int:D $n where * == 1) { 1 }
multi sub Leonardo(Int:D $n where * > 1 )  {
   return @cache[$n] if @cache[$n];
   return @cache[$n] = Leonardo($n-1)+Leonardo($n-2)+1;
}
say "$_ -> "~Leonardo($_) for ^21;
```

[Noud Aldenhoven](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-041/noud/perl6/ch-2.p6) built an infinite sequence of *Fibonacci numbers* and then used a mathematical relation between Fibonacci and Leonardo numbers:

    leonardo(n) = 2 * fib(n + 1) - 1

His code is as follows:

``` Perl6
constant @fib = 0, 1, * + * ... *;

sub leonardo(Int $n) {
    2 * @fib[$n + 1] - 1;
}
say "First 20 Leonardo numbers:";
for ^20 -> $n {
    leonardo($n).say;
}
```

[Simon Proctor](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-041/simon-proctor/perl6/ch-2.p6) used a cached recursive subroutine:

``` Perl6
# Combining multi subs and cached went badly
sub L( Int \n --> Int ) is pure is cached {
    return 1 if n == 0|1;
    return L(n-2) + L(n-1) + 1;
}
```

[Colin Crain](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-041/colin-crain/perl6/ch-2.p6)'s solution starts with a long comment explaining basically that recursion is not needed and that it is possible to compute the Leonardo numbers from the previously computed numbers. Of course, Colin is absolutely right (and my first "plain vanilla" approach is such an iterative example). The fact that the Fibonacci numbers (whose construction is very similar to the Leonardo numbers) have need abundantly used (and perhaps even sometimes abused) in computer science to illustrate recursion doesn't mean that you have to use recursion, or even that recursion is the best solution. This is Colin's `make_leonardo` iterative subroutine to build a list of Leonardo numbers:

``` Perl6
sub make_leonardo ( Int:D $quan where {$quan > 0} ){
    my @list = [1];                             ## L1 = 1
    @list.push: 1 if $quan > 1 ;                ## L2 = 1
    while ( @list.elems <= $quan-1 ) {
        @list.push: [+] flat @list.tail(2), 1;  ## reduce sum flattened list of last two elems and 1
    }
    return @list;
}
```

[Roger Bell West](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-041/roger-bell-west/perl6/ch-2.p6)'s solution confirms Colin Crain's remarks: he suggested just another iterative approach using a stack:

``` Perl6
my @stack;
for (0..19) -> $i {
  if ($i < 2) {
    push @stack,1;
  } else {
    push @stack,1+@stack[@stack.end]+@stack[@stack.end-1];
    shift @stack;
  }
  say @stack[@stack.end];
}
```

[Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-041/ruben-westerberg/perl6/ch-2.p6) used a cached recursive approach:

``` Perl6
*put (0..19).map({ "n: $_ l: "~l($_)}).join("\n");

sub l($i) {
    state @cache=(1,1);
    @cache.push(@cache[*-1,*-2].sum+1) while !@cache[$i].defined;
    @cache[$i];
}
```

[Ryan Thompson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-041/ryan-thompson/perl6/ch-2.p6) suggested three solutions; a plain recursive approach, a manually memoized recursive version and an infinite sequence solution:

``` Perl6
use experimental :cached;

# Cached version
sub leo( Int $n ) is cached { $n < 2 ?? 1 !! 1 + leo($n - 1) + leo($n - 2) }

# Manually memoized solution
sub leo_my_memo( Int $n ) {
    state @leo = (1, 1);
    @leo[$n] //= 1 + leo_my_memo($n - 1) + leo_my_memo($n - 2);
}

# Lazily evaluated version
my @leo = 1, 1, 1+*+* ... ∞;

.say for @leo[0..20];
```

***
***
## SEE ALSO
***
***

Three blog posts this time:

* Arne Sommer: https://raku-musings.com/numbers.html;

* Javier Luque: https://perlchallenges.wordpress.com/2019/12/30/perl-weekly-challenge-041/;

* Ryan Thompson: http://www.ry.ca/2020/01/attractive-numbers/.

* Ryan Thompson: http://www.ry.ca/2020/01/leonardo-numbers/.

***
***

## Wrapping up

Please let me know if I forgot any of the challengers or if you think my explanation of your code misses something important (send me an e-mail or just raise an issue against this GitHub page).

If you want to participate to the Perl Weekly Challenge, please connect to [this site](https://perlweeklychallenge.org/).
