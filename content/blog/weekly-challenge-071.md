---
title: "BLOG: The Weekly Challenge #071"
date: 2020-08-02T00:00:00+00:00
description: "Blog for the weekly challenge #071."
type: post
image: images/blog/weekly-challenge-071.jpg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

# HEADLINE

With another **Linked List** related task, I am now enjoying it a lot. It also gives me the opportunity to work with **Class** in **Raku**. Learning **Raku** has changed my thinking a big way. The developer inside me is more organised than before. Also doing regular weekly challenge made me think from unit test point of view every time I come up with a solution. In fact, it dictates the design of my solution. Now with the regular **Live Video Raku Reviews** by **Andrew Shitov** gave me the insights of others **Raku** solutions. It is amazing how he break the code into pieces to make it easy to understand. No book can teach you that. You only learn from experience or watching video from **Andrew Shitov**.

Running **[The|Perl] Weekly Challenge** also taught me how to manage my spare time. I use my spare time very carefully. Before I would jump to anything that excites me. Last few weeks, I have started playing with **Swift** programming language. I am enjoying the journey. Please checkout my **Swift** solution to the **Task #1** of **[Peak Elements](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/mohammad-anwar/swift/ch-1.swift)**.

<br>

Let me share my solutions to the **[Perl Weekly Challenge - 071](/perl-weekly-challenge-071)**.

***
## TASK #1 › Peak Elements
#### Submitted by **[Mohammad S Anwar](http://www.manwar.org)**
***

You are given positive integer `$N (>1)`.

Write a script to create an array of size `$N` with random unique elements between `1` and `50`.

In the end it should print peak elements in the array, if found.

***

<br>

For this task, I came up with `sub find_peak_elements_in()` which accepts an array `$array` with random elements. It split the comparison into 3 parts. First part is dealing with the topmost element which has just one neighbour. The second part is dealing with elements having two neighbours. Last part dealing with bottom element, again having one neighbour.

```perl
sub find_peak_elements_in {
    my ($array) = @_;

    my @peak_elements = ();
    if ($#$array >= 2 ) {

        if ($array->[0] > $array->[1]) {
            push @peak_elements, $array->[0];
        }

        for my $i (1 .. $#$array-1) {
            push @peak_elements, $array->[$i]
                if (($array->[$i] > $array->[$i-1])
                    && ($array->[$i] > $array->[$i+1]));
        }

        if ($array->[-1] > $array->[-2]) {
            push @peak_elements, $array->[-1];
        }
    }

    return \@peak_elements;
}
```

This handy `sub get_random_array()` generates an array with random elements between 1 and 50.

```perl
sub get_random_array {
    my ($size) = @_;

    my $min = 1;
    my $max = 50;
    my %elements = ();
    while ($size >= 1) {
        my $e = $max - int(rand($min + $max));
        next if (exists $elements{$e});
        $elements{$e} = 1;
        $size--;
    }

    return [ keys %elements ];
}
```

The following `sub find-peak-elements-in()` is simply the line-by-line translation of the above **Perl** subroutine. I also tried to use special **Raku** magical power. For example, use of `Empty` to declare empty list.

Also I realised the following line:

```perl
        if ($array->[-1] > $array->[-2]) {
```

didn't work as is in **Raku**.

So I had to resort to something like this:

```perl6
        if $array[*-1] > $array[*-2] {
```

The complete subroutine is shown below:

```perl6
sub find-peak-elements-in($array where { $_ > 0 }) {

    my @peak-elements = Empty;
    if $array.elems >= 2 {

        if ($array[0] > $array[1]) {
            @peak-elements.push: $array[0];
        }

        for 1 .. $array.elems-2 -> $i {
            if $array[$i] > $array[$i-1]
               &&
               $array[$i] > $array[$i+1] {

               @peak-elements.push: $array[$i];
            }
        }

        if $array[*-1] > $array[*-2] {
            @peak-elements.push: $array[*-1];
        }
    }

    return |@peak-elements;
}
```

