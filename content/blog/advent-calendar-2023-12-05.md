---
title: "Advent Calendar - December 5, 2023"
date: 2023-12-05T00:00:00+00:00
description: "Advent Calendar - December 5, 2023."
type: post
image: images/blog/2023-12-05.jpg
author: Avery Adams
tags: ["Perl"]
---

## [**Advent Calendar 2023**](/blog/advent-calendar-2023)
### | &nbsp; [**Day 4**](/blog/advent-calendar-2023-12-04) &nbsp; | &nbsp; **Day 5** &nbsp; |
***

The gift is presented by `Avery Adams`. Today he is talking about his solution to [**The Weekly Challenge - 210**](/blog/perl-weekly-challenge-210). This is re-produced for `Advent Calendar 2023` from the original [**post**](https://dev.to/oldtechaa/perl-weekly-challenge-210-1ojj).

***

<br>

## Perl Weekly Challenge #210
***

I'm back this week with [**PWC #210**](https://theweeklychallenge.org/blog/perl-weekly-challenge-210). Last week I was very busy and spent a long time reviewing other peoples' far more efficient solutions to `#208`, so I didn't get to doing any solutions for `#209`. The usual disclaimer about this could contain spoilers, so if you're trying to solve the challenge yourself you may want to skip this post for now. So let's get right into this.

### Kill And Win
***

For this challenge I decided to use some of the tools I learned about in the solutions other people submitted for `#208`, especially the ways hashes can make the process more efficient. The goal is to find the number in the list where you can delete the most points by deleting the number and its adjacent numbers plus and minus one. You get to count each number however many times it appears in the list.

My code is actually very simple for this one. I hope it's fairly elegant looking to others, but I'll have to see the solutions others provide. Essentially I just create a hash where for every number appearing in the list, it tells us how many times it appears. The key is the number, the value is the number of times it appears. It then iterates once through all the numbers that occur in the list and tests the total of it and its adjacent numbers if they exist. Then it checks the total against the previous winner. Pretty simple, really.

<br>

```perl
#!/usr/bin/perl

use strict;
use v5.10;

my %hash;
$hash{$_}++ for @ARGV;

my $max;
for my $int (keys %hash) {
    my $total = (($int - 1) * $hash{$int - 1}) + ($int * $hash{$int}) + (($int + 1) * $hash{$int + 1});
    $max = $total if $total > $max or !defined($max);
}

say $max if defined $max;
```

<br>

### Number Collision
***

Here's another interesting project. Originally I thought the first one would be hard and this one easy, but it turned out the opposite. This one I have to imagine has a better solution than I came up with, so I look forward to seeing the other solutions. Maybe others will use a sort of shifting mechanism, whereas I'm using good old-fashioned comparisons and splices.

What I do here is I make a collision. So this is the sum of the two numbers I'm comparing as I go through the list. If they're both positive I continue. If the second one is a negative with a smaller absolute value, I kill it and test the same left number with the new right replacement. Having said that about absolute values, I'm now thinking about how I could use abs() to make it cleaner when testing the positivity of a number, but I don't really intend to change it now.

Moving on, if the numbers are opposites, I kill both of them and test the numbers on either side. Speaking of zero values (as the collision value is when the numbers are opposites), I'm expecting there to be no zeros in the dataset. It's not stated, but zeros defeat the purpose of the challenge. Finally, if the right operand is a greater negative than the left positive, we loop backwards through any positive integers until we find one that beats the negative, or we find a negative.

<br>

### Here's the code:
***

<br>

```perl
#!/usr/bin/perl

use strict;
use v5.10;

my @list = @ARGV;
for (my $index = 0; $index < $#list; $index++) {
    my $collision = $list[$index] + $list[$index + 1];
    if ($collision > $list[$index]) {next}
    elsif ($collision > 0) {
        splice @list, $index + 1, 1;
        $index--;
    } elsif ($collision == 0) {
        splice @list, $index, 2;
        $index -= 2;
    } elsif (0 > $collision > $list[$index + 1]) {
        splice @list, $index, 1;
        for (my $index2 = $index - 1; $index2 >= 0 and $list[$index2] > 0; $index2--) {
            if (-$list[$index] > $list[$index2]) {
                splice @list, $index2, 1;
                $index--;
                $index2--;
            } elsif (-$list[$index] == $list[$index2]) {
                splice @list, $index2, 2;
                $index -= 2;
            } else {
                splice @list, $index, 1;
                $index--;
            }
        }
    }
}
say $_ for @list;
```

<br>

That's all for this week. Hopefully I should have more solutions for you next week. Stay tuned!

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

| &nbsp; [**Advent Calendar 2023**](/blog/advent-calendar-2023) &nbsp; |
