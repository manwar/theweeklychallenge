---
title: "Reflection / MOP"
date: 2026-07-31T00:00:00+00:00
description: "Revisit reflection/mop in Perl."
type: post
image: images/blog/reflection-or-mop.jpg
author: Mohammad Sajid Anwar
tags: ["Perl", "Java", "Reflection", "MOP"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

The inspiration for writing this blog post came from the creation of this [**LinkedIn post**](https://www.linkedin.com/posts/mohammadanwar_the-four-foundational-pillars-of-oop-abstraction-share-7488917976763588609-C8SQ).

`Reflection` refers to a programming language's capacity to analyse, alter, and execute its own code or structure during program's execution.

There was no distinction between data and instructions in the early computers. During that period, the programs were used to analyse their memory addresses and modify the available instructions at the same time.

`Lisp` was released by `John McCarthy`, it considered the code as data. A program was able to investigate a function's structure through the commands `eval` and `apply` because code was formed as basic lists.

`FORTRAN` and `C` dominated in the `1970`s, and the programs were deprived of their ability to inspect themselves when they were executing. The code was transformed into simple machine instructions along with all information about the variable and structure.

The explicit concept and formalisation of computational reflection was invented by `Brian Cantwell Smith` in his 1982 MIT PhD dissertation, titled `"Procedural Reflection in Programming Languages"`. [**source**](https://en.wikipedia.org/wiki/Reflective_programming)

The discovered concept of computational reflection has been formally formulated by `Brain Cantwell Smith` in his dissertation but but the late `1980`s saw the explosion of `Object-Oriented Programming (OOP)`. [**source**](https://technology.online.city.ac.uk/blogs/how-programming-languages-have-evolved-over-time)

`Kiczales` and his team developed the `Metaobject Protocol (MOP)` in their time at `Xerox PARC`. The protocol revealed the inner workings of the object oriented programming system in his language. The class system of the programming language could be subclassed in order to customise the functioning of method calls.

    1982: Smith (PhD Thesis) "Theory of Reflection"
    1991: Common List Object System (CLOS) MOP "OOP Metaprogramming"
    1997: Java 1.1 "java.lang.reflect"
    2002: .NET/C# "System.Reflection"

```java
import java.lang.reflect.Method;

public class ReflectionDemo {
    public static void main(String[] args) throws Exception {
        // 1. Obtain the Class object dynamically using a string name
        Class<?> clazz = Class.forName("java.lang.String");

        // 2. Inspect and get a reference to the 'toUpperCase' method
        Method method = clazz.getMethod("toUpperCase");

        // 3. Invoke the method dynamically on a String instance
        String result = (String) method.invoke("hello world");

        System.out.println(result); // Outputs: HELLO WORLD
    }
}
```

```C#
using System;
using System.Reflection;

class ReflectionDemo
{
    static void Main()
    {
        // 1. Obtain the Type object dynamically or via typeof
        Type type = typeof(string);

        // 2. Inspect and get a reference to the 'ToUpper' method
        MethodInfo method = type.GetMethod("ToUpper", Type.EmptyTypes);

        // 3. Invoke the method dynamically on a string instance
        string result = (string)method.Invoke("hello world", null);

        Console.WriteLine(result); // Outputs: HELLO WORLD
    }
}
```

***
<br>

`Larry Wall` was inspired by languages such as `AWK`, `C`, and `shell scripting` when creating `Perl` in `1987`.

`Perl` was thus formally born as a dynamic interpreted programming language.

Due to the ability of the interpreter to read and execute commands during runtime, it was never required to compile commands to machine-readable codes.

Any function or variable was recorded into a dynamic symbol table.

For the very beginning of `Perl` development and before the concept of `Object-Oriented Programming` was established there, programmers could check the existence of variables and functions directly from `%main::` Perl hash table.

With the arrival of `Perl 5` in `1994`, object-orientated programming was introduced. `Larry Wall` did not add any complicated rigid class structure, like for instance `C++`, but followed his own principle: `"There is more than one way of doing it."`

In `Perl 5`, object programming simply meant that a reference has been blessed with a package name. And since packages are in fact name spaces, reflection becomes automatic.

**The UNIVERSAL base class**

> Thanks to `Perl 5`, all created objects automatically inherit from the class called `UNIVERSAL`. This way there are introspection methods like `$obj->isa("Class")` or `$obj->can("method")` that can help with runtime capability tests.

**Typeglobs**

> An ability was provided for the programmers to check the presence of `methods`, `scalars`, `arrays`, and `hashes` by inspecting the symbol table slots of the package straight away.

**eval Metaprogramming**

> `String` eval allowed creating subroutines or injecting them into classes while the program is being executed.

***
<br>

In `2006`, `Stevan Little` published the [**Moose**](https://metacpan.org/pod/Moose), a modern object system for `Perl 5`.

`Moose` provided Perl with academic-level reflection and is based on the [**Class::MOP**](https://metacpan.org/pod/Class::MOP) Meta-Object Protocol.

> Each class has become an object now. And it is possible to obtain [**Moose::Meta::Class**](https://metacpan.org/pod/Moose::Meta::Class) with the help of `$class->meta`.

> It is possible to use a clear interrogative method and query the attributes, methods, roles, and even superclasses without dealing with the stash directly.

> Structural transformation makes it possible to alter classes and add roles or change the work of the method at runtime.

Fast forward, `Perl v5.38+` introduced core `experimental class` feature.

### Modern &nbsp; Type &nbsp; Introspection

With the advent of the general operator in `Perl`, alongside its implementation in core classes, the fundamental function of this operator is to examine class hierarchies.

```perl
use v5.44;
use experimental 'class';

class Animal {}
class Dog :isa(Animal) {}

my $pup = Dog->new;

if ($pup isa Dog) {
    say "It's a Dog!";
}

if ($pup isa Animal) {
    say "It inherits from Animal!";
}
```

### Runtime &nbsp; Class &nbsp; Resolution

The introduction of the `__CLASS__` keyword in `Perl v5.40` made it a runtime keyword that points to the exact class of the object used. Unlike the static `__PACKAGE__` constant, it reflects the dynamic dispatch and inheritance during method invocation.

```perl
use v5.44;
use experimental 'class';

class Base {
    field $created_by = __CLASS__;

    method identify {
        say "I am an instance of " . __CLASS__;
    }
}

class SubClass :isa(Base) {}

my $obj = SubClass->new;
$obj->identify; # "I am an instance of SubClass"
```

### Capability &nbsp; Introspection

Class methods can still be reflected using `$obj->can("method_name")`. When executed, this retrieves whether or not the method exists in the relevant class or any of its ancestors.

```perl
use v5.44;
use experimental 'class';

class Dog  { method speak() { say "Woof!" } }
class Cat  { method speak() { say "Meow!" } }
class Rock { }

my @objects = (Dog->new, Cat->new, Rock->new);

for my $obj (@objects) {
    if (my $code_ref = $obj->can('speak')) {
        $obj->$code_ref();
    }
}
```

***

<br>

`Happy Hacking !!!`
