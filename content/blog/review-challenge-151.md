---
author:       Colin Crain
date:         2022-03-16T00:00:00
description:  "Colin Crain › Perl Weekly Review #151"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #151"
image:        images/blog/p5-review-challenge-151.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-150/).* )

Welcome to the Perl review pages for **Week 151** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

before we begin, you may wish to revisit either the pages for the [**original tasks**](/blog/perl-weekly-challenge-151/) or the summary [**recap**](/blog/recap-challenge-151/) of the challenge. But don't worry about it, the challenge text will be repeated and presented as we progress from task to task.

Oh, and one more thing before we get started:


### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please feel free to email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

<div align= center><strong>...So finally, without further ado...</strong></div>

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC151TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC151TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC151BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

---

# TASK 1 {#PWC151TASK1}

# Binary Tree Depth
*Submitted by: Mohammad S Anwar*

You are given binary tree.

Write a script to find the minimum depth.

The minimum depth is the number of nodes from the root to the nearest leaf node (node without any children).

**Example 1:**

```
    Input: '1 | 2 3 | 4 5'


                1
               / \
              2   3
             / \
            4   5

    Output: 2
```

**Example 2:**

```
    Input: '1 | 2 3 | 4 *  * 5 | * 6'


                1
               / \
              2   3
             /     \
            4       5
             \
              6
    Output: 3
```


## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/abigail/perl/ch-1.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/alexander-pankoff/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/athanasius/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/colin-crain/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/polettix/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/jo-37/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/lubos-kolouch/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/mattneleigh/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/mohammad-anwar/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/peter-campbell-smith/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/sgreen/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/ulrich-rieke/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/wlmb/perl/ch-1.pl)

In weeks past we've explored a great deal around the topic of binary trees. We've looked at maximum diameters, depths, and accessed various nodes, and processed them both breadth- and depth-first. At this point many long-term members of the team have developed complex libraries of tree objects and methods to draw on. And with the first task this week we return to this familiar territory with a seemingly innocent, not-too-difficult task, looking for the closest leaf node to the root.

Or, to put a darker, Grimms Fairy Tales spin on it, a pair of missing children.

One key difference to this particular task, generally left ambiguous in previous challenges, is that the input is specified. Or rather, that the *input format* is specified — in the examples we are given a particular stringified serial encoding.

The rules for the encoding are not specified, which could be regarded as part of the puzzle for anyone who did not immediately recognise it. The tree data is recorded as a breadth-first traversal, with individual levels delineated by vertical pipes. Within each level, a symbol for a null node is required to fix placements unambiguously, and this format chooses an asterisk. Other than that, items and delimiters are separated by whitespace, apparently with multiple spaces allowed for clarity. We don't have enough examples to determine whether there are specific rules for multiple spaces, but it doesn't seem to affect our parsing in any way anyways, so I'd say it doesn't really matter.

Null nodes at the end of the tree can be inferred and are hence optional. What's not clear, however is whether the same rule would apply to interior levels, although with the vertical pipe level delimiters these too could be inferred. We don't have any examples of this, however.

There were an unusually large number of improperly working submissions this week, which was, not to put too fine a point on it, a little weird.

## COUNTING the RINGS
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/athanasius/perl/ch-1.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/alexander-pankoff/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/mohammad-anwar/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/jo-37/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/dave-jacoby/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/colin-crain/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/roger-bell-west/perl/ch-1.pl),
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/abigail/perl/ch-1.pl), and
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/polettix/perl/ch-1.pl)

Here's the start of a theory:

There turned out to be quite a bit of ambiguity remaining in the task definition, specifically as to what, exactly, a leaf node is in the context of a binary tree. A binary tree is nominally a tree structure where a node has at most two children, and a leaf as a node without children. However one Set Theory definition of a binary tree is a recursive structure of nodes as tuples, with each tuple containing a value and two child tuples, which may themselves be a null set. The precise meaning of the idea of a null in this definition varies, however.

The question arises between whether a *node* is null, or whether the *value* of a node is null. Ultimately this leads to the question of whether a null node can logically be itself a leaf node.

To which I say: "You have to be f'ing kidding me". However if you define a binary tree as a fixed structure with each node containing *exactly* two children this follows. I am, shall we say, highly disinclined to agree with this interpretation, but it seems implicit to many of the results we saw. But if a null child node is still a node, then by definition all nodes will have children, and the leaf nodes will be simply the furthest extant of whatever full structure we've defined, or become meaningless altogether.

Or, you know, a group of otherwise very capable people has screwed up *en masse*.

To explain my point of view, consider the following tree:

