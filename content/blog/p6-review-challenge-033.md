---
title: "Laurent Rosenfeld Weekly Review: Challenge - 033"
date: 2019-11-17T00:00:00+00:00
description: "Laurent Rosenfeld Weekly Review: Challenge - #033."
type: post
image: images/blog/p6-review-challenge-033.jpg
author: Laurent Rosenfeld
tags: ["Raku"]
---
***
# Raku Solutions Weekly Review
***

## Task #1: Letter Count

This is derived in part from my [blog post](http://blogs.perl.org/users/laurent_r/2019/11/perl-weekly-challenge-33-count-letters-and-multiplication-tables.html) made in answer to the [Week 33 of the Perl Weekly Challenge](https://perlweeklychallenge.org/blog/perl-weekly-challenge-033/) organized by  <a href="http://blogs.perl.org/users/mohammad_s_anwar/">Mohammad S. Anwar</a> as well as answers made by others to the same challenge.

The challenge reads as follows:

*Create a script that accepts one or more files specified on the command-line and count the number of times letters appeared in the files.*

*So with the following input file sample.txt:*

    The quick brown fox jumps over the lazy dog.

*the script would display something like:*

    a: 1
    b: 1
    c: 1
    d: 1
    e: 3
    f: 1
    g: 1
    h: 2
    i: 1
    j: 1
    k: 1
    l: 1
    m: 1
    n: 1
    o: 4
    p: 1
    q: 1
    r: 2
    s: 1
    t: 2
    u: 2
    v: 1
    w: 1
    x: 1
    y: 1
    z: 1

This is not specified explicitly, but from the example, we gather that what is desired here is a case-insensitive letter count (in the example, both "T" and "t" count as "t"). So we will apply the `lc` (lower case) built-in function to the input.

## My Solution

When solving the same task in Perl 5 for the weekly challenge, we used a hash as an histogram, i.e. as a collection of counters. We could do the same in Raku (formerly known as Perl 6). In Raku, however, we can also use a `Bag`, named `$histo`, rather than a hash, to easily implement an histogram. With just a little bit of work, we're able to populate the bag in just one statement, without any explicit loop (otherwise, we would have had to use a `BagHash` instead, since a `bag` is not mutable and therefore needs to be populated in one single step). Also, if a letter does not exist in the `$histo` bag, the bag will report 0, so that, contrary to the hash solution, we don't need any special code to avoid an `undefined` warning for such an edge case. All this makes the code much more concise than its Perl 5 counterpart.

``` Perl6
use v6;

sub MAIN (*@files) {
    my $histo = (map {.IO.comb».lc}, @files).Bag;
    say "$_ : ", $histo{$_} for 'a'..'z';
}
```

Used with one input file, the program displays the following:

    $ perl6 histo_let.p6 intersection.pl
    a : 96
    b : 46
    c : 25
    d : 22
    e : 72
    f : 19
    g : 20
    h : 4
    i : 77
    j : 0
    k : 0
    [... Lines omitted for brevity ...]
    y : 31
    z : 0

And it works similarly with several input files:

    $ ./perl6 histo_let.p6 intersection.pl histo*
    a : 199
    b : 154
    c : 123
    d : 111
    e : 271
    f : 99
    g : 37
    h : 49
    i : 170
    j : 4
    k : 11
    [... Lines omitted for brevity ...]
    y : 68
    z : 9

Note that we're not trying to filter alphabetical characters when populating the `$histo` bag: we're simply printing out only the bag entries for the `'a'..'z'` range.

## Alternative Approaches

Not less than 17 solutions were submitted for this task, which is probably the largest count so far.

[Arne Sommer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/arne-sommer/perl6/ch-1.p6) provided a very compact solution, at least in terms of the way of populating a `Bag` of counters:

``` Perl6
my %result = $*ARGFILES.comb>>.lc.grep(* ~~ /<:L>/).Bag;

for %result.keys.sort -> $key
{
  say "$key: %result{$key}";
}
```

[Mark Senn](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/mark-senn/perl6/ch-1.p6) also suggested a fairly concise solution, using a hash:

``` Perl6
my %count;
$*ARGFILES.lines.lc.comb(/<[a..z]>/).map({%count{$_}++});
%count.keys.sort.map({"$_: %count{$_}".say});
```

[Markus Holzer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/markus-holzer/perl6/ch-1.p6) also contributed a rather compact solution (even though it does not look so at first glance because of its formatting), holding in just one statement:

``` Perl6
sub MAIN( *@files )
{
    .say for @files
        .map({ |.IO.lines.lc.comb( /\w/ ) })
        .Bag
        .sort
        .map({  "{.key}: {.value}" })
    ;
}
```

[Daniel Mita](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/daniel-mita/perl6/ch-1.sh) made an even more compact solution in the form of a Raku one-liner also using a `Bag`:

    perl6 -e '.say for @*ARGS ?? slurp.lc.comb(/<[a..z]>/).Bag.sort !! "give at least 1 filename"'

[Ryan Thompson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/ryan-thompson/perl6/ch-1.p6) also used a `Bag` and provided perhaps the most concise solution of all:

``` Perl6
.fmt('%s: %d').say for $*ARGFILES.comb».lc.Bag{'a'..'z'}:p;
```

[Kevin Colyer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/kevin-colyer/perl6/ch-1.p6) went the other way around and provided a comprehensive  solution using a `count` subroutine to populate a temporary and anonymous `BagHash` for each input file, and then merging the result into a final `BagHash`:

``` Perl6
sub count($text) {
    return BagHash.new( $text.lc.comb.grep: * ~~ / <alpha> / );
}

multi MAIN(*@files) {
    my BagHash $bag;
    for @files -> $f {
        next unless $f.IO:f;
        $bag{.key}+=.value for count($f.IO.slurp); # Add returned bag to bag hash
    }
    $bag{"_"}:delete;
    say "$_: {$bag{$_}}" for $bag.keys.collate;
}
```

Kevin's program iterates over the values of the `HashBag` returned by the `count` subroutine to add the values associated with each letter. I suppose it would have been slightly simpler to use the infix `(+)` (or `⊎`) [baggy addition operator](https://docs.perl6.org/language/operators#infix_(+),_infix_%E2%8A%8E) (see Richard Nutall's solution below for an example of this).

