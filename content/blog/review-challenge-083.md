---
author:       Colin Crain
date:         2020-11-03T00:00:00
description:  "Colin Crain › Perl Weekly Review #083"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #083"
image:        images/blog/p5-review-challenge-083.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-082/).* )

Welcome to the Perl review for **Week 083** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

---

### Why do we do these challenges?

I suppose any answers to that would be as wide ranging and varied as the people who choose to join the team. One thing is clear: it's not a competition, and there are no judges, even if there is a "prize" of sorts. About that, I think of it more as an honorarium periodically awarded to acknowledge the efforts we make towards this strange goal. So there's no determination to find the *fastest*, or the *shortest*, or even, in some abstract way, the *best* way to go about things, although I'm certain the individuals have their own aspirations and personal drives. As Perl is such a wonderfully expressive language, this provides quite a bit of fodder to the core idea of TMTOWTDI, producing a gamut of wonderfully varied techniques and solutions.

Even the tasks themselves are often open to a certain amount of discretionary interpretation. What we end up with is a situation where each participant is producing something in the manner they find the most interesting or satisfying. Some team members focus on carefully crafted complete applications that thoroughly vet input data and handle every use case they can think up. Others chose to apply themselves to the logic of the underlying puzzle and making it work in the most elegant way they can. Some eschew modules they would ordinarily reach for, others embrace them, bringing to light wheels perhaps invented years ago that happen to exactly solve the problem in front of them today.

I've been considering this question for some time and have found one binding commonality between all of us solving these challenges each week, in that however we normally live our lives, the task in front of us more than likely has nothing to do with any of that . And I think this has great value. We all do what we do, out in the real world, and hopefully we do it well. The Weekly Challenge provides a opportunity to do something germane to that life yet distinctly different; if we only do the things we already know how to do we only do the same things over and over. This is where the "challenge" aspect comes into play.

So we can consider the Weekly Challenge as providing a problem space outside of our comfort zone, as far out from comfort as we wish to take things. From those reaches we can gather and learn things and bring what we want back into our lives. Personally, I think that's its greatest value of all.**

---

Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due. And that's why I'm here, to try and figure out how to do that.

Let's have a look and see what we can find.

---

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-083/) or the summary [**recap**](/blog/recap-challenge-083/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC083TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC083TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC083BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC083TASK1}
# Words Length
*Submitted by: Mohammad S Anwar*

You are given a string $S with 3 or more words.
Write a script to find the length of the string except the first and last words ignoring whitespace.

Example 1:

    Input: $S = "The Weekly Challenge"
    Output: 6

Example 2:

    Input: $S = "The purpose of our lives is to be happy"
    Output: 23

#

## about the solutions

There were 37 submissions for task 1 this last week. They fell out fairly evenly between those that treated the sentence as arrays of words, with array operators to manipulate them, and food for regexes, and all of the awesome power that implies.

## SLICES and SPLICES and SPLITTING oh my!
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/adam-russell/perl/ch-1.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/alexander-pankoff/perl/ch-1.pl),
[**Andinus**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/andinus/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/athanasius/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/colin-crain/perl/ch-1.pl),
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/cristian-heredia/perl/ch-1.pl),
[**Daniel Mita**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/daniel-mita/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/dave-jacoby/perl/ch-1.pl),
[**Dieter Dobbelaere**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/ddobbelaere/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/jo-37/perl/ch-1.pl),
[**Lars Thegler**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/lars-thegler/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/lubos-kolouch/perl/ch-1.pl),
[**Myoungjin Jeon**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/jeongoon/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/ulrich-rieke/perl/ch-1.pl),
[**Vinod Kumar K**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/vinod-k/perl/ch-1.pl),
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/walt-mankowski/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/wanderdoc/perl/ch-1.pl)

In this form, the words in the sentence are separated by the whitespace we are told to ignore, so the phrase can be taken as a sequence of stuff that's not whitespace, and we can turn the sentence in string form into an array by using `split` on it.

[**Andinus**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/andinus/perl/ch-1.pl)

starts the ball rolling with a nice pure demonstration:

```perl
    my @words = split / /, $ARGV[0];
    shift @words;
    pop @words;

    my $len;
    $len += length($_) foreach @words;
```

We `split` on space, `shift` off the first word, `pop` off the last, then iterate through what's left and sum the lengths of the individual elements. Easy-peasy.

[**Lars Thegler**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/lars-thegler/perl/ch-1.pl)

adds a `join` in the latter half to make the count that of a single string:

```perl
my $S = shift;                                # get the string
my @W = split /\s+/, $S;                      # convert into words
die 'must be 3 or more words' unless @W >= 3; # check that it's long enough
shift @W;                                     # drop the first word
pop @W;                                       # drop the last word
my $length = length(join '', @W);             # the length of the rest
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/dave-jacoby/perl/ch-1.pl)

introduces the idea that there may well be superfluous whitespace before the first word or beyond the last. Splitting on whitespace would get fouled by this and produce the wrong result. So we whack it with a regex before we start. Many if not most people added this additional check, although I can't argue it's strictly speaking *necessary*.

```perl
    sub words_length ( $string ) {
        $string =~ s/^\s|\s$//gmix;
        my @string = split /\s+/, $string;
        pop @string; shift @string;
        my $newstring = join '', @string;
        say $string;
        say length $newstring;
}
```

[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/cristian-heredia/perl/ch-1.pl)

covers similar territory, breaking her process down into discreet steps in different routines:

```perl
convert2Array();

sub convert2Array {
    @array = split / /, $S;
    removeFirstLast();
}

sub  removeFirstLast {
    shift @array;
    pop @array;
    lengthString();
}

