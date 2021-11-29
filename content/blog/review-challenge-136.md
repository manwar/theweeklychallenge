---
author:       Colin Crain
date:         2021-11-29T00:00:00
description:  "Colin Crain › Perl Weekly Review #136"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #136"
image:        images/blog/p5-review-challenge-136.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-135/).* )

Welcome to the Perl review pages for **Week 136** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

---

### Why do we do these challenges?

I suppose any reasonable answers to that question would be as wide ranging and varied as the people who choose to join the team. One thing, though, is clear: it's not a competition, and there are no judges, even if there is a "prize" of sorts. About that -- I think of it more as an honorarium periodically awarded to acknowledge the efforts we make towards this strange goal. So there's no determination to find the *fastest*, or the *shortest*, or even, in some abstract way, the *best* way to go about things, although I'm certain the participants have their own aspirations and personal drives. As Perl is such a wonderfully expressive language, this provides quite a bit of fodder to the core idea of TMTOWTDI, producing a gamut of varied techniques and solutions.

Even the tasks themselves are often open to a certain amount of discretionary interpretation. What we end up with is a situation where each participant is producing something in the manner they find the most interesting or satisfying. Some team members focus on carefully crafted complete applications, thoroughly vetting input data and handling every use case they can think up. Others choose to apply themselves to the logic of the underlying puzzle and making it work in the most elegant way they can. Some eschew modules they would ordinarily reach for, others embrace them, bringing to light wheels perhaps invented years ago that happen to exactly solve the problem in front of them today.

I've been considering this question for some time and have found one binding commonality between all of us out solving these challenges each week, in that however we normally live our lives, the task in front of us more than likely has nothing to do with any of that. And I think this has great value. We all do what we do, in the real world, and hopefully we do it well. The Weekly Challenge provides us with an opportunity to do something germane to that life yet distinctly different; if we only do the things we already know how to do then we will only do the same things over and over. This is where the "challenge" aspect comes into play.

So we can consider The Weekly Challenge as providing a problem space outside of our comfort zone, as far out from that comfort as we wish to take things. From those reaches we can gather and learn things, pick and choose and bring what we want back into our lives. Personally, I think that's its greatest value of all.

---

Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due.

And that's why I'm here, to try and figure out how to do that.

Let's get on with it then, have a look and see what we find.

---

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-136/) or the summary [**recap**](/blog/recap-challenge-136/) of the challenge. But don't worry, the challenges themselves are repeated and presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please feel free to email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC136TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC136TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC136BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC136TASK1}

# Two Friendly
*Submitted by: Mohammad S Anwar*

You are given 2 positive numbers, $m and $n.

Write a script to find out if the given two numbers are Two Friendly.

Two positive numbers, m and n are two friendly when gcd(m, n) = 2 ^ p where p > 0. The greatest common divisor (gcd) of a set of numbers is the largest positive number that divides all the numbers in the set without remainder.

