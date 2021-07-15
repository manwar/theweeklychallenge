---
author:       Colin Crain
date:         2021-07-15T00:00:00
description:  "Colin Crain › Perl Weekly Review #118"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #118"
image:        images/blog/p5-review-challenge-118.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-117/).* )

Welcome to the Perl review for **Week 118** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

---

### Why do we do these challenges?

I suppose any answers to that would be as wide ranging and varied as the people who choose to join the team. One thing is clear: it's not a competition, and there are no judges, even if there is a "prize" of sorts. About that -- I think of it more as an honorarium periodically awarded to acknowledge the efforts we make towards this strange goal. So there's no determination to find the *fastest*, or the *shortest*, or even, in some abstract way, the *best* way to go about things, although I'm certain the individuals have their own aspirations and personal drives. As Perl is such a wonderfully expressive language, this provides quite a bit of fodder to the core idea of TMTOWTDI, producing a wide gamut of varied techniques and solutions.

Even the tasks themselves are often open to a certain amount of discretionary interpretation. What we end up with is a situation where each participant is producing something in the manner they find the most interesting or satisfying. Some team members focus on carefully crafted complete applications that thoroughly vet input data and handle every use case they can think up. Others chose to apply themselves to the logic of the underlying puzzle and making it work in the most elegant way they can. Some eschew modules they would ordinarily reach for, others embrace them, bringing to light wheels perhaps invented years ago that happen to exactly solve the problem in front of them today.

I've been considering this question for some time and have found one binding commonality between all of us solving these challenges each week, in that however we normally live our lives, the task in front of us more than likely has nothing to do with any of that . And I think this has great value. We all do what we do, out in the real world, and hopefully we do it well. The Weekly Challenge provides a opportunity to do something germane to that life yet distinctly different; if we only do the things we already know how to do we only do the same things over and over. This is where the "challenge" aspect comes into play.

So we can consider the Weekly Challenge as providing a problem space outside of our comfort zone, as far out from comfort as we wish to take things. From those reaches we can gather and learn things and bring what we want back into our lives. Personally, I think that's its greatest value of all.

---

Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due. And that's why I'm here, to try and figure out how to do that.

Let's have a look and see what we can find.

---

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-118/) or the summary [**recap**](/blog/recap-challenge-118/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC118TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC118TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC118BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC118TASK1}

# Binary Palindrome
*Submitted by: Mohammad S Anwar*<br>
You are given a positive integer $N.

Write a script to find out if the binary representation of the given integer is Palindrome. Print 1 if it is otherwise 0.

Example
Input: $N = 5
Output: 1 as binary representation of 5 is 101 which is Palindrome.

Input: $N = 4
Output: 0 as binary representation of 4 is 100 which is NOT Palindrome.


## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/abigail/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/athanasius/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/colin-crain/perl/ch-1.pl),
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/cristian-heredia/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/dave-jacoby/perl/ch-1.pl),
[**Duane Powell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/duane-powell/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/jo-37/perl/ch-1.pl),
[**Lance Wicks**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/lance-wicks/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/laurent-rosenfeld/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/perlboy1967/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/paulo-custodio/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/pete-houston/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/sgreen/perl/ch-1.pl),
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/steven-wilson/perl/ch-1.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/stuart-little/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/ulrich-rieke/perl/ch-1.pl),
[**Vinod Kumar K**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/vinod-k/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/wlmb/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/wanderdoc/perl/ch-1.pl)


There were 28 submissions for the first task this past week. There was quite a lot of self-similarity in the submissions, but that said we did see a little variation to spice things up.

Then again there's always that cohort that just have to do things differently. Honestly there there wasn't a tremendous amount of opportunity for this with the source material presented, but, you know, life finds a way. Any monotony on the front end of the week's challenge, however,  was more than made up for by the chess puzzle in the second act.

But we're getting way ahead of ourselves.

Foreshadowing is all well and good, but one thing at a time, please.

## the STANDARD METHOD
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/arne-sommer/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/dave-jacoby/perl/ch-1.pl),
[**Duane Powell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/duane-powell/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/duncan-c-white/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/jaldhar-h-vyas/perl/ch-1.pl),
[**Lance Wicks**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/lance-wicks/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/laurent-rosenfeld/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/mohammad-anwar/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/paulo-custodio/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/sgreen/perl/ch-1.pl),
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/steven-wilson/perl/ch-1.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/stuart-little/perl/ch-1.pl),
[**Vinod Kumar K**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/vinod-k/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/wlmb/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/wanderdoc/perl/ch-1.pl)


To check to see whether a number is a palindrome in its binary representation there are two basic steps: convert the view to binary and apply a check for palindrome status to the string. These steps were typically taken care of by using a `sprintf` format conversion to create a binary string and then using `reverse` to flip the string before appling an equality comparison.

[**Duane Powell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/duane-powell/perl/ch-1.pl)

We open up with a concise demonstration of the steps from Duane. As you see, as conversion to a string of 1s and 0s, the he places the reverse comparison within a ternary operation to get the desired 0/1 output.

```perl
    my $B = sprintf "%b", shift;
    say (($B eq reverse($B)) ? 1 : 0);
```

[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/paulo-custodio/perl/ch-1.pl)

**additional languages:**
[C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/paulo-custodio/c/ch-1.c), [C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/paulo-custodio/cpp/ch-1.cpp), [D](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/paulo-custodio/d/ch_1.d)

Paulo adds an explicit variable to hold the reversed string but otherwise operates the same way.

```perl
    my $N = shift // 0;
    my $bits = sprintf("%b", $N);
    my $rbits = reverse($bits);
    say $bits eq $rbits ? 1 : 0;
```

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/sgreen/perl/ch-1.pl)

You can see a definite pattern beginning to emerge...

```perl
    my $bin = sprintf '%b', $number;

    say $bin eq reverse($bin) ? 1 : 0;
```

[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/steven-wilson/perl/ch-1.pl)

**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/steven-wilson/python/ch-1.py)

Ok, beginning to break out a bit, Steven avoids the ternary operation for a set of  `if/else` blocks in a subroutine.

```perl
    sub is_binary_palindrome {
        my $integer = shift;
        my $binary  = sprintf( "%b", $integer );
        if ( $binary eq reverse $binary ) {
            return 1;
        }
        else {
            return 0;
        }
    }
```

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/arne-sommer/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/arne-sommer/raku/ch-1.raku)

In modern Perl, an equality itself returns a boolean value, but Perl doesn't use an integral boolean type. Instead it returns 1 for a true value and undef for an unambiguous false value, and these return values are first-class citizens and can be accessed and assigned like any other rvalue. If we numify this result by adding 0, these return values become 1 and 0. This behavior can be quite convenient. Here Arne just prints out the result of the comparison.

```perl
    my $bin = sprintf('%b', $N);

    say 0 + ($bin eq reverse($bin));
```

[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/stuart-little/perl/ch-1.pl)

**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/stuart-little/haskell/ch-1.hs), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/stuart-little/node/ch-1.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/stuart-little/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/stuart-little/raku/ch-1.raku)

