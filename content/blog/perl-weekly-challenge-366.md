---
title: "The Weekly Challenge - 366"
date: 2026-03-23T00:00:00+00:00
description: "The Weekly Challenge - 366"
type: post
image: images/og-image.jpg
author: Mohammad Sajid Anwar
tags: ["Perl", "Raku", "Challenge"]
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
### &nbsp;&nbsp;9. [TASK #1: Count Prefixes](#TASK1)
### 10. [TASK #2: Valid Valid Times](#TASK2)

## HEADLINES {#HEADLINES}
***
Welcome to the `Week #366` of `The Weekly Challenge`.

We reached the target last week - well done `Team PWC`. This is the sixth time out of eleven weeks this year. Even the guest contribution matched the best week of the year.

Back to back contributions from `Abigail`, [**Awk**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-365/abigail/awk), [**Bash**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-365/abigail/bash), [**C**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-365/abigail/c), [**Go**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-365/abigail/go), [**Perl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-365/abigail/perl), [**Python**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-365/abigail/python), [**Ruby**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-365/abigail/ruby), and [**Tcl**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-365/abigail/tcl), thank you.

Special mention to `Paulo Custodio` and `Lubos Kolouch` for keeping the spirit high. Thanks to `Paulo Custodio`'s recent push, `C` has moved up from `#5` to `#3`. `Ruby` currently sits at `#4`, but it's not anywhere close to `C`.

#### Android App Update:
A big shout-out to `Packy Anderson`, `Peter Campbell Smith`, `Paulo Custodio`, and `Reinier Maliepaard` for the constructive suggestions. Luckily, I managed to implement all the requested changes. If any of you have joined `The Weekly Challenge Testers` group then please make sure you've installed the app and keep it on for a minimum of `14 days` as required by `Google`. For those who did install the app, please make sure you get the regular updates so you actually see the latest changes. The last updated version was `v1.0.7`, just for the record. The next build version `1.0.8` is on the way as we speak. If anyone wants to help me test my first mobile app, please send me your email address linked to your `Google Play Store` account, and I will send you the invite. You don’t need to use the app every hour - just opening it occasionally to browse recent challenges or recaps will help show `Google` that the app has active engagement.

#### Community Shout-out
I continue to receive nice reviews of the new-look website. Honestly it makes me very happy. Now that we have a mobile app in the making, I see real progress. One thing, I miss in the new design, the members' cute profile photos. We do have some, which look nice on the website and app, but we want more. So if you've used a profile photo on the internet, please share it with us too. The profile photo requirement is `130x130` pixels and `JPG` format. I assume, you're ok with me using the profile photo on the website and mobile app.

One more thing: while working on the `Champions` screen for the mobile app, I noticed we stopped the tradition of interviewing champions. I want to start that again by reaching out to all past champions. It's always encouraging to hear the personal side as well. I will prepare the interview format and share it with you. If you do recieve the invite, please take the time to respond.

Normally, `Mark Anderson` or `Eric Cheung` is the first to submit the solutions to the weekly challenge. I'm not sure, if the challenge release time works in their favour, but last week `Neils van Dijke` beat them both and became the first contributor. I am not suggesting, there's a race to be the first contributor - I'm just pointing out a change in pattern, nothing else.

***

<br>

Below is my contributions to the `Task #1` of `Week #364`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-365/mohammad-anwar/perl/ch-1.pl)
***
```perl
sub alphabet_index_digit_sum {
    my ($s, $k) = @_;

    my $n = join "", map{ ord($_) - 96 } split "", $s;
    $n = eval join "+", split "", $n for 1..$k;
    return $n;
}
```

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-365/mohammad-anwar/raku/ch-1.raku)
***
```perl
sub alphabet-index-digit-sum (@args) {
    my ($s, $k) = @args;

    my $n = join "", map { $_.ord - 96 }, $s.comb;
    $n = [+] $n.comb for 1..$k;
    return $n;
}
```

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-365/mohammad-anwar/python/ch-1.py)
***
```python
def alphabet_index_digit_sum(s, k):
    n = ''.join(str(ord(c) - 96) for c in s)
    for _ in range(k):
        n = str(sum(int(d) for d in n))
    return int(n)
```

Thank you `Team PWC`, once again.

`Happy Hacking!!`
***

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `361` &nbsp;&nbsp;|&nbsp;&nbsp; 59 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
|&nbsp;&nbsp; `362` &nbsp;&nbsp;|&nbsp;&nbsp; 56 &nbsp;&nbsp;|&nbsp;&nbsp; 27 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|
|&nbsp;&nbsp; `363` &nbsp;&nbsp;|&nbsp;&nbsp; 45 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `364` &nbsp;&nbsp;|&nbsp;&nbsp; 55 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|
|&nbsp;&nbsp; `365` &nbsp;&nbsp;|&nbsp;&nbsp; 53 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|&nbsp;&nbsp; 27 &nbsp;&nbsp;|
***

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `361` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 55 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|
|&nbsp;&nbsp; `362` &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|&nbsp;&nbsp; 68 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|
|&nbsp;&nbsp; `363` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 39 &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|
|&nbsp;&nbsp; `364` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 73 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `365` &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 75 &nbsp;&nbsp;|&nbsp;&nbsp; 28 &nbsp;&nbsp;|
***

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (4255)
     2. Rust       (1123)
     3. C          (921)
     3. Ruby       (880)
     5. Haskell    (875)
     6. Lua        (859)
     7. C++        (702)
     8. Go         (662)
     9. JavaScript (627)
    10. Java       (530)

