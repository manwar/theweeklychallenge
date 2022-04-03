---
author:       Colin Crain
date:         2022-04-03T00:00:00
description:  "Colin Crain › Perl Weekly Review #154"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #154"
image:        images/blog/p5-review-challenge-154.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-153/).* )

Welcome to the Perl review pages for **Week 154** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

---

### ●︎ Why do we do these challenges?

I suppose any reasonable answer to that question would be from a field as wide ranging and varied as the people who choose to join the team. One thing, though, is clear: it's not a competition, and there are no judges, even if there is a "prize" of sorts. About that -- I think of it more as an honorarium periodically awarded to acknowledge the efforts we make towards this strange goal. So there's no determination to find the *fastest*, or the *shortest*, or even, in some abstract way, the *best* way to go about things, although I'm certain the participants have their own aspirations and personal drives. As Perl is such a wonderfully expressive language, this provides quite a bit of fodder to the core idea of TMTOWTDI, producing a gamut of varied techniques and solutions.

Even the tasks themselves are often open to a certain amount of discretionary interpretation. What we end up with is a situation where each participant is producing something in the manner they find the most interesting or satisfying. Some team members focus on carefully crafted complete applications, thoroughly vetting input data and handling every use case they can think up. Others choose to apply themselves to the logic of the underlying puzzle and making it work in the most elegant way they can. Some eschew modules they would ordinarily reach for, others embrace them, bringing to light wheels perhaps invented years ago that happen to exactly solve the problem in front of them today.

I've been considering this question for some time and have found one binding commonality between all of us out solving these challenges each week, in that however we normally live our lives, the task in front of us more than likely has nothing to do with any of that. And I think this has great value. We all do what we do, in the real world, and hopefully we do it well. The Weekly Challenge provides us with an opportunity to do something germane to that life yet distinctly different; if we only do the things we already know how to do then we will only do the same things over and over. This is where the "challenge" aspect comes into play.

So we can consider The Weekly Challenge as providing a problem space outside of our comfort zone, as far out from that comfort as we wish to take things. From those reaches we can gather and learn things, pick and choose and bring what we want back into our lives. Personally, I think that's what this whole thing is about. YMMV.

---

<strong><i>Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due.</i></strong>

And that, my friends, is why I'm here, to try and figure out ways to do just that.

So, here we are then. I'm ready — let’s get to it and see what we can find.

---

### For Additional Context…

before we begin, you may wish to revisit either the pages for the [**original tasks**](/blog/perl-weekly-challenge-154/) or the summary [**recap**](/blog/recap-challenge-154/) of the challenge. But don't worry about it, the challenge text will be repeated and presented as we progress from task to task.

Oh, and one more thing before we get started:


### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please feel free to email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

<div align= center><strong>...So finally, without further ado...</strong></div>

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC154TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC154TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC154BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

---

# TASK 1 {#PWC154TASK1}

# Missing Permutation
*Submitted by: Mohammad S Anwar*
You are given possible permutations of the string 'PERL'.

```
    PELR, PREL, PERL, PRLE, PLER, PLRE, EPRL, EPLR, ERPL,
    ERLP, ELPR, ELRP, RPEL, RPLE, REPL, RELP, RLPE, RLEP,
    LPER, LPRE, LEPR, LRPE, LREP
```

Write a script to find any permutations missing from the list.


## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/abigail/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/adam-russell/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/athanasius/perl/ch-1.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/bruce-gray/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/colin-crain/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/jo-37/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/lubos-kolouch/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/mattneleigh/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/perlboy1967/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/peter-campbell-smith/perl/ch-1.pl),
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/pokgopun/perl/ch-1.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/robert-dicicco/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/roger-bell-west/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/ulrich-rieke/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/wlmb/perl/ch-1.pl)

Sometimes, you know, when gathering real-world data there's a blip in the system and something gets lost. Actually, in the real world this is more the norm than the exception when interfacing with humans, or relying on assumptions for guidance, both of which are commonly unavoidable if we want to get anything done at all.

When something gets lost, where does it go? Doesn't it get awfully crowded behind the dryer with the stray socks? Or is this Land of Nod seemingly infinite, as they say of the cat dimension, that elusive space that allows a house cat to completely disappear for hours at a time inside a sealed room and then reappear suddenly, out of apparently thin air?

In any case data errors are a part of life, and this challenge models an all-too familiar scenario, that one single piece of the puzzle is missing, and it's suddenly on us to figure out which one of many nearly identical items is *not* present. You can't, after all, look for something if you don't know what it is.

Or at bare minimum, the task of searching becomes exponentially more difficult.

There were 24 submissions for the first task this past week.

## A SELECTION of SUBMISSIONS
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/james-smith/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/arne-sommer/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/jaldhar-h-vyas/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/laurent-rosenfeld/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/adam-russell/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/athanasius/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/jo-37/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/lubos-kolouch/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/wlmb/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/perlboy1967/perl/ch-1.pl), and
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/cheok-yin-fung/perl/ch-1.pl)

To find the missing permutation, generally the plans fell to figuring out *all* the permutations and comparing the data sets piece-by-piece. However that was not the only way to proceed. There were alternate, unexpected approaches that made the results of this challenge more unpredictable than one might immediately think. How's that for a teaser? Let's take a survey of the field. I think it likely everyone will be surprised at least once.

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/james-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #154](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-154/james-smith)

Diving right into it, James delivers us solutions three different ways, based on increasing levels of restrictions applied particular to the task as given. These ways will also serve as general categories for the types of approaches we saw: either by focusing on the words or the letters composing them.

In the opening — the broadest sense for the conditions — he takes the input set of words and keys a hash from them. He then gives us an implementation of Knuth's Algorithm L to create a set of all permutations, and iterating through it checks each for existence as a hash key. Any that remain unfound are those missing from the original set. This, expressed in set theory, is creating the set difference of items contained in one set and not the other:

*A*\\*B* = ( *x* : *x* ∈ *A* and *x* ∉ *B* )

Here's James' code for this solution:

```perl
    sub next_perm {
      my( $i, $j );
      ( $s[$_] lt $s[$_+1] ) && ( $i = $_ ) for 0    .. @s-2;
      return unless defined $i;
      ( $s[$i] lt $s[$_  ] ) && ( $j = $_ ) for $i+1 .. @s-1;
      @s[ $i, $j       ] = @s[ $j, $i               ];
      @s[ $i+1 .. @s-1 ] = @s[ reverse $i+1 .. @s-1 ];
      return join '',@s;
    }

    my $w = join '', @s = sort split //, 'PERL';
    my %check = map { $_=>1 } @words;
    do { exists $check{ $w } || say "  * $w"; } while $w = next_perm;
```

However if we allow that we know there is only a single missing value, we can *sort* both the input word list and the letters composing the target word. Algorithm L produces lexicographically sorted output, so when the permuted letter sequences are joined back into words, the two sorted lists should align. When they *don't* match up, however, then we have discovered an element in one list and not in the other.

```perl
    $w = join '', @s = sort split //, 'PERL';
    my @sorted = sort @words;

    do { $w lt $sorted[0] ? say "  * $w" : shift @sorted } while $w = next_perm;
```


In the third, "hack" solution, which I find *amazing* we XOR the null bits of an empty string once with each word in the input list. Each initial XOR will hence produce the letter, or if the letter has already been seen reverse the operation back to a null string. If there is in fact only one single missing permutation, then the letter correspondances for that arrangement will never get flipped back and when all is said and done that arrangement will remain. It's interesting that the order of the bit flipping does not matter, only that each flip to a new letter is accompanied by a second flip somewhere to the same latter again to flip the translation back.

```perl
    my $r ='';
    $r^=$_ for @words;
    say "  * $r";
```

Cool, right? Three lines after input. This will work in as a general case because the number of incidences of each letter amongst the permutations will always be even. However it does require there to be only a single missing word.


