---
title: "The Weekly Challenge - 367"
date: 2026-03-30T00:00:00+00:00
description: "The Weekly Challenge - 367"
type: post
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
### &nbsp;&nbsp;9. [TASK #1: Max Odd Binary](#TASK1)
### 10. [TASK #2: Conflict Events](#TASK2)

## HEADLINES {#HEADLINES}
***
Welcome to the `Week #367` of `The Weekly Challenge`.

We completed `7 years` of the weekly challenge last week on `25th March`. I published a [**blog post**](/blog/seven-years-of-pwc) to celebrate the occassion.

Thank you `Abigail` for your [**contributions**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-366/abigail).

Thank you to all team member for helping with testing the app. Please continue for few more days. If you accepted the invitation and not installed the app yet, then please do so now. I need your help. If anyone wants to help me, please send me your email linked to Google Play Store account. I will then send you the invitation. I have had many suggestions, some already implemented and some would be done soon.

One more thing to share, we have upgrade the `Hugo` binary from `v0.67.0-DEV` to `v0.159.0`. It is a big jump and had to adjust few things. If you find any issues, please do let me know.

***

<br>

Below is my contributions to the `Task #1` of `Week #366`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-366/mohammad-anwar/perl/ch-1.pl)
***
```perl
sub count_prefixes {
    my ($str, @array) = @_;
    my $count = grep { $str =~ /^$_/ } @array;
    return $count;
}
```

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-366/mohammad-anwar/raku/ch-1.raku)
***
```perl
sub count-prefixes($str, @array) {
    my $count = @array.grep({ $str.starts-with($_) }).elems;
    return $count;
}
```

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-366/mohammad-anwar/python/ch-1.py)
***
```python
def count_prefixes(string, array):
    count = sum(1 for word in array if string.startswith(word))
    return count
```

Thank you `Team PWC`, once again.

`Happy Hacking!!`
***

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `362` &nbsp;&nbsp;|&nbsp;&nbsp; 56 &nbsp;&nbsp;|&nbsp;&nbsp; 27 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|
|&nbsp;&nbsp; `363` &nbsp;&nbsp;|&nbsp;&nbsp; 45 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `364` &nbsp;&nbsp;|&nbsp;&nbsp; 55 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|
|&nbsp;&nbsp; `365` &nbsp;&nbsp;|&nbsp;&nbsp; 53 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|&nbsp;&nbsp; 27 &nbsp;&nbsp;|
|&nbsp;&nbsp; `366` &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|
***

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `362` &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|&nbsp;&nbsp; 68 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|
|&nbsp;&nbsp; `363` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 39 &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|
|&nbsp;&nbsp; `364` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 73 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `365` &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 75 &nbsp;&nbsp;|&nbsp;&nbsp; 28 &nbsp;&nbsp;|
|&nbsp;&nbsp; `366` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 73 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|
***

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (4280)
     2. Rust       (1127)
     3. C          (949)
     3. Ruby       (882)
     5. Haskell    (877)
     6. Lua        (863)
     7. C++        (704)
     8. Go         (666)
     9. JavaScript (629)
    10. Java       (530)

### Blogs with Creative Title
***

#### 1. [Count the Times](https://raku-musings.com/count-times.html) by Arne Sommer.
#### 2. [Could We Start Again, Please](https://dev.to/boblied/pwc-366-count-prefixes-could-we-start-again-please-19kc) by Bob Lied.
#### 3. [Pre-Timed Counters](https://github.sommrey.de/the-bears-den/2026/03/27/ch-366.html) by Jorg Sommrey.
#### 4. [what time is it?](https://fluca1978.github.io/2026/03/26/PerlWeeklyChallenge366.html) by Luca Ferrari.
#### 5. [Counting Times Without Questions](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-366/challenge-366/matthias-muth#readme) by Matthias Muth.
#### 6. [The Times They Are A-Countin'](https://packy.dardan.com/b/mG) by Packy Anderson.
#### 7. [Prefixes and times?](http://ccgi.campbellsmiths.force9.co.uk/challenge/366) by Peter Campbell Smith.
#### 8. [The Time of the Count is Over](https://blog.firedrake.org/archive/2026/03/The_Weekly_Challenge_366__The_Time_of_the_Count_is_Over.html) by Roger Bell_West.
#### 9. [Happy 7th birthday TWC!](https://dev.to/simongreennet/happy-7th-birthday-twc-lpk) by Simon Green.
***

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***
#### 1. Commits: 48,694 (`+132`)
#### 2. Pull Requests: 13,832 (`+41`)
#### 3. Contributors: 276 (`+1`)
#### 4. Fork: 347
#### 5. Stars: 212
***

## SPONSOR {#SPONSOR}
***
With start of `Week #355`, we have a new sponsor `Marc Perry` until the end of year `2026`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance. You can find more informations [**here**](/sponsors).

## RECAP {#RECAP}
***
Quick recap of **[The Weekly Challenge - 366](/blog/recap-challenge-366)** by `Mohammad Sajid Anwar`.

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
Please check out the guest contributions for the [**Week #366**](/blog/guest-contribution/#366).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

## Task 1: Max Odd Binary {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a binary string that has at least one '1'.

Write a script to rearrange the bits in such a way that the resulting binary number is the maximum odd binary number and return the resulting binary string. The resulting string can have leading zeros.

#### Example 1

    Input: $str = "1011"
    Output: "1101"

    "1101" is max odd binary (13).

#### Example 2

    Input: $str = "100"
    Output: "001"

    "001" is max odd binary (1).

#### Example 3

    Input: $str = "111000"
    Output: "110001"

#### Example 4

    Input: $str = "0101"
    Output: "1001"

#### Example 5

    Input: $str = "1111"
    Output: "1111"

## Task 2: Conflict Events {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given two events start and end time.

Write a script to find out if there is a conflict between the two events. A conflict happens when two events have some non-empty intersection.

#### Example 1

    Input: @event1 = ("10:00", "12:00")
           @event2 = ("11:00", "13:00")
    Output: true

    Both events overlap from "11:00" to "12:00".

#### Example 2

    Input: @event1 = ("09:00", "10:30")
           @event2 = ("10:30", "12:00")
    Output: false

    Event1 ends exactly at 10:30 when Event2 starts.
    Since the problem defines intersection as non-empty, exact boundaries touching is not a conflict.


#### Example 3

    Input: @event1 = ("14:00", "15:30")
           @event2 = ("14:30", "16:00")
    Output: true

    Both events overlap from 14:30 to 15:30.

#### Example 4

    Input: @event1 = ("08:00", "09:00")
           @event2 = ("09:01", "10:00")
    Output: false

    There is a 1-minute gap from "09:00" to "09:01".

#### Example 5

    Input: @event1 = ("23:30", "00:30")
           @event2 = ("00:00", "01:00")
    Output: true

    They overlap from "00:00" to "00:30".

***
Last date to submit the solution `23:59 (UK Time) Sunday 5th April 2026`.
