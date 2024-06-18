
---
author:       Colin Crain
date:         2022-01-24T00:00:00
description:  "Colin Crain › Perl Weekly Review #144"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #144"
image:        images/blog/p5-review-challenge-144.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-143/).* )

Welcome to the Perl review pages for **Week 144** of The Weekly Challenge! Here we will take the time to discuss the  submissions offered up by the team, factor out some common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

---

### Why do we do these challenges?

I suppose any reasonable answers to that question would be as wide ranging and varied as the people who choose to join the team. One thing, though, is clear: it's not a competition, and there are no judges, even if there is a "prize" of sorts. About that -- I think of it more as an honorarium periodically awarded to acknowledge the efforts we make towards this strange goal. So there's no determination to find the *fastest*, or the *shortest*, or even, in some abstract way, the *best* way to go about things, although I'm certain the participants have their own aspirations and personal drives. As Perl is such a wonderfully expressive language, this provides quite a bit of fodder to the core idea of TMTOWTDI, producing a gamut of varied techniques and solutions.

Even the tasks themselves are often open to a certain amount of discretionary interpretation. What we end up with is a situation where each participant is producing something in the manner they find the most interesting or satisfying. Some team members focus on carefully crafted complete applications, thoroughly vetting input data and handling every use case they can think up. Others choose to apply themselves to the logic of the underlying puzzle and making it work in the most elegant way they can. Some eschew modules they would ordinarily reach for, others embrace them, bringing to light wheels perhaps invented years ago that happen to exactly solve the problem in front of them today.

I've been considering this question for some time and have found one binding commonality between all of us out solving these challenges each week, in that however we normally live our lives, the task in front of us more than likely has nothing to do with any of that. And I think this has great value. We all do what we do, in the real world, and hopefully we do it well. The Weekly Challenge provides us with an opportunity to do something germane to that life yet distinctly different; if we only do the things we already know how to do then we will only do the same things over and over. This is where the "challenge" aspect comes into play.

So we can consider The Weekly Challenge as providing a problem space outside of our comfort zone, as far out from that comfort as we wish to take things. From those reaches we can gather and learn things, pick and choose and bring what we want back into our lives. Personally, I think that's its greatest value of all.

---

Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due.

And that's why I'm here, to try and figure out how to do that.

Let's get on with it then, have a look and see what we find.

---

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-144/) or the summary [**recap**](/blog/recap-challenge-144/) of the challenge. But don't worry, the challenges themselves are repeated and presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please feel free to email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC144TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC144TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC144BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC144TASK1}

# Semiprime
*Submitted by: Mohammad S Anwar*

Write a script to generate all Semiprime number <= 100.

