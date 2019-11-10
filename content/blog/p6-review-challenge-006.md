---
title: "Laurent Rosenfeld Weekly Review: Challenge - 006"
date: 2019-10-13T00:00:00+00:00
description: "Laurent Rosenfeld Weekly Review: Challenge - #006."
type: post
image: images/blog/p6-review-challenge-006.jpg
author: Laurent Rosenfeld
tags: ["Raku"]
---
***
# Raku Solutions Weekly Review
***

## Task #1: Compact Number Ranges

This is derived in part from my [blog post](http://blogs.perl.org/users/laurent_r/2019/05/perl-weekly-challenge-6-compact-number-ranges.html) made in answer to the [Week 6 of the Perl Weekly Challenge](https://perlweeklychallenge.org/blog/perl-weekly-challenge-006/) organized by  <a href="http://blogs.perl.org/users/mohammad_s_anwar/">Mohammad S. Anwar</a> as well as answers made by others to the same challenge.

The challenge reads as follows:

*Create a script which takes a list of numbers from command line and print the same in the compact form. For example, if you pass “1,2,3,4,9,10,14,15,16” then it should print the compact form like “1-4,9,10,14-16”.*

In the input example provided with the question, the numbers are sorted in ascending order, but there is no reason to limit ourselves to such a case. The question is then the following: if the input is not in ascending order, are we supposed to keep the order provided and compact the sub-ranges, or are we supposed to reorder the numbers and compact the ranges over the sorted data? In other words, if the input data is "1,2,3,4,9,10,14,15,16,5,6,7", are we supposed to display:

    1-4,9,10,14-16,5-7

or:

    1-7,9,10,14-16?

I chose the first interpretation, but there wouldn't be much code to change to follow the second interpretation (for example, we could just sort the number list before we start)..

I will suppose that the input data is correct (i.e. a list of space-separated numbers) and not try to validate the input.

The Perl Weekly Challenge covers both Perl 5 and Perl 6. I truly love both languages and, over the 6+ months that the challenge has existed, I have always provided solutions in both languages. In the case of this challenge, I have worked on the Perl 5 solution before the Perl 6 solution, and there are a few things that I found on the problem when working on the P5 solution that I want to briefly report before showing my P6 solution.

First, my initial P5 solution worked correctly, but wasn't entirely compliant with the specification: when there are only two consecutive numbers (such as 9,10 in the examples above), the required output is "9,10" and my original P5 solution was producing "9-10." To me, this is also correct, but this does not fully satisfy the requirement. As it turned out, modifying the program to comply with the specification made the code significantly less natural and more complicated. I felt that the program was now a bit too complicated for such a simple task. In brief, I found that a bit clumsy.

So I tried a P5 recursive approach. The resulting program was slightly more concise, but only by a thin margin (and probably a bit less easy to understand). I also tried a functional programming approach, some form of a "lispy" data flow or data pipeline solution using chained `map` and `grep` routines, but wasn't able to come up with something that would truly look better.

Let's see what we can do in Perl 6.

## My Solutions

Initially, I did not see any way of doing this that would be very different from the P5 version.

This is a Perl 6 adaptation of the corrected P5 version:

``` Perl6
use v6;
sub compare ($prev, $start) {
    return $prev > $start + 1 ?? "$start-$prev"
        !! $prev > $start     ?? "$start,$prev"
        !! "$prev";
}

my @input = @*ARGS.elems > 0 ?? @*ARGS !! 1,2,3,4,9,10,14,15,16,3,4,5,6,4,5,6,7,9,9;
my $prev_val = my $start_val = shift @input;

my $output = "";
for @input -> $num {
    if ($num != $prev_val + 1) {
        $output ~= compare($prev_val, $start_val) ~ ",";
        $start_val = $num;
    }
    $prev_val = $num;
}
$output ~= compare $prev_val, $start_val;
say $output;
```

With no argument passed to the script, it uses the default array and prints out:

    $ perl6 num_range.p6
    1-4,9,10,14-16,3-6,4-7,9,9

Note that I also thought about using `given ... when` statements in the `compare` subroutine, but I ended up feeling that it made the code longer and less expressive for this kind of case. The `given ... when` "switch" statement is nice when implicitly using the smart match operator, for example to check the topic against a value, a regex or a type, but using it in a purely procedural fashion as it would be the case here gave me the unpleasant impression of going back in time by several decades and writing C, Pascal, or Ada code in Perl 6. It's probably just a personal bias.

The recursive approach in P6 would essentially look like the P5 recursive version, except for the fact that using dynamic scope variables might simplify the passing of arguments between successive recursive calls. Not very interesting.

Then I thought again about one of my pet subjects: why not try a functional programming approach? Perl 6 provides the `gather ... take` control flow statement, which can be thought as a generalized version of `map`, `grep`, and `return`: it is sort of a `map` in which you can also filter items (as in a `grep`), or sort of a `grep` in which you can also map various elements to something else. And you can return the data to the `gather` statement at the point you choose.

Here we go:

``` Perl6
use v6;
sub get($start, $prev) {
    take $prev > $start + 1 ?? "$start-$prev"
        !! $prev > $start     ?? "$start,$prev"
        !! "$prev";
}
my @input = @*ARGS.elems > 0 ?? |@*ARGS !! (1,2,3,4,9,10,14,15,16,3,4,5,6,4,5,6,7,9,10,11);
my $prev = my $start = shift @input;
my @result = gather {
    for @input -> $num {
        if $num != $prev + 1 {
            get $start, $prev;
            $start = $num;
        }
    $prev = $num;
    }
    get $start, $prev;
}
say @result.join(",");
```

That may not be perfect, but I'm much more satisfied with this than with all my previous versions, be it P5 or P6.

# Alternative Solutions

[Arne Sommer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-006/arne-sommer/perl6/ch-1.p6)'s main loop is as follows:

``` Perl6
while @values
{
  my $next = @values.shift;
  if $next == @current[* -1] + 1
  {
    @current.push($next);
  }
  else
  {
    @result.push(fix-it(@current));
    @current = $next;
  }
}
sub fix-it (@list)
{
  return @list[0]              if @list.elems == 1;
  return "@list[0],@list[1]"   if @list.elems == 2;
  return "@list[0]-@list[*-1]" if @list.elems  > 2;
}
```

[Jaldhar H. Vyas](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-006/jaldhar-h-vyas/perl6/ch-1.p6) made two nested `while` loops, which is unlikely to be optimal, but that probablly doesn't matter with a small or even medium input dataset:

``` Perl6
while ($current <= $lastelem) {
    $start = $current;

    while ($current < $lastelem &&
    @numbers[$current] + 1 == @numbers[$current + 1]) {
        $current++;
    }

    @ranges.push(do given (@numbers[$start], @numbers[$current]) {
        when $_[1] == $_[0]     { $_[0]; }
        when $_[1] == $_[0] + 1 { ($_[0], $_[1]); }
        default                 { "$_[0]-$_[1]"; }
    });

    $current++;
}
```

[Joelle Maslack](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-006/joelle-maslak/perl6/ch-1.p6) first sorted the input arguments, and then used a `for` loop to go through the values:

``` Perl6
for @*ARGS.sort( { $^a <=> $^b } ) -> Int() $num {
    if ! defined $run {
        $run = Pair.new($num, $num);
    } else {
        if $run.value == $num - 1 {
            $run = Pair.new($run.key, $num);
        } else {
            @runs.append($run);
            $run = Pair.new($num, $num);
        }
    }
    $run.freeze;
}
@runs.append($run) if defined $run;
```

Note that the Pair `freeze` method is now deprecated (as of 6.d language version), but it probably wasn't when Joelle wrote it several months ago. Instead, you may now create a new `Pair`, with a [decontainerized](https://docs.perl6.org/language/glossary#decont) key/value.

[Ozzy](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-006/ozzy/perl6/ch-1.p6) used two successive `for` loops to go through the input data:

``` Perl6
for @numbers -> $n {
    my $i = @output.elems;
    if $i == 0 || $n > @output[$i-1].max+1 { @output[$i] = Range.new($n.Int, $n.Int); }
    elsif $n == @output[$i-1].max+1 { @output[$i-1] = Range.new( @output[$i-1].min, $n.Int ); };
}


# Print the ranges from the @output array
for 0..(@output.elems-1) -> $i {

    FIRST { print 'Compact range representation: '; }

    if @output[$i].elems == 1 { print(@output[$i].min); }
    else { print(@output[$i].min, '-', @output[$i].max); }

    if $i < @output.elems-1 { print ', '; }
    else { say '.'; }
}
```

[Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-006/ruben-westerberg/perl6/ch-1.p6) first joined the input numbers into a CSV string, and immediately thereafter splitted the string on commas and stored the result in a bag (presumably to remove duplicates). I fail to see why this was necessary, as I have the feeling that he could have worked directly on the input numbers. This being said, Ruben's code is the most compact solution:

``` Perl6
my $string= @*ARGS ?? @*ARGS.join(",")!! prompt "Enter numbers: ";
my $a=$string.split(",",:skip-empty)>>.trim.grep({!/^$/})>>.Int.Bag;
my @r1=$a.keys.sort;
my @diff=@r1.rotate >>-<< @r1;
my @p=(0,|map {|($^k,$k+1) if abs($^v) > 1}, @diff.kv);
@p.pop;
say join ",", map {@r1[$^a]==@r1[$^b]??@r1[$^a]!!"@r1[$^a]-@r1[$^b]"}, @p;
```

I like very much concise solutions, but the downside here is that Ruben's solution may be a bit too terse and somewhat difficult to follow.

[Simon Proctor](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-006/simon-proctor/perl6/ch-1.p6) took an diametrically opposite approach and wrote a fairly  verbose (and somewhat over-engineered, IMHO) approach. Simon created a `GrowableRange` class, with five method definitions such as:
``` Perl6
    method next() { $!max + 1 }
    method grow() { $!max++; return self }
```
These methods basically do almost nothing and this is typically what I don't like very much with object-oriented programming pushed to the extreme. Anyone has the right to play with language features and have some fun using and even possibly abusing them (and I must confess that I also do that from time to time), but, frankly, this is kind of overkill, and, in my view, this is not really the Perl spirit.

[Tim Smith](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-006/tim-smith/perl6/ch-1.p6) provided a simple and easy to understand solution:

``` Perl6
my @vals = @*ARGS».comb(/\d+/).Seq.flat».Int.sort.unique
    or die "Usage: {$?FILE.IO.basename} 1 2,3 4/5/6 '7 8 9'";
my @groups;

for @vals -> $n {
    # Add a new group unless $n belongs in the current group
    unless @groups and @groups.tail[1] == $n - 1 {
        @groups.push: [$n, Nil];
    }
    # Update the endpoint of the current group
    @groups.tail[1] = $n;
}
# Display the groups
put @groups.map(*.unique.join('-')).join(',');
```
## Task #2: Ramanujan's Constant

This is derived in part from my [blog post](http://blogs.perl.org/users/laurent_r/2019/05/perl-weekly-challenge-6-ramanujans-constant.html) made in answer to the [Week 06 of the Perl Weekly Challenge](https://perlweeklychallenge.org/blog/perl-weekly-challenge-006/) organized by  <a href="http://blogs.perl.org/users/mohammad_s_anwar/">Mohammad S. Anwar</a> as well as answers made by others to the same challenge.

The challenge reads as follows:

*Create a script to calculate Ramanujan’s constant with at least 32 digits of precision. Find out more about it here (Wikipedia link).*

## My Solutions

The Wikipedia link provided in the question concerning this challenge was apparently changed some time after the challenge was initially posted.

The original link, posted on Monday, April 29, 2019, was pointing to the [Landau-Ramanujan Constant](https://en.wikipedia.org/wiki/Landau%E2%80%93Ramanujan_constant), which relates to the sum of two squares theorem.

Then, two days later, on May 1, 2019, I noticed that the link had changed and pointed towards this other [Wikipedia page about Ramanujan's constant](https://en.wikipedia.org/wiki/Heegner_number#Almost_integers_and_Ramanujan's_constant), which refers to irrational (well, in this case, actually transcendental) numbers that almost look like integers.

I guess that my good friend Mohammad Anwar got carried away when writing the challenge because it related to one of his most famous fellow citizens, Indian mathematician [Srinivasa Ramanujan (1887-1920)](https://en.wikipedia.org/wiki/Srinivasa_Ramanujan). If you've never heard about Ramanujan or don't know much about him, please visit the Wikipedia article just mentioned and search further on the Internet; he is, despite a limited access to other mathematicians of the time for a large part of his very short life, one of the greatest mathematicians of the early twentieth century.

Here, I'll cover only the updated challenge, please refer to my other blog post linked above if you want to find out more about the Landau-Ramanujan Constant.


What has become known as the Ramanujan Constant in the recent period is a number that is an "almost integer" and has in fact little to do with mathematician Srinivasa Ramanujan.

This number is the following one:

![](/images/Ramanujan_3.gif)

As you can see, there are twelve 9 digits after the decimal point, so that this number, which is built from a formula involving exponentials on one algebraic and two transcendental numbers, almost looks like an integer (when rounded to less than 12 digits after the decimal point).

The number in question had been discovered by mathematician Charles Hermitte in 1859, more than 25 years before Ramanujan’s birth.

The reason why it has become known as Ramanujan’s constant is that, in 1975, "recreational mathematics" columnist Martin Gardner published in *Scientific American* an April fool article where he claimed that said number, calculated from algebraic and transcendental numbers, was in fact an integer, and further claimed that Ramanujan has already discovered that in the early twentieth century. This was just a joke, as this number is transcendental, but is an impressively close approximation of an integer. At the time, computers were not able to compute this number with enough accuracy to disprove Gardner's assertion. Following that, people have started to call this number Ramanujan’s constant (Ramanujan worked on a number of similar numbers and probably also on this one, but there is no evidence that he discovered anything significantly new on that specific number).

The [Wikipedia page on Ramanujan's constant](https://en.wikipedia.org/wiki/Heegner_number#Almost_integers_and_Ramanujan's_constant) and the formula given earlier in this post show that the integer part of this constant is equal to `640_320 ** 3 + 744` (i.e. 262537412640768744). The Wikipedia article further explains that the difference between this number and Ramanujan's constant is given by:

![](/images/Ramanujan_4.gif)

So we just need to apply this approximate formula. Let's do it under the Rakudo REPL:

    > my $a = 640_320 ** 3 + 744; # $a is the integer approximation of R's constant
    262537412640768744
    > my $r-constant = $a - 196844 / $a;
    262537412640768743.999999999999250225
    > say $r-constant.fmt("%.33s");
    262537412640768743.99999999999925

Note that we are a bit lucky: the value obtained for `$r-constant` has an accuracy of 33 digits, and we only need 32. Using the `FatRat` type (instead of the implicit `Rat` type used above) does not improve accuracy, it is the math formula that is an approximation of Ramanujan’s constant.

## Alternative Solutions

Only five challengers contributed to this challenge (in addition to me).

[Arne Sommer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-006/arne-sommer/perl6/ch-2.p6) suggested the following program:

``` Perl6
sub FatRatRoot (Int $int where $int > 0, :$precision = 10)
{
  my @x =
    FatRat.new(1, 1),
    -> $x { $x - ($x ** 2 - $int) / (2 * $x) } ... *;

  return @x[$precision];
}
say $e ** ($pi * FatRatRoot(163));
```

I wasn't able to run it, because `$e` and `$pi` are not declared. Changing the last code line to this:

``` Perl6
say e ** (pi * FatRatRoot(163));
```
makes the program runnable, but still doesn't really produce any result with a 32-digit accuracy:

    2.625374126407677e+17

[Jaldhar H. Vyas](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-006/jaldhar-h-vyas/perl6/ch-2.p6) started by trying essentially the same formula as the one just above:

``` Perl6
constant RAMANUJAN = 𝑒 ** (π * sqrt(163));
```
but found out that doesn't work and produces the same floating point approximation as Arne's program above. So Jaldhar admits that he decided to cheat a little bit and reuse his Perl 5 program:

``` Perl6
shell('../perl5/ch-2.pl');
```

[Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-006/joelle-maslak/perl6/ch-2.p6) used the same approximation formula as my solution and also obtained 33 accurate digits (262537412640768743.999999999999250):

``` Perl6
say (640320³ + 744 - 196844.FatRat/(640320³ + 744)).Str.substr(0,34);
```

[Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-006/ruben-westerberg/perl6/ch-2.p6) implemented a `FatRat` factorial subroutine, a `FatRat` square root subroutine using the Newton-Raphson method, and a `FatRat` Taylor series exponential subroutine, and also hard-coded pi to 100 digits. Having done all this, he was able to write a version the original formula producing an accurate result:

``` Perl6
my $bigPi=FatRat.new(31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679,10**100);

sub factorial($n) {
    constant @f= (1.FatRat, |[\*] 1.FatRat..*);
    @f[$n];
}
sub taylor-e ($atVal) {

    my $sum=0.FatRat;
    my $x=$atVal.FatRat;
    for 0..200 {
         $sum+=($x**$_)/factorial($_);
         say "Iteration $_: " ~ $sum.Str.substr(0,50);
    }
    $sum;
}

sub newton-sqrt($val, $target, $repeat){
    my $guess=$val.FatRat;
    for ^$repeat {
        $guess:=($guess - ($guess**2 -$target)/(2*$guess));
    }
    $guess;
}
say taylor-e($bigPi*newton-sqrt(10,163,6)).Str.substr(0,50);
```

which produces the right result after slightly more than 130 iterations:

    Iteration 132: 262537412640768743.9999999999990867965865161656471
    Iteration 133: 262537412640768743.9999999999992013528229697101850
    Iteration 134: 262537412640768743.9999999999992356420435776175716
    Iteration 135: 262537412640768743.9999999999992458295411941064733
    Iteration 136: 262537412640768743.9999999999992488340417359006698
    Iteration 137: 262537412640768743.9999999999992497136623415158025
    Iteration 138: 262537412640768743.9999999999992499693206922282684
    Iteration 139: 262537412640768743.9999999999992500430922335835121
    Iteration 140: 262537412640768743.9999999999992500642273428172645

[Tim Smith](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-006/tim-smith/perl6/ch-2.p6) used the same approximation as Joelle Maslak and myself:

``` Perl6

# Ramanujan's constant is _almost_ this integer ...
my $r = 640_320 ** 3 + 744;

# But is off by an error which is defined in terms of the constant itself,
# so this approximation is close enough for at least 32 significant digits.
$r += FatRat.new: -196_844, $r;

put substr($r, 0, 33);
```
## SEE ALSO

Only one blog post (besides mine) this time, as far as I can say from Mohammad's recap and from his GitHub repository:

Arne Sommer: https://perl6.eu/int-erval.html.

## Wrapping up

Please let me know if I forgot any of the challengers or if you think my explanation of your code misses something important (send me an e-mail or just raise an issue against this GitHub page).

If you want to participate to the Perl Weekly Challenge, please connect to [this site](https://perlweeklychallenge.org/).
