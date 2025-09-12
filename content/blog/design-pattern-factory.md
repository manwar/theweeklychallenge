---
title: "Design Pattern Factory"
date: 2025-09-11T00:00:00+00:00
description: "Discussion about Design Pattern Factory."
type: post
image: images/blog/design-pattern-factory.jpg
author: Mohammad Sajid Anwar
tags: ["perl"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
<br>

### [**1. Introduction**](#introduction)
### [**2. Define Shape Role**](#define-shape-role)
### [**3. Implement Concrete Shapes**](#implement-concrete-shapes)
### [**4. Create Shape Factory**](#create-shape-factory)
### [**5. Test Factory**](#test-factory)

<br>

### Introduction
***

In `Jan 2021`, I created a small project called, [**Design Pattern using Modern Perl**](https://github.com/manwar/Design-Patterns) where I explored many design patterns using `Moo`.

The project became quite popular and received positive feedback on `GitHub`.

When the experimental `class` feature was first introduced in `Perl v5.38` (released in `July 2023`, I decided to re-visit the project and re-implement the patterns using this new feature.

However, there was one major blocker, the experimental `class` feature doesn't yet support `roles`.

I waited for some time, but unfortunately, support for `roles` is not a high priority on the list of outstanding issues.

So, I decided to move forward with what we currently have.

This post is the first in a long series where I'll be covering commonly used design patterns. Each post will include implementations using both `Moo` and the new experimental `class` feature. So you can experience two similar yet distinct approaches.

For consistency, I'll be using `Perl v5.38` as the baseline throughout.

In this post, I’ll demonstrate a simple yet powerful example of the `Factory Design Pattern` in `Perl`.

Using [**Moo**](https://metacpan.org/pod/Moo), a lightweight object system for `Perl`, I'll show how `roles` and `dispatch tables` can be combined to produce clean, extensible and testable code.

Specifically, I’ll implement a `Shape Factory` that can create different types of shapes (`Circle`, `Square`, `Rectangle`) based on a string identifier.

Each shape will implement a common interface, `draw`, enforced through a `Moo` role.

Finally, I’ll add unit tests to validate the behaviour.

<br>

### Define Shape Role
***

Let's create the `Shape` role using `Moo::Role`.

<br>

```perl
package Shape;

use Moo::Role;
requires 'draw';
```

<br>

[**Moo::Role**](https://metacpan.org/pod/Moo::Role) is similar to a `trait` or `interface`.

It declares behavior that consuming classes must implement.

Here, we say: Any class that does with `Shape` must provide a `draw` method.

This ensures consistency: all shapes must know how to `"draw themselves"`.

Let's do the same using experimental `class` feature now.

Please note, this isn't drop-in replacement for `Moo` version, just workaround until we have support for `roles` in the `class` feature.

<br>

```perl
use experimental 'class';

class Shape {
    method draw { die "draw() must be implemented by subclass" }
}
```

<br>

### Implement Concrete Shapes
***

Each shape consumes the `Shape` role and implements the required `draw` method.

Again, I'll create concrete class for each shape using `Moo` first.

    - Uses Moo (to be a full class).
    - Consumes the Shape role (with 'Shape').
    - Implements draw, returning a string showing which method is being called.
    - This makes the interface uniform across all shapes.

<br>

```perl
package Shape::Circle;

use Moo;
with 'Shape';

sub draw { "Inside Shape::Circle::draw()" }

package Shape::Rectangle;

use Moo;
with 'Shape';

sub draw { "Inside Shape::Rectangle::draw()" }

package Shape::Square;

use Moo;
with 'Shape';

sub draw { "Inside Shape::Square::draw()" }
```

<br>

Let's do it using `class` feature.

<br>

```perl
use experimental 'class';

class Shape::Circle :isa(Shape) {
    method draw { "Inside Shape::Circle::draw()" }
}

class Shape::Rectangle :isa(Shape) {
    method draw { "Inside Shape::Rectangle::draw()" }
}

class Shape::Square :isa(Shape) {
    method draw { "Inside Shape::Square::draw()" }
}
```

<br>

### Create Shape Factory
***

Finally, I'll create the shape factory using the dispatch table.

The method `getShape()` accepts a shape name as input. It then looks up the corresponding class in the dispatch table, `%dispatch`, and returns a new instance of that class.

If the shape isn’t known, it returns `undef`.

First using `Moo`.

<br>

```perl
package ShapeFactory;

use v5.38;
use Moo;
use Shape::Circle;
use Shape::Square;
use Shape::Rectangle;

my %dispatch = (
    CIRCLE    => 'Shape::Circle',
    SQUARE    => 'Shape::Square',
    RECTANGLE => 'Shape::Rectangle'
);

sub getShape($self, $shapeType) {
    my $class = $dispatch{ uc $shapeType };
    return unless $class;
    return $class->new;
}
```

<br>

Then with `class` feature as below:

<br>

```perl
use experimental 'class';

class ShapeFactory {
    my %dispatch = (
        CIRCLE    => 'Shape::Circle',
        SQUARE    => 'Shape::Square',
        RECTANGLE => 'Shape::Rectangle'
    );

    method getShape($shapeType) {
        my $class = $dispatch{ uc $shapeType };
        return unless $class;
        return $class->new;
    }
}
```

<br>

Now, the `Factory Pattern` is ready for action, the factory hides object creation logic and provides a simple interface for clients.

<br>

### Test Factory
***

Here is the standard test script.

<br>

```perl
use v5.38;
use Test::More;
use ShapeFactory;

my $shapeFactory = ShapeFactory->new;

my $shape1 = $shapeFactory->getShape('CIRCLE');
is($shape1->draw(), 'Inside Shape::Circle::draw()');

my $shape2 = $shapeFactory->getShape('SQUARE');
is($shape2->draw(), 'Inside Shape::Square::draw()');

my $shape3 = $shapeFactory->getShape('RECTANGLE');
is($shape3->draw(), 'Inside Shape::Rectangle::draw()');

my $shape4 = $shapeFactory->getShape('rectangle');
is($shape4->draw(), 'Inside Shape::Rectangle::draw()');

my $no_shape = $shapeFactory->getShape('TRIQUETRA');
ok(! defined $no_shape);

done_testing;
```

***

<br>

`Happy Hacking !!!`
