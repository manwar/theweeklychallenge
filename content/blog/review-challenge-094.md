
---
author:       Colin Crain
date:         2021-01-20T00:00:00
description:  "Colin Crain › Perl Weekly Review #094"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #094"
image:        images/blog/p5-review-challenge-094.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-093/).* )

Welcome to the Perl review for **Week 094** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-094/) or the summary [**recap**](/blog/recap-challenge-094/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC094TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC094TASK2)   &nbsp;  &nbsp;  &nbsp;       •   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC094BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC094TASK1}

# Group Anagrams

*Submitted by: Mohammad S Anwar*

You are given an array of strings @S.

Write a script to group Anagrams together in any random order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

**Example 1:**

```
    Input: ("opt", "bat", "saw", "tab", "pot", "top", "was")
    Output: [ ("bat", "tab"),
              ("saw", "was"),
              ("top", "pot", "opt") ]
```

**Example 2:**

```
    Input: ("x")
    Output: [ ("x") ]
```

## about the solutions

There were 22 submissions for the first task this past week. Overwhelmingly, most people came to the same conclusion: that the sorted letters of a word would make an excellent common hash key among anagrams. As such there was quite a number of simple, compact solutions making short dispatch to the task.

There were some alternate key creation techniques presented, but hashing ruled the day. We'll have a look at generating both alphabetic and unique numerical codes as we peruse the offerings.

## split, sort, join, HASH
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/abigail/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/athanasius/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/colin-crain/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/polettix/perl/ch-1.pl),
[**Gustavo Chaves**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/gustavo-chaves/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/jo-37/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/lubos-kolouch/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/perlboy1967/perl/ch-1.pl),
[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/nunovieira220/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/paulo-custodio/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/sgreen/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/ulrich-rieke/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/wlmb/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/wanderdoc/perl/ch-1.pl)

Anagrams are rearrangements of words to make different words. So given two anagrammetric words [*ed note: what a magnificent descriptive!*] what, then is the common element they share that separates them from others not of their ilk? Well, the values and quantities of the individual letters that compose them of course. The arrangement is inconsequential and has no bearing, so if we could rearrange those letters along a reproducible pattern we could apply that function to different words to see if they produce a common result.

There are an infinite number of options for this particular encoding, but by far the simplest and most readable would be a straightforward ascending alphabetical order. We could alternately sort them descending, or even use a one-time code pad — the actual function isn't important as long as given a collection of letters it will act on it in a consistant manner regardless of the size or composition of the set. An alphabetic sort fits that description and comes right out of the box with the built-in `sort` function so everyone picked that of course. But I did want to make note that we don't strictly *need* to.

When thinking this through I briefly landed on the idea of a run-length encoding of the letter paired with a quantity; using the unit `a3` for three *a*s, for example, leading to  `b1e2g1i1k2n1o2p1` for *bookkeeping*. But you know another way to encode three *a*s? Why not `aaa`? And there we were. Hashes, within the limits of common decency, don't care about key length, so that isn't an issue. And some will notice our RLE version of  *bookkeeping* was longer than the word itself anyway, as even singleton letters require a quantifier.

[**Gustavo Chaves**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/gustavo-chaves/perl/ch-1.pl)

Gustavo demonstrates the technique. First we `split` the word, then `sort` the list of character elements, then `join` the result to make a hash key. Autovivification will make sure there is an anonymous array as the hash value when we `push` the original word on it. After all the words are processed, the value arrays of the hash are displayed.

We will see this pattern repeatedly.

```perl
    foreach (@input) {
        my $key = join '', sort split //;
        push @{$anagrams{$key}}, $_;
    }

    say foreach map {join ', ', @$_} values %anagrams;
```

Another example from Laurent:

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/laurent-rosenfeld/perl/ch-1.pl)

```perl
    for my $w (@test) {
        my $normalized = join "", sort split //, $w;
        push @{$words{$normalized}}, $w;
    }
    for my $k (keys %words) {
        say '[' . "@{$words{$k}}" . ']';
    }
```

and now Ulrich:

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/ulrich-rieke/perl/ch-1.pl)

```perl
    while ( @S ) {
        my $word = shift @S ;
        my $reordered = join( '',  sort ( split (//, $word))) ;
        print "$reordered\n" ;
        push @{$anagrams{ $reordered }}, $word ;
    }
    for my $value ( values %anagrams ) {
        print '(' . join( ', ' , @$value) . ")\n" ;
    }
```

As we can see there is quite a bit of self-similarity in the submissions.

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/wlmb/perl/ch-1.pl)

Perhaps wondering just how small he could make it, Luis provides us with this version:

```perl
    push @{$anagrams{join '', sort split '', $_}}, $_ foreach @ARGV;
    say join(" ", @{$anagrams{$_}})foreach keys %anagrams;
```

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/colin-crain/perl/ch-1.pl)

Punctuation and non-word characters pose a problem to this technique. Not because of the algorithm, but rather on the definition of what an anagram is. Although the rules are based in wordplay and hence aren't exactly definitively codified by an international governing body, as I understand the game capitalization and punctuation aren't generally considered, unless you can somehow work it in really well for bonus points. This is all well and good but what it means for us is that the absence of an apostrophe does not make the anagram automatically fail: *can't* and *cant* are anagrams, and *wouldn't've* contains the word *unloved*.

