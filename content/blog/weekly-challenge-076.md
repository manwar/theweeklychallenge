---
title: "BLOG: The Weekly Challenge #076"
date: 2020-09-06T00:00:00+00:00
description: "Blog for the weekly challenge #076."
type: post
image: images/blog/weekly-challenge-076.jpg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

# HEADLINE

<br>

Although I had finished the **"Word Search"** task a week before, still I didn't have time to complete the **"Prime Sum"** task. After checking out others solution to the **"Word Search"** task, I was feeling low looking back my own solution. To recover from it, I delayed solving the **"Prime Sum"** task. At the same time, as a protest, I didn't do **Swift** solutions for any of the tasks. After few days when I was feeling a little better, I decided to do at least one task better.

I really enjoyed working on the **"Prime Sum"** task. I got to learn about **Sieve of Erastothenes**. When I looked back at the end result, I felt much better. My **Raku** solution is even better if you look at it. At the end of the day, I was happy with my effort.

<br>

### YouTube Weekly

I present live coding session of mine for the tasks of the week. Please do comment the video if you have any suggestions. And if you like the video then please consider subscribing my **[YouTube Channel](https://www.youtube.com/channel/UCT91RkThBWByo1NL_M8R8Ig)**.

#### Task #1: Prime Sum

<iframe width="560" height="315" src="https://www.youtube.com/embed/SYMNx0FrJTk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>

Last but not the least, I would to love hear your **view/opinion** with regard to anything I do.

Please get in touch with me by email: <mohammad.anwar@yahoo.com>.

Let me share my solutions to the **[The Weekly Challenge - 076](/perl-weekly-challenge-076)**.

***
## TASK #1 › Prime Sum
#### Submitted by **[Mohammad S Anwar](http://www.manwar.org)**
#### Reviewed by **[Ryan Thompson](https://ry.ca/)**
***

You are given a number `$N`. Write a script to find the minimum number of prime numbers required, whose summation gives you `$N`.

For the sake of this task, please assume 1 is not a prime number.

***

<br>

To solve the task, I created the `sub sieve_of_eratosthenes()` to clean up the range.

<br>

```perl
sub sieve_of_eratosthenes {
    my ($i, $range) = @_;

    foreach my $j (sort { $a <=> $b } keys %$range) {
        delete $range->{$j} unless ($j % $i);
    }

    $i  = (sort { $a <=> $b } keys %$range)[0];
    $i += 0 if defined $i;

    return ($i, $range);
}
```

Now it is time to create `sub find_prime_upto()` which takes the help of above subroutine.

```perl
sub find_prime_upto {
    my ($sum) = @_;

    die "ERROR: Invalid sum [$sum].\n"
        unless (($sum =~ /^\d+$/) && ($sum > 0));

    my $range = { map { $_ => 1 } 2..$sum };
    my $prime = [];

    my $i = 2;
    while (keys %$range) {
        push @$prime, $i;
        ($i, $range) = sieve_of_eratosthenes($i, $range);
        last unless defined $i;
    }

    return $prime;
}
```

Now we have list of prime numbers upto the given `$sum`. We just to have make all possible unique combinations and find out which combination gives the desired result.

```perl
sub prime_sum {
    my ($primes, $sum) = @_;

    my $prime_sum = [];
    foreach my $i (1 .. $sum) {
        last if ($i > @$primes);
        foreach my $comb (combinations($primes, $i)) {
            my $_sum = 0;
            $_sum += $_ for @$comb;
            push @$prime_sum, $comb if ($_sum == $sum);
        }
    }

    return $prime_sum;
}
```

Finally print the combinations

```perl
sub _print {
    my ($prime_sum) = @_;

    foreach (@$prime_sum) {
        print sprintf("%s\n", join ", ", @$_);
    }
}
```

**Raku** once again just showing-off.

With built-in `is-prime`, finding all primes up to the given number is like school boy task.

<br>

```perl6
sub find-prime-upto(Int $sum) {
    return (2..$sum).grep: { .is-prime };
}
```

Once we have list of prime numbers, we again use `combinations` to generate possible combinations and then picked the one which gives the end result.

```perl6
sub prime-sum(Int $sum) {

    my @prime = find-prime-upto($sum);
    my @prime-sum = Empty;
    for 1..$sum -> $i {
        for @prime.combinations: $i -> $j {
            my $_sum = [+] $j;
            @prime-sum.push: $j if $_sum == $sum;
        }
    }

    return @prime-sum;
}
```

<br>

As always, the final solution is just a wrapper around the helper subroutines.

<br>

```perl
use strict;
use warnings;
use Algorithm::Combinatorics qw(combinations);

my $SUM = $ARGV[0];

print "USAGE: perl $0 <positive_number>\n" and exit unless defined $SUM;
_print(prime_sum(find_prime_upto($SUM), $SUM));
```

<br>

**Raku** solution looks clean, I must admit.

<br>

```perl6
use v6.d;

sub MAIN(Int $SUM where $SUM > 0) {
    prime-sum($SUM).join("\n").say;
}
```

<br>

Just basic unit test to complete the task.

<br>

```perl
use strict;
use warnings;
use Test::More;
use Test::Deep;
use Algorithm::Combinatorics qw(combinations);

is_deeply(prime_sum(find_prime_upto(6), 6),
          [],
          "testing prime sum = 6");
is_deeply(prime_sum(find_prime_upto(9), 9),
          [[2, 7]],
          "testing prime sum = 9");
is_deeply(prime_sum(find_prime_upto(12), 12),
          [[5, 7], [2, 3, 7]],
          "testing prime sum = 12");

done_testing;
```

<br>

And **Raku** unit test as well.

<br>

```perl6
use Test;

is-deeply prime-sum(6).<>,  [],                  "prime sum = 6";
is-deeply prime-sum(9).<>,  [(2, 7),],           "prime sum = 9";
is-deeply prime-sum(12).<>, [(5, 7), (2, 3, 7)], "prime sum = 12";

done-testing;
```

<br>

That's it for this week. Speak to you soon.
