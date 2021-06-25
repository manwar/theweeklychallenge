---
author:       Colin Crain
date:         2021-06-25T00:00:00
description:  "Colin Crain › Perl Weekly Review #115"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #115"
image:        images/blog/p5-review-challenge-115.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-114/).* )

Welcome to the Perl review for **Week 115** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-115/) or the summary [**recap**](/blog/recap-challenge-115/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC115TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC115TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC115BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC115TASK1}

# String Chain
*Submitted by: Mohammad S Anwar*<br>
You are given an array of strings.

Write a script to find out if the given strings can be chained to form a circle. Print 1 if found otherwise 0.

A string $S can be put before another string $T in circle if the last character of $S is same as first character of $T.

**Examples:**
```
    Input: @S = ("abc", "dea", "cd")
    Output: 1 as we can form circle e.g. "abc", "cd", "dea".

    Input: @S = ("ade", "cbd", "fgh")
    Output: 0 as we can't form circle.
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/abigail/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/adam-russell/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/arne-sommer/perl/ch-1.pl),
[**Bartosz Jarzyna**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/brtastic/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/colin-crain/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/polettix/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/jo-37/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/laurent-rosenfeld/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/perlboy1967/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/pete-houston/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/sgreen/perl/ch-1.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/stuart-little/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/wlmb/perl/ch-1.pl)


There were 19 working submissions for the first task this past week. At least I think there were. Something like that, at least.

To explain:

The definition of this challenge proved to be a bit trickier and more confusing than it first appeared, with a few undefined loose ends arising that needed to be clarified before attempting a solution. For instance, although there was a large degree of consensus that every string needed to be used in a chain, this is not actually clearly stated, and so this wasn't true for all submissions. Although on the whole I like variation in both the methods and the questions, in the end I do need to spend a cetain amount of extra time figuring out exactly what question is being answered. With my guiding rule being that the solution successfully solves the interpretation of the task, this understanding is pretty essential, and unfortunately not always obvious.

So what did we see? It turns out a lot of different types of chainings can arise. We can, of course, have one complete chain that uses all of the elements and links back to the beginning of the first link. Then again we can also have the case where the links may cycle, but form two or more independant loops, and we need to watch for this. Take these six strings, for example, that all get used in the following configuration:

**ab** → **bc** → **ca**  <br>
**xy** → **yz** → **za**

We end up with two cycles and ne'er the twain shall meet.

Or here's a tricky one — a chain that crosses over itself in the middle so it *appears* to be a two independant chains, but still can be configured as one single linkage:

**ab** → **bc** → **ca**  ( → ) <br>
**ax** → **xy** → **ya**

This extra interconnectedness had the potential to cause some confusion, and needed to be accommodated with some of the techniques we saw. At the end we'll touch on an algorithm specifically designed to address this circumstance.

Or what about duplicate strings? Again the case is undefined.

**aaa** → **aaa** → **aaa** → **aaa** → **aaa** → **aaa**

This degenerate case obviously will cycle, but if we just remove "aaa" from the running after using it, well, that's not going to work. Again we did see this complication out in the wild.

I ended up thinking about failure modes *way* too much, and ended mostly throwing my hands in the air and moving forward as best I could. So, as I said, I *think* they work. Thinking up new ways to break stuff, despite appearances, does not give me pleasure and I'd much rather move on. Caveat emptor.

There was one situation that stood out, however, which was simply testing for matching numbers of starting and ending instances for characters amongst the set of strings. Although if this is *not* true a single chain can never be formed, if this *is* true we cannot know that a connective through-line will trace a single loop without further testing. As this algorithm wants to use every string but cannot say whether a single chain can be formed I concluded in this case this technique on its own was not up to to the task. Sorry. For ways around this have a look to the final graph theory section.

## start TRACING CONNECTIONS
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/colin-crain/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/e-choroba/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/james-smith/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/pete-houston/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/sgreen/perl/ch-1.pl), and
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/stuart-little/perl/ch-1.pl)

By keeping track of lists of strings that start with a certain letter, limiting options as strings are used in a chain attempt, we can start tracing partial pathways until we find one that finishes. Although recursion is well suited to the task its not a necessary technique, and we saw this done with various loop constructs as well.

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/sgreen/perl/ch-1.pl)

Simon starts the ball rolling with a nice demonstration of a recursive search. We're passed in a partial chain as an array with an accompanying list of remaining strings. Inside, we filter the remaining list for those that start with the last letter in our partial chain and then for each word found we try adding it to the partial, removing the first instance of the word from the remaining list and going through again.

The base cases are running out of possibilities when we still have strings remaining, a no go, and successfully running out of remaining words. Should this happen we still need to check to see whether we can loop back to the start, but if we can we return 1.

If a 1 is ever returned it is immediately passed through as the recursion collapses.

```perl
    sub _reduce_list {
        my ( $used, $list ) = @_;

        if (@$list) {
            # We have words to use. Choose the words that begin with the last
            #  letter of the last word
            my @can_use = grep { substr( $_, 0, 1 ) eq substr( $used->[-1], -1 ) } @$list;

            # Recursive call this function with each of these words
            foreach my $word (@can_use) {
                # Return '1' if we have a result
                my $result = _reduce_list( [ @$used, $word ], _remove_word( $word, $list ) );
                return 1 if $result;
            }

            # There is no solution that exist
            return 0;
        }

        # We have use all the words. We need to check we can complete the
        #  circle by checking if the first letter of the first word is the
        #  same as the last letter of the last word
        return substr( $used->[0], 0, 1 ) eq substr( $used->[-1], -1 ) ? 1 : 0;
    }
