---
title: "RECAP - Perl Weekly Challenge - 039"
date: 2019-12-23T00:00:00+00:00
description: "My personal take on the Challenge #039."
type: post
image: images/blog/recap-challenge-039.jpg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---
***
***

# HEADLINES

***
***

[**Advent Calendar 2019**](/blog/advent-calendar-2019) is in the last leg. We have had some very interesting solutions by respected members of the team.

##### [Day 1: Word Ladder Puzzle by Laurent Rosenfeld](/blog/advent-calendar-2019-12-01)
##### [Day 2: Ranking by Dave Jacoby](/blog/advent-calendar-2019-12-02)
##### [Day 3: Encode/Decode Roman Numerals by Joelle Maslak](/blog/advent-calendar-2019-12-03)
##### [Day 4: Hoftadter Female and Male Sequence by E. Choroba](/blog/advent-calendar-2019-12-04)
##### [Day 5: Longest english word using US state postal abbreviation by Neil Bowers](/blog/advent-calendar-2019-12-05)
##### [Day 6: Pythagoras Pie Puzzle by Arne Sommer](/blog/advent-calendar-2019-12-06)
##### [Day 7: Ackermann Function by Jaldhar H. Vyas](/blog/advent-calendar-2019-12-07)
##### [Day 8: Priority Queue by Adam Russell](/blog/advent-calendar-2019-12-08)
##### [Day 9: Five Weekends by Dave Cross](/blog/advent-calendar-2019-12-09)
##### [Day 10: Split on change of character by Mark Senn](/blog/advent-calendar-2019-12-10)
##### [Day 11: Sexy Primes by Yet Ebreo](/blog/advent-calendar-2019-12-11)
##### [Day 12: nth Order Difference Series by Laurent Rosenfeld](/blog/advent-calendar-2019-12-12)
##### [Day 13: Demonstrate Array/Hash Slices by Burkhard Nickels](/blog/advent-calendar-2019-12-13)
##### [Day 14: Pascal Triangle by Scimon Proctor](/blog/advent-calendar-2019-12-14)
##### [Day 15: Dynamic Variable by Javier Luque](/blog/advent-calendar-2019-12-15)
##### [Day 16: Vigenere Cipher by Yozen Hernandez](/blog/advent-calendar-2019-12-16)
##### [Day 17: Bitcoin Validation by Athanasius](/blog/advent-calendar-2019-12-17)
##### [Day 18: FizzBuzz by Philippe Bruhat](/blog/advent-calendar-2019-12-18)
##### [Day 19: Trim leading zeros by Khalid](/blog/advent-calendar-2019-12-19)
##### [Day 20: Word Game by Roger Bell_West](/blog/advent-calendar-2019-12-20)
##### [Day 21: Base35 Representation by Gustavo Chaves](/blog/advent-calendar-2019-12-21)
##### [Day 22: Replace character and count by JJ Merelo](/blog/advent-calendar-2019-12-22)
##### [Day 23: Perfect Numbers by Francis J Whittle](/blog/advent-calendar-2019-12-23)

***

**Ryan Thompson** shared his solutions to the past challenges in **Perl** and **Raku**.

#### [Challenge - 001](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-001/ryan-thompson)

#### [Challenge - 002](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-002/ryan-thompson)

#### [Challenge - 003](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-003/ryan-thompson)

#### [Challenge - 004](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-004/ryan-thompson)

#### [Challenge - 005](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-005/ryan-thompson)

***

**Fernando Correa de Oliveira** shared solution to [**Perl Weekly Challenge - 039**](/blog/perl-weekly-challenge-039) as below in **Raku**:

### Task #1

