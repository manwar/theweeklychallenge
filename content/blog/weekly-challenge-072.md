---
title: "BLOG: The Weekly Challenge #072"
date: 2020-08-05T00:00:00+00:00
description: "Blog for the weekly challenge #072."
type: post
image: images/blog/weekly-challenge-072.jpg
author: Mohammad S Anwar
tags: ["Perl", "Raku", "Swift"]
---

# HEADLINE

No **Linked List** related task this week?

I am glad, this week focus was more **Array/List** related. Technical speaking **Array** and **List** aren't the same in **Perl**. I must admit until I read the [**article**](https://www.effectiveperlprogramming.com/2010/01/whats-the-difference-between-a-list-and-an-array) by **brian d foy**, I thought they were the same. As the famous saying, *you learn something new every day*.

Both the tasks, this week were not terribly difficult. I noticed many members of **Team PWC** attempted other languages because they finished the tasks in no time. I also noticed the *Trailing Zeroes* task started interesting discussion on the official [**Twitter handle**](https://twitter.com/PerlWChallenge).

This week, I tried something new for unit test. I have always used `Test::More` for unit test ever since I started working with **Perl**. Recently a friend of mine **Lance Wicks** did a live session taking part in the weekly challenge. I watched the live video realtime. It was great experience, I must admit. During the live session, he introduced `Test2::V0`. It was different and interesting. As you all know, I do share *unit test* in addition to the regular solution. So this time, I decided to use `Test2::V0` for my *unit test* solution.

Like last week, this time also I shared solution in **Swift**. Since the tasks were not difficult, I attempted both [**Trailing Zeroes**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/mohammad-anwar/swift/ch-1.swift) and [**Line Ranges**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-072/mohammad-anwar/swift/ch-1.swift).

To add to the list, I tried *Java* for the first time. A friend on mine (Java Expert) on *LinkedIn* mentioned that he would like to solve **Trim Linked List** task in **Java**. That prompted me to brush up my **Java** memory. I did **Java** nearly **10 years** ago, I took the challenge and solved the [**Trim Linked List**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-071/mohammad-anwar/java/Node.java).

<br>

Let me share my solutions to the **[Perl Weekly Challenge - 072](/perl-weekly-challenge-072)**.

***
## TASK #1 › Trailing Zeroes
#### Submitted by **[Mohammad S Anwar](http://www.manwar.org)**
***

You are given a positive integer `$N (<= 10)`.

Write a script to print number of trailing zeroes in $N!.

***

<br>

There were 2 parts to this task, one is compute factorial and second count trailing zeroes. I have lost count how many times I have written **Perl** code to compute factorial. I think this is my best solution as far as factorial computation is concerned. I love **Perl** regex. I don't miss any opportunity to use it. For counting trailing zeroes, I used regex. Nothing special about the regex in this task.

```perl
sub trailing_zeroes {
    my ($n) = @_;

    die "ERROR: Missing number.\n"
        unless defined $n;
    die "ERROR: Invalid number (<= 10).\n"
        if (($n <= 0) || ($n > 10));

    # generate factorial
    $n *= $_ for 1..$n-1;

    # count trailing zeroes
    $n =~ m/[1-9]?([0]+)$/;

    return (defined $1)?(length($1)):(0);
}
```

I cheated here, if you haven't noticed it.

I literally translated the **Perl** solution. The good thing about **Raku** is that it is very accepting. The only difference is the strange use of `return` statement.

```perl6
sub find-trailing-zeroes(Int $N is copy where $N <= 10) {

    # generate factorial
    $N *= $_ for 1..$N-1;

    # match trailing zeroes
    my $trailing-zeroes = $N ~~ m/ <[1..9]>?(<[0]>+)$ /;

    return
    ($trailing-zeroes)
    ??
    ($N, $trailing-zeroes[0].codes)
    !!
    ($N, 0);
}
```

There is hardly anything to talk about the solution below.

```perl
use strict;
use warnings;

my $N = $ARGV[0];
print trailing_zeroes($N), "\n";
```

I like to experiment with **Raku** if I find spare time. Lets play with the one-liner solution.

Here is alternate solution:

instead of this:

```perl6
say sprintf("%d => %d", $factorial, $zero-count);
```

I could use below:

```perl6
($factorial, $zero-count).join(" => ").say;
```

In fact, If I am not scared, I could replace both lines with the following line.

```perl6
find-trailing-zeroes($N).join(" => ").say;
```

**Raku** rocks as always.

```perl6
use v6.d;

sub MAIN(Int :$N where { $N <= 10 } = 10 ) {
    my ($factorial, $zero-count) = find-trailing-zeroes($N);

    say sprintf("%d => %d", $factorial, $zero-count);
}
```

Time to talk about unit test in **Perl** using `Test2::V0`. For this I had create **package TrailingZeroes**. I loved the special and powerful variable `$CLASS`.

```perl
package TrailingZeroes;

use Moo;

sub count {
    my ($self, $n) = @_;

    die "ERROR: Missing number.\n"
        unless defined $n;
    die "ERROR: Invalid number (<= 10).\n"
        if (($n <= 0) || ($n > 10));

    # generate factorial
    $n *= $_ for 1..$n-1;

    # count trailing zeroes
    $n =~ m/[1-9]?([0]+)$/;

    return (defined $1)?(length($1)):(0);
}

package main;

use strict;
use warnings;

use Test2::V0 -target => 'TrailingZeroes';

my %test_cases = (
    10 => 2,
     9 => 1,
     8 => 1,
     7 => 1,
     6 => 1,
     5 => 1,
     4 => 0,
     3 => 0,
     2 => 0,
     1 => 0,
);

foreach my $n (sort { $a <=> $b } keys %test_cases) {
    is $CLASS->count($n), $test_cases{$n}, "testing \$N=$n";
}

done_testing;
```

raku unit test.

```perl6
use Test;

my %test-cases = (
    10 => 2,
     9 => 1,
     8 => 1,
     7 => 1,
     6 => 1,
     5 => 1,
     4 => 0,
     3 => 0,
     2 => 0,
     1 => 0,
);

for %test-cases.keys.sort({ $^a <=> $^b }) -> $N {
    is find-trailing-zeroes($N.Int)[1],
    %test-cases{$N},
    "testing \$N=$N";
}

done-testing;
```

***
## TASK #2 › Lines Range
#### Submitted by **[Mohammad S Anwar](http://www.manwar.org)**
***

You are given a text file name `$file` and range `$A - $B` where `$A <= $B.

Write a script to display lines range $A and $B in the given file.

***

<br>

I loved the simplicity of the **Perl** solution below. The use of *file operator* makes it elegant.

```perl
sub lines_range {
    my ($file, $a, $b) = @_;

    die "ERROR: Invalid file [$file].\n"     unless (-e $file && -f _ && -r _ && -T _);
    die "ERROR: Missing A.\n"                unless defined $a;
    die "ERROR: Missing B.\n"                unless defined $b;
    die "ERROR: Invalid range [$a \- $b].\n" unless ($a <= $b);

    open(my $F, "<", $file) || die "ERROR: Failed to open [$!]\n";
    my @lines = <$F>;
    close($F);

    print $lines[$_] for --$a..--$b;
}
```

I don't get to work with file when it comes to **Raku**. I use the weekly challenge to keep practicing it. Use of `Empty` is elegant. Also `$file.IO` is such powerful statement.

```perl6
sub lines-range(Str $file, Int $A, Int $B) {

    my @lines = Empty;
    for $A-1 .. $B-1 -> $i {
        @lines.push: $file.IO.lines[$i];
    }

    return @lines;
}
```

With the subroutine defined above the solution became one-liner.

```perl
use strict;
use warnings;

my $F = $ARGV[0];
my $A = $ARGV[1];
my $B = $ARGV[2];

lines_range($F, $A, $B);
```

With `MAIN()` taking care of parameter validation, the one-liner body is enough to deal with the task.

```perl6
use v6.d;

sub MAIN(Str :$file where *.IO.f,
         Int :$A    where * > 0,
         Int :$B    where * >= $A) {

    lines-range($file, $A, $B).join("\n").say;
}
```

Again using `Test2::V0` for unit test and created **package LinesRange**.

```perl
package LinesRange;

use Moo;

sub fetch {
    my ($self, $file, $a, $b) = @_;

    die "ERROR: Invalid file [$file].\n"
        unless (-e $file && -f _ && -r _ && -T _);

    open(my $F, "<", $file) || die "ERROR: Failed to open [$!]\n";
    my @lines = <$F>;
    close($F);

    my @ranges = ();
    push @ranges, $lines[$_] for --$a..--$b;

    return join "", @ranges;
}

package main;

use strict;
use warnings;

use Test2::V0 -target => 'LinesRange';

my $file = "input.txt";
my @test_cases = (
    { A => 1, B => 3, O => "L1\nL2\nL3\n" },
    { A => 2, B => 4, O => "L2\nL3\nL4\n" },
    { A => 3, B => 5, O => "L3\nL4\nL5\n" },
    { A => 4, B => 6, O => "L4\nL5\nL6\n" },
    { A => 5, B => 7, O => "L5\nL6\nL7\n" },
);

foreach my $test (@test_cases) {
    is $CLASS->fetch($file, $test->{"A"}, $test->{"B"}),
       $test->{"O"},
       "testing A=$test->{'A'}, B=$test->{'B'}";
}

done_testing;
```

**Raku** unit is plain out of box.

```perl6
use Test;

my Str $file   = "input.txt";
my @test-cases = (
    { A => 1, B => 3, O => ['L1','L2','L3'] },
    { A => 2, B => 4, O => ['L2','L3','L4'] },
    { A => 3, B => 5, O => ['L3','L4','L5'] },
    { A => 4, B => 6, O => ['L4','L5','L6'] },
    { A => 5, B => 7, O => ['L5','L6','L7'] },
);

for @test-cases -> $test {
    is-deeply lines-range($file, $test{<A>}, $test<B>),
              $test{<O>},
              "testing A=$test{<A>}, B=$test{<B>}";
}

done-testing;
```

***

That's it for this week. Speak to you soon.
