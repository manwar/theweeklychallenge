---
title: "Advent Calendar - December 5, 2024"
date: 2024-12-04T00:00:00+00:00
description: "Advent Calendar - December 5, 2024."
type: post
image: images/blog/2024-12-05.jpg
author: Laurent Rosenfeld
tags: ["Perl", "Raku"]
---

## [**Advent Calendar 2024**](/blog/advent-calendar-2024)
### | &nbsp; [**Day 4**](/blog/advent-calendar-2024-12-04) &nbsp; | &nbsp; **Day 5** &nbsp; |
***

The gift is presented by `Laurent Rosenfeld`. Today he is talking about his solution to [**The Weekly Challenge - 255**](/blog/perl-weekly-challenge-255). This is re-produced for `Advent Calendar 2024` from the original [**post 1**](https://blogs.perl.org/users/laurent_r/2024/02/perl-weekly-challenge-255-odd-character.html). and [**post 2**](https://blogs.perl.org/users/laurent_r/2024/02/perl-weekly-challenge-255-most-frequent-word.html).

***

<br>

## Task 1: Odd Character
***

<br>

    You are given two strings, $s and $t.
    The string $t is generated using the shuffled characters of the string $s with an additional character.

    Write a script to find the additional character in the string $t.

<br>

### Odd Character in Raku
***

<br>

This task is really simple in `Raku`: we simply convert each input string into a `Bag` of its letters, and then use the `(-) infix` set difference operator to find the extra item in `$t`. So we end up with a short one-line subroutine.

<br>

```perl
sub odd-char ($s, $t) {
    return ~ ($t.comb.Bag (-) $s.comb.Bag);
}

for <Perl Preel>, <Weekly Weeakly>, <Box Boxy> -> @test {
    printf "%-8s %-8s => ", @test;
    say odd-char @test[0], @test[1];
}
```

<br>

This program displays the following output:

<br>

```perl
$ raku ./odd-characters.raku
Perl     Preel    => e
Weekly   Weeakly  => a
Box      Boxy     => y
```

<br>

### Odd Character in Perl
***

<br>

The solution is slightly more complicated in `Perl`, because `Perl` doesn't have `Bags` and `set` difference operators. We can easily replace bags with hashes (with values being the frequency of each letter). Then we have to find the extra hash item in `%t`.

<br>

```perl
use strict; use warnings; use feature 'say';

sub odd_char {
    my (%s, %t);
    %s = map { $_ => ++$s{$_} } split //, $_[0];
    %t = map { $_ => ++$t{$_} } split //, $_[1];
    my @result = grep { (not defined $s{$_})
        or $t{$_} - $s{$_} > 0 } keys %t;
}

for my $test ([<Perl Preel>], [<Weekly Weeakly>], [<Box Boxy>]) {
    printf "%-8s %-8s => ", @$test;
    say odd_char $test->[0], $test->[1];
}
```

<br>

This program displays the following output:

<br>

```perl
$ perl  ./odd-characters.pl
Perl     Preel    => e
Weekly   Weeakly  => a
Box      Boxy     => y
```

<br>

## Task 2: Most Frequent Word
***

<br>

    You are given a paragraph $p and a banned word $w.

    Write a script to return the most frequent word that is not banned.

<br>

### Most Frequent Word in Raku
***

<br>

We first use the `tr///` in-place transliteration operator to remove punctuation characters from the input paragraph, which makes it possible to use the words to split the paragraph into words. We then use `grep` to remove the banned word from the word list and convert the resulting list into a `Bag`, histo (for histogram). Finally, we return the item from the bag having the highest frequency.

<br>

```perl
sub most-frequent-word ($para is copy, $banned) {
    $para ~~ tr/,.:;?!//;
    my $histo = $para.words.grep({$_ ne $banned}).Bag;
    return $histo.keys.max({$histo{$_}});
}

my $t = "Joe hit a ball, the hit ball flew far after it was hit.";
printf "%-30s... => ", substr $t, 0, 28;
say most-frequent-word $t, "hit";

$t = "Perl and Raku belong to the same family. Perl is the most popular language in the weekly challenge.";
printf "%-30s... => ", substr $t, 0, 28;
say most-frequent-word $t, "the";
```

<br>

This program displays the following output:

<br>

```perl
$ raku ./most-frequent-word.raku
Joe hit a ball, the hit ball  ... => ball
Perl and Raku belong to the   ... => Perl
```

<br>

### Most Frequent Word in Perl
***

<br>

This is a port to `Perl` of the `Raku` program above, using a `hash` instead of a `Bag` and the `split` function instead of words.

<br>

```perl
use strict;
use warnings;
use feature 'say';

sub most_frequent_word {
    my ($para, $banned) = @_;
    $para =~ tr/,.:;?!//;
    my %histo;
    %histo = map { $_ => ++$histo{$_} }
        grep {$_ ne $banned} split /\W/, $para;
    return (sort { $histo{$b} <=> $histo{$a} } keys %histo )[0];
}

my $t = "Joe hit a ball, the hit ball flew far after it was hit.";
printf "%-30s... => ", substr $t, 0, 28;
say most_frequent_word $t, "hit";

$t = "Perl and Raku belong to the same family. Perl is the most popular language in the weekly challenge.";
printf "%-30s... => ", substr $t, 0, 28;
say most_frequent_word $t, "the";
```

<br>

This program displays the following output:

<br>

```perl
$ perl ./most-frequent-word.pl
Joe hit a ball, the hit ball  ... => ball
Perl and Raku belong to the   ... => Perl
```

<br>

***

If you have any suggestion then please do share with us **<perlweeklychallenge@yahoo.com>**.

| &nbsp; [**Advent Calendar 2024**](/blog/advent-calendar-2024) &nbsp; |
