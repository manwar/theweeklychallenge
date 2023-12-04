---
title: "Advent Calendar - December 4, 2023"
date: 2023-12-04T00:00:00+00:00
description: "Advent Calendar - December 4, 2023."
type: post
image: images/blog/2023-12-04.jpg
author: Dave Jacoby
tags: ["Perl"]
---

## [**Advent Calendar 2023**](/blog/advent-calendar-2023)
### | &nbsp; [**Day 3**](/blog/advent-calendar-2023-12-03) &nbsp; | &nbsp; **Day 4** &nbsp; |
***

The gift is presented by `Dave Jacoby`. Today he is talking about his solution to [**The Weekly Challenge - 209**](/blog/perl-weekly-challenge-209). This is re-produced for `Advent Calendar 2023` from the original [**post**](https://jacoby.github.io/2023/03/20/give-a-little-bit-weekly-challenge-209.html).

***

<br>

## Give A Little Bit
***

Welcome to [**Weekly Challenge #209**](/blog/perl-weekly-challenge-209). I can’t do another `HTTP.cats` pic because [**209 is not an assigned HTTP response code**](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml), but it is [**the area code for a huge part of central California**](https://www.allareacodes.com/209), including Calaveras county, made famous by Mark Twain and [**The Celebrated Jumping Frog of Calaveras County**](https://en.wikipedia.org/wiki/The_Celebrated_Jumping_Frog_of_Calaveras_County).

I was so tempted to title this something like `"The Jumping Camel of Calaveras County"`, but I didn’t.

<br>

### Task 1: Special Bit Characters
***

    You are given an array of binary bits that ends with 0.

    Valid sequences in the bit string are:

    [0] -decodes-to-> "a"
    [1, 0] -> "b"
    [1, 1] -> "c"

    Write a script to print 1 if the last character is an “a” otherwise print 0.

<br>

### Talk It Out
***

The simple way is to go through the sequence from the front, removing them once pulled, and whatever is last (which will either be `a` or `b`, because the `0` ends every sequence) and return based on the last one. It’s `O(n)` because you have to go through everything.

There is a more elegant way to go through this.

`[0]` will always be `a`.

`[..., 0 , 0]` will always be `a`.

The decision between whether `[ ... , 1, 0 ]` will be `a` or `b` is based on the number of `1s` there are before `0`. If it is `odd`, then the last `1` 0 will be `b`, but if it is `even`, there will be a series of `c`s before the last `a`.

I put the `"find each character"` version and the more elegant version in my solution below. I think that the full-decoding version is probably more understandable and more extendable, if we were going to do more with our `a`, `b` and `c`s.

### Show Me The Code!
***

<br>

```perl
#!/usr/bin/env perl

use strict;
use warnings;
use experimental qw{ say postderef signatures state };

my @examples = (

    [qw{ 0 }],
    [qw{ 0 0 }],
    [qw{ 1 0 }],
    [qw{ 0 0 0 }],
    [qw{ 0 1 0 }],
    [qw{ 1 0 0 }],
    [qw{ 1 1 0 }],

    [qw{ 1 1 1 1 1 0 }],
    [qw{ 1 1 1 1 1 1 0 }],
    [qw{ 1 1 1 1 1 1 1 0 }],
    [qw{ 1 1 1 1 1 1 1 1 0 }],

);

for my $e (@examples) {
    my @bits = $e->@*;
    my $bits = join ', ', @bits;
    $bits = qq{($bits)};
    my $o = special_bit_chars(@bits);
    my $p = sbc(@bits);
    say <<"END";
    Input:  \@bits = $bits
    Output: $o
            $p
END
}

sub sbc (@array) {
    return 1 if scalar @array == 1;    #           0
    return 1 if $array[-2] == 0;       #     ... 0 0
    my $str = join '', @array;
    my ($c) = $str =~ m{(1+)0$}g;
    return ( length $c ) % 2 ? 0 : 1;
}

sub special_bit_chars (@array) {

    # 0 = a
    # 1,0 = b
    # 1,1 = c

    my $last;
    while (@array) {
        if ( $array[0] == 1 ) {
            if ( $array[1] == 1 ) {
                $last = 'C';
                shift @array;
                shift @array;
            }
            elsif ( $array[1] == 0 ) {
                $last = 'B';
                shift @array;
                shift @array;
            }
        }
        else {
            $last = 'A';
            shift @array;
        }
    }
    return $last eq 'A' ? 1 : 0;
}
```

<br>

```perl
$ ./ch-1.pl

    Input:  @bits = (0)
    Output: 1
            1

    Input:  @bits = (0, 0)
    Output: 1
            1

    Input:  @bits = (1, 0)
    Output: 0
            0

    Input:  @bits = (0, 0, 0)
    Output: 1
            1

    Input:  @bits = (0, 1, 0)
    Output: 0
            0

    Input:  @bits = (1, 0, 0)
    Output: 1
            1

    Input:  @bits = (1, 1, 0)
    Output: 1
            1

    Input:  @bits = (1, 1, 1, 1, 1, 0)
    Output: 0
            0

    Input:  @bits = (1, 1, 1, 1, 1, 1, 0)
    Output: 1
            1

    Input:  @bits = (1, 1, 1, 1, 1, 1, 1, 0)
    Output: 0
            0

    Input:  @bits = (1, 1, 1, 1, 1, 1, 1, 1, 0)
    Output: 1
            1
```

<br>

### Task 2: Merge Account
***

    You are given an array of accounts i.e. name with list of email addresses.

    Write a script to merge the accounts where possible. The accounts can only be merged if they have at least one email address in common.

<br>

## Talk It Out
***

Key thought is that names are not unique. I threw together a `Daves and Friends of Daves` BOF at a `Perl Conference` because I noticed a large number of `Daves` around. And, for reasons, I missed it. Alas.

So, we’re finding that the things that should be unique, email addresses, are not, and we’re using that to find and join accounts in our contact list with the same emails.

I decided to use [**List::Compare**](https://metacpan.org/pod/List::Compare), rather than play around with comparing each member of each. `List::Compare` isn’t in `core`, so it isn’t as portable, but it’s so nice!

We compare every account with every other, using `get_intersection` to tell if there are any overlapping email addresses, then using `get_union` to list every address in both of them, which then becomes the email address list of the first account. We then clear the second account, and before we return the output, we clear out the empty

### Show Me The Code!
***

<br>

```perl
#!/usr/bin/env perl

use strict;
use warnings;
use experimental qw{ say postderef signatures state };

use List::Compare;
use JSON;
my $json = JSON->new->pretty;

my @examples = (

    [
        [ 'A', 'a1@a.com', 'a2@a.com' ],
        [ 'B', 'b1@b.com' ],
        [ 'A', 'a3@a.com', 'a1@a.com' ]
    ],
    [
        [ 'A', 'a1@a.com', 'a2@a.com' ],
        [ 'B', 'b1@b.com' ],
        [ 'A', 'a3@a.com' ],
        [ 'B', 'b2@b.com', 'b1@b.com' ]
    ],
);

for my $e (@examples) {
    my $i = format_mailbox( $e->@* );
    my @o = merge_mailbox( $e->@* );
    my $o = format_mailbox(@o);
    say <<"END";
    Input:  \@accounts =
      $i
    Output:
      $o
END
    say '';
}

# yes, a more complex version of JSON->encode
sub format_mailbox (@accounts) {
    @accounts = sort { $a->[0] cmp $b->[0] } @accounts;
    my $output = join ",\n\t", map { qq{[$_]} }
        map {
        join ',',
            map { qq{"$_"} }
            $_->@*
        } @accounts;
    $output = join ' ', '[', $output, ']';
    return $output;
}

sub merge_mailbox (@input) {
    my @accounts = @input;
    for my $i ( 0 .. -2 + scalar @accounts ) {
        my $ai = $accounts[$i];
        my @ii = $ai->@*;
        shift @ii;
        for my $j ( $i + 1 .. -1 + scalar @accounts ) {
            my $aj = $accounts[$j];
            next unless defined $aj;
            my @jj = $aj->@*;
            shift @jj;
            my $lc    = List::Compare->new( \@ii, \@jj );
            my @inter = $lc->get_intersection;
            if ( scalar @inter ) {
                my @union = $lc->get_union;
                my $ni    = $ai->[0];
                $ai->@* = ( $ni, @union );
                $aj->@* = ();
            }
        }
    }
    @accounts = sort { $a->[0] cmp $b->[0] } grep { scalar $_->@* } @accounts;
    return @accounts;
}
```

<br>

```perl
$ ./ch-2.pl
    Input:  @accounts =
      [ ["A","a1@a.com","a2@a.com"],
        ["A","a3@a.com","a1@a.com"],
        ["B","b1@b.com"] ]
    Output:
      [ ["A","a1@a.com","a2@a.com","a3@a.com"],
        ["B","b1@b.com"] ]


    Input:  @accounts =
      [ ["A","a1@a.com","a2@a.com"],
        ["A","a3@a.com"],
        ["B","b1@b.com"],
        ["B","b2@b.com","b1@b.com"] ]
    Output:
      [ ["A","a1@a.com","a2@a.com"],
        ["A","a3@a.com"],
        ["B","b1@b.com","b2@b.com"] ]
```

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

| &nbsp; [**Advent Calendar 2023**](/blog/advent-calendar-2023) &nbsp; |
