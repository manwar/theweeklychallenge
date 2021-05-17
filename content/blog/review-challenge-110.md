---
author:       Colin Crain
date:         2021-05-17T00:00:00
description:  "Colin Crain › Perl Weekly Review #110"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #110"
image:        images/blog/p5-review-challenge-110.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-109/).* )

Welcome to the Perl review for **Week 110** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

---

### Why do we do these challenges?

I suppose any answers to that would be as wide ranging and varied as the people who choose to join the team. One thing is clear: it's not a competition, and there are no judges, even if there is a "prize" of sorts. About that -- I think of it more as an honorarium periodically awarded to acknowledge the efforts we make towards this strange goal. So there's no determination to find the *fastest*, or the *shortest*, or even, in some abstract way, the *best* way to go about things, although I'm certain the individuals have their own aspirations and personal drives. As Perl is such a wonderfully expressive language, this provides quite a bit of fodder to the core idea of TMTOWTDI, producing a gamut of wonderfully varied techniques and solutions.

Even the tasks themselves are often open to a certain amount of discretionary interpretation. What we end up with is a situation where each participant is producing something in the manner they find the most interesting or satisfying. Some team members focus on carefully crafted complete applications that thoroughly vet input data and handle every use case they can think up. Others chose to apply themselves to the logic of the underlying puzzle and making it work in the most elegant way they can. Some eschew modules they would ordinarily reach for, others embrace them, bringing to light wheels perhaps invented years ago that happen to exactly solve the problem in front of them today.

I've been considering this question for some time and have found one binding commonality between all of us solving these challenges each week, in that however we normally live our lives, the task in front of us more than likely has nothing to do with any of that . And I think this has great value. We all do what we do, out in the real world, and hopefully we do it well. The Weekly Challenge provides a opportunity to do something germane to that life yet distinctly different; if we only do the things we already know how to do we only do the same things over and over. This is where the "challenge" aspect comes into play.

So we can consider the Weekly Challenge as providing a problem space outside of our comfort zone, as far out from comfort as we wish to take things. From those reaches we can gather and learn things and bring what we want back into our lives. Personally, I think that's its greatest value of all.

---

Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due. And that's why I'm here, to try and figure out how to do that.

Let's have a look and see what we can find.