For more information about Semiprime, please checkout [the wikipedia page](https://en.wikipedia.org/wiki/Semiprime).


>In mathematics, a semiprime is a natural number that is the product of exactly two prime numbers. The two primes in the product may equal each other, so the semiprimes include the squares of prime numbers.


**Example**
```
    10 is Semiprime as 10 = 2 x 5
    15 is Semiprime as 15 = 3 x 5
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/abigail/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/adam-russell/perl/ch-1.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/alexander-pankoff/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/athanasius/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/colin-crain/perl/ch-1.pl),
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/cristian-heredia/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/james-smith/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/laurent-rosenfeld/perl/ch-1.pl),
[**Matthew Neleigh**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/mattneleigh/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/perlboy1967/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/paulo-custodio/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/pete-houston/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/peter-campbell-smith/perl/ch-1.pl),
[**Robert DiCicco**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/robert-dicicco/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/sgreen/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/ulrich-rieke/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/wlmb/perl/ch-1.pl)

Semiprimes are interesting numbers. Nearly prime, they only have two non-trivial divisors, themselves both prime. There's even a name for this: if we rank numbers by the number of prime factors they have, we create the order of [*almost primes*](https://en.wikipedia.org/wiki/Almost_prime). The semiprimes are hence the 2-almost primes.

Semiprimes can be easily constructed by multiplying two prime numbers. The fundamental theorem of arithmetic assures us that any number created this way cannot have any other divisors, and so there is exactly one way to construct them. The most common real-world example of the use of semiprimes is constructing keys for public-key cryptography, which relies on the difficulty of factoring extremely large numbers to find the two unique primes used to generate them.

There were 25 submissions for the first task this past week.

## A SELECTION of SUBMISSIONS
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/colin-crain/perl/ch-1.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/peter-campbell-smith/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/pete-houston/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/jaldhar-h-vyas/perl/ch-1.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/alexander-pankoff/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/athanasius/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/adam-russell/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/arne-sommer/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/sgreen/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/mohammad-anwar/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/paulo-custodio/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/wlmb/perl/ch-1.pl)

The solutions we saw generally followed the same basic structure, constructing the semiprime values individually by multiplying pairs of primes. As the semiprimes by definition have only two factors, both prime, and the smallest prime is 2, the list surveyed was generally the primes under 50. The complete list up to 100 was also sometimes used, as even with this expanded set the number of combinations to pair them all up is not particularly large.

Optimization just isn't essential to find the semiprimes under 100. We could reasonably look at every number in the range and factor it to check our candidates in a reasonable amount of time, which was another method we saw that works just fine.

[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/colin-crain/perl/ch-1.pl)

We'll start the demonstration with my own solution. Because, as we said, the numbers requested are small, we simply gather all primes at or below half the maximum, here 100, and take all the products. Each number will be by definition unique and we can discard those over 100.

I chose to deposit all the results in a hash and then sort the keys to produce the final list. Sorting normal array would have worked about as well, but as Perl hashes are so efficient the time difference should be minimal.

```perl
    my $max = 100;
    my %semis;

    my @primes = make_prime_list( $max/2 )->@*;     ## smallest factor is 2

    PRIME: for my $p ( @primes ) {
        for my $q ( grep { $_ >= $p } @primes ) {
            next PRIME if ($p * $q) > $max;
            $semis{ $p * $q }++;
        }
    }

    my @semiprimes = sort { $a <=> $b } keys %semis;
    say $_ for @semiprimes;

    sub make_prime_list ($max) {
    ## creates a list of all primes less than or equal to a given number
        my @primes = (2);
        CANDIDATE: for(  my $candidate = 3;  $candidate <= $max;  $candidate += 2  ) {
            my $sqrt_candidate = sqrt( $candidate );
            for(  my $test = 3; $test <= $sqrt_candidate; $test += 2  ) {
                next CANDIDATE if $candidate % $test == 0;
            }
            push @primes, $candidate;
        }
        return \@primes;
    }
```

[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/peter-campbell-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Illuminating the Ulam](https://pjcs-pwc.blogspot.com/2021/12/illuminating-ulam.html)

Peter whips up a quick sieve of Eratosthenes to produce his prime list.

He also structures his looping construct somewhat differently, iterating through every number for 2 to the square root of the maximum for his low factor, and from the low factor to the maximum divided by that value for the high. We still need to check the candidates against the prime list but if these tests pass we can then compute the product and make another semiprime in the requested range.

```perl
    $limit = 100;

    # find primes up to $limit / 2
    @is_prime = make_sieve(int($limit / 2));   # $j is prime if $primes[$j] == 1
    say qq[Semiprimes no greater than $limit are:];

    # the smaller prime cannot exceed sqrt($limit)
    for $j (2 .. int(sqrt($limit))) {
        next unless $is_prime[$j];

        # the larger one cannot exceed $limit / the smaller one
        for $k ($j .. int($limit / $j)) {
        	next unless $is_prime[$k];
        	@semiprimes[$j * $k] = 1;
        }
    }

    for $j (1 .. $limit) {
        print qq[$j ] if (defined $semiprimes[$j]);
    }

    sub make_sieve {
    # make sieve of Eratosthenes
        my ($arg, $j, $k, @sieve);

        # set all values provisionally to 1 (ie prime)
        $arg = $_[0];
        for $j (0 .. $arg) {
        	$sieve[$j] = 1;
        }

        # for each prime in turn, set its multiples to 0 (ie not prime)
        for $j (2 .. $arg) {
        	next unless $sieve[$j];   # $j is not prime
        	last if $j ** 2 > $arg;
        	for $k ($j .. $arg) {
        		last if $k * $j > $arg;
        		$sieve[$k * $j] = 0;
        	}
        }
        return @sieve;
    }
```

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/pete-houston/perl/ch-1.pl)

You know, with a module we could just make this little problem... go away, right?

The module in question is the number theory powerhouse `Math::Prime::Util`. And it's useful because the semiprimes turn up enough out in world to get represented amongst the myriad functions that tomb makes available no less than *nine* times.

As part of its functionality, the module provides an assortment of specialized iterator functions, combining a `for` loop with a common sequence. The semiprimes have their own function here, so the solution to the problem is a as simple as

```perl
    forsemiprimes { say } 100;
```

which is impressively compact. Pete does solve it a second way, in a more descriptive manner, using a different set of functions from the module as well: `primes(MAX)` and `forcomb {BLOCK} LIST, LENGTH`. The first supplies all primes up to the given maximum, the second iterates over all *LENGTH*-combinations of the supplied list ("for combinations").

`Math::Prime::Util` really is a blessing for all things number theory.

```perl
    use Math::Prime::Util '0.71', qw/primes forsemiprimes forcomb/;
    use Math::Combinatorics;

    my $MAX = 100;

    if ($ARGV[0]) {
        details ();
    } else {
        forsemiprimes { say } 100;
    }

    sub details {
        die "What you talkin bout, Willis?\n" unless $ARGV[0] eq '-v';

        my @primes = @{ primes ($MAX / 2) };
        my %res;

        # Squares
        for my $p (@primes) {
        	my $prod = $p * $p;
        	last if $prod > $MAX;
        	$res{$prod} = "is Semiprime as $prod = $p x $p";
        }

        # Non-squares
        forcomb {
        	my $prod = $primes[$_[0]] * $primes[$_[1]];
        	$res{$prod} =
        		"is Semiprime as $prod = $primes[$_[0]] x $primes[$_[1]]"
        		if $prod <= $MAX;
        } @primes, 2;

        # Output
        say "$_ $res{$_}" for sort { $a <=> $b } keys %res;
    }
```


[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/jaldhar-h-vyas/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/jaldhar-h-vyas/raku/ch-1.raku)

Jaldhar takes the strategy of looking at every value from 2 to 100. I mean, come on, its 98 numbers. Each is factored by filtering a list of candidate values for divisibility and primeness, using a hand-rolled `isPrime()` routine. From there we have two cases: if there is only one factor we check to see whether it is the square root, otherwise we look to see whether two prime factors can be multiplied to construct the target by themselves. The number 12, for example, has only two prime factors but is not semiprime, as we need the 2 twice to produce it: 2 x 2 x 3.

```perl
    sub combinations {
        my @list = @{$_[0]};
        my $length = $_[1];

        if ($length <= 1) {
            return map [$_], @list;
        }

        my @combos;

        for (my $i = 0; $i + $length <= scalar @list; $i++) {
            my $val  = $list[$i];
            my @rest = @list[$i + 1 .. $#list];
            for my $c (combinations(\@rest, $length - 1)) {
                push @combos, [$val, @{$c}] ;
            }
        }

        return @combos;
    }

    for my $n (2 .. 100) {
        my @factors = grep { $n % $_ == 0 && isPrime($_) } (2 .. $n / 2);
        if (scalar @factors == 1 && $factors[0] * $factors[0] == $n) {
            push @semiprimes, $n;
        } elsif(
            scalar
            (grep { $_ == $n }
            (map { $_->[0] * $_->[1] }
            combinations (\@factors, 2)))) {
                push @semiprimes, $n;
        }
    }
```

[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/alexander-pankoff/perl/ch-1.pl)

Alexander, it might be inferred, has a thing about transcription errors. Every time something is rewritten, you know, we provide a new vector to introduce errors. So instead of opening that potential pit of disaster why not just reuse the original code in-place? Not copying it, but directly importing it?

Either that or I'm over-thinking it and he just enjoys being clever. And who of us has not pursued that goal at one time or another? I mean, let's be real: look at where we are.

What Pankoff has done here is used `FindBin` to locate and import his script for challenge PWC 143-2, which contains a `find_divisors_pairs()` function that does what it says. Old code in hand, we're looking for results with two pairs: the prime divisors and the trivial divisors of 1 and the value itself. The pairs are ordered by their values low-high, so the trivial set will always be at index 0 with the first element 1. Consequently we only need to check the other pair to make sure the values there are both prime.

```perl
    use File::Spec;
    use FindBin;
    use List::Util qw(all);

    package Challenge143Task02 {
        require File::Spec->catfile( $FindBin::RealBin,
            qw'.. .. .. challenge-143 alexander-pankoff perl ch-2.pl' );
    }

    run() unless caller();

    sub run() {
        say join( " ", grep { is_semi_prime($_) } 1 .. 100 );
    }

    sub is_semi_prime($n) {
        my @pairs = Challenge143Task02::find_divisors_pairs($n);
        return @pairs == 2 && all { is_prime($_) } @{ $pairs[1] };
    }

    sub is_prime($n) {
        return $n > 1
          && Challenge143Task02::find_divisors_pairs($n) == 1;
    }
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/athanasius/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/athanasius/raku/ch-1.raku)

The monk always provides a concise breakdown of their methods in the script notes, explaining not just "what", but an analysis of "why" they have chosen to do what they do. This can be quite insightful for the rest of us looking at the various ways the members approached the problem, so here you go:

 1. Primes are generated via a Sieve of Eratosthenes. But how many primes are
    needed? Consider: each semiprime is the product of 2 primes, and the small-
    est prime is 2. If a given prime p is such that 2p is greater than 100,
    then 3p will also be greater than 100, as will 5p, and so on, so p cannot
    contribute to the semiprimes less than or equal to 100. And the same logic
    holds for any prime number greater than p. So the primes needed are 2, 3,
    5, ..., q, where q is the largest prime for which 2q is less than or equal
    to 100.

 2. For each prime p, semiprimes are generated by multiplying p by each of the
    primes q between 2 and p, inclusive. But as soon as the product is greater
    than 100, the result is discarded and the remaining values of q can also be
    skipped, since they will all generate semiprimes greater than 100.

 3. The resulting list is guaranteed to include all semiprimes less than or
    equal to 100, and only those. But in some cases semiprimes are generated
    out of order. For example, 5 x 3 = 15 is generated before 7 x 2 = 14. It is
    therefore necessary to sort the semiprimes (in ascending numerical order)
    before they are displayed.

```perl
    my $args = scalar @ARGV;
       $args == 0 or error( "Expected 0 command line arguments, found $args" );

    print "The semiprimes <= $MAX are:\n\n";

    my $primes = find_primes();
    my @semiprimes;

    L_OUTER:
    for my $i (0 .. $#$primes)
    {
        my $prime1 = $primes->[ $i ];

        for my $j (0 .. $i)
        {
            my $prime2  = $primes->[ $j ];
            my $product = $prime1 * $prime2;

            next L_OUTER if $product > $MAX;

            push @semiprimes, $product;
        }
    }

    @semiprimes = sort { $a <=> $b } @semiprimes;
    printf "%s\n", join ', ', @semiprimes;
}

sub find_primes
{
    use enum qw( NOT_PRIME PRIME );

    my $max   = int( $MAX / 2 );
    my @sieve = ((NOT_PRIME) x 2, (PRIME) x ($max - 1));
    my @primes;

    for my $i (2 .. $max)
    {
        if ($sieve[ $i ] == PRIME)
        {
            push @primes, $i;

            for (my $j = 2 * $i; $j <= $max; $j += $i)
            {
                $sieve[ $j ] = NOT_PRIME;
            }
        }
    }
    return \@primes;
}
```

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/adam-russell/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[A Stocking Full of Numbers: Semiprimes and the Ulam Sequence - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2021/12/26/perl)

The list of primes less than 50, or 100, or whatever is not exactly a secret. It's also not likely to change anytime soon, to say the least. So actually generating them to work with does seem a little... unnecessary. I suppose we could just hard-wire them into our scripts as required, but that seems so boring. What to do?

Adam's solution to this dilemma is to let someone else do the work and ask them: in this case the University of Tennessee at Martin. I don't know the story, if there is any, as to why this is the physical location on the other side of the chosen URL, but there we have it. All we need is `LWP::UserAgent`, set it to `http://primes.utm.edu/lists/small/100000.txt` and if [Conservative Prime Minister Robert Gascoyne-Cecil, 3rd Marquess of Salisbury](https://en.wikipedia.org/wiki/Bob%27s_your_uncle) is related to you, you just might get a job.

This technique amuses me, because it avoids a piece of repetitive resource expenditure and yet still provides a demonstration. It's refreshing to find different and fun, especially on these pages. It has dubious practicality in this specific instance, but in general is a valuable approach to consider.

Armed with a list of primes, Adam iterates over the possible semiprime values from 1 to 100 to see whether they qualify. The individual candidates are factored and if there are only only one non-trivial pair (that are also prime), then we've found another one.

```perl
    use LWP::UserAgent;
    use constant N => 100;
    use constant PRIME_URL => "http://primes.utm.edu/lists/small/100000.txt";

    sub get_primes{
        my @primes;
        my $ua = new LWP::UserAgent(
            ssl_opts => {verify_hostname => 0}
        );
        my $response = $ua->get(PRIME_URL);
        my @lines = split(/\n/,$response->decoded_content);
        foreach my $line (@lines){
            my @p = split(/\s+/, $line);
            unless(@p < 10){
                push @primes, @p[1..(@p - 1)];
            }
        }
        return @primes;
    }
```

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/arne-sommer/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/arne-sommer/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Primarily Ulam with Raku (and perl)](https://raku-musings.com/primarily-ulam.html)

Remember `Math::Prime::Util`? Arne borrows the quite-convenient `is_prime()` function from  this to filter a range from 1 to 50 for primes. Once this is done it's only a matter of using two nested lists to find all products and tossing out those more than 100. The validated products are collected into a list of semiprimes, sorted, and joined for output.

You know, in the specification there is no mention of a sorted list at all, and so the last `sort` step is not actually required. Not doing it would make the output completely annoying to debug, but would be both acceptable and optimized, if you were to say hash the results or something.

Occasionally we have submissions that stick quite literally to the given description, warts and all, but no one today saw fit to exclude this step.

```perl
    use Math::Prime::Util 'is_prime';
    use List::Util 'uniq';

    my $limit  = 100;
    my @primes = grep { is_prime($_) } (1 .. $limit / 2);

    my @result;

    for my $a (@primes)
    {
      for my $b (@primes)
      {
        my $product = $a * $b;
        push(@result, $product) if $product <= $limit;
      }
    }

    say join(", ", uniq sort{ $a <=> $b } @result);
```

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/sgreen/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/sgreen/python/ch-1.py)

Over-optimization is defined as as a waste of time and resources tuning up a process to little or no practical effect on the final result. On the other hand this is no excuse not to do things efficiently the first time around, and some algorithms will simply do less work than others. Some operations, though, such as the square root, are inherently expensive, and there often is a trade-off between performing a simple operation repeatedly or a complex function fewer times.

Here Simon compiles a prime number list by looking first at a limited range of possibly relevant values from 2 to half the maximum. Whatever primes we get will be at minimum multiplied by 2, so there's  no point in looking past that point. Once we have a candidate we need to check all values for divisibility up to half the candidate's value, using the same reasoning that if a number proves to be a factor it will need to be multiplied by at minimum of 2.

```perl
    sub get_primes {
        my @primes = ();

        # Return a list of all primes between 2 and 50 (being 100 ÷ 2)
      I: foreach my $i ( 2 .. 50 ) {
            foreach my $d ( 2 .. $i / 2 ) {
                # If the number is divisable by something other than one and
                #  itself, it's not a prime
                if ( $i % $d == 0 ) {
                    next I;
                }
            }

            # It's a prime
            push @primes, $i;
        }

        return @primes;
    }

    sub main {
        my @primes     = get_primes;
        my @semiprimes = ();

      I: foreach my $i (@primes) {
            foreach my $j (@primes) {
                my $x = $i * $j;

                next I if $x > 100;

                if ( none { $x == $_ } @semiprimes ) {
                    push @semiprimes, $x;
                }
            }
        }

        @semiprimes = sort { $a <=> $b } @semiprimes;
        say join ', ', @semiprimes;
    }
```





[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/mohammad-anwar/perl/ch-1.pl)

It may not be immediately obvious from the name `Math::Prime::Util` that this library would be a collection of routines and constants expressly selected for exploring Number Theory. However it is, as demonstrated by its handy and much more directly-named alias, `ntheory`.

Previously we mentioned that `Math::Prime::Util` has nine routines designed to manipulate the semiprimes. One of these nine, one might reasonably conclude, is a function to directly produce them. There is, of course: the function `semi_primes()`, when given lower and upper inclusive bounds will produce an array of all members within that range. If a lower bound is omitted it starts at the first semiprime and works upwards from there.

The solution offered is to call the function.

```perl
    use ntheory qw(semi_primes);
    use Test::More;
    use Test::Deep;


    # Sample copied from https://oeis.org/A001358
    my $exp = [
        4,  6,  9,  10, 14,
        15, 21, 22, 25, 26,
        33, 34, 35, 38, 39,
        46, 49, 51, 55, 57,
        58, 62, 65, 69, 74,
        77, 82, 85, 86, 87,
        91, 93, 94, 95,
    ];

    is_deeply(semi_primes(100), $exp, 'Example');
```

[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/paulo-custodio/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/paulo-custodio/python/ch-1.py)

So sometime knowing the right tool is all it takes. Here Paulo gives us a short script that calls the function.

```perl
    use Modern::Perl;
    use ntheory 'semi_primes';

    use constant MAX_NUM => 100;

    my $n = shift||MAX_NUM;
    say join(", ", @{semi_primes($n)});
```


[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/wlmb/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 144 – W. Luis Mochán](https://wlmb.github.io/2021/12/22/PWC144/)

Finally to add a little variety Luis preforms the same algorithm of first gathering prime numbers and then preparing a matchup of product pairings using the Perl Data Language, PDL.

In the three top lines we construct a [sieve of Erastothenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) by constructing a vector primitive of all 1s, setting the 0 and 1 positions to 0, and then setting the other multiples to 0 as well, from 2 to the square root of the maximum. The shorthand index notation made available by `PDL::NiceSlice` is (*start*:*end*:*step*), so for instance for the 5s we start at 5<sup>2</sup>, proceed to index -1, the end, and skip by 5. At each step we can start later and later as, again using the 5s for example, 5 × 4 will have been already covered as 4 × 5, and similarly for 2 × 5 and 3 × 5.

Once we have our sieve we extract the x-index values for the remaining 1s in the vector to get our list of primes. We have modeled the sieve quite literally.

The next line pairs up each prime with each other in a set of tuples. These are then reduced using the `prodover` function to a list of product values, the semiprimes. SWe need to select those less than 100 and then sort the result before we report it.

```perl
    use PDL;
    use PDL::NiceSlice;
    my $N = shift//100;                               # get upper limit from command line
    my $sieve = ones($N+1);                           # Erastothenes sieve
    $sieve(0:1) .= 0;                                 # 0 and 1 are not primes
    $sieve($_**2:-1:$_) .= 0 for(2..sqrt($N));        # remove non-primes
    my $primes = $sieve->xvals->where($sieve);
    my $pairs = cat($primes, $primes(*))->mv(-1,0);   # pairs of primes
    my $sp = $pairs->prodover;                        # semiprimes
    my ($p1, $p2, $semiprimes) = where($pairs((0)), $pairs((1)), $sp,
                   ($sp->xvals >= $sp->yvals)&($sp<100));
    my $indx = $semiprimes->qsorti;                   # order results
    my ($p1_o,$p2_o,$semiprimes_o) = map {$_->($indx)} ($p1, $p2, $semiprimes);
    say "The semiprimes not greater than $N are";
    say $semiprimes_o(($_)), " = ", $p1_o(($_)), " * ", $p2_o(($_))
        foreach 0..$indx->nelem-1;
```

## Blogs and Additional Submissions in Guest Languages for Task 1:


[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/abigail/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Awk](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/abigail/awk/ch-1.awk), [Bash](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/abigail/bash/ch-1.sh), [Basic](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/abigail/basic/ch-1.bas), [Bc](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/abigail/bc/ch-1.bc), [Befunge-93](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/abigail/befunge-93/ch-1.bf93), [C](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/abigail/c/ch-1.c), [Cobol](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/abigail/cobol/ch-1.cb), [Csh](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/abigail/csh/ch-1.csh), [Erlang](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/abigail/erlang/ch-1.erl), [Forth](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/abigail/forth/ch-1.fs), [Fortran](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/abigail/fortran/ch-1.f90), [Go](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/abigail/go/ch-1.go), [Java](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/abigail/java/ch-1.java), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/abigail/lua/ch-1.lua), [M4](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/abigail/m4/ch-1.m4), [Mmix](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/abigail/mmix/ch-1.mms), [Node](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/abigail/node/ch-1.js), [Ocaml](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/abigail/ocaml/ch-1.ml), [Pascal](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/abigail/pascal/ch-1.p), [Php](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/abigail/php/ch-1.php), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/abigail/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/abigail/python/ch-1.py), [R](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/abigail/r/ch-1.r), [Rexx](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/abigail/rexx/ch-1.rexx), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/abigail/ruby/ch-1.rb), [Scheme](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/abigail/scheme/ch-1.scm), [Sed](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/abigail/sed/ch-1.sed), [Sql](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/abigail/sql/ch-1.sql), [Tcl](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/abigail/tcl/ch-1.tcl)


