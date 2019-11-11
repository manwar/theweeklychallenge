---
title: "Kian-Meng Ang Weekly Review: Challenge - 019"
date: 2019-08-10T00:00:00+00:00
description: "Kian-Meng Ang Weekly Review: Challenge - #019."
type: post
image: images/blog/p5-review-challenge-019.jpg
author: Kian-Meng Ang
tags: ["Perl"]
---
***
Continues from [previous week](/blog/review-challenge-018/).

Feel free to [submit a merge request or open a ticket](https://github.com/manwar/perlweeklychallenge) if you found any issues with this post. We highly appreciate and welcome your feedback.

For a quick overview, go through the [original tasks](/blog/perl-weekly-challenge-019/) and [recap](/blog/recap-challenge-019/) of the weekly challenge.

This week challenge was quite straight forward and they said, simpler tasks will always leads to more creative solutions.

***
### Task #1
***

In general, this was quite a straight forward question. Participant can either find the month in a naive and brute force way or selectively through certain criteria. These criteria includes a month which start on Friday and have 31 days.

Some submitted solutions we noticed that were doing things differently.

Out of many ways to display the result, **Jaime** was definitely thinking out of the box. The solution [used the result](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-019/jaime/perl5/ch-1.pl) from the console calendar program, [`cal`](https://en.wikipedia.org/wiki/Cal_(Unix)) to show the month with 5 weekends. This was definitely a nifty approach to visualize the output. If you can't get the script to run, remove the `-h` parameter.

This was one of the trend we noticed in last few challenges. Participants do not use or minimize the use of any external CPAN modules in their submitted solutions. Why? As **Daniel Mantovani** [puts it](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-019/daniel-mantovani/perl5/ch-1.pl), _"it will probably not be that challenging to do so"._ Hence, we noticed participant like [Adam Russell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-019/adam-russell/perl5/ch-1.pl) and [Jaldhar H. Vyas](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-019/jaldhar-h-vyas/perl5/ch-1.pl) who took this approach by writing additional codes to check for day of the week or detecting leap year instead of relying on external CPAN module.

Nevertheless, some participants still depends on CPAN modules for a quick solution. Common date-related CPAN modules used for this tasks includes [`Time::Piece`](https://metacpan.org/pod/Time::Piece), [`Time::Local`](https://metacpan.org/pod/Time::Local), [`Date::Time`](https://metacpan.org/pod/Date::Time), [`Date::Manip`](https://metacpan.org/pod/Date::Manip), [`Date::Calc`](https://metacpan.org/pod/Date::Calc), [`Time::Seconds`](https://metacpan.org/pod/Time::Seconds), and [`POSIX`](https://metacpan.org/pod/POSIX).

If you saw a sequence of number, `1, 3, 5, 7, 8, 10, 12` or `0, 2, 4, 6, 7, 9, 11` used to exclude certain months and wonder why? Look at the solution by [Dave Jacoby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-019/dave-jacoby/perl5/ch-1.pl), [Gustavo Chaves](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-019/gustavo-chaves/perl5/ch-1.pl), [Athanasius](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-019/athanasius/perl5/ch-1.pl), and [Daniel Mantovani](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-019/daniel-mantovani/perl5/ch-1.pl). They have put in the effort to write good comment on this magic sequence. Basically, these numbers are 31 day month (**Daniel Mantovani** have a good explanation on [why you need 31 days](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-019/daniel-mantovani/perl5/ch-1.pl)), which is one of the criteria for a month to have 5 weekends.

And if you noticed from these solutions, some participants love to write comment using [POD markup](https://perldoc.perl.org/perlpod.html) or file literals, the content after the [`__END__`](https://perldoc.perl.org/functions/__END__.html) token. The main difference is POD markup will fail if there were syntax errors where all text after the `__END__` token will be ignored by Perl compiler. We're not sure where and how **Prajith P** uses Perl for, but he seemed to install it in an unconventional path by [the looks of the shebang line](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-019/prajith-p/perl5/ch-1.pl).

```perl
    #!/opt/deployer/embedded/bin/perl -w
```

As usual, participants who used different ways to loop through the years and months. **Andrezgz** was using [`do...until`](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-019/andrezgz/perl5/ch-1.pl), **E. Choroba** preferred [`while...continue`](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-019/e-choroba/perl5/ch-1.pl), and **Joelle Maslak** picked [`map and grep`](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-019/joelle-maslak/perl5/ch-1.pl) instead.

***
### Task #2
***

Two steps needed to solve this problem. First was to split the paragraph into individual token or word. And second, rearrange or wrap the text according to
the width length.

Compare to **Task #1**, this was more harder if you want to solve it differently instead of following the [pseudocode of the greedy algorithm](https://en.wikipedia.org/wiki/Line_wrap_and_word_wrap#Minimum_number_of_lines). Did any participants solved it differently? Yes, a few of them.

**Athanasius** was the only participant where [the solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-019/athanasius/perl5/ch-2.pl) can wrap text with optionally indentation and multiple paragraphs.

Both [Laurent Rosenfeld](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-019/laurent-rosenfeld/perl5/ch-2.pl) and [E. Choroba](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-019/e-choroba/perl5/ch-2.pl) used an alternative way which split a line rather than words to wrap the text by using [`rindex`](https://perldoc.perl.org/functions/rindex.html) function. **Gabor Szabo** wrote about [this approach](https://perlmaven.com/break-lines-with-max-width) in details.

For CPAN module consumers, **Peter Houston** used [`Text::Wrap`](https://metacpan.org/pod/Text::Wrap) to [solve this problem](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-019/pete-houston/perl5/ch-2.pl). For **Jamie**, he used [`Text::ParseWords`](https://perldoc.perl.org/Text/ParseWords.html) to split and extract the words from the standard input.

While this approach was seldom used, **E.Choroba** used [here doc in the test suite](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-019/e-choroba/perl5/ch-2.pl) was something new we've seen so far. Do you know that indentation was supported [since Perl v5.26](https://www.effectiveperlprogramming.com/2016/12/strip-leading-spaces-from-here-docs-with-v5-26/)?

        << '__PAR__', << '__EXPECTED__' =~ s/\n$//r);
    ABCDE
    AABBCC
    A BB CC
    AA BB CC
    AAA BB CC
    AAAA BB CC
    AAAAA BB CC
    __PAR__
    ABCDE
    AABBC
    C A
    BB CC
    AA BB
    CC
    AAA
    BB CC
    AAAA
    BB CC
    AAAAA
    BB CC
    __EXPECTED__

***
### Task #3
***

The regular participants were back again. For **Perl 5**, [Steven Wilson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-019/steven-wilson/perl5/ch-3.pl) and [Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-019/joelle-maslak/perl5/ch-3.pl) and for **Perl 6**, [Randy Lauen](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-019/randy-lauen/perl6/ch-3.p6) and [Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-019/joelle-maslak/perl6/ch-3.p6) again.

For those who haven't done this task before, do give it a try, especially those using **Perl 5** where you can pick different HTTP client CPAN modules.

***
### Blog Posts
***

Some write-ups from the usual suspects.

(1) [Word Wrapped Weekends, Perl 6 Edition](https://perl6.eu/word-wrapped-weekends.html) by **Arne Sommer**

(2) [Perl Weekly Challenge 019](https://adamcrussell.livejournal.com/6221.html) by **Adam Russell**

(3) [Five-Weekend Mondays and How Years Work](https://jacoby.github.io/2019/07/31/fiveweekend-mondays-and-how-years-work.html) by **Dave Jacoby**

(4) [Counting Weekends And Wrapping Text](https://perlhacks.com/2019/08/counting-weekends-and-wrapping-text/) by **Dave Cross**

(5) [Perl Weekly Challenge # 19: Weekends and Wrapping Lines](http://blogs.perl.org/users/laurent_r/2019/07/perl-weekly-challenge-19-weekends-and-wrapping-lines.html) by **Laurent Rosenfeld**

(6) [Perl 6 small stuff #21: it’s a date! …or: learn from an overly complex solution to a simple task](https://medium.com/@jcoterhals/perl-6-small-stuff-21-its-a-date-or-learn-from-an-overly-complex-solution-to-a-simple-task-cf469252724f) by **Jo Christian Oterhals**

(7) [Perl Weekly Challenge: Week 19](https://www.braincells.com/perl/2019/08/perl_weekly_challenge_week_19.html) by **Jaldhar H. Vyas**

(8) [Perl Weekly Challenge 19](https://blog.firedrake.org/archive/2019/08/Perl_Weekly_Challenge_19.html) by **Roger Bell West**

(9) [Greedy expression of the best months – Perl weekly challenge 19](https://rage.powered.ninja/2019/07/29/best-months.html) by **Francis Whittle**

(10) [Perl Weekly Challenge 019: Five Weekends and Paragraph Wrapping](http://blogs.perl.org/users/e_choroba/2019/08/perl-weekly-challenge-019-five-weekends-and-paragraph-wrapping.html) by **E. Choroba**
