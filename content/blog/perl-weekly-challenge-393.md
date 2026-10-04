---
title: "The Weekly Challenge - 393"
date: 2026-09-28T00:00:00+00:00
description: "The Weekly Challenge - 393"
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
### &nbsp;&nbsp;9. [TASK #1: Pythagoras Multiplied](#TASK1)
### 10. [TASK #2: Prime Step](#TASK2)

## HEADLINES {#HEADLINES}
***
Welcome to the `Week #393` of `The Weekly Challenge`.

Thank you, `Ulrich Rieke`, for suggesting two fun tasks. You made it a lot easier for me.

I would also like to thank, `Roger Bell_West`, for reviewing the task. You have saved me from embarrassment so many times.

Below is my contributions to the `Task #1` of `Week #392`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-392/mohammad-anwar/perl/ch-1.pl)
***
```perl
sub convert_palindrome($str) {
    for my $len (reverse 1 .. length $str) {
        my $prefix = substr($str, 0, $len);
        return reverse(substr($str, $len)) . $str if $prefix eq reverse $prefix;
    }
}
```

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-392/mohammad-anwar/raku/ch-1.raku)
***
```raku
sub convert-palindrome(Str $str) {
    for (1 .. $str.chars).reverse -> $len {
        my $prefix = $str.substr(0, $len);
        return $str.substr($len).flip ~ $str if $prefix eq $prefix.flip;
    }
}
```

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-392/mohammad-anwar/python/ch-1.py)
***
```python
def convert_palindrome(s):
    for length in range(len(s), 0, -1):
        prefix = s[0:length]
        if prefix == prefix[::-1]:
            return s[length:][::-1] + s
```

Thank you `Team PWC`, once again.

`Happy Hacking!!`
***

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `388` &nbsp;&nbsp;|&nbsp;&nbsp; 39 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `389` &nbsp;&nbsp;|&nbsp;&nbsp; 41 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `390` &nbsp;&nbsp;|&nbsp;&nbsp; 37 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
|&nbsp;&nbsp; `391` &nbsp;&nbsp;|&nbsp;&nbsp; 41 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|
|&nbsp;&nbsp; `392` &nbsp;&nbsp;|&nbsp;&nbsp; 41 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 15 &nbsp;&nbsp;|
***

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `388` &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|&nbsp;&nbsp; 70 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|
|&nbsp;&nbsp; `389` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 70 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `390` &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|&nbsp;&nbsp; 28 &nbsp;&nbsp;|&nbsp;&nbsp; 10 &nbsp;&nbsp;|
|&nbsp;&nbsp; `391` &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|&nbsp;&nbsp; 51 &nbsp;&nbsp;|&nbsp;&nbsp; 11 &nbsp;&nbsp;|
|&nbsp;&nbsp; `392` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 47 &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|
***

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (4636)
     2. Rust       (1234)
     3. C          (1073)
     4. Haskell    (964)
     5. Ruby       (945)
     6. Lua        (929)
     7. C++        (755)
     8. Go         (732)
     9. JavaScript (654)
    10. Java       (532)

### Blogs with Creative Title
***

#### 1. [Convert Product](https://raku-musings.com/convert-product.html) by Arne Sommer.
#### 2. [Go hang a salami, I’m a lasagna hog!](https://packy.dardan.com/b/zw) by Packy Anderson.
#### 3. [Palindromes and products](http://ccgi.campbellsmiths.force9.co.uk/challenge/392) by Peter Campbell Smith.
#### 4. [Extruded Palindrome Product](https://blog.firedrake.org/archive/2026/09/The_Weekly_Challenge_392__Extruded_Palindrome_Product.html) by Roger Bell_West.
#### 5. [The palindromic length](https://dev.to/simongreennet/weekly-challenge-the-palindromic-length-299i) by Simon Green.

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***
#### 1. Commits: 51,469 (`+81`)
#### 2. Pull Requests: 14,750 (`+30`)
#### 3. Contributors: 281
#### 4. Fork: 352
#### 5. Stars: 220

## SPONSOR {#SPONSOR}
***
With start of `Week #355`, we have a new sponsor `Marc Perry` until the end of year `2026`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance. You can find more informations [**here**](/sponsors).

## RECAP {#RECAP}
***
Quick recap of **[The Weekly Challenge - 392](/blog/recap-challenge-392)** by `Mohammad Sajid Anwar`.

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
Please check out the guest contributions for the [**Week #392**](/blog/guest-contribution/#392).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

## Task 1: Pythagoras Multiplied {#TASK1}
##### **Submitted by:** `Ulrich Rieke`
***

You are given a positive integer n.

Find the number of all positive integer triplets (a, b, c) so that a^2 + b^2 = c^2 and a, b and c are integers <= n.

#### Example 1

    Input: $n = 20
    Output: 12

    (3,4,5),  (4,3,5),   (5,12,13),(6,8,10),
    (8,6,10), (8,15,17), (9,12,15),(12,5,13),
    (12,9,15),(12,16,20),(15,8,17),(16,12,20)

#### Example 2

    Input: $n = 7
    Output: 2

    (3,4,5),(4,3,5)

#### Example 3

    Input: $n = 1
    Output: 0

#### Example 4

    Input: $n = 15
    Output: 8

#### Example 5

    Input: $n = 30
    Output: 22

## Task 2: Prime Step {#TASK2}
##### **Submitted by:** `Ulrich Rieke`
***

You are given a string with English alphabetic characters only.

What is the absolute difference of the sum of the ASCII values of the characters in the string to the nearest prime number?

#### Example 1

    Input: $str = "hello"
    Output: 9

    The ordinal values of "hello" are [104,101,108,108,111], summing up to 532.
    The nearest prime number to 532 is 523, resulting in an absolute difference of 9.

#### Example 2

    Input: $str = "football"
    Output: 2

    Starting with the values [102,111,111,116,98,97,108,108] and the sum 841.
    We find 839 as the nearest prime number, so the difference is 2.

#### Example 3

    Input: $str = "a"
    Output: 0

#### Example 4

    Input: $str = "challenge"
    Output: 2

    The ordinal values of "challenge" are [99, 104, 97, 108, 108, 101, 110, 103, 101], which sum up to 931.
    The nearest prime number to 931 is 929, so the difference is 2.

#### Example 5

    Input: $str = "perl"
    Output: 2

    The ordinal values of "perl" are [112, 101, 114, 108], summing up to 435.
    Nearest prime is 433, so the difference is 2.

***
By submitting a response to the challenge you agree that your name or pseudonym, any photograph you supply and any other personal information contained in your submission may be published on this website and the associated mobile app. Last date to submit the solution `23:59 (UK Time) Sunday 4th October 2026`.