sub lengthString {
    foreach (my $i=0; $i<@array; $i++) {
        $count = $count + length $array[$i];
    }
    print "Outout: $count \n";
}
```

As you can see there's more than one way to do it. I do think people got a little bored with the arguably "correct" solutions, and decided to break out a bit and try something new. For example, here's

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/wanderdoc/perl/ch-1.pl)

getting creative with the final summation, importing `reduce` to do the work:

```perl
use List::Util qw(reduce);
sub words_length
{
     my $string = $_[0];
     my @words = split(/\s+/, $string);
     shift @words;
     pop @words;

     my $length = reduce {$a + $b} map length, @words;
     return $length;
}
```

Shifting and popping the array is an obvious and effective way to remove the first and last elements, but is hardly the only one. A few people seem to have thought: "Why use two operations when one will do?" and decided that `splice` would do the job just fine. And it does.

[**Dieter Dobbelaere**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/ddobbelaere/perl/ch-1.pl)

demonstrates the technique. The three argument form of `splice` used here takes from an offset for a given length. As explained in [perlfuc](https://perldoc.perl.org/perlfunc):
>"If LENGTH is negative, removes the elements from OFFSET onward except for -LENGTH elements at the end of the array"

```perl
sub count_inner_chars {
    my ($S) = @_;
    my @a   = split /\s+/, $S;
    length join '', splice @a, 1, -1;
}
```

We split, we splice, we join and ask for the length.

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/jo-37/perl/ch-1.pl)

gives us a quite compact version:

```perl
    length join '', splice @{[SPLIT qr{\s+}]}, 1, -1;
