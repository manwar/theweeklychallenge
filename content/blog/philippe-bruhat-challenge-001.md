---
title: "Proposed Solution for Challenge - 001"
date: 2019-03-28T10:00:00+00:00
type: post
image: images/blog/book_pwc_001.jpg
author: Philippe Bruhat (BooK)
tags: ["Perl5"]
---
This is actually as we received in response to the challenge by Philippe Bruhat. Highly recommended.

# Challenge #1

Write a script to replace the character ‘e’ with ‘E’ in the string ‘Perl Weekly Challenge’. Also print the number of times the character ‘e’ found in the string.

```
    $ perl -E '$_=shift;say y/e/E/;say' 'Perl Weekly Challenge'
    5
    PErl WEEkly ChallEngE
```

Historical note: `y///c` is called "Abigail's length horror" by golfers and obfuscators (couldn't trace where the term came from). It saves one character over `length` in a golf setting, and can be written as `y>>>c` (pick some confusing character depending on context) or `y cccccccccccc` in an obfuscated setting.

I had written my first attempt with -e, but as a wink to the challenge, I replaced it with -E. Having used a golfer trick, the best I could do was to shorten `print` to `say`. :-)

# Challenge #2

Write one-liner to solve FizzBuzz problem and print number 1-20. However, any number divisible by 3 should be replaced by the word fizz and any divisible by 5 by the word buzz. Numbers divisible by both become fizz buzz.

This one works by modifying the string until what's we're left with is the expected result:

```
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

```
   perl -E '
     say for
      map @$_ > 1 ? join( $", splice @$_, 0, -1 ) : @$_,
      map [ $_->[-1] % 3 ? @$_ : ( fizz => @$_ ) ],
      map [ $_ % 5      ? $_  : ( buzz => $_ ) ],
      1 .. 20
   '
```

This one is the one I actually wanted to avoid writing: the simple enumeration of all possible case:

```
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

```
   perl -E '
     say for map
      [ "fizz buzz" => buzz => fizz => $_ ]
      ->[ !!( $_ % 3 ) + !!( $_ % 5 ) * 2 ],
      1 .. 20
   '
```

We can shorten it a bit by using ! instead of !! and moving the values around:

```
  perl -E '
    say for map
     [ $_ => fizz => buzz => "fizz buzz" ]
     ->[ !( $_ % 3 ) + !( $_ % 5 ) * 2 ],
     1 .. 20
  '
```

Using the fact that a number is divisible by 5 if it ends with 0 or 5:

```
   perl -E '
     say for map
      [ $_ => fizz => buzz => "fizz buzz" ]
      ->[ !( $_ % 3 ) + /[50]$/ * 2 ],
      1 .. 20
   '
```
