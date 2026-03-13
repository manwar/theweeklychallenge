---
title: "The Weekly Challenge - 363"
date: 2026-03-02T00:00:00+00:00
description: "The Weekly Challenge - 363"
type: post
image: images/twc-logo.png
author: Mohammad Sajid Anwar
tags: ["Perl", "Raku"]
---

## TABLE OF CONTENTS
***

### &nbsp;&nbsp;1. [HEADLINES](#HEADLINES)
### &nbsp;&nbsp;2. [SPONSOR](#SPONSOR)
### &nbsp;&nbsp;3. [RECAP](#RECAP)
### &nbsp;&nbsp;4. [PERL REVIEW](#PERLREVIEW)
### &nbsp;&nbsp;5. [RAKU REVIEW](#RAKUREVIEW)
### &nbsp;&nbsp;6. [CHART](#CHART)
### &nbsp;&nbsp;7. [NEW MEMBERS](#NEWMEMBERS)
### &nbsp;&nbsp;8. [GUESTS](#GUESTS)
### &nbsp;&nbsp;9. [TASK #1: String Lie Detector](#TASK1)
### 10. [TASK #2: Subnet Sheriff](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #363` of `The Weekly Challenge`.

Welcome aboard, [**Spagett-del**](https://github.com/Spagett-del), and thank you for the first contributions in [**Raku**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-362/spagett-del/raku).

Welcome aboard, [**Andrii Mishchenko**](https://github.com/andruhaASM), and thank you for the first contributions in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-001/mishchenkoa/perl/ch-1.pl) and [**Ruby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-001/mishchenkoa/ruby/ch-1.rb).

Welcome back, `Joelle Maslak`. It's always a pleasure to have you back in action. Thank you for the contributions in [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-362/joelle-maslak/perl) and [**Lisp**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-362/joelle-maslak/common-lisp).

Thank you, `Paulo Custodio` and `Lubos Kolouch` for tackling past challenges. Your efforts have shifted the numbers significantly, especially with contributions in `C` language.

Thank you, `Kjetil Skotheim`, for working on missed challenges - it has clearly made a difference. Thanks to you, we now have two weeks in `2026` that have reached the target.

Speaking of guest contributions, `Java`, is about to take the `10th` place, as it now shares the same number of contributions as `BQN`. So, all `Java` and `BQN` contributors, make sure your favourite language stays in the `TOP 10`. So much fun - I'm really enjoying it.

***

<br>

Below is my contributions to the `Task #1` of `Week #362`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-362/mohammad-anwar/perl/ch-1.pl)

```perl
sub echo_chamber {
    my $str = shift;
    $str =~ s/(.)/ $1 x (pos($str) + 1) /ge;
    return $str;
}
```

<br>

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-362/mohammad-anwar/raku/ch-1.raku)

```raku
sub echo-chamber($str) {
    $str.subst: :g, /(.)/, { $0 x ($/.from + 1) };
}
```

<br>

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-362/mohammad-anwar/python/ch-1.py)

```python
def echo_chamber(s):
    result = ""
    for i, char in enumerate(s):
        result += char * (i + 1)
    return result
```

<br>

Thank you `Team PWC`, once again.

`Happy Hacking!!`

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `358` &nbsp;&nbsp;|&nbsp;&nbsp; 55 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 27 &nbsp;&nbsp;|
|&nbsp;&nbsp; `359` &nbsp;&nbsp;|&nbsp;&nbsp; 54 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|
|&nbsp;&nbsp; `360` &nbsp;&nbsp;|&nbsp;&nbsp; 59 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
|&nbsp;&nbsp; `361` &nbsp;&nbsp;|&nbsp;&nbsp; 57 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|
|&nbsp;&nbsp; `362` &nbsp;&nbsp;|&nbsp;&nbsp; 52 &nbsp;&nbsp;|&nbsp;&nbsp; 27 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `358` &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 71 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|
|&nbsp;&nbsp; `359` &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 68 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `360` &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|&nbsp;&nbsp; 75 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `361` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 55 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|
|&nbsp;&nbsp; `362` &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|&nbsp;&nbsp; 68 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (4180)
     2. Rust       (1111)
     3. Ruby       (873)
     4. Haskell    (869)
     5. Lua        (850)
     6. C          (769)
     7. C++        (696)
     8. Go         (648)
     9. JavaScript (624)
    10. BQN        (508)

