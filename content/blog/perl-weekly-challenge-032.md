---
title: "Perl Weekly Challenge - 032"
date: 2019-10-27T00:00:00+00:00
description: "Perl Weekly Challenge - 032"
type: post
image: images/blog/pwc-base.svg
author: Mohammad S Anwar
tags: ["Perl5", "Perl6"]
---
***
***

## HEADLINES

***
***

With great pleasure, we announce **Mark Senn** as the winner of [**"Perl Weekly Challenge - 031"**](/blog/perl-weekly-challenge-031). Congratulations **Mark**, you should soon hear from **[Perl Careers](https://perl.careers/)** about your reward. For rest of the participants, I would say **Good Luck** for next time. Keep sending in your solutions and share your knowledge with each other.

***
***

## RECAP

***
***

Here is the recap of last week [**"Perl Weekly Challenge - 031"**](/blog/recap-challenge-031).

***
***

## PERL5 REVIEW

***
***

Please checkout **Perl5** solutions review of the [**"Perl Weekly Challenge - 030"**](/blog/review-challenge-030) by **Kian-Meng Ang**.

If you missed any past reviews then please checkout the [**collection**](/p5-reviews).

***
***

## PERL6 REVIEW

***
***

Please checkout **Perl6** solutions review of the [**"Perl Weekly Challenge - 030"**](/blog/p6-review-challenge-030) by **Laurent Rosenfeld**.

**Laurent** also reviewd [**"Perl Weekly Challenge - 003"**](/blog/p6-review-challenge-003) and [**Perl Weekly Challenge - 014**](/blog/p6-review-challenge-014).

If you missed any past reviews then please checkout the [**collection**](/p6-reviews).

***
***

## CHART

***
***

Please take a look at the [**charts**](/chart) showing interesting data.

I would like to thank every member of the team for their valuable suggestions. Please do share your experience with us.

***
***

## NEW MEMBERS

***
***

1) **Tyle Limkemann**, am experienced hacker from **Arizona, USA**.

2) **Javier Luque**, an experienced hacker from **Sevenoaks** with 16 years of experience.

Check out current [**team**](/team) members.

***
***

## GUESTS

***
***

1) **Adam Russell** shared **C++** solutions for [**"Perl Weekly Challenge - 031"**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-031/adam-russell/cxx).

2) **Lubos Kolouch** shared **Python** solution for [**"Perl Weekly Challenge - 031"**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-031/lubos-kolouch/python).

Please do share your creative solutions in other languages.

***
***

## Task #1
##### Contributed by Neil Bowers

***
***

##### Count instances

Create a script that either reads standard input or one or more files specified on the command-line. Count the number of times and then print a summary, sorted by the count of each entry.

So with the following input in file example.txt

    apple
    banana
    apple
    cherry
    cherry
    apple

the script would display something like:

    apple     3
    cherry    2
    banana    1

For extra credit, add a -csv option to your script, which would generate:

    apple,3
    cherry,2
    banana,1

***
***

## Task #2
##### Contributed by Neil Bowers

***
***

>  ASCII bar chart

Write a function that takes a hashref where the keys are labels and the values are integer or floating point values. Generate a bar graph of the data and display it to stdout.

The input could be something like:

    $data = { apple => 3, cherry => 2, banana => 1 };
    generate_bar_graph($data);

And would then generate something like this:

     apple | ############
    cherry | ########
    banana | ####

If you fancy then please try this as well: (a) the function could let you specify whether the chart should be ordered by (1) the labels, or (2) the values.

***
***

Last date to submit the solution **23:59 (UK Time) Sunday 3rd November 2019**.

***
***