To address this I placed a simple inline filter to remove anything that wasn't a letter and lowercased everything. This is a little rough on non-English characters, but you need to draw the line somewhere and there technically aren't any diacritical marks in English, so English it is. Perhaps it would have been better to *strip* a dieresis from coöperate rather than remove the letter, but we're getting rather far out there now into the hairy land of special cases. If we were searching through Middle English texts or dog-eared copies of the New Yorker for our anagrams perhaps it would be worth the effort.

```perl
    my @list;
    for (@ARGV) {
        s/[^a-zA-Z]//g;
        push @list, lc $_;
    }

    my %letters;
    for (@list) {
        my $str = join '', sort split //, $_;
        push $letters{$str}->@*, $_;
    }

    say "@$_" for values %letters;
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/e-choroba/perl/ch-1.pl)

Choroba makes allowances for duplicate words in the input, which frankly never occurred to me. By making his lists hashes he can ensure uniqueness in the output.

```perl
    sub group_anagrams {
        my @words = @_;
        my %groups;
        for my $word (@words) {
            my %f;
            ++$f{$_} for split //, $word;
            push @{ $groups{ join '|', map "$_$f{$_}", sort keys %f } }, $word
        }
        return [ values %groups ]
    }
```

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/sgreen/perl/ch-1.pl)

Simon goes to great lengths to exactly mimic the output in the description, down to the enclosing square brackets.

```perl
    # Retrieve a list of words from the command line
    my @words = ( join( ' ', @_ ) =~ /([a-z]+)/ig );

    # Group anagrammed words together
    my %group = ();
    foreach my $word (@words) {
        push @{ $group{ _sort_word($word) } }, $word;
    }

    # Display the result
    my @results = ( values %group );
    foreach my $count ( 0 .. $#results ) {
        my $start = $count == 0         ? '[ ("' : '  ("';
        my $end   = $count == $#results ? '") ]' : '"),';
        say $start, join( '", "', @{ $results[$count] } ), $end;
    }
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/jo-37/perl/ch-1.pl)

Jorg gives us a functionally inverted view of the same process, by which I only mean that `map` functions are oft better understood when read from the bottom up, watching the data flow through the processing. His annotation is also always appreciated.

```perl
    # Group given strings by anagrams.
    sub anagroup {
        # Hash to collect anagrams by a canonical key.
        my %anagroup;

        # Split strings into characters, sort and rejoin to gain a
        # "canonical anagram", decorate each string with its canonical
        # anagram and collect the strings within the prepared hash by
        # canonical key.
        push $anagroup{$_->[0]}->@*, $_->[1]
            foreach map {[join('', sort split //), $_]} @_;

        # Sort the canonical anagrams and retrieve the corresponding string
        # lists.  (The sort is required for a stable result only.)
        map {$anagroup{$_}} sort keys %anagroup;
    }
```



## create a unique number from PRIMES
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/adam-russell/perl/ch-1.pl) and
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/roger-bell-west/perl/ch-1.pl)

We mentioned earlier that keeping the letters unchanged and just reordering them was not the only way to uniquely encode the characters composing a word. When we speak of an  interrelationship between items where the ordering doesn't matter, mathematically this refers to the commutative property, and another example of this fine property is the multiplication operation.

This in turn suggests that should we figure out a way to "multiply" the letters, we would compute the same total no matter their arrangement. Seemingly this is not particularly sensical on its face, but this idea holds merit when we consider prime factorization. Every distinct number can be uniquely reduced to a product of one or more primes, and that calculation, the product, can be performed in any order. The sequence of the operations is much like our letter arrangements in that regard.

Therefore by assigning a unique prime to each letter in the alphabet, every word can be expressed as a numerical product, and words with the same collection of letters composing them will produce the same value, and thus be anagrams of each other.

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/roger-bell-west/perl/ch-1.pl)

Roger takes an interesting approach to assigning his prime mapping. Starting with an array of 26 prime numbers, he uses `ord` to convert the letter to a numeric value. As these will not start at 0, he then uses the calculated offset from `ord("a")` to compute an index to the prime list. His `wh()` function computes the hash key, which I assume is an initialism for "word hash". Another function, `ga()` ("group acronyms" I suppose) gathers and reports.

```perl
    sub wh {
      my $w=shift;
      $w=lc($w);
      if ($w =~ /[^a-z]/) {
        return 0;
      }
      my $b=ord('a');
      my @p=(2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101);

      my $n=1;
      foreach my $c (split '',$w) {
        $n*=$p[ord($c)-$b];
      }
      return $n;
    }
```

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/adam-russell/perl/ch-1.pl)

Adam, on the other hand, simply assigns the first 26 primes, but shaves a few clock cycles off the execution by assigning by incident frequency in the English language, "etaoin shrldu..." The most frequently occurring letter, *e* is mapped to the smallest prime, 2.
As the assignment is hard-coded anyway, I see no downside to this scheme. Well thought.

In other respects the method closely follows what we've seen elsewhere, hashing the words in an array keyed by the unique number generated.

