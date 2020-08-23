---
title: "BLOG: The Weekly Challenge #074"
date: 2020-08-23T00:00:00+00:00
description: "Blog for the weekly challenge #074."
type: post
image: images/blog/weekly-challenge-074.jpg
author: Mohammad S Anwar
tags: ["Perl", "Raku", "Swift"]
---

# HEADLINE

<br>

Ever since I started doing **Swift**, I find myself too busy again with my weekly video sessions on top of all.

I need to re-visit my time management chart, may be?

Having said that, I get excited by the doing task in a new language. I wanted to do it in **Java** to refresh my memory. But couldn't find time for it as I am editing the next week **[Perl Weekly](https://perlweekly.com/)** newsletter also.

Highlight of the week, was the **[live session](https://www.youtube.com/watch?v=uM0TTQZaZ2Q)** by **Lance Wicks**. During the live session, I had lots of trouble with my **Sky Broadband**, disturbing the flow. Luckily he posted the video later, which I watched during my break.

If you are interested then please checkout my **Swift** solutions to this week tasks.

#### 1) [Majority Element](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/mohammad-anwar/swift/ch-1.swift)
#### 2) [FNR Character](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-074/mohammad-anwar/swift/ch-2.swift)

<br>

### YouTube Weekly

#### 1) [Majority Element](https://www.youtube.com/watch?v=_-vOF9C7WRQ)
#### 2) [FNR Character](https://www.youtube.com/watch?v=p2yL2Fy-KXw)

Last but not the least, I would to love hear your **view/opinion** with regard to anything I do. Please get in touch with me by email: <mohammad.anwar@yahoo.com>.

Let me share my solutions to the **[The Weekly Challenge - 074](/perl-weekly-challenge-074)**.

***
## TASK #1 › Majority Element
#### Submitted by **[Mohammad S Anwar](http://www.manwar.org)**
***

You are given an array of integers of size $N.

Write a script to find the majority element. If none found then print -1.

***

<br>

As always the case, the **Task #1** tends to be easier one. This week also we had an easy one. The crux of the task is to first find the lower midpoint and pick the first member in the list that is more or same the midpoint.

<br>

```perl
sub find_majority_element {
    my ($list) = @_;

    die "ERROR: Missing list.\n"         unless defined $list;
    die "ERROR: Invalid list [$list].\n" unless (ref($list) eq 'ARRAY');

    print "List: ", join(", ", @$list), "\n";
    my $mid_point = floor(($#$list + 1) / 2);
    my %elements  = ();
    $elements{$_}++ foreach (@$list);

    my $top = (sort { $elements{$b} <=> $elements{$a} }
               keys %elements)[0];

    ($elements{$top} >= $mid_point)
    ?
    (return $top)
    :
    (return -1);
}

sub prepare_list {
    my ($list) = @_;

    if (defined $list) {
        $list =~ s/\s//g;
        return [ split /\,/, $list ];
    }
    else {
        return [1, 2, 2, 3, 2, 4, 2];
    }
}
```

<br>

Doing task in **Raku** is always fun as I get to learn so much about the magical feature.

One thing I really wanted to improve is the way I sorted the `%elements` by value.

What I have got now is borrowed from **Perl**. I vaguely remember someone told me **Raku** way of doing the same. I lost the node unfortunately. If you do know then please let me know.

<br>

```perl6
sub find-majority-element(Str $list is copy) {

    die "ERROR: Invalid list [$list].\n"
        unless $list ~~ /^[\s?\-?\d\,?\s?]+$/;

    say "List: $list";
    $list ~~ s:g/\s//;
    my $l = [ $list.split(',') ];

    my $mid_point = floor($l.elems / 2);
    my %elements;
    $l.map({ %elements{$_}++ });
    my $top = %elements.sort({ $^b.value <=> $^a.value }).head;

    return ($top.value >= $mid_point) ?? ($top.key) !! (-1);
}
```

<br>

One liner **Perl** solution to the task is below. In between, there is helper `sub prepare_list()` which takes the command line parameter string and returns the arrayref to the list of numbers.

<br>

```perl
use strict;
use warnings;
use POSIX qw(floor);

print find_majority_element(prepare_list($ARGV[0])), "\n";
```

<br>

For **Raku** solution, I didn't bother creating helper subroutine. Other than that, it appears identical.

<br>

```perl6
use v6.d;

sub MAIN(Str :$list = "1, 2, 2, 3, 2, 4, 2") {
    find-majority-element($list).say;
}
```

<br>

With the introduction of `Test2::V0`, I get excited doing unit test in **Perl**. Although, it makes me redo everything in a package. But I am not complaining. I still have everything in one file, not something I would do in real world project.

<br>

```perl
package MajorityElement;

use Moo;
use POSIX qw(floor);

sub find_majority_element {
    my ($self, $list) = @_;

    die "ERROR: Missing list.\n"         unless defined $list;
    die "ERROR: Invalid list [$list].\n" unless (ref($list) eq 'ARRAY');

    print "List: ", join(", ", @$list), "\n";
    my $mid_point = floor(($#$list + 1) / 2);
    my %elements  = ();
    $elements{$_}++ foreach (@$list);

    my $top = (sort { $elements{$b} <=> $elements{$a} }
               keys %elements)[0];

    ($elements{$top} >= $mid_point)
    ?
    (return $top)
    :
    (return -1);
}

package main;

use strict;
use warnings;

use Test2::V0 -target => 'MajorityElement';

can_ok($CLASS, 'find_majority_element');
isa_ok($CLASS, 'MajorityElement');
is($CLASS->find_majority_element([1, 2, 2, 3, 2, 4, 2]),  2, 'example 1');
is($CLASS->find_majority_element([1, 3, 1, 2, 4, 5]),    -1, 'example 2');

done_testing;
```

<br>

I didn't do anything extravagant when it comes to unit test in **Raku**.

<br>

```perl6
use Test;

is find-majority-element("1, 2, 2, 3, 2, 4, 2"), 2, "example 1";
is find-majority-element("1, 3, 1, 2, 4, 5"),   -1, "example 2";

done-testing;
```

<br>

***
## TASK #2 › FNR Character
#### Submitted by **[Mohammad S Anwar](http://www.manwar.org)**
***

You are given a string $S.

Write a script to print the series of first non-repeating character (left -> right) for the given string. Print # if none found.

***

<br>

The **FNR Character** task created more noise this week as it confused many members. Many confused, first from which direction i.e `top -> bottom` or `bottom -> top`. You get different result how you find the FNR character. I thought the example would make it obvious. Anyway it settled down after a while.

The core of the task, is to first fetch substr and then find the first non-repeating character starting from the end.

<br>

```perl
sub fnr_character {
    my ($string) = @_;

    my @fnr = ();
    foreach my $i (0 .. length($string) - 1) {
        my $s = substr($string, 0, $i + 1);
        if (length($s) == 1) {
            push @fnr, $s;
        }
        else {
            my $found = 0;
            my %count = ();

            $count{$_}++ for split //, $s;
            foreach (split //, reverse $s) {
                if ($count{$_} == 1) {
                    push @fnr, $_;
                    $found = 1;
                    last;
                }
            }
            push @fnr, '#' unless ($found);
        }
    }

    return join '',@fnr;
}
```

<br>

I fall in love with **Raku** everytime I take a dip into the ocean. Two things in my solution below, made me very happy. First `$s.comb.map({ %count{$_}++ })` and second `$s.flip.comb`.

I would also like to point out the use of `False`, isn't it cool?

<br>

```perl6

sub fnr-character(Str $string) {

    my @fnr = ();
    for 0 .. $string.chars - 1 -> $i {
        my $s = $string.substr(0, $i + 1);
        if $s.chars == 1 {
            @fnr.push: $s;
        }
        else {
            my $found = False;
            my %count = ();
            $s.comb.map({ %count{$_}++ });
            for $s.flip.comb -> $char {
                if %count{$char} == 1 {
                    @fnr.push: $char;
                    $found = True;
                    last;
                }
            }
            @fnr.push: '#' unless $found;
        }
    }

    return @fnr.join('');
}
```

<br>

After all the hard work above, the solution to the task becomes one-liner.

<br>

```perl
use strict;
use warnings;

my $S = $ARGV[0] || 'ababc';

print join "\n", (join ' => ', $S, fnr_character($S)), '';
```

<br>

**Raku** is not far behind and showing the power of `MAIN()`.

<br>

```perl6
use v6.d;

sub MAIN(Str :$S = 'ababc') {
    fnr-character($S).join(' => ').say;
}
```

<br>

Once again, I am doing unit test using `Test2::V0` and re-arranged the code in a package.

<br>

```perl
package FNRCharacter;

use Moo;

sub fnr_character {
    my ($self, $string) = @_;

    my @fnr = ();
    foreach my $i (0 .. length($string) - 1) {
        my $s = substr($string, 0, $i + 1);
        if (length($s) == 1) {
            push @fnr, $s;
        }
        else {
            my $found = 0;
            my %count = ();

            $count{$_}++ for split //, $s;
            foreach (split //, reverse $s) {
                if ($count{$_} == 1) {
                    push @fnr, $_;
                    $found = 1;
                    last;
                }
            }
            push @fnr, '#' unless ($found);
        }
    }

    return join '',@fnr;
}

package main;

use strict;
use warnings;

use Test2::V0 -target => 'FNRCharacter';

isa_ok($CLASS, 'FNRCharacter');
can_ok($CLASS, 'fnr_character');
is($CLASS->fnr_character('ababc'),  'abb#c',  'example 1');
is($CLASS->fnr_character('xyzzyx'), 'xyzyx#', 'example 2');

done_testing;
```

<br>

For **Raku**, I kept is simple and easy.

<br>

```perl6
use Test;

is fnr-character('ababc'),  'abb#c',  'example 1';
is fnr-character('xyzzyx'), 'xyzyx#', 'example 2';

done-testing;
```

***

<br>

That's it for this week. Speak to you soon.
