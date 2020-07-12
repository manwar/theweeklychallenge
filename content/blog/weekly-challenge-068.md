---
title: "BLOG: The Weekly Challenge #068"
date: 2020-07-12T00:00:00+00:00
description: "Blog for the weekly challenge #068."
type: post
image: images/blog/weekly-challenge-068.jpg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

# HEADLINE

The **Week #068** is my 23rd week in a row participating the weekly challenge. For the first time, I created a package to deal with the **"Reorder List"** task. It really helped me in thinking straight when dealing with linked list. With the help my favourite **CPAN** module **Moo**, creating class is like piece of cake as shown below.

```perl
package Node;

use Moo;

has v => (is => 'rw');
has c => (is => 'rw');

sub show_link {
    my ($self) = @_;

    my $head = $self;
    my @v = ();
    while ($head->c) {
        push @v, $head->v;
        $head = $head->c;
    }
    push @v, $head->v;

    return sprintf("%s", join ' -> ', @v);
}
```

I will talk more in detail later down below.

As you all know by now, I always tend to translate my **Perl** solution literally to get the **Raku** version. So this gave me the opportunity to create class in **Raku** which I never done so far if you ask about weekly challenge. I enjoyed creating **Raku** class to say the least. It has more meat than the **Perl** counterpart. I will share more about it down below.

Let me share my solutions to the **[Perl Weekly Challenge - 068](/perl-weekly-challenge-068)**.

***
## TASK #1 › Zero Matrix
#### Submitted by **[Mohammad S Anwar](http://www.manwar.org)**
***

You are given a matrix of size M x N having only 0s and 1s.

Write a script to set the entire row and column to 0 if an element is 0.

***

For this task, I tried to be more organised than before and have a separate subroutine for each task. To begin with, first I came with `sub get_matrix()` to create a matrix given `$rows` and `$cols`.

Nothing special about the subroutine except for the fact, I introduced little hack where I forced to it have more `1s` than `0s` in the matrix so that I see meaningful end result. For this I created fixed set of `1s` and `0s`, so that when I randomly pick one, the probability of getting `1` is highter than `0`.

```perl
sub get_matrix {
    my ($rows, $cols) = @_;

    # prabability of picking 1 is higher than 0 (80:20).
    my $min   = 0;
    my $max   = 9;
    my $array = [ 1, 0, 1, 1, 1, 1, 1, 0, 1, 1 ];

    my $matrix  = [];
    foreach my $r (0..$rows) {
        foreach my $c (0..$cols) {
            $matrix->[$r][$c] = $array->[int($min + rand($max - $min))];
        }
    }

    return $matrix;
}
```

Next in line was to have `sub display_matrix()` to print nicely laid out the given matrix with label. No rocket science here.

```perl
sub display_matrix {
    my ($label, $matrix) = @_;

    print "$label\n";
    foreach my $r (0..$#$matrix) {
        print sprintf("[ %s ]\n", join ', ', @{$matrix->[$r]});
    }
    print "\n";
}
```

Now it is time to introduce the real hero of the task `sub make_zero_matrix()`. The method receives the matrix generated using the given rows and cols from the command line. It creates new zero matrix based on the given matrix, so that it doesn't get mix up. It is commented out nicely for anyone to read it.

```perl
sub make_zero_matrix {
    my ($matrix) = @_;

    my $rows = $#$matrix;
    my $cols = $#{$matrix->[0]};

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

    return $zero_matrix;
}
```

Time to do some **Raku** magic.

First thing first, I created `sub get-matrix()` to create a matrix given rows and cols. The only bit that needs attention is the use of `pick()`. I have used this in the past. It is mainly responsible to pick a random member of the given list. Rest of the code is usual **Raku** magic.

Honestly speaking, it looks elegant and clean.

```perl6
sub get-matrix(Int $rows where { $rows >= 1 },
               Int $cols where { $cols >= 1 }) {

    # prabability of picking 1 is higher than 0 (80:20).
    my $min   = 0;
    my $max   = 9;
    my $array = [ 1, 0, 1, 1, 1, 1, 1, 0, 1, 1 ];

    my $matrix  = [];
    for 0..$rows -> $r {
        for 0..$cols -> $c {
            $matrix.[$r][$c] = $array.pick;
        }
    }

    return $matrix;
}
```

Even the `sub display-matrix()` looks smart, with `$matrix.[$r].join(', ')`.


```perl6
sub display-matrix($label, $matrix) {

    say $label;
    for 0..$matrix.elems - 1 -> $r {
        say sprintf("[ %s ]", $matrix.[$r].join(', '));
    }
}
```

The following `sub make-zero-matrix()` deals with main task i.e. making zero matrix.