---

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-110/) or the summary [**recap**](/blog/recap-challenge-110/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC110TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC110TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC110BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

---

# TASK 1 {#PWC110TASK1}

# Valid Phone Numbers
*Submitted by: Mohammad S Anwar*<br>
You are given a text file.

Write a script to display all valid phone numbers in the given text file.

**Acceptable Phone Number Formats**


```
    +nn  nnnnnnnnnn
    (nn) nnnnnnnnnn
    nnnn nnnnnnnnnn
```
**Input File**


```
    0044 1148820341
     +44 1148820341
      44-11-4882-0341
    (44) 1148820341
      00 1148820341
```
**Output**


```
    0044 1148820341
     +44 1148820341
    (44) 1148820341
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/abigail/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/adam-russell/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/athanasius/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/colin-crain/perl/ch-1.pl),
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/cristian-heredia/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/jo-37/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/laurent-rosenfeld/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/perlboy1967/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/pete-houston/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/roger-bell-west/perl/ch-1.pl),
[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/ryan-thompson/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/sgreen/perl/ch-1.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/stuart-little/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/ulrich-rieke/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/wlmb/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/wanderdoc/perl/ch-1.pl)




There were 25 submissions for the first task this past week.

Telephone networks, in their essential nature, are organic beasts; they are evolved more than masterfully designed, with their systems caught in a perpetual tradeoff between scaling to meet expected future capacity and accommodating legacy infrastructure.

As such there are often multiple acceptable ways to denote a particular subscriber line, and this challenge illustrates one such version of this, providing three acceptable forms of a UK telephone number that we are asked to use to filter a data set.

Looking at the bigger picture, in a global community such as ours a number written for the telephone networks we actually use every day are likely to have only a passing resemblance to the formats and conventions given. I personally don't think I've dialed a London phone in what must be decades, and when last I did I had to preface it with +011 44 01, with prefixes  first to access an international trunk line, then the UK network, and finally London. Years before that I had my own London telephone number, but although I don't remember it now I'm nearly certain it didn't require 10 digits to call locally. On top of that here we're including the UK country code, so its even more unclear to me who exactly would be using the formats given. Relating back to my own experience, I understand the system has changed several times since then; the upshot being all I can do is take the rules at face value and accept them as the criteria, and assume the same circumstance will apply to most of us, in varying degrees.

And what are those rules? We are given a ten digit number as a continuous sequence of digits, prefaced by the country code for the UK in one of three acceptable formats. The prefix and body of the number are separated by a space, with a caveat we'll address shortly.

Filtering data to match acceptable formats might well seem a job specifically crafted for regular expressions, and judging from the submissions this view was shared by almost every member. There was quite a lot of variation on the specifics of the implementation, however, and we'll look around this to see what we find.

I have come to expect that when given a task with a simple, obvious and "correct" way to go about it, there will always be those mavericks who just want to run free and see where it gets them. As such we had several submissions with unusual strategies that we'll also be giving a good once-over.

## a SPACE ASTRAY

There was an anomaly in the input data that was brought up quite a bit, in that the first line entry under the "acceptable formats" section,
```
    +nn  nnnnnnnnnn
```
has two spaces between the country code and subscriber line sections, while the corresponding phone number closely matching that format, `+44 1148820341`, has only one. This, if noticed at all, led to a number of interpretations about permissable whitespace within the number. Consequently some required one space, others one or more, and still others went with any amount including none. At least one submission both accepted the extra space for input and then went on to standardize the format for output.

I myself looked to the validated output for guidance, but that's just me. Occam's razor suggested it seemed more likely a mistake than a trick question.

## behold the power of the REGULAR EXPRESSION
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/athanasius/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/colin-crain/perl/ch-1.pl),
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/cristian-heredia/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/jo-37/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/laurent-rosenfeld/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/perlboy1967/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/pete-houston/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/sgreen/perl/ch-1.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/stuart-little/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/ulrich-rieke/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/wlmb/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/wanderdoc/perl/ch-1.pl)



What we're being asked to do here is see whether a given number matches a generalized patern, right? And don't they call regular expressions "pattern matching"? Need I say more?

Well, it turns out I do, because there were quite a few variations in the specific manner people chose to match up the formats. Nothing too radically different, on the whole — there was quite a bit of self-similarity to be sure. All of the methods seemed successful in accomplishing whatever it was they had set out to do; there were just differing interpretations and guiding principles applied to what exactly that was.

### ALTERNATION
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/colin-crain/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/james-smith/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/laurent-rosenfeld/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/mohammad-anwar/perl/ch-1.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/stuart-little/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/ulrich-rieke/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/wlmb/perl/ch-1.pl)



The most common approach was to present the three matching patterns for the country code prefix as a group using alternation.

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/colin-crain/perl/ch-1.pl)


**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/colin-crain/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/colin-crain/raku/ch-1.raku)

As it's not overly adventurous, I'll start the examination with my own submission. As I professed earlier, I'm not at all familiar with the current specifications for  dialing a telephone in the UK, so I simply responded to the criteria as stated and took that at face value. For prefix, I accepted four digits, two digits in parentheses, or two digits with a leading `+`. Following this with a space and a 10-digit number, making no attempt on either part to figure out which digits were actually legal.

One thing I did do was to select exclusively for a 10-digit subscriber line, excluding longer numbers with a zero-length negative lookahead assertion checking for an additional digit. Thus an 11-digit number would match the first ten but fail the assertion on the 11th and be excluded.


```perl
    my $regex = qr/((?: \d{4} | \(\d\d\) | \+\d\d ) \s \d{10}) (?!\d)/x;

    while (<>) {
        push @numbers, $_ for /$regex/;
    }

    say $_ for @numbers;
```


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/laurent-rosenfeld/perl/ch-1.pl)


**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/laurent-rosenfeld/awk/ch-1.awk), [Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/laurent-rosenfeld/julia/ch-1.julia), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/laurent-rosenfeld/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/laurent-rosenfeld/raku/ch-1.raku), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/laurent-rosenfeld/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/laurent-rosenfeld/rust/ch-1.rs), [Scala](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/laurent-rosenfeld/scala/ch-1.scala)

Laurent also gives us an example of three alternating cases for the prefix, along with a slew of examples in other languages for comparison.

```perl
    for my $str (@tests) {
        say $1 while $str =~ / ( (?: \d {4} | \+ \d\d | \( \d\d \)  ) \s+ \d{10} ) /gx;
    }
```

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/jaldhar-h-vyas/perl/ch-1.pl)


**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/jaldhar-h-vyas/raku/ch-1.raku)

Jaldhar follows the same pattern, with a couple of additional nods towards to efficiency. First he slurps in the data in one pass; by importing the `English` pragma he refers to the input record separator as `$RS`. In the second case he compiles his regex ahead of time into the `$valid` variable.

```perl
    use English qw/ -no_match_vars /;

    my $filename = shift // die "Need a filename\n";

    open my $file, '<' , $filename or die "$OS_ERROR\n";
    local $RS = undef;
    my @phone_numbers = split "\n", <$file>;
    close $file;

    my $valid = qr{ \A \s* ( \+\d{2} | \(\d{2}\) | \d{4} ) \s* \d{10}  \s* \z }msx;

    map { say; } grep { /$valid/ } @phone_numbers;
```


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/james-smith/perl/ch-1.pl)



For anyone having any trouble following the syntax for the alternating expressions we've been looking at, James has employed the `x` switch and kindly broken his apart with comments. I've found this technique of expanding expressions to be invaluable when presented with real-world data that may involve multiple passes of refinement to perfect.

```perl
    sub is_valid_phone_number {
      return m{
        \A          # Start of line
        \s*         # Possibly white-space
        (?:         # Prefix - one of:
          [+]\d+ |  #   +{digits}
          00\d+  |  #   00{digits}
          [(]\d+[)] #   ({digits})
        )
        \s+         # Some white-space
        \d+         # String of numbers
        \s*         # Possibly white-space
        \Z          # End of line
      }x;
    }
```


[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/stuart-little/perl/ch-1.pl)


**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/stuart-little/haskell/ch-1.hs), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/stuart-little/node/ch-1.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/stuart-little/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/stuart-little/raku/ch-1.p6)

As we may well assume from his parallel submission in Haskell, Stuart is comfortable working with function compositions. This presumably leads him to the following curious manner of processing the data from file to output:

```perl
    my $data;
    {
        local $/ = undef;
        $data = <$fh>;
    }

    for (@{getNrs($data)}) {say};
```

The first block slurps the file into a single string. His `getNrs()` routine then applies a regular expression to extract as many matches as it can from the string, returning them as an anonymous array. This array is then dereferenced and looped over by the `for` statement, which applies `say` to the topic variable `$_`, printing the matched number strings.

```perl
    sub getNrs($data) {
        my @nrs = $data =~ m/((?:\+\d{2}|\(\d{2}\)|\d{4})\s+\d{10})/gsm;
        return \@nrs;
    }
```


### a THRICE OF REGEXEN
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/athanasius/perl/ch-1.pl),
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/cristian-heredia/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/dave-jacoby/perl/ch-1.pl), and
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/duncan-c-white/perl/ch-1.pl)



As there were three acceptable formats given, some decided to make three different matching patterns and apply them sequentially. This approach also allowed the easy tuning of specific patterns for, say, that pesky space.

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/athanasius/perl/ch-1.pl)


**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/athanasius/raku/ch-1.raku)

The monk provides a different structure for the alternation in their submission, with an `if/elsif` chain to try matching the three cases individually. Note that by capturing the pre- and postfix groups, on reassembly the central space is standardized to a single character.

```perl
    if    ($line =~ / ^ \s* \+ (\d{2})    \s+ (\d{10}) \s* $ /x)
    {
        $number = " +$1 $2";
    }
    elsif ($line =~ / ^ \s* \( (\d{2}) \) \s+ (\d{10}) \s* $ /x)
    {
        $number = "($1) $2";
    }
    elsif ($line =~ / ^ \s*    (\d{4})    \s+ (\d{10}) \s* $ /x)
    {
        $number = "$1 $2";
    }
```


[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/cristian-heredia/perl/ch-1.pl)


**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/cristian-heredia/python/ch-1.py)

Christina presents her three cases in a single conditional line, connected by logical `or` conjunctions.

```perl
    while( my $line = <FILE>)  {
        if ($line =~ /\+\d{2}\s\d{10}/ or $line =~ /\(\d{2}\)\s\d{10}/ or $line =~ /\d{4}\s\d{10}/) {
            print "$line";
        }
    }
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/dave-jacoby/perl/ch-1.pl)



Using the `x` modifier we can more easily see how Dave chooses to tailor the central spacing issue differently for each of his three different patterns, either matching on `\s` or `\s+`.

```perl
    sub is_phone_number( $string ) {
        return 1 if $string =~ m{
            ^\ *    # starts with maybe space
            \d{4}   # then has four digits
            \       # then one space
            \d{10}  # then has ten digits
            \s*$    # with maybe ending spaces
            }mix;
        return 1 if $string =~ m{
            ^\ *    # starts with maybe space
            \+\d{2} # then has a plus sign and two digits
            \ +     # then one or more space
            \d{10}  # then has ten digits
            \s*$    # with maybe ending spaces
            }mix;
        return 1 if $string =~ m{
            ^\ *        # starts with maybe space
            \(\d{2}\)   # then has two digits within parens
            \ +         # then one or more space
            \d{10}      # then has eight digits
            \s*$        # with maybe ending spaces
            }mix;
        return 0;
    }
```

