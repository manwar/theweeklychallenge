---
title: "Advent Calendar - December 3, 2020"
date: 2020-12-02T00:00:00+00:00
description: "Advent Calendar - December 3, 2020."
type: post
image: images/blog/2020-12-03.jpg
author: E. Choroba
tags: ["Perl"]
---

[**Advent Calendar 2020**](/blog/advent-calendar-2020)
***

The gift is presented by [**E. Choroba**](https://perlweeklychallenge.org/blog/meet-the-champion-018). Today he is talking about his solution to the task `LRU Cache` of **["The Weekly Challenge - 049"](/blog/perl-weekly-challenge-049)**. This is re-produced for **Advent Calendar 2020** from the original [**post**](http://blogs.perl.org/users/e_choroba/2020/03/perl-weekly-challenge-048-smallest-multiple-and-lru-cache.html) by **E. Choroba**.

***

## LRU Cache

> Write a script to demonstrate LRU Cache feature. It should support operations get and set. Accept the capacity of the LRU Cache as command line argument.

I started by converting the example into a test suite. I modified the behaviour a bit, though: returning -1 for elements not found in the cache means we couldn’t store -1 as a cached value. In fact, any value we choose would be impossible to store: we could die on a cache miss, or we can return a reference to the value if it’s been found, and undef otherwise. Then it would be possible to store undef in the cache, as it would be returned as `\undef`.

```perl
package Cache::LRU;
use enum qw( CAPACITY HASH ARRAY );

sub new {
    my ($class, $capacity) = @_;
    bless [$capacity, {}, []], $class
}

sub capacity { $_[0][CAPACITY] }

sub _value { $_[0][HASH]{ $_[1] } }

sub _move_to_start {
    my ($self, $key) = @_;
    @{ $self->[ARRAY] } = ($key, grep $_ ne $key, @{ $self->[ARRAY] });
}

sub get {
    my ($self, $key) = @_;
    return undef unless exists $self->[HASH]{$key};

    $self->_move_to_start($key);
    return \$self->_value($key)
}

sub set {
    my ($self, $key, $value) = @_;
    $self->[HASH]{$key} = $value if 3 == @_;
    $self->_move_to_start($key);
    delete $self->[HASH]{ pop @{ $self->[ARRAY] } }
        if @{ $self->[ARRAY] } > $self->capacity;
}

sub inspect {
    [reverse @{ $_[0][ARRAY] }]
}
```

Do you see the problem?

It’s hidden in the `_move_to_start()` subroutine. When we need to move an element to the start, we need to iterate over the whole array, because we don’t know its index. Storing the index wouldn’t help, either, as we would have to adjust the stored indices after each change. The problem doesn’t manifest in our toy example, but creating a cache with capacity 2000 and populating and querying it 10 thousand times takes more than 4 seconds.

Therefore, I decided to implement the cache using a real linked list. Let’s start with a class implementing it:

```perl
package Linked::List;
use strict;
use warnings;

use enum qw( KEY VALUE PREV NEXT );

sub new {
    my ($class, $key, $value) = @_;
    my $self = [];
    @$self[KEY, VALUE, PREV, NEXT] = ($key, $value, $self, $self);
    bless $self, $class
}

sub extract {
    my ($self) = @_;
    my $prev = $self->[PREV];
    my $next = $self->[NEXT];
    $prev->[NEXT] = $next;
    $next->[PREV] = $prev;
    @$self[PREV, NEXT] = ($self, $self);
}

sub prepend_to {
    my ($self, $list) = @_;
    return unless $list;
    $self->extract if $self->[PREV] != $self;
    $self->[NEXT] = $list // $self;
    $self->[PREV] = $list->[PREV] // $self;
    $list->[PREV][NEXT] = $self;
    $list->[PREV] = $self;
}

# Prevent memory leaks.
sub demolish {
    $_[0][NEXT] = $_[0][PREV] = undef;
}

sub key  { $_[0][KEY] }
sub prev { $_[0][PREV] }
sub next { $_[0][NEXT] }
sub value :lvalue { $_[0][VALUE] }
```

You can write a test suite for the class as an exercise.

The linked list is represented by its first element, but it’s implemented as a cyclic list, i.e. the first elements points to the last element as its predecessor and vice versa. The extract method detaches an element from the linked list by connecting the previous and next elements.

Note the demolish method. It breaks the cyclic reference to prevent memory leaks, we have to call it in our cache implementation when removing an element from the cache.

The cache implementation will be similar to the previous one. Neither get nor set will require walking the whole list. Again, optimisation makes the code a bit more complex and harder to read. On the other hand, the benchmark test takes 0.16 seconds, which is about 25 times faster!

```perl
package Cache::LRU;
use warnings;
use strict;

use enum qw( CAPACITY HASH FIRST );

sub new {
    my ($class, $capacity) = @_;
    my $self = [];
    @$self[CAPACITY, HASH, FIRST]
        = ($capacity, {}, undef);
    bless $self, $class
}

sub get {
    my ($self, $key) = @_;
    return unless exists $self->[HASH]{$key};

    my $element = $self->[HASH]{$key};
    if ($element != ($self->[FIRST] // -1)) {
        $element->extract;
        $element->prepend_to($self->[FIRST]);
        $self->[FIRST] = $element;
    }
    return \$element->value
}

sub set {
    my ($self, $key, $value) = @_;

    my $element;
    if (exists $self->[HASH]{$key}) {
        $element = $self->[HASH]{$key};
    } else {
        $element = 'Linked::List'->new($key, $value);
        $self->[HASH]{$key} = $element;
    }
    $element->prepend_to($self->[FIRST])
        unless $element == ($self->[FIRST] // -1);
    $self->[HASH]{$key}->value = $value;
    $self->[FIRST] = $element;
    if (keys %{ $self->[HASH] } > $self->[CAPACITY]) {
        my $last = $self->[FIRST]->prev;
        $last->extract;
        delete $self->[HASH]{ $last->key };
        $last->demolish;
    }
}

sub inspect {
    my ($self) = @_;
    my $element = $self->[FIRST];
    my @keys;
    for (keys %{ $self->[HASH] }) {
        unshift @keys, $element->key;
        $element = $element->next;
    }
    return [@keys]
}
```

You can see that both the get and set methods extract the element from the list and prepend it to the first position (set can even populate it if it doesn’t exist yet). They also change the cache object to point to the first element of the list. Moreover, set also removes the last element (the list is cyclic, so it’s just the element preceding the first one) when the capacity has been reached.

Do you see -1 mentioned twice in the code? We are comparing the reference addresses of two objects, if the object doesn’t exist, we use -1 which is an impossible value for an address (it means the cache is empty).

For completeness, here’s the benchmark code. Its output was used to verify both the implementations work identically.

```perl
#!/usr/bin/perl
use warnings;
use strict;
use feature qw{ say };

srand(1);
my $c = 'Cache::LRU'->new(2000);
$c->set(int rand 5000, rand) for 1 .. 10_000;
$c->get(int rand 5000) for 1 .. 10_000;

my @inspect = $c->inspect;
@inspect = ref $inspect[0] ? @{ $inspect[0] } : @inspect;
say "@inspect";
```

***
If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2020**](/blog/advent-calendar-2020)
