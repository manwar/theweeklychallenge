---
title: "Advent Calendar - December 3, 2025"
date: 2025-12-03T00:00:00+00:00
description: "Advent Calendar - December 3, 2025."
type: post
image: images/blog/2025-12-03.jpg
author: Jorg Sommrey
tags: ["Perl"]
---

## [**Advent Calendar 2025**](/blog/advent-calendar-2025)
### | &nbsp; [**Day 2**](/blog/advent-calendar-2025-12-02) &nbsp; | &nbsp; **Day 3** &nbsp; | &nbsp; [**Day 4**](/blog/advent-calendar-2025-12-04) &nbsp; |
***

The gift is presented by `Jorg Sommrey`. Today he is talking about his solution to [**The Weekly Challenge - 305**](/blog/perl-weekly-challenge-305). This is re-produced for `Advent Calendar 2025` from the original [**post**](https://github.sommrey.de/the-bears-den/2025/01/24/ch-305.html).

***

<br>

## Alien Primes

### Task 1: Binary Prefix

    You are given a binary array.

    Write a script to return an array of booleans where the partial binary number up to that point is prime.

    Example 1

    Input: @binary = (1, 0, 1)
    Output: (false, true, true)

    Sub-arrays (base-10):
    (1): 1 - not prime
    (1, 0): 2 - prime
    (1, 0, 1): 5 - prime

    Example 2

    Input: @binary = (1, 1, 0)
    Output: (false, true, false)

    Sub-arrays (base-10):
    (1): 1 - not prime
    (1, 1): 3 - prime
    (1, 1, 0): 6 - not prime

    Example 3

    Input: @binary = (1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1)
    Output: (false, true, true, false, false, true, false, false, false, false, false,
        false, false, false, false, false, false, false, false, true)

<br>

### Solution

<br>

From a binary array **b=(b<sub>1</sub>,....,b<sub>n</sub>)** we find the partial binary numbers **s=(s<sub>1</sub>,....,s<sub>n</sub>)** as:

**s<sub>1</sub> = b<sub>1</sub>**

**s<sub>i</sub> = 2s<sub>i-1</sub> + b<sub>i</sub>**

<br>

Taking `0` for “not prime” and `1` for “prime”, with the help of `reductions` and `is_prime`, the task can be solved with a single statement.

As there is no limit specified on the length of `@binary`, we should take measures for large integers.

Furthermore we need to convert the numerical result to `false` / `true` strings. This leads to the following implementation:

<br>

```perl
use strict;
use warnings;
use bigint;
use List::Util 'reductions';
use Math::Prime::Util 'is_prime';

say join ', ', map +(qw(false true))[$_], binary_prefix(@ARGV);

sub binary_prefix {
    map {is_prime($_) <=> 0} reductions {2 * $a + $b} @_;
}
```

<br>

A nice test case for this procedure are `Mersenne` primes. Providing an input array `b = (1,1,1,...)`, the partial binary numbers are **2<sup>k</sup>-1**, which is the form of `Mersenne primes`. We find the `Mersenne` exponents e<sub>i</sub> as `A000043`. Shifted by 1, these exponents specify the positions of `1s` in our expected output. Note that **2<sup>251</sup>** has `157` decimal digits.

For `Test2` we need to force a *numerical* result check. Therefore we wrap the expected `Math::BigInts` in `Test2::Compare::Numbers`. A test case then could look like:

<br>

```perl
use Test2::V0;

my @me = (2, 3, 5, 7, 13, 17, 19, 31, 61, 89, 107, 127, 521);
my @expected = (0) x $me[-1];
@expected[map $_ - 1, @me] = (1) x @me;
is [binary_prefix((1) x $me[-1])], [map number($_), @expected], 'Mersenne primes';
done_testing;
```

<br>

See the [**full solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-305/jo-37/perl/ch-1.pl) to task 1.

<br>

### Task 2: Alien Dictionary

    You are given a list of words and alien dictionary character order.

    Write a script to sort lexicographically the given list of words based on the alien dictionary characters.

    Example 1

    Input: @words = ("perl", "python", "raku")
           @alien = qw/h l a b y d e f g i r k m n o p q j s t u v w x c z/
    Output: ("raku", "python", "perl")

    Example 2

    Input: @words = ("the", "weekly", "challenge")
           @alien = qw/c o r l d a b t e f g h i j k m n p q s w u v x y z/
    Output: ("challenge", "the", "weekly")

<br>

### Solution

<br>

First of all we need to define an `“alien directory character order”`. As the examples suggest, the `“directory character order”` shall be an ordered list of the lower-case Latin letters `'a' .. 'z'`, where each of the characters appears exactly once.

To make sure the given order conforms to this requirement, we may use the list as the keys of a slice from the hash `%a2n` with the naturally ordered characters as values. Then we take the slice over all characters and count the defined values. The count must be equal to the number of all characters.

<br>

```perl
@all = 'a' .. 'z';
@a2n{@alien} = @all;
die 'order invalid' if @all > grep defined, @a2n{@all};
```

<br>

At this point we could use the hash `%a2n` to translate the individual characters of each given word into their corresponding characters in the natural order. However, the `tr///` operator permits such translations string-wise, though it does not support variable interpolation. Therefore we might perform the translation by a string eval with all of its drawbacks.

When performing a string eval, it is a good idea to enable [**taint mode**](https://perldoc.perl.org/perlsec#Taint-mode) to make sure that external input is not directly used within the eval. Though [**“laundering”**](https://perldoc.perl.org/perlsec#Laundering-and-Detecting-Tainted-Data) the input enables its usage in an eval, this does not prevent code injection per se. It is just a signal to the runtime that some measures were taken, but the program resp. the programmer have to make sure such injection does not happen.

Having performed the above procedure on `@alien`, its elements as hash keys in `%a2n` are already laundered. We just have to make sure that only single letters are used as keys.

To retrieve the elements of `@alien` in their given order as a string, we may reverse the hash `%a2n`:

<br>

```perl
%n2a = map {$a2n{$_} => $_} @all;
$alien = join '', @n2a{@all};
```

<br>

Finally we sort the given words using a [**Schwartzian transform**](https://en.wikipedia.org/wiki/Schwartzian_transform), which could look like:

<br>

```perl
map $_->[0],
    sort {$a->[1] cmp $b->[1]}
    map {[$_, eval "tr/$alien/a-z/r"]} @words;
```

<br>

There is room for extensions: We may sort the words case-insensitive and ignore modifiers.

To this end we fold-case each word, normalize it into the [**Unicode Normalization Form D**](https://metacpan.org/pod/Unicode::Normalize#Normalization-Forms) (canonical decomposition) and drop everything that is not a lower Latin letter before translating it into alien order.

Putting everything together we arrive at:

<br>

```perl
#!/usr/bin/perl -T

use strict;
use warnings;
use Unicode::Normalize;
use experimental 'signatures';

BEGIN {
    my @all = 'a' .. 'z';

    sub alien_sort ($order, @words) {
        my %a2n;
        @a2n{@$order} = @all;
        die 'order not valid' if @all > grep defined, @a2n{@all};
        my %n2a = map {$a2n{$_} => $_} @all;
        my $alien = join '', @n2a{@all};

        map $_->[0],
            sort {$a->[1] cmp $b->[1]}
            map {
                [$_, eval "NFD(fc) =~ tr/a-z//cdr =~ tr/$alien/a-z/r"]
            } @words;
    }
}
```

<br>

Here is an example for a case- and modifier-insensitive sort with vowels preceding consonants:

<br>

```perl
use utf8;

say join ' ', alien_sort([qw(a e i o u b c d f g h j k l m n p q r s t v w x y z)],
    'Oc', 'Öc', 'oc', 'öc', 'oe', 'öe', 'Oe', 'Öe');
```

<br>

produces:

<br>

```bash
oe öe Oe Öe Oc Öc oc öc
```

<br>

Here all variants of `o` are regarded as equal and within these the original order is preserved.

See the [**full solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-305/jo-37/perl/ch-2.pl) to task 2.

<br>

***

If you have any suggestion then please do share with us **<perlweeklychallenge@yahoo.com>**.

| &nbsp; [**Advent Calendar 2025**](/blog/advent-calendar-2025) &nbsp; |
