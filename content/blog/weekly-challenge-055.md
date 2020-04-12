---
title: "BLOG: The Weekly Challenge #055"
date: 2020-04-12T00:00:00+00:00
description: "Blog for the weekly challenge #055."
type: post
image: images/blog/weekly-challenge-055.jpg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

The **[Perl Weekly Challenge - 055](/blog/perl-weekly-challenge-055)** was the most difficult week for me ever since I started contributing. Usually I submit my **Perl** and **Raku** by Wednesday but this time, I was working overtime and could only finished by Sunday afternoon. I must confess that I didn't realise it was going to be as this difficult when I came up with the challenge. I am happy that I did it at the end of the day. This time, I submitted **unit test** version of both tasks in **Perl** and **Raku**. I always start with standalone app keeping in mind that this would be re-used in unit test script. I try to get the meaty subroutines drafted first then it just becomes a very thin wrapper around to get both standalone app and unit test script. My initial plan was to use **bit operator** to solve the **Flip Binary** task. Having spent couple of hours fighting, I gave up in the end. Eventually I hacked shamelessly as string to get the job done. I followed the standard pattern and solved the task in **Perl** first then jumped on **Raku**.

***
***

# PERL

***
***

## Task #1: Flip Binary

Since I already made my mind that I am going to treat it as plain string to keep it simple. I came up with the follow two subroutines **sub flip_binary()** and **sub flipped_binary()**. The **sub flip_binary()** does most of the work on the given binary string. I used good old friend **substr()** to do core task. There are two calls to **substr()**, first to extract a character at the given index and second call to replace the extracted character with its flipped copy. At the end we call **sub flipped_binary()** to return all copy of binary string with maximum **1s**. There is plenty of scope for improvement as far as the **sub flipped_binary()** is concerned. I was running out of time, so decided not to spend too much time on one task.

***

```perl
sub flip_binary {
    my ($binary_str) = @_;

    die "ERROR: Missing binary string.\n"
        unless defined $binary_str;
    die "ERROR: Invalid binary string [$binary_str].\n"
        unless ($binary_str =~ /^[01]+$/);

    my $result = {};
    my $size = length($binary_str);
    foreach my $left (1 .. $size) {
        foreach my $right ($left .. $size) {
            my $_binary_str = $binary_str;
            foreach my $i ($left .. $right) {
                --$i;
                my $c = substr($_binary_str, $i, 1);
                $c = ($c) ? (0) : (1);
                substr($_binary_str, $i, 1, $c);
            }
            $result->{ sprintf("%s (%s,%s)", $_binary_str, $left, $right) } = ($_binary_str =~ tr/1/1/);
        }
    }

    return flipped_binary($result);
}

sub flipped_binary {
    my ($result) = @_;

    my $v;
    my @r;
    foreach my $k (sort { $result->{$b} <=> $result->{$a} } sort keys %$result) {
        if (defined $v) {
            if ($result->{$k} == $v) {
                push @r, $k;
            }
        }
        else {
            $v = $result->{$k};
            push @r, $k;
        }
    }

    return join (" | ", @r);
}
```

With help of the above subroutines, it was piece of cake to build a standalone app. Technically it is just 2 lines script.

```perl
#!/usr/bin/perl

use strict;
use warnings;

my $binary_str = $ARGV[0] // "101";

print "$binary_str => ", flip_binary($binary_str), "\n";
```

Now it is time to get the unit test script. Here also we are going to use the same above subroutines. With the time constraint, I could only have 3 test cases, sufficient enough to test the code.

```perl
#!/usr/bin/perl

use strict;
use warnings;

use Test::More;

is (flip_binary("10001"), "11111 (2,4)");
is (flip_binary("10101"), "10111 (4,4) | 11011 (2,4) | 11101 (2,2)");
is (flip_binary("00101"), "11011 (1,4) | 11101 (1,2)");

done_testing;
```
***

## Task #2: Wave Array

***
***

The **Wave Array** gave me really hard time. My first impression was it would be cake walk but it turned out to be a nightmare. Like the **Flip Binary** task, here also I came up with two handy subroutines i.e. **sub fetch_wave_arrary()** and **sub is_wave()** to the deal with the meat of the task. Of the two, the **sub is_wave()** does the most work. If you look at the end result, it appears so simple but to get there was very time consuming. The **sub fetch_wave_array()** is responsible to create all possible arrays with the given **$N** and go through each to find out the real wave array. In the end it returns the list of wave arrays.

