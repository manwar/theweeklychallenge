---
author:       Colin Crain
date:         2022-03-06T00:00:00
description:  "Colin Crain › Perl Weekly Review #150"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #150"
image:        images/blog/p5-review-challenge-150.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-149/).* )

Welcome to the Perl review pages for **Week 150** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

---

### ●︎ Why do we do these challenges?

I suppose any reasonable answer to that question would be from a field as wide ranging and varied as the people who choose to join the team. One thing, though, is clear: it's not a competition, and there are no judges, even if there is a "prize" of sorts. About that -- I think of it more as an honorarium periodically awarded to acknowledge the efforts we make towards this strange goal. So there's no determination to find the *fastest*, or the *shortest*, or even, in some abstract way, the *best* way to go about things, although I'm certain the participants have their own aspirations and personal drives. As Perl is such a wonderfully expressive language, this provides quite a bit of fodder to the core idea of TMTOWTDI, producing a gamut of varied techniques and solutions.

Even the tasks themselves are often open to a certain amount of discretionary interpretation. What we end up with is a situation where each participant is producing something in the manner they find the most interesting or satisfying. Some team members focus on carefully crafted complete applications, thoroughly vetting input data and handling every use case they can think up. Others choose to apply themselves to the logic of the underlying puzzle and making it work in the most elegant way they can. Some eschew modules they would ordinarily reach for, others embrace them, bringing to light wheels perhaps invented years ago that happen to exactly solve the problem in front of them today.

I've been considering this question for some time and have found one binding commonality between all of us out solving these challenges each week, in that however we normally live our lives, the task in front of us more than likely has nothing to do with any of that. And I think this has great value. We all do what we do, in the real world, and hopefully we do it well. The Weekly Challenge provides us with an opportunity to do something germane to that life yet distinctly different; if we only do the things we already know how to do then we will only do the same things over and over. This is where the "challenge" aspect comes into play.

So we can consider The Weekly Challenge as providing a problem space outside of our comfort zone, as far out from that comfort as we wish to take things. From those reaches we can gather and learn things, pick and choose and bring what we want back into our lives. Personally, I think that's what this whole thing is about. YMMV.

---

<strong><emp>Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due.</emp></strong>

And that, my friends, is why I'm here, to try and figure out ways to do just that.

So, here we are then. I'm ready — let’s get to it and see what we can find.

---

### For Additional Context…

before we begin, you may wish to revisit either the pages for the [**original tasks**](/blog/perl-weekly-challenge-150/) or the summary [**recap**](/blog/recap-challenge-150/) of the challenge. But don't worry about it, the challenge text will be repeated and presented as we progress from task to task.

Oh, and one more thing before we get started:


### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please feel free to email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

<div align= center><strong>...So finally, without further ado...</strong></div>

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC150TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC150TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC150BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

---

# TASK 1 {#PWC150TASK1}

# Fibonacci Words
*Submitted by: Mohammad S Anwar*
You are given two strings having same number of digits, $a and $b.

Write a script to generate Fibonacci Words by concatenation of the previous two strings. Finally print 51st digit of the first term having at least 51 digits.

**Example:**
```
    Input: $a = '1234' $b = '5678'
    Output: 7

    Fibonacci Words:

        '1234'
        '5678'
        '12345678'
        '567812345678'
        '12345678567812345678'
        '56781234567812345678567812345678'
        '1234567856781234567856781234567812345678567812345678'

    The 51st digit in the first term having at least 51 digits:

        '1234567856781234567856781234567812345678567812345678'

    is 7.
```




## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/adam-russell/perl/ch-1.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/alexander-pankoff/perl/ch-1.pl),
[**Ali Moradi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/deadmarshal/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/athanasius/perl/ch-1.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/bruce-gray/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/colin-crain/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/polettix/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/jo-37/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/lubos-kolouch/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/mattneleigh/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/perlboy1967/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/pete-houston/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/peter-campbell-smith/perl/ch-1.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/robert-dicicco/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/sgreen/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/ulrich-rieke/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/wlmb/perl/ch-1a.pl)

As all numbers exist in a realm outside of our specific representation of them — math performed in base-2 produces the same results as that done in base-10 — likewise in most cases an analogous statement can be made for the mathematical operations we perform on them. When working in binary, addition works the same way as it does in decimal — albeit the result remains, as to be expected, in binary notation.

The fact is, at the level most removed from mathematics and most grounded in reality, if I have two piles of sticks and I move two sticks from that pile to this then I am performing addition in unary, using sticks for digits. The operation doesn't care; the outcome remains the same.

Which brings us to this week's first task. The Fibonacci sequence is defined by a fundamental recurring relationship of addition: that *this* new number is the sum of *those* two  numbers *there*. The selected numbers to add are precisely specified, and this defined relationship determines the properties of the sequence produced.

And that relationship is consistent, completely indepedant from the representation of the numbers involved. The relationship, strictly speaking, doesn't even require numbers at all: if I take that pile of sticks and push it over next to this pile of sticks, and repeat this process according to the rules, then the quality of sticks in a given pile will follow the progression of the Fibonacci sequence.

The sticks I've just used in this examples are unary digits, and of course don't need to be sticks. They could be strings, and by pushing them together we could be talking about the operation of concatenation. In unary notation, we can see, concatenation and addition are very nearly the same. The strings for the initial conditions can even be different. This is the base definition of what are known as Fibonacci Words.

There is one slight difference though, in that using strings the order now matters: AB is not the same as BA, even though both have one A and one B in them. If we count the number of letters in the results we will still find the Fibonacci numbers appearing, but we have added a new property on top of those already present in the unary foundation of the recurrence relation, and in doing so removed the commutative property of the addition. Or more accurately *disguised* it, as the character counts of our string units still retain all of the properties of addition, and selectively, only the ordering of those strings in the concatenated results is not a commutative property. It's an interesting connection, that addition, unmodified, still lives on inside and as part of the operation of concatenation. as though concatenation is a shell encapsulating addition and carrying it along with it.