### defining the CHARACTER CLASSES
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/e-choroba/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/roger-bell-west/perl/ch-1.pl), and
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/sgreen/perl/ch-1.pl)



It's always good practice to define your expressions as tightly as possible when matching, in the event of an unexpected edge-case popping up. The more closely you can constrain your parameters, the less likely you are to pick up something you don't want.

In this case, this is reflected in avoiding the general digit character class, as we are known to only desire specifically the 10 Arabic numerals from 0 to 9.

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/e-choroba/perl/ch-1.pl)



Choroba went with this more exclusive character class for this very attractive construct:

```perl
    my $VALID = qr/^\s* (?: \([0-9]{2}\)
                          | \+[0-9]{2}
                          |   [0-9]{4}
                        ) \s+
                        [0-9]{10} $/x;
```

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/sgreen/perl/ch-1.pl)



As did Simon. here, who includes a link to a [brian d foy post](https://www.effectiveperlprogramming.com/2011/01/know-your-character-classes/) warning on the possibliity of unicode including numerals from other languages in `\d`.

```perl
    /^(?:\+[0-9]{2}|\([0-9]{2}\)|[0-9]{4}) [0-9]{10}$/
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/roger-bell-west/perl/ch-1.pl)


**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/roger-bell-west/rust/ch-1.rs), [Shell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/roger-bell-west/shell/ch-1.sh)

And Roger, who included examples in a variety of languages as well.

```perl
    while (<>) {
      print if /^\s*(\+[0-9]{2}|\([0-9]{2}\)|[0-9]{4}) [0-9]{10}\s*$/;
    }
```



### HEADS and TAILS
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/arne-sommer/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/cheok-yin-fung/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/wanderdoc/perl/ch-1.pl)



As the country prefix was the only point of variation, some methods began by dividing the found number candidate into two sections for parsing, the prefix and the subscriber line digits.

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/cheok-yin-fung/perl/ch-1.pl)



CY uses a series of `substr` statements to isolate parts of her input lines for further analysis. After first ascertaining there's a space in position 5, she goes on to validate the last characters as digits and then the prefix as matching one of the three formats. As the whitespace in the input file is not a well-defined aspect, this works if the line contains only the number, a plausible scenario. Of note this strategy will match either "space plus digit digit space" or "plus digit digit space space" for that prefix, handling the anomaly well.

```perl
    if ( length $s == 15 &&
        substr($s, 4, 1) eq " " &&
        substr($s, -11) =~ / \d{10}/ &&
        (substr($s,0,4) =~ /\d{4}/ ||
         substr($s,0,4) =~ /\+\d{2}/ ||
         substr($s,0,4) =~ /\(\d{2}\)/)
    ) {
        print $s, "\n";
    }
```

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/wanderdoc/perl/ch-1.pl)



The doctor takes a different strategy, first trimming the line and splitting on the central whitespace into `$code` and `$number` segments. Then a cascade of further checks are applied to thoroughly verify the format parts.

```perl
    sub valid_phone_number
    {
         my $text = $_[0];
         $text =~ s/^\s*//;
         $text =~ s/\s*$//;
         my ($code, $number) = split(/\s/, $text);
         return 0 unless defined $number;
         return 0 unless $code =~ /^\+\d{2}|\(\d{2}\)|\d{4}$/;
         return 0 unless $number =~ /\d{10}/;
         return 1;
    }
```


[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/arne-sommer/perl/ch-1.pl)


**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/arne-sommer/raku/ch-1.raku)

Arne applies a detailed analysis to the source file, developing an interpretation of spacing with the following rules:

- must have 15 chars
- char 5 is a space
- after char 5 is all digits
- valid prefixes: 4 digits, "space plus digit digit", "paren digit digit paren"

The first rule is the only one I find a little odd, accepting only 15 digits. This in turn requires the addition of a space before the `+` in that format, but that is what is shown in the file. The mal-formed format example is explicitly assumed to be an error. With the addition of the further constraint on overall length, we are again presented with a cascading gauntlet of conditional predicates, that, if satisfied, results in printing the validated number to output.


```perl
    for my $line (read_file($phonebook, chomp => 1))
    {
      next unless length($line) == 15;
      next unless substr($line, 4, 1) eq ' ';
      next unless substr($line, 5) =~ /^\d{10}$/;

      my $first = substr($line, 0, 4);

      next unless $first =~ /^\d{4}$/ || $first =~ /^\s\+\d\d$/ || $first =~ /^\(\d\d\)$/;

      say $line;
    }
```


### venturing FURTHER into the AMBIGUITIES
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/jo-37/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/perlboy1967/perl/ch-1.pl), and
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/pete-houston/perl/ch-1.pl)



Arne's analysis makes a nice segue into the next section. There were, as we have mentioned, certain ambiguities and undefined areas around the input. Some members went a little further beyond the what, into the why, and tried to think the situation through in an effort to nail down these grey areas.

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/jo-37/perl/ch-1.pl)



One unusual allowance Jorg makes in his analysis is for the case of multiple numbers on a line, which requires new rules to disallow certain conflicts.

>The specification is a bit vague, especially as the example
'+44 1148820341' does not match the respective format
'+nn  nnnnnnnnnn'.  Therefore some additional assumptions are made:
> - a fixed international dialing prefix of '00'
> - the country code has exactly 2 digits
> - the national number has exactly 10 digits
> - multiple numbers may appear on the same line
> - a phone number starting with a digit must not follow a digit
> - a phone number must not be followed by a digit
> - the number of blanks between prefix and national number is variable

Here is his final construction:

```perl
    while (<$fh>) {
        push @num, /((?:\+\d{2}|\(\d{2}\)|(?<!\d)00\d{2}) +\d{10})(?!\d)/g;
    }
```

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/pete-houston/perl/ch-1.pl)



After a rigorous analysis of ambiguities, Pete takes the position that although only one is required, multiple internal spaces are to be tolerated. These are then are collapsed to a standardized single space for output.

>In the definition of acceptable formats, the first format has a double
whitespace between the IDC and the remainder whereas the other formats
have a single whitespace there. In the sample inputs, none of the given
lines have a double whitespace and yet the outputs show lines which can
only match the first format.

> Possible conclusions are
> - all whitespace is to be ignored
> - all whitespace is to be collapsed
> - the spec has a typo and only single whitespaces are valid


>The first of these seems unlikely as it would permit sufficiently large
whole numbers to be interpreted as phone numbers.

>The significance of multiple whitespaces is unknown in the data corpus
but given the standard approach of being liberal in what one accpets
and strict in what one produces it would be reasonable to think that
collapsing sounds like the best compromise. Along similar lines I will
also collapse any whitespace that matches C<\s>.

>There is also the matter of leading whitespace in the output. One line
of output (with the 3-character IDC) has a leading space. We assume that
this fomatting is required.

Here he capitalizes on the fact that `for` aliases the actual value to `$_` when looping, using this to alter the elements collected before printout. This is a good trick to remember to perform multiple processes on an entire array of values.

```perl
    # Match
    my @valid = $in =~ /(?:\+\d\d|\(\d\d\)|\d{4})\s+\d{10}/g;

    # Normalise
    for (@valid) {
        # Collapse multiple whitespace, convert tabs and newlines
        s/\s+/ /g;
        # Leading whitespace for +nn
        s/^\+/ +/;
    }
```


[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/perlboy1967/perl/ch-1.pl)



Fueled by what must be a reasonable proximity to the English Channel and the virtues of  good research skills, Niels presents the most elborate attempt we found to validate a *correct* number sequence, regardless of the simple rules given:

His understanding of the matter:

> 1. +nn nnnnnnnnnn:<br>
>    '+' followed 2-4 digits (see: https://countrycode.org/)
>    followed by one or more spaces followed 6 or more digits
> 2. nnnn nnnnnnnnnn:<br>
>    '00' followed by 2-4 digits followed by one or more spaces
>    followed by 6 or more digits
> 3. (nn) nnnnnnnnnn:<br>
>    '(' followed by 2-4 digits followed by ')' followed by
>    one or more spaces followed by 6 or more digits

This yields the following example:

```perl
    sub validatePhoneNumber($) {
      my ($n) = @_;

      # trim input
      $n =~ s/^\s*(.+?)\s*$/$1/;

      my ($ccMinLen,$ccMaxLen) = (2,4);
      my $pMinLen = 6;

      return $n if ($n =~ m/(
        ^ \+ \d{$ccMinLen,$ccMaxLen}    \s+ \d{$pMinLen,} $ |
        ^ 00 \d{$ccMinLen,$ccMaxLen}    \s+ \d{$pMinLen,} $ |
        ^ \( \d{$ccMinLen,$ccMaxLen} \) \s+ \d{$pMinLen,} $
      )/x);

      return;
    }
```




## UNUSUAL TAKES and ALTERNATE POINTS of VIEW
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/abigail/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/adam-russell/perl/ch-1.pl), and
[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/ryan-thompson/perl/ch-1.pl)



### a generalized GRAMMAR

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/adam-russell/perl/ch-1.pl)


**additional languages:**
[Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/adam-russell/prolog/ch-1.p)

Unsatisfied with a simple regular expression, Adam takes the previous abstractions out another level, describing the valid formats using a tokenized grammar.

The rules are described in a YACC-like grammar file, [`PhoneNumberParser.yp`](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/adam-russell/perl/PhoneNumberParser.yp), with rules, a lexer and a `parse` function. The file, fed to [`Parse::Yapp`](https://metacpan.org/pod/Parse::Yapp) produces a Perl module [`PhoneNumberParser.pm`](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/adam-russell/perl/PhoneNumberParser.pm), an object that when instantiated knows how to parse a valid phone number.

Code that writes code. One of my favorite things.

```perl
    MAIN:{
        my $parser = new PhoneNumberParser();
        while(my $line = <DATA>){
            $line =~ s/^\s+|\s+$//g;
            my $syntax_error = capture_stdout {
                $parser->parse($line);
            };
            print("$line\n") if !$syntax_error;
        }
    }
```

I'm not going to try and summarize the grammer file, it's best to just [go have a look for yourself](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/adam-russell/perl/PhoneNumberParser.yp).

### NORMALIZING the DATA SET

[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/ryan-thompson/perl/ch-1.pl)


**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/ryan-thompson/raku/ch-1.raku)

Ryan takes a substantially oppositional approach to the whole problem: rather than abstracting the format to match the numbers given, he normalizes the numbers to a standard form, and determines whether they are the same thing as one of the formats.

The formats have their internal spaces standardized to 1, then are loaded in a hash as keys. The candidate numbers have all of their digits 0 through 9 translated to 'n's, to match the format definitions. A quick check to the existence of a hash key verifies the number. The verification itself works inside a `grep` block, serving as a boolean filter for the original input from the file, and the filtered list remaining is printed out. Nice.

```perl
    my %valid =
        map { y/ / /sr => 1 }
        split /\s*(\n|$)\s*/, q{
            +nn  nnnnnnnnnn
            (nn) nnnnnnnnnn
            nnnn nnnnnnnnnn
        };

    print for grep { check_number($_) } <>;

    # Check if a number matches any template in %valid
    sub check_number {
        local $_ = shift;

        s/^\s+//, s/\s+$//; # Trim leading and trailing whitespace
        y/0-9/n/, y/ / /s;  # Replace digits, squash internal spaces

        return $_ if $valid{$_};
    }
```

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/abigail/perl/ch-1.pl)


**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/abigail/awk/ch-1.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/abigail/bash/ch-1.sh), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/abigail/c/ch-1.c), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/abigail/lua/ch-1.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/abigail/node/ch-1.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/abigail/python/ch-1.py), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/abigail/ruby/ch-1.rb)

For Abigail, a strong interpretation of spacing in the input file lends them to 3 rule options for valid formatting:
> - A plus sign "+" followed by twelve digits
> - Opening paren "(", two digits, closing paren ")", then ten digits
> - Fourteen digits

Internal whitespace is decreed inconsequential.

Rules in hand, they then commence to use substitution to standardize the three prefix alternates, switching the parenthesis characters into 0s, and the plus into `00`, makeing all valid prefixes 4 digits. The string is then checked to see whether it has exactly 14 digits.

```perl
    while (<>) {
        print if s{\s+}           {}gr     # Remove white space
              =~ s{^\+}           {00}r    # Replace leading + with 00
              =~ s{^\([0-9]{2}\)} {0000}r  # Replace leading (NN) with 0000
              =~  /^[0-9]{14}$/            # Check if 14 digits are left
    }
```


---

# TASK 2 {#PWC110TASK2}

# Transpose File
*Submitted by: Mohammad S Anwar*
You are given a text file.

Write a script to transpose the contents of the given file.

**Input File**

```
    name,age,sex
    Mohammad,45,m
    Joe,20,m
    Julie,35,f
    Cristina,10,f
```
**Output:**

```
    name,Mohammad,Joe,Julie,Cristina
    age,45,20,35,10
    sex,m,m,f,f
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/abigail/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/adam-russell/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/arne-sommer/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/athanasius/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/jo-37/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/laurent-rosenfeld/perl/ch-2.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/mohammad-anwar/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/perlboy1967/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/pete-houston/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/roger-bell-west/perl/ch-2.pl),
[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/ryan-thompson/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/sgreen/perl/ch-2.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/stuart-little/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/ulrich-rieke/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/wlmb/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/wanderdoc/perl/ch-2.pl)



