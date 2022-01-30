---
author:       Colin Crain
date:         2022-01-30T00:00:00
description:  "Colin Crain › Perl Weekly Review #145"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #145"
image:        images/blog/p5-review-challenge-145.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-144/).* )

Welcome to the Perl review pages for **Week 145** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

**<big>For context... </big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-145/) or the summary [**recap**](/blog/recap-challenge-145/) of the challenge. But don't worry, the challenges themselves are repeated and presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us:

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please feel free to email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC145TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC145TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC145BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC145TASK1}

# Dot Product
*Submitted by: Mohammad S Anwar*

You are given 2 arrays of same size, @a and @b.

Write a script to implement Dot Product.

**Example:**
```
    @a = (1, 2, 3);
    @b = (4, 5, 6);

    $dot_product = (1 * 4) + (2 * 5) + (3 * 6) => 4 + 10 + 18 => 32
```



## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/abigail/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/adam-russell/perl/ch-1.pl),
[**Andrezgz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/andrezgz/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/athanasius/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/colin-crain/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/polettix/perl/ch-1.pl),
[**Ian Goodnight**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/iangoodnight/perl/ch-1.pl),
[**Jake**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/jake/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/james-smith/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/laurent-rosenfeld/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/mattneleigh/perl/ch-1.pl),
[**Mohammad Khalid Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/khalid-anwar/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/perlboy1967/perl/ch-1.pl),
[**Olivier Delouya**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/olivier-delouya/perl/ch-1.sh),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/paulo-custodio/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/pete-houston/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/peter-campbell-smith/perl/ch-1.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/robert-dicicco/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/sgreen/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/ulrich-rieke/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/wlmb/perl/ch-1.pl)

The dot product processes two lists simultaneously, taking aligned values from both and multiplying them, summing the results to a running tally.

Although Perl does have a standard functional programming suite of list-processing routines: `map`, `grep`, and `sort`; it has no built-in capabilities to process multiple lists at once. These needs are addressed in the various list-utility modules that have arisen and evolved over the years, providing myriad options for those who need them.

To calculate the dot product, then, some means need to be devised to select and pair up elements, either within a looping control structure or by utilizing one of these imported routines.

There were 28 submissions for the first task this past week.

## DON'T FIRE until you see the DOTS IN THEIR EYES
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/paulo-custodio/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/duncan-c-white/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/perlboy1967/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/ulrich-rieke/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/peter-campbell-smith/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/sgreen/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/roger-bell-west/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/athanasius/perl/ch-1.pl),
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/abigail/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/james-smith/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/polettix/perl/ch-1.pl),
[**Olivier Delouya**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/olivier-delouya/perl/ch-1.sh), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/wlmb/perl/ch-1.pl)

The calculation of the dot product is a straightforward process of following the definition, and at the most abstract level all of the solutions shared a common algorithm in that sense. The exact means used to isolate and match up elements from the two input arrays, on the other hand, varied somewhat more.

The input and output requirements, being unspecified, showed the most variation of all, with some members providing proper command line utilities, accepting the two lists serially, and others just offering a subroutine that applies the function to two references.


[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/paulo-custodio/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/paulo-custodio/python/ch-1.py)

It's not clear from the description how we are expected to get data to our function; in fact nothing is said at all on the subject.

We could create a function with a couple of array references as arguments — and don't worry, we'll get to that idea — but if we wish to write a script that can be called from the command line our options are notably more limited.

One thing is clear: the operation requires two equally-sized arrays, or vectors, or whatever to perform the matching-up operation. Flattening the lists and placing them one after the other would be one way to do it, in one long data stream twice the length of each individually. This is Paulo's approach.

We then access indices on this array using an iterator over one-half the elements; the second vector is offset by exactly half the input array length (which will always have an even number of elements, being a multiple of 2) so we can add this offset to the first index to arrive at the matching second.

At this point can then multiply the *n*-th element from each array with the other and add the product to an aggregate sum.

In Paulo's solution the input is taken to be this single double-length array, `@ab`.

```perl
    sub dot_product {
        my(@ab) = @_;
        my $n = int(@ab/2);
        my $p = 0;
        for my $i (0..$n-1) {
            $p += $ab[$i]*$ab[$n+$i];
        }
        return $p;
    }
```

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/duncan-c-white/perl/ch-1.pl)

On the other hand, Duncan's version takes two array references without worrying too much about how we came about to acquire them. After validating they are the same size, a single iterator can be then be used to access the indices in each, with the corresponding elements multiplied. The results are then summed to provide the dot product.

```perl
    sub dotproduct ($$)
    {
        my( $a, $b ) = @_;
        my $na = @$a;
        my $nb = @$b;

        die "dot-product: A and B arrays must be same size (A has $na, B has $nb)\n"
        	unless $na==$nb;

        my $result = 0;
        foreach my $i (0..$na-1)
        {
        	$result += $a->[$i] * $b->[$i];
        }
        return $result;
    }
```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/perlboy1967/perl/ch-1.pl)

The other way to do this is to obtain some outside help.

As mentioned earlier, over the years a variety of modules have evolved to address practical shortcomings in Perl's list-processing abilities. A `List::Util` utilities library was started, and later a `List::MoreUtils` library evolved to further expand in those  areas left out of the original. Now additional, more specialized, modules in turn focus on providing even more functionality.

Niels is quite fond of the `pairwise` function from `List::MoreUtils`, which acts much like a `map` loop, only instead of aliasing elements of a list to the topic `$_`, two arrays are draw from simultaniously and their elements aliased to the special variables `$a` and `$b` within a block. Like `map`, each individual pair is then processed within the block to yield a new element in an output list.

This is exactly what we need done. A second imported function, `sum` from `List::Util`, is used to add up the elements in the list of products from the `pairwise` function.


```perl
    use List::Util qw(sum);
    use List::MoreUtils qw(pairwise);

    sub dotProduct(\@\@) {
      my ($c,$d) = @_;
      no warnings 'once';
      return sum pairwise{$a*$b}@$c,@$d;
    }

    my @a = (1,2,3);
    my @b = (2,3,4);

    printf "dotProduct of (%s) and (%s) = %d\n",
      join(',',@a), join(',',@b), dotProduct(@a,@b);
```

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/ulrich-rieke/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/ulrich-rieke/cpp/ch-1.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/ulrich-rieke/haskell/ch-1.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/ulrich-rieke/raku/ch-1.raku)

Ulrich takes a more interactive approach to gathering input for his script, twice requesting a `<STDIN>` string of space-separated values from the user. This input stage performs validation and is even a bit involved, with an array-checking loop that makes sure the second array is the same length as the first, kicking back the prompt to the user until they get it right. That'll show 'em.

