---
title: "BLOG: The Weekly Challenge #053"
date: 2020-03-27T00:00:00+00:00
description: "Blog for the weekly challenge #053."
type: post
image: images/blog/weekly-challenge-053.jpg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

I noticed now a days, I go for solution with unit test. I will give the credit to fellow **Team PWC** member, **E. Choroba**. It feels great when you see the test pass at the end. Well the solution looks little different than just standalone solution. For that reason, I decided to do both for **Raku** solutions. Also this allowed me to explore unit testing in **Raku**.

***
***

# PERL

***
***

## Task #1: Rotate Matrix

Lets start with **Perl** solution for the task **Rotate Matrix**. For this, I used straight forward *for loop* to move around numbers.

***

```perl
#!/usr/bin/perl

use strict;
use warnings;

use Test::More;
use Test::Deep;

my $unit_tests = {
    90 => {
            in  => [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ],
            out => [ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ],
          },
   180 => {
            in  => [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ],
            out => [ [ 9, 8, 7 ], [ 6, 5, 4 ], [ 3, 2, 1 ] ],
          },
   270 => {
            in  => [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ],
            out => [ [ 3, 6, 9 ], [ 2, 5, 8 ], [ 1, 4, 7 ] ],
          },
};

foreach my $degree (sort { $a <=> $b } keys %$unit_tests) {
    my $in  = $unit_tests->{$degree}->{in};
    my $out = $unit_tests->{$degree}->{out};
    cmp_deeply(rotate_matrix($in, $degree), $out, "rotation by $degree.");
}

done_testing;

sub rotate_matrix {
    my ($matrix, $degree) = @_;

    foreach my $i ( 1 .. int($degree/90) ) {
        my $rows = @$matrix;
        my $cols = @{$matrix->[0]};

        my $_matrix = [];
        foreach my $i ( 0 .. $rows-1 ) {
            my $k = 2;
            foreach my $j ( 0 .. $cols-1 ) {
                $_matrix->[$i][$j] = $matrix->[$k][$i];
                $k--;
            }
        }
        $matrix = $_matrix;
    }

    return $matrix;
}
```

***

## Task #2: Vowel String

***
***

For this task, I just did standalone solution. The best part of the solution is the use of **CPAN** module **Algorithm::Combinatorics**. The module did most of the work for me. The only thing left for me to do is apply the rule and print the string that passes the test.

```perl
#!/usr/bin/perl

use strict;
use warnings;

use Algorithm::Combinatorics qw(variations_with_repetition);

my $count = $ARGV[0] // 2;
die "ERROR: Invalid count $count.\n"
    unless (($count >= 1) && ($count <= 5));

my $chars = [qw(a e i o u)];

if ($count == 1) {
    print join "\n", @$chars;
    print "\n";
    exit;
}

my $iter  = variations_with_repetition($chars, $count);

my $char_sets = [];
while (my $char = $iter->next) {
    push @$char_sets, join "", @$char;
}

my $rules = [
    qr/a(?=[ie])/,
    qr/e(?=[i])/,
    qr/i(?=[aeou])/,
    qr/o(?=[au])/,
    qr/u(?=[oe])/
];

foreach my $char_set (@$char_sets) {
    my $pass = 0;
    foreach my $rule (@$rules) {
        if ($char_set =~ /$rule/) {
            $pass = 1;
        }
    }
    print "$char_set\n" if ($pass);
}
```

***

# RAKU

***
***

## Task #1: Rotate Matrix

***

When it comes to talk about **Raku** solutions, I have plenty to share. Just to make this clear, I have only recently started doing **Raku** after waiting for a long time. At first, I would simply give a touch of **Raku** flavour to my **Perl** solutions. Having done this for few weeks now, I try to get as much magical bits as possible to the best of my knowledge. The end result may not be the best in the market but it still gives me sense of achievements. I don't want to take all the credits as I always find lots of **Raku** experts readily available on **[Twitter](https://twitter.com/PerlWChallenge)** to answer my stupid questions.

Let me share the **Raku** magic I learnt this week. I was looking for new way to checking the parameter and found this magic.

