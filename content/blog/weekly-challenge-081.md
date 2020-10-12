---
title: "BLOG: The Weekly Challenge #081"
date: 2020-10-12T00:00:00+00:00
description: "Blog for the weekly challenge #081."
type: post
image: images/blog/weekly-challenge-081.jpg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

## TABLE OF CONTENTS
***

### 1. [HEADLINES](#HEADLINES)
### 2. [YouTube WEEKLY](#YOUTUBEWEEKLY)
### 3. [TASK #1: Common Base String](#TASK1)
### 4. [TASK #2: Frequency Sort](#TASK2)

<br>

## HEADLINES {#HEADLINES}
***

<br>

It was the most difficult week for me.

Why?

Well, it is confirmed by my GP that I am going through **Depression & Anxiety**.

So now you know why I didn't do live video session in the recent weeks.

I was even thinking on dropping the idea of participating in the weekly challenge for couple of weeks.

But then I decided to do it in the end. Having said that it is still incomplete with no unit test for the **Frequency Sort** task.

Please excuse me if you find bug/issue in my solutions.

<br>

## YouTube WEEKLY {#YOUTUBEWEEKLY}
***

<br>

Sorry, I couldn't make video for this week tasks.

However, you can take a look at my past week videos by visiting my **[YouTube Channel](https://www.youtube.com/channel/UCT91RkThBWByo1NL_M8R8Ig)**.

Last but not the least, I would to love hear your **views/opinions** with regard to anything I do.

Please get in touch with me by email: <mohammad.anwar@yahoo.com>.

Let me share my solutions to the **[The Weekly Challenge - 081](/perl-weekly-challenge-081)**.

<br>

## TASK #1 › Common Base String {#TASK1}
#### Submitted by **[Mohammad S Anwar](http://www.manwar.org)**
***

You are given 2 strings, `$A` and `$B`.

Write a script to find out common base string in `$A` and `$B`.

> A substring of a string `$S` is called base string if repeated concatenation of the substring results in the string.

***

<br>

I did this task only after the **Frequency Sort** task. Still, I am not fully satisfied with my solution.

At least, it worked when used against the given examples in the task. I am sure if it wont behave when faced with edge-cases.

<br>

```perl
sub common_base_strings {
    my ($string1, $string2) = @_;

    die "ERROR: Missing string1.\n" unless defined $string1;
    die "ERROR: Missing string2.\n" unless defined $string2;

    my $len_string1 = length($string1);
    my $len_string2 = length($string2);

    my ($min_size, $min_string);
    if ($len_string1 > $len_string2) {
        $min_string = $string2;
        $min_size   = $len_string2;
    }
    else {
        $min_string = $string1;
        $min_size   = $len_string1;
    }

    my @common_base_strings = ();
    for my $i (1 .. $min_size) {
        my $base_str = substr($min_string, 0, $i);
        push @common_base_strings, $base_str
            if (($string1 eq $base_str x 2)
                ||
                ($string2 eq $base_str x 2));
    }

    return @common_base_strings;
}
```

<br>

I did this on Sunday evening, just to feel better.

I simply translated my **Perl** solution to be quick.

<br>

```perl6
sub common-base-strings(Str $string1, Str $string2 --> Str) {

    my $len_string1 = $string1.chars;
    my $len_string2 = $string2.chars;

    my ($min_size, $min_string);
    if ($len_string1 > $len_string2) {
        $min_string = $string2;
        $min_size   = $len_string2;
    }
    else {
        $min_string = $string1;
        $min_size   = $len_string1;
    }

    my @common_base_strings = ();
    for 1 .. $min_size -> $i {
        my $base_str = substr($min_string, 0, $i);
        @common_base_strings.push: $base_str
            if ($string1 eq $base_str x 2)
               ||
               ($string2 eq $base_str x 2);
    }

    return @common_base_strings.join(", ");
}
```

<br>

A very thin wrapper around helper subroutine to get the task done.

<br>

```perl
use strict;
use warnings;

my $S1 = $ARGV[0] || "abcdabcd";
my $S2 = $ARGV[1] || "abcdabcdabcdabcd";

printf("Common Base String(s): %s\n",
       join(", ", common_base_strings($S1, $S2)));
```

<br>

Same applies to **Raku** solution.

<br>

```perl6
use v6.d;

sub MAIN(Str :$string1 = "abcdabcd",
         Str :$string2 = "abcdabcdabcdabcd") {

    common-base-strings($string1, $string2).say;
}
```

<br>

Standard unit test just to cover the example in the task.

<br>

```perl
use strict;
use warnings;
use Test::More;
use Test::Deep;

is_deeply( [ common_base_strings("abcdabcd", "abcdabcdabcdabcd") ],
           [ "abcd", "abcdabcd" ],
           "testing example 1" );

is_deeply( [ common_base_strings("aa", "aaa") ],
           [ "a" ],
           "testing example 2" );

done_testing;
```

<br>

## TASK #2 › Frequency Sort {#TASK2}
#### Submitted by **[Mohammad S Anwar](http://www.manwar.org)**
***

You are given file named `input`.

Write a script to find the frequency of all the words.

It should print the result as first column of each line should be the frequency of the the word followed by all the words of that frequency arranged in lexicographical order. Also sort the words in the ascending order of frequency.

***

<br>

I did this task first as it was easier than the **Common Base String** task.

I felt better after getting the task done in **Perl**  at least.

For this, I created two subroutines `sub fetch_words()` and `sub frequency_count()`.

<br>

```perl
sub fetch_words {
    my ($file) = @_;

    open(my $fh, "<:encoding(UTF-8)", $file)
        or die "ERROR: Unable to open $file: $!\n";

    my %words = ();
    while (my $line = <$fh>) {
        chomp $line;
        $line =~ s/\.//g;
        $line =~ s/\"//g;
        $line =~ s/\(//g;
        $line =~ s/\)//g;
        $line =~ s/\,//g;
        $line =~ s/\'s//g;
        $line =~ s/\-\-/ /g;
        foreach my $word (split /\s/, $line) {
            $words{$word} += 1;
        }
    }

    close($fh);

    return \%words;
}
```

```perl
sub frequency_count {
    my ($words) = @_;

    my %frequency = ();
    foreach my $word (keys %$words) {
        $frequency{$words->{$word}} .= " " . $word;
    }

    foreach my $count (sort { $a <=> $b } keys %frequency) {
        my @words = split / /, $frequency{$count};
        printf("%d%s\n", $count, join(" ", sort @words));
    }
}
```

<br>

Simply translated the **Perl** solution here.

<br>

```perl6
sub fetch-words(Str $file where *.IO.f) {

    my $words;
    for $file.IO.lines -> $line is copy {
        $line ~~ s:g/\.//;
        $line ~~ s:g/\"//;
        $line ~~ s:g/\(//;
        $line ~~ s:g/\)//;
        $line ~~ s:g/\,//;
        $line ~~ s:g/\'s//;
        $line ~~ s:g/\-\-/ /;
        for $line.split(" ") -> $word {
            $words.{$word} += 1;
        }
    }

    return $words;
}
```

```perl6
sub frequency-count($words) {

    my %frequency = ();
    for $words.keys -> $word {
        %frequency{$words.{$word}}.push: $word;
    }

    for %frequency.keys.sort({ $^a <=> $^b }) -> $count {
        ($count, %frequency{$count}.sort).join(" ").say;
    }
}
```

<br>

One-liner solution in **Perl**.

<br>

```perl
use strict;
use warnings;

frequency_count(fetch_words($ARGV[0]));
```

<br>

Please find below the solution in **Raku**.

<br>

```perl6
use v6.d;

sub MAIN(Str :$file where *.IO.f) {
    frequency-count(fetch-words($file));
}
```

<br>

That's it for this week. Speak to you soon.
