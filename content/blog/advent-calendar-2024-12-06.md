---
title: "Advent Calendar - December 6, 2024"
date: 2024-12-05T00:00:00+00:00
description: "Advent Calendar - December 6, 2024."
type: post
image: images/blog/2024-12-06.jpg
author: Matthias Muth
tags: ["Perl"]
---

## [**Advent Calendar 2024**](/blog/advent-calendar-2024)
### | &nbsp; [**Day 5**](/blog/advent-calendar-2024-12-05) &nbsp; | &nbsp; **Day 6** &nbsp; |
***

The gift is presented by `Matthias Muth`. Today he is talking about his solution to [**The Weekly Challenge - 256**](/blog/perl-weekly-challenge-256). This is re-produced for `Advent Calendar 2024` from the original [**post**](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-256/challenge-256/matthias-muth#readme).

***

<br>

## Easy Pairs - Easy Merge
***

<br>

### Task 1: Maximum Pairs
***

<br>

    You are given an array of distinct words, @words.

    Write a script to find the maximum pairs in the given array. The words $words[i] and $words[j] can be a pair one is reverse of the other.

<br>

Ah, an easy one.

For each word we check whether we have seen its reverse before, and increment our counter if so. Then we remember that we have seen the current word.

Perl supports us with the `reverse` function to reverse the characters of a string (also to reverse a list, but this is not what we use here).

<br>

```perl
#!/usr/bin/env perl
use v5.36;

sub maximum_pairs( @words ) {
    my $n = 0;
    my %known;
    for ( @words ) {
        ++$n if $known{ reverse $_ };
        $known{$_} = 1;
    }
    return $n;
}

use Test2::V0 qw( -no_srand );
is maximum_pairs( "ab", "de", "ed", "bc" ), 1,
    'Example 1: maximum_pairs( ("ab", "de", "ed", "bc") ) == 1';
is maximum_pairs( "aa", "ba", "cd", "ed" ), 0,
    'Example 2: maximum_pairs( ("aa", "ba", "cd", "ed") ) == 0';
is maximum_pairs( "uv", "qp", "st", "vu", "mn", "pq" ), 2,
    'Example 3: maximum_pairs( ("uv", "qp", "st", "vu", "mn", "pq") ) == 2';
done_testing;
```

<br>

If you don't have perl `5.36` (which I highly recommend!), you can use this instead:

<br>

```perl
use v5.20;
use warnings;
use feature 'signatures';
no warnings 'experimental::signatures';
```

<br>

`Perl 5.20` has been around since `2014`, so I guess that chances are high that your perl is more recent than that.

If not, and you are not able to update your system's perl for any reason, I suggest installing [**perlbrew**](https://perlbrew.pl), which is an admin-free perl installation management tool.

<br>

### Task 2: Merge Strings
***

<br>

    You are given two strings, $str1 and $str2.
    Write a script to merge the given strings by adding in alternative order starting with the first string.
    If a string is longer than the other then append the remaining at the end.

<br>

The idea for this challenge is to turn the two string into lists of characters, and then merge the two lists.

There are a lot of functions for list manipulations in the `List::Util` core module, one of which is `mesh`. It does exactly what we need. The only downside is that if the lists are of different lengths, there will be `undef` values inserted in the result. But it is easy to `grep` those out before assembling the result into a return string. At least easier than splitting up the longer list into two parts, and after `mesh`ing the first part with the shorter string appending the second part.

`mesh` has been part of `List::Util` since its `version 1.56`, which means has been part of standard `Perl` since `Perl 5.25` (released in `2014`).

Its implementation is different from the mesh function in the `List::MoreUtils` CPAN module, in that it uses array references as parameters, not array variables that are used by reference (using prototypes).

I prefer the `List::Util` version here, because we can directly use anonymous arrays containing the split characters as parameters, making it unnecessary to declare and use any array variables.

<br>

```perl
#!/usr/bin/env perl

use v5.36;

use List::Util qw( mesh );

sub merge_strings( $str1, $str2 ) {
    return join "",
        grep defined,
            mesh [ split //, $str1 ], [ split //, $str2 ];
}

use Test2::V0 qw( -no_srand );
is merge_strings( "abcd", 1234 ), "a1b2c3d4",
    'Example 1: merge_strings( ("abcd", 1234) ) == "a1b2c3d4"';
is merge_strings( "abc", 12345 ), "a1b2c345",
    'Example 2: merge_strings( ("abc", 12345) ) == "a1b2c345"';
is merge_strings( "abcde", 123 ), "a1b2c3de",
    'Example 3: merge_strings( ("abcde", 123) ) == "a1b2c3de"';
done_testing;
```

<br>

Thank you for the challenge!

<br>

***

If you have any suggestion then please do share with us **<perlweeklychallenge@yahoo.com>**.

| &nbsp; [**Advent Calendar 2024**](/blog/advent-calendar-2024) &nbsp; |
