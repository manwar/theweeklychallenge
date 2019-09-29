---
title: "Kian-Meng Ang Weekly Review: Challenge - 026"
date: 2019-09-26T00:03:00+00:00
description: "Kian-Meng Ang Weekly Review: Challenge - #026."
type: post
image: images/blog/blog-header-15.jpg
author: Kian-Meng Ang
tags: ["Perl5", "Perl6"]
---
***
Continues from [previous week](/blog/review-challenge-025/).

Feel free to [submit a merge request or open a ticket](https://github.com/manwar/perlweeklychallenge) if you found any issues with this post. We highly appreciate and welcome your feedback.

For a quick overview, go through the [original tasks](/blog/perl-weekly-challenge-026/) and [recap](/blog/recap-challenge-026/) of the weekly challenge.


***
### Task #1
***

**CPAN** modules used: [`Const::Fast`](https://metacpan.org/pod/Const::Fast), [`Getopt::Long`](https://metacpan.org/pod/Getopt::Long), [`List::Util`](https://metacpan.org/pod/List::Util), [`Test::More`](https://metacpan.org/pod/Test::More), [`feature`](https://metacpan.org/pod/feature), [`strict`](https://metacpan.org/pod/strict), [`warnings`](https://metacpan.org/pod/warnings)

As with past challenges, simple task will lead to diverse solution. Sometimes
straight forward task is harder if we want to do thing differently.

Let's start with participants with simple and naive approach. No one-liner or
fancy approach. [Lubos Kolouch](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-026/lubos-kolouch/perl5/ch-1.pl) took such approach and it's a good solution to use as baseline for our comparison.

[Duane Powell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-026/duane-powell/perl5/ch-1.pl) took used regex substitution and count approach to solve this task. Similarly for [Daniel Mantovani](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-026/daniel-mantovani/perl5/ch-1.pl) but with a shorter one-liner version and [E. Choroba](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-026/e-choroba/perl5/ch-1.pl) with test cases.

Coincidentally, the [`List::Util`](https://metacpan.org/pod/List::Util) CPAN module was used by both [Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-026/ruben-westerberg/perl5/ch-1.pl) and [E. Choroba](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-026/e-choroba/perl5/ch-1.pl) to filter out unique characters. However, while the module was added to the later solution, it was not used.

Next, the split-grep-map approach was a common approach to solve this task. Participant who took such approach were [Athanasius](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-026/athanasius/perl5/ch-1.pl), [Laurent Rosenfeld](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-026/laurent-rosenfeld/perl5/ch-1.pl), [Roger Bell West](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-026/roger-bell-west/perl5/ch-1.pl), [Duncan C White](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-026/duncan-c-white/perl5/ch-1.pl), [Steven Wilson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-026/steven-wilson/perl5/ch-1.pl), [Colin Crain](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-026/colin-crain/perl5/ch-1.pl), and [Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-026/joelle-maslak/perl5/ch-1.pl).

On a related note, probably the most fluid comment we've read in a challenge by [Andrezgz](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-026/andrezgz/perl5/ch-1.pl).

```perl
print scalar                      # print the number
    grep {
        $_ =~ /[A-Za-z]/          # of alphabethic case insensitive characters
        && index($w2, $_) != -1   # that exist on the second word
    } split //, $w1;              # from each one of the first wor
```

And kudos to participants ([Lubos Kolouch](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-026/lubos-kolouch/perl5/ch-1.pl) and [E. Choroba](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-026/e-choroba/perl5/ch-1.pl)) who included test cases in their solutions. Good to see some edge cases were tested as well. However, there was no test case to verify case sensitivity of the comparison.

Both [Adam Russell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-026/adam-russell/perl5/ch-1.pl) and [Yet Ebreo](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-026/yet-ebreo/perl5/ch-1.pl) solutions were the example of polar opposite answer we've seen in a challenge. The former loves over-engineered a solution and the later preferred to shorten it as much as possible into one-liner. Either way, we welcome the diverse coding styles and approaches as everyone can learn something from it. And this is Perl, [TMTOWTDI](https://en.wikipedia.org/wiki/There%27s_more_than_one_way_to_do_it).


***
### Task #2
***

**CPAN** modules used: [`Const::Fast`](https://metacpan.org/pod/Const::Fast), [`Data::Types`](https://metacpan.org/pod/Data::Types), [`Getopt::Long`](https://metacpan.org/pod/Getopt::Long), [`List::Util`](https://metacpan.org/pod/List::Util), [`Math::Trig`](https://metacpan.org/pod/Math::Trig), [`Test::More`](https://metacpan.org/pod/Test::More), [`constant`](https://metacpan.org/pod/constant), [`feature`](https://metacpan.org/pod/feature), [`strict`](https://metacpan.org/pod/strict), [`utf8`](https://metacpan.org/pod/utf8), [`warnings`](https://metacpan.org/pod/warnings)

We can generally divided the submitted solutions into two groups, those who used [`Math::Trig`](https://metacpan.org/pod/Math::Trig) CPAN module to do the degree to radian or vice versa conversion and those who don't.

For this task, start with the solution by [Daniel Mantovani](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-026/daniel-mantovani/perl5/ch-2.pl) and [Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-026/joelle-maslak/perl5/ch-2.pl). The former have good written comment to let you have an overview of the problem and solution and the later served as a good comparison. Both solutions were just a top to bottom plain script with no subroutine. This was followed by solution [Roger Bell West](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-026/roger-bell-west/perl5/ch-2.pl) which shared similar coding style but at a very condense code.

Next, move to the solution by [Jaldhar H. Vyas](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-026/jaldhar-h-vyas/perl5/ch-2.pl) and [Adam Russell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-026/adam-russell/perl5/ch-2.pl)  where we start to see abstraction being applied here. Subroutines on conversion between radiand and degree were observed in their solutions.

Even further refinement, look no further at the solution by [Laurent Rosenfeld](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-026/laurent-rosenfeld/perl5/ch-2.pl), which was simple but comprehensive with full test coverage (likewise for [Steven Wilson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-026/steven-wilson/perl5/ch-2.pl)). Usually, we would recommend this submission as the first solution to read but for demonstrating the possible refactoring process flow, this should come later. Alternatively, the solution by [E. Choroba](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-026/e-choroba/perl5/ch-2.pl) illustrated the possible way to refine the code.

Some interesting stuff that caught our attention.

This was the first time we notice that organiser [MANWAR](https://metacpan.org/author/MANWAR)'s CPAN module, [`Data::Types`](https://metacpan.org/pod/Data::Types) was used by a participant as observed in the solution by [Athanasius](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-026/athanasius/perl5/ch-2.pl). Good that some participants tried to use different CPAN modules to solve the task.

Sometimes it's nice to the explicit about what subroutines being imported when using a CPAN module as observed in the code by [Andrezgz](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-026/andrezgz/perl5/ch-2.pl).

```perl
use Math::Trig qw/rad2deg deg2rad/;
```

***
### See Also
***

(1) [Stones and Jewels](http://donaldh.wtf/2019/09/stones-and-jewels/) by Donald Hunter


(2) [String Angling with Perl 6](https://perl6.eu/string-angling.html) by Arne Sommer


(3) [Perl Weekly Challenge 026](https://adamcrussell.livejournal.com/9318.html) by Adam Russell


(4) [Perl Weekly Challenge 26: Common Letters and Mean Angles](http://blogs.perl.org/users/laurent_r/2019/09/perl-weekly-challenge-26-common-letters-and-mean-angles.html) by Laurent Rosenfeld


(5) [Perl Weekly Challenge: Week 26](https://www.braincells.com/perl/2019/09/perl_weekly_challenge_week_26.html) by Jaldhar H. Vyas


(6) [Perl Weekly Challenge 26](https://blog.firedrake.org/archive/2019/09/Perl_Weekly_Challenge_26.html) by Roger Bell West


(7) [Perl Weekly Challenge 026: Stones and Jewels; Mean of Angles](http://blogs.perl.org/users/e_choroba/2019/09/perl-weekly-challenge-026-stones-and-jewels-mean-of-angles.html) by E. Choroba
