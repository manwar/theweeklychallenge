---
title: "Damian Conway - Masterpiece Collection"
date: 2019-10-24T00:00:00+00:00
description: "Damian Conway's Blog."
type: post
image: images/blog/damian-corner.jpg
author: Mohammad S Anwar
tags: ["Perl6"]
---

Damian Conway wrote a blog in the last week of **May 2019** and confessed that he has been quietly playing at home with **"Perl Weekly Challenge"**. With this started the regular blog by him picking weekly challenge and presenting his views.

I didn't want to loose the track of all his great work, so I decided to put together all his blogs dealing with various challenges in one place. It would be a great read for anyone interested in the detailed analysis.

---
---

## Itch.scratch()
##### September 18, 2019 5:47 PM

---

In writing my past few blog entries I’ve repeatedly come across a situation that Perl 6 doesn’t handle as well as I could wish. It’s a little thing, but like so many other little things
its presence is a source of minor but persistent irritation.

In my [previous entry](http://blogs.perl.org/users/damian_conway/2019/09/to-compute-a-constant-of-calculusa-treatise-on-multiple-ways.html) I used some Perl 6 code that illustrates the point perfectly. I needed to build an object for every value in the @values array, or a single special object if @values was empty: [read more](http://blogs.perl.org/users/damian_conway/2019/09/itchscratch.html).

---
---

## To compute a constant of calculus (A treatise on multiple ways)
##### September 1, 2019 1:20 PM

---

> 𝑒 is for economics

The first task of the [21st Perl weekly challenge](/blog/perl-weekly-challenge-021/) was a very old one: to find (what would eventually become known as) Euler’s number.

The story starts back in 1683 with Jacob Bernoulli, and his investigation of the mathematics of loan sharking. For example, suppose you offered a one-year loan of $1000 at 100% interest, payable annually. Obviously, at the end of the year the markclient has to pay you back the $1000, plus ($1000 × 100%) in interest...so you now have $2000. What can I say? It’s a sweet racket!

But then you get to thinking: what if the interest got charged every six months? In that case, after six months they already owe you $500 in interest ($1000 x 100% × 6∕12), on which amount you can immediately start charging interest as well! So after the final six months they now owe you the original $1000 plus the first six months interest, plus the second six months interest, plus the second six months interest on the first six months interest: $1000 + ($1000 × 50%) + ($1000 × 50%) + ($1000 × 50% × 50%). Which is $2250.

Which is an even sweeter racket. [read more](http://blogs.perl.org/users/damian_conway/2019/09/to-compute-a-constant-of-calculusa-treatise-on-multiple-ways.html).

---
---

## With friends like these...
##### August 18, 2019 8:35 AM

---

> C-o-rr-a-ll-i-n-g d-i-tt-o-e-d l-e-tt-e-r-s

I was going to focus this week on the first task of the [20th Perl Weekly Challenge](https://perlweeklychallenge.org/blog/perl-weekly-challenge-020/) ...but what can I say? The task was a break a string specified on the command-line into runs of identical characters: [read more](http://blogs.perl.org/users/damian_conway/2019/08/with-friends-like-these.html).

---
---

## Greed is good, balance is better, beauty is best.
##### August 6, 2019 10:08 PM

---

> Avidis, avidus natura parum est

One of my first forays into Perl programming, 20 years ago now, was a tool that takes a piece of plaintext, analyzes its structure, and formats it neatly for a given line width. It’s a moderately sophisticated [line wrapping](https://en.wikipedia.org/wiki/Line_wrap_and_word_wrap) application that I use daily to tidy up email correspondence, software documentation, and blog entries.

So the second task of the [19th Perl Weekly Challenge](/blog/perl-weekly-challenge-019/) —to implement a “greedy” line-wrapping algorithm—is in many ways an old friend to me.

Greedy line wrapping simply takes each word in the input text and adds it to the current line of output unless doing so would cause the output line to exceed the required maximal line width, in which case it breaks the line at that point and continues filling the second line, et cetera. [read more](http://blogs.perl.org/users/damian_conway/2019/08/greed-is-good-balance-is-better-beauty-is-best.html).

---
---

## Chopping substrings
##### July 30, 2019 1:39 AM

---

The first task of the [18th Perl Weekly Challenge](/blog/perl-weekly-challenge-018/) was to find the longest common substring(s) in a set of strings. That is, given a set of strings like “ABABC”, “BABCA” and “ABCBA”, print out “ABC”.

The “best practice” solution is a technique known as [suffix trees](https://en.wikipedia.org/wiki/Generalized_suffix_tree), which requires some [moderately complex coding](https://gist.github.com/istepanov/6506508). However, we can get very reasonable performance for strings up to hundreds of thousands of characters long using a much simpler approach. [read more](http://blogs.perl.org/users/damian_conway/2019/07/chopping-substrings.html).

---
---

## Six slices of pie
##### July 24, 2019 11:17 PM

---

The first task of the [15th Perl Weekly Challenge](/blog/perl-weekly-challenge-016/) was to find the optimal position in the line for dessert.

This is a reformulation of the old conundrum of creating buggy whips or cowboy movies or physical book stores or carbon-based energy sources: when is the best time to opt in for an ever-increasing slice of an ever-diminishing pie?

In this task, the pie is big enough for 100 people, but the first person in line gets a slice equivalent to only 1% of it. The second person gets 2% of what’s left, the third gets 3% of what remains after that, et cetera, et cetera, until the one-hundredth person receives 100% of whatever crumbs are left after the preceding ninety-nine have taken their share. In other words, we’re “Making Apple-pie Great Again!” [read more](http://blogs.perl.org/users/damian_conway/2019/07/six-slices-of-pie.html)

---
---

## Vigenère vs Vigenère
##### July 15, 2019 7:46 AM

---

The second task of the [15th Perl Weekly Challenge](/blog/perl-weekly-challenge-015/) was to implement an encoder and a decoder for the Vigenère Cipher. But that’s a little more complicated than it seems, because the cipher that's named after Blaise de Vigenère wasn’t actually invented by him, and the cipher that Vigenère actually invented isn’t named after him.

So should we implement the Vigenère Cipher...or Vigenère’s cipher? Why not both! [read more](http://blogs.perl.org/users/damian_conway/2019/07/vigenere-vs-vigenere.html)

---
---

## Infinite work is less work
##### July 11, 2019 3:08 AM

---

The first task of [last week's Perl Weekly Challenge](/blog/perl-weekly-challenge-015/) was to print the first ten strong and weak primes. A prime pn is "strong" if it's larger than the average of its two neighbouring primes (i.e. pn > (pn-1+pn+1)/2). A prime is "weak" if it's smaller than the average of its two neighbours.

Of course, this challenge would be trivial if we happened to have a list of all the prime numbers. Then we'd just filter out the first ten that are strong, and the first ten that are weak. In fact, it would be even easier if we happened to have a list of all the strong primes, and a list of all the weak ones. Then we'd just print the first ten of each. [read more](http://blogs.perl.org/users/damian_conway/2019/07/infinite-work-is-less-work.html).

---
---

## As simple as possible...but no simpler
##### July 1, 2019 10:11 PM

---

The first task of [last week's Perl Weekly Challenge](/blog/perl-weekly-challenge-014/)

>  0, 0, 1, 0, 2, 0, 2, 2, 1, 6, 0, 5, 0, 2, 6, 5, 4, 0,...

The first challenge is to understand just what van Eck's sequence is, as the various online explanations are less than instantly helpful.

Van Eck's sequence is a list of integers starting at zero, where the next number in the sequence is given by the distance between the current number and the nearest preceding occurrence of that same number. [read more](http://blogs.perl.org/users/damian_conway/2019/07/as-simple-as-possiblebut-no-simpler.html)

---
---

## Simplicity made easy
##### June 26, 2019 1:08 AM

---

The [second task of last week's Perl Weekly Challenge](blog/perl-weekly-challenge-013/#challenge-1) was to list the dates of the last Friday in every month of a given year.

Many of the participants went to great lengths to create efficient and accurate solutions: tracking the last day of each month, detecting leap years correctly, working out formulas for the day of the month for a particular date, managing the complex date arithmetic required. [read more](http://blogs.perl.org/users/damian_conway/2019/06/simplicity-made-easy.html).

---
---

## Coding with an even fuller toolset
##### June 18, 2019 1:08 AM

---

Sigh. It's always the way, isn't it?

You no sooner get done [writing](http://blogs.perl.org/users/damian_conway/2019/06/coding-with-a-full-toolset.html) about how having the right tools can make a particular coding task trivially easy...when you realize that, right next door, there was a much better example you could have used to make exactly the same point.

The "longest initial subpath" example I talked about in my previous post was challenge #2 of [last week's Perl Weekly Challenge](/blog/perl-weekly-challenge-012/). But challenge #1 that week makes it even clearer how much the right tool can simplify a task. [read more](http://blogs.perl.org/users/damian_conway/2019/06/coding-with-an-even-fuller-toolset.html).

---
---

## Coding with a full toolset
##### June 17, 2019 11:04 AM

---

A few years ago, I created [a talk](http://damian.conway.org/Seminars/Perl6Transparadigm.html) (and later [an entire class](http://damian.conway.org/Courses/Perl6Transparadigm.html)) about "transparadigm programming" in Perl 6.

The basic premise was that while some languages restrict you to only a single hammer (or worse: a box full of hammers), Perl 6 was designed to be a complete toolkit: integrating OO, functional, concurrent, declarative, and procedural tools to allow you to choose exactly the right combination for each job.

That idea came back to me in full force recently. In last week's Perl Weekly Challenge, the second task was to take a list of file paths and find the longest common initial subpath (i.e. the deepest directory they all share). [read more](http://blogs.perl.org/users/damian_conway/2019/06/coding-with-a-full-toolset.html).

---
---

## Why I love Perl 6
##### May 23, 2019 11:49 AM

---

> Write a script that finds the first square number that has at least 5 distinct digits.

The solution to that is (obviously!) to lazily square every number from 1 to infinity, then comb through each square's digits looking for five or more unique numerals, and immediately output the first such square you find. [read more](http://blogs.perl.org/users/damian_conway/2019/05/why-i-love-perl-6.html).

---
---