Here's another example from Stuart, who explicitly divides his binary number into an array
of characters that is reversed. The scalar/listwise behavior of the `reverse` operator can be a little tricky and this is unambiguous. Elsewhere we will see the use of `scalar` to force scalar context on the operator.

```perl
    my $bin=sprintf("%b", $ARGV[0]);
    say 0+($bin eq join "", reverse split("", $bin));
```

[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/mohammad-anwar/perl/ch-1.pl)

Yet another variation on this  from Mohammad, who ensures our getting a digit by using `sprintf` to do an explicit format conversion.

```perl
    my $binary = sprintf("%b", $N);
    print sprintf("%d\n", ($binary eq reverse $binary));
```

[**Lance Wicks**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/lance-wicks/perl/ch-1.pl)

Finally, Lance wraps it all up in a package because, well, that's how he rolls.

I do appreciate the formatting. I do like clear code.

```perl
    package Binary::Palindrome;

    use Moo;

    sub is_palindrome {
        my ( $self, $n ) = @_;

        my $bin = $self->represent_as_binary($n);
        my $rev = reverse $bin;

        if   ( $rev eq $bin ) { return 1 }
        else                  { return 0 }
    }

    sub represent_as_binary {
        my ( $self, $n ) = @_;
        return sprintf( "%b", $n );
    }
```

## DIVIDING DOWN BY 2
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/cheok-yin-fung/perl/ch-1.pl), and
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/ulrich-rieke/perl/ch-1.pl)

Instead of just letting `sprintf` handle the numeric conversion, we saw some mathematical approaches — dividing the input down by 2 and prepending the result of a modulo operation to the binary string being created.

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/ulrich-rieke/perl/ch-1.pl)

**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/ulrich-rieke/cpp/ch-1.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/ulrich-rieke/haskell/ch-1.hs), [Lisp](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/ulrich-rieke/lisp/ch-1.lisp), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/ulrich-rieke/raku/ch-1.raku)

Here Ulrich slowly consumes the input as he creates a binary version one character at a time.

```perl
    my $N = $ARGV[0] ;
    my @bits ;

    while ( $N != 0 ) {
      unshift( @bits , $N % 2 ) ;
      $N = int( $N / 2 ) ;
    }
```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/cheok-yin-fung/perl/ch-1.pl)

**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/cheok-yin-fung/awk/ch-1.awk)

The same mechanism encapsulated in a couple of subroutines from CY. It's good practice to manipulate numbers like this.

```perl
    sub dec2binarr {
        my $s = $_[0];
        my $i = 0;
        my @digit;
        while ($s != 0) {
            ($s, $digit[$i] ) = divmod($s)->@*;
            $i++;
        }
        return [@digit];
    }


    sub divmod {
        my $num = $_[0];
        return [int $num / 2 , $num % 2];
    }
```



## ITERATING over the BITS
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/athanasius/perl/ch-1.pl),
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/cristian-heredia/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/james-smith/perl/ch-1.pl), and
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/roger-bell-west/perl/ch-1.pl)

Instead of reversing the binary number as a string, the alternate manner of working was to reduce it to an array of 1s and 0s. Then we could devise a mechanism to look at the first element and compare it to the last, then the second-in from the front to that from the back, then the third, etc. We could compare the individual characters on the other side of the axis.

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/roger-bell-west/perl/ch-1.pl)

**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/roger-bell-west/rust/ch-1.rs)

Roger demonstrates the technique. After creating a binary string using `sprintf`, we use `split` to divide it into characters. Then we create an iterator variable to increment up to half the length of the list, and use this to count indices from both ends. If the two indicated elements ever don't match we immediately return 0, and return 1 if we make it through the gauntlet.

```perl
    sub bp {
      my $n=shift;
      my @s=split '',sprintf('%b',$n);
      my $l=$#s;
      foreach my $i (0..int($l/2)) {
        if ($s[$i] ne $s[$l-$i]) {
          return 0;
        }
      }
      return 1;
    }
```

[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/cristian-heredia/perl/ch-1.pl)

**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/cristian-heredia/python/ch-1.py)

Christina gives us another version, counting upwards and downwards with two independant variables, one incrementing, the other decrementing.

```perl
    foreach (my $i=0; $i<@bits; $i++){
        if ($bits[$i] != $bits[$j]){
            print "Output: 0\n";
            exit
        }
        $j -= 1;
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/james-smith/perl/ch-1.pl)

James gives us two solutions: a more common `sprintf`/`reverse` methos much as we've seen quite a lot of so far, but also an alternative using an array of digits. This one's pretty fun, as it destructively takes elements from both ends to compare, working towards the middle.

```perl
    sub is_binary_palindrome {
      ## Can we write an array based one which is faster! Answer NO!
      ## We work from both ends to see if the numbers are different
      ## if they are return 0
      ## o/w we get to the end and return 1
      my @n = split m{}, sprintf '%b', shift;
      (pop @n eq shift @n) || return 0 while @n > 1;
      return 1;
    }
```

This looks quite efficient, shifting and popping and avoiding unnecessary variable assignment. He follows up with a `Benchmark` evaluation between the two solution styles, and, as it says in the comment, this version falls woefully short. The data type transformation, with assignment to an array, makes the whole process about 5× slower.

I don't know how `reverse` is so quick, but, like much of Perl, it is.


## INTERACTING with the BITS
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/e-choroba/perl/ch-1.pl), and
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/polettix/perl/ch-1.pl)

There were several examples that avoided explicitly converting to a binary string representation at all, using bitwise operations to directly query the underlying bits.

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/polettix/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/polettix/raku/ch-1.raku)

Flavio here demonstrates the use of bitwise operations to examine the underlying binary directly, without the need to convert any formats. This is of course both extremely clever and intensely opaque at the same time, and kind of makes my brain hurt. You know,  just a little.

```perl
    sub binary_palindrome ($N) {
       die "invalid $N (positive integers are OK)\n"
          if $N !~ m{\A [1-9]\d* \z}mxs;
       return unless $N % 2;
       my ($M, $n) = (0, $N);
       ($M, $n) = (($M << 1) | ($n & 1), $n >> 1) while $n > 0;
       return $M == $N;
    }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/e-choroba/perl/ch-1.pl)

Choroba gives us a solution served two ways: first as a very common-looking `sprintf`/`reverse` method, and then redone mathematically. Sure. Why not? Well, he does,  quite helpfully, also provide a `Benchmark` comparison of his various efforts, and it comes in just about 4.3× slower. So that might be a good reason, if you we're looking for one.

It's cool though, I'll give him that.

```perl
    sub binary_palindrome {
        my ($n) = @_;
        my $highest_exp = int(log($n) / log 2);
        return none {
            ! ($n & (2 ** $_)) ^ ! ($n & (2 ** ($highest_exp - $_)))
        } 0 .. ($highest_exp / 2) - ! ($highest_exp & 1);
    }
```

To be clear this too makes my brain hurt, maybe just a little bit more than the other one.


## using a REGULAR EXPRESSION
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/abigail/perl/ch-1.pl), and
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/colin-crain/perl/ch-1.pl)

