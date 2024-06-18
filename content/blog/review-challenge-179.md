---
author:       Colin Crain
date:         2022-10-10T00:00:00
description:  "Colin Crain › Perl Weekly Review #179"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #179"
image:        images/blog/p5-review-challenge-179.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-178/).* )

Welcome to the Perl review pages for **Week 179** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

---

### ●︎ Why do we do these challenges?

I suppose any reasonable answer to that question would come from a field as wide ranging and varied as the people who choose to join the team. One thing, though, is clear: it's not a competition, and there are no judges, even if there is a "prize" of sorts. About that -- I think of it more as an honorarium periodically awarded to acknowledge the efforts we make towards this strange goal. So there's no determination to find the *fastest*, or the *shortest*, or even, in some abstract way, the *best* way to go about things, although I'm certain the participants have their own aspirations and personal drives. As Perl is such a wonderfully expressive language, this provides quite a bit of fodder to the core idea of TMTOWTDI, producing a gamut of varied techniques and solutions.

Even the tasks themselves are often open to a certain amount of discretionary interpretation. What we end up with is a situation where each participant is producing something in the manner they personally find the most interesting and satisfying. Some team members will focus on carefully crafted complete applications, thoroughly vetting input data and handling every use case they can think up. Others choose to apply themselves to the logic of the underlying puzzle and making it work in the most elegant way they can. Some eschew modules they would ordinarily reach for, others embrace them, bringing to light wheels perhaps invented years ago that happen to exactly solve the problem in front of them today.

I've been considering this question for some time and have found one binding commonality between all of us out solving these challenges each week, in that however we normally live our lives, the task in front of us more than likely has nothing to do with any of that. And I think this has great value. We all do what we do, in the real world, and hopefully we do it well. The Weekly Challenge provides us with an opportunity to do something germane to that life yet distinctly different; if we only do the things we already know how to do then we will only do the same things over and over. This is where the "challenge" aspect comes into play.

So we can consider The Weekly Challenge as providing a problem space outside of our comfort zone, as far out from that comfort as we wish to take things. From those reaches we can gather and learn things, pick and choose and bring what we want back into our lives. Personally, I think that's what this whole thing is about. YMMV.

---

<strong><emp>Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due.</emp></strong>

And that, my friends, is why I'm here: to try and figure out ways to do just that.

So that's that... I'm ready now — let’s go in and see what we can find.

---

### For Added Context

Before we begin, you may wish to revisit either the pages for the [**original tasks**](/blog/perl-weekly-challenge-179/) or the summary [**recap**](/blog/recap-challenge-179/) of the challenge. But don't worry about it, the challenge text will be repeated and presented as we progress from task to task.

Oh, and one ***more*** thing before we finally get started:

<br>

### Getting in Touch with Us
***

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please feel free to email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

***

<br>

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

<br>

### Enough? Fine. So without even further ado...

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC179TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC179TASK2)   &nbsp;  &nbsp;  &nbsp;       •   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC179BLOGS)    &nbsp;  &nbsp;  &nbsp;       •

---

# TASK 1 {#PWC179TASK1}

# Ordinal Number Spelling
*Submitted by: Mohammad S Anwar*

You are given a positive number, $n.

Write a script to spell the ordinal number.

For example,
```
    11 => eleventh
    62 => sixty-second
    99 => ninety-ninth
```

## about the solutions
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/athanasius/perl/ch-1.pl),
[**Aut0exec**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/aut0exec/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/colin-crain/perl/ch-1.pl),
[**Dario Mazzeo**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/dario-mazzeo/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/polettix/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/jo-37/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/laurent-rosenfeld/perl/ch-1.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/robert-dicicco/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/sgreen/perl/ch-1.pl),
[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/steve-g-lynn/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/wlmb/perl/ch-1.pl)

As readers of these pages will know, I am very fond of Natural Language Programming. I find the intersection between tightly defined computational structures and the hairy freeform evolution of human language fascinating. They really, really don't fit very well together and hence require a lot of effort to get right. But perhaps because of that essential dislocation between the ideas, when they do work seamlessly the results are quite beautiful, as we've spanned the divide between two very different worlds. We are then no longer talking to computers, entering into and restricted by their domain, but rather talking with computer systems, in ours.

It's outright wholesome I tell you. Cats and dogs sleeping together. Peace in the valley.

*(And please let's leave Skynet out of this for the moment. I'm busy being the change I want in the world.)*

There were 15 submissions for the first task this past week.

## A SELECTION of SUBMISSIONS
[**Aut0exec**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/aut0exec/perl/ch-1.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/robert-dicicco/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/polettix/perl/ch-1.pl),
[**Dario Mazzeo**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/dario-mazzeo/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/athanasius/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/colin-crain/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/jo-37/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/roger-bell-west/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/e-choroba/perl/ch-1.pl), and
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/james-smith/perl/ch-1.pl)


Natural Language Programming is not the stuff of compact, elegant algorithms that once figured out change everything. It's just not that sort of computing. Rather it lives with date and time manipulation, document translation and parsing CSV files in the land of seemingly endless edge and corner cases, accommodating ever-more-exotic combinations of nested conditions.

As such, with its kin it is commonly collected into libraries, accessed as required through an API of some sort. Compartmentalization of code and all that.

The field of submissions was split nearly evenly down the middle between those who employed a module, interfacing through its API, and those who solved the logical puzzle of  English-language ordinal number construction.


[**Aut0exec**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/aut0exec/perl/ch-1.pl)

First at bat we have Aut0exec, stepping up for the home team. See what I did there? I'll see myself out the back now. Try the fish and don't forget to tip your waitress.

Wait, wait. I have a review to write. Let's begin again.

It seems fitting our first submission will be from Aut0exec, who gives us a decidedly ambiguous *nom de code*. Could be human, could be robot — with the proper simulation anything is possible, right? Half fish half bagel? It is the twenty-first century. I rule out nothing.

Number construction is built on a set of rules, based mostly around the lower values of zero through one hundred. These first hundred terms are composed from either a single word or two words joined with a hyphen to form a single compound word. After that we can add a modifier for hundreds, and immediately another for thousands, and then each new order classification is one-thousand times the previous, into millions, billions and trillions if you are in the United States. In the UK a billion can mean a million millions, which can cause some confusion.

We're [not going to touch that right now](https://en.wikipedia.org/wiki/Long_and_short_scales), but refocus instead on the ordinal forms. These are modified from the spoken terms using one of four possible suffixes, depending on the final digit: "-st", "-nd", "-rd", and "-th". First, second, third, fourth.