There were 24 submissions for the second task this past week. Amongst these, we saw two common approaches to perform the transposition.

Running second in popularity but perhaps the easiest to conceptualize was to build a matrix from the input fields, then reverse the indices when iterating through these positions to create the transposed version.

The most common class of methods we saw, though — arguably simpler — was to divide the input into fields and push the values over directly onto the tranposed output. This could be taking a row of input and transforming it into a column of output, or the other way around, turning a column into a row. There was a lot of personal style reflected in exactly how this was done, using `for`, `while` and `map` looping constructs, and we'll explore this. A few examples concatenated the new fields directly to the output rows, which involved manually joining the fields with commas.

And, inevitably, some submissions used a module to perform the action for them.

## to CSV or not to CSV?

The example file is tabular data separated by commas, but is not actually stated to be in CSV format, exactly. We've been here before, and again I feel the need to expand on why this seemingly small semantic difference matters. CSV is a fine way to reduce multidimensional data to a flat file that's both easy to produce and fairly human-readable. It works really well, up until the inevitable time when it doesn't.

The problems with CSV as a file format start when you want to want to include arbitrary strings in the fields. Strings, for instance, that themselves include commas. At that point you need a plan to escape the commas within the string, or otherwise quote the fields. Which in turn makes one question on how to escape the quote marks should those arise, or how, in turn, to escape the escape character. To say it gets complicated quickly is an undestatement, which is why there are two rules in life: do not make up your own cryptography scheme unless you don't care if it gets broken, and do not roll your own CSV parser unless you don't care if it breaks. Just don't do it. There's too much pain involved. Reach for a ready-made solution. That's why they're there.

