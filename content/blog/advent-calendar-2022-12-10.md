---
title: "Advent Calendar - December 10, 2022"
date: 2022-12-10T00:00:00+00:00
description: "Advent Calendar - December 10, 2022."
type: post
image: images/blog/2022-12-10.jpg
author: Bruce Gray
tags: ["Perl", "Raku", "Python"]
---

## [**Advent Calendar 2022**](/blog/advent-calendar-2022)
### | &nbsp; [**Day 9**](/blog/advent-calendar-2022-12-09) &nbsp; | &nbsp; **Day 10** &nbsp; |
***

The gift is presented by `Bruce Gray`. Today he is talking about his solution to [**"The Weekly Challenge - 154"**](/blog/perl-weekly-challenge-154). This is re-produced for **Advent Calendar 2022** from the original [**post**](https://blogs.perl.org/users/bruce_gray/2022/03/twc-episode-154---padawan-missing.html) by him.

***

<br>

    In which we search for a needle in a lendee
    (or maybe a chatchka in a haystack),
    and delight in some lazy CPAN comfort.

<br>

## TWC Task #1 - [**Missing Permutation**](https://theweeklychallenge.org/blog/perl-weekly-challenge-154/#TASK1)

<br>

Find all permutations missing from a list.

<br>

    - I have snipped most of the task permutations to make the code fit better in the blog post.
    - I don't want to write my own permutation code again.
    - Raku has built-in .permutations method, and (-) set-difference operator.
    - Perl has several CPAN modules for permutations; List::Permutor is the first one Google returned, and its ->next method allowed me to write a loop that was different than my Raku solution.
    - Python has Sets, and the itertools library handles permutations. itertools has lots of features that I miss when working outside of Raku, but they cannot be combined as nicely as Raku's, due to the basic(underlying(Python(function(call(syntax())))).

<br>

## [**Raku**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/bruce-gray/raku/ch-1.raku)

<br>

The partial list of juggled letters is in `@in`.

<br>

```perl
my @in = <PELR PREL ...snip...
```

<br>

Take the first word; we could have used any of them.

With no argument, .comb splits into a list of single characters.

`.permutations` gives all the possible rearrangements of those characters.

The `».` makes a `hyper` method call that will be run on each item in the list of permuted characters, `join`ing them back into words.

<br>

```perl
my @all = @in[0].comb.permutations».join;
```

<br>

When we do a set operation on a `List`, it is automatically converted to a `Set`.

`(-)` is the `ASCII` version of the set difference operator; it returns a Set of items present in the left-hand Set that are absent from the right-hand Set.

Iterating over the resulting Set gives us `Pair` objects, where the .value is always `True`, and the `.key` is the part we are interested in.

<br>

```perl
say .key for @all (-) @in;
```

<br>

## [**Perl**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/bruce-gray/perl/ch-1.pl)

<br>

The `Perl` version of Raku's `Set` is a hash,

initialized via `my %h = map { $_ => 1 } @stuff;`.

<br>

```perl
use List::Permutor;
my @in = qw<PELR PREL ...snip...>;
my %in_set = map { $_ => 1 } @in;
my $permutor = List::Permutor->new( split '', $in[0] );
while ( my @letters = $permutor->next() ) {
        my $word = join '', @letters;
            say $word if not $in_set{$word};
}
```

<br>

## [**Python**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/bruce-gray/python/ch-1.py)

<br>

The `Python` code mirrors the Perl solution. When given only a single string, list breaks it into characters.

In hindsight, I really should have named the last variable word instead of `s`.

<br>

```python
from itertools import permutations

input_words = "PELR PREL ...snip...".split()
input_set = set(input_words)

for i in permutations(list(input_words[0])):
    s = "".join(i)
    if s not in input_set:
        print(s)
```

<br>

## TWC Task #2 - [**Padovan Prime**](https://theweeklychallenge.org/blog/perl-weekly-challenge-154/#TASK2)

<br>

Compute the first 10 distinct prime [**Padovan Numbers**](https://oeis.org/A000931).

<br>

> I don't want to write my own is_prime() code again.

<br>

## [**Raku**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/bruce-gray/raku/ch-2.raku)

<br>

There were several ways to write the code block. I chose one that highlights $c being requested then deliberately unused.

`.squish` only suppresses consecutive duplicates, so it works efficiently with lazy lists.

<br>

```perl
constant @Padovan = 1, 1, 1, { sink $^c; $^a + $^b } ... *;

say @Padovan.grep(&is-prime).squish.head(10);
```

<br>

## [**Perl**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/bruce-gray/perl/ch-2.pl)

<br>

I was very happy to discover [**List::Lazy**](https://metacpan.org/pod/List::Lazy), which make easy both the generation of the `Padovan Numbers`, and filtering them for primes.

It was going to be more trouble than it was worth to make a version of Raku's `.squish` that would work with `List::Lazy`, so I used the foreknowledge that there is exactly one duplicate, and just called `uniq` on the `10+1` numbers returned by `->next`.

<br>

```perl
use List::Util qw<uniq head>;
use List::Lazy qw<lazy_list>;
use ntheory    qw<is_prime>;

my $Padovan = lazy_list {
        push  @$_, $_->[-2] + $_->[-3];
            shift @$_;
} [1, 1, 1];

my $prime_pad = $Padovan->grep( sub { is_prime($_) } );

say join ', ', uniq $prime_pad->next(11);
```

<br>

## [**Python**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/bruce-gray/python/ch-2.py)

<br>

I am pleased with the brevity of the `Padovan()` generator.

`head()` is from an `itertools` recipe; it is not my own code.

Comparing the final print line to the second line of the `Raku` code makes me wish for Raku's flexibility of choosing `method calls` vs `function calls`.

<br>

```python
from sympy import isprime
from itertools import islice


def Padovan():
    p = [1, 1, 1]

    while True:
        p.append(p[-2] + p[-3])
        yield p.pop(0)


def squish(a):
    last = None
    for i in a:
        if i != last:
            yield i
        last = i


def head(n, iterable):
    return list(islice(iterable, n))


print(head(10, squish(filter(isprime, Padovan()))))
```

<br>

    Primes, Primes, everywhere a Prime.
    Making all the Integers, alone or combined
    Sieve N, to the square root.
    Can't you see its Prime?

<br>

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

| &nbsp; [**Advent Calendar 2022**](/blog/advent-calendar-2022) &nbsp; |
