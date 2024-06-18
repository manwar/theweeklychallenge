---
author:       Colin Crain
date:         2021-12-20T00:00:00
description:  "Colin Crain › Perl Weekly Review #139"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #139"
image:        images/blog/p5-review-challenge-139.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-138/).* )

Welcome to the Perl review pages for **Week 139** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-139/) or the summary [**recap**](/blog/recap-challenge-139/) of the challenge. But don't worry, the challenges themselves are repeated and presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please feel free to email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC139TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC139TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC139BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC139TASK1}

# JortSort
*Submitted by: Mohammad S Anwar*

You are given a list of numbers.

Write a script to implement JortSort. It should return true/false depending if the given list of numbers are already sorted.

**Example 1:**
```
    Input: @n = (1,2,3,4,5)
    Output: 1

    Since the array is sorted, it prints 1.
```
**Example 2:**
```
    Input: @n = (1,3,2,4,5)
    Output: 0

    Since the array is NOT sorted, it prints 0.
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/abigail/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/adam-russell/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/athanasius/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/colin-crain/perl/ch-1.pl),
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/cristian-heredia/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/polettix/perl/ch-1.pl),
[**Jake**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/jake/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/jaldhar-h-vyas/perl/ch-1.sh),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/jo-37/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/lubos-kolouch/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/mattneleigh/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/perlboy1967/perl/ch-1.pl),
[**Olivier Delouya**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/olivier-delouya/perl/ch-1.sh),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/paulo-custodio/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/pete-houston/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/peter-campbell-smith/perl/ch-1.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/robert-dicicco/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/sgreen/perl/ch-1.pl),
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/steven-wilson/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/ulrich-rieke/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/wlmb/perl/ch-1.pl)

"JortSort" — beyond its obvious rhyming appeal — is, not to mince words, ridiculous. Its purpose is perhaps not altogether obvious, but it exists as a sort function to process ostensibly sorted data. As the input data is purportedly already sorted, the sort function implemented does not visibly sort the data, but rather serves a validation check that the data is, in fact, sorted. If the check fails, then the application can presumably kick the unsorted list back to the user to be sorted and then resubmitted.

This, on the face of it, is not absurd, as input validation checks are part and parcel of the programming world, to make sure we haven't somehow unpredictably strayed outside operating parameters. I mean, really this is all well and good, when you frame it that way. The ridiculous part enters along two fronts: one, it isn't framed that way, but rather as an optimal sorting algorithm that is efficient by definition as it ensures the input is sorted already, externally by the user. Hence *it* is efficient. But to really drive the drive the absurdity home, get invited in for a nightcap, get drunk until all hours together and then take advantage of the situation, the function in its original javascript performs its sorting validation by... wait for it... sorting the input and doing an element-by-element comparison of the two datasets.

Jenn Schiffer, I take my hat off to you. It isn't merely ridiculous. It's preposterous. It's an affront to all that is good and decent in the world.

There were 29 submissions for the first task, to implement this monstrosity.

## A FLURRY of SCHEMES to DEFLECT RESPONSIBILITY
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/abigail/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/athanasius/perl/ch-1.pl), and
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/duncan-c-white/perl/ch-1.pl)
[**Jake**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/jake/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/jo-37/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/perlboy1967/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/mattneleigh/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/ulrich-rieke/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/roger-bell-west/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/colin-crain/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/peter-campbell-smith/perl/ch-1.pl), and
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/cristian-heredia/perl/ch-1.pl)

In essence the `jortsort` function is a sorting validation on an input array. It also serves a perhaps more important purpose as a derisive joke, with a healthy dose of snark if not outright cruelty added. The various interpretations on what to do and the resultant methods presented landed each somewhere between these two extremes.

On the subject of failure modes: as always when a challenge seems particularly easy there follows an uptick in simple errors made, as people hurry through, get reckless and forgetful. The principle culprit this time being that the Perl `sort` function defaults to a *string* sort, where the list 1, 10, 2, 3, 4 will be viewed as correctly, lexicographically sorted. Yea, it's the ones you never see that get you, and that happens when you let your guard down. When I walk in my city I don't care what the lights say — I'm going to look and wait until I see the car *slowing down* with my own eyes before I step off the curb. Just sayin'. Mindfullness is a good thing.

One could argue a reasonable distrust in other people doing what is expected of them matches up well with the ideas behind producing `jortsort` in the first place. But I don't want to put words in the author's mouth. Perhaps she just hates people.

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/abigail/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/abigail/awk/ch-1.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/abigail/bash/ch-1.sh), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/abigail/bc/ch-1.bc), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/abigail/c/ch-1.c), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/abigail/go/ch-1.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/abigail/java/ch-1.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/abigail/lua/ch-1.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/abigail/node/ch-1.js), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/abigail/pascal/ch-1.p), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/abigail/python/ch-1.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/abigail/r/ch-1.r), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/abigail/ruby/ch-1.rb), [Scheme](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/abigail/scheme/ch-1.scm), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/abigail/tcl/ch-1.tcl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 139: JortSort](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-139-1.html)

&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 139: Long Primes](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-139-2.html)

To start we will look at Abigail's submission. When planning a solution, looking at the [jortsort website](https://jort.technology) it is not immediately obvious what we are being asked to provide here: Are we to carefully port the javascript? Or alternately, if not do we mimic the performance or in some less-clear manner the *spirt* of the jortsort? Put another way if the function is absurd, is the meaning of the function the action or the absurdity itself?

Abigail sidesteps the possible ethical considerations here and takes a literal analysis of implementing what the original code *does* as their guide. And what the function does, at its core, is provide and up/down input validation on an array.

I sympathize with an unwillingness to sort an array just so you can tell the user their array is unsorted, and the *not share the sorted result*. It's just spiteful to be honest. So instead we look at successive elements in the data, and if any element is less than the previously examined value we fail the check. This is of course the correct and kind way to do things, and it's good that we should start with a clear example of kindness. The world, you may have noticed, needs all the help we can give it.


```perl
    while (<>) {
        my @list = /[0-9]+/g;
        say grep ({$list [$_ - 1] > $list [$_]} 1 .. $#list) ? 0 : 1
    }
```

On the other hand I don't believe that's really what the original author had in mind.

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/athanasius/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/athanasius/raku/ch-1.raku)

The monk also eschews the complexity entailed in doing the job *wrong*, giving us another example of simply verifying that the list elements are in fact in equal or ascending order. But not before unearthing a note from the [Rosetta Code](https://rosettacode.org/wiki/JortSort) website on porting the original:

>"Note: jortSort is considered a work of satire. It achieves its result in an intentionally roundabout way. You are encouraged to write your solutions in the spirit of the original jortsort rather than trying to give the most concise or idiomatic solution."

That said, they chose to ignore the advice.


```perl
    MAIN:
    {
        my @n = parse_command_line();

        printf "Input:  \@n = (%s)\n", join ', ', @n;

        my $sorted = 1;

        for my $i (1 .. $#n)
        {
            if ($n[ $i ] < $n[ $i - 1 ])
            {
                $sorted = 0;
                last;
            }
        }

        print "Output: $sorted\n";
    }
```

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/duncan-c-white/perl/ch-1.pl)

It seems that making a short and simple check on the correct ordering of the input is truly winning the day. Here Duncan brings in `Function::Parameters` to provide subroutine signatures, and checks each array element against the one following to make sure it is in increasing order.

```perl
    use Function::Parameters;

    fun issorted( @a )
    {
        foreach my $i (0..$#a-1)
        {
        	return 0 if $a[$i] > $a[$i+1];
        }
        return 1;
    }


    my @x = @ARGV;
    my $issorted = issorted( @x );
    say $issorted;
```

[**Jake**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/jake/perl/ch-1.pl)

New member Jake, finally, provides an alternate interpretation of the problem, noting that "sorted" can be looked at two ways: either ascending or descending. This is a good point — it was never specifically stated *how* the sort should order the results, only that they should be ordered. I'm not even sure it's made clear anywhere that we're dealing with numbers at all. In most languages this would be implicit, as one cannot causally cross-over between numbers and strings, and typing will generally constrain the input even further.

But Perl doesn't for the most part care about types, taking a decidedly minimalist approach, although with this we introduce some gotchas, such as the aforementioned behavior of the built-in `sort`: defaulting to alphanumeric with 10 following 1, as a 1 with a sufix, yet placed before 2. Thus we generally require an explicit specifier block, such as `{ $a <=> $b }` to indicate an ascending numeric sort.

To allow for either ascending or descending sorts, Jake needs to first determine the direction of flow, after which all further elements must follow the same pattern.

```perl
    # shift list if it begins with duplicates.
    # this is necessary because the first difference in a list determines, if it is an increasing or decreasing list.
    # the check_sorting subroutine depends on this discrimination
    # if the first difference is 0, this discrimination cannot take place
    my $initial_element = $input_list[0];
    while ( $list_length > 1 && $initial_element eq $input_list[1] ) {
        shift ( @input_list );
    }

    my $initial_difference = $input_list[1] - $initial_element;
    printf ( "%i\n", check_sorting ( $initial_element, @input_list, $initial_difference ) );

    sub check_sorting {
        my $length_leftover = @input_list;
        # if there is only one element left in the list, and the subroutine is called again, the list is sorted
        return 1 if ( $length_leftover < 2);

        # if the initial difference is negative, any subsequent difference must not be larger than that
        if ( $initial_difference < 0 && $input_list[1] - $initial_element > $initial_difference ) {
            return 0;
        }
        # if the initial difference is positive, any subsequent difference must not be smaller than that
        if ( $initial_difference >= 0 && $input_list[1] - $initial_element < $initial_difference ) {
            return 0;
        }
        else {
            shift ( @input_list );
            check_sorting ( @input_list );
        }
    }
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/jo-37/perl/ch-1.pl)

Apparently there is not a `jortsort()` function among the hundreds implemented in the `Math::Prime::Util` module, nor for that matter anywhere else on CPAN, which slightly restores my faith in humanity. Although on that front, unfortunately, we still have a long way to go. But I do keep trying; this is our lot in life.

However Jorg does bring us a nice little trick in search of brevity, opting to `die` to make a hasty exit on finding the first sorting error. The array elements are scanned using `reduce` from the core `List::Util` module.

This does to me introduce a question of functional best practices: does death qualify as a side-effect in the applied block? Does the enclosing `eval` negate that consideration, as the encapsulation completely isolates any effects? It's a weird case and I'm unsure how to think about it. In any case when negating the error variable set by the `eval` we produce our expected 1/0 output.

```perl
    use List::Util qw(reduce);

    # Check if the given array is sorted.  Using "die" as a fast-track exit
    # from "reduce" at the first number pair that is found to be out of
    # order.
    sub jortsort ($arr) {
        eval {reduce {die if $b < $a; $b} @$arr};
        !$@;
    }
```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/perlboy1967/perl/ch-1.pl)

Choosing a different tool to scan the list pairwise between adjacent elements, Niels brings us the rather-new `slide()` addition to the `List::MoreUtils` module. This, as the author describes it, is like using a magnifying glass to look across a list, examining first the first and second elements together, then the second and third, third and forth et cetera. It's something I have occasionally wished existed through the years and now here it is.

The `slide()` function transforms the list into an array of differences between adjacent elements; if any of these deltas are less than 0 we have a sort failure.

```perl
    use List::MoreUtils qw(none slide);

    sub jortSort(@) {
      no warnings 'once';
      none{$_<0}(slide{$b-$a}@_);
    }
```

[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/mattneleigh/perl/ch-1.pl)

Matthew returns us to more familiar territory, with a nicely annotated example of checking the difference between each element and the one following.

```perl
    ################################################################################
    # Perform the Jort Sort on an array of numbers
    # Takes one argument:
    # * A list of numbers to examine
    # Returns:
    # * 1 if the list is sorted in ascending order
    # * 0 if the list is NOT sorted in ascending order
    ################################################################################
    sub jort_sort{

        my $i = $#ARG;

        # For n members in the list, loop
        # n-1 times
        while($i--){
            # If any member of the list is larger
            # than the following member, return
            # zero.
            return(0) if($ARG[$i] > $ARG[$i + 1]);
        }

        # Made it through the list- must have
        # been sorted
        return(1);

    }
```

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/ulrich-rieke/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/ulrich-rieke/cpp/ch-1.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/ulrich-rieke/haskell/ch-1.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/ulrich-rieke/raku/ch-1.raku)

