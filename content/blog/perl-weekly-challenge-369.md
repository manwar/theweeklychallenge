---
title: "The Weekly Challenge - 369"
date: 2026-04-13T00:00:00+00:00
description: "The Weekly Challenge - 369"
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
### &nbsp;&nbsp;9. [TASK #1: Valid Tag](#TASK1)
### 10. [TASK #2: Group Division](#TASK2)

## HEADLINES {#HEADLINES}
***
Welcome to the `Week #369` of `The Weekly Challenge`.

`Abigail` is showing off his power with the most guest contributions in a single week, `23`, to be precise. If I am not mistaken, no one has done this before. `Roger Bell_West` has been consistently sharing `20` guest contributions every week, but `Abigail`'s choice of languages is very interesting too, for example, [**Bc**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-368/abigail/bc), [**Sed**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-368/abigail/sed), [**Awk**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-368/abigail/awk) and [**Bash**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-368/abigail/bash). That being said, I am not surprised, he has done it in the past. I am very happy that he is back at full power. We even got bonus as well, two blog posts: [**Make it Bigger**](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-368-1.html) and [**Small and Big Omega**](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-368-2.html). You really don't want to skip them; when it comes to regex, then `Abigail` is the master.

Today, school is open after two weeks of holiday, so it is back to the routine school run (morning and afternoon). I can't wait for the kids to get to high school, so I can be done with the school run. I am still waiting for a proper summer, but it was a nice Easter break and very relaxing. The format of weekly challenge never gives me a break. As soon as I release new challenges, I see instant solutions. There is no time to rest, and If I delay, the work just piles up. Also after releasing new challenges, I immediately start looking for next week's task. This takes a lot of time unless a team member comes up with suggestions; ideally having 10 weeks of challenges in advance would be handy. That would mean 20 tasks, which is a lot. I remember I used to have 5 weeks of challenges in the bank. I am not loosing hope, though.

Below is my contributions to the `Task #1` of `Week #368`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-368/mohammad-anwar/perl/ch-1.pl)
***
```perl
sub make_it_bigger {
    my ($s, $c) = @_;
    return max map {
        substr($s, $_, 1) eq $c
        ? (substr($s, 0, $_) . substr($s, $_ + 1))
        : () } 0..length($s)-1;
}
```

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-368/mohammad-anwar/raku/ch-1.raku)
***
```raku
sub make-it-bigger($s, $c) {
    return (0..$s.chars-1).map({
        $s.substr($_, 1) eq $c
            ?? ($s.substr(0, $_) ~ $s.substr($_ + 1))
            !! Empty
    }).max;
}
```

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-368/mohammad-anwar/python/ch-1.py)
***
```python
def make_it_bigger(s, c):
    options = [
        s[:i] + s[i+1:]
        for i in range(len(s))
        if s[i] == c
    ]

    return max(options) if options else s
```

Thank you `Team PWC`, once again.

`Happy Hacking!!`
***

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `364` &nbsp;&nbsp;|&nbsp;&nbsp; 55 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|
|&nbsp;&nbsp; `365` &nbsp;&nbsp;|&nbsp;&nbsp; 53 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|&nbsp;&nbsp; 27 &nbsp;&nbsp;|
|&nbsp;&nbsp; `366` &nbsp;&nbsp;|&nbsp;&nbsp; 52 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|
|&nbsp;&nbsp; `367` &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|
|&nbsp;&nbsp; `368` &nbsp;&nbsp;|&nbsp;&nbsp; 47 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|
***

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `364` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 73 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `365` &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 75 &nbsp;&nbsp;|&nbsp;&nbsp; 28 &nbsp;&nbsp;|
|&nbsp;&nbsp; `366` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 73 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|
|&nbsp;&nbsp; `367` &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 74 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|
|&nbsp;&nbsp; `368` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 74 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|
***

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (4313)
     2. Rust       (1135)
     3. C          (1006)
     3. Ruby       (889)
     5. Haskell    (882)
     6. Lua        (872)
     7. C++        (708)
     8. Go         (672)
     9. JavaScript (633)
    10. Java       (530)