Linguistically these words predate written text, evolving over time but by necessity never by much, as people from different regions would need to communicate these simple quantities and orderings often.

Extending this reasoning, the smallest numbers are used the most, and reflective of this the first twenty numbers get their own words, and sometimes their own original forms: it's "eleventh", not "elevenst" or "ten-first".

Despite the obvious underlying complexity, Aut0exec solves a subset of the problem space, naming the first hundred orderings.


```perl
    sub ones {
        my $value = shift;
        my %digit = (
         0 => '', 1 => 'First', 2 => 'Second', 3 => 'Third', 4 => 'Fourth',
         5 => 'Fifth', 6 => 'Sixth', 7 => 'Seventh', 8 => 'Eighth', 9 => 'Nineth'
        );

        return "$digit{$value}\n";
    }

    sub teens {
        my $value = shift;
        my %digit = (
         11 => 'Eleventh', 12 => 'Twelveth', 13 => 'Thirteenth', 14 => 'Fourteenth',
         15 => 'Fifteenth', 16 => 'Sixteenth', 17 => 'Seventeenth', 18 => 'Eighteenth',
         19 => 'Nineteenth'
        );

        return "$digit{$value}\n";
    }

    sub tens {
        my $value = shift;
        my %digit = (
        0 => '', 2 => 'Twenty', 3 => 'Thirty', 4 => 'Forty', 5 => 'Fifty',
         6 => 'Sixty', 7 => 'Seventy', 8 => 'Eighty', 9 => 'Ninety'
        );

        return "$digit{$value}";
    }

    my $ordinal_num = shift;
    my @ordinal = split (//,$ordinal_num);
    my $dig_len = length($ordinal_num);

    if ( $dig_len > 2 or $ordinal_num lt 1)
    { print ("$ordinal_num is invalid for this program!\n"); exit 1; }
    elsif ( $dig_len == 1 )
    { print (ones($ordinal_num)); }
    elsif ($ordinal[-2] == 1 and $dig_len < 3)
    { print (teens ($ordinal_num)); }
    elsif ($ordinal[-2] != 1 and $ordinal[-1] == 0)
    { print (tens ($ordinal[-2]) . "\n"); }
    else
    { print ( tens($ordinal[0]) . "-" . ones($ordinal[1]) ); }
```

Three hashes are constructed, mapping over the names for the one's place numbers, the teens, and the ten's prefix names. A switch of cases determines the exact construction chosen.

[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/robert-dicicco/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/robert-dicicco/raku/ch-1.raku)

Leading the charge for the modulists, we have Robert, demonstrating the excellent `Lingua::EN::Numbers`, currently maintained by fellow member Neil Bowers.

Notice it is considerably simpler.

This is of course ultimately not true, as all of the complexity has been off-loaded elsewhere. I myself am firmly in the camp that there are certain subjects that should be properly addressed from the shoulders of giants, and NLP is one of those subjects. One's own greatness can be measured in what one does with these tools.

```perl
    use Lingua::EN::Numbers qw/num2en_ordinal/;

    my @arr = (11,62,99);

    foreach (@arr) {
      print "$_ => ", num2en_ordinal($_), "\n";
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC179 - Ordinal Number Spelling - ETOOBUSY](https://etoobusy.polettix.it/2022/08/24/pwc179-ordinal-number-spelling/)

Back to the constructivist camp Flavio implements the hundreds and then the meta-cycles of extended magnitudes up to, let's see... octillions. That should do, I'd hope. I would be puzzled to ever need to order the one octillion, one-hundred forty-five septillion, seven-hundred fifty-seven sextillion, three-hundred forty-nine quintillion, fifty-seven quatrillion, six-hundred fifty-four trillion, three-hundred seventy-four billion, four-hundred fifty-two million, eight-hundred seventy-six thousand, eight-hundred seventy-sixth item in front of the one octillion, one-hundred forty-five septillion, seven-hundred fifty-seven sextillion, three-hundred forty-nine quintillion, fifty-seven quatrillion, six-hundred fifty-four trillion, three-hundred seventy-four billion, four-hundred fifty-two million, eight-hundred seventy-six thousand, eight-hundred seventy-seventh.

I constructed both of these numbers using Flavio's script.

Notice in the larger phrases we need both ordinal and cardinal forms for the names, as the ordinal word construction will only be expressed in the tens and one's place.

I'll also note that there really should be an "and" between the final tens-ones compound and the rest of the phrase:

"one octillion, one-hundred forty-five septillion, seven-hundred fifty-seven sextillion, three-hundred forty-nine quintillion, fifty-seven quatrillion, six-hundred fifty-four trillion, three-hundred seventy-four billion, four-hundred fifty-two million, eight-hundred seventy-six thousand, eight-hundred **and** seventy-sixth".

But Flavio is Italian and I'm already impressed with his mastery of the English language so I'm going to point that out and let it go. It's an easy fix and highlights the pesky, hairy details inside this problem.

```perl
    sub spelled_ordinal ($n) {
       state $corrective_for = {
          qw<
             one first
             two second
             three third
             five fifth
             eight eighth
             nine ninth
             twelve twelfth
             twenty twentieth
             thirty thirtieth
             forty fortieth
             fifty fiftieth
             sixty sixtieth
             seventy seventieth
             eighty eightieth
             ninety ninetieth
          >
       };
       my $spelled = spelled_cardinal($n);
       my ($pre, $last) = $spelled =~ m{\A (.*[-\s]) (\w+) \z}mxs;
       ($pre, $last) = ('', $spelled) unless defined $last;

       $last = exists $corrective_for->{$last}
          ? $corrective_for->{$last}
          : $last . 'th';

       return $pre . $last;
    }

    sub spelled_cardinal ($n) {
       state $name_for = {
          qw<
             1 one
             2 two
             3 three
             4 four
             5 five
             6 six
             7 seven
             8 eight
             9 nine
             10 ten
             11 eleven
             12 twelve
             13 thirteen
             14 fourteen
             15 fiftheen
             16 sixteen
             17 seventeen
             18 eighteen
             19 nineteen
             20 twenty
             30 thirty
             40 forty
             50 fifty
             60 sixty
             70 seventy
             80 eighty
             90 ninety
          >
       };
       my @magnitudes = ('', qw<
             thousand million billion trillion quatrillion
             quintillion sextillion septillion octillion
          >
       );

       my @spelling;
       while ($n > 0) {
          my $lower = $n % 100;
          $n = int(($n - $lower) / 100);
          my $hundredths = $n % 10;
          $n = int(($n - $hundredths) / 10);

          my @chunk;

          push @chunk, "$name_for->{$hundredths}-hundred" if $hundredths;

          if ($lower) {
             if (exists $name_for->{$lower}) {
                   push @chunk, $name_for->{$lower};
             }
             else {
                my $units = $lower % 10;
                my $decs  = $lower - $units;
                push @chunk, "$name_for->{$decs}-$name_for->{$units}";
             }
          }

          my $magnitude = shift @magnitudes;
          push @chunk, $magnitude if length($magnitude) && @chunk;

          unshift @spelling, join ' ', @chunk if @chunk;
       }

       return join ', ', @spelling;
    }
