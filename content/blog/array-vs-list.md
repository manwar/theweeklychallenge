---
title: "Array vs List"
date: 2025-06-18T00:00:00+00:00
description: "Discussion about Array vs List in Perl."
type: post
image: images/blog/array-vs-list.jpg
author: Mohammad Sajid Anwar
tags: ["perl"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
<br>

Recently, I came across a blog post titled, [**Slice of Perl**](https://perlhacks.com/2025/06/a-slice-of-perl) by `Dave Cross`.

It's a must-read for `Perl` programmers, as it highlights a useful feature that can simplify your life.

Reading it, reminded me of a subtle but important distinction I encountered years ago: the difference between `List` and `Array` in `Perl`.

I'm sharing my insights here in the hope that others will find them helpful.

Before diving into `List Slicing` or `Array Slicing`, it's essential to understand the difference between `List` and `Array` in `Perl`.

When I first started learning `Perl` (around `1998`), I only knew about `Array` and assumed every `List` was an `Array`.

However, `List` and `Array` while related, are distinct concepts.

A `list` is an ordered collection of scalar values and it's immutable i.e. cannot be modified directly.

`Lists` are temporary and exist only in expressions e.g. `function arguments, assignments`.

`Lists` are not indexed, so you cannot access elements by position directly.

For example:

<br>

```perl
  (1, 'foo', 2, 3)   # Collection of scalars
  qw(foo bar)        # Same as list ('foo', 'bar')
```

<br>

An `array` is a variable that stores an ordered list of scalars.

`Array` is mutable i.e. it can be modified after creation.

Arrays are indexed and elements can be accessed via `$array[index]`.

For example:

<br>

```perl
  my @fruits = ('apple', 'banana', 'cherry');  # List assigned to an array
  $fruits[1] = 'orange';                       # Modifying an element
```

<br>

Use a `list` for temporary groupings e.g. `passing arguments to functions`.

Use an `array` when you need persistent, extendable storage.

In the example below, passing a list `(1, 2, 3)` to sub `example()` which becomes `@_` inside the sub.

<br>

```perl
sub example {
    my ($a, $b, $c) = @_;  # @_ is an array containing the passed list
    print "$a, $b, $c\n";
}

example(1, 2, 3);
```

<br>

When a `list` is stored in a named variable, that variable is called an `array`.

A `list` by itself is just an ordered collection of scalars.

`List` has no storage identity.

An `array` is a variable that holds a `list` and allows indexed access, modification, and persistence.

Assignment is not the only way `arrays` get `lists`.

`Array` can also be modified dynamically e.g. `push @array, $new_element`.

A `list` does not `become` an `array`, it is stored inside an `array`.

`List` exists independently of `Array`.

For example:

<br>

```perl
print join(", ", (1, 2, 3));
```

<br>

Here `(1, 2, 3)` is a `list` used directly, not stored in an `array`.

`Arrays` can hold `lists`, but `lists` are not `arrays`.

<br>

## Lists are values; Arrays are containers;

<br>

One line defintion:

A `list` cannot directly contain arrays (or hashes), but it can contain their elements (flattened) or references to them.

An `array` is a `Perl` variable that stores a `list`, allowing indexed access and modification.

`List` only hold scalars.

If you try to include an `array` directly in a `list`, `Perl` flattens it into its individual elements.

For example:

<br>

```perl
my @array     = (2, 3);
my @new_array = (1, @array, 4);
print "@new_array";
```

<br>

`@array` is flattened into `(2, 3)`, so the `@new_array` becomes `(1, 2, 3, 4)`.

How about `hash` in the `list`?

It would get the same treatment as `array`.

<br>

```perl
my %hash      = ('x' => 2, 'y' => 3);
my @new_array = (1, %hash, 4);
print "@new_array";
```
<br>

`%hash` is flattened into `('x', 2, 'y', 3)`, so `@new_array` becomes `(1, 'x', 2, 'y', 3, 4)`.

Can I include an array without flattening?

If you want to keep the array as a single element in the list, you must use a reference `\@array`.

Same goes with hash as well.

<br>

```perl
my @array     = (2, 3);
my @new_array = (1, \@array, 4);
print "@new_array";
```

<br>

Now, the `@new_array` contains: `(1, ARRAY(0x558f1b3b43b0), 4)`.

Let's see how `hash` behaves in a `list`.

<br>

```perl
my %hash      = ('x' => 2, 'y' => 3);
my @new_array = (1, \%hash, 4);
print "@new_array";
```

<br>

Now, the `@new_array` contains: `(1, HASH(0x558f1b3b4470), 4)`.

Why `Perl` flattens lists?

`Perl` was designed with simplicity and flexibility in mind.

Flattening allows easy concatenation of lists.

<br>

```perl
my @combined = (@list1, @list2);  # Merges both lists seamlessly.
```

<br>

When does this matter?

<br>

```perl
sub example { print scalar @_; }
my @arr = (1, 2);
example(@arr, 3);
```

<br>

The `@_` inside the subroutine gets `(1, 2, 3)`, not `(@arr, 3)`.

<br>

## Summary
***

<br>

`Array` in list flattened into elements: `(1, @array, 4)` => `(1, 2, 3, 4)`

`Array ref` in list stored as a single reference: `(1, \@array, 2)`  => `(1, ARRAY(0x...), 4)`

A `list` can only contain scalars (not `arrays`/`hashes` directly).

If an `array` is placed inside a `list`, it is flattened into its elements.

To store an `array` as a single list element, use a reference, `\@array`.

***

<br>

`Happy Learning !!!`
