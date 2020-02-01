---
title: "Ryan Thompson › Perl Weekly Review: Challenge - 044"
date: 2020-01-26T00:00:00+00:00
description: "Ryan Thompson › Perl Weekly Review: Challenge - #044"
type: post
author: Ryan Thompson
tags: ["Perl"]
---

Continues from [previous week](/blog/review-challenge-043/).

Feel free to [submit a merge request or open a ticket](https://github.com/manwar/perlweeklychallenge) if you found any issues with this post. We highly appreciate and welcome your feedback. You can also [contact me (Ryan) directly](http://ry.ca/contact), with any feedback on this review.

For a quick overview, go through the [original tasks](/blog/perl-weekly-challenge-044/) and [recap](/blog/recap-challenge-044/) of the weekly challenge.

Additional feedback to our Perl Weekly Challenge’s [Twitter account](https://twitter.com/perlwchallenge?lang=en) is much appreciated.

# Task #1 - Only 100, Please!

*You are given a string “123456789”. Write a script that would insert ”+” or ”-” in between digits so that when you evaluate, the result should be 100.*

There are either eleven or twelve possible expressions that equal 100:

```
100 == +1+2+3-4+5+6+78+9    100 == +12+3-4+5+67+8+9
100 == +1+2+34-5+67-8+9     100 == +12-3-4+5-6+7+89
100 == +1+23-4+5+6+78-9     100 == +123+4-5+67-89
100 == +1+23-4+56+7+8+9     100 == +123-4-5-6-7+8-9
100 == -1+2-3+4+5+6+78+9    100 == +123+45-67+8-9
100 == +12+3+4+5-6-7+89     100 == +123-45-67+89
```

The description says, "in between digits," though, so the canonical answer is probably eleven expressions. A few people (including me) probably knew this but opted to allow a leading negative anyway.

Some other solutions chose to allow for more operators than just + or -. This greatly expands the search space, but produces some interesting results.

Without further ado, here are the submissions:

## Adam Russell

[Adam's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-044/adam-russell/perl/ch-1.pl) uses [AI::Genetic](https://metacpan.org/pod/AI::Genetic) to solve this problem with, yes, you read that right: a genetic algorithm (GA). `AI::Genetic` is pure-perl with no non-core dependencies, so if you are looking for a way to dip your toe into GAs, this might be a place to start.

Here's a look at Adam's fitness function:

```perl
sub fitness{
    my($genes) = @_;
    my $s = NUMBERS;
    my $total = 0;
    my @operands = ($total);
    for my $gene (@{$genes}){
        if(my($i) = $gene->() =~ m/get_([1-4])/){
            return (-1 * NUMBERS) if(@operands == 2);
            return (-1 * NUMBERS) if(length($s) < $i);
            push @operands, $gene->($s);
            $s = substr($s, $i);
        }
        if($gene->() =~ m/add/){
            return (-1 * NUMBERS) if(@operands != 2);
            $total = add(@operands);
            @operands = ($total);
        }
        if($gene->() =~ m/subtract/){
            return (-1 * NUMBERS) if(@operands != 2);
            $total = subtract(@operands);
            @operands = ($total);
        }
    }
    return 100 - $total if $total > 100;
    return $total - 100;
}
```

[Genetic algorithms](https://en.wikipedia.org/wiki/Genetic_algorithm) are a very large topic inside the even larger topic of artificial intelligence, but essentially, this `fitness()` function returns a number based on how close the expression comes to the target value, 100. The higher the value `fitness()` returns, the more likely it is to reproduce and pass on some of its properties (genes).

Thus, without needing to come up with any problem-specific algorithm, Adam's GA code will slowly, over many generations, inch its way toward a solution. By "slowly," I mean it took 45 seconds and 1,050,000 total individuals considered, to find one solution. It's certainly an interesting way to solve this particular problem! I like Adam's outside-the-box thinking on this one (and challenge #2).

**Adam's Blog** › [Evolving more code with AI::Genetic](https://adamcrussell.livejournal.com/15036.html)

## Alicia Bielsa

[Alicia's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-044/alicia-bielsa/perl/ch-1.pl) takes a constructive approach, iteratively adding to an `@aResults` array containing numbers and operators (+ or -). Once that is done, she loops through again to calculate the result and print it, if it equals 100:

```perl
foreach my $matchIndex ( 0..$#aMatches ){
    my $match = $aMatches[$matchIndex];
    if ($match eq '+'){
        $previousFlagSum = $currentFlagSum;
        $currentFlagSum = 1;
    } elsif ($match eq '-'){
       $previousFlagSum = $currentFlagSum;
        $currentFlagSum = 0;
    } else {
        $currentNumber .= $match ;
        unless ($matchIndex == $#aMatches ){
            next;
        }
    }
    $previousNumber = $currentNumber ;
    $currentNumber = 0;

    next unless (defined $previousFlagSum );
    if ( $previousFlagSum  ){
        $total += $previousNumber;
    } else {
        $total -= $previousNumber;
    }
```

## Andrezgz

[Andrezgz's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-044/andrezgz/perl/ch-1.pl) searches all 3⁸ possible ways to insert +, -, or the empty string between each digit, in a unique way:

```perl
my @digits = split //, '123456789';
my $initial = shift @digits;
my @values = ( '' , ' + ' , ' - ' );

foreach my $n (0 .. (3**8)-1) {
    my $equation = $initial;
    my @combination = split //, sprintf "%08d", to_base3($n);
    $equation .= $values[ $combination[$_] ] . $digits[$_] for (0 .. @digits - 1);
    print "$equation\n" if (eval $equation == 100);
}
```

Note that `@combination` is a base 3 number, and the `$equation` is built up by inserting a value from `@digits = ('', '+', '-')`:

It's a clever way to think about the problem.

## Cheok-Yin Fung

**New member** [Cheok-Yin Fung's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-044/cheok-yin-fung/perl/ch-1.pl) uses a variant of the base-3 method, using some interesting modulo arithmetic to set each "digit":

```perl
my @poweroft = (6561,2187, 729, 243, 81, 27, 9, 3, 1);
for my $i (1..6560) {
    my @ooo = (0,0,0,0,0,0,0,0);    # 0 -> conjuction , 1 -> plus , 2 -> minus
    for my $j (0..7) {
        $ooo[$j] = int($i % $poweroft[$j]) / int($poweroft[$j+1]) ;
    }
    ...
}
```

The `int($i % $poweroft[$j]) / int($poweroft[$j+1])` expression ensures that each digit of `@ooo` will be in the range 0..2. Then, Cheok-Yin Fung assembles the result, conjoining objects when necessary:

```perl
    my @objects = (1,0,0,0,0,0,0,0,0);
    my $objectindex = 0;
    for my $j (0..7) {
        if ($ooo[$j] == 0) {
            $objects[$objectindex] = $objects[$objectindex]*10 + $digits[$j+1];
        } else {$objectindex++; $objects[$objectindex] = $digits[$j+1];}
    }

    my $result = $objects[0];
    $objectindex = 0;

    for my $j (0..7) {
        if ($ooo[$j] == 1) {$objectindex++; $result += $objects[$objectindex]; }
        if ($ooo[$j] == 2) {$objectindex++; $result -= $objects[$objectindex]; }
    }
```

From here, they need only check if `$result == 100` and print out the expression if so. The program finds all solutions.

Please join me in welcoming **Cheok-Yin Fung** to our team! If this week is any indication, they are sure to send some interesting solutions going forward.

## Colin Crain

[Colin's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-044/colin-crain/perl/ch-1.pl) builds up the expressions in a novel way:

```perl
my @list = ( 1..9 );
my @equations = shift @list;
my $idx = 0;

for my $new ( @list ){
    while (my $target = splice @equations, $idx, 1){
        for (' + ', ' - ', ''){
            splice @equations, $idx, 0, $target . $_ . $new;
            $idx++;
        }
    }
    $idx = 0;
}
```

The top-level loop `$new` essentially adds new digits to the expression. The middle `while` loop removes the `$idx`-th equation from `@equation`, and the inner `for` loop replaces that with three more equations, for each of the three operations: addition, subtraction, and concatenation.

After this loop, `@equations` contains all 3⁸ = 6,561 possible equations, and from there it is a simple matter of `eval`-ing each one and printing out the ones that equal 100.

## Daniel Mantovani

[Daniel's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-044/daniel-mantovani/perl/ch-1.pl) does something very similar to Andrezgz's. His version of the `to_base3()` sub is named `ter()`, which returns a list of digits:

```perl
sub ter {
  my @m;
  my $n = shift;
  while ($n) {
    push @m, $n % 3;
    $n = int($n/3);
  }
  return @m;
}
```

The core logic is the `modify_string()` function:

```perl
sub modify_string {
    my ($in, $mod) = @_;
    my @mods = ter($mod);
    # if @m vector has more than needed elements, return undef
    return undef if length($in) < @mods + 1;
    my $result = '';
    for my $d (split '', $in) {
        # undefs at the end mean empty inter-digit appends
        my $m = (shift @mods) // 0;
        # just peek what to insert according to $m
        $result .= $d . ('', ' + ', ' - ')[$m];
    }
    return $result;
}
```

Daniel's extensive internal documentation reads very much like a blog, so his solution is worth a look if you would like to know more.

## Darren Bottin

[Darren's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-044/darren-bottin/perl/ch-1.pl) is another that considers a leading negative sign to be acceptable, and thus produces twelve solutions.

Darren iterates over combinations using a `@combination` array that counts up in base-3, where each element maps to `@symbols`, to get the various groupings of characters, as well as handle the addition and subtraction:

```perl
my @symbols =( ",", '', ",-"); # Split, Join, Negate
my @combination = ( 1,(0) x 8); # Skip over the join option for the first digit
my $solutions_found=0;
while(1) {
    my $blend='';
    for my $blend_dig (0..8) {
        $blend .= $symbols[$combination[$blend_dig]].$numarray[$blend_dig];
    }
    ...
}
```

The `@symbols` correspond to:
  * `$symbols[0]` › Split here, numbers will be added.
  * `$symbols[1]` › Do not split here.
  * `$symbols[2]` › Split here, second number will be subtracted.

The `next_combination()` sub demonstrates how to write your own incrementer:

```perl
sub next_combination() {
    # warn "NEXT COMB";
    my $digit =8;
    my $dval = $combination[$digit]++;
    while ( $digit>=0 and $dval >= 2 ) { # carry left
        $combination[$digit]=0;
        $digit--;
        $dval = $combination[$digit]++;
    }
    return $digit;
}
```

### Prolog

Darren also submitted a second [solution in Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-044/darren-bottin/prolog/ch-1.pro), shown here in part:

```prolog
perm_sum( X, [X],  ['+',X]). % Running total, Item, Backtrace
perm_sum(-X, [X],  ['-',X]).
perm_sum(XS, [X|L],['+',X|BT]) :-  perm_sum(LS,L,BT), XS is LS+X.
perm_sum(XS, [X|L],['-',X|BT]) :-  perm_sum(LS,L,BT), XS is LS-X.
bond_comb([],X,X).
bond_comb([X|XL],Y,[X|Z]) :- bond_comb(XL,Y,Z).  % single
bond_comb([X1,X2|XL],Y,Z) :- X12 is X1*10 + X2,
    bond_comb([X12|XL],Y,Z).         % combine digits
```

Darren considers a leading - to be allowed, so his script outputs twelve cases. The `perm_sum` and `bond_comb` clauses are what do most of the work. Clauses for both `+` and `-` ensure that the implicit recursion will branch for both values. Similarly, the `bond_comb` clauses handle the combining of digits into larger numbers, or not.

## Dave Jacoby

[Dave's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-044/dave-jacoby/perl/ch-1.pl) is implemented with a 9-nested loop, which considers every permutation of splits and operators. He uses string `eval` to obtain the result of each expression. I will omit some of the middle loops, here:

```perl
my @vals = ('',' + ',' - ');
for my $i (@vals) {
    for my $j (@vals) {
        for my $k (@vals)
            ...
                for my $q (@vals) {
                    my $string = join '','1',$i,'2',$j,'3',$l,'4',$m,'5',$n,'6',$o,'7',$p,'8',$q,'9';
                    my $resp = eval $string;
                    next unless $resp == 100;
                    say qq{$resp = $string};
                }
            ...
        }
    }
}
```

Each loop variable `$i` .. `$q` will be one of `@vals`, to either join, add, or subtract.

There's a funny little bug: Dave's script actually outputs each correct solution three times. Can you spot why? Hint ([ROT13](https://rot13.com/)): gur svk jbhyq znxr gur cebtenz zber rssvpvrag. Answer: x vf abg hfrq.

## Dave Jacoby #2

Dave submitted a [second, revised solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-044/dave-jacoby/perl/ch-1a.pl), which I found worthy of highlighting on its own. Here, Dave uses recursion to perform a search of all possible expressions:

```perl
my $vals->@* = ( ' + ', ' - ', '' );
my $source->@* = ( 1, '', 2, '', 3, '', 4, '', 5, '', 6, '', 7, '', 8, '', 9 );

sub challenge ( $source, $vals, $index ) {
    # check to see if this is correct
    if ( $index >= scalar $source->@* ) {
        my $string = join '', $source->@*;
        my $result = eval $string;
        say qq{  $result = $string } if $result == 100;
        return;
    }

    # recursively add to the array
    my $next->@* = map { $_ } $source->@*;
    for my $v ( $vals->@* ) {
        $next->[$index] = $v;
        challenge( $next, $vals, $index + 2 );
    }
    return;
}
```

## Duane Powell

[Duane's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-044/duane-powell/perl/ch-1.pl) uses [Math::BaseCalc](https://metacpan.org/pod/Math::BaseCalc) to convert numbers between bases, and by now I bet you can guess why.

Duane iterates from 0..3⁸-1, converting that to a base-3 number, which he then uses to interleave operators (or the empty string) between each digit. Actually, his code is easily configurable to use different operators, and different target sum and input number, so these are just the defaults.

```perl
my %operator = (
    0 => '',
    1 => '+',
    2 => '-',
);

my $comb = 3 ** ((scalar @n) -1);  # 6561 combinations for 123456789
my $calc = new Math::BaseCalc(digits => [0,1,2]);
foreach (0 .. $comb-1) { # zero indexed
    my @op = split(//,sprintf "%08d", $calc->to_base($_));
    my $e;
    # zipper together the two arrays (@n and @op) building str $e, for example 1+2+3+4+5+6+7+8+9
    foreach my $n (@n) {
        if (scalar @op) {
            my $op = pop @op;
            $e .= $n . $operator{$op};
        }
        else {
            $e .= $n;
        }
    }
    my $s = eval $e;
    say "$e = $sum" if ( $s == $sum );
}
```

## Duncan C. White

[Duncan's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-044/duncan-c-white/perl/ch-1.pl) is recursive, too. He uses [Function::Parameters](https://metacpan.org/pod/Function::Parameters) instead of the [experimental `signatures` feature](https://perldoc.perl.org/feature.html#The-'signatures'-feature), but they both produce very similar looking code:

```perl
fun mutate( $str, $ip, $nleft, $goal )
{
    foreach my $a (@ch) # @ch = ('', '+', '-')
    {
        my $s2 = $str;
        substr( $s2, $ip, 0, $a );
        my $ip2 = $ip+1+length($a);
        if( $nleft>1 )
        {
            mutate( $s2, $ip2, $nleft-1, $goal );
        }
        if( $nleft==1 )
        {
            my $n = eval $s2;
            say "FOUND $s2" if $n==$goal;
        }
    }
}
```

Here, `$ip` is short for "insertion point". The `mutate()` function inserts an operator at each possible position, in every possible permutation.

## E. Choroba

[Choroba's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-044/e-choroba/perl/ch-1.pl) this week combines a few short subroutines. The top-level `while (1) { ... }` loop sums up the intention nicely:

```perl
while (1) {
    my $expression = apply(\@mask);
    say $expression if 100 == evaluate($expression);
    last unless grep $_ != MINUS, @mask;
    increment(\@mask);
}
```

`@mask` corresponds to the base-3 number we've seen in other solutions. The `increment()` sub, which computes the next `@mask`, is particularly elegant:

```perl
sub increment {
    my ($mask) = @_;
    my $i = $#$mask;
    $mask->[$i--] = NOTHING while $mask->[$i] == MINUS;
    ++$mask->[$i];
}
```

The `apply()` sub then takes that `@mask` and interleaves the operators with the digits accordingly:

```perl
sub apply {
    my ($mask) = @_;
    return $digits[0]
        . join "",
          map $op{ $mask->[$_-1] } . $digits[$_],
          1 .. $#digits
}
```

And finally `evaluate()` uses a regex to split the expression into its terms and then simply sums them up:

```perl
sub evaluate {
    my ($expression) = @_;
    my @terms = $expression =~ /[-+]?[0-9]+/g;
    return sum(@terms)
}
```

**Choroba's Blog** › [One Hundred, Two Hundred](http://blogs.perl.org/users/e_choroba/2020/01/perl-weekly-challenge-044-one-hundred-two-hundred.html)

## Fabrizio Poggi

[Fabrizio's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-044/fabrizio-poggi/perl/ch-2.pl) seems to be a [stochastic algorithm](https://en.wikipedia.org/wiki/Stochastic_optimization), iterating randomly to hopefully find a solution sooner. The following generates a random symbol:

```perl
sub ex {
    my $sign = int(rand(3));
    if($sign == 0) {
        my $sym = "+";
        return $sym;
    } else {
        if ($sign == 1) {
            my $sym = "-";
            return $sym;
        } else {
            if ($sign == 2) {
                my $sym = "";
                return $sym;
            }
        }
    }
}
```

I might have replaced the above with something like `sub ex { ('', '-', '+')[rand 3] }`, but the above works just as well.

Fabrizio then loops until a random expression equals 100:

```perl
while (1) {
    $sum = 1 . ex() . 2 . ex() . 3 . ex() . 4 . ex() . 5
             . ex() . 6 . ex() . 7 . ex() . 8 . ex() . 9;
    $val = eval ($sum);
    last if ($val == 100);
}
```

I love stochastic algorithms. Under the right circumstances, they can move an intractable problem right off the critical execution path. They can give you better best- and average-case performance. The tradeoff, though, is that the worst-case performance is unbounded, due to the loss of determinism.

To illustrate this, I ran Fabrizio's code 10,000 times. The average case took 600 iterations, the minimum took just a *single* lucky iteration, while the worst case was 7,353.

## Javier Luque

[Javier's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-044/javier-luque/perl/ch-1.pl) is recursive:

```perl
sub check_numbers {
    my ($n, $nums, $goal) = @_;

    if ($nums) {
        my ($n2, $new_numbers) = split('', $nums, 2);
        check_numbers($n . '+' . $n2, $new_numbers, $goal);
        check_numbers($n . '-' . $n2, $new_numbers, $goal);
        check_numbers($n . $n2, $new_numbers, $goal);
    } else {
        my $total = eval $n;
        say $n if ($total == $goal)
    }
}
```

`$nums` is the string containing the remaining digits. Javier uses `split` with a limit (3rd argument) to partition `$nums` into `$n2` and `$new_numbers`. Thus, he is paring off one digit at a time, and then recursing once for each operation: addition, subtraction, and concatenation.

When `$nums` is empty (boolean false), the base case is triggered, and a simple check of whether `eval $n` is equal to the `$goal` amount determines whether the equation is printed or not.

**Blog** › [Perl Weekly Challenge – 044](https://perlchallenges.wordpress.com/2020/01/21/perl-weekly-challenge-044/)

## Laurent Rosenfeld

Laurent submitted four solutions to challenge #1 this week, covering two fundamentally different approaches. I will look at the "final forms" of each:

### Recursive

[Laurent's 1a solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-044/laurent-rosenfeld/perl/ch-1a.pl) is defined recursively, building up expressions by `chop`ping off the last digit and recursing on each possible operation: addition, subtraction, or concatenation:

```perl
sub combine {
    my ($combined, $source) = @_;
    if ($source eq "") {
        say $combined if eval $combined == 100;
        return;
    }
    my $operand = chop $source;
    for my $op ('+', '-', '') {
        combine ("$combined$op$operand", $source);
    }
}
my $source = reverse "123456789";
my $combined = chop $source;
combine ($combined, $source);
```

### Glob

Laurent then had the insight that he could solve this problem with `glob`. [His 1c solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-044/laurent-rosenfeld/perl/ch-1c.sh) is an impressive one-liner:

```perl
say for grep { 100 == eval } glob join "{+,-,}", 1..9;
```

Notice that the `join` inserts the string `{+,-,}` between each digit, so `glob` can then generate all 3⁸ expressions. That's all there is to see. After that, it's a trivial matter of printing the expressions that `eval` to 100. I'm a huge fan of this solution.

**Laurent's Blog** › [Only 100, Please and Make it 200](http://blogs.perl.org/users/laurent_r/2020/01/perl-weekly-challenge-44-only-100-please-and-make-it-200.html)

## Peter Scott

[Peter's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-044/peter-scott/perl/ch-1.pl) is another that iterates through all base-3 numbers and maps those to operators. Where Peter's solution differs, is in his use of [List::MoreUtils](https://metacpan.org/pod/List::MoreUtils)' `mesh()`:

```perl
while ( 1 )
{
  my @ops = ternary( $n );
  my @interleave = ( map { $operators[$_] } @ops, 0 ); # Mesh wants same sizes
  my @formula = mesh @digits, @interleave;
  my $expr = join '', @formula;
  my $res = eval $expr;
  say "$expr = $res" and exit if $res == 100;
  $n++;
}
```

While Peter's code exits after finding the first solution, it will output all eleven if one simply removes the `and exit` from the penultimate line in the above block.

`mesh` helps Peter produce some clean, easily understood code. I like it.

## Roger Bell West

[Roger's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-044/roger-bell-west/perl/ch-1.pl) is another that iterates in base-3, in the `@si` array in this case:

```perl
my @base=(1..9);
my @sv=('','-','+');
my $maxdepth=8;
my @si=(0) x $maxdepth;
while (1) {
  my $str=join('',map {$base[$_].$sv[$si[$_]]} (0..$maxdepth-1)).$base[$maxdepth];
  my $tot=eval($str);
  if ($tot == 100) {
    print "$str\n";
  }
  my $i=0;
  while ($i < $maxdepth) {
    $si[$i]++;
    if ($si[$i] <= $#sv) {
      last;
    }
    $si[$i]=0;
    $i++;
  }
  if ($i >= $maxdepth) {
    last;
  }
}
```

Roger's code is easily understood. The `while` loop does everything. The expression is composed by pairing a digit with an operator (`@sv`), and incrementing in base-3 to set up the next iteration.

## Ruben Westerberg

[Ruben's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-044/ruben-westerberg/perl/ch-1.pl) is still another take on base-3 iteration, with his own `baseToDec()` and `decToBase()` subs, which he was able to re-use from last week's challenge. Here is his main loop:

```perl
while ($i<$limit) {
    my $num=sprintf "%08s0",decToBase(3,$i++);
    my @ops=map {tr/120/+-/d;$_}  split "",$num;
    my $exp= join "",map {$digits[$_],$ops[$_]} 0..8;
    my $sum=eval $exp;
    print "sum: $sum from: $exp\n" if $sum==100;
}
```

I like the use of `tr//d` to replace the base-3 numbers with their corresponding operators. Ruben uses string `eval` to get the result, which is safe, because the
string is entirely composed by his program, and could be proven to be safe if so desired.

## Ryan Thompson

[My solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-044/ryan-thompson/perl/ch-1.pl) is recursive, but divides up the recursive step a little differently:

```perl
sub sum_split {
    my %o = @_;

    if (0 == length $o{num}) {
        my $sum = eval $o{exp} // return;
        say "$sum == $o{exp}" if $sum == $o{sum};
        return
    }

    # Partition $num and recurse
    for (1..length $o{num}) {
        my ($l, $r) = unpack "A$_ A*", $o{num};
        my @cur_ops = length($o{exp}) > 0 ? @ops : @prefix_ops;
        sum_split(%o, num => $r, exp => "$o{exp}$_$l") for @cur_ops;
    }
}
```

Instead of essentially writing a base-3 counter as many did, my recursion step recurses on every 2-partition of the remaining string, using `unpack`. For example, 123 => (1:23, 12:3, 123:). From there, I then insert every operator. The base case uses string `eval` to get the result and outputs it if it equals the target.

`@cur_ops` was necessary because I chose to allow the negative prefix. Allowing the negative prefix also means my program needed to check more solutions. I wanted to generalize the problem a bit, but I could have saved some complexity by sticking with the literal problem description.

I also did some experimentation with more operators, including the outrageous set `@ops = qw( + - * / % >> << & | )`. That took a few minutes to run, since the number of permutations jumps to a few hundred million. There were [22,675 solutions](http://ry.ca/misc/all_ops.txt) (573KiB), like the following:

```
100 = +1 + 2 + 3 / 4 << 5 | 6 & 78 - 9
```

Can you place parentheses in that expression and have it still `eval` to 100? I may have spent over an hour trying that with various examples from the output.

**My Blog** › [Only 100, Please](http://www.ry.ca/2020/01/only-100-please/)

## Saif Ahmed

[Saif's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-044/saiftynet/perl/ch-1.pl) is another recursive one. Saif uses the replacement form of `substr` to insert the operator into the string:

```perl
sub tryInsert{
    my ($str,$target,$marker)=@_;
    $marker //=1;         # $marker identifies the first insertion point
                          # further attempts ar from this point to the
                          # postion before the last character in the string
    foreach my $pos ($marker..((length $str)-1)){
        foreach my $operator(qw{+ -}){
          my $temp=$str;                      # put in a temporary string
          substr $temp,$pos,0,$operator;      # insert the operator
          print $temp."\n"                    # print the reulting string
             if   eval ("$temp")==$target;    # only if the result is our $target
          tryInsert($temp,$target,$pos+2);    # recurse with new insertion point
        }
    }
}
```

Saif's solution is concise, and efficient. Nice.

## wanderdoc

[wanderdoc's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-044/wanderdoc/perl/ch-1.pl) goes back to the iterative approach we've seen, with the help of two CPAN modules:

 * [Algorithm::Combinatorics](https://metacpan.org/pod/Algorithm::Combinatorics) › `variations_with_repetition()`
 * [List::MoreUtils](https://metacpan.org/pod/List::MoreUtils) › `zip()`

The core module [Scalar::Util](https://perldoc.perl.org/Scalar/Util.html) is also used, for the `looks_like_number()` function. Now let's see how wanderdoc puts it all together:

```perl
my @operators = ('+', '-', '');
my $string = "123456789";
my @array = split(//,$string);
my $iter = variations_with_repetition( [@operators], $#array);
my %uniq;
while ( my $c = $iter->next ) {
     my @z = zip(@array, @$c);
     pop @z; # undef.
     my $formula = join('',@z);
     $uniq{ $formula }++;
     next if $uniq{ $formula } > 1;

     my $sum = eval $formula;
     unless ( looks_like_number($sum) ) {
          print $@, $/;
          die "Sum is ${sum}: Something went wrong.";
     }

     next unless 100 == $sum;
     print "${formula} = ${sum}$/";
}
```

`$iter` is an iterator that now spits out a `$string` length - 1 sized array of operators, like so:

```
+ + + + + + + +
+ + + + + + + -
+ + + + + + +
+ + + + + + - +
+ + + + + + - -
+ + + + + + -
(etc.)
```

All that needs to be done is to `zip()` them together to interleave the operators into the `@array` of digits, and then string-`eval` the result.

***

# Task #2 - Make it 200

*You have only $1 left at the start of the week. You have been given an opportunity to make it $200. The rule is simple with every move you can either double what you have or add another $1. Write a script to help you get $200 with the smallest number of moves.*

This week's second challenge in some respects was easier than the first, since there is an extremely elegant and efficient greedy algorithm to find the optimal path: instead of starting with $1, we start with $200 and work our way backwards. Whenever we have an even number, divide by 2, otherwise, subtract 1. This guarantees we will find the shortest path, which can simply be returned in reverse order. See [my blog](http://www.ry.ca/2020/01/make-it-200/) for some informal discussion on why this works.

While many people did implement the above algorithm, there were some excellent alternative solutions as well. For instance, many people simply brute-forced the small search space.

## Adam Russell

[Adam's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-044/adam-russell/perl/ch-2.pl) again uses `AI::Genetic`. See my discussion of his challenge #1 solution for a bit more background, or check out [Adam's blog](https://adamcrussell.livejournal.com/14635.html). Here's the fitness function:

```perl
sub fitness{
    my($genes) = @_;
    my $total = 1;
    my $count_no_op = 1;
    for my $gene (@{$genes}){
        $total = $gene->($total);
        $count_no_op++ if $gene->() =~ m/no/;
    }
    return 200 - $total if $total >= 200;
    return ($total - 200) * $count_no_op;
}
```

The fitness function is much simpler this time. Here, it just returns the negative distance from 200, but multiplied by a count of the no-ops, to penalize individuals with genes turned off. While the challenge #1 GA took around 45 seconds to run on my system, this one took just 600ms.

The way Adam's program produces an *optimal* solution bears some explanation: Adam sets up 9 genes which can each take on either `no_op`, `add_one`, or `double`:

```perl
my $genes = [];
for (0 .. 8){
    push @{$genes}, [\&add_one, \&double, \&no_op],
}
```

This means his program will, regardless of how much evolution takes place, never consider solutions with more than 9 operations. And we know that the optimal solution takes exactly 9 operations.

**Adam's Blog** › [Evolving code with AI::Genetic](https://adamcrussell.livejournal.com/14635.html)

## Alicia Bielsa

[Alicia's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-044/alicia-bielsa/perl/ch-2.pl) uses the greedy algorithm to make short work of the problem:

```perl
my $objective = 200;
while ($objective > 1 ) {
    if ($objective % 2 == 0){
        push (@aMoves, 'double');
        $objective = $objective / 2;
    } else {
        push (@aMoves, 'add 1');
        $objective = $objective - 1;
    }
}
```

She then works through `reverse(@aMoves)` to pretty-print the results:

```perl
my $amountMoney = 1;
foreach my $move (reverse(@aMoves)){
    if ($move eq 'double'){
        print "Double $amountMoney ";
        $amountMoney = $amountMoney * 2 ;
        print "= $amountMoney\n";
    } else {
        print "Add 1 to $amountMoney ";
        $amountMoney = $amountMoney + 1 ;
        print "= $amountMoney\n";
    }
}
```

## Andrezgz

[Andrezgz's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-044/andrezgz/perl/ch-2.pl) works through the search space by looping through every 10-bit number, mapping the 0s and 1s to `+ 1` and `* 2`, and finally string-`eval`-ing each operation. With that, Andrezgz then returns the first set of `@ops` that evaluates to 200.

```perl
use constant MOVES_LIMIT => 10; # upper bound of moves to check

foreach my $n ( 0 .. (2 ** MOVES_LIMIT)-1 ) {
    my @ops = map { $_ ? '+ 1' : '* 2'} split //, sprintf("%b", $n);
    my $value = 1;
    $value = eval($value . $_) for (@ops);

    if ($value == 200) {
        @solution = @ops;
        last;
    }
}
```

This does find the shortest path, partly due to the choice of `MOVES_LIMIT => 10`, which is very close to the optimal solution length of 9.

## Cheok-Yin Fung

[Cheok-Yin Fung's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-044/cheok-yin-fung/perl/ch-2.pl) loops from 3..200, storing previous results in `@t`. For each number, they consider whether dividing by 2 or subtracting 1 would lead to a shorter sequence, by looking at the previous term in the sequence.

```perl
my @t = (0, 0, 1);

for my $k (3..200) {
    if ($k % 2 == 0) {$t[$k] = 1+ &min( $t[$k/2] , $t[$k-1])}
        else {$t[$k] = $t[$k-1]+1;}
}

print $t[200], "\n";
```

This solution outputs the optimal number of operations. With a little bit of bookkeeping, it could output the sequence itself as well.

Both this solution and Cheok-Yin Fung's solution for challenge #1 strike me as being quite analytical, which I appreciate.

## Colin Crain

[Colin's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-044/colin-crain/perl/ch-2.pl) uses the greedy approach, succinctly:

```perl
while ( $value != 1) {
    if ($value % 2 == 0){
        $value /= 2;
    }
    else {
        $value -= 1;
    }
    unshift @steps, $value;         ## we build the array of steps from back to front
                                    ## so there is no need to reverse it later
}
```

Colin's extended comments contain a lot of interesting analysis on his own journey toward proving that the greedy solution produces optimal results.

## Cristina Heredia

[Cristina's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-044/cristian-heredia/perl/ch-2.pl) uses the greedy method, but splits the problem into two subs, which call each other to reduce `$number` as quickly as possible. The code to output the solution is also included in the `remove()` sub:

```perl
sub divide {
    while (($number %2 )==0) {
        $number = $number / 2;
        unshift @moves, 'double ';
    }
    remove();
}

sub remove {
    $number --;
    unshift @moves, '+1$ ';
    if ($number == 1 or $number == 0) {
        print "The moves that you have to do are: \n";
        $total = @moves;
        print "$total\n";
        print 'And they are: ';
        foreach (my $i = 0; $i < @moves; $i++) {
            print "@moves[$i]";
        }
    }
    else {
        divide();
    }
}
```

Cristina is one of a few people who take advantage of `unshift` to insert the moves at the beginning of the array, which saves having to do a `reverse` later. Efficiency-wise, it's not going to make any real difference here, but it does make for slightly cleaner code.

## Daniel Mantovani

[Daniel's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-044/daniel-mantovani/perl/ch-2.pl) takes the greedy approach, appending a plain-English sentence to `@steps` for each operation:

```perl
while ($target > 1) {
    if ($target % 2) {
        push @steps, sprintf('Add $1 to $%i (new total $%i)', $target-1, $target);
        $target--;
    } else {
        push @steps, sprintf('Multiply $%i by 2 (new total $%i)', $target / 2, $target);
        $target /= 2;
    }
}
```

Daniel then outputs `@steps`:

```perl
for my $i (1..@steps) {
    say "Step #$i: ", pop @steps;
}
```

## Dave Jacoby

[Dave's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-044/dave-jacoby/perl/ch-2.pl) sets up a queue in `@array` to do a breadth-first search (BFS) of the search space:

```perl
my @array = (1);
for my $i (@array) {
    my $check = decode($i);
    if ( $check == 200 ) {
        say join "\t", $check, $i, scalar @array;
        exit;
    }

    if ( $check > 200 ) {
        next;
    }
    push @array, $i . 'p';
    push @array, $i . 'd';
}
```

The `decode()` sub takes a string like `1dppd` and returns 8, since (((1 * 2) + 1) + 1) * 2 = 8:

```perl
sub decode ( $sample ) {
    my ( $i, @list ) = split m//, $sample;
    for my $l (@list) {
        $i += 1 if $l eq 'p';
        $i *= 2 if $l eq 'd';
    }
    return $i;
}
```

While you might be aware that adding or removing elements within the loop body is expressly discouraged in the [Perl documentation](https://perldoc.perl.org/perlsyn.html#Foreach-Loops) for hopefully obvious reasons, the full truth is a bit more nuanced. Since Dave is only ever appending to the end of `@array`, ahead of the current index, Perl never has any reason to get confused, so this works as a sort of sneaky queue.

## Duane Powell

[Duane's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-044/duane-powell/perl/ch-2.pl) is another greedy implementation:

```perl
my @solution;
my $goal = 200;
push @solution, $goal;
while ($goal > 1) {
    # if odd number deduct 1 making it even, otherwise divide by 2
    $goal = ($goal % 2) ? $goal-1 : $goal/2;
    # push this step into the solution set
    push @solution, $goal;
}
say join(',',reverse(@solution));
```

Duane's solution is concise, and outputs a minimalistic array of intermediate numbers (1,2,3,6,12,24,25,50,100,200), since anyone looking at that list can easily see whether each number is doubled or incremented.

## Duncan C. White

[Duncan C. White's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-044/duncan-c-white/perl/ch-2.pl) exhaustively searches by maintaining a list of all possible sequences, which he builds up one character at a time, ensuring the shortest solution will be found first:

```perl
fun search( $initial, $goal ) {
    my $seq = "";
    my @todo = ( [$initial, ""] );
    for(;;) {
        # Build a new list of todo pairs, twice as long as the old one.
        # stopping if we hit $goal
        my @newtodo;
        foreach my $pair (@todo) {
            my( $currvalue, $currseq ) = @$pair;
            return $currseq if $currvalue == $goal;

            push @newtodo, [ 2 * $currvalue, $currseq."d" ];
            push @newtodo, [ $currvalue + 1, $currseq."i" ];
        }
        @todo = @newtodo;
    }
}
```

It's an interesting way to iterate.

## E. Choroba

[Choroba's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-044/e-choroba/perl/ch-2.pl) searches with the help of a `%possibilities` hash to map seen values to the sequences of numbers:

```perl
my %possibilities = (1 => []);
while (! exists $possibilities{200}) {
    for my $p (keys %possibilities) {
        $possibilities{ $_ } ||= [ @{ $possibilities{$p} }, $p ]
            for $p + 1, $p * 2;
    }
}

my @moves = @{ $possibilities{200} };
say scalar @moves, ": @moves";
```

Starting from the degenerate case of `1 => []`, Choroba expands on that by looping over all known solutions and adding 1 and multiplying by 2, and adding those results to `%possibilities`. As soon as `$possibilities{200}` exists, that expression must be the shortest, since it was checked for on every move.

**Choroba's Blog** › [One Hundred, Two Hundred](http://blogs.perl.org/users/e_choroba/2020/01/perl-weekly-challenge-044-one-hundred-two-hundred.html)

## Fabrizio Poggi

[Fabrizio's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-044/fabrizio-poggi/perl/ch-2.pl) is another greedy implementation:

```perl
push @array, $number;
do {
    if ($number % 2) {
        $result = $number-1;
        push @array, $result;
        $number = $result/2;
        push @array, $number;
    } else {
        $number = $number/2;
        push @array, $number;
    }
} while($number > 1);

@array = reverse@array;
print "@array\n";
```

This code conveys its intentions well, and does the task it was designed to do.

## Javier Luque

[Javier's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-044/javier-luque/perl/ch-2.pl) recursively explores all sequences of incrementing or doubling, up to an arbitrarily defined maximum length:

```perl
sub add_or_double {
    my ($cash, $steps, $solution) = @_;
    $steps++;
    return undef if $steps > 15; # Let's not recurse past 15

    if ($cash == 200) {
        if ($min_steps > $steps) {
            $min_steps = $steps;
            $min_solution = $solution;
        }
    }
    add_or_double($cash * 2, $steps, $solution . 'd') if $cash * 2 <= 200;
    add_or_double($cash + 1, $steps, $solution . 'a') if $cash + 1 <= 200;
}
```

The base case (`$cash == 200`) looks at whether the current solution is shorter than the previous best solution, and replaces the best solution if so.

The recursive step simply calls `add_or_double()` with the cash either doubled or incremented, with a bit of housekeeping to manage the sequence, and to avoid going over the goal amount.

**Blog** › [Perl Weekly Challenge – 044](https://perlchallenges.wordpress.com/2020/01/21/perl-weekly-challenge-044/)

## Laurent Rosenfeld

[Laurent's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-044/laurent-rosenfeld/perl/ch-2.pl) works by starting at $1, attempting to increment between 0 and 30 times, greedily multiplying by 2 until it exceeds half the target, and then incrementing the rest of the way:

```perl
for my $incr (0..30) {
    last if $incr > $min_ops;
    my $current_val = START_VAL;
    my @steps = ( START_VAL );
    for my $add (1..$incr) {
        push @steps, "+1";
        $current_val++;
    }
    while ($current_val <= HALF_TARGET) {
        push @steps, "*2";
        $current_val *= 2;
    }
    while ($current_val < TARGET) {
        push @steps, "+1";
        $current_val++;
    }
    my $nb_steps = scalar @steps;
    next if $nb_steps >= $min_ops;
    $min_ops = $nb_steps;
    $best_so_far = $incr;
    $good_combinations{$incr} = [@steps];
}
```

This leads to a solution with 16 steps: `1 +1 +1 *2 *2 *2 *2 *2 *2 +1 +1 +1 +1 +1 +1 +1 +1`, which is higher than the optimal 9-step solution. Had Laurent kept going, I'm certain he would have quickly found an optimal algorithm.

**Laurent's Blog** › [Only 100, Please and Make it 200](http://blogs.perl.org/users/laurent_r/2020/01/perl-weekly-challenge-44-only-100-please-and-make-it-200.html)

## Roger Bell West

[Roger's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-044/roger-bell-west/perl/ch-2.pl) uses a queue to implement a breadth-first search:

```perl
my @seq=([1,[]]);
my $goal=200;

while (1) {
  my $s=shift @seq;
  if ($s->[0] == $goal) {
    print join(', ',map {['double','add 1']->[$_]} @{$s->[1]}),"\n";
    last;
  }
  push @seq,[$s->[0]*2,[@{$s->[1]},0]];
  push @seq,[$s->[0]+1,[@{$s->[1]},1]];
}
```

Roger uses the familiar `while`/`shift` approach to implementing the queue, and uses an array of arrays to do some housekeeping, storing both the sequence and its value in each queue element, which avoids the need to do any parsing or extra computation later.

## Ruben Westerberg

[Ruben's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-044/ruben-westerberg/perl/ch-2.pl) uses the greedy method, building up the reversed sequence in `@moves`:

```perl
my $target=200;
my @moves;
my $d=$target;
while ($d!=1) {
    if ($d%2==0) {
        push @moves, "Double";
        $d/=2;
    }
    else {
        push @moves, "Add 1";
        $d-=1;
    }
}
```

The results are then pretty-printed with the following code:

```perl
my $t=1;
printf "Start: \t\t%3d\n",$t;
for (reverse @moves) {
    $t+=1 if /^A/;
    $t*=2 if /^D/;
    printf "Move:\t%s:\t%3d\n",$_, $t;
}
```

```
Start:            1
Move:   Double:   2
Move:   Add 1:    3
Move:   Double:   6
Move:   Double:  12
Move:   Double:  24
Move:   Add 1:   25
Move:   Double:  50
Move:   Double: 100
Move:   Double: 200
```

## Ryan Thompson

[My solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-044/ryan-thompson/perl/ch-2.pl) uses the greedy method, but then I also wrote a recursive method, to search all possible solutions of *n* moves or less. First, here's the greedy one:

```perl
sub double_or_plus( $start, $end ) {
    my @path = $end;
    while ($end != $start) {
        $end = $end % 2 ? $end - 1 : $end / 2;
        unshift @path, $end;
    }
    @path;
}
```

And here's the exhaustive recursive one (both of these use the `signatures` feature, and `exhaustive()` uses `current_sub` as well):

```perl
sub exhaustive( $start, $end, $max_path ) {
    my @shortest = (0) x ($max_path + 1);

    sub ( $start, $end, @path ) {
        push @path, $start;

        return if @path > @shortest or $start >  $end;
        @shortest = @path and return if $start == $end;

        __SUB__->($start + 1, $end, @path);
        __SUB__->($start * 2, $end, @path);
    }->($start, $end);

    @shortest;
}
```

My blog has an informal justification for why the greedy method will always be optimal. I wrote the exhaustive one mainly for fun, but also so I could say I validated the greedy results for every value past `$end = 100_000`.

**My Blog** › [Make it 200](http://www.ry.ca/2020/01/make-it-200/)

## Saif Ahmed

[Saif's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-044/saiftynet/perl/ch-2.pl) traverses the search space iteratively, effectively doubling the length of `@options` each time:

```perl
sub doubleOrAdd{        # this routine takes starting value and final target
  my ($start,$target)=@_;

  return print "Number out of bounds\n"         # too big takes too long and
         if $target>100000 or $target<$start;   # can't be smaller than $target

  my @options=("$start");                       # initialise list of operations,
  my $found=($start==$target);                  # do we already have goal?

  while (! $found){
      @options = map {("($_+1)","($_*2)")} @options; # add the two possible ops
      foreach  my $answer ( @options ) {      # test each of the sequences
        if ( eval("$answer")==$target) {      # against our target
            # number of moves is count of open brackets,remove these.
            print $answer=~s/\(//g," moves required\n";

            $answer=~s/^(\d+)/Start with \$$1,\n/;   # the starting number is 1st number
            $answer=~s/\+1\)/ add 1,\n/g;            # make the result human
            $answer=~s/\*2\)/ double it,\n/g;        # readable:

            print $answer;
            $found=1;last;                           # stop looking
        };
      };
    }
    print " Now you have \$$target!";                # declare discovery
}
```

What I find most interesting is the way Saif builds up the pretty-printed output. When an answer is found, Saif will have a string like `(((((((((1+1)+1)*2)*2)*2)+1)*2)*2)*2)`, which the three substitution regexes pull apart and turn into plain English.

## Wanderdoc

[Wanderdoc's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-044/wanderdoc/perl/ch-2.pl) is another greedy implementation, kept nice and straightforward:

```perl
while ( $START >= 1 )
{
     push @steps, [$START, $GOAL];
     if ( $START % 2 == 0 )
     {
          $START /= 2;
     }
     else
     {
          $START -= 1;
     }
}
```

wanderdoc's output step iterates over `reverse @steps` and prints a 3-column output of the step number, current value, and goal (always 200):

```perl
my $counter = 0;
for my $step ( reverse @steps )
{
     print join("\t", $counter, @$step[0,1] ), $/;
     $counter++;
}

```

***
***
## SEE ALSO

***

### Blogs this week:

(1) **Adam Russell** › [Challenge 1](https://adamcrussell.livejournal.com/15036.html) | [Challenge 2](https://adamcrussell.livejournal.com/14635.html)

(2) **E. Choroba** › [One Hundred, Two Hundred](http://blogs.perl.org/users/e_choroba/2020/01/perl-weekly-challenge-044-one-hundred-two-hundred.html)

(3) **Javier Luque** › [Perl Weekly Challenge - 044](https://perlchallenges.wordpress.com/2020/01/21/perl-weekly-challenge-044/)

(4) **Laurent Rosenfeld** › [Only 100, Please, and Make it $200](http://blogs.perl.org/users/laurent_r/2020/01/perl-weekly-challenge-44-only-100-please-and-make-it-200.html)

(5) **Ryan Thompson** › [Only 100 please](http://www.ry.ca/2020/01/only-100-please/) | [Make it 200](http://www.ry.ca/2020/01/make-it-200/)
