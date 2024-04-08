---
title: "Andrew Shitov Weekly Review: Challenge - 263"
date: 2024-04-08T00:00:00+00:00
description: "Andrew Shitov Weekly Review: Challenge - #263."
type: post
image: images/blog/p6-review-challenge-263.jpg
author: Andrew Shitov
tags: ["Raku"]
---
***
# Raku Solutions Weekly Review
***

# Task 1

In the first task, you have an array of integers `@ints` and a target number `$k`. You need to print the indices of those elements, which are equal to the target, but you need to search in the sorted source data.

## Thoughts

What does Raku offer that can be used in this task? First, the [`sort` routine](https://docs.raku.org/routine/sort), which you can use as a method or as a stand-alone function:

```raku
my @ints = 1, 5, 3, 2, 4, 2;

say @ints.sort;  # (1 2 2 3 4 5)
say sort(@ints); # (1 2 2 3 4 5)
```

By the way, the `sort` routine in Raku is smart enough to take care of correclty sorting both numbers and strings. Compare the following two sortings:

```raku
my @ints = 1, 2, 10, 20;
say @ints.sort;

my @strs = '1', '2', '10', '20';
say @strs.sort;
```

The result is expectedly correct:

```
(1 2 10 20)
(1 10 2 20)
```

Back to the task, and the second mean in Raku to be used here is [the `grep` routine](https://docs.raku.org/routine/grep) that finds the elements with the given condition. Our condition is the equality with the target value `$k`, so in terms of Raku you can choose one of the following approaches:

```raku
my @data = @ints.sort;
my $k = 2;
say @data.grep: * == $k;    # (2 2)
say @data.grep({$_ == $k}); # (2 2)
```

The tricky point here is to get the indices of the elements that match the condition. You cannot do it directly after you have already filtered the data. Instead, you may think of making a loop over the values and gathering the indices:

```raku
say gather {
    for ^@data -> $index {
        take $index if @data[$index] == $k;
    }
} # (1 2)
```

Raku, nevertheless, has a better solution. Just use the [`:k` flag of `grep`](https://docs.raku.org/routine/grep#(List)_routine_grep). In this case, instead of returing the values, `grep` returns the indices of the matched elements, which is exactly what is needed.

```raku
say @data.grep: * == $k, :k; # (1 2)
```

## Solutions

All of the above steps can be chained to get a construction like this, as you can see in the solutions propopsed by a number of authors. Notice that you even don’t have to explicitly use comparison and thus the condition can be shortened to a bare minumum: `$k`.

```raku
@ints.sort.grep: $k, :k
```

<br>

- [**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-263/arne-sommer/raku/ch-1.raku)
- [**Asher Harvey-Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-263/asherbhs/raku/ch-1.raku)
- [**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-263/bruce-gray/raku/ch-1.raku)
- [**Feng Chang**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-263/feng-chang/raku/ch-1.raku)
- [**Humberto Massa**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-263/massa/raku/ch-1.raku)
- [**Mark Anderson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-263/mark-anderson/raku/ch-1.raku)
- [**Robert Ransbottom**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-263/0rir/raku/ch-1.raku)
- [**Andrew Shitov**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-263/ash/raku/ch-1.raku)

[**Jan Krňávek**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-263/wambash/raku/ch-1.raku) does effectively the same but he prefers to use [`andthen`](https://docs.raku.org/routine/andthen) instead of dots:

<br>

```raku
sub target-index (+ints,:$k) {
    ints
    andthen .sort
    andthen .grep: { $_ == $k },:k
}
```

<br>

[**Luca Ferrari**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-263/luca-ferrari/raku/ch-1.raku) uses the [smartmatch `~~` oprartor](https://docs.raku.org/routine/~~) for comparison. In our case, it compares numbers, so it is equivalent to `==`.

<br>

```raku
@nums.sort.grep( * ~~ $k, :k ).say;
```

A slightly different algorithm is used by some authors. Instead of grepping and looking for an index, they use a tricky condition to grep indices directly:

```raku
my @sorted = @in.sort;
my @out = grep {@sorted[$_] == $target}, 0..@sorted.end;
```

<br>

- [**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-263/jaldhar-h-vyas/raku/ch-1.raku)
- [**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-263/laurent-rosenfeld/raku/ch-1.raku)

<br>

You can code it differently, for example:

```raku
sub targetindex(@a0, $k) {
    my @a = @a0.sort({$^a <=> $^b});
    return [(0 .. @a.end).grep({@a[$_] == $k})];
}
```

<br>

- [**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-263/roger-bell-west/raku/ch-1.p6):
- [**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-263/ulrich-rieke/raku/ch-1.raku)

<br>

Further, let’s look at the solutions with a loop, for example:

```raku
for @sorted.kv -> $i, $v {
    next unless $v == $k;
    @output.push($i);
}
```

<br>

- [**Packy Anderson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-263/packy-anderson/raku/ch-1.raku)

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-263/athanasius/raku/ch-1.raku) uses a loop too, but it is always interesting to see that Raku allows completely different style of programming with more control over the types of the variables, function arguments and return values.

<br>

```raku
#-------------------------------------------------------------------------------
sub find-target-indices( List:D[Int:D] $ints, Int:D $k --> List:D[UInt:D] )
#-------------------------------------------------------------------------------
{
    my UInt @indices;
    my Int  @sorted = $ints.sort;

    for 0 .. @sorted.end -> UInt $i
    {
        @indices.push: $i if @sorted[ $i ] == $k;
    }

    return @indices;
}
```

<br>

[**BarrOff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-263/barroff/raku/ch-1.p6) demonstrates another appoach. The program uses [the `indices` function](https://docs.raku.org/routine/indices). It works on strings and returns the indices of the matching characters, so you need to convert the array of integers to a string first. The method works with the test samples, where all the numbers are below 10, so they can be spellt with a single character.

<br>

```raku
sub target-index(Int:D $k, @ints --> Positional) {
    indices(@ints.sort.join, $k)
}
```

## Bonus

As a bonus, examine the following alternative code submitted by [Bruce Gray](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-263/bruce-gray/raku/ch-1.raku) in Raku:

<br>

```raku
sub task1_single_pass_without_sorting ( UInt $k, @ns ) {
    return flat .{Less} + ^.{Same} given ( @ns »<=>» $k ).Bag;
}
```

<br>

Open the source code to find additional information about this algorithm and the link to [**the solution by Peter Campbell Smith in Perl**](http://ccgi.campbellsmiths.force9.co.uk/challenge/263/1) .
