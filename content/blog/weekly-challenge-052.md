---
title: "BLOG: The Weekly Challenge #052"
date: 2020-03-23T00:00:00+00:00
description: "Blog for the weekly challenge #052."
type: post
image: images/blog/weekly-challenge-052.jpg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

I look forward to the weekly challenges only to learn something new in **Raku**. I would like to thank many people (unfair to name few here) who guided me every time I am stuck, thanks to the Gang at **[Twitter](https://twitter.com/PerlWChallenge)**.

As the pattern I always follow, I started with **Perl** solution. I would not waste any time explaining my code as it is self explanatory.

***
***

# PERL

***
***

## Task #1: Stepping Numbers

***

```perl
#!/usr/bin/perl

use strict;
use warnings;

my $start = $ARGV[0] || 100;
my $stop  = $ARGV[1] || 999;

die "ERROR: Invalid start number [$start]\n"
    unless ($start >= 100 &&
            $start <= 999);
die "ERROR: Invalid stop  number [$stop]\n"
    unless ($start <= $stop &&
            $stop  >= 100   &&
            $stop  <= 999);

while ($start <= $stop) {
    my ($d1, $d2, $d3) = split //, $start, 3;
    if ( ((($d1 - $d2) == 1) && (($d2 - $d3) == 1))
         || ((($d2 - $d1) == 1) && (($d3 - $d2) == 1)) ) {
        print "$start\n";
    }
    $start++;
}
```

***

## Task #2: Lucky Winner

***
***

This was my favourite of the two tasks. In my first draft, I decided to let **Machine** picks the coin first. But later I found out after checking out **[E. Choroba](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/e-choroba/perl/ch-2.pl)** solution, the first player has advantage other the second player. Later I was reading the **[blog](http://blogs.perl.org/users/c_y_fung/2020/03/cys-take-on-perl-weekly-challenge-052.html)** by fellow **Team PWC**, member **Cheok-Yin Fung** and read the comment by **Toby Inskter** that whoever picks **£2 coin** first is the winner. He even suggested that there should be multiple coins to make it even more challenging. However, it was too late to make any changes to the task, I decided to focus on what is required as of now.

I implemented the random selection of player as suggested by **E. Choroba**.

```perl
my $current = int rand(2);
```

I also declared hashref _$coins_ to keep the coins collected and total amount in the bank for each player.

```perl
my $coins = {
    100 => "£1", 50 => "50p",   1 => "1p", 10 => "10p",
      5 => "5p", 20 => "20p", 200 => "£2",  2 => "2p" ,
};
```

Rest of code is just straight forward, nothing great about it.

```perl
#!/usr/bin/perl

use strict;
use warnings;

my $coins = {
    100 => "£1", 50 => "50p",   1 => "1p", 10 => "10p",
      5 => "5p", 20 => "20p", 200 => "£2",  2 => "2p" ,
};

my $table   = [ keys %$coins ];
my $players = {
    0 => { "name" => "Human",   "bank" => 0, "coins" => [] },
    1 => { "name" => "Machine", "bank" => 0, "coins" => [] },
};

# Pick random player 0 or 1.
# DISCLAIMER:
# E. Choroba found out the player who picks the coin
# first is always the winner.
my $current = int rand(2);

my $coin;
while ($#$table) {
    if ($table->[0] > $table->[-1]) {
        $coin = shift @$table;
    }
    else {
        $coin = pop @$table;
    }

    $players->{$current}->{bank} += $coin;
    push @{$players->{$current}->{coins}}, $coins->{$coin};

    $current = ($current)?(0):(1);
}

$coin = shift @$table;
$players->{$current}->{bank} += $coin;
push @{$players->{$current}->{coins}}, $coins->{$coin};

_declare_lucky_winner($players);
_show_coins($players);
```

The handy **sub _declare_winner()** and **sub _show_coins()** as below:

```perl
sub _declare_lucky_winner {
    my ($players) = @_;

    print "The lucky winner is ";
    if ($players->{0}->{bank} > $players->{1}->{bank}) {
        print $players->{0}->{name};
    }
    else {
        print $players->{1}->{name};
    }
    print ".\n";
}

sub _show_coins {
    my ($players) = @_;

    foreach (0..1) {
        print sprintf("%s picked coins %s.\n",
            $players->{$_}->{name}, join(", ", @{$players->{$_}->{coins}}) );
    }
}
```

***

# RAKU

***
***

## Task #1: Stepping Numbers

***

Now it is time to get serious and focus. One of my favourite **[routine comb()](https://docs.raku.org/routine/comb)** of **Raku** came very handy in this task. As per my understanding, it works like **split()** in **Perl**. I also used **[Zip metaoperator](https://docs.raku.org/language/operators#Zip_metaoperator)** and **[Reduction metaoperator](https://docs.raku.org/language/operators#Reduction_metaoperators)** in this task.

With the above handy routine and metaoperators, I was ready to formulate my logic and came up with this:

```perl6
    ([==] $start.comb("") Z- <0 1 2>);
```

Lets follow the sequence, in my humble opinion, **$start.comb("")**, would split the **3 digits** number into individual digit. After that we apply **Zip metaoperator (Z-)** with **<0 1 2>**. What this effectively doing is something like below:

    <first digit>  - 0
    <second digit> - 1
    <third digit>  - 2

and returns 3 numbers at the end. Finally applying **Reduction metaoperator**, **[==]** to the end result.

Just to explain, the **[==]** is basically doing this and return true or false:

    <first digit> == <second digit> == <third digit>

Here is the final version:

```perl6
#!/usr/bin/env perl6

use v6.c;

sub MAIN(Int $start is copy = 100, Int $stop = 999) {

    die "ERROR: Invalid start [$start]." if $start < 100;
    die "ERROR: Invalid stop [$stop]."   if $stop  > 999 || $stop < $start;

    while $start <= $stop {
        say $start if ([==] $start.comb("") Z- <0 1 2>)
                      ||
                      ([==] $start.comb("") Z- <2 1 0>);
        $start++;
    }
}
```

***

## Task #2: Lucky Winner

***

As I said above, this task was my favourite and it gave me lots of opportunity to learn new things in **Raku**. I will go through every bit in it just to remind myself so that I don't forget next time.

I noticed, defining **hash** doesn't need braces. For example, in **Perl**, I always do something like below:

```perl
    my %hash = ( 1 => "a", 2 => "b", 3 => "c"3 );
```

but in **Raku**, I can do something like this to define all the coins used in this task:

```perl6
    my %coins =
        100 => "£1", 50 => "50p",   1 => "1p", 10 => "10p",
          5 => "5p", 20 => "20p", 200 => "£2",  2 => "2p"
    ;
```

Now I wanted to create a list of keys of the hash **%coins**.

So this is what I did.

```perl6
    my @table = ();
    for %coins.keys -> $c {
        push @table, $c;
    }
```

Now time to mix up the coins in the list, so it arranges the coins in random order every time.

I used **[routine pick](https://docs.raku.org/routine/pick)** to ramdomize the elements in the list.

```perl6
    @table = @table.pick(@table);
```

The best finding of this task to figure out how find random number between 0 and 1.

This is what I found on the web using the **routine pick**.

```perl6
    my Int $current = (^2).pick;
```

Another find in my fight today, to find the last member of array, we do **$array[-1]** in **Perl**, right?

However, in **Raku**, it is completely out of this world, **@array[*-1]**.

Rest is as usual stuff and the final version is as below:

```perl6
#!/usr/bin/env perl6

use v6.c;

sub MAIN() {
    # Setup coins with description
    my %coins =
        100 => "£1", 50 => "50p",   1 => "1p", 10 => "10p",
          5 => "5p", 20 => "20p", 200 => "£2",  2 => "2p"
    ;

    # Arrange coins on the table
    my @table = ();
    for %coins.keys -> $c {
        push @table, $c;
    }
    @table = @table.pick(@table);

    # Setup players for the game
    my %players =
        0 => { "name" => "Human",   "bank" => 0, "coins" => [] },
        1 => { "name" => "Machine", "bank" => 0, "coins" => [] },
    ;

    # Pick random player 0 or 1.
    # DISCLAIMER:
    # E. Choroba found out the player who picks the coin
    # first is always the winner.
    my Int $current = (^2).pick;

    # Play the game now
    my $coin;
    while @table.elems {
        if @table[0] > @table[*-1] {
            $coin = @table.shift;
        }
        else {
            $coin = @table.pop;
        }

        %players{$current}<"bank"> += $coin;
        %players{$current}<"coins">.append(%coins{$coin});

        $current = ($current)??(0)!!(1);
    }

    declare-lucky-winner(%players);
    show-coins(%players);
}

sub declare-lucky-winner(%players) {
    if %players<0><"bank"> > %players<1><"bank"> {
        say "The lucky winner is " ~ %players<0><name> ~ ".";
    }
    else {
        say "The lucky winner is " ~ %players<1><name> ~ ".";
    }
}

sub show-coins(%players) {
    for 0..1 -> $player {
        say %players{$player}<name> ~ " picked coins " ~
            @(%players{$player}<"coins">).join(", ") ~ ".";
    }
}
```

That's it for this week. Speak to you soon.
