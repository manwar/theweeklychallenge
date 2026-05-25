---
title: "The Weekly Challenge - 375"
date: 2026-05-25T00:00:00+00:00
description: "The Weekly Challenge - 375"
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
### &nbsp;&nbsp;9. [TASK #1: Single Common Word](#TASK1)
### 10. [TASK #2: Find K-Beauty](#TASK2)

## HEADLINES {#HEADLINES}
***
Welcome to the `Week #375` of `The Weekly Challenge`.

Welcome aboard, [**Paul Barbu Gheorghe**](https://github.com/paulbarbu), and thanks for your first contributions in [**C++**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-374/paulbarbu/cpp).

Welcome back, `Andrea Piseri` after the break and thanks for your contributions in [**K**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-374/ap29600/k).

Apology for the trouble last week, the examples of one of the challenge had too many issues. I am happy that team didn't press the panic button. It was sorted by the evening, thanks to the quick fix provided by the `Team PWC` members.

Last week, I complained not getting enough sun in `England`. Now last couple of days, we got too much that it is impossible to step out during the day. It provides more time at home and do some bloggings. I hope it last few more days.

I noticed `Haskell` moved up one position, rank `#4`, pushing `Ruby` down to rank `#5`. Congratulation to all contributors of `Haskell`.





Below is my contributions to the `Task #1` of `Week #374`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-374/mohammad-anwar/perl/ch-1.pl)
***
```perl
sub count_vowel {
    my ($str) = @_;

    my @count;
    my $len = length($str);

    for my $start (0 .. $len - 1) {
        for my $length (5 .. $len - $start) {
            my $sub = substr($str, $start, $length);
            next unless $sub =~ /^[aeiou]+$/;
            next unless $sub =~ /a/ && $sub =~ /e/ && $sub =~ /i/ && $sub =~ /o/ && $sub =~ /u/;
            push @count, $sub;
        }
    }

    return \@count;
}
```

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-374/mohammad-anwar/raku/ch-1.raku)
***
```raku
sub count-vowel($str) {
    my @count;
    my $len = $str.chars;

    for 0 .. $len - 1 -> $start {
        for 5 .. $len - $start -> $length {
            my $sub = $str.substr($start, $length);
            next unless $sub ~~ /^<[aeiou]>+$/;
            next unless $sub ~~ /a/ && $sub ~~ /e/ && $sub ~~ /i/ && $sub ~~ /o/ && $sub ~~ /u/;
            @count.push($sub);
        }
    }

    return @count;
}
```

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-374/mohammad-anwar/python/ch-1.py)
***
```python
def count_vowel(s):
    count  = []
    length = len(s)

    for start in range(length):
        for substr_length in range(5, length - start + 1):
            sub = s[start:start + substr_length]
            if not re.match(r'^[aeiou]+$', sub):
                continue
            if not ('a' in sub and 'e' in sub and 'i' in sub and 'o' in sub and 'u' in sub):
                continue
            count.append(sub)

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
|&nbsp;&nbsp; `370` &nbsp;&nbsp;|&nbsp;&nbsp; 52 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `371` &nbsp;&nbsp;|&nbsp;&nbsp; 46 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
|&nbsp;&nbsp; `372` &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `373` &nbsp;&nbsp;|&nbsp;&nbsp; 47 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|
|&nbsp;&nbsp; `374` &nbsp;&nbsp;|&nbsp;&nbsp; 43 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
***

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `370` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 50 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|
|&nbsp;&nbsp; `371` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 68 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `372` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 73 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|
|&nbsp;&nbsp; `373` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 65 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `374` &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|&nbsp;&nbsp; 48 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
***

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (4401)
     2. Rust       (1159)
     3. C          (1030)
     4. Haskell    (905)
     5. Ruby       (905)
     6. Lua        (894)
     7. C++        (722)
     8. Go         (686)
     9. JavaScript (639)
    10. Java       (532)

### Blogs with Creative Title
***

#### 1. [Largest Vowel](https://raku-musings.com/largest-vowel.html) by Arne Sommer.
#### 2. [All Vowels Are Equal](https://github.sommrey.de/the-bears-den/2026/05/22/ch-374.html) by Jorg Sommrey.
#### 3. [Hey, won’t you play…](https://packy.dardan.com/b/pk) by Packy Anderson.
#### 4. [Lots of repetition](http://ccgi.campbellsmiths.force9.co.uk/challenge/374) by Peter Campbell Smith.
#### 5. [The Largest Count](https://blog.firedrake.org/archive/2026/05/The_Weekly_Challenge_374__The_Largest_Count.html) by Roger Bell_West.
#### 6. [Vowels and numbers](https://dev.to/simongreennet/weekly-challenge-vowels-and-numbers-dg8) by Simon Green.
***

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***
#### 1. Commits: 49,750 (`+99`)
#### 2. Pull Requests: 14,146 (`+34`)
#### 3. Contributors: 279 (`+1`)
#### 4. Fork: 352 (`+2`)
#### 5. Stars: 213 (`+1`)
***

## SPONSOR {#SPONSOR}
***
With start of `Week #355`, we have a new sponsor `Marc Perry` until the end of year `2026`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance. You can find more informations [**here**](/sponsors).

