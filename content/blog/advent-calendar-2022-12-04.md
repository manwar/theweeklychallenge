---
title: "Advent Calendar - December 4, 2022"
date: 2022-12-04T00:00:00+00:00
description: "Advent Calendar - December 4, 2022."
type: post
image: images/blog/2022-12-04.jpg
author: Alexander Pankoff
tags: ["Perl"]
---

## [**Advent Calendar 2022**](/blog/advent-calendar-2022)
### | &nbsp; [**Day 3**](/blog/advent-calendar-2022-12-03) &nbsp; | &nbsp; **Day 4** &nbsp; | &nbsp; [**Day 5**](/blog/advent-calendar-2022-12-05) &nbsp; |
***

The gift is presented by `Alexander Pankoff`. Today he is talking about his solution to [**"The Weekly Challenge - 160"**](/blog/perl-weekly-challenge-160). This is re-produced for **Advent Calendar 2022** from the original [**post**](https://pankoff.net/pages/perl-weekly-challenge/challenge-160-task-1.html) by him.

***

<br>

## Task #1: Four Is Magic

You are given a positive number, `$n < 10`.

Write a script to generate english text sequence starting with the English cardinal representation of the given number, the word `is` and then the `English cardinal` representation of the count of characters that made up the first word, followed by a comma. Continue until you reach four.

<br>

### Example 1:

    Input: $n = 5
    Output: Five is four, four is magic.

### Example 2:

    Input: $n = 7
    Output: Seven is five, five is four, four is magic.

### Example 3:

    Input: $n = 6
    Output: Six is three, three is five, five is four, four is magic.

<br>

## Solution

[**Full Source**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/alexander-pankoff/perl/ch-1.pl)

After a little break from the weekly challenges and only submitting just the code to my solutions in [**Challlenge-158**](https://pankoff.net/pages/perl-weekly-challenge/challenge-158.html), this week I’m back to blogging about it.

We can easily verify all numbers below ten will eventually end up at four when following the process described above.

There are two numbers in the set with four characters - `the 5` and `the 9`. So they will immediately end up `at 4` in one step and be done. `3, 7 and 8` all have five characters. They will reach `4` in two steps by going to `5` first. Then there are three numbers with three characters left: `1, 2, and 6`. They take three steps `3 -> 5 -> 4`. So for any number below ten we need a maximum of three steps to reach `4.` This will actually work for any number - there is always fewer characters in a number’s cardinal representation than its value.

My solution for this challenge expects a positive single digit number as its first argument.

This number will be passed to a `four_is_magic` routine, which is a tiny wrapper around the core logic in `_four_is_magic`. The purpose of this wrapper is to properly capitalize the resulting sentence.

The core of the solution is a mapping of the expected inputs to their English cardinal representations. This mapping is then used in a recursive process:

<br>

    1. If the input is 4 we are done and return 'four is magic'.
    2. Convert the input into its cardinal representation
    3. Take the length of the cardinal representation
    4. Convert the length into its cardinal representation
    5. Build the current part of the sentence from both cardinal representation
    6. Repeat with the length from step 3 and join everything together with a ,

<br>

## Code

<br>

```perl
sub run() {
    my ($N) = @ARGV;
    die "Expect a single digit positive number!\n" unless $N and $N =~ m/^\d$/;
    say four_is_magic($N);
}

sub four_is_magic($n) {
    ucfirst _four_is_magic($n);
}

sub _four_is_magic($n) {
    my %cardinal_representations = (
        1 => 'one',
        2 => 'two',
        3 => 'three',
        4 => 'four',
        5 => 'five',
        6 => 'six',
        7 => 'seven',
        8 => 'eight',
        9 => 'nine',
    );

    if ( $n == 4 ) {
        return 'four is magic.';
    }

    my $cardinal = $cardinal_representations{$n};
    my $length   = length $cardinal;

    return join( ', ',
        join( ' ', $cardinal, 'is', $cardinal_representations{$length} ),
        _four_is_magic($length) );
}
```

<br>

## Output

<br>

```perl
One is three, three is five, five is four, four is magic.
Two is three, three is five, five is four, four is magic.
Three is five, five is four, four is magic.
Four is magic.
Five is four, four is magic.
Six is three, three is five, five is four, four is magic.
Seven is five, five is four, four is magic.
Eight is five, five is four, four is magic.
Nine is four, four is magic.
```

<br>

My native language being `German` I went ahead and gave it a try in `German` as well. It seems there’s really no way around the four. There is just a difference in the amount of steps required to reach 4. In German, we need an average of `1.375 steps` for any of the other `8 numbers` to reach `4` and `2.125` steps in English.

<br>

```perl
Eins ist vier, vier ist magisch.
Zwei ist vier, vier ist magisch.
Drei ist vier, vier ist magisch.
Vier ist magisch.
Fünf ist vier, vier ist magisch.
Sechs ist fünf, fünf ist vier, vier ist magisch.
Sieben ist sechs, sechs ist fünf, fünf ist vier, vier ist magisch.
Acht ist vier, vier ist magisch.
Neun ist vier, vier ist magisch.
```

<br>

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

| &nbsp; [**Advent Calendar 2022**](/blog/advent-calendar-2022) &nbsp; |
