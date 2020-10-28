---
author:       Colin Crain
date:         2020-10-26T00:00:00
description:  "Colin Crain › Perl Weekly Review #082"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #082"
image:        images/blog/p5-review-challenge-082.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-081/).* )

Welcome to the Perl review for **Week 082** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

---

Why do we do these challenges? I suppose any answers to that would be as wide ranging and varied as the people who choose to join the team. One thing is clear: it's not a competition, and there are no judges, even if there is a "prize" of sorts. About that, I think of it more as an honorarium periodically awarded to acknowledge the efforts we make towards this strange goal. So there's no determination to find the *fastest*, or the *shortest*, or even, in some abstract way, the *best* way to go about things, although I'm certain the individuals have their own aspirations and personal drives. As Perl is such a wonderfully expressive language, this provides quite a bit of fodder to the core idea of TMTOWTDI, producing a gamut of wonderfully varied techniques and solutions.

Even the tasks themselves are often open to a certain amount of discretionary interpretation. What we end up with is a situation where each participant is producing something in the manner they find the most interesting or satisfying. Some team members focus on carefully crafting miniature complete applications that thoroughly vet input data and handle every use case imaginable. Others apply themselves to the logic of the underlying puzzle and making it work in the most elegant way they can. Some eschew modules, others embrace them, bringing to light wheels perhaps invented years ago that happen to exactly solve the problem in front of them today.

I've been considering this question for some time and have found one binding commonality between all of us solving these challenges each week, in that however they normally live their lives, the task in front of them more than likely has nothing to do with it. And I think this has great value. We all do what we do, out in the real world, and hopefully we do it well. The Weekly Challenge provides a opportunity to do something similar to that life yet distinctly different; if we only do the things we already know how to do we only do the same things over and over. This is where the "challenge" aspect comes into play.

So we can consider the Weekly Challenge as providing a problem space outside of our comfort zone, as far out from comfort as we wish to take things. From those reaches we can gather and learn things and bring them back into our lives. Personally, I think that's its greatest value of all.

---

Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due. And that's why I'm here, to try and figure out how to do that.

Enough talk. Let's have a look and see what we can find.

---

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-082/) or the summary [**recap**](/blog/recap-challenge-082/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC082TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC082TASK2)   &nbsp;  &nbsp;  &nbsp;       •   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC082BLOGS)    &nbsp;  &nbsp;  &nbsp;       •

---

# TASK 1 {#PWC082TASK1}
# Common Factors
*Submitted by: Niels van Dijke*

You are given 2 positive numbers $M and $N.
Write a script to list all common factors of the given numbers.


## about the solutions

There were 33 submissions for the first task this last week. I don't think the task was overly challenging, and the large response was indicative of that. That said, even the simplest jobs in Perl can be accomplished in a variety of ways, so lets have a look at what the people came up with.

## create groups of FACTORS and COMPARE them
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/adam-russell/perl/ch-1.pl),
[**Andinus**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/andinus/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/colin-crain/perl/ch-1.pl),
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/cristian-heredia/perl/ch-1.pl),
[**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/dave-cross/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/e-choroba/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/jaldhar-h-vyas/perl/ch-1.pl),
[**Jose Luis**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/jluis/perl/ch-1.pl),
[**Julio de Castro**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/juliodcs/perl/ch-1.pl),
[**Lars Thegler**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/lars-thegler/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/lubos-kolouch/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/perlboy1967/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/roger-bell-west/perl/ch-1.pl),
[**Steven Wilson**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/steven-wilson/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/ulrich-rieke/perl/ch-1.pl), and
[**Vinod Kumar K**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/vinod-k/perl/ch-1.pl)

Let's start with a little tautology: it would seem in a challenge to determine common factors, the first course of action might well be to determine the factors of the numbers. Then those groups of factors could be compared and items in both groups would be declared common. Seems simple enough. And the way to determine whether something properly factors is to try dividing out and see it it fits. The only remaining question is to determine which numbers to pick.

Obviously, we could check all the numbers from one to our target. Perhaps not the most efficient way to go but thorough and effective. This mostly found its way in when looking for factors for both inputs simultaneously. But when making a routine just to return the factors of an individual number, the first optimization was to realize that any number over the half-way point has no chance of success, so there's no point in bothering. From there we need only add the number itself, because of course a number is a factor of itself, right? I mean, 17 ÷ 17 = 1, right? So the factors of 17 are 1 and 17, right?

Right?

Why did it suddenly get quiet in here? Why are people looking at me?

Oh, I see. It appears the examples cast that assumption into doubt.

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/athanasius/perl/ch-1.pl)
explains this dilemma:

>"Is X a factor of X? In other words, is the "divides" relation reflexive? It is
usually thought so -- see https://en.wikipedia.org/wiki/Divisor -- but the
Examples in the Task description imply not. This leads to some anomalies, e.g.,
if 17 is not a factor of 17, then the only factor common to 17 and 34 is 1 and
17 itself is excluded."

Hmm. Is a number a factor of itself? I quite frankly can think of no reason it would not be. It fits easily within the definition in that 1 × _n_ = _n_. There's nothing odd or irregular about that at all.

Ok then. Well it seems there are submissions taking both sides on the issue, with some following the examples, and others opting for a more mainstream concept of reality. The good monk, above, resolved this conflict by offering a configuration switch to choose whether or not to include the identity. I find it somewhat amusing that to achieve this they had to explicitly *remove* the number from the result list according to the switch setting.

Lets start with some not-overly-complex logic to get the ball rolling:

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/duncan-c-white/perl/ch-1.pl)

Duncan with the fun factor! As he enjoys using `Function::Parameters` to give himself some rather robust function signatures, the `fun` keyword that gets added results in this version of his factorizing routine:

```perl
fun factors( $n )
{
    my $limit = int($n/2);
    my @result = grep { $n % $_ == 0 } (1..$limit);
    return @result;
}
```

This a good example of the basic logic we're talking about here, and the name alone makes it worth a mention.

