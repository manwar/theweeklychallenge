---
title: "The Weekly Challenge - 368"
date: 2026-04-06T00:00:00+00:00
description: "The Weekly Challenge - 368"
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
### &nbsp;&nbsp;9. [TASK #1: Make it Bigger](#TASK1)
### 10. [TASK #2: Big and Little Omega](#TASK2)

## HEADLINES {#HEADLINES}
***
Welcome to the `Week #368` of `The Weekly Challenge`.

Welcome aboard, [Jorge Morales](https://github.com/MrBocch)! Thank you for your first contribution in [**Ruby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-367/mrbocch/ruby/ch-1.rb).

Today is the first `Monday` of the month and, as per traditions, it is time to declare the next champion of the weekly challenge. With great pride, I announce, `Lubos Kolouch`,  as the `Champion of the Month (March)`. Lubos was last declared champion in September 2019. He is currently ranked `#9` with `750` contributions in `Perl`, `55` contributions in `Raku`. and `52` blog posts. As of today, he has also contributed in `Bash (6)`, `C++ (1)`, `Go (5)`, `Java (40)`, `JavaScript (1)`, `Kotlin (2)`, `PHP (9)`, `Python (722)`, `Ruby (1)`, and `VBA (1)`.

I am very impressed by the steady flow of guest language contributions; over the last four weeks, we saw `74`, `73`, `75` and `73` submissions respectively. Interestingly, while guest contributions remain stable. regular contributions tend to fluctuate. Does this suggest that guest language offers easier solutions than `Perl` and `Raku`? Either way, I am certainly not complaining!

Finally, a huge thank you to all team members who helped test the app. The mobile app has been officially approved and published to `Google Play Store`. Please continue to share your suggestions and ideas so I can keep improving it. I have added a `QR Code` for the app on the website. I used the following script to generate the `QR Code`, just in case you are interested. Please share the app with your friends and colleagues!

```perl
#!/usr/bin/env perl

use v5.38;
use Imager::QRCode;

my $url = 'https://play.google.com/store/apps/details?id=org.theweeklychallenge.app';

my $qrcode = Imager::QRCode->new(
    size          => 2,    # Size of each 'module' (pixel block)
    margin        => 2,    # White border thickness
    version       => 0,    # 0 = auto-select (avoids overflow errors)
    level         => 'L',  # Error correction level (L, M, Q, H)
    casesensitive => 1,
);

my $img = $qrcode->plot($url);

if ($img->write(file => 'qrcode.png')) {
    say "Success! 'qrcode.png' has been generated and is ready to scan.";
} else {
    die "Failed to save image: " . $img->errstr;
}
```

***

<br>

Below is my contributions to the `Task #1` of `Week #367`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-367/mohammad-anwar/perl/ch-1.pl)
***
```perl
sub max_odd_binary {
    my $str = shift;
    my $c1  = $str =~ tr/1//;
    my $c0  = $str =~ tr/0//;

    return "1" x ($c1 - 1) . "0" x $c0 . "1";
}
```

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-367/mohammad-anwar/raku/ch-1.raku)
***
```raku
sub max-odd-binary($str) {
    my $c1 = $str.comb('1').elems;
    my $c0 = $str.comb('0').elems;

    return "1" x ($c1 - 1) ~ "0" x $c0 ~ "1";
}
```

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-367/mohammad-anwar/python/ch-1.py)
***
```python
def max_odd_binary(s: str) -> str:
    c1 = s.count('1')
    c0 = s.count('0')

    return '1' * (c1 - 1) + '0' * c0 + '1'
```

Thank you `Team PWC`, once again.

`Happy Hacking!!`
***

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `363` &nbsp;&nbsp;|&nbsp;&nbsp; 45 &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|
|&nbsp;&nbsp; `364` &nbsp;&nbsp;|&nbsp;&nbsp; 55 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|
|&nbsp;&nbsp; `365` &nbsp;&nbsp;|&nbsp;&nbsp; 53 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|&nbsp;&nbsp; 27 &nbsp;&nbsp;|
|&nbsp;&nbsp; `366` &nbsp;&nbsp;|&nbsp;&nbsp; 52 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|
|&nbsp;&nbsp; `367` &nbsp;&nbsp;|&nbsp;&nbsp; 53 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|
***

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `363` &nbsp;&nbsp;|&nbsp;&nbsp; 13 &nbsp;&nbsp;|&nbsp;&nbsp; 39 &nbsp;&nbsp;|&nbsp;&nbsp; 12 &nbsp;&nbsp;|
|&nbsp;&nbsp; `364` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 73 &nbsp;&nbsp;|&nbsp;&nbsp; 23 &nbsp;&nbsp;|
|&nbsp;&nbsp; `365` &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 75 &nbsp;&nbsp;|&nbsp;&nbsp; 28 &nbsp;&nbsp;|
|&nbsp;&nbsp; `366` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 73 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|
|&nbsp;&nbsp; `367` &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 74 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|
***

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (4298)
     2. Rust       (1131)
     3. C          (988)
     3. Ruby       (885)
     5. Haskell    (879)
     6. Lua        (868)
     7. C++        (706)
     8. Go         (670)
     9. JavaScript (631)
    10. Java       (530)

