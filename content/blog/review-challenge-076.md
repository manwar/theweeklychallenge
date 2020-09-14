---
author:       Colin Crain
date:         2020-09-14T00:00:00
description:  "Colin Crain › Perl Weekly Review #076"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #076"
image:        images/blog/p5-review-challenge-076.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-075/).* )

Welcome to the Perl review for **Week 076** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

Or really, talk about pretty much anything that stands out as remarkable or noteworthy.

Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due. And that's why I'm here, to try and figure out how to do that.

Let's have a look and see what we can find.

---

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-076/) or the summary [**recap**](/blog/recap-challenge-076/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC076TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC076TASK2)   &nbsp;  &nbsp;  &nbsp;       •   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC076BLOGS)    &nbsp;  &nbsp;  &nbsp;       •

---

# TASK #1 › Prime Sum {#PWC076TASK1}
You are given a number $N. Write a script to find the minimum number of prime numbers required, whose summation gives you $N.

Example:
**Input:**

    $N = 9

**Output:**

    2 as sum of 2 prime numbers i.e. 2 and 7 is same as the input number.
    2 + 7 = 9.


## BACKGROUND to the solutions

The difference between this week's and the usual challenges is this one has an actual answer. That answer might be in four parts, but it's relatively simple to explain and covers every case.

**tl;dr: the answer is either 1, 2, or 3.**

Why is this? That's where the four parts come in. It has to do with what is known as the [Goldbach Conjecture](https://en.wikipedia.org/wiki/Goldbach%27s_conjecture).

First of all, before we get to that, lets cover the unitary case. If a number actually is prime, then the answer is 1. I briefly considered for my own answer whether a single number can be considered to "sum" to itself, as that function might be viewed as an operation, by definition, on at least two numbers. This is exactly the sort of little pathological edge-case distraction I have a tendency to require an answer for. I landed on "yes, it's fine" and I'm not aware anyone else wasted much time on what I ultimately determined to be an ontological crisis of identity. Existential levity aside, I do think these considerations to be important in parsing a spec. In the real world it would definitely generate a note.

Back to the Goldbach Conjecture: when the number given is even, the answer is 2. This is a bold claim, and remains one of the great unproven theorems in mathematics. It simply states that any even number can be constructed by the sum of two primes. Unproven it may be, but despite the lack of rigor it is easy to verify on a case-by-case basis, by simply finding any pair that fit. This is the kind of challenge mathematicians and computer scientists jump at, and so verified it has been, for numbers up to 4 × 10<sup>18</sup>. Meaning for any number up to that point we can feel free to use it.

For odd numbers, the answer is either 2 or 3. Really this might be better stated that the answer is 3, but might be 2. Not helpful?  Ok, think about it this way: one quality of all primes greater than 2, which *is* prime, is that they can *not* be divisible by 2, or they would no longer be prime. Makes sense. This in turn means that they are all odd, every one. Now if you subtract an odd number from an odd number, you get an even number. And any even number can be constructed by the addition of two primes. So any odd number can be constructed by first subtracting any smaller odd prime, then from any two primes that add to the even remainder, for a total of 3. This roughly states what is known as [Goldbach's weak conjecture](https://en.wikipedia.org/wiki/Goldbach's_weak_conjecture).

Which brings us to our fourth case: You will notice that I needed to specify "any smaller odd prime" above. This is necessary because 2 is prime, and even. Subtracting an even number from an odd produces an odd result, which in turn might be prime itself. Another important aspect of primes is their general unpredictability; there is no pattern to where they pop up, in fact where they pop up might best be considered defined by the *absence* of pattern. When we apply the [sieve of Eratosthenes]((https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)), we systematically remove from consideration patterns of numbers, until all that is left is the holes, the voids that *don't* match. The upshot is that occasionally a number can be constructed by adding 2 and another prime; in this case, and only in this case, the answer for an odd number will be 2.


## the SOLUTIONS

Most everyone who grappled with the challenge worked, either implicitly or explicitly, with at least some of these ideas in one way or another. The field broke out into two basic forms.

### SYTEMATICALLY working through the FOUR CASES
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/alexander-pankoff/perl/ch-1.pl),
[**Andinus**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/andinus/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/athanasius/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/cheok-yin-fung/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/e-choroba/perl/ch-1.pl),
[**Javier Luque**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/javier-luque/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/jo-37/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/lubos-kolouch/perl/ch-1.pl),
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/walt-mankowski/perl/ch-1.pl),
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/wanderdoc/perl/ch-1.pl), and
[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/colin-crain/perl/ch-1.pl)

The systematic method chooses  one at a time in order of increasing complexity between the possible branches for outcomes, stopping when a solution is found.

* First the number is checked for primeness, and if it is the solution is 1 and the example is the number itself.

