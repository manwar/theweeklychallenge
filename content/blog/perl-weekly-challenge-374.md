---
title: "The Weekly Challenge - 374"
date: 2026-05-18T00:00:00+00:00
description: "The Weekly Challenge - 374"
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
### &nbsp;&nbsp;9. [TASK #1: Count Vowel](#TASK1)
### 10. [TASK #2: Largest Same-digits Number](#TASK2)

## HEADLINES {#HEADLINES}
***
Welcome to the `Week #374` of `The Weekly Challenge`.

We are still waiting for `summer` in England but the holiday season has already kicked in. It feels great when members continue to contribute even while on holiday. In the past, some have even contributed from a hospital bed. I once met a team member's wife at a conference and she told me how the weekly challenge is a frequent topic of discussion at home. It has truly become a part of some member's daily lives. I am expecting a bit of a slowdown in the coming weeks, but that's completely fine. I hope you all get to enjoy the sun whereever you are.

I don't know if you've noticed, but team members are blogging regularly now. One day, I will start doing so too.

Below is my contributions to the `Task #1` of `Week #372`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-373/mohammad-anwar/perl/ch-1.pl)
***
```perl
sub equal_list {
    my ($arr1, $arr2) = @_;

    return join("", @$arr1) eq join("", @$arr2) ? "true" : "false";
}
```

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-373/mohammad-anwar/raku/ch-1.raku)
***
```raku
sub equal-list(@arr1, @arr2) {
    return @arr1.join eq @arr2.join ?? "true" !! "false";
}
```

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-373/mohammad-anwar/python/ch-1.py)
***
```python
def equal_list(arr1, arr2):
    return "true" if "".join(arr1) == "".join(arr2) else "false"
```

Thank you `Team PWC`, once again.

`Happy Hacking!!`
***

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `369` &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 27 &nbsp;&nbsp;|
|&nbsp;&nbsp; `370` &nbsp;&nbsp;|&nbsp;&nbsp; 52 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `371` &nbsp;&nbsp;|&nbsp;&nbsp; 46 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
|&nbsp;&nbsp; `372` &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `373` &nbsp;&nbsp;|&nbsp;&nbsp; 47 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
***

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `369` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 86 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|
|&nbsp;&nbsp; `370` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 50 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `371` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 68 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `372` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 73 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|
|&nbsp;&nbsp; `373` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 65 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
***

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (4390)
     2. Rust       (1155)
     3. C          (1028)
     3. Ruby       (905)
     5. Haskell    (901)
     6. Lua        (894)
     7. C++        (718)
     8. Go         (686)
     9. JavaScript (639)
    10. Java       (532)

### Blogs with Creative Title
***

#### 1. [List the List](https://raku-musings.com//list-list.html) by Arne Sommer.
#### 2. [Let's Dance to List Division](https://dev.to/boblied/pwc-373-task-2-lets-dance-to-list-division-1e0k) by Bob Lied.
#### 3. [Divide and Concat](https://github.sommrey.de/the-bears-den/2026/05/15/ch-373.html) by Jorg Sommrey.
#### 4. [Because your list, your list I can’t resist](https://packy.dardan.com/b/pU) by Packy Anderson.
#### 5. [The week of lists](http://ccgi.campbellsmiths.force9.co.uk/challenge/373) by Peter Campbell Smith.
#### 6. [There Is No Equality Without Division](https://blog.firedrake.org/archive/2026/05/The_Weekly_Challenge_373__There_Is_No_Equality_Without_Division.html) by Roger Bell_West.
#### 7. [Joining and splitting lists](https://dev.to/simongreennet/weekly-challenge-joining-and-splitting-lists-18gh) by Simon Green.
***

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***
#### 1. Commits: 49,651 (`+118`)
#### 2. Pull Requests: 14,112 (`+38`)
#### 3. Contributors: 278
#### 4. Fork: 350 (`+1`)
#### 5. Stars: 212
***

## SPONSOR {#SPONSOR}
***
With start of `Week #355`, we have a new sponsor `Marc Perry` until the end of year `2026`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance. You can find more informations [**here**](/sponsors).

## RECAP {#RECAP}
***
Quick recap of **[The Weekly Challenge - 373](/blog/recap-challenge-373)** by `Mohammad Sajid Anwar`.

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
Please check out the guest contributions for the [**Week #373**](/blog/guest-contribution/#373).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

## Task 1: Count Vowel {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a string.

Write a script to return all possible vowel substrings in the given string. A vowel substring is a substring that only consists of vowels and has all five vowels present in it.

#### Example 1

    Input: $str = "aeiou"
    Output: ("aeiou")

#### Example 2

    Input: $str = "aaeeeiioouu"
    Output: ("aaeeeiioou", "aaeeeiioouu", "aeeeiioou", "aeeeiioouu")

    NOTE: Updated output [2025-05-18]

#### Example 3

    Input: $str = "aeiouuaxaeiou"
    Output: ("aeiou", "aeiou", "eiouua", "aeiouu", "aeiouua")

    NOTE: Updated output [2025-05-18]

#### Example 4

    Input: $str = "uaeiou"
    Output: ("aeiou", "uaeio", "uaeiou")

#### Example 5

    Input: $str = "aeioaeioa"
    Output: ()

## Task 2: Largest Same-digits Number {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a string containing 0-9 digits only.

Write a script to return the largest number with all digits the same in the given string.

#### Example 1

    Input: $str = "6777133339"
    Output: 3333

#### Example 2

    Input: $str = "1200034"
    Output: 4

#### Example 3

    Input: $str = "44221155"
    Output: 55

#### Example 4

    Input: $str = "88888"
    Output: 88888

#### Example 5

    Input: $str = "11122233"
    Output: 222

***
By submitting a response to the challenge you agree that your name or pseudonym, any photograph you supply and any other personal information contained in your submission may be published on this website and the associated mobile app. Last date to submit the solution `23:59 (UK Time) Sunday 24th May 2026`.
