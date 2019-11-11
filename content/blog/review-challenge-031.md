---
title: "Kian-Meng Ang Weekly Review: Challenge - 031"
date: 2019-11-03T00:00:00+00:00
description: "Kian-Meng Ang Weekly Review: Challenge - #031."
type: post
image: images/blog/p5-review-challenge-031.jpg
author: Kian-Meng Ang
tags: ["Perl"]
---
***
***
Continues from [**previous week**](/blog/review-challenge-030/).

Feel free to [**submit a merge request or open a ticket**](https://github.com/manwar/perlweeklychallenge) if you found any issues with this post. We highly appreciate and welcome your feedback.

For a quick overview, go through the [**original tasks**](/blog/perl-weekly-challenge-031/) and [**recap**](/blog/recap-challenge-031/) of the weekly challenge.

***
***
## Task #1
***
***

**CPAN** modules used: [`Const::Fast`](https://metacpan.org/pod/Const::Fast), [`English`](https://metacpan.org/pod/English), [`Modern::Perl`](https://metacpan.org/pod/Modern::Perl), [`POSIX`](https://metacpan.org/pod/POSIX), [`Test::More`](https://metacpan.org/pod/Test::More), [`Try::Tiny`](https://metacpan.org/pod/Try::Tiny), [`constant`](https://metacpan.org/pod/constant), [`experimental`](https://metacpan.org/pod/experimental), [`feature`](https://metacpan.org/pod/feature), [`strict`](https://metacpan.org/pod/strict), [`utf8`](https://metacpan.org/pod/utf8), [`warnings`](https://metacpan.org/pod/warnings)

Based on the submitted answers, there were three ways used by participants to solve this task. We will look into these approaches.

The [`eval`](https://perldoc.perl.org/functions/eval.html) function or the poor man catch approach. The most common approach used by majority of the participants. Start with the submission by [**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/adam-russell/perl5/ch-1.pl) which demonstrate the basic usage of `eval` function. The solution can be further improved as seen in the submission by [**Ndelucca**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/ndelucca/perl5/ch-1.pl), [**Lars Balker**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/lars-balker/perl5/ch-1.pl) and [**Andrezgz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/andrezgz/perl5/ch-1.pl).

[**Javier Luque**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/javier-luque/perl5/ch-1.pl) used of double `eval` functions was rather unique even though the `eval` usage have violated the Perl Critic's rule of [`Return value of eval not tested [ErrorHandling::RequireCheckingReturnValueOfEval]`](https://metacpan.org/pod/Perl::Critic::Policy::ErrorHandling::RequireCheckingReturnValueOfEval).

    # Return the $answer or undef if we can't divide by 0
    sub divide_by_zero_check {
        my $answer;
        eval { $answer = eval shift; };
        return $answer;
    }

Other participants that used this approach were [**Anton Fedotov**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/anton-fedotov/perl5/ch-1.pl), [**Duane Powell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/duane-powell/perl5/ch-1.pl), [**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/dave-cross/perl5/ch-1.pl), [**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/athanasius/perl5/ch-1.pl), [**Ruben Westerberg**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/ruben-westerberg/perl5/ch-1.pl), [**Burkhard Nickels**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/burkhard-nickels/perl5/ch-1.pl), [**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/laurent-rosenfeld/perl5/ch-1.pl), [**Rage311**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/rage311/perl5/ch-1.pl), [**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/jaldhar-h-vyas/perl5/ch-1.pl), [**Yet Ebreo**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/yet-ebreo/perl5/ch-1.pl), [**Duncan C White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/duncan-c-white/perl5/ch-1.pl), [**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/steven-wilson/perl5/ch-1.pl), [**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/colin-crain/perl5/ch-1.pl) and [**Joelle Maslak**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/joelle-maslak/perl5/ch-1.pl).

Both [**Laurent Rosenfeld**](http://blogs.perl.org/users/laurent_r/2019/10/perl-weekly-challenge-31-illegal-division-by-zero-and-dynamic-variables.html) and [**E. Choroba**](http://blogs.perl.org/users/e_choroba/2019/10/perl-weekly-challenge-031-division-by-zero-dynamic-variable-name.html) have discovered that `eval` function have a bug in earlier **Perl** version that prevents trapping the error. Therefore, using the `Try::Tiny` **CPAN** module is a good alternative.

This brings us to the second approach, using the `Try::Tiny` **CPAN** module which allows us to handle exception using a try-catch block. Yes, this may be syntactic sugar but definitely a better abstraction than the low level `eval` function. [**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/dave-jacoby/perl5/ch-1.pl), [**Lars Thegler**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/lars-thegler/perl5/ch-1.pl), [**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/lubos-kolouch/perl5/ch-1.pl), [**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/pete-houston/perl5/ch-1.pl) and [**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/e-choroba/perl5/ch-1.pl) took this approach.

Take note of how **E. Choroba** presented the error conditions in the `division` subroutine. Consistency was enforced by returning a state and result of the calculation as shown below. While this may seem subjective, the code showed good taste in coding, especially for **API** or library design.

    sub division {
        my ($numerator, $denominator) = @_;
        try {
            { safe => 1, result => $numerator / $denominator }
        } catch {
            { safe => 0, error => $_ }
        }
    }

Lastly, the unorthodox approach. No one but [**Maxim Kolodyazhny**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/maxim-kolodyazhny/perl5/ch-1.pl) (solution shown below) and [**Vyacheslav Volgarev**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/vyacheslav-volgarev/perl5/ch-1.pl). [`42`](https://en.wikipedia.org/wiki/42_(number)) is definitely answer to everything since the **ASCII** code for asterisk (`*`), a wildcard for everything is `42`.

    use constant ANSWER2EVERYTHING => 42;

    sub harmless_division {
        my ($x, $y ) = @_;

        return if $y == int $y && ( ANSWER2EVERYTHING ^ $y ) == ANSWER2EVERYTHING;

        $x / $y;
    }

Special mention of [**Burkhard Nickels**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/burkhard-nickels/perl5/Div.pm) solution which used operator overload to solve this task.

***
***
## Task #2
***
***

**CPAN** modules used: [`Const::Fast`](https://metacpan.org/pod/Const::Fast), [`Data::Dumper`](https://metacpan.org/pod/Data::Dumper), [`Encode`](https://metacpan.org/pod/Encode), [`English`](https://metacpan.org/pod/English), [`File::Basename`](https://metacpan.org/pod/File::Basename), [`Getopt::Long`](https://metacpan.org/pod/Getopt::Long), [`Modern::Perl`](https://metacpan.org/pod/Modern::Perl), [`Test::More`](https://metacpan.org/pod/Test::More), [`feature`](https://metacpan.org/pod/feature), [`lib`](https://metacpan.org/pod/lib), [`strict`](https://metacpan.org/pod/strict), [`utf8`](https://metacpan.org/pod/utf8), [`warnings`](https://metacpan.org/pod/warnings)

For this task, look at the solution by [**Lars Balker**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/lars-balker/perl5/ch-2.pl) was a good example to demonstrate how [**symbolic references**](https://perldoc.perl.org/perlref.html#Symbolic-references) works. Most submitted answers were more or less the same variation of this answer with their own coding style.

    use v5.10;
    use warnings;
    use strict;

    my $var = shift // die "usage: $0 <varname>";

    no strict 'refs'; # we're specifically abusing this feature
    $$var = $var;
    say $$var;

Next, read the [**blog post**](http://blogs.perl.org/users/laurent_r/2019/10/perl-weekly-challenge-31-illegal-division-by-zero-and-dynamic-variables.html) by **Laurent Rosenfeld** and [**Perl FAQ**](https://metacpan.org/pod/perlfaq7#How-can-I-use-a-variable-as-a-variable-name) on the history, issues, and usage of using a dynamic variable in **Perl**.

***
***
## SEE ALSO
***
***

(1) [**Perl Weekly Challenge - 031**](https://perlchallenges.wordpress.com/2019/10/24/perl-weekly-challenge-031/) by **Javier Luque**

(2) [**Dynamic Zero with Raku**](https://raku-musings.com/dynamic-zero.html) by **Arne Sommer**

(3) [**Perl Weekly Challenge 031**](https://adamcrussell.livejournal.com/10620.html) by **Adam Russell**

(4) [**Perl Weekly Challenge 31: Illegal Division by Zero and Dynamic Variables**](http://blogs.perl.org/users/laurent_r/2019/10/perl-weekly-challenge-31-illegal-division-by-zero-and-dynamic-variables.html) by **Laurent Rosenfeld**

(5) [**Perl Weekly Challenge: Week 31**](https://www.braincells.com/perl/2019/10/perl_weekly_challenge_week_31.html) by **Jaldhar H. Vyas**

(6) [**Perl Weekly Challenge 031: Division by Zero & Dynamic Variable Name**](http://blogs.perl.org/users/e_choroba/2019/10/perl-weekly-challenge-031-division-by-zero-dynamic-variable-name.html) by **E. Choroba**
