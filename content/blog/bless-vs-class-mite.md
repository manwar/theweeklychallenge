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

### **Benchmark Script**
***

```perl
package main;
use BlessPerson;
use ClassPerson;
use Benchmark;

timethese(10_000_000, {
    bless => sub { BlessPerson->new(name => 'Joe')->greet; },
    class => sub { ClassPerson->new(name => 'Joe')->greet; },
});
```

<br>

### **Result**
***

```perl
Benchmark: timing 10,000,000 iterations of bless, class...
     bless:  3 wallclock secs (4.14 usr + 0.00 sys = 4.14 CPU) @ 2,415,458.94/s
     class:  4 wallclock secs (5.20 usr + 0.00 sys = 5.20 CPU) @ 1,923,076.92/s
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
Speed            ~2.41M/s               ~1.92M/s
```

<br>

### **Summary**
***

`Class::Mite` trades `~20–25%` performance for `clarity` and `reduced boilerplate`. For most applications, that’s a win.

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

### **Benchmark Script**
***

```perl
package main;
use BlessChild;
use ClassChild;
use Benchmark;

timethese(10_000_000, {
    bless => sub { BlessChild->new(name => 'Tommy')->speak; },
    class => sub { ClassChild->new(name => 'Tommy')->speak; },
});
```

<br>

### **Result**
***

```perl
Benchmark: timing 10,000,000 iterations of bless, class...
     bless:  3 wallclock secs (4.06 usr + 0.00 sys = 4.06 CPU) @ 2,463,054.19/s
     class:  4 wallclock secs (5.13 usr + 0.00 sys = 5.13 CPU) @ 1,949,317.74/s
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

### **Benchmark Script**
***

```perl
package main;
use BlessDog;
use ClassDog;
use Benchmark;

timethese(10_000_000, {
    bless => sub { BlessDog->new(name => 'Tommy')->speak; },
    class => sub { ClassDog->new(name => 'Tommy')->speak; },
});
```

<br>

### **Result**
***

```perl
Benchmark: timing 10000000 iterations of bless, class...
     bless:  4 wallclock secs ( 4.03 usr +  0.00 sys =  4.03 CPU) @ 2481389.58/s (n=10000000)
     class:  4 wallclock secs ( 5.09 usr +  0.00 sys =  5.09 CPU) @ 1964636.54/s (n=10000000)
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
        $self->{name}, $self->{age}, $self->{country});
}
```

<br>

#### **Using Class::More:**

```perl
package ClassPerson;
use Class::More;

has name    => (required => 1);
has age     => (required => 1);
has country => (default  => 'UK');

sub desc {
    my ($self) = @_;
    return sprintf("%s's age is %d old from %s.\n",
        $self->{name}, $self->{age}, $self->{country});
}
```

<br>

### **Benchmark Script**
***

```perl
package main;
use BlessPerson;
use ClassPerson;
use Benchmark;

my $bless_person = BlessPerson->new(name => 'Tom', age => 20);
my $class_person = ClassPerson->new(name => 'Tom', age => 20);

timethese(10_000_000, {
    bless => sub { $bless_person->desc; },
    class => sub { $class_person->desc; },
});
```

<br>

### **Result**
***

```perl
Benchmark: timing 10000000 iterations of bless, class...
     bless:  2 wallclock secs ( 1.54 usr +  0.00 sys =  1.54 CPU) @ 6493506.49/s (n=10000000)
     class:  2 wallclock secs ( 1.57 usr +  0.00 sys =  1.57 CPU) @ 6369426.75/s (n=10000000)
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
Test            bless (ops/sec)    Class/Role (ops/sec)       Overhead
-----------------------------------------------------------------------
Basic class     2.41M              1.92M                      +27%
Inheritance     2.46M              1.95M                      +26%
Role            2.46M              1.96M                      +25%
Attributes      6.41M              6.33M                      ≈0%
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
