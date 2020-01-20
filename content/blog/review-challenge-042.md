---
title: "Perl Weekly Review: Challenge - 042"
date: 2020-01-20T00:00:00+00:00
description: "Perl Weekly Review: Challenge - 042."
type: post
image: images/blog/p5-review-challenge-042.jpg
author: Mohammad S Anwar
tags: ["Perl"]
---
***
***
Continues from [**previous week**](/blog/review-challenge-041/).

Feel free to [**submit a merge request or open a ticket**](https://github.com/manwar/perlweeklychallenge) if you found any issues with this post. We highly appreciate and welcome your feedback.

For a quick overview, go through the [**original tasks**](/blog/perl-weekly-challenge-042/) and [**recap**](/blog/recap-challenge-042/) of the weekly challenge.

Additional feedback to our Perl Weekly Challenge’s [**Twitter account**](https://twitter.com/perlwchallenge?lang=en) is much appreciated.

***
***
## Task #1
***
***

### Octal Number System

Write a script to print decimal number 0 to 50 in **Octal Number System**.

For example:

##### Decimal 0  = Octal 0

##### Decimal 1  = Octal 1

##### Decimal 2  = Octal 2

##### Decimal 3  = Octal 3

##### Decimal 4  = Octal 4

##### Decimal 5  = Octal 5

##### Decimal 6  = Octal 6

##### Decimal 7  = Octal 7

##### Decimal 8  = Octal 10

and so on.

***
***

## Adam Russell

**Adam** shared the power of **sprintf()** in his solution.

```perl
use strict;
use warnings;
MAIN:{
    for my $x (0..50){
        print "Decimal $x = Octal " . sprintf("%o", $x) . "\n";
    }
}
```

***

## Alicia Bielsa

**Alicia** followed similar path like **Adam** but used **printf()** instead. More compact, good job.

```perl
use strict;
use warnings;

foreach my $i ( 1..50 ) {
    printf("Decimal $i = Octal %o\n",$i);
}
```
***

## Burkhard Nickels

**Burkhard** shared both **printf()** and **sprintf()** version. Ideal for someone new to learn **Perl**.

```perl
use strict;
use warnings;

# Version 1: foreach loop with printf
foreach (0 .. 50) {
    printf("Decimal: %d - Octal: %o\n",$_,$_);
}

# Version 2: map with sprintf
print my @res = map { sprintf("Dec %d - Oct %o\n",$_,$_) } (0 .. 50);
```

***

## Colin Crain

**Colin** likes to the difficult path and manually solved the task. It reminds me my learning days.

```perl
use warnings;
use strict;
use feature ":5.26";

printf "Decimal %-2d = Octal %-2d\n", $_, octal($_) for (-50..50);

sub octal {
    my $num = shift;
    my $sign = ($num >= 0) ? "" : '-';
    $num = abs($num);
    my $out = "";
    my $rem;
    while ( $num > 0 ) {
          ($num, $rem) = (int( $num/8 ), $num % 8);
        $out = $rem . $out;
    }
    $out = $sign . $out;
    return $out ? $out : 0;  ## needs to output 0 for 0
}
```

***

## Cristina Heredia

**Cristina**, new member of the team shared the first contribution. Looking forward to many more magical solutions.

```perl
#!/usr/bin/perl

for (my $i = 0; $i <= 50; $i++) {

    print "Decimal $i = Octal ";
    printf("%o\n",$_)for "$i";
}
```

***

## Dave Jacoby

**Dave** also took the help from **sprintf()** like others. I wonder how many knows the real power of **sprintf()**.

```perl
use feature qw{ say };
use strict;
use warnings;

for my $d ( 0 .. 50 ) {
    my $o = sprintf '%o', $d;
    say qq{Decimal $d = Octal $o};
}
```

***

## Duane Powell

**Duane** came up with handmade complete solution.

```perl
use warnings;
use strict;
use feature qw( say );

my $decimal_no = shift;
if ($decimal_no) {
    say convert_to_octal($decimal_no);
}
else {
    for (0 .. 50) {
        say convert_to_octal($_);
    }
}

sub convert_to_octal {
    my $n = shift;
    return 0 if ($n == 0);
    my @oct;
    while ($n > 0) {
        my $remainder = $n/8 - int($n/8);
        push @oct, $remainder * 8;
        $n = int($n/8);
    }
    return join('',reverse @oct);
}
```

***

## Duncan C. White

**Duncan** introduced **bit** operator in a very elegant way to solve the task. I loved it.

```perl
use v5.10;  # to get "say"
use strict;
use warnings;

die "Usage: ch-1.pl [N//50]\n" if @ARGV>1;

my $n = shift // 50;

#
# my $o = to_oct_str( $x );
#   Convert x to an octal string, eg. 8 is "10"
#
sub to_oct_str
{
    my( $x ) = @_;
    my $result = "";
    if( $x > 7 )
    {
        $result = to_oct_str( $x>>3 );
    }
    $result .= $x&7;
    return $result;
}


foreach my $x (0..$n)
{
    # convert x to octal..
    my $o = to_oct_str( $x );
    say "$x\t$o";
}
```

***

## E. Choroba

**Choroba** didn't try to be clever and kept it simple.

```perl
use warnings;
use strict;

printf "Decimal %d = Octal %o\n", $_, $_
    for 0 .. 50;
```

***

## Fabrizio Poggi

**Fabrizio** also got his hand dirty while solving the task. Good job.

```perl
use strict;
use warnings;

my $x;
my $y;
my $mod;
my $oct;
my @array;

foreach $x (0..50){
    print "Decimal $x = ";
    if ($x < 8) {
        $oct = $x;
    } else {
        do {
            $y = int($x / 8);
            $mod = $x % 8;
            push (@array, $mod);
            $x = $y;
            } while ($x > 8);
        push (@array, $x);
        $oct = reverse @array;
    }
print "Octal $oct \n";
@array=();
}
```
***

## Jaldhar H. Vyas

**Jaldhar** made it look cool with the use of **map{}**. Smart Cookie.

```perl
perl -e 'map { printf "Decimal %d = Octal %o\n", $_, $_ } (0 .. 50);'
```

***

## Javier Luque

**Javier** back to basics, yet powerful.

```perl
use strict;
use warnings;
use feature qw /say/;

for my $i (1..50) {
    say 'Decimal '  . $i .
        ' = Octal ' . to_octal($i);
}

sub to_octal {
    return sprintf('%o', shift);
}
```
***

## Kivanc Yazan

**Kivanc** also followed the straight forward path and reached the target without any issue.

```perl
use warnings;
use strict;

# Write a script to print decimal number 0 to 50 in Octal Number System.
for my $i (0..50){
  printf "Decimal %d = Octal %o\n", $i, $i;
}
```

***

## Laurent Rosenfeld

**Laurent** one-liner is always the best, usage of **$_** twice makes it interesting.

```perl
perl -e 'printf "Decimal: %2d  =  Octal %2o \n", $_, $_ for 0..50;'
```

***

## Nazareno Delucca

**Nazareno** solutions really hard to follow first time. I had to run the script to see the end result.

```perl
use strict;
use warnings;

my $top = shift @ARGV || 50;
my $holder = 0;

for (0..$top){
    print "dec: $_ -> oct: ". $holder++ . "\n";
    $holder+=2 if 8 == substr $holder, -1;
}
```

***

## Peter Scott

**Peter** is a man of few words. You know why I say that, checkout his solution.

```perl
perl -E 'say sprintf "Decimal %d = Octal %o", $_, $_ for 0 .. 50'
```

***

## Roger Bell_West

**Roger** kept it simple and easy this time.

```perl
use strict;
use warnings;

foreach (0..50) {
  printf('Decimal %d = Octal %o'."\n",$_,$_);
}
```

***

## Ruben Westerberg

**Ruben** followed the same path like many.

```perl
perl -e 'printf "Decimal: %4d Octal: %4o\n",$_,$_ for 0..50';
```

***

## Ryan Thompson

**Ryan** didn't lost the path either.

```perl
printf "Decimal %2d = Octal %2o\n", $_, $_ for 0..50;

# This printf feature will be important for our Raku solution:
printf 'Decimal %1$2d = Octal %1$2o'."\n", $_ for 0..50;
```

***

## Saif Ahmed

**Saif** is known for his documented solution. This time also it is no different.

```perl
use strict; use warnings;

my $base=8;

print "Converting from decimal to octal (base 8)\n";

for my $n (1..50){
  printf ("Decimal %2s is %2s in base %1s\n",$n, decimalTobaseN($base,$n), $base) ;
}

sub decimalTobaseN{
   my ($base,$number)=@_;                   # Function receives base and the number to convert
   my @digits=(0..9,'A'..'Z');              # potential output characters

   my $string="";                           # holds the output as string of characters

   while ($number>0){                       # continue until no more required
      my $remainder=$number % $base;        # get the remainder after division with base
      $string=$digits[$remainder].$string;  # add that to the left most side of string
      $number=($number-$remainder)/$base;   # divide the residual number by base
   }

   return $string                           # return the result
}

# The following section describes a function inverse of decimalToBaseN()
# Goal is to convert baseN string generated above back to decimal

print "\n\nPress any key to continue\n";
<STDIN>;
print "Converting decimal 100 into bases 2 to 36 and then back again\n\n";

for $base (2..36){                         # for each valid base
      my $a = decimalTobaseN($base,100);   # convert decimal 100 into that base
      my $b = baseNToDecimal($base,$a);    # then convert result back to decimal

      printf ("Decimal 100 in base %2s is %2s and converted back is %2s\n",$base, $a, $b) ;
}

sub baseNToDecimal{
   my ($base,$string)=@_;                   # Function receives base and the string to convert
   my %baseValues;                          # the base characters to decimal value are
   @baseValues{(0..9,'A'..'Z')}=(0..36);    # stored in a hash
   my $result=0;                            # initial value is zero
   foreach (split //,$string){              # go over each character in the string
                                            # multiplying result by the base before adding
       $result=$result*$base+$baseValues{$_};  # next character value to result
   }
   return $result;                          # return the result
}
```

***

## Steven Wilson

**Steven** not only solved the task but also added handy unit test as well.

```perl
use strict;
use warnings;
use feature qw/ say /;
use Test::More tests => 1;

ok( decimal_to_octal(1792) == 3400, "test decimal 1792 is octal 3400" );

sub decimal_to_octal {
    my $dec = shift;
    my $result;
    while ( $dec > 7 ) {
        $result .= $dec % 8;
        $dec = int( $dec / 8 );
    }
    $result .= $dec;
    return scalar reverse $result;
}

for ( 0 .. 50 ) {
    say "Decimal $_ = Octal ", decimal_to_octal($_);
}
```

***

## Walt Mankowski

**Walt** is now regular with his solutions. This time with a one-liner.

```perl
use strict;
use warnings;

printf "Decimal %d = Octal %o\n", $_, $_ for 0..50;
```

***

## Wanderdoc

**Wanderdoc**, one of **Early Bird Club** members, presented the result as expected.

```perl
use strict;
use warnings FATAL => qw(all);

for my $number ( 0 .. 50 )
{
     print join(' = ', join(' ', 'Decimal', $number),
                       join(' ', 'Octal', sprintf("%o", $number))), $/;
}
```

***
***
## Task #2
***
***

### Balanced Brackets

Write a script to generate a string with random number of **(** and **)** brackets. Then make the script validate the string if it has balanced brackets.

For example:

##### () - OK

##### (()) - OK

##### )( - NOT OK

##### ())() - NOT OK

***
***

## Adam Russell


```perl
use strict;
use warnings;
##
# Write a script to generate a string with a random
# number of ( and ) parentheses. Make the script validate
# the string for balanced parentheses.
##
use boolean;
use constant LENGTH => 4;
use constant OPEN => "(";
use constant CLOSE => ")";

sub build{
    my $s;
    for (0 .. (LENGTH - 1)){
        my $p = rand() < 0.5 ? OPEN : CLOSE;
        $s .= $p;
    }
    return $s;
}

sub validate{
    my($s) = @_;
    my @a;
    for my $c (split(//, $s)){
        push @a, $c if($c eq OPEN);
        if($c eq CLOSE){
            return false if(!@a || pop @a ne OPEN);
        }
    }
    return true if !@a;
    return false;
}

MAIN:{
    my $s = build();
    my $r = validate($s) ?  "balanced" : "not balanced";
    print "$s is $r\n";
}
```

***

## Alicia Bielsa


```perl
use strict;
use warnings;

my $openingBracket = '(';
my $closingBracket = ')';
my @aBracketSymbols = ($openingBracket, $closingBracket);
my $bracketString = '';

my $lengthString = int(rand(10));
foreach my $i (0..$lengthString){
    $bracketString .= $aBracketSymbols[int(rand(2))];
}

my $balanceResult  = isStringBalanced($bracketString);
print "$bracketString - $balanceResult\n";

sub isStringBalanced {
    my $stringToCkeck = shift;
    my $balanceCount = 0;
    foreach my $bracket (split ('',$stringToCkeck)){
        if ($bracket eq $closingBracket ){
            if ( $balanceCount == 0){
                return 'KO';
            } else {
                $balanceCount --;
            }
        } elsif ($bracket eq $openingBracket){
            $balanceCount ++;
        }
    }
    if ($balanceCount == 0 ){
        return 'OK';
    } else {
        return 'KO';
    }
}
```

***

## Burkhard Nickels


```perl
use strict;
use warnings;

print "ch-2.pl (Version 1.0) PWC #42 Task #2: Balanced Brackets\n";

sub create_brackets {
    my ($nr) = @_;
    my $s;
    for( my $i=0; $i<=$nr; $i++ )  {
        my $br = int(rand(2));
        if($br) { $s .= ")"; } else { $s .= "("; }
    }
    return $s;
}

my $ok;
do {
    my $nr = int(rand(10));
    my $str = create_brackets($nr);
    $ok  = balanced_brackets($str);
    my $rs  = "NOT OK";
    $rs = "OK" if $ok;
    print $str, " - ", $rs, "\n";
} while( ! $ok );

sub balanced_brackets {
    my $str = shift;
    my $found = $str =~ s/\(\)//;
    my $ok;
    if($found) {
        $ok = balanced_brackets($str);
        return $ok;
    }
    else {
        if( $str=~/\(|\)/ ) { return 0; }
        else { return 1; }
    }
}
```

***

## Colin Crain


```perl
use warnings;
use strict;
use feature ":5.26";

my $upper = shift @ARGV // 10;
$upper = int(rand($upper)) + 1;

my $str = make_string($upper);
say $str;
say validate( $str );

sub make_string {
    return join '', map { ['(',')']->[int(rand(2))] } (1..$_[0]);
}

sub validate {
    my $str = shift;
    unless (length($str)%2==0) { return "IMBALANCED - odd number of parens"};
    while ( $str =~ s/ \( (.*?) \) /$1/x) {
        if ($-[0] != 0){ return "IMBALANCED - remaining group starts with right paren : $str" }
    }
    return (length $str == 0) ? "BALANCED" : "IMBALANCED - $str remaining";
}
```

***

## Cristina Heredia

```perl
use strict;

#Variables
my $random;
my @array;
my $i = 0;
my $text;
my $code = 0;


generateString();
validation();
result();

#Fuctions

#Create the string of parenthesis by generates random numbers between 0-2 (0 = '(', 1 = ')' and 2 = end).
sub generateString {
    $random = int rand(2);
    convertParenthesis();
    while ($random != 2) {
        $random = int rand(3);
        convertParenthesis();
    }
}

#Converts the numbers generated into parenthesis
sub convertParenthesis{

        if ($random == '0') {
            @array[$i] = $random;
            $text .= '(';
            $i++;
        }
        elsif ($random == '1') {
            @array[$i] = $random;
            $text .= ')';
            $i++;
        }

}

#Checks if the string has balanced brackets
sub validation {
    my $length = @array;
    for (my $j = 0; $j < $length; $j++) {
        if (@array[$j] == 0) {
            $code++;
        }
        elsif (@array[$j] == 1 and $code != 0) {
            $code--;
        }
        else {
            $code = 1;
            last;
        }
    }
}

#Write the string and indicate if it's ok or not
sub result {
    if ($code == 0) {
        print "$text - OK\n";
    }
    else {
        print "$text - NOT OK\n";
    }
}
```

***

## Dave Jacoby

```perl
use strict;
use warnings;
use feature qw{ say signatures };
no warnings qw{ experimental::signatures };

# generate the string of braces
my $string;
for ( 0 .. 1 + int rand 9 ) {
    $string .= int rand 2 ? '(' : ')';
}

# test if the string has matched braces
my $t = test_braces($string);
my $response = $t == 0 ? 'OK' : 'NOT OK';
say qq{$string - $response};
```

***

## Duane Powell

```perl
use warnings;
use strict;
use feature qw( say );

use constant {
        L_PAREN => '(',
        R_PAREN => ')',
};

my $paren = shift;
if ($paren) {
    say "Given paren string = $paren";
}
else {
    my $lower_limit = 2;
    my $upper_limit = 7;
    my $random_number = int(rand($upper_limit-$lower_limit)) + $lower_limit;
    for (1 .. $random_number) {
        # coin toss left or right paren
        $paren .= (rand() < 0.5) ? L_PAREN : R_PAREN;
    }
    say "Random paren string = $paren";
}

my $msg;
my $paren_count = 0;
foreach (split(//,$paren)) {
    $paren_count-- if ($_ eq R_PAREN);
    $paren_count++ if ($_ eq L_PAREN);
    if ($paren_count < 0) {
        $msg = "Parens are not balanced.";
        last;
    }
}
$msg = 'Parens are balanced.'   if ($paren_count == 0);
$msg = 'Parens are not closed.' if ($paren_count  > 0);
say $msg;
```

***

## Duncan C. White


```perl
use v5.10;  # to get "say"
use strict;
use warnings;

sub gen_bracketed_string
{
    my $len = 20+int(rand(20));
    my $result="";
    foreach (1..$len)
    {
        $result .= int(rand(2))==0?'(':')';
    }
    return $result;
}

sub validate
{
    my( $brackstr ) = @_;
    my( $origlen, $len );
    do
    {
        $origlen = length($brackstr);
        $brackstr =~ s/\(\)//g;
        $len = length($brackstr);
    } while( $len < $origlen );
    return $len==0?1:0;
}


srand( $$ ^ time() );

die "Usage: ch-2.pl [BRACKSTR]\n" if @ARGV>1;
my $brackstr = shift // gen_bracketed_string();

my $isvalid = validate( $brackstr );

say "$brackstr valid? $isvalid";
```

***

## E. Choroba


```perl
use warnings;
use strict;
use feature qw{ say };

sub generate {
    return join "", map +('(', ')')[rand 2], 1 .. int rand 80
}

sub is_valid {
    my ($s) = @_;
    $s =~ s/\(\)//g while -1 != index $s, '()';
    return ! length $s
}


use Test::More tests => 4;
ok(is_valid('()'));
ok(is_valid('(())'));
ok(! is_valid(')('));
ok(! is_valid('())()'));

my $s = generate();
say $s, ' ', is_valid($s) ? "" : 'in', 'valid';
```

***

## Fabrizio Poggi

```perl
use strict;
use warnings;

my @chars  = ('(', ')');
my $lenght;
my $rands;
my $countr;
my $countl;

$lenght = int(rand(15)) + 1;
while ($lenght--){ $rands.= $chars[rand @chars] };
print "$rands";
$countr = () = $rands =~ /\(/g;
$countl = () = $rands =~ /\)/g;
if ($countr - $countl == 0) {
    print " - OK\n";
    } else {
    print " - NOT OK\n";
    }
```

***

## Jaldhar H. Vyas

```perl
use warnings;
use strict;
use 5.010;

sub isBalanced {
    my ($brackets) = @_;
    my @stack;

    map {
        if ( $brackets->[$_] eq '(' ) {
            push @stack, '(';
        } else {
            if (!scalar @stack) {
                return undef;
            }
            pop @stack;
        }
    } (0 .. scalar @{$brackets} - 1);

    return scalar @stack == 0;
}

my @brackets;

for (1 .. ((int rand 3) + 1) * 2) {
    push @brackets, (int rand 2 ? '(' : ')');
}

printf "%s - %s%s\n",
    (join q{}, @brackets),
    isBalanced(\@brackets) ? q{} : 'NOT ',
    'OK';
```

***

## Javier Luque


```perl
use strict;
use warnings;
use feature qw /say/;
use constant {
    MAX_STRING_LENGTH => 4
};

for my $i ( 1 .. 20 ) {
    my $string = generate_random_string();
    my $ok = (validate_string($string)) ? 'OK ' : 'NOT OK';
    say $string . ' - ' . $ok;
}

sub generate_random_string {
    my $length = int(rand(MAX_STRING_LENGTH - 1) + 2);
    my $string;

    for my $i (1 .. $length ) {
        $string .= (int(rand(2))) ? '(' : ')';
    }

    return $string;
}

sub validate_string {
    my $open_p;

    for my $char (split('', shift)) {
        $open_p++ if ($char eq '(');
        $open_p-- if ($char eq ')');

        return 0 if ($open_p < 0);
    }

    return ($open_p == 0);
}
```
***

## Kivanc Yazan

```perl
use warnings;
use strict;
use List::Util qw/shuffle/;

my $count = rand(10)+1; # Could be as low as 1, as high as 10
my @chars = ( '(', ')' ) x $count;
@chars    = shuffle(@chars);
print join('',@chars)."\n";

# Walk through to validate
my $current_open = 0;
for my $char (@chars){
  if ($char eq '('){
    $current_open++;
  } elsif ($current_open == 0){
    print "Not Valid\n";
    exit;
  } else {
    $current_open--;
  }
}
print "Valid\n";
```
***

## Laurent Rosenfeld


```perl
use strict;
use warnings;
use feature qw/say/;

sub check_parens {
    my $expr = shift;
    my @stack;
    $expr =~ s/\s+//g; # remove spaces
    for (split //, $expr) {
        push @stack, $_ if $_ eq '(';
        if ($_ eq ')') {
            return 0 if @stack == 0;
            pop @stack;
        }
    }
    return scalar @stack == 0 ? 1 : 0;
}

for ("()", "(  )", "(())", "( ( ))", ")(", "())()",
    "((( ( ()))))",  "()()()()", "(())(())") {
        say "$_: ", check_parens($_) ? "OK" : "Not OK";
}
```

***

## Nazareno Delucca

```perl
use strict;
use warnings;

my $range = shift @ARGV || rand(24);

# String Length
my $len = rand($range);

# String Generator
my $lisp = '';
$lisp .= rand() < 0.5 ? '(' : ')' for 0 .. $len;

print "Generated: $lisp\n";

my $paired_matches = $lisp =~ s/\(\)//g;
$paired_matches = $lisp =~ s/\(\)//g while $paired_matches;

print "Un-paired brackets: $lisp\n";
print length ($lisp) > 0 ? "It's NOT balanced\n" : "It's balanced!\n";

# Turns out it's very difficult to get balanced strings
# I used 2 and 4 for demonstration

# $ perl ch-2.pl 2
# Generated: ()
# Un-paired brackets:
# It's balanced!

# $ perl ch-2.pl 2
# Generated: )(
# Un-paired brackets: )(
# It's NOT balanced

# $ perl ch-2.pl 4
# Generated: ()()
# Un-paired brackets:
# It's balanced!

# $ perl ch-2.pl 4
# Generated: (((
# Un-paired brackets: (((
# It's NOT balanced

# $ perl ch-2.pl 4
# Generated: (()
# Un-paired brackets: (
# It's NOT balanced

# $ perl ch-2.pl 4
# Generated: ))((
# Un-paired brackets: ))((
# It's NOT balanced

# $ perl ch-2.pl 4
# Generated: ))()
# Un-paired brackets: ))
# It's NOT balanced

# $ perl ch-2.pl 4
# Generated: (())
# Un-paired brackets:
# It's balanced!
```

***

## Peter Scott

```perl
use 5.016;

my ($MIN_STR_LEN, $MAX_STR_LEN) = (4,10);
my $string_length = int( rand( $MAX_STR_LEN - $MIN_STR_LEN ) ) + $MIN_STR_LEN;
my $string = '';
$string .= @{[qw{ ( ) }]}[rand 2] for 1 .. $string_length;
print "$string - ";
1 while $string =~ s/\(\)//;
say $string ? "NOT OK" : "OK";
```

***

## Roger Bell_West


```perl
use strict;
use warnings;

my $s='';
foreach (-1..2*(int(rand()*4))) {
  $s .= (rand()<0.5)?'(':')';
}

print "$s\n";

while ($s =~ s/\(\)//g) {
}

if ($s) {
  print "Invalid: $s\n";
} else {
  print "Valid.\n";
}
```

***

## Ruben Westerberg


```perl
use strict;
use warnings;
use POSIX qw<round>;

my $maxLength=$ARGV[0]//20; #If no max on command line use 20
while () {
    my $str="";
    #make a random length string of up to $maxLength long
    $str.=chr round rand()+40 for 0..int rand $maxLength;

    my $v=0;
    for (split "",$str) {
        $v+=(ord($_)-40)*-2+1;
        last unless $v >=0;
    }

    if($v==0) {
        print("balanced: $str\n");
        sleep 1;
        next;
    }
    print("unbalanced: $str\n");
}
```

***

## Ryan Thompson


```perl
use 5.010;
use warnings;
use strict;
use List::Util 'shuffle';

# To have any hope of being balanced, the string must be of even length,
# and must contain the same number of ( and ) brackets, so that's what we do.
sub gen_str { join '', shuffle map { ($_) x $_[0] } qw<( )> }

# This type of balance checking is trivial with a regex
sub balanced_tiny(_) { $_[0] =~ /^(\((?1)*\))*$/ }

# Same sub, less line noise
sub balanced(_) {
    $_[0] =~ /^         # Start of string
        (               # Match group 1
            \(          # Opening bracket
                (?1)*   # Recurse to start of group 1
            \)          # Closing bracket
        )*              # Group 1, zero or more times
    $/x                 # End of string
}

# And now we'll check a few
for my $n (0..5) {
    say "$_ - " . (balanced ? 'OK' : 'NOT OK') for map { gen_str($n) } 1..5;
}
```

***

## Saif Ahmed


```perl
use strict; use warnings;

for (1..100){
    my $testString=randomString();          # generate random string
    printf ("  %-12s", $testString);        # display it
    print  findError($testString),  "\n";   # validate it
}

sub randomString{
    my $string="";                          # start with empty string
    for (0..(rand()*5+1)){                  # for a random length (2 - 7)
        $string.=("(",")")[rand()*2];       # keep adding a random bracket
    }
    $string;                                # return the string
}

sub findError{
    my $str=shift;
    while ($str =~s/\((-*)\)/-\1-/){};      # keep replacing matched braces with
                                            # hyphens. What is left are string
                                            # contaning unmatched brackets
                                            # If these exist, they show locations
                                            # of errors
    if ($str=~/\(|\)/){ return "Not ok unmatched brackets at $str "};
    "OK, Balanced brackets";

}
```

***

## Walt Mankowski


```perl
use strict;
use warnings;
use feature qw(:5.30);
use experimental qw(signatures);

my $MAX_LEN = 10;

# return a random string of parens of length $len
sub rand_str($len) {
    return join '', map { rand(2) < 1 ? '(' : ')' } 1..$len;
}

# return true if the parens are balanced, else false
sub balanced($s) {
    my $cnt = 0;
    for my $c (split //, $s) {
        $cnt += $c eq '(' ? 1 : -1;
        return 0 if $cnt < 0; # too many right parens
    }
    return $cnt == 0;
}

for (1..100) {
    my $rs = rand_str(int(rand($MAX_LEN)) + 1);
    say $rs, balanced($rs) ? " - OK" : " - NOT OK";
}
```

***

## Wanderdoc


```perl
use strict;
use warnings;
use feature qw(:5.30);
use experimental qw(signatures);

my $MAX_LEN = 10;

# return a random string of parens of length $len
sub rand_str($len) {
    return join '', map { rand(2) < 1 ? '(' : ')' } 1..$len;
}

# return true if the parens are balanced, else false
sub balanced($s) {
    my $cnt = 0;
    for my $c (split //, $s) {
        $cnt += $c eq '(' ? 1 : -1;
        return 0 if $cnt < 0; # too many right parens
    }
    return $cnt == 0;
}

for (1..100) {
    my $rs = rand_str(int(rand($MAX_LEN)) + 1);
    say $rs, balanced($rs) ? " - OK" : " - NOT OK";
}
```

***
***
## SEE ALSO
***
***

(1) [**Perl Weekly Challenge 042**](https://adamcrussell.livejournal.com/14160.html) by **Adam Russell**

