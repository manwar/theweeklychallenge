---
title: "Laurent Rosenfeld Weekly Review: Challenge - 042"
date: 2020-01-20T00:00:00+00:00
description: "Laurent Rosenfeld Weekly Review: Challenge - #042."
type: post
image: images/blog/p6-review-challenge-042.jpg
author: Laurent Rosenfeld
tags: ["Raku"]
---
***
# Raku Solutions Weekly Review
***

## Task #1: Octal Numbers

This is derived in part from my [blog post](http://blogs.perl.org/users/laurent_r/2020/01/perl-weekly-challenge-42-octal-numbers-and-balanced-parentheses.html) made in answer to the [Week 42 of the Perl Weekly Challenge](https://perlweeklychallenge.org/blog/perl-weekly-challenge-042/) organized by  <a href="http://blogs.perl.org/users/mohammad_s_anwar/">Mohammad S. Anwar</a> as well as answers made by others to the same challenge.

The challenge reads as follows:

*Write a script to print decimal number 0 to 50 in Octal Number System.*

*For example:*

    Decimal 0 = Octal 0
    Decimal 1 = Octal 1
    Decimal 2 = Octal 2
    [ ... ]

## My solution

Raku has a [base](https://docs.raku.org/routine/base) method to convert a number into a string representation in any base between 2 and 36.

With this, it is so easy that we can use a one-liner:

    $ perl6 -e 'say "Decimal: $_ \t=  Octal ", .base(8) for 0..50;'
    Decimal: 0      =  Octal 0
    Decimal: 1      =  Octal 1
    Decimal: 2      =  Octal 2
    Decimal: 3      =  Octal 3
    Decimal: 4      =  Octal 4
    Decimal: 5      =  Octal 5
    Decimal: 6      =  Octal 6
    Decimal: 7      =  Octal 7
    Decimal: 8      =  Octal 10
    Decimal: 9      =  Octal 11
    [ ... Lines omitted for brevity ... ]
    Decimal: 45     =  Octal 55
    Decimal: 46     =  Octal 56
    Decimal: 47     =  Octal 57
    Decimal: 48     =  Octal 60
    Decimal: 49     =  Octal 61
    Decimal: 50     =  Octal 62

## Alternative Solutions

### Using the `base`method

Many challengers used the same [base](https://docs.raku.org/routine/base) method as I did, as follows:

[Arne Sommer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-042/arne-sommer/raku/ch-1.p6):

``` Perl6
say "Decimal $_ = Octal { $_.base(8) }" for ^51;
```

[Daniel Mita]'https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-042/daniel-mita/raku/ch-1.sh) did it in the form of a one-liner:

``` Perl6
raku -e '.base(8).say for ^51'
```

[Markus Holzer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-042/markus-holzer/raku/ch-1.p6):

``` Perl6
.base(8).say for ^51
```

[Simon Proctor](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-042/simon-proctor/raku/ch-1.p6):

``` Perl6
for $start-val..$end-val -> \val {
    say "Decimal {val} = Octal {val.base(8)}";
```

[Ulrich Rieke](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-042/ulrich-rieke/raku/ch-1.p6):

``` Perl6
for (1..50) -> $i {
  say "Decimal $i = Octal " ~ $i.base(8).Str ;
}
```

### Using a Format String

Many other challengers used the `%o` option of the `printf`, `sprintf`, and `fmt` routines (which I also used in my Perl 5 solution):


[Burkhard Nickels](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-042/burkhard-nickels/raku/ch-1.p6):

``` Perl6
for (0 .. 50) {
    printf("Decimal: %d - Octal: %o\n",$_,$_);
}
```


[Noud Aldenhoven](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-042/noud/raku/ch-1.p6)

``` Perl6
say $_.fmt("Decimal $_ = Octal %o") for ^51;
```

[Jaldhar H. Vyas](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-042/jaldhar-h-vyas/raku/ch-1.sh) came back to the challenge after a pause. Welcome back, Jaldhar. He wrote a Raku one-liner along the same lines:

    perl6 -e '[0 .. 50].map({ printf("Decimal %d = Octal %o\n", $_, $_) });'

[Javier Luque](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-042/javier-luque/raku/ch-1.p6) used a format string (`%o`option) to do the job:

``` Perl6
sub to-octal(Int $i) {
    return sprintf('%o', $i);
}
```

[Roger Bell West](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-042/roger-bell-west/raku/ch-1.p6) also used a format string:

for (0..50) {
  printf('Decimal %d = Octal %o' ~ "\n",$_,$_);
}

[Ryan Thompson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-042/ryan-thompson/raku/ch-1.p6) also used a format string:

```Perl6
say (0..50).fmt('Decimal %1$2d = Octal %2o', "\n");
```

### Doing it the Hard Way

Two challengers decided to implement a full conversion algorithm:

[Kevin Colyer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-042/kevin-colyer/raku/ch-1.p6) knows that there are easier ways to do it, but decided to roll his own version, perhaps for the fun of the exercise. He did it in the old assembly language (or C hacker) way:

``` Perl6
sub dec-to-oct(Int $n is copy) returns Str {
    return "0" if $n==0;
    my Str $o = "";
    while $n>0 {
        $o= $n +& 7 ~ $o; # add lower three bits
        $n= $n +> 3     ; # shift off lower three bits
    }
    return $o;
}

say "Decimal $_ = Octal {dec-to-oct($_)} is sprintf conversion {sprintf "%o", $_}" for ^51;
```

Just in case you don't know or don't remember (I didn't and had to look it up), `+&` is the numeric bitwise `AND` operator, and `+>` is the integer bit shift to the right.

[Colin Crain](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-042/colin-crain/raku/ch-1.p6) used the standard CS integer division and remainder to compute octal numbers. Even though this is not required in the task, Colin even expanded the definition domain to Z (inclluding negative integers):

``` Perl6
sub MAIN () {

    for -50 .. 50 {
        printf "Decimal %3d = Octal %3d\n", $_, octal($_) ;
    }
}

sub octal ( $dec is copy ){
    my $out = "";
    my $sign = $dec < 0 ?? "-" !! "";
    $dec .= abs;
    my $rem;
    while ( $dec > 0 ) {
        $rem = $dec % 8;
        $dec = ($dec/8).floor;
        $out = $rem ~ $out;
    }
    $out = $sign ~ $out;
    return $out ?? $out !! 0;  ## needs to output 0 for 0
}
```

Colin provides a long comment explaining his algorithm, please follow the link if you want further explanations.

***

## Task #2: Balanced Parentheses

***

This is derived in part from my [blog post](http://blogs.perl.org/users/laurent_r/2020/01/perl-weekly-challenge-42-octal-numbers-and-balanced-parentheses.html) made in answer to the [Week 42 of the Perl Weekly Challenge](https://perlweeklychallenge.org/blog/perl-weekly-challenge-042/) organized by  <a href="http://blogs.perl.org/users/mohammad_s_anwar/">Mohammad S. Anwar</a> as well as answers made by others to the same challenge.

The challenge reads as follows:

*Write a script to generate a string with random number of ( and ) brackets. Then make the script validate the string if it has balanced brackets.*

*For example:*

    () - OK
    (()) - OK
    )( - NOT OK
    ())() - NOT OK

Well, I have a slight problem with this task requirement. A script generating a random number of random brackets will almost never generate balanced brackets, except when the maximal number of brackets is really small (say 2 or 4). So, I changed the task to writing a script that checks that strings passed to it have properly balanced parentheses.

## My Solutions

### Balanced Parentheses Using a Grammar

I admit that this may be slight technological overkill, but seeing such a task leads me immediately to use grammars, which are naturally capable to manage such tasks, since their rules can easily be called recursively to parse any number of nested parentheses. So, this is my first solution:

``` Perl6
use v6;

grammar Parens {
    token TOP { \s* <paren-expr>+ \s* }
    token paren-expr { | \s* <paren-pair> \s*
                       | '(' \s* <paren-expr>+ \s* ')' }
    token paren-pair { [ '(' \s* ')' ]+ }
}

for "()", "(  )", "(())", "( ( ))", ")(", "())()",
    "((( ( ()))))",  "()()()()", "(())(())" -> $expr {
    say "$expr - ", Parens.parse($expr) ?? "OK" !! "NOT OK";
}
```

The `TOP` token is any strictly positive number of `paren-expr`. A `paren-expr` is either a `paren-pair` or an opening parenthesis, followed by, recursively, another `paren-expr`, followed by a closing parenthesis. Note that this could most probably have been made simpler (only two tokens instead of three) if we had decided to remove all spaces of the string before parsing.

This script displays the following output:

    $ perl6 parens.p6
    () - OK
    (  ) - OK
    (()) - OK
    ( ( )) - OK
    )( - NOT OK
    ())() - NOT OK
    ((( ( ())))) - OK
    ()()()() - OK
    (())(()) - OK

### Balanced Parentheses Using a Stack

As I said, using grammars for such a simple task might be considered over-engineering. We had recently a challenge about reverse Polish notation that led us to use a stack. Recursion and stacks are intimately related. We could use a stack to perform the same task: push to the stack if we get a `(`, and pop from the stack if we get a `)`, unless the stack is empty; and, at the end, check that the stack is empty. Some people might think that this approach is conceptually simpler than a grammar. But I tend to think this is wrong. Except for a small typo, my grammar approach worked the first time I tested it. Not only is the stack code below significantly longer, but I had to debug the stack approach below for about 15 minutes before it got right:

``` Perl6
use v6;

sub check-parens (Str $expr) {
    my @stack;
    my $s = $expr;
    $s ~~ s:g/\s+//; # remove spaces;
    for $s.comb {
        when '(' { push @stack, $_; }
        when ')' {
            say "$expr: NOT OK" and return unless @stack;
            pop @stack;
        }
        default { say $s }
    }
    say "$expr: ", @stack.elems ?? "NOT OK" !! "OK";
}
for "()", "(  )", "(())", "( ( ))", ")(", "())()",
    "((( ( ()))))",  "()()()()", "(())(())" {
        check-parens($_)
}
```

This is the output:

    $ perl6 parens.p6
    (): OK
    (  ): OK
    (()): OK
    ( ( )): OK
    )(: NOT OK
    ())(): NOT OK
    ((( ( ())))): OK
    ()()()(): OK
    (())(()): OK


### Replacing the Stack by a Counter

In fact, we don't really need a stack, as we can use a simple counter starting at 0, which we increment when we get an opening parenthesis, and decrement when we get a closing parenthesis. If we get a closing parenthesis when the counter is 0, or if the counter is not 0 at the end of the parsing, then the parens are not properly balanced. The `check-parens` subroutine is rewritten as follows:

``` Perl6
sub check-parens (Str $expr) {
    my $count;
    my $s = $expr;
    $s ~~ s:g/\s+//; # remove spaces;
    for $s.comb {
        when '(' { $count++ }
        when ')' {
            say "$expr: NOT OK" and return unless $count;
            $count--;
        }
        default { say $s }
    }
    say "$expr: ", $count ?? "NOT OK" !! "OK";
}
```
The output is the same as before.

## Alternative Solutions

[Arne Sommer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-042/arne-sommer/raku/ch-2.p6) suggested a solution in which the most important element is a counter that is incremented for an opening parenthesis and decremented for a closing parenthesis, much along the idea of my last solution above:

``` Perl6
sub is-balanced ($brackets)
{
  return False if $brackets.chars % 2; # An odd number
  return False if $brackets.substr(0,  1) eq ')';
  return False if $brackets.substr(*-1,1) eq '(';

  my $count = 0;

  for $brackets.comb -> $char
  {
    if    $char eq '(' { $count++; }
    elsif $char eq ')' { $count--; }
    else { die "Illegal character $char"; }

    return False if $count < 0; # Unbalanced inside
  }

  return $count == 0;
}
```

[Daniel Mita](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-042/daniel-mita/raku/ch-2.p6) used a counter much in the same way as my last solution:

``` Perl6
my $count = 0;

for roll <( )>: (^$parens).pick {
  .say;
  when '(' { $count++ }
  when ')' { die 'close before open' if --$count < 0 }
}

if $count {
  die "$count unclosed";
}

'balanced'.say;
```

[Kevin Colyer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-042/kevin-colyer/raku/ch-2.p6) also used a counter (`$open`):

``` Perl6
sub match-brackets(Str $t) {
    # can never match condition
    return False if $t.chars < 2;

    # loop counting +1 for open -1 for close.

    # zero sum is matching
    # positive sum is non matching
    # negative is always non matching (and quick exit)
    my $open=0;
    for ^$t.chars -> $i {
        $open++ if $t.substr($i,1) eq '(';
        $open-- if $t.substr($i,1) eq ')';
        return False if $open < 0;
    }
    return $open == 0 ?? True !! False ;
}
```
[Noud Aldenhoven](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-042/noud/raku/ch-2.p6) also used a counter:

``` Perl6
sub balanced($brackets) {
    my $c = 0;
    for $brackets.comb() -> $b {
        if ($b === '(') {
            $c++;
        } elsif (--$c < 0) {
            return False;
        }
    }
    return $c == 0;
}
```

[Simon Proctor](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-042/simon-proctor/raku/ch-2.p6) also used a counter:

``` Perl6
sub balanced( Str \brackets ) {
    my @list = brackets.comb("");
    my $count = 0;
    for @list -> \bracket {
        given bracket {
            when "(" {
                $count++;
            }
            when ")" {
                $count--;
            }
        }
        return False if $count < 0;
    }
    return $count == 0;
}
```

[Ulrich Rieke](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-042/ulrich-rieke/raku/ch-2.p6) implemented two separate counters:

```Perl6
sub validateBrackets( Str $term --> Bool) {
  if ( $term ~~ /^ ')' | '(' $/ ) {
      return False ;
  }
  return countLetter( $term , '(') == countLetter( $term , ')') ;
}
sub countLetter( Str $term , Str $letter --> Int) {
  my $count = 0 ;
  for ( $term.comb) -> $let {
      if ( $let eq $letter ) {
    $count++ ;
      }
  }
  return $count ;
}
```

I'm afraid Ulrich's code returns the wrong answer for some input strings. For example, it appears it would validate a string such as `"())(()"`, where as it is improperly balanced (even though it has the same number of opening and closing parentheses), as it starts with one opening parenthesis, followed by two closing parentheses, so that the second closing parentheses has no matching opening parenthesis *prior to* it..


[Markus Holzer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-042/markus-holzer/raku/ch-2.p6) didn't quite use a grammar, but nonetheless used the grammar main building blocks, named rules (in this case, more precisely, tokens), to solve the problem:

``` Perl6
sub test-string( $string )
{
    my token opening-brace { \( };
    my token closing-brace { \) };
    my token balanced-braces {
        ( <opening-brace>+ ) <closing-brace> ** { $0.chars }
    };
    so $string ~~ /^ <balanced-braces> $/;
}
```
[Burhhard Nickels](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-042/burkhard-nickels/raku/ch-2.p6) used a recursive `balanced_brackets` subroutine that removes a `()` pair each time it is called. When all such pairs have been removed (it is no longer found), then we know that the initial string was a properly balanced if there is no opening or closing parenthesis found. Phew, it took me a few minutes to understand the logic of his algorithm (essentially because I had originally missed that the found parentheses pairs are removed from the string and thought that they were just being matched).

``` Perl6
sub balanced_brackets ($arg) {
    my $str = $arg;  # Cannot assign to a read-only.
    my $found = ($str ~~ s/\(\)//);
    my $ok;
    if ($found) {
        $ok = balanced_brackets($str);
        return $ok;
    }
    else {
        if ( $str ~~ /\(|\)/ ) { return 0; }
        else { return 1; }
    }
}
```

In this case, I would think that a simple loop to remove the parentheses pairs would have been more natural and simpler that a recursive subroutine.

Note also that Burhhard is making a copy of the input parameter, because subroutine parameters are read-only by default. This is perfectly correct, but Raku offers some features making this simpler: you can use some traits (`is rw` or `is copy`) in the signature to make a parameter mutable or to make it a copy of the argument passed to the subroutine. So,

``` Perl6
sub balanced_brackets ($arg) {
    my $str = $arg;  # Cannot assign to a read-only.
```

could be replaced by something like:

``` Perl6
sub balanced_brackets ($str is copy) {
```

[Colin Crain](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-042/colin-crain/raku/ch-2.p6) used essentially the same technique of eliminating progressively all `()` pairs with a regex substitution:

```Perl6
sub validate (Str:D $orig) {
    my $str = $orig;
    unless $str.chars %% 2 { return "IMBALANCED - odd number of parens"};

    while $str ~~ s/\((.*?)\)/$0/ { ; }

    return ($str.chars == 0) ?? "PARENS BALANCED" !! "IMBALANCED - $str unmatched";
}
```

[Roger Bell West](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-042/roger-bell-west/raku/ch-2.p6) also used the same approach with regex substitutions to eliminate `()` pairs:

```Perl6
while ($s ~~ s:g/\(\)//) {
}
if ($s) {
  say "Invalid: $s";
} else {
  say "Valid.";
}
```

[Ryan Thompson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-042/ryan-thompson/raku/ch-2.p6) also used a regex substitution to eliminate `()` pairs, and did it in a very concise manner:

``` Perl6
sub balanced( Str $str is copy --> Bool ) {
    Nil while $str ~~ s:g/'()'//;
    $str.chars == 0
}
```
[Jaldhar H. Vyas](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-042/jaldhar-h-vyas/raku/ch-2.p6) used a stack, in spirit much similar to my second solution:

```Perl6
sub isBalanced(@brackets) {
    my @stack;
    (0 ..^ @brackets.elems).map({
        if @brackets[$_] ~~ '(' {
            @stack.push( '(' );
        } else {
            if !@stack.elems {
                return False;
            }
            @stack.pop;
        }
    });
    return @stack.elems == 0;
}
```
[Javier Luque](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-042/javier-luque/raku/ch-2.p6) used a counter:

``` Perl6
sub validate-string(Str $word) {
    my $open_p;
    for $word.comb -> $letter {
        $open_p++ if ($letter eq '(');
        $open_p-- if ($letter eq ')');
        return 0 if ($open_p < 0);
    }
    return ($open_p == 0);
}
```
[Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-042/ruben-westerberg/raku/ch-2.p6) built an array `@v` of counters and then checked that none of the counter was below 0 and that the last one was equal to 0:

``` Perl6
my $maxLength=@*ARGS[0]//20; #If no max on command line use 20
while 1 {
    my $str="";
    #make a random length string of upto $maxLength long
    $str~=(1.rand()+40).round.chr for 0..$maxLength.rand.Int;
    my @v= [\+] $str.comb.map({(ord($_)-40)*-2+1});

    if @v[*-1]==0 and !@v.grep(* < 0) {
        put "balanced: $str";
        sleep 1;
        next;
    }
    say "unbalanced: $str";
}
```

## SEE ALSO

Not less than six blog posts (besides mine) this time:

* Arne Sommer: https://raku-musings.com/octal-brace.html;

* Burkhard Nickels: https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-042/burkhard-nickels/perl/ch-2.pod;

* Jaldhar M. Vyas: https://www.braincells.com/perl/2020/01/perl_weekly_challenge_week_42.html;

* Javier Luque: https://perlchallenges.wordpress.com/2020/01/06/perl-weekly-challenge-042/;

* Ryan J. Thompson: http://www.ry.ca/2020/01/octal-representation/.

* Ryan J. Thompson: http://www.ry.ca/2020/01/balanced-parentheses/.

## Wrapping up

Please let me know if I forgot any of the challengers or if you think my explanation of your code misses something important (send me an e-mail or just raise an issue against this GitHub page).

If you want to participate to the Perl Weekly Challenge, please connect to [this site](https://perlweeklychallenge.org/).
