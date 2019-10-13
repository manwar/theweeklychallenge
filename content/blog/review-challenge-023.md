---
title: "Kian-Meng Ang Weekly Review: Challenge - 023"
date: 2019-09-08T00:00:00+00:00
description: "Kian-Meng Ang Weekly Review: Challenge - #023."
type: post
image: images/blog/p5-review-challenge-023.jpg
author: Kian-Meng Ang
tags: ["Perl5"]
---
***
Continues from [previous week](/blog/review-challenge-022/).

Feel free to [submit a merge request or open a ticket](https://github.com/manwar/perlweeklychallenge) if you found any issues with this post. We highly appreciate and welcome your feedback.

For a quick overview, go through the [original tasks](/blog/perl-weekly-challenge-023/) and [recap](/blog/recap-challenge-023/) of the weekly challenge.


***
### Task #1
***

**CPAN** modules used: [`Carp`](https://metacpan.org/pod/Carp), [`Const::Fast`](https://metacpan.org/pod/Const::Fast), [`Function::Parameters`](https://metacpan.org/pod/Function::Parameters), [`Getopt::Long`](https://metacpan.org/pod/Getopt::Long), [`Getopt::Std`](https://metacpan.org/pod/Getopt::Std), [`List::Util`](https://metacpan.org/pod/List::Util), [`Modern::Perl`](https://metacpan.org/pod/Modern::Perl), [`Regexp::Common`](https://metacpan.org/pod/Regexp::Common), [`Test::Exception`](https://metacpan.org/pod/Test::Exception), [`Test::More`](https://metacpan.org/pod/Test::More), [`autodie`](https://metacpan.org/pod/autodie), [`constant`](https://metacpan.org/pod/constant), [`experimental`](https://metacpan.org/pod/experimental), [`feature`](https://metacpan.org/pod/feature), [`strict`](https://metacpan.org/pod/strict), [`utf8`](https://metacpan.org/pod/utf8), [`warnings`](https://metacpan.org/pod/warnings)

Out of all submissions, **Duane Powell**'s [submission](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-023/duane-powell/perl5/ch-1.pl) have the most appealing output which deserved mentioned on its own.

```bash
./ch-1.pl 5 5 9 2 8 1 6
order:  series:
1:      4,-7,6,-7,5
2:      -11,13,-13,12
3:      24,-26,25
4:      -50,51
5:      101

./ch-1.pl 10 1 2 3 4 5 6 7 8 9 10 10000
order:  series:
1:      1,1,1,1,1,1,1,1,1,9990
2:      0,0,0,0,0,0,0,0,9989
3:      0,0,0,0,0,0,0,9989
4:      0,0,0,0,0,0,9989
5:      0,0,0,0,0,9989
6:      0,0,0,0,9989
7:      0,0,0,9989
8:      0,0,9989
9:      0,9989
10:     9989
```

While we read through all the submitted solutions, we did not execute all the submitted scripts. And some participants have put great effort in touching up the output and it would be quite pity if we miss it somehow. Therefore, it would be nice if all participants can append their script output within the same submitted solution. The solution by [Walt Mankowski](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-023/walt-mankowski/perl5/ch-1.pl), [Duncan C White](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-023/duncan-c-white/perl5/ch-1.pl), and [Steven Wilson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-023/steven-wilson/perl5/ch-1.pl) were good examples of this.

**Athanasius** [took great effort](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-023/athanasius/perl5/ch-1.pl) in validating the command line options. Probably the most comprehensive we've seen so far for a simple script. The use of [`Regexp::Common`](https://metacpan.org/pod/Regexp::Common) **CPAN** module was a nice touch to it.

**E. Choroba**'s [submission](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-023/e-choroba/perl5/ch-1.pl) was the only answer with two implementations consists of recursive way and formulae with memoizing.

Which was your preferred way to generate the series?

By [Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-023/ruben-westerberg/perl5/ch-1.pl).

```perl
for (0..$order-1) {
    @values=map( { reduce {$a-$b} @values[$_, $_-1];} 1..@values-1);
}
```

By [Yet Ebreo](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-023/yet-ebreo/perl5/ch-1.pl).

```perl
(@list = map $list[$_]-$list[$_-1],1..$#list) for 1..$n;
```

***
### Task #2
***

**CPAN** modules used: [`Carp`](https://metacpan.org/pod/Carp), [`Const::Fast`](https://metacpan.org/pod/Const::Fast), [`Function::Parameters`](https://metacpan.org/pod/Function::Parameters), [`List::Util`](https://metacpan.org/pod/List::Util), [`Math::BigInt`](https://metacpan.org/pod/Math::BigInt), [`Math::Prime::Util`](https://metacpan.org/pod/Math::Prime::Util), [`Memoize`](https://metacpan.org/pod/Memoize), [`Modern::Perl`](https://metacpan.org/pod/Modern::Perl), [`bigint`](https://metacpan.org/pod/bigint), [`experimental`](https://metacpan.org/pod/experimental), [`feature`](https://metacpan.org/pod/feature), [`lib`](https://metacpan.org/pod/lib), [`ntheory`](https://metacpan.org/pod/ntheory), [`strict`](https://metacpan.org/pod/strict), [`utf8`](https://metacpan.org/pod/utf8), [`warnings`](https://metacpan.org/pod/warnings)

Another prime number related question and some participants decided to reuse and adapt their solutions from previous challenges.

We can group the solution into three categories of using a **CPAN** module to find the factor, using a **CPAN** module to generate prime numbers, or reimplement everything without or minimum use of **CPAN** modules.

Participants that choose the first strategy were [Mark Anderson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-023/mark-anderson/perl5/ch-2.pl) and [Athanasius](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-023/athanasius/perl5/ch-2.pl).

Participants in the second group were [Duane Powell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-023/duane-powell/perl5/ch-2.pl), [Roger Bell West](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-023/roger-bell-west/perl5/ch-2.pl), [Yet Ebreo](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-023/yet-ebreo/perl5/ch-2.pl), [Guillermo Ramos](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-023/guillermo-ramos/perl5/ch-2.pl), [Duncan C White](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-023/duncan-c-white/perl5/ch-2.pl), [Kian Meng Ang](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-023/kian-meng-ang/perl5/ch-2.pl), [E. Choroba](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-023/e-choroba/perl5/ch-2.pl), and [Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-023/joelle-maslak/perl5/ch-2.pl).

Participants that opted for non-CPAN modules solutions were [Adam Russell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-023/adam-russell/perl5/ch-2.pl), [Daniel Mantovani](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-023/daniel-mantovani/perl5/ch-2.pl), [Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-023/ruben-westerberg/perl5/ch-2.pl), [Laurent Rosenfeld](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-023/laurent-rosenfeld/perl5/ch-2.pl), [Walt Mankowski](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-023/walt-mankowski/perl5/ch-2.pl), [Jaldhar H Vyas](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-023/jaldhar-h-vyas/perl5/ch-2.pl), [Andrezgz](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-023/andrezgz/perl5/ch-2.pl), [Colin Crain](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-023/colin-crain/perl5/ch-2.pl), and [Randy Lauen](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-023/randy-lauen/perl5/ch-2.pl).

In **Athanasius**' [solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-023/athanasius/perl5/ch-2.pl), there was this piece of code that caught our attention as shown below. First, the [`BEGIN`](https://perldoc.perl.org/perlmod.html#BEGIN%2c-UNITCHECK%2c-CHECK%2c-INIT-and-END) block will execute first before any part of the code. Next, the `$|` or also known as [`$OUTPUT_AUTOFLUSH`](https://perldoc.perl.org/perlvar.html) was turned on (non-zero value) to auto-flushing the current STDOUT output and a newline after every print. Mark Jason Dominus have written a [good explanation on its usage](https://perl.plover.com/FAQs/Buffering.html).

```perl
BEGIN
{
    $| = 1;
    print "\n";
}
```

***
### Task #3
***

**CPAN** modules used: [`Const::Fast`](https://metacpan.org/pod/Const::Fast), [`Encode`](https://metacpan.org/pod/Encode), [`Function::Parameters`](https://metacpan.org/pod/Function::Parameters), [`Getopt::Long`](https://metacpan.org/pod/Getopt::Long), [`HTTP::Request`](https://metacpan.org/pod/HTTP::Request), [`JSON`](https://metacpan.org/pod/JSON), [`JSON::XS`](https://metacpan.org/pod/JSON::XS), [`LWP::Simple`](https://metacpan.org/pod/LWP::Simple), [`LWP::UserAgent`](https://metacpan.org/pod/LWP::UserAgent), [`List::UtilsBy`](https://metacpan.org/pod/List::UtilsBy), [`Modern::Perl`](https://metacpan.org/pod/Modern::Perl), [`Mojo::UserAgent`](https://metacpan.org/pod/Mojo::UserAgent), [`Net::Curl::Simple`](https://metacpan.org/pod/Net::Curl::Simple), [`Time::HiRes`](https://metacpan.org/pod/Time::HiRes), [`Tk`](https://metacpan.org/pod/Tk), [`Tk::ROText`](https://metacpan.org/pod/Tk::ROText), [`autodie`](https://metacpan.org/pod/autodie), [`diagnostics`](https://metacpan.org/pod/diagnostics), [`feature`](https://metacpan.org/pod/feature), [`open`](https://metacpan.org/pod/open), [`strict`](https://metacpan.org/pod/strict), [`utf8`](https://metacpan.org/pod/utf8), [`warnings`](https://metacpan.org/pod/warnings)

Compare to last challenge, we have more participants (10 to be exact) for this optional task. Besides the regular ([Athanasius](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-023/athanasius/perl5/ch-3.pl), [Guillermo Ramos](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-023/guillermo-ramos/perl5/ch-3.pl), [Randy Lauen](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-023/randy-lauen/perl5/ch-3.pl), and [Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-023/joelle-maslak/perl5/ch-3.pl) ), we have a few newcomers ([Mark Anderson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-023/mark-anderson/perl5/ch-3.pl), [Arne Sommer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-023/arne-sommer/perl5/ch-3.pl), [Yet Ebreo](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-023/yet-ebreo/perl5/ch-3.pl), [Duncan C White](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-023/duncan-c-white/perl5/ch-3.pl), [Andrezgz](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-023/andrezgz/perl5/ch-3.pl), and [Colin Crain](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-023/colin-crain/perl5/ch-3.pl)).

As with all past weekly challenges, higher submission rate correlates with the difficulty of a task. We have lots of submission due to simplicity of this task, which was just a straightforward HTTP request. As we observed, the easier the task, participants will get more creative with their solutions.

Two submissions that caught our eyes on how the participants presented the poem. [Athanasius](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-023/athanasius/perl5/ch-3.pl) decided to present the poem using [Tk](https://en.wikipedia.org/wiki/Tk_(software)), a cross-platform and long forgotten GUI toolkit. Note that installation of the `Tk` CPAN module will take a while. Similarly, [Guillermo Ramos](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-023/guillermo-ramos/perl5/ch-3.pl) choose to display random poem at the console but using a typewriter effect. You really need to try this out!

For those who haven't done this task yet, do give it a try.

***
### See Also
***

(1) [Random Differential Decomposition with Perl 6](https://perl6.eu/forward-prime.html) by **Arne Sommer**

(2) [Perl Weekly Challenge - 023, Task #1](https://engineering.purdue.edu/~mark/pwc-023-1.pdf) by **Mark Senn**

(3) [Perl Weekly Challenge 023](https://adamcrussell.livejournal.com/7762.html) by **Adam Russell**

(4) [Perl Weekly Challenge # 23: Difference Series and Prime Factorization](http://blogs.perl.org/users/laurent_r/2019/08/perl-weekly-challenge-23-difference-series-and-prime-factorization.html) by **Laurent Rosenfeld**

(5) [Perl Weekly Challenge: Week 23](https://www.braincells.com/perl/2019/09/perl_weekly_challenge_week_23.html) by **Jaldhar H Vyas**

(6) [RogerBW's Blog: Perl Weekly Challenge 23](https://blog.firedrake.org/archive/2019/08/Perl_Weekly_Challenge_23.html) by **Roger Bell West**

(7) [Perl Weekly Challenge W023 - Difference, Factors and Poem](http://blogs.perl.org/users/yet_ebreo/2019/09/perl-weekly-challenge-w023---forward-difference-series-prime-factors.html) by **Yet Ebreo**

(8) [Perl Weekly Challenge 023: Forward difference series & Prime decomposition](http://blogs.perl.org/users/e_choroba/2019/08/perl-weekly-challenge-023-forward-difference-series-prime-decomposition.html) by **E. Choroba**
