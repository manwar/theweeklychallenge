---
title: "Advent Calendar - December 7, 2024"
date: 2024-12-07T00:00:00+00:00
description: "Advent Calendar - December 7, 2024."
type: post
image: images/blog/2024-12-07.jpg
author: Roger Bell_West
tags: ["Raku", "Scala"]
---

## [**Advent Calendar 2024**](/blog/advent-calendar-2024)
### | &nbsp; [**Day 6**](/blog/advent-calendar-2024-12-06) &nbsp; | &nbsp; **Day 7** &nbsp; |
***

The gift is presented by `Roger Bell_West`. Today he is talking about his solution to [**The Weekly Challenge - 257**](/blog/perl-weekly-challenge-257). This is re-produced for `Advent Calendar 2024` from the original [**post**](https://blog.firedrake.org/archive/2024/02/The_Weekly_Challenge_257__Smaller_than_Echelon.html).

***

<br>

## Smaller than Echelon
***

<br>

### Task 1: Smaller than Current
***

<br>

    You are given an array of integers, @ints.

    Write a script to find out how many integers are smaller than current i.e. foreach ints[i], count ints[j] < ints[i] where i != j.

<br>

There's an obvious `O(n²)` way of doing this, but I thought it was cleaner to sort.

`Scala:`

<br>

```perl
  def smallerthancurrent(a: List[Int]): List[Int] = {
```

<br>

Set up a sorted list of inputs, and a map that'll contain the solution.

<br>

```perl
    val s: List[Int] = a.sortWith(_ < _)
    var l = mutable.Map.empty[Int, Int]
```

<br>

For each item in the sorted list, store the index, which is the number of items smaller than that. (Use the first occurrence of the item; I added the test case with a duplicate value.)

<br>

```perl
    for ((n, i) <- s.zipWithIndex) {
      if (!l.contains(n)) {
        l += (n -> i)
      }
    }
```

<br>

Then just read off the values in the order of the original list.

<br>

```perl
    a.map { n => l(n) }.toList
  }
```

<br>

### Task 2: Reduced Row Echelon
***

<br>

    Given a matrix M, check whether the matrix is in reduced row echelon form.

    A matrix must have the following properties to be in reduced row echelon form:

        1) If a row does not consist entirely of zeros, then the first nonzero number in the row is a 1. We call this the leading 1.

        2) If there are any rows that consist entirely of zeros, then they are grouped together at the bottom of the matrix.

        3) In any two successive rows that do not consist entirely of zeros, the leading 1 in the lower row occurs farther to the right than the leading 1 in the higher row.

        4) Each column that contains a leading 1 has zeros everywhere else in that column.

<br>

I propsed a bunch of the test cases here because I wanted to test each rule individually.

`Raku:`

<br>

```perl
sub reducedrowechelon(@a) {
```

<br>

We'll be using the position of the first 1 in each row quite a bit. That goes in @leadingone.

<br>

```perl
    my @leadingone;
```

<br>

Inspect each row:

<br>

```perl
    for @a -> @row {
```

<br>

Set the leading-one position to -1, indiciating no 1 found.

<br>

```perl
        my $lp = -1;
```

<br>

For each item in the row:

<br>

```perl
        for 0 .. @row.end -> $cn {
            my $cell = @row[$cn];
```

<br>

If it's a 1, store that position and exit.

<br>

```perl
            if ($cell == 1) {
                $lp = $cn;
                last;
```

<br>

If it's not a zero, bail out (rule 1).

<br>

```perl
            } elsif ($cell != 0) {
                return False;
            }
        }
```

<br>

Add this row's leading-one position to the list.

<br>

```perl
        @leadingone.push($lp);
    }
```

<br>

If there are trailing rows of all-zero, ignore them.

<br>

```perl
    while (@leadingone[*-1] == -1) {
        @leadingone.pop;
    }
```

<br>

Now sort the remaining leading-one positions.

<br>

```perl
    my @c = @leadingone.sort({$^a <=> $^b});
```

<br>

If there are any all-zero rows, they weren't trailing. Bail out by rule 2.

<br>

```perl
    if (@c[0] == -1) {
        return False;
    }
```

<br>

If the sorted list doesn't match the original, the leading ones aren't progressively to the right. Bail out by rule 3.

<br>

```perl
    if (!(@c eqv @leadingone)) {
        return False;
    }
```

<br>

Finally take a columnwise slice of each column that has a leading 1 in it. Test for 1s and 0s in the right places (rule 4).

<br>

```perl
    for @c -> $i {
        my @col = @a.map({$_[$i]}).sort({$^a <=> $^b});
        if (@col[*-1] != 1 ||
            @col[*-2] != 0 ||
            @col[0] != 0) {
            return False;
        }
    }
    return True;
}
```

<br>

I spot two possible problems here:

(1) the rule-3 test will pass two leading-ones of equal value. But the rule-4 test will remove those because they won't be unique in the column. I'd rather rule 3 be fully tested in its own segment of the codex.

(2) the rule-4 test should reject a negative value found in the same column as a leading 1 (@col[0] != 0 above). The existing test cases don't fail in that case (this is my fault since I proposed most of them).

Full code on [**github**](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-257/roger-bell-west).

<br>

***

If you have any suggestion then please do share with us **<perlweeklychallenge@yahoo.com>**.

| &nbsp; [**Advent Calendar 2024**](/blog/advent-calendar-2024) &nbsp; |