**Example 1**
```
    Input:  $m = 8, $n = 24
    Output: 1

    Reason: gcd(8,24) = 8 => 2 ^ 3
```
**Example 2**
```
    Input:  $m = 26, $n = 39
    Output: 0

    Reason: gcd(26,39) = 13
```
**Example 3**
```
    Input:  $m = 4, $n = 10
    Output: 1

    Reason: gcd(4,10) = 2 => 2 ^ 1
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/abigail/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/adam-russell/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/athanasius/perl/ch-1.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/bruce-gray/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/colin-crain/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/jo-37/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/laurent-rosenfeld/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/mattneleigh/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/perlboy1967/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/paulo-custodio/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/pete-houston/perl/ch-1.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/robert-dicicco/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/sgreen/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/ulrich-rieke/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/wlmb/perl/ch-1.pl)


There were 23 submissions for the first task this past week. The challenge essetially breaks down into two distinct components: one determining the greatest common divisor, and the other deciding whether that value is a power of 2.

## A LITANY of TROPES, DEDUCING a COMMON ACTION
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/wlmb/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/james-smith/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/mattneleigh/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/athanasius/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/colin-crain/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/perlboy1967/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/polettix/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/sgreen/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/laurent-rosenfeld/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/duncan-c-white/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/paulo-custodio/perl/ch-1.pl), and
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/roger-bell-west/perl/ch-1.pl)

As the analytical requirements to solve the puzzle were clear and separate, we saw a lot of consistency in approach: acquire the GCD, and then determine whether it was a power of 2. It was in the implementations of these parts where we saw all of the differences, specifically leaning into the various schemes to determine its exponential nature or lack thereof. We saw quite a variety of techniques presented to approach this sub-problem.


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/wlmb/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 136 – W. Luis Mochán](https://wlmb.github.io/2021/10/25/PWC136/)

Luis starts us off with a straightforward breakdown of the parts. Inside a loop over a list of the input candidate values, each is taken in turn and analysed. A `gcd` function applies Euclid's algorithm to determine that value, and then it's printed to a string using the `%b` format, as a binary representation. A power of 2 will consist of a single 1 followed by a number of 0s, at least one to satisfy this challenge, continuing to the end of the string. A regular expression is used to match this pattern and there we are.

```perl
    while(defined(my $x=shift @ARGV) and defined(my $y=shift @ARGV)){
        my $d=gcd($x, $y);
        my $b=sprintf "%b", $d;
        my $output=$b=~/^1(0+)$/||0;
        my $power=length($1);
        say "Inputs: $x, $y\nOutput: $output\nSince gcd($x,$y)=$d",
            $power?"=2**$power":"";
    }
    sub gcd {
        my ($x,$y)=@_;
        $y==0?$x:gcd($y,$x%$y);
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/james-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #136](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-136/james-smith)

James introduces a pre-check that the GCD is not 1 before bothering to continue, as if the two values have absolutely nothing in common they cannot get too friendly. See what I did there? I'll be here all week.

Seriously, I'm not going anywhere. Try the fish.

In other news we have an entertaining novel method for determining whether a number is a factor of two. We simply right-shift the value until the rightmost bit is set. Then the number is a power of two if and only if we're equal to 1.

This can only happen if the binary representation is that single 1 followed by a non-specific number of 0s that get shifted off. As we have eliminated 2<sup>0</sup>, the coprime solution, the number of zeroes must be positive and we are two-friendly.

That, my friends, is some seriously artful bit-work.

```perl
    sub friendly {
      my($a,$b) = @_;
      ($a,$b) = ($b,$a%$b) while $b; ## Get GCD
      return 0 if $a == 1;           ## Numbers are co-prime so not friendly
      $a>>=1 until $a&1;             ## Remove trailing binary 0 digits
      return $a == 1 ? 1 : 0;        ## For powers of two $a == 1
    }
```

[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/mattneleigh/perl/ch-1.pl)

Matthew brings us yet another method for determining powers of two, by taking the log<sub>2</sub> of the GCD and seeing whether it's a whole number. Ahh, the old invert-exponentiation trick, our good friend the logarithm. As Perl does not have a built-in log-2 operator, we use the identity, from the Perl documentation, of

```perl
    $log2 = log($n)/log(2)
```

This does, however, by itself just kick the can down the road, as how do we know whether this is whole? A variety of ideas come to mind, but Matthew subtracts the truncated integer from the original and decides whether the result is sufficiently close to 0 to make the call, acknowledging the possible floating-point errors that may arise. Epsilon approximations are always the thorny side of floating-point math. We'll revisit this technique with variant approaches later. There's kind of a lot.

For his GCD function, we have an alternate take on Euclid as well, using recursion to accomplish the necessary looping.

```perl
    sub two_friendly{
        my $m = int(shift());
        my $n = int(shift());

        my $power_two;

        # Compute the power of two of the greatest
        # common divisor
        $power_two = log(gcd($m, $n)) / log(2);

        # If $power_two looks like an integer
        # (accounting for round-off error...) then
        # the GCD of $m and $n was a power of two
        if(abs($power_two - int($power_two)) < 0.0000000001){
            return(1);
        } else{
            return(0);
        }
    }

    sub gcd{
        my $a = shift();
        my $b = shift();

        if($b){
            return(gcd($b, $a % $b));
        } else{
            return($a);
        }
    }
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/athanasius/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/athanasius/raku/ch-1.raku)

The monk reaches up on the shelf to the `ntheory` module, an alias for `Math::Prime::Util`, to get access to a very fast XS compiled `gcd()` routine. Why, indeed, reinvent the wheel? Which leaves the remaining question of whether or not the GCD is a power of two. For this they calculate the integer truncation of the log<sub>2</sub> of the GCD plus a rounding factor, 0.5. If 2 raised to the power of  the truncated value  equals the GCD then the original logarithm was whole.

A couple of pockets are made available to take notes on the state: a `$friendly` variable is a simple 1/0 flag indicating feelings of amiability, and a `$reason` variable holds an explanitory string set to explain the state of the friendship.

```perl
    my $gcd      = gcd( $m, $n );

    if ($gcd == 1)
    {
        $reason = '2 ^ 0';
    }
    else
    {
        my $log2 = int( (log( $gcd ) / log( 2 )) + 0.5 );

        if ($gcd == 2 ** $log2)
        {
            $friendly = 1;
            $reason   = "2 ^ $log2";
        }
    }
```

[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/colin-crain/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/colin-crain/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Don't Get Too Friendly — It's a Series of Lies - Programming Excursions in Perl and Raku](https://colincrain.com/2021/10/31/dont-get-too-friendly-its-a-series-of-lies/)

For my own solution, I broke the problem into its two halves and started writing subroutines. I whipped off a quick version of Euclid for the GCD, and started thinking about all the clever ways I could think of to see whether a number was a power of two. I settled of three to implement: dividing out 2s as long as there was no remainder, until we reached either 1 or some other value; taking the log<sub>2</sub> value and examining it for a decimal point; or converting the number to a binary string and counting the incidence of 1s — a homemade `popcount` function.

When I was done, however, all the sub-solutions were quite compact, so I decided in the end to inline the GCD function and add the dividing down method to make a single routine performing all the steps required. I left the subroutines in for reference, and because they're cool, even unused.

```perl
    sub is_creepy ( $m, $n ) {
    ## is $m too friendly towards $n? Does it need to BTFO? Boundaries, people!
        ( $m, $n ) = ( $n, $m % $n ) while $n > 0;      ## gcd
        $m /= 2 until $m % 2;                           ## power of 2?
        return $m == 1 ? 1 : 0;
    }

    ## the subroutines that form the basis for is_creepy()
    sub gcd ( $m, $n ) {
        ( $m, $n ) = ( $n, $m % $n ) while $n > 0;
        return $m;
    }

    sub power_of_2_div ( $num ) {
        $num /= 2 until $num % 2;
        return $num == 1 ? 1 : 0;
    }

    sub power_of_2_log ( $num ) {
        return ((log($n) / log(2)) =~ /\./ ? 0 : 1);
    }

    sub power_of_2_popcount ( $num ) {
        use List::Util qw(sum);
        sum( split //, sprintf "%b", $num ) == 1 ? 1 : 0;
    }
```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/perlboy1967/perl/ch-1.pl)

Niels presents us with another compact recursive version of Euclid, and takes the log of the result. If the value is the same as its trunctated integer version, it is whole and thus an even power of the base, in this case 2. I honestly don't think we need to do anything more than this.

```perl
    my $gcd = gcd($M,$N);
    my $exponent = log($gcd)/log(2);
    my $isTwoFriendly = (int($exponent) == $exponent) && ($exponent > 0);

    sub gcd ($$) {
      return 0 == $_[1] ? $_[0] : gcd($_[1], $_[0] % $_[1]);
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC136 - Two Friendly - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/10/27/pwc136-two-friendly/)

Flavio presents a set of 4 subroutines, each tackling a single action in the procedure. It really can be viewed as two routines and two wrappers, which might look more familiar conceptually to the other techniques. In four lines:
* for the GCD, we put Euclid's algorithm in a `while` lopp until it finishes
* for the power of two, we divide down until we get a remainder, in a very interesting manner
* we wrap that power of two routine to verify our power raised is greater than 0
* we wrap everything in a control structure to hold the logic together to reveal a result

The power of 2 routine is particularly interesting, as it bit-shifts right while there is no remaineder and while the function called recursively returns true. It's quite a tightly-wound way to structure that particular logic, which is dividing by 2 as long as there's no remainder, but succeeding if the final value is 1.

```perl
    say two_friendly(@ARGV ? @ARGV[0, 1] : (8, 24)) ? 1 : 0;
    sub two_friendly ($m, $n) { positive_power2(gcd($m, $n)) }
    sub positive_power2 ($x) { $x > 1 && is_power2($x) }
    sub is_power2 ($x) { $x == 1 || $x > 0 && !($x % 2) && is_power2($x >> 1) }
    sub gcd ($A, $B) { ($A, $B) = ($B % $A, $A) while $A; $B }
```

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/sgreen/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 136](https://dev.to/simongreennet/weekly-challenge-136-12m7)

Simon eschews the taciturn, preferring instead to provide a running commentary for those following along at home. I always find this behavior a welcome respite, and a chance to do a sanity check, to make sure I'm explaining things well. His algorithm for finding whether a value is a power of two is quite simple: he simply starts counting up an exponent until the product is either the value or exceeds it. As the number of powers of 2 available is limited by the operating system size of an unsigned int, the number of values to check is relatively  small. This hardly even counts as brute force, but of course it is, after a fashion. We could even hard-code the permissable values into a list, but no one did this.

```perl
    sub _is_pot {
        # Returns whether the number is a power of two.
        my $n = shift;

        # Count upwards from 1 until we find a solution or go bust
        my $i = 0;

        while ( ++$i ) {
            my $p = 2**$i;
            return 1 if $p == $n;
            return 0 if $p > $n;
        }
    }
```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/laurent-rosenfeld/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 136: Two Friendly and Fibonacci Sequence |aurent_r](http://blogs.perl.org/users/laurent_r/2021/10/perl-weekly-challenge-136-two-friendly-and-fibonacci-sequence.html)

Laurent provides anopther demonstration of a technique I am quite partial to, that of dividing out 2s as long as there is no remainder. If the final result is 1, we are friendly, if not, then we have an enemy to be feared.

He, um, didn't exactly phrase it like that.

```perl
    sub is_friendly {
        my $gcd = gcd $_[0], $_[1];
        return 0 if $gcd <= 1;
        $gcd /= 2 while $gcd % 2 == 0;
        return $gcd == 1 ? 1 : 0;
    }
```

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/duncan-c-white/perl/ch-1.pl)

Duncan gives us a `Function::Parameters` function, `fun`, with a loop implementation of Euclid in a compact, easy-to-read form. For his power-of-two section, he opts to check values until the GCD found is either met or exceeded. I almost wonder whether all of these logarithmic and dividing down solutions are over-thinking the problem, if the number of possible values is limited by the size of the an unsigned int. It is a gracefully simple solution.

```perl
    use Function::Parameters;

    fun gcd( $a, $b )
    {
            while( $b != 0 )
            {
                    ( $a, $b ) = ( $b, $a % $b );
            }
            return $a;
    }

    my $ispower = 0;
    for( my $twop = 2; $twop <= $gcd; $twop *= 2 )
    {
        $ispower++ if $twop == $gcd;
    }
```

[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/paulo-custodio/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/paulo-custodio/python/ch-1.py)

Paulo combines importing the `gcd()` function from `ntheory` with a further simplification of the already quite straightforward incrementing exponent method, here just multiplying by 2 until we meet or exceed the GCD. This makes for a singularly compact solution.

```perl
    use Modern::Perl;
    use ntheory 'gcd';

    say is_power_2(gcd(@ARGV));

    sub is_power_2 {
        my($n) = @_;
        my $p = 2;
        while ($p <= $n) {
            return 1 if $p==$n;
            $p *= 2;
        }
        return 0;
    }
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: Perl Weekly Challenge 136: Fibonacci Friends](https://blog.firedrake.org/archive/2021/10/Perl_Weekly_Challenge_136__Fibonacci_Friends.html)

And finally, we have Roger, with yet another method for determining whether a number is a power of two. This resembles using a version of `popcount`, as any power of two in binary will be a single set bit followed by a number of zeros. The popcount version I made sums the digits; the only way the sum can be 1 is if this is the construction. Roger however avoids the trouble of summing, in this case doing something simpler: when we subtract 1 from a power of 2 we will have a sequence of all 1s one less bit in length. So if we perform a bitwise AND on these two values there will be no overlap at all, and the result will be 0. Very clever indeed.

```perl
    sub ispower2 {
      my $n=shift;
      if ($n<2) {
        return 0;
      }
      return ($n & ($n-1))==0;
    }
```


## Blogs and Additional Submissions in Guest Languages for Task 1:

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/abigail/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/abigail/awk/ch-1.gawk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/abigail/bash/ch-1.sh), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/abigail/bc/ch-1.bc), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/abigail/c/ch-1.c), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/abigail/go/ch-1.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/abigail/java/ch-1.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/abigail/lua/ch-1.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/abigail/node/ch-1.js), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/abigail/pascal/ch-1.p), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/abigail/python/ch-1.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/abigail/r/ch-1.r), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/abigail/ruby/ch-1.rb), [Scheme](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/abigail/scheme/ch-1.scm), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/abigail/tcl/ch-1.tcl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 136: Two Friendly](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-136-1.html)


[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/adam-russell/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/adam-russell/prolog/ch-1.p)


&nbsp;&nbsp;**blog writeup:**
[Friendly Fibonacci Summands — Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2021/10/31/perl)

&nbsp;&nbsp;**blog writeup:**
[Friendly Fibonacci Summands — Prolog — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2021/10/31/prolog)


[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/arne-sommer/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/arne-sommer/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Friendly Fibonacci with Raku and Perl](https://raku-musings.com/friendly-fibonacci.html)


[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/bruce-gray/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/bruce-gray/raku/ch-1.raku)


[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/dave-jacoby/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[The Sequential Friendly Book: The Weekly Challenge #136 | Committed to Memory](https://jacoby.github.io/2021/10/25/the-sequential-friendly-book-the-weekly-challenge-136.html)

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/jaldhar-h-vyas/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/jaldhar-h-vyas/raku/ch-1.sh)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 136](https://www.braincells.com/perl/2021/10/perl_weekly_challenge_week_136.html)


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/ulrich-rieke/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/ulrich-rieke/cpp/ch-1.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/ulrich-rieke/haskell/ch-1.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/ulrich-rieke/raku/ch-1.raku)


------------------------------------------



---

# TASK 2 {#PWC136TASK2}

# Fibonacci Sequence
*Submitted by: Mohammad S Anwar*
You are given a positive number $n.

Write a script to find how many different sequences you can create using Fibonacci numbers where the sum of unique numbers in each sequence are the same as the given number.

Fibonacci Numbers: 1,2,3,5,8,13,21,34,55,89, …

**Example 1**
```
    Input:  $n = 16
    Output: 4

    Reason: There are 2 possible sequences that can be created
            using Fibonacci numbers
              (3 + 13), (1 + 2 + 13),
              (3 + 5 + 8) and (1 + 2 + 5 + 8)
```

**Example 2**
```
    Input:  $n = 9
    Output: 2

    Reason: There are 2 possible sequences that can be created
            using Fibonacci numbers
              (1 + 3 + 5) and (1 + 8)
```

**Example 3**
```
    Input:  $n = 15
    Output: 2

    Reason: There are 2 possible sequences that can be created
            using Fibonacci numbers
              (2 + 5 + 8) and (2 + 13)
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/abigail/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/adam-russell/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/arne-sommer/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/athanasius/perl/ch-2.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/bruce-gray/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/jo-37/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/laurent-rosenfeld/perl/ch-2.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/mohammad-anwar/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/perlboy1967/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/paulo-custodio/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/pete-houston/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/sgreen/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/ulrich-rieke/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/wlmb/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/wanderdoc/perl/ch-2.pl)


