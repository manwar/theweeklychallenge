---
author:       Colin Crain
date:         2021-07-19T00:00:00
description:  "Colin Crain › Perl Weekly Review #119"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #119"
image:        images/blog/p5-review-challenge-119.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-118/).* )

Welcome to the Perl review for **Week 119** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

---

### Why do we do these challenges?

I suppose any answers to that would be as wide ranging and varied as the people who choose to join the team. One thing is clear: it's not a competition, and there are no judges, even if there is a "prize" of sorts. About that -- I think of it more as an honorarium periodically awarded to acknowledge the efforts we make towards this strange goal. So there's no determination to find the *fastest*, or the *shortest*, or even, in some abstract way, the *best* way to go about things, although I'm certain the individuals have their own aspirations and personal drives. As Perl is such a wonderfully expressive language, this provides quite a bit of fodder to the core idea of TMTOWTDI, producing a gamut of wonderfully varied techniques and solutions.

Even the tasks themselves are often open to a certain amount of discretionary interpretation. What we end up with is a situation where each participant is producing something in the manner they find the most interesting or satisfying. Some team members focus on carefully crafted complete applications that thoroughly vet input data and handle every use case they can think up. Others chose to apply themselves to the logic of the underlying puzzle and making it work in the most elegant way they can. Some eschew modules they would ordinarily reach for, others embrace them, bringing to light wheels perhaps invented years ago that happen to exactly solve the problem in front of them today.

I've been considering this question for some time and have found one binding commonality between all of us solving these challenges each week, in that however we normally live our lives, the task in front of us more than likely has nothing to do with any of that . And I think this has great value. We all do what we do, out in the real world, and hopefully we do it well. The Weekly Challenge provides a opportunity to do something germane to that life yet distinctly different; if we only do the things we already know how to do we only do the same things over and over. This is where the "challenge" aspect comes into play.

So we can consider the Weekly Challenge as providing a problem space outside of our comfort zone, as far out from comfort as we wish to take things. From those reaches we can gather and learn things and bring what we want back into our lives. Personally, I think that's its greatest value of all.

---

Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due. And that's why I'm here, to try and figure out how to do that.

Let's have a look and see what we can find.

---

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-119/) or the summary [**recap**](/blog/recap-challenge-119/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC119TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC119TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC119BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC119TASK1}

# Swap Nibbles
*Submitted by: Mohammad S Anwar*<br>
You are given a positive integer $N.

Write a script to swap the two nibbles of the binary representation of the given number and print the decimal number of the new binary representation.

A nibble is a four-bit aggregation, or half an octet.

To keep the task simple, we only allow integer less than or equal to 255.

**Example**
```
    Input: $N = 101
    Output: 86

    Binary representation of decimal 101 is 1100101 or as 2 nibbles (0110)(0101).
    The swapped nibbles would be (0101)(0110) same as decimal 86.

    Input: $N = 18
    Output: 33

    Binary representation of decimal 18 is 10010 or as 2 nibbles (0001)(0010).
    The swapped nibbles would be (0010)(0001) same as decimal 33.
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/abigail/perl/ch-1.pl),
[**Adam Herzog**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/adherzog/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/adam-russell/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/athanasius/perl/ch-1.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/bruce-gray/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/colin-crain/perl/ch-1.pl),
[**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/dave-cross/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/dave-jacoby/perl/ch-1.pl),
[**Duane Powell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/duane-powell/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/james-smith/perl/ch-1.pl),
[**Jared Martin**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/jaredor/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/jo-37/perl/ch-1.pl),
[**Lance Wicks**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/lance-wicks/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/lubos-kolouch/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/perlboy1967/perl/ch-1.pl),
[**Olivier Delouya**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/olivier-delouya/perl/ch-1.pl),
[**Paul Fajman**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/paul-fajman/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/paulo-custodio/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/pete-houston/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/sgreen/perl/ch-1.pl),
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/steven-wilson/perl/ch-1.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/stuart-little/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/ulrich-rieke/perl/ch-1.pl),
[**Vinod Kumar K**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/vinod-k/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/wlmb/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/wanderdoc/perl/ch-1.pl)


There were 35 submissions for the first task this past week. The solutions broadly fell into two groups: those that treated the binary representation as a string, physically rearranging the components, and those that acted on the underlying bits mathematically, using bitwise operations. Both techniques were capable of producing very compact solutions.

## STRINGWISE manipulation
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/athanasius/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/colin-crain/perl/ch-1.pl),
[**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/dave-cross/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/dave-jacoby/perl/ch-1.pl),
[**Duane Powell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/duane-powell/perl/ch-1.pl),
[**Lance Wicks**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/lance-wicks/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/laurent-rosenfeld/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/mohammad-anwar/perl/ch-1.pl),
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/steven-wilson/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/ulrich-rieke/perl/ch-1.pl),
[**Vinod Kumar K**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/vinod-k/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/wlmb/perl/ch-1.pl)

In a string method, the input number is represented by a string of 1 and 0 characters representing the bit positions. This was done by converting, in some manner, the number into 8 binary digits, then exchanging the first four places with the last.

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/arne-sommer/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/arne-sommer/raku/ch-1.raku)

Arne demonstrates the technique in a clear, well-laid out manner. There are three steps:

1. convert the number into a zero-padded 8 character binary string with `sprintf`,
2. compose a new string from the back 4 of the binary representation coupled to the first 4 characters, and
3. use `oct`, with a specifier that the argument should be read as binary, to parse the string back into a number.

These three steps define all of the string-wise methods.

```perl
    my $binary  = sprintf('%08b', $N);
    my $swapped = substr($binary, 4) . substr($binary, 0, 4);
    say oct("0b" . $swapped);
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/dave-jacoby/perl/ch-1.pl)

**additional languages:**
[Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/dave-jacoby/node/ch-1.js)

Here is another example from Dave, who has partitioned off the block into its own subroutine. See? Same steps.

```perl
    sub flopped ($n) {
        my $b = sprintf '%08b', $n;
        my $c = join '', substr( $b, 4, 4 ), substr( $b, 0, 4 );
        my $r = oct( '0b' . $c );
        return $r;
    }
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/athanasius/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/athanasius/raku/ch-1.raku)

Now the monk introduces the idea of using a regular expression to match two groups, which are then rearranged and reassembled. The plot thickens.

```perl
    my $N_dec = parse_command_line();                            # Decimal
    my $N_bin = sprintf '%08b', $N_dec;                          # Binary
    my @nibs  = $N_bin =~ / (\d{4}) (\d{4}) /x;                  # Nibbles
    my $S_bin = $nibs[ 1 ] . $nibs[ 0 ];                         # S for "swap"
    my $S_dec = oct "0b$S_bin";
    my $len_N = length $N_dec;
    my $len_S = length $S_dec;
    my $width = $len_N >= $len_S ? $len_N : $len_S;
```

[**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/dave-cross/perl/ch-1.pl)

Dave tightens up this idea by eschewing intermediate variables entirely, reversing the `$1` and `$2` captures from the regex and joining them. This form, as you can see, is extremely compact. It's even got some air in it.

```perl
    say oct '0b' . join '', reverse get_number() =~ /(\d{4})(\d{4})/;

    sub get_number {
      return sprintf '%08b', $ARGV[0];
    }

```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/laurent-rosenfeld/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/laurent-rosenfeld/raku/ch-1.raku)

Laurent performs the swap in the regular expression itself, as a substitution. I imagine with an `/e` switch, we could fit everything in there. I like this idea.

```perl
    for my $test (254, 101, 18) {
        my $b2 = sprintf "%08b", $test;
        $b2 =~ s/(\d{4})(\d{4})/$2$1/;
        say bin2dec $b2;;
    }
