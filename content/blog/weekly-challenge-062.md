---
title: "BLOG: The Weekly Challenge #062"
date: 2020-05-30T00:00:00+00:00
description: "Blog for the weekly challenge #062."
type: post
image: images/blog/weekly-challenge-062.jpg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

# HEADLINE
***

Once again, **Neil Bowers**, came up with another exciting task for all **Team PWC** members. Like always, it was fun task. Thanks to **Ryan** for providng sample data and expected result based on the definition of the task. Half the job done already. The only thing left for the us, is get on with the job. I noticed **Raku** needed slightly different approach then the **Perl**. It could be I am doing something very badly. I am happy to correct myself, if you find anything silly. More on this, later down below.

However the second task of the week, **N Queens**, turned out to tough nut to crack for me. For the first, since I started contributing, I gave up on this. Technically speaking, I did attempt to solve it with the help of my **11 year old** daughter, but it was only limited to **2D** rather than **3D** as expected in the task. Therefore I decided not to submit my solution. Having said that I didn't want to loose my work, so just for record, I am sharing in this blog, just in case, if I want to re-visit the code.

Let me share my solutions to the **[Perl Weekly Challenge - 062](/perl-weekly-challenge-062)**.

***
<br>

## TASK #1 › Sort Email Addresses
#### Submitted by **[Neil Bowers](http://neilb.org)**
#### Reviewed by **[Ryan Thompson](https://ry.ca)**
<br>

Write a script that takes a list of email addresses (one per line) and sorts them first by the domain part of the email address, and then by the part to the left of the @ (known as the mailbox).

Add a -u option which only includes unique email addresses in the output, just like sort -u.

***
<br>

As per the tradition, first I defined helper **sub sort_data()** to deal the core work. The trick lies in how the data is captured. For regular sort, I used **array** whereas for unique sort I used **hash** as described below. The subroutine also dealing with parameter validation, that makes it **one-stop** solution.

The best line in the subroutine is below:

```perl
foreach (reverse sort { lc $a->[0] cmp lc $b->[0] || lc $a->[1] cmp $b->[1] } @source) {
```

This is something, that I learnt here at **Perl Weekly Challenge**.

Please find below the complete definition of **sub sort_data()**.

```perl
sub sort_data {
    my ($file, $flag) = @_;

    die "ERROR: Missing data file.\n"
        unless defined $file;

    die "ERROR: Invalid flag [$flag].\n"
        if (defined $flag && $flag !~ /^\-u$/);

    open (my $F, "<:encoding(utf8)", $file)
        or die "ERROR: Can't open $file: $!\n";

    my @source = ();
    my $source = ();
    while (my $row = <$F>) {
        chomp $row;
        my ($mailbox, $domain) = split /\@/, $row, 2;
        push @source, [$mailbox, $domain];
        if ($flag) {
            $source->{$mailbox} = $domain;
        }
    }

    close($F);

    my $sorted = [];
    if ($flag) {
        foreach (sort { lc $source->{$a} cmp lc $source->{$b} } sort keys %$source) {
            push @$sorted, join "@", $_, $source->{$_};
        }
    }
    else {
        foreach (reverse sort { lc $a->[0] cmp lc $b->[0] || $a->[1] cmp $b->[1] } @source) {
            push @$sorted, join "@", @$_;
        }
    }

    return $sorted;
}
```

Thanks to the task, I got to try **File** operation in **Raku**. Like always, I fall in love with **Raku** once more. I like the **no nonsense** approach in **Raku**. The best part is, no need to import any external library, everything is builtin.

You don't believe me? This is what I mean :-)

The following line in **Perl**,

```perl
open (my $F, "<:encoding(utf8)", $file)
    or die "ERROR: Can't open $file: $!\n";
```

becomes this in **Raku**.

```perl6
my $io := $file.IO;
```

Similary the following line in **Perl**,

```perl
while (my $row = <$F>) {
```

became this in **Raku**.

```perl6
for $io.lines -> Str $line {
```

Rest is just the straight translation of **Perl** into **Raku**.