```perl
    while($word = <DATA>){
        chomp($word);
        my @letters = split(//, $word);
        my $word_product = 1;
        map {$word_product *= $_} map{$letter_factor{$_}} @letters;
        push @{$anagrams{$word_product}} , $word if $anagrams{$word_product};
        $anagrams{$word_product} = [$word] unless $anagrams{$word_product};
    }
    close(DATA);
    print "Organized anagrams:\n";
    for my $key (keys %anagrams){
        print "  ";
        for my $word (@{$anagrams{$key}}){
            print "$word ";
        }
        print "\n";
    }
```


## UNIQUE approaches and other THINGS THAT CAUGHT MY EYE

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/cheok-yin-fung/perl/ch-1.pl)

CY has taken it upon herself to incorporate unicode support in her solution, and to do so she generates an unusual unique alphanumeric string for her hash keys. She does this by first identifying every atomic character in all the words assessed, assigning a sequential number to each as it first appears. This creates a dictionary of tokens unique to the task. Instead of the possibly multibyte characters, these numbers are easily sortable. So by substitution to their numeric counterparts and stringifying through use of a delimiter a unique key is created, which is then hashed in the usual way.

```perl
    sub collect_alphabets {
        my @words = @_;
        my @alphabets = split //, join("" , @words);
        my $i = 0;
        for (@alphabets) {
            if (!exists $hash_num{$_}) {
                $hash_num{$_} = $i++;
            }
        }
    }

    sub learn_atoms {
        my $word = $_[0];
        my @alphabets = split //, $word;
        my @coord = map {$hash_num{$_}} @alphabets;
        @coord = sort @coord;
        print +(join ",", @coord), "\n";
        return join ",", @coord;
    }
```

---

---

<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>

---

# TASK 2 {#PWC094TASK2}

# Binary Tree to Linked List

*Submitted by: Mohammad S Anwar*

You are given a binary tree.
Write a script to represent the given binary tree as an object and flatten it
to a linked list object. Finally print the linked list object.

Example:

    Input:

        1
       / \
      2   3
     / \
    4   5
       / \
      6   7

    Output:

        1 -> 2 -> 4 -> 5 -> 6 -> 7 -> 3


## about the solutions

There were 20 submissions for the second task this past week.

The task as specified has three basic requirements:

