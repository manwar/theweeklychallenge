---
title: "BLOG: The Weekly Challenge #056"
date: 2020-04-19T00:00:00+00:00
description: "Blog for the weekly challenge #056."
type: post
image: images/blog/weekly-challenge-056.jpg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

Before I say anything about my contributions, I would like to share my sweet encounter with **Raku**. Last week while working on the task **Flip Binary** using **Raku**, I was struggling to figure out all the binary strings with maximum **1s**. I had the results in a **Hash** where key was the binary string and value was the total count of **1s** in it. The idea was to sort the **Hash** by values first then sort by keys. After posting the question on the Twitter handle `@PerlWChallenge`, I received the below solution by `PawgChamp (@Mrofnet)`.

```perl6
for %result.sort({ $^b.value <=> $^a.value || $^a.key cmp $^b.key }) -> $pair {
```

With the above suggestions, I wrote the following subroutine flipped-binary():

```perl6
sub flipped-binary(%result) {

    my Int $value;
    my @r;
    for %result.sort({ $^b.value <=> $^a.value || $^a.key cmp $^b.key }) -> $pair {

        my $_k = $pair.keys;
        my $_v = $pair.values.Str.Int;

        if defined $value {
            if $_v == $value {
                push @r, $_k;
            }
        }
        else {
            $value = $_v;
            push @r, $_k;
        }
    }

    return @r.join(" | ");
}
```

Although, it does the job but somewhere deep, I wasn't still happy with the end result as I confessed in the [blog](/blog/weekly-challenge-055) itself.

