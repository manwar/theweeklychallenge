---
title: "Roles in core Perl OO"
date: 2026-06-09T00:00:00+00:00
description: "Proposal for Roles in core Perl OO."
type: post
image: images/blog/roles-in-core-oo.jpg
author: Mohammad Sajid Anwar
tags: ["perl", "roles"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

After years of architectural debates and meticulous implementation, the first Minimum Viable Product (MVP) phase of `Corinna` was officially merged into the core runtime with the release of `Perl 5.38.0` under the `use feature 'class'` guard.

Ever since, I kept looking for the support of `Role` in `core OO`. Soon, we will have another release `Perl v5.44`.

As always, I was hoping to see the `Role` in `core OO`.

I am told not this time. :-(

So when?

I don't know the answer, to be honest.

I rarely see people (including myself) coming forward and help `Paul Evans` and his team in this regard.

This post is all about what I want in `core OO` that helps me define `Role` in `Modern Perl`.

## The Core Philisophy
***
<br>

Ideally I want a native, lightweight way to compose behaviours into classes, adhering to the same clean syntax introduced by feature `'class'`. It should prevent the `"diamond inheritance"` problem and provide `compile-time safety`.

## Basic Role Usage
***
<br>

Here is a simple demo showing how a role defines a capability and how a class consumes it using a proposed `with` keyword.

### Define the Role

```perl
role Serialisable {
    # Roles can require methods to be implemented by the consuming class
    requires 'to_hash';

    # Roles can provide concrete methods
    method to_json() {
        use JSON::PP;
        return JSON::PP->new->encode($self->to_hash);
    }
}
```

### Consume the Role

```perl
class User {
    field $name :param;
    field $email :param;

    # Proposed syntax to consume the role
    with 'Serialisable';

    # Implementing the requirement
    method to_hash() {
        return {
            name  => $name,
            email => $email,
        };
    }
}
```

### Usage

```perl
my $user = User->new(name => 'Mohammad', email => 'mohammad@example.com');
say $user->to_json(); # Built-in capability via the role
```

## Composition and Conflicts
***
<br>

One of the main reasons we need `Roles` instead of just `Multiple Inheritance` is compile-time conflict resolution.

This demo shows how we expect `Perl` to handle method clashes.

```perl
role Reader {
    method close() { say "Closing read stream"; }
}

role Writer {
    method close() { say "Flushing buffers and closing write stream"; }
}
```

### Scenario A: Automatic Conflict Detection

```perl
class IDE {
    with 'Reader', 'Writer';
    # Compile-time error! 'close' method conflict detected.
}
```

### Scenario B: Explicit Resolution

```perl
class AdvancedIDE {
    with 'Reader' => { exclude => ['close'] },
         'Writer' => { rename  => { close => 'flush_and_close' } };

    method close() {
        # Custom implementation or explicit delegation
        $self->flush_and_close();
    }
}
```

## Roles with Fields
***
<br>

Can core roles have fields?

In `Role::Tiny`, they don't.

In `Moose`/`Moo`, they do.

For core `Perl`, having encapsulated state in roles would be incredibly powerful.

```perl
role Identifiable {
    # A role can manage its own private or param-based state
    field $id :param :reader;

    method has_valid_id() {
        return defined $id && $id =~ /^\d+$/;
    }
}
```

```perl
class Product {
    with 'Identifiable';
    field $name :param;
}
```

```perl
my $prod = Product->new(id => 12345, name => 'Perl Book');
say $prod->id; # 12345
```

## Role-to-Role Composition
***

### Multi-Level Role Composition

When `Role A` consumes `Role B`, any requirements from `Role B` that are not met by `Role A` are passed down to the ultimate consuming Class.

**Abstract Interface Role**

```perl
role Authenticated {
    requires 'get_auth_token';
}
```

**Composed Role**

```perl
role APIClient {
    # Role consuming another role
    with 'Authenticated';

    field $base_url :param :reader;

    method execute_request($endpoint) {
        my $token = $self->get_auth_token(); # Met eventually by the class
        say "Sending request to $base_url/$endpoint with token $token";
    }
}
```

**Concrete Class**

```perl
class GitHubClient {
    with 'APIClient';

    field $token_string :param;

    # Fullfills the 'requires' statement from the nested 'Authenticated' role
    method get_auth_token() {
        return $token_string;
    }
}
```

### Diamond Composition

A major trap in multi-inheritance is pulling in duplicate methods.

`Roles` resolve this because of their commutative mathematical design.

If a class or a child role consumes two separate roles that both consumed a common ancestor role, the method is flattened cleanly with no conflict.

```perl
role Node {
    method log_identity() { say "I am a Node"; }
}

role RedNode {
    with 'Node';
    method color() { return 'red'; }
}

role ShinyNode {
    with 'Node';
    method texture() { return 'shiny'; }
}
```

Both parents provide `log_identity` from `Node`.

This must `NOT` throw a collision error, because it shares the same source.

```perl
class RubyElement {
    with 'RedNode', 'ShinyNode';
}
```

These are my proposals.

How about yours?

Please comment below and share your ideas.

***

<br>

`Happy Hacking !!!`
