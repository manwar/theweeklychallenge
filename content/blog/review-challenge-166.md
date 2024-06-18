---
author:       Colin Crain
date:         2022-07-10T00:00:00
description:  "Colin Crain › Perl Weekly Review #166"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #166"
image:        images/blog/p5-review-challenge-166.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-165/).* )

Welcome to the Perl review pages for **Week 166** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

---

### ●︎ Why do we do these challenges?

I suppose any reasonable answer to that question would be from a field as wide ranging and varied as the people who choose to join the team. One thing, though, is clear: it's not a competition, and there are no judges, even if there is a "prize" of sorts. About that -- I think of it more as an honorarium periodically awarded to acknowledge the efforts we make towards this strange goal. So there's no determination to find the *fastest*, or the *shortest*, or even, in some abstract way, the *best* way to go about things, although I'm certain the participants have their own aspirations and personal drives. As Perl is such a wonderfully expressive language, this provides quite a bit of fodder to the core idea of TMTOWTDI, producing a gamut of varied techniques and solutions.

Even the tasks themselves are often open to a certain amount of discretionary interpretation. What we end up with is a situation where each participant is producing something in the manner they find the most interesting or satisfying. Some team members focus on carefully crafted complete applications, thoroughly vetting input data and handling every use case they can think up. Others choose to apply themselves to the logic of the underlying puzzle and making it work in the most elegant way they can. Some eschew modules they would ordinarily reach for, others embrace them, bringing to light wheels perhaps invented years ago that happen to exactly solve the problem in front of them today.

I've been considering this question for some time and have found one binding commonality between all of us out solving these challenges each week, in that however we normally live our lives, the task in front of us more than likely has nothing to do with any of that. And I think this has great value. We all do what we do, in the real world, and hopefully we do it well. The Weekly Challenge provides us with an opportunity to do something germane to that life yet distinctly different; if we only do the things we already know how to do then we will only do the same things over and over. This is where the "challenge" aspect comes into play.

So we can consider The Weekly Challenge as providing a problem space outside of our comfort zone, as far out from that comfort as we wish to take things. From those reaches we can gather and learn things, pick and choose and bring what we want back into our lives. Personally, I think that's what this whole thing is about. YMMV.

---

<strong><emp>Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due.</emp></strong>

And that, my friends, is why I'm here, to try and figure out ways to do just that.

So here we are then.

I'm ready — let’s get to it and see what we can find.

---

### For Additional Context…

Before we begin, you may wish to revisit either the pages for the [**original tasks**](/blog/perl-weekly-challenge-166/) or the summary [**recap**](/blog/recap-challenge-166/) of the challenge. But don't worry about it, the challenge text will be repeated and presented as we progress from task to task.

Oh, and one ***more*** thing before we finally get started:


### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please feel free to email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

<div align= center><strong>...Enough? Fine. So without even further ado...</strong></div>

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC166TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC166TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC166BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC166TASK1}

# Hexadecimal Words
*Submitted by: Ryan J Thompson*

As an old systems programmer, whenever I needed to come up with a 32-bit number, I would reach for the tired old examples like `0xDeadBeef` and `0xC0dedBad`. I want more!

Write a program that will read from a dictionary and find 2- to 8-letter words that can be “spelled” in hexadecimal, with the addition of the following letter substitutions:
```
    o ⟶ 0 (e.g., 0xf00d = “food”)
    l ⟶ 1
    i ⟶ 1
    s ⟶ 5
    t ⟶ 7
```
You can use your own dictionary or you can simply `open ../../../data/dictionary.txt` (relative to your script’s location in our GitHub repository) to access the dictionary of common words from Week #161.

Optional Extras (for an `0xAddedFee`, of course!) Limit the number of “special” letter substitutions in any one result to keep that result at least somewhat comprehensible. (`0x51105010` is an actual example from my sample solution you may wish to avoid!)

Find phrases of words that total 8 characters in length (e.g., `0xFee1Face`), rather than just individual words.


## about the solutions
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/athanasius/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/colin-crain/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/polettix/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/jo-37/perl/ch-1.pl),
[**Julien Fiegehenn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/julien-fiegehenn/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/laurent-rosenfeld/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/mattneleigh/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/perlboy1967/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/peter-campbell-smith/perl/ch-1.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/robert-dicicco/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/roger-bell-west/perl/ch-1.pl),
[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/ryan-thompson/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/ulrich-rieke/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/wlmb/perl/ch-1.pl)

With an apology to Ryan, I feel the need to preface this by saying I've never been a fan of leet-speak ("1337-5P34K"). Not so much for the coinages in the cant — I am nothing if not a font of pop-culture — but specifically for the letter substitutions. Aside from satisfying the rules for a new pass-phrase I just pretty much don't do that. For someone so willing to massacre the language as much as I am in search of an interesting turn of phrase, apparently I maintain some fairly strict rules when doing so, and glyphic substitution seems to be where I draw the line.

Mind you, not semantic substitution, such as using "+" for "and", + furthermore I seem to have a unique and fairly freewheeling approach to punctuation. No, those are fine, in the right circumstance. Homonymic substitution 2 b sure, but then honestly I usually reject that as  lazy. If you want people to read what you write, you need to put the work in yourself instead of foisting the effort off onto your readers. It's not quite a zero-sum game, but there is a certain minimal work required to transmit information. Think of it in terms of compression and decompression: generally schemes that are quick to expand are hard to compress and vice-versa. You are asking for your reader's attention. Earn it. Also, not to put too fine a point on it, but I routinely find people too lazy to write are also too lazy to properly think things through. The two go hand-in-hand. YMMV.

