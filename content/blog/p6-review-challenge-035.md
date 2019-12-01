---
title: "Laurent Rosenfeld Weekly Review: Challenge - 035"
date: 2019-12-01T00:00:00+00:00
description: "Laurent Rosenfeld Weekly Review: Challenge - #035."
type: post
image: images/blog/p6-review-challenge-035.jpg
author: Laurent Rosenfeld
tags: ["Raku"]
---
***
# Raku Solutions Weekly Review
***

## Binary Encoded Morse Code

This is derived in part from my [blog post](http://blogs.perl.org/users/laurent_r/2019/11/perl-weekly-challenge-35-binary-encoded-morse-code.html) made in answer to the [Week 35 of the Perl Weekly Challenge](https://perlweeklychallenge.org/blog/perl-weekly-challenge-035/) organized by  <a href="http://blogs.perl.org/users/mohammad_s_anwar/">Mohammad S. Anwar</a> as well as answers made by others to the same challenge.

### The Challenge's two tasks

As usual, the challenge is made up of two tasks,  but this time, the two tasks are so much inter-related that I'll cover them together. Both tasks were contributed by Paul Johnson. The challenge reads as follows:

#### Task 1: Encode Test into Binary Encoded Morse Code

*Write a program to encode text into binary encoded morse code.*

*Pay attention to any changes which might need to be made to the text to make it valid morse code.*

*Morse code consists of dots, dashes and gaps. It can be encoded in binary in the following fashion:*
    dot: 1
    dash: 111
    intra-character gap: 0
    character gap: 000
    word gap: 0000000

*An intra-character gap is inserted between the dots and dashes in a character.*

#### Task # 2: Decode from Binary Encoded Morse Code

*Write a program to decode binary morse code.*

*Consider how it might be possible to recover from badly formed morse code.*

*1. by splitting the morse code on gaps*

*2. without looking further than one digit ahead*

### Comments applying to both tasks

The first thing we need is a table of Morse codes. This is a typical international Morse code table:

![alt text](./Figures/International_Morse_Code.PNG)

First, although I'm only reporting here on Raku programs, remember that I'm usually providing solutions for both Perl 5 and Raku challenges. I originally had thought of putting the Morse international code in the `__DATA__` section of the Perl 5 program, but that would have meant duplicating it in each program. An attractive alternative that I would probably have chosen if I were doing the challenge in only one language would have been to create a module exporting the Morse encoding data structure (probably a hash). But since I'm doing the challenge in two different languages, that would have meant writing two modules. I preferred to store the Morse code in a separate `morse.dat` CSV file that could be used for both tasks and both languages. The file I originally prepared was this:

    $ cat morse.dat
    0:_____
    1:.____
    2:..___
    3:...__
    4:...._
    5:.....
    6:_....
    7:__...
    8:___..
    9:____.
    A:._
    B:_...
    C:_._.
    D:_..
    E:.
    F:.._.
    G:__.
    H:....
    I:..
    J:.___
    K:_._
    L:._..
    M:__
    N:_.
    O:___
    P:.__.
    Q:__._
    R:._.
    S:...
    T:_
    U:.._
    V:..._
    W:.__
    X:_.._
    Y:_.__
    Z:__..

My next comment is that there is no distinction between upper and lower case letters in Morse code. So, since our `morse.dat` file is using upper case letters, we will fold all input data to uppercase. This has the obvious consequence that an encoding-decoding roundtrip will (at best) produce an uppercase result of the input data.

Then, task # 1 says to *pay attention to any changes which might need to be made to the text to make it valid morse code*. I'm not entirely sure of what this means, but I guess that means we have to make sure that our input data contains only uppercase alphabetic characters, digits, and spaces (quite obviously, Samuel Morse and Alfred Vail, the inventors of the Morse code, were not Unicode-aware (happy guys!), but that goes much further than that). So I originally decided to remove from the input any character not translatable into Morse, such as punctuation characters, etc., basically anything not belonging to the  `<[A-Z0-9 ]>` character class. However, I later extended the Morse alphabet to some punctuation symbols:

    .:._._._
    ,:__..__
    ?:..__..
    ':.____.
    !:_._.__
    ;:_._._.

Of course, if we add those six punctuation symbols to the conversion table, we also don't want to remove them from the input string, so that the code statement to remove non Morse letters will be changed to something like this:

``` Perl6
$input ~~ s:i:g/<-[A..Z0..9\s.,?'!;]>//; # remove non Morse characters
```

Task # 2 says we should try to recover from from badly formed Morse code. I'm sorry, but, IMHO, that's much too vague. I think that my solutions will be able to more or less recover from most small mistakes (at the expense of probably a typo in the output and/or a runtime warning), but there is just no way we will be able to make sense from random bytes. So, where do we draw the line? With our implementation, encoding errors will produce typos and warnings, but the result should still be readable if the number of encoding errors is not too high.

A final point: the word "binary" in the very first sentence of the challenge may be interpreted in at least two different ways. From the rest of the task description, I lazily took it to mean that we're supposed to generate strings made up of zeros and ones. It may also be understood that we should generate actual binary values, and several of the challengers bravely interpreted that way.

### My Solution

The program uses the file containing the Morse codes to populate a hash mapping directly ASCII characters to binary strings (strings made up of zeros and ones).

After this preliminary step, the hash contains an encoding table like this:

``` Perl6
0 => 1110111011101110111
1 => 10111011101110111
2 => 101011101110111
3 => 1010101110111
4 => 10101010111
5 => 101010101
6 => 11101010101
7 => 1110111010101
8 => 111011101110101
9 => 11101110111011101
'A' => 10111
'B' => 111010101
'C' => 11101011101
'D' => 1110101
'E' => 1
... Lines omitted for brevity ...
'X' => 11101010111
'Y' => 1110101110111
'Z' => 11101110101
```

So, we no longer care about dots and dashes, we now have a way to convert directly input letters into binary-encoded Morse values representing these letters.

We then use a `to_morse` subroutine to convert plain text into binary Morse, and a `from_morse` to do the conversion the other way around.

The `to_morse` subroutine will perform the following tasks:
- Fold the input string to uppercase, since Morse is case-insensitive;
- Remove from the input string any character not translatable into Morse (i.e. keep only alphanumerical characters plus spaces);
- Split the input string into words (i.e. split on spaces);
- Split each word into individual characters, translate each character into binary encoded Morse code, and reassemble the letters into words, with a `'000'`  separator between the characters;
- And finally join the words into a new string, with a `'0000000'` separator between the words.

The `from_morse` subroutine will need a lookup table to convert Morse encoded "letters" back into letters and digits of our alphabet. Given that the keys and values of the `%bin_morse` hash are unique, we can just create a new `%rev_bin_morse` hash by reverting `%bin_morse`. Then we need to:
- Split the input string into words (splitting on '0000000');
- Split each word into "letters" (splitting on '000'), use the reverse look-up table to find the letter in our alphabet, and join the letters to reconstruct the original words;
- And finally join the words into a string, with a space between the words.

The input string can be passed as a parameter to the string or, failing that, will use a default string ("The quick brown fox jumps over the lazy dog", whose only merit is that, while being relatively short, it contains all letters of the alphabet, so that it constitutes a relatively good test case).

Although this is not strictly necessary, we also format the encoded string with new lines inserted so that it can be nicely printed over 80 columns (but that code is only for enabling pretty printing, it doesn't change the value of its argument).

Since we're using both `to_morse` and `from_morse` subroutines, we can test a round trip: first encode the input string, and then decode the result, and check visually that the final result corresponds to the input (subject to non-alphabetical characters that may have been removed and to upper-case folding).

    use v6;

    sub MAIN ($input = "The quick brown fox jumps over the lazy dog") {
        my %bin_chars = '.' => 1, '_' => 111;
        my %*bin-morse = "morse.dat".IO.lines.map({
            my ($key, $val) = split ":", $_ ;
            my $bin_val = $val.comb.map({%bin_chars{$_}}).join('0');
            $key => $bin_val;
        });
        say "Input string: $input";
        my $encoded = to_morse $input;
        say "Binary encoded Morse string:";
        my $encoded-copy = $encoded;
        .Str.say for $encoded-copy ~~ s:g/(. ** 1..80)/$0\n/;
        say "Decoded string: ", from_morse $encoded;
    }
    sub to_morse ($input is copy) {
        $input ~~ s:i:g/<-[A..Z0..9\s.,?'!;]>//; # remove non Morse characters
        my @morse_words;
        for $input.uc.split(/\s/) -> $word {
            push @morse_words, join '000', map { %*bin-morse{$_} }, $word.comb;
        }
        return join '0000000', @morse_words;
    }
    sub from_morse ($input) {
        my %rev_bin-morse = reverse %*bin-morse.kv;
        my @words;
        for split /0 ** 7/, $input -> $word {
             push @words, join '', map {%rev_bin-morse{$_}}, split /000/, $word;
        }
        return join " ", @words;
    }

When given no argument, the script uses the default string and displays the following:

    $ perl6  morse.p6
    Input string: The quick brown fox jumps over the lazy dog
    Binary encoded Morse string:
    11100010101010001000000011101110101110001010111000101000111010111010001110101110
    00000011101010100010111010001110111011100010111011100011101000000010101110100011
    10111011100011101010111000000010111011101110001010111000111011100010111011101000
    10101000000011101110111000101010111000100010111010000000111000101010100010000000
    10111010100010111000111011101010001110101110111000000011101010001110111011100011
    1011101
    Decoded string: THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG

And given a string passed as an argument to the script, we get the following output:

    $ ./perl6  morse.p6  'Ask not what your country can do for you. Ask what you can do for your country.'
    Input string: Ask not what your country can do for you. Ask what you can do for your country.
    Binary encoded Morse string:
    10111000101010001110101110000000111010001110111011100011100000001011101110001010
    10100010111000111000000011101011101110001110111011100010101110001011101000000011
    (... Lines omitted for brevity ...)
    11101110111000101011100010111010000000111010111010001110111011100010101110001110
    10001110001011101000111010111011100010111010111010111
    Decoded string: ASK NOT WHAT YOUR COUNTRY CAN DO FOR YOU. ASK WHAT YOU CAN DO FOR YOUR COUNTRY.

## Alternative Solutions

[Arne Sommers](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-035/arne-sommer/perl6/ch-1.p6) first created a [BinaryMorse2](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-035/arne-sommer/perl6/lib/BinaryMorse2.pm6) module providing a `%morse` letter-to-Morse translation table and a `%remorse` Morse-to-letter translation table (he used the built-in `antipair` function for creating the latter, which is probably better than the way I did it with `reverse`, because I copied it from my Perl 5 code without thinking too much about it). Arne's module also creates a lookup table mapping ASCII letters to binary-encoded Morse code and provides two subroutines, `morsify` (to turn plain test into binary encoded Morse code) and `demorsify` (to do the opposite), and it is probably more interesting to quote these, rather than the main code of his program:

``` Perl6
my %binary-morse;
for %morse.kv -> $char, $value
{
  %binary-morse{$char} = $value.comb.map({ $_ eq '.' ?? '1' !! '111' }).join('0');
}

our sub morsify (Str $text)
{
  my @words;

  for $text.split(/\s+/) -> $word
  {
    my @new-word;
    for $word.comb -> $character
    {
      @new-word.push(%binary-morse{$character} // %binary-morse{$character.uc} // %binary-morse{unknown} );
    }
    @words.push(@new-word.join('000'));
  }

  return @words.join("0000000");
}

subset BinaryMorse of Str where * ~~ /^<[01]>*$/;

our sub demorsify (BinaryMorse $text)
{
  my @words;

  for $text.split("0000000") -> $word
  {
    my $new-word = "";
    for $word.split("000") -> $character
    {
      $new-word ~= %binary-remorse{$character} //unknown;
    }
    @words.push($new-word);
  }
  return @words.join(" ");
}
```

[Daniel Mita](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-035/daniel-mita/perl6/ch-1.p6) also created a module, called [Morse](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-035/daniel-mita/perl6/Morse.pm6). His module is object-oriented and includes a grammar to decode binary-encoded Morse code. His translation table converts ASCII characters directly to binary numbers:

``` Perl6
my constant %values = (
    :A(0b10111),         :B(0b111010101),
    :C(0b11101011101),   :D(0b1110101),
    :E(0b1),             :F(0b101011101),
    :G(0b111011101),     :H(0b1010101),
    [... lines omitted for brevity ...]
    :W(0b101110111),     :X(0b11101010111),
    :Y(0b1110101110111), :Z(0b11101110101),
    1 => 0b10111011101110111,
    2 => 0b101011101110111,
    3 => 0b1010101110111,
    4 => 0b10101010111,
    5 => 0b101010101,
    [... lines omitted for brevity ...]
    ｢-｣ => 0b111010101010111,
    ｢_｣ => 0b10101110111010111,
    ｢"｣ => 0b101110101011101, #"
    ｢$｣ => 0b10101011101010111,
    ｢@｣ => 0b10111011101011101,
  );
```

The `%chars` reverse translation table is built using the built-in `antipairs` routine. With this translation table, encoding to binary-encoded Morse is relatively easy, so we will rather quote the decoding part, which is much more interesting:

``` Perl6
 grammar Decode {
    token TOP  { <word>+ % '0' ** 7 }
    token word { <char>+ % '000' }
    token char { <mark>+ % '0' }
    proto token mark {*}
          token mark:sym<dot>  { '1' }
          token mark:sym<dash> { '111' }
  }

  class Decoder {
    method TOP ($/) {
      make $<word>.map(*.made).join(' ');
    }

    method word ($/) {
      make $<char>.map(*.made).join;
    }

    method char ($/) {
      make %chars{ $/.Str.parse-base(2) }
        or X::Morse::UnknownCharacter.new(
          :payload( $<mark>.map(*.made).join ~ ' | ' ~ $/ )
        ).throw;
    }

    method mark:sym<dot>  ($/) { make '.' }
    method mark:sym<dash> ($/) { make '-' }
  }

  #| Decode binary morse code
  sub decode (
    Str $bits where *.comb(/\S/).all eq 1|0, #= A string containing a sequence of 1s and 0s
    --> Str
  ) is export {
    .return with Decode.parse(
      $bits.trans( /\s+/ => '' ),
      :actions(Decoder.new)
    ).made;
    X::Morse::InvalidSequence.new.throw;
  }
```

[Kevin Colyer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-035/kevin-colyer/perl6/ch-1.p6) created a nice Morse translation table that came as a surprise to me:

``` Perl6
my %morse =
    'A' =>  '•−',
    'B' =>  '−•••',
    'C' =>  '−•−•',
    'D' =>  '−••',
    'E' =>  '•',
    'F' =>  '••−•',
    'G' =>  '−−•',
    'H' =>  '••••',
    'I' =>  '••',
    'J' =>  '•−−−',
    'K' =>  '−•−',
    [ ... Lines omitted for brevity ... ]
    '"' =>  '•−••−•',
    '@' =>  '•−−•−•',
    '=' =>  '−•••−',
;
```

This is Kevin's encoding subroutine:

``` Perl6
sub encodeBinaryMorse($text is copy, :$visualise=False) {
    $text=filterMorseInput($text);
    my Str $bm = '';
    my Str $last='';
    for $text.comb -> $a {
        if $a eq ' ' { $bm ~=WG; $last = $a; next }; # Word gap
        my $dd=%morse{$a};
        my Str $j = '';
        $bm ~= CG if $last !eq ' ' and $bm.chars > 0 ; # character gap
        # encode a single char
        for $dd.comb -> $i {
            $j ~= ICG if $j.chars>0 ; # intercharacter gap
            $j ~= $i eq "•" ?? DOT !! DASH ;
        };
        $bm ~= $j;
        $last=$a;
    }
    return $visualise ?? $bm !! $bm.trans([" ","\n","_"] => '');
}

sub filterMorseInput ($text) {
    # upper case and remove non-morse chars.
    return $text.uc.trans([%morse.keys," "] => '', :complement);
}
```

[Mark Senn](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-035/mark-senn/perl6/ch-1.p6) constructed his translation table as follows (notice the spaces between dots and dashes that are later converted to intra-character gaps):

``` Perl6
my %plain2cipher =
    a => '. -',          b => '- . . .',      c => '- . - .',
    d => '- . .',        e => '.',            f => '. . - .',
    g => '- - .',        h => '. . . .',      i => '. .',
    [... Lines omitted for breevity... ]
    8 => '- - - . .',    9 => '- - - - .',    0 => '- - - - -';

# Replace %plain2cipher values with corresponding binary values.
for %plain2cipher.values -> $_ is rw  {
    s:g/'.'/1/;    # dot
    s:g/'-'/111/;  # dash
    s:g/' '/0/;    # intra-character gap
}
```

He then used the `invert` function to generate the `%cipher2plain` reverse lookup table. This is Mark's code for decoding a binary-coded Morse code:

```Perl6
$_ = $ciphertext;
$plaintext = '';
my @word = .split(/0000000/);  # word gap
loop (my $i = 0;  $i < @word.elems;  $i++)  {
    $_ = @word[$i];
    my @char = .split(/000/);  # character gap
    for (@char)  {
        $plaintext ~= %cipher2plain{$_};
    }
    ($i < @word.elems - 1)  and  $plaintext ~= ' ';
}
"plaintext:  $plaintext".say;
```

[Simon Proctor](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-035/simon-proctor/perl6/ch-1.p6) hard-coded his translation table from ASCII letters to binary-encoded Morse codes:

```Perl6
constant %MORSE-MAP = (
    A => '10111',         B => '111010101',     C => '11101011101',    D => '1110101',
    E => '1',             F => '101011101',     G => '111011101',      H => '1010101',
    I => '101',           J => '1011101110111', K => '111010111',      L => '101110101',
    [ ... Lines omitted for brevity ...]
    Y => '1110101110111', Z => '11101110101',   ' ' => '0'
);
```
Simon's code for encoding plain text is quite concise and goes as follows:

``` Perl6
my $input = $*IN.slurp.chomp.uc;
die "A-Z AND SPACES ONLY STOP PLEASE TRY AGAIN STOP" unless $input ~~ m!^ <[A..Z \  \n \t]>+ $!;

my $bin-morse = $input.comb().map( { $_.subst( /\n|\t/, " " ) } ).map( { %MORSE-MAP{$_} } ).join('000');
$bin-morse = "{'0' x 7 - ( $bin-morse.codes % 7 ) }{$bin-morse}";
my @stream = $bin-morse.comb(/. ** {7}/).map( *.parse-base(2) );
print Blob.new(@stream).decode("ascii");
```

And this is his code pipeline for decoding binary-encoded Morse code:

``` Perl6
    say $*IN
    .slurp(:bin)
    .decode("ascii")
    .comb()
    .map( *.ord )
    .map( *.base(2) )
    .map( *.fmt( "%07s" ) )
    .join("")
    .subst( /^0+/, "" )
    .split("0000000")
    .map( *.split("000").map( { %REVERSE-MORSE-MAP{$_} } ).join("") ).join(" ")
    ;
```

[Jaldhar H. Vyas](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-035/jaldhar-h-vyas/perl6/ch-1.p6) also hard-coded his translation table from ASCII letters to binary-encoded Morse strings:

``` Perl6
my %to_morse = (
    'A' => '10111',
    'B' => '111010101',
    'C' => '11101011101',
    'D' => '1110101',
    'E' => '1',
    'F' => '101011101',
    [ ... Lines omitted for brevity}
    '9' => '11101110111011101',
    '0' => '1110111011101110111',
);
```

Jaldhar's subroutine for encoding is as follows:

``` Perl6
sub morse_encode(Str $message) {
    my @words = split /\W/, $message;
    for @words <-> $word {
        my @chars = $word.comb;
        for @chars <-> $c {
            if %to_morse{uc $c}:exists {
                $c = %to_morse{uc $c};
            }
        }
        $word = @chars.join($CHARACTER_GAP);
    }
    return @words.join($WORD_GAP);
}
```

And his decoding subroutine is like so:

``` Perl6
sub morse_decode(Str $message) {

    my @words = $message.split($WORD_GAP);
    for @words <-> $word {
        my @chars = $word.split($CHARACTER_GAP);
        for @chars <-> $c {
            if %from_morse{$c}:exists {
                $c = %from_morse{$c};
            }
        }
        $word = @chars.join;
    }
    return @words.join(q{ });
}
```

[Javier Luque](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-035/javier-luque/perl6/ch-1.p6) also used a hard-coded lookup table that he apparently created with a Perl 5 script in the course of solving the task in P5:

``` Perl6
# I generated this lookup table using a modified perl5 script
my %morse = (
'!' => '1010111011101',     "'" => '1011101110111011101',
'+' => '1011101011101',     ',' => '1110111010101110111',
'-' => '111010101010111',   '.' => '10111010111010111',
'/' => '1110101010111',     '0' => '1110111011101110111',
'1' => '10111011101110111', '2' => '101011101110111',
[ ... Lines omitted for brevity ...]
'W' => '101110111',         'X' => '11101010111',
'Y' => '1110101110111',     'Z' => '11101110101',
);
```

Encoding a plain text message into binary-encoded Morse code is done as follows:

``` Perl6
    my @words = $message.split(rx{\s+});
    for (0 .. @words.end) -> $i {
        # Split characters
        my @chars = @words[$i].comb;

        for (0 .. @chars.end) -> $j {
            # Translate the character
            $encoded_message ~= %morse{@chars[$j].uc};

            # Add the character gap
            $encoded_message ~= $char_gap
                unless ($j == @chars.end);
        }
        # Add the word gap
        $encoded_message ~= $word_gap
            unless ($i == (@words.end));
    }
```

And this is Javier's loop for decoding:

``` Perl6
    my @words = $message.split($word_gap);
    for (0 .. @words - 1) -> $i {
        # Split characters
        my @chars = @words[$i].split($char_gap);

        for (0 .. @chars - 1) -> $j {
            # Translate the character
            $decoded_message ~= %morse{@chars[$j]};
        }

        # Add the word gap
        $decoded_message ~= ' '
            unless ($i == (@words - 1));
    }
```

[Roger Bell West](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-035/roger-bell-west/perl6/ch-1.p6) created a `%t` hash mapping ASCII letters to dots and dashes:

``` Perl6
my %t=(
  E => '.',
  I => '..',
  S => '...',
  H => '....',
  5 => '.....',
  4 => '...._',
  V => '..._',
  [ ... Lines omitted for brevity ...]
  9 => '____.',
  0 => '_____',
);
```

And used it to created a `%e` lookup table mapping ASCII letters to binary-encoded Morse codes:

``` Perl6
my %e;
for keys %t -> $char {
  %e{$char}=join('0',map {{'.' => '1',
                           '_' => '111'}.{$_}},
                     grep /./,
                     split '',%t{$char});
}
```

His encoding code then goes as follows:

``` Perl6
my @in;
for lines() {
  .chomp;
  my $t=uc($_);
  $t ~~ s:g/[^ $chars]//;
  push @in,$t;
}

my $m=join(' ',@in);

my @l;
for grep /./,split ' ',$m -> $word {
  my @w;
  for grep /./,split '',$word -> $char {
    push @w,%e{$char};
  }
  push @l,join('000',@w);
}
print join('0000000',@l),"\n";
```

[Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-035/ruben-westerberg/perl6/ch-1.p6) constructed his lookup table as follows:

``` Perl6
my %forwardTable=map { (.key=> join("0",comb "",.value))}, (
    a=>".-",
    b=>"-...",
    c=>"-.-.",
    d=>"-..",
    e=>".",
    [ ... Lines omitted for brevity  ...]
    9=>"----.",
    0=>"-----",
    " "=>""
);
```

His encoding subroutine uses a `for ... when` construct (remember that `when` needs `$_` to be populated with the value being tested, `for` can do that as well as `given`):

``` Perl6
sub encode ($in) {

    my @codes=map { |($_,"000") },  %forwardTable{$in.comb("")};
    @codes.pop;
    my $out="";
    for (map { |(comb "", $_)}, @codes) {
        when /\./ {
            $out~="1";
        }
        when /\-/ {
            $out~="111";
        }
        when /0/ {
            $out~="0";
        }
        default {
        }
    }
    $out;
}
```

### SEE ALSO

Three blog posts this time:

* Arne Sommer: https://raku-musings.com/morse-remorse.html;

* Jaldhar H. Vyas: https://www.braincells.com/perl/2019/11/perl_weekly_challenge_week_35.html

* Javier Luque: https://perlchallenges.wordpress.com/2019/11/18/perl-weekly-challenge-035/

### Wrapping up

Please let me know if I forgot any of the challengers or if you think my explanation of your code misses something important (send me an e-mail or just raise an issue against this GitHub page).
