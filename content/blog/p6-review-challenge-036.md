---
title: "Laurent Rosenfeld Weekly Review: Challenge - 036"
date: 2019-12-08T00:00:00+00:00
description: "Laurent Rosenfeld Weekly Review: Challenge - #036."
type: post
image: images/blog/p6-review-challenge-036.jpg
author: Laurent Rosenfeld
tags: ["Raku"]
---
***
# Raku Solutions Weekly Review
***

## Task #1: Vehicle Identification Numbers (VIN)

This is derived in part from my [blog post](http://blogs.perl.org/users/laurent_r/2019/05/perl-weekly-challenge-6-compact-number-ranges.html) made in answer to the [Week 36 of the Perl Weekly Challenge](https://perlweeklychallenge.org/blog/perl-weekly-challenge-036/) organized by  <a href="http://blogs.perl.org/users/mohammad_s_anwar/">Mohammad S. Anwar</a> as well as answers made by others to the same challenge.

The challenge reads as follows:

*Write a program to validate given Vehicle Identification Number (VIN). For more information, please checkout [wikipedia](https://en.wikipedia.org/wiki/Vehicle_identification_number).*

From the Wikipedia article, it appears that VINs are made up of 17 digits and upper-case letters, with the exception of letters I (i), O (o) and Q (q), to avoid confusion with numerals 0, 1, and 9. There are some additional rules that only applicable to certain areas of the world but are not internationally recognized.

## My Solutions

We write a simple `validate` subroutine that returns a true value if the passed parameter complies with the above rules for VINs and a false value otherwise.

In addition, we write a test suite in the Raku [Test](https://docs.raku.org/language/testing) framework containing 16 test cases. The `ok` function is fine for checking if a Boolean value is true; contrary to the Perl 5 `Test::More` testing framework, the Raku `Test` framework also has a `nok` function that makes it possible to test directly a false Boolean value.

``` Perl6
use v6;
use Test;

sub validate ($vin) {
    return False if $vin ~~ /<[OIQ]>/;
    return True if $vin ~~ /^ <[A..Z0..9]> ** 17 $/;
    return False;
}

plan 16;

ok  validate("A" x 17),   "17 A's";
ok  validate(1 x 17),     "17 digits";
nok validate("AEIOU"),    "Five vowels";
nok validate(1234567890), "Ten digits";
nok validate("1234AEIOU5678901"),   "sixteen digits or letters";
ok  validate("12345678901234567"),  "17 digits";
nok validate("1234567890123456Q"),  "16 digits and a Q";
nok validate("1234567890123456O"),  "16 digits and a O";
nok validate("1234567890123456I"),  "16 digits and a I";
nok validate("Q1234567890123456"),  "A Q and 16 digits";
nok validate("I1234567890123456"),  "An I and 16 digits";
ok  validate("ABCD4567890123456"),  "17 digits and letters";
nok validate("ABef4567890123456"),  "Digits and some lower case letters";
nok validate("ABE?4567890123456"),  "A non alphanumerical character";
nok validate("ABCD4567 90123456"),  "A space";
nok validate("ABCD45678901234567"), "More than 17 characters";
```

Running the program shows that all test pass:

    $ perl6 vin.p6
    1..16
    ok 1 - 17 A's
    ok 2 - 17 digits
    ok 3 - Five vowels
    ok 4 - Ten digits
    ok 5 - sixteen digits or letters
    ok 6 - 17 digits
    ok 7 - 16 digits and a Q
    ok 8 - 16 digits and a O
    ok 9 - 16 digits and a I
    ok 10 - A Q and 16 digits
    ok 11 - An I and 16 digits
    ok 12 - 17 digits and letters
    ok 13 - Digits and some lower case letters
    ok 14 - A non alphanumerical character
    ok 15 - A space
    ok 16 - More than 17 characters

In North America, the ninth position in a VIN is a check digit i.e. a number calculated from all other characters. Although this is not explicitly requested in the task, we'll make a second version of our program also verifying the check digit, as a bonus. The `check-digit` subroutine splits the input string, translates the characters into numbers, multiplies each number by the weight assigned to its rank, sums up all the results, computes the remainder of its division by 11, and replaces the remainder by "X" if it is found to be 10.

``` Perl6
use v6;

sub validate (Str $vin) {
    return False if $vin ~~ /<[OIQ]>/;
    return False unless $vin ~~ /^ <[A..Z0..9]> ** 17 $/;
    return check-digit $vin;
}

sub check-digit (Str $vin) {
    my %translations = A => 1, B => 2, C => 3, D => 4, E => 5, F => 6, G => 7, H => 8,
        J => 1, K => 2, L => 3, M => 4, N => 5, P => 7, R => 9, S => 2,
        T => 3, U => 4, V => 5, W => 6, X => 7, Y => 8, Z => 9;
    %translations{$_} = $_ for 0..9;
    my @weights = 8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2;
    my $i = 0;
    my $sum = sum map { %translations{$_} * @weights[$i++]}, $vin.comb;
    my $mod = $sum % 11;
    $mod = 'X' if $mod == 10;
    return True if $mod eq substr $vin, 8, 1;
    return False;
}

sub MAIN (Str $vin = "1M8GDM9AXKP042788") {
    say validate($vin) ?? "Correct" !! "Wrong";
}
```

Running the program displays the following output:

    $ perl6 vin.p6
    Correct

    $ perl6 vin.p6 1M8GDM9AXKP042788
    Correct

    $ perl6 vin.p6 1M8GDM9AXKP042789
    Wrong

## Alternative Solutions

[Arne Sommer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-036/arne-sommer/perl6/ch-1.p6) provided a 300-line script telling me that, apparently, I must have missed a lot of the rules. Among other things, his code seems to be checking country codes, manufacturer codes (although a number of manufacturers appear to be missing, such as Citroen, Fiat, Renault, Skoda, Seat, Peugeot or several Chinese companies, but this is apparently because the list would have been too long, so Arne decided just to prune some of it) and construction year codes. I can't summarize here such a lengthy piece of code, please follow the link to his code just above (or look as his [blog](https://raku-musings.com/vin-knapsack.html)) if you want to know more.

Note that his `VINCHAR` regex:

``` Perl6
my regex VINCHAR { A | B | C | D | E | F | G | H | J | K | L | M | N | P | R | S | T | U | V | W | X | Y | Z | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0 };
```

might be expressed more conveniently (or, at least, more concisely), with a character class as something like this:

``` Perl6
my regex VINCHAR { < [A..Z0..9] - [IOQ] > };
```

[Javier Luque](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-036/javier-luque/perl6/ch-1.p6) also implemented a lot of rules which I did not know about. This is his main VIN-checking subroutine:

``` Perl6
sub _check-vin(Str $vin) {
    my $vin_re = /<[A..HJ..NPR..Z0..9]>/;

    # Check for valid World Vin
    return Nil unless ($vin ~~ /
        ^^              # Start of string
        ($vin_re ** 3)  # World identification number
        ($vin_re ** 6)  # Vehicle descriptor section
        ($vin_re ** 8)  # Vehicle identifier section
        $$              # End of string
    /);

    # Capture parts of the vin
    my $win = $0; # World identification number
    my $vds = $1; # Vehicle descriptor section
    my $vis = $2; # Vehicle identifier section

    # 1st digit of the VIS can't be a U, Z or 0
    return Nil if ($vis ~~ /^^<[UZ0]>/);

    # Need to validate check digit
    # compulsory for vehicles
    # in North America and China,
    if ($win ~~ /^^<[1..5L]>/) {
        return Nil unless check-digit($vin);
    }

    # In america and china the last 5
    # digits of the vis is numeric
    if ($win ~~  /^^<[1..5L]>/) {
        return Nil unless ($vis ~~ /
            ^^             # Start of string
            $vin_re ** 3   # First 3
            \d  ** 5       # Last 5 digits
            $$             # End of string
        /);
    }

    return 1;
}
```



[Daniel Mita](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-036/daniel-mita/perl6/ch-1.p6) wrote a small grammar to perform VIN validation:

``` Perl6
grammar VIN {
  token TOP  { <WMI> <VDS> <VIS> }
  token WMI  { <.char> ** 3 }
  token VDS  { <.char> ** 6 }
  token VIS  { <.char> ** 8 }
  token char { <[A..H J..N P R..Z 0..9]> }
}
```

That's quite nice, but, to tell the truth, since three of the tokens are just a number of `char` tokens, it seems to me that the grammar may slightly over-engineered, as this grammar:

``` Perl6
grammar VIN {
  token TOP  { <.char> ** 17 }
  token char { <[A..H J..N P R..Z 0..9]> }
}
```

should presumably yield the same result (unless you intend to do further things with the `<WMI>`, `<VDS>`, and `<VIS>` tokens).

[Kevin Colyer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-036/kevin-colyer/perl6/ch-1.p6), like me, checks the length of the VIN, also checks that it does not contains invalid letters (I, O, and Q), and it verifies the check digit:

``` Perl6
sub validateVIN($vin is copy) {
    my @v= $vin.uc.comb;
    return "invalid vin character: I,O or Q"     if $vin ~~ m:i/ <[ I O Q ]>+ /;
    return "invalid vin length {$vin.chars}" if $vin.chars != 17;

    my $check=@v[8];
    $check = 0  if $check eq '_';
    $check = 10 if $check eq 'X';
    my $i=0;

    for ^17 {
        $i += %value{@v[$_]} * @weight[$_];
    };

    return $i % 11 == $check ?? "valid" !! "invalid - failed checksum" ;
}
```

[Simon Proctor](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-036/simon-proctor/perl6/ch-1.p6) basically checks the same things as Kevin:

``` Perl6
subset ValidVinStr of Str
    where m/^ <[A..Z 0..9] - [IOQ]> ** 9 <[A..Z 0..9] - [IOQUZ0]> <[A..Z 0..9] - [IOQ]> ** 7 $/;

#| Validate a North American VIN
sub MAIN (
    ValidVinStr $vin #= VIN to check
) {
    my %transliterator = ( ( "A".."Z" ) Z=> ( |(1..9),|(1..9),|(2..9) ) );

    my @combed = $vin.comb();
    my $check = @combed[8];
    my $calc-check = ( [+] (@combed[|(0..7),|(9..16)].map( { %transliterator{$_} // $_ } )) Z* (|(8...2),|(10...2)) ) % 11;
    $calc-check = "X" if $calc-check == 10;
    say $calc-check ~~ $check ?? "Valid VIN $vin" !! "Invalid VIN $vin";
}
```

[Ulrich Rieke](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-036/ulrich-rieke/perl6/ch-1.p6) essentially checked the same things:

``` Perl6
sub validate_VIN_number( Str $vincode ) returns Bool {
  if ( $vincode ~~ / 'I' | 'Q' | 'O' / ) {
      return False ;
  }
  if ( $vincode.substr( 9 , 1 ) ~~ /<[IQOUZ0]>/ ) {
      return False ;
  }
  if ( $vincode.substr( 9 , 1) !~~ /<[A..Y1..9]>/ ) {
      return False ;
  }
  if ( $vincode ~~ /<[A..Z1..9]-[IOQ]> ** 17/ ) {
    return True ;
  }
  return True ;
}
```

However, his 37-line `test_check_digit` subroutine seems a bit too complicated to me.

[Jaldar H. Vyas](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-036/jaldhar-h-vyas/perl6/ch-1.p6), on the other hand, made something a little bit too simple in my view, as it doesn't do any check on the forbidden `IOQ` letters (yet, adding that check would be very simple).

``` Perl6
sub validateVIN(Str $vin) {

    if ($vin.chars != 17) {
        return False;
    }

    if $vin !~~ /^
        <alnum> ** 3 # World Manufacturer Identifier
        <alnum> ** 6 # Vehicle Descriptor Section
        <alnum> ** 8 # Vehicle Identifier Section
    $/ {
        return False;
    }

    return True;
}
```

[Roger Bell West](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-036/roger-bell-west/perl6/ch-1.p6) made some reasonable sense with the somewhat weird-looking translation table for the check-digit calculation:

``` Perl6
my %cvalue;
map {%cvalue{$_}=$_}, (0..9);
my $base=ord('A');
for (slip('A'..'H'),slip('J'..'N'),'P','R') -> $char {
  %cvalue{$char}=(ord($char)-$base)%9+1;
}
for ('S'..'Z') -> $char {
  %cvalue{$char}=(ord($char)-$base)%9+2;
}
my $valid='^<[' ~ join('',keys %cvalue) ~ ']>*$';
```
Also notice, on the last line above, how his program cleverly uses the keys of the `%cvalue` hash to build a `$valid` regex character class pattern for later use:

``` Perl6
unless ($vin ~~ /<$valid>/) {
    print "$vin contains invalid characters\n";
    next;
}
```
[Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-036/ruben-westerberg/perl6/ch-1.p6) made one of the most concise implementations:

``` Perl6
my @vins:=@*ARGS;
my %keys=((0..9 Z 0..9),("A".."H" Z 1..8), ("J".."N" Z 1..5), "P",7, "R",9,("S".."Z" Z 2..9)).flat;
my @weights=((2..8).reverse,10,0,(2..9).reverse).flat;

for @vins {
    my $i=0;
    print "Testing $_: ";
    my $result="OK";

    $result ="Invalid digits present" unless /^<[A..Z]+[0..9]>**17$/;
    $result ="Incorrect length" if $_.chars != 17;

    if $result eq "OK"  {
        my $check=$_.comb.map({%keys{$_} * @weights[$i++]}).sum % 11;
        $check="X" if $check == 10;
        $result= "Invalid VIN number" if $check ne $_.substr(8,1);
    }
    put $result;
}
```

I especially like the innovative way in which Ruben constructs the `%key` character-translation hash and the `@weights` array used for computing the check digit, as well as the way he computes the check digit in just one statement.

## Task #2: The Knapsack Problem

The challenge reads as follows:

*Write a program to solve Knapsack Problem.*

*There are 5 color coded boxes with varying weights and amounts in GBP. Which boxes should be chosen to maximize the amount of money while still keeping the overall weight under or equal to 15 kg?*
    R: (weight = 1 kg, amount = £1)
    B: (weight = 1 kg, amount = £2)
    G: (weight = 2 kg, amount = £2)
    Y: (weight = 12 kg, amount = £4)
    P: (weight = 4 kg, amount = £10)

*Bonus task, what if you were allowed to pick only 2 boxes or 3 boxes or 4 boxes? Find out which combination of boxes is the most optimal?*

The *knapsack problem* or *rucksack problem* is a well-known problem in combinatorial optimization: given a set of items, each with a weight and a value, determine the number of each item to include in a collection so that the total weight is less than or equal to a given limit and the total value is as large as possible. It derives its name from the problem faced by someone who is constrained by a fixed-size knapsack and must fill it with the most valuable items. In this specific case, this is what is sometimes called the *0-1 knapsack problem*, where you can chose only one of each of the listed items.

I will directly take the "bonus" version of the problem, as it seems simpler to take this constraint in consideration right from the beginning.

The *knapsack problem* is known to be a at least an NP-Complete problem (and the optimization problem is NP-Hard). This means that there is no known polynomial algorithm which can tell, given a solution, whether it is optimal. There are, however, some algorithms that can solve the problem in pseudo-polynomial time, using dynamic programming.

However, with a set of only five boxes, we can run a so-called brute-force algorithm, that is try all possible solutions to find the best. A better algorithm would probably be needed to manage 30 or more boxes, but we're given only 5 boxes, and trying to find a better algorithm for only five boxes would be, in my humble view, a case of over-engineering.

## My Solutions

To start with, we'll populate a `%boxes` hash of hashes with the box colors as keys, and their respective weights and values:

``` Perl6
constant %boxes = (
    "R" => { "w" => 1,  val => 1  },
    "B" => { "w" => 1,  val => 2  },
    "G" => { "w" => 2,  val => 2  },
    "Y" => { "w" => 12, val => 4  },
    "P" => { "w" => 4,  val => 10 },
);
​```
```

### A Recursive Solution

The most immediate solution to test all boxes combinations would be to use five nested loops, but that's tedious and ugly, and we would need to neutralize some of the loops for satisfying the bonus task with only 2, 3, or 4 boxes. And it doesn't scale: it would break if we were given 6 boxes. I prefer to implement a recursive solution which can work independently of the number of boxes (at least for a start, as this is the idea of the solution I implemented originally for the Perl 5 solution to the challenge, we will see later a simpler solution in Raku).

We want to look at combinations (i.e. subsets of the data where the order in which the boxes are selected doesn't matter) and not permutations (where the order  matters) to avoid doing unnecessary work. To get combinations, we can just retain only permutations that are in a given order, for example in alphabetic order, and filter out the others. One parameter to our recursive subroutine, `$last-box-used`, enables us to compare each `box` in the `for` loop with the previous one and to keep only those where `box` comes after in the alphabetic order. And we make our first call of the `try-one`subroutine with a dummy parameter, "A", which comes before any of the boxes.

I prefer to implement a recursive solution where the parameters to the recursive `try-one` subroutine govern the number of loops that will be performed. These parameters are as follows:
* Current cumulative weight of the selected boxes;
* Current total value of the selected boxes;
* Maximum number of boxes to be selected (for the bonus)
* A string listing the boxes used so far in the current solution;
* Name of the last used box (to get only combinations);
* A list of the boxes still available;

For the first call of `try-one` recursive subroutine, we have the following parameters: 0 for the weight, 0 for the value, the maximum number of boxes to be used is passed as a parameter to the script (or, failing a parameter, defaulted to 5), an empty string for the list of boxes, "A" for the last box used, and the list of box colors.

The recursion base case (where recursion should stop) is reached when the current weight exceed 15 or when the number of available boxes left reaches 0.

``` Perl6
use v6;

constant %boxes = (
    "R" => { "w" => 1,  val => 1  },
    "B" => { "w" => 1,  val => 2  },
    "G" => { "w" => 2,  val => 2  },
    "Y" => { "w" => 12, val => 4  },
    "P" => { "w" => 4,  val => 10 },
);

sub MAIN (UInt $start-nb-boxes = 5) {
    my @boxes = keys %boxes;
    my $*max-val = 0;
    my $*max-boxes = "";
    try-one(0, 0, $start-nb-boxes, "", "A", @boxes);
    say "Max: $*max-val, Boxes:  $*max-boxes";
    say now - INIT now;
}

sub try-one ($cur-weight, $cur-val, $num-boxes, $boxes-used, $last-box-used, @boxes-left) {
    if $cur-val > $*max-val {
        $*max-val = $cur-val;
        $*max-boxes = $boxes-used;
    }
    for @boxes-left -> $box {
        next if $box lt $last-box-used;
        my $new-cur-weight = $cur-weight + %boxes{$box}{'w'};
        next if $new-cur-weight > 15 or $num-boxes <= 0;
        my @new-boxes-left = grep { $_ ne $box}, @boxes-left;
        my $new-box-used = $boxes-used ?? $boxes-used ~ "-$box" !! $box;
        try-one $new-cur-weight, $cur-val + %boxes{$box}{'val'}, $num-boxes -1, $new-box-used, $box, @new-boxes-left;
    }
}
```

This are some examples of output:

    $ perl6 boxes.p6
    Max: 15, Boxes:  B-G-P-R
    0.0099724

    $ perl6 boxes.p6 4
    Max: 15, Boxes:  B-G-P-R
    0.0209454

    $ perl6 boxes.p6 3
    Max: 14, Boxes:  B-G-P
    0.01895075

    $ perl6 boxes.p6 2
    Max: 12, Boxes:  B-P
    0.0109711

### A Solution Taking Advantage of Raku's Built-in Features

As mentioned earlier, the recursive solution above was inspired by our Perl 5 solution.

But Raku offers the built-in [combinations](https://docs.raku.org/routine/combinations) routine that can make our program shorter and simpler. It will return a list (really a [Seq](https://docs.raku.org/type/Seq)) of all possible combinations of the input list or array. You can even specify the number of items, or, even better, a range for the numbers of items in each combinations; this will enable us to answer the bonus question by specifying the maximal number of boxes, and also to remove from the output the empty list (which may otherwise generate errors or warnings). The `find-best` subroutine does most of the work: the first statement populates a `@valid-candidates` array with combinations not exceeding the maximal weight, along with their total respective values, and the next statement returns the maximal value combination.

    use v6;

    constant %boxes = (
        "R" => { "w" => 1,  val => 1  },
        "B" => { "w" => 1,  val => 2  },
        "G" => { "w" => 2,  val => 2  },
        "Y" => { "w" => 12, val => 4  },
        "P" => { "w" => 4,  val => 10 },
    );
    sub MAIN (UInt $max-nb = 5) {
        my ($best, $max) = find-best %boxes.keys.combinations: 1..$max-nb;
        say "Max: $max; ", $best;
    }
    sub find-best (@candidates) {
        my @valid-candidates = gather for @candidates -> $cand {
            take [ $cand, $cand.map({ %boxes{$_}{'val'}}).sum ]
                if $cand.map({ %boxes{$_}{'w'}}).sum <= 15;
        }
        return  @valid-candidates.max({$_[1]});
    }

The output is the same as before:

    $ perl6 boxes2.p6
    Max: 15; (R G B P)

    $ perl6 boxes2.p6 5
    Max: 15; (R P B G)

    $ perl6 boxes2.p6 4
    Max: 15; (B G P R)

    $ perl6 boxes2.p6 3
    Max: 14; (B G P)

    $ perl6 boxes2.p6 2
    Max: 12; (P G)

The actual code is about twice shorter with the `combinations` routine.

## Alternative Solutions

[Arne Sommer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-036/arne-sommer/perl6/ch-2.p6) also used the `combinations` built-in routine, but with a slightly different, more procedural, approach:

``` Perl6
for @boxes.combinations.grep(0 < *.elems <= $boxcount) -> @list
{
  my $key    = @list.join;

  next if %w{$key}.defined;

  my $weight = @list.map({ %weight{$_} }).sum;
  my $value  = @list.map({ %value{$_}  }).sum;

  if $weight <= $maxweight
  {
    %w{$key} = $weight;
    %v{$key} = $value;

    say "{ @list } -> $weight kg -> £ $value" if $verbose;
  }
  elsif $verbose
  {
    say "{ @list } -> $weight kg -> £ $value (> $maxweight kg; ignored)";
  }
}
my $max = %v.values.max;
```

[Daniel Mita](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-036/daniel-mita/perl6/ch-2.p6) also used the `combinations` built-in routine and made a very concise program using a data pipeline to solve the problem. Note that I originally tried to use a single data pipeline with `grep`, `map`, `sum` and `max`, but I did not succeed to get it to work properly (it tends to be more difficult that in Perl 5, because type mismatches get in the way), so I decided to change it to a `gather ... take` construct. So, I wish to congratulate Daniel for having succeeded to do it. Anyway, here it is:

``` Perl6
my @boxes = <R B G Y P>.map({ $_ => %( :weight((1..10).roll), :amount((1..100).roll) ) });

.say for |@boxes, '';

.Hash.keys.say for @boxes
  # Generate all possible combinations of boxes
  .combinations(1 .. ∞)
  # Grep the ones with valid weights
  .grep(*.map(*.value<weight>).sum ≤ 15)
  # Sort them by total value
  .sort({ $_($^b) <=> $_($^a) given *.map(*.value<amount>).sum });
```

[Simon Proctor](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-036/simon-proctor/perl6/ch-2.p6) created a very simple `box` class:

``` Perl6
class Box {
    has Int $.weight;
    has Int $.worth;

    method gist { "{$!weight}kg worth £{$!worth}" }
}
```

Note the definition of a `gist` method to pretty print `Box` objects: this works because the `say` routine invokes the `gist` method to format its output; therefore, if you redefine `gist` in a class, then `say` will use the redefined `gist` method on any object of that class to obtain the string representation of such objects.

Otherwise, I extend my congratulations to Simon, who also wrote a single data pipeline to do the bulk of the work:

``` Perl6
my @options = @boxes.combinations().grep( *.elems <= $max-boxes ).grep( { ([+] $_.map( *.weight )) <= $max-weight } ).sort( { ( [+] $^b.map( *.worth ) ) cmp ( [+] $^a.map( *.worth ) ) } );
```

[Kevin Colyer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-036/kevin-colyer/perl6/ch-2.p6) also created a very simple `box` class to manage the colors, weights and values:

``` Perl6
class box {
    has Str $.colour;
    has Int $.weight;
    has Int $.amount;
}
```

He then used the `combinations` built-in routine to create all possible box combinations, filtered out combinations with too many boxes or overweight combinations and finally sorted the combinations to retain the largest value:

``` Perl6
sub knapsack(@combinations,@boxes,$max_weight,$max_boxes) {
    my @cands= gather for @combinations -> @c {

        # prune combinations with more than max boxes
        next unless @c.elems <= $max_boxes;

        my $w= @boxes[@c]>>.weight.sum;

        # prune overweight combinations
        next unless $w <= $max_weight;

        # cache for later
        my %wv= comb => @c, w => $w, v => @boxes[@c]>>.amount.sum;
        take %wv;
    }
    # sort in descending order - highest value first.
    @cands.=sort({$^a<v> <= $^b<v>});

    return @cands[0];
}
```

[Ulrich Rieke](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-036/ulrich-rieke/perl6/ch-2.p6) also used the `combinations` built-in routine several times:

``` Perl6
my @combis1 = "RBGYP".comb.combinations( 4 ).Array ;
my @combis2 = "RBGYP".comb.combinations( 3 ).Array ;
my @combis3 = "RBGYP".comb.combinations( 2 ).Array ;
for @combis1 -> $sublist {
  @results.push( computeSubsums( $sublist.join )) ;
}
for @combis2 -> $sublist {
  @results.push( computeSubsums( $sublist.join )) ;
}
for @combis3 -> $sublist {
  @results.push( computeSubsums( $sublist.join )) ;
}
my @withinWeight = @results.grep( { $_[1] <= 15 }) ;
my @sorted = @withinWeight.sort( {$^b[2] <=> $^a[2] } ) ;
```

It seems that Ulrich did not know that you can pass a range to the [combinations](https://docs.raku.org/routine/combinations) routine, as shown here under the REPL (some output combinations omitted for brevity):

    > say "RBGYP".comb.combinations: 2..4;
    ((R B) (R G) ... (G Y) (G P) (Y P) (R B G) (R B Y) ... (R G Y P) (B G Y P))

I believe this could have made his code shorter and simpler.

[Javier Luque](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-036/javier-luque/perl6/ch-2.p6) did not use the `combinations` built-in routine and, as a result, his `knapsack` subroutine is (like my initial recursive solution) significantly longer and more complex than many other solutions:

``` perl6
sub knapsack (%boxes, Int $max_weight, Num() $max_boxes) {
    my $total_weight = 0;
    my $total_boxes  = 0;
    my $total_amount = 0;
    my $set_of_boxes = '';

    for %boxes.keys.sort(&sort-value-weight) -> $key {
        my $box = %boxes.{$key};

        # While there is space or weight left
        while (1) {
            # Check for space or weight
            last unless
                $total_weight + $box.{'weight'} <=
                $max_weight;

            last unless
                !$max_boxes ||
                ($max_boxes && $total_boxes + 1 <=
                 $max_boxes);

            $total_boxes++;
            $set_of_boxes ~= $key;
            $total_weight += $box.{'weight'};
            $total_amount += $box.{'amount'};
        }
    }

    say 'Max weight: ' ~ $max_weight ~
        ', max boxes: ' ~ $max_boxes ~
        '. Boxes in knapsack: ' ~
        $set_of_boxes ~
        ' ' ~ $total_weight ~ 'kg ' ~
        '£' ~ $total_amount;
}
```

Also, Javier uses a 22-code-line subroutine (not shown here) for the purpose of sorting the boxes by values and then by weight, where as it can be done in just one statement, as shown in this example under the Raku REPL implementing a descending order sort by value and then by weight:

    > my %boxes = (
    *     R => { weight => 1,  amount => 1  },
    *     B => { weight => 1,  amount => 2  },
    *     G => { weight => 2,  amount => 2  },
    *     Y => { weight => 12, amount => 4  },
    *     P => { weight => 4,  amount => 10 },
    * );
    {B => {amount => 2, weight => 1}, G => {amount => 2, weight => 2}, P => {amount => 10, weight => 4}, R => {amount => 1, weight => 1}, Y => {amount => 4, weight => 12}}
    > my @sorted-keys = %boxes.keys.sort({%boxes{$^b}<amount> <=> %boxes{$^a}<amount> || %boxes{$^b}<weight> <=> %boxes{$^a}<weight>});
    [P Y G B R]

And, by the way, I'm not entirely convinced it is really useful to sort the boxes in such a way.

[Roger Bell West](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-036/roger-bell-west/perl6/ch-2.p6) also did not use the `combinations` built-in routine and his solution is also quite long. This is the part of his code doing the bulk of the work:

``` Perl6
for (1..2**(@k.elems)-1) -> $map {
  my $b=0;
  my $v=0;
  my $w=0;
  for (0..@k.end) -> $ci {
    if ($map +& @v[$ci]) {
      $v += %box{@k[$ci]}{'v'};
      $w += %box{@k[$ci]}{'w'};
      $b++;
    }
    if ($b>$maxb || $w>$maxw) {
      $v=-1;
      last;
    }
  }
  if ($v>0) {
    if ($v>$bestv || ($v==$bestv && $w>$maxw)) {
      $bestv=$v;
      $bestw=$w;
      $bestid=$map;
    }
  }
}

for (0..@k.end) -> $ci {
  if ($bestid +& @v[$ci]) {
    print @k[$ci],"\n";
  }
}
```

[Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-036/ruben-westerberg/perl6/ch-2.p6) also did not use the `combinations` routine, but he nonetheless succeeded to keep his code relatively small. I can see several interesting ideas in his code. First, he uses hash slices to populate his data structure:

``` Perl6
my %boxes;
%boxes{<R B G Y P>}=({c=>1,w=>1,},{c=>2, w=>1},{c=>2,w=>2},{c=>4,w=>12},{c=>10,w=>4});
```

Then, his program sorts the data by the value/weight ratio:

``` Perl6
.value<r>=.value<c>/.value<w> for %boxes;
my @b= %boxes.keys.sort( ->$a,$b { %boxes{$b}<r> <=> %boxes{$a}<r>});
```

It's a clever idea in terms of possible optimization, but, again, I'm not entirely sure that sorting the data in this way is really useful here if you want to test all possible combinations (it's a bit late on Sunday evening, and I don't have time to really test because I want to submit this review in time for Mohammad to be able to announce it tonight ot tomorrow morning).

Otherwise, his loop to find the best knapsack is quite concise:

``` Perl6
while (@b) {
    state $rem=$limit;
    my $tmp=$rem - %boxes{@b[0]}<w>;
    if $tmp < 0 {
        @b.shift;
        next;
    }
    @selected.push: @b[0];
    $rem=$tmp;
}
```

***

### SEE ALSO

Three blog posts (besides mine) this time:

Arne Sommer: https://raku-musings.com/vin-knapsack.html;

Kevin Colyer wrote his first blog on the Perl Weekly Challenge: https://raku-musings.com/vin-knapsack.html;

Javier Luque: https://perlchallenges.wordpress.com/2019/11/25/perl-weekly-challenge-036/.

## Wrapping up

Please let me know if I forgot any of the challengers or if you think my explanation of your code misses something important (send me an e-mail or just raise an issue against this GitHub page).

If you want to participate to the Perl Weekly Challenge, please connect to [this site](https://perlweeklychallenge.org/).
