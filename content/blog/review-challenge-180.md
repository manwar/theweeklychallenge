---
author:       Colin Crain
date:         2022-10-17T00:00:00
description:  "Colin Crain › Perl Weekly Review #180"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #180"
image:        images/blog/p5-review-challenge-180.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-179/).* )

Welcome to the Perl review pages for **Week 180** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

Before we begin, you may wish to revisit either the pages for the [**original tasks**](/blog/perl-weekly-challenge-180/) or the summary [**recap**](/blog/recap-challenge-180/) of the challenge. But don't worry about it, the challenge text will be repeated and presented as we progress from task to task.

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

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC180TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC180TASK2)   &nbsp;  &nbsp;  &nbsp;       •   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC180BLOGS)    &nbsp;  &nbsp;  &nbsp;       •

---

# TASK 1 {#PWC180TASK1}

# First Unique Character
*Submitted by: Mohammad S Anwar*

You are given a string, `$s`.

Write a script to find out the first unique character in the
given string and print its index (0-based).

**Example 1**
```
        Input:  $s = "Perl Weekly Challenge"
        Output: 0 as 'P' is the first unique character
```


**Example 2**
```
        Input:  $s = "Long Live Perl"
        Output: 1 as 'o' is the first unique character
```



## about the solutions
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/adam-russell/perl/ch-1.pl),
[**Ali Moradi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/deadmarshal/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/athanasius/perl/ch-1.pl),
[**Aut0exec**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/aut0exec/perl/ch-1.pl),
[**Bejoy Mathews**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/bejoy-mathews/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/colin-crain/perl/ch-1.pl),
[**Dario Mazzeo**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/dario-mazzeo/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/jo-37/perl/ch-1.pl),
[**Julien Fiegehenn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/julien-fiegehenn/perl/ch-1.pl),
[**Kueppo Wesley**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/kueppo-wesley/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/lubos-kolouch/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/mattneleigh/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/perlboy1967/perl/ch-1.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/robert-dicicco/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/sgreen/perl/ch-1.pl),
[**Solathian**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/solathian/perl/ch-1.pl),
[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/steve-g-lynn/perl/ch-1.pl),
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/steven-wilson/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/ulrich-rieke/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/wlmb/perl/ch-1.pl)

Arrays and strings are two rather closely-related data structures, although one might not immediately realize this. In Perl they are held in very different containers: either an indexed Array or, in the case of a string, a simple Scalar. Internally, though, the string component of a scalar holds, in an invisibly complicated way hidden from the user, a pointer to a C-array of characters.

Consequently string characters can be referred to by index, just like an array. In the C language strings and arrays are essentially the same, but in Perl an Array data type has a bunch of clever additional metadata attached to it, such as its length, and first position.

Wait, *first* position? Don't you mean *last* position? No, we get that from the length if we know the first, and  Perl arrays always allocate a bit more memory than they strictly need to make adding (and removing) elements easier. So on a canvas of apportioned memory we overlay a sequence of scalar values, and hence we will need to know where to start. Clever, no?

Trust me, it's intensely clever. There's cleverness all over the "simple" Perl data types.

Strings, in fact, also use a similar device of allocating extra space in front of the first character but you really don't need to know that right now.

Suffice to say strings and arrays at the deepest levels boil down to sequential slots in memory that can be managed arithmetically. Which is also the essence of a list in Perl, which can be thought of as an array without the data structure backing it up: a list is a sequence of scalars often contained in a stack.

Sure, there's lots of hand-waving in that explanation but also I feel that's a pretty good gist of the situation. This is all just provided as a public service, giving background as to why you can go the same sort of things one might think to do with an array, with strings, and why converting between the two forms has its own set of specialized functions to go about this. They're kind of welded at the hip, when it comes down to it.

There were 31 submissions for the first task this past week.

## FINDING a NEEDLE in a PILE of STRING
[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/steve-g-lynn/perl/ch-1.pl),
[**Bejoy Mathews**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/bejoy-mathews/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/dave-jacoby/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/roger-bell-west/perl/ch-1.pl),
[**Dario Mazzeo**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/dario-mazzeo/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/mohammad-anwar/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/athanasius/perl/ch-1.pl),
[**Aut0exec**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/aut0exec/perl/ch-1.pl),
[**Solathian**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/solathian/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/sgreen/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/e-choroba/perl/ch-1.pl), and
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/perlboy1967/perl/ch-1.pl)

In the first of two list-based tasks this week we are asked to locate the position of the first unique value within the list. In order to do this will by necessity need to look at every position within the list at least once, to know for sure our final selection is unique,

