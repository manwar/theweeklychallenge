---
title: "Slurp in Perl"
date: 2025-03-01T00:00:00+00:00
description: "Discussion about command line slurp option in Perl."
type: post
image: images/blog/slurp.png
author: Mohammad Sajid Anwar
tags: ["Perl"]
---

#### **DISCLAIMER:** Image is generated using `FREE` version of `ChatGPT`.
***

<br>

<div class="container">
    <div class="row">
        <div class="col-12 col-sm-6 col-md-4 col-lg-2 mb-3 text-center">
            <a href="/blog/subroutine-signatures" title="Subroutine Signatures in Perl">
                <img src="/images/blog/subroutine-signatures-mini.png" class="img-fluid">
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

## Slurp in Perl
***

We all know, in `Perl v5.36`, a new command line flag `-g` was introduced. For more information you can checkout [**PPC-0011**](https://perl.github.io/PPCs/ppc0011-slurp-argument).

The new flag sets `$/ (input record separator)` to `undef` and therefore enables slurp mode.

It's simply an alias for `-0777`.

Those who are old enough, might remember this `-0777` magical number.

So what is `-0777`?

As per the official documentation:

<br>

    -0[octal/hexadecimal] specify record separator (\0, if no argument)

<br>

`0777` corresponds to the decimal value `511`. In `ASCII/Unicode`, there is no character with the value `511`.

It ensures that the input record separator (`$/`) will never match anything in the input data.

Is that the only magical number that can be used?

The short answer is `No`.

There are couple more that I remember for now: `0400` and `01000`.

So technically, we can use any of these to enable slurp mode: `-0777`, `-0400` or `-01000`.

Let's see some action now.

For this, I would create a simple text file `example.txt` having just `3 lines` to play with it.

<br>

      $ echo -e "Line 1\nLine 2\nLine 3" > example.txt

<br>

Let's show the modern slurp mode.

<br>

      $ perl -gne 'print' example.txt
      Line 1
      Line 2
      Line 3
      $

<br>

How about if we do without `-g`?

<br>

      $ perl -ne 'print' example.txt
      Line 1
      Line 2
      Line 3
      $

<br>

So how do I know if slurp is actually happening at all?

This is easy to demonstrate.

<br>

      $ perl -gne 'print; $i++; END { print "Loop executed $i times\n" }' example.txt
      Line 1
      Line 2
      Line 3
      Loop executed 1 times
      $

<br>

How about without `-g` then?

<br>

      $ perl -ne 'print; $i++; END { print "Loop executed $i times\n" }' example.txt
      Line 1
      Line 2
      Line 3
      Loop executed 3 times
      $

<br>

Isn't it magical?

Let's go back to the magical numbers: `-0777`, `-0400` and `-01000`.

We will use the magical numbers this time:

<br>

      $ perl -0777 -ne 'print; $i++; END { print "Loop executed $i times\n" }' example.txt
      Line 1
      Line 2
      Line 3
      Loop executed 1 times
      $

<br>

      $ perl -0400 -ne 'print; $i++; END { print "Loop executed $i times\n" }' example.txt
      Line 1
      Line 2
      Line 3
      Loop executed 1 times
      $

<br>

      $ perl -01000 -ne 'print; $i++; END { print "Loop executed $i times\n" }' example.txt
      Line 1
      Line 2
      Line 3
      Loop executed 1 times
      $

***

<br>

**CONCLUSION:** If you are using `Perl v5.36` or above then you don't need to remember these magical numbers, instead just use `-g`. Happy hacking !!!
