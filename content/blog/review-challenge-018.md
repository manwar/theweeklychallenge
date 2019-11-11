---
title: "Kian-Meng Ang Weekly Review: Challenge - 018"
date: 2019-08-03T00:00:00+00:00
description: "Kian-Meng Ang Weekly Review: Challenge - #018."
type: post
image: images/blog/p5-review-challenge-018.jpg
author: Kian-Meng Ang
tags: ["Perl"]
---
***
Continues from [previous week](/blog/review-challenge-017/).

Feel free to [submit a merge request or open a ticket](https://github.com/manwar/perlweeklychallenge) if you found any issues with this post. We highly appreciate and welcome your feedback.

For a quick overview, go through the [original tasks](/blog/perl-weekly-challenge-018/) and [recap](/blog/recap-challenge-018/) of the weekly challenge.

***
### Task #1
***

If you need to have a quick overview how to solve the challenge, read the submitted solutions by [Mark Anderson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-018/mark-anderson/perl5/ch-1.pl), [Jamie](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-018/jaime/perl5/ch-1.pl), and [E. Choroba](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-018/e-choroba/perl5/ch-1.pl) (read his [detailed blog post](http://blogs.perl.org/users/e_choroba/2019/07/perl-weekly-challenge-0181-longest-common-substring.html) on this). These solutions were short and easily understood due to the brevity and clarity of the code. Read **Mark Senn**'s [post](https://engineering.purdue.edu/~mark/pwc-018.pdf) on different dimensions in coding.

There were a few strategies used by participants to tackle this [longest common substring problem](https://en.wikipedia.org/wiki/Longest_common_substring_problem). No participant use this but [`String::LCSS`](https://metacpan.org/pod/String::LCSS) and [`String::LCSS_XS`](https://metacpan.org/pod/String::LCSS_XS) are the CPAN modules that can be used to solve this.

The common approach was generating substrings, count, filter, and find the highest occurrences. The main difference was the implementation of these steps. For example, **Athanasius** stored the list of substrings as set using the [`Set::Scalar`](https://metacpan.org/pod/Set::Scalar) CPAN module. Likewise, **Joelle Maslak** [solved it](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-018/joelle-maslak/perl5/ch-1.pl) by finding the intersection of all substrings within an array.

[Adam Russell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-018/adam-russell/perl5/ch-1.pl), [E. Choroba](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-018/e-choroba/perl5/ch-1a.pl), [Roger Bell West](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-018/roger-bell-west/perl5/ch-1.pl) (inspired by the [pseudocode](https://en.wikipedia.org/wiki/Longest_common_substring_problem)) solved the task using the recommended suffix tree algorithm by building a generalized suffix tree. **Adam Russell** went a step further by implementing the suffix array data structure as an [external Perl module](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-018/adam-russell/perl5/SuffixArray.pm). **Ruben Westerberg**'s [solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-018/ruben-westerberg/perl5/ch-1.pl) was rather different and unique.

***
### Task #2
***

If we remembered correctly, the first task where we have a clear defined problem. Basically, participant needs to fill up the implementation details of a list of method definitions. Even **Duncan C. White** [agreed](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-018/duncan-c-white/perl5/ch-2.pl) with that.

Now, for some submitted solutions that caught our attention for this task.

Instead of just plain hash to store and group the queue item by priority, **Duane Powel** opted for a [nested hash references](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-018/duane-powell/perl5/ch-2.pl) data structure. **Adam Russell** did [something similar](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-018/adam-russell/perl5/PriorityQueue.pm) but with the help of [`Class::Struct`](https://metacpan.org/pod/Class::Struct) CPAN module. There was another way, more abstract approach that use the [`List::Priority`](https://metacpan.org/pod/List::Priority) CPAN module as seen in **Athanasius**' [solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-018/athanasius/perl5/MyPriorityQueue.pm). **Jaldhar H. Vyas** [went a step further](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-018/jaldhar-h-vyas/perl5/ch-2.pl) to create almost a CPAN module. He even wrote details documentation in POD in his answer!

Instead of creating a Perl module, **Laurent Rosenfeld** used [anonymous subroutines](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-018/laurent-rosenfeld/perl5/ch-2.pl) to implement the interfaces in a functional programming manner. This was rather distinctive among all solutions. **Lubos Kolouch** did something similar, so was [Andrezgz](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-018/andrezgz/perl5/ch-2.pl), but with a [very comprehensive test coverage and cases](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-018/lubos-kolouch/perl5/ch-2.pl). Another participant with [good test coverage](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-018/yozen-hernandez/perl5/ch-2.pl) was **Yozen Hernandez**.

The most [comprehensive solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-018/e-choroba/perl5/ch-2.pl) submitted this week belongs to **E. Choroba**. There were two implementations either an array or a heap data structure, a benchmark (array is faster, see result below), and test coverage.

```perl
           Rate  heap array
    heap  120/s    --  -56%
    array 272/s  126%    --
```

Where **Jaldhar H. Vyas** used [`Moo`](https://metacpan.org/pod/Moo), **Joelle Maslak** used [`Moose`](https://metacpan.org/pod/Moose) to [create](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-018/joelle-maslak/perl5/lib/PriorityQueue.pm) a Perl module. The used of [`Test2::V0`](https://metacpan.org/pod/Test2::V0) CPAN module was the first we seen so far in all challenges.


***
### Task #3
***

Slow week but at least there were submissions to this task this time. For **Perl 5**, we have the usual [Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-018/joelle-maslak/perl5/ch-3.pl) and for **Perl 6**, [Randy Lauen](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-018/randy-lauen/perl6/ch-3.p6) and [Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-018/joelle-maslak/perl6/ch-3.p6).

After so many weeks of [reviewing](https://perlweeklychallenge.org/blog/the-optional-api-task/) this optional **Task #3**, we observed that **Perl 6** solutions were definitely more structure due to a consistent Object-Oriented (OO) support in **Perl 6** and [`Cro::HTTP::Client`](https://cro.services/docs/reference/cro-http-client) module.

For those who haven't try this tasks before, do give it a shot.

***
### Blog Posts
***

Regular posts by some of the participants.

(1) [Substrings and Queues with Perl 6](https://perl6.eu/substring-queues.html) by **Arne Sommer**

The usual step-by-step walk through in **Perl 6**.

(2) [Perl Weekly Challenge - 018](https://engineering.purdue.edu/~mark/pwc-018.pdf) by **Mark Senn**

**Mark Senn** is back for this challenge and a good write-up on different coding dimensions. Recommended read.

(3) [Perl Weekly Challenge 018](https://adamcrussell.livejournal.com/6109.html) by **Adam Russell**

Read how he approached the challenge using Perl modules.

(4) [Perl Weekly Challenge # 18: Longest Common Substrings, Priority Queues, and a Functional Object System](http://blogs.perl.org/users/laurent_r/2019/07/perl-weekly-challenge-18-longest-common-substrings-priority-queues-and-a-functional-object-system.html) by **Laurent Rosenfeld**

Very detailed notes on how he tackled the problems and why he picked functional approach. Recommended read.

(5) [Perl Weekly Challenge 18](https://blog.firedrake.org/archive/2019/07/Perl_Weekly_Challenge_18.html) by **Roger Bell West**

Read how he translated the pseudocode for **Task #1** into Perl and the problems encountered.

(6) [Perl Weekly Challenge 018/1: Longest Common Substring](http://blogs.perl.org/users/e_choroba/2019/07/perl-weekly-challenge-0181-longest-common-substring.html) by **E. Choroba**

He have outdid himself this time, especially the generating and visualizing the suffix tree. Recommended read.

(7) [Perl Weekly Challenge 018/2: Priority Queue](http://blogs.perl.org/users/e_choroba/2019/07/perl-weekly-challenge-0182-priority-queue.html) by **E. Choroba**

A discussion on binary heap for **Task #2**. Also another recommended read.
