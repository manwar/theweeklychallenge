---
title: "RECAP - Perl Weekly Challenge - 052"
date: 2020-03-23T00:00:00+00:00
description: "Quick recap of Perl Weekly Challenge - 052."
type: post
image: images/blog/recap-challenge-052.jpg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---
***
***

# HEADLINES

***
***

Last week, we had guest contributor, **Richard Park**, who contributed **[APL solutions](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-052/richard-park/apl)**. **Roger Bell_West** shared blogs for **[Week 048](https://blog.firedrake.org/archive/2020/03/Perl_Weekly_Challenge_48__survivor_and_palindromic_dates.html)** and **[Week 049](https://blog.firedrake.org/archive/2020/03/Perl_Weekly_Challenge_49__multiples_and_LRU_cache.html)**. **Athansius** shared solutions to the last week challenge after a short break. Welcome back **Athanasius**.

I would like to share an interesting bit from **[Perl Reviews 050](/blog/review-challenge-050/)** by **Ryan Thompson**. In his review, **Ryan** improved my definition of the subroutine **_order_intervals()** as defined below:

```perl
sub _order_intervals {
    my ($intervals) = @_;
    my @intervals = ();
    foreach my $i (@$intervals) {
        push @intervals, sprintf("%d-%d", $i->[0], $i->[1]);
    }
    # Borrowed with input from E. Choroba
    # https://stackoverflow.com/questions/27089498/sorting-arrays-of-intervals-in-perl
    my @_sorted = sort {
        my ($a1, $a2) = $a =~ /-?\d+/g;
        my ($b1, $b2) = $b =~ /-?\d+/g;
        $a1 <=> $b1 || $a2 <=> $b2;
    } @intervals;
    my $sorted = [];
    foreach (@_sorted) {
        my ($a, $b) = split /(?<=\d)-(?=\d)/, $_, 2;
        push @$sorted, [ $a+0, $b+0 ];
    }
    return $sorted;
}
```

to something like this. I feel like dumb now.

```perl
sub _order_intervals {
    [ sort { $a->[0] <=> $b->[0] || $a->[1] <=> $b->[1] } @{$_[0]} ]
}
```

***
***

# GUESTS REPORT CARD

***
***

#### 1) Ulrich Rieke: C++ (10), Haskell (11).

#### 2) Orestis Zekai: Python (16).

#### 3) Lubos Kolouch: Python (16).

#### 4) User Person: Python (12).

#### 5) Adam Russell: C++ (8).

#### 6) Burkhard Nickels: Python (8).

#### 7) Wanderdoc: R (6).

#### 8) Kivanc Yazan: Python (4).

#### 9) Duncan C. White: Postscript (3).

#### 10) Jonas Berlin: Rust (3).

#### 11) Rage311: Rust (3).

#### 12) Daniel Mita: Go (1), Javascript (1).

#### 13) Richard Park: APL (2).

#### 14) Roger Bell_West: Postscript (2).

#### 15) Darren Bottin: Prolog (1).

#### 16) Dave Jacoby: HTML (1).

#### 17) Jaldhar H. Vyas: C++ (1).

***
***

# LANGUAGES REPORT CARD

***
***

#### 1) Python: 56

#### 2) C++: 19

#### 3) Haskell: 11

#### 4) Rust: 6

#### 5) R: 6

#### 6) Postscript: 5

#### 7) APL: 2

#### 8) Go: 1

#### 9) HTML: 1

#### 10) Javascript: 1

#### 11) Prolog: 1

***
***

# CENTURION CLUB

***
***

Changes to the ranking in the **Centurion Club** last week listed below

With last week contributions, I have now moved up to the **rank #042**. **Lubos Kolouch** joined the club last week. Many congratulations from the **Team PWC**.

#### **Roger Bell_West** moved up to the **rank #06**.

#### **Lubos Kolouch** moved up to the **rank #025**.

***

#### 1) Laurent Rosenfeld (**620**)

#### 2) Jaldhar H. Vyas (**436**)

#### 3) Ruben Westerberg (**412**)

#### 4) Joelle Maslak (**334**)

#### 5) Arne Sommer (**322**)

#### 6) Roger Bell_West (**318**)

#### 7) Adam Russell (**306**)

#### 8) E. Choroba (**282**)

#### 9) Ryan Thompson (**242**)

#### 10) Athanasius (**224**)

#### 11) Javier Luque (**220**)

#### 12) Andrezgz (**210**)

#### 13) Scimon Proctor (**204**)

#### 14) Dave Jacoby (**186**)

#### 15) Duncan C. White (**184**)

#### 16) Kian-Meng Ang (**162**)

#### 17) Colin Crain (**158**)

#### 18) Kevin Colyer (**152**)

#### 19) Yet Ebreo (**142**)

#### 20) Duane Powell (**136**)

#### 21) Steven Wilson (**136**)

#### 22) Noud Aldenhoven (**124**)

#### 23) Burkhard Nickels (**108**)

#### 24) Ulrich Rieke (**108**)

#### 25) Lubos Kolouch (**100**)

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

### Andrezgz
![Andrezgz](/images/team/andrezgz.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/andrezgz/perl/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/andrezgz/perl/ch-2.pl)]

