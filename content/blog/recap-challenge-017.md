---
title: "RECAP - Perl Weekly Challenge - 017"
date: 2019-07-21T10:00:00+00:00
description: "My personal take on the Challenge #017."
type: post
image: images/blog/recap-challenge-017.jpg
author: Mohammad S Anwar
tags: ["Perl5", "Perl6"]
---
***
***

# HEADLINES

***
***

When I proposed **Bhagavad Git API** task for the [Perl Weekly Challenge - 017](/blog/perl-weekly-challenge-017), I was hoping one of team member from India would pick this up. Our API task leader, **Joelle Maslak**, has been beaten by **Randy Lauen**, who just joined the team. As usual, **Joelle** always takes up API task in **Perl5** and **Perl6**. This time, **Adam Russell** also joined the group for API task this week.

I have had many request from the team members to make **RSS** feed available for the website. Personally, I am not a big fan of RSS. Therefore never bother looked into the details. But after so many request for **RSS** feed, I created perl script to generate the feed. I would love to hear what you think. If you have any suggestions to improve then please do share with us. You can find the link in the page footer. For now, you can check out [here](https://perlweeklychallenge.org/rss.xml).

Last but not the least, keep contributing to the weekly challenge, making sure we keep the focus on **Fun** and **Knowledge Sharing**.

***
***

# DAMIAN CORNER

***
***

Watch this space for Damian's [blog](http://blogs.perl.org/users/damian_conway/2019/07/vigenere-vs-vigenere.html) about **Perl Weekly Challenge**. Damian picked up the **Vigenere Cipher** task of [Perl Weekly Challenge - 015](/blog/perl-weekly-challenge-015). The best part of the blog was history of **Vigenere Cipher**.

***
***

# Perl 5 Solutions

***
***

### Adam Russell
![Adam Russell](/images/team/adam_russell.jpg)

Adam literaly converted the task spec into perl subroutine. It can't be any simpler. Great use of Parse::Yapp, I must confess it took me long to get my head around.
[[P5 #1](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/adam-russell/perl5/ch-1.pl)]
[[P5 #2](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/adam-russell/perl5/ch-2.pl)]
[[P5 #3](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/adam-russell/perl5/ch-3.pl)]
[[BLOG #1](https://adamcrussell.livejournal.com/5707.html)]

***

### Andrezgz
![Andrezgz](/images/team/user.jpg)

Andrezgz used **Memoize** to speed up Ackermann function solution.
[[P5 #1](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/andrezgz/perl5/ch-1.pl)]
[[P5 #2](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/andrezgz/perl5/ch-2.pl)]

***

### Daniel Mantovani
![Daniel Mantovani](/images/team/daniel_mantovani.jpg)

Daniel used regex very smartly to solve URL parser task.
[[P5 #1](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/daniel-mantovani/perl5/ch-1.pl)]
[[P5 #2](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/daniel-mantovani/perl5/ch-2.pl)]

***

### Dave Jacoby
![Dave Jacoby](/images/team/dave_jacoby.jpg)

Dave solved the Ackermann function with Memoize. He also showed how Mojo::URL can be used to parse URL. Nice writings.
[[P5 #1](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/dave-jacoby/perl5/ch-1.pl)]
[[P5 #2](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/dave-jacoby/perl5/ch-2.pl)]
[[BLOG #1](https://jacoby.github.io/2019/07/16/thoughts-on-perl-weekly-challenge-17.html)]

***

### Duane Powell
![Duane Powell](/images/team/duane-powell.jpg)

Duane use of recursive function for Ackermann Function task is simple but elegant. I liked the idea of test data generation. He took the help of URI module to solve URL parser task.
[[P5 #1](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/duane-powell/perl5/ch-1.pl)]
[[P5 #2](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/duane-powell/perl5/ch-2.pl)]

***

### Duncan C. White
![Duncan C. White](/images/team/duncan_white.jpg)

Duncan solved the Ackermann funciton task with the help of **Memoize** to improved the recursive function use.
[[P5 #1](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/duncan-c-white/perl5/ch-1.pl)]
[[P5 #2](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/duncan-c-white/perl5/ch-2.pl)]

***

### E. Choroba
![E. Choroba](/images/team/e-choroba.jpg)

Choroba introduced Erlang while working on Ackermann function. He always find some new distribution from CPAN to solve the task. This time, he used **URI::URL** to solve URL parser task. Great learning experience.
[[P5 #1](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/e-choroba/perl5/ch-1.pl)]
[[P5 #2](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/e-choroba/perl5/ch-2.pl)]
[[BLOG #1](http://blogs.perl.org/users/e_choroba/2019/07/perl-weekly-challenge-017-ackermann-function-and-url-parsing.html)]

***

### Kian-Meng Ang
![Kian-Meng Ang](/images/team/user.jpg)

**Kian-Meng Ang**, our in-house **Perl5 reviwer**, solution for Ackermann Function task is complete with unit test. I just love it, when the solution has unit test.
[[P5 #1](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/kian-meng-ang/perl5/ch-1.pl)]
[[P5 #2](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/kian-meng-ang/perl5/ch-2.pl)]

***

### Lubos Kolouch
![Lubos Kolouch](/images/team/lubos_kolouch.jpg)

**Lubos Kolouch** went a step further than **Kian-Meng Ang** and came up with a complete command line app to test the Ackermann function task.
[[P5 #1](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/lubos-kolouch/perl5/ch-1.pl)]
[[P5 #2](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/lubos-kolouch/perl5/ch-2.pl)]

***

### Michael Hamlin
![Michael Hamlin](/images/team/user.jpg)

Michael created hyper function to deal with Ackermann Function task.
[[P5 #1](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/michael-hamlin/perl5/ch-1.pl)]

***

### Roger Bell West
![Roger Bell West](/images/team/user.jpg)

Roger was the first member who submitted the **Perl5** solution to both tasks.
[[P5 #1](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/roger-bell-west/perl5/ch-1.pl)]
[[P5 #2](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/roger-bell-west/perl5/ch-2.pl)]

***

### Steven Wilson
![Steven Wilson](/images/team/user.jpg)

Steven solution for Ackermann function task is also complete with unit test.
[[P5 #1](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/steven-wilson/perl5/ch-1.pl)]
[[P5 #2](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/steven-wilson/perl5/ch-2.pl)]

***

### Yozen Hernandez
![Yozen Hernandez](/images/team/user.jpg)

Yozen dedicates a blog for each task and I am loving it. You get to learn so much about each task.
[[P5 #1](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/yozen-hernandez/perl5/ch-1.pl)]
[[P5 #2](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/yozen-hernandez/perl5/ch-2.pl)]
[[BLOG #1](https://yzhernand.github.io/posts/perl-weekly-challenge-17-1/)]
[[BLOG #2](https://yzhernand.github.io/posts/perl-weekly-challenge-17-2/)]

***
***

# Perl 6 Solutions

***
***

### Arne Sommer
![Arne Sommer](/images/team/arne-sommer.jpg)

Arne used multisubs to solve the Ackermann function. He then used Perl6 Grammar to solve URL parser task. Great blog to read.
[[P6 #1](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/arne-sommer/perl6/ch-1.p6)]
[[P6 #2](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/arne-sommer/perl6/ch-2.p6)]
[[BLOG #1](https://perl6.eu/ackerman-url.html)]

***

### Francis Whittle
![Francis Whittle](/images/team/user.jpg)

Francis showed how to caching can be used with Perl6 to solve the Ackermann function. Perl6 lover would find the Grammar based solution to URL parser task very informative.
[[P6 #1](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/fjwhittle/perl6/ch-1.p6)]
[[P6 #2](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/fjwhittle/perl6/ch-2.p6)]
[[BLOG #1](https://rage.powered.ninja/2019/07/21/uniform-resource-parsing.html)]

***

### Kevin Colyer
![Kevin Colyer](/images/team/user.jpg)

Kevin had fun with Grammar dealing with this week tasks,
[[P6 #1](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/kevin-colyer/perl6/ch-1.p6)]
[[P6 #2](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/kevin-colyer/perl6/ch-2.p6)]

***

### Noud
![Noud](/images/team/user.jpg)

Noud presented his cool solution for Ackermann function task.
[[P6 #1](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/noud/perl6/ch-1.p6)]
[[P6 #2](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/noud/perl6/ch-2.p6)]

***

### Ozzy
![Ozzy](/images/team/user.jpg)

Ozzy attempted URL parser task with the **Perl6 Grammar**. You must check out.
[[P6 #2](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/ozzy/perl6/ch-2.p6)]

***

### Randy Lauen
![Randy Lauen](/images/team/user.jpg)

Welcome to the team, **Randy**. I loved you started with the optional API task. Looking forward to more fun in the following weeks.
[[P6 #3](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/randy-lauen/perl6/ch-3.p6)]

### Scimon Proctor
![Scimon Proctor](/images/team/simon_proctor.jpg)

Scimon is always lightning fast in submitting the solution in **Perl6**.
[[P6 #1](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/simon-proctor/perl6/ch-1.p6)]

***
***

# Perl 5 and Perl 6 Solutions

***
***

### Athanasius
![Athanasius](/images/team/athanasius.jpg)

Athanasius is one the few members who deals with **Perl5** and **Perl6** with equal ease.
[[P5 #1](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/athanasius/perl5/ch-1.pl)]
[[P5 #2](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/athanasius/perl5/ch-2.pl)]
[[P6 #1](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/athanasius/perl6/ch-1.p6)]
[[P6 #2](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/athanasius/perl6/ch-2.p6)]

***

### Feng Chang
![Feng Chang](/images/team/user.jpg)

Feng Chang is one member that I always look forward to every week. You must checkout his solutions.
[[P5 #1](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/feng-chang/perl5/ch-1.pl)]
[[P5 #2](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/feng-chang/perl5/ch-2.pl)]
[[P6 #1](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/feng-chang/perl6/ch-1.p6)]
[[P6 #2](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/feng-chang/perl6/ch-2.p6)]

***

### Jaldhar H. Vyas
![Jaldhar H. Vyas](/images/team/jaldhar_vyas.jpg)

Jaldhar blog is ever so informative. You must check out.
[[P5 #1](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/jaldhar-h-vyas/perl5/ch-1.pl)]
[[P5 #2](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/jaldhar-h-vyas/perl5/ch-2.pl)]
[[P5 #3](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/jaldhar-h-vyas/perl5/ch-3.pl)]
[[P6 #1](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/jaldhar-h-vyas/perl6/ch-1.p6)]
[[P6 #2](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/jaldhar-h-vyas/perl6/ch-2.p6)]
[[BLOG #1](https://www.braincells.com/perl/2019/07/perl_weekly_challenge_week_17.html)]

***

### Joelle Maslak
![Joelle Maslak](/images/team/joelle_maslak.jpg)

I just love **Joelle Maslak** solutions, specially API task. She does API talk in **Perl5** and **Perl6**.
[[P5 #1](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/joelle-maslak/perl5/ch-1.pl)]
[[P5 #2](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/joelle-maslak/perl5/ch-2.pl)]
[[P5 #3](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/joelle-maslak/perl5/ch-3.pl)]
[[P6 #1](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/joelle-maslak/perl6/ch-1.p6)]
[[P6 #2](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/joelle-maslak/perl6/ch-2.p6)]
[[P6 #3](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/joelle-maslak/perl6/ch-3.p6)]

***

### Laurent Rosenfeld
![Laurent Rosenfeld](/images/team/laurent_rosenfeld.jpg)

You must checkout Perl6 solution of Ackermann function task. Even if you don't know Perl6, you can still enjoy it.
[[P5 #1](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/laurent-rosenfeld/perl5/ch-1.pl)]
[[P5 #2](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/laurent-rosenfeld/perl5/ch-2.pl)]
[[P6 #1](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/laurent-rosenfeld/perl5/ch-1.p6)]
[[P6 #2](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/laurent-rosenfeld/perl5/ch-2.p6)]
[[BLOG #1](http://blogs.perl.org/users/laurent_r/2019/07/-perl-weekly-challenge.html)]

***

### Ruben Westerberg
![Ruben Westerberg](/images/team/user.jpg)

Ruben extensively used regex for URL parser task. You must check out yourself.
[[P5 #1](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/ruben-westerberg/perl5/ch-1.pl)]
[[P5 #2](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/ruben-westerberg/perl5/ch-2.pl)]
[[P6 #1](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/ruben-westerberg/perl6/ch-1.p6)]
[[P6 #2](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/ruben-westerberg/perl6/ch-2.p6)]

***

### Veesh Goldman
![Veesh Goldman](/images/team/veesh_goldman.jpg)

Veesh use of Mojo::URL for URL parser task looks so simple yet elegant. He also showed how bigint can help in the Ackermann function task.
[[P5 #1](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/veesh-goldman/perl5/ch-1.pl)]
[[P5 #2](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/veesh-goldman/perl5/ch-2.pl)]
[[P6 #1](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/veesh-goldman/perl6/ch-1.p6)]
[[BLOG #1](http://blogs.perl.org/users/veesh/2019/07/up-up-and-away.html)]

***
***

Last but not the least, I would like to request all members, please send us your photo, that you already use on some other web platform, to use in the weekly blog, if not already sent.

***
***
