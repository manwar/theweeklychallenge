---
title: "Roles in Perl"
date: 2025-09-27T00:00:00+00:00
description: "Discussion about the roles in Perl."
type: post
image: images/blog/roles-in-perl.jpg
author: Mohammad Sajid Anwar
tags: ["perl"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

#### **TL;DR**
***

The [**Role.pm**](https://github.com/manwar/Role/blob/master/lib/Role.pm) module provides a lightweight, dependency-free way to compose behaviours (methods) into `Perl` classes, enforcing clean contracts using the requires keyword, which is superior to deep inheritance. While the module originally enforced fatal errors for method conflicts, it now supports `Automatic Method Conflict Resolution` (first role applied wins) and `Method Aliasing` (renaming a method during composition) for greater flexibility and successful composition in complex scenarios.

***

<br>

As `Perl` developers, we're always looking for ways to write cleaner, more maintainable and reusable code.

We've embraced object-oriented programming (`OOP`) with modules like [**Moo**](https://metacpan.org/pod/Moo) and [**Moose**](https://metacpan.org/pod/Moose) which provide powerful tools for building `classes` and `objects`.

But sometimes, `classic inheritance`, where a `class` extends another, can lead to a tangled `"tree"` of `classes` and the dreaded `diamond problem`.

**What if there was a better way to share behaviour between unrelated `classes`?**

Enter the concept of `Roles`.

<br>

### What is a `Role`?
***

Think of a `Role` as a package of related behaviours. It's a collection of `methods` and `attributes` that can be added to any `class`.

A `Role` defines what a `class` can do, **NOT** what it is. This is the key difference from `inheritance`, which defines an `"is-a"` relationship.

I’m working on a project where I need a role written in pure `Perl` with no dependencies.

This is the result of my research in that direction.

<br>

### A Simple Analogy
***

Imagine a `Drawable` role. Its contract says: `"Any class that uses me must implement a draw method"`.

In return, I may provide helpful utilities like `set_color` or `get_bounds`.

Many unrelated things could be drawable: a `Square`, a `Circle` or a `TextLabel`.

The role ensures a consistent interface while allowing each `class` to implement the details in its own way.

<br>

### Introducing Role.pm
***

The [**Role.pm**](https://github.com/manwar/Role/blob/master/lib/Role.pm) module provides a lightweight, `non-Moose/Moo` way to use `roles` in your code.

It's a pure `Perl` implementation making it easy to use with zero dependencies.

**Key Features**

<br>

#### 1. Method Composition

Cleanly adds `methods` to your `classes`.

<br>

#### 2. Requirement Checking

A `role` can declare that any `class` using it must implement specific methods. This is the module's most powerful feature.

<br>

#### 3. Conflict Detection

The module will throw an exception if two roles try to introduce a method with the same name, preventing nasty surprises.

<br>

#### 4. Simple Syntax

The syntax is clear and easy to understand.

<br>

### **UPDATE: 2025-09-28**
***

Since this post was initially published, the `Role.pm` module has received two significant updates to enhance flexibility and composition power, particularly concerning method conflicts:

#### 1. Automatic Method Conflict Resolution:

The original implementation strictly enforced a fatal error when two roles introduced the same method name. The module now automatically resolves these non-aliased conflicts using a precedence rule: The existing method (or the method from the first role applied) takes precedence and the conflicting method from the second role is silently discarded. This means simple conflicts no longer halt compilation.

#### 2. Method Aliasing/Renaming:

To allow developers to keep all methods, a new syntax was introduced to manually resolve conflicts. You can now rename a role's method during composition using a hashref:

<br>

```perl
use Role;
with {
    role  => 'ConflictingRole',
    alias => { common_method => 'conflicting_method_aliased' }
};
```

<br>

#### 3. Timing Fix:

The internal role application mechanism was fixed to ensure method composition occurs earlier in the compile cycle (BEGIN block), resolving issues related to classes loading before their methods were fully composed.

<br>

### A Practical Example
***

The best way to understand `roles` is to see them enforce a contract. Let's model a system for drawable shapes.

We'll define a `Shape` role that mandates a `draw` method and then create two classes that fulfill this contract.

<br>

### Step 1: Define the `Role`
***

First, we create the `Shape` role. It doesn't provide any `methods` itself.

Instead, it uses `requires` to declare that any `class` that uses this `role` must implement a `draw` method.

<br>

```perl
package Shape;

use Role;
requires qw/draw/;

1;
```

<br>

This is incredibly powerful. The `Shape` role is now an `interface`.

It says, "If you want to be considered a `Shape`, you must know how to `draw` yourself."

<br>

### Step 2: Create Classes
***

Now, let's create two different classes, `Shape::Square` and `Shape::Rectangle`.

They are unrelated by `inheritance` but they both agree to the `Shape` contract by using the `with` keyword.

<br>

```perl
package Shape::Square;

use Role;
with qw/Shape/;

sub new($class, %args) { bless { %args }, $class         }
sub draw               { 'Inside Shape::Square::draw()'  }

1;
```

<br>

```perl
package Shape::Rectangle;

use Role;
with qw/Shape/;

sub new($class, %args) { bless { %args }, $class           }
sub draw               { 'Inside Shape::Rectangle::draw()' }

1;
```

<br>

### Step 3: Using the interface
***

The beauty of this approach is that we can now write code that works with any object that does the `Shape` role without caring about its specific class.

<br>

```perl
use Shape::Square;
use Shape::Rectangle;

my $square    = Shape::Square->new(size => 10);
my $rectangle = Shape::Rectangle->new(width => 10, height => 5);

print $_->draw, "\n" for ($square, $rectangle);
```

<br>

**Output:**

```bash
Inside Shape::Square::draw()
Inside Shape::Rectangle::draw()
```

<br>

### Contract Breaking
***

The safety net provided by `Role.pm` is crucial. If we created a `Shape::Triangle` class that used the `Shape` role but forgot to implement the `draw` method, we would get a clear, compile-time error.

<br>

```perl
package Shape::Triangle;

use Role;
with qw/Shape/;

sub new($class, %args) { bless { %args }, $class }

1;
```

<br>

The error would be something like: `Shape::Triangle requires the method 'draw' to be implemented at ...`

This immediate feedback is far better than discovering a missing method at runtime deep in your application logic.

<br>

### Why use `Role.pm`?
***

<br>

#### 1. Enforces Clean Contracts

The `requires` keyword lets you design robust interfaces ensuring `classes` provide the expected functionality.

<br>

#### 2. Promotes Code Reuse

While this example showed an interface-like role, roles can also provide reusable method implementations, reducing code duplication.

<br>

#### 3. Avoids Inheritance Issues

No more forcing `classes` into an `"is-a"` relationship when they just need to share a common interface. A `Square` and a `UIButton` can both be `Drawable` without being related.

<br>

#### 4. Lightweight

If you're not using a large framework like `Moose`, [**Role.pm**](https://github.com/manwar/Role/blob/master/lib/Role.pm) is a perfect, dependency-free way to get the power of `roles`.

<br>

### Conclusion
***

The `Role.pm` module is a testament to `Perl`'s enduring flexibility and the creativity of its community.

It provides an elegant solution for defining `contracts` and `composing` behavior, moving beyond the limitations of simple `inheritance`.

The `Shape` example perfectly illustrates the core concept: roles are about capabilities and contracts.

If you're looking to write more modular, reliable and flexible `Perl` code, I highly encourage you to give Role.pm a try.

Please check out the project on [**GitHub**](https://github.com/manwar/Role), read the documentation and start thinking about the `interfaces` in your codebase that could be defined as clean, reusable `roles`.

Feel free to share your suggestions at `mohammad.anwar@yahoo.com`.

***

<br>

`Happy Hacking !!!`
