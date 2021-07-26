---
author:       Colin Crain
date:         2021-07-26T00:00:00
description:  "Colin Crain › Perl Weekly Review #120"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #120"
image:        images/blog/p5-review-challenge-120.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-119/).* )

Welcome to the Perl review for **Week 120** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-120/) or the summary [**recap**](/blog/recap-challenge-120/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC120TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC120TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC120BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC120TASK1}

# Swap Odd/Even bits
*Submitted by: Mohammad S Anwar* <br>
You are given a positive integer $N less than or equal to 255.

Write a script to swap the odd positioned bit with even positioned bit and print the decimal equivalent of the new binary representation.

**Example **
```
    Input : $N = 101
    Output: 154

        Binary representation of the given number is 01 10 01 01. The
        new binary representation after the odd/even swap is 10 01 10
        10. The decimal equivalent of 10011010 is 154.

    Input : $N = 18
    Output: 33

        Binary representation of the given number is 00 01 00 10. The
        new binary representation after the odd/even swap is 00 10 00
        01. The decimal equivalent of 100001 is 33.
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/abigail/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/adam-russell/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/athanasius/perl/ch-1.pl),
[**Belmark Caday**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/belmark-caday/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/colin-crain/perl/ch-1.pl),
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/cristian-heredia/perl/ch-1.pl),
[**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/dave-cross/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/james-smith/perl/ch-1.pl),
[**Jared Martin**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/jaredor/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/jo-37/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/lubos-kolouch/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/perlboy1967/perl/ch-1.pl),
[**Paul Fajman**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/paul-fajman/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/paulo-custodio/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/pete-houston/perl/ch-1.pl),
[**Peter Scott**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/peter-scott/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/sgreen/perl/ch-1.pl),
[**Steve Bresson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/steve-bresson/perl/ch-1.pl),
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/steven-wilson/perl/ch-1.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/stuart-little/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/ulrich-rieke/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/wlmb/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/wanderdoc/perl/ch-1.pl)


There were a total of 33 submissions for the first task this past week; quite a few. Good for us. Much like [last week's challenge](https://theweeklychallenge.org/blog/review-challenge-119/), there were two basic ways to go about the problem.

On the one hand, we could treat the problem as one of strings, constructing a binary representation of the number and manually shuffling around the values, swapping individual pairs. Alternately we could manipulate the underlying bits directly using bitwise operations, without doing any numeric conversions. There was also third sort of subcategory that we saw as well, where the binary representation string was broken up into an array of digits to facilitate access, but otherwise treating them as characters only signifying set or unset bits. I referred to this as the listwise variant.

## STRINGWISE
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/athanasius/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/colin-crain/perl/ch-1.pl),
[**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/dave-cross/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/dave-jacoby/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/e-choroba/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/jaldhar-h-vyas/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/lubos-kolouch/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/perlboy1967/perl/ch-1.pl),
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/steven-wilson/perl/ch-1.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/stuart-little/perl/ch-1.pl), and
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/ulrich-rieke/perl/ch-1.pl)


After converting the input into its binary representation, in the stringwise methods the most common approach was to use a regular expresion to select out adjacent pairs of digits. After reversing the string comprising each selected pair, a new number was assembled, which was then parsed and returned in decimal notation.

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/athanasius/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/athanasius/raku/ch-1.raku)

As they have so helpfully provided a legend to their method, we'll start with the monk Athanasius. From the included notes:

>**Algorithm:**

>1. Convert decimal $N to its 8-bit binary representation using sprintf '%08b'
>2. Extract the odd/even binary pairs with a regular expression
>3. Form $S_bin, the binary representation of the solution, by concatenating the
   nibbles in reverse order
>4. Find the decimal equivalent of $S_bin by using oct with an argument formed
   by prefixing '0b' to $S_bin (this indicates to the built-in oct function
   that its argument is a binary number)
>5. Output the solution (with suitable vertical alignment for ease of viewing)

Fair enough. The implementation is a very linear, stepwise progression of the outlined procedures, in ten single-action lines:

```perl
    my $N_dec = parse_command_line();                        # Decimal
    my $N_bin = sprintf '%08b', $N_dec;                      # Binary
    my @pairs = $N_bin =~ / ( \d{2} ) /gx;                   # Odd/even pairs
    my @swaps = map { scalar reverse } @pairs;
    my $S_bin = join '', @swaps;                             # ("S" for "swap")
    my $S_dec = oct "0b$S_bin";                              # Decimal
    my $len_N = length $N_dec;
    my $len_S = length $S_dec;
    my $width = $len_N >= $len_S ? $len_N : $len_S;

    printf "Input: \$N = %*d%s\nOutput:     %*d%s\n",
            $width, $N_dec, $SHOW_BITS ? ' (' . join(' ', @pairs) . ')' : '',
            $width, $S_dec, $SHOW_BITS ? ' (' . join(' ', @swaps) . ')' : '';
```

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/jaldhar-h-vyas/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/jaldhar-h-vyas/raku/ch-1.raku)

In contrast to the monk's methodical verbosity, we have Jaldhar, with a more compact version of what boils down to the same process. First, after converting his number to a binary representation a step is then taken to ensure that the result has 8 digits, left-padded with zeros as required.

From there the rest of the process is condensed to a single line. Of note is the `unpack` function, which using the `(A2)*` template reads the string as a serialized array, dividing it into 2-character elements. This is much like the Raku operator `.comb(2)` for those that know about that sort of thing, or `split /(\d\d)/` which, because of the capture groups returns the captures interspersed with the split strings, producing the same result. That `split` trick is handy, by the way.

I got curious and ran a benchmark, and discovered `unpack` will run over twice as fast as its competition. So there's that to consider. All these `pack` and `unpack` functions that have been popping up lately has given me new thought to these tools, which is always a good thing. They're a bit esoteric, but very powerful.

```perl
    my $n = sprintf "%b", $N;
    if ((length $n) % 8 != 0) {
        $n = 0 x (8 - (length $n) % 8) . $n;
    }

    say oct '0b' . join q{}, map {  $_ = reverse; } (unpack '(A2)*', $n);
