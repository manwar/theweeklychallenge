---
title: "BLOG: The Weekly Challenge #070"
date: 2020-07-26T00:00:00+00:00
description: "Blog for the weekly challenge #070."
type: post
image: images/blog/weekly-challenge-070.jpg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

# HEADLINE

Before I talk about my contribution this week, I would like to talk about my encounter with **Swift** programming language recently. For the first time, I felt confident that I can share my **[Swift](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-070/mohammad-anwar/swift/ch-1.swift)** solution to the **Character Swapping** task of the **[Perl Weekly Challenge - 070](/blog/perl-weekly-challenge-070)**. Why **Task #1** only? Well, you guessed it correctly because it is meant for the beginners. With the submission of my first contribution in **Guest Language**, I now find myself in the **Guest List** as you must have seen in **[RECAPS](https://perlweeklychallenge.org/recaps)** every week. In the next edition of **RECAPS**, you would see my name in the list with other prominent guests. Ever since I started the **Guest List**, I always wanted to be a part of it but never had the courage to try new language other than **Perl** and **Raku**. While I am talking about **Guest List**, I would like to mention the first guest who started the trend was **Orestis Zekai** with the **Python** contributions in the **[Week #018](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-018/orestis-zekai/python)**.

Enough of **Swift** talk, let us focus on **Perl** and **Raku** contributions of the **Week #070**.

Luckily this week both the tasks didn't trouble me much. For **Gray Code Sequence**, I borrowed code from **[Perl Cookbook](https://www.oreilly.com/library/view/perl-cookbook/1565922433/ch02s05.html)** to convert **Binary** into **Decimal**. As far as **Raku** is concerned, I found a clever solution for the same.