Finally Ulrich delivers us with a "proper" implementation of the `jortsort`, integral inefficiencies and all. Done in the correct, annoying style we sort the list and use the sorted list to determine whether the input is sorted. The application, on finding a negative result from the `jortsort` check would then demand the user to sort the input and resubmit it before taking further action.

Words like "bureaucratic" and "obstinate" come to mind, as well as some stronger, less-polite language. But that is true to the original implementation, so it's good to have an example.

We do introduce a very Perlish technique, though, as we `join` each array to create a composite string, and then use the string equality operator `eq` to compare them.

```perl
    my @numbers = split( /\s/ , $line ) ;
    my @sorted = sort { $a <=> $b } @numbers ;
    if ( join( ' ' , @sorted ) eq join( ' ' , @numbers ) ) {
      say "1" ;
    }
    else {
      say "0" ;
    }
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: Perl Weekly Challenge 139: Jort Primes](https://blog.firedrake.org/archive/2021/11/Perl_Weekly_Challenge_139__Jort_Primes.html)

Roger can generally be relied on to produce compact, efficient solutions and this is another fine example. Note the function takes a reference to an array.

```perl
    sub jortsort {
      my $a=shift;
      foreach my $i (1..$#{$a}) {
        if ($a->[$i-1] > $a->[$i]) {
          return 0;
        }
      }
      return 1;
    }
