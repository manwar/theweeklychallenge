---
title: "BLOG: The Weekly Challenge #066"
date: 2020-06-29T00:00:00+00:00
description: "Blog for the weekly challenge #066."
type: post
image: images/blog/weekly-challenge-066.jpg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

# HEADLINE

The much awaited event, **Conference in the Cloud" took most of my **free** time. Having said that I still managed to do **Live Coding YouTube** videosfor **[Divide Integers](https://www.youtube.com/watch?v=8sq2Aocabpk)** and **[Power Integers](https://www.youtube.com/watch?v=_NZHQSvFYcQ)**.

I really enjoyed both tasks, specially **Power Integers**. It didn't take long to solve both tasks. I was able to get it done by midweek. But for **YouTube** video, I had to wait until the conference was over. Thanks to the Chief Editor of **[Perl Weekly newletter](https://perlweekly.com/archive/465.html)** editorial note, I now have **67 subscribers** to my **[YouTube Channel](https://studio.youtube.com/channel/UCT91RkThBWByo1NL_M8R8Ig)**. I would like to thank each and every subscriber. I promise to do regular video every week.

Let me share my solutions to the **[Perl Weekly Challenge - 066](/perl-weekly-challenge-066)**.

***
## TASK #1 › Divide Integers
#### Submitted by **[Mohammad S Anwar](http://www.manwar.org)**
***

You are given two integers `$M` and `$N`.

Write a script to divide the given two integers i.e. `$M / $N` without using multiplication, division and mod operator and return the floor of the result of the division.

***

<br>

For the first task **Divide Integers**, I created **sub natural_div()** as below. It does everything that is required for this task. As per thr tradition that I follow generally, I started with standard parameter checking. Based on the example, I had to deal with the signs as well.

```perl
sub natural_div {
    my ($m, $n) = @_;

    die "ERROR: Missing dividend.\n" unless defined $m;
    die "ERROR: Missing divisor.\n"  unless defined $n;
    die "ERROR: Dividend > Divisor [$m / $n].\n"     unless abs($m) > abs($n);
    die "ERROR: Invalid divisor [$n], can't be 0.\n" if $n == 0;

    my $sign = '';
    if ($m < 0) {
        $sign = '-' if ($n > 0);
    }
    else {
        $sign = '-' if ($n < 0);
    }

    my $abs_m = abs($m);
    my $abs_n = abs($n);

    my $i = 0;
    for ($i = 0; $abs_m >= $abs_n; $i++) {
        $abs_m -= $abs_n;
    }

    $i++ if ($sign ne '');

    return sprintf("%s%d", $sign, $i);
}
```

Standard **Perl** to **Raku** translation and we have **sub natural-div()**.

```perl6
sub natural-div(Int $m, Int $n where $n != 0) {

    my $sign = '';
    if $m < 0 {
        $sign = '-' if $n > 0;
    }
    else {
        $sign = '-' if $n < 0;
    }

    my $abs_m = abs($m);
    my $abs_n = abs($n);

    my $i = 0;
    for 0 .. $abs_n {
        last if $abs_m <= $abs_n;
        $abs_m -= $abs_n;
        $i++;
    }

    $i++ if $sign ne '';

    return sprintf("%s%d", $sign, $i);
}
```

**Perl** standalone app using the **sub natural_div()**.

```perl
use strict;
use warnings;

my $M = $ARGV[0];
my $N = $ARGV[1];

print sprintf("%d / %d = %s\n", $M, $N, natural_div($M, $N));
```

Similar **Raku** app using the **sub natural-div()**,

```perl6
use v6.d;


sub MAIN(Int :$M = -5, Int :$N where { $N != 0 } = 2) {
    say sprintf("%d / %d = %s", $M, $N, natural-div($M, $N));
}
```

Completed with unit test as below.