Using two passes over the data makes the task fairly straightforward: in the first we count the incidence of each component element, and in the second find the first character that shows up only once. The first counting does not even need to be complete, as all we really care about is "once" or "more than once".

The task can also be accomplished in a single pass, if we collect and update the necessary information as we go along. By the time we get to the end of the line we will, with a little care, know everything we need to make the call.

[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/steve-g-lynn/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/steve-g-lynn/raku/ch-1.p6)


&nbsp;&nbsp;**blog writeup:**
[PWC 180](https://thiujiac.blogspot.com/2022/08/pwc-180.html)

We'll start the ball rolling with Stephen, who appears to be quite fond of the letter 's'.

Alternately, having forcibly secured a foothold in the symbol table, he has chosen to fully develop his position there under that name before venturing further. Exploring code can be fraught with peril, and hence solidifying a strong base camp can be a very prudent course to pursue. And bonus if you also just happen to *really* like the letter 's'.

In any case here we are with a scalar, an array and a hash all named 's' with differing sigils. The string 's' is chopped into an array of characters 's' that are processed into a frequency hash 's'. We can then iterate over the index values of the array, and, examining each character as a hash key, check its count. The first key whose count is 1 is unique, and hence our winner.

Further processing can now stop after the result is reported.

```perl
    sub print_1st_unique_char_indx {
        #-- parsimonious use of a single stash entry *s
        local ($s) = shift;
        local (@s, %s);
        @s = split //, $s;
        for $s (@s) {$s{$s}++;}
        for $s (0 .. scalar(@s)-1) {
            if ($s{$s[$s]}==1) {
                print $s,"\n";
                last;
            }
        }
    }
```

[**Bejoy Mathews**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/bejoy-mathews/perl/ch-1.pl)

An interesting approach is given by Bejoy, who makes a single top-level pass across the data. He examines for each letter position and then, using `grep`, tests the prevalence of one-or-more second appearances in the array slice following it..

Or in other words, look at the first letter, and see if it occurs again. If it does then try the second, and see if the string following *that* contains a repeat. Continue until we find one that doesn't, and note its position.

```perl
    my @pwc = split('', $s);
    my $pos=-1;

    foreach(@pwc)
    {
     $pos++;
     if (grep(/$pwc[$pos]/, @pwc[$pos..@pwc-1]) == 1) { print "The first unique character in '$s' is '$pwc[$pos]'\n"; exit }
    }
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/dave-jacoby/perl/ch-1.pl)

In Dave's `first_uniq_char` we perform much the same action, yet use a second loop to replace the `grep`. One tradeoff here is that once we find a single second instance we can short-circuit out of the inner loop and move on the next string index immediately.

```perl
    sub first_uniq_char( $string ) {
        my @string = split //, $string;
    OUTER: for my $i ( 0 .. -1 + scalar @string ) {
            my $c = $string[$i];
            for my $j ( 0 .. -1 + scalar @string ) {
                next if $i == $j;
                my $d = $string[$j];
                next OUTER if $c eq $d;
            }
            return $i;
        }
        return -1;
    }
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/roger-bell-west/javascript/ch-1.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/roger-bell-west/kotlin/ch-1.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/roger-bell-west/lua/ch-1.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 180: Unique Trim](https://blog.firedrake.org/archive/2022/08/The_Weekly_Challenge_180__Unique_Trim.html)

Now Roger returns us to performing two discrete passes over the elements of a listified string, the first to bag the frequencies and the second to find the lowest index with a hashed count of 1.

A `map` is used to make our bag, and a `foreach` loop iterates over the index values.


```perl
    sub firstunique($s) {
      my @s = split '',$s;
      my %cc;
      map {$cc{$_}++} @s;
      foreach my $i (0..$#s) {
        if ($cc{$s[$i]} == 1) {
          return $i;
        }
      }
      return -1;
    }
```

[**Dario Mazzeo**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/dario-mazzeo/perl/ch-1.pl)

Here is another example of making a frequency hash, then using a C-style `for` loop to traverse the string letter-by-letter using `substr`, landing on the first character with a hash value of 1.

The difference here being that Dario does it in Italian.

```perl
    my $s="Long Live Perl";
    my %freq=();

    for (my $i=0; $i<length($s); $i++){
        $freq{substr($s,$i,1)}++;
    }

    for (my $i=0; $i<length($s); $i++){
        my $c=substr($s,$i,1);
        if ($freq{$c}==1){
            print "$i '$c' e' il primo carattere univoco\n";
            last;
        }
    }
```


[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/mohammad-anwar/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/mohammad-anwar/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/mohammad-anwar/raku/ch-1.raku), [Swift](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/mohammad-anwar/swift/ch-1.swift)

Mohammad introduces an interpretative twist we haven't seen before, in standardizing the case before counting their frequencies. This brings to light an ontological ambiguity on the nature of a "character". If a character is an encoded numeric entity on a computer system, then "A" and "a" are different, as their bits are not the same. Any semantic similarities in the meaning of the glyphs is irrelevant. However looking at it another way strings are presumed to be textual, and texts are composed of letters, giving credence to the idea that "A" and "a" are minor grammatical variations on a single vowel that does not change, and hence in essence the same thing.

By lowercasing before counting, Mohammad places himself in the latter camp.

Interesting.

A quick search through the submissions reveals he is not alone.

```perl
    sub first_unique_character($str) {
        my @c = ();
        my %c = ();
        foreach my $c (split //, $str) {
            next if $c eq ' ';
            $c = lc $c;
            if (exists $c{$c}) {
                $c{$c}++;
            }
            else {
                push @c, $c;
                $c{$c} = 1;
            }
        }

        my $i = 0;
        foreach my $c (@c) {
            if ($c{$c} == 1) {
                return $i;
            }
            $i++;
        }
    }
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/athanasius/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/athanasius/raku/ch-1.raku)


For example, the monk Athanasius makes the same assumption, quite explicitly in their notes, along with caveats on ignoring whitespace. Frankly this whole line of reasoning never occurred to me.

```perl
    sub find_index
    {
        my ($s) = @_;
        my  %chars;

        for my $char (split //, $s)
        {
            ++$chars{ lc $char } if $char =~ / ^ [[:alpha:]] $ /x;
        }

        my $index;

        for my $i (0 .. length( $s ) - 1)
        {
            my $key = lc substr( $s, $i, 1 );

            if (exists $chars{ $key } && $chars{ $key } == 1)
            {
                $index = $i;
                last;
            }
        }

        return $index;
    }
```


[**Aut0exec**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/aut0exec/perl/ch-1.pl)

Member Aut0exec delivers a compact and direct solution that uses a regular expression to match out occurrences of each letter. The string is broken into an array of characters, then each is matched globally within the unaltered string.

```perl
    foreach my $letter (split(//, $String)) {
        my @matches = $String =~ /$letter/g;
        if ( scalar(@matches) eq 1 )
        {
            print ("The first unique letter is: $letter at index: $i\n");
            last;
        }
        $i++;
    }
```

This approach makes me think that by using the `/e` switch, a counter, and a toggle the whole thing could be done within a single expression.

Hmmm...


[**Solathian**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/solathian/perl/ch-1.pl)

Member Solathian also employs a global match to find all occurrences of each letter, combining the whole operation into the conditional clause.

```perl
    foreach my $char (@characters)
    {
        # skip spaces
        if($char ne ' ')
        {
            #count the characters in the string
            if( 1 == ($string =~ s/$char//g ) )
            {
                # if it is one then it is unique
                say( "Output: $i as '$char' is the first unique character");

                $returnVal = $i;
                last;
            }
        }
        $i++;
    }
```

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/sgreen/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/sgreen/python/ch-1.py)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 180](https://dev.to/simongreennet/weekly-challenge-180-4mi5)


The Perl regular expression engine is an awesome machine of sometimes incomprehensible power. Or perhaps just dangerously incomprehensible.

Ok, sure, that might be a little hyperbolic but frankly, not a lot. It is its own DSL and interpreter combo that may not be Turing complete, but certainly feels as through it is. The actual status, to my knowledge, remains unproven.

But with great power comes great complexity, and with complexity comes overhead. And overhead, in a general sense, is to be avoided.

Enter `index`, which searches for a subpattern within a string. Because no backtracking is involved it doesn't need the whole RE engine, and hence is very fast. Combined with `substr` instead of making a new array to iterate over and we have a recipe for speed.

```perl
    sub main($phrase) {
    # Go through each character
        foreach my $i (0 .. length($phrase)-2) {

            # If the letter in that position does not occur  later, print the index
            if (index($phrase, substr($phrase, $i, 1), $i + 1) == -1) {
                say $i;
                return;
            }
        }

        # Oh dear. Nothing unique!
        say 'No unique characters!';
    }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/e-choroba/perl/ch-1.pl)

Although Choroba gives us a very nice comparative solution, with a tasting plate of subroutines served four ways, it was his regular expression version that really caught my eye:

```perl
    sub first_unique_character_regex ($s) {
        local $_ = $s;
        s/\Q$1//g while /(.).*\1/g;

        return length ? index $s, substr $_, 0, 1 : -1;
    }
```

What's happening here? It's important to realize the conditional match in the `while` will be executed first, which will match the first character in the string, capturing it into $1, just as long as a second occurrence is found later in the string. Should a match be found, the earlier substitution will remove all traces of that character from the string and we will go around again.

The conditional fails at the first non-repeating character, at which point we move to the `return` statement. If the target string still has characters then we use `index` to find the offset, which would be the number of characters we have stripped off the head before we finally found our unique value.

This is our index, or -1 is returned if we can't find a non-repeating character.

Choroba provides several other solutions that are also very much worth a look, as always. Using two hashes, one recording uniqueness and the other positions of the first occurrences, proved the quickest in a shoot-out. I personally find this very interesting because [I used two hashes myself in a very similar fashion](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/colin-crain/perl/ch-1.pl).

```perl
    use List::Util qw{ min };
    sub first_unique_character_hash ($s) {
        my %pos;
        my $i = 0;
        my %is_unique;
        for my $ch (split //, $s) {
            $is_unique{$ch} = ! exists $pos{$ch};
            $pos{$ch} = $i++;
        }
        return min(@pos{ grep $is_unique{$_}, keys %pos }) // -1
    }
```


[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/perlboy1967/perl/ch-1.pl)

Finally, what about a module function?

The `List::Util` function `uniq` did not prove useful to this particular task, as this only removes duplicates without preserving any original properties of uniqueness among array elements. There was, however, another function over in `List::MoreUtils` that proved more promising.

This function is `singleton`, and Niels is here to demonstrate it to us.

What `singleton` does is *filter* a list, and only allow unique, solitary values through. The result is a list of unique elements with non-unique values completely removed. By splitting a string, applying the function and rejoining the filtered result he constructs a string of only the unique characters from the original.

This sting is then used to construct a character class, which when inserted into a regular expression minimally matching everything from the front of the original string up to the first single member of the character class. The magic then is that the length of this match, returned, will be the offset of the first unique character.

Yes it is kind of convoluted but also great.

```perl
    use List::MoreUtils qw(singleton);

    sub firstUniqueChar($) {
      my $re = sprintf '(?i)(.*?)([%s])', join '',singleton split //,lc $_[0];
      my (@r) = $_[0] =~ m#$re#;

      return [length $r[0], $r[1]];
    }
```



## Blogs and Additional Submissions in Guest Languages for Task 1:





---------------------------------------------------------------------
---------------------------------------------------------------------
---------------------------------------------------------------------
---------------------------------------------------------------------
---------------------------------------------------------------------
---------------------------------------------------------------------
---------------------------------------------------------------------
---------------------------------------------------------------------
---------------------------------------------------------------------
---------------------------------------------------------------------



## NOTES


[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/adam-russell/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/adam-russell/prolog/ch-1.p)


&nbsp;&nbsp;**blog writeup:**
[First Uniquely Trimmed Index – Perl – RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/09/04) ( *Perl* )

&nbsp;&nbsp;**blog writeup:**
[First Uniquely Trimmed Index – Prolog – RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/09/04) ( *Prolog* )


[**Ali Moradi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/deadmarshal/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/deadmarshal/cpp/ch-1.cpp), [D](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/deadmarshal/d/ch1.d), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/deadmarshal/lua/ch-1.lua), [Modula-3](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/deadmarshal/modula-3/ch1), [Nim](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/deadmarshal/nim/ch1.nim), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/deadmarshal/pascal/ch1.pas), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/deadmarshal/python/ch1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/deadmarshal/raku/ch-1.raku)


[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/arne-sommer/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/arne-sommer/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Unique Trim with Raku and Perl - Arne Sommer](https://raku-musings.com/unique-trim.html)


[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/cheok-yin-fung/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/cheok-yin-fung/raku/ch-1.raku)


[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/colin-crain/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Second to None - Programming Excursions in Perl and Raku](https://colincrain.com/2022/09/03/second-to-none)


[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/duncan-c-white/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/duncan-c-white/C/ch-1.c)


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC180 - First Unique Character - ETOOBUSY](https://etoobusy.polettix.it/2022/09/01/pwc180-first-unique-character/)


[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/jaldhar-h-vyas/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/jaldhar-h-vyas/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 180](https://www.braincells.com/perl/2022/09/perl_weekly_challenge_week_180.html)


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/james-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #180](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-180/james-smith)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[D](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/laurent-rosenfeld/d/ch-1.d), [Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/laurent-rosenfeld/javascript/ch-1.js), [Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/laurent-rosenfeld/julia/ch-1.jl), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/laurent-rosenfeld/kotlin/ch-1.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/laurent-rosenfeld/lua/ch-1.lua), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/laurent-rosenfeld/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/laurent-rosenfeld/raku/ch-1.raku), [Ring](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/laurent-rosenfeld/ring/ch-1.ring), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/laurent-rosenfeld/ruby/ch-1.rb), [Scala](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/laurent-rosenfeld/scala/ch-1.scala)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 180:  First Unique Character and Trim List](http://blogs.perl.org/users/laurent_r/2022/08/perl-weekly-challenge-180-first-unique-character-and-trim-list.html)


[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/lubos-kolouch/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/lubos-kolouch/python/ch-1.py)


[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/robert-dicicco/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/robert-dicicco/julia/ch-1.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/robert-dicicco/raku/ch-1.raku), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/robert-dicicco/ruby/ch-1.rb)


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/ulrich-rieke/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/ulrich-rieke/cpp/ch-1.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/ulrich-rieke/haskell/ch-1.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/ulrich-rieke/raku/ch-1.raku), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/ulrich-rieke/rust/ch-1.rs)


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/wlmb/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 180 – W. Luis Mochán](https://wlmb.github.io/2022/08/29/PWC180/)


------------------------------------------





---

# TASK 2 {#PWC180TASK2}

# Trim List
*Submitted by: Mohammad S Anwar*

You are given list of numbers, @n and an integer $i.

Write a script to trim the given list where element is less than or equal to the given integer.

**Example 1**
```
        Input: @n = (1,4,2,3,5) and $i = 3
        Output: (4,3,5)
```


**Example 2**
```
        Input: @n = (9,0,6,2,3,8,5) and $i = 4
        Output: (9,6,8,5)
```



## about the solutions
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/adam-russell/perl/ch-2.pl),
[**Ali Moradi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/deadmarshal/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/arne-sommer/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/athanasius/perl/ch-2.pl),
[**Aut0exec**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/aut0exec/perl/ch-2.pl),
[**Bejoy Mathews**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/bejoy-mathews/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/colin-crain/perl/ch-2.pl),
[**Dario Mazzeo**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/dario-mazzeo/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/jo-37/perl/ch-2.pl),
[**Kueppo Wesley**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/kueppo-wesley/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/laurent-rosenfeld/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/lubos-kolouch/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/mattneleigh/perl/ch-2.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/mohammad-anwar/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/perlboy1967/perl/ch-2.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/robert-dicicco/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/sgreen/perl/ch-2.pl),
[**Solathian**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/solathian/perl/ch-2.pl),
[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/steve-g-lynn/perl/ch-2.pl),
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/steven-wilson/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/ulrich-rieke/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/wlmb/perl/ch-2.pl)

