---
title: "Kian-Meng Ang Weekly Review: Challenge - 025"
date: 2019-08-19T03:00:00+00:00
description: "Kian-Meng Ang Weekly Review: Challenge - #025."
type: post
image: images/blog/blog-header-15.jpg
author: Kian-Meng Ang
tags: ["Perl5", "Perl6"]
---
***
Continues from [previous week](/blog/review-challenge-024/).

Feel free to [submit a merge request or open a ticket](https://github.com/manwar/perlweeklychallenge) if you found any issues with this post. We highly appreciate and welcome your feedback.

For a quick overview, go through the [original tasks](/blog/perl-weekly-challenge-025/) and [recap](/blog/recap-challenge-025/) of the weekly challenge.


***
### Task #1
***

**CPAN** modules used: [`Const::Fast`](https://metacpan.org/pod/Const::Fast), [`Graph`](https://metacpan.org/pod/Graph), [`List::MoreUtils`](https://metacpan.org/pod/List::MoreUtils), [`List::Util`](https://metacpan.org/pod/List::Util), [`Memoize`](https://metacpan.org/pod/Memoize), [`Modern::Perl`](https://metacpan.org/pod/Modern::Perl), [`Parallel::WorkUnit`](https://metacpan.org/pod/Parallel::WorkUnit), [`Storable`](https://metacpan.org/pod/Storable), [`constant`](https://metacpan.org/pod/constant), [`feature`](https://metacpan.org/pod/feature), [`strict`](https://metacpan.org/pod/strict), [`utf8`](https://metacpan.org/pod/utf8), [`warnings`](https://metacpan.org/pod/warnings)

Out of curiosity, of all submitted solutions, which participant have the fastest implementation?

Before we answer that, a simple benchmark was conducted using the `time` command through Perl v5.28.1 in Ubuntu
19.04 as shown below.

```bash
$ time perl ch-1.pl
```
The results ranked by the execution time.
1. Adam Russell: real 0m0.772s, user 0m0.713s, sys 0m0.040s
2. Yet Ebreo: real 0m5.163s, user 0m5.127s, sys 0m0.020s
3. Andrezgz: real 0m5.367s, user 0m5.360s, sys 0m0.000s
4. E. Choroba: real 0m8.269s, user 0m8.248s, sys 0m0.008s
5. Joelle Maslak: real 0m11.575s, user 0m38.341s, sys 0m0.286s
6. Guillermo Ramos: real 0m15.314s, user 0m15.029s, sys 0m0.280s
7. Colin Crain: real 0m25.039s, user 0m25.011s, sys 0m0.004s
8. Laurent Rosenfeld: real 0m50.939s, user 0m50.788s, sys 0m0.064s
9. Jaldhar H. Vyas: real 1m6.381s, user 1m6.241s, sys 0m0.053s
10. Athanasius: real 1m54.845s, user 1m54.437s, sys 0m0.264s
11. Ruben Westerberg: real 2m44.981s, user 2m44.287s, sys 0m0.452s
12. Duane Powell: real 4m17.133s, user 4m14.221s, sys 0m2.451s
13. Lars Balker: real 4m49.408s, user 4m48.077s, sys 0m0.384s
14. Roger Bell West: real 8m17.638s, user 8m15.932s, sys 0m0.484s

From the result above, Adam Russell's [solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-025/adam-russell/perl5/ch-1.pl) yielded the best result by implementing [Floyd-Warshall All Pairs Shortest Path algorithm](https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm) through the [`Graph`](https://metacpan.org/pod/Graph) CPAN module. Read his [blog](https://adamcrussell.livejournal.com/9171.html) for further details.

Special mention of [solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-025/joelle-maslak/perl5/ch-1.pl) by Joelle Maslak which used [`Parallel::WorkUnit`](https://metacpan.org/pod/Parallel::WorkUnit) CPAN module to find the solution in a parallel manner. Note that the CPAN module was written by Joelle as well.

For those who are curious about the number of combinations available, you can check the output of the [solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-025/athanasius/perl5/ch-1.pl) by Athanasius.

```bash
$ perl ch-1.pl

  There are 70 different Pokémon names
   1:     64
   2:    153
   3:    414
   4:   1025
   5:   2433
   6:   5529
   7:  11964
   8:  24270
   9:  46046
  10:  81197
  11: 131728
  12: 194642
  13: 260203
  14: 311684
  15: 331912
  16: 310198
  17: 249704
  18: 169904
  19:  96066
  20:  43676
  21:  15128
  22:   3648
  23:    416

  The longest sequences of the 70 given Pokémon names contain 23 elements; e.g.:

  machamp, petilil, loudred, darmanitan, nosepass, seaking, girafarig, gabite, exe
  ggcute, emboar, relicanth, heatmor, registeel, landorus, simisear, rufflet, trap
  inch, haxorus, scrafty, yamask, kricketune, emolga, audino
```

***
### Task #2
***

**CPAN** modules used: [`Class::Enum`](https://metacpan.org/pod/Class::Enum), [`Data::Dumper`](https://metacpan.org/pod/Data::Dumper), [`Getopt::Long`](https://metacpan.org/pod/Getopt::Long), [`Modern::Perl`](https://metacpan.org/pod/Modern::Perl), [`Moo`](https://metacpan.org/pod/Moo), [`Test::More`](https://metacpan.org/pod/Test::More), [`autodie`](https://metacpan.org/pod/autodie), [`constant`](https://metacpan.org/pod/constant), [`feature`](https://metacpan.org/pod/feature), [`integer`](https://metacpan.org/pod/integer), [`strict`](https://metacpan.org/pod/strict), [`warnings`](https://metacpan.org/pod/warnings)

Start with this [YouTube video](https://www.youtube.com/watch?v=WwAYU1GFyQo)
(via [Adam Russell](https://adamcrussell.livejournal.com/8913.html)) to get an
overview of the Chaocipher, the playing card cipher. For further
understanding, look at Adam Russell's [solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-025/adam-russell/perl5/ch-2.pl), which was based on the simulation playing card of the cipher.

Once you've understand the fundamental concept of Chaocipher, start with the solution by [Andrezgz](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-025/andrezgz/perl5/ch-2.pl) which was well-written clean code, readable and easy to grasp the implementation details. Similarly, read the solution by [Laurent Rosenfeld](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-025/laurent-rosenfeld/perl5/ch-2.pl) as well, slightly difference but with test cases. Next, move the solution by [E. Choroba](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-025/e-choroba/perl5/ch-2.pl) if you're looking for an Object-Oriented (OO) approach. Now, if you are looking for working console program of the cipher, read the solution by [Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-025/joelle-maslak/perl5/ch-2.pl). And lastly, go through all other submitted solutions. Compare and contrast.

That is the code reading sequence we will recommend for anyone who look at this
task for the first time. However, your mileage may vary (YMMV).

***
### See Also
***

(1) [Pokemon Chiao, Perl 6](https://perl6.eu/pokemon-chiao.html) by Arne Sommer


(2) [Pokemon Name Ladder](https://adamcrussell.livejournal.com/9171.html) by Adam Russell


(3) [Chaocipher Card Simulation](https://adamcrussell.livejournal.com/8913.html) by Adam Russell


(4) [Perl Weekly Challenge 25: Pokémon Sequence and Chaocipher](http://blogs.perl.org/users/laurent_r/2019/09/perl-weekly-challenge-25-pokemon-sequence-and-chaocipher.html) by Laurent Rosenfeld


(5) [RogerBW's Blog: Perl Weekly Challenge 25](https://blog.firedrake.org/archive/2019/09/Perl_Weekly_Challenge_25.html) by Roger Bell West


(6) [Perl Weekly Challenge W025 - Longest Pokemon Sequence, Chaocipher](http://blogs.perl.org/users/yet_ebreo/2019/09/perl-weekly-challenge-w025---pokemon-nameschaocipher.html) by Yet Ebreo


(7) [Perl Weekly Challenge 025: Pokemon Sequence and Chaocipher](http://blogs.perl.org/users/e_choroba/2019/09/perl-weekly-challenge-025-pokemon-sequence-and-chaocipher.html) by E. Choroba