I have made **Live Coding** videos for this week tasks in **Perl**. If do like the video then please subscribe my **[YouTube Channel](https://www.youtube.com/channel/UCT91RkThBWByo1NL_M8R8Ig)**.

### [Task #1: Character Swapping](https://www.youtube.com/watch?v=sJyOV_o73zs)
### [Task #2: Gray Code Sequence](https://www.youtube.com/watch?v=el3ri9s1eDc)

<br>

Let me share my solutions to the **[Perl Weekly Challenge - 070](/perl-weekly-challenge-070)**.

***
## TASK #1 › Character Swapping
#### Submitted by **[Mohammad S Anwar](http://www.manwar.org)**
***

You are given a string `$S` of size `$N`.

You are also given swap count `$C` and offset `$O` such that $C >= 1, $O >= 1, $C <= $O and $C + $O <= $N.

***

<br>

For the task **Character Swapping**, the **sub swap()** below did the job without any complain. This is the literal translation of the steps mentioned in the task itself.

```perl
sub swap {
    my ($string, $count, $offset) = @_;

    my $length = length($string);
    my @array  = split //, $string;
    foreach my $i (1..$count) {
        my $a = $i % $length;
        my $b = ($i + $offset) % $length;
        ($array[$a], $array[$b]) = ($array[$b], $array[$a]);
    }

    return join '', @array;
}
```

For **Raku**, I went with **comb()** and not **split()** as I learnt recently. The **comb()** is ideal in this scenario. Rest of the stuff are usual **Raku** magic.

For my fellow **Perl Hackers**,

The `my $length = length($string);` in **Perl** became `my $length = $string.chars;`.

Similarly, `my @array = split //, $string;` became `my @array = $string.comb;`

Finally `return join '', @array;` became `return @array.join('');`

```perl6
sub swap(Str $string, Int $count, Int $offset) {

    my $length = $string.chars;
    my @array  = $string.comb;
    for 1..$count -> $i {
        my $a = $i % $length;
        my $b = ($i + $offset) % $length;
        (@array[$a], @array[$b]) = (@array[$b], @array[$a]);
    }

    return @array.join('');
}
```

Time to get the solution in **Perl** first like below. I have used the example from the task as my default data.

```perl
use strict;
use warnings;

my $S = $ARGV[0] || 'perlandraku';
my $C = $ARGV[1] || 3;
my $O = $ARGV[2] || 4;

print sprintf("%s => %s\n", $S, swap($S, $C, $O));
```

**Raku** is showing off the power of **sub MAIN()** making code looks cleaner for sure.

```perl6
use v6.d;

sub MAIN(Str :$S = 'perlandraku', Int :$C = 3, Int :$O = 4) {
    ($S, swap($S, $C, $O)).join(' => ').say;
}
```

The good old friend `Test::More` dealing with unit test in **Perl**. Here I used both examples from the task as my test cases.

```perl
use Test::More;

is(swap('perlandraku', 3, 4),
   'pndraerlaku',
   'testing perlandraku.');

is(swap('weeklychallenge', 5, 2),
   'wklycheeallenge',
   'testing weeklychallenge.');

done_testing;
```

Near identical to the **Perl** except one bit, here I didn't use parenthesis around `is()`.

```perl6
use Test;

is swap('perlandraku', 3, 4),
   'pndraerlaku',
   'testing perlandraku.';

is swap('weeklychallenge', 5, 2),
   'wklycheeallenge',
   'testing weeklychallenge.';

done-testing;
```

***
## TASK #2 › Gray Code Sequence
#### Submitted by **[Mohammad S Anwar](http://www.manwar.org)**
***

You are given an integer `2 <= $N <= 5`.

Write a script to generate `$N-bit` [gray code sequence](https://www.tutorialspoint.com/what-is-gray-code).

***

<br>

This was fun task as compared to the **Task #1**. Once again the task had all the finer details. It really helped in getting the job done. For this task, I borrowed code from the famous **[Perl Cookbook](https://www.oreilly.com/library/view/perl-cookbook/1565922433/ch02s05.html)** to convert binary into decimal i.e. `sub bin2dec()`.

```perl
sub generate_gray_code_sequence {
    my ($n) = @_;

    my %S = (
        2 => ['00', '01', '11', '10'],
    );

    foreach my $i (3 .. $n) {
        my $S1 = $S{$i - 1};
        my $S2 = [ reverse @$S1 ];
        $_ = '0' . $_ foreach @$S1;
        $_ = '1' . $_ foreach @$S2;
        $S{$i} = [ @$S1, @$S2 ];
    }

    my @gray_codes = ();
    push @gray_codes, bin2dec($_) foreach (@{$S{$n}});

    return @gray_codes;
}
```

```perl
sub bin2dec {
    return unpack("N", pack("B32", substr("0" x 32 . shift, -32)));
}
```

Just for my fellow **Perl Hackers**, I would like to point out few bits here:

The line `my $S1 = %S{$i - 1};` should come as surprise for **Perl Hackers**, in **Raku** we use `%` sigil to reference hash.

The following line does a lot and very different from **Perl** world. `$S1.reverse` reverse the contents of the list `$S1`.

If you noticed the symbol `|` prefixed.

What does it do?

If I am not wrong then it expands the list.

```perl6
sub generate-gray-code-sequence(Int $n) {

    my %S = (
        2 => ['00', '01', '11', '10'],
    );

    for 3 .. $n -> $i {
        my $S1 = %S{$i - 1};
        my $S2 = [ |$S1.reverse ];
        $S1.map({ $_ = '0' ~ $_ });
        $S2.map({ $_ = '1' ~ $_ });
        %S{$i} = [ |$S1, |$S2 ];
    }

    my @gray_codes = ();
    for %S{$n} -> $list {
        for |$list -> $binary {
            @gray_codes.push: to-decimal($binary);
        }
    }

    return |@gray_codes;
}
```

Did you notice the use of `sub to-decimal()`? It is user defined subroutine like below:

```perl6
sub to-decimal(Str $binary) {
    return ":2<$binary>".Int;
}
```

Time to get the **Perl** solution done with the help of above subroutine.

```perl
use strict;
use warnings;

my $N = $ARGV[0] || 3;

print sprintf("%d-bit Gray Code Sequence:\n[%s]\n",
              $N, join ', ', generate_gray_code_sequence($N));
```

**Raku** solution looks like below, a very thin wrapper around the above subroutine.

```perl6
use v6.d;

sub MAIN(Int :$N = 3) {
    say sprintf("%d-bit Gray Code Sequence:\n[%s]",
                $N, generate-gray-code-sequence($N).join(', '));
}
```

Standard unit test in **Perl**.

```perl
use Test::More;
use Test::Deep;

is_deeply( [ generate_gray_code_sequence(3) ],
           [ 0, 1, 3, 2, 6, 7, 5, 4 ],
           'testing 3-bit gray code sequence.' );

is_deeply( [ generate_gray_code_sequence(4) ],
           [ 0, 1, 3, 2, 6, 7, 5, 4, 12, 13, 15, 14, 10, 11, 9, 8 ],
           'testing 4-bit gray code sequence.' );

done_testing;
```

Same goes with **Raku**.

```perl6
use Test;

is-deeply generate-gray-code-sequence(3),
          (0, 1, 3, 2, 6, 7, 5, 4),
          'testing 3-bin grey code sequence.';

is-deeply generate-gray-code-sequence(4),
          (0, 1, 3, 2, 6, 7, 5, 4, 12, 13, 15, 14, 10, 11, 9, 8),
          'testing 4-bit grey code sequence.';

done-testing;
```

***

That's it for this week. Speak to you soon.
