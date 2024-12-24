---
title: "Advent Calendar - December 24, 2024"
date: 2024-12-24T00:00:00+00:00
description: "Advent Calendar - December 24, 2024."
type: post
image: images/blog/2024-12-24.jpg
author: Jaldhar H. Vyas
tags: ["Perl", "Raku"]
---

## [**Advent Calendar 2024**](/blog/advent-calendar-2024)
### | &nbsp; [**Day 23**](/blog/advent-calendar-2024-12-23) &nbsp; | &nbsp; **Day 24** &nbsp; |
***

The gift is presented by `Jaldhar H. Vyas`. Today he is talking about his solution to [**The Weekly Challenge - 299**](/blog/perl-weekly-challenge-299). This is re-produced for `Advent Calendar 2024` from the original [**post**](https://www.braincells.com/perl/2024/12/perl_weekly_challenge_week_299.html).

***

<br>

## Perl Weekly Challenge: Week 299
***

### Challenge #1: Replace Words

    You are given an array of words and a sentence.

    Write a script to replace all words in the given sentence that start with any of the words in the given array.

<br>

`Perl` first for a change and it's the easiest challenge we've had for a long time.

All we have to do is for each word in `@words`...

<br>

```perl
for my $word (@words) {
```

Replace any instance of that word in `$sentence` followed by one or more instances of any `"word"` character (i.e. alphanumeric or punctuation) with the word by itself.

```perl
    $sentence =~ s/$word\w+/$word/g;
}
```

And print out the result.

```perl
say $sentence;
```

[**(Full code on Github.)**](https://github.com/jaldhar/perlweeklychallenge-club/blob/master/challenge-299/jaldhar-h-vyas/perl/ch-1.pl)

The only real change we need to make for `Raku` is that function arguments are immutable so we have to give $sentence the is copy role.

```perl
sub MAIN(
    $sentence is copy,
    *@words
) {
    for @words -> $word {
        $sentence ~~ s:g/$word\w+/$word/;
    }

    say $sentence;
}
```

<br>

[**(Full code on Github.)**](https://github.com/jaldhar/perlweeklychallenge-club/blob/master/challenge-299/jaldhar-h-vyas/raku/ch-1.raku)

<br>

### Challenge #2: Word Search

    You are given a grid of characters and a string.

    Write a script to determine whether the given string can be found in the given grid of characters. You may start anywhere and take any orthogonal path, but may not reuse a grid cell.

<br>

This one is a little more complicated.

First we break up `$str` into a List of individual characters.

```perl
my @string = $str.comb;
```

Each element of `@chars` is also turned into a List of characters. and added to `@grid`.

```perl
my @grid;

for @chars -> $row {
    @grid.push($row.comb);
}
```

We need a place to store the result. Initially it is assumed to be `False`.

```perl
my $found = False;
```

`$current` represents the first character in `$str`.

```perl
my $current = @string.shift;
```

Now we visit every cell in the `@grid`.

```perl
for 0 ..^ @grid.elems -> $row {
    for 0 ..^ @grid[$row].elems -> $col {
```

If the cell contains the `$current` letter (i.e. the first letter in `$str`,) we can proceed with searching for the rest. If it doesn't, we move on to the next cell.

```perl
        if @grid[$row;$col] eq $current {
```

Assuming this was the correct cell, we set up a SetHash to hold the positions of any cells we have already seen in this search. This fulfills the specs' requirement '...may not reuse a grid cell'.

```perl
            my %visited is SetHash[Str];
```

We call the `traverse()` function recursively (explained below) and if it return True, we set `$found` to `True` and stop processing.

```perl
            if traverse(@grid, @string, %visited, $row, $col) {
                $found = True;
                last;
            }
        }
    }
}
```

<br>

Finally we print the value of $found.

```perl
say $found;
```

<br>

`traverse()` is a function that takes the `@grid`, the list of characters originally in $str, the set of visited cells, and the row and column of the current cell as parameters.

<br>

```perl
sub traverse(@grid, @string, %visited, $row, $col) {
```

We are going to need to know the horizontal and vertical neighboring cells of the one we are in. It is a state (what C++ would call static) variable so we don't have to recreate it every time the function is called.

```perl
state @directions = ([-1, 0], [0,  1], [1,  0], [0, -1]);
```

If `@string` is empty, it means we have successfully found the target string within @grid so we can return True and leave the function.

```perl
unless @string.elems {
    return True;
}
```

If not, first we mark this cell as visited.

```perl
%visited.set("$row;$col");
```

Because parameters are immutable, we cant make direct changes to `@stringso` we first copy it to a new variable imaginativly named `@newstring`. The first character from it is removed and made the current letter we are searching for.

```perl
my @newstring = @string;
my $current = @newstring.shift;
```

For each direction in our `@directions` list...

```perl
for @directions -> $dir {
```

...we use it to create the co-ordinates of a neighbor of the current cell.

```perl
    my ($newRow, $newCol) = ($row, $col) Z+ @$dir;
```

If this neighbor is:

within the bounds of `@grid`.

```perl
if $newRow ~~ 0 ..^ @grid.elems && $newCol ~~ 0 ..^ @grid[0].elems &&
```

not yet visited.

```perl
"$newRow;$newCol" ∉ %visited &&
```

contains the `$current` letter we are searching for.

```perl
@grid[$newRow;$newCol] eq $current {
```

We recursively call `traverse()` again.

```perl
        return traverse(@grid, @newstring, %visited, $newRow, $newCol);
    }
}
```

If none of the neighbors contained the character we are searching for, we return `False`.

```perl
return False;
}
```

[**(Full code on Github.)**](https://github.com/jaldhar/perlweeklychallenge-club/blob/master/challenge-299/jaldhar-h-vyas/raku/ch-2.raku)

The `Perl` version uses the same algorithm. We are using the new experimental true and false constants in the newest `Perl` versions so we have to include these two lines at the top of the script:

```perl
use builtin qw/ true false /;
no warnings 'experimental::builtin';

my @string = split //, $str;
my @grid;

for my $row (@chars) {
    push @grid, [split //, $row];
}

my $found = false;
my $current = shift @string;

for my $row (0 .. scalar @grid - 1) {
    for my $col (0 .. scalar @{$grid[$row]} - 1) {
        if ($grid[$row]->[$col] eq $current) {
```

Because we don't have `Sets` in `Perl`, `%visited` is a plain old hash.

```perl
            my %visited;
            if (traverse(\@grid, \@string, \%visited, $row, $col)) {
                $found = true;
                last;
            }
        }
    }
}

say $found ? 'true' : 'false';
```

`traverse()` also works almost the same as in `Raku`. Every hash or array has to be passed and accessed as a reference which is a bit annoying.

```perl
sub traverse($grid, $string, $visited, $row, $col) {
    state @directions = ([-1, 0], [0,  1], [1,  0], [0, -1]);

    unless (scalar @{$string}) {
        return true;
    }

    $visited->{"$row;$col"} = true;
    my @newstring = @{$string};
    my $current = shift @newstring;

    for my $dir (@directions) {
        my $newRow = $row + $dir->[0];
        my $newCol = $col + $dir->[1];

        if ($newRow >= 0 && $newRow < scalar @{$grid} &&
            $newCol >= 0 && $newCol <  scalar $grid->[0] &&
            !$visited->{"$newRow;$newCol"} &&
```

One little thing which tripped me up is that in `Perl`, I also have to check if a cell exists before attempting to access it otherwise an unsightly warning is emitted.

```perl
            defined $grid->[$newRow]->[$newCol] &&
            $grid->[$newRow]->[$newCol] eq $current
        ) {
            return traverse($grid, \@newstring, $visited, $newRow, $newCol);
        }
    }

    return false;
}
```

[**(Full code on Github.)**](https://github.com/jaldhar/perlweeklychallenge-club/blob/master/challenge-299/jaldhar-h-vyas/perl/ch-2.pl)

<br>

***

If you have any suggestion then please do share with us **<perlweeklychallenge@yahoo.com>**.

| &nbsp; [**Advent Calendar 2024**](/blog/advent-calendar-2024) &nbsp; |