```

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/colin-crain/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/colin-crain/raku/ch-1.raku)

For my own version of recursion I mixed it up a little, as I find simple 1/0 results a little... boring if you must know. I prefer to witness the glorious product of my data-processing, so instead of returning 1 in a positive result I return a joined-up string from the solution array instead. Practically, the base cases remain the same, with the control flow slightly reordered.

If an string is returned we present it or say "no chain".

```perl
    sub chain ($strings, $chain = []) {
        $chain->[0] = shift $strings->@* if not defined $chain->[0];

        ## base: if no more in pool check last loop link
        if (scalar $strings->@* == 0) {
            return join ' ', $chain->@*
                if substr($chain->[-1], -1) eq substr($chain->[0], 0, 1);
            return undef;
        }

        my @next = grep { substr($chain->[-1], -1) eq substr($_, 0, 1) } $strings->@*;

        ## base: no next link and still more in pool fails
        return undef if @next == 0 and $strings->@* > 0;

        for my $link (@next) {
            my @possible = $strings->@*;
            my $idx = first { $possible[$_] eq $link } (0..$#possible);
            splice @possible, $idx, 1;

            my $result = chain( \@possible, [ $chain->@*, $link ] );

            return $result if defined $result;
        }
        return undef;
    }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/e-choroba/perl/ch-1.pl)

Choroba presents us with two ways to proceed: a depth-first recursive solution and a breadth-first version that loops while there are still paths to check. The `can_chain()` routine verifies whether the end character in the first argument matches the first character in the second. I like the way an array slice is used to perform the final check. Slices are just such a terrific way to select out portions or rearrange the elements in an array.

```perl
    sub string_chain_bf {
        my ($start, @strings) = @_;
        my @paths = ([$start, \@strings]);
        while (@paths) {
            my @next;
            for my $path (@paths) {
                my ($so_far, $remain) = @$path;
                return 1 if ! @$remain && can_chain(@$so_far[-1, 0]);

                my %tried;
                for my $i (0 .. $#$remain) {
                    next if $tried{ substr($remain->[$i], 0 , 1)
                                    . substr $remain->[$i], -1 }++;

                    next unless can_chain($so_far->[-1], $remain->[$i]);

                    push @next, [[@$so_far, $remain->[$i]],
                                 [@$remain[0 .. $i - 1, $i + 1 .. $#$remain]]];
                }
            }
            @paths = @next;
        }
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/james-smith/perl/ch-1.pl)

James gives us a slightly simpler version of his usual comparative analysis, presenting to us today a recursive against an iterative case. He states that once the input list becomes long enough the iterative strongly takes the lead. Of note are the two lines near the top that quickly filter the frequency counts of the letters going in versus the letters exiting the strings. As we said earlier we can't prove the existence of a single path if these correspondances do line up, but if they don't there's no point in continuing.

```perl
    ( $F{ substr $_, 0, 1 }++, $F{    substr $_, -1   }-- ) foreach @_;
    return 0 if grep {$_} values %F;
```

Here is the iterative version:

```perl
    sub circ_single_connected {
      my(%F,%ends);

      ## %F    contains the number of starts - number of ends...
      ## %ends contains a hash of hashes - first key is the first letter of the world,
      ##                                   2nd level end of the world.

      ( $F{ substr $_, 0, 1 }++, $F{    substr $_, -1   }-- ) foreach @_;
      ## Rule out those that cannot be connected in loop....
      return 0 if grep {$_} values %F; ## This quickly filters out those cases in which we
                                       ## can't join end on end... now there is a harder
                                       ## problem coming up which is to work out if there
                                       ## is a multi-loop option

      ## Now we have to see if we have connectivity...
      ## Take any (the first) element...

      $ends{ substr $_, 0, 1 }{ substr $_, -1 }++ foreach @_;
      my @seeds = [keys %ends]->[0];

      while(@seeds) { ## If we have any seeds then we
        ## Remove the information about ends from the list for each
        ## letter in the seed list.. (start words)
        ## For each of these we collect the end letters (using a hash
        ## to uniqueify them)
        my %x  = map { $_ => 1 }
                 map { keys %{ delete $ends{$_} } }
                 @seeds;
        ## We then remove any letters which we have already processed
        ## {i.e. those that have already been removed from %ends}
        @seeds = grep { exists $ends{$_} } keys %x;
      }
      ## If we have stuff left it ends there will be 2 or more connected loops.
      return keys %ends ? 0 : 1;
      ## Now we start at any point and get the first circle....
    }
```

## find ANY CYCLE
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/abigail/perl/ch-1.pl), and
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/laurent-rosenfeld/perl/ch-1.pl)

A few readings of the description decided that any cyclic grouping would satisfy the conditions, even if not all of the strings were utilised. This is arguably a *more* exhaustive search as every string must be considered to possibly be part of a loop before deciding there are no cycles to be found. On the other hand, any circuit, no matter how small, can be said to satisfy the conditions, so we're more likely to find one quickly and stop futher search.

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/laurent-rosenfeld/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/laurent-rosenfeld/raku/ch-1.raku)

Laurent states he saw a request for any possible chain amongst the input strings, so that is the solution he brings to us today. Although this was an uncommon reading, I think the wording is sufficiently imprecise to warrant either interpretation. The code is shorter but not necessarily simpler. It's just... different.

```perl
    sub find_circle {
        # remove useless strings starting and ending with the same letter
        my @s = grep { not /^(\w)\w+$0$/} @_;
        my %first = map { (substr $_, 0, 1) => 1 } @s;
        my %last  = map { (substr $_, -1, 1) => 1 } grep { exists $first{substr $_, -1, 1 }}  @s;
        return scalar keys %last > 1 ? 1 : 0;
    }
    say find_circle @s;
