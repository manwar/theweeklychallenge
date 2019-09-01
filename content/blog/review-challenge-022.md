---
title: "Kian-Meng Ang Weekly Review: Challenge - 022"
date: 2019-09-01T00:00:00+00:00
description: "Kian-Meng Ang Weekly Review: Challenge - #022."
type: post
image: images/blog/blog-header-16.jpg
author: Kian-Meng Ang
tags: ["Perl5", "Perl6"]
---
***
Continues from [previous week](/blog/review-challenge-021/).

Feel free to [submit a merge request or open a ticket](https://github.com/manwar/perlweeklychallenge) if you found any issues with this post. We highly appreciate and welcome your feedback.

For a quick overview, go through the [original tasks](/blog/perl-weekly-challenge-022/) and [recap](/blog/recap-challenge-022/) of the weekly challenge.

***
### Task #1
***

**CPAN** modules used: [`Const::Fast`](https://metacpan.org/pod/Const::Fast), [`Function::Parameters`](https://metacpan.org/pod/Function::Parameters), [`LWP::UserAgent`](https://metacpan.org/pod/LWP::UserAgent), [`List::Util`](https://metacpan.org/pod/List::Util), [`Math::Primality`](https://metacpan.org/pod/Math::Primality), [`Math::Prime::Util`](https://metacpan.org/pod/Math::Prime::Util), [`Memoize`](https://metacpan.org/pod/Memoize), [`Modern::Perl`](https://metacpan.org/pod/Modern::Perl), [`autodie`](https://metacpan.org/pod/autodie), [`boolean`](https://metacpan.org/pod/boolean), [`constant`](https://metacpan.org/pod/constant), [`feature`](https://metacpan.org/pod/feature), [`lib`](https://metacpan.org/pod/lib), [`strict`](https://metacpan.org/pod/strict), [`utf8`](https://metacpan.org/pod/utf8), [`warnings`](https://metacpan.org/pod/warnings)

We have yet another question related to [prime number](https://en.wikipedia.org/wiki/Prime_number), therefore most participants will reuse back their solution from previous challenge. For this time, we need to generate a series of [sexy primes](https://en.wikipedia.org/wiki/Sexy_prime).

Two common approaches used by particpants to generate the series either through addition or subtraction of difference of 6 between two prime numbers.

Participants whose solution belongs to the former group were [Duane Powell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-022/duane-powell/perl5/ch-1.pl), [Athanasius](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-022/athanasius/perl5/ch-1.pl), [Daniel Mantovani](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-022/daniel-mantovani/perl5/ch-1.pl), [Laurent Rosenfeld](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-022/laurent-rosenfeld/perl5/ch-1.pl), [Jaldhar H Vyas](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-022/jaldhar-h-vyas/perl5/ch-1.pl), [Roger Bell West](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-022/roger-bell-west/perl5/ch-1.pl), [Guillermo Ramos](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-022/guillermo-ramos/perl5/ch-1.pl), [Kian Meng Ang](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-022/kian-meng-ang/perl5/ch-1.pl), [Randy Lauen](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-022/randy-lauen/perl5/ch-1.pl)

For the later group, see the solution by [Adam Russell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-022/adam-russell/perl5/ch-1.pl), [Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-022/ruben-westerberg/perl5/ch-1.pl), [Yet Ebreo](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-022/yet-ebreo/perl5/ch-1.pl), [Duncan C White](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-022/duncan-c-white/perl5/ch-1.pl), [Steven Wilson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-022/steven-wilson/perl5/ch-1.pl), [Andrezgz](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-022/andrezgz/perl5/ch-1.pl), [E. Choroba](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-022/e-choroba/perl5/ch-1.pl), and [Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-022/joelle-maslak/perl5/ch-1.pl)

One quick way we learned about checking for primality as discovered by **Daniel Mantovani** was to use [regex](https://iluxonchik.github.io/regular-expression-check-if-number-is-prime/) as[shown](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-022/daniel-mantovani/perl5/ch-1.pl) below.

    sub is_prime {
        return ( 7 x shift ) !~ /^(77+)\1+$/;
    }

For those who use [`Math::Prime::Util`](https://metacpan.org/pod/Math::Prime::Util), **CPAN** module, **Randy Lauen** [demonstrated](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-022/randy-lauen/perl5/ch-1.pl) a better way to use the **CPAN** correctly and effectively through built-in iterator function. Similar but without use of any **CPAN** modules, see [**E Choroba**'s](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-022/e-choroba/perl5/ch-1.pl) solution.

[Yet Ebreo](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-022/yet-ebreo/perl5/ch-1.pl) decided to upheld the Perl way of writing obfuscated code by shorten his code into two lines.

***
### Task #2
***

**CPAN** modules used: [`Const::Fast`](https://metacpan.org/pod/Const::Fast), [`Data::Dumper`](https://metacpan.org/pod/Data::Dumper), [`English`](https://metacpan.org/pod/English), [`Getopt::Long`](https://metacpan.org/pod/Getopt::Long), [`List::Util`](https://metacpan.org/pod/List::Util), [`Modern::Perl`](https://metacpan.org/pod/Modern::Perl), [`Moose`](https://metacpan.org/pod/Moose), [`Test`](https://metacpan.org/pod/Test), [`Test::More`](https://metacpan.org/pod/Test::More), [`autodie`](https://metacpan.org/pod/autodie), [`bignum`](https://metacpan.org/pod/bignum), [`bytes`](https://metacpan.org/pod/bytes), [`constant`](https://metacpan.org/pod/constant), [`feature`](https://metacpan.org/pod/feature), [`lib`](https://metacpan.org/pod/lib), [`strict`](https://metacpan.org/pod/strict), [`warnings`](https://metacpan.org/pod/warnings)

For those who don't know [how LZW compression works](https://en.wikipedia.org/wiki/Lempel%E2%80%93Ziv%E2%80%93Welch), you can start with **Duane Powell**'s [solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-022/duane-powell/perl5/ch-2.pl). It's well commented and structured. If you prefer more concise but still readable code, look into **E. Choroba**'s [solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-022/e-choroba/perl5/ch-2.pl). **Laurent Rosenfeld** [wrote a good post](http://blogs.perl.org/users/laurent_r/2019/08/perl-weekly-challenge-22-sexy-prime-pairs-and-compression-algorithm.html) on this task as well.

Again, **Randy Lauen** [surprised us](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-022/randy-lauen/perl5/ch-2.pl) with the extra effort of writing test case to verify his solution in a nicely formatted layout.

    $ wget http://corpus.canterbury.ac.nz/resources/cantrbry.tar.gz
    $ tar zxvf cantrbry.tar.gz
    $ perl test-lzw.pl .
    +-----------------+---------+------------+--------+
    | File            | Size    | Compressed | Ratio  |
    +-----------------+---------+------------+--------+
    | alice29.txt     | 152089  | 70226      | 46.2%  |
    | asyoulik.txt    | 125179  | 62748      | 50.1%  |
    | cantrbry.tar.gz | 739071  | 1068298    | 144.5% |
    | ch-1.pl         | 332     | 442        | 133.1% |
    | ch-2.pl         | 2136    | 1946       | 91.1%  |
    | cp.html         | 24603   | 14948      | 60.8%  |
    | fields.c        | 11150   | 7084       | 63.5%  |
    | grammar.lsp     | 3721    | 2818       | 75.7%  |
    | kennedy.xls     | 1029744 | 365572     | 35.5%  |
    | lcet10.txt      | 426754  | 184752     | 43.3%  |
    | plrabn12.txt    | 481861  | 218914     | 45.4%  |
    | ptt5            | 513216  | 70242      | 13.7%  |
    | sum             | 38240   | 25054      | 65.5%  |
    | test-lzw.pl     | 2169    | 2120       | 97.7%  |
    | xargs.1         | 4227    | 3584       | 84.8%  |
    +-----------------+---------+------------+--------+

**Joelle Maslak** submitted probably the most comprehensive [solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-022/joelle-maslak/perl5/ch-2.pl) for this task at bit-level (likewise for [Guillermo Ramos](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-022/guillermo-ramos/perl5/ch-2.pl)).

***
### Task #3
***

**CPAN** modules used: None

There was none submission for this challenge. Again, for those who haven't try this task before, do give it a shot.

***
### SEE ALSO
***

(1) [Sexy Primes, LZW and Perl 6](https://perl6.eu/prime-lzw.html) by **Arne Sommer**

(2) [Perl Weekly Challenge - 022, Task #1](https://engineering.purdue.edu/~mark/pwc-022-1.pdf) by **Mark Senn**

(3) [Perl Weekly Challenge 022](https://adamcrussell.livejournal.com/7521.html) by **Adam Russell**

(4) [Perl Weekly Challenge # 22: Sexy Prime Pairs and Compression Algorithm](http://blogs.perl.org/users/laurent_r/2019/08/perl-weekly-challenge-22-sexy-prime-pairs-and-compression-algorithm.html) by **Laurent Rosenfeld**

(5) [Perl Weekly Challenge: Week 22](https://www.braincells.com/perl/2019/08/perl_weekly_challenge_week_22.html) by **Jaldhar H Vyas**

(6) [RogerBW's Blog: Perl Weekly Challenge 22](https://blog.firedrake.org/archive/2019/08/Perl_Weekly_Challenge_22.html) by **Roger Bell West**

(7) [Perl Weekly Challenge W022 - Sexy Primes](http://blogs.perl.org/users/yet_ebreo/2019/08/perl-weekly-challenge-w022.html) by **Yet Ebreo**
