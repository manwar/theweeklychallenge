---
author:       Ryan Thompson
date:         2020-02-21T10:34:21
description:  "Ryan Thompson › Raku Weekly Review: Challenge - #047"
tags:         ["raku"]
title:        "Ryan Thompson › Raku Weekly Review: Challenge - #047"
type:         post
---

Continues from [previous week](/blog/p6-review-challenge-046/).

Welcome to the Raku review for Week 047 of the Weekly Challenge! For a quick overview, go through the [original tasks](/blog/perl-weekly-challenge-047/) and [recap](/blog/recap-challenge-047/) of the weekly challenge.

## Getting in Touch

<a href="mailto:rjt@cpan.org"><img src="http://ry.ca/misc/Email.svg" height="50" width="50"> Email</a> › Email me (Ryan) with any feedback about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="http://ry.ca/misc/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="http://ry.ca/misc/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

We'd greatly appreciate any feedback you'd like to give.

## Table of Contents

### [Task 1](#task1)

[ [Arne Sommer](#arne-sommer1)  | [Jaldhar H. Vyas](#jaldhar-h-vyas1)  | [Javier Luque](#javier-luque1)  | [Kevin Colyer](#kevin-colyer1)  | [Laurent Rosenfeld](#laurent-rosenfeld1)  | [Luca Ferrari](#luca-ferrari1)  | [Mark Anderson](#mark-anderson1)  | [Markus Holzer](#markus-holzer1)  | [Noud Aldenhoven](#noud1)  | [Ruben Westerberg](#ruben-westerberg1)  | [Simon Proctor](#simon-proctor1)  | [Ulrich Rieke](#ulrich-rieke1)  ]

### [Task 2](#task2)

[ [Alicia Bielsa](#alicia-bielsa2)  | [Arne Sommer](#arne-sommer2)  | [Athanasius](#athanasius2)  | [Colin Crain](#colin-crain2)  | [Jaldhar H. Vyas](#jaldhar-h-vyas2)  | [Javier Luque](#javier-luque2)  | [Kevin Colyer](#kevin-colyer2)  | [Luca Ferrari](#luca-ferrari2)  | [Mark Anderson](#mark-anderson2)  | [Markus Holzer](#markus-holzer2)  | [Noud Aldenhoven](#noud2)  | [Ruben Westerberg](#ruben-westerberg2)  | [Ryan Thompson](#ryan-thompson2)  | [Simon Proctor](#simon-proctor2)  | [Ulrich Rieke](#ulrich-rieke2)  ]

### [Blogs](#blogs)

***

***

# Task #1 - Roman Calculator {#task1}

The first task is to write a script that accepts two Roman numbers and an arithmetic operator. It should then calculate the result and return it as another Roman number. For example:

```
perl ch-1.pl V + VI
XI
```

The Raku solutions for this task, while lengthy at an average of 66 lines, are still shorter than the Perl solutions by about 1/3. This is a very crude metric, but it feels about right, combined with my own sense of expressiveness in the Raku solutions.

A few people used modules, several re-used their solutions from [Week 010](/blog/p6-review-challenge-010/), while the rest wrote all new Roman number routines.


***

## Arne Sommer {#arne-sommer1}

[Arne Sommer's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/arne-sommer/raku/ch-1.p6) uses a modified version of his Roman number code from Week 10, which Arne has put into a `Number::Roman` library (not included with his submission). Here is the main logic:

```raku
use Number::Roman :to, :from;
unit sub MAIN (Str $first, Str $operator, Str $second);
my $f = from-roman($first);
my $s = from-roman($second);
given $operator
{
  when '+' { say to-roman($f + $s) };
  when '-' { say to-roman($f - $s) };
  when 'x' { say to-roman($f * $s) };
  when '*' { say to-roman($f * $s) };
  when '/' { say to-roman(Int($f) / Int($s)) };
}
```

`given ... when` is a good choice here. Arne also provides some other solutions, such as one using `multi MAIN` subs instead, which I'll just show the signatures of:

```raku
multi MAIN (Str $first, "+", Str $second);
multi MAIN (Str $first, "-", Str $second);
multi MAIN (Str $first, '*', Str $second);
multi MAIN (Str $first, 'x', Str $second);
multi MAIN (Str $first, "/", Str $second);
```

Arne's blog does have a code listing for `Number::Roman`, which I would highly suggest reading, as he discusses several interesting aspects of this challenge and his solution.

**Blog** › [The Roman Gap with Raku](https://raku-musings.com/roman-gap.html)

## Jaldhar H. Vyas {#jaldhar-h-vyas1}

[Jaldhar H. Vyas's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/jaldhar-h-vyas/raku/ch-1.p6) seems to mirror his Perl solution, whereby numbers go through a multi-step process of `unprefix`, `reorder` and `normalize` steps:

```raku
sub unprefix(Str $num) {
    my $unprefixed = $num;
    my @from = qw/ CM    CD   XC    XL   IX    IV   /;
    my @to =   qw/ DCCCC CCCC LXXXX XXXX VIIII IIII /;
    for 0 ..^ @from.elems -> $i {
        $unprefixed = $unprefixed.subst(@from[$i], @to[$i], :g);
    }
    return $unprefixed;
}
sub reorder(Str $num) {
    my %order = (
        'M' => 0, 'D' => 1, 'C' => 2, 'L' => 3, 'X' => 4, 'V' => 5, 'I' => 6
    );
    return $num.comb.sort({ %order{$^a} <=> %order{$^b} }).join;
}
sub normalize(Str $num) {
    my $normalized = $num;
    my @from = qw/ IIIII IIII VV VIV XXXXX XXXX LL LXL CCCCC CCCC DD DCD /;
    my @to =   qw/ V     IV   X  IX  L     XL   C  XC  D     CD   M  CM  /;
    for 0 ..^ @from.elems -> $i {
        $normalized = $normalized.subst(@from[$i], @to[$i], :g);
    }
    return $normalized;
}
```

The `MAIN` sub accepts the two numbers and an `$op`, `+` or `-`. Pay close attention to how Jaldhar implements the operations:

```raku
multi sub MAIN(
    Str $num1, #= Number in Roman numerals
    Str $op where { /\+/ || /\-/ }, #= Arithmetic operation (+ or -)
    Str $num2, #= Number in Roman numerals
    ) {
    if $op eq '+' {
        say normalize(reorder(unprefix($num1) ~ unprefix($num2)));
    } elsif $op eq '-' {
        my $un1 = unprefix($num1);
        my $un2 = unprefix($num2);
        while ($un2.chars) {
            ($un1, $un2) = largestOrder(|removeCommon($un1, $un2));
        }
        say normalize($un1);
    }
}
```

These operations are very interesting, in that they don't actually convert the Roman numbers to Arabic at any point! I believe Jaldhar is the only one to do it this way in this challenge.

For example, with the addition operator, Jaldhar simply concatenates the two Roman numbers before passing them through his normalization process. This works because his lower level subs are, by design, extremely permissive in what they accept, and the `normalize` sub ensures the answer is put in proper Roman form.

Similarly, the subtraction operator works by expanding the numbers and removing common substrings.

## Javier Luque {#javier-luque1}

[Javier Luque's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/javier-luque/raku/ch-1.p6) uses a dispatch table to implement the operations:

```raku
sub MAIN($equation) {
    my %operators = (
        '+' => -> $a , $b { rtoa($a) + rtoa($b) },
        '-' => -> $a , $b { rtoa($a) - rtoa($b) },
        'x' => -> $a , $b { rtoa($a) * rtoa($b) },
        '/' => -> $a , $b { rtoa($a) / rtoa($b) },
    );
    if ($equation ~~ /^(\w+)\s*(\+|\-|x|\/)\s*(\w+)$/) {
        say ator(%operators{$1}($0.Str, $2.Str).Int);
    } else {
        say "Invalid input";
    }
}
```

Then, citing inspiration from the [Perl 6 Examples](https://examples.p6c.dev/index.html) site, Javier uses a `multi` sub, `rtoa`, to convert from Roman to Arabic, shown here, in part:

```raku
# Inspired by:
# https://examples.p6c.dev/categories/euler/prob089-andreoss.html
multi rtoa() { 0 }
multi rtoa(Str $r where $r.chars > 1 ) {
    rtoa(| $r.comb)
}
multi rtoa('I',      |a) { 1   + rtoa(|a) }
multi rtoa('I', 'V', |a) { 4   + rtoa(|a) }
multi rtoa('V',      |a) { 5   + rtoa(|a) }
...
multi rtoa('C', 'M', |a) { 900 + rtoa(|a) }
multi rtoa('M',      |a) { 1000 + rtoa(|a) }
```

The corresponding `ator` sub uses `given ... when`:

```raku
sub ator(Int $n) returns Str {
    given $n {
        when $n >= 1000 { 'M'  ~ ator($n- 1000) }
        when $n >= 900  { 'CM' ~ ator($n - 900) }
        ...
        when $n >= 4    { 'IV' ~ ator($n - 4) }
        when $n >= 1    { 'I'  ~ ator($n - 1) }
        default        { '' }
    }
}
```

**Blog** › [047 – Perl Weekly Challenge](https://perlchallenges.wordpress.com/2020/02/10/perl-weekly-challenge-047/)

## Kevin Colyer {#kevin-colyer1}

[Kevin Colyer's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/kevin-colyer/raku/ch-1.p6) has `toRoman` and `fromRoman` subs that use arrays, and iterate over them pairwise. Here is the `toRoman` sub::

```raku
sub toRoman($i is copy) {

    my @t=[1000 , "M", 900 , "CM", 500 , "D", 400 , "CD", 100 , "C", 90 ,
        "XC", 50 , "L", 40 , "XL", 10 , "X", 9 , "IX", 5 , "V", 4 , "IV", 1 , "I"];
    my $rn;
    return "Error - Negative Value" if $i < 0;
    while $i {
        for @t -> $d,$n {
            if $i-$d>=0 {
                $rn~=$n;
                $i-=$d;
                last;
            }
        }
    }
    return $rn;
}
```

Here, Kevin opportunistically subtracts the maximum value possible each time through the loop, and appends the Roman numeral to the result string.

Kevin's main logic uses a `given ... when` block to handle the four basic arithmetic operators:

```raku
#| Roman Numberal Calculator - Numeral1 +-/* Numeral2 (/ and * require quoting)
sub MAIN(Str $numeral1, Str $operation, Str $numeral2) {
    my $n1=fromRoman($numeral1);
    my $n2=fromRoman($numeral2);
    given $operation {
        when '+' { toRoman($n1+$n2).say };
        when '-' { toRoman($n1-$n2).say };
        when '*' { toRoman($n1*$n2).say };
        when '/' { toRoman(Int($n1/$n2)).say };
        default { say "Unknown operation '$operation'" }
    }
}
```

## Laurent Rosenfeld {#laurent-rosenfeld1}

[Laurent Rosenfeld's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/laurent-rosenfeld/raku/ch-1.p6) reuses the `from-roman` and `to-roman` code from his Week 10 solution. It wasn't reviewed at that time, though, so I'll highlight the `from-roman` sub here:

```raku
subset Roman-str of Str where $_ ~~ /^<[IVXLCDMivxlcdm]>+$/;
my %rom-tab = < I 1   V 5   X 10   L 50   C 100  D 500  M 1000
               IV 4  IX 9   XL 40  XC 90  CD 400   CM 900 >;
my @ordered_romans = reverse sort { %rom-tab{$_} }, keys %rom-tab;

sub from-roman (Roman-str $roman) {
    my $numeric = 0;
    my $prev_letter = "M";
    for $roman.uc.comb -> $letter {
        $numeric -= 2 * %rom-tab{$prev_letter}
            if %rom-tab{$letter} > %rom-tab{$prev_letter};
        $numeric += %rom-tab{$letter};
        $prev_letter = $letter;
    }
    return $numeric;
}
```

I really like the use of the `Roman-str` subset here, serving as argument validation. The sub itself `comb`s over the input string, and if the next letter is larger (i.e., it has a larger value as a Roman numeral), then the current letter must be subtracted. Otherwise, it is added. Laurent's logic is to *always* add the number, and then subtract it twice if the next letter is larger.

Laurent's main logic uses string `EVAL`, after validating the input, and supports any expression with at least two terms:

```raku
my @input;
for @*ARGS {
    push @input, $_ if /<[-+*\/]>/;
    push @input, from-roman $_ if m:i/<[ivxlcdm]>+/;
}
die "Need at least three parameters" if @input < 3; # we need at least 1 operator and two operands
my $result = EVAL join ' ', @input;
say "@*ARGS[] = ", to-roman $result;
```

**Blog** › [Roman Calculator and Gapful Numbers](http://blogs.perl.org/users/laurent_r/2020/02/perl-weekly-challenge-47-roman-calculator-and-gapful-numbers.html)

## Luca Ferrari {#luca-ferrari1}

[Luca Ferrari's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/luca-ferrari/raku/ch-1.p6) has an interesting approach in his `convert-roman-to-arabic` sub:

```raku
my %roman-to-arabic = :I(1), :V(5), :X(10), :L(50), :C(100), :D(500), :M(1000);
# Function to convert a roman number into an arabic one.
sub convert-roman-to-arabic( Str:D $roman  ) {
    my @arabic-digits = $roman.uc.comb.reverse.map: {
        state $last = 0;
        my $value = %roman-to-arabic{ $_ };
        $value *= -1 if $value < $last;
        $last = $value;
        $value;
    };
    return [+] @arabic-digits;
}
```

Luca first reverses the string's character array, then finds the value of each letter. If that value is less than the previous one, that means we're in a subtractive part of the number (like `IX`), so Luca flips the sign. The result is the sum of all of these values.

The main logic uses a `do given ... when` block to feed the `$result`, which is then converted back to a Roman number with `convert-arabic-to-roman`.

```raku
die "Usage: $*PROGRAM <operand> <operator> <operand>" if @*ARGS.elems != 3;
my $operand-a = convert-roman-to-arabic( @*ARGS[0] );
my $operand-b = convert-roman-to-arabic( @*ARGS[2] );
my $result = do given @*ARGS[1].trim {
    when '+' { $operand-a + $operand-b; }
    when '-' { $operand-a - $operand-b; }
    when '/' { $operand-a / $operand-b; }
    when '*' { $operand-a * $operand-b; }
};
say convert-arabic-to-roman( $result );
```

**Blog** › [Roman Number Calculator and Gapful Numbers](https://fluca1978.github.io/2020/02/10/PerlWeeklyChallenge47.html#task1)

## Mark Anderson {#mark-anderson1}

[Mark Anderson's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/mark-anderson/raku/ch-1.p6) provides two classes, that use grammars to assist with conversion. I'll show one of the classes here, but the other works similarly:

```raku
grammar Roman2Arabic {
    token TOP {
        :my $*Arabic;
        <Thousands>? <Hundreds>? <Tens>? <Ones>?
    }
    token Thousands { [M ** 1..3] }
    token Hundreds  { [C [C ** 1..2|D|M]?] || [D [C ** 1..3]?] }
    token Tens      { [X [X ** 1..2|C|L]?] || [L [X ** 1..3]?] }
    token Ones      { [I [I ** 1..2|V|X]?] || [V [I ** 1..3]?] }
}
grammar Arabic2Roman {
    token TOP       {
        :my $*Roman;
        <Thousands>? <Hundreds>? <Tens>? <Ones>?
    }
    token Thousands { <[123]> <?before \d ** 3> }
    token Hundreds  { \d <?before \d ** 2> }
    token Tens      { \d <?before \d> }
    token Ones      { \d }
}
class Roman2ArabicActions {
    method TOP ($/) {
        make $*Arabic;
    }
    method Thousands ($/) {
        $*Arabic = 1000 * $/.chars;
    }
    method Hundreds ($/) {
        state %lookup = <C CC CCC CD D DC DCC DCCC CM> Z=> [1 .. 9];
        $*Arabic += %lookup{ $/ } * 100;
    }
    method Tens ($/) {
        state %lookup = <X XX XXX XL L LX LXX LXXX XC> Z=> [1 .. 9];
        $*Arabic += %lookup{ $/ } * 10;
    }
    method Ones ($/) {
        state %lookup = <I II III IV V VI VII VIII IX> Z=> [1 .. 9];
        $*Arabic += %lookup{ $/ };
    }
}
```

There is also a calculator class that does all of the work of parsing and processing the operations:

```raku
grammar Calculator {
    rule  TOP      {
        :my @*Arabics;
        :my $*Answer;
        :my $*Operator;
        <Roman> <Operator> <Roman>
    }
    token Roman    { <[I V X L C D M]>+ }
    token Operator { <[+ x / -]> }
}
class CalculatorActions {
    method TOP ($/) {
        make $*Answer if $*Answer;
    }
    method Roman ($match) {
        push(@*Arabics, Roman2Arabic.parse($match, :actions(
                        Roman2ArabicActions)).made);
        if ($*Operator) {
            given $*Operator {
                when "+" { $*Answer = [+] @*Arabics }
                when "-" { $*Answer = [-] @*Arabics }
                when "x" { $*Answer = [*] @*Arabics }
                when "/" { $*Answer = [/] @*Arabics }
            }
            $*Answer = Arabic2Roman.parse($*Answer, :actions(
                       Arabic2RomanActions)).made;
        }
    }
    method Operator ($/) {
        $*Operator = $/;
    }
}
```

After all that, the main logic is one statement:

```raku
sub MAIN(*@args) {
    Calculator.parse(@args.Str, :actions(CalculatorActions)).made.say;
}
```

## Markus Holzer {#markus-holzer1}

[Markus Holzer's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/markus-holzer/raku/ch-1.p6) implements additive Roman numbers only, meaning 9 = `VIIII`. The short length of Markus' solution really underscores how much more code is required to support the subtractive numbers:

```raku
subset Roman of Str where * ~~ / ^ M* D* C * L* X* V* I* $ /;
my @r = :M(1000), :D(500), :C(100), :L(50), :X(10), :V(5), :I(1);
my %r = @r.Hash;
sub r2d( $r is copy ) {
    $r .= uc;
    %r{$r} || [+] $r.comb.map({  %r{$_} });
}
sub d2r( $d is copy ) {
    [~] gather while $d > 0 {
         my ($k, $n) = @r.first( *.value <= $d ).kv;
         take $k;
         $d -= $n;
    }
}
```

Markus also uses a `multi` main sub to parse the arithmetic operators.

```raku
multi sub MAIN(Roman $n, '+', Roman $m) { say d2r( $n.&r2d + $m.&r2d ) }
multi sub MAIN(Roman $n, '-', Roman $m) { say d2r( $n.&r2d - $m.&r2d ) }
multi sub MAIN(Roman $n, "×", Roman $m) { say d2r( $n.&r2d × $m.&r2d ) }
multi sub MAIN(Roman $n, '÷', Roman $m) { say d2r( ($n.&r2d ÷ $m.&r2d).Int ) }
```

## Noud Aldenhoven {#noud1}

[Noud Aldenhoven's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/noud/raku/ch-1.p6) defines a `@roman-symbols` array that can then be iterated over pairwise:

```raku
my @roman-symbols = [
    1_000, "M",
    900, "CM",
    500, "D",
    ...
    4, "IV",
    1, "I"
];
sub to-roman($i) {
    for @roman-symbols -> $k, $v {
        if ($i >= $k) {
            return $v ~ to-roman($i - $k);
        }
    }
    return '';
}
```

The `%operators` are a dispatch table:

```raku
my %operators =
    '+' => { $_[0] + $_[1] },
    '*' => { $_[0] * $_[1] },
    '-' => { $_[0] - $_[1] },
    '/' => { Int($_[0] / $_[1]) },
    '%' => { $_[0] % $_[1] },
;
```

And the `MAIN` sub is then just a single statement:

```raku
sub MAIN($a, $op, $b) {
    say to-roman(%operators{$op}((from-roman($a), from-roman($b))));
}
```

## Ruben Westerberg {#ruben-westerberg1}

[Ruben Westerberg's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/ruben-westerberg/raku/ch-1.p6) is an interesting one. The `romanToDecimal` sub is relatively standard, but `decimalToRoman` is interesting:

```raku
sub decimalToRoman ($input) {
    my @digits=$input.comb;
    my @p=<I X C M>;
    my @h=<V L D>;
    my $roman= join '', do for  @digits.kv {
        my $power=@digits-$^k-1;
        #decimalToRoman($^v,@digits-$^k-1);
        my @out;
        my $base=@p[$power];
        my $half=@h[$power];
        given $^v {
            when 1..3 {
                @out.append: $base xx $_;
            }
            when 4 {
                @out.push: $base;
                @out.push: $half;
            }
            when 5 {
                @out.push: $half;
            }
            when 6..8 {
                @out.push: $half;
                @out.append: $base xx ($_- 5);
            }
            when 9 {
                @out.push: $base;
                @out.push: @p[$power+1];
            }
        }
        |@out;
    }
}
```

Ruben is using `.kv` to split the decimal number into key/value pairs, so `@digits - $^k - 1` is the power of 10. He then makes a distinction between `@p` (the powers, i.e., 1, 10, 100, and 1000), and `@h` (half of a power, i.e., 5, 50, and 500).

Ruben's main logic uses `given ... when` for the operators, and also accepts either Roman or Arabic numbers in the input, which is one of those "why not" features, given it is so easy to implement:

```raku
sub MAIN(Str $operand1,Str $operator,Str $operand2){
    #convert to decimal
    my ($o1,$o2)=($operand1,$operand2).map({
        when /<[MDCLXVI]>/ {romanToDecimal($_)};
         when /\d+/ {$_};
        "Not a digit or roman numeral";
    });
    my $result= do {
        given $operator {
            when "+" {$o1+$o2};
            when "-" {$o1-$o2};
            when "/" {Int($o1/$o2)};
            when "*" {$o1*$o2};
            "Unknown";
        }
    };
    put decimalToRoman($result);
}
```


## Simon Proctor {#simon-proctor1}

[Simon Proctor's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/simon-proctor/raku/ch-1.p6) appears to be partially influenced by his Week 10 solution, but the `from-roman` sub has been significantly modified:


```raku
subset RomanStr of Str where * ~~ /^ <[M C D X L V I]>+ $/;

sub from-roman( RomanStr $roman is copy ) {
    my %roman-map = (:1000M, :900CM, :500D, :400CD, :100C, :90XC,
                     :50L, :40XL,  :10X, :9IX, :5V, :4IV, :1I );
    my $out = 0;
    while my $match = $roman ~~ s!^ "M" | "CM" | "D" | "CD" |
                                    "C" | "XC" | "L" | "XL" |
                                    "X" | "IX" | "V" | "IV" | "I"
                                    !! {
        $out += %roman-map{$match};
    }
    $out;
}
```

Simon's used the method of defining all possible Roman numerals *and their valid pairs,* and then matching them in descending order. This is a concise and effective algorithm.

What is perhaps most insightful about Simon's solution is his handling of `MAIN`. Often with programs like this that accept commandline input, you won't know if you'll be given a single string, like `"VII + X"`, or whether each argument will be separated, like `"VII", "+", "X"`, so handling both is [permissive](https://en.wikipedia.org/wiki/Robustness_principle) and often the most sensible thing to do. Here's Simon's approach:

```
subset RomanStr of Str where * ~~ /^ <[M C D X L V I]>+ $/;
subset RomanInt of Int where 0 < * < 3001;
subset Operator of Str where * ~~ /^ ( "*" | "+" | "-" | "/" ) $ /;
multi sub MAIN (
    RomanStr $i, Operator $operator, RomanStr $j
) {
    say "$i $operator $j = {perf-op( $operator, $i, $j )}";
}
multi sub MAIN (
    Str $compound where m!^ (<[M C D X L V I]>+)  " "? ( "*" | "+" | "-" | "/" ) " "? (<[M C D X L V I]>+) $!;
) {
    MAIN( $0.Str, $1.Str, $2.Str );
}
```

I admit to not taking advantage of Raku's more advanced signature features enough in my own code, so I love seeing examples like this that remind me of their potential.

## Ulrich Rieke {#ulrich-rieke1}

[Ulrich Rieke's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/ulrich-rieke/raku/ch-1.p6) uses [`Slang::Roman`](https://github.com/drforr/perl6-slang-roman) for access to the `to-roman` function.

The `MAIN` logic uses `given ... when` to perform the arithmetic operations:

```raku
sub MAIN( Str $entry ) {
    if  $entry ~~ /^^(<[IVXLCM]>+) \s+ (<[\+\-\/\*]>) \s+  (<[IVXLCM]>+)$$/ {
        my $first_operand = romanToArab( ~$0 ) ;
        my $second_operand = romanToArab( ~$2 ) ;
        my $result ;
        given ( ~$1 ) {
            when '+' { $result = $first_operand + $second_operand }
            when '-' { $result = $first_operand - $second_operand }
            when '/' { $result = $first_operand div $second_operand }
            when '*' { $result = $first_operand * $second_operand }
        }
        say to-roman( $result ) ;
    }
    else {
        say "erroneous entry!" ;
    }
}
```

***

***

# Task #2 - Gapful Numbers {#task2}

The Gapful numbers are defined by [OEIS sequence A108343](https://oeis.org/A108343)

This task had us write a script to print the first 20 Gapful numbers. Gapful numbers are numbers, 100 or greater, that are divisible by the concatenation of their first and last digits. So, for example, 100 is a gapful number because 100 is divisible by 10. 102 is not, because 101 is not divisible by 12.

***

The solutions for task #2 were all broadly similar, in that they fetch the first and last digit using features like `comb`, `substr`, or a regex, and then check for divisibility using the modulo (`%`) or divisibility (`%%`) operators.

Most solutions simply used a basic loop, while some created a lazy infinite sequence.

***

## Alicia Bielsa {#alicia-bielsa2}

Alicia Bielsa has been a Perl contributor to the Challenge since Week 4. [Her solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/alicia-bielsa/raku/ch-2.p6) here is her first Raku solution submitted for the challenge!

The solution uses a slice of `$currentNumber.comb` to get the first (`0`) and last (`*-1`) digits. Those are concatenated together and then the modulo (`%`) operator checks for divisibility.

```raku
sub MAIN () {
    my $totalGapfulNumbers = 20;
    my $totalGapfulNumbersFound = 0;
    my $currentNumber = 100;
    while ($totalGapfulNumbersFound < $totalGapfulNumbers ) {
        my  ( $firstDigit, $lastDigit ) = $currentNumber.comb[0,*-1];
        my $firstLastNumber = $firstDigit~$lastDigit;
        if ($currentNumber % $firstLastNumber   == 0 ) {
                say "Gapful number : $currentNumber";
                $totalGapfulNumbersFound++;
        }
        $currentNumber++;
    }
}
```

Congratulations on your first Raku submission, Alicia. I very much hope we'll see more.

## Arne Sommer {#arne-sommer2}

[Arne Sommer's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/arne-sommer/raku/ch-2.p6) first defines a lazy `$gapful` list, using `substr` and the `%%` divisibility operator to `grep` for gapful numbers. The following line simply takes the first 20 terms and prints them.

```raku
my $gapful := (100 .. *).grep( { $_ %% ( .substr(0,1) ~ .substr(*-1,1) ) });
say "First 20 Gapful numbers: { $gapful[^20].join(',') }.";
```

**Blog** › [The Roman Gap with Raku](https://raku-musings.com/roman-gap.html)

## Athanasius {#athanasius2}

[Athanasius's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/athanasius/raku/ch-2.p6) loops and uses a combination of `split` and modulo to get the first and last digits. Athanasius also uses the modulo operator to check for divisibility:

```raku
while $count < TARGET {
    my UInt $div = ($num.split('', :skip-empty))[0] * 10 + $num % 10;
    if $num++ % $div == 0 {
        @gapfuls.push: $num - 1;
        ++$count;
    }
}
```

## Colin Crain {#colin-crain2}

[Colin Crain's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/colin-crain/raku/ch-2.p6) also defines a lazy list, but uses `.comb.head` and `.comb.tail` to get the first and last digits:

```raku
my @o2 = (100..*).grep({ $_ %% (.comb.head ~ .comb.tail) });
say @o2[$_] for (0..19);
```

## Jaldhar H. Vyas {#jaldhar-h-vyas2}

[Jaldhar H. Vyas's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/jaldhar-h-vyas/raku/ch-2.p6) uses an intermediate `@digits` array, and then passes the first and last elements of that to `.join` before checking for divisibility with `%%`. Interestingly, the whole thing works within one `gather ... take` block:

```raku

#!/usr/bin/perl6
(gather {
    for (100 .. Inf) -> $number {
        my @digits = $number.comb;
        if $number %% (@digits[0], @digits[*-1]).join(q{}) {
            take $number;
        }
    }
})[0 .. 19].join(', ').say;
```

## Javier Luque {#javier-luque2}

[Javier Luque's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/javier-luque/raku/ch-2.p6) uses a regex to pull out the first and last digits, and `%%` to check for divisibility:

```raku

# Test: perl6 ch-2.p6
my $n = 100;
my $p = 0;
while ($p < 20) {
    $n ~~ /^(\d)\d*(\d)$/;
    my $g_divisor = $0 ~ $1;
    if ($n %% $g_divisor) {
        $p++;
        say $n ~ ' / ' ~ $g_divisor ~
            ' = ' ~ ($n / $g_divisor);
    }
    $n++;
}
```

**Blog** › [047 – Perl Weekly Challenge](https://perlchallenges.wordpress.com/2020/02/10/perl-weekly-challenge-047/)

## Kevin Colyer {#kevin-colyer2}

[Kevin Colyer's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/kevin-colyer/raku/ch-2.p6) makes a lazy list using `substr` and `%%`:

```raku
my @gapful = (100...Inf)
    .grep: {
        $_ %% ( $_.substr( 0, 1 ) * 10 + $_.substr( *-1, 1 ) )
    };
```

As with Arne's solution, printing the first 20 elements is now easy:

```raku
@gapful[^20]>>.say;
```

## Luca Ferrari {#luca-ferrari2}

[Luca Ferrari's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/luca-ferrari/raku/ch-2.p6) uses a regex with named captures:

```raku
my @found;
for 100 .. Inf {
    $_ ~~ / ^ $<first>=\d \d+ $<last>=\d $ /;
    my $divisor = ( $/<first> ~ $/<last> ).Int;
    @found.push: $divisor if $_ %% $divisor && ! @found.grep: { $_ == $divisor };
    last if @found.elems == $limit;
}
"Here it is what I found, first $limit Gapful Numbers:\n".say;
@found.sort.join( "\n\t" ).say;
```

**Blog** › [Roman Number Calculator and Gapful Numbers](https://fluca1978.github.io/2020/02/10/PerlWeeklyChallenge47.html#task2)

## Mark Anderson {#mark-anderson2}

[Mark Anderson's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/mark-anderson/raku/ch-2.p6) uses a regex with numbered captures:

```raku
for (100 .. Inf) -> $dividend {
    state $count;
    $dividend ~~ /^ (\d) \d+ (\d) $/;
    my $divisor = $0 ~ $1;
    if ($dividend %% $divisor) {
        say $dividend;
        $count++;
    }
    last if $count == 20;
}
```

## Markus Holzer {#markus-holzer2}

[Markus Holzer's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/markus-holzer/raku/ch-2.p6) is the most concise yet, `.say`ing the first 20 elements of a lazy sequence that uses a slice of `comb` to get the digits:

```raku
.say for (100..*).grep({ $_ %% $_.comb[0,*-1].join })[^20]
```

## Noud Aldenhoven {#noud2}

[Noud Aldenhoven's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/noud/raku/ch-2.p6) uses a lazy sequence as well, with more explicit coercion:

```raku
my @gapful = (100..Inf).grep({
    $_ % Int(Str($_).comb[0] ~ Str($_).comb[*-1]) == 0
});
@gapful[^20].say;
```

## Ruben Westerberg {#ruben-westerberg2}

[Ruben Westerberg's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/ruben-westerberg/raku/ch-2.p6) also uses a lazy list, but with a `comb` slice:

```raku
my $gapful=(100..Inf).grep({$_%% .comb[0,*-1].join.Int});
put $gapful[0..19];
```

## Ryan Thompson {#ryan-thompson2}

[My solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/ryan-thompson/raku/ch-2.p6) uses a lazy sequence, too, but I decided to split `is-gapful` into its own sub, for maximum utility and perhaps slightly better readability:

```raku
my @gapful = (100..∞).grep: &is-gapful;
say @gapful[^20];
sub is-gapful( Int \n ) { n ≥ 100 and n %% n.comb[0,*-1].join }
```

**Blog** › [Gapful Numbers](http://www.ry.ca/2020/02/gapful-numbers/)

## Simon Proctor {#simon-proctor2}

[Simon Proctor's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/simon-proctor/raku/ch-2.p6) finds the first `$count` gapful numbers in the following single statement:

```raku
.say for (100..*).grep( { $^a %% $^a.comb[0,*-1].join.Int } )[^$count]
```

## Ulrich Rieke {#ulrich-rieke2}

[Ulrich Rieke's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/ulrich-rieke/raku/ch-2.p6) also breaks `isGapful` into its own sub, and then uses a lazy sequence to print the first 20 gapful numbers:

```raku
sub isGapful( Int $num is copy --> Bool ) {
  my $first = $num.Str.comb.Array.shift ;
  my $last = $num.Str.comb.Array.pop ;
  my $divisor = ( $first ~ $last ).Int ;
  return $num %% $divisor ;
}
say (100, 101 ... *).grep( { isGapful( $_ ) } )[^20] ;
```

`$first = $num.Str.comb.Array.shift` goes through a couple of explicit coercions in order to get the first element (and `$last` is similar). Something like `$first = $num.comb.tail` would also be semantically equivalent, here.

***

***

## See Also {#blogs}

### Blogs this week:

**Arne Sommer** › [The Roman Gap with Raku](https://raku-musings.com/roman-gap.html)

**Dave Jacoby** › [Counting from 100 is the Fun Part](https://jacoby.github.io/2020/02/12/counting-from-100-is-the-fun-part.html)

**Javier Luque** › [047 – Perl Weekly Challenge](https://perlchallenges.wordpress.com/2020/02/10/perl-weekly-challenge-047/)

**Laurent Rosenfeld** › [Roman Calculator and Gapful Numbers](http://blogs.perl.org/users/laurent_r/2020/02/perl-weekly-challenge-47-roman-calculator-and-gapful-numbers.html)

**Luca Ferrari** › [Roman Number Calculator and Gapful Numbers](https://fluca1978.github.io/2020/02/10/PerlWeeklyChallenge47.html)

**Ryan Thompson** › [Gapful Numbers](http://www.ry.ca/2020/02/gapful-numbers/)

