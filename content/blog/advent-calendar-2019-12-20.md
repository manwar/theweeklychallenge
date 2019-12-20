---
title: "Advent Calendar - December 20, 2019"
date: 2019-12-20T00:00:00+00:00
description: "Advent Calendar - December 20, 2019"
type: post
image: images/blog/2019-12-20.jpg
author: Roger Bell_West
tags: ["Perl", "Raku"]
---

[**Advent Calendar 2019**](/blog/advent-calendar-2019)
***

The gift is presented by [**Roger Bell_West**](/blog/meet-the-champion-026). Today he is talking about his solutions to **Task #2: Word Game** of [**"The Weekly Challenge - 038"**](/blog/perl-weekly-challenge-038).

#### Lets assume we have tiles as listed below, with an alphabet (A..Z) printed on them. Each tile has a value, e.g. A (1 point), B (4 points) etc. You are allowed to draw 7 tiles from the lot randomly. Then try to form a word using the 7 tiles with maximum points altogether. You don’t have to use all the 7 tiles to make a word. You should try to use as many tiles as possible to get the maximum points.

***

The word game problem gives a series of tile counts and values (e.g. 8 A tiles worth 1 point each); the problem is to draw 7 at random, then make the highest-scoring word out of them (not necessarily using all of them).

## PERL SOLUTION

```perl
    my $l=7;

    my %tilecount=(
        A => 8,
        G => 3,
        I => 5,
        S => 7,
        U => 5,
        X => 2,
        Z => 5,
        E => 9,
        J => 3,
        L => 3,
        R => 3,
        V => 3,
        Y => 5,
        F => 3,
        D => 3,
        P => 5,
        W => 5,
        B => 5,
        N => 4,
        T => 5,
        O => 3,
        H => 3,
        M => 4,
        C => 4,
        K => 2,
        Q => 2,
    );

    my %tilevalue=(
        A => 1,
        G => 1,
        I => 1,
        S => 1,
        U => 1,
        X => 1,
        Z => 1,
        E => 2,
        J => 2,
        L => 2,
        R => 2,
        V => 2,
        Y => 2,
        F => 3,
        D => 3,
        P => 3,
        W => 3,
        B => 4,
        N => 4,
        T => 5,
        O => 5,
        H => 5,
        M => 5,
        C => 5,
        K => 10,
        Q => 10,
    );
```

For the draw, we turn the **%tilecount hash** into a single long list, shuffle it, and throw away all but the first 7 entries. (shuffle is from **List::Util**)

```perl
    my @bag=shuffle map {($_) x $tilecount{$_}} keys %tilecount;
    splice @bag,$l;
```

