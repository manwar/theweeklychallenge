---
title: "Laurent Rosenfeld Weekly Review: Challenge - 016"
date: 2019-10-09T00:00:00+00:00
description: "Laurent Rosenfeld Weekly Review: Challenge - #016."
type: post
image: images/blog/p6-review-challenge-016.jpg
author: Laurent Rosenfeld
tags: ["Raku"]
---
***
# Raku Solutions Weekly Review
***

## Task #1: The Largest Share in the Pythagoras Pie

This is derived from my [blog post](http://blogs.perl.org/users/laurent_r/2019/07/-perl-weekly-challenge-16-pythagoras-pie.html) made in answer to the [Week 22 of the Perl Weekly Challenge](https://perlweeklychallenge.org/blog/perl-weekly-challenge-016/) organized by  <a href="http://blogs.perl.org/users/mohammad_s_anwar/">Mohammad S. Anwar</a> as well as answers made by others to the same challenge.

The challenge reads as follows:

*At a party a pie is to be shared by 100 guests. The first guest gets 1% of the pie, the second guest gets 2% of the remaining pie, the third gets 3% of the remaining pie, the fourth gets 4% and so on.*

*Write a script that figures out which guest gets the largest piece of pie. (Challenge proposed by Jo Christian Oterhals)*

The first guest gets 1% of the whole pie. The second guest gets 2% of 99%, i.e. 1.98%. And so on: each guest gets in turn a larger share of what is left of the pie, but, at the same time, what is left of the pie gets smaller and smaller. So, intuitively, there must be a point where the share sizes start diminishing. If there was a 101st guest, she would get nothing, since the 100th guest took everything that is left (in fact a very tiny share).

This so-called Pythagoras pie has nothing to do with the famous ancient Greek mathematician. The name of this puzzle apparently comes the Dutch *Pythagoras* magazine in which it was first published.

## My solutions

### Using a One-Liner Script to Display Each Guest's Share of the Pie

It is quite easy to write a Perl 6 one-liner to display the share of each guest. Given that the share become really minuscule after a while, I only tried to print the shares only for the first 50 guests. In the following one-liner script, `$p` represents each guest and `$r` the fraction of the pie that remains at any given point. We display the guest number, what remains of the pie and the share taken by the guest:


    $ perl6 -e 'my $r = 1; for 1..50 -> $p {printf "%i\t%0.10f\t%0.10f\n", $p, $r, $r*$p*.01; $r -=  $r*$p*.01;}'
    1       1.0000000000    0.0100000000
    2       0.9900000000    0.0198000000
    3       0.9702000000    0.0291060000
    4       0.9410940000    0.0376437600
    5       0.9034502400    0.0451725120
    6       0.8582777280    0.0514966637
    7       0.8067810643    0.0564746745
    8       0.7503063898    0.0600245112
    9       0.6902818786    0.0621253691
    10      0.6281565096    0.0628156510
    11      0.5653408586    0.0621874944
    12      0.5031533642    0.0603784037
    13      0.4427749605    0.0575607449
    14      0.3852142156    0.0539299902
    15      0.3312842254    0.0496926338
    16      0.2815915916    0.0450546547
    17      0.2365369369    0.0402112793
    18      0.1963256577    0.0353386184
    19      0.1609870393    0.0305875375
    20      0.1303995018    0.0260799004
    21      0.1043196015    0.0219071163
    22      0.0824124852    0.0181307467
    23      0.0642817384    0.0147847998
    24      0.0494969386    0.0118792653
    25      0.0376176733    0.0094044183
    (Rest of the output omitted for brevity)

Using the (full `1..100`range) data series in a spreadsheet (Libre Office Calc), we can create a graph and visualize how the shares grow relatively fast at the beginning and then quickly shrink and become really tiny:

![alt text](./Pie-graph.jpg "Pie share for each guest")

So, looking at the one-liner output (or at the graph), it turns out that the 10th guest gets the largest share of the pie (6.28%). Problem solved!

But we're cheating a little bit with this one-liner. The challenge says: *Write a script that figures out which guest gets the largest piece of pie.* Our one-liner displays the share of each guest and it is the human person reading the output that really figures out which share is the largest.

We could still do it with a one-liner:

    $ perl6 -e 'my $r = 1; my @a; for 1..50 -> $p {push @a, $r*$p*.01; $r -=  $r*$p*.01}; my $m = max @a;
        for @a.kv -> $k, $v {say "{$k+1}: $v" if $v == $m;}'
    10 0.06281565095552947

or possibly slightly better, computing the maximum during iteration:

    $ perl6 -e 'my $r = 1; my @m = 0, 0; for 1..15 -> $p {my $t = $r*$p*.01; @m = $p, $t if $t > @m[1]; $r -=  $t};
        say join " ", @m;'
    10 0.06281565095552947

But I'm afraid this is now becoming a little bit too hairy. It will be cleaner to write real scripts. We'll come back to one-liners later.

### Real Scripts for Finding the Largest Share

Since we've already done it with one-liner, writing a full-fledged script in Perl 6 is not complicated:

``` Perl6
use v6;

constant $share-fact = 0.01;
my $rest-of-the-pie = 1;
my ($max-guest, $max-sh) = 1, 0;
for 1..100 -> $guest-nr {
    my $share = $rest-of-the-pie * $guest-nr * $share-fact;
    ($max-guest, $max-sh) = ($guest-nr, $share) if $share > $max-sh;
    $rest-of-the-pie -= $share;
}
say "Lucky guest: $max-guest \tLargest share: $max-sh";
```

This procedural iterative solution prints the following output:

    $ perl pythagoras_pie.pl
    Lucky guest: 10         Largest share: 0.0628156509555295

But we can do something much more concise in Perl 6 using the sequence operator, a pinch of functional programming and some built-in functions:

``` Perl6
use v6;

my $rest = 1;
my @shares = map { my $sh = $rest * $_; $rest -= $sh; $sh}, (0, .01 ... 1);
say  map { $_, @shares[$_] }, @shares.keys.max({@shares[$_]});
```

which prints out:

    ((10 0.06281565095552947))

We start with the sequence operator `...` to build a list of 101 relative shares and use a `map` statement to build `@shares`, the list of final shares of the original pie. Then we use the `max` routine to find the index of the largest value, and finally print the index and the value. Note that we started the original sequence with 0, although this is useless for the computations, because this makes it possible to use the array index as a rank (otherwise, the script would have printed 9, instead of 10, for the rank of the lucky guest).

Since we know from the output of two of the one-liners above that only one guest gets the largest share, we don't really bother to find several largest shares. But it would take only one more code line to do so:

``` Perl6
my $rest = 1;
my @shares = map { my $sh = $rest * $_; $rest -= $sh; $sh}, (0, .01 ... 1);
my $max = @shares.keys.max({@shares[$_]});
say map { $_, @shares[$_] }, grep {@shares[$_] == @shares[$max]}, 1..100;
```

Another approach is to build directly the `@shares` array with the sequence operator and a generator (i.e. a code block to generate the next item from the previous one):

``` Perl6
use v6;

my ($rest, $a) = 1, .01;
my @shares =  0, .01, -> $b {$rest -= $b; $a += .01; $rest * $a} ... *;
say  map {$_, @shares[$_]}, @shares[0..100].keys.max({@shares[$_]});
```

Now that the code has become more compact, we could possibly use again a Perl 6 one-liner:

    $ perl6 -e 'my ($r, $a) = 1, .01; my @sh = 0, .01, -> $b {$r -= $b; $a += .01; $r * $a} ... *;
        say map {$_, @sh[$_]}, @sh[0..100].keys.max({@sh[$_]});'
    ((10 0.06281565095552947))



## Alternative Solutions

[Arne Sommer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-016/arne-sommer/perl6/ch-1.p6) constructed a lazy infinite list of Pythagoras pie shares using the `gather ... take` construct:
``` perl6
my $pythagoras-pie := gather
{
  my $remainder = 100;
  my $position  = 1;
  loop
  {
    my $part = $remainder * $position / 100;
    $remainder -= $part;
    $position++;
    take $part;
  }
}
```
It is then ~~a share of a pie~~ a piece of cake to find the largest part with the `max` built-in routine (limiting the values to the `0..100`, since the `max` routine doesn't work too well on an infinite list. I really like this imaginative approach.

[Francis J. Whittle](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-016/fjwhittle/perl6/ch-1.p6) used `FatRat` numbers to get accurate computation. He computed the slices is a nice functional way:
``` Perl6
# my $guests = 100;
my @slices = (0..$guests).map: -> $n is copy {
  $n *= $pie / $guests;
  $pie -= $n;
  $n * 100; # As a percentage.
};
```
It is then again a piece of cake to find the largest share.

[Simon Proctor](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-016/simon-proctor/perl6/ch-1.p6) also used `FatRat` numbers for a better accuracy. His program uses a `for` loop to compute iteratively the shares and to keep record of the largest share so far. [Kevin Colyer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-016/kevin-colyer/perl6/ch-1.p6) used essentially the same algorithm. His solution also keeps track of the `$fattestGuest` and the `$biggestSlice` on the fly while computing the slices. [Athanasius](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-016/athanasius/perl6/ch-1.p6) also used the same iterative approach, except that he decided to use `Real` numbers for the shares and remainders.

[Noud](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-016/noud/perl6/ch-1.p6) took a very different, more mathematical-oriented and probably more efficient approach. Noting that a person *n* gets `99 / 100 * 98 / 100 * ... * (99 - n + 1) / 100 * n / 100`, which is equal to `99! / (100 - n)! * n / 100^n`, Noud first implements a `!` factorial operator and then computes the shares in just one line:

```Perl6
sub postfix:<!>(Int $n) { [*] 1..$n };
my @pieces = (1..100).map(-> Int \n { 99! / (100 - n)! * n / 100**n });
```
Finding then the lucky guest is then fairly easy:
``` Perl6
    my $person_no = @pieces.maxpairs()[0].key + 1;
```
To me, Noud's solution is undoubtedly one of the best ones.

[Ozzy](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-016/ozzy/perl6/ch-1.p6) took yet another very different approach. He wrote two mutually recursive subroutines to compute the share and the remainder at any step and then used them to build two lazy infinite lists of shares and remainders. Finally, his script traverses the list of shares to find the largest one.

[Fench Chang](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-016/feng-chang/perl6/ch-1.p6) wrote a very simple `for` loop to populate a `@share` array and then used chained built-in method invocations to find the largest share:

``` Perl6
@share.pairs.max(*.value).key.say;
```

[Jaldhar M. Vyas](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-016/jaldhar-h-vyas/perl6/ch-1.p6) used a `map` and chained methods to produce the result is just one (multiline) statement, and then another code line to print the result:

``` Perl6
my ($topguest, $topshare) = (1 .. 100)
    .map({
        state $pie = 100.0;
        my $share = $pie * ($_ * 0.01);
        $pie -= $share;
        $_ => $share;
    })
    .max( *.value )
    .kv;

say "Guest $topguest gets ", sprintf("%0.2f", $topshare), '% of the pie.';
```

[Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-016/joelle-maslak/perl6/ch-1.p6) also took another very different (and quite unusual) approach: she wrote two subroutines, `firsts` and `seconds`, which, given an array of arrays (AoA), return respectively a list of the first and of the second elements of each nested array. Her program then uses the `seconds` subroutine to incrementally build a `@slices` AoA, where its nested arrays contain a pair of values, i.e.  the guest number and the allocated share, using the sum of the previously allocated shares. Quite a surprising method! Then, the program uses the `max` built-in method on the list of shares (i.e. the return value of `seconds` on the `@shares` AoA) to find the size of the largest share. And finally, it uses a `grep`  on the list of guests (produced by the `firsts` subroutine on the `@shares` AoA) to find all the guests (in fact, only one) who received that largest share. This is both a bit contrived and fairly clever, in fact so clever that I can't resist quoting the whole program:

``` Perl6
my @slices;
for 1..100 -> $i {
    @slices.push: @( $i, ( FatRat(1) - seconds(@slices).sum ) * $i / 100 );
}

print "Largest piece goes to guest # ";
my $max = seconds(@slices).max;
say firsts( @slices.grep( { $_[1] == $max } ) ).join(" ");

say "Slice size: { ($max * 100).fmt('%.2f') }% of the pie";

sub firsts(@array)  { return @array.map( { $_[0] } ) }
sub seconds(@array) { return @array.map( { $_[1] } ) }
```

[Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-016/ruben-westerberg/perl6/ch-1.p6) made a `for` loop to compute the shares and apparently decided to exit the loop and print the guest number as soon as the share starts to decrease. Fair enough, it works, but I'm only half convinced, because you would need first to explain and demonstrate that the shares increase progressively, reach a maximal value and then steadily decrease. Having said that, I want to congratulate Ruben for having written a Perl 5 and a Perl 6 scripts that are absolutely identical (except for the boiler-plate pragmas at the beginning). Who was it who said that P5 and P6 are completely different languages?

## Enter Damian Conway

Damian Conway did not participate to the challenge, but instead wrote [a blog post](http://blogs.perl.org/users/damian_conway/2019/07/six-slices-of-pie.html) in which he suggests 6 different ways to solve it. As usual, you should really read entirely his masterful post, but I want to highlight just a few gems.

First, Damian suggest a typically imperative C-like solution with a `for` loop that computes each share in turn and keeps track of the largest share. Besides being a bit gawky, this solution suffers, in Damian's words, of relying on a "significant unwarranted assumption," namely that "there actually was a single optimal place in the queue."  There could be two or more, and the script identifies only the first person that gets the largest share. We know by now that there is only one optimal place in the queue (10), but Damian claims he did not know when he wrote it. Damian continue saying that having to manually find the largest share is a red flag, since Perl 6 has a "built-in `max` function that can do that for us. Though, of course, what we really need is a `max` function that returns all the places where the maximum is found, not just the first. Well... Perl 6 has that too: `maxpairs`."

Yet another red flag in the code, in Damian's view, is the need to add comments documenting the various numbers representing percentages. (e.g. 1.00 and $N/100). There ought to be a way to have the code itself make that obvious.

So this is Damian's second solution with all this improvements:

``` Perl6
# Add a percentage operator...
sub postfix:<%> (Numeric $x) { $x / 100 }

# Start with 100% of the pie, and no shares yet...
my $pie = 100%;
my %share;

# For everyone in line...
for 1..100 -> $N {
    # Remove a share for the Nth person from the pie...
    $pie -= ( %share{$N} = $pie * $N% );
}

# Finally, report the share(s) with maximal values...
say %share.maxpairs;
```

Notice how this script create a `%` postfix operator that divides its argument by 100, thus making the rest of the code clearer, without having to comment that these numbers represent percentage.

But Damian isn't satisfied when he sees a hash being populated and then used *only once*, and in that case, he often prefers to use `gather/take`. So, he would like to use something along these lines:

``` Perl6
# Attention: code not working
say maxpairs gather for 1..100 -> $N {
    state $pie = 100%;
    $pie -=  my $share = $pie * $N%;
    take $N => $share;
}
```

But that wouldn't work, because the `maxpairs` built-in is defined only as a method, not as a function. So Damian proceeds with writing a new `maxpairs` function, well, not one, but actually three multi functions doing almost the same, but with different types of input parameters (lists of pairs, hashes, general lists, etc.) that he wants to use in the rest of his post. I won't go in to the details.

Let me just point out, though, that it is possible to use the built-in `maxpairs` method with `gather/take` with just a little bit of syntax tweak;

``` Perl6
sub postfix:<%> (Numeric $x) { $x / 100 };
(gather for 1..100 -> $N {
    state $pie = 100%;
    $pie -=  my $share = $pie * $N%;
    take $N => $share;
}).Hash.maxpairs.say;
```

This program outputs:

    (10 => 0.06281565095552947)

Damian then covers several other solutions (sequential pie, functional pie, mathematical pie, and even visual pie showing a graph of the shares, using the `SVG` and `SVG.Plot` Perl 6 modules).

I will not try to summarize all that, you should really read [Damian's post](http://blogs.perl.org/users/damian_conway/2019/07/six-slices-of-pie.html), you'll for sure learn a lot from it.

## See Also

Three blog posts on the Pythagoras pie:

* Arne Sommer: https://perl6.eu/pythagoras-bitcoin.html.

* Athanasius: http://blogs.perl.org/users/athanasius/2019/07/perl-weekly-challenge-016.html. Athanasius observes that if the 100th guest got only one single atom of carbon-12 (not seeing how a piece of the pie could be smaller than a single atom), then the original pie must have a mass of *at least* 21.4 billion metric tons. Oh boy, that was quite a party! I would add that the 10th guest probably had quite some problems finishing his or her share (1.34 billion tons).

* Damian Conway: http://blogs.perl.org/users/damian_conway/2019/07/six-slices-of-pie.html.


## Wrapping up

Please let me know if I forgot any of the challengers or if you think my explanation of your code misses something important.

If you want to participate to the Perl Weekly Challenge, please connect to [this site](https://perlweeklychallenge.org/).
