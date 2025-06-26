---
title: "Lexical Method in Perl v5.42"
date: 2025-06-26T00:00:00+00:00
description: "Discussion about lexical method in Perl v5.42."
type: post
image: images/blog/lexical-method-v542.jpg
author: Mohammad Sajid Anwar
tags: ["perl"]
---

#### **DISCLAIMER:** Image is generated using `ChatGPT`.
<br>

In `February 2025`, with the release of `Perl v5.41.9`, a method inside the new experimental `class` feature can be declared as a `lexical method`.

Before diving into the details, let's take a step back.

How many of you know that `Perl` supports lexical subroutine?

To be precise, lexical subroutines were introduced in `Perl v5.18`.

If you haven't seen them before, here's how you declare one:

<br>

```perl
use v5.18;

{
    my sub greet {
        print "Hello World!!\n";
    }
    greet(); # Hello World!!
}

greet(); # Undefined subroutine
```

<br>

Following a similar pattern, `Perl v5.41.9`, allows us to define lexical methods.

When I say, `lexical method`, I am referring to a method defined inside the new experimental `class` feature.

To be honest, this was the biggest surprise for me, in this release.

A big round of applause to the entire `Perl` development team, their hard word makes each release exciting.

I couldn't resist trying out the newly introduced lexical method as soon as it landed.

Here's the example, I experimented with:

<br>

```perl
use v5.41;
use experimental 'class';

class Calc {

    my method process($self, $x, $y, $op) {
        if ($op eq '+') {
            return $x + $y;
        }
        elsif ($op eq '-') {
            return $x - $y;
        }
        elsif ($op eq '*') {
            return $x * $y;
        }
        else {
            return;
        }
    }

    method plus($x, $y) {
        $self->&process($x, $y, '+');
    }

    method minus($x, $y) {
        $self->&process($x, $y, '-');
    }

    method multiply($x, $y) {
        $self->&process($x, $y, '*');
    }
}

my $calc = Calc->new;
say $calc->plus(3,2);        # 5
say $calc->minus(3,2);       # 1
say $calc->multiply(3,2);    # 6
say $calc->process(3,2,'+'); # Can't locate object method "process" via package "Calc"
```

<br>

When I shared this with fellow `Perl` enthusiasts on social media, several people pointed out that `$self` shouldn't be included when defining a lexical method.

Instead of this:

<br>

```perl
    my method process($self, $x, $y, $op) {
        if ($op eq '+') {
            return $x + $y;
        }
        elsif ($op eq '-') {
            return $x - $y;
        }
        elsif ($op eq '*') {
            return $x * $y;
        }
        else {
            return;
        }
    }
```

<br>

It should have been define like this:

<br>

```perl
    my method process($x, $y, $op) {
        if ($op eq '+') {
            return $x + $y;
        }
        elsif ($op eq '-') {
            return $x - $y;
        }
        elsif ($op eq '*') {
            return $x * $y;
        }
        else {
            return;
        }
    }
```

<br>

But, it never worked for me.

After some investigation, we discovered this was actually a bug and tracked as [**issue #23030**](https://github.com/Perl/perl5/issues/23030).

Fast forward to today and I'm happy to report that with `Perl v5.42 RC1`, lexical methods are now in excellent shape.

Once again, all credit goes to the incredible `Perl` development team.

And now...we can finally do this.

<br>

```perl
use v5.42;
use experimental 'class';

class Calc {

    my method process($x, $y, $op) {
        if ($op eq '+') {
            return $x + $y;
        }
        elsif ($op eq '-') {
            return $x - $y;
        }
        elsif ($op eq '*') {
            return $x * $y;
        }
        else {
            return;
        }
    }

    method plus($x, $y) {
        $self->&process($x, $y, '+');
    }

    method minus($x, $y) {
        $self->&process($x, $y, '-');
    }

    method multiply($x, $y) {
        $self->&process($x, $y, '*');
    }
}

my $calc = Calc->new;
say $calc->plus(3,2);        # 5
say $calc->minus(3,2);       # 1
say $calc->multiply(3,2);    # 6
say $calc->process(3,2,'+'); # Can't locate object method "process" via package "Calc"
```

<br>

If you haven't installed the latest release yet, you can get it in no time!

I personally use `perlbrew` to maintain all the latest `Perl` releases in isolated environment without affecting the system `Perl`.

In case, you need it, here's how you can quickly get the latest release..

<br>

```bash
$ wget https://cpan.metacpan.org/authors/id/C/CO/CONTRA/perl-5.42.0-RC1.tar.gz

$ cp perl-5.42.0-RC1.tar.gz ~/perl5/perlbrew/dists/

$ perlbrew --notest install perl-5.42.0-RC1

$ ~/perl5/perlbrew/perls/perl-5.42.0-RC1/ -V:version
version='5.42.0';

$ alias p542='~/perl5/perlbrew/perls/perl-5.42.0-RC1/bin/perl'

$ p542 -V:version
version='5.42.0';
```

<br>

For those curious about what else is included om this latest release, all the details are documented in the [**perldelta page**](https://metacpan.org/release/CONTRA/perl-5.42.0-RC1/view/pod/perldelta.pod).

***

<br>

`Happy Hacking !!!`
