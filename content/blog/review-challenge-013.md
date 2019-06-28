---
title: "Kian-Meng Ang Weekly Review: Challenge - 013"
date: 2019-06-27T00:00:00+00:00
description: "Kian-Meng Ang Weekly Review: Challenge - #013."
type: post
image: images/blog/blog-header-4.jpg
author: Kian-Meng Ang
tags: ["Perl5", "Perl6"]
---

Continues from [previous post](https://www.kianmeng.org/2019/06/perl-weekly-challenge-012-2019-week-25.html).

Feel free to [submit a merge request or open a ticket](https://github.com/manwar/perlweeklychallenge) if you found any issues with this post. Feedback are very much appreciated and welcome. 

Read the [original questions](https://perlweeklychallenge.org/blog/perl-weekly-challenge-013/) and [recap](https://perlweeklychallenge.org/blog/recap-challenge-013/) of the weekly challenge first to have a quick overview.


***

## Challenge #1

***

In this challenge, there are three approaches to generate all the last
Fridays for a year. We can either (1) count forward from first Friday of the
year, (2) count backward from last Friday of the year, or (3) count backward
from the last day of each month. Read [Arne Sommer's post](https://perl6.eu/hofstadter-friday.html) 
if you want a step-by-step walk through on how he solve this challenge using all three ways. Most of the
submitted answers fall within these three strategies but with a slight variations. 

Laurent Rosenfeld took another approach of counting forward by [checking through the last ten-plus days of each
month](http://blogs.perl.org/users/laurent_r/2019/06/perl-weekly-challenge-13-fridays-and-mutually-recursive-subroutines.html).
Adam Russell [did the same](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-013/adam-russell/perl5/ch-1.pl) as well but without using any external CPAN modules. He did the day of the week calculation manually using the [Tomohiko Sakamoto's algorithm](https://en.wikipedia.org/wiki/Determination_of_the_day_of_the_week#Sakamoto's_methods).
Another variation was seen on Joelle Maslak's [solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-013/joelle-maslak/perl5/ch-1.pl) which check the last Friday by adding a week to a Friday to see if the month changes. Ruben Westerberg used a [similar way](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-013/ruben-westerberg/perl5/ch-1.pl) detect last Friday but counting each month forward instead. 

Notable [submission](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-013/jaldhar-h-vyas/perl5/ch-1.pl)
by Jaldhar H Vyas to make sure the calculation works for [Gregorian calendar](https://en.wikipedia.org/wiki/Gregorian_calendar) starting from year 1753. Also, kudos to [Daniel Mantovani](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-013/daniel-mantovani/perl5/ch-1.pl) for commenting his code well which made it easy for us to code reading. 

In this challenge, we observed that different participants use different CPAN
modules related to date or time manipulation as shown in the list below.

    use Date::Calc qw/check_date Day_of_Week/;
    use Date::Manip;
    use DateTime;
    use DateTime::Duration;
    use POSIX qw(mktime strftime);
    use Time::Local;
    use Time::Local qw/timegm_nocheck/ ;
    use Time::Local qw;
    use Time::Piece;
    use Time::Seconds;

Within this list, [`DateTime`](https://metacpan.org/release/DateTime) is the only CPAN module recommended by [`Task::Kensho::Dates`](https://metacpan.org/pod/Task::Kensho#Task::Kensho::Dates:-Date-Modules)
and that the reason [justified its usage](http://blogs.perl.org/users/athanasius/2019/06/perl-weekly-challenge-013.html)
by Athanasius. As Dave Jacoby [suggested](https://jacoby.github.io//2019/06/19/yeah-about-challenge-13.html), every one should buy [Dave Rolsky](https://blog.urth.org/) (the primary author of [`DateTime`](https://metacpan.org/release/DateTime) CPAN module) a pizza at least once or you can [make a donation](https://metacpan.org/author/DROLSKY) (there is a donate button in
the page) to him. 


***

## Challenge #2

***

The general consensus that this was a straight forward question where you
just need to apply the mathematical definition of formulae of [Hofstadter
Female and Male sequences](https://en.wikipedia.org/wiki/Hofstadter_sequence#Hofstadter_Female_and_Male_sequences).
E. Choroba gave a [good justification](http://blogs.perl.org/users/e_choroba/2019/06/perl-weekly-challenge-013-last-fridays-and-hofstadter-female-and-male-sequences.html)
of using the [`Function::Parameters`](https://metacpan.org/pod/Function::Parameters) CPAN
module to match the subroutine method signature to the definition of the mathematical formulae as shown below. 
The [mathematical formulae](https://en.wikipedia.org/wiki/Hofstadter_sequence#Hofstadter_Female_and_Male_sequences).

    F(0) = 1, M(0) = 0, and
    F(n) = n-M(F(n-1)), n > 0
    M(n) = n-F(M(n-1)), n > 0

Equivalent [Perl's code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-013/e-choroba/perl5/ch-2.pl)
by E.Choroba.

    fun F ($n) { $n ? $n - M(F($n - 1)) : 1 }
    fun M ($n) { $n ? $n - F(M($n - 1)) : 0 }

And for comparison, equivalent [Perl's code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-013/laurent-rosenfeld/perl5/ch-2.pl) by Laurent Rosenfeld without using [`Function::Parameters`](https://metacpan.org/pod/Function::Parameters) CPAN module.

    sub female {
        my $n = shift;
        return 1 if $n == 0;   # base case
        return $n - male (female ($n - 1));
    }
    sub male {
        my $n = shift;
        return 0 if $n == 0;   #base case
        return $n - female (male ($n - 1));
    }

Since there were repeated calculations, hence this challenge was a good
problem to fully utilize the caching mechanism. Lubos Kolouch submitted a
solution that implemented a manual caching through [saving the calculated
result in a global hash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-013/lubos-kolouch/perl5/ch-2.pl).
Similarly but on different approach, Yozen Hernandez's solution [stored the cached result](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-013/yozen-hernandez/perl5/ch-2.pl)
within the subroutine by declaring the hash as [`state`](https://perldoc.perl.org/functions/state.html) variable. 

What about those who want a caching solution that came with the core distribution? In
Perl, the [`Memoize`](https://perldoc.perl.org/Memoize.html) is the go-to CPAN module for adding caching ability to a [pure subroutine (returned result depends on input value with no side effects)](http://blogs.perl.org/users/e_choroba/2019/06/perl-weekly-challenge-013-last-fridays-and-hofstadter-female-and-male-sequences.html).
In fact, this was the most common used caching strategy for this challenge as seen in the solution of [Gustavo Chaves](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-013/gustavo-chaves/perl5/ch-2.pl),
[Athanasius](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-013/athanasius/perl5/ch-2.pl), [Laurent Rosenfeld](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-013/laurent-rosenfeld/perl5/ch-2a.pl), [Guillermo Ramos](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-013/guillermo-ramos/perl5/ch-2.pl), [Duncan C White](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-013/duncan-c-white/perl5/ch-2.pl), [E Choroba](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-013/e-choroba/perl5/ch-2.pl), and [Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-013/joelle-maslak/perl5/ch-2.pl). 

If you notice that some participants use [`M()`](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-013/daniel-mantovani/perl5/ch-2.pl) or [`mm()`](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-013/dave-jacoby/perl5/ch-2.pl) as subroutine name instead of `m`. Simply because `m//` is a match operator in Perl. Steven Wilson also [encountered this problem](http://tilde.town/~wlsn/pwc013.html) as well. 

On a side note, if we were going to pick a solution and print it as a poster, E.Choroba's [solution for the challenge #2](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-013/e-choroba/perl5/ch-2.pl)
(without the comment) would be in our consideration. 


***
## Challenge #3
***

There was an issue with obtaining the API key. You need to submit your credit card
details first before you can get the API key. While some participants found
this extra registration step quite hassle, some found it quite
[discouraging](http://blogs.perl.org/users/athanasius/2019/06/perl-weekly-challenge-013.html)
for participating in this challenge. Nevertheless, for future challenges,
perhaps we should prefer more publicly and accessible APIs instead of those
locked behind a paywall. 

There were four participants for this week. Aside from the usual suspects, both [Guillermo Ramos](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-013/guillermo%20-ramos/perl5/ch-3.pl)
and [Neil Bowers](https://neilb.org/2019/06/20/words-api.html) participated
for the first time. If we use nested or chained ternary operator as a
replacement for if/else statement, it would looks the code done by [Guillermo Ramos](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-013/guillermo%20-ramos/perl5/ch-3.pl)
as shown below. While it's against the conventional wisdom, it did reduce the
syntax clutter of if/else statement, provided that you indent the code
properly.
<!--  -->
    print $frequency > 5 ? "frequently used"
        : $frequency > 3 ? "occasionally used"
        : $frequency > 1 ? "rarely used"
        : "never used";

We've been waiting for someone to turn the third challenge into a CPAN
module. And finally, Neil Bowers have answered our call by making his
solution into a full fledged CPAN module, [`WebService::WordsAPI`](https://metacpan.org/pod/WebService::WordsAPI). Two
things we noticed at how he coded the CPAN module. First, he took a
minimalist approach by using just the bare minimum [`Moo`](https://metacpan.org/pod/Moo) and
[`HTTP::Tiny`](https://metacpan.org/pod/HTTP::Tiny) CPAN modules. Second,
based on his chosen CPAN modules, he made the module more extensible. For
example, we can [override the default HTTP client](https://metacpan.org/release/WebService-WordsAPI/source/lib/WebService/WordsAPI.pm#L12) with any HTTP clients that share the same interfaces with [`HTTP::Tiny`](https://metacpan.org/pod/HTTP::Tiny). Hence, we just [load the external dependencies](https://metacpan.org/release/WebService-WordsAPI/source/lib/WebService/WordsAPI.pm#L12) on demand as shown below.

    has ua => (
        is      => 'ro',
        default => sub {
                       require HTTP::Tiny;
                       require IO::Socket::SSL;
                       return HTTP::Tiny->new;
                   },
    );

Next, this CPAN module also allows [switching of returned values](https://metacpan.org/release/WebService-WordsAPI/source/lib/WebService/WordsAPI.pm#L26) between a Perl structure or a JSON string, which was a nice feature provided
for any CPAN module "consumers". In short, for any developers who like to create a web service API related CPAN module, the 0.01 release of [`WebService::WordsAPI`](https://metacpan.org/pod/WebService::WordsAPI) is a
good fundamental reference point. Off course, there are other approaches as
well and we hope to see some in coming challenges. 

For those who like to see Perl 6 solution, Joelle Maslak's [submission](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-013/joelle-maslak/perl5/ch-3.pl) is a good place to start. 


***
## Blog Posts

***

They said, the more the merrier. We have quite a number of participants
blogged about this week challenges. If you like to have more insights on how
they arrived at their solutions, do read up on their thoughts and approaches.
While you at it, share out or retweet their blog posts as well.


(1) [Hofstadter, Friday and Perl 6](https://perl6.eu/hofstadter-friday.html) by Arne Sommer. 


Perl 6 solutions in a line-by-line walk through manner. Very detailed implementation of
different strategies to find all last Friday of a month within a year. 


(2) [Perl Weekly Challenge 013](https://adamcrussell.livejournal.com/4730.html) by Adamn Russell. 


See how he implemented Tomohiko Sakamoto's algorithm to determine the day of
the week.


(3) [Yeah, about Challenge 13](https://jacoby.github.io//2019/06/19/yeah-about-challenge-13.html) by Dave Jacoby. 


As usual, some personal notes mixed with technical solutions.


(4) [Perl Weekly Challenge #013](http://blogs.perl.org/users/athanasius/2019/06/perl-weekly-challenge-013.html) by Athanasius. 


Perl 5 and 6 solutions and discussions. Read this in addition to Laurent Rosenfeld.


(5) [Perl Weekly Challenge # 13: Fridays and Mutually Recursive Subroutines](http://blogs.perl.org/users/laurent_r/2019/06/perl-weekly-challenge-13-fridays-and-mutually-recursive-subroutines.html)
by Laurent Rosenfeld. 


In addition to the Perl 5 and Perl 6 comparison, you can read about the benchmark result of using and not using
[`Memoize`](https://perldoc.perl.org/Memoize.html) module. 


(6) [Perl Weekly Challenge: Week 13](https://www.braincells.com/perl/2019/06/perl_weekly_challenge_week_13.html) by Jaldhar H. Vyas.


One of the participant that focus on the leap year calculation as well as Perl 5 and Perl 6 solutions. 


(7) [An interface to WordsAPI](https://neilb.org/2019/06/20/words-api.html) by Neil Bowers. 


If you want to create a new CPAN module, start with his blog post. 


(8) [Perl Weekly Challenge 13: Last Friday of the month / Mutually recursive methods](https://yzhernand.github.io/posts/perl-weekly-challenge-13/) by Yozen Hernandez.


If you want to understand why and how he used `$,` or also known as the [output field separator](https://perlmaven.com/output-field-separator-and-list-separator)
and [`state`](https://perldoc.perl.org/functions/state.html) variable to cache calculated result. 


(9) [Perl Weekly Challenge 13](http://www.khanate.co.uk/blog/2019/06/19/perl-weekly-challenge-13/) by Simon Proctor. 


Discussion on Perl 6 solution to the challenge #2. 


(10) [Fridays and Mutually Recursive methods](http://tilde.town/~wlsn/pwc013.html) by Steven Wilson. 


"Come with me now on a journey through time and space as I workout how to
solve this week's challenges." He said it better himself. All jokes aside,
follow his thoughts on how he solved both challenges. Recommended reading for
this week.


(11) [Perl Weekly Challenge 013: Last Fridays and Hofstadter Female and Male Sequences](http://blogs.perl.org/users/e_choroba/2019/06/perl-weekly-challenge-013-last-fridays-and-hofstadter-female-and-male-sequences.html) by E.Choroba. 


Read his insights, especially on challenge #2 on solving both challenges.
Another recommended reading of the week.