But back to the task. Semiotic misgivings aside, what about constructing words using weird constraints? Now there's something I can sink my teeth into. Bring it on! Let's do this!

And, sure, ok, there is obviously a certain flexibility with what i've said just now: substituting a 0 for an O is hardly on the same level as a 7 for a T. I still can't think why I'd *do* it, mind you, but I'm much more likely to let it ride and more on.

Ryan's allowed substitution scheme reflects a similar pragmatism, but I do still find those 7s highly sus. After all, seven ate nine. Never forget that.

There were 19 members willing to plunge into the icy waters of the first task this week.

## a 5313C710N 0f 5U8M15510N5
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/duncan-c-white/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/ulrich-rieke/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/roger-bell-west/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/perlboy1967/perl/ch-1.pl),
[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/ryan-thompson/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/dave-jacoby/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/jo-37/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/peter-campbell-smith/perl/ch-1.pl), and
[**Julien Fiegehenn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/julien-fiegehenn/perl/ch-1.pl)

I find the members of the Weekly Challenge to often be an unruly, ungovernable lot. As such no one tells them what to do: "live to ride, ride to die"". Or code. Or something like that.

Given the open-ended nature of the optional extras, we saw quite a lot of variation in the what, exactly the task was presented to be solved.



[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/duncan-c-white/perl/ch-1.pl)

Duncan will start us of today with a straightforward, base solution to the task of finding the longest word, ignoring the more complicated options. That will give us a nice introduction to the steps involved.

At heart we need to select words from a dictionary that fulfil certain criteria; in the base case, that they only contain the letters that can be mapped to valid hexadecimal digits. Aside from the obvious "A" through "F", we also include the additional letters "O", "L", "I", "S", and "T", mapped by their resemblance to numbers.

So-called resemblance?

Stepping away from that thorn-bush, the five additional numeric substitutions are given and that's that.

Moving on, he tabulates a translation hash of characters to their agreed-on hexadecimal equivalents, using a hardcoded list of flattened key-value pairs.

The selection step for each individual word taken from the dictionary is to divide it into an array of characters and verify each letter exists in this hash, while constructing a new version of the word using the hexadecimal values concatenated into a string.

If a hash lookup is successful the hash value is appended, but if it fails the subroutine short-circuits and returns early, and the word fails the test.

As Duncan is looking for the longest word, a separate variable is kept through the search holding the longest word found so far. Because this method finds the first word of any given length the longest word found is "abdicate", at 8 letters, which in hexadecimal yields "ABD1CA7E".


```perl
    my %mapping = qw(a a b b c c d d e e f f o 0 l 1 i 1 s 5 t 7);

    sub hexword ($)
    {
        my( $word ) = @_;
        my $result = "";
        foreach my $let (split(//, $word))
        {
        	return "" unless $mapping{$let};
        	$result .= $mapping{$let};
        }
        return $result;;
    }

    while( <$in> )
    {
        chomp;
        my $len = length($_);
        next unless $len >= $minlen && $len <= $maxlen;
        $_ = lc($_);
        my $hw = hexword( $_ );
        next unless $hw;
        $longest = $hw if length($hw) > length($longest);
        say "$_ == $hw";
    }

    say "longest: $longest";
```

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/ulrich-rieke/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/ulrich-rieke/haskell/ch-1.hs)

Ulrich introduces the idea of matching against a regular expression to find his hex-compliant word list.  If it doesn't match immediately a `tr///` translation is used and the match is tried again.

I should note that internally the `tr///` command builds a static translation table during  compilation, so you can't, for instance, use any variables within it as they don't exist at this stage. On the other hand that table ends up hardcoded and so the operator is extremely fast compared to a regular expression. There really is no comparison, in fact. So we would most likely be better off just performing the translation on every word and only testing the match once.

A regular expression, though, in my eyes is the way to go here.

```perl
    use List::Util qw ( any ) ;

    my $potentialHex = '^[0-9a-f]{2,8}$' ;
    my @hexwords ;
    my $line ;
    open ( my $fh , "< dict.txt" ) or die "Can't open file: $!" ;
    while ( $line = <$fh> ) {
      chomp $line ;
      if ( $line =~ /$potentialHex/ ) {
          push @hexwords , "0x$line" ;
      }
      else {
          $line =~ tr/olist/01157/ ;
          if ( $line =~ /$potentialHex/ ) {
        push @hexwords , "0x$line" ;
          }
      }
    }
    close( $fh ) ;
    say join( ', ' , @hexwords ) ;
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/roger-bell-west/javascript/ch-1.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/roger-bell-west/kotlin/ch-1.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/roger-bell-west/lua/ch-1.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 166: Hexing the Directories](https://blog.firedrake.org/archive/2022/05/The_Weekly_Challenge_166__Hexing_the_Directories.html)

On the subject of regular expressions, Roger notes that a Global Regular Expression Print command executed from the shell can parse out our word lists from the dictionary file quickly and effectively. The command, `grep` is also available in Perl of course.

Roger uses several `egrep` commands in the shell to determine how many solutions to various hex-words problems the dictionary presents. He can then use these numbers to test his function.

He could use `grep`, after all he just did, but perhaps in search of a novelty he chooses a different path: splitting the word into an array of characters, then testing each to make sure it is hex-compliant as per the rules.

The test for special characters is made separately, so that on finding a match there a counter is incremented, allowing him to limit the number of numeric substitutions made, which is a nice added extra.

```perl
    sub hexwords($lo,$hi,$sb) {
      my @out;
      open my $fh,'<','dict.txt';
      while (my $line = <$fh>) {
        chomp $line;
        if (length($line) >= $lo && length($line) <= $hi) {
          my $valid = 1;
          my $sbc = 0;
          foreach my $c (split '',$line) {
            if ($c =~ /[oilst]/) {
              $sbc++;
              if ($sbc > $sb) {
                $valid = 0;
              }
            } elsif ($c lt 'a' || $c gt 'f') {
              $valid = 0;
            }
            unless ($valid) {
              last;
            }
          }
            if ($valid) {
              push @out,$line;
            }
        }
      }
      close $fh;
      return \@out;
    }
