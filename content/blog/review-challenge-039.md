---
title: "Kian-Meng Ang Weekly Review: Challenge - 039"
date: 2019-12-30T00:00:00+00:00
description: "Kian-Meng Ang Weekly Review: Challenge - #039."
type: post
image: images/blog/p5-review-challenge-039.jpg
author: Kian-Meng Ang
tags: ["Perl"]
---
***
***
Continues from [**previous week**](/blog/review-challenge-038/).

Feel free to [**submit a merge request or open a ticket**](https://github.com/manwar/perlweeklychallenge) if you found any issues with this post. We highly appreciate and welcome your feedback.

For a quick overview, go through the [**original tasks**](/blog/perl-weekly-challenge-039/) and [**recap**](/blog/recap-challenge-039/) of the weekly challenge.

Additional feedback to the our Perl Weekly Challenge’s [**Twitter account**](https://twitter.com/perlwchallenge?lang=en) is much appreciated.


***
***
## Task #1
***
***

**CPAN** modules used: [`Data::Dumper`](https://metacpan.org/pod/Data::Dumper), [`DateTime`](https://metacpan.org/pod/DateTime), [`DateTime::Duration`](https://metacpan.org/pod/DateTime::Duration), [`Function::Parameters`](https://metacpan.org/pod/Function::Parameters), [`List::Util`](https://metacpan.org/pod/List::Util), [`Set::IntSpan`](https://metacpan.org/pod/Set::IntSpan), [`constant`](https://metacpan.org/pod/constant), [`feature`](https://metacpan.org/pod/feature), [`lib`](https://metacpan.org/pod/lib), [`strict`](https://metacpan.org/pod/strict), [`warnings`](https://metacpan.org/pod/warnings)

As usual, start with the solution by [**Nazareno Delucca**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/ndelucca/perl5/ch-1.pl). The code was easy to follow and pseudocode like. Good for anyone to have a quick idea on how to approach this task. Furthermore, no external **CPAN** dependencies were used. Likewise with solution by [**Javier Luque**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/javier-luque/perl5/ch-1.pl) and [**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/laurent-rosenfeld/perl5/ch-1.pl). Then proceed with solution by [**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/adam-russell/perl5/ch-1.pl) also opted for simple approach but with difference of using `DateTime` and `DateTime::Duration` **CPAN** modules to calculate the duration. [**Burkhard Nickels**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/burkhard-nickels/perl5/ch-1.pl) also using the same **CPAN** modules as well.

Instead of just summming up the total time, some participants decided to solve this task with additional rules and constraints. For [**Duane Powell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/duane-powell/perl5/ch-1.pl) (make it like the data was obtained from **IoT devices**) and [**Saif Ahmed**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/saiftynet/perl5/ch-1.pl) (out-of-sequence data entry and non-contiguous stays).

Solutions that really stood out from the rest. Shortest possible submission by [**Ruben Westerberg**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/ruben-westerberg/perl5/ch-1.pl). Totally different approach compares to others using **Inversion Lists** by [**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/e-choroba/perl5/ch-1.pl). Read his [**blog post**](http://blogs.perl.org/users/e_choroba/2019/12/perl-weekly-challenge-039-guest-book-and-reverse-polish-notation.html) for further details.

***
***
## Task #2
***
***
**CPAN** modules used: [`Encode`](https://metacpan.org/pod/Encode), [`Math::RPN`](https://metacpan.org/pod/Math::RPN), [`Scalar::Util`](https://metacpan.org/pod/Scalar::Util), [`Test::More`](https://metacpan.org/pod/Test::More), [`constant`](https://metacpan.org/pod/constant), [`feature`](https://metacpan.org/pod/feature), [`strict`](https://metacpan.org/pod/strict), [`utf8`](https://metacpan.org/pod/utf8), [`warnings`](https://metacpan.org/pod/warnings)

Another task which utilizes many different programming techniques used by participants in the past challenges.

Start with the solution by [**Duane Powell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/duane-powell/perl5/ch-2.pl) which ported the pseudocode to Perl from [**Wikipedia entry**](https://en.wikipedia.org/wiki/Reverse_Polish_notation). Something similar also came from [**Nazareno Delucca**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/ndelucca/perl5/ch-2.pl).

Participant who used [**Dispatch Table**](https://en.wikipedia.org/wiki/Dispatch_table) programming technique were [**Javier Luque**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/javier-luque/perl5/ch-2.pl), [**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/laurent-rosenfeld/perl5/ch-2.pl), [**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/roger-bell-west/perl5/ch-2.pl), [**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/steven-wilson/perl5/ch-2.pl), [**Andrezgz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/andrezgz/perl5/ch-2.pl), [**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/colin-crain/perl5/ch-2.pl), [**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/e-choroba/perl5/ch-2.pl), and [**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/ryan-thompson/perl5/ch-2.pl).

And as usual and have been applied by him numerous times in the past challenges, [**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/adam-russell/perl5/ch-2.pl) decided to solve this task using a Parser through `Parse::Yapp` **CPAN** module. Read his [**blog post**](https://adamcrussell.livejournal.com/13321.html) for further details on its usage. For something slightly different, [**Burkhard Nickels**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/burkhard-nickels/perl5/ch-2.pl) solved this using available `Math::RPN` **CPAN** module.

Special mentioned of [**Saif Ahmed**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/saiftynet/perl5/ch-2.pl) which pushed further with additional **50 operators**. Likewise for [**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/ryan-thompson/perl5/ch-2.pl) which used a **generator function** to handle all the **arity**. Read this [**blog post**](http://www.ry.ca/2019/12/reverse-polish-notation/) for more details. Yes, it may be overboard but we love to see every possibilities with **Perl**.

***
***
## SEE ALSO
***
***

(1) [**Lights On!**](https://adamcrussell.livejournal.com/13288.html) by **Adam Russell**

(2) [**Parse::Yapp - Introductory Example**](https://adamcrussell.livejournal.com/13321.html) by **Adam Russell**

(3) [**Reverse Polish Guest Book, Raku Edition**](https://raku-musings.com/reverse-guest.html) by **Arne Sommer**

(4) [**Perl Weekly Challenge #39**](http://pearls.dyndnss.net) by **Burkhard Nickels**

(5) [**Perl Weekly Challenge 039: Guest Book and Reverse Polish Notation**](http://blogs.perl.org/users/e_choroba/2019/12/perl-weekly-challenge-039-guest-book-and-reverse-polish-notation.html) by **E.Choroba**

(6) [**Perl Weekly Challenge - 039**](https://perlchallenges.wordpress.com/2019/12/16/perl-weekly-challenge-039/) by **Javier Luque**

(7) [**Perl Weekly Challenge # 39: Guest House and Reverse Polish Notation**](http://blogs.perl.org/users/laurent_r/2019/12/perl-weekly-challenge-39-guest-house-and-reverse-polish-notation.html) by **Laurent Rosenfeld**

(8) [**Reverse Polish Notation**](http://www.ry.ca/2019/12/reverse-polish-notation/) by **Ryan Thompson**

(9) [**The times you want to avoid the short cuts.  PWC-39**](http://blogs.perl.org/users/saif/2019/12/the-times-you-want-to-avoid-the-short-cuts.html) by **Saif Ahmed**
