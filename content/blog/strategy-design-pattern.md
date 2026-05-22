---
title: "Strategy Design Pattern"
date: 2026-05-22T00:00:00+00:00
description: "Practical use of strategy design pattern."
type: post
image: images/blog/strategy-design-pattern.jpg
author: Mohammad Sajid Anwar
tags: ["perl", "design pattern"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
***
<br>

In this blog post, I am talking about `Strategy Design Pattern` in `Perl`. The examples used in the post is taken from my book, [**Design Patterns in Modern Perl**](https://perlschool.com/books/design-patterns).

Have seen code like this in your career? I have.

```perl
sub publish {
    my ($self, $text) = @_;

    if ($self->{strategy} =~ /^upper$/i) {
        return uc $text;
    }
    elsif ($self->{strategy} =~ /^lower$/i) {
        return lc $text;
    }
    return $text;
}
```

Do you see any issue in the above code?

Having done design patterns, I clearly see one issue. In future if we want to add another another strategy then we certainly have to re-visit the code.

Changing fully functional and tested code is risk of introducing bugs.

Let's get to the basics first, we all know the famous `5 BASIC Design Principles`:

### 1. Single Responsibility Principle (SRP)

> "A class should have one, and only one, reason to change."

### 2. Open/Closed Principle (OCP)

> "Software entities should be open for extension, but closed for modification."

### 3. Liskov Substitution Principle (LSP)

> "Objects of a superclass should be replaceable with objects of its subclasses without breaking the application."

### 4. Interface Segregation Principle (ISP)

> "Many client-specific interfaces are better than one general-purpose interface."

### 5. Dependency Inversion Principle (DIP)

> "Depend upon abstractions, code to an interface, not a concrete implementation."

You don't need to treat `SOLID` as absolute, rigid laws. Instead, think of them as diagnostic tools. If you ever find yourself dreading a new feature request because you know it will require modifying 10 different files, it usually means one of these five principles has been violated.

The strategy design patterns strictly follows the `OCP` rule i.e. you should be able to add new functionality or behavior to your code without changing any of the existing code you've already written and tested. Following `OCP` rule prevents a `"fragile codebase"` where fixing or adding one thing breaks three others.

Here is the complete code that lacks the design pattern.

```perl
package TextFormatter;

use Moo;
has strategy => (is => 'rw', requires => 1);

sub publish {
    my ($self, $text) = @_;

    if    ($self->{strategy} =~ /^upper$/i) {
        return uc $text;
    }
    elsif ($self->{strategy} =~ /^lower$/i) {
        return lc $text;
    }
    return $text;
}

package main;

use Test::More;

my $upper_case = TextFormatter->new({ strategy => 'upper' });
my $lower_case = TextFormatter->new({ strategy => 'lower' });

my $text = "IpHonE";
is $upper_case->publish($text), "IPHONE";
is $lower_case->publish($text), "iphone";

done_testing;
```

Now imagine, we have to add another strategy e.g. `Camel` case. Then you would have to do something like this:

```perl
package TextFormatter;

use Moo;
has strategy => (is => 'rw', requires => 1);

sub publish {
    my ($self, $text) = @_;

    if    ($self->{strategy} =~ /^upper$/i) {
        return uc $text;
    }
    elsif ($self->{strategy} =~ /^lower$/i) {
        return lc $text;
    }
    elsif ($self->{strategy} =~ /^camel$/i) {
        $text =~ s/^(\w)(\w)(.*)$/lc($1) . uc($2) . lc($3)/e;
        return $text;
    }
    return $text;
}

package main;

use Test::More;

my $upper_case = TextFormatter->new({ strategy => 'upper' });
my $lower_case = TextFormatter->new({ strategy => 'lower' });
my $camel_case = TextFormatter->new({ strategy => 'camel' });

my $text = "IpHonE";
is $upper_case->publish($text), "IPHONE";
is $lower_case->publish($text), "iphone";
is $camel_case->publish($text), "iPhone";

done_testing;
```

You can see, where we are heading.

To address this issue, we can implement the `Strategy` design pattern.

Let's take the original code, where we had only two strategies: `upper` and `lower` and convert them to use the strategy design pattern.

For detailed discussion, you can follow [**my book**](https://perlschool.com/books/design-patterns). Let's create a role to design the generic strategy as below:

```perl
package FormatterStrategy;

use Moo::Role;
requires qw/format/;

1;
```

Now that we have a defined role, we can create as many strategy (concrete class) as we want. Since we want to focus on original code. We will create two strategies (concrete class) using the role we just created as below:

```perl
package UpperCaseFormatter;

use Moo;
with qw/FormatterStrategy/;

sub format {
    my ($self, $text) = @_;

    return uc $text;
}

1;
```

```perl
package LowerCaseFormatter;

use Moo;
with qw/FormatterStrategy/;

sub format {
    my ($self, $text) = @_;

    return lc $text;
}

1;
```

Time to create `context class` as below:

```perl
package TextFormatter;

use Moo;
has strategy => (is => 'rw', requires => 1);

sub publish {
    my ($self, $text) = @_;

    return $self->strategy->format($text);
}
```

The application code looks like this now:

```perl
package main;

use Test::More;

my $upper_case = TextFormatter->new({ strategy => UpperCaseFormatter->new });
my $lower_case = TextFormatter->new({ strategy => LowerCaseFormatter->new });

my $text = "IpHonE";
is $upper_case->publish($text), "IPHONE";
is $lower_case->publish($text), "iphone";

done_testing;
```

You would agree with me, this code is clean and structured as compare to the original code.

The benefit of this design pattern, we can easily extend the application to support new strategy (concrete class) e.g. Camel case as below:

```perl
package CamelCaseFormatter;

use Moo;
with qw/FormatterStrategy/;

sub format {
    my ($self, $text) = @_;

    $text =~ s/^(\w)(\w)(.*)$/lc($1) . uc($2) . lc($3)/e;
    return $text;
}

1;
```

You see, no code change needed, just addition of a concrete class..

The application looks like this now:

```perl
package main;

use Test::More;

my $upper_case = TextFormatter->new({ strategy => UpperCaseFormatter->new });
my $lower_case = TextFormatter->new({ strategy => LowerCaseFormatter->new });
my $camel_case = TextFormatter->new({ strategy => CamelCaseFormatter->new });

my $text = "IpHonE";
is $upper_case->publish($text), "IPHONE";
is $lower_case->publish($text), "iphone";
is $camel_case->publish($text), "iPhone";

done_testing;
```

***

<br>

`Happy Hacking !!!`
