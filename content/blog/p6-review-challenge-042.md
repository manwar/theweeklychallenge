---
title: "Laurent Rosenfeld Weekly Review: Challenge - 042"
date: 2020-01-20T00:00:00+00:00
description: "Laurent Rosenfeld Weekly Review: Challenge - #042."
type: post
image: images/blog/p6-review-challenge-042.jpg
author: Laurent Rosenfeld
tags: ["Raku"]
---
***
# Raku Solutions Weekly Review
***

## Task #1: Octal Numbers

This is derived in part from my [blog post](http://blogs.perl.org/users/laurent_r/2020/01/perl-weekly-challenge-42-octal-numbers-and-balanced-parentheses.html) made in answer to the [Week 42 of the Perl Weekly Challenge](https://perlweeklychallenge.org/blog/perl-weekly-challenge-042/) organized by  <a href="http://blogs.perl.org/users/mohammad_s_anwar/">Mohammad S. Anwar</a> as well as answers made by others to the same challenge.

The challenge reads as follows:

*Write a script to print decimal number 0 to 50 in Octal Number System.*

*For example:*

    Decimal 0 = Octal 0
    Decimal 1 = Octal 1
    Decimal 2 = Octal 2
    [ ... ]

## My solution

Raku has a [base](https://docs.raku.org/routine/base) method to convert a number into a string representation in any base between 2 and 36.

With this, it is so easy that we can use a one-liner:

    $ perl6 -e 'say "Decimal: $_ \t=  Octal ", .base(8) for 0..50;'
    Decimal: 0      =  Octal 0
    Decimal: 1      =  Octal 1
    Decimal: 2      =  Octal 2
    Decimal: 3      =  Octal 3
    Decimal: 4      =  Octal 4
    Decimal: 5      =  Octal 5
    Decimal: 6      =  Octal 6
    Decimal: 7      =  Octal 7
    Decimal: 8      =  Octal 10
    Decimal: 9      =  Octal 11
    [ ... Lines omitted for brevity ... ]
    Decimal: 45     =  Octal 55
    Decimal: 46     =  Octal 56
    Decimal: 47     =  Octal 57
    Decimal: 48     =  Octal 60
    Decimal: 49     =  Octal 61
    Decimal: 50     =  Octal 62

## Alternative Solutions

### Using the `base`method

Many challengers used the same [base](https://docs.raku.org/routine/base) method as I did, as follows:

[Arne Sommer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-042/arne-sommer/raku/ch-1.p6):

``` Perl6
say "Decimal $_ = Octal { $_.base(8) }" for ^51;
```

[Daniel Mita]'https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-042/daniel-mita/raku/ch-1.sh) did it in the form of a one-liner:

``` Perl6
raku -e '.base(8).say for ^51'
```

[Markus Holzer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-042/markus-holzer/raku/ch-1.p6):

``` Perl6
.base(8).say for ^51
```

[Simon Proctor](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-042/simon-proctor/raku/ch-1.p6):

``` Perl6
for $start-val..$end-val -> \val {
    say "Decimal {val} = Octal {val.base(8)}";
```

[Ulrich Rieke](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-042/ulrich-rieke/raku/ch-1.p6):

``` Perl6
for (1..50) -> $i {
  say "Decimal $i = Octal " ~ $i.base(8).Str ;
}
```

### Using a Format String

Many other challengers used the `%o` option of the `printf`, `sprintf`, and `fmt` routines (which I also used in my Perl 5 solution):


[Burkhard Nickels](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-042/burkhard-nickels/raku/ch-1.p6):

``` Perl6
for (0 .. 50) {
    printf("Decimal: %d - Octal: %o\n",$_,$_);
}
```


[Noud Aldenhoven](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-042/noud/raku/ch-1.p6)

``` Perl6
say $_.fmt("Decimal $_ = Octal %o") for ^51;
```

[Jaldhar H. Vyas](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-042/jaldhar-h-vyas/raku/ch-1.sh) came back to the challenge after a pause. Welcome back, Jaldhar. He wrote a Raku one-liner along the same lines:

    perl6 -e '[0 .. 50].map({ printf("Decimal %d = Octal %o\n", $_, $_) });'

[Javier Luque](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-042/javier-luque/raku/ch-1.p6) used a format string (`%o`option) to do the job:

``` Perl6
sub to-octal(Int $i) {
    return sprintf('%o', $i);
}
```

[Roger Bell West](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-042/roger-bell-west/raku/ch-1.p6) also used a format string:

for (0..50) {
  printf('Decimal %d = Octal %o' ~ "\n",$_,$_);
}

[Ryan Thompson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-042/ryan-thompson/raku/ch-1.p6) also used a format string:

```Perl6
say (0..50).fmt('Decimal %1$2d = Octal %2o', "\n");
```

### Doing it the Hard Way

Two challengers decided to implement a full conversion algorithm:

[Kevin Colyer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-042/kevin-colyer/raku/ch-1.p6) knows that there are easier ways to do it, but decided to roll his own version, perhaps for the fun of the exercise. He did it in the old assembly language (or C hacker) way:

``` Perl6
sub dec-to-oct(Int $n is copy) returns Str {
    return "0" if $n==0;
    my Str $o = "";
    while $n>0 {
        $o= $n +& 7 ~ $o; # add lower three bits
        $n= $n +> 3     ; # shift off lower three bits
    }
    return $o;
}

say "Decimal $_ = Octal {dec-to-oct($_)} is sprintf conversion {sprintf "%o", $_}" for ^51;
```

Just in case you don't know or don't remember (I didn't and had to look it up), `+&` is the numeric bitwise `AND` operator, and `+>` is the integer bit shift to the right.

[Colin Crain](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-042/colin-crain/raku/ch-1.p6) used the standard CS integer division and remainder to compute octal numbers. Even though this is not required in the task, Colin even expanded the definition domain to Z (inclluding negative integers):

``` Perl6
sub MAIN () {

    for -50 .. 50 {
        printf "Decimal %3d = Octal %3d\n", $_, octal($_) ;
    }
}

sub octal ( $dec is copy ){
    my $out = "";
    my $sign = $dec < 0 ?? "-" !! "";
    $dec .= abs;
    my $rem;
    while ( $dec > 0 ) {
        $rem = $dec % 8;
        $dec = ($dec/8).floor;
        $out = $rem ~ $out;
    }
    $out = $sign ~ $out;
    return $out ?? $out !! 0;  ## needs to output 0 for 0
}
```

Colin provides a long comment explaining his algorithm, please follow the link if you want further explanations.

## SEE ALSO

Not less than five blog posts (besides mine) this time:

* Arne Sommer: https://raku-musings.com/octal-brace.html;

* Burkhard Nickels: https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-042/burkhard-nickels/perl/ch-1.pod;

* Jaldhar M. Vyas: https://www.braincells.com/perl/2020/01/perl_weekly_challenge_week_42.html;

* Javier Luque: https://perlchallenges.wordpress.com/2020/01/06/perl-weekly-challenge-042/;

* Ryan J. Thompson: http://www.ry.ca/2020/01/octal-representation/.

## Wrapping up

Please let me know if I forgot any of the challengers or if you think my explanation of your code misses something important (send me an e-mail or just raise an issue against this GitHub page).

If you want to participate to the Perl Weekly Challenge, please connect to [this site](https://perlweeklychallenge.org/).
