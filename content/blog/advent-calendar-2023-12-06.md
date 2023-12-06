---
title: "Advent Calendar - December 6, 2023"
date: 2023-12-06T00:00:00+00:00
description: "Advent Calendar - December 6, 2023."
type: post
image: images/blog/2023-12-06.jpg
author: Peter Campbell Smith
tags: ["Perl"]
---

## [**Advent Calendar 2023**](/blog/advent-calendar-2023)
### | &nbsp; [**Day 5**](/blog/advent-calendar-2023-12-05) &nbsp; | &nbsp; **Day 6** &nbsp; |
***

The gift is presented by `Peter Campbell Smith`. Today he is talking about his solution to [**The Weekly Challenge - 212**](/blog/perl-weekly-challenge-212). This is re-produced for `Advent Calendar 2023` from the original [**post**](http://ccgi.campbellsmiths.force9.co.uk/challenge/212).

***

<br>

## Lead to Gold and 1 2 3

<br>

### Task - Jumping letters
***

You are given a word having alphabetic characters only, and a list of positive integers of the same length. Write a script to print the new word generated after jumping forward each letter in the given word by the integer in the list. The given list would have the same number of integers as the number of letters in the given word.

<br>

### Analysis
***

This is an exercise in using `ord` and `chr`. For each letter, we convert (`ord`) it to its `ASCII` value, subtract the `ASCII` value of `'a'`, add `26`, take the result `modulo 26`, add back the `ASCII` for `'a'`, and `chr` the result.

The only slight complication is that upper and lower case letters are allowed, so we need to use `ord('a')` or `ord('A')` depending on the case of the supplied letter.

And so, like the [**Philosopher's Stone**](https://en.wikipedia.org/wiki/Philosopher%27s_stone), we can turn `Lead` into `Gold`.

### Script
***

<br>

```perl
#!/usr/bin/perl

use v5.16;    # The Weekly Challenge - 2023-04-10
use utf8;     # Week 212 task 1 - Jumping letters
use strict;   # Peter Campbell Smith
use warnings; # Blog: http://ccgi.campbellsmiths.force9.co.uk/challenge

advance_letters('Perl', [2, 22, 19, 9]);
advance_letters('Lead', [21, 10, 11, 0]);
advance_letters('Failure', [13, 20, 20, 17, 10, 1, 14]);

sub advance_letters {

    my (@letters, $j, $new, @jumps, $l, $ord_a);

    # input
    @letters = split('', $_[0]);
    @jumps = @{$_[1]};

    # loop over letters
    for $j (0 .. scalar @letters - 1) {
        $l = $letters[$j];

        # get offset - a or A
        $ord_a = ord($l) < ord('a') ? ord('A') : ord('a');

        # append jumped character
        $new .= chr((ord($l) - $ord_a + $jumps[$j]) % 26 + $ord_a);
    }

    # show result
    say qq[\nInput  \$word = '$_[0]' and \@jump = (] . join(', ', @jumps) . q[)];
    say qq[Output:        '$new'];
}
```

<br>

### Output
***

<br>

```perl
Input  $word = 'Perl' and @jump = (2, 22, 19, 9)
Output:        'Raku'

Input  $word = 'Lead' and @jump = (21, 10, 11, 0)
Output:        'Gold'

Input  $word = 'Failure' and @jump = (13, 20, 20, 17, 10, 1, 14)
Output:        'Success'
```

<br>

### Task - Sequential substrings
***

You are given a list of integers and a group size greater than zero.

Write a script to split the list into equal groups of the given size where integers are in sequential order. If it can’t be done then print -1.

<br>

### Analysis
***

I interpreted the requirement as being that the substrings each have to contain an increasing sequence of consecutive integers. I also deduced from the examples that the order of the initial list is not significant, so that for example `3, 1, 2` can be extracted as `1, 2, 3`.

Given that, there are two consequences:

<br>

    * A successful solution demands that the initial list has a length which is a multiple of the substring length.
    * If there is a solution, it is unique as is demonstrated below.

<br>

Let's suppose the substring length is `3`, and we start by sorting the given list, and that yields:

    1, 2, 2, 3, 3, 4, 5, 6, 7

<br>

Consider the 1. The only substring it can possibly be in is `1, 2, 3`. If we remove those figures from the list we are left with:

    2, 3, 4, 5, 6, 7

<br>

If we once again consider the smallest remaining number `- 2 -` it can only be part of a `2, 3, 4` substring. If we continue, eliminating each substring which includes the smallest remining number, there is always a single (or no) solution. Hence any complete solution is unique.

So how to code that? I considered using `an array`, `a hash` or `a string`; none of these is ideal for deleting a member and then closing the gap. So I came up with a `'pool'`. The given list is loaded into `@pool` such that `$pool[$j]` is the number of `$j`'s in the list. So, for example with the initial list given above, `$pool[1]` is `1` (because there is only one `1`), `$pool[2]` is `2` and so on with `$pool[7]` being `1`.

Now we simply start with the first element of the sorted list, decrementing the relevant elements of `@pool` when we identify a compliant substring. For example, we consider `1, 2, 3,` we note that all of `$pool[1]`, `$pool[2]` and `$pool[3]` are `> 1`, and therefore decrement these three elements of `@pool`. Now, the smallest remeaining number in `@pool` is `2`, so we look to see if `$pool[2]`, `[3]` and `[4]` are all `> 0` and if so decrement them, and so on until the pool is empty.

Or, if at any point we can't make a valid substring starting with the currently smallest number in the pool, we can immediately deduce that the given list cannot be split compliantly.

### Script
***

<br>

```perl
#!/usr/bin/perl

use v5.16;    # The Weekly Challenge - 2023-04-10
use utf8;     # Week 212 task 2 -
use strict;   # Peter Campbell Smith
use warnings; # Blog: http://ccgi.campbellsmiths.force9.co.uk/challenge

sequences(3, [8, 7, 3, 5, 2, 1, 0, 4, 6, 9]);
sequences(3, [1, 2, 3, 1, 2, 3, 2, 3, 4, 4, 5, 6]);
sequences(4, [4, 5, 6, 7, 123, 122, 121, 120, 120, 121, 122, 123]);

sub sequences {

    my ($length, @list, $j, @pool, $rubric, $good, $k);

    # initialise
    $length = $_[0];
    @list = sort {$a <=> $b} @{$_[1]};

    say qq[\nInput: \@list = (] . join(', ',@{$_[1]}) . qq[), length = $length];

    # make pool (see blog) - $pool[$j] is the no of $j's in $list
    for $j (0 .. scalar @list - 1) {
        $pool[$list[$j]] ++;
    }

    # start looping
    $j = $list[0];
    while (1) {

        # nothing left
        last if $j > $list[scalar @list - 1];

        # is there any a(nother) $j entry?
        $pool[$j] += 0;
        if ($pool[$j] > 0) {

            # is there a sequence starting here?
            $good = 1;
            for $k ($j .. $j + $length - 1) {
                $pool[$k] += 0;
                $good = 0 unless $pool[$k] > 0;
            }

            # yes there is
            if ($good) {
                $rubric .= '(';

                # take members of sequence out of pool
                for $k ($j .. $j + $length - 1) {
                    $pool[$k] --;
                    $rubric .= qq[$k, ];
                }
                $rubric = qq[] . substr($rubric, 0, -2) . q[), ];
            } else {
                say qq[Output: -1 ($j cannot be part of a substring)];
                return;
            }
        }

        # try next pool member unless there is another $j
        $j ++ unless $pool[$j];
    }
    say qq[Output: ] . substr($rubric, 0, -2);
}
```

<br>

### Output
***

<br>

```perl
Input: @list = (8, 7, 3, 5, 2, 1, 0, 4, 6, 9), length = 3
Output: (0, 1, 2), (3, 4, 5), (6, 7, 8)

Input: @list = (1, 2, 3, 1, 2, 3, 2, 3, 4, 4, 5, 6), length = 3
Output: (1, 2, 3), (1, 2, 3), (2, 3, 4), (4, 5, 6)

Input: @list = (4, 5, 6, 7, 123, 122, 121, 120, 120, 121, 122, 123), length = 4
Output: (4, 5, 6, 7), (120, 121, 122, 123), (120, 121, 122, 123)
```

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

| &nbsp; [**Advent Calendar 2023**](/blog/advent-calendar-2023) &nbsp; |
