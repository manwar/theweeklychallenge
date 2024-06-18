---
author:       Colin Crain
date:         2021-08-24T00:00:00
description:  "Colin Crain › Perl Weekly Review #124"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #124"
image:        images/blog/p5-review-challenge-124.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-123/).* )

Welcome to the Perl review for **Week 124** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

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

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-124/) or the summary [**recap**](/blog/recap-challenge-124/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC124TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC124TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC124BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC124TASK1}

# Happy Women Day
*Submitted by: Mohammad S Anwar*<br>
Write a script to print the Venus Symbol, international gender symbol for women. Please feel free to use any character.

```perl
    ^^^^^
   ^     ^
  ^       ^
 ^         ^
 ^         ^
 ^         ^
 ^         ^
 ^         ^
  ^       ^
   ^     ^
    ^^^^^
      ^
      ^
      ^
    ^^^^^
      ^
      ^
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/abigail/perl/ch-1.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/bruce-gray/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/colin-crain/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/james-smith/perl/ch-1.pl),
[**Jared Martin**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/jaredor/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/jo-37/perl/ch-1.pl),
[**kjetillll**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/kjetillll/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/laurent-rosenfeld/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/mattneleigh/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/perlboy1967/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/pete-houston/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/roger-bell-west/perl/ch-1.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/stuart-little/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/ulrich-rieke/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/wlmb/perl/ch-1.pl)


There were 21 submissions for the first task this past week. As expected we saw a wide range of interpretations to the directive, from the trivializing to quite involved scalable graphical constructions.

I don't think I have time to comment on the printed heredocs, and would prefer instead expend my efforts on those who have chosen to opt-in on making it interesting. I don't think we're going to see any clear stylistic categories arise either, and think perhaps the best way to proceed is to look through a cross-section of solutions in both the results and the code used to produce it, and see if we can string along a little narrative as we go. There's going, I feel, to be a lot of whimsy, which is not really the usual expectation from the shop floor.

Myself, I really enjoy these open-ended tasks, as I can always find some sufficiently involved interpretation to apply to keep me interested. I can see as well that some others most definitely got into the spirit of the things, which is heartening. I understand that open-ended design specs are generally to be disparaged, and rightly so — I have been personally abused by clients who apparently have had very specific ideas yet were lacking in skills to actually communicate them, or worse, the dreaded feature-creep of shifting, evolving requirements that waste time and ultimately leave everyone unhappy.

That said, at some early point in every process, someone is out there spitballing and just making stuff up. I'm quite familiar with being unceremoniously thrust into the position of designer so when required that's what I do, and have developed my own schemes for managing management when I think I have a good idea.

A bit of warning though: feature creep is still a nightmare, even if you yourself are responsible.

That said I wanted to spend some time with this one, so I did. YMMV.

## STARTING SMALL...
[**Jared Martin**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/jaredor/perl/ch-1.pl), and
[**kjetillll**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/kjetillll/perl/ch-1.pl)


[**Jared Martin**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/jaredor/perl/ch-1.pl)

Jared shared a trivial solution, but then brought us this gem:

```perl
    sub superlazy {
        binmode(STDOUT,"utf8");
        return "\x{2640}";
    }
```

```
    ♀︎
```

This may, by a more cynical person, be dismissed as low effort, but to me it's funny. It's not how *much* work is done, but the *quality* of that work.

[**kjetillll**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/kjetillll/perl/ch-1.pl)

kjetillll takes the trivial interpretation to a logical extreme, and in the process makes it far, far more interesting. Given the directive "print the Venus symbol", they choose not to print a symbol *like* the example, but rather to use the command-line utility `curl` to fetch the *literal example* from the Weekly Challenge web page and print *that* instead. If you're going to be overly literal, you might as well go through with the effort to do it right. Bravo.

Note the nice use of the `qx()` construction, which I find much more readable than back-ticks.

```perl
    print qx(curl -si https://theweeklychallenge.org/blog/perl-weekly-challenge-124/)=~m|<code>([\s^]+)</code>| ? $1 : ''
```

## ENCODE and SECRET AWAY THE TRUTH
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/bruce-gray/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/polettix/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/laurent-rosenfeld/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/perlboy1967/perl/ch-1.pl), and
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/roger-bell-west/perl/ch-1.pl)


Semiotics is the study of symbols and their meanings, which are often multiple and overlapping, more poetic than factual. Symbols have meaning because we want them to, and outside the realm of human psychology, a star is a burning ball of gas and the moon a rock hurtling through the sky. If we didn't know about them they would still be there, and act exactly the same, irradiating the planet with energy and sloshing the oceans to make the tides.

The symbol we are using today has multiple meanings, as Venus, the Roman god of Love, Beauty and Fertility; and as the Female in general, and all that idea encompasses. But it has other meanings, and different meaning to different people. In Perl it might be [a numification operator](https://metacpan.org/dist/perlsecret/view/lib/perlsecret.pod#Venus): `0+`

[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/bruce-gray/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/bruce-gray/raku/ch-1.raku), [Svg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/bruce-gray/svg/ch-1.svg)

Perl, usually derided but occasionally paraded as a "write-only language" and "line noise", is naturally well adapted to obfuscation and mystery. And with mystery comes the promise of secrets revealed. Here Bruce takes a hexadecimal number and performs a magic trick.

```perl
    my @lines = map { (reverse sprintf '%b', $_) =~ tr/01/ \N{FEMALE SIGN}/r }
                qw<0 248 260 514 1025 32>;

    say for @lines[split '', 0x2BDB34EABC62D3];
```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/perlboy1967/perl/ch-1.pl)

Using a different spell, but to the same end, here is Niels' effort. Compact, no?

```perl
    use Compress::Zlib;
    use MIME::Base64;

    print uncompress
          decode_base64
          q/eJxTUFBQiAMBLhBDAQRATAgLzIYxyeYgG4ZsB5LFcBF0GrsKANslHl8=/;
```



[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/roger-bell-west/perl/ch-1.pl)

**additional languages:**
[Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/roger-bell-west/rust/ch-1.rs)

Roger builds off the vertical symmetry down the central axis, to encode half-lines as offset values that are then reversed and prepended to make the circle and the cross.

```perl
    my $char='^';
    my @shape=(3,-3,-4,-5,-5,-5,-5,-5,-4,-3,3,1,1,1,3,1,1);
    my $mx=max(map {abs($_)} @shape);

    foreach my $row (@shape) {
      my $line;
      if ($row>0) {
        $line=$char x $row;
      } else {
        $line=(' ' x -$row).$char;
      }
      my $ll=length($line);
      if ($ll <= $mx) {
        $line .= ' ' x ($mx-$ll+1);
      }
      my $f=reverse $line;
      substr($f,-1)='';
      print "$f$line\n";
    }
```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/laurent-rosenfeld/perl/ch-1.pl)

**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/laurent-rosenfeld/awk/ch-1.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/laurent-rosenfeld/bash/ch-1.sh), [Bourne-shell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/laurent-rosenfeld/bourne-shell/ch-1.sh), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/laurent-rosenfeld/c/ch-1.c), [D](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/laurent-rosenfeld/d/ch-1.amx), [Dart](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/laurent-rosenfeld/dart/ch-1.dart), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/laurent-rosenfeld/go/ch-1.go), [Io](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/laurent-rosenfeld/io/ch-1.io), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/laurent-rosenfeld/java/ch-1.java), [Julia](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/laurent-rosenfeld/julia/ch-1.julia), [Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/laurent-rosenfeld/kotlin/ch-1.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/laurent-rosenfeld/lua/ch-1.lua), [Nim](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/laurent-rosenfeld/nim/ch-1.nim), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/laurent-rosenfeld/pascal/ch-1.p), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/laurent-rosenfeld/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/laurent-rosenfeld/raku/ch-1.raku), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/laurent-rosenfeld/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/laurent-rosenfeld/rust/ch-1.rs), [Scala](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/laurent-rosenfeld/scala/ch-1.scala), [Sed](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/laurent-rosenfeld/sed/ch-1.sed), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/laurent-rosenfeld/tcl/ch-1.tcl), [Zig](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/laurent-rosenfeld/zig/ch-1.zig)

With something akin to a [Huffman encoding](https://en.wikipedia.org/wiki/Huffman_coding), Laurent defines a collection of tokens and then a map for assembling them into the desired form.

```perl
    my $bar = "   ^^^^^";
    my @pairs = ("  ^     ^", " ^       ^", "^         ^");
    my $single = "     ^";

    say $bar;
    say join "\n", @pairs[0, 1, 2, 2, 2, 2, 2, 1, 0];
    say $bar;
    say $single for 1..3;
    say $bar;
    say $single for 1..2;
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/polettix/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/polettix/raku/ch-1.raku)

Evals within evals.

Taken as itself a symbol of the worlds concealed within the world, with Flavio's submission the mystery becomes positively Eleusinian, which is an appropriate tie-in through Persephone, to fecundity, and ultimately back to Venus herself.

Just beautiful. I have nothing more to say.

```perl
    eval eval '"'.


                 ('`'|'/').('['^
              '+').('`'|'%').('`'|
            '.').'\\'.'$'.('`'|'&').
           ','."'".'<'."'"."\,".'\\'.
         '$'.('^'^('`'|'.'))."\;".'\\'.
        '$'.('['^'#').'='.'<'.'\\'.'$'.(
       '`'|'&').'>'.('`'|'&').('`'|'/').(
      '['^')').('{'^        '[').('^'^('`'
      |'/')).','.              ('^'^(('`')|
     ',')).';'.(                '['^"\+").(
    '['^"\)").(                  '`'|"\)").(
    '`'|'.').(                    '['^'/').(
    '{'^'[').(                    '['^"\(").
    '\\'."\{".                    '\\'.'\\'.
    ('{'^'(').                    '\\'."\}".
    '\\'."\{".                    "\#".'\\'.
    '}'.("\`"|                    "'").('['^
    ')').("\{"^                   '[').('['^
    ',').("\`"|                  '(').('`'|
     ')').(('`')|               ',').("\`"|
      '%').'<'.''.             '\\'."\$".(
       '`'|'&').('>').     ';'.('['^'+').(
       '['^')').('`'|')').('`'|'.').('['^
        '/').'\\'.'"'.'\\'.'\\'.('`'|'.'
          ).'\\'.'"'.('!'^'+').'"';$:=
           '.'^'~';$~='@'|'(';$^=')'^
             '[';$/='`'|'.';$,='('^
                '}';$\='`'|"\!";
                   $:=')'^'}'
                   ;$~=('*')|
                   '`';$^='+'
                   ^('_');$/=
                   '&'|'@';$,
                   ='['&"\~";
                   $\=','^'|'
                   ;$:=('.')^
         '~';$~='@'|'(';$^=')'^"\[";$/=
         '`'|'.';$,='('^'}';$\='`'|'!';
         $:=')'^'}';$~='*'|'`';$^="\+"^
         '_';$/='&'|'@';$,='['&"\~";$\=
         ','^'|';$:='.'^'~';$~='@'|'(';
         $^=')'^'[';$/='`'|'.';$,="\("^
                   '}';$\='`'
                   |('!');$:=
                   ')'^'}';$~
                   ='*'|"\`";
                   $^='+'^'_'
                   ;$/=('&');

