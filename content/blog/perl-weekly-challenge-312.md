---
title: "The Weekly Challenge - 312"
date: 2025-03-10T00:00:00+00:00
description: "The Weekly Challenge - 312"
type: post
image: images/twc-logo.png
author: Mohammad Sajid Anwar
tags: ["Perl", "Raku"]
---

## TABLE OF CONTENTS
***

### 01. [HEADLINES](#HEADLINES)
### 02. [SPONSOR](#SPONSOR)
### 03. [RECAP](#RECAP)
### 04. [PERL REVIEW](#PERLREVIEW)
### 05. [RAKU REVIEW](#RAKUREVIEW)
### 06. [CHART](#CHART)
### 07. [NEW MEMBERS](#NEWMEMBERS)
### 08. [GUESTS](#GUESTS)
### 09. [TASK #1: Minimum Time](#TASK1)
### 10. [TASK #2: Balls and Boxes](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #312` of `The Weekly Challenge`.

I wish all members who celebrate the month of `Ramadan`. May `ALLAH s.w.t.` bless you with peace, happiness and prosperity.

I would also like to congratulate all fellow `Indians` for `Team India` winning the `Champions Trophy 2025` for the second time. It was a close match, I was glued to the TV all Sunday till the last ball. `Team New Zealand` played well and gave a tough fight, I must admit.

Back to the main topics, welcome back `Kaushik Tunuguntla` after a long break. Thanks for your contributions in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-311/kaushik-tunuguntla/perl) and [**Python**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-311/kaushik-tunuguntla/python). Also the bonus [**blog post**](https://notmondayagain.blogspot.com/2025/03/switch-case.html). I hope to see you more regular this time, no pressure though.

I would like to mention one member, `Luca Ferrari`, for consistent contributions. Having said, I noticed in recent times we miss the bonus guest language contributions. I hope to see more from him.

There is another member, `Adam Russell`, who is `on/off` as far as participation is concerned. However when ever he does and he makes a very big impact. Thank you for contributions in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-311/adam-russell/perl) and [**Prolog**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-311/adam-russell/prolog). Thank you for quality [**blog post**](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2025/03/08). I loved the use of `pack/unpack` with such an ease.

Similarly, `Ali Moradi` for creating clean and cute solutions in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-311/deadmarshal/perl). Bonus contributions in [**Java**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-311/deadmarshal/java) and [**Modula-3**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-311/deadmarshal/modula-3).

How can I miss `Raku` master `Arne Sommer` for creative blog post every week. This week [**post**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-311/deadmarshal/modula-3) was no different.

There are few silent players who impressed me with the energy to keep it going for so long e.g. `Roger Bell_West`, `Ulrich Rieke`, `Athanasius`, `Peter Campbell Smith`, `W. Luis Mochan`, `Mark Anderson`, `Wanderdoc`, `Thomas Kohler` and many more.

