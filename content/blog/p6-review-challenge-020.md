---
title: "Laurent Rosenfeld Weekly Review: Challenge - 020"
date: 2019-10-09T00:00:00+00:00
description: "Laurent Rosenfeld Weekly Review: Challenge - #020."
type: post
image: images/blog/p6-review-challenge-020.jpg
author: Laurent Rosenfeld
tags: ["Raku"]
---
***
# Raku Solutions Weekly Review
***

## Task #1: Split Strings on Character Change

This is derived from my [blog post](http://blogs.perl.org/users/laurent_r/2019/08/perl-weekly-challenge-20-split-string-on-character-change-and-amicable-numbers.html) made in answer to the [Week 20 of the Perl Weekly Challenge](https://perlweeklychallenge.org/blog/perl-weekly-challenge-020/) organized by  <a href="http://blogs.perl.org/users/mohammad_s_anwar/">Mohammad S. Anwar</a> as well as answers made by others to the same challenge.

The challenge reads as follows:

*Write a script to accept a string from command line and split it on change of character. For example, if the string is "ABBCDEEF", then it should split like "A", "BB", "C", "D", "EE", "F".*

## My Solutions

For this, it seemed fairly obvious to me that a simple regex in a one-liner should do the trick.

``` shell
$ perl6 -e 'say ~$/ if "ABBBCDEEF" ~~ m:g/( (.) $0*)/;'
A BBB C D EE F

$ perl6 -e 'say ~$/ if "ABBCDEEF" ~~ m:g/( (.) $0*)/;'
A BB C D EE F
```

The `((.)$0*)` pattern looks for repeated characters and stores the captured groups of identical characters into the `$/` match object, which we just need to stringify for outputting it.

Just in case the quote marks and commas are part of the desired output (which I don't really believe), we can fix that easily:

``` shell
$ perl6 -e 'print join ", ", map {"\"$_\""}, "ABBCDEEF" ~~ m:g/((.)$0*)/'
"A", "BB", "C", "D", "EE", "F"
```

If we don't want to use a regex and prefer a more traditional procedural approach, we can split the input string, loop through each letter individually, and take actions depending on whether the current letter is equal to the previous one. For example:

``` perl6
use v6;

sub split-str ($in) {
    my $prev = "";
    my $tmp-str = "";
    my @out;
    for $in.comb -> $letter {
        if $letter eq $prev {
            $tmp-str ~= $letter;
        } else {
            push @out, $tmp-str if $tmp-str ne "";
            $tmp-str = $letter;
            $prev = $letter;
        }
    }
    push @out, $tmp-str;
    return join ", ", @out;
}

sub MAIN (Str $input = "ABBBCDEEF") {
    say split-str $input;
}
```

When using the default input parameter (`"ABBBCDEEF"`), this prints the following:

    $ perl6 split-string.p6
    A, BBB, C, D, EE, F

## Alternative Solutions

[Arne Sommer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-020/arne-sommer/perl6/ch-1.p6) devised a solution somewhat similar to the procedural approach I outlined just above: splitting the input string into an array of individual letters and then loop over each letter to check whether it is the same as the previous one . [Adam Russell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-020/adam-russell/perl6/ch-1.p6), who was apparently offering solutions in Perl 6 for the first time, also used a procedural approach, but he used a `repeat ... while` loop and he printed the letters on the fly within the loop.

[Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-020/ruben-westerberg/perl6/ch-1.p6) also used a procedural approach on an array of letters, but with a fairly original and clever use of `state` variables, as well a somewhat unexpected use of the `when ... default` construct; his solution is also the only one using `NEXT` and `LAST` phasers.

[Jaldhar H Vyas](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-020/jaldhar-h-vyas/perl6/ch-1.sh) was the only person other than me to suggest a Perl 6 one-liner and also the only person to use the regex pattern (similar to mine) in a substitution rather than a simple match:

    perl6 -e ' @*ARGS.shift.subst(/ ( (.)$0* ) /, { "\"$0\"" }, :g).subst("\"\"", "\", \"", :g).say; ' "ABBCDEEF"

[Francis Whittle](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-020/fjwhittle/perl6/ch-1.p6), [Martin Barth](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-020/martin-barth/perl6/ch-1.p6), [Randy Lauen](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-020/randy-lauen/perl6/ch-1.p6), [Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-020/joelle-maslak/perl6/ch-1.p6), and [Feng Chang](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-020/feng-chang/perl6/ch-1.p6) used regex patterns almost identical to mine above, but used that pattern as a parameter to the `comb` built-in function. As an example, this is Joelle's solution:

``` perl6
sub MAIN(Str:D $input) {
    my @matches = $input.comb( / (.) $0* / );
    say @matches.join("\n");
}
```

[Kevin Colyer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-020/kevin-colyer/perl6/ch-1.p6), [Noud](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-020/noud/perl6/ch-1.p6), and [Athanasius](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-020/athanasius/perl6/ch-1.p6) used the same regex pattern as I did along with a similar syntax to retrieve the bits and pieces.

[Ozzy](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-020/ozzy/perl6/ch-1.p6) also used a regex, but with named captures rather than using the `$0` special variable (which is really a shortcut for `$/[0]`):

``` perl6
$string.match: / ( $<l>=<.alpha> $<l>* )+ /;    # Quantified capture yields array $/[0] of Match objects
say $/[0][*].Str;                               # Stringify each Match object to see the overall match
```

[Roger Bell West](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-020/roger-bell-west/perl6/ch-1.p6) also used something similar to a named capture (although it is really assigning a capture number to a variable):

``` perl6
sub splitchange ($in) {
   return map {$_.Str}, $in ~~ m:g/(.) {} :my $c = $0; ($c*)/;
}
```

Although Damian Conway doesn't participate directly to the Perl Weekly Challenge, but usually comments on it afterwards, his beautifully crafted solutions are always worth contemplating. His [latest blog](http://blogs.perl.org/users/damian_conway/2019/08/with-friends-like-these.html) suggests a regex as a parameter to the `comb` builtin subroutine:

``` perl6
use v6.d;

sub MAIN (\str) {
    .say for str.comb: /(.) $0*/
}
```

# Task #2: Amicable Numbers

This is derived from my [blog post](http://blogs.perl.org/users/laurent_r/2019/08/perl-weekly-challenge-20-split-string-on-character-change-and-amicable-numbers.html) made in answer to the [Week 20 of the Perl Weekly Challenge](https://perlweeklychallenge.org/blog/perl-weekly-challenge-020/) organized by  <a href="http://blogs.perl.org/users/mohammad_s_anwar/">Mohammad S. Anwar</a> as well as answers made by others to the same challenge.

The challenge reads as follows:

*Write a script to print the smallest pair of Amicable Numbers. For more information, please checkout [wikipedia page](https://en.wikipedia.org/wiki/Amicable_numbers).*

Amicable numbers are two different numbers so related that the sum of the proper divisors of each is equal to the other number. (A proper divisor of a number is a positive factor of that number other than the number itself. For example, the proper divisors of 6 are 1, 2, and 3.)

## My Solution

We'll use the `sum-divisors` subroutine to find the divisors of a given number and return their sum. This subroutine uses trial division, i.e. tries division by all integers below a certain limit (here, half of the input number), and then sums up all those that evenly divide the input number. Then, we just loop over a lazy infinite list of integers from 2 onward and call `sum_divisors` subroutine. If the sum of divisors is larger than the integer being examined (if it is smaller, then it is a pair of numbers that we have already checked), then we check the sum of divisors of the sum of divisors. If it is equal to the current integer, then we've found two amicable numbers and can print them and exit the loop.

``` perl6
use v6;

sub sum-divisors (Int $num) {
    my @divisors = grep { $num %% $_ }, 2..($num / 2).Int;
    return [+] 1, | @divisors;
}

for 2..Inf -> $i {
    my $sum_div = sum-divisors $i;
    if $sum_div > $i and $i == sum-divisors $sum_div {
        say "$i and $sum_div are amicable numbers";
        last;
    }
}
```

The `sum-divisors` subroutine is not optimal and its performance could be greatly enhanced, but we don't need to do that since we're looking only for the first pair of amicable numbers, which are rather small. Also, I did not have much time on that week because I was quite busy with the Perl Conference in Riga.

This program prints almost instantly the first pair of amicable numbers:

    $ perl6 amicable_nrs.p6
    220 and 284 are amicable numbers

Note that the Wikipedia article shows some rules to quickly find some amicable numbers (Thābit ibn Qurra's theorem and Euler's rule), but I did not want to use any of these because neither Thābit ibn Qurra's theorem, nor Euler's method will produce all amicable numbers, so that it is not guaranteed that we would find the first pair with such methods (although it so happens that both methods do produce the first pair).

## Alternative Solutions

[Arne Sommer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-020/arne-sommer/perl6/ch-2.p6) used essentially the same method, except that his `proper-divisors` subroutine returns a list of proper divisors which are then added in the calling code.

[Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-020/ruben-westerberg/perl6/ch-2.p6) also uses essentially the same method, but his `proper` subroutine is particularly concise:

``` perl6
sub proper(\n) {
    sum (1..n-1).grep({ n%%$_});
}
```

[Francis Whittle](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-020/fjwhittle/perl6/ch-2.p6) used multi `MAIN` subroutines to use either Euler's rule or the naive trial division algorithm described in my solution above. One interesting thing in Francis's naive implementation is that is `proper-divisor-sum` is using the `is cached` trait to avoid recomputing the proper divisors of a number if it has already been calculated.

[Kevin Colyer](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-020/kevin-colyer/perl6/ch-2.p6) and [Randy Lauen](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-020/randy-lauen/perl6/ch-2.p6) also cached the sums of proper divisors, but did it manually by storing them into a hash. [Noud](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-020/noud/perl6/ch-2.p6) also cached the results returned by `prop_div` subroutine, but did that in an original way by adding a wrapper to the subroutine.

[Adam Russell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-020/adam-russell/perl6/ch-2.p6) used the same general algorithm, but interestingly used [promises](https://docs.perl6.org/type/Promise) to parallelize part of the work over several concurrent threads and presumably speed up the search.

[Athanasius](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-020/athanasius/perl6/ch-2.p6) used the `divisor_sum` subroutine of the CPAN `Math::Prime::Util` *Perl 5* module and further created an alias on it presumably to make its use easier:
``` Perl6
use Math::Prime::Util:from<Perl5> <divisor_sum>;
my Sub $divisor-sum := &Math::Prime::Util::divisor_sum;     # Alias
```
This is really cool, as it is a good example showing how a fairly large part of the Perl 5 ecosystem can be used in Perl 6. Note, however that the `divisor_sum` subroutine returns the sum of all divisors of a number (including itself), so that he had to subtract the input number from the sums of its divisors in order to obtain the sum of *proper* divisors.

[Feng Chang](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-020/feng-chang/perl6/ch-2.p6) made a very nice and concise script using infinite lists:

``` perl6
my @a = (0..∞).map:  { sod($_) };
my @b = (0..∞).grep: { @a[$_] > $_ and @a[@a[$_]] == $_ };
say(@b[0], ' ', @a[@b[0]]);
# sum of proper divisors
sub sod(UInt $n) {
    [+] (1 .. $n/2).grep: { $n %% $_ }
}
```

[Jaldhar H. Vyas](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-020/jaldhar-h-vyas/perl6/ch-2.p6) used Thābit ibn Qurra's theorem to generate the first pair of amicable numbers. As mentioned above, I believe this is a bit dangerous since this method cannot generate an exhaustive list of such pairs, so we are not really guaranteed to find the first pair. As it turns out, though, this method does yield the first pair, so that Jaldhar's result is nonetheless correct.

[Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-020/joelle-maslak/perl6/ch-2.p6)'s `factorsum` subroutine is probably more efficient than my `sum-divisors` subroutine (and is certainly faster for large input integers) because it iterates up to the square root of the input number (instead of going up to half the input number in my subroutine) and then computes the other larger divisors (for example, when looking for the divisors of 12, my subroutine iterates until 6, whereas Joelle's subroutine only needs to iterate until 3, obtains 2 and 3, and then finds 6 by dividing 12 by 2 and 4 by dividing 12 by 3; this probably doesn't improve very much performance for a small number such as 12, but it undoubtedly does for larger numbers). In addition, she caches the results with the `is cached` trait. In addition, her code is also a pretty beautiful clockwork of functional programming with two nice data pipelines.

[Roger Bell West](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-020/roger-bell-west/perl6/ch-2.p6)'s `divisors_unself` subroutine also iterates only up to the square root of the input number, using essentially the same method as Joelle to generate the missing divisors above the square root. As noted just above, this is likely to be significantly faster for large input integers.

## Enter Damian Conway

Also known as [TheDamian](https://www.perlmonks.org/?node_id=107600), Damian Conway wrote (as usual) the most definitive analysis on the subject in his [With friends as these...](http://blogs.perl.org/users/damian_conway/2019/08/with-friends-like-these.html) blog post. On top of that, it is really well-written.

I will not try to summarize Damian's master piece, you should really follow the link and read it, but I will only highlight a few points.

Given a function that returns the divisors of a number, Damian says it is easy enough to iterate through each integer from 1 to infinity, find its divisors, then check to see if the sum-of-divisors of that number is identical to the original number (pretty much what I did in the main code on my script at the beginning of this post). Then, the article goes on to study how to do it if we want to find more than one amicable pair. Of course, in such a case, the performance issues that I originally brushed aside because we only needed the first pair now need to be re-examined.

The problem is that, since Perl 6 does not have a built-in function that returns the proper divisors of a number, we obviously need to write one. Damian comes up with a handful of such subroutines using the naive trial division algorithm, for example:

``` perl6
multi divisors (\N) { (1..N).grep(N %% *) }
```

The problem with it is that it is very inefficient when the input numbers become large. The first thing that Damian does is more or less the same improvement that Joelle and Roger used: iterate up to the square root of the input number and compute the larger missing divisors as the division of the input integer by each of the smaller divisors. For example:

``` perl6
multi divisors (\N) {
    my \small-divisors = (1..sqrt N).grep(N %% *);
    my \big-divisors   = N «div« small-divisors;
    return unique flat small-divisors, big-divisors;
}
```

This is vastly more efficient. The performance of the `divisors` subroutine up to `divisors(10**9)` is entirely acceptable at under 0.1 seconds, but starts to fall off rapidly after that point. What if we want to go further?

Cryptographers have designed a number of more efficient algorithms to find the factors of an integer. One of them is [Pollard’s 𝜌 algorithm](https://en.wikipedia.org/wiki/Pollard%27s_rho_algorithm), which is implemented in the `prime-factors` function of a Perl 6 module named [Prime::Factor](https://github.com/thundergnat/Prime-Factor/blob/master/lib/Prime/Factor.pm6) by Stephen Schulze. This function finds all the prime factors of a large input number very quickly. But the prime factors of a number isn't the same thing as its divisors. But we can use prime factors to compute the divisors by combining the factors in all possible ways. Except that if we use the naive approach of finding all combinations of prime factors, the program becomes catastrophically slow because of [combinatorial explosion](https://en.wikipedia.org/wiki/Combinatorial_explosion).  Damian then shows how storing the prime factors in a `Bag` data structure makes it possible to test every possible combination of the prime factors exponents (the values of the bag). And the new version based on this idea scales incredibly better than any previous implementation: the program can find the divisors of a number with 100 digits in less than half a second.

Damian makes two additional points. One is that the new version of the `divisors` is a lot faster for very large numbers, but that, for smaller numbers (below about 10,000), iterating trial division to the square root of the input integer is faster. He then shows how easy it is to make two `multi` versions of the `divisors` subroutine, one for small numbers and one for big ones.  Finally, Damian demonstrates how adding a single word, the `hyper` prefix, to his main `for` loop enables concurrency and makes the overall program about twice as fast.

I hope that I have opened your appetite. Once again, you should really follow [the link](http://blogs.perl.org/users/damian_conway/2019/08/with-friends-like-these.html) to Damian's post and read it in detail. It's really worth it.

## Wrapping up

Please let me know if I forgot any of the challengers or if you think my explanation of your code misses something important.

If you want to participate to the Perl Weekly Challenge, please connect to [this site](https://perlweeklychallenge.org/).

## See Also

See also the following blog posts:

* Arne Sommer: https://perl6.eu/amicable-split.html
* Adam Russell: https://adamcrussell.livejournal.com/6526.html
* Roger Bell West: https://blog.firedrake.org/archive/2019/08/Perl_Weekly_Challenge_20.html
* Jaldhar Y. Vyas: https://www.braincells.com/perl/2019/08/perl_weekly_challenge_week_20.html
* Damian Conway: http://blogs.perl.org/users/damian_conway/2019/08/with-friends-like-these.html

*Update: *
Yary did not participate to the challenge, but posted on Aug. 22, 2019 [Splitting on a change, Challenge 20 Task 1](http://blogs.perl.org/users/yary/2019/08/splitting-on-a-change-challenge-20-task-1.html) that notices that the challenge asked "to accept a string from command line and split it on change of character", and further comments: "But every solution that I read in the recap looked for runs of the same character instead of the literal interpretation of the challenge." I'm not sure whether I fully understand his objection, as these seem equivalent to me, but I guess that Yary would like to see something that detects directly places where there is a character change.. The blog's code examples are mainly in Perl 5, but the last one is in Perl 6:

    say "ABBCDEEF".split(/<?before (.) {} :my $c=$0;><!after $c> /).perl
    ("", "A", "BB", "C", "D", "EE", "F").Seq

Yary further asks: any idea on how to remove the spurious empty string at the beginning?

## Wrapping up

Please let me know if I forgot any of the challengers or if you think my explanation of your code misses something important.

If you want to participate to the Perl Weekly Challenge, please connect to [this site](https://perlweeklychallenge.org/).
