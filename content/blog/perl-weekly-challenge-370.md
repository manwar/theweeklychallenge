---
title: "The Weekly Challenge - 370"
date: 2026-04-20T00:00:00+00:00
description: "The Weekly Challenge - 370"
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
### &nbsp;&nbsp;9. [TASK #1: Popular Word](#TASK1)
### 10. [TASK #2: Scramble String](#TASK2)

## HEADLINES {#HEADLINES}
***
Welcome to the `Week #370` of `The Weekly Challenge`.

Once again, `Abigail` provided the most guest contributions of the week followed closely by `Roger Bell_West`. I highly recommend reading Abigail's blog posts; you don't want to miss the "magic" shared in the solutions for [**Valid Tag**](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-369-1.html) and [**Group Division**](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-369-2.html).

`Week #368` deserves a special mention, as regular and guest contributions were nearly neck-and-neck. I don't recall them ever being quite this close: we had `83` regular contributions compared to `80` from our guest. While I always want to see guest contributions to grow, I hope our regular contributions keep the lead.

`Week #369`, was even better for regular contributions. We reached `97` contributions, coming very close our target. Guest contributors were not far behind either; in fact, it was the best week of `2026` for guest contributions with `86` contributions.

Back in `2022`, I decided to give away T-shirts to all our champions to celebrate the completion of `1000 days`. At the time, I didn't realise how much work it would take fulfill that promise. I initially struggled with the T-shirt design, as I had zero experience in that area. I owe a huge thanks to `Lance Wicks`, for his help there. Once the design was finalised, the next challenge was finding a local printing house. High street shops proved to be too expensive, but after weeks of searching online, I finally found a vendor within our budget.

The T-shirts were delivered in `2022`, and I am embarrassed to admit they have been with me ever since. Life has had many ups and downs since then. Every time, my wife saw the box of T-shirts she would ask, "When are you going to post this?" My only answer was "soon". I can hardly believe how long that "soon" lasted.

Now, in `2026`, I am happy to share that the T-shirts are finally packed and labelled. However, before I send them, I need to double-check with the champions who shared their postal addresses in `2022`. If your address has changed since then, please send me your updated details. I will wait one week before handing everything over to the postal service. If I don't hear from you within a week, I will ship to the original address on the file. Please help me ensure these reach the correct destination. Thank you for your patience and sorry for the long delay.

For the record, I personally presented T-shirts to `Saif Ahmed` and `Will Braswell` at the `Perl Conference in Toronto` a few years ago. I also handed one to `Arne Sommer` last year at the `London Perl Workshop`. Technically `3 out 39` have been delivered - the remaining `36` will definitely be sent next week, promise.

Below is my contributions to the `Task #1` of `Week #369`.

### Perl: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-369/mohammad-anwar/perl/ch-1.pl)
***
```perl
sub valid_tag {
    my ($caption) = @_;

    my @chunks = split ' ', $caption;
    my @words  = grep { length } map { s/[^a-zA-Z]//gr } @chunks;

    return "" unless @words;

    my $tag = "#" . lc(shift @words) . join("", map { ucfirst lc } @words);
    return substr($tag, 0, 100);
}
```

### Raku: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-369/mohammad-anwar/raku/ch-1.raku)
***
```raku
sub valid-tag($caption) {
    my @words = $caption.words.map({ .subst(/<-[a..zA..Z]>/, '', :g) }).grep(*.chars);

    return "" unless @words;

    my $tag = "#" ~ @words.shift.lc ~ @words.map({ .lc.tc }).join('');
    return $tag.substr(0, 100);
}
```

### Python: [source code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-369/mohammad-anwar/python/ch-1.py)
***
```python
def valid_tag(caption):
    chunks = caption.split()

    words = [re.sub(r'[^a-zA-Z]', '', word) for word in chunks]
    words = [word for word in words if word]

    if not words:
        return ""

    first_word = words[0].lower()
    other_words = [w.lower().capitalize() for w in words[1:]]

    tag = "#" + first_word + "".join(other_words)

    return tag[:100]
```

Thank you `Team PWC`, once again.

`Happy Hacking!!`
***

<br>