```

[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/lubos-kolouch/perl/ch-1.pl)

**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/lubos-kolouch/python/ch-1.py)

A very similar solution comes from Lubos, who inquires on why he needed to write `$_ = reverse $_` in the map to get the job done. A quick look upward to the preceeding review observes that Jaldhar came to the same conclusion.

Well, Lubos, since you asked: it's because `reverse` can work in either a scalar or listwise context, and Perl can get confused about what exactly you want done if there's any ambiguity. In the expression `map { reverse $_ }` the reverse is actually working just fine, doing what it thinks you want, which is to reverse the elements of an list that happens here to be composed of only one element. It's operating in listwise context, at the *element* level, so the individual elements aren't changed, only the order. When you then went on to specify `{ $_ = reverse $_ }`, the assignment made it clear you wanted a scalar context, so the *string* was reversed, which was the original plan. Another common way to make this super clear is with the `scalar` keyword: `map { scalar reverse $_ }`.

This behavior from `reverse` is not always obvious, so it's a good idea to make context absolutely clear to Perl if there's any ambiguity. For instance, it's not clear to me why Perl thinks the inside of a `map` block should assume list context on the topic, but there you go. Perhaps as `map` works in list context the insides of its block should to? That doesn't exactly follow to me, as we're known to be working with scalars as the topic. But maybe I'm way off; the point is I don't know why, I just know what. With `reverse` its best to make sure if there's any doubt.

```perl
    my $binary_what = sprintf ("%b",$what);
    $binary_what = "0".$binary_what if length($binary_what) % 2 == 1;
    my @array = ( $binary_what =~ m/../g );

    # I'm puzzled why the simple map { reverse $_ } @array did not work,
    # but it gave me back the original strings...
    my @rev_array = map { $_ = reverse $_ } @array;

    return bin2dec(join "", @rev_array);
```

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/colin-crain/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/colin-crain/raku/ch-1.raku)

For my own solution I got the logic down to a few short lines. Specifying the `sprintf` format with `"%08b"` instructs the conversion to zero-pad the left side of the result to produce a minimum of 8 binary characters. For those that haven't read up on the `sprintf` format docs lately I recommend them; it's pretty racy stuff.

```perl
    my $bin = sprintf "%08b", $num;
    my $res = oct(join '', '0b', map { scalar reverse "$_" } $bin =~ /([01]{2})/g );
```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/laurent-rosenfeld/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/laurent-rosenfeld/raku/ch-1.raku)

An excellent extension of the regular expression digit selection is to use a substitution and simply alter the original string in-place, exchanging pairs of digits in a global search and replace. The capture groups need only to be swapped to do the work.

```perl
    for my $test (101, 154, 33, 18) {
        my $b2 = sprintf "%08b", $test;
        $b2 =~ s/(\d)(\d)/$2$1/g;
        say "$test: ", bin2dec $b2;;
    }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/e-choroba/perl/ch-1.pl)

Another example of using a substitution to do the swap, this time using `reverse` on a single capture. Note that here Perl has no trouble inferring the scalar context for `reverse`.

Here he has decided to go big, accepting any value below 2<sup>64</sup>, prompting Perl to warn that not every machine might be up to the task. YMMV.

```perl
    sub swap_odd_even_bits {
        my ($n) = @_;
        no warnings 'portable';
        oct '0b' . sprintf('%064b', $n) =~ s/(..)/reverse $1/ger
    }
```



[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/mohammad-anwar/perl/ch-1.pl)

Presenting a very different approach to selecting out the digit pairs to reverse, Mohammad uses `substr` in a loop to grab two digits, swap them and append them to a growing binary output string.

```perl
    my $b = '0b';
    $b .= reverse(substr(sprintf("%08d", sprintf("%b", $N)), $_, 2)) for (0,2,4,6);
    print oct($b);
```

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/arne-sommer/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/arne-sommer/raku/ch-1.raku)

Taking the constraint of an 8-bit value to heart, Arne unrolls the swapping process into eight individual `substr` operations, carefully selecting and placing each bit where it belongs.

```perl
    my $binary  = sprintf('%08b', $N);
    my $swapped = substr($binary, 1, 1) .
                  substr($binary, 0, 1) .
                  substr($binary, 3, 1) .
                  substr($binary, 2, 1) .
                  substr($binary, 5, 1) .
                  substr($binary, 4, 1) .
                  substr($binary, 7, 1) .
                  substr($binary, 6, 1);

    say oct("0b" . $swapped);
```

[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/stuart-little/perl/ch-1.pl)

**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/stuart-little/haskell/ch-1.hs), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/stuart-little/lua/ch-1.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/stuart-little/node/ch-1.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/stuart-little/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/stuart-little/raku/ch-1.raku)

Stuart, on the other hand, has compressed his version of the `substr` process into a single line. There were, all-in-all, a fair number of these `substr` submissions.

```perl
    say oct('0b' . (join '', map {my $rev = reverse substr(sprintf("%08b", $ARGV[0] & 255), 2*$_,2)} (0..3)))
```

## LISTWISE
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/adam-russell/perl/ch-1.pl),
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/cristian-heredia/perl/ch-1.pl),
[**Paul Fajman**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/paul-fajman/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/wanderdoc/perl/ch-1.pl)

In the listwise variant the binary string is broken up into an array of characters, allowing access to the individual digits by index. Clever use of a loop and index math allows the rearrangement required. The string can then be reassembled and converted back to decimal notation.

[**Paul Fajman**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/paul-fajman/perl/ch-1.pl)

Paul doesn't concern himself over whether a binary representation has exactly 8 digits, only that it can be evenly divided into digit pairs. To this end he checks the length modulo 2 and prepends a single extra 0 when necessary.