The other way to look at dividing out numbers is that should a candidate divide evenly, then the divisor times the quotient equals the dividend; this means both numbers are factors. So when we do find a pair, those two numbers can both be added immediately to our list. As we start our search for factors, for every number less than the square root of our target considered, its complement will be above that value, and vice versa. Consequently, we only need to examine numbers up to the square root of the target using this scheme.

The only small downside of the 2..sqrt solution is that it lends to a subtle gotcha when the input is itself a square. Both the candidate and its complement are factors, but in this case they are equal. If indiscriminately placed into a list of factors this, if not handled correctly, will duplicate the value. Of course if the factors are loaded into a hash this is taken care of as the keys are by definition unique, but the opporunity remains should either factor group get placed into an array. At least one submission let this slip though.

Here's an example of using the square root:

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/e-choroba/perl/ch-1.pl)

```perl
sub common_factors {
    my ($m, $n) = @_;
    ($m, $n) = ($n, $m) if $n < $m;
    my (@r, @rev_r);
    for my $i (1 .. sqrt $m) {
        if (0 == $m % $i) {
            push @r, $i if 0 == $n % $i;
            unshift @rev_r, $m / $i if $i != $m / $i
                                    && 0 == $n % ($m / $i);
        }
    }
    return [@r, @rev_r]
}
```

I like the way ordering is maintained throughout the process. No sorting required.

Note the requirement to add a liitle clause at the end to avoid adding the complement if its the same as that value already added immediately above. I ran into the same problem myself.

In

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/colin-crain/perl/ch-1.pl)

I opted for a very clean look, no fuss:

```perl
sub factor {
    my $num = shift;
    my @out;
    my $sq = int sqrt $num;
    for (1..$sq) {
        if ($num % $_ == 0) {
            push @out, $_;
            push @out, $num / $_ unless $_**2 == $num;
        }
    }
    return @out;
}
```

So we add the complement only when the target number is not a square.

Once we have our factors, determining whether the two sets share any commom elements was also done in a few ways. A straightforward approach was to construct a hash from one set, then iterate through the other checking the hash keys for existence.

[**Julio de Castro**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/juliodcs/perl/ch-1.pl)

gives us an example of this, using to hashes and filtering the keys of one:

```perl
sub factors_to_hash($num) {
    map { $_ => undef } (grep { $num % $_ == 0 } (1 .. $num/2), $num)
}

my %a = factors_to_hash shift;
my %b = factors_to_hash shift;

say join q(, ), grep { exists $a{$_} } sort keys %b;
```


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/ulrich-rieke/perl/ch-1.pl)

demonstrates how this can be accomplished in an even more compact solution:

```perl
map { $M{$_}++ if $M % $_ == 0 } (1..$M) ;
map { $N{$_}++ if $N % $_ == 0 } (1..$N) ;
my @common = grep { exists $M{$_} } keys %N ;
```

When you get down to it there really isn't a lot to this problem.

Another hash method was to construct a single hash with factors for keys that increments its values with every instance loaded. Once constructed, only those keys with value 2 will have been present in both sets of factors. I like the way this sidles up the problem sideways.

[**Lars Thegler**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/lars-thegler/perl/ch-1.pl)

enacts this rather stealthy approach:

```perl
for ( $M, $N ) {
    for my $f ( factor($_) ) {
        $factors{$_}++ for $f->@*;
    }
}

my @common_factors;
for my $f (sort keys %factors) {
    push @common_factors, $f if $factors{$f} == 2;
}
```

and here's another version, from

[**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/dave-cross/perl/ch-1.pl)

who extracts the factors using a simple `grep` statement

```perl
for my $x (@in) {
  for my $y (1 .. $x) {
    $factors{$y}++ unless $x % $y;
  }
}

say '(', join(', ', grep { $factors{$_} == 2 } sort keys %factors), ')';
```

It's impressive how many ways one can say the same thing, no? But we're only getting started. One more from

[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/cristian-heredia/perl/ch-1.pl)

because I'm big on `each` this week. It's so... readable.

```perl
sub obtainFactor {
    $count{$_}++ foreach @factors;

    while (my ($key, $value) = each(%count)) {
        if ($value == 2) {
            push @result, $key;
        }
    }
    @sorted = sort { $a <=> $b } @result;
    printResult();
}
```

Finally, before we close down this part of the discussion, I want to bring up an elegant little trick shared by

[**Vinod Kumar K**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/vinod-k/perl/ch-1.pl)

Vinod checks one list of factors against the other, by constructing a hash and checking for existence of a key, in much the same way we have seen before (with the problems we discussed above). On first scan I categorized it, but something was different and held me back. What caught my eye, it turns out, was their unique method of constructing the lookup using a *hash slice*. I love mass assignments to slices and this one made me do a double take when I finally noticed it sitting there.

```perl
@seen{@a} = ();

foreach my $new ( @b ) {
    push (@final, $new ) if exists $seen{$new};
}
```

In one fell swoop we have a bag of keys for a lookup. Slices, for both arrays and hashes, can be very powerful tools on assignment.

## factor BOTH numbers at the SAME TIME
[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/bob-lied/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/dave-jacoby/perl/ch-1.pl),
[**Dieter Dobbelaere**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/ddobbelaere/perl/ch-1.pl),
[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/nunovieira220/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/pete-houston/perl/ch-1.pl), and
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/sgreen/perl/ch-1.pl)

In the methods above, factors were derived by looking through a list of numbers for each input, leading to certain discreet clarity but trading off some repetition. By validating both input values at the same time, with the same list of numbers, we can end up with some very compact solutions. Any candidate found to be a factor of first one number and then the other is by definition a common factor and no more confirmation is needed.

[**Dieter Dobbelaere**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/ddobbelaere/perl/ch-1.pl)

gives us a delightful demonstration of how compact this can be:

```perl
sub common_factors {
    my ($M, $N) = @_;
    grep {!($N%$_ || $M%$_)} (1..$M);
}
```

I mean, that's it. The logic can be affirmative, "A has no remainder and B has no remainder", or negatory, "neither A nor B has a remainder", but the result is the same. I would however encourage a little space around the modulo operator to avoid confusion with a sigil. Because, you know, the whole "line noise" thing.

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/pete-houston/perl/ch-1.pl)

