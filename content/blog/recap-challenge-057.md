---
title: "RECAP - Perl Weekly Challenge - 057"
date: 2020-04-27T00:00:00+00:00
description: "Quick recap of Perl Weekly Challenge - 057."
type: post
image: images/blog/recap-challenge-057.jpg
author: Mohammad S Anwar
tags: ["Perl", "Raku"]
---

# HEADLINES

***

In the series of clearing up past challenges, this time **Roger Bell_West** shared the blog for **[Perl Weekly Challenge - 055](https://blog.firedrake.org/archive/2020/04/Perl_Weekly_Challenge_55__binary_flips_and_alternating_permutation.html)**. Last week, I saw **Ruben Westerberg** did double job as he missed the target for **"Perl Weekly Challenge - 056"**. He has never missed a week starting from Week #001.

**| [Perl Weekly Challenge - 001](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-001/ruben-westerberg)** | **[Perl Weekly Challenge - 002](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-002/ruben-westerberg)** | **[Perl Weekly Challenge - 003](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-003/ruben-westerberg)** | **[Perl Weekly Challenge - 004](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-004/ruben-westerberg)** | **[Perl Weekly Challenge - 005](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-005/ruben-westerberg)** | <br>
**| [Perl Weekly Challenge - 006](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-006/ruben-westerberg)** | **[Perl Weekly Challenge - 007](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-007/ruben-westerberg)** | **[Perl Weekly Challenge - 008](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-008/ruben-westerberg)** | **[Perl Weekly Challenge - 009](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-009/ruben-westerberg)** | **[Perl Weekly Challenge - 010](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-010/ruben-westerberg)** | <br>
**| [Perl Weekly Challenge - 011](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-011/ruben-westerberg)** | **[Perl Weekly Challenge - 012](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-012/ruben-westerberg)** | **[Perl Weekly Challenge - 013](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-013/ruben-westerberg)** | **[Perl Weekly Challenge - 014](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-014/ruben-westerberg)** | **[Perl Weekly Challenge - 015](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-015/ruben-westerberg)** | <br>
**| [Perl Weekly Challenge - 016](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-016/ruben-westerberg)** | **[Perl Weekly Challenge - 017](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-017/ruben-westerberg)** | **[Perl Weekly Challenge - 018](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-018/ruben-westerberg)** | **[Perl Weekly Challenge - 019](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-019/ruben-westerberg)** | **[Perl Weekly Challenge - 020](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-020/ruben-westerberg)** | <br>
**| [Perl Weekly Challenge - 021](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-021/ruben-westerberg)** | **[Perl Weekly Challenge - 022](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-022/ruben-westerberg)** | **[Perl Weekly Challenge - 023](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-023/ruben-westerberg)** | **[Perl Weekly Challenge - 024](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-024/ruben-westerberg)** | **[Perl Weekly Challenge - 025](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-025/ruben-westerberg)** | <br>
**| [Perl Weekly Challenge - 026](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-026/ruben-westerberg)** | **[Perl Weekly Challenge - 027](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-027/ruben-westerberg)** | **[Perl Weekly Challenge - 028](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-028/ruben-westerberg)** | **[Perl Weekly Challenge - 029](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-029/ruben-westerberg)** | **[Perl Weekly Challenge - 030](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-030/ruben-westerberg)** | <br>
**| [Perl Weekly Challenge - 031](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-031/ruben-westerberg)** | **[Perl Weekly Challenge - 032](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-032/ruben-westerberg)** | **[Perl Weekly Challenge - 033](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-033/ruben-westerberg)** | **[Perl Weekly Challenge - 034](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-034/ruben-westerberg)** | **[Perl Weekly Challenge - 035](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-035/ruben-westerberg)** | <br>
**| [Perl Weekly Challenge - 036](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-036/ruben-westerberg)** | **[Perl Weekly Challenge - 037](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-037/ruben-westerberg)** | **[Perl Weekly Challenge - 038](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-038/ruben-westerberg)** | **[Perl Weekly Challenge - 039](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-039/ruben-westerberg)** | **[Perl Weekly Challenge - 040](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-040/ruben-westerberg)** | <br>
**| [Perl Weekly Challenge - 041](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-041/ruben-westerberg)** | **[Perl Weekly Challenge - 042](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-042/ruben-westerberg)** | **[Perl Weekly Challenge - 043](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-043/ruben-westerberg)** | **[Perl Weekly Challenge - 044](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-044/ruben-westerberg)** | **[Perl Weekly Challenge - 045](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-045/ruben-westerberg)** | <br>
**| [Perl Weekly Challenge - 046](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-046/ruben-westerberg)** | **[Perl Weekly Challenge - 047](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-047/ruben-westerberg)** | **[Perl Weekly Challenge - 048](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-048/ruben-westerberg)** | **[Perl Weekly Challenge - 049](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-049/ruben-westerberg)** | **[Perl Weekly Challenge - 050](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-050/ruben-westerberg)** | <br>
**| [Perl Weekly Challenge - 051](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-051/ruben-westerberg)** | **[Perl Weekly Challenge - 052](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-052/ruben-westerberg)** | **[Perl Weekly Challenge - 053](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-053/ruben-westerberg)** | **[Perl Weekly Challenge - 054](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-054/ruben-westerberg)** | **[Perl Weekly Challenge - 055](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-055/ruben-westerberg)** | <br>
**| [Perl Weekly Challenge - 056](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-056/ruben-westerberg)** | **[Perl Weekly Challenge - 057](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-057/ruben-westerberg)** | <br>

# GUESTS REPORT CARD

***

#### 1) Ulrich Rieke: C++ (12), Haskell (14).

#### 2) Lubos Kolouch: Python (24).

#### 3) User Person: Python (21).

#### 4) Orestis Zekai: Python (16).

#### 5) Richard Park: APL (9).

#### 6) Adam Russell: C++ (8).

#### 7) Burkhard Nickels: Python (8).

#### 8) Wanderdoc: R (6).

#### 9) Dave Jacoby: HTML (1), Node (2), Rust (2).

#### 10) Kivanc Yazan: Python (4).

#### 11) Yet Ebreo: Python (2), Ruby (2).

#### 12) Duncan C. White: Postscript (3).

#### 13) Jonas Berlin: Rust (3).

#### 14) Rage311: Rust (3).

#### 15) Daniel Mita: Go (1), Javascript (1).

#### 16) Roger Bell_West: Postscript (2).

#### 17) Darren Bottin: Prolog (1).

#### 18) Jaldhar H. Vyas: C++ (1).

# LANGUAGES REPORT CARD

***

#### 1) Python: 76

#### 2) C++: 21

#### 3) Haskell: 14

#### 4) APL: 9

#### 5) Rust: 8

#### 6) R: 6

#### 7) Postscript: 5

#### 8) Idris: 2

#### 9) Node: 2

#### 10) Ruby: 2

#### 11) Go: 1

#### 12) HTML: 1

#### 13) Javascript: 1

#### 14) Prolog: 1

# CENTURION CLUB

***

Changes to the ranking in the **Centurion Club** last week listed below

With last week contributions, I have now formally joined the club, currently at **rank #028**. There is one more member **Luca Ferarri** who also joined the club at **rank #027**.

***

#### 1) Laurent Rosenfeld (**676**)

#### 2) Jaldhar H. Vyas (**502**)

#### 3) Ruben Westerberg (**452**)

#### 4) Roger Bell_West (**360**)

#### 5) Arne Sommer (**352**)

#### 6) Joelle Maslak (**334**)

#### 7) Adam Russell (**316**)

#### 8) E. Choroba (**310**)

#### 9) Ryan Thompson (**278**)

#### 10) Javier Luque (**270**)

#### 11) Athanasius (**252**)

#### 12) Andrezgz (**230**)

#### 13) Scimon Proctor (**226**)

#### 14) Dave Jacoby (**216**)

#### 15) Duncan C. White (**204**)

#### 16) Colin Crain (**198**)

#### 17) Kevin Colyer (**170**)

#### 18) Kian-Meng Ang (**162**)

#### 19) Yet Ebreo (**162**)

#### 20) Noud Aldenhoven (**140**)

#### 21) Duane Powell (**136**)

#### 22) Steven Wilson (**136**)

#### 23) Ulrich Rieke (**128**)

#### 24) Lubos Kolouch (**116**)

#### 25) Markus Holzer (**112**)

#### 26) Burkhard Nickels (**108**)

#### 27) Luca Ferrari (**104**)

#### 28) Mohammad S Anwar (**102**)

# DAMIAN's CORNER

***

Checkout the masterpiece collection of [**blogs**](https://perlweeklychallenge.org/blog/damian-corner) by **Damian Conway** solving **"Perl Weekly Challenge"**.

# PERL SOLUTIONS

***

### Adam Russell
![Adam Russell](/images/team/adam_russell.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/adam-russell/perl/ch-1.pl)]
[[**BLOG #1**](https://adamcrussell.livejournal.com/15872.html)]

***

### Alicia Bielsa
![Alicia Bielsa](/images/team/alicia_bielsa.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/alicia-bielsa/perl/ch-1.pl)]

***

### Andrezgz
![Andrezgz](/images/team/andrezgz.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/andrezgz/perl/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/andrezgz/perl/ch-2.pl)]

***

### Athanasius
![Athanasius](/images/team/athanasius.jpg)

[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/athanasius/perl/ch-2.pl)]

