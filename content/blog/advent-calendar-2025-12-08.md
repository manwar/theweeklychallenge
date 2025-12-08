---
title: "Advent Calendar - December 8, 2025"
date: 2025-12-08T00:00:00+00:00
description: "Advent Calendar - December 8, 2025."
type: post
image: images/blog/2025-12-08.jpg
author: Jaldhar H. Vyas
tags: ["Raku", "Perl"]
---

## [**Advent Calendar 2025**](/blog/advent-calendar-2025)
### | &nbsp; [**Day 7**](/blog/advent-calendar-2025-12-07) &nbsp; | &nbsp; **Day 8** &nbsp; |
***

The gift is presented by `Jaldhar H. Vyas`. Today he is talking about his solutioni to [**The Weekly Challenge - 310**](/blog/perl-weekly-challenge-310). This is re-produced for `Advent Calendar 2025` from the original [**post**](https://www.braincells.com/perl/2025/03/perl_weekly_challenge_week_310.html).

***

<br>

## Challenge 1: Arrays Intersection

You are given a list of array of integers.

Write a script to return the common elements in all the arrays.

## Example 1

    Input: $list = ( [1, 2, 3, 4], [4, 5, 6, 1], [4, 2, 1, 3] )
    Output: (1, 4)

## Example 2

    Input: $list = ( [1, 0, 2, 3], [2, 4, 5] )
    Output: (2)

## Example 3

    Input: $list = ( [1, 2, 3], [4, 5], [6] )
    Output: ()

<br>

This is another challenge we can solve with a `Raku` one-liner:

<br>

```raku
say q{(},([∩] @*ARGS».words).keys.sort({$^a <=> $^b}).join(q{, }),q{)}
```

<br>

[**(Full code on Github.)**](https://github.com/jaldhar/perlweeklychallenge-club/blob/master/challenge-310/jaldhar-h-vyas/raku/ch-1.sh)

<br>

The input is entered in the form of a series of command-line arguments where each argument is a string containing a list of integers separated by whitespace. So for example the input for example 1 would look like `"1 2 3 4" "4 5 6 1" "4 2 1 3`. These arguments (contained in `@*ARGS`) are split back into `Lists` with the hyper operator `»` and `.words()`.

The intersection operator `∩` is run over all these lists by enclosing it in the reduction operator `[]`. The result of this is a `Set` of all the common elements. We can extract the elements from this with `.keys()`. For good measure, the result is `.sort()`ed in ascending numeric order and the rest of the code is just for printing it out in the style of the examples.

For `Perl` we have to work around missing `Raku` features. In lieu of `».words`, we use `map()` and `split()`. This creates a list of list references.

<br>

```perl
my @list = map { [ split /\s+/, $_ ] } @ARGV;
```

<br>

We need a replacement for `[∩]` and I had one; well, almost. My `intersection()` function only works on two arguments. Luckily, we can emulate reduction like this:

The result will be in, naturally, `@lists`. We initialize `@lists` with the first of our lists which we extract with `shift()`. As it is a list reference, first we need to cast it back into a list.

<br>

```perl
my @result = @{shift @list};
```

<br>

Now we find the intersection of `@result` and each consecutive list and assign it back to `@result`.

<br>

```perl
for my $arr (@list) {
    @result = intersection(\@result, $arr);
}
```

<br>

When this is done, we have the intersection or in other words, all the common elements of the input. All that remains is to sort and print the result as in Raku.

<br>

```perl
say q{(}, (join q{, }, sort { $a <=> $b } @result), q{)};
```

<br>

[**(Full code on Github.)**](https://github.com/jaldhar/perlweeklychallenge-club/blob/master/challenge-310/jaldhar-h-vyas/perl/ch-1.pl)

<br>

## Challenge 2: Sort Odd Even

You are given an array of integers.

Write a script to sort odd index elements in decreasing order and even index elements in increasing order in the given array.

## Example 1

    Input: @ints = (4, 1, 2, 3)
    Output: (2, 3, 4, 1)

    Even index elements: 4, 2 => 2, 4 (increasing order)
    Odd index elements : 1, 3 => 3, 1 (decreasing order)

## Example 2

    Input: @ints = (3, 1)
    Output: (3, 1)

## Example 3

    Input: @ints = (5, 3, 2, 1, 4)
    Output: (2, 3, 4, 1, 5)

    Even index elements: 5, 2, 4 => 2, 4, 5 (increasing order)
    Odd index elements : 3, 1 => 3, 1 (decreasing order)

`Raku` has a very nice method that can do most of the work for this challenge for us, called `.classify()`. In the line below, first we find the indices of each element of `@ints` with `.keys()`. Then in the call to `.classify()`, the first paramter is a test which will be performed on each element of the keys. Depending on the result, the element will be assigned to the 'odd' or 'even' key of the hash specified by the third or into parameter. As we actually want the value of the element not the index, we can transform what actually gets added to the hash with the code in the seconnd or 'as' parameter.

<br>

```raku
@ints.keys.classify({ $_ %% 2 ?? 'evens' !! 'odds' }, as => { @ints[$_] }, into => my %oe);
```

<br>

Once we have the odds and evens we can sort them the way the spec suggests and assign them to arrays.

<br>

```raku
my @evens = %oe<evens>.sort({$^a <=> $^b});
my @odds =  %oe<odds>.sort({$^b <=> $^a});
```

<br>

I thought an easy way to create the result would be two take elements from each of the arrays with the `Z` operator but the problem is that operator does not deal very well with arrays of different lengths. In example 2, for instance, the `@evens` array has 0 elements and `@odds` has 2. So instead, we iterate through each array and add elements by `shift()`ing thme from tha array and adding it to the `@result` array.

<br>

```raku
my @result;
while @evens || @odds {
    if @evens {
        @result.push(@evens.shift);
    }
    if @odds {
        @result.push(@odds.shift);
    }
}
```

<br>

After this process, we can just print out @result in the style suggested by the spec.

<br>

```raku
say q{(}, @result.join(q{, }), q{)};
```

<br>

[**(Full code on Github.)**](https://github.com/jaldhar/perlweeklychallenge-club/blob/master/challenge-309/jaldhar-h-vyas/raku/ch-2.raku)

For the `Perl` version, we don't need addition code but not having `.classify()` means we have to do the first part a little differently. Instead of building a hash first, we push keys of `@ints` directly into `@evens` and `@odds` based on, well, whether they are even or odd.

<br>

```perl
my @evens;
my @odds;

for my $k (keys @ints) {
    if ($k % 2 == 0) {
        push @evens, $ints[$k];
    } else {
        push @odds, $ints[$k];
    }
}
```

<br>

The rest work exactly the same as in `Raku`.

<br>

```perl
@evens = sort {$a <=> $b} @evens;
@odds = sort {$b <=> $a} @odds;

my @result;
while (@evens || @odds) {
    if (@evens) {
        push @result, shift @evens;
    }
    if (@odds) {
        push @result, shift @odds;
    }
}

say q{(}, (join q{, }, @result), q{)};
```

<br>

[**(Full code on Github.)**](https://github.com/jaldhar/perlweeklychallenge-club/blob/master/challenge-309/jaldhar-h-vyas/perl/ch-2.pl)

<br>

***

If you have any suggestion then please do share with us **<perlweeklychallenge@yahoo.com>**.

| &nbsp; [**Advent Calendar 2025**](/blog/advent-calendar-2025) &nbsp; |
