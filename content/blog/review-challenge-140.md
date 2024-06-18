---
author:       Colin Crain
date:         2021-12-28T00:00:00
description:  "Colin Crain › Perl Weekly Review #140"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #140"
image:        images/blog/p5-review-challenge-140.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-139/).* )

Welcome to the Perl review pages for **Week 140** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-140/) or the summary [**recap**](/blog/recap-challenge-140/) of the challenge. But don't worry, the challenges themselves are repeated and presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please feel free to email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC140TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC140TASK2)   &nbsp;  &nbsp;  &nbsp;       •   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC140BLOGS)    &nbsp;  &nbsp;  &nbsp;       •

---

# TASK 1 {#PWC140TASK1}

# Add Binary
*Submitted by: Mohammad S Anwar*

You are given two decimal-coded binary numbers, $a and $b.

Write a script to simulate the addition of the given binary numbers.

The script should simulate something like $a + $b. (operator overloading)

**Example 1**
```
    Input: $a = 11; $b = 1;
    Output: 100
```
**Example 2**
```
    Input: $a = 101; $b = 1;
    Output: 110
```
**Example 3**
```
    Input: $a = 100; $b = 11;
    Output: 111
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/abigail/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/adam-russell/perl/ch-1.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/alexander-pankoff/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/athanasius/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/colin-crain/perl/ch-1.pl),
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/cristian-heredia/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/polettix/perl/ch-1.pl),
[**Jake**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/jake/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/jo-37/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/lubos-kolouch/perl/ch-1.pl),
[**Mano Chandar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/mano-chandar/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/mattneleigh/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/perlboy1967/perl/ch-1.pl),
[**Olivier Delouya**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/olivier-delouya/perl/ch-1.sh),
[**Paul Fajman**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/paul-fajman/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/paulo-custodio/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/pete-houston/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/peter-campbell-smith/perl/ch-1.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/robert-dicicco/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/sgreen/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/wlmb/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/wanderdoc/perl/ch-1.pl)

I would say the description for this first challenge is more broadly sketched than usual, more of a concept than a specification.
The use of the word "like" in the description introduces a certain ambiguity into what exactly is being requested here: Are we being asked to overload the "+" addition operator to make it seamlessly work on binary strings? Or just something *like* this, and perhaps we can create our own new operator that accomplishes the goal? And isn't an operator just another function? (*narrator's voice: It is, you know, logically...*)

For example, in Reverse Polish Notation we would write the example as "**a b +**". The placement of the plus sign infix is merely convention and implemented in the specific design on the language — we could reasonably argue that all addition operations are self-similar and hence *like* each other. Coupling in the word *simulate* only adds to the ambiguity, as what exactly is the difference between simulating a thing and just doing the thing itself? I once saw Jean Baudrillard speak at the Guggenheim Museum in NYC on, amongst other things, that very subject: [the object and its simulation](https://en.wikipedia.org/wiki/Simulacra_and_Simulation). But I digress.

The upshot is that although we did see quite a few examples of "proper" operator overloading, using the `overload` pragma, we also saw other, similar yet different interpretations of the directive, leading to a fair bit of variation amongst the solutions.

There were 30 submissions for the first task this past week.

## an ABUNDANCE of RICHES, a CORNUCOPIA of CODE
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/pete-houston/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/paulo-custodio/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/e-choroba/perl/ch-1.pl),
[**Jake**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/jake/perl/ch-1.pl),
[**Paul Fajman**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/paul-fajman/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/wlmb/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/peter-campbell-smith/perl/ch-1.pl),
[**Mano Chandar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/mano-chandar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/perlboy1967/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/polettix/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/dave-jacoby/perl/ch-1.pl), and
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/mohammad-anwar/perl/ch-1.pl)

As mentioned, we saw examples of objects redefining their own addition functions using the infix `+` operator, but this was not strictly speaking required for a solution. The core functionality, of taking two binary strings and returning a new string expressing the sum value, was implemented in a variety of ways, reflecting a range of possible interpretations to the directives.

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/pete-houston/perl/ch-1.pl)

Pete will start us off today with a straightforward example of operator overloading. He creates a binary string object package `Bin`, representing a single number in binary string notation. Internally, the object holds the number data in two attribute slots, `bin` and `dec`, as hash keys. The object is instantiated with a value in the `bin` slot, and the `dec` slot is filled simultaneously using a `bin2dec()` method, giving us parallel binary and decimal representations. Addition using the `+` sign is overloaded to call the object's own `add()` method, which when called by the object on another adds the internal decimal versions of the two, returning a new `Bin` object, stringified for the constructor using `sprintf "%b"`.

The object itself is minimal and demonstrative, a blessed hash in basic Perl, with the attributes accessed directly using hash notation.

```perl
    package Bin;

    use overload (
        '+'  => 'add',
        '""' => 'bin'
    );

    sub new {
        my ($class, $str) = @_;
        # $str is a string of bits, eg: "10010";
        my $self = {
            bin => $str,
            dec => defined ($str) ? bin2dec ($str) : $str
        };
        bless $self, $class;
    }

    sub dec { $_[0]->{dec} };
    sub bin { $_[0]->{bin} };

    sub bin2dec {
        my @bits = split //, shift;
        my $dec = 0;
        my $fac = 1;
        while (@bits) {
            $_ = pop @bits;
            $dec += $fac * $_;
            $fac *= 2;
        }
        return $dec;
    }

    sub add {
        my ($x, $y) = @_;
        my $dsum = $x->{dec} + $y->{dec};
        return Bin->new (sprintf "%b", $dsum);
    }

    package main;
    print Bin->new ($ARGV[0]) + Bin->new ($ARGV[1]) . "\n";