brings in `List::Util`, and with it `min` and the less common `none`, used to great effect here:

```perl
my $i = min (@ARGV);
my @div;

# Iterate downwards to 1
while ($i > 0) {
    push @div, $i if none { $_ % $i } @ARGV;
    $i--;
}

print "@div\n";
```

considering the logic is the three lines in the middle, it's not really any longer. I like the use on `none` here. Very clean.

A third example from

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/sgreen/perl/ch-1.pl)

unrolls the logic into a labeled nested-loop structure, but it's essentially identical. The outer loop is triggered when the inner loop through the inputs fails, so either input can remove a number from consideration. Only those that run the gauntlet and survive are awarded common factor staus.

```perl
  OUTER: foreach my $number ( 1 .. $min ) {
        foreach my $value (@values) {
            next OUTER if $value % $number;
        }

        push @factors, $number;
    }
```

This is logically the same as `($N % $number && $M % $number)`, which unsurprisingly shows up in this code shared by

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/dave-jacoby/perl/ch-1.pl)

```perl
for my $i ( 1 .. $min ) {
    push @factors, $i if $min % $i == 0 && $max % $i == 0;
}
say join ',', @factors;
```

As I said, affirmative or negatory, it it doesn't matter how you phrase the logic.


## FACTOR the GREATEST COMMON DENOMINATOR
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/abigail/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/cheok-yin-fung/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/polettix/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/jo-37/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/laurent-rosenfeld/perl/ch-1.pl),
[**Myoungjin Jeon**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/jeongoon/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/wanderdoc/perl/ch-1.pl)

Several people addressed the problem by looking at the result requested, the list of common factors. Considering this, they came to the realization that all the common factors are themselves factors of the Greatest Common Denominator. If that can be determined, then all that is needed is to factor *that*, and the entire list just falls right out.

Ok, sure. But how to get the GCD? Actually that part is pretty easy. There's a well established algorithm, the [Euclidean Algorithm](https://en.wikipedia.org/wiki/Euclidean_algorithm), that was written down about 2300 years ago. Because this is math, it works as well today as the day Euclid drove it off the lot. It says, in essential form: **The greatest common denominator between two numbers doesn't change if you replace the larger of the two numbers with the difference between the two. This replacement continues until the two numbers are equal, and that number remaining is the GCD.**

It's true. Try it. It's cool.

Ok, perhaps it would make more sense to have a look at the way it's implemented.

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/wanderdoc/perl/ch-1.pl)

Our itinerant sage gives it to us straight. Here the steps fall directly from the definition above. We always place the larger number first for convenience, then subtract the smaller from the larger and replace the larger with the value. The loop stops when the two values are equal and the remainder is returned.

```perl
sub gcd
{
    my ($num_1, $num_2) = @_;

    while ( $num_1 != $num_2 )
    {
       ($num_1, $num_2) = ($num_2, $num_1) if ($num_2 > $num_1);
       ($num_1, $num_2) = ($num_1 - $num_2, $num_2);
    }
    return $num_2;
}
```

Once that is done the GCD is factor by on of the methods outlined above. Here the doc iterates over the whole range:

```perl
     for my $i ( 1 .. $gcd )
     {
          push @factors, $i unless $gcd % $i;
     }
     return @factors;
```

That part should look quite familiar by now.

There were other ways of implementing the Euclidean Algorithm, of course, but they retain the essential patterning.

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/cheok-yin-fung/perl/ch-1.pl)

give us a recursive version:

```perl
sub gcd{              #Euclidean Algorithm
    my $a = $_[0];
    my $b = $_[1];

    my $c = $a % $b;

    if ($c == 0) {
        return $b;
    }
    else {
        gcd($b,$c);
    }
}
```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/laurent-rosenfeld/perl/ch-1.pl)

tightens up the looped one:

sub gcd {
    my ($i, $j) = sort { $a <=> $b } @_;
    while ($j) {
        ($i, $j) = ($j, $i % $j);
    }
    return $i;
}

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/polettix/perl/ch-1.pl)

puts his in a single line:

```perl
sub gcd ($A, $B) { ($A, $B) = ($B % $A, $A) while $A; return $B }

sub common_factors ($A, $B) {
   my $gcd = gcd($A, $B);
   grep { !($gcd % $_) } 1 .. int($gcd / 2), $gcd;
}
```

And there's nothing in the rules that says you have to even compute the GCD yourself. The GCD itself shows up all over the place, so there are resources freely available to feed the need.

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/jo-37/perl/ch-1.pl)

brings in the `Math::Utils` module to ask politely for the value, then spends the effort to produce this well-crafted method for factoring it using a functional paradigm.

```perl
sub common_divisors {
    my $gcd = gcd @_;

    # - Prepend one, as it is always a common divisor.
    # - Test all numbers between 2 and sqrt($gcd) as divisors of $gcd.
    #   If a detected divisor is the square root of $gcd, this gives one
    #   element in the result set and a pair of elements otherwise.  The
    #   result set is sorted for clarity.
    # - Append $gcd if it is larger than one.
    (
        1,
        (sort {$a <=> $b} map {
                my $d = int $gcd / $_;
                $_ * $d == $gcd ? $_ == $d ? ($_) : ($_, $d) : ();
            } 2 .. sqrt $gcd),
        ($gcd) x !!($gcd - 1)
    );

}
```

Of course we can still see the components of the square root solution we discussed earlier, rearranged. So in a sense, the GCD solution does kind of just kick the can down the road a bit, and we still end up needing to brute force, albeit optimally, the final factoring job.

Only

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/abigail/perl/ch-1.pl)

really addressed this last issue. In fact, he seems to have thought through this problem quite extensively, as far as examining all aspects. Fortunately he has shared those thoughts with us in an extensive commentary, which I will only reference, rather than try to summarize.