```

Of course, taking this idea one step further, why alter the array at all? Instead we can use an array slice to only examine those elements that interest us. There were quite a number of solutions that took this approach, including one of my own. I like slices, and cannot overstate how useful they can be.

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/athanasius/perl/ch-1.pl)

```perl
    my @words = split /\s+/, $S;

    scalar @words >= 3           or error('Too few words in the input string');

    print qq[Input: \$S = "$S"\n\n];

    my $length  = 0;
       $length += length for @words[1 .. $#words - 1];

    print "Output: $length\n";
```

The real work is all done in that one line. Clean and compact.

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/james-smith/perl/ch-1.pl)

gives us another view:

```perl
    sub other_chars {
      my @A = split m{\s+}, shift;            ## split into words...
      return length join q(), @A[1..(@A-2)];  ## compute length of words - simpler to join...
                                              ## use array slice to remove first and last
    }
```

[**Daniel Mita**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/daniel-mita/perl/ch-1.pl)

by splitting the final string into its own array, Daniel cleverly goes to some length to avoid using the word `length`:

```perl
    my @words = split( /\s+/, $ARGV[0] // '' );
    if ( @words >= 3 ) {
        say scalar( split( //, join( '', @words[ 1 .. $#words - 1 ] ) ) );
    }
```

But I think if we're considering sparcity of words,

[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/walt-mankowski/perl/ch-1.pl)

apparently effortlessly avoids using very many words at all:

```perl
    my $s = $ARGV[0];
    my @s = split / /, $s;

    say length(join '', @s[1..$#s-1]);
```

That's the whole thing. How much more do you need? Lastly, we should have a look at the function submitted by

[**Myoungjin Jeon**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/jeongoon/perl/ch-1.pl)

Jeon provides us weekly with unique and often complex solutions in many languages. Here though, I found his solution a singular thing of grace and beauty. Its *pretty*. I don't know what else to say.

```perl
    say(
        sum
        map {length}        # count each length
        @words[
               1            # from the second word
               ..
                $#words-1   # to   the second last one
              ]
       );
```












## RELEASE the REGEXEN!
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/abigail/perl/ch-1.pl),
[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/bob-lied/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/colin-crain/perl/ch-1.pl),
[**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/dave-cross/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/jaldhar-h-vyas/perl/ch-1.pl),
[**Jose Luis**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/jluis/perl/ch-1.pl),
[**Julio de Castro**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/juliodcs/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/perlboy1967/perl/ch-1.pl),
[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/nunovieira220/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/roger-bell-west/perl/ch-1.pl),
[**Shawn Wagner**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/shawn-wagner/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/sgreen/perl/ch-1.pl),
[**Steve Rogerson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/steve-rogerson/perl/ch-1.pl), and
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/steven-wilson/perl/ch-1.pl)

Regular expressions open the doors to their own private world of string manipulation. Removing the first or last words or extracting the middle of a string to work on are actions easily codified into sets of rules and so matching and substitution are quite well suited to this task.

[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/bob-lied/perl/ch-1.pl)

shows us how it's done with a kind of ridiculously thorough breakdown of the job, and I mean that in the kindest possible way:

```perl
    # Trim leading white space.
    $S =~ s/^\s+//;

    # Remove the first word -- anything that's not white space
    $S =~ s/^\S+//;

    # Turn the string around.
    $S = reverse($S);

    # Trim leading white space.
    $S =~ s/^\s+//;

    # Remove the first word again.
    $S =~ s/^\S+//;

    # Ignore white space.
    $S =~ s/\s*//g;

    say length($S);
```

This quite matter-of-fact, clear and descriptive. All of the base components are there, one action per line. Most folks combined them into denser, more powerful statements.

[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/steven-wilson/perl/ch-1.pl)

for example, removes the first and last words with one fell swoop.

```perl
    sub length_of_excerpt {
        my $input = shift;
        $input =~ s/^\w+|\w+$//g;    # trim first and last words
        $input =~ s/\s//g;           # remove whitespace
        return length $input;
    }
```

Alternately, instead of removing the ends, we can extract the center.

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/roger-bell-west/perl/ch-1.pl)

demonstrates:

```perl
sub wl {
  my $s=shift;
  $s =~ s/^\S+\s+(.*?)\s+\S+$/$1/;
  $s =~ s/\s+//g;
  return length($s);
}
```

Match the center and replace the line with the capture group. If anyone is having trouble following this,

[**Steve Rogerson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/steve-rogerson/perl/ch-1.pl)

gives us a nice blow-by-blow for what amounts to largely the same effect. Steve uses words and non-words instead of whitespace and non-whitespace, and I would argue there is a slight difference between these ideas. The fact is the dataset is pretty poorly defined for us, and in no place is the concept of a word laid out for us. For example, what about punctuation? Or compound words, or abbreviations? These questions make the use of the `\w` character class problematic, if not actually wrong. I decided to sidestep the entire issue myself by observing the only thing that is actually defined is that whitespace is to be ignored. So I went with a word being anything that wasn't whitespace. I'm well aware that isn't really right either, but what can you do? For a real answer to that question have a look at Abigail's submission, below. In any case I appreciate Steve for laying this out for us.

```perl
    sub find_middle_string_length($string) {
        my ($middle) = $string =~ /
        \A\W*   # skip leading junk before first word.
        \w+     # The first word.
        \W+     # at least one not word char
        (.*)    # everything else (inc c-r with s modifier)
        \W+     # at least one not word char
        \w+     # the final word
        \W*     # optional junk
        \z /msx;

        # end of string. Match on multi-line and have c-r included  in ",*" match

        return 0 if !$middle;

        # Strip out white space.
        $middle =~ s/\s//mgx;
        return length($middle);
    }
```

When it comes down to it language, and with it Natural Language Processing, is a messy thing.

When using regexen, it's often useful to assign to `$_`, to allow using the default topic variable. Here

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/cheok-yin-fung/perl/ch-1.pl)

gives us not one but two examples:

```perl
    $_ = <STDIN>;
    /(^\w+\s)([\w\s*]+)(\s\w+$)/;
    $_ = $2;
    s/\s//g;
    print length, "\n";
```


Ok, so we've condensed the regex from many down to two, but can we do one?  Sure. Of course we can.

[**Julio de Castro**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/juliodcs/perl/ch-1.pl)

```perl
    sub count_middle($phrase) {
        length $phrase =~ s/^\s*\w+|\w+\s*$|\s+//gr
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/polettix/perl/ch-1.pl)

```perl
    sub words_length ($text) {
        length($text =~ s{\A\s*\S+|\s+|\S+\s*\z}{}grmxs);
    }
```

or

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/colin-crain/perl/ch-1.pl)

```perl
    $_ = $ARGV[0] || " The purpose of our lives is to be happy ";
    s/ ^\s* \S+ | \S+ \s*$ | \s+ //xg;
    say length $_;
```

That compact enough for you?











## UNIQUE approaches and other THINGS THAT CAUGHT MY EYE

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/abigail/perl/ch-1.pl)

Abigail with a regex again, this time with full Unicode suport. After a lengthy dissertation on the meaning of a word, they go and encode that into a series of user-defined character classes, themselves extensively utilizing Unicode character properties and Unicode word boundary assertions.

```perl
    my $word =
         qr [(?(DEFINE)
                (?<LETTERS>   \b{gcb} (?:(?=\pL)\X)+ \b{gcb})
                (?<SEPARATOR> ['-] | '- | -')
                (?<START>     '?)
                (?<END>       '?)
             )
              (?&START)
              (?&LETTERS) (?: (?&SEPARATOR) (?&LETTERS) ) *
              (?&END)]x;
```

In case anyone's curious that's what all that unfamiliar backslashed notation is all about. `\pL` matches the [Unicode **p**roperty of a **L**etter](https://perldoc.perl.org/perluniprops#Properties-accessible-through-%5Cp%7B%7D-and-%5CP%7B%7D), \b{gcb} is a zero-width assertion for a [Unicode "Grapheme Cluster Boundary"](https://perldoc.perl.org/perlrebackslash#%5Cb%7B%7D%2C-%5Cb%2C-%5CB%7B%7D%2C-%5CB). When dealing with Unicode things are still a little hairy, to say the least. This is an impressive effort.

After this it's a familiar pattern:

 * remove first word (as defined above)
 * remove last word (followed by anything not a Unicode letter)
 * remove whitespace
 * length of remaining string

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/e-choroba/perl/ch-1.pl)

Choroba gives us regular expressions cooked three ways. In the third of note is the use of the `tr///` translation operator. When given the `/c` modifier, those characters *not* in the searchlist are modified, being everything not whitespace. As `tr///` returns the number of actions taken, this counts the non-whitespace characters.

```perl
    # Substitution returns the number of substitutions.
    sub words_length_subst {
        local ($_) = @_;
        s/^\S+//, s/\S+$//;
        return s/\S/ /g
    }

    # Or remove the words and all whitespace and measure the length.
    sub words_length {
        local ($_) = @_;
        s/^\S+//, s/\S+$//, s/ //g;
        return length
    }

    # Transliteration returns the number of replaced chars and is fast.
    sub words_length_trans {
        local ($_) = @_;
        s/^\S+//, s/\S+$//;
        return tr/\t\n\r\f\ck //c
    }
```

### ONE-LINERS

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/jaldhar-h-vyas/perl/ch-1.pl)

Jaldhar gives us everything we need to know in a regex one-liner:

```
    perl -E '$_ = join q{ }, @ARGV; s/ \A .+? \s+ (.+) \s+ .+? \z / $1 =~ s{\s}{}gr; /emsx; say length;' $@
```

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/colin-crain/perl/ch-1.pl)

I too decided to take things to their logical conclusion:

```perl
    perl -e '$_=$ARGV[0];s/^\s*\S+|\S+\s*$|\s+//xg;print length $_, "\n"'
```

---

# TASK 2 {#PWC083TASK2}
# Flip Array
*Submitted by: Mohammad S Anwar*

You are given an array @A of positive numbers.
Write a script to flip the sign of some members of the given array so that the sum of the all members is minimum non-negative.
Given an array of positive elements, you have to flip the sign of some of its elements such that the resultant sum of the elements of array should be minimum non-negative(as close to zero as possible).
Return the minimum no. of elements whose sign needs to be flipped such that the resultant sum is minimum non-negative.

  **Example 1:**

    Input: @A = (3, 10, 8)
    Output: 1

Explanation: Flipping the sign of just one element 10 gives the result 1 i.e. (3) + (-10) + (8) = 1

  **Example 2**:

    Input: @A = (12, 2, 10)
    Output: 1

Explanation: Flipping the sign of just one element 12 gives the result 0 i.e. (-12) + (2) + (10) = 0



## about the SOLUTIONS

There were 34 submissions for task 2 this last week.

There were two core directives in this challenge: to obtain the number closest to zero, and to do so in the minimum number of moves. The order is important; we want the smallest value first. If you think about it, flipping the importance just asks for the smallest number you can get by negating one number, and this is neither interesting nor hard.

No, this task is much more complicated, because we're searching not for not a single solution, but for the best fit in two ordered criteria. There's always going to be an answer, so we need to sort out many possible outcomes.

We're only asked to actually return the *number* of elements flipped, not the identity of those elements nor the actual minimum found; we're not explicitly asked to show our work here, which can make assessment a little tricky.

Some people output the requested data, the number of flips required. Others output the minimum value achieved. Many did both, perhaps adding the numbers actually flipped or even wrote a completed equation. Although it was sometimes a bit confusing I decided I didn't care and any of these would do. I did have to make a pair of sequences, one with a high minimum sum attainable and the other with a high minimum number of flips to get the smallest value, just to make sure about some of the data. Outputting simply the number 1 proved to be uniquely ambiguous in this task.

## about the PROBLEM

Mathematically, this is a variant of what is known as the Partition Problem: we take a group of numbers and divide them into piles such that the sum of each pile is equal. In this version there are two piles and we want the number of elements in the pile that sums the smaller, so that if we subtract those elements from the sum of the greater the result will be positive.

The minimum of a group of numbers cannot always be 0. For the partitioning to work out that way, the numbers must be able to be divided groups of equal value, so that one minus the other will in turn equal zero. If the sum of all the numbers is an odd number, this sum is not evenly divisible by two. Equality will be impossible as there will always be a remaineder of 1, and so the ideal best fit sum, all other things working out, will still be that remaining 1. An extension of this reasoning reveals that for any set that includes a 0-sum, there cannot be a 1-sum solution, and vice-versa. So the two values share an equal title of optimal solution, each for one-half of the potential sets.


## use a BINARY NUMBER to decide the SIGNS
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/adam-russell/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/cheok-yin-fung/perl/ch-2.pl),
[**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/dave-cross/perl/ch-2.pl),
[**Dieter Dobbelaere**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/ddobbelaere/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/duncan-c-white/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/polettix/perl/ch-2.pl)
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/jo-37/perl/ch-2.pl),
[**Lars Thegler**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/lars-thegler/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/perlboy1967/perl/ch-2.pl),
[**Philip Hood**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/pkmnx/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/sgreen/perl/ch-2.pl), and
[**Steve Rogerson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/steve-rogerson/perl/ch-2.pl)