## RECAP {#RECAP}
***
Quick recap of **[The Weekly Challenge - 374](/blog/recap-challenge-374)** by `Mohammad Sajid Anwar`.

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

[**Paul Barbu Gheorghe**](https://github.com/paulbarbu), an experienced `C++` hacker joined `Team PWC`.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

## GUESTS {#GUESTS}
***
Please check out the guest contributions for the [**Week #374**](/blog/guest-contribution/#374).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

## Task 1: Single Common Word {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given two array of strings.

Write a script to return the number of strings that appear exactly once in each of the two given arrays. String comparison is case sensitive.

#### Example 1

    Input: @array1 = ("apple", "banana", "cherry")
           @array2 = ("banana", "cherry", "date")
    Output: 2

#### Example 2

    Input: @array1 = ("a", "ab", "abc")
           @array2 = ("a", "a", "ab", "abc")
    Output: 2

    "a" appears once in @array1 but appears twice in @array2, therefore, not counted.

#### Example 3

    Input: @array1 = ("orange", "lemon")
           @array2 = ("grape", "melon")
    Output: 0

#### Example 4

    Input: @array1 = ("test", "test", "demo")
           @array2 = ("test", "demo", "demo")
    Output: 0

#### Example 5

    Input: @array1 = ("Hello", "world")
           @array2 = ("hello", "world")
    Output: 1

    String comparison is case sensitive.

## Task 2: Find K-Beauty {#TASK2}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a number and a digit (k).

Write a script to find the K-Beauty of the given number. The K-Beauty of an integer number is defined as the number of substrings of given number when it is read as a string has length of 'k' and is a divisor of given number.

#### Example 1

    Input: $num = 240, $k = 2
    Output: 2

    Substring with length 2:
    24: 240 is divisible by 24
    40: 240 is divisible by 40

#### Example 2

    Input: $num = 1020, $k = 2
    Output: 3

    Substring with length 2:
    10: 240 is divisible by 10
    02: 240 is divisible by 2
    20: 240 is divisible by 20

#### Example 3

    Input: $num = 444, $k = 2
    Output: 0

    Substring with length 2:
    First "44": 444 is not divisible by 44
    Second "44": 444 is not divisible by 44

#### Example 4

    Input: $num = 17, $k = 2
    Output: 1

    Substring with length 2:
    17: 17 is divisible by 17

#### Example 5

    Input: $num = 123, $k = 1
    Output: 2

    Substring with length 1:
    1: 123 is divisible by 1
    2: 123 is not divisible by 2
    3: 123 is divisible by 3

***
By submitting a response to the challenge you agree that your name or pseudonym, any photograph you supply and any other personal information contained in your submission may be published on this website and the associated mobile app. Last date to submit the solution `23:59 (UK Time) Sunday 31st May 2026`.
