---
author:       Colin Crain
date:         2022-10-03T00:00:00
description:  "Colin Crain › Perl Weekly Review #178"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #178"
image:        images/blog/p5-review-challenge-178.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-177/).* )

Welcome to the Perl review pages for **Week 178** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

---

### ●︎ Why do we do these challenges?

I suppose any reasonable answer to that question would come from a field as wide ranging and varied as the people who choose to join the team. One thing, though, is clear: it's not a competition, and there are no judges, even if there is a "prize" of sorts. About that -- I think of it more as an honorarium periodically awarded to acknowledge the efforts we make towards this strange goal. So there's no determination to find the *fastest*, or the *shortest*, or even, in some abstract way, the *best* way to go about things, although I'm certain the participants have their own aspirations and personal drives. As Perl is such a wonderfully expressive language, this provides quite a bit of fodder to the core idea of TMTOWTDI, producing a gamut of varied techniques and solutions.

Even the tasks themselves are often open to a certain amount of discretionary interpretation. What we end up with is a situation where each participant is producing something in the manner they personally find the most interesting and satisfying. Some team members will focus on carefully crafted complete applications, thoroughly vetting input data and handling every use case they can think up. Others choose to apply themselves to the logic of the underlying puzzle and making it work in the most elegant way they can. Some eschew modules they would ordinarily reach for, others embrace them, bringing to light wheels perhaps invented years ago that happen to exactly solve the problem in front of them today.

I've been considering this question for some time and have found one binding commonality between all of us out solving these challenges each week, in that however we normally live our lives, the task in front of us more than likely has nothing to do with any of that. And I think this has great value. We all do what we do, in the real world, and hopefully we do it well. The Weekly Challenge provides us with an opportunity to do something germane to that life yet distinctly different; if we only do the things we already know how to do then we will only do the same things over and over. This is where the "challenge" aspect comes into play.

So we can consider The Weekly Challenge as providing a problem space outside of our comfort zone, as far out from that comfort as we wish to take things. From those reaches we can gather and learn things, pick and choose and bring what we want back into our lives. Personally, I think that's what this whole thing is about. YMMV.

---

<strong><emp>Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due.</emp></strong>

And that, my friends, is why I'm here: to try and figure out ways to do just that.

So that's that... I'm ready now — let’s go in and see what we can find.

---

### For Added Context

Before we begin, you may wish to revisit either the pages for the [**original tasks**](/blog/perl-weekly-challenge-178/) or the summary [**recap**](/blog/recap-challenge-178/) of the challenge. But don't worry about it, the challenge text will be repeated and presented as we progress from task to task.

Oh, and one ***more*** thing before we finally get started:

<br>

### Getting in Touch with Us
***

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please feel free to email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

***

<br>

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

<br>

### Enough? Fine. So without even further ado...

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC178TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC178TASK2)   &nbsp;  &nbsp;  &nbsp;       •   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC178BLOGS)    &nbsp;  &nbsp;  &nbsp;       •

---

# TASK 1 {#PWC178TASK1}

# Quater-imaginary Base
*Submitted by: Mohammad S Anwar*

Write a script to convert a given number (base 10) to quater-imaginary base number and vice-versa. For more informations, please checkout wiki page.

**For example:**

```
    $number_base_10 = 4
    $number_quater_imaginary_base = 10300
```

## about the solutions
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/colin-crain/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178//perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/jo-37/perl/ch-1.pl),
[**Kjetil Skotheim**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/kjetillll/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/peter-campbell-smith/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/sgreen/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/ulrich-rieke/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/wlmb/perl/ch-1.pl)

I will begin with what I regard a perfectly reasonable assumption: that the many of our readers looked at this challenge and said: "Huh. Never heard of that one." And then, after scanning the Wiki article, were physically overcome by a deep, shaking, existential dread.

So what are we discussing then? What could be so terrible as to make grown adults pale and children weep?

Quater-imaginary numbers are digital representations of numbers in the base of 2*i*, with *i* denoting the otherwise impossible square root of -1. So, in a positional expansion, the *powers* of imaginary coefficients alternate between imaginary and negative real components, and the powers of negative numbers alternate between positive and negative values. Expanding the representation of a quater-imaginary number will produce a sequence of base multipliers that resolve to cycles of four parts: negative imaginary, negative real, positive imaginary, and positive real.

The first such group covers the span of

(2*i*)<sup>3</sup>, (2*i*)<sup>2</sup>, (2*i*)<sup>1</sup>, (2*i*)<sup>0</sup>

and then in the fifth position, (2*i*)<sup>5</sup>, repeats again. By adding and subtracting values at each digit we can home in on (almost) any complex number. I think of it as somewhat in the manner of a binary search.

Actually working with these numbers, or even understanding the idea of them for that matter, is... daunting, to say the least. Other useful adjectives here might be "weird", "bizarre" and "terrifying".

H.P. Lovecraft would be proud.

The idea was first entertained by Donald Knuth in the 1950s, with a practical application in mind: to encode complex numbers into computer memory without the need for denoting positive and negative values, nor real and complex parts.

One number to bind them, to rule them all.

Yes, they are remarkably difficult for humans to read. And they're wordy for representing numbers, using a lot of digits to home in on a value, with the number of digits required varying wildly between sequential values. Oh, and you can't really do division, which is a bit of a sticking point. But then again Knoth didn't know that last part when he thought them up. I mean sure, *he* couldn't figure out a way, but maybe someone else could? Someone smarter... than Donald Knuth. Let that sink in for a minute.

Maybe Von Neumann? Sure thing.

The division problem has not been solved, always collapsing into complex linear algebra which sometimes works and sometimes doesn't. I'm reasonably sure the problem explodes in super-polynomial time. It seems like it should.

There were 14 submissions for the first task this past week.

## A SELECTION of SUBMISSIONS
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178//perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/duncan-c-white/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/sgreen/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/colin-crain/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/cheok-yin-fung/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/e-choroba/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/wlmb/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/jo-37/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/peter-campbell-smith/perl/ch-1.pl), and
[**Kjetil Skotheim**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/kjetillll/perl/ch-1.pl)


The way I interpreted the task, along with a sizable number of others, was the the term "base-10 number" in the defintion denotes a real number, which is to say the real component of a complex number. Was this right? Who knows. As such to satisfy the requirements it was not necessary to create a pair of general-purpose conversion functions navigating the complex plane.

