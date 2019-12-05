---
title: "Advent Calendar - December 5, 2019"
date: 2019-12-05T00:00:00+00:00
description: "Advent Calendar - December 5, 2019"
type: post
image: images/blog/2019-12-05.jpg
author: Neil Bowers
tags: ["Perl"]
---

[**Advent Calendar 2019**](/blog/advent-calendar-2019)
***

The gift is presented by **Neil Bowers**. Today he is talking about his solutions to **Task #2: Longest English word using US state postal abbreviation** of [**"The Weekly Challenge - 014"**](/blog/perl-weekly-challenge-014).

#### Using only the official postal (2-letter) abbreviations for the 50 U.S. states, write a script to find the longest English word you can spell? Here is the list of U.S. states abbreviations as per [wikipedia](https://en.wikipedia.org/wiki/List_of_U.S._state_abbreviations) page.

***

I've got the state codes in a file, so the first thing is to load them into an array:

```perl
    use File::Slurper qw/ read_lines /;

    my @states = read_lines('state-codes.txt');
```

I've got a word list, with one word per line, so I can similarly load those:

```perl
    my @words = read_lines('word-list.txt');
```

We're only interested in words that are made up of state codes. We can make a regular expression for that:

```perl
    my $regexp = join('|', @states);
    my @words  = grep { /^($re)+$/ }
                 read_lines('word-list.txt');
```

State codes are all two letters, so we know that the string is going to have an even number of letters in it. The regular expression will enforce that, but applying an even-length check before applying the regular expression check will be faster:

```perl
    my $regexp = join('|', @states);
    my @words  = grep { /^($re)+$/ }
                 grep { length($_) % 2 == 0 }
                 read_lines('word-list.txt');
```

It takes less than a second to run my solution anyway, so I didn't keep the even-length check.

We want to find the longest such word, so we can sort into order of decreasing length, and then the first string we find is the answer:

```perl
    sort { length($b) <=> length($a) }
```

Putting all of those together, I came up with this:

```perl
    use File::Slurper qw/ read_lines /;

    my @states = read_lines('state-codes.txt');
    my $re     = join('|', @states);
    my @words  = grep { /^($re)+$/ }
                 sort { length($b) <=> length($a) }
                 read_lines('word-list.txt');

    print $words[0], "\n";
```

Which, for my word list, produces **cascarilla** ("the aromatic bark of a West Indian shrub").

## No duplicates

The above solution lets you use states more than once. But imagine you have a bag of 50 scrabble-like tiles, one for each state, and you have to make the longest word you can with these.

As it happens, the longest word found, **cascarilla**, doesn't use any state more than once. But what if we're listing all of the words we can make with the tiles?

For this, split each word into pairs of letters, and then remove any duplicates. If the resulting list is no different, then the word's good.

For removing duplicates my first thought was a hash:

```perl
    foreach my $word (@words) {
        my @pairs     = $word =~ /([a-z][a-z])/g;
        my @uniqpairs = keys %{ { map { $_ => 1 } @pairs } };
        print "$word\n" if @pairs == @uniqpairs;
    }
```
That line's a bit hairy, so my next thought was to use **uniqstr()** from **List::Util**:

```perl
    use List::Util qw/ uniqstr /;

    foreach my $word (@words) {
        my @pairs     = $word =~ /([a-z][a-z])/g;
        my @uniqpairs = uniqstr @pairs;
        print "$word\n" if @pairs == @uniqpairs;
    }
```

This removes **20 words** that were found by the first solution.

***
***
If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2019**](/blog/advent-calendar-2019)
