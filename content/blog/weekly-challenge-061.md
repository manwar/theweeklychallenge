---
title: "BLOG: The Weekly Challenge #061"
date: 2020-05-19T00:00:00+00:00
description: "Blog for the weekly challenge #061."
type: post
image: images/blog/weekly-challenge-061.jpg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

# HEADLINE

At first, I thought **Product SubArray** is easy task. Therefore I went public categorised as **Task #1**. My definition of **easy** task is you just start coding without doing any ground work. However when I started coding, I had to take a pause and do processing in my head befoore coding. So then as per my definition, **Product SubArray** no longer consider as an `easy` task. After finishing the task in no time once I understood the flow, it turned out to be clean solution. I must confess, my brain still do **thinking** as per the rules of **Perl**. I am hoping, one day I could do the mental processing in **Raku**. The **IPv4 Partition** task was the tough nut to crack honestly speaking at first. After working out the logic on paper, it becomes easier. Overall, fun and twisting tasks to work on.

Once again, I was able to complete both task in **Perl** on the first day itself i.e. **Monday**. The following morning, after the **Sehar**, I did **Raku** solutions for both the tasks. I was really charged up after completing both the tasks in **Perl** and **Raku**. I was relaxed and started thinking about blogging.

Was there any difficulty dealing with **Raku** solution this time? The short answer is **No**. It was straight forward translation with few glitch that I will talk about down below.

Let me share my solutions to the **[Perl Weekly Challenge - 061](/blog/perl-weekly-challenge-061)**.

***

## TASK #1 › Product SubArray

#### Reviewed by Ryan Thompson

Given a list of 4 or more numbers, write a script to find the contiguous sublist that has the maximum product. The length of the sublist is irrelevant; your job is to maximize the product.

***
<br>

First thing first, lets define the helper **sub max_product_subarray()**.

The only bit that seems worth mentioning is the **return** statement.

It sorts the hash by values and picks the first element.

```perl
return [
    sort { $subarray->{$b} <=> $subarray->{$a} } keys %$subarray
]->[0];
```

The complete definition is as below:

```perl
sub max_product_subarray {
    my ($array) = @_;

    my $subarray = {};
    foreach my $i (0 .. $#$array) {
        foreach my $j ($i .. $#$array-1) {
            my @x = ();
            my $y = 1;
            foreach my $k ($i .. ++$j) {
                push @x, $array->[$k];
                $y *= $array->[$k];
            }
            $subarray->{sprintf("[ %s ]", join ", ", @x)} = $y;
        }
    }

    return [
        sort { $subarray->{$b} <=> $subarray->{$a} } keys %$subarray
    ]->[0];
}
```

Getting the above subroutine converted into **Raku** was not difficult. I love to be strict parameter type checking when dealing with **Raku**.

I have learnt this `@array where .all ~~ Int` from others to do type checking parameter passed as array.

What does this enforce?

It simply says, *"I am expecting an array where every element must be of type `Int`"*.

Like above as in **Perl** solution, here also the magical line is the **return** statement.

I love the method chaining.

It is simply beautiful.

```perl6
return |$subarray.sort(*.value).reverse.[0].keys;
```

The complete subroutine definition is defined below:

```perl6
sub max-product-subarray(@array where .all ~~ Int) {

    my $subarray = {};
    my $size = @array.elems;
    for 0 .. $size-1 -> $i {
        for $i .. $size-2 -> $j is copy {
            my @x = ();
            my $y = 1;
            for $i .. ++$j -> $k {
                @x.push: @array[$k];
                $y *= @array[$k];
            }
            $subarray.{sprintf("[ %s ]", @x.join(", "))} = $y;
        }
    }

    return |$subarray.sort(*.value).reverse.[0].keys;
}
```

With the helper subroutine, I can now complete the solution in no time. It is like one-liner,

```perl
my $n = [ 2, 5, -1, 3 ];
print sprintf("[ %s ] => %s\n", join(", ", @$n), max_product_subarray($n));
```

**Raku** does exactly the same as above.

I have added the default values as an extra because it is so easy to do with **MAIN()**.

```perl6
sub MAIN(:@n where .all ~~ Int = <2 5 -1 3>) {
    say sprintf("[ %s ] => %s", @n.join(", "), max-product-subarray(@n));
}
```

Time for unit test, I am being lazy and just testing one use case.

```perl
use Test::More;

is( max_product_subarray([ 2, 5, -1, 3]), "[ 2, 5 ]" );

done_testing;
```

**Raku** unit testing code looks identical, literally.

```perl6
use Test;

is max-product-subarray(<2 5 -1 3>), "[ 2, 5 ]";

done-testing;
```

***

## TASK #2 › IPv4 Partition