```

[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/paulo-custodio/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/paulo-custodio/python/ch-1.py)

Paulo strips down the demonstration even further, declaring his object as a blessed *scalar*, holding only the instantiated value, a binary string. When "+" is applied to this object, the infix operator is overridden with its own addition method, which on-the-fly converts the string parameters into (nominally decimal) numbers and sums them, returning a new `Binary` object using `sprintf "%b"` to translate the sum back into a binary string.

I say nominally decimal because of course internally the numbers are stored as the hardware sees fit, and probably only the I/O layer is interacting with us, the users, using decimal. But it's not really accurate to say the numbers *are* decimal. Numbers exist outside of their representations, and it is best to think of them as such. When we convert the internally binary numbers into what we are *calling* "binary", what we are really doing is creating a *string* of the binary number as we would write it on paper, copying the physical representation of the written form. The string is a sequence of 1 and 0 ASCII (or Unicode) characters. The [map is not the territory](https://en.wikipedia.org/wiki/Map–territory_relation), et [ceci n'est pas une pipe](https://en.wikipedia.org/wiki/The_Treachery_of_Images).

```perl
    use Modern::Perl;

    {
        package Binary;

        sub new {
            my($class, $n) = @_;
            $n //= 0;
            return bless \$n, $class;
        }

        sub add {
            my($self, $other) = @_;
            my $a = oct("0b".$$self);
            my $b = oct("0b".$$other);
            return ref($self)->new(sprintf("%b", $a+$b));
        }

        use overload '+' => \&add;
        use overload '""' => sub { my($self) = @_; return $$self; }
    }

    my $a = Binary->new(shift);
    my $b = Binary->new(shift);
    my $c = $a+$b;
    say $c;
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/e-choroba/perl/ch-1.pl)

Choroba refines and abstracts the process, adding a layer of indirection between the imput strings and the object with its overloaded operators. Instead of constructing a new object directly with a string, `Tie::Scalar` is used to attach the object class to the value after the fact. It's a roundabout way of going about things, but after the scalars are tied to the class we can perform the operation `$a + $b` on them transparently.

We can also *reassign* them, as they are still, in their way, still scalers, rather than objects with attributes. You could think of them the other way, as scalars with object classes. We don't need a setter/getter method, as the attribute is the scalar itself.

However the `Binary` class can be overloaded as any other object.

```perl
    {   package Binary;
        use Tie::Scalar;
        use parent -norequire => 'Tie::StdScalar';

        sub TIESCALAR {
            my ($class, $value) = @_;
            die 'Too many arguments' if @_ > 2;
            die 'Invalid format' if $value =~ /[^01]/;
            bless \$value, $class
        }

        sub FETCH { $_[0] }

        use overload
            '+' => sub {
                sprintf '%b', oct("0b${ $_[0] }") + oct("0b${ $_[1] }")
            },
            '""' => sub { ${ $_[0] } },
    }

    ... test boilerplate ...

    {   tie my $A, 'Binary', 11;
        tie my $B, 'Binary', 1;
        is $A + $B, 100, "Example 1 ($A + $B)";
    }
```

As you can see we need to specify the package we wish to tie *to* when we tie, which ends up being very much like instantiating an object with `new()`, but different. What we end up with after we do this, however, is a special scalar variable with additional behavior attached to it. It holds a binary string, can be assigned and reassigned with differing, new binary strings, and when we add two of these together using the `+` operator, we return a new binary string representing the sum of the represented values without any additional effort.

In my eyes I'm no longer seeing the tasked simulation of overloading behavior, but rather we seem to have produced the effects of quietly making a new datatype for Perl, with its own `+` operator that just works like you think it should. And since Perl doesn't actually do this, it's no longer *like* the thing, or a simulation of something, but rather it becomes the thing itself. Take that Magritte.


[**Jake**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/jake/perl/ch-1.pl)

Getting away from the `overload` pragma for a bit, we have Jake's submission in basic Perl. The objective here is to translate each argument into decimal, sum them, then convert the result back into binary. To accomplish this he constructs a pair of routines,
`decimal_to_binary()` and `binary_to_decimal()`, both really wrappers for private helpers, to do the conversions back and forth.

After soliciting the input values the application sums them and returns the result as a binary string.

The essence of the technique lies in these two conversion routines, which are well documented. Here's the decimal to binary half:

```perl
    ###
    # convert decimals to binaries
    #
    # each n-th power of 2 in decimal translates to the n-th power of 10 in binary:
    # n=0: 1>1 | n=1: 2>10 | n=2: 4>100 and so on, we know the drill.
    # For conversion, we first determine the largest power contained in the decimal number.
    # Next, we subtract this power from our decimal and determine the largest power in this 'remainder'.
    # This is repeated until there is no remainder left.
    # For each n-th power of 2 we add a binary quantum to an accumulator.
    # At the end of our 'run for power' this accumulator is our binary equivalent to our decimal.
    ###

    # container sub so main needs to pass only 1 argument
    sub decimal_to_binary {
        my ( $decimal ) = @_;

        return _decimal_to_binary ( 0, $decimal );
    }

    sub _decimal_to_binary {
        my ( $power, $decimal_number, $binary_quantum ) = @_;

        # special case of 0
        if ( $decimal_number == 0 ) {
            return 0;
        }

        # any decimal or remainder hitting exactly an n-th power of 2 will eventually finish the run here
        if ( $decimal_number == 2**$power ) {
            $binary_quantum += 10**$power;
            return $binary_quantum;
        }

        # if a number will not finish at the previous step, we check if the number is between the current power or the next one.
        # if it is, we know the largest power to 2 in this number is the current power, so we have to add this power to 10 to our binary quantum accumulator.
        # we then take the remainder (what comes on top of the current power to 2) and investigate its powers.
        # p.e. our decimal is 9.
        # since 2^3 < 9 < 2^4, we add 10^3 to our binary quant.
        # then we perform 9-2^3 = 1 to get the remainder which needs to be quantized itself.
        # 1 is our remaining decimal, which we re-investigate starting again with power = 0.
        if ( $decimal_number > 2**$power && $decimal_number < 2**( $power +1 ) ) {
            $binary_quantum += 10**$power;
            $decimal_number -= 2**$power;
            $power = 0;
            return _decimal_to_binary ( $power, $decimal_number, $binary_quantum );
        }

        # this operation is needed whenever our decimal is larger than our current power to 2 and the next one.
        $power++;
        return _decimal_to_binary ( $power, $decimal_number, $binary_quantum );
    }
```

[**Paul Fajman**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/paul-fajman/perl/ch-1.pl)

Paul takes the addition simulation more literally, creating a means to add the two binary numbers digit-by-digit, carrying over values as required, as though we were using pencil and paper. Or, you know, inside an adder. Which is almost assuredly what the computer is doing behind the scenes. But then again, it could be an army of monkeys (or Monkees, RIP Mike Nesmith) with abaci. We'll never know for sure, as the hardware layer is in theory opaque and abstracted away from us.

But to the task at hand, he first breaks each string down into an array of characters. To facilitate the carries he always adds the smaller number to larger, zero-padding the left of the smaller to the length of the larger.

