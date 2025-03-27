---
title: "Subroutine Signatures in Perl"
date: 2025-03-26T00:00:00+00:00
description: "Discussion about subroutine signatures in Perl v5.38."
type: post
image: images/blog/subroutine-signatures.png
author: Mohammad Sajid Anwar
tags: ["Perl"]
---

#### **DISCLAIMER:** Image is generated using `FREE` version of `ChatGPT`.
***

<br>

<div class="container">
    <div class="row">
        <div class="col-12 col-sm-6 col-md-4 col-lg-2 mb-3 text-center">
            <a href="/blog/slurp-in-perl" title="Slurp in Perl">
                <img src="/images/blog/slurp-mini.png" class="img-fluid">
            </a>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-2 mb-3 text-center">
            <a href="/blog/scientist-in-perl" title="Scientist in Perl">
                <img src="/images/blog/scientist-in-perl-mini.png" class="img-fluid">
            </a>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-2 mb-3 text-center">
            <a href="/blog/extraction-in-perl" title="Text Extraction in Perl">
                <img src="/images/blog/extraction-in-perl-mini.png" class="img-fluid">
            </a>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-2 mb-3 text-center">
            <a href="/blog/random-in-perl" title="Random in Perl">
                <img src="/images/blog/random-in-perl-mini.png" class="img-fluid">
            </a>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-2 mb-3 text-center">
            <a href="/blog/perl-regex" title="Perl Regex">
                <img src="/images/blog/perl-regex-mini.png" class="img-fluid rounded-3 border border-3">
            </a>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-2 mb-3 text-center">
            <a href="/blog/read-large-file" title="Read Large File">
                <img src="/images/blog/read-large-file-mini.png" class="img-fluid">
            </a>
        </div>
    </div>
</div>

<br>

## Subroutine Signatures in Perl
***

Have you ever missed subroutine signatures in `Perl`?

I missed it a lot when I used to program in `Java`.

Then when `Raku` introduced its coolest subroutine signatures, I started wondering, when would `Perl` get subroutine signatures?

<br>

## Early Days
***

This is how we used to create subroutines and handle parameters in the early days.

You would typically see one of the two common approaches in old `Perl` code.

<br>

```perl
sub greet {
    my ($name) = @_;
    print "Hello $name!!\n";
}

greet("Joe");    # Hello Joe!!
```
<br>

Or like this:

<br>

```perl
sub greet {
    my $name = shift;
    print "Hello $name!!\n";
}

greet("Joe");    # Hello Joe!!
```

<br>

## The Arrival of Subroutine Signatures
***

Fast forward, `Perl v5.20` which brought the first glimpse of subroutine signatures.

Although, they were experimental, it was still a step in the right direction.

Now the old code has transformed into something much cleaner.

Looks better, right?

<br>

```perl
use v5.20;
use experimental qw(signatures);

sub greet($name) {
    say "Hello $name!!";
}

greet("Joe");    # Hello Joe!!
```

<br>

For those, who prefer the traditional way, subroutine signatures are optional, you can still use the old method.

<br>

## Stability in Perl v5.36
***

With `Perl v5.36`, subroutine signatures became stable.

Now we can create subroutine with signatures like this:

<br>

```perl
use v5.36;

sub greet($name) {
    say "Hello $name!!";
}

greet("Joe");    # Hello Joe!!
```

<br>

This is what I call a complete makeover!

With time, we got used to the new subroutine signatures.

Over time, we have become accustomed to the new subroutine signatures.

<br>

## Default Values in Parameters
***

There are many variations and use cases for subroutine signatures.

In this post, I'll focus on handling default values in parameters.

<br>

```perl
use v5.36;

sub greet($name = "World") {
    say "Hello $name!!";
}

greet("Joe");    # Hello Joe!!
greet();         # Hello World!!
```

<br>

Remember: If you have multiple parameters, the one with default values should always come after all required parameters.

Let's make it more interesting with another example:

<br>

```perl
use v5.36;

sub sum($x, $y = 1) {
    say $x + $y;
}

sum(2, 2);       # 4
sum(2);          # 3
```

<br>

So far so, good.

How about this one?

<br>

```perl
use v5.36;

sub sum($x, $y = 1) {
    say $x + $y;
}

sum(2, 2);       # 4
sum(2);          # 3
sum(2, undef);   # 2
```

<br>

## Enhancements in Perl v5.38
***

With `Perl v5.38`, handling default `undef` or `false` values become more efficient using the `//=` or `||=` operator.

<br>

```perl
use v5.38;

sub sum($x, $y //= 1) {
    say $x + $y;
}

sum(2, 2);       # 4
sum(2);          # 3
sum(2, undef);   # 3
```

<br>

If a parameter is undef, the default value now kicks in.

What about false values?

<br>

```perl
use v5.38;

sub sum($x, $y ||= 1) {
    say $x + $y;
}

sum(2, 2);       # 4
sum(2);          # 3
sum(2, 0);       # 3
```

<br>

As per the subroutine signature behaviour, even a false-value parameter receives the default value.

***

<br>

`Happy Hacking!!`
