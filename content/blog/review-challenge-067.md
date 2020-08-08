---
author:       Colin Crain
date:         2020-07-13T00:00:00
description:  "Colin Crain › Perl Weekly Review #067"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #067"
image:        images/blog/p5-review-challenge-067.jpg
type:         post
---

Continues from [previous week](/blog/review-challenge-066/).

Welcome to the Perl review for Week 067 of the Weekly Challenge! For a quick overview, go through the [original tasks](/blog/perl-weekly-challenge-067/) and [recap](/blog/recap-challenge-067/) of the weekly challenge.

## Getting in Touch

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Email me (Colin) with any feedback about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

We'd greatly appreciate any feedback you'd like to give.

## [BLOGS](#blogs)

***

# TASK #1 › Number Combinations

You are given two integers $max and $elems. Write a script print all
possible combinations of $elems numbers from the list 1 2 3 … $max.

Every combination should be sorted i.e. [2,3] is a valid combination but [3,2] is not.

Example:
  Input: $max = 5, $elems = 2

  Output: [ [1,2], [1,3], [1,4], [1,5], [2,3], [2,4], [2,5], [3,4], [3,5], [4,5] ]

***

## Solutions Types

## use a MODULE

By far the simplest and fastest way to go about this challenge is to use a module to compute the combinations and offload the heavy lifting. Universally, that module was the excellent Algorithm::Combinatorics with its combinations() routine. Given a list and a value, it will return combinations of that length pulled from the list. If the list is ordered, the combinations will retain that order.

[**Leo Manfredi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/manfredi/perl/ch-1.pl) handles it succinctly:

```perl
    use Algorithm::Combinatorics qw(combinations);

    my $m = 5;
    my $n = 2;

    my @c = combinations( [1..$m], $n);
    print "@$_\n" for @c;

```

