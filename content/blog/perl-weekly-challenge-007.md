---
title: "Perl Weekly Challenge - 007"
date: 2019-05-06T00:00:00+00:00
description: "Perl Weekly Challenge - 007"
type: post
image: images/blog/pwc-base.svg
author: Mohammad S Anwar
tags: ["Perl5", "Perl6"]
---
**Perl Weekly Challenge** has been very innovative with so many unique solutions. Thanks to all the members for participating and blogging about it. Keep the momentum up. Good luck with this week challenge, I am sure you will find it fun and enjoyable.

***

### RECAP
Here is the recap of last week [challenge](/blog/recap-challenge-006).

***

### CHART
Please take a look at the [charts](/chart) showing interesting data.

I would like to thank everyone for your valuable suggestions. Please do share your experience with us. Good luck for the weekly challenge, enjoy.

***

### Challenge #1
> Print all the niven numbers from 0 to 50 inclusive, each on their own line. A niven number is a non-negative number that is divisible by the sum of its digits.

### Challenge #2

#### Word Ladder

> A word ladder is a sequence of words [w0, w1, ..., wn] such that each word wi in the sequence is obtained by changing a single character in the word wi-1. All words in the ladder must be valid English words.

Given two input words and a file that contains an ordered word list, implement a routine (e.g., find_shortest_ladder(word1, word2, wordlist)) that finds the shortest ladder between the two input words. For example, for the words cold and warm, the routine might return:

    ("cold", "cord", "core", "care", "card", "ward", "warm")

However, there's a shortest ladder: ("cold", "cord", "card", "ward", "warm").

#### Givens:

  1. All words in the list have the same length.

  2. All words contain only lowercase alphabetical characters.

  3. There are no duplicates in the word list.

  4. The input words aren't empty and aren't equal but they have the same length as any word in the word list.

#### Requirements:

  1. The routine must return a list of the words in the ladder if it exists. Otherwise, it returns an empty list.

  2. If any of the input words is the wrong length (i.e., its length is different to a random from the word list) or isn't in the word list, return an empty list.

***
### Challenge #3

Introduction of optional third question is delayed by one more week about providing Perl implementation of a given API.

***

Last date to submit the solution **6 pm (UK Time) Sunday 12th May 2019**.
