---
title: "Kian-Meng Ang Weekly Review: Challenge - 015"
date: 2019-07-05T00:00:00+00:00
description: "Kian-Meng Ang Weekly Review: Challenge - #015."
type: post
image: images/blog/blog-header-8.jpg
author: Kian-Meng Ang
tags: ["Perl5", "Perl6"]
---

Continues from [previous week](/blog/review-challenge-014).

Feel free to [submit a merge request or open a ticket](https://github.com/manwar/perlweeklychallenge) if you found any
issues with this post. Feedback are very much appreciated and welcome. 

For a quick overview, read the [original questions](https://perlweeklychallenge.org/blog/perl-weekly-challenge-015/)
and [recap](https://perlweeklychallenge.org/blog/recap-challenge-015/) of the weekly challenge.


***
### Challenge #1
***

Since this question is related to [Perl Weekly Challenge #12](https://perlweeklychallenge.org/blog/perl-weekly-challenge-012/), quite a few participants ([Adam Russell](https://adamcrussell.livejournal.com/5175.html), [Jaldhar H. Vyas](https://www.braincells.com/perl/2019/07/perl_weekly_challenge_week_15.html), [Yozen Hernandez](https://yzhernand.github.io/posts/perl-weekly-challenge-15/), [E. Choroba](http://blogs.perl.org/users/e_choroba/2019/07/perl-weekly-challenge-015-strong-and-weak-primes-and-vigenere-cipher.html), and others) were using and adapting their answer from Challenge #12. 

While the question mentioned about strong and weak primes, some participants ([Athanasius](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-015/athanasius/perl5/ch-1.pl), [E.Choroba](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-015/e-choroba/perl5/ch-1.pl), [Duane Powell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-015/duane-powell/perl5/ch-1.pl), and [Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-015/ruben-westerberg/perl5/ch-1.pl)) took initiative to include balance primes as well. 

Veesh Goldman's submitted [answer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-015/veesh-goldman/perl5/ch-1.pl) was the only solution that was written in a way that matches the suggested formulae.

    #an interface to our generator. Returns the prime at number n if it exists,
    #and otherwise expands the list until there is a prime at that number
    sub p {
      my $n = shift;
      state $top = 0;
      #if there's an entry at this number, then return it
      return $primes[$n] if $primes[$n];
      #otherwise, generate more numbers and then return it
      until ($primes[$n]) {
        generate_primes_till ($top+=1000)
      }
    }

    sub is_strong {
      my $n = shift;
      p($n) > ( p($n-1) + p($n+1) ) /2
    }

Simon Miner use of [regex to generate the prime numbers](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-015/simon-miner/perl5/ch-1.pl) was rather distinctive. Yes, the infamous Perl's one-liner approach which was due to [Abigail of Perl fame](http://neilk.net/blog/2000/06/01/abigails-regex-to-test-for-prime-numbers/).

    my @primes = grep( { ( 1 x $_ ) !~ /^1?$|^(11+?)\1+$/ } 1 .. 101 );

Similarly, Daniel Mantovani used [another variation of the regex](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-015/daniel-mantovani/perl5/ch-1.pl) to check for prime numbers.

    sub is_prime {
        return ( 7 x shift ) !~ /^(77+)\1+$/;
    }

Instead of filtering prime numbers by type using if-else as shown in Laurent Rosenfeld's [second example](http://blogs.perl.org/users/laurent_r/2019/07/functional-programming-in-perl-strong-and-weak-primes-perl-weekly-challenge.html) in non-functional implementation), we can use Perl's numeric [comparison operator `<=>`](https://perldoc.perl.org/perlop.html#Equality-Operator) instead. The comparison operator will return -1, 0, 1 for if the left number is less than, equal to, or more than the right number. For example, looking at E. Choroba's [code](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-015/e-choroba/perl5/ch-1.pl) as shown below.

    my $p = 'My::Primes'->new;
    my (@strong, @weak, @balanced);
    while (@strong < 10 || @weak < 10) {
        $p->grow;
        push @{
            (\@balanced, \@strong, \@weak)[
                $p->[-2] <=> ($p->[-3] + $p->[-1]) / 2 ]
        }, $p->[-2];
    }

Both [Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-015/ruben-westerberg/perl5/ch-1.pl) and [Yozen Hernandez](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-015/yozen-he%20%20rnandez/perl5/ch-1.pl) took similar way as well. However, we found Yozen's code more readable, due to the use of postfix dereference syntax.

    while ( ( @strong_primes < $n ) || ( @weak_primes < $n ) ) {
        push @primes, $iter->();
        if ( @primes > 2 ) {
            push $which_arr[ ( $primes[-2] <=> ( $primes[-3] + $primes[-1] ) / 2 ) ]->@*, $primes[-2];
        }
    }

If we remember correct, there were a few participants who prefer to use [postfix dereference syntax](https://perldoc.perl.org/perlref.html#Postfix-Dereference-Syntax), which was first introduced in Perl v5.20, in the their solutions. In Athanasius's [solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-015/athanasi%20%20us/perl5/ch-1.pl) shown below, notice the postfixed sigil-and-star, `@*`. Judging from lack of pragma being declared, we assumed Athanasius must be running at least Perl v5.24 or later where this feature was [declared as stable](https://www.effectiveperlprogramming.com/2016/04/postfix-dereferencing-is-stable-is-v5-24/).

    while (scalar $primes{strong}->@* < $SERIES_LENGTH ||
    scalar $primes{weak  }->@* < $SERIES_LENGTH)

***
### Challenge #2
***

Recommended books to read for this challenge are [Making, Breaking Codes:
Introduction to Cryptology](https://www.amazon.com/Making-Breaking-Codes-Introduction-Cryptology/dp/0130303690)
(via [Adam Russell](https://adamcrussell.livejournal.com/5175.html)) and [Applied Cryptography](https://www.schneier.com/books/applied_cryptography/)
(via [Dave Jacoby](https://jacoby.github.io/2019/07/01/perl-weekly-challenge-015.html)).

Some notable solutions that caught our attention. 

Veesh Goldman have created a [read–eval–print loop (REPL)](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop) in his
[solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-015/veesh-goldman/perl5/ch-2.pl)
for encoding and decoding a message. The use of [callback](https://en.wikipedia.org/wiki/Callback_(computer_programming)) in
implementing the loop was a good example on how to implement a pluggable code. And he also discovered that you can [interpolate function within a
string](https://www.oreilly.com/library/view/perl-cookbook/1565922433/ch01s11.html). And as the comment suggested, the use of [`shift`
function](https://perldoc.perl.org/functions/shift.html) was quite compulsive in his codes.

    #i recently found out that you can take a reference to a function
    #inside of an interpolation, so it's creeping in everywhere I
    #write code
    sub die_usage { die "${\shift} \n $usage" }

It was assumed that most solutions will use [`chr`](https://perldoc.perl.org/functions/chr.html) and
[`ord`](https://perldoc.perl.org/functions/ord.html) function (faster based on Steven Wilson's [benchmark](http://tilde.town/~wlsn/pwc015.html)) to
implement the encryption and decryption. Yet, solutions using lookup table were equivalent the same which was used by [Yozen
Hernandez](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-015/yozen-hernandez/perl5/ch-2.pl), [Roger Bell
West](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-015/roger-bell-west/perl5/ch-2.pl), [Ruben
Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-015/ruben-westerberg/perl5/ch-2.pl), [Athanasius](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-015/athanasius/perl5/ch-2.pl),
[Andrezgz](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-015/andrezgz/perl5/ch-2.pl), [Dave
Jacoby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-015/dave-jacoby/perl5/ch-2.pl), and [Jaldhar H.
Vyas](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-015/jaldhar-h-vyas/perl5/ch-2.pl). 

Duane Powell was the only participant who used [`pack`](https://perldoc.perl.org/functions/pack.html) and
[`unpack`](https://perldoc.perl.org/functions/unpack.html) function (often misunderstood functions but there is a [good
tutorial](https://metacpan.org/pod/distribution/perl/pod/perlpacktut.pod) to clear things up) to [solve the
problem](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-015/duane-powell/perl5/ch-2.pl).

Walt Mankowski's [solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-015/walt-mankowski/perl5/ch-2.pl)
for this challenge was a good starting code to read to have a quick overview of the problem. It's concise and clean, hence easy for understanding the
formulae. It's also a good example on how to use and process the command line options in a simple manner. 

Similarly, E Choroba's [solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-015/e-choroba/perl5/ch-2.pl)
was elegantly coded and production ready. Set a cipher key to the package and you can decode and encode at the same time. Moreover, the solution also came with test cases. 

***
### Challenge #3
***

We have nine participants submitted their answers in Perl 5 or Perl 6 to this week challenge. For Perl 5, we have [Dave
Jacoby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-015/dave-jaco%20by/perl5/ch-3.pl),
[Athanasius](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-015/athanasius/perl5/ch-3.pl),
[Neil Bowers](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-015/neil-bowers/perl5/ch-3.pl),
[Guillermo Ramos](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-015/guillermo-ramos/perl5/ch-3.pl),
[Steven Wilson](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-015/steven-wilson/perl5/ch-3.pl),
[Veesh Goldman](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-015/veesh-goldman/perl5/ch-extra.pl),
and lastly the regular [Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-015/joelle-maslak/perl5/ch-3.pl). For Perl 6, we see participation from
[Athanasius](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-015/athanasius/perl6/ch-3.p6), [Francis
Whittle](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-015/fjwhittle/perl6/ch-3.p6), and again, [Joelle
Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-015/joelle-maslak/perl6/ch-3.p6). 

In the past, when we were reviewing the submitted answers for challenge #3, we were wondering who will create a CPAN module and submitted a solution
based on that CPAN module. And we finally have one [submission](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-015/neil-bowers/perl5/ch-3.pl)
from Neil Bowers. He basically created a [`WebService::DetectLanguage`](https://metacpan.org/pod/release/NEILB/WebService-DetectLanguage-0.01/lib/WebService/DetectLanguage.pm)
CPAN module and use that module in his answer. 

Now, we are wondering who else
will create the same for Perl 6's solution for upcoming Challenge #3? 

Should it be done for Perl 6? 

Well, yes and no. 

Yes, because we would like to see a Perl 6 module created for this challenge. 

No, because Athanasius have shown us that you can actually use Perl 5 module in Perl 6 code as shown in his
[Perl 6 solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-015/athanasius/perl6/ch-3.p6)
shown below. We believed Athanasius took this approach to reuse code from both Perl 5 and Perl 6\. See the [Perl 5
solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-015/athanasius/perl5/ch-3.pl)
for comparison. Joelle Maslak also took a similar and usual approach but on the code structure rather than the module used as seen in the [Perl
5](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-015/joelle-maslak/perl5/ch-3.pl) and [Perl
6](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-015/joelle-maslak/perl6/ch-3.p6) solution.

    use JSON::Tiny;
    use LWP::UserAgent:from<perl5> ();
    ...... 
    my $ua = LWP::UserAgent.new(timeout => $TIMEOUT);
    $ua.default_header('Authorization' => "Bearer $API-KEY");
    my $response = $ua.post($URL-DETECT, Content => "q=$text");

Basically, you can call the [Perl 5 CPAN module in Perl 6](https://www.learningperl6.com/2016/12/07/quick-tip-22-use-perl-5-modules-in-perl-6/) through wrapper by the [`Inline::Perl5`](http://modules.perl6.org/dist/Inline::Perl5:cpan:NINE) module. While it seemed stable enough, there are still [some workarounds](https://perl6advent.wordpress.com/2016/12/20/day-20-bridging-the-gap/). Nevertheless, the dot notation to call a subroutine was a nice syntactic sugar. Similarly, we can also call Perl 6 code in Perl 5 through another CPAN module, [`Inline::Perl6`](https://metacpan.org/pod/Inline::Perl6). 

***
### Blog Posts
***

Regular write-up by some of the participants. 

(1) [Prime Vigenere and Perl 6](https://perl6.eu/prime-vigenere.html) by Arne Sommer. 


If you want to read step-by-step walk through for both challenges in Perl 6, then his blog
is a must read. Especially if you stuck with a problem, his solutions is a
good reference point even for Perl 5. 

(2) [Perl Weekly Challenge 015](https://adamcrussell.livejournal.com/5175.html) by Adam Russell.


Prolific member who managed to submit answers and blog about it after a long
vacation. 

(3) [Perl Weekly Challenge 015](https://jacoby.github.io/2019/07/01/perl-weekly-challenge-015.html) by Dave Jacoby. 


Very detailed write-up on how he solve the challenge #2, the
cryptography that prevent your sister peeking at your stuff. 

(4) [Perl Weekly Challenge # 15: Strong and Weak Primes and Vigenère Encryption](http://blogs.perl.org/users/laurent_r/2019/07/perl-weekly-challenge-15-strong-and-weak-primes-and-vigenere-encryption.html) by Laurent Rosenfeld. 


Comparison of Perl 6 and Perl 5 solutions where Perl 6 seemed to have certain advantages. Also, a very detailed analysis on
Challenge #2\. Recommended read of the week. 

(5) [Functional Programming in Perl: Strong and Weak Primes (Perl Weekly Challenge)](http://blogs.perl.org/users/laurent_r/2019/07/functional-programming-in-perl-strong-and-weak-primes-perl-weekly-challenge.html) by Laurent Rosenfeld. 


Follow up on the previous post with focus on functional programming which includes anonymous subroutines, closures, and iterators. Another recommended read of the week. 

(6) [Perl Weekly Challenge: Week 15](https://www.braincells.com/perl/2019/07/perl_weekly_challenge_week_15.html) by Jaldhar H. Vyas. 


Another post on the comparison of Perl 5 and Perl 6 solutions. 

(7) [An interface to the DetectLanguage API](http://neilb.org/2019/07/07/detect-language.html) by Neil Bowers.


Another week, another CPAN module released by Neil. For those who haven't
participate in Challenge #3, read his blog post. 

(8) [Perl Weekly Challenge 15, Part 1: Finding Strong and Weak Primes with Perl](https://yzhernand.github.io/posts/perl-weekly-challenge-15/) by Yozen Hernandez. 


Another participant who tried with iterator and `Memoize` CPAN
module. 

(9) [Perl Weekly Challenge 15, Part 2: Encrypting/Decrypting With the Vigenère Cipher](https://yzhernand.github.io/posts/perl-weekly-challenge-15-part2/) by Yozen Hernandez. 


If you want another view on solving Challenge #2. 

(10) [Benchmarking my Vigenère cipher code](http://tilde.town/~wlsn/pwc015.html) by Steven Wilson. 


Steven took another approach in solving Challenge #2 by benchmarking different implementations to find the optimum solution.
Recommended read of the week. 


(11) [Perl Weekly Challenge 015: Strong and Weak Primes, and Vigenère Cipher](http://blogs.perl.org/users/e_choroba/2019/07/perl-weekly-challenge-015-strong-and-weak-primes-and-vigenere-cipher.html) by E. Choroba. 

If you want to read about the cleanest and shortest solutions.