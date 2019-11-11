---
title: "Kian-Meng Ang Weekly Review: Challenge - 030"
date: 2019-10-27T00:00:00+00:00
description: "Kian-Meng Ang Weekly Review: Challenge - #030."
type: post
image: images/blog/p5-review-challenge-030.jpg
author: Kian-Meng Ang
tags: ["Perl"]
---
***
Continues from [**previous week**](/blog/review-challenge-029/).

Feel free to [**submit a merge request or open a ticket**](https://github.com/manwar/perlweeklychallenge) if you found any issues with this post. We highly appreciate and welcome your feedback.

For a quick overview, go through the [**original tasks**](/blog/perl-weekly-challenge-030/) and [**recap**](/blog/recap-challenge-030/) of the weekly challenge.


***
## Task #1
***

**CPAN** modules used: [`Const::Fast`](https://metacpan.org/pod/Const::Fast), [`Date::Christmas`](https://metacpan.org/pod/Date::Christmas), [`Date::Manip::Date`](https://metacpan.org/pod/Date::Manip::Date), [`Date::Simple`](https://metacpan.org/pod/Date::Simple), [`DateTime`](https://metacpan.org/pod/DateTime), [`DateTime::Format::HTTP`](https://metacpan.org/pod/DateTime::Format::HTTP), [`Modern::Perl`](https://metacpan.org/pod/Modern::Perl), [`POSIX`](https://metacpan.org/pod/POSIX), [`Test::More`](https://metacpan.org/pod/Test::More), [`Time::Local`](https://metacpan.org/pod/Time::Local), [`Time::Piece`](https://metacpan.org/pod/Time::Piece), [`Time::Seconds`](https://metacpan.org/pod/Time::Seconds), [`constant`](https://metacpan.org/pod/constant), [`feature`](https://metacpan.org/pod/feature), [`strict`](https://metacpan.org/pod/strict), [`utf8`](https://metacpan.org/pod/utf8), [`warnings`](https://metacpan.org/pod/warnings)

This task was a good example that some people say they can find almost everything in **CPAN** to solve a computing problem. We didn't even realize that until we read the solution by [**Markus Holzer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-030/markus-holzer/perl5/ch-1.pl) which used a **CPAN** module, `Date::Christmas` that calculates the Christmas day of the week. His answer was a good start for anyone to have a quick overview on the general approach of solving this task. Basically loop through the year from 2019 till 2100 and determine whether the day of 25th of December is Sunday either through **CPAN** modules or manual calculation.

The next solution you should look into was submitted by [**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-030/colin-crain/perl5/ch-1.pl) which implemented three different algorithms to [**calculate the day of the month**](https://en.wikipedia.org/wiki/Determination_of_the_day_of_the_week).

For other submissions which implemented these algorithms, look into those solutions which took the purist approach without using any **CPAN** modules. These people includes [**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-030/adam-russell/perl5/ch-1.pl), [**Trenton Langer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-030/trenton-langer/perl5/ch-1.pl), [**Vyacheslav Volgarev**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-030/vyacheslav-volgarev/perl5/ch-1.pl), [**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-030/jaldhar-h-vyas/perl5/ch-1.pl), [**Leoltron**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-030/Leoltron/perl5/ch-1.pl), [**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-030/colin-crain/perl5/ch-1.pl) and [**Creewick**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-030/creewick/perl5/ch-1.pl).

***
## Task #2
***

**CPAN** modules used: [`Algorithm::Combinatorics`](https://metacpan.org/pod/Algorithm::Combinatorics), [`Const::Fast`](https://metacpan.org/pod/Const::Fast), [`Data::Dumper`](https://metacpan.org/pod/Data::Dumper), [`List::Util`](https://metacpan.org/pod/List::Util), [`Math::Combinatorics`](https://metacpan.org/pod/Math::Combinatorics), [`Modern::Perl`](https://metacpan.org/pod/Modern::Perl), [`PDL`](https://metacpan.org/pod/PDL), [`POSIX`](https://metacpan.org/pod/POSIX), [`Set::Product`](https://metacpan.org/pod/Set::Product), [`Test::More`](https://metacpan.org/pod/Test::More), [`Time::Piece`](https://metacpan.org/pod/Time::Piece), [`boolean`](https://metacpan.org/pod/boolean), [`constant`](https://metacpan.org/pod/constant), [`feature`](https://metacpan.org/pod/feature), [`strict`](https://metacpan.org/pod/strict), [`utf8`](https://metacpan.org/pod/utf8), [`warnings`](https://metacpan.org/pod/warnings)


Start with the solution by [**TesterR59**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-030/testerR59/perl5/ch-2.pl). Simple and straightforward brute-force approach with duplicated permutations. Again, [**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-030/colin-crain/perl5/ch-2.pl) showed us how to generate different series based on the assumptions made.

While there were different ways to remove the duplication, the solution by [**Andrezgz**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-030/andrezgz/perl5/ch-2.pl) was the best explained so far. We simply grok it by first read. This was a good example to illustrate that well-written comments improve understanding of the code.

```perl
my %groups;

# duplicates are allowed on the same group
# 0 is ommited in all loops (it's not positive)
for my $first ( 1..10 ) {
  for my $second ( 1..10 ) {
      my $third =  12 - $first - $second;   # the sum is 12 (an even number) so one of them is even
      next if $third <= 0;                  # none of them is negative
      my $key = join ' ',                   # create a unique combination ...
                sort { $a <=> $b }          # by sorting ...
                $first, $second, $third;    # the 3 numbers.
      print $key.$/ unless $groups{$key}++; # print combination only once.
  }
}
```

Is there anyone else who code in such way? Yes, [**Joelle Maslak**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-030/joelle-maslak/perl5/ch-2.pl). Besides the mathematical background on the problem and assumptions made. The solution also demonstrated different **Perl 5** idioms, for example, generating and transforming a list, as shown below. Be sure to check out the remaining part of the solution to pick up a trick or two.

```perl
# Read this next portion of code from bottom up.
say join "\n",    # Build a string, seperating sets by newlines
    map { join( ",", $_->@* ) }    # Make the sets into comma-deliminated strings
    grep { sum( $_->@* ) == 12 }   # Make sure these numbers sum to 12
    grep { $_->[1] < $_->[2] }     # Make sure last number is the biggest
    grep { $_->[0] < $_->[1] }     # Make sure 2nd number is bigger than 1st
    cross( [ 1 .. 7 ], [ 2 .. 8 ], [ 3 .. 9 ] );    # Create a list where each element is a list
                                                    # of 3 numbers.
```

For generating permutations and combinations, the solution by [**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-030/adam-russell/perl5/ch-2.pl) have shown us that this was doable through the`Math::Combinatorics` **CPAN** module. [**Markus Holzer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-030/markus-holzer/perl5/ch-2.pl) also did the same with the `Algorithm::Combinatorics` **CPAN** module as shown below. Compare and contrast his solution against **Joelle** to find opposite approach to solve this task.

```perl
  use Modern::Perl;
  use List::Util qw( sum );
  use Set::Product qw( product );
  use Algorithm::Combinatorics qw( variations_with_repetition );

  product {
      my ( $even, $rest ) = @_;

      say join( ", ", $even, @$rest )
          if sum( $even, @$rest ) == 12;
  }
  [ 2, 4 .. 10 ],
  [ variations_with_repetition( [1 .. 10], 2 ) ];
```

And we thought we've seen it all, yet, [**Yet Ebreo**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-030/yet-ebreo/perl5/ch-2.pl) reminded us that **Perl** is a [**write-only language**](https://en.wikipedia.org/wiki/Write-only_language) where you can cramp everything into a one-liner.

```perl
my $r = join ",", 0..12;
eval==12  && say y/+/,/r while glob "{$r}+{$r}+{$r}";
```

From the examples we've reviewed so far, we've observed that in **Perl**, there's more than one way to do it (**TMTOWTDI**). So, which is your preferred style? Send your feedback to the **Perl Weekly Challenge** (PWC) [**Twitter account**](https://twitter.com/perlwchallenge).

***
### SEE ALSO
***

(1) [**Christmas Twelfth Cometh Perl 6**](https://perl6.eu/xmas-12.html) by **Arne Sommer**

(2) [**Perl Weekly Challenge 030**](https://adamcrussell.livejournal.com/10331.html) by **Adam Russell**

(3) [**Blogging Challenge 30**](https://jacoby.github.io/2019/10/15/blogging-challenge-30.html) by **Dave Jacoby**

(4) [**Perl Weekly Challenge 30: Sunday Christmas and Triplets**](http://blogs.perl.org/users/laurent_r/2019/10/perl-weekly-challenge-30-sunday-christmas-and-triplets.html) by **Laurent Rosenfeld**

(5) [**Perl Weekly Challenge: Week 30**](https://www.braincells.com/perl/2019/10/perl_weekly_challenge_week_30.html) by **Jaldhar H. Vyas**

(6) [**RogerBW's Blog: Perl Weekly Challenge 30**](https://blog.firedrake.org/archive/2019/10/Perl_Weekly_Challenge_30.html) by **Roger Bell_West**

(7) [**Perl Weekly Challenge 030: Sunday Christmas and Series with sum 12**](http://blogs.perl.org/users/e_choroba/2019/10/perl-weekly-challenge-030-sunday-christmas-and-series-with-sum-12.html) by **E. Choroba**