Last `5 weeks` mainstream contribution stats. Thank you `Team PWC`  for your support and encouragements.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Perl` &nbsp;&nbsp;|&nbsp;&nbsp; `Raku` &nbsp;&nbsp; |&nbsp;&nbsp; `Blog` &nbsp;&nbsp; |
|&nbsp;&nbsp; `365` &nbsp;&nbsp;|&nbsp;&nbsp; 53 &nbsp;&nbsp;|&nbsp;&nbsp; 22 &nbsp;&nbsp;|&nbsp;&nbsp; 27 &nbsp;&nbsp;|
|&nbsp;&nbsp; `366` &nbsp;&nbsp;|&nbsp;&nbsp; 52 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|
|&nbsp;&nbsp; `367` &nbsp;&nbsp;|&nbsp;&nbsp; 53 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|&nbsp;&nbsp; 20 &nbsp;&nbsp;|
|&nbsp;&nbsp; `368` &nbsp;&nbsp;|&nbsp;&nbsp; 47 &nbsp;&nbsp;|&nbsp;&nbsp; 19 &nbsp;&nbsp;|&nbsp;&nbsp; 17 &nbsp;&nbsp;|
|&nbsp;&nbsp; `369` &nbsp;&nbsp;|&nbsp;&nbsp; 49 &nbsp;&nbsp;|&nbsp;&nbsp; 21 &nbsp;&nbsp;|&nbsp;&nbsp; 27 &nbsp;&nbsp;|
***

<br>

Last `5 weeks` guest contribution stats. Thank you each and every guest contributors for your time and efforts.

| | | | |
| :---: | :---: | :---: | :---: |
|&nbsp;&nbsp;`Week`&nbsp;&nbsp;|&nbsp;&nbsp; `Guests` &nbsp;&nbsp;|&nbsp;&nbsp; `Contributions` &nbsp;&nbsp; |&nbsp;&nbsp; `Languages` &nbsp;&nbsp; |
|&nbsp;&nbsp; `365` &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 75 &nbsp;&nbsp;|&nbsp;&nbsp; 28 &nbsp;&nbsp;|
|&nbsp;&nbsp; `366` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 73 &nbsp;&nbsp;|&nbsp;&nbsp; 24 &nbsp;&nbsp;|
|&nbsp;&nbsp; `367` &nbsp;&nbsp;|&nbsp;&nbsp; 18 &nbsp;&nbsp;|&nbsp;&nbsp; 76 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|
|&nbsp;&nbsp; `368` &nbsp;&nbsp;|&nbsp;&nbsp; 14 &nbsp;&nbsp;|&nbsp;&nbsp; 80 &nbsp;&nbsp;|&nbsp;&nbsp; 25 &nbsp;&nbsp;|
|&nbsp;&nbsp; `369` &nbsp;&nbsp;|&nbsp;&nbsp; 16 &nbsp;&nbsp;|&nbsp;&nbsp; 86 &nbsp;&nbsp;|&nbsp;&nbsp; 26 &nbsp;&nbsp;|
***

### TOP 10 Guest Languages
***

Do you see your favourite language in the `Top #10`? If not then why not contribute regularly and make it to the top.

     1. Python     (4334)
     2. Rust       (1139)
     3. C          (1012)
     3. Ruby       (893)
     5. Haskell    (886)
     6. Lua        (880)
     7. C++        (710)
     8. Go         (678)
     9. JavaScript (635)
    10. Java       (532)

### Blogs with Creative Title
***

#### 1. [Tag Division](https://raku-musings.com/tag-division.html) by Arne Sommer.
#### 2. [Divided Tags](https://github.sommrey.de/the-bears-den/2026/04/17/ch-369.html) by Jorg Sommrey.
#### 3. [string indexes](https://fluca1978.github.io/2026/04/13/PerlWeeklyChallenge369.html) by Luca Ferrari.
#### 4. [Good Tags and Good Chunks](https://github.com/MatthiasMuth/perlweeklychallenge-club/tree/muthm-369/challenge-369/matthias-muth#readme) by Matthias Muth.
#### 5. [Strings Will Tear Us Apart](https://packy.dardan.com/b/nR) by Packy Anderson.
#### 6. [Fun with strings](http://ccgi.campbellsmiths.force9.co.uk/challenge/369) by Peter Campbell Smith.
#### 7. [Divided Validity](https://blog.firedrake.org/archive/2026/04/The_Weekly_Challenge_369__Divided_Validity.html) by Roger Bell_West.
#### 8. [Group Tag](https://dev.to/simongreennet/weekly-challenge-group-tag-k56) by Simon Green.
***

### [GitHub](https://github.com/manwar/perlweeklychallenge-club) Repository Stats
***
#### 1. Commits: 49,143 (`+152`)
#### 2. Pull Requests: 13,965 (`+48`)
#### 3. Contributors: 277
#### 4. Fork: 346
#### 5. Stars: 210
***