```perl6
sub sort-data(Str $file, Bool $unique?) {

    my $io := $file.IO;
    die "ERROR: '$file' not found"    unless $io.e;
    die "ERROR: '$file' not readable" unless $io.r;

    my @source = ();
    my %source = ();
    for $io.lines -> Str $line {
        my ($mailbox, $domain) = $line.split("@");
        push @source, [$mailbox, $domain];
        if $unique {
            %source.{$mailbox} = $domain;
        }
    }

    my $sorted = [];
    if $unique {
        for %source.sort({ $^a.value.lc cmp $^b.value.lc || $^a.key cmp $^b.key }) -> $k {
            my $_k = $k.keys;
            my $_v = $k.values;
            $sorted.push: ($_k, $_v).join("@");
        }
    }
    else {
        for @source.sort({ $^a.[0].lc cmp $^b.[0].lc || $^a.[1] cmp $^b.[1] }).reverse -> $k {
            $sorted.push: $k.join("@");
        }
    }

    return $sorted;
}
```

The standalone app becomes just a thin wrapper around the above helper subroutine.

```perl
my $FILE = $ARGV[0];
my $FLAG = $ARGV[1];

my $sorted = sort_data($FILE, $FLAG);
print join "\n", @$sorted, "\n";
```

The power of **MAIN()** gives us the flexibility to impose parameter validation. We are also getting named parameter without putting any extra effort. The `:$file` gives us named parameter i.e. `--file=<Str>` and it is required parameter. This is what I call, best value for your money.

How about the second parameter `:$unique?`

Well, I am sure, you must have guessed it already. It gives us `--unique`, an optional parameter.

Rest is just the wrapper around **sub sort-data()**.

```perl6
sub MAIN(Str :$file, Bool :$unique?) {

    my $sorted = sort-data($file, $unique);
    say $sorted.join("\n");
}
```

To get the unit test, I just used the sample data provided in the task. Nothing great.

```perl
use Test::More;
use Test::Deep;

is_deeply ( sort_data('../data.txt'),
            [ 'user@alpha.example.org',
              'rjt@cpan.org',
              'rjt@CPAN.org',
              'Name@example.org',
              'name@example.org',
            ],
            'regular sort' );

is_deeply ( sort_data('../data.txt', '-u'),
            [ 'user@alpha.example.org',
              'rjt@CPAN.org',
              'Name@example.org',
              'name@example.org',
            ],
            'unique sort' );

done_testing;
```

Same as **Perl**, nothing new to talk about.

```perl6
use Test;

is-deeply sort-data('../data.txt'),
          [ 'user@alpha.example.org',
            'rjt@cpan.org',
            'rjt@CPAN.org',
            'Name@example.org',
            'name@example.org',
          ],
          'regular sort';

is-deeply sort-data('../data.txt', True),
          [ 'user@alpha.example.org',
            'rjt@CPAN.org',
            'Name@example.org',
            'name@example.org',
          ],
          'unique sort';

done-testing;
```

<br>

## TASK #2 › N Queens
#### Submitted by **[Ryan Thompson](https://ry.ca)**
***
<br>

A standard 8×8 chessboard has 64 squares. The Queen is a chesspiece that can attack in 8 directions, as shown by the green shaded squares below:

<img src="/images/blog/Chessboard.svg" width=400 />

Your job is to write a script to work with a three dimensional chess *cube,* M×M×M in size, and find a solution that maximizes the number of queens that can be placed in that cube without attacking each other. Output one possible solution.

***
<br>

When we (**Ryan and I**) agreed on this task for the weekly challenge, I thought, although, it was difficult task but doable. The most difficult bit, at least for me, was to visualise the workings in **3D** format. I looked up on web for explanation but couldn't find any to my satisfaction. We received the following **Team PWC** members solutions as of now **1:30pm Saturday 30, 2020**.

### Perl: **[Javier Luque](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-062/javier-luque/perl/ch-2.pl)**, **[Niels van Dijke](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-062/perlboy1967/perl/ch-2.pl)** and **[Roger Bell_West](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-062/roger-bell-west/perl/ch-2.pl)**.

### Raku : **[Luca Ferrari](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-062/luca-ferrari/raku/ch-2.p6)** and **[Sangeet Kar](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-062/sangeet-kar/raku/ch-2.raku)**.

<br>

**Sangeet Kar** shared the **[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-062/sangeet-kar/python/ch-2.py)** solution as well.

I haven't checked every solutions yet but will do when I find spare moments.

I didn't want to let it go without a fight. I asked my **11 year old** daughter to help me with **2D** solution. We did it together in the end.

First thing first, we need to create playing chessboard of giving `$N` size.

```perl
sub create_board {
    my ($N) = @_;

    my $board = [];
    foreach my $r (0 .. $N-1) {
        foreach my $c (0 .. $N-1) {
            $board->[$r][$c] = ' ';
        }
    }

    return $board;
}
```
Now I want to print the chessboard, there is one to print border line for size `8x8`.

       +---+---+---+---+---+---+---+---+

