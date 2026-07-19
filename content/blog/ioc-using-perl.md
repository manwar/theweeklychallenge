---
title: "IoC using Perl"
date: 2026-07-18T00:00:00+00:00
description: "Implementation of IoC using Perl."
type: post
image: images/blog/ioc-using-perl.jpg
author: Mohammad Sajid Anwar
tags: ["IoC", "Perl"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

Yesterday, I posted a blog, [**SOLID using Perl**](//blog/solid-using-perl) where I discussed the `SOLID` design principles in detail.

While my brain was still in the `Design Principles` world, I decided to tackle one more topic somewhat related i.e. `Inversion of Control (IoC)`.

`IoC` is also referred as `Dependency Injection`.

As I enjoy reading research papers, I came across two very informative papers:

1. [**Designing Reusable Classes**](https://www.laputan.org/drc.html)
2. [**Inversion of Control Containers and the Dependency Injection pattern**](https://martinfowler.com/articles/injection.html)

`Inversion of Control (IoC)` is a design principle where the control flow of a program is inverted.

Instead of your custom code calling a framework or creating its own dependencies, an external entity injects those dependencies into your code.

### The Traditional Approach
***

Here is a simple, classic example in `Perl` taking the traditional approach.

In this scenario, a `Car` class is entirely responsible for creating its own `Engine`. It is tightly coupled to a specific type of engine.

**Problem:**

If you want to test the `Car` with a mock engine, or change it to an `ElectricEngine`, you have to modify the internal code of the `Car` class.

```perl
package GasEngine;

use strict;
use warnings;

sub new {
    my $class = shift;
    return bless {}, $class;
}

sub start {
    return "Vroom! gas engine roaring.";
}

1;
```

```perl
package Car;

use strict;
use warnings;

use GasEngine;

sub new {
    my $class  = shift;
    my $engine = GasEngine->new;
    return bless { engine => $engine }, $class;
}

sub drive {
    my $self = shift;
    return "Starting the car: " . $self->{engine}->start;
}

1;
```

Final implementation as unit test:

```perl
#!/usr/bin/env perl

use strict;
use warnings;

use Car;
use Test::More;

is(Car->new->drive, 'Starting the car: Vroom! gas engine roaring.');

done_testing;
```

### The IoC / Dependency Injection Approach
***

In the case of the `IoC` design principle, we invert the control. The `Car` no more makes the engine, it only asks for an engine in its constructor.

Here are few of the benefits of `IoC`:
1. Decoupling: The `Car` class does not worry about how the engine is created, it only cares that the engine has a `start()` method.
2. Testability: It is easy to pass a `"MockEngine"` into `Car->new()` without making the car work with a real engine.
3. Extensibility: It is easy to implement a `HybridEngine` by making no changes to the `Car` class.

`Dependency Injection (DI)`, brings together the strategies mentioned above.

### 1. The Strategy Pattern

The `Strategy` pattern gives a way for classes to swap their algorithms at runtime. It makes it necessary that a class does not hardcode its behaviour, but uses an accept an object of the class which implements a certain interface.

### 2. The Factory Pattern

The `Factory` pattern aims to conceal the use of the `new` keyword. The `Factory` pattern lets a class use the `Factory` object instead of creating its own dependencies.

### 3. DI is the Glue

In a traditional setup, you would have to manually write code to call the `Factory`, get the object, and pass it into the `Strategy`.

`Dependency Injection` acts as the automated broker. It says:

> I will use the `Factory` to create the object, and then I will automatically inject it into the class using the `Strategy` structure.

Let's re-create the example:

```perl
package ElectricEngine;

use strict;
use warnings;

sub new {
    my $class = shift;
    return bless {}, $class;
}

sub start {
    return "Silent hum... Electric power ready.";
}

1;
```

```perl
package Car;

use strict;
use warnings;

sub new {
    my ($class, $engine) = @_;
    return bless { engine => $engine }, $class;
}

sub drive {
    my $self = shift;
    return "Starting the car: " . $self->{engine}->start;
}

1;
```

Implementation of `IoC` as unit test:

```perl
#!/usr/bin/env perl

use strict;
use warnings;

use Test::More;

use Car;
use GasEngine;
use ElectricEngine;

my $gas_engine      = GasEngine->new;
my $gas_car         = Car->new($gas_engine);
my $electric_engine = ElectricEngine->new;
my $electric_car    = Car->new($electric_engine);

is($gas_car->drive, 'Starting the car: Vroom! gas engine roaring.');
is($electric_car->drive, 'Starting the car: Silent hum... Electric power ready.');

done_testing;
```

It is common for programmers to use `CPAN` modules such as [**Bread::Board**](https://metacpan.org/pod/Bread::Board) in large applications written in `Perl`, as they allow the automation of this injection process. These modules act as sophisticated `IoC` containers.

`Bread::Board` works with a structure resembling a tree that declares dependencies (services) of a container (board).

### Step 1: The Strategy Pattern
***

The `Strategy` pattern dictates that the `Car` should be completely unaware of the specific type of engine it has. It just expects an object that can roar.

**The Strategies**

```perl
package GasEngine;
sub new  { my $class = shift; return bless {}, $class;  }
sub roar { return "Vroom! gas engine roaring."          }

package ElectricEngine;
sub new  { my $class = shift; return bless {}, $class;  }
sub roar { return "Slient hum... Electric power ready." }
```

**The Context**

```perl
package Car;
sub new {
    my ($class, %args) = @_;
    return bless { engine => $args{engine} }, $class;
}
sub drive {
    my ($self) = @_;
    return "Car status: " . $self->{engine}->roar;
}
```

### Step 2: The Factory Pattern
***

If we were doing this manually, we would use a `Factory` to handle the setup of the engines so the main application code doesn't have to deal with configuring them.

```perl
package EngineFactory;

sub create_engine {
    my ($class, $type) = @_;

    if ($type eq 'gas') {
        return GasEngine->new;
    }
    elsif ($type eq 'electric') {
        return ElectricEngine->new;
    }
    die "Unknown engine type";
}
```

### Step 3: Combining into Dependency Injection
***

Now we let `Bread::Board` take the `Factory` logic i.e. creating the engines and the `Strategy` setup i.e. injecting the engine into the car and fuse them together automatically.

```perl
#!/usr/bin/env perl

use strict;
use warnings;

use Test::More;

use Car;
use GasEngine;
use ElectricEngine;

use Bread::Board;

my $garage = container 'Garage' => as {
    service 'gas_engine' => (
        block => sub { GasEngine->new }
    );

    service 'electric_engine' => (
        block => sub { ElectricEngine->new }
    );

    service 'gas_car' => (
        dependencies => {
            chosen_engine => 'gas_engine',
        },
        block => sub {
            my $s = shift;
            return Car->new( engine => $s->param('chosen_engine') );
        },
    );

    service 'electric_car' => (
        dependencies => {
            chosen_engine => 'electric_engine',
        },
        block => sub {
            my $s = shift;
            return Car->new( engine => $s->param('chosen_engine') );
        },
    );
};

is($garage->resolve( service => 'gas_car' )->drive, "Car status: Vroom! gas engine roaring.");
is($garage->resolve( service => 'electric_car' )->drive, "Car status: Slient hum... Electric power ready.");

done_testing;
```

**The Breakdown**

> Strategy: The `Car` has been designed to possess changeable engine slots.

> Factory: The `gas_engine` and `electric_engine` service blocks ensure the constructor of `new()` objects takes place.

> DI Container: It solves the dependencies and fetches the created object from the factory block.

***
<br>

`Happy Hacking !!!`
