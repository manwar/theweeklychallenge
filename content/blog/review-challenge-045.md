---
author: "Ryan Thompson"
date: 2020-02-06T21:50:43
description: "Ryan Thompson › Perl Weekly Review: Challenge - #045"
tags: ["perl"]
title: "Ryan Thompson › Perl Weekly Review: Challenge - #045"
type: post
---

Welcome to the Perl review for Week 045 of the Weekly Challenge! For a quick overview, go through the [original tasks](/blog/perl-weekly-challenge-045/) and [recap](/blog/recap-challenge-045/) of the weekly challenge.

Continues from [previous week](/blog/review-challenge-044/).

## Getting in Touch

<a href="mailto:rjt@cpan.org"><img src="http://ry.ca/misc/Email.svg" height="50" width="50"> Email</a> › Email me (Ryan) with any feedback about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="http://ry.ca/misc/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="http://ry.ca/misc/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

We'd greatly appreciate any feedback you'd like to give.

## Table of Contents

 * [Task 1](#task1)
 * [Task 2](#task2)
 * [Blogs](#blogs)


***
***

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

There seem to be two main ways people approached this task:

### 1. Partitioning

By first splitting the plaintext into column-width substrings, you end up with **Figure 1** (above). From there, you can simply append the first character of each string to your output, then the second character, and so on.

This method is perhaps the most obvious implementation of the problem description, as it follows the wording quite closely.

### 2. `split` and Modulo Arithmetic

For this method, you first `split` the plaintext into a list of chars. Then, you loop over the plaintext array, appending each character into its `$index % $columns` string in an array of `@columns`. Finally, you simply `join` the columns together.

This method is maybe a little less obvious, but lead to some concise solutions.

***

If my plain English descriptions don't make complete sense yet, don't worry; there will be plenty of code examples of both methods below. 

## Adam Russell

[Adam Russell's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/adam-russell/perl/ch-1.pl) uses the `split` and modulo arithmetic method. He iterates over `@characters` to `push` characters into the array of arrays, `@buckets`:

```perl
use constant SQUARE_SIZE => 8;
sub encode{
    my($message) = @_;
    $message =~ tr/ //d;
    my $encoded;
    my @buckets;
    my @characters = split(//, lc($message));
    for my $i (0 .. @characters){
       $buckets[$i % SQUARE_SIZE] = [] if !$buckets[$i % SQUARE_SIZE];
       push @{$buckets[$i % SQUARE_SIZE]}, $characters[$i] if $characters[$i];  
    } 
    for my $bucket (@buckets){
        $encoded .= join("", @{$bucket}) . " ";
    }  
    return $encoded; 
}
```

The solution is then built up by joining each of the `@buckets` together, and appending the result to the `$encoded` output string, with the space to separate the columns.

**Blog** › [Perl Fun](https://adamcrussell.livejournal.com/15213.html)

## Alicia Bielsa

[Alicia Bielsa's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/alicia-bielsa/perl/ch-1.pl) has an input loop that asks the user for a plaintext message. Her `encodeMessage` function uses the `split` and modulo method to encode the message:

```perl
sub encodeMessage {
    my $message = shift;
    my @aSubMessages = ();
    my $messageEncoded = '';
    $message =~ s%\s+%%g;
    my @aEncodedGroups = ();
    my @aMessage = split ('', $message);
    foreach my $indexMessage  (0..$#aMessage) {
        my $indexSubgroup = $indexMessage % $columnLength ;
        unless  (defined $aEncodedGroups[$indexSubgroup]) {
            $aEncodedGroups[$indexSubgroup] = '';
        }
        $aEncodedGroups[$indexSubgroup] .= $aMessage[$indexMessage]; #t
    }
    $messageEncoded = join(' ', @aEncodedGroups);
    return $messageEncoded ;
}
```

The `$indexSubgroup = $indexMessage % $columnLength` line is what sets up the proper index, so that the next character in `@aMessage` is appended to the correct column in `@aEncodedGroups`.

Also notable, is that Alicia is one of a few people who allows for a configurable column width, through the `$columnLength` variable, which is a thoughtful touch.

## Andrezgz

[Andrezgz's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/andrezgz/perl/ch-1.pl) first converts the input to lowercase, and then filters out any remaining non-lowercase characters (such as numerics, symbols, and spaces):

```perl
my $msg = join '',
          map {my $w = lc $_; $w =~ s/[[:^lower:]]//g; $w }
          @ARGV or die "USAGE: $0 <message>";
```

After that, the solution is built up in a `%cols` hash with modulo arithmetic, with one member for each column:

```perl
my %cols;
# each letter is appended to the corresponding column
$cols{$_ % 8} .= substr $msg, $_, 1 for (0 .. (length $msg) -1 );

# coded message is formed by printing each column string in order
print join ' ', map { $cols{$_} } sort keys %cols;
```

This is a really clean solution, and I particularly like the decision to filter out characters based on what is *allowed,* instead of what isn't. When possible, this method typically leads to safer, less error-prone code, as the programmer doesn't have to account for every possible thing a user might throw at them.

## Arne Sommer

Arne has submitted excellent Raku solutions for *all* 45 weeks in the challenge so far, which is absolutely fantastic. But this is, I believe, the first week Arne has submitted a Perl solution since all the way back in Week 023. Welcome back!

[Arne Sommer's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/arne-sommer/perl/ch-1.pl) is straightforward:

```perl
my $string = $ARGV[0] || "The quick brown fox jumps over the lazy dog";
$string =~ tr/ //d;
my @a = split(//, lc $string);

@a.shift;
@a.pop;

for my $word (0 .. 7) {
  my $index = $word;
  while (1) {
    defined $a[$index]
      ? print $a[$index]
      : print(" ") && last;

   $index += 8;
  }
}
print "\n";
```

One minor issue, is that the `@a.shift;` and `@a.pop;` lines aren't necessary, and in fact, these statements do nothing except some string concatenation in void context (which would have thrown a warning with `use warnings` enabled). On reading his blog, Arne was getting extra characters somehow, but that appears to no longer be the case, as this solution works perfectly. It's also very easy to understand.

Again, I'm very glad to see Arne submitting Perl solutions, and hope to see more in the future! If you haven't already been following his blog, please do so; it's excellent.

**Blog** › [Square Dumper with Raku](https://raku-musings.com/square-dumper.html)

## Athanasius

[Athanasius's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/athanasius/perl/ch-1.pl) also has an input loop, and the encoder uses the partitioning method:

```perl
sub encode {
    my  ($plain)  = @_;
    my   @rows;
    push @rows, substr($plain, 0, $COLUMNS, '') while $plain;
    my   $encoded = '';

    for my $col (0 .. $COLUMNS - 1) {
        $encoded .= ' ' if $encoded;

        for my $row (0 .. $#rows) {
            my $text  = $rows[$row];
            $encoded .= substr($text, $col, 1) if $col < length $text;
        }
    }

    return $encoded;
}
```

As you can see, `@rows` is built up by partitioning `$plain` into chunks of up to `$COLUMN` characters. (The fourth argument to `substr` (`''`) is the replacement text, so those chunks get removed during the loop). The next two nested loops build up `$encoded` character by character from the strings in `@rows`.

Athanasius wrote a decoder as well:

```perl
sub decode {
    my ($encoded) = @_;
    my  @rows     = split /\s+/, $encoded;
    my  $decoded  = '';

    for my $col (0 .. length($rows[0]) - 1) {
        $decoded .= substr($rows[$_], $col, 1) for 0 .. $#rows;
    }

    return $decoded;
}
```

The decoder is a little simpler as Athanasius was able to take advantage of the encoded format having spaces separating the rows, but the meat of the function is similar: the nested loops are essentially doing the inverse of what `encode` did, above.

## Burkhard Nickels

[Burkhard Nickels' solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/burkhard-nickels/perl/ch-1.pl) first `split`s the plaintext into a character array, `@l`. Then, Burkhard uses a nested loop that builds up the result (`$coded_msg`) by calculating the array indicies:

```perl
$msg =~ s/\s//g;
$msg = lc($msg);
my @l = split("",$msg);

my $coded_msg;
for(my $i=0; $i<=7; $i++) {
    for(my $j=$i; $j<=$#l; $j+=8) {
        $coded_msg .= $l[$j];
    }
    $coded_msg .= " ";
}
print "Coded   : $coded_msg\n";
```

The C-style `for` loops allow Burkhard to manipulate the starting index and increment of the inner loop, so `$j` will always be the next index to be appended to the result.

### Python

Burkhard also submitted a [Python solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/burkhard-nickels/python/ch-1.py). Here's the encoder:

```python
msg = re.sub('\s','',msg)
msg = msg.lower()
l = list(msg)

coded_msg = ""
for i in range(0,8):
    j = i
    e = len(l)
    while j < e:
        coded_msg += l[j]
        j += 8
    coded_msg += " "

print "Coded   : ", coded_msg
```

The Python code uses the same algorithm as the above Perl solution.

**Blog** › [Square Secret Code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/burkhard-nickels/perl/ch-1.pod)

## Cheok-Yin Fung

[Cheok-Yin Fung's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/cheok-yin-fung/perl/ch-1.pl) decomposes the problem into three distinct parts. First, the plaintext is sanitized, and padded to be a multiple of 8 characters:

```perl
$msg = lc($msg);
$msg =~ s/\s//g; # &removespace($_);
$msg =~ s/\t//g;

#ADD WHITESPACE AT THE END SUCH THAT THE LINE HAS 8n CHARACTERS
my $copyoflengthofmsg = length($msg);
$msg .= " " x ($copyoflengthofmsg % 8);
```

Second, the plaintext is split into characters, and put into a two-dimensional array. `$i` and `$j` are maintained such that `@a` will have the characters in the same type of grid shown in the challenge description:

```perl
my $numberofcols = 8;

foreach my $char (split //, $msg) {
    $a[$i][$j] = $char;
        $copyoflengthofmsg++;
    $j++;
    if ($j==$numberofcols) {$j = 0; $i++;}
}
```

Finally, Cheok-Yin Fung iterates over the `@a` grid to print out the solution:

```perl
for $j (0..$numberofcols) {
    for $i (0..7) {
        $b[$p] = $a[$i][$j];
        if ($b[$p] ne " ") {print $b[$p];}
        $p++;
    }
    print " ";
}
```

## Colin Crain

[Colin Crain's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/colin-crain/perl/ch-1.pl) `split`s and uses modulo arithmetic:

```perl
## eliminate spaces and nonword chars, lowercase rest in one pass
$input = lc( join '', grep { /\w/ } split //, $input );

## create the output array data structure
push my @output, [] for (1..8);

## fill the output arrays
push $output[$_%8]->@*, substr $input, ($_), 1  for (0..(length $input) - 1);

## display the output arrays
say join ' ', map {join '', $_->@* } @output;
```

This is an example of a good way to use the [post-deref](https://perldoc.perl.org/perlref.html#Postfix-Dereference-Syntax) syntax, in my opinion; it actually aids the comprehension in this case. Colin's solution is compact, without being hard to follow.

## Dave Cross

[Dave Cross' solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/dave-cross/perl/ch-1.pl) outputs the result in the loop body, rather than building up a string first, but the result is the same:

```perl
$msg =~ s/\s+//g;

my @lines = map { [ split // ] } $msg =~ /(.{1,8})/g;

for my $x (0 .. $#{$lines[0]}) {
  for my $y (0 .. $#lines) {
    print $lines[$y][$x] // '';
  }
  print ' ';
}

print "\n";
```

Dave partitions `$msg` into 8 character (or less) chunks with a `/g` regex in list context, so it can be sent straight to `map`, where it is then split into characters and stored in an array of arrays.

## Dave Jacoby

[Dave Jacoby's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/dave-jacoby/perl/ch-1.pl) first filters out any non-lowercase characters, and then starts partitioning `$plaintext` into chunks of 8 characters or less, using `substr` and regexp substitution:

```perl
sub encypher ( $plaintext ) {
    $plaintext = lc $plaintext;
    $plaintext =~ s/[^a-z]//gmx;
    my @work;

    while ( length $plaintext >= 8 ) {
        my $eight = substr $plaintext, 0, 8;
        $plaintext =~ s/\w{8}//mix;
        push @work, $eight;
    }
    push @work, $plaintext;

    my @cyphertext;

    for my $i ( 0 .. scalar @work - 1 ) {
        my $word = $work[$i];
        for my $j ( 0 .. length $word ) {
            my $letter = substr $word, $j, 1;
            next unless scalar $letter;
            $cyphertext[$j][$i] = $letter;
        }
    }

    return join ' ', map { join '', $_->@* } @cyphertext;
}
```

After that, `@cyphertext` is a two-dimensional array (array of arrays, or AoA) built up with a by now familiar-looking nested loop. The `return` is made by sending each top-level element of `@cyphertext` through `map { join '', $_->@* }` to turn the array into a string, and then those strings are `join`ed by the leftmost `join ' '`.

**Blog** › [Challenge 45: Cyphers and Quines](https://jacoby.github.io/2020/01/29/challenge-45-cyphers-and-quines.html)


## Duane Powell

[Duane Powell's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/duane-powell/perl/ch-1.pl) is concise and clear:

```perl
$code =~ s/ //g;
my @code = split(//,$code);

my @out;
my $m = 0;
$out[$m++ % $block] .= shift(@code) while (@code);
print "$_ " foreach (@out);
print "\n";
```

The line doing the heavy lifting, `$out[$m++ % $block] .= shift(@code) while (@code)` is another good example of how modulo arithmetic really makes light work of this problem.


## Duncan C. White

[Duncan C. White's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/duncan-c-white/perl/ch-1.pl) provides both an encoder and decoder, as well as a way to change the number of columns. The encoder uses the modulo arithmetic method, but replaces the `split` with repeated calls to `substr $text, $pos, 1` to get one character at a time:

```perl
use Function::Parameters;

fun encode( $text )
{
    my @columns;
    $text =~ s/\s+//g;        # remove all whitespace
    my $len = length($text);
    foreach my $pos (0..$len-1) {
        my $ch = substr($text,$pos,1);
        $columns[$pos%$ncolumns] //= "";
        $columns[$pos%$ncolumns] .= $ch;
    }
    my $result = join( ' ', @columns );
    return $result;
}
```

The decoder splits the ciphertext on whitespace to obtain `@columns`. After that is a nested loop, whose body uses `s/(^\w)//` to trim (and capture) the first character from one of the `@columns`, appending it to the result:

```perl
fun decode( $text )
{
    my @columns = split( /\s+/, $text );
    my $ncols = @columns;
    die "decode: $text has $ncols columns, not $ncolumns\n"
        unless $ncols == $ncolumns;
    my $npasses = length( $columns[0] );
    my $result = "";
    foreach my $p (1..$npasses) {
        foreach (@columns) {
            if( $_ ) {
                s/(^\w)//;    # remove 1st char from column
                $result .= $1;
            }
        }
    }
    return $result;
}
```

## E. Choroba

[E. Choroba's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/e-choroba/perl/ch-1.pl):

```perl
sub square_secret_code {
    my ($message) = @_;
    my @code = ("") x 8;
    for my $group (lc($message) =~ s/\s//gr =~ m/(.{1,8})/g) {
        $code[$_] .= (split //, $group)[$_] // "" for 0 .. 7;
    }
    return join ' ', @code
}
```

This solution is another example of using the `/g` modifier in list context. However, Choroba does one better and first removes spaces with the substitution `s/\s//gr`. The `/r` modifier is a personal favourite of mine, as instead of performing the substitution in place as usual, it returns a copy of the (modified) string instead. Without that, Choroba would have needed an extra couple of lines of code.

**Blog** › [Perl Weekly Challenge 045: Square Secret Code & Source Dumper](http://blogs.perl.org/users/e_choroba/2020/01/perl-weekly-challenge-045-square-secret-code-source-dumper.html)

## Jaldhar H. Vyas

[Jaldhar H. Vyas' solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/jaldhar-h-vyas/perl/ch-1.pl) chunks the plaintext into `@rows` of 8 characters, and then uses a nested loop to append the `$i`th character from each row to the `$i`th column. The solution is then just `@cols`, separated by spaces:

```perl
my $input = lc join q{ }, @ARGV;
$input =~ s/\s+//gmx;
my @rows;
while (length $input) {
    push @rows, substr $input, 0, 8, q{};
}

my @cols;
for my $row (@rows) {
    my @chars = split //, $row;
    for my $i (0 .. 7) {
        if ($chars[$i]) {
            $cols[$i] .= $chars[$i];
        }
    }
}

say join q{ }, @cols;
```

**Blog** › [Perl Weekly Challenge: Week 45](https://www.braincells.com/perl/2020/02/perl_weekly_challenge_week_45.html)

## Javier Luque

[Javier Luque's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/javier-luque/perl/ch-1.pl) is another concise one with modulo arithmetic:

```perl
$string =~ s/\s//g;
my @chars = split('', $string);
my @new_words;

for my $i (0..scalar(@chars)-1) {
    $new_words[$i % 8] .= $chars[$i];
}

say join ' ', @new_words;
```

**Blog** › [PERL WEEKLY CHALLENGE – 045 – Perl Weekly Challenge](https://perlchallenges.wordpress.com/2020/01/30/perl-weekly-challenge-045/)

## Laurent Rosenfeld

[Laurent Rosenfeld's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/laurent-rosenfeld/perl/ch-1.pl) uses the partition approach, printing the output on the fly:

```perl
$msg =~ s/\s+//g;
my @letters = map { /.{1,8}/g; } $msg;
for my $i (0..7) {
    print map { substr  $_, $i, 1 if length $_ >= $i} @letters;
    print " ";
}
```

**Blog** › [Perl Weekly Challenge 45: Square Secret Code and Source Dumper](http://blogs.perl.org/users/laurent_r/2020/02/perl-weekly-challenge-45-square-secret-code-and-source-dumper.html)

## Maxim Kolodyazhny

[Maxim Kolodyazhny's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/maxim-kolodyazhny/perl/ch-1.pl) is a unique one:

```perl
$_ = lc <>;
s/\s//g;

for my $i ( 0..7 ) {
    last if ( pos = $i ) == length;
    print
        $i ? ' ' : '',
        /(.).{0,7}/g;
}
```

Take careful note of Maxim's assignment to `pos`, as that is the key to the entire solution. `pos` sets the offset of the regexp match, and the regexp `/(.).{0,7}/g` captures every 8th character from that offset. The offset is then incremented the next time through, and it repeats, and thus the columns are printed, one character at a time.

Maxim also included an [external set of tests](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/maxim-kolodyazhny/perl/t/ch-1.t).

## Nazareno Delucca

[Nazareno Delucca's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/ndelucca/perl/ch-1.pl) uses partitioning, and also allows for a user-specified column width:

```perl
my $columns = shift || 8;
$message =~ s/\s+//g;
my @rows = unpack "(A$columns)*", lc $message;

foreach my $word ( @rows ){
    my @chars = split //, $word;
    push @matrix, \@chars;
}

for (0..$columns) {
    for my $row( @matrix ) {
        $code .= shift @$row || '';
    }
    $code .= " ";
}

print "$code\n";
```

The use of `unpack` is a good way to partition the string. Nazareno then splits the row strings to character arrays to simplify the following task of repeatedly peeling off the first character of each string.

## Rage311

[Rage311's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/rage311/perl/ch-1.pl) uses the `split`/modulo method, and is beautifully concise:

```perl
my @input = split //, <<>> =~ s/\s+//gr;

my @words;
$words[$_ % 8] .= $input[$_] for 0..$#input;

say join ' ', @words;
```

This is, I believe, Rage311's first Perl submission. Congrats! I hope to see a lot more like this one.

Rage311 also [submitted a solution in Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/rage311/rust/ch-1.rs), using the same algorithm. Here it is, for all you Rust fans out there:

```rust
fn main() -> io::Result<()> {
    let mut buffer = String::new();
    io::stdin().read_to_string(&mut buffer)?;
    buffer = buffer.split_whitespace().collect();

    let mut final_words: Vec<String> = vec!["".to_string(); 8];

    for i in 0..buffer.len() {
        final_words[i % 8].push(buffer.chars().nth(i).unwrap());
    }

    println!("{}", final_words.join(" "));

    Ok(())
}
```

## Roger Bell West

[Roger Bell West's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/roger-bell-west/perl/ch-1.pl) uses core module [`Getopt::Std`](https://perldoc.perl.org/Getopt/Std.html) to accept an arbitrary column width:

```perl
use Getopt::Std;
my %o=(n => 8);
getopts('n:',\%o);
```

Then, after stripping spaces, his encoding looks like this:

```perl
my $l=length($in)-1;
my @out;
foreach my $c (0..$o{n}-1) {
    my $out;
    for (my $k=$c;$k<=$l;$k+=$o{n}) {
        $out.=substr($in,$k,1);
    }
    push @out,$out;
}
print join(' ',@out),"\n";
```

As you can see, Roger uses a C-style `for` loop so he can increment by the column width (`$o{n}`) to pull every `$o{n}`-th character into his output array. The outer loop shifts the offset (`$c`) every time through. If speed was the goal, this could be ported to a C XS module with just a few minor changes.


## Ruben Westerberg

[Ruben Westerberg's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/ruben-westerberg/perl/ch-1.pl) avoids the need to deal with undefined values for strings that aren't a multiple of 8 characters in length by padding the string with spaces:

```perl
$padded .= " " x (8+8-length($padded)%8);
```

Then, he partitions and splits the string into the `@rows` array-of-arrays, and iterates over it with a nested loop:

```perl
my @rows;
my $steps=length($padded)/ 8;
push @rows, [split "", substr $padded, $_*8,8] for (0..$steps-1);
my $out="";
for my $c (0..7) {
    for my $r (0..$steps-1) {
        $out.= join "",$rows[$r]->[$c];
    }
}
$out=~s/ +/ /g;
$out=~s/ $//;
print $out;
```

His padded string does require a bit of trimming at the end, but after that, all that needs be done is `print $out`. Nice.


## Ryan Thompson

[My solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/ryan-thompson/perl/ch-1.pl) uses the split/modulo method:

```perl
sub encode {
    local $_ = lc shift;
    s/\s//g;
    my ($i, @s);

    map { $s[$i++ % COLUMNS] .= $_ } split '';

    join ' ', @s;
}
```

The last two lines do most of the work. Had I been going for brevity, I might have combined the `lc` and substitution regex on the same line as `split`:

```perl
sub encode {
    my ($i, @s);
    $s[$i++ % COLUMNS] .= $_ for split '', lc shift =~ s/\s//gr;
    join ' ', @s
}
```

But I didn't feel that helped the code, so I left it as separate statements. I would be happy with either, though.

**Blog** › [Square Secret Code](http://www.ry.ca/2020/01/square-secret-code/)


## Saif Ahmed

[Saif Ahmed's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/saiftynet/perl/ch-1.pl) also supports arbitrary columns, and uses the partition method to chunk the plaintext into `@splitChars` before the familiar-looking nested loop builds up `$result` character by character:

```perl
sub pivotEncode{
   my $str=shift;
   my $cols=shift//8;
   $str=~s/\s//gm;                             # remove spaces
   @splitChars=($str=~/(.{$cols}|.+)/g);       # split into blocks
   my $result;                                 # initialise result
   foreach my $index (0..$cols-1) {            # now select character
      foreach my $row ( @splitChars ){         # in each block and
                                               # append it to result
        $result.= substr($row,$index,1) if ($index<length $row)
      }
      $result.=" ";                            #intersperse spaces
   }
   return $result;                             # return encrypted
}
```

## Ulrich Rieke

[Ulrich Rieke's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/ulrich-rieke/perl/ch-1.pl) uses the partitioning method. I'll take you through his `encode` function one step at a time. First, he partitions the string (including any remaining portion less than 8 characters long):

```perl
sub encode {
  my $str = shift ;
  my @strings ;
  my $times = int ( (length $str) / 8 ) ;
  my $pos = 0 ;
  for ( my $i = 0 ; $i < $times ; $i++ ) {
      push @strings, substr( $str, $pos , 8 ) ;
      $pos += 8 ;
  }
```

At this point, `@strings` contains one string for each row. Next, Ulrich uses a nested loop and `substr($word, $i, 1)` to build up `$encoded` character by character:

```perl
  push @strings , substr( $str, $pos ) ;
  my $encoded ;
  for ( my $i = 0 ; $i < 8 ; $i++ ) {
      for my $word ( @strings ) {
    my $len = length $word ;
    if ( $len > $i ) {
        $encoded .= substr( $word , $i , 1 ) ;
    }
      }
  }
```

By now, `$encoded` might look like `Tbjrdhrutoeomhgqwpeunslifoacovzkxey`, which is close, but needs spaces between the columns, which is what this next bit does, by splitting and then recombining via `join ' ', @encodedStrings`:

```perl
  my $stringslen = scalar @strings ;
  my $len = length $encoded ;
  $times =  length $strings[-1]  ;
  my @encodedStrings ;
  $pos = 0 ;
  for ( my $i = 0 ; $i < $times ; $i++ ) {
      push @encodedStrings, substr( $encoded , $pos , $stringslen ) ;
      $pos += $stringslen ;
  }
  my $theRest = 8 - $times ;
  for ( my $i = 0 ; $i < $theRest ; $i++ ) {
      push @encodedStrings , substr( $encoded , $pos , $stringslen - 1 ) ;
      $pos += $stringslen - 1 ;
  }
  return ( join ( ' ' , @encodedStrings ) ) ;
}
```

## Wanderdoc

[Wanderdoc's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/wanderdoc/perl/ch-1.pl) uses Leon Timmermans' [`Const::Fast`](https://metacpan.org/pod/Const::Fast) in place of builtin constants:

```perl
use Const::Fast; # To use the constant in the regex.
const my $SECRET => 8;
const my $REGEX => qr/(.{1,${SECRET}})/;
```

Wanderdoc then uses the partitioning method to break up the string:

```perl
sub encoding_message {
     my $str = $_[0];
     $str =~ tr/ //ds;
     $str = lc $str;

     my @rows = map [split(//,$_)], ($str =~ /$REGEX/g);
     my @coded = map {
          my $idx = $_;
          my @slice = map $_->[$idx] // '', @rows; [@slice];
     } 0 .. $SECRET - 1;

     my $enc = join(' ', map join('',@$_), @coded);

     return $enc;
}
```

Notice that Wanderdoc uses a variation on the nested loop to create an array-of-arrays in `@coded`, that is then joined together for the solution.

Wanderdoc also provides a decoder, which looks very similar to the above portion of the encoder, but in reverse:

```perl
sub decoding_message {
     my $str = $_[0];
     my @words = map [split(//,$_)], split(' ', $str);
     my @txt = map {
          my $idx = $_;
          my @slice = map $_->[$idx] // '', @words; [@slice];
     } 0 .. $#words;

     my $dec = join('', map join('',@$_), @txt);
}
```

***
***

# Task #2 - Source Dumper {#task2}

Write a script that dumps its own source code. For example, say, the script name is `ch-2.pl`. The following command should return nothing:

```sh
$ perl ch-2.pl | diff - ch-2.pl
```

***

There are two ways to interpret this problem, resulting in very different solutions. A straight reading of the challenge, with no additional constraints, means our script can simply read its own source file and print it. For example:

```perl
open my $fh, '<', __FILE__; # or $0
print <$fh>;
```

Most people did something similar to this, and these solutions certainly pass the challenge! However, a few of us noticed that this challenge sounded an awful lot like a [quine](https://en.wikipedia.org/wiki/Quine_(computing)), so we took it a step further for (in my case) the fun of it. Quines are computer programs that not only produce a copy of their own source code, but they also have the additional constraint of *taking no input,* meaning, reading your own source code is not allowed.


## Adam Russell

[Adam Russell's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/adam-russell/perl/ch-2.pl) is a proper quine, because it does not use any input (the last blank line is required):

```perl
print<<''x2,"\n"
print<<''x2,"\n"

```

I've previously seen this quine [attributed to Robin Houston](http://www.nyx.net/~gthompso/self_perl.txt) some years ago, and it's long been one of my favourites, due to the clever use of heredocs.

**Blog** › [Perl Fun](https://adamcrussell.livejournal.com/15213.html)

## Alicia Bielsa

[Alicia Bielsa's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/alicia-bielsa/perl/ch-2.pl) uses `$0` to obtain the filename.

```perl
open (my $fh_file , '<', $0 ) or die "Error reading file";
while (my $line = <$fh_file>) {
     print $line;
}
close ($fh_file);
```

Using the three-argument `open` is [always a good practice](http://modernperlbooks.com/mt/2010/04/three-arg-open-migrating-to-modern-perl.html), so I'm glad to see Alicia use it here. It would, after all, be a terrible quine if your script was named `rm -rf . |` and used the two-argument `open` (please don't try this.)

## Andrezgz

[Andrezgz's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/andrezgz/perl/ch-2.pl) is another proper quine. The whole thing is nearly 100 lines long, but it's worth seeing, so I'll trim it down a bit (mostly removing comments) and show what's left, here. This should still be a quine, after my trimming:

```perl
use v5.10;

my @s = (
q&&,
q&say <<'EOT';&,
q&use v5.10;&,
q&EOT&,
q&&,
q&say 'my @s = (';&,
q&foreach my $line (@s) {&,
q&    say 'q'.chr(38).$line.chr(38).','&,
q&}&,
q&say ');';&,
q&&,
q&foreach my $line (@s) {&,
q&    say $line&,
q&}&,
q&&,
q&say <<'EOT';&,
q&__END__&,
q&&,
q&./ch-2.pl | diff - ch-2.pl&,
q&EOT&,
q&&,
);

say <<'EOT';
use v5.10;
EOT

say 'my @s = (';
foreach my $line (@s) {
    say 'q'.chr(38).$line.chr(38).','
}
say ');';

foreach my $line (@s) {
    say $line
}

say <<'EOT';
__END__

./ch-2.pl | diff - ch-2.pl
EOT

__END__

./ch-2.pl | diff - ch-2.pl

```

The solution works by using various quoting operators to embed a copy of the source code within the code itself, which is a common yet powerful way to generate a quine.

## Arne Sommer

[Arne Sommer's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/arne-sommer/perl/ch-2.pl) uses `$0` to get the script filename, and outputs it line by line:

```perl
my $file = $0;

if (open(my $fh, $file)) {
    while (my $row = <$fh>) {
        print $row;
    }
    close $fh;
}
```

Arne also submitted [another solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/arne-sommer/perl/ch-2a.pl), even more elegant than the first, which uses [`File::Slurper`](https://metacpan.org/pod/File::Slurper) to read `$0` instead:

```perl
use File::Slurper 'read_text';
print read_text($0);
```

By the way, if you haven't already switched over to `File::Slurper` from `File::Slurp`, I encourage you to do so, as `::Slurper` fixes a lot of the problems in `::Slurp`, especially around the API and handling of encoding.

**Blog** › [Square Dumper with Raku](https://raku-musings.com/square-dumper.html)  

## Burkhard Nickels

[Burkhard Nickels' solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/burkhard-nickels/perl/ch-2.pl) is a source code printer that has gone through some serious research and development! It not only prints its own source code, but it can print the source code of any file. And that's not all: it can also highlight its own syntax with [`Text::VimColor`](https://metacpan.org/pod/Text::VimColor), and even render HTML output if desired. It comes with full internal and [external](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/burkhard-nickels/perl/ch-2.pod) documentation, too.

I won't quote the full source here, but I will share a few key parts. Here is the source code reader and argument processor:

```perl
if($ARGV[0] and $ARGV[0] eq "help") {
    ... # Full help text is here
}
elsif($ARGV[0] and $ARGV[0] eq "high") {
    syntax_high($0,$ARGV[1]);
}
elsif($ARGV[0]) {
    syntax_high(@ARGV);
}
else {
    open(IN,$0) or die "Cant open $0\n";
    while(<IN>) { print; }
    close IN;
}
```

As you can see, in all cases, the source code is read from `$0`, as we've seen with other solutions.

The syntax highlighting component (in the sub `syntax_high()`) shows just how easy it is to get Vim syntax highlighting in HTML using `Text::VimColor`:

```perl
    my $syntax = Text::VimColor->new(
        file => $file,
        filetype => 'perl',
        html_full_page => $full,
    );
    my $html = $syntax->html;
```

(Getting ANSI output instead would simply look like `my $ansi = $syntax->ansi`, according to the documentation.)

Burkhard also does a partial HTML parse with `split` to insert his own line numbering, because the `Text::VimColor` line numbering wasn't working for him.

I always like to see solutions like this, that go far above and beyond the challenge, as there is almost guaranteed to be something interesting or unexpected.

### Python

Burkhard submitted a [Python solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/burkhard-nickels/python/ch-2.py) for challenge #2 as well, which uses `__file__` to get the script's filename and then reads from that:

```python
fh = open(__file__);
for line in fh:
    print(line),

fh.close
```

**Blog** › [Source Dumper](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/burkhard-nickels/perl/ch-2.pod)

## Colin Crain

[Colin Crain's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/colin-crain/perl/ch-2.pl) reads the source code from `$0`, and prints it out, along with an observation about sections we'd not normally think of as code, such as the `__DATA__` section:

```perl
local $/ = undef;
open (my $fh, "<", $0) or die "can't open this script thats running this code to read: $0 : $!";
print <$fh>;

__DATA__

even prints the data section, see?
```

## Cristina Heredia

[Cristina Heredia's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/cristian-heredia/perl/ch-2.pl) uses a call to `system` to run [cat(1)](https://linux.die.net/man/1/cat) to print the contents:

```perl
#Name of the script
my $program = 'ch-2.pl';
#Execute an unix command
system("cat $program");
```

Cristina opted to hard-code the name in `$program`. While this of course means the script can't be renamed or run from a different directory, it does mean that the single-string call to `system` is safe from spaces and metacharacters in the filename, since `$program` is trusted.

The POSIX-only solution is fine by me. My only suggestion would be to switch to the `system PROGRAM LIST` form. The single-argument form (above) won't work (and in fact could be vulnerable to abuse) if the script or given pathname contain spaces or shell metacharacters. This is better:

```perl
system cat => $0
```

You could even use `exec` here, as there is no need to ever regain control after `cat` is finished:

```perl
exec cat => $0
```

## Dave Cross

[Dave Cross' solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/dave-cross/perl/ch-2.pl) exploits the fact that the `DATA` filehandle is already opened and pointed at the start of the `__DATA__` block in the script (if the script has one), but you are still free to access the contents of the entire script, if you set the filehandle's position with `seek`:

```perl
seek DATA, 0, 0;
print while <DATA>;
__END__
```

## Dave Jacoby

[Dave Jacoby's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/dave-jacoby/perl/ch-2.pl) uses [`Cwd`](https://perldoc.perl.org/Cwd.html)'s `abs_path` function to get the absolute path of the script first:

```perl
use Cwd qw{abs_path};

my $file = abs_path($0);
if ( -f $file && open my $fh, '<', $file ) {
    print join '', <$fh>;
}
```

From there, Dave does some error checking and uses the three-argument `open`, which is always a good idea. He prints the contents of the file with `join '', <$fh>`, which slurps the entire contents into a list which is then fed to `join`.

**Blog** › [Challenge 45: Cyphers and Quines](https://jacoby.github.io/2020/01/29/challenge-45-cyphers-and-quines.html)

## Duane Powell

[Duane Powell's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/duane-powell/perl/ch-2.pl) also makes a `system` call to [cat(1)](https://linux.die.net/man/1/cat) to print the contents:

```perl
system("cat $0");
```

The same comments I made to Cristina's use of the single-argument `system` apply here; `system cat => $0` is preferable.

## Duncan C. White

[Duncan C. White's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/duncan-c-white/perl/ch-2.pl) uses `$0` to obtain the script's filename, and loops through the lines:

```perl
open( my $fh, '<', $0 ) || die "can't read $0\n";
while( <$fh> )
{
    chomp;
    say;
}
```

## E. Choroba

[E. Choroba's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/e-choroba/perl/ch-2.pl) is another Perl hacker who submitted a full quine:

```perl
$_=q!print'$_=q*'.$_.'*;';s/\52/\41/g;print!;print'$_=q!'.$_.'!;';s/\52/\41/g;print 
```

This one again uses the trick of quoting operators to embed a copy of the source, and munging those quoting characters so they are escaped or output as needed. You might think `tr/*/!/` would work, but it would transmute its own arguments in the quoted code, which is why the character codes in `s/\52/\42/g` are necessary.

According to Choroba's blog, this is a quine he came up with, entirely of his own invention, when he started programming Perl, and has tweaked it over the years into the version you see now.

Covering all the bases, he submitted a file reading version as well:

```perl
seek *DATA, 0, 0;
print <DATA>
__DATA__
```

This one uses the `DATA` filehandle in a similar way as we saw with Dave Cross' solution, above.

**Blog** › [Perl Weekly Challenge 045: Square Secret Code & Source Dumper](http://blogs.perl.org/users/e_choroba/2020/01/perl-weekly-challenge-045-square-secret-code-source-dumper.html)

## Jaldhar H. Vyas

[Jaldhar H. Vyas' solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/jaldhar-h-vyas/perl/ch-2.pl) reads its own source file in slurpy fashion, and uses [`English`](https://perldoc.perl.org/English.html) to aid comprehension:

```perl
use English qw/ -no_match_vars /;

open my $fh, '<', $PROGRAM_NAME or die "$OS_ERROR\n";
local $RS = undef;
print <$fh>;
```

`English`, a core module, adds plain English aliases for most of Perl's punctuation variables, and manages to use three of them in just two lines of code:

 * › `$PROGRAM_NAME` is `$0`, the script's filename
 * › `$OS_ERROR` is `$!`, [errno](http://man7.org/linux/man-pages/man3/errno.3.html) error value (or description)
 * › `$RS` is `$/`, the input record separator, usually newline

**Blog** › [Perl Weekly Challenge - Week 45](https://www.braincells.com/perl/2020/02/perl_weekly_challenge_week_45.html)

## Javier Luque

[Javier Luque's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/javier-luque/perl/ch-2.pl) reads the file in `$0`, with UTF-8 encoding for good measure:

```perl
open(my $fh, '<:encoding(UTF-8)', $0) || die "$@";
while (my $line = <$fh>) {
    print $line;
};
```

**Blog** › [PERL WEEKLY CHALLENGE – 045 – Perl Weekly Challenge](https://perlchallenges.wordpress.com/2020/01/30/perl-weekly-challenge-045/)

## Laurent Rosenfeld

[Laurent Rosenfeld's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/laurent-rosenfeld/perl/ch-2.pl) is another example of reading one's own source file via `$0`:

```perl
my $progr = "./$0";
open my $IN, "<", $progr or die "Unable to open $progr $!";
print while <$IN>;
close $IN;
```

**Blog** › [Perl Weekly Challenge 45: Square Secret Code and Source Dumper](http://blogs.perl.org/users/laurent_r/2020/02/perl-weekly-challenge-45-square-secret-code-and-source-dumper.html)

## Maxim Kolodyazhny

[Maxim Kolodyazhny's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/maxim-kolodyazhny/perl/ch-2.pl) reads its own source file. You know those two-argument `open` calls I've been talking about? How about a one-argument `open`!

```perl
use strict;
use warnings;

open 0 and print <0>;
```

This might require a bit of explanation if you've never encountered a one-argument `open`. First, it's important to know that there is no special magic with "0" going on, here. Normally `open` requires at least two arguments. The two-argument `open` expects a filehandle, and an expression containing the filename.

When `open` is given just *one* argument, though, Perl takes the filename from the package scalar with the same name as the filehandle. In this case that scalar is `$0`, which is of course the script filename. After that, the `print <0>` part is just a normal read from the filehandle glob named "0" created with `open`.

Don't believe this works as I've described it? Try it with a different name:

```perl
$PROG = "$0";
open PROG and print <PROG>
```

Then make the first line a lexical: `my $PROG = "$0"` and now it doesn't work. In fact, that's part of the reason we avoid bareword scalars these days; they *only* work with package globals, so it's not possible to give them lexical scope.

## Nazareno Delucca

[Nazareno Delucca's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/ndelucca/perl/ch-2.pl) uses the `__FILE__` function introduced in Perl 5.16 to get the filename:

```perl
open(my $fh, "<", __FILE__) || die "Couldn't open $0 for reading because: $! ";
print <$fh>;
close($fh);
```

## Rage311

[Rage311's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/rage311/perl/ch-2.pl) reads the file in `$0`, complete with error handling and the three-argument `open`:

```perl
die "Unable to open file: $!" unless
  open my $fh, '<', $0;
print while <$fh>;
```

## Roger Bell West

[Roger Bell West's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/roger-bell-west/perl/ch-2.pl) eschews all modern Perl contrivances for the following concise solution:

```perl
open F,$0;
print <F>;
```

## Ruben Westerberg

[Ruben Westerberg's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/ruben-westerberg/perl/ch-2.pl) shows that those modern features can look pretty, too:

```perl
open my $f,"<",$0;
print $_ for ( <$f> );
```

## Ryan Thompson

I submitted three solutions this week, to showcase three different and progressively more difficult ways this challenge could be solved.

First up—and I can't believe [I actually committed this](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/ryan-thompson/perl/ch-2a.pl)—an **empty file** works as a valid script. This arguably meets the letter of the challenge, but probably not the spirit. All serious definitions of quines regard this as cheating, too.

So the next best thing is [my own version](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/ryan-thompson/perl/ch-2.pl) of the source file reader:

```perl
open my $fh, '<', __FILE__;
print do { undef $/; <$fh> };
```

I opted to slurp `<$fh>` into a string, although I really didn't need to.

But my third solution, finally, is a real quine. The source code is not really human readable, but you can [see it here](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/ryan-thompson/perl/ch-2b.pl). It was, as it turns out, human *writeable,* although I wouldn't recommend replicating my methods.

Its output, when fed to a terminal, is displayed just a bit differently:

![I <3 Perl](http://www.ry.ca/wp-content/uploads/2020/02/image.png)

When fed to `diff`, `diff` will happily compare the output—including all of the ANSI escape codes—and report no differences.

For a more human-readable introduction to what I did, I started with the following quine:

```perl
$_=q<"ANSI ART HERE";print"\$_=q<$_>;eval\n">;eval
```

As discussed in my blog, I do not claim to have invented this quine, as it's pretty difficult to come up with a completely novel quine after all these years. Similar versions are rather ubiquitious in Perl quine discussions, due to how powerful the quoting operators are in Perl.

I then got to work with my amazing ANSI art skills, at the position shown. Maybe I could get rich selling signed prints.

**Blog** › [Quine](http://www.ry.ca/2020/02/quine/)

 ## Saif Ahmed

[Saif Ahmed's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/saiftynet/perl/ch-2.pl) is another file read solution, with UTF-8 encoding:

```perl
open (my $fh, '<:encoding(UTF-8)', $0 ) ;
print while(<$fh>);
```

## Ulrich Rieke

[Ulrich Rieke's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/ulrich-rieke/perl/ch-2.pl) reads the file via a filehandle glob:

```perl
open (FH , "< $0" ) or die "Can't open file $0!\n" ;
while ( <FH> ) {
  print ;
}
close (FH) ;
```

## Wanderdoc

[Wanderdoc's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/wanderdoc/perl/ch-2.pl) reads `$0`:

```perl
open my $in, "<", $0 or die "$!";
for ( <$in> ) {print $_;}
```

***

And that's it! Although a lot of these solutions were quite similar, it's amazing how much variation in style one can achieve in just two or three lines.


***
***

## SEE ALSO {#blogs}

### Blogs this week:

Great to see more people blogging again this week! I always enjoy reading them.

**Adam Russell** › [Perl Fun](https://adamcrussell.livejournal.com/15213.html)

**Arne Sommer** › [Square Dumper with Raku](https://raku-musings.com/square-dumper.html)

**Burkhard Nickels** › [Square Secret Code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/burkhard-nickels/perl/ch-1.pod) | [Source Dumper](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-045/burkhard-nickels/perl/ch-2.pod)

**Dave Jacoby** › [Challenge 45: Cyphers and Quines](https://jacoby.github.io/2020/01/29/challenge-45-cyphers-and-quines.html)

**E. Choroba** › [Square Secret Code & Source Dumper](http://blogs.perl.org/users/e_choroba/2020/01/perl-weekly-challenge-045-square-secret-code-source-dumper.html)

**Jaldhar H. Vyas** › [Perl Weekly Challenge Week 45](https://www.braincells.com/perl/2020/02/perl_weekly_challenge_week_45.html)

**Javier Luque** › [045 – Perl Weekly Challenge](https://perlchallenges.wordpress.com/2020/01/30/perl-weekly-challenge-045/)

**Laurent Rosenfeld** › [Square Secret Code and Source Dumper](http://blogs.perl.org/users/laurent_r/2020/02/perl-weekly-challenge-45-square-secret-code-and-source-dumper.html)

**Luca Ferrari** › [Encoded messages and self-source-code-printing](https://fluca1978.github.io/2020/01/29/PerlWeeklyChallenge45.html)

**Ryan Thompson** › [Square Secret Code](http://www.ry.ca/2020/01/square-secret-code/) | [Quine](http://www.ry.ca/2020/02/quine/)