I do believe we started off talking about the Fibonacci sequence and ended up talking about category theory. Well then. Did not see that one coming. To explain, briefly: there is a larger sub-field of abstract algebra known as category theory that sets off to concretely analyse the concepts we've only begun to sketch out here, and specifically within that framework there are things called monads and functors that are conceptualizations of coupled actions and data, somewhat like a vector being a scalar magnitude coupled to a direction. If we consider these functors as themselves being data, we get a model for functions as first-class citizens — functions operating on functions —  and then things get really interesting. These ideas provide the robust theoretical framework supporting many of the ideas behind functional programming.

That's a little outside the immediate scope of today's task, though.

Fibonacci words are often defined as using the two digit characters "1" and "0" for the initializers, examining the results of the progression as either distinct character sequences or representations of binary numbers. Here though a wider interpretation is taken, allowing any two strings constructed from an equal number digits. Neither the constraint to digits nor the symmetrical quality of the string lengths are a fixed requirement in general, only applying to this specific task.

There were 26 submissions for the first task this past week.

## if WORDS were LEGOS this would be FINNISH
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/mohammad-anwar/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/mattneleigh/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/polettix/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/duncan-c-white/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/laurent-rosenfeld/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/jo-37/perl/ch-1.pl),
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/perl/ch-1.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/alexander-pankoff/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/wlmb/perl/ch-1a.pl)

In the challenge we are asked to concatenate equal-length strings that happen to be composed of digits. The fact that they resemble numbers is only coincidental, as they are not used as such, only pushed together to form larger strings. Because of this, the order of the operations become important, and we need to explicitly define that

F(n) = F(n-2) • F(n-1)

with the earlier term prefixed to the later. The middle-dot here is used for the concatenation operation.

Because positional representations can be precisely defined using series expansion:

125 = 1 × 10<sup>2</sup> + 2 × 10<sup>1</sup> + 5 × 10<sup>0</sup>

some unhinged person could have taken upon themselves to perform the concatenation mathematically, by summing after multiplying the left-hand value by the 10 raised to the power of the largest positional place in the right. This would have been bizarre and hilarious but it does not appear that anyone took it upon themselves to do it. As the length of the numbers involved would grow at the rate of the Fibonacci numbers the `bigint` pragma would come into play quite quickly, as the strings considered as numbers would become absurdly large quite quickly. Raku, with its built-in arbitrary integer precision scaling would really shine.

But we're talking about Perl 5 here. You know, the string-thing bling that saved the Human Genome Project, with the unique ability to seamlessly blend numbers and words. Concatenation is a simple dot operator and that is what people sensibly used.

The concatenation operation was repeated to make progressively longer words until one of these exceeded 51 characters in length, at which point the position was examined.

Ok right, except for Luis. But we'll get to him.

[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/mohammad-anwar/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/mohammad-anwar/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/mohammad-anwar/raku/ch-1.raku)


We'll start the discussion with Mohammad's submission. It's straightforward and to-the-point and so makes a fine entry.

The action is straightforward: while monitoring the word length in a loop conditional, we construct new words using a list assignment. In each assignment a list is replaced by a new version composed of the previous second element and an new concatenation of the previous first to the second. A tight little queue moves the words along, constructing longer and longer versions untile one has at least 51 characters. At that point the position is examined and the result returned.


```perl
    sub fibonacci_words {
        my ($term_1, $term_2, $index) = @_;

        while (length($term_1 . $term_2) <= $index) {
            ($term_1, $term_2) = ($term_2, $term_1 . $term_2);
        }

        return substr($term_1 . $term_2, --$index, 1);
    }
```

[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/mattneleigh/perl/ch-1.pl)

It may be difficult to improve on the elegant grace in Mohammad's distillation of the  problem, but the funny thing about superlatives is just because one thing is the best, it doesn't mean that some other, different thing cannot also be the best.

Think about that long and hard for a moment.

Now that you have either reached enlightenment or are thoroughly confused (or even perhaps a bit of both), we'll move on.

Matthew's solution closely tracks with what we just saw, and mostly only decompresses the steps slightly to facilitate scanning the action. To do this a third temporary variable is introduced to hold the newly merged word before swapping the values around, without the use of any list structures.


```perl
    sub fibonacci_words{
        my $a = shift();
        my $b = shift();
        my $n = int(shift());
        return(undef)
            unless($n > 0);
        my $c = "";

        # Loop until the string is long enough
        while(length($b) < $n){
            $c = $a . $b;
            $a = $b;
            $b = $c;
        }

        # String is zero-indexed so subtract
        # from $n
        return(substr($b, $n - 1, 1));
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC150 - Fibonacci Words - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/02/02/pwc150-fibonacci-words/)

Not to be intimidated by the Zen-like simplicity of these methods, Flavio brings a gun to a knife-fight. I believe the term he used was "overkill".

Anyway, to obtain his Fibonacci words, he builds a routine that when called with a pair of initial conditions, returns an iterator coderef closed around its scope. The iterator maintains the scope, and calling it returns a newly-created Fibonacci word composed from the two previous stored values.

The `$backlog` variable is a neat trick to deliver the initial conditions on the first two calls to the iterators.

```perl
    say "Fibonacci Words:\n";
    my $it = fibonacci_words_iterator(@ARGV);
    while ('necessary') {
       my $item = $it->();
       say "'$item'";
       if (length $item >= 51) {
          my $digit = substr $item, 50, 1;
          say "\nThe 51st digit in the first term having at least 51 digits '$item' is $digit.";
          last;
       }
    }

    sub fibonacci_words_iterator ($f0, $f1) {
       my @cache = ('', '', $f0, $f1);
       my $backlog = 2;
       return sub {
          if (! $backlog) {
             ($f0, $f1) = ($f1, $f0 . $f1);
             return $f1;
          }
          --$backlog;
          return $backlog ? $f0 : $f1;
       };
    }
