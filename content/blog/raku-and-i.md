---
title: "Raku and I: Journey begin ..."
date: 2022-12-20T00:00:00+00:00
description: "Story about my journey with Raku."
type: post
image: images/blog/raku-and-i.png
author: Mohammad S Anwar
tags: ["Raku"]
---

## Raku and I: Journey begin ...
***

<br>

It has been ages since I last blogged about `Raku`. The only time, I have blogged about when I took part in [**The Weekly Challenge**](https://theweeklychallenge.org). But then this also changed recently as I finally found time to contribute to the weekly fun challenges but no blogging still.

I would say it is all about my mental state, since I have so much to talk about. Recently I was approached by a very dear friend and senior member of `Raku Community` if I am interested in contributing to the [**Raku Advent Calendar 2022**](https://raku-advent.blog/category/2022). So as you guessed it rightly so, I have a compelling reason to get back to blogging.

<br>

**But then you know ....**

<br>

I always have too many things on my plate, so getting done something new is always tricky. However I had made up my mind, no matter what I would give it my best shot.

<br>

**Here I am ...**

<br>

**So what am I going to talk about then?**

<br>

Those who know me personally, are aware that I am a `Perl` guy by nature. Having said, I started playing with other languages recently thanks to the vibrant group of `Team PWC`. In this blog post, I would like to talk about some of my contributions to the weekly challenge in the new found love `Raku` language.

<br>

## 1: Prime Sum

You are given a number `$N`. Write a script to find the minimum number of prime numbers required, whose summation gives you `$N`.

***

With the power of `Raku` built-in features, it is a piece of cake, if you know what you are doing. For me, the official [**Raku Documentation**](https://docs.raku.org) is the answer to all my questions. And if I can't find what I am looking for then I ask my friends on various social platform. `9 out of 10 times`, I get the answer instantly.

So in this case, all the hard work in done by `is-prime`. I am a big fan of method chaining as you can see below. Just for the sake of the reader, I go through the list `2..$sum` and `grep` everything that `is-prime`.

<br>

**Isn't beautiful? For me, it is.**

<br>

```perl
sub find-prime-upto(Int $sum) {
    return (2..$sum).grep: { .is-prime };
}
```

<br>

Now with the handy subroutine ready, we are read to solve the task as below:

For my `Perl` friends new to `Raku`, the only thing might trouble you is the use of `[+]`, right?

It is the `Reduction Operator []` that works on lists of values.

<br>

```perl
sub prime-sum(Int $sum) {

    my @prime = find-prime-upto($sum);
    my @prime-sum = Empty;
    for 1..$sum -> $i {
        for @prime.combinations: $i -> $j {
            my $_sum = [+] $j;
            @prime-sum.push: $j if $_sum == $sum;
        }
    }

    return @prime-sum;
}
```

<br>

Now glue together everything as below:

<br>

```perl
use v6.d;

sub MAIN(Int $SUM where $SUM > 0) {
    prime-sum($SUM).join("\n").say;
}
```

<br>

Still not done yet as unit test is nice to have.

<br>

```perl
use Test;

is-deeply prime-sum(6).<>,  [],                  "prime sum = 6";
is-deeply prime-sum(9).<>,  [(2, 7),],           "prime sum = 9";
is-deeply prime-sum(12).<>, [(5, 7), (2, 3, 7)], "prime sum = 12";

done-testing;
```

<br>

## 2: Fibonacci Sum

Write a script to find out all possible combination of `Fibonacci Numbers` required to get `$N` on addition.

You are `NOT` allowed to repeat a number. Print `0` if none found.

***
<br>

You may find the solution below somewhat similar to the above work but there is something new for `Perl` fans. In `Perl` we can get the last element of a list `$list[-1]` but in `Raku` it is slightly different as you see below.

One more thing, if you look at closely the parameter checks done in the signature itself which we don't have in `Perl`.

`Raku` rocks !!!

<br>

```perl
sub fibonacci-series-upto(Int $num where $num > 0) {
    my @fibonacci = (1, 2);
    while @fibonacci.[*-1] + @fibonacci.[*-2] <= $num {
        @fibonacci.push: @fibonacci.[*-1] + @fibonacci.[*-2];
    }

    return @fibonacci;
}
```

<br>

Now we are ready to solve the task as below:

**Did you notice something special here?**

Yes, `.combinations`. Again all built-in, no need to import any library. It generates all possible combinations of given size.

<br>

```perl
sub fibonacci-sum(Int $sum where $sum > 0) {

    my @fibonacci     = fibonacci-series-upto($sum);
    my @fibonacci_sum = Empty;
    for 1 .. $sum -> $i {
        last if $i > @fibonacci.elems;
        for @fibonacci.combinations: $i -> $comb {
            my $_sum = [+] $comb;
            @fibonacci_sum.push: $comb if $_sum == $sum;
        }
    }

    return |@fibonacci_sum;
}
```

<br>

Final application.

<br>

```perl
use v6.d;

sub MAIN(Int :$N where $N > 0) {
    fibonacci-sum($N).join("\n").say;
}
```

<br>

Time for some unit test too.

<br>

```perl
use Test;

is-deeply fibonacci-sum(6), ((1,5), (1,2,3)), "fibonacci sum = 6";
is-deeply fibonacci-sum(9), ((1,8), (1,3,5)), "fibonacci sum = 9";

done-testing;
```

<br>

## 3: Count Set Bits

You are given a positive number `$N`.

Write a script to count the total numbrer of set bits of the binary representations of all numbers from `1` to `$N` and return `$total_count_set_bit % 1000000007`.

***
<br>

For this task, `Raku` has most of the funtions built-in, so nothing to be invented.

As you see, it is one-liner, `(1..$n).map( -> $i { $c += [+] $i.base(2).comb; });` where all the work is done.

`.map()` works same as in `Perl`. In this case each element gets assigned to `$i`. Further on `$i` gets converted to `base 2` i.e. binary form then finally split into individual digits using `.comb`.

How can you not fall in love with `Raku`?

<br>

```perl
sub count-set-bits(Int $n) {
    my $c = 0;
    (1..$n).map( -> $i { $c += [+] $i.base(2).comb; });
    return $c % 1000000007;
}
```

<br>

Unit test to go with it.

<br>

```perl
use Test;

is count-set-bits(4), 5, "testing example 1";
is count-set-bits(3), 4, "testing example 2";

done-testing;
```

<br>

## 4: Smallest Positive Number

You are given unsorted list of integers `@N`.

Write a script to find out the smallest positive number missing.

***
<br>

This task introduced me something new that I wasn't aware of earlier.

I always wanted to put check on the elements of input list. In this task, I am checking every elements in the given input list is integer. Also the return value is of type integer too. All these done with one line `@n where .all ~~ Int --> Int`. This is the power of `Raku` we can have the power in our script.

Also to sort a list, just use `.sort` together with `.grep` makes it very powerful.

The `.elems` gives me the total number of elements in the list.

<br>

```perl
sub smallest-positive-number(@n where .all ~~ Int --> Int) {

    my @positive-numbers = @n.sort.grep: { $_ > 0 };
    return 1 unless @positive-numbers.elems;

    my Int $i = 0;
    (1 .. @positive-numbers.tail).map: -> $n {
        return $n if $n < @positive-numbers[$i++]
    };

    return ++@positive-numbers.tail;
}
```

<br>

Final application looks like below.

**Did you see something new?**

Well, it shows how to set the default parameter values.

<br>

```perl
use v6.d;

sub MAIN(:@N where .all ~~ Int = (2, 3, 7, 6, 8, -1, -10, 15)) {
    say smallest-positive-number(@N);
}
```

<br>

Time for unit test again.

<br>

```perl
use Test;

is smallest-positive-number((5, 2, -2, 0)),  1,
   "testing (5, 2, -2, 0)";
is smallest-positive-number((1, 8, -1)),     2,
   "testing (1, 8, -1)";
is smallest-positive-number((2, 0, -1)),     1,
   "testing (2, 0, -1)";

done-testing;
```

<br>

## CONCLUSION

<br>

Learning `Raku` is an ongoing journey and I am loving it. I haven't shared everything to be honest. If you are interested then you can checkout the rest in my [**collections**](https://theweeklychallenge.org/blogs).

Enjoy the break and stay safe.
