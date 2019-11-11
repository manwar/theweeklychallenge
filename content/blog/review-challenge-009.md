---
title: "Kian-Meng Ang Weekly Review: Challenge - 009"
date: 2019-05-30T00:00:00+00:00
description: "Kian-Meng Ang Weekly Review: Challenge - #009."
type: post
image: images/blog/p5-review-challenge-009.jpg
author: Kian-Meng Ang
tags: ["Perl"]
---

Continues from [previous post](/blog/review-challenge-008). Follow up on this week review of Perl Weekly Challenge #009 answers submitted by all the participants. Read the [full question list](/blog/perl-weekly-challenge-009) and the [recap of the challenge](/blog/recap-challenge-009/) to have an overview before we proceed with our review.

***

## Challenge #1

***
Since most first question is beginner friendly, there are two steps to solve the problem. First, we need to loop through a series of numbers. Next, determine whether a square number has at least five distinct digits. While this is quite a straight forward question, nevertheless, all participants have different approach to tackle this. For the first step on looping and when to end the loop, there is a `do and until` way ([Adam Russell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-009/adam-russell/perl5/ch-1.pl) and [Andrezgz](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-009/andrezgz/perl5/ch-1.pl)), `while` way ([Steven Wilson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-009/steven-wilson/perl5/ch-1.pl)), `while and exit` way ([Dave Jacoby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-009/dave-jacoby/perl5/ch-1.pl) and [Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-009/joelle-maslak/perl5/ch-1.pl)), `while and last` way ([Jaldhar H. Vyas](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-009/jaldhar-h-vyas/perl5/ch-1.pl) and [Yozen Hernandez](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-009/yozen-hernandez/perl5/ch-1.pl)), `postfix while` control structure way ([Daniel Mantovani](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-009/daniel-mantovani/perl5/ch-1.pl) and [Guillermo Ramos](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-009/guillermo-ramos/perl5/ch-1.pl)), `for` way ([Gustavo Chaves](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-009/gustavo-chaves/perl5/ch-1.pl) and [Maxim Nechaev](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-009/maxim-nechaev/perl5/ch-1.pl)), and lastly `for and last` way ([Athanasius](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-009/athanasius/perl5/ch-1.pl), [Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-009/ruben-westerberg/perl5/ch-1.pl), and [Laurent Rosenfeld](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-009/laurent-rosenfeld/perl5/ch-1.pl)).