```

[**Dario Mazzeo**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/dario-mazzeo/perl/ch-1.pl)

Not to be outdone, Dario writes out the first hundred ordinals in Italian. I love this! I am also completely unqualified to judge the accuracy of the results. Perhaps Flavio can chime in if required.

There is no single, graceful `switch` statement in Perl, for a variety of reasons. There are however numerous alternate methods available, such as this recursive dispatch table.

```perl
    my $n=$ARGV[0];
    print NumeroInTesto($n);
    exit;


    sub NumeroInTesto{
        my $n=$_[0];

        if (length($n)==1){
            if ($n==0){return "";}
            elsif ($n==1){return "uno";}
            elsif ($n==2){return "due";}
            elsif ($n==3){return "tre";}
            elsif ($n==4){return "quattro";}
            elsif ($n==5){return "cinque";}
            elsif ($n==6){return "sei";}
            elsif ($n==7){return "sette";}
            elsif ($n==8){return "otto";}
            elsif ($n==9){return "nove";}
        }
        elsif (length($n)==2){
            if ($n==10){return "dieci";}
            elsif ($n==11){return "undici";}
            elsif ($n==12){return "dodici";}
            elsif ($n==13){return "tredici";}
            elsif ($n==14){return "quattordici";}
            elsif ($n==15){return "quindici";}
            elsif ($n==16){return "sedici";}
            elsif ($n==17){return "diciassette";}
            elsif ($n==18){return "diciotto";}
            elsif ($n==19){return "diciannove";}

            my $n1=substr($n,0,1);
            my $str="";
            if ($n1==2){$str="venti";}
            elsif ($n1==3){$str="trenta";}
            elsif ($n1==4){$str="quaranta";}
            elsif ($n1==5){$str="cinquanta";}
            elsif ($n1==6){$str="sessanta";}
            elsif ($n1==7){$str="settanta";}
            elsif ($n1==8){$str="ottanta";}
            elsif ($n1==9){$str="novanta";}

            my $str=$str.(NumeroInTesto(substr($n,1,1)));
            $str=~s/[ia]([uo])/$1/;
            return $str;
        }
    }
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/athanasius/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/athanasius/raku/ch-1.raku)

The monk does include the "and" in their solution. They do, after all, specialize in matters concerning the inclusion and exclusion of parts of texts going all the way back to 325. I'm not sure if all of us taken together have comparable years of experience.

There are a lot of parts to the puzzle, requiring placing commas between magnitude sections, creating cardinal names above one hundred, ordinal names below that and of course the conjunctive "and" to couple them.

Component tasks are generally broken down into their own routines. Here are a few to look at:

```perl
    sub format_ordinal
    {
        my ($ord_array, $ls_digs) = @_;
        my  $ordinal;

        if    (scalar @$ord_array == 1)
        {
            $ordinal = $ord_array->[ 0 ] . (($ls_digs % 100 == 0) ? 'th' : '');
        }
        elsif ($ls_digs % 100 == 0)
        {
            $ordinal = join( ' ', reverse @$ord_array ) . 'th';
        }
        elsif ($ls_digs =~ / ^ 0 /x)
        {
            $ordinal = join( ' ', reverse @$ord_array[ 1 .. $#$ord_array ] ) .
                       ' and ' . $ord_array->[ 0 ];
        }
        else
        {
            $ordinal = join ' ', reverse @$ord_array;
        }

        return $ordinal;
    }

    sub add_commas
    {
        my ($number) = @_;

        # Regex from perlfaq5: "How can I output my numbers with commas added?"

        return $number =~ s/(^\d+?(?=(?>(?:\d{3})+)(?!\d))|\G\d{3}(?=\d))/$1,/gr;
    }
```


[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/colin-crain/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Glitter Bombs and Sparkling Lines - Programming Excursions in Perl and Raku](https://colincrain.com/2022/08/26/glitter-bombs-and-sparkling-lines)

Writing out the same absurdly large number I came up with for Flavio using `Lingua::EN::Numbers`, we interestingly get a very different result:

```
    one point one four five seven five seven three four nine zero five seven six five times ten to the twenty-seventh
```

This is more than likely more sensible. The changeover seems to occur at 2<sup>64</sup>, or around eighteen quintillion, four hundred and forty quadrillion.


```perl
    use Lingua::EN::Numbers qw (num2en_ordinal);

    my $input = shift //1145757349057654356734034892;

    say num2en_ordinal( $input );
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/jo-37/perl/ch-1.pl)

Jorg reduces the module form to a one-liner, which considering how useful these scripts have been in writing this review, I think I'm going to go a head and install right now in my dotfiles.

```perl
    perl -MLingua::EN::Numbers=num2en_ordinal -E "say num2en_ordinal $1"
```

Done. Works like a dream.


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/roger-bell-west/raku/ch-1.p6)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 179: Spark and Spell](https://blog.firedrake.org/archive/2022/08/The_Weekly_Challenge_179__Spark_and_Spell.html)

In a test-oriented workflow, we often envelop the logic of a script in a subroutine, that can then be delivered a variety of inputs to verify the resultant output, all in an orderly fashion.

However when using the `Lingua::EN::Numbers` module, all interaction is entirely with the imported function, and it makes no sense to add another layer, wrapping that in an additional subroutine shell that adds nothing.

With Roger's submission, we are left with an ontological quandary as to the essential nature of a script. I'm not entirely sure we even have something properly labeled as such anymore. I'm not really sure what it is.

> "I dunno what the hell's in there, but it's weird and pissed off"
> — John Carpenter, *The Thing* (1982)

```perl
    use Lingua::EN::Numbers qw(num2en_ordinal);

    use Test::More tests => 3;

    is(num2en_ordinal(11),"eleventh",'example 1');
    is(num2en_ordinal(62),"sixty-second",'example 2');
    is(num2en_ordinal(99),"ninety-ninth",'example 3');
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/e-choroba/perl/ch-1.pl)