```

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/duncan-c-white/perl/ch-1.pl)

It does appear we will have quite a bit of consistency today among the solutions. In a toothy, infinite, Escher-esque `for` loop, Duncan implements a scheme with three cascading variables that continuously flow into themselves.

The `@out` array stores a running commentary of the action that is optionally reported depending on a flag.

```perl
    for(;;)
    {
        # form next Fibonacci word
        my $next = $a.$b;
    last if length($b) > 50;
        push @out, "'$next'";
        $a = $b;
        $b = $next;
    }

    my $digit51 = substr($b,50,1);
    push @out, "\nThe 51st digit in the first term having at least 51 digits";
    push @out, "'$b', is $digit51";

    say "Output: $digit51";
```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/laurent-rosenfeld/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 150: Fibonacci Words and Square Free Integers | laurent_r](http://blogs.perl.org/users/laurent_r/2022/02/perl-weekly-challenge-150-fibonacci-words-and-square-free-integers.html)

With 4-character strings the Fibonacci words grow fast, quickly becoming longer at an accelerating pace. Those 51 characters go by in a blink of an eye it seems.

So it really doesn't save much to prune our list as is grows, as we've constructed our final word after only a few cycles.

Laurent doesn't bother with only keeping the last two elements, and just builds a loop to make words until on is long enough.


```perl
    sub fibonacci {
        my ($a, $b) = @_;
        my @fib = $a < $b ? ($a, $b) : ($b, $a);
        for my $i (1..20) {
            push @fib, $fib[-2] . $fib[-1];
            next if length $fib[-1] < 51;
            say $fib[-1];
            return $fib[-1];
        }
    }
    say substr fibonacci(1234, 5678), 50, 1;
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/james-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #150](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-150/james-smith)

At the other end of the spectrum we have James, who seems to live and breathe optimizing away milliseconds. I imagine working with huge genetic datasets will do that to you. You either embrace the tuning or go mad.

Here James presents three ways of saying the exact same thing:
 * In the "nasty" version we get the two assignments nested, which makes it harder to parse, as the subexpression `$r = $s` returns `$s`, the thing assigned, not `$r`, the thing assigned to. But we do get two separete assignments on one line.
 * So in the "messy" version we continue and cram everything into that a single line, by adding in the use of the predeclared special variables `$a` and `$b`.
 * In what we will call the Goldlocks version, or sane version if you want to get judgemental, we've cast off these shenannegans and kindly added whitespace to make things human readable. We are human, after all. At least many, or, probably most of us I suppose.


```perl
    sub fibnum_nasty {
      my ($r,$s) = @_;
      $s=$r.($r=$s) while 51>length $s;
      substr $s,50,1;
    }

    sub fibnum_messy {
      ($a,$b)=@_;$b=$a.($a=$b)while 51>length$b;substr$b,50,1;
    }

    sub fibnum {
      my ( $r, $s ) = @_;
      ( $r, $s ) = ( $s, $r.$s ) while 51 > length $s;
      substr $s, 50, 1;
    }
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/jo-37/perl/ch-1.pl)

Jorg is back with `Coro::Generator` again, assigning the construction of the words to a *co*-routine rather than a *sub*-routine. This distiction is not terribly important to the code at hand, which operates in pretty-much the same way at the others we've seen so far, but does organize the procedure in a novel way.

I suppose you could say the endgame here is compartmentalization of code, and the result shares many similarities with Flavio's iterator solution. The closure and the coroutine each maintain their own scope beteween calls, and even share some syntactic similarities.

Which is pretty neat, really. And outside of this toy implementaion both of these are great techniques to have available.

```perl
    use Coro::Generator;

    # Generate Fibonacci words from W1 and W2 until the length I is reached
    # and pick the Ith character.
    sub pick_from_fib_word ($w1, $w2, $i) {
        my $gen = gen_fibonacci_words($w1, $w2);
        my $f = '';
        # Generate the needed word and print it in verbose mode.
        ($f = $gen->(), $verbose) && say $f while $i > length $f;

        substr($f, $i - 1, 1);
    }

    # Build a generator for the Fibonacci word sequence starting with W1 and
    # W2.
    sub gen_fibonacci_words ($w1, $w2) {
        generator {
            yield $w1;
            yield $w2;
            while () {
                ($w1, $w2) = ($w2, $w1 . $w2);
                yield $w2;
            }
        }
    }
```

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/awk/ch-1.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/bash/ch-1.sh), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/bc/ch-1.bc), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/c/ch-1.c), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/go/ch-1.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/java/ch-1.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/lua/ch-1.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/node/ch-1.js), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/pascal/ch-1.p), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/python/ch-1.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/r/ch-1.r), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/ruby/ch-1.rb), [Scheme](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/scheme/ch-1.scm), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/tcl/ch-1.tcl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 150: Fibonacci Words](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-150-1.html)

One quality this challenge has it that it could be regarded as a poster child for off-by-one errors — although, I should add, people seem to have managed all right so far as I've seen.

In any case Abigail's tight example keeps this distinction between position and index quite clear by installing `$LENGTH` within the internal logic and making the adjustment there. Needless to say this is good practice.

I'll make another comment on Perl's ability to make assignments in-place, using the things being assigned to, which allows the this elegant Fibonacci constructor. It's just great.

```perl
    my $LENGTH = 51;

    while (<>) {
        my ($fib_prev, $fib_last) = /[0-9]+/g;
        while (length ($fib_last) < $LENGTH) {
            ($fib_prev, $fib_last) = ($fib_last, $fib_prev . $fib_last);
        }
        say substr $fib_last, $LENGTH - 1, 1;
    }