```perl
sub fetch_wave_array {
    my ($N) = @_;

    die "ERROR: Invalid array size [$N]\n" unless ($N =~ /^\d+$/ && $N > 0);

    my $iter = permutations([ 1..$N ]);
    my $wave = [];
    while (my $array = $iter->next) {
        push @$wave, $array if is_wave($array);
    }

    return $wave;
}

sub is_wave {
    my ($array) = @_;

    my $is_wave = 1;
    foreach my $i (1..$#$array) {
        ($i % 2)
        ?
        ($array->[$i] <= $array->[$i-1])
        :
        ($array->[$i] >= $array->[$i-1])
        and next;

        $is_wave = 0;
        last;
    }

    return $is_wave;
}
```

Having done the hard work, the standalone app is very light weight script. I used the very handy **CPAN** module **[Algorigthm::Combinatorics](https://metacpan.org/pod/Algorithm::Combinatorics)**. It provides utility function **permutations()** that we used to generate all possible arrays with given set of elements.

```perl
#!/usr/bin/perl

use strict;
use warnings;

use Algorithm::Combinatorics qw(permutations);

my $N = $ARGV[0] // 4;

my $wave = fetch_wave_array($N);
map { print sprintf("[%s]\n", join(",", @$_)) } @$wave;
```

Similarly, unit test script is not far behind standalone app. Using **Test::Deep**, we could compare the data structures quickly.

```perl
#!/usr/bin/perl

use strict;
use warnings;

use Test::More;
use Test::Deep;
use Algorithm::Combinatorics qw(permutations);

my $unit_tests = {
    1 => [ [1] ],
    2 => [ [2,1] ],
    3 => [ [2,1,3], [3,1,2] ],
    4 => [ [2,1,4,3], [3,1,4,2], [3,2,4,1], [4,1,3,2], [4,2,3,1] ],
};

foreach my $size (sort { $a <=> $b } keys %$unit_tests) {
    cmp_deeply(fetch_wave_array($size), $unit_tests->{$size}, "array size $size.");
}

done_testing;
```

***
***

# RAKU

***
***

## Task #1: Flip Binary

***

Talking about **Raku** solutions is always fun and it goes through so much experimentations. Just like **Perl** solutions, I decided to define the core subroutines first i.e. **sub flip-binary(Str)** and **sub flipped-binary(Hash)**. Let me share my fight with **Raku** when working with **sub flip-binary(Str)**. For the first time, I used the method **substr()**. Luckily it is not much different than similar function **substr()** in **Perl**.

```perl6
   my $c = $_binary-str.substr($i, 1);
```

The actual trouble started when I wanted to replace the character using the same **substr()** in **Raku**. Having looked at official documentation, I was still lost. I decided to throw the question to the friends at the official Twitter handle `@PerlWChallenge`. Within minutes I had the solution, thanks to **JJ Merelo** and it is called **substr-rw()**.

```perl6
   $_binary-str.substr-rw($i, 1) = $c;
```

The big find of this task was the line below. I am told by default **$i** is readonly, so you can't manipulate. In my code below, I wanted to do **--$i** and I kept getting the error it is readonly. So I asked again friends at the Twitter handle `@PerlWChallenge` and got the response by `Elizabeth Mattijsen @liztormato` as below:

```perl6
   for $left .. $right -> $i is copy {
```

Other than that it was smooth run. Now it was time to return all wave binary strings with maximum **1s**. To do this in **Perl**, I sort the hash, containing binary string with count of **1s**, by values first and then by keys. I wanted to do the same in **Raku** but had no clue how to do it. So once again, I popped the question on the Twitter handle. I didn't have to wait too long for the solution, `PawgChamp (@Mrofnet)` proposed the magical one-liner like below.

```perl6
   for %result.sort({ $^b.value <=> $^a.value || $^a.key cmp $^b.key }) -> $pair {
```

However, I am still not happy with the quality. For now, it does the job.

```perl6
sub flip-binary(Str $binary-str) {

    my %result;
    my $size = $binary-str.chars;
    for 1 .. $size -> $left {
        for $left .. $size -> $right {
            my $_binary-str = $binary-str;
            for $left .. $right -> $i is copy {
                --$i;
                my $c = $_binary-str.substr($i, 1);
                $c = ($c eq "1") ?? (0) !! (1);
                $_binary-str.substr-rw($i, 1) = $c;
            }

            my $k = sprintf("%s (%s,%s)", $_binary-str, $left, $right);
            my $v = $_binary-str.comb("1").elems;
            %result{$k} = $v;
        }
    }

    return flipped-binary(%result);
}

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

Having done the handy subroutines, it is time to create standalone app. For the first time, I am using **multi** operator with **MAIN()**. Having seen how others have used it to get the **Usage** bit generated. It is so easy with the power of **Raku** as you can seen below. The **MAIN()** also handles the data validation without any extra effort.

```perl6
#!/usr/bin/env perl6

use v6.c;

multi sub MAIN(*@) is hidden-from-USAGE {
    say $*USAGE;
    say "\nERROR: Invalid binary string !!!";
}

multi sub MAIN(Str :$binary-str where { m/^ <[01]>+ $/ }) {
    say ($binary-str, flip-binary($binary-str)).join(" => ");
}
```

Lets do unit test script in **Raku**, it turned to be one-liner and nothing much to talk about.

```perl6
#!/usr/bin/env perl6

use Test;

my $unit-tests = {
    "10001" => "11111 (2,4)",
    "10101" => "10111 (4,4) | 11011 (2,4) | 11101 (2,2)",
    "00101" => "11011 (1,4) | 11101 (1,2)"
};

is(flip-binary($_), $unit-tests{$_}, "Tesing binary $_") for $unit-tests.keys;

done-testing;
```
***

## Task #2: Wave Array

***

For the **Wave Array** task, I created two subroutines i.e. **sub fetch-wave-array(Int)** and **sub is-wave(Array)**. For the **sub is-wave(Array)**, I was looking for **Raku** code for **$i % 2 == 1** as in **Perl**. I didn't have struggle much for this and found this.

```perl6
   ($i mod 2 == 1)
```

Rest of the code are below:

```perl6
sub fetch-wave-array($size) {
    die "ERROR: Invalid array size [$size]\n"
        unless ($size ~~ /^\d+$/ && $size > 0);

    my @N = (1 .. $size).permutations();
    my @wave = ();
    for @N -> @array {
        push @wave, @array if is-wave(@array);
    }

    return @wave;
}

sub is-wave(@array) {

    my $is-wave = 1;
    for 1 .. @array.elems-1 -> $i {
        ($i mod 2 == 1)
        ??
        (@array[$i] <= @array[$i-1])
        !!
        (@array[$i] >= @array[$i-1])
        and next;

        $is-wave = 0;
        last;
    }

    return $is-wave;
}
```

Time to do standarlone app for **Wave Array** task. It doesn't warrant any explanation.


```perl6
#!/usr/bin/env perl6

use v6.c;

multi sub MAIN(*@) is hidden-from-USAGE {
    say $*USAGE;
    say "\nERROR: Invalid array size !!!";
}

multi sub MAIN(Int :$N = 4) {
    my @wave = fetch-wave-array($N);
    @wave.map({ print sprintf("[%s]\n", join(",", @$_)) });
}
```

Same goes for unit test script. Did you notice the expected the results in the **$unit-tests**. I tried really hard to match with **[ [1] ]** but for some strange reason beyond my knowledge, it expects it to be **[ (1,), ]**. It is plain ugly.

```perl6
#!/usr/bin/env perl6

use Test;

my $unit-tests = :{
    1 => [ (1,), ],
    2 => [ (2,1), ],
    3 => [ (2,1,3), (3,1,2) ],
    4 => [ (2,1,4,3), (3,1,4,2), (3,2,4,1), (4,1,3,2), (4,2,3,1) ]
};

for $unit-tests.keys.sort -> $size {
    is-deeply(fetch-wave-array($size), $unit-tests{$size}, "array size $size");
}

done-testing;
```
That's it for this week. Speak to you soon.