Sidestepping questions of efficiency and perhaps common sense, binary string representations are strings, right? Just characters representing numbers. And you know what's good for manipulating strings? Regular expressions, of course. It's either a no-brainer or dropped-on-his-head-as-an-boy move, I'm not sure which.

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/abigail/perl/ch-1.pl)

**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/abigail/awk/ch-1.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/abigail/bash/ch-1.sh), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/abigail/c/ch-1.c), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/abigail/go/ch-1.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/abigail/java/ch-1.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/abigail/lua/ch-1.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/abigail/node/ch-1.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/abigail/python/ch-1.py), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/abigail/ruby/ch-1.rb)

Abigail is first up, with the following one-liner gem.

```perl
    say sprintf ("%b" => $_) =~ /^([01]?|([01])(?1)\g{2})$/ || 0 while <>;
```

The `(?1)` construct in the middle recursively references the first group and calls the expression again. Eventually the single `([01])?` at the beginning will match and pairs of digits surrounding it will be matched outwards in the second group, each digit referenced to its mirror as `\g{2}`.

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/colin-crain/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/colin-crain/raku/ch-1.raku)

Myself I am always interested in code that writes code, so I use an embedded code block to create a posponed subexpression. First the embedded code is evaluated and `reverse($1)` reverses the captured group. Then this string is inserted into the expression being evaluated as a a string literal and a match is attempted. In this way I can build the expression to be matched on-the-fly to suit the input, only succeeding if the input is a palindrome.

```perl
    $_ = sprintf "%b", $num;

    m/^(.+).?(??{reverse($1)})$/
        ? say 1
        : say 0 ;
```


## NOVEL and INNOVATIVE MUSICAL STYLINGS
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/jo-37/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/perlboy1967/perl/ch-1.pl), and
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/pete-houston/perl/ch-1.pl)

There's always another tool, another way to approach the problem.

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/perlboy1967/perl/ch-1.pl)

Niels has taken on the added requirement to handle ridiculously large numbers, so reaches out to the `BigInt` pragma. As this is a link to a rather sophisticated math library ready to overload the common arithmetic functions and then some, we get some more stuff free with that deal, one function being `as_bin()`, which returns a binary string representation of the number. Which is nice.

We do need to strip off the `0b` prefix, hence the `substr`. The rest moves along in a familiar pattern.


```perl
    sub isBinaryPalindrome($){
      my ($i) = @_;

      # Only binary numbers with their LSB set can be a binary palindrome
      return 0 if (substr($i,-1) eq '0');

      my $b1 = substr(Math::BigInt->new($i)->as_bin(),2);
      my $b2 = join '',reverse split //,$b1;

      return ($b1 eq $b2 ? 1 : 0);
    }
```



[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/pete-houston/perl/ch-1.pl)

Pete, on the other hand, reaches out to `Bit::Manip` for his binary conversion needs. The function imported, `bit_bin`, converts and integer to a binary representation, exactly what we desire.

```perl
    use Bit::Manip 'bit_bin';

    my ($n)   = shift =~ /^([1-9][0-9]*)$/ or die "Argument must be positive int\n";
    my $bin   = bit_bin ($n);
    my $ispal = reverse ($bin) eq $bin ? 1 : 0;
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/jo-37/perl/ch-1.pl)

Jorg reaches for... the PDL.

>"So there was this mosquito in the room, see? It had already gotten me once, and my arm was was itching like all get-out. And, you know, those things they'll just keep coming, and feed three, four times before they're full. So I looked around me, and suddenly it dawned on me. Ya see, I'm a collector, and I look around and I see I've got all of this unexploded ordinance from the last World War, just, sort of scattered around the room. And there, over there in the corner, under the window, I've got this great big freaking bomb, kind of a side-board under the sill, just sitting there, not doing nothing. So I says to myself: 'I got an idea'... "

All foolishness aside, this is, of course, actually pretty cool. Yes, yes, it's bringing way too much gun to this knife-fight, but that is entirely beside the point. Of note here is the `Math::Prime::Util` way of converting to binary: `todigits $INT, 2`, the XOR step which should yield a string of 0s for a palindrome, but then again we're asking for (not any) of this, so all 0s is true. The result of this line is returned, where it is boolean converted with the [bang-bang](https://metacpan.org/dist/perlsecret/view/lib/perlsecret.pod) and then numified by adding the result to 0.

Unusual amount of coercion in an unusual three lines of code. Well then. That was a weird little walk on the wild side, if I do say so myself.

```perl
    use PDL;
    use Math::Prime::Util qw(fromdigits todigits);

    ### Input and Output

    say 0 + !!bin_pal(shift);

    ### Implementation

    # Check if the given integer (as string or number) in its binary
    # representation is a palindrome.

    sub bin_pal {
        # Convert the given number into a byte piddle made of its binary
        # digits.
        my $n = byte todigits shift, 2;

        # Xor the piddle with its reverse and check that none of the
        # resulting elements is set.
        !any $n ^ $n->slice('-1:0');
    }
```



## Additional Submissions in Guest Languages

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/athanasius/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/athanasius/raku/ch-1.raku)

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/jaldhar-h-vyas/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/jaldhar-h-vyas/raku/ch-1.raku)

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/laurent-rosenfeld/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/laurent-rosenfeld/raku/ch-1.raku)






------------------------------------------





---

# TASK 2 {#PWC118TASK2}

# Adventure of Knight
*Submitted by: Cheok-Yin Fung*<br>
A knight is restricted to move on an 8×8 chessboard. The knight is denoted by N and its way of movement is the same as what it is defined in Chess. * represents an empty square. x represents a square with treasure.

The Knight’s movement is unique. It may move two squares vertically and one square horizontally, or two squares horizontally and one square vertically (with both forming the shape of an L).

There are 6 squares with treasures.

Write a script to find the path such that Knight can capture all treasures. The Knight can start from the top-left square.

```
      a b c d e f g h
    8 N * * * * * * * 8
    7 * * * * * * * * 7
    6 * * * * x * * * 6
    5 * * * * * * * * 5
    4 * * x * * * * * 4
    3 * x * * * * * * 3
    2 x x * * * * * * 2
    1 * x * * * * * * 1
      a b c d e f g h
