---
title: "BLOG: The Weekly Challenge #064"
date: 2020-06-20T00:00:00+00:00
description: "Blog for the weekly challenge #064."
type: post
image: images/blog/weekly-challenge-064.jpg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

# HEADLINE

This weekly blog is coming a week later than normal. Why? Last week I tried Live Coding for the first time. It was scary but enjoyable experience. It took more time than the blog. Having said that I didn't want to stop blogging about my solutions. So here you go, I am sharing my solutions with you. Just for record, please find below links to the Live Coding videos.

#### [Live Coding: Perl](https://www.youtube.com/watch?v=yPC-Iv6GdZk)

#### [Live Coding: Raku](https://www.youtube.com/watch?v=xmT4DLsR4Iw)

If you have seen my earlier blogs, you must have noticed the patter I follow normally i.e. solve the challenge in **Perl** and then translate the same into **Raku**. This time, I had tough time translating solution to **Minimum Sum Path** into **Raku**. Generally it is pain free but for some reason it wasn't giving the expected result. In the end, I gave up as I was running short of time. Most of my **Raku** trouble, I rely on the **Gang of Raku experts** available on the official **Twitter** handle `@PerlWChallenge`. I have been lucky so far till date to get detailed response. I did post the question on **Twitter** and request for help. Unfortunately, I haven't heard anything so far. So the solution is still pending. For this reason, I didn't submit the **Raku** solution. I would be grateful if you could find the issue in this **[Raku](https://gist.github.com/manwar/4363116c51cb6f38e3392848578e2bfc)** solution.

Let me share my solutions to the **[Perl Weekly Challenge - 064](/perl-weekly-challenge-064)**.

<br>

***

## TASK #1 › Minimum Sum Path
#### Submitted by **[Mohammad S Anwar](http://www.manwar.org)**
#### Reviewed by **[Ryan Thompson](https://ry.ca)**

***

Given an *m* × *n* matrix with non-negative integers, write a script to find a path from top left to bottom right which minimizes the sum of all numbers along its path. You can only move either down or right at any point in time.

***

<br>

Below is the core **sub find_path()** that does most of the work. I relied on **recursive** logic to deal with it. I commented the code appropriately for anyone reading it.

```perl
sub find_path {
    my ($matrix, $row, $col, $path) = @_;
    $path = [] unless defined $path;

    my $rows = $#$matrix;
    my $cols = $#{$matrix->[0]};

    # check boundary?
    return if ($row > $rows || $col > $cols);

    my $final_path = [ @$path ];
    push @$final_path, $matrix->[$row][$col];

    # reached bottom right corner?
    return $final_path if ($row == $rows && $col == $cols);

    my @current_path = ();

    # go right if possible.
    push @current_path, find_path($matrix, $row, $col + 1, $final_path);

    # go down if possible.
    push @current_path, find_path($matrix, $row + 1, $col, $final_path);

    return @current_path;
}
```

Now once we have figured out all possible routes from the top left corner to the bottom right corner, it is time to find the minimum sum path. For this I came up with the following **sub min_sum_path()**.

```perl
sub min_sum_path {
    my ($matrix, $row, $col, $path) = @_;

    my $paths = {};
    $paths->{join " →  ", @$_} = sum @$_ for find_path($matrix, 0, 0);
    return (sort {  $paths->{$a} <=> $paths->{$b} } keys %$paths)[0];
}
```

This is my unsuccessfull attempt of translating the above **sub find_path()**. If look at it carefully, I am not doing anything extravagant here, just line by line translation, but still not getting the desired result for some strange reason.

```perl6
sub find-path(Array[] $matrix, Int $row, Int $col, @path? = ()) {

    my $rows = $matrix.elems - 1;
    my $cols = $matrix.[0].elems - 1;

    # check boundary?
    return @path if $row > $rows || $col > $cols;

    my @final-path = @path.[];
    @final-path.push: $matrix.[$row][$col];

    if ($row == $rows && $col == $cols) {
        dd @final-path;
    }

    # reached bottom right corner?
    return @final-path if $row == $rows && $col == $cols;

    my @current-path = ();

    # go right if possible.
    @current-path.push: find-path($matrix, $row, $col + 1, @final-path);

    # go down if possible.
    @current-path.push: find-path($matrix, $row + 1, $col, @final-path);

    return @current-path;
}
```

