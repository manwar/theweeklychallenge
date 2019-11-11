---
title: "Kian-Meng Ang Weekly Review: Challenge - 017"
date: 2019-07-26T00:00:00+00:00
description: "Kian-Meng Ang Weekly Review: Challenge - #017."
type: post
image: images/blog/p5-review-challenge-017.jpg
author: Kian-Meng Ang
tags: ["Perl"]
---
***
Continues from [previous week](/blog/review-challenge-016/).

Feel free to [submit a merge request or open a ticket](https://github.com/manwar/perlweeklychallenge) if you found any issues with this post. We highly appreciate and welcome your feedback.

For a quick overview, go through the [original tasks](/blog/perl-weekly-challenge-017/) and [recap](/blog/recap-challenge-017/) of the weekly challenge.

***
### Task #1
***

For a good overview on how this recursive formulae works, you can look at this [animated calculator](https://gfredericks.com/things/arith/ackermann).

This seemed like a straight forward question, a direct translation and implementation of the [Ackermann function](https://en.wikipedia.org/wiki/Ackermann_function) using the definition of the formulae given.

Well, some particpants ([Veesh Goldman](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/veesh-goldman/perl5/ch-1.pl), [Duane Powell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/duane-powell/perl5/ch-1.pl), and [Daniel Mantovani](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/daniel-mantovani/perl5/ch-1.pl)) discovered that direct formulae implementation will hit the bottleneck of the recursion starting from `A(4, 2)`. Or as **Veesh Goldman** [found out](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/veesh-goldman/perl5/ch-1.pl), _"good luck getting (4, 2) to print, it's 2 ** 65533.."_. Even using caching through storing pre-calculated values in hash or [`Memoize`](https://perldoc.perl.org/Memoize.html) **CPAN** module would only help to a certain limit. Nevertheless, **Dave Jacoby** [did some benchmark](https://jacoby.github.io/2019/07/16/thoughts-on-perl-weekly-challenge-17.html) and found out that `Memoize` did make the code faster by **15x**. Likewise, **Yozen Hernandez**'s [benchmark result](https://yzhernand.github.io/posts/perl-weekly-challenge-17-1/) showed a **216%** improvement.

As **Ackermann** function is deeply recursive (more than 100 levels), you will get `Deep recursion on anonymous subroutine` warning. The workaround was to suppress the warning through [`no warnings` pragma](https://perldoc.perl.org/warnings.html). Surprisingly, not sure why, not all submitted answers which translated the implementation directly hide this warning message.

Only the solution by [Veesh Goldman](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/veesh-goldman/perl5/arrows.pl), [Michael Hamlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/michael-hamlin/perl5/t1-ackermann-two.pl) and [Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/joelle-maslak/perl5/ch-1.pl) managed to calculate the value of `A(4, 2)` within the reasonable time.

Some notable solutions that caught our attention. The recursion subroutine of **Michael Hamlin** [direct formulate implementation](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/michael-hamlin/perl5/t1-ackermann-simple.pl) certainly stand out compare to other participants. The code was short and concise although some will argue about the clarity and readability of the nested ternary operators. There were four techniques or tricks being used here. **First**, using [`state`](https://perldoc.perl.org/functions/state.html) variable to cache the calculated value. **Second**, [`logical-or`](https://perldoc.perl.org/perlop.html#C-style-Logical-Or) was used to check and retrieve cached value or to calculate and cache it. **Third**, the [`do`](https://perldoc.perl.org/functions/do.html) block used here was to improve readability and group the ternary operators although the usage was optional here. Note that the `do` block here may seem like a subroutine but it's not. And **fourth**, nested [ternary or conditional operators](https://perldoc.perl.org/perlop.html#Conditional-Operator) to replace `if-else` statement.


```perl
    sub _ack( $m, $n ) {
        state @known;
        $count++;
        return $known[$m][$n] ||= do {
            !$m ? $n + 1 :
            !$n ? _ack($m - 1, 1) :
            _ack($m - 1, _ack($m, $n - 1));
        };
    }
```

Another interesting Perl trick we found in **Joelle Maslak**'s [solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/joelle-maslak/perl5/ch-1.pl). Note the last two lines of the subroutine which was an implementation of a [pure Perl tail call optimization](https://www.perlmonks.org/?node_id=161611). The [`goto &NAMED_SUBROUTINE`](https://perldoc.perl.org/functions/goto.html) form immediately exits the current subroutine and calls the named subroutine with new values of [`@_`](https://perldoc.perl.org/perlvar.html#@_).

```perl
    sub up_arrow($m, $num_arrows, $n) {
        no warnings 'recursion';
        return 1 unless $n;
        return $m ** $n if $num_arrows == 1;

        @_ = ($m, $num_arrows-1, up_arrow($m, $num_arrows, $n-1));
        goto &up_arrow;
    }
```

***
### Task #2
***

In general, three approaches were used by the participants which includes parsing the **URL** manually, using a **CPAN** module, or use your own parser.

Most participants ([Dave Jacoby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/dave-jacoby/perl5/ch-2.pl), [Daniel Mantovani](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/daniel-mantovani/perl5/ch-2.pl), [Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/ruben-westerberg/perl5/ch-2.pl), [Laurent Rosenfeld](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/laurent-rosenfeld/perl5/ch-2.pl), [Jaldhar H. Vyas](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/jaldhar-h-vyas/perl5/ch-2.pl), [Roger Bell West](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/roger-bell-west/perl5/ch-2.pl), [Yozen Hernandez](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/yozen-hernandez/perl5/ch-2.pl), [Duncan C White](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/duncan-c-white/perl5/ch-2.pl), [Feng Chang](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/feng-chang/perl5/ch-2.pl), [Steven Wilson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/steven-wilson/perl5/ch-2.pl), and [Andrezgz](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/andrezgz/perl5/ch-2.pl)) solved this task using the manual way through regex. While there were many coding styles to express your regex, we found **Laurent Rosenfeld**'s [style](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/laurent-rosenfeld/perl5/ch-2.pl) short and sweet with all the necessary details.

```perl
    $url =~ m{
        ^                       # start of string
        (\w+ (?: : \w+)?)       # scheme, captured in $1
        ://                     # literal ://
        (?:(\w+:\w+)@)?         # optional user info captured in $2
        (\w+ (?: \.\w+)*)       # host, captured in $3
        (?: : (\d+) )?          # optional port captured in $4
        (/(?:\w+ (?:/\w+)*)?)   # path, captured in  $5
        (?: \? (\w+=[\s\w]+))?  # optional query in $6
        (?: \# (\w+))?          # optional fragment in $7
        $                       # end of string
    }x;
```

Some **CPAN** modules used to parse the URL from the submitted answers includes [`Mojo::URL`](https://mojolicious.org/perldoc/Mojo/URL), [`URI`](https://metacpan.org/pod/URI), [`URI::Split`](https://metacpan.org/pod/URI::Split), and [`URI::Fast`](https://metacpan.org/pod/URI::Fast).

**Yozen Hernandez** did a [benchmark](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/yozen-hernandez/perl5/ch-2.pl) test to compare normal regular expression and `Mojo::URL` to parse the URL. Theoretically plain regular expression should be faster but the benchmark indicated that it's way **255%** faster than `Mojo::URL`. We assumed that there must be quite a lot of overhead with `Mojo::URL`.

```perl
                           Rate               mojo from_scratch_regex
    mojo                31204/s                 --               -72%
    from_scratch_regex 110892/s               255%                 --
```

We believed this was the first time where three participants submitted their solutions through the implementation of a parser. **Adam Russell** [done this](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-017/adam-russell/perl5) through [`Parse::Yapp`](https://metacpan.org/pod/Parse::Yapp). **E. Choroba** took an [alternative way](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/e-choroba/perl5/ch-2.pl) using [`Marpa::R2`](https://metacpan.org/pod/Marpa::R2). And lastly, **Joelle Maslak** [solved this](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/joelle-maslak/perl5/ch-2.pl) using [`Parse::RecDescent`](https://metacpan.org/pod/Parse::RecDescent).

It may seemed over-engineered, but we love to see creative and alternative solutions and tricks using Perl for every weekly challenge.

If you're interested in parsing in Perl, **Adam Russell** [recommended](https://adamcrussell.livejournal.com/5707.html) that you should start with this book, [Pro Perl Parsing](https://www.apress.com/us/book/9781590595046).

***
### Task #3
***

Compare to last week, we've more submissions this week for **Perl 5** ([Adam Russell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/adam-russell/perl5/ch-3.pl), [Jaldhar H Vyas](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/jaldhar-h-vyas/perl5/ch-3.pl), and the regular participant for this task, [Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/joelle-maslak/perl5/ch-3.pl)) and **Perl 6** ([Randy Lauen](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/randy-lauen/perl6/ch-3.p6) and again, [Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/joelle-maslak/perl6/ch-3.p6)).

If you want to learn how to use [OAuth](https://en.wikipedia.org/wiki/OAuth) with Perl, go through all the submitted answers to learn how it was done.

In our [previous challenge](https://perlweeklychallenge.org/blog/review-challenge-015/), **Neil Bowers** created a new **CPAN** module to solve this task. And this week, it was **Jaldhar H. Vyas** turn to [create](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/jaldhar-h-vyas/perl5/ch-3.pl) a whole **CPAN** module, `WWW::Bhagavadgita` (he will upload to **CPAN** later) as part of his solution. Similarly for **Perl 6**, **Randy Lauen** have created a [Perl 6 package](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-017/randy-lauen/perl6/BhagavadGita.pm6) to solve this solution. Comparing **Perl 5** with `Moo` and **Perl 6** solution, it made us wonder if **Perl 6** would be a good replacement or successor for web development these days?

And for those who haven't try this optional task, feel free to give it a shot, either in **Perl 5** or **Perl 6**.

***
### Blog Posts
***

Additional details write-up by some of our regular participants for this week challenge.

(1) [Up, up and Away!](http://blogs.perl.org/users/veesh/2019/07/up-up-and-away.html) by **Veesh Goldman**.

Read how he optimized the **Task #1** using different strategies in both **Perl 5** and **Perl 6**.

(2) [Ackerman, URL and Perl 6](https://perl6.eu/ackerman-url.html) by **Arne Sommer**.

The usual step-by-step code in **Perl 6**. As what he demonstrated, **Perl 6** grammar is definitely a better choice than regular expression for parsing.

(3) [Perl Weekly Challenge 017 Parsing with Parse::Yapp and using the Bhagavad Gita API](https://adamcrussell.livejournal.com/5707.html) by **Adam Russell**.

If you're interested in parsing with Perl, read how he solved the **Task #2** using a parser. The visualization of the grammar was a nice touch to the submitted solution.

(4) [Thoughts on Perl Weekly Challenge 17](https://jacoby.github.io/2019/07/16/thoughts-on-perl-weekly-challenge-17.html) by **Dave Jacoby**.

**Dave** discovered that using `Memoize` **CPAN** module help to speed up **Task #1** by **15x**.

(5) [Perl Weekly Challenge # 17: Ackermann Function and Parsing URLs](http://blogs.perl.org/users/laurent_r/2019/07/-perl-weekly-challenge.html) by **Laurent Rosenfeld**.

**Laurent** showed us that you can replace `if` statement with `multi` subroutines. His **Perl 6** solution on parsing URL was similar but different from **Arne Sommer**.

(6) [Perl Weekly Challenge: Week 17](https://www.braincells.com/perl/2019/07/perl_weekly_challenge_week_17.html) by **Jaldhar H. Vyas**.

**Jaldhar** solved all three tasks for this week challenge and again, his **Perl 6** solutions on parsing URL was similar to **Laurent**'s approach but slight minor difference.

(7) [Multitudinal Uniform Resource Parsing – Perl weekly challenge, week 17](https://rage.powered.ninja/2019/07/21/uniform-resource-parsing.html) by **Francis Whittle**.

Similar to **Laurent**, **Francis** using multiple dispatch to solve **Task #1** in **Perl 6**. Likewise, he was using the same Grammar approach to parse URL, just like **Arne** and **Laurent**.

(8) [Perl Weekly Challenge 17: The Ackermann function](https://yzhernand.github.io/posts/perl-weekly-challenge-17-1/) by **Yozen Hernandez**.

Another benchmark comparison using `Memoize` **CPAN** module for **Task #1**.

(9) [Perl Weekly Challenge 17: Writing Our Own URL Parser in Perl (But Should We?)](https://yzhernand.github.io/posts/perl-weekly-challenge-17-2/) by **Yozen Hernandez**.

Yet another benchmark result comparing regular expression against `Mojo::URL` **CPAN** module.

(10) [Perl Weekly Challenge 017: Ackermann Function and URL Parsing](http://blogs.perl.org/users/e_choroba/2019/07/perl-weekly-challenge-017-ackermann-function-and-url-parsing.html) by **E. Choroba**.

See how he related **Erlang** pattern matching to **Perl 6** multi dispatch. Read his alternative approach on URL parsing compare to **Adam Russell**.
