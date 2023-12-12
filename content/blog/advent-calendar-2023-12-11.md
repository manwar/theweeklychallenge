---
title: "Advent Calendar - December 11, 2023"
date: 2023-12-11T00:00:00+00:00
description: "Advent Calendar - December 11, 2023."
type: post
image: images/blog/2023-12-11.jpg
author: W. Luis Mochan
tags: ["Perl"]
---

## [**Advent Calendar 2023**](/blog/advent-calendar-2023)
### | &nbsp; [**Day 10**](/blog/advent-calendar-2023-12-10) &nbsp; | &nbsp; **Day 11** &nbsp; | &nbsp; [**Day 12**](/blog/advent-calendar-2023-12-12) &nbsp; |
***

The gift is presented by `W. Luis Mochan`. Today he is talking about his solution to [**The Weekly Challenge - 219**](/blog/perl-weekly-challenge-219). This is re-produced for `Advent Calendar 2023` from the original [**post**](https://wlmb.github.io/2023/05/29/PWC219/).

***

<br>

## Task 1: Sorted Squares
***

    Write a script to square each number in the list and return the sorted list, increasing order.

    Example 1
        Input: @list = (-2, -1, 0, 3, 4)
        Output: (0, 1, 4, 9, 16)

    Example 2
        Input: @list = (5, -4, -1, 3, 6)
        Output: (1, 9, 16, 25, 36)

<br>

This can be solved by just following the instructions: square an sort. To that end we can use `map` and `sort` in a simple oneliner:

<br>

### Example
***

<br>

```perl
perl -E 'say "@ARGV -> ", join " ", sort {$a<=>$b} map {$_**2} @ARGV' -- -2 -1 0 3 4
```

<br>

### Results:
***

<br>

```perl
-2 -1 0 3 4 -> 0 1 4 9 16
```

<br>

The `--` in the argument list is to indicate there are no switches, so I can input negative numbers.

<br>

### Another example:
***

<br>

```perl
perl -E 'say "@ARGV -> ", join " ", sort {$a<=>$b} map {$_**2} @ARGV' -- 5 -4 -1 3 6
```

<br>

### Results:
***

<br>

```perl
5 -4 -1 3 6 -> 1 9 16 25 36
```

<br>

The full code is almost identical:

<br>

```perl
use v5.36;
die <<~"FIN" unless @ARGV;
    Usage: $0 -- N1 [N2...]
    to square and sort the numbers N1 N2...
    The -- is to allow negative numbers as arguments without
    confusing them with options.
    FIN
say "@ARGV -> ", join " ", sort {$a<=>$b} map {$_**2} @ARGV;
```

### Examples:
***

<br>

```perl
./ch-1.pl -2 -1 0 3 4
./ch-1.pl 5 -4 -1 3 6
```

<br>

### Results:
***

<br>

```perl
-2 -1 0 3 4 -> 0 1 4 9 16
5 -4 -1 3 6 -> 1 9 16 25 36
```

<br>

## Task 2: Travel Expenditure
***

    You are given two list, @costs and @days.

    The list @costs contains the cost of three different types of travel cards you can buy.

    For example @costs = (5, 30, 90)

        Index 0 element represent the cost of  1 day  travel card.
        Index 1 element represent the cost of  7 days travel card.
        Index 2 element represent the cost of 30 days travel card.
        The list @days contains the day number you want to travel in the year.

    For example: @days = (1, 3, 4, 5, 6)

        The above example means you want to travel on day 1, day 3, day 4, day 5 and
        day 6 of the year. Write a script to find the minimum travel cost.

    Example 1:
        Input: @costs = (2, 7, 25)
               @days  = (1, 5, 6, 7, 9, 15)
        Output: 11

        On day 1, we buy a one day pass for 2 which would cover the day 1.
        On day 5, we buy seven days pass for 7 which would cover days 5 - 9.
        On day 15, we buy a one day pass for 2 which would cover the day 15.

        So the total cost is 2 + 7 + 2 => 11.

    Example 2:
        Input: @costs = (2, 7, 25)
               @days  = (1, 2, 3, 5, 7, 10, 11, 12, 14, 20, 30, 31)
        Output: 20

        On day 1, we buy a seven days pass for 7 which would cover days 1 - 7.
        On day 10, we buy a seven days pass for 7 which would cover days 10 - 14.
        On day 20, we buy a one day pass for 2 which would cover day 20.
        On day 30, we buy a one day pass for 2 which would cover day 30.
        On day 31, we buy a one day pass for 2 which would cover day 31.

        So the total cost is 7 + 7 + 2 + 2 + 2 => 20.

<br>

An exhaustive search would get expensive for large inputs, but it is simple and might be enough for many use cases. I use the fact that a subsequence of an optimum sequence is itself optimum, so that I can make a recursive search for the solution. I’ll assume that the days are positive and sorted for the short solution. I relax the assumptions for the full solution. I assume the input consists of the costs for the three kind of passes (1, 7, 30) followed by the travel days. The code fits a two-liner:

<br>

```perl
perl -MList::Util=min -E '@p=(1,7,30); @d=@ARGV; @c=splice @d,0,3; say "Costs: @c, Days @d, Tot: ",f(0, @d); sub f($u,@r){ shift @r while @r && $u>=$r[0]; return 0 unless @r; my $n=shift @r; return min map {$c[$_]+f($n+$p[$_]-1,@r)} 0..2;}' 2 7 25 1 5 6 7 9 15
```

<br>

### Results:
***

<br>

```perl
Costs: 2 7 25, Days 1 5 6 7 9 15, Tot: 11
```

<br>

I leave the explanation to the full code.

### Example 2:
***

<br>

```perl
perl -MList::Util=min -E '@p=(1,7,30); @d=@ARGV; @c=splice @d,0,3; say "Costs: @c, Days @d, Tot: ",f(0, @d); sub f($u,@r){ shift @r while @r && $u>=$r[0]; return 0 unless @r; my $n=shift @r; return min map {$c[$_]+f($n+$p[$_]-1,@r)} 0..2;}'  2 7 25 1 2 3 5 7 10 11 12 14 20 30 31
```

<br>

### Results:
***

<br>

```perl
Costs: 2 7 25, Days 1 2 3 5 7 10 11 12 14 20 30 31, Tot: 20
```

<br>

The full code is:

<br>

```perl
use v5.36;
use List::Util qw(min);
die <<~"FIN" unless @ARGV > 3;
    Usage: $0 C1 C7 C30 D1 [D2...]
    to calculate the travel expenditure for days D1, D2...
    given the costs C1 C7 and C30 for one, seven and thirty day passes
    FIN

my @kinds=(1,7,30);                             # kinds of passes
my @days=@ARGV;                                 # travel days from input
my @costs=splice @days, 0, 3;                   # the first three are the costs of the passes
my $expenditure=cost($days[0]-1, @days);        # get cost for all days starting with no ticket
say "Costs: @costs, Days: @days, Expenditure: $expenditure";

# Recursively get the expeditures for the given @days, given a current ticket that
# cover up to the $current day
sub cost($current, @days){
    shift @days while @days and $current >= $days[0];            # remove days already paid for
    return 0 unless @days;
    my $now=shift(@days);
    # For each pass, get the remaining cost and choose best
    my $cost=min map {$costs[$_]+cost($now+$kinds[$_]-1, @days)} 0..2;
    return $cost;
}
```

<br>

### Examples:
***

<br>

```perl
./ch-2.pl 2 7 25 1 5 6 7 9 15
./ch-2.pl 2 7 25 1 2 3 5 7 10 11 12 14 20 30 31
```

<br>

### Results:
***

<br>

```perl
Costs: 2 7 25, Days: 1 5 6 7 9 15, Expenditure: 11
Costs: 2 7 25, Days: 1 2 3 5 7 10 11 12 14 20 30 31, Expenditure: 20
```

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

| &nbsp; [**Advent Calendar 2023**](/blog/advent-calendar-2023) &nbsp; |