```

Ok fine, fine. Those interested in whatever it is that's going on here are referred to the documentation on [`Acme::EyeDrops`](https://metacpan.org/pod/Acme::EyeDrops) and [Flavio's own writeup on the subject](https://github.polettix.it/ETOOBUSY/2021/08/04/pwc124-happy-women-day/).

## LINE-by-LINE
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/cheok-yin-fung/perl/ch-1.pl), and
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/ulrich-rieke/perl/ch-1.pl)


Stepping towards the abstract we started to look at the symbol not as a rigidly defined shape but as a collection of marks separated by space, drawn out as lines. The relationships define what we see, not their their fixed dimensions.


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/ulrich-rieke/perl/ch-1.pl)

In Ulrich's code we can clearly that something is being constructed from raw materials in a systematic manner, building up the edifice, brick by brick.

```perl
    my $edge = 5 ;
    my $internal = 5 ;
    print " " x $edge ;
    say "^" x $internal ;
    for my $i (1 .. 3 ) {
      $edge-- ;
      if ( $i > 1 ) {
          $internal += 2 ;
      }
      say " " x $edge . "^" . " " x $internal . "^" ;
    }
    for (1 .. 4 ) {
      say " " x $edge . "^" . " " x $internal . "^" ;
    }
    for ( 1 .. 2 ) {
      $edge++ ;
      $internal -= 2 ;
      say " " x $edge . "^" . " " x $internal . "^" ;
    }
    $edge++ ;
    say " " x $edge . "^" x 5 ;
    $edge += 2 ;
    for (1 .. 3 ) {
      say " " x $edge . "^" ;
    }
    $edge -= 2 ;
    say " " x $edge . ( "^" x 5 ) ;
    $edge += 2 ;
    for (1 .. 2 ) {
      say " " x $edge . "^" ;
    }
```

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/cheok-yin-fung/perl/ch-1.pl)

CY gives us a similar approach, with a scaled selection of components that are selected from some input parameters. Here is a sampling to give you the idea. Some are quite complex.

```perl

    sub tiny_upper {
        my $height = $_[0];
        my $width = $_[1];
        print " " x (($width-1)/2), "O", "\n";
    }

    sub small_upper {
        my $height = $_[0];
        my $width = $_[1];
        print " /*\\", "\n";
        print " \\_/", "\n";
    }

    sub large_upper {
        my $height = $_[0];
        my $width = $_[1];
        print " " x 2, "*" x ($width-4) , "\n";

        for (1..$height/2 - 2) {
            print "*", " " x ($width-2), "*", "\n";
        }
        print " " x 2, "*" x ($width-4) , "\n";
    }
```




## GRAPHICS PRIMITIVES in ASCII
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/colin-crain/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/dave-jacoby/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/james-smith/perl/ch-1.pl), and
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/mattneleigh/perl/ch-1.pl)


>***"If you give an robot a circle, it will have a circle. If you teach an robot how to *draw* a circle you will have a circle-drawing robot."***



[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/jaldhar-h-vyas/perl/ch-1.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/jaldhar-h-vyas/raku/ch-1.raku)

Jaldar gives us two routines, `circle()` and `cross()`, that when run sequentially produce, as might be expected, a circle drawn above a cross.

The circle is constructed using a variation of the basic circle equation from analytical geometry:

*x*<sup>2</sup> + *y*<sup>2</sup> = *r*<sup>2</sup> .

The generative code:

```perl
    sub circle {
        my ($radius, $c) = @_;
        my $widthScale = 6;
        my $width = 3 + int(0.5 + $widthScale * $radius);
        my $radius2 = $radius ** 2;

        for my $y (-$radius .. $radius) {
            my $x = (0.5 + ($widthScale * int($radius2 - $y ** 2)) ** 0.5);
            if ($x < 2) {
                $x = 2;
            }
            say ' ' x (($width / 2) - $x), $c, ' ' x (2 * $x - 4), $c;
        }
    }
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/dave-jacoby/perl/ch-1.pl)

Dave draws us a fixed size shape on a 40x50 character canvas. There's a lot of tuning to make it look better, which is appreciated. A little fiddling with the spacing produces a pretty well dimensioned circle, compensating for the fact that drawn ASCII characters are oblong rather than square.

```perl
    my @venus;
    for my $i ( 0 .. 50 ) {
        for my $j ( 0 .. 40 ) {
            $venus[$i][$j] = $clear;
        }
    }
    my $maxx = 0;
    for my $d ( 0 .. 360 ) {
        my $r   = deg2rad($d);
        my $len = 11;
        my $x   = 19 + int xPos( $len, $r );
        my $y   = 19 - int yPos( $len, $r );
        $venus[$x][$y] = $filled;
        $maxx = $x > $maxx ? $x : $maxx;
    }

    for my $i ( 0 .. 10 ) {
        $venus[ $maxx + $i ][19] = $filled;
        $venus[ $maxx + 5 ][ 24 - $i ] = $filled;

    }

    for my $row (@venus) {
        say join '', $row->@*;
    }

    sub deg2rad ($degrees) {
        return ( $degrees / 180 ) * pi;
    }

    sub xPos ( $len = 10, $rad = 0 ) {
        return $len * sin $rad;
    }

    sub yPos ( $len = 10, $rad = 0 ) {
        return $len * cos $rad;
    }
```


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/james-smith/perl/ch-1.pl)

**additional languages:**
[Logo](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/james-smith/logo/ch-1.logo)

If called without arguments, James' script will print the trivial task from an encoded routine. That's good and all, but he also presents us with a scalable routine.

One thing though: James makes the curious decision to uncouple the dimensions of his circle and cross, allowing us to draw bobble-headed Venus shapes and other oddities, as we systematically torture the algorithm with more extreme differences.

```
          ^^^^^^^
        ^^       ^^
      ^^           ^^
     ^               ^
    ^                 ^
   ^                   ^
   ^                   ^
  ^                     ^
  ^                     ^
 ^                       ^
 ^                       ^
 ^                       ^
 ^                       ^
 ^                       ^
 ^                       ^
 ^                       ^
  ^                     ^
  ^                     ^
   ^                   ^
   ^                   ^
    ^                 ^
     ^               ^
      ^^           ^^
        ^^       ^^
          ^^^^^^^
             ^
             ^
           ^^^^^
             ^
             ^
```

```perl
    my @venus;
    for my $i ( 0 .. 50 ) {
        for my $j ( 0 .. 40 ) {
            $venus[$i][$j] = $clear;
        }
    }
    my $maxx = 0;
    for my $d ( 0 .. 360 ) {
        my $r   = deg2rad($d);
        my $len = 11;
        my $x   = 19 + int xPos( $len, $r );
        my $y   = 19 - int yPos( $len, $r );
        $venus[$x][$y] = $filled;
        $maxx = $x > $maxx ? $x : $maxx;
    }

    for my $i ( 0 .. 10 ) {
        $venus[ $maxx + $i ][19] = $filled;
        $venus[ $maxx + 5 ][ 24 - $i ] = $filled;

    }

    for my $row (@venus) {
        say join '', $row->@*;
    }

    sub deg2rad ($degrees) {
        return ( $degrees / 180 ) * pi;
    }

    sub xPos ( $len = 10, $rad = 0 ) {
        return $len * sin $rad;
    }

    sub yPos ( $len = 10, $rad = 0 ) {
        return $len * cos $rad;
    }
```


[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/mattneleigh/perl/ch-1.pl)

Matthew presents us with a another systematic, methodical solution that walks us through the process in a well-documented series of steps. In case anyone reading hasn't figured it out, I like that. The algorithm scales well; of course tradeoffs in the low resolution of the images are most apparent for small radii, but up above 8 things stabilize and we're mostly home-free.

Of note is the carefully constructed padding around his drawn symbol, which makes it more the presentation piece that is is.

```


    ^^^
   ^   ^
  ^     ^
  ^     ^
  ^     ^
   ^   ^
    ^^^
     ^
   ^^^^^
     ^
     ^
     ^


```

```perl
    sub generate_text_circle{
        my $width = shift();
        my $character = shift();

        my @lines;
        my $radius;
        my $x;
        my $y;
        my $d;
        my $dA;
        my $dB;

        return(undef) unless($width >= 2);

        $radius = round($width / 2) - 2;

        # Establish a blank canvas
        push(@lines, " " x $width);
        $y = $width;
        while($y--){
            push(@lines, $lines[0]);
        }

        # Re-use this to center the circle...
        $width = round($width / 2);

        # Plot a circle on it
        $x = 0;
        $y = $radius;
        $d = 5 - 4 * $radius;
        $dA = 12;
        $dB = 20 - 8 * $radius;
        while($x <= $y){
            # Draw part of the circle
            substr(
                $lines[round($width - $y)], round($width - $x), 1
            ) = $character;
            substr(
                $lines[round($width - $y)], round($width + $x), 1
            ) = $character;
            substr(
                $lines[round($width + $y)], round($width - $x), 1
            ) = $character;
            substr(
                $lines[round($width + $y)], round($width + $x), 1
            ) = $character;

            substr(
                $lines[round($width - $x)], round($width - $y), 1
            ) = $character;
            substr(
                $lines[round($width - $x)], round($width + $y), 1
            ) = $character;
            substr(
                $lines[round($width + $x)], round($width - $y), 1
            ) = $character;
            substr(
                $lines[round($width + $x)], round($width + $y), 1
            ) = $character;

            if($d < 0){
                $d += $dA;
                $dB += 8;
            } else{
                $y--;
                $d += $dB;
                $dB += 16;
            }
            $x++;
            $dA += 8;
        }

        return(@lines);

    }
```

[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/colin-crain/perl/ch-1.pl)

There was a time in my life where such terms as "blitting to the frame buffer" and "z-index" were a lot more... familiar. I do still remember a few things from those days, however, so when presented with this challenge the first thing that came to mind was: "Well how about we *draw* it?"

A short while later I had dug out Bresenham's circle algorithm, which is designed to very quickly draw a circle in pixels on a screen by calculating a 45° wedge and then flipping, rotating and transforming it 8 ways to draw the whole shape. It's a neat trick, on top of  an extremely fast compromise technique to make snap decisions about whether to activate pixels where the theoretical circle line falls between them.

Another general rectangle tool and we had ourselves some graphics primitives. I borrowed another idea from graphics programming and made a frame buffer of sorts, being a 2-dimensional list of lists to be our pixels.

I wanted to make a scalable shape that would adapt itself pleasingly to any size. As such I needed to adjust the font weight — the thickness of the lines — to match the rest of the overall scaling. I decided that because of the way the cicle algorithm decided which pixels to include in the drawing that the best-looking way to construct a thick circle was to draw concentric circles tightly inside each other, rather than somehow enlarging the pen mark. This spread out irregularities instead of compounding them, giving a dithered effect and some additional, unusual texture to the ring.

That gave me the idea to add noise.

The thing about Computer Generated Imagery is that it can easily be too clean, too perfect. Real things aren't perfect. So the solution is you add some noise to make it look more real.