* Next the number minus 2 is checked for primeness, this being an example of an odd number and 2 to make a solution.

* For the third option the number is checked for evenness. If so, then as per Goldberg, the solution can be reported as 2, and either an example is calculated or just the 2 returned.

* In the final case the solution must contain 3 primes. To calculate this, some prime, generally the largest, is subtracted from the number, then a pair of primes is computed to compose the remainder, to make the triplet.

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/athanasius/perl/ch-1.pl)

provides a particularly clear example of this method.

```perl
if    (is_prime($N))                                    # Observation (3)
{
    @primes = $N;
}
elsif ($N % 2 == 0)                                     # Observation (4)
{
    @primes = find_Goldbach_partition($N);
}
elsif (is_prime($N - 2))                                # Observation (5.1)
{
    @primes = (2, $N - 2);
}
else                                                    # Apply Strategy (2)
{
    my $prev = prev_prime($N);
    @primes  = (find_Goldbach_partition($N - $prev), $prev);
}

```

They also provide us an extensive writeup of the method which I encourage people to read, well annotated with sources. Really nicely done. And I do like sourced work.

It's worth noting that the directives only asked for the *number* of solutions, rather than requiring them to be produced. As such, the solution can be quite simple, as shown here by

[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/lubos-kolouch/perl/ch-1.pl)

```perl
sub get_nr_primes {
    my $what = shift;

    # if the number is prime, we need just 1 number to represent it
    return 1 if is_prime($what);

    # if the number is even, we need 2 primes thanks to Goldbach's conjecture
    return 2 if $what % 2 == 1;

    # if the number - 2 is prime, return 2
    return 2 if is_prime($what - 2);

    # if the number -3 is prime, return 2 (3 and the prime)
    return 2 if is_prime($what - 3);

    # otherwise return 3 - it is 3 and 2 primes forming $what - 3 thanks to
    # Goldbach's conjecture
    return 3
}
```

Several people came to this conclusion, which I agree is a fair and correct interpretation of the directives. An interesting variant of this is provided by

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/jo-37/perl/ch-1.pl)

who gives us a little trick with `goto` to silently slip in a bit of extra code warning us on the potential failure of the Goldbach conjecture.

```perl
sub num_prime_summands {
    my ($n) = @_;            		# keep @_
    $_[1] = 2;            			# provide default retcode

    return 0 if $n < 2;            	# not a sum of primes
    return 1 if $n == 2;            # 2 is prime
    goto &assure if $n % 2 == 0;    # Goldbach's conjecture
    return 1 if is_prime $n;        # $n is prime
    return 2 if is_prime $n - 2;    # $n - 2 is prime

    $_[1]++; goto &assure;            # Else: $n minus any odd prime is even,
                					# where Goldbach's conjecture is
                					# applied again.
}

# Warn about results that cannot be assured.
sub assure {
    my ($n, $r) = @_;
    warn "The result is not assured!\n" if $n > 4e18;

    $r;
}
```

I find this technique intriguing if not obviously, terribly useful. I can imagine, though, a case where a dispatch table may redirect to one of a number of places, but in the end all roads lead to the same common piece of code to execute before returning.

Back the task at hand, others chose verbosity over brevity, and decided to calculate all possibilities within the number of primes found and report every one, as demonstrated by

[**Andinus**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/andinus/perl/ch-1.pl)

```perl
say $input and exit 0 if is_prime($input) == 1;

if ($input % 2 == 0) {
    foreach my $i (2 ... $input / 2) {
        my $diff = $input - $i;
        say "$i + $diff"
            if is_prime($i) and is_prime($diff);
    }
} elsif (is_prime($input - 2)) {
    say "2 + $input";
} else {
    foreach my $i (2 ... ($input - 3) / 2) {
        my $diff = $input - 3 - $i;
        say "3 + $i + $diff"
            if is_prime($i) and is_prime($diff);
    }
}

```

### trying PROGRESSIVE COMPLEXITY
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/duncan-c-white/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/perlboy1967/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/pete-houston/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/ulrich-rieke/perl/ch-1.pl)

The next-most popular method didn't need to explicitly rely on the conjecture, but because of the nature of the solution space, can resolve itself nearly as quickly. In this method the entire set of combinations of a given length is searched in order of increasing complexity, generally but not exclusively using a module like `Algorithm::Combinatorics`.  If the algorithm is stopped after the first hit it's reasonably efficient, because all solutions only require a combination of 1, 2, or 3 primes. However if left to compute all solutions of any length up to N/2 (composing the number with only 2s, the maximal way to do it), the method does blow up in factorial time. So, you know, don't do that. You already got the answer. Some people just want it all. *(shakes head)* You know who you are.

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/perlboy1967/perl/ch-1.pl)

provides an example of the progressive method for us:

```perl
my $k = 1;

WHILE:
while ($k < scalar @primes) {
  printf "Using %d primes...\n", $k + 1;
  my $c = combinations(\@primes, $k);
  while (my $a = $c->next) {
    my $sum = sum(@$a);
    my $left = $N - $sum;
    if (exists $primes{$left} and !grep { $_ == $left } @$a) {
      @solution = (@$a, $N -$sum);
      last WHILE;
    }
  }
  $k++;
}
```

Note that while in theory the loop could search for combinations up to the size of `@prime`, in reality we know that a solution will always be found in from 1 to 3 iterations.

Here's another variation for you by

[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/ulrich-rieke/perl/ch-1.pl)


```perl
if ( isPrime ( $N ) ) {
  $line = "1 , $N is a prime number!" ;
}
else {
  my @primes = grep { isPrime( $_ ) } (2..$N) ;
  my $len = scalar @primes ;
  my $elements = 2 ;
OUTER : while ( $elements < $len + 1 ) {
      my $iter = combinations( \@primes, $elements ) ;
INNER :    while ( my $p = $iter->next ) {
        if ( findSum( $p ) == $N ) {
        $line = "$elements : " ;
        $line .= join( " + " , @$p ) ;
        $line .= " = $N" ;
        last INNER ;
        last OUTER ;
              }
      }
      $elements++ ;
    }
}
```

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/pete-houston/perl/ch-1.pl)

Here we have a twist on the progressive solution, as a sort of hybrid with the systematic versions. Pete works the possibilities: firstly "is it prime?" He then looks for 2 prime solutions with a lookup table, then three, using Math::Combinatorics. After that he bails with a exit message that of course will never run.

```perl
sub min_prime_sum {
    my $target  = shift;
    my @primes  = @{primes ($target)};
    my %uniques = map { $target - $_ => $_ } @primes;

    # Target is prime
    return ($target) if $uniques{0};

    # sum of 2 primes
    for my $try (@primes) {
        return ($try, $uniques{$try}) if $uniques{$try};
    }

    # sum of 3 primes
    require Math::Combinatorics;
    my @freqs = map { int min (2, $target / $_) } @primes;
    my $combinator = Math::Combinatorics->new (
        count      => 2,
        data       => \@primes,
        frequency  => \@freqs
    );
    while (my @multiset = $combinator->next_multiset) {
        my $sum = $multiset[0] + $multiset[1];
        return (@multiset, $uniques{$sum}) if $uniques{$sum};
    }

    # Don't see this happening!
    die qq#Goldbach says, "No".\n#;
}

```

### a LESS SUCCESSFUL solution

An approach that popped up more than once was to simply subtract out the largest prime less than a running total until nothing is left. This will indeed find sums for all numbers, but is deceptive in that it will not necessarily find the *smallest* number of primes required to do so. Specifically, there are some even numbers that result in 3-prime solutions, when 2-prime solutions exist. For example, the algorithm will find the following reduction for 98:

    98 = 89 + 7 + 2

when there are several shorter summations, such as

    98 = 79 + 19

It's deceptive again as some 2-prime solutions will appear, but only those where one of the primes happens to be the largest smaller prime. The unpredictability of the prime sequence, however, means that that option can never be assured.

## on the SUBJECT of PRIMENESS

Calculating primes number sequences wasn't a prescribed aspect of the challenge, and members went about this part of the task in a wide variety of ways. There are several modules that provide prime number services. The impressively capable `Math::Prime::Util` was by far the popular choice, although `Math::Prime::XS` did pop up more than once.

Many rolled up their own functions, such as

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/colin-crain/perl/ch-1.pl)

```perl
sub make_prime_list {
## creates a list of all primes less than or equal to a given number
    my $max = shift;
    my @output = (2);
    CANDIDATE: for(  my $candidate = 3;  $candidate <= $max;  $candidate += 2  ) {
        my $sqrt_candidate = sqrt( $candidate );
        for(  my $test = 3; $test <= $sqrt_candidate; $test += 2  ) {
            next CANDIDATE if $candidate % $test == 0;
        }
        push @output, $candidate;
    }
    return \@output;
}
```

This isn't the first time I've used this for the challenges, and it moves and evolves as time goes by. I like this particular bit of code, as it's acquired a few nice little optimizations along the way.

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/adam-russell/perl/ch-1.pl) even just produced a hard-coded list of the first 1000 primes. Really no reason not to on a proof-of-concept.




## UNIQUE approaches, INTERESTING tidbits and UNUSUAL constructions



[**Myoungjin Jeon**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/jeongoon/perl/ch-1.pl)

Jeon gives us a unique systematic degeneration to find every solution to the summation. He descends through a list of primes smaller than the target, shifting off the largest value, then finding solutions for all valid multiples of that number, recursing to complete the combinations for the remainder. Its a novel approach, and quite thorough. Here's the recursive routine:

```perl
sub combiPrimeSum { # dejavu !
    my $S   = shift;
    my @RPN = ( @_ == 0 ? reverse pnumbers( $S ) : @_ );
    my $fp  = shift @RPN;

    defined $fp or ( warn "no prime number found", return () );

    my @result;
    my $maxNop = int $S / $fp;
    for my $nop ( reverse 0 .. $maxNop ) {
        my $remainer = $S - $fp * $nop;
        my @pnums = ( $fp ) x $nop;
        if ( $remainer > 0 ) {
            next if @RPN == 0;
            push @result, map { [ @pnums, @$_ ] } combiPrimeSum( $remainer, @RPN );
        }
        else { push @result, [ @pnums ] }
    }
    @result;
}
```

[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/walt-mankowski/perl/ch-1.pl)

uses a varient on the sytematic approach, using Algorithm::Combinatorics to compute all combinations of primes less than the given target, selecting **choose 2** combinations for even numbers, and **choose 3** combinations for odd. He gets around the possibility that an odd number can sometimes be constructed with 2 numbers by adding 0 to the list for combining, then removing it before counting the primes. Very sneaky! I like it.

```perl
sub sums_goldbach($s, $k, @primes) {
    my @solutions;
    my $best = 1e300;

    my $iter = combinations_with_repetition([0, @primes], $k);
    while (my $p = $iter->next) {
        my @digits = grep(!/^0$/, $p->@*); # remove 0s
        next unless @digits; # ignore (0,0,0)
        next unless sum(@digits) == $s;
        if (@digits < $best) {
            @solutions = (join " + ", @digits);
            $best = @digits;
        } elsif (@digits == $best) {
            push @solutions, join " + ", @digits;
        }
    }
    return @solutions;
}

```


[**Yet Ebreo**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/yet-ebreo/perl/ch-1.pl)

First off, I'm going to throw a little whitespace into Yet's very nice construction, so that you might have a prayer of following it:

```perl
for (2..$N/2) {
       (1x$_)        !~ /^1?$|^(11+?)\1+$/
    && (1x($N - $_)) !~ /^1?$|^(11+?)\1+$/
    && say "$_ + ".($N - $_)." = $N";
}
```

"What on Earth is this monstrosity?" you might rightfully ask. Ahh, well, the driver here, that bit *(points)* well, that is a somewhat famous regular expression that matches prime numbers, of course. "Right. Sure it is. How does it work?" you might then respond, with a bit of side-eye. Well, glad you asked, and not surprised by the incredulity. The left hand side converts the number we are checking into base-1 notation, being a long string of 1s. The first part of the regex, `^1?$`, matches a single 1 or whitespace, and in doing so rejects those as not prime. It's the second option to match that does the really clever stuff.

The `(11+?)` matches one 1 plus one or more 1s, and this is the important part, while *minimally matching*. So rather than grabbing *all* the 1s at once, it starts with 11, then adds one or more instances of the capture, like (11)11, (11)1111 or (11)111111 et cetera. In decimal this matches 4,6,8 and so on. If none of these succeed, the parser then backtracks to look for the next-longest sequence of 1s, 111. This matches (111)111, (111)111111, (111)111111111 ... or put another way, 6, 9, 12 ... This continues until the capture is the size of the number being matched before the backtracker gives up. Have you noticed the pattern yet? Its a [sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)! Any number that matches get caught in the sieve, so to speak, and is not prime.

So if a candidate is prime, and the number minus the candidate is also prime, we have found a Goldbach pair that add up. Looping through up to one half the number will produce all such pairs before duplication.

As-is, the submission only finds pairs, and so only works for solutions with 2 primes. Modifying the code to check for pairs or triplets is actually not very hard at all, once you understand what's happening here. It can still be done in only one very long statement within the loop, and is left as an exercise to the interested. If you *really* want to know, or want a hint to what I came up with, drop me an email.

---

# TASK #2 › Word Search {#PWC076TASK2}
Write a script that takes two file names. The first file would contain word search grid as shown below. The second file contains list of words, one word per line. You could even use local dictionary file.
Print out a list of all words seen on the grid, looking both orthogonally and diagonally, backwards as well as forwards.

**Search Grid**

    B I D E M I A T S U C C O R S T
    L D E G G I W Q H O D E E H D P
    U S E I R U B U T E A S L A G U
    N G N I Z I L A I C O S C N U D
    T G M I D S T S A R A R E I F G
    S R E N M D C H A S I V E E L I
    S C S H A E U E B R O A D M T E
    H W O V L P E D D L A I U L S S
    R Y O N L A S F C S T A O G O T
    I G U S S R R U G O V A R Y O C
    N R G P A T N A N G I L A M O O
    E I H A C E I V I R U S E S E D
    S E T S U D T T G A R L I C N H
    H V R M X L W I U M S N S O T B
    A E A O F I L C H T O D C A E U
    Z S C D F E C A A I I R L N R F
    A R I I A N Y U T O O O U T P F
    R S E C I S N A B O S C N E R A
    D R S M P C U U N E L T E S I L

