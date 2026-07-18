---
title: "Using JSONB"
date: 2026-07-17T00:00:00+00:00
description: "SOLID design principles in Perl."
type: post
image: images/blog/solid-using-perl.jpg
author: Mohammad Sajid Anwar
tags: ["SOLID", "Perl"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

When I was working on my first book, [**Design Patterns in Modern Perl**](https://perlschool.com/books/design-patterns), I touched the topic, `SOLID`, little bit.

Now I realise, it should have been given a dedicated chapter on its own.

Never mind, I can talk about it now in this blog post.

`Design Patterns` sounds very similar to `Design Principles` but they both operate at completely different levels of abstraction.

> Take an example of when building a house: Principles are the building codes while Patterns are the architectural solutions.

`Perl` is famous for its philosophy:

> There's More Than One Way To Do It (TMTOWTDI).

While this freedom is incredibly empowering, it can also lead to write-only spaghetti code if we aren't careful.

Here is the breakdown of `Design Principles`:

1. `[S]`ingle Responsibility Principle (SRP)
2. `[O]`pen/Closed Principle (OCP)
3. `[L]`iskov Substitution Principle (LSP)
4. `[I]`nterface Segregation Principle (ISP)
5. `[D]`ependency Inversion Principle (DIP)

Applying the `SOLID` design principles in `Perl` gives us the structural guardrails needed to keep our code clean, testable, and highly maintainable, even in a highly dynamic, loosely-typed environment.

### [S]ingle Responsibility Principle
***

> A class should have one, and only one, reason to change.

In `Perl`, it is incredibly easy to write `"God classes"` that fetch data, process it, format it, and print it all in one package.

`SRP` tells us to break these tasks into separate, dedicated modules.

**The Violation**

Here, the `Order` class is doing too much: it manages order data and handles the formatting and printing.

If the printing format changes, we have to modify the core business logic class.

```perl
package Order;

use strict;
use warnings;

sub new {
    my ($class, %args) = @_;
    return bless \%args, $class;
}

sub get_items { shift->{items} }

sub calculate_total {
    my $self  = shift;
    my $total = 0;
    $total += $_->{price} for @{ $self->{items} };
    return $total;
}

# VIOLATION: Formatting/Printing responsibility
sub print_invoice {
    my $self = shift;
    print "--- INVOICE ---\n";
    print "Total: \$" . $self->calculate_total() . "\n";
}

1;
```

**The Solution**

We split the responsibilities. `Order` handles the business logic, while `InvoicePrinter` handles how it gets displayed.

```perl
package Order;

use strict;
use warnings;

sub new {
    my ($class, %args) = @_;
    return bless \%args, $class;
}

sub get_items { shift->{items} }

sub calculate_total {
    my $self  = shift;
    my $total = 0;
    $total += $_->{price} for @{ $self->{items} };
    return $total;
}

1;
```

```perl
package InvoicePrinter;

use strict;
use warnings;

sub print_text {
    my ($self, $order) = @_;
    print "--- INVOICE ---\n";
    print "Total: \$" . $order->calculate_total() . "\n";
}

1;
```

### [O]pen/Closed Principle (OCP)
***

> Software entities should be open for extension, but closed for modification.

You should be able to add new features or behaviours without modifying the existing codebase.

In `Perl`, we achieve this through polymorphism instead of hardcoding complex `if-else` statements checking object types.

**The Violation**

If we want to support a new shape (e.g., a `Triangle`), we are forced to modify the `AreaCalculator` class to add another `elsif` block.

```perl
package Rectangle;

use strict;
use warnings;

sub new {
    my ($class, $w, $h) = @_;
    return bless { w => $w, h => $h }, $class;
}

1;
```

```perl
package Circle;

use strict;
use warnings;

sub new {
    my ($class, $r) = @_;
    return bless { r => $r }, $class;
}

1;
```

```perl
package AreaCalculator;

use strict;
use warnings;

sub calculate {
    my ($self, $shapes) = @_;
    my $total_area = 0;

    for my $shape (@$shapes) {
        if ($shape->isa('Rectangle')) {
            $total_area += $shape->{w} * $shape->{h};
        } elsif ($shape->isa('Circle')) {
            $total_area += 3.14159 * ($shape->{r} ** 2);
        }
    }
    return $total_area;
}

1;
```

**The Solution**

We close `AreaCalculator` to modification by shifting the responsibility of calculating the area to the shapes themselves.

Now, we can add infinitely many new shapes without touching `AreaCalculator`.

```perl
package Rectangle;

use strict;
use warnings;

sub new {
    my ($class, $w, $h) = @_;
    return bless { w => $w, h => $h }, $class;
}

sub area {
    my $self = shift;
    return $self->{w} * $self->{h};
}

1;
```

```perl
package Circle;

use strict;
use warnings;

sub new {
    my ($class, $r) = @_;
    return bless { r => $r }, $class;
}

sub area {
    my $self = shift;
    return 3.14159 * ($self->{r} ** 2);
}

1;
```

```perl
package AreaCalculator;

use strict;
use warnings;

sub calculate {
    my ($self, $shapes) = @_;
    my $total_area = 0;

    for my $shape (@$shapes) {
        $total_area += $shape->area();
    }
    return $total_area;
}
1;
```

### [L]iskov Substitution Principle (LSP)
***

> Subtypes must be substitutable for their base types without altering the correctness of the program.

If class `B` is a subclass of class `A`, we should be able to pass an instance of `B` to any code expecting `A` without breaking it.

In geometry, we are taught that `"a square is just a special type of rectangle"`.

Naturally, a developer might try to model this relationship in code using inheritance, `Square` inherits from `Rectangle`.

A classic example of an `LSP` violation is the `Square` inheriting from a `Rectangle`.

**The Violation**

Since a `Square` must have equal `width` and `height`, forcing it to inherit from `Rectangle` breaks expectations.

A user of a `Rectangle` expects that changing the `width` leaves the `height` untouched.

```perl
package Rectangle;

use strict;
use warnings;

sub new {
    my ($class, $w, $h) = @_;
    return bless { w => $w, h => $h }, $class;
}

sub set_width {
    my ($self, $w) = @_;
    $self->{w} = $w;
}

sub set_height {
    my ($self, $h) = @_;
    $self->{h} = $h;
}

sub area {
    my $self = shift;
    return $self->{w} * $self->{h};
}

1;
```

```perl
package Square;

use strict;
use warnings;

use parent qw/Rectangle/;

# VIOLATION: To keep it square, setting width changes height too.
sub set_width {
    my ($self, $w) = @_;
    $self->{w} = $w;
    $self->{h} = $w;
}

sub set_height {
    my ($self, $h) = @_;
    $self->{w} = $h;
    $self->{h} = $h;
}

1;
```

**Why this breaks substitution?**

The core rule of the `Liskov Substitution Principle` is

> You must be able to swap out a parent class with a child class without the program behaving unexpectedly or breaking.

The implicit contract of a `Rectangle` class is:

#### 1. Setting the width only changes the width.
#### 2. Setting the height only changes the height.

<br>

By modifying the height when the width is set, `Square` breaks that promise.

Even though a square is geometrically a rectangle, behaviourally, it is not.

A test function expects a `Rectangle` but would fail if we pass a `Square`.

```perl
sub test_rect {
    my $rect = shift;
    $rect->set_width(10);
    $rect->set_height(5);
    die "LSP Broken!" unless $rect->area() == 50;
}
```

**The Solution**

Instead of forcing an incorrect inheritance model, both classes should implement a common interface.

```perl
package Rectangle;

use strict;
use warnings;

sub new {
    my ($class, $w, $h) = @_;
    return bless { w => $w, h => $h }, $class;
}

sub area {
    my $self = shift;
    return $self->{w} * $self->{h};
}

1;
```

```perl
package Square;

use strict;
use warnigns;

sub new {
    my ($class, $size) = @_;
    return bless { size => $size }, $class;
}

sub area {
    my $self = shift;
    return $self->{size} ** 2;
}

1;
```

### [I]nterface Segregation Principle (ISP)
***

> Clients should not be forced to depend on methods they do not use.

`Perl` doesn't have native, compiler-enforced interfaces.

However, `ISP` is highly relevant to `Perl` when we design object roles.

A massive package that forces child classes/consumers to implement unnecessary methods violates `ISP`.

**The Violation**

If we define a master `"Worker"` interface, a robotic worker is forced to implement a useless eat method.

```perl
package WorkerInterface;

use strict;
use warnings;

sub work { die "Must implement work" }
sub eat  { die "Must implement eat"  }

1;
```

```perl
package Robot;

use strict;
use warnings;

use parent qw/WorkerInterface/;

sub work { print "Robot is building cars.\n" }

# VIOLATION: Forced to implement an unused method
sub eat  { die "Error: Robots do not eat!"   }

1;
```

**The Solution**

Instead of a single bloated interface, we segregate behaviors into small, focused modules or roles.

```perl
package Workable;

use strict;
use warnings;

sub work { die "Must implement work" }

1;
```

```perl
package Feedable;

use strict;
use warnings;

sub eat { die "Must implement eat" }

1;
```

A `Human` implements both, `Workable` and `Feedable`:

```perl
package HumanWorker;

use strict;
use warnings;

use parent qw/Workable Feedable/;

sub work { print "Human working...\n" }
sub eat  { print "Human eating...\n"  }

1;
```

A `Robot` only implements `Workable`:

```perl
package RobotWorker;

use strict;
use warnings;

use parent qw/Workable/;

sub work { print "Robot working...\n" }

1;
```

### [D]ependency Inversion Principle (DIP)
***

> High-level modules should not depend on low-level modules. Both should depend on abstractions.

If your high-level business logic class directly instantiates a specific database connection or API client, they are tightly coupled.

DIP decouples them by `"injecting"` the dependency.

**The Violation**

The `UserManager` is tightly bound to `MySQLDatabase`.

If you want to switch to `SQLite` or mock the database for testing, you have to modify `UserManager`.

```perl
package MySQLDatabase;

use strict;
use warnings;

sub new   { bless {}, shift }
sub query { my ($self, $sql) = @_; return "Results for $sql" }

1;
```

```perl
package UserManager;

use strict;
use warnings;

sub new {
    my $class = shift;
    # VIOLATION: Direct dependency on a low-level concrete class
    my $db = MySQLDatabase->new();
    return bless { db => $db }, $class;
}

sub get_user {
    my ($self, $id) = @_;
    return $self->{db}->query("SELECT * FROM users WHERE id = $id");
}

1;
```

**The Solution**

We inject the database client into the constructor.

`UserManager` now doesn't care what database is used, as long as it responds to the query method.

```perl
package UserManager;

use strict;
use warnings;

sub new {
    my ($class, $db_connection) = @_;
    return bless { db => $db_connection }, $class;
}

sub get_user {
    my ($self, $id) = @_;
    return $self->{db}->query("SELECT * FROM users WHERE id = $id");
}

1;
```

**Works with MySQL**

```perl
my $mysql_db = MySQLDatabase->new();
my $manager  = UserManager->new($mysql_db);
```

Works just as easily with a mock database during testing.

```perl
package MockDatabase;
sub new   { bless {}, shift         }
sub query { return "Mock user data" }

package main;
my $mock_db      = MockDatabase->new();
my $test_manager = UserManager->new($mock_db);
```

***
<br>

`Happy Hacking !!!`
