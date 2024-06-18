---
author:       Colin Crain
date:         2021-09-27T00:00:00
description:  "Colin Crain › Perl Weekly Review #129"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #129"
image:        images/blog/p5-review-challenge-129.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-128/).* )

Welcome to the Perl review for **Week 129** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

---

### Why do we do these challenges?

I suppose any answers to that would be as wide ranging and varied as the people who choose to join the team. One thing is clear: it's not a competition, and there are no judges, even if there is a "prize" of sorts. About that -- I think of it more as an honorarium periodically awarded to acknowledge the efforts we make towards this strange goal. So there's no determination to find the *fastest*, or the *shortest*, or even, in some abstract way, the *best* way to go about things, although I'm certain the individuals have their own aspirations and personal drives. As Perl is such a wonderfully expressive language, this provides quite a bit of fodder to the core idea of TMTOWTDI, producing a gamut of wonderfully varied techniques and solutions.

Even the tasks themselves are often open to a certain amount of discretionary interpretation. What we end up with is a situation where each participant is producing something in the manner they find the most interesting or satisfying. Some team members focus on carefully crafted complete applications that thoroughly vet input data and handle every use case they can think up. Others choose to apply themselves to the logic of the underlying puzzle and making it work in the most elegant way they can. Some eschew modules they would ordinarily reach for, others embrace them, bringing to light wheels perhaps invented years ago that happen to exactly solve the problem in front of them today.

I've been considering this question for some time and have found one binding commonality between all of us solving these challenges each week, in that however we normally live our lives, the task in front of us more than likely has nothing to do with any of that . And I think this has great value. We all do what we do, out in the real world, and hopefully we do it well. The Weekly Challenge provides a opportunity to do something germane to that life yet distinctly different; if we only do the things we already know how to do we only do the same things over and over. This is where the "challenge" aspect comes into play.

So we can consider the Weekly Challenge as providing a problem space outside of our comfort zone, as far out from comfort as we wish to take things. From those reaches we can gather and learn things and bring what we want back into our lives. Personally, I think that's its greatest value of all.

---

Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due. And that's why I'm here, to try and figure out how to do that.

Let's have a look and see what we can find.

---

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-129/) or the summary [**recap**](/blog/recap-challenge-129/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC129TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC129TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC129BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC129TASK1}

# Root Distance
*Submitted by: Mohammad S Anwar*

You are given a tree and a node of the given tree.

Write a script to find out the distance of the given node from the root.

**Example 1:**
```
    Tree:
            1
           / \
          2   3
               \
                4
               / \
              5   6

    Node: 6
    Output: 3 as the distance of given node 6 from the root (1).

    Node: 5
    Output: 3

    Node: 2
    Output: 1

    Node: 4
    Output: 2
```

**Example 2:**
```
    Tree:
            1
           / \
          2   3
         /     \
        4       5
         \     /
          6   7
         / \
        8   9

    Node: 7
    Output: 3 as the distance of given node 6 from the root (1).

    Node: 8
    Output: 4

    Node: 6
    Output: 3
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/abigail/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/adam-russell/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/cheok-yin-fung/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/dave-jacoby/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/polettix/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/jo-37/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/mattneleigh/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/pete-houston/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/roger-bell-west/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/wlmb/perl/ch-1.pl)

Welcome to the review pages for The Weekly Challenge 129. It was an unusually light week for turnout, with only 12 submissions for the first task. The vagaries of life being what they are, I'm sure there's no particular meaning to be derived from that; statistically we'll have more or less as we go. What it does mean is that we'll have a chance to look at all of the solutions.

It seems that many members who have contributed for some time have by this point decided on an approach to trees, binary and otherwise, that best suits them, and perhaps even have a library waiting that they can reach for, full of various Node and Tree and Graph parts to build on. I expect we'll see a lot of that today.

Also, it has been well noted previously on the difficulties associated with Input and Output of trees — in short there is no good way that is easily readable by both humans and machines. As such we will see some serialized input schemes, but also cases where the examples are hard-coded in, focusing on the logic of the data manipulation over the complexities of I/O. I see the construction of trees a good puzzle in its own right, but somewhat divorced from the specific problem at hand. Although, of course, that need not be the case, as careful selection of our tree data model can make the task request quite simple.

As we only have a dozen submissions let's have a look at them and see what pops out.

## an ASSORTMENT of SCHEMES and MACHINATIONS

Before we start, a couple of notes should be brought up:
1. The trees in question, although exemplified as binary trees, are not actually declared as such, and hence could be *n*-ary.
2. The example trees, drawn using ASCII characters, are perfectly valid structures, but this drawing format cannot be used to draw any valid binary tree, as at the second level and beyond there will be space conflicts among the inner nodes, which only become worse as the tree grows. Thus beyond the limited examples given, this method, as-is, can only be used to draw a certain subset of sparse binary trees out of all possible variations.
2. It's not *exactly* clear how the given node is specified. In a binary tree node we have at minimum set comprised of a value, with possible set nodes for the left and right children if present, with the null set, ∅, as an alternative. Optionally a label can also be provided, allowing independant identification of individual nodes. In the examples given this is not the case, and the nodes are identified by their value, which must therefore be unique within the structure. This uniqueness is not specified, but should we continue to use the values as identifiers this *must* follow.

[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/mattneleigh/perl/ch-1.pl)

To start us off let's have a look at Matthew's submission.

Matthew directly defines his tree an a hard-wired multidimensional hash. This is of course a perfectly valid way of going about this, as the most common uses of some sort of Node objects to construct trees are implemented as hashs with keys referencing other hashes; this is unblessed version but otherwise essentially the same structure.

Once he has his tree he performs a depth-first traversal to visit all the nodes. As nodes are visited, a running depth counter is used to record the target node depths in a separate hash.

```perl
    sub _depth_search_recursor{
        my $node = shift();
        my $input_table = shift();
        my $output_table = shift();
        my $depth = shift();

        # If we're at an undefined node
        # or the input table is empty,
        # just return
        return() unless(defined($node) && %{$input_table});

        if($input_table->{$node->{d}}){
            # This is a node we're looking for-
            # delete it from the input table and
            # make a note of its depth in the
            # output table
            delete($input_table->{$node->{d}});
            $output_table->{$node->{d}} = $depth;
        }

        # Dig deeper to the left and to
        # the right
        _depth_search_recursor(
            $node->{l}, $input_table, $output_table, $depth + 1
        );
        _depth_search_recursor(
            $node->{r}, $input_table, $output_table, $depth + 1
        );

        return();

    }
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/dave-jacoby/perl/ch-1.pl)