There were 24 submissions for the second task this past week. As Mohammad noted, this task was very similar to [PWC 077](/blog/review-challenge-077/), which I also reviewed, so interested parties may find further reading there. But read this first; there was some overlap, but also some novel and very interesting approaches presented. Generally the construction of the Fibonacci sequences weren't terribly interesting (with a few notable exceptions), and the principle focus was on the arrangements to obtain the desired sum.

## there are MANY ROADS to ASCEND THE MOUNTAIN...
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/mohammad-anwar/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/laurent-rosenfeld/perl/ch-2.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/bruce-gray/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/dave-jacoby/perl/ch-2.pl),
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/abigail/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/arne-sommer/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/pete-houston/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/jo-37/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/cheok-yin-fung/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/e-choroba/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/adam-russell/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/wanderdoc/perl/ch-2.pl)

... as there are streams descending. Select your waterfall.

[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/mohammad-anwar/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/mohammad-anwar/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/mohammad-anwar/raku/ch-2.raku), [Swift](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/mohammad-anwar/swift/ch-2.swift)

We'll start the discussion today with Mohammad's submission, who starts out noting immediately the similarities between this task and task #1 from week 77, which also dealt with summing unique Fibonacci numbers. As such he draws on that answer, as any reasonable person might.

The root idea here is to create a list of all possible values in the Fibonacci sequence less than the target, then assemble and sum unique combinations of these values and find the ones that fit. Mohammad imports `Algorithm::Combinatorics` for its `combinations` function, a class favorite around here.

