---
title: "Laurent Rosenfeld Weekly Review: Challenge - 058"
date: 2020-07-06T00:00:00+00:00
description: "Laurent Rosenfeld Weekly Review: Challenge - #058."
type: post
image: images/blog/p6-review-challenge-058.jpg
author: Laurent Rosenfeld
tags: ["Raku"]
---
***
# Raku Solutions Weekly Review
***

## Task #2: Ordered Lineup

This is derived in part from my [blog post](http://blogs.perl.org/users/laurent_r/2020/05/-perl-weekly-challenge-58-compare-versions-and-ordered-lineup.html) made in answer to the [Week 58 of the Perl Weekly Challenge](https://perlweeklychallenge.org/blog/perl-weekly-challenge-058/) organized by  <a href="http://blogs.perl.org/users/mohammad_s_anwar/">Mohammad S. Anwar</a> as well as answers made by others to the same challenge.

The challenge reads as follows:

*Write a script to arrange people in a lineup according to how many taller people are in front of each person in line. You are given two arrays. @H is a list of unique heights, in any order. @T is a list of how many taller people are to be put in front of the corresponding person in @H. The output is the final ordering of people’s heights, or an error if there is no solution.*

*Here is a small example:*

    @H = (2, 6, 4, 5, 1, 3) # Heights
    @T = (1, 0, 2, 0, 1, 2) # Number of taller people in front

*The ordering of both arrays lines up, so H[i] and T[i] refer to the same person. For example, there are 2 taller people in front of the person with height 4, and there is 1 person in front of the person with height 1.*

*Here is a diagram of the input arrays @H and @T:*

![](./Figures/ordered_line_1.svg)

*Finally, here is one possible solution that satisfies @H and @T:*

![](./Figures/ordered_line_2.svg)

*As per the last diagram, your script would then output the ordering (5, 1, 2, 6, 3, 4) in this case. (The leftmost element is the “front” of the array.)*

*Here’s a 64-person example, with answer provided:*

    # Heights
    @H = (27, 21, 37,  4, 19, 52, 23, 64,  1,  7, 51, 17, 24, 50,  3,  2,
          34, 40, 47, 20,  8, 56, 14, 16, 42, 38, 62, 53, 31, 41, 55, 59,
          48, 12, 32, 61,  9, 60, 46, 26, 58, 25, 15, 36, 11, 44, 63, 28,
           5, 54, 10, 49, 57, 30, 29, 22, 35, 39, 45, 43, 18,  6, 13, 33);

    # Number taller people in front
    @T = ( 6, 41,  1, 49, 38, 12,  1,  0, 58, 47,  4, 17, 26,  1, 61, 12,
          29,  3,  4, 11, 45,  1, 32,  5,  9, 19,  1,  4, 28, 12,  2,  2,
          13, 18, 19,  3,  4,  1, 10, 16,  4,  3, 29,  5, 49,  1,  1, 24,
           2,  1, 38,  7,  7, 14, 35, 25,  0,  5,  4, 19, 10, 13,  4, 12);

    # Expected answer
    @A = (35, 23,  5, 64, 37,  9, 13, 25, 16, 44, 50, 40,  2, 27, 36,  6,
          18, 54, 20, 39, 56, 45, 12, 47, 17, 33, 55, 30, 26, 51, 42, 53,
          49, 41, 32, 15, 22, 60, 14, 46, 24, 59, 10, 28, 62, 38, 58, 63,
           8, 48,  4,  7, 31, 19, 61, 43, 57, 11,  1, 34, 21, 52, 29,  3);

*You’re free to come up with your own inputs. Here is a [1000-person list](https://ry.ca/wp-content/uploads/2020/04/pwc_058_1000.txt), if you like!*

At first, it took me a while to really understand the task. Once I understood the requirement, my first reaction was that this was going to be a quite complicated problem, with a large brute force program and possibly a lot of backtracking.

## Designing the Algorithm by Hand

To get a better idea of the task, I settled to solve the small example by hand. I found out relatively quickly that the solution can be constructed iteratively quite easily.

We have this:

    @H = (2, 6, 4, 5, 1, 3) # Heights
    @T = (1, 0, 2, 0, 1, 2) # Number of taller people in front

Let's pick up the smallest height, 1. We know that there is one taller person before and, since we are dealing with the smallest one, there cannot be a smaller person before. Therefore, the person with height 1 can only be in the second position (with index 1 in an array). So our resulting array would be, at this point:

    (undef, 1)

Next, we take the second smallest, 2, which also has one taller person before. The starting idea would be to put that person in the second position, but it is already occupied by 1. We can just put that person in the next free slot, the third position. There will be a taller item in the first position and there is also a smaller item, 1, before it. So, it's fine for now:

    (undef, 1, 2)

The next smallest person is 3, and has two taller ones before. We can initially try to put in in the third position, but it's occupied by the 2. If we try to put it in the next position (the fourth one), it would still not work, because there would be only one slot available for a taller person. But we can place this person in the fifth position, so that we have two slots available for taller persons, and we know there cannot be any other smaller person, since all smaller persons have already been placed. So, for now, we have:

    (undef, 1, 2, undef, 3)

Using the same reasoning iteratively, we can place each person so:

    (undef, 1, 2, undef, 3, 4)
    (5, 1, 2, undef, 3, 4)
    (5, 1, 2, 6, 3, 4)

It clearly appears that there is at most only one solution, since each time through the process there was only one way to place a person. Assuming all heights are unique, we can conclude that for any such problem, there can be only one or zero solution.

## Implementing the algorithm

Once we have the algorithm, implementing it is fairly easy. The first thing we want to do is to make the link between the height and the number of taller people before in the line more robust than two parallel arrays. This is what we do with the `%mapping` hash. Then we pick each height in ascending order and place it in the `@result` array in accordance with the rules described above. At the end of the process, each slot of the array should be populated if there was a solution to the problem. If the problem had no solution, then some of the values in the array should be undefined. So we can just check that: if all values are defined, we just display the array; if there is one or more undefined values, then we print that the problem has no solution.

``` Perl 6
use v6;

# Heights
my @H = < 27 21 37 4 19 52 23 64 1 7 51 17 24 50 3 2
        34 40 47 20 8 56 14 16 42 38 62 53 31 41 55 59
        48 12 32 61 9 60 46 26 58 25 15 36 11 44 63 28
        5 54 10 49 57 30 29 22 35 39 45 43 18 6 13 33 >;

# Number taller people in front
my @T = < 6 41 1 49 38 12 1 0 58 47 4 17 26 1 61 12
        29 3 4 11 45 1 32 5 9 19 1 4 28 12 2 2
        13 18 19 3 4 1 10 16 4 3 29 5 49 1 1 24
        2 1 38 7 7 14 35 25 0 5 4 19 10 13 4 12 >;

# mapping sizes to number of taller people before
my %mapping;
%mapping{@H} = @T;

my @result;
for @H.sort -> $height {
    my $rank = %mapping{$height};
    my $i = 0;
    $rank++ if defined @result[$i++] while $i <= $rank;
    @result[$rank] = $height;
}
say 0 == (grep { ! defined $_ }, @result).elems ?? "@result[]" !! "No solution!";
```

We obtain the following output:

    $ perl6 ordered_line.p6
    35 23 5 64 37 9 13 25 16 44 50 40 2 27 36 6 18 54 20 39 56 45 12 47 17 33 55 30 26 51 42 53 49 41 32 15 22 60 14 46 24 59 10 28 62 38 58 63 8 48 4 7 31 19 61 43 57 11 1 34 21 52 29 3

## Alternative Solutions

[Luca Ferrari](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-058/luca-ferrari/raku/ch-2.p6) wrote a brute force solution generating all permutations of the original heights array and checking for each of them whether the number of taller people matches the taller people array.

``` Perl 6
sub MAIN(){
    my @H = 2, 6, 4, 5, 1, 3;
    my @T = 1, 0, 2, 0, 1, 2;


    # build an hash to map heights to tallers
    my %HT;
    for 0 ..^ @H.elems {
        %HT{ @H[ $_ ] } = @T[ $_ ];
    }


    # evaluate all possible solutions
    for %HT.keys.permutations -> @solution {
        # the leftmost element must have a taller set to zero!
        next if %HT{ @solution[ 0 ] } != 0;

        # the solution is good if the number of tallers for
        # every element is equal to the values of tallers
        my $ok = True;

        for 1 ..^ @solution.elems {
            my $height  = @solution[ $_ ];
            my $tallers = %HT{ $height };
            $ok = False if @solution[ 0 .. $_-1].grep( * > $height ) != $tallers;
            last if ! $ok;
        }

        say @solution if $ok;
    }
}
```

Luca's solution is certainly OK for a 6-item array, but I'm afraid it might encounter severe performance problems for significantly larger arrays.

[Shahed Nooshmand](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-058/shahed-nooshmand/raku/ch-2.p6) wrote an impressively concise program to solve the task:

``` Perl 6
my @H = (2, 6, 4, 5, 1, 3);
my @T = (1, 0, 2, 0, 1, 2);
my @Q;
@Q.splice: .value, 0, .key for (@H Z=> @T).sort: -*.key;
print @Q;
```

Contrary to mine, Shahed's program visits the heights in descending order. This is how Shahed describes his solution: "If we go from tallest to shortest, and each time insert the person who’s supposed to be behind *t* people at index *t* (starting with 0, of course) we have our answer.".

[Simon Proctor](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-058/simon-proctor/raku/ch-2.p6) used essentially the same algorithm as mine, but in a more clever and more concise form:

``` Perl 6
multi sub MAIN (
    Str $data where *.IO.f #= list of comma seperated heights and expected number before
) {
    my @heights = $data.IO.lines[0].split(",").map( *.Int );
    my @higher = $data.IO.lines[1].split(",").map( *.Int );

    say "Heights      {@heights}";
    say "Requirements {@higher}";

    my @combined = (@heights Z @higher).sort;
    my @final;
    my @indexes = ^@combined.elems;

    for @combined -> ( $height, $pos ) {
        @final[@indexes.splice( $pos, 1 )] = $height;
    }

    say "Final List   {@final}";
}
```

To understand what's going on, let's unroll the loop for the small example in the task description:

    @heights = (2, 6, 4, 5, 1, 3)
    @higher = (1, 0, 2, 0, 1, 2)

The `combined` array items are lists containing each the height of one person and the number of taller people before that person, sorted in ascending order:

    [(1 1) (2 1) (3 2) (4 2) (5 0) (6 0)]

The first time through the loop, the input is `(1, 1)`, and the height (1) will be placed at position `@indexes.splice( $pos, 1 )`, i.e. 1 (second slot) in the `@final` array.

After that, the `@index` array is : `[0 2 3 4 5]`. The input for the next time through the loop is `(2, 1)`, and the height (2) will be placed as position `@indexes.splice( $pos, 1 )`, i.e. 2.

Let's put these two steps in a tabular form and continue unrolling the loops:

    Input    @index         height   position
    (1, 1)   [0 1 2 3 4 5]    1         1
    (2, 1)   [0 2 3 4 5]      2         2
    (3, 2)   [0 3 4 5]        3         4
    (4, 2)   [0 3 5]          4         5
    (5, 0)   [0 3]            5         0
    (6, 0)   [3]              6         3

And the final result is: `(5, 1, 2, 6, 3, 4)`.

[Arne Sommer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-058/arne-sommer/raku/ch-2.p6) used a `Lineup` class to represent an individual, with attributes for the individual heights and the number of taller people placed before in the line. Arne decided to sort the people in descending order. The program takes the tallest person and initially inserts it at the first position in the `@result` array. Then still using the example in the task description, the next (second tallest) person has no taller person; this person will be places at the first position ad the tallest person moved to the right by one position. The third person has two taller persons before, so will be placed to the right of the two persons already placed. The fourth person has one taller person and will be placed in the second position, with two persons being moved to the right. Finally, the last (smallest) person has one taller person before and will thus be placed in the second position, and all persons from the second position on will be shifted to the right.


``` Perl6
unit sub MAIN (:$H, :$T, :$A = "", :$verbose, :$verbose2);

my @H = $H.words>>.Int;
my @T = $T.words>>.Int;
my @A = $A.words>>.Int;

# die "Repeated heights" if @H.repeated;
die "H and T have different sizes" if @H.elems != @T.elems;
die "A have different size than H and T" if @A && @A.elems != @H.elems;

class Lineup
{
  has Int $.height;
  has Int $.taller;
}

my @list;

for ^@H -> $index
{
  @list.push: Lineup.new(height => @H[$index], taller => @T[$index]);
}

my @result;

for @list.sort({ $^b.height <=> $^a.height }) -> $elem
{
  my $taller = $elem.taller;
  say ": H:{ $elem.height } -> T:{ $elem.taller }" if $verbose;
  if (@result[$taller].defined)
  {
    @result.splice($taller, 1, $elem, @result[$taller]);
  }
  else
  {
    die "Not enough taller persons in front of { $elem.height }: { @result.elems } (should have been $taller)"
      if  @result.elems != $taller;
    @result.push: $elem;
  }
}
say ": " ~ @result.raku if $verbose;
say @result>>.height.join(", ");
say @result.map({ ": " ~ ++$ ~ ": " ~ $_.height ~ "[<" ~ $_.taller ~ "]"}).join("\n") if $verbose2;
say @result>>.height eqv @A if @A;
```

[Colin Crain](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-058/colin-crain/raku/ch-2.p6) used a method similar to Arne's. He sorted the individuals by heights (tallest to shortest) after having preserved the association between heights and the required number of taller people in front in a hash  Then he proceeded down this line starting with the tallest, moving each person in turn to the new index determined by the hash. Colin's solution is remarkably simple.

``` Perl6
my %in_front;
%in_front{@heights} = @taller_than;

my @ordered_lineup = @heights.sort: {$^b <=> $^a} ;

## iterate through the indices
for ^@heights.elems -> $idx {

    ## if the sort requires more people in front than are in fact taller, the group cannot be sorted
    if %in_front{@ordered_lineup[$idx]} > $idx { die "there is no solution to this problem!"}

    ## find the position to reinsert the person
    my $insert_index = %in_front{@ordered_lineup[$idx]};
    next if $idx == $insert_index;                          ## nop and jump

    ## remove the person from this index and reinsert at the new index
    splice(@ordered_lineup, $insert_index, 0, ( splice(@ordered_lineup, $idx, 1) ) );
}

## pretty print as 16 columns
.fmt("%2d", ", ").say for @ordered_lineup.rotor(16);
```

Colin’s program starts with a fairly long comment explaining how he designed his solution. Please follow the link if you need further explanations.

[Javier Luque](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-058/javier-luque/raku/ch-2.p6) sorted the individuals from the shortest to the tallest and then placed the people using a reasoning very similar to what I described for my solution.

``` Perl6
my %data;
for ^@H.elems -> $i {
    %data{@H[$i]} = @T[$i];
}

# Sort the height
@H = @H.sort;

# Process answers
my @answers;
for (@H) -> $h {
    my $index = %data{$h};
    loop (my $i = 0; $i <= $index; $i++) {
    	$index++ if (@answers[$i]);
    }
    @answers[$index] = $h;
}

say @answers.perl;
```

[Mark Anderson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-058/mark-anderson/raku/ch-2.p6) designed a remarkably concise solution:

``` Perl6
my @Z = (@H Z @T).sort;
my @Ans;
while @Z.pop -> ($h, $t) {
    @Ans.splice($t, 0, $h);
}
say @Ans.rotor(10)>>.fmt("%-4d").join("\n");
```

[Mohammad Anwar](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-058/mohammad-anwar/raku/ch-2.p6) first created a hash to preserve the association between heights and the required number of taller people in front, then sorted the hash by heights (from tallest to smallest), and then computed the proper place for each individual with a `while` loop:

``` Perl6
sub order-lineup($args) {

    my @H = $args.{'H'}.<>;
    my @T = $args.{'T'}.<>;

    my %H-T = ();
    for 0 .. @H.elems-1 -> $i {
        %H-T{@H[$i]} = @T[$i];
    }

    my $O = [];
    for %H-T.sort(*.keys).reverse -> $r {
        my $h = $r.kv[0];
        my $t = $r.kv[1];

        my $i = 0;
        my $j = 0;
        while $t > $j {
            $j++ if $O.[$i] > $h;
            $i++;
        }

        $O.splice: $i, 0, $h.Int;
    }

    return $O;
}
```

***

## SEE ALSO

Five blog posts on the subject:

* Luca Ferrari: https://fluca1978.github.io/2020/04/27/PerlWeeklyChallenge58.html#task2;

* Shahed Nooshmand: https://rafraichisso.ir/2020/04/30/pwc-58;

* Arne Sommer: https://raku-musings.com/compared-lineup.html;

* Javie Luque: https://perlchallenges.wordpress.com/2020/04/27/perl-weekly-challenge-058/;

* Mohammad S. Anwar: https://perlweeklychallenge.org/blog/weekly-challenge-058.

## Wrapping up

Please let me know if I forgot any of the challengers or if you think my explanation of your code misses something important (send me an e-mail or just raise an issue against this GitHub page).

If you want to participate to the Perl Weekly Challenge, please connect to [this site](https://perlweeklychallenge.org/).