```
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/abigail/perl/ch-1.pl)

**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/abigail/awk/ch-1.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/abigail/bash/ch-1.sh), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/abigail/c/ch-1.c), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/abigail/lua/ch-1.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/abigail/node/ch-1.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/abigail/python/ch-1.py), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/abigail/ruby/ch-1.rb)

...And while we're on the subject of different, Abigail brings us a truly unique offering; sharing, however Laurent's interpretation of the chaining requirements.

The process uses a what is known as a [transitive closure](https://en.wikipedia.org/wiki/Transitive_closure#In_graph_theory), which is generated using an algorithm in a module they themselves wrote and uploaded to cpan, [`Algorithm::Graphs::TransitiveClosure`](https://metacpan.org/pod/Algorithm::Graphs::TransitiveClosure).

The explanation is rather technical, but gone over quite well in [their extensive writeup](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-115-1.html). Of special note here are the guest language submissions, which require the Floyd-Warshall algorithm to be re-implemented,

```perl
    use Algorithm::Graphs::TransitiveClosure qw [floyd_warshall];

    while (<>) {
        #
        # Read in the words, store them bucketed by first letter,
        # and in a list. We're assuming each set is on a separate
        # line separated by white space.
        #
        # We will create a (directed) graph from the strings in a
        # set; each string gives us an edge from the first letter
        # of the string to the last letter. (Hence, the nodes in
        # this graph are the first and last letters of the strings).
        #
        my $graph;
        foreach my $node (split) {
            $$graph {substr $node, 0, 1} {substr $node, -1} = 1;
        }

        #
        # Calculate the transitive closure.
        #
        floyd_warshall $graph;

        #
        # We do have a loop iff we have a node which can reach itself.
        #
        say grep ({$$graph {$_} {$_}} keys %$graph) ? 1 : 0;
    }
```

## find ALL THE CYCLES
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/arne-sommer/perl/ch-1.pl),
[**Bartosz Jarzyna**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/brtastic/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/dave-jacoby/perl/ch-1.pl), and
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/perlboy1967/perl/ch-1.pl)

Several solutions used permutations to search through all possible ways to connect the strings, validating each arrangement to find the first one to satisfy the criteria. Although potentially very complex, should any complete cycle be found further seaching is unnecessary. So good luck out there.

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/dave-jacoby/perl/ch-1.pl)

Dave uses `Algorithm::Permute` to construct every arrangement of the input strings. From there he can iterate through each to see whether the letters align correctly. If a circle is found the strings are output in the new ordering, which is a nice touch.

```perl
    use Algorithm::Permute;

    sub is_chain ( @links ) {
        my $p = Algorithm::Permute->new( [@links] );
        while ( my @res = $p->next ) {
            my $i = join '-', @res;
            my $c = 1;
            if ( f_char( $res[0] ) eq l_char( $res[-1] ) ) {
                for my $i ( 1 .. -1 + scalar @res ) {
                    $c++ if l_char( $res[ $i - 1 ] ) eq f_char( $res[$i] );
                }
                return 1 if $c == scalar @links;
            }
        }

        return 0;
    }

    sub f_char( $str ) {
        return substr( $str, 0, 1 );
    }

    sub l_char( $str ) {
        return substr( $str, -1 + length $str, 1 );
    }
```


[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/perlboy1967/perl/ch-1.pl)

Niels has gone above and beyond, creating a regular expression solution for us. First he uses one expression to reduce the input strings to just the first and last characters, simplifying the subsequent alignment task. A further regex is then generated according to the number of input strings, to internally match the correspondence within a joined-up version of the input. It's wild, to say the least.

Here's an example of the generated regex for a list of four strings:

```perl
    (?^u:^(.))(.)\2(.)\3(.)\4\1$
```

I'm impressed. The regex is then applied to every permutation of the input list to see if any of them match up.

```perl
    use Algorithm::Combinatorics qw(permutations);

    sub isStringChain {
      my (@l) = @_;

      # We only need the first and last char
      map { s/^(.).*?(.)$/$1$2/ } @l;

      # Build regexp
      my $re = qr '^(.)'.join('',map {"(.)\\$_"} (2 .. scalar @l)).'\\1$';

      my $iter = permutations(\@l);
      while (my $ar = $iter->next()) {
        if (join('',@$ar) =~ m#$re#) {
          return 1;
        }
      }

      return 0;
    }
```

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/arne-sommer/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/arne-sommer/raku/ch-1.raku)

Arne provides us with an [excellent writeup on the challenge](https://raku-musings.com/hamilton-unchained.html), going into quite a bit of detail on directed graphs and Hamiltonian Circuits, which in turn makes a nice segue into our next section. His solution uses `Algorithm::Combinatorics` to provide a list of permutation possibilities to examine.

```perl
    for my $list (permutations(\@ARGV))
    {
      my @perm = @$list;

      say ": perm: " . join(", ", @perm) if $verbose;

      if (is_circle(@perm))
      {
        say 1;
        exit;
      }
    }

    say 0;

    sub is_circle (@list)
    {
      my $first       = shift(@list);
      my $first_start = substr($first, 0,1);
      my $second;

      while (@list)
      {
        $second = shift(@list);
        return 0 if substr($first,-1,1) ne substr($second,0,1);
        $first  = $second;
      }

      return 1 if $first_start eq substr($second,-1,1);
      return 0;
    }
```

## some GRAPH THEORY
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/adam-russell/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/cheok-yin-fung/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/jo-37/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/wlmb/perl/ch-1.pl)

Several submissions approached a solution to some degree mathematically, using graph theory. There are two basic ways to approach this, if you're comfortable with gross simplifications. The first way considers the strings to be the edges of a graph, connecting vertices comprised of characters, in turn defined by those string beginnings and ends. The edges have an explicit direction, going from a leading character to a trailing, so what we end up with is a form of what is known as a directed graph. Our goal, then, is to trace a line traversing every edge of this graph and ending up where we started. This path is known as an [Eulerian Circuit](https://en.wikipedia.org/wiki/Eulerian_path).

Alternately, we can consider the *vertices* of a graph to be the strings, and try and trace a path through them all that fits a rule — that the directed edge arriving matches the first letter, and the edge departing matches the last. A path connecting every vertex in a graph, ending at the vertex where it began, is known as a [Hamiltonian Cycle](https://en.wikipedia.org/wiki/Hamiltonian_path).

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/adam-russell/perl/ch-1.pl)

Adam has previously made mention of his interest in solving certain problems using the `Graph` module, and this task seems made to fit. The idea is to construct a directed graph from the data, then, once formed, determine whether the graph overview of connected parts is comprised of a single entity or a collection of smaller segments. This will tell us whether all the vertices can be connected to form a single path. The function used here is `weakly_connected_components()`.

```perl
    use Graph;
    use Graph::Easy::Parser;

    sub build_graph{
        my @words;
        my %first_letter_name;
        my $graph = new Graph();
        while(my $s = <DATA>){
            chomp($s);
            my $first_letter = substr($s, 0, 1);
            if($first_letter_name{$first_letter}){
                push @{$first_letter_name{$first_letter}}, $s;
            }
            else{
                $first_letter_name{$first_letter} = [$s];
            }
            push @words, $s;
        }
        for my $word (@words){
            $graph->add_vertex($word) if !$graph->has_vertex($word);
            my $child_nodes = $first_letter_name{substr($word, -1)};
            for my $n (@{$child_nodes}){
                $graph->add_vertex($n) if !$graph->has_vertex($n);
                $graph->add_weighted_edge($word, $n, (-1 * length($n))) if !$graph->has_edge($word, $n);
                $graph->delete_edge($word, $n) if $graph->has_a_cycle();
            }
        }
        return $graph;
    }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/wlmb/perl/ch-1b.pl)

