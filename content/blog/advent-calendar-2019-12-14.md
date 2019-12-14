---
title: "Advent Calendar - December 14, 2019"
date: 2019-12-14T00:00:00+00:00
description: "Advent Calendar - December 14, 2019"
type: post
image: images/blog/2019-12-14.jpg
author: Scimon Proctor
tags: ["Raku"]
---

[**Advent Calendar 2019**](/blog/advent-calendar-2019)
***

The gift is presented by [**Scimon Proctor**](/blog/meet-the-champion-027). Today he is talking about his solutions to **Task #2: Pascal Triangle** of [**"The Weekly Challenge - 003"**](/blog/perl-weekly-challenge-003).

#### Create a script that generates Pascal Triangle. Accept number of rows from the command line. The Pascal Triangle should have at least 3 rows. For more information about Pascal Triangle, check this [**wikipedia page**](https://en.wikipedia.org/wiki/Pascal%27s_triangle).

***

So Pascal's Triangle is pretty and I decided I wanted to get it nicely laid out like so:

                       1
                     1   1
                   1   2   1
                 1   3   3   1
               1   4   6   4   1
             1   5   10  10  5   1
           1   6   15  20  15  6   1
         1   7   21  35  35  21  7   1
       1   8   28  56  70  56  28  8   1
     1   9   36  84 126 126  84  36  9   1

So this challenge has two parts. Generating the numbers for the triangle and then laying it out. In this case I didn't read the article too much but had a neat idea. For a given row (eg **[1,2,1]** you can generate the next row by implementing doing the following):

```perl6
# Here's our row
my @row = [1,2,1];
# Make a copy with a 0 at the start
my @row1 = [0, |@row]; # [0,1,2,1] (| breaks the array down so it doesn't get added as a single object in this case)
# Make a copy with a 0 at the end
my @row2 = [|@row, 0]; # [1,2,1,0]

# For each item in row1 add it to the same item in row2
my @row3 = [
    @row1[0] + @row2[0], # 0 + 1 = 1
    @row1[1] + @row2[1], # 1 + 2 = 3
    @row1[2] + @row2[2], # 2 + 1 = 3
    @row1[3] + @row2[3], # 1 + 0 = 1
];
```

So... that's a thing but it's a bit unwieldy if only there was some kind of way to simplify this. Oh yes, the [**Zip metaoperator**](https://docs.perl6.org/language/operators#index-entry-Z_%28zip_metaoperator%29) **Z**. Place a **Z** between two lists and it will default to applying the **,** operator to each item in turn to make a new list of lists :

    (0, 1, 2, 1) Z (1, 2, 1, 0) => ((0,1), (1,2), (2,1), (1,0))

But you can give **Z** and inline operator to apply list for instance **+** giving you :

    0,1,2,1) Z+ (1,2,1,0) => (1, 3, 3, 1)

Which looks very nice. So if we just wanted our script to out lists of lists that make up Pascal's Triangle we could to this :

```perl6
 Note the challenge says we need at least 3 lines so we catch that here.
multi sub MAIN( Int() $lines is copy where * > 2 ) {
    # Set up the initial state.
    # Decrement lines.
    my @row = (1);
    my @out = [ [1], ]; # Note we need a trailing comma or the array will be flattened
    $lines--;

    # Did I mention this earlier? Repeat / While is like the Perl5 do / while pair
    repeat {
        @row = (0, |(@row)) Z+ (|(@row), 0); # Here's the Zip magic
        @out.push( @row.clone ); # We need to clone our row or will get clobbered in the next loop
        $lines--;
    } while ( $lines );

    @out.say;
}
```

And that works but... well I wanted it pretty. The simple thought would be to join each row with spaces and then join the lot with newlines but just doing that you end up with :

    1
    1 1
    1 2 1
    1 3 3 1
    1 4 6 4 1
    1 5 10 10 5 1
    1 6 15 20 15 6 1
    1 7 21 35 35 21 7 1
    1 8 28 56 70 56 28 8 1
    1 9 36 84 126 126 84 36 9 1


Which is.... a bit meh.

Of course you could make those lines up then find the length of the last line and left pad all the other by half that amount.

```perl6
@out = @out.map( { $_.join(" ") } );

my $len = @out[*-1].codes;

@out.map( { ( " " x ( ($len - $_.codes) div 2) ) ~ "$_" } ).join("\n").say;
```

And that's a bit nicer :

                       1
                     1   1
                   1   2   1
                 1   3   3   1
               1   4   6   4   1
             1   5   10  10  5   1
           1   6   15  20  15  6   1
         1   7   21  35  35  21  7   1
       1   8   28  56  70  56  28  8   1
     1   9   36  84 126 126  84  36  9   1


But it falls apart when larger numbers get added. So we need to pad our output based on the length of the biggers number. Here's what I came up with :

```perl6
sub pad( Str $val, Int $len ) {
    my $diff = $len - $val.codes;
    my $rpad = " " x ( ( $diff div 2 ) + 1 );
    my $lpad = " " x ( ( $diff div 2 ) + ( $diff % 2 ) );
    return "{$lpad}{$val}{$rpad}";
}
```

Pass in the number to pad and the length of the largest number and it returns the number all laiud out nicely. With that here's my final code :

```perl6
sub pad( Str $val, Int $len ) {
    my $diff = $len - $val.codes;
    my $rpad = " " x ( ( $diff div 2 ) + 1 );
    my $lpad = " " x ( ( $diff div 2 ) + ( $diff % 2 ) );
    return "{$lpad}{$val}{$rpad}";
}

multi sub MAIN( Int() $lines is copy where * > 2 ) {
    my @row = (1);
    my @out = [ [1], ];
    $lines--;
    my $max = 1;

    repeat {
        @row = (0, |(@row)) Z+ (|(@row), 0);
        @out.push( @row.clone );
        $max = @row.max;
        $lines--;
    } while ( $lines );

    my $len = $max.codes;

    @out = @out.map( -> @list { @list.map( { pad($_.Str,$len) } ).join("") } );

    $len = @out[*-1].codes;

    @out.map( { ( " " x ( ($len - $_.codes) div 2) ) ~ "$_" } ).join("\n").say;
}

multi sub MAIN($) {
    note "Please input a number of lines that must be at least 3";
}
```

And that seems to do the trick which is fun. (This is the code used to make the triangle at the top).



***
If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2019**](/blog/advent-calendar-2019)
