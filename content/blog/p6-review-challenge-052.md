---
title: "Laurent Rosenfeld Weekly Review: Challenge - 052"
date: 2020-03-29T00:00:00+00:00
description: "Laurent Rosenfeld Weekly Review: Challenge - #052."
type: post
image: images/blog/p6-review-challenge-052.jpg
author: Laurent Rosenfeld
tags: ["Raku"]
---
***
# Raku Solutions Weekly Review
***

## Task #1: Stepping Numbers

> *Before going into the subject, I should apologize for having suspended my reviews of the Perl Weekly Challenge submissions for about two and a half months. I had warned Mohammad Anwar about that and told him the reasons, but Mohammad did not make these reasons public. The reason is that I did not have time during that period, because I had a lot of work running a local electoral campaign. I can now gradly and proudly announce that I was elected on March 15, 2020 in the city council of my home town, Conflans Sainte-Honorine (35,000 inhabitants), Paris area, France. I should hopefully have more time now to resume my reviews.*

This is derived in part from my [blog post](http://blogs.perl.org/users/laurent_r/2020/03/perl-weekly-challenge-stepping-numbers-and-lucky-winner.html) made in answer to the [Week 52 of the Perl Weekly Challenge](https://perlweeklychallenge.org/blog/perl-weekly-challenge-052/) organized by  <a href="http://blogs.perl.org/users/mohammad_s_anwar/">Mohammad S. Anwar</a> as well as answers made by others to the same challenge.

The challenge reads as follows:

*Write a script to accept two numbers between 100 and 999. It should then print all Stepping Numbers between them.*

*A number is called a stepping number if the adjacent digits have a difference of 1. For example, 456 is a stepping number but 129 is not.*

Just to make things slightly clearer, I would say that all adjacent digits should have an absolute difference of 1, so that 542, 454, or 654 are also stepping numbers.

## My Solutions

Given that the range is quite small, we can use a brute force approach on all numbers between the input values: check for every number in  the range whether it fits the definition.

 ``` Perl6
 use v6;

 subset Three-digits of Int where 99 < * < 1000;

 multi sub prefix:<dif1> (List $val) {
     abs($val[0] - $val[1]) == 1 ?? True !! False;
 }

 sub MAIN (Three-digits $start is copy, Three-digits $end is copy) {
     ($start, $end) = ($end, $start) if $start > $end;

     for $start..$end -> $num {
         my $flag = True;
         for $num.comb.rotor: 2 => -1 -> $seq {
             $flag = False unless dif1 $seq;
         }
         say "$num is a stepping number." if $flag;
     }
 }
 ```

Note that we're using here the [rotor](https://docs.raku.org/routine/rotor) method with a batch size of 2 and a negative gap (-1) to generate all adjacent pairs of digits. And, for fun, we also create a `dif1` operator that returns True if the numbers passed to it have an absolute difference 1, and False otherwise.

This is an example output:

    $ perl6 3-digits.p6 200 400
    210 is a stepping number.
    212 is a stepping number.
    232 is a stepping number.
    234 is a stepping number.
    321 is a stepping number.
    323 is a stepping number.
    343 is a stepping number.
    345 is a stepping number.

But we could also use a different algorithm: we could construct only stepping numbers and check that they are in the range. This leads to the following solution:

``` Perl6
use v6;
subset Three-digits of Int where 99 < * < 1000;

sub MAIN (Three-digits $start is copy, Three-digits $end is copy) {
    ($start, $end) = ($end, $start) if $start > $end;
    for 1..9 -> $i {
        for $i-1, $i+1 -> $j {
            for $j-1, $j+1 -> $k {
                my $num = 100*$i + 10*$j + $k;
                say "$num is a stepping number." if $start <= $num <= $end;
            }
        }
    }
}
```

This program displays the same result as the previous solution when given the same inputs. Note that the outer loop (`for 1..9 -> $i {`) could easily be improved  in terms of performance by using the first digit of the input numbers for the range. However, the program is so fast that this is not required. With its hard-coded nested loops, this program can only work with numbers having three digits, where as the first solution could easily be adapted to numbers having less or more than three digits.

## Alternative Solutions

Many challengers had different interpretations on the challenge. Some believed that only strictly ascending digits were needed. Others thought that only strictly ascending or strictly descending digits were needed. To me, 121 is also a valid stepping number. Please don't feel offended if I disagree with your interpretation.

[Arne Sommer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/arne-sommer/raku/ch-1.p6) suggested two programs along the same lines as me: first a brute force approach (checking all numbers within the range), and then a program constructing stepping numbers and checking their range. This is his second solution:

``` Perl6
subset SteppingLimit of Int where 100 <= * <= 999;

unit sub MAIN (SteppingLimit $from,
               SteppingLimit $to where $to > $from,
           :$verbose);

say ": Candidates: { ($from.Int .. $to.Int).list }" if $verbose;

my $a = $from.substr(0,1).Int;
my $b = $to.substr(0,1).Int;

my $stepping := gather
{
  for $a .. $b -> $first-digit
  {
    for $first-digit -1, $first-digit + 1 -> $second-digit
    {
      next unless -1 < $second-digit < 10;

      for $second-digit -1, $second-digit + 1 -> $third-digit
      {
        next unless -1 < $third-digit < 10;
    my $current = "$first-digit$second-digit$third-digit".Int;
    take $current if $from <= $current <= $to;
      }
    }
  }
}
say $stepping.join(", ");
```
[Kevin Colyer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/kevin-colyer/raku/ch-1.p6) first created a list of stepping numbers and then filtered out those not within the requested range:

``` Perl6
# create a list of stepping numbers
# task is not clear if ascending digits only so calculating both
my @steppings = gather for 1..7 -> $a {
    take $a*100+($a+1)*10+($a+2); # ascending difference
    take ($a+2)*100+($a+1)*10+$a; # descending difference
}

sub MAIN(Int $low, $high) {
    die "Low bound [$low] should be >=100 and <= 999" unless $low >= 100 and $low <= 999;
    die "High bound [$high] should be >=100 and <= 999" unless $high >= 100 and $high <= 999;

    # filter the steppings number array
    # NB not sure how to chain whateverblock comparisons into one grep, but this is quite clear anyway
    my @s = @steppings.grep( * > $low ).grep( * < $high ).sort;

    if @s.elems == 0 {
        say "No stepping numbers between $low and $high"
    } else {
        say "Stepping numbers between $low and $high: [{@s}]"
    }
}
```

Note that Kevin could have used only one `grep` instead of two with a construct such as: `grep($low < * < $high)`, although it could be argued that `grep($low <= * <= $high)` is probably better.

I'm afraid that Kevin's construction of stepping numbers is incomplete (at least by my understanding of the definition of stepping numbers). His list only contains numbers with descending or ascending digits, and thus misses numbers such as 232, 323, or 343.

[Luca Ferrari](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/luca-ferrari/raku/ch-1.p6) also constructed a list of all stepping numbers within a range slightly broader than the requested range and then kept only those really within the requested range:

``` Perl6
sub MAIN( Int:D :$from where {  100 <= $from <= 999 },
          Int:D :$to where   { 100 <= $to <= 999 && $to > $from } ) {

    say "Searching STEPPING NUMBERs between $from and $to";


    # compose manually all possible stepping numbers
    # starting from the hundred value of the from number
    my ( $h, $d, $u ) = $from.comb;
    my ( $H, $D, $U ) = $to.comb;
    my @stepping = ();
    while ( $h <= $H ) {

        for 1, -1 {
            my $dd = ( 0 <= $h + $_ <= 9 ) ?? $h + $_ !! Nil;
            for 1, -1  {
                my $uu = ( 0 <= $dd + $_ <= 9 ) ?? $dd + $_ !! Nil;

                @stepping.push( $h * 100 + $dd * 10 + $uu ) if ( $uu && $dd );
            }
        }

        $h++;
    }

    say @stepping.grep( $from <= * <= $to ).join( "\n" );
    say "-----------------------";
}
```

[Mark Anderson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/mark-anderson/raku/ch-1.p6)'s program is also constructing a list of stepping numbers within the input range:

``` Perl6
my @results;

sub MAIN($arg1, $arg2 where $arg1 >= 100 < $arg2 <= 999) {
    my $start = $arg1.polymod(10,10).Array.pop;
    my $stop  = $arg2.polymod(10,10).Array.pop;

    for $start .. $stop -> $num {
        step_it($arg1, $arg2, $num);
        say @results.join("\n") if @results;
    }
}
sub step_it($arg1, $arg2, $num) {
    @results = Empty;
    @results.push($num);

    while @results {
        last if @results[0].chars == $arg2.chars;
        my $num = @results.shift;
        my $last_digit = $num % 10;

        unless $last_digit == 0 {
            my $new = $num ~ $last_digit - 1;
            push_it($arg1, $arg2, $new);
        }

        unless $last_digit == 9 {
            my $new = $num ~ $last_digit + 1;
            push_it($arg1, $arg2, $new);
        }
    }
}
sub push_it($arg1, $arg2, $new) {
    if $new >= $arg1.substr(0, $new.chars) {
        if $new <= $arg2.substr(0, $new.chars) {
            @results.push($new);
        }
    }
}
```

Note the use of the `%` modulo operator and `polymod` method to handle the digits of the input numbers.

[Noud Aldenhoven](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/noud/raku/ch-1.p6) used a recursive `stepping-numbers` subroutine to build a list of stepping numbers:

``` Perl6
multi sub stepping-numbers($start, 0) {
    [[$start],];
}

multi sub stepping-numbers($start, $size) {
    gather {
        if ($start != 0) {
            for stepping-numbers($start - 1, $size - 1) -> @sn {
                take [$start, |(@sn)];
            }
        }

        if ($start != 9) {
            for stepping-numbers($start + 1, $size - 1) -> @sn {
                take [$start, |(@sn)];
            }
        }
    }
}
sub stepping-number-range($start, $end) {
    gather for $start.polymod(100)[1]..$end.polymod(100)[1] -> $i {
        for stepping-numbers($i, 2) -> @sn {
            my $sn = @sn.join('').Int;
            take $sn if ($start <= $sn <= $end);
        }
    }
}
say stepping-number-range(101, 999);
say stepping-number-range(545, 987);
```

[Simon Proctor](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/simon-proctor/raku/ch-1.p6) wrote a fairly short program using the `is-consecutive` subroutine to filter numbers within the range that have consecutive digits (brute force approach):

``` Perl6
sub is-consecutive( UInt $number ) {
    my @test = $number.comb();
    [==] ((@test.elems,*-1...0) Z+ @test)
}

#| Give all the stepping mnumbers between start and end
sub MAIN (
    UInt $start where { $_ >= 100 } = 100, # Start value defaults to 100
    UInt $end where { $_ >= $start } = 999, # End value default to 999
) {
    .say for ($start..$end).hyper.grep( &is-consecutive )
}
```

Simon's understanding of stepping numbers as numbers with "consecutive" digits is far too limited in my view and probably wrong: to me, numbers such as 121, 321, or 434, are valid stepping numbers, but are not found by Simon's program because they don't have consecutive digits.

[Alicia Bielsa](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/alicia-bielsa/raku/ch-1.p6) also used the brute force approach of testing each number within the input range. The main work (filtering the stepping numbers) is done in the following `printIfSteppingNumber` subroutine:

``` Perl6
sub printIfSteppingNumber ( Int $number ) {
    my @aDigits = split('',$number);
    @aDigits.pop;
    @aDigits.shift;
    my $isSteppingNumber = 1;

    for 1..@aDigits.Int-1 {
        my $diff = @aDigits[$_] - @aDigits[$_-1];
        if  $diff != 1 && $diff != -1 {
            $isSteppingNumber = 0;
        }
    }
    if $isSteppingNumber {
        say $number;
    }
}
```
Alicia's program is otherwise spending quite a bit of energy to validate the two input numbers. Most of this work could be done in an easier way within the `MAIN` subroutine signature. I guess the reason for that is that Alicia probably ported her Perl program to Raku. Anyway, this is the first time I see a Raku program written by Alicia (there might have been others before, but, in that case, I had not seen them, due to the fact that I did not follow PWC very closely in the last 10 weeks or so), welcome to the club, Alicia.

[Colin Crain](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/colin-crain/raku/ch-1.p6) also used the brute force approach of testing each number within the input range. But Colin wrote not less than 4 subroutines to check is an input number is a stepping number. The first one is straight forward and works only with numbers that have three digits (as requested in the task specification):

``` Perl6
sub stepping1 ($num) {
    my ($a, $b, $c) = $num.comb;
    ($a - $b).abs == 1 && ($b - $c).abs == 1 ?? 1 !! 0;
}
```

The other three subroutines use regexes with the `ex` (exhaustive) adverb to generate overlapping pairs of digits (with more or less the same effect as the use of the `rotor` method in my first solution) and can work with numbers having less or more than 3 digits:

``` Perl6
sub stepping2 ($num) {
    my @parts = $num ~~ m:ex/\d\d/;
    @parts .= map({([-] $_.comb).abs });
    ([==] @parts.append: 1) ?? 1 !! 0;

}
sub stepping3 ($num) {
    my @parts = ($num ~~ m:ex/\d\d/)
                    .map({([-] $_.comb).abs });
    ([==] @parts.append: 1) ?? 1 !! 0;

}
sub stepping4 ($num) {
    ([==] (($num ~~ m:ex/\d\d/).map({([-] $_.comb).abs })).Array.append: 1) ?? 1 !! 0;
}
```

Colin's program starts with a very detailed comment explaining how these subroutine work, please folllow the link above if you want to know more.

[Javier Luque](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/javier-luque/raku/ch-1.p6) used  brute force to generate all numbers within a range and then checked for each value that it is a stepping number by looping through each digit and comparing it to the digit before it.

``` Perl6
multi MAIN { MAIN(100, 999) };
multi MAIN(Int $start, Int $end) {
    die "End smaller than start" if $end < $start;
    .say for ($start .. $end).grep({is-stepping($_)});
}

sub is-stepping($num) {
    my $is_stepping = True;
    my $prev_digit;

    for ($num.comb) -> $i {
        $is_stepping = False
            if ($prev_digit.defined &&
                $prev_digit != $i + 1 &&
                $prev_digit != $i - 1 );

        $prev_digit = $i;
    }

    return $is_stepping;
}
```
Note the interesting use of multi `MAIN` subroutines to provide default input values when the user doesn't pass any argument to the program.

[Markus Holzer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/markus-holzer/raku/ch-1.p6) used the `rotor` method to generate overlapping pairs of digits much in the same way as I did in my first solution, but came up with a very concise program:

``` Perl6
sub is-stepping( UInt $n ) {
    not so $n.comb.rotor( 2 => -1 ).first: -> ($a, $b) { abs($a - $b) != 1 }
}

sub MAIN (UInt $start = 100, UInt $end = 999) {
    .say for ($start..$end).grep( &is-stepping );
}
```

[Mohammad Anwar](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/mohammad-anwar/raku/ch-1.p6) also came up with a very concise brute force program using in a quite clever fashion the `Z-` meta-operator and the `[==]` reduction meta-operator together with the equal sign:

``` Perl6
sub MAIN(Int $start is copy = 100, Int $stop = 999) {

    die "ERROR: Invalid start [$start]." if $start < 100;
    die "ERROR: Invalid stop [$stop]."   if $stop  > 999 || $stop < $start;

    while $start <= $stop {
        say $start if ([==] $start.comb("") Z- <0 1 2>) || ([==] $start.comb("") Z- <2 1 0>);
        $start++;
    }
}
```

Basically, in `[==] $start.comb("") Z- <0 1 2>`, the `Z-` metaoperator subtracts 0 from the first digit, 1 from the second digit and 2 from the third digits, and `[==]` checks whether the three resulting numbers are equal. The alternative expression does it the other way around. I must say that this is a fairly clever and elegant way of solving the task.

I'm afraid however that Mohammad's program matches strictly ascending or strictly descending stepping numbers, but fails to recognize 121 or 343 as stepping numbers, which they are, at least according to my understanding of the definition. It should not be very complex to complete the conditions in order to also match such numbers as stepping numbers.

[Roger Bell West](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/roger-bell-west/raku/ch-1.p6) also used brute force and subsequent filtering:

``` Perl6
for min(@*ARGS)..max(@*ARGS) -> $c {
  my @d=$c.comb(/./);
  my $v=1;
  for 0..@d.end-1 -> $i {
    if (@d[$i]+1 != @d[$i+1]) {
      $v=0;
      last;
    }
  }
  if ($v) {
    say $c;
  }
}
```

Roger's program finds only stepping numbers whose digits are in strict ascending order, such as 123, 234, and 345, but misses many others such as 321, 121, 212, 432, etc.

I like very much the way Roger's program is using `min(@*ARGS)..max(@*ARGS)` for defining the initial range, this is much simpler than the way I had to re-assign `$start` and `send` in my own solutions.

[Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/ruben-westerberg/raku/ch-1.p6) implemented a pipeline with the `==>` [feed](https://docs.raku.org/language/operators#index-entry-feed) operator:

my ($start,$end)=(@*ARGS[0]//100, @*ARGS[1]//999).sort;
die "Arguments not in range\n"  unless 2 == ($start,$end).grep({100 <= $_ <= 999});

``` Perl6
($start..$end)==>
grep({
    my @a=$_.comb;
    my @b=@a.rotate(-1);
    my @diff=@a >>-<< @b;
    @a-1 == @diff[1..*-1].grep({ $_ == 1});

})==>my @stepping;

put "Stepping Number: $_" for @stepping;
```
Ruben's program has the same defect as Roger's: it finds only stepping numbers whose digits are in strict ascending order, such as 123, 234, and 345, but misses many others such as 321, 121, 212, 432, etc.

[Ryan Thompson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/ryan-thompson/raku/ch-1.p6) used a constructive approach:

``` Perl6
my @step;
for 1..9 -> $n {
    @step.push: |map { $n ~ ($n+1..$_)        .join: '' }, $n..9;
    @step.push: |map { $n ~ ($_..$n-1).reverse.join: '' },  0..$n-1;
}
say @step».Int.grep( 100 ≤ * ≤ 999 ).sort;
```

However, Ryan's program is also missing stepping numbers such as 121 or 343.

***

### SEE ALSO

Not less than five blog posts (besides mine) this time:

* Arne sommer: https://raku-musings.com/stepping-winner.html

* Luca Ferrari: https://fluca1978.github.io/2020/03/17/PerlWeeklyChallenge52.html#task1

* Javier Luque: https://perlchallenges.wordpress.com/2020/03/16/perl-weekly-challenge-052/

* Mohammad Anwar: https://perlweeklychallenge.org/blog/weekly-challenge-052/

* Ryan Thompson: http://www.ry.ca/2020/03/stepping-numbers/.

## Wrapping up

Please let me know if I forgot any of the challengers or if you think my explanation of your code misses something important (send me an e-mail or just raise an issue against this GitHub page).

If you want to participate to the Perl Weekly Challenge, please connect to [this site](https://perlweeklychallenge.org/).