**Output**

    Found 55 words of length 5 or more when checked against the local
    dictionary. You may or may not get the same result but that is fine.


## solutions
The team produced 21 solutions to the word search problem. The submissions broke out into two camps, divided by frame-of-reference, so to speak. On the one hand we had folks manipulating the grid matrix to look for words in a simple way; in the other, movement through the grid was a simple action, focusing the complexity at the letters themselves, each a potential source for words radiating outwards.

These I call the row-by-row and letter-by-letter variants.

## working ROW by ROW, shifting DIRECTIONS
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/adam-russell/perl/ch-2.pl),
[**Alexander Pankoff**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/alexander-pankoff/perl/ch-2.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/athanasius/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/cheok-yin-fung/perl/ch-2.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/lubos-kolouch/perl/ch-2.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/mohammad-anwar/perl/ch-2.pl),
[**Myoungjin Jeon**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/jeongoon/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/perlboy1967/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/pete-houston/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/roger-bell-west/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/wanderdoc/perl/ch-2.pl)

The main method for going about things involved breaking down the two-dimensional grid into a group of individual, more managable letter sequences, and then searching those for words from the dictionary. The principle modus operandi is to manipulate the grid space so that all word searches are just forward, linear matches.

In the most common method amongst these, the entire grid is sectioned into lists of rows, forward, back, up, down and diagonally, then each row is searched to find any words present.

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/roger-bell-west/perl/ch-2.pl)

lays this systematic approach out very well. Here's an example of adding the vertical and diagonal letter vectors to what he calls the `@searchspaces` array:

```perl
foreach my $i ( 0..$y - 1 ) {
    my @q = map { $grid[$_][$i] } ( 0..$x - 1 );
    push @searchspaces, join( '', @q ); # vertical forward
    push @searchspaces, join( '', reverse @q ); # vertical backward
}

{
    # +x +y diagonals
    my $mxy = max( $x, $y )-1;
    foreach my $xi ( -$y + $minlen - 1..$x - $minlen + 1 ) {
        my @seq = map { [$xi + $_, $_] } grep { $xi + $_ >= 0 && $xi + $_ < $x && $_ < $y } ( 0..$mxy );
        if ( scalar @seq >= $minlen ) {
            my @q = map { $grid[$_->[0]][$_->[1]] } @seq;
            push @searchspaces, join( '', @q );
            push @searchspaces, join( '', reverse @q );
        }
    }
    # -x +y diagonals
    foreach my $xi ( -$y + $minlen - 1..$x - $minlen + 1 ) {
        my @seq = map { [$xi + $_, $y - $_] } grep { $xi + $_ >= 0 && $y - $_ >= 0 && $xi + $_ < $x } ( 1..$mxy );
        if ( scalar @seq >= $minlen ) {
            my @q = map { $grid[$_->[0]][$_->[1]] } @seq;
            push @searchspaces, join( '', @q );
            push @searchspaces, join( '', reverse @q );
        }
    }
}
```

Once complete, he uses `index` to search for each dictionary word within each `searchspace` array. This was a common idiom.


[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/lubos-kolouch/perl/ch-2.pl)
and
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/pete-houston/perl/ch-2.pl)
couldn't be bothered with all those lists, and just concactinated one giant string of letters and used `index` to search for each word in the dictionary. Here's an example of Pete methodically adding on some diagonals:

```perl
    # \ diag
    # lower diag
    for my $row (0 .. $rmax) {
        my $i = $row;
        for my $col (0 .. $cmax) {
            last if $i > $rmax;
            $grid .= $rows[$i++]->[$col]
        }
        $grid .= $c;
    }
    # Upper diag
    for my $col (1 .. $cmax) {
        my $i = $col;
        for my $row (0 .. $rmax) {
            last if $i > $cmax;
            $grid .= $rows[$row]->[$i++]
        }
        $grid .= $c;
    }
```

The diagonals are always the tricky bits.

But to take manipulation of the grid in an entirely different direction,

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/wanderdoc/perl/ch-2.pl)

reads each row of the grid normally, then rotates the entire grid with a transform and repeats the search. Rotating the grid 90° is rather intuitive, but the real masterwork in in rotating 45°. I had to write a quick little grid view routine just to prove to myself it works. Sure enough, but I had to see it to believe it. Check it out:

```perl
sub rotate_90
{
     my ($aref) = @_;
     my $rotated;
     for my $row_idx ( 0 .. $#$aref )
     {
          for my $col_idx ( 0 .. $#{$aref->[$row_idx]} )
          {
               $rotated->[$col_idx][$#$aref - $row_idx] =
                         $aref->[$row_idx][$col_idx];
          }
     }
     return $rotated;
}

sub rotate_45
{
     my $aref = $_[0];
     my $rotated;
     for my $row_idx ( 0 .. $#$aref )
     {
          for my $col_idx (0 .. $#{$aref->[$row_idx]})
          {
               push @{$rotated->[ sum($row_idx, $col_idx)]},
                    $aref->[$row_idx][$col_idx];
          }
     }
     return $rotated;
}
```

Ok, I can't not show this:

```
b
i l
d d u
e e s n
m g e g t
i g i n g s
a i r i m r s
t w u z i e c h
s q b i d n s w r
u h u l s m h o y i
c o t a t d a v o g n
c d e i s c e l n u r e
o e a c a h u p l s g i s
r e s o r a e e a s p h e h
s h l s a s b d s r a a t v a
t d a c r i r d f r t c s r e z
p g n e v o l c u n e u m a s a
u u i e a a s g a i d x o c r r
d f e d i t o n v t l f d i s d
g l m u a v g i t w i f i e r
i t l o a i r g i l e a c s
e s g r l u a u c c n i m
s o y a s r m h a y s p
t o m e l s t a u n c
c o s i n o i t a u
o e c s d i o b u
d n o c r o o n
h t a l o s e
b e n u c l
u r t n t
f p e e
f r s
a i
l
```

It ends up with the lines oddly reversed, but as we're reading forward and backwards this doesn't matter in the end. I'm impressed.


## work LETTER by LETTER through the grid
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/colin-crain/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/duncan-c-white/perl/ch-2.pl),
[**Javier Luque**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/javier-luque/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/laurent-rosenfeld/perl/ch-2.pl),
[**Neil Bowers**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/neil-bowers/perl/ch-2.pl),
[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/nunovieira220/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/sgreen/perl/ch-2.pl), and
[**Walt Mankowski**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/walt-mankowski/perl/ch-2.pl)

The other way to look at things was to leave the grid be, and move our focal point instead.

Every letter in the grid is potentially the start of a word, in any of the eight radial directions. In this method, a pair of iterators is used to sequentially progress through the grid letter by letter. At every stop, the surrounding radial directions are examined for words of increasing length starting at the point.


For [**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/colin-crain/perl/ch-2.pl),

to examine a letter location I created a set of eight little routines that calculate the letter vectors radiating outwards in the eight directions. The orthogonals are simple, the diagonals a bit less so. Here's a few examples:

```perl
    ## horz forward
    push $vec[0]->@*, $matrix->[$y][$_] for ($x..$width);

    ## vert up
    push $vec[3]->@*, $matrix->[$_][$x] for reverse (0..$y);

    ## diag down forward
    $i = $x;
    for ($y..$height) {         ## y to height index
        last if $i > $width;
        push $vec[4]->@*, $matrix->[$_][$i++];
    }
```

You get the idea. The individual vectors are stored in a list; then once that's done, the list is iterated through and converted into word candidates:

```perl
## turn vectors into strings $MINWORD letters or longer
for my $v (@vec) {
    next if @$v < $MINWORD;
    my $stem = join '', @$v[0..$MINWORD-2];
    push @words, map { $stem .= $_ } @$v[$MINWORD-1..@$v-1];
}
```

This wordlist can be checked against a lookup hash for the dictionary and we're done. Easy peasy.

But this, although methodical, is a bit repetitive. I wanted to use `map` but you can't exit early out of a `map` loop when we go out of bounds, so in the end I just left it be. Another way to construct the vectors is to just have a set of *offsets* that describe how we get, in each direction, to the next letter. There's no need for custom routines in each direction, if we just have a list of offset pairs to iterate through.

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/duncan-c-white/perl/ch-2.pl)

does exactly this:

```perl
my @dir =
(
    [-1,0],    # up (delta r,c)
    [-1,1], # ne
    [0,1],  # e
    [1,1],  # se
    [1,0],  # down
    [1,-1], # sw
    [0,-1], # w
    [-1,-1],# nw
);

foreach my $r (0..$rows-1)
{
    foreach my $c (0..$cols-1)
    {
        foreach my $dir (@dir)
        {
            my( $dr, $dc ) = @$dir;
            #say "starting at grid pos ($r,$c), dir ($dr,$dc)";
            my %foundword = findwordsonedir($grid,$isword,$r,$c,$dr,$dc);
            my @found = keys %foundword;
            next unless @found;
            @result{@found}=(1) x scalar(@found);
        }
    }
}
```

Neat, huh? But why stop there? The direction deltas have their own logic to them, that we can further unwind so as to generate them on the spot.

