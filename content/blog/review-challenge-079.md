
---
author:       Colin Crain
date:         2020-10-05T00:00:00
description:  "Colin Crain › Perl Weekly Review #079"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #079"
image:        images/blog/p5-review-challenge-079.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-078/).* )

Welcome to the Perl review for **Week 079** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

---

With the large upswing of submissions from new and returning members, the format continues to evolve week to week. Again I unfortunately will never have time to give each and every submission its proper due, and this week life has caught up with my time especially badly.

I'd rather go further in depth with fewer techniques than gloss over everything, which to me doesn't sound very helpful in the end. With that said, I will do my best not let it become a judged competition for who can be the cleverest, but rather try and get to the root of the solution space and try and select representative examples from across the board.  Ok, with perhaps a bit of randomness and whimsey guiding me as well. I will absolutely reserve that right.

Cleverness isn't everything, you know, and people have their own reasoning when they choose exactly how to realize their ideas. In a sense that is what the spirit of this page, and the Weekly Challenge itself, is all about. I'm quite open to suggestion on the subject, and of course if anyone wishes to opt out of being reviewed for whatever reason, by all means just let me know. And further, if any newcomers have specific questions on a submission or technique I will do my best to accommodate, just drop me a line. Really. It's cool.

---
Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due. And that's why I'm here, to try and figure out how to do that.

Let's have a look and see what we can find.

---

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-079/) or the summary [**recap**](/blog/recap-challenge-079/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC079TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC079BLOGS)    &nbsp;  &nbsp;  &nbsp;       •

---

# TASK #1 {#PWC079TASK1}
# Count Set Bits

You are given a positive number $N.
Write a script to count the total number of set bits of the binary representations of all numbers from 1 to $N and return $total_count_set_bit % 1000000007.

Example 1:
```
    Input: $N = 4
        Binary: 001
            Set Bit Counts: 1
        Binary: 010
            Set Bit Counts: 1
        Binary: 011
            Set Bit Counts: 2
        Binary: 100
            Set Bit Counts: 1
                Total set bit count: 1 + 1 + 2 + 1 = 5

    Output: 5
```

## about the solutions

There were 35 submissions for the task 1 challenge this last week. Perhaps because the problem has a long and storied history in computer science, once we got past simple tallying algorithms there were a large and varied sampling of solutions, using a number of techniques and algorithms that have been developed through the years. First we'll look at the less-complicated solutions, and then have a look into some of the more elaborate ones.

## convert to BINARY and COUNT the bits
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/arne-sommer/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/colin-crain/perl/ch-1.pl),
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/cristian-heredia/perl/ch-1.pl),
[**Daniel Mantovani**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/daniel-mantovani/perl/ch-1.pl),
[**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/dave-cross/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/dave-jacoby/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/jaldhar-h-vyas/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/laurent-rosenfeld/perl/ch-1.pl),
[**Leo Manfredi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/manfredi/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/lubos-kolouch/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/perlboy1967/perl/ch-1.pl),
[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/nunovieira220/perl/ch-1.pl),
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/steven-wilson/perl/ch-1.pl),
[**Ted Leahy**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/ted-leahy/perl/ch-1.pl),
[**Vinod Kumar K**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/vinod-k/perl/ch-1.pl),
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/walt-mankowski/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/wanderdoc/perl/ch-1.pl)

Well, yea. That would do it. Over the range from one to the target, convert that number to binary, count the bits and keep a running total. Most folks went about some version of this general plan, with variations arising on now exactly each step was taken.

To convert to binary, `sprintf "%b"` was the overwhelming favorite for bit-stringing afficianados, but of note we did find a few old-school holdouts who brought out the `unpack("B32", pack("N", $_))` formation from the *Perl Cookbook*. I'm not exactly sure *when* the `%b` format became available to sprintf, but I note that it's expressly noted on its *absence* in that venerable tomb<sup>1</sup>.

