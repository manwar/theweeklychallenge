---
title: "Advent Calendar - December 13, 2023"
date: 2023-12-13T00:00:00+00:00
description: "Advent Calendar - December 13, 2023."
type: post
image: images/blog/2023-12-13.jpg
author: Arne Sommer
tags: ["Raku"]
---

## [**Advent Calendar 2023**](/blog/advent-calendar-2023)
### | &nbsp; [**Day 12**](/blog/advent-calendar-2023-12-12) &nbsp; | &nbsp; **Day 13** &nbsp; | &nbsp; [**Day 14**](/blog/advent-calendar-2023-12-14) &nbsp; |
***

The gift is presented by `Arne Sommer`. Today he is talking about his solution to [**The Weekly Challenge - 222**](/blog/perl-weekly-challenge-222). This is re-produced for `Advent Calendar 2023` from the original [**post**](https://raku-musings.com/members.html).

***

<br>

## Raku Members
***

### Challenge #222.1: Matching Members

    You are given a list of positive integers, @ints.
    Write a script to find the total matching members after sorting the list increasing order.

    Example 1:

        Input: @ints = (1, 1, 4, 2, 1, 3)
        Output: 3

        Original list: (1, 1, 4, 2, 1, 2)
        Sorted list  : (1, 1, 1, 2, 3, 4)

        Compare the two lists, we found 3 matching members (1, 1, 2).

    Example 2:

        Input: @ints = (5, 1, 2, 3, 4)
        Output: 0

        Original list: (5, 1, 2, 3, 4)
        Sorted list  : (1, 2, 3, 4, 5)

        Compare the two lists, we found 0 matching members.

    Example 3:

        Input: @ints = (1, 2, 3, 4, 5)
        Output: 5

        Original list: (1, 2, 3, 4, 5)
        Sorted list  : (1, 2, 3, 4, 5)

        Compare the two lists, we found 5 matching members.

<br>

```perl
#! /usr/bin/env raku

unit sub MAIN (*@ints where @ints.elems > 1 && all(@ints) ~~ Int
                        && all(@ints) > 0);                # [1]

say (@ints Z @ints.sort).grep( { $_[0] eq $_[1] }).elems;  # [2]
# D  # A ############### # B ##################### # C ##
```

<br>

`[1]` At least two elements, all of them integers, and greater than zero.

`[2]` We start with the list itself and a sorted copy, merging them with the `Z (zip)` operator `[A]`. The result is a list with pair objects; one element from the original list, and one from the sorted one. Then we use grep to keep the pairs where the two values are equal `[B]`. Then we count the number of elements (i.e. pairs) in the resulting list `[C]` and print that number `[D]`.

See [**docs.raku.org/routine/Z**](https://docs.raku.org/routine/Z) for more information about the `infix zip` operator `Z`.

Running it:

<br>

```perl
$ ./matching-members 1 1 4 2 1 3
3

$ ./matching-members 5 1 2 3 4
0

$ ./matching-members 1 2 3 4 5
5
```

<br>

Looking good.

<br>

### Challenge #222.2: Last Member

    You are given an array of positive integers, @ints.

    Write a script to find the last member if found otherwise return 0. Each turn
    pick 2 biggest members (x, y) then decide based on the following conditions,
    continue this until you are left with 1 member or none.

        if x == y then remove both members
        if x != y then remove both members and add new member (y-x)

    Example 1:

        Input: @ints = (2, 7, 4, 1, 8, 1)
        Output: 1

        Step 1: pick 7 and 8, we remove both and add new member 1 => (2, 4, 1, 1, 1).
        Step 2: pick 2 and 4, we remove both and add new member 2 => (2, 1, 1, 1).
        Step 3: pick 2 and 1, we remove both and add new member 1 => (1, 1, 1).
        Step 4: pick 1 and 1, we remove both => (1).

    Example 2:

        Input: @ints = (1)
        Output: 1

    Example 3:

        Input: @ints = (1, 1)
        Output: 0

        Step 1: pick 1 and 1, we remove both and we left with none.

<br>

```perl
#! /usr/bin/env raku

unit sub MAIN (*@ints where @ints.elems > 0 && all(@ints) ~~ Int
                            && all(@ints) > 0,                     # [1]
               :v(:$verbose));

@ints = @ints>>.Int.sort.reverse;                                  # [2]

while @ints.elems > 1                                              # [3]
{
  say ":Sorted: @ints[]" if $verbose;

  my $y    = @ints.shift;                                          # [4]
  my $x    = @ints.shift;                                          # [4]
  my $diff = $y - $x;                                              # [5]

  say ":List:   @ints[] { $diff ?? "| add $diff (source: $y - $x)" \
      !! "| no add (source $y == $x)" }" if $verbose;

  if $diff                                                         # [6]
  {
    @ints.push: $diff;                                             # [6a]
    @ints = @ints.sort.reverse;                                    # [6b]
  }
}

say @ints.elems ?? @ints[0] !! 0;                                  # [7]
```

<br>

`[1]` At least 1 element, all of them must be positve integers.

`[2]` Coerce the values to integers (from the undecided IntStr that we get from using the command line), just to make the verbose mode output looks nice. We sort the values with the highest one first.

`[3]` As long as there are at least two elements left,

`[4]` Get the two highest values.

`[5]` Get the difference. Note the order we got the values in [4], ensuring a non-negative difference here.

`[6]` Do we have a difference? If so, add the difference to the list [6a], and resort the list [6b] - so that it always is sorted when we start a new iteration (in [3]).

`[7]` If we have elements in the list (just one, really), print that value. If not, print 0.

Running it:

<br>

```perl
$ ./last-member 2 7 4 1 8 1
1

$ ./last-member 1
1

$ ./last-member 1 1
0
```

<br>

 Looking good.

With verbose mode:

<br>

```perl
$ ./last-member -v 2 7 4 1 8 1
:Sorted: 8 7 4 2 1 1
:List:   4 2 1 1 | add 1 (source: 8 - 7)
:Sorted: 4 2 1 1 1
:List:   1 1 1 | add 2 (source: 4 - 2)
:Sorted: 2 1 1 1
:List:   1 1 | add 1 (source: 2 - 1)
:Sorted: 1 1 1
:List:   1 | no add (source 1 == 1)
1

$ ./last-member -v 1
1

$ ./last-member -v 1 1
:Sorted: 1 1
:List:    | no add (source 1 == 1)
0
```

<br>

And that's it.

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

| &nbsp; [**Advent Calendar 2023**](/blog/advent-calendar-2023) &nbsp; |