```

[**Duane Powell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/duane-powell/perl/ch-1.pl)

Duane views this as an opportunity to add more features to an expanding `BinaryFOO` package, now with nibble functions! The main logic creates a new `BinaryFOO` object and calls `nibble_swap()` on it. In order to swap nibbles, the functions must ensure that the binary string input has leading 0s, so an extra step is taken.

```perl
    sub nibble_split {
        my $self = shift;
        my $bin  = shift;

        # make sure we have an octet (8 char length minimum)
        $bin = '0'x8 . $bin;
        $bin = substr($bin,-8);
        # split into 2 nibbles
        return (substr($bin,0,4), substr($bin,-4));
    }

    sub nibble_swap {
        my $self = shift;
        my $dec  = shift;
        return "$dec is greater than 255" if ($dec > 255);
        my @n = $self->nibble_split($self->dec_to_bin($dec));
        return $self->bin_to_dec($n[1].$n[0]);
    }
```

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/colin-crain/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/colin-crain/raku/ch-1.raku)

Finally, I want to share my own solution because it uses `substr` in three different  forms to swap everything in-place inside the `$bin` variable.

We have three instances: at the rightmost side  we have a `substr` that copies the first 4 digits of the 8-character binary representation. This value is taken and used by the second, 4-argument form of `substr`, to replace the last 4 characters in `$bin`. This replacement returns the characters replaced, which are subsequently passed to the final `substr`, here used as an lvalue and assign to the first four characters of `$bin`. I find this process very satisfying.

```perl
    my $bin = sprintf "%08b", $num;
    substr( $bin, 0, 4 ) = substr( $bin, 4, 4, substr( $bin, 0, 4));
    say oct "0b$bin";
```

### an aside: HEXADECIMAL notation? In a STRING? BRING IT ON
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/cheok-yin-fung/perl/ch-1.pl)

Four bits, a nibble, is also the number of bits to determine a single hexadecimal digit. So instead of converting to 8 binary bits, we could convert to 2 hex digits, then swap them as before. There's nothing to demand we use binary to represent our nibbles.

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/cheok-yin-fung/perl/ch-1.pl)

**additional languages:**
[Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/cheok-yin-fung/bash/ch-1.sh)

Cy introduces this idea of using a single hex digit to represent a nibble, instead of four bits. Here she gets the whole thing done in a single line of code:

```perl
    print oct ("0x". scalar reverse sprintf("%02x", $ARGV[0])) ,"\n";
```

We'll be seeing a fair amount of hex characters going forward.

The steps are the same: convert the input using `sprintf`, this time to a minimum of 2 hex digits, reverse the digits, prepend a format qualifier and parse it back to decimal using `oct`. In an aside, I do wish that function was called `parse` or such. I blame UNIX. Then again `oct` is quite diminutive and succinct, if imperfectly descriptive.


## BITWISE manipulation
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/abigail/perl/ch-1.pl),
[**Adam Herzog**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/adherzog/perl/ch-1.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/bruce-gray/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/duncan-c-white/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/polettix/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/james-smith/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/perlboy1967/perl/ch-1.pl),
[**Olivier Delouya**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/olivier-delouya/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/paulo-custodio/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/roger-bell-west/perl/ch-1.pl), and
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/sgreen/perl/ch-1.pl)
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/stuart-little/perl/ch-1.pl)

It was also possible to use bit manipulations to alter the underlying bits in such a way as to achieve the same goal, with the resultant number composed of the last four bits of the input followed by what was the first four bits. This sounds complicated but was able to be performed in a very straightforward fashion.

[**Adam Herzog**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/adherzog/perl/ch-1.pl)

Adam starts us off with a demonstration. Here we take the number and duplicate it two ways: on the left we bitwise AND it with hexadecimal `F0`, keeping the top four bits and nulling out the bottom. On the right side, we do the reverse; by applying a bitwise AND with hex `0F`, the bottom four bits are preserved. Now the magic: the top four bits are bitshifted four positions to the right, and the bottom four are shifted four positions to the left. A bitwise OR combines the new bottom bits with the new top, creating a complete 8-bit number.

```perl
    sub swap_nibbles {
        my $N = shift;
        return ( ( $N & 0xF0 ) >> 4 ) | ( ( $N & 0x0F ) << 4 );
    }
```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/perlboy1967/perl/ch-1.pl)

Here's another implementation from Niels. We don't need to use a bitwise OR; in this case where the set bit spans are known to never overlap we can use a simple addition.

```perl
    sub swapNibble($) {
      return (($_[0] & 0x0f) << 4) +
             (($_[0] & 0xf0) >> 4);
    }
```


[**Olivier Delouya**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/olivier-delouya/perl/ch-1.pl)

Oliver reduces the action to a proper one-liner. The logic remains the same.

```perl
    perl -e 'print $_, " => ", (($_ & 0x0f) << 4) | (($_ & 0xf0) >>4), "\n" foreach (@ARGV)' -- 101 18
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/roger-bell-west/perl/ch-1.pl)

**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/roger-bell-west/rust/ch-1.rs)

Although the logic is consistent through all of these solutions, the number formats and choice of operators did differ. Here Roger avoids using any bitwise operations at all, acting entirely within the decimal sphere. Although it looks different, applying mod 16 to a number will reveal the last four bits, being everything up to 15. To get the top nibble we simply divide by 16, the equivalent of four right shifts. The math doesn't care how you refer to the numbers; the logic always hold true.

```perl
    sub sn {
      my $n=shift;
      return 16*($n % 16)+int($n/16);
    }
```


[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/abigail/perl/ch-1.pl)

**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/abigail/awk/ch-1.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/abigail/bash/ch-1.sh), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/abigail/bc/ch-1.bc), [Befunge-93](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/abigail/befunge-93/ch-1.bf93), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/abigail/c/ch-1.c), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/abigail/go/ch-1.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/abigail/java/ch-1.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/abigail/lua/ch-1.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/abigail/node/ch-1.js), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/abigail/pascal/ch-1.p), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/abigail/python/ch-1.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/abigail/r/ch-1.r), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/abigail/ruby/ch-1.rb), [Scheme](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/abigail/scheme/ch-1.scm), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/abigail/tcl/ch-1.tcl)

Abigail introduces the idea of a third component of our composite number — all those bits above 8, which allows any number to be input and the last two nibbles will be exchanged. Here instead of somehow creating a fixed bitmask to only allow bits above the last 8, they provide a curious construction that negates a mask only allowing the last two nibbles. This creates a mask as large as the largest integer Perl needs.

```perl
    while (<>) {
        say + ($_ & ~0xFF)       # Number with the last two nibbles 0.
            | ($_ &  0x0F) << 4  # Last nibble shifted 4 bits to the left.
            | ($_ &  0xF0) >> 4  # Penultimate nibble shifted 4 bits to the right.
    }
```

[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/bruce-gray/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/bruce-gray/raku/ch-1.raku)

Bruce arrived at nearly the same solution, starting with a large fixed mask. Then, in considering for a `bigint` version, stumbled across Abigail's negated mask trick and incorporated that to make the range unlimited.

```perl
    use bigint;

    sub nib ( $n ) {
        return   ($n & ~0xFF)
             + ( ($n &  0xF0) >> 4 )
             + ( ($n &  0x0F) << 4 );
    }
```

## PACKING and UNPACKING
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/adam-russell/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/e-choroba/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/jaldhar-h-vyas/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/jo-37/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/lubos-kolouch/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/wanderdoc/perl/ch-1.pl)

There was an unusual amount of attention given in this task to the pair of functions `pack` and `unpack`. These oft-maligned functions are very powerful, but can be quite confusing. When I say maligned, I mean it literally: I have heard it expressed that if you're thinking about using `pack` you're probably doing it wrong.

I get it. It's confusing. On the other hand I've used `unpack` in production code to piece out data from the headers of binary files. In the right context the ability to read and write raw data according to a set of configurable formatting rules is a game-changer. Indeed it may be the only way to proceed. So it's good to know about these things, so you can at least re-read the docs and [tutorial](https://perldoc.perl.org/perlpacktut) when you need the help of these fine, upstanding citizens.

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/adam-russell/perl/ch-1.pl)