Moving forward, so now our number is in binary representation. Now what? This is where is where people started to get quite creative. Broadly, people chose either to *count* the 1s, generally with a regex, or *sum* the 1s, because, you know, they will just add up to the count.

---
<sup>1</sup> "We can’t solve either problem with sprintf (which doesn’t have a “print this in binary” format)"
    --Perl Cookbook, p81, *2.4. Converting Between Binary and Decimal*
___



### counting 1s as CHARACTERS

By repeatedly matching against the character "1", we can count the matches to find the quantity. A nice compact demonstration of this is provided by

[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/nunovieira220/perl/ch-1.pl)

```perl
for ((1..$N)) {
    my $bin = sprintf ("%b", $_);
    $counter += () = $bin =~ /1/g;
}
```

[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/lubos-kolouch/perl/ch-1.pl) gave us a very similar solution using `unpack` as well.

The final line of this construction incorporates what is known informally as the [Saturn operator](https://metacpan.org/pod/distribution/perlsecret/lib/perlsecret.pod#Goatse). Being not really a single operator per se, it provides a list context to the right and the scalar number of elements provided by that context the left, in this case incrementing a counter. The `/g` in list context will return a list of matches, and the rest follows.

One of the qualities of this particular match is that it's both simple and we don't care about capturing anything, only the fact that it matched at all. So the more popular version was not the `m//` operator but rather its cousin `tr///`. The translate operator, because it need not fire up the whole regex engine to do its magic, is considerably faster. Right out of the box it returns the number of translations made as well, so we no longer need to provide list context.

[**Ted Leahy**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/ted-leahy/perl/ch-1.pl)

shows off this form nicely:

```perl
foreach my $n (1..$N) {
    # Convert to binary
    my $binary_n = sprintf("%b", $n);
    # Count the number of set bits ('1's)
    my $set_bit_count = ($binary_n =~ tr/1//);

    $total_set_bit_count += $set_bit_count;
}
```

[**Daniel Mantovani**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/daniel-mantovani/perl/ch-1.pl)

wraps it up in a bow, with `$bigprime` as our 1,000,000,007 modulo.

```perl
for my $n (1 .. shift) {    # or $ARGV[0]
  $total_count_set_bit += sprintf("%b", $n) =~ tr/1//;
  $total_count_set_bit %= $big_prime;
}
```

[**Anton Fedotov**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/anton-fedotov/perl/ch-1.pl),
[**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/dave-cross/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/jaldhar-h-vyas/perl/ch-1.pl),
[**Leo Manfredi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/manfredi/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/mohammad-anwar/perl/ch-1.pl),
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/walt-mankowski/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/wanderdoc/perl/ch-1.pl)
went about things in this manner too. I did say it was popular way to go.


### add up the NUMBERS

Alternately, if we consider the 1s (and perhaps the 0s, too) as integers rather than characters, we can add them up to get a count. This involved breaking the string into an array and summing the elements.

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/cheok-yin-fung/perl/ch-1.pl)

demonstrates this for us in succinct, compact form:

```perl
for (1..$N) {
    $ans += sum split //, (sprintf "%0b", $_);
}
```

[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/cristian-heredia/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/dave-jacoby/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/laurent-rosenfeld/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/perlboy1967/perl/ch-1.pl),
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/steven-wilson/perl/ch-1.pl), and
[**Vinod Kumar K**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/vinod-k/perl/ch-1.pl)
also gave us split arrays, implementing this function combination in pretty much the same manner. In very simple forms there isn't much room for variation.

### conditionally parse SUBSTRINGS

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/colin-crain/perl/ch-1.pl)

There was one more way that didn't really fit either of these categories very well, and that is my own. At first I came up with a quick solution splitting and summing as above, but had a chance to revisit it later. On reflection I determined that making intermediate arrays in a loop really spent a lot of effort recopying data just to do some arithmetic before tossing it away again. For smaller numbers this was a negligible effect but for larger sums, repeated over and over, it really began to add up. So instead of recopying I decided to use `substr` to directly iterate over the binary strings in place, incrementing a count on a conditional. This ended up speeding things up considerably.