This accomplished, he then splits the binary into an array of digits and sets up a loop over the indices, skipping 2 at a time. At every iteration he can address each position of a pair of values at `[$i]` and `[$i+1]`, copying them out and appending them to a new string in reversed order.

To convert back to decimal he uses `eval` on the binary with an `0b` signifier prefix, the same way we've seen `oct` used earlier.

```perl
    # Determine if we have odd or even amount of binary digits
    if (length($binary) % 2) {
      $binary = "0".$binary # Odd so add leading 0.
    }

    my @binary = split(//,$binary);
    my $i;
    my $new;

    # Loop over the binary number to perform swap
    for ($i=0; $i<$#binary+1; $i+=2) {
      $out1.= $binary[$i].$binary[$i+1]." ";
      $out2.= $binary[$i+1].$binary[$i]." ";
      $new.="$binary[$i+1]"."$binary[$i]";
    }

    $final = eval("0b".$new); # Convert back to decimal number
```

[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/cristian-heredia/perl/ch-1.pl)

Christina combines the three binary conversion, splitting and even-ing of the digit count steps into a single process, but otherwise closely parallels Paul's method.

```perl
    sub splitBinary {
        @bits = split(//, sprintf ("%b", $N));
        if (@bits % 2 != 0){
            unshift @bits, '0';
        }
        swapNumbers();
    }

    sub swapNumbers {
        foreach(my $i=0;$i<@bits;$i+=2){
            $newNumber = $newNumber.$bits[$i+1].$bits[$i];
        }
        convertDecimal();
    }

    sub convertDecimal {
        my $result = eval("0b$newNumber");
        print("Output: $result");
    }
```

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/adam-russell/perl/ch-1.pl)

**additional languages:**
[Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/adam-russell/prolog/ch-1.p)

Adam gives us a couple of new things to look at. First, he uses `pack` and `unpack` to do his binary conversions. Now, looking through the many submissions using these functions, I have a few observations. Notably, that when unpacking a data stream one necessarily knows something about the data that's packed away. An obvious tautology, yes, but important. The example from the *Perl Cookbook* works by taking a number and packing it into an unsigned long in network, big-endian, order. This long is then looked at as 32 binary bits and unpacked that way, converting the representation in the process. Of note is that in this case we know ahead of time that we need an 8-bit number to mess around with, and are constrained by that in the input. So alternately, here we can convert our number into an unsigned 8-bit octet instead, and convert it using `unpack("B8", pack("C", $num))`, where the `C` template signifies that aforementioned octet (an unsigned Character, that is). Just something to think about.

The other, brillant, thing is Adam's use of slices to rearrange his array components in the loop: `@bits[$i, $i + 1] = @bits[$i + 1, $i];`. I love array slices and self-assignment in Perl. Combining the two makes me giddy.

```perl
    my $bits = substr(unpack("B32", pack("N", shift)), 24, 8);
    my @bits = split(//, $bits);
    for(my $i = 0; $i < @bits; $i += 2){
        @bits[$i, $i + 1] = @bits[$i + 1, $i];
    }
    my $swapped_decimal = unpack("N", pack("B32", substr("0" x 32 . join("", @bits), -32)));
```

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/wanderdoc/perl/ch-1.pl)

Finally the doctor takes this progression to its logical conclusion and fabricates an elaborate array slice assignment that does the entire multi-swap in one grand sweeping gesture.

The slice assigned to uses a list of all the even indices, followed by a list of all the odds. The slice assigned from uses the same lists, but in reverse order. Thus every position is reassigned the value of either the odd index next in line, or the even index preceding it. Nice.

```perl
    my $binary = dec_to_bin($num);
    $binary = length($binary) % 2 ? 0 . $binary : $binary;
    my @bits = split(//, $binary);
    @bits[((grep {$_ % 2 == 0} 0 .. $#bits), (grep {$_ % 2 == 1} 0 .. $#bits))] =
    @bits[((grep {$_ % 2 == 1} 0 .. $#bits), (grep {$_ % 2 == 0} 0 .. $#bits))];
    $binary = join('', @bits);
    $num = bin_to_dec($binary);

    sub dec_to_bin { return sprintf("%b",$_[0]); }
    sub bin_to_dec { return oct("0b" . $_[0]); }
```


## BITWISE
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/abigail/perl/ch-1.pl),
[**Belmark Caday**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/belmark-caday/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/cheok-yin-fung/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/duncan-c-white/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/polettix/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/james-smith/perl/ch-1.pl),
[**Jared Martin**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/jaredor/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/jo-37/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/paulo-custodio/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/pete-houston/perl/ch-1.pl),
[**Peter Scott**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/peter-scott/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/sgreen/perl/ch-1.pl),
[**Steve Bresson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/steve-bresson/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/wlmb/perl/ch-1.pl)



In the bitwise world, masks can be carefully created to act only on specific characters, in this case every other. By selecting out one half the digits and shifting them right, and the other half and shifting them left, the recombined halves will form the solution immediately without further processing, and no numeric conversion is required.

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/pete-houston/perl/ch-1.pl)

Pete provides us with really nice example of this bitmask technique, with the mask composition clearly shown. In each side of the swapped equation one half the bits are selected, in the positions holding a 1 in the assigned mask, and in a logical AND operation the unselected bits are set to 0. On the left side the result is divided by 2, shifting the bits one position to the right. In the right side, multiplying by 2 shifts the bits to the left. As the positions of the bits in each number are carefully selected we know that no set bit will ever overlap with another, so we can use an arithmetic addition to add the two numbers, knowing that no bit will ever carry. The result of this addition is our solution, ready to go.

```perl
    my $n        = shift;
    my %masks    = ( even => 0b10101010, odd => 0b01010101 );
    my $swapped  = ($n & $masks{even}) / 2 + ($n & $masks{odd}) * 2;
```

[**Belmark Caday**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/belmark-caday/perl/ch-1.pl)

