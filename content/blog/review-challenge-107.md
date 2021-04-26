
---
author:       Colin Crain
date:         2021-04-26T00:00:00
description:  "Colin Crain › Perl Weekly Review #107"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #107"
image:        images/blog/p5-review-challenge-107.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-106/).* )

Welcome to the Perl review for **Week 107** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

---

### Why do we do these challenges?

I suppose any answers to that would be as wide ranging and varied as the people who choose to join the team. One thing is clear: it's not a competition, and there are no judges, even if there is a "prize" of sorts. About that -- I think of it more as an honorarium periodically awarded to acknowledge the efforts we make towards this strange goal. So there's no determination to find the *fastest*, or the *shortest*, or even, in some abstract way, the *best* way to go about things, although I'm certain the individuals have their own aspirations and personal drives. As Perl is such a wonderfully expressive language, this provides quite a bit of fodder to the core idea of TMTOWTDI, producing a gamut of wonderfully varied techniques and solutions.

Even the tasks themselves are often open to a certain amount of discretionary interpretation. What we end up with is a situation where each participant is producing something in the manner they find the most interesting or satisfying. Some team members focus on carefully crafted complete applications that thoroughly vet input data and handle every use case they can think up. Others chose to apply themselves to the logic of the underlying puzzle and making it work in the most elegant way they can. Some eschew modules they would ordinarily reach for, others embrace them, bringing to light wheels perhaps invented years ago that happen to exactly solve the problem in front of them today.

I've been considering this question for some time and have found one binding commonality between all of us solving these challenges each week, in that however we normally live our lives, the task in front of us more than likely has nothing to do with any of that . And I think this has great value. We all do what we do, out in the real world, and hopefully we do it well. The Weekly Challenge provides a opportunity to do something germane to that life yet distinctly different; if we only do the things we already know how to do we only do the same things over and over. This is where the "challenge" aspect comes into play.

So we can consider the Weekly Challenge as providing a problem space outside of our comfort zone, as far out from comfort as we wish to take things. From those reaches we can gather and learn things and bring what we want back into our lives. Personally, I think that's its greatest value of all.

---

Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due. And that's why I'm here, to try and figure out how to do that.

Let's have a look and see what we can find.

---

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-107/) or the summary [**recap**](/blog/recap-challenge-107/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC107TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC107TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC107BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC107TASK1}

# Self-descriptive Numbers
*Submitted by: Mohammad S Anwar*<br>
Write a script to display the first three self-descriptive numbers. As per wikipedia, the definition of Self-descriptive Number is

In mathematics, a self-descriptive number is an integer m that in a given base b is b digits long in which each digit d at position n (the most significant digit being at position 0 and the least significant at position b−1) counts how many instances of digit n are in m.

**For example:**

1210 is a four-digit self-descriptive number:
```
    position 0 has value 1 i.e. there is only one 0 in the number
    position 1 has value 2 i.e. there are two 1 in the number
    position 2 has value 1 i.e. there is only one 2 in the number
    position 3 has value 0 i.e. there is no 3 in the number
```