I though of the huge Women's march we had here a few years ago, before the bad times. Hundreds of thousands of women descended on Washington DC in 2017, and coordinated marches brought out millions worldwide. I thought of all these people gathering, with banners and funny hats, so I decided to draw that, a gathering of people forming a Venus symbol. This required the introduction of a couple of additional characters, so we now have three players: little Venuses, flags and a dust representing other random stuff. I see it as the folks are wandering in from the lower right to form the image.


```perl

                                                    ♀︎ .
                                          ⚐︎︎ ♀︎ ♀︎ ⚐︎︎ ⚐︎︎ ⚐︎︎ ♀︎ ♀︎             . .
                                    ♀︎ ⚐︎︎ ♀︎ ♀︎ ⚐︎︎ ♀︎ ⚐︎︎ ♀︎ ♀︎ ⚐︎︎ ⚐︎︎ ♀︎ ♀︎
                                ⚐︎︎ ⚐︎︎ ♀︎ ⚐︎︎ ⚐︎︎ ⚐︎︎ ♀︎ ♀︎ ⚐︎︎ ⚐︎︎ ⚐︎︎ ♀︎ ⚐︎︎ ⚐︎︎ ♀︎ ♀︎ ⚐︎︎ . .   .
                          ♀︎ ⚐︎︎ ♀︎ ♀︎ ♀︎ ⚐︎︎ ♀︎ ⚐︎︎ ⚐︎︎ ♀︎ ♀︎ ⚐︎︎ ⚐︎︎ ♀︎ ⚐︎︎ ⚐︎︎ ♀︎ ⚐︎︎ ⚐︎︎ ♀︎ ⚐︎︎ ♀︎ ♀︎
                          ⚐︎︎   ♀︎ ♀︎ ⚐︎︎ ♀︎ ♀︎ ♀︎ ♀︎ ⚐︎︎ ⚐︎︎ ⚐︎︎ ⚐︎︎ ♀︎ ♀︎ ♀︎ ♀︎ ♀︎ ♀︎ ♀︎ ⚐︎︎   ♀︎ ♀︎ . .
                        ⚐︎︎ ♀︎ ♀︎ ♀︎   ⚐︎︎ ♀︎ ⚐︎︎ ♀︎ ⚐︎︎ ♀︎ ♀︎ ⚐︎︎ ♀︎ ♀︎ ⚐︎︎ ⚐︎︎ ⚐︎︎   ♀︎   ♀︎ ⚐︎︎ ♀︎ ⚐︎︎
                      ♀︎ ♀︎   ⚐︎︎ ♀︎ ♀︎ ♀︎ ⚐︎︎ ♀︎ ♀︎               ♀︎ ♀︎ ⚐︎︎ ⚐︎︎ ♀︎ ♀︎ ♀︎   ⚐︎︎ ♀︎ .   .
                  ♀︎ ♀︎ ⚐︎︎ ♀︎ ♀︎ ⚐︎︎   ♀︎ ⚐︎︎ ⚐︎︎     ♀︎           ♀︎     ⚐︎︎ ⚐︎︎ ♀︎ ♀︎ ♀︎ ⚐︎︎ ♀︎ ⚐︎︎ ♀︎       .   .
                  ⚐︎︎ ♀︎   ⚐︎︎ ⚐︎︎   ⚐︎︎ ⚐︎︎ ♀︎ ♀︎                           ⚐︎︎ ♀︎   ♀︎ ♀︎ ♀︎ ♀︎ ⚐︎︎
              ♀︎ ⚐︎︎ ⚐︎︎   ⚐︎︎ ♀︎ ♀︎ ⚐︎︎ ♀︎ ♀︎   ♀︎                           ♀︎ ⚐︎︎ ⚐︎︎   ♀︎ ⚐︎︎   ⚐︎︎ ⚐︎︎ ♀︎
              ⚐︎︎   ♀︎ ♀︎ ⚐︎︎ ♀︎ ⚐︎︎ ⚐︎︎                                   ♀︎   ⚐︎︎ ♀︎   ♀︎ ⚐︎︎ ♀︎   ♀︎     . .
              ⚐︎︎ ♀︎ ⚐︎︎ ♀︎   ♀︎ ⚐︎︎ ♀︎                                         ⚐︎︎ ⚐︎︎ ♀︎ ♀︎ ⚐︎︎ ⚐︎︎ ♀︎   ♀︎   .
            ⚐︎︎ ⚐︎︎ ♀︎ ♀︎ ⚐︎︎ ♀︎ ⚐︎︎ ♀︎     ♀︎                                     ♀︎ ⚐︎︎ ♀︎ ♀︎ ♀︎ ⚐︎︎ ♀︎ ♀︎ . ♀︎     .   .
          ♀︎ ⚐︎︎ ♀︎ ⚐︎︎ ⚐︎︎ ⚐︎︎ ♀︎     ♀︎                                             ⚐︎︎ ⚐︎︎ ♀︎ ⚐︎︎ ♀︎ ♀︎ .         .
          ⚐︎︎ ⚐︎︎ ⚐︎︎ ⚐︎︎   ♀︎ ♀︎                                                   ♀︎ ⚐︎︎ ♀︎ ⚐︎︎ ⚐︎︎ ♀︎ ⚐︎︎
          ⚐︎︎ ⚐︎︎ ♀︎ ♀︎ ⚐︎︎ ♀︎                                                       ♀︎ ♀︎ ⚐︎︎ ♀︎ ⚐︎︎ ♀︎               .
          ⚐︎︎ ⚐︎︎ ⚐︎︎ ♀︎ ♀︎ ♀︎                                                       ♀︎ ⚐︎︎ ♀︎ ⚐︎︎ ⚐︎︎ ⚐︎︎     .
        ⚐︎︎ ♀︎ ♀︎ ♀︎ ♀︎ ♀︎                                                           ♀︎ ♀︎ ⚐︎︎ ♀︎ ♀︎ ♀︎     .
        ⚐︎︎ ♀︎ ⚐︎︎ ⚐︎︎ ♀︎ ⚐︎︎ ♀︎ ♀︎                                                       ⚐︎︎ ♀︎ ♀︎ ♀︎ ♀︎ ♀︎     . .   .
        ♀︎ ♀︎ ♀︎ ♀︎ ⚐︎︎ ⚐︎︎                                                           ⚐︎︎ ♀︎ ⚐︎︎ ♀︎ ⚐︎︎ ⚐︎︎         .
      ♀︎ ⚐︎︎ ⚐︎︎ ♀︎ ⚐︎︎ ⚐︎︎ ♀︎ ♀︎                                                         ⚐︎︎ ♀︎ ♀︎ ♀︎ ⚐︎︎ ⚐︎︎   ♀︎                 .
      ♀︎ ⚐︎︎ ♀︎ ⚐︎︎ ♀︎ ♀︎ ⚐︎︎ ♀︎                                                         ♀︎ ♀︎ ⚐︎︎ ⚐︎︎ ♀︎ ♀︎   ♀︎
        ⚐︎︎ ⚐︎︎ ⚐︎︎ ⚐︎︎ ♀︎ ⚐︎︎                                                           ⚐︎︎ ♀︎ ⚐︎︎ ⚐︎︎ ♀︎ ⚐︎︎     ♀︎   .
        ⚐︎︎ ⚐︎︎ ⚐︎︎ ♀︎ ♀︎ ♀︎                                                           ♀︎ ⚐︎︎ ⚐︎︎ ⚐︎︎ ⚐︎︎ ♀︎
      ♀︎   ⚐︎︎ ♀︎ ♀︎ ♀︎ ⚐︎︎ ⚐︎︎                                                       ⚐︎︎ ♀︎ ♀︎ ⚐︎︎ ♀︎ ♀︎ .       .
          ⚐︎︎ ♀︎ ♀︎ ⚐︎︎ ♀︎ ♀︎                                                     ♀︎ ♀︎ ⚐︎︎ ⚐︎︎ ♀︎ ♀︎ ⚐︎︎     .     .
          ♀︎ ♀︎ ⚐︎︎ ⚐︎︎ ♀︎ ⚐︎︎ ♀︎   ♀︎                                             ♀︎ ⚐︎︎ ⚐︎︎   ⚐︎︎ ♀︎ ⚐︎︎ ♀︎         . .
          ♀︎ ♀︎ ⚐︎︎ ⚐︎︎ ♀︎ ⚐︎︎ ♀︎   ♀︎                                             ♀︎ ♀︎ ⚐︎︎ ♀︎ ⚐︎︎ ⚐︎︎ ♀︎ ♀︎ . . .   .
            ♀︎ ♀︎ ♀︎ ♀︎ ♀︎ ♀︎ ⚐︎︎ ♀︎                                             ⚐︎︎ ⚐︎︎ ⚐︎︎ ♀︎ ♀︎ ♀︎ ⚐︎︎     .
              ⚐︎︎ ⚐︎︎ ⚐︎︎ ⚐︎︎ ♀︎ ⚐︎︎ ⚐︎︎                                           ♀︎ ⚐︎︎ ♀︎ ♀︎ ♀︎ ♀︎ ♀︎ . ♀︎   .
            ♀︎ ⚐︎︎   ♀︎ ⚐︎︎ ⚐︎︎ ♀︎ ⚐︎︎ ⚐︎︎                                       ⚐︎︎ ♀︎ ♀︎ ⚐︎︎ ⚐︎︎ ♀︎   ♀︎ .
              ♀︎ ♀︎ ⚐︎︎   ⚐︎︎ ♀︎ ♀︎ ♀︎ ⚐︎︎   ♀︎                               ⚐︎︎ ⚐︎︎   ♀︎ ♀︎   ⚐︎︎ ⚐︎︎ . . .         .     .
                  ⚐︎︎ ♀︎ ♀︎ ⚐︎︎ ♀︎   ⚐︎︎ ⚐︎︎ ♀︎                             ♀︎ ⚐︎︎ ♀︎ ⚐︎︎ ⚐︎︎   ♀︎ ♀︎     .         .
                    ⚐︎︎ ♀︎ ♀︎ ⚐︎︎ ♀︎ ♀︎ ⚐︎︎ ⚐︎︎ ♀︎                       ⚐︎︎ ♀︎ ⚐︎︎ ♀︎ ♀︎ ♀︎   ⚐︎︎ ⚐︎︎   ♀︎         .
                  ♀︎   ⚐︎︎ ♀︎   ⚐︎︎ ♀︎ ⚐︎︎ ⚐︎︎ ♀︎ ⚐︎︎ ⚐︎︎ ♀︎ ♀︎           ⚐︎︎ ♀︎ ♀︎ ♀︎ ♀︎ ⚐︎︎ ♀︎   ⚐︎︎ ♀︎ ♀︎ .   .
                        ⚐︎︎ ⚐︎︎ ♀︎ ⚐︎︎ ♀︎ ⚐︎︎ ♀︎ ♀︎ ⚐︎︎ ⚐︎︎ ⚐︎︎ ♀︎ ⚐︎︎ ⚐︎︎ ♀︎ ♀︎ ⚐︎︎ ⚐︎︎   ♀︎   ♀︎ ⚐︎︎ ♀︎ ⚐︎︎ ♀︎     .         .
                          ⚐︎︎ ♀︎ ⚐︎︎ ⚐︎︎ ⚐︎︎ ♀︎ ♀︎ ⚐︎︎ ⚐︎︎ ♀︎ ♀︎ ♀︎ ⚐︎︎ ♀︎ ⚐︎︎ ♀︎ ⚐︎︎ ♀︎ ⚐︎︎ ♀︎ ⚐︎︎ ♀︎ ⚐︎︎ ♀︎ ♀︎       .   .
                          ♀︎ ♀︎ ♀︎ ⚐︎︎ ⚐︎︎ ⚐︎︎ ⚐︎︎ ⚐︎︎ ⚐︎︎ ♀︎ ♀︎ ♀︎ ⚐︎︎ ⚐︎︎ ♀︎ ♀︎ ♀︎ ♀︎ ♀︎ ⚐︎︎ ⚐︎︎ ⚐︎︎ ♀︎   .         .         .
                                ♀︎ ♀︎ ⚐︎︎ ♀︎ ♀︎ ⚐︎︎ ⚐︎︎ ⚐︎︎ ♀︎ ⚐︎︎ ♀︎ ⚐︎︎ ⚐︎︎ ♀︎ ♀︎ ⚐︎︎ ♀︎ . . . ♀︎           .
                                    ⚐︎︎ ♀︎ ♀︎ ♀︎ ♀︎ ♀︎ ♀︎ ⚐︎︎ ⚐︎︎ ♀︎ ♀︎ ⚐︎︎ ⚐︎︎ . ♀︎     . .     . .
                                  ♀︎       ⚐︎︎ ♀︎ ⚐︎︎ ♀︎ ⚐︎︎ ♀︎ ♀︎ .                         .
                                          ⚐︎︎ ♀︎ ⚐︎︎ ♀︎ ⚐︎︎ ♀︎ ♀︎ ♀︎ ♀︎   .         . .     .
                                          ⚐︎︎ ⚐︎︎ ♀︎ ⚐︎︎ ⚐︎︎ ♀︎ ⚐︎︎ .     ♀︎     .     .
                                          ⚐︎︎ ♀︎ ⚐︎︎ ♀︎ ⚐︎︎ ♀︎ ⚐︎︎     . .     .               .
                                        ♀︎ ⚐︎︎ ♀︎ ♀︎ ♀︎ ⚐︎︎ ⚐︎︎ ♀︎ ♀︎               .
                                          ⚐︎︎ ⚐︎︎ ♀︎ ♀︎ ⚐︎︎ ♀︎ ⚐︎︎ ♀︎                   .
                                          ⚐︎︎ ⚐︎︎ ♀︎ ♀︎ ♀︎ ⚐︎︎ ♀︎ ♀︎ ♀︎   . .
                                          ♀︎ ♀︎ ⚐︎︎ ⚐︎︎ ♀︎ ♀︎ ♀︎         .       .       .
                                          ♀︎ ♀︎ ♀︎ ⚐︎︎ ♀︎ ♀︎ ♀︎ . .   . .     .               .
                                  ♀︎       ⚐︎︎ ⚐︎︎ ⚐︎︎ ♀︎ ♀︎ ♀︎ ⚐︎︎   ♀︎         ♀︎
                            ⚐︎︎ ⚐︎︎ ♀︎ ♀︎ ⚐︎︎ ⚐︎︎ ⚐︎︎ ♀︎ ♀︎ ♀︎ ⚐︎︎ ♀︎ ⚐︎︎ ♀︎ ♀︎ ⚐︎︎ ⚐︎︎ ♀︎ ⚐︎︎ ⚐︎︎ ♀︎ . .   .
                            ♀︎ ⚐︎︎ ⚐︎︎ ♀︎ ♀︎ ♀︎ ♀︎ ⚐︎︎ ⚐︎︎ ♀︎ ♀︎ ♀︎ ⚐︎︎ ♀︎ ⚐︎︎ ⚐︎︎ ⚐︎︎ ♀︎ ♀︎ ♀︎ ⚐︎︎ .
                            ♀︎ ⚐︎︎ ♀︎ ⚐︎︎ ♀︎ ♀︎ ⚐︎︎ ♀︎ ♀︎ ⚐︎︎ ⚐︎︎ ♀︎ ♀︎ ⚐︎︎ ♀︎ ⚐︎︎ ♀︎ ⚐︎︎ ⚐︎︎ ♀︎ ⚐︎︎ ♀︎ .               .
                            ♀︎ ♀︎ ⚐︎︎ ♀︎ ⚐︎︎ ⚐︎︎ ♀︎ ⚐︎︎ ⚐︎︎ ♀︎ ⚐︎︎ ⚐︎︎ ♀︎ ♀︎ ♀︎ ⚐︎︎ ♀︎ ⚐︎︎ ♀︎ ⚐︎︎ ⚐︎︎ ♀︎   .   .
                            ♀︎ ⚐︎︎ ⚐︎︎ ♀︎ ⚐︎︎ ⚐︎︎ ♀︎ ♀︎ ⚐︎︎ ♀︎ ♀︎ ♀︎ ♀︎ ⚐︎︎ ♀︎ ⚐︎︎ ⚐︎︎ ♀︎ ♀︎ ♀︎ ♀︎
                            ⚐︎︎ ⚐︎︎ ♀︎ ♀︎ ♀︎ ♀︎ ♀︎ ♀︎ ⚐︎︎ ⚐︎︎ ⚐︎︎ ♀︎ ♀︎ ♀︎ ♀︎ ⚐︎︎ ⚐︎︎ ⚐︎︎ ♀︎ ⚐︎︎ ⚐︎︎ . ♀︎
                            ♀︎ ⚐︎︎ ♀︎ ⚐︎︎ ♀︎ ♀︎ ⚐︎︎ ⚐︎︎ ⚐︎︎ ♀︎ ♀︎ ♀︎ ⚐︎︎ ♀︎ ⚐︎︎ ♀︎ ♀︎ ⚐︎︎ ⚐︎︎ ♀︎ ♀︎   ♀︎       .
                                  ♀︎       ♀︎ ♀︎ ♀︎ ⚐︎︎ ♀︎ ♀︎ ♀︎   ♀︎   ♀︎ ♀︎ ♀︎ .     .   .
                            ♀︎             ♀︎ ⚐︎︎ ⚐︎︎ ♀︎ ⚐︎︎ ⚐︎︎ ⚐︎︎ .   ♀︎ . .     ♀︎   .
                                          ⚐︎︎ ♀︎ ⚐︎︎ ♀︎ ♀︎ ⚐︎︎ ♀︎ . .           .
                                          ⚐︎︎ ♀︎ ⚐︎︎ ♀︎ ⚐︎︎ ♀︎ ♀︎ . ♀︎   . . .
                                          ♀︎ ♀︎ ⚐︎︎ ⚐︎︎ ♀︎ ♀︎ ⚐︎︎   .   .         .
                                          ⚐︎︎ ⚐︎︎ ♀︎ ♀︎ ♀︎ ♀︎ ⚐︎︎ ♀︎   . . . .   .
                                          ♀︎ ♀︎ ⚐︎︎ ♀︎ ♀︎ ⚐︎︎ ⚐︎︎               .
                                          ⚐︎︎ ♀︎ ♀︎ ♀︎ ⚐︎︎ ♀︎ ⚐︎︎           . .
                          .                       . ♀︎   .       .     .
                                                    . ♀︎ . .
                                          .   .
                                                .
                                                  . .   .               .
                                                    .
                                                    .
                                                                    .


                                                .
```