Belmark abstracts the same reasoning out into 32 bits, using 8 hexadecimal characters to build the masks. The shifting of the numbers left and right is done with bit shift operators, and the merging of the two numbers is done with a logical OR instead of addition. In this specific circumstance the two operators ` | ` and ` + ` are equivalent, although this is not generally the case.

We know that each number has nothing but 0s in the other's set bit positions, so no arithmetic carry operations will occur. The final combined number will have a set bit if either one or the other inputs do, the operation we have chosen here, which only in this special case is the same as if we had added the numbers mathematically.

```perl
    sub swapOddEvenInt {
        my $num = shift;

        my $even = $num & 0xAAAAAAAA;
        my $odd  = $num & 0x55555555;

        $even >>= 1;
        $odd  <<= 1;

        return $even | $odd;
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/polettix/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/polettix/raku/ch-1.raku)

The 8-bit numbers comprising the masks we first saw in Pete's solution have a decimal numeric representation, and those numbers are 170 and 85. The bitwise operators don't care how the numbers are represented, as they are working beneath the surface anyway.

By inlining the bit-shift operations the expression moves to a single line.

```perl
    sub soeb { ($_[0] & 170) >> 1 | ($_[0] & 85) << 1 }
    say soeb($_) for @ARGV ? @ARGV : qw< 101 18 >;
```

[**Steve Bresson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/steve-bresson/perl/ch-1.pl)

Here's another example of the compact form from Steve Bresson, with some colorful I/O included:

```perl
    print "Task 1: Swap Odd/Even bits on an 8 bit value\n";

    my $in = (shift || 101) + 0;
    printf "IN:  %3d = 0x%02x\n", $in, $in;

    my $out = (($in & 0x55)<<1) | (($in & 0xaa)>>1);
    printf "OUT: %3d = 0x%02x\n", $out, $out;

    print "Finito!\n";
```

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/abigail/perl/ch-1.pl)

**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/abigail/awk/ch-1.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/abigail/bash/ch-1.sh), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/abigail/bc/ch-1.bc), [Befunge-93](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/abigail/befunge-93/ch-1.bf93), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/abigail/c/ch-1.c), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/abigail/go/ch-1.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/abigail/java/ch-1.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/abigail/lua/ch-1.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/abigail/node/ch-1.js), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/abigail/pascal/ch-1.p), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/abigail/python/ch-1.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/abigail/r/ch-1.r), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/abigail/ruby/ch-1.rb), [Scheme](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/abigail/scheme/ch-1.scm), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/abigail/tcl/ch-1.tcl)


```perl
    say + ($_ & 0x55) << 1  # Odd  bits shifted one the right
        | ($_ & 0xAA) >> 1  # Even bits shifted one to the left
```

Abigail, sticking to the 8-bit limit, offers a similarly terse solution.

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/jo-37/perl/ch-1.pl)

Jorg, alternately, wants to run free in the wind, unfettered, as far as an internal Perl unsigned integer will take him.

```perl
    sub swap_bits ($n) {
        no warnings 'portable';
        # Set $odd to a mask with all odd bits set in the maximum internal
        # representation.
        # Oops! There was a restriction to N < 256 again.  Realized it only
        # after the full-size solution had been finished.
        state $odd = hex 5 x ((unpack '%b*', pack 'j', -1) / 4);

        # Right-shift even bits and left-shift odd bits.
        ($n & ($odd << 1)) >> 1 | ($n & $odd) << 1;
    }
```

[**Peter Scott**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/peter-scott/perl/ch-1.pl)

Peter gives us his own take on the steps, creating what amounts to a traveling bitmask of `11`, selecting out pairs of bits, moving sequentially across the input two positions at a time. At each iteration the selected bits are swapped using bit-shifts and a bitwise OR, and another OR merges the result into a growing new output under construction.

We saw an analogous process, of a moving window of a bit mask, in several other solutions.

```perl
    my $x = shift;
    my $y = 0;
    for ( 0 .. 3 )
    {
      my $m = 3 << (2*$_);
      my $t = $x & $m;
      my $s = $t << 1 | $t >> 1;
      $y |= $s & $m;
    }
    say $y;
```

[**Jared Martin**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/jaredor/perl/ch-1.pl)

Jared decided to go biggest of all, pulling in the `bigint` pragma to handle arbitrarily large values. This requires its own versions of the various operations, resulting in a very different looking solution. To add color to the story he includes an anecdote about having to convert `2` into a `bigint` object to get things to work right. The `bigint` pragma is cool, and powerful, and I wouldn't want to say anything bad about it, but in its way it's also kind of annoying and non-obvious at times. I dare say `>>` is a lot easier to understand immediately than `$num_e->brsft(1)`, for "bigint right shift 1 place".

You can read more details at his [writeup on the challenge](http://blogs.perl.org/users/jared_martin/2021/07/twc-120-task-1-swap-oddeven-bits-task-2-clock-angle.html).

```perl
    sub bit_swap {

        use bigint;

        # It came out in testing that the Number '2' had to be copied
        # as a bigint object when creating $bmask. It would work the
        # first time, but then fail the second, otherwise.

        my $num = $_[0] + 0;
        my ( $num_e, $num_o, $bmask, ) = ( $num->copy(), $num->copy(), 2->copy() );
        $bmask->blsft(2)->bior(2) until $bmask->bge($num);
        $num_e->band($bmask);
        $bmask->brsft(1);
        $num_o->band($bmask);
        $num_e->brsft(1);
        $num_o->blsft(1);
        return $num_o->bior($num_e);
    }