```

BONUS: If you believe that your algorithm can output one of the shortest possible path.


## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/abigail/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/dave-jacoby/perl/ch-2.pl),
[**Duane Powell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/duane-powell/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/jo-37/perl/ch-2.pl),
[**Lance Wicks**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/lance-wicks/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/paulo-custodio/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/pete-houston/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/sgreen/perl/ch-2.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/stuart-little/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/ulrich-rieke/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/wlmb/perl/ch-2.pl)


There were 18 submissions for the second task this past week.

Summarizing the results of this challenge was unusually complex, with a large number of approaches and variations. These could be broken down into recursive traversals applying a brute-force approach while disallowing repeat visits to a square, knight's tours, where every square is visited in a systematic manner, which will of course eventually find every treasure, pathfinding algorithms that either homed in on successive treasures or, after compiling a list of shortest distances between targets, then rearranged an optimal path through those walks. Even these broad categories represent a mere simplification of the actual solutions presented, as each provided unique combinations and trade-offs among techniques. It's a bit of a handful, I dare say.

I'll do my best to touch on as many of these ideas as I can get to as we walk through the variations.

There was, I think oddly but not unexpectedly, quite a bit of grousing about the treasure map being a given value, assigned and fixed at six positions. In framing a problem like this, there tend to be a lot of moving parts in setting up a scenario, and I think there's a natural tendency to separate those components into groups of those parts that matter and those that don't. One way to deal with this complexity is to set some parameters and be done with it. To me, I never took the number of or exact placement of the treasures to be in any way the important part. The important part, no slouch in the complexity department, is the scheme to efficiently find the targets. We could have specified "create a random number of treasures between 5 and 20 and arrange them randomly on the board", which, arguably, would have more properly labeled the emphasis; however this would have added an additional layer of complexity to the already complicated task that basically would have zero added value, at the expense of people's focus and attention. Yes it would have been clearer, but to what end? Are we generating chessboards or solving a much more specific puzzle about the movement of a single piece?

In any case as I have said before these wildly differing readings of the given task are not unexpected, although their manifestations often come at me out of left field. Some I see it coming, other times I don't. Let's just say I was surprised by some of the decisions in the readings and leave it at that.


## BREADTH-FIRST ITERATION and DEPTH-FIRST RECURSION
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/abigail/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/dave-jacoby/perl/ch-2.pl),
[**Duane Powell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/duane-powell/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/james-smith/perl/ch-2.pl),
[**Lance Wicks**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/lance-wicks/perl/ch-2.pl), and
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/ulrich-rieke/perl/ch-2.pl)

From any starting position, there are eight theoretical moves available to the knight, two into each quadrant. Of course some of these may fall off the table, but in the worst case, tucked all the way into a corner such as the a8 given starting position, there still are two.

We could try systematically moving through all of them until we inevitably have snatched up all the treasures.

This will work, with one caveat: we need to avoid loops or we'll get stuck and never finish. So the way to deal with this is to disallow returning to a square already visited. Will this always be able to visit every square? For every choice of sequence, no. But there do exist tours through every square of the chessboard without repeating a position, so if we allow a method to backtrack as far back as necessary we will in a worst-case scenario find one of these tours, which will find any arbitrary number of treasures in any arbitrary placement.

The downside is that this general strategy can, in some implementations, take some time. On the other hand, breadth-first searches repeatedly proved to be very quick. Go figure.

[**Duane Powell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/duane-powell/perl/ch-2.pl)

Duane gives us an example of a recursive solution, trying random moves in thousands of configurations, refining the search as shorter pathways are discovered. It takes a couple of minutes to run but will find an optimum, 11-step route. On the other hand it displays the search as it goes, with the added ability to define a `sleep` parameter to slow down the animation so we can watch, which is both cool and, because the walk is random, somewhat frustrating: "*No! No! Go over there! You're right next to it!*"

```perl
    sub shortest_path_recurse {
        my $self = shift;

        my @move = $self->knight_moves_get();
        while (@move) {
            # Random, stochastic search
            my $r = int(rand(scalar @move));
            my $move = $move[$r];
            splice @move, $r, 1;

            # Move the knight.
            $self->knight_move($move);

            # Update best path if no treasure remains on a shorter path
            if (not $self->treasure_exists() and $self->this_path_is_shorter()) {
                # copy this_path to best_path, don't forget to deference before copy
                my @this_path = @{$self->{this_path}};
                $self->{best_path} = \@this_path;
            }

            # Render and sleep so we can see the Knight move around
            my $board = $self->board_render();
            $AoK->best_path_say($board);
            sleep $sleep;

            # Only recurse if: we have not visited this postion before and this path is shorter than best path so far
            $self->shortest_path_recurse() if ( not $self->board_position_visited() and $self->this_path_is_shorter() );

            # Undo Knight move and try another
            $self->knight_move_undo($move);
        }
    }
```

[**Lance Wicks**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/lance-wicks/perl/ch-2.pl)

Lance gives us a [`Knight.pm`]() module that takes random walks until done, which he then runs 100,000 times, keeping shorter paths and discarding longer.

The strategy works ok, able to find a solution of 16-18 moves in about a minute. I tried upping the cycle count to 1,000,000 and got that number down to 12, but of course at the expense of scaling up the time linearly. I expect providing `Knight->new` with a parameter for the maximum number of tries before bailing out would be an natural optimization to prune out unpoductive cycles as shorter and shorter paths are found.

```perl
    sub go {
        my ( $self, %args ) = @_;

        my $targets              = $self->treasures;
        my $treasures_to_collect = @$targets;
        my $row                  = 7;
        my $col                  = 0;

        my @path;
        while ( $treasures_to_collect > 0 ) {
            push @path, [ $row, $col ];
            if ( $self->has_treasure( $row, $col ) ) {
                if ( !$self->have_we_got_this_treasure( $row, $col ) ) {
                    $self->collect_treasure( $row, $col );
                    $treasures_to_collect--;
                }
            }
            my $new = $self->move( $row, $col );
            $row = $new->[0];
            $col = $new->[1];
        }

        return {
            treasures => $self->collected_treasures,
            path      => \@path,
            moves     => @path -1, # sub 1 as path includes starting position.
        };
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/james-smith/perl/ch-2.pl)

James takes an extraordinary approach to optimizing a recursive search, fitting a board into the bits of a 64-bit integer, and enacting transformations on this using bitwise operations. The resulting code is of course quite mysterious and full of seemingly magic numbers.

In usual form, he provides three versions of the core logic, increasingly optimized. It starts short but ends up even shorter.

Here the third, most optimized form, `walk_trans()`, does the recursive heavy lifting:

```perl
    sub walk_trans {
      my( $t, $seen, $rt ) = @_;  ## Current square, visited squares, current route
      return if $seen & 1 << $t;  ## Return if we've already been to this square.
      $seen |= 1 << $t;           ## Mark that we have been in this square.
      $rt   .= chr $t;            ## Add this square to our route.
      return ($best_rt,$best_len) = ($rt,-1+length $rt) if ($seen & $sol) == $sol;
                                  ## If we've found all the treasure
                                  ## Update the best route (and it's length)
                                  ## and return;
      return if $best_len <= length $rt;
                                  ## If our route is longer than the best route
                                  ## return;
      walk_trans( $_, $seen, $rt ) foreach @{$trans->[$t]};
                                  ## Try all knight move squares from the current
                                  ## square.
    }
```

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/abigail/perl/ch-2.pl)

Abigail has a unique approach to the problem of eliminating cycles, disallowing returning to a visited square but only until a new treasure is taken. They take the strategy of a breadth-first search, maintaining a queue of partial solutions that get shifted off, augmented and pushed back on. In the end the code is succinct and concise, and finds a optimal solution quite quickly.