Of all the tools people reached for in approaching this task, the most common was a list of binary numbers. It goes like this: if we have a list on numbers of length *n*, and each item can have one of two states, a positive value or negative, then there are 2<sup>*n*</sup> combinations of positive and negative values that can constructed. If we create a list of binary numbers between 0 and 2<sup>*n*</sup> - 1, then the patterns of 1s and 0s in those numbers will provide a one-to-one mapping to the patterns of pluses and minuses in the constructed variations. Iterating through these numbers can produce a sequence of templates to guide the placement of the signs in evaluating a particular combination. For example, the with the array (2, 37, 42, 7) the number 0110 might encode the expression -2 + 37 + 42 - 7. As all combinations of 1s an 0s are symmetrically expressed in the binary numbers, it doesn't matter exactly how the digits are mapped to the signs -- a 1 can arbitrarily either mean a '+' or '-'. Either way all the combinations will eventually be examined.

The idea is to assign an individual bit to each element of the input array in a given combination. There were a couple of basic strategies employed.

### construct a parallel array of BITS
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/adam-russell/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/cheok-yin-fung/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/jo-37/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/perlboy1967/perl/ch-2.pl),
[**Philip Hood**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/pkmnx/perl/ch-2.pl), and
[**Steve Rogerson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/steve-rogerson/perl/ch-2.pl)

Most chose to split the binary number into a parallel array of bits, one for each element in the input array. The two arrays are walked through, with the sign of the element decided by the bit values.

[**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/dave-cross/perl/ch-2.pl)

demonstrates the principle:

```perl
    for (0 .. $options) {
        my $binary = sprintf "%0${number_of_flags}b", $_;
        my @flags = split //, $binary;
        my $number_of_on_flags = grep { $_ } @flags;

        my $total = sum map {
            $flags[$_] ? -$ints[$_] : $ints[$_];
        } 0 .. $#flags;

        next if $total < 0;

        if ($total < $lowest_sum or
                $total == $lowest_sum and $number_of_on_flags < $fewest_flips) {
            $lowest_sum = $total;
            $fewest_flips = $number_of_on_flags;
        }
    }
```

Here's another take by

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/perlboy1967/perl/ch-2.pl)

```perl
my $min = sum(@A);
my $bits = scalar(@A);
foreach my $i (0 .. 2**$bits - 1) {
    my @multiplyFactor = map { $_ ? -1 : 1 } split(//,sprintf("%0${bits}b", $i));
    my @flip = map { $_ * shift(@multiplyFactor) } @A;
    my $sum = sum(@flip);

    if ($sum >= 0 and $sum < $min) {
        $min = $sum;
        @A = @flip;
    }

    last if ($min == 0);
}
```

If you prefer the upside down world, then

[**Philip Hood**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/pkmnx/perl/ch-2.pl)

gives us a functional solution. As usual, best read from the bottom up. As a note I'm still searching for the clearest formatting for the complex function applications.