Walking the positions from right to left with an iterator, at each he takes the input  from the two arrays and a floating carry place and sums them, and from this state assigns the position in a new array and the carry variable. If after traversing the length of the larger of the two inputs any value is still in the carry slot it is prepended to the front of the string.

Through concatenation we have constructed the binary sum string place-wise.

```perl
    # Split numbers into pieces
      @arr1=split(//,$x);
      @arr2=split(//,$y);
      for ($i=$#arr1; $i>-1;$i--) {
        $sum=$arr1[$i]+$arr2[$i]+$carry;

    # If/elses to ensure no values greater than 1.
        if ($sum eq 2) {
          $sum = 0;
          $carry = 1;
        }
        elsif ($sum eq 3) {
          $sum = 1;
          $carry = 1;
        }
        else {
          $carry = 0;
        }
        $num=$sum.$num
      }

    # One last check for a carry.
      $num="1".$num if $carry eq 1;
      return "$num";
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/wlmb/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 140 – W. Luis Mochán](https://wlmb.github.io/2021/11/23/PWC140/)

Luis also gives us a positional addition procedure, albeit rathermoretightlycompressed.

Onthatsubject:The ancient ones speak of a time, during the big iron war, when spaces were first rationed, and then for all practical purposes used up completely, so that for an interminable period any form of whitespace at all — not merely a simple space but also a linefeed, a tab, even space-like characters like an underscore — were worth more than gold. Dark days indeed.

Even I remember communicating through the dumbest of terminals as a child, and how each character used prompted a significant time-lag as it was transmitted down the line bucket-brigade-style by a roster of enfeebled monkeys (or perhaps Monkees, rip Mike Nesmith... wait, have we been here before? I'm getting the stangest feeling of déjà vu...)

But I digress.

Luis provides us with a marvelous `full_adder()` routine that itself is worth the price of admission. The fact that his method is expanded to include 2s-complement negative numbers is all the more impressive.


```perl
    use List::Util qw(all max);

    my $word_size=8; # finite number of bits, to allow for negative 2s-complement numbers.
    say("Usage: ch-1.pl a b [wordsize], to add two binary numbers"), exit unless @ARGV>=2;
    say("Only '0' and '1' allowed for binary numbers"), exit unless all {$_=~m/^[01]+$/} @ARGV[0,1];
    say("Word size should be positive"), exit unless !defined $ARGV[2] || $ARGV[2]>=1;
    my ($x, $y)=map {[reverse (0,split "",$_)]} @ARGV; # bit arrays, least significant first
    $word_size=$ARGV[2] if $ARGV[2];
    my $length=max scalar @$x, scalar @$y;
    my $carry=0;
    my $r;
    my @result=map {($r,$carry)=full_adder($x->[$_],$y->[$_],$carry);$r} 0..$length-1;
    splice @result, $word_size; # truncate to maximum number of bits
    my $result=join "", reverse @result;
    say sprintf "Input: \$a=%d, \$b=%d, Output: %d", @ARGV[0,1], $result;

    sub full_adder{ # add two bits and a carry, produce result and carry
        my ($a, $b, $c)=@_;
        return(($a+$b+$c)%2,($a+$b+$c)/2);
    }
```

I will thank him though, as at least he broke things down a bit from his original version, which even he acknowledges is illegible:

```perl
    perl -Minteger -MList::MoreUtils=pairwise -E '($x,$y)=map [reverse split "","0$_"],
       @ARGV; @x=@$x;@y=@$y; say sprintf "Input: \$a=%d, \$b=%d, Output: %d", @ARGV,
       join "",reverse pairwise {$c=($s=$a+$b+$c)/2;$r=$s%2} @x,@y;' 11 1
```

[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/peter-campbell-smith/perl/ch-1.pl)

The open-endedness of phrase "simulate something like..." in the directive allows quite a lot of leeway in interpretation, and here Peter produces the simulation cleanly in the output:

```perl
    11 + 1 = 100
    101 + 1 = 110
    100 + 11 = 111
    10101 + 1010 = 11111
    0 + 111 = 111
    1111111111 + 1111111111 = 11111111110
```

The addition is correct and configurable, and done by two internal routines converting the  binary string input into numbers, then summing them, then converting the result back before formatting.

To be clear, I am given no special insight into Mohammad's reasoning when he assigns the tasks, and solely base my commentary around what I find presented, combined with my own previous analysis. Personally I think all of these readings are correct in their way, weighted truths yet unquantifiable. I live in a very simultaneous world, where things can be many things at once.

[**Mano Chandar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/mano-chandar/perl/ch-1.pl)

Mano delivers us a remarkable approach to structuring his input validation:

```perl
    L1 : print "Enter the First Binary Number [0's and 1's only]\n";
         $input1 = <>;
         chomp($input1);
         goto L1 if ($input1 !~ m/^[0-1]+$/s);
    L2 : print "Enter the Second Binary Number [0's and 1's only]\n";
         $input2 = <>;
         chomp($input2);
         goto L2 if ($input2 !~ m/^[0-1]+$/s);
```

I have to give him that in this style it is immediately obvious what is going on, and furthermore each block discretely processes one user input, which in general is a wise approach to dealing with the unpredictable outside world as it allows each iteraction to be fine-tuned as required.

It's interesting to me, as someone always looking for more clarity in expression. But, you know, `goto`. You don't see that very often, not in its LABEL form.

For the addition, we work over the strings place-by-place, this time from the right-hand side, building our string result by concatenating new digit characters as they are derived. Working this way requires us to perform a scalar reverse on our result to flip the digits around to their proper order.

```perl
    $i = length($input1);
    $j = length($input2);

    while( $i>0 || $j>0)
    {
        $sum = $carry;
        $sum += (substr($input1, $i-1, 1)) if ($i >0); # operator overloading
        $sum += (substr($input2, $j-1, 1)) if ($j >0); # operator overloading
        $carry = $sum > 1 ? 1 : 0 ;
        $result .= $sum%2;    # operator overloading
        $i--; $j--;
    }
    $result .= $carry if ($carry);

    print (scalar reverse($result));
