---
title: "Laurent Rosenfeld Weekly Review: Challenge - 029"
date: 2019-10-20T00:00:00+00:00
description: "Laurent Rosenfeld Weekly Review: Challenge - #029."
type: post
image: images/blog/p6-review-challenge-029.jpg
author: Laurent Rosenfeld
tags: ["Raku"]
---
***
# Raku Solutions Weekly Review
***

## Task #1: Expansion

This is derived in part from my [blog post](http://blogs.perl.org/users/laurent_r/2019/10/perl-weekly-challenge-29-file-type-and-digital-clock.html) made in answer to the [Week 29 of the Perl Weekly Challenge](https://perlweeklychallenge.org/blog/perl-weekly-challenge-029/) organized by  <a href="http://blogs.perl.org/users/mohammad_s_anwar/">Mohammad S. Anwar</a> as well as answers made by others to the same challenge.

The challenge reads as follows:

*Write a script to demonstrate brace expansion. For example, script would take command line argument Perl {Daily,Weekly,Monthly,Yearly} Challenge and should expand it and print like below:*

    Perl Daily Challenge
    Perl Weekly Challenge
    Perl Monthly Challenge
    Perl Yearly Challenge

The specification is not very detailed, and we will not attempt to provide a full-fledged templating system, as this already exists. So we will limit our implementation to the following: an initial sentence fragment, followed by a single list of options between curly brackets, followed by a final sentence fragment.

## My Solution

We will supply a command line argument in the form of a string between quote marks, and provide for a default value for the purpose of testing. The program also attempts to normalize spaces in the output, since it is difficult to predict the exact format (number of spaces) supplied by the user.

``` Perl6
use v6;

sub MAIN (Str $input = 'Perl {Daily,Weekly,Monthly,Yearly} Challenge') {
    my $match = $input ~~ /(<-[{]>+) '{' (<-[}]>+) '}' (.+)/;
    my ($start, $options, $end) = map { ~$_ }, $match[0 .. 2];
    s:g/^ \h+ | \h+ $// for $start, $options, $end;
    say "$start $_ $end" for $options.split(/\s*','\s*/);
}
```

Running the program using the default value and with a poorly formatted input string displays the following satisfactory results:

    $ perl6 brace-expansion.p6
    Perl Daily Challenge
    Perl Weekly Challenge
    Perl Monthly Challenge
    Perl Yearly Challenge

    $ ./perl6 brace-expansion.p6 "Perl {Daily,  Weekly  ,  Monthly,Yearly   }   Challenge"
    Perl Daily Challenge
    Perl Weekly Challenge
    Perl Monthly Challenge
    Perl Yearly Challenge

## Alternate Solutions

It appears that I was a bit lazy with my bare-bone solution: many challengers contributed solutions that were richer with features, especially the ability to process several groups of braces, using either grammars or recursive subroutines (or both).

[Arne Sommer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/arne-sommer/perl6/ch-1.p6) contributed a fairly concise and clever program. Consider his multi `MAIN` subroutine doing the first pattern matching within the signature and the loop to split the pattern within braces in the body of the function, *and* calling itself recursively in the event there are more brace patterns to be processed:

``` Perl6
multi MAIN ($string where $string ~~ /^(.*?) \{ (.*?) \} (.*)/)
{
  MAIN("$0$_$2") for $1.Str.split(",");
}
multi MAIN ($string)
{
  say $string;
}
```
The second multi `Main` subroutine is called only when there are no more brace subpatterns to be processed. Quite impressive and really nice. Congrats, Arne.

[Noud](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/noud/perl6/ch-1.p6)'s solution is also quite concise:

``` Perl6
sub brace_expansion(Str $s) {
    if ($s ~~ /(.*)\{(.*)\}(.*)/) {
        ["$_[0]$_[1]$2" for brace_expansion(Str($0)) X $1.split(',')];
    } else {
        [$s];
    }
}
```
I'm impressed by Noud's main code line:
``` Perl6
        ["$_[0]$_[1]$2" for brace_expansion(Str($0)) X $1.split(',')];
```
which does quite a lot in a single statement (I like especially the use of the `X` cross product operator in this context). Yes, Perl 6 can be very expressive when used by such talented people as Arne and Noud.


[Daniel Mita](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/daniel-mita/perl6/ch-1.p6) used quite clever nested `given` statements to process several input phrases:

``` Perl6
sub MAIN (
  *@phrase where * > 0,
  --> Nil
) {
  given @phrase.join: ' ' -> $str {
    given $str.match: /^ ( .*? ) '{' ( .* ) '}' ( .*? ) $/ {
      when .[1].so {
        for .[1].split: ',' -> $split {
          "$_[0]$split$_[2]".say;
        }
      }
      default { $str.say }
    }
  }
}
```

[Kevin Colyer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/kevin-colyer/perl6/ch-1.p6) also wrote a program able to handle several brace expansions. This is his `expand` subroutine doing the bulk of the work:

``` Perl6
sub expand(*@texts) {
    my @expanded;
    for @texts -> $t {
        if $t.starts-with: '{' and $t.ends-with: '}' {
             @expanded.push: [ $t.substr(1,*-1).split(',') ];
        } else {
            @expanded.push:  [ $t ];
        }
    }
    # reduce array using cross multiplier
    return [X] @expanded;
}
```

[Mark Senn](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/mark-senn/perl6/ch-1.p6)'s program is accompanied with interesting and lengthy comments that I would urge you to read from the linked page (and possibly provide some answers to his questions), but will omit these comments from this review.

``` Perl6
sub MAIN(*@arg);
{
    (@arg.elems)
        or  @arg = 'Perl', '{Daily,Weekly,Monthly,Yearly}', 'Challenge';

    # Convert the @arg array to a @term array.
    my @term = ();
    for @arg  {
        if  /^^ \{ (.*?) \} $$/  {
            push @term, $0.split(',');
        }  else  {
            push @term, $_;
        }
    }
    # I like the following line the best.
    ([X] @term).map({.join(' ').say});
}
```

[Markus Holzer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/markus-holzer/perl6/ch-1.p6) wrote a very complete program, including a full-fledged grammar for brace expansion and a detailed test plan. Markus's program is too long to quote here (but I would really advise you to follow the link and look in detail to his solution). Anyway, I arbitrarily decided to quote only his grammar (since we haven't discussed so many grammars in our reviews so far):

