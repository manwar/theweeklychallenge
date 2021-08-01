---
author:       Colin Crain
date:         2021-08-01T00:00:00
description:  "Colin Crain › Perl Weekly Review #121"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #121"
image:        images/blog/p5-review-challenge-121.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-120/).* )

Welcome to the Perl review for **Week 121** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-121/) or the summary [**recap**](/blog/recap-challenge-121/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC121TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC121TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC121BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC121TASK1}

# Invert Bit
*Submitted by: Mohammad S Anwar*<br>
You are given integers 0 <= $m <= 255 and 1 <= $n <= 8.

Write a script to invert $n bit from the end of the binary representation of $m and print the decimal representation of the new binary number.

**Example**
```
    Input: $m = 12, $n = 3
    Output: 8

        Binary representation of $m = 00001100
        Invert 3rd bit from the end = 00001000
        Decimal equivalent of 00001000 = 8

    Input $m = 18, $n = 4
    Output: 26

        Binary representation of $m = 00010010
        Invert 4th bit from the end = 00011010
        Decimal equivalent of 00011010 = 26
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/abigail/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/adam-russell/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/athanasius/perl/ch-1.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/bruce-gray/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/colin-crain/perl/ch-1.pl),
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/cristian-heredia/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/james-smith/perl/ch-1.pl),
[**Jared Martin**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/jaredor/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/jo-37/perl/ch-1.pl),
[**Lance Wicks**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/lance-wicks/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/lubos-kolouch/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/mattneleigh/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/perlboy1967/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/paulo-custodio/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/pete-houston/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/sgreen/perl/ch-1.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/stuart-little/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/ulrich-rieke/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/wlmb/perl/ch-1.pl), and
[**jdos22**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/jdos22/perl/ch-1.pl)


Well here we are in week three of our bitwork trilogy, with 30 submissions for the first task. In this installment we are being asked to flip a single specified bit and see what happens.

Bitwise operations, working on the underlying binary number directly, carried the day by a large margin this time, but as before we still had a strong supporting cast considering the input as a binary representation to be manually processed. In this case, though, most of those submissions first broke the string into an array of individual values, with the correct position then identified by index and altered before reassembly. Lastly, `substr` operations could of course be used to directly mainpulate the 1s and 0s in a binary string representation, and we'll make sure to look at those methods as well.





## BITWISE XOR
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/abigail/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/arne-sommer/perl/ch-1.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/bruce-gray/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/colin-crain/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/james-smith/perl/ch-1.pl),
[**jdos22**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/jdos22/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/jo-37/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/mattneleigh/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/perlboy1967/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/paulo-custodio/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/pete-houston/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/sgreen/perl/ch-1.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/stuart-little/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/wlmb/perl/ch-1.pl)

A bitwise exclusive-OR, or XOR, operation with a set bit will set the target if it previously was not set: "one or the other", but if the target is already set it will unset it: "but not both". An XOR with an unset bit, a 0, will have no effect on the target's status. Thus this operator excels in the art of flipping bits.

Tool in hand, the challenge then becomes constructing a number with a set bit in the position we want flipped, with all other positions unset. This will flip only the single bit desired. Fortunately constructing this number was also found to be a relatively straightforward process.

The value of each position in a binary representation of a number works the same way as in any other base, such as base 10. When we look at the number 456: "four hundred and fifty-six", we understand that we have 4 hundreds, 5 tens and 6 ones. But these words too can be broken down mathematically: ones are the base, 10, raised to the power 0, tens are the base raised to the power 1, and hundreds the power 2. So when we write "456" we mean 4 × 10<sup>2</sup> + 5 × 10<sup>1</sup> + 6 × 10<sup>0</sup>.

The same exact relationship between position and power (*sounds sociopolitical, right?*) holds in every other base, including binary, base 2. In that case the math is very simple, as the value multiplicand in each position can only be 0 or 1, but the exponential multiplier relationship is the same: ... 2<sup>2</sup>, 2<sup>1</sup>, 2<sup>0</sup>.

What this means is a set bit at a certain position from the right of a number, counting from 0, holds the value of 2<sup>*position*</sup>. Now normally to count things we use the [cardinal numbers](https://en.wikipedia.org/wiki/Cardinal_numeral), starting from 1. If we want to countine to do things this way, that's fine, only we need to subtract 1 from the value, to avoid an [off-by-one error](https://en.wikipedia.org/wiki/Off-by-one_error).

If we properly construct our [bit mask](https://en.wikipedia.org/wiki/Mask_(computing)#Common_bitmask_functions), applying an XOR operation will produce our result without the need of any intermediate base representations.

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/arne-sommer/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/arne-sommer/raku/ch-1.raku)

Arne will start us off with a super-clear demonstration of the technique, breaking the parts down into two separate lines. In the first the bit mask is constructed, in the second the mask is applied using an exclusive OR operation. Here we use an exponent of the corrected position number to produce the required power of 2.

```perl
    my $mask   = 2 ** ($n -1);
    my $result = $m ^ $mask;
```

[**jdos22**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/jdos22/perl/ch-1.pl)

jdos22 uses similar steps, in this case employing a bit-shift operator.

```perl
    my $Mask = 1;
    $Mask = ($Mask<<($n-1));
    my $Result = ($Mask ^ $m);
```

[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/mattneleigh/perl/ch-1.pl)

Keeping the process firmly rooted in the bitwise world, Matthew declares his initial bit state to be shifted as the the hexadecimal digit 1. With the bit-shift operator we get a variation of the previously mentioned off-by-one problem: we want to use a left bit-shift, `<<`, telling it how many positions to move the bits leftward from the current position — in this case the right-hand end, at position 0. But we're already *at* position 0, so that's not been counted. Thus we still need to subtract 1 from the number of positions we wish to shift left.

A quick XOR and we have the number requested.

```perl
    return(
        $m ^ (0x01 << ($n - 1))
    );
```

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/pete-houston/perl/ch-1.pl)

**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/pete-houston/awk/ch-1.awk), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/pete-houston/lua/ch-1.lua), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/pete-houston/python/ch-1.py)

Pete gives us an excellent demonstration of exactly how little is actually required to provide the solution. In this minimal implementation we eschew variables entirely, drawing on the internal `@ARGV` array of the command line instead. The elements stored in theis array for our use are  mutable, and here the value of the second argument, `$ARGV[1]` is pre-decremented before use. An exponent and and exclusive-or and we're in business.
```perl
    say $ARGV[0] ^ 2 ** --$ARGV[1];
```

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/jaldhar-h-vyas/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/jaldhar-h-vyas/raku/ch-1.sh)

Jaldhar goes one farther and reduces it to a Perl one-liner, removing even a script from the process.

```perl
    #!/bin/sh
    perl -E 'say $ARGV[0] ^ (1 << $ARGV[1] - 1);' $@
```


### other BITWISE HOT TAKES
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/e-choroba/perl/ch-1.pl), and
[**Jared Martin**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/jaredor/perl/ch-1.pl)

We saw this process of XOR-ing the input number with a constructed bit mask over and over again with little variation. However there were some other ways to use bitwise operations to get where we're going.

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/duncan-c-white/perl/ch-1.pl)

Duncan does things a little differently, playing around with the logic. We see a familiar mask construction, but then instead of an XOR we get a ternary operation, using only AND, OR and NOT.

First a bitwise AND is applied, revealing whether the mask bit in the target binary is set. On the basis of this, if it *is* set we apply a bitwise AND to a negated version of the mask, flipping a 1 to 0 in the selected postion and leaving the others untouched. If the bit is *not* set, we use a bitwise OR to set it.

```perl
    my $mask = (1 << ($n-1));
    $m = ($m & $mask ) ? ($m & ~$mask) : ($m | $mask);
    say $m;
