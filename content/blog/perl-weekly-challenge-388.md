---
title: "The Weekly Challenge - 388"
date: 2026-08-24T00:00:00+00:00
description: "The Weekly Challenge - 388"
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
### &nbsp;&nbsp;9. [TASK #1: Dyck Words](#TASK1)
### 10. [TASK #2: Secret Santa](#TASK2)

## HEADLINES {#HEADLINES}
***
Welcome to the `Week #388` of `The Weekly Challenge`.

Thank you, `Roger Bell_West`, for suggesting quality challenge. I request `Team PWC` to keep sharing new challenges.

Below is my contributions to the `Task #1` of `Week #387`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-387/mohammad-anwar/perl/ch-1.pl)
***
```perl
sub min_steps {
    my ($str) = @_;
    my $steps = 0;
    $steps++ while $str =~ s/01/10/g;
    return $steps;
}
```

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-387/mohammad-anwar/raku/ch-1.raku)
***
```raku
sub min-steps(Str $str is copy) {
    my $steps = 0;
    $steps++ while $str ~~ s:g/01/10/;
    return $steps;
}
```

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-387/mohammad-anwar/python/ch-1.py)
***
```python
def min_steps(s: str) -> int:
    steps = 0
    while "01" in s:
        s = re.sub(r"01", "10", s)
        steps += 1
    return steps
```

Thank you `Team PWC`, once again.

`Happy Hacking!!`
***

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `383` &nbsp;&nbsp;|&nbsp;&nbsp; 46 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `384` &nbsp;&nbsp;|&nbsp;&nbsp; 45 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `385` &nbsp;&nbsp;|&nbsp;&nbsp; 44 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `386` &nbsp;&nbsp;|&nbsp;&nbsp; 41 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|
|&nbsp;&nbsp; `387` &nbsp;&nbsp;|&nbsp;&nbsp; 36 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|
***

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `383` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 32 &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|
|&nbsp;&nbsp; `384` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 36 &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|
|&nbsp;&nbsp; `385` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 39 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `386` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 30 &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|
|&nbsp;&nbsp; `387` &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|
***

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (4570)
     2. Rust       (1214)
     3. C          (1060)
     4. Haskell    (947)
     5. Ruby       (935)
     6. Lua        (919)
     7. C++        (746)
     8. Go         (728)
     9. JavaScript (648)
    10. Java       (532)

### Blogs with Creative Title
***

#### 1. [String the Atoms](https://raku-musings.com/string-the-atoms.html) by Arne Sommer.
#### 2. [Binary Chemistry](https://github.sommrey.de/the-bears-den/2026/08/21/ch-387.html) by Jorg Sommrey.
#### 3. [Regex Man Hates Atom Man](https://packy.dardan.com/b/yD) by Packy Anderson.
#### 4. [Ones and atoms](http://ccgi.campbellsmiths.force9.co.uk/challenge/387) by Peter Campbell Smith.
#### 5. [Only Binary Is Rational](https://blog.firedrake.org/archive/2026/08/The_Weekly_Challenge_387__Only_Binary_Is_Rational.html) by Roger Bell_West.
#### 6. [Rearranging Atoms](https://dev.to/simongreennet/rearranging-atoms-56c4) by Simon Green.

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***
#### 1. Commits: 51,046 (`+75`)
#### 2. Pull Requests: 14,597 (`+29`)
#### 3. Contributors: 282
#### 4. Fork: 353
#### 5. Stars: 219

## SPONSOR {#SPONSOR}
***
With start of `Week #355`, we have a new sponsor `Marc Perry` until the end of year `2026`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance. You can find more informations [**here**](/sponsors).

## RECAP {#RECAP}
***
Quick recap of **[The Weekly Challenge - 387](/blog/recap-challenge-387)** by `Mohammad Sajid Anwar`.

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
Please check out the guest contributions for the [**Week #387**](/blog/guest-contribution/#387).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

## Task 1: Dyck Words {#TASK1}
##### **Submitted by:** [Roger Bell_West](https://blog.firedrake.org/)
***

A Dyck Word of order `$n` is a string of length `2x$n` consisting of `$n` 'U' (Up) characters and `$n` 'D' (Down) characters such that no initial prefix of the string contains more 'D's than 'U's.

Write a script to return a list of all valid Dyck words of length `2x$n`, sorted in lexicographical (alphabetical) order.

#### Example 1

    Input: $n = 1
    Output: ("UD")

#### Example 2

    Input: $n = 2
    Output: ("UDUD","UUDD")

#### Example 3

    Input: $n = 3
    Output: ("UDUDUD", "UDUUDD", "UUDDUD", "UUDUDD", "UUUDDD")

#### Example 4

    Input: $n = 0
    Output: ("")

#### Example 5

    Input: $n = 4
    Output: ("UDUDUDUD", "UDUDUUDD", "UDUUDDUD", "UDUUDUDD", "UDUUUDDD",
             "UUDDUDUD", "UUDDUUDD", "UUDUDDUD", "UUDUDUDD", "UUDUUDDD",
             "UUUDDDUD", "UUUDDUDD", "UUUDUDDD", "UUUUDDDD")

## Task 2: Secret Santa {#TASK2}
##### **Submitted by:** [Roger Bell_West](https://blog.firedrake.org/)
***

A company with `$n` employees is running a Secret Santa exchange. Each employee buys one gift and receives one gift.

Write a script to return the total number of valid gift assignments where no employee receives the gift they originally bought (i.e., employee `$i` must not be assigned gift `$i`).

#### Example 1

    Input: $n = 1
    Output: 0

    Only 1 participant exists. They would have to receive their own gift, which is invalid.

#### Example 2

    Input: $n = 2
    Output: 1

    Participants 1 and 2 must swap gifts ([2, 1]).

#### Example 3

    Input: $n = 3
    Output: 2

    The 2 valid gift arrays where array[i] is who person i+1 receives from:
    [2, 3, 1]
    [3, 1, 2]

#### Example 4

    Input: $n = 4
    Output: 9

    The 9 valid arrays are:
    [2, 1, 4, 3], [2, 3, 4, 1], [2, 4, 1, 3],
    [3, 1, 4, 2], [3, 4, 1, 2], [3, 4, 2, 1],
    [4, 1, 2, 3], [4, 3, 1, 2], [4, 3, 2, 1],

#### Example 5

    Input: $n = 5
    Output: 44

    There are 44 valid permutations out of 5! = 120 total possible arrangements.

***
By submitting a response to the challenge you agree that your name or pseudonym, any photograph you supply and any other personal information contained in your submission may be published on this website and the associated mobile app. Last date to submit the solution `23:59 (UK Time) Sunday 30th August 2026`.