```perl6

sub to-min(Str $str) {
    do given $str.comb(/\d+/) {
       60*.[0] + .[1]
    }
}

proto calc(Int $count,  Int $prev, @in,               @out --> Int) {*}
multi calc(0,           Int,       [],                []   --> 0)   {}
multi calc(Int,         Int,       [],                [])           { die "Finished with guest inside house" }
multi calc(0,           Int $prev, [Int $in, *@in],   @out where $in <= *.head)        { calc 1, $in, @in, @out }
multi calc(Int $count,  Int $prev, [Int $in, *@in],   @out where $in <= *.head)        { $in  - $prev + calc $count + 1, $in,  @in, @out }
multi calc(Int $count,  Int $prev, @in (Int $in, *@), [Int $out where $in > *, *@out]) { $out - $prev + calc $count - 1, $out, @in, @out }
multi calc(Int $count,  Int $prev, [],                [Int $out, *@out])               { $out - $prev + calc $count - 1, $out, [],  @out }

my (@in, @out) := ([[],[]], |lines).reduce: -> (@in, @out), $_ {
   my ($in, $out) = .comb(/\d+":"\d+/);
   [ |@in, to-min $in, ], [ |@out, to-min $out ]
}

say calc 0, 0, @in.sort, @out.sort

```

### Task #2

```perl6

multi calc(@mem,                        Int $num) { [ $num, |@mem ]   }
multi calc([Int() $x, Int() $y, *@mem], "+"     ) { [ $y + $x, |@mem] }
multi calc([Int() $x, Int() $y, *@mem], "-"     ) { [ $y - $x, |@mem] }
multi calc([Int() $x, Int() $y, *@mem], "−"     ) { [ $y - $x, |@mem] }
multi calc([Int() $x, Int() $y, *@mem], "*"     ) { [ $y * $x, |@mem] }
multi calc([Int() $x, Int() $y, *@mem], "×"     ) { [ $y * $x, |@mem] }
multi calc([Int() $x, Int() $y, *@mem], "/"     ) { [ $y / $x, |@mem] }
multi calc([Int() $x, Int() $y, *@mem], "÷"     ) { [ $y / $x, |@mem] }
multi calc(@mem (Int() $x, *@),         "="     ) { @mem              }

my @mem;
for words() {
    @mem = calc @mem, .&val;
    say @mem.head
}

```

***
***

## CENTURION CLUB

***
***

#### 1) Laurent Rosenfeld (**488**)

#### 2) Joelle Maslak (**330**)

#### 3) Jaldhar H. Vyas (**326**)

#### 4) Ruben Westerberg (**308**)

#### 5) Adam Russell (**262**)

#### 6) Arne Sommer (**240**)

#### 7) Athanasius (**208**)

#### 8) E. Choroba (**202**)

#### 9) Roger Bell_West (**200**)

#### 10) Kian-Meng Ang (**158**)

#### 11) Andrezgz (**152**)

#### 12) Scimon Proctor (**148**)

#### 13) Duncan C. White (**136**)

#### 14) Dave Jacoby (**132**)

#### 15) Steven Wilson (**120**)

#### 16) Yet Ebreo (**114**)

#### 17) Kevin Colyer (**108**)

***
***

# DAMIAN's CORNER

***
***

Checkout the masterpiece collection of [**blogs**](https://perlweeklychallenge.org/blog/damian-corner) by **Damian Conway** solving **"Perl Weekly Challenge"**.

***
***

# PERL SOLUTIONS

***
***

### Adam Russell
![Adam Russell](/images/team/adam_russell.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/adam-russell/perl5/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/adam-russell/perl5/ch-2.pl)]
[[**BLOG #1**](https://adamcrussell.livejournal.com/13288.html)]
[[**BLOG #2**](https://adamcrussell.livejournal.com/13321.html)]

***

### Andrezgz
![Andrezgz](/images/team/andrezgz.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/andrezgz/perl5/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/andrezgz/perl5/ch-2.pl)]

***

### Burkhard Nickels
![Burkhard Nickels](/images/team/burkhard-nickels.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/burkhard-nickels/perl5/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/burkhard-nickels/perl5/ch-2.pl)]
[[**BLOG #1**](http://pearls.dyndnss.net)]

***

### Colin Crain
![Colin Crain](/images/team/user.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/colin-crain/perl5/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/colin-crain/perl5/ch-2.pl)]

***

### Duane Powell
![Duane Powell](/images/team/duane-powell.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/duane-powell/perl5/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/duane-powell/perl5/ch-2.pl)]

***

### Duncan C. White
![Duncan C. White](/images/team/duncan_white.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/duncan-c-white/perl5/ch-1.pl)]

***

### Nazareno Delucca
![Nazareno Delucca](/images/team/user.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/ndelucca/perl5/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/ndelucca/perl5/ch-2.pl)]