***

### Cheok-Yin Fung
![Cheok-Yin Fung](/images/team/cheok-yin-fung.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/cheok-yin-fung/perl/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/cheok-yin-fung/perl/ch-2.pl)]
[[**BLOG #1**](http://blogs.perl.org/users/c_y_fung/2020/04/cys-take-on-perl-weekly-challenge-on-057.html)]

***

### Dave Jacoby
![Dave Jacoby](/images/team/dave_jacoby.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/dave-jacoby/perl/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/dave-jacoby/perl/ch-2.pl)]
[[**BLOG #1**](https://jacoby.github.io/2020/04/20/challenge-57-mostly-binary-trees.html)]

***

### Duncan C. White
![Duncan C. White](/images/team/duncan_white.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/duncan-c-white/perl/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/duncan-c-white/perl/ch-2.pl)]

***

### E. Choroba
![E. Choroba](/images/team/e-choroba.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/e-choroba/perl/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/e-choroba/perl/ch-2.pl)]
[[**BLOG #1**](http://blogs.perl.org/users/e_choroba/2020/04/perl-weekly-challenge-057-invert-tree-and-shortest-unique-prefix.html)]

***

### Jared Martin
![Jared Martin](/images/team/user.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/jaredor/perl/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/jaredor/perl/ch-2.pl)]
[[**BLOG #1**](http://blogs.perl.org/users/jared_martin/2020/04/pwc-057-task-1-invert-tree-task-2-shortest-unique-prefix.html)]

***

### Leo Manfredi
![Leo Manfredi](/images/team/user.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/manfredi/perl/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/manfredi/perl/ch-2.pl)]

***

### Matthew Somerville
![Matthew Somerville](/images/team/user.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/dracos/perl/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/dracos/perl/ch-2.pl)]

***

### Pete Houston
![Pete Houston](/images/team/user.jpg)

[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/pete-houston/perl/ch-2.pl)]

***

### Roger Bell_West
![Roger Bell_West](/images/team/user.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/roger-bell-west/perl/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/roger-bell-west/perl/ch-2.pl)]

