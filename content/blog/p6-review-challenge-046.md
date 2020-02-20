---
author:       Ryan Thompson
date:         2020-02-20T00:00:00
description:  "Ryan Thompson › Raku Weekly Review: Challenge - #046"
tags:         ["raku"]
title:        "Ryan Thompson › Raku Weekly Review: Challenge - #046"
image:        /images/blog/flip_500.png
type:         post
---

Continues from [previous week](/blog/p6-review-challenge-045/).

Welcome to the Raku review for Week 046 of the Weekly Challenge! For a quick overview, go through the [original tasks](/blog/perl-weekly-challenge-046/) and [recap](/blog/recap-challenge-046/) of the weekly challenge.

## Getting in Touch

<a href="mailto:rjt@cpan.org"><img src="http://ry.ca/misc/Email.svg" height="50" width="50"> Email</a> › Email me (Ryan) with any feedback about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="http://ry.ca/misc/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="http://ry.ca/misc/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

We'd greatly appreciate any feedback you'd like to give.

## Table of Contents

### [Task 1](#task1)

[  [Arne Sommer](#arne-sommer1)  | [Javier Luque](#javier-luque1)  | [Kevin Colyer](#kevin-colyer1)  | [Laurent Rosenfeld](#laurent-rosenfeld1)  | [Luca Ferrari](#luca-ferrari1)  | [Mark Anderson](#mark-anderson1)  | [Markus Holzer](#markus-holzer1)  | [Noud Aldenhoven](#noud1)  | [Roger Bell West](#roger-bell-west1)  | [Ruben Westerberg](#ruben-westerberg1)  | [Ryan Thompson](#ryan-thompson1)  | [Simon Proctor](#simon-proctor1)  | [Ulrich Rieke](#ulrich-rieke1)  ]

### [Task 2](#task2)

[  [Arne Sommer](#arne-sommer2)  | [Colin Crain](#colin-crain2)  | [Jaldhar H. Vyas](#jaldhar-h-vyas2)  | [Javier Luque](#javier-luque2)  | [Kevin Colyer](#kevin-colyer2)  | [Laurent Rosenfeld](#laurent-rosenfeld2)  | [Luca Ferrari](#luca-ferrari2)  | [Mark Anderson](#mark-anderson2)  | [Markus Holzer](#markus-holzer2)  | [Noud Aldenhoven](#noud2)  | [Roger Bell West](#roger-bell-west2)  | [Ruben Westerberg](#ruben-westerberg2)  | [Ryan Thompson](#ryan-thompson2)  | [Simon Proctor](#simon-proctor2)  | [Ulrich Rieke](#ulrich-rieke2)  ]

### [Blogs](#blogs)

***

***

# Task #1 - Cryptic Message {#task1}

This task had us resolving "unreliable transmissions" that were sent repeatedly, each time with errors in different locations in the string, such as this one:

```
P + 2 l ! a t o
1 e 8 0 R $ 4 u
5 - r ] + a > /
P x w l b 3 k \
2 e 3 5 R 8 y u
< ! r ^ ( ) k 0
```

That spells `PerlRaku`, which you can arrive at by noticing that only one character in each column will be repeated.

***

## My general observations

Both example ciphers show that each plaintext character appears exactly twice in each column, and the other characters appear exactly once. Naturally, some hackers relied on this and printed all characters that appeared twice. Some hackers took a more permissive or general interpretation, and calculated the frequency of each character, printing whichever character appeared most often in each column.


***

## Arne Sommer {#arne-sommer1}

[Arne Sommer's solution](/challenge-046/arne-sommer/raku/ch-1.p6) accepts a string of rows separated by spaces, which he then splits to `@strings` (rows), calculates the `$max` row length, and iterates over the character indices:

```raku
$string = 'P+2l!ato 1e80R$4u 5-r]+a>/ Pxwlb3k\ 2e35R8yu <!r^()k0' if $another;
my @strings = $string.words;
my $max     = @strings>>.chars.max;
my @result;

for ^$max -> $index {
  @result.push: @strings.map({ $_.substr($index,1) // "" }).repeated.unique;
}
say @result.join;
```

The `@result` is built up by taking the character at `$index` from each string, and looking for the `.repeated` characters. `.unique` ensures that if there are more than two of the same character, that only one will be returned. (e.g., `<A x A y A>.repeated.unique = (A)`, whereas `<A x A y A>.repeated = (A A)`).

### Ambiguous Input

Arne also submitted a [more in-depth solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-046/arne-sommer/raku/cryptic) that better handles ambiguous input (i.e., more than one character is repeated). The main difference is the addition of a recursive `expand` routine as follows:

```raku
expand( "", @result );

sub expand ( $current, @strings ) {
    my $copy = $current;

    for ^@strings.elems -> $index {
        my $curr = @strings[$index];
        if $curr.elems > 1 {
            expand( $copy ~$_, @strings[ $index + 1 .. Inf ] ) for @$curr;
            return;
        } else {
            $copy ~= $curr;
        }
    } say $copy;
}
```

`expand` runs on the `@result` from the first solution. If more than one character is repeated, `@result` would contain a sublist, e.g., we might get `(H (e u) l l o)`. The unmodified first solution would print `He ullo`, which is not ideal. So `expand` takes these sublists (`if $curr.elems > 1`), and branches so that every possible result will be printed. In this case, `Hello` and `Hullo`, but in general the number of output lines will be the product of all sublist lengths. This is a good way of disambiguating results for an imperfect transmission method such as this.

Arne's solutions include some verbose output, which provides good introspection into how they work, so I recommend you try them out for yourself, and read Arne's excellent blog:

**Blog** › [The Cryptic Raku Room](https://raku-musings.com/cryptic-room.html)

## Javier Luque {#javier-luque1}

[Javier Luque's solution](/challenge-046/javier-luque/raku/ch-1.p6) accepts a multiline string, gets the length of the first line, and then starts building the frequency table:


```raku
# Initialize the columns hash
my @column_hash;
my ($first_line) = $message.split("\n", 2);
my $length = $first_line.split(" ").join.chars;
@column_hash[0 .. $length - 1] = {};
# Parse the cryptic message
for ($message.split("\n")) -> $line {
    my $i = 0;
    for ($line.split(" ")) -> $char {
        @column_hash[$i++].{$char}++;
    }
}
```

The loop splits the input into lines, and then builds a `@column_hash`, which is a mapping of a character's count in a particular column. From there, each column is processed, and the most frequent character is appended to the `$output`:

```
# Sort
my $output = '';
for (@column_hash) -> %column {
    $output = $output ~
        %column.keys.sort(
            { %column.{$^b} <=> %column.{$^a} }
        )[0];
}
say $output;
```

**Blog** › [PERL WEEKLY CHALLENGE – 046 – Perl Weekly Challenge](https://perlchallenges.wordpress.com/2020/02/04/perl-weekly-challenge-046/)

## Kevin Colyer {#kevin-colyer1}

[Kevin Colyer's solution](/challenge-046/kevin-colyer/raku/ch-1.p6) also accepts a multiline string in `$m`, taking advantage of Raku's string builtin `.lines` to split it into `@m`. (Kevin uses `.words` as well, since his input has spaces between each character):

```raku
my %seen;
my $unscramble="";
my @m;
for $m.lines {  @m.push( .words.list ) };
```

Now Kevin iterates from 0 to one less than the first row's length (`$m[0].elems`), to get his `$c`olumn index. He maintains a `%seen` frequency map for each column and appends the character seen twice to the `$unscramble`d output string:

```raku
for ^@m[0].elems -> $c {
    my %seen;
    %seen{ @m[$_][$c] }++ for ^@m.elems;
    $unscramble~=%seen.grep( *.value==2)>>.key;
}
```


## Laurent Rosenfeld {#laurent-rosenfeld1}

[Laurent Rosenfeld's solution](/challenge-046/laurent-rosenfeld/raku/ch-1.p6) also accepts a multiline string with space-separated characters, but uses a more complex `map` and `split` chain to turn it into an array of arrays (AoA), which he then transposes to a column-major representation:

```raku
my @AoA = map { my @a = split /\s+/, $_; @a }, split /<[\r\n]>+/, $garbled;
my @transposed;
for (0 .. @AoA.end) -> $i {
    @transposed[$_][$i] = @AoA[$i][$_] for 0.. (@AoA[$i]).elems -1;
}
```

Now, the results are easy; each `$line` in `@transposed` corresponds to a column in the original input, so Laurent can simply tally the characters and select the character that appears more than once (assuming there is no ambiguity):

```raku
my @msg = "";
for @transposed -> $line {
    my BagHash $counter;
    $counter{$_}++ for @$line;
    push @msg, grep { $counter{$_} > 1 }, keys $counter;
}
say join "", @msg;
```

I like the transposition approach.

**Blog** › [Garbled Message and Room Open](http://blogs.perl.org/users/laurent_r/2020/02/perl-weekly-challenge-46-garbled-message-and-room-open.html)

## Luca Ferrari {#luca-ferrari1}

[Luca Ferrari's solution](/challenge-046/luca-ferrari/raku/ch-1.p6) accepts an array of strings with space-separated characters, in `@message`. Luca turns the input into an AoA, transposed at the same time:

```raku
my @chars;
my $decoded;
for @message -> $single-line {
    for $single-line.split( '', :skip-empty ) {
        next if ! $_.trim;
        @chars[ $++ ].push: $_;
    }
}
```

As with Laurent's solution, all Luca has to do now is count the characters in each sublist and append the one that appears more than once:

```raku
for @chars -> @line {
    for @line -> $searching_for {
        if @line.grep( { $_ eq $searching_for} ).elems > 1 {
            $decoded ~= $searching_for;
            last;
        }
    }
}
```

**Blog** › [Encoded messages and open rooms](https://fluca1978.github.io/2020/02/03/PerlWeeklyChallened_46.html)

## Mark Anderson {#mark-anderson1}

[Mark Anderson's solution](/challenge-046/mark-anderson/raku/ch-1.p6) accepts a multiline string with space-separated characters, and compactly turns that into an AoA:

```raku
my @AoL;
my $result;
for $msg.split(/\n/, :skip-empty) -> $str {
    @AoL.push($str.trim-trailing.comb(/\S/).List);
}
```

Mark then transposes `@AoL` with `[Z]`, so each `$list` is a column. Then, Mark uses a regex on `$list`s string representation to find the repeated character:

```raku
for [Z] @AoL -> $list {
    $list.Str ~~ /(\S) .* {} :my $letter = $0; $letter/;
    $result ~= $letter;
}
```

## Markus Holzer {#markus-holzer1}

[Markus Holzer's solution](/challenge-046/markus-holzer/raku/ch-1.p6) accepts a multi-line string, uses `zip` to transpose it, and then uses the `Bag` representation of each column list to make finding the most frequent character very concise thanks to `maxpairs`, which returns the pair(s) with the maximum value:

```raku
[~] zip(
    $encrypted.lines.map: *.words
).map(
    *.Bag.maxpairs[0].key
);
```

Impressive.

## Noud Aldenhoven {#noud1}

[Noud Aldenhoven's solution](/challenge-046/noud/raku/ch-1.p6) accepts an AoA as input, and then `decrypt` works on a transposed version of that:

```raku
sub decrypt(@a) {
    return [~] ([Z] @a).map({ select-double($_) });
}
```

The `select-double` routine takes a column list and returns the character that appears most frequently:

```raku
sub select-double(@a) {
    for @a -> $elm {
        if (@a.grep($elm).elems == 2) {
            return $elm;
        }
    }
}
```

This is a nice modular approach to the problem.

## Roger Bell West {#roger-bell-west1}

[Roger Bell West's solution](/challenge-046/roger-bell-west/raku/ch-1.p6) accepts strings from standard input, and puts those into a column-character frequency map (`@place`):

```raku
my @place;
for lines() {
  .chomp;
  my @k=comb(/\S/,$_);
  map {@place[$_]{@k[$_]}++}, (0..@k.end);
}
```

The putout is then printed character-wise by iterating over each column in `@place`, `sort`ing in decreasing numeric order and printing the first (most frequent) result:

```raku
for @place -> %h {
  my @v=values %h;
  my @k=keys %h;
  my @i=sort {@v[$^b] <=> @v[$^a]}, (0..@v.end);
  print @k[@i[0]];
}
print "\n";
```

## Ruben Westerberg {#ruben-westerberg1}

[Ruben Westerberg's solution](/challenge-046/ruben-westerberg/raku/ch-1.p6) accepts an AoA, and then iterates over each column index. The most frequent character key/value pair is fetched by taking a vertical slice of `@inComming` as a `Bag`, and then taking all pairs that appear twice. The `key` is the character itself, so that's what Ruben `push`es to the result:

```raku
my @decoded;
for (0..@inComming[0]-1) {
    my $col=@inComming[0..@inComming-1;$_].Bag.grep({$_.value==2});
    @decoded.push: $col>>.key;
}
put @decoded.join: "";
```

Ruben has done a great job of producing concise, expressive code that I was able to understand more or less instantly.

## Ryan Thompson {#ryan-thompson1}

[My solution](/challenge-046/ryan-thompson/raku/ch-1.p6) accepts an array of `@strings`, splits those into rows, and then maintains a column-character frequency map in `@col-count`:

```raku
my @col-count;
for @strings».split: ' ' -> $row {
    @col-count[.key]{.value}++ for |$row.pairs;
}
```

After that, I built up the result by sorting in decreasing numerical order by value, picking the `first` (most frequent) result, grabbing its key, and joining everything together:

```raku
@col-count».sort(-*.value)».first».key.join;
```

**Blog** › [Cryptic Message](http://www.ry.ca/2020/02/cryptic-message/)

## Simon Proctor {#simon-proctor1}

[Simon Proctor's solution](/challenge-046/simon-proctor/raku/ch-1.p6) accepts an AoA in `$data`, doing the decoding with one statement (I've added some whitespace):

```raku
 zip( $data.List )
.map( { Bag.new($_) } )
.map( *.pairs
       .sort( { $^b.value cmp $^a.value } )
       .first
       .key )
.join("")
```

Here again we see `zip` being used to transpose the matrix, and the `Bag` representation to enable `sort`ing by value. The `.first.key` is the most frequent character.

It's important to note that, unlike Perl's `cmp` (based on C's `strcmp`) which is a stringwise 3-way comparator, Raku's `cmp` is generic, so it will compare integers as integers, here.

## Ulrich Rieke {#ulrich-rieke1}

[Ulrich Rieke's solution](/challenge-046/ulrich-rieke/raku/ch-1.p6) accepts an array of `@strings`, and then iterates through each column index, building up a `%letterfrequency` map for the current column:

```raku
my $len = @words[0].chars ;
my $decoded ;
for (0..$len - 1 ) -> $i {
    my %letterfrequency ;
    for @words -> $word {
        %letterfrequency{ $word.substr( $i , 1 ) }++ ;
    }
```

Following a reverse-numerical order sort, the first element of `@sorted` (the most frequent character) is appended to the `$decoded` output:

```raku
    my @sorted = %letterfrequency.keys.sort( {
        %letterfrequency{$^b} <=> %letterfrequency{$^a} } ) ;
    $decoded ~= @sorted[ 0 ] ;
}
```

***

***

# Task #2 - Is The Room Open? (500 Doors) {#task2}

Here is Mohammad's description:

There are 500 rooms in a hotel with 500 employees having keys to all the rooms. The first employee opened main entrance door of all the rooms. The second employee then closed the doors of room numbers 2,4,6,8,10 and so on to 500. The third employee then closed the door if it was opened or opened the door if it was closed of rooms 3,6,9,12,15 and so on to 500. Similarly the fourth employee did the same as the third but only room numbers 4,8,12,16 and so on to 500. This goes on until all employees has had a turn.

Write a script to find out all the rooms still open at the end.

***

## Types of Solutions

### 1. Nested Loops

Most people solved this with some form of a nested loop. The outer loop for each employee (`i`), and the inner loop corresponds to each `1/i` door that employee will toggle. This results in an efficiency of O(n × (1/1 + 1/2 + ⋯ + 1/n)) ≈ O(n × log n). For a problem size of n = 500, that's absolutely fine.  However, with a little bit of math, it's possible to simplify things even more:

### 2. Square Numbers

Many people noticed that the doors left open are the square numbers (1², 2²=4, 3²=9, etc.). Some decided to implement this pattern as an algorithm, resulting in trivial code with O(sqrt(n)) complexity.

The main difficulty behind using this method is demonstrating its correctness, yet several people managed to do just that, with explanations or informal proofs of why *only* perfect square numbered doors would be open.

Correctness proofs are an important topic in computer science, so I'm glad to see some effort being put into it here!

***

Of course, neither of these solutions is necessarily "better" in the context of this challenge. The square numbers solution (2) is the result of analysis and math, while the looping solution (1) is a better showcase of the language features and coding ability. Both skills are tremendously important, and I'm quite sure everyone I'm reviewing today is capable of either method; it's just a matter of what they decide to submit.

***

## Arne Sommer {#arne-sommer2}

[Arne Sommer's solution](/challenge-046/arne-sommer/raku/ch-2.p6) uses nested loops to toggle the doors in `@open`:

```raku
my @open;
for 1 .. 500 -> $employee {
    for ($employee, $employee + $employee ... 500) -> $index {
        @open[$index] = ! @open[$index];
    }
}
say "Open rooms: { (1..500).grep({@open[$_] }).join(',') }.";
```

The inner loop will only iterate over every `$employee`th index.

**Blog** › [The Cryptic Raku Room](https://raku-musings.com/cryptic-room.html)

## Colin Crain {#colin-crain2}

[Colin Crain's solution](/challenge-046/colin-crain/raku/ch-2.p6) has an outer loop for each employee, but the inner loop builds a list of `@doors` that employee will toggle, and then applies it like a mask over `@hotel` using zip+XOR (`Z+^`):

```raku
my @hotel = 0 xx $size;
for (1..$size) -> $emp {
    my @doors = map { $_ %% $emp ?? 1 !! 0 }, ( 1..$size );
    @hotel = @hotel Z+^ @doors;
}
```

Then it's just a matter of printing the numbers of the `@hotel` rooms that are
open:

```raku
for (0..$size-1) {
    printf "room %3s is open\n", $_+1 if @hotel[$_];
}
```

## Jaldhar H. Vyas {#jaldhar-h-vyas2}

[Jaldhar H. Vyas's solution](/challenge-046/jaldhar-h-vyas/raku/ch-2.p6) uses a nested loop to toggle each door *iff* the employee number, `$i` divides the room number, `$j`:

```raku
constant $end = 500;
my Bool @rooms[$end];
for 0 ..^ $end -> $i {
    for 0 ..^ $end -> $j {
        if ($j + 1) %% ($i + 1) {
            @rooms[$j] = !@rooms[$j];
        }
    }
}
```

Printing the results is accomplished similarly, taking care to work with the 0-based indexing set up in the previous section:

```raku
for 0 ..^ $end -> $i {
    if @rooms[$i] {
        print $i + 1, q{ };
    }
}
print "\n";

```

## Javier Luque {#javier-luque2}

[Javier Luque's solution](/challenge-046/javier-luque/raku/ch-2.p6) uses a nested loop as well:

```raku
my @doors;
@doors[0 .. 500] = 0;
for (1 .. 500) -> $employee {
    for ($employee .. 500 ) -> $door {
        next unless $door % $employee == 0;
        @doors[$door] = (@doors[$door]) ?? 0 !! 1;
    }
}
for (1 .. 500) -> $i {
    say "Door: " ~ $i ~ " is open."
        if (@doors[$i]);
}
```

**Blog** › [046 – Perl Weekly Challenge](https://perlchallenges.wordpress.com/2020/02/04/perl-weekly-challenge-046/)

## Kevin Colyer {#kevin-colyer2}

[Kevin Colyer's solution](/challenge-046/kevin-colyer/raku/ch-2.p6) does a nested loop as well, but optimizes the inner loop by incrementing `$i` by the `$e`mployee number:

```raku
my Int @doors = 1 xx 500;
for 2..500 -> $e {
    my $i=0;
    while $i < 500 {
        @doors[$i] = 1 - @doors[$i];
        $i+=$e;
    }
}
say @doors.sum;
```

Kevin outputs `@doors.sum`, which effectively counts how many doors are open.  I modified that line to read `@doors.pairs.grep(*.value)».key`, and Kevin's code does indeed find the correct doors, though there was never really any doubt.

## Laurent Rosenfeld {#laurent-rosenfeld2}

[Laurent Rosenfeld's solution](/challenge-046/laurent-rosenfeld/raku/ch-2.p6) does the efficient nested looping method as well:

```raku
my @rooms = 1 xx MAX + 1; # (first employee)
my $start = 1;
for 2..MAX {
    $start++;
    my $door = $start;
    while $door <= MAX {
        @rooms[$door] = @rooms[$door] ?? 0 !! 1;
        $door += $start;
    }
}
say join " ", @rooms[1..MAX];
```

Laurent opted to print a string of 1s and 0s (1 = open, 0 = closed). In his blog, Laurent took the time to do some interesting analysis of this problem.

**Blog** › [Garbled Message and Room Open](http://blogs.perl.org/users/laurent_r/2020/02/perl-weekly-challenge-46-garbled-message-and-room-open.html)

## Luca Ferrari {#luca-ferrari2}

[Luca Ferrari's solution](/challenge-046/luca-ferrari/raku/ch-2.p6) stores his door status in a `%rooms` hash, but the resulting code is similar to array-based nested loop solutions:

```raku
my %rooms = ( 1 .. $room-count).map: * => False;
for 1 .. $room-count -> $employee {
    %rooms{ $_ } = ! %rooms{ $_ } if $_ %% $employee for 1 .. $room-count;
}
```

Since `%rooms` is a hash, the room numbers (keys) will be in random order, so
they must be sorted:

```raku
say "Room $_ is Open" if %rooms{ $_ } for %rooms.keys.sort: *.Int <=> *.Int;
```

**Blog** › [Encoded messages and open rooms](https://fluca1978.github.io/2020/02/03/PerlWeeklyChallened_46.html)

## Mark Anderson {#mark-anderson2}

[Mark Anderson's solution](/challenge-046/mark-anderson/raku/ch-2.p6) has a little fun with control flow in the nested loop:

```raku
my \open = True;
my @doors = open xx 500;
for 1 .. 500 -> $emp {
    NEXT {
        for $emp, $emp*2 ... 500 -> $door {
            @doors[$door-1] ?^= open;
        }
    }
    say $emp if @doors[$emp-1];
}
```

Mark also uses a special sequence to loop over `$emp`th door in the inner loop. Finally, you'll notice the output line is inside the top-level loop; this works because `$emp-1`'s door will never be toggled once it is `$emp`'s turn through the loop.

## Markus Holzer {#markus-holzer2}

[Markus Holzer's solution](/challenge-046/markus-holzer/raku/ch-2.p6) makes note of the fact that only the square numbered doors will be open (check the link for his informal proof). He then offers three ways to generate the list of square numbers below 500:

```raku
say "Open rooms: ", ( 1..500 ).grep: *.&is-open;
sub is-open( $room ) { $room.sqrt.narrow ~~ Int }
```

```raku
say "Open rooms: ", (1..500.sqrt.Int).map: * ** 2;
```

```raku
say "Open rooms: ", (1..500.sqrt.Int)>>²; # nicest idiom by jnthn
```

`jnthn`, of course is [Jonathan Worthington](http://www.jnthn.net/) ([GitHub](https://github.com/jnthn)).

## Noud Aldenhoven {#noud2}

[Noud Aldenhoven's solution](/challenge-046/noud/raku/ch-2.p6) also prints out a list of square numbers, and also includes an informal proof in the comments of his solution. Here is the code:

```raku
say "Open rooms:";
say $_**2 for 1..(500.sqrt);
```

Noud's blog contains essentially the same proof, but with better typesetting than you can get in a Raku source file:

**Blog** › [Is the room open?](https://www.noudaldenhoven.nl/wordpress/?p=288)

## Roger Bell West {#roger-bell-west2}

[Roger Bell West's solution](/challenge-046/roger-bell-west/raku/ch-2.p6) loops efficiently, thanks to the C-style inner `loop`, which advances the index by the current employee `$n`umber:

```raku
my @rooms=1 xx 500;
for 2..500 -> $n {
  loop (my $k=$n-1 ; $k <500 ; $k+=$n) {
    @rooms[$k]=1-@rooms[$k];
  }
}
map {say $_+1}, grep {@rooms[$_]==1}, (0..@rooms.end);
```

## Ruben Westerberg {#ruben-westerberg2}

[Ruben Westerberg's solution](/challenge-046/ruben-westerberg/raku/ch-2.p6) generates an intermediate `@index` array, which is essentially a mask of doors to toggle for the current employee (`$i`):

```raku
my @doors=False xx 500; #doors initally closed
@doors[$_]=!@doors[$_] for 0..499; #First person opens all
for (2..500) -> $i {
    my @index=($i, {$_+$i} ... * >= 500).grep(* <= 500).map: *-1;
    @doors[$_]=!@doors[$_] for @index;
}
put @doors>>.Num;
```

Ruben's `@doors` is an array of `Bool`s, so he coerces each to a `Num` in order to output a string of 1s (open) and 0s (closed).

## Ryan Thompson {#ryan-thompson2}

[My submission](/challenge-046/ryan-thompson/raku/ch-2.p6) includes two solutions. The first is to simply output the square numbers directly:

```raku
say (1..$doors.sqrt.Int) »**» 2;
```

As justification for the above method, I provided an informal correctness proof in my blog, linked below.

For completeness, I decided to also submit a looping solution:

```raku
my %doors;
for 1..$doors -> $m {
    %doors{$m*$_} ^^= 1 for 1..$doors/$m;
}
say %doors.grep(*.value)».key».Int.sort;
```

The looping is optimal, as I only loop over every `$m` doors (`$m` is the current employee). For the output, I simply pull out all doors with a value and sort them numerically.

As a dispassionate reviewer of my own code a week later, I don't know why I used a hash, here. An array would have been cleaner, avoiding a potentially costly `sort`:

```raku
say %doors.grep(*.value)».key».Int.sort; # <-- This
say @doors.pairs.grep(*.value)».key;     # <-- Becomes this
```

**Blog** › [Is the Room Open? (500 Doors)](http://www.ry.ca/2020/02/500-doors/)

## Simon Proctor {#simon-proctor2}

[Simon Proctor's solution](/challenge-046/simon-proctor/raku/ch-2.p6) loops optimally, thanks to the increment in the `while` loop:

```raku
my @doors-open = 501 xx False;
for 1..500 -> $inc {
    my $cur = $inc;
    while $cur <= 500 {
        @doors-open[$cur] = ! @doors-open[$cur];
        $cur += $inc;
    }
}
```

Since Simon added a dummy element zero, for 501 elements in total, he can work directly with 1-based indexing, which simplifies everything, including the output loop:

```raku
for 1..500 -> $door {
    say "$door is Open" if @doors-open[$door];
}
```

## Ulrich Rieke {#ulrich-rieke2}

[Ulrich Rieke's solution](/challenge-046/ulrich-rieke/raku/ch-2.p6) begins by
defining a custom `flip` routine, that returns the opposite of the `open` or
`closed` keyword passed in:

```raku
sub flip( $state ) {
    return $state eq "open" ?? "closed" !! "open"  ;
}
```

The main body of Ulrich's solution is a familiar nested loop:

```raku
my @current = "open" xx 500 ;
for (2..500) -> $i {
    if ( $i < 251 ) {
        for ($i , 2 * $i  ... 500 ) -> $j {
            @current[ $j - 1 ] = flip( @current[ $j - 1] ) ;
        }
    }
    else {
        @current[ $i - 1 ] = flip( @current[ $i - 1 ] ) ;
    }
}
```

At this point, `@current` is an array of strings, `closed` or `open`,
accordingly. So Ulrich then zips that into `@doors` to map the `open`/`closed`
state to the room number:

```raku
my @doors = @current Z (1..500) ;
```

That is a neat way to do it. I would normally use `@current.pairs` (or `@current.antipairs` in this case), but it's always nice to consider another way to do the same thing.

```raku
for @doors -> $pair {
    say "door {$pair[ 1 ]} is open!" if $pair[0] eq "open" ;
}
```

***

***

## See Also {#blogs}

### Blogs this week:

**Arne Sommer** › [The Cryptic Raku Room](https://raku-musings.com/cryptic-room.html)

**Javier Luque** › [046 – Perl Weekly Challenge](https://perlchallenges.wordpress.com/2020/02/04/perl-weekly-challenge-046/)

**Laurent Rosenfeld** › [Garbled Message and Room Open](http://blogs.perl.org/users/laurent_r/2020/02/perl-weekly-challenge-46-garbled-message-and-room-open.html)

**Luca Ferrari** › [Encoded messages and open rooms](https://fluca1978.github.io/2020/02/03/PerlWeeklyChallened_46.html)

**Noud Aldenhoven** › [Is the room open?](https://www.noudaldenhoven.nl/wordpress/?p=288)

**Ryan Thompson** › [Cryptic Message](http://www.ry.ca/2020/02/cryptic-message/) | [Is the Room Open? (500 Doors)](http://www.ry.ca/2020/02/500-doors/)
