---
title: "Advent Calendar - December 18, 2024"
date: 2024-12-18T00:00:00+00:00
description: "Advent Calendar - December 18, 2024."
type: post
image: images/blog/2024-12-18.jpg
author: Cheok-Yin Fung
tags: ["Perl"]
---

## [**Advent Calendar 2024**](/blog/advent-calendar-2024)
### | &nbsp; [**Day 17**](/blog/advent-calendar-2024-12-17) &nbsp; | &nbsp; **Day 18** &nbsp; | &nbsp; [**Day 19**](/blog/advent-calendar-2024-12-19) &nbsp; |
***

The gift is presented by `Cheok-Yin Fung`. Today he is talking about his solution to [**The Weekly Challenge - 281**](/blog/perl-weekly-challenge-281). This is re-produced for `Advent Calendar 2024` from the original [**post**](https://cylivesstem.wordpress.com/2024/08/10/where-is-the-chess-piece-going-to/).

***

<br>

## Where is the chess piece going to?
***

<br>

### Knight’s Move

[**The Weekly Challenge**](https://theweeklychallenge.org)(`TWC`) is a weekly activity organized by the `Perl` enthusiast `Mohammad Sajid Anwar`. Every week it consists of `two` programming tasks. The difficulties vary, but usually won’t spend you more than `a day`. The main languages of `TWC` have been `Perl` and `Raku`, but the participants can choose their favorite languages to solve the tasks. Since it has started, there have been over `100` guest languages in TWC submissions.

`Problem statement:` Given two locations on chessboard, find the minimum moves of a knight needed to move from one to another.

<br>

![Week_281_Task_2](/images/blog/week_281_task_2.png)

<br>

Again, I made up a solution using the experience in chess. I roughly divided the situation into `two cases`: the `start` grid and the `end` grid is within a `3×3` region, and outside `3×3` region. If it is within a `3×3` region, I hard-coded the number of moves required.

<br>

        + - - - - - +
        | 2 | 1 | 4 |
        | - - - - - |
        | 3 | * | 1 |
        | - - - - - |
        | S | 3 | 2 |
        + - - - - - +

<br>

For the `*`, if `S` is the corner point, the number of moves required is `4`, else it is `2`.

<br>

```perl
sub small_dist {
    my $pos_a = $_[0];
    my $pos_b = $_[1];
    my $diff0 = abs($pos_a->[0]-$pos_b->[0]);
    my $diff1 = abs($pos_a->[1]-$pos_b->[1]);
    if ($diff0 == 1 && $diff1 == 2 || $diff0 == 2 && $diff1 == 1)
        {return 1;}
    if ($diff0 == 0 && $diff1 == 2 || $diff0 == 2 && $diff1 == 0)
        {return 2;}
    if ($diff0 == 0 && $diff1 == 1 || $diff0 == 1 && $diff1 == 0)
        {return 3;}
    if ($diff0 == 1 && $diff1 == 1) {
        if (is_corner($pos_a)|| is_corner($pos_b)) {
            return 4;
        }
        else {
            return 2;
        }
    }
    if ($diff0 == 2 && $diff1 == 2) {
        return 4;
    }
}

sub is_corner {
    my $pos = $_[0];
    if (($pos->[0] == 0 || $pos->[0] == 7)
            &&
       ($pos->[1] == 0 || $pos->[1] == 7))
    {
       return 1;
    }
    return 0;
}
```

<br>

Then here comes the cases where the distance between the two grids is large. I used a way (can I call it a heuristic?): pick the next grid(s) which reduces the taxicab distance between the target grid and the position of the knight, until (ultimately they definitely will be) two fall into a `3×3` region.

<br>

```perl
sub taxicab_dist {
    my $pos_a = $_[0];
    my $pos_b = $_[1];
    my $taxicab_dist =
        abs($pos_a->[0]-$pos_b->[0])
                +
        abs($pos_a->[1]-$pos_b->[1]);
    return $taxicab_dist;
}

sub dist {
    my $pos_a = $_[0];
    my $pos_b = $_[1];
    if ((abs($pos_a->[0]-$pos_b->[0]) <= 2) && (abs($pos_a->[1]-$pos_b->[1]) <= 2)) {
        return small_dist($pos_a, $pos_b);
    }
    my $cur_tc_dist = taxicab_dist($pos_a, $pos_b);
    my @px = (+2, +2, +1, +1, -1, -1, -2, -2);
    my @py = (+1, -1, +2, -2, +2, -2, +1, -1);
    my @nxt;
    for my $k (0..7) {
        my $npx = $pos_b->[0]+$px[$k];
        my $npy = $pos_b->[1]+$py[$k];
        if ($npx < 0 || $npx > 7) {next;}
        if ($npy < 0 || $npy > 7) {next;}
        my $tc_dist = taxicab_dist($pos_a, [$npx, $npy]);
        push @nxt, [$npx, $npy] if $tc_dist < $cur_tc_dist;
    }
    if (scalar @nxt == 1) {
        return ( 1 + dist($pos_a, $nxt[0]) );
    } else {
        my @choice_val;
        for (0..$#nxt) {
            $choice_val[$_] = 1 + dist($pos_a, $nxt[$_]);
        }
        #say(chr(ord('a')+$pos_b->[0]).(1+$pos_b->[1])." ", min(@choice_val));
        return min(@choice_val);
    }
}
```

<br>

Here my code has a recursion on the subroutine dist.

This almost completes the task. Finally format the chessboard notation into pair of integers we are using:

<br>

```perl
sub km {
    my $targt = $_[0];
    my $begin = $_[1];
    my $pos_a = [ord(substr($begin,0,1))-ord("a"), substr($begin,1,2)-1];
    my $pos_b = [ord(substr($targt,0,1))-ord("a"), substr($targt,1,2)-1];
    return dist($pos_a, $pos_b);
}
```

<br>

And that’s all!

As usual, I peeked on others’ solutions/blogposts. Experts in the TWC team have mentioned the difference between `breath-first search(BFS)` and `depth-first search(DFS)`. My current recursive code is a `DFS`, [[**SO ref**](https://stackoverflow.com/questions/2549541/performing-breadth-first-search-recursively) to know more] so it has a room of improvement.

Links for CY’s full code: [**ch-2.pl**](https://github.com/E7-87-83/perlweeklychallenge-club/blob/newh/challenge-281/cheok-yin-fung/perl/ch-2.pl)

Anyway, if you like this task, you may also like [**the Adventure of Knight**](https://theweeklychallenge.org/blog/perl-weekly-challenge-118/#TASK2) I proposed in TWC 118. There is a written-up in my [**old blog**](https://e7-87-83.github.io/coding/challenge_118.html).

The `Olympics Game` is undergoing and one of its ideals is world peace. Pray for peace in `Ukraine` and the `Middle East`, and, among your communities and family members.

<br>

***

If you have any suggestion then please do share with us **<perlweeklychallenge@yahoo.com>**.

| &nbsp; [**Advent Calendar 2024**](/blog/advent-calendar-2024) &nbsp; |