***

### Athanasius
![Athanasius](/images/team/athanasius.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/athanasius/perl/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/athanasius/perl/ch-2.pl)]

***

### Cheok-Yin Fung
![Cheok-Yin Fung](/images/team/cheok-yin-fung.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/cheok-yin-fung/perl/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/cheok-yin-fung/perl/ch-2.pl)]
[[**BLOG #1**](http://blogs.perl.org/users/c_y_fung/2020/03/cys-take-on-perl-weekly-challenge-052.html)]

***

### Cristina Heredia
![Cristina Heredia](/images/team/cristina_heredia.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/cristian-heredia/perl/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/cristian-heredia/perl/ch-2.pl)]

***

### Dave Cross
![Dave Cross](/images/team/dave_cross.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/dave-cross/perl/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/dave-cross/perl/ch-2.pl)]

***

### Dave Jacoby
![Dave Jacoby](/images/team/dave_jacoby.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/dave-jacoby/perl/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/dave-jacoby/perl/ch-2.pl)]
[[**BLOG #1**](https://jacoby.github.io/2020/03/16/minimax-british-coins-and-oldschool-ai-in-perl.html)]

***

### Duncan C. White
![Duncan C. White](/images/team/duncan_white.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/duncan-c-white/perl/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/duncan-c-white/perl/ch-2.pl)]

***

### E. Choroba
![E. Choroba](/images/team/e-choroba.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/e-choroba/perl/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/e-choroba/perl/ch-2.pl)]
[[**BLOG #1**](http://blogs.perl.org/users/e_choroba/2020/03/perl-weekly-challenge-052-stepping-numbers-lucky-winner.html)]

***

### Lubos Kolouch
![Lubos Kolouch](/images/team/lubos_kolouch.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/lubos-kolouch/perl/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/lubos-kolouch/perl/ch-2.pl)]

***

### Saif Ahmed
![Saif Ahmed](/images/team/saif_ahmed.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/saiftynet/perl/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/saiftynet/perl/ch-2.pl)]

***

### User Person
![User Person](/images/team/user.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/user-person/perl/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/user-person/perl/ch-2.pl)]

***

### Wanderdoc
![Wanderdoc](/images/team/user.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/wanderdoc/perl/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/wanderdoc/perl/ch-2.pl)]

***

### Yet Ebreo
![Yet Ebreo](/images/team/yet-ebreo.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/yet-ebreo/perl/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/yet-ebreo/perl/ch-2.pl)]

***
***

# RAKU SOLUTIONS

***
***

### Arne Sommer
![Arne Sommer](/images/team/arne-sommer.jpg)

