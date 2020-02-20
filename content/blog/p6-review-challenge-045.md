---
author: Ryan Thompson
date: 2020-02-08T00:00:00
description: "Ryan Thompson › Raku Weekly Review: Challenge - #045"
tags: ["raku"]
title: "Ryan Thompson › Raku Weekly Review: Challenge - #045"
type: post
image: images/blog/p6-review-challenge-045.jpg
---

Welcome to the Raku review for Week 045 of the Weekly Challenge! For a quick overview, go through the [original tasks](/blog/perl-weekly-challenge-045/) and [recap](/blog/recap-challenge-045/) of the weekly challenge.

I'm filling in for Laurent this week with the Raku review.

## Getting in Touch

<a href="mailto:rjt@cpan.org"><img src="http://ry.ca/misc/Email.svg" height="50" width="50"> Email</a> › Email me (Ryan) with any feedback about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="http://ry.ca/misc/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="http://ry.ca/misc/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

We'd greatly appreciate any feedback you'd like to give.


## Table of Contents

 * [Task 1](#task1)
 * [Task 2](#task2)
 * [Blogs](#blogs)


*** ***

# Task #1 › Square Secret Code {#task1}

***

## Original task description

The square secret code mechanism first removes any space from the original message. Then it lays down the message in a row of 8 columns. The coded message is then obtained by reading down the columns going left to right.

For example, the message is **“The quick brown fox jumps over the lazy dog”.**

Then the message would be laid out as below:

```
thequick
brownfox
jumpsove
rthelazy
dog
```
**Figure 1** › Partitioned Plaintext

The code message would be as below:

```
tbjrd hruto eomhg qwpe unsl ifoa covz kxey
```

***

## My general observations

There were three key ways people approached this task:

### 1. Partitioning and Looping

By first splitting the plaintext into column-width substrings, you end up with **Figure 1** (above). From there, you can simply append the first character of each string to your output, then the second character, and so on.

This method is perhaps the most obvious implementation of the problem description, as it follows the wording quite closely.

### 2. `zip`, `[Z~]` or `roundrobin`

This method builds on the first by taking advantage of these Raku builtins. After partitioning the string into 8-character arrays, those arrays can be simply fed through any of `zip`, `[Z~]` or `roundrobin`, and then `join`ed together.

### 3. `.comb` and Modulo Arithmetic

For this method, you first split the plaintext into a list of chars with `.comb`. Then, you loop over the plaintext array, appending each character into its `$index % $columns` string in an array of `@columns`. Finally, you simply `join` the columns together.

***

If my plain English descriptions don't make complete sense yet, don't worry; there will be plenty of code examples below.


## Arne Sommer

[Arne Sommer's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/arne-sommer/raku/ch-1.p6) removes spaces (and also removes double quotes) and then splits the input into a character array. Finally, he uses a nested loop to print the solution character by character:

```raku
unit sub MAIN ($string is copy = "The quick brown fox jumps over the lazy dog", :$verbose);
$string ~~ tr/" "//;
say ": { $string.lc }" if $verbose;
my @a = $string.lc.comb;

for 0 .. 7 -> $word {
  my $index = $word;
  loop {
    @a[$index]:exists
      ?? print  @a[$index]
      !! ( print " "; last);

    $index += 8;
  }
}
say "";
```

Arne's loops allow him to scan over `@a` 8 characters at a time, shifting the starting position from 0 to 7, so he scans each column.

**Blog** › [Square Dumper with Raku](https://raku-musings.com/square-dumper.html)

## Burkhard Nickels

[Burkhard Nickels' solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/burkhard-nickels/raku/ch-1.p6) uses a C-style `loop` to advance 8 characters at a time:

```raku
$msg ~~ s:g/\s//;
$msg = $msg.lc;
my @l = split("",$msg);

my $coded_msg;
for (1 .. 8) {
    loop (my $j = $_; $j <= @l.end; $j += 8) {
        $coded_msg ~= @l[ $j ];
    }
    $coded_msg ~= " ";
}
print "Coded   : $coded_msg\n";
```

**Blog** › [Square Secret Code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/burkhard-nickels/perl/ch-1.pod)

## Colin Crain

[Colin Crain's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/colin-crain/raku/ch-1.p6) is a first example we'll see of a `zip` or `roundrobin` solution:

```raku
sub MAIN (Str:D $raw = "The quick brown fox jumps over the lazy dog" ) {
    my $input = $raw.comb.grep( /\w/ ).join( '' ).lc;
    my @output = roundrobin ($input.comb(8)).map({ .comb });
    say join ' ', @output.map({ .join });
}
```

Colin first strips all non-word characters and converts the input to lowercase.

He then uses `comb(8)` to split the strings into 8-character strings, and `.comb` on each of those to convert them to character arrays. And then it gets interesting:

The [roundrobin](https://docs.perl6.org/routine/roundrobin) routine (which is similar to [zip](https://docs.perl6.org/type/List#routine_zip), except it handles lists of uneven lengths) takes the first character from each list, then the second, then the third, and so on. That's the exact ordering we need.

## Jaldhar H. Vyas

[Jaldhar H. Vyas' solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/jaldhar-h-vyas/raku/ch-1.p6) is another very compact one:

```raku
multi sub MAIN(*@ARGS) {
    my $input = @*ARGS.lc.join(q{ }).subst(/\s+/, q{}, :g);
    $input ~= q{ } x 8 - ($input.chars % 8);
    ([Z~] $input.comb.rotor(8)).join(q{ }).subst(/' '+/, q{ }, :g).say;
}
```

The first line joins the arguments, converting them to lowercase removing spaces. The second line then pads the input string to be a multiple of 8 characters.

The third line first splits `$input` into a character array with `.comb`, and then uses `rotor(8)` for the array the same way Colin used `.comb(8)` for a string. Jaldhar then `.join`s them with spaces, and trims repeated spaces. The result of all of this is then fed through the reduction metaoperator `[Z~]` to do the zip operation.

**Blog** › [Perl Weekly Challenge 045](https://www.braincells.com/perl/2020/02/perl_weekly_challenge_week_45.html)

## Javier Luque

[Javier Luque's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/javier-luque/raku/ch-1.p6) uses the `.comb` and modulo arithmetic approach to build up `@new_words` character by character:

```raku
sub MAIN(Str $string) {
    my @new_words;
    @new_words[$_] = '' for (0..7);

    my $clean_string = $string;
    $clean_string ~~ s:g/\s//;
    my @chars = $clean_string.comb;

    for (0 .. @chars.elems - 1) -> $i {
        @new_words[$i % 8] =
            @new_words[$i % 8] ~ @chars[$i];
    }

    say @new_words.join(' ');
}
```

**Blog** › [PERL WEEKLY CHALLENGE – 045 – Perl Weekly Challenge](https://perlchallenges.wordpress.com/2020/01/30/perl-weekly-challenge-045/)


## Jan Ole Kraft

[Jan Ole Kraft's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/jokraft/raku/ch-1.p6) splits the string into characters, and then uses a nested loop with indexing arithmetic to build up the output, character by character:

```raku
$str = $str.subst(" ","",:g);
my @arr = $str.split("", :skip-empty);
my $out = "";
for (0..7) -> $i {
  my $c = 0;
  while $c * 8 + $i < @arr.elems {
    $out = $out ~ @arr[$i + $c*8];
    $c++;
  }
  $out = $out ~ " ";
}
say $out;
```

## Laurent Rosenfeld

[Laurent Rosenfeld's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/laurent-rosenfeld/raku/ch-1.p6) chunks the input into 8-character strings, and then loops over each column. Laurent prints each `join`ed segment together, built up from the `$i`th character of each 8-character string via `substr`:

```raku
my $msg = @*ARGS ?? shift @*ARGS
    !! "The quick brown fox jumps over the lazy dog";
$msg ~~ s:g/\s+//;
my @letters = map { ~ $_}, $msg ~~ m:g/ .**1..8/;
for 0..7 -> $i {
    print " ", join "", map { substr  $_, $i, 1 if .chars >= $i}, @letters;
}
```

**Blog** › [Perl Weekly Challenge 45: Square Secret Code and Source Dumper](http://blogs.perl.org/users/laurent_r/2020/02/perl-weekly-challenge-45-square-secret-code-and-source-dumper.html)


## Luca Ferrari

[Luca Ferrari's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/luca-ferrari/raku/ch-1.p6) is another that uses `rotor` to chunk the filtered input into `$columns`-character arrays:

```raku
my @matrix = $message.lc.comb( /\w/ ).rotor: $columns, :partial;

say "Your original message is \n\t$message\n and encoded results:\n";
@matrix.join( "\n" ).say;
say "\nthat leads to\n";
for 0 .. $columns -> $start {
    ( @matrix[ $_ ][ $start ] // '' ).print for 0 .. @matrix.elems;
}
```

Luca's nested loop takes care of the indexing into both arrays to print out the solution in the correct order.

**Blog** › [Perl Weekly Challenge 45: encoded messages and self-source-code-printing](https://fluca1978.github.io/2020/01/29/PerlWeeklyChallenge45.html)


## Mark Anderson

[Mark Anderson's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/mark-anderson/raku/ch-1.p6) uses the `zip` method to elegant effect:

```raku
my @array.push: [.split({}, :skip-empty)] for $string.comb(8);
@array[*-1].push: " " for @array[*-1].elems..7;
@array = [Z] @array;
$_ = .join.trim-trailing for @array;
say @array.join: " ";
```

Once the `@array` has been put through `[Z]`, each of the sub-arrays may contain trailing spaces if the input wasn't a multiple of 8 characters in length, so Mark uses `.trim-trailing` in-place to clean those up, before printing the result.

## Markus Holzer

[Markus Holzer's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/markus-holzer/raku/ch-1.p6) is another good example of the `zip` or `roundrobin` method:

```raku
sub encrypt-squarely( $message ) {
    roundrobin(
      $message
      .subst(' ', '', :g)
      .lc
      .comb(/ . **! {1..8} /)
      .map({ .split('', :skip-empty) })
    )
    .map({ .join })
}
```

As you can see, after removing spaces and converting to lowercase, `$message` is partitioned with `.comb` using a regex. It's then split into characters before `roundrobin` can do its magic.

## Noud Aldenhoven

[Noud Aldenhoven's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/noud/raku/ch-1.p6) once again uses `[Z~]` to make short work of this problem:

```raku
sub encode($str) {
    my $stripped = $str.lc.subst(/\s/, '', :g);
    my @r = ($stripped ~ " " x (8 - $stripped.chars % 8)).comb.rotor(8, :partial);
    return ([Z~] @r).map({ $_.trim }).join(' ');
}
```

## Roger Bell West

[Roger Bell West's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/roger-bell-west/raku/ch-1.p6) first joins the input into `$in`:

```raku
my $n=8;
my $in='';
for lines() {
  .chomp;
  my $t=$_;
  $t ~~ s:g/\s+//;
  $in~=$t;
}
```

From there, Roger's nested loop advances `$n = 8` characters at a time, from all 8 starting positions, to build up the output one character at a time:

```raku
my $l=chars($in)-1;
my @out;
for (0..$n-1) -> $c {
  my $out;
  my $k=$c;
  while ($k <= $l) {
    $out~=substr($in,$k,1);
    $k+=$n;
  }
  push @out,$out;
}

say @out.join(' ');
```

## Ruben Westerberg

[Ruben Westerberg's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/ruben-westerberg/raku/ch-1.p6) is a beautiful example of the `[Z~]` method:

```raku
my $string="The quick brown fox jumps over the lazy dog";
my $padded=$string.trans(" "=>"");
my $a=$padded.comb.rotor: 8;
put ([Z~] $a).join: " ";
```

While we're all sometimes tempted to chain together as many things as possible, Ruben's code is an excellent case study on why it's sometimes better to split those long chains into separate statements.

## Ryan Thompson

[My solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/ryan-thompson/raku/ch-1.p6) uses the `.comb` and modulo arithmetic approach:

```raku
my @s;
$plain.lc.subst(/\s/,'',:g).comb.kv.map: { @s[$^i % $width] ~= $^str };
@s.join(' ')
```

I used `.kv` so I could conveniently access both the character and its index.

**Blog** › [Square Secret Code](http://www.ry.ca/2020/01/square-secret-code/)


## Simon Proctor

[Simon Proctor's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/simon-proctor/raku/ch-1.p6) gives us an encoder and decoder using `roundrobin`, and packages this up in two `multi` main subs. Here's the encoder:

```raku
#| Given a string encoded it using the square code
multi sub MAIN(
    *@clear-text #= Phrase to encode
) {
    roundrobin( @clear-text.map(*.lc.comb).flat.rotor( 8, :partial ) ).map(*.join("")).join(" ").say;
}
```

And here is the decoder:

```raku
#| Given a square encoded string decode it
multi sub MAIN(
    Bool :d(:$decode)!, #= Turn on decode mode
    *@encoded #= Encoded phrase
) {
    roundrobin( @encoded.map(*.comb("")) ).flat.join("").say;
}
```

This is the first example of a decoder we've seen in Raku, and I'm impressed by how simple it turns out to be for Simon.

## Ulrich Rieke

[Ulrich Rieke's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/ulrich-rieke/raku/ch-1.p6) partitions the string using `.rotor`, and then uses `substr` in a nested loop to build up `$encoded` character by character:

```raku
sub convertString( Str $str is copy ) {
    $str ~~ s:g/\s+// ;
    my @strings = $str.comb.rotor( 8, :partial).map( {.join} ).Array ;
    my $encoded ;
    for (0..7) -> $i {
        for @strings -> $word {
            my $len = $word.chars ;
            $encoded ~= $word.substr( $i , 1 ) if $len > $i ;
        }
    }
    my $len = @strings.elems ;
```

At this point, we have the characters in the right order, but each column needs to now be separated by spaces:

```raku
    my $lastwordlen = @strings[$len - 1].chars ;
    my @cycle ;
    for (1..$lastwordlen) {
        @cycle.push( $len ) ;
    }
    for ( 1..8 - $lastwordlen) {
        @cycle.push( $len - 1 ) ;
    }
    return $encoded.comb.rotor( @cycle ).map( {.join} ).Array ;
}
```

Ulrich accomplishes this by building up an array `@cycle` to contain the length of the string in each column. He is then able to pass that to `rotor` to split `$encoded` at the correct intervals.


*** ***

# Task #2 - Source Dumper {#task2}

Write a script that dumps its own source code. For example, say, the script name is `ch-2.p6`. The following command should return nothing:

```sh
$ perl6 ch-2.p6 | diff - ch-2.p6
```

***

## My observations

There are two ways to interpret this problem, resulting in very different solutions.

### 1. Source Code Reader

A straight reading of the challenge, with no additional constraints, means our script can simply read its own source file and print it. For example, here is my first solution:

```raku
$*PROGRAM.lines».say
```

Literally everyone implemented something similar.

### 2. Quine

However, one of the hackers this week has the perhaps dubious distinction of taking the task a step further, being the only Raku hacker this week to produce a full [quine](https://en.wikipedia.org/wiki/Quine_(computing)). That hacker is also the one writing this review.

For the uninitiated, quines are computer programs that not only produce a copy of their own source code, but they also have the additional constraint of *taking no input,* meaning, reading your own source code is not allowed.

Several of the Perl solutions this week were quines, so if you'd like to see more examples, check out my [Perl review](/blog/review-challenge-045#task2) for a showcase.


## Arne Sommer

[Arne Sommer's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/arne-sommer/raku/ch-2.p6) uses the compile-time `$?FILE` variable to get the script name, then converts it to an IO object, and `.slurp`s its contents:

```raku
print $?FILE.IO.slurp;
```

**Blog** › [Square Dumper with Raku](https://raku-musings.com/square-dumper.html)


## Burkhard Nickels

[Burkhard Nickels's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/burkhard-nickels/raku/ch-2.p6) is not quite as feature-packed as [his Perl version](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/burkhard-nickels/perl/ch-2.pl), but Chuck still produces a complete program:

```raku
# print "ch-2.p6 - PWC #45 Task #2: Source Dumper\n";
# print $*PROGRAM, ", ", $*PROGRAM-NAME, "\n";

my $fh = open :r, $*PROGRAM;

my $str;
while ( ! $fh.eof; ) {
    $str = $fh.get;
    $str.print; print "\n";
}
$fh.close;
```

Chuck uses `$*PROGRAM` to get the `IO::Path` object of the program.

**Blog** › [Source Dumper](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/burkhard-nickels/perl/ch-2.pod)

## Colin Crain

[Colin Crain's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/colin-crain/raku/ch-2.p6) again uses `$*PROGRAM`, but avoids the loop by reading the contents into a string with `slurp`:

```raku
sub MAIN () {
    print $*PROGRAM.open.slurp.gist;
}
```

## Jaldhar H. Vyas

[Jaldhar H. Vyas' solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/jaldhar-h-vyas/raku/ch-2.p6) is another slurpy one:

```raku
open(:r, $*PROGRAM).slurp.print;
```

**Blog** › [Perl Weekly Challenge Week 45](https://www.braincells.com/perl/2020/02/perl_weekly_challenge_week_45.html)

## Javier Luque

[Javier Luque's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/javier-luque/raku/ch-2.p6) instead uses `$*PROGRAM-NAME.IO` to get the IO object needed to print the lines:

```raku
sub MAIN () {
    for $*PROGRAM-NAME.IO.lines -> $line {
        say $line;
    }
}
```

**Blog** › [PERL WEEKLY CHALLENGE – 045 – Perl Weekly Challenge](https://perlchallenges.wordpress.com/2020/01/30/perl-weekly-challenge-045/)

## Jan Ole Kraft

[Jan Ole Kraft's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/jokraft/raku/ch-2.p6) is another example of using the compile-time variable `$?FILE`. Instead of using `.IO`, the more explicit `.open` is used. After that, `readchars` reads up to 64KiB characters, and `prints` those:

```raku
IO::Path.new($?FILE).open().readchars().print();
```

The 64KiB number comes from `$*DEFAULT-READ-ELEMS`, which is 65536 on my version, but [the documentation](https://docs.perl6.org/routine/readchars) notes it is implementation-specific, so, if in doubt, supply your own value or read in a loop to avoid surprises.

## Laurent Rosenfeld

[Laurent Rosenfeld's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/laurent-rosenfeld/raku/ch-2.p6) pulls the filename from `$?FILE` uses the `IO` role of Str to enable `slurp`ing its contents:

```raku
$?FILE.IO.slurp.say;
```

**Blog** › [Perl Weekly Challenge 45: Square Secret Code and Source Dumper](http://blogs.perl.org/users/laurent_r/2020/02/perl-weekly-challenge-45-square-secret-code-and-source-dumper.html)

## Luca Ferrari

[Luca Ferrari's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/luca-ferrari/raku/ch-2.p6) uses the ready-made `$*PROGRAM` IO object to `say` each line:

```raku
sub MAIN {
    .say for $*PROGRAM.lines;
}
```

**Blog** › [Perl Weekly Challenge 45: encoded messages and self-source-code-printing](https://fluca1978.github.io/2020/01/29/PerlWeeklyChallenge45.html)

## Markus Holzer

[Markus Holzer's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/markus-holzer/raku/ch-2.p6) goes with `$*PROGRAM-NAME`, but the effect is the same as using `$?FILE`:

```raku
$*PROGRAM-NAME.IO.slurp.say;
```


## Noud Aldenhoven

[Noud Aldenhoven's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/noud/raku/ch-2.p6) is another `$?FILE` solution:

```raku
$?FILE.IO.slurp.trim.say;
```


## Roger Bell West

[Roger Bell West's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/roger-bell-west/raku/ch-2.p6) uses the more explicit `open` symtax:

```raku
my $f=open :r,$*PROGRAM-NAME;
for $f.lines {
  say $_;
}
```


## Ruben Westerberg

[Ruben Westerberg's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/ruben-westerberg/raku/ch-2.p6) uses `$*PROGRAM`:

```raku
$*PROGRAM.IO.lines.map: *.put;
```

## Ryan Thompson

[My file read solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/ryan-thompson/raku/ch-2.p6) uses `$*PROGRAM`, and a hyper operator to call `.say` on each line:

```raku
$*PROGRAM.lines».say
```

However, I also submitted a [full quine](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/ryan-thompson/raku/ch-2a.p6):

```raku
{.printf($_)}(<{.printf($_)}(<%s>)>)
```

You can see that the `<>` quote contains a copy of the program, and the `printf` will duly expand the `%s`, so the output is the full program source, and passes the `diff` test as well.

**Blog** › [Quine](http://www.ry.ca/2020/02/quine/)


## Simon Proctor

[Simon Proctor's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/simon-proctor/raku/ch-2.p6) `slurps` right from `$*PROGRAM`:

```raku
$*PROGRAM.slurp.print;
```

## Ulrich Rieke

[Ulrich Rieke's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/ulrich-rieke/raku/ch-2.p6) is another example of a more explicit approach with `open`:

```raku
my $fh = open $?FILE , :r ;
.say for $fh.lines ;
close $fh ;
```


***
***

## SEE ALSO {#blogs}

***

### Blogs this week:



**Adam Russell** › [Perl Fun](https://adamcrussell.livejournal.com/15213.html)

**Arne Sommer** › [Square Dumper with Raku](https://raku-musings.com/square-dumper.html)

**Burkhard Nickels** › [Square Secret Code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/burkhard-nickels/perl/ch-1.pod) | [Source Dumper](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/burkhard-nickels/perl/ch-2.pod)

**Dave Jacoby** › [Challenge 45: Cyphers and Quines](https://jacoby.github.io/2020/01/29/challenge-45-cyphers-and-quines.html)

**E. Choroba** › [Square Secret Code & Source Dumper](http://blogs.perl.org/users/e_choroba/2020/01/perl-weekly-challenge-045-square-secret-code-source-dumper.html)

**Jaldhar H. Vyas** › [Perl Weekly Challenge 45](https://www.braincells.com/perl/2020/02/perl_weekly_challenge_week_45.html)

**Javier Luque** › [Perl Weekly Challenge](https://perlchallenges.wordpress.com/2020/01/30/perl-weekly-challenge-045/)

**Luca Ferrari** › [encoded messages and self-source-code-printing](https://fluca1978.github.io/2020/01/29/PerlWeeklyChallenge45.html)

**Laurent Rosenfeld** › [Square Secret Code and Source Dumper](http://blogs.perl.org/users/laurent_r/2020/02/perl-weekly-challenge-45-square-secret-code-and-source-dumper.html)

**Ryan Thompson** › [Square Secret Code](http://www.ry.ca/2020/01/square-secret-code/) | [Quine](http://www.ry.ca/2020/02/quine/)