&nbsp;&nbsp;**blog writeup:**
[‘List’ Ain’t Nothin’ But ‘Tree’ Misspelled: The (Perl) Weekly Challenge #129 | Committed to Memory](https://jacoby.github.io/2021/09/06/list-aint-nothin-but-tree-misspelled-the-perl-weekly-challenge-129.html)

Alternately, Dave employs a nice `Node` package he has written, with getter/setter methods for constructing the tree, child-by-child. It also retains the parent information, which makes a solution to this problem straightforward. The nodes are held as an array of hashes, with each containing its relevant information in its keys. Because the top-level abstraction is a list, iterating over this provides direct access to the nodes. For each node found, a routine `root_distanced()` back-traces the `parent` links upwards until the root node is found, counting each step. This count is returned.

```perl
    sub root_distanced ( $nodes, $n ) {
        my $d    = 0;
        my $node = $nodes->{$n};
        while ( !$node->is_root() ) {
            $d++;
            $node = $node->parent();
        }
        return $d;
    }

    package Node;

    sub new ( $class, $value = 0 ) {
        my $self = {};
        $self->{value}      = $value;
        $self->{left}       = undef;
        $self->{right}      = undef;
        $self->{horizontal} = undef;
        $self->{parent}     = undef;
        return bless $self, $class;
    }

    sub value ( $self, $value = undef ) {
        if ( defined $value ) {
            $self->{value} = $value;
        }
        else {
            return $self->{value};
        }
    }

    sub is_root ( $self ) {
        return defined $self->{parent} ? 0 : 1;
    }

    sub left ( $self, $node = undef ) {
        if ( defined $node ) {
            $self->{left}   = $node;
            $node->{parent} = $self;
        }
        else {
            return $self->{left};
        }
    }

    sub parent ($self ) {
        return $self->{parent};
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/polettix/raku/ch-1.raku)

&nbsp;&nbsp;**blog writeup:**
[PWC129 - Root Distance - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/09/08/pwc129-root-distance/)

Flavio minimally abstracts his tree nodes as a hash with two keys: a `label`, in this context the value of the node, and `children`, which points to an array of child nodes. Once the data is loaded in, a depth-first traversal of the nodes is made to determine the depth of a specified node when visited.

Of note is a some slightly disturbing abuse (not my word, by the way) of an `eval`/`die` construct to short-circuit control flow on success that deserves a closer look.

```perl
    sub depth ($root, $label) {
       my $depth = 0;
       eval {
          depth_first_visit(
             start => $root,
             successors => sub ($n) { ($n->{children} // [])->@* },
             identifier => sub ($n) { $n->{label} },
             pre_action => sub ($n, $parent) {
                die 'done!' if $n->{label} eq $label;
                ++$depth;
             },
             post_action => sub { --$depth },
          );
          1;
       } or return $depth;
       return 'NaN';
    }
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/roger-bell-west/rust/ch-1.rs)

&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: Perl Weekly Challenge 129: Eats Roots and Lists](https://blog.firedrake.org/archive/2021/09/Perl_Weekly_Challenge_129__Eats_Roots_and_Lists.html)

Roger is a strong proponent of serializing binary tree data onto a list with fixed index relationships. That is the root node is [0], with left and right child nodes at [1] and [2], which in turn have their children at left [3] right [4], and left [5] right [6]. This is generalized to any node at index [*n*] will have left and right children at [2*n*+1] and [2*n*+2].

As the format only describes complete trees, each level of depth adds another 2<sup>*depth*</sup> indices to the array, which becomes quite long quite quickly, but Roger has provided an interesting, more human-readable variant by assigning the value 0 to null nodes and a applying some self-descriptive indentation:

For example *example 1*:

```
    [          1,
           2,      3,
         0,  0,  0,  4,
        0,0,0,0,0,0,5,6    ]
```

Because of the fixed structure in the serialized format, the depth of an element can be derived by its index: all four of the second-level nodes will always be located at indices 3 through 6, and these indices will always comprise the second level.

Although I have lately taken to building my own node library package for sport, I whole-heartedly agree with Roger's enthusiasm for the serialized tree format. It really is a joy to work with.

```perl
    sub rd {
      my ($tree,$content)=@_;
      my $depth=0;
      my $dl=1;
      my $db=1;
      foreach my $i (0..$#{$tree}) {
        if ($tree->[$i] == $content) {
          return $depth;
        }
        $dl--;
        if ($dl==0) {
          $db*=2;
          $dl=$db;
          $depth++;
        }
      }
      return -1;
    }
```


[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/pete-houston/perl/ch-1.pl)

In a remarkably different vein, we have Pete.

Pete takes a very literal and direct approach to scanning a tree, by taking a the ascii drawing of a tree:

```
            1
           / \
          2   3
               \
                4
               / \
              5   6
```

as an input file and parsing that. Using a negated character class the lines read in are parsed for values, and if found they are loaded into a hash with an associated depth. The depth is a counter that is only incremented when a new level with values is found.

```perl
    while ($_ = <$inh>) {
        my @payloads = /[^\\\/\s]+/g;
        if (scalar @payloads) {
        	for my $p (@payloads) {
        		die "Non-unique payload $p.\n" if exists $distance{$p};
        		$distance{$p} = $len;
        	}
        	say "len $len";
        	$len++;
        }
    }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/e-choroba/perl/ch-1.pl)

Choroba delivers a quick `Tree` class built from child nodes attached upwards to a parent. This little inversion trick makes ascending upwards to the root a simple recursive routine, counting one step per cycle as the recursion collapses. I find the multiple pattern inversions in this compact solution quite fascinating, inverting the frame of reference to look from the back forwards, so to speak.

```perl
    {   package Tree;
        use Moo;

        has root => (is => 'ro');
        has parent => (is => 'lazy');

        sub add_child {
            my ($self, $value, $parent) = @_;
            die "Unknown parent $parent" unless exists $self->parent->{$parent};

            die "Duplicate parent for $value" if defined $self->parent->{$value}
                                              && $self->parent->{$value} != $parent;

            $self->parent->{$value} = $parent;
        }

        sub rank {
            my ($self, $value) = @_;
            return 0 unless $self->parent->{$value};

            return 1 + $self->rank($self->parent->{$value})
        }

        sub _build_parent {
            my ($self) = @_;
            +{ $self->root => 0 }
        }
    }
```

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/adam-russell/perl/ch-1.pl)

&nbsp;&nbsp;**blog writeup:**
[Two Exercises in Fundamental Data Structures — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2021/09/12)

After what appears to be 128 previous attempts (*I jest! I jest! Put down that pointed stick, good sir!*) Adam's `Tree129()` routine seems to finally do what he wants.

To build his tree he uses a collection of nested structs, with this functionality delivered through the module `Class::Struct`. Omitted here is a whole section using `Tie::RefHash` for the actual construction, but that is definitely worth a look. The root-node distance is calculated using a breadth-first search of the resulting tree, searching downwards until the desired node is found.

```perl
    package Tree129{
        use Class::Struct;

        package Node{
            use boolean;
            use Class::Struct;
            struct(
                value => q/$/,
            );
            true;
        }

        package Edge{
            use boolean;
            use Class::Struct;
            struct(
                weight => q/$/,
                source => q/Node/,
                target => q/Node/
            );
            true;
        }

        struct(
            root => q/Node/,
            edges => q/%/
        );

        sub distance{
            my($self, $target) = @_;
            my $distance = 0;
            return $distance if($self->root()->value() == $target);
            my @nodes = @{$self->edges()->{$self->root()}};
            my @edge_sources = keys %{$self->edges()};
            do{
                $distance++;
                return $distance if((grep {$_->value() == $target} @nodes) > 0);
                my @child_nodes;
                for my $node (@nodes){
                    my @k = grep {$_->value() == $node->value()} @edge_sources;
                    push @child_nodes, @{$self->edges()->{$k[0]}} if $k[0] && $self->edges()->{$k[0]};
                }

                @nodes = @child_nodes;
            }while(@nodes);
            return -1;
        }
    }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/wlmb/perl/ch-1.pl)

&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 129 – W. Luis Mochán](https://wlmb.github.io/2021/09/06/PWC129/)

Much like what we saw with Pete earlier, Luis analyzes a *textual* representation of the tree, looking for the specified node value. To get around the obvious — and perhaps less-than-obvious — limitations of ASCII tree representations, he has adopted instead an indentation-based outline format borrowed from the venerable text editor emacs' org-mode. For example, the first example —

```
        1
       / \
      2   3
           \
            4
           / \
          5   6
```


comes out like this:

```
    - 1
      - 2
      - 3
        -
        - 4
          - 5
          - 6
```

As we've said before, the node value, because we're using it for the label identifier, must be unique. Because we know the root is at the top of the structure, the distance from the root can be immediately inferred from its indentation level.

```perl
    sub analyze_line {
    # Read and analyze lines. Keep them until their turn if outdented
        state ($line, $current_indent, $value);
        my $previous_indent=shift;
        if(!defined $current_indent){
        $line=<STDIN>;
        return () if !defined $line || $line=~m/^\s*$/;
        die "Malformed tree: $line" unless $line=~m/^(\s*)-\s*(\d*)\s*$/;
        $current_indent=length $1;
        $value=$2;
        }
        if($current_indent>$previous_indent){
        my $result_indent=$current_indent;
        $current_indent=undef;
        return ($result_indent, $value);
        }
        return ();
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/james-smith/perl/ch-1.pl)

&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #129](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-129/james-smith)

James' tree library, `BinaryTree` has grown rather lengthy as we continue to revisit this data structure, adding methods and attributes as new functionality is required. In this episode, a `parent` attribute is added, making the nodes doubly-linked. From there, an `ancestors()` method will ascend the parent-link chain to the top, storing the nodes found. The scalar of this list is the distance.


```perl
    sub ancestors {
      my $self = shift;
      my $x = $self;
      my @ancestors;
      while($x->has_parent) {
        push @ancestors, $x;
        $x = $x->parent;
      }
      return @ancestors;
    }
```


[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/jo-37/perl/ch-1.pl)

Jorg does not appear to frivolously flit between the vast selection of modules available on CPAN, choosing instead to throughly explore the depths of a few of the most complex efforts. One of these is the `Graph` module. A tree, binary or otherwise, is a restricted form of a graph, and the tools for one can generally be used for the other, within the constraints specified.

Once the structure is fitted into a `Graph` object, the module provides a implementation of [Floyd-Warshall's algorithm](https://en.wikipedia.org/wiki/Floyd–Warshall\_algorithm),   `all_pairs_shortest_paths()`, which will compute the minimal distance between each pair of vertices in a graph.  *That* object, once prepared, can then be asked to provide the distance between the root and any other node.

```perl
    sub apsp (@nodes) {
        my $g = Graph->new(directed => 1);
        my $root;
        for my $node (@nodes) {
            my ($id, $left, $right) = split /:/, $node;
            $root //= $id;
            $g->add_edge($id, $left) if $left;
            $g->add_edge($id, $right) if $right;
        }
        ($g->all_pairs_shortest_paths, $root);
    }

    sub node_distance ($apsp, $root, $node) {
        $apsp->path_length($root, $node);
    }
```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/cheok-yin-fung/perl/ch-1.pl)

&nbsp;&nbsp;**blog writeup:**
[Basic Data Structure Experiments with Object::Pad (for The Weekly Challenge #129) ](https://e7-87-83.github.io/coding/challenge_129.html)


CY presents us with a object solution using Paul Evans' experimental and *very* interesting `Object::Pad` module to implement her tree nodes. `Object::Pad`, for those who follow such things, amounts to a practical working subset of the efforts going into the `Corrina` proposed modern Perl object system. For those who *don't* follow such things, there's an enormous amount of [cool thinking going into this project](https://github.com/Ovid/Cor/wiki). I, for one, am very excited to follow its development.

Although the syntax diverges somewhat from that of Moo or Moose, and quite a bit from the standard Perl object form, I think anyone familiar with the underlying ideas should have no trouble identifying the various parts of the object. The `root_distance()` method, then, walks backwards up through the `parent` attributes, counting the steps along the way, until it finds the top.

```perl
    use Object::Pad 0.51;
    use Object::Pad::SlotAttr::Isa;

    class TreeNode {
        has $parent :reader :writer :param :Isa(TreeNode) = undef;
        has $list_of_children :reader :writer :param = [];
        has $is_root :reader :param = 0;

        method set_children {
            my $c = $_[0];
            $c->set_parent($self);
            push $list_of_children->@*, $c;
        }

        method root_distance {
            my $p = $self;
            my $d = 0;
            while (! $p->is_root) {
                $p = $p->parent;
                $d++;
            }
            return $d;
        }

        BUILD {
            if (defined($parent)) {
                $parent->set_children($self);
            }
            else {
                $is_root = 1;
            }
        }
    }
```

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/abigail/perl/ch-1.pl)

&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 129: Root Distance](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-129-1.html)

Abigail, in a less complex, more direct version than Adam above, also uses a breadth-first search to compute the requested value.

```perl
    while (@todo) {
        my ($node, $distance) = @{shift @todo}
        if ($node == $target) {
            say $distance;
            exit;
        }
        next if $seen {$node} ++;
        push @todo => map {[$_, $distance + 1]} @{$$graph {$node}}
    }
```





------------------------------------------

---

# TASK 2 {#PWC129TASK2}

# Add Linked Lists
*Submitted by: Mohammad S Anwar*
You are given two linked list having single digit positive numbers.

Write a script to add the two linked list and create a new linked representing the sum of the two linked list numbers. The two linked lists may or may not have the same number of elements.

HINT: Just a suggestion, feel free to come up with your own unique way to deal with the task. I am expecting a class representing linked list. It should have methods to create a linked list given list of single digit positive numbers and a method to add new member. Also have a method that takes 2 linked list objects and returns a new linked list. Finally a method to print the linked list object in a user friendly format.
**Example 1:**
```
Input: L1 = 1 -> 2 -> 3
       L2 = 3 -> 2 -> 1
Output: 4 -> 4 -> 4
```
Operation: Pick the first rightmost element of L1 i.e. 3 and adds to the first rightmost element of L2 i.e. 1. Finally store the result i.e. 3 in the new linked list. Move to the next one of both linked lists L1 and L2, perform the same operation. In case the sum >= 10 then you apply the same rule you would do to regular addition problem i.e. divide the sum by 10 keep the remainder and push to the new linked list. Don't forget to carry, 1, to the next operation. In case one linked list is smaller than the other, you can safely assume it is 0.

**Example 2:**
```
Input: L1 = 1 -> 2 -> 3 -> 4 -> 5
       L2 =           6 -> 5 -> 5
Output:     1 -> 3 -> 0 -> 0 -> 0
```

Operations:
1. 1st member of L1 = 5 and 1st member of L2 = 5
2. 5 + 5 = 10
3. 0 pushed to the new linked list.
4. carry forward 1.
5. 2nd member of L1 = 4 and 2nd member of L2 = 5
6. 4 + 5 + 1 (carry) = 10
7. 0 again pushed to the new linked list.
8. carry forward 1.
9. 3rd member of L1 = 3 and 3rd member of L2 = 6
10. 3 + 6 + 1 (carry) = 10
11. 0 pushed to the new linked list.
12. carry forward 1.
13. 4th member of L1 = 2 and assume 0 as the 4th member of L2 since there are only 3 members.
14. 2 + 1 (carry) = 3
15. 3 pushed to the new linked list.
16. 5th member of L1 = 1 and assume 0 as the 5th member of L2 since there are only 3 members.
17. 1 + 0 = 1
18. 1 pushed to the new linked list.

So the new linked list now have:
```
    1 -> 3 -> 0 -> 0 -> 0.
```
The above suggestion is one way, not necessarily the best way to deal with it.

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/abigail/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/polettix/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/jo-37/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/peter-campbell-smith/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/sgreen/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/wlmb/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/wanderdoc/perl/ch-2.pl)

I have to say I had a certain amount of initial confusion simply understanding what was being asked for in task number 2. The curious, unexpected and most-questionably-practical mashup of linked lists and representative positional addition — well, let's just say it wasn't the first thing that came to mind on reading the opening paragraphs. Coming at it from the idea of a zip-merge operation of some sort put me on the wrong track from the start, and only with the clarifications in the examples did it come out with what was actually expected for a result. It's like doing longhand addition on paper, only using linked lists to hold the individual digits, with the links encoding the positional data in the length of the lists. Hmm... ok, sure. Why not? *(note: there was a sizable chatter generated speaking to this question.)*

Postmodernism and poststructuralism hold comfortable residences in the fancy, expensive parts of my brain — you know, down by the river — so I am able to accomodate the unexpected juxtaposition of these two ideas, even if I can't really come up with a reason why. Sometimes I just don't need to know. We'll look at it for what it is and that will be it.

There were a total of only 9 properly working submissions for the second task this past week. I tried to be as broad-minded as possible, open to varying interpretation, but many just didn't work. The largest recurring problem found arose from improperly carrying the final 1 into a new list root position if there was none previous in either input list. For example, 9 -> 8 -> 7 added to 4 -> 5 -> 6 should yield 1 -> 4 -> 4 -> 3, not 4 -> 4 -> 3. I really can't come up with any reason that leading 1 node should be omitted, no matter how the directive is interpreted.

## on the SUBJECT of LINKED LISTS

Whenever linked lists get brought up in Perl, there inevitably follows a collision with the built-in Perl array data-structure. A linked list, abstractly, is a collection where we have a known first piece of data, and each datum in the whole knows the location of the following datum. Optionally there may also be knowledge of the proceeding item as well. There are many ways to implement this idea: from the structurally complex, using blessed objects with labeled attributes holding references to the next object, to the decidedly simple, mapping the list to a vanilla Perl array. The thing is, that a Perl array really can be considered a bidirectional linked list for all intents and purposes. Looked at as a black box, it does what's required. Lower-level languages without the functionality of a good Perl array might require a linked list, sure, but what can these lists do that arrays can't? With `push`, `pop`, `shift`, `unshift` and `splice` we're pretty well covered. In fact, `splice` is really all one needs, as it can emulate the rest of the operations.

I do, however, think the underlying ideation behind linked lists is valuable.  Even if simple lists are not the most practical thing when we have Perl arrays just sitting there, the ideas involving these chained linkages will still find their home in much more complex objects. So there's always that to consider.

Which leads us to the decidedly unusual, some would say unnatural, use of linked lists to add two positionally represented numbers. Needless to say there will be a bit of variation in technique. Keep your head and hands inside the vehicle at all times, your personal belongings close and *please* watch out for the flames.

[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/peter-campbell-smith/perl/ch-2.pl)

Peter considers the input strings as, well, the input, and hence fair game, parsing each directly with a regular expression to extract the last digit from the string. The two last digits are added and any leading carry is removed and reserved for the next calculation.

Do the successive characters in a Perl string — a quietly very fancy data structure in itself — qualify, much like a Perl array, as a linked list? There are languages that implement strings this way. I say sure, why not, with points for creativity.

```perl
    $L1 = $L1_left =      '9 -> 2 -> 0 -> 0 -> 5 -> 0 -> 7 -> 0';
    $L2 = $L2_left = '     9 -> 9 -> 0 -> 8 -> 3 -> 9 -> 7 -> 0';

    # cycle back from the end of each list
    $carry = 0;
    $L3 = '';
    while ($L1_left =~ m|\d| or $L2_left =~ m|\d| or $carry) {   # not finished yet
        $one = $two = 0;
        ($L1_left, $one) = ($1, $2) if $L1_left =~ m|(.*)(\d)|;  # strip off last (remaining) digit of each list
        ($L2_left, $two) = ($1, $2) if $L2_left =~ m|(.*)(\d)|;
        $sum = $one + $two + $carry;                      # add the two digits and any carryover
        $units = $sum % 10;                               # get new digit
        $L3 = "$units -> $L3";							  # add it to the start of L3
        $carry = ($sum - $units) / 10;                    # and compute any carryover (can only be 0 or 1)
    }
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/jo-37/perl/ch-2.pl)