[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/arne-sommer/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/arne-sommer/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Padovan is Missing with Raku and Perl](https://raku-musings.com/padovan-missing.html)

Another set-wise solution comes to us from Arne: again the input strings are treated as a set, modeled by a hash, with the keys as items. Then, using `permutations()`, this time from `Algorithm::Combinatorics`, permutation arrays of the letters of the target word are generated, joined together again, and checked for a positive value in the hash. Values not found indicate missing permutations.

As duplicate letters in the input word could produce multiple hits on the same missing permutation a `unique()` filter is applied to the output. For example with the input word "EVER", the permutation "VEER" would appear twice, once for each arrangement of the two "E"s.

```perl
    use Algorithm::Combinatorics 'permutations';
    use List::Util 'uniq';

    my $string       = shift(@ARGV) || 'PERL';
    my $permutations = shift(@ARGV) || "PELR PREL PERL PRLE PLER PLRE EPRL EPLR ERPL
                                        ERLP ELPR ELRP RPEL RPLE REPL RELP RLPE RLEP
                                        LPER LPRE LEPR LRPE LREP";

    my @letters      = split("", $string);
    my %permuations  = map { $_ => 1} split(/\s+/, $permutations);
    my @missing;

    for my $candidate (permutations(\@letters))
    {
      my $as_string = join("", @$candidate);
      say ": Checking candidate: $as_string" if $verbose;
      push(@missing, $as_string) unless $permuations{$as_string};
    }

    say join(", ", uniq @missing) if @missing;
```

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/jaldhar-h-vyas/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/jaldhar-h-vyas/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 154](https://www.braincells.com/perl/2022/03/perl_weekly_challenge_week_154.html)

Jaldhar takes a subtractive approach: starting with all the permutations he figuratively scratches off off all those he finds, checking them as found, in the input list by incrementing their value in the hash.

To accomplish this he brings forward his ["trusty permute() routine pinched from perlfaq4"](https://www.braincells.com/perl/2022/03/perl_weekly_challenge_week_154.html) to produce all permutations, then structures the results as keys in a hash with the value undef. Going through the list each item is looked up and the value incremented. After iterating through the whole list the key whose value is still undef is the missing string.

```perl
    sub permute (&@) {
        my $code = shift;
        my @idx = 0..$#_;
        while ( $code->(@_[@idx]) ) {
            my $p = $#idx;
            --$p while $idx[$p-1] > $idx[$p];
            my $q = $p or return;
            push @idx, reverse splice @idx, $p;
            ++$q while $idx[$p-1] > $idx[$q];
            @idx[$p-1,$q]=@idx[$q,$p-1];
        }
    }

    my @partial = qw/ PELR PREL PERL PRLE PLER PLRE EPRL EPLR ERPL ERLP ELPR ELRP
    RPEL RPLE REPL RELP RLPE RLEP LPER LPRE LEPR LRPE LREP /;

    my @permutations;

    permute { push @permutations, \@_; } split //, "PERL";
    my %full = map { $_ => undef } map { join q{}, @{$_}; } @permutations;

    for my $part (@partial) {
        $full{$part}++;
    }

    say join q{ }, grep { $_ if !defined $full{$_} } keys %full;
```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/laurent-rosenfeld/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 154: Missing Permutations and Padovan Primes](http://blogs.perl.org/users/laurent_r/2022/03/perl-weekly-challenge-154-missing-permutations-and-padovan-primes.html)

Laurent gives us another variation on a set-wise approach, with each item in the input list is entered as a key in a hash. The fundamentally unordered nature of hash keys makes this a pretty good model for a set, al-in-all. There is no real meaning of "where" a hash key is located, only whether it is in or not in the hash.

Then, using his own recursive `permute()` function, he generates all arrangements of the starting word "PERL" as strings. The result list is then passed over, looking up each item in turn by determining whether a hash key exists. A generated permutation without a corresponding hash key is, as we've seen before, the missing item we've been looking for.

```perl
    my %given_perm = map { $_ => 1 } qw/
        PELR PREL PERL PRLE PLER PLRE EPRL EPLR ERPL
        ERLP ELPR ELRP RPEL RPLE REPL RELP RLPE RLEP
        LPER LPRE LEPR LRPE LREP /;

    sub permute {
        my ($str, @vals) = @_;
        if (scalar @vals == 0) {
            push @permutations, $str;
            return;
        }
        permute("$str" . $vals[$_], @vals[0..$_-1],
            @vals[$_+1..$#vals]) for 0..$#vals;
    }
    permute "", split //, (keys %given_perm)[0];
    for my $perm (@permutations) {
        say "$perm is missing" unless exists $given_perm{$perm};
    }
```

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/adam-russell/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/adam-russell/prolog/ch-1.p)


&nbsp;&nbsp;**blog writeup:**
[Padovan Prime Directive: Find the Missing Permutations — Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/03/06)

&nbsp;&nbsp;**blog writeup:**
[Padovan Prime Directive: Find the Missing Permutations — Prolog — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/03/06)

Breaking from the pack, Adam starts with the premise that, when looking over the input list of arrangements, each letter in each position across the permutation set will be expressed a certain number of times. For each position, if a letter doesn't show up enough times, then that instance of the latter is catalogued as "missing" from the position. Evaluating each position in the target word PERL, he finds the the missing list to be (L, E, R, P), which when rejoined yields LERP.

More code is placed on top of this central method to allow the possibility of multiple missing letters, which would result in multiple combinations of those letters represented in each position, in turn necessitating a check against the input list for each permutation from the "missing letter" lists.

Note his use of the `Algorithm::Loops` module to facilitate the last check. That module really stands out in its own unique place, providing some very interesting looping constructs that really don't exist elsewhere.

```perl
    use Algorithm::Loops q/NestedLoops/;

    sub missing_permutations{
        my($permutations, $s) = @_;
        my @missing;
        ##
        # remove any duplicates
        ##
        my %permutations;
        map {$permutations{$_}=undef} @{$permutations};
        $permutations = [keys %permutations];
        ##
        # get the letters missing in each slot
        ##
        my @missing_letters;
        for my $i (0 .. length($s) - 1){
            my %slot_counts;
            my @ith_letters = map {my @a = split(//, $_); $a[$i]} @{$permutations};
            map{$slot_counts{$_}++} @ith_letters;
            $missing_letters[$i] = [grep {$slot_counts{$_} != factorial(length($s) - 1)} keys %slot_counts];
        }
        ##
        # determine which missing letters form missing permutations
        ##
        my $nested = NestedLoops(\@missing_letters);
        while (my @set = $nested->()){
            my $candidate = join("", @set);
            my @matched = grep {$candidate eq $_} @{$permutations};
            push @missing, $candidate if !@matched;
        }
        return @missing;
    }
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/athanasius/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/athanasius/raku/ch-1.raku)

The monk brings us a tasty offering from the cornucopia that is `Math::Prime::Util`: the function `formultiperm {BLOCK} ARRAY REF`. This is a complex function that works as an iterator, applying the BLOCK function to each multiset permutation produced by processing the elements in the referenced array. Because we're doing multiset permutations, the results are produced uniquely, even if letters are duplicated in the input. Here the block rejoins the permuted letters into words and pushed the result on a list for later checking.

To find whether a permuted word is missing from the input list, the `List::Util` function `none` is used to compare it to all elements in the array.

```perl
    use List::Util        qw( none );
    use Math::Prime::Util qw( formultiperm );

    formultiperm { push @perms, join '', @_ } [ sort split //, $STRING ];

    check_given_perms( \@perms ) if $CHECK;

    my @missing;

    for my $s (@perms)
    {
        push @missing, $s if none { $s eq $_ } @GIVEN;
    }

    my $missing = scalar @missing;

    printf "Output: There %s %d missing permutation%s %s\n",
        $missing == 1 ? 'is' : 'are',
        $missing,
        $missing == 0 ? 's'  : $missing == 1 ? ':' : 's:',
        join ', ', @missing;
```


[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/jo-37/perl/ch-1.pl)

You know, I can't say for sure whether I've observed a significant uptick in the use of `Math::Prime::Util` since we're started to do so much number theory, or if so, whether Jorg's methodical exploration of this elaborate package has had anything to do with it.

But yea, I'll say "probably" to both. And well done. Because it really is a brilliant, deserving package.

Here Jorg uses the standard-set version of the permutations iteration function from that module, `forperm`. This combines a `for` loop with a permutations iterator in one handy place. The input list is converted to a hash and inside the iterator function block we check the value for existence among the hash keys.

```perl
    use Math::Prime::Util 'forperm';

    sub missing_perms ($orig, @given) {
        my @orig = split //, $orig;
        # Convert array to hash.
        (\my %given)->@{@given} = ();
        local $" = '';
        my %missing;
        # @_ holds the index set, not the values.
        forperm {
            $missing{"@orig[@_]"} = undef unless exists $given{"@orig[@_]"};
        } @orig;

        keys %missing;
    }
```

[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/lubos-kolouch/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/lubos-kolouch/python/ch-1.py)

Lubos offers us a different module of choice for his permutation needs, `Algortihm::Permute`. An iterator is generated to produce a new permutation on demand, which are then searched for in the input list using a `grep` filter. Missing values are pushed to an output array. As the task given is small this solution doesn't overthink it and just finds the missing data.

```perl
    use Algorithm::Permute;

    sub find_missing {
        my $what = shift;

        my $all_perms = Algorithm::Permute->new( [ split //, 'PERL' ] );

        my @output;

        while ( my @perm = $all_perms->next ) {
            my $look_str = join '', @perm;
            push @output, $look_str unless grep { /$look_str/ } @$what;
        }

        return \@output;
    }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/wlmb/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 154 – W. Luis Mochán](https://wlmb.github.io/2022/02/28/PWC154/)

And here, after creating a hash lookup from the input list with each key pointing to a positive value, Luis filters a second list of hash keys for *all* permutations using a `grep` statement, by looking for those keys that do not return a true value. Sometimes you look for the positive, sometimes the negative.

```perl
    use Algorithm::Combinatorics qw(permutations);

    my @seen=@ARGV;
    my $first=$seen[0];
    my @letters=split "", $first;
    my %seen;
    map {$seen{$_}=1} @seen;
    my %permutations; # all permutations
    $permutations{$_}=1 for map {join "", @$_} permutations(\@letters);
    # Check the input
    map {die "$_ is not a permutation of $first" unless $permutations{$_}} keys %seen;
    $columns=62; $break=qr/\s/;
    say wrap("", "    ", "Input: ", join ", ", @seen);
    say wrap("", "    ", "Missing permutations: ", join ", ",
                         grep {!$seen{$_}} keys %permutations);
```


[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/perlboy1967/perl/ch-1.pl)

The expansion of Perl's basic list processing tools: `map`, `sort` and `grep`, using the numerous aftermarket modules available, really opens up the idea of using the list as the fundamental data-processing unit for programming, a central idea to the functional programming paradigm. Here Niels gives us a remarkable and novel solution based on the `List::MoreUtils` function `singleton`. This is a filter somewhat similar to `unique` in that it keeps track of the frequencies that individual items occur in a list of data, but this function cannot work piecemeal, as it only passes data that occurs exactly once. Thus by creating a list of all permutations using `Algorithm::Combinatorics` and then merging that list with the original input data, every permutation will be duplicated except the missing item, which is allowed to pass.

Marvelous.

```perl
    use Algorithm::Combinatorics qw(permutations);
    use List::MoreUtils qw(singleton);

    my @s = singleton(
      qw(
        PELR PREL PERL PRLE PLER PLRE EPRL EPLR
        ERPL ERLP ELPR ELRP RPEL RPLE REPL RELP
        RLPE RLEP LPER LPRE LEPR LRPE LREP
      ),
      map{join '',@$_} permutations([split(//,'PERL')])
    );

    say "Missing permutation(s): (",join(',',@s),")";
```


[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/cheok-yin-fung/perl/ch-1.pl)

Finally, CY brings us a function similar to Luis', in as much as it hinges on a final `grep` filter to find items that are not present in the hashed representation of the input data. She provides an interesting variation in allowing for duplicate letters in the input word by filtering the created permutation list using `uniqstr` from `List::Util` to remove those duplicates a multiset of letters would naturally produce.

```perl
    use List::Util qw/uniqstr/;

    my @sw = split "", $word;

    # all permutations
    my $iter = Algorithm::Permute->new(\@sw, length($word));
    my @words;
    while (my @res = $iter->next) {
        push @words, join "", @res;
    }
    @words = uniqstr @words;

    # use a hash to determine whether a permutation has appeared
    my %bucket = map {$_ => 0} @words;

    for (@collection) {
        if (defined($bucket{$_})) {
            $bucket{$_}++;
        }
        else {
            die "Inconsistency: \"$_\" is not a permutation of \"$word\".\n";
        }
    }

    return [ grep {!$bucket{$_}} @words ];
```

## Blogs and Additional Submissions in Guest Languages for Task 1:


[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/abigail/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/abigail/awk/ch-1.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/abigail/bash/ch-1.sh), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/abigail/c/ch-1.c), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/abigail/go/ch-1.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/abigail/java/ch-1.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/abigail/lua/ch-1.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/abigail/node/ch-1.js), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/abigail/pascal/ch-1.p), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/abigail/python/ch-1.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/abigail/r/ch-1.r), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/abigail/ruby/ch-1.rb), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/abigail/tcl/ch-1.tcl)


