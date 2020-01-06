---
title: "Perl Weekly Review: Challenge - 040"
date: 2020-01-06T00:00:00+00:00
description: "Perl Weekly Review: Challenge - #040."
type: post
image: images/blog/p5-review-challenge-040.jpg
author: Mohammad S Anwar
tags: ["Perl"]
---
***
***
Continues from [**previous week**](/blog/review-challenge-039/).

Feel free to [**submit a merge request or open a ticket**](https://github.com/manwar/perlweeklychallenge) if you found any issues with this post. We highly appreciate and welcome your feedback.

For a quick overview, go through the [**original tasks**](/blog/perl-weekly-challenge-040/) and [**recap**](/blog/recap-challenge-040/) of the weekly challenge.

Additional feedback to the our Perl Weekly Challenge’s [**Twitter account**](https://twitter.com/perlwchallenge?lang=en) is much appreciated.

***
***
## Task #1
***
***

### Show multiple arrays content

You are given **two** or more arrays. Write a script to display values of each list at a given index.

For example:

#### Array 1: [ I L O V E Y O U ]

#### Array 2: [ 2 4 0 3 2 0 1 9 ]

#### Array 3: [ ! ? £ $ % ^ & * ]

We expect the following output:

    I 2 !
    L 4 ?
    O 0 £
    V 3 $
    E 2 %
    Y 0 ^
    O 1 &
    U 9 *

***

## Adam Russell

**Adam** reminded me about **Readonly**. I was first introduced to **Readonly** by **Damian Conway** book titled "Perl Best Practices". The magical line is where he finds the *$max_index*. Just love it.

```perl
use Readonly;
Readonly::Array my @A => qw/I L O V E Y O U/;
Readonly::Array my @B => qw/2 4 0 3 2 0 1 9/;
Readonly::Array my @C => qw/! ? £ $ % ^ & */;

sub display{
    my($arrays) = @_;
    my $max_index = (sort {$a <=> $b} map {scalar @{$_}} @{$arrays})[-1] - 1;
    for my $x (0 .. $max_index){
        for my $a (@{$arrays}){
            print $a->[$x] // "";
            print "\t";
        }
        print "\n";
    }
}

MAIN:{
    display([\@A, \@B, \@C]);
}
```

***

## Andrezgz

**Andrezgz** making use of **postderef** is really tricky. I hardly use it but find it cool. The magic line is:

#### $max = $_->@* if ($_->@* > $max)

```perl
use v5.20;
use feature qw(postderef);
no warnings qw(experimental::postderef);

my @arrays = (
    [qw/ I L O V E Y O U /],
    [qw/ 2 4 0 3 2 0 1 9 /],
    [qw/ ! ? £ $ % ^ & * /]
);

my $max=0;
for (@arrays) {
    $max = $_->@* if ($_->@* > $max);
}

for my $i (0.. $max - 1) {
    print $_->[$i].' ' for @arrays;
    print $/;
}
```

***

## Anton Fedotov

**Anton** came back after a short break. **Welcome back**, we missed you. I noticed the method call with **&**. I rarely see this notation now a days.

```perl
use v5.10;
use strict;
use warnings;

my @arr1 = qw( I L O V E Y O U );
my @arr2 = qw( T Z U Y U F R O M);
my @arr3 = qw( T W I C E );
my @arr4 = qw( ! ? £ $ % ^ & * );

&print_arrays(\@arr1, \@arr2, \@arr3, \@arr4);

sub print_arrays {
    my $max_size = 0;
    for (@_) {
        my $size = scalar @$_;
        $max_size = $size if $size > $max_size;
    }

    for my $i (0 .. $max_size) {
        for (@_) {
            if ($_->[$i]) { print $_->[$i] . ' ' }
            else { print '  ' };
        }
        print "\n";
    }
}
```

***

## Burkhard Nickels

**Burkhard** didn't try to be clever and kept it simple. **Nice** and **Easy**.

```perl
my @a1 = ('I','L','O','V','E','Y','O','U');
my @a2 = ('2','4','0','3','2','0','1','9');
my @a3 = ('!','?','£','$','%','^','&','*');

# Pound Sign: <AltGr><Shift><3> on Debian with german keyboard

for( my $i=0; $i<=$#a1; $i++ ) {
    print "$a1[$i] $a2[$i] $a3[$i]\n";
}
```

***

## Colin Crain

**Colin** solution gives importance to presentation as well as the task itself. I appreciate the extra care. Great work.

```perl
use strict;
use feature ":5.26";

use Data::Dumper;
## ## ## ## ## MAIN

## the given data:
my $a = ["I", "L", "O", "V", "E", "Y", "O", "U"];
my $b = [ 2, 4, 0, 3, 2, 0, 1, 9 ];
my $c = ['!', '?', '£', '$', '%', '^', '&', '*'];

## add an element to @a to show truncation
push $a->@*, 'X';

my $zipped = zip( $a, $b, $c );

for my $list ( $zipped->@* ) {
    say join ' ', $list->@*;
}

say '=' x 25;

## add more elements to @a to show the new behavior
push $a->@*, ('X') x 2, ('O') x 3;

my $zipped_undef = zip_undef( $a, $b, $c );

for my $list ( $zipped_undef->@* ) {
    say join ' ', $list->@*;
}

## ## ## ## ## SUBS

sub zip {
## interleaves into a list of lists, with an index for every element in the shortest input list
## longer lists will be truncated and the data unused
    my @output;
    my $shortest = (sort {$b <=> $a} map {scalar($_->@*)} @_)[0];
    for my $list ( @_ ){
        for my $idx (0..$shortest-1) {
            push $output[$idx]->@*, $list->[$idx];
        }
    }
    return \@output;
}

sub zip_undef {
## interleaves into a list of lists, with an index for every element in the longest input list
## shorter lists will be null padded with undefs to fit
    my @output;
    my $longest = ( sort {$a <=> $b} map {scalar($_->@*)} @_)[0];

    for my $list ( @_ ){
        for my $idx (0..$longest-1) {
            push $output[$idx]->@*, $list->[$idx];   ## this will autovivate undef elements as required
        }
    }
    return \@output;
}
```

***

## Duane Powell

**Duane** solution takes care of different sized arrays. I loved the variable naming convention i.e. **$AoA**.

```perl
use warnings;
use strict;
use feature qw( say );

my $AoA = [
    [qw( I L O V E Y O U !)],
    [qw( 2 4 0 3 2 0 1 9)],
    [qw( ! ? $ $ % ^ & * @ + -)],
];

my $max = 0;
foreach my $aref ( @{$AoA} ) {
    $max = (scalar(@{$aref}) > $max) ? scalar(@{$aref}) : $max;
}

foreach my $i (0 .. $max-1) {
    my $out;
    foreach my $aref ( @{$AoA} ) {
        $out .= defined($aref->[$i]) ? $aref->[$i] : " ";
    }
    say $out;
}
```

***

## Duncan C. White

**Duncan** used *substr()* very cleverly in the solution.

```perl
use strict;
use warnings;
#use Data::Dumper;

die "Usage: ch-1.pl ARRAY1 ARRAY2 [ARRAYn..]\n" if @ARGV<2;

my $n = @ARGV;
my $len = length($ARGV[0]);

foreach my $i (1..$#ARGV)
{
    my $al = length($ARGV[$i]);
    # find longest
    $len = $al if $al > $len;
}

foreach my $i (0..$len-1)
{
    my @el;
    foreach my $arg (@ARGV)
    {
        my $oneel = length($arg)>$i ? substr($arg,$i,1) : '?';
        push @el, $oneel;
    }
    say join( " ", @el );
}
```

***

## E. Choroba

**Choroba** used *binmode* to handle the *£* sign. I didn't realise when I came up with the task. Thanks for taking care of it. Also I liked how he used *map* as well.

```perl
use warnings;
use strict;
use feature qw{ say };
use utf8;

binmode *STDOUT, ':encoding(UTF-8)';

my @arrays = ([qw[ I L O V E Y O U ]],
              [qw[ 2 4 0 3 2 0 1 9 ]],
              [qw[ ! ? £ $ % ^ & * ]]);

for my $i (0 .. $#{ $arrays[0] }) {
    say join ' ', $i, map $_->[$i], @arrays;
}
```

***

## Javier Luque

**Javier** solution has the speciality how he calculated array sizes. I loved the mix use of *sort* and *map*.

```perl
use strict;
use warnings;
use feature qw /say/;

my $arrays = [
    [ qw (I L O V E Y O U) ],
    [ qw (2 4 0 3 2 0 1 9) ],
    [ qw (! ? £ $ % ^ & *) ],
];

# Sizes of the array
my @sizes =
    sort { $b <=> $a }
    map { scalar(@$_) } @$arrays;

# Loop through each array
for my $i (0 .. $sizes[0] - 1) {
    say join ' ',
        map { $_->[$i] // ' ' }
        @$arrays;
}
```

***

## Laurent Rosenfeld

**Laurent** is someone who would never miss any test case. There are plenty to learn from his solution. For me the magical line is:

#### say join "\t", map {$_ // "" } @$_ for @b;

```perl
use strict;
use warnings;
use feature qw/say/;

my @a = ( [ qw /I L O V E Y O U / ],
          [ qw /244 42 0 1233 222 0 / ],
          [ qw /! ???? £ $ %% ^ / ],
          [ qw /a b c d e f g h i j k/ ]
        );
my $max_size = 0;
for (@a) {
    $max_size = scalar @$_ if @$_ > $max_size;
}
my @b;
for my $i (0..$max_size - 1) {
    push @b, [ map { $a[$_][$i]} 0 .. @a - 1];
}
say join "\t", map {$_ // "" } @$_ for @b;
```

***

## Lubos Kolouch

**Lubos** way to dealing with parameter is the main attraction for me. I just love it.

```perl
use strict;
use warnings;
use feature qw /say/;
use Data::Dumper;

my $array_ref = shift // die 'No arrays passed';
my @arr = $array_ref;
die "Usage ch-1.pl \"[1 2 3 4][5 6 7 8]\"" unless ($arr[0] =~ / ^(\[(. *)+\])+$/msx);

my $arr_size;
my @all_array;

my $i=0;
for (split /\]/, $arr[0]) {
    $_ =~ s/\[//g;
    push @{$all_array[$i]}, split / /;
    $arr_size = scalar @{$all_array[$i]} unless $arr_size;
    die "arrays are not of the same size" unless scalar @{$all_array[$i]} == $arr_size;
    $i++;
}

for my $key (0..$arr_size-1) {
    for my $arr (0..scalar @all_array -1) {
            print $all_array[$arr][$key]." ";
    }
    say '';
}
```

***

## Peter Scott

Welcome back **Peter** after short break. The **one-liner** is really cool with the use of **END {}** block.

```perl
#!/bin/sh
cat <<'EOF' > /tmp/arrays
I L O V E Y O U
2 4 0 3 2 0 1 9
! ? £ $ % ^ & *
EOF
perl -lane '$i=0; push @{$x[$i++]}, $_ for @F; END{print "@$_" for @x}' /tmp/arrays
```

***

## Roger Bell_West

**Roger** solution is really *unique*. I enjoyed the solution thoroughly.

```perl
use strict;
use warnings;

my @a=(
    [qw(I L O V E Y O U)],
    [qw(2 4 0 3 2 0 1 9)],
    [qw(! ? £ $ % ^ & *)],
      );

my $ix=0;
my $r=1;
while ($r) {
  $r=0;
  my @out;
  foreach my $iy (0..$#a) {
    if (exists $a[$iy][$ix]) {
      push @out,$a[$iy][$ix];
      $r=1;
    } else {
      push @out,' ';
    }
  }
  if ($r) {
    print join(' ',@out),"\n";
  }
  $ix++;
}
```

***

## Ruben Westerberg

**Ruben** one-line is special *obfuscated* code. Take your time to decode it.

```perl
use strict;
use warnings;
my @aoa=([qw<I L O V E Y O U>], [qw<2 4 0 3 2 0 1 9>], [qw<! ? £ $ % ^ & * >]);
my @indexes=@ARGV==0?(2,3):@ARGV;

print "$_\n" for map {my $i=$_; join " ", map {$aoa[$_]->[$i]} 0..$#aoa} @indexes;
```

***

## Ryan Thompson

**Ryan** used *prototype* and came up with thorough solution.

```perl
use 5.010;
use warnings;
use strict;
use Carp;
use List::Util qw< max any >;
no warnings 'uninitialized';

sub my_zip6(\@\@;\@\@\@\@\@\@\@\@\@\@\@\@\@\@\@\@\@\@\@\@\@);
sub zip6ref($$;@);
sub zip6ref_check($$;@);

my @a1 = qw<I L O V E Y O U>;
my @a2 = qw<2 4 0 3 2 0 1 9>;
my @a3 = qw<! ? X $ % ^ & *>;

say join ' ', @$_ for my_zip6 @a1, @a2, @a3;

# Here's one solution, trying to match List::MoreUtils' behaviour
sub my_zip6(\@\@;\@\@\@\@\@\@\@\@\@\@\@\@\@\@\@\@\@\@\@\@\@) {
    my $max = max map $#$_, @_;  # Use the size of the longest array
    map { my $i = $_; [ map $_->[$i], @_ ] } 0..$max;
}

# And now the same code, with a different prototype, which is more flexible
sub zip6ref($$;@) {
    my $max = max map $#$_, @_;  # Use the size of the longest array
    map { my $i = $_; [ map $_->[$i], @_ ] } 0..$max;
}

# As above, but with a check to ensure all args are ARRAY refs. Slower.
sub zip6ref_check($$;@) {
    croak "Not an ARRAY ref" if any { 'ARRAY' ne ref } @_;
    my $max = max map $#$_, @_;  # Use the size of the longest array
    map { my $i = $_; [ map $_->[$i], @_ ] } 0..$max;
}
```

***

## Saif Ahmed

**Saif** covered up various use cases very elegantly. I liked the use of **say**, touch of **Raku**.

```perl
use feature "say";
my @arraysList=(                  # array containing 2 or more arrays (as anon array refs)
    [qw{I L O V E Y O U }],
    [qw{2 4 0 3 2 0 1 9 }],
    [qw{! ? £ $ % ^ & * }],
    );

say "Without an index list";
printAtIndex(\@arraysList);                   # call routine with no indices

say "\nWith a single index passed";
printAtIndex(\@arraysList, 5);                # call routine with a single index

say "\nWith a multiple indices passed";
printAtIndex(\@arraysList, [3,2,1,4]);        # call routine with list of indices

sub printAtIndex{
    my ($arrays,$indices)=@_;
    $indices//=[0..$#{@$arrays[0]}];           # if indices not specified make list of all indices
    $indices=[$indices] unless (ref $indices); # if index passed as scalar convert to arrayRef
    foreach my $index (@$indices){             # for each index provided..
       foreach my $array (@arraysList){        # for each array in the list
          print $$array[$index]," ";           # print indexed contents of these arrays
       };
       print "\n";                             # next line
    };
}
```

***

## Steven Wilson

**Steven** followed the simple multi-level *for loop* without any complexity. Easy to follow the solution.

```perl
use strict;
use warnings;

my @array_1 = qw[ I L O V E Y O U ];
my @array_2 = qw[ 2 4 0 3 2 0 1 9 ];
my @array_3 = qw[ ! ? £ $ % ^ & * ];
my @arrays  = [ \@array_1, \@array_2, \@array_3 ];

display_arrays( \@arrays );

sub display_arrays {
    my $arrays_ref = shift;
    my @arrays     = @$arrays_ref;
    for my $array_ref (@arrays) {
        my @array        = @$array_ref;
        my $max_index   = get_max_index($array_ref);
        my $no_of_arrays = scalar @array;
        for ( my $index = 0; $index < $max_index; $index++ ) {
            for ( my $array_no = 0; $array_no < $no_of_arrays; $array_no++ ) {
                defined @{$array[$array_no]}[$index]
                    ? print @{$array[$array_no]}[$index]
                    : print " ";
                print " ";
            }
            print "\n";
        }
    }
}

sub get_max_index {
    my $array_ref = shift;
    my @arrays    = @$array_ref;
    my $max       = 0;
    for my $array_ref (@arrays) {
        my @array = @$array_ref;
        if ( scalar @array > $max ) {
            $max = scalar @array;
        }
    }
    return $max;
}
```

***

## Ulrich Rieke

**Ulrich** taken a very different route with *minimum length*. Interesting approach.

```perl
use strict ;
use warnings ;

sub printListItems {
  my $minlength = @{$_[0]} + 0 ;
  foreach my $list ( @_ ) {
      my $len = @{$list} + 0 ;
      if ( $len < $minlength ) {
        $minlength = $len ;
      }
  }
  print "$minlength \n" ;
  my $i = 0 ;
  while ( $i < $minlength ) {
      foreach my $list ( @_ ) {
        print "${$list}[$i] " ;
      }
      print "\n" ;
      $i++ ;
  }
}

my @array1 = ( 'I', 'L' , 'O' , 'V', 'E' , 'Y', 'O' , 'U' ) ;
my @array2 = (2 , 4, 0, 3 , 2,  0 , 1, 9 ) ;
my @array3 = ('!',  '?' ,  '£' , '$' , '%' , '^', '&' , '*' ) ;
printListItems( \@array1 , \@array2 , \@array3 ) ;
```

***

## Wanderdoc

**Wanderdoc** introduced the new method **zip6** from the **CPAN** module **List::MoreUtils**. I love the solutions that promote **CPAN** distribution.

```perl
use utf8; # Source file encoding.
binmode (STDOUT, ":encoding(cp850)"); # '£' in Windows cmd.

my @arr_1 = qw(I L O V E Y O U);
my @arr_2 = qw(2 4 0 3 2 0 1 9);
my @arr_3 = qw(! ? £ $ % ^ & *);

print "@$_$/" for my_zip6(\@arr_1, \@arr_2, \@arr_3);

print "Now cheating with module: $/";

use List::MoreUtils qw(zip6);
print "@$_$/" for zip6 @arr_1, @arr_2, @arr_3;

sub my_zip6
{
     my @arefs = @_;
     my @result;
     my $imax = $#{$arefs[0]};
     for my $i ( 0 .. $imax )
     {
          my @row;
          for my $ar ( @arefs )
          {
               push @row, $ar->[$i];
          }
          push @result, [@row];
     }
     return @result;
}
```
***
***
## Task #2
***
***

### Sort SubList

You are given a list of numbers and set of indices belong to the list. Write a script to sort the values belongs to the indices.

For example,

#### List: [ 10, 4, 1, 8, 12, 3 ]

#### Indices: 0,2,5

We would sort the values at indices **0, 2 and 5** i.e. **10, 1 and 3**.

Final List would look like below:

#### List: [ 1, 4, 3, 8, 12, 10 ]

***

## Adam Russell

**Adam** played with sorted array very cleverly. I liked it.

```perl
use Readonly;
Readonly::Array my @A => qw/10 4 1 8 12 3/;
Readonly::Array my @INDICES => qw/0 2 5/;

my @sorted = @A;
my @sorted_values = sort {$a <=> $b} map {$A[$_]} @INDICES;
my @sorted_indices = sort {$a <=> $b} @INDICES;
for my $i (@sorted_indices){
    $sorted[$i] = shift @sorted_values;
}
print join(", ", @sorted) . "\n";
```

***

## Andrezgz

**Andrezgz** followed similar path to some extent like **Adam Russell** but with less code. A very clever coding.

```perl
use strict;
use warnings;

my @list = (10, 4, 1, 8, 12, 3);
my @indexes = (0,2,5);

my @sorted_values = sort {$a <=> $b} @list[@indexes];

splice @list, $_, 1, shift @sorted_values for (@indexes);

print join ',', @list;
```

***

## Anton Fedotov

**Anton** made use of **state** pragma. I have never used it myself in real project. I loved its use here.

```perl
use strict;
use warnings;
use v5.10;

my @numbers = (10, 4, 1, 8, 12, 3);
my @indices = (0, 2, 5);

say join ' ', @numbers;

my @arr;
push @arr, $numbers[$_] for @indices;
@arr = sort {$a <=> $b} @arr;

for (@indices) {
    state $i = 0;
    $numbers[$_] = $arr[$i++];
}

say join ' ', @numbers;
```

***

## Burkhard Nickels

**Burkhard** magical line simply bowled me. **Good Job**.

#### @a[0,2,5] = sort { $a <=> $b } ( @a[0,2,5] );

```perl
my @a = (10,4,1,8,12,3);
my @i = (0,2,5);
print "Before:", Dumper(\@a), "\n";

@a[0,2,5] = sort { $a <=> $b } ( @a[0,2,5] );
print "After: ", Dumper(\@a), "\n";
```

***

## Colin Crain

**Colin** found a way to use *splice*, very smart. A very different approach so far.

```perl
use warnings;
use strict;
use feature ":5.26";

## ## ## ## ## MAIN

my $list    = [ 10, 4, 1, 8, 12, 3 ];
my $indices = [ 0, 5, 2 ];

## presort the index set to make an ordered list from low to high
my @indices = sort { $a <=> $b } $indices->@*;

# OUTPUT
#
say "prechange list  : [ ", (join ', ', $list->@*), " ]";

## we get the values at the indices specified from the original list and sort
my @sorted = sort {$a <=> $b || $a cmp $b } map { $list->[$_] } @indices;

## reinsert the sorted data
splice( $list->@*, $_, 1, shift @sorted ) for @indices ;

# OUTPUT
#
say "postchange list : [ ", (join ', ', $list->@*), " ]";
```

***

## Duane Powell

**Duane** kept it short and simple.

```perl
use warnings;
use strict;
use feature qw( say );

my @a = qw( 10 4 1 8 12 3 );
my @i = qw( 0 2 5);

say join(',',@a);
my @temp;
foreach (@i) {
    push @temp, $a[$_];
}
@temp = sort {$a <=> $b} @temp;
foreach (@i) {
    $a[$_] = shift @temp;
}
say join(',',@a);
```

***

## Duncan C. White

**Duncan** magical line is really cool. It reminded me the power of **Perl**.

#### @array[@index] = @subarray;

```perl
use v5.10;  # to get "say"
use strict;
use warnings;
#use Data::Dumper;

die "Usage: ch-2.pl ARRAYLIST INDEXLIST\n" unless @ARGV==2;
my @array = split(/,/, $ARGV[0]);
my @index = split(/,/, $ARGV[1]);

my @subarray = @array[@index];
#die Dumper \@subarray;

@subarray = sort { $a <=> $b } @subarray;
#die Dumper \@subarray;

@array[@index] = @subarray;
#die Dumper \@array;

say "List: [ ", join(', ', @array), " ]";
```

***

## E. Choroba

No one can beat **Choroba**. I love the fact he always packs his solution with unit test. Great Work.

```perl
use warnings;
use strict;

my @list = (10, 4, 1, 8, 12, 3);
my @indices = (0, 2, 5);

my @sorted = @list;
@sorted[@indices] = sort { $a <=> $b } @sorted[@indices];

my @expected = (1, 4, 3, 8, 12, 10);

"@sorted" eq "@expected"
or die "Got:      @sorted\nExpected: @expected\n";
```

***

## Javier Luque

**Javier** never misses to have magical line in his work. This time it is:

#### my @sublist = sort {$a <=> $b} @list[@indices];

```perl
use strict;
use warnings;
use feature qw /say/;

my @list = (10, 4, 1, 8, 12, 3);
my @indices = (0, 2, 5);

# Create a sublist
my @sublist =
    sort {$a <=> $b} @list[@indices];

# Override the original array
my $i = 0;
for my $index (@indices) {
    $list[$index] = $sublist[$i++];
}

say join ',', @list;
```

***

## Laurent Rosenfeld

**Laurent** also took the same path like some of the members. The line does most of the work.

#### @numbers[@indices] = sort { $a <=> $b } @numbers[@indices];

```perl
use strict;
use warnings;
use feature qw/say/;
use Data::Dumper;

my @numbers = (10, 4, 1, 8, 12, 3);
my @indices = (0, 2, 5);

@numbers[@indices] = sort { $a <=> $b } @numbers[@indices];
say "@numbers";
```

***

## Lubos Kolouch

**Lubos** magic of dealing with command line array is super cool. The magical line wasn't easy to decode in first attempt.

#### $all_array[0][$all_array[1][$i]] = $sort_array[$i];

```perl
use strict;
use warnings;
use feature qw /say/;
use Data::Dumper;

my $array_ref = shift // die 'No arrays passed';
my @arr = $array_ref;
die "Usage ch-2.pl \"[10 4 1 8 12 3][0 2 5]\"" unless ($arr[0] =~ / ^(\[(\d+\h*)+\])+$/msx);

my $arr_size;
my @all_array;

my $i=0;
for (split /\]/, $arr[0]) {
    $_ =~ s/\[//g;
    push @{$all_array[$i]}, split / /;
    $arr_size = scalar @{$all_array[$i]} unless $arr_size;
    $i++;
}

my @sort_array;
for (@{$all_array[1]}) {
    push @sort_array, $all_array[0][$_];
}

@sort_array = sort {$a <=> $b} @sort_array;
$i=0;
for (@{$all_array[1]}) {
    $all_array[0][$all_array[1][$i]] = $sort_array[$i];
    $i++;
}

warn Dumper \$all_array[0];
```

***

## Roger Bell_West

**Roger** seems to be playing **golf game**. I find it hard to read if it is not laid out nicely. Having said that once you decode it, you will love it. Good Job.

```perl
use strict;
use warnings;

my @list=(10, 4, 1, 8, 12, 3);
my @indices=(0,2,5);

my @s=sort {$a <=> $b} map {$list[$_]} @indices;
map {$list[$indices[$_]]=$s[$_]} (0..$#indices);

print join(', ',@list),"\n";
```

***

## Ruben Westerberg

**Ruben**, you have beaten all with your solution. I still can't believe what I see here.

```perl
use strict;
use warnings;

my @a=(10,4,1,8,12,3);
my @i=(0,2,5);

$,=" ";
print sort {$a <=> $b} @a[@i];
```

***

## Ryan Thompson

**Ryan** is one member who I always look for magic. Although he is relative new to team but have impressed many already.

```perl
use 5.010;
use warnings;
use strict;

my @list = (10, 4, 1, 8, 12, 3);
my @idx  = (0, 2, 5);

@list[@idx] = sort { $a <=> $b } @list[@idx];

say "@list";
```

***

## Saif Ahmed

**Saif** presented the power of array slicing so elegantly. It refreshes my memory as well. Thank you **Saif**.

```perl
use feature 'say';

my @list= ( 10, 4, 1, 8, 12, 3 );               # list for selective sorting
my @Indices=(0,2,5);                            # list of indices to sort
say "Original list:- ",join " ",@list;          # display original list
@list[@Indices]=sort{$a <=> $b}@list[@Indices]; # sort index values
say "Modified list:- ",join " ",@list; # display results after modification
```

***

## Steven Wilson

**Steven** approach is similar to some of the member above. It is nicely laid out and well commented. Good work.

```perl
use strict;
use warnings;
use feature qw/ say /;

my @list_of_numbers = ( 10, 4, 1, 8, 12, 3 );
my @set_of_indices = ( 0, 2, 5 );

say "Initial List:\t", join " ", @list_of_numbers;
say "Indices:\t", join " ", @set_of_indices;

my @sub_list = map { $list_of_numbers[$_] } @set_of_indices;
my @sorted_sub_list = sort { $a <=> $b } @sub_list;

# Put sorted values back into list at indices
map { $list_of_numbers[ $set_of_indices[$_] ] = $sorted_sub_list[$_] }
    ( 0 .. ( scalar @set_of_indices - 1 ) );

say "Final List:\t", join " ", @list_of_numbers;
```

***

## Ulrich Rieke

**Ulrich** kept it simple and easy with the use of *for loop*.

```perl
use strict ;
use warnings ;

my @list = ( 10, 4, 1, 8, 12, 3 ) ;
my @indices = ( 0, 2, 5 ) ;
#a numerical comparison is to be enforced in the next 2 lines
my @sortedSlice = sort { $a <=> $b } @list[@indices] ;
my @sortedIndices = sort { $a <=> $b } @indices ;
my $arraylen = @sortedIndices + 0 ;
for ( my $i = 0 ; $i < $arraylen ; $i++ ) {
  $list[ $sortedIndices[ $i ]] = $sortedSlice[ $i ] ;
}
for my $item ( @list ) {
  print "$item " ;
}
print "\n" ;
```

***

## Wanderdoc

**Wanderdoc** magical line below is the one I always get confused. I will try to remember how it works now.

#### @val2sort{@idx2sort} = @array[@idx2sort];

```perl
my @array = (10, 4, 1, 8, 12, 3);
my @idx2sort = (0, 2, 5);

my %val2sort;

@val2sort{@idx2sort} = @array[@idx2sort];

my @idx_stack = sort {$a <=> $b } values %val2sort;

my @new_array;
for my $i ( 0 .. $#array )
{
     $new_array[$i] = exists $val2sort{$i} ?
          shift @idx_stack : $array[$i];
}

print join(', ', @new_array), $/;
print "Now saving indices not values:", $/;

@new_array = ();
my @idx_sorted =
     sort {$val2sort{$a} <=> $val2sort{$b}} keys %val2sort;

for my $i ( 0 .. $#array )
{
     $new_array[$i] = exists $val2sort{$i} ?
          $array[shift @idx_sorted] : $array[$i];
}

print join(', ', @new_array), $/;
```

***
***
## SEE ALSO
***
***

(1) [**Perl Weekly Challenge 040**](https://adamcrussell.livejournal.com/13711.html) by **Adam Russell**

(2) [**Perl Weekly Challenge 040: Multiple Arrays & Sort SubList**](http://blogs.perl.org/users/e_choroba/2019/12/perl-weekly-challenge-040-multiple-arrays-sort-sublist.html) by **E.Choroba**

(3) [**PERL WEEKLY CHALLENGE – 040**](https://perlchallenges.wordpress.com/2019/12/23/perl-weekly-challenge-040/) by **Javier Luque**

(4) [**Perl Weekly Challenge 40: Multiple Arrays Content and Sublist Sorting**](http://blogs.perl.org/users/laurent_r/2019/12/perl-weekly-challenge-40-multiple-arrays-content-and-sublist-sorting.html) by **Laurent Rosenfeld**

(5) [**Zip6**](http://www.ry.ca/2019/12/zip6/) by **Ryan Thompson**