```




[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/alexander-pankoff/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Challenge 150 Task #1 - Fibonacci words | pankoff.net](https://pankoff.net/pages/perl-weekly-challenge/challenge-150-task-1.html)

In another unusual twist on a familiar theme, Alexander states in his [extensive notes](https://pankoff.net/pages/perl-weekly-challenge/challenge-150-task-1.html) that a Fibonacci sequence "cries for a recursive solution". Fair enough, if that's the way you want to play this. He constructs his sequence then by repeatedly re-calling the construction routine until a minimum character limit has been surpassed. When the recursion collapses the final result is returned and the 51st position is examined using `substr`.

```perl
    sub fibonacci_word ( $a, $b, $length ) {

        # The actual fibonacci_word routine cries for a recursive solution. As
        # always with a recursive solution we start with defining the exit
        # condition, which is fullfilled as soon as the $a string reaches at least
        # the requested length $length. In that case $a is the final fibonacci word
        # and we return it to the caller
        return $a if length($a) >= $length;

        # Otherwise we continue the process, by passing $b as the new $a to the
        # fibonacci_word routine and accumulating the next fibonacci word (the
        # concatenation of $a and $b) into $b
        return fibonacci_word( $b, $a . $b, $length );
    }
```


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/wlmb/perl/ch-1a.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 150 – W. Luis Mochán](https://wlmb.github.io/2022/01/31/PWC150/)

alternate method: [bookkeeping the offset](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/wlmb/perl/ch-1a.pl)

Finally we reach Luis who brings us two solutions today. The first follows the same basic pattern we've see quite a lot of, simply building a large enough word and examining the proper character. It the second, however, he does something really interesting and doesn't bother to even construct the word.

As noted in the opening analysis, the label of "Fibonacci" is appropriate to the strings produced because if the characters are viewed as unary digits, the resultant lengths of the strings are not just *like* the Fibonacci numbers, but *are* the Fibonacci numbers. So they act the same way, and because of this we can carefully track the *offset* in front of what will eventually become the 51st position.

From his [blog writeup](https://wlmb.github.io/2022/01/31/PWC150/):

>Actually, I don’t have to build the Fibonacci string to get the letter, I just have to calculate the sequence of string lengths l(n)=l(n-2)+l(n-1). Thus, the N-th letter of the n-th string is the M=N-l(n-2)-th letter of the n-1-th string. If M<=0 it means it is in the n-2-th string instead. I don’t even have to store the lengths of the strings as they can be reconstructed from the last two.

And that, my friends, is a really unusual and very cool take on the situation.

```perl
    my ($x, $y, $N)=@ARGV;
    $N//=51; # default
    my ($l,$m)=map {length $_} ($x, $y); # last two lengths
    die "Words should not be empty" unless $l > 0 && $m > 0;
    die "N should be >=1" unless $N>=1;
    say "Input: x=$x, y=$y, N=$N";
    say("Output: ", substr $x, $N-1, 1), exit if $N<=$l; # character in first word
    say("Output: ", substr $y, $N-1, 1), exit if $N<=$m; # character in second word
    do {($l,$m)=($m,$m+$l)} until $N<=$m; # get lengths of concatenated strings
    # get back to the initial two strings
    # while updating $N
    # Negative $N corresponds to a char not in the current string, but in the following,
    # so we make it positive in the following step
    ($l,$m,$N)=($m-$l, $l, $N>0?$N+$l-$m:$N+$l)  while($m>length($y));
    # A final negative $N corresponds to the first word
    # a final positive $N corresponds to the second word
    say "Output: ", $N<=0? substr($x,$N+length($x)-1,1):substr($y,$N-1,1);
```




## Blogs and Additional Submissions in Guest Languages for Task 1:


[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/adam-russell/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/adam-russell/prolog/ch-1.p)


&nbsp;&nbsp;**blog writeup:**
[Fibonacci Words That Yearn to Be Squarefree — Perl — Rabbitfarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/02/06)

&nbsp;&nbsp;**blog writeup:**
[Fibonacci Words That Yearn to Be Squarefree — Prolog — Rabbitfarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/02/06)


[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/arne-sommer/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/arne-sommer/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Fibonacci Squared Again with Raku and Perl](https://raku-musings.com/fibonacci-squared-again.html)


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/athanasius/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/athanasius/raku/ch-1.raku)


[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/bruce-gray/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Dart](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/bruce-gray/dart/ch-1.dart), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/bruce-gray/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[TWC 150: bAbAbbAb and a few Composites | Bruce Gray](http://blogs.perl.org/users/bruce_gray/2022/02/twc-150-bababbab-and-a-few-composites.html)


[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/colin-crain/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/colin-crain/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[The 51st Little Piece of String - Programming Excursions in Perl and Raku](https://colincrain.com/2022/02/03/the-51st-little-piece-of-string/)


[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/dave-jacoby/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Free The Squares!: The Weekly Challenge #150 | Committed to Memory](https://jacoby.github.io/2022/02/02/free-the-squares-the-weekly-challenge-150.html)


[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/lubos-kolouch/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/lubos-kolouch/python/ch-1.py)


[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/pete-houston/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/pete-houston/awk/ch-1.awk)


[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/peter-campbell-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Fibo, nacci, Fibonacci, nacciFibonacci, FibonaccinacciFibonacci ...](https://pjcs-pwc.blogspot.com/2022/02/fibo-nacci-fibonacci-naccifibonacci.html)


[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/robert-dicicco/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/robert-dicicco/raku/ch-1.raku), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/robert-dicicco/ruby/ch-1.rb)


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/roger-bell-west/javascript/ch-1.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/roger-bell-west/kotlin/ch-1.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/roger-bell-west/lua/ch-1.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 150: Square-Free Words](https://blog.firedrake.org/archive/2022/02/The_Weekly_Challenge_150__Square_Free_Words.html)


[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/sgreen/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/sgreen/python/ch-1.py)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 150](https://dev.to/simongreennet/weekly-challenge-150-4fmn)


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/ulrich-rieke/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/ulrich-rieke/cpp/ch-1.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/ulrich-rieke/haskell/ch-1.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/ulrich-rieke/raku/ch-1.raku)


------------------------------------------





---

# TASK 2 {#PWC150TASK2}

# Square-free Integer
*Submitted by: Mohammad S Anwar*
Write a script to generate all square-free integers <= 500.

In mathematics, a square-free integer (or squarefree integer) is an integer which is divisible by no perfect square other than 1. That is, its prime factorization has exactly one factor for each prime that appears in it. For example, 10 = 2 ⋅ 5 is square-free, but 18 = 2 ⋅ 3 ⋅ 3 is not, because 18 is divisible by 9 = 3**2.

**Example**
```
    The smallest positive square-free integers are

    1, 2, 3, 5, 6, 7, 10, 11, 13, 14, 15, 17, 19, 21, 22, 23, 26, 29, 30, ...