***

### User Person
![User Person](/images/team/user.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/user-person/perl/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/user-person/perl/ch-2.pl)]

***

### Wanderdoc
![Wanderdoc](/images/team/user.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/wanderdoc/perl/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/wanderdoc/perl/ch-2.pl)]

***

### Yet Ebreo
![Yet Ebreo](/images/team/yet-ebreo.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/yet-ebreo/perl/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/yet-ebreo/perl/ch-2.pl)]

# RAKU SOLUTIONS

***

### Arne Sommer
![Arne Sommer](/images/team/arne-sommer.jpg)

[[**RAKU #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/arne-sommer/raku/ch-1.p6)]
[[**RAKU #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/arne-sommer/raku/ch-2.p6)]
[[**BLOG #1**](https://raku-musings.com/inverted-prefix.html)]

***

### Kevin Colyer
![Kevin Colyer](/images/team/kevin_colyer.jpg)

[[**RAKU #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/kevin-colyer/raku/ch-1.p6)]
[[**RAKU #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/kevin-colyer/raku/ch-2.p6)]

***

### Luca Ferrari
![Luca Ferrari](/images/team/luca-ferrari.jpg)

[[**RAKU #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/luca-ferrari/raku/ch-1.p6)]
[[**RAKU #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/luca-ferrari/raku/ch-2.p6)]
[[**BLOG #1**](https://fluca1978.github.io/2020/04/20/PerlWeeklyChallenge57.html)]

***

### Mark Anderson
![Mark Anderson](/images/team/user.jpg)

[[**RAKU #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/mark-anderson/raku/ch-1.p6)]
[[**RAKU #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/mark-anderson/raku/ch-2.p6)]

***
### Markus Holzer
![Markus Holzer](/images/team/markus-holzer.jpg)

[[**RAKU #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/markus-holzer/raku/ch-2.p6)]

***

### Scimon Proctor
![Scimon Proctor](/images/team/simon_proctor.jpg)

[[**RAKU #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/simon-proctor/raku/ch-1.p6)]
[[**RAKU #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/simon-proctor/raku/ch-2.p6)]

***

### Shahed Nooshmand
![Shahed Nooshmand](/images/team/user.jpg)

[[**RAKU #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/shahed-nooshmand/raku/ch-1.sh)]
[[**RAKU #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/shahed-nooshmand/raku/ch-2.sh)]
[[**BLOG #1**](https://rafraichisso.ir/2020/04/22/pwc-57)]

# PERL & RAKU SOLUTIONS

***

### Colin Crain
![Colin Crain](/images/team/user.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/colin-crain/perl/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/colin-crain/perl/ch-2.pl)]
[[**RAKU #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/colin-crain/raku/ch-1.p6)]
[[**RAKU #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/colin-crain/raku/ch-2.p6)]

***

### Javier Luque
![Javier Luque](/images/team/javier_luque.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/javier-luque/perl/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/javier-luque/perl/ch-2.pl)]
[[**RAKU #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/javier-luque/raku/ch-1.p6)]
[[**RAKU #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/javier-luque/raku/ch-2.p6)]
[[**BLOG #1**](https://perlchallenges.wordpress.com/2020/04/20/perl-weekly-challenge-057/)]

***

### Laurent Rosenfeld
![Laurent Rosenfeld](/images/team/laurent_rosenfeld.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/laurent-rosenfeld/perl/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/laurent-rosenfeld/perl/ch-2.pl)]
[[**RAKU #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/laurent-rosenfeld/raku/ch-1.p6)]
[[**RAKU #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/laurent-rosenfeld/raku/ch-2.p6)]
[[**BLOG #1**](http://blogs.perl.org/users/laurent_r/2020/04/perl-weekly-challenge-57-tree-inversion-and-shortest-unique-prefix.html)]

***

### Mohammad S Anwar
![Mohammad S Anwar](/images/team/mohammad_anwar.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/mohammad-anwar/perl/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/mohammad-anwar/perl/ch-2.pl)]
[[**RAKU #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/mohammad-anwar/raku/ch-1.p6)]
[[**RAKU #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/mohammad-anwar/raku/ch-2.p6)]
[[**BLOG #1**](https://perlweeklychallenge.org/blog/weekly-challenge-057)]

***

### Ruben Westerberg
![Ruben Westerberg](/images/team/ruben-westerberg.jpg)

[[**PERL #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/ruben-westerberg/perl/ch-1.pl)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/ruben-westerberg/perl/ch-2.pl)]
[[**RAKU #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/ruben-westerberg/raku/ch-1.p6)]
[[**RAKU #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/ruben-westerberg/raku/ch-2.p6)]

***

### Ulrich Rieke
![Ulrich Rieke](/images/team/user.jpg)

[[**RAKU #1**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/ulrich-rieke/raku/ch-1.p6)]
[[**PERL #2**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-057/ulrich-rieke/perl/ch-2.pl)]

***
Last but not the least, I would like to request all members, please send us your photo, that you already use on some other web platform, to use in the weekly blog, if not already sent.

***
