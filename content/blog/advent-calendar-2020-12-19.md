---
title: "Advent Calendar - December 19, 2020"
date: 2020-12-23T00:00:00+00:00
description: "Advent Calendar - December 19, 2020."
type: post
image: images/blog/2020-12-19.jpg
author: Duncan C. White
tags: ["Perl"]
---

[**Advent Calendar 2020**](/blog/advent-calendar-2020)
***

The gift is presented by [**Duncan C. White**](https://perlweeklychallenge.org/blog/meet-the-champion-020). Today he is talking about his solution to the task `Head to Tail Pokémon names` of **["The Weekly Challenge - 025"](/blog/perl-weekly-challenge-025)**. This is re-produced for **Advent Calendar 2020** from the original [**post**](https://www.doc.ic.ac.uk/~dcw/PSD/article13/) by **Duncan C. White**.

***

I'm **Duncan White**, an experienced and professional programmer, and have been programming for well over **30 years**, mainly in **C** and **Perl**, although I know many other languages. In that time, despite my best intentions:-), I just can't help learning a thing or two about the practical matters of designing, programming, testing, debugging, running projects etc. Back in 2007, I thought I'd start writing an occasional series of articles, book reviews, more general thoughts etc, all focussing on software development without all the guff.

# A STUDY IN OPTIMIZATION: FIND A LONGEST POKEMON CHAIN

There is a famous programming saying that premature optimization is the root of all evil. Of course getting your program correct is far more important than making it run fast.

I'd also suggest that writing your program in accordance with Kernighan and Pike (K&P)'s core principles simplicity, clarity and generality is also far more important than making it run fast (see my review of [The Practice of Programming (Kernighan & Pike)](https://www.doc.ic.ac.uk/~dcw/PSD/article13/article6/) for more details).

But occasionally, when your program is working properly, and when it's written simply, clearly and elegantly, it can be worth selectively optimizing your program. Perhaps you have a critical need to make it run faster, perhaps you just want to keep your hand in.

I typically find that, when I do bother to try to optimize my code I can make it run about 10 times faster, usually without changing the basic algorithm in use. Often, the most effective tactic is to precompute as much as possible. To that end, I often ask myself - what is the ideal data structure that would enable me to look up the answers to all questions of a particular type, and can I build that data structure more quickly? We'll see lots of examples of this in this article.

Recently, I started doing the [Perl Weekly Challenge](https://perlweeklychallenge.org/), for fun and amusement. Each week, two or three tasks are set for challengers, to solve in Perl 5 or Perl 6 (recently renamed as Raku), and people can submit their solutions before the end of the week via a github pull request. In recent weeks, they have started selecting a weekly Champion, and got them to answer some questions for a "Meet the Champion" page. To my surprise and great pleasure, I was selected Champion a few weeks ago: please see [Meet The Champion - Duncan C. White](https://perlweeklychallenge.org/blog/meet-the-champion-020/).

One recent Perl challenge was as follows:

Generate a longest sequence of the following "English Pokemon" names where each name starts with the last letter of the previous name:

The names are: audino bagon baltoy banette bidoof braviary bronzor carracosta charmeleon cresselia croagunk darmanitan deino emboar emolga exeggcute gabite girafarig gulpin haxorus heatmor heatran ivysaur jellicent jumpluff kangaskhan kricketune landorus ledyba loudred lumineon lunatone machamp magnezone mamoswine nosepass petilil pidgeotto pikachu pinsir poliwrath poochyena porygon2 porygonz registeel relicanth remoraid rufflet sableye scolipede scrafty seaking sealeo silcoon simisear snivy snorlax spoink starly tirtouga trapinch treecko tyrogue vigoroth vulpix wailord wartortle whismur wingull yamask

This seemed like an interesting challenge, explore all paths through the "maze" and keep track of one longest path found.

Of course the unusual aspect was the maze chain rule, i.e. how you get from one position in the maze to the next: rather than specifying a separate set of links from node N to M, here the rule was that each name starts with the last letter of the previous name.

# Solving the Pokemon Maze Challenge

Before we can optimize anything, of course we have to solve the separate challenge - to generate something to optimize later.

I started by writing some boilerplate, and specifying the Pokemon names to use:

```perl
#!/usr/bin/perl
  #
  # Challenge 1: "Generate a longest sequence of the following "English Pokemon"
  #     names where each name starts with the last letter of the previous name.
  #

  use v5.10;    # to get "say"
  use strict;
  use warnings;
  use Function::Parameters;
  use Data::Dumper;

  my $debug = @ARGV>0;

  my @words = qw(audino bagon baltoy banette bidoof braviary bronzor carracosta
    charmeleon cresselia croagunk darmanitan deino emboar emolga
    exeggcute gabite girafarig gulpin haxorus heatmor heatran ivysaur
    jellicent jumpluff kangaskhan kricketune landorus ledyba loudred
    lumineon lunatone machamp magnezone mamoswine nosepass petilil
    pidgeotto pikachu pinsir poliwrath poochyena porygon2 porygonz
    registeel relicanth remoraid rufflet sableye scolipede scrafty
    seaking sealeo silcoon simisear snivy snorlax spoink starly
    tirtouga trapinch treecko tyrogue vigoroth vulpix wailord
    wartortle whismur wingull yamask);
```

Thinking about the maze chain rule, it seemed to me that it would be useful to be able to look up the list of Pokemon names that start with a particular letter. I often start off in this fashion, working `bottom-up` - building a few useful functions or code snippets that will help us to solve the main problem soon.

In **Perl**, we can trivially find all words starting with a specific letter, using `grep` and a regex match:

```perl
my @startwords = grep { /^$letter/ } @words;
```

So our first program match use this technique to look up all Pokemon names beginning with the letter "c" and display them:

```perl
  say "Pokemon names starting with c:";
  my @startwords = grep { /^c/ } @words;
  say for @startwords;
```

Running this, I got the reassuring:

```perl
  Pokemon names starting with c:
  carracosta
  charmeleon
  cresselia
  croagunk
```

Next, I realised that we were going to be calculating startwords an awful lot while exploring all paths through our maze (from every starting word), and of course the list of startwords for a particular starting letter is the same, no matter how many times we calculate it.

So it occurred to me that an ideal data structure to look up the answer would be:

* A hash of arrays (a HoA in Perl terminology):
* A mapping from a letter to the list of words that start with that letter.

We could build this data structure, for all starting letters in the Pokemon names themselves, in very little work:

```perl
  my %sw;       # letter -> list of words starting with that letter.
  foreach my $word (@words)
  {
    # find the first letter in the word
        my $letter = substr($word,0,1);

    # initialize sw{letter} to an empty array
        $sw{$letter} //= [];

    # append word to sw{letter}
        push @{$sw{$letter}}, $word;
  }
```

(Note that Perl's `auto-vivification` facility allows you to omit initializations such as `$sw{$letter} //= []`, because `push @{undefined array ref}`, X automatically creates (or `vivifies`) the empty array for you, before adding the new element. However, I find it clearer and more robust to explicitly include the initialization step.)

Having done that, I decided that was enough newly developed code for a single [tussock hop](https://www.doc.ic.ac.uk/~dcw/PSD/aside-tussock-hopping/), so checked that it builds the correct data structure, using Perl's core module `Data::Dumper` which displays any Perl data structure for you:

```perl
die Dumper \%sw;
```

When I ran this, it generated the following (note that the keys are in random order, changing each time you run it):

```perl
  $VAR1 = {
          'k' => [
                   'kangaskhan',
                   'kricketune'
                 ],
          'g' => [
                   'gabite',
                   'girafarig',
                   'gulpin'
                 ],
          'w' => [
                   'wailord',
                   'wartortle',
                   'whismur',
                   'wingull'
                 ],
      ....
  };
```

Next, I commented out the die command, and wrote the next section of code: having built %sw, we want to try finding all sequences from each starting Pokemon name, tracking the longest sequence found. I simply assumed that I had a function called:

  `findseq( $currw, @seq );`

which would find all sequences of Pokemon names (from @words), from the current word $currw, assuming that we had already visited the words in @seq, and update @longest whenever it finds a longer sequence than that.

Why do we need to track the sequence @seq of words already visited? Because we must only use each Pokemon name once! If we're allowed to use a Pokemon name more than once, we could generate an infinite length sequence of names - by finding a loop of words and going round the loop forever. The shortest form of word loop involves finding a Pokemon name starting and ending with the same letter, such as girafarig and reusing that name indefinitely.

To summarise this, I wrote a function comment to explain what findseq() does and why anyone should want to call it:

```perl
  #
  # findseq( $currw, @seq );
  #    Find all sequences of words from $currw onwards,
  #    given that we've already visited words in @seq,
  #    and update the global @longseq if any sequences
  #    we find are longer than that.
  #
  fun findseq( $currw, @seq )
  {
  }
```

(Note that I'm using, as I often do, Perl's CPAN module `Function::Parameters` to provide a nicer Perl function syntax. Perl 5 has recently implemented such a syntax, but only since Perl 5.24, and I don't routinely assume that I am using such a new version when I write general purpose Perl code. I really wish the Perl community had implemented something similar 15-20 years ago, rather than distract themselves with Perl 6. Whatever).

Having assumed that I had the function `findseq( $currw, @seq )` available (even though I haven't written it yet), I wrote the main code to call it:

```perl
  my @longseq = ();    # longest sequence found so far..

  # search for sequences starting with each word in turn..
  foreach my $sw (@words)
  {
     findseq( $sw, () );
  }

  my $longest = @longseq;

  say "\nlongest sequence is length $longest: @longseq";
  exit 0;
```

Next I wrote the function body, according to the specification in the comment, as a recursive function (which seemed natural):

```perl
  fun findseq( $currw, @seq )
  {
    # extend @seq sequence
        push @seq, $currw;

    # convert @seq to set for quick lookups
        my %used = map { $_ => 1 } @seq;

    # find the last letter of currw
        $currw =~ /(.)$/; my $lastletter = $1;

    # look up all words starting with lastletter
        my $nextw = $sw{$lastletter};

    # if there are any, try each word
        if( defined $nextw )
        {
                foreach my $nextword (@$nextw)
                {
                        findseq( $nextword, @seq ) unless $used{$nextword};
                }
        } else
    # @seq is finished
        {
                #say "found sequence @seq";
                my $len = @seq;
                if( $len > @longseq )
                {
                        say "longest seq so far (len $len): @seq" if $debug;
                        @longseq = @seq;
                }
        }
  }
```

This completes the first version of my Perl program, v1.pl, it only took about 10 minutes to write, was just over 100 lines of Perl code (a lot of them comments!), and I'm pleased to report that it worked first time. When I ran it, it took over 30 seconds searching, and then reported:

```perl
  longest sequence is length 23: machamp petilil landorus scrafty yamask
  kricketune emboar registeel loudred darmanitan nosepass simisear
  relicanth heatmor rufflet trapinch haxorus seaking girafarig gabite
  exeggcute emolga audino
```

You may wish to spend a moment convincing yourself that this is a valid Pokemon chain in the sense of the Perl Challenge, i.e. that each successive word starts with the same letter the previous word ended with.

I should note that there are in fact many different equally long sequences of length 23. It would be very easy to track all of them in our Perl code, but I'll ignore that.

At this point of course, we've solved the first Challenge: We were asked to find any longest sequence of the given Pokemon names under the chain rule, and we have produced a suitable long sequence. It's an interesting question how we convince ourselves that no longest sequence of these particular Pokemon names exists, in practice we might ask someone else solving the same challenge whether they've found any sequence longer than 23 words: Let's assume that 23 is the correct upper length, so we've found a correct answer.

# Optimizing our Solution: Profile the Baseline

Ok, so now we have some working, elegant, well commented Perl code which solves our longest-path problem. How might we optimize it? The first rule of optimization is that **we don't understand the run-time performance of any code, even if we've just written it!**.

So we need a tool that can measure where our program actually spends it's time. Such a tool is called a `profiler`. Perl comes with a basic built-in profiler, but a team working for the New York Times wrote a much more sophisticated Perl profiler a few years ago: it comes as a CPAN module called `Devel::NYTProf`, which you could install via **cpanm install Devel::NYTProf**, or installing an OS-level package (**sudo apt install libdevel-nytprof-perl** on Debian and Ubuntu systems).

Once you have `Devel::NYTProf` installed, you can gather profiling information from a run of your program by:

```perl
perl -d:NYTProf YOUR_PERL_PROGRAM
```

Note that running your code in profiling mode often causes it to take significantly longer to run. Our solution took just over 30 seconds (32.6s on my system, actually) when running it normally (without profiling), but running it under NYTProf as follows took just under a minute to run (55.6s):

```perl
time perl -d:NYTProf ./v1.pl
```

That produced a large binary file called nytprof.out. A human-readable profiling report can be generated from that, in another 20 seconds or so, by:

```perl
nytprofhtml nytprof.out
```

This produces a directory called nytprof containing an html-format profiling report: [A copy of it is available here, renamed as v1](https://www.doc.ic.ac.uk/~dcw/PSD/article13/v1/), opening in a new tab.

In this case the **flame graph** right at the top is not especially helpful, because all the run-time is spent in recursive calls to `findseq()`. Below the flame graph is a top-15-functions table, which is more useful, showing that all ~5 million calls to `findseq()` took 31 seconds out of 32 seconds total runtime.

Better still, if you click on the link to findseq it displays a line by line listing of `findseq()` and how long the program spent in each line (across all the millions of calls to `findseq()`). Have a look at those numbers, and see what the slowest part of findseq() is?

Let's ignore the slight mystery of why `findseq()` appeared to be entered twice as many times (~10 million) as it claims, and taking nearly 3 seconds to do it - this may be a consequence of how `Function::Parameters` works.

The slowest part of the function is converting the sequence to a set via the standard Perl idiom of:

```perl
my %used = map { $_ => 1 } @seq;
```

this takes nearly 10 seconds to execute the ~5 million executions of this line. That's 1/3 of the whole run-time of the program. Let's try to speed this part up.

# First profiling-led optimization: v2.pl

Well, if we want to avoid building the set of all words every time we enter `findseq()` (all 5 million times), the obvious choice is to **pass the set into findseq()** (as a sethashref which Perl requires) **as well as the current word and the sequence**. This suggests **v2.pl** which has the following changes:

1) The call to findseq() becomes:

```perl
findseq( $sw, {}, () );
```

2) The function now starts:

```perl
  #
  # findseq( $currw, $used, @seq );
  #       Find all sequences of words from $currw onwards,
  #       given that we've already visited words in @seq,
  #       (the same info, as a set, is in %$used)
  #       and update the global @longseq if any sequences
  #       we find are longer than that.
  #
  fun findseq( $currw, $used, @seq )
  {
        push @seq, $currw;                      # extend @seq sequence

        my %used = %$used;                      # copy and update used set
        $used{$currw}++;
        ...
```

The program is otherwise unchanged. Let's profile **v2.pl**, giving a directory **v2/**. Let's implement a tiny Perl helper program to profile a given basename (v1, v2 etc), **pp** as follows:

```perl
#!/usr/bin/perl
  die "Usage: pp VERSION\n" unless @ARGV==1;
  my $v=shift;
  $v =~ s/\.pl$//;
  system( "perl -d:NYTProf $v.pl" );
  system( "nytprofhtml nytprof.out" );
  system( "rm -rf $v" );
  system( "mv nytprof $v" );
```

Now let's use this to profile v2:

```perl
./pp v2
```

Just over a minute later, point your web browser: [here at v2/, opening in a new tab](https://www.doc.ic.ac.uk/~dcw/PSD/article13/v2/).

You'll see that the 5 million calls to `findseq()` now take only 28.8 seconds (down from 32.6 seconds). So our first optimization has shaved 4.2 seconds off the total runtime. But let's not stop there! Look carefully of the line by line profiling of our second version, looking for something else to optimize:

# Second profiling-led optimization: v3.pl

The first thing that I noticed was that it takes 6 seconds to copy the used set from the hashref into a fresh local hash %used = %$used 5 million times. Is there any way we could avoid that?

The only change we are making to the used set between calls to findseq() is that, on entry to findseq() we're adding $currw to the used set, so that the used set we pass into each recursive call to findseq() has the current word marked as used.

But couldn't we avoid all the copying by **using a single used sethashref**, modifying it **on entry to findseq, when we add the current word $currw**, and **changing it back again on exit, removing $currw from it once more?** This suggests **v3.pl** which has the following changes:

### 1) To alter the $used sethashref (not copying it now) on entry:

```perl
$used->{$currw}++;                # update $used set
```

### 2) Next, our recursive call passes the hashref $used directly (rather than a reference to the modified %used sethash via \%used), and the test for set membership has to dereference the sethashref explicitly `$used->{nextword}`:

```perl
 findseq( $nextword, $used, @seq ) unless $used->{$nextword};
```

### 3) Finally, on exit, just before the end of the function, we must delete the current word $currw from the used set:

```perl
 delete $used->{$currw};
```

Now let's profile v3:

```perl
 ./pp v3
```

Just over a minute later, point your web browser: [here at v3/, opening in a new tab](https://www.doc.ic.ac.uk/~dcw/PSD/article13/v3/).

You'll see that the 5 million calls to `findseq()` now take only 21.1 seconds (down from 28.8 seconds). So our second optimization has shaved a remarkable 7.7 seconds off the total runtime - more than we expected! It appears that accessing a sethashref element may be fractionally faster in Perl than accessig the corresponding sethash element!

But let's not stop there! Look carefully of the line by line profiling of our third version, looking for something else to optimize:

# Third profiling-led optimization: v4.pl

The first thing that I noticed was that it takes nearly 7 seconds to determine the last letter of each word (5 million times!). Given that there are only 70 Pokemon names in the data set, couldn't we precompute the last letter for each word at the start, storing the last letter in a word->letter hash?

This suggests **v4.pl** which has the following changes:

### 1) Below the declaration of %sw, add our new hash:

```perl
 my %lw; # mapping from word to last letter of word (precompute it:-))
```

### 2) While looping over every word and building %sw, add:

```perl
  $word =~ /(.)$/;
  $lw{$word} = $1;
```

### 3) Inside findseq(), find the last letter of currw via:

```perl
 my $lastletter = $lw{$currw};
```

Now let's profile v4:

```perl
./pp v4
```

Just under a minute later, point your web browser: [here at v4/, opening in a new tab](https://www.doc.ic.ac.uk/~dcw/PSD/article13/v4/).

You'll see that the 5 million calls to `findseq()` now take only 14.8 seconds (down from 21.1 seconds). So our third optimization has shaved a decent 6.3 seconds off the total runtime - the vast majority of the time taken to compute last letters.

What's next? Look again of the line by line profiling of our fourth version, looking for something else to optimize:

# Fourth profiling-led optimization: v5.pl

I couldn't see any obvious optimizations to make while looking at v4.pl's profile. I tried replacing:

```perl
  foreach my $nextword (@$nextw)
  {
    findseq( $nextword, $used, @seq ) unless $used->{$nextword};
  }
```

with

```perl
  foreach my $nextword (grep { ! $used->{$_} } @$nextw)
  {
    findseq( $nextword, $used, @seq );
  }
```

But this made no statistically significant improvement to the runtime. At this point, I wondered whether changing the data structures more significantly could help. In particular, I realised that several data structure map from a word to some property, or store lists of words, and I wondered whether replacing words with word numbers would be any faster.

So I changed the main data structures from hashes to arrays, or from hash-of-hashes to hash-of-arrays:

```perl
  my %sw;    # hash from letter to list of word nos starting with that letter.

  my @lw; # mapping from word no to last letter of word.
```

I also added a redundant, but useful companion to %sw - that tells you whether `@{$sw{letter}}` will be empty or not:

```perl
  my %snew;# hash from letter to whether or not there ARE any words starting
           # with that latter; 0 for no, 1 for yes.
```

Then I populated those data structures by:

```perl
  foreach my $letter ('a'..'z')
  {
    $snew{$letter} = 0;
  }

  foreach my $wordno (0..$#words)
  {
    my $word = $words[$wordno];
    $word =~ /^(.)/;
    my $letter = $1;
    $sw{$letter} //= [];
    push @{$sw{$letter}}, $wordno;
    $snew{$letter} = 1;
    $word =~ /(.)$/;
    $lw[$wordno] = $1;
  }
```

Then I changed findseq() to deal with a current word no, and a used set represented as a reference to an array of booleans, and a word number sequence:

```perl
  #
  # findseq( $currwno, $used, @seq );
  #    Find all sequences of words from $currwno onwards,
  #    given that we've already visited wordnos in @seq,
  #    (the same info, as a set of word nos, is in @$used)
  #    and update the global @longseq if any sequences
  #    we find are longer than that.
  #
  fun findseq( $currwno, $used, @seq )
  {
    push @seq, $currwno;          # extend @seq sequence
    $used->[$currwno]=1;          # update $used set
    my $lastletter = $lw[$currwno];      # last letter of currw

    if( $snew{$lastletter} )      # any words starting with letter?
    {
        foreach my $nextwordno (grep { ! $used->[$_] } @{$sw{$lastletter}})
        {
            findseq( $nextwordno, $used, @seq );
        }
    } else                    # @seq is finished
    {
        #say "found sequence @seq";
        my $len = @seq;
        if( $len > @longseq )
        {
            say "longest seq so far (len $len): @seq" if $debug;
            @longseq = @seq;
        }
    }
    $used->[$currwno]=0;
  }
```

Finally, the loop calling findseq() now reads:

```perl
  foreach my $sw (0..$#words)
  {
    findseq( $sw, [ (0) x scalar(@words)], () );
  }
```

After making all these changes in v5.pl, I profiled v5:

```perl
 ./pp v5
```

Just under a minute later, point your web browser: [here at v5/, opening in a new tab](https://www.doc.ic.ac.uk/~dcw/PSD/article13/v5/).

You'll see that the whole program now takes about 12.2 seconds (down from 14.7 seconds). That's quite a bit better!

At this point, run times are getting so small that random factors (load on the test machine) may change the profiling time, so I started doing several profiling runs and averaging the results. Some runs of v5 took only 12.0 seconds!

# Any more profiling-led optimizations?

I couldn't see any obvious optimizations to make while looking at v5.pl's profile. I tried several techniques that made no significant difference:

### 1) I tried replacing nice shiny Function::Parameters function syntax with a plain Perl 5 sub:

```perl
  fun findseq( $currwno, $used, @seq )
  {
```

with

```perl
  sub findseq
  {
    my( $currwno, $used, @seq ) = @_;
```

This shaved 0.4 seconds off.

### 2) I tried replacing the used set with an available set, simply in order to remove the ! operator. This made no measurable difference.

3) I tried combining the %sw (letter to list of word numbers starting with that letter) and %snew (letter to whether or not the corresponding sw list is empty) into

```perl
  my @outword;       # word number N to list of word numbers starting with
                     # word N's starting number
```

But this made no measurable difference at all.

Here's a summary of the run-times of each successive version so far:

    Version    Run-time (in seconds)
    1    32.6s
    2    28.8s
    3    21.1s
    4    14.8s
    5    12.2s

So, have we reached the end of the profiling line?

***

If you have any suggestion then please do share with us <perlweeklychallenge@yahoo.com>.

[**Advent Calendar 2020**](/blog/advent-calendar-2020)