* to create a [binary tree](https://en.wikipedia.org/wiki/Binary_tree) object
* to create a [linked list](https://en.wikipedia.org/wiki/Linked_list) object
* to make a [preorder traversal](https://en.wikipedia.org/wiki/Tree_traversal#Pre-order,_NLR) of the tree and use this data to populate the list values

This last point, a "preorder" traversal, may be unfamiliar to some, and the word is not specified in the description. But on the other hand, "flatten it" isn't exactly very forthcoming. An examination of the example output does specify an ordering, however, and that is what we have to go on.

There are several ways to list the nodes of an arbitrary binary tree in a regular fashion, each viewing the data in a different way and suited to a particular task. There are depth-first and breadth-first traversals, and even among the depth-first, which this is, there are variations within the order in which nodes are visited. Without going into too many tangental details, the "preorder" traversal will first return the value of the node, than always pick the left-hand child node and follow the link before considering the right. This progression is maintained until there are no more left nodes to follow, and the steps are retraced one node at a time until a right-hand branch is found and followed. From that point the value at the node is noted, as always, and the left child is followed again, should there be one.

If one follows this rule with the example, noting first the value of the root node, then moving to the left child, noting its value as the first action, then to the left again,  backtracking as required to find a right node after no more left nodes are present — then one can see that the list ( 1, 2, 4, 5, 6, 7, 3 ) is produced from the returned values. A quick verification shows that this is what is intended by the "flatten" directive, as the values for the linked list given match those of the preorder traversal.

Note that the transformation is strictly one-way: data from the structural relationships within the tree is irretrievably discarded when converting to a list; the values are preserved with only an indistinct portion of  the ordering. Once we go flat, there's no coming back.<sup>1</sup>

---

<sup>1</sup> This is true on the face of it, but in fact some information is still encoded in the preorder sequencing, just not enough to reconstruct the tree. However if an additional [inorder](https://en.wikipedia.org/wiki/Tree_traversal#In-order,_LNR) (LNR) depth-first traversal is also recorded, the two incomplete information sets can be combined to uniquely identify the structure.

---

### a note on NESTED ARRAY STRUCTURES to describe BINARY TREES

As I commented last week the trees as given make no mention of an external ordered structure to the left and right nodes, as one for example would find in a binary search tree. However the traversal algorithm explicitly defines a specific spatial order to the node selection, always choosing the one child first.

Some members adopted a structure of nested arrays, each node expressed as (*value*, *child-1*, *child-2*), only having any solitary child node adopting the first child slot. This seems to break the data model, which I would argue it does. It does not, however, affect the task here, which is curious but true.

Let me explain: in doing a preorder traversal, the next node visited is always the left node first. However, if no left node is present, action immediately moves to the right child, so if the right child is already in the left child's spot, all is well and the progression continues unchanged. No one need know what we've done.

What *has* happened though, when we use this notation, is that we have lost information about the left and right assignment of the nodes that cannot be easily regained. For some trees this may matter, for others, not. In the case of a binary search tree, one might argue we could still place the child values in their correct location by comparing them to the value at the node, but that would be performing work: we would be replacing the lost information by recalculating it anew, not by decoding it from the structure.

Like we noted above on flattening to a preorder list, once we have crossed that Rubicon it's an uphill swim to get home.

### a note on LINKED LISTS

Due to the presence of robust dynamic arrays in Perl, the need for a Linked List structure is greatly reduced, if not completely obviated. I have heard people argue here that they are completely unnecessary and anything that can be done with a linked list can be done with an array and references, and although that may be a stretch it's hard to say they're exactly wrong. It is an incontrovertible fact that Perl arrays are just *way* more useful.

Perl arrays are dynamic, can hold arbitrary scalar information, and come complete with a robust suite of built-in functions to slice, dice and manipulate them in a variety of ways, with more functionality waiting in the wings should the core language not quite give us what we need.

But that said I was a bit taken aback when only about half the submissions made any effort in this part of the task, even using the most generous definition of a "linked list object". I was hardly going to exclude half the field right out of the gate like some grad student in a bad mood, but reading my comments one may pick up on a certain growing alarm at this seeming mass revolt.

In closing I'd like to add one might have considered the *real* task here to have been glueing together the data from two objects, which I would say is a perfect example for the use of Perl, the "glue that holds the internet together". Something to think about.


# so let's get on with the REVIEWS already!


[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/abigail/perl/ch-2.pl)

Abigail constructs a unique system for string-encoding his tree, asking for a text file containing data something like this:

```
    [[[[] 4 []] 2 [[[] 6 []] 5 [[] 7 []]]] 1 [[] 3 []]]
```

This may appear a little line-noisy, but has the nodes encoded as [*left*, *value*, *right*], and empty brackets for null sets. Not the most user friendly, surely, but then again  all of the systems presented here have one drawback or another. Once he has his tree in place and cached, though, his `inorder` routine takes over to do the heavy lifting. The code is well annotated as usual.

```perl
    sub inorder ($tree) {
        return unless @$tree;   # Leaf, so no list.

        #
        # Recurse
        #
        my ($left_head,  $left_tail)  = inorder ($$tree [$T_LEFT]);
        my ($right_head, $right_tail) = inorder ($$tree [$T_RIGHT]);

        #
        # Create head of list; let tail point to this.
        #
        my $head = [];
          $$head [$L_VALUE] = $$tree [$T_VALUE];
        my $tail = $head;

        #
        # If either child is non-empty, add this to the list; update
        # the tail if necessary.
        #
        if ($left_head) {
            $$tail [$L_NEXT] = $left_head;
            $tail            = $left_tail;
        }
        if ($right_head) {
            $$tail [$L_NEXT] = $right_head;
            $tail            = $right_tail;
        }

        #
        # Return head and tail
        #
        ($head, $tail);
    }
```

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/adam-russell/perl/ch-2.pl)

Adam uses `Graph` to define a tree as an array of values and a set of connections between the elements, which is a very interesting data abstraction.

```perl
    $Tree = new Graph();
    $Tree->add_vertices(1, 2, 3, 4, 5, 6, 7);
    $Tree->add_edge(1, 2);
    $Tree->add_edge(1, 3);
    $Tree->add_edge(2, 4);
    $Tree->add_edge(2, 5);
    $Tree->add_edge(5, 6);
    $Tree->add_edge(5, 7);
```

Can you see the example encoded? Once the data is oin the tree he then proceeds to walk every path in a depth-first preorder traversal, gathering any link value found along the way *but only if the node has not already been visited*. The values are immediately added to a linked list object he provides, which is then printed.

```perl
    sub build_linked_list{
        my($tree) = @_;
        my $linked_list = new LinkedList();
        my @paths = build_paths($tree);
        my $root = $paths[0]->[0];
        my $next = $linked_list->insert($root, undef);
        for my $path (@paths){
            for my $node (@{$path}){
                $next = $linked_list->insert($node, $next) if !$linked_list->in_list($node);
            }
        }
        return $linked_list;
    }
```



[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/athanasius/perl/ch-2.pl)

The monk has given us a pair of packages, `BinaryTree` and `SinglyLinkedList`, to provide the objects for this challenge. In the `BinaryTree` object, they have added a convenient pair of methods, `preorder` and `traverse_preorder` that when used together return the values for the tree nodes in a preorder manner. The `$visit` parameter, in this case, is a coderef for the linked list `append` method, so the traversal of the tree builds the list directly, without any intermediate steps. Which is pretty cool, if you ask me.

```perl
    ...

    my $btree = build_tree( $ARGV[0] );
    my $sll   = SinglyLinkedList->new;

    $btree->traverse_preorder( sub { $sll->append( $_[0] ) } );
    print $sll->display, "\n";

    ...

    sub traverse_preorder
    {
        my ($self, $visit) = @_;
        if (defined $self->root)
        {
            preorder( $self->root, $visit );
        }
    }

    sub preorder
    {
        my ($node, $visit) = @_;

        $visit->( $node->value );

        preorder( $node->left,  $visit ) if defined $node->left;
        preorder( $node->right, $visit ) if defined $node->right;
    }
```



[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/cheok-yin-fung/perl/ch-2.pl)

CY gives us two packages, `SLL::Node` and `BinaryTreeNode` to handle her tree and list objects. Most of the logic is contained with these objects as methods, including a `create_tree_from_list` routine to construct a tree from a structured breadth-first listing of the values. This structure is unique in that it allows direct access to nodes through computational relationships between parent and child, being based in a full tree, with vacant nodes left as undefined elements to preserve the relationships.

Once she has built her tree, the tree object knows how to perform a preorder traversal, and as it progresses the linked list nodes are immediately added as values are gathered.

```perl
    sub to_llnode {
        return SLL::Node->new(shift, undef);
    }

    sub tree_travel {
        my $self = shift;
        my $t = shift;
        my $baby = to_llnode($t->value);
        my $preserve = \$baby;

        if (defined $t->leftchild) {
            push @tt_stack, $t->rightchild if defined $t->rightchild ;
            $baby->set_nextnode(tree_travel($self,${$t->leftchild}));
        } elsif (defined $t->rightchild) {
            $baby->set_nextnode(tree_travel($self,${$t->rightchild}));

        } elsif (scalar @tt_stack != 0) {
            my $n = pop @tt_stack;
            $baby->set_nextnode(tree_travel($self,${$n}));
        }

        return $$preserve;
    }
```



[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/dave-jacoby/perl/ch-2.pl)

Dave constructs a very nice `Node` object, with a variety of attributes, including a `parent`, which makes navigating the tree both up and down considerably easier, but isn't really required here. This uplink makes our tree somewhat analogous to a doubly-linked list. You've heard of linked lists? Yea, so have I. It's funny, I haven't seen one around here in a while...

The `flatten_tree` routine is a path-walking recursion that preferentially follows the left-hand fork.


```perl
    sub flatten_tree( $tree ) {
        my @array;

        # every node has value, and that comes first.
        push @array, $tree->value;

        # we prioritize the left branch over the right,
        # recursing on that.
        push @array, flatten_tree( $tree->left )
            if ( defined $tree->left );

        # we go left as our last choice.
        push @array, flatten_tree( $tree->right )
            if ( defined $tree->right );

        # wantarray is good and fun, determining if the
        # caller wants an array or not, and giving the
        # right response. Not usually THE thing that
        # solves the problem in question, but helpful
        # for bookkeeping issues.
        return wantarray ? @array : \@array;
    }
```


[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/duncan-c-white/perl/ch-2.pl)

Duncan gives us a nice `BinTree` package to provide us with a binary tree object. It's extremely well documented, including a constructor routine to parse the definition out of a nested list written out as string. For that, the nodes are written out as (*value*, *left*, *right*), which one may well notice matches the preorder read sequence. It's all connected down inside if you look at it the right way.

Once the tree is a loaded object, he calls `preorder` to load the sequence into an array reference, which is then printed. As, you know, a Perl list. Whatever.

```perl
    fun preorder( $bintree, $aref )
    {
        my( $kind, @pieces ) = $bintree->breakapart();
        if( $kind eq "node" )
        {
            my( $n, $l, $r ) = @pieces;
            push @$aref, $n;
            preorder( $l, $aref );
            preorder( $r, $aref );

        } elsif( $kind eq "leaf" )
        {
            my( $n ) = @pieces;
            push @$aref, $n;
        } elsif( $kind eq "nil" )
        {
        } else
        {
            die "bintree->preorder: given bintree has impossible kind $kind: ", Dumper($bintree);
        }
    }
```


[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/e-choroba/perl/ch-2.pl)

It's of note that in an absolute sense the ordering of the values in the binary tree definition Choroba is using already matches the depth-first traversal required for the linked list. So in sense we're just moving around the parentheses. That solution, splicing and reconfiguring a character string with `substr` and an index or two, is left as an exercise to the reader.

```perl
    sub bt2l {
        my ($tree) = @_;
        return unless defined $tree;

        return $tree->[VALUE],
               bt2l($tree->[FIRST_CHILD]),
               bt2l($tree->[SECOND_CHILD])
    }

    sub bt2ll {
        my ($tree) = @_;
        my @list = bt2l($tree);
        my $ll = my $element = [];
        for my $i (0 .. $#list) {
            $element->[VALUE] = $list[$i];
            $element = $element->[NEXT] = [] unless $i == $#list;
        }
        return $ll
    }

    sub to_string {
        my ($ll) = @_;
        return unless $ll;

        return join ' -> ', $ll->[VALUE], to_string($ll->[NEXT])
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/polettix/perl/ch-2.pl)

Flavio gives us a prebuilt heredoc containing an ascii drawing of a binary tree. He then provides a function `build_linked_list`, which, with the help of a private recursive auxillary to do the dirty work, does a preorder traverse of the tree. As the values are gathered, they are fed into a simple linked list (yay!) constructed from hashes with a `value` and `next` key. A separate routine walks the list, printing the values separated by arrows.

```perl
    sub build_linked_list ($input) {
       my @rows = map { [ split m{}mxs ] } split m{\n}mxs, $input;
       my $root = 0;
       $root++ while $rows[0][$root] eq ' ';
       my $pre_start = {};
       _build_linked_list_r(\@rows, 0, $root, $pre_start);
       return $pre_start->{next};
    }

    sub _build_linked_list_r($rows, $rid, $cid, $previous) {
       my $so_far = $previous->{next} = {value => $rows->[$rid][$cid]};
       if ($rid < $#$rows) { # there can be something more
          $rid++;
          if ($cid < $#{$rows->[$rid]}) {
             $so_far = _build_linked_list_r($rows, $rid + 1, $cid - 2, $so_far)
                if 0 < $cid && $rows->[$rid][$cid - 1] ne ' ';
             $so_far = _build_linked_list_r($rows, $rid + 1, $cid + 2, $so_far)
                if $rows->[$rid][$cid + 1] ne ' ';
          }
       }
       return $so_far;
    }
```


[**Gustavo Chaves**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/gustavo-chaves/perl/ch-2.pl)

Gustavo provides perhaps the most compact submission this week, producing a Perl list prettified by setting the output field separator, `$,`, to ' -> '.

```perl
    sub flatten_tree {
        my ($list, $tree) = @_;

        return unless defined $tree;

        my ($number, $left, $right) = @$tree;

        push @$list, $number;
        flatten_tree($list, $left);
        flatten_tree($list, $right);
    }

    my @list;

    flatten_tree(\@list, [1, [2, [4], [5, [6], [7]]], [3]]);

    $, = ' -> ';
    say @list;
```


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/james-smith/perl/ch-2.pl)

James crafts for us two modules, `Tree.pm` and `LL.pm`, to provide tree and list objects respectively. The tree itself is constructed through a rather laborious nested assignment, but once built it comes equipped with both a `flatten` method, to provide a preorder array of values, but also a `to_ll` method that creates and returns a new `LL` linked list object, which in turn has its own `flatten` method.

The two lists are both flattened and output for comparison (spoiler: they're the same).

```perl
    sub to_ll {
      my( $self, $ll ) = @_;
      my ($v,@sub) = @{$self};
      unless( $ll ) {
        $ll = LL->new( $v );
      } else {
        $ll->add( $v );
      }
      $_->to_ll($ll) foreach @sub;
      return $ll;
    }

    sub flatten {
      my $self = shift;
      my ($v,@sub) = @{$self};
      return ( $v, map { $_->flatten } @sub );
    }
```


[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/jo-37/perl/ch-2.pl)

If you recall I made mention that there were other forms of depth-first traversals, with preorder being only one. The various types are categorized by the order in which the items within the node are visited: the Node value, the Left node, and the Right node. These are abbreviated N, L, and R, and a preorder traversal is thus typified NLR. There also exist inorder (LNR), postorder (LRN) and other traversal types. Jorg has allowed a command line switch to specify any combination of L, N and R to specify the ordering desired.

In an extensively annotated submission, Jorg gives us two packages, `LinkedList` and `BinaryTree`, to implement his objects. His data entry uses a unique style, of note because it specifies each node with four values instead of three, including a unique identifier allowing the parent-child links to be externally indexed without nesting.

The data is delivered as a character string which is parsed to populate a proper Binary Tree object of nodes, each with a value, a left child and a right. The LinkedList object is a blessed, nested two-element array containing a link and a value, with the head of the List keeping track of the head Node and the last element, where the next will be added.

It's rather long and well annotated, so you should go have a look. Here is his `traverse` routine:

```perl
    sub traverse ($self, $mode, $code) {
        # Recursively process the tree in the specified order.  Nodes are
        # not blessed and thus have no methods.
        foreach (split //, $mode) {
            do {local $_ = $self; $code->()} if /^N$/;
            traverse($self->[1], $mode, $code) if /^L$/ && $self->[1];
            traverse($self->[2], $mode, $code) if /^R$/ && $self->[2];
        }
    }
```


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/laurent-rosenfeld/perl/ch-2.pl)

Laurent accepts his trees as Perl nested arrays in (*value*, *left*, *right*) form. From there he traverses the input in array form, creating a list of the values visited. He then uses a routine to turn the Perl list into a linked list made from nesting short arrays: (*value*, [*linked array*, [*etc*, [...]]])

One quite interesting quality of his method is because both structures are built from nested arrays with the value at the 0 index, the same `flatten_it` routine can be used for either.

```perl
    sub flatten_it {
        my $node = shift;
        @flat_list = ();
        dfs($node);
        return @flat_list
    }
    sub dfs {
        my $node = shift;
        push @flat_list, $node->[0];
        dfs($node->[1]) if defined $node->[1];
        dfs($node->[2]) if defined $node->[2];
    }
    sub list_to_linked_list {
        my @list = @_;
        my $last = pop @list;
        my $current = [$last, ];
        for my $item (reverse @list) {
            $current = [$item, $current];
        }
        return $current;
    }
```

[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/lubos-kolouch/perl/ch-2.pl)

Lubos seems to have dusted off his two `Moose` packages from last week for this week's similar task, altering `sumPath` to fit its new mission. It now walks the tree in a preorder traversal, outputting a Perl array reference instead of summing.

```perl
    package SumPath;
    use Moose;

        has 'total_path' => (is => 'rw', isa => 'ArrayRef', default => sub { [] });

        sub walk_path{
            my $self = shift;
            my $root = shift;

            push @{$self->total_path}, $root->value;

            if ($root->left) {
                $self->walk_path($root->left);
            }

            if ($root->right) {
                $self->walk_path($root->right);
            }

            return $self->total_path;
        }
    }
```


[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/perlboy1967/perl/ch-2.pl)

After initially being daunted on seeing a quite long assignment for his tree array, stretching far down the page, I was relived to discover it was in fact three trees being defined, one node value per line in a rather airy yet fairly clear fashion.

I've noted elsewhere that encoding a binary tree as nested arrays defined as (*value*, *left*, *right*) places the values in the same relative positions as the result of a preorder traversal.

So... Niels has done what I was waiting for someone to do, to iterate left to right across the array, descending recursively into subarrays as they are found, pulling out values and lining them up. It's really quite elegant and concise.

```perl
    sub treeToList (\@\@) {
      my ($arN, $ar) = @_;

      foreach my $a (@$ar) {
        if (ref($a) eq '') {
          push(@$arN, $a);
        } elsif (ref($a) eq 'ARRAY' and
                 scalar(@$a) > 0) {
          treeToList(@$arN, @$a);
        }
      }
    }
```


[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/nunovieira220/perl/ch-2.pl)

Nuno uses `Tree::Binary` to objectify his binary tree, and rolls his own quick linked list nodes out of hashes with two keys, for a `value` and a `next` link. Making a linked list is in the end a pretty straightforward process.

```perl
    # Binary Tree to Linked List
    sub createLinkedList {
      my ($btree) = @_;
      my $left = $btree -> getLeft;
      my $right = $btree -> getRight;
      my $res = { 'value' => $btree -> getNodeValue, 'next' => undef };

      if(defined $left || defined $right) {
        my $next = $res;

        if(defined $left) {
          $next->{'next'} = createLinkedList($left);
          $next = $next->{'next'} while(defined $next->{'next'});
        }

        if(defined $right) {
          $next->{'next'} = createLinkedList($right);
        }
      }

      return $res;
    }
```

[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/paulo-custodio/perl/ch-2.pl)

Paulo returns with his tiny trees:

```perl
    {
        package Tree;
        use Object::Tiny::RW qw( value left right );
    }
```

He builds his binary tree from an ascii rendering in a file, using a recursive `parse_subtree` routine in a `parse_tree` wrapper. From there he enacts a depth-first traversal, yielding a list of the values. Now a list of values joined with arrows is not a linked list object, but I do so very much like his tiny trees so I'm gonna let this one slide.

```perl
    sub flatten {
        my($root) = @_;
        return if !defined($root);
        my $left = flatten($root->left);
        my $right = flatten($root->right);

        $root->left(undef);
        $root->right($left);

        my $node = $root;
        $node = $node->right while defined($node->right);

        $node->right($right);

        return $root;
    }
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/roger-bell-west/perl/ch-2.pl)

Roger brings his tree in as a breadth-first structured array, where the array indexes a full tree and null set nodes are given the value of `undef` to maintain the pattern. Because of the underlying structure individual nodes can be directly addressed by calculated index: for a node at any given index *n* the children of that node will be found at indices 2*n*+1 and 2*n*+2.

The familiar recursive motif can be seen inside this routine, first passing through the left node, 2*n*+1, then the right at (2*n*+1)+1.

```perl
    sub recurse {
      my ($tree,$start,$out)=@_;
      push @{$out},$tree->[$start];
      my $b=$start*2+1;
      foreach my $ba ($b,$b+1) {
        if ($ba <= $#{$tree} && defined $tree->[$ba]) {
          recurse($tree,$ba,$out);
        }
      }
      return $out;
    }
```


[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/sgreen/perl/ch-2.pl)

Parsing an ascii text file like others of his ilk, Simon reads his tree as he descends down the paths recursively, which, when done in an orderly fashion, results in a preorder depth-first traversal.

I like the sheer audacity of keeping the tree as an array of ascii strings, reading only the section required, using `substr`, at any one time. The absurdist impracticality is astonishing. There's a lot of questions waiting to be asked: I do so want to know how to correctly draw a deeper or fuller tree, or include more digits in the values. What I see now is an insane Rube Goldberg machine that accomplishes only one specific task and I love it.

Of note, a Perl list connected by arrows does not linked list make. But again I'm gonna let that slide. Obviously I'm in mood.

```perl
    sub _char_at {
        my ( $lines, $x, $y ) = @_;
        return '' if $y > $#$lines or $x > length( $lines->[$y] );
        return substr( $lines->[$y], $x, 1 );
    }

    sub _next_line {
        my ( $lines, $x, $y, $direction ) = @_;

        # See if there is a / or \ 1 line below ...
        my $delta = $direction eq 'left' ? -1  : 1;
        my $char  = $direction eq 'left' ? '/' : '\\';
        if ( $y < $#$lines and _char_at( $lines, $x + $delta, $y + 1 ) eq $char ) {
            # ... and return the corresponding number below that
            return ( _char_at( $lines, $x + $delta * 2, $y + 2 ), $x + $delta * 2, $y + 2 );
        }
        return;
    }

    sub _walk_path {
        my ( $lines, $x, $y, $digits ) = @_;
        push @$digits, _char_at( $lines, $x, $y );

        foreach my $direction (qw(left right)) {
            # See if there are any child elemnts of this value
            if ( my ( $char, $new_x, $new_y ) = _next_line( $lines, $x, $y, $direction ) ) {
                # Go to the child node
                _walk_path( $lines, $new_x, $new_y, $digits );
            }
        }
    }
```


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/wlmb/perl/ch-2.pl)

