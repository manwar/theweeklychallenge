---
title: "Advent Calendar - December 6, 2019"
date: 2019-12-06T00:00:00+00:00
description: "Advent Calendar - December 6, 2019"
type: post
image: images/blog/2019-12-06.jpg
author: Arne Sommer
tags: ["Raku"]
---

[**Advent Calendar 2019**](/blog/advent-calendar-2019)
***

The gift is presented by [**Arne Sommer**](/blog/meet-the-champion-019). Today he is talking about his solutions to **Task #1: Pythagoras Pie Puzzle** of [**"The Weekly Challenge - 016"**](/blog/perl-weekly-challenge-016).

#### At a party a pie is to be shared by 100 guest. The first guest gets 1% of the pie, the second guest gets 2% of the remaining pie, the third gets 3% of the remaining pie, the fourth gets 4% and so on. Write a script that figures out which guest gets the largest piece of pie.

***
We can start with the numbers (the size of the pieces), which is suitable job for a sequence with «**gather**/**take**»:
\
\
[**pythagoras-pie-all**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-016/arne-sommer/perl6/pythagoras-pie-all)

```perl6
my $pythagoras-pie := gather  # [1]
{
  my $remainder = 100;        # [2]
  my $position  = 1;          # [3]
  loop                        # [4]
  {
    my $part = $remainder * $position / 100; # [5]
    $remainder -= $part;                     # [6]
    $position++;                             # [7]
    take $part;                              # [8]
  }
}

say "{ $_ + 1 } ->  $pythagoras-pie[$_]%" for ^100; [9]
```
\
\
### [1] We set up the sequence with binding (:=) to ensure that it stays lazy (as evaluating an inifinite list doesn't work out).

### [2] The size of the pie (in %), starting with 100.

### [3] The position in the sequence. We need this as the portion is defined related to this variable.

### [4] An infinite loop.

### [5] The size of the part given to the current guest.

### [6] The remainder of the pie, after the current guest has been served.

### [7] Increase the position, ready for the next iteration of the loop (#4).

### [8] Return the current size.

### [9] Print the 100 first values from the sequence. (Any values after this are all zero.)
\
Running it (with just some of the lines shown):

    $ perl6 pythagoras-pie-all
    1 ->  1%
    2 ->  1.98%
    3 ->  2.9106%
    4 ->  3.764376%
    5 ->  4.5172512%
    6 ->  5.149666368%
    7 ->  5.64746745024%
    8 ->  6.002451118541%
    9 ->  6.21253690768973%
    10 ->  6.281565095552947%
    11 ->  6.21874944459741773%
    12 ->  6.037840369845492849%
    13 ->  5.75607448591936984904%
    14 ->  5.392999018345995%
    15 ->  4.969263381190237%
    ...
    96 ->  3.7330486177577654e-34%
    97 ->  1.5087738163437654e-35%
    98 ->  4.572984556753267e-37%
    99 ->  9.239295328950519e-39%
    100 ->  9.332621544394437e-41%
\
We can see that the answer is **10**; i.e. **guest number 10** gets the largest piece of cake. But the task was for the program to figure it out, so let's do just that.

Finding the largest value is easy, as long as we chop off the sequence after the first **100** elements. (The rest of them, **ad infinitum**, are zero. Trying to access all elements in an infinite list is not a good idea.)

    say $pythagoras-pie[^100].max; # -> 6.281565095552947
\
But this doesn't tell us the position (or index), and thus which guest.
\
\
[**pythagoras-pie**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-016/arne-sommer/perl6/ch-1.p6)
\
```perl6
my $pythagoras-pie := gather
{
  my $remainder = 100;
  my $position  = 1;
  loop
  {
    my $part = $remainder * $position / 100;
    $remainder -= $part;
    $position++;
    take $part;
  }
}
\
my $largest = $pythagoras-pie[^100].max;                          # [1]

for (^100).grep({ $pythagoras-pie[$_] == $largest }) -> $guest    # [2]
{
  say "Guest #{ $guest + 1 } got the largest piece of cake ({ $largest }%).";
}                # [3]
```
\
\
### [1] Get the highest value in the first 100 elements of the sequence. (We had to get rid of the infinite sequence, as «max» obviously cannot reach the end.)

### [2] Iterate over the indeces (0 to 99), select the ones (with «grep») where the value in the list is equal to the highest value. Note that this would give all matches, if there had been more than one (but there isn't).

### [3] Compensate for the numbering discrepancy; the guests are given as 1..100, but the indeces are 0..99.
\
# Running it:

    $ perl6 pythagoras-pie
    Guest #10 got the largest piece of cake (6.281565095552947%).
\
***
If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2019**](/blog/advent-calendar-2019)