Fun bit to generate an array with random elements between 1 and 50. The magical line in the subroutine is below:

```perl6
        my $element = (^50).pick;
```


```perl6
sub random-array(Int $size is copy) {

    my %elements = ();
    while $size >= 1 {
        my $element = (^50).pick;
        next if %elements{$element}:exists;
        %elements{$element} = 1;
        $size--;
    }

    return (%elements.keys);
}
```

Lets solve the task with the help of subroutines defined above.

```perl
use strict;
use warnings;

my $N = $ARGV[0] || 10;
my $random_array  = get_random_array($N);
my $peak_elements = find_peak_elements_in($random_array);

print sprintf("Array: [%s]\n", join(", ", @$random_array));
print sprintf(" Peak: [%s]\n", join(", ", @$peak_elements));
```

**Raku** solution looks identical to the **Perl**.

```perl6
use v6.d;

sub MAIN(Int :$N where { $N > 1 } = 10) {
    my @random-array  = random-array($N);
    my @peak-elements = find-peak-elements-in(@random-array);

    say sprintf("Array: [%s]", join ', ', @random-array);
    say sprintf(" Peak: [%s]", join ', ', @peak-elements);
}
```

I love working with unit test. With the code structured so nicely, doing unit test is painfree.

```perl
use Test::More;
use Test::Deep;

my %test_cases = (
    'test case 1' => {
        in  => [19, 8, 22, 11, 50, 34, 39, 48, 12, 33],
        out => [19, 22, 50, 48, 33],
    },
    'test case 2' => {
        in  => [26, 39, 23, 16, 30, 4, 49, 42, 12, 14],
        out => [39, 30, 49, 14],
    },
    'test case 3' => {
        in  => [20, 24, 22, 48, 49, 23, 39, 10, 14, 43],
        out => [24, 49, 39, 43],
    },
);

foreach my $test (sort keys %test_cases) {
    is_deeply(
        find_peak_elements_in($test_cases{$test}->{in}),
        $test_cases{$test}->{out},
        $test
    );
}

done_testing;
```

**Raku** unit test is even more simpler and less demanding.

```perl6
use Test;

my %test-cases = (
    'test case 1' => {
        in  => [19, 8, 22, 11, 50, 34, 39, 48, 12, 33],
        out => [19, 22, 50, 48, 33],
    },
    'test case 2' => {
        in  => [26, 39, 23, 16, 30, 4, 49, 42, 12, 14],
        out => [39, 30, 49, 14],
    },
    'test case 3' => {
        in  => [20, 24, 22, 48, 49, 23, 39, 10, 14, 43],
        out => [24, 49, 39, 43],
    },
);

for %test-cases.keys -> $test {
    is find-peak-elements-in(%test-cases{$test}.{<in>}),
       %test-cases{$test}.{<out>},
       $test;
}

done-testing;
```

***
## TASK #2 › Trim Linked List
#### Submitted by **[Mohammad S Anwar](http://www.manwar.org)**
***

You are given a singly linked list and a positive integer `$N (>0)`.

Write a script to remove the $Nth node from the end of the linked list and print the linked list.

If `$N` is greater than the size of the linked list then remove the first node of the list.

***

<br>

Every time, I deal with **Linked List** task, I go for full fledged solution i.e. create package to deal with the difficult part. And then have thin wrapper around to get the job done.

In the `package Node`, I have defined two attributes `v` and `p` to store **value** and **parent** respectively. There are two handy methods `sub trim()` and `sub show()` that takes the difficult task of trimming linked list and showing the linked list.