```
    Input: '1 | 2 3 | 4 *  * 5 | * 6 * * * * 7 8'

            ┏━━━━━━┫1┣━━━━━━┓
            ┃               ┃
        ┏━━┫2┃             ┃3┣━━┓
        ┃                       ┃
       ┃4┣┓                   ┏┫5┣┓
          ┃                   ┃   ┃
         ┃6┃                 ┃7┃ ┃8┃
```

Many solutions return the answer 3, instead of 4. It does not appear to be an off-by-one error. I eventually had to run this test data on every single submission to see what was happening. I took this to be my shibboleth. You have draw the line somewhere.

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/athanasius/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/athanasius/raku/ch-1.raku)

We'll let the monk start things off today. Drawing a direct inference from the input format, they first slice the string into an array of arrays, one level each. In this form each level will have 2<sup>level</sup> nodes, 0-indexed. Traversing each level in turn, the childen for a node at a given index will always be located on the following level at postions 2 × *index* and 2 × *index* + 1. Thus we can easily look up the children and check for their existence. At the first double-miss, we have found a leaf node and we note the level we're on.

```perl
    L_OUTER:
    for my $level (0 .. $#$tree)
    {
        for my $index (0 .. $#{ $tree->[ $level ] })
        {
            my $node = $tree->[ $level ][ $index ];

            if (defined $node)
            {
                if ($level == $#$tree ||
                   (!defined $tree->[ $level + 1 ][ 2 * $index     ] &&
                    !defined $tree->[ $level + 1 ][ 2 * $index + 1 ]))
                {
                    printf qq[Output: %d\n], $level + 1;
                    print  qq[\nThe first leaf node is "$node"\n] if $VERBOSE;

                    last L_OUTER;
                }
            }
        }
    }
```

[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/alexander-pankoff/perl/ch-1.pl)

At the other end of the complexity spectrum, Alexander chooses multiple layers of abstraction to structure his parsed input. A tokenizer is defined, with a `TokenType` class and three subclasses for separators, values and placeholders. Parsed and labeled, the list of tokens is then handed to the main `minimum_binary_tree_depth()` routine.

The tokens are systematically processed, ratcheting a level counter as they go, counting by powers of 2 and filling in an array of arrays with the tree data. This tree is then used to find the first leaf.

As I said, lots of abstraction. Kind of like building a hovercraft because you needed to go to the corner store.

And hovercrafts, as everyone knows, are very cool.

```perl
    while (@tokens) {
        push @$tree, [];
        my $num_elems = 2**$depth;
        for ( my $i = 0 ; $i < $num_elems ; $i++ ) {

            if ( !@tokens || $tokens[0]->isa('SeparatorToken') ) {
                ## fill row with dummy placeholder tokens.
                unshift @tokens,
                  map { PlaceHolderToken->new(-1) }
                  0 .. ( $num_elems - 1 - $i );    # Dummy Token
            }

            my $cur = shift @tokens;
            if ( $cur->isa('ValueToken') ) {
                if ( $depth && !defined( $tree->[-2][ int( $i / 2 ) ] ) ) {
                    die join( " ",
                        "Missing parent for node with value",
                        $cur->{lexeme},
                        "at position",
                        $cur->pos_human_readable(),
                        "in input\n" );
                }
                push @{ $tree->[-1] }, $cur->{lexeme};
            }
            elsif ( $cur->isa('PlaceHolderToken') ) {
                if (   $i % 2
                    && !defined $tree->[-1][-1]
                    && ( !$depth || defined $tree->[-2][ int( $i / 2 ) ] ) )
                {
                    return $depth;
                }
                push @{ $tree->[-1] }, undef;
                ## do nothing
            }
        }

        $depth += 1;

        # handle optional separatortoken
        if ( @tokens && $tokens[0]->isa("SeparatorToken") ) {
            shift @tokens;
        }
    }
    return $depth;
```

[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/mohammad-anwar/perl/ch-1.pl)

Mohammad has curiously chosen to buck his own input format suggestion, defining individual trees as nested `Node` objects, hashes with 3 keys for `left` and `right` children and a value. A recursive routine traverses the structure depth-first, returning the smallest result as the recursion collapses at whatever maximum depth is found.