First off, he's worked a different algorithm to render the GCD, [Stein's Algorithm](https://en.wikipedia.org/wiki/Binary_GCD_algorithm). That worth a look in itself:

```perl
sub stein ($u, $v) {
    return $u if $u == $v || !$v;
    return $v if             !$u;
    my $u_odd = $u % 2;
    my $v_odd = $v % 2;
    return stein ($u >> 1, $v >> 1) << 1 if !$u_odd && !$v_odd;
    return stein ($u >> 1, $v)           if !$u_odd &&  $v_odd;
    return stein ($u,      $v >> 1)      if  $u_odd && !$v_odd;
    return stein ($u - $v, $v)           if  $u     >   $v;
    return stein ($v - $u, $u);
}
```

Once the GCD is obtained, he then applies some very clever math to assault the problem space to construct the factors out of their own prime factors. It's rather involved:

```perl
my @factors = (1);
my $p = 2;
while ($p ** 2 <= $gcd) {
    #
    # Find out how often $p is a factor of $gcd
    #
    my $t = 0;
    until ($gcd % $p) {
        #
        # If we are here, $p cannot be composite.
        #
        $t ++;
        $gcd /= $p;
    }

    #
    # Push all new factors. For each 1 <= $i <= $t, and each $f already
    # in the list of factors, add $f * $p ^ $i to the list of factors.
    #
    # The test for $t isn't needed for correctness, just for performance.
    #
    if ($t) {
        push @factors => map {my $f = $_; map {$f * $p ** $_} 1 .. $t} @factors;
    }

    $p += $p     == 2 ? 1
        : $p     == 3 ? 2
        : $p % 6 == 1 ? 4
        :               2;

}
```

I do actively encourage interested parties to further explore the source, which has, as I said, extensive commentary explaining how it works.




## diversions from the BEATEN PATH and other NOTEWORTHY IDEAS

### use a FUNCTIONAL paradigm

[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/alexander-pankoff/perl/ch-1.pl)

When Jorg Sommery, above, constructed a functional solution using the Greatest Common Denominator, I didn't want to break the flow to stay on that subject. Here, then, is the other submission in that category. Alexander goes about it a little differently, although still following the idea of a linear data pipeline where structures go in, get acted upon, and are then passed on to the next step. He chooses to break his procedure into discreet component routines rather than combine them into a single complex structure.


```perl
say format_list( common_factors( $M, $N ) );

sub common_factors ( $m, $n ) {

    # we grep for numbers from 1 to min($m,$n) that are factors of both $m and
    # $n. since all numbers larger than min($m,$n) can't be a factor of that
    # minimum we don't have to check them
    grep {
        my $check_factor = $_;
        all { is_factor( $check_factor, $_ ) } ( $m, $n );
    } 1 .. min( $m, $n );
}

sub is_factor ( $divisor, $value ) {
    return $value % $divisor == 0;
}

sub format_list(@list) {
    return '(' . join( ', ', @list ) . ')';
}
```


### use SET THEORY
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/athanasius/perl/ch-1.pl)
and
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/walt-mankowski/perl/ch-1.pl)

The first paradigm, to factor the numbers and then find common ground, can really be defined in Set Theory: create sets of factors for each of the numbers, then the common factors are the intersection of those two sets. Using the module `Set::Scalar`, that logic can be directly abstracted, and two members chose to go about things in this way.

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/athanasius/perl/ch-1.pl)

The monk opts to borrow `divisors` from `Math::Prime::Util`, which they proceed to call on the two inputs, and the resultant factor lists are assigned into new set abstractions using Set::Scalar. Finding the common members of the two sets is then as easy as employing the overloaded `*` operator, which creates the intersection, a set itself. It's interesting that by default this method includes the identity as a factor [ed. note: of course it does] and they address this by explicitly *removing* the element from its own set of factors when required.

```perl
my $M_factors = Set::Scalar->new( divisors($M) );
   $M_factors->delete($M)                                 unless REFLEXIVE;

my $N_factors = Set::Scalar->new( divisors($N) );
   $N_factors->delete($N)                                 unless REFLEXIVE;

my @common = sort { $a <=> $b } ($M_factors * $N_factors)->members;
```

[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/walt-mankowski/perl/ch-1.pl)

doesn't bother with the identity, eschewing it completely. I suppose that is his right, after all. Not he's here using the object notation for the operation, but also overloading `$,`, the `$OUTPUT_FIELD_SEPARATOR`, which pretty prints the list separated by commas.

```perl
my ($m, $n) = @ARGV;
local $, = ", ";
my $s1 = factors($m);
my $s2 = factors($n);
say $s1->intersection($s2);

sub factors($n) {
    my $s = Set::Scalar->new(1);
    for my $i (2..sqrt($n)) {
        $s->insert($i, $n / $i) if $n % $i == 0;
    }

    return $s;
}
```

Although not abstracted into a full blown pseudo-data type,

[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/bob-lied/perl/ch-1.pl)

gives us a truly interesting method of determining commonality that I believes deserves a writeup of its own under this heading. Here is the routine in question:

```perl
sub both($m, $n)
{
    my (%union, %intersection);
    foreach my $e ( @$m, @$n)
    {
        $union{$e}++ && $intersection{$e}++;
    }
    return sort { $a <=> $b } keys %intersection;
}
```

By successively iterating through both lists, each element is first passed to the `%union` hash, which is *post*-incremented. Thus on first appearance, the value will eventually be set to 1, but the boolean, evaluated immediately, will still be at that point undefined and fail. The statement short-circuits and moves on, and `%intersection` is never touched. If a given factor comes up a second time, however, `$union{$e}` will have been set to 1, the logical AND statement continues and the key at `%intersection` is then set. When all is said and done, the two hashes live up to their names, being the union and the intersection of the two lists.

It's a thing of beauty, I say.

---

# TASK 2 {#PWC082TASK2}
# Interleave String
*Submitted by: Mohammad S Anwar*

You are given 3 strings; $A, $B and $C.
Write a script to check if $C is created by interleave $A and $B.
Print 1 if check is success otherwise 0.

#

## Preface: the WINNOWING

Well here we are again, he says, shaking his head.

It's almost Halloween here in America.

**Let me tell you a story.**