Note that Kevin also provided a `pod` outlining the challenge task and an alternate multi `MAIN` subroutine to run a test suite.

[Richard Nutall](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/rnuttall/perl6/ch-1.p6), a new member of the Perl Weekly Challenge, used the infix `⊎` baggy addition operator together with the assignment operator to populate his `Bag` of counters in just one statement:

``` Perl6
sub MAIN(*@files) {
    #Task 1 - a Test of Bag and Bag addition
    my Bag $counts = bag { 'a' .. 'z' => 0 };

    # Create a bag for each file and add counts using Bag addition ⊎ or (+)
    $counts ⊎= $_.IO.slurp.lc.comb.Bag for @files;

    say "$_: $counts{$_}"              for 'a' .. 'z';
}
```
Note that I don't think that the loop to initialize the 'a' to 'z' counters of the bag to 0 is necessary: if a letter isn't available in a bag, its count will be reported to be 0 without any error or warning.

[Noud](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/noud/perl6/ch-1.p6) also supplied a comprehensive detailed solution using a hash:

``` Perl6
sub MAIN(*@files) {
    my %letter_count;
    %letter_count<a b c d e f g h i j k l m
                  n o p q r s t u v w x y z> = 0 xx *;

    for @files -> $file {
        for $file.IO.comb -> $letter {
            if (%letter_count{$letter.lc}:exists) {
                %letter_count{$letter.lc}++;
            }
        }
    }

    for %letter_count.sort(*.key)>>.kv -> ($letter, $count) {
        say "$letter: $count";
    }
}
```

[Simon Proctor](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/simon-proctor/perl6/ch-1.p6) also went for a quite comprehensive program. He created a `read-files` subroutine to do almost all the work with a `Bag`, as well as three multi `MAIN` subroutines to handle various possible arguments passed to the program:

``` Perl6
multi sub MAIN( Bool :h($help) where so * ) {
    say $*USAGE;
}

#| Read data from standard in.
multi sub MAIN() {
    read-files( IO::CatHandle.new( $*IN ) );
}

#| Given a list of filenames reads each in turn
multi sub MAIN(
    *@files where all(@files) ~~ ValidFile, #= Files to read
) {
    read-files( IO::CatHandle.new( @files ) );
}

sub read-files( IO::CatHandle $files ) {
    my %results := $files.words.map(*.lc.comb()).flat.grep( { $_ ~~ m!<[a..z]>! } ).Bag;
    .say for ("a".."z").map( { "{$_} : {%results{$_}}" } );
}
```

[Adam Russell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/adam-russell/perl6/ch-1.p6) used a hash for storing the counters and a `for` loop to iterate over the lines of the input:

``` Perl6
sub MAIN {
    my %letter_count;
    for $*IN.lines() -> $line {
        my @characters = $line.split("");
        for @characters -> $c {
            %letter_count{$c}++ if $c~~m/<alpha>/;
        }
    }
    for sort keys %letter_count -> $key {
        print "$key: %letter_count{$key}\n";
    }
}
```

[Athanasius](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/athanasius/perl6/ch-1.p6) is not a challenger from whom I have come to expect very terse programs. As usual, his program, which uses a hash to host the counters, is quite comprehensive:

``` Perl6
sub MAIN
(
    Bool:D :$count = False,         #= Order by letter counts (highest first)
    Bool:D :$help  = False,         #= Print usage details and exit
           *@filenames,             #= Name(s) of file(s) containing text data
)
{
    if $help || @filenames.elems == 0
    {
        $*USAGE.say;
    }
    else
    {
        my UInt %counts;

        for @filenames -> Str $filename
        {
            for $filename.IO.lines -> Str $line
            {
                ++%counts{ .lc } for $line.split('').grep({ rx:i/ <[a..z]> / });
            }
        }

        my &sort-by = $count ?? sub { %counts{ $^b } <=> %counts{ $^a } ||
                                       $^a cmp $^b }
                             !! sub {  $^a cmp $^b };

        "%s: %d\n".printf: $_, %counts{ $_ } for %counts.keys.sort: &sort-by;
    }
}
```

