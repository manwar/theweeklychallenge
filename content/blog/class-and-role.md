---
title: "Class and Role"
date: 2025-10-02T00:00:00+00:00
description: "Discussion about native class and role in Perl."
type: post
image: images/blog/class-and-role.jpg
author: Mohammad Sajid Anwar
tags: ["perl"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

#### **TL;DR**
***

##### a) Added [**Class.pm**](https://github.com/manwar/Class-Mite/blob/master/lib/Class.pm) for lightweight constructors + `BUILD` hook.
##### b) [**Role.pm**](https://github.com/manwar/Class-Mite/blob/master/lib/Role.pm) updated with stricter conflict handling and aliasing.
##### c) Distribution renamed to [**Class::Mite**](https://github.com/manwar/Class-Mite), small but mighty.

<br>

In my [**previous post**](https://theweeklychallenge.org/blog/roles-in-perl), I introduced [**Role.pm**](https://github.com/manwar/Role/blob/master/lib/Role.pm), a lightweight, dependency-free `Role` system for `Perl`. Since then, the project has grown with the addition of a companion module: `Class.pm`. Together, they form the foundation of the new distribution: [**Class::Mite**](https://github.com/manwar/Class-Mite).

<br>

#### **Why Class.pm?**
***

While `Role.pm` was designed to bring `method composition` and `requirement contracts` into plain `Perl`, many users asked:

<br>

#### **How do I create simple, consistent classes that work seamlessly with these roles?**

<br>

The answer is [**Class.pm**](https://github.com/manwar/Class-Mite/blob/master/lib/Class.pm), a minimal constructor and lifecycle system.

**It provides:**

##### a) A `new` constructor
##### b) An optional `BUILD` hook (for initialization logic)
##### c) Automatic role integration (via `with`)
##### d) No dependency chains, just simple `Perl`.

<br>

#### **Example: A Class with a Role**
***

First we create the role `Animal`.

<br>

```perl
package Animal;

use Role;
requires qw/speak/;

1;
```

<br>

Then we create the class `Animal::Dog` taking the role `Animal` as below:

<br>

```perl
package Animal::Dog;

use Class;
with qw/Animal/;

sub speak { 'bark!!' }

1;
```

<br>

Action time finally.

<br>

```perl
use Animal::Dog;

my $dog = Animal::Dog->new;

print $dog->speak, "\n";   # bark!!
```

<br>

Let's try the default constructor in the class `Animal::Dog`.

<br>

```perl
package Animal::Dog;

use Class;
with qw/Animal/;

sub speak { $_[0]->{name} . ' bark!!' }

1;
```

<br>

Let's test the code now:

<br>

```perl
use Animal::Dog;

my $dog = Animal::Dog->new(name => 'Dummy');

print $dog->speak, "\n";   # Dummy bark!!
```

<br>

We'll update the class `Animal::Dog` to use the `BUILD` hook.

<br>

```perl
package Animal::Dog;

use Class;
with qw/Animal/;

sub BUILD {
    my ($self, $args) = @_;
    $self->{greet} = 'Hello ' . $self->{name};
}

sub speak { $_[0]->{name} . ' bark!!' }
sub greet { $_[0]->{greet}            }
```

<br>

Finally test the hook:

<br>

```perl
use Animal::Dog;

my $dog = Animal::Dog->new(name => 'Dummy');
print $dog->greet, "\n";   # Hello Dummy
```

<br>

Notice how clean this is:

##### a) `new` automatically blesses a `hash`.
##### b) `BUILD` runs after construction for custom initialization.
##### c) `with` comes directly from `Role.pm` with zero extra boilerplate.

<br>

#### **Updates to `Role.pm`**
***

Alongside `Class.pm`, the `Role.pm` module has also evolved.

Key updates since the last blog post:

**1. Automatic Class Base**

##### a) When a class consumes a role, `Role.pm` ensures the class inherits from `Class.pm` if it hasn’t already.
##### b) This gives every role-consuming class a consistent `new` and `BUILD` hook.

<br>

**2. Stricter Conflict Detection**

The current release re-aligns with `Moo`/`Moose` semantics:

##### a) If two roles provide the same method, it’s now a fatal error (not silently discarded).
##### b) Classes win if they already implement the method.
##### c) Developers can resolve conflicts explicitly with aliasing.

<br>

**3. Method Aliasing**

##### a) Roles can be applied with renamed methods, allowing you to keep both implementations without conflict.

<br>

#### **Why the name `Class::Mite`?**
***

The distribution is named `Class::Mite` to capture the spirit of being `small` but `mighty`.

##### a) Small: Tiny codebase, zero dependencies and pure `Perl`.
##### b) Mighty: Provides the essential building blocks for both `Class` and `Role`.

<br>

This naming also aligns with `Perl` traditions like [**Mouse**](https://metacpan.org/pod/Mouse) and [**Moo**](https://metacpan.org/pod/Moo), smaller frameworks inspired by [**Moose**](https://metacpan.org/pod/Moose).

<br>

#### **Looking Ahead**
***

With `Role.pm` and `Class.pm` now bundled together as `Class::Mite`, the foundation is set:

##### a) Roles for behavior composition
##### b) Classes for constructors and lifecycle
##### c) Clean integration without heavyweight dependencies

<br>

#### **ROADMAP**
***

##### a) More documentation and real-world examples
##### b) Possibly lightweight utilities for attribute defaults and validation
##### c) Wider testing across platforms

<br>

#### **Purpose and Limits**
***

This project is not intended to replace existing mature object systems such as `Moose`, `Moo`, or `Mouse`. Those frameworks are fully featured, production-proven and battle-tested across countless `CPAN` distributions.

`Class::Mite` was created primarily as a prototype for an upcoming project where I needed:

<br>

##### a) A minimal constructor/role system
##### b) Pure bless objects without sugar or metaclasses
##### c) Zero external dependencies

<br>

If you need rich features like type constraints, attributes, or method modifiers, you should stick with `Moose`/`Moo`/`Mouse`.

If you’re looking for something tiny, dependency-free and easy to embed, `Class::Mite` may be worth exploring.








***

<br>

`Happy Hacking !!!`