**Output**
```
    1210, 2020, 21200
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/abigail/perl/ch-1.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/adam-russell/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/athanasius/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/cheok-yin-fung/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/colin-crain/perl/ch-1.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/dave-jacoby/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/e-choroba/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/polettix/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/jaldhar-h-vyas/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/jo-37/perl/ch-1.pl),
[**Lance Wicks**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/lance-wicks/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/laurent-rosenfeld/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/mohammad-anwar/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/perlboy1967/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/pete-houston/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/sgreen/perl/ch-1.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/stuart-little/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/ulrich-rieke/perl/ch-1.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/wlmb/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/wanderdoc/perl/ch-1.pl)

With those returning from PWC 043:

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/adam-russell/perl/ch-1.pl)
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/colin-crain/perl/ch-1.pl)
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/dave-jacoby/perl/ch-1.pl)
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/e-choroba/perl/ch-1.pl)
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/jaldhar-h-vyas/perl/ch-1.pl)
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/laurent-rosenfeld/perl/ch-1.pl)
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/roger-bell-west/perl/ch-1.pl)
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/wanderdoc/perl/ch-1.pl)


I am continually impressed by the wide range of responses that arise from these challenges; how a seemingly simple question can evoke such a breadth of interpretations. Of course there's variety in the nature of the questions themselves, in that some will be more precise than others, and it makes sense that the more open-ended of these specifications will produce a great deal of variation in their product. What's more surprising is that even when the task appears simple and well-defined, sometimes the results can and will end up all over the map.

Those responding to the call can range from pedantically literal textualists to those who, insufficiently challenged with the task as given, feel the freedom to find a question they would prefer to answer and simply provide a solution to that instead. As the first group can get quite argumentative, I much prefer the company of the second. After all, these are not court cases we are making, and the descriptions laid out are not contractual work orders. They're ideally simple puzzles for a wide audience. Like the humor in a good children's show, they should be able to be viewed on multiple levels of complexity simultaneously, for both the more and less experienced alike. I find it's that multitimbral resonance that makes for a really interesting question, and the range of responses from the members work together to flush out the corners, seeing what's there. And that's why we're here, isn't it? To play around and see what happens? Well most of us, anyway. YMMV.

For this week we had two short descriptions to the task: "Write a script to display the first three self-descriptive numbers", and "Write a script to list methods of a package/class". Simple, right? Oh, you sweet summer children ;)

There were 23 submissions for the first task this past week. This task was notable as being a near-repeat of a previous challenge, PWC 043 task 2. The cause was just an unfortunate mix-up, nothing to make too much of, but it produced eight submissions from members who responded to both — a little over one third of the total. Sometimes these submissions were exactly the same, sometimes updated a bit, sometimes completely reworked. We'll look further into this unique situation.

## looking at a BUNCH OF NUMBERS
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/dave-jacoby/perl/ch-1.pl),
[**Lance Wicks**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/lance-wicks/perl/ch-1.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/mohammad-anwar/perl/ch-1.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/pete-houston/perl/ch-1.pl), and
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/sgreen/perl/ch-1.pl)

One of the advantages of being able to skry the future in this challenge — we know the answers required are 1210, 2020, and 21200 — is that the numbers aren't overly large. Even the crudest brute force application to five digits draws from a field of 99,999 candidates, and this goes down to 21200 of course if we stop looking after we've found three values.

Computationally that's small change — if we properly weigh in the unnecessary cost of over-optimizing, the "best" strategy might well be to loop over that list and be done with it, throwing away the values that don't check out.


[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/mohammad-anwar/perl/ch-1.pl)

A simple incrementing value provides Mohammad with his candidates, which are then passed to a `self_descriptive()` validation routine. Within it, the digits of the number are first split into an array, then the individual elements are used to populate a frequency hash, also known as a "bag". A second pass across the indices of the digit array will reveal if any do not match their found frequency, disqualifying the number from self-description.

```perl
    sub self_descriptive {
        my ($n) = @_;

        my @n = split //, $n;
        my %m;
        map { $m{$_}++ } @n;

        my $i = 0;
        while ($i < @n) {
            return 0 unless (($m{$i} //= 0) == $n[$i]);
            $i++;
        }

        return 1;
    }
```

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/sgreen/perl/ch-1.pl)

Simon's version of the technique follows much the same course, only he extracts the digit values using `substr`, storing the frequencies in an array. This array is then iterated through with the indices used to examine the numeric string positions to compare.
```perl
    sub _is_self_descriptive {
        my $n = shift;
        my $l = length($n) - 1;

        # Get a count of each character
        my @char = (0) x 10;
        ++$char[ substr( $n, $_, 1 ) ] foreach ( 0 .. $l );

        foreach my $pos ( 0 .. $l ) {
            # See how many characters we expect
            my $expect = substr( $n, $pos, 1 );

            # Exit if the numbers don't match
            return if $expect != $char[$pos];
        }

        # It's a self descriptive number
        return 1;
    }
```

[**Lance Wicks**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/lance-wicks/perl/ch-1.pl)

Lance bring us his work today in a module, [`Descriptive.pm`](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/lance-wicks/perl/lib/Descriptive.pm).

When looping over the values 1 t0 30000, he checks his numbers for self-description in a very clever way. Inside his `is_self_desc` validation routine the  number is matched, using a regular expression, for each of the successive digits 0 through 9, globally. This match produces a list of results when called in list context, and this list, when called in scalar context returns its length. The construct that achieves this cleverness, `=()=`, is politely called the [Saturn operator](https://metacpan.org/pod/distribution/perlsecret/lib/perlsecret.pod#Goatse).

Here the result is a tally of the count of each digit in the number, which is concatenated into numeric string describing the digits in the number. If this assembled value is the same as the original we have a self-descriptive number. So no comparing individual digits is required for the final step, only a comparison with `==`.

Note for bases less than 10 there is no need to explicitly cast the number into its base, as we are only considering numbers the length of the base, and the presence of any "out-of-base" digits automatically disqualifies the value from being self-descriptive. For example, in a 5-digit number the presence of a "6" would mean there are 6 of some digit, which is impossible under the definition.

```perl
    sub is_self_desc {
        my ($self,$num) = @_;

        my $description;
        for my $int (0..9) {
            $description .= () = $num =~ /$int/g;
        }
        my $length_of_num = length $num;

        $description = substr $description, 0, $length_of_num;

        return 1 if $description == $num;
        return 0;
    }
```

[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/dave-jacoby/perl/ch-1.pl)

Dave completed the task in PWC 043, and here returns with a different, simpler algorithm of construct the three first values in the sequence, counting upwards and evaluating each candidate in turn for self-description.

For the validation check, he first scans the number for its highest digit, and if it's greater than digit length it is immediately disqualified.

> There’s one optimization I added to reduce the rabbit holes I had to chase into: I found the length of the number and the highest digit in the number, and if that high digit is greater than the size, it’ll never be self-descriptive, so I exit there.

After this check an array is compiled with the frequencies of each digit stored in the index slot for its value. After using a `map` to fill in undefined elements with 0, this array is joined to create a number, which can them be compared to the original to see whether they match.

```perl
    while ( scalar @self_desc < 3 ) {
        if ( is_self_descriptive($n) ) {
            push @self_desc, $n;
            say join ' ', @self_desc;
        }
        $n++;
        exit if $n > 1_000_000_000;
    }

    sub is_self_descriptive ( $n ) {
        my $max = max split m{}, $n;
        my $l   = -1 + length $n;
        return 0 if $max > $l;

        my @arr;
        for my $i ( 0 .. -1 + length $n ) { $arr[$i] = 0 }
        for my $i ( split m{|}, $n ) {
            $arr[$i]++;
        }
        my $r = 0 + ( join '', map { $_ || 0 } @arr );
        return 0 if $r != $n;
        return 1;
    }
```

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/pete-houston/perl/ch-1.pl)

Pete offers us  a nice compact, succinct solution. Iterating upward in an open-ended manner, he gives us a new technique: he first throws out values where the sum of the digits does not equal the number of digits. As the frequency counts are for the number of digits with a specific value, the sum of all the frequencies must allow for every digit to be counted, so this must be true.

After dividing up the candidate number into an array of digits, a bag is made from the elements. Then he only has to iterate over the array indexes to verify they are the same as the collected bag counts for that index number.

```perl
    my %cinit = map { $_ => 0 } 0 .. 9;

    OUTER: while ($#sdn < 2) {
        $x++;
        my @digits = split //, $x;
        next unless @digits == sum (@digits);
        my %count = %cinit;
        $count{$_}++ for @digits;
        for my $i (0 .. $#digits) {
            next OUTER unless $count{$i} == $digits[$i];
        }
        push @sdn, $x;
    }
```


## TARGETED application of FORCE
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/duncan-c-white/perl/ch-1.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/jaldhar-h-vyas/perl/ch-1.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/laurent-rosenfeld/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/perlboy1967/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/roger-bell-west/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/ulrich-rieke/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/wanderdoc/perl/ch-1.pl)

On the other hand, the brute force applied need not be completely indiscriminate; we don't need to look over the full range. For example, the search space is considerably constricted by the fact that we are only looking for up to *b*-digit numbers in base *b*: we only have 4 binary numbers available, 27 ternary numbers, etc. Or in other words <i>b</i><sup><i>b</i></sup> values for each base. So for *b* < 6 there are only

2<sup>2</sup> + 3<sup>3</sup> + 4<sup>4</sup> + 5<sup>5</sup> = 3412

values to examine to completely search the space of 5 digits or less. We also note, again, that we can stop early after finding the third candidate.

But wait, there's more! Even though the subject of leading zeros on the numbers is not well defined, in practicality the case is rendered moot as it is self-disqualifying. A leading 0 would signify that there ar no zeros in the number, which the presence of the leading 0 itself would falsify. So the real number of examples for each base is now reduced to (<i>b</i>-1)<i>b</i><sup><i>(b</i>-1)</sup>, giving us only

1 × 2<sup>1</sup> + 2 × 3<sup>2</sup> + 3 × 4<sup>3</sup> + 4 × 5<sup>4</sup> = 2712 maximum values to check in 5 digits or under.

There are other interesting properties of self-defining numbers that can be used to further cull the candidate pool, in that a number must be divisible by its base and by the sum of its digits. These techniques also found their way in to the submissions.


[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/perlboy1967/perl/ch-1.pl)

Niels gives us a main logic loop and two routines, `incBaseNnumber()` to increment the candidate value and `isSelfDescriptiveBaseNnumber()` to validiate it. There a lot going on with these. In the main body a loop is set up to generate all numbers within a specific base up to the length of that base, then move on to the next. The numbers themselves are constructed b-length arrays of digits within the base. By using function prototypes, he can make one array of 0s of the proper length and then keep altering the digits in-place in this same array. One side-effect from this method is that the "numbers" are incremented left-to-right: 1000, 2000, 3000, 0100, 1100, 2100, 3100, 0200 ... As the entire set of results for each base is searched, however, all values will be examined, whatever the order.

```perl
    sub incBaseNnumber ($\@) {
      my ($b,$arDigits) = @_;

      my ($overflow,$d,$dMax) = (0,0,scalar(@$arDigits));

      while (!$overflow) {
        $arDigits->[$d] = ($arDigits->[$d] + 1) % $b;
        last if $arDigits->[$d++];
        if ($d >= $dMax) {
          push(@$arDigits,1);
          $overflow++;
        }
      }

      return $overflow;
    }
```

As the number is constructed as an array of digits, the validation can be done in a single costruct, using `grep` to count the occurrences of each digit and comparing it to the value found at that index.

```perl
  for my $d (0 .. $b - 1) {
    $checkDigit[$d] = scalar(grep { $_ == $d } @$arDigits) == $arDigits->[$d];
  }
```

[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/jaldhar-h-vyas/perl/ch-1.pl)

Jaldhar is returning to the task from his first efforts in PWC 043, this time chosing a brute force approach to look for the first small values. In a general sense these brute force approaches will bog down for the larger bases, but for these early, smaller, results they are fast and straightforward.

Jaldhar calculates sequences of successive numbers in the two bases 4 and 5 to construct his candidate values, then employs a unique sieve: to be a self-descriptive number a number must be a [Harshad number](https://en.wikipedia.org/wiki/Harshad_number), that is, that the number must be evenly divisible by the sum of its digit values.

```perl
    sub is_harshad {
        my ($n) = @_;
        my $total = 0;
        my @digits = split //, $n;
        for my $digit (@digits) {
            $total += $digit;
        }

        return  @digits == $total;
    }
```

Using this filter he only needs to check the digit counts against their positions for 61 numbers to find the three requested values.


[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/laurent-rosenfeld/perl/ch-1.pl)

Laurent starts by only counting through the pool of numbers of the correct length in each base, which for bases 4 and 5 are much smaller than their base-10 counterparts. He then prunes the tree further with one more big optimization, that logically the last digit must be 0. This follows from the fact that a self-descriptive number must be a multiple of its base: a proof by negation is [provided in the Wikipedia article](https://en.wikipedia.org/wiki/Self-descriptive_number#Properties). The upshot being that the search space can further be reduced by examining each candidate with a regular expression to see whether it ends in 0. This does not lop off an order of magnitude in base 10 of course, as we are working in maximally base 5. So a 4-5 fold reduction, reducing his final verification step to 216 values.


```perl
    my @digits = split //, $num_in_b;
    my $sum = 0;
    $sum += $_ for split //, $num_in_b;
    next if $sum != $base;
    my $success = 1;
    for my $rank (0..$base - 1) {
        my $nb_digits = $digits[$rank];
        my $num_occ = $num_in_b =~ s/$rank/$rank/g;
        if ($num_occ != $nb_digits) {
            $success = 0;
            last;
        }
    }
    if ($success) {
        say "Number in base $base: $num_in_b; decimal: $num" ;
        $count++;
        return if $count >= MAX;
    }
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/roger-bell-west/perl/ch-1.pl)

Roger cut straight to the chase, making sure his candidates end in 0 by incrementing by 10. Sometimes the smallest things can make a world of difference.

```perl
    sub sdn {
      my $count=shift;
      my @r;
      my $n=10;
      while (scalar @r < $count) {
        my @ns=map {$_+0} split '',sprintf('%d',$n);
        my @d=(0) x 10;
        map {$d[$_]++} @ns;

        my $sd=1;
        foreach my $i (0..$#ns) {
          if ($d[$i] != $ns[$i]) {
            $sd=0;
            last;
          }
        }
        if ($sd && $#ns<9) {
          foreach my $i ($#ns+1..9) {
            if ($d[$i] != 0) {
              $sd=0;
              last;
            }
          }
        }
        if ($sd) {
          push @r,$n;
        }
        $n+=10;
      }
      return \@r;
    }
```


## ASSEMBLING the numbers from PARTS
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/colin-crain/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/e-choroba/perl/ch-1.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/wlmb/perl/ch-1.pl)