For the actual preparation of the dot product we iterate over the two lists index-by-index, multiplying the elements and appending them to an intermediate `@products` array. This array is then summed to get the final value.

```perl
    use List::Util qw ( sum ) ;

    say "Enter an array of numbers!" ;
    my $line = <STDIN> ;
    chomp $line ;
    my @numbers1 = split( /\s+/ , $line ) ;
    say "Enter a second array of the same size!" ;
    $line = <STDIN> ;
    chomp $line ;
    my @numbers2 = split( /\s+/ , $line ) ;
    while ( scalar( @numbers2 ) != scalar( @numbers1 ) ) {
        say "The second array must contain as many numbers as the first one!" ;
        say "Re-enter!" ;
        $line = <STDIN> ;
        chomp $line ;
        @numbers2 = split( /\s+/ , $line ) ;
    }
    my @products ;
    for my $i ( 0 .. scalar( @numbers1 ) - 1 ) {
        push @products , $numbers1[ $i ] * $numbers2[ $i ] ;
    }
    say sum( @products ) ;
```

[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/peter-campbell-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[How to find palindromes quickly](https://pjcs-pwc.blogspot.com/2021/12/how-to-find-palindromes-quickly.html)

Peter, on the other hand, takes a decidely less formal approach. Instead of providing either a drop-in function or a configurable script he's delivered us a nice demonstration of the process in a careful, verbose way, in the exact manner as given in the examples:

```
    @a = (93, 72, 11)
    @b = (-1, 1000, 0)
    $dot_product = (93 * -1) + (72 * 1000) + (11 * 0) => -93 + 72000 + 0 => 71907
```

After performing basic input validation, he traverses each pair of example arrays using a common index iterator, taking the product and delivering it to an accumulator. However at each step the components of last line of the output are also gathered and appended, so that after the dot product is produced the output can properly reflect the steps taken to get there.

Nice.

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/sgreen/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/sgreen/python/ch-1.py)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 145](https://dev.to/simongreennet/weekly-challenge-145-4kho)

Simon opts for command-line input as two quoted strings of digits, using anything for a separator that isn't a number or part of a number. He's pretty flexible that way. This data is sucked in and pieced apart into two Perl arrays, which then get the dot product applied.

A single common iterator approach is taken, and here too a string built up along the way to create output matching the example.

```perl
    my @first_nums  = ( shift =~ /(-?\d+(?:\.\d+)?)/gm );
    my @second_nums = ( shift =~ /(-?\d+(?:\.\d+)?)/gm );

    if ( @first_nums != @second_nums ) {
        die "Arrays are of different lengths\n";
    }

    my @dots = ();
    my @sums = ();

    foreach my $i ( 0 .. $#first_nums ) {
        push @dots, "($first_nums[$i] × $second_nums[$i])";
        push @sums, $first_nums[$i] * $second_nums[$i];
    }

    say join( ' + ', @dots ), ' => ', join( ' + ', @sums ), ' => ', sum(@sums);
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/roger-bell-west/kotlin/ch-1.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/roger-bell-west/lua/ch-1.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 145: Tree Product](https://blog.firedrake.org/archive/2021/12/The_Weekly_Challenge_145__Tree_Product.html)

Compared to some of the efforts we've seen today, Roger's submission is tiny, eschewing all fluff to provide a simple function on two array references that returns the expected result. If we predeclared it by saying `sub dotproduct;` at the top of our script  we wouldn't even need to use parentheses, and we could pretend it came built-in.

```perl
    sub dotproduct {
      my $a=shift;
      my $b=shift;
      my $p=0;
      foreach my $i (0..$#{$a}) {
        $p += $a->[$i]*$b->[$i];
      }
      return $p;
    }
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/athanasius/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/athanasius/raku/ch-1.raku)

The monk gives us a alternative selection of listwise operations taken from the core `List::Util` module to get the job done. Working from the right leftwards, `mesh` takes the two arrays referenced in `$A` and `$B` and interleaves their elements into a single flat list, with one element from the first array followed by the same index from the second. The `pairmap` function then works much like `map`, but grabs *two* elements at a time instead of one from the single list created. These are assigned to `$a` and `$b` in the block where they are multiplied and returned list-wise. This final list is then summed.

```perl
    use List::Util 1.56 qw( mesh pairmap sum0 );

    ...

    scalar @$A == scalar @$B
            or error( 'The input lists have different sizes' );

    printf "Input:  \@a = (%s)\n", join ', ', @$A;
    printf "        \@b = (%s)\n", join ', ', @$B;

    printf "Output: %d\n", sum0 pairmap { $a * $b } mesh $A, $B;
```

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/abigail/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/abigail/awk/ch-1.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/abigail/bash/ch-1.sh), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/abigail/bc/ch-1.bc), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/abigail/c/ch-1.c), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/abigail/go/ch-1.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/abigail/java/ch-1.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/abigail/lua/ch-1.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/abigail/node/ch-1.js), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/abigail/pascal/ch-1.p), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/abigail/python/ch-1.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/abigail/r/ch-1.r), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/abigail/ruby/ch-1.rb), [Scheme](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/abigail/scheme/ch-1.scm), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/abigail/tcl/ch-1.tcl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 145: Dot Product](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-145-1.html)

The dot product, as we have seen, is not a difficult function to implement using a primitive lopping construct.  If we allow ourselves to use the list-wise module functions `pairwise` and `sum`, then the steps, procedurally equivalent, become even easier. The next logical conclusion is to import the operation itself:

```perl
    use Math::Matrix;
    say Math::Matrix:: -> new ([split ' ' => scalar <>]) -> dot_product
       (Math::Matrix:: -> new ([split ' ' => scalar <>]));
```

Beyond this, the real interest, for those who want to go further in examining various ways to go about this task, lies in Abigail's [excellent write-up on the subject](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-145-1.html), where they explore ways to derive the product across a cross-section of languages, and how the appropriate techniques difer between them.

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/james-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #145](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-145/james-smith#readme)

James the speed demon has devised a remarkable way to do away with assigning an iterator variable in his impressively compact solution, relying solely on the implicit indexing of a `foreach` loop. As every element in the first array is sequentially addressed, the second array has an element shifted off of it to provide the second multiplicand for the product, which is added to an accumulator and eventually returned.

```perl
    sub dot_product {
      my ($t,@y) = (0,@{$_[1]});
      $t += $_ * shift @y foreach @{$_[0]};
      $t;
    }
```

[**Olivier Delouya**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/olivier-delouya/perl/ch-1.sh)