I suppose you could consider Luis' trio of submissions, although notably different from each other, continuous refinements toward a more perfect solution.

The [first method]((https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/wlmb/perl/ch-1.pl)) involved constructing a connectivity matrix from the input data and performing some linear algebra on it using the PDL. This is a novel approach and worthy of study, but he mentions it is imperfect because certain crossed path groups can confuse it.

The [second approach](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/wlmb/perl/ch-1a.pl) comes from a very different direction. This keeps track of the actual strings instead of data representations of them, so an actual chain, if found, can be output. The algorithm produced looks a lot like one of the iterative pathfinding solutions we saw earlier. It, however, can also be confused, this time by duplicate strings.

The third time is the charm. Returning to the PDL, he now relates the graph to the [Königsberg bridges](https://en.wikipedia.org/wiki/Seven_Bridges_of_Königsberg) problem. In his own words:

>A mathematician (my son) suggested that the problem could be mapped to that of the Königsberg (directed) bridges if I make a graph where the land areas (the nodes) correspond to the the first and last letters, and the bridges (the edges) correspond to the words that connect the first letter to the last. Then the circle could be found if, for each node, the number of incoming and outgoing edges coincide, and if the graph is not disjoint.

The [writeup Luis provides as accompaniment](https://wlmb.github.io/2021/06/01/PWC115/) walks us through all three methods in great detail, even, quite respectably, including the errors he found along the way. I found it quite informative and encourage you to have a look for yourself.

```perl
    use Exporter::Renaming; # prevent name clashes
    use List::Util Renaming=>[uniq=>'lu_uniq', reduce=>'lu_reduce', reductions=>undef];
    use PDL;
    use PDL::NiceSlice;

    my @strings = @ARGV;
    die "Usage ./ch - 1.pl string1 [string2...]" unless @strings;
    my @letters = lu_uniq map{ ( substr( $_, 0, 1 ), substr( $_, -1, 1 ) ) } @strings;
    my %index;
    @index{ @letters } = ( 0..@letters - 1 );
    my $C = zeroes( scalar( @letters ), scalar( @letters ) ); #connectivity matrix
    $C->( $_->[0], $_->[1] ) .= $C->( $_->[0], $_->[1] )+1
            foreach map {  [$index{ substr( $_, 0, 1 ) }, $index{ substr( $_, -1, 1 ) }]  } @strings;
    my $balanced = all( $C->sumover == $C->transpose->sumover );
    my $final = lu_reduce { $a|$b } (
        reductions { $a x $b } ( identity( scalar @letters ), ( $C ) x ( @letters - 1 ) ) );
    my $reachable = all( $final != 0 );
    say "Input: ", join " ", @strings;
    say "Output: ", $balanced &&$reachable? 1:0;
```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/cheok-yin-fung/perl/ch-1.pl)

The difference between simply counting up the instances of a character as a vertex, the "degree" as it is known; making sure that the number is even, for one in and one out each; and proving that we have a proper Eulerian Circuit is whether the resulting graph creates a *single connected component*.

CY breaks her determination of a Eulerian Circuit into two parts: counting degrees and determining whether the result is all connected. Here is the second phase of her algorithm, determining the single connectivity. She references this method [in her writeup](https://e7-87-83.github.io/coding/challenge_115.html) as [Hierholzer's algorithm](https://en.wikipedia.org/wiki/Eulerian_path#Hierholzer's_algorithm). Essentially it addresses the issue of being able to construct multiple closed loops within as set of even-numbered vertices, where the loops touch and can be recombined to form a complete tour of the vertices.

```perl
    sub is_connected {
        my @edges = @_;
        my %collected;
        my %vertex_neigh;
        for my $str (@edges) {
            my $head = substr $str, 0, 1;
            my $tail = substr $str, -1, 1;
            $collected{$head} = -1;
            $collected{$tail} = -1;
            push $vertex_neigh{$head}->@*, $tail;
            push $vertex_neigh{$tail}->@*, $head;
        }
        # depth-first search
        my @stack = substr($edges[0], 0, 1);
        while (scalar @stack != 0) {
            my $cur = pop @stack;
            if ($collected{$cur} == 1) {
                next;
            }
            else {
                for my $neigh ($vertex_neigh{$cur}->@*) {
                    push @stack, $neigh if $collected{$neigh} == -1;
                }
                $collected{$cur} = 1;
            }
        }
        #check connectedness
        for my $letter (keys %collected) {
            if ($collected{$letter} == -1) {
                return 0;
            }
        }
        return 1;
    }

```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/jo-37/perl/ch-1.pl)

We've touched on quite a few different ways to approach the string challenge today. Here to close things down is Jorg, who, like CY before him, implements Hierholzer's algorithm to construct a Eulerian cycle. To start, we have the setup, with nice commenting interspersed:

```perl
    sub has_string_circle {
        # Create a multidigraph from the strings.
        my $g = Graph->new(multiedged => 1);
        for (@_) {
            # The core of a multidigraph: Map each edge to its source and
            # target vertices.  This construction ensures that there are no
            # isolated vertices.
            # Get the string's first and last character, even if there's
            # only one.  Convert to lowercase normalized form allowing
            # case-insensitive chaining of extended grapheme clusters as
            # first and last "characters".
            my @e = map NFD(lc), /^(\X)/, /(\X)$/;
            my $id = $g->add_edge_get_id(@e);
            # Assign the string as an edge attribute if an actual string
            # circle is requested.
            $g->set_edge_attribute_by_id(@e, $id, str => $_) if $verbose;
        }

        # The "Graph" package's method "is_strongly_connected" dies if
        # applied to a multigraph.  The corollary below offers a
        # simple workaround: Checking the weak connectivity suffices and
        # "is_weakly_connected" appears to work for multigraphs.
        return unless $g->is_weakly_connected;

        # Check the degree of all vertices.
        for my $v ($g->vertices) {
            return if $g->vertex_degree($v);
        }

        # Here the graph is Eulerian.

        # Construct and display a string circle if requested.
        build_circle($g) if $verbose;

        return 1;
    }
```

Then comes the cycle using Hierholzer's algorithm, to construct a cycle and expand it to accommodate unused vertex connections if necessary. So here it is in its entirely, because some things are best left intact. Enjoy.

```perl
    # Implementation of Hierholzer's algorithm (see below for a
    # justification):
    # - Start with a random vertex v.
    # - Build a cycle c starting from and ending in v.
    # - Repeat:
    #   * Find a new vertex v1 in c that has an outgoing edge excluded
    #     from c.
    #   * If there is no such vertex, the cycle c is Eulerian. Stop.
    #   * Find a cycle c1 starting from and ending in v1, omitting all edges
    #     in c.
    #   * Join the cycle c1 with the existing cycle c.
    sub build_circle ($g) {
        my @circle;
        # Pick a random start vertex.  Loop while there is a vertex with an
        # unselected outgoing edge.
        for (my $v = ($g->vertices)[0];
                defined $v;
                $v = first {$g->out_degree($_)} map $_->[0], @circle) {
            # Find the vertex position in the (non-)existing circle.
            my $vpos = @circle ? firstidx {$_->[0] eq $v} @circle : 0;
            # Find a cycle through $v and join it with the circle.
            splice @circle, $vpos, 0, @{extract_cycle($g, $v)};
        }

        do {local $, = ', '; say map qq{"$_->[1]"}, @circle};
    }

    # Find a cycle starting from and ending in $vertex and remove the
    # selected edges on the way.
    sub extract_cycle ($g, $vertex) {
        my $v = $vertex;
        my @cycle;
        do {
            # Select a random outgoing multi-edge.
            my @e = ($g->edges_from($v))[0]->@*;
            # Select a random edge from the multi-edge.
            my $id = ($g->get_multiedge_ids(@e))[0];
            # Collect the edge's source vertex and the string.
            push @cycle, [$e[0], $g->get_edge_attribute_by_id(@e, $id, 'str')];
            # Remove the selected edge from the graph.
            $g->delete_edge_by_id(@e, $id);
            # Advance to the target vertex.
            $v = $e[1];
        } until ($v eq $vertex);

        \@cycle;
    }

```


## Additional Submissions in Guest Languages

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/polettix/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/polettix/raku/ch-1.raku)

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/roger-bell-west/perl/ch-1.pl)