```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/perlboy1967/perl/ch-1.pl)

Niels, on the other hand, has no problem utilizing `grep` to do his filtration.

As noted above, the historical context of `grep` as a shell utility is good to remember, as it serves as a reminder of how closely the idea of regular expressions is integrated into it. Perl has taken that original idea and broadened this into a general-purpose filter.

Here Niels provides solutions for the main challenge and the two optional tasks as well, each starting with a carefully tuned regex filter on the dictionary word list.

Of note here is his `hexPhrase()` function, which fits words found into partitions of an 8-character phrase space with a minimum of 2-letter words. Spoiler: there's a lot of them, 44634 to be exact.

```perl
    sub hexWords ($)  {
      my ($dictFile) = @_;

      return grep{chomp && /^[a-folist]{2,8}$/}
                  read_file $dictFile;
    }


    sub hexWords2 ($) {
      my ($dictFile) = @_;

      return grep{chomp && /^[a-fost]{2,8}$/}
                  read_file $dictFile;
    }


    sub hexPhrase ($) {
      my ($dictFile) = @_;

      my @res;
      my %hwl;

      my @hw = grep {/^[^ost][[a-fost]{1,5}$/} hexWords2($dictFile);
      map { push(@{$hwl{length($_)}},$_) } @hw;

      my @l = (
        [2,2,2,2], [2,2,4], [2,3,3], [2,4,2], [2,6],
        [3,2,3], [3,3,2], [3,5],
        [4,2,2], [4,4],
        [5,3],
        [6,2]
      );
      foreach my $ar (@l) {
        foreach my $w (glob '{'.join('}:{', map { join(',', @{$hwl{$_}}) } @$ar).'}') {
          my @w = map { ucfirst } split(/:/,$w);
          $w = join('', @w);
          push(@res, $w) if (length(join('',uniq(@w))) == 8);
        }
      }

      return @res;
    }
```

[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/ryan-thompson/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[PWC 166 › Hexadecimal Words - Ryan J Thompson](https://ry.ca/2022/05/hexadecimal-words/)

This is Ryan's baby, so let's see what he did for us, shall we?

Ryan serves us up with solutions prepared two ways. First off is a demonstration of just how compact a solution can be, incorporating a `map` and `grep` to filter out any word that doesn't make the cut in a single line.

```perl
    use File::Slurper qw< read_lines >;

    my $dict = $ARGV[0] // '../../../data/dictionary.txt';

    say for map {     y/olist/01157/r    }
           grep { /^[0-9a-folist]{2,8}$/ } read_lines($dict);
```

Ok, I'm sure the file-slurping function he imports will likely add significant number of lines to this code, but the point remains that a well-placed regex followed by numeric substitution is all we need to find our words.

Then again, it is a little less-than-ideal. He cites many shortcomings to this approach, the principle ones being there are only single words being generated and sometimes relentless, pitiless substitution renders those poor words as quivering puddles of line-noise, a crushed, shattered shadow of their former selves.

It's inhumane and unsanitary. This is the 21st century, not medieval Europe. This will not stand.

Much like ants at a picnic, rules arrive and start making 4 lines into 63. And the `File::Slurper` module is still hanging around, don't forget that. And let's add a few more functions from `List::Util` to round things off.

Ultimately, though, the effort accommodating these concerns pays off. After installing a variety or configuration variables for phrase-length, minimum word length and maximum number of number substitutions (as a fraction of the total), Ryan generates a list of a list of 380,000 or so combinations: 8 letters length; minimum 3 letters; 1 number maximum. Here's a short sampling:

```
    Blade Fed => b1adefed
    Blade Fee => b1adefee
    Bleed Cab => b1eedcab
    Bleed Cad => b1eedcad
    Bleed Dab => b1eeddab
    Bleed Dad => b1eeddad
    Bleed Ebb => b1eedebb
    Bleed Fad => b1eedfad
    Bleed Fed => b1eedfed
    Bleed Fee => b1eedfee
    Boded Cab => b0dedcab
    Boded Cad => b0dedcad
    Boded Dab => b0deddab
    Boded Dad => b0deddad
    Boded Ebb => b0dedebb
    Boded Fad => b0dedfad
    Boded Fed => b0dedfed
    Boded Fee => b0dedfee
    Cab Cable => cabcab1e
    Cab Cacao => cabcaca0
    Cab Cadet => cabcade7
    Cab Cased => cabca5ed
    Cab Cease => cabcea5e
    Cab Ceded => cabceded
    Cab Cedes => cabcede5
    Cab Coded => cabc0ded
```

Visual display of information is one of my favorite interests, and adding a space between words is one of those details that separates the modern, urban sophisticate from the filthy savages of the world. Be like Ryan.

The post-processing is done by three subroutines: first the words are filtered, then assembled into phrases, and then the phrases prepared for output.

```perl
    # Perform any desired filtering of results. Takes an array of
    # [ orig_word => hex_word ] and returns true if it should be included
    sub filter(_) {
        my ($orig, $hex) = @{$_[0]};

        # Count number of substitutions in the word
        my $subs =()= ($orig ^ $hex) =~ /[^\0]/g;
        return if $subs > length($hex)*$o{'max-sub'};

        return if length($hex) > $o{length};
        return if length($hex) < $o{'min-length'};

        return 1; # pass
    }

    # Get unique n-word phrases of length $o{length} (recursive)
    sub get_phrases {
        my @phrases;

        sub {
            my $len = sum map { length } @_;

                                    return if $len >  $o{length};
            push @phrases, [@_] and return if $len == $o{length};

            __SUB__->(@_, $_) for grep { $_ ge $_[-1] } @words;
        }->();

        @phrases;
    }

    sub pretty_print {
        my $spaces = -1 + max map { 0+@$_ } @_;
        for (@_) {
            my $phrase = join ' ', map ucfirst, @$_;
            my $hexphrase = join '', map { $words{$_} } @$_;
            printf "%@{[$o{length}+$spaces]}s => %$o{length}s\n",
                    $phrase, $hexphrase;
        }
    }
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/dave-jacoby/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[0x7e57ab1e 0xc0deba5e: Weekly Challenge #166 | Committed to Memory](https://jacoby.github.io/2022/05/25/0x7e57ab1e-0xc0deba5e-weekly-challenge-166.html)

When we're substituting a digit for a letter that bears some superficial resemblance, what exactly are we doing? Well, we're making a mapping from one set of characters to another. In this association, each character is linked to a single character in the replacement set, making the mapping surjective, with the domain and codomains consisting solely of the characters in play. However because two letters: "i" and "l", both map to "1", the mapping is *not* injective. Consequently we don't have a bijective mapping, being another name for a strict 1-to-1 equivalence.

As we have two possible sources, when we come across a 1 in a hex-word to be read, it needs to be inferred from context which letter was used to create it. This is one reason why s1111e57 — silliest — is so hard to read.

Dave makes two mappings, in the form of hashes — one for the translated characters and another to recognize disallowed characters. Iterating across the characters found in each candidate word, each letter is translated if a mapping is found, and the word rejected if it shows up in the `%banned` hash.

I suspect he really wanted to use that `get_complement()` function from `List::Compare`.

```perl
    use List::Compare;

    my @words   = get_words();
    my @letters = qw{ a b c d e f o l i s t };
    my @banned  = bad_letters(@letters);
    my %banned  = map { $_ => 1 } @banned;
    my %mapping = (
        i => '1',
        l => '1',
        o => '0',
        s => '5',
        t => '7',
    );
    map { $mapping{$_} = $_ } 'a' .. 'f';

    sub bad_letters( @letters ) {
        my @alpha  = 'a' .. 'z';
        my $lc     = List::Compare->new( \@letters, \@alpha );
        my @banned = $lc->get_complement();
        return @banned;
    }

```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/jo-37/perl/ch-1.pl)

Jorg gives us a compact solution limited to only two numeric substitutions. He accomplished this in a novel way, performing a global match on either 1, 5, or 7. The use of the, um, "Saturn" operator forces list context, which is then taken in scalar context suppling the length of the list, or in other words the number of matches made.

Jorg himself uses the alternate term "goatse" operator, which, for the love of all that is good and holy in the world please do not Google for more information. The Saturn operator (which isn't technically an operator at all, but several chained together) can be found [here, in perlsecret](https://metacpan.org/dist/perlsecret/view/lib/perlsecret.pod#Goatse).

```perl
    while (<>) {
        chomp;
        tr/olist/01157/;
        next unless /^[0-9a-f]{2,8}$/;
        # Allow a maximum of two lesser comprehensible letters.
        # Force global match into list context, then convert to scalar.
        # See "Goatse" in perlsecret.
        next if 2 < (() = /[157]/g);
        say "0x\u$_";
    }
```

[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/peter-campbell-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Peter attempts Perl Weekly Challenge](https://pjcs-pwc.blogspot.com/2022/05/d00dle5-we-are-asked-for-list-of-2-8.html)

If we were to eliminate the substitution from "l" to "1", then each number could have only one character equivalent, and our brains would then think we're just looking at a funny font where some of the characters happen to look like numbers. That would be a lot easier to deal with, I dare say.

Peter goes ahead and implements this particular option, which helps quite a bit. Here's a sampling:

```perl
    Omitting l -> 1:
        ABA7E   ABA7ED   ABA7E5    ABB07   ABB075 ABD1CA7E     ABE7    ABE75  ABE77ED    AB1DE
       AB1DE5    AB0DE   AB0DE5  AB5CE55   ACCEDE  ACCEDED  ACCEDE5   ACCE55 ACCE55ED ACCE55E5
       ACC057 ACC057ED  ACC0575      ACE     ACED     ACE5     AC1D    AC1D5      AC7    AC7ED
         AC75       AD      ADD    ADDED   ADD1C7 ADD1C7ED  ADD1C75     ADD5      AD0    AD0BE
       AD0BE5      AD5   AFFEC7 AFFEC7ED  AFFEC75    AF007      A1D     A1DE    A1DED    A1DE5
         A1D5       A5 A5BE5705  A5CE71C A5CE71C5    A51DE   A51DE5      A55    A55E5   A55E55
     A55E55ED A55E55E5    A55E7   A55E75   A55157 A55157ED  A551575
```
This is welcome change to my tired eyes, but taken alone, the going can still be tough if we allow unlimited numbers. The last word, "assists" serves as a warning to the cavalier.

```perl
    # not allowing l -> 1
    say qq[\nOmitting l -> 1:];
    $count = 0;
    WORD: while ($dictionary =~ m|(.*)?\n|g) {
        $word = $1;
        next if (length($word) < 2 or length($word) > 8) or $word =~ m|[^abcdefoist]|i;
        $word =~ y|oistOIST|01570157|;
        print sprintf('%9s', uc($word));
        print qq[\n] unless ++$count %10;
    }
    print qq[\n] if ++$count %10;
    say qq[$count words];
```

[**Julien Fiegehenn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/julien-fiegehenn/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Typescript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/julien-fiegehenn/typescript/ch-1.ts)


&nbsp;&nbsp;**blog writeup:**
[The Weekly Challenge 166: Github DWIM - Julien's tech(ish) blog](https://simbabque.github.io/posts/weekly-challenge-166-github-copilot/)

Lastly, Julien gives a uniquely new method, novel less for its actual approach but rather from its means of construction, having been directed in consultation with GitHub copilot.

For those unfamiliar, GitHub copilot is an AI-assisted IDE, where the user prompts the AI with comments on what needs to be done, and the AI suggests code to do it.

It's unclear how much of what is presented here remains as actually written by the AI, but Julien does use the adjective "mostly", and notes that it's "not the best quality code".

For what it's worth he does do something else interesting, to slurp in his dictionary data.  Using `Path::Tiny` for his I/O, this immediately gives us a `lines` method, with a `chomp` attribute. Looks easy to operate.

```perl
    use Path::Tiny 'path';
    use feature 'say';

    my @dictionary = path('./dict.txt')->lines( { chomp => 1 } );

    sub find_hex_words {
        my $dictionary = shift;
        my @words;
        foreach my $word (@dictionary) {
            next if length $word < 2;
            next if length $word > 8;
            $word =~ tr/olist/01157/;

            if ( $word =~ /^[0-9a-f]+$/ ) {
                push @words, $word;
            }
        }
        return \@words;
    }
```



## Blogs and Additional Submissions in Guest Languages for Task 1:


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/athanasius/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/athanasius/raku/ch-1.raku)

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC166 - Hexadecimal Words - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/05/24/pwc166-hexadecimal-words/)


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/james-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #166](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-166/james-smith)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/laurent-rosenfeld/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 166: Hexadecimal Words and K-Directory Diff](http://blogs.perl.org/users/laurent_r/2022/05/perl-weekly-challenge-166-hexadecimal-words-and-k-directory-diff.html)


[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/robert-dicicco/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/robert-dicicco/julia/ch-1.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/robert-dicicco/raku/ch-1.raku), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/robert-dicicco/ruby/ch-1.rb)


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/wlmb/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 166 – W. Luis Mochán](https://wlmb.github.io/2022/05/25/PWC166/)

------------------------------------------





---

# TASK 2 {#PWC166TASK2}

# K-Directory Diff
*Submitted by: Ryan J Thompson*

Given a few (three or more) directories (non-recursively), display a side-by-side difference of files that are missing from at least one of the directories. Do not display files that exist in every directory.

Since the task is non-recursive, if you encounter a subdirectory, append a /, but otherwise treat it the same as a regular file.

**Example**

Given the following directory structure:
```
dir_a:
    Arial.ttf  Comic_Sans.ttf  Georgia.ttf  Helvetica.ttf
    Impact.otf  Verdana.ttf  Old_Fonts/

dir_b:
    Arial.ttf  Comic_Sans.ttf  Courier_New.ttf  Helvetica.ttf
    Impact.otf  Tahoma.ttf  Verdana.ttf

dir_c:
    Arial.ttf  Courier_New.ttf  Helvetica.ttf  Impact.otf
    Monaco.ttf  Verdana.ttf
```
**expected output:**

The output should look similar to the following:
```
    dir_a          | dir_b           | dir_c
    -------------- | --------------- | ---------------
    Comic_Sans.ttf | Comic_Sans.ttf  |
                   | Courier_New.ttf | Courier_New.ttf
    Georgia.ttf    |                 |
                   |                 | Monaco.ttf
    Old_Fonts/     |                 |
                   | Tahoma.ttf      |
```

## about the solutions
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/athanasius/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/polettix/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/jo-37/perl/ch-2.pl),
[**Julien Fiegehenn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/julien-fiegehenn/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/laurent-rosenfeld/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/mattneleigh/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/perlboy1967/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/peter-campbell-smith/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/roger-bell-west/perl/ch-2.pl),
[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/ryan-thompson/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/wlmb/perl/ch-2.pl)