```


[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/e-choroba/perl/ch-1.pl)

Choroba shies away from most bitwise operations, constructing the mask using an exponent and doing a little clever arithmetic. This works by adding the mask to the number normally, using addition, and then should the given bit position already be set, and hence carry, the carried value is then subtracted from the result.

The secret to the subtrahend (yes that is the correct term, analogous to summand) is in the sole remaining bitwise operation, an AND that identifies whether the bit in question is already set. If it is not the result is 0, multiplied by 2 this remains 0 and nothing is subtracted. If, on the other hand the bit is *set*, the mask value is returned, and multiplying this by 2 returns a number with the solitary next larger bit set. This matches the value from the carry operation of the addition, which is then subtracted.

I get the feeling Choroba is well aware of easier ways to get this particular job done and is having a little fun with it. Well good on him, well done I say. Sneaky. I like it.

```perl
    sub invert_bit {
        my ($m, $n) = @_;
        my $bit = 2 ** ($n - 1);
        return $m + $bit - 2 * ($m & $bit)
    }
```

[**Jared Martin**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/jaredor/perl/ch-1.pl)

Jared returns us once again to the land of `bigint`, with all the weirdness and special operator functions that implies. As usual things don't work out perfectly as planned, but a workaround is found, in this case either adding or subtracting the mask arithmetically depending on whether the bit position is set, as determined using a bitwise AND, `band()`.

```perl
    sub main_algo {

        use bigint;

        my ($m, $n) = map { $_ + 0 } @_;
        my ($m_bstr, $m_bin, $tmp) = ($m->bstr(), substr($m->as_bin(), 2), $m->copy());
        my $mask = 2**($n-1);
        $tmp->band($mask);

        my $result = $tmp ? $m - $mask : $m + $mask; # Resort to arithmetic

        return [ $m_bstr, $m_bin, $n->bstr(), $result->bstr(), substr($result->as_bin(), 2) ];

    }
```


## splitting STRINGS
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/adam-russell/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/athanasius/perl/ch-1.pl),
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/cristian-heredia/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/lubos-kolouch/perl/ch-1.pl), and
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/mohammad-anwar/perl/ch-1.pl)

In a more tactile, less analytical manner, it was possible to convert the base number into a binary string representation and break that into an array of digit characters. Then with a little massaging the requested position can be directly accessed by index and changed. The array is then rejoined and converted back into a decimal value.

[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/lubos-kolouch/perl/ch-1.pl)

**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/lubos-kolouch/python/ch-1.py)

Lubos will open with a demonstration of one technique. Here we can see him use `sprintf "%b"` to convert his number into a binary representation, followed by `split` to obtain an array we can work on. The selected bit is referenced from the *end* of the array, which starts counting at -1, so there is no need for any adjustment to the position index.

A ternary operation sets the element to 1 or 0 depending on its previous value, and the binary string is then reassembled. Inside `bin2dec()` the `pack`/`unpack` sequence from *The Perl Cookbook* converts us back to decimal.


```perl
    sub invert_bit{
        my ($what, $n) = @_;

        my $binary_what = sprintf ("%b",$what);
        my @binary_arr = split //, $binary_what;
        $binary_arr[-$n] = $binary_arr[-$n] ? 0 : 1;
        return bin2dec(join "", @binary_arr);
    }
```

[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/cristian-heredia/perl/ch-1.pl)

**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/cristian-heredia/python/ch-1.py)

Cristina carefully walks us through her steps: in this case, after ensuring that we have 8 bits, counting from the 0 index in the array, using the value 8 minus the requested position. A small `if/else` structure effects the change.

To convert back to decimal she uses `eval` to bring the number back into Perl with a binary signifier. The value is then presented with decimal representation, being just an ordinary number again.

```perl
    # Convert to binary
    my @bits = split(//, sprintf ("%b", $m));

    #Complete with 0
    my $counter = 8-@bits;
    while ($counter!=0){
        unshift @bits, '0';
        $counter--;
    }

    # invert $n bit from the end of the binary
    if($bits[8-$n]==0){
       $bits[8-$n]='1';
    }
    else{
       $bits[8-$n]='0';
    }
    # Convert to string
    my $newNumber = join( '', @bits );
    # Convert to decimal
    my $result = eval("0b$newNumber");
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/athanasius/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/athanasius/raku/ch-1.raku)

The monk gives us another demonstration of counting forwards from the 0 index in a nice clear sequence of steps, converting back into decimal with the general-purpose `oct` function and a binary prefix.


```perl
    my $m_bin = sprintf '%08b', $m;
    my @bin   = split '', $m_bin;
    my $idx   = 8 - $n;

    $bin[ $idx ] = $bin[ $idx ] == 1 ? 0 : 1;

    my $s_bin = join '', @bin;
    my $s_dec = oct "0b$s_bin";
```

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/adam-russell/perl/ch-1.pl)

**additional languages:**
[Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/adam-russell/prolog/ch-1.p)

Adam gives us a sort of hybrid approach, creating an array of binary digits and then, once the index is determined from the length of the string, subtracting the desired position value, the element is flipped with an XOR operation. The old bitwise switcharoo, you might say.

```perl
    sub flip_bit_n{
        my($x, $n) = @_;
        my $bits = substr(unpack("B32", pack("N", $x)), 24, 8);
        my @bits = split(//, $bits);
        $bits[@bits - $n] ^= 1;
        my $flipped_decimal = unpack("N", pack("B32", substr("0" x 32 . join("", @bits), -32)));
        return $flipped_decimal;
    }
```


### SUBSTRINGS
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/dave-jacoby/perl/ch-1.pl),
[**Lance Wicks**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/lance-wicks/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/laurent-rosenfeld/perl/ch-1.pl), and
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/ulrich-rieke/perl/ch-1.pl)

Although the conversion into binary representation part remains the same, it wasn't strictly necessary to break apart the string into an array, as `substr` is available to directly access internal characters. There were a couple of ways we saw to go about doing this.

[**Lance Wicks**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/lance-wicks/perl/ch-1.pl)

Lance has encapsulated his code away in his own  `Invert` module, as is his wont. Inside his `bit()` subroutine, he uses a pair of `substr` functions: first to identify the bit in question, and then, using the 4 argument version, replace it with its complement.

sub bit {
    my ($self, %args) = @_;

    my $m = $args{m};
    my $n = $args{n};

    my $bin_m = sprintf("%08b",$m);
    my $bit = substr $bin_m, -($n), 1;
    substr $bin_m, -($n), 1, $bit ? 0 : 1 ;

    return oct "0b$bin_m";
}

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/laurent-rosenfeld/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/laurent-rosenfeld/raku/ch-1.raku)

Laurent gives us a version of a very similar process, using a pair of `substr` functions. For his conversion back to decimal he rolls up a little loop to multiply and sum successive digits by increasing powers of 2 to arrive at the total.

```perl
    sub invert_bit {
        my ($m, $n) = @_;
        my $bin = sprintf "%08b", $m;
        my $bit = substr $bin, -$n, 1;
        substr $bin, -$n, 1, $bit == 0 ? 1 : 0;
        return bin2dec $bin;
    }

    sub bin2dec {
        my $bin = shift;
        my $sum = 0;
        for my $i (split //, $bin) {
            $sum = $sum * 2 + $i;
        }
        return $sum;
    }

```