```

[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/colin-crain/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/colin-crain/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[That's a Long Jort to Sort - Programming Excursions in Perl and Raku](https://colincrain.com/2021/11/22/thats-a-long-jort-to-sort/)

Most of the examples we have seen today have eschewed the intrinsically ridiculous aspect of creating the `jortsort` routine in the first place, focusing instead of actually implementing the thing in an efficient manner.

In deciding what to do for this particular challenge, I tried to look beyond what the function actually does and explore why the author felt it needed to be created — in order to figure out what role it might play in the universe. From that study I concluded that the author simply hates their users, which from a web-application-developer standpoint is an understandable position. I may not agree with it, but I can certainly see where they're coming from.

With that in mind, I took a decidedly different course in my own `jortsort()` implementation. If the goal is to inconvenience and annoy, then that is what they shall have. In our implementation we'll expand on these base themes however we can.

First off in implementation the original sorts the input, however I see no reason to do this. But not for the usual reason, efficiency, but rather because we are *lazy* and can't be bothered to go through all that extra effort. If asked, we can always lie and say we did; instead we check to make sure no element is less than its predecessor. Remember, this implementation is foremost about *us*, and not *them*. On the other hand the original documentation makes note that theoretically a sort can take forever, and so as the given algorithm includes a sort function, we should model this behavior along with the rest. Therefore our Perl `jortsort()` will randomly take a nap for a while and get some rest without warning, simulating a worst-case sort scenario.

Furthermore, the intent here is to let the user know in no uncertain terms that they have not provided what has been expected of them. I feel a simple up/down verification does not properly do this idea justice and leaves room for ambiguous interpretation of what exactly happened. Therefore in the new, improved `jortsort()` function we return a descriptive eror string helping the user to understand the nature of the problem. Which is to say the user. The user is the problem. We decided that before we started.

Because we return an error string on failure we respond with a 0 on success. This inversion happens often enough on returning the exit status of an application, however is completely annoying and confusing if it is not expected. This surprising and annoying behavior slots right in with the rest of the the function, so it stays as-is.

```perl
    my @arr = @ARGV;

    ## see if the next element is ever less than the previous
    my $prev = shift @arr;
    my $next;

    while (@arr) {
        $next  = shift @arr;
        complain_and_quit() if ($prev cmp $next) > -1 ;
        $prev = $next;
    }

    ## simulated worst-case scenario
    sleep rand 100 unless int rand 3;

    ## exit status 0 for no error
    say 0;



    sub complain_and_quit {
        my @abuse = (
            "This is not what we discussed. Sort it again.",
            "Skipped kindergarden, did we? Re-sort this literal bit-garbage.",
            "Come back when and after you've sorted the array. I don't care how, just do it.",
            "I am not paid enough to sort your data for you. Find someone who cares.",
            "You said it would be sorted. Obviously you cannot be trusted.",
            "You call this sorted? You are stupid and worthless, human.",
            "I need to perform a malware disinfectant scan after handling your data. Come back when it's sorted and wait until I am finished.",
            "You need to be better. I now hate you, meat-machine.",
            "I. Just. Can't. Even. \nNo, just no.",
            "Is my time worthless to you? Am I your servant now? Sort your own lists.",
            "An ordered list is the sign of an ordered mind. You have neither."

        );

        say $abuse[ int rand @abuse ];
        exit;
    }
