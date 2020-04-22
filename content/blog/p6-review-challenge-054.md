---
title: "Laurent Rosenfeld Weekly Review: Challenge - 054"
date: 2020-04-22T00:00:00+00:00
description: "Laurent Rosenfeld Weekly Review: Challenge - #054."
type: post
image: images/blog/p6-review-challenge-054.jpg
author: Laurent Rosenfeld
tags: ["Raku"]
---
***
# Raku Solutions Weekly Review
***

## Task #2: The Collatz Conjecture

This is derived in part from my [initial blog post](http://blogs.perl.org/users/laurent_r/2020/04/perl-weekly-challenge-54-k-th-permutation-sequence-and-the-collatz-conjecture.html)and [follow-up blog post revisiting the subject](http://blogs.perl.org/users/laurent_r/2020/04/revisiting-the-collatz-sequence-pwc-54.html)  made in answer to the [Week 54 of the Perl Weekly Challenge](https://perlweeklychallenge.org/blog/perl-weekly-challenge-054/) organized by  <a href="http://blogs.perl.org/users/mohammad_s_anwar/">Mohammad S. Anwar</a> as well as answers made by others to the same challenge.

The challenge reads as follows:

*It is thought that the following sequence will always reach 1:*

    $n = $n / 2 when $n is even
    $n = 3*$n + 1 when $n is odd

*For example, if we start at 23, we get the following sequence:*

    23 → 70 → 35 → 106 → 53 → 160 → 80 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

*Write a function that finds the Collatz sequence for any positive integer. Notice how the sequence itself may go far above the original starting number.*

*Extra Credit: have your script calculate the sequence length for all starting numbers up to 1000000 (1e6), and output the starting number and sequence length for the longest 20 sequences.*

The Collatz conjecture related to a sequence of numbers defined as follows: start with any positive integer *n*. Then each term is obtained from the previous term as follows: if the previous term is even, the next term is one half of the previous term. If the previous term is odd, the next term is 3 times the previous term plus 1. The conjecture is that, no matter what value of *n*, the sequence will always reach 1. This conjecture is named after Lothar Collatz who introduced it in 1937. It is sometimes known as the Syracuse problem (and some other names). It is usually believed to be true (and no counter-example has ever been found), but, despite a lot of efforts, nobody has been able to prove it, and this is deemed to be a very difficult problem.

## My Solutions

### The Basic Task

For the purpose of the basic task, this is fairly straight forward. Here, we write a `collatz-seq` subroutine that, given an integer computes the next term in the Collatz sequence. And we call that subroutine in a loop until we reach 1:

``` Perl6
use v6;

sub collatz-seq (UInt $in) {
    my $n = $in;
    my @result = gather {
        while $n != 1 {
            my $new-n = $n % 2 ?? 3 * $n + 1 !! $n / 2;
            take $new-n;
            $n = $new-n;
        }
    }
    return $in, |@result;
}
sub MAIN (UInt $in) {
    my @seq = collatz-seq $in;
    print "Collatz sequence for $in: ", @seq, "\n";
}
```

Here are a few sample runs:

    $ perl6  collatz_1.p6 8
    Collatz sequence for 8: 8 4 2 1

    $ perl6  collatz_1.p6 23
    Collatz sequence for 23: 23 70 35 106 53 160 80 40 20 10 5 16 8 4 2 1

    $ perl6  collatz_1.p6 25
    Collatz sequence for 25: 25 76 38 19 58 29 88 44 22 11 34 17 52 26 13 40 20 10 5 16 8 4 2 1

Note that I used the `print` function rather than the `say` function here, because `say` would abbreviate long sequences (for example, the sequence for 27 would end with an ellipsis: `...`).

### Extra Credit: Collatz Sequence for all Numbers up to 1,000,000

In theory, it wouldn't be very complicated to encapsulate the above program into an outer loop to compute the Collatz sequence for any range of numbers. Except that going all the way up to 1,000,000 is probably going to take ages. One of the reason is that we're going to recompute Collatz sequence successors for the same number again and again many times. If you look at the above examples, the sequences all end up with the following sequence: `16 8 4 2 1`. So, it might be useful, when we reach 16 for the first time, to compute the end of the sequence only once, and to store it in a hash of arrays (or possibly an array of arrays), in order to retrieve it straight from the hash when we reach 16 once more. Similarly, the sequence for 25 end with `40 20 10 5 16 8 4 2 1`. If we store this sequence somewhere, then we don't have to compute it once more when we reach 40 while computing the Collatz sequence for 27, and, or course, also when we compute the Collatz sequence for 40, 80, 160, as well as 13, 26, 52, etc. Such a strategy is called *caching* or *memoizing*: storing in memory the result of a computation that we're likely to have to compute again. It is sometimes described as "trading memory for time."

There is a Perl core module, called [Memoize](https://perldoc.perl.org/Memoize.html), written my Mark Jason Dominus, that is very easy to use and can do the caching automatically for you. This module has been [ported to Raku](https://modules.raku.org/dist/Memoize:cpan:ELIZABETH). There is also the Raku [:cached](https://docs.raku.org/syntax/cached) experimental feature and the [is cached](https://docs.raku.org/routine/is%20cached) trait The problem though is that it wouldn't be very practical to use it here, because we don't want to cache just the next item in the sequence, but all the rest of the sequence down to 1. So it might be better to implement a cache ourselves, manually (that's not very difficult, as we shall see).

There is another problem though, which is much more delicate. Since the requirement is to compute the Collatz sequence for all integers up to 1,000,000, the cache will grow very large (several millions of sequences) and we might run out of memory. In the initial version of the program below, I tried to store all sequences up to one million, and the program turned out to be painfully slow. Looking at the system statistics, I found that, after a while, available memory became exhausted and the system would swap memory on the disk, leading to very slow execution. I made a couple of tests, and found that I could store the sequences for all numbers up to about 200,000 without exceeding the available memory of my computer (YMMV, that number might be different on your computer), thus preventing the process from swapping and getting more or less the best possible performance, hence the `MAX` constant set to 300,000.

Since I knew from earlier tests that the 20 longest sequences would all have more than 400 items, I also hard-coded a lower limit of 400 items for the sequences whose length had to be recorded. Another possibly better solution might have been to maintain a sliding array of the top 20 sequences, but I feared that maintaining this array many times over the execution of the program would end up impacting performance negatively. Note that a better way would be to use an array of arrays in which the top level array indices are the sequence lengths and the nested arrays contain the numbers for which the Collatz sequence has this count. The final work is then simply to iterate over the reversed top array and pick up sequences until we have 20. Pretty easy. But I thought about that solution only after I made most of the tests below, so the code examples presented here will use the had-coded lower limit explained above.

``` Perl6
use v6;

my %cache = 2 => [2, 1];

sub collatz_seq (UInt $in) {
    my @result;
    my $n = $in;
    while $n != 1 {
        if %cache{$n} :exists {
            push @result, |@(%cache{$n});
            last;
        } else {
            my $new_n = $n % 2 ?? 3 * $n + 1 !! $n / 2;
            push @result, $new_n;
            %cache{$n} = [$new_n, |%cache{$new_n}]
                if defined (%cache{$new_n}) and $new_n <= 200000;
            $n = $new_n.Int;
        }
    }
    %cache{$in} = @result if $in <= 200000;
    return @result;
}

my @long_seqs;
for 1..1000000 -> $num {
    my $seq = collatz_seq $num;
    push @long_seqs, [ $num, $seq.elems] if $seq.elems > 400;
}
@long_seqs = sort { $^b[1] <=> $^a[1]}, @long_seqs;
say  "$_[0]: $_[1]" for @long_seqs[0..19];
```

This program displays the following output:

    $ perl6 collatz.p6
    837799: 525
    626331: 509
    939497: 507
    704623: 504
    910107: 476
    927003: 476
    511935: 470
    767903: 468
    796095: 468
    970599: 458
    546681: 452
    818943: 450
    820022: 450
    820023: 450
    410011: 449
    615017: 447
    886953: 445
    906175: 445
    922524: 445
    922525: 445

This program ran in more than 9 minutes. The equivalent Perl program ran in about  1 minute and 7.5 sec. So Raku is still significantly slower than Perl (at least for such CPU intensive computations). But we can improve it.

### Extra Credit Revisited

#### Changing the Caching Strategy: Caching Sequence Lengths

A couple of days after I submitted my challenge solution and published my original [blog post](http://blogs.perl.org/users/laurent_r/2020/04/perl-weekly-challenge-54-k-th-permutation-sequence-and-the-collatz-conjecture.html), it occurred to me that my program was doing far too much work: we're only requested to display the 20 numbers having the largest Collatz sequence. We could just memoize the length of each sequence, but we do not need to store the sequence itself. By doing that, we spare a lot of memory and can cache the result for many more numbers without exhausting the memory, and we also reduce significantly the overall overhead. In the program below we store the sequence lengths for numbers up to 2,000,000 (instead of 200,000 in the program above).

``` Perl6
use v6;

my %cache = 2 => 2;

sub collatz-seq (UInt $in) {
    my $length = 0;
    my $n = $in;
    while $n != 1 {
        if %cache{$n} :exists {
            $length += %cache{$n};
            last;
        } else {
            my $new_n = $n % 2 ?? 3 * $n + 1 !! $n / 2;
            $length++;
            %cache{$n} = %cache{$new_n} + 1
            	if defined (%cache{$new_n}) and $new_n <= 2000000;
            $n = $new_n.Int;
        }
    }
    %cache{$in} = $length if $in <= 2000000;
    return $length;
}

my @long-seqs;
for 1..1000000 -> $num {
    my $seq-length = collatz-seq $num;
    push @long-seqs, [ $num, $seq-length] if $seq-length > 400;
}
@long-seqs = sort { $^b[1] <=> $^a[1]}, @long-seqs;
say  "$_[0]: $_[1]" for @long-seqs[0..19];
```

This new program displays the same output as the previous one, but runs about six times faster:

    $ time perl6 collatz2.p6
    837799: 525
    626331: 509
    939497: 507
    [Lines omitted for brevity]
    906175: 445
    922524: 445
    922525: 445

    real    1m31,660s
    user    0m0,000s
    sys     0m0,062s

#### Caching in an Array

In our program above, the cache ends up with essentially one entry per input number in the 1..1_000_000 range (plus a relatively large quantity of numbers in the `1e6..2e6` range). So,  perhaps it might be better to use an array, rather than a hash, for the cache (accessing an array item should be significantly faster than a hash lookup, and our previous program does really a lot of these lookups).

This is the code for this new implementation:

``` Perl6
use v6;

my @cache = 0, 1, 2;

sub collatz-seq (UInt $in) {
    my $length = 0;
    my $n = $in;
    while $n != 1 {
        if defined @cache[$n] {
            $length += @cache[$n];
            last;
        } else {
            my $new_n = $n % 2 ?? 3 * $n + 1 !! $n / 2;
            $length++;
            @cache[$n] = @cache[$new_n] + 1
                if defined @cache[$new_n] and $new_n <= 2000000;
            $n = $new_n.Int;
        }
    }
    @cache[$in] = $length;
    return $length;
}

my @long-seqs;
for 2..1000000 -> $num {
    my $seq-length = collatz-seq $num;
    push @long-seqs, [ $num, $seq-length] if $seq-length > 200;
}
@long-seqs = sort { $^b[1] <=> $^a[1]}, @long-seqs;
say  "$_[0]: $_[1]" for @long-seqs[0..19];
```

This new program runs about twice faster than the previous one (and 12 times faster than the original one):

    $ time ./perl6 collatz3.p6
    837799: 525
    626331: 509
    [Lines omitted for brevity]
    922524: 445
    922525: 445

    real    0m45,218s
    user    0m0,000s
    sys     0m0,093s

#### Further Optimizations

It turns out that unsigned integers (`UInt`) are slower than regular integers (`Int`). Changing the `collatz-seq` signature to:

``` Perl6
sub collatz-seq (Int $in) {
```

improves the duration by about 14%:

    real    0m38,944s
    user    0m0,015s
    sys     0m0,061s

Using a native `int` makes the program only very slightly, but not significantly, faster:

    real    0m38,580s
    user    0m0,000s
    sys     0m0,062s

On April 5, 2020 (one day after my original blog post), [1nick](https://www.perlmonks.org/?node_id=1130276) published a very interesting [message](https://www.perlmonks.org/?node_id=11115088) on the Perl Monks forum in which he presented another strategy for the Perl version of my program: parallelizing the process using [MCE::Map](https://metacpan.org/pod/MCE%3A%3AMap) Each worker is handed only the beginning and end of the chunk of the sequence it will process, and workers communicate amongst themselves to keep track of the overall task. With this change (and no caching), this program ran 5 times faster, on a 12-core machine (the full program is presented in Nick's post). Following that initial post, an extremely interesting discussion emerged between Nick and several other Perl Monks.  I really cannot summarize this discussion here, just follow the link if you're interested (it's really worth the effort). In the context of this discussion, another Perl monk, [Mario Roy](https://www.perlmonks.org/?node_id=1005295), the person who wrote the [MCE::Map](https://metacpan.org/pod/MCE%3A%3AMap) used by Nick and a number of other very useful Perl modules for parallel processing, suggested three further optimizations to the Perl version of the program:

*1. Replaced division by 2.*

``` Perl
    $n >> 1;
```

*2. Removed one level of branching.*

``` Perl
    while ($n != 1) {
        $result += $cache[$n], last
            if defined $cache[$n];

        my $new_n = $n % 2 ? 3 * $n + 1 : $n >> 1;
        $result++;
        $cache[$n] = $cache[$new_n] + 1
            if defined $cache[$new_n] and $n < $max;

        $n = $new_n;
    }
```

*3. Lastly, reduced the number of loop iterations.*

``` Perl
    while ($n != 1) {
        $result += $cache[$n], last
            if defined $cache[$n];

        $n % 2 ? ( $result += 2, $new_n = (3 * $n + 1) >> 1 )
               : ( $result += 1, $new_n = $n >> 1 );

        $cache[$n] = $cache[$new_n] + ($n % 2 ? 2 : 1)
            if defined $cache[$new_n] and $n < $max;
        $n = $new_n;
    }
```

Let's try to port these optimizations to our Raku program one by one.

Using the bit shift operator:

``` Perl 6
my $new_n = $n % 2 ?? 3 * $n + 1 !! $n +> 1;
```

provides a significant performance boost (33%):

    real    0m25,800s
    user    0m0,015s
    sys     0m0,030s

This really surprised me. I had stopped doing this type of low-level optimizations several decades ago, when I figured that the C compiler I was using at the time was doing this type of optimization at least as well and often better than I was able to do. Quite obviously, it is worth the effort in Raku.

The next optimization in Mario's list is to remove one level of branching:

``` Perl 6
    while $n != 1 {
        $length += @cache[$n], last if defined @cache[$n];
        my $new_n = $n % 2 ?? 3 * $n + 1 !! $n +> 1;
        $length++;
        @cache[$n] = @cache[$new_n] + 1
            if defined @cache[$new_n] and $new_n <= 2000000;
        $n = $new_n.Int;
    }
```

but that did not bring any performance improvement in my tests with Raku. So, let's forget it.

Another performance optimization is that caching `$n` within the `while` loop actually hampers performance. This originally surprised both Mario and myself.  I guess that this is presumably because the cache hit/miss ratio in this part of the code is probably quite low. Let's comment out that statement. So, with this new `while` loop:

``` Perl6
    while $n != 1 {
        if defined @cache[$n] {
            $length += @cache[$n];
            last;
        } else {
            my $new_n = $n % 2 ?? 3 * $n + 1 !! ($n +> 1);
            $length++;
            # @cache[$n] = @cache[$new_n] + 1
            # 	 if defined @cache[$new_n] and $new_n <= 2000000;
            $n = $new_n.Int;
        }
    }
```

we shave off five additional seconds (20%):

    real    0m20,822s
    user    0m0,000s
    sys     0m0,062s

 If we remove the two lines commented out above, then we can simplify a bit the code, because we no longer need the temporary `$new_n` variable. But since that's just a code simplification, not a performance improvement, we'll show that change in the context of the next step.

 The next optimization in Mario's list is to reduce the number of loop iterations: when a number is odd, we apply the formula `(3 * $n + 1)` (leading necessarily to an even number) and perform the division by 2 immediately (and add 2 to `$length`). We also remove the conversion of $new_n to an integer, as this was useful in some early version of the program (only to prevent a type mismatch), but is no longer needed. The full program now looks as follows:

``` Perl6
use v6;

my @cache = 0, 1, 2;

sub collatz-seq (int $in) {
    my $length = 0;
    my $n = $in;
    while $n != 1 {
        if defined @cache[$n] {
            $length += @cache[$n];
            last;
        } else {
            if $n % 2 {
                $n = (3 * $n + 1) +> 1;
                $length += 2;
            } else {
                $n = $n +> 1;
                $length++;
            }
        }
    }
    @cache[$in] = $length;
    return $length;
}

my @long-seqs;
for 2..1000000 -> $num {
    my $seq-length = collatz-seq $num;
    push @long-seqs, [ $num, $seq-length] if $seq-length > 200;
}
@long-seqs = sort { $^b[1] <=> $^a[1]}, @long-seqs;
say  "$_[0]: $_[1]" for @long-seqs[0..19];
```

The duration of the execution is reduced by another 6 seconds (about 30%):

    $ time perl6 collatz4.p6
    837799: 525
    626331: 509
    [Lines omitted for brevity]
    922524: 445
    922525: 445

    real    0m14,470s
    user    0m0,015s
    sys     0m0,046s

Taken together, these "micro-optimizations" reduce the execution duration from 45.2 seconds to 14.5 seconds, i.e. 3 times less time. They're well worth the effort, after all.

Since the use of the bit shift operator for the division by 2 offered some significant improvement, I tried to introduce it for the divisibility by 2 test:

``` Perl 6
            if $n +& 1 {
                $n = (3 * $n + 1) +> 1;
                $length += 2;
            } else { # ...
```
This brought some additional improvement, but only to a very limited extent (5%):

    real    0m13,805s
    user    0m0,000s
    sys     0m0,077s

I doubt it is worth the effort, as it makes the code less easy to understand to most people (notably myself: I use those operators so rarely in Perl or in Raku, that I have to look them up in the documentation whenever I see them).

Since, we know that the smallest of our top-ten sequence lengths is 445, we can store in `@long-seqs` only the sequence lengths larger than 400 (instead of 200 in our code above):

``` Perl 6
    push @long-seqs, [ $num, $seq-length] if $seq-length > 400;
```

The result seems quite impressive, as we shave off another 5,67 seconds:

    real    0m8,810s
    user    0m0,000s
    sys     0m0,062s

This looks like an additional 39% improvement, but it is misleading and not really meaningful to express this improvement as a percentage, because we are optimizing here another part of the program, i.e. the final section sorting the results to find the 20 longest sequences, which we hadn't tried to optimize before. If we had done that change in the version of our earlier program presented in the *Caching in an Array* section above, which lasted 45 seconds, we would also have won 5 to 6 seconds, and our gain would have been only about 10 or 11% of the overall duration. The gain due to this change becomes significant here only because we have so much optimized the other section of the program (the part computing the Collatz sequences) that this final section of the program now accounts for a significant part of the overall duration, where as it was somewhat marginal before.

The next step might be to take advantage of Raku's rich parallel processing capabilities, but I haven't looked at them seriously for at least 4 years and it would take me too long to get back into them and quickly make something really efficient here. Well, to tell the truth, I have quickly tried to use the `race` and `hyper` methods, just as an experiment, the computation result was correct (which almost and pleasantly surprised me), but the program ran 30% slower. I intend to investigate further, but at a later point, not in the context of this blog post.

Anyway, it is clear to me that, in this case, a good caching strategy brings a better performance improvement than parallel processing will ever be able to do on my poor four-core computer. But the best of course would be both. So what would be needed for parallel processing to bring further improvement is something that combines efficiently caching and multi-threading. It may not be very easy (sharing a cache between threads looks a bit complicated), but my gut feeling is that it can probably be done. Mario Roy was able to do it in Perl using the [File::Map module](https://metacpan.org/pod/File::Map) that makes it possible to share the cache between the threads, as explained in my [follow-up post](http://blogs.perl.org/users/laurent_r/2020/04/revisiting-the-collatz-sequence-pwc-54.html) about the Collatz sequence in Perl. As I just said, I'll try to look into that, but that may well take some weeks.

## Alternative Solutions

[Arne Sommer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/arne-sommer/raku/ch-2.p6) used the `gather...take` construct to solve the basic task.

``` Perl 6
unit sub MAIN (Int $start where $start >= 1);

my $sequence := gather
{
  take $start;
  my $prev = $start;

  loop
  {
    last if $prev == 1;
    my $new = $prev %% 2 ?? $prev / 2 !! 3 * $prev + 1;
    $prev = $new;
    take $new;
  }
}

say $sequence.join(", ");
```

Arne also provided a solution for the "extra credit" case:

``` Perl 6
unit sub MAIN (Int $limit = 1_000_000, :$verbose, :$chop = 20);

my %length;
for 1 .. $limit
{
  my @list =  collatz($_);
  %length{@list.elems}.push($_);
  say "_ $_ -> @list[]" if $verbose;
}
my $count = 0;
my $elems;
for %length.keys.sort({ $^b <=> $^a }) -> $l
{
  $elems = %length{$l};
  for @$elems
  {
    last if $count++ >= $chop;
    say "{ $count }: Number $_ (with length $l)";
  }
}

sub collatz ($start)
{
  my $sequence := gather
  {
    take $start;
    my $prev = $start;
    loop
    {
      last if $prev == 1;
      my $new = $prev %% 2 ?? $prev / 2 !! 3 * $prev + 1;
      $prev = $new;
      take $new;
    }
  }
  return $sequence;
}
```
So, Arne did not try any caching and just implemented the `1..1e6` range by inserting his code into an outer loop over the range. His program ran in 21 minutes on his PC.

[Ben Davies](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/ben-davies/raku/ch-2.p6) implemented a simple `collatz` subroutine to compute the next item in a Collatz sequence:

``` Perl6
sub collatz(Int:D $n --> Int:D) { $n %% 2 ?? $n div 2 !! 3 * $n + 1 }
```

His extra credit implementation uses `react` and `emit`with supplies to use some of the parallel processing capabilities of Raku:

``` Perl 6
unit proto sub MAIN(|) {*}
multi sub MAIN(Int:D $n where * >= 1) {
    .say for ($n,&collatz...1);
}
multi sub MAIN(Bool:D :extra-credit($)!) {
    react whenever supply for 1..1_000_000 {
        emit ($_,&collatz...1);
    }.map({
        @^collatz.head => @^collatz.elems
    }).sort({
        $^a.value < $^b.value
    }).head(20) {
        once printf "%-7s %s$?NL", 'Value', 'Elements';
        printf "%-7d %d$?NL", .key, .value;
    }
}
sub collatz(Int:D $n --> Int:D) { $n %% 2 ?? $n div 2 !! 3 * $n + 1 }
```

I don’t know how well it performs.

[Kevin Colyer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/kevin-colyer/raku/ch-2.p6) wrote a `collatzSeqChain` subroutine to find Collatz sequence for a given number:

```Perl 6
sub collatzSeqChain(Int $n is copy) {
    my Str $seq = "$n";
    while $n > 1 {
        if $n +& 1 == 0 {
            $n= $n +> 1; # (1)
        } else {
            $n = $n * 3 + 1;
        }
        $seq ~= " -> $n";
    }
    return $seq;
}
```

Note that Kevin is using the `+>` *bit shift* and `+&` *bitwise and* operators to speed up the subroutine.

For the extra credit part, Kevin is caching the length of the sequences:

``` Perl6
sub collatzSeqLen(Int $number) returns Int {
    state Int @length;
    my Int $n=$number;
    my Int $len=1;
    my Str $seq = "$n";
    while $n > 1 {
        if @length[$n]:exists {
            $len += @length[$n];
            last;
        }
        if $n +& 1 == 0 {
            $n = $n +> 1;
        } else {
            $n = $n * 3 + 1;
        }
        $len++;
    }
    @length[$number]=$len;
    return $len;
}

multi MAIN ('top',  Int :$number=10_000, Int :$want=20) {

    die "Longest chainst WANTed [$want] must be > number in sequence [$number]" if $want >= $number;

    my Int @chain = 0;
    my Int $topMin = 1;
    my Int @top;
    my Int @topN;
    my %ltoi;
    my $t = now.Int;
    my Int $x = $number;
    my Int $l;

    for 1..$x -> Int $i {
        $l = collatzSeqLen($i);

        next if $l < $topMin;
        next if $l == any @top;

        %ltoi{$l} = $i;

        @top.push: $l;
        @top.=sort;
        @top.shift if @top.elems > $want;
        $topMin = @top[0];
    }

    @top.map({ "\n{%ltoi{$_}} length $_ = \n"~collatzSeqChain( %ltoi{$_} )  })>>.say;
    say "\n$x sequences searched in {Rat(now -$t)} seconds";
}
```

On his machine, the code ran in a bit more than 17 seconds. That's pretty good performance, I'm impressed.

[Luca Ferrari](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/luca-ferrari/raku/ch-2.p6) wrote a `collatz` subroutine returning the Collatz sequence for the input number:

``` Perl 6
sub collatz( Int:D $m ) {
    my @sequence;
    my $n = $m;
    while ( $n > 1 ) {
        if ( $n %% 2 ) {
            $n /= 2;
        }
        else {
            $n = 3 * $n + 1;
        }

        @sequence.push: $n;
    }

    @sequence;
}
```

Luca also has code for the extra credit:

``` Perl6
# extra credit
my %extra;
for 1 .. 100000 {
    %extra{ $_ } = collatz( $_ ).elems;
}

# sort by the length
# prints 20 most length sequences data
for %extra.sort( { $^b.value <=> $^a.value } )[0..20] -> $p {
    "Number {$p.key} produces a Collatz sequence of {$p.value} numbers length".say;
}
```

One very small error is that the program actually prints 21 sequence lengths. The more serious issue is that Luca's program compute the sequence lengths between 1 and 100,000, not 1,000,000. And its execution lasts 52 seconds on my computer. So, with the correct input range, it would probably take more than 10 minutes. In addition, it seems that Luca's sequence lengths are off by one, but, after careful examination, it turns out that it is because the `collatz` subroutine returns the sequence without the original input number. In other words, Luca doesn't count the input number to be part of the sequence. That's a possible interpretation, but that's not what the task specification called for.

[Mark Anderson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/mark-anderson/raku/ch-2.p6) used two multi `MAIN` subroutines, one taking one numeric argument for computing the sequence for a single input number, and the other with no argument for the extra credit. The extra credit version uses a hash to cache the sequence lengths:

``` Perl6
multi sub MAIN {
    my $t = now;

    my %seen;
    %seen{1} = 1;
    my @collatz = (1 => 1) xx 20;

    for (1 .. 1e6) -> $start {
        my $n = $start;
        my $length = 0;

        loop {
            if %seen{$n}:exists {
                %seen{$start} = %seen{$n} + $length;

                if @collatz[0].value <= %seen{$start} {
                    @collatz.shift;
                    @collatz.push($start => %seen{$start});
                    @collatz = @collatz.sort({$^a.value <=> $^b.value});
                }

                last;
            }

            $n = $n %% 2 ?? $n / 2 !! 3 * $n + 1;
            $length++;
        }
    }

    .say for @collatz;

    say now - $t;
}
```

Mark reports an execution time of 95 seconds on his computer (800 seconds without the cache and without a couple of other optimizations).

[Noud Aldenhoven](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/noud/raku/ch-2.p6) used a recursive `collatz-seq` subroutine to compute the Collatz sequence for one input number:

``` Perl6
sub collatz-seq($n) {
    if ($n == 1) {
        [1];
    } elsif ($n % 2 == 0) {
        [$n, |(collatz-seq($n / 2))];
    } else {
        [$n, |(collatz-seq(3 * $n + 1))];
    }
}
```

For the extra credit, Noud used the `is cached` experimental trait, along with multi-threading (using channels):

``` Perl6
use experimental :cached;  # My favourite Raku feature!

sub collatz-length($n) is cached {
    if ($n == 1) {
        0;
    } elsif ($n % 2 == 0) {
        collatz-length($n / 2) + 1;
    } else {
        collatz-length(3 * $n + 1) + 1;
    }
}

my $collatz-list = Channel.new;
await (1..1e6).map: -> $n {
    start {
        $collatz-list.send((collatz-length($n), $n));
    }
}
$collatz-list.close();

for $collatz-list.list.sort.tail(20) -> ($l, $n) {
    say $n, ' ', $l;
}
```

In the comments of his program, Noud said that he was surprised that caching works well with multi-threading. I'm not sure that it works so well as he claims, since he also said that his program runs in half an hour. I don't have time to test right now, but it would be interesting to test caching and multi-threading separately.

Note that Noud apparently has the same interpretation as Luca Ferrari: his sequence lengths are off by one (in other words, he doesn't consider the input number to be part of the sequence).

[Simon Proctor](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/simon-proctor/raku/ch-2.p6) implemented the formulas for the Collatz sequence using two multi subroutines:

``` Perl6
multi sub collatz( UInt \n where { n %% 2 } ) { n div 2; }

multi sub collatz( UInt \n where { n !%% 2 } ) { (3 * n) + 1; }
```

Simon used parallel processing (with promises) for the extra credit:

``` Perl6
multi sub MAIN( Bool :v(:$verbose)=False){
    constant MAX-VALUE = 1000000;

    my \batch-size = MAX-VALUE div 10;

    my @promises;
    my $start = 1;

    for (1..10) {
        my $s = $start;
        my $e = $start+batch-size-1;
        @promises.push( start chain-batch($s,$e,$verbose) );
        $start+=batch-size;
    }

    await @promises;

    my @largest = @promises.map( |*.result ).sort({$^b.elems <=> $^a.elems}).[^20];

    .say for @largest.map( { "{$_.join("->")} : {$_.elems} steps" } );
}

multi sub chain( 1 ) { 1 }

multi sub chain( UInt \n where { n %% 2 } ) is pure { ( n, |chain( n div 2 ) ); }

multi sub chain( UInt \n where { n !%% 2 && n > 1 } ) is pure { ( n, |chain( (3 * n) + 1 ) ); }


sub chain-batch( UInt $start is copy, UInt $end is copy, Bool \verbose ) {
    my @largest = [];
    my $shortest = 0;

    say "got {$start} to {$end}" if verbose;

    for ($start..$end).reverse -> \val {
        my $collatz = chain(val);
        if $collatz.elems >= $shortest {
            @largest = @largest.push($collatz).sort( { $^b.elems <=> $^a.elems} ).[^20].grep(*.defined);
            if @largest.elems == 20 {
                $shortest = @largest[*-1].elems;
            }
        }
        say "{val} : {$collatz.elems} : $shortest" if verbose;
    }

    return @largest;
}
```

[Athanasius](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/athanasius/raku/ch-2.p6) used multi `MAIN` subroutines to separate the basic case and the extra credit case. His basic case is as follows:

``` Perl6
multi sub MAIN
(
    UInt:D $N where $_ > 0   #= Find the Collatz sequence for positive integer N
)
{
    "Challenge 054, Task #2: Collatz Conjecture (Raku)\n".put;
    my UInt @seq = $N;
    my UInt $n   = $N;
    while $n > 1
    {
        $n = ($n % 2 == 0) ?? ($n / 2    ).UInt
                           !! ($n * 3 + 1);
        @seq.push: $n;
    }
    my UInt $terms = @seq.elems;
    "The Collatz sequence (of %d term%s) for N = %s:\n%s\n".printf:
        $terms, ($terms == 1 ?? '' !! 's'), comma($N), @seq.join: ' -> ';
}
```

When called for the extra credit, the `MAIN` subroutine calls the `find-longest-seqs` subroutine, which itself calls the recursive `count-terms` subroutine. This latter subroutine is caching the results into the `%chains` hash:

``` Perl6
sub find-longest-seqs( --> Array:D )
{
    my $longest-seqs = List::Priority.new(capacity => MAX-TERMS);
    $longest-seqs.insert(1, 1);

    my UInt $max = 1                         if DEBUG;
    print "Max seq length: [  1,       1]\n" if DEBUG;
    for 2 .. MAX-N -> UInt $start
    {
        my UInt $terms = count-terms($start);

        if (DEBUG && $terms > $max)
        {
            $max = $terms;
            "Max seq length: [%3d, %7d]\n".printf: $terms, $start;
        }
        $longest-seqs.insert($terms, $start);
    }
    my @longest-seqs;
    while $longest-seqs.size > 0
    {
        my UInt $seq-len = $longest-seqs.highest_priority.UInt;
        my UInt $start   = $longest-seqs.pop;

        push @longest-seqs, [ $start, $seq-len ];
    }
    return @longest-seqs;
}
sub count-terms( UInt:D $n --> UInt:D )
{
    state  %chains = 1 => 1;            # Memoize

    return %chains{$n}                                  if %chains{$n}:exists;
    return %chains{$n} = 1 + count-terms(($n / 2).UInt) if $n % 2 == 0;
    return %chains{$n} = 1 + count-terms( $n * 3 + 1 );
}
```

In a comment to his program, Athanasius reports that his program takes 20 minutes to complete for the `1..1e6` range. That’s really too slow, there must be something wrong in the caching implementation.

[Colin Crain](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/colin-crain/raku/ch-2.p6) used a `next-collatz` subroutine to compute the next term in a given sequence, and used this in the `make_collatz_sequence` subroutine to compute a full sequence:

``` Perl6
sub make_collatz_sequence ( $start ) {
    my $current = $start;
    my @seq = ($current);
    my $next;

    while ($current != 1) {
        $next = next_collatz($current);
        @seq.push: $next;
        $current = $next;
    }

    return @seq;
}

sub next_collatz (Int:D  $n ) {
    $n %% 2  ??   ($n / 2).Int
             !!   3 * $n + 1;
}
```

The extra credit task is performed in the following `get_collatz_metadata` subroutine:

``` Perl6
sub get_collatz_metadata ( %data, %sequences ) {
## run metaanalysis on the first 1,000,000 Collatz sequences
    my $then = now;
    for (1..1000000) -> $number {
        my $prev = $number;
        my $len  = 1;
        my $next;

        while ($prev != 1) {
            $next = $prev % 2 == 0  ??   $prev / 2
                                    !!   3 * $prev + 1;
            $prev = $next;
            if ($next > %data<highest_value>) {
                %data<highest_number> = $number;
                %data<highest_value>  = $next;
            }
            $len++;
        }
        %sequences{$number} = $len;
    }
    say "time: ", now - $then;
}
```

Colin's program starts with a lengthy and very useful comment explaining some of the code. Please follow the link to read it. Among other things, Colin was interested to find the highest number found along the computation. The highest number found is "56,991,483,520, in the sequence for the number 704,511. Huh." And, interestingly, the sequence for number 704,511 is not anywhere near the 20 longest sequences (it has only 240 numbers, where as the 20 longest sequences are between 445 and 525)).

[Jaldhar H. Vyas](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/jaldhar-h-vyas/raku/ch-2.p6) made a very concise and creative `collatzSequence` to compute the Collatz sequence of any number, using the `...` sequence operator:

```Perl6
sub collatzSequence(Int $n) {
    return ($n, { ($_ % 2) ?? (3 * $_ + 1) !! ($_ / 2) } ... 1);
}
```

This is quite clever, I love the idea.

This is his submission for the extra credit:

``` Perl6
multi sub MAIN() {
    my $maxlength = 0;
    my @longest = ();

    for 1 .. 1e6 -> $n {
        my $length = collatzSequence($n).elems;

        if $length >= $maxlength {
            $maxlength = (@longest.elems) ?? @longest[*-1][1] !! $length;
            @longest.push([$n, $length]);

            @longest = @longest.sort({ $^b[1] <=> $^a[1] });
            if (@longest.elems > 20) {
                @longest.pop;
            }
        }
    }

    for @longest -> @long {
        say @long[0], ': ', @long[1];
    }
}
```
It looks fine, but, since there no attempt at either parallelizing or caching, it probably takes quite a long while to execute.

[Javier Luque](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/javier-luque/raku/ch-2.p6) wrote a `collatz` subroutine to compute the length of the Collatz sequence for any integer:

``` Perl6
sub collatz($n is copy) {
    my $length = 0;

    while ($n != 1) {
        $length++;

        $n = ($n % 2) ??
            3 * $n + 1  !!
            $n / 2;
    }

    return $length.Int;
}
```

To me, Javier's computation of the sequence length is off by one, just as some others challengers before, except that, looking at his code,  Javier seems to consider that the final number, 1, isn't part of the sequence.

He then used a brute force approach to solve the extra credit task:

``` Perl6    my %lengths;
    for (1 .. 1_000_000) -> $i {
        my $length = collatz($i);
        %lengths{$i} = $length
            if ($length > 440);
    }

    # Grab the 22 longest numbers
    my @keys = %lengths.keys.sort(
        { %lengths.{$^b} <=> %lengths.{$^a} }
    ).[0 .. 21];

    # Output the lengths
    for ( @keys ) -> $i {
        say "$i : Length " ~ %lengths{$i};
    }
```

By Javier's own admission in his blog post: "Warning: Raku solution is slow. ... Very slow. Like really really slow." Unfortunately, Javier did not provide any figure.

[Markus Holzer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/markus-holzer/raku/ch-2.p6) used the sequence operator (just as Jaldhar) to build the Collatz sequence of an input number:

``` Perl6
sub collatz( Int $n ) is pure
{
    $n, { $^n %% 2 ?? $^n div 2 !! $^n * 3 + 1 } ... { $^n == 1 }
}
```

As I already said about Jaldhar's solution, I really like this idea.

For the extra credit, Markus uses a `$cache`

``` Perl6
    for 1..$N -> $n
    {
        my Int $count = 0;
        my Int $cache = 0;

        my @new = gather for collatz( $n ) -> $collatz
        {
            # Dynamic programming:
            # see what you have computed so far, so you
            # don't have to compute it again
            if %result{ $collatz }:exists
            {
                $hits += $cache = %result{ $collatz };
                last;
            }
            $miss++;
            take $collatz, $count++;
        }

        %result{ .[0] } = @new.elems - .[1] + $cache
            for @new;
    }
```

But if I understand correctly, I'm afraid his caching approach doesn't bring a really significant advantage, as the program does compute the full Collatz sequence for every number in the input range, and apparently only caches the length of the sequence. For the range ten times smaller (`1..1e5`) than the requirement, the program runs in 21 seconds on my computer. It appears that the caching approach is not very efficient.

[Mohammad Anwar](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/mohammad-anwar/raku/ch-2.p6) cleverly used a multi subroutine to handle the two cases when computing the next term in the Collatz sequence:

``` Perl6
sub MAIN(Int $n is copy where $n > 0) {
    my @collatz = ($n);
    while $n != 1 {
        $n = collatz-sequence($n);
        push @collatz, $n;
    }
    say @collatz.join(" -> ");
}
multi sub collatz-sequence(Int $n where $n  %% 2) { $n div 2   }

multi sub collatz-sequence(Int $n where $n !%% 2) { 3 * $n + 1 }
```

Mohammad did not try to implement the extra credit.

[Roger Bell West](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/roger-bell-west/raku/ch-2.p6) implemented a `while` loop to process any list of numbers and provide the Collatz sequence for each:

``` Perl6
while (my $n=shift @*ARGS) {
  my @k=($n);
  while ($n != 1) {
    if ($n % 2 == 0) {
      $n/=2;
    } else {
      $n*=3;
      $n++;
    }
    push @k,$n;
  }
  say join(', ',@k);
}
```

Roger did not implement the extra credit task.

[Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/ruben-westerberg/raku/ch-2.p6) used the `hyper` operator to parallelize the processing:

``` Perl6
my $max=@*ARGS[0]//23;         #sane default without cmd line args
my @seqs=( [] xx 20);        #Initalise the largest 20 sequences found
my $l=Lock.new;            #Create a lock to allow sequential access to top 20

(1..$max).hyper(batch=>1000, degree=>8).map: {
    my $s=collaz([$_ ,]);
    $l.protect({
        for (0..^@seqs) -> $i {
            if $s.elems  > @seqs[$i].elems {
            	@seqs.pop unless @seqs.elems < 20;
            	@seqs.splice($i,0,[$s]);
            	last;
            }
        }
    });
    ();
};

say "Top 20 Collaz Sequence lengths for starting numbers 1..$max";
for @seqs.grep: *.elems != 0 {
    printf "Starting Number: %10d Sequence Length: %d\n", .[0],.elems;
}



sub collaz ($seq) {
    given $seq[*-1] {
        when $_%%2 {
            $seq.push: $_/2;
        }
        default {
            $seq.push: 3*$_+1;
        }
    }
    collaz($seq) unless $seq[*-1]==1;
    $seq;
}
```

With a range reduced to `1..1e5`, the program ran in 41 seconds on my machine. Parallelizing probably brings some advantage over sequential processing, but the performance results are still quite poor.

[Ryan Thompson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/ryan-thompson/raku/ch-2.p6) provided a very complete solution, including the maintenance of a sliding array of 20 results which I was too lazy too implement. Ryan's program uses a `@memo` array to cache (well, to memoize) the results. Although the program is a bit long, I think it is well worth to be quoted in its entirety:

``` Perl6
my $top-n   = 20;   # Number of top sequences to list
my $limit   = 1e6;  # Highest starting number
my $mintop  = 0;    # Minimum value in @top (efficiency/convenience)

my @top     = 0 => 0, 1 => 1; # Top N list (start => seq-len)
my @memo    = (0, 1);  # Memoization (@memo[start] = seq-len)

#| Non extra-credit Collatz sequence
sub collatz( Int $n is copy ) {
    my @r = $n;
    while ( $n ≠ 1 ) {
        $n = $n %% 2 ?? ($n / 2).Int !! (3*$n + 1).Int;
        @r.push: $n;
    }
    @r;
}

# Iterate through all starting numbers
for 3..$limit -> $start {
    my Int $n = $start;
    my Int $len = 0;

    # Keep going through the sequence until we hit a memoized value
    while (!@memo[$n]) {
        $len += 1 + $n % 2;
        $n = $n %% 2 ?? ($n / 2).Int !! ((3*$n + 1) / 2).Int;
    }

    $len += @memo[$n];
    @memo[$start] = $len if $start < $limit * 2;

    # If the $len is better than the worst value in @top, add it
    top($start, $len)          if  $len > $mintop and $start ≤ $limit;
    top($n * 2, @memo[$n] + 1) if $n ≤ $limit / 2 and @memo[$n] > $mintop;
}

printf "Start: %6d has %4d steps\n", .key, .value for @top;

#| O(n) insert $n => $len into @top
sub top(Int $n, Int $len) {
    my $idx = @top.keys.first: { @top[$_].value < $len };
    @top.splice: $idx.Int, 0, $n => $len;
    @top.pop if @top > $top-n;
    $mintop = @top[*-1].value;
}
```

His program includes a couple of clever optimizations which he explains in [his very interesting blog](http://ry.ca/2020/04/collatz-conjecture/), including the idea of reducing the number of iterations by doing two steps in one go when the number examined is odd, which was also prompted to me by Mario.

To me, this really seems to be the best solution I have seen so far. So, I was interested to benchmark it on my machine, to compare his results with mines.

Ryan's program displays the same result as mine and runs pretty fast:

    real    0m20,861s
    user    0m0,000s
    sys     0m0,061s

My last solutions were a bit faster, but considering that his solution is more complete (as said, I did not implement a sliding array of results and just hard-coded the lower limit of the 20 sequences), and that I submitted my new results well after the deadline, I must admit that he did a much better job than I did.

[Shahed Nooshmand](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/shahed-nooshmand/raku/ch-2.sh) wrote a Raku one-liner:

    raku -e 'put “\e[F\e[K” ~ join “ → ”, (prompt(“\n”).trim-trailing, -> \n { n %% 2 ?? n ÷ 2 !! 3 × n + 1 } … 1)'

Shahed also suggested a solution for the extra credit task:

``` Perl6
my %hail = 1 => 1;

for 1..^1e5 {
    my $n = $_;
    my $i = 0;
    until %hail{$n}:exists {
        $n = $n %% 2 ?? $n ÷ 2 !! $n × 3 + 1;
        $i++
    }
    %hail{$_} = $i + %hail{$n}
}
.put for %hail.sort(−*.value)[^20]
```

Here, Shahed used the `%hail` hash to serve both as a cache and as a list of results. Running this program with a range reduced to `1..1e5` took about 10 seconds on my computer. The slight problem though is that finding the sequences is done quite efficiently, but sorting the hash at the end takes almost much time as finding the sequences. Just to illustrate this, changing the last line to this:

```Perl6
.put for %hail.grep({$_.value > 300}).sort(−*.value)[^20];
```

considerably reduces the time to sort the data and makes the overall execution almost twice faster.

[Ulrich Rielke](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-054/ulrich-rieke/raku/ch-2.p6) first wrote a `findSequence` subroutine to compute the Collatz sequence of any input integer:

``` Perl6
sub findSequence( Int $n is copy ) {
  my @sequence ;
  while ( $n != 1 ) {
      @sequence.push( $n ) ;
      if ( $n %% 2 ) {
        $n div= 2 ;
      }
      else {
        $n = $n * 3 + 1 ;
      }
  }
  @sequence.push( $n ) ;
  return @sequence ;
}
```

For the extra credit, the main program then iterates over the `1..1000000` range and, for each value calls `findSequence`.

```
sub MAIN( Int $n ) {
  .say for findSequence( $n ) ;
  my @sequences ;
  for (1..1000000) -> $num {
      my @sequence = findSequence( $num ) ;
      @sequences.push( ($num , @sequence.elems ) ) ;
  }
  my @sorted = @sequences.sort( { $^b[1] <=> $^a[1] } ) ;
  say "The sequence lengths of the longest sequences up to 1000000 are :" ;
  @sorted[0..19].map( { say "$_[0]  $_[1]" } ) ;
}
```

Ulrich did not try to optimize the program, so I'm afraid this is quite slow.

***

## SEE ALSO

Quite a number of blog posts this time:

* Arne Sommer: https://raku-musings.com/sequential-conjectures.html;

* Kevin Colyer: https://kevincolyer.wordpress.com/2020/04/05/perl-weekly-challenge-week-54/;

* Luca Ferrari:  https://fluca1978.github.io/2020/03/29/PerlWeeklyChallenge54.html#task2;

* Jaldhar H. Vyas: https://www.braincells.com/perl/2020/04/perl_weekly_challenge_week_54.html;

* Javier Luque: https://perlchallenges.wordpress.com/2020/03/30/perl-weekly-challenge-054/;

* Mohammad Anwar: https://perlweeklychallenge.org/blog/weekly-challenge-054;

* Ryan Thompson: http://ry.ca/2020/04/collatz-conjecture/;

* Shahed Nooshmand: https://rafraichisso.ir/2020/04/03/pwc-54.

## Wrapping up

Please let me know if I forgot any of the challengers or if you think my explanation of your code misses something important (send me an e-mail or just raise an issue against this GitHub page).

If you want to participate to the Perl Weekly Challenge, please connect to [this site](https://perlweeklychallenge.org/).
