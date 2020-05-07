---
title: "Laurent Rosenfeld Weekly Review: Challenge - 057"
date: 2020-05-07T00:00:00+00:00
description: "Laurent Rosenfeld Weekly Review: Challenge - #057."
type: post
image: images/blog/p6-review-challenge-057.jpg
author: Laurent Rosenfeld
tags: ["Raku"]
---
***
# Raku Solutions Weekly Review
***

# Tree Inversion

This is derived in part from my [blog post](http://blogs.perl.org/users/laurent_r/2020/04/perl-weekly-challenge-57-tree-inversion-and-shortest-unique-prefix.html) made in answer to the [Week 57 of the Perl Weekly Challenge](https://perlweeklychallenge.org/blog/perl-weekly-challenge-057/) organized by  <a href="http://blogs.perl.org/users/mohammad_s_anwar/">Mohammad S. Anwar</a> as well as answers made by others to the same challenge.

The challenge reads as follows:

*You are given a full binary tree of any height, similar to the one below:*

        1
       /  \
      2    3
     / \  / \
    4   5 6  7

*Write a script to invert the tree, by mirroring the children of every node, from left to right. The expected output from the tree above would be:*

        1
       /  \
      3    2
     / \  / \
    7   6 5  4


*The input can be any sensible machine-readable binary tree format of your choosing, and the output should be the same format.*

*Bonus: In addition to the above, you may wish to pretty-print your binary tree in a human readable text-based format as above.*

I'll definitely take the bonus, because making auxiliary subroutines to represent graphically the trees is the best way to check that inversion subroutine works correctly (or to easily detect the errors, if any). But I will not represent the tree edges (the `/` and `\` connecting vertically the letters), because it becomes a bit difficult with 4 levels and more or less unmanageable (and quite ugly) when there are more that 4 levels (well, Colin Crain found a nice solution presented below).  For example, I chose to represent a 5-level binary tree as follows:

                    1
            2               3
        4       5       6       7
      8   9   a   b   c   d   e   f
     g h i j k l m n o p q r s t u v

I decided to implement two different subroutines for the display: one `bft` (breadth-first traversal) subroutine to construct an intermediate array of arrays in which each level of the tree is contained in one sub-array:

    [[1] [2 3] [4 5 6 7] [8 9 a b c d e f] [g h i j k l m n o p q r s t u v]]

and one `display` subroutine to produce the graphical ASCII representation. The main reason for doing that is that the `display` subroutine can thus be reused, independently of the internal tree representation.

## Using an Array of Arrays

I have discussed in a [recent blog post](http://blogs.perl.org/users/laurent_r/2020/04/perl-weekly-challenge-56-diff-k-and-path-sum.html) 3 different ways to represent a binary tree: hash of hashes, array of arrays and a simple flat array.

I have shown in that post and also [there](https://github.com/LaurentRosenfeld/Perl-6-Miscellaneous/blob/master/Challenges-in-Perl6/Path-sums-in-binary-trees.md) how to represent a binary tree with a nested array of arrays.

As an alternative, we might implement an array of arrays in which each of the sub-arrays contain one level of the tree, i.e. a breadth-first representation of the tree. The tree of the task description might look like this:

``` Perl 6
    [ [1], [2, 3], [4, 5, 6, 7] ]
```

With such an implementation, inverting the tree can be done in a simple one-liner:

``` Perl 6
$ perl6 -e '([1], [2, 3], [4, 5, 6, 7]).map({[ .reverse ]}).say;'
([1] [3 2] [7 6 5 4])
```

or possibly even:

``` Perl 6
$ perl6 -e '( (1), (2, 3), (4, 5, 6, 7) )>>.reverse.say;'
((1) (3 2) (7 6 5 4))
```

Note that this representation of a tree makes it possible to use directly the `display` subroutine briefly described above, since it already has the breadth-first format otherwise produced by the `bft` subroutine.

However, we will detail here the two other solutions, using a flat array or a hash of hashes.

## Using a Flat Array

We'll start with a flat array. Binary trees can be stored in breadth-first order as an array with an implicit data structure. This is similar to what is commonly done for *binary heaps* (i.e. a binary tree that keeps a partial order). Here, we're not interested with partial order, but the idea is to use an array with the following properties. The item with subscript 0 is the value of the root node. The index of an element is used to compute the index of its parent and the indices of its children. The basic idea is that, for any node, the index of its parent is about half the index of the current node, and, conversely, the indices of the children are about twice the index of the current node. More precisely, for a tree starting at index 0, the exact formulas for a node with index `$n` are commonly as follows:

* parent: `int( ($n-1)/2 )`
* left child: `2*$n + 1`
* right child: `2*$n + 2`

The root node is at index 0, and its children are at positions 1 and 2. The children of item with index 1 are at positions 3 and 4 and the children of 2 are at positions 5 and 6.

These rules may seem a bit complicated (and it is a bit tedious to compute these things manually), but they're in fact quite easy to implement in a program:

``` Perl 6
sub children (Int $i) { 2*$i+1, 2*$i+2 }
sub parent (Int $i) { ($i-1)/2; }
```

The `parent` subroutine is provided here for the purpose of completeness, it will not be needed in our program.

Note that it is very easy to populate the binary-heap-like array from a graphical representation: you just need to perform a breadth-first traversal, and provide empty slots (undefined values) for missing nodes, but that's not necessary here, since we are told that we are only dealing with full binary trees. For example, this binary tree:

        1
       /  \
      2    3
     / \  / \
    4   5 6  7

can be encoded as:

``` Perl6
my $tree = [1, 2, 3, 4, 5, 6, 7];
```

or even:

``` Perl6
my $tree = [1 .. 7];
```

With this flat array representation, the `invert` subroutine can be very simple (and needs not be recursive, since the data structure is not nested): we just use the `bft` subroutine to get an array of arrays by level, reverse the components and flatten the overall structure:

``` Perl 6
sub invert ($tree) {
    return [ map { | reverse @$_ }, bft($tree) ];
}
```

This is the complete code for this program:

``` Perl 6
use v6;

sub children (Int $i) { 2*$i+1, 2*$i+2 }
sub parent (Int $i) { ($i-1)/2; }  # not needed here

sub display ($tree) {
    my @bft_tree = bft($tree);
    my $start = (@bft_tree[*-1]).elems;
    my $sep_val = (2 * $start) - 1;
    for @bft_tree -> @line {
        my $sep = " " x $sep_val;
        say " " x $start, join $sep, @line;
        $start /= 2;
        $sep_val = ($sep_val - 1) / 2;
    }
}
sub bft ($tree) {               # Breadth First Traversal
    my ($index, $level) = (0, 0);
    my @bft_tree;
    while ($index <= $tree.end) {
        my $new_index = $index + 2 ** $level - 1;
        (@bft_tree[$level++]).append($tree[$index .. $new_index]);
        $index = $new_index + 1;
    }
    return @bft_tree;
}
sub invert ($tree) {
    return [ map { | reverse @$_ }, bft($tree) ];
}

my $tree = (1..9, 'a'..'v').flat;
say $tree;
say "\nTree before inversion";
display $tree;
my $inverted_tree = invert($tree);
say "\nInverted tree";
say "$inverted_tree\n";
display $inverted_tree;
```

Running the program displays the following output:

    $ perl6 invert_tree2.p6
    (1 2 3 4 5 6 7 8 9 a b c d e f g h i j k l m n o p q r s t u v)

    Tree before inversion:
                    1
            2               3
        4       5       6       7
      8   9   a   b   c   d   e   f
     g h i j k l m n o p q r s t u v

    Inverted tree:
    1 3 2 7 6 5 4 f e d c b a 9 8 v u t s r q p o n m l k j i h g

                    1
            3               2
        7       6       5       4
      f   e   d   c   b   a   9   8
     v u t s r q p o n m l k j i h g

### Using a Hash of Hashes

A hash of hashes is probably the most explicit and clearest implementation of a binary tree. But it tends to be quite verbose.

A node is a hash consisting in three elements: its value (an integer), its left child and its right child. The children may be undefined when we are at the lowest level of the tree (i.e. when the node is a "leaf"). So a node could be implemented as a hash with three keys, `v` (value), `l` (left child) and `r` (right child). The children, when they are defined, are themselves nodes, so the structure is nested and can be explored recursively. For example, the following binary tree:

        1
       /  \
      2    3
     / \  / \
    4   5 6  7

can be encoded as:

    my %tree =  v => 1,
                l => { v => 2, l => {v => 4}, r => {v => 5} },
                r => { v => 3, l => {v => 6}, r => {v => 7} },
                ;

In this quick and simple implementation, we use global variables for the tree and for the breadth-first array, to avoid the pain of carrying them around back and forth in the successive recursive subroutine calls. In a real-life application, it would be more proper to pass them as arguments and return values of subroutines, or to use dynamic variables.

``` Perl 6
use v6;

my %tree =  v => 1,
            l => { v => 2, l => {v => 4}, r => {v => 5} },
            r => { v => 3, l => {v => 6}, r => {v => 7} },
            ;
my @bft-tree;

sub display ($tree) {
    my $start = (@bft-tree[*-1]).elems;
    my $sep_val = (2 * $start) - 1;
    for @bft-tree -> @line {
        my $sep = " " x $sep_val;
        say " " x $start, join $sep, @line;
        $start /= 2;
        $sep_val = ($sep_val - 1) / 2;
    }
}
sub bft (%node, $level) {
    push @bft-tree[$level], %node<v>;
    bft(%node<l>, $level + 1) if defined %node<l>;
    bft(%node<r>, $level + 1) if defined %node<r>;
}
sub invert (%node) {
    invert(%node<l>) if defined %node<l>;
    invert(%node<r>) if defined %node<r>;
    (%node<l>, %node<r>) = %node<r>, %node<l>
        if defined %node<l> and defined %node<r>;
}
bft %tree, 0;
say "Tree before inversion:";
display(@bft-tree);
invert(%tree);
@bft-tree = ();
bft %tree, 0;
say "\nTree after inversion";
display(@bft-tree);
```

This program produces the following output:

    $ ./perl6 invert_tree3.p6
    Tree before inversion:
        1
      2   3
     4 5 6 7

    Tree after inversion
        1
      3   2
     7 6 5 4

## Alternative Solutions

[Arne Sommer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/arne-sommer/raku/ch-1.p6) created a `BinaryNode` class to store the tree node data structure, along with a `swap` method to invert left and right children:

``` Perl 6
class BinaryNode
{
  has Int        $.value;
  has BinaryNode $.left   is rw;
  has BinaryNode $.right  is rw;

  method swap
  {
    (self.left, self.right) = (self.right, self.left);
  }
}
```

His recursive `traverse` subroutine is fairly simple:

``` Perl 6
sub traverse ($current)
{
  $current.swap;

  traverse($current.left)  if $current.left.defined;
  traverse($current.right) if $current.right.defined;
}
```

The following subroutine (with its lexical recursive `do-it` subroutine) is used to prepare the tree display:

``` Perl 6
sub tree2string ($tree)
{
  my @level;
  my $level = 0;

  sub do-it($current, $level)
  {
    say ":: " ~ $current.value if $verbose;
    @level[$level].push($current.value);
    do-it($current.left,  $level +1) if $current.left.defined;
    do-it($current.right, $level +1) if $current.right.defined;
  }

  do-it($tree, $level);

  return @level.join(" | ").join(" ");
}
```

Arne also wrote another version with just one actual code line:

``` Perl 6
unit sub MAIN ($tree = "1 | 2 3 | 4 5 6 7");
say $tree.split(" | ")>>.words>>.reverse>>.join(" ").join(" | ");
```

which produces the following output:

    $ raku invert-tree-oneliner "5 | 4 8 | 11 * 13 9 | 7 2 * * * 1"
    5 | 8 4 | 9 13 * 11 | 1 * * * 2 7

[Kevin Colyer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/kevin-colyer/raku/ch-1.p6) used a `node` class to represent a tree node, with three methods:

``` Perl 6
class node {
    has Int $.value;
    has node $.left;
    has node $.right;
    has method has-left  { return $!left.defined  };
    has method has-right { return $!right.defined };
    has method is-leaf { return not ( $!left.defined or $!right.defined ) };
}
```

I wonder why Kevin uses the `has` keyword to define his methods, but it seems to work fine.

The tree construction is a bit tedious:
``` Perl 6
my $root = node.new(value => 1,
    left => node.new(value => 2, left => node.new(value =>4),right => node.new(value => 5,left => node.new(value => 10, left => node.new(value=>11) ))),
    right => node.new(value=>3,left=>node.new(value=>6),right=> node.new(value=>7,left=>node.new(value => 8),right=>node.new(value => 9,right=>node.new(value=>12)) ) )
    );
```

Tree inversion, on the other hand is quite simple:

``` Perl 6
sub invert-tree($node) {
    return if not $node.defined;
    return node.new(value => $node.value, left=>invert-tree($node.right),right => invert-tree($node.left));
}
```

For preparing the pretty-printing, Kevin's program converts the tree to an array:

``` Perl 6
sub tree-to-array($tree,@array,$parent=0,$depth=0) {
    state $maxdepth;
    # reset maxdepth on call to root node
    $maxdepth=0 if $parent==0;

    @array[$parent]=$tree.value;

    my $d=$depth;
    if $tree.has-left {
       $d= tree-to-array($tree.left,@array,$parent*2+1,$depth+1)
    }
    if $tree.has-right {
        $d=tree-to-array($tree.right,@array,$parent*2+2,$depth+1)
    }

    $maxdepth=max($d,$maxdepth);
    return $maxdepth;
}
```

But I won't quote here Kevin's `pretty-print-tree` subroutine, as it is about 70-line long. Please follow the link if you want to see it.

[Luca Ferrari](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/luca-ferrari/raku/ch-1.p6) implemented a simple `Node` class:

``` Perl 6
class Node {
    has Int  $.value;
    has Node $.left  is rw;
    has Node $.right is rw;
}
```

The tree inversion is done in the following `switch` recursive subroutine:

``` Perl 6
sub switch( Node $current-node is rw ) {
    return if ! $current-node
        && ! $current-node.left
        && ! $current-node.right;

    my ( $left, $right ) = ( $current-node.left, $current-node.right );
    $current-node.left  = $right;
    $current-node.right = $left;

    switch( $current-node.left )  if $current-node.left;
    switch( $current-node.right ) if $current-node.right;
}
```

[Simon Proctor](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/simon-proctor/raku/ch-1.p6) wrote a full-fledged object-oriented program, with three classes, one role and even one grammar. the `BTree` defines most of the method used in the program:

``` Perl 6
role BTree[::T] {
    has T $.value is required;
    has BTree @!nodes[2];

    method Str( ) {
        ( $!value , |@.nodes.map( { "({$_})" } ) ).join("");
    }

    method nodes() {
        @!nodes.grep({defined $_});
    }

    method children() {
        @.nodes.elems;
    }

    method gist() {
        BTreeRep.new( tree=>self ).gist();
    }

    method traverse() {
        gather {
            if ( self.children ) {
                for @.nodes -> $n {
                    for $n.traverse -> @t {
                        take ($!value, |@t);
                    }
                }
            } else {
                take ( $!value, );
            }
        }
    }

    multi method reverse( ::?CLASS:D: ) {
        self.new(
            value => $!value,
            nodes => @.nodes.reverse.map( *.reverse )
        )
    }

    multi method from-Str('') { BTree }

    multi method from-Str( ::?CLASS:U: Str $in ) {
        my $match = BTreeGrammar.parse( $in );
        if ( $match ) {
            self.new(
                value => $match<tree><value>.Str,
                nodes => [
                          self.from-Str( $match<tree><left> ?? $match<tree><left>.Str !! '' ),
                          self.from-Str( $match<tree><right> ?? $match<tree><right>.Str !! '' )
                      ]
            );
        } else {
            die "Unable to Parse $in";
        }

    }
}
```

The recursive `reverse` method shown above does the main work.

This role is applied to the `UBTree`

``` Perl 6
class UBTree does BTree[UInt] {
    submethod BUILD ( UInt() :$value, :@nodes ) {
        $!value = $value;
        @!nodes = @nodes;
    }
}
```

For those who don't know, the default `BUILD` submethod is automatically called by the new constructor method. Here, it is necessary to redefine the BUILD submethod to properly initialize the class's private attributes.

Note that the `from-Str` method of the `BTree` role uses a grammar, `BTreeGrammar`, to parse the input string representing the input binary tree:

``` Perl 6
# Example tree 5(4(11(7)(2)))(8(13)(9(1)))
grammar BTreeGrammar {
    token TOP { <tree> };
    token tree { <value> ["(" $<left>=<tree> ")"]? ["(" $<right>=<tree> ")"]? };
    regex value { <-[()]>+ }
}
```

Simon's ASCII-art tree representation is quite nice, as shown in this sample output:

    Tree :
         5
       ┌─┴──┐
       4    8
     ┌─┘   ┌┴─┐
    11    13  9
    ┌┴┐      ┌┘
    7 2      1

    Reversed :
          5
       ┌──┴───┐
       8      4
     ┌─┴─┐  ┌─┘
     9  13 11
    ┌┘     ┌┴┐
    1      2 7


[Shahed Nooshmand](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/shahed-nooshmand/raku/ch-1.sh) used a hash of hashes and managed to write the tree inversion program in the form of a Raku one-liner:

    raku -e 'say (sub ($_) { .isa(Pair) ?? (.key => .value.reverse.map: { samewith $^a }) !! $_ })(1 => (2 => (4, 5), 3 => (6, 7)))'
    1 => (3 => (7 6) 2 => (5 4))

Quite impressive!

[Colin Crain](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/colin-crain/raku/ch-1.p6)'s submission starts again (as often) with a long comment explaining with quite a bit of details the various things he considered for solving the task. Please follow the link, it is really an interesting reading. I would really wish that Colin will stop putting these very useful comments in his code and thus let it somewhat buried in GitHub, and will start a blog having more visibility. Anyway, like with the sum path task of last week, Colin decided to use a data structure reducing a binary tree to a specific fixed-size array, with indices allocated along a level-first traversal of the tree for each possible node at every level. Essentially, Colin is using what I have called a flat array with an implicit data structure (or binary-heap-like array) in the description of my solution.

Inverting a tree in this format is reduced to selecting out the various levels within the array, reversing them and reconstituting the structure.  This is accomplished in the following `invert_tree` subroutine:

```
sub invert_tree (@tree) {
## symmetrically mirrors a binary tree on the right/left axis
## I wouldn't use the word "invert" here
    my $max_level = get_level( @tree.end );
    my @output;

    for 0..$max_level -> $level {
        my $level_size = 2 ** $level;
        my @level =  @tree.splice( 0, $level_size );
        @output.append: @level.reverse;
    }

    @tree = @output;
}
```

Colin made a very nice job to pretty print the tree, even with relatively deep trees, but I won't quote here the 70+ lines of hairy code needed. Please follow the link if you want to to see it. Suffice it to show here how the array `(5, 4, 8, 1, Int, 3, 9, 7, 2, Int, Int, Int, Int, Int, 1)` is displayed in Colin's program:

            ______5______
           /             \
        __4             __8__
       /               /     \
      1               3       9
     / \                       \
    7   2                       1


[Javier Luque](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/javier-luque/raku/ch-1.p6) wrote a full-fledged object-oriented program, with a `BTree` class that has a `Node` class composed into it and a number of methods, including the  `print-tree` and recursive `invert-tree` multi methods to do the work:

``` Perl6
class BTree {

    my class Node {
        has Int $.value is rw;
        has Node $.left is rw;
        has Node $.right is rw;
    };

    has Node $.root is rw;

    # Create the binary trees
    multi method create-btree($data) {
        self.root = Node.new;
        self.create-btree($data, self.root)
    }

    multi method create-btree($data, Node $node) {
        $node.value = $data.[0];

        # Left branch
        if ($data.[1].[0]) {
        	$node.left = Node.new();
        	self.create-btree($data.[1].[0], $node.left);
        }

        # Right branch
        if ($data.[1].[1]) {
        	$node.right = Node.new();
        	self.create-btree($data.[1].[1], $node.right);
        }
    }

    # Print the tree
    multi method print-tree() {
        self.print-tree(self.root);
    }

    multi method print-tree(Node $node) {
        my $left = ($node.left) ??
        	self.print-tree($node.left) !!
        	Nil;

        my $right = ($node.right) ??
        	self.print-tree($node.right) !!
        	Nil;

        my $lists = ($left || $right) ??
                    ' => ' ~ "[ $left, $right ]" !!
                    '';

        return $node.value ~ $lists;
    }

    # Invert the tree
    multi method invert-tree() {
        self.invert-tree(self.root);
    }

    multi method invert-tree(Node $node) {
        # Branch left
        self.invert-tree( $node.left )
        	if ($node.left);

        # Branch right
        self.invert-tree( $node.right )
        	if ($node.right);

        # Invert
        my $temp = $node.left;
        $node.left = $node.right;
        $node.right = $temp;
    }
}
```

[Mohammad S. Anwar](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/mohammad-anwar/raku/ch-1.p6) used a hash of arrays of arrays to represent the binary tree and the `mirror` recursive subroutine to perform the tree inversion:

``` Perl 6
my $tree = {
     1 => [ [ 2,
              [ [ 4 ],
                [ 5 ],
              ],
            ],
            [ 3,
              [ [ 6 ],
                [ 7 ],
              ],
            ],
          ],
};

say sprintf("Before: %s", $tree.raku);
mirror($tree.{1});
say sprintf("After : %s", $tree.raku);

sub mirror($branch) {

    ($branch.[0], $branch.[1]) = ($branch.[1], $branch.[0]);
    mirror($branch.[0][1]) if defined $branch.[0][1];
    mirror($branch.[1][1]) if defined $branch.[1][1];

    return $branch;
}
```

[Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/ruben-westerberg/raku/ch-1.p6) used a hash of hashes to represent the binary tree:

``` Perl 6
my $tree={
    v=>1,
    l=>{
    	v=>2,
    	l=>{
    		v=>4
    	},
    	r=>{
    		v=>5
    	}
    },
    r=>{
    	v=>3,
    	l=>{
    		v=>6
    	},
    	r=>{
    		v=>7
    	}
    }
};
```

Rather than using a recursive subroutine, Ruben used a stack to walk through the tree depth-first:

``` Perl 6
my @stack=($tree);

while @stack {
    given (@stack.shift) {
    	if all .{<l r>}:exists {
    		my $t=.<l>;
    		.<l>=.<r>;
    		.<r>=$t;
    		@stack.push: .<l>;
    		@stack.push: .<r>;
    		say  $_;
    	}
    }
}
```

[Ulrich Rieke](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/ulrich-rieke/raku/ch-1.p6) used what I called a flat array (or binary-heap-like data structure) to represent and create the binary tree:

sub createTree( Int $depth ) {
   return (1..(2 ** $depth) - 1 ).Array ;
}

With the choice of this data structure, the `inverTree` subroutine doesn't need recursion and can use simple `for` loops:

```
sub invertTree( @array ) {
  my @inverted ;
  my $depth = log( @array.elems + 1 , 2 ) ;
  for ( 0..$depth - 1 ) -> $i {
      my @partialarray ;
      my $howmany = 2 ** $i ;
      if ( $howmany == 1 ) {
    @partialarray.push( @array.shift ) ;
      }
      else {
    for (1..$howmany) {
        @partialarray.push( @array.shift ) ;
    }
      }
      @partialarray .= reverse ;
      @inverted.push( @partialarray ) ;
  }
  return @inverted.flat ;
}

sub MAIN( Int $depth ) {
  say invertTree( createTree( $depth ) ) ;
}
```

I admit that this is sort of nitpicking, but the structure of the inverted tree is not the same as the structure of the input array.

For example, with a depth of 4, the input array is represented as this flat array:

    [1 2 3 4 5 6 7 8 9 10 11 12 13 14 15]

But the output array is an array of arrays like so:

    ([1] [3 2] [7 6 5 4] [15 14 13 12 11 10 9 8])

Flattening this should not be very difficult.

***

## SEE ALSO

Five blog posts on the subject:

* Arne Sommer: https://raku-musings.com/inverted-prefix.html;

* Luca Ferrari: https://fluca1978.github.io/2020/04/20/PerlWeeklyChallenge57.html;

* Shahed Nooshmand: https://rafraichisso.ir/2020/04/22/pwc-57;

* Javie Luque: https://perlchallenges.wordpress.com/2020/04/20/perl-weekly-challenge-057/;

* Mohammad S. Anwar: https://perlweeklychallenge.org/blog/weekly-challenge-057.

## Wrapping up

Please let me know if I forgot any of the challengers or if you think my explanation of your code misses something important (send me an e-mail or just raise an issue against this GitHub page).

If you want to participate to the Perl Weekly Challenge, please connect to [this site](https://perlweeklychallenge.org/).