```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/perlboy1967/perl/ch-1.pl)

Niels takes things one step further, using both the `overload` pragma and performing his addition using a simulated adder, processing the individual digit positions in the two binary strings using `pairwise()` from `List::MoreUtils`. We've seen this function in passing previously, in Luis' one-liner, and now that it's appeared again perhaps we should take a moment to discuss it.

`pairwise()` processes two arrays of nominally the same length, taking one element for each and applying it within a given block, like `map` over two lists simultaneously. Inside the block the values are attached to the variables `$a` and `$b` and the result of the block returned to form a new list. The arrays are processed until all elements are used, so in theory the arrays should be the same length or a warning will be thrown when one is exhausted and the other continues to be assigned. Adding `no warnings "uninitialized"` will suppress this behavior, though, so it can be worked around and is not expressly forbidden.

After breaking apart the input strings into arrays of digits, this pairwise processing allows us, with a little careful positional bookkeeping, to add each binary digit to its corresponding mate, computing an output sum and carrying over place values when appropriate.

Here's the whole `MyBin` package:

```perl
    package myBin;

    use List::MoreUtils qw(pairwise);

    use overload
      '""' => sub { '0b'.join '',reverse @{$_[0]} },
      '+' => \&_plus;

    sub new {
      my ($self,$arg) = @_;

      # Accept a myBin object to initialize
      # or an integer number
      my @data = ();
      if (defined $arg) {
        if (ref $arg) {
          @data = @$arg;
        } else {
          @data = reverse split //,sprintf '%b', $arg;
        }
      }

      bless \@data,$self;
    }

    sub _plus {
      my ($self, $other) = @_;

      $other = new myBin($other) if (!ref $other);

      my ($carry,$res) = (0);
      my @result = pairwise {
        no warnings 'once';
        $res = ($a//0) + ($b//0) + $carry;
        $carry = ($res >> 1);
        $res &= 1;
      } @$self, @$other;
      push(@result,1) if $carry;

      bless \@result;
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC140 - Add Binary - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/11/24/pwc140-add-binary/)

Flavio too takes this combined, complex interpretation, giving us an object that performs its operator-overloaded addition place-wise directly on the 1 and 0 digits as written.

Of note there's a little syntactic sugar added with the addition of a `Bin()` function that's only purpose is to instantiate a new object, removing that constructor code from the main body flow. I like little details like this that improve clarity at little cost.

```perl
    package Bin;
    use overload
       '+' => sub ($A, $B, @whatever) {
          my @A = split m{}mxs, $$A;
          my @B = split m{}mxs, $$B;
          my @result;
          my $carry = 0;
          while (@A || @B) {
             my $sum = $carry + (pop(@A) // 0) + (pop(@B) // 0);
             unshift @result, $sum & 0x01;
             $carry = $sum >> 1;
          }
          unshift @result, $carry if $carry;
          @result = (0) unless @result;
          return Bin->new(join '', @result);
       },
       '""' => sub ($x, @whatever) { '' . $$x };
    sub new ($p, $x) { return bless \$x, $p }

    package main;
    sub Bin ($x) { return Bin->new($x) }

    say Bin($ARGV[0] // 11) + Bin($ARGV[1] // 1);
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/dave-jacoby/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Table it? Yesr No?: The Weekly Challenge #140 | Committed to Memory](https://jacoby.github.io/2021/11/22/table-it-yes-or-no-the-weekly-challenge-140.html)

Dave has it both ways too, but not at the same time. He builds us an adder to process his bits sequentially, and also provides a routine that converts to proper numbers, adds them,  and thens converts back to a binary representation, which in turn is used to verify the results from the adder.

Needless to say, it works. We know because we checked.

```perl
    for my $example (@examples) {
        my ( $a, $b, $solution ) = $example->@*;
        my $c = add_binary( $a, $b );
        my $d = real_add_binary( $a, $b );
        say <<"END";
        Input: \$a = $a; \$b = $b
        Output: $c
        We know by:  $d
        And also by: $solution
    END
    }

    sub add_binary ( $a, $b ) {
        my @output;
        my $r = 0;
        my @a = split //, $a;
        my @b = split //, $b;

        while ( @a || @b ) {
            my $wa = pop @a;
            my $wb = pop @b;
            $wa //= 0;
            $wb //= 0;
            my $sum = $wa + $wb + $r;
            $r = $sum > 1 ? 1 : 0 ;
            unshift @output, $sum % 2? 0 : 1;
        }
        unshift @output, 1 if $r;
        return join '', @output;
    }

    sub real_add_binary ( $a, $b ) {

        # convert from binary to decimal
        my $ra = oct( '0b' . $a );
        my $rb = oct( '0b' . $b );

        # decimal addition?
        my $rc = $ra + $rb;

        # reconversion and return
        return sprintf '%b', $rc;
    }
```

[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/mohammad-anwar/perl/ch-1.pl)

I like how as we've progressed we've worked around the problem and, interpreting the directive in different ways, come to different conclusions on exactly what to do to satisfy the task specification. All the while whilst consistently adding two binary strings to create a new binary output.

Now finally we'll have a look at Mohammad's own solution to glean what he may have had in mind initially. Or perhaps this too is only his solution as looked at this week; he may brainstorm questions weeks in advance. I honestly have no idea how he does it.

What we are presented with here, though, is an object, `Binary`, with two overloaded functions: `+`, which calls the `add()` method, and `""` (double quotes), which in turn calls `stringify()`.

Each object is initialized with a binary string, and has two data attributes: that aforementioned binary string and a decimally converted version, done immediately using `oct("0b" . $value)` to parse the string.

Calling the overloaded `+` on the object with another passed in will sum the two `{decimal}` attributes and return the result as a binary representation using `sprintf "%b".`

It's a simple demonstration, without getter/setter methods, or any triggers to make sure the two `binary` and `decimal` attributes are always synchronized or any of that. It does what it does and demonstrates operator overloading, which I suppose was the point.


```perl
    package Binary;

    use strict;
    use warnings;

    use overload '+' => 'add', '""' => 'stringify';

    sub new {
        my ($class, $value) = @_;
        my $self = {
            binary  => $value,
            decimal => oct("0b" . $value),
        };

        bless $self, $class;

        return $self;
    }

    sub add {
        my ($self, $other) = @_;

        return Binary->new( sprintf("%b", $self->{decimal} + $other->{decimal}) );
    }

    sub stringify {
        my ($self) = @_;

        return $self->{binary};
    }
```


## Blogs and Additional Submissions in Guest Languages for Task 1:


[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/abigail/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/abigail/awk/ch-1.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/abigail/bash/ch-1.sh), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/abigail/bc/ch-1.bc), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/abigail/c/ch-1.c), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/abigail/go/ch-1.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/abigail/java/ch-1.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/abigail/lua/ch-1.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/abigail/node/ch-1.js), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/abigail/pascal/ch-1.p), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/abigail/python/ch-1.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/abigail/r/ch-1.r), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/abigail/ruby/ch-1.rb), [Scheme](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/abigail/scheme/ch-1.scm), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/abigail/tcl/ch-1.tcl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 140: Add Binary](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-140-1.html)


[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/adam-russell/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Cxx](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/adam-russell/cxx/ch-1.cxx), [Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/adam-russell/prolog/ch-1.p)


&nbsp;&nbsp;**blog writeup:**
[A Binary Addition Simulation / Nth from a Sorted Multiplication: Table The Weekly Challenge 140 - Perl - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2021/11/28/perl)


&nbsp;&nbsp;**blog writeup:**
[A Binary Addition Simulation / Nth from a Sorted Multiplication: Table The Weekly Challenge 140 - Prolog - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2021/11/28/prolog)


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/athanasius/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/athanasius/raku/ch-1.raku)


[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/colin-crain/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/colin-crain/raku/ch-1.raku)


[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/cristian-heredia/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/cristian-heredia/python/ch-1.py)


[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/jaldhar-h-vyas/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/jaldhar-h-vyas/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 140](https://www.braincells.com/perl/2021/11/perl_weekly_challenge_week_140.html)


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/james-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #140](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-140/james-smith)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/laurent-rosenfeld/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 140: Add Binary |aurent_r](http://blogs.perl.org/users/laurent_r/2021/11/perl-weekly-challenge-140-add-binary.html)


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: Perl Weekly Challenge 140: Binary and Tabular](https://blog.firedrake.org/archive/2021/11/Perl_Weekly_Challenge_140__Binary_and_Tabular.html)


[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/sgreen/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/sgreen/python/ch-1.py)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 140](https://dev.to/simongreennet/weekly-challenge-140-a50)


------------------------------------------





---

# TASK 2 {#PWC140TASK2}

# Multiplication Table
*Submitted by: Mohammad S Anwar*

You are given 3 positive integers, $i, $j and $k.

Write a script to print the $kth element in the sorted multiplication table of $i and $j.

**Example 1**
```
    Input: $i = 2; $j = 3; $k = 4
    Output: 3
```
Since the multiplication of 2 x 3 is as below:
```
    1 2 3
    2 4 6
```
The sorted multiplication table:
```
    1 2 2 3 4 6
```
Now the 4th element in the table is "3".

**Example 2**
```
    Input: $i = 3; $j = 3; $k = 6
    Output: 4
```
Since the multiplication of 3 x 3 is as below:
```
    1 2 3
    2 4 6
    3 6 9
```
The sorted multiplication table:
```
    1 2 2 3 3 4 6 6 9
```
Now the 6th element in the table is "4".


## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/abigail/perl/ch-2b.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/adam-russell/perl/ch-2.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/alexander-pankoff/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/athanasius/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/polettix/perl/ch-2.pl),
[**Jake**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/jake/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/jo-37/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/laurent-rosenfeld/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/lubos-kolouch/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/mattneleigh/perl/ch-2.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/mohammad-anwar/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/perlboy1967/perl/ch-2.pl),
[**Paul Fajman**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/paul-fajman/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/paulo-custodio/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/pete-houston/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/peter-campbell-smith/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/sgreen/perl/ch-2.pl),
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/steven-wilson/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/ulrich-rieke/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/wlmb/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/wanderdoc/perl/ch-2.pl)

Unlike the previous challenge, task number 2 offered a straightforward and unambiguous solution: to flatten the specified multiplication table into a single-dimensional array, sort it and return the *n*th element. As this can be accomplished in a couple of nested loops, a `sort` operation and a positional index, we saw that procedure quite a number of times, and the request left little room for variation.

Or so it seemed at first. On a more thorough investigation we did find some things to talk about, and will make an effort to highlight those differences we did come across. In fact, once the PDL got involved, things got a little wild.

There were 29 submissions for the second task this past week.

## a PEARL in an OYSTER, a PLEASURE to the TASTE
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/wanderdoc/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/mattneleigh/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/james-smith/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/perlboy1967/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/dave-jacoby/perl/ch-2.pl),
[**Jake**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/jake/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/sgreen/perl/ch-2.pl),
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/abigail/perl/ch-2b.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/athanasius/perl/ch-2.pl),
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/steven-wilson/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/wlmb/perl/ch-2.pl), and
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/jo-37/perl/ch-2.pl)

As stated, there was a lot of repetition found among the submissions for this task. We'll start with the core logic and see what we can find from there, working along until we arrive at some spectacular divergences.

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/wanderdoc/perl/ch-2.pl)

The doctor will start us off with a demonstration of the fundamental procedure. Given two loops over the axes of the requested table, we calculate the cross-indexed values one-by-one and add them to an output array, which is then numerically sorted. Noting that the position requested is a 1-based cardinal number, the left-most position is filled with a null value, so as to make indexing the resultant list as simple as adding a positional postscript. In Perl there is no significant cost to unshift an array by a single place, as all that is required is changing a single pointer to the first element; the original memory allocation for the data structure will always have extra room to grow at each end.

```perl
    my @output;
    for my $digit_2 ( 1 .. $j )
    {
         for my $digit_1 ( 1 .. $i )
         {
              push @output, $digit_1 * $digit_2;
         }
    }

    @output = sort {$a <=> $b} @output;
    unshift @output, ''; # $k is 1-based.
    print $output[$k], $/;
```

[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/mattneleigh/perl/ch-2.pl)

Matthew chooses a pair of `while` loops for his control structures, but otherwise the procedure is functionally equivalent: he iterates through the values along one axis of the table, multiplying them each by the values of the other axis. For the internal loop the counter needs to be reset at each pass.

To settle the indexing adjustment at the end he merely subtracts 1 from the requested position.

```perl
    sub kth_element_multiplication_table{
        my $i = shift();
        my $j = shift();
        my $k = shift();

        my @products;
        my $j_orig = $j;

        # Generate a list of products
        while($i--){
            $j = $j_orig;
            while($j--){
                push(@products, ($i + 1) * ($j + 1));
            }
        }

        # Sort the products in ascending order
        # and return the Kth element of the list
        @products = sort({$a <=> $b} @products);

        return($products[$k - 1]);

    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/james-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #140](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-140/james-smith)

James takes the same method and presents it two ways: in an expanded version you can see he uses a `foreach` loop enclosing a `map` statement to generate his table values.

```perl
    sub get_num_exp {
      my($i,$j,$k,@A) = @_;
      foreach my $t (1..$j) {
        push @A,map{$t*$_} 1..$i;
      }
      @A = sort @A;
      return $A[ $k-1 ];
    }
```

In his compressed version things get a little *noisy*, you might say, using two nested `map` statements to loop.

```perl
    sub get_num {
      my$t;
      (sort{$a<=>$b}map{++$t;map{$t*$_}1..$_[0]}1..$_[1])[$_[2]-1];
    }
```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/perlboy1967/perl/ch-2.pl)

Niels arrives at a very similar level of compactness to James' one-liner, using `List::MoreUtils qw(arrayify)`, which serves to flatten nested arrays into a one-dimensional list of values.

This is what happens when a simple solution immediately presents itself. People get creative. Something something devil's workshop.

```perl
    use List::MoreUtils qw(arrayify);
    my($i,$j,$k)=@ARGV;
    printf"%s\n",(sort{$a<=>$b}arrayify map{my$n=$_;$_=[map{$n*$_}1..$j]}1..$i)[$k-1];
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/dave-jacoby/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Table it? Yesr No?: The Weekly Challenge #140 | Committed to Memory](https://jacoby.github.io/2021/11/22/table-it-yes-or-no-the-weekly-challenge-140.html)

Dave also, and more explicitly, builds a multi-dimensional multiplication table to work on, which he then flattens using his own routine. We have introduced a trade-off between computational performance and modeling clarity, I will note, with these methods.

```perl
    sub solve_task_2 ( $i, $j, $k ) {
        my @table;
        for my $x ( 1 .. $i ) {
            for my $y ( 1 .. $j ) {
                $table[ $x - 1 ][ $y - 1 ] = $x * $y;
            }
        }
        my @array = sort { $a <=> $b } flatten(@table);
        return $array[ $k - 1 ] || -1;
    }

    sub flatten ( @two_d_array ) {
        return map { $_->@* } @two_d_array;
    }
```



[**Jake**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/jake/perl/ch-2.pl)

Continuing on the subject of creative looping, Jake replaces one of his with a function recursion, with `_aggregate_multiplication_table()` calling itself for each row of his multiplication table. It's an interesting choice, and function calls are not particularly expensive in Perl so I would consider this a viable approach.

```perl
    sub _aggregate_multiplication_table {
        my ( $vertical_range, $horizontal_range, $height_increment, $horizontal_values, $all_values ) = @_;

        # once all lines of the table have been written we can return @all_values
        #push @$all_values,;
        return \@$all_values if $height_increment > $vertical_range;

        # we 'write' the first line of the multiplication table.
        # after that we run over each value in this first adding each new value to the accumulator @all_values.
        # we will repeat this for every line that needs to be added to the table.
        @$horizontal_values = 1 ... $horizontal_range;
        foreach ( @$horizontal_values ) {
            push @$all_values, $_ * $height_increment;
        }

        # we need to increase our line counter upon iteration.
        # this is necessary for our foreach loop to add the next line in the following iteration.
        return _aggregate_multiplication_table ( $vertical_range, $horizontal_range, $height_increment + 1, \@$horizontal_values, \@$all_values );
    }
```

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/sgreen/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/sgreen/python/ch-2.py)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 140](https://dev.to/simongreennet/weekly-challenge-140-a50)

I think we've seen a solid overview of ways to nest looping structures at this point, but note that that calculating the entire multiplication table and sorting it is not a particularly efficient way to produce a result, especially with large numbers involved. To invoke a trivial example: if we are looking for the fifth sorted number, calculating all 2500 elements of a 50 by 50 table seems both exhausting and unnecessary. A little casual thought suggests that the result probably is going to be 3, and that calculating the value of 43 × 47 really doesn't affect that outcome in any way.

Simon addresses this by realizing that once we have computed *k* elements in the table, then the value at position *k* will never increase. When more elements are added, some of these will perhaps become sorted in before it, altering its value, but that alteration will always be a reduction. As such, when calculating a row of the multiplication table, we only need to calculate as high as whatever value is held at the requested position. Furthermore, if we sort the list of values at each new row added, we can continuously update that maximum value, possibly lowering it, all the while maintaining the final sorted array to length *k*, to optimize and lessen the burden of all that repeated sorting.

In this way, for the above example, 43 × 47 will never be computed. There *will* be more sorting involved, sure, but that sorting, except in the worst-case scenarios, will be simpler.

```perl
    use List::Util 'min';

    sub main {
        my ( $i, $j, $k ) = @_;
        my @numbers = ();

        foreach my $m ( 1 .. $i ) {
            # Calculate the number of products required. If we already have
            #  $k values, then we only need to calculate values whose product
            #  is smaller, otherwise the lesser of $j or $k
            my $max = @numbers >= $k ? int( $numbers[ $k - 1 ] / $m ) : min( $j, $k );

            # Hack if the $i > $k[-1]
            last if $max == 0;

            # Add to the array, sort it, trim it
            push @numbers, map { $_ * $m } ( 1 .. $max );
            @numbers = sort { $a <=> $b } @numbers;
            splice( @numbers, $k );
                say "$m     @numbers";

        }
        say $numbers[-1];
    }
```

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/abigail/perl/ch-2b.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/abigail/awk/ch-2.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/abigail/bash/ch-2.sh), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/abigail/bc/ch-2.bc), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/abigail/c/ch-2.c), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/abigail/go/ch-2.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/abigail/java/ch-2.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/abigail/lua/ch-2.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/abigail/node/ch-2.js), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/abigail/pascal/ch-2.p), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/abigail/python/ch-2.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/abigail/r/ch-2.r), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/abigail/ruby/ch-2.rb), [Scheme](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/abigail/scheme/ch-2.scm), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/abigail/tcl/ch-2.tcl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 140: Multiplication Table](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-140-2.html)

Abigail applies a thorough, systematic analysis to the problem, ultimately resulting in a very  different approach. After [acknowledging the existence of the basic, forward solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/abigail/perl/ch-2b.pl)
, they note that the memory requirements of producing the entire multiplication table will, after the input values are in 4 to 5 digit range, become unwieldy.

To address this a [heap-based solution is first produced](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/abigail/perl/ch-2a.pl), which will, in the worst case, not reduce the exponential computational requirements but will help quite a bit in the memory used to get there.

In a third and final method, they derive a mathematical method to count the occurrences of each entry in the table, allowing us to count from 1 upwards until we arrive at the *k*-th value.

Both the heap and divisor solutions are detailed in their excellent [writeup](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-140-2.html), but to summarize the divisor method, they first notice that
1. the *k*-th value in the final list will always be less than or equal to *k*, and
2. we can count the occurrences of each value up to *k* using the following means:

> For each divisor *d* of *n* , <br>
> such that *d* ≤ *i* and *n*/*d* ≤ *j* , <br>
> *n* appears exactly once in the multiplication table of *i* and *j* .

So if we can get the divisors for each value, we can compute the count. Drawing on the impressive capabilities of the `Math::Prime::Util` module, we have the `fordivisors()` function, which does exactly what it says and forms a loop construct over the list of divisors for a number. Which is exactly what we need.

```perl
    use Math::Prime::Util qw [fordivisors];

    while (<>) {
        my ($n, $i, $j, $k) = (0, split);
        fordivisors {$_ <= $i && $n / $_ <= $j && !-- $k && say $n} ++ $n
               while $k >= 1;
    }
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/athanasius/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/athanasius/raku/ch-2.raku)