[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/dave-jacoby/perl/ch-1.pl)

Finally, to finish the discussion, here Dave does something after to my own heart — using `substr` twice in the same statement, as both an lvalue and an rvalue. It's really great to have a function that provides such flexability, showing us yet again the awesome powers  Perl has in working with strings.

In the routine, the right-side position value is converted first into a left-side index by subtracting the input from 8. Then in the next line — the main action — this index is used to select the character at that position in the binary string.

He then does something quite clever, subtracting that value from 1. If the bit is set, the result will be 1 - 1, if the bit is not set, 1 - 0. The result, of flipping the bit value, is then assigned using a second, lvalue `substr` over the original character, replacing it. Nice.


```perl
    sub invert_bit ( $m = 0, $n = 1 ) {
        my $bin = sprintf '%08b', $m;
        my $nn  = 8 - $n;
        substr( $bin, $nn, 1 ) = 1 - substr( $bin, $nn, 1 );
        return oct( '0b' . $bin );
    }
```


## Additional Submissions in Guest Languages

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/abigail/perl/ch-1.pl)

**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/abigail/awk/ch-1.gawk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/abigail/bash/ch-1.sh), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/abigail/bc/ch-1.bc), [Befunge-93](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/abigail/befunge-93/ch-1.bf93), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/abigail/c/ch-1.c), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/abigail/go/ch-1.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/abigail/java/ch-1.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/abigail/lua/ch-1.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/abigail/node/ch-1.js), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/abigail/pascal/ch-1.p), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/abigail/python/ch-1.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/abigail/r/ch-1.r), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/abigail/ruby/ch-1.rb), [Scheme](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/abigail/scheme/ch-1.scm), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/abigail/tcl/ch-1.tcl)

[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/bruce-gray/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/bruce-gray/raku/ch-1.raku)

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/cheok-yin-fung/perl/ch-1.pl)

**additional languages:**
[Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/cheok-yin-fung/bash/ch-1.sh)

[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/colin-crain/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/colin-crain/raku/ch-1.raku)

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/polettix/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/polettix/raku/ch-1.raku)

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/roger-bell-west/perl/ch-1.pl)

**additional languages:**
[Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/roger-bell-west/rust/ch-1.rs)

[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/stuart-little/perl/ch-1.pl)

**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/stuart-little/haskell/ch-1.hs), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/stuart-little/lua/ch-1.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/stuart-little/node/ch-1.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/stuart-little/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/stuart-little/raku/ch-1.raku)



------------------------------------------

---

# TASK 2 {#PWC121TASK2}

# The Travelling Salesman
*Submitted by: Jorg Sommrey*<br>
You are given a NxN matrix containing the distances between N cities.

Write a script to find a round trip of minimum length visiting all N cities exactly once and returning to the start.

**Example**

```

    Matrix: [0, 5, 2, 7]
            [5, 0, 5, 3]
            [3, 1, 0, 6]
            [4, 5, 4, 0]

    Output:
            length = 10
            tour = (0 2 1 3 0)

```

**BONUS 1:** For a given number N, create a random NxN distance matrix and find a solution for this matrix.

**BONUS 2:** Find a solution for a random matrix of size 15x15 or 20x20


## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/abigail/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/adam-russell/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/arne-sommer/perl/ch-2.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/bruce-gray/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/dave-jacoby/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/polettix/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/james-smith/perl/ch-2.pl), and
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/jo-37/perl/ch-2.pl)
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/mattneleigh/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/perlboy1967/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/paulo-custodio/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/pete-houston/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/roger-bell-west/perl/ch-2.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/stuart-little/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/ulrich-rieke/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/wlmb/perl/ch-2.pl)


There were only 19 working submissions for the second task this past week. The Traveling Salesman problem is, after all, a hard problem.

Well, technically it's hard, as in NP-hard. Which means it's likely there are no polynomial-time algorithms to calculate a solution. Which often means a brute-force algorithm is easy to implement but certain to blow up in complexity. Thus the bonus question, of what happens to your solution as the number of interconnections increases.

I believe the intent of the bonus question refers to the fact that the base algorithm runs in exponential time, so to rephrase things: Can your algorithm handle input of 15x15? How about 20x20?

The problem requires us to in some way look at all the ways possible to interconnect the city matrix, meaning we need to examine a lot of possible pathways. There are ways that have been found to somewhat simplify the problem, allowing us to partially evaluate tours and perform some preemptory pruning to avoid some obviously unfruitful work, but in the end the complexity remains exponential in nature, just more restrained in its growth factor. The apparent lack of a polynomial solution has led to quite a bit of work in calculating boundaries to restrain the search space, both lower and upper, for both complete tours and smaller subtours, allowing researchers to focus the algorithmic processing required to find an optimal solution, and proving that the solution found is optimal.

The difficulty of finding exact, optimal solutions for large collections of data points had also driven research into developing practical sub-optimal algorithms that work much more quickly with less complexity. When an optimal solution cannot be easily obtained, this does not affect the inital cause that required the solution, and sometimes we need to make our best guess.

> **“A good plan, violently executed now, is better than a perfect plan next week.”**<br>
> — George S. Patton

To this end a great many heuristic algorithms for the TSP have been developed over the years, and the open-ended nature of the problem space allows new approaches to be taken as technologies evolve. Some say three new techniques have been developed since I started this review.  We did see a handful of these heuristic techniques implemented among the submissions, and will follow our exploration of optimal solutions with a discussion of these approximate approaches.

Finally, with apologies for contradicting Dave, I find asymmetric cost maps to be a generally more realistic modeling of real-world data rather than a random quirk of the map making process. To wit: from where I live it takes about 7 hours, if I recall, to fly to Las Vegas for a some corporate conference *(Remember those? People would meet their peers, learn things and get into trouble and such? It sounds like the stuff of myth, before the Black Ships came...)*. Anyway, because we could surf the jet stream, it would only take about 4 1/2 hours to get back, riding high on the wind. It's been a while, and I don't remember the exact numbers, but that's pretty close. So there's a fine real-world example of some serious asymmetry for you.

## EXACT solutions

The Traveling Salesman problem, as we said, remains one of the great unsolved NP-hard problems in computer science. Thus there are no known polynomial-time, "easy" methods to simplifying the inherent exponentially growing complexity of the interconnections presented. That said,  incremental advancements have been made in the study, lowering the complexity from super-exponetial to "merely" exponential time, at the cost of greatly enlarged memory requirements.

Concorde, the most sophisticated algorithm as-yet developed, uses linear programming techniques to narrow the search space by iteratively identifying suboptimal areas in a tour and healing them until a provably optimal solution is found. Linear programing itself is a bit of an art in finding the suboptimal centers in the solution requiring further attention — locating the "cutting plane" — so constructing this process algorithmically has proved challenging, and is what separates out Concorde from the pack. This is fascinating work, but no one really explored the techniques for this challenge.

Although no technique can be computationally called simple, some methods are better than others at finding a exact, minimal and hence optimal solution, and several solutions utilized the Held-Karp algorithm, a dynamic programming solution that trades some computational complexity for greatly enlarged memory requirements.

### an EXHAUSTED PERMUTATION
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/arne-sommer/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/colin-crain/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/perlboy1967/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/pete-houston/perl/ch-2.pl), and
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/stuart-little/perl/ch-2.pl)

