---
title: "Kian-Meng Ang Weekly Review: Challenge - 021"
date: 2019-08-25T00:00:00+00:00
description: "Kian-Meng Ang Weekly Review: Challenge - #021."
type: post
image: images/blog/p5-review-challenge-021.jpg
author: Kian-Meng Ang
tags: ["Perl"]
---
***
Continues from [previous week](/blog/review-challenge-020/).

Feel free to [submit a merge request or open a ticket](https://github.com/manwar/perlweeklychallenge) if you found any issues with this post. We highly appreciate and welcome your feedback.

For a quick overview, go through the [original tasks](/blog/perl-weekly-challenge-021/) and [recap](/blog/recap-challenge-021/) of the weekly challenge.


***
### Task #1
***

**CPAN** modules used: [bignum](https://metacpan.org/pod/bignum), [Carp](https://metacpan.org/pod/Carp), [Const::Fast](https://metacpan.org/pod/Const::Fast), [Getopt::Long](https://metacpan.org/pod/Getopt::Long), [Math::AnyNum](https://metacpan.org/pod/Math::AnyNum), [Math::Big](https://metacpan.org/pod/Math::Big), [Math::BigFloat](https://metacpan.org/pod/Math::BigFloat), [Math::Big](https://metacpan.org/pod/Math::Big), [Math::BigRat](https://metacpan.org/pod/Math::BigRat), [Math::NumberCruncher](https://metacpan.org/pod/Math::NumberCruncher), [Math::Symbolic](https://metacpan.org/pod/Math::Symbolic), [Modern::Perl](https://metacpan.org/pod/Modern::Perl), [Sidef](https://metacpan.org/pod/Sidef), [Test::More](https://metacpan.org/pod/Test::More) and [Text::Table::Tiny](https://metacpan.org/pod/Text::Table::Tiny).

The biggest takeaway for this task was the [solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-021/randy-lauen/perl5/ch-1.pl) by **Randy Lauen** where he did a comparison of different **CPAN** modules against the formulated calculation. Perl is known for its [TIMTOWTDI](https://en.wikipedia.org/wiki/There%27s_more_than_one_way_to_do_it) motto, but after so many weekly challenges, we can safely say, there's more than one **CPAN** module to use it. Checking against the recommended **CPAN** module list, [`Task::Kensho`](https://metacpan.org/pod/Task::Kensho), none was listed there and we can't seem to find anything mathematical related **CPAN** modules as well. Nothing was found from **kablamo**'s [recommended list](http://blog.kablamo.org/2018/03/10/recommended-modules/) as well.

    +------------------------------+-----------------------------------------------------+
    | Module                       | Euler's Number                                      |
    +------------------------------+-----------------------------------------------------+
    | Math::Big::euler             | 2.7182818284590452353602874713526624977572470937    |
    | Math::NumberCruncher::ECONST | 2.7182818284590452353602874713526624977572470937    |
    | Math::NumberCruncher::_e_    | 2.7182818284590452353602874713526624977572470936... |
    | Math::Symbolic::EULER        | 2.71828182845905                                    |
    | Math::AnyNum::euler          | 2.7182818284590452353602874713526624977572470937    |
    | Sidef Number.e               | 2.7182818284590452353602874713526624977572470937    |
    | bigrat::e                    | 2.718281828459045235360287471352662497757           |
    | Calculated e                 | 2.7182818284590452353602874713526625112110646491... |
    +------------------------------+-----------------------------------------------------+

***
### Task #2
***

**CPAN** modules used: [`Carp`](https://metacpan.org/pod/Carp), [`Data::Dumper`](https://metacpan.org/pod/Data::Dumper), [`Function::Parameters`](https://metacpan.org/pod/Function::Parameters), [`Modern::Perl`](https://metacpan.org/pod/Modern::Perl), [`Parse::RecDescent`](https://metacpan.org/pod/Parse::RecDescent), [`Test::More`](https://metacpan.org/pod/Test::More), [`URI`](https://metacpan.org/pod/URI), [`URI::Escape`](https://metacpan.org/pod/URI::Escape), [`URI`](https://metacpan.org/pod/URI), [`URI::Normalize`](https://metacpan.org/pod/URI::Normalize), [`URI::URL`](https://metacpan.org/pod/URI::URL), [`URL::Normalize`](https://metacpan.org/pod/URL::Normalize) and [`Parse::Yapp`](https://metacpan.org/pod/Parse::Yapp).

Solutions can be grouped into two ways, either reinvent the wheel or use existing CPAN modules. **Daniel Mantovani** [picked](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-021/daniel-mantovani/perl5/ch-2.pl) the later approach as there were too many edge cases. He had learned that [`URL::Normalize`](https://metacpan.org/pod/URL::Normalize) was "heavier" (external dependencies) compares to [`URI::Normalize`](https://metacpan.org/pod/URI::Normalize) but allows more customization. **Lubos Kolouch** also [picked](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-021/lubos-kolouch/perl5/ch-2.pl) the same approach and **CPAN** module. Likewise for [E. Choroba](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-021/e-choroba/perl5/ch-2.pl), [Adam Russell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-021/adam-russell/perl5/ch-2.pl), [Duane Powell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-021/duane-powell/perl5/ch-2.pl), and [Dave Cross](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-021/dave-cross/perl5/ch-2.pl) but using different **CPAN** modules.

[Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-021/ruben-westerberg/perl5/ch-2.pl), [Guillermo Ramos](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-021/guillermo-ramos/perl5/ch-2.pl), [Laurent Rosenfeld](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-021/laurent-rosenfeld/perl5/ch-2.pl), [Jaldhar H. Vyas](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-021/jaldhar-h-vyas/perl5/ch-2.pl), [Duncan C White](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-021/duncan-c-white/perl5/ch-2.pl), [Roger Bell West](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-021/roger-bell-west/perl5/ch-2.pl) and [Andrezgz](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-021/andrezgz%20%20/perl5/ch-2.pl), belongs to the camp that solved it just by using regex without external **CPAN** modules. URL normalization is a tedious process and there are many steps involved in parsing, normalizing, and reassembling. See the code snippet of **Jaldhar**'s [solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-021/jaldhar-h-vyas/perl5/ch-2.pl) shown below for the possible steps involved.

      say reassemble(
          decodeUnreserved(
              capitalizeEscape(
                  removeDefaultPort(
                      lowerCase(
                          parse(
                              shift
                          )
                      )
                  )
              )
          )
      );

Notable submissions by [Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-021/joelle-maslak/perl5/ch-2.pl) and [Adam Russell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-021/adam-russell/perl5/ch-2.pl) which used [`Parse::RecDescent`](https://metacpan.org/pod/Parse::RecDescent) and [`Parse::Yapp`](https://metacpan.org/pod/Parse::Yapp) **CPAN** module to generate their own URL parser to normalize a URL.

***
### Task #3
***

**CPAN** modules used: [`autodie`](https://metacpan.org/pod/autodie), [`Getopt::Long`](https://metacpan.org/pod/Getopt::Long), [`HTTP::API::Client`](https://metacpan.org/pod/HTTP::API::Client), [`Mojo::UserAgent`](https://metacpan.org/pod/Mojo::UserAgent), [`Mojo::Util`](https://metacpan.org/pod/Mojo::Util), [`Path::Tiny`](https://metacpan.org/pod/Path::Tiny) and [`Perl6::Slurp`](https://metacpan.org/pod/Perl6::Slurp).

Both [Randy Lauen](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-021/randy-lauen/perl5/ch-3.pl) and [Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-021/joelle-maslak/perl5/ch-3.pl) were the only participants to **Perl 5** and **Perl 6** solutions. While **Joelle** preferred [`Mojo::UserAgent`](https://metacpan.org/pod/Mojo::UserAgent), **Randy** opted for [`HTTP::API::Client`](https://metacpan.org/pod/HTTP::API::Client), a lightweight HTTP client **CPAN** module that was based on either [`LWP::UserAgent`](https://metacpan.org/pod/LWP::UserAgent) or [`Net::Curl::Simple`](https://metacpan.org/pod/Net::Curl::Simple) with built-in support for parsing JSON result. As usual, for those who haven't done this task before, do give it a try.


***
### See Also
***

(1) [Euler's URL with Perl 6](https://perl6.eu/eulers-url.html) by **Arne Sommer**


(2) [Implementing a spigot algorithm for the digits of e](https://adamcrussell.livejournal.com/6924.html) by **Adam Russell**


(3) [PWC Week 21 - Euler’s Constant and Big Numbers](https://jacoby.github.io/2019/08/13/pwc-week-21-eulers-constant-and-big-numbers.html) by **Dave Jacoby**


(4) [Perl Weekly Challenge # 21: Euler's Number and URL Normalizing](http://blogs.perl.org/users/laurent_r/2019/08/perl-weekly-challenge-21-eulers-number-and-url-normalizing.html) by **Laurent Rosenfeld**


(5) [Perl Weekly Challenge: Week 21](https://www.braincells.com/perl/2019/08/perl_weekly_challenge_week_21.html) by **Jaldhar H. Vyas**


(6) [RogerBW's Blog: Perl Weekly Challenge 21](https://blog.firedrake.org/archive/2019/08/Perl_Weekly_Challenge_21.html) by **Roger Bell West**