This approach was also taken by
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/arne-sommer/perl/ch-1.pl),
[**Javier Luque**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/javier-luque/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/ulrich-rieke/perl/ch-1.pl),
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/walt-mankowski/perl/ch-1.pl),
[**Wanderdoc**](#WANDERDOC1), and
[**Yet Ebreo**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/yet-ebreo/perl/ch-1.pl)

## write a RECURSIVE routine

Recursion is an excellent choice for providing a loop over a process when you really have no idea exactly how many times you will need to repeat it, only how to recognize when it's done. For this challenge a generalized solution was to take a set of arrays holding a single digit element, then process each of those arrays as a base, making for each a set of new arrays combined with a second element, then for each of *those* arrays making a set with permissable third elements, etc, etc. The puzzle then became to decide which elements were valid to add at each progression.

It turns out there were as many ways to approach this as people to apply it.

I'll do my best to summarize the different methods taken, and let the routines demonstrate the range:

### [**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/dave-jacoby/perl/ch-1.pl)

thank you dave for commenting your code!

wantarray is your friend.

outputs string combos, which brings up to digit question and summery existential crisis

### [**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/duncan-c-white/perl/ch-1.pl)

Duncan uses a ```for()``` loop inside a recursion to append from the computed proper range of numbers as elements are added. With each element added the value for n is decreased by one. which serves as a counter. When ```n == 1``` the edge case is reached and the completed list of lists is returned; the recursion backtracks to the next partial combination and the cycle continues.

```perl
fun combinations( $lo, $hi, $n, @pre )    # @pre is a list of numbers
{
    my @l;            # list of lists
    foreach my $i ($lo..$hi-$n+1)
    {
        my @y = @pre;
        push @y, $i;
        push @l, $n==1 ?
            [ @y ] :
            combinations( $i+1, $hi, $n-1, @y );
    }
    return @l;
}
```

### [**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/e-choroba/perl/ch-1.pl)

Choroba uses two nested map functions and a recursive routine that shrinks the size of the requested array by one on each calling. The routine descends, reducing the length by one at every calling, until the size is one, when it produces one array for
each value 1 to *m*. Returning the arrays, the outer map maps the inner map, which in turn produces new arrays built by appending a value from the range above the last value of the existing combination. The top limit for a specific value is cleverly enacted by the fact that the inner range becomes invalid, and the mapping produces nothing, so that combination dies off.

The algorithm descends until the edge case, when length equals 1, stops the recursion, and the action, the assigning the next position on the lists, is done by the mappings on the return values as the recursion unwinds to the base state.

```perl
sub combinations {
    my ($max, $size) = @_;
    if ($size == 1) {
        return map [$_], 1 .. $max
    } else {
        return map {
            my @c = @$_;
            map [@c, $_], $c[-1] + 1 .. $max
        } combinations($max, $size - 1)
    }
}
```

### [**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/jo-37/perl/ch-1.pl)

In very similar workings to the solution by Choroba, Jorg gives us a routine that immediately descends until the edge case is met, and does the work of adding elements to his combinations by processing the return values as the layers unwind. He even names his subroutine 'ascend' in reference to this mode of action. That double map trick is wonderful and I'll need to add it to my arsenal.

```perl
sub ascend {
    my ($to, $length, $from) = @_;
    $from //= 1;

    return if $to - $from + 1 < $length || $from > $to || $length < 1;

    [map {my $i = $_;
        $length == 1 ? [$i] :
        map [$i, @$_], @{ascend $to, $length - 1, $i + 1}
    } ($from .. $to - $length + 1)];
}
```

### [**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/jaldhar-h-vyas/perl/ch-1.pl)

Jaldhar's solution uses the condition of a C-style loop to select indices of a passed-in value list that are above a given element. On recursion the function is given an array slice of the tail for the input from a given value onward, and new elements are prepended to make the combinations. When the length of the list options reaches 0, the loop condition fails and recursion stops.

```perl
sub combinations {
    my @list = @{$_[0]};
    my $length = $_[1];
    if ($length <= 1) {
        return map [$_], @list;
    }

    my @combos;
    for (my $i = 0; $i + $length <= scalar @list; $i++) {
        my $val  = $list[$i];
        my @rest = @list[$i + 1 .. $#list];
        for my $c (combinations(\@rest, $length - 1)) {
            push @combos, [$val, @{$c}] ;
        }
    }
    return @combos;
}
```

Jaldhar goes into more detail on his blog, both for [this week](https://www.braincells.com/perl/2020/07/perl_weekly_challenge_week_67.html), and [from week 38](https://www.braincells.com/perl/2020/02/perl_weekly_challenge_week_38.html) where he first used this `combinations()` routine.

### [**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/laurent-rosenfeld/perl/ch-1.pl)

Laurent starts by passing his routine the complete list of permissable values 1 through $n, then on each recursion passes a slice of that list minus the head element. Thus the number of options is reduced by one for each digit added. The routine contains a loop that goes through the list of options, creating a new list for every new combination; values not greater than the previous element are excluded. If the new tuples have the right length, they are printed and the loop short-circuited before recursion, which serves as the edge case.

```perl
sub combinations {
    my ($out, @in) = @_;
    return unless @in;
    for my $digit (@in) {
        next if defined $out->[-1] and $digit <= $out->[-1];
        my $new_out = [ @$out, $digit ];
        say "@$new_out" and next if scalar @$new_out == $num;
        combinations($new_out, @in[1..$#in]);
    }
}
```

you can read more on his solution on his [blog](http://blogs.perl.org/users/laurent_r/2020/07/perl-weekly-challenge-67-number-combinations-and-letter-phone.html):

### [**Simon Miner**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/simon-miner/perl/ch-1.pl)

Simon follows the pattern of recursion diminishing the length n by 1 until the edge case where n == 0, but then finds his own way, building up the combinations from the *final* element, adding permissable digits in front of those already used.

```perl
my @combinations = get_combinations( 1, $m, $n - 1 );
sub get_combinations {
    my ( $min, $m, $n ) = @_;
    my @combinations = ();
    if ( $n ) {
        for my $i ( $min .. ( $m - 1 )) {
            for my $combo ( get_combinations( $i + 1, $m, $n - 1 ) ) {
                push( @combinations, $i . $combo );
            }
        }
    } else {
        @combinations = ( $min .. $m );
    }
    return @combinations;
}
```


[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/colin-crain/perl/ch-1.pl)

Rather than look up an algorithm, I decided to roll my own, and came up with a routine that adds new elements to a set of existing lists according to a defined range of values. These values are dependent on both the position of the element in the combination and the value of the element that proceeds it. The low end, or start value, is one more than the previous element, or 1 for the first position. For the high end of the range, that number must be low enough that the combination can still count up to completion. For the example of a three element combination of the numbers 1 through 5, a value of 5 in the first position would not be valid because there is no headroom left for the second element to be larger. It works out that the maximum value for a given position is the list maximum *m*, minus the number of elements *n* (so the last elements can increase up to the max), plus the position from the front of the list counting from 1 (so our restriction diminishes as we approach the end). On each pass the routine processes the entire set of combinations, creating a new set with the new elements added, and the recursion stops when the correct length is reached.

```perl
sub add_elements {
    my ($max, $elems, $list) = @_;
    return $list if $list->[0]->@* == $elems;

    my @newlist = ();
    my $pos = $list->[0]->@* + 1;          ## this position, elems of prev list + 1
    for my $combo ( $list->@* ) {
        my $prev  = $combo->[-1] // 0;
        my $start = $prev + 1;             ## value of last elem in list + 1
        my $end   = $max - $elems + $pos;  ## max - length + position
        for ($start .. $end ) {
            push @newlist, [ $combo->@*, $_ ]
        }
    }
    return add_elements( $max, $elems, \@newlist);
}
```

Interested parties can  [read a more in-depth] analysis(https://colincrain.wordpress.com/2020/07/06/combos-convos-and-cellphones/) of the problem and how I got there.

## UNIQUE approaches and other THINGS THAT CAUGHT MY EYE

### [**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/athanasius/perl/ch-1.pl)

The monk Athanasius brings us an interesting module and imported routine to take care of the iterating part of his solution,  [```Algorithm::Loops qw(NestedLoops)```](https://metacpan.org/pod/Algorithm::Loops#NestedLoops1).

Calling this routine looks a bit unusual:

```perl
NestedLoops
(
    [
        [ 1 .. $m ],                                # Outer loop
        (sub { [ $_ + 1 .. $m ] }) x ($n - 1),      # Inner loops
    ],

    sub                                             # Record one combination
    {
        push @combs, sprintf '[%s]', join ',', @_;
    },
);

```

but the array describes the iteration range of the loops, and the subroutine is called within the loop created. Have a look at the documentation. It's a very interesting concept, albeit a bit alien to scan.

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/cheok-yin-fung/perl/ch-1.pl)

CY brings us a singular approach, deriving her combinations from Pascal's Identity:

```
   ⎛n⎞ = ⎛n-1⎞ + ⎛n-1⎞
   ⎝k⎠   ⎝ k ⎠   ⎝k-1⎠
```

The terms, written here as binomial coefficients, can also be described as **"n choose k"**:

 *n***C***k* = (*n*-1)**C***k* + (*n*-1)**C**(*k*-1)

One way to express this equality in English is to say the total set of
combinations *n***C***k* is the union of the set of combinations of a given length
that ***do not contain*** a specific member of the larger set, merged to the set of combinations of length ***one smaller*** that *also* do not contain that specific member, with that member ***added back*** to those combinations.

Or put another way, she has defined the final combination set in terms of smaller combination sets. Given a smaller set, she can then expand it by adding new members. She starts the ball rolling with the rather daunting line:

```perl
my @A =( [] , [[ []  ] ,[[1]]]  ,  [ [ []  ], [ [1],[2] ], [ [1,2] ]] );
```

I found this quite mysterious and obviously a mouthful, until I reformatted it a bit:

```perl
my @A =(    [] ,
            [ [[]], [[1]] ],
            [ [[]], [[1],[2]], [[1,2]] ]   );
```

and can see it as the base kernel from which she can construct arbitrary sets of combinations. The core of the routine is this ```while()``` loop:

```perl
while ($csize+1<=$i) {
    my @temp0 = @{$A[$i-1][$csize]} ;
    my @temp1 = map{ [ @{$_}, ] } @temp0;      # C(n-1,r)
    my @temp2 = @{$A[$i-1][$csize-1]};         # C(n-1,r-1)
    push @temp1, map { [ @{$_} , $i] } @temp2; # addition
    $A[$i][$csize] = \@temp1;
    $csize++;
}

```

CY writes up her thoughts on this solution at her [blog](http://blogs.perl.org/users/c_y_fung/2020/07/cys-take-on-pwc067.html), have a look.


### [**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/mohammad-anwar/perl/ch-1.pl)

Mohammad first makes a list of *every* combination as strings comprised of the numbers 1 through *m* in every position 1 through *n*, as 111 112 113 etc, using a pair of nested maps in a loop to add new digits for each option to each of the existing combinations. Maps within maps within loops make for powerful generators. Once he has this, he filters the list for those with unique digits and, after sorting, saves those as hash keys. Each hash key represents the stringification of a unique combination.

Mohommad [writes](https://perlweeklychallenge.org/blog/weekly-challenge-067/) and [speaks](https://www.youtube.com/watch?v=fZWOA3gfs9k) more about his solutions for those that want to know more.

### [**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/perlboy1967/perl/ch-1.pl)

This week it is Neils who comes to us with a nonstandard use of the glob() operator to do his dirty work. The glob operator is nominally included to provide shell expansion functionality to filenames in filehandles, so we can use constructs like <*.pl> to access all the perl scripts in a path, for instance. But beyond wildcard globbing, one can provide *alternation*, which looks like *.p{l,6}. The comma-separated options within the brackets will be alternately tried to complete the match, and this example will find all files with the extension .pl *and* the extension .p6. So what is the nonstandard use that brought us here? Niels isn't globbing filenames, but does invoke the code

```perl
glob('{'.join('},{', (join(',', 1 .. $m)) x $n).'}')
```

What exactly is glob acting on here? Let's just set ```$m = 4``` and ```$n = 3```, to find combinations of 3 items from 1 to 4 and have a look:

```perl
{1,2,3,4},{1,2,3,4},{1,2,3,4}
```

He has built ```$n``` alternation blocks, so ```glob``` ends up making all possible combinations, the cross product if you will.

```perl
[1,1,1], [1,1,2], [1,1,3], [1,1,4], [1,2,1], [1,2,2], [1,2,3], ...
```

he then uses ```grep {}``` to find only those lists where the ```uniq()``` ```sort()``` version is the same as the original, which are our sorted lists as requested.

```perl
my @list = grep {
  my @d = split(/,/);
  join('',@d) eq join('',uniq sort @d)
} glob('{'.join('},{', (join(',', 1 .. $m)) x $n).'}');
```

### [**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/roger-bell-west/perl/ch-1.pl)

Roger eschews recursion for his solution, again using loops and a queue as is his wont. He cycles through a list of lists, shifting partial solutions off a queue, creating new arrays with the various options appended, and then pushing them back on to the queue.

He takes a very interesting approach to calculating the upper bound of the range at a given position, in that he doesn't do this. Instead his algorithm always uses all the values up to the maximum, but too high values for a specific position simply won't allow that set to complete; it is not added back to the output array. Only sets of the correct length will go to output, and to get that far solutions must satisfy the criteria along the way. Too large values for `$base+1` in the following loop will bypass the `push` statement entirely and hence the combination will die on the vine:

      foreach my $k ($base+1..$m) {
        push @a,[@{$s},$k];
      }

He explains his reasoning further on his [blog](https://blog.firedrake.org/archive/2020/07/Perl_Weekly_Challenge_67__combining_numbers_and_phone_keypad.html) for those interested.

### [**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/wanderdoc/perl/ch-1.pl){#WANDERDOC1}

The Wandering Doctor uses the Algorithm::Combinatorics module to extract the solutions in a few lines of code, but then goes off on a remarkable tangent with the output.

To wit: they use the scalar context of the combinations function, which returns an iterator that when requested will return the next combination in the sequence. This is a handy feature to control memory usage in the case of having a huge number of combinations, but here we only have one tuple at a time. But, they say, we wish to pretty print these combinations in square brackets. That's ok, it's an easy join written between '[' and ']'. Ahh, but what of the commas between *those* strings? It's a causation problem: one needs to know whether there will be another tuple next before you can write the comma between. A conundrum indeed. Luckily, math comes to the rescue.

How? Because the number of combinations is calculable in advance, using the formula

```perl
                m!
    mCn =  -----------
            n! (m-n)!
```

Then if we know the total number of combinations in advance, we can count the commas as we print them and stop at one before the total. Pity we don't get a built-in factorial function, though. No mind. And here we get to what I suspect may have been the underlying motivation all along, being a chance to whip out brian d foy's memoizing factorial function from *Mastering Perl*:

```perl
$memoize[1] = 1;

sub factorial # From "Mastering Perl".
{
     my $num = $_[0];
     return $memoize[$num] if $memoize[$num];
     for ( @memoize .. $num )
     {
          $memoize[$_] = $memoize[$_ - 1] * $_;
     }
     return $memoize[$num];
}
```

As I said, all for a comma.

***
# TASK #2 › Letter Phone

You are given a digit string $S. Write a script to print all
possible letter combinations that the given digit string could
represent.

```
╭────────────────────────────────────╮
⎪ ╭────────╮  ╭────────╮  ╭────────╮ ⎪
⎪ ⎪ 1  _,@ ⎪  ⎪ 2  ABC ⎪  ⎪ 3  DEF ⎪ ⎪
⎪ ╰────────╯  ╰────────╯  ╰────────╯ ⎪
⎪ ╭────────╮  ╭────────╮  ╭────────╮ ⎪
⎪ ⎪ 4  GHI ⎪  ⎪ 5  JKL ⎪  ⎪ 6  MNO ⎪ ⎪
⎪ ╰────────╯  ╰────────╯  ╰────────╯ ⎪
⎪ ╭────────╮  ╭────────╮  ╭────────╮ ⎪
⎪ ⎪ 7 PQRS ⎪  ⎪ 8  TUV ⎪  ⎪ 9 WXYZ ⎪ ⎪
⎪ ╰────────╯  ╰────────╯  ╰────────╯ ⎪
⎪ ╭────────╮  ╭────────╮  ╭────────╮ ⎪
⎪ ⎪ *   ␣  ⎪  ⎪ 0      ⎪  ⎪ #      ⎪ ⎪
⎪ ╰────────╯  ╰────────╯  ╰────────╯ ⎪
╰────────────────────────────────────╯
```

*(thank you to the Monk Athenasius for the lovely manuscript illumination)*

Example:

```
    Input: $S = '35'

    Output: ["dj", "dk", "dl", "ej", "ek", "el", "fj", "fk", "fl"].
```

***

## Solutions Types

## write a RECURSIVE routine

On the tail of the previous challenge, it would make a lot of sense to write a recursive routine; after all, the problem space is very similar and even a little easier to manage. The standard form was to write a routine that takes a list of partial solutions and the input, lops the first digit off the input string, and then uses a couple of nested loops to create new each letter translations extending each combination in every way. Then the routine is called again with the new combination list and the shortened input string. There were a variety of ways to implement the looping, but perhaps the most compact came from [**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/laurent-rosenfeld/perl/ch-2.pl)

```perl
sub take_one {
    my ($str, @digits) = @_;
    if (@digits == 0) {
        print "$str ";
        return;
    }
    my $digit = shift @digits;
    for my $letter (@{$nums{$digit}}) {
        my $new_str = $str . $letter;
        take_one($new_str, @digits)
    }
}
```

Other people to take this approach were
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/arne-sommer/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/e-choroba/perl/ch-2.pl) (who uses the nested map functions we saw earlier to do the looping),
[**Javier Luque**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/javier-luque/perl/ch-2.pl) ([blog](https://perlchallenges.wordpress.com/2020/06/29/perl-weekly-challenge-067/))

who leverages the third-parameter form of split:

```perl
    my ($letter, $rest_of_word) = split('',$S,2);
```

to break off the only the leading digit of the input for processing on each pass through the block,
[**Simon Miner**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/simon-miner/perl/ch-2.pl),
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/walt-mankowski/perl/ch-2.pl), and
[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/colin-crain/perl/ch-2.pl)

For my own solution, I may have been the only one to draw a hard line on the encodings and the terminology of the challenge, and determined that "letters" means letters, and punctuation isn't letters. Therefore the encoding only works for the digits 2-9, and other numbers are just out of luck. Life is hard and short out on the telephone exchanges, for those of you who either directly recall why phones had letters in the first place, or more likely have seen an old movie or two. Sometimes I suppose I just feel quite literal.

For a further commentary on the lettering on telephone dials, and analysis of my method, you can  [read my notes](https://colincrain.wordpress.com/2020/07/06/combos-convos-and-cellphones/) on the subject.

## just LOOP through EVERYTHING

Use of recursion was by no means necessary, as the problem space is well defined. As the length of the digit string and the letter substitution options are known in advance, the solution can be fitted into a set of `for()` loops. In the outermost we index the digit string, in the middle we iterate over the partial solutions, and in the innermost we graft a new letter option onto the solution and push the result onto an updated list. Then the solution lists are swapped out.

People who walked this path were
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/cheok-yin-fung/perl/ch-2.pl) ([blog](http://blogs.perl.org/users/c_y_fung/2020/07/cys-take-on-pwc067.html)),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/dave-jacoby/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/roger-bell-west/perl/ch-2.pl) ([blog](https://blog.firedrake.org/archive/2020/07/Perl_Weekly_Challenge_67__combining_numbers_and_phone_keypad.html)) and
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/mohammad-anwar/perl/ch-2.pl)

Mohammad does away with the digits immediately, splitting the input string and mapping to the hashed letter lookup list for each number, then using these lists directly. His map within a loop is simplicity itself:

```perl
foreach my $members (@data) {
    @combinations = map {
        my  $member = $_;
        map $member.$_, @$members
    } @combinations;
}
```

He [writes](https://perlweeklychallenge.org/blog/weekly-challenge-067/) (and [talks](https://www.youtube.com/watch?v=Ojx-oSqOJMw)) more about his solution, for those who want to know more.

## unleash the POWER of GLOB

No less than three solutions using the inherent combinatorial aspects of ```glob()``` came out this week:

### [**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/perlboy1967/perl/ch-2.pl)

```perl
my @list = glob('{'.join('}{', map {join(',', @{$keypad{$_}}) } split(//, $s)).'}');
```

[**Wanderdoc**](#WANDERDOC2), who warrants his own writeup below, and

### [**Yet Ebreo**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/yet-ebreo/perl/ch-2.pl)

```perl
say $_ for glob join "",map "{".qw(-,@ ABC DEF GHI JKL MNO PQRS TUV WXYZ)[$_-1]=~s/\B/,/gr."}", ($ARGV[0] || '35')=~/./g
```

This is definitely an off-label use of powerful medicine, but there's no denying it works. Very creative.


## UNIQUE approaches and other THINGS THAT CAUGHT MY EYE

### [**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/athanasius/perl/ch-2.pl)

For his second decree, Athanasius again brings us a NestedLoop to study, from [```Algorithm::Loops```](https://metacpan.org/pod/Algorithm::Loops#NestedLoops1):

```perl
NestedLoops
(
    \@loops,
    sub
    {
        push @combinations, sprintf '"%s"', join '', map { lc $_ } @_;
    },
);
```

The array @loops holds the arrays of letters for the broken down digits, which in turn are iterated over and given to the subroutine. I'll have to play around with this a bit to properly understand it, but this is obviously a powerful technique at play here; it's something to have a look at.



### [**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/jaldhar-h-vyas/perl/ch-2.pl) ([blog](https://www.braincells.com/perl/2020/07/perl_weekly_challenge_week_67.html))

Jaldar resurfaces his X() cross-product routine from PWC65 to do the heavy lifting; once he has this he can simply apply it against a growing list of partial results and the current number's list of possible encodings.

```perl
for my $i (1 .. (scalar @letters) - 1 ) {
    @result = X(\@result, $letters[$i]);
}

say q{[}, (join q{, }, map { q{"} . (join q{}, @{$_}) . q{"} } @result), q{]};
```


### [**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/duncan-c-white/perl/ch-2.pl)

Duncan brings us a brace of functions, cross() and cross_one(), which taken together perform a cross product between the various options treated as lists. Remember Duncan's chosen path to subroutine signatures and other good stuff is the Function::Parameters module, in case those ```fun()``` calls don't scan for you.

```perl
fun cross( @str )
{
    my $first = shift @str;
    my @x = split(//,$first);
    foreach my $next (@str)
    {
        @x = cross_one( $next, @x );
    }
    return @x;
}

fun cross_one( $next, @x )
{
    my @out;
    my @letters = split(//,$next);
    foreach my $word (@x)
    {
        foreach my $letter (@letters)
        {
            push @out, $word.$letter;
        }
    }
    return @out;
}

```


### [**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/jo-37/perl/ch-2.pl)

Taking a functional approach, Jorg's ```prod()``` routine I believe expresses the cleanest invocation of using nested mappings to pair up values as in the **Cartesian product** that I have yet seen, which here he refers to as the **outer product**.[^1]

```perl
sub prod {
    my ($left, $right) = @_;
    [map {my $l = $_; map $l . $_, @$right} @$left];
}
```

Previously we have seen this structure manipulating the return value array of a recursive function, but broken out like this, with the (left, right) labeling makes it so much easier to follow. I really like this one. Here he's concactinating to build strings, but we could alternately return a list of new, joined arrays.

He finishes the job with a call to ```List::Util```'s ```reduce()```, dispatching the complexity in a few deft strokes.

```perl

sub dialstrings {
    reduce {prod $a, $letters{$b}} [''], split '', shift;
}
```

[^1]: This got me curious, worried that I might have my terms wrong; the [**outer product**](https://en.wikipedia.org/wiki/Outer_product)  is a term from Linear Algebra that corresponds well with the [**Cartesian product**](https://en.wikipedia.org/wiki/Cartesian_product) in Set Theory, which I have referred to several times here as the [**cross product**](https://en.wikipedia.org/wiki/Cross_product_(disambiguation)). The outer product is an operation on two vectors that produces a matrix, and the multiplied elements of that matrix are the familiar a<sub>1</sub>b<sub>1</sub>, a<sub>1</sub>b<sub>2</sub>, a<sub>1</sub>b<sub>3</sub>, ... a<sub>2</sub>b<sub>1</sub>, a<sub>2</sub>b<sub>2</sub> ... a<sub>*n*</sub>b<sub>*n*-1</sub>, a<sub>*n*</sub>b<sub>*n*</sub> pairings we see in the Cartesian product, here laid out two dimensionally. It seems in context all of these names are fairly well descriptive of the matchups, as long as we don't confuse the 3-space vector "cross product" which is a completely different thing. And yes, in Set Theory the cross product is apparently a perfectly valid alternative to Cartesian product.


### [**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-067/wanderdoc/perl/ch-2.pl) {#WANDERDOC2}

**Wanderdoc** gives us trio of solutions, using glob():

```perl
while ( my $pair = glob $letters )
{
     print lc "\"$pair\"";
     $counter++;
     print ", " if $counter < $num_prod;
}
```

using ```Math::Cartesian::Product::cartesian()```:

```perl
my $iterator = Set::CrossProduct->new( [@phone{@buttons}] );
my $number_of_tuples = $iterator->cardinality; # or reuse $num_prod;
while ( my $tuple = $iterator->get )
{
     print lc '"' . join('',@$tuple) . '"';
     $counter++;
     print ", " if $counter < $number_of_tuples;
}
```
and using ```Set::CrossProduct```:

```perl
my $iterator = Set::CrossProduct->new( [@phone{@buttons}] );
my $number_of_tuples = $iterator->cardinality; # or reuse $num_prod;
while ( my $tuple = $iterator->get )
{
     print lc '"' . join('',@$tuple) . '"';
     $counter++;
     print ", " if $counter < $number_of_tuples;
}
```
respectively. Of course he goes chasing that comma again, (naturally); if you don't understand this statement, read the [previous challenge review](#WANDERDOC1). An iota of difference indeed (cue for Athanasius to chime in).

***

## Follow Up and Read More at these Blog Links: {#blogs}

<br>

**Cheok-Yin Fung** [CY's Take on PWC#067](http://blogs.perl.org/users/c_y_fung/2020/07/cys-take-on-pwc067.html)

**Roger Bell_West** [RogerBW's Blog](https://blog.firedrake.org/archive/2020/07/Perl_Weekly_Challenge_67__combining_numbers_and_phone_keypad.html)

**Arne Sommer** [Numbers and Letters with Raku](https://raku-musings.com/numbers-letters.html) (has Perl versions)

**Colin Crain** [Combos, Convos and Cellphones](https://colincrain.wordpress.com/2020/07/06/combos-convos-and-cellphones/)

**Jaldhar H. Vyas** [Perl Weekly Challenge: Week 67](https://www.braincells.com/perl/2020/07/perl_weekly_challenge_week_67.html)

**Javier Luque** [PERL WEEKLY CHALLENGE – 067](https://perlchallenges.wordpress.com/2020/06/29/perl-weekly-challenge-067/)

**Laurent Rosenfeld** [Perl Weekly Challenge 67: Number Combinations and Letter Phone](http://blogs.perl.org/users/laurent_r/2020/07/perl-weekly-challenge-67-number-combinations-and-letter-phone.html)

**Mohammad S Anwar** [BLOG: THE WEEKLY CHALLENGE #067](https://perlweeklychallenge.org/blog/weekly-challenge-067/), [Perl Weekly Challenge - 067 (Task #1: Perl)](https://www.youtube.com/watch?v=fZWOA3gfs9k), [Perl Weekly Challenge - 067 (Task #2: Perl)](https://www.youtube.com/watch?v=Ojx-oSqOJMw)