Jorg takes a somewhat more traditional approach to the implementation, creating a minimal `SLL` object, a hash with two keys, for the data and the current node position, along with methods for access and manipulation. The data itself is stored as an array of nodes, each node having two positions: the location of the following node and the encapsulated data.

To add the lists the underlying numbers are extracted, added and then converted back into a new list.

```perl
    # The task is basically a pencil-and-paper addition with carry.
    # Retrieve the numbers represented by the digits in the linked lists by
    # traversing them, add the numbers and build a new linked list from the
    # sum's digits.  This works with any number of input lists.
    sub add_linked_lists (@lists) {
        my $sum;
        for my $sll (@lists) {
            $sll->head;
            my $i = 0;
            while (defined (my $data = $sll->data)) {
                $i = $i * 10 + $data;
                $sll->next;
            }
            $sum += $i;
        }
        my $sumlist = SLL->new;
        $sumlist->insert(substr $sum, 0, 1, '')->next while length $sum;

        $sumlist;
    }
```

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/wanderdoc/perl/ch-2.pl)

The doc defined their list as nodes of anonymous arrays with three elements, the numerical indices replaced with the constants VAL, NEXT and PREV to help keep things straight. Having the list be bidirecional makes walking backwards up from the previous element a straightforward operation.

```perl
    sub add_lists
    {
         my ($first, $second) = @_;
         my $count_first = 0;
              do { $count_first++ and $first = $first->[NEXT] } while $first->[NEXT];

         my $count_second = 0;
              do {$count_second++ and $second = $second->[NEXT]} while $second->[NEXT];

         my $new_list = $count_first > $count_second ? dclone($first) : dclone($second);
         my $carry = 0;

         while (defined $new_list->[PREV]->[VAL])
         {

              my $one = $first->[VAL];
              my $two = $second->[VAL];
              $new_list->[VAL] = $one + $two + $carry;
              $carry = 0;
              if ( $new_list->[VAL] > 9 )
              {
                   $carry = int($new_list->[VAL] / 10);
                   $new_list->[VAL] = $new_list->[VAL] % 10;
              }
              $first = defined $first->[PREV]->[VAL] ? $first->[PREV] : [0]; ;
              $second = defined $second->[PREV]->[VAL] ? $second->[PREV] : [0] ;
              $new_list = $new_list->[PREV];

         }

         $new_list->[VAL] = $first->[VAL] + $second->[VAL]; # last(first).

         if ( $carry > 0 )
         {
              $new_list->[VAL] += $carry;

              if ( $new_list->[VAL] > 9 )
              {
                   $carry = int($new_list->[VAL] / 10);

                   $new_list->[VAL] = $new_list->[VAL] % 10;
                   $new_list->[PREV] = [$carry, $new_list, undef];
                   $new_list = $new_list->[PREV];
              }
         }
         return $new_list;
    }
```

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/sgreen/perl/ch-2.pl)