**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/roger-bell-west/rust/ch-1.rs)


[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/stuart-little/perl/ch-1.pl)

**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/stuart-little/haskell/ch-1.hs), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/stuart-little/node/ch-1.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/stuart-little/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/stuart-little/raku/ch-1.p6)





---

# TASK 2 {#PWC115TASK2}

# Largest Multiple
*Submitted by: Mohammad S Anwar*<br>
You are given a list of positive integers (0-9), single digit.

Write a script to find the largest multiple of 2 that can be formed from the list.

**Examples**
```
    Input: @N = (1, 0, 2, 6)
    Output: 6210

    Input: @N = (1, 4, 2, 8)
    Output: 8412

    Input: @N = (4, 1, 7, 6)
    Output: 7614
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/abigail/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/arne-sommer/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/athanasius/perl/ch-2.pl),
[**Bartosz Jarzyna**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/brtastic/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/colin-crain/perl/ch-2.pl),
[**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/dave-cross/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/polettix/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/jo-37/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/pete-houston/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/sgreen/perl/ch-2.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/stuart-little/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/ulrich-rieke/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/wlmb/perl/ch-2.pl)


There were only 19 working submissions for the second task this past week. A few fell by the wayside, and we'll attend to those later.

But for now, the task involves two related parts: constructing the largest number from a sequence of digits, and constructing a number that's a multiple of two.

The first part, constructing the largest number given a pool of digits, is a task of using the digit values available to maximum efficiency — using the largest values as multipliers for the largest values of 10 in the final representation. Generally this was done with a method of sorting and joining, but there were a fair number of brute force approaches of trying all permutations and keeping the largest in a running tally.

To make a number a multiple of 2, we need to make sure the number has a multiple of two in the one's place, as I explain next. Combining the ideas of efficiently using digits and placing a multiple of 2 in the one's place — the least valuable to the number's final representation — means we need to find the smallest digit that's a multiple of 2 to make the number even, and make sure the number ends with it.

### the ODD THINGS about BEING EVEN

When we say a number is even, this is a bit of shorthand for saying it is divisible by 2 without any remainder. In order for this to be true, it can be shown that the number must end in a digit divisible by 2 in its least significant digit, the one's place. Quickly stated, we can break down a multi-positional number representation into a sum of digits times powers of 10: 123, "one hundred and twenty three" can be written

1 × 10<sup>2</sup> + 2 × 10<sup>1</sup> + 3 × 10<sup>0</sup>

Every power of 10 greater than 0 contains at least one 10, which itself is divisible by 2 as 5 × 2. A special case applies for the digit 0 but it all works out. Thus the components for all of the other digits in any number are divisible by 2 and the the test for evenness falls on the one's place alone.

This means that any number that is a multiple of, and hence divisible by, 2 must end in a number divisible by 2, or one of 2, 4, 6, 8 or 0. If none of the digit options supplied match up, then the task cannot be accomplished.

It's not made clear as to what we should do then. Some solutions simple sidestepped the issue and demanded valid input. Others came up with some sort of null response, such as printing "none", "NULL" or "no solution". Still others output 0, which brings with it certain questions, but sure, why not? Another valid choice we saw would be to fail gracefully and output absolutely nothing at all.

### ...what went wrong

A number of solutions, on identifying the smallest even digit, *swapped* this value with the last sorted element, rather than *moving* it to the end of the list. This takes the ordered last element and places it, unordered, into an arbitrary position in the list. If the even element is small, this is likely to work out by luck, but if the smallest even element is 8 it is more likely to fail, replacing a digit sorted high with a low value out-of-order.

## SORT and REORDER
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/cheok-yin-fung/perl/ch-2.pl),
[**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/dave-cross/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/e-choroba/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/jo-37/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/sgreen/perl/ch-2.pl), and
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/ulrich-rieke/perl/ch-2.pl)

The archetypical solution involved sorting the list of digits and isolating the smallest even digit, then recombining these ordered values to construct the final result. We saw the reconstruction accomplished in a variety of ways. For example, `splice()` was a common tool to pluck out the even digit, which was then added back to the end of the array. We also saw array slices employed to great effect, and even concatenation in the output stage, as here demonstrated in the opening example from Dave Cross:

[**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/dave-cross/perl/ch-2.pl)

Dave keeps his processes discreet, plucking out his selected even digit before sorting the remaining array in descending order. He lets `print` do his concatenation with the default undef value of `$,`, the Output Field Separator, between array elements. He then continues to `say` the plucked multiple of 2, completing the number with a linefeed affixed.

```perl
    my ($min_even, $min_even_idx);
    $min_even = 10;

    while (my ($i, $v) = each @ints) {
      if ($v < $min_even and ! ($v % 2)) {
        $min_even     = $v;
        $min_even_idx = $i;
      }
    }

    splice @ints, $min_even_idx, 1;

    print sort { $b <=> $a } @ints;
    say $min_even;
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/james-smith/perl/ch-2.pl)

