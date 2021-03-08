
---
author:       Colin Crain
date:         2021-03-08T00:00:00
description:  "Colin Crain › Perl Weekly Review #100"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #100"
image:        images/blog/p5-review-challenge-100.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-099/).* )

Welcome to the Perl review for **Week 100** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-100/) or the summary [**recap**](/blog/recap-challenge-100/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/iamges/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC100TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC100TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC100BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC100TASK1}

# Fun Time
Submitted by: Mohammad S Anwar
You are given a time (12 hour / 24 hour).

Write a script to convert the given time from 12 hour format to 24 hour format and vice versa.

Ideally we expect a one-liner.

**Example 1:**
```
    Input: 05:15 pm or 05:15pm
    Output: 17:15
```
**Example 2:**
```
    Input: 19:15
    Output: 07:15 pm or 07:15pm
```

## about the solutions

There were 31 working submissions for the first task this past week.

What, exactly, is a one-liner? It can be hard to pin down precisely. Traditionally, in Perl the term has meant a short Perl script invoked directly from the command line. Passing the interpreter `-E`, or some other combinations of switches, causes the next expression on the line to be parsed as Perl code and executed. One line, one and done.

In a more general sense, any sort of main logic that can be distilled to either a single line or a single expression can be said to fit the description as well. The term can even get a little looser depending on how much support code, I/O and boilerplate infrastructure such as `use strict` we wish to exclude.

For the purposes here we're going to go with a rather more inclusive definition. I mean, it's not like I'm distributing anything more that the occasional verbal gold star anyway. Let's bring them all to the table in their rarefied, distilled, compressed glory. And to those who like to breathe a bit in their code, well, those submissions will be quite a bit easier for me to read, so that's more than welcome too. You have no idea. As the number of submissions grows I can still only highlight a subset, and astute observers will have noticed I do enjoy well laid out code.

That said this particular task seems to have been crafted to give me golfing monstrosities to dissect, so, well, that's going to have to be my fate. I will still try and shine a light on as many interesting qualities as I can reasonably accommodate. Wish me luck out there. I believe I will be needing it.

## WHAT NEEDS TO HAPPEN

### 12-hour to 24-hour time

**The Basic Idea:** If we're in the afternoon, the pm hours, we need to add 12 to the hours.

**The Problem:** Noon, 12pm, is 12:00, which follows the basic pattern, but midnight, at 12am, circles around to 00:00. Apparently 24:00 can be considered correct time when referring to time intervals up to midnight, but anything after midnight requires resetting to 00 hours in the next day. There are apparently only rare, nonstandard exceptions to this that I for one have never seen.

### 24-hour to 12-hour time

**The Basic Idea:** If we're at 13:00 or beyond, we need to subtract 12 hours, and note this interval shift by appending "pm" to our time. If we don't need to subtract, we need to add "am".

**The Problem:** 12-hour time is two cycles that numerically pass through the hours 1 to 12, but the 12s are out-of-sync with respect to am and pm, being part of the next cycle. Noon is fine if left alone, hours-wise, but still needs to be labeled "pm". Midnight is doubly problematic, needing both to be relabeled 12 hours instead of 0, and also to have the result flagged as "am".


## ONE LINERS
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/abigail/perl/ch-1.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/alexander-pankoff/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/arne-sommer/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/colin-crain/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/e-choroba/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/jo-37/perl/ch-1.pl),
[**Mark J. Reed**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/markjreed/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/perlboy1967/perl/ch-1.pl), and
[**Pablo Saavedra**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/pablo-saavedra/perl/ch-1.pl)

Condensed, rarified and pure, invoked the do one thing and one thing only: twist time itself.

### from the COMMAND LINE
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/alexander-pankoff/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/colin-crain/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/e-choroba/perl/ch-1.pl), and
[**Mark J. Reed**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/markjreed/perl/ch-1.pl)

In its purest form, the Perl one-liner was born as a powerful custom command line utility whipped up to do one thing and do it well, somewhere making someone's file-munging existence that much less tiresome. In the spirit of this noble genesis of laziness, impatience and hubris, we'll begin our examination with those submissions that start with `perl -e`.


[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/alexander-pankoff/perl/ch-1.pl)
```
    perl -e 'join(" ",@ARGV)=~m/^\s*(\d\d?)\:(\d\d?)\s*([ap]m)?\s*$/&&printf("%02d\:%02d%s\n",$3?($3eq"pm"?$1==12?12:$1+12:$1==12?0:$1,$2,""):$1>=12?($1==12?12:$1-12,$2,"pm"):($1==0?12:$1,$2,"am"))' "17:15 pm"

```

Unpacked:

```perl
    sub convert_time($time) {
        if (
            $time =~ m/
                          ^         # anchor to the beginning of the string
                          \s*       # allow leading whitespace
                          (\d\d?) # the hour part
                          \:        # match the colon
                          (\d\d?) # the minute part
                          \s*       # optional whitespace
                          (am|pm)?  # optional am or pm
                          \s*       # allow trailing ws
                          $         # anchor to the end of the string
                         /x
          )
        {
            sprintf(
                "%02d\:%02d%s",
                $3 ? (
                    $3 eq 'pm'    #
                    ? $1 == 12
                          ? 12
                          : $1 + 12
                    : $1 == 12 ? 0
                    : $1,
                    $2, ''
                  )
                : $1 >= 12        #
                ? ( $1 == 12 ? 12 : $1 - 12, $2, 'pm' )
                : ( $1 == 0 ? 12 : $1, $2, 'am' )
            );
        }
    }
```

Pankoff kindly provides us with a well-commented breakdown of his line noise. I'll let his regular expression match speak for itself, and pick up at the `sprintf` (`printf` at the command line, of course). Depending in whether or not anything was matched in the third capture, one cascading series of ternary statements or the other is entered. The first section, indicated by the first hash mark, converts 12 to 24 hours, the second section, "false" to the value of `$3`, converts the other way.

This pattern of cascading trees of ternary logic switches shows up repeatedly throughout the solution base. The algorithm can really be reduced to a decision tree, asking questions to the parsed input and adjusting the path accordingly.

[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/colin-crain/perl/ch-1.pl)
```
    perl -E'@ARGV[0]=~/^(\d+)(:\d+)\s?(am|pm)*$/i;$c=$1>11?'pm':'am';$h=$1%12;if($3){$3eq"pm"and$h+=12;printf"%02d%s\n",$h,$2;}else{$h||=12;say"$h$2$c"}' "5:15pm"
```

Unpacked:

```perl
    sub timef_refactored {
        local $_= shift;

        /^ (\d+)(:\d+)\s?(am|pm)* $/xi;

        my $cyc = $1 > 11 ? 'pm' : 'am';
        my $hr  = $1 % 12;

        if ( $3 ) {
            $hr += 12 if $3 eq 'pm';
            return sprintf "%02d%s", $hr, $2;
        }
        else {
            $hr ||= 12;
            return "$hr$2$cyc";
        }
    }
```

For my own solution, I was able to factor out the modulo on the hours, as I was using it in both sides of the translation. In the 24-12 conversion the `||=` assigns the hours to 12 only if the value is 0, producing the correct cycle.

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/e-choroba/perl/ch-1.pl)
```
    perl -e '($h,$m,$p)=shift=~/(\d+):(\d+)\s*([ap]m)?/i;printf"%02d:%02d"." %sm"x!$p.$/,$p?($h%12+12*(pm eq$p)):($h%12||12),$m,$h>=12?p:a' '12:01 am'

```

Unpacked subroutine version:

```perl
    sub fun_time {
        my ($h, $m, $p) = $_[0] =~ /([0-9]+):([0-9]+)\s*([ap]m)?/i;
        if ($p) {
            return sprintf '%02d:%02d',
                           $h % 12 + 12 * ($p eq 'pm'),
                           $m
        } else {
            return sprintf '%02d:%02d %sm',
                           $h % 12 || 12,
                           $m,
                           $h >= 12 ? 'p' : 'a'
        }
    }
```

I love the condensation of bringing in the input, matching it and assigning it to working variables in one step. I also like on how in upconverting we add `12 * ($p eq 'pm')` — the comparison resolves to either 1 or 0, so the 12 is either added or not. Nice.

On the downconversion side, we see the logical OR again, this time substituting in 12 if the result of the modulo becomes 0. I was so pleased with myself when I first saw this to use in my own code; I'm glad to see others found it too. It's a very cool trick and I like this version quite a lot.

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/duncan-c-white/perl/ch-1.pl)
```
    perl -E '$_=join(" ",@ARGV); /^(\d+):(\d\d)\s*([ap]m)$/||die "bad $_"; ($h,$m,$s)=($1,$2,$3); if( $s ) {$h+=12 if $s eq "pm" && $h<12;$s=""}else{$s=$h>11?"pm":"am";$h-=12 if $h>12} say "$h:$m$s"' $*

```

Unpacked:

```perl
    $_ = join( " ", @ARGV );
    /^( \d+ ):( \d\d )\s*( [ap]m )$/x
        || die "bad $_";
    my ($h, $m, $s) = ($1, $2, $3);
    if( $s ) {
        $h += 12 if $s eq "pm" && $h < 12;
        $s = ""
    }
    else {
        $s = $h > 11?"pm":"am";
        $h -= 12 if $h > 12
    }
    say "$h:$m$s";
```

