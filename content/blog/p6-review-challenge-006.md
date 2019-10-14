---
title: "Laurent Rosenfeld Weekly Review: Challenge - 006"
date: 2019-10-13T00:00:00+00:00
description: "Laurent Rosenfeld Weekly Review: Challenge - #006."
type: post
image: images/blog/p6-review-challenge-006.jpg
author: Laurent Rosenfeld
tags: ["Perl6"]
---
***
# Perl6 Solutions Weekly Review
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

## SEE ALSO

Only one blog post (besides mine) this time, as far as I can say from Mohammad's recap and from his GitHub repository:

Arne Sommer: https://perl6.eu/int-erval.html.

## Wrapping up

Please let me know if I forgot any of the challengers or if you think my explanation of your code misses something important (send me an e-mail or just raise an issue against this GitHub page).

If you want to participate to the Perl Weekly Challenge, please connect to [this site](https://perlweeklychallenge.org/).
