---
title: "BLOG: The Weekly Challenge #057"
date: 2020-04-26T00:00:00+00:00
description: "Blog for the weekly challenge #057."
type: post
image: images/blog/weekly-challenge-057.jpg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

# HEADLINE

Of the two tasks, my favourite was **Shortest Unique Prefix**. I must confess I have never done this before. It was fun solving though. I enjoyed it thoroughly. As always, **Raku** solution looks more elegant, in my hunble opinion. With every passing week, I learn something new in **Raku** and get to practice what I learnt so far. The weekly challenge is giving me an opportunity to explore the nitty gritty of **Raku**.

***

# PERL

***

## Task #1: Invert Tree

***

The **Invert Tree** was supposed to be the simple task but it turned to be harder than the other task. I solved this task at the end after solving the **Shortest Unique Prefix** task. However when I saw the end result, it is embarassingly easy. I took time to come up data strucure to represent the tree in such a way that my task becomes easier.

          1
         / \
        2   3
       /\   /\
      4 5  6  7

```perl
my $tree = {
     1 => [ [ 2, [ [ 4 ],
                   [ 5 ],
                 ],
            ],
            [ 3, [ [ 6 ],
                   [ 7 ],
                 ],
            ],
          ],
};
```

Once the data structure sorted, it becomes easier to define the **sub mirror()** as below. If you see, there are 3 lines that actually doing anything. It doesn't demand any explanation whatsoever. It is taking the help of **recursive** method call.

```perl
sub mirror {
    my ($branch) = @_;

    ($branch->[0], $branch->[1]) = ($branch->[1], $branch->[0]);
    mirror($branch->[0][1]) if defined $branch->[0][1];
    mirror($branch->[1][1]) if defined $branch->[1][1];

    return $branch;
}
```

Now it is time to build the solution using the above **sub mirror()**. Like always it is just thrin wrapper around it as you can see. For this task, I used **CPAN** module **Data::Dump**. It dumps the data structure cleanly.

```perl
use Data::Dump qw(dump);

my $tree = {
     1 => [ [ 2, [ [ 4 ],
                   [ 5 ],
                 ],
            ],
            [ 3, [ [ 6 ],
                   [ 7 ],
                 ],
            ],
          ],
};

print sprintf("Before: %s\n", dump($tree));
mirror($tree->{1});
print sprintf("After : %s\n", dump($tree));
```

Let's do the unit test version of the above solution. For this I used the same tree as above and also added one more tree for testing. Rest is just straight forward calling **sub mirror()** passing the tree and comparing the result.

```perl
use Test::More;
use Data::Dump qw(dump);

my $tree_1 = {
    1 => [ [ 2,
             [ [ 4 ],
               [ 5 ],
             ],
           ],
           [ 3,
             [ [ 6 ],
               [ 7 ],
             ],
           ],
         ],
};

my $tree_2 = {
    1 => [ [ 2,
             [ [ 4 ],
               [ 5 ],
             ],
           ],
           [ 3,
             [ [ 6 ],
               [ 7,
                 [ [ 8 ],
                   [ 9 ],
                 ],
               ],
             ],
           ],
         ],
};

mirror($tree_1->{1});
mirror($tree_2->{1});

is (dump($tree_1), "{ 1 => [[3, [[7], [6]]], [2, [[5], [4]]]] }", "testing tree 1");
is (dump($tree_2), "{ 1 => [[3, [[7, [[9], [8]]], [6]]], [2, [[5], [4]]]] }", "testing tree 2");

done_testing;
```

***

## Task #2: Shortest Unique Prefix

***

My favourite task of the week, **Shortest Unique Prefix**. I took my own time to define the **sub shortest_unique_prefix()**. It was fun coding. I am happy with the final result. It may not be perfect but it does the job in quick time.

```perl
sub shortest_unique_prefix {
    my ($words) = @_;

    my $p = [];
    foreach my $word (@$words) {
        my $i = 1;
        my $l = length($word);
        while ($i < $l) {
            my $char  = substr($word, 0, $i);
            my $count = scalar(grep { m/^$char/ } @$words);

            ($count > 1) && $i++ and next;
            push @$p, $char and last;
        }
    }

    return $p;
}
```

Building solution using the above **sub shortest_unique_prefix()** became a piece of cake as you see below.

```perl
my $words  = [ "alphabet", "book", "carpet", "cadmium", "cadeau", "alpine" ];
my $unique = shortest_unique_prefix($words);

print sprintf("[ %s ]\n", join(", ", @$unique));
```

