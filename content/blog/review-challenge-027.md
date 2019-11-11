---
title: "Kian-Meng Ang Weekly Review: Challenge - 027"
date: 2019-10-06T03:00:00+00:00
description: "Kian-Meng Ang Weekly Review: Challenge - #027."
type: post
image: images/blog/p5-review-challenge-027.jpg
author: Kian-Meng Ang
tags: ["Perl"]
---
***
Continues from [**previous week**](/blog/review-challenge-026/).

Feel free to [**submit a merge request or open a ticket**](https://github.com/manwar/perlweeklychallenge) if you found any issues with this post. We highly appreciate and welcome your feedback.

For a quick overview, go through the [**original tasks**](/blog/perl-weekly-challenge-027/) and [**recap**](/blog/recap-challenge-027/) of the weekly challenge.

***
### Task #1
***

**CPAN** modules used: [`Function::Parameters`](https://metacpan.org/pod/Function::Parameters), [`Getopt::Long`](https://metacpan.org/pod/Getopt::Long), [`List::Util`](https://metacpan.org/pod/List::Util), [`Modern::Perl`](https://metacpan.org/pod/Modern::Perl), [`Moose`](https://metacpan.org/pod/Moose), [`Regexp::Common`](https://metacpan.org/pod/Regexp::Common), [`Test::Exception`](https://metacpan.org/pod/Test::Exception), [`Test::More`](https://metacpan.org/pod/Test::More), [`feature`](https://metacpan.org/pod/feature), [`strict`](https://metacpan.org/pod/strict), [`utf8`](https://metacpan.org/pod/utf8), [`warnings`](https://metacpan.org/pod/warnings)

Start with the submission by [**Duncan C White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-027/duncan-c-white/perl5/ch-1.pl). His solution was the only one with visualization through [**Gnuplot**](http://gnuplot.info/). For those who want to try it out, you can test using the sample command below. While the plot was a good way look at the intersection graphically (alternatively, read the [**blog post**](https://perl6.eu/historical-intersection.html) by **Arne Sommer**), it doesn't handle all test data correctly, especially the test cases from [**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-027/e-choroba/perl5/ch-1.pl).

```bash
$ perl ch-1.pl 1 4 4 2 2 4 1
1
a=1, b=4, c=4, d=2, p=2, q=4, r=1, s=1
line 1 : y = -0.666666666666667 x + 4.66666666666667
line 2 : y = 3 x + -2
intersection at (1.81818181818182,3.45454545454546)
show results in gnuplot? y
```

Next, study the solution by [**Joelle Maslak**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-027/joelle-maslak/perl5/ch-1.pl) which was very comprehensive. The solution demonstrated different features of **Perl 5** like **method signatures**, **Unicode support**, **Object-oriented programming** through [**Moose**](https://metacpan.org/pod/Moose), and well-written comment explaining the solution.

For this task, the participant needs to handle many command line arguments and we've observed different ways of doing it in Perl. The common approach was just expanding these command line arguments into argument list as seen in the solution by [**Duane Powell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-027/duane-powell/perl5/ch-1.pl), [**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-027/laurent-rosenfeld/perl5/ch-1.pl), [**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-027/roger-bell-west/perl5/ch-1.pl) (using `shift`), [**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-027/lubos-kolouch/perl5/ch-1.pl), and [**Joelle Maslak**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-027/joelle-maslak/perl5/ch-1.pl). Or if you prefer array slicing as used by [**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-027/adam-russell/perl5/ch-1.pl), [**Yet Ebreo**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-027/yet-ebreo/perl5/ch-1.pl) and [**Duncan C White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-027/duncan-c-white/perl5/ch-1.pl)

Special mention of [**Andrezgz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-027/andrezgz/perl5/ch-1.pl), which provides us with clear instruction on how to pass arguments to its console app. Likewise for [**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-027/colin-crain/perl5/ch-1.pl) which have far more complex but tasteful way to handle co-ordinates as well as validation.

***
### Task #2
***

**CPAN** modules used: [`Class::Hash`](https://metacpan.org/pod/Class::Hash), [`Data::Dump`](https://metacpan.org/pod/Data::Dump), [`Data::Dumper`](https://metacpan.org/pod/Data::Dumper), [`Filter::Simple`](https://metacpan.org/pod/Filter::Simple), [`Function::Parameters`](https://metacpan.org/pod/Function::Parameters), [`Modern::Perl`](https://metacpan.org/pod/Modern::Perl), [`Moo`](https://metacpan.org/pod/Moo), [`Moose`](https://metacpan.org/pod/Moose), [`Storable`](https://metacpan.org/pod/Storable), [`Test::More`](https://metacpan.org/pod/Test::More), [`Tie::Scalar`](https://metacpan.org/pod/Tie::Scalar), [`Variable::Magic`](https://metacpan.org/pod/Variable::Magic), [`feature`](https://metacpan.org/pod/feature), [`lib`](https://metacpan.org/pod/lib), [`parent`](https://metacpan.org/pod/parent), [`strict`](https://metacpan.org/pod/strict), [`warnings`](https://metacpan.org/pod/warnings)

This was one of those task where participants really demonstrated different **Perl** features or **CPAN** modules to solve a problem.

Start with the solution by [**Duane Powell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-027/duane-powell/perl5/ch-2.pl) as we learned about basic OO usage in Perl without any external **CPAN** modules dependencies. Follow this by the solution by [**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-027/colin-crain/perl5/ch-2.pl) and [**Joelle Maslak**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-027/joelle-maslak/perl5/ch-2.pl). Both share some similarities but using external dependencies and conventional naming conventions.

The typical approach was to use the [`Tie::Scalar`](https://metacpan.org/pod/Tie::Scalar') **CPAN** module. Participants who took this approach were [**Mark Anderson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-027/mark-anderson/perl5/ch-2.pl), [**Ruben Westerberg**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-027/ruben-westerberg/perl5/ch-2.pl) and [**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-027/e-choroba/perl5/ch-2.pl) (very compact and clean solution).

And then there were those who've chosen to implement something similar using [`tie`](https://perldoc.perl.org/functions/tie.html) but without using the [`Tie::Scalar`](https://metacpan.org/pod/Tie::Scalar) **CPAN** module. [**Trenton Langer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-027/trenton-langer/perl5/ch-2.pl), [**Yet Ebreo**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-027/yet-ebreo/perl5/ch-2.pl) and [**Joelle Maslak**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-027/joelle-maslak/perl5/ch-2.pl) were the three participants who experimented with such method.

And [**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-027/roger-bell-west/perl5/ch-2.pl) solved this solution with magic, other to be precise, [`Variable::Magic`](https://metacpan.org/pod/Variable::Magic), a special **CPAN** module that let you add your own magic to any variable.

These were the participants that preferred unorthodox aproaches.

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-027/laurent-rosenfeld/perl5/ch-2.pl) used a simple yet powerful programming language feature, [**Closure**](https://en.wikipedia.org/wiki/Closure_(computer_programming)) in [**Perl**](https://perldoc.perl.org/perlfaq7.html#What's-a-closure%3f) to implement logging. This was also a good approach as **Closure** allows us to keep track of variables that gone out of the scope.

While [**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-027/lubos-kolouch/perl5/ch-2.pl) and [**Andrezgz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-027/andrezgz/perl5/ch-2.pl) have an interesting interpretation and literally solved the problem as it is using [`eval`](https://perldoc.perl.org/functions/eval.html).

Again, [**Duncan C White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-027/duncan-c-white/perl5/ch-2.pl) solved this problem by providing a visualization through [**Gnuplot**](http://gnuplot.info/) by implementing a simple numerical logging by operator.

Lastly, the participant that always willing to try and explore different approach, [**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-027/adam-russell/perl5/ch-2.pl) took it to another level by logging through [**source filter**](https://perldoc.perl.org/perlfilter.html). Read his [**blog post**](https://adamcrussell.livejournal.com/9508.html) on how he implemented this.

***
### SEE ALSO
***

(1) [**Historical Intersection with Perl 6**](https://perl6.eu/historical-intersection.html) by **Arne Sommer**

(2) [**Perl Weekly Challenge 027**](https://adamcrussell.livejournal.com/9508.html) by **Adam Russell**

(3) [**Perl Weekly Challenge 27: Intersection Point and Historical Values**](http://blogs.perl.org/users/laurent_r/2019/09/perl-weekly-challenge-27-intersection-point-and-historical-values.html) by **Laurent Rosenfeld**

(4) [**RogerBW's Blog: Perl Weekly Challenge 27**](https://blog.firedrake.org/archive/2019/09/Perl_Weekly_Challenge_27.html) by **Roger Bell_West**

(5) [**Perl Weekly Challenge 027: Intersection of Straight Lines and Historical Data**](http://blogs.perl.org/users/e_choroba/2019/09/perl-weekly-challenge-027-intersection-of-straight-lines-and-historical-data.html) by **E. Choroba**
