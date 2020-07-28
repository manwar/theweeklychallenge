---
title: "Andrew Shitov Weekly Review: Challenge - 067"
date: 2020-07-28T00:00:00+00:00
description: "Andrew Shitov Weekly Review: Challenge - #067."
type: post
image: images/blog/p6-review-challenge-067.jpg
author: Andrew Shitov
tags: ["Raku"]
---
***
# Raku Solutions Weekly Review
***

## Getting in Touch

<a href="mailto:andy@shitov.ru"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Email me (Andrew) with any feedback about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

We'd greatly appreciate any feedback you'd like to give.

***

<br>

Welcome to the **Raku Review** for **Week 067** of **The Weekly Challenge!**. For a quick overview, go through the [**original tasks**](/blog/perl-weekly-challenge-067/) and [**recap**](/blog/recap-challenge-067/) of the weekly challenge.

<br>

The first task of the week was mostly solved by calling the `combinations` method on a range of integer numbers. It was quite educating to learn how this method actually works and learn that it only returns unique elements, so it is absolutely suitable for the task at hand, and it does all the required work for us.

There are a couple of solutions that first generate a bigger row of combinations and then use `grep` to filter the ones we need. These solutions immediately look different compared to those that use `combinations`, which only proves that Raku offers us more than we can sometimes imagine. I am sure you will enjoy looking at the code.

Please checkout the detailed examination of each and every **Raku** solutions of the [**Task 1, Week 67**](https://www.youtube.com/watch?v=zd2acTxoIPQ).

In the keypad task, the majority of the solutions include a mapping data structure, but there are different variations of it. Let me demonstrate just a few of them:

Lists in an array, where the digit is the index in the array:

```perl6
    my @keypad =
        ' ',
        < _ , @>,
        < a b c >,
        < d e f >,
        < g h i >,
        < j k l >,
        < m n o >,
        < p q r s >,
        < t u v >,
        < w x y z >;
```

The other approaches include hashes where the digits are indices. But it varies further. Here is an example, where the values are the strings you see on the keys.

```perl6
    my %h =
        2 => 'abc',
        3 => 'def',
        4 => 'ghi',
        5 => 'jkl',
        6 => 'mno',
        7 => 'pqrs',
        8 => 'tuv',
        9 => 'wxyz';
```

Or, for example, the values are lists of separate characters within the fancy `<` ... `>` quoting.

```perl6
    my %phone =
        1 => <_ , @>,
        2 => <a b c>,
        3 => <d e f>,
        4 => <g h i>,
        5 => <j k l>,
        6 => <m n o>,
        7 => <p q r s>,
        8 => <t u v>,
        9 => <w x y z>;
```

Or a more traditional code with quotes and square brackets:

```perl6
    my %phone_keys = (
        '1' => ['_', ',', '@'],
        '2' => ['a', 'b', 'c'],
        '3' => ['d', 'e', 'f'],
        '4' => ['g', 'h', 'i'],
        '5' => ['j', 'k', 'l'],
        '6' => ['m', 'n', 'o'],
        '7' => ['p', 'q', 'r', 's'],
        '8' => ['t', 'u', 'v'],
        '9' => ['w', 'x', 'y', 'z'],
        '*' => ['_'],
        '0' => [''],
        '#' => [''],
    );
```

And you really want to see another approach, where the list is partially generated using the `rotor` method. It makes a series of three-letter lists from a range `'a'..'o'`:

```perl6
    [|('a'..'o').rotor(3), <p q r s>, <t u v>, <w x y z>]
```

More on the interesting things found in the solutions of **Task 2, Week 67** are in this [**video**](https://www.youtube.com/watch?v=dHfwZsxbmcg).

<br>

***
## BLOGS
***

<br>

#### [Andrew Shitov](https://andrewshitov.com/2020/06/29/combinations-in-raku), [Arne Sommer](https://raku-musings.com/numbers-letters.html), [Colin Crain](https://colincrain.wordpress.com/2020/07/06/combos-convos-and-cellphones/), [Donald Hunter](https://donaldh.wtf/2020/06/combinations/), [Jaldhar H. Vyas](https://www.braincells.com/perl/2020/07/perl_weekly_challenge_week_67.html), [Javier Luque](https://perlchallenges.wordpress.com/2020/06/29/perl-weekly-challenge-067/), [Laurent Rosenfeld](http://blogs.perl.org/users/laurent_r/2020/07/perl-weekly-challenge-67-number-combinations-and-letter-phone.html), [Luca Ferrari](https://fluca1978.github.io/2020/06/29/PerlWeeklyChallenge67.html), [Mohammad S Anwar](https://perlweeklychallenge.org/blog/weekly-challenge-067/) and [Shahed Nooshmand](https://rafraichisso.ir/2020/07/02/pwc-67).

<br>

If you want to participate to **The Weekly Challenge**, please contact us at <perlweeklychallenge@yahoo.com>.
