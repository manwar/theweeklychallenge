---
title: "The Weekly Challenge - 377"
date: 2026-06-08T00:00:00+00:00
description: "The Weekly Challenge - 377"
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
### &nbsp;&nbsp;9. [TASK #1: Reverse Existence](#TASK1)
### 10. [TASK #2: Prefix Suffix](#TASK2)

## HEADLINES {#HEADLINES}
***
Welcome to the `Week #377` of `The Weekly Challenge`.

Abigail is back again. I was expecting to see regex magic from him this time. If you haven't seen it already then here it is for you.

Ideally, this needed some explanation, atleast for me.

```perl
my $tag_re = qr {
    (?(DEFINE)
        (?<WS>                     [ \t\n\r\f]+)
        (?<OPT_WS>                 [ \t\n\r\f]*)
        (?<ASCII_ALPHA>            [a-zA-Z])
        (?<ASCII_ALPHANUM>         [a-zA-Z0-9])
        (?<EQ>                     (?: (?&OPT_WS) = (?&OPT_WS)))
        (?<TAG_NAME>               (?: (?&ASCII_ALPHA) (?&ASCII_ALPHANUM)*))
        (?<ATTR_NAME>              (?[ \p{Any} - \p{Control} -
                                       [\x{00} \t\n\r\f"'=/>]])+)

        (?<ATTR_VAL_UNQUOTED>      (?[\p{Any} - [\x{00}\p{Control}] -
                                        [ \t\n\r\f] - ['"=<>`]])+)
        (?<ATTR_VAL_SINGLE_QUOTED> ' (?[ \p{Any} - [\x{00}'] -
                                        (\p{Control} - [ \t\n\r\f])])* ')
        (?<ATTR_VAL_DOUBLE_QUOTED> " (?[ \p{Any} - [\x{00}"] -
                                        (\p{Control} - [ \t\n\r\f])])* ")

        (?<ATTR_EMPTY>             (?&ATTR_NAME))
        (?<ATTR_UNQUOTED>          (?:(?&ATTR_NAME) (?&EQ)
                                      (?&ATTR_VAL_UNQUOTED) (?!/)))
        (?<ATTR_SINGLE_QUOTED>     (?:(?&ATTR_NAME) (?&EQ)
                                      (?&ATTR_VAL_SINGLE_QUOTED)))
        (?<ATTR_DOUBLE_QUOTED>     (?:(?&ATTR_NAME) (?&EQ)
                                      (?&ATTR_VAL_DOUBLE_QUOTED)))
        (?<ATTR>                   (?:(?&WS) (?: (?&ATTR_EMPTY)         |
                                                 (?&ATTR_UNQUOTED)      |
                                                 (?&ATTR_SINGLE_QUOTED) |
                                                 (?&ATTR_DOUBLE_QUOTED))))
        (?<ATTR_LIST>              (?&ATTR)*)
        (?<START_TAG>              <  (?&TAG_NAME) (?&ATTR_LIST) (?&OPT_WS) /?>)
        (?<END_TAG>                </ (?&TAG_NAME) (?&OPT_WS) >)
        (?<TAG>                    (?:(?&START_TAG) | (?&END_TAG)))
    )
    (?&TAG)
}x;
```

Below is my contributions to the `Task #1` of `Week #376`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-376/mohammad-anwar/perl/ch-1.pl)
***
```perl
sub same_color {
    my ($c1, $c2) = @_;

    my $sum1 = (ord(substr($c1, 0, 1)) - 97) + substr($c1, 1);
    my $sum2 = (ord(substr($c2, 0, 1)) - 97) + substr($c2, 1);

    return ($sum1 % 2) == ($sum2 % 2)?("true"):("false");
}
```

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-376/mohammad-anwar/raku/ch-1.raku)
***
```raku
sub same_color($c1, $c2) {
    my $sum1 = ($c1.substr(0, 1).ord - 97) + $c1.substr(1);
    my $sum2 = ($c2.substr(0, 1).ord - 97) + $c2.substr(1);

    return ($sum1 % 2) == ($sum2 % 2) ?? "true" !! "false";
}
```

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-376/mohammad-anwar/python/ch-1.py)
***
```python
def same_color(c1, c2):
    sum1 = (ord(c1[0]) - ord('a')) + int(c1[1:])
    sum2 = (ord(c2[0]) - ord('a')) + int(c2[1:])

    return "true" if (sum1 % 2) == (sum2 % 2) else "false"
```

Thank you `Team PWC`, once again.