[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/cristian-heredia/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/cristian-heredia/python/ch-1.py)


[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/dave-jacoby/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Almost Prime and In Sequence: The Weekly Challenge #144 | Committed to Memory](https://jacoby.github.io/2021/12/20/almost-prime-and-in-sequence-the-weekly-challenge-144.html)


[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/polettix/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/polettix/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC144 - Semiprime - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/12/22/pwc144-semiprime/)



[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/james-smith/perl/ch-1.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #144](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-144/james-smith#readme)


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/laurent-rosenfeld/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/laurent-rosenfeld/raku/ch-1.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 144: Semiprimes and Ulam Sequence | laurent_r](http://blogs.perl.org/users/laurent_r/2021/12/perl-weekly-challenge-144-semiprimes-and-ulam-sequence.html)


[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/roger-bell-west/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/roger-bell-west/kotlin/ch-1.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/roger-bell-west/lua/ch-1.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/roger-bell-west/postscript/ch-1.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/roger-bell-west/python/ch-1.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/roger-bell-west/raku/ch-1.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/roger-bell-west/ruby/ch-1.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/roger-bell-west/rust/ch-1.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 144: Semiprime Ulam](https://blog.firedrake.org/archive/2021/12/The_Weekly_Challenge_144__Semiprime_Ulam.html)


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/ulrich-rieke/perl/ch-1.pl)

&nbsp;&nbsp;**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/ulrich-rieke/haskell/ch-1.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/ulrich-rieke/raku/ch-1.raku)


------------------------------------------





---

# TASK 2 {#PWC144TASK2}

# Ulam Sequence
*Submitted by: Mohammad S Anwar*

You are given two positive numbers, $u and $v.

Write a script to generate Ulam Sequence having at least 10 Ulam numbers where $u and $v are the first 2 Ulam numbers.

For more information about Ulam Sequence, please checkout the website.

The standard Ulam sequence (the (1, 2)-Ulam sequence) starts with U1 = 1 and U2 = 2. Then for n > 2, U(n) is defined to be the smallest integer that is the sum of two distinct earlier terms in exactly one way and larger than all earlier terms.

**Example 1**

```
    Input: $u = 1, $v = 2
    Output: 1, 2, 3, 4, 6, 8, 11, 13, 16, 18
```

**Example 2**

```
    Input: $u = 2, $v = 3
    Output: 2, 3, 5, 7, 8, 9, 13, 14, 18, 19

```

**Example 3**

```
    Input: $u = 2, $v = 5
    Output: 2, 5, 7, 9, 11, 12, 13, 15, 19, 23

```



## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/abigail/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/adam-russell/perl/ch-2.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/alexander-pankoff/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/athanasius/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/james-smith/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/laurent-rosenfeld/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/perlboy1967/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/paulo-custodio/perl/ch-2.pl),
[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/peter-campbell-smith/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/sgreen/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/ulrich-rieke/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/wlmb/perl/ch-2.pl)

Ulam sequences are defined by a recurrence relation, in a similar manner to the much more famous Fibonacci Sequence and its more generalized variants. Each element of the sequence is required to be the sum of two previously constructed members, however in this case there are two important caveats:

1. The two summed previous elements in the recurrence relation can be any two unique values from the sequence, and
2. The two summed elements must be the only way to construct the new value from any unique pair of previous values.

The unique construction specification is the more complicated one to validate. Unlike the Fibonacci sequence, Ulam numbers are much more irregular in the specific combinations that form each value. The sequences are infinite but apparently aperiodic.

There were 19 submissions for the second task this past week.

## A SELECTION of SUBMISSIONS
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/laurent-rosenfeld/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/paulo-custodio/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/polettix/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/roger-bell-west/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/perlboy1967/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/james-smith/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/e-choroba/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/duncan-c-white/perl/ch-2.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/ulrich-rieke/perl/ch-2.pl),
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/abigail/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/wlmb/perl/ch-2.pl)