```perl
    sub find_treasure ($start_square, @treasure) {
        my %treasure = map {$_ => 1} @treasure;

        my %visited;  # Maps square x seen treasure to 1

        my @todo = ([[$start_square], {}]);
                   # Entries in the @todo list are tuples:
                   #   - The path that got us here; the last element being
                   #     the "current" square
                   #   - A mapping of which treasure squares we have visited
                   #     on the path.

        while (@todo) {
            my ($path, $old_seen) = @{shift @todo};
            my  $square = $$path [-1];
            my  $seen = {%$old_seen};
               $$seen {$square} = 1 if $treasure {$square};

            my $key = join " " => $square, sort keys %$seen;
            next if $visited {$key} ++;

            if (keys %$seen == keys %treasure) {
                #
                # We have seen all the treasure: return the path.
                #
                return $path;
            }

            push @todo => map {[[@$path => $_], $seen]} @{$knight_moves {$square}};
        }
    }
```


## take a KNIGHT'S TOUR
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/paulo-custodio/perl/ch-2.pl), and
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/stuart-little/perl/ch-2.pl)

We spoke earlier about a tour traversal of the chessboard that touches every location. It stands to reason if we could somehow produce one of these tours it would consequently find any number of treasures. If perhaps not in the most efficient fashion, it's also hardly the worst strategy.

[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/paulo-custodio/perl/ch-2.pl)

**additional languages:**
[C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/paulo-custodio/c/ch-2.c), [C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/paulo-custodio/cpp/ch-2.cpp), [D](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/paulo-custodio/d/ch_2.d)

Paulo uses [Warnsdorff's rule](https://en.wikipedia.org/wiki/Knight%27s_tour#Warnsdorff's_rule) to construct a
[Knight's Tour](https://en.wikipedia.org/wiki/Knight%27s_tour) of the board. This constructed route will pass through every square, so logically we can conclude it will visit all of the assigned treasure squares.

The rule states that from a given position, of all available knight's moves one should chose that one with the *least* number of possible moves from it. That is to say always travel to the most restricted option first. This strategy works, and finds the treasures in 33 moves.

Paulo uses a `Board` object for his abstraction, containing an 8×8 matrix and methods taking care of I/O and valid movement. His `solve` routine creates the actual tour and collects the treasures:

```perl
    sub solve {
        my($board) = @_;

        my @queue = clone($board);
        while (@queue) {
            $board = shift @queue;
            if (%{$board->treasures} == 0) { # all treasures found
                return $board;
            }
            else {
                my @next = $board->next_possible_moves;
                # if any matches a treasure, move it forward
                for (0..$#next) {
                    my($row, $col) = @{$next[$_]};
                    if (exists $board->treasures->{"$row$col"}) {
                        @next = ($next[$_], @next[0..$_-1], @next[$_+1..$#next]);
                        last;
                    }
                }

                for (@next) {
                    my($row, $col) = @$_;
                    my $new_board = clone($board);
                    $new_board->board->[$row][$col] = 1;
                    push @{$new_board->path}, [$row, $col];
                    delete $new_board->treasures->{"$row$col"};

                    push @queue, $new_board;
                }
            }
        }
        die "no solution found\n";
    }

    my $board = Board->new;
    $board->parse;
    $board = solve($board);
    say $board->path_str;
```


[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/stuart-little/perl/ch-2.pl)

**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/stuart-little/haskell/ch-2.hs), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/stuart-little/node/ch-2.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/stuart-little/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/stuart-little/raku/ch-2.raku)

Because any knight's tour that visits all 64 squares exactly once will solve any variation on the puzzle, Stuart encodes one such tour as data and implements a method for riding through it. It's short, albeit a bit mechanical. And of course quite inflexible.

```perl
    while(<DATA>) {
        my @row = split /\s+/, $_;
        push @tour, @row;
    }
    @tour = grep { $_ } @tour;
    my @positions = map { chr(int($_/8)+97) . (8 - ($_ % 8)) } (0..63);
    @tour = sort { $a->[0] <=> $b->[0] } zip \@tour, \@positions;

    my @treasure = (scalar @ARGV) ? (map {lc $_} @ARGV) : qw(a2 b1 b2 b3 c4 e6);
    my $maxIx = max map {my $treasureSpot = $_; my @a = grep {$_->[1] eq $treasureSpot} @tour; $a[0]->[0]} @treasure;
    for (@tour[0..$maxIx-1]) {
        my $pos = $_;
        say $pos->[0] . " -- " . $pos->[1] . ((scalar grep {$_ eq $pos->[1]} @treasure) ? (" TREASURE") : (""));
    };

    __DATA__
     1  50  45  62  31  18   9  64
    46  61  32  49  10  63  30  17
    51   2  47  44  33  28  19   8
    60  35  42  27  48  11  16  29
    41  52   3  34  43  24   7  20
    36  59  38  55  26  21  12  15
    53  40  57   4  23  14  25   6
    58  37  54  39  56   5  22  13
```


## directed PATHFINDING excursions

The next level of refinement is to seek out a specific target and acquire it, then systematically move on to the next. As categories go, this is where things get complicated. Essentially the field of submissions branched into a thicket of individual methodologies. There were a great many schemes to determine the shortest path through the treasures in the most efficient order, with a lot of crossover between the subcategories. To be clear, I'm not certain how useful these subcategories even are, so consider them more suggestions of direction.

### HOMING PATTERNS
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/colin-crain/perl/ch-2.pl), and
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/pete-houston/perl/ch-2.pl)

A systematic search can find a very efficient set of moves to traverse the field, perhaps the shortest if you want to spend the time to explore all the options. Alternately, you could pick a treasure, probably the closest, and set off to fetch it. Even an imperfect strategy of pushing the moves in the right general direction should radically reduce the number of computations required.

[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/colin-crain/perl/ch-2.pl)

After grappling with and having become decidedly unhappy with the exploding complexities of a recursive solution, I had come to the inevitable conclusion that I would need to exclude all previously visited squares before I took a step back, took a deep breath, and changed course completely.

**"Never mind maneuvers... always go at them."**<br>
— Admiral Lord Nelson

Why not, indeed, just home in on the nearest prize and take it? Might is right, and all that? The rewards go to the bold? And besides, it has a certain medieval mindset to it to provide allegorical consistency.

This strategy has, essentially, two parts: identifying and closing on the next treasure, and then taking it. I decided to concentrate primarily on the second phase, the close work.

In my simple approach algorithm I determine the Euclidean distance between the knight and each of the treasures, and select the closest. We then commence with whatever moves that further minimize this distance , continuing until we're within range. Really we use the Euclidean distance squared, because why bother with the final square root step, which makes everything a float, when in the end all we're doing is comparing relative distances? Let's keep it all whole. It's just easier.

"Range" in this context means less than a distance of 5, which corresponds to a Euclidean distance of √5 , which is √ 2<sup>2</sup> + 1<sup>2</sup>, or a single knight's move.

If we land a single knight's move from the target, we can simply take it. If we're closer, however, we need to do something else.

As I've said elsewhere, I don't really play chess. Taking a look at this fact another way, it allows me to put fresh eyes on the problem, and just describe what I see, rather than what already know.

