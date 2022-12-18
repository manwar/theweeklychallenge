---
title: "Advent Calendar - December 18, 2022"
date: 2022-12-18T00:00:00+00:00
description: "Advent Calendar - December 18, 2022."
type: post
image: images/blog/2022-12-18.jpg
author: Andinus
tags: ["Perl", "Raku"]
---

## [**Advent Calendar 2022**](/blog/advent-calendar-2022)
### | &nbsp; [**Day 17**](/blog/advent-calendar-2022-12-17) &nbsp; | &nbsp; **Day 18** &nbsp; |
***

The gift is presented by `Ryan Thompson`. Today he is talking about his solution to [**"The Weekly Challenge - 171"**](/blog/perl-weekly-challenge-171). This is re-produced for **Advent Calendar 2022** from the original [**post**](https://ry.ca/2022/07/odd-abundant-numbers) by him.

***

<br>

## PWC 171 › Odd Abundant Numbers

<br>

> This post is part of a series on Mohammad Anwar’s excellent Weekly Challenge, where hackers submit solutions in Perl, Raku, or any other language, to two different challenges every week. (It’s a lot of fun, if you’re into that sort of thing.)

<br>

[**This week’s tasks**](https://theweeklychallenge.org/blog/perl-weekly-challenge-171) include a simple number theory calculation, and a language feature. Here’s a look at `task 1`.

<br>

## Odd Abundant Numbers

<br>

`Abundant numbers` are numbers where the `sum of the proper divisors is greater than the number`. The first odd abundant number is `945`. 945’s proper divisors are `1, 3, 5, 7, 9, 15, 21, 27, 35, 45, 63, 105, 135, 189`, and `315`. (Recall that we exclude `945` itself as a proper divisor.)

The sum of those divisors is `975`, so therefore `945` is an abundant number.

Equivalently, a number is abundant if the sum of all divisors is greater than twice the number. We’ll see both variations in the solutions below.

I’m going to take you through a few different approaches. Since I don’t like repeating myself, let’s get some foreshadowing for `task #2` going, by using a `first class function`:

<br>

```perl
sub n_odd_abundant(&$) {
    my ($is_abundant, $N) = @_;

    my @r;
    for (my $n = 3; $N; $n += 2) {
        if ($is_abundant->($n)) {
            push @r, $n;
            $N--
        }
    }

    @r;
}
```

<br>

The above code takes in a code ref (`$is_abundant`) and a limit (`$N`). We loop over all odd numbers, pushing any that pass the `$is_abundant check` to our result.

Although the above version suited my purposes better, it’s also possible to do this with an iterator, to avoid having to store the intermediate result:

<br>

```perl
sub odd_abundant_iterator(&) {
    my $is_abundant = shift;
    my $n = 1;

    sub {
        do { $n += 2 } until $is_abundant->($n);

        $n;
    }
}
```

<br>

Now that we have a framework for gathering abundant numbers, let’s try it a few different ways.

<br>

## Brute force

<br>

The first way you might think to try is simply to brute force your way through every divisor of every number. This is `O(n)` for each number, and takes over a second to find the first `20 numbers`:

<br>

```perl
sub n_abundant_naive {
    n_odd_abundant {
        my $n = shift;
        $n < sum grep { $n % $_ == 0 } 1..$n/2;
    } $_[0];
}
```

<br>

## Using `sqrt`

<br>

Stopping at `√n` perhaps unsurprisingly brings the asymptotic time down to `O(√n)`. Since divisors come in pairs, we can simply calculate the other divisor and avoid looping through most of the numbers:

<br>

```perl
sub n_abundant_sqrt {
    n_odd_abundant {
        my $n    = shift;
        my $sqrt = sqrt($n);

        my $sum  = sum map { $_,  $n / $_ }
                      grep { $n % $_ == 0 } 1..$sqrt;

        $sum -= $sqrt if $sqrt == int $sqrt;

        2*$n < $sum;
    } $_[0];
}
```

<br>

It might not seem like a huge change, but the above code runs about `27 times` faster than the naïve version, when asked to find the `first 20 odd abundant numbers`.

<br>

## Using `Math::Prime::Util` divisor_sum

<br>

Just for fun, our old friend, `Math::Prime::Util` has a function that seems perfect for our needs: [**divisor_sum**](https://metacpan.org/pod/Math::Prime::Util#divisor_sum). It does what it says on the tin: it calculates the sum of the divisors of whatever number we give it.

<br>

```perl
sub n_abundant_mpu {
    n_odd_abundant {
        my $n = shift;
        my $sum = divisor_sum($n);

        2*$n < $sum;
    } $_[0];
}
```

<br>

This one is another `12 times` faster than the `sqrt` solution, and `356 times` faster than the `naïve method`. Great, right? Well, not so fast. Under the hood, the `divisor_sum` function is still finding all divisors for every number, so we’re still at `O(n√n)` time. It’s only faster because of the very tightly optimized `C code` under the hood.

<br>

## Sieve

<br>

We can still do quite a bit better by realizing that since we’re looking for a whole bunch of abundant numbers, we’re repeating the same calculations over and over again, for every multiple of a number we’ve seen already. So as long as we’re willing to tweak the requirement slightly to find all abundant numbers below a given limit (although [**we’ll see how we can still accommodate the old calling syntax**](https://ry.ca/2022/07/odd-abundant-numbers/#sneaking-up) if we really want to), we can do much better:

<br>

```perl
sub n_abundant_sieve {
    my $lim = shift;
    my @r;

    my @div_sum; # Sum of divisors for each number
    for my $n (1..$lim) {
        $div_sum[$n*$_] += $n for 1..$lim/$n+1;
        push @r, $n if $n % 2 and 2*$n <= $div_sum[$n];
    }

    @r;
}
```

<br>

When called as `n_odd_abundant_sieve(10000)`, this returns the first `23` odd abundant numbers, about `twice` as fast as the `sqrt` version returns `20`. That’s because this algorithm runs in `O(n logn)` time, which is strictly less than `O(n√n)` time for all `n>0`. It grows significantly slower.

<br>

## Sneaking up on the limit

<br>

In number theory circles, finding all numbers below a limit is usually just fine, but if we wanted to be a stickler for the parameters of the challenge and return only the `first 20`, we could simply call `n_odd_abundant_sieve` multiple times, doubling the limit every time, until we have at least `20` results. I wouldn’t bother, though.

<br>

## You might be wondering, `“how does this perform compared to the MPU version?”`

<br>

For small values (the first 23 numbers in the sequence), the `MPU` version is `faster` by about `200%`. However, when given more realistic limits, our better algorithm pulls ahead. It breaks even at about `100` numbers on my machine. By the time we ask for `150` numbers, the `sieve` is already `60%` faster.

Benchmarks are an incredibly useful—and essential—tool when you need to write high performance code. Knowing that one algorithm is faster than another doesn’t always translate to real code. When dealing with implementation details, those hidden constants can really make a difference. What’s also really important, however, is knowing your requirements. If we’re only ever going to need to find less than `100 abundant primes`, the `MPU` version might be a worthy choice. However, if we want to push it beyond that, then the better algorithm wins.

Of course, translating the `sieve algorithm` to tight `C code` would blow both of them out of the water at any value of `n`, since the `sieve` version grows strictly slower than the `MPU` version.

<br>

## Raku

<br>

Here’s a quick port to `Raku`. If you’re only concerned with outputting the results, there’s no point in storing them first:

<br>

```perl
sub MAIN(Int $lim = 10000) {
    my @div_sum; # Sum of divisors for each number

    for 1...$lim -> $n {
        @div_sum[$n*$_] += $n for 1..$lim/$n+1;
        $n.say if $n % 2 and 2*$n <= @div_sum[$n];
    }

}
```

<br>

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

| &nbsp; [**Advent Calendar 2022**](/blog/advent-calendar-2022) &nbsp; |
