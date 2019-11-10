---
title: "Laurent Rosenfeld Weekly Review: Challenge - 031"
date: 2019-11-03T00:00:00+00:00
description: "Laurent Rosenfeld Weekly Review: Challenge - #031."
type: post
image: images/blog/p6-review-challenge-031.jpg
author: Laurent Rosenfeld
tags: ["Raku"]
---
***
# Raku Solutions Weekly Review
***

## Task #1: Illegal Division by Zero


This is derived in part from my [blog post](http://blogs.perl.org/users/laurent_r/2019/10/perl-weekly-challenge-31-illegal-division-by-zero-and-dynamic-variables.html) made in answer to the [Week 31 of the Perl Weekly Challenge](https://perlweeklychallenge.org/blog/perl-weekly-challenge-031/) organized by  <a href="http://blogs.perl.org/users/mohammad_s_anwar/">Mohammad S. Anwar</a> as well as answers made by others to the same challenge.

The challenge reads as follows:

*Create a function to check divide by zero error without checking if the denominator is zero.*

## My Solution

Perl 6/Raku has very rich [error handling features](https://docs.perl6.org/language/exceptions), most notably the [Exception class](https://docs.perl6.org/type/Exception). Without going into all the lengthy details, let us say that it's possible to handle exceptional circumstances by supplying a `CATCH` block. To solve the challenge can be as simple as this:

``` Perl6
use v6;

sub MAIN (Numeric $numerator, Numeric $denominator) {
    say "Result of division is: ", $numerator / $denominator;
    CATCH {
        say $*ERR: "Something went wrong here: ", .Str;
        exit;
    }
}
```

Using this script first with legal parameters and then with an illegal 0 denominator produces the following output:

    $ perl6 try-catch.p6  8 4
    Result of division is: 2

    $ perl6 try-catch.p6  8 0
    Something went wrong here: Attempt to divide by zero when coercing Rational to Str

An exception object is usually contained in the `$!` special variable, but a `CATCH` block topicalizes the exception object, meaning that it becomes available in the `$_` topical variable (hence the `.Str` syntax above is sufficient to obtain the description of the exception).

Although it is not really needed here, it may sometimes be useful to define the scope of the `CATCH` block by enclosing it in a `try` block, for example:

``` Perl6
use v6;

sub MAIN (Numeric $numerator, Numeric $denominator) {
    try {
        say "Result of division is: ", $numerator / $denominator;
        CATCH {
            say $*ERR: "Something went wrong here: ", .Str;
            exit;
        }
    }
}
```

Actually, defining a `try` block (it doesn't really have to be a block, a simple statement will also work) creates an implicit `CATCH` block, and this may be used to contain the exception:

``` Perl6
use v6;

sub MAIN (Numeric $numerator, Numeric $denominator) {
    try {
        say "Result of division is: ", $numerator / $denominator;
    }
}
```

The above program does not die and doesn't print anything but exits normally (with the successful exit code, 0, on Unix-like systems) when you pass a zero value for the denominator. We're in effect silencing the exception. Even if you don't want to abort the program when encountering such an error, you might still prefer to tell the user that something went wrong with a message containing the description of the caught exception:

``` Perl6
use v6;

sub MAIN (Numeric $numerator, Numeric $denominator) {
    try {
        say "Result of division is: ", $numerator / $denominator;
    } or say "Houston, we've had a problem here: ",  $!.Str;
}
```

which outputs the following:

    $ perl6 try-catch.p6  8 4
    Result of division is: 2

    $ perl6 try-catch.p6  8 0
    Houston, we've had a problem here: Attempt to divide by zero when coercing Rational to Str

## Alternative Solutions

[Adam Russell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/adam-russell/perl6/ch-1.p6) has been participating to the challenge in Perl 5 since the very beginning, but is participating to the challenge in Perl 6 / Raku for the first time (if I'm not wrong). His solution uses a `try` block with an embedded `CATCH` block:

```Perl6
try {
    my $x = 9;
    my $y = 0;
    say $x / $y;
    CATCH {
        default {
            say "caught an error: " ~ .^name;
        }
    }
}
```

Note also that Adam Russell also suggested a solution in C++.

[Arne Sommer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/arne-sommer/perl6/ch-1.p6) used a `try` [statement prefix](https://docs.perl6.org/language/statement-prefixes#index-entry-try_(statement_prefix)-try) to catch any error in the division.

``` Perl6
unit sub MAIN (Numeric $a = 10, Numeric $b = 0);
my $c = $a / $b;
try say "a/b = $c";
say "Division by zero detected." if $!;
```

Arne's program works well in its own context. However, this may be nitpicking, but the error detected by `try` could be something else than a division by zero, for example a non-numerical argument to the division. Consider this test under the REPL:

    > try say 10 / "b";
    Nil
    > say $!
    Cannot convert string to number: base-10 number must begin with valid digits or '.' in '<HERE>b' (indicated by <HERE>)
      in block <unit> at <unknown file> line 2

The fact that `$!` is populated doesn't necessarily mean that the problem was a division by zero. So, it might be wise to check the content of `$_`.

[Kevin Colyer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/kevin-colyer/perl6/ch-1.p6) use a `try` block, but apparently did not succeed to get an exception with a simple division by zero such as `my $c = 1/0;` computation and therefore had to use a trick such as `"{$a/$b}"`:

``` Perl6
sub Is_DivByZero($a,$b){
    my Bool $result=False;
    my $misc;
    try {    $misc= "{$a/$b}" ; } ; # NOTE why does $misc = $a/$b not throw an exception! ????????????
    if $! {
        $result= True;
        # say "$a / $b failed with " ~ $!.^name
    }
    return $result;
}
```

Let me try to answer Kevin's interrogation. I have read in the past somewhere in the documentation an explanation about why `my $c = 1/0;` doesn't throw an exception immediately, but only when one tries to use `$c` is used, but can no longer find it right now. Let me try to explain what I understood at the time. From what I remember, the idea is that there is no reason to throw an exception just because you compute an illegal value, but that the exception should be raised only when you try to use that illegal value. The `my $c = 1/0;` leads only to a [Failure](https://docs.perl6.org/type/Failure), i.e. a *soft* or *unthrown* exception.  In other words, we could say that `my $c = 1/0` sort of throws a lazy exception that doesn't become real until you use that `$c` illegal value. I can understand the idea behind this, although I'm not entirely convinced that it is better to postpone the moment the exception is raised, but so it is. Anyway, the idea here is that Kevin gets the exception only when he tries to convert the result of the division by zero computation into a string.

[Mark Senn](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/mark-senn/perl6/ch-1.p6) provided three possible solutions:

``` Perl6
sub div1($a, $b) {
    my $c = $a / $b;
    return $c  //  Inf;
}

sub div2($a, $b) {
    my $c = $a / $b;
    ($c == Inf)  and  fail '/0 or other problem';
    return $c;
}

sub div3($a, $b) {
    my $c;
    try {
        CATCH {
            when (X::Numeric::DivideByZero)  { return '  /0 or other problem'; }
        }
        $c = $a / $b;
    }
    return "  $c";
}

sub MAIN() {
    my $n = 10;
    print 'div1:';
    for (0,2) -> $d {
        my $c = div1($n, $d);
        ($c == Inf)
            ??  '  /0 or other problem'.print
            !!  "  $c".say;
    }
    print 'div2:';
    for (0,2) -> $d {
        with div2($n, $d) -> $c {
            "  $c".say;
        }  else  {
            "  {.exception.message}".print;
        }
    }
    print 'div3:';
    for (0,2) -> $d {
        # This won't work without using ".Num".
        my $c = div3($n.Num, $d.Num);
        $c.print;
    }
    ''.say;
}
```

[Markus Holzer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/markus-holzer/perl6/ch-1.p6) suggested a two-line script:

``` Perl6
say "Division by zero" without try ( 1/0 ).Str;
say "Division is okay" with try ( 1/1 ).Str;
```

The first line outputs a "Division by zero" error and the second one doesn't, as expected. But I still don't really understand what Markus tried to prove with that.

[Noud](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/noud/perl6/ch-1.p6) suggested a [stereographic projection](https://en.wikipedia.org/wiki/Stereographic_projection) (on a complex sphere) where a division by zero is not an error (a division by zero produces the North Pole of the complex sphere). Please follow the link to understand Noud's idea.

``` Perl6
sub infix:<%/>($x, $y) {
    my $z = Complex.new($x * $y / ($x**2 + $y**2), $x**2 / ($x**2 + $y**2));
    if ($z === i) {
        # If z is the north pole, the inverse stereographic projection is
        # not a number. (this is actually the perl weekly challenge)
        NaN;
    } else {
        # For fun, use the inverse stereographic projection to compute x / y.
        $z.re / (1 - $z.im);
    }
}
```

[Simon Proctor](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/simon-proctor/perl6/ch-1.p6) suggested a `safe-division` subroutine:

``` Perl6
sub safe-division( Numeric $nu, Numeric $de ) {
    try {
        ($nu/$de).Str();
        return True;
    }
    return False;
}
```

[Tyler Limkemann](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/tyler-limkemann/perl6/ch-1.p6), a new member of the team, suggested this very simple solution:

``` Perl6
CATCH { default { "can't divide by 0!".say } }
(1/0).say;
```

[Athanasius](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/athanasius/perl6/ch-1.p6) provided, as usual, a somewhat verbose solution using a `try`block:

``` Perl6
my Real constant $DEFAULT-DIVIDEND = 1;
my Real constant $DEFAULT-DIVISOR  = 0;

sub MAIN
(
    Real:D $dividend = $DEFAULT-DIVIDEND,
    Real:D $divisor  = $DEFAULT-DIVISOR,
)
{
    try
    {
        my Real $quotient = $dividend / $divisor;

        "$dividend / $divisor = $quotient".say;
    }

    if $!
    {
        if $! ~~ rx/ ^ Attempt \s to \s divide .+ by \s zero /
        {
            "$dividend / $divisor = DIVIDE BY ZERO ERROR".say;
        }
        else
        {
            $!.throw;
        }
    }

    "\nNormal exit".say;
}
```

[Jaldhar H. Vyas](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/jaldhar-h-vyas/perl6/ch-1.p6) created a `isDividedByZero` subroutine to handle exception conditions with a `CATCH` block:

``` Perl6
sub isDividedByZero($numerator, $denominator) {
        ($numerator / $denominator).grep({});
        CATCH {
            default {
                return True;
            }
        }
    return False;
}
```
[Javier Luque](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/javier-luque/perl6/ch-1.p6), another new member of the team, used a `try` block with an embedded `CATCH` block:

``` Perl6
sub divide-by-zero-check(Str $statement) {
    try {
        my $answer = Rat($statement);
        say $answer;
        CATCH {
            default { say "divide by 0 error, $_" }
        }
    }
}
```

[Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/joelle-maslak/perl6/ch-1.p6) used a `CATCH` block specifying the `X::Numeric::DivideByZero` exception, so that her program will pick only that error and no other:

``` Perl6
sub MAIN($numerator, $denominator) {
    if test-for-div-by-zero($numerator, $denominator) {
        say "Denominator is zero";
    } else {
        say "Denominator is not zero";
    }
}
sub test-for-div-by-zero($numerator, $denominator) {
    ($numerator / $denominator).Int.sink;
    return; # Not div by zero
    CATCH {
        when X::Numeric::DivideByZero {
            return 1; # Div by zero
        }
    }
}
```

[Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/ruben-westerberg/perl6/ch-1.p6) used a `try` statement prefix and tested the value of the `$!` error variable populated by `try` when it catches an exception:

``` Perl6
my $numerator=@*ARGS[0]//1;
my $denominator=@*ARGS[1]//0;
my $result;

try $result=($numerator/$denominator).Str;

put "Division ok: $numerator/$denominator = $result" unless $!;
put "Division failed: Divide by zero" if $!;
```

[Yet Ebreo](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/yet-ebreo/perl6/ch-1.p6) created a `div_zero_check` subroutine using a `try` block and testing the `$!` error variable (pretty much like like Ruben):

``` Perl6
sub div_zero_check ($n, $d) {
    my $r;
    try {
        $r = $n / $d;
        #Error is not raised when the result of division is not used
        say $r;
    }
    $! && say "Division by zero detected";
}
```

## Task #2: Dynamic Variable Name

This is derived in part from my [blog post](http://blogs.perl.org/users/laurent_r/2019/10/perl-weekly-challenge-31-illegal-division-by-zero-and-dynamic-variables.html) made in answer to the [Week 31 of the Perl Weekly Challenge](https://perlweeklychallenge.org/blog/perl-weekly-challenge-031/) organized by  <a href="http://blogs.perl.org/users/mohammad_s_anwar/">Mohammad S. Anwar</a> as well as answers made by others to the same challenge.

The challenge reads as follows:

*Create a script to demonstrate creating dynamic variable name, assign a value to the variable and finally print the variable. The variable name would be passed as command line argument.*

There are some scripting languages (such as various Unix shells or the VMS equivalent, the DCL language) where it is possible to dynamically create variable names. This is sometimes useful, but it tends to mess up the script's name space. It seems that it can also be done in PHP (but, then, it is PHP, if you see what I mean).

It is *possible* but strongly discouraged to do it in Perl 5 using symbolic references. If you want to know why it is considered to be bad to do it in Perl 5, please read Mark-Jason Dominus's article in three installments on the subject:

* [Why it's stupid to `use a variable as a variable name'](https://perl.plover.com/varvarname.html);

* [A More Direct Explanation of the Problem](https://perl.plover.com/varvarname2.html);

* [What if I'm Really Careful?](https://perl.plover.com/varvarname3.html).

The solution to avoid symbolic references in Perl 5 is to use a hash. Please read my other blog post linked above if you want to know more.

## My Solution

My first reaction is that I did not think that there is anything like symbolic references in Perl 6/Raku and that it was possible to create a variable dynamically. So, it seemed that it was not possible to literally "demonstrate creating dynamic variable name" in Perl 6/Raku. What we can do, however, is, like in P5, to use a hash:

``` Perl6
use v6;

sub MAIN (Str $name, Str $value) {
    my %hash = $name => $value;
    say "The item is called $name and its value is %hash{$name}";
}
```

This program displays the name of the item and its value:

    $ perl6 sym_ref.p6 foo bar
    The item is called foo and its value is bar

It turns out that I was wrong and that there are some ways to dynamically create variables in Perl6/Raku, as several of the alternative solutions below will show. So, it can be done, but I very much doubt it is a good idea, as I tend to think that the reasons outlined by Mark Jason Dominus on the context of Perl 6 also apply to Perl6/Raku.

## Alternative Solutions

[Adam Russell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/adam-russell/perl6/ch-2.p6) has been participating to the challenge in Perl 5 since the very beginning, but is participating to the challenge in Perl 6 / Raku for the first time (if I'm not wrong). His very imaginative solution creates a variable name by concatenating `"\$"` with the first argument passed to the script, then creates on the fly a `Temp.pm6` file containing a module printing out newly created variable, runs the module (with `require` to import the module at run time) and finally deletes the `Temp.pm6` file.

``` Perl6
my $variable = "\$" ~ @*ARGS[0];
my $value = @*ARGS[1];
spurt "Temp.pm6", "unit module Temp; my $variable = $value; say \"The value of \\$variable is $variable.\"";
use lib ".";
require Temp;
unlink "Temp.pm6";
```

See also his quite clever C++ implementation using macros to create dynamically a variable.

[Arne Sommer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/arne-sommer/perl6/ch-2.p6) also thought that it is not possible to create a variable dynamically in Raku, but argued that it is possible to access an already existing one with the `::()` operator:

``` Perl6
unit sub MAIN ($name = '$a');

my $a = 12;
my $b = 15;
my $c = 19;
my $d = 26;
my $e = 99;

say "The value of $name: " ~ ::($name);
```

So, after all, I was wrong: there appears to exist something like [symbolic references](https://docs.perl6.org/language/packages#Interpolating_into_names) in Raku, or, at least, it is possible to interpolate strings as variable names.

[Kevin Colyer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/kevin-colyer/perl6/ch-2.p6) used essentially the same technique as Arne:

``` Perl6
sub MAIN($name='test'){
    # From http://rosettacode.org/wiki/Dynamic_variable_names#Perl_6
    my $var=$name;
    say "variable named $var is {$::('var')}";
    $::('var')=137;
    say "variable named $var is {$::('var')}";
}
```

[Mark Senn](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/mark-senn/perl6/ch-2.p6) tried various ways to implement indirect names or symbolic references, and finally used a hash:

``` Perl6
sub MAIN($name, $value)
{
    say "$name    $value";

    # Using
    #     my $$name = $value;
    # gave
    #     Cannot declare a variable by indirect name (use a hash instead?)
    #
    # Using
    #     ${$name} = $value;
    # gave
    #     Unsupported use of ${$name}; in Perl 6 please use $($name) for hard ref
    #     or $::($name) for symbolic ref
    #
    # Using
    #     my $::($name);
    # gave
    #     Cannot declare a variable by indirect name (use a hash instead?)
    my %hash;
    %hash{$name} = $value;
    %hash{$name}.say;
}
```

[Markus Holzer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/markus-holzer/perl6/ch-2.p6) created a [VariableFactory](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/markus-holzer/perl6/lib/VariableFactory.pm6) class:

``` Perl6
class VariableFactory { * }
sub EXPORT( $var-name )
{
    $var-name
        ?? %( '$*' ~ $var-name => 42 )
        !! %();
}
```
and used it in his program:

``` Perl6
INIT use VariableFactory ( @*ARGS[0] );
sub MAIN( $var-name ) { say ::( '$*' ~ $var-name ) }
```

Markus's program creates the variable name through concatenation of the `'$*'` and `$var-name` components within the `::( ... )` construct, but I must admit that I don't fully understand the syntax. Well, no, it's not really the syntax that puzzles me, it's quite simple, after all, it is rather the fact that I have some difficulty to see actual use cases for such a contrived construct.

[Noud](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/noud/perl6/ch-2.p6) made something similar, although quite simpler, but I also have some difficulty understanding how this could be useful:

``` Perl6
sub MAIN($name, $value) {
    GLOBAL::{'$' ~ $name} = $value;
    say '$' ~ $name ~ " = " ~ GLOBAL::{'$' ~ $name};
}
```

[Tyler Limkemann](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/tyler-limkemann/perl6/ch-2.p6) created a `Contextualizer` class using `nqp` (not quite Perl), a lower-level subset of the Perl 6 syntax.

``` Perl6
use MONKEY;
use nqp;

class Contextualizer {
  submethod ctxsave(*@args --> Nil) {
    $*MAIN_CTX := nqp::ctxcaller(nqp::ctx());
  }
}

sub MAIN(Str $s) {
  my $compiler = nqp::getcomp('perl6');

  my $*MAIN_CTX := nqp::ctx();
  my $*CTXSAVE := Contextualizer;

  $compiler.eval("my \${$s.uc} = ':)'", :outer_ctx($*MAIN_CTX), :interactive(1));
  $compiler.eval("\${$s.uc}.say", :outer_ctx($*MAIN_CTX), :interactive(1));
}
```

[Athanasius](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/athanasius/perl6/ch-2.p6) used the `EVAL` built-in routine which makes it possible to execute a string containing valid Perl 6/ Raku code:

``` Perl6
use MONKEY-SEE-NO-EVAL;
my Real constant $VALUE = 42;

sub MAIN(Str:D $variable-name)
{
    # Declare the variable and assign a value to it
    my Str $expression = "my \$$variable-name = $VALUE;";
    # Print the variable
    $expression ~= " qq[\\\$$variable-name = \$$variable-name].say;";
    # Declaration, assignment, and printing must be EVALuated together to avoid
    # a "Variable ... is not declared" error in the say statement
    EVAL $expression;
}
```

Note that `EVAL` is considered to be a dangerous function and therefore requires the `use MONKEY-SEE-NO-EVAL;` pragma to be activated.

[Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/joelle-maslak/perl6/ch-2.p6) also used the `EVAL` built-in routine:

``` Perl6
use MONKEY-SEE-NO-EVAL;

# Note all sorts of bad things can still be done with this code - like a
# user might pass in the name of an existing variable, might start a
# variable name with a number, etc.

sub MAIN(Str:D $var-name, $value) {
    die "Invalid variable name" if $var-name !~~ m/^ \w+ $/;  # Doesn't catch everything
    EVAL("my \$OUR::$var-name = { $value.perl }");
    EVAL("say '\$$var-name is set to: ' ~ \$OUR::$var-name");
}
```

[Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/ruben-westerberg/perl6/ch-2.p6) also  the `EVAL` built-in routine:

``` Perl6
use MONKEY-SEE-NO-EVAL;
my $name=@*ARGS[0]//"var"~1000.rand.Int;
my $value=@*ARGS[1]//1.rand;
{
    put "Using Module/eval";
    module D {
        EVAL "our \$$name=\"$value\"";
    }
    put $D::($name);
    put "Variable name: $name Value: {$D::($name)}";
}

put "";

{
    put "Using Hash";
    my %h;
    %h{$name}=$value;
    put "Variable name: $name Value: %h{$name}";

}
```

[Jaldhar H. Vyas](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/jaldhar-h-vyas/perl6/ch-2.p6) suggested this quite simple solution:

``` Perl6
sub MAIN( Str $var ) {
    my $newvar = $var;
    $($newvar) = 42;

    say "$var = ", $($newvar);
}
```

[Javier Luque](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-031/javier-luque/perl6/ch-2.p6) used the `GLOBAL` name space to perform the task:

``` Perl6
sub MAIN (Str $variable) {
    # Randomly populate the random value
    my $random_value = (0..^9).roll(12).join;
    GLOBAL::{'$' ~ $variable} = $random_value;

    # Say dynamic variable name and random value
    say 'Dynamic variable name: ' ~  $variable;
    say 'Random value: ' ~ GLOBAL::{'$' ~ $variable};

    # test like this: perl6 ch2.p6 test
    say 'Variable test is: ' ~ $*test if ($variable eq 'test');
}
```


## SEE ALSO

Three blog posts this time:

* Adam Russell: https://adamcrussell.livejournal.com/10620.html;

* Arne Sommer: https://raku-musings.com/dynamic-zero.html;

* Jaldhar H. Vyas: https://www.braincells.com/perl/2019/10/perl_weekly_challenge_week_31.html;

* Javier Luque: https://perlchallenges.wordpress.com/2019/10/24/perl-weekly-challenge-031/.

## Wrapping up

Please let me know if I forgot any of the challengers or if you think my explanation of your code misses something important (send me an e-mail or just raise an issue against this GitHub page).