Inside the perimeter distance of one move, there are three positions, each requiring a slightly different method of approach. Loosely, though, they all share a common pattern, which is to subdivide the remaining distance. We move halfway there and outward laterally as required, then mirror the movement so we laterally return and complete the forward motion. A one-square orthogonal movement requires an additional intermediary position, but then commences the same way.

The method is not further optimized for either finding the shortest path between targets or  carefully closing on targets outside the one-knight-move radius, which we could tool up routines for similar to those provided.

But is rather ridiculously quick about arriving at that solution, imperfect as it may be.

Here is one of the closing routines, to capture a treasure two orthogonal moves away:

```perl
    sub two_sq_ortho ($target) {
    ## to close two squares orthogonally we move one square, half-way, closer and
    ## dog-leg either left or right two squares. Then the mirror of this move will
    ## reverse the dog-leg and move forward the additional square. For every pair of
    ## squares on the board either the left or right movement will remain on the
    ## board.
        my $deltas   = point_pair_deltas( $target ) ;
        my @laterals = sub {    my @half = map { $_ / 2 } $_[0]->@*;
                                my @out  = ( [@half], [@half] );
                                for ( (0,1) ) {
                                do { $out[0]->[$_] =  2;
                                     $out[1]->[$_] = -2 } if not $_[0]->[$_];
                                }
                                return @out;
                        } -> ($deltas);

        my @moves = map  { mat2chess( $_ ) }
                    grep { on_board( $_ ) }
                    map  { add_pt( $_, chess2mat( $knight ) ) }
                    @laterals;

        push $quest->@*, $moves[0], $target;
        $knight = $target;
        return 0;

    }
```


### the TRAVELING SALESMAN PROBLEM
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/cheok-yin-fung/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/jo-37/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/roger-bell-west/perl/ch-2.pl), and
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/sgreen/perl/ch-2.pl)

A directed method pursuing an individul target is a noticeable improvement on systematically trying every option, but to find the shortest possible path one must also consider the order in which the treasures are acquired. Given two equidistant treasures, for example, it may prove advantageous to select one over the other as that sets us up better for the quest going forward. The selection of the optimum ordering of a sequence of targets having differing navigation costs between them is known as the travelling salesman problem.

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/roger-bell-west/perl/ch-2.pl)

Roger uses a breadth-first search pattern with a queue to discover the shortest distances between each of the 7 objects of the field: the knight and the six treasures. Once he has this list of movement costs he can then the solve the travelling salesman problem by permuting through the variations and adding up the results. Finally the shortest path is constructed from the data.

Here `findroute()` determined the optimal sequence between any two squares:

```perl
    sub findroute {
      my ($a,$b)=@_;
      my $target=l2c($b);
      my $rt;
      my @chain=([l2c($a)]);
     SEARCH:
      while (my $c=shift @chain) {
        foreach my $offset (
          [-2,-1],
          [-1,-2],
          [-2,1],
          [1,-2],
          [2,-1],
          [-1,2],
          [2,1],
          [1,2],
            ) {
          my $x=$c->[-1][0]+$offset->[0];
          my $y=$c->[-1][1]+$offset->[1];
          if ($x>=0 && $x<=7 && $y>=0 && $y<=7) {
            my $rl=[@{$c},[$x,$y]];
            if ($x==$target->[0] && $y==$target->[1]) {
              $rt=$rl;
              last SEARCH;
            } else {
              push @chain,$rl;
            }
          }
        }
      }
      return $rt;
    }
```


[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/cheok-yin-fung/perl/ch-2.pl)

CY uses a precomputed table of distances from a corner position to help her glean the distances between treasures, then uses this data to select and assemble the actual list of chess positions. A preprocessor routine calculates and tabulates the information required to compute the number of moves to get from any square to any other on the board.

Her `expand` routine works along the same lines as the underlying preprocessor — to move a piece systematically to all squares one move away, then combinations of two moves into all squares not already filled by the first move, then three moves into the remaining board, etc. In mapping an 8x8 matrix of theoretical maximum distances from one corner, within three moves nearly the entire space to the minor diagonal has been filled. The entire space can be traversed in a maximum of 6 moves, with the 6th only filling the single remaining square in the extreme opposite corner.

```perl
    sub expand {

        my $t = dist_fun($_[0], $_[1]);
        return [$_[0], $_[1]] if $t == 1;

        my $board;
        my $visited;

        for my $k (0..63) {
            $board->[int $k / 8][$k % 8] = -1;
        }

        $board->[ $_[0]->[0] ][ $_[0]->[1] ] = 0;
        $visited->[ $_[0]->[0] ][ $_[0]->[1] ] = [ $_[0] ];

        my $s = 0;
        while ($s < $t) {
          for my $i (0..7) {
            for my $j (0..7) {
              if ($board->[$i][$j] == $s) {
                for my $a ( [-2,-1],  [-1,-2],  [-2, 1],  [ 1,-2],
                            [-1, 2],  [ 2,-1],  [ 1, 2],  [ 2, 1])
                {
                  my $ai = $i+$a->[0];
                  my $aj = $j+$a->[1];
                  if (  $ai >= 0 && $aj >= 0   #no negative index
                       && defined($board->[$ai][$aj]) #  no running outside board
                       && $board->[$ai][$aj] == -1) {
                    $board->[$ai][$aj] = $s+1;
                    $visited->[$ai][$aj] = [ @{$visited->[$i][$j]}, [$ai,$aj] ];
                  }
                }
              }
            }
          }
          $s++;
        }

      return $visited->[ $_[1]->[0] ][ $_[1]->[1] ];
    }
```


### DIJKSTRA'S ALGORITHM and A*
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/jaldhar-h-vyas/perl/ch-2.pl), and
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/jo-37/perl/ch-2.pl)

In 1959 Edsger Dijkstra published an algorithm to determine the length of the shortest path from a given point to each vertex within an edge-weighted graph. By recording and extending the steps taken to get to each vertex in the graph the actual shortest paths themselves can be obtained.

This algorithm showed up several times in our problem, to determine the optimal path between treasures, as well as the optimal path for the knight to get to a treasure.

An advancement on Dijkstra's original algorithm, __A*__ adds an additional heuristic component to the calculation, comprising a best guess to a more favorable outcome. For example, here the heuristic component could be a precomputed table of distances between squares using knight's moves; this would allow us, without knowing in advance exactly which squares comprise the sequence, that *this* square chosen has a better future outcome than *that* square option, and adjust our decisions accordingly.

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/e-choroba/perl/ch-2.pl)

As an aside, before beginning, Choroba brings us a little module he wrote a few years back that does one thing and one thing well: given the diamond operator to handle input, Perl normally will look to STDIN for input; in the absence of anything there this will then follow up with drawing from the DATA filehandle. Which is handy for this type of challenge. The script will still work with STDIN, but we can now feed it directly from the `__DATA__` section, obviating the need for an exterior file.

But to the task at hand: after constructing the infrastructure in a `Knight::Problem` object, Choroba then sics a second object, `Knight::Solver::AStar` at the problem. This employs an A* algorithm with, as we mentioned, a precomputed distance table as a heuristic component to the calculation.