When Tom Christiansen and Nathan Torkington were compiling *The Perl Cookbook*, they made the comment "sprintf ... doesn’t have a 'print this in binary' format". Well somewhere along the line that changed, but their code example lives on:

```perl
    my $str = unpack("B32", pack("N", shift));
```

Here Adam uses an variation on the theme to convert his decimal to binary and back to decimal again.  Here we've packed the number into 32 bits, so we select the last 8 with a `substr`. A little familiar substring swapping and we reverse the packing to convert the binary digits back to decimal.

```perl
    sub swap_nibbles{
        my($n) = @_;
        my $bits = substr(unpack("B32", pack("N", shift)), 24, 8);
        my $swapped_bits = substr($bits, 4) . substr($bits, 0, 4);
        my $swapped_decimal = unpack("N", pack("B32", substr("0" x 32 . $swapped_bits, -32)));
        print $swapped_decimal . "\n";
    }
```

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/wanderdoc/perl/ch-1.pl)

The doctor here uses `unpack` as a handy `substr`-like function, dividing the input into ASCII strings of length 4, as many as required. That is the `(A4)*` template you see. Then we have a really noteworthy way of swapping the nibbles, using an array slice. It appears that in the undefined space of "What if the number doesn't contain two nibbles?" they have chosen to do nothing, rather than assume an empty block of zeros to complete the octet. This wouldn't have been my choice but it appears intentional.

```perl
    sub swap_nibbles
    {
         my $bin = sprintf("%b",$_[0]);
         my $swapped = $bin;
         if ( length($bin) > 4 )
         {
              while ( length($bin) % 4 )
              {
                   $bin = 0 . $bin;
              }
              my @nibbles = unpack("(A4)*", $bin);

              @nibbles = @nibbles[-1, 0];
              $swapped = join('', @nibbles);
         }

         return oct("0b" . $swapped);
    }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/e-choroba/perl/ch-1.pl)

Choroba might just win an award for most perlish and sublime solution to this task:

```perl
    sub swap_nibbles {
        my ($n) = @_;
        return unpack C  =>
               pack   h2 =>
               unpack H2 =>
               pack   C  => $n
    }
```

Wait, what? That's it?

Remember that a "fat comma" is just a comma. We have four nested functions, read from right to left. What we're being told to do here is read the input as an octet, `C`, for an unsigned char, then unpack that as two hex digits, `H2`, high nibble first. Then we pack them up again as two hex digits *low* nibble first. Then unpack that as an octet.

As I said, sublime.

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/jo-37/perl/ch-1.pl)

Jorg accomplishes a very similar end through different templates, and the use of Perl's built-in `hex` function. The `J>` template packs the input into a Perl unsigned integer in big-endian order. Then the `h*` template unpacks these hex digits with the low nibble first, This is mot exactly obvious, but the end result is the pairs of digits get swapped all down the line. There are some lingering questions on portability with this approach, but in comparison to Choroba's it works with all numbers,swapping all pair of nibbles. See also Jared's solution, next.

```perl
    # This works portably for N < 2**32 and potentially up to N < 2**64.  No
    # need to restrict to N < 256.
    sub swap_nibbles {
        no warnings 'portable';
        hex unpack 'h*', pack 'J>', shift;
    }