Ok, I don't *really* want a reputation as a destructive force, cackling with glee as I upend hours of hard work with diabolically driven data *designed* to break outwardly innocent clean young code. I assure you I do not craft these terrible things expressly for these review pages; in fact I just nonchalantly take the last thing off the testing heap that I had been  applying to my own work. As when I work I refine the input as I go, the last example will maintain in its DNA the ideas of those that had passed before, keeping the craziness bottled up and brewing through the cycles, flexing right up to the frigid hoary edges of the task required. But it's just input. It puts its pants on one tentacle at a time, same as you or I.

What was this monstrosity you might ask?

    $A = "AXXZ";
    $B = "XXYZ";
    $C = "AXXYXZXZ";

And what was the damage? Well, out of the **27** submissions this last week, just about half, **13** failed the test. And I'm pretty sure I know why.

Toward the end of last week, a few days after I had finalized my own submissions for the challenge, I was writing up the work for the [Perl Excursions](https://colincrain.wordpress.com/2020/10/16/factor-i-hardly-knew-ye-interwoven-aphorisms-ftw/) blog and found myself elucidating on the particular recursive method I had used. Essentially, at any given point a path is followed, choosing between the next characters presented in the two strings. After all, that's a good model for the action of interleaving: you take from one or the other until you have no more parts to build with. I found myself saying that because it was a binary choice, one simply picked the character required, and if the two were the same, it didn't matter which one you took, so there would ultimately never be a need to backtrack... and I stopped myself. Was that actually true?

As I found printing 1 or 0 to be the most boring output ever, I had left quite a bit of verbose data dumping in the script, so you could see the progress as I chipped away at the interwoven goal one character choice at a time. It did not appear to backtrack ever, given a variety of input large and small. But that did not mean it never would.

It took a bit of planning but I came up with the strings above. When interleaving, once the "A" is set from the `$A` string, the two choices of "Xs" offered are not in fact the same. The two "Xs" from the `$B` string must be taken first, to reveal the "Y", or the interleaving cannot finish. Plugging in the data, I was able to witness the backtracking and all was well in my world. I even added some more verbosity to label the action, but I didn't need to actually change anything. The recursive algorithm was solid. It did what I needed it to do but *I didn't think I needed to ask it.*

I've been told I shouldn't admit to these little errors, these wrong turns you make before saying "Wait! Hold on!" But I think it's instructive to be honest about the method. It makes it easier to put down your pride and set the ship back on course, should it be required.

Needless to say I deleted that particular paragraph and had to start over on a different tack.

My point here is that I believe it's all about the backtracking. The string data chosen is designed to trick the algorithm into picking the wrong path and continuing down it, requiring backtracking to get set to rights. It also invokes an unlikely and unintuitive situation, so it was easy to miss. Two "Xs" are the same, right? Well, no, actually. Even worse, sometimes they are, and sometimes they most definitely are not.

I was wondering if recursion was required to complete the task. It's not, of course, but the bulk of the successful techniques certainly used it. And not every recursive solution passed, either.

## SOLUTIONS using RECURSION
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/abigail/perl/ch-2.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/alexander-pankoff/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/athanasius/perl/ch-2.pl),
[**Bob Lied**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/bob-lied/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/colin-crain/perl/ch-2.pl),
[**Dieter Dobbelaere**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/ddobbelaere/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/polettix/perl/ch-2.pl), and
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/lubos-kolouch/perl/ch-2.pl)

Because the interleaving process can be considered a series of simple choices, to pick one string or the other, the possible outcomes can be looked at as a binary tree of possible outcomes. A tree in turn suggested a recursive solution to descend into it to map the pathways. This proved to be the most popular choice, and those that were successful all wrapped around the same core structure.

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/abigail/perl/ch-2.pl)

in his commentary gives a nice outline of the flow:

>"Now we can recurse; if the first character of unmatched part of C matches the first character of the unmatched part of either A or B, we match the first character of C and the first character of either A or B, and recurse. If the first character of the unmatched part of C matches the first character of unmatched parts of both A and B, we first recurse first by matching against A, and if this doesn't provide a match, we recurse by matching against B."

In essence, we walk through the target one position at a time, picking the next character from one string or the other at every step. Once a character is picked, the position is advanced, the state reformulated and the new state passed to the same routine to pick the next character. Given two valid options, both branches are descended into looking for a solution.

An easy way to keep track of position presented itself: to simply remove the picked character from play, along with its match in the target string. In this way progress works its way from left to right, examining the first letter of the remaining strings given. If at any point all three strings are empty then a solution has been found and a positive result is propagated outward and the process stops. Several people worked this whittling substring idea.

I think

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/colin-crain/perl/ch-2.pl)
lays these steps out pretty clearly:

```perl
sub interleave {
    my ($A, $B, $C) = @_;

    return 1 unless (  $A or $B or $C );      ## we've used all our letters

    for ($A,$B) {
        if (substr($_, 0, 1) eq substr($C, 0, 1) ) {
            my $taken   = substr $_, 1;
            my $other   = $_ eq $A ? $B : $A;
            my $target  = substr $C, 1;
            return 1 if interleave($taken, $other, $target);
        }
    }
    return 0;
}
```

Each of the two inputs are tried, and if the first letter matches, the string and the target are shortened and passed, along with whatever the other string was, back to the routine. The identities of which string is "A" and which is "B" flips depending on which one matches, but that's not consequential to the outcome.

In that, I got a little clever with the `for ($A,$B) {...}` loop, because writing it as two sections shared so much code. Unrolling the two possibilities might have been a little more linear and easier to follow.

[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/lubos-kolouch/perl/ch-2.pl)

did this and his version looks like this:

```perl
sub InterLeave {

    my ($params) = @_;

    my $result = $params->{'result'} // {};
    my $a = $params->{'a'};
    my $b = $params->{'b'};
    my $current = $params->{'current'} // '';

    if (not $a and not $b) {
        $result->{$current} = 1;
        return $result;
    }

    $result = InterLeave({'a' => substr($a, 1), 'b' => $b, 'current' => $current.substr($a,0,1), 'result' => $result }) if length($a);
    $result = InterLeave({'b' => substr($b, 1), 'a' => $a, 'current' => $current.substr($b,0,1), 'result' => $result }) if length($b);

    return $result;
}
```

[**Dieter Dobbelaere**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/ddobbelaere/perl/ch-2.pl)

