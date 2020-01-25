---
title: "Ryan Thompson › Perl Weekly Review: Challenge - 043"
date: 2020-01-24T00:00:00+00:00
description: "Ryan Thompson › Perl Weekly Review: Challenge - #043"
type: post
image: http://www.ry.ca/wp-content/uploads/2020/01/image.png
author: Ryan Thompson
tags: ["Perl"]
---
***
***

Continues from [previous week](/blog/review-challenge-042/).

Feel free to [submit a merge request or open a ticket](https://github.com/manwar/perlweeklychallenge) if you found any issues with this post. We highly appreciate and welcome your feedback. You can also [contact me (Ryan) directly](http://ry.ca/contact), with any feedback on this review.

For a quick overview, go through the [original tasks](/blog/perl-weekly-challenge-043/) and [recap](/blog/recap-challenge-043/) of the weekly challenge.

Additional feedback to our Perl Weekly Challenge’s [Twitter account](https://twitter.com/perlwchallenge?lang=en) is much appreciated.

# Task #1 - Olympic Rings

The task here was to fill in the numbers 1, 2, 3, 4, and 6 into the spaces
within the intersecting Olympic rings, such that the numbers in each ring sum
to 11. (See the diagram.)

The problem can be solved easily enough by hand, yet still presents an
interesting programming challenge that can be tackled in many different ways.

## Adam Russell

[Adam's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-043/adam-russell/perl/ch-1.pl) this week is a Perl wrapper around a Prolog clause using [AI::Prolog](https://metacpan.org/pod/AI::Prolog). It's satisfyingly elegant.

The Prolog clause is as follows:

```prolog
member(X,[X|T]).
member(X,[H|T]) :- member(X,T).
colors(Red, Green, Black, Yellow, Blue) :-  
    member(Blue, [1,2,3,4,6]), 
    member(Yellow, [1,2,3,4,6]), 
    member(Green, [1,2,3,4,6]), 
    member(Red, [1,2,3,4,6]), 
    member(Black, [1,2,3,4,6]), 
    R = 11, R is 9 + Red,
    G = 11, G is 5 + Red + Green,
    B = 11, B is 8 + Blue,
    Y = 11, Y is 7 + Blue + Yellow,
    Bl = 11, Bl is Green + Yellow + Black. 
```

And that clause (stored in `$prolog`) is called in Perl like so:

```perl
$prolog = new AI::Prolog($prolog); 
$prolog->query("colors(Red, Green, Black, Yellow, Blue).");
```

Prolog is a great choice for this type of problem, as the solution can be simply defined as a system of equations. Prolog then understands these equations as a constraint-based problem, and abstracts away all of the complexity.

Read more on [Adam's blog](https://adamcrussell.livejournal.com/14361.html).

## Alicia Bielsa

[Alicia's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-043/alicia-bielsa/perl/ch-1.pl) sets up a hash, `%hRingsComposition`, which maps each ring to the segments that must be sum to 11 inside that ring:

```perl
my %hRingsComposition = (
                   'RED' =>  [ 'RED', 'RED_GREEN'],
                   'GREEN' =>  [ 'GREEN', 'RED_GREEN',  'GREEN_BLACK'],
                   'YELLOW' => [ 'YELLOW', 'BLUE_YELLOW', 'YELLOW_BLACK'],
                   'BLUE' => [ 'BLUE', 'BLUE_YELLOW'],
                   'BLACK' =>[ 'BLACK',  'GREEN_BLACK','YELLOW_BLACK']
);
```

Alicia's algorithm is efficient. It takes advantage of the fact that there is only one solution, and it can be found by simply looking for a ring with only one unknown, and filling in that unknown from one of the available values,
repeating until the problem is solved. Here is the main loop:

```perl
my $countAvailableNumbers = scalar @aAvailableNumbers;
while ( $countAvailableNumbers ){
    foreach my $ringColor (keys %hRingsComposition){
       
        my $singleEmptyValue = findSingleEmptyValue($ringColor);
        if ($singleEmptyValue){
           
            my $currentRingSum = getCurrentRingSum($ringColor);   
            my $difference =  $TOTALSUM - $currentRingSum;
            if (checkValueAvailability($difference)){
                $hColorValue{$singleEmptyValue} =$difference;
            } else {
                die "ERROR: Value  '$difference' not available, imposible to resolve\n";
            }
        }       
    }
    $countAvailableNumbers = scalar @aAvailableNumbers;
}
```

Her program finds the solution in just 10 total iterations of the inner `foreach` loop. Nice!

## Andrezgz

[Andrezgz's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-043/andrezgz/perl/ch-1.pl) followed a strategy similar to Alicia's, but managed to do so in a concise way, by writing a program highly specialized to this particular puzzle. First, there is the `@rings_components` array, which sets up the segments contained within each ring:

```perl
my @rings_components = (
    ['Red','RedGreen'],
    ['Green','RedGreen','GreenBlack'],
    ['Blue','YellowBlue'],
    ['Yellow','YellowBlue','BlackYellow'],
    ['GreenBlack','BlackYellow','Black']
);
```

The main loop finds the solution (`%values` contains the known (given) values):

```perl
foreach my $ring (@rings_components) {
    my $internal_sum = 11;
    foreach my $c (@$ring){
        $values{$c} = $internal_sum unless defined $values{$c};
        $internal_sum -= $values{$c};
    }
}
```

Andrezgz defines, but does not even need, a hash of the available numbers, 1, 2, 3, 4, and 6.

## Burkhard "Chuck" Nickels

[Chuck's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-043/burkhard-nickels/perl/ch-1.pl) sets up a `while` loop and a sliding window, which looks at three contiguous ring compartments at a time. If there is only one unknown in that group, that unknown can be safely calculated. Here is the loop:

```perl
my $nrx;                             # Number of x in array
do {
  numbers();
  $nrx = () = join("",@a) =~ /x/g; # Determine Nr of x
} while($nrx);                       # if Nr of x
```

The `numbers()` routine looks at the sliding window and does the math to fill in the missing value if there is only one unknown:

```perl
sub numbers {
  for(my $i=0; $i<=$#a; $i+=2) {  # Only every second value is a Main Ring Value

    my @win = @a[$i-1 .. $i+1]; # Create window of 3 numbers that shifts along array
    $win[0] = 0 if $i==0;       # At begin, set window first element to zero
    $win[2] = 0 if $i==$#a;     # At end,   set window last  element to zero

    my $nr = () = join("",@win) =~ /x/g;  # How many x are in window
    print "($i) Win(", join("/",@win), ") Nrx $nr\n" if $DEBUG;
    if($nr == 1) {                     # Only if 1 value is missing, determine next value
      if($win[1] eq 'x') { $a[$i] = 11 - $win[0] - $win[2]; } 
      elsif($win[0] eq 'x') { $a[$i-1] = 11 - $win[1] - $win[2]; }
      elsif($win[2] eq 'x') { $a[$i+1] = 11 - $win[1] - $win[0]; }
    }
  } 
}
```

I'm impressed by this solution. It's unique, and the sliding window makes short work of this problem. Be sure to check out [Chuck's POD blog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-043/burkhard-nickels/perl/ch-1.pod), which goes into more detail.

## Colin Crain

[Colin's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-043/colin-crain/perl/ch-1.pl) recognizes the fact that this puzzle can be represented as a system of linear equations. Colin derives the linear algebra equations by hand, and then uses [Math::MatrixReal](https://metacpan.org/pod/Math::MatrixReal) to do the actual matrix multiplication:

```perl
my $a = Math::MatrixReal->new_from_string(<<MATRIX);
[ 1 0 0 0 0 ]
[ 1 1 0 0 0 ]
[ 0 1 1 1 0 ]
[ 0 0 0 1 1 ]
[ 0 0 0 0 1 ]
MATRIX

my $b = Math::MatrixReal->new_from_string(<<MATRIX);
[ 3  ]
[ 4  ]
[ 11 ]
[ 6  ]
[ 2  ]
MATRIX

my $LR = $a->decompose_LR();
my ($dim, $out, $base) = $LR->solve_LR($b);
```

Using this method, the code is very simple. The real magic is in realizing that this puzzle could be reduced to a system of linear equations in the first place!

## Cristina Heredia

[Cristina's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-043/cristian-heredia/perl/ch-1.pl) provides another interesting variation on the direct calculation method we've seen previously. She repeats the following code for each of the rings:

```perl
@black[0] = $b;
@black[2] = $c;
$q = @total[0] - @black[0] - @black[2];
@black[1] = $q;
validate($q);
print "\nValors of black:\n";
for (my $j = 0; $j < @black; $j++) {
  print "@black[$j],";
}
print "\n";
```

And the `validate()` sub simply has to check whether the remaining number, `11 - $black[0] - $black[2]`, is one of the givens. If so, the solution is valid:

```perl
sub validate {
  $valor = shift;
  my $valide;
  for (my $j = 0; $j < @values; $j++) {
    if (@values[$j] == $valor) {
      $valide = "KO";   
    }
    else {
      $valide = "OK";
      last;
    }
  }
  if ($validate == KO) {
    print "The number $valor is one of the given.";
  }
  else {
    print "The number $valor isn't one of the given.";  
  }
}
```

Stylistically, I would prefer to see `use warnings` and `use strict`, and perhaps a bit of refactoring to reduce the duplication of code. However, Cristina succeeded in the more difficult task of delivering a program that works, is efficient, and is easy to understand.

## Dave Jacoby

[Dave's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-043/dave-jacoby/perl/ch-1.pl) uses some new Perl features again this week, such as the [postfix deref](https://perldoc.perl.org/perlref.html#Postfix-Dereference-Syntax) introduced in 5.20, and [signatures](https://perldoc.perl.org/perlsub.html#Signatures). Dave's code goes through every permutation of the numbers (1, 2, 3, 4, 6) and stops if it finds one where all of the rings sum to 11. The `permute_array` function is what actually generates the permutations:

```perl
sub permute_array ( $array ) {
    return $array if scalar $array->@* == 1;
    my @response = map {
        my $i        = $_;
        my $d        = $array->[$i];
        my $copy->@* = $array->@*;
        splice $copy->@*, $i, 1;
        my @out = map { unshift $_->@*, $d; $_ } permute_array($copy);
        @out
    } 0 .. scalar $array->@* - 1;
    return @response;
}
```

In terms of computational complexity, Dave's algorithm is O(n!) on the size of the number list. In this case, there are 5! = 120 ways of arranging the numbers. While some solutions are considerably more efficient, Dave's is general, elegant, and the factorial isn't a problem for small lists.

[Dave's blog](https://jacoby.github.io/2020/01/17/perl-weekly-challenge-43-rings-and-selfdescription.html).

## Duane Powell

[Duane's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-043/duane-powell/perl/ch-1.pl) also looks at all the permutations of (1, 2, 3, 4, 6), but the key difference is Duane uses [Math::Combinatorics](https://metacpan.org/pod/Math::Combinatorics) to do the heavy lifting:

```perl
my @num = (1,2,3,4,6);

my $c = Math::Combinatorics->new(count => 1, data => [@num]);
while (my @perm = $c->next_permutation) {
  next unless red($perm[0])                     == $eleven;
  next unless green($perm[0],$perm[1])          == $eleven;
  next unless black($perm[1],$perm[2],$perm[3]) == $eleven;
  next unless yellow($perm[3],$perm[4])         == $eleven;
  next unless blue($perm[4])                    == $eleven;

  # a solution found if we made it here
  say join(',',@perm); 
}
```

Whether or not to use non-core modules in these challenges is a matter of personal preference, and I, for one, love seeing both approaches when I look at the solutions every week.

## E. Choroba

[Choroba's first solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-043/e-choroba/perl/ch-1a.pl) again uses `Math::Combinatorics`. However, in his blog, he notes that he saw it could be solved much more easily.

[The second solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-043/e-choroba/perl/ch-1.pl) is therefore another take on the constant-time difference approach we've seen. As is typical of Choroba's solutions, it is beautifully concise:

```perl
my ($red, $green, $yellow, $blue) = (9, 5, 7, 8);

my $red_green    = 11 - $red;
my $blue_yellow  = 11 - $blue;
my $black_green  = 11 - $green - $red_green;
my $black_yellow = 11 - $yellow - $blue_yellow;
my $black        = 11 - $black_green - $black_yellow;

say join ' ', $red_green, $black_green, $black, $black_yellow, $blue_yellow;)
```

[Choroba's blog](http://blogs.perl.org/users/e_choroba/2020/01/perl-weekly-challenge-043-olympic-rings-and-self-descriptive-numbers.html) explains the math very well.

## Jaldhar H. Vyas

[Jaldhar's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-043/jaldhar-h-vyas/perl/ch-1.pl) has its own `permute` sub:

```perl
sub permute (&@) {
    my $code = shift;
    my @idx = 0..$#_;
    while ( $code->(@_[@idx]) ) {
        my $p = $#idx;
        --$p while $idx[$p-1] > $idx[$p];
        my $q = $p or return;
        push @idx, reverse splice @idx, $p;
        ++$q while $idx[$p-1] > $idx[$q];
        @idx[$p-1,$q]=@idx[$q,$p-1];
    }
}
```

This one takes a code ref as a callback, and a list of numbers. Jaldhar then uses it like this:

```perl
my @permutations;
permute { push @permutations, \@_; } @numbers;
for my $permutation (@permutations) { ... }
```

I'm not sure why Jaldhar implemented a callback, only to `push` the values into an array to iterate over on the next line of code, but it doesn't matter much in this case, since the list of `@permutations` is small.

The internals of the loop mostly do the arithmetic to calculate the value of each ring, and then this check is performed:

```perl
    if (scalar (grep { $ringValues{$_} == 11 } keys %ringValues) == 5) {
        map { say "$_ = $try{$_}"; } @unknowns;
        last;
    }
```

`%ringValues` contains the sums inside each ring, so he's checking to see if all five rings sum to 11, and then outputting the values and exiting the loop early.

## Javier Luque

[Javier's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-043/javier-luque/perl/ch-1.pl) uses [Algorithm::Combinatorics](https://metacpan.org/pod/Algorithm::Combinatorics) for another permutation-based approach:

```perl
my $iter = permutations(\@numbers);
while (my $p = $iter->next) {
    my $slots = {
        redgreen     => $p->[0],
        greenblack   => $p->[1],
        black        => $p->[2],
        blackyellow  => $p->[3],
        yellowblue   => $p->[4]
    };

    if (validate_answer($rings, $slots)) {
        for my $key (keys %$slots) {
            say 'Slot: ' . $key .
                ' value: ' . $slots->{$key};
        }
    }
}
```

`validate_answer()` is essentially the following conditional:

```perl
    ( $s->{redgreen} + $r->{red} == 11 &&
      $s->{redgreen} + $r->{green} + $s->{greenblack} == 11 &&
      $s->{greenblack} + $s->{black} + $s->{blackyellow} == 11 &&
      $s->{blackyellow} + $r->{yellow} + $s->{yellowblue} == 11 &&
      $r->{blue} + $s->{yellowblue} == 11 );
```

[Javier's blog](https://perlchallenges.wordpress.com/2020/01/13/perl-weekly-challenge-043/)

## Laurent Rosenfeld

[Laurent's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-043/laurent-rosenfeld/perl/ch-1.pl) takes a deductive approach to the problem. First, the red and blue rings each have only one unknown, so those numbers can be calculated directly. Once those are filled in, the green and yellow rings now have one unknown, and finally, the black ring gets the final number.

The (short) nested loops that figure out the red-green and blue-yellow intersections provide a good summary of Laurent's approach:

```perl
my @ring_sequences = ( [qw <red green>], [qw <blue yellow>] );
my @black_vals;

for my $seq_ref (@ring_sequences) {
    my $diff = 0;
    for my $ring (@$seq_ref) {
        $rings{$ring} += $diff;
        say "Added $diff to $ring ring, " if $diff;
        $diff = TARGET - $rings{$ring};
        die "No way" unless exists $nums{$diff};
        say "Added $diff to $ring ring";
        $rings{$ring} += $diff;
    }
    $rings{black} += $diff;
    push @black_vals, $diff;
}
```

As always, Laurent provides solid, readable, idiomatic Perl. What's funny is that Laurent's code is very similar to how I solved this by hand, even though I felt like using backtracking in my Perl solution instead.

[Laurent's blog](http://blogs.perl.org/users/laurent_r/2020/01/perl-weekly-challenge-43-olympic-rings-and-self-descripting-numbers.html) goes into more detail into the numerical analysis and algorithm design.

## Roger Bell West

[Roger's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-043/roger-bell-west/perl/ch-1.pl) uses a 6-nested loop, one loop for each of the rings, and a final loop over the numbers (1, 2, 3, 4, 6), trying each number in each slot. After computing the sums in each ring, he uses [List::MoreUtils](https://metacpan.org/pod/List::MoreUtils)' `minmax` to check whether *all* sums are 11:

```perl
my @l=minmax(@sums);
if ($l[0]==$target && $l[1]==$target) {
    print join(', ',map {"$candidate[$_] in $metanames[$index[$_]]"} (0..$#candidate)),"\n";
}
```

Complexity-wise, Roger's algorithm runs in O(m(2n)^5) time, where *m* is the number of candidate numbers (1, 2, 3, 4, 6), and *n* is the number of givens. For this problem, his algorithm will require over 200,000 operations. It still runs in about a quarter of a second, and the advantage of this approach is that the inner loop almost writes itself:

```perl
            my $ix=int($index[$i]/2);
            $sums[$ix]+=$candidate[$i];
            if ($index[$i]%2==1) {
              $sums[$ix+1]+=$candidate[$i];
            }
```

In other words, when you just want the answer to a problem, sometimes computational complexity is less important than simply doing the first thing that might work.

## Ruben Westerberg

[Ruben's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-043/ruben-westerberg/perl/ch-1.pl) is another example of using techniques from linear algebra (specifically, Gauss-Jordan Elimination or row reduction). Colin Crain used a similar algorithm, but Ruben also implemented all of the matrix operations himself, without the help of any non-core modules.

The `solve` sub is a dense mix of array primitives and arithmetic:

```perl
sub solve {
  my ($c, $y)=@_;
  my $j=build($c,$y);
  my $s=@$c;
  my $row;  
  for my $p (0..$s-1) {
    my $v=$j->[$p][$p];
    my $prow=$j->[$p];
    for my $r (0..$s-1) {
      $row=$j->[$r];
      next if $p==$r;
      my $d=$row->[$p]/$v;
      for my $col (0..$s) {
        $row->[$col]-=$d*$prow->[$col];
      }
    }
  }
  $row->[-1]/=$row->[-2];
  $row->[-2]=1;
  backsub($j);
}
```

I really enjoyed going through Ruben's implementation. If you, like me, have any doubts about your ability to sit down and write a Gauss-Jordan implementation without cracking a linear algebra textbook, it's worth looking at Ruben's code.

## Ryan Thompson

[My own solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-043/ryan-thompson/perl/ch-1.pl) went a little overboard. I had already solved the problem by staring at it for a minute, so I knew it would not be a computationally difficult problem. I decided on a rather generic recursive backtracking approach.

I actually focused most of my efforts on a terminal-based *animated* visualizer for how backtracking algorithms work, without using any non-core modules. You can see a screenshot at the top of this page. Click the link to the solution, above, if you want to see how the visualizer works. Since that code is both lengthy and tangential to the challenge, I'll focus on the actual solver algorithm, here.

In my backtracking approach, the base case relies on `check_sol`, which returns `solved` if the puzzle is solved, `impossible` if any of the sums do not equal 11, and `possible` otherwise. I had originally used a simpler binary `is_solved`, but having the ternary return value reduced the number of iterations from 113 (not much better than checking all 5! permutations) down to just 16.

```perl
sub solve {
    my (%sol) = @_;
    my $check = check_sol(\%sol);
    return %sol if $check eq 'solved';
    return      if $check eq 'impossible';
 
    # Get list of numbers still available
    my %solR = reverse %sol; # keys <-> values
    my @rem  = grep { not exists $solR{$_} } @avail;
 
    my $spot = first { $sol{$_} == 0 } @order_try;
    for my $num (@rem) {
        my %new = solve(%sol, $spot => $num);
        return %new if keys %new; # Pass back solution
    }
 
    return;
}
```

Thanks to being able to prune early, `solve` is only ever called 16 times. Although this problem's search space is tiny, backtracking is a powerful tool that can efficiently solve a surprising family of problems. I think I might have been the only one to explicitly use backtracking, which either makes me clever or foolish.

[Olympic rings blog](http://www.ry.ca/2020/01/olympic-rings/)

## Saif Ahmed (saiftynet)

[Saif's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-043/saiftynet/perl/ch-1.pl) iterates all of the rings in a `while` loop until the puzzle is solved. Any time there is only one unknown in a ring, Saif knows the value must be 11 minus the sum of the other number(s) in that ring. A funny comment also highlights how trivial this problem can be: *"this function solves in one pass if we fix in the sequence blue red green yellow black but that would be cheating".*

Saif's, I think, is the only other Perl solution besides mine that attempts to display the results in something resembling their actual position:

```perl
sub displayRings{
    printf  (
"     RED %s                 BLACK %s                     BLUE %s
        RedGrn %s    GrnBlk %s     BlkYel %s      YelBlu %s
               GREEN %s                  YELLOW %s\n",
               @list[0,4,8,1,3,5,7,2,6]
        );  
  
}
```

The output looks like this:

```
Final state:-
     RED 9                 BLACK 6                     BLUE 8
        RedGrn 2    GrnBlk 4     BlkYel 1      YelBlu 3
               GREEN 5                  YELLOW 7
```

## wanderdoc

[wanderdoc's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-043/wanderdoc/perl/ch-1.pl) is another that uses `Algorithm::Combinatorics` to iterate over all permutations of the available numbers 1, 2, 3, 4, and 6.

```perl
while (my $i = $iter->next())
{
     @var{@col2search} = @$i;

     next unless ( all { is_valid($_) } @olympic );
     print join(' => ', $_, $var{$_}), $/ for @col2search; 
}
```

wanderdoc's `ring_sum` function is interesting:

```perl
sub ring_sum
{
     my @ring = @{$_[0]};
     my $sum = reduce { ('SCALAR' eq ref $a ? $$a : $a) + ('SCALAR' eq ref $b ? $$b : $b) } @ring;
     return $sum;
}
```

This usage of `reduce` is a typical way to implement `sum`. Of course, with [List::Util](https://perldoc.perl.org/List/Util.html#sum)'s `sum`, this could be written:

```perl
sum map { 'SCALAR' eq ref $_ ? $$_ : $_ } @ring;   # Or even...
sum map { ref ? $$_ : $_ } @ring;
```

Still, I like seeing `reduce` getting some love. It's extremely powerful.

***

# Task #2 - Self-Descriptive Numbers

This week's second task is to generate self-descriptive numbers in arbitrary
bases. A self-descriptive number, as described by Wikipedia, is an integer *m*
that in a given base *b* is *b* digits long in which each digit *d* at position *n*
(the most significant digit being at position 0 and the least significant at
position *b – 1*) counts how many instances of digit *n* are in *m*.

## Methods

Solutions to this challenge differed mainly on how much of the math behind self-descriptive numbers people chose to take advantage of. Most solutions used the fact that bases 7 and above have an easy formula:

```perl
(b - 4)b^(b-1) + 2b^(b-2) + b^(b-3) + b^3
```

This constant-time formula does not work for bases < 7, so solutions here tended to be either hard-code the answers, or search for self-descriptive numbers. **Roger Bell West** and **Saif Ahmed** both used an interesting iterative method which munges an *n*-digit number to rapidly converge to a self-describing number.

Another difference in solutions is whether they output the results in base 10, or the given base, or both. As the challenge description's only example was in base 10, there was ambiguity, so both output formats would seem to be equally valid.

## Adam Russell

[Adam's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-043/adam-russell/perl/ch-2.pl) iterates through all non-negative integers below 100,000,000, checking if each one is self-describing, using the following function:

```perl
sub self_describing{
    my($i) = @_;
    my @digits = split(//, $i); 
    for my $x (0 .. @digits - 1){
        my $count = 0;
        for my $j (0 .. @digits - 1){
            $count++ if($digits[$j] == $x);
            return false if($count > $digits[$x]); 
        }
        return false if($count != $digits[$x]); 
    }   
    return true; 
}
```

I appreciate Adam's direct approach to the problem. [Adam's blog](https://adamcrussell.livejournal.com/14361.html) mentions his code simply follows from the definition of a self-describing number.

## Andrezgz

[Andrezgz's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-043/andrezgz/perl/ch-2.pl) uses the base ≥ 7 formula, supporting bases up to 35. Andrezgz hard-codes in the bases which are known to have no self-descriptive numbers, and then searches the others:

```perl
die "No self-descriptive numbers in base $base" if ($base <4 || $base == 6);

if ($base >= 7) {
    my @symbols = (0..9,'A'..'Z');
    print $symbols[$base - 4] . '21' . '0' x ($base - 7) . '1000' . $/;
}
else{
    my $from = '1' . '0' x ($base-1);
    my $to = '9' x $base;

    for my $n ($from .. $to) {
        my @count = (0) x $base;
        $count[$_]++ for split //, $n;
        print $n.$/ if ($n eq join '',@count[0..$base-1]);
    }
}
```

## Burkhard "Chuck" Nickels

[Chuck's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-043/burkhard-nickels/perl/ch-2.pl) uses the base ≥ 7 formula for all bases, starting at 4. The formula *does* give the first self-descriptive number, 1210, but misses the second, 2020, and third, 21200. This would be easy enough to fix, however, by searching (Chuck did implement a `verify` function), or by simply hard-coding those non-generic cases.

What is interesting about Chuck's solution, though, is his handling of bases both during the computation, and when outputting the results. Chuck noticed that bases 4..14 could be handled with decimal numbers, while bases 13..17 could be handled in hexadecimal, and bases greater than 15 could be handled by a custom `0..9, 'a'..'z'` base-35 converter that he wrote. (Yes, these ranges do overlap, but that will not negatively affect the output):

```perl
my $base   = join("",@r);
my $is_sdn;
if($b > 3  and $b < 15) { $is_sdn = verify_dec($base); }
if($b > 12 and $b < 18) { $is_sdn = verify_hex($base); }
if($b > 15) { $is_sdn = verify_str($base); }
```

Chuck therefore has written three different `verify_*` routines. Here is one of them:

```perl
sub verify_str {
  my ($sdn) = @_;
  my $i = 0;
  my $is_sdn = 1;
  foreach my $v (split(//,$sdn)) {
    my $nr;
    my $search = $C[$i];
    $nr = () = $sdn =~ m/$search/g;
    $nr = $C[$nr];
    if( $v ne $nr ) {
      $is_sdn = 0;
      return $is_sdn;
    }
    $i++; 
  }
  return $is_sdn;
}
```

A `convert` routine was also necessary, in order to convert between bases (note this is running under `bigint`):

```perl
sub convert {
  my ($b,$n,$erg) = @_;
  my $d = int($n / $b);
  my $r = $n % $b;
  if($r > 15) { 
    # print "Value > 15: $r $C[$r]\n";
    $r = $C[$r]; 
  }
  elsif($r > 9) { $r = sprintf("%x", $r); }
  unshift(@$erg,$r);
  convert($b,$d,$erg) if $d;
}
```

[Chuck's blog](http://pearls.dyndnss.net/) ([POD version](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-043/burkhard-nickels/perl/ch-2.pod)) provides a refreshingly candid description of the journey towards the eventual solution.

## Colin Crain

[Colin's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-043/colin-crain/perl/ch-2.pl) only handles bases ≥ 7. I like the additional thought Colin put in to the formula's implementation, however. While most of us just implemented the formula numerically, or adapted it to use string concatenation, Colin showcased both methods:

```perl
sub self_descriptive {
## formula for creating self-descriptive numbers in base 10 for a given base ( > 7 )
    my $base = shift;
    my $dec = ($base-4)*($base**($base-1)) + 2*($base**($base-2)) + $base**($base-3) + $base**3;
    my @alphanum = (0..9, 'A'..'Z');
    my $out = "";
    my $rem;
    while ( $dec > 0 ) {
        ($dec, $rem) = (int( $dec/$base ), $dec % $base);
        $out = $alphanum[$rem] . $out;
    }
    return $out;
}
```

```perl
sub self_descriptive_assembled {
## or we can just assemble a graphical representation of a number manually that will fit the bill
    my $base = shift;
    my @alphanum = (0..9, 'A'..'Z');
    my $out = $alphanum[$base-4] . "21" . "0" x ($base-7) . "1000";
    return $out;
}
```

The string method is more concise, and gives results directly in the target base, while the pure numerical method gives its answer in base-10, which may be desirable.

## Cristina Heredia

[Cristina's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-043/cristian-heredia/perl/ch-2.pl) handles bases 7..10 in both decimal and the original base, using the numeric formula:

```perl
use strict;
use Math::Base::Convert qw(:base);

my $valor;
for (my $b = 7; $b <= 10; $b++) {
  $valor = ($b - 4) * $b**($b - 1) + 2 * $b ** ($b-2) + $b**($b-3) + $b**3;

  $converted = cnv($valor,10 => $b); 
  print "Base is $b, and the result is $converted\n";
}
```

While this is very close to being correct, the code does not quite run as-is. `$converted` needs to be declared under `strict`, and the `cnv` function from [Math::Base::Convert](https://metacpan.org/pod/Math::Base::Convert) is not exported with `:base`.

Furthermore, `Math::Base::Convert`'s `cnv` says it supports "arbitrary bases," yet throws an error for base 7. I looked up the error in the [module source](https://metacpan.org/release/Math-Base-Convert/source/Convert.pm), and it seems you need to supply your own character set if not using one of the six standard bases it supports. With all this in mind, I would suggest the following minimal fix to Cristina's code (I hope you don't mind, Cristina!):

```perl
# Ryan's suggested fix
use strict;
use Math::Base::Convert qw(cnv);

for (my $b = 7; $b <= 10; $b++) {
  my $valor = ($b - 4) * $b**($b - 1) + 2 * $b ** ($b-2) + $b**($b-3) + $b**3;

  my $converted = cnv($valor,10 => [0..$b-1]);
  print "Base is $b, and the result is $converted\n";
}
```

## Dave Jacoby

[Dave's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-043/dave-jacoby/perl/ch-2.pl) generates all self-descriptive numbers from base 7..37 using the string concatenation variant of the formula. He also takes care to verify that the numbers are indeed self-descriptive.

Here is Dave's implementation of the formula:

```perl
sub get_self( $n ) {
    my @output = map { 0 } 1 .. $n;
    my $b      = $n - 4;
    $output[0]  = $from_base{$b};
    $output[1]  = 2;
    $output[2]  = 1;
    $output[$b] = 1;
    return join '', @output;
}
```

The `check_self` sub validates self-descriptive numbers by going through all of the digits.

```perl
sub check_self ( $s, $n ) {
    no warnings;
    my @s = split //, $s;
    my $b = $s[0];
    my @check;
    for my $i ( 0 .. $n - 1 ) {
        my $eye = $from_base{$i};
        my $c = $s[$i];
        my @all = grep { $_ eq $eye } @s;
        my $all = join ',', @all;
        my $j   = scalar @all;
        my $jay = $from_base{$j};
        return 0 if $c ne $jay;
    }
    return 1;
}
```

Dave's variable names made me smile. I used to work with someone who also used `$i, $j, $eye,` and `$jay`. His name was Dave, too.

## Duane Powell

[Duane's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-043/duane-powell/perl/ch-2.pl) works for bases 1..10, by brute forcing the search space, and checking if each number is self-descriptive, using the following function:

```perl
sub SDN {
  my $n    = shift; 
  my $base = shift;
 
  my @n = split(//,$n);                       # Split $n into separate digits
  return 0 unless (scalar @n == $base);       # A SND is the same length as its base

  my %count;
  $count{$_} = 0 foreach (0 .. scalar(@n)-1); # Init a counter to all 0's
  $count{$_}++   foreach (@n);                # Count the occurance of each digit 

  # Determine if $n "describes" itself by comparing
  # the count to the digit found at index $i
  my $i = 0;
  foreach (0 .. scalar(@n)-1) {
    return 0 if ($count{$_} != $n[$i]); # not a SDN, exit
    $i++; 
  }
  return 1; # All digits matched the counts, this is an SDN
}
```

Duane admits this is very slow for larger bases. One optimization that Duane did that some people missed is this line:

```perl
  return 0 unless (scalar @n == $base);       # A SND is the same length as its base
```

Duane is checking whether the number is a [Niven number](http://mathworld.wolfram.com/HarshadNumber.html) (or Harshad number), which you might remember from [week 007](https://perlweeklychallenge.org/blog/perl-weekly-challenge-007/) of the Perl Weekly Challenge. It can be proven that [all self-descriptive numbers are also Niven numbers](https://en.wikipedia.org/wiki/Self-descriptive_number#Properties).

## E. Choroba

[Choroba's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-043/e-choroba/perl/ch-2.pl) uses a table of values for bases < 7. For bases ≥ 7, Choroba takes a somewhat novel approach:

```perl
return $convert->(join "",
                  map $_ > 9 ? chr 55 + $_ : $_,
                  ($base - 4, 2, 1, (0) x ($base - 7), 1, (0) x 3))
```

The use of `join` to handle the concatenation streamlines the code somewhat. That bit of ASCII math (`chr 55 + $_`) is a cheeky way of expanding the character set for bases greater than 9. I like it.

`$convert` is a code ref that either returns its argument unmodified, or sends it through [Convert::AnyBase](https://metacpan.org/pod/distribution/Convert-AnyBase/lib/Convert/AnyBase.pm)'s `decode()` method. Thus, Choroba's `self_descriptive_number()` sub can either return the result in the original base, or be `decode()`'d to a regular Perl number:

```perl
my $convert = @_ == 1
    ? sub { $_[0] }
    : sub { 'Convert::AnyBase'->new(set => $set)->decode($_[0]) };
```

Instead of returning an empty list or `undef` if there are no self-descriptive numbers for the base, Choroba opted to use an exception model instead:

```perl
    if (exists $irregular{$base}) {
        die "No self descriptive number in base $base.\n"
            unless $irregular{$base};

        return $convert->($irregular{$base})
    }
```

One easily fixed issue is that the `%irregular` hash only lists one of the two base-4 self-descriptive numbers (1210; the other is 2020):

```perl
my %irregular = (
    1 => undef,
    2 => undef,
    3 => undef,
    4 => 1210,
    5 => 21200,
    6 => undef,
);
```

That's easily remedied, though. Finally, Choroba provides a comprehensive set of tests, which is always nice to see. Testing exceptions is easy with [Test::Exception](https://metacpan.org/pod/Test::Exception):

```perl
throws_ok { self_descriptive_number(1) } qr/base 1/, 'base 1';
throws_ok { self_descriptive_number(2) } qr/base 2/, 'base 2';
throws_ok { self_descriptive_number(3) } qr/base 3/, 'base 3';
throws_ok { self_descriptive_number(6) } qr/base 6/, 'base 6';
```

[Choroba's blog](http://blogs.perl.org/users/e_choroba/2020/01/perl-weekly-challenge-043-olympic-rings-and-self-descriptive-numbers.html).

## Jaldhar H. Vyas

[Jaldhar's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-043/jaldhar-h-vyas/perl/ch-2.pl) uses the numeric formula, and hard-coded list of bases to ignore. However, the formula does not work for bases smaller than 7, so the results for bases 4 and 5 are incorrect:

```
[weekly/rjt] challenge-043/⋯/perl %> ./ch-2.pl 4
1210
[weekly/rjt] challenge-043/⋯/perl %> ./ch-2.pl 5
13100
```

The expected results would be 1210, 2020, and 21200. This would be easily fixed, however, by either searching bases 4 and 5, or hard-coding the expected results for those non-generic cases.

Jaldhar uses the numeric formula to obtain the self-descriptive numbers, but opted to output his results in the target base, so he provided a conversion function:

```perl
sub base {
    my ($number, $base) = @_;
    my @digits = (0 .. 9, 'A' .. 'Z');
    my @result;
    while ($number > ($base - 1)) {
        my $digit = $number % $base;
        push @result, $digits[$digit];
        $number /=  $base;
    }
    push @result, $digits[$number];

    return join '', reverse @result;
}
```

[Jaldhar's blog](https://www.braincells.com/perl/2020/01/perl_weekly_challenge_week_43.html).

## Javier Luque

[Javier's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-043/javier-luque/perl/ch-2.pl) uses the base ≥ 7 definition, and has hard-coded answers for lesser bases. He shows us two similar functions: one that returns the results in base 10, and another that returns the results in the target base. I will list the target base version, here:

```perl
sub self_descriptive_x {
    my $b = shift;

    return 'no solution' if
        ( $b == 1 || $b == 2 ||
          $b == 3 || $b == 6);

    return 1210 if ($b == 4);
    return 21200 if ($b == 5);

    return
        $NUMS[($b - 4)] . '2' . 1 . 0 x ($b - 7) . '1000';
}
```

Javier's solution is fast. Hard-coding the bases < 7 means the solution has O(1) complexity.

There is one small bug, though: In base-4, there are actually two self-descriptive numbers: 1210 and 2020 (Happy New Year!). That's an easy fix, though.

[Javier's blog](https://perlchallenges.wordpress.com/2020/01/13/perl-weekly-challenge-043/).

## Laurent Rosenfeld

**Note:** I'm using Laurent's solution from his [blog](http://blogs.perl.org/users/laurent_r/2020/01/perl-weekly-challenge-43-olympic-rings-and-self-descripting-numbers.html), as it appears to be farther along than [the one currently checked in to the repository](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-043/laurent-rosenfeld/perl/ch-2.pl). By the way, his blog—as always—is well worth the read.

Laurent's solution hard-codes the invalid bases, uses the numeric base ≥ 7 for larger bases, and checks all cases for bases 4 and 5.

```perl
sub find_self_descriptive {
    my $b = shift;
    return "No self-descriptive number for base $b" 
        if $b < 4 or $b == 6;
    if ($b == 4 or $b == 5) {
        return check_all_cases ($b);
    }
    my $dec_num = ($b - 4) * $b ** ($b - 1) 
        + 2 * $b ** ($b - 2) + $b ** ($b - 3) + $b ** 3;
    my $base_num = to_base_b ($dec_num, $b);
    return "Number in base $b: $base_num; decimal: $dec_num";
}
```

The `check_all_cases()` sub handles the iteration through every possible number of a given base, skips numbers that don't end in zero, skips non-Niven numbers, and finally loops through the digits to check whether each digit describes its count:

```perl
sub check_all_cases {
    my $base = shift;;
    for my $num ($base ** ($base -1) .. $base ** $base -1) {
        my $num_in_b = to_base_b ($num, $base);
        next unless $num_in_b =~ /0$/;
        my @digits = split //, $num_in_b;
        my $sum = 0;
        $sum += $_ for split //, $num_in_b;
        next if $sum != $base;
        my $success = 1;
        for my $rank (0..$base - 1) {
            my $nb_digits = $digits[$rank];
            my $num_occ = $num_in_b =~ s/$rank/$rank/g;
            if ($num_occ != $nb_digits) {
                $success = 0;
                last;
            }
        }
        return "Number in base $base: $num_in_b; decimal: $num" if $success;
    }
}
```

Hard-coding the invalid bases (especially base 6) provides a significant performance boost.

[Laurent's blog](http://blogs.perl.org/users/laurent_r/2020/01/perl-weekly-challenge-43-olympic-rings-and-self-descripting-numbers.html)

## Roger Bell West

[Roger's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-043/roger-bell-west/perl/ch-2.pl) also hard-codes the invalid bases, and uses a different adaptation of the base ≥ 7 formula, by keeping the digits in an array:

```perl
my @n=(0) x $base;

$n[0]=1;

if ($base>6) {
  $n[0]=$base-4;
  $n[1]=2;
  $n[2]=1;
  $n[$base-4]=1
}
```

Now see if you can figure out how the following loop works, at a glance:

```perl
while (1) {
  my @o=@n;
  my %o;
  map {$o{$_}++} @o;
  foreach my $i (0..$#o) {
    $n[$i]=$o{$i} || 0;
  }
  if (join('',@o) eq join('',@n)) {
    last;
  }
}
```

The `map` and `foreach` lines concisely count the digits, so the `join`s can check if a number is self-descriptive. What is much less obvious, though, is how this loop actually mutates `@n` so it will try new numbers each time through.

The `$n[$i]=$o{$i} || 0` line modifies `@n`, but the `%o` hash is dependent on `@o`, which itself was a copy of `@n` at the top of the loop. It starts to make a lot more sense when you look at the actual values being produced. For base-5, this results in the following interesting sequence:

```
1 0 0 0 0
4 1 0 0 0
3 1 0 0 1
2 2 0 1 0
2 1 2 0 0
```

Roger is thus iteratively working his way towards a self-descriptive number by replacing each digit with its count from the current iteration. This needs to be repeated, but it converges quickly on the answer. Very nice!

One problem with Roger's method is with the base-4 numbers; it only finds the first one, because the loop exits as soon as it finds the first number. The `last` has to be there, though; otherwise the loop would get stuck on 1210 forever. This could be easily worked around in any number of ways, such as simply hard-coding the result for base-4 or having a special case to search that small base via brute force.

## Ruben Westerberg

[Ruben's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-043/ruben-westerberg/perl/ch-2.pl) exhaustively searches all base-*n* numbers and checks whether they are self-descriptive or not.

I did not think I would see signal handling when reviewing the solutions to this challenge. Ruben hooks `$SIG{INT}` to display all self-descriptive numbers found before exiting, so you can let the program run, press `^C` and then see the results:

```
:
NO: 3545165
NO: 3545166
NO: 3545200
^CStopping Search
Found Self Describing Numbers:
3211000
[weekly/rjt] challenge-043/⋯/perl %> 
```

Here is the main loop, and the `$SIG{INT}` handler:

```perl
my $run=1;
my @found;
$SIG{INT}=sub {print "Stopping Search\n"; $run=undef};
while ($run) {
  my $res=test($base,$num);
  if ($res) {
    print "***OK: $num***\n";
    push @found,$num;
    sleep 1;
  }
  else {
    print "NO: $num\n";
  }
  $i++;
  $num=decToBase($base,$i);
  last if length $num > $base
}
print "Found Self Describing Numbers:\n";
print "$_\n" for @found;
```

## Ryan Thompson

[My solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-043/ryan-thompson/perl/ch-2.pl) uses the string-concatenation version of the base ≥ 7 formula, and an optimized search of smaller bases. Although I was of course aware of the bases with no self-descriptive numbers, I chose to search those anyway. It would have been trivial to skip them. The `self_descriptive_base()` function returns all self-descriptive numbers of the given base, in that base:

```perl
sub self_descriptive_base {
    my $b = shift;

    return "$base[$b-4]21" . '0' x ($b-7) . '1000' if $b >= 7;

    grep { is_self_descriptive($_) }
     map { 10 * $_ } 10**($b-2) .. 10**($b-1) - 1;
}
```

Note that the `map` at the bottom multiplies the entire range by 10, so although I am iterating in base-10, I am effectively searching 1/10th of the numbers, for a 90% speedup. I can do this since self-descriptive numbers must be divisible by their base.

Here is the `is_self_descriptive()` function, which simply counts its digits and ensures that count is equal to the value of each digit:

```perl
sub is_self_descriptive {
    my @s = split '', shift;

    return if @s != sum @s; # Not a Niven number

    my %count;
    $count{ $s[$_] }++ for 0..$#s;

    all { $count{$_} == $s[$_] } 0..$#s;
}
```

[My blog](http://www.ry.ca/2020/01/self-descriptive-numbers/)

## Saif Ahmed

[Saif's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-043/saiftynet/perl/ch-2.pl) is very similar to Roger's, in that it starts with an array of digits and then mutates that array with the following `countAndPlace()` function:

```perl
sub countAndPlace{
    my ($string)=@_;
    my @split=split  //,$string;
    foreach my $pos (0..$#split){
      $split[$pos]= $decToBase[ grep { $_ eq  $decToBase[$pos] } @split];
    }
    return join "",@split;
}
```

As before, this works very well, but does miss the 2nd base-4 self-descriptive number, 2020, so a small modification or special case would be necessary for that.

Saif also implemented the string-based version of the base ≥ 7 formula, but uses this only as a "cheat" to validate the results of his `countAndPlace` method:

```perl
sub cheatGetSelfDescriptive{
  my $base=shift;
  return  $decToBase[$base-4]."21".("0"x($base-7))."1000" if $base >6;
  return "oops...failed!"
}
```

I like the fact that Saif "assumed no prior knowledge" of self-descriptive numbers, aside from knowing which bases had no self-descriptive numbers.

## wanderdoc

[wanderdoc's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-043/wanderdoc/perl/ch-2.pl) chooses to hard-code the results for all bases < 7, and then `join` together an array built up using the base ≥ 7 formula:

```perl
sub descr_create
{
     my $base = $_[0];
     if ( $base <= 3 or $base == 6 ) { return "Does not exist!" }
     if ( $base == 4 ) { return "1210 or 2020"; }
     if ( $base == 5 ) { return "21200"; }
     if ( $base > 64 ) { return "Is not implemented!"; }

     my @number = (0) x $base;

     $number[0] = $base - 4;
     $number[1] = 2;
     $number[2] = 1;
     $number[$#number - 3] = 1;
     my $num_str = join('', map $digits{$_}, @number);
     return $num_str;
}
```

There isn't much else I can say about wanderdoc's solution, except that it is a concise, efficient implementation. Well done.

***
***
## SEE ALSO

***

### Blogs this week:

(1) **Adam Russell** › [Perl & Prolog](https://adamcrussell.livejournal.com/14361.html)

(2) **Arne Sommer** › [Olympic Numbers with Raku](https://raku-musings.com/olympic-numbers.html)

(3) **Burkhard Nickels** › [Olympic Rings, Self-Descriptive Numbers](http://pearls.dyndnss.net/)

(4) **Dave Jacoby** › [Rings and Self-Description](https://jacoby.github.io/2020/01/17/perl-weekly-challenge-43-rings-and-selfdescription.html)

(5) **E. Choroba** › [Olympic Rings and Self-Descriptive Numbers](http://blogs.perl.org/users/e_choroba/2020/01/perl-weekly-challenge-043-olympic-rings-and-self-descriptive-numbers.html)

(6) **Jaldhar H. Vyas** › [Perl Weekly Challenge: Week 43](https://www.braincells.com/perl/2020/01/perl_weekly_challenge_week_43.html)

(7) **Javier Luque** › [Perl Weekly Challenge - 043](https://perlchallenges.wordpress.com/2020/01/13/perl-weekly-challenge-043/)

(8) **Ryan Thompson** › [Olympic Rings](http://www.ry.ca/2020/01/olympic-rings/) | [Self-Descriptive Numbers](http://www.ry.ca/2020/01/self-descriptive-numbers/)
