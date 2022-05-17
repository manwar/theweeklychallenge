---
author:       Colin Crain
date:         2022-05-17T00:00:00
description:  "Colin Crain › Perl Weekly Review #160"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #160"
image:        images/blog/p5-review-challenge-160.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-159/).* )

Welcome to the Perl review pages for **Week 160** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

---

### ●︎ Why do we do these challenges?

I suppose any reasonable answer to that question would be from a field as wide ranging and varied as the people who choose to join the team. One thing, though, is clear: it's not a competition, and there are no judges, even if there is a "prize" of sorts. About that -- I think of it more as an honorarium periodically awarded to acknowledge the efforts we make towards this strange goal. So there's no determination to find the *fastest*, or the *shortest*, or even, in some abstract way, the *best* way to go about things, although I'm certain the participants have their own aspirations and personal drives. As Perl is such a wonderfully expressive language, this provides quite a bit of fodder to the core idea of TMTOWTDI, producing a gamut of varied techniques and solutions.

Even the tasks themselves are often open to a certain amount of discretionary interpretation. What we end up with is a situation where each participant is producing something in the manner they find the most interesting or satisfying. Some team members focus on carefully crafted complete applications, thoroughly vetting input data and handling every use case they can think up. Others choose to apply themselves to the logic of the underlying puzzle and making it work in the most elegant way they can. Some eschew modules they would ordinarily reach for, others embrace them, bringing to light wheels perhaps invented years ago that happen to exactly solve the problem in front of them today.

I've been considering this question for some time and have found one binding commonality between all of us out solving these challenges each week, in that however we normally live our lives, the task in front of us more than likely has nothing to do with any of that. And I think this has great value. We all do what we do, in the real world, and hopefully we do it well. The Weekly Challenge provides us with an opportunity to do something germane to that life yet distinctly different; if we only do the things we already know how to do then we will only do the same things over and over. This is where the "challenge" aspect comes into play.

So we can consider The Weekly Challenge as providing a problem space outside of our comfort zone, as far out from that comfort as we wish to take things. From those reaches we can gather and learn things, pick and choose and bring what we want back into our lives. Personally, I think that's what this whole thing is about. YMMV.

---

<strong><emp>Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due.</emp></strong>

And that, my friends, is why I'm here, to try and figure out ways to do just that.

So, here we are then. I'm ready — let’s get to it and see what we can find.

---

### For Additional Context…

before we begin, you may wish to revisit either the pages for the [**original tasks**](/blog/perl-weekly-challenge-160/) or the summary [**recap**](/blog/recap-challenge-160/) of the challenge. But don't worry about it, the challenge text will be repeated and presented as we progress from task to task.

Oh, and one more thing before we get started:


### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please feel free to email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

<div align= center><strong>...So finally, without further ado...</strong></div>

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC160TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC160TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC160BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC160TASK1}

# Four Is Magic
*Submitted by: Mohammad S Anwar*

You are given a positive number, $n < 10.

Write a script to generate english text sequence starting with the English cardinal representation of the given number, the word ‘is’ and then the English cardinal representation of the count of characters that made up the first word, followed by a comma. Continue until you reach four.


**Example 1:**
```
        Input: $n = 5
        Output: Five is four, four is magic.
```


**Example 2:**
```
        Input: $n = 7
        Output: Seven is five, five is four, four is magic.
```


**Example 3:**
```
        Input: $n = 6
        Output: Six is three, three is five, five is four, four is magic.
```



## about the solutions
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/adam-russell/perl/ch-1.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/alexander-pankoff/perl/ch-1.pl),
[**Ali Moradi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/deadmarshal/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/athanasius/perl/ch-1.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/bruce-gray/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/colin-crain/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/jo-37/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/laurent-rosenfeld/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/lubos-kolouch/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/mattneleigh/perl/ch-1.pl),
[**Maxim Kolodyazhny**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/maxim-kolodyazhny/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/mohammad-anwar/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/paulo-custodio/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/pete-houston/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/peter-campbell-smith/perl/ch-1.pl),
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/pokgopun/perl/ch-1.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/robert-dicicco/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/sgreen/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/wlmb/perl/ch-1.pl)

Let me be straight with you — I quite enjoy these little excursions into what amounts to Natural Language Programming. Albeit this particular task is not particularly complex, it fits the category nonetheless. Here we're constructing a sentence of sorts, really a phrase, using words for numbers instead of numbers, and then using a property of those words — the letter count — to modify the phrase going forward.

The algorithm, it might be noted, always finishes no matter the input number given. The best way to demonstrate this is to prove that the numbers from one to nine — the task as given — all finish, and then start expanding the scope. The first nine digits will all fall into patterns that will finish based on three, four or five character names. The irregular numbers up to twenty all have less than ten characters, and so with an extra conversion step we will land on a sequence that is known to converge. We can then expand the known range to include compound numbers less than one-hundred, as the longest construction — "seventy-seven" has a length known to converge. At this point we have included all numbers that when written out have less than one-hundred characters and we can see this includes all numbers through some finite number of intermediate steps.

Speaking to a generalized algorithm, it turns out not to matter whether we include hyphens in our digit count, although I think the game plays more smoothly if we ignore them. We can include zero too, as both "zero" and "no" will converge, so there are options available as well to use different phrasing if desired. We can also continue backwards down the number line including the word "negative" and into the real numbers with "point":

"negative sixty-six point six six three is thirty-two, thirty-two is nine, nine is four, four is magic"

There were 28 submissions for the first task this past week.