tightens up the idea a little more:

```perl
sub can_interleave {
    my ($A, $B, $C) = @_;
    ($A eq '' && $B eq '' && $C eq '')
    || (length $A && substr($A,-1) eq substr($C,-1) && can_interleave(substr($A,0,-1), $B, substr($C,0,-1)))
    || (length $B && substr($B,-1) eq substr($C,-1) && can_interleave($A, substr($B,0,-1), substr($C,0,-1)));
}
```

You can see he's working from the tail rather than the head, but either way it's to the same effect.

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/duncan-c-white/perl/ch-2.pl)

Duncan gives a slight variation: when looking to see whether a given string matches at the beginning, rather than settling for a one letter match he does a quick lookahead to see how far the prefix can be extended. He then sets up a loop trying all of these options, with the recursion directed at the other string, whichever that might be. This removes some fraction of the recursive steps — those when the choice is to continue to the next letter in the same string — into the loop structure, which might be a little more efficient.

```perl
fun interleave( $a, $b, $c )
{
    my $l = length($a);
    foreach my $i (1..$l)
    {
        my $pre   = substr($a,0,$i);
        my $cpre  = substr($c,0,$i);
        next unless $pre eq $cpre;
        my $arest = substr($a,$i);
        my $crest = substr($c,$i);
        say "debug: found possible prefix $pre (len $i) of $a and $c, leaving $arest, $b, $crest";
        return 1 if $crest eq "" || interleave( $b, $arest, $crest );
    }
    return 0;
}
```

A few more ideas I believe deserve highlighting came from Alexander and Abigail.

[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/alexander-pankoff/perl/ch-2.pl)

Alexander handles what is essentially the same underlying logic is a very functional manner, assigning a couple of anonymous subroutines to contain the switching behavior that recurses into the separate pathways. But the components are still there; chipping away at the strings as recursion develops in  the manne we've seen elsewhere. I do think what he's done here is a fine example of the style though, abstracting ideas into functions and then applying those functions to the data. The code is well documented as well, which is kind of him and always deserves commendation.

```perl
$go = sub ( $target, $a, $b ) {
    # base case. we consumed all inputs - $target is $a and $b interleaved
    # since we already made sure that the total lengths match up we only
    # need to check wether $target became empty here.
    return 1 if !length($target);

    my $head = substr( $target, 0, 1 );
    my $rest = substr( $target, 1 );

    # the order of $a and $b in the recursice call doesn't matter
    # so we can just run the same routine on (a,b) and (b,a) instead of
    # using two routines with the arguments flipped
    return any(
        sub {
            starts_with( $_->[0], $head )
              && $go->( $rest, substr( $_->[0], 1 ), $_->[1] );
        },
        pairs( $a, $b, $b, $a )
    );
```

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/abigail/perl/ch-2.pl)

Rather than use substr, Abigail splits his input strings into arrays, where he can
address the individual elements non-destructively. The control flow and the action moves essentially the same as the substr solution, chipping away from the front. Note $A, $B and $C are array references at this point. Here's his routine, sans the comment from above:

```perl
sub is_interleaved ($A, $B, $C, $ai = 0, $bi = 0, $ci = 0) {
    state $cache;
    local $" = "";
    $$cache [$ai] [$bi] //= do {
        #
        # If we have reached the end of either $A or $B,
        # what is remaining in the other string, must
        # match the unmatched part in $C.
        #
        return "@$A[$ai..$#$A]" eq "@$C[$ci..$#$C]" if $bi == @$B;
        return "@$B[$bi..$#$B]" eq "@$C[$ci..$#$C]" if $ai == @$A;

        return $$A [$ai] eq $$C [$ci] &&
                     is_interleaved ($A, $B, $C, $ai + 1, $bi,     $ci + 1) ||
               $$B [$bi] eq $$C [$ci] &&
                     is_interleaved ($A, $B, $C, $ai,     $bi + 1, $ci + 1);
    }
}
```

There's more commentary in the source, have a look.


## OTHER MANNERS of going about the TASK
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/jo-37/perl/ch-2.pl),
[**Myoungjin Jeon**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/jeongoon/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/roger-bell-west/perl/ch-2.pl), and
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/sgreen/perl/ch-2.pl)

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/jo-37/perl/ch-2.pl)

Jorg generates a series of regular expressions to try, dividing the target string into groups of partitions: from 1, the whole string, to `length($C)`, one for each letter. For each of these groupings an expression is built from parts to match against the three input strings, $C, $A and $B, joined together with newlines. The expressions get quite involved. Although never directly referred to outside of a concatenation of variables, the matching expression for the monstrous input was

```perl
^(.{1,4}?)(.{1,4}?)(.{1,4}?)(.{1,4}?)(.{1,4}?)\n(?:\g{1}\g{3}\g{5}\n\g{2}\g{4}|\g{2}\g{4}\n\g{1}\g{3}\g{5})\z
```

This matches 5 capture groups of between 1 to 4 characters, internally matching those odd-numbered captures against the first string, the evens against the second. Referring back to our data strings, the solution to that set is:

```
    $A = "AXXZ";
    $B = "XXYZ";
    $C = "AXXYXZXZ";

    (A)(XXY)(X)(Z)(XZ)
     A  B    A  B  A
    $1 $2   $3 $4 $5
```

As you can see the interweaving is 5 groups. Told you it matched. Cool, right?

```perl
for my $num (2 .. $len) {
    # maximum length of each part
    my $lmax = $len - $num + 1;

    # quantifier: non-greedy sequence up to length $lmax or
    # none for a single character.
    my $quant = $lmax > 1 ? "{1,$lmax}?" : '';

    # regex that matches every possible decomposition into
    # $num nonempty substrings capturing all parts.
    my $decomp = "(.$quant)" x $num;

    # regexes that match the concatenation of all odd / even numbered
    # captured groups.
    my ($odd, $even);
    $odd .= "\\g{$_}" for grep $_ % 2 == 1, 1 .. $num;
    $even .= "\\g{$_}" for grep $_ % 2 == 0, 2 .. $num;

    # The finally constructed regex matches if $C, partioned into
    # $num parts, is interleaved from $A and $B, where $C, $A and $B
    # are joined together with newlines.  As the strings don't
    # contain newlines and "dot" doesn't match newline, this is
    # safe.  The efford grows exponentially with the number of
    # interleaved parts or, if $C is not interleaved from $A and $B,
    # the length of $C.  For longer strings a different approach
    # would be required.

    return 1 if /^$decomp\n(?:$odd\n$even|$even\n$odd)\z/;
}
```