In the exhaustive approach, every combination of cities is permuted and the configuration summed, with a running tally of the smallest sum and the path taken to arrive at it. As cities are added to the configuration the dataset of interconnections grows with it, resulting in factorial growth — exponential with an increasing exponent — or super-exponential growth.

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/arne-sommer/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/arne-sommer/raku/ch-2.raku)

Arne will start us off with a demonstration of an exhaustive permutation solution. Using `Algorithm::Permute` he produces iterations of permutations of the city identifiers, each permutation representing an alternative tour available.

In Arne's implementation all cities are permuted, creating circular duplication in the tours with the starting city set in differing positions. To counter this each path is quickly cycled through a complete rotation and rotational duplicates are removed. Each individual path is summed, including the return leg to base, and the shortest path selected.

The circular tour aspect of the task, permuting through the cities and back to a fixed base, proved a bother to accommodate.

```perl
    my $p_iterator = Algorithm::Permute->new ( \@p2 );

    PERM:
    while (my @path = $p_iterator->next)
    {
      my $candidate = join(" ", @path);

      my @p = @path;

      for (1 .. $size)
      {
        push(@p, shift @p);

        next PERM if $seen{ join(" ", @p) };
      }

      $seen{$candidate} = 1;

      push(@path, $path[0]);
      my @path2 = @path;

      my $from   = shift @path;
      my $length = 0;

      while (@path)
      {
        my $to = shift @path;
        $length += $NN[$from][$to];
        say ": " . join(" ", @path2) . " | $from -> $to = " . $NN[$from][$to] . " (sum $length)" if $verbose;
        $from = $to;
      }
      say "" if $verbose;

      if ($solution_length > $length)
      {
        $solution_length = $length;
        @solution = @path2;
      }
    }
```

[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/stuart-little/perl/ch-2.pl)

**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/stuart-little/haskell/ch-2.hs), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/stuart-little/lua/ch-2.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/stuart-little/node/ch-2.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/stuart-little/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/stuart-little/raku/ch-2.raku)

Stuart presents us with an assortment of, I must say, rather cryptic subroutines to perform his exhaustive search. However with a little help deciphering his method becomes clear. First off, `mkRMat()` uses a pair of nested `map` functions to return a random matrix of size `$n`, and `sayMat()` displays it all pretty-like. That's that. Now to the meat of the matter we see `pathCost()`, which given a path array in the matrix iterates through it using a `map` function over the indices, looking up the matrix value for the distance from each city to the next.

The real work is done by `permute()`, from `Algorithm::Permute`, which in this form will grab successive permutations and apply the given callback function on each, effectively looping over all possibilities, calculating the path cost and keeping a running tally of the minimal path and value.

Add some I/O and that's all we need to do here.

```perl
    use Algorithm::Permute qw(permute);
    use List::Util qw(sum);

    sub mkRMat($n) {
        my @mat = map {my $i = $_; my @row = map {($_ == $i) ? (0) : (int(rand(9))+1)} (1..$n); \@row} (1..$n);
        return \@mat;
    }

    sub sayMat($m) {
        for (@{$m}) {
        say "@{$_}";
        }
    }

    sub pathCost($path,$mat) {
        return sum map {$mat->[$path->[$_]]->[$path->[($_+1) % (scalar @{$path})]]} (0..$#$path)
    }

    my $mat = mkRMat($ARGV[0]);

    say "Your matrix:";
    sayMat($mat);

    my @init=(0..$ARGV[0]-1);
    my @sol = @init;
    my $cost=pathCost(\@init,$mat);

    permute { if ((my $newCost = pathCost(\@init,$mat)) < $cost) {$cost = $newCost; @sol = @init} } @init;

    say "Optimal cost: $cost";
    say "Optimal path: @sol $sol[0]";
```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/perlboy1967/perl/ch-2.pl)

With Niels, we see a return of the `MCE`, "Multi-Core Engine" to run his application on the maximum number of threads available. This should speed computation up considerably, if not by a direct multiple of the number of cores, then a sizable faction at least.

Lists of permutations are generated, then handed over the the `MCE` for distribution among the worker proceses. To locate the matrix position for the cost to travel form one city to another, the `List::Util::slide()` function is used in a cleaver fashion, along with `sum()`, to fill the indices.

```perl
    use MCE;
    use MCE::Util;

    use List::Util qw(sum min);
    use List::MoreUtils qw(slide);
    use Algorithm::Combinatorics qw(permutations);

    sub theTravellingSalesman($) {
      my ($arM) = @_;

      my $min;
      my $minP;

      # Suppress 'Name "main::(a|b)" used only once: possible typo' messages
      ($a,$b) = (0,0);

      my %res;

      # Using brute force 'permutations'
      my @i = (0 ..  scalar(@{$arM->[0]})-1);
      my $iter = permutations(\@i);

      my $mce = MCE->new(
        chunk_size => 1_000,
        max_workers => MCE::Util::get_ncpu(),
        gather => \%res,
        user_func => sub {
          my ($mce, $chunk_ref, $chunk_id) = @_;

          my %ret; my $min; my @minV;
          foreach (@$chunk_ref) {

            # This is the 'magic' line ;-)
            my $m = sum slide {$arM->[$a][$b]} @$_, $_->[0];

            if (!defined $min or $m < $min) {
              @minV = (@$_, $_->[0]);
              $min = $m
            }
          }
          $ret{$min} = [@minV];
          MCE->gather(%ret);
        }
      );

      my @p;
      while (my $ar = $iter->next) {
        push(@p,$ar);
        if (scalar(@p) == 10_000) {
          print STDERR '.';
          $mce->process([@p]);
          @p = ();
        }
      }
      print STDERR "\n";

      $mce->process([@p]) if (scalar(@p));

      $min = min(keys %res);

      return [$min,$res{$min}];
    }
```

### a RECURSIVE approach
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/abigail/perl/ch-2.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/bruce-gray/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/dave-jacoby/perl/ch-2.pl), and
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/paulo-custodio/perl/ch-2.pl)

The task is well suited to a recursive solution, where individual path solutions are determined in a depth-first search. In the simplest form all paths are examined and the shortest remembered, but various early exit options are also available to this approach to minimize unproductive efforts — when, for instance, the current path sum already exceeds the minimum.

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/dave-jacoby/perl/ch-2.pl)

Dave will demonstrate the basic technique. The tour length is recalculated at each recursion, however this also allows him to exit early should a partial solution ever exceed the current minimum total length. As the current minimum tour length is decreased as shorter solutions are found, this action will prune more and more paths, avoiding unproductive effort.

```perl
    sub travelling_salesman ( $map, $loc = 0, $tour = [] ) {
        push $tour->@*, $loc;
        my $l = tour_length( $map, $tour );
        return unless $l < $f;

        my %tour    = map  { ( $_, 1 ) } $tour->@*;
        my @options = grep { !$tour{$_} } 0 .. -1 + scalar $map->@*;

        if ( scalar @options ) {
            for my $o (@options) {
                my $next->@* = $tour->@*;
                travelling_salesman( $map, $o, $next );
            }
        }
        else {
            push $tour->@*, $tour->[0];
            my $l = tour_length( $map, $tour );
            say join ' ', 'END', $l, '', $f, '', $tour->@*;
            if ( $l < $f ) {
                @final_tour = $tour->@*;
                $f          = $l;
            }
        }
    }
```

[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/bruce-gray/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/bruce-gray/raku/ch-2.raku)

Bruce also employs a depth-first recursion to explore all possible intercity transport options. He does add the current value of the cost taken in partial tour so far to his subroutine calls, facilitating the decision to exit a unfruitful recursion once it exceeds the current minimum complete cost.