## A SELECTION of SUBMISSIONS
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/cheok-yin-fung/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/roger-bell-west/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/e-choroba/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/james-smith/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/paulo-custodio/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/colin-crain/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/dave-jacoby/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/mohammad-anwar/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/adam-russell/perl/ch-1.pl), and
[**Maxim Kolodyazhny**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/maxim-kolodyazhny/perl/ch-1.pl)

The actual English language programming for the challenge is not very involved; essentially we need a way to translate digital numbers into their English word equivalents, and then parse those words for their character count to continue building the phrase until we finish.

We saw arrays and hashes to perform the translation lookup, and also the use of a  numeric text  module specifically designed for the purpose. It was also fairly common to extend the allowed range for input beyond the required nine cases.

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/cheok-yin-fung/perl/ch-1.pl)

We will start the survey with a mathematician. CY solves the lookup problem gracefully, by constructing an array of words corresponding to the written-out names of the index positions. By maintaining the count as a digital number she can then use it as an index in the array to get the associated word quickly and easily. This array does include the dummy value "zero" to keep the alignment synchronized, although for the task as given this will never be used.

On the other hand, we'll note that "Zero is four, four is magic", works just fine. Also note that to construct the proper phrase in the style of the examples we should capitalize the first letter and end with a period.

The control flow is built around phrase-elements "*«written number»* is *«number of characters»*", repeated until we arrive at the number 4, which triggers what CY refers to as the "spell" portion of the sentence, "four is magic." The first numeric instance is uppercased, and then the phrase generation is handed off to a loop until the sequence resolves.

Proper punctuation is included at the time of construction.

```perl
    sub fim {
        my @num = ("zero", "one", "two", "three", "four", "five",
                   "six", "seven", "eight", "nine");
        my $spell = "four is magic.";
        my $c = $_[0];
        if ($c == 4) {
            print ucfirst($spell), "\n";
            return;
        }
        $num[$c] = ucfirst($num[$c]);
        while ($c != 4) {
            print $num[$c];
            $c = length $num[$c];
            print " is $num[$c], ";
        }
        print "$spell\n";
    }
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/roger-bell-west/javascript/ch-1.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/roger-bell-west/kotlin/ch-1.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/roger-bell-west/lua/ch-1.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 160: Balancing Four is Magic](https://blog.firedrake.org/archive/2022/04/The_Weekly_Challenge_160__Balancing_Four_is_Magic.html)

Roger also gives us a tight loop, built around a central lookup array for his text equivalents. Here he's changed the action slightly to focus around the phrase-element generation, moving the sentence construction of capitalization and punctuation into the last, output line. The whole logic structure is now built on assembling the digit-word subcomponents inside the loop.

On the other hand CY's definitely got him beat on using that `$spell` variable name, which made me smile. I suppose you could consider `$s` to stand for that, but I do think "string" is more likely, as that's what we're assembling. I quite enjoy CY's Chinese-language takes on English variable and subroutine naming.


```perl
    sub fim {
      my $n=shift;
      my @words=qw(zero one two three four five six seven eight nine);
      my @p;
      while (1) {
        my $s=$words[$n] . ' is ';
        if ($n == 4) {
          $s .= 'magic.';
          push @p,$s;
          last;
        } else {
          $n=length($words[$n]);
          $s .= $words[$n];
          push @p,$s;
        }
      }
      return ucfirst(join(', ',@p));
    }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/e-choroba/perl/ch-1.pl)

Choroba strips the fat even further, into a short recursive routine with a wrapper function to provide initial capitalization and punctuation.

```perl
    my @cardinals = qw( one two three four five six seven eight nine );

    sub four_is_magic ($n) {
        ucfirst _four_is_magic($n) . '.'
    }

    sub _four_is_magic ($n) {
        return 'four is magic' if 4 == $n;

        my $word = $cardinals[ $n - 1 ];
        my $length = length $word;
        return "$word is $cardinals[ $length - 1 ], " . _four_is_magic($length)
    }
```