It got quite involved. Here's Bresenham's algorithm and the noise step. I tried to remove configurable values out as constants as much as possible. There were 11 at last count.

```perl
    sub draw_circle ( $cen_rows, $cen_cols, $rad ) {
    ## Bresenham's algorithm for a circle
        my $x = 0;
        my $y = $rad;
        my $d = 3 - 2 * $rad;

        draw_circle_to_buffer( $cen_rows, $cen_cols, $x, $y );

        while ( $y >= $x ) {
            $x++;
            if ($d > 0) {
                $y--;
                $d += 4 * ( $x - $y ) + 10;
            }
            else {
                $d += 4 * $x + 6;
            }
            draw_circle_to_buffer( $cen_rows, $cen_cols, $x, $y );
        }
    }

    sub noise ($scale) {
    ## a tool to add noise to pixel placement - this is pretty much a magic
    ## function that is tuned to look right, whatever that means. Randomness
    ## falls off polynomially.
        srand;
        return int (rand($scale)**2 - $scale/2);
        $scale *= NOISE_SCALE_FACTOR;
        return int( (rand($scale) - $scale/2) ** 2 );
    }

    sub add_noisy_crowd ($level){
    ## Pure artistic magic. Moves drawn chars with Brownian statistical
    ## roll-off and replaces the CHAR with a WOMAN, currently configured as a
    ## Unicode Venus symbol. Then creates much more random noise made up of
    ## dots, the "dust", based on the CHAR placement, but leaves any already
    ## defined elements alone, only adding new dots within a much larger random
    ## radius. The noise function at present also drifts slightly to the right
    ## and down; this is allowed by intent to dynamically draw the eye. It's
    ## just good composition. The dust is limited to the undefined spaces of
    ## the grid, the right and down, for the same reason. The artistic tuning
    ## of the `noise()` function, parameters and overwrite behavior is all a
    ## continual work-in-progress. I do like it as it is but it need not stay
    ## this way.

        respace_buffer();                     ## prevent dust from filling image
        for my $row ( 0..$buf->$#* ) {
            for my $col ( 0..$buf->[$row]->$#*)  {
                if ( defined $buf->[$row][$col] && $buf->[$row][$col] eq CHAR ) {
                    my $x = $row + noise($level);
                    my $y = $col + noise($level);
                    $buf->[$x][$y] = WOMAN;   ## keep original char, but
                                              ## overwrite venus symbols
                                              ## as it happens

                    $x += noise($level+DUST_SCALE);
                    $y += noise($level+DUST_SCALE);
                    $buf->[$x][$y] //= DUST;  ## add dust to surrounding area
                                              ## but do not overwrite
                                              ## (only adds to undefined areas at
                                              ## the right edge and below,
                                              ## giving a pleasing look)
                }
            }
        }
    }
```


## just TEXT IT TO ME ALREADY!
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/e-choroba/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/jo-37/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/pete-houston/perl/ch-1.pl), and
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/roger-bell-west/perl/ch-1.pl)



As we noted at the very beginning, the Unicode character `\x{2640}` exists, described as

```
    ♀︎
    FEMALE SIGN
    Unicode: U+2640 U+FE0E, UTF-8: E2 99 80 EF B8 8E
```

Modern fonts are themselves no longer (* generally) bitmaps of pixels, but rather little programs for each character, telling us how to draw and fill the lines. Why not render this up writ large? We saw a few tools to facilitate the idea, notably the `Tk` widget toolkit and the `GD` graphics library. And kicking it old-school we also saw an appearance from the Unix `banner` program, here emulated in Perl.

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/roger-bell-west/perl/ch-1.pl)