Because of the generalized irregularity and aperiodicity of the Ulam sequences, predicting the next value in the sequence is not possible. We can't, for instance, simply add the lowest value to the highest because we cannot be assured that the number formed can only be created in this one unique way. This means we ultimately need to try all combinations of pairs from the sequence and select the smallest *unique* sum created.

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/laurent-rosenfeld/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/laurent-rosenfeld/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 144: Semiprimes and Ulam Sequence | laurent_r](http://blogs.perl.org/users/laurent_r/2021/12/perl-weekly-challenge-144-semiprimes-and-ulam-sequence.html)

The next Ulam number in a sequence is defined as "smallest integer that is the sum of two distinct earlier terms in exactly one way and larger than all earlier terms". It follows from this that if we sum all combinations of previously generated values to create a new sequence, we can select the smallest unique value of this new sequence that's larger than the last value added.

Careful readers will notice that those two sentences are nearly identical. In other words, to find the next number we can always just follow the definition.

For each number he adds, Laurent sums all combinations of values, discarding those smaller than the current last value in the sequence. The remaining list is sorted and returned. Then, working upwards through this list, we look for the first value that is not repeated. A clever lookahead/lookbehind method is used to skip duplicated values.

```perl
    sub combine {
        my @seq = @_;
        my $min = $seq[-1];
        my @comb_sums;
        for my $i (0..$#seq) {
            for my $j (0..$i-1) {
                my $sum =  $seq[$i] + $seq[$j];
                next if $sum <= $min;
                push @comb_sums, $sum;
            }
        }
        return sort { $a <=> $b } @comb_sums;
    }

    sub ulam {
        my @sequence = @{$_[0]};
        for (1..10) {
            my @sums = combine @sequence;
            my $last = 0;
            for my $i (0..$#sums) {
                next if $sums[$i] == $last;
                push @sequence, $sums[$i] and last if $i >= $#sums;
                $last = $sums[$i] and next if $sums[$i] == $sums[$i+1];
                push @sequence, $sums[$i] and last;
            }
        }
        return @sequence;
    }
```

[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/paulo-custodio/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/paulo-custodio/python/ch-2.py)

Paulo follows a similar path, incorporating `Math::Combinatorics` to provide a combinations function for his method. The `next_ulam()` function provides the heavy lifting, with another, `ulam_iter()`, serving as a wrapper.

Combinations are placed into a hash keyed on their sum as elements in an array; the keys are then sorted and iterated through, looking for the first key with only one mapped combination that's larger than the last member of the sequence.

```perl
    use Math::Combinatorics;
    use List::Util 'sum';

    sub next_ulam {
        my(@terms) = @_;

        # get all combinations of 2 items from previous terms
        my @combin = combine(2, @terms);

        # compute sum for all combinations
        my %sums;
        for (@combin) {
            my @items = @$_;
            my $n = sum(@items);
            $sums{$n} ||= [];
            push @{$sums{$n}}, \@items;
        }

        # choose smallest sum that has only one possible combination and is larger
        # than previous ones
        for my $n (sort {$a<=>$b} keys %sums) {
            next unless $n > $terms[-1];        # item not larger than previous
            my @items = @{$sums{$n}};
            next if @items>1;                   # more than one sum
            return $n;
        }

        die "next item not foundm terms=@terms";
    }
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/polettix/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/polettix/raku/ch-2.raku)


&nbsp;&nbsp;**blog writeup:**
[PWC144 - Semiprime - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/12/22/pwc144-semiprime/)

&nbsp;&nbsp;**blog writeup:**
[PWC144 - Ulam Sequence - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/12/23/pwc144-ulam-sequence/)

Flavio, true to form, creates an iterator function that returns a closure around the ulam list under construction; calling the iterator in turn returns the next value in the list. He seems quite fond of iterators. I don't blame him.

At each invocation we sum pairs, compiling a hash of sums for each value. Note the second value in the pair counts down from the end, and only sums greater than the last ulam element are added to the hash. Then we pluck the smallest key from this hash that is only visited once and add it to the list before returning the next index on the list; the position counter is also kept within the coderef.

```perl
    sub ulam_iterator ($v, $w) {
       my @items = ($v, $w);
       my $n = 0;

       return sub {
          ITEM:
          while ($n > $#items) {
             my %count;
             for my $i (0 .. $#items - 1) {
                for my $j (reverse($i + 1 .. $#items)) {
                   my $sum = $items[$i] + $items[$j];
                   last if $sum <= $items[-1];
                   $count{$sum}++;
                }
             }
             for my $new (sort { $a <=> $b } keys %count) {
                next unless $count{$new} == 1;
                push @items, $new;
                next ITEM;
             }
          }
          return $items[$n++];
       };
    }

    my @seeds = @ARGV == 2 ? @ARGV : (1, 2);
    my $it = ulam_iterator(@seeds);
    say join ', ', map { $it->() } 1 .. 10;
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/roger-bell-west/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Kotlin](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/roger-bell-west/kotlin/ch-2.kt), [Lua](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/roger-bell-west/lua/ch-2.lua), [Postscript](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/roger-bell-west/postscript/ch-2.ps), [Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/roger-bell-west/python/ch-2.py), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/roger-bell-west/raku/ch-2.p6), [Ruby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/roger-bell-west/ruby/ch-2.rb), [Rust](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/roger-bell-west/rust/ch-2.rs)


