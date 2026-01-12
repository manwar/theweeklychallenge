---
title: "The Weekly Challenge - 356"
date: 2026-01-12T00:00:00+00:00
description: "The Weekly Challenge - 356"
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
### &nbsp;&nbsp;9. [TASK #1: Kolakoski Sequence](#TASK1)
### 10. [TASK #2: Who Wins](#TASK2)
<br>

## HEADLINES {#HEADLINES}
***

Welcome to the `Week #356` of `The Weekly Challenge`.

For us, officially, this is the first week of `2026` and what a great way to begin the journey - by welcoming two new members, [**Piotr Kolasinski**](https://github.com/nutilius) and [**Patrick Steele**](https://github.com/prsteele).

Thank you, `Piotr`, for your first contributions in [**Python**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-355/nutilius/python).

Thank you, `Patrick`, for your first contributions in [**Uiua**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-355/prsteele/uiua).

Welcome to blogging, `Marc Perry` and thanks for sharing your first [**blog post**](https://awesomepowerofgenetics.blogspot.com/2026_01_04_archive.html). For some strange reason, I am getting this message:

> This blog is open to invited readers only

`David Ferrone`, you pleasantly surprised me at the start of `2026` - thank you for your generous donation.

A few weeks ago, I shared about seeking a sponsor for `2026`. Since `Lance Wicks` has been our solo sponsor for `two years`, I reached out to him again this year and am still waiting for his reply. In the meantime, I am looking for a new sponsor, just in case. We are hoping for a monthly prize pot of `US $50`. I must make this clear: `the mission will carry on with or without a prize pot`.

Returning to contributions, I am thrilled to begin the year with a bang. We nearly reached our milestone with `98` contributions from `32` contributors. Also received `69` guest contributions from `17` guest contributors.

As of today, we have `332` regular contributors and `34` guest contributors. Every week, I aim for `100+` regular contributions and `50+` guest contributions. And when we reach that target, I am the happiest person.

Last but not least, thank you, `Simon Green`, for the cool challenge this week `Who Wins`.

***

Below is my contributions to the `Task #1` of `Week #355`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-355/mohammad-anwar/perl/ch-1.pl)

```perl
sub thousand_separator {
    my ($num) = @_;
    $num =  reverse $num;
    $num =~ s/(\d{3})(?=\d)/$1,/g;
    return reverse $num
}
```

<br>

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-355/mohammad-anwar/raku/ch-1.raku)

```raku
sub thousand-separator(Int $num --> Str) {
    my $reversed = $num.flip;
    $reversed ~~ s:g/(\d**3) <?before \d>/$0,/;
    return $reversed.flip;
}
```

<br>

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-355/mohammad-anwar/python/ch-1.py)

```python
def thousand_separator(num):
    num_str = str(num)[::-1]
    num_str = re.sub(r'(\d{3})(?=\d)', r'\1,', num_str)
    return num_str[::-1]
```

<br>

Thank you `Team PWC`, once again.

`Happy Hacking!!`

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `351` &nbsp;&nbsp;|&nbsp;&nbsp; 52 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `352` &nbsp;&nbsp;|&nbsp;&nbsp; 52 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|
|&nbsp;&nbsp; `353` &nbsp;&nbsp;|&nbsp;&nbsp; 54 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|
|&nbsp;&nbsp; `354` &nbsp;&nbsp;|&nbsp;&nbsp; 54 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `355` &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `351` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 67 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `352` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 73 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|
|&nbsp;&nbsp; `353` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 73 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `354` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 61 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
|&nbsp;&nbsp; `355` &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|&nbsp;&nbsp; 69 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|

<br>

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (3988)
     2. Rust       (1084)
     3. Ruby       (862)
     4. Haskell    (849)
     5. Lua        (824)
     6. C++        (682)
     7. Go         (618)
     8. JavaScript (614)
     9. C          (598)
    10. BQN        (497)

<br>

### Blogs with Creative Title
***

#### 1. [Mountain Separator](https://raku-musings.com/mountain-separator.html) by Arne Sommer.
#### 2. [Separated Mountains](https://github.sommrey.de/the-bears-den/2026/01/09/ch-355.html) by Jorg Sommrey.
#### 3. [number formatting and sorting](https://fluca1978.github.io/2026/01/08/PerlWeeklyChallenge355.html) by Luca Ferrari.
#### 4. [Thousand Mountains](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-355/challenge-355/matthias-muth#readme) by Matthias Muth.
#### 5. [Oh to live on Array Mountain…](https://packy.dardan.com/b/hD) by Packy Anderson.
#### 6. [Thousands of mountains](http://ccgi.campbellsmiths.force9.co.uk/challenge/355) by Peter Campbell Smith.
#### 7. [Mountains by the Thousand](https://blog.firedrake.org/archive/2026/01/The_Weekly_Challenge_355__Mountains_by_the_Thousand.html) by Roger Bell_West.
#### 8. [Commify every mountain](https://dev.to/simongreennet/weekly-challenge-commify-every-mountain-1kid) by Simon Green.

<br>

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***

#### 1. Commits: 47,271 (`+127`)
#### 2. Pull Requests: 13,342 (`+48`)
#### 3. Contributors: 272 (`+1`)
#### 4. Fork: 349 (`+3`)
#### 5. Stars: 207