Choroba addresses this same dilemma in a novel manner: instead of explicitly making a new subroutine (indeed unnecessary and wasteful), he maps the imported module function to a new name directly in the symbol table, using typeglobs.

This is a great solution and at least we have a script again. I can't imagine even needing to do this, but we shouldn't forget we can. In modern Perl typeglobs have largely been outmoded but they still have their place at the table.


```perl
    use Lingua::EN::Numbers ();

    *ordinal_number_spelling = *Lingua::EN::Numbers::num2en_ordinal;

    use Test::More tests => 3;
    is ordinal_number_spelling(11), 'eleventh',     'Example 1';
    is ordinal_number_spelling(62), 'sixty-second', 'Example 2';
    is ordinal_number_spelling(99), 'ninety-ninth', 'Example 3';
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/james-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #179](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-179/james-smith)

The English language is wonderfully expressive, and I feel that expression comes from its flexibility. It's not anchored by prescriptivist correct form, and as it has evolved from both Germanic and Latin roots over the centuries, with loan-words tossed in from around the world, there are often many ways of saying the same thing using completely different phrasing. Naturally, this spices things up.

One of my favorite places to find myself is stuck in some extremely constrained,  unusual space and discovering there does not seem to a be a word for what I want to say. And mind you, I know a lot of words. On a number of occasions the right course of action is to modify or combine existing words in a manner they are not accustomed to. Molest them, as it were. Take liberties. Do as I please, and in doing so present to them new horizons they had never previously dreamed of.

That, my friends, is some fun.

So I was impressed to find that James has constructed for us an ordinal number naming machine without limits. Octillions are trivial to James.

Apparently James is a geneticist of some sort, and we'll leave it at that without prying too much. Now there are approximately three billion nucleotides in the human genome, which gives us one billion 3-nucleotide codons to encode amino acids. With 64 codons available to choose from, we get roughly 2<sup>6,000,000,000</sup> positioning combinations available to us. Sure most are meaningless and only a few will create half-fish half-bagel plants to grow us breakfast but a man can dream, can't he?

In any case a mere octillion is nothing, pshaw, peanuts to the unfathomable complexities of life.

How about  "ninety-nine novemnonagintillion nine-hundred and ninety-nine octononagintillion nine-hundred and ninety-nine septnonagintillion nine-hundred and ninety-nine sexnonagintillion nine-hundred and ninety-nine quinnonagintillion nine-hundred and ninety-nine quattuornonagintillion nine-hundred and ninety-nine trenonagintillion nine-hundred and ninety-nine duononagintillion nine-hundred and ninety-nine unnonagintillion nine-hundred and ninety-nine nonagintillion nine-hundred and ninety-nine novemoctagintillion nine-hundred and ninety-nine octooctagintillion nine-hundred and ninety-nine septoctagintillion nine-hundred and ninety-nine sexoctagintillion nine-hundred and ninety-nine quinoctagintillion nine-hundred and ninety-nine quattuoroctagintillion nine-hundred and ninety-nine treoctagintillion nine-hundred and ninety-nine duooctagintillion nine-hundred and ninety-nine unoctagintillion nine-hundred and ninety-nine octagintillion nine-hundred and ninety-nine novemseptuagintillion nine-hundred and ninety-nine octoseptuagintillion nine-hundred and ninety-nine septseptuagintillion nine-hundred and ninety-nine sexseptuagintillion nine-hundred and ninety-nine quinseptuagintillion nine-hundred and ninety-nine quattuorseptuagintillion nine-hundred and ninety-nine treseptuagintillion nine-hundred and ninety-nine duoseptuagintillion nine-hundred and ninety-nine unseptuagintillion nine-hundred and ninety-nine septuagintillion nine-hundred and ninety-nine novemsexagintillion nine-hundred and ninety-nine octosexagintillion nine-hundred and ninety-nine septsexagintillion nine-hundred and ninety-nine sexsexagintillion nine-hundred and ninety-nine quinsexagintillion nine-hundred and ninety-nine quattuorsexagintillion nine-hundred and ninety-nine tresexagintillion nine-hundred and ninety-nine duosexagintillion nine-hundred and ninety-nine unsexagintillion nine-hundred and ninety-nine sexagintillion nine-hundred and ninety-nine novemquinquagintillion nine-hundred and ninety-nine octoquinquagintillion nine-hundred and ninety-nine septquinquagintillion nine-hundred and ninety-nine sexquinquagintillion nine-hundred and ninety-nine quinquinquagintillion nine-hundred and ninety-nine quattuorquinquagintillion nine-hundred and ninety-nine trequinquagintillion nine-hundred and ninety-nine duoquinquagintillion nine-hundred and ninety-nine unquinquagintillion nine-hundred and ninety-nine quinquagintillion nine-hundred and ninety-nine novemquardagintillion nine-hundred and ninety-nine octoquardagintillion nine-hundred and ninety-nine septquardagintillion nine-hundred and ninety-nine sexquardagintillion nine-hundred and ninety-nine quinquardagintillion nine-hundred and ninety-nine quattuorquardagintillion nine-hundred and ninety-nine trequardagintillion nine-hundred and ninety-nine duoquardagintillion nine-hundred and ninety-nine unquardagintillion nine-hundred and ninety-nine quardagintillion nine-hundred and ninety-nine novemtrigintillion nine-hundred and ninety-nine octotrigintillion nine-hundred and ninety-nine septtrigintillion nine-hundred and ninety-nine sextrigintillion nine-hundred and ninety-nine quintrigintillion nine-hundred and ninety-nine quattuortrigintillion nine-hundred and ninety-nine tretrigintillion nine-hundred and ninety-nine duotrigintillion nine-hundred and ninety-nine untrigintillion nine-hundred and ninety-nine trigintillion nine-hundred and ninety-nine novemvigintillion nine-hundred and ninety-nine octovigintillion nine-hundred and ninety-nine septvigintillion nine-hundred and ninety-nine sexvigintillion nine-hundred and ninety-nine quinvigintillion nine-hundred and ninety-nine quattuorvigintillion nine-hundred and ninety-nine trevigintillion nine-hundred and ninety-nine duovigintillion nine-hundred and ninety-nine unvigintillion nine-hundred and ninety-nine vigintillion nine-hundred and ninety-nine novemdecillion nine-hundred and ninety-nine octodecillion nine-hundred and ninety-nine septdecillion nine-hundred and ninety-nine sexdecillion nine-hundred and ninety-nine quindecillion nine-hundred and ninety-nine quattuordecillion nine-hundred and ninety-nine tredecillion nine-hundred and ninety-nine duodecillion nine-hundred and ninety-nine undecillion nine-hundred and ninety-nine decillion nine-hundred and ninety-nine novillion nine-hundred and ninety-nine **octillion** nine-hundred and ninety-nine septillion nine-hundred and ninety-nine sextillion nine-hundred and ninety-nine quinillion nine-hundred and ninety-nine quadillion nine-hundred and ninety-nine trillion nine-hundred and ninety-nine billion nine-hundred and ninety-nine million nine-hundred and ninety-nine thousand nine-hundred and ninety-ninth" ?

I don't believe I have ever seen, or imagined, the word "novemnonagintillion" before. I'm not convinced it even was a word before James said it was, and as far as I am concerned it is now.

James has devised a scheme to name any number and I love it.


```perl
    my @ord    = qw(x first second third fourth fifth sixth seventh eighth ninth tenth eleventh twelfth thirteenth
                    forteenth fifteenth sixteenth seventeenth eighteeinth nineteenth);
    my @ord_10 = qw(z tenth twentieth thirtieth fortieth fiftieth sixtieth seventiet eightieth ninetieth hundredth);
    my @power  = map { [$_,$_.'th'] } qw(x thousand), map { $_.'illion' } qw(m b tr quad quin sext sept oct nov),
                  ( map { $a=$_, map { $_.$a } qw(un duo tre quattuor quin sex sept octo novem) }
                  qw(dec vigint trigint quardagint quinquagint sexagint septuagint octagint nonagint) );
    my @nat    = qw(a one two three four five six seven eight nine ten eleven twelve thirteen forteen fifteen
                    sixteen seventeen eighteen nineteen);
    my @nat_10 = qw(b ten twenty thirty fourty fifty sixty seventy eighty ninety);

    sub ordinal {
      my ($ptr,$last,@parts,@result) = (0, map { scalar reverse } ((reverse pop) =~ m{(\d{1,3})}g));
      @result = _ordinal($last, !@parts ) if -$last;
      $ptr++, -$_ && (unshift @result, _natural($_).' '.$power[$ptr][ @result ? 0 : 1 ] ) for @parts;
      "@result" =~ s/\s+/ /gr
    }

    ## Create a natural triple of 1s, 10, 100s
    sub _natural {
      my $v = pop;
      join ' and ',
        ($v       > 99) ? $nat[$v/100].'-hundred' : (),
        $v%100 ? ( $v%100 > 19 ? $nat_10[($v%100)/10].( $v%10 ? '-'.$nat[$v%10] : '' )
                 : $v%100 > 0  ? $nat[$v%100] : () ) : ();
    }

    ## Create an ordinal triple
    sub _ordinal {
      my($v,$flag) = @_;

      join ' and ',
        (!$flag && $v < 100) ? '' : (),
        ($v       > 99) ? $nat[$v/100].($v%100?'-hundred':'-hundredth') : (),
        $v%100 ? ( $v%100 > 19 ? ( $v%10 ? $nat_10[($v%100)/10].'-'.$ord[$v%10] : $ord_10[($v%100)/10] )
                 : $v%100 > 0  ? $ord[$v%100] : () ) : ();
    }
