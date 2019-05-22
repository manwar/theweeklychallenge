---
title: "Kian-Meng Ang Weekly Review: Challenge - 008"
date: 2019-05-22T10:00:00+00:00
description: "Kian-Meng Ang Review Challenge #008."
type: post
image: images/blog/blog-header-2.jpg
author: Kian-Meng Ang
tags: ["Perl5", "Perl6"]
---

Follow up on this week review of the Perl Weekly Challenge #008 of answers submitted by all the participants. Read the [full question list](https://perlweeklychallenge.org/blog/perl-weekly-challenge-008/) and the [recap of the challenge](https://perlweeklychallenge.org/blog/recap-challenge-008/) to have an overview before we proceed with our review.

***

## Challenge #1

***

Looking through all the submissions, there are several approaches used by these participants to calculate the first five [perfect numbers](https://en.wikipedia.org/wiki/Perfect_number) which are [6, 28, 496, 8128, and 33550336](https://en.wikipedia.org/wiki/List_of_perfect_numbers). The first approach is to calculate by brute force ([Adam Russell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-008/adam-russell/perl5/ch-1.pl), [Dave Jacoby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-008/dave-jacoby/perl5/ch-1.pl), [Gustavo Chaves](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-008/gustavo-chaves/perl5/ch-1.pl), [Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-008/ruben-westerberg/perl5/ch-1.pl), [Laurent Rosenfeld](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-008/laurent-rosenfeld/perl5/ch-1a.pl), and [Guillermo Ramos](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-008/guillermo-ramos/perl5/ch-1.pl)). Result was slow ([took a few hours](https://adamcrussell.livejournal.com/2607.html)) as the bottleneck is on the calculation of fifth perfect number, a very large number, as in around 33 millions. This is a time complexity or [O(n)](https://en.wikipedia.org/wiki/Big_O_notation) problem where we have to iterate through all the numbers lesser than n. A better or optimized approach was to generate the series using algorithm through [Euclid–Euler theorem](https://en.wikipedia.org/wiki/Euclid%E2%80%93Euler_theorem) ([Alicia Bielsa](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-008/alicia-bielsa/perl5/ch-1.pl), [Maxim Nechaev](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-008/maxim-nechaev/perl5/ch-1.pl), [Athanasius](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-008/athanasius/perl5/ch-1.pl), [Daniel Mantovani](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-008/daniel-mantovani/perl5/ch-1.pl), [Laurent Rosenfeld](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-008/laurent-rosenfeld/perl5/ch-1b.pl), [Jaldhar H. Vyas](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-008/jaldhar-h-vyas/perl5/ch-1.pl), [Guillermo Ramos](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-008/guillermo-ramos/perl5/ch-1a.pl), [James Smith](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-008/james-smith/perl5/ch-1.pl), and [Yozen Hernandez](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-008/yozen-hernandez/perl5/ch-1.pl)). The shortest and Perl way answer using the Euclid-Euler theorem belongs to [James Smith](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-008/james-smith/perl5/ch-1.pl). Read his [write-up](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-008/james-smith) on his approach to tackle this problem.

    use feature qw(say);
    use List::Util qw(notall);
    my $q = 1;
    foreach(1..7) {
      ($q<<=1)++; ## $q is a sequence of the form 2^n-1;
      redo if notall { $q%$_ } 2..($q-1); ## Only contine if $q is mersenne prime
      say $q*($q+1)/2;
    }

One interesting observation while went through all these answers was how common the [`List::Util`](https://perldoc.perl.org/List/Util.html) module being used and yet, in totally different manners. Even though the approach to solve the question was similar, different participants have different coding styles. Hence, we have seen [`sum`](https://perldoc.perl.org/List/Util.html#sum), [`uniqnum`](https://perldoc.perl.org/List/Util.html#uniqnum), [`sum0`](https://perldoc.perl.org/List/Util.html#sum0), and [`notall`](https://perldoc.perl.org/List/Util.html#notall) functions being applied differently.

***

## Challenge #2

***

This is a straightforward question and some participant should have already solved it in challenge #2 in [Perl Weekly Challenge #003](https://www.kianmeng.org/2019/04/perl-weekly-challenge-003-2019-week-15.html) to display [Pascal's triangle](https://en.wikipedia.org/wiki/Pascal%27s_triangle) in tree or triangle form. To center a list of string, we need three steps. First, we need to find the longest length of the string from the list. If we don't want to use external module, we can do it using the default language constructs. For example, Laurent Rosenfeld [calculated the maximum length](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-008/laurent-rosenfeld/perl5/ch-2.pl) by simply looping through all the lines' length.

    my $max_size = 0;
    for my $str (@_) {
        my $length = length $str;
        $max_size = $length if $length > $max_size;
    }

While Ruben Westerberg used an [one-liner approach](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-008/ruben-westerberg/perl5/ch-2.pl).

    my $max=0;
    map { chomp; ($max < length($_ )) ? $max=length($_):();} @_;

And Guillermo Ramos used a more explicit [map-reduce approach](https://en.wikipedia.org/wiki/MapReduce).

    use List::Util qw(max reduce);
    ......
    my $maxlen = reduce { max($a, length $b) } 0, @_;

Meanwhile, Adam Russell used an unorthodox approach by [using `eval` and `tr`](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-008/adam-russell/perl5/ch-2.pl) to calculate each line length.

    foreach my $line (@words){
        $line_length{$i} = do{
            $line =~ tr/ [a-z][A-Z]//;
        };
        $max_length = $line_length{$i} if $line_length{$i} > $max_length;
        $i++;
    }

Next, we find the number of space to prepend to the current line of string by
calculating the difference of the longest string length and current line and
divided it by 2\. Almost all participants was using this formulae. The
solution by [Gustavo
Chaves](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-008/gustavo-chaves/perl5/ch-2.pl)
illustrates this succinctly.

    sub center {
        my @lines = @_;
        my $max = max map {length} @lines;
        return map {' ' x (($max - length) / 2) . $_} @lines;
    }

And off course, there will a relevant CPAN module, [`String::Pad`](https://metacpan.org/pod/String::Pad), in this case, that have such functionality.

***

## Challenge #3

***

Joelle Maslak is the only participant who took up this last and optional challenge. Nevertheless, the solution was [featureful](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-008/joelle-maslak/perl5/ch-3.readme), comprehensive, and very well coded. Furthermore, it was also one of the earliest submissions and there were even two versions existed for [Perl 5](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-008/joelle-maslak/perl5/ch-3.pl) and [Perl 6](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-008/joelle-maslak/perl6/ch-3.p6). Hopefully, this solution can turned into a full featured Perl module or console app. There are a few things to take note from the reading the code of this script. It's okay to use [`signatures` feature](https://perldoc.perl.org/feature.html#The-'signatures'-feature) or subroutine signature even though it's still under experimental since it was [first released in v5.20](https://www.effectiveperlprogramming.com/2015/04/use-v5-20-subroutine-signatures/). If you're developing for internal system and don't release your code for external consumption, then it's a good choice to use this. Subroutine signature did reduce the need for [parameter assignment](https://www.perl.com/article/72/2014/2/24/Perl-levels-up-with-native-subroutine-signatures/). The use of [`Perl6::Slurp`](https://metacpan.org/pod/Perl6::Slurp) module was a deliberated choice since the author have submitted solutions for both Perl 5 and 6 and want to maintain compability and minimize changes.

Related blog posts related to this week challenge.

1) Arne Sommer gave us a walk through on solving both problem in Perl 6 especially how long it took to calculate the fifth perfect numbers.

2) Adam Russel wrote about [different approaches](https://adamcrussell.livejournal.com/2607.html) on optimizing the
perfect numbers calculation from brute force, algorithmic, parallelization by [threading](https://adamcrussell.livejournal.com/3146.html), and delegation by [integrating C++ and Perl with SWIG](https://adamcrussell.livejournal.com/2850.html).

3) Dave Jacoby [blogged](https://jacoby.github.io//2019/05/15/finding-perfect-numbers-in-perl.html)
about the difference about brute force and algorithmic approach.

4) Laurent Rosenfeld [provided us](http://blogs.perl.org/users/laurent_r/2019/05/perl-weekly-challenge-8-perfect-numbers-and-centered-output.html) with mathematical background on different algorithmic approaches in calculating Perfect numbers.

5) Francis Whittle wrote about Perl 6 solutions [post](https://rage.powered.ninja/2019/05/15/squaring-perfect-centre.html) on both challenges.

6) Simon Proctor also wrote another Perl 6 solution [post](http://www.khanate.co.uk/blog/2019/05/14/perl-weekly-challenge-part-8/).