The definition of a sel-descriptive number is representational more than it is mathematical, depending on the specific placement of certain digits in the nuber considered as a string.

As opposed to examining candidate numbers for self-description, various schemes were presented to directly construct valid numbers from their component parts.

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/e-choroba/perl/ch-1.pl)

Choroba's offering was not to cut-and-paste his original submission from the previous challenge, but rather to call it directly:

```perl
    exec '../../../challenge-043/e-choroba/perl/ch-2.pl'
```

I am amused and this is fine. This *was* explicitly stated to be ok, after all. But what does *that* file do?

The description for challenge 043 task 2 asks us to: "Write a script to generate self-descriptive numbers in a given base." This being a more general request than for the current task, we complied with more general solutions; here Choroba's script provides numbers up to base-36, written in either the original base or base-10. As it works out, every solution base-7 and up follows a set pattern of digits in that base, and so rather than calculating the result the various parts can be assembled for each base. This formula is: with digits in the relative base, concatenate the value of the base minus 4, the digits "21", a string of 0s the length of the base minus 7, and the digits "1000".

 For conversion into base-10 the module `Convert::AnyBase` does the work.

```perl
use Convert::AnyBase;

my %irregular = (
    1 => undef,
    2 => undef,
    3 => undef,
    4 => 1210,
    5 => 21200,
    6 => undef,
);
sub self_descriptive_number {
    my ($base) = @_;
    my $set = join "", ('0' .. '9', 'A' .. 'Z')[0 .. $base - 1];
    my $convert = @_ == 1
        ? sub { $_[0] }
        : sub { 'Convert::AnyBase'->new(set => $set)->decode($_[0]) };

    if (exists $irregular{$base}) {
        die "No self descriptive number in base $base.\n"
            unless $irregular{$base};

        return $convert->($irregular{$base})
    }

    return $convert->(join "",
                      map $_ > 9 ? chr 55 + $_ : $_,
                      ($base - 4, 2, 1, (0) x ($base - 7), 1, (0) x 3))
}
```

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/colin-crain/perl/ch-1.pl)

In the last line of Choroba's solution we can see the parts being assembled:

```perl
    ($base - 4, 2, 1, (0) x ($base - 7), 1, (0) x 3))
```

For my own version I implemented the string-wise approach detailed above, and also a similar mathematical variant to the same assembly. This produces the numbers in base-10 for each base, which then need to be converted into their respective bases to see their self-descriptive nature. The formula is the first line, and you can see the relationship:

```perl
    my $dec = ($base-4)*($base**($base-1)) + 2*($base**($base-2)) + $base**($base-3) + $base**3;
    my @alphanum = (0..9, 'A'..'Z');
    my $out = "";
    my $rem;
    while ( $dec > 0 ) {
        ($dec, $rem) = (int( $dec/$base ), $dec % $base);
        $out = $alphanum[$rem] . $out;
    }
    return $out;
```

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/wlmb/perl/ch-1.pl)

> I represent [the number] as an array of its digits. For each position the lowest bound is the number of previous apparitions of the corresponding digit. The upper bound is determined by the base and the current sum of digits.

Luis brings us a unique manner of constructing a number from an array of digits, restraining the incrementation of the values at various positions by not only the valid digits in the base but also by the fact that the sum of the digits must equal the base. Thus the third position filled in a base-5 number can not be larger than 3, as the two previous positions can have a minimum value of 1, totaling 5. Further, if this value is 3 then the remaining positions must be 0. The positions are mostly filled and incremented with a recursive `try` routine, leading to an out-of-order sequence.

```perl
    sub try {
        my ($current,$position,$base, $sum, $had)=@_;
        if($position==$base-1){
            push @results, $current if check($current);
            return;
        }
        ++$position;
        for my $digit($had->[$position]..$base-$sum){
            my $have=[@$had]; # copy
            $have->[$digit]++;
            try([(@$current,$digit)], $position, $base, $sum+$digit, $have);
        }
    }
```

## MATHEMATICAL FORAYS
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/athanasius/perl/ch-1.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/cheok-yin-fung/perl/ch-1.pl), and
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/jo-37/perl/ch-1.pl)

Defined relationships between numerical values and their digital representation blur the line between constructed, string-like assembly and mathematical formulation, as presented in my solution above. However some submissions really delved into combinatorics and number theory to find their solutions.

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/athanasius/perl/ch-1.pl)

The "pitbull of Nicaea" begins with a directed mathematical analysis for the numbers, drawing and summarizing from several cited sources. The analysis concludes:

> (8) "This means, other than the first digit, the set of all other non-zero
digits consists of several ones and 1 two." (Khovanova)

On the basis of this, the outline for an algorithm is constructed:

