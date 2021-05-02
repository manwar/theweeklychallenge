---
author:       Colin Crain
date:         2021-05-02T00:00:00
description:  "Colin Crain › Perl Weekly Review #108"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #108"
image:        images/blog/p5-review-challenge-108.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-107/).* )

Welcome to the Perl review for **Week 108** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-108/) or the summary [**recap**](/blog/recap-challenge-108/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC108TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC108TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC108BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC108TASK1}

# Locate Memory
*Submitted by: Mohammad S Anwar*

Write a script to declare a variable or constant and print its location in the memory.


## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/abigail/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/adam-russell/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/athanasius/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/colin-crain/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/duncan-c-white/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/jo-37/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/laurent-rosenfeld/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/perlboy1967/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/pete-houston/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/sgreen/perl/ch-1.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/stuart-little/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/ulrich-rieke/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/wlmb/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/wanderdoc/perl/ch-1.pl)

There were 21 submissions for the first task this past week.

It's not necessary to know how to tune the engine in order to drive a car. In fact, it's not necessary to even know how an internal combustion engine, or electric motor, works in order to drive a car. For that task what you really need is the knowledge of how to turn it on and then to not hit anything.

With that said there certainly is value in knowing how the machines work. We're not talking about cars, of course, we're talking about computers, and the languages used to control them, but this statement holds here too. Machines are machines, and I'd argue you really need to know a thing or two about how they do their work to use them to their fullest potential. It's just a truism.

All this is a somewhat long-winded approach to somehow justifying this week's first task. The fact is, with Perl taking care of memory management for you, there's very little reason to actually know where something is in memory. The specific numeric location in itself doesn't hold a lot of value. What *is* useful is whether one thing is held at the same location as another, as that definitively means they are the same thing, whatever it may be. So debugging then: look, we've found a reason! I myself have used stringified references this way, and it can be very handy when working with complex data structures.

So how did people go about this? The most immediate way was to take a reference to the thing and look at that. But there were other approaches, too, taking a deeper look into the Perl data structures that hold variables.

## some notes on MEANING of the term "LOCATION"

The challenge also prompted a bit of academic discussion on what, exactly, was meant by the "location" of a variable. This answer is perhaps not obvious because in almost all cases a Perl variable exists as a data structure holding at least two memory locations: a specific sigil and symbol combination is directed in the symbol table to a data structure, known as the "head", which holds some metadata *about* the variable and a pointer to a different data structure, the "body", which holds the actual data. Or pointers to the actual data. Or data and a pointer to more data. From that point on things can get increasingly complex.

The body segment may silently change out from underneath a head, say when an integer is first required to be a string, or more intuitively when a new assignment is made to a different sort of thing, say a filehandle or anonymous subroutine. In these cases when the type of data changes we need a new type of body to contain it. One thing remains the same throughout, though, which is the location of the head. So when we ask for the location of a variable in Perl, the only meaningful response is the thing pointed to by the symbol table, which is the head.

The directive to find the location of a constant is quite a bit less clear, not the least part because, strictly speaking, there is no `constant` data type in perl. The `constant` pragma, which is a common way to obtain this functionality, doesn't change that reality, and is just another module with a scheme to make things work the way you'd expect, should one want such a thing to exist. It emulates a constant by creating a fast, inlined XSUB subroutine that when called returns the desired value. Taking a reference to the constant gives the location of the *return value* of this routine. This is analogous to the location of the "body" of a variable, holding the data, not the "head".

Because this is in fact secretly a subroutine, we can address it as &CONSTANT() and get the same result as the bareword version. If we take a reference to *this*, we get a reference to the *subroutine*, rather than the returned value. The definition of "location" in this case becomes quite confused, as are we asking the location of the thing, or the thing that isn't the thing but does produce the thing? The symbol table in this case points to the "head" of the subroutine, so I personally think that is the "correct", albeit not-exactly intuitive, answer. On the other hand the body of that variable is the coderef itself, which in turn is indirectly tied to the memory location of scalar reference. It's a thicket in there.

In practice we saw it both ways, and it remains unclear which is a better choice of the constant's "location".


## EXAMINING A REFERENCE three ways:

### 1. the bare reference string
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/duncan-c-white/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/jaldhar-h-vyas/perl/ch-1.pl), and
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/ulrich-rieke/perl/ch-1.pl)

When you look at a reference, say by printing it, you are given a string composed of the variable's data type and the head location. This can reasonably be construed as the "location" of the variable.

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/dave-jacoby/perl/ch-1.pl)

Dave starts us off with a little story:

>in C, you get the memory locations as pointers, and you traverse an array by adding the memory size to the previous pointer. This contributes to C being a notorious foot-gun.

>You CAN print a memory location by using a reference and printing the reference instead of dereferencing it but because it's a reference, not a pointer, you don't do the dangerous, stack-smashing pointer arithmatic.

>So I guess I don't fully understand WHY you would want to do something like this, because "JUDGED DANGEROUS" trumps "CONSIDERED HARMFUL", but this kinda does it.

>I think.

That's good enough for me. Plus his filler data is the word "weasel", which, being an intrinsically funny word, brightened my day.

```perl
    weasel
    SCALAR(0x7feda5023ef8)
    weasel
```

So good he had to say it twice.

```perl
    my $x = 'weasel';
    my $y = \$x;

    say $x;
    say $y;
    say $y->$*;
```

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/jaldhar-h-vyas/perl/ch-1.pl)

There isn't a lot of room for variation in this method, but it does carry the virtue of brevity. It gets straight to the point, so to speak. Jaldhar shows us how little is required:

```perl
    my $a;
    say \$a;
```

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/ulrich-rieke/perl/ch-1.pl)