```perl
    sub tsp {
        die if @_ != 1;
        my @G = @{+shift};

        my @visited = map { 0 } @G;
        my %best = ( cost => (~0 >> 1), path => '' );

        my $minimum_weight_Hamiltonian_cycle;
        $minimum_weight_Hamiltonian_cycle = sub {
            my ( $current_position, $count, $cost_so_far, @path ) = @_;

            my $current_row = $G[$current_position];

            return if ($cost_so_far + $current_row->[0]) > $best{cost};

            if ($count == @G and $current_row->[0]) {
                my $cost = $cost_so_far + $current_row->[0];
                %best = ( cost => $cost, path => join(' ', @path) ) if $cost < $best{cost};
                return; # End of recursion.
            }

            for my $i ( grep { !$visited[$_] } keys @visited ) {
                my $node_cost = $current_row->[$i]
                    or next; # Zero would mean same node, or no path from one node to next.

                $visited[$i] = 1;
                $minimum_weight_Hamiltonian_cycle->( $i, $count + 1, $cost_so_far + $node_cost, (@path, $i) );
                $visited[$i] = 0;
            }
        };

        $visited[0] = 1;
        $minimum_weight_Hamiltonian_cycle->( 0, 1, 0, );

        return %best;
    }
```


### the HELD-KARP algorithm
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/polettix/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/jo-37/perl/ch-2.pl), and
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/roger-bell-west/perl/ch-2.pl)

The Held-Karp algorithm is a dynamic programming method that finds an exact solution by calculating the optimal route from the base to each other city, as routed through a series of successively larger sets of intermediary points.  Once these routes are known, the return leg is added to each total and the shortest result selected as the optimal cycle.

The saving in the method are realized by the dynamic growth of the partial solutions, as the sets of intermediate cities are expanded. Once a shortest path through a smaller set of intermediates has been decided, then any other permutation of those cities in calculating the next set, with one more element, need never be considered. This avoids whole blocks of repetitive calculations.

The downside is the multidimensional matrix of partial solutions is quite large. The dynamic programming comes into play when we wish to extend our tour for an additional city using the knowledge of best routes already computed. At the beginning, selecting the best paths from *A* to the remaining cities, each through a set *S* of only one additional city is trivial: as there are no permutations we can directly compute the values for each city not already represented and determine the minimal cost; this intermediate city is the best way to get from the start to the designated end city through one other city. We can then use this set of solutions, one for each destination, to build new sets to extend the destination one city further. Again only the optimal sub-path need be considered for each remaining unvisited destination, reducing the complexity down to a choice between *k*-2 elements for each new destination. This process is expanded until all cities are in the set of the start city, the destination city and the traversed intermediates. Adding the cost of the return leg from the final destination to the start completes the circuit and the minimum is selected from the final set of paths.

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/jo-37/perl/ch-2.pl)

As he has been so kind as to include a running commentary describing the steps in his implementation, we'll start with his submission. The partial solutions data is stored as a multidimensional hash, keyed primarily on the variable-length set of visited cities: we need a dimension for our destination city, and a destination for our traversal set, but that dimension is itself multidimensional as to include all *n* choose *k* combinations of possible remaining cities to populate the set.