Although not actually Perl, here's a Postscript program to draw the symbol:

```postscript
    /size 100 def
    newpath
    0 0 size 0 360 arc
    0 size neg moveto
    0 size neg 2 mul lineto
    size neg 2 div size neg 1.5 mul moveto
    size 2 div size neg 1.5 mul lineto
    stroke
```

The actual font character should be pretty similar.

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/jo-37/perl/ch-1.pl)

You want a Venus? Give me a window and display a U+2640 character in 240-point Ariel font. Got that? Good.

```perl
    use v5.16;
    use warnings;

    use Tk;
    use Tk::Font;

    # "Feel free to use any character."
    # I chose U+2640.
    my $mw = Tk::MainWindow->new;
    $mw->title('Venus');
    $mw->Label(
        -font => $mw->Font(-family => 'arial', -size => 240),
        -text => "\x{2640}"
    )->pack;

    MainLoop;
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/e-choroba/perl/ch-1.pl)

Having trouble with Tk? How about GD instead?

```perl
    use GD;

    my @SHADES = ("\N{LIGHT SHADE}", "\N{MEDIUM SHADE}", "\N{DARK SHADE}");

    my $image = 'GD::Image'->new(20, 30);
    my $white = $image->colorAllocate(255, 255, 255);
    my $black = $image->colorAllocate(0, 0, 0);
    $image->stringFT($black,
                     'arial',
                     20, 0, 0, 21, "\N{FEMALE SIGN}",
                     {charmap => 'Unicode'});
    my @grid;
    my $max = 0;
    for my $y (0 .. 27) {
        for my $x (0 .. 20) {
            $grid[$x][$y] = $image->getPixel($x, $y);
            $max = $grid[$x][$y] if $grid[$x][$y] > $max;
        }
    }
    binmode *STDOUT, ':encoding(UTF-8)';
    for my $y (0 .. 27) {
        for my $x(0 .. 20) {
            my $pixel = $grid[$x][$y];
            print $pixel
                ? $SHADES[3 * ($pixel - 1) / $max]
                : ' ';
        }
        print "\n";
    }
```

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/pete-houston/perl/ch-1.pl)

Ok, with all this twenty-something year old high-tech textual sophistication we should not forget where we came from; the original big-text-display output. Somewhere deep in my brain I'm calling up images of stacks of perforated dot-matrix paper proudly unfurled in some classroom for no other purpose than to party, saying something that I'm sure was nice then, now gone the way of all ephemera...

I'll note the font in `banner` is not what you'd call subtle, and — shall I just say it? — just doesn't draw curvy things well. We've also come full circle, all the way back to our Perl Venus operator, printing out a 'o' character followed by a '+'.


```perl
    use Text::Banner;

    my $size = 4;
    my $shift = $size - 2;
    my $banner = Text::Banner->new;
    $banner->fill ('#');
    $banner->size ($size);

    $banner->set ('o');
    my $out = $banner->get;
    $out =~ s/^\s{$shift}//mg;

    $banner->set ('+');
    $out .= $banner->get;
    $out =~ s/\n\s*\n/\n/g;

    print $out;
```


## Oh, and the PDL. Because of COURSE THERE IS.

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/wlmb/perl/ch-1.pl)

Luis has been sending us a lot of solutions in the Perl Data Language lately, so here is his contribution to drawing a Venus.

```perl
    ./ch-1.pl 10 .6 .6 .2 ♂


                        ♂
                ♂ ♂ ♂ ♂ ♂ ♂ ♂ ♂ ♂
            ♂ ♂ ♂ ♂ ♂ ♂ ♂ ♂ ♂ ♂ ♂ ♂ ♂
          ♂ ♂ ♂ ♂               ♂ ♂ ♂ ♂
        ♂ ♂ ♂                       ♂ ♂ ♂
        ♂ ♂                           ♂ ♂
      ♂ ♂ ♂                           ♂ ♂ ♂
      ♂ ♂                               ♂ ♂
      ♂ ♂                               ♂ ♂
      ♂ ♂                               ♂ ♂
    ♂ ♂ ♂                               ♂ ♂ ♂
      ♂ ♂                               ♂ ♂
      ♂ ♂                               ♂ ♂
      ♂ ♂                               ♂ ♂
      ♂ ♂ ♂                           ♂ ♂ ♂
        ♂ ♂                           ♂ ♂
        ♂ ♂ ♂                       ♂ ♂ ♂
          ♂ ♂ ♂ ♂               ♂ ♂ ♂ ♂
            ♂ ♂ ♂ ♂ ♂ ♂ ♂ ♂ ♂ ♂ ♂ ♂ ♂
                ♂ ♂ ♂ ♂ ♂ ♂ ♂ ♂ ♂
                      ♂ ♂ ♂
                      ♂ ♂ ♂
                      ♂ ♂ ♂
                      ♂ ♂ ♂
                      ♂ ♂ ♂
            ♂ ♂ ♂ ♂ ♂ ♂ ♂ ♂ ♂ ♂ ♂ ♂ ♂
            ♂ ♂ ♂ ♂ ♂ ♂ ♂ ♂ ♂ ♂ ♂ ♂ ♂
            ♂ ♂ ♂ ♂ ♂ ♂ ♂ ♂ ♂ ♂ ♂ ♂ ♂
                      ♂ ♂ ♂
                      ♂ ♂ ♂
                      ♂ ♂ ♂
                      ♂ ♂ ♂
                      ♂ ♂ ♂
```

I'm left unsure about the semiotic resonances of using a Mars, ♂, "male" symbol as a mark to draw a larger Venus. In the absence of more data I will conclude that it's all in fun and will not read any more into it. But it is an interesting choice, that it is.

That it is.

```perl
    use PDL;
    use utf8;

    my ( $N, $W, $H, $LW, $char )=@ARGV;    # 2 * $N + 1 pixels, Width and Height
                                            # of cross, linewidth, char
    my $z = zeroes( 2 * $N + 1, 2 * $N + 1 );
    my $r = $z->rvals;                      # distance to center of circle
    my $x = $z->xvals - $N;                 # x, y coordinates with repect to top of cross
    my $y = $z->yvals;
    my $circle = $r <= $N&$r>=( 1 - $LW )*$N;
    my $vertical = $y <= $H*( 2 * $N + 1 ) & $x->abs <= $LW * $N / 2;
    my $horizontal = $x->abs <= $W * $N & ( $y - $H * $N )->abs <= $LW * $N / 2;
    my $cross = $horizontal|$vertical;

    # ( 2N + 1 )x( 4N + 1 ) circle and cross, made of 1's and 0's, and some brackets
    # ( remove 1 row from circle for better join to cross )
    my $venus = $circle->slice( ':, :-2' )->glue( 1, $cross );

    # stringify
    my $venus_string = sprintf "%s", $venus;

    # edit string replacing 0's, eliminating brakets and
    # replacing 1's by desired character
    $venus_string = ~tr / 0[]/ /d;
    $venus_string = ~s / 1/$char/g;
    say $venus_string;
```

Makes you go: "Hmmmmmmm..."

## Additional Submissions in Ghost Languages

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/abigail/perl/ch-1.pl)

**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/abigail/awk/ch-1.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/abigail/bash/ch-1.sh), [Basic](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/abigail/basic/ch-1.bas), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/abigail/bc/ch-1.bc), [Befunge-93](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/abigail/befunge-93/ch-1.bf93), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/abigail/c/ch-1.c), [Cobol](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/abigail/cobol/ch-1.cb), [Csh](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/abigail/csh/ch-1.csh), [Erlang](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/abigail/erlang/ch-1.erl), [Forth](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/abigail/forth/ch-1.fs), [Fortran](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/abigail/fortran/ch-1.f90), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/abigail/go/ch-1.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/abigail/java/ch-1.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/abigail/lua/ch-1.lua), [M4](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/abigail/m4/ch-1.m4), [Mmix](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/abigail/mmix/ch-1.mms), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/abigail/node/ch-1.js), [Ocaml](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/abigail/ocaml/ch-1.ml), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/abigail/pascal/ch-1.p), [Php](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/abigail/php/ch-1.php), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/abigail/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/abigail/python/ch-1.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/abigail/r/ch-1.r), [Rexx](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/abigail/rexx/ch-1.rexx), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/abigail/ruby/ch-1.rb), [Scheme](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/abigail/scheme/ch-1.scm), [Sql](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/abigail/sql/ch-1.sql), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/abigail/tcl/ch-1.tcl)

[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/stuart-little/perl/ch-1.pl)

**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/stuart-little/haskell/ch-1.hs), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/stuart-little/lua/ch-1.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/stuart-little/node/ch-1.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/stuart-little/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/stuart-little/raku/ch-1.raku)



------------------------------------------





---

# TASK 2 {#PWC124TASK2}

# Tug of War
*Submitted by: Mohammad S Anwar*<br>
You are given a set of $n integers (n1, n2, n3, ….).

Write a script to divide the set in two subsets of n/2 sizes each so that the difference of the sum of two subsets is the least. If $n is even then each subset must be of size $n/2 each. In case $n is odd then one subset must be ($n-1)/2 and other must be ($n+1)/2.

**Example**

```

    Input:        Set = (10, 20, 30, 40, 50, 60, 70, 80, 90, 100)
    Output:  Subset 1 = (30, 40, 60, 70, 80)
             Subset 2 = (10, 20, 50, 90, 100)

    Input:        Set = (10, -15, 20, 30, -25, 0, 5, 40, -5)
    Output:  Subset 1 = (30, 0, 5, -5)
             Subset 2 = (10, -15, 20, -25, 40)