### Blogs with Creative Title
***

#### 1. [Max Conflict](https://raku-musings.com/max-conflict.html) by Arne Sommer.
#### 2. [Overlapping Oddities](https://dev.to/boblied/pwc-367-oddity-ln3) by Bob Lied.
#### 3. [Odd Events](https://github.sommrey.de/the-bears-den/2026/04/02/ch-367.html) by Jorg Sommrey.
#### 4. [overlapping intervals](https://fluca1978.github.io/2026/04/01/PerlWeeklyChallenge367.html) by Luca Ferrari.
#### 5. [Odd Conflicts](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-367/challenge-367/matthias-muth#readme) by Matthias Muth.
#### 6. [Conflicting Every Odd](https://packy.dardan.com/b/m_) by Packy Anderson.
#### 7. [Bits of conflicts](http://ccgi.campbellsmiths.force9.co.uk/challenge/367) by Peter Campbell Smith.
#### 8. [Binary Conflict](https://blog.firedrake.org/archive/2026/04/The_Weekly_Challenge_367__Binary_Conflict.html) by Roger Bell_West.
#### 9. [Maximum conflict](https://dev.to/simongreennet/weekly-challenge-maximum-conflict-5c4n) by Simon Green.
***

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***
#### 1. Commits: 48,846 (`+152`)
#### 2. Pull Requests: 13,874 (`+42`)
#### 3. Contributors: 277 (`+1`)
#### 4. Fork: 347
#### 5. Stars: 212
***

## SPONSOR {#SPONSOR}
***
With start of `Week #355`, we have a new sponsor `Marc Perry` until the end of year `2026`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance. You can find more informations [**here**](/sponsors).

## RECAP {#RECAP}
***
Quick recap of **[The Weekly Challenge - 367](/blog/recap-challenge-367)** by `Mohammad Sajid Anwar`.

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
[Jorge Morales](https://github.com/MrBocch), an expert `Ruby` hacker joined `Team PWC`.

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please try the excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member `Saif Ahmed` of **Team PWC**.

## GUESTS {#GUESTS}
***
Please check out the guest contributions for the [**Week #367**](/blog/guest-contribution/#367).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

## Task 1: Make it Bigger {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a given a string number and a character digit.

Write a script to remove exactly one occurrence of the given character digit from the given string number, resulting the decimal form is maximised.

#### Example 1

    Input: $str = "15456", $char = "5"
    Output: "1546"

    Removing the second "5" is better because the digit following it (6) is
    greater than 5. In the first case, 5 was followed by 4 (a decrease),
    which makes the resulting number smaller.

#### Example 2

    Input: $str = "7332", $char = "3"
    Output: "732"

#### Example 3

    Input: $str = "2231", $char = "2"
    Output: "231"

    Removing either "2" results in the same string here. By removing a "2",
    we allow the "3" to move up into a higher decimal place.

#### Example 4

    Input: $str = "543251", $char = "5"
    Output: "54321"

    If we remove the first "5", the number starts with 4. If we remove the
    second "5", the number still starts with 5. Keeping the largest possible
    digit in the highest place value is almost always the priority.

#### Example 5

    Input: $str = "1921", $char = "1"
    Output: "921"

## Task 2: Big and Little Omega {#TASK2}
##### **Submitted by:** [Roger Bell_West](https://codeberg.org/Firedrake/)
***

You are given a positive integer `$number` and a mode flag `$mode`. If the mode flag is zero, calculate little omega (the count of all distinct prime factors of that number). If it is one, calculate big omega (the count of all prime factors including duplicates).

#### Example 1

    Input: $number = 100061
           $mode = 0
    Output: 3

Prime factors are 13, 43, 179. Count is 3.

#### Example 2

    Input: $number = 971088
           $mode = 0
    Output: 3

Prime factors are 2, 2, 2, 2, 3, 20231. Count of distinct numbers is 3.

#### Example 3

    Input: $number = 63640
           $mode = 1
    Output: 6

Prime factors are 2, 2, 2, 5, 37, 43. Count including duplicates is 6.

#### Example 4

    Input: $number = 988841
           $mode = 1
    Output: 2

#### Example 5

    Input: $number = 211529
           $mode = 0
    Output: 2

***
By submitting a response to the challenge you agree that your name or pseudonym, any photograph you supply and any other personal information contained in your submission may be published on this website and the associated mobile app. Last date to submit the solution `23:59 (UK Time) Sunday 12th April 2026`.