```perl
    sub min_depth {
        my ($node) = @_;

        return 0 unless defined $node;

        my $min_left  = min_depth($node->{left});
        my $min_right = min_depth($node->{right});

        return $min_right + 1 unless defined $node->{left};
        return $min_left  + 1 unless defined $node->{right};

        return ($min_left > $min_right)
               ?
               ($min_right + 1)
                :
               ($min_left  + 1);
    }
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/jo-37/perl/ch-1.pl)

Jorg imports the `Graph` module to supply a framework for his tree. After all, a tree is a directed graph, linked from top to bottom. The thing about thinking of the tree as a graph is it allows the use of graph theory techniques to find our minimum depth. An intermediate structure is created of shortest paths from the root to each node, and from this the minimum value is taken for all of these paths that travel to a "sink vertex", that is to say a vertex that does not connect forward to any other vertex.

A careful reading will show we're talking about leaf nodes, just using slightly different language.

Here's the core logic, after we've constructed our graph:

```perl
    # Find the minimum depth in a tree-like graph from its root.
    sub min_depth ($g) {
        # Use zero as the depth of an empty tree.
        return 0 unless $g->has_vertices;
        # Find the (unique) root vertex.
        my $root = ($g->source_vertices)[0];
        # Use one as the depth of a root-only tree.  (An isolated vertex
        # does not count as a source vertex.)
        return 1 unless defined $root;
        # Create the tree of Single-Source Shortest Paths originating at the
        # root vertex.
        my $sptg = $g->SPT_Dijkstra($root);

        # Find the shortest path from the root to all leafs (i.e. sink
        # vertices) and take the minimum thereof.  As the depth is defined
        # here as the number of vertices in the path instead of the number
        # of edges, we need to add one for the desired result.
        1 + min map $sptg->get_vertex_attribute($_, 'weight'),
            $sptg->sink_vertices;
    }
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/dave-jacoby/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Dr. Metropolis and His Amazing MANIAC Machine!: The Weekly Challenge #151 | Committed to Memory](https://jacoby.github.io/2022/02/07/dr-metropolis-and-his-amazing-maniac-machine-the-weekly-challenge-151.html)

