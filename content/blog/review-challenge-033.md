---
title: "Kian-Meng Ang Weekly Review: Challenge - 033"
date: 2019-11-17T00:00:00+00:00
description: "Kian-Meng Ang Weekly Review: Challenge - #033."
type: post
image: images/blog/p5-review-challenge-033.jpg
author: Kian-Meng Ang
tags: ["Perl"]
---
***
***
Continues from [**previous week**](/blog/review-challenge-032/).

Feel free to [**submit a merge request or open a ticket**](https://github.com/manwar/perlweeklychallenge) if you found any issues with this post. We highly appreciate and welcome your feedback.

For a quick overview, go through the [**original tasks**](/blog/perl-weekly-challenge-033/) and [**recap**](/blog/recap-challenge-033/) of the weekly challenge.

Additional feedback to the our Perl Weekly Challenge's [**Twitter account**](https://twitter.com/perlwchallenge?lang=en) is much appreciated.

***
***
## Task #1
***
***

**CPAN** modules used: [`Const::Fast`](https://metacpan.org/pod/Const::Fast), [`Data::Dumper`](https://metacpan.org/pod/Data::Dumper), [`English`](https://metacpan.org/pod/English), [`Getopt::Long`](https://metacpan.org/pod/Getopt::Long), [`IO::All`](https://metacpan.org/pod/IO::All), [`List::Util`](https://metacpan.org/pod/List::Util), [`Modern::Perl`](https://metacpan.org/pod/Modern::Perl), [`Mojo::File`](https://metacpan.org/pod/Mojo::File), [`feature`](https://metacpan.org/pod/feature), [`strict`](https://metacpan.org/pod/strict), [`utf8`](https://metacpan.org/pod/utf8), [`warnings`](https://metacpan.org/pod/warnings)

This was similar to last week challenge but at different granularity, counting character instead of word. Hence, those participants who've submitted their solutions last week will only need to tweak their answer a bit. Is there anything we can learn or observe for this week challenge? **Yes**, and quite a few things. This week we will compare similar approach between two or more participants which either share similar approach in solving the task or totally using the opposite way.

[**Fabrizio Poggi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/fabrizio-poggi/perl5/ch-1.pl) and [**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/dave-cross/perl5/ch-1.pl) showed us the opposite way of solving the problem through either hard-coded or dynamic way. A simple example of not using a loop against a loop. The submission by **Fabrizio** can be further refactored using the range of alphabet characters `a..z` as found in solution by [**Duane Powell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/duane-powell/perl5/ch-1.pl).

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/duncan-c-white/perl5/ch-1.pl) and [**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/e-choroba/perl5/ch-1.pl) have similar approach which use double `while` loop to split and count the frequency of character. The different was the coding style.

[**Andrezgz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/andrezgz/perl5/ch-1.pl), [**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/colin-crain/perl5/ch-1.pl), and [**Bwva**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/bwva/perl5/ch-1.pl) took the same approach of finding all characters in a line from a file, splitting it into an array of characters, and lowercase it before counting the frequency. Again, subtle differences in the personal coding style between them.

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/adam-russell/perl5/ch-1.pl) and [**Nazareno Delucca**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/ndelucca/perl5/ch-1.pl) also have a similar approach but the latter did it in a more dense and shorter version using [`map`](https://perldoc.perl.org/functions/map.html) function.

[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/steven-wilson/perl5/ch-1.pl) and [**Burkhard Nickels**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/burkhard-nickels/perl5/ch-1.pl). Between a solution that was written in an explicit manner against a implicit Perl one-liner. For maintainable code, the former is a better approach. [**Laurent Rosenfeld**](http://blogs.perl.org/users/laurent_r/2019/11/perl-weekly-challenge-33-count-letters-and-multiplication-tables.html) also have a few one-liner examples.

[**Mark Anderson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/mark-anderson/perl5/ch-1.pl) and [**Burkhard Nickels**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/burkhard-nickels/perl5/ch-1.pl) on using different **CPAN** modules to read the input file. `Mojo::File` and `IO::All`, which is the better choice or we just stick to `<>` then?

Some rather unique approach we noticed. The use of [`getc`](https://perldoc.perl.org/functions/getc.html) by [**Javier Luque**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/javier-luque/perl5/ch-1.pl) to read the next character of a file handler. And the use of [`\P{Alpha}`](https://perldoc.perl.org/perluniprops.html#Properties-accessible-through-%5cp%7b%7d-and-%5cP%7b%7d) by [**Joelle Maslak**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/joelle-maslak/perl5/ch-1.pl) and [`\p{XPosixLower}`](https://perldoc.perl.org/perluniprops.html#Properties-accessible-through-%5cp%7b%7d-and-%5cP%7b%7d) that matches the full range of Unicode or non-English characters that are considered as alphabetic.


***
***
## Task #2
***
***

**CPAN** modules used: [`Const::Fast`](https://metacpan.org/pod/Const::Fast), [`Data::Dumper`](https://metacpan.org/pod/Data::Dumper), [`Getopt::Long`](https://metacpan.org/pod/Getopt::Long), [`Modern::Perl`](https://metacpan.org/pod/Modern::Perl), [`PDL`](https://metacpan.org/pod/PDL), [`PDL::NiceSlice`](https://metacpan.org/pod/PDL::NiceSlice), [`Perl6::Form`](https://metacpan.org/pod/Perl6::Form), [`feature`](https://metacpan.org/pod/feature), [`open`](https://metacpan.org/pod/open), [`strict`](https://metacpan.org/pod/strict), [`utf8`](https://metacpan.org/pod/utf8), [`warnings`](https://metacpan.org/pod/warnings)

We've something similar and quite humourous in the past challenges, just show the result as it. And this week, that solution came from [**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/lubos-kolouch/perl5/ch-2.pl). We can understand the difficulty of calculating, formatting, and displaying the multiplication table for this task.

For code readability (subjective view) and density, we found the solution by [**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/duncan-c-white/perl5/ch-2.pl) and [**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/e-choroba/perl5/ch-2.pl) were easier to follow compare to others.

Instead of [`printf`](https://perldoc.perl.org/functions/printf.html) function to format the layout of the table, [**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/adam-russell/perl5/ch-2.pl) opted for alternative solution using the `Perl6::Form` **CPAN** module.

Look into the submission by [**Burkhard Nickels**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/burkhard-nickels/perl5/ch-2.pl) where he tried different approaches to generate the table. We love the use of `PDL` and `PDL::NiceSlice` CPAN module as well as his write-up on comparing different alternative ways in generating the multiplication table.

***
***
## SEE ALSO
***
***

(1) [**Perl Weekly Challenge 033**](https://adamcrussell.livejournal.com/11383.html) by **Adam Russell**

(2) [**Addition and Multiplication with Raku**](https://raku-musings.com/add-mul.html) by **Arne Sommer**

(3) [**Perl Weekly Challenge #33 Task #1: Count letters**](http://46.91.236.80:81/www/Perl/PWC/20191108_33/pwc33.html) by **Burkhard Nickels**

(4) [**Perl Weekly Challenge 033: Count Letters & Formatted Multiplication Table**](http://blogs.perl.org/users/e_choroba/2019/11/perl-weekly-challenge-033-count-letters-formatted-multiplication-table.html) by **E. Choroba**

(5) [**Perl Weekly Challenge: Week 33**](https://www.braincells.com/perl/2019/11/perl_weekly_challenge_week_33.html) by **Jaldhar H. Vyas**

(6) [**Perl Weekly Challenge – 033**](https://perlchallenges.wordpress.com/2019/11/05/perl-weekly-challenge-033/) by **Javier Luque**

(7) [**Perl Weekly Challenge 33: Count letters and Multiplication Tables**](http://blogs.perl.org/users/laurent_r/2019/11/perl-weekly-challenge-33-count-letters-and-multiplication-tables.html) by **Laurent Rosenfeld**

(8) [**RogerBW's Blog: Perl Weekly Challenge 33**](https://blog.firedrake.org/archive/2019/11/Perl_Weekly_Challenge_33.html) by **Roger Bell_West**

***
