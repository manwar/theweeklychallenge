---
title: "BLOG: The Weekly Challenge #065"
date: 2020-06-21T00:00:00+00:00
description: "Blog for the weekly challenge #065."
type: post
image: images/blog/weekly-challenge-065.jpg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

# HEADLINE

Having missed the blog last week, I wanted to make sure it doesn't happen again. I did catch up the last week blog this week. How did I get time this week around? Well, I delayed **Live Coding** session for **Perl** and **Raku** until Sunday.

As of now, I have done 2 videos, one each for both tasks in **Perl**. I am planning to do one more later in the evening in **Raku** just for **"Digits Sum"** task.

#### [Task #1: Digits Sum](https://www.youtube.com/watch?v=m2tTUrq1YPg)
#### [Task #2: Palindrome Partition](https://www.youtube.com/watch?v=eM1DuYYo1rs)

I really enjoyed both tasks this week. It was fun for me at least.

Let me share my solutions to the **[Perl Weekly Challenge - 065](/perl-weekly-challenge-065)**.

<br>

***
## TASK #1 › Digits Sum
#### Submitted by **[Mohammad S Anwar](http://www.manwar.org)**
#### Reviewed by **[Ryan Thompson](https://ry.ca)**
***

You are given two positive numbers `$N` and `$S`.

Write a script to list all positive numbers having exactly `$N` digits where sum of all digits equals to `$S`.

***

<br>

The **sub find_numbers()** is doing all the hard work, although not much is going on in this case. Use of `List::Util` made the task like a cake walk. The code is self explanatory and doesn't need any explanation.

```perl
sub find_numbers {
    my ($digits, $sum) = @_;

    die "ERROR: Missing digits.\n" unless defined $digits;
    die "ERROR: Missing sum.\n"    unless defined $sum;

    die "ERROR: Invalid digits [$digits].\n" unless ($digits =~ /^[0-9]+$/);
    die "ERROR: Invalid sum [$sum].\n"       unless ($sum    =~ /^[0-9]+$/);

    my $start = sprintf("%d", '1' . '0' x ($digits-1));
    my $end   = sprintf("%d", '9' x $digits);
    --$start;

    my @numbers;
    while (++$start <= $end) {

        my @digits = split //, $start;
        next if (grep { $_ > $sum } @digits);

        my $SUM = sum @digits;
        next if ($SUM != $sum);

        push @numbers, $start;
    }

    return @numbers;
}
```

Doing the **Raku** version was more satisfying. The end result looked so much cleaner with the help of method chaining.

```perl6
sub find-numbers(Int $N, Int $S) {

    my $start = ('1' ~ '0' x ($N - 1)).Int;
    my $end   = ('9' x $N).Int;

    return ($start .. $end).grep( -> $n { $S == $n.split('').sum });
}
```

Here is my one-liner **Perl** app.

```perl
use List::Util qw(sum);

my $N = $ARGV[0] || 2;
my $S = $ARGV[1] || 4;

print sprintf("%s\n", join(", ", find_numbers($N, $S)));
```

and the same goes with **Raku** as well.

```perl6
use v6.d;

sub MAIN(Int :$N? where { $N > 1 } = 2, Int :$S? where { $S > 0 } = 4) {

    find-numbers($N, $S).join(", ").say;
}
```

Unit test for **Perl** solution looks like below.

```perl
use Test::More;
use List::Util qw(sum);

is sprintf("%s", join(", ", find_numbers(2, 4))),
   "13, 22, 31, 40",
   "\$N=2 \$S=4";
is sprintf("%s", join(", ", find_numbers(3, 26))),
   "899, 989, 998",
   "\$N=3 \$S=26";
is sprintf("%s", join(", ", find_numbers(3, 30))),
   "",
   "\$N=3 \$S=30";

done_testing;
```

**Raku** unit test solution is not behind either.

```perl6
use Test;

is find-numbers(2, 4),  (13, 22, 31, 40), 'N=2, S=4';
is find-numbers(3, 26), (899, 989, 998),  'N=3, S=26';
is find-numbers(3, 30), (),               'N=3, S=30';

done-testing;
```

<br>

***
## TASK #2 › Palindrom Partition
#### Submitted by **[Mohammad S Anwar](http://www.manwar.org)**
#### Reviewed by **[Ryan Thompson](https://ry.ca)**
***

You are given a string `$S`. Write a script print all possible partitions that gives Palindrome. Return -1 if none found.

Please make sure, partition should not overlap. For example, for given string "abaab", the partition "aba" and "baab" would not be valid, since they overlap.

***

<br>

I had lots of fun working on this task as I took the liberty to express myself freely. I am pretty sure, it is not the best solution but I liked it. I skipped one solution `'aa', 'aa'` as compared to many other members came up with. Having said it would not be difficult to include it either.