For our second task we're veering away from our usual string munging and number crunching to focus on another central talent of Perl, the language known as the Pathologically Eclectic Rubbish Lister.

Which would be listing rubbish, of course.

It's nice to branch out, wouldn't you say?

There were 17 submissions for the second task this past week.

## A SELECTION of SUBMISSIONS
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/athanasius/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/colin-crain/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/peter-campbell-smith/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/wlmb/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/perlboy1967/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/polettix/perl/ch-2.pl),
[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/ryan-thompson/perl/ch-2.pl), and
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/james-smith/perl/ch-2.pl)

The task has three or so basic components: input, sorting, and output, with arguably the last two a little more important than the first.

Constructing a model directory structure and then parsing it using `opendir` and `readdir` is a very useful thing ot know about in Perl, and I will not deride the utility of setting up a model in one's filesystem to do this. It's a good exercise, and I've used these loyal and trustworthy functions myself in this past year. When you need them, they're there for you, and have your back. Perl's good like that.

The logic portion of the challenge in deeply entangled with the output report, because to write files ordered by *every* file, yet with only the existing files written in each directory's column, we need a to be able to produce that sorting on command as we write each line of output. So we need to structure our logic accordingly. We saw different approaches to what I regarded fundamentally as a data structure problem. The detail that we aren't just listing the file contents but the differences, also means that any file present in all directories should not be listed at all. This throws another small complication in the works.

