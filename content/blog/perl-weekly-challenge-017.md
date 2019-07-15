---
title: "Perl Weekly Challenge - 017"
date: 2019-07-14T20:00:00+00:00
description: "Perl Weekly Challenge - 017"
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

Let me announce the winner of **Perl Weekly Challenge - 016** and the name is **Adam Russell**. Many congratulations to **Adam**. You should soon hear from **Pete Sergeant** about your reward. Please do let us know how you feel about it. For rest of the participants, I would say **Good Luck** for next time. Keep sending in your solutions and share your knowledge with each other.

***
***

## RECAP

***
***

Here is the recap of last week [challenge](/blog/recap-challenge-016).

***
***

## REVIEW

***
***

Please checkout the [Perl Weekly Challenge - 015](/blog/review-challenge-015) review by **Kian-Meng Ang**.

***
***

## CHART

***
***

Please take a look at the [charts](/chart) showing interesting data.

I would like to thank everyone for their valuable suggestions. Please do share your experience with us. Good luck for the weekly challenge and enjoy.

***
***

## NEW MEMBERS

***
***

**Michael Hamlin** from Michigan, he has been programming Perl since 1994, but mostly smallish things until about 10 years ago, when he switched to become a developer full-time.

Check out current [team](/team) members.

***
***

## Task #1

***
***

> Create a script to demonstrate Ackermann function. The Ackermann function is defined as below, m and n are positive number:

>>       A(m, n) = n + 1                  if m = 0
>>       A(m, n) = A(m - 1, 1)            if m > 0 and n = 0
>>       A(m, n) = A(m - 1, A(m, n - 1))  if m > 0 and n > 0

> Example expansions as shown in [wiki page](https://en.wikipedia.org/wiki/Ackermann_function).

>>      A(1, 2) = A(0, A(1, 1))
>>              = A(0, A(0, A(1, 0)))
>>              = A(0, A(0, A(0, 1)))
>>              = A(0, A(0, 2))
>>              = A(0, 3)
>>              = 4

***
***

## Task #2

***
***

> Create a script to parse URL and print the components of URL. According to [Wiki page](https://en.wikipedia.org/wiki/URL), the URL syntax is as below:

>> **scheme:[//[userinfo@]host[:port]]path[?query][#fragment]**

> For example:  **jdbc:mysql://user:password@localhost:3306/pwc?profile=true#h1**

>>       scheme:   jdbc:mysql
>>       userinfo: user:password
>>       host:     localhost
>>       port:     3306
>>       path:     /pwc
>>       query:    profile=true
>>       fragment: h1

***
***

## Task #3

***
***

> Write a script to use **Bhagavad Gita API**. For more information about API, please visit [page](https://bhagavadgita.io/api/). The API task is **optional** but we would love to see your solution.

***
***

Last date to submit the solution **23:59 (UK Time) Sunday 21st July 2019**.

***
***