Olivier has a penchant for shoe-horning code into one-liners. To perform the task this time he comes up with a novel way to input his data: as properly constructed Perl arrays written out as strings. Once these are taken into the program, `eval` is called and the results assigned to internal arrays `@a` and `@b`. The result is a little odd but also kind of wonderful.

Just don't let it loose in the wild with that unrestrained `eval`.

```perl
    dot_product='@a=eval($a); @b=eval($b); for($i=0, $dot_product=0, $N=scalar(@a); $i<$N; $i++) { $dot_product += $a[$i]*$b[$i]; }; print $dot_product;'

    perl -se "$dot_product" -- -a="(1,2,3)" -b="(4,5,6)"
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC145 - Dot Product - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/12/29/pwc145-dot-product/)

Now we're just getting weird. Flavio amusingly creates a new `Vector` object, a simple blessed unmodified array, for the sole purpose to overload the `.` function so he can `say $v . $w`. Here is the result:

```perl
    my $v = Vector->new(1, 2, 3);
    my $w = Vector->new(4, 5, 6);
    say $v . $w;

    package Vector;
    use v5.24;
    use experimental 'signatures';
    no warnings 'experimental::signatures';
    use overload
       '.' => sub ($v, $w, @rest) {
          die "size mismatch\n" unless $v->$#* == $w->$#*;
          my $dp = 0;
          $dp += $v->[$_] * $w->[$_] for 0 .. $v->$#*;
          return $dp;
       };

    sub new ($package, @a) { bless \@a, $package }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/wlmb/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 145 – W. Luis Mochán](https://wlmb.github.io/2021/12/27/PWC145/)

Finally Luis brings us a solution in the Perl Data Language, the PDL. To tell the truth I saw this and immediately pulled it out expecting some crazy simultaneous looping over columns in a multidimensional data set or something, which actually might be a reasonable way to approach the problem. But then again the dot product is a basic vector function, so of course it's implemented, as `$pdl->inner()`.

D'oh!

```perl
    use PDL;
    use List::Util;
    die "Usage: ./ch-1.pl 'x1 x2... xn' 'y1 y2... yn' to find dot product x.y"
         unless @ARGV==2;
    my ($x,$y)=map pdl([split " ", $_]), @ARGV;
    die "Vectors should have the same positive length"
         unless $x->nelem>0 && $y->nelem>0 && $x->nelem==$y->nelem;
    say "x=$x, y=$y, x.y=", $x->inner($y);
```


## Blogs and Addition
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/adam-russell/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/adam-russell/cxx/ch-1.cxx), [Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/adam-russell/prolog/ch-1.p)


[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/arne-sommer/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/arne-sommer/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Palin' Dot with Raku and Perl](https://raku-musings.com/palindot.html)


[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/colin-crain/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/colin-crain/raku/ch-1.raku)


[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/dave-jacoby/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Products above Trees?: The Weekly Challenge #145 | Committed to Memory](https://jacoby.github.io/2021/12/27/products-above-trees-the-weekly-challenge-145.html)


[**Ian Goodnight**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/iangoodnight/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/iangoodnight/javascript/ch-1.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/iangoodnight/python/ch-1.py), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/iangoodnight/ruby/ch-1.rb)


[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/jaldhar-h-vyas/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/jaldhar-h-vyas/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 145](https://www.braincells.com/perl/2022/01/perl_weekly_challenge_week_145.html)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/laurent-rosenfeld/awk/ch-1.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/laurent-rosenfeld/bash/ch-1.sh), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/laurent-rosenfeld/c/ch-1.c), [D](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/laurent-rosenfeld/d/ch-1.amx), [Dart](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/laurent-rosenfeld/dart/ch-1.dart), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/laurent-rosenfeld/go/ch-1.go), [Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/laurent-rosenfeld/julia/ch-1.jl), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/laurent-rosenfeld/kotlin/ch-1.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/laurent-rosenfeld/lua/ch-1.lua), [Nim](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/laurent-rosenfeld/nim/ch-1.nim), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/laurent-rosenfeld/pascal/ch-1.p), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/laurent-rosenfeld/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/laurent-rosenfeld/raku/ch-1.raku), [Ring](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/laurent-rosenfeld/ring/ch-1.ring), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/laurent-rosenfeld/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/laurent-rosenfeld/rust/ch-1.rs), [Scala](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/laurent-rosenfeld/scala/ch-1.scala)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 145: Dot Product | laurent_r](http://blogs.perl.org/users/laurent_r/2021/12/perl-weekly-challenge-145-dot-product.html)


[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/mohammad-anwar/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/mohammad-anwar/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/mohammad-anwar/raku/ch-1.raku), [Swift](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/mohammad-anwar/swift/ch-1.swift)



------------------------------------------





---

# TASK 2 {#PWC145TASK2}

# Palindromic Tree
*Submitted by: Mohammad S Anwar*

You are given a string $s.

Write a script to create a Palindromic Tree for the given string.

I found this blog exaplaining Palindromic Tree in detail.

**Example 1:**
```
    Input: $s = 'redivider'
    Output: r redivider e edivide d divid i ivi v
```

**Example 2:**
```
    Input: $s = 'deific'
    Output: d e i ifi f c
```

**Example 3:**
```
    Input: $s = 'rotors'
    Output: r rotor o oto t s
```

**Example 4:**
```
    Input: $s = 'challenge'
    Output: c h a l ll e n g
```

**Example 5:**
```
    Input: $s = 'champion'
    Output: c h a m p i o n
```

**Example 6:**
```
    Input: $s = 'christmas'
    Output: c h r i s t m a
```


## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/abigail/perl/ch-2.pl),
[**Andrezgz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/andrezgz/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/arne-sommer/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/polettix/perl/ch-2.pl),
[**Ian Goodnight**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/iangoodnight/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/james-smith/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/laurent-rosenfeld/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/paulo-custodio/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/peter-campbell-smith/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/sgreen/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/ulrich-rieke/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/wlmb/perl/ch-2b.pl)

As it turned out, there was quite a bit of confusion about what exactly were were being asked to do with this particular challenge. To me it seemed pretty straightforward, albeit open-ended: "Here is a novel data structure, research it, implement it and play around with it. It does this."

If these reviews have taught me anything I have learned by now that merely because I feel I have a good understanding of something this means nothing as far as other people are concerned. They way I saw the phrasing sounded perfectly legitimate, mind you, and hardly a stretch. It just wasn't the only way to look at it.

Other people, for instance looked directly to the examples for guidance, and said: "Ahh, produce all the palindromic substrings". And so they did that, focusing on reproducing the results  using less-novel methods. To each their own, I suppose, even if I can't help but think perhaps they're missing the point. But to be fair what we're doing today, as far as the Weekly Challenge goes, is a bit unusual as well: generally we're encouraged to explore whatever means desired to get us to a given end, and here the directive seems to be switching this up and assigning a given method instead.

The data structure in question is a specific type of directed graph, referred to here as a Palindromic Tree, and by its creator as an "eertree". One might think of it as sort of cross between a sufix-trie and a pair of interwoven trees. I found it interesting, and an intriguing development to the problem at hand, but it doesn't strike me as particularly useful in any general sense. Then again they said the same about the Fourier series once too, so who knows? In order to integrate new ideas into the general corpus of understanding someone first needs to think them up, and so here we are.

I've heard it argued that theoretical physics seems to be slowing down not because we're run out of physics but because we've run out of maths to work it in new and interesting ways. It's certainly an argument that has some merit, even if it might not be the whole story. Sometimes we can only go so far with the tools we have, and so expanding the toolbox has always been a valid end in itself.

There were only 18 working submissions for the second task this past week.

## A SAMPLE, a TASTING FLIGHT across the BOARD

[**Ian Goodnight**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/iangoodnight/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/colin-crain/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/wlmb/perl/ch-2b.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/laurent-rosenfeld/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/jaldhar-h-vyas/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/arne-sommer/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/dave-jacoby/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/polettix/perl/ch-2.pl), and
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/roger-bell-west/perl/ch-2.pl)

Some quite valid concerns were brought up on the always-worthy topic of premature optimization: why would we use this arguably super-eficient, yet fairly complicated, algorithm when we can scan a string perfectly well in reasonable time? I have no immediate, good answer to this. The use-case of the algorithm seems pretty limited to be honest, and its modern, novel nature seems to be its principle allure. So we ended up with some people playing around with the algorithm, as an academic end in itself, and others solving the palindrome puzzle in objectively less-complex ways, expending fewer human resources doing so and producing far more maintainable solutions. As programmers, that is what we're supposed to be thinking about, right?

Right?

So what to do?

I see no single correct answer to this question in this context.

[**Ian Goodnight**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/iangoodnight/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/iangoodnight/javascript/ch-2.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/iangoodnight/python/ch-2.py), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/iangoodnight/ruby/ch-2.rb)

