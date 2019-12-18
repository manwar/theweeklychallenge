---
title: "Kian-Meng Ang Weekly Review: Challenge - 038"
date: 2019-12-19T03:00:00+00:00
description: "Kian-Meng Ang Weekly Review: Challenge - #038."
type: post
image: images/blog/blog-header-15.jpg
author: Kian-Meng Ang
tags: ["Perl5", "Perl6"]
---
***
Continues from [previous week](/blog/review-challenge-037/).

Feel free to [submit a merge request or open a ticket](https://github.com/manwar/perlweeklychallenge) if you found any issues with this post. We highly appreciate and welcome your feedback.

For a quick overview, go through the [original tasks](/blog/perl-weekly-challenge-038/) and [recap](/blog/recap-challenge-038/) of the weekly challenge.

Additional feedback to the our Perl Weekly Challenge’s [Twitter account](https://twitter.com/perlwchallenge?lang=en) is much appreciated.

***
### Task #1
***

**CPAN** modules used: [`Carp`](https://metacpan.org/pod/Carp), [`Date::Calc`](https://metacpan.org/pod/Date::Calc), [`Date::Manip`](https://metacpan.org/pod/Date::Manip), [`DateTime`](https://metacpan.org/pod/DateTime), [`POSIX`](https://metacpan.org/pod/POSIX), [`Test::Exception`](https://metacpan.org/pod/Test::Exception), [`Test::More`](https://metacpan.org/pod/Test::More), [`Time::Local`](https://metacpan.org/pod/Time::Local), [`Time::Piece`](https://metacpan.org/pod/Time::Piece), [`Try::Tiny`](https://metacpan.org/pod/Try::Tiny), [`boolean`](https://metacpan.org/pod/boolean), [`feature`](https://metacpan.org/pod/feature), [`strict`](https://metacpan.org/pod/strict), [`utf8`](https://metacpan.org/pod/utf8), [`warnings`](https://metacpan.org/pod/warnings)

Another week, another date related challenge.

For this task, we observed there were two approaches in validating the 7-digits date, either using a regex or non-regex at all. Almost everyone took the former approach but some participant have put in extra effort to ensure the readability of the code, especially the regex. Yes, you can write readable and maintainable code in Perl, regardless its notorious reputation of [looking like line noise](https://www.perl.com/pub/2000/01/10PerlMyths.html/#Perl_looks_like_line_noise).

First, look at the submission by [Adam Russell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-038/adam-russell/perl5/ch-1.pl). It's a straightforward approach to validate the 7-digits date. But it didn't tell us much on what being extracted or matched from the regex without checking back the requirement.

```perl
sub is_valid{
    my($x) = @_;
    $x =~ m/([1-2]{1})([0-9]{2})(0[1-9]{1}|1[012]{1})(0[1-9]{1}|1[012]{1}|2[0-9]{1})/;
    return $x, $1, $2, $3, $4;
}
```

Now, compare to these code submissions.

By [Javier Luque](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-038/javier-luque/perl5/ch-1.pl).

```perl
# Regex to test date format
return "Invalid date format"
    unless $date && $date =~ /
        ^                     # start string
        ([12])                # 1 or 2
        (\d\d)                # year 00-99
        (0[1-9]|1[0-2])       # month 1-12
        (0[1-9]|[12]\d|3[01]) # day 1-31
        $                     # end string
    /x;
```

By [Dave Jacoby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-038/dave-jacoby/perl5/ch-1.pl).

```perl
my ( $century, $year, $month, $day ) = $string =~ m{
    ^         # start of string
    (\d)      # century value 1-2
    (\d{2})   # year value 00-99
    (\d{2})   # month value 01-12
    (\d{2})   # day value 01-31, plus
    $         # end of string
}mx;
```
By [Andrezgz](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-038/andrezgz/perl5/ch-1.pl).

```perl
die 'invalid 7-digits date'.$/
    if $n !~ /^
        (?<y1>[1,2])                    # 1st: 1 or 2
        (?<y2>\d{2})                    # 2nd & 3rd: anything
        (?<m>0[1-9]|1[0-2])             # 4th & 5th: month
        (?<d>0[1-9]|[12][0-9]|3[01])    # 6th & 7th: day of the month
    $/x;
```

By [Ryan Thompson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-038/ryan-thompson/perl5/ch-1.pl). Yes, we do agree, the regex is the real star.

```perl
# This regex is the real star of the show
$ARGV[0] =~ /^
    (?<cent> [12]                    ) # Century, 1:1900, 2:2000
    (?<yy>   \d\d                    ) # Year (2-digit)
    (?<mm>   0[1-9] | 1[012]         ) # Month
    (?<dd>   0[1-9] | [12]\d | 3[01] ) # Day
$/x or die "usage: $0 Cyymmdd";
```

How about non-regex solution, as usual, [E. Choroba](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-038/e-choroba/perl5/ch-1.pl) surprised us with his submission by not using any regex at all. Compare his solution to the above mentioned regex examples, which is more readable and understandable at a quick glance?

```perl
sub validate {
    my ($number) = @_;
    die 'Invalid length' unless length $number == 7;

    my $date = {  1 => 20, 2 => 19 }->{ substr $number, 0, 1 }
      or die 'Invalid year';

    $date .= substr $number, 1;
    my $tp = eval { 'Time::Piece'->strptime($date, '%Y%m%d') };
    die 'Invalid date' unless $tp && $tp->mon == substr $number, 3, 2;

    return $tp->ymd
}
```

So what have we learned here from these submissions. You can write good and readable regex with good comment, split regex into multiple lines with the help of `\x` modifier, named captured variables, and good code indentation. The submission by [Ryan Thompson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-038/ryan-thompson/perl5/ch-1.pl) was a good example of this.

***
### Task #2
***

**CPAN** modules used: [`Algorithm::Combinatorics`](https://metacpan.org/pod/Algorithm::Combinatorics), [`Data::Dumper`](https://metacpan.org/pod/Data::Dumper), [`File::Slurp`](https://metacpan.org/pod/File::Slurp), [`File::Slurper`](https://metacpan.org/pod/File::Slurper), [`Getopt::Long`](https://metacpan.org/pod/Getopt::Long), [`LWP::Simple`](https://metacpan.org/pod/LWP::Simple), [`List::Util`](https://metacpan.org/pod/List::Util), [`Math::Combinatorics`](https://metacpan.org/pod/Math::Combinatorics), [`Memoize`](https://metacpan.org/pod/Memoize), [`Readonly`](https://metacpan.org/pod/Readonly), [`autodie`](https://metacpan.org/pod/autodie), [`constant`](https://metacpan.org/pod/constant), [`enum`](https://metacpan.org/pod/enum), [`feature`](https://metacpan.org/pod/feature), [`strict`](https://metacpan.org/pod/strict), [`utf8`](https://metacpan.org/pod/utf8), [`warnings`](https://metacpan.org/pod/warnings)

While the question did not explain it explicitly, the task is like a [Scrabble](https://en.wikipedia.org/wiki/Scrabble) game.

Let's us compare how participants initialize the character value/point/score and frequency/count.

By [Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-038/ruben-westerberg/perl5/ch-2.pl) which have the shortest code.

```perl
my @l=split "", "AGISUXZEJLRVYFDPWBNTOHMCKQ";
my @c=(8,3,5,7,5,2,5,9,3,3,3,3,5,3,3,5,5,5,4,5,3,3,4,4,2,2);
my @v=((1)x7, (2)x6,(3)x4,(4)x2,(5)x5,(10)x2);
```

By [Ryan Thompson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-038/ryan-thompson/perl5/ch-2.pl). Notice the for loop used to initialize the tile.

```perl
# Point values for each tile, as given in the challenge description:
my %val;
$val{$_} =  1 for qw< A G I S U X Z >;
$val{$_} =  2 for qw< E J L R V Y   >;
$val{$_} =  3 for qw< F D P W       >;
$val{$_} =  4 for qw< B N           >;
$val{$_} =  5 for qw< T O H M C     >;
$val{$_} = 10 for qw< K Q           >;

# Tile counts in bag. Each letter is repeated the specified number of times
# We shuffle with List::Util's shuffle(), but see perlfaq4 for Fisher-Yates
my @bag = shuffle map { my ($l, $count) = split //; ($l) x $count }
    qw< A8 G3 I5 S7 U5 X2 Z5
        E9 J3 L3 R3 V3 Y5
        F3 D3 P5 W5
        B5 N4
        T5 O3 H3 M4 C4
        K2 Q2 >;
```

By [Andrezgz](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-038/andrezgz/perl5/ch-2.pl). Similar to [Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-038/ruben-westerberg/perl5/ch-2.pl) but more readable.

```perl
# Points for each tile
my %tile_points = (
    A => 1, G => 1, I => 1, S => 1, U => 1, X => 1, Z => 1,
    E => 2, J => 2, L => 2, R => 2, V => 2, Y => 2,
    F => 3, D => 3, P => 3, W => 3,
    B => 4, N => 4,
    T => 5, O => 5, H => 5, M => 5, C => 5,
    K => 10, Q => 10
);

# Lot of available tiles
my @lot = (
    ('K','Q','X') x 2,
    ('D','F','G','H','J','L','O','R','V') x 3,
    ('C','M','N') x 4,
    ('B','I','P','T','U','W','Y','Z') x 5,
    ('S') x 7,
    ('A') x 8,
    ('E') x 9
);
```

By [E. Choroba](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-038/e-choroba/perl5/ch-2.pl). A rather elegant way of initializing the score and count of character tiles.

```perl
my %tile = (
    A => [ 8,  1 ], G => [ 3,  1 ], I => [ 5, 1 ], S => [ 7, 1 ],
    U => [ 5,  1 ], X => [ 2,  1 ], Z => [ 5, 1 ], E => [ 9, 2 ],
    J => [ 3,  2 ], L => [ 3,  2 ], R => [ 3, 2 ], V => [ 3, 2 ],
    Y => [ 5,  2 ], F => [ 3,  3 ], D => [ 3, 3 ], P => [ 5, 3 ],
    W => [ 5,  3 ], B => [ 5,  4 ], N => [ 4, 4 ], T => [ 5, 5 ],
    O => [ 3,  5 ], H => [ 3,  5 ], M => [ 4, 5 ], C => [ 4, 5 ],
    K => [ 2, 10 ], Q => [ 2, 10 ]);

my @all = shuffle(map +($_) x $tile{$_}[NUMBER], keys %tile);
```

***
### See Also
***

(1) [Perl Weekly Challenge – 038](https://perlchallenges.wordpress.com/2019/12/10/perl-weekly-challenge-038/) by Javier Luque


(2) [Datefinder General, A Raku Wordgame](https://raku-musings.com/date-word.html) by Arne Sommer


(3) [Perl Weekly Challenge 038](https://adamcrussell.livejournal.com/12987.html) by Adam Russell


(4) [Words and Dates: Which is more fun?](https://jacoby.github.io/2019/12/10/words-and-dates-which-is-more-fun.html) by Dave Jacoby


(5) [Perl Weekly Challenge #38](http://217.229.26.129:81/www/Perl/PWC/20191215_38/ch-1.html) by Burkhard Nickels


(6) [Perl Weekly Challenge 38: Date Finder and Word Game](http://blogs.perl.org/users/laurent_r/2019/12/perl-weekly-challenge-38-date-finder-and-word-game.html) by Laurent Rosenfeld

(7) [Perl Weekly Challenge 038: Date Finder and Word Game](http://blogs.perl.org/users/e_choroba/2019/12/perl-weekly-challenge-038-date-finder-and-word-game.html) by E. Choroba
