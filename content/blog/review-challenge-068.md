---
author:       Colin Crain
date:         2020-07-19T00:00:00
description:  "Colin Crain › Perl Weekly Review #068"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #068"
image:        images/blog/p5-review-challenge-068.jpg
type:         post
---

Continues from [previous week](/blog/review-challenge-067/).

Welcome to the Perl review for Week 068 of the Weekly Challenge! For a quick overview, go through the [original tasks](/blog/perl-weekly-challenge-068/) and [recap](/blog/recap-challenge-068/) of the weekly challenge.

## Getting in Touch

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Email me (Colin) with any feedback about this review. I'm curious what you all think of it.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

We'd greatly appreciate any feedback you'd like to give.

***

## [Task 1](#PWC068TASK1)  &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC068TASK2) &nbsp;  &nbsp;  &nbsp; [BLOGS](#blogs)

***

## TASK #1 › Zero Matrix {#PWC068TASK1}

You are given a matrix of size M x N having only 0s and 1s.

Write a script to set the entire row and column to 0 if an element is 0.

Example 1
```
    Input:  [1, 0, 1]
            [1, 1, 1]
            [1, 1, 1]

    Output: [0, 0, 0]
            [1, 0, 1]
            [1, 0, 1]
```

Example 2
```
    Input:  [1, 0, 1]
            [1, 1, 1]
            [1, 0, 1]

    Output: [0, 0, 0]
            [1, 0, 1]
            [0, 0, 0]
```

***

## Solution Types

{#PWC068TASK1}

The basic initial observation people made approaching this problem was that changing a column to zero creates a new zero in subsequent rows, so we can't just read through elements and change the matrix as we go. It was evident there was a problem in concurrency with reading and writing. There were two common strategies to overcome this:

### 1. RECORD the Changes and APPLY Them Later

The most common approach was to read through the input matrix and record the rows and columns to be tranformed, then revisit the matrix on a second pass and apply the changes. There were a few ways to go about this, but in some way it was necessary to make two records, one for row zeros, the other columns. These could either be arrays or hashes; it seems using hashes could save a few superfluous checks if used carefully.

A popular way was to iterate through the matrix was using indices, then when a 0 is found those indices can immediately be used to record the hit at the matching position in the records. New member [**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-068/sgreen/perl/ch-1.pl) impliments this quite compactly:

```perl
my @negative_cols = ();
my @negative_rows = ();
for my $r ( 0 .. $M - 1 ) {
    for my $c ( 0 .. $N - 1 ) {
        if ( $array[$r][$c] == 0 ) {
            $negative_rows[$r] = 1;
            $negative_cols[$c] = 1;
        }
    }
}
```

To make the changes, we traverse the matrix a second time. One optimization we can make here where if a row has a 0, the entire row changes to 0, so we can stop iterating the columns and jump immediately to the new row. You can see this in action in [**my own solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-068/colin-crain/perl/ch-1.pl)

```perl
for my $row_idx (0..$rows-1) {
    if ($row_zeros[$row_idx] == 1) {
        $matrix[$row_idx] = [ (0) x $cols ];
        next;
    }
    for my $col_idx ( 0..$cols-1) {
        $matrix[$row_idx]->[$col_idx] = 0 if $col_zeros[$col_idx] == 1;
    }
}
```

All of the members
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-068/athanasius/perl/ch-1.pl),
[**Myoungjin Jeon**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-068/jeongoon/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-068/roger-bell-west/perl/ch-1.pl) [[blog](https://blog.firedrake.org/archive/2020/07/Perl_Weekly_Challenge_68__zero_matrix_and_list_reordering.html)],
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-068/walt-mankowski/perl/ch-1.pl) and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-068/wanderdoc/perl/ch-1.pl) took this approach.

### 2. Make a NEW MATRIX

The other way to avoid data update conflicts is to parse through the input array only once, record the transformations immediately on a second matrix and output that matrix instead. Amongst these solutions, people either duplicated the old matrix, created a new matrix composed of 1s, or traversed and completed the new matrix before output, filling in anything not 0 with a 1.

[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-068/mohammad-anwar/perl/ch-1.pl) has made us a fine example of the latter approach:

```perl
my $zero_matrix = [];
foreach my $r (0..$rows) {
    foreach my $c (0..$cols) {
        if ($matrix->[$r][$c] == 0) {
            # make zero row
            $zero_matrix->[$r][$_] = 0 foreach (0..$cols);
            # make zero col
            $zero_matrix->[$_][$c] = 0 foreach (0..$rows);
        }
    }
}

# fill empty cells, if any.
foreach my $r (0..$rows) {
    foreach my $c (0..$cols) {
        $zero_matrix->[$r][$c] = 1 unless
            defined $zero_matrix->[$r][$c];
    }
}
```

Other submissions along these lines were made by
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-068/arne-sommer/perl/ch-1.pl)     [[blog](https://raku-musings.com/zero-order.html)],
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-068/cheok-yin-fung/perl/ch-1.pl) (who takes a hybrid approach, using arrays to hold the *index values* of the 0 locations), and
[**Javier Luque**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-068/javier-luque/perl/ch-1.pl)    [[blog](https://perlchallenges.wordpress.com/2020/07/06/perl-weekly-challenge-068/)]

Although it mostly dwells on his Raku solution, in his [blog](https://raku-musings.com/zero-order.html) Arne has a nice writeup of his analysis and method.

### UNIQUE approaches and other THINGS THAT CAUGHT MY EYE

### [**Bartosz Jarzyna**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-068/brtastic/perl/ch-1.pl)

**Bartosz** has outdone himself, creating an intricate system of interconnected first-order functions to do his work for him. Rather than collect flags signifying the locations of the 0s on traversal, he collects code references, which he calls 'rules' that will return the correct values on execution. To resolve the matrix we traverse again, evaluating these stored routines and inserting the new values.

I couldn't figure out how to pull out just a piece of this mosaic as a sample, so here's the bulk of it in all its functional self-reflexive glory. Things to notice are that the subroutines have subroutines, and the the ```make_rule()``` routine, being generic, doesn't really belong encapsulated in with the other task-specific ```zero_matrix()``` stuff so it rests outside. Oh, and `transform_forth()` is applied before `transform_back()`, in case that doesn't make sense.

```perl
sub make_rule {
    my ($type, $value) = @_;

    return sub {
        my ($val) = @_;
        return $val->[$type] eq $value
            ? TRIGGER_VALUE : DEFAULT_VALUE;
    };
}

sub zero_matrix {
    my ($matrix) = @_;
    my @rules;

    my sub apply_rules {
        my ($val) = @_;
        my $new_value = DEFAULT_VALUE;

        foreach my $rule (@rules) {
            $new_value = $rule->($val);
            last if $new_value ne DEFAULT_VALUE;
        }
        return $new_value;
    }

    my sub transform_forth {
        for my $m_ind (keys $matrix->@*) {
            for my $n_ind (keys $matrix->[$m_ind]->@*) {
                my $value = $matrix->[$m_ind][$n_ind];
                my @new_value = ($m_ind, $n_ind);
                $matrix->[$m_ind][$n_ind] = \@new_value;

                if ($value eq TRIGGER_VALUE) {
                    push @rules, make_rule ROW, $new_value[ROW];
                    push @rules, make_rule COL, $new_value[COL];
                }
            }
        }
    }

    my sub transform_back {
        for my $m_val ($matrix->@*) {
            for my $n_val ($m_val->@*) {
                $matrix->[$n_val->[0]][$n_val->[1]] = apply_rules($n_val);
            }
        }
    }
```

### [**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-068/e-choroba/perl/ch-1.pl)

**Choroba** uses [PDL](http://pdl.perl.org), giving us a very compact, terse solution. PDL is world unto itself, providing powerful data array manipulation capabilities geared towards scientific analysis. Nulling out rows and columns seems well within its capabilities.

```perl
use PDL;

sub zero_matrix {
    my ($matrix) = @_;
    my $pdl = pdl($matrix);
    return unpdl(andover($pdl->xchg(0,1)) * transpose(andover($pdl)))
}
```

### [**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-068/jo-37/perl/ch-1.pl)

**Jorg** unleashes the power of math to perform the operations entirely computationally. It's a singularly impressive feat I was hoping someone would pull off, and I think any summary of the effort would be longer than the script itself. He thoughtfully provides us with a thorough comment, so rather than do this myself I will just reproduce the whole thing here for you to study. The script itself is short, direct and very cool.

```perl
use Math::Matrix;

# let:
# A . B the matrix product of A and B
# M  be a R x C matrix
# r1 an all-1 column vector of size C
# l1 an all-1 row vector of size R
# RS a diagonal matrix of size R x R. Elements in the diagonal are zero
#    or one and act as a row selector for a matrix M1 having R rows
#    by multiplying RS . M
# CS a diagonal matrix of size C x C. Elements in the diagonal are zero
#    or one and act as a column selector for a matrix M2 having C
#    columns by multiplying M . CS
#
# The matrix product M . r1 gives the row sums of M.  For a matrix of
# only zeros and ones a row sum equals C if and only if all elements of
# the row are ones.
# Analogous, the matrix product l1 . M gives the column sums of M and
# here a column sum of R indicates all-one in the corresponding column.
#
# The selector matrices can be constructed from the row sums and
# column sums of M by mapping the sums to zero or one as described.
# Let Rsel(c) and Csel(r) be the corresponding selector matrices for
# given row and columns sum vectors.
#
# The requested matrix from the challenge then can be written as:
# RSel(M . r1) . M . CSel(l1 . M)

sub zero_matrix {
    my $m = shift;
    my ($rows, $cols) = $m->size;

    Math::Matrix->diagonal(map $_->[0] == $cols,
        @{$m->multiply(Math::Matrix->new([(1) x $cols])->transpose)})->
    multiply($m)->
    multiply(Math::Matrix->diagonal(map $_ == $rows,
            @{Math::Matrix->new([(1) x $rows])->multiply($m)->[0]}));
}
```

### [**Myoungjin Jeon**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-068/jeongoon/perl/ch-1.pl)

**Chef Jeon** uses strings to record his rows, which leads him to the essential observation that the presence of a 0 in a row has two effects: in a row it turns the whole row to 0s, and in a column it turns that column *in all rows* to 0. Thus, in the final matrix there are only two types of rows, those composed of only 0s, and those reflecting all the column changes to zero. For output, therefore, is only necessary to compile these two strings, and choose between them to write a particular row.

We can call this a unique variant on the "record the changes and apply them later" approach. No one else, myself included, noticed this relationship, and in using the two array method this observation could be used to construct a final row to be inserted in the changed matrix, much like the "row of zeros" optimization shown above, saving all iteration through the columns. Neat.

```perl
while ( defined( my $r_raw = get_row_( \@row_raw ) ) ) {
    my $new_row_some_zero_str = $row_some_zero_str & $r_raw;
    push @row_whole_zero_flag, !!( index( $r_raw, "0" ) > 0 );
    $row_some_zero_str = $new_row_some_zero_str;
    read_row_( \@row_raw ) unless $use_random;
    print STDERR $r_raw.$/;
}

( my $row_whole_zero_str = $row_some_zero_str ) =~ s/1/0/g;

print STDERR ( "Output:\n" );
print( ( $_ ? $row_whole_zero_str : $row_some_zero_str ).$/ )
  for @row_whole_zero_flag;
```

### [**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-068/perlboy1967/perl/ch-1.pl)

Niels gives us the construct

```perl
map {    $_ = [map { 0 } @$_] if ( !min @$_ );    } @$matrix;
```

I'm not normally a fan of using map in void context, but in this case Niels is explicitly modifying $_. As noted in [perlfunc](https://perldoc.perl.org/5.32.0/functions/map.html):

>Note that $_ is an alias to the list value, so it can be used to modify the elements of the LIST ... this is useful and supported.

This stands as a quite clever way to simultaneously check and zero out an entire row of the target matrix, but can't easily be adapted to zero out the *column* data as requested.

***
# TASK #2 › Reorder List
You are given a singly linked list $L as below:
```
    L0 →  L1 →  … →  Ln-1 →  Ln
```

Write a script to reorder list as below:
```
    L0 →  Ln →  L1 →  Ln-1 →  L2 →  Ln-2 →
```
You are ONLY allowed to do this in-place without altering
the nodes’ values.

Example
```
    Input:  1 →  2 →  3 →  4
    Output: 1 →  4 →  2 →  3
```

***

## TASK 2 SOLUTIONS {#PWC068TASK2}

The linked list data structure is a fine example of what one might call the "I don't know where I'm going, I just know how to get there" school of programming. Without benefit of the big picture, an individual element in a singly linked list as specified here only knows its value and how to find the next link in the chain.

There is no built-in data type in Perl for a linked list, leading to quite a lot of variety here in implementations. There are many options available for import, and it's a simple matter to make one's own object. In the most minimal sense, a hash with two keys for value and the next node are all that is required. Or even an array:

```perl
my $list = [ 'A', [ 'B', [ 'C', ... ]]];
```

In Perl, though, every node, be it a specialized object or a simple hash with two keys, has a reference, and so we can add to this the functionality of remembering where we've been. In the most basic action we need to keep track of the reference for the starting node, so we can walk the list.

It can be well argued that anything that one would normally use a linked list for in C one can do straight out of the box with a Perl array, which as a statement is basically correct. In languages with low-level types, linked lists fill a very useful niche with their functionality. Perl arrays, on the other hand, are quite sophisticated data structures: they are well optimized under the hood to be dynamic, and come with a full toolbox of ways to rapidly access the data either as queues from the ends or splicing into the middle. But that particular debate isn't really the question, is it?

I mention this because quite a few members submitted novel ways to braid a simple Perl array to produce the desired ordering, which I'm pretty sure goes against the spirit, if not the letter, of the challenge. One thing I have learned is that it is just not safe to assume that language that *you* think is perfectly clear cannot be construed in a very different way by someone else. And it's also certainly true that sometimes people just read things too quickly and answer the wrong question. In any case it doesn't really matter here. As I said elsewhere recently, no spacecraft survival is dependent on our answers.

### 1. the MOST COMMON method

The most common way to fold a linked list back upon itself was to explicitly move the last node forward and reinsert it, following the basic algorithm:
* (start at the front of the list)
1. connect the second node as the child of the last node
2. connect the last node as the child of the first node
3. undefine the child of the second-to-last node, which is now the last node
4. jump forward 2 nodes and repeat from 1
* (stop when you can no longer jump)

Mostly folks used their own Node objects, but the modules [LinkedList::Single](https://metacpan.org/pod/LinkedList::Single), [Data::LinkedList](https://metacpan.org/pod/release/LLOYDG/Data-LinkedList-0.01/lib/Data/LinkedList.pm), and [Struct::Dumb](https://metacpan.org/pod/Struct::Dumb) found their way into the solutions.

### [Athanasius](#ATHANASIUS2), [Bartosz Jarzyna](#BARTOSZ2), [E. Choroba](#CHOROBA2), [Javier Luque](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-068/javier-luque/perl/ch-2.pl), [Myoungjin Jeon](#MYOUNGJIN2), [Niels van Dijke](#NVD2), [Myself](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-068/colin-crain/perl/ch-2.pl), and [Wanderdoc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-068/wanderdoc/perl/ch-2.pl)  used some variation on this method.

Have a look at a representative sample from [**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-068/wanderdoc/perl/ch-2.pl):

```perl
 my $middle = int(($counter-1)/2);
 while ( $i < $middle )
 {
      my $last_node = _pop_last_node($next_node);
      _insert_node($next_node, $last_node);
      $next_node = $next_node->next->next;

      $i++;
 }
```

Note the iterator $i only counts to the middle of the list, as only half is folded into the front section. The private routines pretty much do what you'd expect them to.


### 2. the CLEVER PLACEHOLDER ARRAY method

Two of us,
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-068/mohammad-anwar/perl/ch-2.pl)  and
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-068/walt-mankowski/perl/ch-2.pl),
came up with a novel variation by placing the newly created nodes of their linked list into a standard Perl array. The nodes in the list are still singly linked, and the list traverses in the usual way — the nodes are not actually connected to the array container holding them. However this array does lay out the list in a regular fashion, making any rearrangement and link updating quite a bit easier as the individual node references can now be accessed by their array index.

Here's a slightly edited snippet from **Mohammad**:

```perl
# reorder linked list
foreach (0 .. int($#$list/2)) {
    my $node = pop @$link_array;
    splice(@$link_array, $i, 0, $node);

    # remove child from the last node
    $link_array->[-1]->c(undef);

    # link new node to previous node
    $link_array->[$i-1]->c($node);

    # make the next node as child of new node
    $node->c($link_array->[$i+1]);

    $i += 2;
}
```

Mohammad goes into greater detail on his [blog](https://perlweeklychallenge.org/blog/weekly-challenge-068/). Check it out.

### UNIQUE approaches and other THINGS THAT CAUGHT MY EYE

### [Athanasius](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-068/athanasius/perl/ch-2.pl){#ATHANASIUS2}

The monk uses a hand-rolled SinglyLinkedList object, which, presumably, lives in his PWC directory - which is also unfortunately omitted from what we have here. No mind. From the context it seems pretty clear what it does.

His sub

```perl
sub reorder_list
{
    my ($list) = @_;
    for (my $curr = $list->get_head;
            $curr->{next} && $curr->{next}{next};
            $curr = $curr->{next}{next})
    {
        $list->insert($curr, $list->remove_tail);
    }
}
```

does the folding.

### [Bartosz Jarzyna](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-068/brtastic/perl/ch-2.pl){#BARTOSZ2}

Bartosz brings us the following tidbit to do the sorting out:

```perl
while (-reordering) {
    my $tail = detach_tail $current;
    if (!defined $current->next_node) {
        if (defined $tail) {
            $current->set_next_node($tail);
        }
        last;
    }

    my $next = $current->next_node;
    $current->set_next_node($tail);
    $tail->set_next_node($next);
    $current = $next;
}
```

It even says it right there: "while reordering". Wait what? A bareword? Really? And discovering it even ran under ```strict``` had me really puzzled. I couldn't let this one go, so I found myself down the rabbit hole some time later with the following tidbit, from [perlop](https://perldoc.perl.org/perlop.html#Symbolic-Unary-Operators):

>Unary "-" performs arithmetic negation if the operand is numeric, including any string that looks like a number. If the operand is an identifier, a string consisting of a minus sign concatenated with the identifier is returned. Otherwise, if the string starts with a plus or minus, a string starting with the opposite sign is returned. One effect of these rules is that -bareword is equivalent to the string "-bareword".

So the string evaluates to true, is informative to the reader, and it seems all of this happens *before* ```strict``` comes into play. Ok then, carry on.

### [E. Choroba](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-068/e-choroba/perl/ch-2.pl){#CHOROBA2}

I found Choroba's solution quite readable. Here's his `reorder()` routine:

```perl
sub reorder {
    my ($self) = @_;
    my $current = $self;
    while ($current) {
        my $last = $current;
        my $last_but_one;
        while ($last->{next}) {
            $last_but_one = $last;
            $last = $last->{next};
        }

        undef $last_but_one->{next};
        my $next = $current->{next};
        $current->set_next($last);
        $last->set_next($next);
        $current = $next;
    }
}
```

I like the way be brings it to your attention that because we can only know about the *following* node,when moving we need to travel to the node *before* the one we need to act on. It's an important distinction and helps people follow the action.

### [Jorg Sommrey](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-068/jo-37/perl/ch-2.pl)

Jorg comes to us with a thoroughly unique approach, adapting some listwise logic to linked lists for his solution. First he creates two functions, `list_halve()` and `list_reverse()` to return the second half of a list and reverse the nodes in a list respectively. Then he applies

```perl
    list_zip $list, list_reverse list_halve $list;
```

Here is his `list_zip()` function:

```perl
sub list_zip {
    my ($first, $second) = @_;

    # Remove node from the head of the second list and add it at
    # the current position of the first list.  Then skip over
    # the newly added node and the next node of the first list.
    $first->head;
    $second->head;
    $first->add($second->shift)->next->next while !$second->is_empty;

    $first;
}
```

Follow the link to see the rest of Jorg's code, it's a really interesting way to go about things.

### [Myoungjin Jeon](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-068/jeongoon/perl/ch-2.pl){#MYOUNGJIN2}

Jeon's code is impressively, well, *thorough* is the word that comes to mind. Whereas I myself might strip things down to focus on the logical puzzle and leave out input validation or command line options as distractions from the essential nature of the solution; Jeon writes meticulously wrought, fully documented little applications, in this case with explicit garbage collection.

Looking for a nice snippet I've settled on this block. I like the package debug glob.

```perl
BEGIN {
    $::debugging = 0;
    $::reading_data_from_stdin = 0;
    my $help = 0;

    GetOptions( "debug" => \$::debugging,
                "stdin" => \$::reading_data_from_stdin,
                "help"  =>  \$help,
        ) or pod2usage(2);

    pod2usage( -exitval => 0, -verbose => 2 ) if $help;

    our $dprint = sub( @ ) {
        ++$|;
        print "[DEBUG] ",@_;
    };

    *::dprint = $::debugging ? $dprint : sub {};
}
```

I don't know what to say. I bet his knifework is superb. Have a look.

### [Niels van Dijke](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-068/perlboy1967/perl/ch-2.pl){#NVD2}

Niels uses the module `Data::LinkedList` to make us an object. Once that is done, the folding is quite straightforward. We take the last element and insert it at the insert point, then move the point forward two places. The object methods take care of the nodes themselves. Although I'm not familiar with the module, the code is self-explanatory:

```perl
sub reorderList ($) {
    my ($myLl) = @_;
    my $size = $myLl->size;
    my $i = 1;
    while ($i < $size) {
        $myLl->insert($i, $myLl->remove_last);
        $i += 2;
    }
}
```

### [Roger Bell_West](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-068/roger-bell-west/perl/ch-2.pl) [[BLOG]](https://blog.firedrake.org/archive/2020/07/Perl_Weekly_Challenge_68__zero_matrix_and_list_reordering.html)

Roger does not actually use a linked list, but in his solution he states his intent is indeed to keep to the spirit of the challenge. That's good enough for me, so he gets a pass. Instead of a linked list he uses a basic Perl array, but then he goes about compiling a properly ordered set of array indices, rearranging the input array in one fell swoop by feeding the index *array* as the index *data* for an array *slice*. This is a remarkable use of an array slice I never considered before. For example, at this point ```@i``` may look like ```(0, 4, 1, 3, 2)``` and the line is:

```perl
@{$list}=@{$list}[@i];
```

As he's moving the actual index positions around rather than copying the data held within them, it is indeed similar to moving the nodes of a real, proper linked list.

### [Walt Mankowski](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-068/walt-mankowski/perl/ch-2.pl){#WALTMAN2}

As discussed above, Walt places the list in an array to reorder, which gives a temporary structure to locate the proper references by index. Then only the node->next values are altered in the relinking.

```perl
sub reorder_list($list) {
    # save the nodes in an array
    my @a;
    while (defined $list) {
        push @a, $list;
        $list = $list->next;
    }

    # now reorder things
    my $n = $#a;
    for my $i (0..$n / 2 - 1) {
        $a[$n-$i]->set_next($a[$i]->next);
        $a[$i]->set_next($a[$n-$i]);
        $a[$n-$i-1]->set_next(undef);
    }
}
```

## BLOGS {#blogs}

***

**That's it for me this week, people!**

### For those who need MORE,
### FOLLOW UP and read these BLOG LINKS:

***( don't think, just do it ... )***


**Roger Bell_West** [RogerBW's Blog](https://blog.firedrake.org/archive/2020/07/Perl_Weekly_Challenge_68__zero_matrix_and_list_reordering.html)

**Arne Sommer** [Zero Order with Raku & Perl](https://raku-musings.com/zero-order.html)

**Javier Luque** [PERL WEEKLY CHALLENGE – 068](https://perlchallenges.wordpress.com/2020/07/06/perl-weekly-challenge-068/)

**Mohammad S Anwar**  [BLOG: THE WEEKLY CHALLENGE #068](https://perlweeklychallenge.org/blog/weekly-challenge-068/)

**Colin Crain** [Zero-Sum Basket Weaving](https://colincrain.wordpress.com/2020/07/10/zero-sum-basket-weaving/)