[**Neil Bowers's**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/neil-bowers/perl/ch-2.pl)

solution demonstrates this with a singular grace and aplomb:

```perl
sub scan_grid_for_words {
    for (my $row = 0; $row < $num_rows; ++$row) {
        for (my $col = 0; $col < $num_cols; ++$col) {
            foreach my $row_delta (-1, 0, 1) {
                foreach my $col_delta (-1, 0, 1) {
                    next if $row_delta == 0 && $col_delta == 0;
                    scan_line_for_words($row, $col, $row_delta, $col_delta);
                }
            }
        }
    }
}
```

When working the combinations we only need to remove the identity (0,0) from the mix, as that doesn't move anywhere.

## SHINY THINGS you CATCH out of the CORNER of your EYE

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/e-choroba/perl/ch-2.pl)

Choroba veers away from the pack in storing his dictionary file, chosing neither an array nor a hash, but rather a linked-list data structure known as a trie. In this construction words are stored as a linked list of letters, terminating in a null. A lookup is reduced to a series of small hash searches through valid letter combinations that stem the word, one for each letter added. When first considering th problem, I immediately thought myself that this would be the best way to store a massive dictionary, and I'm glad to see someone has gone out and done it. You need a pair of functions as accessors, to store and retrieve the entries in the structure:

```perl
sub put {
    my ($dict, @chars) = @_;
    if (@chars) {
        my $ch = shift @chars;
        $dict->{$ch} = {} unless exists $dict->{$ch};
        put($dict->{$ch}, @chars);
    } else {
        undef $dict->{""};
    }
}

sub get {
    my ($dict, $chars, $path) = @_;
    $path //= "";
    my $ch = $chars->[0] // "";
    my @r;
    @r = ($path . $ch)
        if exists $dict->{$ch} && exists $dict->{$ch}{""};
    push @r, get($dict->{$ch}, [ @$chars[1 .. $#$chars] ], $path . $ch)
        if @$chars;
    return @r
}
```

In the end I decided Perl's super fast hash lookups would work just fine. But this is a really interesting approach and I'd like to see how it compares in the end. Perl's hashes are, after all, extremely fast, and seemingly don't scale for time. The rest of his row-by-row solution exhibits the usual terse goodness. The tricky diagonal code is especially noteworthy.


[**Javier Luque**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/javier-luque/perl/ch-2.pl)

Using the letter-by-letter approach, Javier  came up with a clever little way of calculating his offsets:

```perl
# Next position calculations
$i-- if ($x == 1 || $x == 2 || $x == 8);
$i++ if ($x == 4 || $x == 5 || $x == 6);
$j-- if ($x == 6 || $x == 7 || $x == 8);
$j++ if ($x == 2 || $x == 3 || $x == 4);
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/jo-37/perl/ch-2.pl)

Jorg stores his dictionary as one giant, dynamically created, precompiled regular expression. Wow. Thats quite the regex.

It's essentially a letter-by-letter solution; of note he also solves the `map` problem for generating letter vectors with a little helper function to prevent running out of bounds on the diagonals. Once he has the letter vectors he can use the regex to match the entire dictionary against word combinations created with yet another mapping.

```perl
# Apply each indexing to the grid data and match the retrieved strings
# forward and reversed against the dictionary.
for my $index (indexing @grid, @{$grid[0]}) {
    print foreach map /($words)/g, map {($_, scalar reverse)}
        map {join '', map $grid[$_->[0]][$_->[1]], @$_} $index->();
}
```

Frankly I'm surprised it works as fast as it does, but work it does, and in a reasonable time. There's quite a bit to unpack here, and interested parties are encouraged to have a look through the source. He's given us copious notes longer than the code itself to guide you, which is very nice (and highly encouraged). It's quite artful. Beautiful.



[**Myoungjin Jeon**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/jeongoon/perl/ch-2.pl)

Jeon uses an interesting variation on the row by row method. After assembling his rows, he then subdivides each row into all possible words, then sorts the final list of candidates. The sorting is key when he then compares this list to a similarly sorted dictionary list, using a pair of incrementing indices within a single loop structure. The dictionary words are compared to the words in the list of candidates, but by using `cmp` and some clever index incrementation, the dictionary words are only compared to words lexicographically sorted *after* the given word, greatly limiting the search space as the two lists move forward. In this manner rather than making the brute force 1.2 billion comparisons from 120,000 or so words times 10,000 word candiate checks, the loop executes only about 250,000 times and finishes quite quickly. That's a nice little optimization! Here's the routine in question:

```perl
sub grepMatchedWordsRefWithSortedDataRef {
    my $dictWordsRef = $_[0];
    my $gridWordsRef = $_[1];

    my ( $di, $gi ) = ( 0, 0 );
    my @result;
    while ( $di < @$dictWordsRef and $gi < @$gridWordsRef ) {
        ::dprint "$$dictWordsRef[$di] vs $$gridWordsRef[$gi]\n";

        my $cmp = (lc $$dictWordsRef[$di]) cmp $$gridWordsRef[$gi];
        if ( $cmp == -1 ) { ++$di }
        elsif ( $cmp == 0 ) {
            push @result, $$dictWordsRef[$di];
            ++$di, ++$gi;
        }
        else { ++$gi }
    }

    \@result;
}
```

The two variables `$di` and `$gi` are the indices for the dictionary and grid words, respectively.


[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/perlboy1967/perl/ch-2.pl)

Niels has outdone himself again, crafting an elaborate output that not only lists the words found, but in which direction they were found. He does this by instead of just storing word matches in an output array, he stashes them is a complex data structure that he later turns into a proper report.

```
25 uniq words found in grid of length 5 or more (using dictionary containing 205058 words).

