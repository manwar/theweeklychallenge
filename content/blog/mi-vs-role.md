---
title: "Multiple Inheritance vs Role"
date: 2024-11-07T00:00:00+00:00
description: "Comparison between multiple inheritance and role."
type: post
image: images/blog/mi-vs-role.jpg
author: Mohammad Sajid Anwar
tags: ["Perl"]
---

In the world of `Perl`, we all believe in this philosophy for `Multiple Inheritance` in general:

> Don't use multiple inheritance if you can do it in any other way.

To address this, there is a general consensus to use `roles`. Personally, I have never had to deal with multiple inheritance. Being a big fan of `roles`, I want to simplify the comparison for my own understanding. With the inclusion of `Corinna` in core `Perl v5.38`, I was hoping to see support for roles. Unfortunately, it didn’t make it into the initial release, nor into the subsequent release of `Perl v5.40`. However, there’s positive buzz that it might be included in the next release, `Perl v5.42` but please don’t quote me on this, though!

<br>

## Multiple Inheritance
***

Let us prepare the ground for the battle, here we have two parent classes `Dumper` and `Logger` alongwith one child class `Application` inherits from both parent classes.


        Dumper          Logger
          \               /
           \             /
            v           v
             Application

```perl
use v5.40;

package Dumper;

sub dump($self, $message) {
    say "DUMP: $message.";
}

package Logger;

sub log($self, $message) {
    say "LOG: $message.";
}

package Application;

use parent -norequire, qw/Dumper Logger/;

sub new($class) {
    return bless {}, $class;
}

my $app = Application->new;
$app->dump("this");     # DUMP: this
$app->log("that");      # LOG: that
```

In the above implementation, the use of `-norequire` is needed because of package defined in the same script, please ignore this for now.

**So far so good, right?**

The child class, `Application`, inherits two unique methods i.e. `dump()` and `log()` from two parent classes `Dumper` and `Logger` respectively..

However the trouble starts when the parent classes shared common method.

Let's add a method `d()` to both parent classes as below:

```perl
use v5.40;

package Dumper;

sub dump($self, $message) {
    say "DUMP: $message.";
}

sub d($self, $m) {
    say "DUMP: $m.";
}

package Logger;

sub log($self, $message) {
    say "LOG: $message.";
}

sub d($self, $m) {
    say "LOG: $m.";
}

package Application;

use parent -norequire, qw/Dumper Logger/;

sub new($class) {
    return bless {}, $class;
}

my $app = Application->new;
$app->dump("this");     # DUMP: this.
$app->log("that");      # LOG: that.
$app->d("what");        # DUMP: what.
```

<br>

**Did you notice the output of `$app->d("what")`?**

**But why?**

Because of the order of inheritance in the line: `use parent -norequire, qw/Dumper Logger/;`

If we change the order like: `use parent -norequire, qw/Logger Dumper/;` then you should see `LOG: what.` as the output.

In the above example, we are only talking about single layer of multiple inheritance. This gets messier if we have to deal with multi-layers multiple inheritance.

<br>

### Two big issues with multiple inheritance
***

#### 1. Method Conflict
#### 2. Tight Coupling i.e. child class tightly coupled to both parent classes.

<br>

### Can we resolve these with the help of `Role`?
***

Let's redefine the above implementation with the help of `Moo::Role`.

<br>

```perl
use v5.40;

package Dumper;

use Moo::Role;

sub dump($self, $message) {
    say "DUMP: $message.";
}

sub d($self, $m) {
    say "DUMP: $m.";
}

package Logger;

use Moo::Role;

sub log($self, $message) {
    say "LOG: $message.";
}

sub d($self, $m) {
    say "LOG: $m.";
}

package Application;

use Moo;
with qw/Dumper Logger/;

my $app = Application->new;
$app->dump("this");
$app->log("that");
$app->d("what");
```

<br>

If we run the above the script, it would throw error as below:

> Due to a method name conflict between roles 'Dumper' and 'Logger', the method 'd' must be implemented by 'Application' ...

The error is self explanatory and reported the first issue of `method conflict` straight back to the user during the design stage.

Another benefit with role is `flexible composition` as it can be applied to any class allowing cleaner and modular design.

The biggest advantage is that it **doesn't** impose a `strict inheritance hierarchy`.

Just for the sake of completion, let's fix the reported issue.

<br>

```perl
use v5.40;

package Dumper;

use Moo::Role;

sub dump($self, $message) {
    say "DUMP: $message.";
}

package Logger;

use Moo::Role;

sub log($self, $message) {
    say "LOG: $message.";
}

package Application;

use Moo;
with qw/Dumper Logger/;

sub d($self, $m) {
    say "APP: $m.";
}

my $app = Application->new;
$app->dump("this");     # DUMP: this.
$app->log("that");      # LOG: that.
$app->d("what");        # APP: what.
```
