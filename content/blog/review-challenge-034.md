---
title: "Kian-Meng Ang Weekly Review: Challenge - 034"
date: 2019-11-24T00:03:00+00:00
description: "Kian-Meng Ang Weekly Review: Challenge - #034."
type: post
image: images/blog/p5-review-challenge-034.jpg
author: Kian-Meng Ang
tags: ["Perl"]
---
***
***
Continues from [**previous week**](/blog/review-challenge-033/).

Feel free to [**submit a merge request or open a ticket**](https://github.com/manwar/perlweeklychallenge) if you found any issues with this post. We highly appreciate and welcome your feedback.

For a quick overview, go through the [**original tasks**](/blog/perl-weekly-challenge-034/) and [**recap**](/blog/recap-challenge-034/) of the weekly challenge.

Additional feedback to the our Perl Weekly Challenge’s [**Twitter account**](https://twitter.com/perlwchallenge?lang=en) is much appreciated.

***
***
## Task #1
***
***

**CPAN** modules used: [`Data::Dumper`](https://metacpan.org/pod/Data::Dumper), [`Getopt::Long`](https://metacpan.org/pod/Getopt::Long), [`List::Util`](https://metacpan.org/pod/List::Util), [`Modern::Perl`](https://metacpan.org/pod/Modern::Perl), [`PDL`](https://metacpan.org/pod/PDL), [`PDL::Core`](https://metacpan.org/pod/PDL::Core), [`PDL::IO::Image`](https://metacpan.org/pod/PDL::IO::Image), [`PDL::ImageRGB`](https://metacpan.org/pod/PDL::ImageRGB), [`PDL::NiceSlice`](https://metacpan.org/pod/PDL::NiceSlice), [`feature`](https://metacpan.org/pod/feature), [`strict`](https://metacpan.org/pod/strict), [`warnings`](https://metacpan.org/pod/warnings)

While this may seem like a simple task, it's a good example of showing how **Perl** handles slicing for an **Array** or **Hash**. From all the submissions, we can group the solution into two categories of showing how slicing works in **Perl** language itself or through a practical example.

For the first category, start with the solution by [**Mark Anderson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-034/mark-anderson/perl5/ch-1.pl), [**Javier Luque**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-034/javier-luque/perl5/ch-1.pl), [**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-034/adam-russell/perl5/ch-1.pl), [**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-034/laurent-rosenfeld/perl5/ch-1.pl), and [**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-034/e-choroba/perl5/ch-1.pl). Next, look into the submission by [**Ruben Westerberg**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-034/ruben-westerberg/perl5/ch-1.pl) and [**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-034/steven-wilson/perl5/ch-1.pl) where both demonstrated array and hash slicing using different range of values and edge cases.

For the second category, look into different examples that illustrated the usage of slicing array and/or hash. These examples include **image processing** by [**Burkhard Nickels**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-034/burkhard-nickels/perl5/ch-1.pl), **binary search** by [**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-034/jaldhar-h-vyas/perl5/ch-1.pl), **superheroes names** by [**Andrezgz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-034/andrezgz/perl5/ch-1.pl), **prime numbers generator** by [**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-034/colin-crain/perl5/ch-1.pl), **sovereign states** by [**Petr Roubicek**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-034/petr-roubicek/perl5/ch-1.pl), **card shuffling** by [**Duane Powell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-034/duane-powell/perl5/ch-1.pl), and **user listing** by [**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-034/dave-cross/perl5/ch-1.pl).

And kudos given to [**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-034/dave-cross/perl5/ch-1.pl) for his solution that demonstrated both list and hash slicing in one line of code as shown below.

    # Lvalue is a hash slice
    # Rvalue is a list slice
    @user{qw[user id shell]} = (split /:/)[0, 2, -1];

Lastly, for good write-up on this topic, read the comment by [**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-034/colin-crain/perl5/ch-1.pl) and the details blog post by both [**E. Choroba**](http://blogs.perl.org/users/e_choroba/2019/11/perl-weekly-challenge-034-slices-and-a-dispatch-table.html) and [**Laurent Rosenfeld**](http://blogs.perl.org/users/laurent_r/2019/11/perl-weekly-challenge-34-array-and-hash-slices-and-dispatch-tables.html).

***
***
## Task #2
***
***

**CPAN** modules used: [`Data::Dumper`](https://metacpan.org/pod/Data::Dumper), [`Getopt::Long`](https://metacpan.org/pod/Getopt::Long), [`PDL`](https://metacpan.org/pod/PDL), [`PDL::Core`](https://metacpan.org/pod/PDL::Core), [`PDL::IO::Image`](https://metacpan.org/pod/PDL::IO::Image), [`PDL::ImageRGB`](https://metacpan.org/pod/PDL::ImageRGB), [`PDL::NiceSlice`](https://metacpan.org/pod/PDL::NiceSlice), [`feature`](https://metacpan.org/pod/feature), [`strict`](https://metacpan.org/pod/strict), [`warnings`](https://metacpan.org/pod/warnings)

In the past challenges, we've discussed about [**Dispatch table**](https://en.wikipedia.org/wiki/Dispatch_table), which is just a table with pointers to function or method. Implementation in **Perl** is rather easy, just a hash to function pointers.

For a quick understanding on how it being used in **Perl**, start with the submission by [**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-034/adam-russell/perl5/ch-2.pl), [**Ruben Westerberg**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-034/ruben-westerberg/perl5/ch-2.pl), [**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-034/steven-wilson/perl5/ch-2.pl) and [**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-034/e-choroba/perl5/ch-2.pl).

For more complex practical examples of **Dispatch table** implementation, look into the solution by [**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-034/dave-cross/perl5/ch-2.pl) (**console calculator**), [**Javier Luque**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-034/javier-luque/perl5/ch-2.pl) (**calculator**), [**Duane Powell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-034/duane-powell/perl5/ch-2.pl) (**card shuffling**), [**Burkhard Nickels**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-034/burkhard-nickels/perl5/ch-2.pl) (**console command**), [**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-034/laurent-rosenfeld/perl5/ch-2.pl) (**dictionary**), [**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-034/jaldhar-h-vyas/perl5/ch-2.pl) (**Rock paper scissors game**), [**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-034/roger-bell-west/perl5/ch-2.pl) (**expression evaluator**), [**Andrezgz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-034/andrezgz/perl5/ch-2.pl) (**superheroes name**), and [**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-034/colin-crain/perl5/ch-2.pl) (**another console calculator**, yes this was a popular choice among participants).

***
***
## SEE ALSO
***
***

(1) [**Perl Weekly Challenge 034**](https://adamcrussell.livejournal.com/11703.html) by **Adam Russell**

(2) [**Sliced Dispatch, The Raku Way**](https://raku-musings.com/sliced-dispatch.html) by **Arne Sommer**

(3) [**Perl Weekly Challenge #34**](http://46.91.226.185:81/www/Perl/PWC/20191111_34/ch-1.html) by **Burkhard Nickels**

(4) [**Perl Weekly Challenge 034: Slices and a Dispatch Table**](http://blogs.perl.org/users/e_choroba/2019/11/perl-weekly-challenge-034-slices-and-a-dispatch-table.html) by **E. Choroba**

(5) [**Perl Weekly Challenge: Week 34**](https://www.braincells.com/perl/2019/11/perl_weekly_challenge_week_34.html) by **Jaldhar H. Vyas**

(6) [**Perl Weekly Challenge - 034**](https://perlchallenges.wordpress.com/2019/11/11/perl-weekly-challenge-034/) by **Javier Luque**

(7) [**Perl Weekly Challenge 34: Array and Hash Slices and Dispatch Tables**](http://blogs.perl.org/users/laurent_r/2019/11/perl-weekly-challenge-34-array-and-hash-slices-and-dispatch-tables.html) by **Laurent Rosenfeld**