## SPONSOR {#SPONSOR}
***
With start of `Week #355`, we have a new sponsor `Marc Perry` until the end of year `2026`. Having said we are looking for more sponsors so that we can go back to weekly winner. If anyone interested please get in touch with us at `perlweeklychallenge@yahoo.com`. Thanks for your support in advance. You can find more informations [**here**](/sponsors).

## RECAP {#RECAP}
***
Quick recap of **[The Weekly Challenge - 369](/blog/recap-challenge-369)** by `Mohammad Sajid Anwar`.

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
Please check out the guest contributions for the [**Week #369**](/blog/guest-contribution/#369).

Please find [**past solutions**](/blog/guest-contribution) by respected **guests**. Please share your creative solutions in other languages.

## Task 1: Popular Word {#TASK1}
##### **Submitted by:** [Mohammad Sajid Anwar](https://manwar.org)
***

You are given a string paragraph and an array of the banned words.

Write a script to return the most popular word that is not banned. It is guaranteed there is at least one word that is not banned and the answer is unique. The words in paragraph are case-insensitive and the answer should be in lowercase. The words can not contain punctuation symbols.

#### Example 1

    Input: $paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
           @banned = ("hit")
    Output: "ball"

    After removing punctuation and converting to lowercase, the word "hit" appears 3 times, and "ball" appears 2 times.
    Since "hit" is on the banned list, we ignore it.

#### Example 2

    Input: $paragraph = "Apple? apple! Apple, pear, orange, pear, apple, orange."
           @banned = ("apple", "pear")
    Output: "orange"

    "apple"  appears 4 times.
    "pear"   appears 2 times.
    "orange" appears 2 times.

    "apple" and "pear" are both banned.
    Even though "orange" has the same frequency as "pear", it is the only non-banned word with the highest frequency.

#### Example 3

    Input: $paragraph = "A. a, a! A. B. b. b."
           @banned = ("b")
    Output: "a"

    "a" appears 4 times.
    "b" appears 3 times.

    The input has mixed casing and heavy punctuation.
    The normalised, "a" is the clear winner, since "b" is banned, "a" is the only choice.

#### Example 4

    Input: $paragraph = "Ball.ball,ball:apple!apple.banana"
           @banned = ("ball")
    Output: "apple"

    Here the punctuation acts as a delimiter.
    "ball"   appears 3 times.
    "apple"  appears 2 times.
    "banana" appears 1 time.

#### Example 5

    Input: $paragraph = "The dog chased the cat, but the dog was faster than the cat."
           @banned = ("the", "dog")
    Output: "cat"

    "the" appears 4 times.
    "dog" appears 2 times.
    "cat" appears 2 times.

    "chased", "but", "was", "faster", "than" appear 1 time each.
    "the" is the most frequent but is banned.
    "dog" is the next most frequent but is also banned.
    The next most frequent non-banned word is "cat".

## Task 2: Scramble String {#TASK2}
##### **Submitted by:** [Roger Bell_West](https://codeberg.org/Firedrake/)
***

You are given two strings A and B of the same length.

Write a script to return true if string B is a scramble of string A otherwise return false.

String B is a scramble of string A if A can be transformed into B by a single (recursive) scramble operation.

A scramble operation is:

    - If the string consists of only one character, return the string.
    - Divide the string X into two non-empty parts.
    - Optionally, exchange the order of those parts.
    - Optionally, scramble each of those parts.
    - Concatenate the scrambled parts to return a single string.

#### Example 1

    Input: $str1 = "abc", $str2 = "acb"
    Output: true

    "abc"
    split: ["a", "bc"]
    split: ["a", ["b", "c"]]
    swap: ["a", ["c", "b"]]
    concatenate: "acb"

#### Example 2

    Input: $str1 = "abcd", $str2 = "cdba"
    Output: true

    "abcd"
    split: ["ab", "cd"]
    swap: ["cd", "ab"]
    split: ["cd", ["a", "b"]]
    swap: ["cd", ["b", "a"]]
    concatenate: "cdba"

#### Example 3

    Input: $str1 = "hello", $str2 = "hiiii"
    Output: false

    A fundamental rule of scrambled strings is that they must be anagrams.

#### Example 4

    Input: $str1 = "ateer", $str2 = "eater"
    Output: true

    "ateer"
    split: ["ate", "er"]
    split: [["at", "e"], "er"]
    swap: [["e", "at"], "er"]
    concatenate: "eater"

#### Example 5

    Input: $str1 = "abcd", $str2 = "bdac"
    Output: false

***
By submitting a response to the challenge you agree that your name or pseudonym, any photograph you supply and any other personal information contained in your submission may be published on this website and the associated mobile app. Last date to submit the solution `23:59 (UK Time) Sunday 26th April 2026`.
