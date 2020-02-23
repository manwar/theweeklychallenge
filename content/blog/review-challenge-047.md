---
author:       Ryan Thompson
date:         2020-02-21T01:19:32
description:  "Ryan Thompson › Perl Weekly Review: Challenge - #047"
tags:         ["perl"]
title:        "Ryan Thompson › Perl Weekly Review: Challenge - #047"
type:         post
image:        images/blog/p5-review-challenge-047.jpg
---

Continues from [previous week](/blog/review-challenge-046/).

Welcome to the Perl review for Week 047 of the Weekly Challenge! For a quick overview, go through the [original tasks](/blog/perl-weekly-challenge-047/) and [recap](/blog/recap-challenge-047/) of the weekly challenge.

## Getting in Touch

<a href="mailto:rjt@cpan.org"><img src="http://ry.ca/misc/Email.svg" height="50" width="50"> Email</a> › Email me (Ryan) with any feedback about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="http://ry.ca/misc/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="http://ry.ca/misc/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

We'd greatly appreciate any feedback you'd like to give.

## Table of Contents

### [Task 1](#task1)

[ [Alicia Bielsa](#alicia-bielsa1)  | [Andrezgz](#andrezgz1)  | [Athanasius](#athanasius1)  | [Cheok-Yin Fung](#cheok-yin-fung1)  | [Dave Cross](#dave-cross1)  | [Dave Jacoby](#dave-jacoby1)  | [Duane Powell](#duane-powell1)  | [Duncan C. White](#duncan-c-white1)  | [E. Choroba](#e-choroba1)  | [Jaldhar H. Vyas](#jaldhar-h-vyas1)  | [Javier Luque](#javier-luque1)  | [Laurent Rosenfeld](#laurent-rosenfeld1)  | [Lubos Kolouch](#lubos-kolouch1)  | [Phillip Harris](#phillip-harris1)  | [Ruben Westerberg](#ruben-westerberg1)  | [Ryan Thompson](#ryan-thompson1)  | [Saif Ahmed](#saiftynet1)  | [User Person](#user-person1)  | [Wanderdoc](#wanderdoc1)  ]

### [Task 2](#task2)

[ [Alicia Bielsa](#alicia-bielsa2)  | [Andrezgz](#andrezgz2)  | [Athanasius](#athanasius2)  | [Cheok-Yin Fung](#cheok-yin-fung2)  | [Colin Crain](#colin-crain2)  | [Cristina Heredia](#cristian-heredia2)  | [Dave Cross](#dave-cross2)  | [Dave Jacoby](#dave-jacoby2)  | [Duane Powell](#duane-powell2)  | [Duncan C. White](#duncan-c-white2)  | [E. Choroba](#e-choroba2)  | [Jaldhar H. Vyas](#jaldhar-h-vyas2)  | [Javier Luque](#javier-luque2)  | [Laurent Rosenfeld](#laurent-rosenfeld2)  | [Lubos Kolouch](#lubos-kolouch2)  | [Mohammad S Anwar](#mohammad-anwar2)  | [Phillip Harris](#phillip-harris2)  | [Ruben Westerberg](#ruben-westerberg2)  | [Ryan Thompson](#ryan-thompson2)  | [Saif Ahmed](#saiftynet2)  | [Steven Wilson](#steven-wilson2)  | [Ulrich Rieke](#ulrich-rieke2)  | [User Person](#user-person2)  | [Wanderdoc](#wanderdoc2)  ]

### [Blogs](#blogs)

***

***

# Task #1 - Roman Calculator {#task1}

The first task is to write a script that accepts two Roman numbers and an arithmetic operator. It should then calculate the result and return it as another Roman number. For example:

```
perl ch-1.pl V + VI
XI
```

This challenge tends to require a fair amount of code. The average solution length was 90 lines (for comparison, Task #2 averaged 29 lines), with several nearing 200 lines. The average would have been higher if not for several hackers' use of CPAN modules and code from [Week 010](/blog/review-challenge-010/).

As such, I will have to be more selective in the code that I highlight. Please remember you can always click the solution link for the full code. If I didn't highlight a part of your code you believe is worth looking at more closely in the context of this review, please [let me know](mailto:rjt@cpan.org)!

***

## Alicia Bielsa {#alicia-bielsa1}

[Alicia Bielsa's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/alicia-bielsa/perl/ch-1.pl) uses [`Readonly::Hash`](https://metacpan.org/pod/Readonly)es to map the Roman numerals to their Arabic values (e.g., `X => 10`), and takes the `reverse` to map in the other direction. She writes `romanToDecimal` and `decimalToRoman` subroutines so the solution can be calculated. Here is the `romanToDecimal` sub:

```perl
sub romanToDecimal {
    my $romanNumber = shift;
    my $previousValue = 0;
    my $decimalNumber = 0;
    foreach my $romanSymbol (split('',$romanNumber)) {
        if ($HASH_ROMAN_DECIMAL{$romanSymbol} > $previousValue ){
            #Previous value was substractive mode, we substract twice.
            $decimalNumber -= $previousValue * 2;
        }
        $decimalNumber += $HASH_ROMAN_DECIMAL{$romanSymbol};
        $previousValue = $HASH_ROMAN_DECIMAL{$romanSymbol};
    }
    return $decimalNumber;
}
```

Alicia also included error checking for the arguments, with and `isOperationAccepted` and `isRomanNumber`. Here is the latter:

```perl
sub isRomanNumber {
    my $numberToCheck = shift;
    my $isRoman = 0;
    my $romanDigits = join ( '', keys %HASH_ROMAN_DECIMAL);
    if ($numberToCheck =~ /^[$romanDigits]+$/ ){
        $isRoman = 1;
    }
    return $isRoman;
}
```

Overall, Alicia's solution feels complete and robust.

## Andrezgz {#andrezgz1}

[Andrezgz's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/andrezgz/perl/ch-1.pl) wisely re-uses code from previous challenges (dispatch tables from week 39, and Roman numeral encoding from week 10).

Andrezgz's check for a valid Roman number is a regex, and checks for reasonable counts of each numeral:

```perl
sub _is_valid_roman {
    return $_[0] =~ /
        ^                       # String start
        M{0,3}                  # Matching from 1000 to 3000
        (?:CM|CD|D|D?C{0,3})?   # Matching from 100 to 900
        (?:XC|XL|L|L?X{0,3})?   # Matching from 10 to 90
        (?:IX|IV|V|V?I{0,3})?   # Matching from 1 to 9
        $                       # String end
    /xi;
}
```

I know this code is the same as Andrezgz's week 10 solution, but it did not get highlighted in that review.

Thanks to the re-used code, the new code that Andrezgz wrote this week ended up being quite short:

```perl
my $operations = {
    '+' => sub { $_[0] + $_[1] },
    '-' => sub { $_[0] - $_[1] },
    'x' => sub { $_[0] * $_[1] },
    '/' => sub { $_[0] / $_[1] },
};
my $rn1 = shift;
my $op = shift;
my $rn2 = shift;
my $result = $operations->{$op}->( decode_roman(uc $rn1) , decode_roman(uc $rn2) );
print encode_roman($result);
```

The solution itself has comprehensive error checking, which I omitted for brevity.

## Athanasius {#athanasius1}

[Athanasius's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/athanasius/perl/ch-1.pl) uses [`Math::Roman`](https://metacpan.org/pod/Math::Roman) to convert to and from Roman numbers. The top-level logic looks like this, using string `eval` for the calculation itself:

```perl
my @OPERATIONS   => qw( + - * / % );      # '/' denotes *integer* division
my @ROMAN_DIGITS => qw( I V X L C D M );

my $args = scalar @ARGV;
$args == 3 or die "ERROR: Expected 3 command-line args but found $args\n";
my $lhs  = validate_roman(uc $ARGV[0]);
my $op   = $ARGV[1];
any { $op eq $_ } @OPERATIONS or die "ERROR: Unknown operator '$op'\n";
my $rhs  = validate_roman(uc $ARGV[2]);
my $rslt = roman(int eval "$lhs $op $rhs");
printf "%s %s %s = %s\n", uc $ARGV[0], $op, uc $ARGV[2], $rslt;
```

The `validate_roman` sub checks whether a string is a valid Roman number, and,
if so, takes it through `Math::Roman`:

```perl
sub validate_roman {
    my ($roman) = @_;
    for my $digit (split //, $roman) {
        any { $digit eq $_ } @ROMAN_DIGITS
            or die "ERROR: Unknown Roman digit '$digit'\n";
    }
    my $math_roman = roman($roman);
       $math_roman->is_nan() and die 'ERROR: ', Math::Roman::error(), "\n";
    return $math_roman->as_number();
}
```

## Cheok-Yin Fung {#cheok-yin-fung1}

[Cheok-Yin Fung's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/cheok-yin-fung/perl/ch-1.pl) uses string `eval` as well:

```perl
my $formula;
chomp($_ = <STDIN>);
if (/([A-Z]+)(\s*)([\+,\-,\*])(\s*)([A-Z]+)/) {
    $formula = roman_to_dec($1).$3.roman_to_dec($5);
}
my $result = eval $formula;
print dec_to_roman($result), "\n";
```

The regex to extract the arguments would be the perfect place to add error checking, so that arbitrary code is not passed to the `eval`.

Cheok-Yin Fung's `roman_to_dec` is interesting (`%sk` maps Roman numerals to Arabic values):

```perl
sub roman_to_dec {
    my $total = 0;
    my @char = split //, $_[0];
    for my $i (0..$#char-1) {
        $total += $sk{$char[$i]};
        if ($sk{$char[$i]} < $sk{$char[$i+1]}) {
            $total = $total - 2*$sk{$char[$i]};
        }
    }
    $total += $sk{$char[$#char]};
    $total;
}
```

There is a `dec_to_roman` as well that I won't show here, as it is long. It subtracts the value of the next digit (or pair) it can, in a loop, until it reaches zero.


## Dave Cross {#dave-cross1}

[Dave Cross's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/dave-cross/perl/ch-1.pl) also taps into CPAN, using [`Roman`](https://metacpan.org/pod/Roman) for a concise solution with dispatch tables:

```perl
use Roman;
my %ops = (
    '+' => sub { $_[0] + $_[1] },
    '-' => sub { $_[0] - $_[1] },
    '/' => sub { $_[0] / $_[1] },
    'x' => sub { $_[0] * $_[1] },
);
my ($l, $op, $r) = @ARGV;
unless (exists $ops{$op}) {
    warn "'$op' is  not a recognised operation\n";
    die 'Valid operations are: ', join(', ', keys %ops), "\n";
}
say Roman( $ops{$op}->(arabic($l), arabic($r)) );
```

## Dave Jacoby {#dave-jacoby1}

It seems both Daves opted to [`use Roman`](https://metacpan.org/pod/Roman) this week! [Dave Jacoby's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/dave-jacoby/perl/ch-1.pl) defines a map of valid operators, and then starts converting:

```perl
use Roman;
my %operators = map { $_ => 1 } qw{ + - / * };
if ( scalar @ARGV > 2 ) {
    my ( $r1, $op, $r2 ) = @ARGV;
    if ( !$operators{$op} ) {
        say 'not an operator';
        exit;
    }
    if ( !isroman($r1) ) { say qq{"$r1" is not a roman numeral}; exit; }
    if ( !isroman($r2) ) { say qq{"$r2" is not a roman numeral}; exit; }
    my $a1 = arabic($r1);
    my $a2 = arabic($r2);
    my $a3 = 0;
    if ( $op eq '+' ) { $a3 =  $a1 + $a2 }
    if ( $op eq '-' ) { $a3 =  $a1 - $a2 }
    if ( $op eq '*' ) { $a3 =  $a1 * $a2 }
    if ( $op eq '/' ) { $a3 =  $a1 / $a2 }
    my $r3 = uc roman($a3);
    say qq{ $r1 $op $r2 = $r3 };
}
else { say 'We need an operator and two roman numbers' }
```

**Blog** › [Counting from 100 is the Fun Part](https://jacoby.github.io/2020/02/12/counting-from-100-is-the-fun-part.html)

## Duane Powell {#duane-powell1}

[Duane Powell's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/duane-powell/perl/ch-1.pl) defines `arabic` and `roman` functions to convert between Arabic and Roman numbers. `roman` is essentially an `if` chain in a `while` loop to greedily build the Roman number from the largest to smallest digits, shown here, in part:

```perl
sub roman {
    my $arabic = shift;
    $arabic = int($arabic);
    my $roman = '';
    while ($arabic > 0) {
        if ($arabic >= 1000) {
            $roman .= $roman{1000};
            $arabic -= 1000;
            next;
        }
        if ($arabic >= 900) {
            $roman .= $roman{900};
            $arabic -= 900;
            next;
        }
        ...
        if ($arabic >= 1) {
            $roman .= $roman{1};
            $arabic -= 1;
            next;
        }
    }
    return $roman;
}
```

The `arabic` function `split`s the input Roman number, and then looks for patterns of numerals like `IX` that need to be considered together, before considering numerals individually:

```perl
sub arabic {
    my @roman = split(//, uc(shift));
    my ($arabic, $next, $error, $min) = (0, '', '', 1000);
    while (scalar @roman and not $error) {
        # Check for matching pair of Roman numerals, eg 'IV'
        if (scalar @roman > 1) {
            $next = $roman[0].$roman[1];
            if ( defined($arabic{$next}) ) {
                $arabic += $arabic{$next};
                $error = "Roman numeral out of sequence at $next" if ($arabic{$next} > $min);
                $min = $arabic{$next};
                shift @roman;
                shift @roman;
                next;
             }
        }
        # Pair not found, maybe there is one matching numeral, eg 'I'
        if (scalar @roman > 0) {
            $next = $roman[0];
            if ( defined($arabic{$next}) ) {
                $arabic += $arabic{$next};
                $error = "Roman numeral out of sequence at $next" if ($arabic{$next} > $min);
                $min = $arabic{$next};
                shift @roman;
                next;
             }
            else {
                $error = "Invalid Roman numeral at $next";
            }
        }
    }
    if ($error) {
        say $error;
        exit;
    }
    return $arabic;
}
```

The main logic is then simple:

```perl
my $n = arabic($r1);
my $m = arabic($r2);
my $a = eval "$n $op $m";
my $r = roman($a);
say $r, " (", $a, ")";
```

## Duncan C. White {#duncan-c-white1}

[Duncan C. White's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/duncan-c-white/perl/ch-1.pl) uses `Roman` as well:

```perl
use Roman;
die "Usage: romancalc R1 OP R2    [R1 and R2 are Roman numerals or integers]\n".
    "or:    romancalc test\n"
    unless @ARGV==3 || (@ARGV==1 && $ARGV[0] eq "test");
my( $r1, $op, $r2 ) = @ARGV;
my $origr1 = $r1;
my $origr2 = $r2;
$r1 = fromroman($r1) if $r1 =~ /^[MCDLXVI]+$/;
$r2 = fromroman($r2) if $r2 =~ /^[MCDLXVI]+$/;
die "romancalc: bad r1: $r1\n" unless $r1 > 1 && $r1 < 4000;
die "romancalc: bad r2: $r2\n" unless $r2 > 1 && $r2 < 4000;
my $n = eval "$r1 $op $r2" || die "romancalc: bad operator $op\n";
$n = int($n);
my $r = toroman($n);
say "result of $origr1 ($r1) $op $origr2 ($r2): $r ($n)";
```

## E. Choroba {#e-choroba1}

[E. Choroba's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/e-choroba/perl/ch-1.pl) reuses his Roman/Arabic code from Week 10, adding a dispatch table to handle the arithmetic:

```perl
use lib '.';
use MyRoman qw{ to_roman from_roman }; # Extracted from PWC010/1.
my ($n1, $op, $n2) = @ARGV;
my $function = { '+' => sub { $_[0] + $_[1] },
                 '-' => sub { $_[0] - $_[1] },
                 '*' => sub { $_[0] * $_[1] },
                 '/' => sub { int($_[0] / $_[1]) }
               }->{$op}
    or die "Unknown operator $op.";
say to_roman($function->(map from_roman($_), $n1, $n2));
```

## Jaldhar H. Vyas {#jaldhar-h-vyas1}

[Jaldhar H. Vyas's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/jaldhar-h-vyas/perl/ch-1.pl) goes through a multi-step procedure whereby each Arabic number is converted naïvely to the simplest expression of Roman numerals. E.g, 4 would be `IIII`, and is then `normalize`d to `IV`. A similar process happens in the reverse order.

There is also a `reorder` function that puts the numerals in their proper order, just before the `normalize` step:

```perl
sub reorder {
    my ($num) = @_;
    my %order = (
        'M' => 0, 'D' => 1, 'C' => 2, 'L' => 3, 'X' => 4, 'V' => 5, 'I' => 6
    );
    return join q{}, sort { $order{$a} <=> $order{$b} } split //, $num;
}

sub normalize {
    my ($num) = @_;
    my @from = qw/ IIIII IIII VV VIV XXXXX XXXX LL LXL CCCCC CCCC DD DCD /;
    my @to =   qw/ V     IV   X  IX  L     XL   C  XC  D     CD   M  CM  /;
    for my $i (0 .. scalar @from - 1) {
        $num =~ s/$from[$i]/$to[$i]/g;
    }
    return $num;
}
```

The main logic supports addition and subtraction. Pay close attention to how these operations are implemented:

```perl
my ($num1, $op, $num2) = @ARGV;
if ($op eq '+') {
    say normalize(reorder(unprefix($num1) . unprefix($num2)));
} elsif ($op eq '-') {
    my $un1 = unprefix($num1);
    my $un2 = unprefix($num2);
    while (length $un2) {
        ($un1, $un2) = expandLargest(removeCommon($un1, $un2));
    }
    say normalize($un1);
} else {
    usage();
}
```

And now we see the reason Jaldhar needed those "extra" subroutines: he never converts the numbers to Arabic at all! For example, the addition operator simply expands and concatenates the Roman numbers, and then normalizes them again so the answer is in proper Roman format. I like this approach a lot.

## Javier Luque {#javier-luque1}

[Javier Luque's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/javier-luque/perl/ch-1.pl) uses [`Number::Convert::Roman`](https://metacpan.org/pod/Number::Convert::Roman) to do the conversion, so the code is relatively short:

```perl
use Number::Convert::Roman;
my $input_string = join ' ', @ARGV;
my $c = Number::Convert::Roman->new;
my %operations = (
    '+' => sub {return ($c->arabic($_[0]) + $c->arabic($_[1]))},
    '-' => sub {return ($c->arabic($_[0]) - $c->arabic($_[1]))},
    'x' => sub {return ($c->arabic($_[0]) * $c->arabic($_[1]))},
    '/' => sub {return ($c->arabic($_[0]) / $c->arabic($_[1]))},
);
if ($input_string =~ /^(\w+)\s*([\+\-x\/])\s*(\w+)$/) {
    say $c->roman(int($operations{$2}->($1, $3)));
} else {
    say "Invalid input";
}
```

Javier uses a dispatch table in `%operations` for simple yet extensible code, and the `$input_string` regexp serves to help parse and validate the input.

**Blog** › [047 – Perl Weekly Challenge](https://perlchallenges.wordpress.com/2020/02/10/perl-weekly-challenge-047/)

## Laurent Rosenfeld {#laurent-rosenfeld1}

[Laurent Rosenfeld's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/laurent-rosenfeld/perl/ch-1.pl) also re-uses his `from_roman` and `to_roman` subroutines from Week 10. However, I would like to highlight his `from_roman` subroutine in particular, as it uses a less common algorithm:

```perl
my %rom_tab = (I => 1,  V => 5, X => 10, L => 50, C => 100, D => 500, M => 1000);
sub from_roman {
    my $roman = uc shift;
    my $numeric = 0;
    my $prev_letter = "M";
    for my $letter (split //, $roman) {
        $numeric -= 2 * $rom_tab{$prev_letter}
            if $rom_tab{$letter} > $rom_tab{$prev_letter};
        $numeric += $rom_tab{$letter};
        $prev_letter = $letter;
    }
    return $numeric;
}
```

Since Roman numbers are additive (i.e., you simply add the values of each numeral) *unless* the following numeral is greater than the current one (e.g., `IV`: `I` (1) is less than `V` (5)), in which case that relationship is a subtractive one.

What Laurent does here, when building up the answer in `$numeric`, is to *always* add the numbers, *and* if `$letter` is greater than the `$prev_letter`, subtract it twice, to make up for the addition.

Laurent's main logic is similarly concise:

```perl
my @input;
for (@ARGV) {
    push @input, $_ if /[-+*\/]/;
    push @input, from_roman $_ if /[ivxlcdm]+/i;
}
die "Need at least three parameters" if @input < 3; # we need at least 1 operator and two operands
my $result = eval join ' ', @input;
say "@ARGV = ", to_roman $result;
```

**Blog** › [Roman Calculator and Gapful Numbers](http://blogs.perl.org/users/laurent_r/2020/02/perl-weekly-challenge-47-roman-calculator-and-gapful-numbers.html)

## Lubos Kolouch {#lubos-kolouch1}

[Lubos Kolouch's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/lubos-kolouch/perl/ch-1.pl) also uses `Roman`. Lubos has a `roman_magic` sub that does the, well, *magic* step of taking two Roman numbers and an operator, and returning the result in Roman form:

```perl
use Roman;
sub roman_magic {
    my ($v1, $op, $v2) = @_;
    my $rom_v1 = arabic($v1);
    my $rom_v2 = arabic($v2);
    return uc(roman(eval "$rom_v1 $op $rom_v2"))
}
```

His main code is then, simply:

```perl
my ($v1, $op, $v2) = @ARGV;
print roman_magic($v1, $op, $v2)."\n";
```

## Phillip Harris {#phillip-harris1}

[Phillip Harris's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/phillip-harris/perl/ch-1.pl) uses an `if ... elsif` chain to perform the desired arithmetic operation:

```perl
my $input = join( " ", @ARGV );
if ( $input !~ /.*?([IVXLCDM]+)(.*?)([IVXLCDM]+)/ ) { die "Invalid input" }
my $number1  = $1;
my $operator = $2;
my $number2  = $3;
$operator =~ s/[^\+\-\*\/]//g;
if ( $operator eq '+' ) {
    print dec2rom( rom2dec($number1) + rom2dec($number2) );
}
elsif ( $operator eq '-' ) {
    print dec2rom( rom2dec($number1) - rom2dec($number2) );
}
elsif ( $operator eq '*' ) {
    print dec2rom( rom2dec($number1) * rom2dec($number2) );
}
elsif ( $operator eq '/' ) {
    print dec2rom( int( rom2dec($number1) / rom2dec($number2) + .5 ) );
}
else { die "Invalid operator" }
print "\n";
```

Phillip's `dec2rom` and `rom2dec` subs do the heavy lifting. I'd like to show the `dec2rom` sub:

```perl
sub dec2rom {
    my @rdb = qw(I IV V IX X  XL L  XC C   CD  D   CM  M);
    my @ddb = qw(1 4  5 9  10 40 50 90 100 400 500 900 1000);
    my $dec = $_[0];
    my $rom;
    for ( my $x = $#ddb ; $x >= 0 ; $x-- ) {
        if ( $dec / $ddb[$x] >= 1 ) {
            $rom .= $rdb[$x] x int( $dec / $ddb[$x] );
            $dec = $dec - ( $ddb[$x] * int( $dec / $ddb[$x] ) );
        }
    }
    return $rom;
}
```

Phillip's algorithm here is an efficient and concise variant of the subtraction method we've seen before. Phillip realizes that once you have used a numeral (or subtractive group like `IV`), it can't appear again, so he checks for each of them in turn (from largest to smallest), subtracting from the input number while the output string is built up.



## Ruben Westerberg {#ruben-westerberg1}

[Ruben Westerberg's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/ruben-westerberg/perl/ch-1.pl) contains `romanToDecimal` and `decimalToRoman` subs. `romanToDecimal` is interesting:

```perl
sub romanToDecimal {
    my %r=(M=>1000, D=>500, C=>100, L=>50, X=>10, V=>5, I=>1);
    my @c=split '', shift;
    my $diff=0;
    my $sum=0;
    for (my $i=0; $i<@c; $i++) {
        if (($i+1) < @c) {
            if ($r{$c[$i+1]} > $r{$c[$i]}) {
                $diff=$r{$c[$i]};
            }
            else {
                $sum+= $r{$c[$i]} -$diff;
                $diff=0;
            }
        }
        else {
            $sum+=$r{$c[$i]} -$diff;
        }
    }
    return $sum;
}
```

The input Roman number is `split` into a `@c` character array. Similar to Laruent's solution, above, Ruben looks at the current character and the next character. If the next character is greater, the current character is subtracted from it on the *next* iteration. Otherwise, `$diff` will be zero.

The main logic uses `given ... when` to perform the correct operation:

```perl
use v5.26;
no warnings qw<experimental>;
my ($operand1,$operator, $operand2)=@ARGV;
($operand1,$operand2)=map {
    given ($_) {
        romanToDecimal($_) when /[MDCLXVI]/;
        $_ when /\d+/;
        "Not a digit or roman numeral";
    }
} ($operand1,$operand2);
my $result = do {
    given ($operator) {
        $operand1+$operand2 when /\+/;
        $operand1-$operand2 when /\-/;
        $operand1*$operand2 when /\*/;
        int ($operand1/$operand2) when /\//;
        "Unkown";
    }
};
print decimalToRoman($result);
```


## Ryan Thompson {#ryan-thompson1}

[My solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/ryan-thompson/perl/ch-1.pl) is partly re-used from some code I wrote years ago. After defining a `%rom` hash which maps every single and double character to its value (e.g., `I => 1, IV => 4, ...`), conversion is easy. (`@mor` is all the pairs in `%rom`, sorted in descending order of their value:

```perl
my @mor = map { [ $rom{$_} => $_ ] } sort { $rom{$b} <=> $rom{$a} } keys %rom;

sub arabic_to_roman {
    my $n = shift;
    my $r = '';
    while ($n) {
        my ($val, $rom) = @{( first { $_->[0] <= $n } @mor )};
        $n -= $val;
        $r .= $rom;
    }
    $r;
}
```

As you can see, the `$r` result is built by greedily subtracting the highest value possible, until the number, `$n` reaches zero. Since `@mor` contains pairs like `IV` and `XL`, it just works.

Going the other way is even easier:

```perl
sub roman_to_arabic {
    sum map { $rom{$_} } pop =~ /(I[VX]|X[LC]|C[DM]|[IVXLCDM])/g
}
```

The regex pulls out any single numerals *and* also pulls out pairs, so it will sum the correct fragments of the string.

My main logic uses string `eval` with some sanitization of the input, so it can handle arbitrary arithmetic expressions, not just a single operator:

```perl
say roman_expr(join ' ', @ARGV) and exit if @ARGV;

# Perform arbitrary expressions using Roman numerals
sub roman_expr {
    my $expr = shift;
    $expr =~ s/\b([IVXLCDM]+)\b/roman_to_arabic($1)/eg;
    die "Invalid expression" if $expr =~ m![^ 0-9+*%/()-]!;
    arabic_to_roman( eval $expr );
}
```

**Blog** › [Roman Calculator](http://www.ry.ca/2020/02/roman-calculator/)

## Saif Ahmed {#saiftynet1}

[Saif Ahmed's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/saiftynet/perl/ch-1.pl), as I've come to expect, is comprehensive, and interesting. Saif went to some effort to support larger Roman numbers, which are typically depicted with an overline, which means "multiply this digit by 1000". So, when I put `MCM * X` into Saif's prompt, it shows (roughly):

```
         _ _
Answer = XMX
```

Saif uses the ANSI "overline" sequence `\e[0;53m`, so I can't show it exactly, here. You can turn this off in his script, and it's automatically disabled on Windows.

Saif uses string `eval` to calculate the result after converting the Roman numbers to Arabic with the `arabic` sub:

```perl
our @converter=(
   [900 ,"CM"],   [1000,"M" ], [400 ,"CD"],   [500 ,"D" ],
   [90  ,"XC"],   [100 ,"C" ], [40  ,"XL"],   [50  ,"L" ],
   [9   ,"IX"],   [10  ,"X" ], [4   ,"IV"],   [5   ,"V" ],
   [1   ,"I" ],
);

sub arabic {
    my $roman = shift;
    return 0 if !$roman;
    my $arabic = 0;
    foreach my $conv (@converter) {
        my $re = $$conv[1];
        $arabic += $$conv[0] while $roman =~ s/$re//i;
    }
    return $arabic;
}
```

This is a nicely compact implementation, taking the next highest pair `@converter` that matches the input string.


## User Person {#user-person1}

[User Person's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/user-person/perl/ch-1.pl) uses `Roman` to convert to and from Roman numbers. Here's the main logic:

```perl
print STDERR "[Arabic number detected in input]\n" if $argString =~ m{\d+};
$argString =~ s{(\s*[-+*/%]\s*)}{ $1 }g;
$argString =~ s{([MDCLXVI]+)}{arabic $1}ge;
my $result = eval $argString;
my $oldResult = $result;
$result = int $result;
my $decimal = $oldResult - $result;
print STDERR "Calculation result had a decimal $decimal that was truncated.\n" if $decimal;
if ( $result == 0) {
    print "N (no formal zero)\n"; # https://en.wikipedia.org/wiki/Roman_numerals#Zero
} elsif ($result > 3_999) {
    die "Calculation result $result exceeds MMMCMXCIX (3,999) the maximum value of the Roman number format.\n";
} elsif ($result < 0) {
    die "Calculation result $result is negative. Roman numbers are positive integers.\n";
} else {
    $result = Roman(int $result);
    print "$result\n";
}
```

The logic is quite comprehensive, even going so far as to disallow Arabic numbers in the input, even though `eval` would handle them. I respect User Person's strict adherence to the business logic!

## Wanderdoc {#wanderdoc1}

[Wanderdoc's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/wanderdoc/perl/ch-1.pl) contains the comment that the code was `Way too cumbersome, I think.`. At 133 lines (~108 SLOC), it is lengthy, but I disagree with "cumbersome," as it is written in a modular style with several short (5-10 line) subroutines that all serve a purpose.


```perl
# Some basic data.
my %romans = (I => 1, V => 5, X => 10,
              L => 50, C => 100, D => 500,
              M => 1000);
my %arabic = reverse %romans;
my %expand = ('I~V' => 'I', 'V~X' => 'I', 'X~L' => 'X', 'L~C' => 'X', 'C~D' => 'C', 'D~M' => 'C',
              'M~M'=> 'M');
my %before;
for my $key ( sort { $romans{$expand{$a}} <=> $romans{$expand{$b}} } keys %expand ) {
     my ($left, $right) = split(/~/, $key);
     $before{ $right } = $expand{$key} if not exists $before{ $right };
     $before{ $left }  = $expand{$key} if not exists $before{ $left };
}
```

The data structures in Wanderdoc's solution were interesting. As you can see, the `%expand` hash contains the pairings of subtractive numerals, and maps them to the numerals that would follow them (e.g., `VX` would always come before `I`), which is helpful to Wanderdoc's subs.

Below is the main logic (I've removed some input validation, for brevity). I respect Wanderdoc's willingness to credit others for techniques used. After all, re-use and sharing of code and ideas is what makes the whole field of computer science better overall.

```perl
# Roman numerals regex - e.g. here: https://stackoverflow.com/questions/267399
my $rom_re = qr/^M{0,3}(?:C[MD]|D?C{0,3})(?:X[CL]|L?X{0,3})(?:I[XV]|V?I{0,3})$/;
my $re_opr = qr#^(?:[+-/]|\*{1,2})$#;
my ($op_1, $opr, $op_2) = @ARGV;
# Dispatch table for calculations, learned from choroba.
my %calc = (
     '+' => sub { return $_[0] + $_[1]; },
     '-' => sub { return $_[0] - $_[1]; },
     '*' => sub { return $_[0] * $_[1]; },
     '/' => sub { # Well, there is no 0 in Roman numerals :-)
                  return "ERROR: Division by zero!" if 0 == $_[1];
                  return int($_[0] / $_[1]); },
     '**' => sub { return $_[0] ** $_[1]; },
);
# Transformation, calculation and back-transformation.
($op_1, $op_2) = map rom2int($_) , ($op_1, $op_2);
my $result = $calc{$opr}->($op_1, $op_2);
$result = int2rom($result);
print $result, $/;
```

***

***

# Task #2 - Gapful Numbers {#task2}

The Gapful numbers are defined by [OEIS sequence A108343](https://oeis.org/A108343)

This task had us write a script to print the first 20 Gapful numbers. Gapful numbers are numbers, 100 or greater, that are divisible by the concatenation of their first and last digits. So, for example, 100 is a gapful number because 100 is divisible by 10. 102 is not, because 102 is not divisible by 12.

***

The solutions to this were considerably shorter than Task 1's solutions, so I'll be able to showcase more of the exceptional talent we have participating in this challenge.

The solutions were all quite similar, as there are only a few reasonable ways to get the first and last digits of a number and check for divisibility. Still, there are a couple solutions you'll see that iterate in interesting ways.

## Alicia Bielsa {#alicia-bielsa2}

[Alicia Bielsa's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/alicia-bielsa/perl/ch-2.pl) uses `split` to get the `$firstDigit` and `$lastDigit`, and then the modulo operator to test for divisibility:

```perl
my $totalGapfulNumbers = 20;
my $totalGapfulNumbersFound = 0;
my $currentNumber = 100;
while ($totalGapfulNumbersFound < $totalGapfulNumbers ) {
    my ($firstDigit, $lastDigit ) = (split('',$currentNumber))[0, length($currentNumber)-1];
    my $firstLastNumber = $firstDigit.$lastDigit;
    if ($currentNumber % $firstLastNumber   == 0) {
        print "Gapful number found: $currentNumber\n";
        $totalGapfulNumbersFound++;
    }
    $currentNumber++;
}
```

We will definitely be seeing this approach again!

## Andrezgz {#andrezgz2}

[Andrezgz's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/andrezgz/perl/ch-2.pl) uses `substr` to pull out the first and last characters:

```perl
use strict;
use warnings;
my $n = 99;
my $gapfuls = 0;
while ($gapfuls < 20) {
    print $n.$/ if ++$n % ( substr($n, 0, 1) . substr($n, -1) ) == 0 && $gapfuls++;
}
```

Note the negative index to `substr` means "from the right", so -1 is the last character in the string. Perl's array indexing works the same way.

## Athanasius {#athanasius2}

[Athanasius's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/athanasius/perl/ch-2.pl) uses `split` to get the first character, and `$num % 10` to get the last character, then checks divisibility with the modulo operator:

```perl
while ( $count < $TARGET ) {
    my $div = ( split //, $num )[0] * 10 + $num % 10;
    if ( $num++ % $div == 0 ) {
        push @gapfuls, $num - 1;
        ++$count;
    }
}
printf "The first %d Gapful Numbers greater than or equal to %d are:\n%s\n",
    $TARGET, $MINIMUM, join ', ', @gapfuls;
```


## Cheok-Yin Fung {#cheok-yin-fung2}

[Cheok-Yin Fung's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/cheok-yin-fung/perl/ch-2.pl) gets the first and last digits with integer arithmetic, with the following justification for the maximum length of the 20th gapful number:

```perl
# All integers with the pattern _ABAB_ is gapful(_AB_*101) and there are
# 10*9/2 + 9 = 54 (A runs from 0 to 9, B runs from 0 to 9, 0000 is not counted)
# such integers. In short, all 20 first >= 100 gapful numbers are larger than
# 99 and smaller than 9999.

my $th;
my $c = 0;
for my $N (100..999) {
    $th = 10 * int($N / 100) + ($N % 10);
    if ($N % $th == 0) {$c++; print $c, ". ", $N , "\n";}
    if ($c==20) {exit;}
}
for my $N (1000..9999) {
    $th = 10 * int($N / 1000) + ($N % 10);
    if ($N % $th == 0) {$c++; print $c, ". ", $N , "\n";}
    if ($c==20) {exit;}
}
```

## Colin Crain {#colin-crain2}

[Colin Crain's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/colin-crain/perl/ch-2.pl) uses `substr` to get the first and last digits:

```perl
my $testval = 99;
my @output;
while (scalar @output < 20 && $testval++ ) {
    my $gap = substr( $testval, 0, 1 ) . substr( $testval, -1, 1 );
    push @output, $testval if $testval % $gap == 0;
}
say for @output;
```

## Cristina Heredia {#cristian-heredia2}

[Cristina Heredia's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/cristian-heredia/perl/ch-2.pl)
uses `split` to get the digits of the number:

```perl
my $max = 20;
my $counter = 0;
my @divided;
my @solution;
for (my $number = 100; $counter < $max; $number++) {
    my $newNumber;
    @divided = split(/d?/, $number);
    $newNumber = @divided[0].@divided[@divided-1];
    if (($number % $newNumber) == 0) {
        push(@solution, $number);
        $counter++;
    }
}
print "The first $max Gapful Numbers are:\n";
for (my $i = 0; $i < @solution; $i++) {
    print "@solution[$i]\n";
}
```

The `split /d?/, $number` works, but most likely does so in an unintended way: The regex matches zero or one literal `d` characters, so in this case (where no literal `d` characters are expected in the input), it will have the same effect as `split //`, which is to split on every character.

I would also use `$solution[$i]` to reference a single array element instead of `@solution[$i]`.

## Dave Cross {#dave-cross2}

[Dave Cross's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/dave-cross/perl/ch-2.pl) builds up an array of `@gapful` numbers, using a slice of `split` for the first and last characters:

```perl
my @gapful;
$_ = 100;
while (@gapful < 20) {
  push @gapful, $_ unless $_ % join '', (split //)[0, -1];
  ++$_;
}
say "@gapful";
```

## Dave Jacoby {#dave-jacoby2}

[Dave Jacoby's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/dave-jacoby/perl/ch-2.pl) showcases a few different methods of attacking this problem. The first is Dave's "readable" solution:

```perl
my @x;
my $n = 100;
while ( scalar @x < 20 ) {
    my @n = split //, $n;
    my $i = join '', $n[0], $n[-1];
    push @x, $n if $n % $i == 0;
    $n++;
}
say join "\n", @x;
say '-' x 30;
```

Dave also included a "way cool" functional version:

```perl
say join "\n", grep { state $c = 0; $c++ < 20 }
    grep { my $i = join '', substr( $_, 0, 1 ), substr( $_, -1 ); $_ % $i == 0 }100 .. 1000;
```

Dave, I agree, it's way cool.

And finally, an iterator, which is a good fit for this problem:

```perl
my $next = make_iterator(100);
while ( my $n = $next->() ) {
    state $c = 0;
    my $i =  my $i = join '', substr( $n, 0, 1 ), substr( $n, -1 );
    if ( 0==$n%$i){
        say $n;
        $c++;
    }
    last if $c >19;
}

sub make_iterator ( $start ) {
    return sub {
        state $i = $start;
        return $i++;
    }
}
```

**Blog** › [Counting from 100 is the Fun Part](https://jacoby.github.io/2020/02/12/counting-from-100-is-the-fun-part.html)

## Duane Powell {#duane-powell2}

[Duane Powell's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/duane-powell/perl/ch-2.pl) uses `split` to get the first and last digits of a three-digit number, and concatenates them into `$x`. He then uses `int`eger division to check for divisibility:

```perl
my @gap;
my $n = 100;
while (scalar @gap < 20) {
    my ($a,undef,$b) = split(//,$n);
    my $x = "$a$b"; # form new number by combining first and last digit of $n
    push @gap, $n if ($n/$x == int($n/$x));
    $n++;
}
say join(',',@gap);
```

## Duncan C. White {#duncan-c-white2}

[Duncan C. White's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/duncan-c-white/perl/ch-2.pl) uses a regex with captures to get the first and last digits, combines them arithmetically, and then returns the result of a modulo operation to test for divisibility:

```perl
use Function::Parameters;
fun gapful( $i ) {
    $i =~ /^(\d).*(\d)$/;    # find first and largest digits
    my $div = 10*$1 + $2;
    return $i % $div == 0 ? 1 : 0;
}
die "Usage: ch-2.pl [FirstN]\n" if @ARGV>1;
my $n = shift // 20;
my $found = 0;
for( my $i = 100; $found<$n; $i++ ) {
    next unless gapful( $i );
    say $i;
    $found++;
}
```

## E. Choroba {#e-choroba2}

[E. Choroba's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/e-choroba/perl/ch-2.pl) creates an iterator that returns the next gapful number, lazily:

```perl
sub gapful_iterator {
    my ($n) = @_;
    my $iterator = sub {
        $n++ until 0 == $n % join "", $n =~ /^(.)/, $n=~ /(.)$/;
        $n++
    };
}
my $iter = gapful_iterator(100);
say $iter->() for 1 .. 20;
```

## Jaldhar H. Vyas {#jaldhar-h-vyas2}

[Jaldhar H. Vyas's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/jaldhar-h-vyas/perl/ch-2.pl) uses `split` and modulo in a loop to build the list of `@gapfuls`:

```perl
my @gapfuls;
my $number = 100;
while (scalar @gapfuls != 20) {
    my @digits = split //, $number;
    my $divisor = join q{}, ($digits[0], $digits[-1]);
    if ($number % $divisor == 0) {
        push @gapfuls, $number;
    }
    $number++;
}
say join ', ', @gapfuls;
```

## Javier Luque {#javier-luque2}

[Javier Luque's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/javier-luque/perl/ch-2.pl) uses a capturing regex, concatenates the first and last digits, and then uses mod arithmetic:

```perl
my $n = 100;
my $p = 0;
while ($p < 20) {
    $n =~ /^(\d)\d*(\d)$/;
    my $g_divisor = $1 . $2;
    if ($n % $g_divisor == 0){
        $p++;
        say $n . ' / ' . $g_divisor . ' = ' .
            ($n / $g_divisor);
    }
    $n++;
}
```

**Blog** › [047 – Perl Weekly Challenge](https://perlchallenges.wordpress.com/2020/02/10/perl-weekly-challenge-047/)

## Laurent Rosenfeld {#laurent-rosenfeld2}

[Laurent Rosenfeld's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/laurent-rosenfeld/perl/ch-2.pl) builds up a list of `@gapful` numbers with the help of a capturing regex and our best friend in this task, the modulo operator:

```perl
my @gapful = ();
my $current = 100;
do {
    my ($start, $end) = $current =~ /^(\d)\d+(\d)$/;
    push @gapful, $current unless $current % ($start . $end);
    $current ++;
} until $#gapful >= 19;
say "@gapful";
```

**Blog** › [Roman Calculator and Gapful Numbers](http://blogs.perl.org/users/laurent_r/2020/02/perl-weekly-challenge-47-roman-calculator-and-gapful-numbers.html)

## Lubos Kolouch {#lubos-kolouch2}

[Lubos Kolouch's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/lubos-kolouch/perl/ch-2.pl) uses `substr` to get the first and third digits:

```perl
my $count = 0;
for (100..10000) {
    if ($_ % int(substr($_,0,1).substr($_,2,1)) == 0) {
        say;
        $count++;
        last if $count == 20;
    }
}
```

Lubos' loop goes to 10000, so `substr($_,2,1)` will not always return the last digit. Fortunately, the first 20 gapful numbers are all three digit numbers, so it works in this case.

## Mohammad S Anwar {#mohammad-anwar2}

[Mohammad S Anwar's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/mohammad-anwar/perl/ch-2.pl) also works on three digit numbers, using `split`, and then `sprintf` to combine the first and third digits:

```perl
my $start = 99;
my $count = 0;
while ($count <= 20) {
    $start++;
    my ($d1, $d2, $d3) = split //, $start;
    my $divisor = sprintf("%d%d", $d1, $d3);
    if ($start % $divisor != 0) {
        next;
    }
    else {
        $count++;
        print sprintf("%d / %d\n", $start, $divisor);
    }
}
```

## Phillip Harris {#phillip-harris2}

[Phillip Harris's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/phillip-harris/perl/ch-2.pl) uses
`substr` with `0` and `-1` for indicies to get the first and last digits:

```perl
$x = 100;
while ( $gaps < 20 ) {
    if ( $x % ( substr( $x, 0, 1 ) . substr( $x, -1 ) ) == 0 ) {
        print "$x\n";
        $gaps++;
    }
    $x++;
}
```

## Ruben Westerberg {#ruben-westerberg2}

[Ruben Westerberg's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/ruben-westerberg/perl/ch-2.pl) uses `split` and an array slice of the result to get the first and last digits:

```perl
my @gapful;
while (@gapful < 20) {
    state $i=99;
    push @gapful, $i unless ++$i % int join "", do {my @a=split("",$i);@a[0,-1]};
}
print join " ",@gapful;
```

## Ryan Thompson {#ryan-thompson2}

[My solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/ryan-thompson/perl/ch-2.pl) first defines an `is_gapful` sub that uses `split` and a slice:

```perl
sub is_gapful(_) { $_ = pop; not $_ % join '', (split '')[0,-1] }
```

Then I gather the `@r`esult in the following `for` loop:

```perl
sub first_n_gapful {
    my $N = shift;
    my @r;
    for ($_ = 100; @r < $N; $_++) {
        push @r, $_ if is_gapful;
    }
    @r;
}
say for first_n_gapful(shift // 20);
```

**Blog** › [Gapful Numbers](http://www.ry.ca/2020/02/gapful-numbers/)

## Saif Ahmed {#saiftynet2}

[Saif Ahmed's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/saiftynet/perl/ch-2.pl) concatenates two `substr` results:

```perl
my $test=99;
my $found=0;
while ($found++<20) {
    while( ++$test % (substr($test,0,1).substr($test,-1,1))) { }
    print $found," ",$test,"\n";
}
```

## Steven Wilson {#steven-wilson2}

[Steven Wilson's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/steven-wilson/perl/ch-2.pl) concatenates `substr` calls as well:

```perl
my @gapful_numbers;
my $current_number = 100;
while ( scalar @gapful_numbers < 20 ) {
    my $divisor = ( substr $current_number, 0, 1 )
        . ( substr $current_number, -1, 1 );
    if ( $current_number % $divisor == 0 ) {
        push @gapful_numbers, $current_number;
    }
    $current_number++;
}
say join ' ', @gapful_numbers;
```

## Ulrich Rieke {#ulrich-rieke2}

[Ulrich Rieke's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/ulrich-rieke/perl/ch-2.pl) defines an `isGapful` sub that uses a capturing regex:

```perl
sub isGapful {
  my $number = shift ;
  $number =~ /(\d)\d+(\d)/ ;
  my $first = $1 ;
  my $last = $2 ;
  return ( ($number % ( $first . $last )) == 0 ) ;
}
```

The results are then gathered with the following `while` loop, then printed:

```perl
my @numbers ;
my $start = 99 ;
while ( scalar @numbers != 20 ) {
  $start++ ;
  if ( isGapful( $start ) ) {
      push( @numbers, $start ) ;
  }
}
map { print "$_ " } @numbers ;
print "\n" ;
```

## User Person {#user-person2}

[User Person's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/user-person/perl/ch-2.pl) defines a `firstDigit` helper sub to return the first digit of a number (there is no `lastDigit` sub, as a simple `% 10` is used for that):

```perl
sub firstDigit {
    my $number = $_[0];
    while ($number >= 10) {
        $number /= 10;
    }
    return int($number);
}
```

The numbers are then printed in the body of the following `for` loop:

```perl
my $QUANTITY = 20;
my ($first, $last);
my $count = 0;
for (my $i = 100; $count < $QUANTITY ; ++$i) {
    $first = firstDigit $i;
    $last  = $i % 10;
    my $formedBy = ($first * 10) + $last;
    if ( $i % $formedBy == 0 ) {
        print "$i ";
        ++$count;
    }
}
print "\n";
```

## Wanderdoc {#wanderdoc2}

[Wanderdoc's solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/wanderdoc/perl/ch-2.pl) also has a `gapful` sub, using a `split` slice:

```perl
sub gapful {
     my $num = $_[0];
     my $div = join('',(split(//,$num))[0, -1]);
     return 0 == $num % $div;
}
```

The results are then printed in this `while` loop:

```perl
my $number = 100;
my $counter = 0;
while ( $counter < 20 ) {
     gapful($number) and print join(' ', ++$counter,$number), $/;
     $number++;
}
```

***

***

## See Also {#blogs}

### Perl blogs this week:

**Dave Jacoby** › [Counting from 100 is the Fun Part](https://jacoby.github.io/2020/02/12/counting-from-100-is-the-fun-part.html)

**Javier Luque** › [047 – Perl Weekly Challenge](https://perlchallenges.wordpress.com/2020/02/10/perl-weekly-challenge-047/)

**Laurent Rosenfeld** › [Roman Calculator and Gapful Numbers](http://blogs.perl.org/users/laurent_r/2020/02/perl-weekly-challenge-47-roman-calculator-and-gapful-numbers.html)

**Ryan Thompson** › [Roman Calculator](http://www.ry.ca/2020/02/roman-calculator/) | [Gapful Numbers](http://www.ry.ca/2020/02/gapful-numbers/)

