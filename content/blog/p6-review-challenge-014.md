---
title: "Laurent Rosenfeld Weekly Review: Challenge - 014"
date: 2019-10-27T00:00:00+00:00
description: "Laurent Rosenfeld Weekly Review: Challenge - #014."
type: post
image: images/blog/p6-review-challenge-014.jpg
author: Laurent Rosenfeld
tags: ["Perl6"]
---
***
# Perl6 Solutions Weekly Review
***

## Task #1: Van Eck's Sequence

This is derived in part from my [blog post](http://blogs.perl.org/users/laurent_r/2019/06/perl-weekly-challenge-14-van-ecks-sequence-and-us-states.html) made in answer to the [Week 14 of the Perl Weekly Challenge](https://perlweeklychallenge.org/blog/perl-weekly-challenge-014/) organized by  <a href="http://blogs.perl.org/users/mohammad_s_anwar/">Mohammad S. Anwar</a> as well as answers made by others to the same challenge.

The challenge reads as follows:

*Write a script to generate Van Eck’s sequence starts with 0. For more information, please check out [wikipedia page](https://en.wikipedia.org/wiki/Van_Eck%27s_sequence). This challenge was proposed by team member Andrezgz.*

Jan Ritsema van Eck's sequence is an integer sequence defined recursively as follows. Let a(0) = 0. Then, for n ≥ 0, if there exists an m < n such that a(m) = a(n), take the largest such m and set a(n+1) = n − m; otherwise a(n+1) = 0. Thus, the first occurrence of an integer in the sequence is followed by a 0, and the second and subsequent occurrences are followed by the size of the gap between the two most recent occurrences.

## My Solutions

The definition is quite simple, but, for some reason (maybe the heatwave striking a good part of Western Europe at the time), it took me more time (about 30 minutes) than I expected to get it right. Anyway, here we go:

``` Perl6
use v6;

my @a = 0,;
for ^20 -> $n {
    my $result = 0;
    for reverse ^$n -> $m {
        $result = $n - $m and last if @a[$m] == @a[$n];
            # Note: $m is always smaller than $n, so $n - $m > 0
    }
    push @a, $result;
}
say @a;
```

Not much to say about it: we just apply the definition, and the code is pretty small. This outputs the following sequence:

    $ perl6 vaneck.p6
    [0 0 1 0 2 0 2 2 1 6 0 5 0 2 6 5 4 0 5 3 0]

Since we have nested loops, I have been thinking whether it might be possible to store the values in a hash or a set, or use a junction, to avoid performing the inner loop when possible.

But looking at a longer version of the sequence, for example:

    [0 0 1 0 2 0 2 2 1 6 0 5 0 2 6 5 4 0 5 3 0 3 2 9 0 4 9 3 6 14 0 6 3 5 15 0 5 3 5 2 17 0 6 11 0 3 8 0 3 3 1 42 0 5 15 20 0 4 32 0 3 11 18 0 4 7 0 3 7 3 2 31 0 6 31 3 6 3 2 8 33]

it appears that, except at the very beginning of the sequence, zeros are relatively rare, meaning that there are only few cases where we will go through the whole list and not find an `$m` within the inner loop. Therefore, there is probably no or little point trying to optimize away the inner loop by a lookup mechanism: we will not get a very significant performance improvement. (That's what I was thinking at the time I wrote the original blog post; thinking again about it several months later,  I think a hash lookup would probably be better, especially if you want to generate a long sequence;  several of the alternate solutions below implement this.)

Maybe a solution using the `gather/take` construct to produce lazy lists would be more idiomatic Perl 6 code. Let's see what we can do.

``` Perl6
use v6;

sub MAIN ( UInt $max ) {
    my @a = lazy gather {
        take 0;
        for 0..* -> $n {
            my $result = 0;
            for reverse ^$n -> $m {
                $result = $n - $m and last if @a[$m] == @a[$n];
            }
            take $result;
        }
    }
    say join " ", @a[0..$max];
}
```

It works and produces the same output as before, and using a lazy infinite list may look slightly more Perl-6-ish, but it does not make the code simpler, quite to the contrary. So, ultimately, I tend to prefer my first solution.

## Alternative Solutions

[Arne Sommer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-014/arne-sommer/perl6/ch-1.p6) decided, contrary to me, to use a look-up hash. As already mentioned, it may be a better solution, after all.

``` Perl6
my @van-eck = (0);
my %seen;
for ^($limit -1) -> $pos
{
  %seen{@van-eck[*-1]}.defined
   ?? @van-eck.push: $pos - %seen{@van-eck[*-1]}
   !! @van-eck.push: 0;

  %seen{@van-eck[*-2]} = $pos;
}
```

[Athanasius](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-014/athanasius/perl6/ch-1.p6) also went for a hash look-up:

``` Perl6
sub van-eck(Int:D $length --> Array)
{
    my @seq = (Nil, 0);
    my %indices;

    for 1 .. $length - 1 -> Int $n
    {
        my $old_term = @seq[$n];
        push @seq, %indices{$old_term}:exists ?? $n - %indices{$old_term} !! 0;
        %indices{$old_term} = $n;
    }

    shift  @seq;
    return @seq;
}
```

[Francis J. Whittle](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-014/fjwhittle/perl6/ch-1.p6) also used a hash look-up, but created an infinite sequence of Van Eck numbers:

``` Perl6
my \Van_Eck := gather {
  take $start;
  my %m = $start => 0;

  for ^∞ -> $n {
    take %m{Van_Eck[$n]}:exists ?? $n - %m{Van_Eck[$n]} !! 0;
    %m{Van_Eck[$n]} = $n;
  }
}
```

[Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-014/joelle-maslak/perl6/ch-1.p6) also used hash look-up:

``` Perl6
sub MAIN(UInt:D $length = 19) {
    my $seq = lazy gather { for 0..∞ -> $n { take van-eck($n) } }
    say $seq[^$length].join(" ");
}
my %cache-by-val = 0 => [0, 1];
my @cache-by-pos = 0, 0;

multi sub van-eck(0 --> UInt:D) { 0 }
multi sub van-eck(1 --> UInt:D) { 0 }
multi sub van-eck(UInt:D $pos --> UInt:D) {
    return @cache-by-pos[$pos] if @cache-by-pos[$pos]:exists;
    # Ensure cache is populated.
    for ^$pos -> $p { van-eck($p) }
    my $n = $pos - 1;
    # We know that we must have been called in order.
    my $prev = van-eck($n);
    my $current;
    if %cache-by-val{$prev} and %cache-by-val{$prev}.elems ≥ 2 {
        my $m = %cache-by-val{$prev}[*-2];
        $current = $n - $m;
    } else {
        $current = 0;
    }
    @cache-by-pos[$pos] = $current;
    ( %cache-by-val{$current} //= Array.new ).push: $pos;

    return $current;
}
```


[Fench Chang](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-014/feng-chang/perl6/ch-1.p6) chose, like me, to traverse the current `@eck` array backward to find the previous matching value;

sub MAIN(UInt $n) {
    my @eck = 0, 0;
    for 2..$n -> Int $i {
        @eck[$i] = 0;

        for $i - 2 ... 0 -> Int $j {
            if @eck[$j] == @eck[$i - 1] {
                @eck[$i] = $i - $j - 1;
                last;
            }
        }
    }
    say @eck;
}

[Jaldhar H. Vyas](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-014/jaldhar-h-vyas/perl6/ch-1.p6) wrote the `backtrack` subroutine to traverse the current  `@vanEcks` array backward:

``` Perl6
sub backtrack($n, @vanEcks) {
    loop (my $i = @vanEcks.elems - 1; $i > 0; $i--) {
        if @vanEcks[$i - 1] == $n {
            return @vanEcks.elems - $i;
        }
    }
    return 0;
}
multi sub MAIN() {
    my @vanEcks = (0);
    my $n = 0;
    while @vanEcks.elems <= 100 {
        @vanEcks.push($n);
        $n = backtrack($n, @vanEcks);
    }
    @vanEcks.join(", ").say;
}
```

[Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-014/ruben-westerberg/perl6/ch-1.p6) also chose to traverse the current Van Eck sequence to find the previous matching value:

``` Perl6
my @a=(0);
for 0..^$nn -> $n {
    my $max= @a[0..^$n].grep(@a[$n],:k).max();
    @a[$n+1]=$max == -Inf??0!!$n-$max;
}
```

## SEE ALSO

Four blog posts on the subject this time:

* Arne Sommer: https://perl6.eu/van-eck-state.html;

* Athanasius: http://blogs.perl.org/users/athanasius/2019/06/perl-weekly-challenge-014.html;

* Francis J. Whittle: https://rage.powered.ninja/2019/06/30/hashed-up-sequencing.html;

* Jaldhar H. Vyas: https://www.braincells.com/perl/2019/06/perl_weekly_challenge_week_14.html.

## Wrapping up

Please let me know if I forgot any of the challengers or if you think my explanation of your code misses something important (send me an e-mail or just raise an issue against this GitHub page).