```perl
package Node;

use Moo;

has v => (is => 'rw');
has p => (is => 'rw');

sub trim {
    my ($self, $position) = @_;

    die "ERROR: Invalid position [$position].\n"
        unless ($position =~ /^\d+$/);

    my $tail  = $self;
    my $count = 1;
    my $node;

    while ($tail->p) {
        if ($position > $count) {
            $node = $tail;
        }
        elsif ($position == $count) {
            if (defined $node) {
                # Remove current node by making the
                # parent of  current node as parent
                # of previous node
                $node->p($tail->p);
            }
            else {
                # If you're taking first from the end
                # then return the parent of last node
                return $tail->p;
            }
        }

        $tail = $tail->p;
        $count++;
    }

    # Take the first node off if and only if:
    # a) you reached the first node or
    # b) given position is more than the total nodes
    $node->p(undef) if ($count <= $position);

    return $self;
}

sub show {
    my ($self) = @_;

    my $node = $self;
    my @v = ();
    while ($node->p) {
        push @v, $node->v;
        $node = $node->p;
    }
    push @v, $node->v;

    return join ' -> ', reverse @v;
}
```
To utilise the power of the above `package Node`, I created the thin wrapper `sub created_linked_list()`.

```perl
sub create_linked_list {
    my ($list) = @_;

    $list =~ s/\s+//g;
    die "ERROR: Invalid list [$list].\n"
        if ($list !~ /\-\>/);

    $list = [ split /\-\>/, $list ];
    my $node = Node->new(v => pop @$list);
    my $tail = $node;

    while (@$list) {
        my $_node = Node->new(v => pop @$list);
        $tail->p($_node);
        $tail = $_node;
    }

    print $node->show, "\n";

    return $node;
}
```

Creating **Raku** class is unbelievable easy. It hardly took any time to translate the above `package Node`.

```perl6
class Node {
    has Int  $.v is rw;
    has Node $.p is rw;

    method trim(Int $position) {

        die "ERROR: Invalid position [$position].\n"
            unless $position ~~ /^\d+$/;

        my $tail  = self;
        my $count = 1;
        my $node;

        while $tail.p {
            if $position > $count {
                $node = $tail;
            }
            elsif $position == $count {
                if $node.defined {
                    # Remove current node by making the
                    # parent of  current node as parent
                    # of previous node
                    $node.p = $tail.p;
                }
                else {
                    # If you're taking first from the end
                    # then return the parent of last node
                    return $tail.p;
                }
            }

            $tail = $tail.p;
            $count++;
        }

        # Take the first node off if and only if:
        # a) you reached the first node or
        # b) given position is more than the total nodes
        $node.p = Nil if $count <= $position;

        return self;
    }

    method show() {
        my $p = $!p;
        my @v = $!v;

        while defined $p {
            @v.push: $p.v;
            $p = $p.p;
        }

        return @v.reverse.join(' -> ');
    }
}
```

Time to get the thin wrapper around the **Raku** `class Node`.

```perl6
sub create-linked-list(Str $list is copy) {

    $list ~~ s:g/\s//;
    my @list = $list.split('->');
    my $node = Node.new(v => @list.pop.Int);
    my $tail = $node;

    while @list {
        my $_node = Node.new(v => @list.pop.Int);
        $tail.p = $_node;
        $tail = $_node;
    }

    $node.show.say;

    return $node;
}
```

To get the task done, I just needed one liner like below:

```perl
my $L = $ARGV[0] || '1 -> 2 -> 3 -> 4 -> 5';
my $N = $ARGV[1] || 2;
print create_linked_list($L)->trim($N)->show, "\n";
```

**Raku** looks even more elegant.

```perl6
sub MAIN(Str :$list = '1 -> 2 -> 3 -> 4 -> 5', Int :$position = 2) {
    create-linked-list($list).trim($position).show.say;
}
```

<br>

## Why can't Perl solution looks exactly like Raku?

<br>

#### Perl

```perl
print create_linked_list($L)->trim($N)->show, "\n";
```

#### Raku

```perl6
create-linked-list($list).trim($position).show.say;
```

What if we define `sub say` inside the slightly tweaked `package Node`?

