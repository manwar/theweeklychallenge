---
title: "Advent Calendar - December 1, 2025"
date: 2025-12-01T00:00:00+00:00
description: "Advent Calendar - December 1, 2025."
type: post
image: images/blog/2025-12-01.jpg
author: Ali Moradi
tags: ["Perl"]
---

## [**Advent Calendar 2025**](/blog/advent-calendar-2025)
### | &nbsp; **Day 1** &nbsp; | &nbsp; [**Day 2**](/blog/advent-calendar-2025-12-02) &nbsp; |
***

The gift is presented by `Ali Moradi`. Today he is talking about his solution to [**The Weekly Challenge - 303**](/blog/perl-weekly-challenge-303). This is re-produced for `Advent Calendar 2025` from the original [**post**](https://deadmarshal.blogspot.com/2025/01/twc303.html).

***

<br>

## Task #1
***

We find all 3 variations of digits, and check if it is even, then remove the duplicates:

<br>

```perl
#!/usr/bin/env perl
use strict;
use warnings;
use Algorithm::Combinatorics qw(variations);
use List::Util qw(uniq);
use Data::Show;

sub three_digits_even{
  @{$_[0]} = sort{$a <=> $b} @{$_[0]};
  uniq map{join '',@$_} grep{$_->[0] && !($_->[2] % 2)}
    variations($_[0],3)
}

print show three_digits_even([2,1,3,0]);
print show three_digits_even([2,2,8,8,2]);
```

<br>

## Task #2
***

We keep deleting and keeping points to get the final result:

<br>

```perl
#!/usr/bin/env perl
use strict;
use warnings;
use List::Util qw(max);

sub delete_and_earn{
  my $max = max @{$_[0]};
  my @total = (0) x ($max+1);
  map{$total[$_] += $_} @{$_[0]};
  my $first = $total[0];
  my $second = max($total[0],$total[1]);
  foreach my $i(2..$max){
    my $curr = max(($first+$total[$i]),$second);
    $first = $second;
    $second = $curr
  }
  $second
}

printf "%d\n",delete_and_earn([3,4,2]);
printf "%d\n",delete_and_earn([2,2,3,3,3,4]);
```

<br>

***

If you have any suggestion then please do share with us **<perlweeklychallenge@yahoo.com>**.

| &nbsp; [**Advent Calendar 2025**](/blog/advent-calendar-2025) &nbsp; |
