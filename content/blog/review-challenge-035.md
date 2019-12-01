---
title: "Kian-Meng Ang Weekly Review: Challenge - 035"
date: 2019-11-28T03:00:00+00:00
description: "Kian-Meng Ang Weekly Review: Challenge - #035."
type: post
image: images/blog/blog-header-15.jpg
author: Kian-Meng Ang
tags: ["Perl5", "Perl6"]
---
***
Continues from [previous week](/blog/review-challenge-034/).

Feel free to [submit a merge request or open a ticket](https://github.com/manwar/perlweeklychallenge) if you found any issues with this post. We highly appreciate and welcome your feedback.

For a quick overview, go through the [original tasks](/blog/perl-weekly-challenge-035/) and [recap](/blog/recap-challenge-035/) of the weekly challenge.

Additional feedback to the our Perl Weekly Challenge’s [Twitter account](https://twitter.com/perlwchallenge?lang=en) is much appreciated.

***
### Task #1
***

**CPAN** modules used: [`Data::Dumper`](https://metacpan.org/pod/Data::Dumper), [`Term::ANSIColor`](https://metacpan.org/pod/Term::ANSIColor), [`Term::ANSIScreen`](https://metacpan.org/pod/Term::ANSIScreen), [`Term::Size::Perl`](https://metacpan.org/pod/Term::Size::Perl), [`Test::More`](https://metacpan.org/pod/Test::More), [`Text::Morse`](https://metacpan.org/pod/Text::Morse), [`Text::Trim`](https://metacpan.org/pod/Text::Trim), [`Time::HiRes`](https://metacpan.org/pod/Time::HiRes), [`autodie`](https://metacpan.org/pod/autodie), [`constant`](https://metacpan.org/pod/constant), [`experimental`](https://metacpan.org/pod/experimental), [`feature`](https://metacpan.org/pod/feature), [`lib`](https://metacpan.org/pod/lib), [`strict`](https://metacpan.org/pod/strict), [`utf8`](https://metacpan.org/pod/utf8), [`warnings`](https://metacpan.org/pod/warnings)

If you need to have a quick overview on which submitted solutions to read or study, look at the submissions by [Andrezgz](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-035/andrezgz/perl5/ch-1.pl) and [Javier Luque](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-035/javier-luque/perl5/ch-1.pl). Both solutions were rather easy to follow and read.

Going through all the submissions, we observed two approaches used by participants to encode text into binary encoded [Morse code](https://en.wikipedia.org/wiki/Morse_code). The first was to generate the binary form from two signal durations (dots and dashes) dynamically. Participant who preferred this way were [Petr Roubicek](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-035/petr-roubicek/perl5/ch-1.pl), [Javier Luque](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-035/javier-luque/perl5/ch-1.pl), [Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-035/ruben-westerberg/perl5/ch-1.pl), [Laurent Rosenfeld](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-035/laurent-rosenfeld/perl5/ch-1.pl), [Ulrich Rieke](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-035/ulrich-rieke/perl5/ch-1.pl), [Roger Bell West](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-035/roger-bell-west/perl5/ch-1.pl), [Ryan Thompson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-035/ryan-thompson/perl5/ch-1.pl), [Andrezgz](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-035/andrezgz/perl5/ch-1.pl), [Colin Crain](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-035/colin-crain/perl5/ch-1.pl), and [E. Choroba](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-035/e-choroba/perl5/ch-1.pl).

While the second was to use a pre-generate list of characters to binary lookup table. Participants who used such approach were [Duane Powell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-035/duane-powell/perl5/ch-1.pl), [Adam Russell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-035/adam-russell/perl5/ch-1.pl), [Burkhard Nickels](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-035/burkhard-nickels/perl5/ch-1.pl), [Jaldhar H. Vyas](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-035/jaldhar-h-vyas/perl5/ch-1.pl), [Steven Wilson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-035/steven-wilson/perl5/ch-1.pl), [Giuseppe Terlizzi](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-035/giuseppe-terlizzi/perl5/ch-1.pl), and [Giuseppe Terlizzi](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-035/giuseppe-terlizzi/perl5/ch-1.pl).

As usual, selected submissions that caught our attention worth the discussions.

Only [Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-035/ruben-westerberg/perl5/ch-1.pl) and [E. Choroba](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-035/e-choroba/perl5/ch-1.pl) used [`pack`](https://perldoc.pl/functions/pack) and [`unpack`](https://perldoc.pl/functions/unpack) function to process binary data. The [default Perl tutorial](https://perldoc.pl/perlpacktut) on this matter will shed some light on using these two functions.

As usual, [Burkhard Nickels](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-035/burkhard-nickels/perl5/ch-1.pl) solved this week challenges using different CPAN modules to demonstrate Morse code in a visual manner. Read his very details write-up on how he tackle this challenge. While looking at his solution, we noticed that he used the CPAN module, `Term::Size::Perl` to determine the width of the terminal. In comparison,[Laurent Rosenfeld](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-035/laurent-rosenfeld/perl5/ch-1.pl) formatted the output to a predefined 80 characters as shown in code below.

    sub format80c {
        shift =~ s/(.{80})/$1\n/gr;
    }

[Ryan Thompson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-035/ryan-thompson/perl5/ch-1.pl) was the only participant that [wrote a script](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-035/ryan-thompson/extras/fetch-morse.pl) that download, parse, and generate the Morse code into Perl script from Wikipedia page. While the script itself was far more complex that the actual solution, we can learn a few Perl tricks.

[Colin Crain](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-035/colin-crain/perl5/ch-1.pl) solution demonstrated that writing a proper program according to a specification or standard, in this case, [M.1677 : International Morse code](https://www.itu.int/rec/R-REC-M.1677-1-200910-I/) was a tedious effort.

***
### Task #2
***

**CPAN** modules used: [`Data::Dumper`](https://metacpan.org/pod/Data::Dumper), [`Test::More`](https://metacpan.org/pod/Test::More), [`autodie`](https://metacpan.org/pod/autodie), [`constant`](https://metacpan.org/pod/constant), [`experimental`](https://metacpan.org/pod/experimental), [`feature`](https://metacpan.org/pod/feature), [`lib`](https://metacpan.org/pod/lib), [`strict`](https://metacpan.org/pod/strict), [`utf8`](https://metacpan.org/pod/utf8), [`warnings`](https://metacpan.org/pod/warnings)

Since this task was similar to Task 1 but done in reverse way (some reverse the lookup table), most of the participants reuse the same code when decoding Morse code. However, there were a selected few submissions we can read and learn from.

Again, start with the solution by [Javier Luque](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-035/javier-luque/perl5/ch-2.pl). Submission with error handling and correction was easy to read and understand.

[Andrezgz](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-035/andrezgz/perl5/ch-2.pl) applied the Dispatch table (in past challenge) when decoding the Morse code.

    my %morse_bin_inv = (
        '1'        => \&add_dot   ,  # dot
        '111'      => \&add_dash  ,  # dash
        '0'        => sub { }     ,  # intra-character gap
        '000'      => \&add_char  ,  # character gap
        '0000000'  => \&add_word  ,  # word gap
    );

[Colin Crain](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-035/colin-crain/perl5/ch-2.pl), besides solving it against a specification, used a [State Machine](https://en.wikipedia.org/wiki/Finite-state_machine) to decode the Morse signal continuously. This was probably the only comprehensive solution to handle exception with erroneous Morse signal.

***
### See Also
***

(1) [Perl Weekly Challenge - 035](https://perlchallenges.wordpress.com/2019/11/18/perl-weekly-challenge-035/) by Javier Luque


(2) [Morse and Remorse with Raku](https://raku-musings.com/morse-remorse.html) by Arne Sommer


(3) [Perl Weekly Challenge 035](https://adamcrussell.livejournal.com/12177.html) by Adam Russell


(4) [Perl Weekly Challenge #35](pearls.dyndnss.net) by Burkhard Nickels


(5) [Perl Weekly Challenge 35: Binary Encoded Morse Code](http://blogs.perl.org/users/laurent_r/2019/11/perl-weekly-challenge-35-binary-encoded-morse-code.html) by Laurent Rosenfeld


(6) [Perl Weekly Challenge: Week 35](https://www.braincells.com/perl/2019/11/perl_weekly_challenge_week_35.html) by Jaldhar H. Vyas


(7) [Perl Weekly Challenge 35: Binary Morse Code](https://blog.firedrake.org/archive/2019/11/Perl_Weekly_Challenge_35__Binary_Morse_Code.html) by Roger Bell West


(8) [Perl Weekly Challenge 035: Binary Morse Code](http://blogs.perl.org/users/e_choroba/2019/11/perl-weekly-challenge-035-binary-morse-code.html) by E. Choroba
