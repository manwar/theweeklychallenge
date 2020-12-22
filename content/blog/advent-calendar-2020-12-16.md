---
title: "Advent Calendar - December 16, 2020"
date: 2020-12-22T00:00:00+00:00
description: "Advent Calendar - December 16, 2020."
type: post
image: images/blog/2020-12-16.jpg
author: Yet Ebreo
tags: ["Perl", "C"]
---

[**Advent Calendar 2020**](/blog/advent-calendar-2020)
***

The gift is presented by [**Yet Ebreo**](https://perlweeklychallenge.org/blog/meet-the-champion-025). Today he is talking about his solution to the task `Calling C function` of **["The Weekly Challenge - 029"](/blog/perl-weekly-challenge-029)**. This is re-produced for **Advent Calendar 2020** from the original [**post**](https://doomtrain14.github.io/pwc/2019/10/13/pwc_calling_c.html) by **Yet Ebreo**.

***

> Write a script to demonstrate calling a C function. It could be any user defined or standard C function.

***

I have seen implementation of this using the Inline module but I have to be honest that I have never really tried it in perl. Never had the need to use it or atleast that’s what I thought. At the back of my mind, I knew a piece of code compiled in C would perform better compared to pure perl solution.

## Solution:

So for this task, I created a fibonacci function (both in **C** and **Perl**) that would take a number `$n` as input and would return the `n-th` number in the fibonacci series.

I used the `Inline` module and wrote the C function after the special literals `__END__` and `__C__`.

### a) __END__ indicates the logical end of the script before the actual end of file. Any following text is ignored.
### b) __C__ indicates the start of the C code

<br>

The `perl_fib` function is the pure perl version of the fibonacci function and fib is the C version.

I knew the **Perl** implementation would take longer to finish (vs **C**) on bigger input range; so I took the oppurtunity to use the `Memoize` module to compare the performances of:

### a) perl_fib - function writtern in perl without Memoize
### b) perl_fib(Memoized) - same function but Memoized
### c) fib - function written in C

<br>

## Code:

```perl
#!/usr/bin/env perl
# Write a script to demonstrate calling a C function.
# It could be any user defined or standard C function.
use strict;
use warnings;
use feature 'say';
use Memoize;

use Inline 'C';

my $start_run;
my $run_time;


$start_run = time();
print (perl_fib($_)." ") for 1..36;
$run_time  = time() - $start_run;
say "\nRun Time (Perl): $run_time sec\n";

memoize('perl_fib');
$start_run = time();
print (perl_fib($_)." ") for 1..36;
$run_time  = time() - $start_run;
say "\nRun Time (Perl-Memoized): $run_time sec\n";

$start_run = time();
print (fib($_)." ") for 1..36;
$run_time  = time() - $start_run;
say "\nRun Time (Inline-C): $run_time sec\n";

sub perl_fib { (
    $_[0] == 0) ?
        0: ($_[0] == 1)?
            1:perl_fib($_[0]-1)+perl_fib($_[0]-2)
}

__END__
__C__
unsigned long fib(int n) {
    if ( n == 0 )
        return 0;
    else if ( n == 1 )
        return 1;
    else
        return ( fib(n-1) + fib(n-2) );
}
```

## Output:

```perl
$ perl ch-2.pl
1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181 6765 10946 17711 28657 46368 75025
121393 196418 317811 514229 832040 1346269 2178309 3524578 5702887 9227465 14930352
Run Time (Perl): 49 sec

1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181 6765 10946 17711 28657 46368 75025
121393 196418 317811 514229 832040 1346269 2178309 3524578 5702887 9227465 14930352
Run Time (Perl-Memoized): 0 sec

1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181 6765 10946 17711 28657 46368 75025
121393 196418 317811 514229 832040 1346269 2178309 3524578 5702887 9227465 14930352
Run Time (Inline-C): 1 sec
```

As expected, the **Perl** implementation took the longer compared to the **C** version. But it is surprising how `Memoize` cut down the execution time to just a fraction of a second.

And that’s it for this week’s challenge. If you’d like to join the fun and contribute, please visit the [site](https://perlweeklychallenge.org/) managed by [Mohammad S Anwar](http://www.manwar.org/).

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2020**](/blog/advent-calendar-2020)
