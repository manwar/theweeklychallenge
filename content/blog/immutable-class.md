---
title: "Immutable Class"
date: 2026-07-26T00:00:00+00:00
description: "Immutable class using core Perl class feature."
type: post
image: images/blog/immutable-class.jpg
author: Mohammad Sajid Anwar
tags: ["Perl"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

First time, I heard about, `immutable class`, when [**Moose**](https://metacpan.org/pod/Moose) introduced this:

> `__PACKAGE__->meta->make_immutable;`

Little dig, I found out the magic line in the package perform a performance improvement behind the scene.

> 1. `Inline Constructor:` Moose replaces the generic, dynamic constructor with a fast custom code tuned to class's attributes.

> 2. `Inline Accessors:` It speeds up getters/setters.

> 3. `Freeze Metaclass Modification:` It prevents adding new attributes or methods dynamically at runtime.

Little confession, I am not a big fan of `Moose`, instead I use [**Moo**](https://metacpan.org/pod/Moo) whenever I need to work with class.

I posted my thought about `Immutable Class` and performance benefits on [**LinkedIn**](https://www.linkedin.com/feed/update/urn:li:activity:7486763380414951426) and [**Facebook**](https://www.facebook.com/groups/perlcommunity/posts/2309052596569020/) yesterday, and received few comments.

One of them was:

> It is should be the default behaviour and should not need to explicitly make it.

That comments forced me to think, how is the newly introduced `experimental class feature` in core `Perl` would deal with immutable class?

The core `Perl`'s native class feature makes object immutable by default from the outside.

Thank you, `the core team`, for this.

In core `Perl`, fields declared with `field` are private lexical variables bound to the object instance.

**From `perldoc perlclass`:**

> Fields are variables that are visible in the scope of the class - more specifically within method and `ADJUST` blocks... A field behaves like a normal lexically scoped variable. It has a sigil and is private to the class (though creation of an accessor method will make it accessible from the outside).

It can't be accessed or mutated from outside the class scope unless you explicitly write a setter method or use a `:writer` attribute.

**From `perldoc perlclass`:**

> A field with a `:reader` attribute will generate a reader accessor method automatically. The generated method will have an empty (i.e. zero-argument) signature, and its body will simply return the value of the field variable.

By using `:param` and `:reader` attributes, the field is exposed purely as `read-only` to external callers.

```perl
#!/usr/bin/env perl

use v5.44;
use experimental qw/class/;

class Immutable::Point {
    field $x :param :reader;
    field $y :param :reader;

    method distance_from_origin () {
        return sqrt($x**2 + $y**2);
    }
}

my $point = Immutable::Point->new( x => 3, y => 4 );

say $point->x; # Output: 3

$point->x(10)  # ERROR: Too many arguments for subroutine 'Immutable::Point::x' (got 2; expected 1)
```

As we know, in `Moose`, the line: `__PACKAGE__->meta->make_immutable;` performs runtime optimisations, in core `Perl` we don't need any of these because:

> 1. Classes are written directly into C-level interpreter structures.

> 2. When the parser finished a class block, the interpreter automatically calls `class_seal_stash`, sealing the class definition natively.

**From `perldoc perlclassguts`:**

> `class_seal_stash`: Called by the parser at the end of a class block, or for unit classes its containing scope. This function performs various finalisation activities that are required before instances of the class can be constructed, but could not have been done until all the information about the members of the class is known. Any additions to or modifications of the class under compilation must be performed between these two function calls. Classes cannot be modified once they have been sealed.

> 3. No meta-programming overhead exists, so performance optimisation is native.

## Minor Nuance

> 1. `Internal Mutability:` While external callers cannot modify fields, methods defined inside the class can still assign new values to lexical fields.

```perl
#!/usr/bin/env perl

use v5.44;
use experimental qw/class/;

class BankAccount {
    field $balance :param :reader;

    method deposit ($amount) {
        $balance += $amount; # Internal mutation allowed!
    }
}

my $account = BankAccount->new( balance => 100 );

say $account->balance;  # Output: 100

$account->balance(500); # ERROR: Too many arguments for subroutine 'BankAccount::balance' (got 2; expected 1)

$account->deposit(50);
say $account->balance;  # Output: 150
```

> 2. `Complex References:` If a field contains a reference like an `arrayref` or `hashref`, callers receiving the reference via a `:reader` could still mutate the referenced data internally.

```perl
#!/usr/bin/env perl

use v5.44;
use experimental qw/class/;

class ShoppingList {
    field $items :param :reader;

    method items_safe () {
        return [ @$items ];
    }
}

my $list = ShoppingList->new( items => ['Apples', 'Milk'] );

# THE PROBLEM
# External code gets the reference via the default :reader
my $external_ref = $list->items;

# External code mutates the underlying array via the reference!
push @$external_ref, 'Cookies';

# The object's internal state was altered from the outside:
say join(', ', @{$list->items});    # Apples, Milk, Cookies

# THE FIX
# Returning a copy prevents external callers from altering internal state
my $safe_ref = $list->items_safe;
push @$safe_ref, 'Bananas'; # Only modifies the temporary copy

say join(', ', @{$list->items});   # Apples, Milk, Cookies (Bananas was NOT added!)
```

***
<br>

`Happy Hacking !!!`
