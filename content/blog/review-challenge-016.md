---
title: "Kian-Meng Ang Weekly Review: Challenge - 016"
date: 2019-07-18T00:00:00+00:00
description: "Kian-Meng Ang Weekly Review: Challenge - #016."
type: post
image: images/blog/blog-header-11.jpg
author: Kian-Meng Ang
tags: ["Perl5", "Perl6"]
---
***
Continues from [previous week](/blog/review-challenge-015/).

Feel free to [submit a merge request or open a ticket](https://github.com/manwar/perlweeklychallenge) if you found any issues with this post. We highly appreciate and welcome your feedback.

For a quick overview, read the [original tasks](https://perlweeklychallenge.org/blog/perl-weekly-challenge-016/) and [recap](https://perlweeklychallenge.org/blog/recap-challenge-016/) of the weekly challenge.

***
### Task #1
***

The **Pythagoras Pie Puzzle**, which was originally published in the [Pythagoras Magazine](https://pyth.eu/) and made known through the [Guardian's article](https://www.theguardian.com/science/2017/jun/19/did-you-solve-it-pythagorass-best-puzzles).

While this is a simple question, we loved how **Duncan C. White** [described](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-016/duncan-c-white/perl5/ch-1.pl) it, **_"Beautifully clearly described. Sounds straightforward."_**

The solution was quite straight forward but you just need to aware of long floating point numbers as shown in the output of **Duane Powell**'s [solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-016/duane-powell/perl5/ch-1.pl).

     ...
     96 3.73304861775776e-36 1.55543692406573e-37
     97 1.50877381634376e-37 4.66631077219721e-39
     98 4.57298455675327e-39 9.33262154439444e-41
     99 9.23929532895049e-41 9.33262154439446e-43
     100 9.33262154439446e-43 0

Some participants have used **CPAN** modules like [\`bignum\`](https://metacpan.org/pod/bignum) ([Gustavo Chaves](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-016/gustavo-chaves/perl5/ch-1.pl), [E Choroba](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-016/e-choroba/perl5/ch-1.pl), and [Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-016/joelle-maslak/perl5/ch-1.pl)) or [\`Math::BigFloat\`](https://metacpan.org/pod/Math::BigFloat) ([Roger Bell West](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-016/roger-bell-west/perl5/ch-1.pl)) to control the calculation and display of the floating-point precision. If we modified **Gustavo Chaves**'s [solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-016/gustavo-chaves/perl5/ch-1.pl) to show exact percentage of each slice, it would be something like this.

    ...
    0.03058753746406115626026916244078592
    0.026079900364094249021913706923196416
    0.02190711630583916917840751381548498944
    0.0181307467331183219200344090530061484032
    0.0147847998360064861475189681095877410160

Instead of just looping through and find the largest piece of pie, both [Jaldhar H. Vyas](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-016/jald%20%20%20%20%20%20har-h-vyas/perl5/ch-1.pl) and [Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-016/joelle-maslak/perl5/ch-1.pl) found the answer through pre-calculated array of results. [Gustavo Chaves](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-016/gustavo-chaves/perl5/ch-1.pl), [Michael Hamlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-016/michael-hamlin/perl5/ch-1.pl), [Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-016/ruben-westerberg/perl5/ch-1.pl), [Lubos Kolouch](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-016/lubos-kolouch/perl5/ch-1.pl), [Feng Chang](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-016/feng-chang/perl5/ch-1.pl), and [Andrezgz](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-016/andrezgz/perl5/ch-1.pl) were the participants that stopped the calculation once the largest pie have been found. Special mention of [Yozen Hernandez](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-016/yozen-hernandez/perl5/ch-1.pl) who have used [\`Benchmark::Forking\`](https://metacpan.org/pod/Benchmark::Forking) **CPAN** module to benchmark different strategies of solving the problem. The result as shown. Read his [blog post](https://yzhernand.github.io/posts/perl-weekly-challenge-16-1/) for further details on how he arrived on such result. Recommended read of the week!

    #                        Rate list_pie_remaining   track_last_share
    # list_pie_remaining  43203/s                 --               -88%
    # track_last_piece   368816/s               754%                 --

Our of all submitted solutions, the one by [Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-016/joelle-maslak/perl5/ch-1.pl) was probably the most unique.

For those who are curious about floating-points in Perl, we found a [cheat sheet](https://floating-point-gui.de/languages/perl/) while reviewing this task.

***
### Task #2
***

This was probably the hardest and demanding task of all challenges. Some participants have to rewrite existing reference solutions to fit their own coding style or ported solutions from other programming languages. Read through all the blog posts on how each participants learned, researched, discovered, and formulated their solutions for this task.

There were two groups of participants, those who used **CPAN** modules to decode the base58 or also known as [bitcoin alphabet](https://en.bitcoin.it/wiki/Base58Check_encoding) and those who wrote their own base58 decoder. For the **CPAN** modules consumer, [\`Crypt::Misc\`](https://metacpan.org/pod/release/MIK/CryptX-0.056/lib/Crypt/Misc.pm) ([Athanasius](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-016/athanasius/perl5/ch-2.pl)) and [\`Encode::Base58::GMP\`](https://metacpan.org/pod/Encode::Base58::GMP) ([Roger Bell West](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-016/roger-bell-west/perl5/ch-2.pl)). For those who implemented their own decoder, [Adam Russell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-016/adam-russell/perl5/ch-2.pl), [Daniel Mantovani](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-016/daniel-mantovani/perl5/ch-2.pl), [Laurent Rosenfeld](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-016/laurent-rosenfeld/perl5/ch-2.pl), [Yozen Hernandez](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-016/yozen-hernandez/perl5/ch-2.pl), [Duncan C White](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-016/duncan-c-white/perl5/ch-2.pl), [Feng Chang,](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-016/feng-chang/perl5/ch-2.pl) [Steven Wilson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-016/steven-wilson/perl5/ch-2.pl), [E. Choroba](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-016/e-choroba/perl5/ch-2.pl), and [Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-016/joelle-maslak/perl5/ch-2.pl).

While there were many ways used to declare the base58 alphabets which excluded certain characters, we found these two distinctive methods which help to improve readability. First one by [Daniel Mantovani](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-016/daniel-mantovani/perl5/ch-2.pl) (his solution have very well-written comments, same went to [Steven Wilson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-016/steven-wilson/perl5/ch-2.pl) and [Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-016/joelle-maslak/perl5/ch-2.pl) as well) and the second one by [E. Choroba](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-016/e-choroba/perl5/ch-2.pl).

Which is your preferred way?

**By Daniel Matovani**

    # we start by defining an array with the ordered symbols of the
    # base 58 representation
    # note the "holes" left to highlight the non existing characters
    # (number "0", upper case letter "I", upper case letter "O", and
    # lower case letter "l"

    my @base58 = qw {
      1 2 3 4 5 6 7 8 9
      A B C D E F G H   J K L M N   P Q R S T U V W X Y Z
      a b c d e f g h i j k   m n o p q r s t u v w x y z
    };

**By E. Choroba**

    my @b58 = grep /[^0IOl]/, 0 .. 9, 'A' .. 'Z', 'a' .. 'z';


The unorthodox solution of the week went to [Lubos Kolouch](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-016/lubos-kolouch/perl5/ch-2.pl). His solution basically delegate the validation to an online web service.

***
### Task #3
***

There was no solutions submitted for this task. Perhaps there was an error in obtaining the API key as [experienced](http://blogs.perl.org/users/athanasius/2019/07/perl-weekly-challenge-016.html) by **Athanasius**? Or maybe everyone spent more on time on **Task #2** which was quite demanding and don't have time left for this task? Nevertheless, do send in your answers, especially for those who have never try this task before.

***
### Blog Posts
***

Regular and new members who recently blogged about this test.

(1) [Pizza Party for 100](http://blogs.perl.org/users/veesh/2019/07/pizza-party-for-100.html) by **Veesh Goldman**

Brand new post by this participant and lively discussion on solving the first task mathematically.

(2) [Pythagoras Bitcoin with Perl 6](https://perl6.eu/pythagoras-bitcoin.html) by **Arne Sommer**

The usual step-by-step walk through in **Perl 6**. Numerous approaches to solve **Task #2** was an interesting read.

(3) [Perl Weekly Challenge 016](https://adamcrussell.livejournal.com/5613.html) by **Adam Russell**

Regular post on this week challenges.

(4) [Perl Weekly Challenge #016](http://blogs.perl.org/users/athanasius/2019/07/perl-weekly-challenge-016.html) by **Athanasius**

You know who got the smallest slice in **Task #1**? Do you want to learn more about bitcoin? Read his post.

(5) [Perl Weekly Challenge # 16: Pythagoras Pie](http://blogs.perl.org/users/laurent_r/2019/07/-perl-weekly-challenge-16-pythagoras-pie.html) by **Laurent Rosenfeld**

There was an one-liner solution to the first **Task #1** in case you missed it.

(6) [Perl Weekly Challenge # 16: Bitcoin Addresses](http://blogs.perl.org/users/laurent_r/2019/07/perl-weekly-challenge-16-bitcoin-addresses.html) by **Laurent Rosenfeld**

Full write-up on how he solved **Task #2**.

(7) [Perl Weekly Challenge 16: Torturing Your Party Guests With The Pythagoreas Pie Puzzle](https://yzhernand.github.io/posts/perl-weekly-challenge-16-1/) by **Yozen Hernandez**

Very detailed write-up on solving the **Task #1**, especially on benchmarking and visualizing the solution. Recommended read of the week.

(8) [Perl Weekly Challenge 16: Decoding a Bitcoin Address in Perl](https://yzhernand.github.io/posts/perl-weekly-challenge-16-2/) by **Yozen Hernandez**

He mentioned a good point about Bitcoin address, which is a very big number.

(9) [Perl Weekly Challenge 016: Pythagoras Pie Puzzle and Bitcoin Address Validation](http://blogs.perl.org/users/e_choroba/2019/07/perl-weekly-challenge-016-pythagoras-pie-puzzle-and-bitcoin-address-validation.html) by **E. Choroba**

If you need to visualize the missing slice of the pie in task #1 and difficulties he faced on **Task #2**.