>Candidate solutions in bases 2 up to 10 are constructed as follows:
- For each possible value of x\_0, the number of 1 digits in m is calculated and
  then an array of length base-minus-2 is built from these 1-digits together
  with the required complement of 0-digits. The array is sorted with zeros
  preceding ones, i.e., in lowest numerical order.
- A 2-digit is placed at each possible position in m.
- The remaining positions are filled from the array of zeros and ones, which is
  permuted until it returns to its original order.
- In this way, every possible combination of x_0, one "2", and the required
  number of ones and zeros is produced.
- Each candidate solution is tested to determine whether it meets the require-
  ments of a self-descriptive number.

```perl
    BASE: for my $base (2 .. $MAX_BASE)
    {
        for my $x0 (1 .. $base - 1)          # First digit, the "0" digit count
        {
            my $ones = $base - $x0 - 2;

            if ($ones >= 0)
            {
                my @binaries = ((0) x $x0, (1) x $ones);

                do
                {
                    for my $i (reverse( 1 .. $base - 1 ))  # Index of "2" digit
                    {
                        my $m  = $x0;
                           $m .= $binaries[ $_ ] for 0 .. $i - 2;
                           $m .= 2;
                           $m .= $binaries[ $_ ] for $i - 1 .. $#binaries;

                        if (is_self_desc( $m ))
                        {
                            push @solutions, $m;
                            last BASE if scalar @solutions == $TARGET_SOLNS;
                        }

                    }

                } while (NextPermuteNum( @binaries ));
            }
        }
    }
```

The source contains the full writeup. It's a good read.

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/cheok-yin-fung/perl/ch-1.pl)

CY applies combinatorics to the task, coming up with a very elaborate method that first assigning valid zero quantities in the candidate, setting the first index value, then computing combination sets of the remaining indices to assign the zeros. Any remaining positions are filled with a "n-multisubset of X" - a partition of the required sum value permuted across the number of remaining positions to be filled. For example, for a base-5 number with 1 zero, the first index is "1". The zero can fall in any of the indices {1,2,3,4}, leaving three unfilled slots to hold partitions of the value 3 that do not include 0: {1,1,2}, {1,2,1} and {2,1,1}. The 4 possible zero positions times the three ordered partion multisets yields only 12 possibilites for a five-digit number beginning with "1". In fact the entire range of candidates for base-5 is only 28 numbers to check.

I find this analysis really impressive.

```perl
    # math: ref to "the twelvefold way"
    sub n_multisubset_of_X {
        my $n = $_[0];
        my $sum = $_[1];
        my %hash;
        my $i = Integer::Partition->new($sum);

        while (my $partition = $i->next) {
            my @p = permutations($partition);
            foreach my $subp (@p) {
                $hash{join "," , @$subp} = 1 if scalar @$subp == $n;
            }
        }
        my @ans;
        foreach my $subp (keys %hash) {
            push @ans, [split "," , $subp];
        }
        return @ans;
    }
```

[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/jo-37/perl/ch-1.pl)

Jorg combines several of the properties and techniques we've seen elsewhere to provide a compact and elegant solution. These are:
1. In the given base the sum of its digits equals the base, and
2. the least significant digit is zero

The idea we saw before of permutations of number partitions is known as integer composition: the various of ways to arrange a set of integers that when added together will total the target number. He notes, though, that when computing these forms 0 is not included —  it would always be possible to insert a  0 in a result to produce a new variation.

He gets around this by computing compositions for 2 times the target and then subtracting 1 from each value. As we know we are using numbers of length equal to the base, adding 1 to each position will be equal to the base again, so the sum will now total twice the base.

Next, using the second property listed above, the least significant digit, once we have added 1, will be 1, so we need to make compositions to fill the remaining places. There will be the base value minus 1 positions to fill, and they will need to total to twice the base minus 1, and their maximum value will be that of the unaltered base.

Reaching into the very handy `Math::Prime::Util` we find a ready-made composition function `forcomp BLOCK value HASH`, which can be configured to provide exactly this. Much like `map` or other listwise functions `forcomp` applies the block of code to each of the compositions it creates, passing it in through @_.

```perl
    use Math::Prime::Util qw(fromdigits todigitstring forcomp);
    use List::Util 'all';
    use List::MoreUtils 'frequency';

    for my $base (@ARGV) {
        say todigitstring($_, $base), " ($base) = $_ (10)" x !!$verbose
            for @{self_descriptive($base)};
    }

    sub self_descriptive ($base) {
        my @sd;
        forcomp {
            # Get the true digits in the range 0 .. $base - 1.
            my @digit = map $_ - 1, @_, 1;
            my %freq = frequency @digit;
            push @sd, fromdigits(\@digit, $base) if all {
                $digit[$_] ?
                    $freq{$_} && $digit[$_] == $freq{$_} :
                    !$freq{$_}
            } 0 .. $#digit;
        } 2 * $base - 1, {n => $base - 1, amax => $base};

        \@sd;
    }
```

Inside the block the digits are returned to their proper values by subtracting 1, and the
result bagged using `List::Util::frequency()`. If all the values at their indexes match the frequencies we're in, and the number in array form is passed to `fromdigits()` to be given an alphanumeric character.

## unlit PASSAGES and FORBIDDEN FRUIT
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/adam-russell/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/polettix/perl/ch-1.pl), and
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/james-smith/perl/ch-1.pl)

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/adam-russell/perl/ch-1.pl)

Adam returns to the field with a update of his previous efforts, this time adding multithreading support using the `Thread` module. As we saw in in the "Rare numbers" challenge, PWC 102, multithreading can divvy up the search space in a brute force attack into digestable chunks for multiple processes.

```perl
    MAIN:{
        my @threads;
        my $count = 0;
        my $lower = 1;
        my $upper = RANGE_SIZE;
        do{
            for(0..(THREAD_COUNT - 1)){
                my $t = Thread->new(\&self_describing_number, ($lower, $upper));
                push @threads, $t;
                $lower = $upper + 1;
                $upper = $lower +  RANGE_SIZE;
            }
            foreach my $t (@threads){
                my $sdns = $t->join();
                foreach my $sdn (@{$sdns}){
                    print "Base " . $sdn->[0] . ":" .  $sdn->[1] . "\n" if $count < SDN_COUNT;
                    $count++;
                }
            }
            @threads = ();
        } while($count < SDN_COUNT);
    }

```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/polettix/perl/ch-1.pl)

