---
title: "Advent Calendar - December 1, 2019"
date: 2019-11-27T00:00:00+00:00
description: "Plan for 2020."
type: post
image: images/blog/2019-12-01.jpg
author: Laurent Rosenfeld
tags: ["Perl", "Raku"]
---
***

The gift is presented by [**Laurent Rosenfeld**](https://perlweeklychallenge.org/blog/meet-the-champion-013). Today he is talking about his solutions to **Task #2: Word Ladder** of [**"The Weekly Challenge - 007"**](/blog/perl-weekly-challenge-007).

> Given two input words and a file that contains an ordered word list, implement a routine that finds the shortest ladder between the two input words. For example, for the words cold and warm, the routine might return:
> ("cold", "cord", "core", "care", "card", "ward", "warm")

### Given:

1) All words in the list have the same length.

2) All words contain only lowercase alphabetical characters.

3) There are no duplicates in the word list.

4) The input words aren't empty and aren't equal but they have the same length as any word in the word list.

### Requirement:

1) The routine must return a list of the words in the ladder if it exists. Otherwise, it returns an empty list.

2) If any of the input words is the wrong length (i.e., its length is different to a random from the word list) or isn’t in the word list, return an empty list.

***
***

According to this [Wikipedia page](https://en.wikipedia.org/wiki/Word_ladder), word ladder puzzles were invented by the famous writer and mathematician **Lewis Carroll** in **1877**, at a time when there was obviously no computer.

To comply with __Given: #1__, I'll break up my [words.txt](https://github.com/LaurentRosenfeld/thinkperl6/blob/master/Supplementary/words.txt) list into files with **2-letters** words, **3-letters** words, and so on, although this is really not necessary: it would be trivial to filter out the words with a different letter count when reading the **words.txt** file.

My **words.txt** input file only contains words with only lowercase alphabetical **ASCII** characters.

I'll slightly depart from __Given: #4__ and __Requirement: #1__, if the input words are equal, I'll simply return that word as being the ladder. And I'll abort the program if the input words have different lengths.

Just as for some previous challenges, I will use a **words.txt** file containing **113,809** lower-case English words usually accepted for crossword puzzles and other word games. The words.txt file can be found on my Github repository. The original list was contributed to the public domain by **Internet activist Grady Ward** in the context of the **Moby Project**. This word list is also mirrored at **Project Gutenberg**.

For the purpose of testing the programs below, the **words.txt** file is located in my current directory. Obviously, when we will be reading the list, we will need to keep only the words having the same length as the two input words.

This task is much more complicated than the other task of this week challenge (and than most previous challenges). In fact, my first reaction when reading the problem was, **"Gosh, I've got no idea how I'm going to solve that"**. In such case, it is often a good idea to try to break up the problem into smaller ones.

The first thing that we must be able to do is to figure out whether one word can be transformed into another with just one letter change. It would probably be also very useful to know whether this can be done with two letter changes, three letter changes, etc. For this, we may want to use a well-known CS string metric named the Levenshtein distance or Levenshtein edit distance, which is the smallest number of single-character edits (insertions, deletions or substitutions) required to change one word into the other. In the case of this challenge, however, we probably don't need to consider insertions and deletions, but are interested only in substitutions.

Once we have a routine to compute the **Levenshtein distance**, we might try to use brute force with backtracking to test all possibilities, or an optimized version thereof able to remove non optimal paths relatively early in the process, or a branch and bound algorithm, or implement some form of **Dijstra's algorithm** for shortest paths.

### Perl Solution
##### Computing the Edit Distance In Perl

There are a number of **CPAN** modules to compute the Levenshtein distance on the CPAN, such as Text::Levenshtein and some variants. However, we will not use any of them for several reasons. One is that using a ready-made library for solving such a challenge is kind of cheating; I especially don't wish to use a non-core module. The second reason is that, as we have seen above, the general Levenshtein distance is the smallest number of single-character edits (insertions, deletions or substitutions) required to change one word into the other, where as, since our input words have the same length, we're interested with only the smallest number of substitutions. The last reason is that, because of the second reason just stated, computing the full Levenshtein distance would be overkill: we really need to compute only the number of letter differences for each given position in the input words. Because of that, I'll use the term edit distance, rather than Levenshtein distance.

Once we've clarified in our head what we need, it is quite simple to write our **sub edit_distance()** and some code to test it:

```perl
use strict;
use warnings;
use feature qw/say/;

sub edit_distance {
    my ($word1, $word2) = @_;
    die "Words $word1 and $word2 have different lengths\n" unless length $word1 == length $word2;
    my @w1 = split //, $word1;
    my @w2 = split //, $word2;
    my $dist = 0;
    for my $i (0..$#w1) {
        $dist++ if $w1[$i] ne $w2[$i];
    }
    return $dist;
}

for my $word_pair_ref (["cold", "cord"], ["cord", "core"], ["cord", "cord"],
                       ["cold", "warm"], ["kitten", "sittin"], ["kitten", "sitting"]) {
    my ($w1, $w2) = @$word_pair_ref;
    say "Distance between $w1 and $w2 is: \t", edit_distance ($w1, $w2);
}
```

This script displays the expected output:

    Distance between cold and cord is:      1
    Distance between cord and core is:      1
    Distance between cord and cord is:      0
    Distance between cold and warm is:      4
    Distance between kitten and sittin is:  2
    Words kitten and sitting have different lengths

So, we have a working **sub edit_distance()**, a ladder subroutine might look in part like this:

```perl
sub ladder {
    my $word1, $word2) = @_;
    return ($word1) if edit_distance($word1, $word2) == 0;
    return ($word1, $word2) if edit_distance($word1, $word2) == 1;
    # ...
}
```

The problem, of course, is to write the code that will replace the ellipsis. Eventually, the real code will not really look like that, but it could.

### Finding the Ladders in Perl

Let's try an improved brute force algorithm. For this, we will first analyze our input file and prepare data structures that are likely to make brute force relatively fast.

### Preparing the Data

To start with, we will use our **words.txt** file to create files of words having 2, 3, 4, ... 9, 10 letters. This can be done with simple one-liners such as:

    $ perl -nE 'chomp; say if length == 10' words.txt >  words10.txt

We're not really interested with longer words, because it will become increasingly difficult and unlikely to find complete ladders between such longer words.

Our **9 files** have the following word counts:

    113809  113809 1016714 words.txt
    9199    9199   101189  words10.txt
    85      85     255     words2.txt
    908     908    3632    words3.txt
    3686    3686   18430   words4.txt
    8258    8258   49548   words5.txt
    14374   14374  100618  words6.txt
    21727   21727  173816  words7.txt
    26447   26447  238023  words8.txt
    16658   16658  166580  words9.txt
    220447  220447 1932357 total

The next thing we want to do is to build hashes which, for each word in the input file, lists all words that are a single-letter-change away from that given word. This implies nested loops on large data collections; this can take a very long time to run, so we want to cache the result in order to avoid having to recompute it every time. That's what the first 40 code or so lines in the program below do. We use the Storable core module to store the generated hash in a file. Note that it would be very easy to store our %words hash of arrays in a plain text file and to retrieve it on demand (for example, one line per hash key, with the key and the list of words on eash such line), and that's what we'll do below in P6, but Storable does it well and fast for us. The basic idea is as follows: we get two words as parameters to the program; if the words have the same length, say 5, we look for a data store file named word_store_5 on the disk. If the file is there, we just retrieve the data and load the hash from it (which takes a split second); if not, we generate the hash and store it. This way, these long computations can be done only once for each word length.

The __%words__ hash of arrays is in effect a graph of the single-letter-edit connections between words.

Some words are what I call _**orphans**_ in the code, i.e. these are not connected to any other word through a single character edit. When legendary computer scientist **Donald Knuth** studied the problem several decades ago, he found that the word _**aloof**_ was one such word. So he named _**aloof**_ all of these words not connected to any other. In the code below, these words are stored in _**aloof**_ files, despite the fact that my word list has in fact the word _**kloof**_ (whatever it means) which is one character edit away from _**aloof**_. We remove these words from our hash, since they cannot participate in any path between two words.

The table below summarizes word counts and run times for this part of the process.

    | File        | Words   | Run time   | Aloof words |
    | ----------- | ------- | ---------- | ----------- |
    | words2.txt  |  85     | 0m0.102s   | 0           |
    | words3.txt  |  908    | 0m2.519s   | 6           |
    | words4.txt  |  3686   | 0m38.162s  | 68          |
    | words5.txt  |  8258   | 4m46.641s  | 711         |
    | words6.txt  |  14374  | 16m29.848s | 3093        |
    | words7.txt  |  21727  | 39m5.278s  | 7348        |
    | words8.txt  |  26447  | 71m47.795s | 12516       |
    | words9.txt  |  16658  | 28m6.781s  | 10096       |
    | words10.txt |  8258   | 7m51.305s  | 6494        |

When words have **9 characters** or **more**, significantly more than half of them are _**aloof**_ words. It probably becomes relatively difficult to find pairs of words that are connected with a ladder.

As you can see, this process takes quite a lot of time when there are many words in the input file (more than **71 minutes** for words having **8 characters**), it is good to store the data produced to avoid recomputing it. Note that is might be quicker not to do that and to go directly for the ladders if we were to determine a path between only two words, but I ran the program probably a couple of hundred times for the purpose of testing and finding information about our word lists, so I'm happy that I first took the time to prepare the data for faster processing later. When the word store already exists, it takes about **0.1** to **0.3** second to reconstruct the hash from the store.

### Finding the Word Ladders

This is my Perl code for finding word ladders:

```perl
use strict;
use warnings;
use feature qw/say/;
use Storable;
use Data::Dumper;

die "Please pass two words as parameters" unless @ARGV == 2;
my ($word1, $word2)= @ARGV;
my $length = length $word1;
die "The two words must have the same length\n" if $length != length $word2;

my $store_file = "word_store_$length";
my ($store_ref, %words);
if (-e $store_file) {
    my $store_ref = retrieve($store_file);
    %words = %$store_ref;
} else {
    my $file = "words$length.txt";
    open my $IN, '<', $file or die "Cannot open $file$!";
    while (my $word = <$IN>) {
        chomp $word;
        $words{$word} = [];
        for my $key (keys %words) {
            if (edit_distance($key, $word) == 1) {
                push @{$words{$key}}, $word;
                push @{$words{$word}}, $key;
            }
        }
    }
    close $IN;
    my $orphans = "aloof_$length.txt";
    open my $OUT, ">", $orphans or die "Cannot open file $orphans$!";
    for my $key (keys %words){
        if (scalar @{$words{$key}} == 0) {
            say $OUT "$key";
            delete $words{$key};
        }
    }
    close $OUT;
    store \%words, $store_file;
}

my $max = $le   ngth * 2;

sub edit_distance {
    my ($word1, $word2) = @_;
    # die "Words $word1 and $word2 ..." -> No longer needed as this is checked before
    my @w1 = split //, $word1;
    my @w2 = split //, $word2;
    my $dist = 0;
    for my $i (0..$#w1) {
        $dist++ if $w1[$i] ne $w2[$i];
    }
    return $dist;
}

sub ladder {
    my ($word1, $word2, $tmp_result) = @_;
    return $tmp_result if $word1 eq $word2;
    return [] if scalar @$tmp_result >= $max;
    my @temp_solutions;
    for my $word (@{$words{$word1}}) {
        next if $word eq $word1;
        next if grep { $_ eq $word } @$tmp_result; # not really needed but a bit faster
        push @temp_solutions, [@$tmp_result, $word] and last if $word eq $word2;
        my $new_tmp = ladder($word, $word2, [@$tmp_result, $word]);
        next if scalar @$new_tmp == scalar @$tmp_result;
        next unless scalar @$new_tmp;
        push @temp_solutions, $new_tmp;
    }
    return [] unless @temp_solutions;
    my $best_sol = (sort { scalar @$a <=> scalar @$b } @temp_solutions)[0];
    $max = scalar @$best_sol if scalar @$best_sol < $max;
    return $best_sol;
}

for ($word1, $word2) {
    die "Word $_ not found\n" unless exists $words{$_};
}
my $ladder = ladder $word1, $word2, [$word1];

if (@$ladder) {
    say join "->", @$ladder;
} else {
    say "No ladder found for $word1 and $word2"
}
```

The bulk of the work is done in the **sub ladder()**, which calls itself recursively for all words connected to the _**$word1**_ input word. The _**$max**_ variable, which controls how deep we go into the recursive research, may not be needed for the correctness of the algorithm (provided we find another way to stop recursion), but it enables the program to run tens to hundreds of times faster, depending on the input words.

This is an example run:

    $ time perl ladder2.pl warm cold
    warm->ward->card->cord->cold

    real    0m2.959s
    user    0m2.859s
    sys     0m0.077s

Printing out intermediate results shows that there are other shortest ladders between these two words, for example:

    warm worm word wold cold
    warm worm word cord cold
    warm worm corm cord cold
    warm ward card cord cold

There is one caveat: it should be noted that I have initialized the __$max variable__ to twice the length of the input words. In a way, this is a bug because there are certainly some (probably very rare) pairs of four-letter words for which the shortest ladder contains more than 8 words, but I have kept it this way as a trade-off because the program runs so dramatically faster with a relatively low value for $max. If we needed to make sure that we don't miss any shortest ladder, we could run it the way it is now (so that it is fairly fast most of the time) and, when no ladder is found, run it again with a much larger initial value of __$max__. According to this site, the longest shortest ladder (with words of **six letters**) has **50 steps**.

As a conclusion to the Perl implementation of word ladders, I should say that, although it seems to work properly (subject to the caveat just above), I'm not really fully satisfied with this solution: I think it should be possible to make something simpler (and perhaps faster), but I don't have the time at the moment to investigate further.

### Word Ladders in Raku

Let's try to adapt the **Perl** script to **Raku**.

### Serializing the Word Hash of Arrays

There doesn't seem to be a Storable module in **Raku**, but I did not worry about that, since I thought that the gist routine would provide a serialized image of the _**%words**_ hash which could then be EVALed to retrieve the hash. This seems to work fine with a small hash. But that does not work with our big _**%words**_ hash of arrays, because it turns out that, apparently, gist truncates its output to a few thousands characters.

It would probably be possible to serialize the _**%words**_ hash with some **JSON** or **YAML** module, but there doesn't seem to be any core module for that.

As noted in the **Perl** section of this task, there is nothing complicated in writing our own plain text serializer for a simple hash of arrays. For example, we can write a plain text file with one line for each hash item, with the key at the beginning of the line and then a list of the values. Let's do it in a little toy module, which could look like something like this:

```perl6
unit package Store;

sub store (%hash, $file) is export {
    # stores a hash or array as lines containing key et values
    # such as: key | val1 val2 val3
    my $out;
    for %hash.kv -> $key, $val {
        $out ~= "$key | $val \n";
    }
    spurt $file, $out;
}

sub retrieve (%hash, $file) is export {
    # populates a hash of arrays with stored data
    for $file.IO.lines -> $line {
        my ($key, $val) = split /\s?\|\s?/, $line;
        %hash{$key} = $val.words;
    }
}
```

As an example, the first few lines of the **word_store_4** file look like this:

    yawl | bawl pawl wawl yawn yawp yaws yowl
    pled | fled bled pied plea peed gled pleb plod sled
    pita | dita pima pica pika pina pith pits pity vita
    keir | heir weir
    quag | quad quai quay
    frug | frig frog frag drug

### The Ladder Script in Raku

Now that we have solved the problem of storing and retrieving the hash of arrays, adapting the **Perl** script into **Raku** is fairly easy:

```perl6
use v6;
use Store;

die "Please pass two words as parameters" unless @*ARGS == 2;
my ($word1, $word2)= @*ARGS;
my $length = $word1.chars;
die "The two words must have the same length\n" if $length != $word2.chars;

my $max = 2 * $length;
my $store-file = "word_store_$length";
my ($stored, %words);
if ($store-file.IO.e) {
    retrieve %words, $store-file;
} else {
    for "words$length.txt".IO.lines -> $word {
        %words{$word} = [];
        for keys %words -> $key {
            if (edit-distance($key, $word) == 1) {
                push @(%words{$key}), $word;
                push @(%words{$word}), $key;
            }
        }
    }
    %words = grep { $_.value.elems > 0 }, %words.pairs;
    store %words, $store-file;
}

sub edit-distance (Str $word1, Str $word2) {
    my @w1 = $word1.comb;
    my @w2 = $word2.comb;
    my $dist = 0;
    $dist++ if @w1[$_] ne @w2[$_] for (0..@w1.end) ;
    return $dist;
}

sub ladder (Str $word1, Str $word2, $tmp-result) {
    return $tmp-result if ($word1 eq $word2);
    return [] if @$tmp-result.elems >= $max;
    my @temp-solutions;
    for @(%words{$word1}) -> $word {
        next if $word eq $word1;
        next if grep { $_ eq $word }, @$tmp-result;
        push @temp-solutions, [|@$tmp-result, $word] and last if $word eq $word2;
        my $new_tmp = ladder($word, $word2, [|@$tmp-result, $word]);
        next if @$new_tmp.elems == @$tmp-result.elems;
        next unless @$new_tmp.elems;
        push @temp-solutions, $new_tmp;
    }
    return [] if @temp-solutions.elems == 0;
    my $best_sol = (sort { $_.elems }, @temp-solutions)[0];
    $max = @$best_sol.elems if @$best_sol.elems < $max;
    return $best_sol;
}

for ($word1, $word2) {
    die "Word $_ not found\n" unless  %words{$_} :exists;
}
my $ladder = ladder $word1, $word2, [$word1];

if (@$ladder) {
    say join "->", @$ladder;
} else {
    say "No ladder found for $word1 and $word2"
}
```

Running the script with the words **"warm"** and **"cold"** produces the following output:

    $ perl6  ladder.p6 warm cold
    warm->worm->word->cord->cold

    $ perl6  ladder.p6 cold warm
    cold->wold->word->worm->warm

***
***
