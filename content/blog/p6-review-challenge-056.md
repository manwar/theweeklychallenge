---
title: "Laurent Rosenfeld Weekly Review: Challenge - 056"
date: 2020-05-07T00:00:00+00:00
description: "Laurent Rosenfeld Weekly Review: Challenge - #056."
type: post
image: images/blog/p6-review-challenge-056.jpg
author: Laurent Rosenfeld
tags: ["Raku"]
---
***
# Raku Solutions Weekly Review
***

# Path Sums in a Binary Tree

This is derived in part from my [blog post](http://blogs.perl.org/users/laurent_r/2020/04/perl-weekly-challenge-56-diff-k-and-path-sum.html) made in answer to the [Week 56 of the Perl Weekly Challenge](https://perlweeklychallenge.org/blog/perl-weekly-challenge-056/) organized by  <a href="http://blogs.perl.org/users/mohammad_s_anwar/">Mohammad S. Anwar</a> as well as answers made by others to the same challenge.

The challenge reads as follows:
*You are given a binary tree and a sum, write a script to find if the tree has a path such that adding up all the values along the path equals the given sum. Only complete paths (from root to leaf node) may be considered for a sum.*

*Example: given the below binary tree and sum = 22,*

          5
         / \
        4   8
       /   / \
      11  13  9
     /  \      \
    7    2      1

*For the given binary tree, the partial path sum 5 → 8 → 9 = 22 is not valid.*

*The script should return the path 5 → 4 → 11 → 2 whose sum is 22.*

So basically we have to implement a [depth-first tree traversal](https://en.wikipedia.org/wiki/Depth-first_search) algorithm. Once this is done, finding the paths matching the criteria is quite easy.

The first question to be answered is: how do we represent a binary tree? There are a number of possibilities. We’ll just present three.

The most obvious way might be a nested hash of hashes. Each node is represented by a hash with three items: the current node value, a reference to the left child and a reference to the right child. For example, the top three rows of the binary tree shown above could look like this: `{ val => 5, left => {val => 4, left => { val => 11}}, right => { val => 8, left => { val => 13}, right { val => 9 }}}`. Or, in a more graphical way:

    { val => 5,
      left => {
        val => 4,
        left => {
            val => 11
        }
      },
      right => {
        val => 8,
        left => {
            val => 13
            },
            right {
                val => 9
            }
        }
    }

But that's quite verbose, I don’t like doing so much typing. I'll present an example of that implementation in my [review of Raku solutions to PWC 57](https://github.com/LaurentRosenfeld/Perl-6-Miscellaneous/blob/master/Challenges-in-Perl6/Tree-inversion.md).

A more concise way would to use a nested array of arrays. For each node, the first array item is the current value, the second item the left child and the third item the right child. The top of the tree shown above might look like this: `[5, [4, [11]], [8, [13], ]]`. Or, more graphically:

    [
        5,
        [
            4, [11]
           ],
        [
            8, [13]
        ]
    ]

We could also use an array of arrays by level (breadth-first), which will also be shown in my [review of Raku solutions to PWC 57](https://github.com/LaurentRosenfeld/Perl-6-Miscellaneous/blob/master/Challenges-in-Perl6/Tree-inversion.md).

We could even use a simple flat array in a way similar to what is commonly done for *binary heaps* (i.e. a binary tree that keeps a partial order). Here we're not interested with partial order, but the idea is to use an array with an implicit data structure reflected in the following properties. The item with subscript 0 is the value of the root node. The index of an element is used to compute the index of its parent and the indices of its children. The basic idea is that, for any node, the index of its parent is about half the index of the current node, and, conversely, the indices of the children are about twice the index of the current node. More precisely, for a tree starting at index 0, the exact formulas for a node with index `$n` are commonly as follows:

* parent: `int( ($n-1)/2 )`
* left child: `2*$n + 1`
* right child: `2*$n + 2`

The root node is at index 0, and its children are at positions 1 and 2. The children of item with index 1 are at positions 3 and 4 and the children of 2 are at positions 5 and 6.

These rules may seem a bit complicated (and it is a bit tedious to compute these things manually), but they're in fact quite easy to implement:

``` Perl 6
sub children ($i) {
    return 2*$i+1, 2*$i+2;
}
```

The binary tree:

          5
         / \
        4   8
       /   / \
      11  13  9

would be represented by this simple array:

    [5, 4, 8, 11, , 13, 9]

Note that it is very easy to populate the binary-heap-like array from a graphical representation: you just need to perform a breadth-first traversal and provide empty slots for missing nodes if any.

Another very tempting possibility is to implement a class for binary trees providing the basic data structure and possibly methods for tree traversal and other common operations on trees. I did not implement such a class, but several other challengers did, as we'll see below.

#### Implementing the Tree as a Nested Array of Arrays

We'll use a nested array of arrays to represent the binary tree. We implement a recursive `dfs` (for depth-first search) subroutine to walk through the various paths of the tree. At each call of the subroutine, we keep track of the current sum and of the current path. When we reach a leaf (no more child), we print the path if the current sum is equal to the target value.

``` Perl 6
use v6;

my @tree = [5, [4, [11, [7], [2]]], [8, [13], [9, [1]]]] ;

sub dfs (@node, $target, $sum, @path) {
    my $new-sum = $sum + @node[0];
    unless @node[1]:exists or @node[2]:exists {
        say $new-sum, " -> @path[] @node[0]" if $new-sum == $target;
    }
    dfs(@node[1], $target, $new-sum, (@path, @node[0]).flat)
        if defined @node[1];
    dfs(@node[2], $target, $new-sum, (@path, @node[0]).flat)
        if defined @node[2];
}

my $target = @*ARGS.elems == 1 ?? @*ARGS[0] !! 22;
dfs(@tree, $target, 0, []);
```

Here are a few runs:

    $ perl6  bin_tree_sum.p6
    22 -> 5 4 11 2

    $ perl6  bin_tree_sum.p6 22
    22 -> 5 4 11 2

    $ perl6  bin_tree_sum.p6 24

    $ perl6  bin_tree_sum.p6 26
    26 -> 5 8 13

    $ perl6  bin_tree_sum.p6 23
    23 -> 5 8 9 1

#### Implementing the Tree as a Flat Array (Binary-Heap-Like)

As explained above, we can use a flat array to represent a binary tree, with the following rules: the indices of the children of a node with index `$n` are as follows:

* left child: `2*$n + 1`
* right child: `2*$n + 2`

In Raku, it isn't possible to just leave an "empty slot" when defining an array (as we could in Perl). We need to provide undefined values, such as, for example, `Nil`, `Any`, or `Int`. We'll use `Int` since it is the most consistent option with a tree made of integers.

The code isn't much more complicated than before:

``` Perl 6
use v6;

my @tree = [5, 4, 8, 11, Int, 13, 9, 7, 2, Int, Int, Int, Int, 1];

sub dfs ($index, $target, $sum, @path) {
    sub children ($i) { 2*$i+1, 2*$i+2 }
    my $cur-val = @tree[$index];
    my $new-sum = $sum + $cur-val;
    my ($left, $right) = children $index;
    unless defined @tree[$left] or defined @tree[$right] {
        say $new-sum, " -> @path[] $cur-val" if $new-sum == $target;
    }
    dfs($left, $target, $new-sum, (@path, $cur-val).flat)
        if defined @tree[$left];
    dfs($right, $target, $new-sum, (@path, $cur-val).flat)
        if defined @tree[$right];
}

my $target = @*ARGS.elems == 1 ?? @*ARGS[0] !! 22;
my $root-node = 0;
dfs($root-node, $target, 0, []);
```

Here are a few runs:

    $ perl6 bin_tree_sum2.p6
    22 -> 5 4 11 2

    $ perl6 bin_tree_sum2.p6 22
    22 -> 5 4 11 2

    $ perl6 bin_tree_sum2.p6 23
    23 -> 5 8 9 1

    $ perl6 bin_tree_sum2.p6 24

    $ perl6 bin_tree_sum2.p6 26
    26 -> 5 8 13

## Alternative Solutions

Most of the challengers implemented a simple class to implement a tree node data structure, but, curiously, only one (Simon Proctor) really implemented an object-oriented program.

[Arne Sommer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-056/arne-sommer/raku/ch-2.p6) implemented a simple recursive `BinaryNode`class:

``` Perl 6
class BinaryNode
{
  has Int        $.value;
  has BinaryNode $.left;
  has BinaryNode $.right;
}
```

The bulk of the work is done in the recursive `traverse` subroutine, which implements a depth-first walk through the tree and checks whether the path sum is equal to the target value:

``` Perl 6
sub traverse ($current, $target-sum, @path is copy)
{
  if ($current.left or $current.right)
  {
    @path.push: $current.value;

    traverse($current.left,  $target-sum, @path) if $current.left;
    traverse($current.right, $target-sum, @path) if $current.right;
  }
  else
  {
    @path.push: $current.value;
    say ": " ~ @path.join(" -> ") if $verbose;
    say @path.join(" -> ") if @path.sum == $target-sum;
    return;
  }
}
```

The rest of the code takes an input string representing a breadth-first representation of the tree and transforms it into a nested `BinaryNode` object:

``` Perl 6
unit sub MAIN (Int :$sum = 22, Str :$tree = "5 | 4 8 | 11 * 13 9 | 7 2 * * * 1", :$verbose);

my @btree = $tree.split("|")>>.words;

my @old-nodes;
my @new-nodes;

for @btree.reverse -> $row
{
  my @current = @$row;
  @old-nodes  = @new-nodes;
  @new-nodes  = ();

  for @current -> $value
  {
    if $value eq "*"
    {
      @new-nodes.push("*");
      next;
    }

    my $left  = @old-nodes.shift // "*"; $left  = Nil if $left  eq "*";
    my $right = @old-nodes.shift // "*"; $right = Nil if $right eq "*";

    @new-nodes.push(BinaryNode.new(value => $value.Int,
                                   left  => $left  // Nil,
                                   right => $right // Nil));
  }
}

my $btree = @new-nodes[0];

say $btree, "\n" if $verbose;

traverse($btree, $sum, ());
```

[Kevin Colyer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-056/kevin-colyer/raku/ch-2.p6) also used an object-oriented implementation, and created a recursive `node` class quite similar to Arne's `BinaryNode` class:

``` Perl 6
class node {
    has Int $.value;
    has node $.left;
    has node $.right;
}
```

Kevin's binary tree is a nested hard-coded `node` object:

``` Perl 6
my $root = node.new(value => 5,
    left => node.new(value => 4, left => node.new(value =>11, left=>node.new(value=>7),right => node.new(value => 2))),
    right => node.new(value=>8,left=>node.new(value=>13),right=> node.new(value=>9,right=> node.new(value=>1)))
    );
```

Otherwise, most of the work is done in the recursive `dfs` subroutine implementing a depth-first traversal:

``` Perl 6
sub dfs($node,$target,$new=True) {
    state $found=False;
    state @values;
    if $new {
        @values = Empty;
        $found=False;
    }
    my $siblings=0;
    @values.push: $node.value;

    if $node.left:defined {
        $siblings++;
        dfs($node.left, $target,False);
        return @values if $found;
    }

    if $node.right:defined {
        $siblings++;
        dfs($node.right,$target,False);
        return @values if $found;
    }

    # lone leaf
    if $siblings==0 and @values.sum==$target {
        $found=True;
        return @values;
    }

    # not found so back track
    @values.pop;
    return Empty;
}
```

The rest of his code consists in two multi `MAIN` subroutines:

``` Perl6
multi MAIN('test') {
    dfs($root,$_).say for 15..30;
}
multi MAIN(Int $target where * > 0) {
    my @values=dfs($root,$target);
    if @values == Empty {
        say "Target sum [$target] not found in tree";
        exit;
    }
    say @values.join(" -> ") ~ " = $target";
}
```

[Luca Ferrari](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-056/luca-ferrari/raku/ch-2.p6) also used an object-oriented representation and implemented a recursive `Node` class:

``` Perl 6
class Node {
    has Int:D  $.value = 0;
    has Node $.left is rw;
    has Node $.right is rw;
    has Node $.parent is rw;
    has Bool $.is-leaf = False;
}
```

Populating the tree is done with hard coded object construction:

``` Perl6
 my $root                = Node.new( :value( 5 )  );
 $root.left              = Node.new( :value( 4 ), :parent( $root ) );
 $root.right             = Node.new( :value( 8 ), :parent( $root ) );
 $root.left.left         = Node.new( :value( 11 ), :parent( $root.left ) );
 $root.right.left        = Node.new( :value( 13 ), :parent( $root.right ), :is-leaf );
 $root.right.right       = Node.new( :value( 9 ), :parent( $root.right ) );
 $root.left.left.left    = Node.new( :value( 7 ),  :parent( $root.left.left ), :is-leaf );
 $root.left.left.right   = Node.new( :value( 2 ), :parent( $root.left.left ), :is-leaf );
 $root.right.right.right = Node.new( :value( 1 ), :parent( $root.right.right ), :is-leaf );
```

Then, Luca stored all these objects into the `@nodes` array for the purpose of building an array of leaves, and implemented an *upward* (from the leaves to the root) tree traversal:

``` Perl6
my @nodes = $root
    , $root.left
    , $root.right
    , $root.left.left
    , $root.right.left
    , $root.right.right
    , $root.left.left.left
    , $root.left.left.right
    , $root.right.right.right;

# find the leaves
my @leaves = @nodes.grep( *.is-leaf );

# now walk from the leaves to the root
for @leaves  {
    my @path = [ .value ];
    my $node = $_;
    @path.push: $node.value while ( $node = $node.parent );
    my $sum = [+] @path;
    say "Sum is $sum with the path { @path.reverse }" if ( $sum == $target );
}
```

[Markus Holzer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-056/markus-holzer/raku/ch-2.p6) used a hash of hashes to store the tree data structure:

``` Perl 6
my %tree =
    5 => {
        4 => {
            11 => {
                7 => Any,
                2 => Any
            },
        },
        8 => {
             9 => {
                1 => Any
             },
             7 => {
                2 => Any
             },
             13 => Any,
        }
    };
```

The structure is quite concise. Its possible shortcoming is that, since hashes don't have any order, there is no distinction between left and right children, but it absolutely doesn't matter with the task to be solved.

Markus's code for traversing the tree is fairly concise and uses the `find-path-sum` recursive multi subroutine:

``` Perl 6
.join('→').say
    for find-path-sum( %tree, 22 );

multi sub find-path-sum( Hash:D $tree, Int $n )
{
    multi sub find-path-sum( Hash:D $tree, Int $n, Array $path ) {
        find-path-sum( $tree{ $_ }, $n - $_, $path.clone.push($_) )
            for $tree.keys; }

    multi sub find-path-sum( Any, Int $n, Array $path ) {
        take $path if $n == 0; }

    gather find-path-sum( $tree, $n, [] );
}
```

[Noud Aldenhoven](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-056/noud/raku/ch-2.p6) created a recursive `Node` class to store the tree data structure:

``` Perl 6
class Node {
    has Node $.left;
    has Node $.right;
    has $.value;
}
```

Noud wrote an recursive `path-sum` subroutine to traverse the tree and compute all possible path sums:

``` Perl 6
sub path-sum($tree, $sum) {
    if ($tree.value == $sum) {
        if ($tree.left || $tree.right) {
            return [];
        } else {
            return [[$tree.value],];
        }
    }

    my @ret = [];
    if ($tree.left) {
        for path-sum($tree.left, $sum - $tree.value) -> @r {
            @ret.push([$tree.value, |(@r)]);
        }
    }
    if ($tree.right) {
        for path-sum($tree.right, $sum - $tree.value) -> @r {
            @ret.push([$tree.value, |(@r)]);
        }

    }
    return @ret;
}
```

Finally, this is Noud's code for populating the nested tree object and calling `path-sum` subroutine:

``` Perl 6
my Node $tree .= new(
    value => 5,
    left => Node.new(
        value => 4,
        left => Node.new(
            value => 11,
            left => Node.new(
                value => 7),
            right => Node.new(
                value => 2))),
    right => Node.new(
        value => 8,
        left => Node.new(
            value => 13),
        right => Node.new(
            value => 9,
            right => Node.new(
                value => 1))));

for path-sum($tree, 22) -> @full-path {
    say @full-path.join(' -> ');
}
```

[Simon Proctor](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-056/simon-proctor/raku/ch-2.p6) made a full-fledged object-oriented program, including three classes, one role and even a grammar. Simon's code is more than 200-line long, so I will quote only parts of it (please follow the link if you want to see it all). Let's start with his `BTree` role, which implements most of the methods used in the program:

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

The `BTree` role is then applied to the `UBTree` class like so:

``` Perl 6
class UBTree does BTree[UInt] {
    submethod BUILD ( UInt() :$value, :@nodes ) {
        $!value = $value;
        @!nodes = @nodes;
    }
}
```
For those who don't know, the default `BUILD` submethod is automatically called by the `new` constructor method. Here, it is necessary to redefine the `BUILD` submethod to properly initialize the class's private attributes.

Note that the `from-Str` method of the `BTree` role uses a grammar, `BTreeGrammar`, to parse the input string representing the input binary tree:

``` Perl 6
# Example tree 5(4(11(7)(2)))(8(13)(9(1)))
grammar BTreeGrammar {
    token TOP { <tree> };
    token tree { <value> ["(" $<left>=<tree> ")"]? ["(" $<right>=<tree> ")"]? };
    regex value { <-[()]>+ }
}
```
There are many other interesting things in Simon's program, but, as I said, it's just too long to be quoted entirely.

[Shahed Nooshmand](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-056/shahed-nooshmand/raku/ch-2.p6)'s program is incredibly short and concise:

``` Perl 6
multi paths(Pair $tree) {
    |paths($tree.value).map: {$tree.key, |$_}
}
multi paths(Positional $nodes) {
    $nodes.map: { paths $_ }
}
multi paths($leaf) { $leaf }

my $tree = 5 => (4 => 11 => (7, 2),
                 8 => (9 => 1, 13));
say %(paths($tree).map: {.sum => $_}){22}
```

The multi recursive `paths` subroutine returns a list of all the complete paths in the tree. The tree is implemented as a hash in which each parent is the key of a `Pair`, and its children are the value of that `Pair`. I don't have much more to say about it, except that you should really take the time to read very carefully and understand this nice and beautiful gem.

[Colin Crain](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-056/colin-crain/raku/ch-2.p6)'s submission starts (as quite commonly)  with a long comment explaining the various ways he considered for implementing the binary tree. Please follow the link, it is really an interesting reading. I think that Collin should really transform these detailed comments into blog posts, as they are really extremely interesting and informative (at least when the subject is so interesting). Anyway, back to the his comment, after a thorough discussion of various possibilities, Colin finally settled with an implementation of what I called "flat array" or binary-heap-like in my solutions.

The main work is done in the recursive `sum_path` subroutine:

``` Perl 6
sub sum_path (@tree, $target, $index, @prev_working, @paths) {
## walks the tree and computes complete the path sum
    my @working = @prev_working;
    @working.append: @tree[$index];

    ## if we are at a terminal node check the sum and return
    if ( ! @tree[$index * 2 + 1].defined && ! @tree[$index * 2 + 2].defined ) {
        my $sum = [+] @working;
        @paths.push: @working if $sum == $target;

        say @working.join(' + ') ~ " = $sum";

        return;
    }

    for ( $index * 2 + 1, $index * 2 + 2 ) -> $child {
        sum_path( @tree, $target, $child, @working, @paths ) if @tree[$child].defined;
    }
}
```

Colin's program also has a `generate_tree` subroutine to generate random binary trees:

``` Perl 6
sub generate_tree ($depth){
## automatically generates a random binary tree of rank n, with node values 1..10
## odds of a node being a terminator increase as the rank of the node increases
## which avoids trees with branches that quickly end
    my @tree;
    @tree[0]  = (^10).pick;            ## always defined
    my $nodes = (2**($depth+1)) - 2;   ## 0-based count to last node, (start of next rank - 1)

    for ( 0..$nodes ) -> $index {
        my $rank = get_rank($index);
        my $parent = (($index-1)/2).Int;
        if @tree[$parent].defined {
            ## the odds of the switch being 0 increase as the rank progresses
            ## the first node will always generate the next rank
            my $switch = $index > 0 ?? (^($nodes - 2 ** $rank)/2).pick.Int !! 1;
            @tree[$index] = $switch ?? (^10).pick !! Nil;
        }
    }
    return @tree;
}
sub get_rank ($n) {
## determines the rank of a node from its index
    return $n > 0 ?? (log($n+1)/log(2)).Int !! 0;
}
```

And this is the main code calling these subroutines:

``` Perl 6
sub MAIN ($depth = 3) {

    my @tree = generate_tree($depth);

    my $tstr = @tree.map({$_.defined ?? $_ !! "undef"}).join(', ');
    my $target = (($depth+1) * 4.5).Int;

    say qq:to/__END__/;
    tree:   $tstr
    target: $target
    paths found:
    __END__

    my $index = 0;
    my @working;
    my @paths;
    sum_path(@tree, $target, $index, @working, @paths);

    say "\nsolutions:\n";
    @paths.elems == 0 ?? say '(none)' !! ($_.join(' -> ').say for @paths);
}
```

[Javier Luque](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-056/javier-luque/raku/ch-2.p6) wrote a recursive `BTree::Node` class to implement the basic data structure:

``` Perl 6
class BTree::Node {
    has Int $.value is rw;
    has BTree::Node $.left is rw;
    has BTree::Node $.right is rw;
}
```

The hard work (tree traversal and computing the path sum) is done in the recursive `path-sum` subroutine:

``` Perl 6
sub path-sum(BTree::Node $node, Int $k, Int $total is copy, Str $path_string is copy) {
    $total += $node.value;
    $path_string ~= $node.value;

    # Branch left
    path-sum( $node.left,
              $k,
              $total,
              $path_string ~ ' → ' )
    if ($node.left);

    # Branch right
    path-sum($node.right,
             $k,
             $total,
             $path_string ~ ' → ' )
        if ($node.right);

    # Calculate total if we can't branch
    if ( !$node.left &&
         !$node.right &&
         $total == $k ) {
        say $path_string;
    }
}
```

Otherwise, the construction of the binary tree is hard-coded in the main code:

``` Perl 6
my $root =
    BTree::Node.new(
        value => 5,
        left => BTree::Node.new(
            	value => 4,
            	left => BTree::Node.new(
            		value => 11,
            		left => BTree::Node.new(
            			value => 7
            		),
            		right => BTree::Node.new(
            			value => 2,
            		)
            	)
            ),
        right => BTree::Node.new(
            value => 8,
            left => BTree::Node.new(
            	value => 13
            ),
            right => BTree::Node.new(
            	value => 9,
            	right => BTree::Node.new(
            		value => 1,
            	)
            )
        )
    );

my $k = 22;
path-sum($root, $k, 0, '');
```

[Mark Anderson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-056/mark-anderson/raku/ch-2.p6) also used object-oriented programming for the tree data structure:

``` Perl6
class node {
    has UInt  $.value;
    has Array $.parents  is rw;
    has node  $.left     is rw;
    has node  $.right    is rw;
}
```

The bulk of the work is done in the `traverse` subroutine:

``` Perl 6
sub traverse($node) {
    my @parents = [$node.value, |$node.parents];
    if $node.left {
        $node.left.parents = @parents;
        traverse($node.left);
    }
    if $node.right {
        $node.right.parents = @parents;
        traverse($node.right);
    }
    unless $node.left or $node.right {
        say @parents.reverse.join(" -> ") ~ " == 22" if @parents.sum == 22;
    }
}
```

The tree construction is hard-coded:

``` Perl 6
my $root = node.new(value => 5, parents => []);

$root.left  = node.new(value => 4);
$root.right = node.new(value => 8);

$root.left.left = node.new(value => 11);

$root.left.left.left  = node.new(value => 7);
$root.left.left.right = node.new(value => 2);

$root.right.left  = node.new(value => 13);
$root.right.right = node.new(value => 9);

$root.right.right.right = node.new(value => 1);

traverse($root);
```

[Mohammad S. Anwar](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-056/mohammad-anwar/raku/ch-2.p6) used a nested hash of hashes of arrays to represent the binary tree:

``` Perl 6
my Hash[] $TREE = :{
    5 => { 4 => { 11 => [7, 2] },
           8 => { 13 => [],
                   9 => [1],
                },
         },
};
```

and used nested `for` loops to walk through the path:

``` Perl 6
sub find-matched-paths(Hash[] $TREE, Int $SUM) {
    my $paths = [];
    for $TREE.keys -> $k {
        my $path = [ $k.Int ];
        for $TREE{$k}.keys -> $i {
            my $_path = [ $k.Int, $i.Int ];
            for $TREE{$k}{$i}.keys -> $j {
                $_path.push: $j.Int;
                if $TREE{$k}{$i}{$j}.elems > 0 {
                    for $TREE{$k}{$i}{$j} -> $e {
                        $_path.push: $e.Int;
                    }
                    $paths.push: $_path;
                }
                else {
                    $paths.push: [ @$_path ];
                }
            }
        }
    }
    my $matched-paths = [];
    for @$paths -> $path {
        $matched-paths.push: $path.join(" -> ") if $SUM == [+] $path;
    }
    return $matched-paths;
}
```

The only problem with this iterative approach is that the `find-matched-paths` subroutine is implicitly hard-coded for a maximum tree depth of four levels. With a deeper tree, it would be necessary to add new nested loops. In that sense, I believe that a recursive approach is more adapted to a depth-first tree traversal, although computer science tells us that a recursive program can always be turned into an iterative program, for example by adding an explicit call stack (see Ruben Westerberg's solution in my [review of Raku solutions to PWC 57](https://github.com/LaurentRosenfeld/Perl-6-Miscellaneous/blob/master/Challenges-in-Perl6/Tree-inversion.md) for an example of that).

[Ryan Thompson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-056/ryan-thompson/raku/ch-2.p6) used an array of arrays to store the binary tree and obtained a remarkably concise program:

``` Perl 6
my @tree = [6, [5, [2], [4, [15]]], [19, [4, [5]], [2, [12]]], [1, [16, [7]]]];

path-sum(@tree,30).say;

#| Does a certain complete sum exist in the tree?
sub path-sum( @tree, $sum is copy, @path is copy = [] ) {
    my ($val, @kids) = @tree;
    @path.push: $val;
    $sum -= $val;

    return @path if $sum == 0 and !@kids;
    return Empty if $sum <  0;

    |@kids.map: { path-sum($_, $sum, @path) };
}
```

Note that Ryan’s array of arrays is not the same as mine. My basic array has three items (value, left node, right node), where as Ryan’s basic array has two items: the node value and an array of references to the children). TIMTOWTDI.

***

## SEE ALSO

Six blog posts on the subject:

* Arne Sommer: https://raku-musings.com/diff-sum.html;

* Luca Ferraru: https://fluca1978.github.io/2020/04/14/PerlWeeklyChallenge56.html;

* Shahed Nooshmand: https://rafraichisso.ir/2020/04/18/pwc-56;

* Javier Luque: https://perlchallenges.wordpress.com/2020/04/13/perl-weekly-challenge-056/;

* Mohammad S. Anwar: https://perlweeklychallenge.org/blog/weekly-challenge-056/;

* Ryan Thompson: https://ry.ca/2020/04/path-sum/.

## Wrapping up

Please let me know if I forgot any of the challengers or if you think my explanation of your code misses something important (send me an e-mail or just raise an issue against this GitHub page).

If you want to participate to the Perl Weekly Challenge, please connect to [this site](https://perlweeklychallenge.org/).
