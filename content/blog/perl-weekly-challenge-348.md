---
title: "The Weekly Challenge - 348"
date: 2025-11-17T00:00:00+00:00
description: "The Weekly Challenge - 348"
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
### &nbsp;&nbsp;9. [TASK #1: String Alike](#TASK1)
### 10. [TASK #2: Convert Time](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #348` of `The Weekly Challenge`.

Every week, we get blog post with creative and funny title. This week my favourite is `Phone Dating` by `Jorg Sommrey`.

Welcome back, `Luca Ferrari`, with complete set of solutions in [**Raku**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-347/luca-ferrari/raku), [**Java**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-347/luca-ferrari/pljava), [**Python**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-347/luca-ferrari/python) and [**PostgreSQL**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-347/luca-ferrari/plpgsql).

Thank you, `Feng Chang`, for sharing blog first time in [**Jupyter Notebook**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-347/feng-chang/raku/ch-1.ipynb) format.

As expected, we have some movement in the ranking for guest contributions, `JavaScript`, moved up one position to the `rank #7`.

Below is my contributions to the `Task #1` of `Week #347`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-347/mohammad-anwar/perl/ch-1.pl)

```perl
sub format_date {
    my $str = shift;
    $str =~ /(\d+)\w{2} (\w{3}) (\d+)/;
    sprintf("%04d-%02d-%02d", $3, 1+index("JanFebMarAprMayJunJulAugSepOctNovDec",$2)/3, $1);
}
```

<br>

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-347/mohammad-anwar/raku/ch-1.raku)

```raku
sub format-date(Str $str) {
    $str ~~ /(\d+) \w**2 \s (\w**3) \s (\d+)/;
    sprintf("%04d-%02d-%02d", $2, 1+index("JanFebMarAprMayJunJulAugSepOctNovDec", $1)/3, $0);
}
```

<br>

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-347/mohammad-anwar/python/ch-1.py)

```python
def format_date(date_str):
    match = re.search(r'(\d+)\w{2} (\w{3}) (\d+)', date_str)
    if match:
        day, month, year = match.groups()
        month_num = 1 + "JanFebMarAprMayJunJulAugSepOctNovDec".index(month) // 3
        return f"{year}-{month_num:02d}-{int(day):02d}"
    return ""
```

<br>

Thank you `Team PWC`, once again.

`Happy Hacking!!`

***

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `343` &nbsp;&nbsp;|&nbsp;&nbsp; 44 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `344` &nbsp;&nbsp;|&nbsp;&nbsp; 47 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|
|&nbsp;&nbsp; `345` &nbsp;&nbsp;|&nbsp;&nbsp; 49 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `346` &nbsp;&nbsp;|&nbsp;&nbsp; 52 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `347` &nbsp;&nbsp;|&nbsp;&nbsp; 49 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `343` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 61 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|
|&nbsp;&nbsp; `344` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 60 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
|&nbsp;&nbsp; `345` &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|&nbsp;&nbsp; 57 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
|&nbsp;&nbsp; `346` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|
|&nbsp;&nbsp; `347` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 67 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (3740)
     2. Rust       (1042)
     3. Ruby       (846)
     4. Haskell    (831)
     5. Lua        (792)
     6. C++        (666)
     7. JavaScript (598)
     8. C          (596)
     9. Go         (580)
    10. BQN        (483)

<br>

### Blogs with Creative Title
***

#### 1. [Format, Format](https://raku-musings.com/format-format.html) by Arne Sommer.
#### 2. [Phone Dating](https://github.sommrey.de/the-bears-den/2025/11/14/ch-347.html) by Jorg Sommrey.
#### 3. [string mangling](https://fluca1978.github.io/2025/11/13/PerlWeeklyChallenge347.html) by Luca Ferrari.
#### 4. [Leave a Date and a Number, and I'll Get Back to You](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-347/challenge-347/matthias-muth#readme) by Matthias Muth.
#### 5. [Oh, oh, formatted strings, give me some thing…](https://packy.dardan.com/b/dp) by Packy Anderson.
#### 6. [Frequent funny formats](http://ccgi.campbellsmiths.force9.co.uk/challenge/347) by Peter Campbell Smith.
#### 7. [Phone Number For a Date](https://blog.firedrake.org/archive/2025/11/The_Weekly_Challenge_347__Phone_Number_For_a_Date.html) by Roger Bell_West.
#### 8. [The one about formatting](https://dev.to/simongreennet/weekly-challenge-the-one-about-formatting-kfp) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 46,296 (`+115`)
#### 2. Pull Requests: 12,997 (`+39`)
#### 3. Contributors: 265
#### 4. Fork: 339
#### 5. Stars: 199

<br>

## SPONSOR {#SPONSOR}
***

With start of `Week #268`, we have a new sponsor `Lance Wicks` until the end of year `2025`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 347](/blog/recap-challenge-347)** by `Mohammad Sajid Anwar`.

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

Please check out the guest contributions for the [**Week #347**](/blog/guest-contribution/#347).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: String Alike {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a string of even length.

Write a script to find out whether the given string can be split into two halves of equal lengths, each with the same non-zero number of vowels.

<br>

#### Example 1

    Input: $str = "textbook"
    Output: false

    1st half: "text" (1 vowel)
    2nd half: "book" (2 vowels)

<br>

#### Example 2

    Input: $str = "book"
    Output: true

    1st half: "bo" (1 vowel)
    2nd half: "ok" (1 vowel)

<br>

#### Example 3

    Input: $str = "AbCdEfGh"
    Output: true

    1st half: "AbCd" (1 vowel)
    2nd half: "EfGh" (1 vowel)

<br>

#### Example 4

    Input: $str = "rhythmmyth"
    Output: false

    1st half: "rhyth" (0 vowel)
    2nd half: "mmyth" (0 vowel)

<br>

#### Example 5

    Input: $str = "UmpireeAudio"
    Output: false

    1st half: "Umpire" (3 vowels)
    2nd half: "eAudio" (5 vowels)

<br>

## Task 2: Covert Time {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given two strings, `$source` and `$target`, containing time in `24-hour` time form.

Write a script to convert the source into target by performing one of the following operations:

    1. Add  1 minute
    2. Add  5 minutes
    3. Add 15 minutes
    4. Add 60 minutes

Find the total operations needed to get to the target.

<br>

#### Example 1

    Input: $source = "02:30"
           $target = "02:45"
    Output: 1

    Just one operation i.e. "Add 15 minutes".

<br>

#### Example 2

    Input: $source = "11:55"
           $target = "12:15"
    Output: 2

    Two operations i.e. "Add 15 minutes" followed by "Add 5 minutes".

<br>

#### Example 3

    Input: $source = "09:00"
           $target = "13:00"
    Output: 4

    Four operations of "Add 60 minutes".

<br>

#### Example 4

    Input: $source = "23:45"
           $target = "00:30"
    Output: 3

    Three operations of "Add 15 minutes".

<br>

#### Example 5

    Input: $source = "14:20"
           $target = "15:25"
    Output: 2

    Two operations, one "Add 60 minutes" and one "Add 5 minutes"

<br>

***

Last date to submit the solution `23:59 (UK Time) Sunday 23rd November 2025`.

***