Most of he other examples choose a scalar variable, but the head-body construction is common to all the Perl data types, so returning the head of an array still points us at the location of the variable, only the form of the body has changed.

In this example the reference tells us the variable is an array type:

```
    The address of @cities is ARRAY(0x7fcbe001f280)!
```

```perl
    my @cities = ("Berlin", "Amsterdam", "Moscow") ;
    my $addr = \@cities ;
    say "The address of \@cities is $addr!" ;
```





### 2. getting at the number inside
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/arne-sommer/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/colin-crain/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/jo-37/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/laurent-rosenfeld/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/perlboy1967/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/pete-houston/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/sgreen/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/wlmb/perl/ch-1.pl)

The task is not specific as to exactly what is meant by "location", but it might commonly be considered a request for a specific address in the computer's memory banks. Something that could be `PEEK`'d or `POKE`'d. If, you know, this were a different language we were speaking.

[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/mohammad-anwar/perl/ch-1.pl)

Mohammad provides us with a nice, compact solution that uses a regular expression to match out the memory location in his technique.

```perl
    my $n = 1;
    \$n =~ /SCALAR\((.*)\)/ and print "$1\n";
```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/perlboy1967/perl/ch-1.pl)

Niels gives us a nice demonstration of using a named capture group to extract the memory location. Note he is using a constant for his reference, and the stringification identifies it as a `SCALAR`, meaning it is a reference to the scalar holding the "1" integer data.

```perl
    use constant TEST => 1;

    \TEST =~ m#SCALAR\((?<location>.*?)\)#;

    printf "%s\n" , $+{location} // 'undef',
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/wlmb/perl/ch-1.pl)

Luis flushes out the field, providing us with a gamut of examples, with references for scalar, array and hash variables in both lexical and package forms. Also we are shown a subroutine and a constant. A simple regex is used to capture the hexadecimal number between parentheses.

I took the liberty of replacing `$1` with `$r` for this output, to show the whole return string, and this clearly labels the reference taken with `\&PI` as type `CODE`, to be expected.

```perl
    $X=>SCALAR(0x7f9d4080ec70)
    $x=>SCALAR(0x7f9d40029140)
    %X=>HASH(0x7f9d4080ee08)
    %x=>HASH(0x7f9d4080efd0)
    &X=>CODE(0x7f9d4080ef40)
    @X=>ARRAY(0x7f9d4080ef28)
    @x=>ARRAY(0x7f9d400290e0)
    PI=>CODE(0x7f9d4080e628)
```

```perl
    use constant PI=>3.14;

    sub X {}
    my ($x, @x, %x);
    our ($X, @X, %X);
    my %map=('$x'=>\$x, '@x'=>\@x, '%x'=>\%x, '$X'=>\$X, '@X'=>\@X, '%X'=>\%X, '&X'=>\&X, 'PI'=>\&PI);
    foreach (sort keys %map){
        my $r=$map{$_};
        $r=~/\((.*)\)/;
        say "$_=>$1";
    }
```

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/arne-sommer/perl/ch-1.pl)

Arne has decided to make his output a decimal number, to match the results given in his Raku version of the task. I'm not really solid on the logic behind this, as all of these numbers are allocated relative to the individual instance of the interpreter spawned and frankly don't mean anything. In Raku they mean even less as that language reserves the right to silently move objects around backstage as it sees fit to keep the illusion seamless. But a number is a number and so be it.

In any case Arne isn't alone in this decision. He states that Perl may complain about transforming large values with `hex`, so he uses `Math::BigInt` to do the hex to decimal conversion.

```perl
    use Math::BigInt;

    sub get_int_value
    {
        my $string = shift;
        $string =~ /(0x[a-f\d]+)/;
        return Math::BigInt->new($1);
    }
