---
title: "Advent Calendar - December 1, 2022"
date: 2022-12-01T00:00:00+00:00
description: "Advent Calendar - December 1, 2022."
type: post
image: images/blog/2022-12-01.jpg
author: Abigail
tags: ["Perl"]
---

## [**Advent Calendar 2022**](/blog/advent-calendar-2022)
### | **Day 1** |
***

The gift is presented by `Adam Russell`. Today he is talking about his solution to [**"The Weekly Challenge - 161"**](/blog/perl-weekly-challenge-161). This is re-produced for **Advent Calendar 2022** from the original [**post**](http://www.rabbitfarm.com/cgi-bin/blosxom/2022/04/24) by him.

***

<br>

## Task #1: Abecedarian Words

An abecedarian word is a word whose letters are arranged in alphabetical order. For example, “knotty” is an abecedarian word, but “knots” is not. Output or return a list of all abecedarian words in the dictionary, sorted in decreasing order of length.

Optionally, using only abecedarian words, leave a short comment in your code to make your reviewer smile.

***

<br>

## Solution

<br>

```perl
use strict;
use warnings;

sub abecedarian{
    sort {$b->[1] <=> $a->[1]} map {[$_, length($_)]} grep{chomp; $_ eq join("", sort {$a cmp $b} split(//, $_))} @_;
}

MAIN:{
    open(DICTIONARY, "dictionary");
    for my $abc (abecedarian(<DICTIONARY>)){
        print $abc->[0] . " length: " . $abc->[1] . "\n";
    }
    close(DICTIONARY);
}
```

<br>

## Sample Run

<br>

```perl
$ perl perl/ch-1.pl
abhors length: 6
accent length: 6
accept length: 6
access length: 6
accost length: 6
almost length: 6
begins length: 6
    .
    .
    .
ox length: 2
qt length: 2
xx length: 2
a length: 1
m length: 1
x length: 1
```

<br>

## Notes

<br>

`The Power of Perl!` This problem reduces to one (one!) line of code, plus a few more to manage reading the data and printing the results.

Reading from left to right what is happening? Well, we are sorting, in descending order, an array of array references based on the value of the element at index 1. Where does this array of array refs come from? From a map which takes in an array of strings and stores each string in an array ref with it's length. Where Does the array fo strings come from? From the grep which takes the list of strings sent to sub abecedarian as arguments, splits them into characters, sorts the characters, and then sees if the characters in sorted order are in the same order as the original word demonstrating that the word fits the definition of Abecedarian.

Ordinarily I will make an effort to avoid these more complicated expressions but in this case the reading of it seems to proceed in a straightforward way as a chain of easily understood sub-expressions.

<br>

## Task #2: Pangrams

A pangram is a sentence or phrase that uses every letter in the English alphabet at least once. For example, perhaps the most well known pangram is:

    the quick brown fox jumps over the lazy dog

Using the provided [dictionary](https://github.com/manwar/perlweeklychallenge-club/blob/master/data/dictionary.txt), so that you don’t need to include individual copy, generate at least one pangram.

Your pangram does not have to be a syntactically valid English sentence (doing so would require far more work, and a dictionary of nouns, verbs, adjectives, adverbs, and conjunctions). Also note that repeated letters, and even repeated words, are permitted.

### BONUS: Constrain or optimize for something interesting (completely up to you), such as:

    Shortest possible pangram (difficult)
    Pangram which contains only abecedarian words (see challenge 1)
    Pangram such that each word "solves" exactly one new letter. For example, such a pangram might begin with (newly solved letters in bold):
        a ah hi hid die ice tea ...
        What is the longest possible pangram generated with this method? (All solutions will contain 26 words, so focus on the letter count.)
    Pangrams that have the weirdest (PG-13) Google image search results
    Anything interesting goes!

***

## Solution

<br>

```perl
use strict;
use warnings;

use Lingua::EN::Tagger;

sub pangram{
    my %tagged_words;
    my $tagger = new Lingua::EN::Tagger;
    for my $word (@_){
        chomp($word);
        my $tagged_text = $tagger->add_tags($word);
        $tagged_text =~ m/<([a-z]*)>([a-z]*<)/;
        my $tag = $1;
        if($tagged_words{$tag}){
            push @{$tagged_words{$tag}}, $word;
        }
        else{
            $tagged_words{$tag} = [$word];
        }
    }
    ##
    # generate sentences from random words in a (somewhat) grammatical way
    ##
    my $sentence;
    my @dets = @{$tagged_words{det}};
    my @adjs = @{$tagged_words{jj}};
    my @nouns = @{$tagged_words{nn}};
    my @verbs = @{$tagged_words{vb}};
    my @cons = @{$tagged_words{cc}};
    my @adverbs = @{$tagged_words{vb}};
    do{
        my $det0 = $dets[rand @dets];
        my $adj0 = $adjs[rand @adjs];
        my $noun = $nouns[rand @nouns];
        my $verb = $verbs[rand @verbs];
        my $det1 = $dets[rand @dets];
        my $adj1 = $adjs[rand @adjs];
        my $object0 = $nouns[rand @nouns];
        my $conj = $cons[rand @cons];
        my $det2 = $dets[rand @dets];
        my $adj2 = $adjs[rand @adjs];
        my $object1 = $nouns[rand @nouns];
        my $adverb = $adverbs[rand @adverbs];
        my %h;
        for my $c (split(//, "$det0$adj0$noun$verb$det1$adj1$object0$conj$det2$adj2$object1")){
            $h{$c} = undef;
        }
        $sentence = "$det0 $adj0 $noun $verb $det1 $adj1 $object0 $conj $det2 $adj2 $object1" if keys %h == 26;
    }while(!$sentence);
    return $sentence;
}

MAIN:{
    open(DICTIONARY, "dictionary");
    print pangram(<DICTIONARY>) . "\n";
    close(DICTIONARY);
}
```

<br>

##  Sample Run

<br>

```perl
$ perl perl/ch-2.pl
each toxic windpipe jeopardize some quick wafted less every favorable arrangement
$ perl perl/ch-2.pl
each exaggerated wilier jeopardize all marketable enunciate and every quirky forgiveness
```

<br>

## Notes

<br>

I made this a bit more complicated then it could have been, although I didn't really get into the `"Bonus"` questions (see the original problem statement on the Weekly Challenge site for details). The main complication I chose to take on here is that I wanted to have the generated pangrams to be reasonably grammatically correct. To simplify things I chose a single template that the generated sentence can take on. The words for the sentences are then chosen at random according to the template. Amazingly this works! As part of this simplification words that need to match in number (plural, singular) will not quite line up. This is certainly doable, but represented more work than I was willing to put in at the time.

In order to get words to fit the template I make a first pass through the dictionary and assign parts of speech. This is another simplification, and seems to be a little rough. This is likely due to the fact that `Lingua::EN::Tagger` is very sophisticated and uses both its own dictionary and statistical techniques to determine parts of speech from bodies of text. Given just one word at a time its powers are not able to be used fully.

Since words are chosen completely at random the process to generate a valid pangram can take several minutes. The sentences generated can take on a slightly poetic aspect, there are some decent verses amidst all the chaos!

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2022**](/blog/advent-calendar-2022)