Duncan uses the same output for both conversions, merely setting the cycle indicator to a null string for 24-hour time. The upscaling conditional, of only adding 12 if both the cycle is pm and the hours are less than 12, is a new variant we haven't seen before.


[**Mark J. Reed**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/markjreed/perl/ch-1.pl)
```perl
    perl -lpe 's/(\d\d)(:\d\d)\s*([ap])m/sprintf "%02d$2", $1 + ($3 eq 'p' ? 12 : 0)/e || s/(\d\d)(:\d\d)\s*$/sprintf "%02d$2 %s", ($1 - 1) % 12 + 1, ($1 >= 12 ? "pm" : "am")/e'
```

Unpacked:

```perl
    s/(\d\d)(:\d\d)\s*([ap])m/  sprintf "%02d$2",
                                    $1 + ($3 eq 'p' ? 12 : 0)
                                /e
    ||
    s/(\d\d)(:\d\d)\s*$/    sprintf "%02d$2 %s",
                                ($1 - 1) % 12 + 1, ($1 >= 12 ? "pm" : "am")
                                /e;
```

Mark sets up two match scenarios, either to match an am/pm identifier or not. Joined with a logical OR operator, whichever matches will be trigger the related substitution. In the substitution phase we of course execute code, in both cases a `sprintf` function to reassemble the parts after modification. In the 12 to 24 conversion, this means adding 12 for the pm hours [yea, yea, I see it too]. For the 24 to 12 side, the hours are fixed with some modulo arithmetic and the interval is assigned using the unchanged hours. This is a good example of the other way to get the modulo math aligned between the 1 to 12 cycle of the hours and the 0 to 11 result of the modulo: subtract one, do the modulo, then add the one back.

I like that doing the logic this way — hinged around the central OR and rewriting the input, results in one continuous, albeit complex, statement with nary a semicolon in sight.



### cascading DECISION TREES determining an outcome
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/abigail/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/arne-sommer/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/jo-37/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/perlboy1967/perl/ch-1.pl),
[**Pablo Saavedra**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/pablo-saavedra/perl/ch-1.pl), and
[**Yet Ebreo**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/yet-ebreo/perl/ch-1.pl)

The idea of a one-liner can be extended to mean reducing the computational logic to a single line of code — much as in English grammarically correct sentences can be constructed contining multiple clauses that flow through an entire paragraph, the logic in the two conversions can be reduced to a decision tree; like a write-your-own adventure we  navigate a series of conditionals to determine exactly how we will get to where we need to go.

See what I did there?

This styling leant itself to casting the logic as long strings of cascading conditionals, which could be implemented as either a series of `if/else` chains or as nested ternary operations, producing long, complex but linear control flows in a single line.

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/perlboy1967/perl/ch-1.pl)

```perl
    $time =~ s#\A(\d+)(:\d+)\s*(AM|PM)?\Z#sprintf('%02d%s%s',$1%12+(!$3?($1%12?0:12):uc($3)eq'PM'?12:0),$2,$3?'':$1<12?' AM':' PM')#ie;
```

Unpacking Niels' submission reveals a chain of ternary logic feeding the values to a single `sprintf` statement. Depending on whether an am/pm indicator is found, the hours are adjusted, the minutes left unchanged, and the indicator set to either the correct cycle or the null string depending on the unaltered hours value.

```perl
    $time =~ s/\A(\d+)(:\d+)\s*(AM|PM)?\Z/
              /sprintf('%02d%s%s',
                $1 % 12 + (!$3          ## hours
                            ? ($1 % 12
                                ? 0
                                : 12)
                            : uc($3) eq 'PM'
                                ? 12
                                : 0),
                $2,                     ## minutes
                $3                      ## am/pm
                    ? ''
                    : $1 < 12
                        ? ' AM'
                        : ' PM')/ie;
```

Niel's submission is built on a single pattern match substitution, altering the input string to to the new format. The `/e` modifier is invoked, which makes the evaluation of the expression in the second part of the operation the result of the substitution.

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/arne-sommer/perl/ch-1.pl)

```perl
    $ARGV[0] =~ /^(\d\d)\:(\d\d)\s?(am|pm)?$/ && length($3)
       ? ($3 eq "pm"
           ? print $1 eq '12' ? '12' : $1 + 12, ":$2\n"
           : print $1 eq '12' ? '00' : $1, ":$2\n"
         )
       : ($1 >= 12 && $1 < 24
           ? print $1 eq '12' ? '12' : sprintf('%02d', $1 - 12), ":$2 pm\n"
           : print $1 eq '00' || $1 eq '24' ? '12' : $1, ":$2 am\n"
         );
```

Arne gives us a fine example of a tree of chained ternary operations all hanging on whether or not anything was captured in the third match.

[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/mohammad-anwar/perl/ch-1.pl)

```perl
    sub t {
        return
        sprintf("%02d:%02d%s",
        ($_[0] =~ /(\d+)?\:(\d+)\s?([ap]m)$/i)
        ?((uc($3) eq 'PM')?(($1==12)?($1,$2,''):($1+12,$2,'')):(($1==12)?($1-12,$2,''):($1,$2,'')))
        :(($_[0] =~ /(\d+)?\:(\d+)/) and (($1 eq '00')?('12',$2,'am'):(($1==12)?('12',$2,'pm'):(($1>12)?($1-12,$2,'pm'):($1,$2,'am')))))
        );
    }
```

Mohammad condenses his logic down into a single, long and complex statement. Let's have a look inside:

```perl
    sub tx {
        return
        sprintf("%02d:%02d%s",
            ($_[0] =~ /(\d+)?\:(\d+)\s?([ap]m)$/i)

            ? ( (uc($3) eq 'PM')
                ? ( ($1 == 12)
                    ? ($1, $2, '')
                    : ($1 + 12, $2, ''))
                : ( ($1 == 12)
                    ? ($1 - 12, $2, '')
                    : ($1, $2, '')
                )
            )

            : ( ($_[0] =~ /(\d+)?\:(\d+)/)
                and ( ($1 eq '00')
                            ? ('12', $2, 'am')
                            : ( ($1 == 12)
                                ? ('12', $2, 'pm')
                                : ( ($1 > 12)
                                    ? ($1 - 12, $2, 'pm')
                                    : ($1, $2, 'am')
                                  )
                              )
                    )
              )
        );
    }
```

As is now a little clearer, the routine returns the formatted string from a `sprintf` statement, with its arguments decided by two ternary decision trees hanging off of a pair of alternate pattern matches. Within the decision trees, special cases are addressed for when the hours equal 12, and otherwise the hours are adjusted in the usual fashion. The third string in `sprinf` is always generated to be placed; when producing 24-hour times the value is simple an empty string.


[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/jaldhar-h-vyas/perl/ch-1.pl)
```perl
    ($h,$m,$a)=shift=~/\A\s*((?:2[0-4])|(?:1\d)|(?:0*\d))\:([0-5]*\d)\s*([ap]m)?\s*/i;($h==0)?($h=12and$a=q{am}):($h==12)?($a=($a)?$a:q{pm}):($h>12)?($h-=12and$a=q{pm}):($a&&$a=~/pm/i)?($h+=12and$a=q{}):($a=q{});printf qq{%02d:%02d %s\n},$h,$m,$a;

```

Not very illuminating, is it? No problem, we can throw some whitespace in there and try and figure out what's going on:

```perl
    ($h,$m,$a)=shift=~/\A\s*((?:2[0-4])|(?:1\d)|(?:0*\d))\:([0-5]*\d)\s*([ap]m)?\s*/i;
    ($h==0) ? ($h=12and$a=q{am})
            : ($h==12) ? ($a=($a) ? $a
                                  : q{pm})
                       :($h>12) ? ($h-=12and$a=q{pm})
                                : ($a&&$a=~/pm/i) ? ($h+=12and$a=q{})
                                                  : ($a=q{});
    printf qq{%02d:%02d %s\n},$h,$m,$a;
```

Ok then! Now we're talking! We can now see a single regular expression captures out and assigns a trio of temporary variables for the hours, minutes and am/pm indicator. The decision tree then adjusts the hours and assigns the correct indicators as required.

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/james-smith/perl/ch-1.pl)
```perl
    sub ft{pop=~s/(.+)(:..)\s*(.m|)/sprintf'%02d%s%s',
    ($1%12||(12*!$3))+12*('pm'eq$3),$2,$3?'':$1%24<12?'am':'pm'/re}
```

Fortunately for us James provides us with a heavily annotated legend to this cryptic message. Ok, fortunately for me. For me. Let's let someone else take a stab at deciphering for a change:

