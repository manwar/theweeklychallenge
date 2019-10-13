---
title: "Kian-Meng Ang Weekly Review: Challenge - 028"
date: 2019-10-13T00:00:00+00:00
description: "Kian-Meng Ang Weekly Review: Challenge - #028."
type: post
image: images/blog/p5-review-challenge-028.jpg
author: Kian-Meng Ang
tags: ["Perl5", "Perl6"]
---
***
Continues from [previous week](/blog/review-challenge-027/).

Feel free to [submit a merge request or open a ticket](https://github.com/manwar/perlweeklychallenge) if you found any issues with this post. We highly appreciate and welcome your feedback.

For a quick overview, go through the [original tasks](/blog/perl-weekly-challenge-028/) and [recap](/blog/recap-challenge-028/) of the weekly challenge.

***
### Task #1
***

**CPAN** modules used: [`Const::Fast`](https://metacpan.org/pod/Const::Fast), [`Cwd`](https://metacpan.org/pod/Cwd), [`File::Basename`](https://metacpan.org/pod/File::Basename), [`File::MMagic`](https://metacpan.org/pod/File::MMagic), [`File::Type`](https://metacpan.org/pod/File::Type), [`Function::Parameters`](https://metacpan.org/pod/Function::Parameters), [`Modern::Perl`](https://metacpan.org/pod/Modern::Perl), [`Moose`](https://metacpan.org/pod/Moose), [`Test::More`](https://metacpan.org/pod/Test::More), [`constant`](https://metacpan.org/pod/constant), [`feature`](https://metacpan.org/pod/feature), [`strict`](https://metacpan.org/pod/strict), [`utf8`](https://metacpan.org/pod/utf8), [`warnings`](https://metacpan.org/pod/warnings)

We would recommend that you start with the solution by [**Duncan C White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/duncan-c-white/perl5/ch-1.pl), [**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/colin-crain/perl5/ch-1.pl) and [**Joelle Maslak**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/joelle-maslak/perl5/ch-1.pl) for their intriguing and well-written comments.

The common approach found in most submissions was to use the [**file test operator**](https://perldoc.perl.org/5.30.0/perlfunc.html#Alphabetical-Listing-of-Perl-Functions) in **Perl**, where `-B` and `-T` was used to determine whether a file is a text or binary file.

Participants not using this approach were [**Veesh Goldman**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/veesh-goldman/perl5/ch-1.pl), [**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/adam-russell/perl5/ch-1.pl), [**Ruben Westerberg**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/ruben-westerberg/perl5/ch-1.pl), [**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/duncan-c-white/perl5/ch-1.pl), [**Feng Chang**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/feng-chang/perl5/ch-1.pl), [**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/steven-wilson/perl5/ch-1.pl) and [**Joelle Maslak**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/joelle-maslak/perl5/ch-1.pl).

***
### Task #2
***

**CPAN** modules used: [`Acme::Cow`](https://metacpan.org/pod/Acme::Cow), [`Carp`](https://metacpan.org/pod/Carp), [`Const::Fast`](https://metacpan.org/pod/Const::Fast), [`Data::Dumper`](https://metacpan.org/pod/Data::Dumper), [`Date::Manip`](https://metacpan.org/pod/Date::Manip), [`DateTime`](https://metacpan.org/pod/DateTime), [`DateTime::Set`](https://metacpan.org/pod/DateTime::Set), [`English`](https://metacpan.org/pod/English), [`Function::Parameters`](https://metacpan.org/pod/Function::Parameters), [`Getopt::Std`](https://metacpan.org/pod/Getopt::Std), [`Imager`](https://metacpan.org/pod/Imager), [`Modern::Perl`](https://metacpan.org/pod/Modern::Perl), [`POE`](https://metacpan.org/pod/POE), [`POSIX`](https://metacpan.org/pod/POSIX), [`SVG`](https://metacpan.org/pod/SVG), [`Term::ANSIColor`](https://metacpan.org/pod/Term::ANSIColor), [`Term::ANSIScreen`](https://metacpan.org/pod/Term::ANSIScreen), [`Term::ReadKey`](https://metacpan.org/pod/Term::ReadKey), [`Term::Screen::Uni`](https://metacpan.org/pod/Term::Screen::Uni), [`Text::Banner`](https://metacpan.org/pod/Text::Banner), [`Tie::IxHash`](https://metacpan.org/pod/Tie::IxHash), [`Time::HiRes`](https://metacpan.org/pod/Time::HiRes), [`Time::Piece`](https://metacpan.org/pod/Time::Piece), [`Tk`](https://metacpan.org/pod/Tk), [`boolean`](https://metacpan.org/pod/boolean), [`feature`](https://metacpan.org/pod/feature), [`sigtrap`](https://metacpan.org/pod/sigtrap), [`strict`](https://metacpan.org/pod/strict), [`utf8`](https://metacpan.org/pod/utf8), [`warnings`](https://metacpan.org/pod/warnings)

This was probably the only task where so many **CPAN** modules was used to solve this problem. And it seemed most participant were having a fun time building [**seven-segment LED display**](https://en.wikipedia.org/wiki/Seven-segment_display) clock. Participants who took this approach were [**Duane Powell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/duane-powell/perl5/ch-2.pl), [**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/dave-jacoby/perl5/ch-2.pl) (non-ticking), [**Prajith P**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/prajith-p/perl5/ch-2.pl), [**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/roger-bell-west/perl5/ch-2.pl) (non-ticking), [**Yet Ebreo**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/yet-ebreo/perl5/ch-2.pl), [**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/pete-houston/perl5/ch-2.pl), [**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/steven-wilson/perl5/ch-2.pl) (non-ticking), [**Andrezgz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/andrezgz/perl5/ch-2.pl), [**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/colin-crain/perl5/ch-2.pl) (non-ticking) and [**Julien Fiegehenn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/julien-fiegehenn/perl5/ch-2.pl).

Of course, there were participants like [**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/dave-cross/perl5/ch-2.pl), [**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/athanasius/perl5/ch-2.pl), [**Lars Thegler**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/lars-thegler/perl5/ch-2.pl), [**Ruben Westerberg**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/ruben-westerberg/perl5/ch-2.pl), [**Kivanc Yazan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/kivanc-yazan/perl5/ch-2.pl), [**Feng Chang**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/feng-chang/perl5/ch-2.pl), [**Laurent Rosenfeld**](http://blogs.perl.org/users/laurent_r/2019/10/perl-weekly-challenge-28-file-type-and-digital-clock.html) and [**Joelle Maslak**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/joelle-maslak/perl5/ch-2.pl) (non-ticking) who decided to solve this task using the bare minimum approach. Just display the digital clock as it is using the default text at the console. While the output was the same, different participant used different approach to refresh the digital clock as shown in table below.


    | Action                      | Dave Cross            | Laurent Rosenfeld | Kivanc Yazan            |
    |-----------------------------|-----------------------|-------------------|-------------------------|
    | Move cursor to first column | "\b\b\b\b\b\b\b\b"    | "\r"              | $console->Cursor(0, 0); |
    | Autoflush the output        | STDOUT->autoflush(1); | $\|++             | cls();                  |


A few things that caught our attention that deserved mentioned on its own.

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/adam-russell/perl5/ch-2.pl) demonstrated that you can write a digital clock using event driven approach through [`POE`](https://metacpan.org/pod/POE) **CPAN** module.

[**Julien Fiegehenn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/julien-fiegehenn/perl5/ch-2.pl)'s submission was well-coded and adequately explained on why he did things in a certain manner, especially on the generation of the alphabet. Likewise for [**Yet Ebreo**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/yet-ebreo/perl5/ch-2.pl) and [**Andrezgz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/andrezgz/perl5/ch-2.pl). **Julien** was also the only participant that attached a `cpanfile` file, which in our opinion, a nice touch to install all **CPAN** modules in one shot.

Both [**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/duncan-c-white/perl5/ch-2.pl) and [**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/e-choroba/perl5/ch-2.pl) were the only participants whose solutions used the Tk toolkit. And the later solution was the only submission where you can adjust refresh rate of the clock ticking.

If you don't want to generate your own segment display, use the [`Text::Banner`](https://metacpan.org/pod/Text::Banner) **CPAN** module as seen in the solution by [**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/pete-houston/perl5/ch-2.pl).

The most amusing solution came from [**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/lubos-kolouch/perl5/ch-2.pl). Embrace the talking barnyard animals.

***
### SEE ALSO
***

(1) [**Perl 6 Binary Clock**](https://perl6.eu/binary-clock.html) by **Arne Sommer**

(2) [**Perl Weekly Challenge 028**](https://adamcrussell.livejournal.com/9784.html) by **Adam Russell**

(3) [**Fake Seven-Segment Displays with Perl and SVG**](https://jacoby.github.io/2019/10/01/fake-sevensegment-displays-with-perl-and-svg.html) by **Dave Jacoby**

(4) [**Perl Weekly Challenge 28: File Type and Digital Clock**](http://blogs.perl.org/users/laurent_r/2019/10/perl-weekly-challenge-28-file-type-and-digital-clock.html) by **Laurent Rosenfeld**

(5) [**RogerBW's Blog: Perl Weekly Challenge 28**](https://blog.firedrake.org/archive/2019/10/Perl_Weekly_Challenge_28.html) by **Roger Bell_West**

(6) [**Perl Weekly Challenge 028: File Content and Digital Clock**](http://blogs.perl.org/users/e_choroba/2019/10/perl-weekly-challenge-028-file-content-and-digital-clock.html) by **E. Choroba**