Which in turn would mean we would only be dealing with the real portion of the quater-imaginary number, which it turns out can be pieced-out from every-other digit. Interesting.

Of course not everyone took this interpretation, and hence the slightly easier path; it was about half, in the end. We also saw advanced solutions that could handle component complex numbers for input and output in varying degrees, both is translating to and from quater-imaginary notation.



[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178//perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/jaldhar-h-vyas/raku/ch-1.sh)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 178](https://www.braincells.com/perl/2022/08/perl_weekly_challenge_week_178.html)

The real number components of base 2*i* arise at the even-numbered powers in the expansion. At these points the digits in a representational number are multiplied by 2*i* x 2*i* = -4, which in turn maps to base (-4). And as all real numbers are represented on the complex plane with an imaginary coefficient of 0, those imaginary positions of a quater-imaginary representation of a purely real number will all be 0.

This means the slightly easier problem subset we are dealing with here is to convert to base (-4) and represent the imaginary positions with 0s.

Perhaps surprisingly, converting from base-10 to base (-4) is not that different than converting to any other base. We simply need to divide out the base repeatedly and note the remainder for each digit position. The only problem that arises from using a negative base is that the possibility that remainder can also be negative. Should this occur, we need to "carry" a 4 backwards over from the quotient, reducing that value by 1 and adding 4 to the remainder to make it positive again.

The result is an array of digits, which Jaldhar simply reverses and joins with the "0" digit to represent the zeroed-out imaginary portions.

Jaldhar makes no bones about his not being a mathematician, so I find this effort particularly admirable. There is no corresponding function to convert back from quater-imaginary but you know what? I'm going to let that slide. This will be more than enough to start the show.

```perl
    use Math::Prime::Util qw/ todigits /;
    use POSIX qw/ floor /;

    sub quaterImaginaryBase {
        my($n) = @_;
        my @result;
        my $r = 0;

        while ($n) {
            $r = $n % -4;
            $n = floor($n / -4);
            if ($r < 0) {
                $n++;
                $r += 4;
            }
            push @result, todigits($r, 4) || 0;
        }

        return join '0', reverse @result;
    }
```

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/duncan-c-white/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/duncan-c-white/C/ch-1.c)

After an initial bout with shock and awe, Duncan quickly arrives at the same conclusion, "all" we need to do is convert to base (-4) and intersperse 0s between the digits.

Yea, like any of us have willingly or unwillingly considered the mathematical consequences of a negative base before? Or more than likely whether it was even possible? Even for mathematicians this is unusual ground.

Although  difficult to conceptualize, the rules for digital representation remain the same: each position has a base raised to the value of the position. Everything's the same as before, just weirder.

To convert to base (-4) we can, as noted, divide down by -4s, with the caveat of forcing the remainder to become positive. To go the other way we need to keep track of the positions of the digits and multiply each by an ascending power of -4. By nature of the multiplication of negative numbers alternating digits will end up either adding to or subtracting from the final base-10 total.

Duncan provides additional functions to interlace 0s in the complete quater-imaginary forms, and remove them when converting to decimal.

```perl
    use Function::Parameters;

    fun convert_from_base_neg4( $bstr )
    {
        my $n = 0;
        my $currpow = 1;
        my $len = length($bstr)-1;
        for( my $pos=$len; $pos>=0; $pos-- )
        {
            my $d = substr($bstr,$pos,1);
            $n += $d * $currpow;
            $currpow *= -4;
        }
        return $n;
    }
```

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/sgreen/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/sgreen/python/ch-1.py)