Lets break it down: This takes the list `( 0 .. (2 ** $sza) -1 )` and maps it to bitstrings, which get passed to the grep where they have individual elements negated in the same manner we've just seen, chopping the strings up into an array of bits. The sums are formed into a an array composed of the sum, the number of flipped elements to get there, and the actual array constructed.

Arrays with sums greater than 0 (the `grep` part) are sorted by sum and then negated elements and the smallest element of this sort is dereferenced and output. Pretty sure the last `map` is left over, but harmless. Do I need to say I really like these function chains?

The output, not show in code, is quite descriptive:

```
    Input: 3 10 8 23 34 52 343 23 123 11 898 238 2 567 98
    Output: 5
    Flipping the sign of just 5 elements (23, 34, 23, 898, 238) gives the result 1.
     i.e.: (3) + (10) + (8) + (-23) + (-34) + (52) + (343) + (-23) + (123) + (11) + (-898) + (-238) + (2) + (567) + (98)
```

Anyway, here's the function:

```perl
    my @output = @{ (
       map { $_ }
       sort { $a->[0] <=> $b->[0] || $a->[1] <=> $b->[1] }
       grep { $_->[0] > -1 } map {

          my @k = split //, $_;

          my $sum = 0;
          my $nsum = 0;
          my @sum = ();
          for (0 .. $#k) {

             my $acc = $A[$_];
             if ( $k[$_] eq "1" ) {
                $acc *= -1;
                $nsum++;
             }

             push @sum, $acc;
             $sum += $acc;
          }

          [ $sum, $nsum, @sum ];

       }
       map { sprintf "%0".$sza."b", $_ } ( 0 .. (2 ** $sza) -1 )
    )[0] };
```


### DIRECTLY address the bits INDIVIDUALLY
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/duncan-c-white/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/polettix/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/roger-bell-west/perl/ch-2.pl), and
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/walt-mankowski/perl/ch-2.pl)

Directly looking inside the binary numbers is always an option. When done this way, we can use bitwise operators and don't need to actually represent the numbers in a binary format. After all, the numbers don't care.


[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/walt-mankowski/perl/ch-2.pl)

gives us a nice example of addressing each bit individually:

```perl
    for my $bits (0 .. 2**@a - 1) {
        my $sum = 0;
        my $num = 0;
        for my $i (0..$#a) {
            if ($bits & 2**$i) {
                $sum += $a[$i];
            } else {
                $sum -= $a[$i];
                $num++;
            }
        }
        if (0 <= $sum < $min_sum) {
            $min_sum = $sum;
            $min_num = $num;
        } elsif ($sum == $min_sum && $num < $min_num) {
            $min_num = $num;
        }
    }
```

Here the expression `$bits & 2**$i` looks at a new bit in `$bits` for every index value.
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/sgreen/perl/ch-2.pl) and
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/roger-bell-west/perl/ch-2.pl)
also take this approach. Here's another by

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/polettix/perl/ch-2.pl)

```perl
    sub flip_array (@A) {
       my $first = shift @A;
       my $n = scalar(@A); # number of signs that can be flipped
       my $N = 2 ** $n;
       my $i = 0;
       my ($min, $retval);
       while ($i < $N) {
          my $signs = $i++;
          my $sum = $first;
          my $flipped = 0;
          for my $j (0 .. $#A) {
             if ($signs & 0x1) { # flip
                $sum -= $A[$j];
                $flipped++;
             }
             else {
                $sum += $A[$j];
             }
             $signs >>= 1;
          }
          my $complementary = $n + 1 - $flipped;
          ($sum, $flipped) = (-$sum, $complementary) if $sum < 0;
          $flipped = $complementary if $sum == 0 && $flipped > $complementary;
          ($min, $retval) = ($sum, $flipped)
             if !defined($min)
                || $sum < $min
                || ($sum == $min && $flipped < $retval);
       }
       return $retval;
    }
```


[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/duncan-c-white/perl/ch-2.pl)

on the other hand, recognizes that a string by any other name will smell as sweet, and moves along with `substr`:

```perl
    my $limit = 2**$n;
    foreach my $i (0..$limit-1)
    {
        my $binary = sprintf( "%0${n}b", $i );
        #say "binary=$binary";

        my $sum = 0;
        my $swaps = 0;
        foreach my $pos (0..$n-1)
        {
            my $x = $a[$pos];
            if( substr($binary,$pos,1) eq '1' )
            {
                $x = -$x;
                $swaps++;
            }
            $sum += $x;
        }
        push @sum, $sum;
        push @swaps, $swaps;
        #say "sum=$sum";
        next if $sum < 0;
        if( $sum <= $minsum )
        {
            $minsum = $sum;
        }
    }
```

## other COMBINATION methods
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/alexander-pankoff/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/athanasius/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/colin-crain/perl/ch-2.pl),
[**Daniel Mita**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/daniel-mita/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/jaldhar-h-vyas/perl/ch-2.pl),
[**Myoungjin Jeon**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/jeongoon/perl/ch-2.pl), and
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/pete-houston/perl/ch-2.pl)

Using a binary number as a template for the arithmetic operations was of course not the only way to generate combinations.

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/athanasius/perl/ch-2.pl)

The monk Athanasius draws on `Algorithm::Combinatorics` to produce `subsets` of the array. These subsets are considered as negated elements and are summed and have double their value subtracted from a base sum of all the elements. Minimums are kept for the smallest final sum, and the for the smallest number of negations required to produce that sum.

```perl
    my $iter = subsets(\@A);

    while (my $comb = $iter->next)
    {
        next if scalar @$comb == 0 ||
                scalar @$comb == scalar @A;

        my $comb_sum    = sum0 @$comb;
        my $flipped_sum = $total_sum - 2 * $comb_sum;

        next if $flipped_sum < 0;

        if    ($flipped_sum <  $min_flipped_sum)
        {
            $min_flipped_sum = $flipped_sum;
            @nums_to_flip    = @$comb;
        }
        elsif ($flipped_sum == $min_flipped_sum &&
               scalar @$comb <  scalar @nums_to_flip)
        {
            @nums_to_flip    = @$comb;
        }
    }

    my $nums_to_flip = scalar @nums_to_flip;
```