As way of a preface, Dave in his [blog writeup](https://jacoby.github.io/2022/02/07/dr-metropolis-and-his-amazing-maniac-machine-the-weekly-challenge-151.html) introduces us to one Dr. Nicholas Metropolis, mathematician and inventor of the Monte Carlo method. He sounds like a fascinating character, although bearing only a passing resemblance to Rotwang, the protagonist on the 1927 Fritz Lang film bearing the same name.

Incidentally, the robot Maria in *Metropolis* was referred to by Rotwang as a *Maschinenmensch*, which obviously inspired *Die Mensch-Maschine*, the 1978 classic recording by the Kraut-rock synthesizer band *Kraftwerk*.

The world, as you may have noticed, is a very interconnected place.

By way of his solution, Dave parses the input to construct `Node` objects into a proper tree structure. The nodes themselves contain an upwards `parent` link, allowing for a `node_depth()` method that can traverse upwards, counting until it finds the root. A similar method peeks at the children to see whether it is given node is a leaf.

The nodes are kept in a hash, and the keys to the hash are filtered to find leaf nodes, blocking the root should itself be a leaf. Then each of these are mapped to their depth and the depths sorted to find the minimum.

The core:

```perl
    my @input = split m{\s*\|\s*}, $input;    # basis for all the rows
    my %nodes =
        map { $_ => Node->new($_) }
        grep { /\d+/ } split m{\D}, $input;    # create all the nodes

    # here's where the tree is made
    for my $r (@input) {
        my $w   = -1 + 2**$e;
        my @i   = split /\s+/, $r;
        my @row = map { $i[$_] || '*' } 0 .. $w;
        push @rows, \@row;
        for my $n ( 0 .. $w ) {
            my $val  = $row[$n];
            my $node = $nodes{$val};
            my $lr   = $n % 2;
            my $p    = ' ';
            my $u    = ' ';
            if ( $e > 0 ) { $u = int( $n / 2 ); $p = $rows[ $e - 1 ][$u]; }
            my $parent = $nodes{$p};
            if ( defined $node && defined $parent ) {
                my $v = $node->value;
                if   ($lr) { $nodes{$p}->left( $nodes{$v} ); }
                else       { $nodes{$p}->right( $nodes{$v} ); }
            }
        }
        $e++;
    }

    my @o =                         # REMEMBER, READ THIS BACK TO FRONT
        sort { $a <=> $b }          # sort low to high
        map  { 1 + node_depth($_) } # 1 + node_depth = number of nodes involved
        grep { ! $_->is_root }      # each node is not a root
        grep { $_->is_leaf }        # each node is a leaf
        map  { $nodes{$_} }         # turn it into nodes
        keys %nodes;                # the keys to the nodes
    return $o[0]; # and we pull the first one, which should be
```

[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/colin-crain/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/colin-crain/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[No Diving in the Shallow End - Programming Excursions in Perl and Raku](https://colincrain.com/2022/02/12/no-diving-in-the-shallow-end/)

For my own solution I chose simplicity, constructing a list-processing chain to split the input on whitespace and remove the pipes, mapping the asterisks to `undef` and preserving the positional data as one long structured array.

Iterating through the indices of this array a second counter is maintained to ratchet through the level count, counting out 2 × *level* - 1 elements at a time. Done this way the children for a given index *n* will be found according to well-defined relationships that can be checked as we go. When we find the first element without children we return the current level count.

```perl
    my $input = shift ;
    say mindepth( parse( $input ) ) if defined $input;;

    sub parse ( $input ) {
        return map { $_ eq '*' ? undef : $_ }
               grep { $_ ne '|' }
               split ' ', $input;
    }

    sub mindepth ( @tree ) {
        my $level = 1 ;
        my $count = 0 ;

        for my $idx ( 0 .. $#tree ) {
            return $level if ( defined $tree[$idx]
                                and not defined $tree[$idx * 2 + 1]
                                and not defined $tree[$idx * 2 + 2] ) ;
            $level++ and $count = 0 if ++$count == 2 ** ($level-1) ;
        }
    }
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/roger-bell-west/javascript/ch-1.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/roger-bell-west/kotlin/ch-1.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/roger-bell-west/lua/ch-1.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 151: Robbing Depth](https://blog.firedrake.org/archive/2022/02/The_Weekly_Challenge_151__Robbing_Depth.html)

Roger brings us two routines: `str2tree()` to parse his input, and `mindepth()` to walk the structure produced and find the minimum depth. The tree itself is a flattened breadth-first traversal, with 0s substituted for the null nodes. This format will not allow a node value to be 0, but accepting that it does make the structure easy to visualize, and null still translates to false in comparisons. It's a reasonable tradeoff as long as you remember it's there.

To find the leaf nodes we walk the indices up from 0, and we look for children by bit-shifting the index left one place. A set of sorting criteria are established: if a node is 0 it cannot be a leaf, and if its first child is over the limit of the array bounds it must be leaf. Otherwise we calculate the child positions and examine them.

Proceeding this way from left-to-right we find the first leaf and count bit-shifts back rightward to get the level. I think the bit-shifting adds a pleasing elegance to the technique.

```perl
    sub str2tree {
      my $st=shift;
      my @o;
      my $d=0;
      my $p=0;
      foreach my $e (split ' ',$st) {
        if ($e eq '|') {
          $d++;
          $p=0;
          my $m=(1<<($d+1))-1;
          if (scalar @o < $m) {
            push @o,(0) x ($m - scalar @o);
          }
        } else {
          my $y=0;
          if ($e ne '*') {
            $y=0+$e;
          }
          my $i=(1<<$d) -1 +$p;
          $o[$i]=$y;
          $p++;
        }
      }
      return \@o;
    }

    sub mindepth {
      my $tree = shift;
      my $firstleaf=scalar @{$tree};
      foreach my $i (0..$#{$tree}) {
        if ($tree->[$i]==0) {
          next;
        } elsif (($i+1) << 1 >= scalar @{$tree}) {
          $firstleaf=$i;
          last;
        } else {
          my $ni=(($i+1) << 1)-1;
          if ($tree->[$ni]==0 && $tree->[$ni+1]==0) {
            $firstleaf=$i;
            last;
          }
        }
      }
      my $t=$firstleaf+1;
      my $d=0;
      while ($t > 0) {
        $t >>= 1;
        $d++;
      }
```

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/abigail/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/abigail/awk/ch-1.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/abigail/bash/ch-1.sh), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/abigail/c/ch-1.c), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/abigail/lua/ch-1.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/abigail/node/ch-1.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/abigail/python/ch-1.py), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/abigail/ruby/ch-1.rb)

Abigail economically breaks the input into an array-of-arrays at the vertical pipes, and then walks each level looking ahead for the first instance of two missing children. With Hasel and Gretel locked in a hut in the woods, we have found the first leaf and the level index is adjusted and returned.

It's a dark tale, but compact and to-the-point.

```perl
    TREE: while (<>) {
        chomp;
        my @tree = map {[map {$_ ne '*'} /\S+/g]} split /\|/;
        foreach my $d (keys @tree) {
            foreach my $i (keys @{$tree [$d]}) {
                if ($tree [$d] [$i] && !$tree [$d + 1] [2 * $i]
                                    && !$tree [$d + 1] [2 * $i + 1]) {
                    say $d + 1;
                    next TREE;
                }
            }
        }
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC151 - Binary Tree Depth - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/02/09/pwc151-binary-tree-depth/)

Flavio has arrived at a very similarly concise solution, solving the problem in two parts: as the manipulation of a string into a multidimensional array and then checking from place-to-place to find the first answer. In one way you can consider the talk of a tree to be a deceptive red-herring, but viewed another the serialized tree is a real tree just as good as any other, merely presented in an unusually flat manner. Like a number, the representation does not alter what it is. And it is a tree. When i run the script here it is a tree grown in Brooklyn.

```perl
    my @levels = map { [ split m{\s+}mxs ] } split m{\s*\|\s*}mxs, $input;
    for my $depth (1 .. $#levels) {
       for my $i (0 .. $levels[$depth - 1]->$#*) {
          next if $levels[$depth - 1][$i] eq '*'
             || ($levels[$depth][$i * 2] // '*') ne '*'
             || ($levels[$depth][$i * 2 + 1] // '*') ne '*';
          say $depth;
          exit 0;
       }
    }
    say scalar @levels;
```



## Blogs and Additional Submissions in Guest Languages for Task 1:


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/james-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #151](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-151/james-smith)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/laurent-rosenfeld/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 151: Binary tree Depth](http://blogs.perl.org/users/laurent_r/2022/02/perl-weekly-challenge-151-binary-tree-depth.html)


[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/lubos-kolouch/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Php](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/lubos-kolouch/php/ch-1.php), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/lubos-kolouch/python/ch-1.py)


[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/peter-campbell-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Locate a leaf and rob a road](https://pjcs-pwc.blogspot.com/2022/02/locate-leaf-and-rob-road.html)


[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/sgreen/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/sgreen/python/ch-1.py)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 151](https://dev.to/simongreennet/weekly-challenge-151-2812)


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/ulrich-rieke/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/ulrich-rieke/cpp/ch-1.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/ulrich-rieke/haskell/ch-1.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/ulrich-rieke/raku/ch-1.raku)


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/wlmb/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 151 – W. Luis Mochán](https://wlmb.github.io/2022/02/07/PWC151/)


------------------------------------------





---

# TASK 2 {#PWC151TASK2}

# Rob The House
*Submitted by: Mohammad S Anwar*

You are planning to rob a row of houses, always starting with the
first and moving in the same direction. However, you can’t rob
two adjacent houses.

Write a script to find the highest possible gain that can be
achieved.

**Example 1:**
```
        Input: @valuables = (2, 4, 5);
        Output: 7
```


If we rob house (index=0) we get 2 and then the only house we can
rob is house (index=2) where we have 5. So the total valuables in
this case is (2 + 5) = 7.

**Example 2:**
```
        Input: @valuables = (4, 2, 3, 6, 5, 3);
        Output: 13
```


The best choice would be to first rob house (index=0) then rob
house (index=3) then finally house (index=5). This would give us
4 + 6 + 3 =13.


## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/abigail/perl/ch-2.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/alexander-pankoff/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/athanasius/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/polettix/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/jo-37/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/lubos-kolouch/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/mattneleigh/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/peter-campbell-smith/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/sgreen/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/ulrich-rieke/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/wlmb/perl/ch-2.pl)

So I've been hearing doomsayer talk for years about the decline of Perl, but have we truly sunk to the point where we're burgling houses now? Oh dear.

Well it's just another example of doing what we must to survive in this challenging world. We might as well be practical about it.

We are however burdened by some unusual conditions in our house-breaking: we must start at the first house, and we cannot hit two houses in a row. As Abigail correctly points out, this means we will never, under any circumstances, rob the second house. I suppose with our luck, that's where all the money is, too. Such is life. Oh why, why did I stay in school?

I could have been someone. I could have been a contender. Now I'm reduced to robbing houses to buy sketchy black-market electricity to keep my screen lit. Day in, day out, got to keep those electrons flowing. The monkey on the keyboard needs his fix. Don't listen to your parents, kids. Don't end up like me.

*(uncomfortable silence as your editor contemplates his life choices)*

Where was I? Oh, right.

We were considering how to best select elements from an array according to a set of conditions, to optimize a sum.

From the conditions, some emergent rules become apparent. Besides never visiting the second house, it's also true that it only makes sense to skip either one or two houses. This follows from the observation that for any longer jump than three, there exists at least one intermediate house that can also be visited before arriving at the same place. As the values are assumed to be positive or at least zero, there is no reason to ever not include the stopovers.

Although negative values are not explicitly excluded, it is rather hard to justify the idea of negative loot in our imaginary scenario. Time-to-rob would be a good negative variable to counter the loot gained and make things nice and complex, but we're not compounding that in here today. Alternately including item weights could turn it into a variant of the [Knapsack Problem](https://en.wikipedia.org/wiki/Knapsack_problem).



There were 18 submissions for the second task this past week.

## a selection from the RIFF-RAFF, PICKPOCKETS and GENTLEMAN THIEVES
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/laurent-rosenfeld/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/sgreen/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/lubos-kolouch/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/ulrich-rieke/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/mattneleigh/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/peter-campbell-smith/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/duncan-c-white/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/james-smith/perl/ch-2.pl), and
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/e-choroba/perl/ch-2.pl)

The most common technique was recursion, exploring from each landing the two possibilites of skipping ahead two or three houses. The complexity expands quadratically, but as we are tasked with robbing real imaginary houses on a real imaginary block the number of houses under consideration should not be too large. After all, the whole purpose of blocks is to break collections of lots onto managable pieces. It's not unreasonable to surmise that very dense blocks and apartment buildings would require a adjustments to both the conditions and the resultant strategy.

A variant on this is to produce the combinations of houses combinatorically up-front, and compute the sums and find the maximal value.

The recursion decisions center around the partial summing of a choice of two positions as we proceed, making the problem suitable to dynamic programming optimization, and we saw several examples of this as well. Ultimately we can remove the recursion from the algorithm completely, and produce a dynamic programming array in a single pass by deciding on partial sums based on previously computed values in same the dynamic array.

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/laurent-rosenfeld/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/laurent-rosenfeld/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 151: Binary tree Depth](http://blogs.perl.org/users/laurent_r/2022/02/perl-weekly-challenge-151-binary-tree-depth.html)

Laurent will start us off with an example of a recursive solution. At every stage a routine, `get_best()` is called with a growing partial sum and the remainder of the array, sliced off and packaged up. Internally both options of skipping ahead two or three houses are explored with another recursive call. A variable in the script scope, `$best_so_far` is kept updated with a running maximum.

```perl
    sub get_best {
        my $sum_so_far = $_[0];
        my @in = @{$_[1]};

        if (@in <= 2)  {
            $sum_so_far += $in[0] if @in == 1;
            $sum_so_far += $in[1] if @in == 2;
            $best_so_far = $sum_so_far if $sum_so_far > $best_so_far;
            return;
        }
        for my $i (0, 1) {
            get_best($sum_so_far + $in[$i], [@in[$i + 2 .. $#in]]);
        }
    }
```

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/sgreen/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/sgreen/python/ch-2.py)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 151](https://dev.to/simongreennet/weekly-challenge-151-2812)

Simon presents another version. In it his `rob()` routine is passed two arguments, the previous loot plus the current house, and the remaining list of houses down the street.

The recursive solutions in general need to accommodate the edge-cases where there are few or no houses on the street.

Here each call returns the larger of the two calls returned to it; as the recursion collapses the maximum gets propagated backwards up the stack until the first call returns the result.

```perl
    # Call the function recursively skipping either one or two houses
    my @hauls = ();
    push @hauls, rob( $haul + $valuables->[0], [ @{$valuables}[ 2 .. $#$valuables ] ] );
    if ( @{$valuables} >= 4 ) {
        push @hauls, rob( $haul + $valuables->[0], [ @{$valuables}[ 3 .. $#$valuables ] ] );
    }

    # Return the largest haul
    return max(@hauls);
```

[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/lubos-kolouch/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Php](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/lubos-kolouch/php/ch-2.php), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/lubos-kolouch/python/ch-2.py)

