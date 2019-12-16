---
title: "Kian-Meng Ang Weekly Review: Challenge - 037"
date: 2019-12-12T03:00:00+00:00
description: "Kian-Meng Ang Weekly Review: Challenge - #037."
type: post
image: images/blog/blog-header-15.jpg
author: Kian-Meng Ang
tags: ["Perl5", "Perl6"]
---
***
Continues from [previous week](/blog/review-challenge-037/).

Feel free to [submit a merge request or open a ticket](https://github.com/manwar/perlweeklychallenge) if you found any issues with this post. We highly appreciate and welcome your feedback.

For a quick overview, go through the [original tasks](/blog/perl-weekly-challenge-038/) and [recap](/blog/recap-challenge-038/) of the weekly challenge.

Additional feedback to the our Perl Weekly Challenge’s [Twitter account](https://twitter.com/perlwchallenge?lang=en) is much appreciated.

***
### Task #1
***

**CPAN** modules used: [`Data::Dumper`](https://metacpan.org/pod/Data::Dumper), [`Date::Manip`](https://metacpan.org/pod/Date::Manip), [`DateTime`](https://metacpan.org/pod/DateTime), [`DateTime::Duration`](https://metacpan.org/pod/DateTime::Duration), [`DateTime::Event::Recurrence`](https://metacpan.org/pod/DateTime::Event::Recurrence), [`Function::Parameters`](https://metacpan.org/pod/Function::Parameters), [`List::Util`](https://metacpan.org/pod/List::Util), [`Modern::Perl`](https://metacpan.org/pod/Modern::Perl), [`POSIX`](https://metacpan.org/pod/POSIX), [`Test::More`](https://metacpan.org/pod/Test::More), [`Time::Local`](https://metacpan.org/pod/Time::Local), [`Time::Moment`](https://metacpan.org/pod/Time::Moment), [`Time::Piece`](https://metacpan.org/pod/Time::Piece), [`Time::Seconds`](https://metacpan.org/pod/Time::Seconds), [`Time::localtime`](https://metacpan.org/pod/Time::localtime), [`constant`](https://metacpan.org/pod/constant), [`feature`](https://metacpan.org/pod/feature), [`strict`](https://metacpan.org/pod/strict), [`utf8`](https://metacpan.org/pod/utf8), [`warnings`](https://metacpan.org/pod/warnings)

This is a similar task to the previous challenges. Thus, we observed some participants reuse the same code with some modifications.

For a start, look at the solution by [Ryan Thompson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-037/ryan-thompson/perl5/ch-1.pl) and [Colin Crain](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-037/colin-crain/perl5/ch-1.pl) which were heavily commented. This should provides us with some context and their thought on solving this tasks. Similarly but in blog post, read the write-up by [Laurent Rosenfeld](http://blogs.perl.org/users/laurent_r/2019/12/perl-weekly-challenge-37-week-days-in-each-month-and-daylight-gainloss.html), [E. Choroba](http://blogs.perl.org/users/e_choroba/2019/12/perl-weekly-challenge-037-weekdays-and-daylight-gainloss.html), and [Arne Sommer](https://raku-musings.com/weekdays-daylight.html). They provides us with even more insight on how they approached this task.

And as usual, a few things that caught our attention.

The `Date::Manip::Recur` CPAN module used by [Colin Crain](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-037/colin-crain/perl5/ch-1.pl) was rather interesting and unique compare to typical CPAN modules found in most submitted solutions. The CPAN module provides a way to parse and manipulate recurrence which was used by the participant to filter out all weekdays.

```
    my $recur   = new Date::Manip::Recur;
    $recur->parse("0:0:0:1*0:0:0*IBD","Jan 1  2019","Jan 1  2019","Dec 31 2019");
    my @date    = $recur->dates();

```

Now, if the above recurrence modifier string was rather obscure, look at the solution by [Javier Luque](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-037/javier-luque/perl5/ch-1.pl) which use the `DateTime::Event::Recurrence` CPAN module. As shown below, the code is pretty much self-explanatory.

```
    my $working_days =
        DateTime::Event::Recurrence->weekly(
            days => [1 .. 5]
        );
```

For a purist solution (without using any CPAN modules), [Adam Russell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-037/adam-russell/perl5/ch-1.pl) was the only particpant who seemed to achieve that feat.

***
### Task #2
***

**CPAN** modules used: [`Astro::Coord::ECI`](https://metacpan.org/pod/Astro::Coord::ECI), [`Astro::Coord::ECI::Sun`](https://metacpan.org/pod/Astro::Coord::ECI::Sun), [`Astro::Coord::ECI::Utils`](https://metacpan.org/pod/Astro::Coord::ECI::Utils), [`Astro::Sunrise`](https://metacpan.org/pod/Astro::Sunrise), [`Data::Dumper`](https://metacpan.org/pod/Data::Dumper), [`DateTime`](https://metacpan.org/pod/DateTime), [`DateTime::Duration`](https://metacpan.org/pod/DateTime::Duration), [`DateTime::Event::Sunrise`](https://metacpan.org/pod/DateTime::Event::Sunrise), [`File::Slurp`](https://metacpan.org/pod/File::Slurp), [`Function::Parameters`](https://metacpan.org/pod/Function::Parameters), [`Getopt::Long`](https://metacpan.org/pod/Getopt::Long), [`HTML::Parser`](https://metacpan.org/pod/HTML::Parser), [`HTML::TableExtract`](https://metacpan.org/pod/HTML::TableExtract), [`HTTP::Tiny`](https://metacpan.org/pod/HTTP::Tiny), [`LWP::Simple`](https://metacpan.org/pod/LWP::Simple), [`LWP::UserAgent`](https://metacpan.org/pod/LWP::UserAgent), [`List::Util`](https://metacpan.org/pod/List::Util), [`Modern::Perl`](https://metacpan.org/pod/Modern::Perl), [`Mojo::UserAgent`](https://metacpan.org/pod/Mojo::UserAgent), [`Pod::Usage`](https://metacpan.org/pod/Pod::Usage), [`String::Util`](https://metacpan.org/pod/String::Util), [`Syntax::Construct`](https://metacpan.org/pod/Syntax::Construct), [`Time::Local`](https://metacpan.org/pod/Time::Local), [`Time::Piece`](https://metacpan.org/pod/Time::Piece), [`Time::Seconds`](https://metacpan.org/pod/Time::Seconds), [`URI`](https://metacpan.org/pod/URI), [`WWW::Mechanize`](https://metacpan.org/pod/WWW::Mechanize), [`Web::Scraper`](https://metacpan.org/pod/Web::Scraper), [`constant`](https://metacpan.org/pod/constant), [`feature`](https://metacpan.org/pod/feature), [`integer`](https://metacpan.org/pod/integer), [`strict`](https://metacpan.org/pod/strict), [`utf8`](https://metacpan.org/pod/utf8), [`warnings`](https://metacpan.org/pod/warnings)

This task reminded us of the optional third task we used to have in previous challenges in using web services or APIs.

For this task, we can group the submitted solutions into three groups. Those who scrapped the daylight gain and loss data from the Interweb, those who scrapped and pre-cached, or those who calculate dynamically.

Participants who approached this task with the first approach were [Mark Anderson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-037/mark-anderson/perl5/ch-2.pl), [Javier Luque](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-037/javier-luque/perl5/ch-2.pl), [Adam Russell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-037/adam-russell/perl5/ch-2.pl), [Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-037/ruben-westerberg/perl5/ch-2.pl), [Saiftynet](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-037/saiftynet/perl5/ch-2.pl), and [E. Choroba](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-037/e-choroba/perl5/ch-2.pl).

Participants who pre-cached the daylight data were [Laurent Rosenfeld](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-037/laurent-rosenfeld/perl5/ch-2.pl), [Andrezgz](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-037/andrezgz/perl5/ch-2.pl), and [Colin Crain](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-037/colin-crain/perl5/ch-2.pl).

Participants who opted to calculate daylight details dynamically were [Dave Jacoby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-037/dave-jacoby/perl5/ch-2.pl), [Roger Bell West](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-037/roger-bell-west/perl5/ch-2.pl), [Lubos Kolouch](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-037/lubos-kolouch/perl5/ch-2.pl), [Ryan Thompson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-037/ryan-thompson/perl5/ch-2.pl), and [Duncan C White](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-037/duncan-c-white/perl5/ch-2.pl).

Again, certain solutions that caught our attentions.

The [forward-looking statement or safe habour statement found](https://en.wikipedia.org/wiki/Forward-looking_statement) in the submission by [Colin Crain](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-037/colin-crain/perl5/ch-2.pl) was rather intriguing and justifiable due to the uncertainties in predicting the daylight result.

[Ryan Thompson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-037/ryan-thompson/perl5/ch-2.pl) basically wrote a console app or rather a CPAN module to calculate the difference of daylight between two months.

The solution by [Mark Anderson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-037/mark-anderson/perl5/ch-2.pl) is a short and practical demonstration of how [MapReduce](https://en.wikipedia.org/wiki/MapReduce) works.

***
### See Also
***

(1) [Perl Weekly Challenge - 037](https://perlchallenges.wordpress.com/2019/12/02/perl-weekly-challenge-037/) by Javier Luque


(2) [Weekdays, Daylight and Raku](https://raku-musings.com/weekdays-daylight.html) by Arne Sommer


(3) [Weekdays and Daytimes](https://adamcrussell.livejournal.com/12735.html) by Adam Russell


(4) [Sunrise and Sunset in Perl](https://jacoby.github.io/2019/12/02/sunrise-and-sunset-in-perl.html) by Dave Jacoby


(5) [Perl Weekly Challenge 37: Week Days in Each Month and Daylight Gain/loss](http://blogs.perl.org/users/laurent_r/2019/12/perl-weekly-challenge-37-week-days-in-each-month-and-daylight-gainloss.html) by Laurent Rosenfeld


(6) [Perl Weekly Challenge 37: weekdays and day lengths](https://blog.firedrake.org/archive/2019/12/Perl_Weekly_Challenge_37__weekdays_and_day_lengths.html) by Roger Bell West


(7) [Perl Weekly Challenge 037: Weekdays and Daylight Gain/Loss](http://blogs.perl.org/users/e_choroba/2019/12/perl-weekly-challenge-037-weekdays-and-daylight-gainloss.html) by E. Choroba