Word         | DLRBT | DLRTB | DRLBT | DRLTB |   HLR |   HRL |   VBT |   VTB
------------ + ----- + ----- + ----- + ----- + ----- + ----- + ----- + -----
align        |       |       |       |       |       |     1 |     1 |
alose        |       |       |       |     1 |       |       |       |
arose        |     1 |       |       |       |       |       |       |
broad        |       |       |       |       |     1 |       |       |     1
clove        |     1 |       |       |       |       |       |       |
cloven       |     1 |       |       |       |       |       |       |
constitution |       |     1 |       |       |       |       |       |

    snip...

Legend:
=======

Key   | Description
----- + ------------------------------------------
DLRBT | Diagonal (left to right and bottom to top)
DLRTB | Diagonal (left to right and top to bottom)
DRLBT | Diagonal (right to left and bottom to top)

    snip again...

```

I admire the dedication. I especially like the legend. Bravo, sir, bravo.

---

<br>

# BLOGS {#PWC076BLOGS}

***

**That's it for me this week, people!**

## But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*,
## then *RUN* *(dont walk!)* to the *WATERING HOLE*
## and *READ* these *BLOG* *LINKS*:

***( don't think, trust your training, you're in the zone, just do it ... )***

**Adam Russell**

 * [Perl Weekly Challenge 076](https://adamcrussell.livejournal.com/17985.html) ( *Perl* )

**Andinus**

 * [Challenge 076](https://andinus.tilde.institute/pwc/challenge-076/) ( *Perl* )

**Arne Sommer**

 * [Primal Words with Raku](https://raku-musings.com/primal-words.html) ( *Raku* )

**Cheok-Yin Fung**

 * [Sum of Individuals Gives Meaning - CY's Take on PWC#076](http://blogs.perl.org/users/c_y_fung/2020/09/cys-take-on-pwc076.html) ( *Perl* )

**Colin Crain**

 * [Wear a Wig to Play the Goldbach Variations!](https://colincrain.wordpress.com/2020/09/05/wear-a-wig-to-play-the-goldbach-variations/) ( *Perl & Raku* )

**Javier Luque**

 * [PERL WEEKLY CHALLENGE &#8211; 076](https://perlchallenges.wordpress.com/2020/09/04/perl-weekly-challenge-076/) ( *Perl & Raku* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 76: Letter Grid](http://blogs.perl.org/users/laurent_r/2020/09/perl-weekly-challenge-76-letter-grid.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 76: my last PWC (for a while) Task 1](https://fluca1978.github.io/2020/08/31/PerlWeeklyChallenge76.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 76: my last PWC (for a while) Task 2](https://fluca1978.github.io/2020/08/31/PerlWeeklyChallenge76.html#task2) ( *Raku* )

**Mohammad S Anwar**

 * [BLOG: The Weekly Challenge #076](https://perlweeklychallenge.org/blog/weekly-challenge-076/) ( *Perl & Raku* )
 * [Perl Weekly Challenge - 076 (Task #1: Perl) - YouTube](https://www.youtube.com/watch?v=SYMNx0FrJTk) ( *Perl & Raku* )

**Neil Bowers**

 * [Solving word search puzzles in Perl](http://neilb.org/2020/09/03/wordsearch.html) ( *Perl* )

**Roger Bell_West**

 * [RogerBW&#39;s Blog: Perl Weekly Challenge 76: prime sum and word search](https://blog.firedrake.org/archive/2020/09/Perl_Weekly_Challenge_76__prime_sum_and_word_search.html) ( *Perl & Raku* )

**Shahed Nooshmand**

 * [The Weekly Challenge: week 76](https://rafraichisso.ir/2020/09/04/pwc-76) ( *Raku* )

**Simon Green**

 * [Perl Weekly Challenge 076](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-076/sgreen/README.md) ( *Perl* )

**Walt Mankowski**

 * [Perl Weekly Challenge #76 - Walt Mankowski](http://www.mawode.com/blog/blog/2020/09/04/perl-weekly-challenge-76/) ( *Perl* )