[**Daniel Mita**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/daniel-mita/perl/ch-2.pl)

Daniel opens by creating a list of index lists in a loop, with each iteration adding a new value to extend the sets with an additional element until all the lists reach n/2, halfway through the list. Each list can represent either the positive or negated values in the final equation, and, unless the lists are equal, only the list or its completment will produce a postive result. All positive results are kept and when done the list is sorted by first summed value and then list length to produce the solution.

```perl
    TOP: while (1) {

        # Add a combination to our array if the sum of that combination
        # is ≤ half the sum of args i.e. we can make them all negative
        push @combinations, [ @ARGV[@idxs] ]
            if sum( @ARGV[@idxs] ) <= sum(@ARGV) / 2;

        # Nothing left to do if all indexes are covered
        last if @idxs == @ARGV;

        # Increase last index if possible
        if ( $idxs[-1] < $#ARGV ) {
            $idxs[-1]++;
        }

        # If we've maxed out the last index
        else {
            # Loop through all the previous indexes
            for ( my $i = $#idxs; $i > 0; $i-- ) {

                # If the difference between an index
                # and the one before is more than 1
                if ( $idxs[$i] - $idxs[ $i - 1 ] > 1 ) {

                    # Increase that previous index
                    my $j = ++$idxs[ $i - 1 ];

                    # Reset all the subsequent indexes (+1 of previous index)
                    for ( @idxs[ $i .. $#idxs ] ) {
                        $_ = ++$j;
                    }

                    # Go back to the start
                    next TOP;
                }
            }

            # Reset all indexes and add an additional element
            # if we couldn't increase any further
            @idxs = ( 0 .. @idxs );
        }
    }
```

If the plan is to generate the solution in the minimum number of negations, it makes sense to take a structured approach to testing: first try flipping individual elements, then combinations of two elements, then three, etc, working upwards. Mathematically, these combinations are known as nCk, "*n* choose *k*", or picking *k* item combinations from a set of *n* members.

To implement a combination function Pete used `Math::Combinatorics`. Alexander Pankoff brought his own recursive routine to the party, as did Daniel Mita. Myself, I reached out to my old friend `Algorithm::Combinatorics`.

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/pete-houston/perl/ch-2.pl)

Pete draws on `Math::Combinatorics` for a nCk function. From this he can feed it increasing values for *k*, increasing the combination length up to one-half the complete input array. He looks at both sides of each list, the picked elements and the unpicked remainder, summing the value and subtracting from the unaltered sum. I particularly enjoyed his code implementing this reversal for some reason. He keeps a running talley for the minimum total, and the minimum number of elements to create it.

```perl
    for my $count (1 .. int (($#in + 1) / 2)) {
        my $combi = Math::Combinatorics->new (
            count => $count,
            data  => [@in]
        );
        while (my @set = $combi->next_combination) {
        print "count ", $count, " combo ", ++$combo, ":   ( @set )\n";
            my $diff = $tot - 2 * sum @set;
            next unless abs $diff <= $min;
            my $numitems = $count;
            if ($diff < 0) {
                # It is the inverse of @set that we want
                # Invert diff and $numitems
                $diff *= -1;
                $numitems = @in - $count;
            }
            if ($diff == $min) {
                $minc = $numitems if $numitems < $minc;
                next;
            }
            print "New min $diff for @set\n";
            $min = $diff;
            $minc = $numitems;
        }
    }
```

[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/alexander-pankoff/perl/ch-2.pl)

Alexander brings his own routine to make increasingly long chains of combinations, which he then sums. Counting backwards from the one-half the total sum of all the elements, he looks at combinations that will sum to that target value. First elements summing to one-half the total are searched for: if any are found then those, when added to the remaining non-negated elements, will produce a final sum of 0. If that cannot be achieved, or the total is not evenly divisible by 2, then the next target is to try for sums that total to n/2 - 1, producing a final sum of 1, etc.

The routine that searches for this combination is quite elegant. When any result is found it is the minimal solution.

```perl
    sub flip_array(@numbers) {
        my $sum     = sum0(@numbers);
        my $ceiling = int( $sum / 2 );

        for my $target ( reverse( 0 .. $ceiling ) ) {
            my $count = first(
                sub {
                    any { sum0(@$_) eq $target } combinations( $_, @numbers );
                },
                1 .. @numbers
            );

            return $count if $count;
        }

        return 0;
    }
```

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/colin-crain/perl/ch-2.pl)

For my own solution I pulled out `Algorith::Combinatorics` which I fed increasing values of *k*. As we proceed through the various combinations of a given length we keep a running tally of the minimum and a list of the elements that created it stored in an array indexed by that minimum. The values in the minimums array can only be added once, so each element holds an array with the minimum number of elements required to produce it.

Because the length grows in an orderly way, if we are able to find a solution that sums to 0, we know immediately that that is the minimum sum, and hence the minimum length required, and we are done. If no 0 solution is found, however, at that point all of the combinations have already been processed and the minimum index of the holding array will contain the elements required in the solution, which is the length of this array. So a best-case 0-sum can be found quite quickly, and in a worst-case scenario all combinations will still only be examined once.

```perl
    for my $k ( 1..@arr ) {     ## for 1,2,3... numbers flipped

        my $min = $base_sum;
        my $pick;

        ## make sets of nCk combinations of elements
        my $iter = combinations(\@arr, $k);
        while (my $c = $iter->next) {

            my $new_sum = $base_sum - 2 * sum $c->@*;
            if ( $new_sum >= 0 and $new_sum < $min ) {
                $min = $new_sum;
                $pick = $c;
            }
        }

        ## @results is array of minimum totals as indexes holding a list of the
        ## flips that create it, set with first instance of that minimum so shorter
        ## lengths will populate first
        $results[$min] ||= $pick;

        last if $min == 0;   ## we cannot do better than 0; we are done
    }
```