```


## Additional Submissions in Guest Languages

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/cheok-yin-fung/perl/ch-1.pl)

**additional languages:**
[Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/cheok-yin-fung/bash/ch-1.sh)

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/james-smith/perl/ch-1.pl)

**additional languages:**
[Cesil](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/james-smith/cesil/ch-1.ces)


[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/paulo-custodio/perl/ch-1.pl)

**additional languages:**
[Ada](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/paulo-custodio/ada/ch_1.adb), [Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/paulo-custodio/awk/ch-1.awk), [Basic](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/paulo-custodio/basic/ch-1.bas), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/paulo-custodio/bc/ch-1.bc), [Brainfuck](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/paulo-custodio/brainfuck/ch-1.bf), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/paulo-custodio/c/ch-1.c), [C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/paulo-custodio/cpp/ch-1.cpp), [D](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/paulo-custodio/d/ch_1.d), [Forth](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/paulo-custodio/forth/ch-1.fs), [Fortran](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/paulo-custodio/fortran/ch-1.f90), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/paulo-custodio/lua/ch-1.lua), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/paulo-custodio/pascal/ch-1.pas), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/paulo-custodio/python/ch-1.py)


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/roger-bell-west/perl/ch-1.pl)

**additional languages:**
[Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/roger-bell-west/rust/ch-1.rs)



[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/ulrich-rieke/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/ulrich-rieke/raku/ch-1.raku)


------------------------------------------


---

# TASK 2 {#PWC120TASK2}

# Clock Angle
*Submitted by: Mohammad S Anwar*
You are given time $T in the format hh:mm.

Write a script to find the smaller angle formed by the hands of an analog clock at a given time.

**HINT:** A analog clock is divided up into 12 sectors. One sector represents 30 degree (360/12 = 30).

**Example**

```

    Input: $T = '03:10'
    Output: 35 degree

    The distance between the 2 and the 3 on the clock is 30 degree.
    For the 10 minutes i.e. 1/6 of an hour that have passed.
    The hour hand has also moved 1/6 of the distance between the 3 and the
    4, which adds 5 degree (1/6 of 30).
    The total measure of the angle is 35 degree.

    Input: $T = '04:00'
    Output: 120 degree

```


## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/abigail/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/adam-russell/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/athanasius/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/colin-crain/perl/ch-2.pl),
[**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/dave-cross/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/james-smith/perl/ch-2.pl),
[**Jared Martin**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/jaredor/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/jo-37/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/lubos-kolouch/perl/ch-2.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/mohammad-anwar/perl/ch-2.pl),
[**Paul Fajman**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/paul-fajman/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/paulo-custodio/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/sgreen/perl/ch-2.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/stuart-little/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/wanderdoc/perl/ch-2.pl)


There were only 19 working submissions for the second task this past week.

The problem presented the appearance of a simple math problem, nominally calculating two angles and finding the minimum absolute difference between them. Note the qualifiers, though. The way I see it this problem is about the details, and not getting snagged up. And there were, apparently, multiple ways to subtly mischaracterize the math. I mean, clock math is confusing. It just is, which I suppose is the point. If everything was nice and linear we wouldn't have much of a problem left.

As the example illustrates, the minute hand moves in an easily defined manner. The hour hand starts with the base angle to the hour and adds the movement taken in the minutes to the next hour as the hand moves between numbers. The underlying math can be condensed to a single short formula.

There was a second set of mathematical solutions that we saw as well, based on the constant divergence between the minute and hours hands every minute, reinterpreting the circular angle math. This proved to be largely a mathematical reconfiguration of the same equation, looked at in a sufficiently different manner to warrant its own category.  We could even extend this to say everyone solved the problem by applying the same computations, with small variations. Unfortunately this left me little choice but to focus on the errors.

It was, unfortunately, a bit of a bloodbath. I have to say it's hot, wet work and I don't enjoy it.

So what happened? I'm going to stick to my policy of not calling out individuals and speak in generalities.

1. The modulo operator — the modulo operator only works on integers — if incorrectly used in the middle of a calculation this would erroneously produce a result of 6° for 12:01, rather than 5.5°.

2. The smallest angle — missing this memo was more common than one might think. Considering the smaller of the angle calculated and its complement sometimes required an additional step of subtracting the angle from 360°.

3. The absolute value and circular timekeeping — this is a generalization of the previous point; some schemes produced unusual errors such that 9:00 would be correctly calculated to 90°, but 9:01 was calculated to -264.5°. Circular math can be deceptively hard. Which, as I said earlier, I suppose is the point.

4. Leading zeros - This was not actually a mistake per se and I didn't count it as such, but a really large number of submissions would not accept 9:01 (my preferred shibboleth) but instead demanded 09:01 to run. As the fix is generally trivial, such as adding a single `?` to a parsing regex capture group, it seemed to me unlikely this was not by intent. I understand this style is common in relating  24-hour times, so this must be a carryover from that: a very literal interpretation of "hh:mm", even when the hours don't require a second digit. So I chalked this up to a differing convention.

To expand: I have never seen 12-hour time written this way, although the "AM/PM" qualifier is often omitted, being implicit from context. Any qualifier is also quite irrelevant here, as we are speaking to a 12-hour clock face. So that was a little confusing for me, as an American using our apparently quaint customs<sup>1</sup>. But don't worry, I did eventually come around in the end.

---

<sup>1</sup> Can you even imagine? Walking around so carefree one doesn't even know if it's day or night? The imprecision of it all! To just say, "See you at eight?" and not care if your dinner guests show up the following morning? How can they get anything at all done in NYC, the city that never sleeps?

---

## THE BASIC FORM
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/adam-russell/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/athanasius/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/colin-crain/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/cheok-yin-fung/perl/ch-2.pl),
[**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/dave-cross/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/james-smith/perl/ch-2.pl),
[**Jared Martin**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/jaredor/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/lubos-kolouch/perl/ch-2.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/mohammad-anwar/perl/ch-2.pl),
[**Paul Fajman**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/paul-fajman/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/paulo-custodio/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/pete-houston/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/sgreen/perl/ch-2.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/stuart-little/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/wanderdoc/perl/ch-2.pl)

The basic form computed the two angles from midnight and determined the positive angle between them. Then if the angle is greater than 180°, the angle is subtracted from 360° to produce the complement on the circle.

The minute hand moves 6° every minute, and the hour hand moves 30° every hour, plus a fraction of a 30° arc in proportion to the minutes. The size of the difference is calculated by subtracting the smaller from the larger, and using the absolute value here obviates the need to gauge their relative sizes before the subtraction. These steps lend themselves to a straightforward formula that we see repeated again and again.

[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/lubos-kolouch/perl/ch-2.pl)

**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/lubos-kolouch/python/ch-2.py)

Because he has laid out the steps so clearly, it makes sense to start with Lubos' excellent example. The logic flows linearly, as first the input is parsed, the minute angle is computed, and then the hour. Using the `abs` function it does not matter the order the subtraction occurs, which is practical. Finally if the result is greater than 180°, then we have exceeded a semicircle and the complement arc of the clock face must be used, so we subtract the angle from a full circle, 360°, to obtain the opposite value.

```perl
    my ($hour, $min) = split /:/, $what;

    # each minute is 6 degrees
    my $angle_min = 6 * $min;

    # hour hand has moved 30 * whole hours + 0.5 * mins
    my $angle_hour = 30 * $hour + 0.5 * $min;

    my $result_angle = abs($angle_hour - $angle_min);

    # the challenge is asking for the smaller angle
    return $result_angle > 180 ?  360-$result_angle : $result_angle;