Here's another by Lubos to give a nice overview of different ways to implement the technique.

```perl
    sub get_houses_max {
        my @houses = @_;

        return $cache{@houses} if $cache{@houses};

        my $max_value = 0;
        my $house_index = 0;
        for my $house (@houses[2..@houses-1]) {
            my $next_houses_values = get_houses_max(@houses[2+$house_index..@houses-1]);
            $max_value = $next_houses_values if $next_houses_values > $max_value;
            $house_index++;
        }

        $cache{@houses} = $houses[0] + $max_value;
        return $houses[0] + $max_value;

    }
```



[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/ulrich-rieke/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/ulrich-rieke/haskell/ch-2.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/ulrich-rieke/raku/ch-2.raku)

Next we have Ulrich, who brings in the `Algorithm::Combinatorics` module to fit the combinations for him. Practically this visits all possibilities, the same as the recursive solution, offloading the work to a compiled library might improve performance.

```perl
    my @robbedValues ;
    my @combilengths ;
    if ( $len % 2 == 1 ) {
        push @combilengths , int( $len / 2 ) , int( $len / 2 ) + 1 ;
    }
    else {
        push @combilengths, int( $len / 2 ) ;
    }
    my @positions = (0 .. $len - 1 ) ;
    for my $combilen ( @combilengths ) {
        my $iter = combinations( \@positions, $combilen ) ;
        while ( my $c = $iter->next ) {
            if ( checkCondition( $c ) ) {
                push @robbedValues , sum (@valuables[ @$c ]) ;
            }
        }
    }
    say max( @robbedValues ) ;
```