&nbsp;&nbsp;**blog writeup:**
[Quater-imaginary Business Date](https://dev.to/simongreennet/quater-imaginary-business-date-58ln)

Here is another straightforward implementation, converting solely from base-10 real numbers quater-imaginary ones. As I said before, I'm not going to worry too much about that particulars of the challenge definition.

```perl
    sub divmod ( $num, $div ) {
        # Perl doesn't have a built-in divmod function
        return int( $num / $div ), $num % $div;
    }

    sub main ($num) {
        my @digits = ();
        my $rem;

        while ( $num >= 4 or $num < 0 ) {
            ( $num, $rem ) = divmod( $num, -4 );

            if ( $rem < 0 ) {
                $num += 1;
                $rem += 4;
            }

            unshift @digits, $rem;
        }

        unshift @digits, $num;

        # The actual solution is the number reversed, separated by zeros
        say join( '0', @digits );
    }
```

[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/colin-crain/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[The Imaginary Quartet - Programming Excursions in Perl and Raku](https://colincrain.com/2022/08/21/the-imaginary-quartet)

As Simon only provided one-directional travel, to complement his contribution I offer the companion function from my own, to convert back from quater-imaginary to a purely real value. Because we are known to be working in a more constrained problem space we will simply toss out the alternating 0s. We are working with real numbers, right?

```perl
    ## converts quater-imaginary to non-imaginary base-10
    ## strips +i components (which will be zeros) and converts from base -4

        ## filter out every other position
        my $i = 1;
        my @num = grep { $i++ & 1 } split //, $num;

        ##  convert by computing expanded form
        my $out;
        my $pos = 0;
        for ( reverse @num ) {
            $out += $_ * (-4) ** $pos++;
        }

        return $out;
    }
```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/cheok-yin-fung/perl/ch-1.pl)

CY presents to us a curious recursive method for constructing quater-imaginary numbers from reals. Actually two methods in fact, both utilizing recursion.

```perl
    sub qib_tr {
        my $num = $_[0];
        return 0 if $num == 0;
        if ($num < 0) {
            return
                fmt_qibstr(qibneg(qib_tr(-$num))->@*);
        }

        my %hash;
        $hash{sprintf("%0x", $_)} = stepwise_tr($_) for (0..15);
        my @hexstr = split "", sprintf("%0x", $num);
        my @com = map {
                    $hash{$hexstr[$_]}.("0000" x scalar @hexstr - 1 - $_)
                  } 0..scalar @hexstr-1;
        return reduce {qibadd($a, $b)} @com;
    }

    sub stepwise_tr {
        my $num = $_[0];
        return 0 if $num == 0;
        my $ans;
        if ($num > 0) {
            $ans = stepwise_tr($num-1)+1;
            my @arr = split "", $ans;
            unshift @arr, 0, 0, 0, 0;
            return fmt_qibstr(@arr);
        }
        else {
            return fmt_qibstr(qibneg(stepwise_tr(-$num))->@*);
        }
    }

    sub qibadd {
        my @ans;
        my $m = $_[0];
        my $n = $_[1];
        ($m, $n) = ($n, $m) if (length $n > length $m);
        my @marr = split "", $m;
        my @narr = split "", $n;
        unshift @narr, (0) x (4 + scalar @marr - scalar @narr);
        unshift @marr, (0) x (4);
        for (0..scalar @marr - 1) {
            push @ans, $marr[$_]+$narr[$_];
        }
        return fmt_qibstr(@ans);
    }

    sub qibneg {
        my @ans;
        my $s = $_[0];
        my @sarr = split "", $s;
        unshift @sarr, (0) x (4);
        my @narr = (0) x (scalar @sarr);
        for (0..scalar @sarr - 1) {
            push @ans, $narr[$_]-$sarr[$_];
        }
        return [@ans];
    }
```



[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/ulrich-rieke/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/ulrich-rieke/haskell/ch-1.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/ulrich-rieke/raku/ch-1.raku)

Ulrich brings us `Math::Complex` to his implementation. His functions turn real numbers into quater-imaginary ones, but as consequence of using the module he can convert backwards from base 2*i* into proper complex numbers of the form *a* + *bi*.

```perl
    perl 178-1-UlrichRieke-REVIEW.pl

    Please enter a number string! If it is quater-imaginary, end with 2i !
    3232i
    -9+4i
```

This opens us up to another set of far more complicated solutions.

```perl
    sub from_quater_imaginary {
      my $numberstring = shift ;
      my $quaterHash = shift ;
      my $sum = Math::Complex->make( 0 , 0 ) ;
      my $reversed = reverse substr( $numberstring, 0 , (length $numberstring) - 2 ) ;
      my $len = length $reversed ;
      for my $position (0 .. $len - 1 ) {
          my $firstFactor = Math::Complex->make( substr( $reversed, $position , 1 ) , 0 ) ;
          $sum = $sum + $firstFactor * $quaterHash->{ $position } ;
      }
      return $sum ;
    }

    sub into_quater_imaginary {
      my $number = shift ;
      my $quaterHash = shift ;
      my @real_only_products ;
      for my $num( 0 .. 4 ) {
          push @real_only_products , $quaterHash->{2 * $num} ;
      }
      my @solutions ;
      for my $e ( 0 .. 3 ) {
          for my $f ( 0 .. 3 ) {
        for my $g ( 0 .. 3 ) {
            for my $h ( 0 .. 3 ) {
              for my $i ( 0 .. 3 ) {
              if (($real_only_products[0] * $e + $real_only_products[1] * $f +
                $real_only_products[2] * $g + $real_only_products[3] * $h +
                $real_only_products[4] * $i) == $number) {
                my $solution = reduce { $a . $b } ( $e , 0 , $f , 0 ,  $g , 0 ,
                  $h , 0 , $i ) ;
                $solution = (reverse $solution) . " 2i" ;
                push @solutions , $solution ;
              }
              }
            }
        }
          }
      }
      return @solutions ;
    }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/e-choroba/perl/ch-1.pl)

Choroba also imports `Math::Complex`, to handle arbitrary conversions from quater-imaginary into the more standard component representation. For conversion *to* quater-imaginary, on the other hand, he employs a remarkable bitwise conversion to base (-4), using the magic number `0xCCCCCCCC`:

```
    (value + 0xCCCCCCCC) XOR 0xCCCCCCCC
```

this conversion formula was first discovered by Richard Schroeppel in 1972.

```perl
    use Math::Complex qw{ cplx };

    my $B = cplx(0, 2);
    sub from_quater_imaginary_base ($q) {
        my $n = 0;
        my $e = 1;
        while (length $q) {
            $n += chop($q) * $e;
            $e *= $B;
        }
        return $n
    }

    my $SCHROEPPEL4 = 0xCCCCCCCC;
    sub to_quater_imaginary_base ($n) {
        my $binary = sprintf '%08b', ($n + $SCHROEPPEL4) ^ $SCHROEPPEL4;
        my $q = "";
        while ($binary =~ /(..)/g) {
            $q .= oct("0b$1") . '0';
        }
        $q =~ s/^0+//;
        chop $q;
        return $q
    }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/wlmb/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 178 – W. Luis Mochán](https://wlmb.github.io/2022/08/15/PWC178/)

Luis presents us with another example of using Schroeppel's clever bit-flipping trick in his solution. Then, for the full complex treatment, he converts the real portion and then the imaginary part, multiplying it by -2 because that's what needs to happen to normalize it. This is done so we can use the same base (-4) conversion function, which also folds in the zeros for the alternate digits as we've seen elsewhere.

Then, offsetting the imaginary part one place he can just sum the two together — the zeroed portions dovetail into each other like the fingers of two hands. Sweet.

```perl
    use List::Util qw(pairmap);
    sub st_to_reim($string){ # Parse string as X+Yi (with small variations)
        my $orig=$string;
        my $re= $string=~s/^(\s*([+-]?\d+))\s*(?!(\d|i))//?$2:0;
        my $im= $string=~s/^(\s*([+-]?\d+)\s*i\s*)$//?$2:0;
        die("$orig has the wrong format\n") unless $string=~/^$/;
        die("$orig is too big\n") unless abs($re)<= 1e5 and abs($im) <= 1e5; # to be safe
        return ($re, $im);
    }
    sub re_to_qi($X){ # convert a real integer number to base 2i
        state $S=0xCCCCCCCC; # Schroeppel number, enough for upto 32 bits.
        my @bits=split "", sprintf "%b", ($S+$X)^$S;
        unshift @bits,0 if @bits%2; # make length even
        join "0", pairmap {2*$a+$b} (@bits);
    }
    sub cmplx_to_qi($X, $Y){    # convert a complex integer number X+Yi to base 2i
        my $re=re_to_qi($X);    # convert real part
        my $im=re_to_qi(-2*$Y); # convert 2i*Yi=-2Y, with Y imaginary part
        substr $im,-2,1,'';        # delete last digit
        $re+$im;            # mix both parts together
    }
```


[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/jo-37/perl/ch-1.pl)

Jorg's notes provide an exceptional guide into the the thicket of complexity we wander into, converting between quater-imaginary and more traditional complex notation. Such as why some quater-imaginary *integers* pass the radix point and end in ".2", which really doesn't sound very integral to me, frankly. I would expect such behavior from fractional bases, but both 2 and *i* are integers, right? Ok that last part is actually disputable I suppose. It certainly seems pretty integral. How exactly Knuth intended to handle the decimal in machine memory I don't know.

In any case the operation requires a lot of moving parts. Here are some excerpts from his conversions:

```perl
    # The task states: "convert a given number (base 10)".  The kind of
    # number is not specified.  As quater-imaginary numbers serve to
    # represent complex numbers, here a complex number is expected.  In
    # general this might be any complex number but for the sake of
    # convenience only integer parts are converted into the quater-imaginary
    # representation.  Unfortunately, these do not always map to "integer"
    # quater-imaginary numbers because odd imaginary parts result in a
    # broken place on the quater-imaginary side.  Therefore one broken place
    # is allowed for the reverse conversion, too.
    #
    # To quater-imaginary:
    # - convert the real and half the imaginary part of a given complex
    #   number to negaquaternary.  This gives one broken place for odd
    #   imaginary parts.
    # - interleave the negaquternary digits from both parts.

    # Get the quater-imaginary representation of a complex number from its
    # integer real and imaginary parts.
    sub cplx2qi ($z) {
        my ($re, $im) = map int, $z->Re, $z->Im;
        return 0 unless $re || $im;
        # Get the reversed negaquaternary representation for the real part.
        my $renq = int2rnq($re);
        # We need the reversed negaquaterny representation of the imaginary
        # part divided by two.  This may be obtained by converting the value
        # multiplied by minus two and then taking the last digit as a broken
        # place.
        my $imnq = int2rnq($im * -2);

        # As the real and imaginary parts are reversed, these are aligned at
        # their least significant digit and thus may easily be zipped
        # together starting with the broken place in the imaginary part.
        # Replace 'undef' with zero in the shorter part, join the resulting
        # digits and reverse them.
        my $qi = reverse join '', map $_ // 0, zip @$imnq, @$renq;

        # Remove a leading zero and a trailing zero broken place and insert a
        # dot in front of a nonzero broken part.
        $qi =~ s/^0?(.*)(.)$/$1 . ($2 ? ".$2" : '')/er
    }
```

He provides a similarly in-depth explanation for his conversion from quater-imaginary back into the language of normal, decent, right-thinking people.

[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/peter-campbell-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[QIBs and days - fun tasks for a sunny day](https://pjcs-pwc.blogspot.com/2022/08/qibs-todays-first-fun-task-as-gabor.html)

The big complication of converting a quater-imaginary number to standard representation is in parsing the individual digits and allocating each with its real and imaginary components to the final aggregate value.

Peter's solution shows this problem. I'm not sure "clearly" is the right word, although that's hardly Peter's fault. In any case he does do a good job with some extremely difficult material.

```perl
    sub from_qib {

        # converts a quater-imaginary base number to a complex number with integer coefficients

        my ($qib, @digits, $real, $imag, $real_mult, $imag_mult, $hold, $digit);

        $qib = $_[0];

        # put the digits into an array
        @digits = split(//, $qib);

        # loop over the digits from least significant upwards
        $imag = 0;
        $real = 0;
        $real_mult = 0;       # these are the contributions of the digit after the point
        $imag_mult = -0.5;
        for $digit (reverse @digits) {
            next if $digit eq '.';

            # add the (decimal) values of the digits to the answer
            $real += $real_mult * $digit;
            $imag += $imag_mult * $digit;

            # and get the real and imag contributions from the next digit
            $hold = $real_mult;
            $real_mult = -2 * $imag_mult;
            $imag_mult = 2 * $hold;
        }
        say qq[[$qib]2i = $real + ${imag}i];
    }
```

[**Kjetil Skotheim**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/kjetillll/perl/ch-1.pl)

Deciphering Kjetil's solution shall be left as an exercise to the reader.

You know what you did. Maybe when you've finished you'll think twice before you misbehave.

```perl
    sub c2q {                       #complex to quater-imaginary
        my($r,$i) = @_;             #real and imaginary part
        die if grep$_!=int,@_;      #...which must be ints, challenge didnt specify
        my $qr = _qu($r);
        my $qi = _qu(int $i/2 + $i%2/2);
        my $q = '';
        map { $q = ( s/.$// ? $& : 0 ) . $q } $qr, $qi while length $qr.$qi;
        $q = '0' if !length$q;
        $q =~ s,^0\B,,;
        $q .= '.2' if $i % 2;
        $q
    }

    sub q2c {                       #quater-imaginary to complex (real and imaginary part)
        my($q)=@_;
        my $i1 = $q=~s/\.2$//;
        die if $q !~ /^[0-3]+$/;    #die if not quater-imaginary string
        my $k = -1;
        my @c = (0,0);              #complex number returned, init to zero
        my @d = reverse split//,$q; #digits reversed
        $c[++$k%2] += $_ * 2**$k * ($k%4>1?-1:1) for @d;
        $c[1] -= $i1;               #decrease if .2
        @c
    }

    sub _ediv {                     #https://en.wikipedia.org/wiki/Euclidean_division
        use integer;
        my($n,$d)=@_;               #numerator and denominator
        $d==0 ? die : $n>=0 || $n%$d==0 ? ($n/$d,$n%$d) : ($n/$d+1-2*($d>0), $n%$d+abs$d)
    }

    sub _qu {
        my($n,$qu)=(@_,'');
        $n ? do{ my($q,$r)=_ediv($n,-4); _qu($q,$r.$qu) } : $qu
    }
```



## Blogs and Additional Submissions in Guest Languages for Task 1:


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC178 - Quater-imaginary Base - ETOOBUSY](https://etoobusy.polettix.it/2022/08/17/pwc178-quater-imaginary-base/)


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/roger-bell-west/javascript/ch-1.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/roger-bell-west/kotlin/ch-1.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/roger-bell-west/lua/ch-1.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 178: Imaginary Date](https://blog.firedrake.org/archive/2022/08/The_Weekly_Challenge_178__Imaginary_Date.html)


------------------------------------------





---

# TASK 2 {#PWC178TASK2}

# Business Date
*Submitted by: Mohammad S Anwar*

You are given $timestamp (date with time) and $duration in hours.

Write a script to find the time that occurs $duration business hours after $timestamp. For the sake of this task, let us assume the working hours is 9am to 6pm, Monday to Friday. Please ignore timezone too.

For example,

Suppose the given timestamp is 2022-08-01 10:30 and the duration is 4 hours. Then the next business date would be 2022-08-01 14:30.

Similar if the given timestamp is 2022-08-01 17:00 and the duration is 3.5 hours. Then the next business date would be 2022-08-02 11:30.


## about the solutions
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/athanasius/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/colin-crain/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178//perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/jo-37/perl/ch-2.pl),
[**Kjetil Skotheim**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/kjetillll/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/peter-campbell-smith/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/sgreen/perl/ch-2.pl),
[**Solathian**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/solathian/perl/ch-2.pl),
[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/steve-g-lynn/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/ulrich-rieke/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/wlmb/perl/ch-2.pl)

There were more submissions for the second task this week than the first, an unusual inversion of the norm. Although, the way this lovely 21st century is going, I fail to see how anything can be considered normal anymore. It's a logical paradox: if abnormal is normal, you're defining something by its own negation, and suddenly you're dividing by zero. This does not sound like a healthy situation, frankly.

But I digress.

Date and time manipulations are notoriously tricky around the the edges of the problem space, often requiring multiple cases to cover all possible conditions. This challenge is no exception. We are calculating a time differential, but only counting certain hours towards the elapsed total, with even that pattern subject to a weekend epicycle.

The resulting scheme of which hours to count is both well-defined yet complicated and irregular. Furthermore, sometimes the elapsed total will occur within a single day, which further complicates matters.

There were 16 submissions for the second task this past week.

## A SELECTION of SUBMISSIONS
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/peter-campbell-smith/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/duncan-c-white/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/roger-bell-west/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/polettix/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/colin-crain/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/jo-37/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/wlmb/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/sgreen/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/e-choroba/perl/ch-2.pl), and
[**Kjetil Skotheim**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/kjetillll/perl/ch-2.pl)


There are a variety of modules available to help us keep track of dates and times, and most submissions made use of one or the other, if only to parse the input timestamp. However even taking this small bit of outside help was not universal, as some members went in on their own, against medical advice. Their families have been notified and they will be missed.

[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/peter-campbell-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[QIBs and days - fun tasks for a sunny day](https://pjcs-pwc.blogspot.com/2022/08/qibs-todays-first-fun-task-as-gabor.html)

Peter presents us with with a very methodical solution, which will serve will to start the clock. Because the start time is an arbitrary selection from the valid working hours of a week, Peter has decided to normalize the start time by first shifting to 9am, and then again to Monday morning of the week in question. The shifted hours, in seconds, are added to the duration to make things work out.

From there he advances forward, first adding complete weeks, then whole days, and finally the remainder comprises the hours, minutes and any seconds in the timestamp for the end date.

The timestamps themselves are notably disassembled using a regex, then reassembled using `sprintf`.

Weekends, as noted, provide an added kink in the pattern, and Peter has devised a separate function, `date10_add()` to accommodate the skips and keeping the date correct.

```perl
    use Time::Local 'timelocal_posix';

       $start = $test->[0];
       $duration = $test->[1];   # hours

       $start =~ m|(....).(..).(..).(..).(..).(..)|;
       ($y, $m, $d, $h, $i, $s) = ($1, $2, $3, $4, $5, $6);

       # move back to 9am on the starting day
       $date = substr($start, 0, 10);
       $duration += $h - 9 - $i / 60 - $s  / 3600 ;   # revised duration

       # move back to preceding Monday 9am
       @t = localtime(timelocal_posix($s, $i, $h, $d, $m - 1, $y - 1900));
       $day_of_week = $t[6];   # 0 = Sunday
       $date = date10_add($start, 1 - $day_of_week);
       $duration += ($day_of_week - 1) * 9;

       # move forward complete weeks
       $whole_weeks = int($duration / 45);
       $date = date10_add($date, 7 * $whole_weeks);
       $duration -= $whole_weeks * 45;

       # and whole days
       $whole_days = int($duration / 9);
       $date = date10_add($date, $whole_days);
       $duration -= $whole_days * 9;

       # and the time of day
       $h = 9 + int($duration);
       $duration -= int($duration);
       $duration *= 3600;  # seconds
       $i = int($duration / 60);
       $s = $duration - $i * 60;

       $end = sprintf('%s %02d:%02d:%02d', $date, $h, $i, $s);
       say qq[\ntimestamp = $start\nduration  = $test->[1]\nend       = $end];
   }

    sub date10_add {  #  (date10a, days) -- returns date10 which is days after date10a

        my (@t);
        if ($_[0] =~ m|^(....)-(..)-(..)|) {
            @t = localtime(timelocal_posix(0, 0, 12, $3, $2 - 1, $1 - 1900) + $_[1] * 86400);
            return sprintf('%04d-%02d-%02d', $t[5] + 1900, $t[4] + 1, $t[3]);
        } else {
            return 0;
        }
    }

```

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/duncan-c-white/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/duncan-c-white/C/ch-2.c)

With an alternate take, Duncan demonstrates that we can solve the problem simply, if we let the right module do it for us. Here Duncan brings in `Date::Manip::Date`, and its companion `Date::Manip::Delta`, which holds a (configurable) idea of "business day". So in this case we make an object, tell it to add so many business hours, and we're in. It's very interesting that instead of a separate function, we literally tell the parser, in English, what we want it to do.

```perl
    use Date::Manip::Date;
    use Date::Manip::Delta;

    my $debug=0;
    die "Usage: business-date [--debug] DATETIME DURATION\n"
        unless GetOptions( "debug"=>\$debug ) && @ARGV==2;

    my $dt = shift;
    my $duration = shift;

    my $date = new Date::Manip::Date;
    $date->config( "WorkDayBeg", "09:00:00", "WorkDayEnd", "18:00:00" );
    my $err = $date->parse( $dt );
    die "business date: date $dt - parse error $err\n" if $err;
    die "business date: date $dt - is not a business day/time\n" unless
        $date->is_business_day( 1 );

    my $delta = new Date::Manip::Delta;
    $err = $delta->parse("in $duration business hours");
    die "business date: duration $delta - parse error $err\n" if $err;

    my $d = $date->calc( $delta );
    say $d->printf("%Y-%m-%d %H:%M");

```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/roger-bell-west/javascript/ch-2.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/roger-bell-west/kotlin/ch-2.kt), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/roger-bell-west/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/roger-bell-west/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 178: Imaginary Date](https://blog.firedrake.org/archive/2022/08/The_Weekly_Challenge_178__Imaginary_Date.html)

The `DateTime` family of modules is arguably the most famous of the date and time manipulation frameworks in Perl, and does its best to try and accomodate any need that may arise. As such is it a sprawling complex of interrelated parts that work well together in a pretty logical manner, considering.

Here Roger brings us a fairly terse solution that handles all the necessary corner cases. Of which there are many.

This is the core logic. Helper functions take care of the questions: "Is this in a business day?", "what is the start of the next business day? (making allowance for weekends)" and "what is the end of the next business day?"

The `$current` variable holds a `DateTime` object, to which we add time units, and deplete the duration, measured in seconds, to keep the two in sync.

```perl
    sub addbizhours($start, $delta) {
      my $strp = DateTime::Format::Strptime->new(
        pattern   => '%Y-%m-%d %H:%M',
        strict => 1,
        time_zone => 'GMT',
          );
      my $current=$strp->parse_datetime($start);
      my $seconds = 3600 * $delta;
      my $bizdaylength = 3600 * 9;
      unless (isbiz($current)) {
        $current = nextbizstart($current);
      }
      my $ed = nextbizend($current);
      my $remain = ($ed->subtract_datetime_absolute($current))->in_units('seconds');
      if ($remain < $seconds) {
        $seconds -= $remain;
        $current = nextbizstart($ed);
        while ($seconds > $bizdaylength) {
          $current = nextbizstart($current);
          $seconds -= $bizdaylength;
        }
      }
      $current->add(seconds => $seconds);
      return $current->strftime('%Y-%m-%d %H:%M');
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC178 - Business Date - ETOOBUSY](https://etoobusy.polettix.it/2022/08/18/pwc178-business-date/)

Flavio gets by with only using `Time::Local` to supply a reverse function for the built-in `gmtime` function, so he can supply an array of values and generate epoch seconds, modify those seconds and convert back.

That's enough.

Again we have helper functions, this time for `is_in_business($dt)` and `next_business_day_start($dt)`.

```perl
    use Time::Local 'timegm';

    sub add_bh ($timestamp, $duration) {
       state $sod_min =  9 * 60;
       state $eod_min = 18 * 60;
       my $duration_min = int($duration * 60); # in minutes, rounded down

       my $dt = parse_datetime($timestamp);

       # cope with the possibility that the provided timestamp is
       # *outside* the allowed range, move to the beginning of the
       # next business day
       $dt = next_business_day_start($dt) unless is_in_business($dt);
       my $start_min = $dt->[3] * 60 + $dt->[4];

       while ($duration_min > 0) {
          my $available_min = $eod_min - $start_min;
          if ($duration_min >= $available_min) {
             $dt = next_business_day_start($dt);
             $duration_min -= $available_min;
             $start_min = $sod_min;
          }
          else { # we're in the very day!
             my $stop_min = $start_min + $duration_min;
             $dt->[4] = my $M = $stop_min % 60;
             $dt->[3] = ($stop_min - $M) / 60;
             $duration_min = 0;
          }
       }

       return sprintf '%04d-%02d-%02d %02d:%02d', $dt->@*;
    }
```


[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/colin-crain/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[A Very Busy Dating Service - Programming Excursions in Perl and Raku](https://colincrain.com/2022/08/22/a-very-busy-dating-service)

I'm a big fan of back-of-the-envelope calculations, the important secret of which is keeping track of significant digits. In the spirit of this, I decided that when adding a duration listed in hours, keeping track of individual seconds was presumably pointless, as even time-clocks are not to my knowledge that granular. Lawyers bill by the minute, not the second.

Ergo I performed my calculations in the minutes composing individual hours. Two sweeps of minutes could easily exceed an hour, in fact this will happen nearly half the time. But seconds incrementing a minute, which in turn itself increments an hour? Not so much.

Again we build a `DateTime` object, and proceed in an orderly fashion:  first the remaining minutes of the initial day, then whole days until the remaining time is less than a day, skipping weekends, then using up what's left counting from 9am on the end date.

```perl
    ## convert to minutes
    my $duration_minutes = $delta * 60;

    ## parse input and create a DateTime object for the timestamp
    my $format = DateTime::Format::Strptime->new(
                     pattern   => '%F %H:%M');
    my $date  = $format->parse_datetime($timestamp);

    ## calculate remaining minutes in current day
    my $day_end =  DateTime->new(
        year       => $date->year,
        month      => $date->month,
        day        => $date->day,
        hour       => 18,
        minute     => 0
    );
    my $date_remaining_duration = $day_end->subtract_datetime($date);
    my $remaining_minutes_today = $date_remaining_duration->hours * 60 +
                                  $date_remaining_duration->minutes;

    ## CASE 1: duration falls within current day
    ##
    if ($duration_minutes <= $remaining_minutes_today) {
        $date->add( minutes => $duration_minutes );
    }

    ## CASE 2: we finish this day and locate the ending day
    ##
    else {
        ## subtract remaining time within current day
        $duration_minutes -= $remaining_minutes_today;

        ## start a new day to the next business day
        $date->set_hour( 9 );
        $date->set_minute( 0 );
        $date->add( days => ($date->day_of_week == 5 ? 3 : 1));

        ## add any complete days, skipping weekends
        while ($duration_minutes > 540) {      ## 540 minutes in 9-hour day
            $date->add( days => ($date->day_of_week == 5 ? 3 : 1));
            $duration_minutes -= 540;
        }

        ## add any remaining minutes forward from 9am on the end day
        $date->add( minutes => $duration_minutes );
    }

    ## output timestamp as per format
    $date->set_formatter($format);
    say $date->stringify;
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/jo-37/perl/ch-2.pl)

All the kinks and wrinkles in the pattern of times within and without the agreed business hours make summarizing the submissions quite difficult, as leaving bits out leaves them noticeably  incomplete. Although this is always an issue, with this task it seems more pronounced.

Here Jorg justifies the lengthy crop as he provides an extensive commentary as he goes along, clarifying his motivations. He's a good one, that Jorg.

```perl
    sub business_date {
        # A 'yyyy-mm-dd hh:mm' DateTime formatter/parser.
        state $date_fmt = DateTime::Format::Strptime->new(pattern => '%F %R');

        # Business start and end hours per day of week.  These are stored as
        # durations that will be added to a DateTime object representing the
        # beginning of a day.
        state $business = [
            # Mon - Fri
            ([map duration($_), qw(09:00 18:00)]) x 5,
            # Sat + Sun
            ([map duration($_), qw(0:00 0:00)]) x 2
        ];

        # Convert args from string to DateTime / Duration.
        my $timestamp = $date_fmt->parse_datetime(shift);
        my $duration = duration(shift);

        # The formatter will be propagated to the remaining DateTime
        # objects.
        $timestamp->set_formatter($date_fmt);

        while () {
            # Get the beginning of the day from the timestamp.
            my $day = $timestamp->clone->truncate(to => 'day');

            # Get the business starting and ending timestamps for the
            # current day of week. Mon is zero.
            my ($start, $end) = map $day + $_,
                $business->[$timestamp->day_of_week_0]->@*;

            # Adjust a timestamp prior to the business start.
            $timestamp = $start if $timestamp < $start;

            # We found the requested business hour if this day has business
            # hours and the duration is exhausted before the business end.
            # This covers an edge case: A timestamp after the business end
            # with a zero duration is delayed to the next business start.
            # See tests.
            return $timestamp + $duration
                if $start < $end && $timestamp + $duration <= $end;

            # Reduce the duration by todays remaining business hours.
            $duration->subtract_duration($end - $timestamp)
                if $timestamp <= $end;

            # Step to the next day.
            $timestamp = $day->add(days => 1);
        }
    }

    # Create a DateTime::Duration object from a string.
    sub duration ($dur) {
        # A 'hh:mm' duration formatter/parser.
        state $dur_fmt = DateTime::Format::Duration->new(pattern => '%R');

        $dur_fmt->parse_duration($dur);
    }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/wlmb/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 178 – W. Luis Mochán](https://wlmb.github.io/2022/08/15/PWC178/)

In a stab at brevity, I'll detail Luis' progression first, as we relentlessly move from the start time forward

* Advance towards end of day

* Advance towards end of week

* Advance to next working morning

* Advance full weeks

* Advance full days

* Advance remaining time

It's a very orderly dispatch.


```perl
    sub next_available($ts, $hours){
        my $minutes=$hours*$minutes_per_hour;
        my $initial=DateTime::Format::DateParse->parse_datetime($ts)->truncate(to=>"minute");
        die "Wrong timestamp" unless $initial->day_of_week <=5 and $initial->hour>=$opening_time
        and $initial->hour < $closing_time;

        # Advance towards end of day
        my $target=$initial->clone;
        my $closing=$target->clone->set(hour=>$closing_time, minute=>0);
        my $minutes_to_close=$closing->subtract_datetime($target)->in_units("minutes");
        my $actual_minutes=min($minutes, $minutes_to_close);
        $target->add(minutes=>$actual_minutes);
        $minutes-=$actual_minutes;
        return $target->datetime(" ") unless $minutes>0;

        # Advance towards end of week
        my $days_to_weekend=$days_per_week-$target->day_of_week;
        my $actual_days=min($days_to_weekend, floor($minutes/$minutes_per_day));
        $target->add(days=>$actual_days);
        $minutes-=$actual_days*$minutes_per_day;
        return  $target->datetime(" ") unless $minutes>0;

        # Advance to next working morning
        $target->add(days=>1)->set(hour=>$opening_time, minute=>0); # next morning
        $target->add(days=>2) if $target->day_of_week==6; # skip weekend

        # Advance full weeks
        my $weeks=floor($minutes/$minutes_per_week);
        $target->add(weeks=>$weeks);
        $minutes-=$weeks*$minutes_per_week;
        return  $target->datetime(" ") unless $minutes>0;

        #Advance full days
        my $days=floor($minutes/$minutes_per_day);
        $target->add(days=>$days);
        $minutes-=$days*$minutes_per_day;
        return  $target->datetime(" ") unless $minutes>0;

        #Advance remaining time
        $target->add(minutes=>$minutes);
        #$minutes=0
        return  $target->datetime(" ");
    }
```

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/sgreen/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/sgreen/python/ch-2.py)


&nbsp;&nbsp;**blog writeup:**
[Quater-imaginary Business Date](https://dev.to/simongreennet/quater-imaginary-business-date-58ln)

I'm glad someone else saw fit to exclude seconds from consideration. In my eyes once you include seconds you take on all the baggage they carry with them, up to including the distant possibility that a *leap* second will influence the outcome.

I don't believe spacecraft operate on that level of precision, or at least the assumption of that precision. With opposite relativistic effects operating from both velocity and gravity wells I believe the Standard Operating Procedure is to make tiny corrections, to the courses and the clocks involved, to keep everything on track. The [Three Body Problem](https://en.wikipedia.org/wiki/Three-body_problem) is reduced to ["We'll fix it in post"](https://tvtropes.org/pmwiki/pmwiki.php/Main/FixItInPost).

At least Simon appears to agree with me. Either that or it's easier, which it is, and a little less cluttered. Again he breaks down his process with line-by-line commentary, so I'll leave it intact so you can watch the action.

```perl
    use DateTime;
    use DateTime::Format::Strptime;

    # It's easier to work in minutes
    my $minutes = $hours * 60;

    my $strp = DateTime::Format::Strptime->new( pattern => '%F %H:%M' );

    # Parse the date time input
    my $start = $strp->parse_datetime($dt);

    # Can't start on a weekend
    if ( $start->day_of_week() >= 6 ) {
        die "You can't start in the weekend\n";
    }

    # Can't start outside office hours
    if ( $start->hour < 9 or $start->hour > 18 or ( $start->hour == 18 and $start->minute > 0 ) ) {
        die "You can't start out of hours!\n";
    }

    # Wind the clock back to 9am Monday
    $minutes += ( $start->day_of_week - 1 ) * 9 * 60 + ( $start->hour - 9 ) * 60 + $start->minute;
    my $monday = $start->clone->subtract(
        days    => $start->day_of_week - 1,
        hours   => $start->hour - 9,
        minutes => $start->minute
    );

    # Split the time to go forward into days and minutes
    my $days = int( $minutes / ( 9 * 60 ) );
    $minutes = $minutes % ( 9 * 60 );

    # For every whole 5 days, we need to add the two weekend days
    $days += 2 * int( $days / 5 );

    # Add the offset from 9am Monday, and print the answer
    my $end = $monday->clone()->add( days => $days, minutes => $minutes );
    say $end->strftime('%F %H:%M');
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/e-choroba/perl/ch-2.pl)

Choroba brings us `Time::Piece`, which, when imported, quietly overrides Perl's sense of time. The functions `localtime` and `gmtime` suddenly return `Time::Piece` objects, which bring with them a raft of methods for working with them. It's all very convenient, really. You can even add and subtract objects using standard "+" and "-" signs, if we first involve a `Time::Seconds` object.

That last part makes this module a little less intuitive and convenient for me, but it still rates highly, just not quite warrenting "magical". So be it.

`_move_to_business_hours()` is  a little routine that finds the next business day to start the clock, if we don't initially fall within one.

```perl
    use Time::Piece;
    use Time::Seconds qw{ ONE_HOUR ONE_DAY ONE_WEEK };

    sub business_date ($timestamp, $duration) {
        my $tp = _move_to_business_hours(
            'Time::Piece'->strptime($timestamp, '%Y-%m-%d %H:%M'));

        my ($decimal) = $duration - int $duration;
        $duration = int $duration;

        my $weeks = int($duration / (9 * 5));
        $tp += ONE_WEEK * $weeks;
        $duration %= 9 * 5;

        my $days = int($duration / 9);
        $duration %= 9;
        $days += 2 if ($tp->day_of_week || 7) + $days > 5;
        $tp += ONE_DAY * $days;

        $duration += $decimal;

        $tp += ONE_HOUR * $duration;
        $tp += ONE_HOUR * 15 if $tp->hour >= 18 || $tp->hour < 9;
        $tp += ONE_DAY  *  2 if ($tp->day_of_week || 7) > 5;

        return $tp->strftime('%Y-%m-%d %H:%M')
    }
```

[**Kjetil Skotheim**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/kjetillll/perl/ch-2.pl)

Finally we'll stop this madness with Kjetil, who delivers a curious recursive solution employing `Time::Local`.

He notes he could have used `Business::Hours::add_seconds()` which sounds like it'd do the trick quite nicely, but instead chose the hard way.

As some of us always seem to.

Such is life.

```perl
    sub ts_plus {
        no warnings 'recursion'; #no warn at dept 100
        my($ts, $hours, $min) = (@_,0,0);
        $hours < 0       ? die "ts_plus: negative hours"
       :$hours+$min == 0 ? $ts
       :$hours > 0       ? ts_plus( $ts, 0, 60*$hours + $min )
       :                   ts_plus( ts_plus1min($ts), 0, $min - ts_in_work_hours($ts) );
    }

    sub ts_plus1min {
        my @ts = shift() =~ /\d+/g;
        my @nt = gmtime(60 + timegm(0, @ts[4,3,2], $ts[1]-1, $ts[0]));
        sprintf "%04d-%02d-%02d %02d:%02d", $nt[5]+1900, $nt[4]+1, @nt[3,2,1];
    }

    sub ts_in_work_hours {
        my @ts = shift() =~ /\d+/g;
        my @nt = gmtime( timegm(0, @ts[4,3,2], $ts[1]-1, $ts[0]-1900) );
        my($hm, $wday) = ($nt[2]*100+$nt[1], $nt[6]);
        $hm>=900 and $hm<1800 and $wday =~ /^[1-5]$/;
    }
```





## Blogs and Additional Submissions in Guest Languages for Task 2:


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/athanasius/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/athanasius/raku/ch-2.raku)


