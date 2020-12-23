---
title: "Advent Calendar - December 22, 2020"
date: 2020-12-23T00:00:00+00:00
description: "Advent Calendar - December 22, 2020."
type: post
image: images/blog/2020-12-22.jpg
author: Noud Aldenhoven
tags: ["Raku"]
---

[**Advent Calendar 2020**](/blog/advent-calendar-2020)
***

The gift is presented by [**Noud Aldenhoven**](https://perlweeklychallenge.org/blog/meet-the-champion-040). Today he is talking about his solution to the task `Is the room open?` of **["The Weekly Challenge - 046"](/blog/perl-weekly-challenge-046)**. This is re-produced for **Advent Calendar 2020** from the original [**post**](https://www.noudaldenhoven.nl/wordpress/?p=288) by **Noud Aldenhoven**.

***

This weeks [Perl Weekly Challenge Task #2](https://perlweeklychallenge.org/blog/perl-weekly-challenge-046/) has an interesting solution. The challenge is as follows:

# Is the room open?

There are 500 rooms in a hotel with 500 employees having keys to all the rooms. The first employee opened main entrance door of all the rooms. The second employee then closed the doors of room numbers 2,4,6,8,10 and so on to 500. The third employee then closed the door if it was opened or opened the door if it was closed of rooms 3,6,9,12,15 and so on to 500. Similarly the fourth employee did the same as the third but only room numbers 4,8,12,16 and so on to 500. This goes on until all employees has had a turn.

Write a script to find out all the rooms still open at the end.

# Solution

The solution is given in four steps.

Given a single room with number `N`. How many times did an employee open or close the door of that room? Let’s look at the `k-th employee`. The employee opens or closes the door if and only if `k` is a divisor of `N`. So if we want to know how often the door has been opened or closed we must count the number of divisors of the room number `N`.

If the room number N` has been opened or closed an even number of times, the door is closed. Likewise, if the room number `N` has been opened or closed an odd number of times, the door is open. So this problem is equivalent to finding all  equal or below 500 that have an odd number of divisors.

Take the prime decomposition of `N`

![image-a](/images/blog/ch-46-02-a.png)

The number of divisors of  is given by ![image-b](/images/blog/ch-46-02-b.png)

Using the prime decomposition of `N`, the number of divisors of `N` is odd if and only if *k<sub>1</sub>,k<sub>2</sub>,...,k<sub>i</sub>* are all even. Because, if some *k<sub>j</sub>* would be odd, *k<sub>j</sub>+1* is even, hence every product with *k<sub>j</sub>+1* (such as the number of divisors of `N`) is even. But if *k<sub>1</sub>, k<sub>2</sub>, ..., k<sub>j</sub>* are all even, `N` is a squared number.

Therefore, the only open rooms are the rooms with a squared number equal or below 500. A one-liner in Raku (Perl 6) is:

```perl6
say $_**2 for 1..(500.sqrt);
```

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2020**](/blog/advent-calendar-2020)