``` Perl6
grammar BraceExpansion
{
    regex TOP           { <start-txt> [ <list> | <range> ] <end-txt> }
    regex start-txt     { .* <?before [<list> || <range>]> }
    regex end-txt       { <save-char>*? }
    regex save-char     { <-[ \" \& \( \) \` \' \; \< \> \| \{ \} ]> }
    regex list-element  { <list> | <-[ \" \! \$ \& \( \) \` \' \; \< \> \|]>  }
    regex a-to-z        { <[ a..z A..Z ]> }
    regex num           { \-? <[ 0..9 ]>+ }
    regex range         { <alpha-range> | <num-range> }
    regex num-range     { \{ <num>  \. \. <num> [ \. \. <num> ]? \} }
    regex alpha-range   { \{ <a-to-z> \. \. <a-to-z> [ \. \.<num> ]? \} }
    regex list          { \{ <list-element>+ % ',' \} }
}
```

[Ozzy](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/ozzy/perl6/ch-1.p6) also wrote a grammar to parse the input string. Ozzy also used quite cleverly the `X~` cross product operator and concatenation operator:

``` Perl6
sub MAIN ( Str $string = 'Perl {Daily,Weekly,Monthly,Yearly} Challenge' ) {

    grammar G {
        token TOP           { ( <h> \{ <alt>+ % ',' \} <t> )+ }
        token h             { <[\w\s]>* }
        token alt           { <[\w\s]>+ }
        token t             { <[\w\s]>* }
    }

    my @m = G.parse($string)[0];
    my @r = "";

    for ^@m.elems -> $i {
        @r = (@r X~ @m[$i]<h> X~ @m[$i]<alt> X~ @m[$i]<t>);
    }
    .say for @r;
}
```

[Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/joelle-maslak/perl6/ch-1.p6) wrote an awesome program handling both juxtaposed and nested curly braces. Of course, she used a grammar for this, then recursively exploring the parse tree. Joelle's Grammar is as follows:

``` Perl6
grammar Expansion {
    rule TOP      {
        ^
        <element>*
        $
    }
    token element  { <string> | <curly> }
    token string   { <-[ \{ \} ]>+ }
    token curly    { \{ <option>+ % ',' \} }
    token option   { <innerele>* }
    token innerele { <innerstr> | <curly> }
    token innerstr { <-[ \{ \} \, ]>+ }
}
```

But, while the grammar is in a sense the most powerful feature used by Joelle, the real work of her program is done in this subroutine:

``` Perl6
sub expansion(@arr is copy, $tree) {
    if $tree<element>:exists {
        # Handle each element.
        for @($tree<element>) -> $ele {
            @arr = expansion(@arr, $ele);
        }
        return @arr;
    } elsif $tree<innerele>:exists {
        for @($tree<innerele>) -> $ele {
            @arr = expansion(@arr, $ele);
        }
        return @arr;
    } elsif $tree<string>:exists {
        return @arr.map: { $_ ~ $tree<string> };
    } elsif $tree<innerstr>:exists {
        return @arr.map: { $_ ~ $tree<innerstr> };
    } elsif $tree<curly>:exists {
        my @arr-copy = @arr;
        @arr = [];
        for @($tree<curly><option>) -> $ele {
            @arr.append: expansion(@arr-copy, $ele);
        }
        return @arr;
    } else {
        die;
    }
}
```

[Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/ruben-westerberg/perl6/ch-1.p6) has an `expand` subroutine making most of the work:

``` Perl6
$_= @*ARGS.join(" ");
my $matches=m:g/\{.*?\}/;
my @entries;
@entries.push:  [.Str.split: /<[\{\}\,]>/, :skip-empty] for $matches.list;

expand($_,[],@entries,$matches.list).map(*.say);

sub expand($line,@stack,@entries, @positions) {
        my @results;
        if (@stack == @entries ) {
                my $l=$line;
                my $offset=0;
                for @stack.keys {
                        $l.substr-rw(@positions[$_].from-$offset, @positions[$_].chars)=@stack[$_];
                        $offset+=@positions[$_].chars-@stack[$_].chars;
                }
                return ($l,);
        }
        else {
                my @s;
                my @e=|@entries[@stack.elems];
                for @e  {
                        @s= (|@stack[], |$_);
                        @results.push( |expand($line, @s,@entries, @positions));
                }
                return @results;
        }
}
```

[Ulrich Rieke](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/ulrich-rieke/perl6/ch-1.p6) provided a fairly concise script:

``` Perl6
#works only if there are no spaces in the expansion bracket!
sub MAIN( **@ARGS ) {
  my $howoften = @ARGS.elems - 2 ;
  for (1..$howoften) -> $i {
      say "@ARGS[0] @ARGS[$i] @ARGS[*-1]" ;
  }
}
```

[Yet Ebreo](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/yet-ebreo/perl6/ch-1.p6)'s solution is using a recursive `expand` subroutine and is also quite concise once you remove lengthy comments as I did here (but follow the link if you want to read the comments):

``` Perl6
sub expand ($string) {
    my $mstring = $string;
    if ($mstring ~~ /\{(<-[{}]>*)\}/) {
        my ($l,$m,$r) = ($/.prematch,$0,$/.postmatch);
        for ($m.split(",")) {
            expand($l~$_~$r);
        }
    } else {
         say $mstring;
    }
}
```
To me, the code tends to be clearer without these comments, but that may just be me, YMMV.