Several members took it upon themselves to make the task more challenging by directly replicating the output as given in the examples, explanations and all. Here the monk details the input and output values, but also provides the relevant multiplication table in both 2-dimensional and 1-dimensional sorted forms. To prepare the final statement pthey construct an `ordinal()` routine to provide the proper English suffix to the given cardinal value.

The actual computation of the output follows the familiar, basic form, using two nested `for` loops. As we've seen that before, let's present the explanation code instead. Notice ow the `explain()` routine finds the width of the largest number required and scales the spacing of the table accordingly.

```perl
    sub explain
    {
        my ($i, $j, $k, $table, $sorted, $element) = @_;

        print "\nSince the multiplication of $i x $j is as below:\n";

        # (1) Pre-compute table column widths
        my @widths;

        for my $idx (($i - 1) * $j .. $i * $j - 1)
        {
            push @widths, length $table->[ $idx ];
        }

        # (2) Print the table
        for my $row (0 .. $i - 1)
        {
            print '   ';

            for my $idx ($row * $j .. ($row + 1) * $j - 1)
            {
                printf ' %*d', $widths[ $idx % $j ], $table->[ $idx ];
            }

            print "\n";
        }

        # (3) Print the contents of the sorted table
        printf "\nThe sorted multiplication table:\n\n    %s\n",
                join ' ', @$sorted;

        # (4) Explain the output
        printf qq[\nNow the %s element in the table is "%d".\n],
               ordinal( $k ), $element;
    }

    sub ordinal
    {
        my ($n)     = @_;
        my  $suffix = 'th';
        my  $digit0 = substr $n, -1, 1;

        if (length $n < 2 || substr( $n, -2, 1 ) ne '1')
        {
            $suffix = $digit0 eq '1' ? 'st' :
                      $digit0 eq '2' ? 'nd' :
                      $digit0 eq '3' ? 'rd' : 'th';
        }

        return $n . $suffix;
    }
```