```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/abigail/perl/ch-2.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/bruce-gray/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/jo-37/perl/ch-2.pl),
[**kjetillll**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/kjetillll/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/laurent-rosenfeld/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/perlboy1967/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/pete-houston/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/peter-campbell-smith/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/sgreen/perl/ch-2.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/stuart-little/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/ulrich-rieke/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/wlmb/perl/ch-2b.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/wanderdoc/perl/ch-2.pl)


There were 21 submissions for the second task this past week.

Perhaps surprisingly, or perhaps not once you think about it a bit, there are a lot of similarities between this problem, the "Balanced Partition Problem" and the more famous "Traveling Salesman Problem" we addressed a few weeks back. Both are what is known as NP-hard problems, which means there exists no known solutions for them in polynominal time, or in simpler terms they invariably blow up exponentially and take forever to solve, with no way out.

As such with both problems two choices are available: to address the problem head-on, acknowledging that we will hit a figurative computational wall beyond which it will be impractical to broaden the data set and include more elements, or to try instead to find the best solution obtainable in a practical amount of effort, using some heuristic.

In the TSP there also exists a compromise solution of sorts, using dynamic programming, where some complexity is traded off directly against memory requirements. Although a welcome addition to the conceptual market of ideas, this solution still blows up exponentially, albeit slower. A direct analogy can be made for the balanced partition problem, but we didn't see it today. Refactoring the problem within boundary constraints and Linear Programming can further whittle away at the complexity of large data sets, sometimes producing solutions quickly, but these results are data-specific and cannot be relied on. Such is the nature of NP-hardness: that wall is always there.

Such methods are available to us here as well, with, unfortunately, the same limitations to their effectiveness.  In the abstract algebra of problem sets, self-similarities are to be expected and often can provide suggestions when searching for a new approach.

## COMBINATORICS, searching for an EXACT SOLUTION
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/abigail/perl/ch-2.pl),
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/bruce-gray/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/james-smith/perl/ch-2.pl),
[**kjetillll**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/kjetillll/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/laurent-rosenfeld/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/perlboy1967/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/pete-houston/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/sgreen/perl/ch-2.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/stuart-little/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/ulrich-rieke/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/wanderdoc/perl/ch-2.pl)

By trying all permutations of the array, or combinations of an array half the length of the input, we can compose the makeup of the two teams. So try them all we do, keeping the most closely aligned for our report.

There were a few basic categories of the specific techniques used.

### write it in C — use a MODULE
[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/bruce-gray/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/dave-jacoby/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/perlboy1967/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/pete-houston/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/peter-campbell-smith/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/roger-bell-west/perl/ch-2.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/stuart-little/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/ulrich-rieke/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/wanderdoc/perl/ch-2.pl)

when brute-forcing an NP-hard problem the goal is to stave off the inevitable as long as possible, so it makes sense to use the fastest, finest-honed tools available to do the loop-work. These demonstrations may lack the linguistic virtue of a pure-perl solution, but the idea of integration with external code libraries has been with us pretty much since Perl 5 gave us modules, using either XS or SWIG. It's there. We need the speed. So there's no shame to using it.

A favorite go-to around here is `Algorithm::Combinatorics`, which I like for its full-featured set of functions. `Algoritm::Permute` was also represented, as was `Math::Combinatorics` and `Data::PowerSet`. `Math::Prime::Util`, recently getting a lot of airplay around these parts too, made an appearance disguised as `use ntheory`.

[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/peter-campbell-smith/perl/ch-2.pl)

We'll start off the discussion with Peter, who brings us a very nicely laid-out example of the steps required. In his own words:

>The aim is to find a subset of $n/2 (or ($n-1)/2) of the input
numbers which sums as close as possible to half the sum of the input set
(the 'target'). The remaining subset will then sum to a value the same
distance from the other side of the target.

He uses the `combinations` routine from `Algorithm::Combinatorics` to construct the group of elements for each half-sequence. I rather like the running commentary.

Once an optimal half-array had been determined, computing the complement array proved a little tricky. We can't just use a hash and delete keys because there's no constraint that the list of values has no duplicates.

Here Peter solves the problem by constructing a intermediate string from the input array and then using a regular expression to remove one instance of each selected element before reconstituting an array from the remaining string.

```perl
    use Algorithm::Combinatorics qw(combinations);

    # some useful numbers
    $target = total(@in) / 2;       # target value for each subset to add up to (half)
    $count  = scalar @in;            # number of numbers
    $subcount = int($count / 2);      # number in each (or the smaller) subset

    # look for subset that is closest to the target
    $best = 1e10;       # the closest gap found so far between the chosen combination
                        # and the target.

    # iterate over all possible combinations of the first $subcount numbers
    $set = combinations(\@in, $subcount);
    while ($c = $set->next) {
        $total = total(@$c);           # total of this combination
        $gap = int($total - $target);  # gap between that and the target
        if (abs($gap) < $best) {       # is it the best so far?
        	@out1 = @$c;
        	$best = abs($gap);
        	print qq[best so far $best\n];
        	last if $best == 0;
        }
    }

    # get the other subset
    $string = '!' . join('!', @in) . '!';   # imput set into a string like !11!22!33!
    for $i (@out1) {
        $string =~ s/!$i!/!/;   # remove each one which is in the fist subset
    }
    @out2 = split /!/, substr($string, 1);   # split the string back into an array

    # print the results
    print qq[
    Input:        Set = (] . join(', ', @in) . qq[) sum ] . total(@in) . qq[
    Output:  Subset 1 = (] . join(', ', @out1) . qq[) sum ] . total(@out1) . qq[
             Subset 2 = (] . join(', ', @out2) . qq[) sum ] . total(@out2) . qq[
    ];
```

[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/colin-crain/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/colin-crain/raku/ch-2.raku)

If instead of dividing the total for the entire array in half, we *double* our partial sum, then the difference from the entire array will be the difference between the half and its complement. What does this gain us? For the price of a few more multiplications we keep the numbers whole if they came in that way. So there's that.

To select the complement array I used `first` on a list of indices to find the selected values and then `splice` to remove them from the input. Good thing I didn't need it anymore.

```perl
    use List::Util qw( sum first );
    use Algorithm::Combinatorics qw( combinations );

    my @input = sort { $a <=> $b } @ARGV > 0
        ? @ARGV
        : (10, -15, 20, 30, -25, 0, 5, 40, -5);

    die "must have more than 1 element in input array" if @input < 2;

    my $sum = my $min = sum( @input );
    my @part1;

    my $half = int( @input/2 );
    my $iter = combinations(\@input, $half);
    while (my $c = $iter->next) {
        my $partial = sum $c->@*;
        if (abs($sum - 2 * $partial) < $min) {
            $min = abs($sum - 2 * $partial);
            @part1 = $c->@*;
        }
    }

    for my $target ( @part1 ) {
        splice @input, (first { $input[$_] == $target } (0..$#input)), 1;
    }

    my $output =
      (join ' + ', sort {$b<=>$a} @part1) . ' = ' . sum( @part1 ) . "\n"
    . (join ' + ', sort {$b<=>$a} @input) . ' = ' . sum( @input );

    $output =~ s/\+ \-/- /g;
```


[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/stuart-little/perl/ch-2.pl)

**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/stuart-little/haskell/ch-2.hs), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/stuart-little/lua/ch-2.lua), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/stuart-little/node/ch-2.js), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/stuart-little/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/stuart-little/raku/ch-2.raku)

Stuart provides us with a short functional solution, based on Set Theory. Starting with a power set of subsets with exactly the floor of *n*/2 elements, he then creates a Set object from the input array using `Set::Scalar`. This is used to find the complement difference set to each given subset and then the absolute difference between the subset and its complement's summed values. The subset with the corresponding minimal absolute difference is the solution.

```perl
    use Data::PowerSet qw(powerset);
    use List::AllUtils qw(sum0 min_by);
    use Set::Scalar;

    sub splt($ar) {
        my $powerSet = powerset({min => int(scalar @{$ar}/2), max => int(scalar @{$ar}/2)}, @{$ar});
        my $set = Set::Scalar->new(@{$ar});
        return min_by {abs((sum0 @{$_->[0]}) - (sum0 @{$_->[1]}))} map {my @diff = $set->difference(Set::Scalar->new(@{$_}))->members; [$_, \@diff]} @{$powerSet};
    }
```

[**Bruce Gray**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/bruce-gray/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/bruce-gray/raku/ch-2.raku)

When we ask to `use ntheory`, what we get is `Math::Prime::Util`. The lowercase sits fine with me, because it's almost a pragma.

The vast tomb of knowledge that is `Math::Prime::Util` has, among its several hundred available functions, a really handy set of combined functions with iterators included:
```
    forprimes()
    forcomposites()
    foroddcomposites()
    forsemiprimes()
    forfactored()
    forsquarefree()
    fordivisors()
    forpart()
    forcomp()
    forcomb()
    forperm()
    forderange()
    formultiperm()
    forsetproduct()
```

Many of these get quite exotic, but the one Bruce is using is not: given an array and a scalar, this will create sets of combinations of the array elements of size `$scalar`, *n*-choose-*k*. Note that the signature has been tweaked so that the scalar is not flattened into the array, too. Then a `for` loop is set up aotomatically to iterate through these combinations, setting `$_` in turn to each one.

To be honest that seems super handy.

Bruce demonstrates the right way to use a hash to onstruct a set difference, by creating a bag of elements against their counts and then iterating through the array being subtracted and decrementing those counts, converting the whole structure back to an array aain when finished, with each key represented in the array by the number of its remaining count.

```perl
    use ntheory      qw<forcomb>;

    sub set_difference ( $x, $y ) {
        my %h;
        $h{$_}++ for @{$x};
        $h{$_}-- for @{$y};
        return [ grep { $h{$_}-- > 0 } @{$x} ];
    }

    sub tug_of_war ( $s ) {
        my @s = @{$s};
        my $size   = int(@s / 2);
        my $target = sum0(@s) / 2;

        my $best_cost = $target * 2;
        my @best_list;
        forcomb {
            my $cost = abs sum0(@s[@_]) - $target;
            if ($best_cost > $cost) {
                $best_cost = $cost;
                @best_list = @s[@_];
            }
        } @s, $size;

        return \@best_list, set_difference( \@s, \@best_list );
    }
```




### write it YOURSELF
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/jaldhar-h-vyas/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/sgreen/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/wlmb/perl/ch-2b.pl)

Efficiency and productivity are things to be lauded, and for certain computationally  intensive tasks an external XS module is obviously the sensible choice. But where does practicality and sober reasoned sensibility fit in a playground? This *is* a playground, right? Am I on the wrong floor?

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/polettix/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/polettix/raku/ch-2.raku)

Flavio lays out a nice demonstration of the procedure, bringing out the combinations iterator we've seen from him before. It's a handy little tool , that combinations iterator. A principal advantage here is that his iterator already knows the difference set and returns that as well.

```perl
    sub tug_of_war (@set) {
       my $n = scalar @set; # number of elements in the set
       my $n_2 = $n % 2 ? ($n - 1) / 2 : $n / 2; # size of "smaller" subset
       my $subset_target = sum(@set) / 2;        # target "half" of sum

       # we will go through the possible combinations of $n_2 elements out
       # of our $n in the @set, checking their sum against the "subset target"
       # of one-half of the total sum
       my $cit = combinations_iterator($n_2, @set);

       # this will keep our "best" rolling solution during the iteration, and
       # the absolute best at the end
       my ($solution, $solution_delta);
       while (my @subsets = $cit->()) {
          # our combinations_iterator returns both the $n_2 subset, as well as
          # the remaining items. We will concentrate the sum on the first
          # sub-array, i.e. the first subset

          # we evaluate how far we are from the target sum for a subset. We
          # don't care about the sign, just "how much" we're far off
          my $subset_delta = abs(sum($subsets[0]->@*) - $subset_target);

          # update our current best according to the new combination. This also
          # takes care of the initialization at the first pass, thanks to the
          # check for !$solution
          ($solution, $solution_delta) = (\@subsets, $subset_delta)
             if (!$solution) || ($solution_delta > $subset_delta);

          # if we're below the tolerance for our distance to the target, let's
          # call it a day and return this solution!
          last if $subset_delta < TOLERANCE;
       }
       return $solution->@*;
    }

    sub combinations_iterator ($k, @items) {
       my @indexes = (0 .. ($k - 1));
       my $n = @items;
       return sub {
          return unless @indexes;
          my (@combination, @remaining);
          my $j = 0;
          for my $i (0 .. ($n - 1)) {
             if ($j < $k && $i == $indexes[$j]) {
                push @combination, $items[$i];
                ++$j;
             }
             else {
                push @remaining, $items[$i];
             }
          }
          for my $incc (reverse(-1, 0 .. ($k - 1))) {
             if ($incc < 0) {
                @indexes = (); # finished!
             }
             elsif ((my $v = $indexes[$incc]) < $incc - $k + $n) {
                $indexes[$_] = ++$v for $incc .. ($k - 1);
                last;
             }
          }
          return (\@combination, \@remaining);
       }
    }
```

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/jaldhar-h-vyas/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/jaldhar-h-vyas/raku/ch-2.raku)

Jaldhar goes about things a different way, permuting the original input array and dividing each permutation in half at the same pont to get his two sides. This strikes me as more work to get to the same goal, but hey, you get to write a permutation engine along the way.

```perl
    sub permute (&@) {
        my $code = shift;
        my @idx = 0..$#_;
        while ( $code->(@_[@idx]) ) {
            my $p = $#idx;
            --$p while $idx[$p-1] > $idx[$p];
            my $q = $p or return;
            push @idx, reverse splice @idx, $p;
            ++$q while $idx[$p-1] > $idx[$q];
            @idx[$p-1,$q]=@idx[$q,$p-1];
        }
    }

    for my $perm (@permutations) {
    my @subset1 = splice @{$perm}, 0, $part1;
    my @subset2 = @{$perm};
    my $total1 = sum \@subset1;
    my $total2 = sum \@subset2;
    my $diff =  abs($total1 - $total2);

    if ($diff < $bestdiff) {
        $bestdiff = $diff;
        @best1 = @subset1;
        @best2 = @subset2;
        if ($bestdiff == 0) {
            last;
        }
    }
}

```

### use a binary number
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/e-choroba/perl/ch-2.pl), and
[**kjetillll**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/kjetillll/perl/ch-2.pl)

Sequences of binary numbers are very useful for delivering a set of unique placements of set and unset bits, which can be in turn mapped to elements in an array to indicate whether they are to be included in a subset or not.

[**kjetillll**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/kjetillll/perl/ch-2.pl)

kjetillll (that's kjetil with *four* 'l's, this one — nice to meet you, by the way. Here, have a cocktail, enjoy the party...) creates their subset combinations using a binary search space, with a one digit for every element in the input. The presence of a set bit in the value indicates an input element is in the subset, and if the subset is the proper length it is evaluated for the difference with its complement in the input list. The minimal value and the particular subset that produced it are preserved and reported at the end.

The entire process is short and performed entirely in pure Perl.
```perl
    sub sum{my$s;map$s+=$_,@_;$s}

    sub div{
        my %least;
        for my $div (0..2**@_-1){
        my @ss=([],[]);
        push( @{ $ss[$div%2] }, $_) and $div>>=1 for @_;
        next if @{$ss[0]} != @{$ss[1]} + @_%2;
        my $diff=abs( sum(@{$ss[0]}) - sum(@{$ss[1]}) );
        %least=(diff=>$diff,subsets=>\@ss)
            if not exists $least{diff}
            or $diff < $least{diff};
        }
        @{$least{subsets}}
    }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/e-choroba/perl/ch-2.pl)

Choroba's modifies a routine he first brought out in PWC 114 to return binary numbers that contain the same number of 1s to make his *n*-choose-*k* selections. This is nice bit of work. The companion routine, `tug_of_war()`, uses these set bits to select elements, allocating them to one half-set of the other.

```perl
    sub next_same_number_of_ones {
        my ($binary) = @_;

        if (-1 != (my $pos = rindex $binary, '01')) {
            substr $binary, $pos, 2, '10';
            my $suffix = substr $binary, $pos + 2, length $binary, "";
            my $ones = $suffix =~ tr/1//d;
            $suffix .= 1 x $ones;
            return "$binary$suffix";
        }

        my $pos = rindex $binary, '1';
        my $zeros = substr $binary, $pos + 1, length $binary, "";
        substr $binary, 1, 0, "0$zeros";
        return $binary
    }

    sub tug_of_war {
        my @ints = @_;
        my $length = @ints;
        my $size = $length / 2;
        my $mask = "%0${length}b";
        my $bin = sprintf $mask, 2 ** (int $size) - 1;
        my ($diff, $best1, $best2) = sum(@ints);
        while ($bin !~ /^1+0+$/) {
            my ($s1, $s2) = ([], []);
            for my $i (0 .. $length - 1) {
                push @{ ($s1, $s2)[ substr $bin, $i, 1 ] }, $ints[$i];
            }
            if (abs(sum(0, @$s1) - sum(0, @$s2)) < $diff) {
                $diff = abs(sum(0, @$s1) - sum(0, @$s2));
                ($best1, $best2) = ([@$s1], [@$s2]);
                last if 0 == $diff
            }
            $bin = next_same_number_of_ones($bin);
        }
        return $best1, $best2
    }
```


### recurse! recurse!
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/abigail/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/james-smith/perl/ch-2.pl), and
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/laurent-rosenfeld/perl/ch-2.pl)