Load a candidate word list. (I used a copy of [**SOWPODS**](https://en.wikipedia.org/wiki/Collins_Scrabble_Words) I have hanging around, which is my standard reference for word validation problems.) We ignore anything longer than **7 characters**.

```perl
    my %w;
    open I,'<','wordlist';
    while (<I>) {
        chomp;
        if (length($_)<=$l) {
            $w{uc($_)}=1;
        }
    }
    close I;
```

Set up the accumulators for tracking high-scoring words.

```perl
    my $maxscore=0;
    my @maxcandidate;
    my %tried;
```

Set up the variables for my permutation generator (I'll be using the **Steinhaus-Johnson-Trotter algorithm** with **Even**'s optimisation). **@permute** contains a set of indices into **@bag**.

(There's an obvious alternative approach to the problem, which I'll come back to at the end, but let's stick with the permuter for now.)

```perl
    my @permute=(0..$#bag);
    my @dir=(-1) x @permute;
    $dir[0]=0;

    while (1) {
```

For each permutation, we build a list **@candidate** consisting of the letters in order. Then we try to validate that as a word. (We also skip over any words we've seen before, since they may appear multiple times as different candidates get shortened; for example, the permutations **ABCDEFG** and **ABCGEFD** would both produce **ABC** if no longer candidate were valid.)

```perl
    my @candidate=map {$bag[$_]} @permute;
    while (@candidate) {
        my $candidate=join('',@candidate);
        if (exists $tried{$candidate}) {
            last;
        }
        $tried{$candidate}=1;
        if (exists $w{$candidate}) {
```

If so, we calculate the score, and in a two-stage trick of my own ensure that @maxcandidate contains all of the **highest-scoring** words.

```perl
            my $score=sum(map {$tilevalue{$_}} @candidate);
            if ($score > $maxscore) {
                @maxcandidate=();
                $maxscore=$score;
            }
            if ($score == $maxscore) {
                push @maxcandidate,$candidate;
            }
```

If that was a valid word, we don't need to look at any shorter words in this permutation; if **ABJURER** is valid, then whether or not **ABJURE** is valid it won't score as many points. (This optimisation wouldn't be true if some letters had negative values. Which might be an interesting variant to Scrabble…)

```perl
            last;
        }
```

This next bit is the permuter. There are various **CPAN** modules that will do this (most obviously **Algorithm::Permute**), but I felt like writing my own.

```perl
        my %find=map {$permute[$_] => $_} (0..$#permute);
        my $m=$#permute;
        while ($m>=0) {
            my $pos=$find{$m};
            unless ($dir[$pos]==0) {
                if ($m > $permute[$pos+$dir[$pos]]) {
                    my $n=$pos+$dir[$pos];
                    my $nn=$n+$dir[$pos];
                    ($permute[$n],$permute[$pos])=($permute[$pos],$permute[$n]);
                    ($dir[$n],$dir[$pos])=($dir[$pos],$dir[$n]);
                    if ($n==0 || $n==$#permute || $permute[$nn] > $m) {
                        $dir[$n]=0;
                    }
                    foreach my $i (0..$#permute) {
                        if ($i==$n) {
                            next;
                        }
                        if ($permute[$i]>$m) {
                            $dir[$i]=($i<$n)?1:-1;
                        }
                    }
                    last;
                }
            }
            $m--;
        }

        if ($m<0) {
            last;
        }
    }
```

Finally, output the list of tiles and the highest scoring words.

```perl
    print join('',sort @bag),"\n";
    print "$maxscore: ",join(' ',sort @maxcandidate),"\n";
```

## RAKU SOLUTION

**Raku** is a bit different, because there are useful built-in language features:

```perl6
    my $tilecount=(
        'A' => 8,
        'G' => 3,
        'I' => 5,
        'S' => 7,
        'U' => 5,
        'X' => 2,
        'Z' => 5,
        'E' => 9,
        'J' => 3,
        'L' => 3,
        'R' => 3,
        'V' => 3,
        'Y' => 5,
        'F' => 3,
        'D' => 3,
        'P' => 5,
        'W' => 5,
        'B' => 5,
        'N' => 4,
        'T' => 5,
        'O' => 3,
        'H' => 3,
        'M' => 4,
        'C' => 4,
        'K' => 2,
        'Q' => 2,
    ).BagHash;

    my %tilevalue=(
        'A' => 1,
        'G' => 1,
        'I' => 1,
        'S' => 1,
        'U' => 1,
        'X' => 1,
        'Z' => 1,
        'E' => 2,
        'J' => 2,
        'L' => 2,
        'R' => 2,
        'V' => 2,
        'Y' => 2,
        'F' => 3,
        'D' => 3,
        'P' => 3,
        'W' => 3,
        'B' => 4,
        'N' => 4,
        'T' => 5,
        'O' => 5,
        'H' => 5,
        'M' => 5,
        'C' => 5,
        'K' => 10,
        'Q' => 10,
    );

```

The **grab** method on a **BagHash** gives me a series of weighted random picks, without replacement. This is a really handy thing to have; lots of code I write does things a bit like this.

```perl6
    my @bag=$tilecount.grab($l);

    my %w;
    my $fh=open :r,'wordlist';
    for $fh.lines {
        if ($_.chars <= $l) {
            %w{$_.uc}=1;
        }
    }
    close $fh;
```

Similarly, all that permuting algorithm can be replaced with another core feature:

```perl6

    my $maxscore=0;
    my @maxcandidate;
    my %tried;

    for @bag.permutations -> $n {
        my @candidate=$n.list;
        while (@candidate) {
            my $candidate=join('',@candidate);
            if (%tried{$candidate}:exists) {
                last;
            }
            %tried{$candidate}=1;
            if (%w{$candidate}:exists) {
                my $score=sum(map {%tilevalue{$_}}, @candidate);
                if ($score > $maxscore) {
                    @maxcandidate=();
                    $maxscore=$score;
                }
                if ($score == $maxscore) {
                    @maxcandidate.push($candidate);
                }
                last;
            }
            @candidate.pop;
        }
    }

    print join('',sort @bag),"\n";
    print "$maxscore: ",join(' ',sort @maxcandidate),"\n";
```

Which is less fun to write than the **SJT permuter** above but also less effort. (Now, if only the startup, loading up all these features that are nice to have but most of which a given program won't use, weren't so slow…)

## ADDENDUM

The alternative approach is to read each word from the dictionary, see if it can be constructed with the available tiles, and if so score it. I wrote this in **Perl** for the blog post, to see how the performance differed. After constructing the bag:

```perl
open I,'<','wordlist';
while (<I>) {
  chomp;
  if (length($_)<=$l) {
    my $candidate=uc($_);
    my @candidate=split '',$candidate;
```

**%l** holds letter counts. We add one to a value each time the letter occurs in the word, then subtract one each time it occurs in the bag. If any value is positive at the end, it occurred more in the word than it did in the bag, so it's not a word we can make. (This could possibly be optimised a bit by precalculating the hash with the bag values subtracted.)

```perl
    my %l;
    map {$l{$_}++} @candidate;
    map {$l{$_}--} @bag;
    if (max(values %l) > 0) {
      next;
    }
```

At this point we have a word that can be constructed from the available tiles, so just as before we score it.

```perl

    my $score=sum(map {$tilevalue{$_}} @candidate);
    if ($score > $maxscore) {
      @maxcandidate=();
      $maxscore=$score;
    }
    if ($score == $maxscore) {
      push @maxcandidate,$candidate;
    }
  }
}
close I;
print join('',sort @bag),"\n";
print "$maxscore: ",join(' ',sort @maxcandidate),"\n";
```

To test it, I used **parallel(1)** to run **800 instances** (thus 8 at a time on my 8-core desktop, a new one being invoked whenever the previous one had finished). This variant took about **34 seconds** to complete all **800**; my original permuter code took about **14**. I suspect that this is because my original code can skip score calculations on many words (see **ABJURE/ABJURER** above); to achieve this with the variant code would require the word list to be ordered appropriately with **ABJURER** before **ABJURE**, which would take time to set up.

The downside, of course, is that I have to hold the valid word list in memory. But **SOWPODS** is **2.6 megabytes**, which isn't a problem for any vaguely non-antique machine.

***
If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2019**](/blog/advent-calendar-2019)
