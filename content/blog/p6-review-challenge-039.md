---
title: "Laurent Rosenfeld Weekly Review: Challenge - 039"
date: 2019-12-29T00:00:00+00:00
description: "Laurent Rosenfeld Weekly Review: Challenge - #039."
type: post
image: images/blog/p6-review-challenge-039.jpg
author: Laurent Rosenfeld
tags: ["Raku"]
---
***
# Raku Solutions Weekly Review
***

## Task #1: Guest House

This is derived in part from my [blog post](http://blogs.perl.org/users/laurent_r/2019/12/perl-weekly-challenge-39-guest-house-and-reverse-polish-notation.html) made in answer to the [Week 39 of the Perl Weekly Challenge](https://perlweeklychallenge.org/blog/perl-weekly-challenge-039/) organized by  <a href="http://blogs.perl.org/users/mohammad_s_anwar/">Mohammad S. Anwar</a> as well as answers made by others to the same challenge.

The challenge reads as follows:

*A guest house had a policy that the light remain ON as long as the at least one guest is in the house. There is guest book which tracks all guest in/out time. Write a script to find out how long in minutes the light were ON.*

*The guest book looks as follows:*

    1) Alex    IN: 09:10 OUT: 09:45
    2) Arnold  IN: 09:15 OUT: 09:33
    3) Bob     IN: 09:22 OUT: 09:55
    4) Charlie IN: 09:25 OUT: 10:05
    5) Steve   IN: 09:33 OUT: 10:01
    6) Roger   IN: 09:44 OUT: 10:12
    7) David   IN: 09:57 OUT: 10:23
    8) Neil    IN: 10:01 OUT: 10:19
    9) Chris   IN: 10:10 OUT: 11:00

## My Solution

First, although the input data provided with the task spans over only 2 hours, I'll make the computation over a full day, from 00:00 to 23:59. One of the reasons for doing so is that I wanted to add a guest staying over more than two hours, in order to test the case where someone is in the guest house for more than two adjacent hours. Also, I did not want the guests to be male only. So, I added one female guest:

    10) Liz    IN: 12:07 OUT: 17:05

I can think of several ways to solve this task. I decided to create a hash of arrays covering every minute in the 00:00-23:59 range. It could have been an array of arrays, but I originally started with 09:00-11:00 range provided in the task, and that led to an array with empty slots, which I did not like too much because this is likely to generate warnings or require some special care to avoid such warnings (or runtime errors). The program then parses the input data and sets each minute in the presence ranges with 1. Populating the whole range with zeros before starting isn't strictly necessary, but it makes other things easier, as it is possible at the end to just add values without having to first check for definedness.

We don't care about the guests' names, so when reading the input data, we only look at the time intervals.

Note that there is a slight ambiguity in the task description. If one guest arrives at 10:10 and leaves at 10:11, I consider that the light has to be on for 2 minutes, even though it may be argued that, by a simple subtraction, the guest staid only 1 minute. It is a matter of interpretation.