[Jaldhar H. Vyas](https://www.braincells.com/perl/2019/10/perl_weekly_challenge_week_29.html) was away in a location with poor Internet access and therefore unable to complete the challenge in time. He nonetheless completed the challenge afterwards. He wrote an `expand` subroutine that first captures the data between braces, then splits ths captured string and use a `map` to build the various output strings:


``` Perl6
sub expand(Str $string) {
    $string ~~ / \{(.+)\} /;

    return $0.split(/\,\s*/).map({
        my $word = $_;
        (my $expansion = $string) ~~ s/\{.+\}/$word/;
        $expansion;
    });
}

sub MAIN(Str $string) {
    .say for expand($string);
}
```

## Task #2: Calling a C Function from Perl 6

This is derived in part from my [blog post](http://blogs.perl.org/users/laurent_r/2019/10/perl-weekly-challenge-29-file-type-and-digital-clock.html) made in answer to the [Week 29 of the Perl Weekly Challenge](https://perlweeklychallenge.org/blog/perl-weekly-challenge-029/) organized by  <a href="http://blogs.perl.org/users/mohammad_s_anwar/">Mohammad S. Anwar</a> as well as answers made by others to the same challenge.

The challenge reads as follows:

*Write a script to demonstrate calling a **C function**. It could be any user defined or standard **C** function.*

Note to the reader: it is now more or less official that Perl6 is going to be renamed "Raku." This series of blogs will have to get used to it, but I won't switch to Raku immediately, since there is no Raku compiler or ecosystem yet.

## My Solutions

Calling a function from a compiled C library is actually quite simple, using the [NativeCall](https://docs.perl6.org/language/nativecall) module.

The documentation linked above says that the simplest imaginable use of `NativeCall` would look something like this:

``` Perl6
use NativeCall;
sub some_argless_function() is native('something') { * }
some_argless_function();
```

The documentation then explains further that the first line imports various traits and types. The next line looks like a relatively ordinary Perl 6 sub declaration—with a twist. We use the "native" trait in order to specify that the sub is actually defined in a native library. The platform-specific extension (e.g., .so or .dll), as well as any customary prefixes (e.g., 'lib') will be added for you.

The first time you call "some_argless_function", the "libsomething" will be loaded and the "some_argless_function" will be located in it. A call will then be made. Subsequent calls will be faster, since the symbol handle is retained.

Of course, most functions take arguments or return values, but even that is quite simple. And I did not have any problem calling an existing function from the standard C library, but that's not a very interesting problem. I really wanted to do the whole thing, including building and using my own C library,

The only real difficulty for me was to build a C library for the purpose of this challenge. Although I haven't written any serious program in C for more than 15 years, I still remember enough about the C language to be able to write simple C functions without trouble, except for the irritating fact that a C compiler is much less user-friendly than Perl (for example, the C compiler complained when I omitted semi-colons (`;`) before closing curly braces, which, of course, you can do in Perl), but that's secondary. No, the difficulty for me was elsewhere: not having used the GCC compiler and related tools for anything serious for so many years, I had to navigate through the GCC documentation and some examples on the Internet to find out how to build a static or shared library with it and do quite a number of tests before it actually worked. As you've understood, I'm really not an expert on compiling and properly linking C libraries, so the solutions presented below may not be the best, but, at least, they worked for me.


### Starting With a Very Simple C Function

I started with a very simple C `calc.c` program providing an single `add` function:

``` C
#include <stdio.h>
int add (int a, int b) {
    return a + b;
}
```

and a simple Perl 6 script calling it:

``` Perl6
use NativeCall;

sub add(int32, int32)
    returns int32
    is native('./calc.dll')
    { * }

say add(3, 4);
```

Note that the Perl 6 script uses Perl 6 [native types](https://docs.perl6.org/language/nativetypes) (such as `int32`) for the variables passed to the C function.

After a number of faulty tries, I was able to find the right GCC compiling and linking flags and build a shared library, and run the program:

    $ gcc -c -fPIC calc.c -o calc.o

    $ gcc -shared calc.o -o calc.dll

    $ perl6 calc.p6
    7

Note that these examples are run on Cygwin, so they use the Linux bash syntax, but the C library receives a Windows name (`*.dll`).

After some further tests, I found that the compilation of the C library with GCC can be made simpler:

    $ gcc -shared -o calc.dll calc.c

If this were a tutorial on using C functions in Perl 6, I would have to explain in details the `gcc` options and probably to show how a `makefile` could automatize all this. But I'm just a beginner with C functions in Perl 6, I certainly cannot claim to offer a tutorial on this subject. My only ambition is to show how I solved a specific task.

### Benchmarking a Pure Perl 6 Program and a Native C Library

Now that we know how to run a basic function from a C library, we can try something more interesting: benchmarking a pure Perl 6 subroutine against a native C function. For this, I chose to use a recursive implementation of the Fibonacci sequence, since execution times get very long even for moderately large input. Of course, it is possible to memoize the recursive Fibonacci subroutine to obtain very small execution times, but I don't want to do it (at least not for the time being, we'll do it later), since I want to compare naïve recursive implementations to compare their durations.

The following `fibonacci.c` program provides a recursive `fib` function:

``` C
#include <stdio.h>
int fib (int a) {
    if (a == 0 || a == 1) {
        return 1;
    } else {
        return fib(a -1 ) + fib(a - 2);
    }
}
```

The `fibo.p6` program below uses both the native `fib` function and a pure Perl 6 `fib-p6` subroutine and record their execution times:

``` Perl6
use v6;
use NativeCall;

sub fib(int32)
    returns int32
    is native('./fibonacci.dll')
    { * }

sub fib-p6 (Int $num) {
    return 1 if $num == 0 or $num == 1;
    return fib-p6($num - 1) + fib-p6($num - 2);
}

sub MAIN (Int $num where * >= 0 = 36 ) {
    my $start-time = INIT now;
    say "C library function: ", fib($num);
    say "Duration C function: ", now - $start-time;
    my $now = now;
    say "P6 subroutine: ", fib-p6 $num;
    say "Duration P6 subroutine: ", now - $now;
}
```

Building the shared library and running the benchmark shows the following result:

    $ gcc -shared -o fibonacci.dll fibonacci.c

    $ perl6 fibo.p6
    C library function: 24157817
    Duration C function: 0.1306511
    P6 subroutine: 24157817
    Duration P6 subroutine: 37.425447

The result is really impressive: 0.13 seconds for the C `fib` function and 37 seconds for `fib-p6` the pure Perl 6 implementation. With the default 36 input value, the C function runs 286 times faster!

This being said, using the proper algorithm is often much better than using a faster programming language (when possible). Let's try to memoize manually the `fib-p6` pure Perl 6 subroutine by storing the Fibonacci numbers in a `@fibo` array for fast lookup:

``` Perl6
sub fib-p6 (Int $num) {
    state @fibo = 1, 1;    # initialization that removes the need for a base case
    @fibo[$num] = fib-p6($num - 1) + fib-p6($num - 2) unless defined @fibo[$num];
    return @fibo[$num];
}
```

Note that there are some possibilities for memoizing automatically a function, but I preferred to do it manually to show how it works and how simple it is, rather than giving an impression of magics.

The memoized pure Perl 6 subroutine is now about 130 times faster than the C function:

    $ perl6 fibo.p6
    C library function: 24157817
    Duration C function: 0.129651
    P6 subroutine: 24157817
    Duration P6 subroutine: 0.000997

I have to deeply thank Mohammad Anwar for having forced me with this challenge to go through this somewhat painful process, as I now have in my toolbox a very useful instrument that can be used when Perl 6 is not quite fast enough. I hope this blog post will be a useful example for others.

## Alternative Solutions

[Arne Sommer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/arne-sommer/perl6/ch-2.p6) used the `toupper` function of the standard C library (probably `libc` or `glibc`):

``` Perl6
use NativeCall;

sub toupper(uint8) returns uint8 is native('c', v6) { * }

sub to-upper ($string)
{
  return $string.comb.map({ toupper($_.ord).chr }).join;
}
```

[Daniel Mita](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/daniel-mita/perl6/ch-2.p6) also used a standard C library function, `getrandom`. In the event of an error, his program also uses the `strerror` function to retrieve the string describing the error.

``` Perl6
sub MAIN (
  UInt  $bytes = 8, #= Number of random bytes (defaults to 8)
  UInt :$flags = 0,
  --> Nil
) {
  given Buf.allocate: $bytes {
    given .&getrandom: $bytes, $flags {
      when -1 {
        die sub strerror( int32 --> Str ) is native {*}(
          cglobal |( 'c', v6; 'errno'; int32 ) );
      }
      when * < $bytes { die 'got fewer bytes than requested' }
    }
    .say;
  }
}

sub getrandom ( Buf, size_t, uint32 --> ssize_t ) is native {*}
```

[Kevin Colyer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/kevin-colyer/perl6/ch-2.p6) used functions from the `libqrencode` library to process QR codes:

``` Perl6
use NativeCall;

constant LIBQRENCODE = '/usr/lib/x86_64-linux-gnu/libqrencode.so.3';

# Level of error correction. (lowest to highest)
enum  QRecLevel <QR_ECLEVEL_L QR_ECLEVEL_M QR_ECLEVEL_Q QR_ECLEVEL_H>;

class QRcode is repr('CStruct') {
    has int32           $.version;
    has int32           $.width;
    has Pointer[uint8]  $.data; # sized width*width
}

# QRcode* QRcode_encodeString8bit   (   const char *    string, int     version, QRecLevel  level )
sub QRcode_encodeString8bit ( Str is encoded('utf8'), uint8, uint8 ) returns QRcode is native( LIBQRENCODE ) { * }
sub QRcode_free             ( QRcode )                                              is native( LIBQRENCODE ) { * }
```

[Markus Holzer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/markus-holzer/perl6/ch-2.p6) used the `MessageBoxW` function of a C Microsoft library, which pops up a message box.

``` Perl6
use NativeCall;

constant WCHAR              = uint16;
constant INT                = int32;
constant UINT               = uint32;
constant HANDLE             = Pointer[void];
constant LPWCTSTR           = CArray[WCHAR];
constant MB_ICONEXCLAMATION = 0x00000030;

sub MessageBoxW( HANDLE, LPWCTSTR, LPWCTSTR, UINT ) is native('user32') returns INT { * };

MessageBoxW( my $handle, to-c-str("Raku is awesome"), to-c-str("Hello World"), MB_ICONEXCLAMATION );

sub to-c-str( Str $str ) returns CArray[WCHAR]
{
    my @str := CArray[WCHAR].new;
    for ( $str.comb ).kv -> $i, $char { @str[$i] = $char.ord; }
    @str[ $str.chars ] = 0;
    @str;
}
```

[Noud](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/noud/perl6/ch-2.p6) wrote a `rot13` C function performing ROT13 encryption (where all letters are shifted in the alphabet by 13 positions so that the same program can be used for both encrypting and decrypting):

``` C
#include <ctype.h>
#include <stdlib.h>
#include <string.h>

char *rot13(char *s) {
    const size_t s_len = strlen(s);
    char *result = malloc((s_len + 1) * sizeof(char));

    for (size_t i = 0; i < s_len; i++) {
        if (isalpha(s[i])) {
            if ((tolower(s[i]) - 'a') < 13) {
                result[i] = s[i] + 13;
            } else {
                result[i] = s[i] - 13;
            }
        } else {
            result[i] = s[i];
        }
    }

    result[s_len] = '\0';

    return result;
}
```

The shared C library can be build with the following `make.sh` shell script:

``` sh
gcc -shared -o rot13.so rot13.c
```

And this is the Perl 6 program:

``` Perl6
use NativeCall;

sub rot13(Str) returns Str is native('./rot13.so') {*};

my $enc = rot13("hello perl weekly challenge!");
my $dec = rot13($enc);

say "ROT13 encryption: $enc";
say "ROT13 decryption: $dec";
```

[Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/joelle-maslak/perl6/ch-2.p6) used a native `sleep` C function (presumably from one of the Unix/Posix libraries, such as `unistd`)

``` Perl6
use v6;

use NativeCall;

sub MAIN(UInt:D $seconds = 2) {
    my $ret = native-sleep($seconds);
    say "Sleep returned a value of $ret";
}

my sub native-sleep(uint64 -->uint64) is native is symbol('sleep') { * }
```

[Roger Bell West](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/roger-bell-west/perl6/ch-2.p6) used the standard C `printf` function:

``` Perl6
use NativeCall;

our sub cpf(Str, Str --> int32) is native(sub{'libc.so.6'}) is symbol('printf') { * }

cpf("%s\n",'a string passed from perl6');
```

[Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/ruben-westerberg/perl6/ch-2.p6) used the `getuid` C function (presumably from one of the Unix/Posix libraries, such as `inistd`):

``` Perl6
use NativeCall;
sub getuid() returns uint32   is native { * };
put "User ID: "~getuid;
```

[Ulrich Rieke](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/ulrich-rieke/perl6/ch-2.p6) used the `strcmp` function of the standard C library:

``` Perl6
use NativeCall ;
constant LIBC = '/lib/x86_64-linux-gnu/libc.so.6' ;
sub strcmp( CArray[uint8], CArray[uint8]) returns int32 is native(LIBC) { * } ;
```

[Yet Ebreo](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-029/yet-ebreo/perl6/ch-2.p6)'s solution looks very much like my second solution: he implemented a C function to compute a Fibonacci number, probably something like this (at least, that what he used in his Perl 5 implementation):

``` C
unsigned long fib(int n) {
    if ( n == 0 )
        return 0;
    else if ( n == 1 )
        return 1;
    else
        return ( fib(n-1) + fib(n-2) );
}
```

He then proceeded to compare the C function with a naïve pure Perl 6 implementation and with a memoized (`is cached`) Perl 6 implementation:

``` Perl6
use NativeCall;
use experimental :cached;
sub fib(int32) returns int32 is native('fib.so') {*}

sub MAIN () {

    my $start = now;
    print (perl_fib($_)~" ") for 1..36;

    say "\nRun Time (Perl): "~(now - $start)~" sec\n";

    $start = now;
    print (perl_fib_cached($_)~" ") for 1..36;

    say "\nRun Time (Perl-Cached): "~(now - $start)~" sec\n";

    $start = now;
    print (fib($_)~" ") for 1..36;

    say "\nRun Time: (NativeCall)"~(now - $start)~" sec\n";
}

sub perl_fib($n)  { ($n == 0) ?? 0 !! ($n == 1) ?? 1 !! perl_fib($n-1)+perl_fib($n-2) }
sub perl_fib_cached($n) is cached { ($n == 0) ?? 0 !! ($n == 1) ?? 1 !! perl_fib_cached($n-1)+perl_fib_cached($n-2) }
```

Running Yet's program yields the following output:

    # perl6 .\ch-2.p6 32
    # 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181 6765 10946 17711 28657 46368 75025 121393 196418 317811 514229 832040 1346269 2178309 3524578 5702887 9227465 14930352
    # Run Time (Perl): 74.794843 sec
    #
    # 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181 6765 10946 17711 28657 46368 75025 121393 196418 317811 514229 832040 1346269 2178309 3524578 5702887 9227465 14930352
    # Run Time (Perl-Cached): 0.029755 sec
    #
    # 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181 6765 10946 17711 28657 46368 75025 121393 196418 317811 514229 832040 1346269 2178309 3524578 5702887 9227465 14930352
    # Run Time: (NativeCall)0.31090124 sec

We can see here again that the C function is much faster than the naïve pure Perl 6 implementation, but the P6 memoized version (`Perl-Cached`) is much faster than the C function.

[Jaldhar H. Vyas](https://www.braincells.com/perl/2019/10/perl_weekly_challenge_week_29.html) was away in a location with poor Internet access and therefore unable to complete the challenge in time. He nonetheless completed the challenge afterwards. He first wrote a C program containing a simple `hello` function displaying "Hello world!" on the screen. This is the C function:

``` C
void hello() {
    puts("Hello world!");
}
```

This is the `Hello` Perl 6 module using using the C `hello` function:

``` Perl6
use v6;
unit module Hello;

use NativeCall;

sub libhello is export {
    return '../c/libhello.so';
}

sub hello() is native(&libhello) is export {*};
```

And, this is an example of Perl 6 code calling the aforesaid module.

``` Perl6
use lib '.';
use Hello;

hello();
```

## SEE ALSO

Three blog posts this time:

Arne Sommer: https://perl6.eu/bracen-c.html;

Yet Ebrao: https://doomtrain14.github.io/pwc/2019/10/13/pwc_calling_c.html. Yet's blog post really relates to his Perl 5 implementation of the challenge, but it still does shed some light on his Perl 6 implementation.

Jaldhar H. Vyas: https://www.braincells.com/perl/2019/10/perl_weekly_challenge_week_29.html.

## Wrapping up

Please let me know if I forgot any of the challengers or if you think my explanation of your code misses something important (send me an e-mail or just raise an issue against this GitHub page).