```




## Blogs and Additional Submissions in Guest Languages for Task 1:




[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/duncan-c-white/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/duncan-c-white/C/ch-1.c)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/laurent-rosenfeld/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 179: Ordinal Numbers and Unicode Sparkline](http://blogs.perl.org/users/laurent_r/2022/08/perl-weekly-challenge-179-ordinal-numbers-and-unicode-sparkline.html)



[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/sgreen/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/sgreen/python/ch-1.py)


&nbsp;&nbsp;**blog writeup:**
[The Ordinal Sparkline](https://dev.to/simongreennet/the-ordinal-sparkline-dn5)


[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/steve-g-lynn/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/steve-g-lynn/julia/ch-1.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/steve-g-lynn/raku/ch-1.p6)


&nbsp;&nbsp;**blog writeup:**
[PWC 179](https://thiujiac.blogspot.com/2022/08/pwc-179.html)


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/wlmb/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 179 – W. Luis Mochán](https://wlmb.github.io/2022/08/22/PWC179/)



------------------------------------------





---

# TASK 2 {#PWC179TASK2}

# Unicode Sparkline
*Submitted by: Mohammad S Anwar*

You are given a list of positive numbers, @n.

Write a script to print sparkline in Unicode for the given list of numbers.


## about the solutions
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/athanasius/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/colin-crain/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/polettix/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/jo-37/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/laurent-rosenfeld/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/sgreen/perl/ch-2.pl),
[**Solathian**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/solathian/perl/ch-2.pl),
[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/steve-g-lynn/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/ulrich-rieke/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/wlmb/perl/ch-2.pl)

Sparklines are an information design element originally a creation of Edward Tuffe, where small pieces of graphical information — say a set of data points trending upwards — are placed directly within a line of text, rather than in an auxiliary space alongside it. In this way the the reader's attention remains fixed and does not require switching locations and refocusing. Although the informational content of a small graphic is necessarily limited — compared to a proper sidebox — sometimes that is all that is required for the moment: that a value is going up, down or staying the same, without getting bogged down with unnecessary details. Large graphics cam provide a great deal of detail, but this is done at the cost of requiring the reader to consider the big picture and extract the information. With sparklines, small parts of a complex idea can be isolated and highlighted, allowing us to stay with the story, or analysis, that is being made.

"Sparklines", Tuffe says, "can be placed anywhere that words or numbers or graphics can be placed: in sentences, maps, graphics, tables."

With the introduction of Unicode character sets, we now have access to selected graphical primitives as text characters in a font. Although there are no specific bar-graph characters, or any others specifically made for the purpose, we do have a set of eight bottom-aligned rectangles of varying heights that will serve. These are a common choice for those wishing to implement Unicode sparklines.

It should be noted bar graphs are not the only thing that can be modeled in Unicode characters, and for instance boxes of varying shades of grey have also been used to express data change. With the introduction of more and more emoji other avenues involving color and pattern have opened up as well. I see a future for colored Unicode sparklines, especially in dynamic web content.

There were 14 submissions for the second task this past week.

## A SELECTION of SUBMISSIONS
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/sgreen/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/wlmb/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/laurent-rosenfeld/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/athanasius/perl/ch-2.pl),
[**Solathian**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/solathian/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/jo-37/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/ulrich-rieke/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/e-choroba/perl/ch-2.pl),
[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/steve-g-lynn/perl/ch-2.pl), and
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/james-smith/perl/ch-2.pl)


A simple bar graph with eight possible levels was the overwhelming choice among the submissions. The form is capable of transmitting a small amount of information well and looks pretty nice doing it. However that choice was not, perhaps surprisingly, universal. We did have a few brave souls who strayed from the path and we will be sure to comment on their approaches.

Sparklines, after all, are not exclusively simple bar graphs.


[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/sgreen/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/sgreen/python/ch-2.py)


&nbsp;&nbsp;**blog writeup:**
[The Ordinal Sparkline](https://dev.to/simongreennet/the-ordinal-sparkline-dn5)

Simon will start today with a demonstration of some core logic we will see repeated quite a lot going forward. In essence, the sparkline itself is a cosmetic afterthought, the proper selections from a set of characters to construct a normal Perl string. And, I feel I should add, that although Unicode strings are, yes, a different type of Perl string internally, you do not need to know that and have not needed to for quite some time. They are, albeit different, perfectly *normal*.

The underlying abstract logic is to take an arbitrary list of values and slot each of them  into one of eight categories. This will require identifying the range and subdividing it according to a formula so we can assign each element a category, and from that map a character.

Here Simon imports `min` and `max` from `List::Util` to quickly get those values,

```perl
    use List::Util qw(min max);

    sub main (@numbers) {
        my @bar      = (qw'▁ ▂ ▃ ▄ ▅ ▆ ▇ █');
        my $barcount = scalar(@bar);

        my $mn        = min(@numbers);
        my $mx        = max(@numbers);
        my $extent    = $mx - $mn;
        my $sparkline = '';

        foreach my $n (@numbers) {
            $sparkline .= $bar[ min( $barcount - 1, int( ( $n - $mn ) / $extent * $barcount ) ) ];
        }

        say $sparkline;
    }
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/wlmb/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 179 – W. Luis Mochán](https://wlmb.github.io/2022/08/22/PWC179/)

Although Unicode support was added to Perl internally more than 20 years ago, the interpreter can still get suspicious using UTF-8 to communicate with the outside world, and in response start throwing around warnings that something might not be right. If you keep warnings enabled, as has recently become the default, this can get annoying.

One surefire way to sidestep all this nervousness is to explicitly tell Perl what to expect. The first two lines of Luis' script tell Perl that the script it is reading contains Unicode characters and that the output device connected to STDOUT also is quite comfortable accepting Unicode.

That'll shut 'em up.

To do the data massaging he brings in the powers of the PDL, the Perl Data Language extensions.  First he slides the range intact to start at 0, then fits the values into the range 0-7, or 8 slots. These new values can be used as indices in an array of asecnding blocks.

Even though we're using the PDL we're performing that same normalization operation we did before. Even how we do it is essentially the same.

```perl
    use utf8;
    binmode STDOUT, ':utf8';
    my @blocks = split "", "▁▂▃▄▅▆▇█"; # Array of blocks of different heights
    die "Usage: $0 N1 [N2...]\nto make a sparkline with the data N1 N2...\n"
        unless @ARGV;
    my $small = 1e-7;
    my $indices = pdl([@ARGV]);                       # slurp data into ndarray
    $indices -= $indices->min;                       # start at 0
    $indices *= @blocks/($indices->max+$small);    # Normalize to 0..number of blocks-1
    say join "", map {$blocks[$_]} $indices->list; # Use as indices into block array
```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/laurent-rosenfeld/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/laurent-rosenfeld/julia/ch-2.jl), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/laurent-rosenfeld/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/laurent-rosenfeld/raku/ch-2.raku), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/laurent-rosenfeld/ruby/ch-2.rb), [Scala](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/laurent-rosenfeld/scala/ch-2.scala)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 179: Ordinal Numbers and Unicode Sparkline](http://blogs.perl.org/users/laurent_r/2022/08/perl-weekly-challenge-179-ordinal-numbers-and-unicode-sparkline.html)

Cutting and pasting the black Unicode rectangles directly into the script isn't necessary, either, as Laurent demonstrates. Simply knowing in advance their hexidecimal codes will suffice. Feeding these to the `chr` function will produce the proper characters.

```perl
    binmode(STDOUT, ":utf8");
    my @bars = map chr, 0x2581 .. 0x2588;

    for my $test ([< 2 4 6 8 10 12 10 8 6 4 2>],
        [<0 1 19 20>], [<0 999 4000 4999 7000 7999>]) {
        my @test = @$test;
        my ($min, $max) = (sort {$a <=> $b} @$test)[0, $#test];
        my $out = "";
        for my $item (@test) {
            my $h = @bars * ($item - $min) / ($max - $min);
            $h = $#bars if $h > $#bars;
            $out .= $bars[int($h)];
        }
        say "@test; min: $min; max: $max.";
        say $out, "\n";
    }
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/athanasius/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/athanasius/raku/ch-2.raku)

The monk, in a typically well-reasoned way, presents some limitations on the information content of a sparkline, and even that this necessarily-simplified snapshot of the data brings with it the possibility of being outright misleading.

That, however, is not the fault of the sparkline. Given the low bandwidth available to us there is no internal room for explanation in the graphic, so we are reliant on the narrative context to accurately describe what is happening.

Perhaps I am extrapolating too much from the monk's commentary, but all of this does follow from the idea that we have no room to display the axis origins and must, given the limited range of expression normalize the data into octants, or however many categories we choose to muster.

I will however disagree with their assumption #1, that the Rosetta Code definition of "Sparklines in Unicode" is definitive — that this means we need to use the eight Unicode characters `▁ ▂ ▃ ▄ ▅ ▆ ▇ █` to construct a bar graph. That is only the Rosetta Code definition for their particular programming challenge. Although the eight characters U+2581 through U+2588 are convenient and visually appealing, Unicode sparklines can be constructed from any selection of characters. Take for instance [this example from Sean D. Stuber](https://seanstuber.com/2019/04/24/simple-sparklines-with-unicode-characters/)

░████████████████████████████░░░█░░█████████████░░░░▒░█████░██▒░░

I believe a trend of intensification is well portrayed by this data using shades of grey.

```perl
    use List::Util     qw( max min );
    const my @CHARS => qw( ▁ ▂ ▃ ▄ ▅ ▆ ▇ █ );
    const my $USAGE =>

    MAIN:
    {
        my @n = parse_command_line();

        printf "Input:  %s\n\n", join ', ', @n;

        my @sparkline;
        my $min   = min @n;
        my $max   = max @n;
        my $range = $max - $min;

        if ($range == 0)
        {
            @sparkline = ($CHARS[ 0 ]) x scalar( @n );
        }
        else
        {
            for my $n (@n)
            {
                my $idx = 7;

                for my $i (1 .. 7)
                {
                    if (($n - $min) < ($i * $range / 8))
                    {
                        $idx = $i - 1;
                        last;
                    }
                }

                push @sparkline, $CHARS[ $idx ];
            }
        }

        printf "Output: %s\n",   join '', @sparkline;
    }
```

[**Solathian**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/solathian/perl/ch-2.pl)

New member Solathian brings us an excellent breakdown of their process using a sequence of subroutines: printing the input; get the minimum and maximum values; normalize the data; round the data; and finally print the sparkline.

Here is their normalizing routine:

```perl
    sub normalizeData
    {
        my ($arrayRef, $lowest, $highest) = @_;

        # if the lowest is not zero move every item down, this way the interval is utilized in a better way
        if( $lowest != SCALE_MIN )
        {
            # decrement each element by the lowest
            for(my $i = 0; $i < @$arrayRef; $i++)
            {
                $arrayRef->[$i] -= $lowest;
            }

            # alter the extreme values
            $highest -= $lowest;
            $lowest = 0;
        }

        # if the highest is still greater than scale max scale everything down
        if( $highest > SCALE_MAX )
        {
            for(my $j = 0; $j < @$arrayRef; $j++)
            {
                my $value = ($arrayRef->[$j]);

                # scaling down linearly to the new interval
                $arrayRef->[$j] =  SCALE_MAX  * ( 1 / $highest)  * $value;
            }
        }
    }
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/jo-37/perl/ch-2.pl)

