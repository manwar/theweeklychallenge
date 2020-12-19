---
title: "Advent Calendar - December 10, 2020"
date: 2020-12-18T00:00:00+00:00
description: "Advent Calendar - December 10, 2020."
type: post
image: images/blog/2020-12-10.jpg
author: Walt Mankowski
tags: ["Perl"]
---

[**Advent Calendar 2020**](/blog/advent-calendar-2020)
***

The gift is presented by [**Walt Mankowski**](https://perlweeklychallenge.org/blog/meet-the-champion-2020-07). Today he is talking about his solution to the task `Trim Linked List` of **["The Weekly Challenge - 071"](/blog/perl-weekly-challenge-071)**. This is re-produced for **Advent Calendar 2020** from the original [**post**](http://www.mawode.com/blog/blog/2020/07/31/perl-weekly-challenge-71/) by **Walt Mankowski**.

***

You are given a singly linked list and a positive integer `$N` (>0).

Write a script to remove the `$Nth` node from the end of the linked list and print the linked list.

If `$N` is greater than the size of the linked list then remove the first node of the list.

**NOTE:** Please use pure linked list implementation.

## Example

#####    Given Linked List: 1 -> 2 -> 3 -> 4 -> 5

#####    when $N = 1
#####    Output: 1 -> 2 -> 3 -> 4

#####    when $N = 2
#####    Output: 1 -> 2 -> 3 -> 5

#####    when $N = 3
#####    Output: 1 -> 2 -> 4 -> 5

#####    when $N = 4
#####    Output: 1 -> 3 -> 4 -> 5

#####    when $N = 5
#####    Output: 2 -> 3 -> 4 -> 5

#####    when $N = 6
#####    Output: 2 -> 3 -> 4 -> 5

***

In this task we needed to create a singly linked list, delete the Nth element from the end, and then print the list.

There were also linked lists in Challenge 68 and I was able to reuse the linked list class without any modification.

```perl
package Node;

use strict;
use warnings;
use feature qw(:5.32);
use experimental qw(signatures);

sub new($package, $val) {
    my $self = {};
    bless $self, $package;

    $self->{val} = $val;
    $self->{next} = undef;

    return $self;
}

sub set_next($self, $node) {
    $self->{next} = $node;
}

sub next($self) {
    return $self->{next};
}

sub val($self) {
    return $self->{val};
}

1;
```

My top-level code was quite simple:

```perl
my $N = shift @ARGV;
my $head = Node->new(undef);

make_list($head, 1..5);
print_list($head);
remove_from_end($head, $N);
print_list($head);
```


Having an extra node at the beginning makes creating and printing the list easy:

```perl
sub make_list($head, @a) {
    my $node = $head;
    for my $i (@a) {
        $node->set_next(Node->new($i));
        $node = $node->next;
    }
}

sub print_list($head) {
    my $node = $head->next;
    while (defined $node) {
        print $node->val;
        print " -> " if defined $node->next;
        $node = $node->next;
    }
    say "";
}
```

Removing the Nth element from the end is trickier though; since we need to use a singly-linked list we can’t go backwards. I chose to solve it by making 2 passes through the list. First I make a full pass to count how many elements are in the list. Then I start back at head and go forward until I’m N+1 elements from the end. Finally I remove the Nth node by linking the N+1th node to the N-1th node.

```perl
sub list_length($head) {
    my $node = $head;
    my $len = 0;
    while (defined $node->next) {
        $len++;
        $node = $node->next;
    }
    return $len;
}

sub remove_from_end($head, $n) {
    # get to the position before the node to delete
    my $pos = list_length($head);
    my $node = $head;
    while ($pos > $n) {
        $node = $node->next;
        $pos--;
    }

    # remove it
    $node->set_next($node->next->next);
}
```

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2020**](/blog/advent-calendar-2020)
