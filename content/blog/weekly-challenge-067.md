---
title: "BLOG: The Weekly Challenge #067"
date: 2020-07-04T00:00:00+00:00
description: "Blog for the weekly challenge #067."
type: post
image: images/blog/weekly-challenge-067.jpg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

# HEADLINE

This week both tasks had one thing in common i.e. pairing two or more list. In the past, I have taken the help from **CPAN** module [**Algorithm::Combinatorics**](https://metacpan.org/pod/Algorithm::Combinatorics) for such tasks. However this time, I wanted to get my hand dirty and came up with the following:

```perl
# generate all possible combinations
my @combinations = ('');
foreach my $members (@data) {
   @combinations = map {
       my  $member = $_;
       map $member.$_, @$members
   } @combinations;
}
```

I used the same piece of work in both tasks.

Let me share my solutions to the **[Perl Weekly Challenge - 067](/perl-weekly-challenge-067)**.

***
## TASK #1 › Number Combinations
#### Submitted by **[Mohammad S Anwar](http://www.manwar.org)**
***

You are given two integers `$m` and `$n`. Write a script print all possible combinations of `$n` numbers from the list 1 2 3 ... $m.

Every combination should be sorted i.e. [2,3] is valid combination but [3,2] is not.

***

<br>

After getting all possible combinations, using the above code, it was time to filter the list as per the requirements. The following code does the job for me. Here I had to get help from **CPAN** module `List::Util` supplied `uniq()` to filer unique entries.

```perl
# filter combinations
my %filter;
foreach my $member (@combinations) {
    my @uniq = uniq split //, $member;
    next unless (@uniq == $n);
    $filter{ sprintf("[%s]", join ', ', sort @uniq) } = 1;
}
```

Please find below the complete `sub comb()` which handles the core of the task **Number Combinations**.

```perl
sub comb {
    my ($m, $n) = @_;

    die "ERROR: Missing 'm'.\n"
        unless defined $m;
    die "ERROR: Missing 'n'.\n"
        unless defined $n;
    die "ERROR: Invalid m=$m (m>0).\n"
        unless ($m > 0);
    die "ERROR: Invalid n=$n (n>0).\n"
        unless ($n > 0);
    die "ERROR: Invalid n=$n (n<=m).\n"
        unless ($n <= $m);

    # prepare data set
    my @data = ();
    push @data, [1..$m] foreach (1..$n);

    # generate all possible combinations
    my @combinations = ('');
    foreach my $members (@data) {
        @combinations = map {
            my  $member = $_;
            map $member.$_, @$members
        } @combinations;
    }

    # filter combinations
    my %filter;
    foreach my $member (@combinations) {
        my @uniq = uniq split //, $member;
        next unless (@uniq == $n);
        $filter{ sprintf("[%s]", join ', ', sort @uniq) } = 1;
    }

    # return sorted result
    return sprintf("[ %s ]", join ', ', (sort keys %filter));
}
```

Getting the above **Perl** `sub comb()` translated into **Raku** was the most fun part.

As I am a big fan of `method-chaining` of **Raku**, I never miss any opportunities. For generating combinations in **Raku**, I don't need external module, as **Raku** has everything built-in I need it.

**Raku Rocks !!!**.

If you noticed, I didn't have to filter the result of combinations. Less work for me as compared to my **Perl** solution. Chaining with `map()` and `join()` made it look like kids job.

It turned out to be a one-liner in **Raku** without being difficult to understand.

```perl6
sub number-combinations(Int $m where { $m > 0 },
                        Int $n where { $n > 0 }) {
    $n > $m and say "ERROR: Invalid n=$n (n <= m)" and exit;

    return sprintf("[ %s ]",
           (1..$m)
           .combinations($n)
           .map({ '['~$_.join(',')~']' })
           .join(', '));
}
```

Using the above `sub comb()`, the end result becomes one-liner.

```perl
use strict;
use warnings;
use List::Util qw(uniq);

my $m = $ARGV[0];
my $n = $ARGV[1];

print join "\n", comb($m, $n), '';
```

Even **Raku** is not behind either. I must admit, it looks more attractive.

```perl6
use v6.d;

sub MAIN(Int :$m where { $m > 0 } = 5, Int :$n where { $n > 0 } = 2) {
    number-combinations($m, $n).say;
}
```

Below is the standard unit test dealing with usual test case.

```perl
use Test::More;
use List::Util qw(uniq);

is( comb(5, 2),
    '[ [1, 2], [1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5], [3, 4], [3, 5], [4, 5] ]',
    'testing m=5; n=2' );
is( comb(5, 3),
    '[ [1, 2, 3], [1, 2, 4], [1, 2, 5], [1, 3, 4], [1, 3, 5], [1, 4, 5], [2, 3, 4], [2, 3, 5], [2, 4, 5], [3, 4, 5] ]',
    'testing m=5; n=3' );
is( comb(5, 4),
    '[ [1, 2, 3, 4], [1, 2, 3, 5], [1, 2, 4, 5], [1, 3, 4, 5], [2, 3, 4, 5] ]',
    'testing m=5; n=4' );
is( comb(5, 5),
    '[ [1, 2, 3, 4, 5] ]',
    'testing m=5; n=5' );

done_testing;
```

Similarly, **Raku** unit test followed the same path.

```perl6
use Test;

is number-combinations(5, 2),
   '[ [1, 2], [1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5], [3, 4], [3, 5], [4, 5] ]',
   'testing m=5, n=2';
is number-combinations(5, 3),
   '[ [1, 2, 3], [1, 2, 4], [1, 2, 5], [1, 3, 4], [1, 3, 5], [1, 4, 5], [2, 3, 4], [2, 3, 5], [2, 4, 5], [3, 4, 5] ]',
   'testing m=5, n=3';
is number-combinations(5, 4),
   '[ [1, 2, 3, 4], [1, 2, 3, 5], [1, 2, 4, 5], [1, 3, 4, 5], [2, 3, 4, 5] ]',
   'testing m=5, n=4';
is number-combinations(5, 5),
   '[ [1, 2, 3, 4, 5] ]',
   'testing m=5, n=5';

done-testing;
```

***
## TASK #2 › Letter Phone
#### Submitted by **[Mohammad S Anwar](http://www.manwar.org)**
***

You are given a digit string `$S`. Write a script to print all possible letter combinations that the given digit string could represent.

![Letter Phone](/images/blog/keypad.png)

***

<br>

As mentioned above, I borrowed the code to find the combinations as before. Luckily, I didn't have to do anything else to the list.

```perl
sub phone_letters {
    my ($digits) = @_;

    die "ERROR: Missing digits.\n"
        unless defined $digits;
    die "ERROR: Invalid digits [$digits].\n"
        unless ($digits =~ /^[0-9\*\#]+$/);

    # letter phone
    my %letter_of = (
        '1' => '_,@',
        '2' => 'abc',
        '3' => 'def',
        '4' => 'ghi',
        '5' => 'jlk',
        '6' => 'mno',
        '7' => 'pqrs',
        '8' => 'tuv',
        '9' => 'wxyz',
        '0' => '0',
        '#' => '#',
        '*' => chr(9251),
    );

    # prepare data set
    my @data = ();
    foreach my $digit (split //,$digits) {
        push @data, [ split //, $letter_of{$digit} ];
    }

    # generate all possible combinations
    my @combinations = ('');
    foreach my $members (@data) {
        @combinations = map {
            my  $member = $_;
            map $member.$_, @$members
        } @combinations;
    }

    return @combinations;
}
```

With the power of **Raku**, I used the `map()` and reduction meta-operator `[]`, to get the job done.

```perl6
sub phone-letters(Str $digits where { $digits ~~ /^ <[0..9\*\#]>+ $/ }) {

    # letter phone
    my %letter-of = (
        '1' => '_,@',
        '2' => 'abc',
        '3' => 'def',
        '4' => 'ghi',
        '5' => 'jlk',
        '6' => 'mno',
        '7' => 'pqrs',
        '8' => 'tuv',
        '9' => 'wxyz',
        '0' => '0',
        '#' => '#',
        '*' => chr(9251),
    );

    # prepare data set
    my @data = $digits.comb.map({ [ %letter-of{$_}.comb ] });

    # generate all possible combinations
    return map {qq{'$_'}}, ([X~] @data);
}
```

To handle the unicode character, I had to rely on the following line to help printing the utf8 encoding character.

```perl
binmode STDOUT, 'encoding(UTF-8)';
```

After that it just becomes one liner as below:

```perl
use strict;
use warnings;

binmode STDOUT, 'encoding(UTF-8)';
print join "\n", phone_letters($ARGV[0]), '';
```

With **Raku**, no need to deal with unicode character separately.

**Raku Rocks once again !!!***

```perl6
use v6.d;

sub MAIN(Str :$digits where { $digits ~~ /^ <[0..9\*\#]>+ $/ } = '35') {
    say sprintf("[ %s ]", phone-letters($digits).join(", "));
}
```

Finally unit test to make it complete solution.

```perl
use Test::More;
use Test::Deep;

is_deeply( [ phone_letters('35') ],
           [ 'dj', 'dl', 'dk', 'ej', 'el', 'ek', 'fj', 'fl', 'fk' ],
           'testing digits 35' );
is_deeply( [ phone_letters('10') ],
           [ '_0', ',0', '@0' ],
           'testing digits 10' );
is_deeply( [ phone_letters('2#') ],
           [ 'a#', 'b#', 'c#' ],
           'testing digits 2#' );

done_testing;
```

And **Raku** unit test goes alone the line.

```perl6
use Test;

is sprintf("[ %s ]", phone-letters('35').join(", ")),
   "[ 'dj', 'dl', 'dk', 'ej', 'el', 'ek', 'fj', 'fl', 'fk' ]",
   'testing "35"';
is sprintf("[ %s ]", phone-letters('10').join(", ")),
   "[ '_0', ',0', '@0' ]",
   'testing "10"';
is sprintf("[ %s ]", phone-letters('2#').join(", ")),
   "[ 'a#', 'b#', 'c#' ]",
   'testing "2#"';

done-testing;
```

***

That's it for this week. Speak to you soon.