I liked the nature of weekly challenge where you are not bound to it. You are the boss and you decide when you want to contribute. What matters most is the quality contributions. I noticed the [**GitHub repository**](https://github.com/manwar/perlweeklychallenge-club) for the `Team PWC` contribution is growing very fast. It is also very popular outside of the camp. As of today, we have got `187 stars`, very impressive. I hope to get over `200` mark soon. I would keep the collection of knowledge for ever and for next generation to learn from it.

I noticed lots of different flavour of regex, some of them are listed below:

<br>

#### Niels van Dijke

    $str =~ s/$re/sum(values %+)/ge;

#### Kjetil Skotheim

    pop() =~ s/./chr(ord$&^32)/ger

#### E. Choroba

    join "", map sum(split //), $str =~ /(.{1,$int})/g;

#### Jorg Sommrey

    $str =~ s/(\p{Lu})|(\p{Ll})/$1 ? lc($1) : uc($2)/egr

#### Jaldhar H. Vyas

    $_ = shift; s/(.)/uc $1 eq $1 ? lc $1: uc $1/ge; say

#### Matthias Muth

    $str =~ s< ([a-z]) | [A-Z] >{ $1 ? uc( $& ) : lc( $& ) }xegr;

#### Robbie Hatley

    y/[a-zA-Z]/[A-Za-z]/,print while <>

#### Wanderdoc

    $str =~ s/(\p{Uppercase}) | (\p{Lowercase}) /defined $1 ? lc $1 : uc $2/xeg;

<br>

Last but not least, a gentle reminder to `Laurent Rosenfeld` and `E. Choroba` to get back to me with your `PayPal` account so that prize money can be transferred to you.

<br>

***

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `307` &nbsp;&nbsp;|&nbsp;&nbsp; 44 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|
|&nbsp;&nbsp; `308` &nbsp;&nbsp;|&nbsp;&nbsp; 48 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `309` &nbsp;&nbsp;|&nbsp;&nbsp; 50 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `310` &nbsp;&nbsp;|&nbsp;&nbsp; 44 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `311` &nbsp;&nbsp;|&nbsp;&nbsp; 42 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `307` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 61 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `308` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 56 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|
|&nbsp;&nbsp; `309` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 56 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|
|&nbsp;&nbsp; `310` &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|&nbsp;&nbsp; 44 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `311` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 48 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (3241)
     2. Rust       (860)
     3. Ruby       (777)
     4. Haskell    (755)
     5. Lua        (694)
     6. C++        (595)
     7. C          (590)
     8. JavaScript (540)
     9. Go         (464)
    10. BQN        (420)

<br>

### Blogs with Creative Title
***

#### 1. [Lower the Upper Sums!](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2025/03/08) by Adam Russell.
#### 2. [Upper Group](https://raku-musings.com/upper-group.html) by Arne Sommer.
#### 3. [Flip Groups](https://github.sommrey.de/the-bears-den/2025/03/07/ch-311.html) by Jorg Sommrey.
#### 4. [Switch Case?](https://notmondayagain.blogspot.com/2025/03/switch-case.html) by Kaushik Tunuguntla.
#### 5. [two lines](https://fluca1978.github.io/2025/03/06/PerlWeeklyChallenge311.html) by Luca Ferrari.
#### 6. [Up and Down and Round and Round](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-311/challenge-311/matthias-muth#readme) by Matthias Muth.
#### 7. [gROUP dIGIT sUM](http://ccgi.campbellsmiths.force9.co.uk/challenge/311) by Peter Campbell Smith.
#### 8. [Lower the Sum](https://blog.firedrake.org/archive/2025/03/The_Weekly_Challenge_311__Lower_the_Sum.html) by Roger Bell_West.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 42,599 (`+91`)
#### 2. Pull Requests: 11,675 (`+34`)
#### 3. Contributors: 258 (`+1`)
#### 4. Fork: 325 (`+2`)
#### 5. Stars: 187 (`+1`)

<br>

## SPONSOR {#SPONSOR}
***

With start of `Week #268`, we have a new sponsor `Lance Wicks` until the end of year `2025`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 311](/blog/recap-challenge-311)** by `Mohammad Sajid Anwar`.

<br>

## PERL REVIEW {#PERLREVIEW}
***

If you missed any past reviews then please check out the [**collection**](/p5-reviews).

<br>

## RAKU REVIEW {#RAKUREVIEW}
***

If you missed any past reviews then please check out the [**collection**](/p6-reviews).

<br>

## CHART {#CHART}
***

Please take a look at the [**charts**](/chart) showing interesting data.

I would like to `THANK` every member of the team for their valuable suggestions. Please do share your experience with us.

<br>

## NEW MEMBERS {#NEWMEMBERS}
***

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}
***

Please check out the guest contributions for the [**Week #311**](/blog/guest-contribution/#311).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Minimum Time {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a typewriter with lowercase english letters `a` to `z` arranged in a circle.

![Task 1](https://theweeklychallenge.org/images/blog/week-312-1.png)

Typing a character takes `1 sec`. You can move pointer one character `clockwise` or `anti-clockwise`.

The pointer initially points at `a`.

Write a script to return minimum time it takes to print the given string.

#### Example 1

    Input: $str = "abc"
    Output: 5

    The pointer is at 'a' initially.
    1 sec - type the letter 'a'
    1 sec - move pointer clockwise to 'b'
    1 sec - type the letter 'b'
    1 sec - move pointer clockwise to 'c'
    1 sec - type the letter 'c'

#### Example 2

    Input: $str = "bza"
    Output: 7

    The pointer is at 'a' initially.
    1 sec - move pointer clockwise to 'b'
    1 sec - type the letter 'b'
    1 sec - move pointer anti-clockwise to 'a'
    1 sec - move pointer anti-clockwise to 'z'
    1 sec - type the letter 'z'
    1 sec - move pointer clockwise to 'a'
    1 sec - type the letter 'a'

#### Example 3

    Input: $str = "zjpc"
    Output: 34

<br>

## Task 2: Balls and Boxes {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

There are `$n` balls of mixed colors: `red`, `blue` or `green`. They are all distributed in `10 boxes` labelled `0-9`.

You are given a string describing the location of balls.

Write a script to find the number of boxes containing all three colors. Return `0` if none found.

#### Example 1

    Input: $str = "G0B1R2R0B0"
    Output: 1

    The given string describes there are 5 balls as below:
    Box 0: Green(G0), Red(R0), Blue(B0) => 3 balls
    Box 1: Blue(B1) => 1 ball
    Box 2: Red(R2) => 1 ball

#### Example 2

    Input: $str = "G1R3R6B3G6B1B6R1G3"
    Output: 3

    The given string describes there are 9 balls as below:
    Box 1: Red(R1), Blue(B1), Green(G1) => 3 balls
    Box 3: Red(R3), Blue(B3), Green(G3) => 3 balls
    Box 6: Red(R6), Blue(B6), Green(G6) => 3 balls

#### Example 3

    Input: $str = "B3B2G1B3"
    Output: 0

    Box 1: Green(G1) => 1 ball
    Box 2: Blue(B2)  => 1 ball
    Box 3: Blue(B3)  => 2 balls

<br>

***

Last date to submit the solution `23:59 (UK Time) Sunday 16th March 2025`.

***
