---
title: "BLOG: The Weekly Challenge #069"
date: 2020-07-19T00:00:00+00:00
description: "Blog for the weekly challenge #069."
type: post
image: images/blog/weekly-challenge-069.jpg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

# HEADLINE

....headline

The **Task #1** of **[Perl Weekly Challenge - 069](/blog/perl-weekly-challenge-069)** raised a very interesting question i.e. is 1 strobogrammatic number? So far, I got mixed response some says yes and some not. My first thought was Yes, it is but later changed my mind. It is controversial and I don't want loose the focus on the task itself. Please remember the objective is to have fun and not to get into controversial domain. I am also very flexible and not tied to any thing. Some even discussed that **"upside down"** is not same as **"180 degree rotation"**. I am staying away from it. I like the open culture of **Perl Weekly Challenge** as you are free to take the route you are comfortable with. There are no compulsion.

The **Task #2** posed another challenge where getting the 0/1 string `S1000` generating seems nearly impossible running on regalar machine. Midweek, it was dropped down to `S30` to make it possible. Even then it took a long time and generated a very very large 0/1 string.

I have made videos of **Live Coding** for this week tasks in **Perl**.

### [Task #1: Strobogrammatic Number](https://www.youtube.com/watch?v=GZNgsB6Bplc)
### [Task #2: 0/1 String](https://www.youtube.com/watch?v=Sp7dko3Q5sQ)

<br>

Let me share my solutions to the **[Perl Weekly Challenge - 069](/perl-weekly-challenge-069)**.

***
## TASK #1 › Strobogrammatic Number
#### Submitted by **[Mohammad S Anwar](http://www.manwar.org)**
***

A strobogrammatic number is a number that looks the same when looked at upside down.

You are given two positive numbers $A and $B such that 1 <= $A <= $B <= 10^15.

Write a script to print all strobogrammatic numbers between the given two numbers.

***

<br>

For the **Task #1**, I came up with **sub strobogrammatic_numbers()**, which takes 2-parameters `$start` and `$stop`. It assumes, `6`, `8` and `9` are the only digits that can be part of any strobogrammatic_numbers. After submitting my solutions, I came to know about `0` being one more such digit. I didn't bother changing the code. However it would be one-line change if I wanted to include `0` like below.

Replace

```perl
my %digits = (6 => 9, 8 => 8, 9 => 6);
```

with

```perl
my %digits = (0 => 0, 6 => 9, 8 => 8, 9 => 6);
```

and job done.

In the sub below, I loop through `$start` and `$stop`. In each loop, I split the number and compare against the keys in the `%digits`. If I don't find the split digit in the `%digits` then I move on the next number in the list. Once all split digits matched with the keys in the `%digits`, then I compare against the reverse of the mapped digits. If they are same then it is my **strobogrammatic number** I am after.


```perl
sub strobogrammatic_numbers {
    my ($start, $stop) = @_;

    die "ERROR: Missing start number.\n"
        unless defined $start;
    die "ERROR: Missing stop  number.\n"
        unless defined $stop;
    die "ERROR: Invalid start number [$start].\n"
        unless ($start >= 1);
    die "ERROR: Invalid end number [$stop].\n"
        unless ($stop >= 1);
    die "ERROR: Invalid start number [$start].\n"
        unless ($start < $stop);

    my %digits = (6 => 9, 8 => 8, 9 => 6);

    my @strobogrammatic = ();
    foreach my $n ($start .. $stop) {
        next if ($n < 10);

        my $found = 1;
        my @match = ();
        foreach my $i (split //, $n) {
            if (exists $digits{$i}) {
                push @match, $digits{$i};
            }
            else {
                $found = 0;
                last;
            }
        }

        if ($found) {
            push @strobogrammatic, $n
                if ($n == join('', reverse @match));
        }
    }

    return @strobogrammatic;
}
```

I made controversial assumption in the subroutine above by excluding single digit number. I now realise it is being very rigid. To include single digit should not be too difficult. I can acheive this by dropping the line below:

```perl
next if ($n < 10);
```

Time to get some **Raku** magic. Thanks to the weekly challenge, I get to practice what I learn in **Raku**. So what did I learn new? Honestly speaking nothing new but got to practice what I knew already, which is fun as well. I always try my best to make my code not look like **Perl**.

```perl6
if %digits{$i}:exists {
```

For my fellow **Perl** hacker, the above line checks if `$i` exists in the hash `%digits`.

```perl6
@match.push: %digits{$i};
```

The line above pushed the mapped digit `%digits{$i}` to the list `@match`.

```perl6
if $n == @match.join('').flip;
```

Now this compares the number `$n` with the reverse of the joined digits of the list `@match`.

I am not sure if you noticed the boolean data `True` and `False` used with the variable `$found`. I love it. I wish **Perl** had the same.

Please find below the complete definition of **sub strobogrammatic-numbers()**:

```perl6
sub strobogrammatic-numbers($start, $stop) {
    die "ERROR: Invalid start number [$start].\n"
        unless $start < $stop;

    my %digits = (6 => 9, 8 => 8, 9 => 6);

    my @strobogrammatic = ();
    for $start .. $stop -> $n {
        next if $n < 10;

        my $found = True;
        my @match = ();
        for $n.comb -> $i {
            if %digits{$i}:exists {
                @match.push: %digits{$i};
            }
            else {
                $found = False;
                last;
            }
        }

        if $found {
            @strobogrammatic.push: $n
                if $n == @match.join('').flip;
        }
    }

    return @strobogrammatic;
}
```

Let's solve the task in **Perl** first with the help of **sub strobogrammatic_numbers()** we created above.

```perl
my $A = $ARGV[0] || 50;
my $B = $ARGV[1] || 100;

print sprintf("[%s]\n", join ', ', strobogrammatic_numbers($A, $B));
```

How about doing the same in **Raku**?  I love the power of **MAIN()**, you can do so much with it. I try to put in as much parameter validation as possible in there.

```perl6
use v6.d;

sub MAIN(Int :$A where { $A >= 1 } = 50,
         Int :$B where { $B >= 1 } = 100) {
    strobogrammatic-numbers($A, $B).join(', ').say;
}
```

Being a fan of **TDD**, I try to get unit test done as well.

```perl
use Test::More;
use Test::Deep;

is_deeply( [ strobogrammatic_numbers(50, 100) ],
           [ 69, 88, 96 ],
           'testing A=50, B = 100' );
```

**Raku** unit test is fun as well.

```perl6
use Test;

is-deeply strobogrammatic-numbers(50, 100),
          (69, 88, 96),
          'testing $A=50, $B=100';

done-testing;
```

***
## TASK #2 › 0/1 String
#### Submitted by **[Mohammad S Anwar](http://www.manwar.org)**
***

A `0/1 string` is a string in which every character is either 0 or 1.

Write a script to perform `switch` and `reverse` to generate `S30` as described below:

    switch:

    Every 0 becomes 1 and every 1 becomes 0. For example, “101” becomes “010”.

    reverse:

    The string is reversed. For example, "001” becomes “100”.

***

<br>

By the time, I got to do this task, I was already made aware of this task being  power hungry.

With that, I didn't bother getting `S1000` generated.

Instead I only attempted to get `S30` 0/1 string.

The power of `tr//` made this task so simple.

```perl
sub string_0_1 {
    my ($string) = @_;

    die "ERROR: Missing string.\n"
        unless defined $string;
    die "ERROR: Invalid string [$string].\n"
        unless ($string =~ /s\d+/i);

    if ($string =~ /(\d+)/) {
        my $limit = $1;
        die "ERROR: Invalid string [$string]. S30 is the limit.\n"
            if ($limit > 30);

        my $string_0_1 = '';
        foreach (1 .. $limit) {
            my $_string_0_1 =  reverse $string_0_1;
            $_string_0_1    =~ tr/[01]/[10]/;
            $_string_0_1    =  '0'. $_string_0_1;
            $string_0_1     =  $string_0_1 . $_string_0_1;
        }

        return $string_0_1;
    }
}
```

As you know, I try to translate the **Perl** solution when it comes to do **Raku**. I had hard time to find the **Raku** version of the following line:

```perl
if ($string =~ /(\d+)/) {
```

My **Raku** regex knowledge is limited, so I google it but couln't find any solution. At this point, I thought of asking the **Raku** experts on the `@PerlWChallenge` twitter handle. Then I found this in the end.

```perl6
my $limit = .Int for $string ~~ m/(\d+)/;
```

I am not impressed with the solution, though.

I am sure there must be a better solution out there.

```perl6
sub string_0_1($string) {

    my $limit = .Int for $string ~~ m/(\d+)/;
    die "ERROR: Invalid string [$string]. S30 is the limit.\n"
        if $limit > 30;

    my $string_0_1 = '';
    for 1 .. $limit {
        my $_string_0_1 =  $string_0_1.flip;
        $_string_0_1    ~~ tr/[01]/[10]/;
        $_string_0_1    =  '0' ~ $_string_0_1;
        $string_0_1     =  $string_0_1 ~ $_string_0_1;
    }

    return $string_0_1;
}
```

Time to get the task done in **Perl** first.

```perl
use strict;
use warnings;

my $string = $ARGV[0];
print sprintf("%s\n%s\n", $string, string_0_1($string));
```

and in **Raku** now. I love the parameter validation feature of **MAIN()**

```perl6
use v6.d;

sub MAIN(Str :$string where { $string ~~ m:i/^s\d+$/ } = 'S5') {
    string_0_1($string).say;
}
```

Quick unit test in **Perl**, kept it simple.

```perl
use Test::More;

is(string_0_1('S2'), '001',             'testing S2');
is(string_0_1('S3'), '0010011',         'testing S3');
is(string_0_1('S4'), '001001100011011', 'testing S4');

done_testing;
```

Similar unit test in **Raku**.

```perl6
use Test;

is string_0_1('S2'), '001',             'testing S2';
is string_0_1('S3'), '0010011',         'testing S3';
is string_0_1('S4'), '001001100011011', 'testing S4';

done-testing;
```

***

That's it for this week. Speak to you soon.