### Blogs with Creative Title
***

#### 1. [A Token Alphabet](https://raku-musings.com/token-alphabet.html) by Arne Sommer.
#### 2. [Sum Tokens and Count Digits](https://github.sommrey.de/the-bears-den/2026/03/20/ch-365.html) by Jorg Sommrey.
#### 3. [regexps to rule them all!](https://fluca1978.github.io/2026/03/16/PerlWeeklyChallenge365.html) by Luca Ferrari.
#### 4. [Are Post Alphabits a Token Breakfast Cereal?](https://awesomepowerofgenetics.blogspot.com/2026_03_15_archive.html#6733674134698732432) by Marc Perry.
#### 5. [Splitting and Summing and Checking and Counting](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-365/challenge-365/matthias-muth#readme) by Matthias Muth.
#### 6. [I’ll be the smartest bird the world has ever seen!](https://packy.dardan.com/b/kv) by Packy Anderson.
#### 7. [Lots of counting](http://ccgi.campbellsmiths.force9.co.uk/challenge/365) by Peter Campbell Smith.
#### 8. [Alphabet Digit Counter Token](https://blog.firedrake.org/archive/2026/03/The_Weekly_Challenge_365__Alphabet_Digit_Counter_Token.html) by Roger Bell_West.
#### 9. [Counting the index](https://dev.to/simongreennet/weekly-challenge-counting-the-index-oe1) by Simon Green.
***

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***
#### 1. Commits: 48,562 (`+195`)
#### 2. Pull Requests: 13,791 (`+50`)
#### 3. Contributors: 275
#### 4. Fork: 349
#### 5. Stars: 212 (`+1`)
***

## SPONSOR {#SPONSOR}
***
With start of `Week #355`, we have a new sponsor `Marc Perry` until the end of year `2026`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance. You can find more informations [**here**](/sponsors).

## RECAP {#RECAP}
***
Quick recap of **[The Weekly Challenge - 365](/blog/recap-challenge-365)** by `Mohammad Sajid Anwar`.

## PERL REVIEW {#PERLREVIEW}
***
If you missed any past reviews then please check out the [**collection**](/p5-reviews).

## RAKU REVIEW {#RAKUREVIEW}
***
If you missed any past reviews then please check out the [**collection**](/p6-reviews).

## CHART {#CHART}
***
Please take a look at the [**charts**](/chart) showing interesting data.

I would like to `THANK` every member of the team for their valuable suggestions. Please do share your experience with us.

## NEW MEMBERS {#NEWMEMBERS}
***
Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

## GUESTS {#GUESTS}
***
Please check out the guest contributions for the [**Week #365**](/blog/guest-contribution/#365).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

## Task 1: Count Prefixes {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given an array of words and a string (contains only lowercase English letters).

Write a script to return the number of words in the given array that are a prefix of the given string.

#### Example 1

    Input: @array = ("a", "ap", "app", "apple", "banana"), $str = "apple"
    Output: 4

#### Example 2

    Input: @array = ("cat", "dog", "fish"), $str = "bird"
    Output: 0

#### Example 3

    Input: @array = ("hello", "he", "hell", "heaven", "he"), $str = "hello"
    Output: 4

#### Example 4

    Input: @array = ("", "code", "coding", "cod"), $str = "coding"
    Output: 3

#### Example 5

    Input: @array = ("p", "pr", "pro", "prog", "progr", "progra", "program"), $str = "program"
    Output: 7

## Task 2: Valid Times {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a time in the form 'HH:MM'. The earliest possible time is '00:00' and the latest possible time is '23:59'. In the string time, the digits represented by the '?' symbol are unknown, and must be replaced with a digit from 0 to 9.

Write a script to return the count different ways we can make it a valid time.

#### Example 1

    Input: $time = "?2:34"
    Output: 3

    0 -> "02:34" valid
    1 -> "12:34" valid
    2 -> "22:34" valid

#### Example 2

    Input: $time = "?4:?0"
    Output: 12

    Hours: tens digit ?, ones digit 4 -> can be 04, and 14 (2 possibilities)
    Minutes: tens digit ?, ones digit 0 -> tens can be 0-5 (6 possibilities)

    Total: 2 × 6 = 12

#### Example 3

    Input: $time = "??:??"
    Output: 1440

    Hours: from 00 to 23 -> 24 possibilities
    Minutes: from 00 to 59 -> 60 possibilities

    Total: 24 × 60 = 1440

#### Example 4

    Input: $time = "?3:45"
    Output: 3

    If tens digit is 0 or 1 -> any ones digit works, so 03 and 13 are valid
    If tens digit is 2 -> ones digit must be 0-3, but here ones digit is 3, so 23 is valid

    Therefore: 0,1,2 are all valid -> 3 possibilities

#### Example 5

    Input: $time = "2?:15"
    Output: 4

    Tens digit is 2, so hours can be 20-23
    Ones digit can be 0,1,2,3 (4 possibilities)

    Therefore: 4 valid times

***
Last date to submit the solution `23:59 (UK Time) Sunday 29th March 2026`.