Sames goes for unit test version of the above.

```perl
use Test::More;
use Test::Deep;

my $unit_tests = [
    { in => [ "alphabet", "book", "carpet", "cadmium", "cadeau", "alpine" ],
     out => [ "alph", "b", "car", "cadm", "cade", "alpi" ]
    }
];

foreach my $unit_test (@$unit_tests) {
    my $in  = $unit_test->{in};
    my $out = $unit_test->{out};
    is_deeply(shortest_unique_prefix($in), $out);
}

done_testing;
```

***

# RAKU

***

## Task #1: Invert Tree

***

I basically cheated here to be very honest. I simply translated the **Perl** version of **sub mirror()** defined above. I am happy as long as it doesn't look like **Perl**.

```perl6
sub mirror($branch) {

    ($branch.[0], $branch.[1]) = ($branch.[1], $branch.[0]);
    mirror($branch.[0][1]) if defined $branch.[0][1];
    mirror($branch.[1][1]) if defined $branch.[1][1];

    return $branch;
}
```

Thin wrapper around the above **sub mirror()** gave me the desired result. For the first time, I used **.raku** to capture the data structure. It was suggested by **JJ Merelo**.

```perl6
use v6.d;

my $tree = {
     1 => [ [ 2,
              [ [ 4 ],
                [ 5 ],
              ],
            ],
            [ 3,
              [ [ 6 ],
                [ 7 ],
              ],
            ],
          ],
};

say sprintf("Before: %s", $tree.raku);
mirror($tree.{1});
say sprintf("After : %s", $tree.raku);
```

Getting unit test version wasn't difficult either as you see.

```perl6
my $tree_1 = {
    1 => [ [ 2,
             [ [ 4 ],
               [ 5 ],
             ],
           ],
           [ 3,
             [ [ 6 ],
               [ 7 ],
             ],
           ],
         ],
};

my $exp_1 = {
    1 => [ [ 3,
             [ [ 7 ],
               [ 6 ],
             ],
           ],
           [ 2,
             [ [ 5 ],
               [ 4 ],
             ],
           ],
         ],
};

my $tree_2 = {
    1 => [ [ 2,
             [ [ 4 ],
               [ 5 ],
             ],
           ],
           [ 3,
             [ [ 6 ],
               [ 7,
                 [ [ 8 ],
                   [ 9 ],
                 ],
               ],
             ],
           ],
         ],
};

my $exp_2 = {
    1 => [ [ 3,
             [ [ 7,
                 [ [ 9 ],
                   [ 8 ],
                 ],
               ],
               [ 6 ],
             ],
           ],
           [ 2,
             [ [ 5 ],
               [ 4 ],
             ],
           ],
         ],
};

mirror($tree_1.{1});
mirror($tree_2.{1});

is-deeply $tree_1, $exp_1, "testing tree 1";
is-deeply $tree_2, $exp_2, "testing tree 2";

done-testing;
```

***

## Task #2: Shortest Unique Prefix

***

For this task, I used something new that I learnt last week i.e. "|$word". Once I shared my solution on the official **Twitter** handle `PerlWChallenge`, a friend of mine, `@HrBollermann` suggested I should use **starts-with()** instead of heavy loaded **regex**.

```perl6
sub shortest-unique-prefix($words where .all ~~ Str) {
    my $p = [];
    for |$words -> $word {
        my $i = 1;
        my $l = $word.chars;
        while $i < $l {
            my $char  = $word.substr(0, $i);
            # before :
            # my $count = $words.grep({ m/^$char/ }).elems;
            # after  : suggested by @HrBollermann
            my $count = $words.grep( *.starts-with( $char ) ).elems;

            $i++;
            next if $count > 1;
            $p.push: $char and last;
        }
    }

    return $p;
}
```

A very straight forward solution didn't took long to setup.

```perl6
use v6.d;

unit sub MAIN();

my $words  = [ "alphabet", "book", "carpet", "cadmium", "cadeau", "alpine" ];
my $unique = shortest-unique-prefix($words);

say sprintf("[ %s ]", $unique.join(", "));
```

Unit test version didn't trouble me this time.

```perl6
use Test;

my $unit-tests = [
    { in => [ "alphabet", "book", "carpet", "cadmium", "cadeau", "alpine" ],
     out => [ "alph", "b", "car", "cadm", "cade", "alpi" ]
    }
];

for $unit-tests -> (:@in, :@out) {
    is-deeply(shortest-unique-prefix(@in), @out);
}
```

That's it for this week. Speak to you soon.