Below is the standalone **Perl** solution to the **Minimum Sum Path** task dealing with the given matrix in the task.

```perl
use List::Util qw(sum);

my $matrix = [[ 1, 2, 3 ],
              [ 4, 5, 6 ],
              [ 7, 8, 9 ]];

print min_sum_path($matrix, 0, 0), "\n";
```

Similary, here is the unit test script for the same.

```perl
use Test::More;
use List::Util qw(sum);

is(min_sum_path([[ 1, 2, 3 ],
                 [ 4, 5, 6 ],
                 [ 7, 8, 9 ]],
                 0, 0),
   "1 →  2 →  3 →  6 →  9");

done_testing;
```

<br>

***

## TASK #2 › Word Break
#### Submitted by **[Mohammad S Anwar](http://www.manwar.org)**
#### Reviewed by **[Ryan Thompson](https://ry.ca)**

***

You are given a string `$S` and an array of words `@W`.

Write a script to find out if `$S` can be split into sequence of one or more words as in the given `@W`.

Print the all the words if found otherwise print 0.

***

<br>

Generally the **Task #2** tends to be harder than the **Task #1**. But for the **Week #064**, it was the other way round, at least for me. If you look at the code **sub word_break()** then you would agree with me.

```perl
sub word_break {
    my ($string, $words) = @_;

    my $matched = [ grep { $string =~ /$_/i } @$words ];
    return [0] unless scalar @$matched;

    my $search_order = {};
    foreach my $word (@$matched) {
        $search_order->{index($string, $word)} = $word;
    }

    return [
        map  { $search_order->{$_} }
        sort { $a <=> $b } keys %$search_order
    ];
}
```

I enjoyed getting the **Raku** solution for the above **Perl** solution. I no longer have to look at the notes, thanks to the weekly challenge. Having said, I still learn something new every week. So what did I learn this time? I learnt how to sort hash key numerially. As you know, by default hash key sort alphabetically. Fot this task, I wanted to sort the hash key numerically. A quick google lookup and I had the answer as noted below.

```perl6
sub word-break(Str $string, @words where .all ~~ Str) {

    my @matched = @words.grep: -> $word { $string ~~ / $word / };
    return 0 unless @matched.elems;

    my %search-order = @matched.map(
        -> $word { $string.index($word) => $word });

    return [
        %search-order.keys.sort({ $^a <=> $^b })
        .map({ %search-order{$_} })
    ];
}
```

Time to get the standalone **Perl** app.

```perl
my $string = "perlweeklychallenge";
my $words  = [ "weekly", "challenge", "perl" ];
my $match  = word_break($string, $words);

print sprintf("%s\n", join (", ", @$match));
```

The equivalent **Raku** standalone app as below.

```perl6
sub MAIN(Str :$string = "perlweeklychallenge",
         :@words where .all ~~ Str = ("weekly", "challenge", "perl")) {

    word-break($string, @words).join(", ").say;
}
```

Unit test in **Perl** goes like this.

```perl
use Test::More;
use Test::Deep;

is_deeply(word_break("perlweeklychallenge", [ "weekly", "challenge", "perl" ]),
          [ "perl", "weekly", "challenge" ], "match test");
is_deeply(word_break("perlandraku", [ "python", "ruby", "haskell" ]),
          [ 0 ], "no match test");

done_testing;
```

And **Raku** unit test is even cleaner.

```perl6
use Test;

is word-break("perlweeklychallenge", [ "weekly", "challenge", "perl" ]),
   [ "perl", "weekly", "challenge" ],
   "match test";

is word-break("perlandraku", [ "python", "ruby", "haskell" ]),
   0,
   "no match test";

done-testing;
```

***

That's it for this week. Speak to you soon.