```



## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/adam-russell/perl/ch-2.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/alexander-pankoff/perl/ch-2.pl),
[**Ali Moradi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/deadmarshal/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/arne-sommer/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/athanasius/perl/ch-2.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/bruce-gray/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/polettix/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/jo-37/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/laurent-rosenfeld/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/lubos-kolouch/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/mattneleigh/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/perlboy1967/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/pete-houston/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/peter-campbell-smith/perl/ch-2.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/robert-dicicco/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/sgreen/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/ulrich-rieke/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/wlmb/perl/ch-2.pl)

The idea of squarefree integers directly derives from the idea of having squares amongst a number's factors. This in turn means that in a list of factors for a number some value is repeated, and by the fundamental theory of arithmetic this means at least one prime factor will be repeated. From this we can state then that being squarefree means that all of the prime factors of a number are distinct — that none are represented more than once.

The question of whether or not  a number contains any square factors comes into play in
many aspects throughout the field of number theory, along with the related idea of selecting out the squarefree *portion* of an integer's prime factorization; that is those factors without an exponent. The squarefree numbers pop up in a variety of more- and less-obvious spots, notably the Bell numbers, which we explored in [PWC108](https://theweeklychallenge.org/blog/review-challenge-108/), and the central binomial coefficients.

The complement collection of numbers that do have a square amongst their factors are called "squareful", and there is even an exclusive subgroup among *those* known as "squarefull" — with two "l"s — that have *all* of their factors being at least 2. As in "Oh my God! It's full of squares!"

Maybe we'll do those next, to see what they look like.

There were 26 submissions for the second task this past week.

## A WELL-ROUNDED sampling from our FINEST VARIETALS
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/roger-bell-west/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/adam-russell/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/ulrich-rieke/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/dave-jacoby/perl/ch-2.pl),
[**Ali Moradi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/deadmarshal/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/lubos-kolouch/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/pete-houston/perl/ch-2.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/bruce-gray/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/colin-crain/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/perlboy1967/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/athanasius/perl/ch-2.pl), and
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/e-choroba/perl/ch-2.pl)

As it turns out, there's no really quick, efficient algorithm for determining squarefree numbers. Which is a pity, because number theorists would really like one. If anyone figures that out, be sure to let them know.

In the meanwhile we have a wide variety of variations demonstrating ways to determine various  lists of primes, or perfect squares, or perfect squares of primes. Or even just producing lists of squarefree numbers from the spigot.

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/roger-bell-west/javascript/ch-2.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/roger-bell-west/kotlin/ch-2.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/roger-bell-west/lua/ch-2.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/roger-bell-west/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/roger-bell-west/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 150: Square-Free Words](https://blog.firedrake.org/archive/2022/02/The_Weekly_Challenge_150__Square_Free_Words.html)

I say we just take a wild leap into the freezing-cold water with Roger's remarkable solution. Why not? YOLO, baby. In these uncertain times we need to seize life by the horns and run with it.

And to those with English as a second language desperately trying to make sense of what I just said, just go with it.

Anyway, Roger starts with generating a list of prime numbers to be used throughout the script, up to the square root of 500, the largest candidate we will be considering.

Primes in hand, he then starts trial division with primes from the list against the candidate values. And here's the clever part: when testing a prime, we immediately try dividing it out as many times as we can. If the count, being the exponent, is greater than 1 we have found a square and we immediately move to the next candidate up the line. We stop at the prearranged value of 500.

So to paraphrase myself on this first go: we divide out the 2s, then the 3s, then the 5s, reducing the candidate value at each iteration until we reach a prime that, when squared, exceeds the current value of the candidate. So we constrict the search space from every direction at every opportunity we can find.

```perl
    sub squarefree {
      my $max=shift;
      my @out;
      my @primes=@{genprimes(int(sqrt($max)))};
      my $plimit=1;
      foreach my $candidate (1..$max) {
        my $squarefree=1;
        while ($plimit * $plimit < $candidate) {
          $plimit++;
        }
        my $cc=$candidate;
        foreach my $pr (@primes) {
          if ($pr > $plimit) {
            last;
          }
          my $n=0;
          while ($cc % $pr == 0) {
            $n++;
            if ($n>1) {
              $squarefree=0;
              last;
            }
            $cc=int($cc/$pr);
          }
          unless ($squarefree) {
            last;
          }
        }
        if ($squarefree) {
          push @out,$candidate;
        }
      }
      return \@out;
    }
