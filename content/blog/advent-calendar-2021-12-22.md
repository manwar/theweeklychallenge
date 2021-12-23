---
title: "Advent Calendar - December 22, 2021"
date: 2021-12-22T00:00:00+00:00
description: "Advent Calendar - December 22, 2021."
type: post
image: images/blog/2021-12-22.jpg
author: Javier Luque
tags: ["Perl","Raku"]
---

## [**Advent Calendar 2021**](/blog/advent-calendar-2021)
### | [**Day 21**](/blog/advent-calendar-2021-12-21) | **Day 22** | [**Day 23**](/blog/advent-calendar-2021-12-23) |
***

The gift is presented by [**Javier Luque**](/blog/meet-the-champion-037). Today he is talking about his solution to [**"The Weekly Challenge - 076"**](/blog/perl-weekly-challenge-076). This is re-produced for **Advent Calendar 2021** from the original [**post**](https://perlchallenges.wordpress.com/2020/09/04/perl-weekly-challenge-076/) by `Javier Luque`.

***

<br>

## Task #2: Word Search

<br>

Write a script that takes two file names. The first file would contain `word search grid` as shown below. The second file contains `list of words`, one word per line. You could even use local `dictionary file`.

Print out a list of all words seen on the grid, looking both `orthogonally` and `diagonally`, `backwards` as well as `forwards`.

<br>

## Search Grid

<br>

    B I D E M I A T S U C C O R S T
    L D E G G I W Q H O D E E H D P
    U S E I R U B U T E A S L A G U
    N G N I Z I L A I C O S C N U D
    T G M I D S T S A R A R E I F G
    S R E N M D C H A S I V E E L I
    S C S H A E U E B R O A D M T E
    H W O V L P E D D L A I U L S S
    R Y O N L A S F C S T A O G O T
    I G U S S R R U G O V A R Y O C
    N R G P A T N A N G I L A M O O
    E I H A C E I V I R U S E S E D
    S E T S U D T T G A R L I C N H
    H V R M X L W I U M S N S O T B
    A E A O F I L C H T O D C A E U
    Z S C D F E C A A I I R L N R F
    A R I I A N Y U T O O O U T P F
    R S E C I S N A B O S C N E R A
    D R S M P C U U N E L T E S I L

***

<br>

For this challenge, I found a good dictionary file on the web as the mac one only found `39 words`.

I then loaded the letters into a matrix and the possible words into a hash and proceeded to run a search pattern running from the top left letter to the bottom right, being careful of boundary conditions. Each of the `8 ortho directions` were searched against the hash until a boundary was hit.

<br>

### Perl 5 Solution

<br>

```perl
#!/usr/bin/perl
# Test: ./ch-2.pl
use Modern::Perl;
use Data::Dumper;

my $matrix = letters_to_matrix(shift);
my $words  = dictionary_to_hash(shift);

my $max_height = scalar @$matrix;
my $max_width  = scalar @{$matrix->[0]};
my @answers;

# Loop through each letter
# from left to right
for my $i (0 .. $max_height - 1) {
    for my $j (0 .. $max_width - 1) {
        push @answers,
             find_words($matrix, $words, $i,
                        $j, $max_height, $max_width);
    }
}

say "Found " . scalar(@answers) . " words:";
say join ', ', sort @answers;

sub find_words {
    my ($matrix, $words, $row, $col, $h, $w) = @_;
    my @found;

    # Orthogonal directions with 1 on top
    # 1t 2tr 3r 4br 5b 6bl 7l 8tl
    for my $x (1 .. 8) {
        my $i = $row;
        my $j = $col;
        my $possible_word = '';

        while ($i >= 0 && $j >=0 && $i < $h && $j < $w) {
            $possible_word .= lc($matrix->[$i][$j]);

            push @found, $possible_word
                if ($words->{$possible_word});

            # Next position calculations
            $i-- if ($x == 1 || $x == 2 || $x == 8);
            $i++ if ($x == 4 || $x == 5 || $x == 6);
            $j-- if ($x == 6 || $x == 7 || $x == 8);
            $j++ if ($x == 2 || $x == 3 || $x == 4);
        }
    }

    return @found;
}

# Load the letters into a matrix
sub letters_to_matrix {
    my $filename = shift || 'challenge.txt';
    my @letter_matrix;

    open(my $fh, '<:encoding(UTF-8)', $filename) || die "$@";
    while (my $row = <$fh>) {
        chomp $row;
        my @letters = split (' ', $row);
        push @letter_matrix, \@letters;
    }

    return \@letter_matrix
}

# Load the dictionary into memory
sub dictionary_to_hash {
    my $filename = shift || 'words.txt';
    my %possible_words;

    # Challenge only wants words greater
    # than 5 so just keep those
    open(my $fh, '<:encoding(UTF-8)', $filename) || die "$@";
    while (my $row = <$fh>) {
        chomp $row;
        $possible_words{lc($row)} = 1
            if (length($row) >= 5);
    }
    return \%possible_words;
}
```

<br>

### Output

<br>

```perl
$ ./ch-2.pl

Found 87 words:
acies, aimed, align, alose, angil, antes, argos, arose, ashed, ation, blunt, blunts, broad, buffa, buries, butea, caeli, clove, cloven, clune, const, constitution, constitutions, cosin, croon, depart, departed, duddie, enter, filch, garlic, goats, grieve, grieves, grith, hazard, hugin, ileac, izing, liens, lunts, malign, malignant, malls, margo, meroe, midst, midsts, neuma, ought, ovary, parte, parted, pasmo, patna, pudgiest, quash, quashed, raias, raped, resor, roser, ruses, shazar, shrine, shrines, sices, social, socializing, soyas, spasm, spasmodic, staun, succor, succors, tallu, talos, talose, theor, theorem, theorems, traci, tracie, virus, viruses, wifie, wigged
```

<br>

### Raku Solution

<br>

```perl6
# Test: perl6 ch-2.p6

multi MAIN { MAIN("challenge.txt", "words.txt") };
multi MAIN(Str $letter_file, Str $word_file) {
    my @matrix = letters-to-matrix($letter_file);
    my %words  = dictionary-to-hash($word_file);
    my @answers;

    my $max_height = @matrix.elems;
    my $max_width  = @matrix.[0].elems;

    for (0 .. $max_height - 1) -> $i {
        for (0 .. $max_width - 1) -> $j {
            my @found =
                find-words(@matrix, %words, $i,
                          $j, $max_height, $max_width);
            @answers.push: @found
                if @found.elems;
        }
    }
    say "Found " ~  @answers.List.flat.elems ~ " words:";
    say @answers.List.flat.sort.join(", ");
}

sub find-words(@matrix, %words, $row, $col, $h, $w) {
    my @found;

    # Orthogonal directions with 1 on top
    # 1t 2tr 3r 4br 5b 6bl 7l 8tl
    for (1 .. 8) -> $x {
        my $i = $row;
        my $j = $col;
        my $possible_word = '';

        while ($i >= 0 && $j >=0 && $i < $h && $j < $w) {
            $possible_word ~= @matrix.[$i][$j].lc;

            @found.push($possible_word)
                if (%words{$possible_word});

            # Next position calculations
            $i-- if ($x == 1 || $x == 2 || $x == 8);
            $i++ if ($x == 4 || $x == 5 || $x == 6);
            $j-- if ($x == 6 || $x == 7 || $x == 8);
            $j++ if ($x == 2 || $x == 3 || $x == 4);
        }
    }

    return @found;
}


# Load the letters into a matrix
sub letters-to-matrix(Str $filename) {
    my @letter_matrix;

    for $filename.IO.lines -> $line {
        my @letters = $line.split(" ");
        @letter_matrix.push(@letters);
    }

    return @letter_matrix;
}

# Load the dictionary into memory
sub dictionary-to-hash(Str $filename) {
    my %possible_words;

    # Challenge only wants words greater
    # than 5 so just keep those
    for $filename.IO.lines -> $line {
        %possible_words{$line.lc} = 1
            if ($line.chars >= 5);
    }

    return %possible_words
}
```

<br>

### Output

<br>


```perl6
$ perl6 ch-2.p6

Found 87 words:
acies, aimed, align, alose, angil, antes, argos, arose, ashed, ation, blunt, blunts, broad, buffa, buries, butea, caeli, clove, cloven, clune, const, constitution, constitutions, cosin, croon, depart, departed, duddie, enter, filch, garlic, goats, grieve, grieves, grith, hazard, hugin, ileac, izing, liens, lunts, malign, malignant, malls, margo, meroe, midst, midsts, neuma, ought, ovary, parte, parted, pasmo, patna, pudgiest, quash, quashed, raias, raped, resor, roser, ruses, shazar, shrine, shrines, sices, social, socializing, soyas, spasm, spasmodic, staun, succor, succors, tallu, talos, talose, theor, theorem, theorems, traci, tracie, virus, viruses, wifie, wigged
```

<br>

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2021**](/blog/advent-calendar-2021)