The [UNIX utility `grep`](https://en.wikipedia.org/wiki/Grep) is an acronym from the three terms "Global",  "Regular Expression", and "Print". It's a handy search tool created by Ken Thompson that selects terms from all items in an input list — originally filenames — that match a given expression, printing the positive results.

This idea, of taking a large pool of data and extracting only those parts that match certain criteria, is known as a filter. In Perl, the regular expression component is generalized to a block of code that returns either true of false for a given input. This generalized idea, in turn, of applying a code block, or function, to a list or stream of data to determine a result, is a basic component of the functional programming paradigm.

There were 30 submissions for the second task this past week.

## A SELECTION of SUBMISSIONS
[**Ali Moradi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/deadmarshal/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/mattneleigh/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/perlboy1967/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/duncan-c-white/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/wlmb/perl/ch-2.pl),
[**Dario Mazzeo**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/dario-mazzeo/perl/ch-2.pl),
[**Aut0exec**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/aut0exec/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/polettix/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/cheok-yin-fung/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/james-smith/perl/ch-2.pl), and
[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/steve-g-lynn/perl/ch-2.pl)



Basically what we are being asked to do here is implement `grep`, either calling it directly or by reproducing the functionality in a filter. As it is already a built-in function integral to the language just using `grep` was by far the most common approach. However some submissions chose more elemental reconstructive solutions, sequentially processing and comparing the input list items.

[**Ali Moradi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/deadmarshal/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/deadmarshal/cpp/ch-2.cpp), [D](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/deadmarshal/d/ch2.d), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/deadmarshal/lua/ch-2.lua), [Modula-3](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/deadmarshal/modula-3/ch2), [Nim](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/deadmarshal/nim/ch2.nim), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/deadmarshal/pascal/ch2.pas), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/deadmarshal/python/ch2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/deadmarshal/raku/ch-2.raku)