[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/steven-wilson/perl/ch-2.pl)

Steven also chose to replicate the example text, modified to fit the input parameters provided. His solution involves bringing in the Natural Language Processing module `Lingua::EN::Numbers::Ordinate` to provide an ordinal string for discussing the requested position. I am quite fond of the `Lingua::EN:: ... ` family of modules myself, and consider them a nice go-to for tasks like this.

```perl
    say "Input: \$i = $i, \$j = $j, \$k = $k";
    say "Output: $sorted_multiples[$k-1]\n";
    say "Since the multiplication of $i x $j is as below:\n";
    map { say "\t" . join " ", @{$_} } @rows;
    say "\nThe sorted multiplication table:\n";
    say "\t" . join " ", @sorted_multiples;
    say "\nNow the "
        . ordinate($k)
        . " element in the table is \"$sorted_multiples[$k-1]\".";
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/wlmb/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 140 – W. Luis Mochán](https://wlmb.github.io/2021/11/23/PWC140/)

Finally we have several solutions that make short work of the problem by bringing to bear the immense power of the Perl Data Language, which quite frankly seems perfectly suited to it. Being no expert in the PDL myself, only an interested party to the proceedings, I will defer to Luis:

>This job is very simple using the Perl Data Language (PDL), as it has functions and methods like

* **zeroes($j,$i)** to make a table with $i rows and $j columns,
* **ndcoords** to produce a vector whose components are the coordinates of each entry in the table, i.e., making a 3D array whose $a,$n,$m-th entry is the $a-th coordinate of the $n,$m-th entry, i.e., either $n or $m — pretty useful although confusing at first,
* **prodover** to multiply the elements of a vector, and
* **flat** to convert a table into a vector, and
* **qsort** to perform a quick-sort a vector.

Which allows the following code to solve the problem:

```perl
    use integer;
    use PDL;
    use PDL::NiceSlice;

    say("Usage: ./ch-2.pl i j k to get the k-th element of an iXj multiplication table"),
        exit unless @ARGV==3;
    my($i, $j, $k)=@ARGV;
    say("i and j should be positive"), exit unless $i>=1 && $j>=1;
    say("k should be positive and not greater than iXj"), exit unless 1<=$k<=$i*$j;

    my $result=(
        my $sorted=(
            my $table=(zeroes($j,$i)->ndcoords+1)->prodover
        )->flat->qsort
    )->(($k-1));
    say "Input: i=$i, j=$j, k=$k,\nOutput=$result",
            "\nsince the ${i}X$j multiplication table is",
        $table, "which sorted becomes\n$sorted,\nwhose $k-th element is $result\n";