[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/mattneleigh/perl/ch-2.pl)

Using dynamic programming, as we process the house array from left to right we can construct a parallel array of partial sums as we go. Each new position added is decided by choosing the maximum sum from the most recent previous partial solutions, themselves chosen from earlier paths. In this way only two partial solutions are used at each decision: "What if we jumped here from two steps back?" and "What if we jumped from three?". Every house after the start gets the same decision, and when we get to the end we have our maximum. Nice.

```perl
    sub calculate_loot_yield_on_street{
        use List::Util qw(max);

        # Empty list, no houses to rob
        return(0)
            unless(@ARG);

        my @loot;
        my $loot_initial;
        my $i;

        # We always start with the first house, as
        # specified (though this seems limiting...)
        $loot_initial = $ARG[0];

        # Strip off the first two houses- we've
        # robbed the first and can't rob the second
        splice(@ARG, 0, 2);

        # Edge cases- zero or one houses left
        return($loot_initial)
            unless(@ARG);
        if(scalar(@ARG) == 1){
            return($loot_initial + $ARG[0]);
        }

        # Proceed as normal(?)
        $loot[0] = $ARG[0];
        $loot[1] = max($ARG[0], $ARG[1]);

        for($i = 2; $i < scalar(@ARG); $i++){
            $loot[$i] = max($ARG[$i] + $loot[$i - 2], $loot[$i - 1]);
        }

        return($loot_initial + $loot[$#loot]);

    }
```