```

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/adam-russell/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/adam-russell/prolog/ch-2.p)


&nbsp;&nbsp;**blog writeup:**
[Fibonacci Words That Yearn to Be Squarefree — Perl — Rabbitfarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/02/06)

&nbsp;&nbsp;**blog writeup:**
[Fibonacci Words That Yearn to Be Squarefree — Prolog — Rabbitfarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/02/06)

Adam sets into the task with two routines, `prime_factor()` which creates an exhaustive degeneration on an integer, and `squarefree()` as a wrapper to search the field of candidates and locate those that are squarefree.

As `prime_factor()` returns a list of all factors required to produce the candidiate, we locate squares by translating the list into a frequency array, with each instance incrementing a counter at the given index corresponding to the factor. A `grep` filter is then used to find any elements that are greater than 1, and if any of these are found the candidate cannot be squarefree.

```perl
    sub prime_factor{
        my $x = shift(@_);
        my @factors;
        for (my $y = 2; $y <= $x; $y++){
            next if $x % $y;
            $x /= $y;
            push @factors, $y;
            redo;
        }
        return @factors;
    }

    sub square_free{
        my @square_free;
        for my $x (1 .. LIMIT){
            my @factors = prime_factor($x);
            my @a;
            map {$a[$_]++} @factors;
            @a = grep {$_ && $_ > 1} @a;
            push @square_free, $x if !@a;
        }
        return @square_free;
    }
```

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/ulrich-rieke/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/ulrich-rieke/cpp/ch-2.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/ulrich-rieke/haskell/ch-2.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/ulrich-rieke/raku/ch-2.raku)

Ulrich takes a very similar course of first reducing a candidate to a list of prime factors. In his scheme, however, a number is determined to be squarefree if the count of its prime factors is equal to the count of its *distinct* prime factors. Of course this can only happen if no factor occurs more than once.

```perl
    sub isSquareFree {
      my $number = shift ;
      my @primeFactors = primeFactorialize( $number ) ;
      my %factors ;
      for my $i ( @primeFactors ) {
          $factors{ $i }++ ;
      }
    #if it is square free the number of different prime factors should be equal to
    #the number of prime factors
      return scalar( keys %factors ) == scalar( @primeFactors ) ;
    }

    my @square_frees ;
    my $current = 1 ;
    while ( $current < 501 ) {
      if ( isSquareFree( $current ) ) {
          push @square_frees, $current ;
      }
      $current++ ;
    }
    say join( ',' , @square_frees ) ;
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/dave-jacoby/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Free The Squares!: The Weekly Challenge #150 | Committed to Memory](https://jacoby.github.io/2022/02/02/free-the-squares-the-weekly-challenge-150.html)

First of all, I'd lie to take an aside to thank Dave for [including commentary in his blog writeups](https://jacoby.github.io/2022/02/02/free-the-squares-the-weekly-challenge-150.html) about the *number* of the challenge each week. I think this is valuable because long, long ago my father brought to my — I believe 8-year-old — attention a recursive proof that there are no uninteresting numbers because, after picking any obviously interesting number, the number next to it, even if not obviously interesting in itself, is *right next to* an interesting number, which makes it interesting. And of course the number next to that one, even if not obviously interesting, is also next to what we have now discovered to be an interesting number. Yes I am a second-generation weirdo, and that's only covering the male lineage.

But back to work. Dave's factorization routine is simplicity itself: counting upwards from 2 he tries dividing out the value and if the remainder is 0 we have found a factor. The factor is then kept and divided again as long as we can.

By dividing and removing the factors as we go, composite factors will never be found as their own factors will always be located and divided out before they are tested.

Dave also introduces yet another way to locate any *recurring* factors, by scanning the prime factorization list for each element contained in it and manually counting them. It seems to work well enough.

```perl
    OUTER: for my $i ( 1 .. $max ) {
            my @factors = factors($i);
            for my $f (@factors) {
                my $g = () = grep { /$f/ } @factors;
                next OUTER if $g > 1;
            }
            push @sfi, $i;
        }
        return @sfi;
    }

    sub factors ( $n ) {
        my @factors;
        my $i = 2;
        while ( $i < $n ) {
            while ( $n % $i == 0 ) {
                $n /= $i;
                push @factors, $i;
            }
            $i++;
        }
        return @factors;
    }
```

[**Ali Moradi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/deadmarshal/perl/ch-2.pl)

With all of these ways we've seen to determine whether the elements in a list of prime factors are distinct, Ali does the obvious thing and brings in `uniq()` from `List::MoreUtils` to do the job quickly and efficiently. Then if the number of unique primes equals the size of the original prime factor list we can conclude no individual prime occurs more than once. We can then say there can be no squares and the candidate is logged.

```perl
    sub square_free_integers{
      my @arr;
      my $i = 1;
      do{
        my @primes = prime_factors($i);
        my $prime = uniq @primes;

        if(scalar(@primes) - $prime == 0){
          push @arr, $i;
        }
        $i++;
      }while(scalar @arr <= 500);

      return @arr;
    }
```

[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/lubos-kolouch/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/lubos-kolouch/python/ch-2.py)

In a manner analogous to bringing in `uniq()` to locate duplicates, Lubos imports `factor()` from `Math::Prime::Util` to do the intensive task of factoring. He then loops over the factor list, incrementing the elements as keys in a hash, autovivifying the keys as required. If any key value reaches 2 the loop is immediately exited and the next candidate is considered.

```perl
    use Math::Prime::Util qw/factor/;

    sub get_sq_free_int{
        my $limit = shift;
        my @result;

        for my $i (1..$limit) {
            my @factors = factor($i);

            my %fact_hash;
            my $is_ok = 1;

            for my $fact(@factors) {
                $fact_hash{$fact} += 1;
                if ($fact_hash{$fact}== 2) {
                    $is_ok =0;
                    last;
                }
            }
            push @result, $i if $is_ok;
        }
        return join ', ', @result;
    }
```


[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/pete-houston/perl/ch-2.pl)

Pete, on the other hand, takes importation to another level entirely.

Sometimes when I see solutions like this I say to myself "Hey! That's cheating!" But on reflection, you know, it really isn't. A breathtakingly marvelous library has been painstakingly assembled over countless hours for the sole purpose of helping in all manner of questions pertaining to number theory, and that is `Math::Prime::Util`, a.k.a. `ntheory`. As we said before the squarefree numbers have a tendency to pop up in many unsuspecting places, which warrants them their own set of functions in this library, one of which is   `forsquarefree()`. This creates an `map`-like iteration loop over a range and applies the given block function to each squarefree number in the range from 1 to the specified value. To get a list of all squarefree numbers, then, we only need to use the block to push values onto an output list.