The data provided didn't present any of these problems, being just a short group of lists with a lot of commas in them. Some folks went and treated it as a `.csv` file and imported the excellent `Text::CSV` module family, which is all-around good thinking. Others, like me, didn't see the problem as being about a file format but rather one of manipulating data structures, and so applied `split /,/` on the data and moved on to the meat of the matter. Which is fine just so long as we're not pretending this is proper CSV, so we can arbitrarily demand: "no commas allowed, ever, under any circumstances".

In a real-world situation, where we likely don't have an iron grip on our input data, we should always import the module, because we know better. But here? Eh...

So with that caveat, for this task either way will suffice.

## transform each ROW into the next COLUMN
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/athanasius/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/jo-37/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/laurent-rosenfeld/perl/ch-2.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/mohammad-anwar/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/roger-bell-west/perl/ch-2.pl), and
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/ulrich-rieke/perl/ch-2.pl)


When we look at an individual row of input data, what we're looking at is a column in the transposed output. If we build a list of output rows in order, we can sequentially distribute the fields down the list, appending one field per list, building out the transposed data one column at a time.

[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/mohammad-anwar/perl/ch-2.pl)


The `Test::CSV` module is a full-featured solution for handling all things CSV, built up over decades to a robust suite of functions. Filehandles are integrated into the workflow, so the function `getline($fh)` returns the next line of a `.csv` file as an array reference. Mohammed takes each of these elements in a loop, pushing them on to the rows of the transposed array using an auto-incrementing index iterator.

```perl
    while (my $row = $csv->getline($fh)) {
        chomp $row;
        my $i = 0;
        foreach my $field (@$row) {
            push @{$contents->[$i++]}, $field;
        }
    }
```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/laurent-rosenfeld/perl/ch-2.pl)

**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/laurent-rosenfeld/awk/ch-2.awk), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/laurent-rosenfeld/raku/ch-2.raku)

Laurent gives us an example treating the input rows as flat lists of data without internal commas, so he can simply `split` the strings into fields. After that we see the same iterator incremented at each turn through the loop.

```perl
    for my $in (@input) {
        my $i = 0;
        for my $str (split /,/, $in) {
            push @{$transposed[$i]}, $str;
            $i++;
        }
    }
```

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/ulrich-rieke/perl/ch-2.pl)

**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/ulrich-rieke/awk/ch-2.awk), [C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/ulrich-rieke/cpp/ch-2.cpp), [Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/ulrich-rieke/haskell/ch-2.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/ulrich-rieke/raku/ch-2.raku)

Again we see the pattern of each row in the input being split and allocated, in this case the iterator forms the basis of the loop construct. The index of the assigned row is always the same as the index within the source row, so we can use the same value.

```perl
    for my $row (0 .. scalar( @rows ) - 1 ) {
      my @columns = split( /\,/, $rows[$row] ) ;
      for my $column (0 .. $len - 1 ) {
          push @{$transposed[ $column ]} , $columns[ $column ] ;
      }
    }
    for my $line ( @transposed ) {
      say join( ',' , @$line ) ;
    }
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/roger-bell-west/perl/ch-2.pl)

**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/roger-bell-west/rust/ch-2.rs)

Roger here considers the source file to be proper CSV data, and presents another tightly crafted method of implementing the techniques we've seen.

```perl
    while (my $row=$csv->getline($fh)) {
      foreach my $ci (0..$#{$row}) {
        $a[$ci][$ri]=$row->[$ci];
      }
      $ri++;
    }
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/athanasius/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/athanasius/raku/ch-2.raku)

The monk works off the assumption that the first line of data will be a header row, as is normal for a CSV file. They keep this row separate in a `@headers` variable for easy reference, and use the values as keys pointing to arrays that get built up according to the ordering in that `@headers` list we just mentioned. The header value needs to be prepended to the output string of course, but this method does keep the data and the metadata separate, which is an organizationally sound principle to work from.

```perl
    while (my $line = <$fh>)
    {
        chomp $line;
        print "  $line\n";

        my @entries = split /,/, $line;

        push $data{ $_ }->@*, shift @entries for @headers;
    }

    close $fh
        or die qq[Cannot close file "$file", stopped];

    print  "\nOutput:\n\n";
    printf   "  %s\n", join ',', $data{ $_ }->@* for @headers;
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/jo-37/perl/ch-2.pl)


For quite some time, since 5.12, calling `each` on an array will return a short list with the index and value for the next element in the array. This can be extremely handy in the right context, as shown by how cleanly we can rephrase the steps of the technique we've been discussing:

```perl
    sub transpose_file ($fh) {
        my @tr;
        while (<$fh>) {
            my @part = split /,|\n/;
            while (my ($i, $v) = each @part) {
                push $tr[$i]->@*, $v;
            }
        }

        @tr;
    }