[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/peter-campbell-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Locate a leaf and rob a road](https://pjcs-pwc.blogspot.com/2022/02/locate-leaf-and-rob-road.html)

Peter examines all paths forward at every cycle in his recursion, including those past the third position forward, considering all jumps to the end of the line. There's no harm in this and the algorithm handles a 45-house street in a few seconds.

```perl
    sub robberies {

        # robberies($number, $swag) updates $best with the best result starting from house $number
        # with $swag already in the bag

        my ($number, $swag, $next, $new_swag);

        ($number, $swag) = @_;
        # try all the next allowable houses starting from $number
        for ($next = $number + 2; $next <= $last; $next ++) {
        	$new_swag = $swag + $houses[$next];
        	$best = $new_swag if $new_swag > $best;   # looking good!
        	robberies($next, $new_swag);
        }
    }
```

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/duncan-c-white/perl/ch-2.pl)

Duncan has devised another recursive way to search all the paths, compounding a best total value as he goes:

```perl
    fun maxrobbery( $starthouseno, @valuables )
    {
        my @besth;
        my $besttotal = 0;
        foreach my $hno ($starthouseno+2..$#valuables)
        {
        	# find the best partial solution starting by robbing house $hno
        	my( $mv2, @rh2 ) = maxrobbery( $hno, @valuables );

        	# then find the best of all those partial solutions
        	if( $mv2 > $besttotal )
        	{
        		$besttotal = $mv2;
        		@besth = @rh2;
        	}
        }
        # then the overall best solution involves adding starthouseno
        # to the best partial solution..
        return ( $valuables[$starthouseno]+$besttotal, $starthouseno, @besth );
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/james-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #151](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-151/james-smith)

James delivers a very compact solution that will probably appear quite mysterious, but is a reworking of the dynamic programming solution, working backwards from the end. Fortunately he provides notes to the action, both in the comments and [at his writeup](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-151/james-smith).

```perl
    sub rob {
        ## Line 1 - Trip finishing at the first house the value is the
        ##          points for the first house
        ## Line 2 - If there is more than one house we set the value
        ##          for the second house to be the points for the house
        ##          itself, unless the first house has a better value
        ## Line 3 - We repeat this for the remaining houses.... It is the
        ##          points for this house + the value for two houses before
        ##          or the value for the previous house if it is greater
        ## Line 4 - When we get to the end the result is just the value
        ##          for the last house!
        ##
        ## Comments this way so they don't hide the symmetry of the code
      my @b = shift;
      (push @b,shift    ), $b[-1]<$b[-2] && ($b[-1]=$b[-2]) if  @_;
      (push @b,$_+$b[-2]), $b[-1]<$b[-2] && ($b[-1]=$b[-2]) for @_;
      $b[-1];
    }