There are many parts to the solver object provided, but here are three: the `_distance()` routine that maps a real pair of coordinates to a precomputed value, the `_heuristic()` function that uses this information to construct the best guess component, and the `_update_fringe()` function to apply the new heuristic component to the outlying unvisited terrain.

```perl
    sub _distance {
        my ($self, $x, $y, $i, $j) = @_;
        my ($X, $Y) = map abs, $x - $i, $y - $j;
        ($X, $Y) = ($Y, $X) if $X > $Y;
        return $self->_precomputed_distance->{$X}{$Y};
    }


    sub _heuristic {
        my ($self, $x, $y, $visited) = @_;
        my $max_distance = 0;
        for my $v (0 .. length($visited) - 1) {
            next if substr $visited, $v, 1;

            my ($i, $j) = @{ $self->problem->coord2v->{c}{$v} };
            my $distance = $self->_distance($x, $y, $i, $j);
            $max_distance = $distance if $distance > $max_distance;
        }
        return $max_distance
    }

    sub _update_fringe {
        my ($self, $score, $new) = @_;
        my $ser = $new->serialise;
        $self->_score->{$ser} = $score;
        $score += $self->_heuristic($new->X, $new->Y, $new->visited);
        push @{ $self->_fringe->[$score] }, $new;
        $self->_in_fringe->{ $new->serialise } = $score;
        $self->_step;
    }
```

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/jaldhar-h-vyas/perl/ch-2.pl)

**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/jaldhar-h-vyas/c++/ch-2.cpp), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/jaldhar-h-vyas/raku/ch-2.raku)