```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/laurent-rosenfeld/perl/ch-1.pl)

Laurent provides us with a straightforward implementation of matching the location out from a reference.

```perl
    my $i = 42;
    my $ref = \$i;
    my $addr = $1 if $ref =~ /\((0x\w+)/;
    say $addr;
```

To make it more interesting, he provides similar, short examples in 9 other languages:

[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/laurent-rosenfeld/raku/ch-1.raku),
[C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/laurent-rosenfeld/c/ch-1.c),
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/laurent-rosenfeld/cpp/ch-1.cpp),
[D](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/laurent-rosenfeld/d/ch-1.d),
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/laurent-rosenfeld/python/ch-1.py),
[Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/laurent-rosenfeld/go/ch-1.go),
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/laurent-rosenfeld/julia/ch-1.julia),
[Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/laurent-rosenfeld/rust/ch-1.rs),
[Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/laurent-rosenfeld/pascal/ch-1.p),

### 3. getting the number directly
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/abigail/perl/ch-1.pl) and
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/roger-bell-west/perl/ch-1.pl)

Less widely known is that accessing the value of a reference in specifically numeric context will only deliver the numeric address of the thing being referenced, which is quite convenient.

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/abigail/perl/ch-1.pl)

Abigail brings us two important observations:
- A reference in numeric context gives the memory location
- 0 is a constant

I am amused by the various usages of the `+` operator in his solution. [I'll let him describe it](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-108-1.html):

>Since +0 is a constant, \+0 is a reference to it. If its an argument of the addition operator (+), it's put in numeric context, and we get memory address. Adding +0 to it is a no-op. So +0+\\+0 is the memory address of the constant +0. Which we print with say.

```perl
    say+0+\+0
```

Abigail also represents th task in a number of different languages.

[C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/abigail/c/ch-1.c),
[Fortran](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/abigail/fortran/ch-1.f90),
[Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/abigail/go/ch-1.go),
[Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/abigail/pascal/ch-1.p),
[Python ](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/abigail/python/ch-1.py),
[R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/abigail/r/ch-1.r),
[Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/abigail/ruby/ch-1.rb),



[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/roger-bell-west/perl/ch-1.pl)

It's interesting to me that the result returned through numification of a reference is a decimal value. Ok, maybe not super interesting, because obviously the numbers aren't really in decimal, but rather in binary, and converting to decimal is just how perl displays them. So of course they're decimal, as they're numbers, not strings representing written hex digits.

Even though they're just numbers it doesn't look right to me; nor, apparently, to Roger. I mean, memory locations are written in hex, right? That's just the way things are done. So to rectify this he uses `printf` to convert the results using the `%x` format.

```perl
    my $foo="wibble";
    printf('0x%x',0+\$foo);
```


## use a FORMAT CONVERSION
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/stuart-little/perl/ch-1.pl) and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/wanderdoc/perl/ch-1.pl)

So while we're busy formatting, another way to get to the pointeresque underpinnings of a variable is though `sprintf`. The formatting options provide us with a `%p` conversion, which produces a pointer, the item's location, in hexadecimal notation.

[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/stuart-little/perl/ch-1.pl)

Stuart explicitly imports the `bignum` version of `hex`, and uses it to convert the hexadecimal pointer generated with  the `sprintf "%p"` conversion. Using `bignum` now automatically overrides `hex`, but this is compatible with older versions of Perl.

We've seen this step before — I mentioned then it wouldn't be the only time we would see it.

```perl
    use bignum qw/hex/;

    my $x=5;
    say qq|The variable \$x has value $x and address ${\ do{hex(sprintf("%p", $x))}}.|;
```

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/wanderdoc/perl/ch-1.pl)

Wanderdoc, on the other hand, allows both 10 and 16-digit representations to coexist. This is good, for, as I have stated before, numbers are very egalitarian like that. All for one, and one for all. So however you would like them served, the base is provided.

```perl
    my $var = 'Test';
    my $address = sprintf("%p", $var);
    printf("%d %s$/", hex($address), $address);
```


## using a module
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/adam-russell/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/athanasius/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/colin-crain/perl/ch-1.pl), and
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/polettix/perl/ch-1.pl)

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/colin-crain/perl/ch-1.pl)

For my own submission, I first built a fairly bog-standard solution to match the hex string out from a reference, in the manner we've seen many times now. But this left me unsatisfied, and poking around I ended up discovering `Devel::Peek`, which, with its `Dump` routine, allows a much more thorough examination of the various structures that compose a Perl variable. Although I believe the "regex over ref" solution properly answers to the task, the `Dump` output is far more interesting.

```
    The variable head is stored at 0x7ff8c6829a70
    The variable is a scalar
    -------------------------

    SV = PV(0x7ff8c680ca80) at 0x7ff8c6829a70
      REFCNT = 2
      FLAGS = (POK,IsCOW,pPOK)
      PV = 0x7ff8c6608690 "this is a string"\0
      CUR = 16
      LEN = 18
      COW_REFCNT = 1
```

```perl
    my $foo = "this is a string";
    my $foo_ref = \$foo;
    $foo_ref =~ m/(SCALAR|ARRAY|HASH)\((.*)\)/;

    say "The variable head is stored at $2";
    my $det = $1 eq 'ARRAY' ? 'an' : 'a';
    say "The variable is $det \L$1";
    say "-" x 25;
    say '';

    Dump $foo;
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/athanasius/perl/ch-1.pl)

The monk also reaches for the very worthy `Devel::Peek` module to look deeply inside a variable. One thing though, is that being a debugging tool `Dump` writes its report to `STDERR` directly. Using the capabilities of `Capture::Tiny` solves that problem, allowing them to grab the output and store it in a string, which can then be parsed with a regular expression to note the locations of the "head" and "body" segments. In this case the body is an **IV**, or Integer Value, type. In the example output above, the string body is a **PV**, or Pointer Value type (**SV** was already taken for Scalar Values).

```
    Memory location of $var following the statement "my $var = 42;"
    - The scalar's head is allocated at address 0x7ff6ad051248
    - The scalar's body is allocated at address 0x7ff6ad051238
```

```perl
    my $var  = 42;
    my $dump = capture_stderr { Dump $var };

    my ($body, $head) =
        $dump =~ / IV \( 0x ([0-9a-f]+) \) \s at \s 0x ([0-9a-f]+) /x;

    print 'Memory location of $var following the statement ',
        qq["my \$var = 42;"\n],
          "- The scalar's head is allocated at address 0x$head\n",
          "- The scalar's body is allocated at address 0x$body\n";
```



[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/adam-russell/perl/ch-1.pl)

Adam follows a very similar course in his submission, again using `Capture::Tiny` to redirect `STDERR`, assigning it to a string using the `capture_stderr()` routine. He also provides us with an example from a constant, providing the address of the scalar holding the constant value rather than the subroutine that does the emulation.

```perl
use Devel::Peek;
use Capture::Tiny q/capture_stderr/;
use constant A => "test";
my $a = 1;
my $address;
my $stderr = capture_stderr {
    Dump(A)
};
$stderr =~ m/at\s(0x.*\n).*/;
$address = $1;
chomp($address);
print "Address of constant A: $address\n";
$stderr = capture_stderr {
    Dump($a)
};
$stderr =~ m/at\s(0x.*\n).*/;
$address = $1;
chomp($address);
print "Address of \$a: $address\n";
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/polettix/perl/ch-1.pl)

Finally, Flavio reaches for the core scalar utility package `Scalar::Util`, where he finds the function `refaddr()`.

This function, when given a reference, returns a memory address as an integer. Huh. Just what we ordered. His `locate_memory()` function detects the nature of the given scalar, either taking a reference to it or passing it through unaltered.

```perl
    use Scalar::Util 'refaddr';
    sub locate_memory { refaddr(ref($_[0]) ? $_[0] : \$_[0]) }

    my  $whatever = 42;
    say locate_memory($whatever);
    say locate_memory(\$whatever);
    say locate_memory(\\$whatever);
    say locate_memory(42);
    say locate_memory(42);
    say locate_memory(bless {}, 'Whatever');
