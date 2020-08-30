---
title: "Andrew Shitov Weekly Review: Challenge - 074"
date: 2020-08-30T00:00:00+00:00
description: "Andrew Shitov Weekly Review: Challenge - #074."
type: post
image: images/blog/p6-review-challenge-074.jpg
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

Welcome to the **Raku Review** for **Week 074** of **The Weekly Challenge!**. For a quick overview, go through the [**original tasks**](/blog/perl-weekly-challenge-074/) and [**recap**](/blog/recap-challenge-074/) of the weekly challenge.

<br>

## Task 1. Majority Element

The first task this week was to find the majority element in the array of integers. The majority element is the item that occupies more than half of positions in the array. It is worth noting that while it is not explicitly said in the task, you cannot have more than one such element. Indeed, if more than the half seats are occupied, there is simply not enough space for any other majority one. But it may happen that there is no such item, in which case the program must print `-1`.

## Bags (not bugs)

In this task, the most useful tool of Raku is the `Bag` datatype. If you convert an array to a bag, you immediately get its elements counted. Here is an example that you can reproduce in Rakudo’s REPL to see what happens:

    > my @a = 3, 4, 5, 3, 3, 5;
    [3 4 5 3 3 5]
    > @a.Bag;
    Bag(3(3), 4, 5(2))

We see that in the source array, the value `3` appears three times, `5` happens twice, and `4` occurs only once. This principle is the main engine in many submitted solutions.

## Outside of the bags

So, the simplest way to count the characters is to use a bag:

    @a.Bag

In Raku, you can also use the `classify` method to make the [classification](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/jaldhar-h-vyas/raku/ch-1.p6) of the elements, which is letter counting in our case.

    my %count = @A.classify({ $_; });

An example with `map` seems to be [an interesting one](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/arne-sommer/raku/ch-1.raku) too:

    @A.map({ %count{$_}++ });

There are also other ways to do that via more traditional (_read as Perlish_) approaches.

    my %counting;
    %counting{ $_ }++ for @array;

## Floor

Another thing probably worth noting is that there is no need to compute the `floor` of the half-length. When we compare the number of occurrences of a character with `size_of_list/2`, we always compare an integer with either another integer or with an integer plus `0.5`. If you use `<` for comparison, there is no difference between comparing, say, `4` with `5` or with `5.5`. Also, we can use integer division and type `@a.elems div 2` instead of `@a.elems / 2`.

Nevertheless, there is a very interesting approach [demonstrated by Colin Crane](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/colin-crain/raku/ch-1.raku) to modify the grammar and introduce a mathematical notation for taking the floor:

    sub circumfix:<⎣ ⎦>( Numeric $n ) {
        $n.floor ;
    }

Having this user-defined circumfix operator, you can use its parts to surround the value that you need to round downwards:

    ⎣@A.elems/2⎦

### Video review

The full review of the solutions to the Task 1 is available on YouTube:

<iframe width="560" height="315" src="https://www.youtube.com/embed/G4_JJHqCS2s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The timestamps for quick access to the review of each solution.

