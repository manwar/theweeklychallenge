---
title: "Kian-Meng Ang Weekly Review: Challenge - 020"
date: 2019-08-18T00:00:00+00:00
description: "Kian-Meng Ang Weekly Review: Challenge - #020."
type: post
image: images/blog/blog-header-14.jpg
author: Kian-Meng Ang
tags: ["Perl5", "Perl6"]
---
***
Continues from [previous week](/blog/review-challenge-019/).

Feel free to [submit a merge request or open a ticket](https://github.com/manwar/perlweeklychallenge) if you found any issues with this post. We highly appreciate and welcome your feedback.

For a quick overview, go through the [original tasks](/blog/perl-weekly-challenge-020/) and [recap](/blog/recap-challenge-020/) of the weekly challenge.

We're going to review thing a bit differently for this week by listing down all the **CPAN** modules used for a particular task. The modules usage reflects three things, the coding style of a participant ([`Function::Parameters`](https://metacpan.org/pod/Function::Parameters)), the common used module ([`Math::Prime::Util`](https://metacpan.org/pod/Math::Prime::Util),) to solve a particular problem, and the trend of module usage ([`Modern::Perl`](https://metacpan.org/pod/Modern::Perl) which was seen quite often in the last few challenges.

***
### Task #1
***

The **CPAN** modules used for this task were [`Modern::Perl`](https://metacpan.org/pod/Modern::Perl), [`Const::Fast`](https://metacpan.org/pod/Const::Fast), [`Encode`](https://metacpan.org/pod/Encode), [`List::Util`](https://metacpan.org/pod/List::Util), [`Carp`](https://metacpan.org/pod/Carp), [`Function::Parameters`](https://metacpan.org/pod/Function::Parameters), [`Data::Dumper`](https://metacpan.org/pod/Data::Dumper), and [`Test::More`](https://metacpan.org/pod/Test::More).

Participants ([Mark Anderson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-020/mark-anderson/perl5/ch-1.pl), [Gustavo Chaves](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-020/gustavo-chaves/perl5/ch-1.pl), [Guillermo Ramos](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-020/guillermo-ramos/perl5/ch-1.pl), [Andrezgz](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-020/andrezgz/perl5/ch-1.pl), [E Choroba](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-020/e-choroba/perl5/ch-1.pl), and [Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-020/joelle-maslak/perl5/ch-1.pl)) whose solutions that can be turned into Perl one-liner (well, **Jaldhar H. Vyas** [did it](https://www.braincells.com/perl/2019/08/perl_weekly_challenge_week_20.html)) due to the expressiveness of the regex and brevity of the code. Example of such approach was the solution by [Gustavo Chaves](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-020/gustavo-chaves/perl5/ch-1.pl) as shown below. Note that `$&` is the variable that stores the matched string of the regex.

    my $string = shift or die "Usage: $0 STRING\n";

    say $& while $string =~ /(.)\g1*/g

Generally, the regex used (read up the good breakdown of the regex by [Veesh Goodman](http://blogs.perl.org/users/veesh/2019/08/solving-two-problems.html) and [Mark Seen](https://engineering.purdue.edu/~mark/pwc-020-1.pdf)) to split and group these characters were quite similar. The difference and [difficulty](http://blogs.perl.org/users/e_choroba/2019/08/perl-weekly-challenge-020-split-on-change-amicable-numbers.html) was on how to process the regex result. **Roger Bell West** used of [`pairmap`](https://metacpan.org/pod/List::Util#pairmap) function in his [solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-020/roger-bell-west/perl5/ch-1.pl) was quite unique as well.

Instead of using regex, some participants like [Adam Russell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-020/adam-russell/perl5/ch-1.pl), [Duane Powell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-020/duane-powell/perl5/ch-1.pl), [Dave Jacoby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-020/dave-jacoby/perl5/ch-1.pl), [Daniel Mantovani](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-020/daniel-mantovani/perl5/ch-1.pl), [Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-020/ruben-westerberg/perl5/ch-1.pl), [Lubos Kolouch](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-020/lubos-kolouch/perl5/ch-1.pl), [Pete Houston](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-020/pete-hou%20%20ston/perl5/ch-1.pl) opted for non-regex approach. Longer code but with increased readability.

For a comparison between two approaches within a solution, look into the [submission](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-020/feng-chang/perl5/ch-1.pl) by **Feng Chang**.

***
### Task #2
***

The **CPAN** modules used for this task were [`Math::Factor::XS`](https://metacpan.org/pod/Math::Factor::XS), [`ntheory`](https://metacpan.org/pod/ntheory), [`Thread`](https://metacpan.org/pod/Thread), [`Math::Prime::Util`](https://metacpan.org/pod/Math::Prime::Util), [`Memoize`](https://metacpan.org/pod/Memoize), [`Const::Fast`](https://metacpan.org/pod/Const::Fast), [`Getopt::Long`](https://metacpan.org/pod/Getopt::Long), [`List::Util`](https://metacpan.org/pod/List::Util), [`Math::BigInt`](https://metacpan.org/pod/Math::BigInt), [`Math::Prime::XS`](https://metacpan.org/pod/Math::Prime::XS), [`Function::Parameters`](https://metacpan.org/pod/Function::Parameters), [`Data::Dumper`](https://metacpan.org/pod/Data::Dumper), [`Modern::Perl`](https://metacpan.org/pod/Modern::Perl), and [`integer`](https://metacpan.org/pod/integer) (one of the Perl pragma or [pragmatic modules](https://metacpan.org/pod/distribution/perl/pod/perlmodlib.PL#Pragmatic-Modules)).

For a mathematical background of this task, read the [excellent write-up](http://blogs.perl.org/users/damian_conway/2019/08/with-friends-like-these.html) by **Damian Conway**.

As this task involved prime numbers, some participants have re-used ([Adam Russell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-020/adam-russell/perl5/ch-2.pl) and [Jaldhar H.  Vyas](https://www.braincells.com/perl/2019/08/perl_weekly_challenge_week_20.html)) their solutions in previous tasks for primality test. Others were using the available function from **CPAN** modules to find the factors of a number.

For this week, **Adam Russell** again try [another unconventional approach](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-020/adam-russell/perl5/ch-2.pl) by generating the [Amicable numbers](https://en.wikipedia.org/wiki/Amicable_numbers) using the power of threading. Read his [note on using threads](https://adamcrussell.livejournal.com/6526.html) in either **Perl 5** and **Perl 6**. We observed more and more participants were solving challenges in both Perl versions these days.

***
### Task #3
***

The **CPAN** modules used for this task were [`Getopt::Long`](https://metacpan.org/pod/Getopt::Long), [`Mojo::UserAgent`](https://metacpan.org/pod/Mojo::UserAgent), [`Mojo::Util`](https://metacpan.org/pod/Mojo::Util), [`Path::Tiny`](https://metacpan.org/pod/Path::Tiny), [`Perl6::Slurp`](https://metacpan.org/pod/Perl6::Slurp), and [`autodie`](https://metacpan.org/pod/autodie).

Our regular participant to this task, **Joelle Maslak** was the only participant again with both [Perl 5](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-020/joelle-maslak/perl5/ch-3.pl) and [Perl 6](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-020/joelle-maslak/perl6/ch-3.p6) solutions. While both answers looks somewhat similar, the **Perl 6** version looks more cleaner due to all the default and built-in features available in [Perl 6](https://perl6.org/) and [Cro libraries](https://cro.services/).

For those who haven't done this task before, do give it a try.

***
### Blog Posts
***

Some write-ups by the regular participants.

(1) [Solving two problems](http://blogs.perl.org/users/veesh/2019/08/solving-two-problems.html) by **Veesh Goldman**

(2) [Amicable Split with Perl 6](https://perl6.eu/amicable-split.html) by **Arne Sommer**

(3) [Perl Weekly Challenge - 020, Task #1](https://engineering.purdue.edu/~mark/pwc-020-1.pdf) by **Mark Senn**

(4) [Perl Weekly Challenge 020](https://adamcrussell.livejournal.com/6526.html) by **Adam Russell**

(5) [Perl Weekly Challenge - Week 20](https://jacoby.github.io/2019/08/05/perl-weekly-challenge-week-20.html) by **Dave Jacoby**

(6) [Perl Weekly Challenge # 20: Split String on Character Change and Amicable Numbers](http://blogs.perl.org/users/laurent_r/2019/08/perl-weekly-challenge-20-split-string-on-character-change-and-amicable-numbers.html) by **Laurent Rosenfeld**

(7) [Perl Weekly Challenge: Week 20](https://www.braincells.com/perl/2019/08/perl_weekly_challenge_week_20.html) by **Jaldhar H. Vyas**

(8) [Perl Weekly Challenge 020: Split on change + amicable numbers](http://blogs.perl.org/users/e_choroba/2019/08/perl-weekly-challenge-020-split-on-change-amicable-numbers.html) by **E. Choroba**

(9) [With friends like these...](http://blogs.perl.org/users/damian_conway/2019/08/with-friends-like-these.html) by **Damian Conway**