```

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/colin-crain/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/colin-crain/raku/ch-2.raku)

For my own solution I parsed the input string with a regular expression to capture the hours and minutes, and ran the hours modulo 12 to in turn standardize the values between 0 and 11. In other regards you can see the reasoning is quite similar to Lubos.

```perl
    my ($h, $m) = $timestr =~ /(\d?\d):(\d\d)/;
    $h %= 12;
    my $mdeg = $m * 6;
    my $hdeg = $h * 30 + $m * 0.5;
    my $ang  = abs( $hdeg - $mdeg );
    $ang = 360 - $ang if $ang > 180;
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/polettix/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/polettix/raku/ch-2.raku)

Flavio has begun to condense several lines into a single more complex formula, combining the modulo on the hours and performing the minute shift on the hour hand slightly differently. Both regular expressions and, as demonstrated here, `split` were common choices to parse the input.

```perl
    sub clock_angle {
       my ($hrs, $mins) = split m{:}mxs, $_[0];
       my $angle = ($mins * 6) - (($hrs % 12) * 30 + $mins / 2);
       $angle = -$angle if $angle < 0;
       return $angle <= 180 ? $angle : 360 - $angle;
    }
```

[**Paul Fajman**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/paul-fajman/perl/ch-2.pl)

Here is another example from Paul Fajman, who uses again `split` to isolate his hours and minutes.

```perl
    my @time = split(':',$input);

    $hand[0]=30*$time[0]+($time[1]/60*30); # Calculate hour hand position.
    $hand[1]=$time[1]/60*360; # Calculate minute hand move
    $angle = abs($hand[0] - $hand[1]); # Difference between angles

    # We want the smallest of the angles. It must be less than or equal to 180.
    if ($angle <= 180) {
      $output = $angle;
    }
    else {
      $output = abs(360-$angle);
    }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/e-choroba/perl/ch-2.pl)

Choroba, like Flavio, has chosen to employ a simple sign flip on a conditional to produce an absolute value if required. Here he always calculates the angle going forward, sometimes producing values up to 540°. The circle correction step renormalizes this, requiring him to place the absolute value operation after this. By always counting forward we are approaching the alternative form we will explore below.

```perl
    sub clock_angle {
        my ($time) = @_;
        my ($h, $m) = split /:/, $time;

        my $angle = abs(($m / 60 + $h) * 30 - $m * 6);
        $angle = 360 - $angle if $angle > 180;
        $angle *= -1 if $angle < 0;
        return $angle
    }
```

[**Jared Martin**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/jaredor/perl/ch-2.pl)

Before we begin, I would like to take an aside to mention Jared employs extensive input validation, even going as far as provide a `pod2uage` help option. I've been glossing over this sort of stuff lately but feel it's good to point it out once and a while — that some people go to great lengths to make their submissions proper applications, rather than just a subroutine that solves the logic. Although not required, Jared had given us a nice example of this.

The algorithm follows the familiar pattern, well laid-out and commented. The initial parsing is done with a regular expression.

```perl
    sub clock_hands_angle {

        my ( $hours, $minutes ) = ( $_[0] =~ /\A ( 0? \d+ ) : ( 0? \d+ ) \Z/xms );

        # Degrees are measured from 12 o'clock position, clockwise.
        $hours = 0 if $hours == 12;    # Make 12 o'clock now 0 o'clock.
        my $mdeg = 6 * $minutes;       # Each minute is 6 degrees.

        # Each hour is 30 degrees plus ...
        # ... 30 degrees times the ratio of current minutes to an hour of minutes.
        my $hdeg = 30 * ( $hours + $minutes / 60 );

        my $angle = abs( $hdeg - $mdeg );

        return $angle > 180 ? 360 - $angle : $angle;
    }
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/athanasius/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/athanasius/raku/ch-2.raku)

The monk begins with a dissertation on whether to use decimal fractions for the results or the more traditional minutes and seconds notation for partial degrees. I must admit this had never even occurred to me, and that yes, that would be the proper way to do it. The choice of units — to represent fractional degrees as either 0.5° or 30' 0" — is *interesting*, especially in this context.  The idea of using minutes and seconds to describe hours and minutes is certainly correct, but to me, in a metaphysical way, deeply confusing. This is for what I hope are obvious reasons: "These are not the minutes you are looking for."

They also remove all configuration constants from the core logic, which in theory will make the algorithm more readable. In general, of course, this is a good plan.