```perl
for my $i (1..$input) {
    my $bin = sprintf "%b", $i;
    my $j = length $bin;
    while (--$j >= 0 ) {
        substr( $bin, $j, 1 ) and $tot++;
    }
}
```



## popcount(), or, USE A MODULE
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/roger-bell-west/perl/ch-1.pl) and
[**Shawn Wagner**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/shawn-wagner/perl/ch-1.pl)

Since the days of Big iron, there has been the need to count the 1s in a bit vector, to the degree that originally extra hardware could be added to implement an instruction called `popcount`, for "population count". Software has replaced hardware in the ensuing decades, but the instruction remains and is now part of many math libraries. Since that speaks exactly to the core of what we're asking for today, several members of the team have brought us solutions based on this function.

[**Shawn Wagner**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/shawn-wagner/perl/ch-1.pl)
uses a module called [`Bit::Fast`](https://metacpan.org/pod/Bit::Fast), which promises a very fast implementation:

```perl
require Bit::Fast;
Bit::Fast->import(qw/popcount/);

for my $n (1 .. $_[0]) {
    my $bits = popcount $n;
    $total += $bits;
}
```

Shawn nicely codes his require to use Bit::fast should it be available, or if not to default to a routine using `unpack` and `tr///`.

In an alternative to `Bit::Fast`,

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/roger-bell-west/perl/ch-1.pl)

draws of the the awesome power of the The GNU Multiple Precision Arithmetic Library, via `Math::GMPz`, a wrapper for its integer functions.

```perl
sub csb {
    my $tot = shift;
    my $n = Math::GMPz->new( 1 );
    my $bits = Math::GMPz->new( 0 );
    my $m = Math::GMPz->new( 1000000007 );
    while ( $n <= $tot ) {
        Rmpz_add_ui( $bits, $bits, Rmpz_popcount( Math::GMPz->new( $n ) ) );
        Rmpz_mod( $bits, $bits, $m );
        Rmpz_add_ui( $n, $n, 1 );
    }
    return Rmpz_get_str( $bits, 10 );
}
```

A third version was brought out by

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/pete-houston/perl/ch-1.pl)

who used `Bit::Manip`, which provides a 'bit_count' function that, well, counts bits. Giving this function an optional second argument counts 1s, which is what we want, right?

Anyway, here you go:

```perl
$tot += bit_count ($target, 1) for (1 .. $n);
```

As I said, does what we want.

## sundry BINARY operations

With the popularity of the population count operator over the years there have been scores of algorithms developed to implement the concept in varying forms, mostly built on, as might be expected, bitwise operations and powers of two.

To start us off, a bitwise AND with 1 will reveal the contents of the Least Significant Bit (LSB). Repeatedly tallying this value while bitshifting right allows us to examine each individual bit individually, as shown here by

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/adam-russell/perl/ch-1.pl)

```perl
sub count_bits{
    my($n) = @_;
    my $total_count_set_bit = 0;
    for my $x (1 .. $n){
        while($x){
            my $b = $x & 1;
            $total_count_set_bit++ if $b;
            $x = $x >> 1;
        }
    }
    return $total_count_set_bit;
}
```

### Brian Kernighan’s Algorithm
https://www.techiedelight.com/brian-kernighans-algorithm-count-set-bits-integer/

Brian Kernighan improved the naive algorithm by noting that for any given binary number with the least significant bits ending in (...1000...), after subtracting 1 from the number the tail will become (...0111...). The set bits of these two sections are mutually exclusive, so by applying a bitwise AND to these numbers, the result is to "turn off" the single LSB set, one bit per iteration. With the bit turned off, the tail becomes a contiuous string of 0s again, and the the process is repeated until there are no more set bits and the result is 0. The number of iterations, then, becomes the number of bits set in the original number, and this count is the result.