```


## BLURRING the LINES
[**Jared Martin**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/jaredor/perl/ch-1.pl),
[**Paul Fajman**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/paul-fajman/perl/ch-1.pl), and
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/pete-houston/perl/ch-1.pl)

Please do not accuse me of being particularly Aristotelian in my logic — I am aware of the limitations of my classifications, and that any category can truthfully only hold the single item it describes — and even in that case should not be confused with the item itself. [Ceci n'est pas une pipe.](https://en.wikipedia.org/wiki/The_Treachery_of_Images)

>As far as the laws of mathematics refer to reality, they are not certain; and as far as they are certain, they do not refer to reality.<br>
— Albert Einstein

The idea of collective description still has utility, however, if we acknowledge those limitations, wave our hands in the air a bit and move on. After a certain, undefined, point though the descriptions do stray too far and the distinctions become untenable. So for these unruly children of consciousness we'll make a category acknowledging this. Until [Gödel](https://en.wikipedia.org/wiki/Kurt_Gödel) enters the chat, I think we're good-to-go.

But perhaps someone should keep watch.

[**Jared Martin**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/jaredor/perl/ch-1.pl)

Unsatisfied with merely swapping two nibbles, Jared ups the ante and uses the `bigint` pragma to allow unlimited length, swapping pairs of nibbles throughout. Given the pragma, we get a the function `as_hex()` for free, so that is used to convert the entire number to hex notation. A clever little trick is then used, prepending and then perhaps removing a leading hex zero to ensure the list of hex digits comes out with an even number of elements. Then the array indices are swapped by XORing the mapped list elements with 1. This is a really cool trick and I had to try it to believe it, but it works like a dream:

(0,1,2,3,4,5) → (1,0,3,2,5,4)

Wild. The rearranging is done through an array slice, another memorable technique, and after joining our new hex number is complete. A call to `hex` converts it back to decimal.

```perl
    my @hnum = ( '0', split( '', substr( $dnum->as_hex, 2 ) ) );
    shift @hnum if @hnum % 2;
    push @{$swapped},
      hex( '0x' . join( '', @hnum[ map { $_ ^ 1 } 0 .. $#hnum ] ) );
```

[**Paul Fajman**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/paul-fajman/perl/ch-1.pl)

In C, as in many other languages, strings are arrays of characters, so they are generally handled in the same manner as you would address an array. Not so with Perl. I mean, sort of: deep under the hood there's an underlying C-array... sort of... I mean, it's more like a pointer buffer... which looks a whole lot like a C-string. The whole thing is rather messy, which is why they hide it away. To you, a number is a string, and that's freaking cool, easy, and almost always painless.

Paul does what is essentailly the same actions as the stringwise swap, except with an array, and `splice`.

We start with dividing down to convert to binary, only instead of concatenating a string of digits we unshift the digits onto an array. Once we're done, we pad out the array with 0s to 8 elements.

```perl
    # Calculate binary number
    while($quo ne 0) {
      $rem = floor($quo % 2);
      unshift @nibbles, $rem;
      $quo = floor($quo/2);
    }

    # Check that final number is 8 digits
    while ($#nibbles+1 lt 8) {
      unshift @nibbles, 0;
    }
```

Next the nibbles are swapped and the resulting array is directly converted back into a decimal number by summing each place value as a power of two.

```perl
    # Swap the nibbles
    my @final = splice(@nibbles, 4);
       @final = (@final, @nibbles);

    # Calcuate the new decimal number
    for ($i=7; $i>-1; $i--) {
      $total += $final[$i] * ( 2**(7-$i) );
    }
```



[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/pete-houston/perl/ch-1.pl)

Another mutant take on the whole swapping-string situation uses a pair of routines from `Bit::Manip`, `bit_get()` and `bit_set()`. Think of getting and setting substrings, only working on the underlying sequential bits that make up a number. At least with `bit_set()` we even share the same arguments as `substr`. With `bit_get()` we request a span of start and finish positions and return a value, so in this it also perhaps resembles `unpack`.

On close examination we can plainly see something that very much resembles our `substr` swaps we saw above. With bits. So what we're doing here is sort of a string-wise manipulation operation but directly manipulating bits, as one would the strings. Blurry lines indeed.

```perl
    use Bit::Manip qw/bit_get bit_set/;

    sub nybble_swap {
        my $byte   = shift;
        my $nybble = bit_get ($byte, 7, 4);
        $byte = bit_set ($byte, 4, 4, bit_get ($byte, 3, 0));
        $byte = bit_set ($byte, 0, 4, $nybble);
        return $byte;
    }
```

## Additional Submissions in Guest Languages

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/polettix/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/polettix/raku/ch-1.raku)

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/jaldhar-h-vyas/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/jaldhar-h-vyas/raku/ch-1.raku)

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/james-smith/perl/ch-1.pl)

**additional languages:**
[Cesil](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/james-smith/cesil/ch-1-extendeded.ces), [Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/james-smith/javascript/ch-1.js), [Php](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/james-smith/php/ch-1.php), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/james-smith/python/ch-1.py)

[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/paulo-custodio/perl/ch-1.pl)

**additional languages:**
[Ada](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/paulo-custodio/ada/ch_1.adb), [Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/paulo-custodio/awk/ch-1.awk), [Basic](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/paulo-custodio/basic/ch-1.bas), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/paulo-custodio/bc/ch-1.bc), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/paulo-custodio/c/ch-1.c), [C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/paulo-custodio/cpp/ch-1.cpp), [D](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/paulo-custodio/d/ch_1.d), [Forth](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/paulo-custodio/forth/ch-1.fs), [Fortran](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/paulo-custodio/fortran/ch-1.f90), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/paulo-custodio/lua/ch-1.lua), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/paulo-custodio/pascal/ch-1.pas), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/paulo-custodio/python/ch-1.py)


[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/steven-wilson/perl/ch-1.pl)

**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/steven-wilson/python/ch-1.py)

[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/stuart-little/perl/ch-1.pl)

**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/stuart-little/haskell/ch-1.hs), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/stuart-little/lua/ch-1.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/stuart-little/node/ch-1.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/stuart-little/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/stuart-little/raku/ch-1.raku)

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/ulrich-rieke/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/ulrich-rieke/raku/ch-1.raku)




------------------------------------------




---

# TASK 2 {#PWC119TASK2}

# Sequence without 1-on-1
*Submitted by: Cheok-Yin Fung*<br>
Write a script to generate sequence starting at 1. Consider the increasing sequence of integers which contain only 1’s, 2’s and 3’s, and do not have any doublets of 1’s like below. Please accept a positive integer $N and print the $Nth term in the generated sequence.

```
    1, 2, 3, 12, 13, 21, 22, 23, 31, 32, 33, 121, 122, 123, 131, …
```

**Example**

```
    Input:  $N = 5
    Output: 13

    Input:  $N = 10
    Output: 32

    Input:  $N = 60
    Output: 2223
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/abigail/perl/ch-2.pl),
[**Adam Herzog**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/adherzog/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/arne-sommer/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/athanasius/perl/ch-2.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/bruce-gray/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/colin-crain/perl/ch-2.pl),
[**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/dave-cross/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/dave-jacoby/perl/ch-2.pl),
[**Duane Powell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/duane-powell/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/james-smith/perl/ch-2.pl),
[**Jared Martin**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/jaredor/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/jo-37/perl/ch-2.pl),
[**Lance Wicks**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/lance-wicks/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/laurent-rosenfeld/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/lubos-kolouch/perl/ch-2.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/mohammad-anwar/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/perlboy1967/perl/ch-2.pl),
[**Paul Fajman**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/paul-fajman/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/paulo-custodio/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/pete-houston/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/sgreen/perl/ch-2.pl),
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/steven-wilson/perl/ch-2.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/stuart-little/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/ulrich-rieke/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/wlmb/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/wanderdoc/perl/ch-2.pl)


There were 32 submissions for the second task this past week.

The sequence, as ideated, is a weird amalgamation of ideas. CY hereself decribes desiring a sequence *not* in the Online Encyclopedia of Integer Sequences, which is a quite vast compendium of numbers relating to other numbers in some (generally) quantifiable relationship. So to do this she took some disparate ideas and cobbled them together. I like this format in general for a task, because it forces you to do several things, possibly unrelated, and then couple them to make one result.

If there's any one unifying concept to real world events, it's this. Nothing — mind you *nothing* — is one thing. *Everything* is a bunch of different things tossed together in some unique manner. The irony of this statement is not lost on me.

So what do we have here? We have a sequence, in numeric order, that doesn't contain any digit other than 1, 2 or 3. Oh, and, by the way, no constructions of the form '11' can occur anywhere in the number. So no 0s, no digits greater than 3, and no doubled 1s.

I think it safe to say we're not going to come up with a strict arithmetic progression to generate these values, or for thet matter produce an arbitrary *n*-th value on request. No one, for instance, was able to come up with a reasonable way to mathematically determine whether a number contained a pair of 11 in succession anywhere within it. Of course anything *can* be done, I suppose, with enough effort.

On the other hand, there were a number of competing ways presented to construct the sequence until we can provide the *n*-th element. Luis Mochán asserts he's sure there's a solution in constant time but I don't think I can agree with that — but I can't prove it. Bruce Gray does get it down to logarithmic time, which is impressive enough.

## FILTERING approaches
[**Adam Herzog**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/adherzog/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/colin-crain/perl/ch-2.pl),
[**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/dave-cross/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/dave-jacoby/perl/ch-2.pl),
[**Duane Powell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/duane-powell/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/duncan-c-white/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/jaldhar-h-vyas/perl/ch-2.pl),
[**Lance Wicks**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/lance-wicks/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/laurent-rosenfeld/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/lubos-kolouch/perl/ch-2.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/mohammad-anwar/perl/ch-2.pl),
[**Paul Fajman**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/paul-fajman/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/paulo-custodio/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/sgreen/perl/ch-2.pl),
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/steven-wilson/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/ulrich-rieke/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/wanderdoc/perl/ch-2.pl)

Every item in the sequence is a number, and every item is numerically ordered in the sequence. Another sequence that shares these properties is the whole numbers. Thus the whole of our desired sequence is contained within the whole numbers, with a few extras tossed in. If we could coax out the values we want and leave the rest, we'll have our sequence.

[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/mohammad-anwar/perl/ch-2.pl)

Drawing a name out of a hat, we get Mohammad, who presents us with a very compact filter to find a specific value in the sequence.

*   `$N` is our requested *N*-th value in the sequence
*   `$n` is our calculated value
*   `$i` is working counter that keeps track of how many values we've found

In this method we increment `$n` and test it for validity. If we're good, the counter is ratcheted, and if the counter matches the request the current value of `$n` is output. This represents the overarching pattern of the filter approaches.

```perl
    while (1) { $n++; next if (($n =~ /11/) || ($n =~ /[4567890]/)); $i++; last if ($i == $N); }
```

[**Lance Wicks**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/lance-wicks/perl/ch-2.pl)

Lance, as is his wont, had pocketed his code away in a package, [`Sequence.pm`](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/lance-wicks/perl/lib/Sequence.pm), which contains a `Moo` object, which in turn  has a method, `no_one_on_one()`, which delivers the *n*-th element of the sequence. Although random-access to the world, it operates internally on the filtering method. The idea is well presented and you can plainly see the components rejecting disallowed values.

```perl
    sub no_one_on_one {
        my ( $self, $n ) = @_;

        my @seq;

        my $x = 0;
        while (1) {
            $x++;
            next unless $x =~ /^[123]/;
            next if $x =~ /[4567890]/g;
            next if $x =~ /11/g;
            push @seq, $x;
            last if @seq > $n - 1;
        }
        return $seq[-1];
    }
```

[**Adam Herzog**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/adherzog/perl/ch-2.pl)

Here's another example from Adam Herzog, which does away with a separate count variable by directly decrementing the input request `$N` for valid numbers. When that value hits 0 we have counted enough and the current term is returned.

```perl
    sub get_nth_term_in_sequence {
        my $N = shift;

        my $term = 0;
        while ( $N > 0 ) {
            $term++;
            $N-- if ( $term =~ /^[123]+$/ && $term !~ /11/ );
        }

        return $term;
    }
```

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/ulrich-rieke/perl/ch-2.pl)

**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/ulrich-rieke/cpp/ch-2.cpp), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/ulrich-rieke/raku/ch-2.raku)