```perl
    sub fibonacci_sequence {
        my ($sum) = @_;

        my $fibonacci     = fibonacci_series_upto($sum);
        my $fibonacci_sum = [];
        foreach my $i (1 .. $sum) {
            last if ($i > @$fibonacci);
            foreach my $comb (combinations($fibonacci, $i)) {
                my $_sum = 0;
                $_sum += $_ for @$comb;
                push @$fibonacci_sum, $comb if ($_sum == $sum);
            }
        }

        return scalar @$fibonacci_sum;
    }
```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/laurent-rosenfeld/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/laurent-rosenfeld/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 136: Two Friendly and Fibonacci Sequence |aurent_r](http://blogs.perl.org/users/laurent_r/2021/10/perl-weekly-challenge-136-two-friendly-and-fibonacci-sequence.html)

Laurent also takes an exhaustive approach to summing all subsequence combinations and selecting the matching values. He does, however, use his own recursive routine to generate the combinations. Matching selections from the sequence are selected, and those exceeding are rejected, and those that can be still augmented are run through again.

As a little lagniappe, we print out the lists that sum correctly.

```perl
    sub combine {
        my $target = shift;
        my $count = shift;
        my @out = @{$_[0]};
        my @in  = @{$_[1]};
        return if sum @out > $target;
        push @comb, [@out] and return if sum(@out) == $target;
        return if $count == 0;
        for my $i (0..$#in) {
            combine ($target, $count - 1, [@out, $in[$i]], [@in[$i+1..$#in]]);
        }
    }
```

[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/bruce-gray/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/bruce-gray/raku/ch-2.raku)

The Fibonacci sequence, of course, has a long and storied, mysterious history full of unexpected quirks and mathematical oddities that has kept it at the forefront of number theory explorations for centuries.

In other words, for those so inclined, there's a lot of meat to be had.

There is, for instance, a known integer sequence in the Online Encyclopedia of Integer Sequences, [A000119](https://oeis.org/A000119), described as "Number of representations of n as a sum of distinct Fibonacci numbers". Astute observers will also note that this is only sequence number 119 of some 350,000 entries in a continually growing database, evidence of the importance given the sequence in these pursuits.

By it's description, the data from this sequence seems to be exactly what is being requested. A function is provided, credited to Reinhard Zumkeller:
```
    a(n) = f(n,1,1) with f(x,y,z) = if x<y then 0^x else f(x-y,y+z,y)+f(x,y+z,y)
```

This impressively compact solution implements that function:

```perl
    sub f ( $x, $y, $z ) {
        return 0 ** $x if $x < $y;

        return f( $x - $y, $y + $z, $y )
             + f( $x     , $y + $z, $y );
    }
    sub Fibonacci_partitions ( $n ) { return f($n, 1, 1) }
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/dave-jacoby/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[The Sequential Friendly Book: The Weekly Challenge #136 | Committed to Memory](https://jacoby.github.io/2021/10/25/the-sequential-friendly-book-the-weekly-challenge-136.html)

Dave "Recursion" Jacoby, in his repeatedly-cursed heart, plays the recursion card.

It is very effective.

In fact he plays it twice, as what's a good Fibonacci generation algorithm without a nip of recursion to lighten the mood? Now you're getting in the holiday spirit!

```perl
    sub recursion ( $n, $ref, $x = [] ) {
        my @output;
        my $depth   = 1 + scalar $x->@*;
        my $sum     = sum0 $x->@*;
        my $nex->@* = sort $ref->@*;

        return undef if $sum > $n;

        if ( $sum == $n ) {
            $x->@* = sort { $a <=> $b } map { int $_ } $x->@*;
            my $answer = join ' + ', $x->@*;
            return $answer;
        }

        for my $i ( 1 .. scalar $nex->@* ) {
            my $v = shift $nex->@*;
            my $y->@* = $x->@*;
            push $y->@*, $v;

            my @return = recursion( $n, $nex, $y );
            push @output, @return;
            push $nex->@*, $v;
        }
        return uniq sort grep { defined } @output;
    }
```

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/abigail/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/abigail/awk/ch-2.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/abigail/bash/ch-2.sh), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/abigail/bc/ch-2.bc), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/abigail/c/ch-2.c), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/abigail/go/ch-2.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/abigail/java/ch-2.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/abigail/lua/ch-2.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/abigail/node/ch-2.js), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/abigail/pascal/ch-2.p), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/abigail/python/ch-2.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/abigail/r/ch-2.r), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/abigail/ruby/ch-2.rb), [Scheme](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/abigail/scheme/ch-2.scm), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/abigail/tcl/ch-2.tcl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 136: Fibonacci Sequence](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-136-2.html)

Abigail presents us with a compact implementation of a recursive solution, as they explain in their notes:

 * If `$this_fib` is larger than `$target`, we have no way to make the target number, so we return 0
 * If `$this_fib` is equal to `$target`, we can only make the target in one way, so we return 1
 * Else, we recurse. First, we count the number of ways to make `$target - $this_fib` with Fibonnaci numbers larger than `$this_fib`, then we count the number of ways making `$target` with Fibonnaci numbers larger than `$this_fib`. We return the sum of these counts.

Of note a `state` variable is added to the subroutine to hold a cache for results, avoiding excessive recursive calls. Using the `state` declaration this way allows one to place the cache within the subroutine itself, instead of using a global value, which encapsulates everything quite nicely.

```perl
    sub count;
    sub count ($target, $this_fib = 1, $prev_fib = 1) {
          state $cache = {};
          $$cache {$target, $this_fib} //=
              $this_fib >  $target ? 0
            : $this_fib == $target ? 1
            : count ($target - $this_fib, $this_fib + $prev_fib, $this_fib) +
              count ($target,             $this_fib + $prev_fib, $this_fib)
    }
```

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/arne-sommer/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/arne-sommer/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Friendly Fibonacci with Raku and Perl](https://raku-musings.com/friendly-fibonacci.html)

The most common way to approach the problem was to use some form of combinatorics to examine all possible or plausible combinations from the sequence. Here Arne gives us another solution using `Algorithm::Combinatorics` for its `combinations` function.

```perl
    for my $size (1 .. @fib)
    {
      for my $perm (combinations(\@fib, $size))
      {
        my $sum = sum(@$perm);

        print ": Sequence: ", join(", ", @$perm), " = $sum" if $verbose;

        if ($sum == $n)
        {
          $count++;
          say " match" if $verbose;
        }
        else
        {
          say "" if $verbose;
        }
      }
    }
```

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/pete-houston/perl/ch-2.pl)

Pete presents the problem as a special case of the more general Knapsack Problem, where given a number of items of various weights and values, we are asked to fill a backpack with a set maximum weight to the highest value. In this case the value is set equal to its weight, so we are looking for subsets of items that sum to less than the maximum, optimized to approach that maximum. As the *best* solution to this problem might leave extra space available, and hence sum to less than the maximum allowed, we need to check the presented solutions to actually equal the target number.

The module `Algorithm::Knapsack` provides a routine to solve this specific case of the problem. We need only to create a list of Fibonacci numbers less than or equal to the target, and feed it to the Knapsack object thingy, and all the best results will be computed. These may be multiple in the case of a tie. Those solutions that sum to the correct amount are counted.

```perl
    use Algorithm::Knapsack;
    use List::Util 'sum';

    my $tot = shift;

    # Construct a big enough Fibonacci sequence. No duplicates!
    my @fib = (1, 2);
    push @fib, $fib[-1] + $fib[-2] while $fib[-1] + $fib[-2] <= $tot;

    # Process
    my $sack = Algorithm::Knapsack->new (
        capacity => $tot,
        weights  => \@fib,
    );
    $sack->compute;

    my $combos = grep { sum (@fib[@$_]) == $tot } $sack->solutions;

    # Output
    print "$combos\n";
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/jo-37/perl/ch-2.pl)

Jorg presents us a with a brace of solutions, a sophisticated mathematical analysis and a brute-force method to check it.

The Fibonacci sequence can be considered a special case of a more general set of sequences holding the same recurrence relations, specifically that the type-1 case of Lucas numbers,
**U**(1,-1) is equivalent to the Fibonacci sequence. He can then use a function from the impressive `Math::Prime::Util` library, `lucas_u()`, to produce Fibonacci numbers extremely quickly, while aggregating a count of solution sets, recursively adding another value to various partial sequences and recursively calling the function again to fill the remainder.

```perl
    sub count_fib_seq ($n, $k = 2) {
        my $count = 0;
        while () {
            my $fib = lucasu 1, -1, $k;
            return $count + ($fib == $n) if $fib >= $n;
            $count += count_fib_seq($n - $fib, ++$k);
        }
    }
```

For the checking function he uses a very interesting variation of using individual set bits of a binary number as flags to select individual Fibonacci numbers from the sequence for inclusion in a given combination. This is all well and good, but here Jorg brings us the `todigits()` function from the aforementioned module to facilitate the whole breaking-apart action, where the bits are multiplied by their matching Fibonacci number and the list reduced to compute a sum.

```perl
    sub scan_fib_seq ($n) {
        my (@fib, $f) = (1, 1);
        push @fib, $f while ($f = $fib[-2] + $fib[-1]) <= $n;
        shift @fib;

        scalar grep {
            $n == reduce_0 {$a += $fib[$_] * $b} todigits($_, 2, @fib)
        } 1 .. 2 ** @fib - 1;
    }
```


[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/cheok-yin-fung/perl/ch-2.pl)

CY brings us another formula from OEIS [A000119](https://oeis.org/A000119), this one [an analysis by one J. Berstel](http://www-igm.univ-mlv.fr/~berstel/Articles/2001ExerciceAldo.pdf) on using matrices to resolve transformative substitutions of equivalent representations of the same integer value in a the Fibonacci Number System.

The *wh-what?* you might well say. Oh, that. Right. The Fibonacci Number System is a representational place system where the position of a digit represents not a fixed power multiple of a base, but rather the Fibonacci value at that numerical index. Which, if you think about it, albeit truly weird, is exactly what we're doing here: building numbers from Fibonacci numbers. The equivalence in question is that because of the Fibonacci recurrence relation, F(*n*) = F(*n*-1) + F(*n*-2), and that positional systems work ascending from right to left, in the FNS the two values 100 and 011 are the same. Thus if we represent an integer value in the system, we can enact a system of transformations on the representation to count all the ways to express it.

Sounds easy when you put it like that, doesn't it?

Practically it's a bit of a mess, which is where Berstel's work comes in.

CY's implementation is fast and hard to summarize; Berstel analyses the problem in terms of matrices. Examine the code and the source, it's kind of amazing.

Note `@FIBSEQ` is a large precomputed section of the Fibonacci sequence.

```perl
    say num_of_fib_repr($ARGV[0]) if defined($ARGV[0]);

    sub num_of_fib_repr {
        my $num = $_[0];
        my @zff = zeckendorff_index($num)->@*;
        push @zff, 0;
        my @arr = map {  $zff[$_] - $zff[$_+1] - 1 } 0..$#zff-1;
        my $matrix = reduce {multi_sq($a,$b)} map {mat($_)} @arr;
        return $matrix->[0][0] + $matrix->[1][0];
    }

    sub mat {
        my $d = $_[0];
        return [ [1, 1], [ int($d/2), int(($d+1)/2) ] ];
    }

    sub multi_sq {
        my $mat0 = $_[0];
        my $mat1 = $_[1];
        return [
          [
            $mat0->[0][0] * $mat1->[0][0] + $mat0->[0][1] * $mat1->[1][0],
            $mat0->[0][0] * $mat1->[0][1] + $mat0->[0][1] * $mat1->[1][1]
          ],
          [
            $mat0->[1][0] * $mat1->[0][0] + $mat0->[1][1] * $mat1->[1][0],
            $mat0->[1][0] * $mat1->[0][1] + $mat0->[1][1] * $mat1->[1][1]
          ]
        ]
    }

    sub zeckendorff_index {
        my $num = $_[0];
        my @arr = ();
        my $s = get_largest_fib_ind($num);
        while ($num != 0) {
            if ($num >= $FIBSEQ[$s]) {
                $num = $num - $FIBSEQ[$s];
                push @arr, $s;
            }
            $s--;
        }
        return [@arr];
    }

    sub get_largest_fib_ind {
        my $num = $_[0];
        my $i = 1;
        while ($num > $FIBSEQ[$i]) {
            $i++;
        }
        return $i;
    }
```


[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/e-choroba/perl/ch-2.pl)

Choroba presents us with not one but two solutions to the task, both impressive it their way. In the first, an incrementing interator is used to produce sequential binary number strings, and the bits of these numbers are used to indicate whether a given index of a list of Fibonacci numbers is selected in a combination. Although we've seen this idea before, this is a quite novel implementation.

```perl
    my @F = (1, 2);
    sub fibonacci_sequence_indicator {
        my ($n) = @_;
        my $count = 0;
        my $indicator = 1;
        my $bin = 1;
        while ($F[ length($bin) - 1 ] <= $n) {
            push @F, $F[-2] + $F[-1] if @F <= length $bin;
            my $sum = sum(@F[ grep substr($bin, -$_ - 1, 1),
                                   0 .. length($bin) - 1 ]);

            ++$count if $sum == $n;
            ++$indicator;
            $bin = sprintf '%b', $indicator;
        }
        return $count
    }
```

In the second solution, we are presented with a unique take on the problem, using dynamic programming to build up a hash of partial solutions: starting with a kernal of the keys "1" and "2", each key points to an array of arrays containing all Fibonacci constructions summing to that key. The dynamic part is that as new keys are constructed these arrays can be substituted for components in the breakdown of the new number instead of recomputing the combinations, so bit by bit the hash is expanded from those parts already computed. When the hash reaches the desired value we will have computed the matching combinations.

```perl
    my %fs = (1 => [[1]], 2 => [[2]]);
    sub fs_dynamic {
        my ($n) = @_;
        return @{ $fs{$n} } if exists $fs{$n};

        push @F, $F[-2] + $F[-1] while $F[-1] < $n;
        my @result;
        for my $f (grep $_ <= $n, @F) {
            no warnings 'recursion';
            my @without = grep { ! grep $_ == $f, @$_ } fs_dynamic($n - $f);
            next if @without && $f < $without[0][0];

            push @result, map [$f, @$_], @without;
            push @result, [$f] if $n == $f;
        }
        return @{ $fs{$n} = \@result }
    }
```




[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/adam-russell/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/adam-russell/prolog/ch-2.p)


&nbsp;&nbsp;**blog writeup:**
[Friendly Fibonacci Summands — Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2021/10/31/perl)

&nbsp;&nbsp;**blog writeup:**
[Friendly Fibonacci Summands — Prolog — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2021/10/31/prolog)

In Set Theory, a *powerset* is the set of all subsets of a set. Which. practically speaking, is the set of all possible selection groups from a given set, including selecting no memebers at all. Exhaustively, considering the set of Fibonacci numbers less than a certain value, this will of course include every combination of values that sum to the target, as it includes all combinations of items. The ones we want will certainly be mixed in, and all we need do it find them.

The module `Data::PowerSet` provides a handy `powerset()` routine to provide this functionality. A an array of arrays is returned, and a `grep` function is used to filter for those lists that sum to the given value.

```perl
    use Data::PowerSet q/powerset/;

    sub fibonacci_sum{
        my($n) = @_;
        my $powerset = powerset(fibonacci_below_n($n));
        say "@$_" for @$powerset ;
        my @summands = grep {
            my $fibonaccis = $_;
            my $sum = 0;
            map{
                $sum += $_;
            } @{$fibonaccis};
            $sum == $n;
        } @{$powerset};
        return @summands;
    }
```

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/wanderdoc/perl/ch-2.pl)

Finally our itinerant doctor gives us a fine example of the closed-form method for constructing Fibonacci numbers from the sequence, known as Binet's formula. In this example they are using, when we substitute in some constants:

```perl
    int( (( ((1 + sqrt(5)) / 2 )** $n) / sqrt(5)) + 0.5 )
```

It looks a bit of a mess here but that's mostly because linear text is quite lacking in the ability to express formulae. Of note, (I'll spell it out) one plus the square root of five over two is commonly referred to by the Greek letter phi, or φ. This is the "golden ratio" of lore.

