---
title: "BLOG: The Weekly Challenge #054"
date: 2020-04-01T00:00:00+00:00
description: "Blog for the weekly challenge #054."
type: post
image: images/blog/weekly-challenge-054.jpg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

For the first time, since I started participating the weekly challenges, I thought of doing one-liner. With handy **CPAN** modules, it was pretty straight forward in **Perl**. Even **Raku** with built-in features wasn't far behind **Perl**. Like in the past, I learn something new in **Raku** every week. This week was no different. I will share what I learnt this time later.

***
***

# PERL

***
***

## Task #1: kth Permutation Sequence

The **CPAN** module **[Algorithm::Combinatorics](https://metacpan.org/pod/Algorithm::Combinatorics)** is becoming very popular and favourite among **Perl Hackers**. For me the star module was **[List::Util](https://metacpan.org/pod/List::Util)**, it gave me handy function **reduce** to calculate the factorial. I didn't want to reinvent the wheel. In fact, I didn't know that there was such thing available. It was big find for me personally. I found the syntax is out of this world to calculate the factorial. Do you think I am joking, check it out yourself.

To calculate the factorial of **$n**, you would have to do something like below:

> reduce { $a * $b } 1 .. $n

Please check out the **[documentation](https://metacpan.org/pod/List::Util#reduce)** for more informations.

I used **permuations()** from **Algorithm::Combinatoric** to do the main task.

Please check out the **[documentation](https://metacpan.org/pod/Algorithm::Combinatorics#permutations(%5C@data))** for more informations.

***

```perl
#!/usr/bin/perl

use strict;
use warnings;

use List::Util qw(reduce);
use Algorithm::Combinatorics qw(permutations);

my $n = $ARGV[0];
my $k = $ARGV[1];

die "ERROR: Missing digit count.\n"        unless defined $n;
die "ERROR: Missing sequence number.\n"    unless defined $k;
die "ERROR: Invalid digit count $n.\n"     unless $n > 0;
die "ERROR: Invalid sequence number $k.\n" unless $k > 0 && ($k <= reduce { $a * $b } 1 .. $n);

print [ map { join "", @$_ } permutations([ 1..$n ]) ]->[$k-1];
```

***

## Task #2: Collatz Conjecture

***
***

There is hardly anything to talk about in this solution. What you see here is just out of text book.

```perl
#!/usr/bin/perl

use strict;
use warnings;

my $n = $ARGV[0];
die "ERROR: Missing collatz starting number."    unless defined $n;
die "ERROR: Invalid collatz starting number $n." unless $n > 0;

my @collatz = ($n);
while ($n != 1) {
    $n = ($n % 2 == 0) ? ($n / 2) : ((3 * $n) + 1);
    push @collatz, $n;
}

print sprintf("%s\n", join " -> ", @collatz);
```

***

# RAKU

***
***

## Task #1: kth Permutation Sequence

***

This is the shortest **Raku** solutions I have ever came up with. Although it has 3 lines, each line is special to me.

I love the ability to define the parameters with checks. It is self explanatory. It lets you focus on the main task and not worry about input parameters.

> sub MAIN(Int $n where * > 0, Int $k where * > 0) {

The following line does special check on **$k**. I found out later that this can be combined in the definition of **MAIN()**. However the crucial bit is to calculate the factorial like **[*] 1..$n**.

>    die "ERROR: Invalid sequence number $k." unless $k <= [*] 1..$n;

It is time to do main task. Using the built-in **permutations()**, it becomes a piece of cake. What I loved the most is the use of **map()** to join the result of **permutations()**.

>    say ( 1..$n ).permutations.map({ .join })[$k -1];

The final solution looks like below:

```perl6
#!/usr/bin/env perl6

use v6.c;

sub MAIN(Int $n where * > 0, Int $k where * > 0) {
    die "ERROR: Invalid sequence number $k." unless $k <= [*] 1..$n;
    say ( 1..$n ).permutations.map({ .join })[$k -1];
}
```

***

## Task #2: Collatz Conjecture

***

For someone new to **Raku** might find **is copy** in the **MAIN()** as something new. As you have guessed it already, it simply makes the parameter **$n** readwrite and not just **readonly**. By default all parameters are **readonly**, if I am not mistaken.

Also I have used **multi** keyword of **Raku** for the first time. It was ideal for the task in hand. It is self explanatory as well.

Please check out the **[documentation](https://docs.raku.org/syntax/multi)** for more informations.

```perl6
#!/usr/bin/env perl6

use v6.c;

sub MAIN(Int $n is copy where $n > 0) {
    my @collatz = ($n);
    while $n != 1 {
        $n = collatz-sequence($n);
        push @collatz, $n;
    }
    say @collatz.join(" -> ");
}

multi sub collatz-sequence(Int $n where $n  %% 2) { $n div 2   }

multi sub collatz-sequence(Int $n where $n !%% 2) { 3 * $n + 1 }
```

That's it for this week. Speak to you soon.