Scanning substrings is ultimately a straightforward idea and formed the basis for most of the solutions we saw today, in some form or another. So we may as well start there.

Here is a clear and succinct demonstration of a systematic substring search in **O**(*n*<sup>2</sup>) complexity. We traverse the list one character at a time, and then look at each length of substring that can be formed from that point forward. If the result is a palindrome, it is added to the output array unless it's already registered as a key in a parallel hash used to find duplicates. After a new palindrome is added to the output the `%map` hash is updated with the new key.

```perl
    sub is_palindrome {
      my $string   = shift;
      my $reversed = reverse $string;

      return $string eq $reversed ? 1 : 0;
    }

    sub eertree {
      my $input_str = shift;
      my $length    = length $input_str;
      my @palindromes;
      my %map;

      for my $cursor ( 0 .. $length - 1 ) {
        my $chars = 1;

        while ( $chars <= $length - $cursor ) {
          my $substring = substr $input_str, $cursor, $chars;

          if ( is_palindrome($substring) ) {
            push @palindromes, $substring unless exists $map{$substring};
            $map{$substring} = 1;
          }

          $chars += 1;
        }
      }

      return join q{ }, @palindromes;
    }
```

I will retain one objection here, though, and that is referring to this as an "eertree". We do produce the correct list of palindromic substrings, yes, but that name does not apply to the act of solving the problem. Rather is a coinage given to [a specific data structure created by Mikhail Rubinchik](https://arxiv.org/pdf/1506.04862.pdf). So have look for yourselves. The structure and related algorithm is presented on pages 3-5 in the paper.

The fact that this error is propagated in the [Rosetta Code listing for Perl](https://rosettacode.org/wiki/Eertree#Perl) does not help matters, and serves to remind us again not to belive everything you see on the internet, especially in a wiki.  Someone should take in upon themselves to fix that. For now I'm going to leave it as-is as a demonstration, but will make a note to attend to it later if no one else does.

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/colin-crain/perl/ch-2.pl)

I took some time to study the algorithm, and ended up creating an implementation merging ideas from a few sources. Honestly I found it a somewhat difficult idea to wrap my head around, and felt the several sources I found for explanations to be less-than-clear. I've come to the conclusion that, like dynamic programming, it's not a overly complex idea but a hard thing to explain well.

[my principle reference](https://www.geeksforgeeks.org/palindromic-tree-introduction-implementation/)

But let's try anyways:

The structure is composed of a collection of nodes connected to two roots, themselves nodes, with one node for each palindromic substring found. Each node is a palindrome, and contains links both upward to the node representing the largest palindromic suffix contained within the string, and downward with zero or more labeled edge connections to new palindromes that can be formed by encapsulating the string between instances of some  character.

Thus in the graph for the string "**eertree**" we will have the node "**ertre**", which is linked  to from the node "**rtr**" with the label "**e**", because surrounding "**rtr**" with two instances of "**e**" produces "**ertre**". This node has two outgoing links: a downward link to "**eertree**" with the label "**e**", and an upward link to the *node* for the one-letter palindrome "**e**". No longer palindrome smaller than the complete string can be formed from "**ertre**" as a suffix.

The algorithm itself has one function, `insert()`, which is applied to each successive character across the string. The current node is always the last node looked at, either in or just added to the structure, and with each character we check to find the longest palindrome suffix for the current node plus the new character. Depending on whether that palindrome already has a node or not it is created if necessary. If the suffix already exists as a node the current node becomes that node. If it does not the node is created and will need to be linked in with its largest palindromic suffix. We find the fragment that when bracketed by the new character makes the longest palindromic suffix by traversing the suffix links.

Clear? No? Sorry.

I did my best to annotate the process with informative comments. The individual nodes added to the structure are indexed in an array, so we just need to traverse the list to extract the nodes and reconstruct the substrings from their stored start and end positions.

```perl
    package PNode;
    use Moo;

        has start       => ( is => 'rw' );
        has end         => ( is => 'rw' );
        has length      => ( is => 'rw' );
        has insert_link => ( is => 'rw',
                             default => sub {
                                return { map { $_, 0 } ('a'..'z') } } );
        has suffix_link => ( is => 'rw' );


    ### ### ### -- main body -- ### ### ###

    package main;
    my $input = shift // 'amanaplanacanalpanama';  ## <-- input here
    my @s = split //, $input;

    my $root1 = PNode->new( length => -1, suffix_link => 1 );
    my $root2 = PNode->new( length =>  0, suffix_link => 1 );

    our @tree = ( undef, $root1, $root2 );

    our $curr_node = 1;
    our $node_ptr  = 2;

    ## traverse the string and insert each character into the structure
    insert( $_ ) for keys @s;

    ## output
    say "all distinct palindromic substrings for ", @s, " : \n";
    for my $i (3..$node_ptr) {
        print  $i-2, ") ";
        say substr $input, $tree[$i]->start, $tree[$i]->length;
    }



    sub insert( $idx ) {
    ## FIND MAX PALINDROME AT $idx
        ## search for a node containing a substring such that the character at
        ## the current index plus the substring defined by the located node,
        ## plus the character again, is the maximum palindrome at idx:
        ## $s[$idx].X.$s[$idx] We iterate down the suffix link chain from
        ## $curr_node to find X
        my $tmp = $curr_node;
        while (1) {
            my $curr_length = $tree[$tmp]->length;
            last if ($idx - $curr_length >= 1 and $s[$idx] eq $s[$idx - $curr_length - 1]) ;
            $tmp = $tree[$tmp]->suffix_link;
        }

        ## check to see whether palindrome string $s[$idx].X.$s[$idx]
        ## already exists or not
        if( $tree[$tmp]->insert_link->{ $s[$idx] } != 0 ) {
            ## substring already exists in the tree
            $curr_node = $tree[$tmp]->insert_link->{ $s[$idx] };
            return;
        }


    ## ADD NEW NODE AS CHILD OF X:
        ## parent link to new node position, weight as $s[$idx]
        $tree[$tmp]->insert_link->{ $s[$idx] } = ++$node_ptr ;

        ## create new node: start, end, length of substring
        $tree[$node_ptr] = PNode->new(
            length  => $tree[$tmp]->length + 2 ,
            end     => $idx ,
            start   => $idx - ($tree[$tmp]->length + 2)  + 1 ,
        );


    ## SET SUFFIX EDGE FOR NEW NODE
        ## Find some string Y such that
        ## $s[$idx].Y.$s[$idx] is longest possible
        ## palindromic suffix for newly created Node.

        $tmp = $tree[$tmp]->suffix_link;

        ## making new Node as current Node
        $curr_node = $node_ptr;
        if ($tree[$curr_node]->length == 1) {
            ## if new palindrome's lengthgth is 1
            ## making its suffix link to be null string
            $tree[$curr_node]->suffix_link( 2 );
            return;
        }
        while (1) {
            my $curr_lengthgth = $tree[$tmp]->length;
            last if ($idx - $curr_lengthgth >= 1 and $s[$idx] eq $s[$idx-$curr_lengthgth-1]) ;
            $tmp = $tree[$tmp]->suffix_link;
        }

        ## linking current PNode suffix_link with $s[$idx].Y.$s[$idx]
        $tree[$curr_node]->suffix_link( $tree[$tmp]->insert_link->{ $s[$idx] } );
    }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/wlmb/perl/ch-2b.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 145 – W. Luis Mochán](https://wlmb.github.io/2021/12/27/PWC145/)

alternate solutions:

[ch-2.pl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/wlmb/perl/ch-2.pl)

[ch-2a.pl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/wlmb/perl/ch-2a.pl)

[ch-2b.pl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/wlmb/perl/ch-2b.pl)

Ok, let's try again:

Of all of the writeups on the eertree structure and algorithm from the team, in my opinion Luis [makes the most fleshed out, thorough examination](https://wlmb.github.io/2021/12/27/PWC145/) of the structure.

Luis sets up simple nested hashes for his nodes, not going through the bother to create specific objects. They act as nodes with three keys: `size`, `suffix` and `edges`, with the edges another nested hash with individual letter labels as keys.

Again the algorithm to construct the data structure has a single main driver, `add_letter()` that gets called on each letter proceeding left-to-tight across the input string. Stepwise, we get the next letter in the string, then set the current node by walking it backwards up its suffix chain until we find a palindrome with the new letter or the imaginary root node, which would make the new letter a one-letter palindrome. With the current node found the new letter is set as an edge for it, and the curent node is updated to this new palindrome.

A version stripping punctuation and diacritical marks is included, as well as a noteworthy solution implementing the `Object::Pad` experimental new object notation. I for one am quite excited about `Object::Pad` and have been following its development, as it is expected to form the basis of the `Corinna` re-envisioned object model.

```perl
    foreach(@ARGV){
        $imaginary_root  =  {size => -1, edges => {}};
        $root = {size => 0, edges => {}};
        $current = $root;
        $_->{suffix} = $imaginary_root foreach($root, $imaginary_root);
        @letters = grep {!/\s/} split '', lc $_; #ignore spaces and case
        foreach(0..@letters-1){
            add_letter($_);
        }
        my $output = [()];
        palindromes($imaginary_root->{edges}->{$_}, $_, $output)
            foreach keys $imaginary_root->{edges}->%*;
        palindromes($root, "", $output);
        say "Input: $_\nOutput: ", wrap("", "        ",
            join ", ", sort {length $a <=> length $b or $a cmp $b} $output->@*);
    }
    sub add_letter {
        my $index = shift;
        my $letter = $letters[$index];
        $current = $current->{suffix}
            while $index-$current->{size}-1<0
                || $letters[$index-$current->{size}-1] ne $letter;
        $current = $current->{edges}{$letter}, return
            if defined $current->{edges}{$letter};
        my $suffix = $current->{suffix};
        $current = $current->{edges}->{$letter}
             = {size => $current->{size}+2, edges => {}};
        $current->{suffix} = $root, return if $current->{size} == 1;
        $suffix = $suffix->{suffix}
            while $letters[$index-$suffix->{size}-1] ne $letter;
        $current->{suffix} = $suffix->{edges}->{$letter};
        return;
    }

    sub palindromes {
        my ($start, $center, $output) = @_;
        push @$output, $center if $center; # ignore the blank string of $root
        palindromes($start->{edges}->{$_}, $_.$center.$_, $output)
            foreach keys $start->{edges}->%*;
    }
```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/laurent-rosenfeld/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/laurent-rosenfeld/julia/ch-2.jl), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/laurent-rosenfeld/lua/ch-2.lua), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/laurent-rosenfeld/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/laurent-rosenfeld/raku/ch-2.raku), [Ring](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/laurent-rosenfeld/ring/ch-2.ring), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/laurent-rosenfeld/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/laurent-rosenfeld/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 145: Palindromes | laurent_r](http://blogs.perl.org/users/laurent_r/2021/12/perl-weekly-challenge-145-palindromes.html)

I suppose we should look at some more O(n<sup>2</sup>) solutions as there were quite a few of them. In his [writeup on the subject](http://blogs.perl.org/users/laurent_r/2021/12/perl-weekly-challenge-145-palindromes.html) Laurent starts with a quote from *The Art of Computer Programming*:

>**“premature optimization is the root of all evil (or at least most of it) in programming.”**<br>
— Donald Knuth

Quite apt, frankly. He also says he found the Medium article referenced to be "somewhat unclear and quite difficult to follow." I will not disagree. I will only add that in my opinion that was one of the clearer efforts. Having finally located the original paper, it seems most efforts cribbed straight from that, which was of course not clear to begin with. As it sometimes goes, everybody seems to be copying everybody else but not shedding a lot of new light.

Here Laurent looks at every start position in the string, then at every length of substring originating at that position, checking each for a palindromic nature. Successful candidates are hashed. This technique, as we saw before with Ian, is straightforward, compact and easy to follow. These qualities are virtues in themselves, and deserve to be factored in to programming decisions.

```perl
    sub find_all_palindromes {
        my $input = shift;
        print "$input: ";
        my %seen;
        my $str_length = length $input;
        for my $start (0..$str_length) {
            for my $length (1.. $str_length - $start) {
                my $candidate = substr $input, $start, $length;
                next unless is_palindrome $candidate;
                next if $seen{$candidate};
                $seen{$candidate} = 1;
                print "$candidate ";
            }
        }
        say " ";
    }
```

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/jaldhar-h-vyas/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/jaldhar-h-vyas/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 145](https://www.braincells.com/perl/2022/01/perl_weekly_challenge_week_145.html)

It is my opinion that the poor `reverse` function is the red-headed stepchild of the built-in Perl routines. Its misunderstood, maligned and found wanting at every turn, never allowed to fulfil its full potential.

At the risk of being tediously repetitive, I will reiterate that the `reverse` function works on both lists and strings, adapting its behavior to context. The problems arise with it not seemingly doing what you want when the *context* is not what it appears. When given a scalar string, it will reverse the order of the characters: "Hello" becomes "olleH" as one would expect a reverse string function to do. And its action is actually quite consistent in list context as well: when given a list, it reverses the order of the items in the list. In a scalar context it operates on one item made up of other items, a string made up of characters. In list context, it operates on one item made up of other items, a list composed of elements. Consistent with other Perl behavior if it's given multiple lists those are automatically first flattened into, again, a single entity. This one list is made up of elements, which have their order reversed in the same way as the characters in the string.

The problems arise when certain functions change context on us unexpectedly. If one assigns to a scalar variable:

```perl
    $str = reverse "Hello";
```

then `$str` becomes "olleH" as expected. But if one takes a shortcut and tries to print the result to output:

```perl
    say reverse "Hello";
```

we get back the unchanged string "Hello". The operation appears to have failed for no good reason.

But it hasn't, not at all. Context has been changed. When printing, `say` expects a *list*. So `reverse` notices `say` want a list and gives it one, the one-element list `("Hello")`, with its element order reversed. Which looks exactly the same as when it started.

The solution is the same as when we want to know the scalar count of elements in an array, rather than the list of actual element: we can always use `scalar` to force context. There's never any downside to being unnecessarily explicit.

Reading this I realize this could be taken as an excuse to start dropping f-bombs all day long, so let me clarify: being a little more wordy in Perl code than strictly required can often improve clarity with minimal extra effort. The code

```perl
    say scalar reverse "Hello";
```

does what we want. So yes, `reverse` does work on strings, and quite well. Any questions?

Good.

Now back to Jaldhar.

He chooses to keep an array to collect his palindromes. With every character, left-to-right, he immediately adds the letter to the result list if it isn't already there, because every single letter is a one-character palindrome. The computing the length from the position to the end ot the string he examines each substring of every distance shorter and shorter, checking each against a reversed version of itself to see it they are equal. Palindromes found are checked against the accumulated list and added if not already present.

```perl
    for my $i (0 .. length($s) - 1) {

        my $char = substr $s, $i, 1;
        if (!scalar grep { $_ eq $char; } @palindromes) {
            push @palindromes, $char;
        }

        my $distance = length($s) - $i;
        while ($distance > 1) {
            my $part = substr $s, $i, $distance;
            if (isPalindrome($part) && !scalar grep { $_ eq $part; } @palindromes) {
                push @palindromes, $part;
                last;
            } else {
                $distance--;
            }
        }
    }

    say join q{ }, @palindromes;

    sub isPalindrome {
        my ($word) = @_;
        return $word eq join q{}, reverse split //, $word;
    }


```

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/arne-sommer/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/arne-sommer/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Palin' Dot with Raku and Perl](https://raku-musings.com/palindot.html)

I feel we haven't looked at Arne's work in a while. I have no overt reason to believe this is actually true, as I take active steps to keep the selection randomized. But then again the whole point of real randomization is that statistically unusual events will sometimes occur. And being human, expectations will interfere with our perceptions on the matter.

Well that took an interesting turn, didn't it?

I guess it doesn't matter. Whether I'm imagining things or misremembering or perhaps we've just reached a statistical outlier let's have a look.

The successful strategy to find all internal palindromic substrings seems to be to look at each character position as potentially the start of one or more palindromes, so if we look at each possible length of substring following it we can be sure to find every one. From that point we only need a way to weed out duplicates if we only want unique values.

Arne follows this strategy with the now-familiar pattern of two loops. Candidate substrings that are found to be palindromes are placed in an array, and for our final report we apply the `uniq` function from `List::Util` to remove duplicates. The palindrome list is left in the order in which they are found, because frankly, no one asked us to sort them.


```perl
    my $length = length($s);

    for my $start (0 .. $length)
    {
      push(@result, substr($s, $start, 1));

      next if $start > $length -2;

      for my $stop ($start +1 .. $length -1)
      {
        my $candidate = substr($s, $start, $stop - $start +1);
        say ": [$start,$stop] $candidate" if $verbose;
        push(@result, $candidate) if reverse($candidate) eq $candidate;
      }
    }
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/dave-jacoby/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Products above Trees?: The Weekly Challenge #145 | Committed to Memory](https://jacoby.github.io/2021/12/27/products-above-trees-the-weekly-challenge-145.html)

One can't help but think we're getting a little repetitive here. Therefore Dave's alternate methodology for scanning substrings is welcome, and curiously brings us back on track too, back to our novel algorithm. To explain:

In Dave's method, we first isolate a unique list of letters from the target word, which will also remain in their original left-to-right ordering. Then looping across this list we find instances of a given letter, and with another loop we search for additional instances that will close a palindrome. If, as he notes, we work form the outside in we'll locate the largest palindrome and can short-circuit out at that point.

Wait, what? Are we sure about that? What if there's another shorter palindrome inside the larger? Ahh, well:

1. Yes we are sure.
2. The larger string is known to be a palindrome. If there exists a shorter palindrome within it, then that structure will need to be repeated, so that like letters repeat on the other side of the centerpoint.

What this means is that we will find any shorter palindrome from a later start point, and every second, shorter palindrome from a given start point must be repeated later, and will be found then. In fact, it will be the suffix of the larger palindrome.

Where have we come across that idea before? Oh right. Our eertree.


```perl
    my @letters = grep { $d{$_}++ < 1 } split //, $e;

    say $e;

    for my $i (@letters) {
        push @output, $i;
        my $len = length $e;
    LETTER: for my $x ( 0 .. $len ) {
            my $l = substr $e, $x, 1;
            next if $l ne $i;
            my $string = substr $e, $x;
            my $slen   = length $string;
            for my $y ( reverse 2 .. $slen ) {
                my $substr  = substr $string, 0, $y;
                my $reverse = reverse $substr;
                if ( $substr eq $reverse ) {
                    push @output, $substr;
                    next LETTER;
                }
            }
        }
    }
```



[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/e-choroba/perl/ch-2.pl)

Now that we've circled around, let's look at those eertrees again.

Choroba breaks his object structure down into two parts, built using the `Moo` framework. At the node level we have an `Eertree::Node` object with four attributes: `length`, `pos` — start position, the largest palindromic suffix `link`, and a hash of labeled edge connections `edge`. To hold a collection of these nodes in an eertree, these is an `Eertree` object as well, holding the data structure. The object knows how to build its node collection, using a single `add` method on each successive character in the input string.

Also included is a method `to_dot()`, which will describe the internal graph in .dot formatting, viewable using [GraphViz](https://graphviz.org) software. Which is a nice touch for this unusual data structure.

```perl
    {   package Eertree::Node;
        use Moo;

        has length => (is => 'ro',  required => 1);
        has pos    => (is => 'rwp', required => 1);
        has link   => (is => 'rw');
        has edge   => (is => 'lazy', builder => sub { {} }, predicate => 1);

        sub string {
            my ($self, $eertree) = @_;
            return substr $eertree->string, $self->pos, $self->length
        }
    }

    {   package Eertree;
        use Moo;

        has nodes => (is => 'ro', default => sub { [
            'Eertree::Node'->new(link => 0, length => -1, pos => -1),
            'Eertree::Node'->new(link => 0, length =>  0, pos =>  0)
        ]});
        has string => (is => 'ro');
        has max    => (is => 'rw', default => 0);

        sub node {
            my ($self, $index) = @_;
            return $self->nodes->[$index]
        }

        sub at {
            my ($self, $pos) = @_;
            return substr $self->string, $pos, 1
        }

        sub build {
            my ($self) = @_;
            my $i = 0;
            $self->add($i++, $_) for split //, $self->string;
        }

        sub Push {
            my ($self, $node) = @_;
            push @{ $self->nodes }, $node;
        }

        sub Last { $#{ $_[0]->nodes } }

        sub add {
            my ($self, $index, $char) = @_;

            my $new_node;
            my $p = $self->max;
            while ($self->node($p)) {
                my $node = $self->node($p);
                my $pos = $node->length == -1
                        ? $index
                        : $index - $node->length - 1;
                if ($pos >= 0 && $self->at($pos) eq $char) {
                    if (exists $node->edge->{$char}) {
                        $new_node = $self->node($node->edge->{$char});
                        $self->max($node->edge->{$char});
                        return
                    }
                    $new_node = 'Eertree::Node'->new(pos    => $pos,
                                                     length => $index - $pos + 1);
                    $node->edge->{$char} = $self->Last + 1;
                    last
                }
                $p = $node->link;
            }

            $self->Push($new_node);
            $self->max($self->Last);

            if ($new_node->length == 1) {
                $new_node->link(1);
                return
            }

            my $q = $self->node($p)->link;
            while ($self->node($p)) {
                my $pos = $self->node($q)->length == -1
                        ? $index
                        : $index - $self->node($q)->length - 1;
                if ($pos >= 0 && $self->at($pos) eq $char) {
                    $new_node->link($self->node($q)->edge->{$char});
                    last
                }
                $q = $self->node($q)->link;
            }
        }
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC145 - Palindromic Tree - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/12/30/pwc145-palindromic-tree/)

To tell the truth, hearing other people complain (or "rant" as the case may be) about the available explanations of this technique gives me some solace. I kind of thought I was just me being obtuse. Apparently my plight and frustrations were to some degree shared by others.

Flavio makes a couple of changes to cut through the general noisiness surrounding the algorithm with a few welcome alterations. First, a simple act of renaming the edges using different frames of reference: the "longest suffix palindrome" is really the *prefix* to the latest letter that makes a palindrome from the parts we've already digested. He still uses the `suffixes` terminology, but only for the complete suffix constructed: the new letter and the prefix. The labeled edge links become `expansion_for`, which establishes the relationship that this node string can be expanded by say the letter "e" to form another palindrome.

I think this is arguably a little clearer. There's something about the language used to describe the linkages that could use improvement.

Lastly, Flavio also, like Choroba, provides a dot format output method for the final structure. For me, after installing `graphviz`, the command `dot -Tpng eertree.dot -o eertree.png` will render this description as a png drawing to study. Cool.

```perl
    package EertreE;
    use v5.24;
    use warnings;
    use experimental 'signatures';
    no warnings 'experimental::signatures';

    sub new ($package, $string) {
       my @suffixes = (
          {            length => -1, pred => 0 },
          {start => 0, length => 0,  pred => 0 },
       );

       for my $i (0 .. length($string) - 1) {
          my $c = substr $string, $i, 1;

          # find longest suffix Q such that cQc exists
          my $Q = $suffixes[-1];
          while ($Q->{length} >= 0) {
             my $j = $i - $Q->{length} - 1; # "mirror" of $i
             last if $j >= 0 && $c eq substr $string, $j, 1;
             $Q = $suffixes[$Q->{pred}];
          }

          next if exists $Q->{expansion_for}{$c};

          # adding a node as an expansion from $Q
          push @suffixes, {
             start  => $i - $Q->{length} - 1,
             length => $Q->{length} + 2,
             pred   => 1, # this is just an educated guess default
          };
          $Q->{expansion_for}{$c} = $#suffixes;
          next if $Q->{length} < 0; # solitary, no further search needed

          $Q = $suffixes[$Q->{pred}]; # start from the previous one
          while ($Q->{length} >= 0) {
             my $j = $i - $Q->{length} - 1; # "mirror" of $i
             last if $j >= 0 && $c eq substr $string, $j, 1;
             $Q = $suffixes[$Q->{pred}];
          }
          $suffixes[-1]{pred} = $Q->{expansion_for}{$c};
       }

       return bless {
          string => $string,
          suffixes => \@suffixes,
       }, $package;
    }
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/roger-bell-west/kotlin/ch-2.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/roger-bell-west/lua/ch-2.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/roger-bell-west/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/roger-bell-west/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 145: Tree Product](https://blog.firedrake.org/archive/2021/12/The_Weekly_Challenge_145__Tree_Product.html)

One of the things about the eertree data-structure and its attendant algorithm is that we always seem to be walking the suffix link paths to find the largest palindrome suffix. That's sort of the basic action. When we add a letter we search for the new suffix palindrome, and if this turns out to require a new node we do it again.

Roger breaks this process out into its own subroutine, `get_max_suffix_pal()` which does make this pattern easier to understand.

Looking at this algorithm now five different ways I feel we've broken some ground on better ways to present it, as each approach brings with it little pieces of the puzzle. I found [Rubinchik's original paper](https://arxiv.org/pdf/1506.04862.pdf) to be admirably rigorous in exposition but rather lacking in explanation, and hence cryptic if not quite impenetrable. Most of the commentary I've found on the subject seems to paraphrase if not parrot the original work, so that doesn't help us; in fact the repeated inscrutability of these low-effort attempts really works as a detriment to understanding.

It's not likely, in the long run, that this algorithm will have any great impact on the world, but that does not leave it without any merit at all. Quite the opposite — it introduces a new way to think about a familiar concept, and that's always a good thing.


```perl
    sub get_max_suffix_pal {
      my $self=shift;
      my $startnode=shift;
      my $a=shift;
      my $u=$startnode;
      my $i=scalar @{$self->{S}};
      my $k=$u->{len};
      while ($u->{id} ne 'rto' && $self->{S}[$i-$k-1] ne $a) {
        if ($u->{id} eq $u->{link}{id}) {
          last;
        }
        $u=$u->{link};
        $k=$u->{len};
      }
      return $u;
    }

    sub add {
      my $self=shift;
      my $a=shift;
      my $q=$self->get_max_suffix_pal($self->{maxSufT},$a);
      my $newnode=!(exists $q->{edges}{$a});
      if ($newnode) {
        my $p=Local::Eernode->new();
        push @{$self->{nodes}},$p;
        $p->{len}=$q->{len}+2;
        if ($p->{len}==1) {
          $p->{link}=$self->{rte};
        } else {
          $p->{link}=$self->get_max_suffix_pal($q->{link},$a)->{edges}{$a} or die "bad link";
        }
        $q->{edges}{$a}=$p;
        $self->{maxSufT}=$q->{edges}{$a};
        push @{$self->{S}},$a;
      }
      return $newnode;
    }
```

The last remaining question is: who's solution should we put up on the Rosetta Code wiki?

Advisement appreciated, or simply rise to the occasion. It's a wiki, not a spectator sport.


## Blogs and Additional Submissions in Guest Languages for Task 2:


[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/abigail/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/abigail/awk/ch-2.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/abigail/bash/ch-2.sh), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/abigail/c/ch-2.c), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/abigail/go/ch-2.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/abigail/java/ch-2.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/abigail/lua/ch-2.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/abigail/node/ch-2.js), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/abigail/pascal/ch-2.p), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/abigail/python/ch-2.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/abigail/r/ch-2.r), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/abigail/ruby/ch-2.rb), [Scheme](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/abigail/scheme/ch-2.scm), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/abigail/tcl/ch-2.tcl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 145: Palindromic Tree](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-145-2.html)


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/james-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #145](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-145/james-smith#readme)