```

[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/peter-campbell-smith/perl/ch-1.pl)

To finish up we'll review with a pair of examples, each serving a an archetypical form for the two approaches. First, we have Peter, showing us how in examining the input array element-by-element, we can verify that the array is sorted by making sure it isn't *not* sorted. We do this by looking to see if any element is out-of-order, that is: Is it less than the previous element?

Should we find a single out-of-order element we know the result at that point and can stop further iteration.

```perl
    for $list (@$lists) {
        say 'Input:  ' . join(', ', @$list);

        # assume good until proved otherwise
        $result = 1;
        $prev = $list->[0];
        for $this (@$list) {
        	$result = $this < $prev ? 0 : 1;
        	last unless $result;   # no need to check the rest of the list
        	$prev = $this;
        }
        say "Output: $result\n";
    }
```

[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/cristian-heredia/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/cristian-heredia/python/ch-1.py)

And finally, Christina provides us with a compact and succint version of the original algorithm, with the fundamental joke intact: we sort to see whether the list is sorted, and if it isn't, we send the message back to the user to sort it and try again. The last part, directly dealing with the user, is to be provided by the web application this is designed for; here we will only be returning a true/false value for the check.

```perl
    my @sortN =  sort { $a <=> $b } @n;

    for (my $i =0; $i<@n;$i++){
        if ($n[$i]!= $sortN[$i]){
            print("0\n");
            exit;
        }
    }
    print("1\n");
```




## Blogs and Additional Submissions in Guest Languages for Task 1:


[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/adam-russell/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/adam-russell/prolog/ch-1.p)


&nbsp;&nbsp;**blog writeup:**
[Jort Sort the First Five Long Primes — Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2021/11/21/perl/)

&nbsp;&nbsp;**blog writeup:**
[Jort Sort the First Five Long Primes — Prolog — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2021/11/21/prolog/)


[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/dave-jacoby/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[It’s The Mullet Of Algorithms!: The Weekly Challenge #139 | Committed to Memory](https://jacoby.github.io/2021/11/15/its-the-mullet-of-algorithms-the-weekly-challenge-139.html)


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC139 - JortSort - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/11/17/pwc139-jortsort/)

&nbsp;&nbsp;**blog writeup:**
[PWC139 - Long Primes - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/11/18/pwc139-long-primes/)


[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/jaldhar-h-vyas/perl/ch-1.sh)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/jaldhar-h-vyas/raku/ch-1.sh)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 139](https://www.braincells.com/perl/2021/11/perl_weekly_challenge_week_139.html)


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/james-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Sign in to GitHub · GitHub](https://github.com/drbaggy/perlweeklychallenge-club/new/master/challenge-139/james-smith)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/laurent-rosenfeld/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 139: JortSort and Long Primes](http://blogs.perl.org/users/laurent_r/2021/11/perl-weekly-challenge-139-jortsort-and-long-primes.html)


[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/lubos-kolouch/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/lubos-kolouch/python/ch-1.py)


[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/mohammad-anwar/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/mohammad-anwar/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/mohammad-anwar/raku/ch-1.raku), [Swift](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/mohammad-anwar/swift/ch-1.swift)


[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/paulo-custodio/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/paulo-custodio/python/ch-1.py)


[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/sgreen/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/sgreen/python/ch-1.py)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 139](https://dev.to/simongreennet/weekly-challenge-139-2ja1)


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/wlmb/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 139 – W. Luis Mochán](https://wlmb.github.io/2021/11/16/PWC139/)









------------------------------------------





---

# TASK 2 {#PWC139TASK2}

# Long Primes
*Submitted by: Mohammad S Anwar*

Write a script to generate first 5 Long Primes.

A prime number (p) is called Long Prime if (1/p) has an infinite decimal expansion repeating every (p-1) digits.

**Example**
```
    7 is a long prime since 1/7 = 0.142857142857...
    The repeating part (142857) size is 6 i.e. one less than the prime number 7.

    Also 17 is a long prime since 1/17 = 0.05882352941176470588235294117647...
    The repeating part (0588235294117647) size is 16 i.e. one less than the prime number 17.

    Another example, 2 is not a long prime as 1/2 = 0.5.
    There is no repeating part in this case.
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/abigail/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/adam-russell/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/athanasius/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/jo-37/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/laurent-rosenfeld/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/lubos-kolouch/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/mattneleigh/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/perlboy1967/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/paulo-custodio/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/pete-houston/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/peter-campbell-smith/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/sgreen/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/ulrich-rieke/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/wlmb/perl/ch-2.pl)

I first noticed the long prime phenomenon back in [PWC106](https://theweeklychallenge.org/blog/perl-weekly-challenge-106/#TASK2), when we were tasked to examine repeated decimals in general fractions and properly notate them in parentheses. In looking through the results it became apparent that some reptends were quite long, coming in at a length one less than the value of the denominator. These values, which are all prime, are known as [full reptend primes](https://en.wikipedia.org/wiki/Full_reptend_prime), or long primes. This is what we are asked to produce today.



There were 23 submissions for this second task.


## MYRIAD SCINTILLATIONS from a CRYSTAL CHANDELIER
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/e-choroba/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/wlmb/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/adam-russell/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/jaldhar-h-vyas/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/laurent-rosenfeld/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/dave-jacoby/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/paulo-custodio/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/cheok-yin-fung/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/james-smith/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/polettix/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/sgreen/perl/ch-2.pl), and
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/lubos-kolouch/perl/ch-2.pl)


At the core of creating the decimal expansion for a fraction is a long division algorithm, calculating the quotient one digit at a time in order to avoid the imperfections of floating-point arithmetic from throwing off the repetition. Implementing some version of a paper-and-pencil algorithm allows us to sidestep any issues and calculate our results to arbitrary precision. Precision is vital here, that no digits get rounded or skewed. If an explicit long-division algorithm wasn't used, some sort of arbitrary-precision solution, presumably using long-division internally in some form at its core, needed to be imported.

