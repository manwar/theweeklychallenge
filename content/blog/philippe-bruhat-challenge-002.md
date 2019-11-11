---
title: "Proposed Solution for Challenge - 002"
date: 2019-04-08T18:00:00+00:00
type: post
image: images/blog/book_pwc_002.jpg
author: Philippe Bruhat (BooK)
tags: ["Perl"]
---
As received in response to the challenge by Philippe Bruhat. Highly recommended.

> Write a script or one-liner to remove leading zeros from positive numbers.

As a filter:

    perl -ple 's/^0+//'

# Challenge #2

> Write a script that can convert numbers to and from a base35 representation, using the characters 0-9 and A-Y.

Those who remember The Perl Review Code golf contest may remember this challenge.

In February 2002, brian d foy wanted to try his hand at publishing a Perl magazine (following the demise of The Perl Journal). He started with a PDF-only review for a year, before producing a paper magazine for a few years.

    This was after a few crazy months on the Fun With Perl mailing list
    (archive: https://www.nntp.perl.org/group/perl.fwp/), where people
    engaged in wild Perl Golf competitions. And in my mind at least, that's
    the reason why the last section of the very first issue (vol 0, issue 0)
    of the Perl Review read:

       Perl Golf

       We have not figured out the rules, chosen the judges, or calculated
       what your chances of winning really are, but we do have the prizes
       – Perl Mongers hats or t-shirts along with a chance for fame and
       glory in the next issue of The Perl Review.  Solve the following
       problem with a ridiculously low number of keystrokes, uses Perl in
       some clever or devious way, or is otherwise interesting and send
       it to comdog@panix.com.

       Convert a base 36 number, with the digits [0-9A-Z], to its base
       10 representation

       If you would like to be a judge, or the maintainer of on his way,
       but the rest of the book is strictly XML. this column, or have an
       interesting golf problem, let Readers who want to learn about various
       tools or pro- us know. We can send you a hat or a t-shirt too.


       The best answer was:

             #!perl -l
             use POSIX;print~~strtol pop,36

       showing that it's useful to know your libraries.

To solve *this* challenge, you'd just need to change the 36 into a 35.

Note that the ~~ secret operator (colloquialy known as the "inchworm") is broken starting with Perl 5.028, which introduced the "bitwise" feature.

An update to the perlsecret manual page is planned this month.
