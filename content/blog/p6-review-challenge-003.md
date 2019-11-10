---
title: "Laurent Rosenfeld Weekly Review: Challenge - 003"
date: 2019-10-27T00:00:00+00:00
description: "Laurent Rosenfeld Weekly Review: Challenge - #003."
type: post
image: images/blog/p6-review-challenge-003.jpg
author: Laurent Rosenfeld
tags: ["Raku"]
---
***
# Raku Solutions Weekly Review
***

## Task #1: Five-Smooth Numbers

This is derived in part from my [blog post](http://blogs.perl.org/users/laurent_r/2019/04/perl-weekly-challenge-week-3.html) made in answer to the [Week 03 of the Perl Weekly Challenge](https://perlweeklychallenge.org/blog/perl-weekly-challenge-003/) organized by  <a href="http://blogs.perl.org/users/mohammad_s_anwar/">Mohammad S. Anwar</a> as well as answers made by others to the same challenge.

The challenge reads as follows:

*Create a script to generate 5-smooth numbers, whose prime divisors are less or equal to 5. They are also called Hamming/Regular/Ugly numbers. For more information, please check this [wikipedia](https://en.wikipedia.org/wiki/Regular_number) page.*

Regular or 5-smooth numbers (or Hamming numbers, or ugly numbers) are numbers whose prime divisors are only 2, 3, and 5, so that they evenly divide some powers of 30.

## My Solutions

Generating just some 5-smooth numbers is a trivial problem. For example, if you want 6 such numbers, you only need to generate the first six powers of 2 (or the first six powers of 3, or six powers of 5), as in this Perl 6 one-liner:

    $ perl6 -e 'say 2 ** $_ for 1..6;'
    2
    4
    8
    16
    32
    64

This is really too simple, so my guess is that, perhaps, what is wanted is maybe something like: generate a sequence of all 5-smooth numbers smaller than a given upper bound (say 100). Such a sequence is sometimes called a Hamming sequence. Or maybe that's not really the requirement, but let's do it for the fun of it.

We could do it with a brute-force approach: check all integers between 1 and 100, perform a prime factor decomposition of each of them and check whether any of the prime factors is larger than 5. This would be rather inefficient, though, with a lot of useless computations. An alternative would be to generate a list of primes between 1 and the upper bound  and to check for each number in the range whether it can be evenly divided by any of the primes larger than 5. In either case, we need to build a list of prime numbers.

Perl 6 has a built-in `is-prime` subroutine, which implements the very fast Miller-Rabin algorithm for figuring out whether an integer is prime. The `is-prime` subroutine returns `False` if this integer is not a prime, and it returns `True` if the integer is a known prime or if it is very likely to be a prime based on the probabilistic Miller-Rabin test. OK, the Miller-Rabin test is probabilistic and it is possible (though very unlikely) that `is-prime` will return `True` for a number that is not prime. In fact, the probability of occurrence of such an event is so low that it is said to be much less likely to happen than having a cosmic ray hitting your CPU at the wrong moment and disrupting its function to the point of giving you the wrong answer. We don't have to worry about this probabilistic test anyhow, since we're dealing with small numbers for which the `is-prime` subroutine is known to return a correct result.

So building the list of primes between 1 and 100 is just one line of code, shown here in the REPL:

    > my @primes = grep {.is-prime}, 1..100
    [2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97]

We don't even need to specify how many primes we want in our list: we can build a *lazy infinite* list of prime numbers:

    > my $primes := grep {.is-prime}, $list;
    (...)
    > say $primes[4];   # Fifth prime number
    11
    > say $primes[999]; # Thousandth prime number
    7919

Here, `$primes` is an infinite list or prime numbers. Quite obviously, the computer did not calculate and populate an infinite list of primes. It is a *lazy* list, which means that the program now knows how to calculate any element of the list, but it will actually do so only when required. This is great because we don't need to know in advance how many primes we really need: we just prepare a lazy infinite list, and the program will compute only the primes that are actually needed by the program.

#### Building the Hamming Sequence

Now, it is easy to go through all the integers between 1 and 100 and find out if they can be divided evenly by any of the primes larger than 5:

``` Perl6
my @prime_numbers = grep {.is-prime}, 5^..Inf;    # we need only primes strictly larger than 5
my @regulars;
for (1 .. 100) -> $num {
    my $is_regular = True;
    for @prime_numbers -> $prime {
        last if $prime > $num / 2;
        if ( $num %% $prime ) {
            $is_regular = False;
            last;
        }
    }
    push @regulars, $num if $is_regular;
}
say @regulars;
```

This will print the following Hamming:

    [1 2 3 4 5 6 8 9 10 12 15 16 18 20 24 25 27 30 32 36 40 45 48 50 54 60 64 72 75 80 81 90 96 100]

#### Producing Directly the Products of the Powers of 2, 3, and 5

We can use the Perl 6 cross (`X`) metaoperator to generate all the products. I knew intuitively that this could certainly be done, but I must admit it took a little bit of thinking to figure out a good way to implement it.

The cross operator operates on two or more lists and generates a Cartesian product of all elements. Here is an example in the REPL:

    > say <a b c> X <1 2 3>;
    ((a 1) (a 2) (a 3) (b 1) (b 2) (b 3) (c 1) (c 2) (c 3))

Used as a metaoperator, `X` will apply the associated operator to all the generated tuples. For, example, we can use it with the concatenation operator (`X~`) to generate strings from the tuples:

    > say <a b c> X~ <1 2> X~ <y z>;
    (a1y a1z a2y a2z b1y b1z b2y b2z c1y c1z c2y c2z)

We can use the cross metaoperator together with the multiplication operator (`X*`) to generate the products of the various powers of 2, 3 and 5:

``` Perl6
my %powers;
for 2, 3, 5 -> $n {%powers{$n} = (1, $n, $n**2 ... *);}
my @hamming_sequence = sort grep { $_ <= 100},
    (%powers{2}[0..6] X* %powers{3}[0..4] X* %powers{5}[0..2]);
```

First, we use the sequence (`...`) to generate three lazy infinite lists of the powers of 2, 3 and 5 (stored in the `%powers` hash), and, then, we use `X*` to generate a lazy infinite list of all the products, and finally apply a `grep` to keep only the 5-smooth numbers smaller than 100 and sort the result.

We obtain the same Hamming sequence as before.

## Alternative Solutions

[Arne Sommmer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-003/arne-sommer/perl6/ch-1.p6) used three nested `for` loops going from zero to infinity to produce 5-smooth numbers and leaving each loop when reaching the `$limit` passed as a parameter to the program:

``` Perl6
sub MAIN (Int $limit where $limit > 0)
{
  my SetHash $solution = SetHash;

  for 0 .. Inf -> $c
  {
    last if 5 ** $c > $limit;

    for 0 .. Inf -> $b
    {
      last if 3 ** $b > $limit;

      for 0 .. Inf -> $a
      {
         my $value = 2 ** $a * 3 ** $b * 5 ** $c;
         last if $value > $limit;
         $solution{$value} = True;
      }
    }
  }
  say $solution.keys.sort.join(" ");
}
```

[Mark Senn](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-003/mark-senn/perl6/ch-1.p6) similarly used nested `for` loops:

```
my $m = 2;

# Construct the result.
my @r = ();
# No need to get fancy---nested loops
# will produce only the numbers needed.
for (1..$m) -> $i  {
    for (1..$m) -> $j  {
        for (1..$m) -> $k  {
            @r.push(2**$i * 3**$j * 5**$k);
        }
    }
}
# Print the result.
@r.sort.join("\n").say;
```

[Doug Schrag](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-003/doug-schrag/perl6/ch-1.p6) used the `Z` infix zip operator and the `XZ+` metaoperator to produce the following solution:

``` Perl6
sub MAIN(Int :$limit = 9) {
    # Use Slip() to flatten the list just one level
    my @exponents-list = (^$limit).produce(&grow)
        .map({ Slip( $_ ?? $_ !! () ) });
    # 3D coordinates used as powers of the allowable
    # prime factors
    for @exponents-list {
        # @() is used to indicate multiple element in the
        # argument list to the Z operator (also below)
        say [*] (2, 3, 5) Z** @($_)
    }
}

multi sub grow (Int, Int) { ((0, 0, 0),) }
multi sub grow (List $a, Int $b --> List()) {
    # Sequence of integral points in 3D space where sum
    # of coordinates is the next integer (0, 1, 2 ...)
    ( @($a) XZ+ (1, 0, 0), (0, 1, 0), (0, 0, 1) )
        .map(*.List).unique(:with(&[eqv]));
}
```

[Francis J. Whittle](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-003/fjwhittle/perl6/ch-1.p6) used a `gather/take` block to build some iterators generating lists, and promises to allow for concurrent programming. A quite interesting implementation, which may look a bit complicated, but runs very fast even for finding large Hamming numbers:

``` Perl6
subset Count of Int where * >= 0;

#| Script to generate 5-smooth numbers
unit sub MAIN(
  Count :n(:$count) = 20, #= How many 5-smooth numbers to generate.
  Bool :$timing = False, #= Display timing information with output.
  *@print #= Specific indices to show.
);

# Use a lazy list to generate 5-smooth numbers
my $smooth5 = gather {
  # Initialize some iterators.
  my ($i2, $i3, $i5) := ($smooth5.iterator for ^3);
  my ($n2, $n3, $n5) := 1 xx 3;

  # Just keep generating.  Does the list become sparse?  I don't know!
  loop {
    # Minimum of the latest iterations
    take my $n := ($n2, $n3, $n5).min;

    # Advance the iterators that matched.
    $n2 == $n and $n2 := $i2.pull-one * 2;
    $n3 == $n and $n3 := $i3.pull-one * 3;
    $n5 == $n and $n5 := $i5.pull-one * 5;
  }
}

if $timing {
  # This needs to be a discrete block.
  {
    Promise.in(1 / 100).then: &?BLOCK;
    $*ERR.printf(Q:b'\r%6.2fs', (now - INIT now));
  }
}

$smooth5.[^$count].say if $count;

for @print.grep(* ~~ Int).sort -> $n {
  if $timing {
    my $result = $smooth5[$n-1];
    (Q:b'\r%6.2fs %*d: %d').sprintf((now - INIT now), @print.max.chars, $n, $result).say;
  } else {
    sprintf('%*d: %d', @print.max.chars, $n, $smooth5[$n-1]).say;
  }
}
```

[Jaldhar H. Vyas](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-003/jaldhar-h-vyas/perl6/ch-1.p6) used in input list of consecutive integers  and looked for numbers divisible by numbers other than 2, 3 and 5:

``` Perl6
sub isSmooth(Int $num) {
    # get the divisors that _aren't_ multiples of 2, 3, or 5
    my @divisors = (1 .. $num)
                   .grep( { $num % $_ == 0 } )
                   .grep( { ($_ % 2 != 0) && ($_ % 3 != 0) && ($_% 5 != 0) } );

    # 1 is always a divisor so the array will always have atleast one member.
    return @divisors.elems == 1;
}

multi sub MAIN(
    Int $max #= search for 5-smooth numbers in the range 1 .. max
    ) {
    (1 .. $max).grep(&isSmooth).join(' ').say;
}
```

[James Smith](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-003/james-smith/perl6/ch-1.p6) used a `lazy gather/take` block:

``` Perl6
my @hammings = lazy gather {
  take 1;
  my $last = 0;
  while 1 {
    my $lowest;
    my $n = 5; my @other = (3,2);
    for (@hammings) {
      next if $_*$n <= $last;
      $lowest = $_*$n unless $lowest && $lowest < $_*$n;
      last unless @other;
      $n = shift @other;
      redo;
    }
    take $lowest;
    $last = $lowest;
  }
}

sub MAIN($n) {
  say @hammings[$_-1] for 1..$n;
}
```
[Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-003/joelle-maslak/perl6/ch-1.p6) used a `divisors` subroutine to find the divisors of an integer:

``` Perl6
sub divisors(Int:D $i -->Array[Int:D]) {
    if ($i == 0) { return 0; }

    my $sqrt = sqrt($i).Int;

    my Int:D @divs = grep { $i %% $^div }, 1..$sqrt;
    @divs.append: map { Int($i / $^div) }, @divs;

    return @divs;
}
```

and then used it to filter the `@hamming` array of numbers:

```
sub MAIN(Int:D $count where * ≥ 0) {
    my @hamming = (1..∞).grep: { divisors($^num).grep( *.is-prime ).Set ⊆ (2,3,5).Set };
    say "Hamming numbers [0..{$count-1}]: " ~ @hamming[^$count].join(", ");
}
```

[Nick Logan](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-003/nick-logan/perl6/ch-1.p6) wrote a "polyglot" solution, i.e. voluntarily departed from usual best practices in order to provide a solution that would run on both Perl 5 and Perl 6:

``` Perl6
my @ARGV = do { sub eval { &EVAL(@_) }; eval( ("0" and q|@*ARGS| or q|@ARGV|) ) };

my $numbers_tried = 0;
my $numbers_found = 0;

NUMBERS: while ($numbers_found != @ARGV[0]) {

    $numbers_tried++;
    my $state = $numbers_tried;
    while ($state != 1) {
        if ($state % 2 == 0) {
            $state /= 2;
        }
        elsif ($state % 3 == 0) {
            $state /= 3;
        }
        elsif ($state % 5 == 0) {
            $state /= 5;
        }
        else {
            next NUMBERS;
        }
    }
    $numbers_found++;

    print("$numbers_tried\n");
}
```

Really not an idiomatic Perl 6 solution, but a quite interesting exercise that should give some food for thought to those who claim against all evidence that P5 and P6 are totally different languages. No, P5 and P6 are indeed different languages, but they are very similar in many respects, especially in spirit.

[Ohmy Cloud](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-003/ohmycloud/perl6/ch-2.p6) wrote a solution with three `while` loops:

``` Perl6
sub ugly-number(Int $index) {
    return 0 if $index == 0;
    my @baselist = [1];
    my ($min2, $min3, $min5) = 0,0,0;
    my $curnum = 1;

    while $curnum < $index {
        my $minnum = (@baselist[$min2] * 2,  @baselist[$min3] * 3,  @baselist[$min5] * 5).min;
        @baselist.append($minnum);

        while @baselist[$min2] * 2 <= $minnum { $min2 += 1 }
        while @baselist[$min3] * 3 <= $minnum { $min3 += 1 }
        while @baselist[$min5] * 5 <= $minnum { $min5 += 1 }

        $curnum +=1
     }

    return @baselist[*-1]
}

sub MAIN(Int $count) {
    ugly-number($_).say for 1..$count;
}
```

[rob4t](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-003/rob4t/perl6/ch-1.p6) wrote a `get-hamming-sequence` and a `is-hamming-number` subroutines to find Hamming numbers. His filtering subroutine looks like this:

```Perl 6
sub is-hamming-number(PositiveInt $number is copy --> Bool) {
    return True if $number == 1;

    for 2,3,5 -> $divisor {
        return is-hamming-number($number div $divisor) if $number %% $divisor;
    }
    return False;
};
```

[Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-003/ruben-westerberg/perl6/ch-1.p6) suggested this solution based on the powers of 60:

``` Perl6
my $powers=(1 ... *) ;
my $primes=(2,3,5);
for $powers<> {
    my $smooth=[];
    my $t=60**$_;
        for 1..($t/2) -> $s {
            append $smooth,
                ((do for $primes<> -> $p {
                    my $smooth1=$s*$p;
                    my $val=Int($t/$smooth1);
                    my $test= ($t%%($smooth1));
                    ($test && ($val >= 2)) ?? ($smooth1,$val) !! ();
                    }).flat);
    }
    say "5-Smooth Numbers for 60^$_: ";
    say $smooth.Bag.pairs>>.key.sort.join: " ";
    say "";
    sleep 1;
}
```

[Simon Proctor](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-003/simon-proctor/perl6/ch-1.p6) used a `lazy gather/take` block and `push` statements to build the resulting list. His program finally sorts the output values and removes duplicates:

``` Perl6
sub MAIN(Int() $count) {
    my @h = lazy gather {
        my @items = (1);
        loop {
            my $val = @items.shift;
            take $val;
            @items.push($val*2,$val*3,$val*5);
            @items = @items.unique.sort( { $^a <=> $^b } );
        }
    };
    say @h[0..$count-1]
}
```

I initially wondered, though, why Simon does the chained `.unique.sort` method invocation within the loop rather than after having completed the loop, but there is a good reason for that: it is (quite obviously) not possible to sort a lazy list.

## SEE ALSO

Four blog posts on this subject:

* Arno Sommer: https://perl6.eu/regular-pascal.html;

* Francis J. Whittle: https://rage.powered.ninja/2019/04/12/hamming-it-up-in-perl-6-weekly.html;

* Mark Senn: https://engineering.purdue.edu/~mark/perl-weekly-challenge/003/t.pdf;

* Simon Proctor: http://www.khanate.co.uk/blog/2019/04/09/perl-weekly-week-3/.

## Wrapping up

Please let me know if I forgot any of the challengers or if you think my explanation of your code misses something important (send me an e-mail or just raise an issue against this GitHub page).