Finally, pretty-printing the fancy report is tricky, for the reasons stated above. One file per line, either listed or left blank, under each directory means we need an ordered list of all files not common to all directories to start with. As each file is iterated through we then need to write a line of text with the file listed in possibly numerous places, properly spaced.

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/athanasius/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/athanasius/raku/ch-2.raku)

A common action in sorting the file data was to construct a hash keyed with the directory names, each pointing to a list of files within it. These hash value lists are then taken and reformulated as a hash of filenames, each pointing to a list of directories that contain it.

Here the monk Athanasius constructs just such a sequence of actions, followed by a filter to remove files located in every directory from the processed, reversed hash.

This is their main control flow, illustrating the sorting. The table display is a whole system to itself, keeping track of the spacing. However we are already largely there, as we can sort the keys of `%file2dirs` to get the information we need to write each line of the output.

```perl
    MAIN:
    #==============================================================================
    {
        my @dirs      = parse_command_line();
        my $dir2files = map_dir_to_files( \@dirs );
        my %file2dirs;

        for my $dir (keys %$dir2files)
        {
            for my $file (@{ $dir2files->{ $dir } })
            {
                push @{ $file2dirs{ $file } }, $dir;
            }
        }

        my $dir_count = scalar @dirs;

        for my $filename (keys %file2dirs)
        {
            if (scalar @{ $file2dirs{ $filename } } == $dir_count)
            {
                delete $file2dirs{ $filename };
            }
        }

        display_table( \@dirs, \%file2dirs );
    }
```


