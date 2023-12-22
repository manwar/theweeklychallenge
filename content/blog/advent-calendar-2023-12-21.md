---
title: "Advent Calendar - December 21, 2023"
date: 2023-12-21T00:00:00+00:00
description: "Advent Calendar - December 21, 2023."
type: post
image: images/blog/2023-12-21.jpg
author: Yves Orton
tags: ["Perl"]
---

## [**Advent Calendar 2023**](/blog/advent-calendar-2023)
### | &nbsp; [**Day 20**](/blog/advent-calendar-2023-12-20) &nbsp; | &nbsp; **Day 21** &nbsp; | &nbsp; [**Day 22**](/blog/advent-calendar-2023-12-22) &nbsp; |
***

The gift is presented by `Yves Orton`. Today he is talking about his solution to [**The Weekly Challenge - 237**](/blog/perl-weekly-challenge-237). This is re-produced for `Advent Calendar 2023` from the original [**post**](https://github.com/demerphq/perlweeklychallenge-club/tree/master/challenge-237/demerphq#readme).

***

<br>

## Seize The Day - Simple Rules The Day
***

My solution was based on using `Time::Local` to compute the epoch for noon on the first day of the month, and then stepping forward by day until the required day of week has been found, and then stepping forward by week until the required repetition of that day has been found, or we ran off the end of the calender month. Using noon instead of midnight is IMO a prudent guard against issues related leap seconds, but probably isn't really necessary but doesn't hurt either.

<br>

```perl
use strict;
use warnings;
use Time::Local qw(timegm_posix);

# Seize The Day
#
sub mday_for_week_dow {
    my ($year_num, $month, $week, $dow)= @_;

    my $time = timegm_posix( 0, 0, 12, 1, $month, $year_num );
    my ($sec,$min,$hour,$mday,$mon,$year,$wday,$yday,$isdst);

    while (1) {
        ($sec,$min,$hour,$mday,$mon,$year,$wday,$yday,$isdst)= gmtime($time);
        last if $wday == $dow;
        $time += (24 * 60 * 60);
    }
    for (;$week;$week--) {
        ($sec,$min,$hour,$mday,$mon,$year,$wday,$yday,$isdst)= gmtime($time);
        return 0 if $mon != $month;
        $time += (24 * 60 * 60) * 7;
    }
    return $mday+1;
}

my @day_name= qw(Sun Mon Tue Wed Thu Fri Sat);
my @month_name= qw(Jan Feb Mar Apr May Jun Jul Aug Sept Oct Nov Dec);

sub num_suffix {
    my ($n)= @_;
    return $n . ($n == 1 ? "st" : $n == 2 ? "nd" : $n == 3 ? "rd" : "th");
}

for my $tuple (
    [2024,  4, 1, 2],
    [2025, 10, 2, 4],
    [2026,  8, 5, 3],

) {
    my ($year, $month, $week, $dow)= @$tuple;
    my $mday = mday_for_week_dow($year, $month-1, $week, $dow);
    printf "The %s %s of %s %s %s\n",
          num_suffix($week),
          $day_name[$dow],
          $year,
          $month_name[$month-1],
          $mday ? "is the ".num_suffix($mday) : "does not exist";
}
```

<br>

## Maximise Greatness - Permutation Misdirection
***

`Task #2` is more difficult and IMO more interesting. The problem is stated as the following: `"Maximise Greatness: You are given an array of integers. Write a script to permute the give[n] array such that you get the maximum possible greatness. To determine greatness, [count pairs that satisfy] nums[i] < perm[i] where 0 <= i < nums.length"`, and then gives the example of

    Input: @nums = (1, 3, 5, 2, 1, 3, 1)
    Output: 4

    One possible permutation: (2, 5, 1, 3, 3, 1, 1)
    which returns 4 greatness as below:
    nums[0] < perm[0]
    nums[1] < perm[1]
    nums[3] < perm[3]
    nums[4] < perm[4]

<br>

I think this is a fun little problem and a good example of the kind of problem that gets posed in the perl-weekly challenge. Simple input, simple output, simple description, but a deeper problem than it might seem at first blush.

The reason I say deeper is that way the problem is stated it makes it seem like we need to compute a permutation, and that the solution to the problem might be `O(N!)` or `O(N**2)`. But on closer inspection we can see that we need not compute a permutation at all, and we only need to do so if we want to visually debug that our answer is correct. It actually turns out that all we need to do is find the count of the most frequently occuring number in the array. The maximum greatness will be the number of elements in the array minus the count of the most frequently occuring element in the array.

A complete proof of this is a bit beyond this document. But we can get the general idea by considering a sorted array. Lets say we have an array with duplicates, such that `A[0] < A[1] < A[2] ... < A[n-1]`. It is obvious that the maximum element in the array is the only one that cannot be paired with something larger than it. We can view this as a rotation of the array:

<br>

    | 1, 2, 3 |
    | 2, 3, 1 | <- rotate left by 1.
    | X  X    | <- Which columns satisfy the constraint

<br>

In this case it is obvious that the maximum greatness is 1 less than number of elements in the array, and 1 is the count of the most frequently occuring element. If we then duplicate one of the elements and we rotate the array by different numbers of elements we can see maximum is the same regardless of which element is duplicated, and that the rotating any more than the number of duplicates causes the number of pairs that satisify the constraint to reduce.

<br>

    | 1, 1, 2, 3 | 1, 2, 2, 3 | 1, 2, 3, 3 |
    | 1, 2, 3, 1 | 2, 2, 3, 1 | 2, 3, 3, 1 | <- rotate 1
    | X  X       | X     X    | X  X       |

    | 1, 1, 2, 3 | 1, 2, 2, 3 | 1, 2, 3, 3 |
    | 2, 3, 1, 1 | 2, 3, 1, 2 | 3, 3, 1, 2 | <- rotate 2
    | X  X       | X  X       | X  X       |

    | 1, 1, 2, 3 | 1, 2, 2, 3 | 1, 2, 3, 3 |
    | 3, 1, 1, 2 | 3, 1, 2, 2 | 3, 1, 2, 3 | <- rotate 3
    | X          | X          | X          |

<br>

The same pattern holds if the array contains two sets of duplicated numbers, the maximum number of pairs is found when the rotation matches the count of the most frequently repeated element:

<br>

    | 1, 1, 2, 2, 3 | 1, 2, 2, 3, 3 | 1, 1, 2, 3, 3 |
    | 1, 2, 2, 3, 1 | 2, 2, 3, 3, 1 | 1, 2, 3, 3, 1 | <- rotate left by 1
      X  X          | X     X       |    X  X       |

    | 1, 1, 2, 2, 3 | 1, 2, 2, 3, 3 | 1, 1, 2, 3, 3 |
    | 2, 2, 3, 1, 1 | 2, 3, 3, 1, 2 | 2, 3, 3, 1, 1 | <- rotate left by 2
    | X  X  X       | X  X  X       | X  X  X       |

    | 1, 1, 2, 2, 3 | 1, 2, 2, 3, 3 | 1, 1, 2, 3, 3 |
    | 2, 3, 1, 1, 2 | 3, 3, 1, 2, 2 | 3, 3, 1, 1, 2 | <- rotate left by 3
    | X  X          | X  X          | X  X          |

<br>

And lastly consider what happens when we have `1 unique element`, `1 pair`, and `1 triplicate`:

<br>

    | 1, 2, 2, 3, 3, 3 | 1, 1, 2, 2, 2, 3 | 1, 1, 1, 2, 3, 3 |
    | 2, 2, 3, 3, 3, 1 | 1, 2, 2, 2, 3, 1 | 1, 1, 2, 3, 3, 1 | <- rotate 1
    | X     X          |    X        X    |       X  X       |

    | 1, 2, 2, 3, 3, 3 | 1, 1, 2, 2, 2, 3 | 1, 1, 1, 2, 3, 3 |
    | 2, 3, 3, 3, 1, 2 | 2, 2, 2, 3, 1, 1 | 1, 2, 3, 3, 1, 1 | <- rotate 2
    | X  X  X          | X  X     X       |    X  X  X       |

    | 1, 2, 2, 3, 3, 3 | 1, 1, 2, 2, 2, 3 | 1, 1, 1, 2, 3, 3 |
    | 3, 3, 3, 1, 2, 2 | 2, 2, 3, 1, 1, 2 | 2, 3, 3, 1, 1, 1 | <- rotate 3
    | X  X  X          | X  X  X          | X  X  X          |

    | 1, 2, 2, 3, 3, 3 | 1, 1, 2, 2, 2, 3 | 1, 1, 1, 2, 3, 3 |
    | 3, 3, 1, 2, 2, 3 | 2, 3, 1, 1, 2, 2 | 3, 3, 1, 1, 1, 2 | <- rotate 4
    | X  X             | X  X             | X  X             |

<br>

In each case we can see that the maximum greatness is determined only by the number of elements in the array and the count of the most frequent element. Note, that there may actually be two rotations of a sorted array that produce the maximum greatness, that of the count of the most frequent element, and that of the count of the second most frequent element. If the counts differ then there will be two possible rotations that give the maximum greatness.

The last point to observe is that if we must produce a permutation that would produce the maximum greatness then we can produce an array `S` of the indexes of the input array such that `A[S[i]] <= A[S[i+1]]`. We can then solve for the sorted array by rotating it left by the count of the most frequent element, and then use `S` to `map` the solution into the appropriate order for the actual input array.

Thus if we are to compute the maximum greatness alone we can do so in `O(N)` steps. If we are to produce a permutation of the input array would produce that maximum greatness we can do so in `O(N log2 N)` steps.

<br>

```perl
use strict;
use warnings;

# Maximum greatness. Given an array of integers compute
# the maximum number of pairs that satisfy $A[$i] < $A[$j]
# where each possible value of $i and $j is used only once.
# If $permute is passed in then treat it as an array ref
# which is to be populated with the permutation of $array
# that would produce that maximum number of pairs.

sub maximum_greatness {
    my ($array, $permute) = @_;

    # Compute the number of occurrences of each unique value, keeping
    # track of the maximum number of occurrences. If the array was large
    # and the number of duplicates high we might get better performance
    # by doing two loops, first over the array itself, and then over the
    # values in the result. But for arrays with few or no duplicated
    # values this will be faster.

    my %seen;
    my $max = 0;
    $seen{$value}++ for @$array;
    foreach my $value (@$array) {
        my $count = ++$seen{$value};
        $max = $count if $max < $count;
    }

    if ($permute) {
        # they have asked us to compute the permutation
        # as the count, so we have to sort the array.

        # sort the indexes into the original array, not
        # the array itself so we can use it to populate
        # $permute as well as read from $array.
        my @sorted_idx = sort {
                            $array->[$a] <=> $array->[$b] ||
                            $a <=> $b
                        } 0 .. $#$array;

        # now compute the permutation
        for my $i (0 .. $#$array) {
            my $next = ($i + $max) % @$array;
            $permute->[$sorted_idx[$i]] = $array->[$sorted_idx[$next]];
        }
    }

    return @$array - $max;
}


use Test::More;
foreach my $tuple (
    [ 4, [ 1, 3, 5, 2, 1, 3, 1 ],
         [ 2, 1, 1, 5, 3, 1, 3 ] ],
    [ 5, [ 1, 2, 2, 3, 3, 4, 4 ],
         [ 2, 3, 3, 4, 4, 1, 2 ]],
    [ 4, [ 1, 2, 3, 4, 5 ],
         [ 2, 3, 4, 5, 1 ] ],
    [ 3, [  55, 22, -33, 10 ],
         [ -33, 55,  10, 22 ] ],
) {
    my ($want, $array, $want_permute)= @$tuple;
    my $permute = [];
    my $count = maximum_greatness($array, $permute);
    is($count, $want, "Array   [@$array] count should be $want");
    is("@$permute", "@$want_permute", "Permute [@$want_permute]")
        if $permute;
}
done_testing();
```

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

| &nbsp; [**Advent Calendar 2023**](/blog/advent-calendar-2023) &nbsp; |