There is no `DATA` section in Raku programming language as in Perl 5. Raku should have much more feature-rich capabilities using `pod` (plain old documentation) sections, but these are not implemented yet. We could use the [heredocs](https://docs.raku.org/syntax/heredocs%20:to) feature, but since TIMTOWTDI, we will simply use a multi-line string variable within standard double quote marks.

```Perl6
use v6;

my $input =
   "1) Alex    IN: 09:10 OUT: 09:45
    2) Arnold  IN: 09:15 OUT: 09:33
    3) Bob     IN: 09:22 OUT: 09:55
    4) Charlie IN: 09:25 OUT: 10:05
    5) Steve   IN: 09:33 OUT: 10:01
    6) Roger   IN: 09:44 OUT: 10:12
    7) David   IN: 09:57 OUT: 10:23
    8) Neil    IN: 10:01 OUT: 10:19
    9) Chris   IN: 10:10 OUT: 11:00
    10) Liz    IN: 12:07 OUT: 17:05";

my %hm;
for 0..23 -> $hour {
    %hm{$hour}[$_] = 0 for 0..59;
}
for $input.lines {
    next unless /\S/;
    my ($in_h, $in_m, $out_h, $out_m) = map { +$_}, $/[0..3] if /(\d\d)':'(\d\d)\D+(\d\d)':'(\d\d)/;
    if ($out_h == $in_h) {
        %hm{$in_h}[$_] = 1 for $in_m..$out_m;
    } else {
        %hm{$in_h}[$_]  = 1 for $in_m..59; # end the first hour
        for $in_h + 1 .. $out_h -1 -> $hour {
            %hm{$hour}[$_] = 1 for 0..59; # If several hours
        }
        %hm{$out_h}[$_] = 1 for 0..$out_m; # Complete last hour
    }
}

my $total_on = 0;
for keys %hm -> $hour {
    $total_on += sum %hm{$hour};
}
say "Total time on: $total_on minutes.";
```

With the original input data set, the result was 111 seconds. With my modified data set, I obtain the following output:

    $ perl6 guesthouse.p6
    Total time on: 410 minutes.

## Alternative Solutions

[Arne Sommer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/arne-sommer/perl6/ch-1.p6) used his own [Time::Repeat::HHMM](https://github.com/arnesom/p6-time-repeat/blob/master/lib/Time/Repeat.pm6) Raku module. His implementation seems to rely on the fact that all time entries are on the same day, that they are all given in chronological order, and, it seems to me, that they all overlap (no gap between them). But Arne made several other implementations without these limitations, which you can read in his [blog post](https://raku-musings.com/reverse-guest.html).

[Daniel Mita](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/daniel-mita/perl6/ch-1.p6) wrote a rather long program recording in the `%present` [SetHash](https://docs.raku.org/type/SetHash) the number of guests present for any minute between 9:00 and 11:00, and incrementing the `$light-duration` variable for any minute where there is at least one guest.

[Fernando Correa de Olievera](https://perlweeklychallenge.org/blog/recap-challenge-039/) provided the following solution using massively `multi` functions::

``` Perl 6
sub to-min(Str $str) {
    do given $str.comb(/\d+/) {
       60*.[0] + .[1]
    }
}
proto calc(Int $count,  Int $prev, @in,               @out --> Int) {*}
multi calc(0,           Int,       [],                []   --> 0)   {}
multi calc(Int,         Int,       [],                [])           { die "Finished with guest inside house" }
multi calc(0,           Int $prev, [Int $in, *@in],   @out where $in <= *.head)        { calc 1, $in, @in, @out }
multi calc(Int $count,  Int $prev, [Int $in, *@in],   @out where $in <= *.head)        { $in  - $prev + calc $count + 1, $in,  @in, @out }
multi calc(Int $count,  Int $prev, @in (Int $in, *@), [Int $out where $in > *, *@out]) { $out - $prev + calc $count - 1, $out, @in, @out }
multi calc(Int $count,  Int $prev, [],                [Int $out, *@out])               { $out - $prev + calc $count - 1, $out, [],  @out }

my (@in, @out) := ([[],[]], |lines).reduce: -> (@in, @out), $_ {
   my ($in, $out) = .comb(/\d+":"\d+/);
   [ |@in, to-min $in, ], [ |@out, to-min $out ]
}
say calc 0, 0, @in.sort, @out.sort
```

[Kevin Colyer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/kevin-colyer/perl6/ch-1.p6) also used a [SetHash](https://docs.raku.org/type/SetHash) to keep track of guests' presence for every minute in the interval between the arrival of the first guest and the departure of the last one. The number of items in the SetHash then represents the total number of minutes the light is on. Kevin's code is quite short:

``` Perl 6
my %minutes is SetHash;
for $housemates.lines -> $l {
        # parse list to get times
        $l ~~ / (\d\d) \: (\d\d) .+ (\d\d) \: (\d\d) /;
        my ($ih,$im,$oh,$om) = |$/;
        # add the time range to the set
        %minutes{$_}++ for ($ih*60+$im)..($oh*60+$om-1);
}
# count the elements
say %minutes.elems ~ " minutes the lights were on";
```

[Noud](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/noud/perl6/ch-1.p6) used, just like me, a 24-hour clock. Instead of counting the number of minutes the light were on, he counted the minutes where the light are off (which is, I believe, equivalent):

``` Perl 6
for 'guestbook.txt'.IO.lines -> $line {
    my $rs = $line ~~ /(\d+)\:(\d+)\D+(\d+)\:(\d+)/;
    my $start = 60 * Int($rs[0]) + Int($rs[1]);
    my $end = 60 * Int($rs[2]) + Int($rs[3]);

    if ($time < $start) {
        $time_off += $start - $time;
    }

    $time = $end;
    $time_last = 24 * 60 - $end;
}

$time_off += $time_last;
my $time_on = 24 * 60 - $time_off;

say "The light was on for $time_on minutes";
```

[Ulrich Rieke](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/ulrich-rieke/perl6/ch-1.p6) explains his program with the following comment: “The basic idea is to read in the file, to convert the access( IN ) and the departure times to minutes and to add a tag whether we move in( "i" ) or out ("o"). If we then order the times by minutes we can keep a count of people inside and determine the number of minutes that elapsed between first person arriving and last person leaving.“ This is the main part of Ulrich's program:

``` Perl 6
my @times = readFile( $filename ) ;
my @orderedTimes = orderByTime( @times ) ;
my $starttime = @orderedTimes[0] ;
my $people_Inside = 0 ;
my $minutes_On ;
for @orderedTimes -> $time {
    if ($time.substr( *-1 , 1 ) eq "i" ) {
        $people_Inside++ ;
    }
    else {
        $people_Inside-- ;
        if ( $people_Inside == 0 ) {
            $minutes_On = $time.substr(0 , $time.chars - 1 ).Int -
                $starttime.substr(0 , $starttime.chars - 1 ).Int ;
            last ;
        }
    }
}
say ("Longest time lights on is " ~ $minutes_On.Str ~ " minutes!") ;
```

[Javier Luque](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/javier-luque/perl6/ch-1.p6) used a `%time-on` hash to record each minute during which there is at least one guest (pretty much the same basic algorithm as the one I used, but with some implementation differences here and there):

``` Perl6
# Calculate the minutes lights were on
sub calculate-lights-on {
    my %time_on; # Sample in minutes
    my $time_re = /\d\d\:\d\d/;

    for data().lines -> $line {
        next unless $line ~~
            /.*?($time_re).*?($time_re)/;

        # Get the time in absolute minutes
        my $t1 = absolute-minutes($0);
        my $t2 = absolute-minutes($1);

        %time_on{$t1 .. ($t2 -1)} = 1;
    }

    return %time_on.elems;
}
```

[Roger Bell West](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/roger-bell-west/perl6/ch-1.p6) used an `%ev` hash to record the arrival and departure times. His program then reads again the hash (sorted by keys) and keeps track of periods where the light is on, using the `$laston` variable to know where the light was last switched on and the `ontime` variable to accumulate the duration light is on.

``` Perl 6
for $fh.lines {
  my @e=($_ ~~ m:g/(IN|OUT) ':' \s* (\d+) ':' (\d+)/);
  while (@e) {
    my @match=@e.shift.values;
    my $delta=(@match.shift eq 'IN')??1!!-1;
    my $t=(60*@match.shift)+@match.shift;
    %ev{$t}+=$delta;
  }
}

my $ontime=0;
my $occ=0;
my $laston=0;
for (%ev.keys.sort({$^a <=> $^b})) -> $t {
  my $lastocc=$occ;
  $occ+=%ev{$t};
  if ($lastocc==0 && $occ>0) {
    $laston=$t;
  } elsif ($lastocc>0 && $occ==0) {
    $ontime+=($t-$laston);
  }
}
```

[Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/ruben-westerberg/perl6/ch-1.p6) made the most concise program:

``` Perl 6
my @times=DATA().map({ |(for (m:g/(\d**2)\:(\d**2)/) {$_[0]*60+$_[1]*1 });});
put sprintf "Lights on for %d minutes", @times.max-@times.min;
```

But Ruben's program works only because there is no period with no guest between the first arrival and the last departure in the data provided with the task, since it does essentially a simple time subtraction between these two events. If there was a period with no guest, it would be overlooked.

[Ryan Thompson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/ryan-thompson/perl6/ch-1.p6) created a grammar to parse each input line:

``` Perl 6
grammar TimeData {
    rule  TOP   { <num> ")" <who> "IN:" <time> "OUT:" <time> }
    token num   { \d+   }
    token who   { \w+   }
    token hh    { 0\d | 1 <[012]> }
    token mm    { <[0..5]> \d     }
    token time  { <hh> ":" <mm>   }
}
```

Ryan's main code then parses the input line and populates an `%on` [SetHash](https://docs.raku.org/type/SetHash) with each minute a guest is present. At the end, the number of minutes the light was on is simply the number of items in the SetHash:

``` Perl 6

my %on is SetHash; # Minutes when the light was on
for (DATA().lines) {
    my $parse = TimeData.parse($_) or next;
    my ($in, $out) = $parse<time>.list;

    %on{ minutes($in) .. minutes($out) }»++;
}
say %on.elems;
```

## Task #2: Reverse Polish Notation

This is derived in part from my [blog post](http://blogs.perl.org/users/laurent_r/2019/12/perl-weekly-challenge-39-guest-house-and-reverse-polish-notation.html) made in answer to the [Week 39 of the Perl Weekly Challenge](https://perlweeklychallenge.org/blog/perl-weekly-challenge-039/) organized by  <a href="http://blogs.perl.org/users/mohammad_s_anwar/">Mohammad S. Anwar</a> as well as answers made by others to the same challenge.

The challenge reads as follows:

*Write a script to demonstrate Reverse Polish notation (RPN). Checkout the [wiki page](https://en.wikipedia.org/wiki/Reverse_Polish_notation) for more information about RPN.*

This task reminds me of the Hewlett-Packard pocket calculators during my teen years in the 1970s. To tell the truth, I had bought at the time a Texas Instruments programmable calculator using standard infix notation (which is where I wrote my first “computer” programs), but a friend of mine had a much more powerful HP hand-held calculator using RPN. The most important difference was that my friend's HP calculator could save programs for later use, while my more basic (and much cheaper) TI calculator would lose everything when switched off. My friend's HP pocket calculator could also host significantly longer programs. So we worked quite a bit on his calculator for studying assignments and, although I never became as fluent as my friend with RPN, I understood quite well at the time how to use it, and I'm pretty sure I could still use one today (at least for simple computations, but not for programming).

## My Solutions

Anyway, the point about RPN, which is also known as *postfix notation*, is that you first state the operands and then only the operators. If it is a binary operator (the most common case), you just pick up the last two previous operands. For example, to add numbers 7 and 11, instead of typing something like `7 + 11 =`, you would type `7, 11 +`. RPN is a bit counter-intuitive at first, but it is quite efficient because it avoids using parentheses for specifying operation precedence. As a result, RPN supposedly requires less typing than usual infix notation (although you have to hit the `enter` key between operands and operators quite often with an HP RPN calculator, so that I have never been fully convinced that the typing gain is really significant). The following Wikipedia example shows the difference. The following infix notation expression:

    ((15 ÷ (7 − (1 + 1))) × 3) − (2 + (1 + 1))

can be written as follows in RPN:

    15 7 1 1 + − ÷ 3 × 2 1 1 + + − =

The essential idea for processing RPN notation is a stack (a last-in first-out data or LIFO structure): when you read an operand, you just push it onto a stack. And when you read a binary operator, you just pop two values from the stack, apply the operator to them and push the result back onto the stack. We need to be cautious about something for operators which are not commutative such as subtraction or division: the first operand that we pop from the stack has to be the second operand in the operation, and the second popped operand will be the the first one in the operation.

The code for the operations is stored in a dispatch table, i.e. a hash where the keys are the operators and the values are code references to short subroutines performing the arithmetic operations. Note that I encountered unexpected difficulties because some of the RPN expressions that I copied from the Wikipedia page contain special Unicode characters for subtraction, multiplication and division. This was especially tricky for the subtraction operator, since the common ASCII dash or hyphen and the Unicode minus sign really look similar on the screen of my text editor, but they are different. To fix this, I only needed to add entries with those special characters in the dispatch table.

``` Perl 6
use v6;
use Test;

my %operations = (
    '+' => { $^a + $^b; },
    '-' => { $^a - $^b; }, # hyphen
    '−' => { $^a - $^b; }, # dash
    'x' => { $^a * $^b; },
    '*' => { $^a * $^b; },
    '×' => { $^a * $^b; },
    '/' => { $^a / $^b; },
    '÷' => { $^a / $^b; },
);

sub parse_operation (Str $expr) {
    my @stack;
    for $expr.split(/\s+/) -> $token {
        if $token ~~ /^ \d+ $/ {
            push @stack, $token ;
        } elsif (%operations{$token}:exists) {
            return "Invalid RPN expression" if @stack.elems < 2;
            my $op2 = pop @stack;
            my $op1 = pop @stack;
            push @stack, %operations{$token}($op1, $op2);
        } else {
            die "Invalid token $token.";
        }
    }
    return @stack[0]
}
plan 5;
is parse_operation("1 2 +"), 3, "2 operands";
is parse_operation("1 2 + 4 ×"), 12, "3 operands, a Unicode multiplication operator";
is parse_operation("1 2 + 4 * 5 + 3 -"), 14, "5 operands";
is parse_operation("3 4 5 x -"), -17, "Start with 3 operands and then two operators";
is parse_operation("15 7 1 1 + − ÷ 3 × 2 1 1 + + −"), 5, "8 operands, 4 Unicode operators";
```

Running this program produces the following output:

    $ perl6 rpn.p6
    1..5
    ok 1 - 2 operands
    ok 2 - 3 operands, a Unicode multiplication operator
    ok 3 - 5 operands
    ok 4 - Start with 3 operands and then two operators
    ok 5 - 8 operands, 4 Unicode operators

Using the `when` "switch" statement provided by Raku, we can get rid of the dispatch table (or, rather, implement a different type of dispatch table, in the form of a switch statement) and make our code slightly more concise as follows:

``` perl6
use v6;
use Test;

sub perform-op (&op) {
    push @*stack, @*stack.pop R[&op] @*stack.pop;
}
sub parse_operation (Str $expr) {
    my @*stack;
    for $expr.split(/\s+/) {
        when /^ \d+ $/       { @*stack.push($_)}
        when '+'             { perform-op &[+] }
        when '*' | 'x' | '×' { perform-op &[*] }
        when '/' | '÷'       { perform-op &[/] }
        when '-' | '−'       { perform-op &[-] }
        default { die "Invalid token $_."; }
    }
    return @*stack[0]
}
plan 5;
is parse_operation("1 2 +"), 3, "2 operands";
is parse_operation("1 2 + 4 ×"), 12, "3 operands, a Unicode multiplication operator";
is parse_operation("1 2 + 4 * 5 + 3 -"), 14, "5 operands";
is parse_operation("3 4 5 x -"), -17, "Start with 3 operands and then two operators";
is parse_operation("15 7 1 1 + − ÷ 3 × 2 1 1 + + −"), 5, "8 operands, 4 Unicode operators";
```

Note that we're using in the `perform-op` the [R](https://docs.raku.org/language/operators#Reversed_operators) reverse operator, which reverse the arguments of an infix operator. Until now, I had been unable to see any useful use case for this operator, now I've found one: in this case, it makes it possible to get the two values popped from the stack in the right order for the operation since, as mentioned above, the first operand that we pop from the stack has to be the second operand in the operation (at least for non-commutative operations).

This passes all the tests correctly as before.

## Alternative Solutions

[Arne Sommer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/arne-sommer/perl6/ch-2.p6) created a 90+ code-line program that I will quote here only in part:

``` Perl 6
sub calculate ($operator, $verbose)
{
  if @stack.elems < 2
  {
    say "Error. Not enough values on the stack";
    return;
  }
  my $right = @stack.pop;
  my $left  = @stack.pop;
  if $verbose
  {
    say ": Operator: $operator";
    say ": - Stack: { @stack.join(", ") }";
    say ": - Values: $left $right";
  }
  return $left -  $right if $operator eq "-";
  return $left +  $right if $operator eq "+";
  return $left /  $right if $operator eq "/";
  return $left *  $right if $operator eq "*";
  return $left ** $right if $operator eq "^";

  die "Unknown operator";
}
```

[Kevin Colyer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/kevin-colyer/perl6/ch-2.p6) also provided a rather lengthy solution. I'm quoting here his most important subroutine:

``` Perl 6
sub evaluateRPN($input) {
    say "Postfix expression to evaluate: [$input]";
    my @stack;
    my @in=$input.split: /\s+/;
    for @in -> $token {
    #         for each token in the postfix expression:
        given $token {
            #   if token is an operator:
            #     operand_2 ← pop from the stack
            #     operand_1 ← pop from the stack
            #     result ← evaluate token with operand_1 and operand_2
            #     push result back onto the stack
            when / (<[+−÷×]>) / {
                say "! found token operator";
                my $op2 = @stack.pop;
                say " popped $op2";
                my $op1 = @stack.pop;
                say " popped $op1";

                print "  evaluating $op1 and $op2 with $/";
                my $result = 0;
                $result = $op1 + $op2 if $/ eq '+';
                $result = $op1 - $op2 if $/ eq '−';
                $result = $op1 / $op2 if $/ eq '÷';
                $result = $op1 * $op2 if $/ eq '×';
                @stack.push: $result;
                say " result = $result";
                say " pushed $result into stack [{@stack}]";
            }
            #   else if token is an operand:
            #     push token onto the stack
            when /\d+/ {
                say "! found token operand";
                @stack.push: $token;
                say " pushed $token into stack [{@stack}]";
            };
        }
    }
    # result ← pop from the stack
    say "! end of input";
    say " popping {@stack[0]} and returning...\n";
    @stack.pop;
}
```

Note that the `given` block isn't necessary before the series of `when` clauses, since `for` can topicalize its argument, so that:

``` Perl6
    for @in -> $token {
    #         for each token in the postfix expression:
        given $token {
            when ...
```

could be rewritten simply as:

```
    for @in {
        when ...
```

[Noud](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/noud/perl6/ch-2.p6) used a dispatch table and predictably found a much more concise solution:

```Perl 6
my %operator = (
    '+' => {$^a + $^b;},
    '-' => {$^a - $^b;},
    '*' => {$^a * $^b;},
    '/' => {$^a / $^b;},
    '%' => {$^a % $^b;},
);

sub rpn($s) {
    my @stack = [];

    for $s.split(/\s+/) -> $a {
        if (%operator{$a}:exists) {
            if (@stack.elems < 2) {
                die "Invalid expression";
            }
            # Don't forget that the last two elements on the stack need to be
            # reversed in the operation.
            my $y = @stack.pop();
            my $x = @stack.pop();
            @stack.push(%operator{$a}($x, $y));
        } elsif ($a ~~ /\d+/) {
            @stack.push(Int($a));
        } else {
            die "Unknown operator $a";
        }
    }

    return @stack.pop();
}
```

[Ulrich Rieke](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/ulrich-rieke/perl6/ch-2.p6) made a very detailed program taking into account the arity and precedence of operators:

``` Perl 6
sub toRPN( Str $expression --> Str ) {
  my Str $rpn ;
  my @first_order_oper = <* /> ;
  my @second_order_oper = <- +> ;
  my token decimal { \d+ } ;
  my token operand {<[+\-*/]>} ;
  my regex float {
      <decimal>?
      '.'
      <decimal>
  } ;
  my regex number {
      <decimal> || <float>
  } ;
  if ( $expression ~~ /(<number>) \s+ (<operand>) \s+ (<number>) (\s+ ( <operand>)
    \s+ (<number>))?/ ) {
      if ( $3 ) {
    if ((~$3[0] (elem) @first_order_oper) && ( ~$1 (elem)
          @second_order_oper) ) {
        $rpn = ~$2 ~ " " ~ ~$3[1] ~ " " ~ ~$3[0] ~ " " ~ ~$0 ~
          " " ~ ~$1 ;
    }
    if ((~$3[0] (elem) @second_order_oper) && ( ~$1 (elem)
          @first_order_oper)) {
        $rpn = ~$0 ~ " " ~ ~$2 ~ " " ~ ~$1 ~ " " ~ ~$3[1] ~ " "
          ~ ~$3[0] ;
    }
    if ( hasSameOrder( ~$1 , ~$3[0] )) {
        $rpn = ~$0 ~ " " ~ ~$2 ~ " " ~ ~$1 ~ ~ " " ~$3[1] ~ " " ~ ~$3[0] ;
    }
      }
      else { #no second operator of whatever same or different precedence
    $rpn = ~$0 ~ " " ~ ~$2 ~ " " ~ ~$1 ;
      }
  }
  else {
      $rpn = "Not tested in this basic version or wrong format!" ;
  }
  return $rpn ;
}
```

[Javier Luque](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/javier-luque/perl6/ch-2.p6) used a dispatch table and made a fairly concise program despite using various Unicode encoding of the operators:

``` Perl6
sub evaluate-stack(@tokens) {
    my @stack;

    # Some utf-8 friendly operations
    my %operations = (
        '+' => &add,
        '-' => &subtract,
        '−' => &subtract,
        '*' => &multiply,
        '×' => &multiply,
        '÷' => &divide,
        '/' => &divide,
    );

    # Process each token
    for (@tokens) -> $token {
        if (%operations.{$token}) {
            push @stack, %operations.{$token}(@stack);
        } elsif ($token ~~ /\d+/) {
            push @stack, $token;
        }
    }

    # Return the answer
    return pop(@stack);
}

# Operations
sub add(@s)      { return @s.pop + @s.pop }
sub subtract(@s) { return - @s.pop + @s.pop }
sub multiply(@s) { return @s.pop * @s.pop }
sub divide(@s)   { return (1 / @s.pop) * @s.pop }
```

[Roger Bell West](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/roger-bell-west/perl6/ch-2.p6) also created a `%op`  dispatch table and created for the operators a series of small subroutines, of which we give only two examples, `add` and `sub`. The main `for` loop scans the individual arguments passed to the program, pushes numerical arguments onto the stack, and applies the subroutines defined in the `%op` hash for the operators.

``` Perl 6
my @stack=();

my %op=(
  add => &add,
  '+' => &add,
  sub => &sub,
  '-' => &sub,
  mul => &mul,
  '*' => &mul,
  div => &div,
  '/' => &div,
  neg => &neg,
  dup => &dup,
  pop => &pop,
  exch => &exch,
    );

for @*ARGS -> $p {
  if (%op{$p}:exists) {
    %op{$p}.();
  } elsif ($p ~~ /^<[.0..9]>+$/) {
    push @stack,$p;
  } else {
    die "Unknown input $p\n";
  }
  say join(' ',@stack);
}

sub add {
  push @stack,(@stack.pop) + (@stack.pop);
}
```

[Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/ruben-westerberg/perl6/ch-2.p6) implemented a dispatch table under the form of a switch statement with a series of `when` clauses:

``` Perl 6
my $expression=@*ARGS[0]//"15 7 1 1 + - / 3 * 2 1 1 + + -";
my @stack;
$expression ~~ s:g/\s+/ /;
put "Input expression: $expression";
for $expression.comb: /\S+/ {
    die "Error in input expression" if ! /^<[\-\+]>?\d+(\.\d+)*$/ && !/^<[\+\-\*\/]>$/;
    when $_ eq "+" {
        push(@stack, pop(@stack)+ pop(@stack));
    }
    when $_  eq "-" {
        push(@stack, pop(@stack)-pop(@stack));
    }
    when $_ eq "*" {
    push(@stack, pop(@stack)*pop(@stack));
    }
    when $_ eq "/" {
        push(@stack, pop(@stack)/pop(@stack));
    }
    default {
        push @stack, $_;
    }
}
put "Result: @stack[]";
```

[Ryan Thompson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/ryan-thompson/perl6/ch-2.p6) created a dispatch table (or rather a subroutine returning a dispatch table, more on this below) and his `MAIN` loop doing the bulk of the work is very simple:

``` Perl 6
sub MAIN( Str $rpn-expr ) {
    for $rpn-expr.words -> $tok {
        if $tok.Numeric { @stack.push( $tok ) }
        else {
            die "Unknown operator ｢$tok｣" if %op{$tok}:!exists;
            %op{$tok}.()
        }
    }
    say |@stack;
}
```

His `gen-op-dispatch` that returns the dispatch table is quite interesting:

``` Perl6
sub gen-op-dispatch( --> Hash ) {
    my Code %op = (
       '+'  => op-gen( { $^a + $^b } ); # Binary
       '-'  => op-gen( { $^a - $^b } );
       '/'  => op-gen( { $^a / $^b } );
       '*'  => op-gen( { $^a * $^b } );
      'abs' => op-gen( { $^a.abs   } );

       '!'  => op-gen( {[*] 1..$^a } ); # Unary
      'pop' => op-gen( sub ($x) {()} );

      'Pi'  => op-gen( { 3.1415926 } ); # Nullary
    );

    %op<π>  = %op<Pi>;                  # Aliases
    %op<×>  = %op<*>;
    %op<÷>  = %op</>;
    %op<−>  = %op<->;

    # v6.d supports the use of junctions as hash keys, so this works, too:
    %op{"^"|"**"}  = op-gen( { $^a ** $^b } );
    %op{"%"|"mod"} = op-gen( { $^a %  $^b } );

    # We can support user variables with two lines of code:
    %op{"$_="}     = op-gen( { %var{$_} = $^a; () } ) for 'a'..'z';
    %op{ $_  }     = op-gen( { %var{$_}           } ) for 'a'..'z';

    return %op;
}
```

It first defines a few basic operators as a simple `%op` hash. Then it adds the Unicode aliases of these operators. One very interesting thing is the way the program uses junctions as hash keys to define operators' aliases in just one statement. These hash assignments use the following `op-gen` subroutine:

``` Perl6
#| Generate an operator and return a Code object that can be added to %op
#  We introspect &code.arity to know how many @operands to pop off the @stack
sub op-gen( &code --> Code ) {
    sub () {
        die "Stack: {@stack.elems} < {&code.arity}" if @stack < &code.arity;
        my @operands;
        @operands.push: @stack.pop for 1..&code.arity;
        @stack.push: |code( |@operands );
    }
}
```
Observe how the `op-gen` subroutine, which returns an anonymous subroutine, checks that there are enough items on the stack for the arity (number of expected arguments) of the operator. Also, `push`ing the value popped from the stack into the `@operands` puts the popped arguments back into the right order for non-commutative operations such as subtraction or division. Finally, I love the way Ryan even introduced support for user-defined variables, meaning that his RPN implementation can almost be used as a (very basic) programming language. For example, [Ryan's blog](http://www.ry.ca/2019/12/reverse-polish-notation/) shows a way to compute [triangular numbers](https://en.wikipedia.org/wiki/Triangular_number) (the 3rd, 4th, and 5th ones in the examples below):

    $ perl6 ryan_rpn.p6 '3 n= 2 n n 1 + * /'
    6

    $ perl6 ryan_rpn.p6 '4 n= 2 n n 1 + * /'
    10

    $ perl6 ryan_rpn.p6 '5 n= 2 n n 1 + * /'
    15

I am impressed. Ryan's program is quite a beautiful clockwork.

## SEE ALSO

Three blog posts (besides mine) this time:

* Arne Sommer: https://raku-musings.com/reverse-guest.html;

* Javier Luque: https://perlchallenges.wordpress.com/2019/12/16/perl-weekly-challenge-039/;

* Ryan Thompson: http://www.ry.ca/2019/12/reverse-polish-notation/; it seems that this is the first time that Ryan is blogging about the Perl Weekly Challenge. I really hope that he will continue to do so, as this is really an interesting blog post with a lot of innovative ideas.

## Wrapping up

Please let me know if I forgot any of the challengers or if you think my explanation of your code misses something important (send me an e-mail or just raise an issue against this GitHub page).
