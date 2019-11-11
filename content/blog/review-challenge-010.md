---
title: "Kian-Meng Ang Weekly Review: Challenge - 010"
date: 2019-06-06T00:00:00+00:00
description: "Kian-Meng Ang Weekly Review: Challenge - #010."
type: post
image: images/blog/p5-review-challenge-010.jpg
author: Kian-Meng Ang
tags: ["Perl"]
---

Continues from [previous week](/blog/review-challenge-009).

For a quick overview, read through the [questions](/blog/perl-weekly-challenge-010/) and [recap](/blog/recap-challenge-010/) of the challenge.

***

## Challenge #1

***
The [Wikipage page](https://en.wikipedia.org/wiki/Roman_numerals) have a good introduction and manual calculation of conversion of Arabic numerals to Roman numerals. Read Laurent Rosenfeld's [blog post](http://blogs.perl.org/users/laurent_r/2019/05/perl-weekly-challenge-10-roman-numerals-and-jaro-winkler-distance.html) for the finer implementation details.

Most participants uses a hash to map between Arabic and Roman numerals. Since order of the matching roman numerals against the Arabic values is important, we'll need to sort it before any conversion. The only way to skip this was to use array instead of hash and there are three methods used by the participants.

Store the mapping as array of array references. Athanasius uses [this technique](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-010/athanasius/perl5/ch-1.pl).

    const my @ROMAN_NUMERALS =>
             (
                 # ---Numeral---   Subtractive
                 # Symbol  Value   Combination   Threshold
                 [  'M',   1_000,     undef,       undef  ],
                 [  'D',     500,      'CM',        900   ],
                 [  'C',     100,      'CD',        400   ],
                 [  'L',      50,      'XC',         90   ],
                 [  'X',      10,      'XL',         40   ],
                 [  'V',       5,      'IX',          9   ],
                 [  'I',       1,      'IV',          4   ],
             );

Store the mapping as two arrays and linked by position in the array. Both [Kivanc Yazan](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-010/kivanc-yazan/perl5/ch-1.pl) and [Steven Wilson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-010/steven-wilson/perl5/ch-1.pl) uses this approach.

    my @decimal = qw/ 1000 900 500 400 100 90 50 40 10  9 5  4 1/;
    my @roman   = qw/    M  CM   D  CD   C XC  L XL  X IX V IV I/;

Convert the hash into an array and obtain the value alternately as shown by [Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-010/joelle-maslak/perl5/ch-1.pl).

    my (@conversions) = (
        M  => 1000,
        CM => 900,
        D  => 500,
        CD => 400,
        C  => 100,
        XC => 90,
        L  => 50,
        XL => 40,
        X  => 10,
        X  => 9,
        V  => 5,
        IV => 4,
        I  => 1,
    );

    while (@conversions) {
        my $r = shift @conversions;
        my $v = shift @conversions;

Due to the nature of the question, there were more test code written for this question.

Guillermo Ramos' [approach](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-010/guillermo-ramos/perl5/ch-1.pl) on round trip testing both encoding and decoding the Roman numerals at the same time was elegantly written. Furthermore, the solution was commented adequately making code reading way easier.

    # Property:
    #   forall (x : Arabic). x == decode(encode(x))
    sub test {
        foreach my $i (1..9999) {
            my $roman = encode($i);
            my $arabic = decode($roman);
            die "ERROR: $i -> $roman -> $arabic" if $i != $arabic;
        }
        print "Test successful\n";
    }

Compare to Guillermo's brute force and round trip testing approach, Steven Wilson took a more [streamlined approach](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-010/steven-wilson/perl5/ch-1.pl) by testing a few known results as well as several edge cases.

    ok( encode_roman(246) eq "CCXLVI",     "encode 246 to CCXLVI" );
    ok( encode_roman(39) eq "XXXIX",       "encode 39 to XXXIX" );
    ok( decode_roman("CCXLVI") == 246,     "decode CCXLVI to 246" );
    ok( decode_roman("XXXIX") == 39,       "decode XXXIX to 39" );
    ok( encode_roman(3999) eq "MMMCMXCIX", "encode largest number" );
    ok( decode_roman("MMMCMXCIX") == 3999, "decode largest number" );
    ok( encode_roman(2019) eq "MMXIX",     "encode current year" );
    ok( encode_roman(0) eq "nulla",        "encode zero" );
    throws_ok { encode_roman(-1) } qr/Negative numbers/, "test negative number";
    throws_ok { encode_roman(4000) } qr/greater than the largest number/,
        "test greater than largest number";

And E. Choroba combined both round trip and streamline approach in his [test code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-010/e-choroba/perl5/ch-1.pl) as shown below.

    my %test = (XXXIX     => 39,
                CCXLVI    => 246,
                DCCLXXXIX => 789,
                MMCDXXI   => 2421,
                CLX       => 160,
                CCVII     => 207,
                MIX       => 1009,
                MLXVI     => 1066,
                MDCCLXXVI => 1776,
                MCMIII    => 1903,  # MDCDIII
                MCMX      => 1910,
                MCMLIV    => 1954,
                MCMXCIX   => 1999, # MIM
                MMXIX     => 2019,
                MMMCMXCIX => 3_999);

    for my $roman (keys %test) {
        is from_roman($roman), $test{$roman};
    }

    for my $roman (keys %test) {
        is to_roman($test{$roman}), $roman;
    }

Participants who wrote test cases in their solution including [Alicia Bielsa](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-010/alicia-bielsa/perl5/ch-1.pl), [Laurent Rosenfeld](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-010/laurent-rosenfeld/perl5/ch-1.pl), and [Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-010/joelle-maslak/perl5/ch-1.pl).

The most intriguing, wackiest, longest, and [over-engineered solution](https://github.com/manwar/perlweeklychallenge-club/tree/master/challenge-010/adam-russell/perl5) went to Adam Russell. Read his [write-up](https://adamcrussell.livejournal.com/3640.html) on why and how he tackled the problem by writing a Parser.

***

## Challenge #2

***
Background on the [Jaro–Winkler distance](https://en.wikipedia.org/wiki/Jaro%E2%80%93Winkler_distance) and again, [good write-up](http://blogs.perl.org/users/laurent_r/2019/05/perl-weekly-challenge-10-roman-numerals-and-jaro-winkler-distance.html) on this challenge by Laurent Rosenfeld. Some interesting tidbits caught my attention while reading all the participant solutions. Using helper function to reduce code complexity and improve readability as [demonstrated](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-010/laurent-rosenfeld/perl5/ch-2.pl) by Laurent Rosenfeld. This kind of reminds you of the common [marco helper](https://en.wikipedia.org/wiki/Macro_(computer_science)) used in C/C++.

    sub max { $_[0] > $_[1] ? $_[0] : $_[1] }
    sub min { $_[0] > $_[1] ? $_[1] : $_[0] }
    ......
    my $dmax = int (max($len1, $len2) / 2) -1;

The [use](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-010/joelle-maslak/perl5/ch-2.pl) of [`fc` function](https://perldoc.perl.org/functions/fc.html) by Joelle Maslak as shown below, if I understand correctly, is to ensure the calculation of the string distance works even with Unicode string. The `fc` function (introduced since 5.16) is the way in Perl to case folding for Unicode string. [Case folding](https://www.w3.org/International/wiki/Case_folding), if you wonder, is a way to normalize text for comparison. For more information on this, brian d foy has written about this [case folding in Perl](https://www.effectiveperlprogramming.com/2012/02/fold-cases-properly/) with good examples.

        my $s1 = $ARGV[0];
        my $s2 = $ARGV[1];
        my $p  = $ARGV[2] // 0.1;

        say jaro_winkler_distance(fc($s1), fc($s2), $p);

And lastly, for this week, E. Choroba is the participant that uses a CPAN module, [`Text::JaroWinkler`](https://metacpan.org/pod/Text::JaroWinkler) to [solve this problem](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-010/e-choroba/perl5/ch-2.pl).

***

## Challenge #3

***
As usual, Joelle Maslak is the [only participant](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-010/joelle-maslak/perl5/ch-3.pl) to this challenge. Perhaps others want to try this question instead?

***

## Blog Posts

***
Blog posts by those who participated.

(1) [Roman Numerals in Perl 6](http://donaldh.wtf/2019/05/roman-numerals-in-perl-6/) by [Donald Hunter](http://donaldh.wtf/about/).

(2) [Roman Numerals with Perl Ⅵ](https://perl6.eu/roman.html) by [Arne Sommer](https://bbop.org/). Probably the only solution that recognize Roman numerals as actual [Unicode characters](https://en.wikipedia.org/wiki/Numerals_in_Unicode#Roman_numerals).

(3) [Perl Weekly Challenge 010](https://adamcrussell.livejournal.com/3640.html) by [Adam Russell](https://adamcrussell.livejournal.com/profile). Read this if you want to understand how he over-engineered the first challenge using [Parse::YYLex](https://metacpan.org/pod/Parse::YYLex) with [byacc](http://www.cpan.org/modules/by-module/RPC/JAKE/perl5-byacc-patches-0.6.readme).

(4) [Perl Weekly Challenge # 10: Roman Numerals and the Jaro-Winkler Distance](http://blogs.perl.org/users/laurent_r/2019/05/perl-weekly-challenge-10-roman-numerals-and-jaro-winkler-distance.html) by [Laurent-Rosenfeld](http://blogs.perl.org/mt/mt-cp.fcgi?__mode=view&id=4694).

(5) [Obiective Romanos grammaticam – Perl weekly challenge, week 10](https://rage.powered.ninja/2019/06/02/obiective-romanos-grammaticam.html) by [Francis Whittle](https://rage.powered.ninja/).

(6) [Converting Decimal to Roman Numbers in Perl 6](https://digitalbarbedwire.com/2019/06/01/converting-decimal-to-roman-numbers-in-perl-6/) by [Joelle Maslak](https://digitalbarbedwire.com/about/).