James sorts his list descending for the first step, then iterates across it back to front to find the first even digit. After that a little careful rearranging with an array slice is done, we apply `join` and return our new number.

```perl
    sub biggest_even {
      my $ptr = my @digits = reverse sort @{$_[0]};

      ## Firstly grab the digits in reverse numerical order
      ## Keep looping backwards through the array until we
      ## find a digit which is even - if this is the case
      ## we move it to the back and return the list.

      while( $ptr-- ) {
        next if $digits[$ptr] & 1; ## Skip if odd...
        return join '',
          @digits[ 0..$ptr-1, $ptr+1..$#digits, $ptr ];
      }

      ## If we get to the start return 0 as there are no even digits!
      return '';
    }
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/jo-37/perl/ch-2.pl)

Jorg also uses an array slice to rearrange his list elements, after importing `lastidx` from `List::MoreUtils` to search his array from the tail end forward instead of an explicit decrementing index iterator.

I like this method of using an array slice to piece apart and recombine the elements.


```perl
    sub largest_even {
        # Sort digits descending.
        my @d = sort {$b <=> $a} @_;

        # Some zeros don't make a number.
        return if $#d && !$d[0];

        # Get the index of the smallest even digit.
        my $sei = lastidx {!($_ % 2)} @d;

        # Give up if none found.
        return if $sei < 0;

        # Reorder the digits to form the largest even number.
        join '', @d[0 .. $sei - 1, $sei + 1 .. $#d, $sei];
```

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/ulrich-rieke/perl/ch-2.pl)

**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/ulrich-rieke/cpp/ch-2.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/ulrich-rieke/haskell/ch-2.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/ulrich-rieke/raku/ch-2.raku)

Ulrich used a very straightforward technique, extracting the even digit with `splice` and then then using `push` to append it back to the array. It's very direct and to the point.

```perl
    my @sorted = sort { $b <=> $a } @numbers ;
    if ( scalar @sorted == scalar ( grep { $_ % 2 == 1 } @sorted ) ) {
        say "An even number can't be formed!" ;
        exit( 1 ) ;
    }
    my $len = scalar @sorted ;
    my $i = $len ;
    do {
        --$i ;
    } while ( not ( $sorted[ $i ] % 2 == 0 ) ) ;

    my $smallestEven = $sorted[ $i ] ;
    splice( @sorted , $i , 1 ) ;
    push( @sorted , $smallestEven ) ;
    say join( '' , @sorted ) ;
```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/cheok-yin-fung/perl/ch-2.pl)

CY states the process quite succinctly:

>"Sort the digits from largest to smallest, pick up the smallest even digit to be the last digit, then output the number."

Iterating through a reversed list of indices in the array, she finds the first regex match against a character class of even digits. If she finds a match, she then uses that index to grab out and save the value using `splice` before reattaching it using `push`.

```perl
    @digits = sort {$b <=> $a} @digits;

    my $least_sig_fig = -1;
    for (reverse 0..$#digits) {
        if ($digits[$_] =~ /[02468]/ ) {
            $least_sig_fig = splice(@digits, $_, 1);
            push @digits, $least_sig_fig;
            last;
        }
    }
    if ($least_sig_fig == -1) {
        print "NULL", "\n";
    }
    else {
        print join "", @digits;
        print "\n";
    }
```


### to REVERSE or not to REVERSE?
[**Bartosz Jarzyna**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/brtastic/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/colin-crain/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/polettix/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/pete-houston/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/roger-bell-west/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/wlmb/perl/ch-2.pl)

If we sort the digits from low to high, it's arguably a bit easier to move out our smallest multiple of two, by iterating across the list and grabbing the first instance. On the other hand, we do need to reverse the order again when we assemble the number, so any gain becomes a bit of a tradeoff, and in the end it largely fell to personal preference.

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/pete-houston/perl/ch-2.pl)

It's a quite subjective call to make, and I'm hardly unbiased, but I feel this approach yields more compact solutions, as we can move through the sorted digits forward and only need to `unshift` the even value we've spliced back into the array. Here Pete demonstrates the economy:

```perl
    # Sort ascending
    my @n = sort @ARGV;

    # Find the lowest even digit
    my ($i) = grep { 0 == $n[$_] % 2 } 0 .. $#n;

    # If no even digits the task is impossible
    die "No multiple of 2 possible with (@ARGV)\n" unless defined $i;

    # Print digits descending but with lowest even digit at the end
    unshift @n, splice (@n, $i, 1) if $i;
    say reverse @n;
```

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/colin-crain/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/colin-crain/raku/ch-2.raku)

As stated I'm not unbiased as I chose to reverse at the end myself. It does seem a nice and clean way to go about it.

```perl
    sub largest_two ($arr, $i = 0) {
        @arr = sort {$a-$b} @$arr;
        for (@arr) {
            if ($arr[$i] % 2 == 0) {
                unshift @arr, splice @arr, $i, 1;
                last;
            }
            $i++;
        }

        return $i < @arr ?  join '', reverse @arr
                         :  "none" ;
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/polettix/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/polettix/raku/ch-2.raku)

Another compact interpretation from Flavio:

```perl
    sub largest_multiple (@N) {
       @N = sort { $a <=> $b } @N;
       for my $i (0 .. $#N) {
          if ($N[$i] % 2 == 0) {
             my ($last) = splice @N, $i, 1;
             return join '', reverse(@N), $last;
          }
       }
       return;
    }
```

[**Bartosz Jarzyna**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/brtastic/perl/ch-2.pl)

By importing `first`, from the core module `List:Util`, to the `keys` — or index list — of the sorted array, Bartosz tightens the algorithm up even further.

```perl
    sub largest_multiple
    {
        my @digits = @_;

        my @sorted_asc = sort { $a <=> $b } @digits;
        my $smallest_index = first { $sorted_asc[$_] % 2 == 0 } keys @sorted_asc;

        die 'no result divisible by 2 can be achieved'
        	unless defined $smallest_index;

        my $smallest = splice @sorted_asc, $smallest_index, 1;
        return join '', reverse(@sorted_asc), $smallest;

    }
```


## PERMUTE, PERMUTE!
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/arne-sommer/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/dave-jacoby/perl/ch-2.pl), and
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/duncan-c-white/perl/ch-2.pl)