[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/roger-bell-west/perl/ch-2.pl)

Roger divides his strings into arrays of characters, and maintains a data structure of an array buffer of tuples holding position sets within the three strings. A position set is unloaded from the buffer and examined; the first given default set is [0,0,0], signifying the 0-index in each string. These indices are used to access the characters in the strings to see if they match. If they do, a new, incremented tuple is added back into the top of the buffer. The buffer is three units long, so it can hold both outcomes should the characters on both strings match. As long as we keep two outcome paths open all bases are covered, because switching strings obviates the other timeline, so it is no longer a possible continuance from before. Oooh. I like it.

```perl
sub isinterleave {
    my ( $a, $b, $c ) = @_;
    my @s = ( map { [split '', $_] } ( $a, $b, $c ) );
    my @l = map { $#{$_} } @s;
    my @buf = ( [0, 0, 0] );
    while ( @buf ) {
        my $n = shift @buf;
        if ( $n->[2] > $l[2] ) {
            return 1;
        }
        if ( $n->[0] <= $l[0] && $s[0][$n->[0]] eq $s[2][$n->[2]] ) {
            push @buf, [$n->[0]+1, $n->[1], $n->[2]+1];
        }
        if ( $n->[1] <= $l[1] && $s[1][$n->[1]] eq $s[2][$n->[2]] ) {
            push @buf, [$n->[0], $n->[1]+1, $n->[2]+1];
        }
    }
    return 0;
}
```

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/sgreen/perl/ch-2.pl)

Simon sets up an iterator to move one position at a time over the target string. He also keeps an array of arrays, each outer element holding the state of both current remaining candidate strings. Here's the clever part: when multiple possibilities present themselves, both tracks are followed and all valid choice combinations are placed into the `@remaining` array as another state. The whole thing is carried forward and at each matching invalid states, without a matching letter, are pruned. So the possible outcomes grow and shrink until there are no more, at which point we have either matched the last letter or failed.

I've shortened this code a bit for brevity. Have a look at the source for more context. It'll be worth your time.

```perl
sub _remove_character {
    my ( $c, $words ) = @_;
    my @array = ();

    for my $i ( 0 .. $#$words ) {
        # We've exhausted all the characters from this word.
        next if $words->[$i] eq '';

        # The first remaining letter in this word is not what we want.
        next if substr( $words->[$i], 0, 1 ) ne $c;

        # Add to the array striping the letter we used for the word.
        push @array,
          [ map { $_ == $i ? substr( $words->[$_], 1 ) : $words->[$_] }
              0 .. $#$words ];
    }
    return @array;
}

sub main {
    my @words  = @_;
    my $target = pop(@words);

    my @remaining = ( \@words );
    for my $i ( 1 .. length($target) ) {
        # What character we are trying to match
        my $c = substr( $target, $i - 1, 1 );

        # See if any of the current solutions are still valid by
        #  matching the character
        @remaining = map { _remove_character( $c, $_ ) } @remaining;

        # There are no possible solutions
        return 0 if scalar(@remaining) == 0;
    }

    # We've reached the target!
    return 1;
}
```

[**Myoungjin Jeon**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/jeongoon/perl/ch-2.pl),

modules:

"[Plan A](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/jeongoon/perl/Ch2PlanA.pm)"

"[Plan B](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/jeongoon/perl/Ch2PlanB.pm)"


Jeon gives two solutions, because obviously one was not enough. The first, "[Plan A](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/jeongoon/perl/Ch2PlanA.pm)" does a quick scan through the strings, keeping a list of positional indexes to keep track of where we are when we try to match the target index character to either of the candidate strings. Of course the tricky part comes when the two are the same; in this case one is picked and the other is added to a `@saved` array where is can be referred to later should the road taken lead to a dead end. If the ambiguity remains more possibilities are saved, but as those ambiguities are resolved they are purged again and the normal flow is resumed. It seems to work correctly and results in a yea/nay 1 or 0 result.

"[Plan B](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/jeongoon/perl/Ch2PlanB.pm)", on the other hand, has inside it a handy little partition routine, which is used to create possible divisions of the target string, which will then need to be apportioned out between the two strings as odds and evens. In a sense this resembles the regex parser of Jorg Sommrey, above. After that there is a method to confirm whether a given pattern will fit the data.

Its a complicated and ambitious effort. Make note it's at its heart a functional style, best read from the bottom up, and contains some unique features, like a `{ ... ; redo }` block, which makes a handy infinite loop. It's much like a `while(1) { ... }`, only in this case internal control structures dictate that the redo is only seen in certain cases. I'm not sure if I'll ever use it but it's growing on me. That one's in Plan A, by the way.

```perl
sub allPossiblePartitions ($$$) {
    my ( $A, $B, $C ) = @_;
    my $sum = length $C;
    my @sps = somePossilbeSum( 1, $sum, [], [],
          sub ($) { # check if we can continue to make a permutation sequences
              my $parts = shift;
              @$parts <= 1 and return 1; # 1 block is too short
                                        # because we need to compare both A,B

              my ( $splited, $o, $e ) # o: odd indexed  chars(string)
                                      # e: even indexed chars(string)
                  = uninterleave( $C, $parts );
              # check if *maybe* interleaved
              # we will confirm later
              return any { # any case of A, B vs B, A
                  my ($l, $r) = @$_; # left, right

                  all {
                      # minimum compare  left  vs odds
                      #               or right vs evens
                      my ($m, $n, $len) = @$_;
                      $len = min map {length} $m, $n;
                      substr( $m, 0, $len ) eq substr( $n, 0, $len )
                      } [$l, $o], [$r, $e];
              } [$A,$B], [$B,$A];
          }
        );

    map { # confirm the cases if actually interleaved
        if ( @$_ > 1 ) {
            my @resultRow = uninterleave( $C, $_ );
            my ( $splited, $o, $e ) = @resultRow;

            if ( any {
                my ( $a, $b ) = @$_;
                $a eq $o and $b eq $e
                 } [$A, $B], [$B, $A] ) {
                \@resultRow
            }
            else {
                ()  # not interleaved
            }
        } else {
            # skip if only one block,  becuase it doesn't make a interleave str.
            # it is okay only if A or B is empty.
            # but it doesn't make sense for me
            # because interleaving has no meaning if one of them is empty
            ()
        }
    } @sps;
}
```









