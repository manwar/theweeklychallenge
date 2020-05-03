---
title: "BLOG: The Weekly Challenge #058"
date: 2020-05-03T00:00:00+00:00
description: "Blog for the weekly challenge #058."
type: post
image: images/blog/weekly-challenge-058.jpg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

# HEADLINE

This week, I struggled with both the task, to be honest. Dealing with **alpha** part of the version was really pain in the neck. Every time, I struggle with any task, I follow the college days course of action i.e. pick a pend and paper. I start dribbling the thought process, it really helps in getting the idea out on the paper. Once the rough draft is ready, it is time to face the unit test trial. I make sure every solution of mine must go through the unit test trials. It flesh out edge cases most time, if I could come up with enough test cases.

***

# PERL

***

## Task #1:

Here comes the final draft of the core **sub cmp_version()**, which accepts the two versions string.

***

```perl
sub cmp_version {
    my ($v1, $v2) = @_;

    # Short circuit, good idea?
    return 0 if ($v1 eq $v2);

    my @v1 = split /\./, $v1;
    my @v2 = split /\./, $v2;

    my $max = (scalar(@v1) > scalar(@v2))?(scalar(@v1)):(scalar(@v2));
    my $i = 0;

    my $v1_alpha;
    my $v2_alpha;

    while ($i < $max) {
        $v1[$i] = 0 unless defined $v1[$i];
        $v2[$i] = 0 unless defined $v2[$i];

        if ($v1[$i] =~ /\_/) {
            ($v1[$i], $v1_alpha) = split /\_/, $v1[$i];
        }
        if ($v2[$i] =~ /\_/) {
            ($v2[$i], $v2_alpha) = split /\_/, $v2[$i];
        }

        if (defined $v1[$i] && defined $v2[$i]) {
            if ($v1[$i] > $v2[$i]) {
                return 1;
            }
            elsif ($v1[$i] < $v2[$i]) {
                return -1;
            }
        }

        $i++;
    }

    if (defined $v1_alpha && defined $v2_alpha) {
        if ($v1_alpha > $v2_alpha) {
            return 1;
        }
        elsif ($v1_alpha < $v2_alpha) {
            return -1;
        }
    }
    else {
        if (defined $v1_alpha) {
            return 1;
        }
        if (defined $v2_alpha) {
            return -1;
        }
    }

    return 0;
}
```

To go with the above sub, here is the wrapper to make it standalone app.

```perl
my $v1 = $ARGV[0] // '0.1';
my $v2 = $ARGV[1] // '1.1';
print sprintf("%s cmp %s = %d\n", $v1, $v2, cmp_version($v1, $v2));
```

Similarly the unit test is slick one.

```perl
use Test::More;

is (cmp_version('0.1', '1.1'),    -1, '0.1   cmp 1.1');
is (cmp_version('2.0', '1.2'),     1, '2.0   cmp 1.2');
is (cmp_version('1.2', '1.2_5'),  -1, '1.2   cmp 1.2_5');
is (cmp_version('1.2.2', '1.2_1'), 1, '1.2.2 cmp 1.2_1');
is (cmp_version('1.2_1', '1.2_1'), 0, '1.2_1 cmp 1.2_1');
is (cmp_version('1.2.1', '1.2.1'), 0, '1.2.1 cmp 1.2.1');

done_testing;
```

***

## Task #2:

As I always try to solve the task in **Perl** first, I really spent longer than usual to solve this task. It was the toughest nut to crack to be honest with you.

***

```perl
sub order_lineup {
    my ($args) = @_;

    my @H = @{$args->{H}};
    my @T = @{$args->{T}};
    my $O = [];

    my $H_T = { map { $H[$_] => $T[$_] } 0 .. scalar(@H)-1 };
    foreach my $h (sort { $b <=> $a } keys %$H_T) {

        my $i = 0;
        my $j = 0;

        while ($H_T->{$h} > $j) {
            $j++ if ($O->[$i] > $h);
            $i++;
        }

        splice @$O, $i, 0, $h;
    }

    return $O;
}
```

Here is the thin wrapper around the above **sub order_lineup()**.

```perl
my $H = [2, 6, 4, 5, 1, 3];
my $T = [1, 0, 2, 0, 1, 2];
my $O = order_lineup({ H => $H, T => $T });

print sprintf("\@H = (%s)\n", join(", ", @$H));
print sprintf("\@T = (%s)\n", join(", ", @$T));
print sprintf("\@O = (%s)\n", join(", ", @$O));
```

To complete the task, here goes the unit test as below.

