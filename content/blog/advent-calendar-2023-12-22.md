---
title: "Advent Calendar - December 22, 2023"
date: 2023-12-22T00:00:00+00:00
description: "Advent Calendar - December 22, 2023."
type: post
image: images/blog/2023-12-22.jpg
author: Augie De Blieck Jr.
tags: ["Perl"]
---

## [**Advent Calendar 2023**](/blog/advent-calendar-2023)
### | &nbsp; [**Day 21**](/blog/advent-calendar-2023-12-21) &nbsp; | &nbsp; **Day 22** &nbsp; | &nbsp; [**Day 23**](/blog/advent-calendar-2023-12-23) &nbsp; |
***

The gift is presented by `Augie De Blieck Jr.`. Today he is talking about his solution to [**The Weekly Challenge - 238**](/blog/perl-weekly-challenge-238). This is re-produced for `Advent Calendar 2023` from the original [**post**](https://variousandsundry.com/running-sum-or-i-love-recursion/).

***

<br>

[**The Weekly Challenge began as a Perl-focused exercise**](https://theweeklychallenge.org) but has since expanded to let any and all languages in. It’s still mostly `Perl`, but I’ll be using it as an avenue to explore other languages, as well.

<br>

## Running Sum
***

This week’s challenge is to write a script that takes an array and outputs an array where each value is a sum of the numbers before it.

For example:

    Input: (1, 2, 3, 4, 5)
    Output: (1, 3, 6, 10, 15)

<br>

This one is fairly straightforward. You can loop right over it and add the numbers as you go pretty quickly:

<br>

```perl
use Data::Dumper qw/Dumper/;

my @array = (1, 2, 3, 4, 5);
my $sum = 0;
my @sum_array = map{ $sum += $_; } @array;

print Dumper \@sum_array;
```

<br>

`That’s pretty simple, I think`. I also have a `"use strict"` and `"use warnings"` bit at the top, but didn’t think it was necessary for this presentation.

`The variable names are pretty direct`, also. In a real world scenario, I wouldn’t name an array `@array`, but in a challenge like this, it’s fine.

`I love using Data::Dumper` to easily print out all kinds of variables in `Perl`, but especially `hashes of hashes` and `arrays of hashes` and all that second level kind of craziness.

I spent just enough time learning functional programming to take any excuse to use `map{}` or `grep{}` in `Perl`. In my first version of this script, I was updating `@sum_array` inside the `map` statement. Then I realized how silly that was. If you’re mapping over something, the `map` command will produce a new array — just capture that!

There is some advice out there about not using `map` in place of a `for` or `foreach` loop. It’s meant as a data filter. I don’t always follow that advice, but I try to. That’s what I did here.

`Two related hills I’ll die on`: Don’t take the increment/decrement counter away from me, and let me have `“+=”` and `“*=”` and all the rest. It always throws me off when a language doesn’t have that.

<br>

## Refactor for Prettiness
***

Having solved the issue, I took the challenge literally. `Data::Dumper` doesn’t print out an array like this:

<br>

    (1, 3, 6, 10, 15)

<br>

It shows it like this:

<br>

    $VAR1 = [
          1,
          3,
          6,
          10,
          15
        ];

<br>

`So I had to create a prettier printer`. While I’m sure there are a hundred good `Perl` modules I could download from `CPAN` to do it, I wanted to code something myself for this challenge.

That’s how I ended up with this code at the end, including a bit of code to run all three examples from the challenge:

<br>

```perl
# Test Data:
my @test1 = (1, 2, 3, 4, 5);
my @test2 = (1, 1, 1, 1, 1);
my @test3 = (0, -1, 1, 2);
my @array_examples = (\@test1, \@test2, \@test3);


print "Running Sum Code Results:\n";
print "=========================\n\n";

foreach my $array_ref (@array_examples) {

    print "Array: " ;
    pretty_print_array( $array_ref );

    my @results = show_running_sum($array_ref);

    print "Results: ";
    pretty_print_array(\@results);

    print "\n";

}

##
## Subroutines
##

sub show_running_sum {

    ## Ultimately, this is the heart of the solution

    my @array = @{ shift() };
    my $sum = 0;

    return map{ $sum += $_ } @array;

}

sub pretty_print_array {

    ## Total overkill, but I'm new and over-enthusiastic.
    ## In reality, I'd find something on CPAN for this.


    my @array = @{ shift() };
    my $length = scalar @array;
    my $count = 1;

    print "(";

    foreach my $value(@array) {
        print $value;
        print ", " if $count < $length;
        $count++;
    }

    print ")\n";

    return;
}
```

<br>

Turns out, making the final output look prettier took more coding than the challenge, itself. Such is life sometimes…

I’m also sure there are shorter, less readable ways to do it. I’ll take this way. I’ll take readability over `Perl Golf`, though I do enjoy those efforts.

Putting everything in new neat subroutines makes testing easier, also, though I didn’t test for this example. I’m sure I’ll do some `TDD` in a future weekly challenge, though.

[**You can find the full script on my Github**](https://github.com/augiedb/perlweeklychallenge-club/blob/new-branch/challenge-238/augiedb/perl/ch-1.pl).

I also solved this challenge in [**Elixir**](https://github.com/augiedb/perlweeklychallenge-club/blob/new-branch/challenge-238/augiedb/elixir/ch-1.exs), in case you are functionally-curious.

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

| &nbsp; [**Advent Calendar 2023**](/blog/advent-calendar-2023) &nbsp; |
