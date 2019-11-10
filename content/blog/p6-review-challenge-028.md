---
title: "Laurent Rosenfeld Weekly Review: Challenge - 028"
date: 2019-10-13T00:00:00+00:00
description: "Laurent Rosenfeld Weekly Review: Challenge - #028."
type: post
image: images/blog/p6-review-challenge-028.jpg
author: Laurent Rosenfeld
tags: ["Raku"]
---
***
# Raku Solutions Weekly Review
***

## Task #1: File Types

This is derived in part from my [blog post](http://blogs.perl.org/users/laurent_r/2019/10/perl-weekly-challenge-28-file-type-and-digital-clock.html) made in answer to the [Week 28 of the Perl Weekly Challenge](https://perlweeklychallenge.org/blog/perl-weekly-challenge-028/) organized by  <a href="http://blogs.perl.org/users/mohammad_s_anwar/">Mohammad S. Anwar</a> as well as answers made by others to the same challenge.

The challenge reads as follows:

*Write a script to check the file content without explicitly reading the content. It should accept file name with path as command line argument and print “The file content is binary.” or else “The file content is ascii.” accordingly.*

On most operating systems (VMS is an exception to a certain extent), there is no 100%-reliable algorithm to know whether a file is text (ASCII or UTF-8) or binary, but only some heuristic guesses. Usually, programs that attempt to find out whether a file is text or binary read a raw block of bytes (often 4096 bytes) and make some statistics on the number of bytes corresponding to ASCII printable and space characters versus non-printable characters. If the number of non-printable character exceeds a certain fraction of the whole (for example one third, or 10%, or whatever), then the file is deemed to be binary. Also, any file containing a zero byte in the examined portion is considered a binary file.

In Perl 5, the `-T` and `-B` file test operators more or less work as described above.

## My Solution

Perl 6 has most of the Perl 5 test file operators (albeit with a slightly different syntax), but operators equivalent to Perl 5 `-T` and `-B` file test operators currently do not exist (or are not yet implemented). We will use the existing file test operators (`-e`, `-z` and `-f`) to check, respectively, that the file exists, that it is not empty and that it is a regular file, but we have to roll out our own `is-binary` subroutine to try to mimic the Perl 5 `-T` and `-B` operators. This subroutine will read a raw block of the first 4096 bytes of the file and examine each byte in turn to make some statistics on space characters and printable characters versus non-printable characters.

The slight difficulty, though, is to determine exactly what should be considered a non-printable character. For lack of a standard definition of such characters, I've decided to consider that byte decimal values 0 to 8 and 14 to 31 correspond to ASCII non-printable characters. Those values will be stored in a set. With such a small number of non-printable characters compared to the full extended ASCII, the proportion of non-printable character would be around 10% on a random bytes binary file. I have decided to consider that a file shall be deemed to be text (ASCII) if there is less than one byte out of 32 that is non-printable, and binary otherwise. In addition, any file for which the buffer contains at least one null byte (value 0) is considered to be binary.

``` Perl6
use v6;

sub is-binary ($file) {
    my constant non-printable-bytes = (0..8).Set (|) (14..31).Set;
    my constant block-size = 4096;
    my $fh = $file.IO.open(:r, :bin);
    my $buf = $fh.read(block-size);
    $fh.close;
    my ($printable, $non-printable) = 0, 0;
    for $buf.list -> $byte {
        return True if $byte == 0; # null byte
        if $byte (elem) non-printable-bytes {
            $non-printable++;
        } else {
            $printable++;
        }
    }
    return True if $non-printable * 31 > $printable;
    False;
}

sub MAIN ($file) {
    die "File $file does not exist" unless $file.IO ~~ :e;
    die "File $file is empty" if $file.IO ~~ :z;
    die "File $file isn't a plain file" unless $file.IO ~~ :f;
    say is-binary($file) ?? "File content is binary" !! "File content is text (ASCII)";
}
```

This appears to work as desired:

    $ perl6 file-type.p6
    Usage:
      file-type.p6 <file>

    $ perl6 file-type.p6 foobar.baz
    File foobar.baz does not exist
      in sub MAIN at file-type.p6 line 23
      in block <unit> at file-type.p6 line 1


    $ perl6 file-type.p6 file-type.p6
    File content is text (ASCII)

    $ perl6 file-type.p6 amazon.pl.gz
    File content is binary

## Alternative Solutions

[Arne Sommer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/arne-sommer/perl6/ch-1.p6) used the `is-text` subroutine exported by Jonathan Worthington's [Data::TextOrBinary](https://github.com/jnthn/p6-data-textorbinary) module, which applies more or less the same heuristics as the one I used above. Using such a module makes the code pretty simple:

``` Perl6
use Data::TextOrBinary;

sub MAIN ($file, :$test-bytes = 4096)
{
  if $file.IO.d
  {
    say "Directory.";
  }
  elsif $file.IO.e
  {
    say is-text($file.IO, :$test-bytes)
      ?? "Text file."
      !! "Binary file.";
  }
  else
  {
    say "File doesn't exist.";
  }
}
```

Note that Arne's [blog post](https://perl6.eu/binary-clock.html) has an extended discussion about the subject, including original 7-bit ASCII versus extended 8-bit ASCII, and so on.

[Yet Ebreo](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/yet-ebreo/perl6/ch-1.p6) also used the `is-text` function of the [Data::TextOrBinary](https://github.com/jnthn/p6-data-textorbinary) module:

``` Perl6
use Data::TextOrBinary;

sub MAIN (
    *@files #= Files to check if ascii/binary
) {
    for @files -> $x {
        if (is-text($x.IO)) {
            say "[$x]: The file content is ascii.";
        } else {
            say "[$x]: The file content is binary.";
        }
    }
}
```

[Athanasius](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/athanasius/perl6/ch-1.p6) chose to use the Perl 5 [File::Util](https://metacpan.org/pod/File::Util) module within Perl 6, which provides a good example on how Perl 6 can benefit from the Perl 5 ecosystem:

``` Perl6
use File::Util:from<Perl5> <file_type>;

BEGIN say '';

#===============================================================================
sub MAIN(Str:D $path)
#===============================================================================
{
    my Str $description = ! .e ?? 'This does not exist'      !!
                            .d ?? 'This is a directory'      !!
                          ! .f ?? 'This is not a plain file' !!
                            .z ?? 'The file is empty'        !! 'OK'
               given $path.IO;

    if $description eq 'OK'
    {
        my Str @types = file_type($path);

        if @types.elems == 2 && @types[0] eq 'PLAIN'
        {
            my Str $t1   = @types[1];
            $description = $t1 eq 'TEXT'   ?? 'The file content is text'   !!
                           $t1 eq 'BINARY' ?? 'The file content is binary' !!
                      'ERROR: The file content is neither text nor binary';
        }
        else
        {
            $description = 'ERROR: Unexpected file types: ' ~ @types.join(', ');
        }
    }

    qq{"$path": $description}.say;
}
```

[Kevin Colyer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/kevin-colyer/perl6/ch-1.p6) decided to read a single byte using the `getc` method in a `try` block in order to decide whether a file is ASCII or binary. I'm not convinced this is very reliable, but Kevin's program uses some interesting Perl 6 features:

``` Perl6
use Test;

sub MAIN(Str $file where *.IO.e) {
    my $fh = $file.IO.open;
    LEAVE try close $fh;

    # attempt a single byte read explicitly in ascii
    $fh.encoding: 'ascii';

    try {
        $fh.getc;
    }
    if $! { say “The file content is binary.”}
    else  { say “The file content is ascii.” };
}
```

[Ulrich Rieke](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/ulrich-rieke/perl6/ch-1.p6), who is a new member of the team (welcome, Ulrich), used a solution similar to Kevin's:

``` Perl6
sub MAIN( Str $filename ) {
  my $fh = open $filename , :r ;
  try $fh.get ;
  if ( $! ) {
      say "The file is binary." ;
  }
  else {
      say "The file is ascii." ;
  }
}
```

[Markus Holzer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/kevin-colyer/perl6/ch-1.p6) used the [file](http://gnuwin32.sourceforge.net/packages/file.htm) external GNU Windows utility:

``` Perl6
sub MAIN( $file )
{
    my $magic = run( "file", $file, :out ).out.slurp;
    say "The file content is ", ($magic ~~ / \s text \, / ?? "ascii" !! "binary");
}
```

[Feng Chang](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/feng-chang/perl6/ch-1.p6) chose to read 16 bytes from the file and apply the `is-ascii` subroutine, which checks for bytes numeric ranges 9 to 13 and 32 to 126:

``` Perl6
sub is-ascii(uint8 $c --> Bool) {
    9 <= $c <= 13 or 32 <= $c <= 126
}
sub MAIN(Str:D $file-name where *.IO.e) {
    print 'the file content is ';
    say   ([and] open($file-name, :r).read(16).list».&{ is-ascii($_) }) ??
              'ascii' !! 'binary';
}
```

[Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/joelle-maslak/perl6/ch-1.p6) wrote a `File-Info` class, which considers bytes 7, 9 to 13 and 32 to 126 to be printable ASCII characters. Her program reads 512 bytes from the file and deems the file to be *possibly* ASCII if less that one third of the characters are non printable.

``` Perl6
class File-Info {
    my uint8 @print-default;
    BEGIN {
        @print-default.push:   7; # Backspace is considered a printable for this routine's purposes
        @print-default.push:   9; # Horizontal tab
        @print-default.push:  10; # Line Feed
        @print-default.push:  12; # Form Feed
        @print-default.push:  13; # Carriage Return
        @print-default.push: |(32..126);  # All other printables
    }

    has Str:D  $.filename is required;
    has UInt:D $.bytes-to-examine = 512;
    has Set:D  $.printables = Set.new(@print-default);
    has buf8   $!start-block;

    method TWEAK() {
        my $fh = $.filename.IO.open: :r, :bin;
        $!start-block = $fh.read($!bytes-to-examine);
        $fh.close;
    }

    method possibly-ascii-printable(-->Bool:D) {
        return False if 0 ∈ $!start-block;  # Nul chars are automatic binary

        my $unprintable = $!start-block.grep( * ∈ @($!printables) ).elems;
        return False if ($unprintable * 3) > $!start-block.elems;

        # It's possibly ascii.
        return True;
    }
}
```

[Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/ruben-westerberg/perl6/ch-1.p6) based his determination of the file type on the file extension:

``` Perl6
#!/usr/bin/env perl6
my %ext;
data.lines.map({
    my @f=.split(/\s|\,/,:skip-empty);
    my $type= /^text\// ?? "text" !! "binary" given @f.shift;
    %ext{$_}=$type for @f;
});

@*ARGS.map({
    my $type=%ext{.IO.extension};
    $type="binary" if !$type;
    put "$_: The file content is $type";
});

#emulate perl5 DATA section... sort of..
sub data() {
    q:to/END/
    text/html                                        html htm shtml
    text/css                                         css
    text/xml                                         xml
    text/mathml                                      mml
    text/plain                                       txt
    text/vnd.sun.j2me.app-descriptor                 jad
    text/vnd.wap.wml                                 wml
    text/x-component                                 htc
    END
}
```

## Task #2: Digital Clock

This is derived in part from my [blog post](http://blogs.perl.org/users/laurent_r/2019/10/perl-weekly-challenge-28-file-type-and-digital-clock.html) made in answer to the [Week 28 of the Perl Weekly Challenge](https://perlweeklychallenge.org/blog/perl-weekly-challenge-028/) organized by  <a href="http://blogs.perl.org/users/mohammad_s_anwar/">Mohammad S. Anwar</a> as well as answers made by others to the same challenge.

The challenge reads as follows:

*Write a script to display Digital Clock. Feel free to be as creative as you can when displaying digits. We expect bare minimum something like “14:10:11”.*

## My Solutions

We can use a Perl6 one-liner:

    $ perl6 -e 'loop { my $d = DateTime.now; printf "\r%02d:%02d:%02d", $d.hour, $d.minute, $d.second; sleep 1;'
    14:35:06

Two interesting things to say about it: first, we use the `\r` (carriage return) to go back to the first column of the screen and overwrite the previously displayed time with the new one each time we want to display a new time. This useless `\r` carriage return character (dating from old typewriters) is often a pain in the neck when dealing with Windows-generated files under Unix or Linux (or the other way around), I'm happy that I could find here some useful purpose for this pesky and usually useless character. Also note that this program uses `printf` with a formatting string to make sure that each number is printed over two characters (with a leading zero when needed). This program will run "forever", until you kill it with a `Ctrl C` command. It would be easy to add a counter to stop it after a while, if needed.

This can actually be made simpler:

    $ ./perl6 -e 'loop {print "\r", DateTime.now.hh-mm-ss;}'
    14:38:06


So, job done? Yes, sure, we're displaying a digital clock. But the task specification suggests to feel free to be creative when displaying the digits. So, let's try to get a nicer output. We could probably use some graphical library such as `Tk`, but I haven't used it for a fairly long time and I'm also not sure how to use it in Perl 6. We could also possibly use an HTML display, but I fear that would require to run a Web server, and I don't want to run into annoying environment problems. So I decided to simply display the time with ASCII art.

``` Perl6
use v6;

my @digit_strings = (
' _  -   - _  -_  -    - _  - _  - _  - _  - _  -     ',
'| | - | - _| -_| -|_| -|_  -|_  -  | -|_| -|_| -  O  ',
'|_| - | -|_  -_| -  | - _| -|_| -  | -|_| - _| -  O  ',
'    -   -    -   -    -    -    -    -    -    -     ');

my @digits = map { [split /\-/, $_] }, @digit_strings;

sub display_time (Str $time) {
    my @pieces = $time.comb;
    for 0..3 -> $line {
        for @pieces <-> $digit {
            $digit = 10 if $digit eq ":";
            print @digits[$line][$digit];
        }
    say "";
    }
}

my $clear_screen = ($*VM.osname ~~ m:i/cyg | lin/) ?? "clear" !! "cls";
loop {
    my $d = DateTime.now;
    my $time_str = sprintf "%02d:%02d:%02d", $d.hour, $d.minute, $d.second;
    shell $clear_screen;
    display_time $time_str;
    sleep 1;
}

=finish

Example of displayed time:
    _        _   _        _   _
 |   |   O  | | |_|   O  | |  _|
 |   |   O  |_|  _|   O  |_| |_
```

## Alternative Solutions

Quite a few of the solutions below used system-specific features that did not work for me, despite trying them under Windows, Linux and Cygwin. The fact that I wasn't able to run a solution doesn't mean that it is a bad solution

[Arne Sommer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/arne-sommer/perl6/ch-2.p6) also used ASCII art to display a digital clock, but his digits are much more elaborated than mine:


       ,a8888a,         88           88  888888888888               ,d8        88
     ,8P"'  `"Y8,     ,d88  888    ,d88          ,8P'  888        ,d888      ,d88
    ,8P        Y8,  888888  888  888888         d8"    888      ,d8" 88    888888
    88          88      88           88       ,8P'            ,d8"   88        88
    88          88      88           88      d8"            ,d8"     88        88
    `8b        d8'      88  888      88    ,8P'        888  8888888888888      88
     `8ba,  ,ad8'       88  888      88   d8"          888           88        88
       "Y8888P"         88           88  8P'                         88        88


[Athanasius](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/athanasius/perl6/ch-2.p6) wrote a `while` loop using the `\r` carriage return character to overwrite the previous display with the new one each time, just as in my one-liners:

``` Perl6
while 1
{
    sleep 1;

    if ++$sec >= 60
    {
        $sec = 0;

        if ++$min == 60
        {
            $min  = 0;
            $hour = 0 if ++$hour == 24;
        }
    }

    "%02d:%02d:%02d\r".printf($hour, $min, $sec);
}
```

[Daniel Mita](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/daniel-mita/perl6/ch-2.p6) suggested a program which I don't fully understand and which I could not run (perhaps not the right terminal):

``` Perl6
my @num-groups = (^0x20000)
  .map( { .chr } )
  .grep( { .uniprop eq "Nd" } )
  .rotor(10)
  .map( { ( ^10 Z=> $_ ).Hash } );

loop {
  run 'clear';
  given DateTime.now -> $t {
    for @num-groups -> %nums {
      once {print ' ' x 8 ~ "\t"}
      print $t.hh-mm-ss.comb.map( { %nums{$_}
        || do given %nums{0}.uniprop('Block') {
          when 'Arabic' {'؛'}
          when 'NKo'    {'߸'}
          default       {':'}
        }} ).join;
      print $++ % 3 ?? "\t" !! "\n";
    }
    sleep 0.1 while $t.whole-second == DateTime.now.whole-second;
  }
}
```

I also could not run [Markus Holzer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/markus-holzer/perl6/ch-2.p6) solution, probably for similar reasons:

``` Perl6

subset CoordStr of Str where / ^ \d+ \, \d+ $ /;

my @numbers = map *.comb(3).Array,
    "╻━╻┃ ┃╹━╹", "  ╻  ┃  ╹", "╺━╻╻━╹╹━╸", "╺━╻╺━┃╺━╹", "╻ ╻╹━┃  ╹",
    "╻━╸╹━╻╺━╹", "╻━╸┃━╻╹━╹", "╺━╻  ┃  ╹", "╻━╻┃━┃╹━╹", "╻━╻╹━┃╺━╹";

sub MAIN( CoordStr :$at = "2,2" )
{
    my ($x, $y) = $at.Str.split(',');

    react {
        whenever Supply.interval(1) -> $v {
            print clear-screen;
            display-time( $x, $y, DateTime.now.hh-mm-ss );
            print go-to(0,0);
        }

        whenever signal(SIGINT) { exit 0; }
    }
}

sub display-time( $x, $y, $time )
{
    for $time.comb.kv -> $column, $part
    {
        if $part ~~ /\d/
        {
            for |@numbers[$part].kv -> $idx, $line
            {
                print go-to( $x + ($column * 3), $y + $idx ) ~ $line;
            }
        }
        else
        {
            print go-to( $x + ($column * 3) , $y + 1) ~ " : ";
        }
    }
}

sub clear-screen() { escape("2J") ~ escape(";H"); }
sub go-to( $column, $row ) { escape( "$row;$column" ~ "H" ); }
sub escape( $value ) { "\e[" ~ $value; }
```

[Kevin Colyer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/kevin-colyer/perl6/ch-2.p6) wrote a bare-bone program essentially similar to one of my one-liners:

``` Perl6
sub MAIN() {
    # bare minimum
    say DateTime.now.hh-mm-ss;
}
```

[Simon Proctor](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/simon-proctor/perl6/ch-2.p6) used the `\r` carriage-return character to do something similar to my one-liners:

``` Perl6
multi sub MAIN() {
    END say "";
    loop {
        print "{DateTime.now.hh-mm-ss}";
        sleep 1;
        print "\r";
    }
}
```

[Ulrich Rieke](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/ulrich-rieke/perl6/ch-2.p6)'s solution uses an external `figlet` command which I do not know and can't test adequately:

``` Perl6
use v6 ;
run 'figlet' , "{DateTime.now.Str.substr(11,8)}" ;
```

[Feng Chang](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/feng-chang/perl6/ch-2.p6) also suggested a solution which I am not able to run:

``` Perl6
my $clock = Supply.interval: 1;
$clock.tap: { print "\r", DateTime.now.hh-mm-ss };

signal(SIGINT).tap({ put "\r{ DateTime.now.hh-mm-ss }  "; exit 0; });
sleep ∞;
```

[Joelle M%aslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/joelle-maslak/perl6/ch-2.p6) used a solution similar to one of my one-liners:

``` Perl6
sub MAIN() {
    say DateTime.now.hh-mm-ss;
}
```

[Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/ruben-westerberg/perl6/ch-2.p6) provided code using supplies, `react` and `whenever` features and I must admit that I get an idea of what it is doing, but don't fully understand it:

``` Perl6
my $offset=0;
#my @codes=("\x1b[{$offset}D"
react { whenever Supply.interval(.1) {
    print "=";
}
    whenever Supply.interval(1) {
        print "\x1b[2K";
         print "\x1b[1000D";
        print DateTime.now.hh-mm-ss;
     }
}
```

[Yet Ebreo](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-028/yet-ebreo/perl6/ch-2.p6) provided an ASCII art solution:

``` Perl6
my @ascii_num= (
    ["  0000  "," 00  00 "," 00  00 "," 00  00 ","  0000  "],
    ["   11   ","   11   ","   11   ","   11   ","   11   "],
    [" 222222 ","     22 "," 222222 "," 22     "," 222222 "],
    [" 333333 ","     33 "," 333333 ","     33 "," 333333 "],
    [" 44  44 "," 44  44 "," 444444 ","     44 ","     44 "],
    [" 555555 "," 55     "," 555555 ","     55 "," 555555 "],
    [" 666666 "," 66     "," 666666 "," 66  66 "," 666666 "],
    [" 777777 ","     77 ","     77 ","     77 ","     77 "],
    [" 888888 "," 88  88 "," 888888 "," 88  88 "," 888888 "],
    [" 999999 "," 99  99 "," 999999 ","     99 "," 999999 "],
    ["    "," :: ","    "," :: ","    "],
    ["    ","    ","    ","    ","    "]
);
my $toggler = 1;
loop {
    my $dig_time = DateTime.now;
    my @printline;

    $toggler = !$toggler;
    for $dig_time.hh-mm-ss.split("",:skip-empty) -> $x {
        for (0 .. 4) -> $i {
            @printline[$i] ~= @ascii_num[ ($x~~/\:/) ?? ( $toggler ?? 10 !! 11) !! $x ][$i];
        }
    }

    #This might cause flicker
    shell (($*DISTRO.name eq 'mswin32') ?? 'cls' !! 'clear');

    for (0 .. 4) -> $i {
        say @printline[$i];
    }

    say "\nToday is "~qw|Monday Tuesday Wednesday Thursday Friday Saturday Sunday|[$dig_time.day-of-week-1]
    ~": "~qw|January February March April May June July August September October November December|[$dig_time.month-1]
    ~" "~$dig_time.day~","
    ~" "~$dig_time.year;
    sleep .5
}
```

which produces output like so:

     222222  333333      44  44   0000       333333   0000
         22      33  ::  44  44  00  00  ::      33  00  00
     222222  333333      444444  00  00      333333  00  00
     22          33  ::      44  00  00  ::      33  00  00
     222222  333333          44   0000       333333   0000

## SEE ALSO

Only one blog post (besides mine) this time, as far as I can say from Mohammad's recap and from the GitHub repository:

Arne Sommer: https://perl6.eu/binary-clock.html.

## Wrapping up

Please let me know if I forgot any of the challengers or if you think my explanation of your code misses something important (send me an e-mail or just raise an issue against this GitHub page).

If you want to participate to the Perl Weekly Challenge, please connect to [this site](https://perlweeklychallenge.org/).