[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/bruce-gray/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/bruce-gray/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/bruce-gray/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[TWC Episode 154 - Padawan Missing | Bruce Gray](http://blogs.perl.org/users/bruce_gray/2022/03/twc-episode-154---padawan-missing.html)


[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/colin-crain/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/colin-crain/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Who Took My Cheese? - Programming Excursions in Perl and Raku](https://colincrain.com/2022/03/05/who-took-my-cheese/)


[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/dave-jacoby/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[A Quick One While I Do Other Things: Weekly Challenge #154 | Committed to Memory](https://jacoby.github.io/2022/02/28/a-quick-one-while-i-do-other-things-weekly-challenge-154.html)


[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/e-choroba/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Perl5](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/e-choroba/perl5/ch-1.pl)


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC154 - Missing Permutation - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/03/02/pwc-154-missing-permutation/)


[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/peter-campbell-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perming Perl plus Padovan primes](https://pjcs-pwc.blogspot.com/2022/02/perming-perl-plus-padovan-primes.html)


[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/pokgopun/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/pokgopun/go/ch-1.go)


[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/robert-dicicco/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/robert-dicicco/raku/ch-1.raku), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/robert-dicicco/tcl/ch-1.tcl)


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/roger-bell-west/javascript/ch-1.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/roger-bell-west/kotlin/ch-1.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/roger-bell-west/lua/ch-1.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 154: Missing Padovan](https://blog.firedrake.org/archive/2022/03/The_Weekly_Challenge_154__Missing_Padovan.html)


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/ulrich-rieke/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/ulrich-rieke/cpp/ch-1.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/ulrich-rieke/haskell/ch-1.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/ulrich-rieke/raku/ch-1.raku)




------------------------------------------





---

# TASK 2 {#PWC154TASK2}

# Padovan Prime
*Submitted by: Mohammad S Anwar*

A Padovan Prime is a Padovan Number that’s also prime.

In number theory, the Padovan sequence is the sequence of integers P(n) defined by the initial values.

```
    P(0) = P(1) = P(2) = 1
```

and then followed by

```
    P(n) = P(n-2) + P(n-3)
```

First few Padovan Numbers are as below:

```
    1, 1, 1, 2, 2, 3, 4, 5, 7, 9, 12, 16, 21, 28, 37, ...
```

Write a script to compute first 10 distinct Padovan Primes.

**Expected Output**

```
    2, 3, 5, 7, 37, 151, 3329, 23833, 13091204281, 3093215881333057
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/abigail/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/adam-russell/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/arne-sommer/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/athanasius/perl/ch-2.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/bruce-gray/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/jo-37/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/laurent-rosenfeld/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/lubos-kolouch/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/mattneleigh/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/perlboy1967/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/peter-campbell-smith/perl/ch-2.pl),
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/pokgopun/perl/ch-2.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/robert-dicicco/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/roger-bell-west/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/ulrich-rieke/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/wlmb/perl/ch-2.pl)

The [Padovan numbers](https://en.wikipedia.org/wiki/Padovan_sequence) are defined by a recurrence relation similar to that of the Fibonacci numbers, only in this case we do not sum the previous two values but rather skip the immediately previous value and sum the two values previous to that. As such we need three statring conditions, to compute

P(*n*) = P(*n*-2) + P(*n*-3)

The interesting thing about the Padovan numbers is in the choice of initial conditions. Notably the (1,1,1) selection allows one to construct a geometric approximation of a spiral analogous to a [Fibonacci spiral](https://en.wikipedia.org/wiki/Golden_spiral), but instead of φ, the spiral converges to another value, referred to as the "plastic number" and commonly notated as p.

p is irrational and approximately equal to 1.32471, corresponding to the real solution to the equation

*x*<sup>3</sup> = *x* + 1

This parallels φ being the solution to the expression

*x*<sup>2</sup> = *x* + 1

To cut to the chase, what the plastic number is trying to do here, then, is to provide a three dimensional analog to the [Golden Ratio](https://en.wikipedia.org/wiki/Golden_ratio), as some sort of "perfect" design relationship. For a further exploration on this topic, I refer interested parties to my [writeup on the subject](https://colincrain.com/2022/03/06/padovans-dog/), specifically the "Observations and Commentary" section. As a lead in, I'll mention the Texas sharpshooter comes to visit our argument.

What, if anything, the Padovans have to do with *prime numbers* is an elusive concept, but the idea that there might be a relationship is not completely without merit, as the identical recurrence relation with different starting conditions produces what is known as the [Perrin numbers](https://en.wikipedia.org/wiki/Perrin_number), which, also governed by the plastic number, have many remarkable connections to the primes.

For the impatient though, the Padovan numbers do not seem to hold the same mystery with respect to guessing prime values. They can produce some very interesting and pleasing architecture, but I feel they aren't about to change our ideas on the nature of perfection in any meaningful way.

There were 24 submissions for the second task this past week.

## A DANCE of SPACE-FILLING TRIANGLES
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/mattneleigh/perl/ch-2.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/robert-dicicco/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/peter-campbell-smith/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/polettix/perl/ch-2.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/bruce-gray/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/ulrich-rieke/perl/ch-2.pl),
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/pokgopun/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/roger-bell-west/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/colin-crain/perl/ch-2.pl), and
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/dave-jacoby/perl/ch-2.pl)

To solve this challenge we need at least two parts: a part to compute really big integers and a part to determine whether or not a given number is prime. The big integer part is for our numbers: the Padovan sequence is fairly straightforward but like the Fibonacci numbers they expand exponentially, albeit converging to the smaller plastic base instead of φ.

In a manner analogous to Binet's formula, there exists a closed-form equation to produce the Padovan numbers, which can be briefly reduced to the true statement:

∀ *n* ≥ 0, **P**(*n*) is the integer closest to
(*p*<sup>5</sup>/2*p*+3)*p*<sup>*n*</sup> where *p* is the plastic number.

Although it would have been wild, no one actually used this.

[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/mattneleigh/perl/ch-2.pl)

Matthew is going to start us off today with a pair of well-documented functions, `next_padovan()` which predictably delivers the next padovan number in an ever-expanding sequence, and `is_prime()` which tests for primality. A outer control structure loops through new padovan values and tests them, and primes are added to a hash as keys. This last step works to create a unique set, which by calling `keys` and sorting will produce the requested list.

`next_padovan()` is well-explained:

```perl
    ################################################################################
    # Calculate the next number in the Padovan sequence- starting with P(0) (or 1)
    # when the function is first called.  There is no way to reset the sequence
    # once it has begun.
    # Takes no arguments.
    # Returns:
    # * The next number in the Padovan sequence, after the one returned in the
    #   previous call to this function, if any; P(0), which has a value of 1, is
    #   returned upon the first call to this function
    ################################################################################
    sub next_padovan{
        use v5.10;

        state @sequence;
        state $calls = 0;

        unless(@sequence){
            # This only happens the first time this
            # function is called
            @sequence = (1, 1, 1);
        }

        if($calls < 3){
            $calls++;
            return(1);
        }

        # Calculate a new number in the sequence,
        # and delete an old one
        push(@sequence, $sequence[1] + $sequence[0]);
        shift(@sequence);

        return($sequence[2]);

    }
```

The complement, `is_prime()` uses a less-common method of dividing out to rapidly check for primality, based on the fact that all primes greater than 3 are of the form

*p* = 6*k* ± 1 : *k* > 0

Here the loop variable provides the lower bound ( -1 ) and this is checked for divisibility along with adding 2 to the iterator to obtain the upper option ( +1 ).

```perl
    sub is_prime{
        my $n = int(shift());

        my $i;

        # Take care of a few easy cases
        return(1)
            if(($n == 2) || ($n == 3));
        return(0)
            if(($n <= 1) || !($n % 2) || !($n % 3));

        # See if certain factors divide evenly
        for($i = 5; $i * $i <= $n; $i += 6){
            if(!($n % $i) || !($n % ($i + 2))){
                return(0);
            }
        }

        return(1);

    }
```

[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/robert-dicicco/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/robert-dicicco/raku/ch-2.raku), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/robert-dicicco/tcl/ch-2.tcl)

By substituting some module functions to serve the same roles this method can be streamlined. The same basic idea remains, though, that we produce a list of Padovan numbers and validate them for primality until we have collected 10.

The primality test in `ntheory`, a pseudonym for `Math::Prime::Util`, is a complex assortment of methods that had been exhaustively tested for every value up to 2<sup>64</sup>.

```perl
    use ntheory qw/is_prime/;
    use List::MoreUtils qw/uniq/;

    my @nums = (1,1,1);
    my @out = ();
    my $count = 10;

    while ( $count >= 0 ) {
      my $len = scalar @nums;
      my $padnum = $nums[$len-2] + $nums[$len-3];
      push @nums, $padnum;

      if(is_prime($padnum)){
        push @out, $padnum;
        $count--;
      }
    }

    @out = uniq(@out);
```

[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/peter-campbell-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perming Perl plus Padovan primes](https://pjcs-pwc.blogspot.com/2022/02/perming-perl-plus-padovan-primes.html)

This basic technique is all well and good to provide the first 10 Padovan primes, satisfying the criteria, but after that things get rather out-of-hand. The problem is that the tenth value, 3093215881333057 is not far within the 64-bit Perl integer limit, and from there the 11th value is nowhere to be seen.

To get around this Peter uses the `BigInt` pragma, allowing us arbitrary sized integers within special object containers. Accommodating it's peculiarities takes a bit of getting used to, but allows us to go a to stellar heights. Which is good to know because as it turns out the next prime is located at

1363005552434666078217421284621279933627102780881053358473

and te one after that at

1558877695141608507751098941899265975115403618621811951868598809164180630185566719

Well, you get the idea.

Of note by using `Math::Prime::Util::GMP` on top of all this we can further improve the `is-prime()` function should one desire to, say if you were tinkering in the cryptographic realm.

Also, it does seem a bit of a waste to filter the results through a whole extra `unique()` function of some sort just to get rid of what turns out to be a single duplicated 2. Peter provides a handy alternative method, compiling his output into a single string for printing and then trimming off the extra value. As no matter how many values are requested this front section remains the same this is an efficient, consistent solution to what is essentially a cosmetic problem.

```perl
    use Math::Prime::Util 'is_prime';
    use Math::BigInt lib => 'GMP';

    # as in challenge text
    $p[0] = $p[1] = $p[2] = '1';

    # make successive Padovan numbers
    for ($n = 3; $count <= 11; $n ++) {
        $p[$n] = Math::BigInt->new($p[$n - 2]);
        $p[$n]->badd($p[$n - 3]);

        # but is it prime?
        if (is_prime($p[$n])) {
        	$string .= qq[$p[$n], ];
        	$count ++;
        }
    }

    # eliminate the repeated '2' and the final ', '
    say substr($string, 3, -2);
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC154 - Padovan Prime - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/03/03/pwc154-padovan-prime/)

&nbsp;&nbsp;**alternative solution:**
[ch-2-alternate](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/polettix/perl/ch-2-alt.pl)

Ok then. Now that we've homed in on the result directly, let's take the scenic route and mix it up a bit.

Flavio proudly returns with a veritable *handful* of iterators to solve the problem: one to produce the Padovans, which is handed to a `uniq` filter iterator, which in turn gets joined up with an `is_prime()` subroutine coderef and handed to a `grep`-like iterator generator. In the end each call to the final coderef returned drops the next Padovan prime on us.

So much nesting of first-class function references! So much composing! Ain't life grand?

There's no way to clip this one down and have it still have a prayer of making any sense, to here's the whole shebang:

```perl
    my $n = shift || 10;
    my $it = grep_it(\&is_prime, uniq(padovan_number_iterator()));
    say join ', ', map { $it->() } 1 .. $n;

    sub padovan_number_iterator {
       my ($Pa, $Pb, $Pc) = (1) x 3;
       return sub {
          (my $retval, $Pa, $Pb, $Pc) = ($Pa, $Pb, $Pc, $Pa + $Pb);
          return $retval;
       };
    }

    sub uniq ($it) {
       my $previous = $it->();
       return sub {
          while ('necessary') {
             my $current = $it->();
             next if $current == $previous;
             (my $retval, $previous) = ($previous, $current);
             return $retval;
          }
       }
    }

    sub grep_it ($condition, $it) {
       return sub {
          while ('necessary') {
             my $x = $it->();
             return $x if $condition->($x);
          }
       }
    }

    sub is_prime { # https://en.wikipedia.org/wiki/Primality_test
       return if $_[0] < 2;
       return 1 if $_[0] <= 3;
       return unless ($_[0] % 2) && ($_[0] % 3);
       for (my $i = 6 - 1; $i * $i <= $_[0]; $i += 6) {
          return unless ($_[0] % $i) && ($_[0] % ($i + 2));
       }
       return 1;
    }
```

[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/bruce-gray/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/bruce-gray/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/bruce-gray/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[TWC Episode 154 - Padawan Missing | Bruce Gray](http://blogs.perl.org/users/bruce_gray/2022/03/twc-episode-154---padawan-missing.html)

Bruce clearly demonstrates that using all available resources this task can be quicky dispatched — with the caveat granted that the lazy-list generator here might not be familiar to... well, I'm going to hazard, nearly *all* of you. That said, we still make Padovans, filter them first for primality, and then again as unique values to create the requested data.

This is the whole beautifully compact thing:

```perl
    use Modern::Perl;
    use List::Util qw<uniq head>;
    use List::Lazy qw<lazy_list>;
    use ntheory    qw<is_prime>;

    my $Padovan = lazy_list {
        push  @$_, $_->[-2] + $_->[-3];
        shift @$_;
    } [1, 1, 1];

    my $prime_pad = $Padovan->grep( sub { is_prime($_) } );

    say join ', ', uniq $prime_pad->next(11);
```

The `Lazy::List` module produces list objects whose values get created on demand as they are needed, but also retained and never recomputed. This is ideal for a recurrence relation where whenever we need the next value we simply compute it from the block provided. The object comes with its own `grep` method, which returns a new now-filtered lazy list object-thingy, and `next` which delivers the next *n* items.

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/ulrich-rieke/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/ulrich-rieke/cpp/ch-2.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/ulrich-rieke/haskell/ch-2.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/ulrich-rieke/raku/ch-2.raku)

There was quite a bit of variety among the solutions to the parts of the puzzle as well, even among the solutions that fit the same basic pattern. Lets take a moment to look at some of the alternatives in constructing the components.

Ulrich presents us with another version of the control flow, this time using a hash to keep track of values taken by the output list to make sure no duplicates are presented.

```perl
    my @padovans = ( 1 , 1 , 1 ) ;
    my @padovanPrimes ;
    my %inserted ;
    while ( scalar( @padovanPrimes != 10 ) ) {
      push @padovans , $padovans[0] + $padovans[1] ;
      my $last = $padovans[ -1 ] ;
      if ( isPrime( $last )) {
          if ( not exists( $inserted{ $last } )) {
        push @padovanPrimes , $last ;
          }
          $inserted{$last}++ ;
      }
      shift @padovans ;
    }
    map {print "$_ "} @padovanPrimes ;
```

[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/pokgopun/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/pokgopun/go/ch-2.go)

PokGoPun seems to have wandered in the forest of primality checking, trying a few approaches before landing on an alternative implementation of the 6*k* ± 1 test. As all primes fit this pattern we only need to check factors of this form up to the square root, which for large numbers runs about 6 times faster than checking all possible factors in the range.

Of several `isPrime()` functions included, `isPrimeX()` seems the most sophisticated version.

```perl
    sub isPrimeX{
        my $n = shift;
        return $n > 1 if $n <= 3;
        return 0 if $n % 2 == 0 || $n % 3 == 0;
        my $i = 5;
        while ( $i**2 <= $n){
        	return 0 if $n % $i == 0 || $n % ($i + 2) == 0;
        	$i += 6;
        }
        return 1;
    }
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/roger-bell-west/javascript/ch-2.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/roger-bell-west/kotlin/ch-2.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/roger-bell-west/lua/ch-2.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/roger-bell-west/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/roger-bell-west/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 154: Missing Padovan](https://blog.firedrake.org/archive/2022/03/The_Weekly_Challenge_154__Missing_Padovan.html)

As an alternative, Roger provides us with another implementation of the 6*k* ± 1 primality test to look at.

As a simple up/down test for primality is asking for much less data than a full factorization, there are a large number of techniques that have been developed that will determine *whether* a factor exists without actually wasting resources determining its value.


```perl
    sub isprime {
      my $candidate=shift;
      if ($candidate==2) {
        return 1;
      } elsif ($candidate==3) {
        return 1;
      } elsif ($candidate % 2 == 0) {
        return 0;
      } elsif ($candidate % 3 == 0) {
        return 0;
      }
      my $anchor=0;
      my $limit=int(sqrt($candidate));
      while (1) {
        $anchor+=6;
        foreach my $t ($anchor-1,$anchor+1) {
          if ($t > $limit) {
            return 1;
          }
          if ($candidate % $t == 0) {
            return 0;
          }
        }
      }
    }
```



[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/colin-crain/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/colin-crain/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Padovans Dog - Programming Excursions in Perl and Raku](https://colincrain.com/2022/03/06/padovans-dog/)

From my own solution I present a novel manner of computing the Padovans, by just maintaining a queue of three ascending values in a short array. By careful manipulation of Perl's rules of assignment, we take the second value and add it to the value returned by shifting the first element off the array. Now the array has only two elements in indices 0 and 1,  and the summed new computation is pushed into the third position. As we only ever care about the last element at any one time this is all the data we need to keep.

I was pleased at the way this turned out. The order of the operations in the second line  is very important.

```perl
    sub next_pad {
        state @p = (1,1,1);
        push @p, $p[1] + shift @p;
        return $p[-1];
    }
```

To test primality I used one step above the most basic form, using trial division for 2 followed by the odd numbers.

```perl
    sub is_prime ($n) {
        my $sqrt = int sqrt $n;
        return 0 unless $n % 2 or $n == 2;

        for (my $x = 3; $x <= $sqrt; $x += 2) {
            return 0 unless $n % $x;
        }
        return 1;
    }
```

And as for the pesky extra value, it was clear to me that any duplicate would have to be a direct side-effect of the triplet of 1s at the beginning, so I installed a check to skip adding a value it was the same as the last value in the output list.

```perl
    while ( @out < 10) {
        my $c = next_pad();
        next if (defined $out[-1] and $out[-1] == $c);
        push @out, $c if is_prime( $c ) ;
    }
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/dave-jacoby/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[A Quick One While I Do Other Things: Weekly Challenge #154 | Committed to Memory](https://jacoby.github.io/2022/02/28/a-quick-one-while-i-do-other-things-weekly-challenge-154.html)

Finally we'll end with Dave, who provides us with a compact solution that finds the solution in short order. In all practicality this is all that we really need for this problem. For the ten items requested none of this fascinating optimization were seen represented is actually necessary, you know. As written this serves its goal, and it's important to keep your eye on the prize.

```perl
    use List::Util qw{ uniq };

    push @padovan, 1, 1, 1;
    while ( scalar @primes < 10 ) {
        my $n = $padovan[-3] + $padovan[-2];
        push @padovan, $n;
        push @primes,  $n if is_prime($n);
        @primes = uniq @primes;
    }

    say join ' ', @primes;

    sub is_prime ($n) {
        for ( 2 .. sqrt $n ) { return unless $n % $_ }
        return 1;
    }
```



## Blogs and Additional Submissions in Guest Languages for Task 2:


[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/abigail/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/abigail/awk/ch-2.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/abigail/bash/ch-2.sh), [Basic](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/abigail/basic/ch-2.bas), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/abigail/bc/ch-2.bc), [Befunge-93](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/abigail/befunge-93/ch-2.bf93), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/abigail/c/ch-2.c), [Cobol](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/abigail/cobol/ch-2.cb), [Csh](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/abigail/csh/ch-2.csh), [Erlang](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/abigail/erlang/ch-2.erl), [Forth](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/abigail/forth/ch-2.fs), [Fortran](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/abigail/fortran/ch-2.f90), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/abigail/go/ch-2.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/abigail/java/ch-2.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/abigail/lua/ch-2.lua), [M4](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/abigail/m4/ch-2.m4), [Mmix](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/abigail/mmix/ch-2.mms), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/abigail/node/ch-2.js), [Ocaml](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/abigail/ocaml/ch-2.ml), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/abigail/pascal/ch-2.p), [Php](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/abigail/php/ch-2.php), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/abigail/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/abigail/python/ch-2.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/abigail/r/ch-2.r), [Rexx](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/abigail/rexx/ch-2.rexx), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/abigail/ruby/ch-2.rb), [Scheme](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/abigail/scheme/ch-2.scm), [Sed](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/abigail/sed/ch-2.sed), [Sql](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/abigail/sql/ch-2.sql), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/abigail/tcl/ch-2.tcl)


