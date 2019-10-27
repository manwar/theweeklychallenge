---
title: "Laurent Rosenfeld Weekly Review: Challenge - 030"
date: 2019-10-27T00:00:00+00:00
description: "Laurent Rosenfeld Weekly Review: Challenge - #030."
type: post
image: images/blog/p6-review-challenge-030.jpg
author: Laurent Rosenfeld
tags: ["Perl6"]
---
***
# Perl6 Solutions Weekly Review
***

## Task #1: Christmas on Sunday

This is derived in part from my [blog post](http://blogs.perl.org/users/laurent_r/2019/10/perl-weekly-challenge-30-sunday-christmas-and-triplets.html) made in answer to the [Week 30 of the Perl Weekly Challenge](https://perlweeklychallenge.org/blog/perl-weekly-challenge-030/) organized by  <a href="http://blogs.perl.org/users/mohammad_s_anwar/">Mohammad S. Anwar</a> as well as answers made by others to the same challenge.

The challenge reads as follows:

*Write a script to list dates for Sunday Christmas between 2019 and 2100. For example, 25 Dec 2022 is Sunday.*

## My Solutions

In Perl 6/Raku, the `Date` data type offers the built-in methods we need for date computations, including finding day of week.

``` Perl6
use v6;
for 2019..2100 -> $year {
    say "Christmas of year $year falls on a Sunday."
        if Date.new($year, 12, 25).day-of-week == 7;
}
```

which duly prints out:

    Christmas of year 2022 falls on a Sunday.
    Christmas of year 2033 falls on a Sunday.
    Christmas of year 2039 falls on a Sunday.
    Christmas of year 2044 falls on a Sunday.
    Christmas of year 2050 falls on a Sunday.
    Christmas of year 2061 falls on a Sunday.
    Christmas of year 2067 falls on a Sunday.
    Christmas of year 2072 falls on a Sunday.
    Christmas of year 2078 falls on a Sunday.
    Christmas of year 2089 falls on a Sunday.
    Christmas of year 2095 falls on a Sunday.

We could also do it in the form of a Perl 6 one-liner:

    $ perl6 -e 'say grep {Date.new($_, 12, 25).day-of-week == 7}, 2019..2100;'
    (2022 2033 2039 2044 2050 2061 2067 2072 2078 2089 2095)

 ## Alternative Solutions

 I did not keep track of the number of contributions for past challenges, but it seems to me that, with 15 solutions, this might be the most successful challenge so far in Perl 6. This may have to do with the fact that the core Perl 6 has all built-in methods to easily solve the task.

 [Arne Sommer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-030/arne-sommer/perl6/ch-1.p6) suggested a solution quite similar to mine:

``` Perl6
unit sub MAIN (UInt :$from = 2019, UInt :$to = 2100);
for $from ... $to -> $year
{
  say "25 Dec $year is Sunday." if Date.new($year, 12, 25).day-of-week == 7;
}
```

[Kevin Colyer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-030/kevin-colyer/perl6/ch-1.p6) took essentially the same approach as my one-liner above, but using the `==>` forward feed operator to chain the statements:

``` Perl6
2019..2100 ==> map { Date.new($_,12,25) } ==> grep { $_.day-of-week==7} ==> map { say $_.yyyy-mm-dd };
```

[Mark Senn](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-030/mark-senn/perl6/ch-1.p6) also used essentially the same idea:

``` Perl6
for (2019..2100) -> $year  {
    (Date.new(day =>25, month=>12, year=>$year).day-of-week == 7)
        and  say "25 Dec $year";
}
```

[Noud](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-030/noud/perl6/ch-1.p6) worked along the same lines:

``` Perl6
for 2019 .. 2100 -> $year {
    if (Date.new($year, 12, 25).day-of-week == 7) {
        $year.say;
    }
}
```

[Simon Proctor](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-030/simon-proctor/perl6/ch-1.p6)'s program is similar to most others seen so far:

``` Perl6
.say for (2019..2100).map( { Date.new( :year($_), :day(25), :month(12) ) } ).grep( *.day-of-week == 7 );
```

[Athanasius](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-030/athanasius/perl6/ch-1.p6) made, as often, a relatively long full-fledged program, but using the same `Date` methods as other challengers:

``` Perl6

my UInt constant $START-YEAR    = 2019;
my UInt constant $END-YEAR      = 2100;
my UInt constant $DECEMBER      =   12;
my UInt constant $CHRISTMAS-DAY =   25;
my UInt constant $SUNDAY        =    7;
my Str  constant $FORMAT        = 'Between %d and %d (inclusive), Christmas ' ~
                                  "Day (%dth December) falls on a\nSunday "   ~
                                  "in %s, and %s\n";

sub MAIN()
{
    my UInt @years;
    for $START-YEAR .. $END-YEAR -> UInt $year
    {
        my Date $date = Date.new($year, $DECEMBER, $CHRISTMAS-DAY);

        @years.push: $year if $date.day-of-week == $SUNDAY;
    }
    my UInt $final-year = @years.pop;
    $FORMAT.printf:
        $START-YEAR, $END-YEAR, $CHRISTMAS-DAY, @years.join(', '), $final-year;
}
```

[Daniel Mita](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-030/daniel-mita/perl6/ch-1.p6) planned some extra features, but, when removing them, the gist of his implementation is essentially along the same lines as most others:

``` Perl6
for 2019 .. 2100 -> $year {
    given Date.new( :$year, :12month, :25day ) {
      if .day-of-week == 7 { .say }
    }
}
```

[Jaldhar H. Vyas](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-030/jaldhar-h-vyas/perl6/ch-1.sh) suggested the following one-liner:

    perl6 -e '"$_-12-25".say for (2019..2100).grep({Date.new($_,12,25).day-of-week==0;});'

which was apparently influenced by his Perl 5 implementation and doesn't work properly because it compares the return value of the `.day-of-week` method to 0, whereas it should be compared to 7. I guess it's simply a typo. Making that small change fixes the issue and enables the one-liner to work properly:

    $ ./perl6 -e '"$_-12-25".say for (2019..2100).grep({Date.new($_,12,25).day-of-week==7;});'
    2022-12-25
    2033-12-25
    (... lines omitted for brevity)
    2089-12-25
    2095-12-25

[Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-030/joelle-maslak/perl6/ch-1.p6) also used the same general idea:

``` Perl6
sub MAIN(:$start = 2019, :$end = 2100) {
    my $christmasses = ($start..$end).map({ DateTime.new(:25day, :12month, :year($_)) });
    my $on-sunday = $christmasses.grep: *.day-of-week == 7;
    say $on-sunday».yyyy-mm-dd.join("\n");
}
```

[Markus Holzer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-030/markus-holzer/perl6/ch-1.p6) also used the same feature as others, with just a different syntax:

```Perl6
constant \SUNDAY = 7;
.say for
    ( 2019 .. 2100 )
    .map(  { DateTime.new( :$^year, month => 12, day => 25 ) })
    .grep( { .day-of-week == SUNDAY })
    .map(  { .year })
;
```

[Roger Bell West](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-030/roger-bell-west/perl6/ch-1.p6) made a one-line version of the same:

```Perl6
map {say "$_"}, grep {Date.new($_,12,25).day-of-week==7}, (2019..2100);
```

[Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-030/ruben-westerberg/perl6/ch-1.p6) made yet another version of essentially the same:

```Perl6
(2020..2099).map({
    my $t=Date.new(year=>$_,month=>12,day=>25);
    $t.day-of-week==7??$t!!|();
})>>.put;
```

[Ulrich Rieke](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-030/ulrich-rieke/perl6/ch-1.p6) also used the same basic technique:

```Perl6
my @dates ;
for (2019..2100) -> $year {
  my $d = Date.new( $year , 12 , 25 ) ;
  if ( $d.day-of-week == 7 ) {
      @dates.push( $d ) ;
  }
}
@dates.map( { say ~$_ } ) ;
```

[Yet Ebreo](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-030/yet-ebreo/perl6/ch-1.p6) used essentially the same technique as most others:

```Perl6
for 2019..2100 -> $year {
    my $date = Date.new($year, 12, 25);
    if ($date.day-of-week == 7) {
        say "12/25/$year"
    }
}
```

## Task #2: Integer Triplets Whose Sum is 12

This is derived in part from my [blog post](http://blogs.perl.org/users/laurent_r/2019/10/perl-weekly-challenge-30-sunday-christmas-and-triplets.html) made in answer to the [Week 30 of the Perl Weekly Challenge](https://perlweeklychallenge.org/blog/perl-weekly-challenge-030/) organized by  <a href="http://blogs.perl.org/users/mohammad_s_anwar/">Mohammad S. Anwar</a> as well as answers made by others to the same challenge.

The challenge reads as follows:

*Write a script to print all possible series of 3 numbers, where in each series at least one of the number is even and sum of the three numbers is always 12. For example, 3,4,5.*

This is not specified, but we will consider that all three numbers should be strictly positive (i.e. larger than or equal to 1), because if we were to admit 0 as one of the numbers, it would no longer be a real triplet (in the context of addition). A consequence is that the largest number that can be used is 10 (to obtain 12 when adding twice 1).

I started with a Perl 5 implementation and quickly found out that my initial version was doing a bit too much work when checking whether one of the numbers is even. The only case where none of the numbers of a triplet is even is when all three numbers are odd, and the sum of three odd integers cannot be 12 (and, more generally, cannot be an even number). So, we simply don't need to check that one number is even: checking that the sum of the 3 numbers if 12 is sufficient to prove that one at least of the three numbers is even.


## My Solution

We could write three nested `for` loops as we did for the same challenge in Perl 5. But, for solving this problem in Perl 6/Raku, we would prefer to use the `X` cross product operator in order to generate all possible triplets and then keep those whose sum is 12.

But if we do something like this:

    for 1..10 X 1..10 X 1..10 -> $triplet {
        next unless ([+] | $triplet) == 12;
        say $triplet;
    }

we obtain duplicate triplets:

    ...
    (1 2 9)
    ...
    (2 1 9)
    ...
    (2 9 1)
    ...
    (9 1 2)
    (9 2 1)
    ...

We can get rid of this problem by keeping only triplets in which the numbers are in (non strict) ascending order:

``` Perl6
use v6;
for 1..10 X 1..10 X 1..10 -> $triplet {
    next unless [<=] | $triplet;  # ascending order
    say $triplet if 12 == [+] $triplet;
}
```

which produces the desired result:

    $ perl6 triplets.p6
    (1 1 10)
    (1 2 9)
    (1 3 8)
    (1 4 7)
    (1 5 6)
    (2 2 8)
    (2 3 7)
    (2 4 6)
    (2 5 5)
    (3 3 6)
    (3 4 5)
    (4 4 4)

Note that the header of the `for` loop could be made slightly more concise using the `xx` sequence repetition operator and the `[X]` cross operator associated with the reduction meta-operator:

``` Perl6
for [X] (1..10) xx 3 -> $triplet { # ...
```

## Alternative Solutions

This week's challenge was highly successful for Perl6/Raku solutions. The [Christmas on Sunday](./Christmas-on-sunday.md) task received 15 solutions, and this Triplets adding to 12 challenge did even better with 16 challengers responding.

[Arne Sommer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-030/arne-sommer/perl6/ch-2.p6) used the [combinations](https://docs.perl6.org/type/List#routine_combinations) method to generate triplets, filtered them on their sum (equal to 12), and then removed duplicates by storing in a hash the sorted individual triplets:

``` Perl6
my %seen;

for (1 .. 10, 1..10, 1..10).flat.combinations(3).unique(:with(&[eqv])).grep(*.sum == 12)
{
  my @sorted = $_.sort;

  next if %seen{@sorted.Str};
  say @sorted;
  %seen{@sorted.Str} = True;
}
```

[Kevin Colyer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-030/kevin-colyer/perl6/ch-2.p6) used three nested `for` loops and a separate `SumsTwelve` subroutine to check the triplets' sums:

``` Perl6
sub SumsTwelve(*@tri) {
    return True if ( [+] @tri ) == 12; # this will always fullfil condition one of number is even as can only add to twelve is ALL even or TWO odd. sum of all odd or one odd can never an even number!
    return False;
}

for 1..10 -> $a {
    for 1..11-$a -> $b {
        for 1..12-$b-$a -> $c {
            say "$a,$b,$c" if SumsTwelve($a,$b,$c);
        }
    }
}
```
Note that Kevin's interpretation of the challenge doesn't not consider (2 1 9), (2 9 1), (1 2 9), (1 9 2), (9 2 1), and (9 1 2) to be duplicates. So he found many more triplets than Arne or me:

    1,1,10
    1,2,9
    1,3,8
    1,4,7
    1,5,6
    1,6,5
    1,7,4
    1,8,3
    1,9,2
    1,10,1
    2,1,9
    2,2,8
    2,3,7
    2,4,6
    2,5,5
    2,6,4
    2,7,3
    2,8,2
    2,9,1
    3,1,8
    3,2,7
    3,3,6
    3,4,5
    3,5,4
    3,6,3
    3,7,2
    3,8,1
    4,1,7
    4,2,6
    4,3,5
    4,4,4
    4,5,3
    4,6,2
    4,7,1
    5,1,6
    5,2,5
    5,3,4
    5,4,3
    5,5,2
    5,6,1
    6,1,5
    6,2,4
    6,3,3
    6,4,2
    6,5,1
    7,1,4
    7,2,3
    7,3,2
    7,4,1
    8,1,3
    8,2,2
    8,3,1
    9,1,2
    9,2,1
    10,1,1


[Marl Senn](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-030/mark-senn/perl6/ch-2.p6) first suggested a Wolfram (formerly known as Mathematica) implementation which you can check by following the link. He then proposed two Perl6/Raku implementations using nested `for` loops. The first one is this:

``` Perl6
for (1..10) -> $i  {
    for (1..10) -> $j  {
        for (1..10) -> $k  {
            ($i + $j + $k == 12)  and  say "$i,$j,$k";
        }
    }
}
```

Just like Kevin, Mark doesn't not consider (2 1 9), (2 9 1), (1 2 9), (1 9 2), (9 2 1), and (9 1 2) to be duplicates.

Mark also provided an optimized version of the same modifying the `for`loops to reduce the number of unnecessary calculations:

``` Perl6
    for (1..10) -> $i  {
        for (1..12-$i-1) -> $j  {
            for (12-$i-$j..10) -> $k  {
                ($i + $j + $k == 12)  and  say "$i,$j,$k";
            }
        }
    }
}
```

[Noud](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-030/noud/perl6/ch-2.p6) cleverly used *two* nested `for` loops combined with the `permutations` built-in method:

``` Perl6
my $total = 12;
my @triplets = [];
for 2, 4 ... $total -> $i {
    for 1 .. ($total - $i - 1) -> $j {
        @triplets = [|(@triplets), |([$i, $j, $total - $i - $j].permutations)];
    }
}

# Because we use permutations we have duplicates. Ex. (10, 1, 1) with j <-> k
# gives (10, 1, 1).
say @triplets.unique;
```

It seems to me that there is a problem in this program: the `unique` method does not remove duplicates from the list, because it apparently doesn't work as expected with sublists (probably because `(1, 1, 10) === (1, 1, 10)` returns `False`).

[Jaldhar H. Vyas](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-030/jaldhar-h-vyas/perl6/ch-2.p6) also cleverly used only two nested `for` loops:

``` Perl6
my %results;
for (1 .. 10) -> $i {
    for (1 .. (12 - $i - 1)) -> $j {
        my $k = 12 - $i - $j;
        %results{($i, $j, $k).sort.join(q{ })}++;
    }
}
.say for %results.keys.sort;
```

[Roger Bell West](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-030/roger-bell-west/perl6/ch-2.p6) also used the same clever technique to have only two nested `for` loops:

``` Perl6
my $target=12;
for (0..$target) -> $a {
  for ($a..$target) -> $b {
    my $c=$target-$a-$b;
    if ($c>=$b) {
      say "$a $b $c";
    }
  }
}
```

[Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-030/ruben-westerberg/perl6/ch-2.p6) also managed to use only two nested `for` loops, but with a slightly different approach:

``` Perl6
my %s;
for (2,4,6,8,10) {
    my $e=$_;
    my $r=12-$e;
    for 1..$r-1 {
        my @val=sort($e,$_,$r-$_);
        %s{@val.join(",")}=@val if @val.sum ==12;
    }
}
for %s.keys.sort {
    put %s{$_}.join(",");
}
```

[Ozzy](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-030/ozzy/perl6/ch-2.p6) adopted yet another interpretation of the challenge: for him, all three numbers of a triplet have to be different. He used the `combinations` method to generate triplets of unique integers adding up to 12 (yielding `(0 4 8) (0 5 7) (1 3 8) (1 4 7) (1 5 6) (2 3 7) (2 4 6) (3 4 5)`) and then applied the `permutations` method on each triplet:

``` Perl6
say "Combinations: ", my @c = (^9).combinations(3).grep: { .sum == 12 && (.first: * %% 2).defined };
say "Permutations: ", my @p = gather { my @x; for @c -> $l { @x = $l.permutations; .take for @x } };
```

[Simon Proctor](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-030/simon-proctor/perl6/ch-2.p6) had the same interpretation as Ozzy and also used the `combinations` method to generate triplets of integers in strict ascending order adding up to 12:

``` Perl6
.join(",").say for (1..9).combinations(3).grep( { [<] $_ } ).grep( { 12 == [+] $_ } ).grep( { any($_) %% 2 } );
```

[Athanasius](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-030/athanasius/perl6/ch-2.p6) also went for monotonic ascending series of 3 positive numbers summing to 12. He used three nested `for` loops essentially boiling down to this:

``` Perl6
my UInt constant $SUM = 12;
for 0 .. $SUM -> UInt $i
{
    for $i .. $SUM -> UInt $j
    {
        my UInt $subtotal = $i + $j;

        for $j .. $SUM -> UInt $k
        {
            if $subtotal + $k == $SUM
            {
                "(%d, %d, %2d)\t".printf: $i, $j, $k;
            }
        }
    }
}
```

[Daniel Mita](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-030/daniel-mita/perl6/ch-2.p6) considered that (2 1 9) and (2 9 1) are different triplets. His solution uses the `[X]` cross operator and reduction meta-operator combination to produce the triplets and then prints those whose sum is 12:

``` Perl6
for [X] ( 1..10 ) xx 3 {
  .fmt('%2u', '|').say when .sum == 12;
}
```

[Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-030/joelle-maslak/perl6/ch-2.p6) used chained methods in a data pipeline to solve the problem:

``` Perl6
cross((1..9) xx 3)\             # Create a list where each element is a list of
                                #   3 numbers inclusively between 1 and 9.
    ».Set                       # Turn those elements into sets
    .grep( *.elems == 3 )       # Sets flatten duplicates, so we want to be sure
                                #   there are still 3 elements in the set.
    .unique                     # We will have duplicate sets, remove the dupes
    .map( *.keys.list )         # Turn the list back into a list
    .grep( *.sum == 12 )        # Do the set members add to 12?
    .map( *.sort )              # Sort the numbers in each set
    .map( *.join(",") )         # Make the sets into comma-deliminated strings
    .sort                       # Sort the sets of numbers
    .join("\n")                 # Build a string, seperating sets by newlines
    .say
```

[Markus Holzer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-030/markus-holzer/perl6/ch-2.p6) wrote his own `combinations` recursive subroutine generating all possible permutations of two integers in the range 1 to 10. He then used it together with the `X` cross operator to generate the triplets:

``` Perl6
.say for
    ( ( 2, 4 ... 10 ) X combinations( 1 .. 10, 2 ) )
    .map(  { .flat.cache  })
    .grep( { .sum == 12   })
    .map(  { .join(", ")  })
;
sub combinations( @combinatees, $places) { combinations( @combinatees, $places - 1 ) X @combinatees if $places > 0 }
```

I'm not sure Markus's program is correct, though. As an example of the possible issue, it displays both (2, 1, 9) and (2, 9, 1), so Markus presumably considers that these triplets are not duplicates, one of which having to be removed. But, if we take this interpretation, then I would expect to also get (9, 1, 2) and (9, 2, 1), but these two triplets are not in the output of his program.

[Ulrich Rieke](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-030/ulrich-rieke/perl6/ch-2.p6) use three nested `for` loops to generate the triplets:

``` Perl6
my @triples ;
for (1..10) -> $a {
  for (1..10) -> $b {
      for (1..10) -> $c {
    my @treble.push($a , $b , $c ) ;
    @treble .= sort ;
    @triples.push( @treble ) if ( (([+] @treble) == 12) &&
          (@treble.grep( { $_ %% 2 } ).elems > 0) ) ;
    }
  }
}
say @triples.unique(:with(&[eqv])) ;
```

[Yet Ebreo](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-030/yet-ebreo/perl6/ch-2.p6) wrote a very concise one-liner solution:

``` Perl6
$_.sum == 12 && .say for [X] (0 .. 12) xx 3;
```

## SEE ALSO

Only three blog posts this time (in addition to mine):

* Arne Sommer: https://perl6.eu/xmas-12.html;

* Roger Bell West: https://blog.firedrake.org/archive/2019/10/Perl_Weekly_Challenge_30.html;

* Jaldhar H. Vyas: https://www.braincells.com/perl/2019/10/perl_weekly_challenge_week_30.html.

## Wrapping up

Please let me know if I forgot any of the challengers or if you think my explanation of your code misses something important (send me an e-mail or just raise an issue against this GitHub page).