Jorg's extremely stripped-down implementation of the logic demonstrates the normalizating required to fit an arbitrary range of points into the eight possible categories we can display in a bar chart. As the character set is all sequential values, the Unicode character values can be generated on the fly.

```perl
    sub barchart {
        my ($min, $max) = minmax @_;
        my $scale = 7.999 / (($max - $min) || 1);
        map chr(0x2581 + floor(($_ - $min) * $scale)), @_;
```

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/ulrich-rieke/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/ulrich-rieke/haskell/ch-2.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/ulrich-rieke/raku/ch-2.raku)

I think perhaps the best way to definitively lock down preferences in the I/O layer these days is by using the `open` pragma, here demonstrated by Ulrich. Not to be confused with the `open` file open command, the `open` pragma is a one-stop shop to define  `STDIN`, `STDOUT` and `STDERR`.

Amongst other things, of course.

Here we tell Perl all of these will be using UTF-8.

```perl
    use open ":std", ":encoding(UTF-8)";

    sub findOctal {
      my $number = shift ;
      my $octals = shift ;
      my $current = 0 ;
      while ( $octals->[$current] < $number ) {
          $current++ ;
          if ( $current == 8 ) {
        last ;
          }
      }
      if ( $current == 8 ) {
          return 7 ;
      }
      else {
          return $current ;
      }
    }

    say "Enter some numbers , separated by blanks!" ;
    my $line = <STDIN> ;
    chomp $line ;
    my @numbers = split( /\s+/ , $line ) ;
    my $maximum = max( @numbers ) ;
    my $minimum = min( @numbers ) ;
    my $range = $maximum - $minimum ;

    # @octals holds the limits of all the octile , that is from the smallest
    # number to the first octile, from the first octile to the second octile and
    # so on to the biggest number. We choose octile because we use the
    # 8 subsequent Unicode codepoints for growing black bars
    my @octals ;
    push @octals, $minimum ;
    for my $i ( 1 .. 7 ) {
      push @octals, $range / 8 * $i ;
    }
    push @octals, $maximum ;
    my @blockCodePoints = ( 0x2581 , 0x2582, 0x2583 , 0x2584 ,
          0x2585 , 0x2586 , 0x2587 , 0x2588) ;
    my @octalQuantiles = map { findOctal( $_ , \@octals ) } @numbers ;
    for my $octal( @octalQuantiles[0 .. (scalar @octalQuantiles) - 2] ) {
      my $str = chr( $blockCodePoints[ $octal ] ) ;
      print $str ;
    }
    say chr( $blockCodePoints[ $octalQuantiles[-1]] ) ;
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/e-choroba/perl/ch-2.pl)

I think a lot of the beauty of this challenge lies in the methods used to map the data into octants. Here Choroba gives us a nice, compact form.

```perl
    use POSIX qw{ round };
    use List::Util qw{ min max };

    my @BLOCKS = split //, '▁▂▃▄▅▆▇█';
    sub unicode_sparkline (@n) {
        my ($min, $max) = (min(@n), max(@n));
        my $step = ($max - $min) / 7;
        return join "", @BLOCKS[map round(($_ - $min) / $step), @n]
    }
