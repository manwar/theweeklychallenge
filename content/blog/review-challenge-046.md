---
author:       Ryan Thompson
date:         2020-02-17T00:00:00
description:  "Ryan Thompson › Perl Weekly Review: Challenge - #046"
tags:         ["perl"]
title:        "Ryan Thompson › Perl Weekly Review: Challenge - #046"
image:        /images/blog/flip_500.png
type:         post
---

Continues from [previous week](/blog/review-challenge-045/).

Welcome to the Perl review for Week 046 of the Weekly Challenge! For a quick overview, go through the [original tasks](/blog/perl-weekly-challenge-046/) and [recap](/blog/recap-challenge-046/) of the weekly challenge.

## Getting in Touch

<a href="mailto:rjt@cpan.org"><img src="http://ry.ca/misc/Email.svg" height="50" width="50"> Email</a> › Email me (Ryan) with any feedback about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="http://ry.ca/misc/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="http://ry.ca/misc/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

We'd greatly appreciate any feedback you'd like to give.

## Table of Contents

### [Task 1 › Cryptic Message](#task1)

[ [Alicia Bielsa](#alicia-bielsa1)  | [Andrezgz](#andrezgz1)  | [Athanasius](#athanasius1)  | [Cheok-Yin Fung](#cheok-yin-fung1)  | [Cristina Heredia](#cristian-heredia1)  | [Dave Jacoby](#dave-jacoby1)  | [Duane Powell](#duane-powell1)  | [Duncan C. White](#duncan-c-white1)  | [E. Choroba](#e-choroba1)  | [Jaldhar H. Vyas](#jaldhar-h-vyas1)  | [Javier Luque](#javier-luque1)  | [Laurent Rosenfeld](#laurent-rosenfeld1)  | [Mohammad S Anwar](#mohammad-anwar1)  | [Rage311](#rage3111)  | [Roger Bell West](#roger-bell-west1)  | [Ruben Westerberg](#ruben-westerberg1)  | [Ryan Thompson](#ryan-thompson1)  | [Saif Ahmed](#saiftynet1)  | [Ulrich Rieke](#ulrich-rieke1)  | [User Person](#user-person1)  | [Wanderdoc](#wanderdoc1)  ]

### [Task 2 › 500 Doors](#task2)

[ [Alicia Bielsa](#alicia-bielsa2)  | [Andrezgz](#andrezgz2)  | [Athanasius](#athanasius2)  | [Cheok-Yin Fung](#cheok-yin-fung2)  | [Colin Crain](#colin-crain2)  | [Cristina Heredia](#cristian-heredia2)  | [Dave Jacoby](#dave-jacoby2)  | [Duane Powell](#duane-powell2)  | [Duncan C. White](#duncan-c-white2)  | [E. Choroba](#e-choroba2)  | [Jaldhar H. Vyas](#jaldhar-h-vyas2)  | [Javier Luque](#javier-luque2)  | [Laurent Rosenfeld](#laurent-rosenfeld2)  | [Mohammad S Anwar](#mohammad-anwar2) | [Peter Scott](#peter-scott2) | [Rage311](#rage3112)  | [Roger Bell West](#roger-bell-west2)  | [Ruben Westerberg](#ruben-westerberg2)  | [Ryan Thompson](#ryan-thompson2)  | [Saif Ahmed](#saiftynet2)  | [Ulrich Rieke](#ulrich-rieke2)  | [User Person](#user-person2)  | [Wanderdoc](#wanderdoc2)  ]

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

## Alicia Bielsa {#alicia-bielsa1}

[Alicia Bielsa's solution](/challenge-046/alicia-bielsa/perl/ch-1.pl) searches an array of arrays (AoA) for characters that have appeared twice.

```perl
my @aCharactersRepeated = ();
my $lengthMessage = scalar(@aMessage1);
my @aAllMessages = (@aMessage1, @aMessage2 ,@aMessage3, @aMessage4, @aMessage5 ,@aMessage6);
my %hCharacters = ();
foreach my $indexAllMesages (0..$#aAllMessages){
    my $indexMessage =  $indexAllMesages % $lengthMessage;
    my $currentCharacter = $aAllMessages[$indexAllMesages];
    unless (exists($hCharacters{$indexMessage})){
        $hCharacters{$indexMessage} =();
    }
    unless (exists($hCharacters{$indexMessage}{$currentCharacter})){
        $hCharacters{$indexMessage}{$currentCharacter} = 0 ;
    }
    $hCharacters{$indexMessage}{$currentCharacter} ++;
    if ($hCharacters{$indexMessage}{$currentCharacter} == 2 ){
        $aCharactersRepeated[$indexMessage] = $currentCharacter;
    }
}
print "Decrypted Message:";
foreach my $character (@aCharactersRepeated){
    print "$character";
}
print "\n";
```

Alicia uses `%hCharacters` to store her frequency map, where `$hCharacters{A}{$indexMessage} == $N` if `'A'` appears `$N` times in column `$indexMessage`.

## Andrezgz {#andrezgz1}

[Andrezgz's solution](/challenge-046/andrezgz/perl/ch-1.pl) stores the messages as an AoA and then decrypts it with the following nested loops:

```perl
my $msg_len = scalar @{$msg->[0]};
my @decrypted = ('?') x $msg_len;
for my $i (1 .. @{$msg}-1) {
    for my $j (0 .. $i-1) {
        for (0 .. $msg_len-1) {
            $decrypted[$_] = $msg->[$i]->[$_] if ($msg->[$i]->[$_] eq $msg->[$j]->[$_]);
        }
    }
    print @decrypted,"\n";
}
```

The way in which the answer is built up and printed at each stage as more columns are "solved" is interesting, reminding me vaguely of [Matrix code](https://en.wikipedia.org/wiki/Matrix_digital_rain):

```
????????
?????a??
P??l?a??
Pe?lRa?u
PerlRaku
```

## Athanasius {#athanasius1}

[Athanasius' solution](/challenge-046/athanasius/perl/ch-1.pl) includes a convenience function to turn a string input with newlines into an AoA:

```perl
my $message = 'P + 2 l ! a t o
               1 e 8 0 R $ 4 u
               5 - r ] + a > /
               P x w l b 3 k \
               2 e 3 5 R 8 y u
               < ! r ^ ( ) k 0';
my $array   = make_array($message);

sub make_array {
    my  ($message) = @_;
    my   @array;
    push @array, [ grep { length } split /\s+/, $_ ] for split /\n/, $message;
    return \@array;
}
```

Athanasius then loops to generate a full frequency distribution of letters for each column, then `sort`s them numerically to find the most frequent:

```perl
my $decrypt = '';
for my $char (0 .. $array->[0]->$#*) {
    my %opts;
     ++$opts{ $array->[$_][$char] } for 0 .. $#$array;
    $decrypt .= (sort { $opts{$b} <=> $opts{$a} } keys %opts)[0];
}
```

## Cheok-Yin Fung {#cheok-yin-fung1}

[Cheok-Yin Fung's solution](/challenge-046/cheok-yin-fung/perl/ch-1.pl) handles the frequency analysis with an AoA which maps the column number `$j` and all ASCII ordinals from 33..126, to the number of times they appear:

```perl
for my $i (0..$numberoflines-1) {
    for my $j (0..$msglength-1) {
        for my $d (33..126) {
            $charoccurence[$j][$d] = 0;  # ref to the ASCII table; #33 is ! and #126 is ~
        }
    }
}
```

(The row-based `$i` is not used, here.)

The message, a string, then has horizontal whitespace removed before being split into lines, and then characters. The innermost loop compares the current character to each of 33..126, and increments `$charoccurence[$j][$d]` if it matches:

```perl
# " =~ s/\s//g " isn't good becoz it removes new line characters
$msg =~ s/\h//g;
my @lines = split("\n", $msg);
for my $i (0..$numberoflines-1) {
    my  @str = split // , $lines[$i];
    for my $j (0..$msglength-1) {
        for my $d (33..126) {
            if (ord($str[$j]) == $d) {
            #             if ( $str[$j] eq chr($d)) {
            #     print chr($d);             #testing
                 $charoccurence[$j][$d]++;
             }
        }
    }
}
```

Cheok-Yin Fung could have replaced the inner `for my $d` loop with a single statement:

```perl
$charoccurence[$j][ ord( $str[$j] ) ]++;
```

If range checking the ordinal is a concern, a simple conditional would suffice, but I would personally rather validate or filter the input instead, in that case.

## Cristina Heredia {#cristian-heredia1}

[Cristina Heredia's solution](/challenge-046/cristian-heredia/perl/ch-1.pl) defines an array for each row:

```perl
my @array1 = ('P',  '+',  '2',  'l',  '!',  'a',  't',  'o' );
my @array2 = ('1',  'e',  '8',  '0',  'R',  '$',  '4',  'u' );
my @array3 = ('5',  '-',  'r',  ']',  '+',  'a',  '>',  '/' );
my @array4 = ('P',  'x',  'w',  'l',  'b',  '3',  'k',  '\\' );
my @array5 = ('2',  'e',  '3',  '5',  'R',  '8',  'y',  'u' );
my @array6 = ('<',  '!',  'r',  '^',  '(',  ')',  'k',  '0' );
```

This is then combined into the linear `@arrayCharacter` by appending the `$i`th character from each `@array?`, in a loop:

```perl
my @arrayCharacter;
print "The message is: ";
foreach (my $i = 0; $i < @array1; $i++) {
    @arrayCharacter = ();
    push(@arrayCharacter, @array1[$i]);
    push(@arrayCharacter, @array2[$i]);
    push(@arrayCharacter, @array3[$i]);
    push(@arrayCharacter, @array4[$i]);
    push(@arrayCharacter, @array5[$i]);
    push(@arrayCharacter, @array6[$i]);
```

After that, Cristina loops through `@arrayCharacter` and `%count`s the frequency of each character, and then removes all pairs where the count is 1, effectively leaving the correct character for the column:

```perl
    my %count;
    $count{$_}++ foreach @arrayCharacter;
    #removing the lonely strings
    while (my ($key, $value) = each(%count)) {
        if ($value == 1) {
            delete($count{$key});
        }
    }

    #output the counts
    while (my ($key, $value) = each(%count)) {
        print "$key";
    }
}
```

The step of creating `@arrayCharacter` could be avoided by replacing the `push(@arrayCharacter, @array1[$i])` lines with `$count{$array1[$i]}++`. I might also prefer using an AoA instead of the six named arrays, so that the code could handle messages with any number of rows. Apart from these suggestions, however, Cristina's algorithm is sound and the code is easy to follow.

## Dave Jacoby {#dave-jacoby1}

[Dave Jacoby's solution](/challenge-046/dave-jacoby/perl/ch-1.pl) accepts multi-line strings, and splits those into an AoA called `@ctext`:

```perl
my @ctext = map { [ split /\s+/, $_ ] } grep { /\S/ } split m{\n}, $ctext;
```

From there, he loops through the columns (`$i`) and increments `%col` for the corresponding character in each row. After that, he sorts the keys in reverse numerical order and takes the first one (`$k`):

```perl
for my $i ( 0 .. scalar $ctext[0]->@* - 1 ) {
    my %col;
    map { $col{ $_->[$i] }++ } @ctext;
    my ($k) = sort { $col{$b} <=> $col{$a} } keys %col;
    push @ptext, $k;
}
```

The final answer is then simply `join '', @ptext`.


## Duane Powell {#duane-powell1}

[Duane Powell's solution](/challenge-046/duane-powell/perl/ch-1.pl) takes the message as a string, splits it into lines, then characters, and increments a HoH (hash of hash) `$data` which maps a column `$p` and `$char` to its count:

```perl
my $data = {};
foreach my $line (split(/\n/,$message)) {
    my $p = 1;
    foreach my $char (split(/ /,$line)) {
        $data->{$p++}{$char}++;
    }
}
```

Now a simple nested loop iterates over the columns (`$p`), and finds the char that occurs most frequently within that column, and prints it:

```perl
foreach my $p (sort keys %{$data}) {
    my ($max,$out) = (0,'');
    foreach my $char (keys %{$data->{$p}}) {
        if ($data->{$p}{$char} > $max) {
            $out = $char;
            $max = $data->{$p}{$char};
        }
    }
    print $out;
}
```

Duane's solution is decently compact, and very comprehensible.

## Duncan C. White {#duncan-c-white1}

[Duncan C. White's solution](/challenge-046/duncan-c-white/perl/ch-1.pl) accepts a list of strings on the commandline. The solution is neatly divided into two parts. First up is the frequency collection, which builds up an AoH (array of hashes) in `@freq`:

```perl
my @freq;    # array of bags
foreach my $msg (@ARGV) {
    my @letter = split( //, $msg );
    foreach my $i (0..$#letter) {
        $freq[$i] //= {};
        $freq[$i]{$letter[$i]}++;
    }
}
```

Each line is split into characters, and then Duncan loops through the resulting array, incrementing `$freq[$i]{_}` for each column and character.

Next up is the `$result` builder, which finds the character in each column with the maximum frequency:

```perl
my $result = "";
foreach my $i (0..$#freq) {
    my $max = -1;
    my $let = '';
    my $href = $freq[$i];
    while( my($l,$f) = each %$href ) {
        if( $f > $max ) {
            $max = $f;
            $let = $l;
        }
    }
    $result .= $let;
}
say $result;
```

## E. Choroba {#e-choroba1}

[E. Choroba's solution](/challenge-046/e-choroba/perl/ch-1.pl) works with arrays of strings (rows):

```perl
my @message_sets = (['Hxl4!', 'ce-lo', 'ze6lg', 'HWlvR', 'q9m#o'],
                    ['P+2l!ato', '1e80R$4u', '5-r]+a>/', 'Pxwlb3k\\',
                     '2e35R8yu', '<!r^()k0']);
```

Choroba's solution again uses an AoH to tally the frequency of each character in each column:

```perl
my @frequency;
for my $message (@$messages) {
    ++$frequency[$_]{ substr $message, $_, 1 }
        for 0 .. length($message) - 1;
}
for my $position (@frequency) {
    my $max = max(values %$position);
    $position->{$_} == $max and print for keys %$position;
}
print "\n";
```

[`List::Util`](https://perldoc.perl.org/List/Util.html)'s `max` helps to find the most frequent character.

**Blog** › [Cryptic Message & Is the Room Open?](http://blogs.perl.org/users/e_choroba/2020/02/perl-weekly-challenge-046-cryptic-message-is-the-room-open.html)

## Jaldhar H. Vyas {#jaldhar-h-vyas1}

[Jaldhar H. Vyas' solution](/challenge-046/jaldhar-h-vyas/perl/ch-1.pl) accepts an AoA for input, and then starts with what amounts to a matrix transposition:

```perl
my @rotated;
for my $i (0 .. scalar @message - 1) {
    for my $j (0 .. scalar @{$message[$i]} - 1) {
        push @{$rotated[$j]}, $message[$i][$j];
    }
}
```

Now that the columns are rows, each row can be sorted to aid in finding
duplicated characters (whitespace mine):

```perl
say join q{},
     map { /(.)\1/; $1; }
     map { join q{}, sort @{$_}; } @rotated;
```

The sorted strings are then fed through the regexp `/(.)\1/` which is a capturing check for two of the same character in a row. `$1` is the character that was found.

Jaldhar's is a unique solution. Transposing the input makes the second part quite easy, using the highly optimized regexp engine to find the duplicated character.

## Javier Luque {#javier-luque1}

[Javier Luque's solution](/challenge-046/javier-luque/perl/ch-1.pl) takes a multiline string, splits it, and then builds up a column-wise array:

```perl
# Initialize the columns hash
my @column_hash;
my ($first_line) = split ("\n", $message, 2);
my $length = length(join '', split (" ", $first_line));
$column_hash[$_] = {} for (0..$length-1);
# Parse the cryptic message
for my $line (split ("\n", $message)) {
    my $i = 0;
    for my $char (split (" ", $line)) {
        $column_hash[$i++]->{$char}++;
    }
}
```

At this point, `@column_hash` contains character counts for each column. Next, Javier does a reverse numerical sort on each column, printing the first element, so that the most frequent characters are output.

```perl
# Sort
for my $column (@column_hash) {
    my @sort =
        sort { $column->{$b} <=> $column->{$a} }
        keys %$column;
    print $sort[0];
}
```

**Blog** › [046 – Perl Weekly Challenge](https://perlchallenges.wordpress.com/2020/02/04/perl-weekly-challenge-046/)

## Laurent Rosenfeld {#laurent-rosenfeld1}

[Laurent Rosenfeld's solution](/challenge-046/laurent-rosenfeld/perl/ch-1.pl) accepts a string, splits it into an AoA, and then transposes it to obtain a column-wise matrix:

```perl
my @AoA = map { [ split /\s+/, $_] } split /[\r\n]+/, $garbled;
my @transposed;
for my $i (0 .. $#AoA) {
  $transposed[$_][$i] = $AoA[$i][$_] for 0.. scalar @{$AoA[$i]} -1;
}
```

From there, Laurent loops to build a frequency table for each column, in `%counter`, and appends all characters with a count greater than 1 to the output message:

```perl
my @msg = "";
for my $line_ref (@transposed) {
    my %counter;
    $counter{$_}++ for @$line_ref;
    push @msg, grep { $counter{$_} > 1 } keys %counter;
}
say @msg;
```

**Blog** › [Garbled Message and Room Open](http://blogs.perl.org/users/laurent_r/2020/02/perl-weekly-challenge-46-garbled-message-and-room-open.html)

## Mohammad S Anwar {#mohammad-anwar1}

**Mohammad,** creator of the Perl Weekly Challenge, has finally entered the fray with a solution of his own! It may be a bit strange to welcome you to your own challenge, Mohammad, but I'm going to do it anyway. Welcome. :-)

[Mohammad S Anwar's solution](/challenge-046/mohammad-anwar/perl/ch-1.pl) accepts an array of strings, and then splits each string on whitespace.  Maintaining a column counter, Mohammad increments the frequency table for each character in turn:

```perl
my $table = [];
foreach my $message (@messages) {
    my $column = 0;
    foreach my $char (split /\s/, $message) {
        $table->[$column++]->{$char}++;
    }
}
```

Finally, all Mohammad needs to do is a reverse numerical sort on each column's frequency table, and print the key that appears most often.

```perl
map { print [ sort { $_->{$b} <=> $_->{$a} } keys %$_ ]->[0] } @$table;
```

Mohammad's solution is concise without getting in the way of comprehension.

## Rage311 {#rage3111}

[Rage311's solution](/challenge-046/rage311/perl/ch-1.pl) starts with an AoA of the message, and then loops over it to build the frequency map:

```perl
my @freq;
for my $col ( 0 .. $#{ $scrambled[0] } ) {
    $freq[$col]{ $scrambled[$_][$col] }++ for 0 .. $#scrambled;
}
```

Next, is the by now quite familiar max frequency loop to print the message:

```perl
say join '', map { (sort { $_->{$b} <=> $_->{$a} } keys $_->%*)[0] } @freq;
```

Rage311 took full advantage of the AoA input, here, without having to deal with the intermediate `split` and storage that other solutions needed to use.

## Roger Bell West {#roger-bell-west1}

[Roger Bell West's solution](/challenge-046/roger-bell-west/perl/ch-1.pl) takes input from STDIN, splitting each line on whiespace and adding it to the `@place` frequency map:

```perl
my @place;
while (<>) {
    chomp;
    my @k=split / /,$_;
    map {$place[$_]{$k[$_]}++} (0..$#k);
}
```

Roger now loops through `@place`, one column at a time, printing the most frequent character:

```perl
foreach my $h (@place) {
    my @v=values %{$h};
    my @k=keys %{$h};
    my @i=sort {$v[$b] <=> $v[$a]} (0..$#v);
    print $k[$i[0]];
}
print "\n";
```

## Ruben Westerberg {#ruben-westerberg1}

[Ruben Westerberg's solution](/challenge-046/ruben-westerberg/perl/ch-1.pl) accepts an AoA in `@inComming` and loops through it column-wise to build a frequency table for each column in turn, and push each character to the resulting `@decoded` array:

```perl
my @decoded;
for my $c (0..@{$inComming[0]}-1) {
    my @col;
    my %count;
    for my $r (@inComming) {
        my $v=$$r[$c];
        $count{$v}++;
        if ($count{$v}==2) {
            push @decoded, $v;
            last;
        }
    }
}
print join "", @decoded;
```

## Ryan Thompson {#ryan-thompson1}

[My solution](/challenge-046/ryan-thompson/perl/ch-1.pl) uses a non-core (yet still extremely popular) module, [`List::MoreUtils`](https://metacpan.org/pod/List::MoreUtils) so I did not have to roll my own `frequency` method yet again. I also use core `List::Util`'s `reduce`. I accept a list of strings as input:

```perl
my @r = map y/ //dr, @_;
join '',   map { reduce { $_->{$a} > $_->{$b} ? $a : $b } keys %$_ }
   reverse map { { frequency map chop, @r } } 1..length $r[0];
```

Reading from the bottom up, inside out, we loop once for each column, and the inner `map chop, @r` chops the last character off of each string in `@r`, and feeds them all to `frequency`. Here, `frequency(H c z H q)` would return `(H => 2, c => 1, q => 1, z => 1)`. The extra curly braces turn this into a hash ref. Since `chop` works from right to left, we must `reverse` the results.

Then, we `reduce` over the list of keys, pulling the key that has the maximum value, which is the most frequent character. Finally, we `join` together the results.

**Blog** › [PWC 046 › Cryptic Message](http://www.ry.ca/2020/02/cryptic-message/)

## Saif Ahmed {#saiftynet1}

[Saif Ahmed's solution](/challenge-046/saiftynet/perl/ch-1.pl) provides a decoder, but also some other code that explores these messages in more detail.  Here's the decoder, which accepts an ref to an array of strings:

```perl
sub collector{
    my $messages=shift;                               # the list ref of messages
    my $result="";                                    # the result to return
    foreach my $col (0.. length $$messages[0]){       # for each poition
        my %collection=();                            # hash to store frequencies
        foreach my $message (@$messages){
            no warnings;                              # so that undef === 0
            $collection{(split //,$message)[$col]}++; # increment count when found
        }
```

As you can see, Saif stores the frequency map in `%collection`. He loops once for each `$col`umn, and then once for each line in `@messages`. He `split`s each message and pulls out the current column. There is some unnecessary splitting going on, but the impact is minor when the messages are short.

Next, Saif iterates through the `%collection` hash and finds the most common
character in each column, and appends that to `$result`:

```perl
        my $max=0; my $commonest="";                  # now search and find commonest
        foreach my $char (keys %collection){
            if ($collection{$char} > $max) {
                $max=$collection{$char};
                $commonest=$char;
            }
        }
        $result.=$commonest;                           # add the commonenst char to our result
    }
```

### Extra Credit

Saif provided a couple of other routines. The first is a "broken messager", which automates generating messages like the ones given in the challenge. You feed in a plaintext `$message`, and it munges the characters randomly:

```perl
sub brokenMessager{
    my $message=shift;
    my $brokenness=0.4;                # likelihood of mangling
    my $allChars="";                   # a string of all printable chars
    $allChars .= chr for 1..255;       # First get all characters 0 to 255,
    $allChars =~s/[^!-~]//g;           # Then remove anything non printable
    my $result="";
    foreach my $char (split //,$message){    # split $message and random replace
        $result.=(rand()>$brokenness)?(split //,$allChars)[rand()*length $allChars]:$char;
    }
    return $result;
}
```

Finally, Saif attempted a method of turning these messages into a form of reliable transport, by sending "broken" messages repeatedly until the decoded results are the same as the previous iteration. Saif acknowledges it is not 100% accurate. However, this provides an interesting glimpse into the practical aspects of trying to do error correction on such badly degraded messages:

```perl
sub tryUntilStable{
    my $message=shift;
    my $tests=[];
    my $result=""; my $guess="A guess";
    while ($result ne $guess){
        $result=$guess;
        my $messageReceived=brokenMessager($message);
        print $messageReceived,"\n";
        sleep 0.5;
        push @$tests,$messageReceived;
        $guess=collector($tests);
    }
    print "\nFinal result:- $result\n"
}
```

## Ulrich Rieke {#ulrich-rieke1}

[Ulrich Rieke's solution](/challenge-046/ulrich-rieke/perl/ch-1.pl) takes a list of strings and iterates column-wise with the help of `substr`:

```perl
my $array = shift;
my $len   = length ${$array}[0];
my $decoded;
for my $i ( 0 .. $len - 1 ) {
    my %letterfrequency;
    foreach my $word ( @{$array} ) {
        $letterfrequency{ substr( $word, $i, 1 ) }++;
    }
    my @sorted = sort { $letterfrequency{$b} <=> $letterfrequency{$a} }
      keys %letterfrequency;
    $decoded .= $sorted[0];
}
```

Since he is iterating column-wise, Ulrich can build up the letter frequency and then append the most common character to the result, without storing any sort of multi-dimensional matrix.

### C++ and Haskell

Ulrich also submitted solutions in [C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-046/ulrich-rieke/cpp/ch-1.cpp) and [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-046/ulrich-rieke/haskell/ch-1.hs).


## User Person {#user-person1}

**User Person** is new to the challenge. Welcome!

[User Person's solution](/challenge-046/user-person/perl/ch-1.pl) accepts a multi-line string as input, and then iterates over each character (including `\n`s) as follows:

```perl
my $message       = $_[0];
$message          =~ s{ }{}g;
my $decodedString = '_' x index($message,"\n");
my @seen          = ();
my $col           =  0;
CHAR_LOOP:
foreach ( split //, $message ) {
    if ( $_ eq "\n") {
        $col = 0;
        next CHAR_LOOP;
    }
    substr($decodedString,$col,1,$_) if ++$seen[$col]{$_} == 2;
    ++$col;
}
```

They use 4-argument `substr` here, to directly replace the character in `$decodedString` with the most frequent character in the column.

### Python

User Person also submitted a solution in [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-046/user-person/python/ch-1.py).

## Wanderdoc {#wanderdoc1}

Wanderdoc provided [two solutions](/challenge-046/wanderdoc/perl/ch-1.pl), one that works with arrays, and one that works with strings. Both accept a multi-line string as input; the names refer to the internal logic. Conveniently, these are named `arrays` and `strings`. Here is `arrays`:

```perl
sub arrays {
     my @strings =  map [split(/\s/, $_)], split(/\n/, $message);
     my $max_idx = $#{$strings[0]};
     my @cols = map { my $idx = $_;
          my @slice = map $_->[$idx] // '', @strings; [@slice];
          } 0 .. $max_idx;
     my @doubles = map { my %seen; grep $seen{$_}++ > 0, @$_;} @cols;
     # print join('',@doubles), $/; # PerlRaku
}
```

Here, Wanderdoc splits the message into an AoA, a matrix of characters.  Wanderdoc then iterates through the column indicies to build up the columns as an AoA in `@cols`. After that, `@doubles` is essentially the final result, created from any character seen more than once in a given column.

Now here is `strings`, the string-based solution:

```perl
sub strings {
    my @strings = map { tr/ //ds; $_; } split( /\n/, $message );
    my $len     = length( $strings[0] );
    # BrowserUK: http://www.perlmonks.org/?node_id=1202721:
    my $buf   = chr(0) x $len;
    my @cRefs = map \substr( $buf, $_, 1 ), 0 .. $len - 1;
    my $txt;
    for my $idx ( 0 .. $len - 1 ) {
        my ($letter) = do {
            my %seen;
            grep $seen{$_}++ > 0,
              map { substr( $buf, 0 ) = $_; ${ $cRefs[$idx] }; } @strings;
        };
        $txt .= $letter;
    }
}
```

Here, Wanderdoc uses a buffer, with each index referenced by `@cRefs`. Then, Wanderdoc loops over each column index, and then uses the LHS `substr` to overwrite `$buf` with the current row. The current letter is `${ $cRefs[$idx] }`. Then, the `grep $seen{$_}++ > 0` will return characters seen more than once.

With the included benchmark, `strings` runs approximately 50% faster. This is because the `@cRefs` setup does the expensive indexing operation once, and then those refs can be re-used without paying that penalty again.

It's certainly an interesting way to exploit the language. Whether the 2-3 minutes I spent staring at this code is worth the 66 μs CPU time savings really depends on how many of these messages one expects to decode, I suppose. :-)

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

## Alicia Bielsa {#alicia-bielsa2}

[Alicia Bielsa's solution](/challenge-046/alicia-bielsa/perl/ch-2.pl) does a nested loop to flip the doors, with a `flipStatus` routine to actually toggle a door:

```perl
my $TOTAL = 500;
my @aRooms =  (0) x $TOTAL;
foreach my $employee (1..$TOTAL){
    foreach my $door ($employee..$TOTAL){
        if ($door % $employee == 0 ){
            $aRooms[$door-1] = flipStatus ($aRooms[$door-1]);
        }
    }
}

sub flipStatus {
    my $status = shift;
    if ($status){
        return 0;
    }
    return 1;
}
```

Finally, a simple loop through `@aRooms` to print the "open" (value 1) rooms:

```perl
foreach my $room (0..$#aRooms){
    if ($aRooms[$room]){
        $room ++;
        print "Room $room opened\n";
    }
}
```

Note that Alicia's `@aRooms` is 500 elements long, meaning indicies 0..499.  The challenge, however, asks for rooms 1..500. Alicia simply increments `$room` so the correct number is printed.

## Andrezgz {#andrezgz2}

[Andrezgz's solution](/challenge-046/andrezgz/perl/ch-2.pl) loops, but instead of working with 1-based math, Andrezgz simply adds a dummy room #0 so the numbers line up:

```perl
my @rooms = (-1) x MAX; # all rooms are closed
unshift @rooms, 0;      # add room "0" for simplicity
foreach my $e (1 .. MAX) {
    foreach my $r ($e .. MAX) {
        $rooms[$r] *= -1 if ($r % $e == 0);
    }
}
print join ',', grep { $rooms[$_] == 1 } (1 .. MAX);;
```

Also of note is that instead of toggling between 1 and 0, Andrezgz multiplies by -1 so closed rooms are -1, and open rooms are 1.

## Athanasius {#athanasius2}

[Athanasius' solution](/challenge-046/athanasius/perl/ch-2.pl) uses constants for `$CLOSED` and `$OPEN`, as well as the room count:

```perl
use Const::Fast;
const my $CLOSED =>   0;
const my $OPEN   =>   1;
const my $ROOMS  => 500;
```

The looping here is optimal, thanks to the C-style inner loop skipping in
`$employee` intervals:

```perl
my @rooms = (-1, ($CLOSED) x $ROOMS);
for my $employee (1 .. $ROOMS) {
    for (my $door = $employee; $door <= $ROOMS; $door += $employee) {
        $rooms[$door] = ($rooms[$door] == $CLOSED ? $OPEN : $CLOSED);
    }
}
```

Printing out the results is a simple loop:

```perl
my @open = grep { $rooms[$_] == $OPEN } 1 .. $#rooms;
printf "There are %d rooms still open at the end (the square-numbered " .
       "rooms):\n%s\n", scalar @open,
        join ', ', map { sprintf '%3d', $_ } @open;
```


## Cheok-Yin Fung {#cheok-yin-fung2}

[Cheok-Yin Fung's solution](/challenge-046/cheok-yin-fung/perl/ch-2.pl) also loops optimally, using a Perlish `for` loop and multiplying by the employee interval, `$i`:

```perl
my @doors;
my $labor;
$doors[0] = 'true'; # main entrance
for my $i (1..500) {
    $doors[$i] = undef;
}
for my $i (1..250) {
    $labor = int(500/$i);
    for my $j (1..$labor) {
        $doors[$i*$j] = not($doors[$i*$j]);
    }
}
for my $i (251..500) {
    $doors[$i] = not($doors[$i]);
}
```

Cheok-Yin Fung uses `not` to invert the truth value of each door.


## Colin Crain {#colin-crain2}

[Colin Crain's solution](/challenge-046/colin-crain/perl/ch-2.pl) uses a nested loop:

```perl
my $SIZE = 500;
my @hotel = (0) x $SIZE;
for my $emp (1..$SIZE) {
    my @doors = map { $_ % $emp == 0 ? 1 : 0 } ( 1..$SIZE );
    for my $idx ( 0..$SIZE-1 ) {
        $hotel[$idx] = $hotel[$idx] ^ $doors[$idx];
    }
}
```

Colin makes a `@doors` array for every employee, which is essentially a vector of truth values, which he applies like a mask over `@hotel` to toggle the doors for the current employee.

This is the first use of the bitwise exclusive-or (`^`) operator we've seen, but it won't be the last. XORing a value with 1 is a common way to toggle a boolean value, especially in assembler and lower-level languages like C. However, it works just as well in Perl.


## Cristina Heredia {#cristian-heredia2}

[Cristina Heredia's solution](/challenge-046/cristian-heredia/perl/ch-2.pl) uses a nested loop as well:

```perl
#0 is closed
#1 is opened
foreach (my $i = 0; $i < $size; $i++) {
    @rooms[$i] = 0;
}
foreach (my $j = 0; $j < $size; $j++) {
    foreach (my $k = $j; $k < $size; $k = $j + $k +1) {
        #If closed
        if (@rooms[$k] == 0) {
            @rooms[$k] = 1;
        }
        else {
            @rooms[$k] = 0;
        }
    }
}
```

Cristina makes the optimization in the inner `foreach` loop to only look at every `$j`th door, so this is an efficient solution. The only thing I would change is using the `$` sigil to access individual elements, so `@rooms[$k]` would become `$rooms[$k]`.


## Dave Jacoby {#dave-jacoby2}

[Dave Jacoby's solution](/challenge-046/dave-jacoby/perl/ch-2.pl) uses a nested loop, as well as the 501-length array, so Dave can enjoy 1-based indicies:

```perl
my @doors = map { 1 } 0 .. 500;
for my $e ( 2 .. 500 ) {
    map { $doors[$_] = !$doors[$_] }
      grep { 0 == $_ % $e } 1 .. 500;
}
say join ' ', grep { $doors[$_] } 1 .. 500;
```

This is a nicely concise solution. Dave starts off by initializing all doors to be open and starting with employee #2, which saves one trip through the loop. After that, he uses `!` to toggle the individual doors.

## Duane Powell {#duane-powell2}

[Duane Powell's solution](/challenge-046/duane-powell/perl/ch-2.pl) uses nested loops, too:

```perl
my @room;
$room[$_] = CLOSED foreach(1 .. ROOM);
# Toggle doors up to nth $EMPLOYEE
foreach my $employee (1 .. $EMPLOYEE) {
    foreach my $room (1 .. ROOM) {
        if ( $room % $employee == 0) {
            $room[$room] = ($room[$room] == OPEN) ? CLOSED : OPEN;
        }
    }
}
```

However, what I find most interesting about Duane's solution is that while `ROOM` is always 500, the `$EMPLOYEE` variable is taken from the commandline, so it's possible to step through the solution, seeing the state of the doors after `$EMPLOYEE` employees have done their thing.

```perl
my $EMPLOYEE = shift || 500; # pass in $EMPLOYEE if you want to step thru the solution
use constant {
    ROOM     => 500,
    OPEN     => 0,
    CLOSED   => 1,
};
```


## Duncan C. White {#duncan-c-white2}

[Duncan C. White's solution](/challenge-046/duncan-c-white/perl/ch-2.pl)

```perl
# all rooms open initially [we don't use element 0]
my @roomopen = ( 0, (1) x $n );
say "naive answer:";
foreach my $empl (2..$n) {
    for( my $room=$empl; $room<=$n; $room+=$empl ) {
        $roomopen[$room] = 1-$roomopen[$room];
    }
}
my @open = grep { $roomopen[$_] } 0..$n;
say join(',', @open);
```

On seeing the results, Duncan then did some exploration to find out why only the perfect squares were output. He correctly realized that a door will be open if and only if the number of factors of the room number is odd, and wrote another solution to test that observation:

```perl
# ok, so a room no R is open at the end if the number of factors of R,
# including 1 and R, is ODD:
say "odd-factors answer:";
my @sq;
foreach my $r (1..$n) {
    my $odd = 1;
    foreach my $i (2..$r) {
        $odd = ! $odd if $r % $i == 0;
    }
    push @sq, $r if $odd;
}
say join(',', @sq);
```

In conclusion, he poses the following question:

```perl
say "but why are the squares the only numbers with an odd number of factors?";
```

This tells me Duncan has basically cracked the problem. The short answer to that question is that factors always come in pairs, and perfect squares have an odd number of factors because one factor (the square root) is multiplied by itself, but it's only counted once.

### PostScript

Duncan also submitted a solution in [PostScript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-046/duncan-c-white/postscript/ch-2.ps).

[Here is the output](http://www.ry.ca/wp-content/uploads/2020/02/duncan-c-white-046-2.pdf) with `ps2pdf`. Note that `-sPAPERSIZE=a4` was needed to avoid clipping.

## E. Choroba {#e-choroba2}

E. Choroba submitted [three solutions](/challenge-046/e-choroba/perl/). The first is a basic nested loop approach:

```perl
my $MAX = 500;
my @doors = (0) x $MAX;  # All closed.
for my $employee (0 .. $MAX - 1) {
    $doors[$_] = ! $doors[$_]
        for grep 0 == (1 + $_) % (1 + $employee), 0 .. $MAX - 1;
}
say join ' ', map 1 + $_, grep $doors[$_], 0 .. $MAX;
```

He then simplified that with the same observation Duncan just had about doors with odd numbers of divisors:

```perl
say join ' ', grep {
    my $door = $_;
    1 == (grep 0 == $door % $_, 1 .. 500) % 2
} 1 .. 500;
```

And finally, Choroba observed the perfect square pattern in the output and coded that up:

```perl
say join ' ', map $_ ** 2, 1 .. sqrt 500;
```

His blog also mentions a simple benchmark he did, showing the first solution took 6.5 seconds to run 200 times, the second took 5.4 seconds, and the third just 0.9 seconds.

**Blog** › [Cryptic Message & Is the Room Open?](http://blogs.perl.org/users/e_choroba/2020/02/perl-weekly-challenge-046-cryptic-message-is-the-room-open.html)

## Jaldhar H. Vyas {#jaldhar-h-vyas2}

[Jaldhar H. Vyas' solution](/challenge-046/jaldhar-h-vyas/perl/ch-2.pl) uses a nested loop:

```perl
my @rooms = (0) x 500;
my $end = scalar @rooms - 1;
for my $i (0 .. $end) {
    for my $j (0 .. $end) {
        if (($j + 1) % ($i + 1) == 0) {
            $rooms[$j] = ($rooms[$j]) ? 0 : 1;
        }
    }
}
```

The `(($j + 1) % ($i + 1) == 0)` conditional translates `$i` and `$j` to 1-based numbering, and then only toggles the room if the room (`$j`) is a multiple of the employee number (`$i`).


## Javier Luque {#javier-luque2}

[Javier Luque's solution](/challenge-046/javier-luque/perl/ch-2.pl) is another nested loop:

```perl
my @doors;
$doors[$_] = 0 for (0 .. 500);
for my $employee (1 .. 500) {
    for my $door ($employee .. 500 ) {
        next unless $door % $employee == 0;
        $doors[$door] = ($doors[$door]) ? 0 : 1;
    }
}
```

Javier tests the divisibility in the inner loop to determine if the `$employee` should open the current `$door`.

**Blog** › [046 – Perl Weekly Challenge](https://perlchallenges.wordpress.com/2020/02/04/perl-weekly-challenge-046/)

## Laurent Rosenfeld {#laurent-rosenfeld2}

[Laurent Rosenfeld's solution](/challenge-046/laurent-rosenfeld/perl/ch-2.pl) also uses nested loops, however Laurent uses a `while` inner loop and increments `$door` by `$start` (the employee number) for a more efficient solution:

```perl
use constant MAX => 50;
# 1 => open, 0 => closed
my @rooms = (1) x (MAX + 1); # (first employee)
my $start = 1;
for (2..MAX) {
    $start++;
    my $door = $start;
    while ($door <= MAX) {
        $rooms[$door] = $rooms[$door] ? 0 : 1;
        $door += $start;
    }
}
say join " ", @rooms[1..MAX];
```

Laurent's blog has some interesting analysis on the results, which is definitely worth a read:

**Blog** › [Garbled Message and Room Open](http://blogs.perl.org/users/laurent_r/2020/02/perl-weekly-challenge-46-garbled-message-and-room-open.html)

## Mohammad S Anwar {#mohammad-anwar2}

[Mohammad S Anwar's solution](/challenge-046/mohammad-anwar/perl/ch-2.pl) similarly uses an inner `while` loop so he can increase `$room_number` by the `$employee` number for a significant efficiency advantage:

```perl
my @rooms = map { 1 } (0..500);
foreach my $employee (2 .. 500) {
    my $room_number = $employee;
    while ($room_number <= 500) {
        $rooms[ $room_number ] = ($rooms [ $room_number ]) ? 0 : 1;
        $room_number += $employee;
    }
}
map { print "$_\n" if $rooms[$_] } (1..500);
```

## Peter Scott {#peter-scott}

[Peter Scott's solution](/challenge-046/peter-scott/perl/ch-2.sh) is a one-liner:

```sh
#!/bin/sh
perl -E '$N=shift; @R=(0)x$N; for $e (1..$N){ for ($r = $e; $r < $N; $r += $e ) { $R[$r-1] ^= 1 } } say for grep { $R[$_-1] } 1..$N' 500
```

`perltidy` sure does come in handy sometimes:

```perl
$N = shift;
@R = (0) x $N;
for $e ( 1 .. $N ) {
    for ( $r = $e ; $r < $N ; $r += $e ) {
        $R[ $r - 1 ] ^= 1
    }
}
say for grep { $R[ $_ - 1 ] } 1 .. $N
```

Peter uses a C-style `for` loop to check every `$e` doors, and also uses XOR (`^`) to toggle each door. He also maintains 0-based indexing throughout.

## Rage311 {#rage3112}

[Rage311's solution](/challenge-046/rage311/perl/ch-2.pl) uses nested loops:

```perl
my @rooms = (0) x 501;
for my $emp ( 1 .. 500 ) {
    for ( my $room = $emp ; $room <= 500 ; $room += $emp ) {
        $rooms[$room] ^= 1;
    }
}
say 'Open: ', join ',', grep { $rooms[$_] } 1..$#rooms;
```

The by now familiar inner C-style `for` loop and XOR toggle are shown here.

## Roger Bell West {#roger-bell-west2}

[Roger Bell West's solution](/challenge-046/roger-bell-west/perl/ch-2.pl) is similarly loopy:

```perl
my @rooms = (1) x 500;
foreach my $n ( 2 .. 500 ) {
    for ( my $k = $n - 1 ; $k < 500 ; $k += $n ) {
        $rooms[$k] = 1 - $rooms[$k];
    }
}
print map { $_ + 1, "\n" } grep { $rooms[$_] == 1 } ( 0 .. $#rooms );
```

Toggling a boolean with `$rooms[$k] = 1 - $rooms[$k]` is an old trick I remember using with 808x assembly programming a long time ago. Somehow this challenge turned into a "how many different ways can you toggle a boolean" challenge!

## Ruben Westerberg {#ruben-westerberg2}

[Ruben Westerberg's solution](/challenge-046/ruben-westerberg/perl/ch-2.pl) loops, with an inner `while` loop:

```perl
my @doors=(0) x 500;
$doors[$_]= $doors[$_]?0:1 for 0..499;
for my $i (2..500) {
    my $j=$i;
    while ($j <= 500) {
        $doors[$j-1]=$doors[$j-1]?0:1;
        $j+=$i;
    }
}
print @doors;
```

`print @doors` outputs a string of 500 1s and 0s, providing a more visual depiction of which doors are open and closed.

## Ryan Thompson {#ryan-thompson2}

[My solution](/challenge-046/ryan-thompson/perl/ch-2.pl) comes in two parts. First, simply printing the square numbers:

```perl
say join ' ', map { $_ * $_ } 1..int sqrt $doors;
```

Since the correctness of this method is perhaps not obvious, I also provide an informal correctness proof at the end of [my blog post](http://www.ry.ca/2020/02/500-doors/).

I also did a looping solution:

```perl
my %door;
for my $m (1..$doors) {
    $door{$m*$_} ^= 1 for 1..$doors/$m;
}
```

**Blog** › [PWC 046 › Is the Room Open? (500 Doors)](http://www.ry.ca/2020/02/500-doors/)

## Saif Ahmed {#saiftynet2}

[Saif Ahmed's solution](/challenge-046/saiftynet/perl/ch-2.pl) is also a two-parter. First, a looping solution:

```perl
my $doorCount=500;
my @doors=(0)x($doorCount+1);          # $doorCount+1 doors
foreach my $doorman (1..$#doors) {     # each of the employees
    my $n=1;                           # multiples starting with one
    while ($doorman*$n<=($doorCount)){ # and continuing until no more doors
                                       # toggles the door state (using 'not')
      $doors[$doorman*$n++]=not $doors[$doorman*$n];
    }
}
```

And then, Saif notices the square number pattern, providing the following brief justification and solution:

```perl
# The results are interesting. The door will only stay open if it has an
# odd number of factors. Factors of a number generally occur as pairs
# that multiply together to produce that number...so the only way to get a
# odd number of factors is when it possible for both the factors to be
# the same...i.e the number has to be a square number.
# the same results can therefore be obtained by:
my $cheat=1;
print " ".($cheat++)**2 while $cheat<sqrt($doorCount);
```

## Ulrich Rieke {#ulrich-rieke2}

[Ulrich Rieke's solution](/challenge-046/ulrich-rieke/perl/ch-2.pl) uses anonymous arrays to store the door number with its `open` or `closed` status:

```perl
my @doors;
for my $i ( 1 .. 500 ) {
    push( @doors, [ $i, "open" ] );
}
for my $i ( 2 .. 500 ) {
    if ( $i < 251 ) {
        for ( my $j = $i ; $j < 500 ; $j += $i ) {
            ${ $doors[ $j - 1 ] }[1] = flip( ${ $doors[ $j - 1 ] }[1] );
        }
    }
    else {
        ${ $doors[ $i - 1 ] }[1] = flip( ${ $doors[ $i - 1 ] }[1] );
    }
}
```

The conditional `if ( $i < 251 )` is unnecessary here. I believe Ulrich has recognized that employees 251..500 will only have to toggle a single door, so he made a special case for that, as an optimization. However, since he already has a C-style for loop that increments by `$i` every time, the special case can be removed. However, the inner loop's conditional must then read `$j <= 500`, so that door 500 is correctly toggled.

Ulrich also factored the door toggle to its own routine, `flip()`:

```perl
sub flip {
    my $state = shift;
    if ( $state eq "open" ) {
        return "closed";
    }
    else {
        return "open";
    }
}
```

### C++ and Haskell

Ulrich also submitted solutions in [C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-046/ulrich-rieke/cpp/ch-2.cpp) and [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-046/ulrich-rieke/haskell/ch-2.hs).

## User Person {#user-person2}

[User Person's solution](/challenge-046/user-person/perl/ch-2.pl) also has its own toggle routine:

```perl
sub change {
    return $_[0] eq "OPENED" ? "CLOSED" : "OPENED";
}
```

(Note again the use of string identifiers, removing any ambiguity about whether 0 or 1 means open.) The main nested loop is as follows:

```perl
push @doors, "CLOSED" foreach (0..$MAX);
ROOM:
for ( my $i = 1; $i <= $MAX; ++$i ) {
    if ($i > $MAX / 2 ) {
       $doors[$i] =  change $doors[$i];
       next ROOM;
   }
   for ( my $j = 1; $j <= $MAX; ++$j ) {
       if ($j % $i == 0) {
           $doors[$j] =  change $doors[$j];
       }
   }
}
```

User Person also has a conditional to save some looping for employees 251..500, but it does provide some savings in this case, because their inner loop (`$j`) increments by 1, instead of by the employee number.

### Bash and Python

User Person also submitted solutions in [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-046/user-person/bash/ch-2.bash) and [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-046/user-person/python/ch-2.py).

## Wanderdoc {#wanderdoc2}

[Wanderdoc's solution](/challenge-046/wanderdoc/perl/ch-2.pl) does a deep dive into the performance of the nested loop method versus a more analytical method using factors. But before we get into that, I want to highlight Wanderdoc's refreshingly creative way to avoid 0-based indicies:

```perl
unshift @hotel, 'Lobby'; # to make the array indices equal to room numbers.
```

Here is the looping method:

```perl
use constant {NUM => 500, OPEN => 1, SWITCH => -1};
my @hotel = (OPEN) x NUM;
unshift @hotel, 'Lobby';    # to make the array indices equal to room numbers.
for my $emp ( 2 .. NUM ) {
    @hotel[ grep $_ % $emp == 0, $emp .. NUM ] =
      map $_ * SWITCH, @hotel[ grep $_ % $emp == 0, $emp .. NUM ];
}
my @open = grep $hotel[$_] == OPEN, 1 .. NUM;
```

This is a fairly standard nested loop method, although you'll note the "inner loop" in this case is actually an array slice.

Wanderdoc's next method works by counting the unique factors for each door, and opens it if and only if the number of factors is even. (Noting, however, that they start checking for factors at 2, so 1 is not counted as a factor, here):

```perl
my @OPEN = (1);
for ( 2 .. NUM ) { push @OPEN, $_ if ( is_open($_) ); }

sub is_open {
    my $n       = $_[0];
    my $counter = 0;
    for my $k ( 2 .. $n ) {
        0 == $n % $k and $counter++;
    }
    return $n if $counter % 2 == 0;
}
print join(" ", @OPEN), $/;
```

***

***

## See Also {#blogs}

### Blogs this week:

**Laurent Rosenfeld** › [Garbled Message and Room Open](http://blogs.perl.org/users/laurent_r/2020/02/perl-weekly-challenge-46-garbled-message-and-room-open.html)

**Arne Sommer** › [The Cryptic Raku Room](https://raku-musings.com/cryptic-room.html)

**Javier Luque** › [046 – Perl Weekly Challenge](https://perlchallenges.wordpress.com/2020/02/04/perl-weekly-challenge-046/)

**E. Choroba** › [Cryptic Message & Is the Room Open?](http://blogs.perl.org/users/e_choroba/2020/02/perl-weekly-challenge-046-cryptic-message-is-the-room-open.html)

**Ryan Thompson** › [Cryptic Message](http://www.ry.ca/2020/02/cryptic-message/) | [Is the Room Open? (500 Doors)](http://www.ry.ca/2020/02/500-doors/)

**Luca Ferrari** › [Encoded messages and open rooms](https://fluca1978.github.io/2020/02/03/PerlWeeklyChallened_46.html)