&nbsp;&nbsp;**blog writeup:**
[RogerBW's Blog: The Weekly Challenge 144: Semiprime Ulam](https://blog.firedrake.org/archive/2021/12/The_Weekly_Challenge_144__Semiprime_Ulam.html)

Roger is known for small, fast, tightly-crafted loop structures. Here he constructs an array he refers to as a sieve. As each number is added the sieve is extended with 0s until the index reaches the sum of the last two Ulam numbers created. Then the last Ulam number created is added successively to each of the other numbers in the list and the value at the corresponding index of the sieve is incremented. After this step we start looking at the index following the last number recorded as the next Ulam candidate, searching for ne next index with a value of 1. This is easily done as the index on the sieve is simply the value offset by 1.

```perl
    sub ulam {
      my ($u,$v,$count)=@_;
      my @ulams=($u,$v);
      my @sieve;
      my $uc=$v;
      while (scalar @ulams < $count) {
        my $ss=$uc+$ulams[-2];
        push @sieve,(0) x ($ss-scalar @sieve);
        foreach my $i (0..$#ulams-1) {
          $sieve[$uc + $ulams[$i] - 1]++;
        }
        foreach my $i ($uc..$#sieve) {
          if ($sieve[$i]==1) {
            $uc=$i+1;
            push @ulams,$uc;
            last;
          }
        }
      }
      return \@ulams;
    }
```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/perlboy1967/perl/ch-2.pl)

