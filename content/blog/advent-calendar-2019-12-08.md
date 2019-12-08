---
title: "Advent Calendar - December 8, 2019"
date: 2019-12-08T00:00:00+00:00
description: "Advent Calendar - December 8, 2019"
type: post
image: images/blog/2019-12-08.jpg
author: Adam Russell
tags: ["Perl"]
---

[**Advent Calendar 2019**](/blog/advent-calendar-2019)
***

The gift is presented by [**Adam Russell**](/blog/meet-the-champion-016). Today he is talking about his solutions to **Task #2: Priority Queue** of [**"The Weekly Challenge - 018"**](/blog/perl-weekly-challenge-018).

#### Write a script to implement Priority Queue. It is like regular queue except each element has a priority associated with it. In a priority queue, an element with high priority is served before an element with low priority. Please check this [wiki page](https://en.wikipedia.org/wiki/Priority_queue) for more informations. It should serve the following operations:
\
##### 1) is_empty: check whether the queue has no elements.
##### 2) insert_with_priority: add an element to the queue with an associated priority.
##### 3) pull_highest_priority_element: remove the element from the queue that has the highest priority, and return it. If two elements have the same priority, then return element added first.
\
***
\
**PriorityQueue.pm** is doing all the work for the task.

```perl

use strict;
use warnings;

package PriorityQueue{
    use boolean;
    use Class::Struct;

    package Node{
        use Class::Struct;
        struct(
            priority => q/$/,
            data => q/$/
        );
    }

    package Heap{
        use Class::Struct;
        struct(
            nodes => q/@/,
            length => q/$/
        );
    }
    struct(
        heap => q/Heap/,
        length => q/$/
    );

    sub initialize{
        my($self) = @_;
        my $heap = new Heap(
            nodes => [],
            length => 0
        );
        $self->heap($heap);
    }

    sub is_empty{
        my($self) = @_;
        return @{$self->heap()->nodes()};
    }

    sub insert_with_priority{
        my($self, $priority, $data) = @_;
        my $i = $self->heap()->length() + 1;
        my $j = int($i / 2);
        while($i > 1 && $self->heap()->nodes()->[$j]->priority() > $priority){
            $self->heap()->nodes->[$i] = $self->heap()->nodes()->[$j];
            $i = $j;
            $j = int($j / 2);
        }
        $self->heap()->nodes()->[$i] = new Node();
        $self->heap()->nodes()->[$i]->priority($priority);
        $self->heap()->nodes()->[$i]->data($data);
        $self->heap()->length($self->heap()->length + 1);
    }

    sub pull_highest_priority_element{
        my($self) = @_;
        if(!$self->is_empty()){
            return undef;
        }
        my $data = $self->heap()->nodes()->[1]->data();
        $self->heap()->nodes()->[1] = $self->heap()->nodes()->[@{$self->heap()->nodes()} + 1];
        $self->heap()->length($self->heap()->length() - 1);
        my $i = 1;
        while($i != $self->heap()->length() + 1){
            my $k = $self->heap()->length + 1 ;
            my $j = $i * 2;
            if($j <= $self->heap()->length()
               &&
              ($self->heap()->nodes()->[$j]->priority() < $self->heap()->nodes->[$k]->priority())){
               $k = $j;
            }
            if($j + 1 <= $self->heap()->length()
               &&
              ($self->heap()->nodes()->[$j + 1]->priority() < $self->heap()->nodes->[$k]->priority())){
                $k = $j + 1;
            }
            $self->heap()->nodes()->[$i] = $self->heap()->nodes()->[$k];
            $i = $k;
        }
        return $data;
    }
    true;
}

```

**Node** and **Heap** are packages defined within the **PriorityQueue** package. All packages use **Class::Struct**, even the **PriorityQueue** package. The implementation of a **PriorityQueue** follows the **classic C** style approach which inspired the use of **Class::Struct** to begin with. It turns out **Class::Struct** is quite **versatile** and works with use **overload**.

The script **ch-2.pl** looks like below:

    use PriorityQueue;

    my $pq = new PriorityQueue();
    $pq->initialize();
    $pq->insert_with_priority(7, "sleep");
    $pq->insert_with_priority(4, "go to the gym");
    $pq->insert_with_priority(3, "work on blog");
    $pq->insert_with_priority(5, "drink water");
    $pq->insert_with_priority(1, "eat pizza");
    $pq->insert_with_priority(2, "work on perl weekly challenge");
    $pq->insert_with_priority(6, "clean dishes");

    for(0 .. 6){
        my $data = $pq->pull_highest_priority_element();
        printf("$data\n");
    }

## SAMPLE RUN

    $ perl -I. ch-2.pl
    eat pizza
    work on perl weekly challenge
    work on blog
    go to the gym
    drink water
    clean dishes
    sleep

***
If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2019**](/blog/advent-calendar-2019)