[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/colin-crain/perl/ch-2.pl)

For my own solution, I skipped building a detailed model filesystem to read, and instead hardcoded the data directly as lists. I even wrote some code that *should* work, but was more focused on the problem of how to sort and present the differences.

I settled on what I think of as inserting everything into a big crazy data structure and then flipping this on its side to read out the result. It seems to work quite well.

The input data is a hash of directories, with each key pointing to an array of files within that directory.

The output data structure is a hash, `%file_locations`, of file names pointing to an array of indices where those files are found. The indices correspond to the ordering of the sorted list of directory keys.

Thus, if we allocate one column per directory, the index lists will correspond to the columns that should be populated in that file's output line. Then we can construct an array for each line of the output, with either filenames or empty strings at each correct index.

The logic, then, is all about creating this intermediate array of index values for each file.

```perl
    ## fill the data structure
    my $i = 0;
    for my $dir (sort keys %dirs) {
        for my $file ($dirs{$dir}->@*) {
            $file_locations{$file}->[$i] = $file;
        }
        $i++;
    }

    ## read the data structure and write the report
    $i       = 0;
    my $cols = keys %dirs;
    my $w    = 20;              ## arbitrary and fixed column width
    my $fmt  = " %-${w}s ";

    my $header =  join '|', map { sprintf $fmt, $_ } sort keys %dirs;
    my $break  =  join '|', map { sprintf $fmt, $_ } ('-' x $w) x keys %dirs;

    say $header;
    say $break;

    for my $file ( sort keys %file_locations) {
        my $fcount = scalar grep { $_ } $file_locations{$file}->@*;
        my $dcount = scalar keys %dirs;
        next if $fcount == $dcount;

        ## fiddle the arrays to make sure we have one element for each
        ## directory to improve output look
        my @out = map { $file_locations{$file}->[$_] // '' }(0..$dcount-1);
        say join '|', map { sprintf $fmt, (defined $_ ? $_ : '') } @out;
    }
```