If we consider the selection of including a given element in a given subset a binary operation, we can construct a recursion such that elements are added to the first set until the first set is filled, then the second is filled with the remainder. The recursions stack such that on completion, the sums are noted and compared to the running minimum, but the return prevents the next element from being placed on the first array, filling it. The next element is then placed on the second array, and the first array if filled on the next pass, effectively swapping those two elements. This swapping of pairs, backtracking further and further as the recursions collapse, will ultimately cause all combinations to be explored.

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/james-smith/perl/ch-2.pl)

**additional languages:**
[Php](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/james-smith/php/ch-2.php)


James constructs his candidate teams using a recursive search to allocate the various combinations that can be constructed. One thing he does here is carry through running sums of the partial solutions as the are built up, so no summing is required when the allocation runs out of elements.


```perl
    sub match_teams {
      ## Pre-process input
      ##   * Remove first person from list - he will always go in team 1
      ##   * The rest are to be allocated.
      ##   * Pre-compute the maximum size team!
      ##
      ## $best - stores the result!!
      ##
      ## $best->[0] = difference between scores
      ## $best->[1] = array of team 1 members
      ## $best->[2] = array of team 2 members

      my( $diff, @names ) = @_;
      separate( 1 + int( @names/2 ), [$diff], [], $diff, my $best = [1<<63], @names );
      return "Team 1: [@{$best->[1]}]; Team 2: [@{$best->[2]}]; difference $best->[0]";
    }

    sub separate {
      my( $maxsize, $team1, $team2, $diff, $be, @nums ) = @_;
      return ( $be->[0] > abs $diff ) && ( @{$be} = ( abs $diff, $team1, $team2 ) ) unless @nums;
      ## If we get to the end of the list and have a better solution (smaller diff)
      ## store info in $be - can't just do $be = [ , , ] as this would
      ## change the pointer and wouldn't be preserved....
      my $next = shift @nums;      ## Get the next person and allocate to team 1 and/or team 2 depending
                                   ## on whether the teams have space...
      separate( $maxsize, [@{$team1},$next], $team2, $diff+$next, $be, @nums ) if @{$team1} < $maxsize;
      separate( $maxsize, $team1, [@{$team2},$next], $diff-$next, $be, @nums ) if @{$team2} < $maxsize;

      ## We update the difference as we go along to avoid the need to sum the two teams and compute
      ## differences at the end! When we add a member to a team we don't just push but create a new arrayref
      ## by adding the new member to the team array. If we pushed the reference would be the same and
      ## the recursion code would fall over!
    }
```

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/abigail/perl/ch-2.pl)

**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/abigail/python/ch-2.py)

Abigail includes passing a callback function that is tasked with maintaining the minimal difference found and the two half-sequences that produced it. When it's determined that the half-sets are fully allocated, the callback is made and the difference in sums is determined, and the recursion is allowed to return, swapping the last element added in  the first set with first element of the second.

```perl
    sub split_set ($set, $set1, $set2, $callback) {
        my $n = @$set + @$set1 + @$set2;

        if (@$set1 == floor ($n / 2)) {
            $callback -> ($set1, [@$set2, @$set]);
        }
        elsif (@$set2 == ceil ($n / 2)) {
            $callback -> ([@$set1, @$set], $set2);
        }
        else {
            my $element = $$set [0];
            split_set ([@$set [1 .. $#$set]], [@$set1, $element], $set2, $callback);
            split_set ([@$set [1 .. $#$set]], $set1, [@$set2, $element], $callback);
        }
    }

    sub check_sets ($set1, $set2) {
        my $diff = abs (sum (@$set1) - sum (@$set2));
        if ($diff < $best_diff) {
            $best_diff = $diff;
            @best_set1 = @$set1;
            @best_set2 = @$set2;
        }
    }

    while (<>) {
        init ();
        split_set ([split], [], [], \&check_sets);
        report ();
    }

```

## HEURISTICS, looking for be BEST SOLUTION WE CAN GET
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/jo-37/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/wlmb/perl/ch-2b.pl)

Just because you can't solve a problem doesn't mean you don't have a problem.

Sometimes a pretty good plan is as good as you're going to get. Life is messy like that.


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/wlmb/perl/ch-2b.pl)


First, I will note that Luis has given us a perfectly fine exhaustive version, viewable at the link above. But we're going to discuss his heuristic alternatives.

I metallurgy, when a hot melt cools, as the material settles from a plastic, heated state to a more rigid form sometimes the inter-atomic alignments are sub-optimal. When the plasticity is removed before these irregularities can be worked out, internal stresses are locked in, and can produce fault-lines, causing the finished product to be brittle along crystalline cleavage points. This is of course a bit of a simplification, but gets the idea across.

Annealing is a process of cooling a hot plastic material in a controlled manner, allowing these stresses to be resolved as it cools. Interatomic bonds have an energy associated with them, that needs to be overcome for the associated atoms to change their positioning, and thermal heat can be used to provide that energy.

Simulated annealing is fascinating bit of algorithmic modeling based on this real-world phenomenon.

Consider a minimum function applied to a set of continuous data containing many peaks and valleys. If we start at an arbitrary place and look for the lowest point from there, always progressing downhill, it's likely we will only find a local minimum and get caught there, surrounded by greater values. If we add noise to the system — thermal energy — we can overcome small local minima while still finding the larger valleys. After adding a heat coeficient, we let the system stabilize and then reduce the heat, and repeat the process. This shrinks the size of the canyon wall that can be surmounted, and the system is allowed again to stabilize. With each step of cooling the system obtains a more accurate result among the various local minima available to it.

In Luis' heuristic, a random partitioning into equal sides starts the ball rolling, and then we start swapping elements and see what happens, keeping good swaps and rejecting bad. The SA comes into play as we add a "heat" probability that will sometimes accept a swap that makes the system *more* unbalanced, essentially broadening the idea of "minimizing" under high "heat", and then slowly reducing this added probability for a swap.

[Another solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/wlmb/perl/ch-2b.pl) is included as well, which appears to be analogous to e "2-opt" algorithm for the TSP, but has more complex failure modes than SA. SA itself is not perfect, and in specific circumstances extra steps maybe necessary to keep the system from getting stuck in a rut of some form or another.