* [01:20](https://www.youtube.com/watch?v=G4_JJHqCS2s&t=80s) - Andrew Shitov
* [03:53](https://www.youtube.com/watch?v=G4_JJHqCS2s&t=233s) - Arne Sommer
* [05:35](https://www.youtube.com/watch?v=G4_JJHqCS2s&t=335s) - Jan Krnavek
* [08:26](https://www.youtube.com/watch?v=G4_JJHqCS2s&t=506s) - Jason Messer
* [12:56](https://www.youtube.com/watch?v=G4_JJHqCS2s&t=776s) - Luca Ferrari
* [16:08](https://www.youtube.com/watch?v=G4_JJHqCS2s&t=968s) - Mark Anderson
* [18:34](https://www.youtube.com/watch?v=G4_JJHqCS2s&t=1114s) - Markus Holzer
* [21:06](https://www.youtube.com/watch?v=G4_JJHqCS2s&t=1266s) - Shahed Nooshmand
* [24:30](https://www.youtube.com/watch?v=G4_JJHqCS2s&t=1470s) - Simon Proctor
* [25:41](https://www.youtube.com/watch?v=G4_JJHqCS2s&t=1541s) - Athanasius
* [27:34](https://www.youtube.com/watch?v=G4_JJHqCS2s&t=1654s) - Colin Crain
* [31:05](https://www.youtube.com/watch?v=G4_JJHqCS2s&t=1865s) - Jaldhar H. Vyas
* [33:48](https://www.youtube.com/watch?v=G4_JJHqCS2s&t=2028s) - Javier Luque
* [34:33](https://www.youtube.com/watch?v=G4_JJHqCS2s&t=2073s) - Laurent Rosenfeld
* [37:38](https://www.youtube.com/watch?v=G4_JJHqCS2s&t=2258s) - Mohammad S Anwar
* [38:47](https://www.youtube.com/watch?v=G4_JJHqCS2s&t=2327s) - Myoungjin Jeon
* [44:08](https://www.youtube.com/watch?v=G4_JJHqCS2s&t=2648s) - Roger Bell_West
* [45:38](https://www.youtube.com/watch?v=G4_JJHqCS2s&t=2738s) - Ulrich Rieke

### Additional material

* [Read more about the `Bag` class in the Raku documentation](https://docs.raku.org/type/Bag)


## Task 2. FNR Character

The second task was to find the first non-repeating character in the series of substrings of the given string. The task left some room for questions as it was not completely clear that you either need to scan the substring from right to left, or to take into account the partial result that was computed on the previous step. Nevertheless, the majority of the solutions produce the output that agrees with the example given in the task description.

## Preparing substrings

So, say, we’ve got the string `ababc`, and we need to make a series of substrings `a`, `ab`, `aba`, `abab`, and `ababc`. The solutions demonstrate the following ways.

Using a simple loop and [taking an explicit substring](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/ash/raku/ch-2.raku):

    for 1..$s.chars -> $pos {
        my $substr = $s.substr(0, $pos).join;
        . . .
    }

[Filling the array](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/jason-messer/raku/ch-2.p6) of characters in a loop:

    my @left;
    gather BUILD: for $s.comb -> $strch {
        @left.unshift($strch)
        . . .
    }

[Using the triangular version](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/markus-holzer/raku/ch-2.raku) of a reduction operator around the list creation operator:

    [\,] $S.comb

## Raku-specific solutions

There are a couple of solutions that I want to accentuate.

One of them, [by Jan Krňávek ](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/wambash/raku/ch-2.raku), introduces a user-defined infix operator, which is then used in a triangular reduction operation, whose result parts are then concatenated using another reduction operator. Just browse for the code to enjoy it.

    sub infix:<FNR> (+@a) is assoc<list> {
        @a.first: * ∉ @a.repeated, :end orelse '#'
    }

    sub FNR-charakter ( $s ) {
        [~] [\FNR] $s.comb
    }

[Myoungjin Jeon](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/jeongoon/raku/ch-2.raku) used a role to inject the new method to a string:

    role fnr {
        method sayLNR ( Str:D $str = self.Str ) {
            . . .
        }
        . . .
    }

    my $fnr-string = $sample does fnr;
    . . .
    $fnr-string.sayLNR;

## The compact winners

One of the most compact solution, which is also a very idiomatic Raku code, is [proposed by Markus Holzer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/markus-holzer/raku/ch-2.raku):

    my $S = ‘ababc’;
    .say for ( [\,] $S.comb ).map( -> $L {
        my $B = $L.Bag;
        $L.reverse.first({ $B{ $_ } == 1 }) || "#"
    });

Here, we have [non-ASCII quotes](https://docs.raku.org/language/unicode_ascii#index-entry-‘), [topicalizing the result](https://andrewshitov.com/2020/08/28/the-pearls-of-raku-issue-9-toss-a-coin-topic-vs-a-temporary-variable/#setting_a_topic), [triangular reduction operator](https://andrewshitov.com/2020/08/22/the-pearls-of-raku-issue-7-triangular-reduction-metaoperator/), the [`.comb` method](https://docs.raku.org/routine/comb), a [pointy block with a signature](https://docs.raku.org/language/functions#index-entry-->_syntax-Blocks_and_lambdas), and a [Bag](https://docs.raku.org/type/Bag).

Another one-liner solution which, actually, needs some tuning before you can run it, is submitted by [Shahed Nooshmand](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/shahed-nooshmand/raku/ch-2.raku). Here it is:

    my $S = 'ababc';
    ([\,] $S.comb).map({ .grep({ .grep($^c) == 1 })[*-1] // '#' }).join.say

In it, we see another cool feature of Raku — [placeholder variables](https://docs.raku.org/language/variables#index-entry-$$CIRCUMFLEX_ACCENT) and a typical Raku thing — taking the last element of an array by subscripting it as `[*-1]`.

### Video review

The full review of the solutions to the Task 2 is available on YouTube:

<iframe width="560" height="315" src="https://www.youtube.com/embed/1Cq1v52r7T8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The timestamps to the reviews of the individual solutions:

* [01:17](https://www.youtube.com/watch?v=1Cq1v52r7T8&t=77s) - Andrew Shitov
* [03:07](https://www.youtube.com/watch?v=1Cq1v52r7T8&t=187s) - Arne Sommer
* [05:41](https://www.youtube.com/watch?v=1Cq1v52r7T8&t=341s) - Jan Krnavek
* [12:30](https://www.youtube.com/watch?v=1Cq1v52r7T8&t=750s) - Jason Messer
* [14:30](https://www.youtube.com/watch?v=1Cq1v52r7T8&t=870s) - Luca Ferrari
* [19:38](https://www.youtube.com/watch?v=1Cq1v52r7T8&t=1178s) - Mark Anderson
* [22:11](https://www.youtube.com/watch?v=1Cq1v52r7T8&t=1331s) - Markus Holzer
* [24:59](https://www.youtube.com/watch?v=1Cq1v52r7T8&t=1499s) - Shahed Nooshmand
* [26:46](https://www.youtube.com/watch?v=1Cq1v52r7T8&t=1606s) - Simon Proctor
* [28:39](https://www.youtube.com/watch?v=1Cq1v52r7T8&t=1719s) - Athanasius
* [30:55](https://www.youtube.com/watch?v=1Cq1v52r7T8&t=1855s) - Colin Crain
* [33:40](https://www.youtube.com/watch?v=1Cq1v52r7T8&t=2020s) - Jaldhar H. Vyas
* [34:58](https://www.youtube.com/watch?v=1Cq1v52r7T8&t=2098s) - Javier Luque
* [36:33](https://www.youtube.com/watch?v=1Cq1v52r7T8&t=2193s) - Laurent Rosenfeld
* [39:11](https://www.youtube.com/watch?v=1Cq1v52r7T8&t=2351s) - Mohammad S Anwar
* [41:19](https://www.youtube.com/watch?v=1Cq1v52r7T8&t=2479s) - Myoungjin Jeon
* [46:03](https://www.youtube.com/watch?v=1Cq1v52r7T8&t=2763s) - Roger Bell_West
* [47:28](https://www.youtube.com/watch?v=1Cq1v52r7T8&t=2848s) - Ulrich Rieke

### Additional materials

* [The Pearls of Raku: Triangular reduction metaoperator](https://andrewshitov.com/2020/08/22/the-pearls-of-raku-issue-7-triangular-reduction-metaoperator/)
* [The Pearls of Raku: Setting the topic](https://andrewshitov.com/2020/08/28/the-pearls-of-raku-issue-9-toss-a-coin-topic-vs-a-temporary-variable/#setting_a_topic)
<br>

***
## BLOGS
***

<br>

### [Andrew Shitov](https://andrewshitov.com/2020/08/18/the-weekly-challenge-for-74/), [Arne Sommer](https://raku-musings.com/majority-character.html), [Colin Crain](https://colincrain.wordpress.com/2020/08/21/when-majority-rule-plays-finders-keepers/), [Jaldhar H. Vyas](https://www.braincells.com/perl/2020/08/perl_weekly_challenge_week_74.html), [Javier Luque](https://perlchallenges.wordpress.com/2020/08/17/perl-weekly-challenge-074/), [Laurent Rosenfeld](http://blogs.perl.org/users/laurent_r/2020/08/perl-weekly-challenge-74-majority-element-and-fnr-character.html), [Luca Ferrari](https://fluca1978.github.io/2020/08/17/PerlWeeklyChallenge74.html), [Mohammad S Anwar](https://perlweeklychallenge.org/blog/weekly-challenge-047/), [Roger Bell_West](https://blog.firedrake.org/archive/2020/08/Perl_Weekly_Challenge_74__more_songs_about_lists.html) and [Shahed Nooshmand](https://rafraichisso.ir/2020/08/20/pwc-74).

<br>

If you want to participate in **The Weekly Challenge**, please contact us at <perlweeklychallenge@yahoo.com>.