[Jaldhar H. Vyas](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/jaldhar-h-vyas/perl6/ch-1.p6)  also used a hash to store the counters:

```Perl6
sub MAIN(
    *@files
) {
    my %totals;

    if @files.elems {
        for @files -> $file {
            $file.IO.comb.map({ %totals{$_.lc}++; });
        }
    } else {
        $*IN.comb.map({ %totals{$_.lc}++; });
    }

    %totals.keys.grep({ / <lower> / }).sort.map({
        say "$_: %totals{$_}";
    });
}
```

[Javier Luque](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/javier-luque/perl6/ch-1.p6) also used a hash for his letter histogram:

``` Perl6
sub MAIN (*@filenames) {
    my %counts;

    # Loop through each file
    for @filenames -> $filename {
        my $fh = $filename.IO.open orelse .die;

        # Increment count for each word char
        while (my $char = $fh.getc) {
            %counts{$char.lc}++ if ($char.lc ~~ /\w/);
        }
    }

    # Print each char and count
    for %counts.keys.sort -> $item {
        "%2s %5i\n".printf($item, %counts{$item});
    }
}
```

[Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/joelle-maslak/perl6/ch-1.p6) also used a hash for storing the counters, but the innovative side of her solution is that it is Unicode compliant and that it uses graphemes matching the `<alpha>` character class to define its letters:

``` Perl6
sub MAIN(+@filenames) {
    my %letters;
    for @filenames -> $fn {
        my @chars = $fn.IO.lines.comb: /<alpha>/;
        for @chars -> $char {
            %letters{$char.fc}++;
        }
    }

    for %letters.keys.sort -> $key {
        say "$key: {%letters{$key}}";
    }
}
```

[Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/ruben-westerberg/perl6/ch-1.p6) also used a hash for hosting the counters, and he took special care on the formatting of his output (right-aligning the counters having more than one digit):

``` Perl6
my %letters;
for lines() {
    for $_.split("",:skip-empty) {
        %letters{$_}++ if /<[a..zA..Z]>/;
    }
}

my $m=max map {chars %letters{$_}}, keys %letters;
for sort keys %letters {
    printf "%s: %"~$m~"s\n", $_, %letters{$_};
}
```

This is a sample of this program output with a relatively large input file:

    B:     1
    E:     1
    S:     1
    T:     1
    a: 27904
    b:  2496
    c:  6656
    d:  5376
    e: 22848
    ... (rest omitted for brevity)

[Roger Bell West](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/roger-bell-west/perl6/ch-1.p6) also used a hash for the counters:

``` Perl6
my %o;

for lines() {
  my $a=lc($_);
  $a ~~ s:g /<-[a .. z]>//;
  map {%o{$_}++}, split '',$a;
}

for sort keys %o -> $k {
  print "$k: %o{$k}\n";
}
```

[Ulrich Rieke](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/ulrich-rieke/perl6/ch-1.p6) also used a hash for storing the counters:

``` Perl6
sub MAIN( *@ARGS )  {
  for @ARGS -> $file {
      if $file.IO.e {
    my %lettercount ;
    my @words ;
    for $file.IO.lines -> $line {
        @words = $line.split( /\s+/ ) ;
        for @words -> $word {
          my $lowletter = $word.lc ;
          $lowletter ~~ s:g/<-[a..z]>// ;
          my @letters = $lowletter.comb ;
          for @letters -> $letter {
          %lettercount{ $letter }++ ;
          }
        }
    }
    my @sorted = %lettercount.keys.sort( { $^a leg $^b } ) ;
    say "letter frequency in file $file :" ;
    for @sorted -> $letter {
        say "$letter: %lettercount{ $letter }" ;
    }
      }
      else {
    say "Couldn't open file $file!" ;
      }
  }
}
```
I must say that I dislike Ulrich's program inconsistent indentation (this may be due to a problem of tabulations and spaces between his editor and the Github format, but it looks quite bad IMHO) and that his code isn't very perlish (or shall we say "rakuish"?) and sort of looks like C written in Raku. As a minimal attempt to rewrite this fixing the formatting, I would suggest this:

``` Perl6
use v6;

sub MAIN( *@ARGS )  {
    for @ARGS -> $file {
        die "Couldn't open file $file!" unless $file.IO.e;
        my %lettercount;
        for $file.IO.lines -> $line {
            my @words = $line.split( /\s+/ ) ;
            for @words -> $word {
                my $lowletter = $word.lc ;
                $lowletter ~~ s:g/<-[a..z]>// ;
                my @letters = $lowletter.comb ;
                for @letters -> $letter {
                    %lettercount{ $letter }++ ;
                }
            }
        }
        my @sorted = %lettercount.keys.sort( { $^a leg $^b } );
        say "letter frequency in file $file :";
        for @sorted -> $letter {
            say "$letter: %lettercount{ $letter }";
        }
    }
}
```
And, trying to make it look more idiomatic while still keeping the original logic:

