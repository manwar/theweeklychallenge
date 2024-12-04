---
title: "Advent Calendar - December 3, 2024"
date: 2024-12-03T00:00:00+00:00
description: "Advent Calendar - December 3, 2024."
type: post
image: images/blog/2024-12-03.jpg
author: Peter Campbell Smith
tags: ["Perl"]
---

## [**Advent Calendar 2024**](/blog/advent-calendar-2024)
### | &nbsp; [**Day 2**](/blog/advent-calendar-2024-12-02) &nbsp; | &nbsp; **Day 3** &nbsp; | &nbsp; [**Day 4**](/blog/advent-calendar-2024-12-04) &nbsp;
***

The gift is presented by `Peter Campbell Smith`. Today he is talking about his solution to [**The Weekly Challenge - 253**](/blog/perl-weekly-challenge-253). This is re-produced for `Advent Calendar 2024` from the original [**post**](http://ccgi.campbellsmiths.force9.co.uk/challenge/253).

***

<br>

## Split the weakest
***

<br>

#### Task 1: Split Strings
***

    You are given an array of strings and a character separator.

    Write a script to return all words separated by the given character, excluding empty ones.

<br>

#### Analysis
***

So this looks easy:

<br>

```perl
$text = join($separator, @words);
$text =~ s|$separator+|$separator|g;
@output = split(/$separator/, $text);
```

<br>

Looks as if it will do the job. But there are a couple of complications! Firstly, `@output` may contain an empty word at the beginning or the end if - as in Example 2 - there are one or more separators at the beginning or end of `$text`. We need a `shift` or a `pop` on `@output` to remove those.

Secondly, `Mr Anwar` has cunningly given us examples where `$separator` has a special meaning in `Perl` code (`$`) or in a regular expression (`.`), so we need to be a bit careful with the `split` and use `split(/\Q$separator\E+/, $text)` because the usual interpretation of (most) special characters is suppressed between `\Q` and `\E`. Note that the `+` has to come after the `\E` because we do want it to mean one or more separators, not just a literal `'+'`.

I then wondered what happens if `$separator` is a backslash. As you'll see from the examples in my code, that works provided you enter it as a double backslash in the code (`'\\'`). That's only the case if, as I have done, you are supplying the data within your `Perl` code: if you were reading it in, a single backslash should work ... and yes, I just tried it and it does work.

And it works too if any of the characters are `utf8 multibyte` ones - see my last example.

<br>

```perl
#!/usr/bin/perl

# Blog: http://ccgi.campbellsmiths.force9.co.uk/challenge

use v5.26;    # The Weekly Challenge - 2024-01-22
use utf8;     # Week 253 task 1 - Split strings
use strict;   # Peter Campbell Smith
use warnings;
binmode STDOUT, ':utf8';

split_strings(['one.two.three','four.five','six'], '.');
split_strings(['$perl$$', '$$raku$'], '$');
split_strings(['xonex', 'xtwox'], 'x');

# some edge cases
split_strings([',,,,,'], ',');
split_strings(['\\three\\blind\\', '\\mice\\'], '\\');
split_strings(['ŐőŕŒœŔŕŖ', 'ŗŘřŚŕ'], 'ŕ');

sub split_strings {

    my (@words, $separator, $text, @output);

    # initialise
    @words = @{$_[0]};
    $separator = substr($_[1] . ' ', 0, 1); # default is blank

    # join the input strings together with single separators
    $text = join($separator, @words);
    $text =~ s|\Q$separator\E+|$separator|g;

    # split that into individual words
    @output = split(/\Q$separator\E+/, $text);

    # remove an empty first or last word
    shift @output if (@output > 0 and $output[0] eq '');
    pop @output if (@output > 0 and $output[-1] eq '');

    # publish results
    say qq[\nInput:  \@words = ('] . join(qq[', '], @words) . qq[')];
    say qq[        \$separator = '$separator'];
    say qq[Output: ('] . join(q[', '], @output) . qq[')];
}
```

<br>

#### Output
***

<br>

```perl
Input:  @words = ('one.two.three', 'four.five', 'six')
        $separator = '.'
Output: ('one', 'two', 'three', 'four', 'five', 'six')

Input:  @words = ('$perl$$', '$$raku$')
        $separator = '$'
Output: ('perl', 'raku')

Input:  @words = ('xonex', 'xtwox')
        $separator = 'x'
Output: ('one', 'two')

Input:  @words = (',,,,,')
        $separator = ','
Output: ('')

Input:  @words = ('\three\blind\', '\mice\')
        $separator = '\'
Output: ('three', 'blind', 'mice')

Input:  @words = ('ŐőŕŒœŔŕŖ', 'ŗŘřŚŕ')
        $separator = 'ŕ'
Output: ('Őő', 'ŒœŔ', 'Ŗ', 'ŗŘřŚ')
```

<br>

#### Task 2: Weakest Row
***

<br>

    You are given an m x n binary matrix, ie only 0 and 1 where 1 always appear before 0. A row i is weaker than a row j if one of the following is true:

    - The number of 1s in row i is less than the number of 1s in row j.
    - Both rows have the same number of 1 and i < j.

    Write a script to return the order of rows from weakest to strongest.

<br>

#### Analysis
***

<br>

It could be said that its handling of matrices is not one of `Perl`'s greater strengths, but this task is fairly straightforward in that we treating the matrix simply as a list of rows.

My approach is:

First loop over the rows constructing a `'score'` for each, which is a string `'nnnn-rrrr'` where `nnnn` is the number of `1s` and `rrrr` is the `row number`, both padded to `4 characters with 0s`. The scores are stored as the keys of a hash, `%scores`.

Second, I iterate over sort keys `%scores`. These come out in the required order, that is, sorted first by the `count of 1s` and then by the `row number`. I build an array `@order` of the `row numbers` and create another hash `%legend` keyed on the row number giving the explanatory `'Row r contains n ones'`  data.

I suppose this could be done in a single loop, but we're only looping (twice) over the number of rows in a matrix, which isn't going to be a massive number.

<br>

```perl
#!/usr/bin/perl

# Blog: http://ccgi.campbellsmiths.force9.co.uk/challenge

use v5.26;    # The Weekly Challenge - 2024-01-22
use utf8;     # Week 253 task 2 - Weakest row
use strict;   # Peter Campbell Smith
use warnings;
binmode STDOUT, ':utf8';

weakest_row([[1, 1, 0, 0, 0],
             [1, 1, 1, 1, 0],
             [1, 0, 0, 0, 0],
             [1, 1, 0, 0, 0],
             [1, 1, 1, 1, 1]]);

weakest_row([[1, 0, 0, 0],
             [1, 1, 1, 1],
             [1, 0, 0, 0],
             [1, 0, 0, 0]]);

sub weakest_row {

    my ($matrix, $row, $ones, %scores, $row_number, $cell,%legend, @order);

    $matrix = shift;

    # count the ones in each row and construct %scores
    for $row (@$matrix) {
        $ones = 0;
        $ones += $_ for @$row;
        $scores{sprintf('%04d-%04d', $ones, $row_number ++)} = 1;
    }

    # list the number of 1s in each row and create @order
    for $row (sort keys %scores) {
        $row =~ m|(\d+)-(\d+)|;
        ($ones, $row_number) = ($1, $2);
        $legend{$row_number} = sprintf("Row %d contains %d one%s",
            $row_number, $ones, $ones == 1 ? '' : 's');
        push @order, $row_number + 0;
    }

    # show the results
    print_matrix(qq{Input:  [}, $matrix, 1);
    say qq[Output: (] . join(', ', @order) . ')';

    for $row (sort keys %legend) {
        say qq[        $legend{$row}];
    }
}

sub print_matrix {

    my ($legend, $matrix, $j, $out, $max);

    ($legend, $matrix, $max) = @_;

    # format rows of matrix with numbers of equal width
    $out = '';
    for $j (0 .. @$matrix - 1) {
        $out .= qq[\n$legend] . join(', ', @{$matrix->[$j]}) . qq(]);
        $legend = (' ' x (length($legend) - 1)) . '[' if $j == 0;
    }
    $out =~ s|(\d+)|sprintf("%${max}d", $1)|ge;
    say qq[$out\n];
}
```

<br>

#### Output
***

<br>

```perl
Input:  [1, 1, 0, 0, 0]
        [1, 1, 1, 1, 0]
        [1, 0, 0, 0, 0]
        [1, 1, 0, 0, 0]
        [1, 1, 1, 1, 1]

Output: (2, 0, 3, 1, 4)
        Row 0 contains 2 ones
        Row 1 contains 4 ones
        Row 2 contains 1 one
        Row 3 contains 2 ones
        Row 4 contains 5 ones

Input:  [1, 0, 0, 0]
        [1, 1, 1, 1]
        [1, 0, 0, 0]
        [1, 0, 0, 0]

Output: (0, 2, 3, 1)
        Row 0 contains 1 one
        Row 1 contains 4 ones
        Row 2 contains 1 one
        Row 3 contains 1 one
```

<br>

***

If you have any suggestion then please do share with us **<perlweeklychallenge@yahoo.com>**.

| &nbsp; [**Advent Calendar 2024**](/blog/advent-calendar-2024) &nbsp; |
