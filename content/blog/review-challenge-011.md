---
title: "Kian-Meng Ang Weekly Review: Challenge - 011"
date: 2019-06-13T00:00:00+00:00
description: "Kian-Meng Ang Weekly Review: Challenge - #011."
type: post
image: images/blog/p5-review-challenge-011.jpg
author: Kian-Meng Ang
tags: ["Perl5"]
---

Continues from [previous week](/blog/review-challenge-011).

For a quick overview, read through all [questions](/blog/perl-weekly-challenge-011/) and [recap](/blog/recap-challenge-011/) of the challenge first.

For those who are new to the weekly review post, the main purpose of weekly review is to document down interesting approaches of using Perl programming language to solve each week challenges. Code reading or review allows us to learn / relearn, discover / rediscover, and appreciate / reappreciate (some participants uses other programming languages in their day job) new, interesting, and quirky things accomplished with Perl (unfortunately Perl 5 for now). At the end of the day, everyone have fun, shared their knowledge, and learned something along the way.

***

## Challenge #1

***
Most of the submitted solutions were well documented or written in a self-documented way thus making code reading easier and more approachable. Most of the solutions were using [direct algebra calculation](https://www.mathsisfun.com/temperature-conversion.html), [Bisection method](https://en.wikipedia.org/wiki/Bisection_method), and [intersection between two lines or points](https://www.mathopenref.com/coordintersection.html).

**Andrezgz** caught our attention, as what he commented, ["simple, but effective"](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-011/andrezgz/perl5/ch-1.pl) way of using while loop without additional variable to store the [guard condition](https://en.wikipedia.org/wiki/Guard_(computer_science)).

    use strict;
    use warnings;

    my $f = 212;
    while ( $f - ($f - 32) * (100-0)/(212-32) ) { $f-- }; #Simple, but effective
    print $f;

Notable [solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-011/gustavo-chaves/perl5/ch-1.pl) by **Gustavo Chaves** where he used the same module, [`Math::MatrixReal`](https://metacpan.org/pod/Math::MatrixReal) to solve both Challenge #1 and #2\. As they said, ["kill two birds with one stone"](https://dictionary.cambridge.org/dictionary/english/kill-two-birds-with-one-stone). He also submitted [an unofficial shortest answer](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-011/gustavo-chaves/perl5) to this challenge or to any challenges ever.

    #!/usr/bin/env perl
    print "40\n";

Jokes aside, it's good that some participants were having fun and writing witty comments in their solutions. You know who you are.

***

## Challenge #2

***

This is a very straight forward question and simple question will always lead to creative and unique solutions. There are several approaches which includes simple loop, loop through [`map`](https://perldoc.perl.org/functions/map.html) function or repeating (*) characters, or using CPAN modules like [`Math::Matrix`](https://metacpan.org/pod/Math::Matrix), [`Math::MatrixReal`](https://metacpan.org/pod/Math::MatrixReal), [`PDL`](https://metacpan.org/pod/PDL), or [`PDL::MatrixOps`](https://metacpan.org/pod/PDL::MatrixOps). **Laurent Rosenfeld** demonstrated this through [different iterations of his solutions](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-011/laurent-rosenfeld/perl5). Read his [blog post](http://blogs.perl.org/users/laurent_r/2019/06/perl-weekly-challenge-11-fahrenheit-celsius-and-identity-matrix.html) for walk through of each iteration. Again, **Andrezgz's** [solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-011/andrezgz/perl5/ch-2.pl) caught our attention, while it's not really an array of matrix, it's just a creative way to print out an Identity Matrix.

    my $n = int($ARGV[0]) - 1;
    for (0..$n) { print " 0" x $_ . " 1" . " 0" x ($n - $_) . $/; }

As usual, shortest answer went to [E. Choroba](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-011/e-choroba/perl5/ch-2.pl), even though he used a CPAN module.

    #!/usr/bin/perl
    use warnings;
    use strict;

    use PDL;
    use PDL::MatrixOps;

    print identity(shift);

***

## Challenge #3

***

There were five participants ([Dave Jacoby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-011/dave-jacoby/perl5/ch-3.pl), [Trevor Vaughan (athanasius)](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-011/athanasius/perl5/ch-3.pl), [Feng Chang](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-011/feng-chang/perl5/ch-3.pl), [Steve Wilson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-011/steven-wilson/perl5/ch-3.pl), and [Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-011/joelle-maslak/perl5/ch-3.pl)) who submitted their answer to challenge #3 for this week. Hopefully we can see even more in coming weeks. One thing you will notice during code reading is that some participants don't mind using the latest and non-default Perl's features through [`feature` pragma](https://perldoc.perl.org/feature.html). Or also known as "I know what I'm doing". From [Dave Jacoby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-011/dave-jacoby/perl5/ch-3.pl).

    use feature qw{ postderef say signatures state switch fc };
    no warnings qw{ experimental::postderef experimental::smartmatch experimental::signatures };

Or from [Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-011/joelle-maslak/perl5/ch-3.pl).

    use feature 'signatures';
    no warnings 'experimental::signatures';

Or non-core feature like [`Switch`](https://metacpan.org/pod/Switch) module as coded by [Steve Wilson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-011/steven-wilson/perl5/ch-3.pl), which I believed was used to substitute the missing feature of [`switch`](https://perldoc.perl.org/perlsyn.html#Switch-Statements) in core Perl.

    switch ( $weather{"weather"}[0]{id} ) {
        case [ 200 .. 232 ] { $condition = "thundery"; $item = "golf club" }
        case [ 300 .. 321 ] { $condition = "drizzly";  $item = "lemon cake" }
        case [ 500 .. 531 ] { $condition = "rainy";    $item = "wellies" }
        case [ 600 .. 622 ] { $condition = "snowy";    $item = "sledge" }
        case [ 701 .. 781 ] {
            $condition = "low visability";
            $item      = "flashlight"
        }
        case [800] { $condition = "clear skies"; $item = "sunscreen" }
        case [ 801 .. 804 ] {
            $condition = "cloudy";
            $item      = "imagination, what shapes can you see?"
        }
    }

What are the common HTTP client modules used among the participant? The module name with count in parenthesis are [`Mojo::UserAgent`](https://metacpan.org/pod/Mojo::UserAgent) (2), [`LWP::UserAgent`](https://metacpan.org/pod/LWP::UserAgent) (1), [`WWW::Mechanize`](https://metacpan.org/pod/WWW::Mechanize) (1), and [`LWP::Simple`](https://metacpan.org/pod/LWP::Simple) (1). Neil Bowers have made a comprehensive comparison of [CPAN modules for making HTTP requests](http://neilb.org/reviews/http-requesters.html) and yet nobody is using [`HTTP::Tiny`](https://metacpan.org/pod/HTTP::Tiny)? One issue Perl programmer faced is the enormous amount of CPAN modules and it's difficulty to [choose a suitable and recommended module](http://blog.kablamo.org/2018/03/10/recommended-modules/).

For the amount of codes and features added by [Athanasius](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-011/athanasius/perl5/ch-3.pl), perhaps it would be suitable to turn it into a full blown CPAN module like `App::OpenWeatherMap`?

***

## Blog Posts

***
Additional blog posts by some of the participants for more intricate details.

(1) [FC Matrix with Perl 6](https://perl6.eu/fc-matrix.html) by [Arne Sommer](https://bbop.org/). If you want to read line-by-line explanation of Perl 6 solutions to these challenges, his post is a must read.

(2) [Perl Weekly Challenge 011](https://adamcrussell.livejournal.com/3900.html) by [Adam Russell](https://adamcrussell.livejournal.com/). Regular post on challenge.

(3) [Two Technical Posts about Temperature, Kinda](https://jacoby.github.io//2019/06/04/two-technical-posts-about-temperature-kinda.html) by [Dave Jacoby](https://jacoby.github.io/about/). Look into his write-up on the third challenge regarding API. He took another approach compare to Joelle Maslak.

(4) [Perl Weekly Challenge # 11: Fahrenheit Celsius and Identity Matrix](http://blogs.perl.org/users/laurent_r/2019/06/perl-weekly-challenge-11-fahrenheit-celsius-and-identity-matrix.html) by [Laurent Rosenfeld](https://laurent-rosenfeld.developpez.com/). If you need a comparison of Perl 11 (Perl 5 and Perl 6) solutions, then his blog is a good place to start.

(5) [Perl 6 Small Stuff #20: From anonymous one-line functions to full length MAINs with type and error checking](https://medium.com/@jcoterhals/perl-6-small-stuff-20-from-anonymous-one-line-functions-to-full-length-mains-with-type-and-error-3d3a69faabda) by [Jo Christian Oterhals](https://medium.com/@jcoterhals). Another discussion on using Perl 6.

(6) [Perl Weekly Challenge 11: Temperature Scales And Identity Matrices](https://yzhernand.github.io/posts/perl-weekly-challenge-11/) by [Yozen Hernandez](https://yzhernand.github.io/). Write-up on the mathematical solution and different approaches.

(7) [Perl Weekly Challenge 011: Fahrenheit, Celsius, and an Identity Matrix](http://blogs.perl.org/users/e_choroba/2019/06/perl-weekly-challenge-011-fahrenheit-celsius-and-an-identity-matrix.html) by [E. Choroba](https://www.perlmonks.org/?node_id=832495). For introduced [`PDL`](https://metacpan.org/pod/PDL) module to us when working with matrix.