```perl
    sub fun_time {
      return pop =~
        ## Note the nasty hack we pop rather than shift - that saves 2 bytes
        ## in our golfdom....
        s/
            ## Split into 3 parts, $1 - hours, $2 - minutes & $3 - am-pm
          (.+) (:..) \s* ( .m | )
            ## We assume all strings are valid - so we don't have to anchor
            ## at both ends or worry what the 12hr clock sufficies are
            ## am-pm and .m is shorter than [ap]m
            ##
            ## We assume that the time will always have a : followed
            ## 2 digits...
            ##
            ## Note if we right (.m)? the 3rd capture variable $3 is
            ## sometimes undefined - better is to use (.m|) which
            ## matches the same way but $3 is now an empty string not
            ## undefined when we have a 24 hour clock time
        /
          sprintf '%02d%s%s',
            ( $1 % 12 || ( 12 * ! $3 ) ) + 12 * ( 'pm' eq $3 ),
              ## Get hour modulo 12..
              ## From 24hr to 12hr clock we need to convert 00:?? to 12:??
              ## From 12hr to 24hr clock it is pm we then need to add 12...
              ## Note we use the "yoda condition" for the equals
              ##   'pm'eq$3
              ## as this is a byte shorter than the more usual way of
              ## writing inequalitys
              ##   $3 eq'pm'
              ## as we don't need a space between the $3 & the eq...
            $2,
              ## The minutes is the easy bit just copy..
            $3 ? '' : $1 < 12 || $1 == 24 ? 'am' : 'pm'
              ## If we are converting from 12hr clock the third string is
              ## empty - if not and the time is <12 we return am otherwise pm
        /rex;
    }
```

We'll see that `pop` again later. Just wait...

Attaching the alternate `undef` option in the third match, `( .m | )`, is something I've never seen before, with the stated intent of returning an empty string rather than undef. A little checking seems to indicate that the `$3` capture is always *defined*, whether or not anything is matched; it is indeed already an empty string. At least with 5.32.0, that is. This may have changed over the years, but I don't recall getting a slew of warnings about it either. In the end there does not seem to be any harm to this, as it does work as advertised. It's a funny edge-case I'd like to get to the bottom of.


[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/abigail/perl/ch-1.pl)

```perl
    say s {^\s* ([0-9]+) : ([0-9]+) \s* ([pa]?)m? \s*\n}
          {sprintf "%02d:%02d%s",
              $3 ? ($1 % 12) + (lc ($3) eq "a" ? 0 : 12)
                 : ($1 % 12) || 12,
              $2,
              $3 ? ""
                 : $1 >= 12 ? "pm" : "am"}xeir
```

Abigail packs his conversion into a single non-destructive substitution. The `/r` modifier does not change the string, but rather returns the string that would have be constructed if the substitution had been made. Thus the entire string, not just the match, is returned and printed. For the unfamiliar, this modifier is super handy to know about, allowing substitutions to performed on strings you can not, or should not, actually alter. As we've seen elsewhere, the logical OR on the modulo 12 hours value  efficiently sets the result to 12 if the division is even and produces 0.


[**Yet Ebreo**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/yet-ebreo/perl/ch-1.pl)

```perl
    sub f { pop=~/:.. */&&sprintf"%02d%s",$`%12+12*($'?'pm'eq$':$`%12<1),$&.($`<12?'am':'pm')x!$' }
```

Now I don't know Yet personally, but I do think it's safe to say he knows his way around a Perl golf course. He my be on the PGA circuit, I don't know. Today he delivers unto us an impressively sized portion of what can only be perceived at first glace as world-class gobbledygook. However, teased apart it begins to reveal its secrets:

```perl
    sub f { pop =~ /:.. */ && sprintf "%02d%s",
                                $` % 12 + 12 * ($' ? 'pm' eq $'
                                                   : $` % 12 < 1),
                                $& . ($` < 12 ? 'am'
                                              : 'pm') x !$' }
```

The fact that he starts with `pop`, shaving 2 characters, warns us of what is to come, but isn't enough to really prime us for the complete departure from what we've seen earlier. What, you may ask, is going on with that match? Indeed the match assignment operator insists that yes indeed it is a match, but it looks nothing at all like what we've seen previously. Parsed apart, it matches a colon, two characters of any sort, and any amount of space. This in turn is the minute separator, the minutes and any trailing whitespace. Without bothering to explicitly capture anything, he uses the three special       variables

    $` $& and $'

to reference "the string before the match", "the string matched" and "the sting after the match". The first argument for the `sprintf` applies the modulo to the hours, then, if the trailing string has anything (am or pm) then adds 12 if it's "pm", but if there's no trailing string (24 hour time) we add 12 if the hours are 0. That's both conversions packed into one statement. In the "minutes" string, we add the correct cycle indicator repeated 0 or 1 time depending on whether or not the trailing string *wasn't* there in the first place. That's a whole lot of tricks in one place.

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/jo-37/perl/ch-1.pl)

Jorg brings us two solutions today, a "fun" one parsing out and reassembling the time data, and a "boring" one using `DateTime::Format::DateParse`

The boring one is pretty uneventful...

```perl
    sub boring_time ($t) {
        DateTime::Format::DateParse
            ->parse_datetime($t)
            ->strftime($t =~ /[ap]m/ ? '%H:%M' : '%I:%M %P');
    }
```

...but the "fun" one is full of fun surprises.

```perl
    sub fun_time ($t) {
        $t =~ s{ ^ (\d{1,2}) : (\d{2}) (?:\ ?([ap])m)? $ }
            { sprintf '%02d:%02d%4$*3$.*s',
                $1 + (!-$1 + ($3 ~~ 'p') - ($1 > 11 + !$3)) * 12, $2,
                3 * !$3, qw(am pm)[$1 > 11]}xer;
    }
```

From Jorg's notes:

* Split time into hours, minutes and an optional period.
* the hour is adjusted in units of 12h:
  1. added, if HH == 00             (00:00 -> 12:00 am)
  2. added, if pm                   (06:00 pm -> 18:00)
  3. subtracted, if HH > 12         (18:00 -> 06:00 pm)
  4. subtracted, if HH == 12, am/pm (12:00 am -> 00:00)

  **Notes:**
  - Cases 2) and 4) cancel each other for 12 pm.
  - Cases 3) and 4) can be merged into a single term.
  - '00' is true, whereas -'00' is not.
  - smartmatch silently compares undef to a string.
  - The second argument to sprintf covers all four cases.
* the minutes are passed unmodified
* the period is appended if none was given.  Changing the factor in
  sprintf's fourth argument to 2 produces the alternative output
  format II:MMPP.

We'll only need to unpack this one a little bit to peek inside:

```perl
sub fun_timex ($t) {
    $t =~ s{ ^ (\d{1,2}) : (\d{2}) (?:\ ?([ap])m)? $ }
           { sprintf '%02d:%02d%4$*3$.*s',
                $1 + (!-$1 + ($3 ~~ 'p') - ($1 > 11 + !$3)) * 12,  ## hrs
                $2,                                                ## min
                3 * !$3,                                           ## how wide is the 3rd insert
                qw(am pm)[$1 > 11]                                 ## am/pm
            }xer;
}
```
As per his notes, the hours are a densely packed logical thicket. In the outermost shell, we take the parsed hours and add a quantity, either 0 or 1, times 12. The inner expression is composed of a number of conditionals that each resolve to 0 for false and 1 for true. For example,  `!-$1` as per the third note numifies the captured result and if it's 0 resolves to 1. Then we have a smartmatch conditional<sup>1</sup>, followed by whether or not the hours are more than 11, and whether we *didn't* capture a cycle indicator. With all the double negatives it's not that much easier to follow even laid out like this, but this logic encapsulates the hours adjustments he notes earlier.

The am/pm indicator is always computed, but clever manipulation of the format string in the `sprintf` makes the space allotted show the string to either be 3 spaces on none, effectively eliminating it. I find that piece of chicanery flabbergasting. The nerve!

All in all a truly remarkable effort.

---

(sup>1</sup> I'm again quite curious seeing Jorg's note number 4, "smartmatch silently compares undef to a string", presumably referring to `($3 ~~ 'p')`. This in turn suggests he's taking an unmatched third capture (no am/pm) to be `undef`. James Smith has the same thinking, and it's a reasonable assumption, but my tests just now seem to show `$3` to always be a defined, empty string if there's nothing captured. Not to be difficult, but again I'd like to get to the bottom of this.

---


## ALMOST A ONE-LINER...
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/dave-jacoby/perl/ch-1.pl) and
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/polettix/perl/ch-1.pl)

...Or almost a single line, depending on which way you look. I mean who cares *really* if you break off the initial match parsing and assignment into it's own statement? I certainly don't. I'm very forgiving that way.

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/polettix/perl/ch-1.pl)

I'm really digging the way Flavio has laid out his ternary decision tree. It's, oh I don't know, *sexy* might be a good word for it.

```perl
sub fun_time ($t) {
   my ($h, $m, $ampm) = $t =~ m{\A(\d\d):(\d\d)(?:\s*(am|pm))?\z}mxs;
   ($h, $ampm) =
      ($ampm//='') eq 'pm' ? ($h < 12 ? $h + 12 : 12, ''  )
      : $ampm eq 'am'      ? ($h < 12 ? $h      : 0 , ''  )
      : $h == 0            ? (12                    , ' am')
      : $h == 12           ? (12                    , ' pm')
      : $h > 12            ? ($h - 12               , ' pm')
      :                      ($h                    , ' am');
   return sprintf "%02d:%02d%s", $h % 24, $m, $ampm;
}
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/dave-jacoby/perl/ch-1.pl)

Dave frames out his decision pathways in the blocks of an `if/else` statement, following on from there in a familiar manner. Although the result is just a few statements, you can see we're drifting into airier territory now.

```perl
    sub switch_time ( $time ) {
        my $out = '';

        # 12-hour time
        if ( $time =~ /m$/mix ) {
            my ( $hr, $min, $ampm ) = $time =~ /(\d+):(\d+)\s*(am|pm|)/mix;
            $out = join ':',
                (
                $ampm eq 'am'
                ? (
                    $hr == 0 ? '00': $hr
                    )
                : (
                    $hr == '12'
                    ? sprintf '%02d',
                    $min
                    : sprintf '%02d',
                    $hr + 12
                )
                ),
                ( sprintf '%02d', $min );
        }

        # 24-hour time
        else {
            my ( $hr, $min ) = $time =~ /(\d+):(\d+)/mix;
            $out = join '',
                (
                $hr == 0 || $hr == 24
                ? 12
                : ( $hr > 12 ? $hr % 12 : $hr )
                ),
                (':'),
                ( sprintf '%02d', $min ),
                ( $hr < 12 ? 'am' : 'pm' );
        }
        return $out;
    }
```



## AIRIER versions with ROOM TO BREATHE
[**Alexander Karelas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/alexander-karelas/perl/ch-1.pl),
[**Ali Moradi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/deadmarshal/perl/ch-1.pl),
[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/bob-lied/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/cheok-yin-fung/perl/ch-1.pl),
[**Gustavo Chaves**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/gustavo-chaves/perl/ch-1.pl),
[**Kai Burgdorf**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/kai-burgdorf/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/pete-houston/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/sgreen/perl/ch-1.pl),
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/steven-wilson/perl/ch-1.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/stuart-little/perl/ch-1.pl),
[**Vinod Kumar K**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/vinod-k/perl/ch-1.pl),
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/wanderdoc/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/wlmb/perl/ch-1.pl)