Here's

[**Bob Lied's**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/bob-lied/perl/ch-1.pl)
implimentation in his [CountSetBit.pm](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/bob-lied/perl/lib/CountSetBit.pm) module

```perl
sub _bitsOf($self, $n)a
{
    my $count = 0;

    while ( $n > 0 )
    {
        $count++;
        $n = $n & ($n-1);
    }
    return $count;
}
```

## OEIS A000778

Taken together, the results for summing the set bits over the span from 0 to the given number can be viewed as an integer sequence, and a good place to look for any and all things having to do with integer sequences is the OEIS, the Online Encyclopedia of Integer Sequences.

After computing a few values, we can search for the sequence and a small effort produces OEIS A000788 "Total number of 1's in binary expansions of 0, ..., n. "

These pages serve as a physical, now virtual compendium of information and results surrounding hundreds of thousands of catalogued sequences, and this is no exception, providing many examples of formulae mathematicians have come up with through the years to define its values. A few members adapted some of those listed; here is a sampling of the implementations.

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/abigail/perl/ch-1.pl)

Abigail writes:

"This is A000778 (https://oeis.org/A000788). There's a recursive formala
for the number of bits in the binary representation of 0 .. $N:""

>   bits (0) = 0
>   bits (2 * N)     =     bits (N) + bits (N - 1) + N
>   bits (2 * N + 1) = 2 * bits (N)                + N + 1

And here's her implementation of it:

```perl
sub bits ($n) {
    state $bits;
    $$bits {$n} ||=
        $n == 0 ? 0
      : do {
            my $half = int ($n / 2);
            bits ($half) + $half + ($n % 2 ? bits ($half) + 1
                                           : bits ($half - 1))
      }
}
```

Nice.

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/athanasius/perl/ch-1.pl)
David W. Wilson, "Fast C++ function for computing a(n)",
https://oeis.org/A000788/a000788.txt

```cpp
unsigned A000788(unsigned n)
{
    unsigned v = 0;
    for (unsigned bit = 1; bit <= n; bit <<= 1)
       v += ((n>>1)&~(bit-1)) + ((n&bit) ? (n&((bit<<1)-1))-(bit-1) : 0);
    return v;
}
```

```perl
for (my $bit = 1; $bit <= $N; $bit <<= 1)
{
    $total_count_set_bit += ($N >> 1) & ~($bit - 1);

    $total_count_set_bit += ($N & (($bit << 1) - 1)) - ($bit - 1)
        if $N & $bit;
}
```


## other SUNDRY ways of SUMMING, based on POWERS of TWO

There were a number of other solutions submitted that hinged in general around dividing the number up into more easily digested components, then acting upon those.

[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/alexander-pankoff/perl/ch-1.pl)

gives us successive powers of 2 using bitshifts to partition his elements

```perl
while ( (1 << $i) <= $n ) {
    my $set          = 0;
    my $change_after = 1 << $i;
    for ( 0 .. $n ) {
        $count += $set;
        if ( $change_after == 1 ) {
            $set          = !$set;
            $change_after = 1 << $i;
        }
        else {
            $change_after--;
        }
    }
    $i++;
}
return $count;
```


[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/e-choroba/perl/ch-1.pl)

calculates the nearest power of two using logarithms, then partitions and recursive acts on the remainder component.

```perl
sub count_set_bits {
    my ($n) = @_;
    my ($nearest_power2) = int(log($n) / log(2));
    my $s = ($nearest_power2 * 2 ** ($nearest_power2 - 1) + 1);
    my $rest = $n - 2 ** $nearest_power2;
    $s += $rest + count_set_bits($rest) if $rest > 0;
    return int($s % 1000000007)
}
```


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/polettix/perl/ch-1.pl)

