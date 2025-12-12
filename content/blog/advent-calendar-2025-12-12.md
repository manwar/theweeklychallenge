---
title: "Advent Calendar - December 12, 2025"
date: 2025-12-12T00:00:00+00:00
description: "Advent Calendar - December 12, 2025."
type: post
image: images/blog/2025-12-12.jpg
author: Robbie Hatley
tags: ["Perl"]
---

## [**Advent Calendar 2025**](/blog/advent-calendar-2025)
### | &nbsp; [**Day 11**](/blog/advent-calendar-2025-12-11) &nbsp; | &nbsp; **Day 12** &nbsp; |
***

The gift is presented by `Robbie Hatley`. Today he is talking about his solutioni to [**The Weekly Challenge - 314**](/blog/perl-weekly-challenge-314). This is re-produced for `Advent Calendar 2025` from the original [**post**](https://hatley-software.blogspot.com/2025/03/robbie-hatleys-solutions-in-perl-for_25.html).

***

<br>

For those not familiar with `"The Weekly Challenge"`, it is a weekly programming puzzle with two parts, cycling every Sunday. You can find it here:

[**The Weekly Challenge**](https://theweeklychallenge.org)

`The Weekly Challenge` for the week of `2025-03-24` through `2025-03-30` is `#314`.

The tasks for challenge `#314` are as follows:

## Task 314-1: Equal Strings

You are given three strings. You are allowed to remove the rightmost character of a string to make all equals.

Write a script to return the number of operations to make it equal,otherwise -1.

<br>

## Example #1:

    Input: $s1 = "abc", $s2 = "abb", $s3 = "ab"
    Output: 2
    Operation 1: Delete "c" from the string "abc"
    Operation 2: Delete "b" from the string "abb"

## Example #2:

    Input: $s1 = "ayz", $s2 = "cyz", $s3 = "xyz"
    Output: -1

## Example #3:

    Input: $s1 = "yza", $s2 = "yzb", $s3 = "yzc"
    Output: 3

<br>

The first thing I note is that `"-1"` will be returned if-and-only-if the `3` input strings do `NOT` all start with the same first character. (The examples rule-out the idea that `3` empty strings should be considered `"equal"`.) With that in-mind, I see two main ways to attack this:

<br>

    1. Nibble from the right, chopping-off substrings until the 3 strings are equal, and count operations.
    2. Count triplets of equal characters from the left, and subtract number of equal characters from total.

<br>

Either will give the same answer. I'll go with `option 2`, because it gives an easy way to determine when `-1` should be returned: precisely when the number of equal characters (counted in triplets from the left) is `0` (or if any of the three strings is empty). With that in-mind, I'll make these `2 subroutines`:

<br>

    1. col($pref,$n) (Return a column.)
    2. del_unequ_chrs($pref) (Delete unequal characters.)

<br>

```perl
#!/usr/bin/env -S perl -C63

=pod

--------------------------------------------------------------------------------------------------------------
TITLE AND ATTRIBUTION:
Solutions in Perl for The Weekly Challenge 314-1,
written by Robbie Hatley on Mon Mar 24, 2025.

--------------------------------------------------------------------------------------------------------------
PROBLEM DESCRIPTION:
Task 314-1: Equal Strings
Submitted by: Mohammad Sajid Anwar
You are given three strings. You are allowed to remove the
rightmost character of a string to make all equals. Write a
script to return the number of operations to make it equal,
otherwise -1.

Example #1:
Input: $s1 = "abc", $s2 = "abb", $s3 = "ab"
Output: 2
Operation 1: Delete "c" from the string "abc"
Operation 2: Delete "b" from the string "abb"

Example #2:
Input: $s1 = "ayz", $s2 = "cyz", $s3 = "xyz"
Output: -1

Example #3:
Input: $s1 = "yza", $s2 = "yzb", $s3 = "yzc"
Output: 3

--------------------------------------------------------------------------------------------------------------
PROBLEM NOTES:
The first thing I note is that "-1" will be returned if-and-only-if the 3 input strings do NOT all start with
the same first character. (The examples rule-out the idea that 3 empty strings should be considered "equal".)
With that in-mind, I see two main ways to attack this:

1. Nibble from the right, chopping-off substrings until the 3 strings are equal, and count operations.
2. Count triplets of equal characters from the left, and subtract number of equal characters from total.

Either will give the same answer. I'll go with option 2, because it gives an easy way to determine when -1
should be returned: precisely when the number of equal characters (counted in triplets from the left) is 0
(or if any of the three strings is empty). With that in-mind, I'll make these 2 subroutines:

1. col($pref,$n)          (Return a column.)
4. del_unequ_chrs($pref)  (Delete unequal characters.)

--------------------------------------------------------------------------------------------------------------
IO NOTES:
Input is via either built-in variables or via @ARGV. If using @ARGV, provide one argument which must be a
single-quoted array of arrays of double-quoted strings, in proper Perl syntax, like so:
./ch-1.pl '(["asparagus","aspartame","asparkle"],["Robin","Robbie","Robert"],["rat","bat","cat"])'

Output is to STDOUT and will be each input followed by the corresponding output.

=cut

# ------------------------------------------------------------------------------------------------------------
# PRAGMAS, MODULES, AND SUBS:

   use v5.36;
   use utf8;
   use List::Util qw( min max sum0 all );

   # Return a column from a page:
   sub col ($pref,$n) {
      return map {substr $_, $n, 1} @$pref;
   }

   # If possible, make all lines of a page equal by deleting
   # characters from the right and return number of characters
   # deleted; otherwise, delete nothing and return -1:
   sub del_unequ_chrs ($pref) {
      my @lengths = map {length} @$pref;
      my $min_len =  min(@lengths);
      my $max_len =  max(@lengths);
      my $sum_len = sum0(@lengths);
      my $i = 0;
      for ( ; $i < $min_len ; ++$i ) {
         my @col = col($pref, $i);
         last unless all {$col[0] eq $_} @col;
      }
      # If at least the left-most column was equal, delete
      # everything past last contiguous equal column and
      # return number of characters deleted from page:
      if ( $i > 0 ) {
         map {$_ = substr($_, 0, $i)} @$pref;
         return ($sum_len - scalar(@$pref) * $i);
      }
      # Otherwise, delete nothing and return -1:
      else {
         return -1;
      }
   }

# ------------------------------------------------------------------------------------------------------------
# INPUTS:
my @pages = @ARGV ? eval($ARGV[0]) : (["abc", "abb", "ab"], ["ayz", "cyz", "xyz"], ["yza", "yzb", "yzc"]);
#                 Expected outputs :            2                    -1                      3

# ------------------------------------------------------------------------------------------------------------
# MAIN BODY OF PROGRAM:
$"=', ';
for my $pref (@pages) {
   say '';
   say 'Page of text:';
   say for @$pref;
   my $removed = del_unequ_chrs($pref);
   if ( $removed > -1 ) {
      say 'Page with strings equalized:';
      say for @$pref;
      say "Number of unequal characters removed = $removed";
   }
   else {
      say 'These strings could not be equalized.';
   }
}
```

<br>

## Task 314-2: Sort Column

You are given a list of strings of same length.

Write a script to make each column sorted lexicographically by deleting any non-sorted columns. Return the total columns deleted.

<br>

## Example #1:

    Input: @list = ("swpc", "tyad", "azbe")
    Output: 2
    swpc
    tyad
    azbe
    Column 1: "s", "t", "a" => non sorted
    Column 2: "w", "y", "z" => sorted
    Column 3: "p", "a", "b" => non sorted
    Column 4: "c", "d", "e" => sorted
    Total columns to delete to make it sorted lexicographically: 2

## Example #2:

    Input: @list = ("cba", "daf", "ghi")
    Output: 1

## Example #3:

    Input: @list = ("a", "b", "c")
    Output: 0

<br>

I could cheat and just return the number of columns necessary to be deleted, but that's `NOT` what the problem description actually says; it says `"make each column sorted lexicographically by DELETING any non-sorted columns"`. So I'll actually do that. I'll make these `4 subroutines`:

<br>

    1. col($pref,$n) (Return a column.)
    2. del_col($pref,$n) (Delete a column.)
    3. is_srt(@list) (Is a list sorted?)
    4. del_unsrt_cols($pref) (Delete unsorted columns.)

<br>

```perl
#!/usr/bin/env -S perl -C63

=pod

--------------------------------------------------------------------------------------------------------------
TITLE AND ATTRIBUTION:
Solutions in Perl for The Weekly Challenge 314-2,
written by Robbie Hatley on Mon Mar 24, 2025.

--------------------------------------------------------------------------------------------------------------
PROBLEM DESCRIPTION:
Task 314-2: Sort Column
Submitted by: Mohammad Sajid Anwar
You are given a list of strings of same length. Write a script
to make each column sorted lexicographically by deleting any
non-sorted columns. Return the total columns deleted.

Example #1:
Input: @list = ("swpc", "tyad", "azbe")
Output: 2
swpc
tyad
azbe
Column 1: "s", "t", "a" => non sorted
Column 2: "w", "y", "z" => sorted
Column 3: "p", "a", "b" => non sorted
Column 4: "c", "d", "e" => sorted
Total columns to delete to make it sorted lexicographically: 2

Example #2:
Input: @list = ("cba", "daf", "ghi")
Output: 1

Example #3:
Input: @list = ("a", "b", "c")
Output: 0

--------------------------------------------------------------------------------------------------------------
PROBLEM NOTES:
I could cheat and just return the number of columns necessary to be deleted, but that's NOT what the problem
description actually says; it says "make each column sorted lexicographically by DELETING any non-sorted
columns". So I'll actually do that. I'll make these 4 subroutines:
1. col($pref,$n)          (Return a column.)
2. del_col($pref,$n)      (Delete a column.)
3. is_srt(@list)          (Is a list sorted?)
4. del_unsrt_cols($pref)  (Delete unsorted columns.)

--------------------------------------------------------------------------------------------------------------
IO NOTES:
Input is via either built-in variables or via @ARGV. If using @ARGV, provide one argument which must be a
single-quoted array of arrays of equal-length double-quoted strings, in proper Perl syntax, like so:
./ch-2.pl '(["SNMP", "HTTP", "SVGA"],["132","546","879"],["zxy","nqp","fdh"])'

Output is to STDOUT and will be each input followed by the corresponding output.

=cut

# ------------------------------------------------------------------------------------------------------------
# PRAGMAS, MODULES, AND SUBS:

   use v5.36;
   use utf8;
   use List::Util qw( min );

   # Return a column from a page:
   sub col ($pref,$n) {
      return map {substr $_, $n, 1} @$pref;
   }

   # Delete a column from a page:
   sub del_col ($pref,$n) {
      map {substr $_, $n, 1, ''} @$pref;
   }

   # Is a given list already-sorted?
   sub is_srt (@list) {
      my @srt = sort @list;
      map {return 0 unless $srt[$_] eq $list[$_]} (0..$#list);
      return 1;
   }

   # Delete all unsorted columns from a page:
   sub del_unsrt_cols ($pref) {
      my $cols = min map {length($pref->[$_])} (0..$#$pref);
      my $delcnt = 0;
      for ( my $col = 0 ; $col <= $cols ; ++$col ) {
         if ( !is_srt(col($pref, $col)) ) {
            del_col($pref, $col);
            ++$delcnt; # Increment deletion counter,
            --$cols;   # because we deleted a column,
            --$col;    # and remaining columns shifted left.
         }
      }
      return $delcnt;  # Return number of columns deleted.
   }

# ------------------------------------------------------------------------------------------------------------
# INPUTS:
my @pages = @ARGV ? eval($ARGV[0]) : (["swpc","tyad","azbe"],["cba","daf","ghi"],["a", "b", "c"]);
#                 Expected outputs :             2                    1                 0

# ------------------------------------------------------------------------------------------------------------
# MAIN BODY OF PROGRAM:
$"=', ';
for my $pref (@pages) {
   say '';
   say 'Page of text:';
   say for @$pref;
   my $removed = del_unsrt_cols($pref);
   say 'Page with unsorted columns removed:';
   say for @$pref;
   say "Number of unsorted columns removed = $removed";
}
```

<br>

That's it for challenge `314`; see you on challenge `315!`

<br>

***

If you have any suggestion then please do share with us **<perlweeklychallenge@yahoo.com>**.

| &nbsp; [**Advent Calendar 2025**](/blog/advent-calendar-2025) &nbsp; |