Flavio always has a list of pertinent questions in his [weekly writeup](https://github.polettix.it/ETOOBUSY/2021/04/07/pwc107-self-descriptive-numbers/), and this week one stuck out as highly topical:

> And last another meta question - what are these challenges about? I mean, what does it mean to win the challenge? Is it the fastest to code a solution? A working solution, or any solution? I admit that I didn’t find anything to this regard (**although I do the challenge for the pure fun of doing it and learn something**).

Well Flavio, I do believe you have answered your own question — you went seeking, but [the truth was inside you the whole time](https://tvtropes.org/pmwiki/pmwiki.php/Main/ItWasWithYouAllAlong).

Seriously, though, I believe I am the only person on the team to have written much of anything about this subject, so my word's as good as any I suppose, and so I'll make a stab at it (with the caveat I only review, not tally the credit): I let people define the challenge the way they wish, so they respond in the way that best suits them, which ends up shining a spotlight on TMTOWTDI. You want to write the fastest code? Knock yourself out. Consider yourself encouraged. You want to engage in extremely functional programming? Use a module you just found? [Write a book without using the letter "e"](https://en.wikipedia.org/wiki/Gadsby_(novel))? You do you. Sometime when I read the scripts (and I *do* read them all) I see problems: it seems to me that the efforts don't do what they set out to do, so these are considered "broken" and I simply don't review them. I sometimes have opportunity to speak about errant techniques in informational generalities, but I don't believe in calling folks out in public so I avoid that.

So to sum up: you pretty much nailed it before you even finished, then brought it all home yourself in the parenthetical comment. Good job, carry on.

One more thing: I do recall my predecessor Ryan making a comment on how the variation in the scripts was welcome as it made the reviewing more interesting, and that stuck with me. He deserves credit for shaping my ideas when I was sidling up into the role.

Now, about the solution he's brought to us today, it's basically a big list of numbers and a validator, much the same as others we've seen. The *super* interesting part, for me, is how he creates his candidate list.

Back in August 2020 I recall reading about his excursions into the functionality of the [`Algorithm::Loops`](https://metacpan.org/pod/Algorithm::Loops) module, specifically the `NestedLoops` routine. Well, more accurately I saw something that looked naggingly familiar in his code this week and it bothered me until I'd traced it down, and sure enough, it was from [Flavio's blog](https://github.polettix.it/ETOOBUSY/2020/08/02/nested-loops-iterator/). Curiously enough, he traces his own efforts back to an exploratory series he did in April that year on [Autobiographical Numbers](https://github.polettix.it/ETOOBUSY/2020/04/08/autobiographical-numbers/), but that's not the same reference. Life is seriously intertwined with itself and extricating one piece without carrying along at least some part of the rest is well-nigh impossible.

So presented below is his `nested_loops_iterator()` function, which, when carefully fed a list of lists from 0 to 1 below the base will sequence through the values, one per digit in the resulting number, creating all of the *n*-length numbers in base *n*. And when called it returns a closure that, when called, hands over the next item in the sequence. It's a really nice clean way to produce the candidate numbers.

```perl
    sub three_self_descriptive_numbers {
       my ($b, @found) = (1);
       while ('necessary') {
          my $it = nested_loops_iterator([map { [0 .. ($b - 1)]} 1 .. $b]);
          while (my @args = $it->()) {
             push @found, join '', @args if is_self_descriptive(@args);
             return @found if @found == 3;
          }
          ++$b;
       }
       return @found[0..2];
    }

    sub nested_loops_iterator {
       my ($dims, $opts, $cb, $accumulator) = @_;
       return unless scalar @{$dims};
       ($opts, $cb) = ($cb, $opts) if ref($opts) eq 'CODE';
       my @indexes     = (-1);
       my @accumulator = (undef) x scalar @{$dims};
       return sub {
          while ((my $level = $#indexes) >= 0) {
             my $dimension = $dims->[$level];
             my $i         = ++$indexes[$level];
             if ($i > $#{$dimension}) { pop @indexes }
             else {
                $accumulator[$level] = $dimension->[$i];
                if   ($level == $#{$dims}) { return @accumulator }
                else                       { push @indexes, -1 }
             }
          }
          return;
       }
    }
```


[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/james-smith/perl/ch-1.pl)

> "I wouldn't do this in 'normal' code ..."

James has delivered us another piece of artfully dense code that beggars easy description.

In short, though, this is another version of a brute force approach with a verification step. All condensed into a single line. But that doen't really do justice to what he offers:

```perl
    my ($c,@res) = 0;

    while( ++$c && @res<3 ) {
      push @res, $c if $c == join q(),
        map { scalar @{[ $c=~m{($_)}g ]} } 0 .. -1 + length $c;
    }

    say "@res";
```

Unsatisfied, he continues the relentless compacting with another version:

```perl
    ($c,@res) = 0;

    ( $c == join q(),
            map { scalar @{[ $c=~m{($_)}g ]} }
            0 .. -1 + length $c
    ) && push @res, $c while ++$c && @res<3;

    say "@res";
```

Culminating in a brace of one-liners:

```perl
    perl -E '($c-join"",map{0+@{[$c=~/($_)/g]}}0..-1+length$c)||++$n&&say$c while++$c&&$n<3'

    perl -E '($c-join"",map{0+(@Q=$c=~/($_)/g)}0..-1+length$c)||++$n&&say$c while++$c&&$n<3'
```


There is a very thorough blow-by-blow explanation of his steps both in the source, [and in his writeup](https://github.com/drbaggy/perlweeklychallenge-club/blob/master/challenge-107/james-smith/README.md). I encourage everyone intrigued or overly baffled by his techniques to go and have a look. Or both intrigued *and* baffled, of course. That works too.




------------------------------------------
---

# TASK 2 {#PWC107TASK2}

# List Methods
*Submitted by: Mohammad S Anwar*<br>
Write a script to list methods of a package/class.

**Example**
```
    package Calc;

    use strict;
    use warnings;

    sub new { bless {}, shift; }
    sub add { }
    sub mul { }
    sub div { }

    1;
```

**Output**
```
    BEGIN
    mul
    div
    new
    add
```

## about the solutions
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/abigail/perl/ch-2.pl),
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/adam-russell/perl/ch-2.pl),
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/cheok-yin-fung/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/james-smith/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/jo-37/perl/ch-2.pl),
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/laurent-rosenfeld/perl/ch-2.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/mohammad-anwar/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/perlboy1967/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/pete-houston/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/sgreen/perl/ch-2.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/stuart-little/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/wlmb/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/wanderdoc/perl/ch-2.pl)


There were 20 submissions for the second task this past week. Any meaningful discussion must start on mutually understood terms, so let's get right to it:

## to `BEGIN` or not to `BEGIN`?

There was quite a kerfuffle about the presence of `BEGIN` in the example, and why it was there.

So what is it? To start with a `BEGIN` block *is* a piece of code attached to a module. But that alone doesn't make it a subroutine per se. `BEGIN` blocks are called and executed immediately, as soon as they get compiled, which is as soon as they are read in the script being parsed. When a module is loaded in by Perl certain things need to be done by the interpreter, and these things are placed into a `BEGIN` block. But you can't call it; it needs to be parsed by Perl to be run.

You can put your own `BEGIN` blocks in your code. You can even put more than one, should it suit you, which should pique your interest as no matter how many there are they’re all called `BEGIN`. This has its uses, surely, generally to make sure everything is in order before a script is run or such, but the thing is, again, that it’s not really a subroutine, just a block of code.

[perlmod](https://perldoc.perl.org/perlmod#BEGIN,-UNITCHECK,-CHECK,-INIT-and-END) explicitly states this:

>One should note that these code blocks don’t really exist as named subroutines (despite their appearance).

So personally I’d argue the example is wrong, and that shouldn’t be there. You can’t call a BEGIN block. It just exists, and gets called automatically when it’s parsed. After that, it not only can’t be called, but it no longer even [*exists*](https://perldoc.perl.org/perlmod#BEGIN,-UNITCHECK,-CHECK,-INIT-and-END):

>Once a BEGIN has run, it is immediately undefined and any code it used is returned to Perl’s memory pool.

Which is why there can be more than one, as they're fleeting things that only exist to the interpreter one at a time.

People responded to the existence of this wayward block in different ways: some didn't seemingly realize it didn't belong, and included it if it turned up. Others, when their solutions didn't provide it, purposely tried to make it appear, to match the example, right or wrong. All-in-all it's a curious affair. It's presence in the example is surely  an artifact of querying the symbol table, which we will now explore.

## the SYMBOL TABLE
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/abigail/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/colin-crain/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/polettix/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/jaldhar-h-vyas/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/james-smith/perl/ch-2.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/mohammad-anwar/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/perlboy1967/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/sgreen/perl/ch-2.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/stuart-little/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/wlmb/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/wanderdoc/perl/ch-2.pl)

In Perl the names for all the things — arrays, scalars, subroutines, filehandles and more — all these names are stored in a hash-like data structure known the symbol table. On the surface the names are stored there, not as what they represent but as literal string keys in a hash. These hash keys in turn point to another structure which has nine slots for all the things the name can be: an array, a scalar, a filehandle or whatnot. It even has a slot that hold a pointer to the structure itself, which is where typeglobs enter the chat.

We can query the names portion of the symbol table directly as though it were a hash, using keys.

Most submissions queried the symbol table, and there were several ways to approach this.

### use `keys` on the table
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/dave-jacoby/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/e-choroba/perl/ch-2.pl),
[**Jaldhar H. Vyas**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/jaldhar-h-vyas/perl/ch-2.pl),
[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/mohammad-anwar/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/wanderdoc/perl/ch-2.pl)

As mentioned, calling `keys` on the symbol table for a package will deliver the names of all symbols attached to it. If we do this with the package specified in the example, we obtain the stated result:

```
    BEGIN
    mul
    div
    new
    add
```

[**Mohammad S Anwar**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/mohammad-anwar/perl/ch-2.pl)

Mohammad demonstrated the technique:

```perl
    package Calc;

    use strict;
    use warnings;

    sub new { bless {}, shift; }
    sub add { }
    sub mul { }
    sub div { }

    package main;

    print "$_\n" for (keys %Calc::);
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/e-choroba/perl/ch-2.pl)

There isn't a lot of room for variation in this basic version, as the call to `keys` says it all. Choroba did do some research into the `BEGIN` block, though, reporting the following:

> Inlining the package in the main file excludes the BEGIN. Not<br>
  specifying the "no import ()" adds "import" to the list.

On my system I could not replicate the first behavior. Either as an external module, inlined in the script, or even inlined into the `main::` package I always saw the `BEGIN`. This may well be behavior specific to individual releases, as exactly how Perl handles things behind the scenes is subject to change between versions. For the second statement, he's bringing in `Calc` without importing any functions, hence the empty list. In that case no `import` code block is generated.


```perl
    use warnings;
    use strict;
    use feature qw{ say };

    use lib './lib';
    use Calc ();

    say for keys %{Calc::};
```


### explicitly checking the `{CODE}` slot
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/colin-crain/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/polettix/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/perlboy1967/perl/ch-2.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/roger-bell-west/perl/ch-2.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/sgreen/perl/ch-2.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/stuart-little/perl/ch-2.pl), and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/wlmb/perl/ch-2.pl)

One thing about calling `keys`, though, is that it returns *all* of the symbols from the table. This will include any subroutines attached, of course, but will also generally include other items, such as package variables or wayward codeblocks; there's more than just `BEGIN` that could wind their way in. `VERSION` is another good one.

So how do we determine that the returned name actually signifies a real `&name()` routine? Well as stated the internal data structure behind the pointer has slots for all versions of a name, but we can't just access those slots like we would a multidimensional hash:

```perl
    $Calc::{$name}{CODE}
```

doesn't work. Rather, one thing we can do is to try and dereference it and let the symbol table sort out which version we're requesting, by using the `&` sigil. The slot exists, this we know, but are its contents actually defined?

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/colin-crain/perl/ch-2.pl)

For my own solution I kept the demonstration simple, inlining a `Calc` package in the script and sorting through the symbol table entries. As you can see, I added some package variables to spice things up. A symbolic reference is made to each fully-qualified name, and then we tack on a subroutine sigil and determine whether it's defined. If so we print it out.

```perl
    package Calc;

    use strict;
    use warnings;

    our $foo;
    our @bar;
    our %baz;

    sub new { bless {}, shift; }
    sub add { say 1; }
    sub mul { }
    sub div { }

    1;

    package main;

    say " $_" for sort grep { defined &{"Calc::$_"} } keys %Calc::;
```

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/polettix/perl/ch-2.pl)

Flavio generalizes the idea to accept the name of a package from the command line, taking the trouble of locating and loading the relevant module before asking it what it can do for us. Note the name of the symbol table for a package includes the double colon, so he needs to affix this to the package name to access the table.

```perl
    sub list_methods ($module) {
       no strict 'refs';
       return grep { defined &{$module . '::' . $_} } keys %{$module . '::'};
    }

    sub load ($module) { require("$module.pm" =~ s{::}{/}grmxs); $module }

    use FindBin '$Bin';
    use lib $Bin;;
    my $module = shift // 'Calc';
    say for list_methods(load($module));
```


[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/sgreen/perl/ch-2.pl)

Simon is really kicking it old-school with his reference to the antiquated, original package delimiter of a single quote in addition to the double colon. I recall always hating that; this is probably because I was using emacs the last I saw it out in the wild.

This method involves two symbolic references, both for the `keys` operation and the later `defined`.

```perl
    sub _inc_filename {
        my $name = shift;
        return join( '/', split /(?:\'|::)/, $name ) . '.pm';
    }

    sub main {
        my $package = shift // 'Calc';

        # Import the package
        my $filename = _inc_filename($package);
        require $filename;

        # Get a list of methods
        say foreach grep { defined &{"${package}::$_"} } keys %{"${package}::"};
    }
```

[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/stuart-little/perl/ch-2.pl)

Stuart performs essentially the same sequence of actions, with a few twists. When we call

```perl
    $Package::{$name}
```

what we get back is a typeglob, which is a pointer to the symbol table struct that holds all the various type pointers. This is quite similar to referencing trick we used earlier, and using the `&` sigil on the typeglob gets us to the same place.

In other news, Stuart has noticed that this filters out the various extra possible code blocks from the symbol table, and to match the expected results he enumerates a list of them and adds them to the search. Voila, there you go, and the `BEGIN` block is found.

```perl
    my ($base,$dir,$ext) = fileparse($path,qr/\.[^.]*/);
    my @special = qw(BEGIN END INIT CHECK UNITCHECK);

    for my $key (sort keys %{$base . "::"}) {
        *glob = ${$base . "::"}{$key};
        if ((defined &glob) || (scalar grep {$_ eq $key} @special)) {
            say $key;
        }
    }
```


### more dereferencing typeglobs
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/abigail/perl/ch-2.pl) and
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/duncan-c-white/perl/ch-2.pl)

The symbol table, as we have seen, is a complex beast, with parts that resemble but aren't quite hashes. In Stuart's example we first looked into typeglobs, and now we will pursue that further.

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/duncan-c-white/perl/ch-2.pl)

We notes earlier that directly accessing the type slots in the symbol table as though it were an multidimensional hash won't work, although calling `keys` on the table will return its names. We cannot access the slots in the backend directly, but it turns out that we can through the symbol's typeglob.

There's a lot of unusual referencing going on here, and we need to turn off `strict` to keep Perl quiet about grabbing a typeglob for the symbol table. `*{$glob}{CODE}` will be a coderef, or not, and we can then determine whether it's defined.

```perl
    fun findsubs( $module )
    {
        my @result = ("BEGIN");
        our %stash;
        no strict 'refs';
        *stash = *{"${module}::"};
        while( my( $symbol,$glob) = each %stash )
        {
            #say "symbol=$symbol, glob=",Dumper($glob);
            push @result, $symbol if defined *{$glob}{CODE};
        }
        use strict 'refs';
        return @result;
    }
```


[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/abigail/perl/ch-2.pl)

Abigail's technique is very similar, but uses the implicit boolean of being defined to control his conditional.

```perl
    my $symbol_table = do {no strict 'refs'; \%{$module . "::"}};

    foreach my $symbol (keys %$symbol_table) {
           say $symbol  if *{$$symbol_table {$symbol}} {CODE};
    }
```


### `UNIVERSAL::can()`
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/james-smith/perl/ch-2.pl) and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/wanderdoc/perl/ch-2.pl)

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/james-smith/perl/ch-2.pl)

James determines whether the there are defined coderefs for his symbol table entries in a completely different way. In the grafted-on Perl object heirarchy, all packages are classes, and all classes inherit from `UNIVERSAL`, so ergo all packages have `can()` available to them.

Of note he sets up a little experiment, using `use` and `require` on two otherwise identical packages to demonstrate how `use` will generate an `import` block and `require` will not.

```perl
    require Calc_Require;
    use     Calc_Use;

    say join "\n  ",'Calc_Require:', sort keys %Calc_Require::;
    say '';
    say join "\n  ",'Calc_Use:',     sort keys %Calc_Use::;
    say '';

    ## If we want to hide the "fake" methods (import/BEGIN) we
    ## can use grep/can to do so

    say join "\n  ",'Calc_Require:', sort
                                     grep {Calc_Require->can($_)}
                                     keys %Calc_Require::;
    say '';
    say join "\n  ",'Calc_Use:',     sort
                                     grep {Calc_Use->can($_)}
                                     keys %Calc_Use::;
    say '';

```

## INSPECT IT YOURSELF
[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/cheok-yin-fung/perl/ch-2.pl) and
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/laurent-rosenfeld/perl/ch-2.pl)

No one ever said you couldn't just examine the module yourself, scouting for subroutines. When one considers how many ways the characters "sub" may conceivably arise, we know that this path is going to be tricky. Caveat emptor.

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/cheok-yin-fung/perl/ch-2.pl)

CY opens the code to be consulted and scans each line with a regular expression that, well, looks for subroutines. That's one way to get things done.

```perl
    my $program = $ARGV[0];

    open(SCRIPT, $program) or die "Fail to read $program\n";

    while (my $line = <SCRIPT>) {
        while ( $line =~ /sub(\s+)(\&|\w)(\w*)/g ) {
            print $2.$3."\n";
        }
    }
```

[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/laurent-rosenfeld/perl/ch-2.pl)

Private nested subroutines within a block will also hit the symbol table, so Laurent's addition of the leading `\s*` will find these while still anchored to the front of the line.

```perl
    while (<>) {
        say $1 if /^\s*sub\s+(\w+)/;
    }
```


## use a MODULE
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/adam-russell/perl/ch-2.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/jo-37/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/pete-houston/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/wanderdoc/perl/ch-2.pl)

A variety of modules were available to assist in the task. These variously looked inside the given class, or at the code it was written in, or at the perl internals themselves to glean the answers requested.

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/adam-russell/perl/ch-2.pl)

Adam brings us the `Perl::Analysis::Static` module, and its standalone version `perlanalyst`. As he states the module itself is stuck at a very alpha version 0.004, he offers that the standalone app version works better. Ok. The app makes an effort at analyzing the proffered code, and Adam then parses the output.

One intersting thing is his take on the mysterious `BEGIN`. Noting that the bock seems to be produced by adding the package using `use`, he scans the document for `use` statements and if so adds `BEGIN` to the output. Thats... reasonable? I guess?

```perl
    sub analyze{
        my($file) = @_;
        my @subs;
        my @uses;
        my @subroutines;
        my $subs = `perlanalyst $file --analysis Sub`;
        $subs =~ s/$file://;
        @subs = split(/\n/, $subs);
        my $uses = `perlanalyst $file --analysis Use`;
        $uses =~ s/$file://;
        @uses = split(/\n/, $uses);
        for my $s (@subs){
            $s =~ s/\s+//;
            my @fields = split(/:/, $s);
            push @subroutines, $fields[1] if(length($s) > 0);
        }
        push @subroutines, "BEGIN" if(@uses);
        return @subroutines;
    }

    MAIN:{
        my $FILE = $ARGV[0];
        my @subroutines = analyze($FILE);
        print join("\n", sort {$a cmp $b} @subroutines) . "\n";
    }
```


[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/jo-37/perl/ch-2.pl)

Jorg, not surprisingly, brings us something I don't believe I've ever seen before. He seems to do that a lot. Well, there's a whole lot to see in this world so we best get started.

Ok, to be fair to myself I have *looked* at the Perl backend modules. So I have, in fact, *seen* them. But I've never actually *gone in there*. No, that experience starts here.

He starts by opening up a pipe to an instance of the interpreter running the B::Concise backend module, which returns a line-by-line report of objects in the symbol table as it proceeds. He read this pipe and parses it out, extracting the names of the subroutines and special blocks.

One thing that has been nagging me since this whole project started was what was in those mysterious `BEGIN` blocks created by Perl when we bring in a package. "Stuff Perl needs to know" wasn't really doing it for me. Well, thanks to the output of

```perl
    perl -Mlib=. -MO=Concise,-stash=Calc,BEGIN -e ''
```

I finally know. The output lists 8 `BEGIN` blocks, the first six being within Concise itself. However blocks 7 and 8 originate in `Calc`:

```
    BEGIN 7:
    1u <1> leavesub[1 ref] K/REFC,1 ->(end)
    -     <@> lineseq KP ->1u
    1m       <;> nextstate(Calc 5 Calc.pm:3) v:{ ->1n
    1o       <1> require sK/1 ->1p
    1n          <$> const(PV "strict.pm") s/BARE ->1o
    -        <;> ex-nextstate(Calc 5 Calc.pm:3) v:{ ->1p
    -        <@> lineseq K ->-
    1p          <;> nextstate(Calc 5 Calc.pm:3) :{ ->1q
    1t          <1> entersub[t1] KRS*/TARG ->1u
    1q             <0> pushmark s ->1r
    1r             <$> const(PV "strict") sM ->1s
    1s             <.> method_named(PV "import") ->1t
    BEGIN 8:
    23 <1> leavesub[1 ref] K/REFC,1 ->(end)
    -     <@> lineseq KP ->23
    1v       <;> nextstate(Calc 6 Calc.pm:4) v:*,&,{,x*,x&,x$,$ ->1w
    1x       <1> require sK/1 ->1y
    1w          <$> const(PV "warnings.pm") s/BARE ->1x
    -        <;> ex-nextstate(Calc 6 Calc.pm:4) v:*,&,{,x*,x&,x$,$ ->1y
    -        <@> lineseq K ->-
    1y          <;> nextstate(Calc 6 Calc.pm:4) :*,&,{,x*,x&,x$,$ ->1z
    22          <1> entersub[t1] KRS*/TARG,STRICT ->23
    1z             <0> pushmark s ->20
    20             <$> const(PV "warnings") sM ->21
    21             <.> method_named(PV "import") ->22
```

So there's a lot going on here, but it appears these blocks ensure that the `use strict` and `use warnings` directives are able to be fulfilled before loading the module. Which is really cool. Now I finally know. I can't wait to look at other stuff.

The following lines in the output look like this:

```perl
    FUNC: *Calc::add
    2  <1> leavesub[1 ref] K/REFC,1 ->(end)
    1     <;> nextstate(Calc 9 Calc.pm:9) P:*,&,{,x*,x&,x$,$ ->2
    FUNC: *Calc::div
    2  <1> leavesub[1 ref] K/REFC,1 ->(end)
    1     <;> nextstate(Calc 13 Calc.pm:11) P:*,&,{,x*,x&,x$,$ ->2
    FUNC: *Calc::mul
    2  <1> leavesub[1 ref] K/REFC,1 ->(end)
    1     <;> nextstate(Calc 11 Calc.pm:10) P:*,&,{,x*,x&,x$,$ ->2
    FUNC: *Calc::new
    6  <1> leavesub[1 ref] K/REFC,1 ->(end)
    -     <@> lineseq KP ->6
    1        <;> nextstate(Calc 8 Calc.pm:8) v:*,&,x*,x&,x$,$ ->2
    5        <@> bless sK/2 ->6
    -           <0> ex-pushmark s ->2
    3           <@> anonhash sK* ->4
    2              <0> pushmark s ->3
    4           <0> shift s* ->5
    9  <@> leave[1 ref] vKP/REFC ->(end)
    7     <0> enter v ->8
    8     <0> stub v ->9
    -     <;> ex-nextstate(main 1 -e:1) v:{ ->9
    -e syntax OK
```

Here we can see the four functions clearly labeled. The `new` is a tad more complex than the others. By identifying the `FUNC:` labeled lines he can extract the names with a regular expression. A slightly more complicated expression identifies the `BEGIN` blocks that are assigned to the package we're examining by locating the `nextstate(Calc 5 Calc.pm:3)` styled identifier.

This is really interesting stuff, Jorg, thank you.

Here's the code:

```perl
    # B::Concise reports all subs including the special blocks BEGIN etc.
    # when called with
    # -stash=<pgk>,BEGIN,...
    # But it reports B::Concise's BEGIN blocks, too.  So these need to be
    # identified and skipped.  There's a "nextstate" entry following a
    # special block entry identifying the package it belongs to.

    sub list_methods {
        my $pkg = shift;
        # The names of special blocks.
        my @specials = qw(BEGIN UNITCHECK CHECK INIT END);
        # The same as a regexp.
        my $special_re = sub {local $" = '|'; qr(@_)}->(@specials);

        # Suppress "syntax OK" written to STDERR.
        no warnings 'once';
        open STDERR_SAVE, '>&2' or die 'cannot duplicate STDERR';
        close STDERR;

        my @meth;
        my $concise;
        {
            local $" = ',';
            open $concise, '-|',
               "$^X -Mlib=. -MO=Concise,-stash=$pkg,@specials -e ''"
                or die 'cannot open Concise pipe';
        }

        my $special;
        while (<$concise>) {
            # Forget special block on entry to the next block/sub.
            undef $special if /^(?:$special_re|FUNC)/;
            # Found a sub inside the package.
            push @meth, $1 if /^FUNC: \*${pkg}::(\w+)/;
            # Found a special block.
            $special = $1 if /^($special_re)\s/;
            # Special block belongs to the package.
            push @meth, $special if $special && /<;> nextstate\($pkg/;
        }
        close $concise;
        open STDERR, '>&STDERR_SAVE' or die 'cannot restore STDERR';

        [uniq @meth];
    }
```


[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/pete-houston/perl/ch-2.pl)

`PPI` is an acronym for `Parse::Perl::Isolated`. As per its docs:

>The purpose of PPI is not to parse Perl *Code*, but to parse Perl *Documents*. By treating the problem this way, we are able to parse a single file containing Perl source code "isolated" from any other resources, such as libraries upon which the code may depend, and without needing to run an instance of perl alongside or inside the parser.

So using PPI we can look inside a Perl script, or module, or whatever, and have it tell us things about what's there. Sounds perfect, really.

PPI constructs and fits its input into a Perl Document Object Model, with structured  classes and subclasses. One of these subclasses is `PPI::Statement::Sub`, being that `sub foo BLOCK` construction that actually defines a subroutine, versus some other usage of the word "sub".

In this we need only to grab the objects labeled like this and ask them their name.

```perl
    use PPI;

    my $doc  = PPI::Document->new (shift);
    my $subs = $doc->find ('PPI::Statement::Sub');
    print $_->name . "\n" for @$subs;
```

[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-107/wanderdoc/perl/ch-2.pl)

Finally, the Doctor delivers three pieces of code to us today. The first two use methods we have seen before: the first indiscriminately keys the symbol table, the second uses `UNIVERSAL->can()` to filter for symbols that are actually linked to coderefs.

The third method, on the other hand, uses `Class::Inspector` to tell them things about the package in question. This is, as they say, dead simple:

```perl
    use Class::Inspector;
    print "$_$/" for @{ Class::Inspector->methods('Calc')};
```



------------------------------------------


---

# BLOGS {#PWC107BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, I somehow continue to maintain my bearings. Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC093BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *READ* these *BLOG* *LINKS*:

**( *don't think, trust your training, you're in the zone, just do it ...* )**


**Aaron Smith**

 * [Perl Weekly Challenge 107 - Aaron Smith](https://aaronreidsmith.github.io/blog/perl-weekly-challenge-107/) ( *Raku* )

**Abigail**

 * [Perl Weekly Challenge 107: Self-descriptive Numbers](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-107-1.html) ( *Perl* )
 * [Perl Weekly Challenge 107: List Methods](https://abigail.github.io/HTML/Perl-Weekly-Challenge/week-107-2.html) ( *Perl* )

**Adam Russell**

 * [Static Analysis and Self Describing Numbers (now with Threads!): The Weekly Challenge 107 — RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2021/04/11) ( *Perl* )

**Arne Sommer**

 * [Self-Deceptive Methods with Raku](https://raku-musings.com/self-deceptive-methods.html) ( *Raku* )

**Colin Crain**

 * [The Symbol Table Describes Itself — Programming Excursions in Perl and Raku](https://colincrain.com/2021/04/11/the-symbol-table-describes-itself/) ( *Perl & Raku* )

**Dave Jacoby**

 * [Self Description Redux: Perl Weekly Challenge 107 | Committed to Memory](https://jacoby.github.io/2021/04/05/self-description-redux-perl-weekly-challenge-107.html) ( *Perl* )

**Flavio Poletti**

 * [PWC107 - Self-descriptive Numbers - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/04/07/pwc107-self-descriptive-numbers/) ( *Perl* )
 * [PWC107 - List Methods - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/04/08/pwc107-list-methods/) ( *Perl* )

**Jaldhar H. Vyas**

 * [Perl Weekly Challenge: Week 107](https://www.braincells.com/perl/2021/04/perl_weekly_challenge_week_107.html) ( *Perl & Raku* )

**James Smith**

 * [Perl Weekly Challenge 107](https://github.com/drbaggy/perlweeklychallenge-club/blob/master/challenge-107/james-smith/README.md) ( *Perl* )

**Lance Wicks**

 * [Perl Weekly Challenge 107 - Self describing numbers... live coded - Perl🐪.🥝 Kiwi](https://perl.kiwi/tales/2021/04/06/perl-weekly-challenge-107-self-describing-numbers-live-coded/) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 107: Self-Descripting Numbers and List Methods | laurent_r](http://blogs.perl.org/users/laurent_r/2021/04/perl-weekly-challenge-107-self-descripting-numbers-and-list-methods.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 107: copying myself – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2021/04/08/PerlWeeklyChallenge107.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 107: copying myself – Luca Ferrari – Open Source advocate, human being](https://fluca1978.github.io/2021/04/08/PerlWeeklyChallenge107.html#task2) ( *Raku* )

**Mohammad S Anwar**

 * [Perl Weekly Challenge - 107 (Task #1: Self-descriptive Numbers) - YouTube](https://www.youtube.com/watch?v=WRAwhoqgaNI) ( *Perl* )

**Roger Bell_West**

 * [RogerBW's Blog: Perl Weekly Challenge 107: Self-Descriptive Methods](https://blog.firedrake.org/archive/2021/04/Perl_Weekly_Challenge_107__Self_Descriptive_Methods.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 107](https://dev.to/simongreennet/weekly-challenge-107-hm2) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 107 – W. Luis Mochán](https://wlmb.github.io/2021/04/05/PWC107/) ( *Perl* )