Ali will start us off with a demonstration on the use of `grep`.

```perl
    sub trim_list{
      my ($arr, $i) = @_;
      grep {$_ > $i} @$arr;
    }
```

The block we are applying is `{$_ > $i}`, which sets the special variable `$_`, known as the topic, to each element in the input subroutine stack in turn.

`grep` returns a list of all elements that resolve to true within the block. This, because it is the last operation in a subroutine that does not otherwise explicitly return, is passed through and returned by the subroutine.

[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/mattneleigh/perl/ch-2.pl)

Matthew takes a lower-level approach, and a more strict interpretation of the directive to "trim the given list". In this he operates on a reference for his input, and alters the original array in-place rather than returning a copy.

A while loop is used with an external index variable. At each cycle the list element at the index is examined, and if it satisfies the condition it is left alone, the index incremented and the next element selected. If the condition fails, however, `splice` is used to remove the element from the list. As the list is now one element shorter, the index now points to the next element already.

```perl
    sub trim_list_by_value{
        my $list = shift();
        my $n = int(shift());

        my $i = 0;

        # Loop while $i is within the array
        while($i <= $#$list){
            if($list->[$i] > $n){
                # This value doesn't meet search criteria;
                # move on (increment $i)
                $i++;
            } else{
                # This value meets search criteria; remove
                # it (and shrink the list)
                splice(@{$list}, $i, 1);
            }
        }

    }
```

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/duncan-c-white/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/duncan-c-white/C/ch-2.c)

