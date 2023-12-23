---
title: "Advent Calendar - December 23, 2023"
date: 2023-12-23T00:00:00+00:00
description: "Advent Calendar - December 23, 2023."
type: post
image: images/blog/2023-12-23.jpg
author: Ian Rifkin
tags: ["Perl", "Raku", "Python"]
---

## [**Advent Calendar 2023**](/blog/advent-calendar-2023)
### | &nbsp; [**Day 22**](/blog/advent-calendar-2023-12-22) &nbsp; | &nbsp; **Day 23** &nbsp; |
***

The gift is presented by `Ian Rifkin`. Today he is talking about his solution to [**The Weekly Challenge - 240**](/blog/perl-weekly-challenge-240). This is re-produced for `Advent Calendar 2023` from the original [**post**](https://github.com/ianrifkin/perlweeklychallenge-club/blob/ianrifkin-challenge-240/challenge-240/ianrifkin/README.md).

***

<br>

## A.A.B.A. (Acronym And Build Array)
***

### Task 1: Acronym

    You are given an array of strings and a check string.
    Write a script to find out if the check string is the acronym of the words in the given array.

    Example 1

        Input: @str = ("Perl", "Python", "Pascal")
               $chk = "ppp"
           Output: true

    Example 2

           Input: @str = ("Perl", "Raku")
               $chk = "rp"
             Output: false

    Example 3

        Input: @str = ("Oracle", "Awk", "C")
               $chk = "oac"
        Output: true

<br>

I am sure there are plenty of more interesting ways to solve this but the way my mind works is to create a real acronym by looping through each word in the in the input array to get the first letter.

<br>

```perl
sub check_acronym {
    my ($acronym, $words) = @_;
    my $real_acronym;
    foreach (@{$words}) {
        $real_acronym .= substr($_, 0, 1);
    }
```

<br>

With that in place just compare the strings, forcing them both into uppercase so that it's a case insensitive comparison. You could also do this with a simple `RegEx` compare but this feels simpler to write/read to my brain.

<br>

```perl
uc($acronym) eq uc($real_acronym) ? print "true\n" : print "false\n";
```

<br>

I did a similar approach with `Raku` and `Python`. With `Perl` the final print statement is a conditional so that it will print the words `"true"` or `"false"` instead of `0` or `1` but that's not needed with `Python` and `Raku`.

<br>

### Source Code
***

[ &nbsp; [**Perl**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-240/ianrifkin/perl/ch-1.pl) &nbsp; |
 &nbsp; [**Raku**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-240/ianrifkin/raku/ch-1.raku) &nbsp; |
 &nbsp; [**Python**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-240/ianrifkin/python/ch-1.py) &nbsp; ]

<br>

### Task 2: Build Array

    You are given an array of integers.
    Write a script to create an array such that new[i] = old[old[i]] where 0 <= i < new.length.

    Example 1
        Input: @int = (0, 2, 1, 5, 3, 4)
        Output: (0, 1, 2, 4, 5, 3)

    Example 2
        Input: @int = (5, 0, 1, 2, 3, 4)
        Output: (4, 5, 0, 1, 2, 3)

<br>

Doing `new[i] = old[old[i]]` seemed simple enough but I do have trouble mentally processing where `0 <= i < new.length`. If `i` is a postion of the input array it is always going to be equal to or greater than `0` because of how arrays are numbered. Since each `new[i]` is mapped to a value calculated from the old array they should naturally end up the same length, so `i` should never be longer than `new.length` because `i` shouldn't be less than `old.length` either.

With that out of the way, I did a simple for loop using the iterator variable `$i` -- within the loop I am literally just doing the exact mapping from the question: `new[i] = old[old[i]]`

<br>

```perl
for (my $i = 0; $i < @ints; $i++) {
    $new_ints[$i] = $ints[$ints[$i]];
}
```

<br>

That's it! After the loop I print the new array in the desired format:

<br>

```perl
print "(" . join(', ', @new_ints) . ")\n";
```

<br>

This task sounded more complicated so I will be curious to see if others took a more interesting approach.

<br>

### Source Code
***

[ &nbsp; [**Perl**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-240/ianrifkin/perl/ch-2.pl) &nbsp; |
 &nbsp; [**Raku**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-240/ianrifkin/raku/ch-2.raku) &nbsp; |
 &nbsp; [**Python**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-240/ianrifkin/python/ch-2.py) &nbsp; ]

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

| &nbsp; [**Advent Calendar 2023**](/blog/advent-calendar-2023) &nbsp; |