Luis uses `Moose` to build him a little `Tree` node object, containing a value and left and right pockets for references. To give life and meaning to his Trees, he accepts a command line string containing a parenthetically bracketed nest of nodes, defined in the now-familiar `($value, $left, $right)` notation. Note he keeps structural integrity, filling null nodes with empty lists, `()`.

Then does something really interesting, bringing in [`Text::Balanced`](https://perldoc.perl.org/Text::Balanced) to parse his balanced parentheses. A quick perusal of the documentation suggests this is an ideal solution to parsing a stringified nested structure like we've seen so often here.

Once the tree is built a very terse `flatten` routine recursively visits the left and right nodes in sequence, and outputs a joined Perl list.

```perl
    use Text::Balanced qw(extract_bracketed extract_multiple);

    package Tree;
    use Moose;
    has value=>(is=>'ro', required=>1);
    has left =>(is=>'ro', required=>1);
    has right=>(is=>'ro', required=>1);


    sub build_tree { #Build tree recursively from string representation
        my $string=shift @_;
        # strip parenthesis
        die "Wrong format of string $string" unless $string=~s/^\s*\((.*)\)\s*$/$1/;
        return undef if $string=~/^\s*$/; # empty tree
        my @parts=extract_multiple($string,[\&extract_bracketed]);
        die "Not a binary tree ", join " ",@parts unless @parts==3;
        my($value, $left, $right)=@parts;
        die "Value can contain only alphanumerics: $value" unless $value=~s/^\s*(\w+)\s*$/$1/;
        return Tree->new(value=>$value, left=> build_tree($left), right=>build_tree($right));
    }
```



[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-094/wanderdoc/perl/ch-2.pl)

The Doc gives us a Perl package, `treeNode` for his tree object, and imports `Struct::Dumb` to facilitate making a simple two part Node for his linked list. After building his tree through a complex series of assignments, the code to traverse the tree and flatten it into a list is remarkably simple. Once a perl list is constructed, that is transformed into a linked list struct-Node object and printed.

```perl
     sub traverse
     {
          my $node = $_[0];

          if (defined $node and defined $node->val)
          {
               push @_string, $node->val;
          }

          traverse($node->left) if $node->left;
          traverse($node->right) if $node->right;
     }

     sub flattened
     {
          my $node = $_[0];
          @_string = ();

          $node->traverse;
          return @_string;
     }
```


---

# BLOGS {#PWC094BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, I somehow continue to maintain my bearings. Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC093BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *READ* these *BLOG* *LINKS*:

**( *don't think, trust your training, you're in the zone, just do it ...* )**


**Aaron Smith**

 * [Perl Weekly Challenge 94 - Aaron Smith](https://aaronreidsmith.github.io/blog/perl-weekly-challenge-094/) ( *Raku* )

**Adam Russell**

 * [Perl Weekly Challenge 094 - Perl - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2021/01/10) ( *Perl* )
 * [Perl Weekly Challenge 094 - Prolog - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2021/01/10) ( *Prolog* )

**Arne Sommer**

 * [Binary Linked Anagrams with Raku](https://raku-musings.com/binary-linked-anagrams.html) ( *Raku* )

**Cheok-Yin Fung**

 * [CY's Take on PWC#094 | Moments on Perl or other Programming Issues](http://blogs.perl.org/users/c_y_fung/2021/01/cys-take-on-pwc094.html) ( *Perl* )

**Colin Crain**

 * [Anagram Nut Clusters — Programming Excursions in Perl and Raku](https://colincrain.com/2021/01/11/anagram-nut-clusters/) ( *Perl & Raku* )

**Dave Jacoby**

 * [Flattened Anagrams: Perl Weekly Challenge #94 | Committed to Memory](https://jacoby.github.io/2021/01/05/flattened-anagrams-perl-weekly-challenge-94.html) ( *Perl* )

**Flavio Poletti**

 * [PWC094 - Group Anagrams - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/01/06/pwc094-group-anagrams/) ( *Perl* )
 * [PWC094 - Binary Tree to Linked List - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/01/07/pwc094-binary-tree-to-linked-list/) ( *Perl* )

**James Smith**

 * [Perl weekly challenge 94 | James Curtis-Smith](http://blogs.perl.org/users/james_curtis-smith/2021/01/perl-weekly-challenge-94.html) ( *Perl* )

**Kang-min Liu**

 * [Solving Perl Weekly Challenge 094 -- Group Anagrams and Binary Tree to Linked List](https://gugod.org/2021/01/pwc-094-en/) ( *Raku* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 94: Group Anagrams and Binary Tree to Linked List](http://blogs.perl.org/users/laurent_r/2021/01/perl-weekly-challenge-94-group-anagrams-and-binary-tree-to-linked-list.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 94: I'M (nearly) BACK! – Luca Ferrari](https://fluca1978.github.io/2021/01/04/PerlWeeklyChallenge94.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 94: I'M (nearly) BACK! – Luca Ferrari](https://fluca1978.github.io/2021/01/04/PerlWeeklyChallenge94.html#task2) ( *Raku* )

**Roger Bell_West**

 * [RogerBW&#39;s Blog: Perl Weekly Challenge 94: Binary Anagrams](https://blog.firedrake.org/archive/2021/01/Perl_Weekly_Challenge_94__Binary_Anagrams.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 094](https://dev.to/simongreennet/weekly-challenge-094-2d2h) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 94 – W. Luis Mochán](https://wlmb.github.io/2021/01/04/PWC94/) ( *Perl* )