[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/adam-russell/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/adam-russell/prolog/ch-2.p)


&nbsp;&nbsp;**blog writeup:**
[Padovan Prime Directive: Find the Missing Permutations — Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/03/06)

&nbsp;&nbsp;**blog writeup:**
[Padovan Prime Directive: Find the Missing Permutations — Prolog — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/03/06)



[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/arne-sommer/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/arne-sommer/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Padovan is Missing with Raku and Perl](https://raku-musings.com/padovan-missing.html)


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/athanasius/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/athanasius/raku/ch-2.raku)


[**Cheok-Yin Fung:**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/cheok-yin-fung/perl/ch-2.pl)

&nbsp;&nbsp;**alternative solution:**
[pre-calculated prime list](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/cheok-yin-fung/perl/ch-2-test-pre_calc.pl)


[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/e-choroba/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Perl5](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/e-choroba/perl5/ch-2.pl)


[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/jaldhar-h-vyas/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/jaldhar-h-vyas/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 154](https://www.braincells.com/perl/2022/03/perl_weekly_challenge_week_154.html)


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/james-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #154](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-154/james-smith)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/laurent-rosenfeld/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/laurent-rosenfeld/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 154: Missing Permutations and Padovan Primes](http://blogs.perl.org/users/laurent_r/2022/03/perl-weekly-challenge-154-missing-permutations-and-padovan-primes.html)


[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/lubos-kolouch/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/lubos-kolouch/python/ch-2.py)


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-154/wlmb/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 154 – W. Luis Mochán](https://wlmb.github.io/2022/02/28/PWC154/)



------------------------------------------





---

<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>

<center>
<h1 id="PWC154BLOGS">_________ THE BLOG PAGES _________</h1>
</center>


---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, by some miracle I somehow continue to maintain my bearings.**

**Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your Unquenchable *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC154BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *FOLLOW* these *BLOG* *LINKS*:

**( ...*don't think, trust your training, you're in the zone, just do it ...* )**


**Adam Russell**

 * [Padovan Prime Directive: Find the Missing Permutations — Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/03/06) ( *Perl* )
 * [Padovan Prime Directive: Find the Missing Permutations — Prolog — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/03/06) ( *Prolog* )

**Arne Sommer**

 * [Padovan is Missing with Raku and Perl](https://raku-musings.com/padovan-missing.html) ( *Perl & Raku* )

**Bruce Gray**

 * [TWC Episode 154 - Padawan Missing | Bruce Gray](http://blogs.perl.org/users/bruce_gray/2022/03/twc-episode-154---padawan-missing.html) ( *Perl & Raku* )

**Colin Crain**

 * [Who Took My Cheese? - Programming Excursions in Perl and Raku](https://colincrain.com/2022/03/05/who-took-my-cheese/) ( *Perl & Raku* )
 * [Padovans Dog - Programming Excursions in Perl and Raku](https://colincrain.com/2022/03/06/padovans-dog/) ( *Perl & Raku* )

**Dave Jacoby**

 * [A Quick One While I Do Other Things: Weekly Challenge #154 | Committed to Memory](https://jacoby.github.io/2022/02/28/a-quick-one-while-i-do-other-things-weekly-challenge-154.html) ( *Perl* )

**Flavio Poletti**

 * [PWC154 - Missing Permutation - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/03/02/pwc-154-missing-permutation/) ( *Perl & Raku* )
 * [PWC154 - Padovan Prime - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/03/03/pwc154-padovan-prime/) ( *Perl & Raku* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 154](https://www.braincells.com/perl/2022/03/perl_weekly_challenge_week_154.html) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #154](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-154/james-smith) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 154: Missing Permutations and Padovan Primes](http://blogs.perl.org/users/laurent_r/2022/03/perl-weekly-challenge-154-missing-permutations-and-padovan-primes.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 154: lazyness and recursion – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/02/28/PerlWeeklyChallenge154.html#task1) ( *Raku* )

 * [Perl Weekly Challenge 154: lazyness and recursion – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/02/28/PerlWeeklyChallenge154.html#task1pg) ( *PostgreSQL* )
 * [Perl Weekly Challenge 154: lazyness and recursion – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/02/28/PerlWeeklyChallenge154.html#task1plperl) ( *PL/Perl* )

**Mark Senn**

 * [Missing Permutation](https://engineering.purdue.edu/~mark/twc-154-1.pdf) ( *Raku* )
 * [Padovan Prime](https://engineering.purdue.edu/~mark/twc-154-2.pdf) ( *Raku* )

**Peter Campbell Smith**

 * [Perming Perl plus Padovan primes](https://pjcs-pwc.blogspot.com/2022/02/perming-perl-plus-padovan-primes.html) ( *Perl* )

**Roger Bell_West**

 * [RogerBW's Blog: The Weekly Challenge 154: Missing Padovan](https://blog.firedrake.org/archive/2022/03/The_Weekly_Challenge_154__Missing_Padovan.html) ( *Perl & Raku* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 154 – W. Luis Mochán](https://wlmb.github.io/2022/02/28/PWC154/) ( *Perl* )