Arriving at the same place, by the same route, by a rather different mode of transportation, Ulrich presents us with a novel means of validating the digit content of his number. Using a `substr` function in a loop, he examines every digit and *counts* them. Then at the end he sums the counts the totals for the `$ones`, `$twos`, and `$threes`, and if they add to the length of the number, they must solely compose it. What an interesting flight of fancy.

```perl
    my $ones = 0 ;
    my $twos = 0 ;
    my $threes = 0 ;
    my $len = length $number ;
    for my $i ( 0 .. $len - 1 ) {
        my $substr = substr( $number , $i , 1 ) ;
        if ( $substr eq "1" ) {
      $ones++ ;
        }
        if ( $substr eq "2" ) {
      $twos++ ;
        }
        if ( $substr eq "3" ) {
      $threes++ ;
        }
    }
    if ( $ones + $twos + $threes == $len ) {
        return 1 ;
    }
```

### an IMPROVEMENT: base 4

The obvious problem with filtering out any numbers containing any of 7 out of 10 available digits is, well, filtering out 7 out of 10 digits. With small numbers it works acceptably well, but, well, we're throwing away a lot of numbers, and still need to count through the candidates one-by-one to check them. With large numbers we are throwing away nearly everything.

With only 3 numbers to chose from, a natural thought is towards the ternary numbering system, base-3. If we add 1 to each digit, we're in, right? Well, no. Not as such, because leading 0s are required to be there to augment into 1s and the whole thing breaks down pretty fast. Resolving this is messy.

So what about base-4 then? That already has the digits 1, 2, and 3, with only those values with a 0 to discard. Along with anything containing a 11, of course. It stands to reason that if we count in base 4 we'll get where we're going much, much quicker.

[**Duane Powell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/duane-powell/perl/ch-2.pl)

Duane clearly breaks it down for us. We *count* in decimal, but then convert it base-4, which will more likely be valid in our sequence. From there the action proceeds apace, but we only need to filter with a much simpler regex:

```perl
    next if ($t =~ m/0|11/);
```

We see that regex a lot through the base-4 solutions.

I find the recursive `base4()` routine noteworthy as well.

```perl
    sub seq_without_1_on_1 {
        my $N = shift;

        # init counter i, Nth in sequence n, and base4 number t
        my ($i, $n, $t) = (1, 0, 1);
        # loop until we reach the Nth number in the sequence
        while ($n < $N) {
            # base4 number can only be composed of the digits 0-3
            $t = base4($i++);

            # discard this number if it matches '0' or '11'
            next if ($t =~ m/0|11/);

            $n++;
        }
        return $t
    }

    sub base4 {
        my $n = shift;

        return $n if ($n == 0 || $n == 1 || $n == 2 || $n == 3);
        my $k = int($n/4);
        my $b = $n % 4;
        my $E = base4($k);
        return $E . $b;
    }
```

[**Paul Fajman**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/paul-fajman/perl/ch-2.pl)

Paul breaks his process down into a sequence of linear steps in a counting loop. Here we pick up from converting to base-4. `$oneone`, when the counter resolves, will hold the value to be output.

```perl
    # Calculate base 4 number
    # Later throw out any values with 0
    while ($quo ne 0) {
      $rem = floor($quo % 4);
      unshift @numbers, $rem;
      $quo = floor($quo/4);
    }

    # Check for any digit with a 0
    foreach (@numbers) {
      if ($_ eq 0) {
        $check=1;
        next;
      }
      $oneone.=$_;
    }

    # Check if any digits are consecutive ones or if one was a 0;
    if ($oneone =~ m/11/ || $check eq 1) {
      undef($oneone);
      undef(@numbers);
      $check = 0;
      $input++;
      next;
    }
```

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/wanderdoc/perl/ch-2.pl)

The doctor gives us a pair of general-purpose base conversion routines to convert to base-4, tucked away in a module: [`LocalUtils.pm`](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/wanderdoc/perl/LocalUtils.pm). Of course we only need the `convert_from_dec()` half today. The other noteworthy thing they do is to save any computed values to an array as a cache, but then, and this is novel, `tie` the array to a DBM file on disk for persistance. If anyone actually wanted to *use* this bizarre sequence for some unspeakable purpose, this would certainly be a worthwhile thought. I haven't seen this in a while.

```perl
    tie @h, "DB_File", "$Bin/$filename", O_RDWR|O_CREAT, 0666, $DB_RECNO
         or die "Cannot open file 'text': $!\n" ;

    $h[1]   = 1;
    my $nth = $#h;

    if ( $term <= $nth )
    {
         $answer = $h[$term];
    }
    else
    {
         my $i = convert_to_dec($h[$nth], 4); # LocalUtils.

         $i++;
         $nth++;
         while ( $nth <= $term )
         {
              my $seq = convert_from_dec($i, 4); # LocalUtils.
              if ( $seq =~ /0|1{2,}/)
              {
                   $i++; next;
              }
              else
              {
                   $h[$nth] = $seq;
                   $nth++;
                   $i++;
              }
         }
         $answer = $h[$term];
    }
```

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/colin-crain/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/colin-crain/raku/ch-2.raku)

Finally, my own contributions to the solution set. As one may have inferred from my earlier reasoning, I started exploring with base three, the base with three digits, and that didn't work out so well. Quickly dividing down into base-4, each new candidate is vetted against the `$val =~ /0|11/` regex and, if it passes, is placed into the sequence array. When the sequence has enough values it's returned by reference and the last value (or any previous, should that be desired) is read and reported.

I was thinking about the efficiency of using base-4 over base-10, and the trade-off with the added complexity of doing the base conversion. I was sure base-4 was faster, but how much faster? So to satisfy my curiosity I made a stripped down version in base-10, with all wheat, no chaff. In the end, the base-4 version started out about twice as fast and only improved from there. The base-4 version, as would be expected, slowed the growth sufficiently that I was able to compute the first 1,000,000 terms of the sequence in about 6 minutes. For comparison, the base-10 version was only able to compute about 25,000 terms in that span of time.

```perl
    sub make_sequence ($quan, $i = 0) {
        my @seq;
        while (@seq < $quan) {
            my ($num, $rem) = (++$i, '');
            my $val = '';
            while ( $num > 0  ) {
                ($num, $rem) = (int( $num/4 ), $num % 4);
                $val = $rem . $val;
            }
            next if $val =~ /0|11/;
            push @seq, $val;
        }
        return \@seq;
    }
```


## sequentially CONSTRUCTIVE reasoning
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/abigail/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/perlboy1967/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/pete-houston/perl/ch-2.pl), and
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/stuart-little/perl/ch-2.pl)

There were ways devised so that given a number we can generate the next number of the sequence. We still need the value for S(*n*) to obtain the value of any value in the sequence higher than it, but given S(*n*) we can always produce S(*n*+1), and we know S(1) = 1, so given enough time we can create any term.

[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/stuart-little/perl/ch-2.pl)

**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/stuart-little/haskell/ch-2.hs), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/stuart-little/lua/ch-2.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/stuart-little/node/ch-2.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/stuart-little/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/stuart-little/raku/ch-2.raku)

```perl
    sub nxt($str) {
        $str =~ /(.*)([^3])(3*)$/;
        return (length $2)
            ? ($1 . ($2+1) . substr('12' x length($3),0,length($3)))
            : (substr('12' x length($str), 0, length($str)+1));
    }
```

What, pray tell, is going on here? This routine, `nxt()`, when given a value from the sequence, will generate the next in line. First the number is matched against a regular expression, to match (by capture group): 1. anything else, 2. a number that is not a 3, and 3. possibly a trailing 3. Given these captures, we have everything we need to make the next number. Group 2 is the last not-3 digit, which unless the number ends in 3 is the last digit. If it has length, meaning the expression matched, it's incremented, the number is reassembled and we're done. If the number ends in one or more 3s, those are reduced to the base value, which, because sequential 1s are not allowed, is a string of "1212..." of the appropriate length.

If the expression does not match, our number was all 3s, and a new base number with one more digit is constructed to start the next batch. By using 1212... as the base number we avoid ever encountering any 11 combinations.

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/pete-houston/perl/ch-2.pl)