```

```
    140468944016688
    140468944016688
    140468943897248
    140468944016712
    140468944015608
    140468943897248
```







------------------------------------------





---

# TASK 2 {#PWC108TASK2}

# Bell Numbers
*Submitted by: Mohammad S Anwar*
Write a script to display top 10 Bell Numbers. Please refer to [Wikipedia page](https://en.wikipedia.org/wiki/Bell_number) for more informations.

**Example:**

    B0: 1 as you can only have one partition of zero element set
    B1: 1 as you can only have one partition of one element set {a}.
    B2: 2
       {a}{b}
       {a,b}
    B3: 5
       {a}{b}{c}
       {a,b}{c}
       {a}{b,c}
       {a,c}{b}
       {a,b,c}
    B4: 15
       {a}{b}{c}{d}
       {a,b,c,d}
       {a,b}{c,d}
       {a,c}{b,d}
       {a,d}{b,c}
       {a,b}{c}{d}
       {a,c}{b}{d}
       {a,d}{b}{c}
       {b,c}{a}{d}
       {b,d}{a}{c}
       {c,d}{a}{b}
       {a}{b,c,d}
       {b}{a,c,d}
       {c}{a,b,d}
       {d}{a,b,c}


## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/abigail/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/adam-russell/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/arne-sommer/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/athanasius/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/jo-37/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/laurent-rosenfeld/perl/ch-2.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/mohammad-anwar/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/perlboy1967/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/pete-houston/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/sgreen/perl/ch-2.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/stuart-little/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/ulrich-rieke/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/wlmb/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/wanderdoc/perl/ch-2.pl)

There were 23 submissions for the second task this past week.


As actually methodically constructing a possible partition sets for a given value is not particularly easy — both computationally and comprehensibly challenging — nearly all submissions took the more sensible road and used a triangular construction method for deriving the numbers graphically from a grid.

The Bell Triangle, as it is known, found several variants in coding, but all methods used the same atomic components. We'll have a look through the variations.

Of course given two roads some will always willingly choose the more difficult path. I don't think number theory would even exist were this not true. Several answers explored the physical combinatorical bucket side of the solutions, and a complement of others came at it from the opposing, mathematical point of view.  We'll look at these as well.


## the BELL TRIANGLE
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/abigail/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/adam-russell/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/arne-sommer/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/athanasius/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/colin-crain/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/duncan-c-white/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/james-smith/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/laurent-rosenfeld/perl/ch-2.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/mohammad-anwar/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/perlboy1967/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/pete-houston/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/sgreen/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/ulrich-rieke/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/wlmb/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/wanderdoc/perl/ch-2.pl)


The Bell triangle is constructed methodically from a single row with 1 element: the value 1. For each row we start with the last value of the previous row, carrying it down and placing it in the first position of the new row. The single 1 from the first row is both the first and last element, so it is copied to start the second row. To complete the rest of the new row we take the last value and add it to the value immediately above it, adding it to the end of the list. This is repeated, adding one value after another, until there are no more values from the previous row to add.

In continuing to build out our base triangle we add the 1 that starts the second row to the single 1 above it on the first row to get 2, which we use to extend the second row. We have now run out of number pairs to add, and the second row has one more element than the first. We carry the 2 down and begin the third row:

```
    1
    1 2
    2
```

Adding the accumulating values from row three and row two, we get 2 + 1 = 3, then our newly calculated 3 + 2 = 5, and we have finished the row again. We carry down the 5 to begin the next row, and continue:

```
    1
    1   2
    2   3   5
    5   7   10  15
    15  20  27  37  52
    52  67  87  114 151 203
    203 255 322 409 523 674 877
    877 ...
```

The Bell number sequence is the left-hand side of this structure:

{1, 1, 2, 5, 15, 52, 203, 877, ...}

*Why* this is true is left as an exercise to the reader.

### the basic ITERATIVE FORM
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/abigail/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/adam-russell/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/arne-sommer/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/athanasius/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/colin-crain/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/duncan-c-white/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/jaldhar-h-vyas/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/laurent-rosenfeld/perl/ch-2.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/mohammad-anwar/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/pete-houston/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/sgreen/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/wlmb/perl/ch-2.pl)

The basic triangular construction involves two operations: copying the end of the previous row to start a new row, and summing an element with the one above it to create the next element in a row. Two loop structures contain these steps, one to add a new row and a second to fill the values within it.

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/colin-crain/perl/ch-2.pl)

I'll start the ball rolling with a straightforward demonstration of the the technique. The two steps in the two loops are clearly visible. Rather than gather the sequence values as they are found I simply extract them from the triangle when finished.

```perl
    $triangle->[0] = [1];

    for my $row ( 1..$values ) {
        ## the first value
        $triangle->[$row][0] = $triangle->[$row-1][-1];

        ## the rest of the row
        for my $i (1..$row) {
            $triangle->[$row][$i] =
                $triangle->[$row-1][$i-1] + $triangle->[$row][$i-1];
        }
    }

    for my $n (0..$values) {
        printf "%10s %-s\n", "B($n)", $triangle->[$n][0];
    }
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/athanasius/perl/ch-2.pl)

