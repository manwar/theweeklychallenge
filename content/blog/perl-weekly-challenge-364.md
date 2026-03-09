---
title: "The Weekly Challenge - 364"
date: 2026-03-09T00:00:00+00:00
description: "The Weekly Challenge - 364"
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
### &nbsp;&nbsp;9. [TASK #1: Decrypt String](#TASK1)
### 10. [TASK #2: Goal Parser](#TASK2)

## HEADLINES {#HEADLINES}
***
Welcome to the `Week #364` of `The Weekly Challenge`.

Last week was the quietest week of 2026 in terms of regular and guest contributions. I hope that changes this week!

I am sure you have all noticed the new look of the Weekly Challenge website.

#### Why the change?

There are several reasons. First, the old design was quite `clunky` on mobile devices. I received several complaints from users who found it difficult to navigate. While I knew the workarounds and would share them when asked, I wasn't sure if that was enough to keep everyone happy.

However, the primary driver for the makeover was our use of the [**Highcharts**](https://www.highcharts.com) library. When I first implemented these charts, the library was free for personal use. Recently, I discovered that is no longer the case, so I decided to migrate to [**ChartJS**](https://www.chartjs.org) library, which remains free.

Admittedly, I am not a frontend expert, and my knowledge in this area is limited. My initial attempts to migrate the charts were time consuming and difficult, I almost gave up. However, after successfully migrating the charts on [**my personal website**](https://manwar.org) a few days ago. I gained the confidence to try again. I've finally managed to complete the migration! While I was at it, I decided to overhaul the design and fix those mobile responsiveness issues. It turned out to be less daunting once I really dug into the code.

You may still find a few glitches here and there. Please let me know if you do, and I will find the time to fix them.

#### New Features I Love:

1. You can now comment on [**Challenges**](/challenges), [**Recaps**](/recaps), and [**BLOGS**](/blogs) (powered by [**Disqus**](https://disqus.com) free tier).
2. Tag page: main menu `INFO` -> `TAGS`
3. Search: main menu `SEARCH`
4. Sponsors: main menu `INFO` -> `SPONSORS`

#### Sponsorship Update:

As many of you know, we currently lack a sponsor for the monthly prize. This led to a delay in declaring the champions for the first two months of 2026. Fortunately, a respected member of Perl community recently offered to sponsor the prize money. I will share more details once everything is finalised.

The new [**Sponsors**](/sponsors) page lists all past sponsors (to the best of my memory). If you have donated in the past and don't see your name, please let me know so I can update the list.

#### Community Shout-out:

I am incredibly impressed by `Lubos Kolouch` and `Paulo Custodio`. They have been working tirelessly to solve past challenges in `C`, `Java` and `Python`. Their efforts are definitely going to shake up our language charts! In fact, I can already see `Java` making it into the `TOP #10` pushing `BQN` down the list.

Welcome back, `beespider`, and thanks for your contributions in [**Uiua**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-363/beespider/uiua).

***

<br>

Below is my contributions to the `Task #1` of `Week #363`. No solution in `Raku` this time, sorry.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-363/mohammad-anwar/perl/ch-1.pl)
***
```perl
sub lie_detector {
    my $str = shift;

    my ($word) = $str =~ /^([^-—]+)/;
    $word =~ s/\s+$//;

    my $vow = () = $word =~ /[aeiou]/gi;
    my $con = () = $word =~ /[b-df-hj-np-tv-z]/gi;

    my ($v_phrase, $c_phrase) = $str =~ /([\w\s]+?)\s+vowels?.*?([\w\s]+?)\s+consonants?/;

    if (defined $v_phrase && defined $c_phrase) {
        $v_phrase =~ s/^\s+|\s+$//g;
        $c_phrase =~ s/^\s+|\s+$//g;

        my $v_claim = words2nums($v_phrase);
        my $c_claim = words2nums($c_phrase);

        return (defined $v_claim && defined $c_claim &&
                $v_claim == $vow && $c_claim == $con) ? "true" : "false";
    }

    return "false";
}
```

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-363/mohammad-anwar/python/ch-1.py)
***
```python
def lie_detector(s):
    match = re.match(r'^([^-—]+)', s)

    if not match:
        return "false"

    word = match.group(1).strip()
    vow  = len(re.findall(r'[aeiou]', word, re.IGNORECASE))
    con  = len(re.findall(r'[b-df-hj-np-tv-z]', word, re.IGNORECASE))

    m = re.search(r'([\w\s]+?)\s+vowels?\b.*?([\w\s]+?)\s+consonants?\b', s)
    if m:
        v_phrase = m.group(1).strip()
        c_phrase = m.group(2).strip()

        try:
            v_claim = w2n.word_to_num(v_phrase)
            c_claim = w2n.word_to_num(c_phrase)
            return "true" if v_claim == vow and c_claim == con else "false"
        except ValueError:
            return "false"

    return "false"
```

Thank you `Team PWC`, once again.

`Happy Hacking!!`
***

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `359` &nbsp;&nbsp;|&nbsp;&nbsp; 54 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|
|&nbsp;&nbsp; `360` &nbsp;&nbsp;|&nbsp;&nbsp; 57 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|
|&nbsp;&nbsp; `361` &nbsp;&nbsp;|&nbsp;&nbsp; 55 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `362` &nbsp;&nbsp;|&nbsp;&nbsp; 52 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `363` &nbsp;&nbsp;|&nbsp;&nbsp; 43 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
***

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `359` &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 68 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `360` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 73 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|
|&nbsp;&nbsp; `361` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 53 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|
|&nbsp;&nbsp; `362` &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|&nbsp;&nbsp; 68 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|
|&nbsp;&nbsp; `363` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 37 &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|
***

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (4194)
     2. Rust       (1115)
     3. Ruby       (875)
     4. Haskell    (871)
     5. Lua        (852)
     6. C          (829)
     7. C++        (698)
     8. Go         (650)
     9. JavaScript (624)
    10. Java       (526)

### Blogs with Creative Title
***

#### 1. [Sheriff Detector](https://raku-musings.com/sheriff-detector.html) by Arne Sommer.
#### 2. [Lying Sheriffs](https://github.sommrey.de/the-bears-den/2026/03/06/ch-363.html) by Jorg Sommrey.
#### 3. [I Don't Lie, Sheriff!](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-363/challenge-363/matthias-muth#readme) by Matthias Muth.
#### 4. [I Shot The Subnet…](https://packy.dardan.com/b/k8) by Packy Anderson.
#### 5. [Lies and lies within](http://ccgi.campbellsmiths.force9.co.uk/challenge/363) by Peter Campbell Smith.
#### 6. [Stringy Sheriff](https://blog.firedrake.org/archive/2026/03/The_Weekly_Challenge_363__Stringy_Sheriff.html) by Roger Bell_West.
#### 7. [The subnet detector](https://dev.to/simongreennet/weekly-challlenge-the-subnet-detector-1d9l) by Simon Green.
***

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***
#### 1. Commits: 48,227 (`+96`)
#### 2. Pull Requests: 13,698 (`+65`)
#### 3. Contributors: 275
#### 4. Fork: 349
#### 5. Stars: 210
***

## SPONSOR {#SPONSOR}
***
We are looking for sponsor for monthly prize pot of `US $50`. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance. You can find more informations [**here**](/sponsors).

## RECAP {#RECAP}
***
Quick recap of **[The Weekly Challenge - 363](/blog/recap-challenge-363)** by `Mohammad Sajid Anwar`.

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
Please check out the guest contributions for the [**Week #363**](/blog/guest-contribution/#363).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

## Task 1: Decrypt String {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a string formed by digits and '#'.

Write a script to map the given string to English lowercase characters following the given rules.

    - Characters 'a' to 'i' are represented by '1' to '9' respectively.
    - Characters 'j' to 'z' are represented by '10#' to '26#' respectively.

#### Example 1

    Input: $str = "10#11#12"
    Output: "jkab"

    10# -> j
    11# -> k
    1   -> a
    2   -> b

#### Example 2

    Input: $str = "1326#"
    Output: "acz"

    1   -> a
    3   -> c
    26# -> z

#### Example 3

    Input: $str = "25#24#123"
    Output: "yxabc"

    25# -> y
    24# -> x
    1   -> a
    2   -> b
    3   -> c

#### Example 4

    Input: $str = "20#5"
    Output: "te"

    20# -> t
    5   -> e

#### Example 5

    Input: $str = "1910#26#"
    Output: "aijz"

    1   -> a
    9   -> i
    10# -> j
    26# -> z

## Task 2: Goal Parser {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a string, `$str`.

Write a script to interpret the given string using `Goal Parser`.

>  The Goal Parser interprets "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

#### Example 1

    Input: $str = "G()(al)"
    Output: "Goal"

    G    -> "G"
    ()   -> "o"
    (al) -> "al"

#### Example 2

    Input: $str = "G()()()()(al)"
    Output: "Gooooal"

    G       -> "G"
    four () -> "oooo"
    (al)    -> "al"

#### Example 3

    Input: $str = "(al)G(al)()()"
    Output: "alGaloo"

    (al) -> "al"
    G    -> "G"
    (al) -> "al"
    ()   -> "o"
    ()   -> "o"

#### Example 4

    Input: $str = "()G()G"
    Output: "oGoG"

    () -> "o"
    G  -> "G"
    () -> "o"
    G  -> "G"

#### Example 5

    Input: $str = "(al)(al)G()()"
    Output: "alalGoo"

    (al) -> "al"
    (al) -> "al"
    G    -> "G"
    ()   -> "o"
    ()   -> "o"

***
Last date to submit the solution `23:59 (UK Time) Sunday 15th March 2026`.
