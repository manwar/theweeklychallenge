---
title: "Kian-Meng Ang Weekly Review: Challenge - 014"
date: 2019-07-05T00:00:00+00:00
description: "Kian-Meng Ang Weekly Review: Challenge - #014."
type: post
image: images/blog/p5-review-challenge-014.jpg
author: Kian-Meng Ang
tags: ["Perl5"]
---

Continues from [previous post](/blog/review-challenge-013).

Feel free to [submit a merge request or open a ticket](https://github.com/manwar/perlweeklychallenge) if you found any issues with this post. Feedback are very much appreciated and welcome. For a quick overview, read the [original questions](https://perlweeklychallenge.org/blog/perl-weekly-challenge-014/) and [recap](https://perlweeklychallenge.org/blog/recap-challenge-014/) of the weekly challenge.

***
### Challenge #1
***

Some participants found that it's quite vogue to understand the [Van Eck's sequence](https://en.wikipedia.org/wiki/Van_Eck%27s_sequence) but managed to understand it through [OEIS](https://oeis.org/A181391) and [Numberphile's video](https://www.youtube.com/watch?v=etMJxB-igrc).

The general solution was to loop and generate the sequence but at the same time, cached the calculation (Joelle Maslak's solution have [implemented two caches](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-014/joelle-maslak/perl5/ch-1.pl)).

In Rob Van Dam's [solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-014/rob-van-dam/perl5/ch-1.pl), he did a comparison between a cached and non-cached version. Using his [solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-014/rob-van-dam/perl5/ch-1.pl) as example, to generate 100000 sequence of numbers, the cached version took around 0.5 seconds while the non-cached ran for 9-plus minutes. Gustavo Chaves did something similar but comparing an [iterative](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-014/gustavo-chaves/perl5/ch-1.pl) and [recursive](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-014/gustavo-chaves/perl5/ch-1-recursive.pl) approach. Surprisingly, the recursive version even with memoization, is [33 times slow](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-014/gustavo-chaves/perl5/README.pod).

Some interesting stuff while reviewing this first challenge. Jaime Corchado used an [unorthodox way](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-014/jaime/perl5/ch-1.pl) of looping a sequence as shown below. Reading through the documentation on [`continue`](https://perldoc.perl.org/functions/continue.html), it seemed that `continue` behaves like a flow control statement if it's followed by a code block. In this case, the `continue` code block will be executed before the next iteration, which was used to increment the `$m` variable. This is similar to the finally block in the try-catch-finally constructs in some other programming languages.

```perl
    my $m = 1; # the distance between matching entries.
    for my $am (@ecks) {
        if ($an == $am) {
        $a1 = $m;
        last; # only update with most recent entry.
        }
    } continue { $m++; }
```

We also noticed that more comments in the code submissions, which was quite helpful to let us know how they arrived at their solutions. Mesmerizingly, Steve Wilson's [submitted answer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-014/steven-wilson/perl5/ch-1.pl) read like pseudocode or normal English.

Both [Gustavo Chaves](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-014/gustavo-chaves/perl5/ch-1.pl) and [E. Choroba](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-014/e-choroba/perl5/ch-1.pl) (the only solution that used iterator and test case) have the cleanest solutions so far.


***
### Challenge #2
***

Probably one of the most interesting questions of all the challenges.

[Jamie Zawinski](https://en.wikiquote.org/wiki/Jamie_Zawinski) once [said](http://regex.info/blog/2006-09-15/247), "Some people, when confronted with a problem, think "I know, I'll use regular expressions." Now they have two problems.". Jaime Corchado, coincidentally shares the same first name, decided to [solve this challenge](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-014/jaime/perl5/ch-2.pl) using a very long regex that matches every combination of the postal abbreviations. We're not sure how he generated the regex but this was definitely a quirky approach.

Gustavo Chaves used a [brilliant way](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-014/gustavo-chaves/perl5/ch-2.pl) to obtain the list of U.S. state codes through the [`Locale::US`](https://metacpan.org/pod/Locale::US) CPAN module. That approach definitely shorten the code and reduce some "noise" within the code. Also, this is a good example where a CPAN module really helps in solving the problem. And for those who are interested, please help to create a similar locale CPAN module of your country.

Again, the [cleanest solution](http://neilb.org/2019/06/26/state-code-anagrams.html) went to Neil Bowers.

    use File::Slurper qw/ read_lines /;

    my @states = read_lines('state-codes.txt');
    my $re     = join('|', @states);
    my @words  = grep { /^($re)+$/ }
                 sort { length($b) <=> length($a) }
                 read_lines('word-list.txt');

    print $words[0], "\n";

***
### Challenge #3
***

Out of the five participants, [Rob Van Dam](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-014/rob-van-dam/perl5/ch-3.pl), and [Lubos Kolouch](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-014/lubos-kolouch/perl5/ch-3.pl) were the newcomer to this challenge this week. Initially we thought Francis White submitted [his solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-014/fjwhittle/perl6/ch-3.p6) (Perl 6) for the first time, little we know that he already [did the challenge in week 12](https://github.com/fjwhittle/perlweeklychallenge-club/blob/master/challenge-012/fjwhittle/perl6/ch-3.p6) but we missed it. Hence, starting from this week, for this challenge, we will look into both Perl 5 and Perl 6 solutions.

The HTTP client CPAN modules used by the participant this week were [`HTTP::Tiny`](https://metacpan.org/pod/HTTP::Tiny), [`WWW::Mechanize`](https://metacpan.org/pod/WWW::Mechanize), [`Furl`](https://metacpan.org/pod/Furl), [`Mojo::UserAgent`](https://metacpan.org/pod/Mojo::UserAgent), and [`Cro::HTTP::Client`](https://cro.services/) (Perl 6). Only the `WWW::Mechanize` module which is more specialized HTTP client or a manual web browser. While we have many modules that can be used for this challenge, the `Mojo::UserAgent` is definitely the go-to module for modern and API related web service.

We were wondering which participant will try to emulate or simulate autocompletion at the console and Joelle Maslak did not failed us. The use of [`Term::Choice`](https://metacpan.org/pod/Term::Choose) CPAN module for [selecting different cities](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-014/joelle-maslak/perl5/ch-3.pl) was a nice touch. This is one of a good reason for the third challenge. We can always discover new and interesting CPAN modules to prettify our output that fit the particular challenge. Similarly for Perl 6 solution, the [`Terminal::Table`](https://modules.perl6.org/dist/Terminal::Table:cpan:ALOREN) module was used to prettify the output.

***
### Blog Posts
***

Some blog posts on this week challenge by the regular participants.

(1) [Postal Words](http://donaldh.wtf/2019/06/postal-words/) by Donald Hunter.

A write-up on the step-by-step approach to solve challenge #2.

(2) [Perl Weekly Challenge 014](https://adamcrussell.livejournal.com/4974.html) by Adam Russell.

Read how he solved the challenge using classic Perl idioms.

(3) [Drink Coffee, Blog on Challenge 014](https://jacoby.github.io//2019/06/24/drink-coffee-blog-on-challenge-014.html) by Dave Jacoby.

A person who can multitask by solving the challenges while watching Last Week Tonight with John Oliver.

(4) [Perl Weekly Challenge #014](http://blogs.perl.org/users/athanasius/2019/06/perl-weekly-challenge-014.html) by Athanasius.

A comparison of Perl 5 and Perl 6 answers as well as benchmark for for challenge #2. Surprisingly, Perl 6 solutions seemed way slower.

(5) [Perl Weekly Challenge # 14: Van Eck's Sequence and US States](http://blogs.perl.org/users/laurent_r/2019/06/perl-weekly-challenge-14-van-ecks-sequence-and-us-states.html) by Laurent Rosenfeld Another comparison of Perl 5 and Perl 6.

As usual, detailed write-up on how he solved the problem.

(6) [Longest anagram of US state codes](http://neilb.org/2019/06/26/state-code-anagrams.html) by Neil Bowers.

If you want to see the cleanest solution to challenge #2, read this. Recommendation read of the week.

(7) [Hashed up Sequencing – Perl weekly challenge, week 14](https://rage.powered.ninja/2019/06/30/hashed-up-sequencing.html) by Francis Whittle.

Read how he solved the challenge while battling with Fedora installation and struggling with `Cro::Http::Client` module. Definitely a recommendation read of the week.

(8) [Perl Weekly Challenge Week 014](http://tilde.town/~wlsn/pwc014.html) by Steven Wilson.

Read his attack plans on solving both challenges.

(9) [Perl Weekly Challenge 014: Van Eck and the US States](http://blogs.perl.org/users/e_choroba/2019/06/perl-weekly-challenge-014-van-eck-and-the-us-states.html) by E. Choroba.

Due to the changes to challenge #2, he have created two solutions to both requirements. Learn how he use iterator to solve challenge #1. Another recommended read of the week.