```perl
    use Math::Prime::Util qw/forsquarefree/;

    my @sf;
    forsquarefree { push @sf, $_ } 500;
    print 'The smallest positive square-free integers are: ' .
        join (', ', @sf) . "\n";
```

[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/bruce-gray/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Dart](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/bruce-gray/dart/ch-2.dart), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/bruce-gray/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[TWC 150: bAbAbbAb and a few Composites | Bruce Gray](http://blogs.perl.org/users/bruce_gray/2022/02/twc-150-bababbab-and-a-few-composites.html)

Likewise Bruce, notably economical in line and form.

```perl
    use Modern::Perl;
    use ntheory qw<is_square_free>;

    say join ', ', grep { is_square_free($_) } 1 .. 500;
```



[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/colin-crain/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/colin-crain/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[No Squares Allowed - Programming Excursions in Perl and Raku](https://colincrain.com/2022/02/04/no-squares-allowed/)

For my own solution I took a stab at avoiding prime factoring entirely. I also do my best to avoid factoring as much as possible as well, by precompiling a list of *squares* of numbers that are numbers less than the square root. As the number itself might be a perfect square, we need to consider squares all the way up, but we also don't need to consider the whole list of squares for every candidate. To accomodate this I kept two lists: the list of all potential squares and a sub-list to actually search. By looking at the candidate value, we gradually shift squares off of the one list and add them to the other when the candidate equals the lowest square in the remaining master list. Doing things this way not only optimizes the number of squares tested, but removes all comparisons to the size of the square being tested from the inner loop, so we don't find ourselves doing that over and over either. The result is remarkably quick.

```perl
    my $max = shift // 500;

    my @all_squares = map { $_ * $_ } ( 2..sqrt $max );
    my @squares = shift @all_squares;
    my @out;

    CANDIDATE: for my $candidate ( 1..$max ) {
        if ( @all_squares && $all_squares[0] == $candidate) {
            push @squares, shift @all_squares;
            next CANDIDATE ;
        }

        for my $sq ( @squares ) {
            next CANDIDATE unless $candidate % $sq;
        }
        push @out, $candidate;
    }
```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/perlboy1967/perl/ch-2.pl)

Niels also turns his focus to the perfect squares, using the `List::MoreUtils` function `none` to apply a block that tries dividing out a candidate by each square in a list to see if the result is whole. The list of squares is kept as a hash that is built up gradually, again adding a new square for consideration whenever the candidate reaches its value. Because all squares need to be checked, using `keys` on this hash will provide a perfectly good list.

```perl
    use List::MoreUtils qw(none);

    my @i = (1);

    my %isqr = (2 => 4);
    my ($i, $m) = (2, 2);

    while ($i < 500) {
      if ($i > 2 * $isqr{$m}) {
        $m++;
        $isqr{$m} = $m * $m;
      }
      push(@i, $i) if none{$i % $isqr{$_} == 0} keys %isqr;
      $i++;
    }
```


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/athanasius/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/athanasius/raku/ch-2.raku)

With all this talk of prime factorization I was wondering whether anyone would apply a sieve approach to filtering the candidate list up to 500; if 4 contains a square, as of course it does, then every multiple of 4 will as well, and we should not bother to check them.

Well my wish has been granted by the monk Athanasius, who implements an algorithm he attributes to one Vladimir Shevelev. From his notes:

```
    From Vladimir Shevelev in [1], "an Eratosthenes-type sieve for squarefree num-
    bers":
      1. Record 1 as a square-free number
      2. Create a sieve for numbers 2 to MAX. Each entry is either true (the number
         is square-free) or false (the number is not square-free). Initialize all
         numbers to true.
      3. FOR each number i from 2 to MAX:
             IF sieve[i] is true THEN
                 Record i as a square-free number
                 FOR each number j in the sequence 2i, 3i, 4i, ..., up to MAX:
                     Toggle the value of sieve[j]: true becomes false, false
                     becomes true
                 ENDFOR
             ENDIF
         ENDFOR
```

So there we have it.

```perl
    my @sieve = (1) x ($MAX + 1);

    printf "The square-free integers between 1 and %d (inclusive) are:\n%3d",
            $MAX, 1;

    for my $i (2 .. $MAX)
    {
        if ($sieve[ $i ])
        {
            printf ", %3d", $i;

            for (my $j = $i * 2; $j <= $MAX; $j += $i)
            {
                $sieve[ $j ] = !$sieve[ $j ];                # Toggle the value
            }
        }
    }

    print "\n";
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/e-choroba/perl/ch-2.pl)

Finally we'll finish off our dozen with Choroba, who goes straight to the logical core of the task in a remarkably efficient manner. In two steps he first gives us a sieve of Eratosthenes in a notably compact couple of lines, and then uses this list of primes up to the square root of 500 to divide out the squares, looking for the absence of a remainder.

That's it. It has no fat left on it, and it's very, very fast.

```perl
    sub squarefree_integers {
        my ($max) = @_;
        my @primes = (2 .. sqrt $max);
        for (my $i = 0; $i <= $#primes; ++$i) {
            @primes = grep $_ <= $primes[$i] || 0 != $_ % $primes[$i], @primes;
        }
        my @sfi;
      INTEGER:
        for my $n (1 .. $max) {
            0 == $n % ($_ * $_) and next INTEGER for @primes;
            push @sfi, $n;
        }
        return @sfi
    }
```




## Blogs and Additional Submissions in Guest Languages for Task 2:


[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/awk/ch-2.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/bash/ch-2.sh), [Basic](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/basic/ch-2.bas), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/bc/ch-2.bc), [Befunge-93](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/befunge-93/ch-2.bf93), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/c/ch-2.c), [Cobol](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/cobol/ch-2.cb), [Csh](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/csh/ch-2.csh), [Erlang](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/erlang/ch-2.erl), [Forth](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/forth/ch-2.fs), [Fortran](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/fortran/ch-2.f90), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/go/ch-2.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/java/ch-2.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/lua/ch-2.lua), [M4](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/m4/ch-2.m4), [Mmix](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/mmix/ch-2.mms), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/node/ch-2.js), [Ocaml](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/ocaml/ch-2.ml), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/pascal/ch-2.p), [Php](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/php/ch-2.php), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/python/ch-2.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/r/ch-2.r), [Rexx](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/rexx/ch-2.rexx), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/ruby/ch-2.rb), [Scheme](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/scheme/ch-2.scm), [Sed](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/sed/ch-2.sed), [Sql](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/sql/ch-2.sql), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/abigail/tcl/ch-2.tcl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 150: Square-free Integer](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-150-2.html)


[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/alexander-pankoff/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Challenge 150 Task #2 - Squarefree integers](https://pankoff.net/pages/perl-weekly-challenge/challenge-150-task-2.html)


[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/arne-sommer/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/arne-sommer/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Fibonacci Squared Again with Raku and Perl](https://raku-musings.com/fibonacci-squared-again.html)


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC150 - Square-free Integer - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/02/03/pwc150-square-free-integer/)


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/james-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #150](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-150/james-smith)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/laurent-rosenfeld/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/laurent-rosenfeld/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 150: Fibonacci Words and Square Free Integers](http://blogs.perl.org/users/laurent_r/2022/02/perl-weekly-challenge-150-fibonacci-words-and-square-free-integers.html)



[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/peter-campbell-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Fibo, nacci, Fibonacci, nacciFibonacci, FibonaccinacciFibonacci ...](https://pjcs-pwc.blogspot.com/2022/02/fibo-nacci-fibonacci-naccifibonacci.html)


[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/robert-dicicco/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/robert-dicicco/raku/ch-2.raku), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/robert-dicicco/ruby/ch-2.rb)


[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/sgreen/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/sgreen/python/ch-2.py)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 150](https://dev.to/simongreennet/weekly-challenge-150-4fmn)


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-150/wlmb/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 150 – W. Luis Mochán](https://wlmb.github.io/2022/01/31/PWC150/)

------------------------------------------





---

<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>

<center>
<h1 id="PWC150BLOGS">_________ THE BLOG PAGES _________</h1>
</center>


---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, by some miracle I somehow continue to maintain my bearings.**

**Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your Unquenchable *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC150BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *FOLLOW* these *BLOG* *LINKS*:

**( ...*don't think, trust your training, you're in the zone, just do it ...* )**


**Abigail**

 * [Perl Weekly Challenge 150: Fibonacci Words](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-150-1.html) ( *Perl* )
 * [Perl Weekly Challenge 150: Square-free Integer](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-150-2.html) ( *Perl* )

**Adam Russell**

 * [Fibonacci Words That Yearn to Be Squarefree — Perl — Rabbitfarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/02/06) ( *Perl* )
 * [Fibonacci Words That Yearn to Be Squarefree — Prolog — Rabbitfarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/02/06) ( *Prolog* )

**Alexander Pankoff**

 * [Challenge 150 Task #1 - Fibonacci words](https://pankoff.net/pages/perl-weekly-challenge/challenge-150-task-1.html) ( *Perl* )
 * [Challenge 150 Task #2 - Squarefree integers](https://pankoff.net/pages/perl-weekly-challenge/challenge-150-task-2.html) ( *Perl* )

**Arne Sommer**

 * [Fibonacci Squared Again with Raku and Perl](https://raku-musings.com/fibonacci-squared-again.html) ( *Perl & Raku* )

**Bruce Gray**

 * [TWC 150: bAbAbbAb and a few Composites | Bruce Gray](http://blogs.perl.org/users/bruce_gray/2022/02/twc-150-bababbab-and-a-few-composites.html) ( *Perl & Raku* )

**Colin Crain**

 * [The 51st Little Piece of String - Programming Excursions in Perl and Raku](https://colincrain.com/2022/02/03/the-51st-little-piece-of-string/) ( *Perl & Raku* )
 * [No Squares Allowed - Programming Excursions in Perl and Raku](https://colincrain.com/2022/02/04/no-squares-allowed/) ( *Perl & Raku* )

**Dave Jacoby**

 * [Free The Squares!: The Weekly Challenge #150 | Committed to Memory](https://jacoby.github.io/2022/02/02/free-the-squares-the-weekly-challenge-150.html) ( *Perl* )

**Flavio Poletti**

 * [PWC150 - Fibonacci Words - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/02/02/pwc150-fibonacci-words/) ( *Perl & Raku* )
 * [PWC150 - Square-free Integer - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/02/03/pwc150-square-free-integer/) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #150](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-150/james-smith) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 150: Fibonacci Words and Square Free Integers](http://blogs.perl.org/users/laurent_r/2022/02/perl-weekly-challenge-150-fibonacci-words-and-square-free-integers.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 150: Fibonacci & squares (again!) – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/01/31/PerlWeeklyChallenge150.html#task1) ( *Raku* )

**Peter Campbell Smith**

 * [Fibo, nacci, Fibonacci, nacciFibonacci, FibonaccinacciFibonacci ...](https://pjcs-pwc.blogspot.com/2022/02/fibo-nacci-fibonacci-naccifibonacci.html) ( *Perl* )

**Roger Bell_West**

 * [RogerBW's Blog: The Weekly Challenge 150: Square-Free Words](https://blog.firedrake.org/archive/2022/02/The_Weekly_Challenge_150__Square_Free_Words.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 150](https://dev.to/simongreennet/weekly-challenge-150-4fmn) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 150 – W. Luis Mochán](https://wlmb.github.io/2022/01/31/PWC150/) ( *Perl* )