```perl
    const my $DEGREES_PER_CIRCLE =>  360;
    const my $HOURS_PER_HALF_DAY =>   12;
    const my $MINUTES_PER_HOUR   =>   60;
    const my $DEGREES_PER_HOUR   => $DEGREES_PER_CIRCLE / $HOURS_PER_HALF_DAY;
    const my $DEGREES_PER_MINUTE => $DEGREES_PER_CIRCLE / $MINUTES_PER_HOUR;
    const my $EPSILON            => 1e-12;

    MAIN:
    {
        my ($hour, $mins) = parse_command_line();

        printf "Input:  \$T = %02d:%02d\n", $hour, $mins;

        my $ma_deg = $DEGREES_PER_MINUTE *  $mins;
        my $ha_deg = $DEGREES_PER_HOUR   * ($hour + ($mins / $MINUTES_PER_HOUR));

        my $hm_deg = abs( $ha_deg - $ma_deg );
           $hm_deg = $DEGREES_PER_CIRCLE - $hm_deg
                        if $hm_deg > ($DEGREES_PER_CIRCLE / 2);

        my $diff   = $hm_deg - int $hm_deg;

        if     ($diff        < $EPSILON)      # There is no fractional part
        {
            print  "Output: $hm_deg°\n";
        }
        elsif (($diff - 0.5) < $EPSILON)      # Fractional part is 0.5° (i.e., 30')
        {
            printf qq[Output: %.1f° (= %d° 30' 0")\n], $hm_deg, $hm_deg;
        }
        else
        {
            die "\$diff = $diff, stopped";    # Impossible case
        }
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/james-smith/perl/ch-2.pl)

**additional languages:**
[Cesil](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/james-smith/cesil/ch-2.ces)

James in familiar form gives us three implementations of the same equation, and a benchmark to compare them: removing the `split` and assigned variables helps tremendously. The last, "fast" version removes the first `substr` as well, by reading the delimited input directly as a number. Everything up to the colon will register, delivering the hours, and anything after will be ignored. This does involve disabling warnings, however, as Perl will, on being asked to parse 11:59 and a number, suggest you've gone horribly astray and should question your life choices.

The rest, as they say, is up to you.

```perl
    sub clock_angle {
    ## The difference is: hr*30+min/2 - min*12
    ## Modulo is int based so to avoid issue
    ## when min is even we multiply by 2 take
    ## modulus and then divide by 2.
    ## If value is > 180 then we subtract from
    ## 360....
      my($h,$m) = split /:/,shift;
      my $t = abs($h%12*30-$m*5.5);
      return $t > 180 ? 360-$t : $t;
    }

    sub clock_angle_1_liner {
      180-abs(abs((substr$_[0],0,2)%12*30-5.5*substr$_[0],3)-180);
    }

    sub clock_angle_fast {
      180-abs(abs($_[0]%12*30-5.5*substr$_[0],3)-180);
    }
```

The results:

```
               Rate    std 1-line   fast
    std    283286/s     --   -56%   -61%
    1-line 645161/s   128%     --   -12%
    fast   735294/s   160%    14%     --
```


[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/adam-russell/perl/ch-2.pl)

**additional languages:**
[Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/adam-russell/prolog/ch-2.p)

Adam provides a nice example of a condensed version of the equation, with shades of reworking it into a forward-only direction. Starting from the original we've seen already:

angle = | hours × 30 + (minutes × 30)/60 - minutes × 6 | <br>
→ hours × 30 + minutes × 0.5 - minutes × 6 <br>
→ hours × 30 - minutes × 5.5;  <br>
→ (hours × 60 - minutes × 11) ÷ 2  <br>

Note the 11, we'll be seeing that number, twice 5.5, again. Doing things this way reduces the computation to a single floating-point calculation.


```perl
    sub clock_angle{
        my($h, $m) = split(/:/, $_[0]);
        my $angle = abs(0.5 * (60 * $h - 11 * $m));
        $angle = 360 - $angle if $angle > 180;
        return $angle;
    }
```


## THE ALTERNATIVE FORM
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/abigail/perl/ch-2.pl), and
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/jo-37/perl/ch-2.pl)

In an alternative, several people observed that in any given minute, when viewed in a clockwise fashion, the minute hand and hour hand of a clock will diverge 5.5°. Astute observer will have noticed this value occurring in earlier versions of the equation, and this is not coincidental.

The variation in these methods comes from reinterpreting the implementation of the circular math that resolves angles around a circle.

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/abigail/perl/ch-2.pl)

**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/abigail/awk/ch-2.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/abigail/bash/ch-2.sh), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/abigail/bc/ch-2.bc), [Befunge-93](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/abigail/befunge-93/ch-2.bf93), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/abigail/c/ch-2.c), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/abigail/go/ch-2.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/abigail/java/ch-2.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/abigail/lua/ch-2.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/abigail/node/ch-2.js), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/abigail/pascal/ch-2.p), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/abigail/python/ch-2.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/abigail/r/ch-2.r), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/abigail/ruby/ch-2.rb), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/abigail/tcl/ch-2.tcl)

Abigail observes that by computing the minutes since midnight (or noon, as the case may be), the total divergence is a simple multiplication by that 5.5°, which can then be resolved to the final angle using modulo math.

Abigail carefully lays out the reasoning in the method, with bonus snark. As the calculated angles are generally quite large a modulo operation is required; the integer limitation is worked around by multiplying everything by 2, effectively doing the calculations in whole half-minutes. They then can perform modulo operations by 720, which *does* work correctly, as all the values are always integers.

```perl
    my $MIN_PER_HOUR    =  60;
    my $DIFF_PER_MINUTE =  11;  # Half degrees
    my $FULL_CIRCLE     = 720;  # Half degrees

    while (<>) {
        my ($hours, $minutes) = /[0-9]+/g;
        #
        # Every minute, the angle between the hour and minute hand
        # increases by 5.5 degrees. So, we will calculate how many
        # minutes have passed since 00:00, multiply this by 11, giving
        # us the number of half degrees between two hands.
        # We normalize the angle by modding it by 720. To get the smaller
        # angle, if the angle is more than 360, we subtract the angle
        # from 720 (the full circle).
        #
        # Finally, we divide by 2, to get the answer in degrees.
        #

        #
        # Note that this is going to work regardless whether the
        # time is given in 12 hour format, a 24 hour format, or
        # the silly format Americans use.
        #

        my $angle = ($DIFF_PER_MINUTE * ($hours * $MIN_PER_HOUR + $minutes)) %
                     $FULL_CIRCLE;
           $angle =  $FULL_CIRCLE - $angle if 2 * $angle >= $FULL_CIRCLE;

        say $angle / 2;
    }
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/jo-37/perl/ch-2.pl)