``` Perl6
use v6;

sub MAIN( *@ARGS )  {
    my %lettercount;
    for @ARGS -> $file {
        die "Couldn't open file $file!" unless $file.IO.e;
        for $file.IO.lines.lc.comb -> $char {
            %lettercount{ $char }++ if $char ~~ /<[a..z]>/;
        }
    }
    say "$_: ", %lettercount{$_}//0 for 'a'..'z';
}
```

## Task #2: Formatted Multiplication Table

This is derived in part from my [blog post](http://blogs.perl.org/users/laurent_r/2019/11/perl-weekly-challenge-33-count-letters-and-multiplication-tables.html) made in answer to the [Week 33 of the Perl Weekly Challenge](https://perlweeklychallenge.org/blog/perl-weekly-challenge-033/) organized by  <a href="http://blogs.perl.org/users/mohammad_s_anwar/">Mohammad S. Anwar</a> as well as answers made by others to the same challenge.

The challenge reads as follows:

*Write a script to print 11x11 multiplication table, only the top half triangle.*

    x|   1   2   3   4   5   6   7   8   9  10  11
    ---+--------------------------------------------
    1|   1   2   3   4   5   6   7   8   9  10  11
    2|       4   6   8  10  12  14  16  18  20  22
    3|           9  12  15  18  21  24  27  30  33
    4|              16  20  24  28  32  36  40  44
    5|                  25  30  35  40  45  50  55
    6|                      36  42  48  54  60  66
    7|                          49  56  63  70  77
    8|                              64  72  80  88
    9|                                  81  90  99
    10|                                     100 110
    11|                                         121

## My Solution

## Formatted Multiplication Table in Raku (Perl 6)

To obtain the desired format and easily right-align the numbers, the simplest is to use the `printf` built-in function when needed:

    use v6;
    sub MAIN (UInt $max = 11) {
        print-table($max);
    }
    sub print-table ($max) {
        # Print header
        printf "%2s |", "x";
        printf "%4d", $_ for 1..$max;
        say "\n---|", "-" x 4 * ($max);
        # Print table lines
        for 1..$max -> $i {
            printf "%2d |%s", $i, ' ' x 4 * ($i - 1);
            for $i..$max -> $j {
                printf "%4d", $i * $j;
            }
            say "";
        }
    }

This script prints out the following:

    $ perl6 mult-table.p6
     x |   1   2   3   4   5   6   7   8   9  10  11
    ---|--------------------------------------------
     1 |   1   2   3   4   5   6   7   8   9  10  11
     2 |       4   6   8  10  12  14  16  18  20  22
     3 |           9  12  15  18  21  24  27  30  33
     4 |              16  20  24  28  32  36  40  44
     5 |                  25  30  35  40  45  50  55
     6 |                      36  42  48  54  60  66
     7 |                          49  56  63  70  77
     8 |                              64  72  80  88
     9 |                                  81  90  99
    10 |                                     100 110
    11 |                                         121

This is not exactly the output shown in the task description, but this is deliberate, as I think this looks slightly better.

Just in case you want to know, this works equally well when passing a parameter other than 11:

    $ perl6 mult-table.p6 20
     x |   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20
    ---|--------------------------------------------------------------------------------
     1 |   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20
     2 |       4   6   8  10  12  14  16  18  20  22  24  26  28  30  32  34  36  38  40
     3 |           9  12  15  18  21  24  27  30  33  36  39  42  45  48  51  54  57  60
     4 |              16  20  24  28  32  36  40  44  48  52  56  60  64  68  72  76  80
     5 |                  25  30  35  40  45  50  55  60  65  70  75  80  85  90  95 100
     6 |                      36  42  48  54  60  66  72  78  84  90  96 102 108 114 120
     7 |                          49  56  63  70  77  84  91  98 105 112 119 126 133 140
     8 |                              64  72  80  88  96 104 112 120 128 136 144 152 160
     9 |                                  81  90  99 108 117 126 135 144 153 162 171 180
    10 |                                     100 110 120 130 140 150 160 170 180 190 200
    11 |                                         121 132 143 154 165 176 187 198 209 220
    12 |                                             144 156 168 180 192 204 216 228 240
    13 |                                                 169 182 195 208 221 234 247 260
    14 |                                                     196 210 224 238 252 266 280
    15 |                                                         225 240 255 270 285 300
    16 |                                                             256 272 288 304 320
    17 |                                                                 289 306 323 340
    18 |                                                                     324 342 360
    19 |                                                                         361 380
    20 |                                                                             400

Of course, the nice formatting starts to break when passing a parameter higher than 31 (because some results start to exceed 1,000 and to have more than 3 digits), but the initial requirement was just an `11*11` multiplication table. It would not be difficult to change the script to make it work with larger values (we could even dynamically adapt the formatting strings to the maximal output number), but nobody needs commonly a larger multiplication table.

## Alternative Solutions

Again quite a high number of solutions (17) this time.

[Arne Sommer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/arne-sommer/perl6/ch-2.p6) chose the simple strategy of hard coding the header, and then used two nested `for`loops for computing the products. He used the built-in [fmt](https://docs.perl6.org/routine/fmt#class_Cool) formatting function, which, for numbers, essentially works in the same way as the `sprintf` function (or `printf`, except that `fmt` does not print the result but only returns the formatted string, so you have to add the print statement):

``` Perl6
say "  x|   1   2   3   4   5   6   7   8   9  10  11";
say "---+--------------------------------------------";

for 1 .. 11 -> $row
{
  print $row.fmt('%3d') ~ "|";
  print "    " x $row - 1;

  for $row .. 11 -> $col
  {
    print ($row * $col).fmt('%4d');
  }
  print "\n";
}
```

[Mark Senn](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/mark-senn/perl6/ch-2.p6) also hard-coded the printing of the header. He used two `for` loops for computing the results and the `printf` function for formatting the products:

``` Perl6
print q:to/END/;
  x|   1   2   3   4   5   6   7   8   9  10  11
---+--------------------------------------------
END

# Print rest of table.
my $n = 11;
for (1..$n) -> $row
{
    "%3d|".printf($row);
    for (1..$n) -> $col
    {
        ($col < $row)
        ??  "    ".print
        !!  "%4d".printf($row*$col);
    }
    ''.say;
}
```

[Daniel Mita](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/daniel-mita/perl6/ch-2.p6) also used two `for` loops for computing the results and used the built-in [sprintf](https://docs.perl6.org/routine/sprintf) function to format the output:

``` Perl6
sub MAIN (
  Int $max where * > 0 = 11, #= The max number of the multiplication table (defaults to 11)
  --> Nil
) {
  my @range   = 1 .. $max;
  my $spacing = @range[*-1]².chars + 1;

  print ' x|';
  print sprintf('%' ~ $spacing ~ 's', $_) for @range;
  print "\n";
  print '--+';
  say [x] «
    -
    $spacing
    @range.elems()
  »;

  for @range -> $a {
    print sprintf('%2s|', $a);
    for @range -> $b {
      print sprintf('%' ~ $spacing ~ 's', $a ≤ $b ?? $a * $b !! '');
    }
    print "\n";
  }
}
```

[Kevin Colyer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/kevin-colyer/perl6/ch-2.p6) also used two `for` loops for computing the results and the `sprintf` function to format the results:

```
sub MAIN($table=11) {

    # header
    print "  x|";
    print frmt($_) for 1..$table;
    print "\n";
    print "---+";
    say   "----" x $table;

    # body
    for 1..$table -> $i {
        print frmt($i,3) ~ "|";
        print "    "      for 1..$i-1;
        print frmt($i*$_) for $i..$table;
        print "\n";
    }
}

sub frmt($i, $pad=4, --> Str) {
    return sprintf("%{$pad}s",$i);
}
```

[Markus Holzer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/markus-holzer/perl6/ch-2.p6) created two subroutines, `header` and `line`, to manage the various types of output. His program uses a single `for` loop to run the `line` subroutine *n* times, each time with a different multiplier, and the `line` subroutine uses the range operator to create *n* multiplicands and store the products in an array. Quite a nice and imaginative solution in my view:

``` Perl6
sub MAIN( Int $n = 11 )
{
    my $ln = ( $n * $n ).chars + 1;
    my $li = $n.chars + 1;

    header;
    line $_ for ( 1 .. $n );

    sub line( $i )
    {
        my @n = ( ( $i .. $n ) X* $i ).map({ sprintf( "%{$ln}s", $_ ) });
        my @e = ( ' ' xx ( $ln * ( $i - 1 ) ) );
        say sprintf( "%{$li}s", $i ), '|', @e.join,  @n.join;
    }

    sub header
    {
        my @h = ( 1 .. $n ).map({ sprintf( "%{$ln}s", $_ ) });
        say sprintf( "%{$li}s", "x" ), '|', @h.join;
        say ( '-' xx $li ).join, "+", ( '-' xx ( $n * $ln ) ).join;
    }
}
```

[Noud](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/noud/perl6/ch-2.p6) contributed a program that, contrary to my solution, can print out the multiplication tables for any upper value, since it first dynamically calculates the needed gap between numbers.

``` perl6
sub print_mult_table($size) {
    # Determine the gap between the numbers.
    my $gap = ceiling(log10($size * $size)) + 1;

    print " " x $gap - 1;
    print "x|";
    for 1..$size -> $i {
        print($i.fmt('%' ~ $gap ~ 'd'));
    }
    print "\n";

    print "-" x $gap ~ "+" ~ "-" x $size * $gap ~ "\n";

    for 1..$size -> $i {
        print $i.fmt('%' ~ $gap ~ 'd') ~ "|" ~ " " x ($i - 1) * $gap;
        for $i..$size -> $j {
            print ($i * $j).fmt('%' ~ $gap ~ 'd');
        }
        print "\n";
    }
}
```

As an example, this is the output for multiplication tables up to 33 (which wouldn't work proprely with my solution):

        x|    1    2    3    4    5    6    7    8    9   10   11   12   13   14   15   16   17   18   19   20   21   22   23   24   25   26   27   28   29   30   31   32   33
    -----+---------------------------------------------------------------------------------------------------------------------------------------------------------------------
        1|    1    2    3    4    5    6    7    8    9   10   11   12   13   14   15   16   17   18   19   20   21   22   23   24   25   26   27   28   29   30   31   32   33
        2|         4    6    8   10   12   14   16   18   20   22   24   26   28   30   32   34   36   38   40   42   44   46   48   50   52   54   56   58   60   62   64   66
        3|              9   12   15   18   21   24   27   30   33   36   39   42   45   48   51   54   57   60   63   66   69   72   75   78   81   84   87   90   93   96   99
        4|                  16   20   24   28   32   36   40   44   48   52   56   60   64   68   72   76   80   84   88   92   96  100  104  108  112  116  120  124  128  132
        5|                       25   30   35   40   45   50   55   60   65   70   75   80   85   90   95  100  105  110  115  120  125  130  135  140  145  150  155  160  165
        6|                            36   42   48   54   60   66   72   78   84   90   96  102  108  114  120  126  132  138  144  150  156  162  168  174  180  186  192  198
        7|                                 49   56   63   70   77   84   91   98  105  112  119  126  133  140  147  154  161  168  175  182  189  196  203  210  217  224  231
        8|                                      64   72   80   88   96  104  112  120  128  136  144  152  160  168  176  184  192  200  208  216  224  232  240  248  256  264
        9|                                           81   90   99  108  117  126  135  144  153  162  171  180  189  198  207  216  225  234  243  252  261  270  279  288  297
       10|                                               100  110  120  130  140  150  160  170  180  190  200  210  220  230  240  250  260  270  280  290  300  310  320  330
       11|                                                    121  132  143  154  165  176  187  198  209  220  231  242  253  264  275  286  297  308  319  330  341  352  363
       12|                                                         144  156  168  180  192  204  216  228  240  252  264  276  288  300  312  324  336  348  360  372  384  396
       13|                                                              169  182  195  208  221  234  247  260  273  286  299  312  325  338  351  364  377  390  403  416  429
       14|                                                                   196  210  224  238  252  266  280  294  308  322  336  350  364  378  392  406  420  434  448  462
       15|                                                                        225  240  255  270  285  300  315  330  345  360  375  390  405  420  435  450  465  480  495
       16|                                                                             256  272  288  304  320  336  352  368  384  400  416  432  448  464  480  496  512  528
       17|                                                                                  289  306  323  340  357  374  391  408  425  442  459  476  493  510  527  544  561
       18|                                                                                       324  342  360  378  396  414  432  450  468  486  504  522  540  558  576  594
       19|                                                                                            361  380  399  418  437  456  475  494  513  532  551  570  589  608  627
       20|                                                                                                 400  420  440  460  480  500  520  540  560  580  600  620  640  660
       21|                                                                                                      441  462  483  504  525  546  567  588  609  630  651  672  693
       22|                                                                                                           484  506  528  550  572  594  616  638  660  682  704  726
       23|                                                                                                                529  552  575  598  621  644  667  690  713  736  759
       24|                                                                                                                     576  600  624  648  672  696  720  744  768  792
       25|                                                                                                                          625  650  675  700  725  750  775  800  825
       26|                                                                                                                               676  702  728  754  780  806  832  858
       27|                                                                                                                                    729  756  783  810  837  864  891
       28|                                                                                                                                         784  812  840  868  896  924
       29|                                                                                                                                              841  870  899  928  957
       30|                                                                                                                                                   900  930  960  990
       31|                                                                                                                                                        961  992 1023
       32|                                                                                                                                                            1024 1056
       33|                                                                                                                                                                 1089

In theory, you could use any larger upper range values, but you'll be quickly limited by your screen width.

[Ryan Thompson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/ryan-thompson/perl6/ch-2.p6) contributed a quite creative solution that can also handle large multipliers, since its `$fmt` formating string is dynamically adapted to the size of the largest product. His program uses the `fmt`function for format the output.

``` Perl6
use v6;

sub MAIN(Int $max = 11) {
    my $w     = ($max*$max).chars;  # Maximum width in table
    my $fmt   = "%{$w}s";           # Evenly sized columns
    my @n     = 1..$max;            # Trivial to change this to, say, primes

    ('',       ' | ', @n                                    ).fmt($fmt).say;
    ('-' x $w, '-+-', '-' x $w xx $max                      ).fmt($fmt).say;

    for @n -> $n {
        ($n,   ' | ', @n.map: { $n > $^m ?? '' !! $n * $^m }).fmt($fmt).say;
    }
}
```

With an input value of 33, Ryan's program displays almost the same as the output of Noud's program just above.

[Richard Nuttall](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/rnuttall/perl6/ch-2.p6) made a fairly concise solution using a `for` loop and a range, and a single format string for everything:

``` Perl6
sub MAIN($lim = 11) {
    my         $fmt = "%3s%1s" ~ "%4s" x $lim ~ "\n";
    printf     $fmt,  'x', '|',        1..$lim;
    printf     $fmt, '---','+', '----' xx $lim;
    for 1..$lim -> $x {
        printf $fmt,  $x,  '|', ' ' xx $x-1, ($x..$lim) «*» $x;
    }
}
```

[Simon Proctor](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/simon-proctor/perl6/ch-2.p6) made, as often, a quite verbose solution with several multi `MAIN` subroutines, as well as a `format-row`, a `get-header`, and a `get-row` subroutines. This is part of his solution:

``` Perl6
multi sub MAIN(
    UInt $max = 11 #= Max number to print the table to
) {
    my &formater = format-row( $max );
    .say for get-header( $max, &formater );
    .say for (1..$max).map( { get-row( $max, &formater, $_) } );
}

sub format-row( UInt $max ) {
    my $max-width = ($max*$max).codes;
    my $row = " %{$max.codes}s |{" %{$max-width}s" x $max}";
    return sub ( *@data ) {
        sprintf $row, @data;
    }
}

sub get-header( UInt $max, &formater ) {
    my $max-width = ($max*$max).codes;
    ( &formater( "x", |(1..$max) ), "-" x ( 3 + $max.codes + ( $max * ($max-width+1) ) ) );
}
```

[Adam Russel](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/adam-russell/perl6/ch-2.p6) also hard-coded the header and otherwise used the [form](https://github.com/perl6/form) module to emulate the Perl 5 `format` fix-width output templating features for the header. For the result lines, his program uses a quite creative solution: it iterates over the `1..11` range and, for each value, creates an array `@a` of zeros followed by integers from the values to 11. For example, for `$x` value equal to 5, it would generate this array: `[0 0 0 0 5 6 7 8 9 10 11]`. The program then uses two chained `map` statements that multiply the non-zero integers by the value being used and the zeros by an empty string, so that the result `@b` array for value 5 is this: `["", "", "", "", 25, 30, 35, 40, 45, 50, 55]`. Finally, the program uses `sprintf` to properly format this array.

``` Perl6
sub print_table11 {
    my ($x,$x1,$x2,$x3,$x4,$x5,$x6,$x7,$x8,$x9,$x10,$x11);
    my $header = form
        '    x|   1   2   3   4   5   6   7   8   9   10   11',
        '  ---+----------------------------------------------';
    print $header;
    for 1 .. 11 -> $x {
        my @a;
        @a = (0) xx ($x -1) if $x > 1;
        @a.append($x .. 11);
        my @b = map({$_ ==  0 ?? "" !! $_}, map({ $x * $_ }, @a));
        print sprintf '%5s|', $x;
        my $s = sprintf '%4s%4s%4s%4s%4s%4s%4s%4s%4s%5s%5s', @b;
        say $s;
    }
}
```

[Jaldhar H. Vyas](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/jaldhar-h-vyas/perl6/ch-2.p6) also contributed a quite creative solution. His program uses the `X` cross operator, chained with a `grep` and a `map`, to generate an array `@table` of all the products to be displayed in the multiplication table. It finally iterates over the multiplier range, picks up the desired array slice with the `splice` built-in function, format the results with `fmt` function and finally outputs them with the `printf` function:

``` Perl6
constant $N = 11;

say '  x|', (1 .. $N).fmt('% 4s', q{}), "\n", '---+', ('----' x $N);
my @table = (1 .. $N X 1 .. $N).grep({ $_[1] >= $_[0]}).map({ $_[0] * $_[1] });
for (1 .. $N) {
    printf "% 3s|%s%s\n",
        $_,
        q{ } x 4 * ($_ - 1),
        @table.splice(0, $N - $_ + 1).fmt('% 4s', q{});
};
```

[Athanasius](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/athanasius/perl6/ch-2.p6) used two straight forward `for` loops for computing the values and `printf` for formatting the output:

``` Perl6
# Print the multipliers
'  x|'.print;
' %3d'.printf: $_ for 1 .. $MAX;
    ''.say;

# Print the horizontal divider
"---+%s\n".printf: '-' x (4 * $MAX);

# Print the body of the multiplication table
for 1 .. $MAX -> UInt $row
{
    # Print one row: the multiplicand, followed by those products for which
    #                the multiplier does not exceed the multiplicand

    '%3d|'.printf: $row;
   ' %3s' .printf: $row > $_ ?? '' !! $row * $_ for 1 .. $MAX;
        ''.say;
}
```

[Javier Luque](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/javier-luque/perl6/ch-2.p6) created a `generate-x-table` subroutine looping over the multipliers range and two multi `table-content` subroutines, one to produce the header and the other to generate and format the results, using the `sprintf` function:

``` Perl6
# Generates the multiplication table
sub generate-x-table (Int $num) {
    table-content($_, $num).say for (0..$num);
}

# Returns the table head string
multi table-content(Int $current where { $current == 0}, Int $num) {
    my $line = "%4s|".sprintf("x");
    $line ~= "%4i".sprintf($_) for (1..$num);
    return $line ~ "\n" ~ '----+' ~ '----' x $num;
}

# Returns the table row string for $i
multi table-content(Int $current, Int $num) {
    my $line = "%4i|".sprintf($current);

    for (1..$num) -> $i {
        $line ~= ($current <= $i) ??
            "%4i".sprintf($i * $current) !! ' ' x 4;
    }

    return $line;
}
```

[Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/joelle-maslak/perl6/ch-2.p6) used two nested `for` loops to generate the results and the `fmt` built-in function to format them:

``` Perl6
sub MAIN(UInt:D $max = 11) {
    die "Max must be ≥ 1" if $max < 1;

    my $maxlen  = (~ $max).chars;
    my $prodlen = (~ $max²).chars;

    # Header line
    print "x".fmt("%{$maxlen+1}s") ~ "|";
    say (1..$max)».fmt("%{$prodlen+1}d").join;

    # Seperator line
    say '-' x ($maxlen+1) ~ '+' ~ '-' x $max*($prodlen+1);

    for 1..$max -> $i {
        # New row
        print $i.fmt("%{$maxlen+1}d") ~ '|';

        for 1..$max -> $j {
            if ($i ≤ $j) {
                print ($i*$j).fmt("%{$prodlen+1}d");
            } else {
                print " " x ($prodlen+1);
            }
        }

        print "\n";
    }
}
```

[Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/ruben-westerberg/perl6/ch-2.p6) also used two nested `for` loops to compute the values, and he used `sprintf` to format the output:

``` Perl6
my $limit=@*ARGS[0]//11;
my $maxWidth=1+(chars $limit**2);
printRow "", (1..$limit), $maxWidth;
put "-" x (($limit+2)*$maxWidth);
for 1..$limit {
    my $i=$_;
    my @row;
    my $header=$_;
    for 1..$limit {
        if $_ >= $i {
            push @row, $i*$_;
        }
        else {
            push @row, "";
        }
    }
    printRow($header,@row,$maxWidth);
}

sub printRow($header, $data, $minWidth) {
    my $output="";
    for @$data {
        $output ~= sprintf "%"~$minWidth~"s",$_;
    }
    printf "%"~$minWidth~"s|%s\n",$header,$output;
}
```

[Roger Bell West](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/roger-bell-west/perl6/ch-2.p6) also used two nested `for` loops and used the `printf` function to format and output the results:

``` Perl6
my $n=11;
my $m1=$n.chars+1;
my $m2=($n*$n).chars+1;
my $fmt='%' ~ $m1 ~ 's%1s' ~ (('%' ~ $m2 ~ 's') xx $n) ~ "\n";
printf($fmt,'x','|',(1..$n));
printf($fmt,'-' x $m1,'+',('-' x $m2) xx $n);
for 1 .. $n -> $row {
  my @a=($row,'|');
  for 1 .. $n -> $column {
    if ($column < $row) {
      push @a,'';
    } else {
      push @a,$row*$column;
    }
  }
  printf($fmt,@a);
}
```

[Ulrich Rieke](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-033/ulrich-rieke/perl6/ch-2.p6) also used two nested `for` loops and used the `sprintf` function to format the output:

``` Perl6
sprintf("%4s" , "x|" ).print ;
for (1..11) -> $num {
  sprintf("%4d" , $num ).print ;
}
print "\n" ;
say "-" x 48 ;
for (1..11) -> $num {
  sprintf("%4s" , "$num|" ).print ;
  if ( $num > 1 ) {
      print " " x ( ($num - 1 ) * 4 ) ;
  }
  for ( $num..11 ) -> $mult {
      sprintf("%4d", $num * $mult ).print ;
  }
  print "\n" ;
}
```

## SEE ALSO

Five blog posts this time:

* Arne Sommer: https://raku-musings.com/add-mul.html;

* Adam Russell: https://adamcrussell.livejournal.com/11383.html;

* Jaldhar H. Vyas: https://www.braincells.com/perl/2019/11/perl_weekly_challenge_week_33.html;

* Javier Luque: https://perlchallenges.wordpress.com/2019/11/05/perl-weekly-challenge-033/;

* Roger Ball West: https://blog.firedrake.org/archive/2019/11/Perl_Weekly_Challenge_33.html.


## Wrapping up

Please let me know if I forgot any of the challengers or if you think my explanation of your code misses something important (send me an e-mail or just raise an issue against this GitHub page).