```

Jorg also provides this little snippet and comment, which I'll just report verbatim:

>perlvar states:
>>  passing "\*ARGV" as a parameter to a function that expects a filehandle may not cause your function to automatically read the contents of all the files in @ARGV.
>It seems to work, though.

With that note this small block completes his data flow:

```perl
    {
        local $, = ',';
        say @$_ for transpose_file(\*ARGV);
    }
```

## CONCATENATING IMMEDIATELY into every ROW
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/abigail/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/arne-sommer/perl/ch-2.pl), and
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/e-choroba/perl/ch-2.pl)


Instead of adding elements to arrays of the output rows, several members took it upon themselves to keep those output rows as strings throughout and concatenate new data to them directly as required. This is a pretty straightforward task, with the principal obstacle presented being the correct interspacing of commas between fields. There's arguably only one easy way to to this — use `join`, but even that can require some bookkeeping should your array end up with `undef` elements interspersed. With three submissions we ended up with three techniques.

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/arne-sommer/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/arne-sommer/raku/ch-2.raku)

The immediate concern when directly concatenating the input fields onto their respective strings is inserting the commas correctly, between adjacent elements but not either before the first or after the last. To this end Arne constructs a clever little ternary switch, adding a comma before the new field only after the output string already exists. In this way the tail values gets a comma before them and the first value does not.

```perl
    for my $index (0 .. @words -1)
    {
       $lines[$index] .= $lines[$index]
         ? ( "," . $words[$index])
         : $words[$index];
    }
```

In an aside I would like to point out the formatting for the ternary operator. I find lining up the `?` and the `:`  hands-down to be the clearest way to present the options.

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/e-choroba/perl/ch-2.pl)


Again a given field may or may not be preceded by a comma, depending on it's placement within the final string. Specifically, the first element does not have this prefix, the remaining do. Choroba manages this by assigning a value to the aptly-named `$maybe_comma` variable only after the first concatenation. This is logically sound, albeit a bit indirect, but avoids a repeated conditional.

```perl
    while (<$in>) {
        chomp;
        my @cells = split /,/;
        $tr[$_] .= "$maybe_comma$cells[$_]" for 0 .. $#cells;
        $maybe_comma = ',';
    }
    say {$out} $_ for @tr;
```



[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/abigail/perl/ch-2.pl)

**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/abigail/awk/ch-2.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/abigail/bash/ch-2.sh), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/abigail/c/ch-2.c), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/abigail/lua/ch-2.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/abigail/node/ch-2.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/abigail/python/ch-2.py), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/abigail/ruby/ch-2.rb)

Finally, Abigail takes a pragmatically simple approach, adding a comma indiscriminately after every field. This will present a trailing comma, of course, but that's where `chop` shines, for indiscriminately removing the last character of string, no matter how much it pleads and begs. By not asking, we have removed the conditional logic from the loop structures entirely.

Not only does this yield a very compact solution but it also is easily portable to languages that do not support multidimensional arrays. It does, however, require that all of the input rows have the same number of fields, but that's true of this whole group of solutions.

```perl
    # Read in the data, split into fields, add the fields to a set strings,
    # placed in an array @;. Add commas after each field.
    #
    map {$- = 0; $; [$- ++] .= "$_," for /[^,\n]+/g} <>;

    chop, say for @;
```


## transform each COLUMN into the next ROW
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/polettix/perl/ch-2.pl),
[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/ryan-thompson/perl/ch-2.pl) ,
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/sgreen/perl/ch-2.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/stuart-little/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/wlmb/perl/ch-2.pl)



The transformation from rows to columns is of course completely reversible, so the relationship also allows us to scrape the other way: from the input data, one column at a time, building a complete row for output in a single pass.

[**Ryan Thompson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/ryan-thompson/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/ryan-thompson/raku/ch-2.raku)

Ryan presents this technique to us in a clear and concise manner. Reading the lines from STDIN using the diamond operator, he dices them up into an array of arrays. Then for each column index, he uses a `map` to collect the element from each row of input. With the fields gathered, they are then joined with a comma and immediately printed.

```perl
    my @rows = map { chomp; [ split ',' ] } <>;

    for my $col (0..$#{$rows[0]}) {
        say join ',', map { $_->[$col] } @rows
    }
