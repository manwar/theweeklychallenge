---
title: "Advent Calendar - December 18, 2019"
date: 2019-12-18T00:00:00+00:00
description: "Advent Calendar - December 18, 2019"
type: post
image: images/blog/2019-12-18.jpg
author: Philippe Bruhat
tags: ["Perl"]
---

[**Advent Calendar 2019**](/blog/advent-calendar-2019)
***

The gift is presented by **Philippe Bruhat**. Today he is talking about his solutions to **Task #2: FizzBuzz** of [**"The Weekly Challenge - 001"**](/blog/perl-weekly-challenge-001).

#### Write one-liner to solve FizzBuzz problem and print number 1-20. However, any number divisible by 3 should be replaced by the word fizz and any divisible by 5 by the word buzz. Numbers divisible by both become fizz buzz.

***

This one works by modifying the string until what’s we’re left with is the expected result:

```perl
perl -E '
      say for map {
        s/\d+/$&%5?$&:"$& buzz"/e;
        s/\d+/$&%3?$&:"fizz$&"/e;
        y/0-9//d if /\D/;
        s/^ //;
        $_;
      } 1 .. 20
   '
```

Same idea, but with a list, and each step being handled individually by a map expression:

```perl
perl -E '
     say for
      map @$_ > 1 ? join( $", splice @$_, 0, -1 ) : @$_,
      map [ $_->[-1] % 3 ? @$_ : ( fizz => @$_ ) ],
      map [ $_ % 5      ? $_  : ( buzz => $_ ) ],
      1 .. 20
   '
```

This one is the one I actually wanted to avoid writing: the simple enumeration of all possible case:

```perl
perl -E '
     say for map
      $_ % 5 ? $_ % 3 ? $_
        : "fizz"
        : $_ % 3 ? "buzz"
        : "fizz buzz",
     1 .. 20
   '
```
And then I realized, the four cases can be seen as the four values of a two bit vector, and use that to index the array of all possible values:

```perl
 perl -E '
     say for map
      [ "fizz buzz" => buzz => fizz => $_ ]
      ->[ !!( $_ % 3 ) + !!( $_ % 5 ) * 2 ],
      1 .. 20
   '
```

We can shorten it a bit by using ! instead of !! and moving the values around:

```perl
perl -E '
    say for map
     [ $_ => fizz => buzz => "fizz buzz" ]
     ->[ !( $_ % 3 ) + !( $_ % 5 ) * 2 ],
     1 .. 20
  '
```

Using the fact that a number is divisible by 5 if it ends with 0 or 5:

```perl
perl -E '
     say for map
      [ $_ => fizz => buzz => "fizz buzz" ]
      ->[ !( $_ % 3 ) + /[50]$/ * 2 ],
      1 .. 20
   '
```
***
If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2019**](/blog/advent-calendar-2019)