```perl6
    die "ERROR: Invalid rotation degree $rotate-by."
        unless $rotate-by ~~ any (90, 180, 270);
```

For **Non-Raku** reader, what it says the parameter *$rotate-by* must be any one in the given list. It may be overkill but I don't care at this point in time. I am sure there must plenty of ways to deal with it.

I noticed big change from **Perl** when I came across this line:

```perl6
    for 1 .. $rotate-by/90 {
```

My **Perl** brain was telling me that I had to do **int($rotate-by/90)** but surprising **Raku** didn't need it. Why? I don't know at this point.

Another bit that surprised me, how you get the size of **$matrix** like below:

```perl6
    my $matrix = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ];

    my $rows = $matrix.elems;
    my $cols = $matrix.[0].elems;
```

**$matrix.elems** wasn't much of a surprise but this one **$matrix.[0].elems** was an eye opener for me. For **non-Raku** brain, what it means, pick the first element of **$matrix** and return the size.

Everything else is just simply **Raku** and nothing new to me anymore except the **dd**. It is like **Data::Dumper** for **Raku**. The best part is you don't have to import anything just use it. **Raku** rocks.

```perl6
#!/usr/bin/env perl6

use v6.c;

sub MAIN(Int $rotate-by = 90) {
    die "ERROR: Invalid rotation degree $rotate-by."
        unless $rotate-by ~~ any (90, 180, 270);

    my $matrix = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ];

    for 1 .. $rotate-by/90 {
        my $rows = $matrix.elems;
        my $cols = $matrix.[0].elems;

        my $_matrix;
        for 0 .. $rows-1 -> $i {
            my $k = 2;
            for 0 .. $cols-1 -> $j {
                $_matrix.[$i][$j] = $matrix.[$k][$i];
                $k--;
            }
        }
        $matrix = $_matrix;
    }

    dd $matrix;
}
```

Having just completed the standalone app, I wanted to do unit test in **Raku** so that I can learn new stuff. You would be pleasantly suprise how cool is unit testing in **Raku**. Just import **Test** class and end with **done-testing**. Does it ring the bell? It did for me, being native **Perl** developer. Even better when it comes to comparing data structure, you already have **is-deeply** without any additional import. One more time, **Raku** rocks.