Niels imports the `combinations` function from `Algorithm::Combinatorics` to pair up members of the list at each new value. From these a hash of the sums as keys is compiled, with values incremented as they occur, but only if that sum is greater than the last Ulam recorded. Finally another function is imported, `firstidx`, which returns the *index* of the first occurence of a value of 1 in a sorted array of the hash keys.

```perl
    use Algorithm::Combinatorics qw(combinations);
    use List::Util qw(sum);
    use List::MoreUtils qw(firstidx);

    sub getUlamSequence($$$);

    my ($U,$V,$N) = (2,5,10);
    ($U,$V,$N) = @ARGV if (scalar(@ARGV) == 3);

    printf 'Input: $u = %d, $v = %d, $n = %d'."\n", $U,$V,$N;
    printf "Output: %s\n", join(',',getUlamSequence($U,$V,$N));

    sub getUlamSequence($$$) {
      my ($u,$v,$n) = @_;

      my @s = ($u,$v);
      while (scalar(@s) < $n) {
        my %v;
        my $c = combinations(\@s, 2);
        while (my $ar = $c->next) {
          my $sum = sum @$ar;
          $v{$sum}++ if ($sum > $s[-1]);
        }
        my @v = sort{$a<=>$b} keys %v;
        push(@s,$v[firstidx{$v{$_} == 1} @v]) ;
      }

      return @s;
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/james-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge #144](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-144/james-smith#readme)

James delivers us solutions crafted several different ways. I find the first routine provided, `ulam()`, to be somewhat evocative of being dragged naked through a blackberry thicket. The words "spiky" and "painful" come to mind.

Fortunately he does seem to have some lingering sense of compassion for the rest of us, as he has kindly delivered another version of his algorithm rebranded as `ulam_expanded()`. I think we'll stick with that one today.

The technique is again to compose a frequency hash of occurrences of the various sums arrived at by pairing up the values of the sequence. James employs some very interesting optimizations to avoid creating more sums that required to locate the next unique sum.

The expanded version of the routine, by the way, does run about 5% slower than the barbed wire. So, you know, if every speck of speed counts, well you know who to call.

```perl
    sub ulam {
      my%h=map{$_,$_}my@s=($_[0],my$n=$_[1]);
      for(my$c=0;@s<$_[2];++$n,$c=0){
        ($_>=$n/2)?(last):($h{$n-$_})&&$c++&&(last) for@s;
        push@s,$h{$n}=$n if$c==1;
      }
      @s;
    }

    sub ulam_expanded {
      my ($m, $n, $l) = @_;
      my @seq = ($m,$n);
      my %seq_hash = ( $m => 1, $n => 1 );
      while( @seq < $l ) {
        $n++;
        my $count = 0;
        foreach ( @seq ) {
          last if $_ >= $n/2;
          if( exists $seq_hash{ $n - $_ } ) {
            $count++;
            last if $count>1;
          }
        }
        if( $count == 1 ) {
          push @seq, $n;
          $seq_hash{ $n } = 1;
        }
      }
      return @seq;
    }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/e-choroba/perl/ch-2.pl)