```

This can even be reduced to a single, daunting one-liner:

```perl
    perl -MPDL -MPDL::NiceSlice -E '($i,$j,$k)=@ARGV; say "i=$i, j=$j, k=$k, out=",
         (zeroes($j,$i)->ndcoords+1)->prodover->flat->qsort->(($k-1))' 2 3 4
```

I enjoy dissecting these PDL solutions and appreciate Luis' commentary. You will notice this solution even presents the verbose output from the examples:

```
    Input: i=2, j=3, k=5,
    Output=4
    since the 2X3 multiplication table is
    [
     [1 2 3]
     [2 4 6]
    ]
    which sorted becomes
    [1 2 2 3 4 6],
    whose 5-th element is 4
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/jo-37/perl/ch-2.pl)

Jorg, on the other hand, eschews the complexity of the verbose output, as this was never really asked for anyways. However he does bring us a solution using the PDL, and within that framework incorporating a different toolset to boot.

It's quite impressive how compact these solutions can be. So for your pleasure:

*Pick Element From Sorted Multiplication Table*

```perl
    sub pefsmt ($i, $j, $k) {
        outer(sequence(long, $i) + 1, sequence(long, $j) + 1)
            ->flat->qsort->at($k - 1);
    }
```

Let's see if we can break this down:
* **outer** — compute the outer product of an array over one additional dimension, producing a 2-dimensional matrix
* **sequence** — construct a sequence in the range from 0 to the given value
* **long** — an optional `long` data type for the sequence
* **flat** — flatten a matrix into a single dimension
* **qsort** — perform a quicksort operation on a vector of values
* **at** — extract the value at a given index