[[**RAKU #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/arne-sommer/raku/ch-1.p6)]
[[**RAKU #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/arne-sommer/raku/ch-2.p6)]
[[**BLOG #1**](https://raku-musings.com/stepping-winner.html)]

***

### Kevin Colyer
![Kevin Colyer](/images/team/kevin_colyer.jpg)

[[**RAKU #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/kevin-colyer/raku/ch-1.p6)]
[[**RAKU #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/kevin-colyer/raku/ch-2.p6)]

***

### Luca Ferrari
![Luca Ferrari](/images/team/luca-ferrari.jpg)

[[**RAKU #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/luca-ferrari/raku/ch-1.p6)]
[[**RAKU #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/luca-ferrari/raku/ch-2.p6)]
[[**BLOG #1**](https://fluca1978.github.io/2020/03/17/PerlWeeklyChallenge52.html#task1)]
[[**BLOG #2**](https://fluca1978.github.io/2020/03/17/PerlWeeklyChallenge52.html#task2)]

***

### Mark Anderson
![Mark Anderson](/images/team/user.jpg)

[[**RAKU #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/mark-anderson/raku/ch-1.p6)]
[[**RAKU #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/mark-anderson/raku/ch-2.p6)]

***

### Noud Aldenhoven
![Noud Aldenhoven](/images/team/noud_aldenhoven.jpg)

[[**RAKU #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/noud/raku/ch-1.p6)]
[[**RAKU #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/noud/raku/ch-2.p6)]

***

### Scimon Proctor
![Scimon Proctor](/images/team/simon_proctor.jpg)

[[**RAKU #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/simon-proctor/raku/ch-1.p6)]

***
***

# PERL & RAKU SOLUTIONS

***
***

### Alicia Bielsa
![Alicia Bielsa](/images/team/alicia_bielsa.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/alicia-bielsa/perl/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/alicia-bielsa/perl/ch-2.pl)]
[[**RAKU #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/alicia-bielsa/raku/ch-1.p6)]

***

### Colin Crain
![Colin Crain](/images/team/user.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/colin-crain/perl/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/colin-crain/perl/ch-2.pl)]
[[**RAKU #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/colin-crain/raku/ch-1.p6)]
[[**RAKU #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/colin-crain/raku/ch-2.p6)]

***

### Javier Luque
![Javier Luque](/images/team/javier_luque.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/javier-luque/perl/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/javier-luque/perl/ch-2.pl)]
[[**RAKU #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/javier-luque/raku/ch-1.p6)]
[[**RAKU #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/javier-luque/raku/ch-2.p6)]
[[**BLOG #1**](https://perlchallenges.wordpress.com/2020/03/16/perl-weekly-challenge-052/)]

***

### Laurent Rosenfeld
![Laurent Rosenfeld](/images/team/laurent_rosenfeld.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/laurent-rosenfeld/perl/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/laurent-rosenfeld/perl/ch-2.pl)]
[[**RAKU #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/laurent-rosenfeld/raku/ch-1.p6)]
[[**RAKU #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/laurent-rosenfeld/raku/ch-2.p6)]
[[**BLOG #1**](http://blogs.perl.org/users/laurent_r/2020/03/perl-weekly-challenge-stepping-numbers-and-lucky-winner.html)]

***

### Markus Holzer
![Markus Holzer](/images/team/markus-holzer.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/markus-holzer/perl/ch-1.pl)]
[[**RAKU #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/markus-holzer/raku/ch-1.p6)]
[[**RAKU #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/markus-holzer/raku/ch-2.p6)]

***

### Mohammad S Anwar
![Mohammad S Anwar](/images/team/mohammad_anwar.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/mohammad-anwar/perl/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/mohammad-anwar/perl/ch-2.pl)]
[[**RAKU #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/mohammad-anwar/raku/ch-1.p6)]
[[**RAKU #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/mohammad-anwar/raku/ch-2.p6)]
[[**BLOG #1**](https://perlweeklychallenge.org/blog/weekly-challenge-052)]

***

### Roger Bell_West
![Roger Bell_West](/images/team/user.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/roger-bell-west/perl/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/roger-bell-west/perl/ch-2.pl)]
[[**RAKU #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/roger-bell-west/raku/ch-1.p6)]
[[**RAKU #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/roger-bell-west/raku/ch-2.p6)]

***

### Ruben Westerberg
![Ruben Westerberg](/images/team/ruben-westerberg.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/ruben-westerberg/perl/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/ruben-westerberg/perl/ch-2.pl)]
[[**RAKU #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/ruben-westerberg/raku/ch-1.p6)]
[[**RAKU #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/ruben-westerberg/raku/ch-2.p6)]

***

### Ryan Thompson
![Ryan Thompson](/images/team/ryan-thompson.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/ryan-thompson/perl/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/ryan-thompson/perl/ch-2.pl)]
[[**RAKU #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/ryan-thompson/raku/ch-1.p6)]
[[**RAKU #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-052/ryan-thompson/raku/ch-2.p6)]
[[**BLOG #1**](http://www.ry.ca/2020/03/stepping-numbers/)]
[[**BLOG #2**](http://www.ry.ca/2020/03/lucky-winner/)]

***
***

Last but not the least, I would like to request all members, please send us your photo, that you already use on some other web platform, to use in the weekly blog, if not already sent.

***
***