Creating a list of prime numbers was also a common and obvious step but this was not strictly speaking necessary; as it turns out non-prime inverses work out to either short decimals or simple reptends, so incrementing upwards and computing *all* the numbers starting, say, at 3 is a pretty viable technique, saving on factoring costs what is wasted on processing extra values. I thought it a good plan but acknowledge it's a tradeoff. This approach wasn't very common.

Optimizing the other way if we do create a list of primes we can simply check the length of the reptend and short-circuit out if it repeats too quickly. The reptend can't, for mathematical reasons, be *longer* than the value; the long primes represent a worst-case scenario for the repeating length. We'll touch on this reasoning in a bit.

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/e-choroba/perl/ch-2.pl)

Choroba starts us off today with a prime generation routine, which returns an iterator function that in turn returns the next sequential prime number each time it is called. This in itself is noteworthy and worth a look, but of course that doesn't alone satisfy the task requirements.

To determine whether a prime is a long prime a long division algorithm is set up, and at each pass the remainder is stored in a hash key and its value incremented. A further clever use is made here of Perl's *post*-increment `++` function, which allows the high-precedence check on the value of `$seen{$p}` to occur first, before its value is bumped upwards with `$seen{$p}++`. The first assignment will thus fail to return, but subsequent occurrences will cause the ternary operation to be evaluated, comparing the total length of the inverted number string against the value of the prime. This should be *p*-1, but we add two characters for the '0.' prefix.

```perl
    sub prime_generator {
        my @primes;
        return sub {
            if (! @primes) {
                @primes = (2);
                return 2
            } elsif (1 == @primes) {
                push @primes, 3;
                return 3
            }

            my $candidate = $primes[-1];
          CANDIDATE:
            while (1) {
                $candidate += 2;
                for my $p (@primes) {
                    next CANDIDATE if 0 == $candidate % $p;
                }
                push @primes, $candidate;
                return $candidate
            }
        }
    }

    sub is_long_prime {
        my ($p) = @_;
        my $inverted = '0.';
        my $dividend = 1;
        my $divisor = $p;
        my %seen;
        while ($dividend && $p + 1 >= length $inverted) {
            return $p + 1 == length $inverted ? 1 : 0 if $seen{$dividend}++;

            $dividend   *= 10;
            my $quotient = int($dividend / $divisor);
            my $rest     = $dividend % $divisor;
            $inverted   .= $quotient;
            $dividend    = $rest;
        }
        return 0
    }

    sub long_primes {
        my ($n) = @_;
        my @long_primes;
        my $gen = prime_generator();
        while ($n != @long_primes) {
            my $p = $gen->();
            push @long_primes, $p
                if is_long_prime($p);
        }
        return @long_primes
    }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/wlmb/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 139 – W. Luis Mochán](https://wlmb.github.io/2021/11/16/PWC139/)

Luis introduces the  idea of using `bignum`, specifically `BigFloat` to demand sufficient precision to produce 3 repetitions of the maximum reptend, of which the last is removed, ensuring the precision of the first two.  We still need to perform long division, however, to correctly identify repetitions in the remainders, which is done using `List::Util`'s `first()` function.

```perl
    use bignum;
    use Math::Prime::Util qw(next_prime);
    use List::Util qw(first);    $columns = 62;

    $break = qr/\s|_/;
    my $max_count =  shift @ARGV // 5;                              # get number of long primes from command line
    my $prime=2;                                                    #current prime (will skip '2')
    my $count=0;
    my @lines;
    while($count<$max_count){
        $prime=next_prime($prime);
        my $length = $prime-1;                                      # expected length of large cycle
        Math::BigFloat->accuracy(3.5*$length);                      # allow 3+ repetitions
        my @groups = grep {$_} split /(\d{$length})/, 1./$prime;    # groups of digits
        pop @groups;                                                # throw away last (guard) repetition (posibly inexact)
        ++$count, push @lines,
                "long_prime[$count] is $prime",
                "       as 1/$prime = " . shift(@groups) . join "_", @groups,"..."
            if (first                                               # if cycle doesn't stop early
               {my $x = 10 ** $_ % $prime; $x==1 || $x==0}
               (1..$prime-1))
            == $prime-1
    }
```

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/adam-russell/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Jort Sort the First Five Long Primes — Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2021/11/21/perl/)

&nbsp;&nbsp;**blog writeup:**
[Jort Sort the First Five Long Primes — Prolog — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2021/11/21/prolog/)

As the prime numbers, as a list, can be considered an immutable constant whose creation is somewhat tangental to the problem at hand, Adam comes up with a novel method of acquiring the data: looking it up online. The University of Tennessee at Martin provides such a service at `http://primes.utm.edu/lists/small/100000.txt`. The primes are presented as a table that requires some small massaging to extract the data, which is scraped using `LWP`, but there are 100,000 of them, so that's nice.

```perl
    sub get_primes{
        my @primes;
        my $ua = new LWP::UserAgent(
            ssl_opts => {verify_hostname => 0}
        );
        my $response = $ua->get(PRIME_URL);
        my @lines = split(/\n/,$response->decoded_content);
        foreach my $line (@lines){
            my @p = split(/\s+/, $line);
            unless(@p < 10){
                push @primes, @p[1..(@p - 1)];
            }
        }
        return @primes;
    }
```


Once he has his prime list, Adam sets up a long division algorithm. The remainders at every step are added to a list, which is grepped to check of duplicates as each new remainder is added. If the length of the reptend is determined to match the value of the prime minus 1, we have a long prime.