You want people to say your code looks like line noise? Take up APL, or write Perl golf. On the other hand you could be a hero and write cool, calm, clean and collected, well commented code for the next generation to coo over. Don't be like Goofus, be like Gallant.

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/sgreen/perl/ch-1.pl)

Ushered about with a few control-flow conditionals, these versions of the conversions logically step forward, one action at a time. As all things should. Simon has kindly documented his submission, making further comment somewhat superfluous.

```perl
    sub main {
        my $string = lc shift;

        # Split the string with hour, minute and optionally am/pm
        my ( $hour, $minute, $apm ) = ( $string =~ /^(\d+):(\d+)\s*([ap]m)?$/ );
        die "Invalid string\n" unless length($hour) and length($minute);

        # Check the hour value is valid for this format
        if ( $apm and ( $hour < 1 or $hour > 12 ) ) {
            die "Hour must be between 1 and 12\n";
        }
        elsif ( not $apm and $hour > 23 ) {
            die "Hour must be between 0 and 23\n";
        }

        if ($apm) {
            # We need to convert from 12 hour to 24 hour
            $hour = $hour % 12;
            $hour += 12 if $apm eq 'pm';
            say sprintf '%02d:%02d', $hour, $minute;
        }
        else {
            # We convert from 24 hour to 12 hour
            $apm  = $hour >= 12 ? 'pm' : 'am';
            $hour = $hour % 12;
            $hour += 12 if $hour == 0;
            say sprintf '%02d:%02d %s', $hour, $minute, $apm;
        }
    }
```

[**Alexander Karelas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/alexander-karelas/perl/ch-1.pl)

The `if/elsif/else` trio really came into the fore with this collection of submissions. After clearly identifying the conditions, the appropriate transformations would be enacted, leading to clear, linear, code examples.

```perl
    sub xform {
        my ($input) = @_;

        $input =~ /^(\d{2})\:(\d{2})\s*(am|pm)?\z/ or die "Usage: $0 05:15 pm or 05:15pm or 17:15";

        my ($h, $m, $ap) = ($1, $2, $3);

        if (defined $ap) {
            if ($h == 12) {
                $h = 0 if $ap eq 'am';
            } else {
                $h += 12 if $ap eq 'pm';
            }
            $ap = '';
        } else {
            if ($h == 12) {
                $ap = 'pm';
            } elsif ($h > 12) {
                $h -= 12;
                $ap = 'pm';
            } elsif ($h == 0) {
                $h = 12;
                $ap = 'am';
            } else {
                $ap = 'am';
            }
        }

        return sprintf("%02d\:%02d%s", $h, $m, $ap);
    }
```

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/wanderdoc/perl/ch-1.pl)

Ahh, to breathe again! There's even a few extra blank lines thrown in for no obvious reason! Normally I'd snip them out to tighten things up a bit but not today, friends, not today.

```perl
    sub fun_time
    {
         my $time_string = $_[0];
         my $time_re = qr/([0-9]{2}):([0-9]{2}) ?([a|p]m)?/;
         my ($hour, $min, $format) = $time_string =~ /$time_re/;

         $format //='';


         if ( length($format) ) # 'am/pm'
         {
              if ( $format eq 'am' )
              {
                   return $hour == 12 ? "00:${min}" : "${hour}:${min}";
              }
              else # pm
              {
                   $hour = ($hour < 12) ? $hour += 12 : $hour;


                   return "${hour}:${min}";
              }
         }

         else # ISO
         {
              if ( $hour eq '00' ) { return "12:${min} am"; }
              elsif ( $hour == 12 ) {return "${hour}:${min} pm";}

              elsif ($hour > 12 )
              {
                   $hour = sprintf("%02d", $hour - 12);
                   return "${hour}:${min} pm";
              }
              else { return "${hour}:${min} am"; }
         }
    }
```

[**Gustavo Chaves**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/gustavo-chaves/perl/ch-1.pl)

Gustavo, not overly obsessed with byte-counts, *names* his capture groups, making them that much easier to follow through the conversion. He also takes the unusual step of writing out his final string piecemeal, as first the hours, then the minutes and period cycle are determined.

```perl
    if ($input =~ /^(?<hour>\d{2}):(?<minute>\d{2})$/) {
        if ($+{hour} eq '00') {
            print '12';
        } elsif ($+{hour} le '12') {
            print $+{hour};
        } else {
            printf '%02d', $+{hour} - 12;
        }
        print ":$+{minute}";
        if ($+{hour} lt '12') {
            print 'am';
        } else {
            print 'pm';
        }
    } elsif ($input =~ /^(?<hour>\d{2}):(?<minute>\d{2}) ?(?<period>am|pm)$/) {
        if ($+{period} eq 'am') {
            if ($+{hour} eq '12') {
                print '00';
            } else {
                print $+{hour};
            }
        } else {
            if ($+{hour} eq '12') {
                print $+{hour};
            } else {
                printf '%02d', $+{hour} + 12;
            }
        }
        print ":$+{minute}";
    } else {
        die "Invalid time '$input'\n";
    }
```

[**Kai Burgdorf**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/kai-burgdorf/perl/ch-1.pl)

Kai breaks from the pack and eschews the big regular expression pattern we've seen so often elsewhere in favor of a light, lean `split` on the colon delimiter. Once they have done this, then the minutes portion is matched to find any cycle indicators, which will tell us whether the input is in 12- or 24-hour formatting.

```perl
    my ( $hours, $minutes ) = split( ":", $input, 2 );

    if ( $minutes =~ /.*am*|.*pm*/ ) {
        my $is_am = ( $minutes =~ /.*am/ ) ? 1 : 0;
        $minutes =~ s/am|pm//;    #optionales space in regex
        $result = ($is_am) ? "$hours:$minutes\n" : "" . ( $hours + 12 ) . ":$minutes\n";
    }
    else {
        my $is_early = ( $hours < 12 || $hours == 24 ) ? 1 : 0;
        if ( $hours == 24 || $hours == 0 ) {
            $hours = 12;
        }
        elsif ( !$is_early && $hours > 12 ) {
            $hours -= 12;
        }
        $result = "$hours:$minutes";
        $result .= ($is_early) ? "am\n" : "pm\n";
    }
```



[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/steven-wilson/perl/ch-1.pl)

In a final paean to clarity, Steven here illustrates the power of a simple chain if `if` and `elsif` clauses directing traffic.

```perl
    sub convert_t_fmt {
        my $input = shift;
        my $output;
        $input =~ /(\d{1,2}):(\d{1,2})/;
        my $hour = $1;
        my $mins = $2;
        if ( $input =~ /pm/ ) {
            if ( $hour != 12 ) {
                $hour += 12;
            }
        }
        elsif ( $hour == 12 && ( $input =~ /am/ ) ) {
            $hour = 0;
        }
        elsif ( $hour > 12 ) {
            $hour -= 12;
            $mins .= " pm";
        }
        elsif ( $hour == 12 ) {
            $mins .= " pm";
        }
        elsif ( $hour == 0 ) {
            $hour = 12;
            $mins .= " am";
        }
        elsif ( $hour < 12 && !( $input =~ /am/ ) ) {
            $mins .= " am";
        }
        $output = sprintf "%02s:%02s", $hour, $mins;
    }
```


## hire a MERCENARY to do your DIRTY WORK
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/jo-37/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/lubos-kolouch/perl/ch-1.pl), and
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/paulo-custodio/perl/ch-1.pl)

Then again, you could always hire a professional. There's no shame in delegating out a dirty job to outside help. Just make sure you have all your write permissions in order before you pull in the big guns. And maybe a lawyer on speed-dial.


[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/lubos-kolouch/perl/ch-1.pl)

Lubos chose to import `DateTime::Format::DateParse` to do his translation for him. The
module supplies a `parse_datetime` routine that takes a written time and converts it into an internal data structure, and a version of the C standard library function `strftime` to format it back into a string.