```perl6
sub make-zero-matrix($matrix) {

    my $rows = $matrix.elems - 1;
    my $cols = $matrix.[0].elems - 1;

    my $zero_matrix = [];
    for 0..$rows -> $r {
        for 0..$cols -> $c {
            if $matrix.[$r][$c] == 0 {
                # make zero row
                (0..$cols).map({ $zero_matrix.[$r][$_] = 0 });
                # make zero col
                (0..$rows).map({ $zero_matrix.[$_][$c] = 0 });
            }
        }
    }

    # fill empty cells, if any.
    for 0..$rows -> $r {
        for 0..$cols -> $c {
            $zero_matrix.[$r][$c] = 1 unless
                defined $zero_matrix.[$r][$c];
        }
    }

    return $zero_matrix;
}
```

With all the handy subroutines defined above, getting the final solution becomes school boy job.

```perl
use strict;
use warnings;

my $R = $ARGV[0];
my $C = $ARGV[1];

my $matrix;
if (defined $R && defined $C) {
    die "ERROR: Invalid rows [$R].\n" unless ($R =~ /^\d+$/ && $R >=2 );
    die "ERROR: Invalid cols [$C].\n" unless ($C =~ /^\d+$/ && $C >=2 );

    $matrix = get_matrix(--$R, --$C);
}
else {
    $matrix = [
        [1, 0, 1],
        [1, 1, 1],
        [1, 0, 1],
    ];
}

my $zero_matrix = make_zero_matrix($matrix);

display_matrix('Matrix:', $matrix);
display_matrix('Zero Matrix:', $zero_matrix);
```

Although, the **Raku** app is not exactly the same as **Perl** but you would agree with me, it has upper hand as far as the presentation is concerned.

```perl6
use v6.d;

sub MAIN(Int :$R? is copy where { $R >= 2 } = 3,
         Int :$C? is copy where { $C >= 2 } = 3) {

    my $matrix      = get-matrix(--$R, --$C);
    my $zero_matrix = make-zero-matrix($matrix);

    display-matrix('Matrix:', $matrix);
    display-matrix('Zero Matrix:', $zero_matrix);
}
```

Time to do some testing, first comes **Perl** using friend like `Test::More` and `Test::Deep`.

```perl
use Test::More;
use Test::Deep;

is_deeply( make_zero_matrix([[1, 0, 1],[1, 1, 1],[1, 1, 1]]),
           [[0, 0, 0],[1, 0, 1],[1, 0, 1]],
           'testing example 1' );
is_deeply( make_zero_matrix([[1, 0, 1],[1, 1, 1],[1, 0, 1]]),
           [[0, 0, 0],[1, 0, 1],[0, 0, 0]],
           'testing example 2' );

done_testing;
```

**Raku** once gain wins the race without the need of external library.

```perl6
use Test;

is-deeply make-zero-matrix([[1, 0, 1], [1, 1, 1], [1, 1, 1]]),
          [[0, 0, 0], [1, 0, 1], [1, 0, 1]],
          'testing example 1';
is-deeply make-zero-matrix([[1, 0, 1], [1, 1, 1], [1, 0, 1]]),
          [[0, 0, 0], [1, 0, 1], [0, 0, 0]],
          'testing example 2';

done-testing;
```

***
## TASK #2 › Reorder List
#### Submitted by **[Mohammad S Anwar](http://www.manwar.org)**
***

You are given a singly linked list `$L` as below:

    L0 →  L1 →  … →  Ln-1 →  Ln

Write a script to reorder list as below:

    L0 →  Ln →  L1 →  Ln-1 →  L2 →  Ln-2 →

You are **ONLY** allowed to do this in-place without altering the nodes’ values.

***

<br>

Personally I enjoy task related to **Linked List**. I could have done with without actually creating linked list but I didn't want to cheat. So I decided to create class `Node` with just two attributes `v` and `c` to hold value and child respectively. Using `Moo`, creating class is a child's play as you can see below.

```perl
package Node;

use Moo;

has v => (is => 'rw');
has c => (is => 'rw');

sub show_link {
    my ($self) = @_;

    my $head = $self;
    my @v = ();
    while ($head->c) {
        push @v, $head->v;
        $head = $head->c;
    }
    push @v, $head->v;

    return sprintf("%s", join ' -> ', @v);
}
```

Once the class `Node` is ready, time to create `sub reorder_list()` to perform the task. In this method, I am doing two things distinctively i.e. prepare singly linked list and reorder in the end. It is nicely commented out for you to follow.

```perl
sub reorder_list {
    my ($list) = @_;

    $list =~ s/\s+//g;
    $list = [ split /\-\>/, $list ];
    my $head = Node->new(v => shift @$list);
    my $link = [ $head ];

    # prepare singly linked list
    foreach my $v (@$list) {
        my $node = Node->new(v => $v);
        $link->[-1]->c($node);
        push @$link, $node;
    }

    # reorder linked list
    my $i = 1;
    foreach (0 .. int($#$list/2)) {
        my $node = pop @$link;
        splice(@$link, $i, 0, $node);

        # remove child from the last node
        $link->[-1]->c(undef);

        # link new node to previous node
        $link->[$i-1]->c($node);

        # make the next node as child of new node
        $node->c($link->[$i+1]);

        $i += 2;
    }

    return $head;
}
```
For the first time, I am creating **Raku** class as far as the weekly challenge is concerned.

