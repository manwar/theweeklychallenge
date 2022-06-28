---
author:       Ryan Thompson
date:         2022-06-28T14:11:36
description:  "Ryan Thompson › Perl Weekly Review #164"
tags:         ["perl"]
title:        "Ryan Thompson › Perl Weekly Review #164"
type:         post
---

Continues from [previous week](/blog/review-challenge-163/).

Ryan Thompson with you this week. I'm back doing reviews temporarily to help Colin out, so expect to see both of us in the weeks to come!

Welcome to the Perl review for Week 164 of the Weekly Challenge! For a quick overview, go through the [original tasks](/blog/perl-weekly-challenge-164/) and [recap](/blog/recap-challenge-164/) of the weekly challenge.

## Getting in Touch

<a href="mailto:rjt@cpan.org"><img src="http://ry.ca/misc/Email.svg" height="50" width="50"> Email</a> › Email me (Ryan) with any feedback about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="http://ry.ca/misc/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="http://ry.ca/misc/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

We'd greatly appreciate any feedback you'd like to give.

## Table of Contents

### [Task 1 - Prime Palindrome](#task1)

[ [Adam Russell](#adam-russell1)  | [Alexander Pankoff](#alexander-pankoff1)  | [Arne Sommer](#arne-sommer1)  | [Athanasius](#athanasius1)  | [Cheok-Yin Fung](#cheok-yin-fung1)  | [Colin Crain](#colin-crain1)  | [Dave Jacoby](#dave-jacoby1)  | [Ali Moradi](#deadmarshal1)  | [Duncan C. White](#duncan-c-white1)  | [E. Choroba](#e-choroba1)  | [Jaldhar H. Vyas](#jaldhar-h-vyas1)  | [James Marquis](#james-marquis1)  | [James Smith](#james-smith1)  | [Jorg Sommrey](#jo-371)  | [Julien Fiegehenn](#julien-fiegehenn1)  | [Kjetil Skotheim](#kjetillll1)  | [Laurent Rosenfeld](#laurent-rosenfeld1)  | [Lubos Kolouch](#lubos-kolouch1)  | [Luiz Felipe](#luiz-felipe1)  | [Matthew Neleigh](#mattneleigh1)  | [Mohammad S Anwar](#mohammad-anwar1)  | [Niels van Dijke](#perlboy19671)  | [Pete Houston](#pete-houston1)  | [Peter Campbell Smith](#peter-campbell-smith1)  | [PokGoPun](#pokgopun1)  | [Flavio Poletti](#polettix1)  | [Robert DiCicco](#robert-dicicco1)  | [Roger Bell_West](#roger-bell-west1)  | [Ryan Thompson](#ryan-thompson1)  | [Ulrich Rieke](#ulrich-rieke1)  | [W. Luis Mochan](#wlmb1)  ]

### [Task 2 - Happy Numbers](#task2)

[ [Adam Russell](#adam-russell2)  | [Alexander Pankoff](#alexander-pankoff2)  | [Arne Sommer](#arne-sommer2)  | [Athanasius](#athanasius2)  | [Cheok-Yin Fung](#cheok-yin-fung2)  | [Colin Crain](#colin-crain2)  | [Dave Jacoby](#dave-jacoby2)  | [Ali Moradi](#deadmarshal2)  | [Duncan C. White](#duncan-c-white2)  | [E. Choroba](#e-choroba2)  | [Jaldhar H. Vyas](#jaldhar-h-vyas2)  | [James Smith](#james-smith2)  | [Jorg Sommrey](#jo-372)  | [Julien Fiegehenn](#julien-fiegehenn2)  | [Kjetil Skotheim](#kjetillll2)  | [Laurent Rosenfeld](#laurent-rosenfeld2)  | [Lubos Kolouch](#lubos-kolouch2)  | [Luiz Felipe](#luiz-felipe2)  | [Matthew Neleigh](#mattneleigh2)  | [Niels van Dijke](#perlboy19672)  | [Pete Houston](#pete-houston2)  | [Peter Campbell Smith](#peter-campbell-smith2)  | [PokGoPun](#pokgopun2)  | [Flavio Poletti](#polettix2)  | [Roger Bell_West](#roger-bell-west2)  | [Ryan Thompson](#ryan-thompson2)  | [Ulrich Rieke](#ulrich-rieke2)  | [W. Luis Mochan](#wlmb2)  ]

### [Blogs](#blogs)

***

***

# Task #1 - Prime Palindrome {#task1}

## Original description

Write a script to find all prime numbers less than 1000, which are also
palindromes in base 10. Palindromic numbers are numbers whose digits are the
same in reverse. For example, 313 is a palindromic prime, but 337 is not, even
though 733 (337 reversed) is also prime.

## Commentary

We've looked at prime numbers and palindromes separately on several occasions,
so these concepts aren't new to most team members in the Challenge. Most
people seemed to converge on the idea that if they can generate (or test)
prime numbers, it's then a simple matter to test whether each prime is also a
palindrome. That being said, we'll see a few variations on this theme!

When it came to testing for palindromes, there was a clear winner, at least in
terms of popularity. The builtin `reverse` function will reverse a string,
when called in scalar context. If a string (including a number being
represented as a string) is equal to itself in reverse, it's a palindrome.

That's certainly not the only way to do it, though, so keep your eye out for
a few unique approaches.

***

## Stats

* Number of submissions: **31**

* Total SLOC: **885**

* Average SLOC: **28**

## Adam Russell {#adam-russell1}

[Adam Russell's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/adam-russell/perl/ch-1.pl)
uses [`Math::Primality`](https://metacpan.org/pod/Math::Primality)'s
`is_prime()` function to test for primes. To test for a palindrome, Adam uses
a variation on the scalar `reverse` method. When called in list context,
`reverse` reverses the elements of that list, as one might expect. So, Adam
first `split`s the string into a character list, then `reverse`s that list,
then `join`s it back together.  :

```perl
sub palindrome_primes_under{
    my($n) = shift;
    my @palindrome_primes;
    {
        $n--;
        unshift @palindrome_primes, $n if(is_prime($n) && join("", reverse(split(//, $n))) == $n);
        redo if $n > 1;
    }
    return @palindrome_primes;
}
```

Adam also provided a Prolog solution, which he blogged about as well:

**Blog** › [Perl](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/05/15)

**Blog** › [Prolog](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/05/15)

## Alexander Pankoff {#alexander-pankoff1}

[Alexander Pankoff's
solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/alexander-pankoff/perl/ch-1.pl)
looks a lot like Adam's, but Alexander uses his own modules he's built up from
previous challenges.

```perl
use My::Prime::Util qw(is_prime);
use My::String::Util qw(is_palindromic);

run() unless caller();

sub run() {
    say join( "\n", grep { is_palindromic($_) && is_prime($_) } 0 .. 1000 );
}
```

You'll notice the basic check is there: if a number is palindromic and prime,
it's a winner!

## Arne Sommer {#arne-sommer1}

[Arne Sommer's
solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/arne-sommer/perl/ch-1.pl)
relies on [`Math::Prime::Util`](https://metacpan.org/pod/Math::Prime::Util) and scalar `reverse` for the palindromic check:

```perl
for my $current (1 .. $limit -1)
{
  next unless is_prime($current);
  next unless $current eq reverse($current);

  push(@result, $current);
}
```

**Blog** › [Primarily Happy with Raku and Perl - Arne Sommer](https://raku-musings.com/primarily-happy.html)

## Athanasius {#athanasius1}

[Athanasius's
solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/athanasius/perl/ch-1.pl)
starts off with a POD comment outlining some observations, and the overall
algorithm they will employ.


Here's the high level logic:

```perl
    my $primes = get_primes();
    my @pr_pals;

    for my $prime (@$primes)
    {
        push @pr_pals, $prime if is_palindrome( $prime );
    }
```

The `get_primes()` sub uses a Sieve of Eratosthenes to generate a list of
prime numbers. However, there's a twist! Athanasius quotes [David Wasserman in
OEIS A002385](http://oeis.org/A002385):

> Every palindrome with an even number of digits is divisible by 11, so 11 is the only member of the sequence with an even number of digits.

```perl
    @primes = grep { $_ == 11 || length != 2 } @primes;
```

From there, `@pr_pals` will hold the result. Athanasius then loops over the
list of `@$primes` and includes every such prime that also `is_palindrome()`,
similar to logic we've seen from other solutions.

The `is_palindrome()` function is very explicit in its check of each pair of
digits:

```perl
sub is_palindrome {
    my ($n)     = @_;
    my  @digits = split '', $n;

    for my $i (0 .. int( scalar( @digits ) / 2))
    {
        return 0 unless $digits[ $i ] == $digits[ $#digits - $i ];
    }

    return 1;
}
```

I really like the amount of thought Athanasius has put into this solution.


## Cheok-Yin Fung {#cheok-yin-fung1}

[Cheok-Yin Fung's
solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/cheok-yin-fung/perl/ch-1.pl)
is a refreshingly cheeky one-liner:

```perl
map {  print "$_\n" if (1 x $_) !~ /^1?$|^(11+?)\1+$/ && $_ eq scalar reverse $_ } 1..1000
```

Looking a little closer at that regex, it looks familiar to me, and Cheok-Yin
immediately confirms my suspicion with the following comment: "using Abigail's
regex to test for prime numbers". If you've never seen this bit of obfuscated
Perl lore, you're in for a treat. [Here's a detailed
analysis](http://neilk.net/blog/2000/06/01/abigails-regex-to-test-for-prime-numbers/).

So that's the prime number test handled. Cheok-Yin then uses the `scalar
reverse` check for palindromes.

## Colin Crain {#colin-crain1}

[Colin Crain's
solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/colin-crain/perl/ch-1.pl)
starts with a suitably svelte Sieve of Eratosthenes:

```perl
sub sieve ($limit) {
    my @s = (1) x $limit;
    @s[0,1] = (0,0);
    for my $f (2..sqrt($limit)) {
        $s[$f * $_] = 0 for $f..$limit/$f;
    }
    return grep { $s[$_] } (0..$limit);
}
```

This `sieve` function returns a list of primes up to a maximum of `$limit`.
Colin then feeds that list through a `grep` regex to filter out anything that
isn't also a palindrome:

```perl
say $_ for grep { /^(.*).?(??{reverse($1)})$/ } sieve($input);
```

The regex is interesting in that it matches part of the string, and then
insists that the remainder of the string must match `??{reverse($1)}` (in
other words, the second half must be the reverse of the first half). There's
an optional character in the middle, for the case of odd-length numbers.

The `??{ code }` syntax is called a *postponed regular subexpression.* This is
a fancy way of saying, "Perl will run your code, and then feed it back in to
the regex engine as a new subexpression," so the code's output can contain a
pattern.

It's a clever way of doing things, for sure. The backtracking Perl will
perform means `reverse($1)` will be called n/2 times, where n is the length of
the string. I don't care, though. It's fun, and I like it.

## Dave Jacoby {#dave-jacoby1}

[Dave Jacoby's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/dave-jacoby/perl/ch-1.pl)
uses a home-grown `is_prime()` function that uses trial division:

```perl
sub is_prime ($n) {
    return 0 if $n == 0;
    return 0 if $n == 1;
    for ( 2 .. sqrt $n ) { return 0 unless $n % $_ }
    return 1;
}
```

Dave then loops over integers between 1 and 1000, printing out those that pass
an `is_prime()` check and a `reverse` palindrome check:

```perl
say join "\n",
    grep { $_ eq reverse $_ }
    grep { is_prime($_) }
    1 .. 1000;
```

Dave's blog is—as always—a good read. In it, he also provides a one-liner with
[`Math::Prime::Util`](https://metacpan.org/pod/Math::Prime::Util):

```bash
perl -MMath::Prime::Util=is_prime -e 'print join "\n", grep { $_ eq reverse $_} grep { is_prime($_) } 1..1000'
```

**Blog** › [Shiny Happy Numbers: Weekly Challenge #164 | Committed to Memory](https://jacoby.github.io/2022/05/09/shiny-happy-numbers-weekly-challenge-164.html)

## Ali Moradi {#deadmarshal1}

[Ali Moradi's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/deadmarshal/perl/ch-1.pl)
is another good example of a trial division `is_prime()` function and string
reverse palindrome check:

```perl
sub is_prime{
    my ($n) = @_;
    if ($n <= 1) { return 0; }
    foreach(2..sqrt($n)) {
        return 0 if $n % $_ == 0;
    }
    return 1;
}

foreach(1..1000){
    print "$_ " if ($_ == reverse $_) && (is_prime($_));
}
```

## Duncan C. White {#duncan-c-white1}

[Duncan C. White's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/duncan-c-white/perl/ch-1.pl)
uses his own `MakePrimes` module, which is a standard sieve. It is code he has
re-used in the Challenge at least 14 times, with the first instance I could
find being all the way back in week 22! The palindrome check is our old
friend, `$x eq reverse($x)`:

```perl
use lib qw(.);
use Function::Parameters;
use MakePrimes;

my $n = shift;

fun ispalindrome( $x )
{
    return $x eq reverse($x) ? 1 : 0;
}

my @primes = primes_upto( $n );

say "Palindromic primes up to $n";
say for grep { ispalindrome($_) } @primes;
```

## E. Choroba {#e-choroba1}

[E. Choroba's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/e-choroba/perl/ch-1.pl)
uses [`Math::Prime::Util`](https://metacpan.org/pod/Math::Prime::Util)'s
`forprimes` subroutine to efficiently loop through a list of primes. That
subroutine accepts a code block that is run for every prime in the specified
range. Choroba `push`es the number to a result list if that number passes the
familiar `$_ == reverse` palindrome test:

```perl
use Math::Prime::Util qw{ forprimes is_prime };

sub prime_palindrome {
    my @pp;
    forprimes { push @pp, $_ if $_ == reverse } 999;
    return \@pp
}
```

## Jaldhar H. Vyas {#jaldhar-h-vyas1}

[Jaldhar H. Vyas's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/jaldhar-h-vyas/perl/ch-1.pl)
starts off with an `isPrime()` function that uses trial division.
Jaldhar then loops over all numbers from 1..1000 and returns those that are
prime and palindromic:

```perl
say join q{ }, grep { isPrime($_) && $_ == reverse $_ } 1 .. 1000;
```

**Blog** › [Perl Weekly Challenge: Week 164](https://www.braincells.com/perl/2022/05/perl_weekly_challenge_week_164.html)

## James Marquis {#james-marquis1}

[James Marquis's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/james-marquis/perl/ch-1.pl)
is interesting in that it works in several discrete stages. Here is the
initialization:

```perl
use Math::Prime::Util  qw(:all);
my @start = ();
my @start2 = ();
my @start3 = ();
my @factors = ();
 @start = (10..$ARGV[0]);
print "You entered $ARGV[0]\n"; # Shown at the end as well
 @start2 = grep /\b[1379]\d*[1379]$/, @start;
@start3 = grep {$_  if is_prime($_)} @start2;
```

Already here, we can see `@start` is populated with all 2+ digit numbers in
range. `@start2` is a simple filter that takes advantage of the fact that
prime numbers (other than 2) end in 1, 3, 7, or 9 (and if they're palindromic,
they must begin with one of these numbers as well). James could have included
a stronger test here, to ensure the first digit matched the last, but it's not
really necessary at this stage. Finally, `@start3` filters for prime numbers,
using `Math::Prime::Util`.

Next up, James loops over `@start3`:

```perl
foreach (@start3){
    print "$_\n" if  is_prime($_);
    my $rev = reverse $_;

    @factors = factor($rev);
    print"Reverse of $_ is $rev has factors @factors .\n" unless is_prime($rev);
}

print "The range requested was  10 to $ARGV[0].\n";
```

While James hasn't filtered out non-palindromes here, he was on the right
track with `reverse`.

## James Smith {#james-smith1}

[James Smith's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/james-smith/perl/ch-1.pl)
uses `Math::Prime::Util` for primality testing, and `reverse` to check for
palindromes, with a twist:

```perl
my ($p,$lim,@pal)=(1,shift//1e3);

($p ^ reverse $p) || (push @pal,$p) while ($p=next_prime $p) < $lim;
```

There is a fair bit of potential confusion for the unwary, packed into that
second line.

Even though James uses `reverse` to reverse the string, Perl will treat the
result as a number for the `^` operator, meaning, we're seeing a *bitwise* XOR
here. When A and B are equal, A ^ B == 0 (false), and when A and B differ, A ^
B != 0 (true).

The `||` (or) logic is tricky as well. At first glance, you might think the
`push(...) while` loop is always run, but it isn't, because the `||`
operator short circuits when the left hand side is true. Therefore, when A ^ B
is true (that is, when the numbers are *not* equal), the right hand side (the
`push`) is not run. Or with fewer double negatives: the number is `push`ed to
the results only when it is equal to its reverse (a palindrome).

These sorts of hacks always bring a smile to my face in the Weekly Challenge
context, as they would be right at home in code golf or obfuscation
challenges.

**Blog** › [perlweeklychallenge-club/challenge-164/james-smith at master · drbaggy/perlweeklychallenge-club · GitHub](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-164/james-smith)

## Jorg Sommrey {#jo-371}

[Jorg Sommrey's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/jo-37/perl/ch-1.pl)
uses `Math::Prime::Util`'s `todigits` and `fromdigits` functions, which are
efficient alternatives to the usual `split` and `join`, and they support
arbitrary bases, too. I often overlook these functions myself, so this is a
great reminder!

Jorg also uses
[`Syntax::Keyword::Gather`](https://metacpan.org/pod/Syntax::Keyword::Gather)
as a Perl 5 implementation of Raku's `gather` / `take` keywords, which in this
case replace the typical `push @result, $p` gather step.

The actual loop here uses the `prime_iterator` function, so every time `$p =
$pi->()` is called, `$p` is the next prime.

Finally, we see a variant of the usual `reverse` method. However, this is
where `fromdigits` and `todigits` come into the picture, to compare in any
`$base`.

Without further ado, here is Jorg's main `prime_palindrome()` sub:

```perl
use Math::Prime::Util qw(fromdigits todigits prime_iterator);
use Syntax::Keyword::Gather;

# Collect all prime palindrome numbers in base $base not larger than $n
sub prime_palindrome ($n, $base) {
    gather {
        my $pi = prime_iterator;
        while ((my $p = $pi->()) <= $n) {
            take $p if $p == fromdigits [reverse todigits $p, $base], $base;
        }
    }
}
```

## Julien Fiegehenn {#julien-fiegehenn1}

[Julien Fiegehenn's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/julien-fiegehenn/perl/ch-1.pl)
starts off with a hard-coded array of `@primes` below 1000. We've already done
so much work with prime numbers I think we can take for granted Julien knows
at least a few ways to generate such a list.

The loop that generates the prime palindromes will look familiar:

```perl
foreach my $number (@primes) {
    say $number if $number eq reverse $number;
}
```

## Kjetil Skotheim {#kjetillll1}

[Kjetil Skotheim's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/kjetillll/perl/ch-1.pl)
splits out the prime and palindrome functionality into two subs, which work
with regexes (or regexen, if you like):

```perl
sub is_palindromic { local $_ = shift//$_;        /^((.)(?1)\2|.?)$/ }
sub is_prime       { local $_ = 1 x (shift//$_); !/^1?$|^(11+?)\1+$/ }
```

You'll recognize Abigail's prime number regex from earlier. The palindrome
regex is identical to [one posted to Stack
Overflow](https://stackoverflow.com/a/233326/3847547).

Notice how it uses a recursive subpattern `(?1)` followed by the `\2` which
matches the whole recursive part. The recursion itself will ensure the
subpattern is reversed.

```perl
print join' ', grep is_palindromic && is_prime, 1..999;
print "\n";
```

Running this solution on primes below 1000 is quick, but asking it to find the
next set (below 100000; there are no palindromic primes between 1000..10000)
spins up my fans for 19 seconds.

## Laurent Rosenfeld {#laurent-rosenfeld1}

[Laurent Rosenfeld's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/laurent-rosenfeld/perl/ch-1.pl)
returns us to some semblance of normalcy with a familiar `is_prime` and
`reverse` solution:

```perl
say map "$_ ", grep { is_prime $_} grep {$_ == reverse $_} 1..999;
```

**Blog** › [Perl Weekly Challenge 164: Prime Palindromes and Happy Numbers](http://blogs.perl.org/users/laurent_r/2022/05/perl-weekly-challenge-164-prime-palindromes-and-happy-numbers.html)

## Lubos Kolouch {#lubos-kolouch1}

[Lubos Kolouch's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/lubos-kolouch/perl/ch-1.pl)
uses `Math::Prime::Util` to generate primes, and defines an `is_palindrome`
function for the palindrome testing:

```perl
sub is_palindrome {
    my $what = shift;

    return $what eq reverse $what;
}
```

## Luiz Felipe {#luiz-felipe1}

[Luiz Felipe's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/luiz-felipe/perl/ch-1.pl) gives us a character-by-character `is_palindrome`:

```perl
sub is_palindrome {
    my (@number, $reverse);

    @number = split //, shift;
    $reverse = "";

    for (my $i = $#number; $i >= 0; $i--) {
        $reverse = $reverse . $number[$i];
    }

    return $reverse eq join '', @number;
}
```

Luiz's `is_prime` works by trial division:

```perl
sub is_prime {
    my ($number);

    $number = shift;

    return 0 if $number == 0 or $number == 1;

    for (my $i = 2; $i <= $number / 2; $i++) {
        return 0 if ($number % $i == 0);
    }

    return 1;
}
```

## Matthew Neleigh {#mattneleigh1}

[Matthew Neleigh's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/mattneleigh/perl/ch-1.pl)
generates primes with a Sieve of Eratosthenes. Interestingly, however, instead
of returning an array or hash, Matthew returns a string, with the *n*th
character being set to 1 if and only if *n* is prime.

Matthew notes this is done to save memory versus using an array. Indeed, using
[`Devel::Size`](https://metacpan.org/pod/Devel::Size), I found that an array
of ones and zeroes takes up about 66x more memory than the equivalent string.
One could take this even further with a bit map, and cut that size in half by
skipping even numbers (which are always composite, except for the number 2).

The `find_palindromic_primes()` sub uses the `$primes` result from the sieve
to generate a list of `@palindromic_primes`. Beware, `$primes` is both the
input (desired count of primes), and is then reused to store the results from
the sieve:

```perl
sub find_palindromic_primes{
    my $primes = int(shift());

    return(undef)
        if($primes < 2);

    my @palindromic_primes = ();

    # Gather a quantity of prime numbers
    $primes = sieve_of_eratosthenes($primes);

    # Loop from 2 onward...
    for my $i (2 .. (length($$primes) - 1)){
        if(substr($$primes, $i, 1)){
            # $i is prime; see if it's a palindrome and
            # if so, store it in the list
            push(@palindromic_primes, $i)
                if(reverse(split("", $i)) == $i);
        }
    }

    return(@palindromic_primes);

}
```

The palindrome test has a little bit of subtlety with list and scalar context:
`reverse(split("", $i))` splits the number and then reverses the list of
digits. However, since that result is immediately being used for a scalar
comparison, this puts it back into scalar context, returning a string.

The `sieve_of_eratosthenes` function returns a scalar ref rather than the
scalar itself. There is no space or time efficiency for doing so, but perhaps
Luiz had another motivation for using a ref here.


## Mohammad S Anwar {#mohammad-anwar1}

[Mohammad S Anwar's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/mohammad-anwar/perl/ch-1.pl)
contains a nicely compact trial divison `is_prime()` function:

```perl
sub is_prime {
    my ($n) = @_;

    return 0 if ($n == 1);

    do { return 0 unless ($n % $_) } for (2 .. sqrt $n);

    return 1;
}
```

The important line in his `prime_palindrome()` function is as follows:

```perl
        my $_i = (reverse $i) + 0;
        next unless is_prime($i) and is_prime($_i);
```

Can you see a difference here, compared to other solutions? Mohammad isn't
generating prime palindromes, he's generating **emirps!**

What the heck is an "emirp"? An emirp (prime spelled backwards) is a number
that gives a different prime when the digits are reversed. Technically, 11
isn't an emirp, because the reverse gives you the *same* prime.

## Niels van Dijke {#perlboy19671}

[Niels van Dijke's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/perlboy1967/perl/ch-1.pl)
uses [`Math::Prime::XS`](https://metacpan.org/pod/Math::Prime::XS) for a
compact one-liner:

```perl
say join ', ', grep { $_ == reverse $_ } primes(1000);
```

## Pete Houston {#pete-houston1}

[Pete Houston's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/pete-houston/perl/ch-1.pl)
uses `Math::Prime::Util` and scalar `reverse`:

```perl
my @pp;

for my $n (2 .. $max) {
    next unless $n eq reverse $n;
    push @pp, $n if $n eq reverse $n && is_prime ($n);
}

print "@pp\n";
```

This code does not return the correct output. We instead get a single number:
2. Can you spot why?

The `next unless ...` line is a red herring. That line is unnecessary, but
it's not what is messing up our output. No, it's the following line. You'd be
forgiven for thinking the order of operations in that `if` condition would be
equivalent to `($n eq reverse $n) && (is_prime($n))`, but in fact it is
evaluated as `$n eq reverse($n && is_prime($n))`!

The number 2 is the only number that passes, because `is_prime()` returns 2 if
the number is definitely prime, so `2 eq reverse(2 && 2)` is true.
(`is_prime()` returns 1 if a number is probably prime, which can only happen
for numbers larger than 2^64).

Adding some brackets fixes the error: `$n eq reverse($n) && is_prime($n)`.
Another way to go about it is to use the loose `and`: `$n eq reverse $n and
is_prime($n)`. No doubt Pete knows this and merely made a last minute
adjustment that slipped through testing. I've definitely been there!

## Peter Campbell Smith {#peter-campbell-smith1}

[Peter Campbell Smith's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/peter-campbell-smith/perl/ch-1.pl)
uses a nested loop to combine the logic of his trial division prime check,
with the scalar `reverse` palindrome check:

```perl
my (%primes, $j, $p, $results, $reverse);

# discover primes
%primes = ();
OUTER: for $j (2 ... 1000) {

    # not prime if $j divisible by a lesser prime
    for $p (keys %primes) {
        next OUTER if $j % $p == 0;
    }

    # found a prime, check for palindromicity
    $primes{$j} = 1;
    $reverse = '';
    $reverse = $reverse . $1 while $j =~ m|(.)|g;
    $results .= qq[$j, ] if $j == reverse($j);
}
say qq[\nThe following are palindromic primes:\n] . substr($results, 0, -2);
```

**Blog** › [Palindromic primes and moody numbers](https://pjcs-pwc.blogspot.com/2022/05/palindromic-primes-and-moody-numbers.html)

## PokGoPun {#pokgopun1}

[PokGoPun's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/pokgopun/perl/ch-1.pl)
checks for palindromes in a different way (whitespace and comments added by
me):

```perl
        my $i = int(length($_)/2);
        $pld{$_}++ if $i==0 
                   || $i > 0 
                   && $_ =~ /^(
                        \d{$i})     # $1: First half of number
                        \d?         #     Middle digit if odd length
                        (\d{$i}     # $2: Second half of number
                    )$/x && $1 eq join "", reverse split //, $2;
```

So the regex effectively splits the number into halves (throwing away the
middle digit, if there is one), and then the first half is compared to the
`reverse` of the second half. Interesting.

The primality testing is done with a sieve. Instead of building up a list of
primes, they `delete` any composites they find from the list of palindromes
found from the previous step. Here is the sieve:

```perl
    foreach (2..sqrt($n)){
        my $i = $_**2;
        {
            last if $i > $n;
            delete $pld{$i};
            $i += $_;
            redo;
        }
    }
```

Do you see that nested block? The `redo` will actually return to the top of
that block, rather than the top of the `foreach` block! As the `redo` perldoc
puts it, "a block by itself is semantically identical to a loop that executes
once. Thus redo inside such a block will effectively turn it into a looping
construct." The same goes for `last`, `next`, etc. Neat, eh?

## Flavio Poletti {#polettix1}

[Flavio Poletti's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/polettix/perl/ch-1.pl)
uses a prime number algorithm credited to Wikipedia:

```perl
sub is_prime { # https://en.wikipedia.org/wiki/Primality_test
   return if $_[0] < 2;
   return 1 if $_[0] <= 3;
   return unless ($_[0] % 2) && ($_[0] % 3);
   for (my $i = 6 - 1; $i * $i <= $_[0]; $i += 6) {
      return unless ($_[0] % $i) && ($_[0] % ($i + 2));
   }
   return 1;
}
```

This works by ruling out some low hanging fruit, such as 0, 1, 2, 3, and
multiples of 2 and 3. It then performs the so-called "6k ± 1" test to reduce
the number of operations, compared to trial division.

As a side note, I wholeheartedly encourage code re-use, so I very much
appreciate when people cite their sources like this, when their work is taken
or derived from someone else's.

The `is_palindrome()` check uses scalar `reverse`, as we're very familiar with
by now.

```perl
say join ' ', grep {is_prime($_) && is_palindrome($_)} 2 .. $max;

sub is_palindrome ($n) { $n eq reverse $n }
```

**Blog** › [PWC164 - Prime Palindrome - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/05/10/pwc164-prime-palindrome/)

## Robert DiCicco {#robert-dicicco1}

[Robert DiCicco's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/robert-dicicco/perl/ch-1.pl)
uses `is_prime` and scalar `reverse`:

```perl
for (my $n = 1; $n < 1000; $n++){
  if (is_prime($n)) {
    $prime_rev = reverse($n);
    if ((is_prime($prime_rev)) && ($n == $prime_rev)){
      print "$n ";
    }
  }
}
```

## Roger Bell West {#roger-bell-west1}

[Roger Bell West's
solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/roger-bell-west/perl/ch-1.pl)
has an interesting take on the palindrome test:

```perl
sub isnumpal {
    my $c0 = shift;
    my $c = $c0;
    my $j = 0;
    while ($c > 0) {
        $j = 10 * $j + $c % 10;
        $c = int($c/10);
    }
    return ($c0 == $j);
}
```

Rather than using `reverse` or other such string manipulation, Roger has gone
at it numerically, stripping off each trailing digit with `$c % 10` before
removing it with `$c = int($c / 10)`. `$j` is built up one digit at a time. If
`$j` is equal to the initial input, it's a palindrome. This method would be
well suited for languages like C, which would then avoid the need for number
conversions like `snprintf()` or the non-standard but common `itoa()`.

**Blog** › [RogerBW's Blog: The Weekly Challenge 164: Happy Palindromes](https://blog.firedrake.org/archive/2022/05/The_Weekly_Challenge_164__Happy_Palindromes.html)

## Ryan Thompson {#ryan-thompson1}

[My solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/ryan-thompson/perl/ch-1.pl)
uses a sieve to generate all primes under the maximum, and `scalar reverse` to
check for palindromes:

```perl
say for grep { $_ eq scalar reverse $_ } primes_under( pop // 1000 );

sub primes_under {
    my $limit = shift;
    my @comp; # Composite numbers (non-primes)

    for my $n (2..$limit) {
        next if $comp[$n];
        $comp[$_] = 1 for map { $n * $_ } 2..$limit/$n;
    }

    2, grep { !$comp[$_] } 3..$limit;
}
```

**Blog** › [PWC 164 › Palindromic Primes – Ryan J Thompson](https://ry.ca/2022/05/palindromic-primes/)

## Ulrich Rieke {#ulrich-rieke1}

[Ulrich Rieke's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/ulrich-rieke/perl/ch-1.pl)
has an `isPrime()` checker that uses trial division:

```perl
sub isPrime {
  my $number = shift ;
  if ( $number == 1 ) {
      return 0 ;
  }
  elsif ( $number == 2 ) {
      return 1 ;
  }
  else {
      my $root = ceil( sqrt( $number ) ) ;
      for my $i ( 2 .. $root ) {
        if ( $number % $i == 0 ) {
            return 0 ;
        }
      }
      return 1 ;
  }
}
```

Ulrich's `isPalindrome()` uses `split//` and `reverse` in list context,
`join`'d back together:

```perl
sub isPalindrome {
  my $number = shift ;
  my @digits = split( // , $number ) ;
  return join( '' , reverse @digits ) eq $number ;
}

say join( ',' , grep { isPrime( $_ ) && isPalindrome( $_ ) } (2 .. 999)) ;
```

## W. Luis Mochan {#wlmb1}

[W. Luis Mochan's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/wlmb/perl/ch-1.pl)
uses `primes` from `Math::Prime::Util` along with scalar `reverse`:

```perl
use Math::Prime::Util qw(primes);
say "Output: ", join ", ", grep {$_ eq reverse} @{primes(1000)};
```

**Blog** › [Perl Weekly Challenge 164. – W. Luis Mochán. Blog. – Físico, investigador del ICF-UNAM.Physicist, researcher at ICF-UNAM.](https://wlmb.github.io/2022/05/12/PWC164/)

***

***

# Task #2 - Happy Numbers {#task2}

Happy Numbers are found with the following method: Starting with a positive
integer, *n,* replace that number by the sum of the squares of its digits, and
repeat that process until the number equals 1 (n is happy), or it reaches a
cycle that does not equal 1 (n is unhappy). The example provided is perhaps
more instructive:

```
19 => 1^2 + 9^2
   => 1   + 81
   => 82 => 8^2 + 2^2
         => 64  + 4
         => 68 => 6^2 + 8^2
               => 36  + 64
               => 100 => 1^2 + 0^2 + 0^2
                      => 1 + 0 + 0
                      => 1
```

Therefore, 19 is a happy number (in base 10).

***

## Discussion

There are a few different solution options. The problem lends itself very well
to a recursive solution, but an iterative solution will do just as well, and
that's the direction most people went.

Some people, like myself, opted for a straightforward and concise approach to
calculating whether a particular number is happy or not. Others threw some
more robust techniques at it, such as memoization, pre-computing, and snazzy
formatting.

Somewhat surprisingly (to me, at least), the average length of solution was
almost double that of task 1, even with a fair number of people including
their own primality test or sieve in task 1. So let's dive into these task 2
solutions and see what's going on!

***

## Stats

* Number of submissions: **28**

* Total SLOC: **1433**

* Average SLOC: **51**

## Adam Russell {#adam-russell2}

[Adam Russell's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/adam-russell/perl/ch-2.pl) starts us off happily enough:

```perl
sub happy{
    my $n = shift;
    my @seen;
    my $pdi = sub{
        my $n = shift;
        my $total = 0;
        {
            $total += ($n % 10)**2;
            $n = int($n / 10);
            redo if $n > 0;
        }
        return $total;
    };
    {
        push @seen, $n;
        $n = $pdi->($n);
        redo if $n > 1 && (grep {$_ == $n} @seen) == 0;
    }
    return boolean($n == 1);
}
```

This sub returns a true value if `$n` is happy. Adam uses an anonymous sub,
`$pdi`—for *Perfect Digit Invariant*—to calculate the total sum of squares of
digits for a given number. As with task #1, Adam uses `redo` inside of a bare
BLOCK to exit the loop early.  Another way to write that block would be:

```perl
        do {
            $total += ($n % 10)**2;
            $n = int($n / 10);
        } while $n > 0;
```

However, Adam's blog post lets us know he is perfectly aware of his penchant
for `redo`, which made three appearances in his solutions this week:

> I have become incorrigible in my use of redo! The novelty just hasn't worn off I suppose.

Adam, I always enjoy pointing interesting language features out, so be as
incorrigible as you like!

Back to the `happy` function, we have another loop:

```perl
    {
        push @seen, $n;
        $n = $pdi->($n);
        redo if $n > 1 && (grep {$_ == $n} @seen) == 0;
    }
```

The above block is another `redo` loop that continues looping over all sums of
square digits starting from the original `$n`, until `$n == 1` or `$n` is in
`@seen`.

Adam then simply loops until he's found `N` happy numbers:

```perl
MAIN:{
    my $i = 0;
    my @happy;
    {
        $i++;
        push @happy, $i if happy($i);
        redo if @happy < N;
    }
    print join(", ", @happy) . "\n";
}
```

**Blog** › [RabbitFarm (Perl)](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/05/15)

**Blog** › [RabbitFarm (Prolog)](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/05/15)

## Alexander Pankoff {#alexander-pankoff2}

[Alexander Pankoff's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/alexander-pankoff/perl/ch-2.pl)
starts off with the following high level logic:

```perl
sub happy_numbers($n) {
    my @happy_numbers = ();
    for ( my $i = 0 ; @happy_numbers < $n ; $i++ ) {
        push @happy_numbers, $i if is_happy_number($i);
    }

    return @happy_numbers;
}
```

As we are asked to find the first eight happy numbers, Alexander simply loops
over all numbers until `@happy_numbers` contains `$n == 8` elements.

The `is_happy_number()` function returns true iff `$n` is a happy number:

```perl
sub is_happy_number($n) {
    my %seen;

    while ( $n != 1 ) {
        return 0 if $seen{$n};
        $seen{$n} = 1;
        $n = sum0( map { $_**2 } split( m//, $n ) );
    }

    return 1;
}
```

Alexander detects loops with a `%seen` hash. Hashes are a good choice, here,
since the distribution of seen values will be quite sparse, and hashes give
constant time performance in Perl.

The `while` loop keeps replacing `$n` with the sum of the squares of its
digits, until `$n == 1`. If `$seen{$n}` is true, Alexander `returns` to bail
out. All in all, this is an efficient, clean way to go about it!

## Arne Sommer {#arne-sommer2}

[Arne Sommer's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/arne-sommer/perl/ch-2.pl) starts us off with a sum-of-digit-squares sub:

```perl
sub happy ($number) {
    return sum( map { $_**2 } split( //, $number ) );
}
```

The remaining code loops until the number of elements in `@result` is the
`$limit`: 

```perl
my @result;
my $number = 0;

while ( ++$number ) {
    my $n = $number;
    my $i = $delta;

    while ( $n != 1 && $i > 0 ) {
        $n = happy($n);
        $i--;
    }

    if ($verbose) {
        $n == 1
          ? say ": $number is happy (in " . ( 100 - $i ) . " step(s))"
          : say ": $number is not happy";
    }

    push( @result, $number ) if $n == 1;

    last if @result == $limit;
}
```

**Blog** › [Primarily Happy with Raku and Perl - Arne Sommer](https://raku-musings.com/primarily-happy.html)

## Athanasius {#athanasius2}

[Athanasius's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/athanasius/perl/ch-2.pl)
starts off by defining a `$CYCLE` set (via
[`Set::Tiny`](https://metacpan.org/pod/Set::Tiny)):

```perl
use Const::Fast;
use Set::Tiny;

const my $CYCLE  => Set::Tiny->new( qw[ 4 16 37 58 89 145 42 20 ] );
```

In a code comment, Athanasius references the Wikipedia article's observation
that all base-10 numbers either terminate at 1, or end in the above cycle.
Thus, if any of those numbers are seen, we can immediately conclude the number
is unhappy. And that's just what Athanasius does:

```perl
for ( my $n = 1 ; scalar @happy < $TARGET ; ++$n ) {
    my ( $done, $last ) = ( 0, $n );

    until ($done) {
        my $next = sum_of_squares($last);

        if ( $next == 1 )               # n is happy
        {
            push @happy, $n;
            $done = 1;
        }
        elsif ( $CYCLE->has($next) )    # n is unhappy
        {
            $done = 1;
        }

        $last = $next;
    }
}

printf "The first %d 10-Happy Numbers:\n%s\n", $TARGET, join ', ', @happy;
```

I'm glad Athanasius showcased this optimization, so I could talk about it.


## Cheok-Yin Fung {#cheok-yin-fung2}

[Cheok-Yin Fung](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/cheok-yin-fung/perl/ch-2.pl) counts her way to happiness:

```perl
my $happiness = $ARGV[0] || 8;
my $counter = 0;
my $n = 1;

while ( $counter < $happiness ) {
    if (verify_happy($n)) {
        $counter++;
        say $n;
    }
    $n++;
}
```

If only *life* were that simple!

The real heavy lifting is done by the `verify_happy` function:

```perl
sub verify_happy {
    my $number = $_[0];
    my @arr;
    while ($number > 999) {
        @arr = split "", $number;
        $number = sum map {$_**2} @arr;
    }

    my @appeared = ($number);
    my $loop_control = 244;  # 243 = 9**2 + 9**2 + 9**2
    do {
        return 1 if $number == 1;
        @arr = split "", $number;
        $number = sum map {$_**2} @arr;
        return 0 if any {$number == $_} @appeared;
        push @appeared, $number;
        $loop_control--;
    } while ($loop_control>0);
    return 0;
}
```

That top while loop only runs for numbers greater than 999, to pre-run the sum
of digit squares part of the algorithm until the number is three digits or
less. You might worry this might result in an infinite loop if a cycle is
detected before then, but [Athanasius's solution](#athanasius2) highlights why
that can never happen.

The second loop repeatedly calculates the sum of square digits and returns 1
if `$n == 1` or 0 if we've seen the number before. The `$loop_control`
variable, I confess, is a bit of a mystery. My educated guess is that it looks
like a bit of defensive programming to prevent an infinite loop if we detect
neither a cycle nor a 1, which is not possible.

## Colin Crain {#colin-crain2}

[Colin Crain's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/colin-crain/perl/ch-2.pl) loops until eight numbers have passed the `happy()` test:

```perl
sub happy ($num) {
    my %seen = ( $num => 1 );

    while ( $num != 1 ) {
        $num = sum map { $_ ** 2 } split //, $num;
        return 0 if $seen{$num};
        $seen{$num} = 1;
    }
    return $num;
}
```

Using a hash for `%seen` values gives Colin an O(1) (constant time) lookup.

**Blog** › [Happy Happy Joy Joy – Programming Excursions in Perl and Raku](https://colincrain.com/2022/05/15/happy-happy-joy-joy/)

## Dave Jacoby {#dave-jacoby2}

[Dave Jacoby's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/dave-jacoby/perl/ch-2.pl) similarly loops eight times:

```perl
my @happy;
while ( scalar @happy < 8 ) {
    state $c = 0;
    $c++;
    push @happy, $c if is_happy($c);
}
say join ", ", @happy;
exit;
```

Dave's `is_happy()` has a slight tweak that I quite like:

```perl
sub is_happy( $n ) {
    my $m = $n;
    my %done;
    while ( !$done{$m} ) {
        $done{$m}++;
        $m = sum0 map { $_**2 } split //, $m;
    }
    return $m == 1 ? 1 : 0;
}
```

Dave was able to turn both exit conditions into a single check against
`%done`, knowing that once we get to 1, that value will repeat. The turnbuckle
`return` does explicitly check for 1.

**Blog** › [Shiny Happy Numbers: Weekly Challenge #164 | Committed to Memory](https://jacoby.github.io/2022/05/09/shiny-happy-numbers-weekly-challenge-164.html)

## Ali Moradi {#deadmarshal2}

[Ali Moradi's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/deadmarshal/perl/ch-2.pl)
gives us another variation, with `sum0`. `sum0` is used when you need your sum
to have a default value (zero) in the case an empty list is passed in.
Whatever alternate universe Ali is in where a number can have zero digits,
sounds very interesting indeed! Seriously, though, `sum0` is a good utility to
tuck away in your brain, as there are a lot of situations where having a
default sum (instead of `undef`) is a good thing.

```perl
#!/usr/bin/env perl
use strict;
use warnings;
use List::Util qw(sum0);

sub is_happy{
  my ($n) = @_;
  my %seen;
  while(1){
    $n = sum0(map {$_ ** 2} split //, $n);
    return 1 if $n == 1;
    return 0 if $seen{$n}++;
  }
}
```

By now we're really starting to see some patterns and similar code.

## Duncan C. White {#duncan-c-white2}

[Duncan C. White's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/duncan-c-white/perl/ch-2.pl)
coincidentally also uses `sum0`:

```perl
use Function::Parameters;

fun ishappy( $x )
{
    my %seen;
    while( $x > 1 )
    {
        return 0 if $seen{$x}++;
        #say "debug: x=$x" if $debug;
        $x = sum0( map { $_ * $_ } split(//,$x) );
    }
    return 1;
}
```

## E. Choroba {#e-choroba2}

[E. Choroba's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/e-choroba/perl/ch-2.pl)
gives us something a little bit different. Choroba does use a hash, eschews
core `List::Util`'s `sum` in favor of a `for` loop, but structures the whole
thing in a `happy_numbers()` function that returns an array ref of the first
`$tally` happy numbers:

```perl
sub happy_numbers {
    my ($tally) = @_;
    my @happy_numbers;
    my $number = 1;

  CANDIDATE:
    while (@happy_numbers < $tally) {
        my $replace = $number;
        my %loop;
        my $sum;
        do {
            $sum = 0;
            $sum += $_ * $_ for split //, $replace;
            $replace = $sum;
            next CANDIDATE if $loop{$sum}++;

        } until 1 == $sum;

        push @happy_numbers, $number;

    } continue {
        ++$number;
    }

    return \@happy_numbers
}
```

## Jaldhar H. Vyas {#jaldhar-h-vyas2}

[Jaldhar H. Vyas's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/jaldhar-h-vyas/perl/ch-2.pl)
also chooses not to use `List::Util`, writing his own pure Perl `sum`
function:

```perl
sub sum {
    my ($arr) = @_;
    my $total = 0;

    for my $elem (@{$arr}) {
        $total += $elem;
    }

    return $total;
}
```

Why not, eh?

The `isHappy()` function relies on the fact that base-10 happy numbers always
have a cycle length of 8:

```perl
sub isHappy {
    my ($i) = @_;
    my $tries = 0;
    my $s = $i;

    while ($s != 1) {
        if ($tries == 8) {
            return undef;
        }
        $s = sum([map { $_ ** 2 } split //, $s]);
        $tries++;
    }

    return 1;
}
```

**Blog** › [Perl Weekly Challenge: Week 164](https://www.braincells.com/perl/2022/05/perl_weekly_challenge_week_164.html)

## James Smith {#james-smith2}

[James Smith's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/james-smith/perl/ch-2.pl)
is over 200 lines, contains a test suite, benchmarking, and several
variations, progressively more complex. It's worth looking at, and checking
out his blog, as it's a wonderful journey through his approach to this
problem. I'll highlight James's precache version: 

```perl
sub is_happy_precache {
    state @happy;
    my ( $L, $N, $t, @ret, %seen ) = ( 1_640, $_[0] );

    unless (@happy) {
        @happy = ( 0, 1 );
      O: for my $N ( 2 .. $L ) {
            my $n = $N;
            %seen = ();
            while ( $n > 1 ) {
                last if defined $happy[$n] && $happy[$n] == 1;
                if ( defined $happy[$n] || $seen{$n} ) {
                    $happy[$_] = 0 for keys %seen;
                    next O;
                }
                $seen{ $t = $n } = 1, $n = 0;
                do { $n += ( $t % 10 )**2 } while $t = int( $t / 10 );
            }
            $happy[$_] = 1 for $N, keys %seen;
        }
    }

    if ( $N > $L ) {    ## If not in cached array we compute
        my $n = $N, $N = 0;    ## the sum of digits squared....
        do { $N += ( $n % 10 )**2 } while $n = int( $n / 10 );
    }
    $happy[$N];                ## And look up value in the cache..
}
```

Right off the bat, notice the `state` variable, which will persist between
calls of `is_happy_precache()`.

```perl
    state @happy;
    my ( $L, $N, $t, @ret, %seen ) = ( 1_640, $_[0] );
```

The next line front-loads a few of the declarations needed, while sneaking in
the argument, `$N`.

* `$L = 1640` appears to be the limit that James has imposed on his routine.
* `$N` is of course the number we want to compute the happiness of.
* `$t` appears to be a temporary variable, or maybe "total"? In any case, it's used only inside the `while` loop.
* `@ret` is unused, probably a vestigal bit from his other variations.
* `%seen` is our list of seen values, which is reset every time through the outer `for my $N` loop

That `for my $N` loop, you'll note, gives us a different lexically scoped
`$N`.

The bulk of the function is the `unless (@happy) { ... }` loop, which is only
run the first time `is_happy_precache()` is called. This loop goes through
every number and determines if it's happy or sad. James gets to take advantage
of prior knowledge by setting `$happy[$_]` zero for every `%seen` number, if a
cycle is detected, since they will all lead to the same cycle. On subsequent
iterations through the loop, if `$happy[$n]` is defined, it is no longer
necessary to do the successive sum of square digits calculations.

Finally, James has a check if `$N > $L`, which enables the function to compute
values beyond its hard-coded limit, and then simply returns `$happy[$N]`.

James's benchmarks suggest this method is over five times faster than
`is_happy(1_000_000)`, at the cost of more memory and a penalty to the first
call. These are tradeoffs we often have to decide on in software development.

**Blog** › [perlweeklychallenge-club/challenge-164/james-smith at master · drbaggy/perlweeklychallenge-club · GitHub](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-164/james-smith)

## Jorg Sommrey {#jo-372}

[Jorg Sommrey's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/jo-37/perl/ch-2.pl)
takes it to the next level by supporting arbitrary bases. Here is his
function, which returns a generator for b-happy numbers (happy numbers in base
b):

```perl
# Generalizing the task to b-happy numbers in any base.
#
# Build a generator for b-happy numbers.
sub happy_gen ($base) {
    my %happy;
    generator {
        for (my $n = 1;; $n++) {
            # Return cached results.
            if (exists $happy{$n}) {
                yield $n if $happy{$n};
                next;
            }
            # Get the digit square sum sequence for $n in base $base up to
            # the first known happy or unhappy number.
            my $seen = dsss($n, $base, \%happy);
            # Is $n a b-happy number?
            my $happy = $seen->{1};
            # Cache the new found numbers as happy or unhappy.
            @happy{keys %$seen} = ($happy) x keys %$seen;

            yield $n if $happy;
        }
    }
}
```

That `generator { ... }`, by the way, comes from
[`Coro::Generator`](https://metacpan.org/pod/Coro::Generator). Here it's
working as an iterator, which returns the next b-happy number on every call,
like this:

```perl
my  $it = happy_gen(10);
say $it->() for 1..5; # First 5 10-happy numbers
```

Jorg also takes a caching approach, but does not need to precompute anything:

```perl
# Cache the new found numbers as happy or unhappy.
@happy{keys %$seen} = ($happy) x keys %$seen;
```

This hash slice syntax makes for very concise and expressive code.

The `dsss()` sub builds up the digit square sum sequence for a number `$n` in
an arbitrary `$base`. Here the result is fed back into the `$happy` hashref
that is given as an argument, allowing the caller to benefit from all of the
other happy (or sad) numbers found along the way.

```perl
# Build a digit square sum sequence for $n in base $base with cached
# results in the hash ref $happy
sub dsss ($n, $base, $happy) {
    my %seen;
    # Test and set $n as seen.
    while (!$seen{$n}++) {
        if (exists $happy->{$n}) {
            # Add one as hash key to signal that a b-happy number has
            # been found.
            $seen{1} = 1 if $happy->{$n};
            return \%seen;
        }
        # Get the next number as the digit square sum of the current
        # number.
        $n = vecreduce {$a + $b**2} 0, todigits $n, $base;
    }
    # Return the seen numbers as hash keys.
    \%seen;
}
```

Instead of bringing in `sum`, Jorg shows us the `vecreduce` subroutine from
[`Math::Prime::Util`](https://metacpan.org/pod/Math::Prime::Util). It works
just like you'd expect from other reduce implementations, such as the one that
you get from the core `List::Util` module. `reduce` is extremely versatile.

## Julien Fiegehenn {#julien-fiegehenn2}

[Julien Fiegehenn's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/julien-fiegehenn/perl/ch-2.pl)
is a return to the familiar format of using a `%seen` hash and `sum`ming the
squares of the digits:

```perl
sub happy_number {
    my $number = my $start = shift;

    my %seen;
    until ( $number == 1 ) {
        my $new_number = sum map { $_**2 } split //, $number;
        return if $seen{$new_number}++;
        $number = $new_number;
    }

    return 1;
}
```

## Kjetil Skotheim {#kjetillll2}

[Kjetil Skotheim's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/kjetillll/perl/ch-2.pl)
gives us a recursive implementation, rather than an iterative one:

```perl
sub is_happy {
    my $n = shift;
    my ( %seen, $happy );
    $happy = sub {
        my $n = shift;
            $n == 1     ? 1
          : $seen{$n}++ ? 0
          :               &$happy( sum( map $_**2, $n =~ /\d/g ) );
    };
    &$happy($n);
}
```

The `$happy` sub is a closure around `%seen`. The sub itself is a single
conditional statement that returns 1 or 0 for the base cases (happy or
`%seen`), and recurses on the sum of squares of digits otherwise.

This is logically equivalent to the iterative format we've seen several times
already. In fact, in some languages (Perl being a perhaps slightly unfortunate
exception), since the recursive step happens at the end (or tail) of the
function, the compiler will optimize this so-called tail call into a `goto`,
making it exactly equivalent to an iterative version. For various reasons,
Perl doesn't do tail call optimization. [You can kind of fake
it](https://perldoc.perl.org/functions/goto) with `goto &NAME`, but it's not
exactly an optimization.

## Laurent Rosenfeld {#laurent-rosenfeld2}

[Laurent Rosenfeld's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/laurent-rosenfeld/perl/ch-2.pl)
is another great example of the hash of `%seen` values, and simple, clear code
to calculate the digit square sum:

```perl
sub is_happy {
    my $n = shift;
    my %seen;
    while (1) {
        return 1 if $n == 1;
        return 0 if exists $seen{$n};
        $seen{$n} = 1;
        my $sum = 0;
        $sum += $_ for map $_ ** 2, split //, $n;
        $n = $sum;
    }
}
```

**Blog** › [Perl Weekly Challenge 164: Prime Palindromes and Happy Numbers | laurent_r [blogs.perl.org]](http://blogs.perl.org/users/laurent_r/2022/05/perl-weekly-challenge-164-prime-palindromes-and-happy-numbers.html)

## Lubos Kolouch {#lubos-kolouch2}

[Lubos Kolouch's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/lubos-kolouch/perl/ch-2.pl)
includes simple summation code, and is otherwise very similar to other
solutions:

```perl
sub is_happy {
    my $what = shift;

    my %results_cache;

    while (1) {
        my $result = 0;
        for my $num ( split //, $what ) {
            $result += $num * $num;
        }

        return 1 if $result == 1;
        return 0 if $results_cache{$result};
        $results_cache{$result} = 1;
        $what = $result;
    }

    return;
}
```

## Luiz Felipe {#luiz-felipe2}

[Luiz Felipe's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/luiz-felipe/perl/ch-2.pl)
breaks the test out into two functions. The first, `happy_sum()`, is simply
tasked with computing the digit square sum:

```perl
sub happy_sum {
    my ($number, $sum);

    $number = shift;
    $sum = 0;

    foreach my $sub_number (split //, $number) {
        $sum += $sub_number ** 2;
    }

    return $sum;
}
```

And the `is_happy()` function, with the by now very familiar `%seen` hash,
takes care of the rest:

```perl
sub is_happy {
    my ($number, %seen);

    $number = shift;

    until ($number == 1) {
        my $new_number = happy_sum($number);

        return if $seen{$new_number}++;

        $number = $new_number;
    }
}
```

It's worth noting that there is no obvious return value here for what happens
when the `until ($number == 1) { ... }` loop falls through (in the case of a
happy number). Remember that the return value of any BLOCK in Perl is always
the last expression in the BLOCK.

The `$number = $new_number` expression's value will propagate to the return
for the `sub is_happy { ... }` block. So, `is_happy` returns `$new_number`,
which will always be 1 thanks to the `until` loop's condition.

Could Luiz have simply stuck a `return 1` after the loop? Sure. But then one
or two of you wouldn't have learned about implicit return values.

Personally, I take a considered approach when it comes to using an explicit
`return` at the end of a sub. I'm guided by what is going to be obvious,
maintainable, and error free, without leaking internal logic. Often that means
an explicit `return`, but just as often not. Some corporate style guides are
sticklers for explicit `return`s, but that's a whole 'nother discussion.

## Matthew Neleigh {#mattneleigh2}

[Matthew Neleigh's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/mattneleigh/perl/ch-2.pl)
is perhaps most interesting for the internal documentation style:

```perl
################################################################################
# Determine whether a positive integer is a Happy Number in Base 10; see
# https://en.wikipedia.org/wiki/Happy_number for a description of the Happy
# Numbers
# Takes one argument:
# * The integer N to examine
# Returns on success:
# * 1 if N is a Happy Number
# * 0 if N is not a Happy Number
# Returns on error:
# * undef if N is less than 1
################################################################################
sub is_happy_number_b10{
    my $n = int(shift());

    return(undef)
        unless($n > 0);

    my %seen = ();

    # Loop until one of the exit criteria triggers
    # a return from the function
    while(1){
        my $sum_squares = 0;

        # If $n is one, we've found a happy number;
        # return true
        return(1)
            if($n == 1);

        # Sum the squares of the digits in $n
        foreach(split("", $n)){
            $sum_squares += $_ * $_;
        }

        # If we've seen this value of $sum_squares
        # before, we didn't start with a happy number;
        # return false
        return(0)
            if($seen{$sum_squares});

        # Store the sum of the squares for later
        # examination in future iterations, and set
        # $n to this new value
        $seen{$sum_squares} = 1;
        $n = $sum_squares;
    }

}
```

The comments do a very good job of describing what is happening in great
detail. Here's the function without the comments:

```perl
sub is_happy_number_b10{
    my $n = int(shift());

    return(undef) unless($n > 0);

    my %seen = ();

    while(1){
        my $sum_squares = 0;

        return(1) if($n == 1);

        foreach(split("", $n)){
            $sum_squares += $_ * $_;
        }

        return(0) if($seen{$sum_squares});

        $seen{$sum_squares} = 1;
        $n = $sum_squares;
    }

}
```

Matt's verbose comment style looks rather like an inline blog post, which is a
perfectly efficient way to communicate a Weekly Challenge solution, in my
opinion!

## Niels van Dijke {#perlboy19672}

[Niels van Dijke's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/perlboy1967/perl/ch-2.pl)
is a nice and concise variation on the theme we've seen before:

```perl
sub isHappy ($) {
  my ($n) = @_;

  my %seen;

  while ($n != 1 and !exists $seen{$n}) {
    $seen{$n}++;
    $n = sum map { $_*$_ } unpack '(A1)*', $n;
  }

  return $n == 1;
}
```

Niels has made it a bit more concise by combining the happy/sad conditionals
in the `while` statement. What makes Neils's solution stand out, however, is
the use of `unpack` instead of `split`, to get the digits of `$n`. He's the
only one to use `unpack`.

## Pete Houston {#pete-houston2}

[Pete Houston's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/pete-houston/perl/ch-2.pl)
is again, quite similar, but there's a twist:

```perl
sub is_happy {
    my $x    = shift;
    my %seen = ($x => 1);

    while ($x != 1) {

        # Sum the squares of the digits
        my $sum = 0;
        $sum += chop ($x) ** 2 for 1 .. length $x;

        # Have we looped?
        return 0 if $seen{$sum};

        # Store it and go again
        $seen{$x = $sum} = 1;
    }

    return 1;
}
```

Pete's use of `chop` to get the digits is a fun way to go about it. `chop` got
a bad rap in the early days of Perl, as some programmers used it to remove
trailing newlines. This worked on Unix and Linux systems where the newline was
a single character, but caused errors on DOS-based systems that used `\r\n`
for a newline, and failed even more ungracefully if the string didn't contain
a newline at all. `chop` also modifies its argument, whereas `chomp()` does
not. Over and over, "use `chomp`, not `chop`. It's safer!", was beaten
into our heads. `chop` has always had its uses, though!

Pete is not removing newlines, nor does he care if the argument is modified,
so `chop` works just fine.

## Peter Campbell Smith {#peter-campbell-smith2}

[Peter Campbell Smith's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/peter-campbell-smith/perl/ch-2.pl)
starts off with a bunch of file-scoped variables:

```perl
my ($test, $so_far, $i, @digits, $d, @seen, @sad, $result1, $result2, $indent, $found);
```

What these do, I have no idea yet, although it appears there is a whole array
of `@sad`ness in store!

```perl
$found = 0;
@sad = ();

# loop in the hope that we find 8 happy numbers before 1000
TEST: for $test (1 .. 1000) {
    last if $found == 8;  # success!

    $indent = 0;
    $so_far = $test;   # this will be our running sum of squares
    @seen = ();        # these are sums already seen for this $test (indicating looping)
    $result1 = '';

    # now iterate over the adding the digits squares
    for $i (1 .. 10) {

        # split $so_far into digits
        @digits = split('', $so_far);

        # this is all stuff to format the output as per Mohammad's example
        $result1 .= qq[$so_far => ];
        $indent += length($so_far) + ($i == 1 ? 1 : 4);
        $result2 = (' ' x $indent) . qq[=> ];

        # now sum the square of the digits
        $so_far = 0;
        for $d (@digits) {
            $so_far += $d**2;

            # more formatting stuff
            $result1 .= qq[$d^2 + ];
            $result2 .= $d**2 . qq[ + ];
        }

        # more formatting stuff
        $result1 = substr($result1, 0, -2) . qq[\n] .
                substr($result2, 0, -2) . qq[\n] . (' ' x $indent) . '=> ';

        # if $so_far is 1 we are happy!
        if ($so_far == 1) {
            say qq[\n${result1}1];
            $found ++;
            next TEST;

        # if $so_far has been seen already for this $test or is already known to be $sad
        # then we're in a loop and $test is sad
        } elsif ($seen[$so_far] or $sad[$so_far]) {
            $sad[$so_far] = 1;
            next TEST;
        }

        # if neither of the above are true then we note that we've seen $seen and keep going
        $seen[$so_far] = 1;
    }
}
```

Peter's code is also formatting the results exactly in the way Mohammad's task
description did, so we'll see, for example:

```
28 => 2^2 + 8^2 
   => 4 + 64 
   => 68 => 6^2 + 8^2 
         => 36 + 64 
         => 100 => 1^2 + 0^2 + 0^2 
                => 1 + 0 + 0 
                => 1
```

Neat!

**Blog** › [Palindromic primes and moody numbers](https://pjcs-pwc.blogspot.com/2022/05/palindromic-primes-and-moody-numbers.html)

## PokGoPun {#pokgopun2}

[PokGoPun's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/pokgopun/perl/ch-2.pl)
uses simple a memoization strategy on top of a recursive implementation:

```perl
my %happy;

sub isHappy{
    my $i = shift;
    return $happy{$i} if defined $happy{$i};
    if (grep{$_==$i} @_){
        $happy{$_}=0 foreach @_;
        return 0;
    }
    my $sum = eval(join(" + ", map{$_*$_} split //,$i));
    push @_, $i;
    if ($sum==1){
        $happy{$_}=1 foreach @_;
        return 1;
    }
    return isHappy($sum,@_);
}
```

Every time a number is found to be happy or sad, every seen number is added to
the cache.

## Flavio Poletti {#polettix2}

[Flavio Poletti's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/polettix/perl/ch-2.pl)
also caches results, using two `state` variables:

```perl
sub is_happy ($n) {
   state $is_happy = { 1 => 1 };
   state $is_not_happy = {};
   return 1 if $is_happy->{$n};
   return 0 if $is_not_happy->{$n};
   my %round;
   while (! $round{$n}) {
      $round{$n} = 1;
      $n = sum map { $_ * $_ } split m{}mxs, $n;
      if ($n == 1) {
         $is_happy->{$_} = 1 for keys %round;
         return 1;
      }
   }
   $is_not_happy->{$_} for keys %round;
   return 0;
}
```

**Blog** › [PWC164 - Happy Numbers - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/05/11/pwc164-happy-numbers/)

## Roger Bell_West {#roger-bell-west2}

[Roger Bell_West's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/roger-bell-west/perl/ch-2.pl)
starts out with a sum of square digits function:

```perl
sub ssd {
    my $n   = shift;
    my $out = 0;
    while ( $n > 0 ) {
        my $d = $n % 10;
        $out += $d * $d;
        $n = int( $n / 10 );
    }
    return $out;
}
```

Roger peels off each digit with `$n % 10` rather than using `split`, `unpack`,
or `chop`. His `happy()` function returns a list of `$ct` happy numbers:

```perl
sub happy {
    my $ct = shift;
    my %hm = ( 1 => 1 );
    my $c  = 0;
    my @out;
    while (1) {
        $c++;
        unless ( exists $hm{$c} ) {
            my $v  = $c;
            my %ss = ( $v => 1 );
            my $h  = 1;
            while (1) {
                if ( exists $hm{$v} ) {
                    $h = $hm{$v};
                    last;
                }
                else {
                    $v = ssd($v);
                    if ( exists $ss{$v} ) {
                        $h = 0;
                        last;
                    }
                    $ss{$v}++;
                }
            }
            map { $hm{$_} = $h } keys %ss;
        }
        if ( $hm{$c} ) {
            push @out, $c;
            if ( scalar @out >= $ct ) {
                last;
            }
        }
    }
    return \@out;
}
```

We can see some familiar constructs here: a cache of happy numbers in `%hm`,
and a seen hash in `%ss`, with a simple loop that iterates over the `ssd()`
function (sum of square digits) until the result has been seen, or is known to
be happy (or sad). 1 is pre-populated in `%hm`, so Roger doesn't need to
explicitly check for `$v == 1`.

**Blog** › [RogerBW's Blog: The Weekly Challenge 164: Happy Palindromes](https://blog.firedrake.org/archive/2022/05/The_Weekly_Challenge_164__Happy_Palindromes.html)

## Ryan Thompson {#ryan-thompson2}

[My solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/ryan-thompson/perl/ch-2.pl)
is quite similar to the others:

```perl
# Return true if $_ is a happy number
sub is_happy(_) {
    my $n = shift;

    my %seen;
    for (my $c = $n; $c != 1; $c = sum map { $_*$_ } split //, $c) {
        return if $seen{$c}++;
    }

    return 1
}
```

For some reason, I decided to cram the sum of square digits into into the
C-style `for` loop conditional. It's certainly not the weirdest thing I've
ever shoved into a conditional, but this is a PG-rated review, so I'll just
leave it at that.

At least you know I'm not immune to my own critiques!

**Blog** › [PWC 164 › Happy Numbers – Ryan J Thompson](https://ry.ca/2022/05/happy-numbers/)

## Ulrich Rieke {#ulrich-rieke2}

[Ulrich Rieke's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/ulrich-rieke/perl/ch-2.pl)
gives us a nicely concise `squareSum()` function:

```perl
sub squareSum {
    my $number = shift;
    return sum( map { $_**2 } split( //, $number ) );
}
```

He then uses that to implement an iterative `isHappy()` checker:

```perl
sub isHappy {
    my %seen;
    my $number = shift;
    my $sum    = squareSum($number);
    $seen{$sum}++;
    do {
        $sum = squareSum($sum);
        $seen{$sum}++;
    } until ( $sum == 1 || $seen{$sum} > 1 );
    return ( $sum == 1 );
}
```

## W. Luis Mochan {#wlmb2}

[W. Luis Mochan's solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-164/wlmb/perl/ch-2.pl)
is another concise iterative implementation:

```perl
sub happy {
    my $x=shift;
    my %seen;
    while(!$seen{$x}){
        $seen{$x}=1;
        $x=sum map {$_*$_} split "", $x
    }
    return $x==1;
}
```

**Blog** › [Perl Weekly Challenge 164. – W. Luis Mochán. Blog. – Físico, investigador del ICF-UNAM.Physicist, researcher at ICF-UNAM.](https://wlmb.github.io/2022/05/12/PWC164/)

***

***

## See Also {#blogs}

### Blogs this week:

**Adam Russell** › [RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2022/05/15) | [RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2022/05/15)

**Arne Sommer** › [Primarily Happy with Raku and Perl - Arne Sommer](https://raku-musings.com/primarily-happy.html)

**Colin Crain** › [Happy Happy Joy Joy – Programming Excursions in Perl and Raku](https://colincrain.com/2022/05/15/happy-happy-joy-joy/)

**Dave Jacoby** › [Shiny Happy Numbers: Weekly Challenge #164 | Committed to Memory](https://jacoby.github.io/2022/05/09/shiny-happy-numbers-weekly-challenge-164.html)

**Flavio Poletti** › [PWC164 - Prime Palindrome - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/05/10/pwc164-prime-palindrome/) | [PWC164 - Happy Numbers - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2022/05/11/pwc164-happy-numbers/)

**Jaldhar H. Vyas** › [Perl Weekly Challenge: Week 164](https://www.braincells.com/perl/2022/05/perl_weekly_challenge_week_164.html)

**James Smith** › [perlweeklychallenge-club/challenge-164/james-smith at master · drbaggy/perlweeklychallenge-club · GitHub](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-164/james-smith)

**Laurent Rosenfeld** › [Perl Weekly Challenge 164: Prime Palindromes and Happy Numbers | laurent_r [blogs.perl.org]](http://blogs.perl.org/users/laurent_r/2022/05/perl-weekly-challenge-164-prime-palindromes-and-happy-numbers.html)

**Luca Ferrari** › [Perl Weekly Challenge 164: quick and easy – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/05/09/PerlWeeklyChallenge164.html#task1) | [Perl Weekly Challenge 164: quick and easy – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2022/05/09/PerlWeeklyChallenge164.html#task2)

**Mark Senn** › [Mark Senn's blog](https://engineering.purdue.edu/~mark/twc-164-1.pdf) | [Mark Senn's blog](https://engineering.purdue.edu/~mark/twc-164-2.pdf)

**Peter Campbell Smith** › [Palindromic primes and moody numbers](https://pjcs-pwc.blogspot.com/2022/05/palindromic-primes-and-moody-numbers.html)

**Roger Bell_West** › [RogerBW's Blog: The Weekly Challenge 164: Happy Palindromes](https://blog.firedrake.org/archive/2022/05/The_Weekly_Challenge_164__Happy_Palindromes.html)

**Ryan Thompson** › [PWC 164 › Happy Numbers – Ryan J Thompson](https://ry.ca/2022/05/happy-numbers/) | [PWC 164 › Palindromic Primes – Ryan J Thompson](https://ry.ca/2022/05/palindromic-primes/)

**W. Luis Mochan** › [Perl Weekly Challenge 164. – W. Luis Mochán. Blog. – Físico, investigador del ICF-UNAM.Physicist, researcher at ICF-UNAM.](https://wlmb.github.io/2022/05/12/PWC164/)