## just try ALL THE OPTIONS
### write a RECURSIVE function to get there
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/dave-jacoby/perl/ch-2.pl),
[**Julio de Castro**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/juliodcs/perl/ch-2.pl), and
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/laurent-rosenfeld/perl/ch-2.pl)

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/laurent-rosenfeld/perl/ch-2.pl)

Laurent's `sum_up` routine walks a binary tree through all possibilities and logs the solutions to a hash.

```perl
    sub sum_up {
        my @in =  @{$_[0]};
        my @used_so_far =  @{$_[1]};
        if (@in <= 0) {
            my $sum = 0;
            $sum += $_ for @used_so_far;
            push @{$result{$sum}}, [@used_so_far] if $sum >= 0;
        } else {
            my $item = shift @in;
            sum_up(\@in, [@used_so_far, $item]);
            sum_up(\@in, [@used_so_far, - $item]);
        }
    }
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/dave-jacoby/perl/ch-2.pl)

uses a loop with two values to achieve the same ends:

```perl
sub _flip_array ( $index, $array, $map ) {
    if ( $array->[$index] ) {
        my $nmap->@* = $map->@*;
        for my $bit ( 0, 1 ) {
            $nmap->[$index] = $bit;
            my @munge = _munge( $array, $map );
            my $sum = sum @munge;
            _flip_array( $index + 1, $array, $nmap );
        }
    }
    else {
        my @munge = _munge( $array, $map );
        my $map1 = join '', $map->@*;
        my $sum = sum @munge;
        $hash->{$map1} = $sum;
        if ( $sum > 0 && $sum < $min ) { $min = $sum }
    }
}
```

### LOOP through LIFE UNFETTERED by self reflection (NON-RECURSIVE solutions)
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/james-smith/perl/ch-2.pl) and
[**Jose Luis**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/jluis/perl/ch-2.pl)

In a similar manner to the recursion solutions above, a loop construct flips a pattern of individual elements in the array and the results are preserved.

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/james-smith/perl/ch-2.pl)

gives us an example. Passage through the loop structure variously flips and unflips the sign of individual elements, walking through the possibilities in an orderly fashion. It's quite elegant.

```perl
         $sum += $_ foreach @array; ## Initial "unflipped" sum...
    my(  $flipped, $smallest, $best, $na  ) = (  0, $sum, $sum, scalar @array  ); ## Initialise counts/running sums...

    while( 1 ) {
        ( $best, $smallest )=( $flipped, $sum ) if $sum >= 0 && $sum < $smallest || $sum == $smallest && $flipped < $best;
        foreach( 0..$na ) {
            return $best if $_ == $na;                    ## Now reached the end as we have flipped the last element back...
            $sum += 2*( $array[$_]=-$array[$_] ); ## Flip bit and update sum...
            if(  $array[$_]> 0  ) {                              ## We carry over to the next bit ( if the element has been flipped back )
                $flipped --;
            } else {                                                         ## No need to carry so finish loop...
                $flipped ++;
                last;
            }
        }
    }
```





## the HEURISTIC ALGORITHMS
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/lubos-kolouch/perl/ch-2.pl)

The heuristic algorithm referred to here by Lubos says to first sort the array from largest to smallest. Then make two piles, @a and @b. Starting with the largest element, deposit it into whichever array sums the smallest (or array @b). At the end, the scalar size of the smaller of the two arrays is returned.

No, this puzzle is not that simple. But this method, he notes, is *fast*. And as it appears he knows perfectly well it doesn't answer properly for this puzzle, I feel comfortable discussing it here in its dissolute state.

As it stands, it works by distributing the elements into piles, not necessarily alternately, but in a manner that one is added to until it exceeds the other. For random data that's been sorted, the next element on the list will likely to be as close to the next number as it was from the previous, so the differences in the change to the two groups will likely balance out. When finished, the two piles will have been divided into similarly sized partitions, with the differences minimized along the way.

There's a couple of small things wrong with this implementation, but one problem with applying this generalized algorithm to the task is that it finds the absolute difference between the two piles. Should the two piles not equal in value, then there is only one way to subtract one from the other to yield a positive outcome, so simply picking the pile with fewer elements to subtract will not do. Picking the smaller *sum* is the right move at that stage, because it is specified that we need a positive result.

This particular quick-and-dirty method is known as the "greedy" heuristic algorithm, and as all algorithms of this type is perhaps best considered an educated guess. It may or may not be right, but is unlikely to be very wrong, either. But again, the challenge is to find the best solution in the shortest number of moves, not to find what is likely to be the smallest number of negations to find something close to the smallest sum. Several other people submitted heuristic solutions to the generalized partition problem, with varying accuracy. It's pretty easy to produce data that will send this strategy to a horribly wrong conclusion. Actual construction will be left as an exercise to the reader.

```perl
    sub get_nr_flips {

        my $arr = shift;

        # split the array into two sets, using the heuristic algorithm, which may
        # not be perfect, but runs fast!

        my @a = [];
        my @b = [];

        for my $i (sort {$b <=> $a} @$arr) {
            if (sum(@a) < sum(@b)) {
                push @a, $i;
            } else {
                push @b, $i;
            }
        }

        # now flip the smaller list
        return scalar @a if scalar @a < scalar @b;

        return scalar @b;

    }