Looking at all numbers we can make and then filtering them to find that largest is always an option. It may end up taking a long time, but it will work, at least until something catches fire.

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/dave-jacoby/perl/ch-2.pl)

Dave brings in `Algorithm::Permute` to do his heavy lifting. This module produces an iterator function that mutates the input array in-place, returning the next permutation, working through the possibilities without the memory requirements of precomputing all solutions. All permutations are computed and joined; odd numbers are short-circuited out early and the remaining are compared against a running maximum.

```perl
    sub largest_even_number( @digits ) {
        my $max = -1;
        my $p = Algorithm::Permute->new( [@digits] );
        while ( my @res = $p->next ) {
            my $i = join '', @res;
            $i += 0;
            next unless $i % 2 == 0;
            $max = $i if $i > $max;
        }
        return $max;
    }
```

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/duncan-c-white/perl/ch-2.pl)

Duncan whips up his own generator to create new permutations on the fly, which is cool. Remember he uses `Function::Parameters` to supply his subroutine signatures, here using the module-supplied keyword `fun`. I was going to summarize it but decided that didn't do it justice, so here's nearly all of his solution:

```perl
    # try_all_perms( $callback, @digits );
    #    Permutation generator: Invoke $callback->( permutation )
    #    once for every permutation of @digits.
    #
    fun try_all_perms( $callback, @digits )
    {
        rec_allperm( $callback, [], @digits );
    }

    # rec_allperm( $callback, $prefix, @rest );
    #    Recursive all permutations generator.  Given a "permutation prefix" of @$prefix,
    #    and a collection of unused digits @rest, for all permutations of @$prefix + @rest,
    #    calling $callback->( permutation ) for each complete permutation found.
    #
    fun rec_allperm( $callback, $prefix, @rest )
    {
        foreach my $pos (0..$#rest)
        {
        	my $x = $rest[$pos];
        	# try with $x first (after @$prefix)
        	my @pre = @$prefix;
        	push @pre, $x;

        	# delete pos $pos from copy of @rest
        	my @r = @rest;
        	splice( @r, $pos, 1 );

        	if( @r == 0 )
        	{
        		$callback->( @pre );
        	} else
        	{
        		rec_allperm( $callback, \@pre, @r );
        	}
        }
    }

    my $max = 0;

    fun eachperm(@perm)
    {
        my $p = join('', @perm);
        #say "perm: $p";
        $max = $p if $p > $max && $p % 2 == 0;
    }

    try_all_perms( \&eachperm, @digits );
    say "$max";
```


## WILD HORSES, UNFETTERED and RUNNING FREE
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/abigail/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/athanasius/perl/ch-2.pl), and
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/stuart-little/perl/ch-2.pl)

Some solutions were novel enough to warrant their own category, breaking away from the pack, racing across the broken land. I'm not exactly sure where I'm going with this metaphor, but it's indisputable that horses love to run, and given the chance will run for the sheer love of running.

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/abigail/perl/ch-2.pl)

**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/abigail/awk/ch-2.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/abigail/bash/ch-2.sh), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/abigail/c/ch-2.c), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/abigail/lua/ch-2.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/abigail/node/ch-2.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/abigail/python/ch-2.py), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/abigail/ruby/ch-2.rb)

Abigail gives us a very interesting alternative to sorting the input array, instead immediately recording the frequency counts of the digits into an array, where the indices represent the digits 0 through 9. We can then use `grep` to search the frequencies for true values against just the even-numbered indices, to get a list of those even indices that record digits. Assigning this to a 1-element list captures the first element, being the lowest-valued even digit. We decrement this in the frequency array, then print the array mapped back to digit strings. That's a "fat comma" there, in case you're confused. A bit of syntactic sugar normally seen in hash assignment, it's just an alias for a comma and can be used anywhere one is required.

Finally we see a return of sequentially outputting the even digit in a separate statement after the `print`, to finish constructing the solution.