Please check out **[documentation](https://docs.raku.org/language/testing)** for more informations.

I would like to point a very important bit, do you see anything unusual in the line below?

```perl6
my $unit-tests = :{
```

There is **":"** before the **"{"**.

So what is the use?

I found out by default, hash key in **Raku** are always treated as **String**.

So if you have anything **non-String**, then add **":"** before the start curly brace **"{"**.

I hope I remember this nex time.

```perl6
#!/usr/bin/env perl6

use Test;

my $unit-tests = :{
    90 => {
            in  => [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ],
            out => [ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ],
          },
   180 => {
            in  => [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ],
            out => [ [ 9, 8, 7 ], [ 6, 5, 4 ], [ 3, 2, 1 ] ],
          },
   270 => {
            in  => [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ],
            out => [ [ 3, 6, 9 ], [ 2, 5, 8 ], [ 1, 4, 7 ] ],
          },
};

for $unit-tests.keys.sort -> $degree {
    my $in  = $unit-tests{$degree}<in>;
    my $out = $unit-tests{$degree}<out>;
    is-deeply(rotate-matrix($in, $degree), $out, "rotation by $degree.");
}

done-testing;

sub rotate-matrix(Array $matrix is copy, Int $rotate-by = 90) {
    die "ERROR: Invalid rotation degree $rotate-by."
        unless $rotate-by ~~ any (90, 180, 270);

    for 1 .. $rotate-by/90 {
        my $rows = $matrix.elems;
        my $cols = $matrix.[0].elems;

        my $_matrix;
        for 0 .. $rows-1 -> $i {
            my $k = 2;
            for 0 .. $cols-1 -> $j {
                $_matrix.[$i][$j] = $matrix.[$k][$i];
                $k--;
            }
        }
        $matrix = $_matrix;
    }

    return $matrix;
}
```

***

## Task #2: Vowel String

***

It is time move on to another task of the week i.e. **Vowel String**. If you remember, I used **CPAN** module **Algorithm::Combinatorics** to give the all possible combinations. Since we are talking **Raku**, it has to beat that and it did. How?

```perl6
    my @char-sets = @chars.combinations: $count;
```

Did you notice, you don't need external module, it is all there.

The best part of the solution is the line below, I struggled a lot to get there. The end result is simply beautiful.

```perl6
    my @comb-sets = @char-sets.map({ .join });
```

So what does it do? To keep it short and simple:

It takes this:

    [ [ "a", "b" ], ["c", "d"] ]

and returns this:

    [ "ab", "cd" ]

Isn't it cool?

For more information, please check out the **[documentation](https://docs.raku.org/type/Array#(List)_routine_map)**.

Another suprise for me this time, it was **Raku** regex. I had something like **qr/a[ie]/** which **Raku** didn't like it. But the kind error told me what to use instead. Isn't great? So you use **rx** instead. I must make this crystal clear when dealing with **[]** in regex, always use it like **<[]>** like below:

```perl6
    my @rules = (
        rx/ a<[ie]>   /,
        rx/ e<[i]>    /,
        rx/ i<[aeou]> /,
        rx/ o<[au]>   /,
        rx/ u<[oe]>   /,
    );
```

If you want to learn more about regex, please check out **[documentation](https://docs.raku.org/language/regexes)**.

Last but not the least, for the first time, I used **True** and **False** instead of number **0** and **1**. Long live **Raku**.

Rest of the code are just the usual **Raku** statements.

```perl6
#!/usr/bin/env perl6

use v6.c;

sub MAIN(Int $count = 2) {
    die "ERROR: Invalid count $count.\n"
        unless $count ~~ any (1, 2, 3, 4, 5);

    my @chars = <a e i o u>;

    if $count == 1 {
        say @chars.join("\n");
        exit;
    }

    my @char-sets = @chars.combinations: $count;
    my @comb-sets = @char-sets.map({ .join });

    my @rules = (
        rx/ a<[ie]>   /,
        rx/ e<[i]>    /,
        rx/ i<[aeou]> /,
        rx/ o<[au]>   /,
        rx/ u<[oe]>   /,
    );

    for @comb-sets -> $str {
        my $pass = False;
        for @rules -> $rule {
            if $str ~~ /$rule/ {
                $pass = True;
            }
        }
        say $str if $pass;
    }
}
```

It is time to convert the above standalone solution to unit test. With the knowledge I just gained it was piece of cake for me.

```perl6
#!/usr/bin/env perl6

use Test;

my $unit-tests = :{
    1 => ["a", "e", "i", "o", "u"],
    2 => ["ae", "ai", "ei", "io", "iu", "ou"],
    3 => ["aei", "aeo", "aeu", "aio", "aiu", "aou", "eio", "eiu", "eou", "iou"],
    4 => ["aeio", "aeiu", "aeou", "aiou", "eiou"],
    5 => ["aeiou"]
};

for $unit-tests.keys.sort -> $size {
    is-deeply(vowel-strings($size), $unit-tests{$size}, "vowel strings size $size.");
}

done-testing;

sub vowel-strings(Int $size = 2) {
    die "ERROR: Invalid size $size.\n"
        unless $size ~~ any (1, 2, 3, 4, 5);

    my @chars = <a e i o u>;
    return @chars if $size == 1;

    my @char-sets = @chars.combinations: $size;
    my @comb-sets = @char-sets.map({ .join });

    my @rules = (
        rx/ a<[ie]>   /,
        rx/ e<[i]>    /,
        rx/ i<[aeou]> /,
        rx/ o<[au]>   /,
        rx/ u<[oe]>   /,
    );

    my @vowel-strings = ();
    for @comb-sets -> $str {
        my $pass = False;
        for @rules -> $rule {
            if $str ~~ /$rule/ {
                $pass = True;
            }
        }
        @vowel-strings.push($str) if $pass;
    }

    return @vowel-strings;
}
```
That's it for this week. Speak to you soon.