```perl
    sub convert_time {
        my $what = shift;

        my $pattern = $what =~ /m/ ? '%H:%M' : '%I:%M %P';

        return DateTime::Format::DateParse
            -> parse_datetime($what)
            -> strftime($pattern);

    }
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/jo-37/perl/ch-1.pl)
also uses `DateTime::Format::DateParse` in his `boring()` (in contrast to `fun()`) routine we saw earlier.

[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/paulo-custodio/perl/ch-1.pl)

Paulo, alternately, brings in `Time::Piece`, which has its own versions of `strptime` and `strftime` to parse and then format the times, respectively.

```perl
    if ($time =~ /AM|PM/i) {
        say Time::Piece->strptime($time, "%I:%M%P")->strftime("%H:%M");
    }
    else {
        say Time::Piece->strptime($time, "%H:%M")->strftime("%I:%M%P");
    }
```



---

# TASK 2 {#PWC100TASK2}

# Triangle Sum
*Submitted by: Mohammad S Anwar*

You are given triangle array.

Write a script to find the minimum path sum from top to bottom.

When you are on index i on the current row then you may move to either index i or index i + 1 on the next row.

**Example 1:**
```
    Input: Triangle = [ [1], [2,4], [6,4,9], [5,1,7,2] ]
    Output: 8
```
Explanation: The given triangle
```
            1
           2 4
          6 4 9
         5 1 7 2
```
The minimum path sum from top to bottom:  1 + 2 + 4 + 1 = 8
```
            [1]
           [2] 4
          6 [4] 9
         5 [1] 7 2
```
**Example 2:**
```
    Input: Triangle = [ [3], [3,1], [5,2,3], [4,3,1,3] ]
    Output: 7
```
Explanation: The given triangle
```
            3
           3 1
          5 2 3
         4 3 1 3
```
The minimum path sum from top to bottom: 3 + 1 + 2 + 1 = 7
```
            [3]
           3 [1]
          5 [2] 3
         4 3 [1] 3
```

## about the solutions

There were 29 working submissions for the second task this past week. The submissions generally fell into two groups, those that start at the upper point of the triangle and work down, and those that start on the base level and work up. Either method could be implemented using either iteration or recursion, with the categorical oddity that using a recursive method to work the bottom-up algorithm actually starts at the top, because the recursion digs to the bottom and then collapses upward, weeding out more expensive paths as it goes, leaving us with the minimal result when we return to the apex.

But we'll get to that.

There were also unfortunately quite a few members led astray, and we'll have a look at that too. No names, we can't have that. Hush hush, mum's the word. But I think it will be useful to look at these methods too, in a generalized way.

## we can DESCEND from the TOP DOWN...

When facing a pyramid the eye is naturally drawn to the top. The shape commands it. Although the pyramids at Giza remain magnificent today, originally they were clad in white limestone, the apex capped with gold reflecting the sun. The sight must have been astounding.

So the top of our odd triangular array presents itself as a natural starting point. From there a series of binary choices left and right as we descend determine all possible pathways through the matrix. Counting from 0, there are 2<sup>*n*</sup> such pathways, with *n* being the number of levels in the triangle.

### done RECURSIVELY...
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/arne-sommer/perl/ch-2.pl),
[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/bob-lied/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/dave-jacoby/perl/ch-2.pl),
[**Duane Powell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/duane-powell/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/duncan-c-white/perl/ch-2.pl),
[**Gustavo Chaves**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/gustavo-chaves/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/laurent-rosenfeld/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/perlboy1967/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/paulo-custodio/perl/ch-2.pl), and
[**Yet Ebreo**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/yet-ebreo/perl/ch-2.pl)


The act of bifurcating a path and summing the values chosen can be isolated out and placed into a small recursive routine. In this method, generally, partial sums are gathered along the way as the paths are traced, and once the edge case is reached the minimum summation of all the paths is determined.

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/dave-jacoby/perl/ch-2.pl)

Dave introduces us to these ideas, first establishing a `triangle_sum` wrapper for his recursive core, `triangle`. In `triangle` we have some default input that will start us at the apex unless otherwise told, and from there we immediately descend down into the child nodes, appending the current index to a copy the list of visited nodes in a particular path. A little clever leveraging of the slurpiness of the `@path` variable makes explicitly recopying the array unnecessary, and listing `$y` after it in the recursion signatures takes care of the appending.

This version collects indices rather than values as the paths are walked. Once he's reached the lowest level, a `map` function is used to convert the indices to values which are then summed. A `sort` back in `triangle_sum` reveals the smallest sum for the solution.

The sum and list of indices for the path are output with the original triangle for reference.

```perl
    sub triangle_sum ( $input ) {
        my ($short) =
            sort { $a->{sum} <=> $b->{sum} } triangle($input);
        say qq{ sum:  $short->{sum} };
        say q{ path: } . join ' ', $short->{path}->@*;
        for my $i ( $input->@* ) {
            say join ' ', '  ', $i->@*;
        }
        say '';
    }

    sub triangle ( $input, $x = 0, $y = 0, @path ) {
        my @output;

        # if not a leaf, go left and right
        if ( defined $input->[$x][$y] ) {
            push @output, triangle( $input, $x + 1, $y,     @path, $y );
            push @output, triangle( $input, $x + 1, $y + 1, @path, $y );
        }

        # if a leaf, find the sum, find the path, and return
        else {
            my @ind = map     { $path[$_] } 0 .. $x - 1;
            my $sum = sum map { $input->[$_][ $path[$_] ] } 0 .. $x - 1;
            push @output, { sum => $sum, path => \@ind, };
        }
        return @output;
    }
```

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/arne-sommer/perl/ch-2.pl)

To simplify things, if all one is doing is gathering the requested minimum sum value, the recursive method can end up extremely compact. Here Arne demonstrates just how compact it can be. All the essential bits are there, just... really short.

```perl
    sub traverse($row, $col, $sum)
    {
      $sum += $tree[$row][$col];

      if ($tree[$row+1])
      {
        traverse($row+1, $col,   $sum);
        traverse($row+1, $col+1, $sum);
      }
      else
      {
        push(@solutions, $sum);
      }
    }
```


[**Yet Ebreo**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/yet-ebreo/perl/ch-2.pl)

Never much for words, or even characters for that matter, Yet delivers another short, succinct example:

```perl
    sub f {
        my ($row, $col, $sum, $max) = @_;

        if ($row>$max) {
            ($sum < $min) && ($min = $sum);
        } else {
            $sum += $triangle[$row][$col];

            f($row+1, $col,   $sum, $max);
            f($row+1, $col+1, $sum, $max);
        }
    }
```


[**Duane Powell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/duane-powell/perl/ch-2.pl)

Duane creates a handy `triangle_array` object to encapsulate his array data and the tools for working on it. Having a look at his `min_path_find` routine, we find a well commented example walking us through the various parts.

As noted a copy is made from the partial path handed in to the routine; this has the current node value added and the sum updated. The updated package is in turn handed off to the child nodes left and right. Once the lowest level is reached the sums can then be compared to find the minimal value. As a `$this_path` array for each path is maintained through the progress it can then be used to recreate the path for verbose output.

```perl
    sub min_path_find {
        my ($self, $index, $path, $total) = @_;

        # Total along the currect path
        # Note: we're making a copy of $path because perl is pass-by-ref.
        # Each instance of min_path_find() needs its own path, $this_path.
        my $this_path = [ @{$path} ];
        push @{$this_path}, $index;
        my ($row,$col) = @{$index};
        $total += $self->{array}[$row][$col];

        # Recurse left and right down the triangle
        if ( $row < $self->{size} ) {
            $self->min_path_find( [$row+1,$col  ], $this_path, $total );
            $self->min_path_find( [$row+1,$col+1], $this_path, $total );
        }

        # Terminal node reached, is this the best path so far?
        else {
            if ($total < $self->{total}) {
                $self->{total} = $total;
                $self->{path}  = $this_path;
            }
        }
    }
```

[**Gustavo Chaves**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/gustavo-chaves/perl/ch-2.pl)

Gustavo brings to us today a modern Perl addition, the token `__SUB__`, which since 5.16 returns a reference to the current sub. So, instead of calling the name of the routine to recurse, he can call
```perl
            __SUB__->($row+1, $col+1, $acc);