For the practical solving portion of the solution, we have a recursive technique where we grow solutions up from seeds, adding Fibonacci values to a budding sequence fragment and applying the by-now familiar set of rules with regards to the sum: if we're over we're busted, it we match we have a winner, and if are less than the total we send the partial solution recursively around again.

```perl
    use constant {ROOT5 => sqrt(5)};
    use constant { GR => (1 + ROOT5) / 2 };

    sub solve
    {
         no warnings 'recursion';
         my ($solution, $remain, @arr) = @_;


         if ( $remain == 0 )
         {
              my $s = deep_copy($solution);
              push @SOLS, $s;
         }

         for my $idx ( 0 .. $#arr )
         {

              next if ( $arr[$idx] > $remain );
              next if ( $solution->[-1] and $solution->[-1] == $arr[$idx] );
              push @{$solution}, $arr[$idx];
              $remain -= $arr[$idx];
              my $next = $idx == $#arr ? $#arr : $idx + 1;
              if ( solve($solution, $remain, @arr[$next .. $#arr] ) )
              {
                   return $solution;

              }
              $remain += pop @{$solution};
         }
         return 0;
    }

    sub fib
    {
         my $n = $_[0];
         die "Need a positive integer!$/" unless ($n > 0 and $n == int($n));
         return int( ((GR ** $n) / ROOT5) + 0.5 );
    }
```



