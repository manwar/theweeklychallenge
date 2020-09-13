---
title: "BLOG: The Weekly Challenge #077"
date: 2020-09-13T00:00:00+00:00
description: "Blog for the weekly challenge #077."
type: post
image: images/blog/weekly-challenge-077.jpg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

# HEADLINE

<br>

I am back to my routine life but still not there fully. I am going to talk about my **Perl** and **Raku** solutions to both tasks to start with. Last week, I only talked about my **Perl** and **Raku** solutions to the task **Prime Sum**. This week also, I skipped **Swift** contributions like last week, sorry. I would blame my laziness.

I am happy with my effort this week. It gives me immense pleasure when I do **Raku** implementation completely different from **Perl**.

<br>

### YouTube Weekly

Like last week, this time also I made just one video for the task **Fibonacci Sum** but couldn't upload to **YouTube** because of dog slow internet connection. I will upload it sometime later this week.

You can still browse through past videos, if you want. Please checkout my **[YouTube Channel](https://www.youtube.com/channel/UCT91RkThBWByo1NL_M8R8Ig)**.

<br>

Last but not the least, I would to love hear your **view/opinion** with regard to anything I do.

Please get in touch with me by email: <mohammad.anwar@yahoo.com>.

Let me share my solutions to the **[The Weekly Challenge - 077](/perl-weekly-challenge-077)**.

***
## TASK #1 › Fibonacci Sum
#### Submitted by **[Mohammad S Anwar](http://www.manwar.org)**
***

Write a script to find out all possible combination of Fibonacci Numbers required to get `$N` on addition.

You are **NOT** allowed to repeat a number. Print 0 if none found.

***

<br>

The `Fibonacci Sum` task is more or less same as last week `Prime Sum` task. However, for this week task, I didn't try anything extravagant. I broke the task into subtasks as below:

#### 1) Find the Fibonacci series upto the given number.
#### 2) Find the combination of numbers of the generated series.
#### 3) Capture the combination of numbers that returns the given number on summation.
#### 4) Finally print all the captured combinations.

<br>

I came up with the following `sub fibonacci_series_upto()` to address the **subtask #1**.

```perl
sub fibonacci_series_upto {
    my ($num) = @_;

    my @fibonacci = (1, 2);
    while ($fibonacci[-1] + $fibonacci[-2] <= $num) {
        push @fibonacci, ($fibonacci[-1] + $fibonacci[-2]);
    }

    return \@fibonacci;
}
```

Then comes the **subtask #2** and **subtask #3**, so for that I created the `sub fibonacci_sum()` as below.

Here I am taking the help of **CPAN** module `Algorithm::Combinatorics`.

```perl
sub fibonacci_sum {
    my ($fibonacci, $sum) = @_;

    my $fibonacci_sum = [];
    foreach my $i (1 .. $sum) {
        last if ($i > @$fibonacci);
        foreach my $comb (combinations($fibonacci, $i)) {
            my $_sum = 0;
            $_sum += $_ for @$comb;
            push @$fibonacci_sum, $comb if ($_sum == $sum);
        }
    }

    return $fibonacci_sum;
}
```

Finall **subtask #4**, the following `sub p()` is more than enough.

```perl
sub p {
    my ($fibonacci_sum) = @_;

    foreach (@$fibonacci_sum) {
        print sprintf("%s\n", join ", ", @$_);
    }
}
```
<br>

For **Raku**, I followed the same pattern basically. But the power of **Raku** made it look compact. It may not be elegant solution but I like it. For fellow **Perl** dev, **Raku** has slightly different syntax to fetch the elements from the bottom of the list.

For example, you would do `$list[-1]` to get the last element in the list in **Perl** but in case of **Raku**, you would have to do `@list[*-1]`.

Did you notice something else?

The sigil also changed in the **Raku**.

<br>

```perl6
sub fibonacci-series-upto(Int $num where $num > 0) {

    my @fibonacci = (1, 2);
    while @fibonacci.[*-1] + @fibonacci.[*-2] <= $num {
        @fibonacci.push: @fibonacci.[*-1] + @fibonacci.[*-2];
    }

    return @fibonacci;
}
```

For **subtask #2** and **subtask #3**, I simply translated the **Perl** subroutine. My favourite bit in the subroutine is line:

```perl6
my $_sum = [+] $comb;
```

which is equivalent to the following 2 lines in **Perl**.

```perl
my $_sum = 0;
$_sum += $_ for @$comb;
```

Isn't **Raku** cool?


```perl6
sub fibonacci-sum(Int $sum where $sum > 0) {

    my @fibonacci     = fibonacci-series-upto($sum);
    my @fibonacci_sum = Empty;
    for 1 .. $sum -> $i {
        last if $i > @fibonacci.elems;
        for @fibonacci.combinations: $i -> $comb {
            my $_sum = [+] $comb;
            @fibonacci_sum.push: $comb if $_sum == $sum;
        }
    }

    return |@fibonacci_sum;
}
```

<br>

Having done all the hard work, time to glue together all the subroutines to get the task done.

I tried to make it look method chaining as in **Raku**,

<br>

```perl
use strict;
use warnings;
use Algorithm::Combinatorics qw(combinations);

my $N = $ARGV[0];

print "USAGE: perl $0 <positive_number>\n" and exit
    unless (defined $N && $N > 0);
p(fibonacci_sum(fibonacci_series_upto($N), $N));
```

<br>

Here is the compact solution to the task in **Raku**.

<br>

```perl6
use v6.d;

sub MAIN(Int :$N where $N > 0) {
    fibonacci-sum($N).join("\n").say;
}
```

<br>

Standard unit test to cover the given the example in the task.

<br>

```perl
use strict;
use warnings;
use Test::More;
use Test::Deep;
use Algorithm::Combinatorics qw(combinations);

is_deeply(fibonacci_sum(fibonacci_series_upto(6), 6),
          [ [1,5], [1,2,3] ],
          "fibonacci sum = 6");

is_deeply(fibonacci_sum(fibonacci_series_upto(9), 9),
          [ [1,8], [1,3,5] ],
          "fibonacci sum = 9");

done_testing;
```

<br>

**Raku** unit test looks beautiful.

<br>

```perl6
use Test;

is-deeply fibonacci-sum(6), ((1,5), (1,2,3)), "fibonacci sum = 6";
is-deeply fibonacci-sum(9), ((1,8), (1,3,5)), "fibonacci sum = 9";

done-testing;
```

<br>

***
## TASK #2 › Lonely X
#### Submitted by **[Mohammad S Anwar](http://www.manwar.org)**
***

You are given `m x n` character matrix consists of `O` and `X` only.

Write a script to count the total number of `X` surrounded by `O` only. Print `0` if none found.

***

<br>

For the task **Lonely X**, I ask the user to provide the matrix dimension i.e. rows and columns. Then I generate the matrix with random `O` and `X`. The generated matrix then used to as an example to solve the task.

The following `sub get_matrix()` is responsible to generate a random matrix given **$rows** and **$cols**. To help the user, it also dump the generated matrix by calling `sub display()`.

<br>

```perl
sub get_matrix {
    my ($rows, $cols) = @_;

    my $min    = 0;
    my $max    = 9;
    my $array  = [ 'X', 'O', 'X', 'X', 'X', 'O', 'O', 'O', 'X', 'O' ];
    my $matrix = [];

    foreach my $r (0..$rows) {
        foreach my $c (0..$cols) {
            $matrix->[$r][$c] = $array->[int($min + rand($max - $min))];
        }
    }

    display($matrix);
    return $matrix;
}
```

The `sub display()` is defined as below:

```perl
sub display {
    my ($matrix) = @_;

    print "Matrix:\n";
    foreach my $r (0..$#$matrix) {
        print sprintf("[ %s ]\n", join ', ', @{$matrix->[$r]});
    }
    print "\n";
}
```

The main task of is carried out by the `sub find_lonely_x()`, which accepts the matrix then goes through each cell and checks all it neighbours to find out if it is lonely as per the definition.

```perl
sub find_lonely_x {
    my ($matrix) = @_;

    my $rows = $#$matrix;
    my $cols = $#{$matrix->[0]};

    my @lonely_x = ();
    foreach my $row (0..$rows) {
        foreach my $col (0..$cols) {
            next unless $matrix->[$row][$col] eq 'X';

            my @neighbours = ();
            # top
            push @neighbours, $matrix->[$row-1][$col] if $row > 0;

            # bottom
            push @neighbours, $matrix->[$row+1][$col] if $row < $rows;

            # left
            push @neighbours, $matrix->[$row][$col-1]   if $col > 0;
            # diagonal top left
            push @neighbours, $matrix->[$row-1][$col-1] if $row > 0     && $col > 0;
            # diagonal bottom left
            push @neighbours, $matrix->[$row+1][$col-1] if $row < $rows && $col > 0;

            # right
            push @neighbours, $matrix->[$row][$col+1]   if $col < $cols;
            # diagonal top right
            push @neighbours, $matrix->[$row-1][$col+1] if $row > 0     && $col < $cols;
            # diagonal bottom right
            push @neighbours, $matrix->[$row+1][$col+1] if $row < $rows && $col < $cols;

            push @lonely_x, [$row+1, $col+1]
                unless (grep /X/, @neighbours);
        }
    }

    return 0 if @lonely_x == 0;
    return @lonely_x;
}
```

Finally `sub p()` to the print the result as expected.

```perl
sub p {
    my (@data) = @_;

    print "0\n" and return unless ref($data[0]);
    foreach (@data) {
        print sprintf("%s\n", join ", ", @$_);
    }
}
```

<br>

The **Raku** solution is just full of special effects. My favourite is `$array.pick`. It picks the random element from the list.

<br>

```perl6
sub get-matrix(Int $rows where { $rows >= 1 },
               Int $cols where { $cols >= 1 }) {

    my $min   = 0;
    my $max   = 9;
    my $array = [ 'X', 'O', 'X', 'X', 'X', 'O', 'O', 'O', 'X', 'O' ];

    my $matrix  = [];
    for 0..$rows -> $r {
        for 0..$cols -> $c {
            $matrix.[$r][$c] = $array.pick;
        }
    }

    display-matrix('Matrix:', $matrix);
    return $matrix;
}
```

To display the generated matrix, here is the `sub display-matrix()`.

```perl6
sub display-matrix($label, $matrix) {

    say $label;
    for 0..$matrix.elems - 1 -> $r {
        say sprintf("[ %s ]", $matrix.[$r].join(', '));
    }
}
```

The `sub find-lonely-x()` is shamelessly translated line-by-line from **Perl** counterpart.

```perl6
sub find-lonely-x($matrix) {

    my $rows = $matrix.elems - 1;
    my $cols = $matrix.[0].elems - 1;

    my @lonely_x = ();
    for 0..$rows -> $row {
        for 0..$cols -> $col {
            next unless $matrix.[$row][$col] eq 'X';

            my @neighbours = ();

            # top
            @neighbours.push: $matrix.[$row-1][$col] if $row > 0;
            # bottom
            @neighbours.push: $matrix.[$row+1][$col] if $row < $rows;

            # left
            @neighbours.push: $matrix.[$row][$col-1]   if $col > 0;
            # diagonal top left
            @neighbours.push: $matrix.[$row-1][$col-1] if $row > 0     && $col > 0;
            # diagonal bottom left
            @neighbours.push: $matrix.[$row+1][$col-1] if $row < $rows && $col > 0;

            # right
            @neighbours.push: $matrix.[$row][$col+1]   if $col < $cols;
            # diagonal top right
            @neighbours.push: $matrix.[$row-1][$col+1] if $row > 0     && $col < $cols;
            # diagonal bottom right
            @neighbours.push: $matrix.[$row+1][$col+1] if $row < $rows && $col < $cols;

            unless @neighbours.grep({ /X/ }) {
               @lonely_x.push: ($row+1, $col+1);
            }
        }
    }

    return 0 if @lonely_x.elems == 0;
    return |@lonely_x;
}
```
<br>

Time for getting the task done. Here I am doing standard command line parameter validation and rest is taken care by the helper subroutines defined above.

<br>

```perl
use strict;
use warnings;

print "USAGE: perl $0 <row> <col>\n" and exit
    if (defined $ARGV[0] && ($ARGV[0] eq '-h'));

my $R = $ARGV[0] || 3;
my $C = $ARGV[1] || 3;

die "ERROR: Invalid rows [$R].\n" unless ($R =~ /^\d+$/ && $R >=2 );
die "ERROR: Invalid cols [$C].\n" unless ($C =~ /^\d+$/ && $C >=2 );

p(find_lonely_x(get_matrix(--$R, --$C)));
```

<br>

I used **Raku** powerful `MAIN()` to take care of command line paramerter validation. It is clean and concise.

<br>

```perl6
use v6.d;

sub MAIN(Int :$R is copy where { $R >= 2 } = 3,
         Int :$C is copy where { $C >= 2 } = 3) {

    find-lonely-x(get-matrix(--$R, --$C)).say;
}
```

<br>

Once again, using the example from the given task as the test case for unit test.

<br>

```perl
use strict;
use warnings;
use Test::More;
use Test::Deep;

my $example_1 = [ ['O', 'O', 'X'],
                  ['X', 'O', 'O'],
                  ['X', 'O', 'O'],
                ];

my $example_2 = [ ['O', 'O', 'X', 'O'],
                  ['X', 'O', 'O', 'O'],
                  ['X', 'O', 'O', 'X'],
                  ['O', 'X', 'O', 'O'],
                ];

is_deeply([find_lonely_x($example_1)], [[1, 3]],        "example 1");
is_deeply([find_lonely_x($example_2)], [[1, 3], [3,4]], "example 2");

done_testing;
```

<br>

**Raku** follows the same path as **Perl**.

<br>

```perl6
use Test;

my $example_1 = [ ('O', 'O', 'X'),
                  ('X', 'O', 'O'),
                  ('X', 'O', 'O'),
                ];

my $example_2 = [ ('O', 'O', 'X', 'O'),
                  ('X', 'O', 'O', 'O'),
                  ('X', 'O', 'O', 'X'),
                  ('O', 'X', 'O', 'O'),
                ];

is-deeply find-lonely-x($example_1), ((1, 3)),         "example 1";
is-deeply find-lonely-x($example_2), ((1, 3), (3, 4)), "example 2";

done-testing;
```

<br>

That's it for this week. Speak to you soon.