```

[**Stephen G Lynn**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/steve-g-lynn/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/steve-g-lynn/julia/ch-2.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/steve-g-lynn/raku/ch-2.p6)


&nbsp;&nbsp;**blog writeup:**
[PWC 179](https://thiujiac.blogspot.com/2022/08/pwc-179.html)

So far the sparklines we have seen all follow the same core logic: given an ordered list of values, present a simple graphical representation of that data with the elements graphed relative to the the data set taken as a whole. To do that we categorize the data into octants and use varying sized black rectangles to portray it.

This is all well and good, and demonstrates a practical use of sparklines. However repeating this same form over and over may give that false impression that that is what a sparkline *is*, rather than that miniature bar graphs drawn in Unicode is an excellent example of one form a sparkline can exist in.

For instance, we are not limited to using the set of eight rectangular primitives to communicate, nor for that matter are we constrained to display our data in an equal, linear breakdown.

To illustrate this last point I bring you Stephen, who has chosen to display his data using only three categories: within one standard deviation of the median value, above one standard deviation, and below one standard deviation. That's it. These are mapped to three rectangles, with the middle size representing the median bloc. This visualization can quickly show the concentration of the data around the median, or a tendency towards either low or high outliers.

```perl
    use Statistics::Lite qw(median stddev);

    my @data=(1,2,3,4,5,4,3,2,1);
    &sparkline(@data);
    #▁▂▂▂▃▂▂▂▁

    sub sparkline {
        my @data = @_;
        my $median=median(@data);
        my $stddev=stddev(@data);

        for my $data (@data) {
            if ( ($data >= ($median-$stddev)) &&
            ($data <= ($median+$stddev)) ) {
                print '▂';
            }
            elsif ( $data < ($median-$stddev) ) {
                print '▁';
            }
            elsif ( $data > ($median+$stddev) ) {
                print '▃';
            }
            else {
                die "Something wrong.\n";
            }
        }
        print "\n";
        return;
    }