```


[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/e-choroba/perl/ch-2.pl)

All of this looking and working backwards to see which position to have traveled from produces the optimal sub-problem can be quite confusing. Choroba has reversed everything, so the algorithm is run forward. However note we're not picking the best option available,  skipping to it and proceeding from there however — rather we're systematically looking at every house and figuring instead the best way to have gotten there. When we're done the value at `$sums[0]` reveals the answer. Dynamic programming is such an intersting technique, currying the data processing.

```perl
    sub rob_the_house {
        my (@valuables) = @_;
        my @sums;
        for my $i (reverse 0 .. $#valuables) {
            $sums[$i] = $valuables[$i];
            if ($i + 2 <= $#valuables) {
                my $add = $sums[$i + 2];
                $add = $sums[$i + 3] if $i + 3 <= $#valuables
                                     && $sums[$i + 3] > $sums[$i + 2];
                $sums[$i] += $add;
            }
        }
        return $sums[0]
    }
```




## Blogs and Additional Submissions in Guest Languages for Task 2:


[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/abigail/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/abigail/awk/ch-2.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/abigail/bash/ch-2.sh), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/abigail/bc/ch-2.bc), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/abigail/c/ch-2.c), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/abigail/go/ch-2.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/abigail/java/ch-2.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/abigail/lua/ch-2.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/abigail/node/ch-2.js), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/abigail/pascal/ch-2.p), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/abigail/python/ch-2.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/abigail/r/ch-2.r), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/abigail/ruby/ch-2.rb), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/abigail/tcl/ch-2.tcl)


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/athanasius/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/athanasius/raku/ch-2.raku)


[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/colin-crain/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/colin-crain/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Burglary Tools](http://colincrain.com/2022/02/12/burglary-tools/)


[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/dave-jacoby/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Dr. Metropolis and His Amazing MANIAC Machine!: The Weekly Challenge #151 | Committed to Memory](https://jacoby.github.io/2022/02/07/dr-metropolis-and-his-amazing-maniac-machine-the-weekly-challenge-151.html)


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC151 - Rob The House - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/02/10/pwc151-rob-the-house/)


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/roger-bell-west/javascript/ch-2.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/roger-bell-west/kotlin/ch-2.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/roger-bell-west/lua/ch-2.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/roger-bell-west/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/roger-bell-west/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 151: Robbing Depth](https://blog.firedrake.org/archive/2022/02/The_Weekly_Challenge_151__Robbing_Depth.html)


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-151/wlmb/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 151 – W. Luis Mochán](https://wlmb.github.io/2022/02/07/PWC151/)


------------------------------------------





---

<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>

<center>
<h1 id="PWC151BLOGS">_________ THE BLOG PAGES _________</h1>
</center>


---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, by some miracle I somehow continue to maintain my bearings.**

**Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your Unquenchable *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC151BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *FOLLOW* these *BLOG* *LINKS*:

**( ...*don't think, trust your training, you're in the zone, just do it ...* )**


**Arne Sommer**

 * [The Tree House with Raku](https://raku-musings.com/tree-house.html) ( *Raku* )

**Colin Crain**

 * [No Diving in the Shallow End - Programming Excursions in Perl and Raku](https://colincrain.com/2022/02/12/no-diving-in-the-shallow-end/) ( *Perl & Raku* )
 * [Burglary Tools](http://colincrain.com/2022/02/12/burglary-tools/) ( *Perl & Raku* )


**Dave Jacoby**

 * [Dr. Metropolis and His Amazing MANIAC Machine!: The Weekly Challenge #151 | Committed to Memory](https://jacoby.github.io/2022/02/07/dr-metropolis-and-his-amazing-maniac-machine-the-weekly-challenge-151.html) ( *Perl* )

**Flavio Poletti**

 * [PWC151 - Binary Tree Depth - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/02/09/pwc151-binary-tree-depth/) ( *Perl & Raku* )
 * [PWC151 - Rob The House - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/02/10/pwc151-rob-the-house/) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #151](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-151/james-smith) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 151: Binary tree Depth](http://blogs.perl.org/users/laurent_r/2022/02/perl-weekly-challenge-151-binary-tree-depth.html) ( *Perl & Raku* )

**Peter Campbell Smith**

 * [Locate a leaf and rob a road](https://pjcs-pwc.blogspot.com/2022/02/locate-leaf-and-rob-road.html) ( *Perl* )

**Roger Bell_West**

 * [RogerBW's Blog: The Weekly Challenge 151: Robbing Depth](https://blog.firedrake.org/archive/2022/02/The_Weekly_Challenge_151__Robbing_Depth.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 151](https://dev.to/simongreennet/weekly-challenge-151-2812) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 151 – W. Luis Mochán](https://wlmb.github.io/2022/02/07/PWC151/) ( *Perl* )