```perl
    sub tsp_held_karp ($dist) {
        # $c{"@s"}{$c} is the minimum distance from 0 to $c visiting all
        # cities in @s.  The key for %c is a set. Here a set is represented
        # by a space separated, ordered list of its elements.
        my %c;
        # $p{"@s"}{$c} is the predecessor of $c when visiting all cities in
        # @s, i.e. the city in @s where the minimum $c{"@s"}{$c} is taken.
        my %p;
        # The values of %c are trivial for singletons @s = ($c).
        $c{$_}{$_} = $dist->[0][$_] for 1 .. $#$dist;
        # Loop over all subsets of at least two cities and omitting 0.
        for my $s (2 .. @$dist - 1) {
            forcomb {
                # Get the current subset of $s cities.
                my @s = @{[1 .. @$dist - 1]}[@_];
                # Loop over all the cities in the set.
                for my $k (@s) {
                    # Remove the current city from the set.
                    my @s_k = grep {$_ != $k} @s;
                    # Dynamic programming:
                    # The set @s_k (i.e. S\{k}) has one element less than @s
                    # and thus all the minimum distances from 0 to any city
                    # in @s_k via @s_k are already known.  This allows to
                    # calculate the minimum distance from 0 to $k via all
                    # cities in @s.  Keeping track of the actual predecessor
                    # in @s_k.
                    my $min = 'inf';
                    my $p;
                    for my $m (@s_k) {
                        my $cm = $c{"@s_k"}{$m} + $dist->[$m][$k];
                        if ($cm < $min) {
                            $min = $cm;
                            $p = $m;
                        }
                    }
                    $c{"@s"}{$k} = $min;
                    $p{"@s"}{$k} = $p;
                }
            } @$dist - 1, $s;
        }
        # To complete the circle: for all cities in the full set of all
        # cities except the start find the minimum from the start to that
        # city plus the distance back to the start.
        my $min = 'inf';
        my $last;
        for my $k (1 .. $#$dist) {
            if ((my $m = $c{"@{[1 .. $#$dist]}"}{$k} + $dist->[$k][0]) < $min) {
                $min = $m;
                $last = $k;
            }
        }

        # So far this was almost straight from the wiki pseudo code.  Now
        # building the actual circle.  We only know the last city in the
        # tour yet but are able to backtrack using %p.
        my @circle = ($last, 0);
        # The set of all cities except 0.
        my @remainder = 1 .. $#$dist;
        while (@remainder > 1) {
            # Find the predecessor.
            my $pred = $p{"@remainder"}{$last};
            unshift @circle, $pred;
            # Remove the last city from the set and make its predecessor
            # the new last city.
            @remainder = grep {$_ != $last} @remainder;
            $last = $pred;
        }
        # Complete the circle with the start.
        unshift @circle, 0;
        (\@circle, $min);
    }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/e-choroba/perl/ch-2.pl)

Choroba interestingly stores his visited-city set information as set bits in a binary number, with each 1 corresponding to a city in the set. This bit of cleverness proves to be quite efficient, resulting in a very quick implementation.

```perl
    sub tsp {
        my ($matrix) = @_;
        my %shortest;
        my @inv_mask;

        for my $k (1 .. $#$matrix) {
            $shortest{ 2 ** $k }{$k} = $matrix->[0][$k];
            $inv_mask[$k] = 2 ** @$matrix - 1 - 2 ** $k;
        }

        for my $size (2 .. $#$matrix) {
            my $binary = '1' x $size . '0' x ($#$matrix - $size);
            my $mask = oct("0b$binary") << 1;
            while ($mask) {
                my @S = grep substr($binary, $#$matrix - $_ , 1), 1 .. $#$matrix;
                for my $k (@S) {
                    my @mins;
                    my $from = $shortest{ $mask & $inv_mask[$k] };
                    for my $m (@S) {
                        next if $m == $k;
                        push @mins, $from->{$m} + $matrix->[$m][$k];
                    }
                    $shortest{$mask}{$k} = min(@mins);
                }

                # Find the nearest smaller mask with the same number of 1's.
                # Similar to PWC 114/2.
                my $pos = rindex $binary, '10';
                if (-1 == $pos) {
                    $mask = 0;

                } else {
                    substr $binary, $pos, 2, '01';
                    $binary .= '0' x substr($binary, $pos + 2) =~ tr/0//d;
                    $mask = oct("0b$binary") << 1;
                }
            }
        }

        my $full_set = 2 ** @$matrix - 2;
        my $length = 'INF';
        for my $start (1 .. $#$matrix) {
            my $p = $shortest{$full_set}{$start} + $matrix->[$start][0];
            $length = $p if $p < $length;
        }
        return $length
    }
```


## HEURISTIC solutions

Even though the problem of finding what is known to be the best, optimal solution to a given dataset can be a computationally exhausting problem, this doesn't remove the need presented by these problems in the world. Delivery trucks still need to be routed and salesmen still have to sell. Sometimes in the absence of the perfect plan a pretty good plan will have to do. Thus quite a bit of work has been applied to creating heuristic algorithms for solving a given large dataset with a better-than-random strategy, and on improving and refining the sub-optimal guesses made. The best methods can find a path within a few percentage points of optimal cost in a small fraction of the time required to find the true minimum.

### nearest NEIGHBORS, FRIENDS and RELATIONS
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/colin-crain/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/mattneleigh/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/pete-houston/perl/ch-2.pl), and
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/ulrich-rieke/perl/ch-2.pl)

In the nearest neighbor strategy we simply pick the closest city among those available from the starting point and move there. Then we assess the situation and pick the new closest unvisited city. This progresses, one city after another, until there are no more cities to visit, at which point we return home.

In a bidirectional variant both ends of the chain are considered when adding new links, somewhat alleviating the possibility of finding oneself a long way from home, with one choice of a lengthy suboptimal return journey.

[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/mattneleigh/perl/ch-2.pl)

Matthew has provided us with a nice example of the algorithm, with the steps clearly commented. The tour starts at the base city, then proceeds from there, always choosing the closest city to the last visited to continue forward, until at the end we loop back to the start to complete the circuit.

For such a simple and computationally quick idea it is remarkably effective at delivering a pretty-good approximation of the optimal tour, in a tiny fraction of the time for an exhaustive search.


```perl
    sub plan_sales_route{
        my $grid = shift();
        my $start = shift();

        my $i;
        my $j;
        my @visited;
        my $distance;
        my $city;
        my $itinerary = [
            0,
            []
        ];

        # Initialize a few things
        $j = scalar(@{$grid->[0]});
        $i = $j - 1;
        while($j--){
            $visited[$j] = 0;
        }

        # Start at the specified city- add
        # the city to the tour itinerary and
        # mark it as having been visited
        push(@{$itinerary->[1]}, $start);
        $visited[$start] = 1;

        # Take a tour of predetermined length
        while($i--){
            # Presumably no city will be a
            # million miles away...
            $distance = 1000000;
            $city = 0;

            # Check all the cities we can get to
            # from the current city
            for($j=0; $j<scalar(@{$grid->[0]}); $j++){
                # Skip this potential next city if
                # we've visited already
                next if($visited[$j]);

                if($grid->[$itinerary->[1][-1]][$j] < $distance){
                    # The mileage to this city is lower
                    # than any previously examined
                    # segment; make a note of it
                    $distance = $grid->[$itinerary->[1][-1]][$j];
                    $city = $j;
                }
            }

            # Add mileage from the next segment to
            # the total, add details of the next
            # segment to the itinerary, and mark
            # the next city as visited
            $itinerary->[0] += $distance;
            push(@{$itinerary->[1]}, $city);
            $visited[$city] = 1;
        }

        # Return to the specified city: add the
        # mileage between the last city visited
        # and the origin city, and put the
        # origin city in the tour itinerary again
        $itinerary->[0] += $grid->[
            $itinerary->[1][-1]
            ]
            [$start];
        push(@{$itinerary->[1]}, $start);

        return($itinerary);

    }
```

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/ulrich-rieke/perl/ch-2.pl)

Here Ulrich shows us another example, always progressing forward to the closest remaining city, eventually wrapping up with a return to base.


```perl
    while ( scalar ( keys %visited ) < $len ) {
      my $column = findNextCity( $matrix[ $currentPlace ] , \%visited ) ;
      $length += $matrix[ $currentPlace ][ $column ] ;
      push @tour , $column ;
      $currentPlace = $column ;
      $visited{ $currentPlace }++ ;
    }
    #we must return to the start
    push @tour , 0 ;
    $length += $matrix[ $currentPlace ][ 0 ] ;
    say "length = $length" ;
    say "tour = (" . join( ' ' , @tour ) . ")" ;

    sub findNextCity {
      my $array = shift ;
      my $placesSeen = shift ;
      my @row = @$array ;
      my %visited = %{$placesSeen} ;
      my @sorted = sort { $a <=> $b } @row ;
      my $i = 1 ;
      my $column = findColumn( \@row , $sorted[ $i ] ) ;
      while ( exists $visited{ $column } ) {
          $i++ ;
          $column = findColumn( \@row , $sorted[ $i ] ) ;
      }
      return $column ;
    }
```



### a BIDIRECTIONAL variant

[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/colin-crain/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/colin-crain/raku/ch-2.raku)

Although I also provided several other solutions — an exhaustive permutation solution, a straightforward implementation of the nearest-neighbor algorithm, and an insertion algorithm described below — the best of the heuristics I explored was a modification of the nearest-neighbor pattern to expand the growing tour from both ends, front and back, adding the shortest path avalable at each iteration. This allowed an out for the algorithm, from being stuck with a long forced return leg back to base at the end of a traversal. Should this cost be exorbinant, this algorithm will likelier have already substituted a new base to the growing path, with hopefully a better ultimate positioning. In theory this should smooth the extremes at the long end of the data towards the center. In the end all cities will end up visited in a loop, so the solution path will need to be rotated until the given base is once again the origin.

This method seemed to generally improve on the standard algorithm by about 10% or so, but did not outperform that version in every trial.

```perl
    sub nn_bidirectional_ts ($mat) {
    ## a nearest-neighbor heuristic
    ## bidirectional growth from both ends of the partial tour, selecting the
    ## best next step

        ## create a list of unvisited cities
        my %cities = map { $_ => 1 } keys $mat->@*;

        ## starting city holds shortest arc
        my ($start, $dist) = (0, "Inf");
        my @mins = map { my $idx = $_; min grep { $_ > 0 } ( $idx->@* ) } $mat->@*;
        while ( my ($k, $v) = each @mins ) {
            ($start, $dist) = ($k, $v) if $v < $dist;
        }
        my $city = first { $mat->[$start][$_] == $dist }
                         (0..$mat->[$start]->@* - 1);

        ## start building the shortest path and removing visited cities from options
        my @sp = ( $start, $city );
        delete @cities{ @sp };

        while (scalar keys %cities) {
            my $min_end  = min( map { $mat->[$city][$_] } keys %cities );
            my $next_end = first { $mat->[$city][$_] == $min_end }
                grep { exists $cities{$_} } (0..$mat->[$city]->@* - 1);

            my $min_start  = min( map { $mat->[$_][$start] } keys %cities );
            my $next_start = first { $mat->[$_][$start] == $min_start }
                grep { exists $cities{$_} } (0..$mat->[$city]->@* - 1);

            if ($min_start < $min_end) {
                $dist += $min_start;

                unshift @sp, $next_start;

               delete $cities{ "$next_start" };
                $start = $next_start;
            }
            else {
                $dist += $min_end;

                push @sp, $next_end;

                delete $cities{ "$next_end" };
                $city = $next_end;
            }
        }

        ## link back to base, rotate and return
        $dist += $mat->[$city][$start];
        while ( $sp[0] ) { push @sp, shift @sp };
        return ( $dist, [ @sp, 0 ] );
    }
```

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/pete-houston/perl/ch-2.pl)

Pete gives us two solutions today, and exhaustive permutation method and a "naive" solver, using the nearest-neighbor algorithm. As we've seen several examples of brute-force permutation, here is his heuristic solution, always picking the lowest cost for the next leg on the tour, but seeking to grow the tour from either end, whichever produces the lower cost.

```perl
    sub naive {
        # Naive solver, takes the shortest step each time to a place we have
        # not been
        my $starttime = [gettimeofday];
        my @d = @_;

        # Start does not matter, so pick 0
        my @route = 0;
        my %targets;
        @targets{(1 .. $#d)} = (1) x $#d;
        my $dist  = 0;

        while (keys %targets) {
        	my (@fore, @aft);
        	for (0 .. $#d) {
        		next unless $targets{$_};
        		push @fore, [$_, $d[$route[-1]]->[$_]] unless $_ == $route[-1];
        		push @aft,  [$_, $d[$_]->[$route[0]]]  unless $_ == $route[0];
        	}
        	if ($#fore < 1) {
        		if ($fore[0][0] < $aft[0][0]) {
        			$dist += $fore[0][1];
        			push @route, $fore[0][0]
        		} else {
        			$dist += $aft[0][1];
        			unshift @route, $aft[0][0]
        		}
        		last;
        	}
        	# Sort them by ascending distance
        	@fore = sort { $a->[1] <=> $b->[1] } @fore;
        	@aft  = sort { $a->[1] <=> $b->[1] } @aft;
        	my $fgo = my $ago = 0;
        	# If both nearest are the same, look at the next
        	if ($fore[0][0] == $aft[0][0]) {
        		if ($fore[1][1] - $fore[0][0] < $aft[1][1] - $aft[0][0]) {
        			$fgo = 1;
        		} else {
        			$ago = 1;
        		}
        	}

        	push @route, $fore[$fgo][0];
        	unshift @route, $aft[$ago][0];
        	$dist += $fore[$fgo][1] + $aft[$ago][1];
        	delete @targets{$fore[$fgo][0], $aft[$ago][0]};
        }

        # Complete the circuit
        if ($route[0] != $route [-1]) {
        	$dist += $d[$route[-1]][$route[0]];
        	push @route, $route[0];
        }

        return ($dist, join (', ', @route), tv_interval ($starttime));
    }
```


### INSERTION
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/colin-crain/perl/ch-2.pl)

In the insertion strategy, not just the live end, or beginning and end, of the path being forged is considered for addition, but rather at each iteration each edge to the growing path is considered against each remaining city. A variant path is explored with the new city  being inserted, replacing the existing arc, with a the difference in costs to travel to the third city from the start and returning to the destination, versus the original cost to travel direct, minimized across all possibilities. The shortest total length selected is chosen to insert the next city. The insertion process starts with many new cities to consider but only a few paths to insert into, and ends with many edges but few remaining cities. There are many variations on the process,  such as chosing to start with a minimal straight connection or with a triangle tour to assure a closed loop.

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/colin-crain/perl/ch-2.pl)

I was the only one to implement this technique, and offer my results here for your perusal. Although the idea of continuously refining the selection of edges to produce an improved path, always choosing the best next expansion over the whole tour, sounds like a fine scheme, implementing it in an ideal manner proved tricky, specifically is regards to the ideal starting configuration. I chose a triangle as a kernal to expand on, ensuring that we would end up with a complete closed circuit. However it occured to me that by starting with the smallest arcs, only to have them all theoretically replaced, effectively expends these valuable connections, making them unavailable later. Experiments with using the longest arcs to build the base triangle did not noticablly improve matters, and actually seemed ultimately counterproductive, as were designs using two longs and one short. I have reason to believe  the ideal shape may well be composed of three arcs closest to the mean length, but eventually I gave up and returned to the original configuration as statistically it appeared to be slightly superior. I also think the completely random nature of the asymmetrical input data may work against this strategy, and that real-world, more meaningfully interconnected costs depicting real relationships might respond better.

In the end this was the least effective of the heuristic methods I explored, but still substantally better than a random walk.

```perl
    sub insert_ts ($mat) {
    ## an insertion heuristic
    ## an original amalgamation of several insertion algorithms

        ## some generic containers we'll be reusing
        my ($city, $dist);

        ## create a list of indexes of unvisited cities
        my %cities = map { $_ => 1 } keys $mat->@*;

        ## starting city holds shortest arc
        my ($start, $end);
        $dist = "Inf";
        my @mins = map { my $idx = $_; min grep { $_ > 0 } ( $idx->@* ) }
                       $mat->@*;
        while ( my ($k, $v) = each @mins ) {
            ($start, $dist) = ($k, $v) if $v < $dist;
        }
        $end = first { $mat->[$start][$_] == $dist }
                     (0..$mat->[$start]->@* - 1);
        delete @cities{ $start, $end };

        ## find the city that minimizes the distance from the tour end
        ## to the new city and back to the start, to form a triangle
        ## tried min and max, this seems slightly better. Should, in an
        ## asymmetric matrix, perhaps be closest to the mean.
        $dist = "Inf";
        for (sort keys %cities) {

            my $d = $mat->[$end][$_] + $mat->[$_][$start];

            ($city, $dist) = ($_, $d) if $d < $dist;
        }
        delete $cities{ $city };

        ## establish the working subtour
        my @tour = ( $start, $end, $city, $start );

        my $pick;
        while ( keys %cities ) {
            ## find the city with the shortest insertion
            for $city ( sort keys %cities ) {
                for my $start_index (0..@tour-2) {
                    my $d = min ( $mat->[$start_index][$city], $mat->[$city][$start_index+1] );
                    if ($d < $min) {
                        $pick = $city;
                    }
                }
            }

            ## find the best insert point
            my @best = (undef, undef, "Inf");  #( city, $insert position, distance );
            for my $start_index (0..@tour-2) {
                my $cost = $mat->[$start_index][$pick]
                            + $mat->[$pick][$start_index+1]
                            - $mat->[ $tour[$start_index] ][ $tour[$start_index+1] ];
                if ($cost < $best[2]) {
                    @best = ( $pick, $start_index, $cost );
                }
            }

            ## and insert it into the tour after the start index
            splice @tour, $best[1]+1, 0, $best[0];
            delete $cities{ $best[0] };
        }

        pop @tour;
        while ( $tour[0] ) { push @tour, shift @tour };
        push @tour, 0;

        $dist = 0;
        for my $i ( 0..@tour-2 ) {
            $dist += $mat->[ $tour[$i] ][ $tour[$i+1] ]
        }

        return ($dist, \@tour);
    }
```


### simulated ANNEALING
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/wlmb/perl/ch-2a.pl)

In metalworking, annealing is reheating the work and letting it to cool again in a controlled fashion, allowing internal stresses, local maxima, to smooth themselves out throughout the structure. The analogy is apt, if we consider a working but non-optimal solution as our initial state and add energy to increase the temperature, which allows the system to visit a variety of more and less energetic states, and then allow it to "cool" in a controlled manner. In the TSP, a sub-optimal route is the base state, and small variations of that state are considered neighbors that may be moved to. When there is more energy in the system, that is when the temperature is hot, there is increased allowance that a barrier presented by a local minimum will be jumped.

The method employs an oscillation between phases of first setting a new lower temperature and then reestablishing "thermal equilibrium" — allowing the system to settle into the new parameters. Once this is done the temperature is lowered again and the process repeated. A high initial temperature allows the system to jump to less-optimal states at the beginning, exploring the phase space at a higher granularity, which subsequent lowering of the temperature gradually refines.

Simulated annealing as a system optimization model has a lot of configurable parameters:

* the initial temperature, where higher values increase the possibility of jumping to a less optimal state
* the temperature reduction gradient and number of reductive steps
* the time spent regaining equilibrium between reductions
* as well as design considerations such as the definition and selection of neighboring states in the model

In the TSP neighboring states are generally created by randomly switching two cities in a tour, and their energy defined as the tour cost. However there exist other strategies that may improve outcomes more quickly, such as seleting two pairs of cities and swapping their destinations, or extending this to *n* pairs.

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/wlmb/perl/ch-2a.pl)

Although he also provides us with an [exact algorithm based on permutations](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/wlmb/perl/ch-2.pl), Luis' simulated annealing heuristic is what we want to focus on here. He brings in the [PDL](http://pdl.perl.org), always welcome, to assist with his matrix implementation in the model, as well as the construction of tours and the neighboring configurations. This implementation allows the number of steps to be specified, as well as the starting temperature and the temperature at the finish. Needless to say some tinkering may be required to find optimal values for these parameters, necessitating some trail-and-error. However the system is easily configurable to specific datasets.
```perl
    use PDL;

    die "Usage: ./ch - 2a.pl cities steps high low output" unless @ARGV == 5;
    my ( $cities, $steps, $high, $low, $output )=@ARGV;
    open( my $fh, '>', $output ) or die "Couldn't open $output: $!";
    srand( 0 ); #seed, for tests
    my $M = random( $cities, $cities ); # generate distances matrix
    $M->diagonal( 0, 1 ) .= 0; # zero the diagonal
    $M= ( $M + $M->transpose )/2; #symmetrize ( ? )
    my $L0 = $high; # starting 'temperature'
    my $L_stop = $low;
    my $factor = ( $low / $high )**( 1 / $steps );
    my $route = pdl( 0..$cities - 1 ); #initial route
    my $L = distance( $route );
    while( $L0 > $L_stop ){
            my $new_route = step( $route );
            my $new_L = distance( $new_route );
            my $dL = $new_L - $L;
            if( $dL <= 0 || random( 1 )<exp( -$dL / $L0 ) ){
        $route = $new_route; # accept
        $L = $new_L;
            }
            say $fh $L; # for plotting later
            $L0 *= $factor;
    }
    my $best_route = append( $route, 0 );
    say "Distance table: $M\nSteps: $steps\nCities: $cities\nRoute: $best_route\nLength: $L";

    sub step {
            my $i = random( 2 )*( $cities - 1 )+1;
            my $new_route = $route->copy;
            $new_route->index( $i ).=$new_route->index( $i->rotate( 1 ) );
            return $new_route;
    }

    sub distance {
            my $r = shift;
            my $indices = pdl( $r->rotate( -1 ), $r )->transpose;
            return $M->indexND( $indices )->sumover;
    }
```


### a GENETIC algorithm

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/adam-russell/perl/ch-2.pl)

Adam returns once again with `AI::Genetic` to produce a genetic learning algorithm that starts with a set of connections from the base to each city, then tries to grow these connective genes to other cities, keeping only a subset of the most fit candidates at each iteration. In a sense this works out to be sort of like the "nearest neighbor" algorithm with a backup plan, should another nearly best solution ultimately pull ahead.

In the end though it remains a statistical approach, steadily homing in on an improved solution without a firm guarantee of ever finding it. The `fitness` algorithm, used to judge the quality of a given mutation, seems quite reminiscent of the least-cost analysis we see in other heuristic approaches.

On the whole, though, having an example of this sort of approach is fascinating, albeit in performance the AI core seems in desparate need of some GPU acceleration.


```perl
    sub fitness{
        my($genes) = @_;
        my $cost = 0;
        return -1 if $genes->[0] != $genes->[@{$genes} - 1];
        my @path = sort {$a <=> $b} @{$genes}[0 .. @{$genes} - 2];
        for my $i (0 .. (@path - 2)){
            return -1 if $path[$i] == $path[$i + 1];
        }
        for my $i (0 .. @{$genes} - 2){
            $cost += $matrix[$genes->[$i]][$genes->[$i + 1]];
        }
        return 1/$cost;
    }

    sub terminate{
        return true;
    }
```



## Additional Submissions in Guest Languages

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/abigail/perl/ch-2.pl)

**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/abigail/awk/ch-2.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/abigail/bash/ch-2.sh), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/abigail/c/ch-2.c), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/abigail/lua/ch-2.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/abigail/node/ch-2.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/abigail/python/ch-2.py), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/abigail/ruby/ch-2.rb)

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/polettix/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/polettix/raku/ch-2.raku)


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/roger-bell-west/perl/ch-2.pl)

**additional languages:**
[Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/roger-bell-west/rust/ch-2.rs)


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/ulrich-rieke/perl/ch-2.pl)

**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-121/ulrich-rieke/cpp/ch-2.cpp)





---

# BLOGS {#PWC121BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, I somehow continue to maintain my bearings. Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC093BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *READ* these *BLOG* *LINKS*:

**( *don't think, trust your training, you're in the zone, just do it ...* )**


**Abigail**

 * [Perl Weekly Challenge 121: Invert Bit](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-121-1.html) ( *Perl* )
 * [Perl Weekly Challenge 121: The Travelling Salesman](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-121-2.html) ( *Perl* )

**Adam Russell**

 * [A Genetic Algorithm solution to the Travelling Salesman Problem - Perl - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2021/07/18) ( *Perl* )
 * [The Weekly Challenge 121 - Prolog - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2021/07/18) ( *Prolog* )


**Arne Sommer**

 * [Inverted Salesman with Raku and Perl](https://raku-musings.com/inverted-salesman.html) ( *Perl & Raku* )

**Colin Crain**

 * [Mr. Brush Man, That One's Upside Down! — Programming Excursions in Perl and Raku](https://colincrain.com/2021/07/18/mr-brush-man-that-ones-upside-down/) ( *Perl & Raku* )

**Dave Jacoby**

 * [Bitty Tours: Perl Weekly Challenge #121 | Committed to Memory](https://jacoby.github.io/2021/07/13/bitty-tours-perl-weekly-challenge-121.html) ( *Perl* )

**Flavio Poletti**

 * [PWC121 - Invert Bit - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/07/14/pwc121-invert-bit/) ( *Perl & Raku* )
 * [PWC121 - The Travelling Salesman - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/07/15/pwc121-the-travelling-salesman/) ( *Perl & Raku* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 121](https://www.braincells.com/perl/2021/07/perl_weekly_challenge_week_121.html) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #121](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-121/james-smith) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 121: Invert Bit | laurent_r](http://blogs.perl.org/users/laurent_r/2021/07/perl-weekly-challenge-121-invert-bit.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 121: bits and salesman – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2021/07/12/PerlWeeklyChallenge121.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 121: bits and salesman – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2021/07/12/PerlWeeklyChallenge121.html#task2) ( *Raku* )

**Roger Bell_West**

 * [RogerBW's Blog: Perl Weekly Challenge 121: Travelling Bit](https://blog.firedrake.org/archive/2021/07/Perl_Weekly_Challenge_121__Travelling_Bit.html) ( *Perl & Raku* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 121 – W. Luis Mochán](https://wlmb.github.io/2021/07/12/PWC121/) ( *Perl* )