Although their example looks a little different, the monk still enacts the same steps, albeit slightly rearranged.

```perl
    for (2 .. $target - 1)
    {
        $triangle[$row + 1] = [ $triangle[$row][$row] ];

        for my $col (1 .. ++$row)
        {
            push $triangle[$row    ]->@*,
                 $triangle[$row    ][$col - 1] +
                 $triangle[$row - 1][$col - 1];
        }
    }

    my   @bell;
    push @bell, $triangle[$_][ 0] for 0 .. $#triangle;
    push @bell, $triangle[-1][-1];
```

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/sgreen/perl/ch-2.pl)

Simon states that he took the [animated GIF from the Wiki page](https://en.wikipedia.org/wiki/Bell_number#/media/File:BellNumberAnimated.gif) as his inspiration, creating a pair of separate 'copy' and 'add' actions to successively handle the two phases of the algorithm — first copying down the last row element to start a row and then vertically summing elements from the current and previous rows to produce the next element. The second step is, as we've seen, looped until the line finishes the values from the previous row.

What makes his solution so differnt is that all of the indexing math is done relative to the ends of the rows and columns, `[-1]` and `[-2]` rather than by explicitly counting positions up from 0. The first action takes the last element from the last row of the triangle as it exists at that moment and creates a new row with it. The next action fills the remaining values, but now the index for the previous line is `[-2]`.

```perl
    while ( @bell < $count ) {
        my $cols = $#{ $bell[-1] };

        # Create a new row with the last number from the previous row
        push @bell, [ $bell[-1][-1] ];

        # Add each number with the same position from previous row
        foreach my $col ( 0 .. $cols ) {
            push @{ $bell[-1] }, $bell[-2][$col] + $bell[-1][$col];
        }
    }
```


[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/pete-houston/perl/ch-2.pl)

Pete assembles each new row of his triangle as a separate array, then pushes it on to the growing triangle structure. The result is quite neat and compact.

```perl
    my @t = ([1]);
    for my $x (1 .. $max) {
        my @row = ($t[$x-1]->[-1]);
        for my $i (1 .. $x) {
            push @row, $row[-1] + $t[$x-1]->[$i-1];
        }
        push @t, [@row];
    }
```


[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/abigail/perl/ch-2.pl)

Abigail takes the waste of over-optimization to the task very seriously, and so presents a bare-bone implementation that gets the job done effectively and quickly.

```perl
    my @bell = [1];
    for (my $x = 1; $x < $COUNT - 1; $x ++) {
        $bell [$x] [0] = $bell [$x - 1] [-1];
        for (my $y = 1; $y <= $x; $y ++) {
            $bell [$x] [$y] = $bell [$x] [$y - 1] + $bell [$x - 1] [$y - 1]
        }
    }

    $, = ", ";
    say 1, map {$$_ [-1]} @bell;
```

He then goes on to create the solution in a host of different languages, really exploring the differences in implementation between them.

Additional Languages:

[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/abigail/awk/ch-2.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/abigail/bash/ch-2.sh), [Basic](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/abigail/basic/ch-2.bas), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/abigail/bc/ch-2.bc), [Befunge-93](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/abigail/befunge-93/ch-2.bf93), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/abigail/c/ch-2.c), [Cobol](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/abigail/cobol/ch-2.cb), [Csh](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/abigail/csh/ch-2.csh), [Erlang](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/abigail/erlang/ch-2.erl), [Forth](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/abigail/forth/ch-2.fs), [Fortran](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/abigail/fortran/ch-2.f90), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/abigail/go/ch-2.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/abigail/java/ch-2.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/abigail/lua/ch-2.lua), [M4](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/abigail/m4/ch-2.m4), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/abigail/node/ch-2.js), [Ocaml](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/abigail/ocaml/ch-2.ml), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/abigail/pascal/ch-2.p), [Php](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/abigail/php/ch-2.php), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/abigail/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/abigail/python/ch-2.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/abigail/r/ch-2.r), [Rexx](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/abigail/rexx/ch-2.rexx), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/abigail/ruby/ch-2.rb), [Scheme](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/abigail/scheme/ch-2.scm), [Sed](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/abigail/sed/ch-2.sed), [Sql](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/abigail/sql/ch-2.sql), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/abigail/tcl/ch-2.tcl)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/laurent-rosenfeld/perl/ch-2.pl)

Laurent shares another straightforward implementation, which he replicates in, again, a  variety of different languages. I find these excursions into comparitive linguistics really interesting and I'll try expanding this section, including them more often.

```perl
    use constant MAX => 9;

    my @tr;
    $tr[0][0] = 1;
    for my $row (1..MAX) {
        $tr[$row][0] = $tr[$row - 1][-1];
        for my $i (1..$row) {
            $tr[$row][$i] = $tr[$row][$i-1] + $tr[$row - 1][$i-1];
        }
    }
    say join " ", map { $tr[$_][0] } 0..$#tr;
```

Additional Languages:

[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/laurent-rosenfeld/awk/ch-2.awk), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/laurent-rosenfeld/c/ch-2.c), [D](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/laurent-rosenfeld/d/ch-2.d), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/laurent-rosenfeld/go/ch-2.go), [Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/laurent-rosenfeld/julia/ch-2.julia), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/laurent-rosenfeld/pascal/ch-2.p), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/laurent-rosenfeld/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/laurent-rosenfeld/raku/ch-2.raku), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/laurent-rosenfeld/ruby/ch-2.rb), [Scala](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/laurent-rosenfeld/scala/ch-2.scala)

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/arne-sommer/perl/ch-2.pl)