```perl
    my @DIGITS = (0 .. 9);
    my @EVENS  = grep {$_ % 2 == 0} @DIGITS;
    ...

    my @digits = (0) x @DIGITS;
    $digits [$_] ++ for do {local $" = ""; /[@DIGITS]/g};

    #
    # The last number of the output should be the smallest
    # even number in the input. If there is no even number
    # in the input, skip it.
    #
    my ($last) = grep {$digits [$_]} @EVENS;
    next unless defined $last;
    $digits [$last] --;

    #
    # Print the result, with the highest numbers first.
    #
    print join "" => map {$_ x $digits [$_]} reverse @DIGITS;
    say $last;
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/athanasius/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/athanasius/raku/ch-2.raku)

The monk's submission functions quite similarly to Abigail's, above, only they use a frequency hash, here referred to as a [multiset](https://en.wikipedia.org/wiki/Multiset), to record the digit data. A quick iteration through the keys locates the smallest even element, which then has its frequency decremented in the hash value. Progressing through the sorted keys of the remaining multiset, an array is constructed with each key pushed on according to the frequency value found. Finally the smallest even value we found earlier is added and the array joined into a number for output.

```perl
    my %digits;                       # Hash emulating a multiset
     ++$digits{ $_ } for @N;

    my $lsdig;                        # Least significant digit: must be even

    for my $d (keys %digits)
    {
        $lsdig = $d if ($d % 2 == 0) && (!defined( $lsdig ) || $d < $lsdig);
    }

    if (defined $lsdig)
    {
        --$digits{ $lsdig };          # Remove the least significant digit from
                                      #   the multiset
        my @msdigs;                   # The remaining (i.e., most sig.) digits

        for my $d (keys %digits)      # Build the array from the multiset
        {
            push @msdigs, $d for 1 .. $digits{ $d };
        }

        printf "Output: %s%d\n", join( '', sort { $b <=> $a } @msdigs ),
                                 $lsdig;
    }
    else
    {
        print 'Output: None (no multiple of 2 can be formed from the given ' .
              "digits)\n";
    }
```

[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/stuart-little/perl/ch-2.pl)

**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/stuart-little/haskell/ch-2.hs), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/stuart-little/node/ch-2.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/stuart-little/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/stuart-little/raku/ch-2.p6)

Finally, Stuart first sorts his input array descending and joins it into a string, then uses a regular expression to match the tail end against a single character followed by a greedy match of all instances from a character class of odd digits.

This will capture the last not-odd digit followed by a capture of nothing but odd digits until the end of the string. These captures are swapped and the substituted string returned non-destructively, moving the last, smallest even digit to the end of the number. Artful. A little verification is added to make sure a number could be constructed through this trickery, and either the new number or a NULL clause is printed.

```perl
    my $attemptedOut = (join "", sort {$b cmp $a} @ARGV) =~ s/(.)([13579]*)$/$2$1/r;
    say(($attemptedOut =~ m/[02468]$/) ? ($attemptedOut) : ("No even digits.."));
```


## Additional Submissions in Guest Languages
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/arne-sommer/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/arne-sommer/raku/ch-2.raku)

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/roger-bell-west/perl/ch-2.pl)

**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-115/roger-bell-west/rust/ch-2.rs)






------------------------------------------





---

# BLOGS {#PWC115BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, I somehow continue to maintain my bearings. Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC093BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *READ* these *BLOG* *LINKS*:

**( *don't think, trust your training, you're in the zone, just do it ...* )**


**Abigail**

 * [Perl Weekly Challenge 115: String Chain](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-115-1.html) ( *Perl* )
 * [Perl Weekly Challenge 115: Largest Multiple](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-115-2.html) ( *Perl* )

**Adam Russell**

 * [The Weekly Challenge 115 — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2021/06/05) ( *Perl* )

**Andinus**

 * [Challenge 115](https://andinus.tilde.institute/pwc/challenge-115/) ( *Raku* )

**Arne Sommer**

 * [Hamilton Unchained with Raku and Perl](https://raku-musings.com/hamilton-unchained.html) ( *Perl & Raku* )

**Bartosz Jarzyna**

 * [Zipping arrays in Perl - Bartosz Jarzyna](https://brtastic.xyz/blog/article/zipping-arrays-in-perl) ( *Perl* )

**Cheok-Yin Fung**

 * [CY's Take on The Weekly Challenge #115](https://e7-87-83.github.io/coding/challenge_115.html) ( *Perl* )

**Colin Crain**

 * [An Even Larger String Cheese Chain — Programming Excursions in Perl and Raku](https://colincrain.com/2021/06/04/an-even-larger-string-cheese-chain/) ( *Perl & Raku* )

**Dave Jacoby**

 * [ABC ACB BAC BCA CAB CBA: Perl Weekly Challenge #115 | Committed to Memory](https://jacoby.github.io/2021/06/01/abc-acb-bac-bca-cab-cba-perl-weekly-challenge-115.html) ( *Perl* )

**Flavio Poletti**

 * [PWC115 - String Chain - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/06/02/pwc115-string-chain/) ( *Perl & Raku* )
 * [PWC115 - Largest Multiple - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/06/03/pwc115-largest-multiple/) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #115 — Cursing at Recursion](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-115/james-smith) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 115: String Chain and Largest Multiple | laurent_r](http://blogs.perl.org/users/laurent_r/2021/06/-perl-weekly-challenge-115-string-chain-and-largest-multiple.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 115: words in circles and numbers – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2021/06/01/PerlWeeklyChallenge115.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 115: words in circles and numbers – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2021/06/01/PerlWeeklyChallenge115.html#task2) ( *Raku* )

**Roger Bell_West**

 * [RogerBW's Blog: Perl Weekly Challenge 115: Largest Chain](https://blog.firedrake.org/archive/2021/06/Perl_Weekly_Challenge_115__Largest_Chain.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 115](https://dev.to/simongreennet/weekly-challenge-115-26c9) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 115 – W. Luis Mochán](https://wlmb.github.io/2021/06/01/PWC115/) ( *Perl* )