`Happy Hacking!!`
***

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `372` &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `373` &nbsp;&nbsp;|&nbsp;&nbsp; 47 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
|&nbsp;&nbsp; `374` &nbsp;&nbsp;|&nbsp;&nbsp; 43 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `375` &nbsp;&nbsp;|&nbsp;&nbsp; 43 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `376` &nbsp;&nbsp;|&nbsp;&nbsp; 40 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
***

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `372` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 73 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|
|&nbsp;&nbsp; `373` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 65 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `374` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 50 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
|&nbsp;&nbsp; `375` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `376` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 45 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|
***

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (4424)
     2. Rust       (1169)
     3. C          (1035)
     4. Haskell    (911)
     5. Ruby       (911)
     6. Lua        (896)
     7. C++        (727)
     8. Go         (687)
     9. JavaScript (640)
    10. Java       (532)

### Blogs with Creative Title
***

#### 1. [Doubled Chessboard](https://raku-musings.com/doubled-chessboard.html) by Arne Sommer.
#### 2. [Doubled Words](https://dev.to/boblied/pwc-376-doubled-words-7g3) by Bob Lied.
#### 3. [Chess Solo](https://github.sommrey.de/the-bears-den/2026/06/05/ch-376.html) by Jorg Sommrey.
#### 4. [A 1-Bit Chessboard and Fancy Separators](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-376/challenge-376/matthias-muth#readme) by Matthias Muth.
#### 5. [You might think I’m crazy, but I don’t even care](https://packy.dardan.com/b/r4) by Packy Anderson.
#### 6. [Squares and pairs](http://ccgi.campbellsmiths.force9.co.uk/challenge/376) by Peter Campbell Smith.
#### 7. [Half a Chessboard](https://blog.firedrake.org/archive/2026/06/The_Weekly_Challenge_376__Half_a_Chessboard.html) by Roger Bell_West.
#### 8. [Double chessboard](https://dev.to/simongreennet/weekly-challenge-double-chessboard-5ce5) by Simon Green.
***

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***
#### 1. Commits: 49,960 (`+105`)
#### 2. Pull Requests: 14,216 (`+34`)
#### 3. Contributors: 279
#### 4. Fork: 352
#### 5. Stars: 214 (`+1`)
***

## SPONSOR {#SPONSOR}
***
With start of `Week #355`, we have a new sponsor `Marc Perry` until the end of year `2026`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance. You can find more informations [**here**](/sponsors).

## RECAP {#RECAP}
***
Quick recap of **[The Weekly Challenge - 376](/blog/recap-challenge-376)** by `Mohammad Sajid Anwar`.

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
Please check out the guest contributions for the [**Week #376**](/blog/guest-contribution/#376).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

## Task 1: Reverse Existence {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a string.

Write a script to find whether any substring of length 2 is also present in the reverse of the given string.

#### Example 1

    Input: $str = "abcba"
    Output: true

    Reverse of given string is "abcba".
    The substring "ab" in original string is also present in the reverse string too.

#### Example 2

    Input: $str = "racecar"
    Output: true

    The substring "ce" is present in both.

#### Example 3

    Input: $str = "abcd"
    Output: false

#### Example 4

    Input: $str = "banana"
    Output: true

    The substring "an" is present in both.

#### Example 5

    Input: $str = "hello"
    Output: true

    The substring "ll" is present in both.

## Task 2: Prefix Suffix {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given an array of strings.

Write a script to find if the two strings (str1, str2) in the given array such that str1 is prefix and suffix of str2. Return the total count of such pairs.

#### Example 1

    Input: @array = ("a", "aba", "ababa", "aa")
    Output: 4

    $array[0], $array[1]: "a" is a prefix and suffix of "aba"
    $array[0], $array[2]: "a" is a prefix and suffix of "ababa"
    $array[0], $array[3]: "a" is a prefix and suffix of "aa"
    $array[1], $array[2]: "aba" is a prefix and suffix of "ababa"

#### Example 2

    Input: @array = ("pa", "papa", "ma", "mama")
    Output: 2

    $array[0], $array[1]: "pa" is a prefix and suffix of "papa"
    $array[2], $array[3]: "ma" is a prefix and suffix of "mama"

#### Example 3

    Input: @array = ("abao", "ab")
    Output: 0

#### Example 4

    Input: @array = ("abab", "abab")
    Output: 1

    $array[0], $array[1]: "abab" is a prefix and suffix of "abab"

#### Example 5

    Input: @array = ("ab", "abab", "ababab")
    Output: 3

    $array[0], $array[1]: "ab" is a prefix and suffix of "abab"
    $array[0], $array[2]: "ab" is a prefix and suffix of "ababab"
    $array[1], $array[2]: "abab" is a prefix and suffix of "ababab"

#### Example 6

    Input: @array = ("abc", "def", "ghij")
    Output: 0

***
By submitting a response to the challenge you agree that your name or pseudonym, any photograph you supply and any other personal information contained in your submission may be published on this website and the associated mobile app. Last date to submit the solution `23:59 (UK Time) Sunday 14th June 2026`.