#### Reviewed by Ryan Thompson

***

You are given a string containing only digits **(0..9)**. The string should have between **4** and **12** digits.

Write a script to print every possible valid **IPv4** address that can be made by partitioning the input string.

For the purpose of this challenge, a valid **IPv4** address consists of four **“octets”** i.e. **A**, **B**, **C** and **D**, separated by dots (.).

Each octet must be between **0** and **255**, and must not have any leading zeroes. (e.g., `0` is OK, but `01` is not.)

***
<br>

*The naughty task of the week.*

I tried to keep it simple and easy to read.

No magic happening here, just standard looping over 3-times.

```perl
sub ipv4_partition {
    my ($ipv4_string) = @_;

    my @valid = ();
    my $ipv4  = '';
    foreach my $i (1 .. length($ipv4_string)-3) {
        foreach my $j ($i+1 .. length($ipv4_string)-2) {
            foreach my $k ($j+1 .. length($ipv4_string)-1) {
                $ipv4 = substr($ipv4, 0, $k) . "." . substr($ipv4, $k)
                    if (length($ipv4) >= $k);
                $ipv4 = substr($ipv4, 0, $j) . "." . substr($ipv4, $j)
                    if (length($ipv4) >= $j);
                $ipv4 = substr($ipv4, 0, $i) . "." . substr($ipv4, $i)
                    if (length($ipv4) >= $i);

                push @valid, $ipv4 if is_valid($ipv4);
                $ipv4 = $ipv4_string;
            }
        }
    }

    return @valid;
}
```

I also created tiny **sub is_valid()** to help with validating **IPv4** address.

It is just doing basic validation.

```perl
sub is_valid {
    my ($ipv4) = @_;
    return 0 if (length($ipv4) == 0);

    foreach my $octet (split /\./, $ipv4) {
        return 0 if ((length($octet) > 3)
                     ||
                     ($octet > 255)
                     ||
                     (length($octet) > 1 && $octet =~ /^0/));
    }

    return 1;
}
```

For **Raku**, I just did straight forward translation except one bit.

I did it because I can.

The following line in **Perl**

```perl
my @valid = ();
```

becomes this in **Raku** with the use of `Empty`.

How can you not love the language?

```perl6
my @valid = Empty;
```

Everything else is just plain english.

```perl6
sub ipv4-partition(Str $ipv4_string) {

    my @valid = Empty;
    my $ipv4  = '';
    my $size  = $ipv4_string.chars;
    for 1 .. $size-3 -> $i {
        for $i+1 .. $size-2 -> $j {
            for $j+1 .. $size-1 -> $k {
                $ipv4 = $ipv4.substr(0, $k) ~ "." ~ $ipv4.substr($k)
                    if $ipv4.chars >= $k;
                $ipv4 = $ipv4.substr(0, $j) ~ "." ~ $ipv4.substr($j)
                    if $ipv4.chars >= $j;
                $ipv4 = $ipv4.substr(0, $i) ~ "." ~ $ipv4.substr($i)
                    if $ipv4.chars >= $i;

                @valid.push: $ipv4 if is-valid($ipv4);
                $ipv4 = $ipv4_string;
            }
        }
    }

    return @valid;
}
```

The basic **IPv4** address validation is defined below.

Here also I tried to use `True` and `False` instead of regular `1` and `0`.

I get all these magical stuff out of the box.

Great, isn't it?

```perl6
sub is-valid(Str $ipv4) {

    return False if $ipv4.chars == 0;

    for $ipv4.split(".") -> $octet {
        return False if ($octet.chars > 3)
                        ||
                        ($octet.Int > 255)
                        ||
                        ($octet.chars > 1 && $octet ~~ /^0/);
    }

    return True;
}
```

A very thin wrapper around the **sub ipv4_partition()** does the job.

```perl
my $S = $ARGV[0] || "25525511135";
my @V = ipv4_partition($S);
print sprintf("%s = %s\n", $S, join (", ", @V));
```

I did the same to get **Raku** app done.

```perl6
use v6.d;

sub MAIN(Str $S = "25525511135") {
    my Str @V = ipv4-partition($S);
    say sprintf("%s = %s", $S, @V.join(", "));
}
```

Basic single use case testing, sorry :-(

```perl
use Test::More;

my $S = "25525511135";
my @V = ipv4_partition($S);

is (join (", ", @V), "255.255.11.135, 255.255.111.35");

done_testing;
```

Same applied to **Raku** as well.

```perl6
use Test;

my Str @V = ipv4-partition("25525511135");

is @V.join(", "), "255.255.11.135, 255.255.111.35";

done-testing;
```

***

That's it for this week. Speak to you soon.