[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/paulo-custodio/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/paulo-custodio/python/ch-2.py)


[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/peter-campbell-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[How to find palindromes quickly](https://pjcs-pwc.blogspot.com/2021/12/how-to-find-palindromes-quickly.html)


[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/sgreen/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/sgreen/python/ch-2.py)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 145](https://dev.to/simongreennet/weekly-challenge-145-4kho)


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/ulrich-rieke/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/ulrich-rieke/cpp/ch-2.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/ulrich-rieke/haskell/ch-2.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-145/ulrich-rieke/raku/ch-2.raku)







---

# BLOGS {#PWC145BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, by some miracle I somehow continue to maintain my bearings.**

**Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your Unquenchable *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC136BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *FOLLOW* these *BLOG* *LINKS*:

**( ...*don't think, trust your training, you're in the zone, just do it ...* )**


**Abigail**

 * [Perl Weekly Challenge 145: Dot Product](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-145-1.html) ( *Perl* )
 * [Perl Weekly Challenge 145: Palindromic Tree](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-145-2.html) ( *Perl* )

**Arne Sommer**

 * [Palin' Dot with Raku and Perl](https://raku-musings.com/palindot.html) ( *Perl & Raku* )

**Dave Jacoby**

 * [Products above Trees?: The Weekly Challenge #145 | Committed to Memory](https://jacoby.github.io/2021/12/27/products-above-trees-the-weekly-challenge-145.html) ( *Perl* )

**Flavio Poletti**

 * [PWC145 - Dot Product - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/12/29/pwc145-dot-product/) ( *Perl & Raku* )
 * [PWC145 - Palindromic Tree - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/12/30/pwc145-palindromic-tree/) ( *Perl & Raku* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 145](https://www.braincells.com/perl/2022/01/perl_weekly_challenge_week_145.html) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #145](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-145/james-smith#readme) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 145: Dot Product | laurent_r](http://blogs.perl.org/users/laurent_r/2021/12/perl-weekly-challenge-145-dot-product.html) ( *Perl & Raku* )
 * [Perl Weekly Challenge 145: Palindromes | laurent_r](http://blogs.perl.org/users/laurent_r/2021/12/perl-weekly-challenge-145-palindromes.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 145: the last challenge of the year! – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2021/12/29/PerlWeeklyChallenge145.html#task1) ( *Raku* )

**Mark Senn**

 * [Dot Product](https://engineering.purdue.edu/~mark/twc-145-1.pdf) ( *Raku* )

**Peter Campbell Smith**

 * [How to find palindromes quickly](https://pjcs-pwc.blogspot.com/2021/12/how-to-find-palindromes-quickly.html) ( *Perl* )

**Roger Bell_West**

 * [RogerBW's Blog: The Weekly Challenge 145: Tree Product](https://blog.firedrake.org/archive/2021/12/The_Weekly_Challenge_145__Tree_Product.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 145](https://dev.to/simongreennet/weekly-challenge-145-4kho) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 145 – W. Luis Mochán](https://wlmb.github.io/2021/12/27/PWC145/) ( *Perl* )