While going through the blogs by the **Team PWC**, I came across a [blog](https://rafraichisso.ir/2020/04/11/pwc-55) by **Shahed Nooshmand**. In the blog, I found magical one-liner in **Raku** below:

```perl6
say .key for %flips.grep: *.value == max %flips.values
```

The above one-liner in **Raku** does all what I was trying to do in the **sub flipped-binary(%result)**.

However, I noticed one small issue that it wasn't returning keys in sorted order. With little **Raku** knowledge that I have gathered so far, I decided to improve it. For this I came up with short test script **pwc.p6** to re-create the issue.

```perl6
#!/usr/bin/env perl6

use v6.c;

my %result = (
    'd' => 1,
    'a' => 3,
    'c' => 5,
    'b' => 5,
    'e' => 4
);

say .key for %result.grep: *.value == max %result.values;
```

The above script on execution, returns this:

        $ perl6 pwc.p6
        c
        b

I was expecting to return keys in sorted order, so I added **sort** in it.

```perl6
#!/usr/bin/env perl6

use v6.c;

my %result = (
    'd' => 1,
    'a' => 3,
    'c' => 5,
    'b' => 5,
    'e' => 4
);

say .key for %result.sort.grep: *.value == max %result.values;
```

Lets execute the script again now:

        $ perl6 pwc.p6
        b
        c

Almost there, it returned the same result as my bulky **sub flipped-binary(%result)** except the join bit.

Time to do the join, so I did an experiment and it worked first time. I am not sure if it is the right thing to do.

```perl6
#!/usr/bin/env perl6

use v6.c;

my %result = (
    'd' => 1,
    'a' => 3,
    'c' => 5,
    'b' => 5,
    'e' => 4
);

%(%result.grep: *.value == max %result.values).keys.sort.join(" | ").say;
```

Final execution gives the expected result.

        $ perl6 pwc.p6
        b | c

So now I can replace the chunky **sub flipped-binary(%result)** with the following one-liner.

```perl6
%(%result.grep: *.value == max %result.values).keys.sort.join(" | ").say;
```
***
***

# PERL

***
***

## Task #1: Diff-K

***

The **Diff-K** task is the easiest of the two and didn't require much brain work. With the help of two **foreach {}**, job is done. I always aim to do **Task #1** as one-liner to make it challenging but always take the shortcut because of time constraint. One day, may be I will find the time.

Lets talk about the core **sub find_match()** that does everything. The outerloop goes through every index of the input list. The inner loop is relative to the outer loop and goes till the end of the list. In the process, it checks if the difference between the pairs match the given **$K**.

```perl
sub find_match {
    my ($K, @L) = @_;

    my $S = scalar(@L);
    my $matched = [];
    foreach my $i (0 .. --$S) {
        foreach my $j ($i+1 .. $S) {
            my $k = $L[$i] - $L[$j];
            if ($k == $K) {
                push @$matched, sprintf("%2s,%2s => (%2s - %2s) => %d", $i, $j, $L[$i], $L[$j], $k);
            }
        }
    }

    return $matched;
}
```

The standalone app, just doing the rituals of validating user input. With help of **CPAN** module **List::Util**, I generate random 10 numbers between 1 and 50. And then sort the list in descending order. Rest of the work is done in the core **sub find_match()**.

```perl
use List::Util 1.54 qw(sample);

my $K = $ARGV[0];
die "ERROR: Missing non-negative number (k).\n" unless defined $K;
die "ERROR: Invalid k received [$K].\n"         unless $K > 0;

my $S = 10;
my @L = sort { $b <=> $a } sample ($S, (1 .. 50));

print sprintf("\@L: [%s]\n", join(", ", @L));
my $matched = find_match($K, @L);

(@$matched)
?
(print join("\n", @$matched), "\n")
:
(print "Oops, none matched.\n");
```

As the norm, I am now doing the unit test version, for this I am taking the help of **CPAN** modules **Test::More** and **Test::Deep**. Here I setup 3 test cases as below and goes through each one by one.

```perl
use Test::More;
use Test::Deep;

my $unit_tests = {
    2 => {
        in  => [10, 8, 7, 6, 1],
        out => [ " 0, 1 => (10 -  8) => 2",
                 " 1, 3 => ( 8 -  6) => 2" ]
    },
    3 => {
        in  => [20, 15, 14, 10, 7, 6, 4, 1],
        out => [ " 3, 4 => (10 -  7) => 3",
                 " 4, 6 => ( 7 -  4) => 3",
                 " 6, 7 => ( 4 -  1) => 3"]
    },
    4 => {
        in  => [50, 40, 30, 20, 10],
        out => [ ]
    },
};

foreach my $k (sort keys %$unit_tests) {
    my $in  = $unit_tests->{$k}->{in};
    my $out = $unit_tests->{$k}->{out};

    is_deeply(find_match($k, @$in), $out, "testing with k=$k");
}

done_testing;
```
***

## Task #2: Path Sum

***

The task **Path Sum** was the tricky. I made my mind right from the beginning that I will solve this without creating code for **Binary Tree**. Once I defined the tree in **Perl** as hash data, the rest of job becomes easier. I know it is hackery and not proper solution. I wouldn't do it this way if it was for real as it is not scalable. For this task, it was OK.

```perl
sub find_matched_paths {
    my ($TREE, $SUM) = @_;

    my $paths = [];
    foreach my $k (keys %$TREE) {
        my $path = [ $k+0 ];
        foreach my $i (keys %{$TREE->{$k}}) {
            my $_path = [ $k, $i+0 ];
            foreach my $j (keys %{$TREE->{$k}->{$i}}) {
                push @$_path, $j+0;
                if (scalar(@{$TREE->{$k}->{$i}->{$j}})) {
                    foreach (@{$TREE->{$k}->{$i}->{$j}}) {
                        push @$paths, [ @$_path, $_+0 ];
                    }
                }
                else {
                    push @$paths, [ @$_path ];
                }
            }
        }
    }

    my $matched_paths = [];
    foreach my $path (@$paths) {
        my $total = 0;
        $total += $_ foreach @$path;
        push @$matched_paths, join(" -> ", @$path) if ($total == $SUM);
    }

    return $matched_paths;
}
```

For standalone app, I just defined the tree as hash data like below. For the main task, I pass the tree to the core **sub find_matched_paths()** and print the result back as simple as that.

```perl
my $SUM  = 22;
my $TREE = {
    5 => { 4 => { 11 => [7, 2] },
           8 => { 13 => [],
                   9 => [1],
                },
         },
};

print join("\n", @{find_matched_paths($TREE, $SUM)}), "\n";
```

For unit test, I used the same tree as was in the **standalone app** as the only test case.

```perl
use Test::More;
use Test::Deep;

my $unit_tests = {
    22 => {
            5 => { 4 => { 11 => [7, 2] },
                   8 => { 13 => [],
                           9 => [1],
                        },
                 },
          },
};

foreach my $sum (keys %$unit_tests) {
    is_deeply (find_matched_paths($unit_tests->{$sum}, $sum), ["5 -> 4 -> 11 -> 2"]);
}

done_testing;
```

***
***

# RAKU

***
***

## Task #1: Diff-K

***

For the first time, I put the constraint alongwith the parameters as I have learnt from others. I know even a better way of dealing with constraint. I will try that next time by creating. I know it is still not there yet. I am happy that it doesn't look like **Perl** anymore.

```perl6
sub find-match(Int $K, @L where .all ~~ Int) {
    my $matched = [];
    my $S = @L.elems;
    my $fmt = "%2s,%2s => (%2s - %2s) => %d";
    for 0 .. --$S -> $i {
        for $i+1 .. $S -> $j {
            my $k = @L[$i] - @L[$j];
            if $k == $K {
                $matched.push: sprintf($fmt, $i, $j, @L[$i], @L[$j], $k);
            }
        }
    }

    return $matched;
}
```

For this standalone app, the main challenge was to pick sample numbers from the given list of numbers. I know from my past solutions, **pick()** is the right candidate.

```perl6
my @L = (1..50).pick(10);
```

The above line would given 10 random numbers between 1 and 50. Next I wanted to sort the list.

```perl6
my @L = (1..50).pick(10).sort;
```

One last bit, I want to reverse it.

```perl6
my @L = (1..50).pick(10).sort.reverse;
```

Now I have the numbers to play with. The rest is history as they say.

```perl6
use v6.d;

multi sub MAIN(*@) is hidden-from-USAGE {
    say $*USAGE;
    say "\nERROR: Invalid k, must be > 0 !!!";
}

multi sub MAIN(Int :$K where * > 0 = 3, Int :$S = 10) {

    my Int @L = (1..50).pick($S).sort.reverse;
    say "\@L = [" ~ @L.join(", ") ~ "]";
    my $matched = find-match($K, @L);

    (@$matched.elems > 0)
    ??
    (@$matched.join("\n").say)
    !!
    (say "Oops, none matched.");
}
```

The unit version of the above gave me really hard time. I troubled many friends on `PerlWChallenge` with my stupid questions. Having setup the test cases, I wanted to fetch list assigned to the key **in** and pass it to the **sub find-match()**. I keep getting constraint error.

```perl6
my @L = $unit-tests{$K}<in>;
```

I blame it to my **Perl** thinking. It turned out there are ways to deal with it in **Raku**.

Below one suggested by `@smokemachine`

```perl6
my @L = $unit-tests{$K}<in><>;
```

And this one suggested by `@khaledelboray`

```perl6
my @L = $unit-tests{$K}<in>.Slip;
```

I kept both, for future reference purpose. Other than that, everything is just cake walk.

```perl6
use Test;

my $unit-tests = :{
    2 => {
        in  => ( 10, 8, 7, 6, 1 ),
        out => [ " 0, 1 => (10 -  8) => 2",
                 " 1, 3 => ( 8 -  6) => 2" ]
    },
    3 => {
        in  => ( 20, 15, 14, 10, 7, 6, 4, 1 ),
        out => [ " 3, 4 => (10 -  7) => 3",
                 " 4, 6 => ( 7 -  4) => 3",
                 " 6, 7 => ( 4 -  1) => 3"]
    },
    4 => {
        in  => ( 50, 40, 30, 20, 10 ),
        out => [ ]
    },
};

for $unit-tests.keys -> $K {
    # contributed by @smokemachine
    my @L = $unit-tests{$K}<in><>;
    # same as above, contributed by @khaledelboray
    # my @L = $unit-tests{$K}<in>.Slip;
    my $R = $unit-tests{$K}<out>;

    is-deeply(find-match($K, @L), $R, "testing with K=$K");
}

done-testing;
```
***

## Task #2: Path Sum

***

This one just pure **Raku** translation of my earlier **Perl** solution. I made sure it doesn't look like **Perl**.

```perl6
sub find-matched-paths(Hash[] $TREE, Int $SUM) {

    my $paths = [];
    for $TREE.keys -> $k {
        my $path = [ $k.Int ];
        for $TREE{$k}.keys -> $i {
            my $_path = [ $k.Int, $i.Int ];
            for $TREE{$k}{$i}.keys -> $j {
                $_path.push: $j.Int;
                if $TREE{$k}{$i}{$j}.elems > 0 {
                    for $TREE{$k}{$i}{$j} -> $e {
                        $_path.push: $e.Int;
                    }
                    $paths.push: $_path;
                }
                else {
                    $paths.push: [ @$_path ];
                }
            }
        }
    }

    my $matched-paths = [];
    for @$paths -> $path {
        $matched-paths.push: $path.join(" -> ") if $SUM == [+] $path;
    }

    return $matched-paths;
}
```

One thing, I tried new in this solution is the use of **Hash[]**. What does this mean? As per my understanding, the value of the keys in hash **$TREE** is **Hash**.

```perl6
use v6.d;

sub MAIN() {

    my Int $SUM = 22;
    my Hash[] $TREE = :{
        5 => { 4 => { 11 => [7, 2] },
               8 => { 13 => [],
                       9 => [1],
                    },
             },
    };

    say find-matched-paths($TREE, $SUM).join("\n");
}
```

I just love doing unit test in **Raku**. It is so much fun.

```perl6
use Test;

my $unit-tests = :{
    22 => { in => { 5 => { 4 => { 11 => [7, 2] },
                           8 => { 13 => [], 9 => [1] },
                         },
                  },
           out => [ "5 -> 4 -> 11 -> 2" ],
          },
};

for $unit-tests.keys -> $SUM {
    my $TREE = $unit-tests{$SUM}<in>;
    my $OUT  = $unit-tests{$SUM}<out>;

    is-deeply(find-matched-paths($TREE, $SUM), $OUT, "Tree with sum $SUM")
}

done-testing;
```

That's it for this week. Speak to you soon.