Flavio explains his methodology in his [blog](https://github.polettix.it/ETOOBUSY/2020/09/22/pwc079-count-set-bits/), which is quite artful.


```perl
sub count_bits ($n, $m = 1000000007) {
   my $mask     = 1;
   my $mask_bit = 0;
   while (($n & ~$mask) > $mask) { # scan for highest set bit
      $mask <<= 1;
      $mask_bit++;
   }
   my $n_bits = 0;
   while ($n) {
      while (($n & $mask) == 0) {    # scan for next high bit
         $mask_bit--;
         $mask >>= 1;
      }
      $n &= ~$mask;    # this makes $n less than half of itself
      $n_bits = ($n_bits + 1 + $n + $mask_bit * ($mask >> 1) % $m) % $m;
   } ## end while ($n)
   return $n_bits;
} ## end sub count_bits
```



[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/james-smith/perl/ch-1.pl)

James give a very detailed explanation for his method in his comments. Always welcome and appreciated.

```perl
sub count_set_bits {
  my $i = shift;
  my @q = split m{}, sprintf '%b', $i+1;
  my $t = my $s = 0;
  while (@q) {
    next unless shift @q;
    $t += ($s + @q/2)*(1<<@q);
    $t %= 1000000007;
    $s++;
  }
  return $t;
}
```


[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/jo-37/perl/ch-1.pl)

Jorg breaks his number into 2<sup>n</sup> chunks and recursively tracks the remainder downward using a well-annotated divide and conquer Algorithm

```perl
sub bitsum {
    my $n = shift;

    # Break recursion.
    return 0 unless $n;

    # Get the largest number of the form 2^k - 1 that is (strictly) less
    # than n.
    my $allone = 2**(($n + 0)->blog(2)) - 1;

    # Get the offset from the above number to n.
    my $offset = $n - $allone;

    # Split the numbers from 0 to n into two parts:
    # - a maximum power-of-two block having zero as the highest bit.
    #   Recursing into this part to get the bit sum.
    # - a remaining block having one as the highest bit.  These leading
    #   bits are added to the bit sum.  The bit-sum of the second part
    #   with the leading bit set to zero is calculated by recursion.
    # When splitting a full power-of-two part, both sub-parts to be
    # recursed into are the same.  This leads to a shortcut for at least
    # half of the calculations.
    $offset + ($allone == $offset - 1 ?
        2 * bitsum($allone) :
        bitsum($allone) + bitsum($offset - 1));
}
```


[**Julio de Castro**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/juliodcs/perl/ch-1.pl)

Julio gives us a recursive implementation of his algorithm using tail-call optimization.

```perl
# Given a number, it calculates the flips of the most-significant-bit number
# e.g., ms-flips of 13 (1101) returns the number of flips for number 8 (1000)
sub ms_flips($number) {
    return 1 if $number == 1;
    1 + ( length_bin($number) - 1 ) * 2**( length_bin($number) - 2 );
}

# Remove most significat bit and return number
sub next_number($number) {
    $number - 2**( length_bin($number) - 1 );
}

sub calculate ( $number, $total = 0 ) {
    return $total % MODULE if $number == 0;

    # All bits besides the first need extra flips
    # extra flips are equal to the number itself
    my $extra = $total == 0 ? 0 : $number;

    # Use tail call optimization
    @_ = ( next_number($number), $total + ms_flips($number) + $extra );
    goto &calculate;
}
```

[**Myoungjin Jeon**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/jeongoon/perl/ch-1.pl)

Another recursive algorithm from Jeon.

```perl
sub countSetBits ($) {
    $_[0] <= 2 and return $_[0];
    my $N = shift;

    my $N1 = $N;

    my ( $sum, $pow );
    ++$pow while ( $N1 >>= 1 );

    $N1 = $N - (1<<$pow);

    $sum += sumUptoPow2 $pow;
    $N1 == 0 ? $sum : ( $sum
                       + $N1 # the number ( 1..$N1 ) always has one set bit
                       + countSetBits($N1)    # count without first set bit
                     );
    # go recursive until meets 0<= N <= 2
}
```

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/sgreen/perl/ch-1.pl)