&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 129](https://dev.to/simongreennet/weekly-challenge-129-33kn)

Simon gives us a nice pair of packages, `LinkedList` and `LinkedList::Node` to define his list objects, and then overloads the `+` symbol with a custom `_add()` function:

```perl
    use overload '+' => \&_add, '""' => \&as_string;

        ...

    my $sum = $list1 + $list2;
    say $sum;
```

That certainly looks nice. As for that overloaded addition,

```perl
    sub _add {
        # Overloaded '+' function, to add two linked lists together
        my ( $first, $second ) = @_;
        my $new_list = LinkedList->new();

        my $first_node  = $first->last;
        my $second_node = $second->last;

        my $carry = 0;

        while ( $first_node or defined $second_node or $carry ) {
            my $sum =
              ( defined $first_node  ? $first_node->value  : 0 ) +
              ( defined $second_node ? $second_node->value : 0 ) +
              $carry;
            $new_list->unshift( $sum % 10 );
            $carry = int( $sum / 10 );

            $first_node  = $first_node->prev  if defined $first_node;
            $second_node = $second_node->prev if defined $second_node;
        }

        return $new_list;
    }
```

As the nodes are stored internally in an anonymous array, obtaining `$list->last` is as easy as grabbing the last value, `[-1]`.


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: Perl Weekly Challenge 129: Eats Roots and Lists](https://blog.firedrake.org/archive/2021/09/Perl_Weekly_Challenge_129__Eats_Roots_and_Lists.html)

Roger stores his list as an array of hash references, each containing a value and a pointer to the next item, which is simply the following index in the array, but is, notably, a pointer and undeniably does exist. To do the actual addition we destructure the list data into an array, reverse and add the element pairs according to the carry rules, and then reverse and re-listify the outcome.

Points for being "technically correct, the best kind of correct." Carry on...

```perl
    sub piecewise_add {
      my $self=shift;
      my $other=shift;
      my @a=reverse @{$self->as_arrayref};
      my @b=reverse @{$other->as_arrayref};
      while (scalar @a < scalar @b) {
        push @a,0;
      }
      while (scalar @b < scalar @a) {
        push @b,0;
      }
      my @c;
      my $carry=0;
      foreach my $i (0..$#a) {
        my $d=$a[$i]+$b[$i]+$carry;
        push @c,$d % 10;
        $carry=int($d/10);
      }
      if ($carry) {
        push @c,1;
      }
      my $out=Local::LinkedList->new;
      $out->append([reverse @c]);
      return $out;
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/polettix/raku/ch-2.raku)

&nbsp;&nbsp;**blog writeup:**
[PWC129 - Add Linked Lists - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/09/09/pwc129-add-linked-lists/)

Flavio gives us a `LinkedList` of `LinkedLstItem` nodes, containing a method `add()` to sum with another such list. So far so good. Of note we again see `+` overloaded to point to a custom `add()`, which, because we're using signatures, will balk when the argument count is off. Hence he's put in an extra, "catch-all" parameter to soak up the third "swap" argument quietly added by the overload pragma.

```perl
    sub add ($s, $t, @ignore) {
       my $ps = $s->reverse->{head};
       my $pt = $t->reverse->{head};
       my $r = LinkedList->new;
       my $carry = 0;
       while (defined($ps) || defined($pt) || $carry) {
          my ($vs, $vt) = map {
             (my $v, $_) = $_ ? ($_->label, $_->succ) : (0, undef);
             $v;
          } ($ps, $pt);
          my $v = $vs + $vt + $carry;
          ($v, $carry) = $v > 9 ? ($v - 10, 1) : ($v, 0);
          $r->insert($v);
       }
       return $r;
    }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/wlmb/perl/ch-2.pl)

