---
title: "Advent Calendar - December 21, 2020"
date: 2020-12-23T00:00:00+00:00
description: "Advent Calendar - December 21, 2020."
type: post
image: images/blog/2020-12-21.jpg
author: Saif Ahmed
tags: ["Perl"]
---

[**Advent Calendar 2020**](/blog/advent-calendar-2020)
***

The gift is presented by [**Saif Ahmed**](/blog/meet-the-champion-2020-02). Today he is talking about his solution to the task `Guest house lights` of **["The Weekly Challenge - 039"](/blog/perl-weekly-challenge-039)**. This is re-produced for **Advent Calendar 2020** from the original [**post**](http://blogs.perl.org/users/saif/2019/12/the-times-you-want-to-avoid-the-short-cuts.html) by **Saif Ahmed**.

***

No spoilers here, just a rambling. There are probably countless times when one relies on the genius of others to complete tasks. If PerlWeeklyChallenges has shown me one thing, it is that there is probably nothing I can do that someone else can not do better, more efficiently, and more robustly. The key to good coding, one imagines, is to have code that survives not just the scenario presented in the challenge, but also accommodates other scenarios

# The Hotel lights

Take the lights on puzzle. A first glance at the puzzle show that the times are all overlapping, so technically the lights should be on continuously from the first guest entry to last exit. So the simplest way to extract the time the lights were on is to get the earliest time and the latest time mentioned in the log. These can be extracted using four steps: load the log, extract the earliest and the last time; convert to minutes and subtract.

```perl
#!/usr/env perl
# Perl Challenge 39 Task 1
my $log =  # from the puzzle
"1) Alex    IN: 09:10 OUT: 09:45
2) Arnold  IN: 09:15 OUT: 09:33
3) Bob     IN: 09:22 OUT: 09:55
4) Charlie IN: 09:25 OUT: 10:05
5) Steve   IN: 09:33 OUT: 10:01
6) Roger   IN: 09:44 OUT: 10:12
7) David   IN: 09:57 OUT: 10:23
8) Neil    IN: 10:01 OUT: 10:19
9) Chris   IN: 10:10 OUT: 11:00";

# extract earliest and latest times
my ($earliest,$latest)=(sort ($log=~/\d\d\:\d\d/gm))[0,-1];

#convertion function to produce minutes
sub time2minutes{
    my ($hours,$minutes)=split /:/,shift;
    return $hours*60+$minutes;
}
#print results
print "Earliest time is $earliest,
Latest time is $latest.
Lights on duration is ", time2minutes($latest)- time2minutes($earliest);
```

Cheating is no doubt fun, gets the job done, but what if the data was non-contiguous, instead of what was presented in the challenge? We'd need to work out overlaps. The data was presented sequentially, conveniently for identifying overlaps, but what if it wasn't? Would it be better to to allow in your code to accommodate these possibilities and exceed the demands of the puzzle?

# Extend the challenges

Tasks that may be completed using simple algorithms are great. Having entered the last couple of times it is clear that much can be done capitalising on previous skilful endeavours presented in CPAN. Doing a MetaCPAN search is trivial and solves many problems quickly. The RPN Challenge can be easily completed by using [Math::RPN](https://metacpan.org/pod/Math::RPN) or [Parse::RPN](https://metacpan.org/pod/Parse::RPN) but doing so to solve a problem also fails in one component that appeals to me. Challenges exist to educate and push personal boundaries. Observing other folk's entries also entertain and inspire, so thanks you clever bods who also do the challenges. The greater challenge would be to include as many operations as possible with as little effort as possible.

RPN actually simplifies mathematics; for example, one could simply eval `"$stack[0] $operation $stack[1]"` and thus produce a generic translation for several built in binary operations, simply removing parameters from the stack and inserting results as needed. This way one could handle strings as well as numbers. For a comprehensive RPN calculator one would also need to include operations that manipulate the stack. And then there are other operations not included in the base Perl. Of course one could import [Math::Trig](https://metacpan.org/pod/Math::Trig), but seeing as we are building an RPN interpreter, why not code for functions like asin, tan etc in RPN? `asin($var)` can be calculated using `atan2($var, sqrt(1 - $var * $var))`. Covert that to RPN `dup dup * 1 - sqrt swap atan2`. Why would you do that? Of course it is slower, but the stack manipulation happens automatically, the whole thing can be done in one phrase, proves the capability of the interpreter, and gives you a warm fuzzy feeling inside.

Therein lies the problem. While challenges posed by someone maybe finite; the challenges you pose on yourself may have no end. Sleep beckons.

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2020**](/blog/advent-calendar-2020)