Find that confusing? Pete goes through the trouble to break up the method a bit and lay it out in a less dense procedure, with nicely commented steps. This is my weekly praise of comments, folks. Make note. There will be a test. See how nice this looks?

```perl
    sub next_seq {
        my $cur = shift;

        # Handle the trivial case
        return $cur + 1 unless substr ($cur, -1) eq 3;

        # Find the last non-3 and increment from there
        my $loc = max rindex ($cur, 1), rindex ($cur, 2);

        if ($loc < 0) {
        	# They're all threes, so replace them all with repetitions of
        	# '21' and prepend with 1
        	my $new = "1$cur";
        	$new =~ s/33/21/g;
        	$new =~ s/3$/2/;
        	return $new;
        }

        # Increment the last non-3 and replace the 3s following it with the
        # minimal pattern which is '12121212...'
        my $lastnon3 = substr $cur, $loc, 1;
        my $new      = $cur;
        my $len      = length $cur;
        my $rstr     = $lastnon3 + 1 . string_fill ('12', $len - $loc - 1);

        substr $new, $loc, $len - $loc + 1, $rstr;

        return $new;
    }
```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/perlboy1967/perl/ch-2.pl)

Niels augments his cached sequence by taking the last value and incrementing it, then using a pair of regular expressions to massage it back into proper form. Short-circuiting in the loop will make the first expression match until it's done, at which the second will resolve any 11 conflicts, which should be at maximum 1.

```perl
    while ($maxN < $n) {
      my $seqValue = $cache[$maxN++]+1;
      1 while ($seqValue =~ s#(.*)4#("0$1"+1).'1'#e or $seqValue =~ s#11#12#);
      $cache[$maxN] = $seqValue;
    }
```

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/abigail/perl/ch-2.pl)

**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/abigail/awk/ch-2.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/abigail/bash/ch-2.sh), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/abigail/c/ch-2.c), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/abigail/lua/ch-2.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/abigail/node/ch-2.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/abigail/python/ch-2.py), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/abigail/ruby/ch-2.rb)


Abigail presents us with a sequence of 3 regexen that will, given a number already in the sequence, transform it into the next successive number. Theirs works along similar, yet slightly different lines to what we've seen. Reading the comments we recognize the transformation of the trailing 3s into 1s with a *nested* regex expression (delightful), which we can do because we know that the next step will properly process those 1s. In the last step we strike the prepended 0 which allows the expression to correctly match numbers composed solely of 3s.

```perl
    sub next_num ($prev_num) {
        #
        # First, replace any trailing 3's with 1's, incrementing the
        # digit which comes before.
        # Then replace any 11 with 12 (we can only have 11s at the end)
        # Note we prepend the incoming number with "0" so we can anchor
        # against it; we remove any leading 0 at the end.
        #
        "0$prev_num" =~ s!([012])(3*)$!($1 + 1) . ($2 =~ s/3/1/rg)!re
                     =~ s!11!12!rg
                     =~ s!^0!!r
    }
```

### generatively performing the CROSS PRODUCT
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/cheok-yin-fung/perl/ch-2.pl),
[**Jared Martin**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/jaredor/perl/ch-2.pl), and
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/jo-37/perl/ch-2.pl)

If we take a valid member of the sequence, say 12, and append the numbers 1, 2 or 3 we can make three new members of the sequence: 121, 122 and 123. Do this for successive numbers and we can generate as many values as we need. There were several ways we saw to codify this process.

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/cheok-yin-fung/perl/ch-2.pl)

**additional languages:**
[Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/cheok-yin-fung/bash/ch-2.sh)

CY gives us a purely constructive approach based completely around assembling strings. In short, reading from the cached sequence, for the subsequence of each number of the last length constructed we read a value and construct a new number by appending a 1 and adding it to the end of the sequence. Unless, of course, the previous value ends in 1, causing that new number to be skipped. The same is done, these times in all cases, for appending a 2 and a 3. Thus with each old number two or three new values are added to the order one digit longer.

The process is continued until all numbers of a given length have been processed. With each iteration a new set of values of length one longer will be added.

Put like this it's very easy to see they underlying pattern to the construction of the values. Cool.

```perl
    sub noo {
        my $p = $_[0];
        my @arr = (0,1,2,3);

        my $x = 0, my $y;

        while ($#arr < $p) {
            $y = $#arr;
            for my $here ($x+1..$y) {
                push @arr, $arr[$here]."1"
                    if substr($arr[$here], -1, 1) ne "1";
                push @arr, $arr[$here]."2";
                push @arr, $arr[$here]."3";
            }
            $x = $y;
        }
        return $arr[$p];
    }
```

[**Jared Martin**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/jaredor/perl/ch-2.pl)

An unusual version of the same additive process is submitted by Jared Martin, who gives inspirational credit to the Higher Order Perl book. The method, of using closures to construct the sequences, is really interesting. But you can see in the middle where each item in used to produce a set of new numbers.


```perl
    my $nth_seq123 = get_nth(&seq123);

    output_results( $nth_seq123->( $_[0] ) );

    sub seq123 {
        my @seq = 1 .. 3;
        return sub {
            $_ !~ /11$/ and push @seq, $_ for ( $seq[0] . 1 ) .. ( $seq[0] . 3 );
            return shift @seq;
        };

    }

    sub get_nth {
        my ( $seq, ) = @_;
        return sub {
            my $n = $_[0];
            $seq->() and $n -= 1 while $n > 1;
            return $seq->();
          }
    }
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/jo-37/perl/ch-2.pl)

Yet another version by Jorg. The act of taking a set and combining it in every manner with the elements of another set is an instance of taking the Cartesian product, or cross product. Jorg performs this operation explicitly. With a little attention, if both of the sets are ordered, a concatenated cross-product will be as well.

```perl
    use Math::Cartesian::Product;

    sub cy ($n) {
        # CY sequence known so far.
        state @cy;
        # Current number of digits.
        state $digits;

        # Augment the calculated CY sequence by blocks having an increasing
        # number of digits if the requested element isn't in the list yet.
        local $" = '';
        push @cy,
            cartesian {"@_" !~ /11/} ([1 .. 3]) x ++$digits
            while $n > @cy;

        # Join the digits of the n-th element.
        "$cy[$n - 1]->@*";
    }