Jaldhar gives us another example of a heuristic extension of Dijkstra. It's too involved for easy summary but please,
have a look over to Jaldhar's blog of a writeup of his use of
[iterative deepening A*](https://en.wikipedia.org/wiki/Iterative_deepening_A*) as an underlying pathfinding algorithm. There's a lot of meat here, and I didn't want to not pass over it completely. But I need to keep moving...


[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/jo-37/perl/ch-2.pl)

Jorg enjoys demonstrating to us the immense power waiting in some of the more advanced module infrastructure available to us. Here he brings in `Graph`, which perhaps I should be more acquainted with, on top of the `Math::Prime::Util` package we've seen a lot from in recent weeks (although still only drawing from the surface of that deep, deep well of functions).

Once he has created a `Graph` object of the chessboard, we automatically get a function, `SP_Dijkstra()` which stands for "Shortest Path - Dijkstra" and returns a list of ordered vertices, making this step remarkably straightforward.

For the next phase, the travelling salesman component, `Math::Prime::Util` provides the combined looping iterator `forperm {BLOCK}` which generates and iterates through permutations of a list, assigning each value to `$_` within the given block. Kind does what you'd think it does, if you'd ever dreamed of the perfect way to do that. Well here ya' are.

```perl
    # Find a minimum weighted Hamiltonian path in the treasure graph from
    # the start square with the assigned path's length as weight.  By
    # construction, every path from the starting square visiting any
    # permutation of the treasure squares is valid and Hamiltonian.
    # Adding directed, zero-weighted edges between all treasure squares and
    # the start square would turn this into an equivalent asymmetric TSP -
    # just to spot the complexity of the task.  Not attempting any
    # optimizations.
    sub min_hamiltonian ($start, $treasure) {
        my @treasures = grep {$_ ne $start} keys %$treasure;
        my ($minlen, $shortest) = 'inf';

        # Try all permutations of the treasure squares for the minimum path.
        forperm {
            my @paths;
            # Abuse "reduce" as a sliding window.
            reduce {
                push @paths, $treasure->{$a}{$b};
                $b;
            } $start, @treasures[@_];

            # Record a new minimum.
            if ((my $len = vecsum map scalar @$_, @paths) < $minlen) {
                $shortest = \@paths;
                $minlen = $len;
            }
        } @treasures;

        $shortest;
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/polettix/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/polettix/raku/ch-2.raku)

Jorg makes mention of Hamiltonian paths in his phrasing of the travelling salesman problem, which is a circuit through all vertices of a graph such that each vertex is visited exactly once. Obviously such an abstraction is highly applicable to our current problem, where, including our starting point, we wish to visit every treasure. Dijkstra's algorithm is a tool for determining the edge weights of a graph, and here Flavio brings us another way of going about this, the Floyd-Warshall algorithm.

Floyd-Warshall will, given a list of vertices, determine all of the shortest paths between vertices in one swoop. Once found, he solves for the 6! = 720 possible arrangements of the treasure hunt to determine the minimum distance. The actual paths between vertices are stored in the `floyd_warshall()` function's results, so these need only be properly chained to obtain the final sequence.

Here's his Floyd-Warshall implementation to have a look at:

```perl
    sub floyd_warshall {
       my %args = (@_ && ref($_[0])) ? %{$_[0]} : @_;
       my @reqs = qw< distance successors >;
       exists($args{$_}) || die "missing parameter '$_'" for @reqs;
       my ($dist, $scs) = @args{@reqs};
       my $id_of = $args{identifier} || sub { return "$_[0]" };
       my @q = exists($args{starts}) ? @{$args{starts}}
          : exists($args{start}) ? ($args{start})
          : die "missing parameter 'starts' or 'start'";
       my (%d, %p, %nf); # distances, predecessors
       while (@q) { # initialization
          next if exists $nf{my $vi = $id_of->(my $v = shift @q)};
          for my $w ($scs->($nf{$vi} = $v)) {
             next if $vi eq (my $wi = $id_of->($w)); # avoid self-edges
             ($d{$vi}{$wi}, $p{$vi}{$wi}) = ($dist->($v, $w), $vi);
             push @q, $w unless exists $nf{$wi};
          }
          $d{$vi}{$vi} = 0;
       }
       my @vs = keys %nf;
       for my $vi (@vs) {
          for my $vv (@vs) {
             next unless exists $p{$vv}{$vi};
             for my $vw (@vs) {
                next if (!exists $d{$vi}{$vw}) || (exists($d{$vv}{$vw})
                   && ($d{$vv}{$vw} <= $d{$vv}{$vi} + $d{$vi}{$vw}));
                $d{$vv}{$vw} = $d{$vv}{$vi} + $d{$vi}{$vw};
                $p{$vv}{$vw} = $p{$vi}{$vw};
             }
             return if $d{$vv}{$vv} < 0; # negative cycle, bail out
          }
       }
       return {
          has_path => sub {
             my ($vi, $wi) = map { $id_of->($_) } @_[0, 1];
             return exists($d{$vi}) && exists($d{$vi}{$wi});
          },
          distance => sub {
             my ($vi, $wi) = map { $id_of->($_) } @_[0, 1];
             return unless exists($d{$vi}) && exists($d{$vi}{$wi});
             return $d{$vi}{$wi};
          },
          path => sub {
             my ($fi, $ti) = map { $id_of->($_) } @_[0, 1];
             return unless exists($d{$fi}) && exists($d{$fi}{$ti});
             my @path;
             while ($ti ne $fi) {
                unshift @path, $nf{$ti};
                $ti = $p{$fi}{$ti};
             }
             unshift @path, $nf{$ti};
             return wantarray ? @path : \@path;
          },
       };
    }
```

### PDL, REDUX
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/wlmb/perl/ch-2.pl)

I never get tired of the PDL. Confused, yes. Out-of-my-element, yes. But tired? No. It's way too cool for that.

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/wlmb/perl/ch-2.pl)

One can consider a knight position as a string, "a8", or perhaps as an array of coordinates: `(0,7)`. Taking this abstraction one step further we could consider an 8×8 multidimensional matrix as the fundamental data structure, establishing an equivalence between knight positions and treasure positions as as all just individual configurations of a chess board, with moves and acquisitions as transformations.

This sort of abstract data crunching is exactly the sort of thing the PDL excels at.

The result is beyond the scope of this review, so please go over to his extensive writeup for more information. However, to give you a taste of the kind of work being done, here is an adjacency matrix being built, which corresponds to the knight movements available.

The final code, while complex, is not too bad, as using a matrix as the underlying data type is a very powerful technique.

```perl
    my $matrix=adjacency();
    sub adjacency { #Build adjacency matrix for knight
        my $identity=identity($N2)->reshape($N,$N,$N,$N);# col,row,col',row'
        # Possible south going movements of the knight
        # North going movements are the transpose of south going.
        my $SEE=$identity->rotate(2) # two steps to the east
                 ->mv(1,0)->rotate(1)->mv(0,1) # one step to the south
             ->sever; # disconnect this pdl from $identity
        $SEE(0:1,:).=0;   # zero out unreachable rows and columns.
        $SEE(:,0).=0;     # Comment out for toroidal boards
        my $SSE=$identity->rotate(1)->mv(1,0)->rotate(2)->mv(0,1)->sever;
        $SSE(0,:).=0;
        $SSE(:,0:1).=0;
        my $SWW=$identity->rotate(-2)->mv(1,0)->rotate(1)->mv(0,1)->sever;
        $SWW(-2:-1,:).=0;
        $SWW(:,0).=0;
        my $SSW=$identity->rotate(-1)->mv(1,0)->rotate(2)->mv(0,1)->sever;
        $SSW(-1,:).=0;
        $SSW(:,0:1).=0;
        my $adjacency=lu_reduce {$a|$b} map {$_|$_->transpose}
        map {$_->reshape($N2,$N2)} ($SEE, $SSE, $SWW, $SSW);
        return $adjacency;
    }
```


## Additional Submissions in Guest Languages

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/abigail/perl/ch-2.pl)

**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/abigail/awk/ch-2.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/abigail/bash/ch-2.sh), [Basic](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/abigail/basic/ch-2.bas), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/abigail/bc/ch-2.bc), [Befunge-93](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/abigail/befunge-93/ch-2.bf93), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/abigail/c/ch-2.c), [Cobol](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/abigail/cobol/ch-2.cb), [Csh](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/abigail/csh/ch-2.csh), [Erlang](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/abigail/erlang/ch-2.erl), [Forth](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/abigail/forth/ch-2.fs), [Fortran](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/abigail/fortran/ch-2.f90), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/abigail/go/ch-2.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/abigail/java/ch-2.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/abigail/lua/ch-2.lua), [M4](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/abigail/m4/ch-2.m4), [Mmix](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/abigail/mmix/ch-2.mms), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/abigail/node/ch-2.js), [Ocaml](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/abigail/ocaml/ch-2.ml), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/abigail/pascal/ch-2.p), [Php](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/abigail/php/ch-2.php), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/abigail/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/abigail/python/ch-2.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/abigail/r/ch-2.r), [Rexx](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/abigail/rexx/ch-2.rexx), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/abigail/ruby/ch-2.rb), [Scheme](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/abigail/scheme/ch-2.scm), [Sed](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/abigail/sed/ch-2.sed), [Sql](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/abigail/sql/ch-2.sql), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/abigail/tcl/ch-2.tcl)

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/ulrich-rieke/perl/ch-2.pl)

**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-118/ulrich-rieke/cpp/ch-2.cpp)




------------------------------------------




---

# BLOGS {#PWC118BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, I somehow continue to maintain my bearings. Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC093BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *READ* these *BLOG* *LINKS*:

**( *don't think, trust your training, you're in the zone, just do it ...* )**


**Abigail**

 * [Perl Weekly Challenge 118: Binary Palindrome](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-118-1.html) ( *Perl* )
 * [Perl Weekly Challenge 118: Adventure of Knight](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-118-2.html) ( *Perl* )

**Arne Sommer**

 * [Binary Knight with Raku (and Perl)](https://raku-musings.com/binary-knight.html) ( *Perl & Raku* )

**Cheok-Yin Fung**

 * [CY's Puzzle Created for The Weekly Challenge #118 ‒ Pre-processing ](https://e7-87-83.github.io/coding/challenge_118.html) ( *Perl* )
 * [CY's Take on The Weekly Challenge #118 Task 1](https://e7-87-83.github.io/coding/challenge_118t1.html) ( *Perl* )

**Colin Crain**

 * [A Knight&#8217;s Quest: A Search for His Pal — Programming Excursions in Perl and Raku](https://colincrain.com/2021/06/27/a-knights-quest-a-search-for-his-pal/) ( *Perl & Raku* )

**Dave Jacoby**

 * [Knight thginK: Perl Weekly Challenge #118 | Committed to Memory](https://jacoby.github.io/2021/06/21/knight-thgink-perl-weekly-challenge-118.html) ( *Perl* )

**Flavio Poletti**

 * [PWC118 - Binary Palindrome - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/06/23/pwc118-binary-palindrome/) ( *Perl & Raku* )
 * [PWC118 - Adventure of Knight - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/06/24/pwc118-adventure-of-knight/) ( *Perl & Raku* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 118](https://www.braincells.com/perl/2021/06/perl_weekly_challenge_week_118.html) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #118](https://github.com/drbaggy/perlweeklychallenge-club/blob/master/challenge-118/james-smith/) ( *Perl* )

**Lance Wicks**

 * [TDD a perlscript with modulinos (PWC-118) - Perl🐪.🥝 Kiwi](https://perl.kiwi/tales/2021/06/21/tdd-a-perlscript-with-modulinos-pwc-118/) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 118: Binary Palindrome | laurent_r](http://blogs.perl.org/users/laurent_r/2021/06/perl-weekly-challenge-118-binary-palindrome.html) ( *Perl & Raku* )

**Mohammad S Anwar**

 * [Perl Weekly Challenge - 118 (Task #1: Binary Palindrome) - YouTube](https://youtu.be/LjcWSMEaopc) ( *Perl* )

**Roger Bell_West**

 * [RogerBW's Blog: Perl Weekly Challenge 118: Binary Knight](https://blog.firedrake.org/archive/2021/06/Perl_Weekly_Challenge_118__Binary_Knight.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 118](https://dev.to/simongreennet/weekly-challenge-118-4hg9) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 118 – W. Luis Mochán](https://wlmb.github.io/2021/06/21/PWC118/) ( *Perl* )
