---
title: "Perl Weekly Challenge - 058"
date: 2020-04-27T00:00:00+00:00
description: "Perl Weekly Challenge - 058"
type: post
image: images/blog/pwc-base.svg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

## HEADLINES

***

Last Friday was the first day of **Ramadan** in the **United Kingdom**. Because of the fasting during the day, I try to preserve my energy and use it when necessary. You will probably notice delay in acceptance of your contributions during this month. I may not be able to respond to your email as promptly as before. Please bear with me in this holy month.

I would like to take this opportunity to thank all the regulars who have been blogging about their solutions and all those new members who are actively blogging straight away. You are the star contributors. I would urge all members to read the blog by fellow members. It is always complete package. Please follow the **[RECAPS](/recaps)** if you are not sure where to look for blogs.

For the last two weeks, you have been dealing with **Binary Tree** related tasks. During this period, I was looking for a decent way to print **Binary Tree**. Many **Team PWC** members tried it and came up with unique way to print binary tree. Of all, I liked the one proposed by **Scimon Proctor** as solution to the task **[Path Sum](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-056/simon-proctor/raku/ch-2.p6)**. There is another interpretation by **Colin Crain** as solution to the task **[Invert Tree](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/colin-crain/perl/ch-1.pl)**. Please do check them out and let us know what you think.

Last but not the least, I woud like to thank each and every member for their support and encouragement.

## RECAP

***

Quick recap of the [**"Perl Weekly Challenge - 057"**](/blog/recap-challenge-057) by **Mohammad S Anwar**.

## PERL REVIEW

***

If you missed any past reviews then please checkout the [**collection**](/p5-reviews).

## RAKU REVIEW

***

Please checkout **Raku** solutions review of the **["Perl Weekly Challenge - 054"](/blog/p6-review-challenge-054)** by **Laurent Rosenfeld**.

If you missed any past reviews then please checkout the [**collection**](/p6-reviews).

## CHART

***

Please take a look at the [**charts**](/chart) showing interesting data.

I would like to thank every member of the team for their valuable suggestions. Please do share your experience with us.

## NEW MEMBERS

***

Please find out [**How to contribute?**](/blog/how-to-contribute), if you have any doubts.

Please give it a try to an excellent tool [**EZPWC**](https://github.com/saiftynet/EZPWC) created by respected member **Saif Ahmed** of **Team PWC**.

## GUESTS

***

**Ben Davies** shared solutions to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/ben-davies/idris/ch-1.idr) and [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/ben-davies/idris/ch-2.idr) in **Idris**.

**Leo Manfredi** shared solution to [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/manfredi/python/ch-2.py) in **Python**.

**Richard Park** shared solutions to [**Task #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/richard-park/apl/ch-1.aplf) and [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/richard-park/apl/ch-2.aplf) in **APL**.

**User Person** shared solution to [**Task #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-055/user-person/python/ch-2.py) in **Python**.

Please find out [**past solutions**](/blog/guest-contribution) by respected **guests**. Please do share your creative solutions in other languages.

## TASK #1 › Compare Version

#### Reviewed by Ryan Thompson

***

Compare two given version number strings **v1** and **v2** such that:

 * If **v1** > **v2** return 1
 * If **v1** < **v2** return -1
 * Otherwise, return 0

The version numbers are non-empty strings containing only digits, and the dot ("`.`") and underscore ("`_`") characters. ("`_`" denotes an alpha/development version, and has a lower precedence than a dot, "`.`"). Here are some examples:

```
   v1   v2    Result
------ ------ ------
  0.1 < 1.1     -1
  2.0 > 1.2      1
  1.2 < 1.2_5   -1
1.2.1 > 1.2_1    1
1.2.1 = 1.2.1    0
```

Version numbers may also contain leading zeros. You may handle these how you wish, as long as it's consistent.


## TASK #2 › Ordered Lineup

#### Reviewed by Ryan Thompson

***

Write a script to arrange people in a lineup according to how many taller people are in front of each person in line. You are given two arrays. **@H** is a list of unique heights, in any order. **@T** is a list of how many taller people are to be put in front of the corresponding person in **@H**. The output is the final ordering of people's heights, or an error if there is no solution.

Here is a small example:

 * `@H = (2, 6, 4, 5, 1, 3) # Heights`
 * `@T = (1, 0, 2, 0, 1, 2) # Number of taller people in front`

The ordering of both arrays lines up, so `H[i]` and `T[i]` refer to the same person. For example, there are 2 taller people in front of the person with height 4, and there is 1 person in front of the person with height 1.

Here is a diagram of the input arrays **@H** and **@T**:

<img src="/images/blog/pwc-058-1.svg" width=400 />

Finally, here is one possible solution that satisfies **@H** and **@T**:

<img src="/images/blog/pwc-058-2.svg" width=400 />

As per the last diagram, your script would then output the ordering `(5, 1, 2, 6, 3, 4)` in this case. (The leftmost element is the "front" of the array.)

***

Here's a 64-person example, with answer provided:

```perl
# Heights
@H = (27, 21, 37,  4, 19, 52, 23, 64,  1,  7, 51, 17, 24, 50,  3,  2,
      34, 40, 47, 20,  8, 56, 14, 16, 42, 38, 62, 53, 31, 41, 55, 59,
      48, 12, 32, 61,  9, 60, 46, 26, 58, 25, 15, 36, 11, 44, 63, 28,
       5, 54, 10, 49, 57, 30, 29, 22, 35, 39, 45, 43, 18,  6, 13, 33);

# Number taller people in front
@T = ( 6, 41,  1, 49, 38, 12,  1,  0, 58, 47,  4, 17, 26,  1, 61, 12,
      29,  3,  4, 11, 45,  1, 32,  5,  9, 19,  1,  4, 28, 12,  2,  2,
      13, 18, 19,  3,  4,  1, 10, 16,  4,  3, 29,  5, 49,  1,  1, 24,
       2,  1, 38,  7,  7, 14, 35, 25,  0,  5,  4, 19, 10, 13,  4, 12);

# Expected answer
@A = (35, 23,  5, 64, 37,  9, 13, 25, 16, 44, 50, 40,  2, 27, 36,  6,
      18, 54, 20, 39, 56, 45, 12, 47, 17, 33, 55, 30, 26, 51, 42, 53,
      49, 41, 32, 15, 22, 60, 14, 46, 24, 59, 10, 28, 62, 38, 58, 63,
       8, 48,  4,  7, 31, 19, 61, 43, 57, 11,  1, 34, 21, 52, 29,  3);
```

You're free to come up with your own inputs. Here is a [1000-person list](https://ry.ca/wp-content/uploads/2020/04/pwc_058_1000.txt), if you like!

***

*On a serious note, during this pandemic, please be kind to your local grocery store employees. They don't get paid enough for this!*

***

Last date to submit the solution **23:59 (UK Time) Sunday 3rd May 2020**.

***