```



## HYBRID approaches
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/arne-sommer/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/athanasius/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/james-smith/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/wlmb/perl/ch-2.pl)

Nothing in life is truly easy, and disallowing any 11 constructions anywhere in a value often proved conceptually disjoint, and hence tricky, when devising schemes to add 1 to a previous value and carry the result.

This led to a hybrid approach as a way out, where candidates for the next value are constructed and then filtered out from the final sequence should they contain the disallowed pairing.

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/athanasius/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/athanasius/raku/ch-2.raku)

The monk will introduce us to the notion. Here we can clearly see the carry case when an individual digit is elevated to 4. The number is split into an array, and working forward from the end the 4 is set to 1 and the element at the next position is incremented. Then that position is checked and the process possibly repeated.

The incremented number is rejoined. However, if it fails a check for pairs of 1s, the outer `while` loop repeats the incrementation until a sufficient number of values to the sequence have been generated.

```perl
    while ($terms < $N)           # Continue until $N terms have been generated
    {
        if (++$term =~ /4/)       # Handle overflow: 4 -> (+1)1
        {
            my @digits = split //, $term;

            for my $i (reverse( 1 .. $#digits ))
            {
                if ($digits[ $i ] == 4)
                {
                    $digits[ $i     ] = 1;
                  ++$digits[ $i - 1 ];
                }
            }

            if ($digits[ 0 ] ==  4)
            {
                $digits[ 0 ]  =  1;
                unshift @digits, 1;
            }

            $term = join '', @digits;
        }

        ++$terms unless $term =~ /11/;       # Filter out terms containing '11'
    }

    return $term;
```

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/arne-sommer/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/arne-sommer/raku/ch-2.raku)

Arne splits his number and performs the carrying in a similar fashion, only reversing he array and working front-to-back. In other ways the method functions the same.

```perl
    while ($count < $N)
    {
      my @digits  = split(//, reverse($current));
      my $new     = "";
      my $add     = 1;

      for my $digit (split(//, reverse($current)))
      {
        if ($add)
        {
          if ($digit <= 2)
          {
            $digit++;
            $add = 0;
          }
          else
          {
            $digit = 1;
          }
        }

        $new = $digit . $new;
      }

      $new = "1$new" if $add;
      $current = $new;

      $count++ unless $current =~ /11/;
    }
```



[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/james-smith/perl/ch-2.pl)

As we've noted before, James is an optimization enthusiest, always looking for more speed. To this end he provides us with a quartet of options, compared. Two filters are given, one with the regex call reduced to a series of `index` statements, which speed things up considerably. None of this can compare, however, to presenting the number as an array of digits and applying appropriate carrying rules after incrementing the final digit. To filter out the 11s after that fact, we see a construction I don't think I've ever seen before, to directly run a regex on an array:

```perl
    $i++ unless "@v"=~m{1 1};
```

Note we've stringified the array by placing it in double-quotes, and have adjusted the expression appropriately. I suppose messing with `$"` would break everything here, but who does that? I do suppose we could set `$" = undef` and use the regex in its familiar unmolested `m/11/` form. Either way this is something I personally have never thought to do, and certainly is a trick that could come in handy.

```perl
    sub no_11_array {
      my( $n, $ptr, @v ) = ( shift, undef, 0 );
      for( my $i = 0; $i < $n; ) {
        my $ptr;
        for( $ptr = $#v; $ptr>-1 && ++$v[$ptr]>3; $ptr--) {
          $v[$ptr]=1;
        }
        unshift @v,1 if $ptr < 0;
        $i++ unless "@v"=~m{1 1};
      }
      return join q(),@v;
    }
```


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/wlmb/perl/ch-2.pl)

Luis gives us two solutions today. The first is a quite practical implementation of a filtering method from counting in base-4. The [second variation](https://github.com/wlmb/perlweeklychallenge-club/blob/master/challenge-119/wlmb/perl/ch-2a.pl) is based on recursively incrementing the previous value and annealing out troublesome 11 combinations by incrementing over them. This method shares many commonalities with Abigail's regexes, above, or perhaps Niels', but instead of repairing a 11 that may appear during incrementation, that value is simply moved past and not counted.

```perl
    sub get {
        my $want = shift;
        my $r = "1";
        $r = increment($r) while ($r=~/11/ || --$want > 0);
        $r;
    }
    sub increment {
        my $r = shift;
        while(1){
            $r =~ /(.*)(.)$/;
            my $high = $1 || 0;
            my $low = $2+1;
            return $low > 3
                ? increment($high) . "1"
                : $high
                    ? $high . $low
                    : $low;
        }
    }
```




## a CLASS of their OWN
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/bruce-gray/perl/ch-2.pl), and
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/e-choroba/perl/ch-2.pl)

Outside the lines and into our hearts. It's like a rom-com, with more code.

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/e-choroba/perl/ch-2.pl)

Choroba provides us with two solutions to the task: a naive baseline established with a filter on the base-10 numbers, and another version, that pulls out the PDL, to do some matrix math.

As we noted earlier in the cross-product solutions, there is what appears to be a computable relationship between the number of elements of a given length *n* and the number of elements of length *n*+1.

Choroba performs this computation in the PDL:

```
    Let's consider a sequence s[1], s[2], s[3], ... where each s[i] says how many
    elements of length i exist in Sw1. This sequence can be computed from a matrix,
    using

      | s[i]   |   | 0 1 |^i-2   |1|
      | s[i+1] | = | 2 2 |     x |3|

```

He then is able to determine, from summing the counts of the orders, which order will contain the selected element. He can then, depending on which end of the order, lower or upper, is closer, either increment up or decrement down to the selected value from an appropriately sized string of 3s.

It's a little faster. I suspect the real goal here was to compute that matrix relationship, which is sweet.

Here's the matrix code to generate the sizes of the orders:

```perl
    use PDL;
    sub _of_length {
        my ($n) = @_;
        my $recurrence = pdl([[0, 1], [2, 2]]);
        my $m = $recurrence;
        $m x= $recurrence for 0 .. $n - 2;
        $m x= pdl([[1], [3]]);
        return $m->at(0, 0)
    }

    sub seq_matrix {
        my ($n) = @_;
        my $l = 1;
        my $predecessors = 0;
        my $o = 0;
        do {
            $o = _of_length($l++);
            $predecessors += $o;
        } while $predecessors < $n;

        my $element;
        if ($n < $predecessors - $o / 2) {
            $element = '3' x ($l - 2);
            $predecessors -= $o;
            until ($predecessors++ == $n) {
                1 while ++$element =~ /[^123]|11/;
            }
        } else {
            $element = '3' x ($l - 1);
            until ($predecessors-- == $n) {
                1 while --$element =~ /[^123]|11/;
            }

        }
        return $element
    }
```

[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/bruce-gray/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/bruce-gray/raku/ch-1.raku)

Ok, this is going to take some time. Buckle up, were going fo a ride.

Bruce submits to us two solutions today. The first functions much like the cross-product solutions we saw earlier, only here Bruce is prepending the new values 1, 2 or 3. Or perhaps this is best considered as appending the values of the previous order of digits to first 1, then 2, then 3. In the end the ordering of this cross-product doesn't matter.

Here though, the new batches of values are kept isolated in separate arrays: those values of a given length that start with 1, that start with 2, and with 3. This is useful, because he can then simply leave off the list beginning with 1 in the 1 concatenation cycle, and so no numbers containing pairs of 1s will ever be created.

At every iteration the values of the previous spread of values are dumped to the final sequence and the next triplet of arrays is constructed, until sufficient values have been created to supply the requested S(*n*).

```perl
    sub s123 ( $n ) {
        state @s;
        state $last = [ [], [], [""] ];
        while ( not defined $s[$n] ) {
            push @s,            @{$last->[0]},@{$last->[1]},@{$last->[2]};

            $last = [
                [ map { "1$_" }               @{$last->[1]},@{$last->[2]} ],
                [ map { "2$_" } @{$last->[0]},@{$last->[1]},@{$last->[2]} ],
                [ map { "3$_" } @{$last->[0]},@{$last->[1]},@{$last->[2]} ],
            ];
        }
        return $s[$n];
    }
```

That's an artful and elegant solution, but Bruce keeps on going. What if we were to construct a solution akin to dividing down to change a base, where each digit place is constructed leftward from the modulo remainder, with dividing to jump to the next place, until the final number is formed? He notes this will not work as the modulo loop is acyclic, being directly affected by the number of 1s in the previous iteration. It's a modulo where the period changes with every iteration.

He notes that the dividing down operation can also be performed left-to-right, computing the leftmost digit and working, like long division, to the right, carrying forward the remainder to derive the next digit. It's just more complicated that way with no gain, so isn't normally done.

HOWEVER, as we have just seen with our triplet arrays in the solution above, we can know, or at least be able to compute, the element quantities of the arrays of each particular leading number at every generation. For example, for three digits we have 6 numbers starting with 1, 8 numbers with 2, and 8 numbers with 3, adding to the 22 values in the sequence in that generation.

Now for the connection back to the modulo. The function is acyclic, but for each digit position we can compute the cycle: 6 1s, then 8 2s, then 8 3s at the third leading digit. We now have enough information to do the modulo division to perform the dividing down to convert to this custom "base", but we need to assemble that information properly.

The first function, `s2()`, creates a master list of the counts of 1s, 2s and 3s through each generation, added to the list in that order. This serves as a roadmap to the size of each particular block of values beginning with a certain value in a certain order. This cycle, of course, is not acyclic, comprised of a strict progression of the counts of the 1s, 2s and 3s, repeating for each new digit place. The next function, `s3()` comprises a running sum of the values in the sequence behind `s2()`.

`s(3)` corresponds roughly to a table of powers of a base. A familiar idea is being able to calculate a range of values for a binary number by its position. A binary number with 5 digits must be within the range 16-31, but the inverse is what comes into play here; given 24 we don't immediately know the number but we can say  it has 5 digits. Likewise the index of the sequence in `s3()` corresponds to the digit, with the modulo unwound: For every level we count 3. So by dividing and taking the modulo 3 of the index we determine the digit position and where in the ascending order we lie, 1, 2, or 3. This can then be looked up to the corresponding values in `s2()` to determine how much to subtract to simulate division. Wherever we fall in the progression through each order, we need to subtract those values, then the numbers below, if any, until we get to the previous order. If we're in 3, we subtract the 3s, then the 2s, then the 1s. When the ones are removed we  add whatever modulo digit we computed to the position and carry whatever remainder is left in the number to calculate the next rightward place.

It's a hard road but makes beautiful sense when we get there. Please go and read [Bruce's writeup on the subject](http://blogs.perl.org/users/bruce_gray/2021/07/twc-119-les-nybb-and-the-arrhythmic-trio.html). I've drawn heavily from that source, of course, and tried here to fill in some of the blanks. An unrolled acyclic modulo function. Amazing.

```perl
    sub s2 ( $n ) {
        state $s2 = [ 0, 0, 1 ];
        while ( not defined $s2->[$n] ) {
            my $s = sum0 @{$s2}[-3,-2,-1];
            push @{$s2}, $s - $s2->[-3], $s, $s;
        }
        return $s2->[$n];
    }
    sub s3 ( $n ) {
        state $s3 = [ s2(0) + s2(1) ];
        while ( not defined $s3->[$n] ) {
            push @{$s3}, $s3->[-1] + s2($#{$s3} + 1);
        }
        return $s3->[$n];
    }
    sub s123 ( $n ) {
        my $r;
        while ( $n > 0 ) {
            my $k = first { s3($_) > $n } 0..4200; # 4200 is enough for 10**600
            my $pos = $k % 3;

            $r .= $pos + 1; # Digit
            $n -= sum0 map { s2($_) } ($k-$pos) .. $k;
        }
        die "NEGATIVE N: ", $n if $n < 0; # Should be impossible, but I cannot prove it.
        return $r;
    }

    my @in = @ARGV ? @ARGV : (5,10,60,14410);
    say $_, " ==> ", s123($_) for @in;
```


## Additional Submissions in Guest Languages
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/dave-jacoby/perl/ch-2.pl)

**additional languages:**
[Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/dave-jacoby/node/ch-2.js)

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/polettix/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/polettix/raku/ch-2.raku)

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/jaldhar-h-vyas/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/jaldhar-h-vyas/raku/ch-2.sh)

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/laurent-rosenfeld/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/laurent-rosenfeld/raku/ch-2.raku)

[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/paulo-custodio/perl/ch-2.pl)

**additional languages:**
[Ada](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/paulo-custodio/ada/ch_2.adb), [Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/paulo-custodio/awk/ch-2.awk), [Basic](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/paulo-custodio/basic/ch-2.bas), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/paulo-custodio/bc/ch-2.bc), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/paulo-custodio/c/ch-2.c), [C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/paulo-custodio/cpp/ch-2.cpp), [D](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/paulo-custodio/d/ch_2.d), [Forth](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/paulo-custodio/forth/ch-2.fs), [Fortran](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/paulo-custodio/fortran/ch-2.f90), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/paulo-custodio/lua/ch-2.lua), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/paulo-custodio/pascal/ch-2.pas), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/paulo-custodio/python/ch-2.py)

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/roger-bell-west/perl/ch-2.pl)

**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/roger-bell-west/rust/ch-2.rs)

[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/steven-wilson/perl/ch-2.pl)

**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-119/steven-wilson/python/ch-2.py)





------------------------------------------




---

# BLOGS {#PWC119BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, I somehow continue to maintain my bearings. Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC093BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *READ* these *BLOG* *LINKS*:

**( *don't think, trust your training, you're in the zone, just do it ...* )**


**Abigail**

 * [Perl Weekly Challenge 119: Swap Nibbles](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-119-1.html) ( *Perl* )
 * [Perl Weekly Challenge 119: Sequence without 1-on-1](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-119-2.html) ( *Perl* )

**Adam Russell**

 * [Packing and Unpacking from Vacation: The Weekly Challenge 119 – RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2021/07/04) ( *Perl* )

**Arne Sommer**

 * [Swap Sequence with Raku and Perl](https://raku-musings.com/swap-sequence.html) ( *Perl & Raku* )

**Bruce Gray**

 * [TWC 119: Les Nybb and the Arrhythmic Trio | Bruce Gray](http://blogs.perl.org/users/bruce_gray/2021/07/twc-119-les-nybb-and-the-arrhythmic-trio.html) ( *Perl & Raku* )

**Cheok-Yin Fung**

 * [CY's Take on The Weekly Challenge #119 ](https://e7-87-83.github.io/coding/challenge_119.html) ( *Perl* )

**Colin Crain**

 * [Sharing a Bite — But Not Face-to-Face — Programming Excursions in Perl and Raku](https://colincrain.com/2021/07/02/sharing-a-bite-but-not-face-to-face/) ( *Perl & Raku* )

**Dave Jacoby**

 * [One-to-One and Nybbles: (Perl) Weekly Challenge #119 | Committed to Memory](https://jacoby.github.io/2021/06/28/onetoone-and-nybbles-perl-wekly-challenge-119.html) ( *Perl* )

**Flavio Poletti**

 * [PWC119 - Swap Nibbles - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/06/30/pwc119-swap-nibbles/) ( *Perl & Raku* )
 * [PWC119 - Sequence without 1 on 1 - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/07/01/pwc119-sequence-without-1-on-1/) ( *Perl & Raku* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 119](https://www.braincells.com/perl/2021/07/perl_weekly_challenge_week_119.html) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #119](https://github.com/drbaggy/perlweeklychallenge-club/blob/master/challenge-119/james-smith/) ( *Perl* )

**Jared Martin**

 * [TWC 119: Task #1, Swap Nibbles & Task #2, Sequence without 1-on-1 | Jared Martin](http://blogs.perl.org/users/jared_martin/2021/07/twc-119-task-1-swap-nibbles-task-2-sequence-without-1-on-1.html) ( *Perl* )

**Lance Wicks**

 * [Perl flexibility for the win - Perl🐪.🥝 Kiwi](https://perl.kiwi/tales/2021/07/04/perl-flexibility-for-the-win/) ( *Perl* )
 * [Perl.Kiwi - Live Coding — Twitch](https://www.twitch.tv/videos/1075491044) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 119: Swap Nibbles and Sequence without 1-on-1 | laurent_r](http://blogs.perl.org/users/laurent_r/2021/07/perl-weekly-challenge-119-swap-nibbles-and-sequence-without-1-on-1.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 119: simpler than it seems – Luca Ferrari – TAsk 1 – Open Source advocate, human being](https://fluca1978.github.io/2021/06/28/PerlWeeklyChallenge119.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 119: simpler than it seems – Luca Ferrari – Task 2 – Open Source advocate, human being](https://fluca1978.github.io/2021/06/28/PerlWeeklyChallenge119.html#task2) ( *Raku* )

**Roger Bell_West**

 * [RogerBW's Blog: Perl Weekly Challenge 119: Sequence Nibble](https://blog.firedrake.org/archive/2021/07/Perl_Weekly_Challenge_119__Sequence_Nibble.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 119](https://dev.to/simongreennet/weekly-challenge-119-79j) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 119 – W. Luis Mochán](https://wlmb.github.io/2021/06/28/PWC119/) ( *Perl* )