```

This got me thinking about the design aspect, and several thoughts come to mind. First, I'd recommend using rectangles with more pronounced differences, such as the `LOWER ONE EIGHTH BLOCK`, `LOWER FIVE EIGHTHS BLOCK`, and `FULL BLOCK` for our triplet to emphasis the differences. This produces a more visually striking `▁▅▅▅█▅▅▅▁` sparkline.

Or — and here we get really interesting — how about getting away from rectangles entirely? We're showing *divergence*, so the three characters `LOWER ONE EIGHTH BLOCK`, `BOX DRAWINGS HEAVY HORIZONTAL`, and `UPPER ONE EIGHTH BLOCK` can be used instead to construct the line `▁━━━▔━━━▁`. Now we clearly show the median zone and the incidence of straying data points.

I like that I'm using inline sparklines to talk about using sparklines.


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/james-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #179](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-179/james-smith)

Finally we will end with James again, whose submission challenges many of the common assumptions made so far about what a sparkline even *is*.

The fact is, the idea of a sparkline is not not so much *defined* as *described*. We are not exactly naming what it is, but rather what it does. Even the word itself is ambiguous: a spark is a both a small component of a larger fire and also a verb, the act of initiating that fire which then is allowed to spread.

That's a very poetic name you've got there, Mr. Tuffe. It has what I refer to as "resonance". That's good work and as a professional communicator very on-brand.

There's no rigid constraint that a sparkline can only be a single line, either. The only important part is conveying useful supporting information within the flow of text in a minimal graphic that illustrates the necessary information and nothing more.

James eschews the more common bar graph of linear-values-and positions today for a different vision: a multiline histogram of values on one axis and incidence on the other. They look something like this:

```
   ╷
  ╷│╷                                              ╷
─┴┴┴┴──────────────────────────────┴────────────┴─┴┴┴
```

I think that could easily be embedded to demonstrate the polarization of values towards the high and low extremes in a data set. No axis labels required.

```perl
    sub spark_line {
      my($mx,$k,$l,%x)=0; $x{$_}++ for @{$_}; ($_>$mx) && ($mx=$_) for values %x;
      ## Top of lines if 2 or more matching values....
      map( {
        ($l,$k) = ($_<<1,-1); join '',
                              map { ' ' x ($_-$k-1).( $x{$_}<$l ? ' ' : $x{$_} == $l ? $FULL : $HALF ), ($k=$_)x 0 }
                              sort    { $a <=> $b }
                              keys    %x
      } reverse 1 .. $mx / 2 ),
      ## Base line ...
      ($k=-1)x 0,join( '', map { $LINE x ($_-$k-1) . $START,($k=$_)x 0 } sort {$a<=>$b} keys %x )
    }
```


## Blogs and Additional Submissions in Guest Languages for Task 2:


[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/colin-crain/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Glitter Bombs and Sparkling Lines - Programming Excursions in Perl and Raku](https://colincrain.com/2022/08/26/glitter-bombs-and-sparkling-lines)


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC179 - Unicode Sparkline - ETOOBUSY](https://etoobusy.polettix.it/2022/08/25/pwc179-unicode-sparkline/)


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/roger-bell-west/javascript/ch-2.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/roger-bell-west/kotlin/ch-2.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/roger-bell-west/lua/ch-2.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/roger-bell-west/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-179/roger-bell-west/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 179: Spark and Spell](https://blog.firedrake.org/archive/2022/08/The_Weekly_Challenge_179__Spark_and_Spell.html)


------------------------------------------





---

<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>

<center>
<h1 id="PWC179BLOGS">_________ THE BLOG PAGES _________</h1>
</center>


---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, by some miracle I somehow continue to maintain my bearings.**

**Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your Unquenchable *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC179BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *FOLLOW* these *BLOG* *LINKS*:

**( ...*don't think, trust your training, you're in the zone, just do it ...* )**


**Arne Sommer**

 * [Ordinal Spark with Raku - Arne Sommer](https://raku-musings.com/ordinal-spark.html) ( *Raku* )

**Colin Crain**

 * [Glitter Bombs and Sparkling Lines - Programming Excursions in Perl and Raku](https://colincrain.com/2022/08/26/glitter-bombs-and-sparkling-lines) ( *Perl* )

**Flavio Poletti**

 * [PWC179 - Ordinal Number Spelling - ETOOBUSY](https://etoobusy.polettix.it/2022/08/24/pwc179-ordinal-number-spelling/) ( *Perl & Raku* )
 * [PWC179 - Unicode Sparkline - ETOOBUSY](https://etoobusy.polettix.it/2022/08/25/pwc179-unicode-sparkline/) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #179](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-179/james-smith) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 179: Ordinal Numbers and Unicode Sparkline](http://blogs.perl.org/users/laurent_r/2022/08/perl-weekly-challenge-179-ordinal-numbers-and-unicode-sparkline.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 179: graphs and spelled numbers – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/08/22/PerlWeeklyChallenge179.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 179: graphs and spelled numbers – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/08/22/PerlWeeklyChallenge179.html#task1plperl) ( *Raku* )
 * [Perl Weekly Challenge 179: graphs and spelled numbers – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/08/22/PerlWeeklyChallenge179.html#task1plpgsql) ( *Raku* )

**Roger Bell_West**

 * [RogerBW's Blog: The Weekly Challenge 179: Spark and Spell](https://blog.firedrake.org/archive/2022/08/The_Weekly_Challenge_179__Spark_and_Spell.html) ( *Perl & Raku* )

**Simon Green**

 * [The Ordinal Sparkline](https://dev.to/simongreennet/the-ordinal-sparkline-dn5) ( *Perl* )

**Stephen G Lynn**

 * [PWC 179](https://thiujiac.blogspot.com/2022/08/pwc-179.html) ( *Perl & Raku* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 179 – W. Luis Mochán](https://wlmb.github.io/2022/08/22/PWC179/) ( *Perl* )