Choroba has sent us a nice little package. Unwrapping it we find a `Moo` object, `Ulam::Sequence`. It's instantiated with the two values *u* and *v*, and contains a lazily constructed sequence within it. In addition to the automatically created getters for `u`, `v` and `sequence`, the object has one additional public method, `extend()`.

Calling `extend($n)` tells the object to make sure it has *$n* elements; a subsequent call to the sequence getter will then produce the array.

To create new sequence values, he searches the list of previous values in a unique way.
Incrementing from the last Ulam number created, he tests each new candidate by first creating a frequency hash set to 1 for every value in the sequence. Then, he traverses the sequence and increments the numbers that *would be needed to be added* to obtain the candidate. If the the number was already in the hash its  value will now be 2, and there will be 2 such values in the hash for each pair that can be assembled. So if there are 2 and only 2 values then we have a winner.

The candidates are incremented until we find the next valid candidate.

```perl
    {   package Ulam::Sequence;
        use Moo;

        has u        => (is => 'ro',   requried => 1);
        has v        => (is => 'ro',   required => 1);
        has sequence => (is => 'lazy', builder  => 1);

        sub extend {
            my ($self, $l) = @_;
            $l //= 1 + @{ $self->sequence };

            my $n = $self->sequence->[-1];
            while ($l != @{ $self->sequence }) {
                while (++$n) {

                    my %seen;
                    @seen{ @{ $self->sequence } } = (1) x @{ $self->sequence };

                    for my $s (@{ $self->sequence }) {
                        ++$seen{$n - $s} unless $n - $s == $s;
                    }
                    my $twice = grep 2 == $_, values %seen;
                    if ($twice && $twice < 3) {
                        push @{ $self->sequence }, $n;
                        last
                    }
                }
            }
        }

        sub _build_sequence {
            my ($self) = @_;
            return [ $self->u, $self->v ]
        }
    }
```

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/duncan-c-white/perl/ch-2.pl)

Duncan imports `Function::Parameters` to allow him to write a function (a subroutine with  a signature), that when given a list of Ulam numbers computes the next term. The method used computes a frequency hash of summed values over all pairs from the existing sequence, then filters the sorted list of keys for values that equal 1. Finally we select the first element from the sorted list.

```perl
    use Function::Parameters;

    fun next_ulam( @terms )
    {
        my $min = 1+$terms[-1];		# next term must be >= $min

        my %freq;			# frequency hash of all pairsums

        # foreach distinct pair of terms ($t1,$t2)..
        for( my $i=0; $i<@terms-1; $i++ )
        {
        	my $t1 = $terms[$i];
        	for( my $j=$i+1; $j<@terms; $j++ )
        	{
        		my $t2 = $terms[$j];
        		my $sum = $t1 + $t2;

        		$freq{$sum}++ if $sum >= $min;
        	}
        }
        say "debug: ", Dumper \%freq if $debug;

        # select values with frequency 1
        my @f1 = grep { $freq{$_}==1 } keys %freq;

        # sort values numerically
        @f1 = sort { $a <=> $b } @f1;

        # return first (smallest) of the sorted values
        return $f1[0];
    }
```

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/ulrich-rieke/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Haskell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/ulrich-rieke/haskell/ch-2.hs), [Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/ulrich-rieke/raku/ch-2.raku)

Creating a set of unordered pairings between every previously calculated Ulam number and every other to compute candidates for the next element in a given Ulam sequence is a very computationally-intensive step, and so it makes sense to perform this operation in a dedicated compiled library routine. Because matching choose-2 combinations like this is a standard action in combinatorics there are several options for modules available
to help us. Ulrich brings us the excellent `Algorithm::Combinatorics` for the task.

As each new number is to added to the sequence, we construct a list of sums for each combination of previous values, using the module's `combinations` iterator. The list is sorted, then starting at the first element we search for a candidate that is both greater than the last Ulam recorded that also only occurs once. A `count()` routine is provided to scan the array and count the number of times a given value occurs.

```perl
    while ( scalar( @ulams ) < 10 ) {
        if ( scalar( @ulams ) == 2 ) {
            push @ulams, $ulams[0] + $ulams[ 1 ] ;
        }
        else {
            my @sums ;
            my $iter = combinations( \@ulams, 2 ) ;
            while ( my $c = $iter->next ) {
                push @sums , sum( @$c ) ;
            }
            my @sorted = sort { $a <=> $b } @sums ;
            my $elements = scalar( @sorted ) ;
            my $i = 0 ;
            while ( $i < $elements ) {
                if ( $sorted[ $i ] > $ulams[ -1 ]
                     && count( \@sorted ,$sorted[ $i ] ) == 1 ) {
                    push @ulams, $sorted[ $i ] ;
                    last ;
                }
                else {
                    $i++ ;
                }
            }
        }
    }
    say join( ',' , @ulams ) ;
```

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/abigail/perl/ch-2.pl)

After noting that efficiency is not our top priority in constructing a list of only 10 numbers, Abigail reduces the process to a simple, short repeating algorithm. Two structures are employed: a list of Ulam numbers already created, and a frequency hash composed from sums of previously determined values of the list.

The hash is kept synchronized as each new element is added to the Ulam list. To search for the next element, the smallest key in the hash is selected. If its value is greater than 1 it is deleted from the hash and the process is restarted. The first valid key found is added to the output array.

The next line is a bit mysterious until you get the precedence order correct. The equivalence test is evaluated before the logical OR, `||`, so if the topic is the `$next` value we just added this tests true and nothing is done. Otherwise we sum the topic and the new element added and increment that hash key by 1. This keep the hash updated with a new set of possible combinations between the new element and each previously created Ulam number.