<br>

## SPONSOR {#SPONSOR}
***

With start of `Week #268`, we have a new sponsor `Lance Wicks` until the end of year `2025`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance.

<br>

## RECAP {#RECAP}
***

Quick recap of **[The Weekly Challenge - 355](/blog/recap-challenge-355)** by `Mohammad Sajid Anwar`.

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

#### [**Piotr Kolasinski**](https://github.com/nutilius), `Python` hacker from `Poland` joined `Team PWC`.
#### [**Patrick Steele**](https://github.com/prsteele), `Uiua` hacker from `USA` joined `Team PWC`.

<br>

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

<br>

## GUESTS {#GUESTS}
***

Please check out the guest contributions for the [**Week #355**](/blog/guest-contribution/#355).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

<br>

## Task 1: Kolakoski Sequence {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given an integer, `$int` > 3.

Write a script to generate the Kolakoski Sequence of given length `$int` and return the count of `1` in the generated sequence. Please follow the [**wikipedia page**](https://en.wikipedia.org/wiki/Kolakoski_sequence) for more informations.

#### Example 1

    Input: $int = 4
    Output: 2

    (1)(22)(11)(2) => 1221

<br>

#### Example 2

    Input: $int = 5
    Output: 3

    (1)(22)(11)(2)(1) => 12211

<br>

#### Example 3

    Input: $int = 6
    Output: 3

    (1)(22)(11)(2)(1)(22) => 122112

<br>

#### Example 4

    Input: $int = 7
    Output: 4

    (1)(22)(11)(2)(1)(22)(1) => 1221121

<br>

#### Example 5

    Input: $int = 8
    Output: 4

    (1)(22)(11)(2)(1)(22)(1)(22) => 12211212

<br>

## Task 2: Who Wins {#TASK2}
##### **Submitted by:** [Simon Green](https://github.com/simongreen-net)
***

It's `NFL` playoff time. Since the `2020` season, seven teams from each of the league's two conferences (`AFC` and `NFC`) qualify for the playoffs based on regular season winning percentage, with a tie-breaking procedure if required. The top team in each conference receives a first-round bye, automatically advancing to the second round.

The following games are played. Some times the games are played in a different order. To make things easier, assume the order is always as below.

Week 1: Wild card playoffs

    - Team 1 gets a bye
      - Game 1: Team 2 hosts Team 7
      - Game 2: Team 3 hosts Team 6
      - Game 3: Team 4 hosts Team 5
    - Week 2: Divisional playoffs
      - Game 4: Team 1 hosts the third seeded winner from the previous week.
      - Game 5: The highest seeded winner from the previous week hosts the second seeded winner.
    - Week 3: Conference final
      - Game 6: The highest seeded winner from the previous week hosts the other winner

You are given a six character string containing only `H` (home) and `A` away which has the winner of each game. Which two teams competed in the the conference final and who won?

#### Example 1

[NFC Conference 2024/5](https://en.wikipedia.org/wiki/2024%E2%80%9325_NFL_playoffs#Bracket). Teams were Detroit, Philadelphia, Tampa Bay, Los Angeles Rams, Minnesota, Washington and Green Bay. Philadelphia - seeded second - won.

    Input: $results = "HAHAHH"
    Output: "Team 2 defeated Team 6"

    In Week 1, Team 2 (home) won against Team 7, Team 6 (away) defeated Team 3 and Team 4 (home) were victorious over Team 5. This means the second week match ups are Team 1 at home to Team 6, and Team 2 hosted Team 4.

    In week 2, Team 6 (away) won against Team 1, while Team 2 (home) beat Team 4. The final week was Team 2 hosting Team 6

    In the final week, Team 2 (home) won against Team 6.

#### Example 2

AFC Conference 2024/5. Teams were Kansas City, Buffalo, Baltimore, Houston, Los Angeles Charges, Pittsburgh and Denver. Kansas City - seeded first - won.

    Input: $results = "HHHHHH"
    Output: "Team 1 defeated Team 2"

<br>

#### Example 3

  [AFC Conference 2021/2](https://en.wikipedia.org/wiki/2021%E2%80%9322_NFL_playoffs#Bracket). Teams were Tennessee, Kansas City, Buffalo, Cincinnati, Las Vegas, New England and Pittsburgh. Cincinnati - seeded fourth - won.

    Input: $results = "HHHAHA"
    Output: "Team 4 defeated Team 2"

<br>

#### Example 4

NFC Conference 2021/2. Teams were Green Bay, Tampa Bay, Dallas, Los Angeles Rams, Arizona, San Francisco and Philadelphia. The Rams - seeded fourth - won.

    Input: $results = "HAHAAH"
    Output: "Team 4 defeated Team 6"

<br>

#### Example 5

[NFC Conference 2020/1](https://en.wikipedia.org/wiki/2020%E2%80%9321_NFL_playoffs#Bracket). Teams were Green Bay, New Orleans, Seattle, Washington, Tampa Bay, Los Angeles Rams and Chicago. Tampa Bay - seeded fifth - won.

    Input: $results = "HAAHAA"
    Output: "Team 5 defeated Team 1"

<br>

***

Last date to submit the solution `23:59 (UK Time) Sunday 18th January 2026`.

***