<br>

### Blogs with Creative Title
***

#### 1. [Spellbound Echo](https://raku-musings.com/spellbound-echo.html) by Arne Sommer.
#### 2. [Lingua to the rescue!](https://fluca1978.github.io/2026/02/25/PerlWeeklyChallenge362.html) by Luca Ferrari.
#### 3. [What Sort of Echo?](https://awesomepowerofgenetics.blogspot.com/2026_03_01_archive.html#1053650611098319774) by Marc Perry.
#### 4. [You Have No Choice](https://packy.dardan.com/b/jd) by Packy Anderson.
#### 5. [Echo and wordy numbers](http://ccgi.campbellsmiths.force9.co.uk/challenge/362) by Peter Campbell Smith.
#### 6. [Spellbound Echo](https://blog.firedrake.org/archive/2026/03/The_Weekly_Challenge_362__Spellbound_Echo.html) by Roger Bell_West.
#### 7. [The one liners](https://dev.to/simongreennet/weekly-challenge-the-one-liners-14lo) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 48,131 (`+44`)
#### 2. Pull Requests: 13,633 (`+27`)
#### 3. Contributors: 275 (`+1`)
#### 4. Fork: 349 (`+2`)
#### 5. Stars: 210

<br>

## SPONSOR {#SPONSOR}
***

We are looking for sponsor for monthly prize pot of `US $50`. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 362](/blog/recap-challenge-362)** by `Mohammad Sajid Anwar`.

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

[**Spagett-del**](https://github.com/Spagett-del), an expert `Raku` hacker joined `Team PWC`.

[**Andrii Mishchenko**](https://github.com/andruhaASM), an expert `Perl` hacker joined `Team PWC`.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}
***

Please check out the guest contributions for the [**Week #362**](/blog/guest-contribution/#362).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: String Lie Detector {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a string.

Write a script that parses a self-referential string and determines whether its claims about itself are true. The string will make statements about its own composition, specifically the number of vowels and consonants it contains.

#### Example 1

    Input: $str = "aa — two vowels and zero consonants"
    Output: true

<br>

#### Example 2

    Input: $str = "iv — one vowel and one consonant"
    Output: true

<br>

#### Example 3

    Input: $str = "hello - three vowels and two consonants"
    Output: false

<br>

#### Example 4

    Input: $str = "aeiou — five vowels and zero consonants"
    Output: true

<br>

#### Example 5

    Input: $str = "aei — three vowels and zero consonants"
    Output: true

<br>

## Task 2: Subnet Sheriff {#TASK2}
##### **Submitted by:** [Peter Campbell Smith](http://ccgi.campbellsmiths.force9.co.uk/challenge/)
***

You are given an `IPv4 address` and an `IPv4 network` (in CIDR format).

Write a script to determine whether both are valid and the address falls within the network. For more information see the [**Wikipedia**](https://en.wikipedia.org/wiki/IPv4) article.

#### Example 1

    Input: $ip_addr = "192.168.1.45"
           $domain  = "192.168.1.0/24"
    Output: true

<br>

#### Example 2

    Input: $ip_addr = "10.0.0.256"
           $domain  = "10.0.0.0/24"
    Output: false

<br>

#### Example 3

    Input: $ip_addr = "172.16.8.9"
           $domain  = "172.16.8.9/32"
    Output: true

<br>

#### Example 4

    Input: $ip_addr = "172.16.4.5"
           $domain  = "172.16.0.0/14"
    Output: true

<br>

#### Example 5

    Input: $ip_addr = "192.0.2.0"
           $domain  = "192.0.2.0/25"
    Output: true

<br>

***

Last date to submit the solution `23:59 (UK Time) Sunday 8th March 2026`.

***
