---
title: "Advent Calendar - December 13, 2025"
date: 2025-12-13T00:00:00+00:00
description: "Advent Calendar - December 13, 2025."
type: post
image: images/blog/2025-12-13.jpg
author: Simon Green
tags: ["Perl", "Python"]
---

## [**Advent Calendar 2025**](/blog/advent-calendar-2025)
### | &nbsp; [**Day 12**](/blog/advent-calendar-2025-12-12) &nbsp; | &nbsp; **Day 13** &nbsp; | &nbsp; [**Day 14**](/blog/advent-calendar-2025-12-14) &nbsp; |
***

The gift is presented by `Simon Green`. Today he is talking about his solutioni to [**The Weekly Challenge - 316**](/blog/perl-weekly-challenge-316). This is re-produced for `Advent Calendar 2025` from the original [**post**](https://dev.to/simongreennet/weekly-challenge-sub-circular-hno).

***

<br>

## Weekly Challenge: Sub circular

Each week `Mohammad S. Anwar` sends out [**The Weekly Challenge**](https://theweeklychallenge.org), a chance for all of us to come up with solutions to two weekly tasks. My solutions are written in `Python` first, and then converted to `Perl`. It's a great way for us all to practice some coding.

[**Challenge**](https://theweeklychallenge.org/blog/perl-weekly-challenge-316), [**My solutions**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-316/sgreen)

## Task 1: Circular

You are given a list of words.

Write a script to find out whether the last character of each word is the first character of the following word.

## My solution

Both of this week's challenges are relatively straight forward, so don't require much explanation. For this task, I have an iterator called idx that starts at 1 (the second word) to one less than the number of words (the last word).

For each value, I check if the first letter of this word is the same as the last letter of the previous word. If it isn't, I return `False`. If the loop is exhausted, I return `True`.

There is no need to check if the last letter of the last word is the same as the first letter of the first word.

<br>

```python
def circular(words: list) -> bool:
    for idx in range(1, len(words)):
        if words[idx][0] != words[idx-1][-1]:
            return False

    return True
```

<br>

The `Perl` solution also follows this logic, although is longer to get the first/last character of each word.

<br>

```perl
sub main (@words) {
    foreach my $idx (1 .. $#words) {
        if (substr($words[$idx], 0, 1) ne substr($words[$idx-1], -1, 1)) {
            say 'false';
            return;
        }
    }

    say 'true';
}
```

<br>

## Examples

<br>

```bash
$ ./ch-1.py perl loves scala
True

$ ./ch-1.py love the programming
False

$ ./ch-1.py java awk kotlin node.js
True
```

<br>

## Task 2: Subsequence

You are given two string. Write a script to find out if one string is a subsequence of another.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters.

## My solution

Some times is just easier to whip up a quick regular expression to solve a challenge and this is one of those tasks. For this task, I escape all the characters in the first string. In `Python` this is done with `map(re.escape, (l for l in str1))`, while `Perl` uses `map { quotemeta } split //, $str1`.

I then join these with the regular expression `.*`, which means zero or more of any character. I then use re.search to see if the first string is a subsequence of the second one.

<br>

```python
def subsequence(str1: str, str2: str) -> bool:
    r = '.*'.join(map(re.escape, (l for l in str1)))
    return bool(re.search(r, str2))
```

<br>

## Examples

<br>

```bash
$ ./ch-2.py uvw bcudvew
True

$ ./ch-2.py aec abcde
False

$ ./ch-2.py sip javascript
True
```

<br>

***

If you have any suggestion then please do share with us **<perlweeklychallenge@yahoo.com>**.

| &nbsp; [**Advent Calendar 2025**](/blog/advent-calendar-2025) &nbsp; |
