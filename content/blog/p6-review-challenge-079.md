---
title: "Andrew Shitov Weekly Review: Challenge - 079"
date: 2020-09-29T00:00:00+00:00
description: "Andrew Shitov Weekly Review: Challenge - #079."
type: post
image: images/blog/p6-review-challenge-079.jpg
author: Andrew Shitov
tags: ["Raku"]
---
***
# Raku Solutions Weekly Review
***

## Getting in Touch

<a href="mailto:andy@shitov.ru"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Email me (Andrew) with any feedback about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

We'd greatly appreciate any feedback you'd like to give.

***

<br>

Welcome to the **Raku Review** for **Week 079** of **The Weekly Challenge!**. For a quick overview, go through the [**original tasks**](/blog/perl-weekly-challenge-079/) and [**recap**](/blog/recap-challenge-079/) of the weekly challenge.

<br>

## Task 1. Count Set Bits

This week, the participants were solving a variation of the classical problem of counting bits in a range of numbers. There are different approaches ranging from straightforward bit-by-bit testing to using formulae, and we have a variety of solutions submitted.

### Counting the bits

The most direct method is to check all the bits in the number and repeat the procedure for all the numbers from `1` to `$N`. Here is a possible way to do that that we see in the solution by [Kang-min Liu](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/gugod/raku/ch-1.raku#L10):

```perl6
    $c += ($n % 2);
    $n div= 2;
```

Another way is to use bitwise operations, as [Roger Bell_West did it](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/roger-bell-west/raku/ch-1.p6#L16):

```perl6
    $bits += $k +& 1;
    $k +>= 1;
```
[Jan Krnavek used](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/wambash/raku/ch-1.raku#L3) the [`polymod` method](https://docs.raku.org/routine/polymod) to get all the remainders after dividing a number by modulo 2:


    1 .. $n
    andthen .map: |*.polymod(2 xx *)
    andthen .sum

### Binary representation

In Raku, you can easily convert any number to a string with its binary representation by calling the `base` method on it: `$n.base(2)`. Alternatively, you can use a formatting string, for example: `$n.fmt('%b')`. Having such a string, you can count all `1`s in it. Again, there is more than one way to do it. Let us briefly look at the examples found in the submitted programs.

[My solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/ash/raku/ch-1a.raku#L20) with a regex:

```perl6
    [+] ((.base(2) ~~ m:g/1/).elems for 1..$n)
```

[Mark Anderson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/mark-anderson/raku/ch-1.raku) with a non-default argument to `comb`:

```perl6
    (1..$N).map(*.base(2)).comb(/1/).elems
```

[Simon Proctor](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/simon-proctor/raku/ch-1.raku):

```perl6
    [+] (1..$N).race.map( *.base(2).comb ).flat
```

Notice a good idea to use `race` here, as we can make the computations faster and we don’t care about the order.

[Arne Sommer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/arne-sommer/raku/ch-1.raku):

```perl6
    (1..$N).map({ $_.fmt('%b') })>>.comb.flat.sum
```

[Colin Crain](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/colin-crain/raku/ch-1.raku#L69):

```perl6
    my $tot += .base(2).comb.sum for ^$input;
```

Once again, let me point out how easily Raku switches between the string and numeric representations. The topic variable in this `for` loop is a number which is then converted to a string and is split into separate characters, which then are treated as numbers in the final summation.

[Jaldhar H. Vyas](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/jaldhar-h-vyas/raku/ch-1.p6):

```perl6
    my $total = [+] (1 .. $N).map({ sprintf("%b", $_) ~~ m:g/ 1 /; });
```

[Laurent Rosenfeld](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/laurent-rosenfeld/raku/ch-1.sh):

```perl6
    [+] map { .fmt("%b").comb.sum }, 1..@*ARGS[0]
```

[Mohammad S Anwar](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/mohammad-anwar/raku/ch-1.raku):

```perl6
    (1..$n).map( -> $i { $c += [+] $i.base(2).comb; });
```

A pointy block `-> $i { . . . }` often helps to introduce a named variable instead of `$_`, but you can always use a [placeholder variable](https://docs.raku.org/language/variables#index-entry-$$CIRCUMFLEX_ACCENT) such as `$^n`.

[Myoungjin Jeon](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/jeongoon/raku/ch-1.raku#L8):

```perl6
    [+] (.base(2).indices(1).elems for ^$_[0]+1)
```

All these methods are good for small numbers and for prototyping. You can also use them as a mean to get the test answer if you want to implement a more sophisticated algorithm and check its correctness.

### Using formulae or observations

There is a sequence known under its number [A000788](https://oeis.org/A000788): _Total number of 1's in binary expansions of 0, ..., n_, which is exactly the sequence what we use in this task. Well, except for the final modulo operation. On the website of The OEIS Foundation, you can find quite a few different algorithms, both recursive and not, which give the result without the need to test each and every bit in all the numbers.

You can also notice that in the sequence of numbers, the least significant bit (2<sup>0</sup>) flips every two numbers. The next bit (2<sup>1</sup>) flips every four times, the third bit (2<sup>2</sup>) flips every eight numbers, and so on. I used this fact in [my main solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/ash/raku/ch-1.raku).

[Julio de Castro](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/juliodcs/raku/ch-1.raku#L16) used the built-in [method called `msb`](https://docs.raku.org/routine/msb) for detecting the most significant bit and to count its flips:

```perl6
    sub ms-flips(UInt:D \number) returns UInt:D {
        number == 1 ?? 1 !! 1 + number.msb * 2 ** (number.msb - 1)
    }
```

Such programs are much more efficient comparing to those using bare bit testing, but of course, it is not always clear how they achieve the result :-)

Let me show the complete text of the [program by Markus Holzer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/markus-holzer/raku/ch-1.raku) that also uses sigil-less variables to speed it up:

```perl6
    unit sub MAIN( Int \N );

    my Int \t = 2;
    my Int \r = 0;
    my Int \n = N;

    while n {
        my Int \a = t +> 1;
        my Int \s = N +& ( t - 1 );
        my Int \d = N div t;

        r := r +  d * a;
        r := r +  1 + s - a if 1 + s > a;
        t := t +< 1;
        n := n +> 1;
    }

    say r % 1000000007;
```

Notice that we do not loop over the whole range between `1` and `N` but only over the list of powers of two not exceeding `N`.

Another interesting solution has been submitted by Athanasius, here is [it’s main part](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/athanasius/raku/ch-1.raku#L140):

```perl6
    my UInt $total-count-set-bit = 0;

    loop (my UInt $bit = 1; $bit <= $N; $bit +<= 1)
    {
        $total-count-set-bit += ($N +> 1) +& +^($bit - 1);

        $total-count-set-bit += ($N +& (($bit +< 1) - 1)) - ($bit - 1)
            if $N +& $bit;
    }
```

If you want to explore the different approaches and compare there properties, I would recommend you to examine the file [bench.raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/markus-holzer/raku/bench.raku) where Markus Holzer collected different implementations.


### Video review

The full review of Task 1 is available on YouTube:

<iframe width="560" height="315" src="https://www.youtube.com/embed/aR_pPcU_4f8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The timestamps for quick access to the review of each solution.

* [01:15](https://www.youtube.com/watch?v=aR_pPcU_4f8&t=75s) - Andrew Shitov
* [04:43](https://www.youtube.com/watch?v=aR_pPcU_4f8&t=283s) - Rakulius
* [06:33](https://www.youtube.com/watch?v=aR_pPcU_4f8&t=393s) - Simon Proctor
* [07:32](https://www.youtube.com/watch?v=aR_pPcU_4f8&t=452s) - Arne Sommer
* [07:06](https://www.youtube.com/watch?v=aR_pPcU_4f8&t=426s) - Colin Crain
* [10:38](https://www.youtube.com/watch?v=aR_pPcU_4f8&t=638s) - Laurent Rosenfeld
* [11:28](https://www.youtube.com/watch?v=aR_pPcU_4f8&t=688s) - Mohammad S Anwar
* [12:40](https://www.youtube.com/watch?v=aR_pPcU_4f8&t=760s) - Mark Anderson
* [14:33](https://www.youtube.com/watch?v=aR_pPcU_4f8&t=873s) - Ulrich Rieke
* [16:20](https://www.youtube.com/watch?v=aR_pPcU_4f8&t=980s) - Jaldhar H. Vyas
* [17:36](https://www.youtube.com/watch?v=aR_pPcU_4f8&t=1056s) - Kang-min Liu
* [18:53](https://www.youtube.com/watch?v=aR_pPcU_4f8&t=1133s) - Roger Bell_West
* [20:13](https://www.youtube.com/watch?v=aR_pPcU_4f8&t=1213s) - Jan Krnavek
* [24:29](https://www.youtube.com/watch?v=aR_pPcU_4f8&t=1469s) - Markus Holzer
* [26:17](https://www.youtube.com/watch?v=aR_pPcU_4f8&t=1577s) - Athanasius
* [28:35](https://www.youtube.com/watch?v=aR_pPcU_4f8&t=1715s) - Julio de Castro
* [30:41](https://www.youtube.com/watch?v=aR_pPcU_4f8&t=1841s) - Myoungjin Jeon

## Task 2. Trapped rain water

The participants showed a number of inventive approaches to the problem. To test the solution, you not only have to work on one of the sample set but also try to create a histogram where one of its sides is open and cannot keep water. For example, `2, 1, 4, 1, 2, 2`. Some of the submitted solutions print incorrect results for such inputs.

In one of the methods, you scan the histogram along its horizontal coordinate and look left and right to find the smallest wall that is visible from that position. That level is the maximum level that can be filled with water. Now just subtract the height at the current position, and here you are, you know the height of the water pole at this position.

[Jan Krnavek’s solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/wambash/raku/ch-2.raku) demonstrates this approach extremely clearly:

    sub trapped-rain-water ( +@n ) {
        @n.pairs
        andthen .map: { (@n[0.. .key].max min @n[.key..*].max) - .value }\
        andthen .sum
    }

[Mark Andreson uses regexes](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/mark-anderson/raku/ch-2.raku#L35) to find those unit cells that can keep water.

```perl6
    while @ints.join ~~ m:c($pos)/ (\d)(\d+)(\d) <?{ $0 > $1.comb.all < $2 }> / {
        $sum += (($0, $2).min <<->> $1.comb).sum;
        $pos = $/.to - 1;
    }
```

Water can be trapped within those areas where there are higher walls on the right and left sides. Using the language of regexes, Mark formulates it in the following way: `/ (\d)(\d+)(\d) <?{ $0 > $1.comb.all < $2 }> /`. The sequence of brick piles `\d+` must be surrounded by two walls which are higher than all of the inner blocks: `$0 > $1.comb.all < $2`. (This solution works for the hights not bigger than 9, but you can probably modify the program to use Unicode one-characters digits such as `⑪`. Raku is great in its ability to correctly evaluate constructions such as `⑪.Int`.)

[Colin Crain finds](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-079/colin-crain/raku/ch-2.raku#L58) the peaks inside the histogram and then computes the free area between them:

```perl6
    for (@input.min..@input.max).reverse -> $level {
        my @peaks = @input.keys.grep({ @input[$_] >= $level });
        $vol += ($_[1] - $_[0] - 1) for @peaks.rotor(2=>-1);

        . . .
    }
```

Let me stop here as all the solutions are really interesting this week, and I would have to repeat the whole review from the video below to describe their best features.

### Video review

The full review of Task 2 is available on YouTube:

<iframe width="560" height="315" src="https://www.youtube.com/embed/1vnhtIiWkjo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The timestamps to the reviews of the individual solutions:

* [01:13](https://www.youtube.com/watch?v=1vnhtIiWkjo&t=73s) - Andrew Shitov
* [04:00](https://www.youtube.com/watch?v=1vnhtIiWkjo&t=240s) - Jan Krnavek
* [07:23](https://www.youtube.com/watch?v=1vnhtIiWkjo&t=443s) - Kang-min Liu
* [08:37](https://www.youtube.com/watch?v=1vnhtIiWkjo&t=517s) - Mark Anderson
* [13:50](https://www.youtube.com/watch?v=1vnhtIiWkjo&t=830s) - Markus Holzer
* [20:23](https://www.youtube.com/watch?v=1vnhtIiWkjo&t=1223s) - Simon Proctor
* [32:00](https://www.youtube.com/watch?v=1vnhtIiWkjo&t=1920s) - Arne Sommer
* [38:39](https://www.youtube.com/watch?v=1vnhtIiWkjo&t=2319s) - Athanasius
* [41:57](https://www.youtube.com/watch?v=1vnhtIiWkjo&t=2517s) - Colin Crain
* [46:56](https://www.youtube.com/watch?v=1vnhtIiWkjo&t=2816s) - Jaldhar H. Vyas
* [48:53](https://www.youtube.com/watch?v=1vnhtIiWkjo&t=2933s) - Julio de Castro
* [57:43](https://www.youtube.com/watch?v=1vnhtIiWkjo&t=3463s) - Laurent Rosenfeld
* [59:46](https://www.youtube.com/watch?v=1vnhtIiWkjo&t=3586s) - Mohammad S Anwar
* [01:02:37](https://www.youtube.com/watch?v=1vnhtIiWkjo&t=3757s) - Myoungjin Jeon
* [01:09:21](https://www.youtube.com/watch?v=1vnhtIiWkjo&t=4161s) - Roger Bell_West
* [01:12:09](https://www.youtube.com/watch?v=1vnhtIiWkjo&t=4329s) - Ulrich Rieke

<br>

If you want to participate in **The Weekly Challenge**, please contact us at <perlweeklychallenge@yahoo.com>.
