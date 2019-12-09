---
title: "Kian-Meng Ang Weekly Review: Challenge - 036"
date: 2019-12-08T00:00:00+00:00
description: "Kian-Meng Ang Weekly Review: Challenge - #036."
type: post
image: images/blog/p5-review-challenge-036.jpg
author: Kian-Meng Ang
tags: ["Perl"]
---
***
***
Continues from [**previous week**](/blog/review-challenge-035/).

Feel free to [**submit a merge request or open a ticket**](https://github.com/manwar/perlweeklychallenge) if you found any issues with this post. We highly appreciate and welcome your feedback.

For a quick overview, go through the [**original tasks**](/blog/perl-weekly-challenge-036/) and [**recap**](/blog/recap-challenge-036/) of the weekly challenge.

Additional feedback to the our Perl Weekly Challenge’s [**Twitter account**](https://twitter.com/perlwchallenge?lang=en) is much appreciated.

***
***
## Task #1
***
***

**CPAN** modules used: [`Data::Validate::VIN`](https://metacpan.org/pod/Data::Validate::VIN), [`Function::Parameters`](https://metacpan.org/pod/Function::Parameters), [`List::MoreUtils`](https://metacpan.org/pod/List::MoreUtils), [`List::Util`](https://metacpan.org/pod/List::Util), [`Readonly`](https://metacpan.org/pod/Readonly), [`Syntax::Construct`](https://metacpan.org/pod/Syntax::Construct), [`Test::Exception`](https://metacpan.org/pod/Test::Exception), [`Test::More`](https://metacpan.org/pod/Test::More), [`boolean`](https://metacpan.org/pod/boolean), [`feature`](https://metacpan.org/pod/feature), [`strict`](https://metacpan.org/pod/strict), [`warnings`](https://metacpan.org/pod/warnings)

Read the background details on the [**Vehicle Identification Number (VIN)**](https://en.wikipedia.org/wiki/Vehicle_identification_number) first.

Next, look at the submissions by [**Duane Powell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-036/duane-powell/perl5/ch-1.pl) and [**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-036/lubos-kolouch/perl5/ch-1.pl). Try solve any problems in **Perl** with available **CPAN** module. For this task, there exists `Data::Validate::VIN` **CPAN** module. For those who are curious, you can reading the [**source code**](https://metacpan.org/release/Data-Validate-VIN/source/lib/Data/Validate/VIN.pm) of the **CPAN** module and compare with all the submissions here.

Following that, for submissions with good readability and easy to follow code, look no further into the solution by [**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-036/laurent-rosenfeld/perl5/ch-1.pl), [**Jaldhar H Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-036/jaldhar-h-vyas/perl5/ch-1.pl) and [**Javier Luque**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-036/javier-luque/perl5/ch-1.pl). Observe their clean coding style.

For this task, we need to predefine a set of values. Compare these submissions by [**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-036/adam-russell/perl5/ch-1.pl), [**Ruben Westerberg**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-036/ruben-westerberg/perl5/ch-1.pl), and [**Duncan C White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-036/duncan-c-white/perl5/ch-1.pl). See how they declare and initialize the hash table of the valid characters, weights, check digits, country codes, and manufacturers. We're not sure how **Duncan** obtained the list of data, but that was a large and long list.

Now, besides reading the blog on how each participant solved this task, you can read the detail comments written in the submission by [**Burkhard Nickels**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-036/burkhard-nickels/perl5/ch-1.pl) and [**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-036/colin-crain/perl5/ch-1.pl). These participants have put in great length in documenting their thoughts on solving this task.

When come to writing own test cases, look at the submission by [**Saif Ahmed**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-036/saiftynet/perl5/ch-1.pl), [**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-036/steven-wilson/perl5/ch-1.pl), and [**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-036/e-choroba/perl5/ch-1.pl). Reading these test cases will give us an idea on how the subroutines supposed to be used.

While we went through these submissions, the solution by [**Andrezgz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-036/andrezgz/perl5/ch-1.pl) caught our attention as shown below. [`CORE::` prefix](https://perldoc.perl.org/CORE.html) will enforce only the built-in function, in this case, `state` to be used.

```perl
  CORE::state $trans_key = {
      A=> 1, B=> 2, C=> 3, D=> 4, E=> 5, F=> 6, G=> 7, H=> 8,
      J=> 1, K=> 2, L=> 3, M=> 4, N=> 5,        P=> 7,        R=> 9,
             S=> 2, T=> 3, U=> 4, V=> 5, W=> 6, X=> 7, Y=> 8, Z=> 9,
  };
```

***
***
## Task #2
***
***

**CPAN** modules used: [`Algorithm::Combinatorics`](https://metacpan.org/pod/Algorithm::Combinatorics), [`Algorithm::Knapsack`](https://metacpan.org/pod/Algorithm::Knapsack), [`Box::Calc`](https://metacpan.org/pod/Box::Calc), [`Data::Dumper`](https://metacpan.org/pod/Data::Dumper), [`Data::PowerSet`](https://metacpan.org/pod/Data::PowerSet), [`Function::Parameters`](https://metacpan.org/pod/Function::Parameters), [`List::Util`](https://metacpan.org/pod/List::Util), [`Math::Combinatorics`](https://metacpan.org/pod/Math::Combinatorics), [`Modern::Perl`](https://metacpan.org/pod/Modern::Perl), [`Readonly`](https://metacpan.org/pod/Readonly), [`Test::Deep`](https://metacpan.org/pod/Test::Deep), [`Test::More`](https://metacpan.org/pod/Test::More), [`Tie::IxHash`](https://metacpan.org/pod/Tie::IxHash), [`constant`](https://metacpan.org/pod/constant), [`feature`](https://metacpan.org/pod/feature), [`strict`](https://metacpan.org/pod/strict), [`warnings`](https://metacpan.org/pod/warnings)

To understand the task at hand, read the background details of [**Knapsack Problem**](https://en.wikipedia.org/wiki/Knapsack_problem).

Start with the submission by [**Duncan C White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-036/duncan-c-white/perl5/ch-2.pl) (solved by hand), [**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-036/adam-russell/perl5/ch-2.pl) (simplest), and [**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-036/colin-crain/perl5/ch-2.pl) (detail step-by-step comment) to get an initial concept on how to solve it.

Next, using similar approach but coded in more verbose style, read the solutions by [**Ruben Westerberg**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-036/ruben-westerberg/perl5/ch-2.pl), [**Saif Ahmed**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-036/saiftynet/perl5/ch-2.pl), [**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-036/laurent-rosenfeld/perl5/ch-2.pl), [**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-036/roger-bell-west/perl5/ch-2.pl), and [**Andrezgz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-036/andrezgz/perl5/ch-2.pl).

Lastly, look into submissions which used CPAN modules (listed above) by [**Burkhard Nickels8**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-036/burkhard-nickels/perl5/ch-2.pl), [**Mark Anderson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-036/mark-anderson/perl5/ch-2.pl), and [**Duane Powell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-036/duane-powell/perl5/ch-2.pl). See how these **CPAN** modules helped in generating all possible combinations to the solutions.

Most unique approach came from [**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-036/e-choroba/perl5/ch-2.pl) which used an indicator function approach. Read his [**blog post**](http://blogs.perl.org/users/e_choroba/2019/12/perl-weekly-challenge-036-vin-validation-and-the-knapsack-problem.html) for further details.

***
***
## SEE ALSO
***
***

(1) [**Vin Knapsack Meets Raku**](https://raku-musings.com/vin-knapsack.html) by **Arne Sommer**

(2) [**VIN Validation**](https://adamcrussell.livejournal.com/12459.html) by **Adam Russell**

(3) [**Perl Weekly Challenge #36**](pearls.dyndnss.net) by **Burkhard Nickels**

(4) [**Perl Weekly Challenge 036: VIN Validation and the Knapsack Problem**](http://blogs.perl.org/users/e_choroba/2019/12/perl-weekly-challenge-036-vin-validation-and-the-knapsack-problem.html) by **E. Choroba**

(5) [**Perl Weekly Challenge – Week 36**](https://kevincolyer.wordpress.com/2019/11/29/perl-weekly-challenge-week-36/) by **Kevin Colyer**

(6) [**Perl Weekly Challenge 36: Vehicle Identification Numbers (VIN) and the Knapsack Problem**](http://blogs.perl.org/users/laurent_r/2019/12/perl-weekly-challenge-36-vehicle-identification-numbers-vin-and-the-knapsack-problem.html) by **Laurent Rosenfeld**