```
instead.

Admittedly this isn't of obvious advantage when explained this way, but consider now that the calling routine is a private, *anonymous* subroutine within the `triangle_sum` wrapper. Now do you see the potential? You can call the code without knowing the name of the routine you're in, or whether or not your routine even *has* a name. This opens up all kinds of options, such as this example, with an anonymous subroutine that can recurse within itself without the need for an external variable to hold its own coderef. No circular references required.

```perl
sub triangle_sum {
    my ($triangle) = @_;

    my $min = 2 ** 30;

    my $find_minimum_sum = sub {
        my ($row, $col, $acc) = @_;

        $acc += $triangle->[$row][$col];

        if ($row == $#$triangle) {
            $min = $acc if $acc < $min;
        } elsif ($min > $acc) {
            __SUB__->($row+1, $col,   $acc);
            __SUB__->($row+1, $col+1, $acc);
        }
        return;
    };

    $find_minimum_sum->(0, 0, 0);

    return $min;
}
```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/perlboy1967/perl/ch-2.pl)

Known for putting the *Report* in *"Pathologically Eclectic Rubbish Lister"*, Niels once again does not disappoint. First he draws the triangle, which is a nice aide to visualizing. Then he not only finds the minimum path value descending the triangle, but also finds *every* valid path that leads to this minimum result. For each solution he then demonstrates an equation summing the values found, and finally draws the triangle in question, with the pathway illuminated in the bracketed notation from the examples. Well done!

Note the use of subroutine prototypes to easily pass array and hash references to the recursive portion of his code.

```perl
    sub getTriangleSumPaths(\@$$\@\%) {
      my ($arT, $l, $i, $arP, $hrSP) = @_;

      push(@$arP, $i);
      foreach my $arL ($arT->[$l]) {
        if (defined $arT->[$l+1]) {
          getTriangleSumPaths(@$arT, $l + 1, $i, @$arP, %$hrSP);
          getTriangleSumPaths(@$arT, $l + 1, $i + 1, @$arP, %$hrSP);
        } else {
          my @i = (0 ..  scalar(@$arP) - 1);
          my $sum = sum(map { $arT->[$_][$arP->[$_]] } @i);
          push(@{$hrSP->{$sum}}, [@$arP]);
        }
      }
      pop(@$arP);
    }

```

Now his output, in all its glory:

```
    Input: Triangle =

            1
           4 2
          2 4 9
         5 5 7 5
        9 2 2 4 8

    Output: 14

    Number of solutions: 5

    Solution 1:
    ================
    The minimum path sum from top to bottom: 1 + 4 + 2 + 5 + 2 = 14

    Explanation:

            [1]
           [4] 2
          [2] 4 9
         [5] 5 7 5
        9 [2] 2 4 8

    Solution 2:
    ================
    The minimum path sum from top to bottom: 1 + 4 + 2 + 5 + 2 = 14

    Explanation:

            [1]
           [4] 2
          [2] 4 9
         5 [5] 7 5
        9 [2] 2 4 8

    Solution 3:
    ================
                            ... and so it goes

```

### ...and done ITERATIVELY
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/colin-crain/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/roger-bell-west/perl/ch-2.pl), and
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/sgreen/perl/ch-2.pl)

Because of the fixed and well-defined relationship between parent and child nodes in the triangle, we can just keep track of the partial pathways and extend them iteratively. As we will always know the row, the path lists need only contain column indices for the last point visited, and a running tally of that path's partial sum. By counting levels we can know when we are at the bottom row and at that point find the minimal calculation. We might also wish to keep a record of the path values walked in this data structure, should we wish to recreate the path for output.


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/roger-bell-west/perl/ch-2.pl)

Roger builds a series of nested loops to walk the various paths in a depth-first pattern, pushing the partial solutions as an array onto a buffer and then popping them out for further processing. When the final depth is attained, the sum of that solution is added to an array. The asked-for result is the minimum value of this array.

```perl
sub ts {
    my $in = shift;
    my @b;
    my $n = 0;
    my $i = 0;
    my $s = $in->[0][0];
    my @r;
    while ( 1 ) {
        if ( @b ) {
            my $t = pop @b;
            ( $n, $i, $s )=@{ $t };
        }
        if ( $n < $#{ $in } ) {
            $n++;
            foreach my $ix ( $i, $i + 1 ) {
                push @b, [$n, $ix, $s + $in->[$n][$ix]];
            }
        } else {
            push @r, $s;
        }
        unless ( @b ) {
            last;
        }
    }
    return min( @r );
}
```

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/colin-crain/perl/ch-2.pl)

For my own solution, I came to the conclusion I'd written a lot of recursive solutions lately, so took it on myself to write this one iteratively. A single first-in, first-out buffer is used and we keep track of how many elements to shift off. Each element is a data structure containing a running sum for this partial solution, a list of values visited for fancy output, and the index of the last node visited. At each pass through the loop, one element is shifted off and two elements are generated — for each of the child nodes — and these are appended to the end of the buffer. When all rows are processed, the remaining, completed paths are sorted by the sums, and the element with the smallest sum returned.

```perl
    for my $depth ( 0..$#$arr-1 ) {
        for my $pos ( 0..2**$depth-1 ) {
            my $path = shift @data;
            for (0,1) {
                my ($sum, $trace, $last) = @$path;
                my $value = $arr->[$depth+1][$last+$_];
                my $newpath = [  $sum + $value,
                                 [$trace->@*, $value],
                                 $last + $_  ];
                push @data, $newpath;
            }
        }
    }

    my $minpath = (sort {$a->[0] <=> $b->[0]} @data)[0];
```


[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/sgreen/perl/ch-2.pl)

There are, as we've determined, 2<sup>*n*</sup> paths to walk, with *n* the number of levels of the triangle counting from 0. Or put another way, the number of rows minus one.

Starting out with a list of numbers for each of these possible combinations, Simon utilizes the binary bits in the number as representing the node intersections as we look down the triangle from the apex. Each 0 bit indicates a turn to the left, a 1, to the right. In this way all of the paths can said to be already encoded when read from left to right.

For each number, the levels of the triangle are looped through and the bits examined. If you unwind the logic involved in keeping track of the correct array position at each level, you can see the elegance behind the method. It's pretty sweet. I like it.

As each number is evaluated the total sum is compared to a running minimum, which is updated as required. When all the numbers are exhausted the minimum has been found.

```perl
    # The possible solutions are 2 ^ (@rows -1)
    foreach my $i ( 0 .. 2**$#rows - 1 ) {

        # Now we work through each row for this path. If the bit is 1, we
        #  move to the right. If it is 0, we move to the left.
        my @path = ( $rows[0][0] );
        my $x    = 0;
        foreach my $row ( 1 .. $#rows ) {
            $x++ if $i & ( 2**( $row - 1 ) );
            push @path, $rows[$row][$x];
        }

        # If this sum is less than the previous minimum (or the first),
        #  then we will update our figures.
        my $sum = sum(@path);
        if ( not defined $min_sum or $min_sum > $sum ) {
            $min_sum  = $sum;
            @min_path = @path;
        }
    }

    say join( ' + ', @min_path ), " = $min_sum";
```


## or ALTERNATELY we ASCEND from the BOTTOM UP

### done RECURSIVELY...
[**Alexander Karelas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/alexander-karelas/perl/ch-2.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/alexander-pankoff/perl/ch-2.pl),
[**Kai Burgdorf**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/kai-burgdorf/perl/ch-2.pl), and
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/pete-houston/perl/ch-2.pl)

By modifying the recursive ideas we explored earlier to *return* the minimal sum rather than gather values as it proceeds, we can reverse the order of computation. Instead of gathering path options as we descend, we can arrange the minimal path from what we already know to be the best way from that point forward, working backwards from the end.

First the best ways to get from the second-to-last level to the end leaves are decided, and then from those partial sums the best ways to proceed from the level before that are decided, and progress continues. The range of possible minimal paths is reduced at each level, until after the entire recursion has returned we are left with a single, minimal, sum.

[**Alexander Karelas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/alexander-karelas/perl/ch-2.pl)

Karelas demonstrates this technique, with the nested recursions *downward* collapsing *upwards* from the bottom, choosing and adding the smallest child recursion as it goes. This pattern, as the other recursions, can end up quite compact if the only thing computed is the minimal sum.

```perl
    sub minimum_path_sum {
        my ($tree, $x, $y) = @_;
        $x //= 0;
        $y //= 0;

        if ($y == $#$tree) {
            return $tree->[$y][$x];
        } else {
            my $sum1 = minimum_path_sum($tree, $x, $y + 1);
            my $sum2 = minimum_path_sum($tree, $x + 1, $y + 1);
            return $tree->[$y][$x] + min($sum1, $sum2);
        }
    }
```

[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/alexander-pankoff/perl/ch-2.pl)

Pankoff provides us with another quite compact version. Superficially these solutions look quite similar to the recursions we saw before, but the algorithm as it works out is very different.

```perl
    sub triangle_sum ( $triangle, $pos = 0 ) {
        my ( $cur, @rest ) = @$triangle;
        return 0 if !$cur;

        return $cur->[$pos] +
          min( triangle_sum( \@rest, $pos ), triangle_sum( \@rest, $pos + 1 ), );
    }
```

[**Kai Burgdorf**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/kai-burgdorf/perl/ch-2.pl)

As he recurses, Kai employs a few interesting techniques, such as storing his partial solutions in hashes, encapsulating the data in what amount to mini-objects. An accumulator key gathers partial sums within these hash constructions, which, on reaching the lowest level, begin to be assessed as possible minimum paths.

```perl
    sub get_right_child {
        my ( $i, $j ) = @_;
        if ( defined $triangle[ $i + 1 ][ $j + 1 ] ) {
            return { is_child => 1, row => $i + 1, col => $j + 1, value => $triangle[ $i + 1 ][ $j + 1 ] };
        }
        return { is_child => 0 };
    }

    sub get_sum_for_path {
        my ( $i, $j, $accu ) = @_;

        if ( !$accu ) { $accu = 0; }
        if ( !$i )    { $i    = 0; }
        if ( !$j )    { $j    = 0; }

        $accu += $triangle[$i][$j];

        my $left_child  = get_left_child( $i, $j );
        my $right_child = get_right_child( $i, $j );

        if ( $left_child->{is_child} == 0 && $right_child->{is_child} == 0 ) {    #found a leaf
            if ( !$lowest_sum || $accu < $lowest_sum ) {
                $lowest_sum = $accu;
                return;
            }
        }
        else {
            get_sum_for_path( $left_child->{row},  $left_child->{col},  $accu );
            get_sum_for_path( $right_child->{row}, $right_child->{col}, $accu );
        }
    }
