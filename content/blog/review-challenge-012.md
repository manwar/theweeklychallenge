---
title: "Kian-Meng Ang Weekly Review: Challenge - 012"
date: 2019-06-20T00:00:00+00:00
description: "Kian-Meng Ang Weekly Review: Challenge - #012."
type: post
image: images/blog/blog-header-6.jpg
author: Kian-Meng Ang
tags: ["Perl5", "Perl6"]
---

Continues from [last week](/blog/review-challenge-011/).

For a quick overview, read through all [questions](/blog/perl-weekly-challenge-012/) and [recap](/blog/recap-challenge-012/) of the challenge first.

This week was quite unique as we observed there were several submissions where submissions were based on existing solutions but were done in a more alternative and elegant way. Moreover, some of these show case the expressiveness of Perl programming language itself, which is also one of the key goal of this weekly challenge.

***

## Challenge #1

***
One of the key takeaway from this challenge was the [solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-012/joe-tym/perl5/ch-1.pl) by **Joe Tym**. Based on the solution done by [Laurent Rosenfeld](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-012/lau%20%20%20%20%20%20%20rent-rosenfeld/perl5/ch-1.pl), he refactored it to use different CPAN modules like [`PDL`](https://metacpan.org/pod/PDL) (which is the equivalent to Python's [NumPy](https://www.numpy.org/)) and [`Math::Prime::FastSieve`](https://metacpan.org/pod/Math::Prime::FastSieve) and did a benchmark comparing different modules combination and NumPy solution on calculating prime number. His result as shown below. And he should definitely should create a blog and write about it about it.

    PDL Only                    -> 0m0.340s
    Math::Prime::FastSieve+PDL  -> 0m0.337s
    Math::Prime::FastSieve Only -> 0m0.188s

    Benchmark results, just to generate prime numbers 0-10 million:

    Pure Perl implementation(above) -> 0m26.662s
    PDL implementation(below)       -> 0m0.284s
    NUMPY(1.8.2) implementation:    -> 0m0.129s
    Math::Prime::FastSieve          -> 0m0.122s

    Perl script that does nothing, just use PDL;        -> 0m0.132s
    Python script that does nothing, just import numpy; -> 0m0.066s


And as usual, some alternative (non-Perl implementation) or creative ways used by participants to find, generate, determine prime numbers. Instead of generating prime numbers within the script itself, **Adam Russell** [downloaded](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-012/adam-russell/perl5/ch-1.pl) a list of pre-generated prime numbers. While **Duncan C. White** had a similar approach, but [wrote a C program](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-012/duncan-c-white/C%20program) to generate prime numbers instead. Compare to other participants which use formulae to determine primality, **Daniel Mantovani** used [regex](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-012/daniel-mantovani/perl5/ch-1.pl) to determine a prime number. For **Yozen Hernandez**, look into his [solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-012/yozen-hernandez/perl5/ch-1.pl) or even better, read his [blog post](https://yzhernand.github.io/posts/perl-weekly-challenge-12/) on how he used closure and iterator to solve the problem.

The second key takeaway of this challenge was the [solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-012/joelle-maslak/perl5/ch-1.pl) implemented by **Joelle Maslak**. Remember that **Duncan C. White** wrote a C program to generate prime numbers? Well, **Joelle Maslak** took similar approach to determine prime number. This was done through the [`Inline`](https://metacpan.org/pod/Inline) module where you can code a Perl subroutine in other programming language. In this case, the C code was embedded in the [`Prime` package](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-012/joelle-maslak/perl5/lib/Prime.pm) and there was a fallback Perl subroutine in case the script cannot load the package. By far, the cleanest polyglot programming solution.

***

## Challenge #2

***
**Mark Senn** [illustrated](https://engineering.purdue.edu/~mark/pwc-012.pdf) the solution of the problem clearly by breaking down echo path into its individual components in a table form as shown below. Generally, this was the common approach took by all participants.


    # Split @path into its separate parts and put
    # the results in the two dimensional @part array.
    #   0 1  2  3  4  5
    # 0   a  b  c  d
    # 1   a  b  cd
    # 2   a  b  cc
    # 3   a  b  c  d  e

On splitting a string into each array elements to build the above two dimensional array, two things we learned here. **Daniel Mantovani** [discovered](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-012/daniel-mantovani/perl5/ch-2.pl) that setting the [third argument of `split` function](https://perldoc.perl.org/functions/split.html) to a negative limit will treat `/a/b` and `/a/b/` differently. **Adam Russell** was the only participant that used [quotemeta](https://perldoc.perl.org/functions/quotemeta.html) when [splitting the string](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-012/adam-russell/perl5/ch-1.pl).

The only difference was how each participant find the common elements or intersection of all paths in array form. To find the prefix or common paths, some have used the [`splice`](https://perlmaven.com/splice-to-slice-and-dice-arrays-in-perl)  function ([Alicia Bielsa](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-012/alicia-bielsa/perl5/ch-2.pl), [Gustavo Chaves](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-012/gustavo-chaves/perl5/ch-2.pl), [Steven Wilson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-012/steven-wilson/perl5/ch-2.pl), [Andrezgz](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-012/andrezgz/perl5/ch-2.pl)), most compare each array element (Athanasius, [E. Choroba](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-012/e-choroba/perl5/ch-2.pl), [Dave Jacoby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-012/dave-jacoby/perl5/ch-2.pl), [Adam Russell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-012/adam-russell/perl5/ch-2.pl), [Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-012/joelle-maslak/perl5/ch-2.pl), [Yozen Hernandez](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-012/yozen-hernandez/perl5/ch-2.pl), [Duncan C. White](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-012/duncan-c-white/perl5/ch-2.pl), [Laurent Rosenfeld](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-012/laurent-rosenfeld/perl5/ch-2.pl), [Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-012/ruben-westerberg/perl5/ch-2.pl), [Shardiwal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-012/shardiwal/perl5/ch-2.pl)), regex ([Jaime](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-012/jaime/perl5/ch-2.pl)), [`reduce`](https://perldoc.perl.org/List/Util.html#reduce) function ([Feng Chang](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-012/feng-chang/perl5/ch-2.pl)), [`grep`](https://perldoc.perl.org/functions/grep.html) function ([Jaldhar H. Vyas](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-012/jaldhar-h-vyas/perl5/ch-2.pl)), [`all`](https://perldoc.perl.org/List/Util.html#all) function ([Maxim Nechaev](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-012/maxim-nechaev/perl5/ch-2.pl)), and [`intersection`](https://metacpan.org/pod/Array::Utils) function ([Kian-Meng Ang](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-012/kian-meng-ang/perl5/ch-2.pl)).


***

## Challenge #3

***
We have four people ([Athanasius](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-012/athanasius/perl5/ch-3.pl), [Steven Wilson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-012/steven-wilson/perl5/ch-3.pl), **Joelle Maslak** ([Perl 5](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-012/joelle-maslak/perl5/ch-3.pl) and [Perl 6](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-012/joelle-maslak/perl6/ch-3.p6)), and [Kian-Meng Ang](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-012/kian-meng-ang/perl5/ch-3.pl)) participated for this week. It would be nice if we can maintain or have more submissions to this challenge. While some solutions may seem similar from week to week, we still hope to see more different and creative approaches to tackle this challenge.

The HTTP client CPAN modules used for this week are [`LWP::UserAgent`](https://metacpan.org/pod/LWP::UserAgent), [`HTTP::Tiny`](https://metacpan.org/pod/HTTP::Tiny), [`LWP::Simple`](https://metacpan.org/pod/LWP::Simple), [`Mojo::UserAgent`](https://metacpan.org/pod/Mojo::UserAgent), and [`Cro::HTTP::Client`](https://cro.services/docs/reference/cro-http-client) (Perl 6). Note that `LWP::Simple` is just a simple wrapper of `LWP::UserAgent` module and it's suitable for simple one-liner or small script. **Steven Wilson's** [solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-012/steven-wilson/perl5/ch-3.pl) is a good example that demonstrated such style. While `HTTP::Tiny`, a minimal CPAN module with non-core dependencies, can do the job as well, it's more suitable for [simple HTTP request](https://xdg.me/blog/why-httptiny/) like grabbing a page, downloading or mirroring a file. You still need external dependencies to process the JSON or XML responses. Alternatively, `Mojo::UserAgent` may seem complex, is a complete CPAN module for handling web service API due to its built-in support for JSON and XML processing as well as other extra features. Joelle Maslak's [solution in Perl 6](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-012/joelle-maslak/perl6/ch-3.p6) let us have a glimpse of `Cro::HTTP::Client` usage and a more consistent way of doing web development in Perl 6.

Three things that caught our attention this week.

First, **Athanasius** showed us that [parsing XML string](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-012/athanasius/perl5/ch-3.pl) is still a tricky thing even though with the help of [`XML::LibXML`](https://metacpan.org/pod/XML::LibXML) module. Using [`XML::Hash::XS`](https://metacpan.org/pod/XML::Hash::XS) module to convert an XML document to hash may help to remove the parsing code.

Second, **Steven Wilson** use of [`Perl6::Form`](https://metacpan.org/pod/Perl6::Form) module to prettify the output and turned it into something like a flash card as shown below. A nice touch over the dull console output, right? Is there any other CPAN modules that can make the console output more interesting?

    $ perl ch-3.pl help
     ===========================================
    | HELP                                      |
    |-------------------------------------------|
    | the activity of contributing to the       |
    | fulfillment of a need or furtherance of   |
    | an effort or purpose                      |
    |===========================================|
    | SYNONYMS                                  |
    |-------------------------------------------|
    | help, service, supporter, assistance,     |
    | attention, financial aid, care, assist,   |
    | helper, economic aid, avail, assistant,   |
    | tending, aid                              |
     ===========================================

Third, if you have problem access the API key and want to simulate local testing scenario, you can do what **Joelle Maslak** did with a [mock API server locally](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-012/joelle-maslak/perl5/ch-3-simulator.pl) through [`Mojolicious::Lite`](https://mojolicious.org/perldoc/Mojolicious/Lite).


***

## Blog Posts

***
Some additional write-ups from the participant from this challenges.

(1) [The Euclid Path with Perl 6](https://perl6.eu/euclid-path.html) by Arne Sommer.
Step-by-step walk through with Perl 6.

(2) [Perl Weekly Challenge - 012](https://engineering.purdue.edu/~mark/pwc-012.pdf) by Mark Senn.
He's back and another details write-up using Perl 6.

(3) [Perl Weekly Challenge 012](https://adamcrussell.livejournal.com/4250.html) by Adam Russell.
Is he going for another over-engineered solutions?

(4) [Euclid and Reduce](https://jacoby.github.io//2019/06/12/euclid-and-reduce.html) by Dave Jacoby.
Good write-up on how he solved the challenge #1.

(5) [Perl Weekly Challenge # 12: Euclid's Numbers and Directories](http://blogs.perl.org/users/laurent_r/2019/06/perl-weekly-challenge-12-euclids-numbers-and-directories.html) by Laurent Rosenfeld.
If you need to compare solutions between Perl 5 and 6.

(6) [Perl Weekly Challenge 12: Euclid Numbers and Common Paths](https://yzhernand.github.io/posts/perl-weekly-challenge-12/) by Yozen Hernandez.
Read up if you want to know more on using closure and iterator.

(7) [Perl Weekly Challenge 012: Non-Prime Euclid Numbers and the Common Path](http://blogs.perl.org/users/e_choroba/2019/06/perl-weekly-challenge-012-non-prime-euclid-numbers-and-the-common-path.html) by E. Choroba.
Complementary write-up to Laurent Rosenfeld.

(8) [Perl Weekly Challenge 12 – Euclid Numbers](https://digitalbarbedwire.com/2019/06/16/perl-weekly-challenge-12-euclid-numbers/) by Joelle Maslak.
A very detailed explanation on challenge #1.
