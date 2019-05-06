---
title: "RECAP - Perl Weekly Challenge - 006"
date: 2019-05-05T00:00:00+00:00
description: "My personal take on the Challenge #006."
type: post
image: images/blog/blog-wk-6.jpg
author: Mohammad S Anwar
tags: ["Perl5", "Perl6"]
---
Last week was not very active in terms of number of participations. Having said that the quality of the solutions is always on the top. Some went for the kill, you can't afford to miss it. Enjoy the code.

***

### Adam Russell
![Andrezgz](/images/team/user.jpg)

Adam got the help from CPAN module [Data::Dump](https://metacpan.org/pod/Data::Dump) and the end result is unbelievable simple. Check out his [code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-006/adam-russell/perl5/ch-1.pl).

### Alicia Bielsa
![Alicia Bielsa](/images/team/alicia_bielsa.jpg)

Alicia submitted the solution to the first question. It is very well defined and full of usefull comments script. Please take a look [here](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-006/alicia-bielsa/perl5/ch-1.pl).

### Andrezgz
![Andrezgz](/images/team/user.jpg)

Andrezgz came up with **sub compact_term()** which does the job. Checkout the [code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-006/andrezgz/perl5/ch-1.pl). For the second challenge, he went for the kill with this line below.

    **print Math::BigFloat->new(163)->bsqrt->bmul(bpi)->bexp(32);**.

### Arpad Toth
![Andrezgz](/images/team/user.jpg)

Arpad came up with one-liner which appears to be very complicated but does the job. It is certainly not easy to read. You decide, here is the [code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-006/arpad-toth/perl5/ch-1.sh).

### Athanasius
![Athanasius](/images/team/athanasius.jpg)

Athanasius solution used not so common syntax e.g. **push $runs[-1]->@*, $n;**. It is not commonly used syntax but I have come across few people who likes it. It looks nice, I must admit. Have a look [here](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-006/athanasius/perl5/ch-1.pl). The second challenge solution used [Math::BigFloat](https://metacpan.org/pod/Math::BigFloat) as in [here](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-006/athanasius/perl5/ch-2.pl).

### Daniel Mantovani
![Daniel Mantovani](/images/team/daniel_mantovani.jpg)

Daniel came up with unique solution, at first, I couldn't believe it would give the correct result. I was wrong it does return the correct answer. You must [checkout](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-006/daniel-mantovani/perl5/ch-1.pl) yourself.

### Duncan C. White
![Duncan C. White](/images/team/duncan_white.jpg)

Duncan's solution is short and easy to read. However there is a magic in it. Take a look [here](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-006/duncan-c-white/perl5/ch-1.pl). But for the second challenge, he went for one liner like below:

    **perl -Mbigrat=bexp,bpi -e 'print bexp(bpi(32)*sqrt(163),32)."\n"'**.

### E. Choroba
![E. Choroba](/images/team/e-choroba.jpg)

E. Choroba is making good use of CPAN distribution [String::Util::Range](https://metacpan.org/pod/String::Util::Range). See it yourself [here](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-006/e-choroba/perl5/ch-1.pl). Like others his solution also used [Math::BigFloat](https://metacpan.org/pod/Math::BigFloat) but in a unique way like [this](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-006/e-choroba/perl5/ch-2.pl).

### Guillermo Ramos
![Guillermo Ramos](/images/team/user.jpg)

Guillermo's **sub compact()** is very interesting and well documented. Please take a look [here](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-006/guillermo-ramos/perl5/ch-1.pl).

### Gustavo Chaves
![Gustavo Chaves](/images/team/user.jpg)

Gustavo made the challenge looks like child play. He is too good. Take a look at his work [here](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-006/gustavo-chaves/perl5/ch-1.pl). For second challenge, he made it so simple with this line

    **say PI()->bmul(sqrt(163))->bexp(32);**.

### Jaldhar H. Vyas
![Jaldhar H. Vyas](/images/team/jaldhar_vyas.jpg)

Jaldhar's solution is without any gimmicks. Use of simple looping logics gives the result. Take a look [here](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-006/jaldhar-h-vyas/perl5/ch-1.pl). For the second challenge, he came up with [one liner](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-006/jaldhar-h-vyas/perl5/ch-2.pl).

### Joelle Maslak
![Joelle Maslak](/images/team/joelle_maslak.jpg)

Joelle's solution looks full of magic, specially this line below:

    **say join( ",", map( { ( $_->[0] != $_->[1] ) ? join( '-', @$_ ) : $_->[0] } @runs ) );**.

Checkout the full code [here](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-006/joelle-maslak/perl5/ch-1.pl). And for the second challenge, she surprised me again with this line.

    **say substr(640320**3 + 744 - 196844/(640320**3 + 744), 0, 34);**

### Kian-Meng Ang
![Kian-Meng Ang](/images/team/user.jpg)

Kian-Meng's [solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-006/kian-meng-ang/perl5/ch-1.pl) is clean. I am sure you will agree with me.

### Laurent Rosenfeld
![Laurent Rosenfeld](/images/team/laurent_rosenfeld.jpg)

Laurent is one of the few members who consistently blog about his solutions. He also submits solutions in Perl5 and Perl6. Checkout his two blogs [one](http://blogs.perl.org/users/laurent_r/2019/05/perl-weekly-challenge-6-compact-number-ranges.html) and [two](http://blogs.perl.org/users/laurent_r/2019/05/perl-weekly-challenge-6-ramanujans-constant.html).

### Maxim Kolodyazhny
![Maxim Kolodyazhny](/images/team/user.jpg)

Maxim use of CPAN module [List::Util](https://metacpan.org/pod/List::Util) is really cool. You must take a look [here](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-006/maxim-kolodyazhny/perl5/ch-1.pl). For the second challenge, he proposed this one line:

    **say bexp( PI * sqrt(163), 80 );**.

### Ruben Westerberg
![Ruben Westerberg](/images/team/user.jpg)

Ruben simple use of **pop** and **push** is so beautiful. Checkout his [code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-006/ruben-westerberg/perl5/ch-1.pl).

***

Last but not the least,  I would like to request all members, at least the one who blogs, please send us your photo to use in the weekly blog, if not already sent.