Only two participants used iterator ([Dave Jacoby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-009/dave-jacoby/perl5/ch-1.pl) and [Laurent Rosenfeld](http://blogs.perl.org/users/laurent_r/2019/05/perl-weekly-challenge-9-square-numbers-and-functional-programming-in-perl.html)) to generate the series of number. Laurent pushed it further with [closures and anonymous code reference](http://blogs.perl.org/users/laurent_r/2019/05/perl-weekly-challenge-9-square-numbers-and-functional-programming-in-perl.html). Will we see more answers using such technique in coming challenges?

To determine a number has at least five distinct digits, it can done with several ways. Using hash to record which digits have been seen is the common approach used by most participants through `map` or `postfix for loop` ([Athanasius](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-009/athanasius/perl5/ch-1.pl), [Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-009/ruben-westerberg/perl5/ch-1.pl), [Guillermo Ramos](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-009/guillermo-ramos/perl5/ch-1.pl)), regex ([Yozen Hernandez](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-009/yozen-hernandez/perl5/ch-1.pl)), and using [`List::Util`](https://perldoc.perl.org/List/Util.html) module ([Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-009/joelle-maslak/perl5/ch-1.pl) and [Dave Jacoby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-009/dave-jacoby/perl5/ch-1.pl)). Off course, since we're using Perl and it's a simple problem, there is the [one-liner solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-009/laurent-rosenfeld/perl5/ch-1a.sh) by Laurent Rosenfeld.

The [unorthodox solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-009/yozen-hernandez/perl5/ch-1.pl) came from Yozen Hernandez. Note the calculation of square number and the use of regular expression.

    # Start with the root of the first $n-digit square
    # or closest integer
    my $root=  int( sqrt( 10**( $n - 1 ) ) );

    while ( 1 ) {

        # Use positive lookahead to get rid of duplicate digits
        ( my $dedup = $root**2 ) =~ s/(.)(?=.*?\1)//g;
        last if ( length($dedup) >= $n );
        $root++;
    }

    say $root**2;


***

## Challenge #2

***
Compare to challenge #1, this question was more complicate and most solutions were quite lengthy and it took a while to digest. Kudos to Dave Jacoby for written [lengthy comment on his solution and explanation on different Perl's quirky syntax usage](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-009/dave-jacoby/perl5/ch-2.pl). For a start, do look into the [solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-009/gustavo-chaves/perl5/ch-2.pl) by Gustavo Chaves which gave a quick overview on how ranking works. Generally, we can break down the solution into three step of getting the data either as array or hash, sorting the data in descending order, and lastly ranking the data according to different [ranking strategies](https://en.wikipedia.org/wiki/Ranking). Athanasius' [solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-009/athanasius/perl5/ch-2.pl) was a good example of a well-organized code that follows such structure. Furthermore, he also added additional ordinal and fractional ranking algorithms as well. The implementation of [Dispatch Table](https://en.wikipedia.org/wiki/Dispatch_table) that map to different subroutine ranking algorithms was nice addition to make the code even more readable and organized.

    const my %RANKINGS => (
        Standard   => \&rank_data_standard,
        Modified   => \&rank_data_modified,
        Dense      => \&rank_data_dense,
        Ordinal    => \&rank_data_ordinal,
        Fractional => \&rank_data_fractional,
    );

There were two approaches on how to structure the ranking codes, either use one subroutine to pick the ranking strategies ([Daniel Mantovani](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-009/daniel-mantovani/perl5/ch-2.pl) and [Guillermo Ramos](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-009/guillermo-ramos/perl5/ch-2.pl)), use three separate subroutines ([Adam Russell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-009/adam-russell/perl5/ch-2.pl), [Dave Jacoby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-009/dave-jacoby/perl5/ch-2.pl), [Athanasius](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-009/athanasius/perl5/ch-2.pl), [Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-009/ruben-westerberg/perl5/ch-2.pl), [Laurent Rosenfeld](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-009/laurent-rosenfeld/perl5/ch-2.pl), [Jaldhar H. Vyas](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-009/jaldhar-h-vyas/perl5/ch-2.pl), and [Steven Wilson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-009/steven-wilson/perl5/ch-2.pl)), or just a single loop to show case three different algorithms ([Andrezgz](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-009/andrezgz/perl5/ch-2.pl) and [Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-009/joelle-maslak/perl5/ch-2.pl)).

On a related note, the [`Tie::Hash::Rank`](https://metacpan.org/pod/Tie::Hash::Rank) and [`List::Rank`](https://metacpan.org/pod/List::Rank) are the only CPAN modules that maybe useful to solve this challenges. However, nobody is exploring this approach.

***

## Challenge #3

***

Only [Maxim Nechaev](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-009/maxim-nechaev/perl5/ch-3.pl) and [Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-009/joelle-maslak/perl5/ch-3.pl) have submitted their solutions to this challenge. Low submission most likely due to this is an optional question and Joelle's solution was probably the standard modern approach to solve this problem. Nevertheless, we should wait and see what alternative ways to solve this third challenge. Joelle's solution is similar to [last week challenge](https://perlweeklychallenge.org/blog/review-challenge-008/) with minor changes to API URL endpoints and parameters. On the other hand, Maxim provided an alternative solution to connect to the API using SMTP protocol instead of HTTP.

Related blog posts related to this week challenge.

1. [Arne Sommer](https://perl6.eu/squared-ranking.html). The regular solutions as well code walk through through using Perl 6.

2. [Adam Russell](https://adamcrussell.livejournal.com/3377.html). Very detailed write-up on his approaches to both solutions.

3. [Dave Jacoby](https://jacoby.github.io//2019/05/21/ranking-in-perl.html). Read his note on solving Challenge [#1](https://jacoby.github.io//2019/05/21/finding-first-square-with-five-distinct-digits-plus.html) and [#2](https://jacoby.github.io//2019/05/21/ranking-in-perl.html).

4. [Francis Whittle](https://rage.powered.ninja/2019/05/26/unique-square-and-rank.html). A different take on Perl 6 solutions for both challenges.

5. [Joelle Maslak](https://digitalbarbedwire.com/2019/05/23/solving-the-sparkpost-challenge/). Read this if you want to know how to solve **Challenge #3**.

6. [Laurent Rosenfeld](http://blogs.perl.org/users/laurent_r/2019/05/perl-weekly-challenge-9-squares-and-rankings.html). If you need to read and compare both Perl 5 and 6 solutions. His approach on using [iterator, closures, and anonymous code references](http://blogs.perl.org/users/laurent_r/2019/05/perl-weekly-challenge-9-square-numbers-and-functional-programming-in-perl.html) for **Challenge #1** is a must read.

7. [Yozen Hernandez](https://yzhernand.github.io/posts/perl-weekly-challenge-9/). If you want to know more on why he use regex for **Challenge #1** and how he use country data for **Challenge #2**.