&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 129 – W. Luis Mochán](https://wlmb.github.io/2021/09/06/PWC129/)

Luis starts with an explanation of his reasoning, which I can find no fault in:

>There are many ways to describe linked lists. In Perl I could use a simple array, as splicing allows all operations that could be done with linked lists. Furthermore, as each element contains only one digit, I could represent the array by a string. Finally, strings can represent numbers.

Let me get this straight: so by splitting the input to extract the "->" connectors, rejoining the resulting list of digits into a string, and then allowing Perl to automagically parse that string as a number when required, we can just add the numbers, right?

And so it was written.

```perl
    use List::Util qw(all);
    use bigint; # to allow large lists

    my @A=split /\s*->\s*/, shift @ARGV;
    my @B=split /\s*->\s*/, shift @ARGV;

    my $A=join '', @A;
    my $B=join '', @B;
    my $length=@A-@B;
    my $indent_A=$length<0?"   "x(-$length):"";
    my $indent_B=$length>0?"   "x  $length :"";
    say "Input: L1=$indent_A", join "->", @A;
    say "       L2=$indent_B", join "->", @B;
    say "Output:   ", join "->", split '', $A+$B;
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/e-choroba/perl/ch-2.pl)

Choroba delivers a compact and concise solution using arrays with, notably, a complete and refreshingly welcome absence of neither snark nor shade.

I will draw attention to the addition of the `$carry` option to the while conditional, for reasons which will remain unstated. A simple and effective solution to that particular problem.

```perl
    sub add_linked_lists {
        my ($l1, $l2) = @_;

        my $carry = 0;
        my $reversed;

        while (@$l1 || @$l2 || $carry) {
            my $e1 = shift @$l1 // 0;
            $l1    = shift @$l1 || [];
            my $e2 = shift @$l2 // 0;
            $l2    = shift @$l2 || [];

            my $r = $e1 + $e2 + $carry;
            $carry = int($r / 10);
            $r %= 10;

            $reversed = $reversed ? [$r, $reversed] : [$r];
        }
        return [] unless $reversed;

        my $result = [shift @$reversed];
        while (@$reversed) {
            $reversed =  shift @$reversed;
            $result   = [shift @$reversed, $result];
        }
        return $result
    }
```


[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-129/abigail/perl/ch-2.pl)

&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 129: Add Linked Lists](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-129-2.html)

Abigail was in rare form, stripping away the orate façade to reveal the underlying obvious nature of the problem in a decidedly unobvious way. As we've seen previously, the underlying paradigm of extracting the encoded numbers and adding them was a technique we saw several times in varying forms.

```perl
    #
    # Helper functions to turn a number into a linked list,
    # and a linked list back into a number:
    # (If we have to bring in linked lists to add numbers, don't mind
    #  me if I bring in $& and friends).
    #
    sub n2ll ($num) {$num =~ /./ ? [my $x = $&, n2ll ($')] : []}
    sub ll2n ($ll)  {@$ll ? $$ll [0] . ll2n ($$ll [1]) : ""}

    #
    # Add two linked lists. We do this by flattening the lists,
    # using bigint to add the numbers, then turning the result
    # into a list again.
    #
    sub add ($ll1, $ll2) {use bigint; n2ll (0 + ll2n ($ll1) + ll2n ($ll2))}
```

.

------------------------------------------

So there we have it.

Looking back, arrays in one form or another seem to have won the day. Perl arrays really are pretty special. I suppose that if you reduce the field to three basic data types they should be. Of course the reality of Perl is more complex than that, but if you want to, you can get along quite well pretending it isn't, which is kind of the idea.

Questions? Drop me a line...

------------------------------------------


---

# BLOGS {#PWC129BLOGS}

---

**Well that’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, I somehow continue to maintain my bearings. Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC129BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *READ* these *BLOG* *LINKS*:

**( *don't think, trust your training, you're in the zone, just do it ...* )**


**Abigail**

 * [Perl Weekly Challenge 129: Root Distance](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-129-1.html) ( *Perl* )
 * [Perl Weekly Challenge 129: Add Linked Lists](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-129-2.html) ( *Perl* )

**Adam Russell**

 * [Two Exercises in Fundamental Data Structures — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2021/09/12) ( *Perl* )

**Arne Sommer**

 * [Linked Roots with Raku](https://raku-musings.com/linked-roots.html) ( *Raku* )

**Cheok-Yin Fung**

 * [Basic Data Structure Experiments with Object::Pad (for The Weekly Challenge #129) ](https://e7-87-83.github.io/coding/challenge_129.html) ( *Perl* )

**Dave Jacoby**

 * [‘List’ Ain’t Nothin’ But ‘Tree’ Misspelled: The (Perl) Weekly Challenge #129 | Committed to Memory](https://jacoby.github.io/2021/09/06/list-aint-nothin-but-tree-misspelled-the-perl-weekly-challenge-129.html) ( *Perl* )

**Flavio Poletti**

 * [PWC129 - Root Distance - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/09/08/pwc129-root-distance/) ( *Perl & Raku* )
 * [PWC129 - Add Linked Lists - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/09/09/pwc129-add-linked-lists/) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #129](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-129/james-smith) ( *Perl* )

**Luca Ferrari**

 * [Perl Weekly Challenge 129: trees andums – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2021/09/06/PerlWeeklyChallenge129.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 129: trees andums – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2021/09/06/PerlWeeklyChallenge129.html#task2) ( *Raku* )

**Roger Bell_West**

 * [RogerBW's Blog: Perl Weekly Challenge 129: Eats Roots and Lists](https://blog.firedrake.org/archive/2021/09/Perl_Weekly_Challenge_129__Eats_Roots_and_Lists.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 129](https://dev.to/simongreennet/weekly-challenge-129-33kn) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 129 – W. Luis Mochán](https://wlmb.github.io/2021/09/06/PWC129/) ( *Perl* )