```

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/pete-houston/perl/ch-2.pl)

Pete expands on the ideas of using hashes or arrays to hold collections of information about a given pathway, building us a proper tree structure using a custom `Node` objects. These objects themselves are built on the `Class::Tiny` framework, which supplies several useful abstractions such as `lchild` and `rchild` to speed things along. As is often the case with this design pattern, once you get through the overhead the actual processing is quite compact.

His `minsum` method recursively adds value of the smaller of the two child nodes, digging deep and calculating the last level first, computing upwards.

```perl
    sub BUILDARGS {
        my ($class, $init, $r, $c, $lastchild) = @_;
        if (is_arrayref ($init)) {
            # Buld tree from AoA
            $r //= 0;
            $c //= 0;
            my $self = Node->new ($init->[$r][$c]);

            # Add children if we are not the bottom row
            if ($r < $#$init) {
                $self->lchild (
                    $lastchild //
                    Node->new ($init, $r + 1, $c));
                $self->rchild (Node->new ($init, $r + 1, $c + 1,
                    $self->lchild->rchild));
            }
            return $self;
        } elsif (!is_ref ($init)) {
            # Set value from scalar
            return { value => $init };
        }
        return {};
    }

    # Retrieve or calculate the minimum path downwards from here.
    sub minsum {
        my $self = shift;
        unless (defined $self->minval) {
            my $sum = $self->value;
            $sum += min ($self->lchild->minsum, $self->rchild->minsum) if
                defined $self->lchild;
            $self->minval ($sum)
        }
        return $self->minval;
    }

    package main;

    # my @aoa  = map { [/([0-9]+)/g] } <STDIN>;
    my $root = Node->new (\@aoa);

    print $root->minsum . "\n";

```



### ...or done, wait, *DYNAMICALLY*?
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/abigail/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/athanasius/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/cheok-yin-fung/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/polettix/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/jo-37/perl/ch-2.pl),
[**Lance Wicks**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/lance-wicks/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/lubos-kolouch/perl/ch-2.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/stuart-little/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/wlmb/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/wanderdoc/perl/ch-2.pl)

Alternately, we can start at the lowest level, move one row up and examine each of elements found there in turn, selecting the minimum way to the bottom from that point. In this first case it is easy to see the answer will be the smaller of the two child node options. We then replace each value with the sum of the element and the smallest child element, and repeat the process working upward, working towards the apex. At each level the number of possible paths is reduced by one, until after reaching the peak there is only one optimal solution remaining.

Lance Wicks breaks from the pack, explicitly placing his triangular matrix into a rectangle and labels his technique "dynamic programing". It at first seems different but the actual actions performed are the same. I think the label is correct, though, as it fits the definition, such that there is. It's important to remember the phrase was originally designed to *sound good on a grant* without pinning down the meaning too closely, so actual "dynamic programming" is itself not well defined, being rather a spectrum of related ideas. However here the larger problem is broken down into smaller, simpler sub-computations that are repeated to evolve a solution. In this case we select, for every element, which of the two child nodes to merge with as we ascend, and the state of the system, the partial solutions, is encoded in the rewritten array values as we go, so the progress of earlier sub-computations is used to inform those made later. Call it what you will, seems pretty dynamic to me and I think Lance is right on the money.

[**Lance Wicks**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/lance-wicks/perl/ch-2.pl)

As noted earlier, Lance fits his triangular array into a rectangle before applying the ascending series of calculations. I don't believe in this case any trailing zero elements either add nor detract from the operation of the algorithm, or for that matter are even required to call this "dynamic programming". However you draw the matrix, the essential aspect is using smaller sub-calculations to reconfigure a partial state mapping that is held in the data array. As each row of sub-calculations are completed, the partial sums are updated in the matrix accordingly, and the current values are used for the defining basis of further computation.


```perl
    sub triangle_to_table {
        my ( $self, $triangle ) = @_;

        my $max = @$triangle - 1;
        for my $row_index ( 0 .. $max ) {
            for my $column_index ( 0 .. $max ) {
                $triangle->[$row_index][$column_index] //= 0;
            }
        }

        return $triangle;
    }

    sub parse_table {
        my ( $self, $table ) = @_;

        my $max = @$table - 1;

        for my $row_index ( reverse( 0 .. $max - 1 ) ) {
            for my $column_index ( 0 .. $max - 1 ) {
                if ( $table->[ $row_index + 1 ][$column_index]
                    < $table->[ $row_index + 1 ][ $column_index + 1 ] )
                {
                    $table->[$row_index][$column_index]
                        += $table->[ $row_index + 1 ][$column_index];
                }
                else {
                    $table->[$row_index][$column_index]
                        += $table->[ $row_index + 1 ][ $column_index + 1 ];
                }

            }
        }

        return $table->[0][0];
    }
```

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/abigail/perl/ch-2.pl)

As the algorithm  simply chooses the least sum when synthesizing upward into the previous level, computing just the minimal value can produce a quite compact solution.

Abigail shown us one such method:

```perl
    for (my $x = @nums - 2; $x >= 0; $x --) {
        foreach my $y (keys @{$nums [$x]}) {
            $nums [$x] [$y] += $nums [$x + 1] [$y] < $nums [$x + 1] [$y + 1]
                             ? $nums [$x + 1] [$y] : $nums [$x + 1] [$y + 1]
        }
    }

    say $nums [0] [0];
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/e-choroba/perl/ch-2.pl)

Choroba uses a clever map function to reduce the lists upwards, making his logic into pretty much a single line. Very nice.

```perl
    sub triangle_sum {
        my ($triangle) = @_;
        my @sums = @{ $triangle->[-1] };
        @sums = map {
            $sums[$sums[ $_ - 1 ] < $sums[$_] ? $_ - 1 : $_ ]
                + $triangle->[@sums - 2][ $_ - 1 ]
            } 1 .. $#sums
            while @sums > 1;
        return $sums[0]
    }
```

And as bonus output he provides us with a big random triangle with a bracketed path showing the minimal route:

```
                            [4]
                           [0] 4
                          5 [3] 6
                         9 4 [2] 6
                        3 4 [6] 8 7
                       6 5 [0] 5 1 2
                      1 7 [1] 0 3 8 5
                     1 9 [5] 7 2 4 9 2
                    8 5 9 [7] 9 9 7 5 2
                   7 6 8 [3] 7 5 6 9 7 9
                  2 9 7 8 [3] 9 8 9 4 1 9
                 8 7 5 0 2 [5] 9 2 7 5 6 6
                6 0 0 1 3 9 [1] 9 0 6 4 7 2
               3 4 3 6 8 5 6 [0] 6 2 3 9 0 4
              9 8 4 1 9 7 9 3 [4] 8 5 3 5 2 2
             0 5 3 8 7 7 3 8 7 [0] 9 3 0 1 3 0
            9 4 6 0 9 9 6 7 8 [4] 5 3 7 1 5 4 0
           1 8 5 8 4 8 1 2 8 9 [1] 2 1 8 8 5 7 7
          5 0 0 2 0 2 3 4 7 4 6 [1] 1 9 8 7 4 6 9
         2 6 2 4 0 1 3 5 3 4 0 [0] 9 0 1 1 6 8 9 7
        50

```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/james-smith/perl/ch-2.pl)

James give us an extensively commented solution. The algorithm itself is succintly implemented, with a ternary decision inside the index brackets to determine which of the two children we wish to to merge with.

As he notes, this overwriting process is destructive, so he also first makes a deep copy of the original data, which he uses in an additional routine to draw the path in the manner of the examples.

```perl
sub triangle_sum {
    my @tri = map{ [@{$_}] } @_;
    while(@tri>1) {
            ## Strip off base of triangle...
        my $b = pop @tri;
            ## Update new last line by adding smallest of it's "children"
        $tri[-1][$_] += $b->[
                $b->[$_] < $b->[$_+1] ? $_ : $_+1
            ] for 0..@tri-1;
    }
    return $tri[0][0];
}
```



[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/jo-37/perl/ch-2.pl)

Jorg is always throwing weird new stuff at me, and this week is no exception. To wit: note the unicode variable name for our triangle, which is allowed because we've explicitly told Perl to expect such things:

```perl
    use utf8;
```

This doesn't refer to using unicode in our IO data, that requires its own handling. Instead this pragma notifies Perl that we are using Unicode in out script body, allowing us, amongst other things, to use Unicode in variable names.

In other regards this is the bottom-up algorithm written within a `map` function using `reduce`, which seems quite fitting, as a list reduction from *n* elements to *n-1*, to *n-2*, until only one element remains is exactly what is going on.

