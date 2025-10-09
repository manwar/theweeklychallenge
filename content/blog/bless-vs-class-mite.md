---
title: "bless vs Class::Mite"
date: 2025-10-09T00:00:00+00:00
description: "Discussion comparatively analysis between bless and Class::Mite."
type: post
image: images/blog/bless-vs-class-mite.jpg
author: Mohammad Sajid Anwar
tags: ["perl"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

#### **TL;DR**
***

`Class::Mite` gives you `Moo`-like syntax (classes, roles, and attributes) with almost zero runtime cost. It’s a thin wrapper over `bless`, preserving native `Perl` speed while reducing boilerplate and improving readability.

<br>

In my [**previous post**](https://theweeklychallenge.org/blog/class-and-role), I introduced [**Class::Mite**](https://github.com/manwar/Class-Mite), a lightweight, dependency-free `Class` and `Role` system for `Perl`. Since then I have added `Class::More` that supports basic attributes feature with key `has` same as `Moo`.

<br>

### **Why Class::Mite?**
***

The purpose of this distribution is to provide something as simple as a bless-based class with zero dependencies and minimal boilerplate. I built it for my pet project which is about `80%` complete and I can’t wait to share it with you all.

<br>

### **From bless to Class::Mite: A Practical Comparison**
***

`Perl`’s native object system is famously minimal: you just `bless a hash` and you have an `object` but as codebases grow, so does the need for structure, readability and safety.

Enter `Class::Mite`, a lightweight framework that wraps traditional `bless-based` classes with modern conveniences.

It introduces three packages:

<br>

```perl
Class       - for classes with constructors, inheritance
Class::More - everything that Class does with support for attributes
Role        - for composable behaviour units
```

<br>

Unlike `Moose` or `Moo`, **Class::Mite** aims to stay minimal and fast, remaining close to plain `Perl` under the hood.

This post explores the technical aspects of both `bless` and `Class::Mite` - with benchmarks for `Basic`, `Extends`, `Role` and `Attributes`.

<br>

### **A) Basic Class Definition**
***

#### **Using bless:**

```perl
package BlessPerson;
use strict;
use warnings;

sub new {
    my ($class, %args) = @_;
    return bless { %args }, $class;
}

sub greet {
    my ($self) = @_;
    return "Hello ", $self->{name}, "!\n";
}
```

<br>

#### **Using Class:**

```perl
package ClassPerson;
use Class;

sub greet {
    my ($self) = @_;
    return "Hello ", $self->{name}, "!\n";
}
```

<br>

#### **Using Moo:**

```perl
package MooPerson;
use Moo;
has 'name' => (is => 'rw');

sub greet {
    my ($self) = @_;
    return "Hello ", $self->name, "!\n";
}
```

<br>

### **Benchmark Script**
***

```perl
package main;
use BlessPerson;
use ClassPerson;
use MooPerson;
use Benchmark;

timethese(10_000_000, {
    bless => sub { BlessPerson->new(name => 'Joe')->greet; },
    class => sub { ClassPerson->new(name => 'Joe')->greet; },
    moo   => sub { MooPerson->new(name => 'Joe')->greet;   },
});
```

<br>

### **Result**
***

```perl
Benchmark: timing 10000000 iterations of bless, class, moo...
     bless:  5 wallclock secs ( 4.32 usr +  0.00 sys =  4.32 CPU) @ 2314814.81/s (n=10000000)
     class:  6 wallclock secs ( 5.32 usr +  0.00 sys =  5.32 CPU) @ 1879699.25/s (n=10000000)
       moo:  7 wallclock secs ( 5.79 usr +  0.00 sys =  5.79 CPU) @ 1727115.72/s (n=10000000)
```

<br>

### **Comparison**
***

```perl
Aspect           bless                  Class
------------------------------------------------------------
Boilerplate      Manual constructor     Auto-generated new()
Structure        Minimal                Declarative
Type checks      Manual                 Optional
Speed            ~2.31M/s               ~1.87M/s
```

<br>

### **Summary**
***

```perl
Framework    Ops/sec    Relative    Difference
bless        2.31M      100%        —
Class        1.87M      ~81%        −19%
Moo          1.72M      ~75%        −25%
```

<br>

`Class` is `~20%` slower than raw `bless` and roughly `8–9%` faster than `Moo`

<br>

### **B) Inheritance (extends)**
***

#### **Using bless:**

```perl
package BlessParent;
use strict;
use warnings;

sub new {
    my ($class, %args) = @_;
    return bless { %args }, $class;
}

sub speak {
    my ($self) = @_;
    return $self->{name}, " bark!\n";
}
```

<br>


```perl
package BlessChild;
use strict;
use warnings;
use parent qw/BlessParent/;
```

<br>

#### **Using Class:**

```perl
package ClassParent;
use Class;

sub speak {
    my ($self) = @_;
    return $self->{name}, " bark!\n";
}
```

<br>

```perl
package ClassChild;
use Class;
extends qw/ClassParent/;
```

<br>

#### **Using Moo:**

```perl
package MooParent;
use Moo;
has 'name' => (is => 'rw');

sub speak {
    my ($self) = @_;
    return $self->{name}, " neigh!\n";
}
```

<br>

```perl
package MooChild;
use Moo;
extends qw/MooParent/;
```

<br>

### **Benchmark Script**
***

```perl
package main;
use BlessChild;
use ClassChild;
use MooChild;
use Benchmark;

timethese(10_000_000, {
    bless => sub { BlessChild->new(name => 'Tom')->speak; },
    class => sub { ClassChild->new(name => 'Tom')->speak; },
    moo   => sub { MooChild->new(name => 'Tom')->speak;   },
});
```

<br>

### **Result**
***

```perl
Benchmark: timing 10000000 iterations of bless, class, moo...
     bless:  5 wallclock secs ( 4.11 usr +  0.00 sys =  4.11 CPU) @ 2433090.02/s (n=10000000)
     class:  6 wallclock secs ( 5.12 usr +  0.00 sys =  5.12 CPU) @ 1953125.00/s (n=10000000)
       moo:  5 wallclock secs ( 5.30 usr +  0.00 sys =  5.30 CPU) @ 1886792.45/s (n=10000000)
```

<br>

### **Comparison**
***

```perl
Aspect                bless + parent    Class + extends
-------------------------------------------------------
Inheritance syntax    Procedural        Declarative
Method lookup         Native            Native
Ease of use           Simple            Cleaner
Overhead              None              Minimal
```

<br>

### **Summary**
***

`extends` in `Class` abstracts `use parent`, giving `uniform` and `modern inheritance` declarations with minimal performance impact.

<br>

### **C) Roles (with)**
***

`Roles` allow behaviour composition without classical inheritance. They’re conceptually like `mix-ins` but with formal requirements.

`Perl`’s core doesn’t have `roles` — you must emulate them manually:

#### **Using bless:**

```perl
package BlessRole;
use strict;
use warnings;
sub speak { ... }
```

<br>

```perl
package BlessDog;
use strict;
use warnings;
use parent qw/BlessRole/;

sub new {
    my ($class, %args) = @_;
    return bless { %args }, $class;
}

sub speak {
    my ($self) = @_;
    return $self->{name}, " bark!\n";
}
```

<br>

#### **Using Class/Role:**

```perl
package ClassRole;
use Role;
requires qw/speak/;
```

<br>

```perl
package ClassDog;
use Class;
with qw/ClassRole/;

sub speak {
    my ($self) = @_;
    return $self->{name}, " bark!\n";
}
```

<br>

#### **Using Moo::Role:**

```perl
package MooRole;

use Moo::Role;
requires qw/speak/;
```

<br>

```perl
package MooDog;

use Moo;
has 'name' => (is => 'rw');
with qw/MooRole/;

sub speak {
    my ($self) = @_;
    return $self->{name}, " neigh!\n";
}
```

<br>

### **Benchmark Script**
***

```perl
package main;
use BlessDog;
use ClassDog;
use MooDog;
use Benchmark;

timethese(10_000_000, {
    bless => sub { BlessDog->new(name => 'Tommy')->speak; },
    class => sub { ClassDog->new(name => 'Tommy')->speak; },
    moo   => sub { MooDog->new(name => 'Tommy')->speak;   },
});
```

<br>

### **Result**
***

```perl
Benchmark: timing 10000000 iterations of bless, class, moo...
     bless:  3 wallclock secs ( 4.15 usr +  0.00 sys =  4.15 CPU) @ 2409638.55/s (n=10000000)
     class:  6 wallclock secs ( 5.17 usr +  0.00 sys =  5.17 CPU) @ 1934235.98/s (n=10000000)
       moo:  5 wallclock secs ( 4.64 usr +  0.00 sys =  4.64 CPU) @ 2155172.41/s (n=10000000)
```

<br>

### **Comparison**
***

```perl
Aspect          bless               Role
---------------------------------------------------------
Role concept    None (manual)       Native
Composition     Inheritance only    Declarative with
Requirements    Manual              Enforced via requires
Overhead        Minimal             Slight
```

<br>

### **Summary**
***

`Roles` are a major advantage of `Class::Mite`. They formalize what used to be ad hoc, with little runtime cost.

<br>

### **D) Attributes**
***

This is where `Class::Mite` shines. Manual constructors get replaced by declarative `has` statements.

#### **Using bless:**

```perl
package BlessPerson;
use strict;
use warnings;

sub new {
    my ($class, %args) = @_;
    for (qw/name age/) {
        die "Missing required key $_.\n"
            unless (exists $args{$_});
    }
    $args{country} //= 'UK';
    return bless { %args }, $class;
}

sub desc {
    my ($self) = @_;
    return sprintf("%s's age is %d old from %s.\n",
        $self->{name},
        $self->{age},
        $self->{country});
}
```

<br>

#### **Using Class::More:**

```perl
package ClassPerson;
use Class::More;

has name    => (required => 1);
has age     => (required => 1);
has country => (default  => sub { 'UK' });

sub desc {
    my ($self) = @_;
    return sprintf("%s's age is %d old from %s.\n",
        $self->name,
        $self->age,
        $self->country);
}
```

<br>

#### **Using Moo:**

```perl
package MooPerson;
use Moo;

has name    => (is => 'rw', required => 1   );
has age     => (is => 'rw', required => 1   );
has country => (is => 'rw', default  => sub { 'UK'});

sub desc {
    my ($self) = @_;
    return sprintf("%s's age is %d old from %s.\n",
        $self->name,
        $self->age,
        $self->country);
}
```

<br>

### **Benchmark Script**
***

```perl
package main;
use BlessPerson;
use ClassPerson;
use MooPerson;
use Benchmark;

my $bless_person = BlessPerson->new(name => 'Tom', age => 20);
my $class_person = ClassPerson->new(name => 'Tom', age => 20);
my $moo_person   = MooPerson->new(name => 'Tom', age => 20);

timethese(10_000_000, {
    bless => sub { $bless_person->desc; },
    class => sub { $class_person->desc; },
    moo   => sub { $moo_person->desc;   },
});
```

<br>

### **Result**
***

```perl
Benchmark: timing 10000000 iterations of bless, class, moo...
     bless:  2 wallclock secs ( 1.61 usr +  0.00 sys =  1.61 CPU) @ 6211180.12/s (n=10000000)
     class:  1 wallclock secs ( 1.63 usr +  0.00 sys =  1.63 CPU) @ 6134969.33/s (n=10000000)
       moo:  2 wallclock secs ( 1.62 usr +  0.00 sys =  1.62 CPU) @ 6172839.51/s (n=10000000)
```

<br>

### **Comparison**
***

```perl
Aspect                bless         Class::More
-----------------------------------------------
Attribute setup       Manual        Declarative
Defaults              Manual        Built-in
Required keys         Manual        Built-in
Readability           Procedural    Declarative
Performance           Equal         Equal
```

<br>

### **Summary**
***

Once the object is built, `accessors` are plain `Perl` methods — no runtime penalty. This gives you `Moo`-like ergonomics with `pure-Perl` performance.

<br>

### **Summary of Benchmarks**
***

```perl
                               Bless    Class    Moo      Fastest    Class vs Moo   Class vs Bless
                               ops/s    ops/s    ops/s
--------------------------------------------------------------------------------------------------
A) Basic Class Definition      2.31M    1.87M    1.72M    Bless      +8.8% faster   19% slower
B) Inheritance (extends)       2.43M    1.95M    1.88M    Bless      +3.5% faster   19.7% slower
C) Roles (with)                2.40M    1.93M    2.15M    Bless      10.2% slower   19.7% slower
D) Attributes (method call)    6.21M    6.13M    6.17M    Bless      ~equal (±1%)   1.2% slower
```

<br>

### **Interpretation**
***

`Class::Mite` adds only a tiny initialization cost. Runtime `method` and `attribute access` remain as fast as native `Perl`.

#### **You gain cleaner syntax, roles and safer constructors.**

<br>

### **Conclusion**
***

`Class::Mite` brings modern `OOP` syntax to `Perl` without abandoning its simplicity.

<br>

```perl
- Faster and lighter than Moose/Moo
- Cleaner and safer than raw bless
- Fully compatible with existing Perl objects
- Declarative roles, inheritance and attributes
```

<br>

If you love `Perl`’s flexibility but want less boilerplate and more expressiveness - `Class::Mite` bridges that gap beautifully.

***

<br>

`Happy Hacking !!!`