***

### Saif Ahmed
![Saif Ahmed](/images/team/user.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/saiftynet/perl5/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/saiftynet/perl5/ch-2.pl)]
[[**BLOG #1**](http://blogs.perl.org/users/saif/2019/12/the-times-you-want-to-avoid-the-short-cuts.html)]

***

### Steven Wilson
![Steven Wilson](/images/team/user.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/steven-wilson/perl5/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/steven-wilson/perl5/ch-2.pl)]

***
***

# RAKU SOLUTIONS

***
***

### Arne Sommer
![Arne Sommer](/images/team/arne-sommer.jpg)

[[**RAKU #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/arne-sommer/perl6/ch-1.p6)]
[[**RAKU #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/arne-sommer/perl6/ch-2.p6)]
[[**BLOG #1**](https://raku-musings.com/reverse-guest.html)]

***

### Daniel Mita
![Daniel Mita](/images/team/user.jpg)

[[**RAKU #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/daniel-mita/perl6/ch-1.p6)]

***

### Kevin Colyer
![Kevin Colyer](/images/team/kevin_colyer.jpg)

[[**RAKU #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/kevin-colyer/perl6/ch-1.p6)]
[[**RAKU #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/kevin-colyer/perl6/ch-2.p6)]

***

### Noud
![Noud](/images/team/user.jpg)

[[**RAKU #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/noud/perl6/ch-1.p6)]
[[**RAKU #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/noud/perl6/ch-2.p6)]

***

### Ulrich Rieke
![Ulrich Rieke](/images/team/user.jpg)

[[**RAKU #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/ulrich-rieke/perl6/ch-1.p6)]
[[**RAKU #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/ulrich-rieke/perl6/ch-2.p6)]

***
***

# PERL & RAKU SOLUTIONS

***
***

### Javier Luque
![Javier Luque](/images/team/javier_luque.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/javier-luque/perl5/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/javier-luque/perl5/ch-2.pl)]
[[**RAKU #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/javier-luque/perl6/ch-1.p6)]
[[**RAKU #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/javier-luque/perl6/ch-2.p6)]
[[**BLOG #1**](https://perlchallenges.wordpress.com/2019/12/16/perl-weekly-challenge-039/)]

***

### Laurent Rosenfeld
![Laurent Rosenfeld](/images/team/laurent_rosenfeld.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/laurent-rosenfeld/perl5/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/laurent-rosenfeld/perl5/ch-2.pl)]
[[**RAKU #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/laurent-rosenfeld/perl6/ch-1.p6)]
[[**RAKU #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/laurent-rosenfeld/perl6/ch-2.p6)]
[[**BLOG #1**](http://blogs.perl.org/users/laurent_r/2019/12/perl-weekly-challenge-39-guest-house-and-reverse-polish-notation.html)]

***

### Roger Bell_West
![Roger Bell_West](/images/team/user.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/roger-bell-west/perl5/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/roger-bell-west/perl5/ch-2.pl)]
[[**RAKU #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/roger-bell-west/perl6/ch-1.p6)]
[[**RAKU #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/roger-bell-west/perl6/ch-2.p6)]

***

### Ruben Westerberg
![Ruben Westerberg](/images/team/ruben-westerberg.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/ruben-westerberg/perl5/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/ruben-westerberg/perl5/ch-2.pl)]
[[**RAKU #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/ruben-westerberg/perl6/ch-1.p6)]
[[**RAKU #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/ruben-westerberg/perl6/ch-2.p6)]

***

### Ryan Thompson
![Ryan Thompson](/images/team/ryan-thompson.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/ryan-thompson/perl5/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/ryan-thompson/perl5/ch-2.pl)]
[[**RAKU #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/ryan-thompson/perl6/ch-1.p6)]
[[**RAKU #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-039/ryan-thompson/perl6/ch-2.p6)]
[[**BLOG #1**](http://www.ry.ca/2019/12/reverse-polish-notation/)]

***
***

Last but not the least, I would like to request all members, please send us your photo, that you already use on some other web platform, to use in the weekly blog, if not already sent.

***
***