## a SPECIAL NOTE on VERBOSE OUTPUT

I mentioned before on how I considered a simple 1 or 0 to be "the most boring output ever". That inspired me -- I decided to print the state of the strings as work proceeded so you can watch them get whittled away. Satisfying as that effort may have been, special  mention must be made this week to the efforts of

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-082/athanasius/perl/ch-2.pl)

One of my favorite parts from the Apostle of Alexandria's communication is a carefully crafted `explain` routine, documenting the interleaving in a unique manner.

```
Input:
    $A = "XXYZ"
    $B = "AXXZ"
    $C = "AXXYXZXZ"

Output: 1

EXPLANATION
    $A =   XXY Z
    $B =  A   X XZ
    $C =  AXXYXZXZ
```

I don't know what to say. It's a wonderfully clear visualization. Here's the code; be aware that as he makes his string choices in the other routine he notes the decisions as they are made, adding them to the `$seq` array referenced.

```perl
sub explain
{
    my ($A,  $B,  $C, $seq) =  @_;
    my ($ai, $bi, @A, @B  ) = (0, 0);

    for my $i (0 .. $#$seq - 1)
    {
        if ($seq->[$i] eq 'A')
        {
            push @A, substr $A, $ai++, 1;
            push @B, ' ';
        }
        else
        {
            push @A, ' ';
            push @B, substr $B, $bi++, 1;
        }
    }

    if ($seq->[-1] eq 'A')
    {
        push @A, substr $A, $ai;
    }
    else
    {
        push @B, substr $B, $bi;
    }

    print  "\nEXPLANATION\n";
    printf   "    \$A =  %s\n", join '', @A;
    printf   "    \$B =  %s\n", join '', @B;
    print    "    \$C =  $C\n";
}
```


---

<br>

# BLOGS {#PWC082BLOGS}

***

**That’s it for me this week, people! Unbroken by the torrential influx, I have maintained my bearings. Looking forward to next wave, I am, your humble servant.**

## But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC082BLOGS}
## then *RUN* *(dont walk!)* to the *WATERING HOLE*
## and *READ* these *BLOG* *LINKS*:

***( don't think, trust your training, you're in the zone, just do it ... )***


**Abigail**

 * [Perl Weekly Challenge 082, Part 2 &#8211; Abigail's Programming Blog](https://wp.me/pcsEjt-1t) ( *Perl* )
 * [Perl Weekly Challenge 082, Part 1 &#8211; Abigail's Programming Blog](https://wp.me/pcsEjt-K) ( *Perl* )

**Adam Russell**

 * [Perl Weekly Challenge 082 - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/2020/10/18#pwc082) ( *Perl* )

**Andinus**

 * [Challenge 082](https://andinus.tilde.institute/pwc/challenge-082/) ( *Perl* )

**Arne Sommer**

 * [Interleaved Factors with Raku](https://raku-musings.com/interleaved-factors.html) ( *Raku* )

**Colin Crain**

 * [Factor? I hardly knew ye! Interwoven aphorisms FTW. &#8211; Programming Excursions in Perl and Raku](https://colincrain.wordpress.com/2020/10/16/factor-i-hardly-knew-ye-interwoven-aphorisms-ftw/) ( *Perl & Raku* )

**Dave Jacoby**

 * [Perl Challenge #82 | Committed to Memory](https://jacoby.github.io/2020/10/14/perl-challenge-82.html) ( *Perl* )

**Flavio Poletti**

 * [PWC082 - Common Factors](https://github.polettix.it/ETOOBUSY/2020/10/13/pwc082-common-factors/) ( *Perl* )
 * [PWC082 - Interleave String (but not really!)](https://github.polettix.it/ETOOBUSY/2020/10/14/pwc082-interleave-string/) ( *Perl* )
 * [PWC082 - Interleave String (now for real, hopefully!)](https://github.polettix.it/ETOOBUSY/2020/10/18/pwc082-interleave-string-again/) ( *Perl* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 82](https://www.braincells.com/perl/2020/10/perl_weekly_challenge_week_82.html) ( *Perl & Raku* )

**Kang-min Liu**

 * [Raku: solving Perl Weekly Challenge 082](https://gugod.org/2020/10/pwc-082-raku-en/) ( *Raku* )
 * [Proof: if c is a common factor of a and b, then c is a factor of gcd(a,b)](https://gugod.org/2020/10/common-factors-and-gcd-en/) ( *Raku* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 82: Common Factors](http://blogs.perl.org/users/laurent_r/2020/10/perl-weekly-challenge-82-common-factors.html) ( *Perl & Raku* )

**Myoungjin Jeon**

 * [Weekly Challenge #082 Task #1 :: (Raku)](https://dev.to/jeongoon/weekly-challenge-082-task-1-raku-gg1) ( *Raku* )
 * [Weekly Challenge #082 Task #2 :: (Elm, Raku)](https://dev.to/jeongoon/weekly-challenge-081-task-2-elm-raku-p92) ( *Elm & Raku* )

**Roger Bell_West**

 * [RogerBW&#39;s Blog: Perl Weekly Challenge 82: Interleave Factors](https://blog.firedrake.org/archive/2020/10/Perl_Weekly_Challenge_82__Interleave_Factors.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 082](https://dev.to/simongreennet/weekly-challenge-082-3a9d) ( *Perl* )

**Walt Mankowski**

 * [Perl Weekly Challenge #82](http://www.mawode.com/blog/blog/2020/10/17/perl-weekly-challenge-82/) ( *Perl* )