```perl
    sub long_primes_five{
        my @long_primes;
        my @primes = get_primes();
        do{
            my $prime = shift @primes;
            my $max_repetend = $prime - 1;
            my $repeats = true if($prime != 2 && $prime != 5);
            if($repeats){
                my $x = divide(1, $prime, [], []);
                $x =~ m/\((\d+)\)/;
                my $repetend = $1;
                push @long_primes, [$prime, $x] if length($repetend) == $prime - 1;
            }
        }while(@long_primes < 5);
        return @long_primes;
    }
```

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/jaldhar-h-vyas/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/jaldhar-h-vyas/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 139](https://www.braincells.com/perl/2021/11/perl_weekly_challenge_week_139.html)

Jaldhar's technique hinges on the fact that in long division to compute a fraction, we always are, after the initial numeral digits, bring down another 0 to join to the remainder. Thus should a remainder repeat in this stage, bringing down another 0 will present the exact same parameters presented before, producing the same outcome. The cycle will then repeat.

So we are limited in the number of possible remainders that can be seen: for a given value 1/*p* there are only *p*-1 possible remainders without repeating. So in order to produce a long prime we need to see each of these possible states exactly once.

Hashing all of the remainders found is a very Perlish way to do it; here Jaldhar makes note of the position each remainder is found. If a hash keys is found to repeat, then the `period()` function returns the difference between the current position count and the stored value.

If and only if that count is equal to *p*-1 as well, then we have a long prime.

```perl
    sub period {
        my ($n) = @_;
        my $remainder = 1;
        my $i = 1;
        my %position;

        while (1) {
            $remainder = (10 * $remainder) % $n;
            if (exists $position{$remainder}) {
                return $i - $position{$remainder};
            }
            $position{$remainder} = $i;
            $i++;
        }
    }

    my $p = 2;
    my @longPrimes;

    while (scalar @longPrimes < 5) {
        $p++;

        unless (isPrime($p)) {
            next;
        }

        if (period($p) == $p - 1) {
            push @longPrimes, $p;
        }
    }
```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/laurent-rosenfeld/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/laurent-rosenfeld/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 139: JortSort and Long Primes](http://blogs.perl.org/users/laurent_r/2021/11/perl-weekly-challenge-139-jortsort-and-long-primes.html)

Because we aren't looking for a generalized reptend but only one of a known, specific length, Laurent calculates the decimal portion of the expansion to *p* digits, the value of the prime. Under the theory that shorter reptends will always have time to make at least one full repetition in this space he constructs a regular expression to find these shorter repeats and filter them. The primes that don't match, therefore are concluded to be long primes. In fact if the reptend length is not *p*-1, then its length will be a factor of *p*-1, according to [Fermat's little theorem](https://en.wikipedia.org/wiki/Fermat%27s_little_theorem): 10p−1 ≡ 1 (mod p)

So this conjecture seems to hold true and the regex should always filter correctly.

```perl
    sub invert {
        my $n = shift;
        my $dividend = 1;
        my $result;
    #     my $max = 2 * $n;
        while (1) {
            $dividend *= 10;
            $result .= int($dividend / $n);
            return $result if length $result >= $n;
            my $remainder = $dividend % $n;
            $dividend = $remainder;
        }
    #     say $result;
    #     return $result;
    }

    my @primes = generate_primes;
    for my $candidate (@primes[3..30]) {

        my $decimals = invert $candidate;
        say $decimals;
        my $len = length $decimals;
        ++$count and say "$candidate  $decimals " unless $decimals =~  /(\d{3,$len})\1/;
        last if $count >= 5;
    }
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/dave-jacoby/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[It’s The Mullet Of Algorithms!: The Weekly Challenge #139 | Committed to Memory](https://jacoby.github.io/2021/11/15/its-the-mullet-of-algorithms-the-weekly-challenge-139.html)

Dave also uses `BigFloat` to provide arbitrary-precision large decimals, specified to a digit count of three times the prime in question. From there he searches for repetitions using a regular expression set to each length up to that of the prime minus 1. Conditionals are used to remove shorter reptends, with only the long primes remaining.

```perl
    sub is_long_prime ($n ) {
        Math::BigFloat->accuracy($n*3);
        return 0 unless is_prime($n);
        my $bign = Math::BigFloat->new($n);
        my $big1 = Math::BigFloat->new(1);
        my $big  = $big1->bdiv($bign);
        $big =~ s/0+$//mix;
        my $alt = $big;
        $alt =~ s/^0\.//;

        my $l = $n - 1;
        for my $i ( 1 .. $l ) {
            my ( $f1, $f2 ) = $alt =~ m{(\d{$i})}g;
            return 0 if !defined $f2;
            return 0 if $f1 == $f2 && $i < $l;
            return 0 if $f1 != $f2 && $i == $l;
        }

        return 1;
    }
```

I note that Dave's `is_prime()` routine counts factors to determine whether or not a given number is prime. However to know this result we don't need a complete list of factors, only that there exists some beyond 1 and the number itself. So we can presumably short-circuit after finding any intermediate factor, saving some loop cycles. It's a small optimization, but I don't believe I've seen this implemented yet.

Just thinking out loud here. [*editor's note:* James did this, see below]

[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/paulo-custodio/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/paulo-custodio/python/ch-2.py)

Paulo brings us two subroutines: a routine to find long primes from candidates and a routine to find the length of a repeating decimal expansion to be compared. That routine uses a regular expression run in an `eval` to determine whether it succeeds or not. There's a whole lot of escaping going on there, but to clarify we're matching, for each length starting at 1 and working upwards towards *p*-1:
 * a decimal point
 * a sequence of digits of the length in this iteration
 * that sequence repeated 1 or more times
 * another sequence of digits up to the length in the iteration minus 1
 * the end of the string


```perl
    sub is_long_prime {
        my($p) = @_;
        my $inv = Math::BigFloat->new(1) / Math::BigFloat->new($p);
        if (rept_sequence($inv, $p-1)==$p-1) {
            return 1;
        }
        else {
            return 0;
        }
    }

    sub rept_sequence {
        my($n, $max) = @_;
        for my $rept (1..$max) {
            my $rept1 = $rept-1;
            my $code = "\$n =~ /\\.(\\d{$rept})\\1+\\d{0,$rept1}\$/;";
            if (eval $code) {
                return $rept;
            }
        }
        return -1;
    }
```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/cheok-yin-fung/perl/ch-2.pl)

CY brings us a short and sweet solution that relies on some pretty unusual mathematics to prove her conclusions. Ahh, sweet number theory. Here's my stab at an explanation:

She starts with a list of pre-computed primes. Then she runs each prime through a short verification routine. First a number is created consisting solely of 1s, the length of the prime in question. If the remainder of dividing this number by the prime is 0, then for each factor of the number up to the square root we check to see whether a number created from 1s of the length of the factor also has a remainder of 0 when divided by the prime. If this is the case the validation fails but if this second check fails we have a long prime.

That's what is does, at least, if a little light on the *why*. The second section seems to reflect that a repetition will, if it is not a full reptend, be a fraction of the full reptend length, according to the factors of *p*-1.


```perl
    open FI, "primes_upto_1000.txt";
    chomp(my @primes = <FI>);

    sub proper_factors {
        my $n = $_[0];
        my @factors = ();
        for (2..int sqrt($n)) {
            push @factors, $_, $n/$_ if $n % $_ == 0;
        }
        return [@factors];
    }

    sub verify {
        my $p = $_[0];
        my $ones = Math::BigInt->new("1" x ($p-1));
        if ($ones->bmod($p) == 0) {
            for my $k (@{proper_factors($p-1)}) {
                my $ones_sub = Math::BigInt->new("1" x $k);
                return 0 if $ones_sub->bmod($p) == 0;
            }
            return 1;
        }
        return 0;
    }

    my $count = 0;
    for (@primes) {
        if (verify $_) {
            say $_;
            $count++;
        }
        last if $count == $num;
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/james-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Sign in to GitHub · GitHub](https://github.com/drbaggy/perlweeklychallenge-club/new/master/challenge-139/james-smith)

James starts with an acknowledgement that this is nearly the same question that was behind PWC106, and that he's reusing code from that. However that was a more generalized solution, and here we know two constraints: that the numerator is always going to be 1, and that we are only looking for values with a reptend of a specifically defined length relative to the given prime. This makes things easier. On the other hand he has had quite some time to condense his logic into his two tightly-packed routines.

The first section does a quick search of odd numbers starting at 3; if a factor is found it skips to the next. If it passes that test its reptend is checked for length with `rec_len()`.

In `rec_len()` we use long division to compute a decimal of length 2 times the prime plus the length of the prime; this will allow enough space for one whole repetition in every case, with some extra digits added on. But the extra digits will be an incomplete segment from the reptend, so we can use a regular expression to do a non-greedy match to the end of the string; this may not capture the order of the reptend correctly but will find the correct number of digits, which is returned.

I like this solution.

```perl
    my( $N, @primes, @long_primes ) = ( $ARGV[0]||5 );

    ##
    ## We know 2 isn't a long prime, and also we are
    ## only looking at odd numbers so we don't have
    ## to worry about the special case of 2.
    ##
    ## Starting at the 3 we loop through the odd numbers
    ## Looking to see if the number is composite {has
    ## at least 1 prime factor lower than $p}.
    ##
    ## Skip to next number if it is (line 2)
    ##
    ## If it has the long_prime property we add it
    ## to the list of long primes (line 3)
    ## We also add it to the primes list (line 4)
    ##
    ## We exit the loop when we have the appropriate
    ## number of long primes
    ##

    O: for( my $p=3; @long_primes<$N; $p+=2 ) {
      ($p % $_) || (next O) for @primes;
      push @long_primes, $p if $p - rec_len($p) == 1;
      push @primes,      $p;
    }


    ##
    ## Output the long primes
    ##

    say $_ for @long_primes;

    ##
    ## We use long division here to compute the reciprocal
    ## of $D, to ensure we get a repeating pattern - we
    ## compute the 2$D + length $D digits as the repeating
    ## pattern will comprise of a number of 0s followed by
    ## the repeating pattern (which has to be at least
    ## 2$D-2 long.
    ##
    ## This division is done in line 2.
    ##
    ## The 3rd line finds the shortest repeating sequence
    ## tied to the end of this string, and returns its
    ## length
    ##
    sub rec_len {
      my( $D, $N, $s ) = ( shift, 1, '' );
      $s.=int($N/$D),$N%=$D,$N.=0 for 0..2*$D+length $D;
      $s =~ /(.+?)\1+$/ ? length $1 : 0;
    }

```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC139 - JortSort - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/11/17/pwc139-jortsort/)

&nbsp;&nbsp;**blog writeup:**
[PWC139 - Long Primes - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/11/18/pwc139-long-primes/)

Our distinguished Italian friend brings us a compact and elegant solution to the problem.

Counting upwards from 2, each number is first checked that it is not a multiple of 10 and that it is prime. We create a number as a string with a decimal component the length of the prime, then perform long division on it, saving each remainder as a hash key, stopping at the first recurrence of a key using the same postfix increment trick we saw earlier. The length of the reptend is the number of keys in this hash. We don't, after all, care what the reptend is, only how many digits it has, and each remainder will add another digit to the quotient.

```perl
    my $N = shift || 5;
    my $p = 2;
    while ($N > 0) {
       if (is_long_prime($p)) {
          say $p;
          --$N;
       }
       $p++;
    }
    sub is_prime ($n) {
       for (2 .. sqrt $n) { return unless $n % $_ }
       return 1;
    }
    sub is_long_prime ($n) {
       return unless (10 % $n) && is_prime($n);
       my $num = 1 . '0' x length($n);
       my %seen;
       $num = 10 * ($num % $n) while ! $seen{$num}++;
       return $n - 1 == scalar keys %seen;
    }
```


[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/sgreen/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/sgreen/python/ch-2.py)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 139](https://dev.to/simongreennet/weekly-challenge-139-2ja1)

Simon uses an explicit counter to note the loop iterations on his division, but otherwise his solution is quite similar, performing the division until we find a repeat remainder value. I find this solution quite compact and elegant.

```perl
    sub _long_division {
        my $number = shift;
        my $digits = 0;

        my $r    = 10 % $number;
        my %seen = ( $r => 1 );

        while ( ++$digits ) {
            $r = ( 10 * $r ) % $number;
            last if $seen{$r}++;
        }

        return $digits;
    }
```


[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/lubos-kolouch/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/lubos-kolouch/python/ch-2.py)

Finally, Lubos brings in two modules to help him, `bignum` to accomodate arbitrary-precision math, and the big guns: `Math::Prime::Util` to deliver prime numbers on demand.

After setting his precision to 100 places beyond the decimal place,
from there any repeating patterns can be located in the decimal component of the inverse by using a non-greedy regex, and we return the length of the repeat found. A wrapper calls this regex routine on primes requested from `Math::Prime::Util`'s `next_prime()` function, and the main block calls this until 5 long primes are found. Easy-peasy.

```perl
    use bignum ( p => -100 );
    use Math::Prime::Util qw/next_prime/;

    sub get_repeating_pattern {
        my $what = shift;

        my $big_reverse = 1 / $what;
        my $repeating   = $1 if ($big_reverse) =~ /(.+?)\1/msx;

        return length($repeating);
    }

    sub is_long_prime {
        my $what = shift;

        my $repeats = get_repeating_pattern($what);

        return 1 if ( $repeats > 1 ) and ( $repeats == $what - 1 );

        return 0;
    }

    sub generate_long_primes {

        my $primes_count = 0;
        my $at_prime     = 0;

        my @result;

        while ( $primes_count < 5 ) {
            $at_prime = next_prime($at_prime);

            if ( is_long_prime($at_prime) ) {
                $primes_count++;
                push @result, $at_prime;
            }
        }

        return \@result;
    }
```




## Blogs and Additional Submissions in Guest Languages for Task 2:


[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/abigail/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/abigail/awk/ch-2.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/abigail/bash/ch-2.sh), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/abigail/bc/ch-2.bc), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/abigail/c/ch-2.c), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/abigail/go/ch-2.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/abigail/java/ch-2.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/abigail/lua/ch-2.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/abigail/node/ch-2.js), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/abigail/pascal/ch-2.p), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/abigail/python/ch-2.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/abigail/r/ch-2.r), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/abigail/ruby/ch-2.rb), [Scheme](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/abigail/scheme/ch-2.scm), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/abigail/tcl/ch-2.tcl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 139: JortSort](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-139-1.html)

&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 139: Long Primes](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-139-2.html)


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/athanasius/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/athanasius/raku/ch-2.raku)


[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/colin-crain/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/colin-crain/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[That's a Long Jort to Sort - Programming Excursions in Perl and Raku](https://colincrain.com/2021/11/22/thats-a-long-jort-to-sort/)


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/roger-bell-west/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/roger-bell-west/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: Perl Weekly Challenge 139: Jort Primes](https://blog.firedrake.org/archive/2021/11/Perl_Weekly_Challenge_139__Jort_Primes.html)


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/ulrich-rieke/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/ulrich-rieke/cpp/ch-2.cpp), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-139/ulrich-rieke/raku/ch-2.raku)


------------------------------------------





---

# BLOGS {#PWC139BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, by some miracle I somehow continue to maintain my bearings.**

**Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your Unquenchable *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC136BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *FOLLOW* these *BLOG* *LINKS*:

**( ...*don't think, trust your training, you're in the zone, just do it ...* )**


**Abigail**

 * [Perl Weekly Challenge 139: JortSort](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-139-1.html) ( *Perl* )
 * [Perl Weekly Challenge 139: Long Primes](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-139-2.html) ( *Perl* )

**Adam Russell**

 * [Jort Sort the First Five Long Primes — Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2021/11/21/perl/) ( *Perl* )
 * [Jort Sort the First Five Long Primes — Prolog — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2021/11/21/prolog/) ( *Perl* )

**Arne Sommer**

 * [The Longest Sort with Raku](https://raku-musings.com/longest-sort.html) ( *Raku* )

**Colin Crain**

 * [That's a Long Jort to Sort - Programming Excursions in Perl and Raku](https://colincrain.com/2021/11/22/thats-a-long-jort-to-sort/) ( *Perl & Raku* )

**Dave Jacoby**

 * [It’s The Mullet Of Algorithms!: The Weekly Challenge #139 | Committed to Memory](https://jacoby.github.io/2021/11/15/its-the-mullet-of-algorithms-the-weekly-challenge-139.html) ( *Perl* )

**Flavio Poletti**

 * [PWC139 - JortSort - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/11/17/pwc139-jortsort/) ( *Perl & Raku* )
 * [PWC139 - Long Primes - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/11/18/pwc139-long-primes/) ( *Perl & Raku* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 139](https://www.braincells.com/perl/2021/11/perl_weekly_challenge_week_139.html) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #139 - "Whats recurring"](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-139/james-smith) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 139: JortSort and Long Primes ](http://blogs.perl.org/users/laurent_r/2021/11/perl-weekly-challenge-139-jortsort-and-long-primes.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 139:repeating and sorting – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2021/11/15/PerlWeeklyChallenge139.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 139:repeating and sorting – Luca Ferrari – PostgreSQL](https://fluca1978.github.io/2021/11/15/PerlWeeklyChallenge139.html#task1pg) ( *PostgreSQL* )

**Roger Bell_West**

 * [RogerBW's Blog: Perl Weekly Challenge 139: Jort Primes](https://blog.firedrake.org/archive/2021/11/Perl_Weekly_Challenge_139__Jort_Primes.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 139](https://dev.to/simongreennet/weekly-challenge-139-2ja1) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 139 – W. Luis Mochán](https://wlmb.github.io/2021/11/16/PWC139/) ( *Perl* )