It's not clear whether recopying or in-place alteration of the actual input list is the purest expression of the operation. Each has its own virtue, either to preserve memory or to be able to  return to the unaltered list later. Ultimately the best choice will depend on the final application.

```perl
    @list = grep { $_ >= $i } @list;
    say '('.join(',', @list ).')';
```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/perlboy1967/perl/ch-2.pl)

In an unexpected twist Niels covers all bases, and depending on what is being assigned from the function returns either a newly-minted array of values or simply overwrites the input reference with new data from the filtered list.

```perl
    sub trimList (\@$) {
      my ($ar,$v) = @_;

      if (wantarray) {
        grep { $_ > $v } @$ar;
      } else {
        @$ar = grep { $_ > $v } @$ar;
      }
    }
```



[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/wlmb/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 180 – W. Luis Mochán](https://wlmb.github.io/2022/08/29/PWC180/)

Using `grep` the combined actions can be placed into one compact line. Even if we include some verbose commentary, as Luis has done here.

```perl
    say "The elements of (", join(", ", @list),
        ") larger than or equal to $N are (",
        join(", ", grep {$_ >= $N} @list), ")";
```

[**Dario Mazzeo**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/dario-mazzeo/perl/ch-2.pl)

To avoid just repeating the `grep` form of example over and over, I'll try and seek out any variations where they lie.

Here Dario constructs his own loop, examining each element in turn and either pushing it onto a new output list or passing it by. This is, after all, the essential action behind `grep`, albeit that producing an anonymous array to be assigned.

Dario pretty-prints the output array and a comma-separated list within parentheses, which is both clear and has a nice look.

```perl
    my @out=();
    foreach my $j (@n){
        if ($j>$i){
            push(@out, $j);
        }
    }

    my $output="(@out)";
    $output=~s/ /,/g;
    print "$output\n";
```

A regular expression is used to swap the spaces placed by the double-quote operator for commas, which works fine, but something many people do not seem to know is that the behavior of the double quotes when given an array is configurable! Buried within the noisy glyph-scape that holds the many [Perl special variables](https://perldoc.perl.org/perlvar) we find `$"`, which is easy to remember because it's the variable for double quotes. Its formal, long name is `$LIST_SEPARATOR`, and it specifies the character placed between elements of a list when interpolated. Remember all arrays are lists but not all lists are arrays.

Because the configuration is by default global, it's commonly redefined using the `local` declaration, limiting its scope to the current block.


And furthermore the more modern `say` is just like `print` but adds a linefeed. So the output section could be compactly rewritten using Perl idioms as:

```perl
    local $" = ', ';
    say "($output)";
```

Nice, right?

[**Aut0exec**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/aut0exec/perl/ch-2.pl)

The use of `local` is not necessary, nor is any declarative statement in fact, as the special variable `$"` comes pre-defined. The main purpose of using `local` is that in more complex environments a global change may break some other interpolation placed far away, potentially bringing in a had-to-trace bug.

Here Aut0exec provides a more stripped down example, with most of the processing encapsulated in a single line of code.

```perl
    my @List = split(/,/, $ARGV[0]);
    my $Int = $ARGV[1];
    my @Filtered;

    foreach (@List) { push(@Filtered, $_) unless $_ <= $Int; }

    $"=',';
    print ("Filtered list is: @Filtered \n");
```

But since I seem to be discussing conventions, I will mention those capitalized variable names, although perfectly legal, throw me off. `$Int` scans to me like a type declaration, making me question where I am and many of the dubious life choices I have made over the years. And I don't particularly like that train of thought. There's a time and a place for that, like for instance my therapist's office. Lowercase and underscores, "snake_case" is the convention, and I'm honestly not a fan of single letters except in the most obvious throw-away cases.

Obviously in a language that prides itself on TIMTOWTDI these particulars will be in some dispute, and YMMV.

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC180 - Trim List - ETOOBUSY](https://etoobusy.polettix.it/2022/09/02/pwc180-trim-list/)

Here Flavio demonstrates proper safe-coding procedures by explicitly placing his output within its own containing block.

We also have a really interesting replacement for some of the generalized functionality of `grep`, with the function `trim_le`, for "less-than or equal to". Or maybe "learner's edition", but I doubt it.

This function in turn calls the function `trim` handing it a coderef containing a  conditional block, which can happen by benefit of the function prototype `&@`.  This says to take a reference to,  passing a coderef and an array reference. Done this way we can pass the wrapper function a low shelf value and the array to be trimmed, all without parentheses.


```perl
    sub trim (&@) { my $cond = shift; grep { ! $cond->($_) } @_ }
    sub trim_le ($@) { my $i = shift; trim { $_ <= $i } @_ }

    my $i = shift // 3;
    my @start = @ARGV ? @ARGV : (1, 4, 2, 3, 5);
    my @trimmed = trim_le $i, @start;
    {local $" = ','; say "(@trimmed)" }
```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/cheok-yin-fung/perl/ch-2.pl)

With the inherent structural brevity of the `grep` solution, some people took in on themselves to make that an end in itself.

CY has crafted her `grep` code to fit on a single line, to be used from the shell under `perl -nE`.

```perl
    @a = split /\D/, $_; say join " ", grep { $_ > $a[0]} @a    #perl -nE


    # perl -nE '@a = split /\D/, $_; say join " ", grep { $_ > $a[0]} @a'
    # [input] 3 1 4 2 3 5
    # [output] 4 5
    # [input] 4 9 0 6 2 3 8 5
    # [output] 9 6 8 5
```


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/james-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #180](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-180/james-smith)

When inscribing monuments in stone, the Romans eschewed punctuation and interstitial spacing between letters, only grudgingly acquiescing to divid sentence-level concepts into separate lines. The argument was that when literally chiseling granite plinths you really wanted to be terse and direct, and did *not* want to run out of space and have to start over. Punctuation in that context is a frivolous luxury.

As goeth the Romans, so goes James. He does helpfully provide us with a pre-compacted version first, which is nice.

```perl
    sub filter {
      grep { $_ > $_[0] } @{ $_[1] }
    }

    sub f{grep{$_>$_[0]}@{$_[1]}}
```

[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/steve-g-lynn/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/steve-g-lynn/julia/ch-2.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/steve-g-lynn/raku/ch-2.p6)


&nbsp;&nbsp;**blog writeup:**
[PWC 180](https://thiujiac.blogspot.com/2022/08/pwc-180.html)

And finally, we have a different method to review! But talk about bringing a bomb to a knife-fight: Stephen hauls in the PDL, the Perl Data Language extensions, to do his work.

And short work that is. As it turns out the PDL has a list comprehension function `where` that works much the same as `grep` or a `WHERE` clause in SQL. Or set theory, for that matter, with its vertical bar. Or any of a gamut of other languages that offer a formal list comprehension scheme.

Anyhoo, `where` it is, and what it is is all elements of the piddle `$n` that are greater than `$i`.

```perl
    use PDL;
    use PDL::NiceSlice;
    use PDL::AutoLoader;

    sub trim {
        my ($i,@n)=@_;
        my $n = pdl @n;
        return $n->where($n >= $i);
    }
```



## Blogs and Additional Submissions in Guest Languages for Task 2:


[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/adam-russell/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/adam-russell/prolog/ch-2.p)


&nbsp;&nbsp;**blog writeup:**
[First Uniquely Trimmed Index – Perl – RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/09/04) ( *Perl* )

&nbsp;&nbsp;**blog writeup:**
[First Uniquely Trimmed Index – Prolog – RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/09/04) ( *Prolog* )


[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/arne-sommer/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/arne-sommer/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Unique Trim with Raku and Perl - Arne Sommer](https://raku-musings.com/unique-trim.html)


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/athanasius/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/athanasius/raku/ch-2.raku)


[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/colin-crain/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Second to None - Programming Excursions in Perl and Raku](https://colincrain.com/2022/09/03/second-to-none)


[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/jaldhar-h-vyas/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/jaldhar-h-vyas/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 180](https://www.braincells.com/perl/2022/09/perl_weekly_challenge_week_180.html)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/laurent-rosenfeld/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/laurent-rosenfeld/awk/ch-2.awk), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/laurent-rosenfeld/c/ch-2.c), [D](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/laurent-rosenfeld/d/ch-2.d), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/laurent-rosenfeld/go/ch-2.go), [Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/laurent-rosenfeld/javascript/ch-2.js), [Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/laurent-rosenfeld/julia/ch-2.jl), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/laurent-rosenfeld/kotlin/ch-2.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/laurent-rosenfeld/lua/ch-2.lua), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/laurent-rosenfeld/pascal/ch-2.pas), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/laurent-rosenfeld/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/laurent-rosenfeld/raku/ch-2.raku), [Ring](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/laurent-rosenfeld/ring/ch-2.ring), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/laurent-rosenfeld/ruby/ch-2.rb), [Scala](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/laurent-rosenfeld/scala/ch-2.scala)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 180:  First Unique Character and Trim List](http://blogs.perl.org/users/laurent_r/2022/08/perl-weekly-challenge-180-first-unique-character-and-trim-list.html)


[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/lubos-kolouch/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/lubos-kolouch/python/ch-2.py)


[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/mohammad-anwar/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/mohammad-anwar/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/mohammad-anwar/raku/ch-2.raku), [Swift](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/mohammad-anwar/swift/ch-2.swift)


[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/robert-dicicco/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/robert-dicicco/julia/ch-2.jl), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/robert-dicicco/lua/ch-2.lua), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/robert-dicicco/raku/ch-2.raku), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/robert-dicicco/ruby/ch-2.rb)


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/roger-bell-west/javascript/ch-2.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/roger-bell-west/kotlin/ch-2.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/roger-bell-west/lua/ch-2.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/roger-bell-west/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/roger-bell-west/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 180: Unique Trim](https://blog.firedrake.org/archive/2022/08/The_Weekly_Challenge_180__Unique_Trim.html)


[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/sgreen/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/sgreen/python/ch-2.py)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 180](https://dev.to/simongreennet/weekly-challenge-180-4mi5)


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/ulrich-rieke/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/ulrich-rieke/cpp/ch-2.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/ulrich-rieke/haskell/ch-2.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/ulrich-rieke/raku/ch-2.raku), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-180/ulrich-rieke/rust/ch-2.rs)