### Blogs with Creative Title
***

#### 1. [A Bigger Big](https://raku-musings.com/bigger-big.html) by Arne Sommer.
#### 2. [A Bigger Omega](https://github.sommrey.de/the-bears-den/2026/04/12/ch-368.html) by Jorg Sommrey.
#### 3. [Big, Big and Little](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-368/challenge-368/matthias-muth#readme) by Matthias Muth.
#### 4. [And the 2013 Tony Award for Best Coding Challenge goes to…](https://packy.dardan.com/b/n5) by Packy Anderson.
#### 5. [Bigger, big and little](http://ccgi.campbellsmiths.force9.co.uk/challenge/368) by Peter Campbell Smith.
#### 6. [Omega is Bigger](https://blog.firedrake.org/archive/2026/04/The_Weekly_Challenge_368__Omega_is_Bigger.html) by Roger Bell_West.
#### 7. [Little, Big and Bigger](https://dev.to/simongreennet/weekly-challenge-little-big-and-bigger-jpe) by Simon Green.
***

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***
#### 1. Commits: 48,991 (`+145`)
#### 2. Pull Requests: 13,917 (`+43`)
#### 3. Contributors: 277
#### 4. Fork: 346
#### 5. Stars: 211
***

## SPONSOR {#SPONSOR}
***
With start of `Week #355`, we have a new sponsor `Marc Perry` until the end of year `2026`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance. You can find more informations [**here**](/sponsors).

## RECAP {#RECAP}
***
Quick recap of **[The Weekly Challenge - 368](/blog/recap-challenge-368)** by `Mohammad Sajid Anwar`.

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
Please check out the guest contributions for the [**Week #368**](/blog/guest-contribution/#368).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

## Task 1: Valid Tag {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a given a string caption for a video.

Write a script to generate tag for the given string caption in three steps as mentioned below:

    1. Format as camelCase
    Starting with a lower-case letter and capitalising the first letter of each subsequent word.
    Merge all words in the caption into a single string starting with a #.
    2. Sanitise the String
    Strip out all characters that are not English letters (a-z or A-Z).
    3. Enforce Length
    If the resulting string exceeds 100 characters, truncate it so it is
    exactly 100 characters long.

#### Example 1

    Input: $caption = "Cooking with 5 ingredients!"
    Output: "#cookingWithIngredients"

#### Example 2

    Input: $caption = "the-last-of-the-mohicans"
    Output: "#thelastofthemohicans"

#### Example 3

    Input: $caption = "  extra spaces here"
    Output: "#extraSpacesHere"

#### Example 4

    Input: $caption = "iPhone 15 Pro Max Review"
    Output: "#iphoneProMaxReview"

#### Example 5

    Input: $caption = "Ultimate 24-Hour Challenge: Living in a Smart Home controlled entirely by Artificial Intelligence and Voice Commands in the year 2026!"
    Output: "#ultimateHourChallengeLivingInASmartHomeControlledEntirelyByArtificialIntelligenceAndVoiceCommandsIn"

## Task 2: Group Division {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a string, group size and filler character.

Write a script to divide the string into groups of given size. In the last group if the string doesn't have enough characters remaining fill with the given filler character.

#### Example 1

    Input: $str = "RakuPerl", $size = 4, $filler = "*"
    Output: ("Raku", "Perl")

#### Example 2

    Input: $str = "Python", $size = 5, $filler = "0"
    Output: ("Pytho", "n0000")

#### Example 3

    Input: $str = "12345", $size = 3, $filler = "x"
    Output: ("123", "45x")

#### Example 4

    Input: $str = "HelloWorld", $size = 3, $filler = "_"
    Output: ("Hel", "loW", "orl", "d__")

#### Example 5

    Input: $str = "AI", $size = 5, $filler = "!"
    Output: "AI!!!"

***
By submitting a response to the challenge you agree that your name or pseudonym, any photograph you supply and any other personal information contained in your submission may be published on this website and the associated mobile app. Last date to submit the solution `23:59 (UK Time) Sunday 19th April 2026`.