Arne constructs his triangle a little differently, creating not one but two working arrays to facilitate his logic. The rows are still saved to a triangular array. As the last element from a row is copied to the first element of the new row, the Bell numbers line the triangle on both sides. Arne chooses to access the values from end of the rows; a small amount of bookkeeping is required to adjust for the offset and make sure the final sequence produced has the generated values in the correct positions.

The technique of using two working rows to produce new values can be refined further, which we'll look at next.

```perl
    my @first = (1);
    my @triangle = (\@first);
    my $row = 0;

    while ($count-- > 0)
    {
      $row++;
      my @prev = @{$triangle[$row-1]};
      my @new  = $prev[-1];

      for my $index (0 .. @prev -1)
      {
        push(@new, $new[-1] + $prev[$index]);
      }

      push(@triangle, \@new);

      say $new[-1];
    }
```


### IMPROVING the TRIANGLE
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/polettix/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/james-smith/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/perlboy1967/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/ulrich-rieke/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/wanderdoc/perl/ch-2.pl)

The basic form of constructing the whole triangle works well, but isn't exactly the most memory-efficient. Once we've exceeded three rows the first row largely becomes obsolete; at any one time we really only need two rows to obtain new results: a row to go from, and a row to go to. If we save out the first or last element into a separate array of Bell numbers these excess rows can be completely discarded.

Except for the whole "dynamic" decision-making part, the stepwise procedure is oddly reminiscent of some dynamic programming algorithms.

The principle gain from proceeding this way is mostly through more efficient use of memory resources when computing sequence values much larger than specified in the task.

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/perlboy1967/perl/ch-2.pl)

Earlier we saw how the triangle row iterator could be dispensed with by counting either one or two steps from the end to reference the correct line. This focuses the logic on the two active lines in the structure. Here Niels demonstrates the same technique with an added twist: once the new row is finished and the Bell number saved, the "triangle" array, `@BnT`, is shifted in void context, throwing away a row that need never be referenced again.

```perl
    my @bn = (1,1);
    my @bnT = map {[$_]} @bn;

    if ($nB > 2) {
      foreach (2 .. $nB-1) {
        # Add row
        push(@bnT,[0]);

        # Copy
        $bnT[-1][0] = $bnT[-2][-1];
        foreach (1 .. scalar(@{$bnT[-2]})) {
          # Add
          $bnT[-1][$_] =
            $bnT[-2][$_-1] +
            $bnT[-1][$_-1];
        }

        push(@bn,$bnT[-1][-1]);
        shift(@bnT);
      }
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/polettix/perl/ch-2.pl)

Flavio comes up with a clever way to remove not only the row iterator but also an explicit column iterator. By running a `for` loop over the *values* of the previous line he can always sum that value with the last value of the new line. As the sum is added to extend the new line, the values line up vertically for the next iteration. When the previous line is spent the new line is complete. Everything just works out. Sweet.

He also use two `state` variables to preserve the current line and a list of computed Bell numbers. The function only prints out whichever index in the sequence is requested, and to obtain a given index it will construct a list large enough to generate the value using the triangle method. The values are maintained in the `state` variables, so the calculations will only be made once, to construct a triangle to generate the maximum value requested. A new request for a larger value will simply extend the structure starting with the last line created until the new index is calculated.

```perl
    sub bell_number ($N) {
       state $cache = [1];
       state $line = [1];
       while ($cache->$#* < $N) {
          my @previous_line = $line->@*;
          $line->@* = $previous_line[-1];
          push $line->@*, $_ + $line->[-1] for @previous_line;
          push $cache->@*, $line->[0];
       }
       return $cache->[$N];
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/james-smith/perl/ch-2.pl)

James offers us a tightly packed routine that uses two arrays, called simply `@a` and `@b` to hold the data for the active rows. Because at the end of his loop he sets the contents of the previous line, `@a`, to the contents of the new line, `@b`, the data is copied over but the arrays themselves do not need to be reinitialized, and only occasionally reallocated. How much does this matter? The code is very fast: by adding the line `use bigint` and calculating B(1000), the time to finish was nearly one third of the norm.

That's something to think about. I'm sure the savings in compounded from several vectors.  A complete guide to his notes is in the source. It's really remarkable.

```perl
    sub bell_numbers {
      my $N = shift;
      my @res = my @a = 1;                 #1
      while(1) {
        push @res, my @b = $a[-1];         #2
        return \@res if @res >= $N;        #3
        push @b, $b[-1] + $_ foreach @a;   #4
        @a = @b;                           #5
      }
    }
```


## CONSTRUCTING the ACTUAL PARTITIONS
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/dave-jacoby/perl/ch-2.pl) and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/wlmb/perl/ch-2.pl)

In combinatorics, the partition sets of a group of elements is the number of distinct ways to place *n* different items non-exclusively into *n* unlabeled buckets. Think of it as dividing a central pool of objects into separate piles. We can divide the heap into 2 parts in a variety of ways, or into three parts, or more, until such time as we have as many parts as pieces. In this scheme empty piles don't make any sense, and neither the order of the piles nor the items within the piles matters, but every item is different, so dividing off a single item into a separate pile and a different single item into a separate pile are two distinct partitions.

The easy way to visualize this is with a small case, 3 items into a maximum of 3 buckets:

The first item can go into any one of the 3 buckets, and as more than one item can go in a bucket this is true for the other two items as well. This yields 3<sup>3</sup> combinations. But because these are sets of objects, order doesn't matter, and many of these groupings are simply rearrangements of the same partition. The first two items in the first bucket and the third item in the second or third bucket — it doesn't matter, this is only one way to divide the pile.

A few brave souls looked at the examples and said: "I can make that", and set about calculating the actual partitions, rather than the using the triangle to cut to the chase. As the numbers do get quite large, instantiating the partitions quickly became cumbersome.