So to produce the multiplication table we compute a matrix of **outer** products from two **sequence**s in the ranges up to *i* and *j*, with 1 added to each value in both sequences. The type of all elements is set to **long**. This matrix is then **flat**tened and **q**uick**sort**ed, and the element **at** the *k*-th index is reported. Cool. When you put it like that is all makes perfect sense.

I really must play with the PDL more often — for this I found workshopping in the built-in runtime environment tremendously enlightening. Interested parties should just go for it and give it a try; to get you started `p` prints a value:

```
    pdl> p outer( sequence(long, 5) + 1, sequence(long, 5) + 1 ) -> flat -> qsort -> at(5)
    4
```



## Blogs and Additional Submissions in Guest Languages for Task 2:

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/adam-russell/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Cxx](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/adam-russell/cxx/ch-2.cxx), [Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/adam-russell/prolog/ch-2.p)


&nbsp;&nbsp;**blog writeup:**
[A Binary Addition Simulation / Nth from a Sorted Multiplication: Table The Weekly Challenge 140 - Perl - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2021/11/28/perl)


&nbsp;&nbsp;**blog writeup:**
[A Binary Addition Simulation / Nth from a Sorted Multiplication: Table The Weekly Challenge 140 - Prolog - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2021/11/28/prolog)


[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/cheok-yin-fung/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Befunge-93](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/cheok-yin-fung/befunge-93/ch-2.bf), [Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/cheok-yin-fung/javascript/ch-2.js)


[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/colin-crain/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/colin-crain/raku/ch-2.raku)


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC140 - Multiplication Table - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/11/25/pwc140-multiplication-table/)


[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/jaldhar-h-vyas/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/jaldhar-h-vyas/raku/ch-2.sh)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 140](https://www.braincells.com/perl/2021/11/perl_weekly_challenge_week_140.html)

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/laurent-rosenfeld/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/laurent-rosenfeld/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 140: Multiplication Tables |aurent_r](http://blogs.perl.org/users/laurent_r/2021/11/perl-weekly-challenge-140-multiplication-tables.html)

[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/paulo-custodio/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/paulo-custodio/python/ch-2.py)


[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/pete-houston/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/pete-houston/awk/ch-2.awk)

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/roger-bell-west/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/roger-bell-west/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: Perl Weekly Challenge 140: Binary and Tabular](https://blog.firedrake.org/archive/2021/11/Perl_Weekly_Challenge_140__Binary_and_Tabular.html)


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/ulrich-rieke/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/ulrich-rieke/cpp/ch-2.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/ulrich-rieke/haskell/ch-2.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-140/ulrich-rieke/raku/ch-2.raku)


---

# BLOGS {#PWC140BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, by some miracle I somehow continue to maintain my bearings.**

**Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your Unquenchable *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC136BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *FOLLOW* these *BLOG* *LINKS*:

**( ...*don't think, trust your training, you're in the zone, just do it ...* )**


**Abigail**

 * [Perl Weekly Challenge 140: Add Binary](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-140-1.html) ( *Perl* )
 * [Perl Weekly Challenge 140: Multiplication Table](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-140-2.html) ( *Perl* )

**Adam Russell**

 * [A Binary Addition Simulation / Nth from a Sorted Multiplication: Table The Weekly Challenge 140 - Perl - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2021/11/28/perl) ( *Perl* )
 * [A Binary Addition Simulation / Nth from a Sorted Multiplication: Table The Weekly Challenge 140 - Prolog - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2021/11/28/prolog) ( *Perl* )

**Arne Sommer**

 * [Add the Table (or not) with Raku](https://raku-musings.com/add-table.html) ( *Raku* )

**Dave Jacoby**

 * [Table it? Yesr No?: The Weekly Challenge #140 | Committed to Memory](https://jacoby.github.io/2021/11/22/table-it-yes-or-no-the-weekly-challenge-140.html) ( *Perl* )

**Flavio Poletti**

 * [PWC140 - Add Binary - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/11/24/pwc140-add-binary/) ( *Perl & Raku* )
 * [PWC140 - Multiplication Table - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/11/25/pwc140-multiplication-table/) ( *Perl & Raku* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 140](https://www.braincells.com/perl/2021/11/perl_weekly_challenge_week_140.html) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #140](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-140/james-smith) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 140: Add Binary |aurent_r](http://blogs.perl.org/users/laurent_r/2021/11/perl-weekly-challenge-140-add-binary.html) ( *Perl & Raku* )
 * [Perl Weekly Challenge 140: Multiplication Tables |aurent_r](http://blogs.perl.org/users/laurent_r/2021/11/perl-weekly-challenge-140-multiplication-tables.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 140:it table multiplication – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2021/11/22/PerlWeeklyChallenge140.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 140:it table multiplication – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2021/11/22/PerlWeeklyChallenge140.html#task1pg) ( *PostgreSQL* )


**Roger Bell_West**

 * [RogerBW's Blog: Perl Weekly Challenge 140: Binary and Tabular](https://blog.firedrake.org/archive/2021/11/Perl_Weekly_Challenge_140__Binary_and_Tabular.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 140](https://dev.to/simongreennet/weekly-challenge-140-a50) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 140 – W. Luis Mochán](https://wlmb.github.io/2021/11/23/PWC140/) ( *Perl* )




