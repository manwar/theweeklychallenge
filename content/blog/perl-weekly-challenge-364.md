---
title: "The Weekly Challenge - 364"
date: 2026-03-08T00:00:00+00:00
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

I am sure you all have noticed the new look of the weekly challenge website.

Why change the look and feel?

Well, there are many reasons. First, the old design was very scratchy in mobile devices. I have had few complaints from user, finding it hard to navigate. I knew the workaround, so I always reply with the workaround. Whether that makes the user happy or annoy, I don't know.

But the most important reasons for the makeover was the use of [**Highcharts**](https://www.highcharts.com) JS library in our flashy charts. I remember when I first created the charts with the library, it was FREE for personal user. So I even used it in my personal website. Recently I found out that the library is no longer FREE. I decided to migrate to other FREE chart library. I found out about [**ChartJS**](https://www.chartjs.org) library. As you all know, I am not a frontend guy and knowledge is very limited.

I decided to try few charts and see how we can migrate all existing charts. I find it very time consuming and difficult. I gave up, eventually. Few days ago, I managed to successfully migrated [**my personal website**](https://manwar.org) charts to `ChartJS`. That gave me confidence to give one more attempt, I finally managed to migrate the charts. While doing so, I decided to give a new look and fix the issues with the mobile devices. It wasn't that difficult when I dig deep.

I am sure, you may find few glitches here and there. Please let me know and I will try to find the time to fix it.

My favourite features in the new design:

1. You can now comment on [**Challenges**](/challenges), [**Recaps**](/recaps), and [**BLOGS**](/blogs). Currently, I am using [**Disqus**](https://disqus.com) FREE Tier for comments.
2. Tag page: main menu `INFO` -> `TAGS`
3. Search page: main menu `SEARCH`
4. Sponsor page: main menu `INFO` -> `SPONSORS`

As you know, currently we have no sponsor for the monthly prize. So the first two months of 2026, I delayed the declaration of the monthly champions. Couple of weeks ago, a fellow team member and respected member of Perl community offered to sponsor the monthly prize money. I will share the details when things settled down.

In the new design, the sponsors page has all past sponsors listed (from my memory). If you have donated in the past then please let me know and I will update the page.

I am very impressed by `Lubos Kolouch` and `Paulo Custodio`. They are working tirelessly solving past challenges in `C` and `Python`. This would definitely upset the chart list of languages.

***

<br>

Below is my contributions to the `Task #1` of `Week #363`.

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
|&nbsp;&nbsp; `363` &nbsp;&nbsp;|&nbsp;&nbsp; 37 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|
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
|&nbsp;&nbsp; `363` &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|&nbsp;&nbsp; 35 &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|
***

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

### Blogs with Creative Title
***

#### 1. [Sheriff Detector](https://raku-musings.com/sheriff-detector.html) by Arne Sommer.
#### 2. [Lying Sheriffs](https://github.sommrey.de/the-bears-den/2026/03/06/ch-363.html) by Jorg Sommrey.
#### 3. []() by Luca Ferrari.
#### 4. []() by Marc Perry.
#### 5. [I Shot The Subnet…](https://packy.dardan.com/b/k8) by Packy Anderson.
#### 6. [Lies and lies within](http://ccgi.campbellsmiths.force9.co.uk/challenge/363) by Peter Campbell Smith.
#### 7. [Stringy Sheriff](https://blog.firedrake.org/archive/2026/03/The_Weekly_Challenge_363__Stringy_Sheriff.html) by Roger Bell_West.
#### 8. [The subnet detector](https://dev.to/simongreennet/weekly-challlenge-the-subnet-detector-1d9l) by Simon Green.
***

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***
#### 1. Commits: 48,131 (`+44`)
#### 2. Pull Requests: 13,633 (`+27`)
#### 3. Contributors: 275 (`+1`)
#### 4. Fork: 349 (`+2`)
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