Recursion, adding the next element and the next bucket with every increase in *n*, was the name of the game here.

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/wlmb/perl/ch-2.pl)

Luis provides us today with two solutions. In his first solution he manually assembles the various partitions; the Bell number is then therefore the number of partitions created fo each number.

He keeps his partition sets as lists of lists... of lists, because each partition set member is also a set of items. With each new added item, he augments his existing sets in two ways. In the first every set is given an additional member, the new element. In the second the new element is added to every existing list within each set; each one of these variations makes a new partition set. Combining these two augmentations produces the complete new set of partitions for the given number.

```
    bell(0)=1
        {}

    bell(1)=1
        {1}

    bell(2)=2
        {1}{2}
        {1,2}

    bell(3)=5
        {1}{2}{3}
        {1,2}{3}
        {1,3}{2}
        {1}{2,3}
        {1,2,3}

    bell(4)=15
        {1}{2}{3}{4}
        {1,2}{3}{4}
        {1,3}{2}{4}
        {1}{2,3}{4}
        {1,2,3}{4}
        {1,4}{2}{3}
        {1}{2,4}{3}
        {1}{2}{3,4}
        {1,2,4}{3}
        {1,2}{3,4}
        {1,3,4}{2}
        {1,3}{2,4}
        {1,4}{2,3}
        {1}{2,3,4}
        {1,2,3,4}

    bell(5)=52
        {1}{2}{3}{4}{5}
        {1,2}{3}{4}{5}
        {1,3}{2}{4}{5}
        {1}{2,3}{4}{5}
        {1,2,3}{4}{5}
        {1,4}{2}{3}{5}
        {1}{2,4}{3}{5}
        {1}{2}{3,4}{5}
        {1,2,4}{3}{5} ...

```

```perl
    foreach(0..$last){
        my $partitions=bell($_);
        my $bell=@$partitions;
        say "\nbell($_)=$bell";
        foreach my $p(@$partitions){
        print "\t";
        foreach(@$p){
            print "{", join(",", @$_), "}";
        }
        say "";
        }
    }
    sub bell {
        my $n=shift;
        die "Argument of Bell should be non-negative" if $n<0;
        return [[[]]] if $n==0;
        return [[[1]]] if $n==1;
        my $previous=bell($n-1);
        my @with_new_set=map {[@$_, [$n]]} @$previous;
        my @with_new_element=map {
        my @sets=@$_; map {[@sets[0..$_-1], [@{$sets[$_]}, $n], @sets[$_+1..@sets-1]]}
        (0..@sets-1)} @$previous;
        my @current=(@with_new_set, @with_new_element);
        return [@current];
    }
```

As he notes, the solutions do take up a lot of room, to questionable gain. To make a more general-purpose solution he constructs a simple Bell triangle much like what we've seen numerous times.


[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/dave-jacoby/perl/ch-2.pl)

Dave proceeds by creating *n* pockets to hold his items, then creating *n* sets by placing the first item into each pocket. He then creates *n* sets from each of these sets by placing the second items into each pocket...  As this will produce exponential growth things explode quickly. Not every combination will be unique, however, so he uses a filtering process to sort the array and remove duplicates on the last pass through.

Here's the condensed version. He provides extensive commentary in his script, and [in his writeup of the code](https://jacoby.github.io/2021/04/15/hells-bells-margaret-perl-weekly-challenge-108.html):


```perl
sub bell_number( @set ) {
    return 1, [] unless scalar @set;

    @set = sort @set; # just making sure
    my @partitions;
    for ( 0 .. scalar @set ) { push @partitions, [] }
    my @output = _bell_number( \@set, \@partitions );
    return ( scalar @output, @output );
}

sub _bell_number ( $set, $partitions ) {
    my @output;
    my $set2->@* = map { $_ } $set->@*;
    my $l = shift $set2->@*;

    for my $i ( 0 .. -1 + scalar $partitions->@* ) {
        my $prt->@* = map { [@$_] } $partitions->@*;
        push $prt->[$i]->@*, $l;

        # If there are more letters to use, we we go
        # again
        if ( scalar $set2->@* ) {
            push @output, _bell_number( $set2, $prt );
        }

        else {
            my $prt2->@* =
                sort { $a->[0] cmp $b->[0] }
                grep { scalar $_->@* }
                map  { [@$_] } $prt->@*;
            my $prtj = $json->encode($prt2);
            $filter{$prtj}++;
            push @output, $prtj unless $filter{$prtj} < 2;
        }
    }

    @output = uniq @output;
    return @output;
}
```












## the POWER OF MATH
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/cheok-yin-fung/perl/ch-2.pl) and
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/jo-37/perl/ch-2.pl)


The Bell numbers have been studied by mathematicians long before the work of [Eric Temple Bell](), whom they were named after. Being the list of partitions they are analogous to and tied to other combinatorial constructs such as the binomial coefficient and the [Stirling numbers](https://en.wikipedia.org/wiki/Stirling_number).

Several mathematical processes have been discovered for deriving the Bell numbers.

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/cheok-yin-fung/perl/ch-2.pl)

>With: <br>
**P**(*n*) = the number of integer partitions of *n*, <br>
**p**(*i*) = the number of parts of the *i*-th partition of *n*, <br>
**d**(*i*) = the number of different parts of the *i*-th partition of *n*, <br>
**p**(*j,i*) = the *j*-th part of the *i*-th partition of *n*, <br>
**m**(*i,j*) = multiplicity of the *j*-th part of the *i*-th partition of *n*, <br>
one has: <br>
**a**(*n*) = **∑**{*i*=1..**P**(*n*)} (*n*!/(**∏**{*j*=1..**p**(*i*)} **p**(*i,j*)!)) * (1/( **∏**{*j*=1..**d**(*i*)} **m**(*i,j*)!))
>- Thomas Wieder, May 18 2005 (OEIS)