```


## UNIQUE approaches and other THINGS THAT CAUGHT MY EYE

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/abigail/perl/ch-2.pl)

Abigail has hands-down put the most elaborate analysis to the task this week. He starts with a binary tree, as checking all solutions is the only way to be sure. From here, though, he takes a singularly aggressive approach to pruning that would give an arborist PTSD. This pruning takes a layered approach over multiple levels:

* eliminating branches that from a given point forward can no longer provide a valid solution, either greater than 0 or less than the current minimum

* using a quick-and-dirty heuristic to provide an upper bound on the best score

* applying refactoring to the dataset to remove duplicate pathways, leaving only one representitive to be examined

Taken together these steps have the potential to drastically reduce the number of paths descended and assessed. The first is the big one, considering whether it is pointless to continue. If, for instance, adding every element from a given point to the end of the array still leaves the sum negative, we're out. An array of partial sums for the rest of the array facilitates this.

The second item goes straight to the second part of the first: establishing the point when even if we subtract every element from a given point forward we will still be above the minimum. Remember that the heuristic algorithms cannot guarantee that the result provided  is in fact the minimum. However, unrolled, the greedy heuristic does represent a valid solution, only perhaps not the best. Therefore this can be used to quickly establish an upper bound for the minimum value, and any path that cannot continue to a point of at least this value can be eliminated.

The third item is structural, and may or may not apply: that we never unflip the number we just flipped, should they be the same. This goes nowhere and produces duplication of effort.

The code is exceedingly well documented with much more complete explanations, and very clearly laid out. We aren't using 1200 baud modems any more to talk the mainframe -- spaces and meaningful variable names are neither expensive nor exotic.

I can't really isolate a representative piece of this tapestry, so I'll just provide the greedy algorithm segment as example:

```perl
    my $best_score = 0;
    my $best_flips = 0;

    foreach my $number (@$set) {
        if ($best_score -  $number < 0) {
            $best_score += $number;
        }
        else {
            $best_score -= $number;
            $best_flips ++;
        }
    }
```

See? Clean and approachable. Go have a look for yourself. It will be entirely worth it.


[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-083/e-choroba/perl/ch-2.pl)

Choroba provides two solutions, but one is a method not otherwise covered here, using dynamic programming. Enjoy:

```perl
    sub flip_array_dp {  # DP stands for Dynamic Programming
        my @arr = @_;
        my %sums = (0 => 0);
        my %best;
        for my $element (@arr) {
            my %next;
            for my $sum (keys %sums) {
                for my $multiply_add ([1, 0], [-1, 1]) {
                    my $new_sum = $sum + $element * $multiply_add->[0];
                    my $new_flip_tally = $sums{$sum} + $multiply_add->[1];
                    $next{$new_sum} = $new_flip_tally
                        if ! exists $next{$new_sum}
                        || $next{$new_sum} > $new_flip_tally;
                }
            }
            %sums = %next;
        }
        my $best = first { $_ > 0 } keys %sums;
        for my $sum (keys %sums) {
            $best = $sum if $sum > 0 && $sum < $best;
        }
        return $sums{$best}
    }
```

---

# BLOGS {#PWC083BLOGS}

---

**That’s it for me this week, people! Resolute and unbroken by the torrential influx, I have maintained my bearings. Looking forward to next wave, the perfect wave, I am, your humble servant.**

## But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC083BLOGS}
## then *RUN* *(dont walk!)* to the *WATERING HOLE*
## and *READ* these *BLOG* *LINKS*:

***( don't think, trust your training, you're in the zone, just do it ... )***


**Adam Russell**

 * [Perl Weekly Challenge 083 - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2020/10/25#pwc083) ( *Perl* )

**Andinus**

 * [Challenge 083](https://andinus.tilde.institute/pwc/challenge-083/) ( *Perl* )
 * [Challenge 083](https://andinus.tilde.institute/pwc/challenge-083/) ( *Perl* )

**Arne Sommer**

 * [Wordly Array with Raku](https://raku-musings.com/wordly-array.html) ( *Raku* )

**Cheok-Yin Fung**

 * [CY's Take on PWC#083 | Moments on Perl or other Programming Issues](http://blogs.perl.org/users/c_y_fung/2020/10/cys-take-on-pwc083.html) ( *Perl* )

**Colin Crain**

 * [No, no! Not THAT Word! FLIP the Pain Away! &#8211; Programming Excursions in Perl and Raku](https://colincrain.com/2020/10/24/no-no-not-that-word-flip-the-pain-away/) ( *Perl & Raku* )

**Dieter Dobbelaere**

 * [Perl Weekly Challenge 083 &#8211; Magnetic Charge](https://magneticcharge.wordpress.com/2020/10/25/perl-weekly-challenge-083/) ( *Perl* )

**Flavio Poletti**

 * [PWC083 - Words Length](https://github.polettix.it/ETOOBUSY/2020/10/21/pwc083-words-length/) ( *Perl* )
 * [PWC083 - Flip Array](https://github.polettix.it/ETOOBUSY/2020/10/22/pwc083-flip-array/) ( *Perl* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 83](https://www.braincells.com/perl/2020/10/perl_weekly_challenge_week_83.html) ( *Perl & Raku* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 83: Words Length and Flip Array](http://blogs.perl.org/users/laurent_r/2020/10/perl-weekly-challenge-83-words-length-and-flip-array.html) ( *Perl & Raku* )

**Myoungjin Jeon**

 * [Weekly Challenge #083 Task #2 :: Perl](https://dev.to/jeongoon/weekly-challenge-083-task-2-perl-8d0) ( *Perl* )
 * [Weekly Challenge #083 Task #2 :: Raku](https://dev.to/jeongoon/weekly-challenge-083-task-2-raku-2cjm) ( *Raku* )

**Roger Bell_West**

 * [RogerBW&#39;s Blog: Perl Weekly Challenge 83: Length and Inversion](https://blog.firedrake.org/archive/2020/10/Perl_Weekly_Challenge_83__Length_and_Inversion.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 083](https://dev.to/simongreennet/weekly-challenge-083-4ga6) ( *Perl* )

**Walt Mankowski**

 * [Perl Weekly Challenge #83](http://www.mawode.com/blog/blog/2020/10/19/perl-weekly-challenge-83/) ( *Perl* )