```perl
use strict;
use warnings;

use POSIX;
use Test::More;

is (natural_div( 5,  2), floor( 5 /  2), ' 5 /  2 =  2');
is (natural_div(-5,  2), floor(-5 /  2), '-5 /  2 = -3');
is (natural_div(-5, -2), floor(-5 / -2), '-5 / -2 =  2');

done_testing;
```

Along with **Raku** unit test.

```perl6
use Test;

is natural-div( 5,  2),  2, ' 5 /  2 =  2';
is natural-div(-5,  2), -3, '-5 /  2 = -3';
is natural-div(-5, -2),  2, '-5 / -2 =  2';

done-testing;
```

***
## TASK #2 › Power Integers
#### Submitted by **[Mohammad S Anwar](http://www.manwar.org)**
***

You are given an integer `$N`.

Write a script to check if the given number can be expressed as **m<sup>n</sup>** where `m` and `n` are positive integers. Otherwise print 0.

Please make sure `m > 1` and `n > 1`.

#### BONUS: If there are more than one ways to express the given number then print all possible solutions.

***

<br>

Below is the **sub get_power_integers()** returns all possible solutions.

```perl
sub get_power_integers {
    my ($n) = @_;

    my $power_integers = [];

    my $i = 2;
    while ( $i <= sqrt($n) ) {
        my $j = 2;
        while ( $j <= $n ) {
            if (($i ** $j) == $n) {
                push @$power_integers, sprintf("%d ^ %d", $i, $j);
            }
            $j++;
        }
        $i++;
    }

    $power_integers = [0] unless scalar(@$power_integers);

    return $power_integers;
}
```

Doing **Raku** version was fun as you can see below.

```perl6
sub get-power-integers(Int $n where { $n > 1 }) {

    my $power_integers = [];

    my $i = 2;
    while $i <= sqrt($n) {
        my $j = 2;
        while $j <= $n {
            if ($i ** $j) == $n {
                $power_integers.push: sprintf("%d ^ %d", $i, $j);
            }
            $j++;
        }
        $i++;
    }

    return $power_integers if $power_integers.elems > 0;
    return 0;
}
```

**Perl** app for the **Power Integers** task.

```perl
use strict;
use warnings;

my $N = $ARGV[0];
print sprintf("%d = %s\n", $N, join(", ", @{get_power_integers($N)}));
```

Similar **Raku** app for the same task.

```perl6
use Test;

is sprintf("%d = %s", 9, get-power-integers(9).join(", ")),
   '9 = 3 ^ 2',
   '9 = 3 ^ 2';
is sprintf("%d = %s", 45, get-power-integers(45).join(", ")),
   '45 = 0',
   '45 = 0';
is sprintf("%d = %s", 64, get-power-integers(64).join(", ")),
   '64 = 2 ^ 6, 4 ^ 3, 8 ^ 2',
   '64 = 2 ^ 6, 4 ^ 3, 8 ^ 2';

done-testing;
```

**Perl** unit test.

```perl
use strict;
use warnings;

use Test::More;
use Test::Deep;

is_deeply(get_power_integers(9),
          ['3 ^ 2'],
          ' 9 = 3 ^ 2');
is_deeply(get_power_integers(45),
          [ 0 ],
          '45 = 0');
is_deeply(get_power_integers(64),
          ['2 ^ 6', '4 ^ 3', '8 ^ 2'],
          '64 = 2 ^ 6, 4 ^ 3, 8 ^ 2');

done_testing;
```

Finally **Raku** unit test in the end.

```perl6
use Test;

is sprintf("%d = %s", 9, get-power-integers(9).join(", ")),
   '9 = 3 ^ 2',
   '9 = 3 ^ 2';
is sprintf("%d = %s", 45, get-power-integers(45).join(", ")),
   '45 = 0',
   '45 = 0';
is sprintf("%d = %s", 64, get-power-integers(64).join(", ")),
   '64 = 2 ^ 6, 4 ^ 3, 8 ^ 2',
   '64 = 2 ^ 6, 4 ^ 3, 8 ^ 2';

done-testing;
```

***

That's it for this week. Speak to you soon.