Jorg works with the same material, of course, but makes a different observation about the circular periodicity, coming up with a slightly different take on subtracting from 360°, using not one but now improved with *two* absolute value operations.

```perl
    # To find the smaller angle between the hands we need a "double
    # triangular" function in the range (-2m, 2m) with this shape:
    #
    # m     /\      /\
    #      /  \    /  \
    #     /    \  /    \
    # 0  /      \/      \
    #  -2m  -m  0   m   2m
    #
    # which is provided by: f(x) = m - abs(m - abs(x))
    #
    # The minute and hour hands move 6° and 0.5° per minute respectively,
    # resulting in a difference of 5.5° per minute.

    sub clock_angle ($time) {
        # The accepted time format is [H]H:MM.  Distinguishing between
        # invalid time strings and a zero degree angle.
        $time =~ /^([01]?\d|2[0-3]):([0-5]\d)$/ || undef and
            180 - abs 180 - abs $1 % 12 * 30 - 5.5 * $2;
    }
```





## Additional Submissions in Guest Languages

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/cheok-yin-fung/perl/ch-2.pl)

**additional languages:**
[Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/cheok-yin-fung/bash/ch-2.sh)
ALTERNATIVE

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/jaldhar-h-vyas/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/jaldhar-h-vyas/raku/ch-2.raku)
FORMULA H\*30+M*0.5


[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/paulo-custodio/perl/ch-2.pl)

**additional languages:**
[Ada](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/paulo-custodio/ada/ch_2.adb), [Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/paulo-custodio/awk/ch-2.awk), [Basic](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/paulo-custodio/basic/ch-2.bas), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/paulo-custodio/bc/ch-2.bc), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/paulo-custodio/c/ch-2.c), [C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/paulo-custodio/cpp/ch-2.cpp), [D](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/paulo-custodio/d/ch_2.d), [Forth](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/paulo-custodio/forth/ch-2.fs), [Fortran](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/paulo-custodio/fortran/ch-2.f90), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/paulo-custodio/lua/ch-2.lua), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/paulo-custodio/pascal/ch-2.pas), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/paulo-custodio/python/ch-2.py)

[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/stuart-little/perl/ch-2.pl)

**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/stuart-little/haskell/ch-2.hs), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/stuart-little/lua/ch-2.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/stuart-little/node/ch-2.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/stuart-little/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-120/stuart-little/raku/ch-2.raku)




------------------------------------------

---

# BLOGS {#PWC120BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, I somehow continue to maintain my bearings. Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC093BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *READ* these *BLOG* *LINKS*:

**( *don't think, trust your training, you're in the zone, just do it ...* )**


**Abigail**

 * [Perl Weekly Challenge 120: Swap Odd/Even bits](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-120-1.html) ( *Perl* )
 * [Perl Weekly Challenge 120: Clock Angle](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-120-2.html) ( *Perl* )

**Adam Russell**

 * [Swapping Bits / Time Angle — Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2021/07/11) ( *Perl* )
 * [Swapping Bits / Time Angle — Prolog — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2021/07/11) ( *Prolog* )

**Arne Sommer**

 * [Even Clock with Raku and Perl](https://raku-musings.com/even-clock.html) ( *Perl & Raku* )

**Cheok-Yin Fung**

 * [CY's Take on The Weekly Challenge #120 ‐ Histories, Experiences, Reflections](https://e7-87-83.github.io/coding/challenge_120.html) ( *Perl* )

**Colin Crain**

 * [Getting Oddly Even in a Clean Sweep — Programming Excursions in Perl and Raku](https://colincrain.com/2021/07/11/getting-oddly-even-in-a-clean-sweep/) ( *Perl & Raku* )

**Dave Jacoby**

 * [It’s About Time: Weekly Challenge #120 | Committed to Memory](https://jacoby.github.io/2021/07/05/its-about-time-weekly-challenge-120.html) ( *Perl* )

**Flavio Poletti**

 * [PWC120 - Swap Odd/Even Bits - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/07/07/pwc120-swap-odd-even-bits/) ( *Perl & Raku* )
 * [PWC120 - Clock Angle - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/07/08/pwc120-clock-angle/) ( *Perl & Raku* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 120](https://www.braincells.com/perl/2021/07/perl_weekly_challenge_week_120.html) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #120](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-120/james-smith) ( *Perl* )

**Jared Martin**

 * [TWC 120: Task #1, Swap Odd/Even bits & Task #2, Clock Angle | Jared Martin](http://blogs.perl.org/users/jared_martin/2021/07/twc-120-task-1-swap-oddeven-bits-task-2-clock-angle.html) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 120: Swap Odd/Even Bits and Clock Angle | laurent_r](http://blogs.perl.org/users/laurent_r/2021/07/perl-weekly-challenge-120-swap-oddeven-bits-and-clock-angle.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 120: quick and dirt - Task 1 – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2021/07/05/PerlWeeklyChallenge120.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 120: quick and dirt - Task 2 – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2021/07/05/PerlWeeklyChallenge120.html#task2) ( *Raku* )

**Roger Bell_West**

 * [RogerBW's Blog: Perl Weekly Challenge 120: Swap Clock](https://blog.firedrake.org/archive/2021/07/Perl_Weekly_Challenge_120__Swap_Clock.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 120](https://dev.to/simongreennet/weekly-challenge-120-3o3i) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 120 – W. Luis Mochán](https://wlmb.github.io/2021/07/07/PWC120/) ( *Perl* )