```perl
    sub triangle_sum ($Δ) {
        (reduce {
                $b->[$_] += min $a->@[$_, $_ + 1] for 0 .. $b->$#*;
                $b;
            } reverse $Δ->@*
        )->[0];
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/polettix/perl/ch-2.pl)

In a twist, Flavio implements the dynamic programming solution from the top down rather than the bottom up. Rather than falling into the trap of simply choosing the smallest next value available, he recomputes each line of the triangle as he goes, replacing the value with the *smallest sum option to get there*. This critical difference allows the earlier subcomputations to inform the current computation, and the state of the system is held between the currently evaluated line and the line previous.

```perl
    sub triangle_sum ($tri) {
       my @s = $tri->[0][0];
       my $i = 1;
       while ($i <= $tri->$#*) {
          my $l = $tri->[$i];
          my @ns = $s[0] + $l->[0];
          push @ns, $l->[$_] + ($s[$_ - 1] < $s[$_] ? $s[$_ - 1] : $s[$_])
             for 1 .. $l->$#* - 1;
          push @ns, $s[-1] + $l->[-1];
          @s = @ns;
          ++$i;
       }
       return min(@s);
    }
```

[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/lubos-kolouch/perl/ch-2.pl)


Lubos gives us another version of this pattern. It's a really interesting inversion.

```perl
    for my $row (@$what) {
        $row_counter++;
        my $col_counter = 0;
        for my $item (@$row) {
            $col_counter++;
            my $min_sum;

            $min_sum = $sums{$row_counter-1, $col_counter} if
                        exists($sums{$row_counter-1,$col_counter});
            $min_sum = $sums{$row_counter-1, $col_counter-1} if
                        exists($sums{$row_counter-1,$col_counter-1})
                        and (
                            (not $min_sum)
                            or ($sums{$row_counter-1,$col_counter-1} < $min_sum) );
            $min_sum //= 0;

            $sums{$row_counter,$col_counter} = $item + $min_sum;

            if ($row_counter == scalar @$what) {
                $min_path = $item + $min_sum if (
                    (not $min_path) or ($item + $min_sum < $min_path));
            }
        }
    }

    return $min_path;
```

as did
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-100/stuart-little/perl/ch-2.pl)

Stuart uses only a single line of buffer to pass around the state of his system. In it he  holds both his running minimal sums, in the front section, and the remaining portion of the triangle laid flat in the latter portion, starting with the values of the current row to be merged.

In computing each row the previously modified values are removed from the front of the array, followed by the current row values. For example at the beginning we remove one element, for the first row, followed by two for the second. The previous row data is converted into a list of minimal paths suitable to be zip merged and added to the current row data; after zipping the sums are shifted back onto the buffer in front of the remaining triangle data.

At each row the previous row, now computed to be partial, minimal sums, is optimally joined to the current row so as to create the smallest sums. Then the whole thing is packed back onto the buffer, ready for the next level.


```perl
    sub mins($ar) {
        my @mins = ($ar->[0], (map {min $ar->[$_], $ar->[$_+1]} (0..(scalar @{$ar}-2))), $ar->[-1]);
        return \@mins;
    }

    sub redStep($sm,$bg) {
        my $size=scalar @{$sm};
        my @zipped = zip_by {$_[0] + $_[1]} mins($sm), [$bg->@[0..$size]];
        return [@zipped, $bg->@[$size+1..scalar @{$bg}-1]];
    }

    my $sm = [@ARGV[0,]];
    my $bg = [@ARGV[1..$#ARGV]];
    while ((scalar @$bg) > (my $size=scalar @$sm)) {
        my $processed = redStep($sm,$bg);
        $sm = [$processed->@[0..$size]];
        $bg = [$processed->@[$size+1..scalar @{$processed}-1]];
    }

```

## \(what went wrong\)

The great American newspaperman H. L. Mencken — writer, critic and linguist to the American tongue — once wrote:

>**For every complex problem there is an answer that is clear, simple, and wrong.**

It appears with this task we have one of these problems before us, with straightforward strategies presenting themselves that seem to work for the data presented, luring us with sweets down false paths into a dark forest.  Strategies, I might add, that unfortunately don't pan out when given more complex data sets.

Anytime the size of a grouping of incorrect solutions rivals those of the working, well, perhaps we should give these equal grounds for examination. These pages are not really about the *answers* to these often bog-standard problems easily available on the internet, but rather more about the *process* of solving them — about TOMTOWTDI, about learning a new paradigm, about honing one's chops, about as many things as there are members in this vast global team.

So what did I do? When reading a solution, I often get a gut feeling that something isn't being handled right, that something is off somehow, even if the example data works out right. My responsa, then, is to alter the input to help me clarify exactly what's going on in the data pipeline, drawing small differences into sharp relief. More often than not everything works as advertised and I glean a better understanding of the algorithm I'm investigating, all the better to explain it to you all here, but sometimes error become glaringly obvious.

Consider the triangle, for instance:

```
                    1
                10      1
            10      100     1
        10      1        100    100
    10      100     100     100     100

```

The immediately obvious aspect of this construction is the path of ones down the right hand side. A quick glance might assume this is the way to proceed. However it is a trap, as descending this line leaves one stuck in an area requiring great expenditure to complete. The sum of this path ends up to be 203. However taking the more difficult path at the beginning leads to the path of tens down the left hand side, yielding a result of 41. Hmmm.

When searching for the minimally summed sequence, it's tempting that when given the choice of two outcomes with differing costs to take the lower value. It seems like reducing the larger sum to a series of smaller individual addition choices should produce the smallest total. But, as we've demonstrated, that is not always the case, as local maxima may interfere with seeing benefits available only after the immediate obstacle is overcome.

So at any given moment, given the choice between two child nodes to follow, we cannot just pick the smaller value without keeping track of all of the other paths as well, as a minimum *here* cannot predict a minimum in the future.

Needless to say, picking the smallest value at every level does not work for the same reason, with the added complication that the smallest value may not maintain the proper parent-child relationship required for traversal.

The dynamic strategies we've looked at seem to be vulnerable to the same problems, but they escape the pitfalls by not choosing based on limited information looking ahead, but by calculating multiple ways simultaneously while steadily narrowing the field by eliminating known bad paths.




---

# BLOGS {#PWC100BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, I somehow continue to maintain my bearings. Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC093BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *READ* these *BLOG* *LINKS*:

**( *don't think, trust your training, you're in the zone, just do it ...* )**


**Aaron Smith**

 * [Perl Weekly Challenge 100 - Aaron Smith](https://aaronreidsmith.github.io/blog/perl-weekly-challenge-100/) ( *Raku* )

**Abigail**

 * [Perl Weekly Challenge 100: Fun Time — Abigail's Programming Blog](https://wp.me/pcxd30-qr) ( *Perl* )
 * [Perl Weekly Challenge 100: Triangle Sum — Abigail's Programming Blog](https://wp.me/pcxd30-qP) ( *Perl* )

**Adam Russell**

 * [The Weekly Challenge 100 - Perl - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2021/02/21) ( *Perl* )
 * [The Weekly Challenge 100 - Prolog - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2021/02/21) ( *Prolog* )

**Andinus**

 * [Challenge 100](https://andinus.tilde.institute/pwc/challenge-100/) ( *Raku* )

**Arne Sommer**

 * [Fun Sum Time with Raku and Perl](https://raku-musings.com/fun-sum-time.html) ( *Perl & Raku* )

**Colin Crain**

 * [Time Traveling Under Pyramid Power — Programming Excursions in Perl and Raku](https://colincrain.com/2021/02/20/time-traveling-under-pyramid-power/) ( *Perl & Raku* )

**Dave Jacoby**

 * [Turning Over A New Digit: Perl Weekly Challenge #100 - Committed to Memory](https://jacoby.github.io/2021/02/16/turning-over-a-new-digit-perl-weekly-challenge-100.html) ( *Perl* )

**Flavio Poletti**

 * [PWC100 - Fun Time - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/02/17/pwc100-fun-time/) ( *Perl* )
 * [PWC100 - Triangle Sum - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/02/18/pwc100-triangle-sum/) ( *Perl* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 100](https://www.braincells.com/perl/2021/02/perl_weekly_challenge_week_100.html) ( *Perl & Raku* )

**James Smith**

 * [Perl weekly challenge 100 - James Curtis-Smith](http://blogs.perl.org/users/james_curtis-smith/2021/02/perl-weekly-challenge-100.html) ( *Perl* )

**Lance Wicks**

 * [pErLM for the Perl Weekly Challenge 100 - Perl🐪.🥝 Kiwi](https://perl.kiwi/tales/2021/02/18/perlm-for-the-perl-weekly-challenge-100/) ( *Perl* )
 * [Perl Weekly Challenge 100 part 2 - Perl🐪.🥝 Kiwi](https://perl.kiwi/tales/2021/02/20/perl_weekly_challenge_100_part_2/) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 100: Fun Time and Triangle Sum](http://blogs.perl.org/users/laurent_r/2021/02/perl-weekly-challenge-100-fun-time-and-triangle-sum.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 100: times and triangles – Luca Ferrari](https://fluca1978.github.io/2021/02/15/PerlWeeklyChallenge100.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 100: times and triangles – Luca Ferrari](https://fluca1978.github.io/2021/02/15/PerlWeeklyChallenge100.html#task2) ( *Raku* )

**Roger Bell_West**

 * [RogerBW&#39;s Blog: Perl Weekly Challenge 100: Time Triangle](https://blog.firedrake.org/archive/2021/02/Perl_Weekly_Challenge_100__Time_Triangle.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 100](https://dev.to/simongreennet/weekly-challenge-100-4lf6) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 100 – W. Luis Mochán](https://wlmb.github.io/2021/02/15/PWC100/) ( *Perl* )
