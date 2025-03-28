---
title: "Perl Regex"
date: 2025-03-24T00:00:00+00:00
description: "Discussion about the special variable ${^LAST_SUCCESSFUL_PATTERN} in Perl v5.38."
type: post
image: images/blog/perl-regex.png
author: Mohammad Sajid Anwar
tags: ["Perl"]
---

#### **DISCLAIMER:** Image is generated using `FREE` version of `ChatGPT`.
***

<br>

<div class="container">
    <div class="row">
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <a href="/blog/slurp-in-perl" title="Slurp in Perl">
                <img src="/images/blog/slurp-mini.png" class="img-fluid">
            </a>
        </div>
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <a href="/blog/scientist-in-perl" title="Scientist in Perl">
                <img src="/images/blog/scientist-in-perl-mini.png" class="img-fluid">
            </a>
        </div>
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <a href="/blog/extraction-in-perl" title="Text Extraction in Perl">
                <img src="/images/blog/extraction-in-perl-mini.png" class="img-fluid">
            </a>
        </div>
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <a href="/blog/random-in-perl" title="Random in Perl">
                <img src="/images/blog/random-in-perl-mini.png" class="img-fluid">
            </a>
        </div>
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <a href="/blog/subroutine-signatures" title="Subroutine Signatures in Perl">
                <img src="/images/blog/subroutine-signatures-mini.png" class="img-fluid">
            </a>
        </div>
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <a href="/blog/read-large-file" title="Read Large File">
                <img src="/images/blog/read-large-file-mini.png" class="img-fluid">
            </a>
        </div>
        <div class="col-12 col-sm mb-4 p-2 text-center">
            <a href="/blog/welcome-to-perl" title="Welcome to Perl">
                <img src="/images/blog/welcome-to-perl-mini.png" class="img-fluid">
            </a>
        </div>
    </div>
</div>

<br>

## Special variable ${^LAST_SUCCESSFUL_PATTERN} in Perl v5.38
***

`NOTE`: All credit for this article goes to the book [**Perl New Features**](https://leanpub.com/perl_new_features) by `brian d foy`.

I have been following the Perl releases closely for some time now. I don't just track the `maintenance releases` but also the `development releases`, which comes more frequently with smaller updates.

It gives me immense pleasure to see how the language has evolved over the last two decades. With so much happening, keeping up with the pace isn't easy. That's why, I created a dedicated [**GitHub repository**](https://github.com/manwar/perl-cool-snippets) where I record changes as I come across them. This helps me refer back whenever I need to cross-check something.

Have you heard of the book [**Perl New Features**](https://leanpub.com/perl_new_features) by `brian d foy` and published by [**Perl School**](https://perlschool.com)?

When it was first released, I received a `FREE` copy of the book by `brian d foy`. Since I was already working on documenting `Perl` features, the book helped me fill in the missing details. Having read it from start to finish multiple times, I now have a solid grasp of all the important changes in `Perl`. The book doesn't just highlights improvements but also explains the reasoning behind them.

A few days ago, `brian d foy`, updated the book to cover `Perl v5.38`. The first edition only covered up to `Perl v5.32`.

Today I am going to talk about the new special variable `${^LAST_SUCCESSFUL_PATTERN}` added to `Perl v5.38`. For some reason, I missed this feature when it was first released. Normally, I follow the delta page of each release. Here is the [**delta page**](https://perldoc.perl.org/perl5380delta) for `Perl v5.38`, just in case you are looking for it.

Having read about it in the book, I now have a much better understandings of the `${^LAST_SUCCESSFUL_PATTERN}`.

In this post, I will give you a quick demo.

Here is a simple regex example:

<br>

```perl
use v5.30;

my $city = "London";
my $name = "Perl";
my $game = "Cricket";

# context #1
{
    if ($city =~ /ON$/i) {
        print "city matched\n";
    }

    if ($name =~ //) {
        print "#1 name matched\n";
    }
}

# context #2
{
    if ($game =~ /kat$/) {
        print "game matched\n";
    }

    if ($name =~ //) {
        print "#2 name matched\n";
    }
}
```

<br>

Here we have two context, in the first, there is a successfull match followed by an empty pattern matching.

In the second context, we have a failed match followed by the same empty pattern matching.

When you run the above code, what do you expect?

This is what we got:

<br>

    city matched
    #2 name matched

<br>

The empty pattern didn't match in the first context but it did in the second.

`Why?`

Because the empty pattern attempts to match against the last successful pattern in the current context.

I must admit, this implicit behaviour can be quite confusing.

In `Perl v5.38`, this confusion is eliminated with the introduction of the special variable `${^LAST_SUCCESSFUL_PATTERN}`

<br>

```perl
use v5.38;

my $city = "London";

{
    if ($city =~ /ON$/i) {
        print "city matched\n";
    }
    print "last successfull pattern: ${^LAST_SUCCESSFUL_PATTERN}\n";
}
```

<br>

If noticed, the special variable `${^LAST_SUCCESSFUL_PATTERN}` not only capture the last successfull pattern but also all the options along with it.

<br>

    city matched
    last successfull pattern: (?^ui:ON)

<br>

Let's see how this behaves:

<br>

```perl
use v5.38;

my $city = "London";
my $name = "Python";

{
    if ($city =~ /ON$/i) {
        print "city matched\n";
    }

    if ($name =~ /${^LAST_SUCCESSFUL_PATTERN}/) {
        print "name matched\n";
    }
}
```

<br>

This is what we get after running the code:

<br>

    city matched
    name matched

<br>

The name matched because, `${^LAST_SUCCESSFUL_PATTERN}` has the pattern and options together.

Let's re-create the complete example in `Perl v5.38`:

<br>

```perl
use v5.38;

my $city = "London";
my $name = "Perl";
my $game = "Cricket";

# context #1
{
    if ($city =~ /ON$/i) {
        print "city matched\n";
    }

    if ($name =~ /${^LAST_SUCCESSFUL_PATTERN}/) {
        print "#1 name matched\n";
    }
}

# context #2
{
    if ($game =~ /kat$/) {
        print "game matched\n";
    }

    if ($name =~ /${^LAST_SUCCESSFUL_PATTERN}/) {      # Line 24
        print "#2 name matched\n";
    }
}
```

<br>

Running the code now:

<br>

    city matched
    Use of uninitialized value $^LAST_SUCCESSFUL_PATTERN in regexp compilation at .... line 24.
    #2 name matched

<br>

I am not sure about the warning, if it's intentional.

***

<br>

`Happy Hacking!!`