[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/peter-campbell-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Peter attempts Perl Weekly Challenge](https://pjcs-pwc.blogspot.com/2022/05/d00dle5-we-are-asked-for-list-of-2-8.html)

Peter seems to have taken a similar approach, at least with regards to constructing a  central hash of filenames associated with a list of all directories that contain it. .

In his own words, from his [writeup](https://pjcs-pwc.blogspot.com/2022/05/d00dle5-we-are-asked-for-list-of-2-8.html), he describes the steps:

> The logic of this is:
> * Loop over directories and files
> * Find the longest file name (to determine column width)
> * Create `%files` with key = file name and value = a list of the containing directories
> * Create a string (`$all`) that indicates the file is in all directories

He uses a method of keeping the directory list for each file as a string. As each directory is read in, an outside model string is appended to with the name, so that in the end this model shows what a file string would look like if found en every directory. A simple string equality with this model is used to filter out files found everywhere from the output.

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/wlmb/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 166 – W. Luis Mochán](https://wlmb.github.io/2022/05/25/PWC166/)

Placing the parsed filenames into a hash, associated with location data seemed to be pretty natural approach. Exactly how that location data was encoded, however, showed wide variation.

Here Luis builds a hash keyed with the filenames, with each pointing to another hash with directory names as keys and value 1. Nested hashes, I might add, are inherently cool. The differences in access time between an ordered array and an associative array are probably smaller than you think.

```perl
    # Prepare data
    foreach(@ARGV){ # iterate over provided directories
        opendir(my $dir_handle, $_);
        while(my $file_name=readdir $dir_handle){ # iterate over directory content
            $file_name.="/" if -d "$_/$file_name"; # flag file if it is a nested directory
        $present{$file_name}{$_}=1; # $file_name is present in directory $_
        }
    }
    # Output results
    say join "|", "", @ARGV, ""; # output row of directories
    say "|-"; # separator line
    foreach (sort keys %present){
        next if (keys %{$present{$_}}==uniq @ARGV); # skip files present everywhere
        print "| "; # start a row
        foreach my $directory(@ARGV){
            print $present{$_}{$directory} ? "$_ |" : " |"; # filename if present, blank if not
        }
        say "";
    }
```

The output is simplified because it is designed to tabulate under emacs org-mode. As a one time combatant in the emacs-vim wars I approve of this. I still use many of the keybindings in my current editor. They're wired into my brain.

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/perlboy1967/perl/ch-2.pl)

Niels constructs a similar hash-of-hashes, but goes through the trouble of properly constructing a text output table. Not that I'm disparaging emacs users, mind you, as I would never do that. For shame! And more so I sometimes want to see what org-mode is all about — everyone lauds it as a game-changer, which makes me curious.

But not so curious as to find the time to do it, unfortunately. I just don't seem to have enough time for everything anymore.

But back to Niels. In the top section we can see the data structure being constructed, and in the bottom the output is quickly formulated. Of note here the column widths here are dynamic, each sized to the directory name and the files within it by a carefully constructed format string.

Each line is then output using a `printf` statement.

```perl
    # Build filelist presence map
    for my $dir (@dirs) {
      $maxLength{$dir} = length($dir);
      opendir(D, $dir);
      map {
        $_ .= '/' if (-d "$dir/$_");
        $dirEntries{$_}{$dir}++;
        $maxLength{$dir} = max($maxLength{$dir}, length($_));
      } readdir(D);
    }

    # Create report
    my $fmt = join(' | ', map { "%-$maxLength{$_}s" } sort keys(%maxLength))."\n";

    printf($fmt, @dirs);
    printf($fmt =~ tr/ /-/r, map { '-' x $maxLength{$_} } @dirs);
    foreach my $f (sort keys %dirEntries) {
      printf($fmt, map { exists $dirEntries{$f}{$_} ? $f : '' } @dirs)
        unless (scalar @dirs == scalar keys %{$dirEntries{$f}});
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC166 - K-Directory Diff - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/05/25/pwc166-k-directory-diff/)

Flavio approaches the problem in the framework of set theory: if each directory is a set of files, what we are looking for is the difference of the sets: the union of all sets minus the intersection of all sets. This will eliminate files common to all directories.

In a major deviation from the norm, though, Flavio has constructed not just lists of files, but ordered arrays of the directory columns, with empty elements interspersed where files should *not* be listed in the output.

The output, then, is iterating through these lists one element at a time, compiling the line for that element from listed either filenames of empty strings, and then outputting the results.

```perl
    sub select_incompletes (@lists) {
       my (@retval, %union, %intersection);
       @intersection{$lists[0]->@*} = ();
       for my $list (@lists) {
          @union{$list->@*} = ();
          %intersection = map { $_ => 1 }
             grep { exists $intersection{$_} } $list->@*;
          $list = { map { $_ => $_ } $list->@* };
          push @retval, [];
       }
       for my $item (sort { $a cmp $b } keys %union) {
          next if exists $intersection{$item};
          for my $i (0 .. $#lists) {
             push $retval[$i]->@*, $lists[$i]{$item} // '';
          }
       }
       return @retval;
    }
```

[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/ryan-thompson/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[PWC 166 › K-Directory Diff - Ryan J Thompson](https://ry.ca/2022/05/k-directory-diff/)

Ryan also chooses a hash of hases, with directories as top-level keys, linked to a `files` hash and a `maxlen` maximum string length. The `files` hash in turn contains a key for every file within the directory. Along the way, he complies a sorted list of files and directories that he can iterate through to construct the output, checking at each directory column to see whether a file exists as a key.

Ryan is a little more robust in his directory parsing than most, installing file switches to discard anything not a file or a directory, and making sure in the case of a directory read that it has a slash appended.

The `File::Slurp` module has a `read_dir` function that makes short work of inhaling the filesystem structure.

```perl
    # Read all dirs, calculate their max filename length, and return the works
    # $result{dir1}{files}{fileA} = 1 if fileA exists in dir1
    # $result{dir1}{maxlen} = maximum filename length in dir1
    sub read_all_dirs {
        map {
            my $dir = $_;
            my %hash = map  { $_ => 1 }
                       map  { -d "$dir/$_" ?  "${_}/" : $_ }
                       grep { -f "$dir/$_" or -d "$dir/$_" } read_dir($dir);

            $dir => {
                files  => \%hash,
                maxlen => max map length, keys %hash, $dir
            }
        } @_
    }

    # Main event: Output files that do not exist in all @dirs
    for my $file (@uniq) {
        my @files = map { $dirs{$_}{files}{$file} ? $file : '' } @dirs;
        next if all { length } @files; # Exists in all directories

        printf $fmt, @files;
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/james-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #166](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-166/james-smith)

Finally we'll end with James, who gives us his familiar treatment working through various approaches to the subject as hand. Here he starts by processing the input directory list data into a hash of filenames keyed to a nested hash of the directories that contain them.

It seems there were two basic strategies in building the central data structure: either this way, with files as keys and directory names as values, or vice versa, with directories pointing to filenames. It's interesting that the two end up fairly equivalent as they both hold the relationships required to construct the differential table.

If we're iterating through filenames and matching them to directories, we can end up with arrays of columns, one for each directory, but to output them we need the elements in each column to match the respective output lines to make our pleasing table. So as each column array is built for the directories, a test is made to see whether a file is contained within it, and either the filename is added to the array or and empty string, denoting a space.

```perl
    ## Now draw the body - we loop through each of the unique filenames
    ## and see whether it is in all 4 columns (in which case we skip)
    ## otherwise we look to see which entries are present in each
    ## directory and show those....

    for my $filename ( sort keys %filenames ) {

    ## Foreach filename - we first see it is in all columns,
    ## If it is we display the filename in the appropriate columnns.

      next if @paths == keys %{$filenames{$filename}};
      my @columns;
      for (@paths) {
        if( exists $filenames{$filename}{$_} ) {
          push @columns, $filename;
        } else {
          push @columns, '';
        }
      }
      say sprintf $TEMPLATE, @columns;
    }
```

This all works well, so then he goes golfing. I'll leave out most of the steps, but here is where he ends up:

```perl
    sub z{my($l,%d,%u)=0;/\//,$u{$'.'/'x-d}{$d{$`}=$`}++for<*/*>;$l<length?$l=length
    :1for(my@p=sort keys%d),@_=keys%u;say$a=join('-'x$l,('+--')x@p,'+
    '),sprintf($b="| %-${l}s "x@p.'|
    ',@p),$a,map({//;@p-%{$u{$'}}?sprintf$b,map{$u{$'}{$_}?$':''}@p:()}sort@_),$a}
```

I don't think I'm even going to try.

However interested parties will be able to consult his [detailed blog writeup](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-166/james-smith) where he explains what he's done quite well.




## Blogs and Additional Submissions in Guest Languages for Task 2:

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/dave-jacoby/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[0x7e57ab1e 0xc0deba5e: Weekly Challenge #166 | Committed to Memory](https://jacoby.github.io/2022/05/25/0x7e57ab1e-0xc0deba5e-weekly-challenge-166.html)


[**Julien Fiegehenn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/julien-fiegehenn/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[The Weekly Challenge 166: Github DWIM - Julien's tech(ish) blog](https://simbabque.github.io/posts/weekly-challenge-166-github-copilot/)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/laurent-rosenfeld/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/laurent-rosenfeld/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 166: Hexadecimal Words and K-Directory Diff](http://blogs.perl.org/users/laurent_r/2022/05/perl-weekly-challenge-166-hexadecimal-words-and-k-directory-diff.html)

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/roger-bell-west/javascript/ch-2.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/roger-bell-west/kotlin/ch-2.kt), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/roger-bell-west/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-166/roger-bell-west/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 166: Hexing the Directories](https://blog.firedrake.org/archive/2022/05/The_Weekly_Challenge_166__Hexing_the_Directories.html)



------------------------------------------





---

<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>

<center>
<h1 id="PWC166BLOGS">_________ THE BLOG PAGES _________</h1>
</center>


---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, by some miracle I somehow continue to maintain my bearings.**

**Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your Unquenchable *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC166BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *FOLLOW* these *BLOG* *LINKS*:

**( ...*don't think, trust your training, you're in the zone, just do it ...* )**


**Arne Sommer**

 * [Hexa Diff with Raku - Arne Sommer](https://raku-musings.com/hexa-diff.html) ( *Raku* )

**Dave Jacoby**

 * [0x7e57ab1e 0xc0deba5e: Weekly Challenge #166 | Committed to Memory](https://jacoby.github.io/2022/05/25/0x7e57ab1e-0xc0deba5e-weekly-challenge-166.html) ( *Perl* )

**Flavio Poletti**

 * [PWC166 - Hexadecimal Words - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/05/24/pwc166-hexadecimal-words/) ( *Perl & Raku* )
 * [PWC166 - K-Directory Diff - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/05/25/pwc166-k-directory-diff/) ( *Perl* )
 * [PWC166 - K-Directory Diff (Raku solution) - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/05/26/pwc166-k-directory-diff-raku/) ( *Raku* )

**James Smith**

 * [Perl Weekly Challenge #166](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-166/james-smith) ( *Perl* )

**Julien Fiegehenn**

 * [The Weekly Challenge 166: Github DWIM - Julien's tech(ish) blog](https://simbabque.github.io/posts/weekly-challenge-166-github-copilot/) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 166: Hexadecimal Words and K-Directory Diff](http://blogs.perl.org/users/laurent_r/2022/05/perl-weekly-challenge-166-hexadecimal-words-and-k-directory-diff.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 166: file, directories and hex! – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/05/23/PerlWeeklyChallenge166.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 166: file, directories and hex! – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/05/23/PerlWeeklyChallenge166.html#task1plperl) ( *PL/Perl* )
 * [Perl Weekly Challenge 166: file, directories and hex! – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/05/23/PerlWeeklyChallenge166.html#task1plpgsql) ( *Pl/PostgreSQL* )

**Peter Campbell Smith**

 * [Peter attempts Perl Weekly Challenge](https://pjcs-pwc.blogspot.com/2022/05/d00dle5-we-are-asked-for-list-of-2-8.html) ( *Perl* )

**Roger Bell_West**

 * [RogerBW's Blog: The Weekly Challenge 166: Hexing the Directories](https://blog.firedrake.org/archive/2022/05/The_Weekly_Challenge_166__Hexing_the_Directories.html) ( *Perl & Raku* )

**Ryan Thompson**

 * [PWC 166 › Hexadecimal Words - Ryan J Thompson](https://ry.ca/2022/05/hexadecimal-words/) ( *Perl* )
 * [PWC 166 › K-Directory Diff - Ryan J Thompson](https://ry.ca/2022/05/k-directory-diff/) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 166 – W. Luis Mochán](https://wlmb.github.io/2022/05/25/PWC166/) ( *Perl* )