```perl
sub print_line {
    my ($col) = @_;

    print "   ";
    foreach (0 .. $col) {
        print "+---";
    }
    print "+\n";
}
```

Similary, we have subroutine to display footer for `8x8`.

         a   b   c   d   e   f   g   h

```perl
sub print_footer_label {
    my ($col) = @_;

    print "     ";
    my $char = 'a';
    foreach (0 .. $col) {
        print "$char   ";
        $char++;
    }
    print "\n";
}
```

Together with above helper subroutines, we now have something to show chessboard for `8x8`.

```perl
sub show_board {
    my ($board) = @_;

    my $row = $#$board;
    my $col = $row;
    my $j   = $row+1;
    foreach my $r (0 .. $row) {
        print_line($col);
        print sprintf("%2s ", $j);
        foreach my $c ( 0 .. $col) {
            print sprintf("| %s ", $board->[$r][$c]);
        }
        print "|\n";
        --$j
    }
    print_line($col);
    print_footer_label($col);
}
```

       +---+---+---+---+---+---+---+---+
     8 |   |   |   |   |   |   |   |   |
       +---+---+---+---+---+---+---+---+
     7 |   |   |   |   |   |   |   |   |
       +---+---+---+---+---+---+---+---+
     6 |   |   |   |   |   |   |   |   |
       +---+---+---+---+---+---+---+---+
     5 |   |   |   |   |   |   |   |   |
       +---+---+---+---+---+---+---+---+
     4 |   |   |   |   |   |   |   |   |
       +---+---+---+---+---+---+---+---+
     3 |   |   |   |   |   |   |   |   |
       +---+---+---+---+---+---+---+---+
     2 |   |   |   |   |   |   |   |   |
       +---+---+---+---+---+---+---+---+
     1 |   |   |   |   |   |   |   |   |
       +---+---+---+---+---+---+---+---+
         a   b   c   d   e   f   g   h


The fun part was to get the logic for safe cell. This is what we got at the end.

```perl
sub is_safe {
    my ($board, $row, $col) = @_;

    foreach my $c (0 .. $col) {
        return 0 if ($board->[$row][$c] eq 'Q');
    }

    my $r = $row;
    my $c = $col;
    while ($r >= 0 && $c >= 0) {
        return 0 if ($board->[$r][$c] eq 'Q');
        $r--;
        $c--;
    }

    $r = $row;
    $c = $col;
    while ($r <= $#$board && $c >= 0) {
        return 0 if ($board->[$r][$c] eq 'Q');
        $r++;
        $c--;
    }

    return 1;
}
```

Time to place the **Queen** on the chessboard.

```perl
sub place_queen {
    my ($board, $col) = @_;
    $col = 0 unless defined $col;

    return 1 if ($col > $#$board);

    foreach my $row (0 .. $#$board) {
        if (is_safe($board, $row, $col)) {
            $board->[$row][$col] = 'Q';
            return 1 if (place_queen($board, $col+1));
            $board->[$row][$col] = ' ';
        }
    }

    return 0;
}
```

Lets get it to work.

```perl
my $N = $ARGV[0];
die "ERROR: Missing N.\n"          unless defined $N;
die "ERROR: Invalid N=$N (>=4).\n" unless ($N >= 4);

my $board = create_board($N);
place_queen($board);
show_board($board);
```

     $ perl ch-2.pl 8

       +---+---+---+---+---+---+---+---+
     8 | Q |   |   |   |   |   |   |   |
       +---+---+---+---+---+---+---+---+
     7 |   |   |   |   |   |   | Q |   |
       +---+---+---+---+---+---+---+---+
     6 |   |   |   |   | Q |   |   |   |
       +---+---+---+---+---+---+---+---+
     5 |   |   |   |   |   |   |   | Q |
       +---+---+---+---+---+---+---+---+
     4 |   | Q |   |   |   |   |   |   |
       +---+---+---+---+---+---+---+---+
     3 |   |   |   | Q |   |   |   |   |
       +---+---+---+---+---+---+---+---+
     2 |   |   |   |   |   | Q |   |   |
       +---+---+---+---+---+---+---+---+
     1 |   |   | Q |   |   |   |   |   |
       +---+---+---+---+---+---+---+---+
         a   b   c   d   e   f   g   h

***

That's it for this week. Speak to you soon.