Ok. Sounds good. Here you go:

```perl
    use Integer::Partition;

    sub bell_num {
        my $m = $_[0];
        my $ans = 0;
        return 1 if $m == 0 or $m == 1;
        my $i = Integer::Partition->new($m);
        while (my $partition = $i->next) {
            my @list = @$partition;
            $ans += process_combin($m, $partition)/dup($partition);
        }
        return $ans;
    }

    sub process_combin {
        my $var_m = $_[0];
        my @arr = @{$_[1]};
        @arr = grep {$_ != 1} @arr;  # save a bit of time
        my $ans = 1;
        for (0..$#arr) {
            $ans *= combin($var_m, $arr[$_]);
            $var_m = $var_m - $arr[$_];
        }
        return $ans;
    }

    sub dup {
        my @arr = @{$_[0]};
        @arr = grep {$_ != 1} @arr;  # save a bit of time
        my $ans = 1;

        my $preced = $arr[0];
        my $dup_term = 1;
        for (1..$#arr) {
            if ($preced != $arr[$_]) {
                $ans *= factorial($dup_term) if $dup_term != 1;
                                 # the if clause, saves a bit of time
                $preced = $arr[$_];
                $dup_term = 1;
            }
            else {
                $dup_term++;
            }
        }
        if ($dup_term != 1) {
            $ans *= factorial($dup_term);
        }
        return $ans;
    }
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-108/jo-37/perl/ch-2.pl)

Jorg has been exploring the benthic depths of `Math::Prime::Util` for some weeks now. Because of combinatorial connections to partition sets, he thought it might hold something useful to this task, and indeed it does. While not having a readymade function to produce the Bell numbers, it does provide a handy example of using functions from the module to derive the numbers in the documentation.


So Jorg gives credit to the module docs for this one,:

```perl
    use Math::Prime::Util qw(vecsum stirling);

    sub B { my $n = shift; vecsum(map { stirling($n,$_,2) } 0..$n) }
```

Of note the formula is using the [Stirling numbers of the second kind](https://en.wikipedia.org/wiki/Stirling_numbers_of_the_second_kind).




------------------------------------------





---

# BLOGS {#PWC108BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, I somehow continue to maintain my bearings. Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC093BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *READ* these *BLOG* *LINKS*:

**( *don't think, trust your training, you're in the zone, just do it ...* )**


**Aaron Smith**

 * [Perl Weekly Challenge 108 - Aaron Smith](https://aaronreidsmith.github.io/blog/perl-weekly-challenge-108/) ( *Raku* )

**Abigail**

 * [Perl Weekly Challenge 108: Locate Memory](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-108-1.html) ( *Perl* )
 * [Perl Weekly Challenge 108: Bell Numbers](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-108-2.html) ( *Perl* )

**Adam Russell**

 * [Memory Addresses and Bell Numbers: The Weekly Challenge 108 - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2021/04/18) ( *Perl* )
 * [Memory Addresses and Bell Numbers: The Weekly Challenge 108 - Prolog - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2021/04/18) ( *Prolog* )

**Arne Sommer**

 * [Locate the Bell with Raku and Perl](https://raku-musings.com/locate-bell.html) ( *Perl & Raku* )

**Colin Crain**

 * [Partitions in Memories, A Triangular Palace — Programming Excursions in Perl and Raku](https://colincrain.com/2021/04/16/partitions-in-memories-a-triangular-palace/) ( *Perl & Raku* )

**Daniel Bowling**

 * [Swagg::Blogg](https://blog.swagg.net) ( *Raku* )

**Dave Jacoby**

 * [Hell’s Bells, Margaret: Perl Weekly Challenge #108 | Committed to Memory](https://jacoby.github.io/2021/04/15/hells-bells-margaret-perl-weekly-challenge-108.html) ( *Perl* )

**Flavio Poletti**

 * [PWC108 - Locate Memory - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/04/14/pwc108-locate-memory/) ( *Perl* )
 * [PWC108 - Bell Numbers - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/04/15/pwc108-bell-numbers/) ( *Perl* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 108](https://www.braincells.com/perl/2021/04/perl_weekly_challenge_week_108.html) ( *Perl & Raku* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 108: Locate Memory and Bell Numbers | laurent_r](http://blogs.perl.org/users/laurent_r/2021/04/perl-weekly-challenge-108-locate-memory-and-bell-numbers.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 108: Memory Layout and Bell Numbers – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2021/04/12/PerlWeeklyChallenge108.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 108: Memory Layout and Bell Numbers – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2021/04/12/PerlWeeklyChallenge108.html#task2) ( *Raku* )

**Mohammad S Anwar**

 * [Perl Weekly Challenge - 108 (Task #1: Locate Memory) - YouTube](https://youtu.be/TZUOgXYlrgo) ( *Perl* )
 * [Perl Weekly Challenge - 108 (Task #2: Bell Numbers) - YouTube](https://youtu.be/dcF3Ojc_unQ) ( *Perl* )

**Roger Bell_West**

 * [RogerBW's Blog: Perl Weekly Challenge 108: Memory Bell](https://blog.firedrake.org/archive/2021/04/Perl_Weekly_Challenge_108__Memory_Bell.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 108](https://dev.to/simongreennet/weekly-challenge-108-3di2) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 108 – W. Luis Mochán](https://wlmb.github.io/2021/04/12/PWC108/) ( *Perl* )