```perl
sub find_palindromes {
    my ($string) = @_;

    die "ERROR: Missing string.\n"
        unless defined $string;
    die "ERROR: String must have 2 or more alphabets. [$string]\n"
        unless (length($string) >= 2);

    my @partitions = partitions([split //, $string]);
    my %partitions = ();

    foreach my $entry (@partitions) {
        foreach my $partition (@$entry) {
            my $str = join ("", @$partition);
            next if (length($str) == 1
                     ||
                     length($str) == length($string)
                    );

            if (index($string, $str) >= 0) {
                $partitions{$str} = index($string, $str);
            }
        }
    }

    my $index           = 0;
    my $palindromes     = [];
    my %seen_partitions = ();
    foreach my $primary (sort { $partitions{$a} <=> $partitions{$b} }
                         sort keys %partitions) {
        next unless ($primary eq reverse($primary));
        next if (exists $seen_partitions{$primary});

        push @{$palindromes->[$index]}, $primary;
        foreach my $secondary (sort keys %partitions) {
            next unless ($secondary eq reverse($secondary));

            if ($partitions{$secondary} >= $partitions{$primary} + length($primary)) {
                push @{$palindromes->[$index]}, $secondary;
                $seen_partitions{$secondary} = 1;
            }
        }
        $index++;
    }

    push @{$palindromes->[scalar @$palindromes]}, $string
        if ($string eq reverse($string));

    return $palindromes;
}
```

Unlike last week, I managed to complete both tasks in **Raku**. This week, I tried few things for the first time e.g. `$str.defined`, `%hash{$key}:exists`. I am sure you must have guessed it what it is doing. There were bits, I got to try again like sorting hash by value first and then by key. Also reverse a string using `flip`.

```perl6
sub find-partitions(Str $string) {

    my %partitions;
    for ($string.split('')).combinations -> $partition {
        my $str = $partition.join('');
        next if $str.chars == 1 || $str.chars == $string.chars;

        if $str.chars > 1 && $string.index($str).defined {
            %partitions{$str} = $string.index($str);
        }
    }

    my $index = 0;
    my $palindromes     = [];
    my %seen_partitions = ();

    for %partitions.sort({ $^a.value <=> $^b.value
                           ||
                           $^a.key cmp $^b.key
                        }) -> $primary {
        my ($pkey) = $primary.keys;
        my ($pval) = $primary.values;

        next if $pkey ne $pkey.flip;
        next if %seen_partitions{$pkey}:exists;

        $palindromes.[$index].push: $pkey;
        for %partitions.sort -> $secondary {
            my ($skey) = $secondary.keys;
            my ($sval) = $secondary.values;
            next if $skey ne $skey.flip;

            if $sval >= %partitions{$pkey} + $pkey.chars {
                $palindromes.[$index].push: $skey;
                %seen_partitions{$skey} = 1;
            }
        }
        $index++;
    }

    $palindromes.[$palindromes.elems] = $string
        if $string eq $string.flip;

    return $palindromes;
}
```

A very thin wrapper around **sub find_palindromes()** to get the task done in **Perl**.

```perl
use Algorithm::Combinatorics qw(partitions);

my $palindromes = find_palindromes($ARGV[0]);
print sprintf("%s\n", join(", ", @$_)) for @$palindromes;
```

**Raku** solution looks elegant too.

```perl6
use v6.d;

sub MAIN(Str :$string? where $string.chars > 1 = 'aabaab') {
    my $palindromes = find-partitions($string);
    $_.join(", ").say for @$palindromes;
}
```

Complete the task with unit test solution.

```perl
use Test::More;
use Test::Deep;
use Algorithm::Combinatorics qw(partitions);

is_deeply find_palindromes('aabaab'),
          [['aa','baab'],['aabaa'],['aba']],
          'aabaab';
is_deeply find_palindromes('abbaba'),
          [['abba'],['bb','aba'],['bab']],
          'abbaba';
is_deeply find_palindromes('aa'),
          [['aa']],
          'aa';
is_deeply find_palindromes('ab'),
          [],
          'ab';

done_testing;
```

Basic standard unit test in **Raku**.

```perl6
use Test;

is-deeply find-partitions('aabaab'),
          [['aa','baab'],['aabaa'],['aba']],
          'aabaab';
is-deeply find-partitions('abbaba'),
          [['abba'],['bb','aba'],['bab']],
          'abbaba';
is-deeply find-partitions('aa'),
          ['aa'],
          'aa';
is-deeply find-partitions('ab'),
          [],
          'ab';

done-testing;
```

***

That's it for this week. Speak to you soon.