```perl
package Node;

use Moo;

has v => (is => 'rw');
has p => (is => 'rw');
has s => (is => 'rw');

sub trim {
    my ($self, $position) = @_;

    die "ERROR: Invalid position [$position].\n"
        unless ($position =~ /^\d+$/);

    my $tail  = $self;
    my $count = 1;
    my $node;

    while ($tail->p) {
        if ($position > $count) {
            $node = $tail;
        }
        elsif ($position == $count) {
            if (defined $node) {
                # Remove current node by making the
                # parent of  current node as parent
                # of previous node
                $node->p($tail->p);
            }
            else {
                # If you're taking first from the end
                # then return the parent of last node
                return $tail->p;
            }
        }

        $tail = $tail->p;
        $count++;
    }

    # Take the first node off if and only if:
    # a) you reached the first node or
    # b) given position is more than the total nodes
    $node->p(undef) if ($count <= $position);

    return $self;
}

sub show {
    my ($self) = @_;

    my $node = $self;
    my @v = ();
    while ($node->p) {
        push @v, $node->v;
        $node = $node->p;
    }
    push @v, $node->v;

    $self->s(join ' -> ', reverse @v);

    return $self;
}

sub say {
    my ($self) = @_;

    print $self->s, "\n";
}

package main;

my $L = $ARGV[0] || '1 -> 2 -> 3 -> 4 -> 5';
my $N = $ARGV[1] || 2;
create_linked_list($L)->trim($N)->show->say;

#
#
# METHOD

sub create_linked_list {
    my ($list) = @_;

    $list =~ s/\s+//g;
    die "ERROR: Invalid list [$list].\n"
        if ($list !~ /\-\>/);

    $list = [ split /\-\>/, $list ];
    my $node = Node->new(v => pop @$list);
    my $tail = $node;

    while (@$list) {
        my $_node = Node->new(v => pop @$list);
        $tail->p($_node);
        $tail = $_node;
    }

    $node->show->say;

    return $node;
}
```

With the above code, you now have one-liner like below:

```perl
create_linked_list($L)->trim($N)->show->say;
```

which looks almost identical?

```perl6
create-linked-list($list).trim($position).show.say;
```

Lets do quick unit test in **Perl**

```perl
use Test::More;

my $list = '1 -> 2 -> 3 -> 4 -> 5';
my %test_cases = (
    'testing $N = 1' => { n => 1, o => '1 -> 2 -> 3 -> 4' },
    'testing $N = 2' => { n => 2, o => '1 -> 2 -> 3 -> 5' },
    'testing $N = 3' => { n => 3, o => '1 -> 2 -> 4 -> 5' },
    'testing $N = 4' => { n => 4, o => '1 -> 3 -> 4 -> 5' },
    'testing $N = 5' => { n => 5, o => '2 -> 3 -> 4 -> 5' },
    'testing $N = 6' => { n => 6, o => '2 -> 3 -> 4 -> 5' },
);

foreach my $test (sort keys %test_cases) {
    is(
        create_linked_list($list)->trim($test_cases{$test}->{n})->show,
        $test_cases{$test}->{o},
        $test
    );
}

done_testing;
```

Followed by **Raku** unit test like below:

```perl6
use Test;

my Str $list   = '1 -> 2 -> 3 -> 4 -> 5';
my %test-cases = (
    'testing $N = 1' => { n => 1, o => '1 -> 2 -> 3 -> 4' },
    'testing $N = 2' => { n => 2, o => '1 -> 2 -> 3 -> 5' },
    'testing $N = 3' => { n => 3, o => '1 -> 2 -> 4 -> 5' },
    'testing $N = 4' => { n => 4, o => '1 -> 3 -> 4 -> 5' },
    'testing $N = 5' => { n => 5, o => '2 -> 3 -> 4 -> 5' },
    'testing $N = 6' => { n => 6, o => '2 -> 3 -> 4 -> 5' },
);

for %test-cases.keys.sort -> $test {
    is(
        create-linked-list($list).trim(%test-cases{$test}{"n"}).show,
        %test-cases{$test}{"o"},
        $test
    );
}

done-testing;
```

***

That's it for this week. Speak to you soon.