I really admire the parsimony of action taken here. It does exactly the combinatorial work  required, once, without repeated effort.

```perl
    use List::Util qw [min];

    sub ulam ($u1, $u2) {
        my @seen = ($u1,  $u2);
        my %sums = ($u1 + $u2, 1);

        my $next;
        while (%sums) {
            $next = min keys %sums;
            next if delete $sums {$next} > 1;
            push   @seen => $next;
            return @seen if @seen >= 10;

            $_ == $next || $sums {$_ + $next} ++ foreach @seen;
        }
    }
```





[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/wlmb/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Perl Weekly Challenge 144 – W. Luis Mochán](https://wlmb.github.io/2021/12/22/PWC144/)

Finally we will conclude with Luis and another solution drawing on the awesome capabilities of the Perl Data Language. Although PDL data structures are designed for multidimensional ease, a single-dimensional space is a vector, which is an array, and an array is a list that knows things about itself. And a sequence is an ordered list. So what are we waiting for?

After establishing our base vector, we have a looping construct to add each new value, which works using the same basic principles we've seen before: as each number is to be added we have a list of previously summed candidates to be the next value. This list is sorted and duplicated values removed; these candidates can be constructed in more than one way. The list is pruned of values less than the last Ulam added, and the next Ulam is the first element in this sorted list.

The process is repeated until we have enough numbers.

The steps are commented: for a new value we first construct a sorted copy of our list vector, using the `qsort` operation. Then a clever list comprehension using `where` is employed to filter out duplicate values from the previous iteration's summing. At this point we have the next number, but still need to prime the list for the next go-around. The important thing to understand is that the PDL data structures are multidimensional, so when we `append( $ulam + $next )` we are adding a list to a scalar, which adds the scalar `$next` to each item in the `$ulam` vector. It's all very list-wise thinking, and can quite powerfully transform data with minimal effort.


```perl
    use PDL;
    use PDL::NiceSlice;
    say( "Usage: ./ch-2.pl u v [N]\nto find the first N ( default 10 ) terms".
        " of the Ulam sequence u,v..." ),exit unless @ARGV == 2 || @ARGV == 3;
    say( "The given numbers should not be equal" ), exit unless $ARGV[0] != $ARGV[1];
    my $ulam = pdl[$ARGV[0]];                   # initialize sequence
    my $candidates = pdl[$ARGV[1]];             # candidate list
    my $N = $ARGV[2] // 10;
    foreach( 2..$N ){
        my $sl = $candidates->qsort;            # sort list
        # remove duplicates
        $sl = $sl->where( ($sl != $sl->rotate( 1 )) & ($sl != $sl->rotate( -1 )) ) if $sl->nelem>1;
        my $next = $sl->( (0) );                # Next Ulam number
        $candidates = $candidates->append( $ulam + $next );       # Update candidate list
        $candidates = $candidates->where( $candidates > $next );  # remove those too small
        $ulam = $ulam->append( [$next] );       # update list of ulam numbers
     }
    say "Input: u = $ARGV[0], v = $ARGV[1]", defined $ARGV[2] ? ", N = $N" : "";
    say "Output: $ulam";
```

## Blogs and Additional Submissions in Guest Languages for Task 2:


[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/adam-russell/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[A Stocking Full of Numbers: Semiprimes and the Ulam Sequence - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2021/12/26/perl)


[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/athanasius/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/athanasius/raku/ch-2.raku)

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/dave-jacoby/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Almost Prime and In Sequence: The Weekly Challenge #144 | Committed to Memory](https://jacoby.github.io/2021/12/20/almost-prime-and-in-sequence-the-weekly-challenge-144.html)


[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/jaldhar-h-vyas/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Raku](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/jaldhar-h-vyas/raku/ch-2.raku)


[**Peter Campbell Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/peter-campbell-smith/perl/ch-2.pl)


&nbsp;&nbsp;**blog writeup:**
[Illuminating the Ulam](https://pjcs-pwc.blogspot.com/2021/12/illuminating-ulam.html)


[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/sgreen/perl/ch-2.pl)

&nbsp;&nbsp;**additional languages:**
[Python](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-144/sgreen/python/ch-2.py)













---

# BLOGS {#PWC144BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, by some miracle I somehow continue to maintain my bearings.**

**Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your Unquenchable *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC136BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *FOLLOW* these *BLOG* *LINKS*:

**( ...*don't think, trust your training, you're in the zone, just do it ...* )**


**Adam Russell**

 * [A Stocking Full of Numbers: Semiprimes and the Ulam Sequence - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2021/12/26/perl) ( *Perl* )

**Arne Sommer**

 * [Primarily Ulam with Raku (and perl)](https://raku-musings.com/primarily-ulam.html) ( *Perl & Raku* )

 **Dave Jacoby**

 * [Almost Prime and In Sequence: The Weekly Challenge #144 | Committed to Memory](https://jacoby.github.io/2021/12/20/almost-prime-and-in-sequence-the-weekly-challenge-144.html) ( *Perl* )

**Flavio Poletti**

 * [PWC144 - Semiprime - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/12/22/pwc144-semiprime/) ( *Perl & Raku* )
 * [PWC144 - Ulam Sequence - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/12/23/pwc144-ulam-sequence/) ( *Perl & Raku* )


**James Smith**

 * [Perl Weekly Challenge #144](https://github.com/drbaggy/perlweeklychallenge-club/tree/master/challenge-144/james-smith#readme) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 144: Semiprimes and Ulam Sequence | laurent_r](http://blogs.perl.org/users/laurent_r/2021/12/perl-weekly-challenge-144-semiprimes-and-ulam-sequence.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 144: headache! – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2021/12/20/PerlWeeklyChallenge144.html#task1) ( *Raku* )

**Mark Senn**

 * [Semiprimes](https://engineering.purdue.edu/~mark/twc-144-1.pdf) ( *Raku* )
 * [Ulam Sequence](https://engineering.purdue.edu/~mark/twc-144-2.pdf) ( *Raku* )

**Peter Campbell Smith**

 * [Illuminating the Ulam](https://pjcs-pwc.blogspot.com/2021/12/illuminating-ulam.html) ( *Perl* )

**Roger Bell_West**

 * [RogerBW's Blog: The Weekly Challenge 144: Semiprime Ulam](https://blog.firedrake.org/archive/2021/12/The_Weekly_Challenge_144__Semiprime_Ulam.html) ( *Perl & Raku* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 144 – W. Luis Mochán](https://wlmb.github.io/2021/12/22/PWC144/) ( *Perl* )
