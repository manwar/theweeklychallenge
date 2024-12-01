---
title: "Advent Calendar - December 1, 2024"
date: 2024-12-01T00:00:00+00:00
description: "Advent Calendar - December 1, 2024."
type: post
image: images/blog/2024-12-01.jpg
author: Dave Jacoby
tags: ["Perl"]
---

## [**Advent Calendar 2024**](/blog/advent-calendar-2024)
### | &nbsp; **Day 1** &nbsp; |
***

The gift is presented by `Dave Jacoby`. Today he is talking about his solution to [**The Weekly Challenge - 250**](/blog/perl-weekly-challenge-250). This is re-produced for `Advent Calendar 2024` from the original [**post**](https://jacoby.github.io/2024/01/01/leaping-from-tree-to-tree-as-they-float-down-the-mighty-rivers-of-british-columbia-weekly-challenge-250.html).

***

<br>

## Leaping from Tree to Tree as They Float Down the Mighty Rivers of British Columbia
***

Happy New Year to those who celebrate! Here we are at Weekly Challenge #250! 250 is 2 * 5<sup>3</sup>, and has the same digits as prime factors. It is also the area code for the Canadian Province of [**British Columbia**](https://en.wikipedia.org/wiki/Area_code_250), and when I saw that, I knew the title had to come from `Monty Python`…

<br>

> All right … I confess I haven’t cut your hair … I hate cutting hair. I have this terrible un-un-uncontrollable fear whenever I see hair. When I was a kid I used to hate the sight of hair being cut. My mother said I was a fool. She said the only way to cure it was to become a barber. So I spent five ghastly years at the Hairdressers’ Training Centre at Totnes. Can you imagine what it’s like cutting the same head for five years? I didn’t want to be a barber anyway. I wanted to be a lumberjack. Leaping from tree to tree as they float down the mighty rivers of British Columbia! The giant redwood, the larch, the fir, the mighty scots pine. The smell of fresh-cut timber! The crash of mighty trees! With my best girlie by my side! We’d sing … sing … sing.

<br>

And then segue into the great [**Lumberjack Song!**](https://www.youtube.com/watch?v=70Npi6PccBk) (There are plenty of videos of the sketch on `YouTube`, but this is the one on the official `Monty Python` channel, so this is the one I chose.)

And now, for something completely different…

<br>

### Task 1: Smallest Index
***

    Submitted by: Mohammad S Anwar
    You are given an array of integers, @ints.

    Write a script to find the smallest index i such that i mod 10 == $ints[i] otherwise return -1

<br>

#### Let’s Talk About This
***

In the 1990s, `Perl` was the language for server-side web stuff, because `Perl` loves text and `HTML` is text. At the time, I was

    - a student web guy for the computing services group
    - taking an advanced web stuff course in Computer Science

<br>

The early courses had `Java Applets`, and I struggled with that, but later, we hit `CGI` and it was my jam.

Have you ever had a professor spend a whole class period covering the errors you found in his last lecture?

Anyway, one of the mistakes mentioned was that `Perl` didn’t have modulus. Of course `Perl` has modulus. `Modulus` is built into how the chip does division. I cannot tell you how the chip does division, today being something like 25 years since I last handled `Assembly` or how to make adders and multipliers from `NAND` gates, but I know that the chip has modulus and that `Perl` calls it `%`.

And that is key to the problem, but not as much key to the examples, because for `i mod 10 to not equal i, i must be greater than 10`, which means we need example sets bigger than 10. I created an example to test larger sets as well.

But once we’ve run `$i $ 10`, it’s a simple comparison with that value and `$ints[$i]`. Put the compliant indexes into an array, and use `min` from our favorite module, `List::Util`, and there we go.

Whenever possible, I try to do return `(this || that);` or `return is_OK(this)? this : that` over `return this if is_OK(this); return that;` but the double return was trivial to implement and I gave up.

<br>

#### Show Me The Code
***

<br>

```perl
#!/usr/bin/env perl

use strict;
use warnings;
use experimental qw{ say postderef signatures state };

use List::Util qw{ min };

my @examples = (

    [ 0, 1, 2 ],
    [ 4, 3, 2, 1 ],
    [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ],
    [ 7, 7, 7, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ],
);

for my $example (@examples) {
    my $input  = join ', ', $example->@*;
    my $output = smallest_index( $example->@* );

    say <<~"END";
    Input:  \@ints = ($input)
    Output: $output
    END
}

sub smallest_index (@input) {
    my @output;
    for my $i ( 0 .. -1 + scalar @input ) {
        my $j = $i % 10;
        push @output, $i if $input[$i] == $j;
    }
    return min @output if scalar @output;
    return -1;
}
```

<br>

```perl
$ ./ch-1.pl
Input:  @ints = (0, 1, 2)
Output: 0

Input:  @ints = (4, 3, 2, 1)
Output: 2

Input:  @ints = (1, 2, 3, 4, 5, 6, 7, 8, 9, 0)
Output: -1

Input:  @ints = (7, 7, 7, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0)
Output: 3
```

<br>

### Task 2: Alphanumeric String Value
***

    Submitted by: Mohammad S Anwar
    You are given an array of alphanumeric strings.

    Write a script to return the maximum value of alphanumeric string in the given array.

    The value of alphanumeric string can be defined as
        1. The numeric representation of the string in base 10 if it is made up of digits only.
        2. otherwise the length of the string

<br>

#### Let’s Talk About This
***

`Perl`’s basic type is the scalar, which can be a string, a number, or a reference. Thus, when used with numeric operators, it finds the must numeric interpretation of a string and uses that. I once told a `C-and-Python` programmer that `"29 Palms" + 1 == 30`, and that did more than blow his mind; it made him physically angry.

`(C programmers. You know the type.)`

Anyway, to numberify a string, there has to be a number within a string, in which case we strip out the non-numeric part by adding zerio, or there is no number within the string, in which case we go with string length, which makes it `if ... else ...`

But, when you want to treat a less-numeric string as a number, like `r4ku`, `Perl` complains. It is a reasonable and good thing for `Perl` to do, but as this is expected behavior, a tactical use of `no warnings` within the appropriate block keeps those pesky messages away.

And, as with last time, we use `List::Util`, but instead, we use `max`.

<br>

#### Show Me The Code
***

```perl
#!/usr/bin/env perl

use strict;
use warnings;
use experimental qw{ say postderef signatures state };

use List::Util qw{ max };

my @examples = (

    [ "perl", "2", "000", "python", "r4ku" ],
    [ "001",  "1", "000", "0001" ],
);

for my $e (@examples) {
    my $input = join ', ', map {qq{"$_"}} $e->@*;
    my $output = alphanumeric_string_value( $e->@* );

    say <<~"END";
    Input:  \@alphanumstr = ($input)
    Output: $output
    END
}

sub alphanumeric_string_value (@array) {
    my @output;
    for my $s (@array) {
        no warnings;
        my $n = 0;
        if   ( $s =~ /\d/ ) { $n = 0 + $s; }
        else                { $n = length $s; }
        push @output, $n;
    }
    return max @output;
}
```

<br>

```perl
$ ./ch-2.pl
Input:  @alphanumstr = ("perl", "2", "000", "python", "r4ku")
Output: 6

Input:  @alphanumstr = ("001", "1", "000", "0001")
Output: 1
```

<br>

***

If you have any suggestion then please do share with us **<perlweeklychallenge@yahoo.com>**.

| &nbsp; [**Advent Calendar 2024**](/blog/advent-calendar-2024) &nbsp; |