[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178//perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/jaldhar-h-vyas/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 178](https://www.braincells.com/perl/2022/08/perl_weekly_challenge_week_178.html)


[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/steve-g-lynn/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[PWC 178](https://thiujiac.blogspot.com/2022/08/pwc-178.html)


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/ulrich-rieke/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/ulrich-rieke/haskell/ch-2.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-178/ulrich-rieke/raku/ch-2.raku)


------------------------------------------





---

<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>

<center>
<h1 id="PWC178BLOGS">_________ THE BLOG PAGES _________</h1>
</center>


---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, by some miracle I somehow continue to maintain my bearings.**

**Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your Unquenchable *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC178BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *FOLLOW* these *BLOG* *LINKS*:

**( ...*don't think, trust your training, you're in the zone, just do it ...* )**


**Arne Sommer**

 * [An Imaginary Date with Raku - Arne Sommer](https://raku-musings.com/imaginary-date.html) ( *Raku* )

**Colin Crain**

 * [The Imaginary Quartet - Programming Excursions in Perl and Raku](https://colincrain.com/2022/08/21/the-imaginary-quartet) ( *Perl* )
 * [A Very Busy Dating Service - Programming Excursions in Perl and Raku](https://colincrain.com/2022/08/22/a-very-busy-dating-service) ( *Perl* )

**Flavio Poletti**

 * [PWC178 - Quater-imaginary Base - ETOOBUSY](https://etoobusy.polettix.it/2022/08/17/pwc178-quater-imaginary-base/) ( *Perl & Raku* )
 * [PWC178 - Business Date - ETOOBUSY](https://etoobusy.polettix.it/2022/08/18/pwc178-business-date/) ( *Perl & Raku* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 178](https://www.braincells.com/perl/2022/08/perl_weekly_challenge_week_178.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 178: damn numbers again! – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/08/19/PerlWeeklyChallenge178.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 178: damn numbers again! – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/08/19/PerlWeeklyChallenge178.html#task2) ( *Raku* )

**Peter Campbell Smith**

 * [QIBs and days - fun tasks for a sunny day](https://pjcs-pwc.blogspot.com/2022/08/qibs-todays-first-fun-task-as-gabor.html) ( *Perl* )

**Roger Bell_West**

 * [RogerBW's Blog: The Weekly Challenge 178: Imaginary Date](https://blog.firedrake.org/archive/2022/08/The_Weekly_Challenge_178__Imaginary_Date.html) ( *Perl & Raku* )

**Simon Green**

 * [Quater-imaginary Business Date](https://dev.to/simongreennet/quater-imaginary-business-date-58ln) ( *Perl* )

**Stephen G Lynn**

 * [PWC 178](https://thiujiac.blogspot.com/2022/08/pwc-178.html) ( *Perl & Raku* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 178 – W. Luis Mochán](https://wlmb.github.io/2022/08/15/PWC178/) ( *Perl* )