Simon uses a power of two multiplier to examine successive bit positions, summing the contents for each position over the range.

```perl
sub main {
    my $N     = shift;
    my $count = 0;

    # Sanity check
    die "Please enter a positive integer\n" unless $N;
    die "The value '$N' is not a positive integer\n"
      unless $N =~ /^[1-9][0-9]*$/;

    my $b = 1;
    while ( $b < $N ) {
        foreach my $i ( 1 .. $N ) {
            $count++ if $i & $b;
        }
        $b *= 2;
    }

    printf qq(%d %% %d = %d\n), $count, 1000000007, $count % 1000000007;
}
```

<br>

# BLOGS {#PWC080BLOGS}

***

**That’s it for me this week, people! Unbroken by the torrential influx, I have maintained my bearings. Looking forward to next wave! I am, your humble servant.**

## But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC079BLOGS}
## then *RUN* *(dont walk!)* to the *WATERING HOLE*
## and *READ* these *BLOG* *LINKS*:

***( don't think, trust your training, you're in the zone, just do it ... )***


**Adam Russell**

 * [Perl Weekly Challenge 079 - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2020/09/27#pwc079) ( *Perl* )

**Arne Sommer**

 * [Counting Water with Raku and Perl](https://raku-musings.com/counting-water.html) ( *Perl & Raku* )

**Colin Crain**

 * [Count, Set, Match: Standing Water in Mountain Pools &#8211; Programming Excursions in Perl and Raku](https://colincrain.wordpress.com/2020/09/26/count-set-match-standing-water-in-mountain-pools/) ( *Perl & Raku* )

**Daniel Mantovani**

 * [Perl Weekly Challenge #79, Task #1](https://dev.to/dmanto/perl-weekly-challenge-3269) ( *Perl* )
 * [Perl Weekly Challenge #79, Task #2](https://dev.to/dmanto/perl-weekly-challenge-79-task-2-4n1c) ( *Perl* )

**Flavio Poletti**

 * [PWC079 - Count Set Bits - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2020/09/22/pwc079-count-set-bits/) ( *Perl* )
 * [PWC079 - Trapped Rain Water - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2020/09/23/pwc079-trapped-rain-water/) ( *Perl* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 79](https://www.braincells.com/perl/2020/09/perl_weekly_challenge_week_79.html) ( *Perl & Raku* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 79: Count Set Bits and Trapped Rain Water](http://blogs.perl.org/users/laurent_r/2020/09/perl-weekly-challenge-79-count-set-bits-and-trapped-rain-water.html) ( *Perl & Raku* )

**Mohammad S Anwar**

 * [BLOG: The Weekly Challenge #079](https://perlweeklychallenge.org/blog/weekly-challenge-079/) ( *Perl & Raku* )

**Myoungjin Jeon**

 * [The (Perl) Weekly Challenge - 079](https://dev.to/jeongoon/the-perl-weekly-challenge-079-9ij) ( *Perl & Raku* )

**Roger Bell_West**

 * [RogerBW&#39;s Blog: Perl Weekly Challenge 79: cumulative bit count and water capacity](https://blog.firedrake.org/archive/2020/09/Perl_Weekly_Challenge_79__cumulative_bit_count_and_water_capacity.html) ( *Perl & Raku* )

**Simon Green**

 * [The Weekly Challenge 079](https://dev.to/simongreennet/the-weekly-challenge-079-1jel) ( *Perl* )

**Steven Wilson**

 * [Perl Weekly Challenge Week 079 - Trapped Rain Water](https://tilde.town/~wlsn/pwc079.html) ( *Perl* )

**Walt Mankowski**

 * [Perl Weekly Challenge #79 - Walt Mankowski](http://www.mawode.com/blog/blog/2020/09/26/perl-weekly-challenge-79/) ( *Perl* )