```

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/sgreen/perl/ch-2.pl)


Most of the solutions we have seen so far are in some way dependent on the input data being complete and well-structured. Ryan's submission, for example, depends on the first line having the correct number of fields, without which things go sideways fast. In the CSV format the first line is column headers, which should always be present, so this isn't really a problem. But then again humans make mistakes and can leave things unlabeled, and if the last column is unlabeled the final count will end up off and it will remain unseen.

Simon takes an added step to address this by first determining the largest number of input fields in any row and using that number as the column count.

```perl
    # Get the maximum number of values in the rows
    my $max = max( map { scalar(@$_) } @lines );

    # Print each column as a row
    for my $col ( 0 .. $max - 1 ) {
        say join ',', map { $_->[$col] // '' } @lines;
    }
```


[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/stuart-little/perl/ch-2.pl)

**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/stuart-little/haskell/ch-2.hs), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/stuart-little/node/ch-2.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/stuart-little/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/stuart-little/raku/ch-2.p6)

Stuart extends the abstraction further, transforming the entire `@data` array-of-arrays at one go using [`List::AllUtils qw(zip_by)`](https://metacpan.org/pod/List::AllUtils#zip_by). This takes sequential elements from a list of array references like `zip`, handing the list of elements gathered off to a block for processing. In this case the list is gathered into it's own anonymous array, which has its elements joined with a comma.

```perl
    my @transData = map {join(",",@{$_})} zip_by { [ @_ ] } @data;
    for (@transData) {
        say;
    }
```


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/wlmb/perl/ch-2.pl)


We are presented with a brace of solutions by Luis, the first assuming simpler, more structured input, the second calling in `Text::CSV` for more robust data handling.

He can't quite get his simple submission down to a one-liner, but not for want of trying.
```perl
    my @input=map {chomp; [split /,/]} <>;
    say join "\n", map { my $c=$_; join ",", map {$input[$_][$c]} 0..@input-1} 0..scalar @{$input[0]}-1;
```

The robust solution is a little more complicated by necessity, but functions in much the same manner.

```perl
    use List::Util qw(max);
    use Text::CSV qw(csv);
    my $input=csv(in=>*ARGV);
    my $Ncols=max map {scalar @{$input->[$_]}} @$input-1;
    my $transposed=[map {my $c=$_; [map {$input->[$_][$c]} 0..@$input-1]} 0..$Ncols-1];
    csv(in=>$transposed, out=>*STDOUT, eol=>$/);
```

## create a MATRIX and REVERSE THE INDICES
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/duncan-c-white/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/jaldhar-h-vyas/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/wanderdoc/perl/ch-2.pl)


Given a matrix we can construct a transposed version of it by reflecting every element in it through the major diagonal. That might sound complicated, but all we need to do is reverse the indices: every element at coordinates (*i*, *j*) is relocated to its complementary position at (*j*, *i*).

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/colin-crain/perl/ch-2.pl)

**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/colin-crain/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/colin-crain/raku/ch-2.raku)

For my own solution, I gathered the maximum row size when scanning through and assembling my input matrix, defining the dimensions for the transposed version. After this two iterators and an index reversal are all that is needed to make the swaps.

After, by swapping the output field separator to a comma, output is as simple as printing the rows.

```perl
    while (<>) {
        chomp;
        push @mat, [ split ',', $_ ];
        $mat[-1]->@* > $max and $max = $mat[-1]->@*;
    }

    for my $i (0..@mat-1) {
        for  my $j (0..$max-1) {
            $trans[$j][$i] = $mat[$i][$j];
        }
    }

    local $" = ',';
    say "@$_" for @trans;
```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/cheok-yin-fung/perl/ch-2.pl)


CY extends the technique to accept proper CSV input. Again she takes the precaution of finding the maximum number of columns instead of relying on the integrity of any one row. It's a small detail but makes the process more robust.

```perl
    my $old_num_row = scalar @{$csv_file};
    my $old_max_num_col = 1;
    for my $field (@{$csv_file}) {
        my $len = scalar @{$field};
        $old_max_num_col = $len if $len > $old_max_num_col;
    }

    for my $i (0..$old_max_num_col-1) {
        print_item($csv_file->[0]->[$i]);
        for my $k (1..$old_num_row-1) {
            print ",";
            print_item($csv_file->[$k]->[$i]);
        }
        print "\n";
    }
```

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/jaldhar-h-vyas/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/jaldhar-h-vyas/raku/ch-2.raku)

This class of solutions tended on the whole to be very self-similar, but Jaldhar gives us a variation using `push` to accomplish the reversal. In the end, though, the same steps occur and the same order.

```perl
    for my $j (0 .. scalar @{$table[0]} - 1) {
        for my $i (0 .. scalar @table - 1) {
            push @{$transposed[$j]}, $table[$i]->[$j];
        }
    }
```

## ask a MODULE nicely to DO IT FOR YOU
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/pete-houston/perl/ch-2.pl), and
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/perlboy1967/perl/ch-2.pl)


With two and a half decades of cpan to draw from, it's easier to start with the assumption there's a module out there for it, whatever it is. In this case `Array::Transpose` sounds promising, doesn't it?

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/pete-houston/perl/ch-2.pl)


Modules can really handle the whole process from beginning to end. `Text::CSV` will be happy to open a file for you and read it in, delivering an array reference holding the data in an array of arrays. `Array::Transpose` will do what's expected here, and afterwards handing it back to `Text::CSV` we can then write it back to a file. I feel if we really needed to do this out in the real world this would be the way to go about it.

However for an account of an actual real-world example, continue reading to the end.

```perl
    use Array::Transpose;
    use Text::CSV 1.90 'csv';

    my $enc_in  = $ARGV[2] // 'UTF-8';
    my $enc_out = $ARGV[3] // $enc_in;
    my $array   = csv (in => $ARGV[0], encoding => $enc_in);
    my @tr      = transpose ($array);

    csv (in => \@tr, out => $ARGV[1], encoding => $enc_out);
```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/perlboy1967/perl/ch-2.pl)


Niels solves the task for us two ways today. In the first he uses a pair of nested `map` functions to take each input row, divide it into fields, and divvy them up as columns over the output.

```perl
    map {
      my $i = 0;
      map { push(@{$out[$i++]},$_) } split(/,/, $_);
    } @lines;
```

In the second submission he calls on `Array::Transpose` and splitting within an anonymous array block to try and fit everything into a minimal solution, to great effect.

```perl
    use Array::Transpose;

    sub transposeFile($) {
      map{join(',',@$_)}transpose[map{s/^\s*(.*?)\s*$/$1/;[split/,/]}read_file($_[0])];
    }
```


## BIZARRE, UNUSUAL and UNCLASSIFIABLE schemes
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/adam-russell/perl/ch-2.pl), and
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/james-smith/perl/ch-2.pl)


[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/adam-russell/perl/ch-2.pl)

**additional languages:**
[Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/adam-russell/prolog/ch-2.p)

Adam leads with a caveat, openly acknowledging that his solution is "not the easiest way to perform this task". Basing the Perl version on the logic in his Prolog solution, to this end he constructs not one but a pair of recursive routines. The first functions as a loop to process the rows of the input table, here called `@columns` because that's what they end up being. The second routine takes a given row of input and, recursively again, pushes the elements sequentially onto the element rows of a multidimensional output array. Ultimately the rows in the transposed array are joined with commas and printed.

```perl
    sub transpose_r{
        my($transposed, $remaining) = @_;
        return $transposed if(@{$remaining} == 0);
        $transposed = transpose_row_r($transposed, $remaining->[0]);
        shift @{$remaining};
        transpose_r($transposed, $remaining);
    }

    sub transpose_row_r{
        my($transposed, $row) = @_;
        return $transposed if(@{$row} == 0);
        my $index = @{$row} - 1;
        push @{$transposed->[$index]}, pop @{$row};
        transpose_row_r($transposed, $row);
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-110/james-smith/perl/ch-2.pl)


Saving the best for last, we now have a look at what James has brought to offer.

Ok, fine. I should probably maintain my neutrality and stay away from any grand superlative pronouncements, but it remains undeniable that what is offered here is the good stuff. I just got a little carried away there. Forgive me, please. I appreciate and encourage each and every one of your efforts, truly. That too remains undeniable.

As mentioned a few weeks ago, we're not sure exactly what James' day job description is, so we're going to continue using the broad term "geneticist". As such he routinely deals with transforming massive amounts of tabular data, and for this task brings us a [concrete, real-world example](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-110/james-smith).

Here has kindly provided us with a proper study in efficiency for this task, with three methods applied across three datasets: small, medium and large.

For the base method he constructs the transposed matrix one row at a time by shifting off one column of input at a pass, much as we explored earlier. This requires keeping the entire array-of-arrays in memory.

```perl
    sub transpose_split {
      ## Slurp into array
      open my $fh, '<', $_[0];
      my @in =  map { chomp;[ split /,/ ] } <$fh>;
      close $fh;
      ## Generate transpose
      open $fh, '>', $_[1];
      say {$fh} join ',', map {shift @{$_} } @in while @{$in[0]};
      close $fh;
    }
```

For the first refinement he leaves the input lines intact as strings and parses out the fields using a regular expression. This reduces the memory footprint by an order of magnitude. This resulted in considerable acceleration to the mid-level data sets, but ultimately broke down parsing truly massive files.

```perl
    sub transpose_regex {
      ## Slurp into array
      open my $fh, '<', $_[0];
      my @in = <$fh>;
      close $fh;
      ## Generate transpose
      open $fh, '>', $_[1];
      say {$fh} join ',', map { s{^(.*?)[,\r\n]+}{}; $1 } @in while $in[0];
      close $fh;
    }
```

The last improvement is impressive, drawing on `seek`, `tell` and `read` to only access the input file data in small, digestable chunks. For the real-world example he provides, this brought on a 100-fold speedup through proper memory management.

```perl
    sub transpose_seek {
      my ( $prev, @pos ) = ( 0 );

      ## Loop through the file and get the start/end position of each line,
      ## and the first $BYTES characters of each line...

      open my $fh,  '<', $_[0];

      ( push @pos, [ $prev+$BYTES, tell $fh, substr $_, 0, $BYTES ] ) &&
        ( $prev = tell $fh ) while <$fh>;

      ## While we still have "columns" loop through each row and grab the first
      ## entry and output results.

      open my $ofh, '>', $_[1];  ## Need 2 file handles open at once for this.

      while( $pos[0][0] < $pos[0][1] || length $pos[0][2] ) {
        my $j = '';
        foreach( @pos ) {
          ## Grab extra data for the row if we have got an incomplete
          ## field {missing a "," and still data to read}
          while( $_->[2] !~ m{,} && $_->[0] < $_->[1] ) {
            seek $fh, $_->[0], 0;  ## 0 = from start of file!
            read $fh,
                 $_->[2],    ## "Buffer"
                 $_->[1]-$_->[0] > $BYTES ? $BYTES : $_->[1]-$_->[0],
                 length $_->[2];  ## Length of "Buffer" so text gets
                                  ## added to end
            $_->[0] += $BYTES;
          }
          $_->[2] =~ s{^([^,\r\n]+)[,\r\n]*}{};
          print {$ofh} $j, $1;
          $j ||= ',';
        }
        say {$ofh} '';
      }
    }
```

He provides a complete writeup at his blog post, with a [detailed breakdown of the various file sizes used and results](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-110/james-smith). I found this rare view into a real-world example fascinating. I've been led to understand that Perl, having been highly tuned for decades, is already the fastest among its peers, but when given the tools and necessity to really go under the hood and tinker the potential for improvement is truly remarkable.











---

# BLOGS {#PWC110BLOGS}

---

**That's it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, I somehow continue to maintain my bearings. Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC093BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *READ* these *BLOG* *LINKS*:

**( *don't think, trust your training, you're in the zone, just do it ...* )**


**Aaron Smith**

 * [Perl Weekly Challenge 110 - Aaron Smith](https://aaronreidsmith.github.io/blog/perl-weekly-challenge-110/) ( *Raku* )

**Abigail**

 * [Perl Weekly Challenge 110: Valid Phone Numbers](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-110-1.html) ( *Perl* )
 * [Perl Weekly Challenge 110: Transpose File](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-110-2.html) ( *Perl* )

**Adam Russell**

 * [Checking Phone Numbers and Transposing Tabular Data the Hard Way: The Weekly Challenge 110 - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2021/05/02) ( *Perl* )
 * [Checking Phone Numbers and Transposing Tabular Data the Hard Way: The Weekly Challenge 110 - Prolog - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2021/05/02) ( *Prolog* )

**Andinus**

 * [Challenge 110](https://andinus.tilde.institute/pwc/challenge-110/) ( *Raku* )

**Arne Sommer**

 * [Validly Transposed Raku and Perl](https://raku-musings.com/validly-transposed.html) ( *Perl & Raku* )

**Cheok-Yin Fung**

 * [CY's Take on PWC#110 | Moments on Perl or Other Programming Issues](http://blogs.perl.org/users/c_y_fung/2021/05/cys-take-on-pwc110.html) ( *Perl* )

**Colin Crain**

 * [Flip Me Your Digits, Baby — Programming Excursions in Perl and Raku](https://colincrain.com/2021/05/02/flip-me-your-digits-baby/) ( *Perl & Raku* )

**Dave Jacoby**

 * [Hanging On The Telephone: Perl Weekly Challenge #110 | Committed to Memory](https://jacoby.github.io/2021/04/28/hanging-on-the-telephone-perl-weekly-challenge-110.html) ( *Perl* )

**Flavio Poletti**

 * [PWC110 - Valid Phone Numbers - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/04/28/pwc110-valid-phone-numbers/) ( *Perl* )
 * [PWC110 - Transpose File - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/04/29/pwc110-transpose-file/) ( *Perl* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 110](https://www.braincells.com/perl/2021/05/perl_weekly_challenge_week_110.html) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #110](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-110/james-smith) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 110: Valid Phone Numbers and Transposed File | laurent_r](http://blogs.perl.org/users/laurent_r/2021/05/perl-weekly-challenge-110-valid-phone-numbers-and-transposed-file.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 110: Mangling Text Files — Luca Ferrari — Open Source advocate, human being](https://fluca1978.github.io/2021/04/26/PerlWeeklyChallenge110.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 110: Mangling Text Files — Luca Ferrari — Open Source advocate, human being](https://fluca1978.github.io/2021/04/26/PerlWeeklyChallenge110.html#task2) ( *Raku* )

**Mohammad S Anwar**

 * [Perl Weekly Challenge - 110 (Task #1: Valid Phone Numbers) - YouTube](https://www.youtube.com/watch?v=nrL0sS-klo0) ( *Perl* )
 * [Perl Weekly Challenge - 110 (Task #2: Transpose File) - YouTube](https://www.youtube.com/watch?v=wIx1m__r4SQ) ( *Perl* )

**Roger Bell_West**

 * [RogerBW's Blog: Perl Weekly Challenge 110: Transpose Numbers](https://blog.firedrake.org/archive/2021/04/Perl_Weekly_Challenge_110__Transpose_Numbers.html) ( *Perl & Raku* )

**Ryan Thompson**

 * [PWC 110 — Phone Number Validation — Ryan J Thompson](https://ry.ca/2021/04/phone-number-validation/) ( *Perl & Raku* )
 * [PWC 110 — Transpose CSV File — Ryan J Thompson](https://ry.ca/2021/04/transpose-csv-file/) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 110](https://dev.to/simongreennet/weekly-challenge-110-22ao) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 110 — W. Luis Mochan](https://wlmb.github.io/2021/04/27/PWC110/) ( *Perl* )