Another way to think about SA is to imagine a tray with a number of holes, mostly shallow but some deep. If we drop a marble into this tray it will settle into some hole, but most likely not the deepest, as any hole will trap it. Now if we shake the tray a little, enough that the marble can bounce out of a shallow hole. Then the marble will bounce around until it enters a deep hole it can no longer bounce out of. The shaking is the extra energy added to the system to allow the marble to jump between states before setttling.

The [simulated annealing solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/wlmb/perl/ch-2a.pl):

```perl
    my ($steps, $low_frac, @set)=@ARGV; # length of sim, low to high T ratio, values.
    @set=sort {$a <=> $b} @set;
    my $N=@set; # number of elements
    my $k=floor $N/2;
    my $high=$set[-1]-$set[0]; # Max difference
    my $T=$high; # starting temperature
    my $low=$low_frac*$high; # ending temperature
    my $factor=$low_frac**(1/$steps);
    #srand(0); #seed, for tests only
    my @set1=@set[0..$k-1]; # starting sets
    my @set2=@set[$k..$N-1];
    my ($sum1, $sum2)=map {sum0 @$_} \@set1, \@set2;
    my $E=abs($sum2-$sum1); # energy
    while($T>$low){
        my ($i1, $i2)=(rand($k),rand($N-$k)); # random indices to swap
        my ($new_sum1, $new_sum2)=($sum1-$set1[$i1]+$set2[$i2],$sum2+$set1[$i1]-$set2[$i2]);
        my $newE=abs($new_sum2-$new_sum1);
        my $dE=$newE-$E;
        if($dE<=0 || rand(1)<exp(-$dE/$T)){ # Exchange elements
        ($set1[$i1],$set2[$i2])=($set2[$i2],$set1[$i1]);
        ($sum1,$sum2)=($new_sum1, $new_sum2);
        $E=$newE;
        }
        $T*=$factor;
    }
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/jo-37/perl/ch-2.pl)

This problem is a version of what is known as the [Partition Problem](https://en.wikipedia.org/wiki/Partition_problem), itself known as the Equal-cardinality partition, or constrained, partion problem, or, the term we first used, the balanced partition problem.

There is a technique, called the [Largest Differencing Method](https://en.wikipedia.org/wiki/Largest_differencing_method), also known as the    Karmarkar-Karp algorithm, for a heuristic solution, which involves first sorting the input array, then replacing the two largest values with the difference between them, placing the difference back in in sorted order. The input array is now one element shorter, and this continues until a single element remains, which is the minimum difference.

In this algorithm the subtraction replacement represents placing the two values into different piles. After we're done we can backtrack and figure out what we've done, and reconstruct the actual piles. This algorithm is not exact, but does show good results, in many cases producing an optimal split.

Another algorithm, the Complete Largest Differencing Method, or Complete Karmarkar-Karp algorithm, seeks to expand the search space by building a tree of binary possibilities, with the left side subtracting the first two elements, representing placing the elements in different piles, and the right side adding the two values, equivalent to placing them in the same pile. The expanded search space should be able to find an exact solution if one is possible. Unfortunately the complete algorithm does not allocate equally to the two piles, so the constraint of keeping their sizes within 1 cannot be assumed.

Of note the complete method has not really succeeded in getting around the NP-hardness of the problem, but if an exact solution is found further search can be immediately terminated, so it can be, paradoxically, very fast for large data sets, as there are generally more options to find a exact 0-difference. This terminating short-circuit behavior sets it apart from other NP-hard problems.

[Stephan Mertens](https://arxiv.org/pdf/cs/9903011.pdf) has developed a way of keeping a parallel set of books on the cardinality of the pile allocation alongside the tree nodes in the complete algorithm, allowing it to be used for the constrained partition problem, and this is a variant implementation of Mertens' method.

```perl
    # Wrapper for the worker sub. Set up global variables, prepare input
    # data and post-process the result.  Returns the delta and both
    # partitions.
    sub run_cbldm (@n) {
        local $n = @n;
        local $m = @n % 2;
        local $delta = 'inf';
        local $xmax = max @n;
        local $xsum = sum @n;
        local $mmax = 1;
        local $msum = @n;
        local $start = [gettimeofday];

        my @p = cbldm([map {[$_, 1]} sort {$b <=> $a} @n]);

        ($delta, [map $_->[0], $p[0]->@*], [map $_->[0], $p[1]->@*]);
    }

    # Worker sub implementing Stephan Mertens' CBLDM.  This is not an
    # "anytime algorithm" as proposed, as such algorithm would report all
    # improved local solutions while running.  For the sake of simplicity,
    # here the processing will be aborted after a given running time
    # instead.
    no warnings 'recursion';
    sub cbldm ($x) {
        my @p;
        # At leaf nodes the current delta is known.
        if (@$x == 1) {
            if (abs($x->[0][1]) == $m && $x->[0][0] < $delta) {
                $delta = $x->[0][0];
                return ([$x->[0]], []);
            }
        } else {
            # Prune the subtree if the maximum element minus the sum of the
            # rest is not smaller than the current delta. There cannot be a
            # better solution in such subtree.
            return if 2 * $xmax - $xsum >= $delta;
            # Similar for the cardinality: There is no valid partitioning if
            # the maximum cardinality minus the sum the rest is larger than
            # the required cardinality difference. Or if it cannot be
            # reached.
            return if 2 * $mmax - $msum > $m or $msum < $m;

            # Process left and right subtrees.  In the left subtree, the
            # first two elements are distributed onto both partitions,
            # whereas in the right subtree they go into the same partition.
            for my $sign (-1, 1) {
                # Take a copy of the data and pick the first two elements.
                my @x = @$x;
                my @pair = splice @x, 0, 2;

                # Build a composite element according to the current branch
                # (left/right) as difference or sum of the selected pair.
                my $xc = [$pair[0][0] + $sign * $pair[1][0],
                    $pair[0][1] + $sign * $pair[1][1]];

                # Insert the composite element.  Divergent from the proposed
                # CBLDM, here is no switch to a "LDM phase".  The data
                # remains sorted from the beginning.
                binsert {$xc->[0] <=> $_->[0] || $xc->[1] <=> $_->[1]} $xc, @x;

                # Adjust the global variables.  As I didn't find a way to
                # calculate the new value for $mmax without iterating the
                # whole list, the other values are recalculated as well.
                local ($xsum, $xmax, $msum, $mmax) = (reduce {
                        $a->[0] += $b->[0];
                        $a->[1] = max $a->[1], $b->[0];
                        $a->[2] += abs($b->[1]);
                        $a->[3] = max $a->[3], abs($b->[1]);
                        $a;
                    } [0, '-inf', 0, '-inf'], @x)->@*;

                # Recurse into self, gathering a new minimal balanced
                # partitioning (if any).
                my @pn = __SUB__->(\@x);


                # The sub returns improved solutions only. Backtrack.
                if (@pn) {
                    my ($idx, $p);
                    # Locate the composite element in one of the partitions.
                    for my $i (0, 1) {
                        $idx = bsearchidx {$_->[0] <=> $xc->[0] ||
                            $_->[1] <=> $xc->[1]} $pn[$i]->@*;
                        $p = $i;
                        last if $idx >= 0;
                    }
                    # Replace the composite element by its parts according
                    # to the branch and partition.  Appending the parts
                    # ensures an ascending order.
                    splice $pn[$p]->@*, $idx, 1;
                    if ($sign < 0) {
                        # Swap the pair if the composite element was found
                        # in the second partition.
                        @pair = reverse @pair if $p;
                        push $pn[$_]->@*, $pair[$_] for 0, 1;
                    } else {
                        # By construction, the first element is larger (or
                        # equal). Swap the pair.
                        push $pn[$p]->@*, reverse @pair;
                    }
                    # Record the current solution.
                    @p = @pn;
                }

                # Stop if an exact partitioning has been detected or there
                # exists a local minimum and the running time is exhausted.
                return @p if $delta == 0 || defined $approx &&
                    ($delta < 'inf') && tv_interval($start) > $approx;
            }
        }

        @p;
    }
```


## Additional Submissions in Guest Languages

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/laurent-rosenfeld/perl/ch-2.pl)

**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/laurent-rosenfeld/raku/ch-2.raku)

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/roger-bell-west/perl/ch-2.pl)

**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/roger-bell-west/rust/ch-2.rs)

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/ulrich-rieke/perl/ch-2.pl)

**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/ulrich-rieke/haskell/ch-2.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-124/ulrich-rieke/raku/ch-2.raku)



------------------------------------------





---

# BLOGS {#PWC124BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, I somehow continue to maintain my bearings. Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC124BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *READ* these *BLOG* *LINKS*:

**( *don't think, trust your training, you're in the zone, just do it ...* )**


**Abigail**

 * [Perl Weekly Challenge 124: Happy Women Day](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-124-1.html) ( *Perl* )
 * [Perl Weekly Challenge 124: Tug of War](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-124-2.html) ( *Perl* )

**Arne Sommer**

 * [Happy Tug with Raku](https://raku-musings.com/happy-tug.html) ( *Raku* )

**Colin Crain**

 * [Venus in the Balance — Programming Excursions in Perl and Raku](https://colincrain.com/2021/08/06/venus-in-the-balance/) ( *Perl & Raku* )

**Dave Jacoby**

 * [Can’t Think of a Pithy Title: Perl Weekly Challenge #124 | Committed to Memory](https://jacoby.github.io/2021/08/03/cant-think-of-a-pithy-title-perl-weekly-challenge-124.html) ( *Perl* )

**Flavio Poletti**

 * [PWC124 - Happy Women Day - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/08/04/pwc124-happy-women-day/) ( *Perl & Raku* )
 * [PWC124 - Tug of War - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/08/05/pwc124-tug-of-war/) ( *Perl & Raku* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 124](https://www.braincells.com/perl/2021/08/perl_weekly_challenge_week_124.html) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge #124](https://github.com/drbaggy/perlweeklychallenge-club/blob/master/challenge-124/james-smith/) ( *Perl* )

**Jared Martin**

 * [TWC 124: Literalism and existence proofs in the service of stress reduction | Jared Martin](http://blogs.perl.org/users/jared_martin/2021/08/twc-124-literalism-and-existence-proofs-in-the-service-of-stress-reduction.html) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 124: Happy Women Day and Tug of War | laurent_r](http://blogs.perl.org/users/laurent_r/2021/08/perl-weekly-challenge-124-happy-women-day-and-tug-of-war.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 124: diffcult women! – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2021/08/04/PerlWeeklyChallenge124.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 124: diffcult women! – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2021/08/04/PerlWeeklyChallenge124.html#task2) ( *Raku* )

**Roger Bell_West**

 * [RogerBW's Blog: Perl Weekly Challenge 124: War Day](https://blog.firedrake.org/archive/2021/08/Perl_Weekly_Challenge_124__War_Day.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 124](https://dev.to/simongreennet/weekly-challenge-124-2gi7) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 124 – W. Luis Mochán](https://wlmb.github.io/2021/08/02/PWC124/) ( *Perl* )