------------------------------------------





---

<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>

<center>
<h1 id="PWC180BLOGS">_________ THE BLOG PAGES _________</h1>
</center>


---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, by some miracle I somehow continue to maintain my bearings.**

**Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your Unquenchable *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC180BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *FOLLOW* these *BLOG* *LINKS*:

**( ...*don't think, trust your training, you're in the zone, just do it ...* )**


**Adam Russell**

 * [First Uniquely Trimmed Index – Perl – RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/09/04) ( *Perl* )
 * [First Uniquely Trimmed Index – Prolog – RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/09/04) ( *Prolog* )

**Arne Sommer**

 * [Unique Trim with Raku and Perl - Arne Sommer](https://raku-musings.com/unique-trim.html) ( *Perl & Raku* )

**Colin Crain**

 * [Second to None - Programming Excursions in Perl and Raku](https://colincrain.com/2022/09/03/second-to-none) ( *Perl* )

**Flavio Poletti**

 * [PWC180 - First Unique Character - ETOOBUSY](https://etoobusy.polettix.it/2022/09/01/pwc180-first-unique-character/) ( *Perl & Raku* )
 * [PWC180 - Trim List - ETOOBUSY](https://etoobusy.polettix.it/2022/09/02/pwc180-trim-list/) ( *Perl & Raku* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 180](https://www.braincells.com/perl/2022/09/perl_weekly_challenge_week_180.html) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #180](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-180/james-smith) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 180:  First Unique Character and Trim List](http://blogs.perl.org/users/laurent_r/2022/08/perl-weekly-challenge-180-first-unique-character-and-trim-list.html) ( *Perl & Raku* )

**Roger Bell_West**

 * [RogerBW's Blog: The Weekly Challenge 180: Unique Trim](https://blog.firedrake.org/archive/2022/08/The_Weekly_Challenge_180__Unique_Trim.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 180](https://dev.to/simongreennet/weekly-challenge-180-4mi5) ( *Perl* )

**Stephen G Lynn**

 * [PWC 180](https://thiujiac.blogspot.com/2022/08/pwc-180.html) ( *Perl & Raku* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 180 – W. Luis Mochán](https://wlmb.github.io/2022/08/29/PWC180/) ( *Perl* )
