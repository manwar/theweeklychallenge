---
title: "Kian-Meng Ang Weekly Review: Challenge - 029"
date: 2019-10-17T03:00:00+00:00
description: "Kian-Meng Ang Weekly Review: Challenge - #029."
type: post
image: images/blog/blog-header-15.jpg
author: Kian-Meng Ang
tags: ["Perl5", "Perl6"]
---
***
Continues from [previous week](/blog/review-challenge-028/).

Feel free to [submit a merge request or open a ticket](https://github.com/manwar/perlweeklychallenge) if you found any issues with this post. We highly appreciate and welcome your feedback.

For a quick overview, go through the [original tasks](/blog/perl-weekly-challenge-029/) and [recap](/blog/recap-challenge-029/) of the weekly challenge.


***
### Task #1
***

**CPAN** modules used: [`Data::Dumper`](https://metacpan.org/pod/Data::Dumper), [`Function::Parameters`](https://metacpan.org/pod/Function::Parameters), [`Inline`](https://metacpan.org/pod/Inline), [`JSON`](https://metacpan.org/pod/JSON), [`List::Util`](https://metacpan.org/pod/List::Util), [`Modern::Perl`](https://metacpan.org/pod/Modern::Perl), [`Parse::RecDescent`](https://metacpan.org/pod/Parse::RecDescent), [`Test::Deep`](https://metacpan.org/pod/Test::Deep), [`Test::More`](https://metacpan.org/pod/Test::More), [`Text::Glob::Expand`](https://metacpan.org/pod/Text::Glob::Expand), [`feature`](https://metacpan.org/pod/feature), [`lib`](https://metacpan.org/pod/lib), [`strict`](https://metacpan.org/pod/strict), [`utf8`](https://metacpan.org/pod/utf8), [`warnings`](https://metacpan.org/pod/warnings)

For a good write-up of the problem, read the explanation of the problem at [Rosetta Code](https://rosettacode.org/wiki/Brace_expansion).

Let's start with the shortest and simplest solution. Look into the submission by [Ulrich Rieke](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/ulrich-rieke/perl5/ch-1.pl). The solution works as provided there is no whitespace within the curly braces. Note that curly braces was not passed to the Perl script as it have already parsed by the shell.

```perl
  #!/usr/bin/perl ;
  use strict ;
  use warnings ;

  #works only if there is no whitespace within the expansion bracket!
  my $howoften = @ARGV - 2 ;
  for my $i (1..$howoften) {
    print "$ARGV[0] $ARGV[ $i ] $ARGV[-1]\n" ;
  }
```

The next group of solution resort to using regex to parse and expand values within the curly braces. And it should wworks (quick glance of the code but we did not test each and every one) with spaces between items within the curly braces. [Adam Russell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/adam-russell/perl5/ch-1.pl), [Dave Cross](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/dave-cross/perl5/ch-1.pl), [Laurent Rosenfeld](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/laurent-rosenfeld/perl5/ch-1.pl), [Prajith P](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/prajith-p/perl5/ch-1.pl), [Rage311](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/rage311/perl5/ch-1.pl), [Lars Thegler](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/lars-thegler/perl5/ch-1.pl), [Jaldhar H. Vyas](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/jaldhar-h-vyas/perl5/ch-1.pl), [Steven Wilson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/steven-wilson/perl5/ch-1.pl), and [Yet Ebreo](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/yet-ebreo/perl5/ch-1.pl).

Only two participants, [Duane Powell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/duane-powell/perl5/ch-1.pl) and [Lubos Kolouch](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/lubos-kolouch/perl5/ch-1.pl) decided to use `Text::Glob::Expand` to solve this. Similarly, the solution by [E. Choroba](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/e-choroba/perl5/ch-1.pl) works in similar manner but using `glob` function instead. Coming from E. Choroba, the test cases were always comprehensive. While optional, we do encourage participants to submit their test cases or output result together with their solution.

For more complex or unique approach, look into the solution by [Colin Crain](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/colin-crain/perl5/ch-1.pl) which supports nested braces, [Andrezgz](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/andrezgz/perl5/ch-1.pl) which can handle numerical and alphabet range, [Duncan C White](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/duncan-c-white/perl5/ch-1.pl) which manages the brace expansion using a state machine, [Kivanc Yazan](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/kivanc-yazan/perl5/ch-1.pl) which can work with blank input and nested braces, [Roger Bell West](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/roger-bell-west/perl5/ch-1.pl) which should work correctly with nested braces, and lastly [Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/joelle-maslak/perl5/ch-1.pl) which demonstrated that `Parse:RecDescent` CPAN module was as good as Grammar in Raku.

Special mentioned of the submission by [Burkhard Nickels](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/burkhard-nickels/perl5/ch-1.pl). His submission, by far, was probably the most comprehensive submissions we've seen. Everything (solution for task 1 and 2, blog, comments) have been combined together within one Perl script. There were were six variations of handing the brace expansions. Furthermore, some solutions were a combination of both task 1 and 2.

***
### Task #2
***

**CPAN** modules used: [`Benchmark`](https://metacpan.org/pod/Benchmark), [`FFI::Platypus`](https://metacpan.org/pod/FFI::Platypus), [`FFI::Raw`](https://metacpan.org/pod/FFI::Raw), [`Function::Parameters`](https://metacpan.org/pod/Function::Parameters), [`Inline`](https://metacpan.org/pod/Inline), [`Memoize`](https://metacpan.org/pod/Memoize), [`Modern::Perl`](https://metacpan.org/pod/Modern::Perl), [`Test::More`](https://metacpan.org/pod/Test::More), [`constant`](https://metacpan.org/pod/constant), [`feature`](https://metacpan.org/pod/feature), [`lib`](https://metacpan.org/pod/lib), [`strict`](https://metacpan.org/pod/strict), [`warnings`](https://metacpan.org/pod/warnings)

The most common approach was to use the `Inline` CPAN module which allows writing Perl subroutines in other programming languages, or for this case C. This was used by [Duane Powell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/duane-powell/perl5/ch-2.pl), [Dave Jacoby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/dave-jacoby/perl5/ch-2.pl), [Dave Cross](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/dave-cross/perl5/ch-2.pl), [Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/ruben-westerberg/perl5/ch-2.pl), [Burkhard Nickels](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/burkhard-nickels/perl5/ch-2.pl), [Lars Thegler](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/lars-thegler/perl5/ch-2.pl), [Kivanc Yazan](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/kivanc-yazan/perl5/ch-2.pl), [Lubos Kolouch](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/lubos-kolouch/perl5/ch-2.pl), [Yet Ebreo](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/yet-ebreo/perl5/ch-2.pl), [Duncan C White](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/duncan-c-white/perl5/ch-2.pl), [Andrezgz](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/andrezgz/perl5/ch-2.pl), [Colin Crain](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/colin-crain/perl5/ch-2.pl), [E. Choroba](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/e-choroba/perl5/ch-2.pl), and [Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/joelle-maslak/perl5/ch-2.pl). In short, almost everyone use this way as it's the easiest and quickest way to integrate external programming languages into Perl.

For those using Perl binding approach through a low-level Foreign Function Interface (FFI), [Rage311](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/rage311/perl5/ch-2.pl) picked the `FFI::Platypus` CPAN module while [Roger Bell West](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/roger-bell-west/perl5/ch-2.pl) ended up with `FFI::Raw` CPAN module.

Another approach was through [Simplified Wrapper and Interface Generator (SWIG)](https://en.wikipedia.org/wiki/SWIG)which was observed in the solution by Adam Russell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/adam-russell/perl5/ch-2.pl) and [Jaldhar H Vyas](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/jaldhar-h-vyas/perl5/ch-2.pl). Simplicity compare to [XS](https://perldoc.perl.org/perlxstut.html) was why both participant picked this approach.

Again, for different approaches used for this task, look no further other than the solutions by [Burkhard Nickels](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/burkhard-nickels/perl5/ch-2.pl).

***
### See Also
***

(1) [Bracen C with Perl 6](https://perl6.eu/bracen-c.html) by Arne Sommer


(2) [Perl Weekly Challenge 029](https://adamcrussell.livejournal.com/10141.html) by Adam Russell


(3) [Code “Reuse” and Perl Weekly Challenge #29](https://jacoby.github.io/2019/10/08/code-reuse-and-perl-weekly-challenge-29.html) by Dave Jacoby


(4) [Perl Weekly Challenge 29: Brace Expansion and Calling C Code](http://blogs.perl.org/users/laurent_r/2019/10/perl-weekly-challenge-29-brace-expansion-and-calling-c-code.html) by Laurent Rosenfeld


(5) [Perl Weekly Challenge: Week 29](https://www.braincells.com/perl/2019/10/perl_weekly_challenge_week_29.html) by Jaldhar H Vyas


(6) [RogerBW's Blog: Perl Weekly Challenge 29](https://blog.firedrake.org/archive/2019/10/Perl_Weekly_Challenge_29.html) by Roger Bell West


(7) [Perl Weekly Challenge W029 - Brace Expansion](https://doomtrain14.github.io/pwc/2019/10/13/pwc_brace_expansion.html) by Yet Ebreo

(8) [Perl Weekly Challenge W029 - Calling C](https://doomtrain14.github.io/pwc/2019/10/13/pwc_calling_c.html) by Yet Ebreo

(9) [Perl Weekly Challenge 029: Brace expansion and calling a C function](http://blogs.perl.org/users/e_choroba/2019/10/perl-weekly-challenge-029-brace-expansion-and-calling-a-c-function.html) by E Choroba
