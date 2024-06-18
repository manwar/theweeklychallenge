---
title: "Advent Calendar - December 8, 2022"
date: 2022-12-08T00:00:00+00:00
description: "Advent Calendar - December 8, 2022."
type: post
image: images/blog/2022-12-08.jpg
author: Cheok-Yin Fung
tags: ["Perl"]
---

## [**Advent Calendar 2022**](/blog/advent-calendar-2022)
### | &nbsp; [**Day 7**](/blog/advent-calendar-2022-12-07) &nbsp; | &nbsp; **Day 8** &nbsp; | &nbsp; [**Day 9**](/blog/advent-calendar-2022-12-09) &nbsp; |
***

The gift is presented by `Cheok-Yin Fung`. Today he is talking about his solution to [**"The Weekly Challenge - 156"**](/blog/perl-weekly-challenge-156). This is re-produced for **Advent Calendar 2022** from the original [**post**](https://e7-87-83.github.io/coding/challenge_156.html) by him.

***

<br>

## CY's Take on The Weekly Challenge #156

#### If you want to challenge yourself on programming, especially on Perl and/or Raku, go to [**https://theweeklychallenge.org**](https://theweeklychallenge.org), code the latest challenges, submit codes on-time (by GitHub or email).

<br>

> Do tell me, if I am wrong or you strongly oppose my statements!

<br>

## It's time for [**challenges in Week #156 !**](https://theweeklychallenge.org/blog/perl-weekly-challenge-156)

<br>

#### Two number theory tasks again.

<br>

## Task 1: Pernicious Number

<br>

In order not to embarrass myself again like what happens in [**Week 138**](https://e7-87-83.github.io/coding/challenge_138t1.html), I had checked out the [**official document**](https://perldoc.perl.org/perlfaq4#How-do-I-convert-between-numeric-representations/bases/radixes) for number-base convertion. OK, `sprintf` works well for `dec -> bin` and `oct` works well for `bin -> dec`.

`Pernicious numbers` appear quite frequently in the regime of positive integers. I just do a simple test:

Randomly choose an integer between one and a large number `$X`, what is the probability that you get a pernicious number?

For `$X = 2_000_000`, the probability is `0.332973`; for `$X = 20_000_000`, the probability is `0.34483485`.

Firstly I coded a simple version:

<br>

```perl
use Math::Prime::Util qw /is_prime/;
my $count = 0;

for (1..3*$N) {
    if (pernicious_simple($_)) {
        say $_;
        $count++;
    }
    last if $count == $N;
}

die "bound too small\n" if $count < $N; # does not happen



sub pernicious_simple {
    my $num = $_[0];
    my $count_one = scalar
                      grep { $_ == 1 } split "", sprintf("%b",$num);
    return is_prime($count_one) ? 1 : 0;
}
```

<br>

I had thought that we could use combinations to complete the task. For the `$N` given, calculate an upper bound of number of binary digits needs, then generate some pernicious numbers, and finally sort them:

<br>

```perl
use Math::Prime::Util qw /next_prime/;
use Algorithm::Combinatorics qw/combinations/;

my $N = $ARGV[0] || 10;

my $list_size = $N;
my $ub = 3*$N;

my @pern_num = ();

for my $k (2..$ub) {
    my $prime = 2;
    while ($prime <= $k) {
        my @length_k_weight_p_num = ();
        my $iter = combinations([1..$k-1], $prime-1);
        while (my $c = $iter->next) {
            my @ch = ((1), (0) x ($k-1));
            $ch[$_] = 1 for @{$c};
            my $new_pern_num = oct("0b".(join "", @ch));
            push @length_k_weight_p_num, $new_pern_num;
        }
        push @pern_num, @length_k_weight_p_num;
        $prime = next_prime($prime);
    }
    last if scalar @pern_num >= $N;
}


@pern_num = sort {$a<=>$b} @pern_num;
say join ", ", @pern_num[0..$N-1];
```

<br>

To my surprise, this method is more effective for large `$N`:

<br>

```perl
$ # code modify to output the $N-th pernicious number
$ time perl ch-1.pl 2000000
5843197

real    0m18.420s
user    0m18.413s
sys    0m0.004s

$ # code modify to output the $N-th pernicious number
$ time perl ch-1-temp.pl 2000000
5843197

real    0m11.587s
user    0m11.527s
sys    0m0.056s
```

<br>

Therefore I have submitted the later version.

## Sample Run:

<br>

```perl
$ perl ch-1.pl 20
3, 5, 6, 7, 9, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21, 22, 24, 25, 26, 28
```

<br>

## Task 2: Weird Number

Last week we have a task 2 which can be categorized into algebraic number theory, and this week we get a task 2 related to analytic number theory.

But after coding, I found that we need not apply any advanced number theory results on this task. Anyway, I think the concept of multiplicative [arithmetic] function is very interesting. You may take a look on this link (pdf) if you are also often amazed by mathematics.

Back to the task. The task can be divided into two parts:

<br>

    1. find all proper divisors of the input number;
    2. check whether there is a subset of the set of the proper divisors having sum which is equal to the input number.

<br>

Express this in code:

<br>

```perl
sub weird {
    my $num = $_[0];
    my @proper_divisors = proper_divisors($num);
    return 0 if (sum @proper_divisors) < $num;
    return !subset_sum($num, [@proper_divisors]);
}
```

<br>

For the first part, I choose to use the trivial integer factorization with help from [**Math::Prime::Util**](https://metacpan.org/pod/Math::Prime::Util). (Originally I wanted to try something cool and new to me, and I eyed on wheel factorization, but I found the [**wheel factorization**](https://primes.utm.edu/glossary/page.php?sort=WheelFactorization) is primarily useful for checking whether an integer is prime or getting a non-trivial factor of an integer.)

<br>

```perl
sub factorization {
    my $num = $_[0];
    my @prime_factors;
    my $prime = 2;
    while ($num != 1) {
        if ($num % $prime == 0) {
            $num /= $prime;
            push @prime_factors, $prime;
        }
        else {
            $prime = next_prime($prime);
        }
    }
    return @prime_factors;
}
sub proper_divisors {
    my @prime_factors = factorization($_[0]);
    my @pd = (1);
    while (scalar @prime_factors > 0) {
        my $n = shift @prime_factors;
        my @temp_pd = @pd;
        push @pd, $n*$_ for @temp_pd;
    }
    @pd = sort {$a<=>$b} uniqint @pd;
    pop @pd;    # remove the largest factor -> the number itself
    return @pd;
}
```

<br>

For the second part, I have used the dynamic programming technique. (...I need more practice on dynamic programming and make it as one of my natural skills.) There is an [**established algorithm to do it**](https://www.geeksforgeeks.org/subset-sum-problem-dp-25/).

<br>

```perl
sub subset_sum {
    my $sum = $_[0];
    my @A = $_[1]->@*;

    my $DP;
    $DP->[0][$_] = 1 for (0..scalar @A);
    $DP->[$_][0] = undef for (1..$sum);
    for my $s (1..$sum) {
        for my $k (1..scalar @A) {
            $DP->[$s][$k] = $DP->[$s][$k-1];
            if ($s >= $A[$k-1]) {
                $DP->[$s][$k] = $DP->[$s][$k]
                                    ||
                              $DP->[$s-$A[$k-1]][$k-1];
            }
        }
    }
    return $DP->[$sum][scalar @A];
}
```

<br>

##  Sample Run

<br>

```perl
$ perl ch-2.pl 30
1..6
30 is not weird.
ok 1 - n=12 (Example 1)
ok 2 - n=70 (Example 2)
ok 3 - n=100
ok 4 - n=4030 (term from wikipedia)
ok 5 - n=6000
ok 6 - n=9272 (term from wikipedia)
```

<br>

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

| &nbsp; [**Advent Calendar 2022**](/blog/advent-calendar-2022) &nbsp; |