## Blogs and Additional Submissions in Guest Languages for Task 2:


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/athanasius/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/athanasius/raku/ch-2.raku)


[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/colin-crain/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/colin-crain/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Don't Get Too Friendly — It's a Series of Lies - Programming Excursions in Perl and Raku](https://colincrain.com/2021/10/31/dont-get-too-friendly-its-a-series-of-lies/)


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC136 - Fibonacci Sequence - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/10/28/pwc136-fibonacci-sequence/)


[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/jaldhar-h-vyas/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/jaldhar-h-vyas/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 136](https://www.braincells.com/perl/2021/10/perl_weekly_challenge_week_136.html)


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/james-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #136](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-136/james-smith)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/laurent-rosenfeld/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/laurent-rosenfeld/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 136: Two Friendly and Fibonacci Sequence |aurent_r](http://blogs.perl.org/users/laurent_r/2021/10/perl-weekly-challenge-136-two-friendly-and-fibonacci-sequence.html)


[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/paulo-custodio/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/paulo-custodio/python/ch-2.py)


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/roger-bell-west/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/roger-bell-west/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: Perl Weekly Challenge 136: Fibonacci Friends](https://blog.firedrake.org/archive/2021/10/Perl_Weekly_Challenge_136__Fibonacci_Friends.html)


[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/sgreen/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 136](https://dev.to/simongreennet/weekly-challenge-136-12m7)


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/ulrich-rieke/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/ulrich-rieke/haskell/ch-2.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/ulrich-rieke/raku/ch-2.raku)


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-136/wlmb/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 136 – W. Luis Mochán](https://wlmb.github.io/2021/10/25/PWC136/)









---

# BLOGS {#PWC136BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, by some miracle I somehow continue to maintain my bearings.**

**Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your Unquenchable *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC136BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *FOLLOW* these *BLOG* *LINKS*:

**( ...*don't think, trust your training, you're in the zone, just do it ...* )**


**Abigail**

 * [Perl Weekly Challenge 136: Two Friendly](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-136-1.html) ( *Perl* )
 * [Perl Weekly Challenge 136: Fibonacci Sequence](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-136-2.html) ( *Perl* )

**Adam Russell**

 * [Friendly Fibonacci Summands — Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2021/10/31/perl) ( *Perl* )
 * [Friendly Fibonacci Summands — Prolog — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2021/10/31/prolog) ( *Prolog* )

**Arne Sommer**

 * [Friendly Fibonacci with Raku and Perl](https://raku-musings.com/friendly-fibonacci.html) ( *Perl & Raku* )

**Colin Crain**

 * [Don't Get Too Friendly — It's a Series of Lies - Programming Excursions in Perl and Raku](https://colincrain.com/2021/10/31/dont-get-too-friendly-its-a-series-of-lies/) ( *Perl & Raku* )

**Dave Jacoby**

 * [The Sequential Friendly Book: The Weekly Challenge #136 | Committed to Memory](https://jacoby.github.io/2021/10/25/the-sequential-friendly-book-the-weekly-challenge-136.html) ( *Perl* )

**Flavio Poletti**

 * [PWC136 - Two Friendly - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/10/27/pwc136-two-friendly/) ( *Perl & Raku* )
 * [PWC136 - Fibonacci Sequence - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/10/28/pwc136-fibonacci-sequence/) ( *Perl & Raku* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 136](https://www.braincells.com/perl/2021/10/perl_weekly_challenge_week_136.html) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #136](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-136/james-smith) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 136: Two Friendly and Fibonacci Sequence |aurent_r](http://blogs.perl.org/users/laurent_r/2021/10/perl-weekly-challenge-136-two-friendly-and-fibonacci-sequence.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 136: not too hard – Luca Ferrari – Open Source advocate, humaneing](https://fluca1978.github.io/2021/10/25/PerlWeeklyChallenge136.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 136: PostgreSQL Solutions – Luca Ferrari – Open Source advocate, humaneing](https://fluca1978.github.io/2021/10/29/PerlWeeklyChallenge136PostgreSQL.html#task1) ( *PostgreSQL* )

**Roger Bell_West**

 * [RogerBW's Blog: Perl Weekly Challenge 136: Fibonacci Friends](https://blog.firedrake.org/archive/2021/10/Perl_Weekly_Challenge_136__Fibonacci_Friends.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 136](https://dev.to/simongreennet/weekly-challenge-136-12m7) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 136 – W. Luis Mochán](https://wlmb.github.io/2021/10/25/PWC136/) ( *Perl* )