I must confess, what you see down below is no what I wrote in the first place. It has gone through few changes, thanks to many experts. Let me share in details. At first I didn't have `is rw` assigned to the attribute, instead I had setter method. **Jonathan Worthington** suggested the change to make it cleaner.

`@khalidelboray` suggested instead of `my @v = ($!v)`, I could simply do something like `my @v = $!v`.

When I made my code public, I received another cool suggestion by **Moritz Lenz** to replace my existing subroutine to show link.

```perl6
class Node {
    has Int  $.v is rw;
    has Node $.c is rw;

    # my implementation
    method _show-link() {
        my $c = $!c;
        my @v = $!v;

        while defined $c {
            @v.push: $c.v;
            $c = $c.c;
        }

        return @v.join(' -> ');
    }

    # contributed by Moritz Lenz
    method show-link() {
        return join ' -> ', (self, *.c ...^ !*.defined).map: *.v;
    }
}
```

I had another issue with my setter method earlier as I couldn't set Nil to the attribute `c`. I was trying to do `$n->c(Nil)` and keep getting error. I posted the error message and received the solution by `@scimon`. I was suggested to do `$n->c(Node)` instead.

With the introduction of `is rw`, I thought I can now make call like `$n1->c($n2)`. I was wrong and corrected by `@khalidelboray`. I was told the correct way to perform the same is `$n1.c = $n2`. Also with `is rw`, I can easily set Nil like `$n.c = Nil` as suggested by **Jonathan Worthington**.

For me this is my best work in **Raku** so far.

```perl6
sub reorder-list(Str $linked-list is copy) {

    $linked-list ~~ s:g/\s//;
    my @list = $linked-list.split('->');
    my $head = Node.new(v => @list.shift.Int);
    my @link = $head;

    # prepare singly linked list
    for @list -> $v {
        my $node = Node.new(v => $v.Int);
        @link.tail.c = $node;
        @link.push: $node;
    }

    # reorder linked list
    my Int $min = 0;
    my Int $max = (@list.elems/ 2).Int;
    my Int $i   = 1;
    for $min .. $max-1 {
        my $node = @link.pop;
        @link.splice($i, 0, $node);

        # remove child from the last node
        @link.tail.c = Nil;

        # link new node to previous node
        @link[$i - 1].c = $node;

        # make the next node as child of new node
        $node.c = @link[$i + 1];

        $i += 2;
    }

    return $head;
}
```

Time to solve the task, it literaly becomes one-liner, do you see chaining?

```perl
package main;

my $list = $ARGV[0]//'1 -> 2 -> 3 -> 4 -> 5';
print reorder_list($list)->show_link, "\n";
```

Literal translation of **Perl** solution.

```perl6
sub MAIN(Str :$linked-list = '1 -> 2 -> 3 -> 4 -> 5') {
    reorder-list($linked-list).show-link.say;
}
```

Unit test to make it complete.

```perl
package main;

use Test::More;

is( reorder_list('1 -> 2 -> 3 -> 4')->show_link,
    '1 -> 4 -> 2 -> 3',
    'testing 1 -> 2 -> 3 -> 4' );
is( reorder_list('1 -> 2 -> 3 -> 4 -> 5')->show_link,
    '1 -> 5 -> 2 -> 4 -> 3',
    'testing 1 -> 2 -> 3 -> 4 -> 5' );
is( reorder_list('1 -> 2 -> 3 -> 4 -> 5 -> 6')->show_link,
    '1 -> 6 -> 2 -> 5 -> 3 -> 4',
    'testing 1 -> 2 -> 3 -> 4 -> 5 -> 6' );

done_testing;
```

and **Raku**, just so I don't forget it.

```perl6
use Test;

is reorder-list('1 -> 2 -> 3 -> 4').show-link,
   '1 -> 4 -> 2 -> 3',
   'testing 1 -> 2 -> 3 -> 4';
is reorder-list('1 -> 2 -> 3 -> 4 -> 5').show-link,
   '1 -> 5 -> 2 -> 4 -> 3',
   'testing 1 -> 2 -> 3 -> 4 -> 5';
is reorder-list('1 -> 2 -> 3 -> 4 -> 5 -> 6').show-link,
   '1 -> 6 -> 2 -> 5 -> 3 -> 4',
   'testing 1 -> 2 -> 3 -> 4 -> 5 -> 6';

done-testing;
```

***

That's it for this week. Speak to you soon.
