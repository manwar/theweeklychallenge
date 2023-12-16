---
title: "Advent Calendar - December 15, 2023"
date: 2023-12-15T00:00:00+00:00
description: "Advent Calendar - December 15, 2023."
type: post
image: images/blog/2023-12-15.jpg
author: Adam Russell
tags: ["Perl"]
---

## [**Advent Calendar 2023**](/blog/advent-calendar-2023)
### | &nbsp; [**Day 14**](/blog/advent-calendar-2023-12-14) &nbsp; | &nbsp; **Day 15** &nbsp; | &nbsp; [**Day 16**](/blog/advent-calendar-2023-12-16) &nbsp; |
***

The gift is presented by `Adam Russell`. Today he is talking about his solution to [**The Weekly Challenge - 225**](/blog/perl-weekly-challenge-225). This is re-produced for `Advent Calendar 2023` from the original [**post**](http://rabbitfarm.com/cgi-bin/blosxom/perl/2023/07/13).

***

<br>

## Sentenced To Compute Differences
***

The examples used here are from the weekly challenge problem statement and demonstrate the working solution.

### Part 1

    You are given a list of sentences.
    Write a script to find out the maximum number of words that appear in a single sentence.

<br>

### Solution

<br>

```perl
use v5.38;
sub max_sentence_length{
    my(@sentences) = @_;
    my $max_words = -1;
    do{
        my @word_matches = $_ =~ m/(\w+)/g;
        $max_words = @word_matches if @word_matches > $max_words;
    } for @sentences;
    return $max_words;
}

MAIN:{
    my @list;
    @list = ("Perl and Raku belong to the same family.", "I love Perl.",
"The Perl and Raku Conference.");
    say  max_sentence_length(@list);
    @list = ("The Weekly Challenge.", "Python is the most popular guest language.",
"Team PWC has over 300 members.");
    say  max_sentence_length(@list);
}
```

<br>

### Sample Run

<br>

```perl
$ perl perl/ch-1.pl
8
7
```

<br>

### Notes

This is the perfect job for a regular expression! In fact `\w` is a special character sequence which matches word characters, so they heart of the solution is to apply it to the given sentences and count the matches.

The expression `my @word_matches = $_ =~ m/(\w+)/g` may look a little weird at first. What is happening here is that we are collecting all groups of matchs (enclosed in parentheses in the regex) into a single array. In this way, we immediately know the number of words in each sentence, it is just the size of the array.

<br>

### Part 2

    You are given an array of integers. Write a script to return left right sum difference array.

<br>

### Solution

<br>

```perl
use v5.38;
sub left_right_sum{
    return unpack("%32I*", pack("I*", @_));
}

sub left_right_differences{
    my(@left_sum, @right_sum);
    for(my $i = 0; $i < @_; $i++){
        push @left_sum, left_right_sum(@_[0 .. $i - 1]);
        push @right_sum, left_right_sum(@_[$i + 1 .. @_ - 1]);
    }
    return map { abs($left_sum[$_] - $right_sum[$_]) } 0 .. @_ - 1;
}

MAIN:{
    say join(q/, /, left_right_differences 10, 4, 8, 3);
    say join(q/, /, left_right_differences 1);
    say join(q/, /, left_right_differences 1, 2, 3, 4, 5);
}
```

<br>

### Sample Run

<br>

```perl
$ perl perl/ch-2.pl
15, 1, 11, 22
0
14, 11, 6, 1, 10
```

<br>

### Notes

The problem statement may be a little confusing at first. What we are trying to do here is to get two lists the `prefix sums` and `suffix sums`, also called the `left` and `right` sums. We then pairwise take the absolute values of each element in these lists to get the final result. Iterating over the list the prefix sums are the partial sums of the list elements to the left of the current element. The suffix sums are the partial sums of the list elements to the right of the current element.

With that understanding in hand the solution becomes much more clear! We iterate over the list and then using slices get the prefix and suffix arrays for each element. Using my favorite way to sum a list of numbers, `left_right_sum()` does the job with `pack/unpack`. Finally, a map computes the set of differences.

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

| &nbsp; [**Advent Calendar 2023**](/blog/advent-calendar-2023) &nbsp; |
