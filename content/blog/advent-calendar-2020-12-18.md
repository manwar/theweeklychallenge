---
title: "Advent Calendar - December 18, 2020"
date: 2020-12-23T00:00:00+00:00
description: "Advent Calendar - December 18, 2020."
type: post
image: images/blog/2020-12-18.jpg
author: Kevin Colyer
tags: ["Raku"]
---

[**Advent Calendar 2020**](/blog/advent-calendar-2020)
***

The gift is presented by [**Kevin Colyer**](https://perlweeklychallenge.org/blog/meet-the-champion-030). Today he is talking about his solution to the task `Collatz Conjecture` of **["The Weekly Challenge - 054"](/blog/perl-weekly-challenge-054)**. This is re-produced for **Advent Calendar 2020** from the original [**post**](https://kevincolyer.wordpress.com/2020/04/05/perl-weekly-challenge-week-54/) by **Kevin Colyer**.

***

This week on the [Perl Weekly Challenges](https://perlweeklychallenge.org/) I was working on the two tasks for [challenge 54](https://perlweeklychallenge.org/blog/perl-weekly-challenge-054/). The first challenge was simple in Raku (formerly Perl 6), a one liner, but the second challenge was about creating a favourite sequence of mine, the Collatz Conjecture. I thought I would block about this as the extra part to the task was computationally intensive and my solution took just 10 seconds to calculate the 1 million steps; Raku is not yet known for speed! (I tested this on my Lenovo X260 laptop)

# Collatz Conjecture

It is thought that the following sequence will always reach 1:

 * `$n =   $n / 2` when `$n` is even
 * `$n = 3*$n + 1` when `$n` is odd

For example, if we start at **23**, we get the following sequence:

23 → 70 → 35 → 106 → 53 → 160 → 80 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

Write a function that finds the **Collatz** sequence for any positive integer. Notice how the sequence itself may go far above the original starting number.

## Extra Credit

Have your script calculate the sequence length for all starting numbers up to 1000000 (1e6), and output the starting number and sequence length for the longest 20 sequences.

***

# Solution

The first part is relatively easy you take your starting number, test it as odd or even and then perform a simple computation on it and repeat until the number reaches 1. It is a very simple algorithm.

The `sub collatzSeqChain` implements the basic algorithm and returns the sequence it build up bit by bit.

I have specified the type of as many variables as possible as this (I hope!) enables the compiler to use more specific and faster code to implement the sub. Although in my case I am not intending to call this sub repeatedly as that would be too slow. At (1) I used a bit shift operator to do a quick divide by two and one the line before used a bitwise AND to check the lowest bit to determine oddness and evenness. No idea if this is quicker but could be! This completes the first part of the challenge and I used a couple of `multi MAIN‘s` as multiple entry points to test or to print any sequence for a given number.

(1) I used the same idea in the second `sub collatzSeqLen`. This sub is for the more demanding part of the challenge. To calculate a million sequences is going to take a long time, especially if I used the first sub and called that over and  over. The Collatz sequence has a property in that higher numbers sometimes have the chains of lower numbers embedded in them. This means I could cache the sequence length as we go. I saw no need to cache the whole length, after all I only needed the 20 longest ones. So I planned to make a sliding index of the longest chains and the number that produced it, then at the end print the sequences anyway.

(2) I used a an array `@length` to cache the lengths of the chains. This will grow to about 1 million entries, but as I gave it a type, hopefully this will allow the compiler to do this smartly and quickly. A state variable saves me cluttering up the program with a global variable as this is the only part that needs it anyway.

(3) As we are looping through the sequence if we find a filled entry, at the value of it’s chain to our current length and end the loop – we are done as we know will will reach 1.

(4) We know the length of the chain so cache it in `@length` for the next run.

```perl6
sub collatzSeqChain(Int $n is copy) {
    my Str $seq = "$n";
    while $n > 1 {
        if $n +& 1 == 0 {
            $n= $n +> 1; # (1)
        } else {
            $n = $n * 3 + 1;
        }
        $seq ~= " -> $n";
    }
    return $seq;
}


sub collatzSeqLen(Int $number) returns Int {
    state Int @length; # (2)
    my Int $n=$number;
    my Int $len=1;

    while $n > 1 {
        if @length[$n]:exists {
            $len += @length[$n];
            last; # (3)
        }
        if $n +& 1 == 0 {
            $n = $n +> 1;
        } else {
            $n = $n * 3 + 1;
        }
        $len++;
    }
    @length[$number]=$len; # (4)
    return $len;
}

multi MAIN('test') {
    say collatzSeqChain(23);
}

multi MAIN('sequence', Int :$number=23 ) {
    die "number must be a positive integer > 1 [$number]" if $number  number in sequence [$number]" if $want >= $number;

    my Int @chain = 0;
    my Int $topMin = 1;
    my Int @top;
    my Int @topN;
    my %ltoi; # (5)
    my $t = now.Int; # (6)
    my Int $x = $number;
    my Int $l;

    for 1..$x -> Int $i {
        $l = collatzSeqLen($i);

        next if $l  $want;
        $topMin = @top[0]; # (8)
    }

    @top.map({ "\n{%ltoi{$_}} length $_ = \n"~collatzSeqChain( %ltoi{$_} )  })>>.say; # (9)
    say "\n$x sequences searched in {Rat(now -$t)} seconds"; # (10)
}
```

The final MAIN function gives the lengths of the N longest chains. The defaults are sequences up to 1,000,000 and N of 20.

(5) I use a hash `%ltoi` (length to index) to keep the relations to the longest lengths and the sequence starting point that produces the chain.

(6) This line takes a snapshot of the current time so I can get an idea of how quickly the loop runs. It is paired with comment (10) below

(7) Each time we derive another sequence length we compare it to the minimum length of the top 20 longest sequences. We also check if it is longer that there is not another sequence that long in there. I am not interested in duplicate lengths really. Optional statement really.

(8) I keep an array `@top` and push the newly found long length in, sort and push out the shortest. The new shortest becomes the minimum value to beat to get into the top 20

(9) A one liner to map over the `@top` array and generate the report item by item. It is then fed into say to print it. A hyper is required to do this as otherwise I would pass the report as a list. This ensures each item of the list is printed.

(10) The elapsed time is produced. I found I needed to cast this to a Rat to remove the type indication of Instant (for a duration of time)

And that’s it!

I could have increased the speed a little by in-lining the sub. Possibly I could have added multiple processes but this would get a bit messy with the caching but I guess it is possible. Anyway I am happy with 10 seconds run time… What do you think? Did I miss a trick?

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2020**](/blog/advent-calendar-2020)