[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/james-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #160](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-160/james-smith)

Although in the limited range of the task the numbers 1 through 9 are easily written out using a lookup of some sort, array or hash, in general natural language programming is more complex, with a wide variety of linguistic quirks to accommodate. As such specialized tools have been developed by enthusiasts willing to take up the challenge. One such enthusiast is PWC member Neil Bowers, who has among his many, many achievements brought `Lingua::EN:Numbers` into our world.

This module has two functions, one to translate a number into written English text, and a second to convert a number into an ordinal string, such as "fifty-third".

Using this module removes the numeric complexity from the algorithm, allowing input from any range. This was the second basic method used to solve the problem.

```perl
    use Lingua::EN::Numbers qw(num2en);

    sub magic {
      my $r = ucfirst num2en( my $n = shift ).' is ';
      $r .= join num2en( $n = length num2en($n)=~s/\W//rg ), '', ', ', ' is ' until $n==4;
      $r.'magic.';
    }
```

[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/paulo-custodio/perl/ch-1.pl)

Here's another example from Paulo. Note we no longer need to check the range of the input, as any number will work, say -1.45e24:

```
    Negative one point four five times ten to the twenty-fourth is fifty-nine, fifty-nine is ten, ten is three, three is five, five is four, four is magic.
```

The exact method used to decide which characters to include or not include when counting, as we said, is basically inconsequential. Either the long way or the short way, we'll get there in the end.


```perl
    use Lingua::EN::Numbers qw(num2en);

    say sequence(shift||1);

    sub sequence {
        my($n) = @_;
        my @out;
        while ($n != 4) {
            my $num_en = num2en($n);
            my $len = length($num_en);
            my $len_en = num2en($len);

            push @out, "$num_en is $len_en";
            $n = $len;
        }

        push @out, "four is magic.";
        $out[0] =~ s/(\w)/\U$1/;
        return join(", ", @out);
    }
```

[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/colin-crain/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/colin-crain/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Sign of the Four - Programming Excursions in Perl and Raku](https://colincrain.com/2022/04/17/sign-of-the-four/)

&nbsp;&nbsp;**blog writeup:**
[All Things in Balance - Programming Excursions in Perl and Raku](https://colincrain.com/2022/04/17/all-things-in-balance/)

Natural language programming problems, like CSV parsing and date and time manipulations, hide surprisingly complex tasks disguised as simple concepts. Hence I view them as best handled by specialized libraries dedicated to getting all the fiddly bits right.

In my own solution, I've been having a small problem lately with the familiar `while (1) { ... }` construct for an infinite loop. I know it's a little late to complain, and have in fact been using it without incident for — what? — decades now, but lately using a conditional with something that will never fail is just looking... kludgy to me. I don't know. I can't quite put my finger on it. Perhaps it will pass.

In any case I've started experimenting with `redo` inside a block. Unfortunately this puts the action verb after the object, which is less-than-perfect, but seems to scan well. At least it does what it says it should: `while (1)` is just sort of sarcastic.

"Let's try and communicate by saying the opposite of what we really mean". Yea, that's gonna work. See? Now they've even got me doing it. I really am trying to avoid sarcasm lately. Life is difficult and confusing enough, thank you very much.

```perl
    sub magic ($num, $out = '') {
        {
            my $name =  num2en($num);
            $out  .= "$name is ";
            $name =~ s/[^a-z]//g;
            $num == 4
                ? return ($out . "magic")
                : ($out .= num2en(  length $name  ) . ', ');
            $num = length $name ;
            redo;
        }
    }
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/dave-jacoby/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Does That Make Friendship Equal Four?: Weekly Challenge #160 | Committed to Memory](https://jacoby.github.io/2022/04/12/does-that-make-friendship-equal-four-weekly-challenge-160.html)

One more in this style from Dave. Note the use of a regular expression to match out word characters instead of using `length`, which only counts the letters, and not hyphens. It doesn't matter in the end, only slightly changing the path to the inevitable outcome, but it is kind of cool as a technique, to isolate out only a select subset of characters. As I said the algorithm will finish no matter whether you include hyphens or not, or even, for that matter, if you were to spell out the word "hyphen". But as a magic trick I think it works better if you don't mention them.

```perl
    sub magic ( $i ) {
        return 'four is magic.' if $i == 4;
        my $w   = num2en($i);
        my $c   = () = $w =~ /(\w)/gmix;
        my $d   = num2en($c);
        my $out = qq{$w is $d, };
        $out .= magic($c);
        return ucfirst lc $out;
    }
```




[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/mohammad-anwar/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/mohammad-anwar/raku/ch-1.raku)

Mohammad is back this week, with a submission based of a hash lookup for his cardinal number names. I believe there is a natural thought process to see an associative array as a more complex data structure and hence more computationally expensive, but the truth of matter is that hashes in Perl are basic, simple and useful, and hence over the years have become extremely-well tuned for speed. Hash lookups occur in constant time completely independant of scaling and are impressively fast.

I was kind of waiting for someone to use a Perl hash for this translation table, and here we are.

```perl
    sub four_magic {
        my ($n) = @_;

        die "ERROR: Missing number.\n"      unless defined $n;
        die "ERROR: Invalid number [$n].\n" unless ($n >=0 and $n < 10);

        my %name_of = (0, 'zero',  1, 'one',
                       2, 'two',   3, 'three',
                       4, 'four',  5, 'five',
                       6, 'six',   7, 'seven',
                       8, 'eight', 9, 'nine');

        my @str = ();
        while (1) {
            my $name = $name_of{$n};
            my $len  = length($name);
            push @str, "$name is $name_of{$len}";
            last if ($len == 4);
            $n = length($name);
        }

        push @str, 'four is magic.';

        return ucfirst(join(', ', @str));
    }
```

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/adam-russell/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/adam-russell/prolog/ch-1.p)


&nbsp;&nbsp;**blog writeup:**
[Four is Equilibrium — Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/04/17)

&nbsp;&nbsp;**blog writeup:**
[Four is Equilibrium — Prolog — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/04/17)

After a brief summary of what he plans to do, Adam also chooses a hash for his lookup. Good choice. As language features go, Perl hashes stand out as a basic building block at the most primitive level. When you only provide three data structures (ok more, but lets not nit-pick) then they should be good.

```perl
    # You are given a positive number, $n < 10.
    # Write a script to generate english text sequence starting with the English cardinal
    # representation of the given number, the word ‘is’ and then the English cardinal
    # representation of the count of characters that made up the first word, followed by a
    # comma. Continue until you reach four.

    my %cardinals = (
        1 => "one",
        2 => "two",
        3 => "three",
        4 => "four",
        5 => "five",
        6 => "six",
        7 => "seven",
        8 => "eight",
        9 => "nine"
    );

    sub four_is_magic {
        my($n, $s) = @_;
        $s = "" if !$s;
        return $s .= "four is magic" if $n == 4;
        $s .= $cardinals{$n} . " is " . $cardinals{length($cardinals{$n})} . ", ";
        four_is_magic(length($cardinals{$n}), $s);
    }

```


[**Maxim  Kolodyazhny**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/maxim-kolodyazhny/perl/ch-1.pl)

We'll close out with this submission from avid golfing enthusiast Maxim. Golf, you say? Well there are a few dead giveaways, that taken together lead me to the conclusion:

* the use of `pop` to get the base number from the implicit @ARGV, saving two characters over `shift`, and then assigning to the predeclared topic variable.
* similarly defining the number list with `qw()` quoting, and not spelling out "zero" as it will never be used
* `1while` is of course a hideous monstrosity but effective, albeit confusing
* forgoing the courtesy of a closing semicolon. It's all business with this lot.


That said, using a substitution regex is a really inventive solution, and really off the beaten path so kudos, Maxim. In short, we replace any number except 4 with the appropriate phrase segment followed by the result of the length subroutine as a number. We now have another number to match so the substitution is run again, until the new number is 4. No longer allowed to  match, the loop stops as well. The final 4 is substituted out in the output, which uses the `/r` switch to return the result of the substitution as a string. Handy that, as you see.

Note that in `1while` it's not the conditional that's true, but the block, like:

```perl
    while (*conditional*) {
        1;  ## do nothing
    }
```

Here's the tightly-wrapped beast in its glory:

```perl
    $_ = pop;

    my @n = qw( 0 one two three four five six seven eight nine );
    sub l { length @n[@_] }

    1while s/[^4]$/$n[$&] is $n[l $&], ${\l $&}/;
    say ucfirst s/4/four is magic./r
```




## Blogs and Additional Submissions in Guest Languages for Task 1:


[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/alexander-pankoff/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/alexander-pankoff/haskell/ch-1.hs)


&nbsp;&nbsp;**blog writeup:**
[Challenge 160 Task #1 - No way around four](https://pankoff.net/pages/perl-weekly-challenge/challenge-160-task-1.html)

&nbsp;&nbsp;**blog writeup:**
[Challenge 160 Task #2 - Steps to recovering the Equilibrium in your lists](https://pankoff.net/pages/perl-weekly-challenge/challenge-160-task-2.html)


[**Ali Moradi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/deadmarshal/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/deadmarshal/cpp/ch-1.cpp), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/deadmarshal/lua/ch-1.lua), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/deadmarshal/pascal/ch1.pas), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/deadmarshal/raku/ch-1.raku)


[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/arne-sommer/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/arne-sommer/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[The Magic Equilibrium with Raku and Perl](https://raku-musings.com/magic-equilibrium.html)


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/athanasius/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/athanasius/raku/ch-1.raku)


[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/bruce-gray/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/bruce-gray/raku/ch-1.raku), [Yabasic](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/bruce-gray/yabasic/ch-1.yab)


&nbsp;&nbsp;**blog writeup:**
[TWC 160: Mystic/Math Balance | Bruce Gray](http://blogs.perl.org/users/bruce_gray/2022/04/twc-160-mysticmath-balance.html)


[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/duncan-c-white/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/duncan-c-white/C/ch-1.c)


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC160 - Four Is Magic - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/04/12/pwc160-four-is-magic/)

&nbsp;&nbsp;**blog writeup:**
[PWC160 - Equilibrium Index - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/04/13/pwc160-equilibrium-index/)


[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/jaldhar-h-vyas/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/jaldhar-h-vyas/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 160](https://www.braincells.com/perl/2022/04/perl_weekly_challenge_week_160.html)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/laurent-rosenfeld/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 160: Four is Magic and Equilibrium Index](http://blogs.perl.org/users/laurent_r/2022/04/perl-weekly-challenge-160-four-is-magic-and-equilibrium-index.html)



[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/lubos-kolouch/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/lubos-kolouch/python/ch-1.py)


[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/peter-campbell-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Four is magic and Equilibrium Indices](https://pjcs-pwc.blogspot.com/2022/04/four-is-magic-and-equilibrium-indices.html)


[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/pokgopun/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/pokgopun/go/ch-1.go)


[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/robert-dicicco/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/robert-dicicco/julia/ch-1.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/robert-dicicco/raku/ch-1.raku), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/robert-dicicco/ruby/ch-1.rb)


[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/sgreen/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/sgreen/python/ch-1.py)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 160](https://dev.to/simongreennet/weekly-challenge-160-3206)


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/wlmb/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 160 – W. Luis Mochán](https://wlmb.github.io/2022/04/11/PWC160/)


------------------------------------------





---

# TASK 2 {#PWC160TASK2}

# Equilibrium Index
*Submitted by: Mohammad S Anwar*

You are give an array of integers, @n.

Write a script to find out the Equilibrium Index of the given array, if found.

For an array A consisting n elements, index i is an equilibrium index if the sum of elements of subarray A[0…i-1] is equal to the sum of elements of subarray A[i+1…n-1].


**Example 1:**
```
        Input: @n = (1, 3, 5, 7, 9)
        Output: 3
```


**Example 2:**
```
        Input: @n = (1, 2, 3, 4, 5)
        Output: -1 as no Equilibrium Index found.
```


**Example 3:**
```
        Input: @n = (2, 4, 2)
        Output: 1
```



## about the solutions
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/adam-russell/perl/ch-2.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/alexander-pankoff/perl/ch-2.pl),
[**Ali Moradi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/deadmarshal/perl/ch-2.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/arne-sommer/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/athanasius/perl/ch-2.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/bruce-gray/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/jo-37/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/laurent-rosenfeld/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/lubos-kolouch/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/mattneleigh/perl/ch-2.pl),
[**Olivier Delouya**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/olivier-delouya/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/paulo-custodio/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/pete-houston/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/peter-campbell-smith/perl/ch-2.pl),
[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/pokgopun/perl/ch-2.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/robert-dicicco/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/sgreen/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/wlmb/perl/ch-2.pl)

The definition of an equilibrium state is when several forces working in opposition arrive at a net balance, cancelling each other out to achieve at a stable state. In this challenge, the two opposing forces are the sums of the sub-lists on either side of a given index position.

This suggests perhaps a problem of evaluation and adjustment, ultimately homing in on a final result. But in practicality it was more of an exploration into list-wise processing, examining index positions individually for ones that fit the criteria. There were several diferent approaches we saw to solving the problem.

There were a total of 27 submissions for the second task this past week.

## A SELECTION of SUBMISSIONS
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/laurent-rosenfeld/perl/ch-2.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/alexander-pankoff/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/sgreen/perl/ch-2.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/robert-dicicco/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/jo-37/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/wlmb/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/athanasius/perl/ch-2.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/mattneleigh/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/colin-crain/perl/ch-2.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/bruce-gray/perl/ch-2.pl), and
[**Olivier Delouya**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/olivier-delouya/perl/ch-2.pl)

As we said, there were a variety of solutions seen. Predominately the method revolved around computing the side-lists at each position to find those that summed the same.

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/laurent-rosenfeld/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/laurent-rosenfeld/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 160: Four is Magic and Equilibrium Index](http://blogs.perl.org/users/laurent_r/2022/04/perl-weekly-challenge-160-four-is-magic-and-equilibrium-index.html)

Laurent will start us of today with a very direct approach: examining each element in turn and summing the sublists preceding and following it. With small lists resembling the ones in the examples, he notes, this approach will computationally be no problem.

The list is iterated over by index, which allows us to use two array slices to examine the left- and right-hand sides. A homemade `sum` function is then applied to return a compounded total.

```perl
    sub equilibrium {
        my @ary = @_;
        for my $i (1..$#ary-1) {
            return $i if sum (@ary[0..$i-1]) == sum (@ary[$i+1..$#ary]);
        }
        return -1;
    }

    sub sum {
        my $sum = 0;
        $sum += $_ for @_;
        return $sum;
    }
```

[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/alexander-pankoff/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/alexander-pankoff/haskell/ch-2.hs)


&nbsp;&nbsp;**blog writeup:**
[Challenge 160 Task #1 - No way around four](https://pankoff.net/pages/perl-weekly-challenge/challenge-160-task-1.html)

&nbsp;&nbsp;**blog writeup:**
[Challenge 160 Task #2 - Steps to recovering the Equilibrium in your lists](https://pankoff.net/pages/perl-weekly-challenge/challenge-160-task-2.html)

This was not an uncommon approach. Here Alexander uses two variables to hold the sublists left and right, perhaps making the action a little clearer, but with net result being the same.

```perl
    use List::Util qw(all sum0);

    sub run() {
        my @xs = @ARGV;
        die "Expect a list of integers!\n" unless all { m/^-?\d+$/ } @xs;

        say equilibrium_index(@xs);
    }

    sub equilibrium_index(@xs) {
        for my $i ( 0 .. $#xs  ) {
            my $lower = sum0( @xs[ 0 .. $i - 1 ] );
            my $upper = sum0( @xs[ $i + 1 .. $#xs ] );
            return $i if $lower == $upper;
        }

        return -1;
    }
```

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/sgreen/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/sgreen/python/ch-2.py)


&nbsp;&nbsp;**blog writeup:**
[Weekly Challenge 160](https://dev.to/simongreennet/weekly-challenge-160-3206)

Using array slices and the `sum` function from `List::Util` produces a very compact solution, as you can see. This ended up being the most common method used by far. It's elegant and effective. I personally really like using slices, and list-wise processing in general.

```perl
    sub main {
        my @n = @_;

        my $idx = -1;

        foreach my $i ( 1 .. $#n - 1 ) {
            # If the sum of digits to the left match the sum of digits to the
            #  right, we have found a solution.
            if ( sum( @n[ 0 .. $i - 1 ] ) == sum( @n[ $i + 1 .. $#n ] ) ) {
                $idx = $i;
                last;
            }
        }

        say $idx;
    }
```

[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/robert-dicicco/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/robert-dicicco/julia/ch-2.jl), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/robert-dicicco/raku/ch-2.raku), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/robert-dicicco/ruby/ch-2.rb)

In sort of the opposite approach we have this submission by Robert, broken down into subroutine components, with handmade summing, and considerable commentary.

In the end the code doesn't care much about how many lines it is in most cases. In intensive number crunching I can see the rationale behind directly accessing the stack in `@ARGV` and subroutines, for example, eliminating an assignment here, tightening a loop there. But ultimately the trade-off is usually between minor tuning in efficiency vs. ease in mainetenance and comprenhension, and our task to find the sweet spot betweeen the two.

The cost of disk space, for instance, used to be a serious issue. Now it's not. There is a case for clarity now. YMMV.

```perl
    sub leftsum {                           # get sum of the array to left of the inflection point,
      my $a = shift;                        # this includes the inflection point
      my $i = shift;

      my $sum = 0;
      while($i >= 0 ){
        $sum += @$a[$i];
        $i--;
      }

      return $sum;
    }

    sub rightsum {                          # get sum of the array to right of the inflection point,
      my $a = shift;                        # this includes the inflection point
      my $i = shift;

      my $sum = 0;
      while($i < scalar(@$a) ){
        $sum += @$a[$i];
        $i++;
      }

      return $sum;
    }

     sub balance {
       my $a = shift;                       # the input array

       my $flag = 0;                        # 'found' flag
       my $len = scalar(@$a);
       foreach my $i (1..$len-2){           # step thru possible inflection points
          my $leftval = leftsum($a, $i);    # get the sum of left side of inflection point
          my $rightval = rightsum($a,$i);   # get sum of right side of inflection point
          if ($leftval == $rightval){       # compare sums
            print "Output: $i\n\n";
            $flag++;                        # increment flag if equal
            last;
          }
       }

       unless ( $flag > 0 ) {print "Output: -1 as no Equilibrium Index found.\n\n"} ;
     }
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/jo-37/perl/ch-2.pl)

Jorg gives us a unique manner of progressing his index; inside an exit conditional loop the first operation acts on the index `$i` and increments it post-evaluation, so when the second operation occurs we have already moved it forward. So we end up adding the old value if `$i` to the left list and subtract the new updated value from the right.

```perl
    sub equilibrium_index {
        my ($i, $left, $right) = (0, 0, sum0 @_[1 .. $#_]);
        # Starting with an empty left subarray, shift the index until an
        # equilibrium is found or the right subarray becomes empty.
        while ($left != $right && $i < $#_) {
            $left += $_[$i++];
            $right -= $_[$i];
        }

        $left == $right ? $i : -1;
    }
```


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/wlmb/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 160 – W. Luis Mochán](https://wlmb.github.io/2022/04/11/PWC160/)

The basic data structure of the [Perl Data Language](https://pdl.perl.org) extensions is a multi-dimensional array. As that multiple dimension can quite reasonably also be 1, that means that any array or list function processing algorithm is well suited to adaptation using the PDL.

Here Luis demonstrates. Slicing arrays is second nature when using the PDL, to the point it is normal to refer to a data subset as a range, denotated using a colon: `(idx_from:idx_to)`. We get this handy notation by using `NiceSlice`. We also get the `sumover` function on a slice out of the box, to sum over the slice elements (as you would hopefully expect).

In the end we get a familiar algorithm in a new form.

```perl
    use PDL;
    use PDL::NiceSlice;
    die "Usage: ./ch-2.pl N1 [N2...] to find equilibrium index of an array of numbers"
        unless @ARGV;
    my $input=pdl(@ARGV);
    my $result="-1 as no equilibrium index was found"; # default output
    say "Input: ", $input;
    for(1..$input->nelem-2){ #for all internal indices
       $result="$_ as sum(".$input(0:$_-1).")==sum(".$input($_+1:-1).")", last
       if $input(0:$_-1)->sumover==$input($_+1:-1)->sumover; # Found equilibrium
    }
    say "Output: $result";
```



[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/athanasius/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/athanasius/raku/ch-2.raku)

The monk shares a really interesting take on the problem, computing the two side-list sums at the beginning of the search and then updating the values at each step as we walk the list from left-to-right.

The bookkeeping is straightforward: as the index is advanced we are focused on the three values: at the index, immediately preceeding the index, and immediately following. At each shift the values of the summed side-lists change acording to a strict pattern: the previosly examined index value is added to the left-side sum and the value of the new index element is subtracted from the right-hand sum. Practically the value added to the left list is accessed by looking at the value of the currect index minus one, obviating the need for a separate temporary holding variable.

```perl
    MAIN:
    {
        my @n = parse_command_line();

        printf "Input:  \@n = (%s)\n", join ', ', @n;

        my $index      = -1;
        my $left_sum   =  0;
        my $right_sum  =  0;
           $right_sum += $_ for @n[ 1 .. $#n ];

        for my $i (0 .. $#n)
        {
            if ($left_sum == $right_sum)
            {
                $index = $i;
                last;
            }

            $left_sum  += $n[ $i     ];
            $right_sum -= $n[ $i + 1 ] if $i < $#n;
        }

        print "Output: $index\n";
    }
```

[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/mattneleigh/perl/ch-2.pl)

Here Matthew gives a variation on the technique. Two sums are maintained as we work across the list by index, values are added to the let-hand total and subtracted from the right.

Of note the list ahead of us, of indices higher than the current position, is known as the "fore" list, and those behind our intrepid traversing iterator, in the wake of the transformation, the "aft". I like that terminology.


```perl
    sub calculate_equilibrium_index{

        # Can't have an equilibrium index if there
        # aren't at least three elements
        return(-1)
            if(scalar(@ARG) < 3);

        my $fore = 0;
        my $aft = $ARG[0];
        my $i = 1;

        # Compute the fore total
        for(2 .. $#ARG){
            $fore += $ARG[$_];
        }

        # Loop from 1 to ($#ARG - 1)
        while($i < $#ARG){
            if($aft == $fore){
                # Found an equilibrium index- return it
                return($i);
            }

            # Advance the index, adjusting the fore and
            # aft totals
            $aft += $ARG[$i];
            $fore -= $ARG[++$i];
        }

        # No equilibrium index found
        return(-1);

    }
```

[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/colin-crain/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/colin-crain/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Sign of the Four - Programming Excursions in Perl and Raku](https://colincrain.com/2022/04/17/sign-of-the-four/)

&nbsp;&nbsp;**blog writeup:**
[All Things in Balance - Programming Excursions in Perl and Raku](https://colincrain.com/2022/04/17/all-things-in-balance/)

For my own submission, I ended up solving the problem three ways. First, I worked across the list indices, summing and comparing array slices for the lists to the sides. This works well, but I couldn't help but think about the inefficiency of recomputing the side sums for every position. For a short list this is no problem, but ultimately squares the complexity as we touch every element for each new position considered. We saw several examples of this technique.

There had to be another way.

So I came on the idea of summing the entire list to start, and as we advance subtracting from this total and adding to a left-hand sum of elements already processed. We also saw this demonstrated. But this too necesitates traversing the entire list twice; once to construct the sum and then again to examine the positions.

Ultimately I came upom the idea that for every position, at equilibrium the side lists are equal to each other and further, we can calculate the sum they will arrive at. This will be the sum of the entire list, minus the element at the index, divided in half. There's no way, if the left position equals this value, that the right does not.

So we make a single traversal, and at each position we add the proeviously visited element to a accumulating sum of the left-hand list. From this we can compute a hypothetical whole-list sum by doubling it and adding the value of the index being visited.

This new value is then used as a hash key, associated to the index position that got us that result. When we have finished making a single complete traversal we have enough information to get the actual sum for the entire list, which we can then look up in our hash to find the hypothetical sum that matches up. If the lookup is successful we have an answer, and if it fails we know there is no equilibrium.

Not addressed is the idea that we can possibly have multiple equilibria, which can arise if we allow 0 and negative values, which as written are not excluded. Both solutions can be adapted for this possibility: the first by removing the short circuit and examining every position for a balance, recording all positive results, and the second by having the hash point to an array of results instead of a single scaler index.

Is removing the second traversal really worth the extra effort? Meh, I don't know. Working a list of 6.7 million elements it might add up. But it was a fun exercise, capitalizing on the idea that hash lookups are a small constant time operation insensitive to scaling.


```perl
    use List::Util qw( first sum );

    sub eq_direct {
    ## exhaustive traversal, re-summing side-lists
        return (first { sum(@_[0..$_-1]) == sum(@_[$_+1..$#_]) } (1..$#_-1)) // -1;
    } ;

    sub eq_linear (@list) {
    ## single-pass continuous summing with lookup
        my %sums;
        my $total = $list[0];
        for (1..$#list-1) {
            $sums{ 2 * $total + $list[$_] } = $_;
            $total += $list[$_];
        }
        $total += $list[-1];
        return $sums{$total} // -1
    }
```

[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/bruce-gray/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/bruce-gray/raku/ch-2.raku), [Yabasic](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/bruce-gray/yabasic/ch-2.yab)


&nbsp;&nbsp;**blog writeup:**
[TWC 160: Mystic/Math Balance | Bruce Gray](http://blogs.perl.org/users/bruce_gray/2022/04/twc-160-mysticmath-balance.html)

Looking through all the solutions, it seems Bruce did come up with this single-pass method for his Raku solution, which for me at least is nice to see. I thought it was cool. However for his Perl solution he does not do this, providing us an exciting alternative.

Exciting I say!

Do I have your attention now? Good. So, he creates two lists of partial sums. In the first, he works left-to-right adding another value and listing the new result. In the *second* list, however, he counts downward from the total sum one element at a time, starting at the first element. Then, at the end, he compares the two lists index-by-index, and if the values match we have found an equilibrium point.

The advantages of this technique is that it can find all points when an equilibrium is reached.

And when can that happen? Only if we allow negative numbers, or in certain rather boring cases zeros. I make note that it doesn't seem that anyone else much addressed the idea that multiple equilibria could even exist. Most solutions stop at the first example, but my hash example as written will overwrite and find the *last* example.

I don't see this as too much a problem, really, as the challenge definition isn't very detailed. But no, negative numbers are very much not excluded, so multiple equilibria can certainly arise, as Bruce demonstrates.

To get his results Bruce used the `reductions` function from `List::Util`, which applies a function block successively to each item in an input list, returning a list of the state of an accumulator at each step. This creates a new list as a running total, like

(*a*, *a*+*b*, *a*+*b*+*c*, ... )

so for the list

(1, 3, 5, 7, 9)

we create the new list

(1, 4, 9, 16, 25)

To compute  the second list however, working downward from the other side, we need to get more creative. We perform the same reduction operation, only starting with the input reversed, so we're adding elements from the end and going towards the start. To compare the two lists, though, we need them aligned so we need to reverse the result again.

For the example above, we end up with

(25, 24, 21, 16, 9)

and as you can see at index `[3]` we have the value 16 in both, which is the equilibrium point as

1 + 3 + 5 = 9

Bruce's function, `eq_index()`, returns a list of all indices at valid equilibrium points.

```perl
    use List::Util   qw<sum0 reductions>;

    sub eq_index (@list) {
        my @x =         reductions { $a + $b }         @list;
        my @y = reverse reductions { $a + $b } reverse @list;
        return grep { $x[$_] == $y[$_] } keys @x;
    }
```


[**Olivier Delouya**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/olivier-delouya/perl/ch-2.pl)

Finally,  Olivier gives us a unusual mix of a program, blurring the boundaries of Perl and the shell. Invoked in the shell a function is defined in that language in Perl. Then the Perl interpreter is called to run instances of the function as one-liners.

What a profoundly weird way to go about this. But he must know that.


```bash
    #!/bin/bash

    equilibrium='@A=eval($a); $N=scalar(@A); die "Not enough element" if($N < 3); foreach my $i (1..$N-1) { $left=$right=0; map {$left += $_} @A[0..$i-1]; map {$right += $_} @A[$i+1..$N]; die "equilibrium index is $i" if($left == $right); }; print "no equilibrium index"; '

    perl -se "$equilibrium" -- -a="(1,2,3,2,1)"

    perl -se "$equilibrium" -- -a="(1,2,3,2,10)"

    perl -se "$equilibrium" -- -a="(1,2,7,9,10)"

    perl -se "$equilibrium" -- -a="(1,2)"
```



## Blogs and Additional Submissions in Guest Languages for Task 2:

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/adam-russell/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Prolog](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/adam-russell/prolog/ch-2.p)


&nbsp;&nbsp;**blog writeup:**
[Four is Equilibrium — Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/04/17)

&nbsp;&nbsp;**blog writeup:**
[Four is Equilibrium — Prolog — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/04/17)


[**Ali Moradi**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/deadmarshal/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[C++](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/deadmarshal/cpp/ch-2.cpp), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/deadmarshal/lua/ch-2.lua), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/deadmarshal/pascal/ch2.pas), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/deadmarshal/raku/ch-2.raku)


[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/arne-sommer/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/arne-sommer/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[The Magic Equilibrium with Raku and Perl](https://raku-musings.com/magic-equilibrium.html)



[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/dave-jacoby/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Does That Make Friendship Equal Four?: Weekly Challenge #160 | Committed to Memory](https://jacoby.github.io/2022/04/12/does-that-make-friendship-equal-four-weekly-challenge-160.html)


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC160 - Four Is Magic - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/04/12/pwc160-four-is-magic/)

&nbsp;&nbsp;**blog writeup:**
[PWC160 - Equilibrium Index - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/04/13/pwc160-equilibrium-index/)


[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/jaldhar-h-vyas/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/jaldhar-h-vyas/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge: Week 160](https://www.braincells.com/perl/2022/04/perl_weekly_challenge_week_160.html)


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/james-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #160](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-160/james-smith)



[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/lubos-kolouch/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/lubos-kolouch/python/ch-2.py)


[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/peter-campbell-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Four is magic and Equilibrium Indices](https://pjcs-pwc.blogspot.com/2022/04/four-is-magic-and-equilibrium-indices.html)




[**PokGoPun**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/pokgopun/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/pokgopun/go/ch-2.go)





[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Javascript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/roger-bell-west/javascript/ch-2.js), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/roger-bell-west/kotlin/ch-2.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/roger-bell-west/lua/ch-2.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/roger-bell-west/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-160/roger-bell-west/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 160: Balancing Four is Magic](https://blog.firedrake.org/archive/2022/04/The_Weekly_Challenge_160__Balancing_Four_is_Magic.html)














------------------------------------------





---

<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>
<p> &nbsp; </p>

<center>
<h1 id="PWC160BLOGS">_________ THE BLOG PAGES _________</h1>
</center>


---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, by some miracle I somehow continue to maintain my bearings.**

**Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your Unquenchable *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC160BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *FOLLOW* these *BLOG* *LINKS*:

**( ...*don't think, trust your training, you're in the zone, just do it ...* )**


**Adam Russell**

 * [Four is Equilibrium — Perl — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/04/17) ( *Perl* )
 * [Four is Equilibrium — Prolog — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/04/17) ( *Prolog* )

**Alexander Pankoff**

 * [Challenge 160 Task #1 - No way around four](https://pankoff.net/pages/perl-weekly-challenge/challenge-160-task-1.html) ( *Perl* )
 * [Challenge 160 Task #2 - Steps to recovering the Equilibrium in your lists](https://pankoff.net/pages/perl-weekly-challenge/challenge-160-task-2.html) ( *Perl* )

**Andinus**

 * [Challenge 160](https://andinus.unfla.me/pwc/challenge-160/) ( *Raku* )

**Arne Sommer**

 * [The Magic Equilibrium with Raku and Perl](https://raku-musings.com/magic-equilibrium.html) ( *Perl & Raku* )

**Bruce Gray**

 * [TWC 160: Mystic/Math Balance | Bruce Gray](http://blogs.perl.org/users/bruce_gray/2022/04/twc-160-mysticmath-balance.html) ( *Perl & Raku* )

**Colin Crain**

 * [Sign of the Four - Programming Excursions in Perl and Raku](https://colincrain.com/2022/04/17/sign-of-the-four/) ( *Perl & Raku* )
 * [All Things in Balance - Programming Excursions in Perl and Raku](https://colincrain.com/2022/04/17/all-things-in-balance/) ( *Perl & Raku* )

**Dave Jacoby**

 * [Does That Make Friendship Equal Four?: Weekly Challenge #160 | Committed to Memory](https://jacoby.github.io/2022/04/12/does-that-make-friendship-equal-four-weekly-challenge-160.html) ( *Perl* )

**Flavio Poletti**

 * [PWC160 - Four Is Magic - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/04/12/pwc160-four-is-magic/) ( *Perl & Raku* )
 * [PWC160 - Equilibrium Index - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/04/13/pwc160-equilibrium-index/) ( *Perl & Raku* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 160](https://www.braincells.com/perl/2022/04/perl_weekly_challenge_week_160.html) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #160](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-160/james-smith) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 160: Four is Magic and Equilibrium Index](http://blogs.perl.org/users/laurent_r/2022/04/perl-weekly-challenge-160-four-is-magic-and-equilibrium-index.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 160: English equilibrium - Raku](https://fluca1978.github.io/2022/04/11/PerlWeeklyChallenge160.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 160: English equilibrium - PostgreSQL PL/Perl](https://fluca1978.github.io/2022/04/11/PerlWeeklyChallenge160.html#task1plperl) ( *PostgreSQL PL/Perl* )
 * [Perl Weekly Challenge 160: English equilibrium - PostgreSQL Pl/PgSQL](https://fluca1978.github.io/2022/04/11/PerlWeeklyChallenge160.html#task1plpgsql) ( *PostgreSQL Pl/PgSQL* )

**Peter Campbell Smith**

 * [Four is magic and Equilibrium Indices](https://pjcs-pwc.blogspot.com/2022/04/four-is-magic-and-equilibrium-indices.html) ( *Perl* )

**Roger Bell_West**

 * [RogerBW's Blog: The Weekly Challenge 160: Balancing Four is Magic](https://blog.firedrake.org/archive/2022/04/The_Weekly_Challenge_160__Balancing_Four_is_Magic.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 160](https://dev.to/simongreennet/weekly-challenge-160-3206) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 160 – W. Luis Mochán](https://wlmb.github.io/2022/04/11/PWC160/) ( *Perl* )