```perl
use Test::More;
use Test::Deep;

my $unit_tests = [
    { in  => { H => [2, 6, 4, 5, 1, 3],
               T => [1, 0, 2, 0, 1, 2],
             },
      out => [5, 1, 2, 6, 3, 4],
    },
];

foreach my $unit_test (@$unit_tests) {
    is_deeply(order_lineup($unit_test->{in}), $unit_test->{out});
}

done_testing;
```

***

# RAKU

***

## Task #1:

Usual translation of **Perl** solution into **Raku**. I am getting better with **Raku** with every passing week. There was hardly anything new I tried in the **sub cmp-version()**, just the usual stuff.

***

```perl6
sub cmp-version(Str $v1, Str $v2) {

    # Short circuit, good idea?
    return 0 if ($v1 eq $v2);

    my @v1 = $v1.split(".");
    my @v2 = $v2.split(".");

    my $max = @v1.elems > @v2.elems ?? @v1.elems !! @v2.elems;
    my $i = 0;

    my $v1_alpha;
    my $v2_alpha;

    while $i < $max {
        @v1[$i] = 0 unless defined @v1[$i];
        @v2[$i] = 0 unless defined @v2[$i];

        if @v1[$i] ~~ / <[_]> / {
            (@v1[$i], $v1_alpha) = @v1[$i].split("_");
        }
        if @v2[$i] ~~ / <[_]> / {
            (@v2[$i], $v2_alpha) = @v2[$i].split("_");
        }

        if defined @v1[$i] && defined @v2[$i] {
            if @v1[$i] > @v2[$i] {
                return 1;
            }
            elsif @v1[$i] < @v2[$i] {
                return -1;
            }
        }

        $i++;
    }

    if defined $v1_alpha && defined $v2_alpha {
        if $v1_alpha > $v2_alpha {
            return 1;
        }
        elsif $v1_alpha < $v2_alpha {
            return -1;
        }
    }
    else {
        if defined $v1_alpha {
            return 1;
        }
        if defined $v2_alpha {
            return -1;
        }
    }

    return 0;
}
```

Here is standalone app to go with the above **sub cmp-version()**.

```perl6
use v6.d;

sub MAIN(Str :$v1 = '0.1', Str :$v2 = '1.1') {
    say sprintf("%s cmp %s = %s", $v1, $v2, cmp-version($v1, $v2));
}
```

And unit test as well to make it complete.

```perl6
use Test;

is cmp-version('0.1',   '1.1'),   -1, '0.1   cmp 1.1';
is cmp-version('2.0',   '1.2'),    1, '2.0   cmp 1.2';
is cmp-version('1.2',   '1.2_5'), -1, '1.2   cmp 1.2_5';
is cmp-version('1.2.2', '1.2_1'),  1, '1.2.2 cmp 1.2_1';
is cmp-version('1.2_1', '1.2_1'),  0, '1.2_1 cmp 1.2_1';
is cmp-version('1.2.1', '1.2.1'),  0, '1.2.1 cmp 1.2.1';

done-testing;
```

***

## Task #2:

For this task, I had to try few things for the first time. For example, sorting hash by key in reverse order. Also used **splice** for the first time. Last but not the least, I learnt how to fetch data from **Pair**.

***

```perl6
sub order-lineup($args) {

    my @H = $args.{'H'}.<>;
    my @T = $args.{'T'}.<>;

    my %H-T = ();
    for 0 .. @H.elems-1 -> $i {
        %H-T{@H[$i]} = @T[$i];
    }

    my $O = [];
    for %H-T.sort(*.keys).reverse -> $r {
        my $h = $r.kv[0];
        my $t = $r.kv[1];

        my $i = 0;
        my $j = 0;
        while $t > $j {
            $j++ if $O.[$i] > $h;
            $i++;
        }

        $O.splice: $i, 0, $h.Int;
    }

    return $O;
}
```
Here is **Raku** app using the above **sub order-lineup()**.

```perl6
use v6.d;

sub MAIN() {
    my $H = [2, 6, 4, 5, 1, 3];
    my $T = [1, 0, 2, 0, 1, 2];
    my $O = order-lineup({ H => $H, T => $T });

    say sprintf("\@H = (%s)", $H.join(", "));
    say sprintf("\@T = (%s)", $T.join(", "));
    say sprintf("\@O = (%s)", $O.join(", "));
}
```

And light weight unit test wrapper.

```perl6
use Test;

my $H = [2, 6, 4, 5, 1, 3];
my $T = [1, 0, 2, 0, 1, 2];
my $E = [5, 1, 2, 6, 3, 4];

is order-lineup({ H => $H, T => $T }), $E;

done-testing;
```

That's it for this week. Speak to you soon.
